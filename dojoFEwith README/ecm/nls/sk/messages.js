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
		welcome_user: "Vitajte, ",
		about: "Informácie",
		all: "Všetky",
		help: "Pomoc",
		user_session: "Užívateľská relácia",
		user_session_for: "Užívateľská relácia pre ${0}",
		user_session_for_with_container: "Užívateľská relácia pre ${0} (${1})",
		tools: "Nástroje",
		login: "Prihlásiť sa",
		logout: "Odhlásiť sa",
		search: "Hľadať",
		saved_searches: "Uložené vyhľadávania",
		content_analytics: "Analyzovať obsah",
		reset: "Zrušiť",
		reset_hover: "Pre všetky neuložené údaje na všetkých kartách budú obnovené predtým uložené hodnoty.",
		reset_default: "Zrušiť výber",
		reset_default_hover: "Na všetkých kartách vymaže pole Aktuálne označenie.",
		locale: "Miestne nastavenie:",
		up: "Nahor",
		down: "Nadol",
		restore: "Obnoviť",
		maximize: "Maximalizovať",
		values_label: "Hodnoty",
		value_label: "Hodnota:",
		path_label: "Cesta:",
		new_label: "Nové:",
		back_label: "Späť",
		clear: "Odstrániť",
		set: "Nastaviť...",
		browse: "Prehľadávanie",
		work: "Práca",
		connect: "Pripojiť",
		documents: "Dokumenty:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM a logo IBM sú ochranné známky spoločnosti IBM Corporation zaregistrované v mnohých jurisdikciách na celom svete. Java a všetky s ňou súvisiace ochranné známky a logá sú ochranné známky alebo registrované ochranné známky spoločnosti Oracle alebo jej pridružených spoločností. Technológia Oracle Outside In Technology, ktorá je súčasťou tejto aplikácie, podlieha podmienkam licencie na obmedzené používanie a môže sa používať iba spolu s touto aplikáciou. Licencia na tento Program sa udeľuje na základe podmienok licenčnej zmluvy dodanej s týmto Programom.  Táto licenčná zmluva sa môže nachádzať v adresári Programu alebo v knižnici s názvom \"License\" alebo \"Non_IBM_License\", ak taká existuje, alebo sa poskytuje v tlačenej podobe. Pred použitím Programu si túto zmluvu pozorne prečítajte. Používaním Programu vyjadrujete súhlas s jej podmienkami. ",
		edit: "Upraviť",
		cancel: "Zrušiť",
		close: "Zatvoriť",
		close_all: "Zatvoriť všetky karty",
		close_others: "Zatvoriť ostatné karty",
		ok: "OK",
		yes: "Áno",
		no: "Nie",
		open: "Otvoriť",
		refresh: "Obnoviť",
		refresh_cabinets: "Obnoviť všetky kabinety súborov",
		delete_text: "Odstrániť",
		export_config: "Exportovať konfiguráciu",
		description: "Popis",
		true_label: "Áno",
		false_label: "Nie",
		error: "Chyba",
		error_reference_hover: "Vyhľadať ďalšie informácie o tejto chybe v lokalite www.ibm.com.",
		url_label: "Adresa URL",
		default_label: "Predvolené",
		ibm_label: "IBM",
		light_label: "Svetlé",
		dark_label: "Tmavé",
		save: "Uložiť",
		saveAs: "Uložiť ako...",
		save_and_close: "Uložiť a zatvoriť",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Žiadne",
		Name: "Názov",
		"${NAME}": "Názov",
		mime_type: "Typ MIME",
		mime_type_contains_label: "Typ MIME obsahuje",
		mime_type_header: "Typ MIME",
		mime_type_icon: "Ikona typu MIME",
		casesearch: "Prípad",
		item: "Položka",
		no_mime_type: "Táto položka nemá žiadny obsah.",
		items_selected: "${0} vybratých položiek.",
		requestor: "Vyžiadal",
		scheduledStartTime: "Plánovaný čas spustenia",
		isRecurring: "Opakuje sa",
		weeks: "Týždne",
		days: "Dni",
		hours: "Hodiny",
		endTime: "Čas ukončenia",
		username: "Meno užívateľa",
		password: "Heslo",
		serverURL: "Adresa URL servera",
		enable: "Povoliť",
		disable: "Zakázať",
		finish: "Dokončiť",
		previous: "Späť",
		next: "Ďalej",
		schedule: "Plán",
		removeFromThisList: "Odstrániť z tohto zoznamu",
		status: "Stav",
		scheduledEndTime: "Naplánovaný čas ukončenia",
		type: "Typ",
		mode: "Režim",
		startTime: "Čas spustenia",
		createdBy: "Vytvoril",
		nextScheduledTime: "Ďalší naplánovaný čas",
		id: "Identifikátor",
		duration: "Trvanie",
		repeatCycle: "Frekvencia",
		taskTypeName: "Typ úlohy",
		to: "do",
		filter: "Filter:",
		error_message: "Chybová správa",

        file_type: "Typ dokumentu",
        word_template_name: "Názov šablóny Word",
        excel_template_name: "Názov šablóny Excel",
        powerpoint_template_name: "Názov šablóny PowerPoint",
        template_description: "Popis šablóny",
        action_add_template: "Pridať",
        action_change_template: "Upraviť",      
        action_edit_template_properties: "Vlastnosti",
        add_presentation_template: "Pridať šablónu prezentácie",
    	add_spreadsheet_template: "Pridať šablónu tabuľky",
    	add_doc_template: "Pridať šablónu dokumentu",    	
    	file_type_doc_hover: "Musíte určiť platný súbor šablóny pre textové dokumenty.<br><br>Platné typy MIME: ${0}",
    	file_type_doc_error: "Musíte určiť platný súbor šablóny pre textové dokumenty.<br><br>Vybratý typ MIME dokumentu: ${0}<br><br>Platné typy MIME: ${1}",
    	file_type_presentation_hover: "Musíte určiť platný súbor šablóny pre dokumenty prezentácií.<br><br>Platné typy MIME: ${0}",
    	file_type_presentation_error: "Musíte určiť platný súbor šablóny pre dokumenty prezentácií.<br><br>Vybratý typ MIME dokumentu: ${0}<br><br>Platné typy MIME: ${1}",
    	file_type_spreadsheet_hover: "Musíte určiť platný súbor šablóny pre tabuľkové dokumenty.<br><br>Platné typy MIME: ${0}",
    	file_type_spreadsheet_error: "Musíte určiť platný súbor šablóny pre tabuľkové dokumenty.<br><br>Vybratý typ MIME dokumentu: ${0}<br><br>Platné typy MIME: ${1}",
    	office_online_only_one_template_error: "Môžete vybrať iba jeden súbor.",
    	change_presentation_template: "Upraviť šablónu prezentácie",
    	change_spreadsheet_template: "Upraviť šablónu tabuľky",
    	change_doc_template: "Upraviť šablónu dokumentu",
    	change_button: "Upraviť",
	    new_document_dialog_doc_title: "Nový dokument",
	    new_document_dialog_presentation_title: "Nová prezentácia",
	    new_document_dialog_spreadsheet_title: "Nový tabuľkový dokument",
	    new_document_dialog_title_label: "Nadpis:",
	    new_document_dialog_title_hover: "Uveďte nadpis pre tento dokument.",
	    new_document_dialog_title_missing_message: "Musíte uviesť nadpis.",
	    office_online_save_before_adding_templates_title: "Uložiť zmeny do archívu",
	    office_online_save_before_adding_templates_error: "Nemôžete pridávať šablóny dokumentov Office, kým neuložíte zmeny, ktoré ste vykonali v archíve. Ak chcete pridať šablóny dokumentov Office, kliknite na položku <b>Uložiť a zatvoriť</b> a potom znova otvorte archív.",
	    copy_to_OOS_dialog_doc_title: "Nový dokument",
	    office_online_checkin_cancelcheckout_message: "Tento dokument sa práve upravuje v službe Microsoft Office Online. Kým bude tento dokument otvorený v službe Microsoft Office Online, nemôžete ho prihlásiť ani zrušiť odhlásenie.",
	    new_document_classification: "Klasifikácia:",
	    new_document_classification_help: "Vynuluje triedy, vlastnosti a rodičovský priečinok (ak existuje) zdrojového dokumentu. Pri pridávaní dokumentu pomocou šablóny položky bude automaticky vybratá šablóna položky zdrojového dokumentu, ak existuje. Vlastnosti zdrojového dokumentu sa používajú ako predvolené hodnoty, ale priečinok a trieda zadané v šablóne položky sa zachovajú.",
		new_document_classification_use_source_document: "Použiť zdrojový dokument:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} - ikona typu",
		repository_name_and_type: "${0} - názov a typ",
		select_class_label: "Vybrať ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Zobrazenie Podrobnosti",
		detail_view_button: "Podrobnosti",
		magazine_view_button_tooltip: "Zobrazenie Časopis",
		magazine_view_button: "Časopis",
		filmstrip_view_button_tooltip: "Zobrazenie Filmový pás",
		filmstrip_view_button: "Filmový pás",

		magazine_view_show: "Zobraziť v zobrazení zásobníkov",
		detail_view_show: "Zobraziť v zobrazení podrobností",

		total_count_item: "položka",
		total_count_items: "položiek",
		total_count_more_items: "Viac položiek ako ${0}",

		extension_changed: "Prípona vybratého súboru sa nezhoduje s príponou pôvodného súboru.  Vyberte iný súbor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Vybratý prezerač nepodporuje všetky typy súborov. Ak uložíte toto mapovanie prezerača, môžu sa vyskytnúť problémy pri prezeraní dokumentov. Odporúča sa, aby ste vybrali prezerač, ktorý podporuje všetky typy súborov, keď je vybratá voľba Všetky typy súborov.<br><br><b>Tip:</b> Nasledujúce prezerače podporujú všetky typy súborov:<ul><li>Prezerač apletov</li><li>Prezerač AJAX</li><li>Konverzia HTML</li><li>Konverzia PDF</li><li>Webový prehliadač</li></ul>",
		file_type_any: "Všetky typy súborov",
		file_type_any_hover: "Vyberte túto voľbu, ak chcete používať vybratý prezerač na zobrazovanie všetkých dokumentov, bez ohľadu na typ súboru. Táto voľba je podporovaná pre nasledujúce prezerače:<br><br><ul><li>Prezerač apletov</li><li>Prezerač AJAX</li><li>Konverzia HTML</li><li>Konverzia PDF</li><li>Webový prehliadač</li></ul><br><br><b>Zapamätajte si:</b> Ak chcete väčšinu času používať konkrétne prezerače, všetky mapovania, ktoré vytvoríte a ktoré použijú túto voľbu, musia byť presunuté na koniec mapy vášho prezerača. ",
		file_type_input: "Nový typ súboru:",

		mime_type_input: "Nový typ MIME:",
		mime_type_input_invalid: "Nový typ MIME nemôže obsahovať nasledujúce znaky: ,",
		mime_type_available: "Dostupné typy MIME",
		mime_type_selected: "Vybraté typy MIME",
		file_type_input: "Nový typ súboru:",
		file_type_input_invalid: "Nový typ súboru nemôže obsahovať nasledujúce znaky: ,",
		file_type_available: "Dostupné typy súborov",
		file_type_selected: "Vybraté typy súborov",
		file_type_header: "Typ súboru",
		viewer: "Prezerač:",
		viewer_viewer: "Prezeranie",
		viewer_view: "Zobrazenie",
		viewer_preview: "Zobrazenie ukážky",
		viewer_merge_and_split: "Zlúčiť a rozdeliť",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Len ukážka",
		preview_only_label: "(ukážka)",
		preview_only_hover: "Toto mapovanie prezerača sa použije iba po tom, čo užívateľ klikne na tlačidlo <b>Ukážka</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Tento archív nepodporuje prehliadanie. Vyberte iný archív.",

		repository_community_teamspace_message: "Ako archív komunitných knižníc je už označený iný archív. Ak chcete existujúci archív naďalej používať ako archív komunitných knižníc, voľbu <b>Nie</b> vyberte predtým ako uložíte svoje zmeny, aby nedošlo k nahradeniu existujúceho archívu týmto archívom.",

		favorites_empty: "Ešte nemáte žiadne obľúbené položky.",
		syncItems_empty: "Ešte nemáte žiadne synchronizované súbory.",

		root_folder_id: "ID koreňového priečinka",
		unified_searches: "Vyhľadávania vo viacerých archívoch:",
		max_results: "Počet výsledkov:",
		direct_retrieve_enabled: "Priame získavanie:",
		itemTypesToDisplay: "Zobrazené typy položiek:",
		allItemTypes: "Všetky typy položiek",
		include_attr_group_name: "Popisy skupín atribútov v zobrazovaných názvoch atribútov:",
		admin_repcfg_include_attr_group_name_hover: "Popis skupiny atribútov je štandardne súčasťou názvov atribútov skupín atribútov. Vďaka tomu môžu užívatelia ľahšie zistiť, do ktorej skupiny atribútov patrí atribút skupiny atribútov pri práci s atribútmi.<br>Napríklad, užívatelia môžu vidieť nasledujúci názov atribútu skupiny atribútov: Nastavenia dokumentu.Typ dokumentu.<br><br>Ak zakážete túto možnosť, v názve atribútu skupiny atribútov sa použije iba popis atribútov.<br>Takže užívatelia napríklad uvidia tento názov: Typ dokumentu.<br><br>Bez popisu skupiny atribútov užívatelia možno nebudú vedieť rozlíšiť, či je Typ dokumentu jednoduchým atribútom alebo atribútom skupiny atribútov.",
		documentItemTypesOnly: "Iba typy položiek s modelmi dokumentov",
		object_store: "Symbolický názov skladu objektov",
		object_store_display_name: "Zobrazovaný názov skladu objektov",
		teamspaceUpgradeMsg: "Vaše tímové priestory sa aktualizujú po uložení konfigurácie archívu. Ak máte veľký počet tímových priestorov, aktualizácia môže trvať niekoľko minút.",
		synchUpgradeMsg: "Modul synchronizácie v tomto archíve sa aktualizuje, keď uložíte konfiguráciu archívu.",
		protocol: "Protokol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID skladu CMIS:",
		cmis_url: "Adresa URL dokumentu služby naviazania CMIS AtomPub:",
		trace_level: "Úroveň sledovania",
		trace_dir: "Adresár sledovania",
		temp_dir: "Adresár temp",
		show_document_location: "Zobraziť umiestnenie dokumentu",
		max_folders: "Maximálny počet priečinkov",
		afp_conversion: "Konverzia AFP",
		line_conversion: "Konverzia riadkových údajov",
		max_hits: "Maximálny počet nájdených záznamov",
		folder_search_expresssion: "Výraz vyhľadávania v priečinkoch",
		max_item_types: "Maximálny počet typov položiek",
		max_worklists: "Maximálny počet pracovných zoznamov",
		update_storage_collection: "Aktualizovať kolekciu úložných priestorov",
		include_mime_types_in_search_results: "Zahrnúť typy MIME do výsledkov vyhľadávania",
		object_type: "Typ objektu",
		object_type_document: "Dokumenty",
		object_type_folder: "Priečinky",
		file_label: "Súbor:",
		plugin_jarfile_path_label: "Cesta k súboru JAR:",
		plugin_classfolder_path_label: "Cesta k súboru triedy:",
		plugin_classname_label: "Názov triedy:",
		plugin_id_label: "Identifikátor modulu plug-in:",
		class_label: "Trieda",
		configuration: "Konfigurácia",
		connect_repository: "Pripojiť...",
		server_type: "Typ servera",
		timeout_in_seconds: "Vyhradený čas (v sekundách):",
		default_search_template: "Predvolené hľadanie",
		search_filtered_properties: "Vyhľadávateľné vlastnosti",
		property_contains_label: "Vlastnosť obsahuje",
		class_contains_label: "Trieda obsahuje",
		search_filtered_operators: "Operátory vyhľadávania",
		default_search_results: "Výsledky vyhľadávania",
		data_type: "Typ údajov",
		status_bar: "Stavový riadok",
		operators_for: "Operátory pre:",
		currentUser: "Aktuálny užívateľ",
		nameContains: "Meno obsahuje",
		searchFor: "Hľadať",
		server_autentication: "Autentifikácia na serveri (OAuth 2.0 s JWT)",
		standard_authentication: "Štandardná autentifikácia (3-úrovňová OAuth2.0)",
		developer_authentication: "Autentifikácia vývojára",
		enterprise_id: "Podnikové ID:",
		public_key_id: "ID verejného kľúča:",
		private_key_path: "Cesta k súboru súkromných kľúčov:",
		server_user_email: "E-mail užívateľa servera",

		filter_builder_tooltip: "Definovať filter",

		// Launch bar
		launchbar_home: "Otvoriť domovskú stránku",
		launchbar_favorites: "Otvoriť obľúbené položky",
		launchbar_browse: "Otvoriť zobrazenie prehľadávania",
		launchbar_browse_popup: "Otvoriť kontextový zoznam prehľadávania",
		launchbar_search: "Otvoriť zobrazenie vyhľadávania",
		launchbar_search_popup: "Otvoriť kontextový zoznam hľadania",
		launchbar_teamspaces: "Otvoriť zobrazenie tímových priestorov",
		launchbar_teamspaces_popup: "Otvoriť kontextový zoznam tímových priestorov",
		launchbar_work: "Otvoriť zobrazenie práce",
		launchbar_work_popup: "Otvoriť kontextový zoznam práce",
		launchbar_entry_templates: "Otvoriť zobrazenie šablón položiek",
		launchbar_entry_templates_popup: "Otvoriť vyskakovací zoznam šablón položiek",
		launchbar_admin: "Otvoriť zobrazenie správy",

		admin_sync_server: "Služby synchronizácie",
		admin_settings: "Nastavenia",
		admin_interface_text: "Označenia",
		admin_interface_text_desktop: "Pracovná plocha:",
		admin_desktops: "Pracovné plochy",
		admin_repositories: "Archívy",
		admin_mobile: "Mobilný prístup",
		admin_menus: "Ponuky",
		admin_reason_codes: "Príčiny revízie",
		admin_plugins: "Moduly plug-in",
		admin_plugins_state_enabled: "Modul plug-in je povolený",
		admin_plugins_state_disabled: "Modul plug-in je zakázaný",
		admin_plugins_version: "Verzia:",
		admin_plugins_version_heading: "Verzia",
		admin_plugins_icon: "Ikona modulu plug-in",
		admin_viewer_mapping_icon: "Ikona mapovania prezeračov",
		admin_viewer_defs: "Mapy prezeračov",
		admin_viewer_dialog_title: "Mapovanie",
		admin_viewer_dialog_new_title: "Nové mapovanie",
		admin_viewer_dialog_instructions: "Mapovanie určuje, ktorý prezerač má byť použitý pre súbory v archíve. Môžete vytvoriť viacero mapovaní na určenie rozličných prezeračov pre rozličné typy súborov. Mapovanie môžete definovať buď podľa typu MIME, alebo podľa príponu súboru. Mapovania s príponami súborov budú mapované do názvov dokumentov. Napríklad, mapovanie s typom súboru nastaveným na gif bude mapované do názvov dokumentov, ktoré končia príponou .gif",
		admin_desktop_viewer_defs: "Mapa prezerača:",
		admin_desktop_viewer_defs_hover: "Mapa prezerača určuje, ktorý prezerač sa má použiť na otváranie rozličných typov dokumentov v archíve.<br><br>Nové mapy prezerača môžete vytvoriť v časti <b>Mapy prezeračov</b> administračného  nástroja.",
		admin_desktops_used: "Používané na pracovných plochách",
		admin_desktop_additional_settings: "Ďalšie nastavenia:",
		admin_default_desktop: "Nastaviť ako predvolenú pracovnú plochu",
		admin_default_desktop_header: "Predvolená pracovná plocha",
		admin_layout_tab_title: "Rozloženie",
		admin_desktop_icon: "Ikona pracovnej plochy",

		// Themes
		admin_themes: "Motívy",
		admin_theme_list_instructions: "Môžete vytvoriť motív, ktorý vám uľahčí prispôsobenie webového klienta pre vašu organizáciu. Ak vo vašom prostredí potrebujete použiť rozličné farby, písma alebo logá v rôznych pracovných plochách, môžete vytvoriť viacero motívov.<br><br>Keď vytvoríte motív, môžete ho v pracovnej ploche uplatniť tak, že na karte <b>Vzhľad</b> pracovnej plochy vyberiete tento motív.",
		admin_theme_instructions: "Vytvorením motívu môžete určiť farby a písma, ktoré sa zobrazujú vo webovom klientovi. Okrem toho môžete pomocou motívu zmeniť logo, názov aplikácie a text vyhlásenia o autorských právach, ktoré sa zobrazujú na prihlasovacej stránke a v reklamnom pruhu.",
		admin_theme_heading: "Motív: <b>${0}</b>",
		admin_new_theme: "Nový motív",
		admin_text_theme: "Motív",
		admin_delete_confirmation_themes: "Chcete odstrániť vybraté motívy?\n Počet vybratých motívov: ${0}.",
		admin_theme_color: "Farba",
		admin_theme_text: "Text",
		admin_theme_solid: "Jednofarebná",
		admin_theme_gradient: "Prechod",
		admin_theme_box: "Box",
		admin_theme_color_label: "Farba ${0}:",
		admin_theme_name_invalid: "Názov motívu nemôže obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Identifikátor motívu musí byť jedinečný a po uložení motívu už jeho identifikátor nebudete môcť zmeniť.<br><br>Identifikátor môže obsahovať len alfanumerické znaky.",
		admin_theme_name_hover: "Názov nemôže obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automaticky",
		admin_theme_logo_url_hover: "Zadajte adresu URL pre súbor loga. Ak sa logo nachádza na rovnakom webovom aplikačnom serveri ako webový klient, zadajte relatívnu adresu URL, napríklad: /mycustomizations/banner_logo.png<br><br>Odporúča sa, aby logo malo priehľadné pozadie.",
		admin_theme_color_palette_title_heading: "Farebná paleta",
		admin_theme_color_palette_help_text: "Vytvorte farebnú paletu pre svoj motív zadaním hodnoty v šestnástkovej sústave alebo pomocou pomôcky na výber farby. Môžete pridať ľubovoľný počet farieb.",
		admin_theme_color_add_button_label: "Pridať farbu",
		admin_theme_color_remove_button_label: "Odstrániť farbu",
		admin_theme_global_title_heading: "Prvky vyskytujúce sa v celej aplikácii",
		admin_theme_global_font: "Skupina písiem:",
		admin_theme_global_font_hover: "Vyberte písmo, ktoré sa použije vo webovom klientovi. Písma sú uvedené v hierarchickom poradí; ďalšie písmo zo zoznamu sa použije len vtedy, ak predchádzajúce písmo nie je nainštalované na klientskom počítači.",
		admin_theme_global_framework_color_label: "Farba rámca:",
		admin_theme_global_framework_color_hover: "Vyberte farbu, ktorá sa použije pre nasledujúce prvky:<ul><li>Záhlavie okien v dialógových oknách</li><li>Farba zvýraznenia v hornej časti vybratej karty</li><li>Ikony zobrazenia zoznamu obsahu (zobrazenie Podrobnosti, zobrazenie Časopis, zobrazenie Filmový pás)</li></ul><br>Táto farba sa nepoužíva pre oddeľovače medzi časťami webového klienta. Ak chcete zmeniť farbu oddeľovačov, musíte vytvoriť modul plug-in pre  poskytnutie voliteľného súboru CSS.",
		admin_theme_color_global_toolbar: "Farba globálneho panela nástrojov",
		admin_theme_color_global_toolbar_hover: "Ak do webového klienta zaradíte globálny panel nástrojov, vyberte farbu panela nástrojov.<br><br><b>Tip:</b> Panel nástrojov sa zobrazuje v reklamnom pruhu vo vrchnej časti webového klienta, aby farba panela nástrojov mohla doplniť farbu v reklamnom pruhu.",
		admin_theme_global_selected_color: "Farba vybratej položky:",
		admin_theme_global_selected_color_hover: "Vyberte farbu, ktorá sa použije pri výbere položiek v strome prehľadávania, v strome vyhľadávania a v zozname obsahu.<br><br>Farba pre vznášanie (farba sa použije keď sa ukazovateľ myši vznáša nad položkou) bude odvodená od tejto farby.",
		admin_theme_global_link_color: "Farba prepojenia:",
		admin_theme_global_link_color_hover: "Vyberte farbu, ktorá sa vo webovom klientovi použije pre všetky adresy URL, na ktoré sa dá kliknúť. Napríklad táto farba sa použije pre prepojenia Viac informácií, ktoré sa zobrazujú vo webovom klientovi.",
		admin_theme_login_title_heading: "Prvky prihlasovacej stránky",
		admin_theme_page_background_label: "Farba pozadia prihlasovacej stránky:",
		admin_theme_login_page_background_hover: "Vyberte farbu, ktorá sa zobrazí za prihlasovacím panelom.",
		admin_theme_login_pane_background_label: "Farba pozadia prihlasovacieho panelu:",
		admin_theme_login_pane_background_hover: "Vyberte farbu, ktorá sa zobrazí pre prihlasovací panel. Táto farba by mala dopĺňať farbu pozadia prihlasovacej stránky.",
		admin_theme_text_color: "Farba textu:",
		admin_theme_login_pane_text_color_hover: "Vyberte farbu, ktorá sa použije pre text prihlasovacieho panelu. Táto farba  sa použije na text uvítania a pre menovky polí. Táto farba by mala byť zreteľná voči farbe pozadia prihlasovacieho panelu.",
		admin_theme_copyright_text: "Text vyhlásenia o autorských právach:",
		admin_theme_copyright_text_hover: "Zadajte, či sa má text vyhlásenia o autorských právach zobrazovať na prihlasovacej stránke.",
		admin_theme_copyright_selection_IBM: "Autorské práva IBM",
		admin_theme_copyright_selection_none: "Bez textu vyhlásenia o autorských právach",
		admin_theme_banner_title_heading: "Prvky reklamného pruhu",
		admin_theme_text_icons_color: "Farba textu a ikon:",
		admin_theme_icon_color_label: "Farba ikony:",
		admin_theme_shadow_label: "Tieň:",
		admin_theme_banner_text_icons_hover: "Vyberte farbu, ktorá sa použije pre text a ikony v reklamnom pruhu. Táto farba by mala byť   zreteľná voči farbe pozadia reklamného pruhu.",
		admin_theme_banner_product_name_label: "Názov produktu:",
		admin_theme_banner_product_name_hover: "Keď vytvoríte pracovnú plochu, môžete zadať voliteľný názov, ktorý sa bude zobrazovať pre aplikáciu. Ak nezadáte voliteľný názov, ako názov produktu sa použije IBM Content Navigator. Zadajte, či sa namiesto názvu použije názov aplikácie, ktorý je zadefinovaný v pracovnej ploche alebo v obraze.",
		admin_theme_banner_product_name_desktop_defined_label: "Použiť názov z pracovnej plochy",
		admin_theme_banner_product_name_image: "Použiť vlastné logo (adresa URL)",
		admin_theme_background_color_label: "Farba pozadia:",
		admin_theme_style_label: "Štýl:",
		admin_theme_banner_color_hover: "Vyberte farbu, ktorá sa bude používať pre reklamný pruh v hornej časti aplikácie.<br><br><b>Tip:</b>Uistite sa, že farba textu je v reklamnom pruhu čitateľná oproti farbe pozadia v reklamnom pruhu.",
		admin_theme_buttons_title_heading: "Tlačidlá",
		admin_theme_navigation_title_heading: "Navigačné prvky",
		admin_theme_navigation_icon_selected_label: "Vybratá farba ikony:",
		admin_theme_navigation_background_hover: "Vyberte farbu, ktorá sa použije pre pozadie navigačného panela súčastí.",
		admin_theme_navigation_icon_color_hover: "Vyberte farbu, ktorá sa použije pre ikony v navigačnom paneli súčastí. Keď použijete predvolené rozloženie pracovnej plochy, táto farba by mala kontrastovať s pozadím rozbaľovacej ponuky súčastí. Keď použijete klasické rozloženie pracovnej plochy, táto farba by mala kontrastovať s pozadím navigačného panela súčastí.",
		admin_theme_navigation_icon_selected_hover: "Vyberte farbu, ktorá sa použije pre vybratú súčasť v navigačnom paneli súčastí. Táto farba by mala odzrkadľovať farbu ikon a farbu pozadia navigačného panela súčastí.<br><br>Keď použijete klasické rozloženie pracovnej plochy, táto farba sa použije ako farba vybratej položky v navigačnom paneli súčastí.",
		admin_theme_button_background_color_hover: "Vyberte farbu, ktorá sa použije pre pozadie tlačidiel.",
		admin_theme_button_style_hover: "Vyberte štýl tlačidla.",
		admin_theme_button_text_icon_color_hover: "Vyberte farbu, ktorá sa použije pre text a obrázky na tlačidlách.",
		admin_theme_no_logo_label: "Žiadne logo",
		admin_theme_custom_logo_label: "Vlastné logo (adresa URL)",
		admin_theme_banner_type: "Štýl vyplnenia reklamného pruhu:",
		admin_theme_banner_type_hover: "Určte, či má mať reklamný pruh plnú farbu alebo farebný prechod. Ak určíte reklamný pruh s farebným prechodom, farba, ktorú určíte pre túto farbu v reklamnom pruhu, bude najtmavšia farba v reklamnom pruhu.<br><br><b>Tip:</b>Uistite sa, že farba textu je v reklamnom pruhu čitateľná oproti farbe pozadia v reklamnom pruhu.",
		admin_theme_icon: "Ikona motívu",
		admin_theme_buttons_and_links_title_heading: "Tlačidlá, polia a prepojenia",
		admin_theme_button_style_label: "Štýl tlačidla:",
		admin_theme_theme_style_label: "Štýl motívu:",
		admin_theme_theme_style_hover: "Vyberte štýl, na základe ktorého chcete vytvoriť nový motív. Štýl môžete kedykoľvek zmeniť pri vytváraní alebo úprave motívu. Po zmene štýlu sa obnovia predvolené nastavenia motívu.",
		admin_theme_accent_color_label: "Farba zvýraznenia:",
		admin_theme_accent_color_hover: "Vyberte farbu pruhu v hornom časti dialógového okna a otočného ukazovateľa pri načítavaní.",
		admin_theme_global_toolbar_text_color_label: "Farba textu v globálnom paneli nástrojov:",
		admin_theme_global_toolbar_text_color_hover: "Ak webový klient obsahuje globálny panel nástrojov, vyberte farbu textu v tomto paneli nástrojov.",
		admin_theme_banner_text_color_hover: "Vyberte farbu textu v baneri.",
		admin_theme_banner_icon_color_hover: "Vyberte farbu ikon v baneri.",
		admin_theme_button_color_label: "Farba:",
		admin_theme_button_color_hover: "Vyberte farbu, ktorá sa použije pre nasledujúce prvky:<ul><li>Záhlavie okien v dialógových oknách</li><li>Farba zvýraznenia v hornej časti vybratej karty</li><li>Ikony zobrazenia zoznamu obsahu (zobrazenie Podrobnosti, zobrazenie Časopis, zobrazenie Filmový pás)</li><li>Tlačidlá, polia a prepojenia</li></ul>Táto farba sa použije vtedy, keď užívateľ umiestni kurzor nad tlačidlo. Táto farba sa nepoužíva pre oddeľovače medzi časťami webového klienta. Ak chcete zmeniť farbu oddeľovačov, musíte vytvoriť modul plug-in pre  poskytnutie voliteľného súboru CSS.",
		admin_theme_theme_style_col_header: "Štýl motívu",

		admin_syncserver_consistency_checker: "Kontrola konzistentnosti:",
		admin_syncserver_consistency_checker_hover: "Kontrolu konzistentnosti spustite, aby ste sa uistili, že databáza služby synchronizácie má aktuálne informácie o stave každej položky, ktorá je na serveri. Kontrolu konzistentnosti spustite napríklad po výpadku databázy služieb synchronizácie pre získanie informácií o dokumentoch, ktoré boli aktualizované v archíve počas výpadku.",
		admin_syncserver_consistency_checker_button: "Spustiť kontrolu konzistentnosti",
		admin_syncserver_consistency_checker_started: "Spustené:",
		admin_syncserver_consistency_checker_ended: "Ukončené:",
		admin_syncserver_consistency_checker_duration: "Trvanie:",
		admin_syncserver_consistency_checker_items_processed: "Spracované synchronizované položky:",
		admin_syncserver_consistency_checker_items_processed_success: "Úspešne spracované synchronizované položky:",
		admin_syncserver_consistency_checker_items_discovered: "Objavené nové položky v archíve:",
		admin_syncserver_consistency_checker_change_updates: "Celkový počet aktualizácií:",
		admin_syncserver_consistency_checker_state: "Stav:",
		admin_syncserver_consistency_checker_state_done: "Hotovo",
		admin_syncserver_consistency_checker_state_running: "Spustené",
		admin_syncserver_consistency_checker_user: "Odovzdal",
		admin_syncserver_consistency_checker_scheduled: "Naplánované:",

		admin_syncserver_dbcleanup: "Čistenie databázy",
		admin_syncserver_dbcleanup_hover: "Čistiaci nástroj databázy spustite na odstránenie všetkých nepoužívaných zariadení a položiek z databázy, ktoré už nie sú synchronizované.",
		admin_syncserver_dbcleanup_button: "Čistenie databázy",
		admin_syncserver_dbcleanup_state_done: "Hotovo",
		admin_syncserver_dbcleanup_state_running: "Spustené",
		admin_syncserver_dbcleanup_started: "Spustené:",
		admin_syncserver_dbcleanup_ended: "Ukončené:",
		admin_syncserver_dbcleanup_state: "Stav:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Vymazané archívy:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Vymazané synchronizované položky:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Vymazané zariadenia:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Zariadenia s ukončenou platnosťou:",

		admin_syncserver_publicSyncUrl: "Verejná adresa URL služieb synchronizácie:",
		admin_syncserver_publicSyncUrl_hover: "Zadajte adresu URL, prostredníctvom ktorej môžu archívy komunikovať so službami synchronizácie IBM Content Navigator. Predvolený formát adresy URL je http://verejná_adresa_URL_synchronizácie:číslo_portu/sync/notify.",

		admin_syncserver_managed: "Nastavenia synchronizačného klienta:",
		admin_syncserver_managed_hover: "Tieto nastavenia užívatelia nemôžu zmeniť v synchronizačnom klientovi IBM Content Navigator.",
		admin_syncserver_managed_subfolder: "Synchronizované úrovne priečinkov",
		admin_syncserver_managed_subfolder_hover: "Určte maximálny počet priečinkov, ktoré sa môžu synchronizovať, keď užívateľ spustí synchronizáciu priečinka. Napríklad, ak užívateľ určí 3 úrovne priečinkov, bude sa synchronizovať priečinok, ktorý užívateľ určil, a 2 úrovne podpriečinkov.<br><br>Uistite sa, že vaše prostredie bude schopné podporovať množstvo synchronizovaných údajov vzniknuté v dôsledku tohto nastavenia.",
		admin_syncserver_managed_subfolder_all: "Všetky podpriečinky",
		admin_syncserver_managed_subfolder_none: "Žiadne podpriečinky",
		admin_syncserver_managed_subfolder_no_more: "Obmedzený počet úrovní",
		admin_syncserver_managed_subfolder_levels: "priečinky",
		admin_syncserver_managed_schedule: "Plán synchronizácie",
		admin_syncserver_managed_schedule_hover: "Uistite sa, že vaše prostredie bude schopné podporovať množstvo synchronizovaných údajov vzniknuté v dôsledku tohto plánu synchronizácie.<br><br>Maximálny interval je 24 hodín alebo 1440 minút.<br><br>Užívatelia môžu zmeniť plán synchronizácie kliknutím na položku <b>Synchronizovať teraz</b> v klientovi.",
		admin_syncserver_managed_schedule_manual: "Synchronizovať manuálne",
		admin_syncserver_managed_schedule_continuous: "Synchronizovať nepretržite",
		admin_syncserver_managed_schedule_every: "Synchronizovať v určených intervaloch",
		admin_syncserver_managed_schedule_minutes: "Minúty",
		admin_syncserver_managed_schedule_hours: "Hodiny",

		// redaction codes
		admin_new_reason_code: "Nová príčina revízie",		
		admin_reason_code_name_invalid: "Názov príčiny revízie nemôže obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Popis nemôže obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Popis nemôže obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Názov nemôže obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Popis:",
		admin_reason_code_applications_hover: "Zoznam aplikácií Datacap, ktoré sa odkazujú na túto príčinu revízie.",
		admin_reason_code_applications: "Aplikácie Datacap",
		admin_delete_confirmation_reason_codes: "Chcete odstrániť vybraté príčiny revízie?",
		admin_delete_confirmation_reason_code: "Chcete odstrániť vybratú príčinu revízie?",
		admin_reason_code_heading: "Príčina revízie: <b>${0}</b>",
		admin_reason_code_list_instructions: "Príčiny revízie uvádzajú dôvod ochrany osobných znemožnením ich zobrazenia. Každá príčina identifikuje typ citlivých údajov, ktoré sú skryté pred všeobecnými užívateľmi.",
		admin_reason_code_instructions: "Príčinu revízie môžete vytvoriť pre každý typ citlivých údajov. Potom môžete túto príčinu použiť v politike revízie a definovať tak užívateľov, ktorí môžu upraviť údaje a ktorí môžu vytvárať alebo upravovať revízie.",
		admin_reason_code_applications_label: "Aplikácie Datacap",
		admin_reason_code_repositories: "Archívy",
		admin_reason_code_repositories_label: "Archívy",
		admin_reason_code_repositories_hover: "Zoznam archívov ICN, ktoré sa odkazujú na túto príčinu revízie.",
		admin_reason_code_repositories_default_value: "Nie je nastavený",
		admin_reason_code_description_label: "Popis",
		admin_reason_code_applications_default_value: "Nie je nastavený",
		admin_redaction_reasons: "Príčiny revízie",
		admin_redactions: "Revízie na základe roly",
		admin_redactions_policies_roles: "Politiky a roly",
		admin_reasons: "Príčiny",
		admin_reason_code_id: "Identifikátor",
		admin_reason_code_id_hover: "Identifikátor nie je možné zmeniť.  Môžete ho však skopírovať do schránky.",
		// Role based administration
		admin_rba: "Správa pracovných plôch podľa roly",
		admin_rba_mobile_access_enabled: "Táto pracovná plocha umožňuje prístup z mobilného zariadenia.",
		admin_rba_mobile_access_disabled: "Táto pracovná plocha neumožňuje prístup z mobilného zariadenia.",
		admin_rba_confirm_delete_multiple: "Chcete odstrániť vybraté administračné roly?",
		admin_rba_confirm_delete_single: "Chcete odstrániť vybratú administračnú rolu?",
		admin_rba_delete_multi_role_desktop: "Niektoré z rolí, ktoré ste vybrali, sú priradené k pracovnej ploche. Skôr ako budete môcť odstrániť tieto roly, musíte zrušiť ich priradenie k pracovným plochám.",
		admin_rba_delete_single_role_desktop: "Rola, ktorú ste vybrali, je priradená k pracovnej ploche ${0}. Skôr ako budete môcť odstrániť túto rolu, musíte zrušiť jej priradenie k pracovnej ploche.",
		admin_desktop: "Pracovná plocha",
		admin_rba_instructions: "Môžete vytvárať a spravovať roly správy pracovných plôch, ktoré priraďujú udelené oprávnenia k správcom pracovných plôch. ",
		admin_rba_not_used: "${0} sa nepoužíva v žiadnych pracovných plochách.",
		admin_rba_desktops: "<b>${0} sa používa v nasledujúcich pracovných plochách:</b>",
		admin_rba_new_role: "Nová rola",
		admin_rba_name_invalid: "Názov administračnej roly nesmie obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Popis nesmie obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Popis nesmie obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Názov nesmie obsahovať nasledujúce znaky: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Popis: </b> ${0}",
		admin_rba_membership: "Členstvo",
		admin_rba_general_priv: "Všeobecné",
		admin_rba_appearance_priv: "Vzhľad",
		admin_rba_desktop_config_priv: "Konfigurácia pracovnej plochy",
		admin_rba_app_name_priv: "Názov aplikácie",
		admin_rba_theme_priv: "Motív",
		admin_rba_viewer_map_priv: "Mapa prezerača",
		admin_rba_merge_split_priv: "Zlúčiť a rozdeliť",
		admin_rba_sync_svc_priv: "Služby synchronizácie",
		admin_rba_menus_priv: "Ponuky",
		admin_rba_edit_svc_priv: "Služby úprav",
		admin_rba_toolbars_priv: "Panely nástrojov",
		admin_rba_ctx_menus_priv: "Kontextové ponuky",
		admin_rba_office_ribbon_priv: "Príkazy v páse s nástrojmi aplikácie Microsoft Office",
		admin_rba_office_menues_priv: "Kontextové ponuky aplikácie Microsoft Office",
		admin_rba_addl_settings_priv: "Ďalšie nastavenia",
		admin_rba_mobile_priv: "Mobilný prístup",
		admin_rba_add_doc_dlg_priv: "Dialógové okno Pridať dokument",
		admin_rba_doc_mgmt_priv: "Správa dokumentov",
		admin_rba_def_redaction_priv: "Predvolená možnosť revízie",
		admin_rba_add_photos_priv: "Pridávať fotografie z fotoaparátu a knižnice fotografií",
		admin_rba_time_stamp_priv: "Časová značka",
		admin_rba_add_docs_folders_priv: "Pridávať dokumenty a vytvárať priečinky v archíve",
		admin_rba_open_docs_priv: "Otvárať dokumenty v iných aplikáciách",
		admin_rba_office_config_priv: "Konfigurácia balíka Office",
		admin_rba_tab_label_priv: "Označenie karty IBM ECM",
		admin_rba_feature_sel_priv: "Výber súčasti",
		admin_rba_general_config_priv: "Všeobecná konfigurácia",
		admin_rba_favorites_priv: "Obľúbené položky",
		admin_rba_add_options_priv: "Pridať možnosti do panela Upraviť skupinu",
		admin_rba_browse_priv: "Prehľadávanie",
		admin_rba_outlook_int_priv: "Integrácia s programom Outlook",
		admin_rba_search_priv: "Hľadať",
		admin_rba_layout_priv: "Rozloženie",
		admin_rba_case_priv: "Prípad",
		admin_rba_desktop_feat_priv: "Komponenty pracovnej plochy",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Zobrazené súčasti",
		admin_rba_branding_priv: "Prispôsobenie",
		admin_rba_home_priv: "Domov",
		admin_rba_main_color_priv: "Hlavná farba",
		admin_rba_sec_color_priv: "Sekundárna farba",
		admin_rba_teamspaces_priv: "Tímové priestory",
		admin_rba_rbr_priv: "Revízia na základe roly",
		admin_rba_et_mgr_priv: "Manažér šablón položiek",
		admin_rba_policies_roles_priv: "Správa politík a rolí",
		admin_rba_work_priv: "Práca",
		admin_rba_reasons_priv: "Kódy príčin",
		admin_rba_tasks_priv: "Asynchrónne úlohy",
		admin_rba_auth_priv: "Autentifikácia",
		admin_rba_all_privs: "Všetky oprávnenia",
		admin_rba_some_privs: "Niektoré oprávnenia",
		admin_rba_no_privs: "Žiadne oprávnenia",
		admin_add_users_groups_priv: "Pridať užívateľov a skupiny",
		admin_url_features_priv: "Správa súčastí URL",
		admin_plugin_features_priv: "Správa súčastí modulov plug-in",
		admin_addl_components_priv: "Ďalšie komponenty",
		admin_global_toolbar_priv: "Globálny panel nástrojov",
		admin_status_bar_priv: "Stavový riadok",
		admin_refresh_message: "Musíte obnoviť zobrazenie prehliadača, aby ste mohli použiť aktualizované údaje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Ak chcete používať aktualizovanú predvolenú pracovnú plochu, musíte obnoviť  svoj prehliadač.",
		admin_desktop_refresh_message: "Musíte obnoviť zobrazenie prehliadača, aby ste mohli použiť aktualizovanú pracovnú plochu.",
		admin_action_open: "Otvoriť",
		admin_action_edit: "Upraviť",
		admin_action_copy: "Kopírovať",
		admin_action_delete: "Odstrániť",
		admin_action_copy: "Kopírovať",
		admin_action_new: "Vytvoriť nový",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Toto ID sa už používa. Musíte zadať jedinečné ID.",

		admin_searchable_properties_for: "Vyhľadávateľné vlastnosti pre:",
		admin_repository_new: "Nový archív",
		admin_desktop_new: "Nová pracovná plocha",
		admin_desktop_file_documents: "Vyžaduje sa, aby užívatelia ukladali nové dokumenty a priečinky do priečinka",
		admin_desktop_file_documents_hover: "Vyberte túto voľbu, ak chcete vyžadovať od užívateľov, aby vybrali nejaký priečinok, keď pridávajú položky do archívu. Ak nevyberiete túto voľbu, užívatelia môžu pridať dokumenty (IBM FileNet P8) alebo dokumenty a priečinky (IBM Content Manager) bez ich zaradenia do priečinka.",
		admin_desktop_show_security_tab: "Zobraziť nastavenia bezpečnosti počas akcií pridávania a prihlasovania",
		admin_desktop_show_security_hover: "<b>Len užívatelia IBM FileNet P8.</b>  Vyberte túto možnosť, ak chcete, aby mohli užívatelia upraviť nastavenia bezpečnosti dokumentov a priečinkov pri prihlasovaní položiek do tejto pracovnej plochy.",
		admin_desktop_configure_security_inheritance: "Umožniť užívateľom konfiguráciu dedenia nastavení bezpečnosti pre priečinky",
		admin_desktop_configure_security_inheritance_hover: "<b>Len užívatelia IBM FileNet P8.</b>  Vyberte túto možnosť, ak chcete, aby užívatelia mohli prispôsobiť prístup k položkám v priečinku nastavením dedenia bezpečnostných oprávnení pre priečinky. Ak vyberiete túto možnosť, užívatelia budú môcť určiť, či môžu užívatelia alebo skupiny dediť nastavenia bezpečnosti z:<ul><li>Priečinka</li><li>Priečinka a priamych podpriečinkov</li><li>Priečinka a všetkých podpriečinkov</li></ul>",
		admin_desktop_appearance: "Vzhľad",
		admin_desktop_appearance_instruction: "Vzhľad pracovnej plochy si môžete prispôsobiť zmenou prihlasovacej stránky a reklamného pruhu, ktoré sa zobrazujú pre pracovnú plochu.",
		admin_desktop_layout: "Rozloženie:",
		admin_desktop_layout_hover: "Rozloženie špecifikuje, ktoré funkcie sa môžu zobraziť vo webovom klientovi a ako je usporiadaný obsah webového klienta.<br><br><b>Tip:</b> Vlastné rozloženie môžete definovať vytvorením modulov plug-in. Skôr ako budete môcť vybrať vlastné rozloženie, musíte modul plug-in zaregistrovať v administračnom nástroji.",
		admin_desktop_layout_default: "Predvolené",
		admin_desktop_layout_custom: "Voliteľné",
		admin_desktop_enable_workflow_email: "Povoliť e-mailové oznámenie pracovného toku FileNet P8 pre túto pracovnú plochu",
		admin_desktop_enable_workflow_email_hover: "Len používatelia FileNet P8. Vyberte túto voľbu, ak chcete povoliť užívateľom otvárať webového klienta z adries URL, ktoré sú zahrnuté v e-mailových oznámeniach, ktoré generuje Process Engine.<br /><br />Ak nepovolíte túto voľbu pre žiadny počítač, užívatelia sa nebudú môcť prihlásiť do webového klienta z adries URL v oznámeniach.<br /><br />Ak povolíte túto voľbu na viacerých počítačoch a viac než jeden počítač spĺňa kritéria, ktoré sú špecifikované v adrese URL v oznámení, webový klient použije prvý počítač, ktorý spĺňa kritériá. ",
		admin_desktop_prevent_create_new_search: "Nedovoliť užívateľom vytvárať vyhľadávania",
		admin_desktop_prevent_create_new_search_hover: "Ak vyberiete túto možnosť, užívatelia budú môcť používať iba existujúce vyhľadávania a nebudú môcť vytvárať vyhľadávania s otvoreným koncom, ktoré nemusia byť optimálne.</br></br>Toto nastavenie nemá vplyv na tímové priestory. Právo na vytváranie vyhľadávaní v tímovom priestore je riadené rolou, ktorú má užívateľ pre daný tímový priestor.",
		admin_desktop_prevent_create_new_unified_search: "Nedovoliť užívateľom vytvárať vyhľadávania vo viacerých archívoch",
		admin_desktop_prevent_create_new_unified_search_hover: "Táto voľba určuje, že užívatelia budú môcť používať len existujúce vyhľadávania vo viacerých archívoch a nebudú môcť vytvárať vyhľadávania vo viacerých archívoch s otvoreným koncom, ktoré by nemuseli byť optimalizované.",
		admin_desktop_hide_entry_template_not_found_warning: "Skryť varovanie, ktoré sa zobrazí, keď sa nenájde súvisiaca šablóna položky",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Vyberte túto možnosť, ak sa má skryť varovanie, ktoré sa zobrazí, keď sa pri úprave vlastností položky nenájde šablóna položky súvisiaca s danou položkou.",
		admin_desktop_show_class_role_security_selection: "Povoliť užívateľom konfiguráciu zabezpečenia na základe rolí v šablónach položiek",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Len užívatelia IBM FileNet P8.</b> Vyberte túto možnosť, ak chcete, aby užívatelia mohli nakonfigurovať šablóny položiek tak, aby používali zabezpečenie na základe rolí pri nastavovaní zabezpečenia dokumentov alebo šablón s použitím šablón položiek. Ak vyberiete túto možnosť, editory šablón položiek môžu určiť, či sa majú uplatňovať bezpečnostné objekty rolí pre definície šablón položiek.",
		admin_desktop_show_primary_multi_part: "V prezerači otvoriť iba primárny dokument",
		admin_desktop_show_primary_multi_part_hover: "<b>Len užívatelia IBM FileNet P8.</b> Vyberte túto možnosť, ak sa má v prezerači otvoriť iba primárny súbor dokumentu. K dokumentom môže byť priradených viacero súborov. Ak označíte túto možnosť, otvorí sa iba primárny súbor priradený k dokumentu. ",
		admin_desktop_redaction_save_mode: "Predvolená voľba revízie:",
		admin_desktop_redaction_save_mode_hover: "Vyberte predvolený režim revízií v prezerači ViewONE Virtual:</br>* Spýtať sa: Pri prechode do režimu revízie sa zobrazí dialógové okno, v ktorom môže užívateľ vybrať, či sa má dokument prihlásiť ako nová verzia, či sa má vytvoriť nový dokument alebo či chce stiahnuť obsah.</br>* Prihlásiť ako novú verziu: Revízie obsahu sa budú vždy ukladať ako nové verzie existujúcich dokumentov.</br>* Uložiť ako úplne nový dokument: Revízie obsahu sa budú vždy ukladať ako úplne nové dokumenty.</br>* Stiahnuť a uložiť v klientskom systéme: Revízie obsahu sa stiahnu do klientskeho systému.",
		admin_desktop_redaction_save_mode_user_select: "Spýtať sa",
		admin_desktop_redaction_save_mode_new_version: "Prihlásiť ako novú verziu",
		admin_desktop_redaction_save_mode_new_document: "Uložiť ako úplne nový dokument",
		admin_desktop_redaction_save_mode_local_content: "Stiahnuť a uložiť v klientskom systéme",

		admin_desktop_document_add_mode: "Dialógové okno na pridanie dokumentov:",
		admin_desktop_document_add_mode_hover: "Určite dialógové okno, ktoré chcete používať pri pridávaní dokumentov, ktoré boli vytvorené v produkte IBM Content Navigator:<ul><li>Nový trvalo revidovaný dokument</li><li>Nový zlúčený alebo rozdelený dokument</li><li>Nový dokument Microsoft Office</li><li>Nový dokument služby úprav</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Pridať dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Pridať dokument podľa šablóny položiek",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Zlúčiť a rozdeliť:",
		admin_desktop_merge_and_split_enable_hover: "Určite, či chcete, aby užívatelia s prístupom k tomuto počítaču mohli zlučovať a rozdeľovať dokumenty pomocou podporovaného prezerača.",

		admin_desktop_merge_and_split_show_checkin: "Vyzvať užívateľov, aby zadali hodnoty vlastností pri prihlasovaní zmien v dokumente.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Ak vyberiete túto možnosť, zobrazí sa dialógové okno na prihlásenie položky, keď sa užívatelia pokúsia prihlásiť zmeny v dokumente v režime Zlúčiť a rozdeliť.",

		admin_desktop_available_categories: "Dostupné funkcie",
		admin_desktop_selected_categories: "Vybraté funkcie",

		admin_layout_banner_title: "Reklamný pruh a prihlasovacia stránka",
		admin_layout_title: "Rozloženie",

		admin_desktop_application_name: "Názov aplikácie:",
		admin_desktop_application_name_hover: "Uveďte názov aplikácie, ktorý sa má zobrazovať v pruhu aplikácie.<br><br>Tip: Názov aplikácie v iných jazykoch môžete definovať na karte Označenia / Označenia pracovnej plochy.",
		admin_desktop_theme: "Motív:",
		admin_desktop_theme_hover: "Zadajte, či sa má pre túto pracovnú plochu použiť používať predvolený motív aplikácie IBM Content Navigator, alebo voliteľný motív. Ak chcete použiť voliteľný motív, v časti <b>Motívy</b> administračného nástroja musíte vytvoriť motív.",
		admin_desktop_login_logo: "Logo na prihlasovacej stránke:",
		admin_desktop_login_logo_hover: "Ak chcete zmeniť logo, ktoré sa zobrazuje na prihlasovacej stránke, zadajte adresu URL pre súbor loga. Odporúčame vám však, aby ste na zmenu loga použili voliteľný motív.",
		admin_desktop_login_logo_url_hover: "Zadajte adresu URL pre súbor loga. Ak sa logo nachádza na rovnakom webovom aplikačnom serveri ako webový klient, zadajte relatívnu adresu URL, napríklad: /mycustomizations/login_logo.png<br><br>Logo nesmie byť väčšie ako 200 pixelov na šírku a 150 pixelov na výšku.<br><br>Odporúča sa, aby logo malo priehľadné pozadie.",
		admin_desktop_banner_logo: "Logo v reklamnom pruhu:",
		admin_desktop_banner_logo_hover: "Ak chcete zmeniť logo, ktoré sa zobrazuje v reklamnom pruhu, zadajte adresu URL pre súbor loga. Odporúčame vám však, aby ste na zmenu loga použili voliteľný motív.",
		admin_desktop_banner_logo_url_hover: "Zadajte adresu URL pre súbor loga. Ak sa logo nachádza na rovnakom webovom aplikačnom serveri ako webový klient, zadajte relatívnu adresu URL, napríklad: /mycustomizations/banner_logo.png<br><br>Logo nesmie byť väčšie ako 72 pixelov na šírku a 36 pixelov na výšku.<br><br>Odporúča sa, aby logo malo priehľadné pozadie.",
		admin_desktop_banner_background_color: "Farba pozadia v reklamnom pruhu:",
		admin_desktop_banner_background_color_hover: "Ak chcete zmeniť farbu pozadia v reklamnom pruhu, zadajte  vlastnú farbu. Odporúčame vám však, aby ste na zmenu farby reklamného pruhu použili voliteľný motív.",
		admin_desktop_banner_background_color_custom_hover: "Zadajte hexadecimálny kód farby v reklamnom pruhu aplikácie.",
		admin_desktop_banner_application_name_color: "Farba textu v názve aplikácie:",
		admin_desktop_banner_application_name_color_hover: "Ak chcete zmeniť farbu pre názov aplikácie, zadajte  vlastnú farbu. Odporúčame vám však, aby ste na zmenu farby názvu aplikácie použili voliteľný motív.",
		admin_desktop_banner_application_name_color_custom_hover: "Zadajte hexadecimálny kód farby názvu aplikácie.",
		admin_desktop_banner_menu_color: "Farba ikony v reklamnom pruhu:",
		admin_desktop_banner_menu_color_hover: "Ak zmeníte farbu pozadia v reklamnom pruhu, mohli by ste potrebovať zmeniť farebnú schému ikon v reklamnom pruhu, aby boli viditeľnejšie. Určte, či sa má zobraziť bledá alebo tmavá verzia ikon v reklamnom pruhu.<br><br>Odporúčame vám však, aby ste na zmenu farby  ikon použili voliteľný motív.",
		admin_desktop_login_page_content: "Obsah prihlasovacej stránky:",
		admin_desktop_login_page_content_hover: "Ak si chcete na prihlasovacej stránke zobraziť ďalšie informácie, ako sú napríklad ohlásenie systémových výpadkov alebo kde môžu užívatelia získať pomoc s menami užívateľov a heslami, zadajte adresu URL obsahu, ktorý sa má zobraziť.",
		admin_desktop_login_page_content_url_hover: "Zadajte adresu URL obsahu prihlasovacej stránky. Ak sa obsah nachádza na rovnakom webovom aplikačnom serveri ako webový klient, zadajte relatívnu adresu URL, napríklad: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Pravidlá pre heslá:",
		admin_desktop_password_rules_hover: "Ak chcete poskytnúť užívateľom pokyny pre vytváranie hesiel, ako sú napríklad nepovolené znaky alebo minimálny počet znakov, zadajte adresu URL stránky, ktorá obsahuje vaše pravidlá pre heslá.",
		admin_desktop_password_rules_url_hover: "Zadajte adresu URL k obsahu súboru pravidiel pre heslá. Ak sa obsah nachádza  na rovnakom webovom aplikačnom serveri ako webový klient, zadajte relatívnu adresu URL, napríklad: /mycustomizations/passwords.html",
		admin_desktop_help_url: "Adresa URL pomoci pre koncových užívateľov:",
		admin_desktop_help_url_hover: "Môžete použiť systém pomoci dodaný s produktom IBM Content Navigator, alebo niektorým z nasledujúcich spôsobov môžete užívateľov presmerovať na voliteľný obsah pomoci:<br><br><ul><li>Presmerovaním na váš vlastný systém pomoci</li><li>Pridaním tém pomoci do lokálnej inštancie služby IBM Knowledge Center, ktorá bola nasadená s produktom IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Zadajte adresu URL vášho vlastného systému pomoci. Aplikácia IBM Content Navigator pripojí reťazec index.jsp?content=/com.ibm.usingeuc.doc/ a názov súboru na koniec adresy URL, ktorú zadáte.  Aby fungovali prepojenia \"Viac informácií\" v rozhraní, systém pomoci musí používať rovnaké názvy súborov ako integrovaný systém pomoci pre koncových užívateľov. ",
		admin_desktop_deprecated_appearance_title: "Zastarané nastavenia",
		admin_desktop_deprecated_appearance_instructions: "Ak použijete voliteľný motív, tieto nastavenia sa nahradia voliteľným motívom. Tieto nastavenia by ste mali previesť do voliteľného motívu, ktorý vám poskytne podrobnejšie možnosti úpravy vzhľadu ako nastavenia v tejto časti. Okrem toho môžete voliteľný motív použiť vo viacerých pracovných plochách.",

		admin_desktop_plugins_title: "Môžete povoliť alebo zakázať použitie modulov plug-in v tejto pracovnej ploche.",
		admin_desktop_plugins_enable_all_plugins: "Povoliť použitie všetkých nasadených modulov plug-in v tejto pracovnej ploche",
		admin_desktop_plugins_select_plugins: "Vybrať nasadené moduly plug-in, ktoré je možné použiť v tejto pracovnej ploche",
		admin_desktop_plugins_select_plugin: "Vyberte modul plug-in",

		admin_desktop_layout_features: "Zobrazené funkcie:",
		admin_desktop_layout_features_hover: "Z tejto pracovnej plochy vyberte komponenty, ku ktorým majú mať užívatelia prístup. Komponenty sú zobrazené v rovnakom poradí v akom sú uvedené v zozname.<br><br>Keď vyberiete komponent, v rámci pracovnej plochy si môžete prispôsobiť určité správanie komponentu, ako je napríklad predvolený archív, ktorý je pre komponent vybratý.",
		admin_desktop_layout_default_repository: "Predvolený archív:",
		admin_desktop_layout_default_repository_layout_hover: "Zadajte archív, ktorý bude predvolene vybratý, keď užívatelia otvoria tento komponent.",
		admin_desktop_layout_document_thumbnails: "Ukážky dokumentov:",
		admin_desktop_layout_document_thumbnails_hover: "Určite, či majú byť v paneli Informácie o dokumente zobrazené náhľady pre dokumenty.<br><br>Zobrazovanie miniatúr dokáže spomaliť výkon webového klienta.",
		admin_desktop_layout_show_filmstrip_view: "Zobrazenie filmového pásu:",
		admin_desktop_layout_show_filmstrip_view_hover: "Určte, či budú môcť užívatelia zmeniť zobrazenie zoznamu obsahu na zobrazenie filmového pásu.<br><br>Zobrazenie filmového pásu vygeneruje náhľad každého dokumentu, ktorý užívateľ vyberie. Avšak používanie zobrazenia Filmový pás môže spomaliť výkon webového klienta. Ak sa vám majú zobrazovať náhľady na dokumenty, musíte okrem toho nakonfigurovať prezerač konverzie HTML.",
		admin_enabled: "Povoliť",
		admin_disabled: "Zakázať",
		admin_include: "Zahrnúť",
		admin_exclude: "Vylúčiť",
		admin_layout_teamspaces_default_repository: "Tímové priestory:",
		admin_layout_entry_templates_default_repository: "Šablóny položiek:",
		admin_layout_other_features_default_repository: "Vyhľadávanie a prehľadávanie:",
		admin_layout_work_default_repository: "Práca:",
		admin_layout_default_feature: "Predvolené zobrazenie:",
		admin_default_category_placeholder: "Vyberte zobrazenie",
		admin_layout_default_feature_hover: "Určte súčasť, ktorá sa zobrazí, keď sa užívatelia prihlásia do tejto pracovnej plochy.",
		admin_layout_default_feature_warning: "Zmena predvolenej súčasti môže mať vplyv na dobu načítania aplikácie.",
		admin_layout_feature_list_header: "Súčasť",
		admin_layout_show_statusbar: "Stavový riadok:",
		admin_layout_show_statusbar_hover: "Zadajte, či sa má v spodnej časti pracovnej plochy zobrazovať stavový riadok.<br><br>Ak ukryjete stavový riadok, užívatelia nebudú môcť vidieť informácie o nechybových udalostiach, ako napríklad:<ul><li>Dokument bol pridaný do archívu.</li><li>Vyhľadávanie vrátilo 59 dokumentov.</li></ul>",
		admin_layout_show_magazineview: "Zobrazenie Časopis:",
		admin_layout_show_magazineview_hover: "Zadajte, či chcete užívateľom povoliť prepínanie medzi zobrazením zoznamu obsahu a zobrazením Časopis.<br><br>Zobrazenie Časopis zväčší výšku každej položky na zozname obsahu, čím sa zníži počet položiek, ktoré je možné naraz zobraziť v zozname obsahu.",
		admin_layout_show_detailsview: "Zobrazenie podrobností:",
		admin_layout_show_detailsview_hover: "Určte, či sa má užívateľom povoliť prepínanie zo zobrazenia zoznamu obsahu do zobrazenia podrobností.<br><br>Zobrazenie podrobností maximalizuje počet viditeľných riadkov v zozname obsahu.",
		admin_feature_config_docinfopane_label: "Panel informácií o dokumente:",
		admin_feature_config_docinfopane_hoverhelp: "Zadajte, či budú môcť užívatelia v tomto komponente pristupovať k panelu informácií o dokumente.",
		admin_feature_config_docinfopane_default_label: "Predvolené správanie:",
		admin_feature_config_docinfopane_expanded: "Rozvinuté",
		admin_feature_config_docinfopane_collapsed: "Zvinuté",
		admin_feature_config_docinfopane_expand_on_select: "Rozvinúť pri výbere položky",
		admin_layout_features_title: "Komponenty pracovnej plochy",
		admin_layout_features_instructions: "Určte komponenty, ku ktorým budú mať užívatelia prístup z tejto pracovnej plochy.  Okrem toho môžete prispôsobiť správanie každého komponentu, ktorý pridáte do pracovnej plochy.",
		admin_layout_components_title: "Ďalšie komponenty pracovnej plochy",
		admin_layout_components_instructions: "Niektoré komponenty pracovnej plochy môžete zakázať, ak chcete zjednodušiť rozhranie alebo ak chcete zlepšiť výkon webového klienta.",
		admin_layout_featureconfig_instructions: "Vyberte komponent, ktorý sa má nakonfigurovať",
		admin_layout_featureconfig_no_configuration: "K dispozícii nie je konfigurácia žiadnych komponentov.",
		admin_layout_featureconfig_label: "Konfigurácia komponentu ${0}",
		admin_layout_featureconfig_title: "Konfigurácia komponentu",
		admin_layout_featureconfig_taskManagerURL: "Ak chcete používať tento komponent, aplikáciu IBM Content Navigator musíte nakonfigurovať tak, aby sa pripájala k službe správcu úloh. Povoľte službu správcu úloh v časti <b>Nastavenia</b> administračného klienta.",
		admin_feature_config_show_my_checkouts_label: "Panel Moje odhlásené položky:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Panel Moje odhlásené položky umožňuje užívateľom spustiť vyhľadávanie pre všetky položky, ktoré odhlásili v určitom archíve. Určte, či môžu užívatelia pristupovať k panelu Moje odhlásené položky zo súčasti Domov.<br/><br/><b>Obmedzenie:</b> Táto súčasť vyžaduje, aby ste mali aspoň jeden archív IBM Content Manager, IBM FileNet P8 alebo OASIS CMIS priradený k tejto pracovnej ploche.",

		admin_feature_config_default_repository_icon_text: "Predvolený archív",
		admin_show: "Zobraziť",
		admin_hide: "Skryť",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Zobrazenie Administrácia nemôžete odstrániť z pracovnej plochy správcu.",
		admin_warning_label: "Varovanie:",
		admin_layout_show_globaltoolbar: "Globálny panel nástrojov:",
		admin_layout_show_globaltoolbar_hover: "Zadajte, či sa má panel nástrojov zobrazovať v reklamnom pruhu v hornej časti pracovnej  plochy.<br><br>Globálny panel nástrojov obsahuje akcie, ktoré umožnia užívateľom do archívu pridávať dokumenty, priečinky a pozastavenia. Dostupnosť akcií závisí od archívu, ku ktorému je užívateľ pripojený.",
		admin_interface_text_name_label: "Typ označenia",

		admin_interface_text_label_description: "Text, ktorý sa zobrazuje v určitých oblastiach webového klienta, si môžete prispôsobiť. Označenia všetkých archívov a pracovných plôch sa zobrazia vo vašej konfigurácii. Do poľa Aktuálna menovka zadajte text, ktorý chcete vidieť v rozhraní.<br><br><b>Upozornenie:</b> Žiadne zmeny, ktoré vykonáte v označeniach, sa nezobrazia v administračnom nástroji.",
		admin_interface_text_label_action: "Označenia akcií",
		admin_interface_text_label_action_description: "Označenia akcií sa zobrazia na tlačidlách a v ponukách v rámci celého webového klienta. Pre každý typ archívu môžete zadefinovať iné označenia akcií.",
		admin_interface_text_label_application: "Označenia aplikácií",
		admin_interface_text_label_application_description: "Označenia aplikácií sa zobrazujú v rámci celého webového klienta.",
		admin_interface_text_label_system: "Označenia systémových vlastností",
		admin_interface_text_label_system_description: "Zobrazenie systémových charakteristík sa líši v závislosti od archívu. Prispôsobiť si môžete označenia, ktoré sa zobrazujú pre systémové charakteristiky, ktoré sú priradené k dokumentom a priečinkom vo vašich archívoch.",
		admin_interface_text_label_desktop: "Označenia pracovnej plochy",
		admin_interface_text_label_desktop_description: "Ak ste zmenili názov aplikácie na pracovnej ploche, môžete zmeniť tento názov v jazykoch iných než angličtina. Môžete tiež zmeniť názvy aplikačných priestorov IBM FileNet P8 na pracovnej ploche.",

		admin_interface_text_system_label: "Označenie systému",
		admin_interface_text_current_label: "Aktuálne označenie",
		admin_interface_text_default_label_heading: "Predvolené označenie",
		admin_interface_text_default_label: "Predvolené označenie:",
		admin_interface_text_displayed_in_label: "Zobrazené pre",
		admin_interface_text_displayed_in_document_folder: "Dokumenty a priečinky",
		admin_interface_text_displayed_in_document: "Dokumenty",
		admin_interface_text_displayed_in_folder: "Priečinky",
		admin_interface_text_displayed_in_admin_application_space: "Označenie aplikačného priestoru",
		admin_interface_text_displayed_in_desktop: "Označenie komponentu pre mobilné aplikácie",
		admin_interface_text_displayed_in_admin_application_name: "Názov aplikácie",

		admin_new_desktop: "Nová pracovná plocha",
		admin_new_repository: "Nový archív",
		admin_new_menu: "Nová ponuka",
		admin_new_viewer_mapping: "Nová mapa prezeračov",
		admin_new_mapping_label: "Nové mapovanie",
		admin_new_icon_mapping: "Nové mapovanie ikon",
		admin_viewer_mapping_list_instructions: "Môžete nakonfigurovať, ktoré prezerače má webový klient používať na zobrazovanie rôznych typov obsahu. Mapy prezeračov definujú, ktoré typy MIME sú priradené k jednotlivým prezeračom, ktoré chcete používať. Ak chcete používať rozličné prezerače pre rozličné pracovné plochy, môžete vytvoriť viacero máp prezeračov.",
		admin_viewer_mapping_instructions: "Vyberte prezerače, ktoré chcete používať na otváranie súborov. Ak chcete používať vlastný prezerač, musíte ho integrovať ako modul plug-in predtým, než ho pridáte do mapy prezerača.<br><br><b>Upozornenie:</b> Po otvorení dokumentu užívateľom webový klient vyhľadá v zozname mapovaní prezeračov prvý prezerač, v ktorom je možné otvoriť dokument, v závislosti od operačného systému užívateľa a archívu, ku ktorému je užívateľ pripojený. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nový modul plug-in",
		admin_menu_list_instructions: "Môžete vytvoriť prispôsobené panely nástrojov a kontextové ponuky a určiť tak, ktoré akcie majú byť k dispozícii užívateľom. Predvolené ponuky nemôžete upravovať, môžete však vytvoriť kópie existujúcich ponúk a obmedziť akcie, ktoré sú k dispozícii, alebo pridať vlastné akcie, ktoré sú definované v moduloch plug-in.<br><br>Ak chcete vytvoriť nový typ ponuky, túto ponuku musíte definovať v module plug-in.",
		admin_menu_id_hover: "Identifikátor musí byť jedinečný a po uložení ponuky ho nie je možné zmeniť.<br><br>ID môže  obsahovať len alfanumerické znaky a rozlišuje sa v ňom veľkosť písmen.",
		admin_menu_id_disabled_hover: "Identifikátor ponuky nie je možné zmeniť. Ak chcete použiť iný identifikátor, musíte vytvoriť novú ponuku.",
		admin_menu_default_instructions: "Túto ponuku nemôžete upraviť, pretože je to predvolená ponuka. Ak chcete upraviť túto ponuku, musíte vytvoriť kópiu ponuky.",
		admin_menu_toolbar_instructions: "Môžete obmedziť akcie, ktoré sú k dispozícii pre túto panel nástrojov, alebo môžete pridať vlastné akcie, ktoré sú definované v module plug-in. Akcie môžete tiež usporiadať, a to pridaním oddeľovačov do panela nástrojov.",
		admin_menu_toolbar_custom_instructions: "Tento panel nástrojov je definovaný modulom plug-in. Ak chcete tento panel nástrojov upraviť, musíte aktualizovať modul plug-in alebo vytvoriť kópiu tohto panela nástrojov.",
		admin_menu_context_menu_instructions: "Môžete obmedziť akcie, ktoré sú k dispozícii pre túto kontextovú ponuku, alebo môžete pridať vlastné akcie, ktoré sú definované v module plug-in. Akcie môžete tiež usporiadať, a to pridaním oddeľovačov a podponúk do kontextovej ponuky.",
		admin_menu_context_menu_custom_instructions: "Táto kontextová ponuka je definovaná modulom plug-in. Ak chcete túto kontextovú ponuku upraviť, musíte zaktualizovať modul plug-in alebo vytvoriť kópiu tejto kontextovej ponuky.",
		admin_desktop_list_instructions: "Vytvorením viacerých pracovných plôch môžete rozličným užívateľom umožniť prístup k obsahu, ktorý potrebujú. Môžete napríklad vytvoriť pracovnú plochu, ktorá umožní užívateľom len vyhľadávať obsah, alebo pracovnú plochu, ktorá umožní užívateľom pristupovať k jednému archívu. ",
		admin_plugin_updated: "Konfigurácia vybratého modulu plug-in bola zmenená. Aby vaše zmeny nadobudli účinok, musíte obnoviť váš prehliadač.",
		admin_repository_ci_heading: "Archív programu Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Archív programu FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Archív programu Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Archív programu Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Archív programu CMIS (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Archív v službe Box: <b>${0}</b>",
		admin_repository_generic_heading: "Archív: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Chcete odstrániť vybraté pracovné plochy?\n Počet vybratých pracovných plôch: ${0}.",
		admin_delete_confirmation_menus: "Chcete odstrániť vybraté ponuky?\nPočet vybratých ponúk: ${0}.",
		admin_delete_confirmation_repositories: "Chcete odstrániť vybraté archívy?\nPočet vybratých archívov: ${0}.",
		admin_delete_confirmation_viewer_mappings: "Chcete vymazať vybraté mapy prezeračov? Počet vybratých máp: ${0}.",
		admin_delete_confirmation_icon_mappings: "Chcete odstrániť vybraté konfigurácie ikon?\nPočet vybratých konfigurácií ikon: ${0}.",
		admin_delete_confirmation_plugins: "Chcete odstrániť vybraté moduly plug-in?\nPočet vybratých modulov plug-in: ${0}.",
		admin_delete_confirmation: "Chcete odstrániť vybraté položky?\nPočet vybratých položiek: ${0}.",

		admin_viewer_mapping_id_hover: "Identifikátor musí byť jedinečný a po uložení mapy prezerača ho nie je možné zmeniť.<br><br>ID môže  obsahovať len alfanumerické znaky a rozlišuje sa v ňom veľkosť písmen.",
		admin_viewer_mapping_id_disabled_hover: "Identifikátor mapy prezerača nie je možné zmeniť. Ak chcete použiť iný identifikátor, musíte vytvoriť novú mapu prezerača.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Predvolenú pracovnú plochu nie je možné odstrániť.",

		admin_desktop_heading: "Pracovná plocha: <b>${0}</b>",
		admin_menu_toolbar_heading: "Panel nástrojov: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Vlastný panel nástrojov: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontextová ponuka: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Vlastná kontextová ponuka: <b>${0}</b>",
		admin_plugin_heading: "Modul plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Modul plug-in môže byť súbor JAR alebo skompilovaný súbor triedy.<br/><br/><b>Dôležité:</b> Webový aplikačný server IBM Content Navigator musí byť schopný otvoriť súbor modulu plug-in v lokálnom súborovom systéme alebo prostredníctvom adresy URL.",
		admin_plugin_list_instructions: "Moduly plug-in webového klienta musíte zaregistrovať pomocou administračného nástroja. Ak modul plug-in vyžaduje dodatočnú konfiguráciu, konfiguračné parametre sa zobrazia po registrácii modulu plug-in.<br /><br /><b>Dôležité:</b> Ak upravujete modul plug-in, na ktorý sa odkazuje v inej oblasti administračného nástroja, ako je napríklad ponuka, môžu sa vyskytnúť problémy so správaním modulu plug-in. Okrem toho sú moduly plug-in vyvolávané v poradí, v akom sú uvedené v zozname. Ak treba nejaký modul plug-in spustiť pred iným modulom plug-in, uistite sa, že moduly plug-in sú uvedené v zozname v poradí, v ktorom musia byť spustené.",
		admin_plugin_cannot_delete: "Vybraté moduly plug-in nemôžu byť vymazané, pretože niektoré moduly plug-in závisia na nich.<br/>Vybraté moduly plug-in: ${0}<br/>Závislé moduly plug-in: ${1}",
		admin_plugin_cannot_disable: "Vybraté moduly plug-in nemôžu byť zakázané, pretože niektoré moduly plug-in závisia na nich.<br/>Vybraté moduly plug-in: ${0}<br/>Závislé moduly plug-in: ${1}",
		admin_plugin_cannot_add: "Modul plug-in nie je možné pridať, pretože niektoré moduly plug-in, od ktorých je závislý, chýbajú alebo sú zakázané. Chýbajúce alebo zakázané moduly plug-in: ${0}",
		admin_plugin_cannot_enable: "Vybraté moduly plug-in nie je možné povoliť, pretože niektoré moduly plug-in, od ktorých sú závislé, chýbajú alebo sú zakázané.<br/>Vybraté moduly plug-in: ${0}<br/>Chýbajúce alebo zakázané moduly plug-in: ${1}",
		admin_plugin_save_order: "Uložiť poradie",
		admin_plugin_load: "Načítať",
		admin_plugin_load_hover: "Zadajte adresu URL modulu plug-in",
		admin_plugin_file_hover: "Ak sa súbor JAR modulu plug-in nachádza vo vašom lokálnom súborovom systéme, môžete zadať úplnú cestu alebo adresu URL súboru modulu plug-in. Ak sa súbor JAR modulu plug-in nachádza na vzdialenom serveri, musíte zadať adresu URL súboru modulu plug-in.",
		admin_plugin_classfolderpath_hover: "Kompilovaný súbor triedy sa musí nachádzať na webovom aplikačnom serveri IBM Content Navigator.<br/><br/>Zadajte úplnú cestu k priečinku, v ktorom sa nachádzajú skompilované alebo vygenerované triedy modulov plug-in.<br/><br/>Táto cesta nesmie obsahovať názov balíka triedy modulu plug-in. Napríklad, predvolená cesta k vzorovej triede modulu plug-in v systéme Windows je C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Zadajte úplný názov triedy Java v súbore triedy, ktorý by mal byť zavedený a zavolaný ako trieda modulu plug-in.<br/>Napríklad, názov triedy pre vzorový modul plug-in je com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Súbor JAR modulu plug-in sa nenašiel na uvedenej adrese URL. Uistite sa, že sa súbor JAR nachádza na webovom aplikačnom serveri a či má správnu adresu URL a názov súboru.",
		admin_plugin_for_repository_not_loaded: "Tento archív nemôžete upravovať. Nebol zavedený modul plug-in, ktorý definuje a podporuje tento typ archívu. Na karte Moduly plug-in upravte modul plug-in, aby ste si overili, či je správne nakonfigurovaný a či je zavedený.",
		admin_plugin_repository_types: "Typy archívov:",
		admin_plugin_viewers: "Prezerače:",
		admin_plugin_features: "Funkcie:",
		admin_plugin_layouts: "Rozloženia:",
		admin_plugin_not_available: "Nie je k dispozícii",
		admin_plugin_config_params: "Konfiguračné parametre:",
		admin_viewer_def_heading: "Mapa prezerača: <b>${0}</b>",
		admin_users_and_groups: "Užívatelia a skupiny",
		admin_general: "Všeobecné",
		admin_logging: "Protokolovanie",
		admin_authentication: "Autentifikácia",		
		admin_rolebase_role: "Rola:",
		admin_settings_logging_instructions: "Protokolovanie vám môže pomôcť pri riešení problémov s webovým klientom. Protokolovanie môžete spresniť, ak viete, že sa problém vyskytuje v rámci konkrétnej triedy Java alebo u konkrétneho užívateľa. Informácie o chybe sa zapíšu do súborov protokolu chýb webového aplikačného servera.",
		admin_settings_logging_instructions2: "<b>Nastavenia protokolovania ladenia</b><br />Ak viete, že sa problém vyskytuje pre určitý klientsky hostiteľský počítač alebo užívateľa, protokolovanie ladenia môžete sústrediť na tento počítač alebo užívateľa. Informácie z ladenia môžete v produkčnom prostredí zaznamenávať bez výrazného dopadu na výkonnosť systému.<br /><br /><b>Dôležité:</b> Ak určíte klientsky hostiteľský počítač alebo užívateľa, toto nastavenie nahradí všetky ostatné nastavenia protokolovania. Keď získate informácie, ktoré potrebujete, nastavte túto voľbu na <b>Žiadne</b>, aby sa pokračovalo v štandardnom protokolovaní pre vaše prostredie.",
		admin_settings_export_config_hover: "Exportovať informácie o aktuálnej konfigurácii systému do súboru, ktorý sa použije s aplikáciou IBM Support Assistant Data Collector. Súbor sa uloží na miesto, ktoré je definované vo vlastnosti systému Java user.home.",
		admin_logging_level: "Protokolovanie na úrovni aplikácií:",
		admin_logging_level_hover: "Úrovne protokolovania majú vplyv na to, koľko informácií sa uloží na váš server. Ak vyberiete možnosť <b>Chyby</b>, bude sa zaznamenávať najmenšie množstvo informácií v protokoloch. Ak vyberiete možnosť <b>Ladenie</b> bude sa zaznamenávať najviac informácií.<br /><br />V produkčnom prostredí nenastavujte možnosť <b>Ladenie</b>, pokiaľ vám nedá na to pokyn tím softvérovej podpory IBM.",
		admin_logging_level_0: "Žiadne protokolovanie",
		admin_logging_level_1: "Chyba",
		admin_logging_level_2: "Varovanie",
		admin_logging_level_3: "Informácie",
		admin_logging_level_4: "Ladenie",
		admin_logging_classes: "Protokolovanie na úrovni tried Java:",
		admin_logging_classes_hover: "Všetky triedy a balíky Java sú predvolene zaradené do chybových protokolov webového aplikačného servera. Môžete však zadať, ktoré triedy alebo balíky sa majú zaradiť alebo vylúčiť z vášho protokolovania. Na stanovenie tried, ktoré sa majú zaradiť alebo vylúčiť, môžete použiť chybové protokoly webového aplikačného servera.<br><br>Ak viete, že k problému dochádza v konkrétnej triede, môžete konkrétne takúto triedu zaradiť do protokolových súborov. Keď triedu zaradíte do chybových protokolov, všetky ostatné triedy budú protokolového súboru vylúčené.<br><br>Ak viete, že sa problém nevyskytuje v triede a chcete zredukovať veľkosť protokolového súboru, môžete takúto triedu z protokolových súborov vylúčiť.",
		admin_logging_classes_include: "Zahrnúť",
		admin_logging_classes_include_all: "Všetky triedy",
		admin_logging_classes_include_specified: "Konkrétne triedy",
		admin_logging_classes_include_specified_msg: "Určite, ktoré triedy majú byť zahrnuté.",
		admin_logging_classes_exclude: "Vylúčiť",
		admin_logging_classes_exclude_none: "Žiadne",
		admin_logging_classes_exclude_specified: "Konkrétne triedy",
		admin_logging_classes_exclude_specified_msg: "Určite, ktoré triedy majú byť vylúčené.",
		admin_logging_debug: "Protokolovanie ladenia pre:",
		admin_logging_debug_hover: "<b>Dôležité:</b> Predtým ako zadáte IP adresu alebo užívateľa klientskeho hostiteľského počítača, prezrite si protokolové súbory webového aplikačného servera. Vami zadaná hodnota sa musí zhodovať s hodnotou, ktorá sa zobrazuje v protokolovom súbore.",
		admin_logging_debug_none: "Žiadne (predvolené)",
		admin_logging_debug_host: "Klientske hostiteľské počítače (IP adresy)",
		admin_logging_debug_host_msg: "Zadajte IP adresu jedného alebo viacerých klientskych počítačov, pre ktoré chcete protokolovať informácie ladenia. Na oddelenie IP adries použite čiarku.<br /><br /><b>Dôležité:</b> Pred špecifikovaním IP adresy si pozrite protokolové súbory webového aplikačného servera. Vami zadaná hodnota sa musí zhodovať s hodnotou, ktorá sa zobrazuje v protokolovom súbore.",
		admin_logging_debug_user: "Užívatelia",
		admin_logging_debug_user_msg: "Zadajte meno užívateľa jedného alebo viacerých užívateľov, pre ktorých chcete protokolovať informácie ladenia. Na oddelenie mien užívateľov použite čiarku.<br /><br /><b>Dôležité:</b> Pred špecifikovaním mena užívateľa si pozrite protokolové súbory webového aplikačného servera. Vami zadaná hodnota sa musí zhodovať s hodnotou, ktorá sa zobrazuje v protokolovom súbore.",

		admin_office_settings_logging_instructions: "Protokolovanie vám môže pomôcť pri riešení problémov s produktom IBM Content Navigator for Microsoft Office. Protokolovanie môžete spresniť, ak viete, že sa problém vyskytuje v rámci konkrétnej triedy alebo u konkrétneho užívateľa. Informácie o chybe sa v klientskych hostiteľských počítačoch IBM Content Navigator for Microsoft Office zapisujú do protokolových súborov aplikácie. ",
		admin_office_settings_logging_instructions2: "<b>Nastavenia protokolovania ladenia</b><br />Ak viete, že problém sa vyskytuje pri konkrétnom klientskom hostiteľskom počítači alebo pri užívateľovi IBM Content Navigator for Microsoft Office, protokolovanie ladenia môžete upriamiť na takýto počítač alebo užívateľa. Informácie z ladenia môžete v produkčnom prostredí zaznamenávať bez výrazného dopadu na výkonnosť systému. <br /><br /><b>Dôležité:</b> Ak určíte klientsky hostiteľský počítač alebo užívateľa, toto nastavenie nahradí všetky ostatné nastavenia protokolovania. Keď zaznamenáte informácie, ktoré potrebujete, nastavte túto voľbu na hodnotu <b>Žiadne</b>, aby mohlo pokračovať štandardné protokolovanie pre vaše prostredie IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Dôležité:</b> Predtým ako zadáte IP adresu alebo užívateľa klientskeho hostiteľského počítača, prezrite si protokolové súbory klientskeho počítača. Vami zadaná hodnota sa musí zhodovať s hodnotou, ktorá sa zobrazuje v protokolovom súbore. ",
		admin_office_logging: "Protokolovanie aplikácií Office",
		admin_office_logging_classes: "Protokolovanie na úrovni tried:",
		admin_office_logging_classes_hover: "Všetky triedy a balíky sú štandardne zahrnuté do chybových protokolov IBM Content Navigator for Microsoft Office. Môžete však zadať, ktoré triedy alebo balíky sa majú zaradiť alebo vylúčiť z vášho protokolovania. Na stanovenie tried, ktoré sa majú zaradiť alebo vylúčiť, môžete použiť chybové protokoly klientskeho počítača.<br /><br />Ak viete, že k problému dochádza v konkrétnej triede, môžete konkrétne takúto triedu zaradiť do protokolových súborov. Keď triedu zaradíte do chybových protokolov, všetky ostatné triedy budú protokolových súborov vylúčené. <br /><br />Ak viete, že sa problém nevyskytuje v triede a chcete zredukovať veľkosť protokolového súboru, môžete takúto triedu z protokolových súborov vylúčiť. ",
		admin_office_logging_debug_hover: "<b>Dôležité:</b> Predtým ako zadáte IP adresu alebo užívateľa klientskeho hostiteľského počítača, prezrite si protokolové súbory klientskeho počítača. Vami zadaná hodnota sa musí zhodovať s hodnotou, ktorá sa zobrazuje v protokolovom súbore.",
		admin_office_logging_additional_settings: "Ďalšie nastavenia:",
		admin_office_logging_additional_settings_hover: "Zadajte ďalšie nastavenia",
		admin_office_logging_file_size: "Veľkosť protokolového súboru",
		admin_office_logging_file_size_hover: "Zadajte veľkosť, pri ktorej IBM Content Navigator for Microsoft Office vytvorí nový protokolový súbor. Keď protokolový súbor dosiahne maximálnu veľkosť, aktuálny protokol bude premenovaný, aby obsahoval dátum (vo formáte RRRRMMdd) a prírastkové číslo súborov (napríklad ICNExcelAddin-20121116-5.log) a vytvorí sa nový protokolový súbor. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Zobraziť sledovanie zásobníka v dialógových oknách",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "V dialógových oknách správ si voliteľne môžete zobrazovať informácie o sledovaní zásobníka kvôli uľahčeniu riešenia problémov. Aj keď si túto voľbu neaktivujete, podrobné informácie o sledovaní zásobníka sú vždy súčasťou chybových protokolov IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Ikony stavu",
		admin_icon_state_icon: "Ikona stavu",
		admin_icon_state: "Stav",
		state_contains_label: "Stav obsahuje",
		admin_icon_state_instructions: "Môžete si prispôsobiť ikony zobrazené vedľa dokumentov, priečinkov a pracovných položiek vo vašich archívoch.<br><br><b>Tip:</b> Môžete určiť, či sa majú zobrazovať stavové ikony pre každý archív vo vašom prostredí.",
		admin_icon_state_dialog_title: "Mapovanie stavových ikon",
		admin_icon_state_dialog_instructions: "Vybratý stav môžete priradiť k preddefinovanej ikone dodanej s webovým klientom alebo k vlastnej ikone.",

		admin_icon_mapping_twisty: "Ikony typu MIME",
		admin_icon_mapping_dialog_title: "Mapovanie ikon",
		admin_icon_mapping: "Mapovanie ikon",
		admin_icon_mapping_instructions: "Zoznam typov MIME môžete priradiť k predvolenej ikone dodanej s webovým klientom alebo k vlastnej ikone.",
		admin_icon_mapping_list_instructions: "Môžete si upraviť ikony, ktoré sa zobrazujú pre rozličné typy MIME uložené vo vašom archíve. Webový klient použije tieto ikony v rovnakom poradí, v akom sú uvedené. Ak je typ MIME uvedený viackrát, použije sa prvá ikona, ktorá je priradená k tomuto typu MIME.",
		admin_icon_mapping_icon_label: "Ktorú ikonu chcete použiť?",
		admin_icon_mapping_file_name: "Vlastná ikona:",
		admin_icon_mapping_file_name_heading: "Vlastná ikona",
		admin_icon_mapping_file_name_placeholder: "Zadajte adresu URL ikony",
		admin_icon_mapping_file_name_hover: "Zadajte adresu URL ikony. Ak sa ikona nachádza v rovnakom webovom aplikačnom serveri ako webový klient, zadajte relatívnu adresu URL. Napríklad: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Predvolená ikona:",
		admin_icon_mapping_class_name_heading: "Predvolená ikona",
		admin_icon_mapping_class_name_hover: "Vyberte ikonu dodanú s webovým klientom.",
		admin_icon_mapping_class_name_placeholder: "Vyberte ikonu",

		admin_p8_instructions: "Tieto informácie zdieľajú všetky archívy FileNet Content Manager, ktoré sú nakonfigurované pre  webového klienta.",
		admin_p8_collaboration_config: "Voliteľná konfigurácia aplikácie FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Nakonfigurujte tieto parametre, ak chcete vyladiť FileNet Collaboration Services pre vaše prostredie IBM FileNet P8.",
		admin_p8_use_url_incoming: "Adresu URL v prichádzajúcich požiadavkách použite na generovanie adries URL odpovedí:",
		admin_p8_use_url_incoming_hover: "Vo väčšine prostredí FileNet Collaboration Services môžete adresu URL prichádzajúcej požiadavky použiť na vygenerovanie adresy URL v odpovedi. Vyberte <b>Áno</b>, pokiaľ sa na vaše prostredie nevzťahuje niektorá z nasledujúcich situácií:<ul><li>Chcete prinútiť klientske aplikácie, aby k aplikácii FileNet Collaboration Services pristupovali prostredníctvom špecifickej adresy URL.<li>Nastavenia vášho proxy servera spôsobia, že aplikácia FileNet Collaboration Services vyprodukuje neplatné adresy URL.</ul>",

		admin_p8_use_url_incoming_http: "Adresa URL FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Zadajte adresu URL, prostredníctvom ktorej budú klientske aplikácie pristupovať k aplikácii FileNet Collaboration Services a ktorá bude mať formát http://FNCSserver:číslo_portu.",
		admin_p8_use_url_incoming_https: "HTTPS adresa URL FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Ak je aplikácia FileNet Collaboration Services nakonfigurovaná, aby používala protokol SSL, zadajte HTTPS adresu URL, prostredníctvom ktorej budú môcť klientske aplikácie pristupovať k aplikácii FileNet Collaboration Services a ktorá bude mať formát https://FNCSserver:číslo_portu",
		admin_p8_hide_email_addresses: "Skryť užívateľské e-mailové adresy v serverových odpovediach:",
		admin_p8_hide_email_addresses_hover: "E-mailové adresy užívateľov môžete v serverových odpovediach skryť, ak musíte dodržiavať politiky na ochranu súkromia. Napríklad zoznam e-mailových adries užívateľov môžete skryť, keď server vráti zoznam dokumentov a informácií o užívateľoch, ktorí vytvorili alebo upravili tieto dokumenty.",

		admin_p8_mask_user_ids: "Maskovať ID užívateľov v protokolových súboroch:",
		admin_p8_mask_user_ids_hover: "Mená užívateľov môžete v protokolových súboroch FileNet Collaboration Services skryť, ak potrebujete dosiahnuť súlad s politikami na ochranu súkromia. Keď túto voľbu povolíte, mená užívateľov budú nahradené  hašovými hodnotami. To vám umožní poskytnúť protokolové súbory externým spoločnostiam, ako je napríklad IBM, na účely podpory bez toho, aby ste prezradili mená užívateľov alebo záznamy o aktivite.",

		admin_p8_soft_delete: "Presunúť odstránené súbory do schránky obnovy:",
		admin_p8_soft_delete_hover: "Keď užívatelia odstránia položky, presuňte položky do schránky obnovy namiesto ich vymazania z archívu. Položky zostanú v schránke obnovy, kým nebudú úplne odstránené. Toto nastavenie bude ignorované, ak  cieľový archív nepodporuje schránky obnovy.<br><br><b>Obmedzenie:</b> Schránky obnovy sú v IBM FileNet P8, verzia 5.2  alebo novšia podporované a vyžadujú si prídavný komponent Social Collaboration Base Extensions.",

		admin_p8_download: "Konfigurácie pamäte cache pre sťahovanie obsahu prostredníctvom protokolu HTTP",
		admin_p8_download_instructions: "Ak vaše archívy IBM FileNet Content Manager obsahujú veľa veľkých súborov, môžete  CDHC (Content Download HTTP Cache) nakonfigurovať, aby aplikácia FileNet Collaboration Services povolila bezpečne presmerovať požiadavky na obsah pre veľké súbory do vyhradeného webového servera.<br/><br/>Táto funkcia si vyžaduje IBM HTTP Server. Okrem toho musíte aktualizovať súbor IBM HTTP Server httpd.conf.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Zadajte, či chcete povoliť CDCH (Content Download HTTP Cache) pre všetky  archívy IBM FileNet Content Manager vo vašom prostredí. Môžete zadať minimálnu veľkosť súboru, pri ktorej sa budú  súbory ukladať do pamäte cache.",
		admin_p8_download_cache_folder: "Úplný adresár pamäte cache:",
		admin_p8_download_cache_folder_hover: "Zadajte úplnú cestu k adresáru, do ktorého chcete ukladať súbory z pamäte cache. Adresár môže byť na ľubovoľnom operačnom systéme alebo zariadení, ako je napríklad zdieľaný sieťový adresár, pokiaľ ho  FileNet Collaboration Services a IBM HTTP Server vidí ako súborový systém.",
		admin_p8_download_cache_url: "Alias pre umiestnenie pamäte cache:",
		admin_p8_download_cache_url_hover: "Zadajte alias, ktorý sa používa, aby ukazoval na adresár pamäte cache v adrese URL  FileNet Collaboration Services. Alias zadajte vo formáte /alias, napríklad /cdhc.<br/><br/>Keď je /cdhc zaradené v adrese  URL, aplikácia bude presmerovaná do úplného adresára pamäte cache.",
		admin_p8_download_cache_max_files: "Maximálny počet súborov uložených do pamäte cache:",
		admin_p8_download_cache_max_files_hover: "Keď bude dosiahnutý maximálny počet súborov, z pamäte cache sa odstráni  najstarší súbor.<br><br>Ak zadáte maximálny počet súborov pre uloženie do pamäte cache a maximálnu veľkosť pamäte cache,  z pamäte cache bude odstránený najstarší súbor, keď bude splnená dolná podmienka.",
		admin_p8_download_cache_max_size: "Maximálna veľkosť pamäte cache (v GB):",
		admin_p8_download_cache_max_size_hover: "Pri dosiahnutí maximálnej veľkosti pamäte cache bude z pamäte cache odstránený najstarší súbor.<br/><br/>Ak zadáte maximálny počet súborov pre uloženie do pamäte cache a maximálnu veľkosť pamäte cache,  z pamäte cache bude odstránený najstarší súbor, keď bude splnená dolná podmienka.",
		admin_p8_download_cache_cleanup_duration: "Maximálne trvanie čistenia (v sekundách):",
		admin_p8_download_cache_cleanup_duration_hover: "Zadajte maximálne množstvo času pre trvanie operácie čistenia. Predvolené trvanie je 5 sekúnd.<br><br>Všetky súbory určené na odstránenie, ktoré však po operácii čistenia zostanú v pamäti cache, budú odstránené počas budúcej operácie čistenia.",
		admin_p8_download_cache_cleanup_min: "Minimálny interval medzi operáciami čistenia pamäte cache (v sekundách):",
		admin_p8_download_cache_cleanup_min_hover: "Zadajte minimálne množstvo času, ktoré by malo uplynúť medzi operáciami čistenia pamäte cache. Predvolený čas je 3600 sekúnd (1 hodina).<br><br>Operácie čistenia pamäte cache sa vyskytnú len ak existuje aktívna požiadavka na stiahnutie obsahu z pamäte cache. Ak požiadavky prichádzajú každú minútu, operácia čistenia sa vykoná každú hodinu. Ak však medzi požiadavkami na stiahnutie uplynú tri hodiny, k operácii čistenia dôjde až po prijatí ďalšej požiadavky na stiahnutie.",
		admin_p8_download_cache_min_lifetime: "Minimálny čas v pamäti cache (v sekundách):",
		admin_p8_download_cache_min_lifetime_hover: "Uveďte minimálnu dobu, počas ktorého sa súbor bude uchovávať v pamäti cache pred odstránením. Predvolený čas je 3600 sekúnd (1 hodina).<br><br>Najstarší súbor sa z pamäte neodstráni, kým tento súbor nebude v pamäti cache po určenú dobu, a to ani vtedy, keď pamäť cache dosiahne svoju maximálnu veľkosť alebo bude obsahovať maximálny počet súborov.",
		admin_p8_download_cache_size_threshold: "Minimálna veľkosť súboru pre vloženie do pamäte cache (v kB):",
		admin_p8_download_cache_size_threshold_hover: "Zadajte minimálnu veľkosť, pri ktorej sa má CDHC použiť na  vloženie súborov do pamäte cache. Ak je súbor menší ako zadaná veľkosť, súbor bude smerovaný prostredníctvom webového aplikačného servera, na ktorom je nasadená aplikácia FileNet Collaboration Services. Predvolená veľkosť je 1000 kB.",
		admin_p8_download_guard_header: "Hlavička HTTP pre riadenie komunikácie:",
		admin_p8_download_guard_header_hover: "Ak klientska aplikácia nesmeruje požiadavku cez IBM HTTP Server,  obsah uložený v pamäti cache sa nebude dať stiahnuť. Môžete zadať, že len prichádzajúce požiadavky so špecifickou hlavičkou HTTP (ktorá sa do požiadaviek pridáva zo servera IBM HTTP Server) budú môcť pristúpiť na obsah uložený v pamäti cache, aby sa zabránilo zlyhaniam pri sťahovaní.<br><br>Hlavička HTTP je nakonfigurovaná v IBM HTTP Server a je prítomná vo všetkých prichádzajúcich požiadavkách, ktoré sú smerované cez IBM HTTP Server. Ak požiadavka nemá hlavičku HTTP, obsah bude smerovaný cez webový aplikačný server a nie cez IBM HTTP server.",
		admin_p8_download_generate_config: "Generovať konfiguráciu",
		admin_p8_download_generate_config_label: "Konfigurácia IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Aby mohla konfigurácia CHDC fungovať, musíte aktualizovať súbor  IBM HTTP Server httpd.conf. Kliknite na Generovať konfiguráciu, aby ste mohli vygenerovať príkazy, ktoré musia byť pridané do súboru httpd.conf.",

		admin_logging_viewone_pro: "Protokolovanie ViewONE Professional:",
		admin_logging_viewone_virtual: "Protokolovanie ViewONE Virtual:",
		admin_logging_viewone_streamer: "Protokolovanie modulu Document Streaming Server:",
		admin_logging_viewone_streamer_hover: "Voľby protokolovania modulu Document Streaming Server sú aplikovateľné, len ak ste povolili vysielanie prúdu údajov pre súbory PDF alebo TIFF v časti <b>Daeja ViewONE</b> administračného nástroja.",
		admin_logging_viewone_redaction: "Protokolovanie modulu Permanent Redaction Server:",
		admin_logging_viewone_redaction_hover: "Voľby protokolovania modulu Permanent Redaction Server sú aplikovateľné, len ak ste oprávnený používať modul Redaction nástroja Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Vysielať prúd údajov súborov PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Ak váš archív obsahuje veľké dokumenty PDF, môžete prehliadaču povoliť streamovanie obsahu dokumentov, aby užívatelia mohli rýchlejšie zobraziť obsah týchto dokumentov. Ak však streamovanie nefunguje vo vašom prostredí, môžete ho zakázať.",
		admin_daeja_viewonepro_stream_tiff_documents: "Vysielať prúd údajov súborov TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Ak váš archív obsahuje veľké dokumenty TIFF, môžete prehliadaču povoliť streamovanie obsahu dokumentov, aby užívatelia mohli rýchlejšie zobraziť obsah týchto dokumentov. Ak však streamovanie nefunguje vo vašom prostredí, môžete ho zakázať.",
		admin_daeja_viewonepro_show_file_buttons: "Tlačidlá na prácu so súbormi",
		admin_daeja_viewonepro_show_file_menus: "Ponuky na prácu so súbormi",
		admin_daeja_viewonepro_enable_file_keys: "Klávesové skratky na prácu so súbormi",
		admin_daeja_viewonepro_file_keys_hover_help: "Určte, či chcete, aby užívatelia mohli používať klávesové skratky pri práci so súbormi, napríklad na otvorenie alebo uloženie súboru. Bližšie informácie o konkrétnych klávesových skratkách nájdete v popise parametra FileKeys v príručke IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Tlačidlá pre tlač",
		admin_daeja_viewonepro_show_print_menus: "Ponuky pre tlač",
		admin_daeja_viewonepro_enable_print_keys: "Klávesové skratky pre tlač",
		admin_daeja_viewonepro_print_keys_hover_help: "Určte, či chcete, aby užívatelia mohli používať klávesové skratky pri tlači súborov, napríklad na vytlačenie strany alebo dokumentu. Bližšie informácie o konkrétnych klávesových skratkách nájdete v popise parametra PrintKeys v príručke IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Tlačidlá na invertovanie",
		admin_daeja_viewonepro_annotation_tooltip: "Predvolený pomocný text pre voliteľnú anotáciu:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Uveďte text, ktorý sa má zobrazovať, ak nie je určený žiadny pomocný text pre voliteľnú anotáciu. Tento text môžete obsahovať nahraditeľné symboly. Napríklad: &quot;&lt;creator&gt; vytvoril túto anotáciu dňa &lt;createdateonly&gt;.&quot; Informácie o zástupných symboloch nájdete v popise parametra customAnnotationsToolTip v príručke IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Použiť vopred definovaný vlastný pomocný text",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Zobraziť systémom definovaný pomocný text uvedený v textovom poli nižšie",
		admin_daeja_viewonepro_help_url: "Adresa URL pomoci:",
		admin_daeja_viewonepro_help_url_hover_help: "Uveďte adresu URL webovej stránky obsahujúcej pomoc k prezeraču. Táto webová stránka sa zobrazí po kliknutí na tlačidlo Pomoc v paneli nástrojov prezerača alebo na položku Pomoc v ponuke. Ak neuvediete adresu URL, tlačidlo a položka ponuky Pomoc sa nezobrazia.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kontext prostriedku obrázkovej pečiatky:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "úloha",
		admin_daeja_viewonepro_route_docs: "Smerovať nepodporovaný obsah do prehliadača:",
		admin_daeja_viewonepro_route_docs_hover_help: "Užívatelia môžu zobraziť nepodporované súbory obrázkov presmerovaním týchto súborov do webového prehliadača, ktorý otvorí príslušnú aplikáciu na zobrazenie súboru. Napríklad, na zobrazenie dokumentu aplikácie Microsoft Word prehliadač použije prezerač Microsoft Word.",
		admin_daeja_viewonepro_scale: "Automatické prispôsobenie obrázka:",
		admin_daeja_viewonepro_scale_best: "Prispôsobiť veľkosť",
		admin_daeja_viewonepro_scale_ftow: "Prispôsobiť na šírku",
		admin_daeja_viewonepro_scale_ftoh: "Prispôsobiť na výšku",
		admin_daeja_viewonepro_enable_hotkeys: "Povoliť klávesové skratky:",
		admin_daeja_viewonepro_show_features: "Zobraziť tlačidlá a ponuky:",
		admin_daeja_custom_settings: "Ďalšie nastavenia:",
		admin_daeja_custom_settings_hover_help: "Môžete pridať ďalšie parametre uvedením názvu a hodnoty parametrov. Napríklad, ak chcete, aby sa v prípade, že sa obrázok zväčší na veľkosť väčšiu ako je oblasť zobrazenia, zobrazovali posuvníky môžete uviesť &quot;scrollbars&quot; a &quot;true&quot;. Bližšie informácie o názvoch a hodnotách parametrov nájdete v príručke IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Predvolený pomocný text pre voliteľnú anotáciu:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Uveďte text, ktorý sa má zobrazovať, ak nie je určený žiadny pomocný text pre voliteľnú anotáciu. Tento text môžete obsahovať nahraditeľné symboly. Napríklad: &quot;&lt;creator&gt; vytvoril túto anotáciu dňa &lt;createdateonly&gt;.&quot; Informácie o zástupných symboloch nájdete v popise parametra customAnnotationsToolTip v príručke IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Použiť vopred definovaný vlastný pomocný text",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Zobraziť systémom definovaný pomocný text uvedený v textovom poli nižšie",
		admin_daeja_virtual_image_stamp_resource_context: "Kontext prostriedku obrázkovej pečiatky:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "úloha",
		admin_daeja_virtual_license_path:"Cesta k licenčným súborom:",
		admin_daeja_virtual_license_path_hover_help:"Zadajte úplnú cestu k adresáru obsahujúcemu licenčné súbory lic-server-virtual.v1 a lic-server.v1.",
		admin_default_license_path:"Použiť predvolenú cestu k licenčným súborom",
		admin_license_path_specified:"Použiť vlastnú cestu k licenčným súborom",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Adresár súborov vyrovnávacej pamäte:",
		admin_daeja_streamer_cache_root_hover_help: "Zadajte úplnú cestu k adresáru, do ktorého sa majú ukladať súbory vyrovnávacej pamäte za účelom rýchlejšieho prístupu k dokumentom. Tento adresár sa môže nachádzať v ľubovoľnom operačnom systéme alebo zariadení, napríklad v sieťovom umiestnení, pod podmienkou, že je viditeľný ako súborový systém pre server IBM Content Navigator a server IBM HTTP Server. Optimálnu výkonnosť dosiahnete použitím lokálneho adresára.",
		admin_daeja_streamer_settings: "Ďalšie nastavenia:",
		admin_daeja_streamer_settings_hover_help: "Môžete pridať ďalšie parametre uvedením názvu a hodnoty parametrov. Napríklad, môžete uviesť “cookieAllowedDomainList” a zoznam hostiteľských serverov oddelených čiarkou.  Bližšie informácie o názvoch a hodnotách parametrov nájdete v príručke IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Nastavenia:",
		admin_daeja_redaction_settings_hover_help: "Môžete pridať ďalšie parametre uvedením názvu a hodnoty parametrov. Napríklad, môžete uviesť “burnIncrementalAnnotations” a “true”. Bližšie informácie o názvoch a hodnotách parametrov nájdete v príručke IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Nové nastavenie",
		admin_daeja_setting_dialog_title_edit: "Upraviť nastavenie",
		admin_daeja_setting_dialog_hover_help: "Ďalšie parametre môžete pridať uvedením názvu a hodnoty parametra. Napríklad, ak chcete, aby sa zobrazili posuvníky, keď sa obrázok zväčší na veľkosť presahujúcu oblasť zobrazenia, uveďte “scrollbars” a “true”.",
		admin_daeja_setting_dialog_field_hover_help: "Bližšie informácie o názvoch a hodnotách parametrov nájdete v príručke Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Protokolovanie aplikácie Daeja ViewONE",
		admin_daeja_logging_trace: "Povoliť protokolovanie sledovania",
		admin_daeja_logging_trace_net: "Povoliť protokolovanie siete",
		admin_daeja_logging_trace_annotations: "Povoliť protokolovanie anotácií",
		admin_daeja_logging_log_file: "Protokolový súbor:",
		admin_daeja_logging_instructions: "Na riešenie problémov s Daeja ViewONE Professional a Daeja ViewONE Virtual môžete použiť protokolovanie. Ak viete, že problém sa vyskytuje pre určitý komponent, môžete zamerať vaše protokolovanie na tento komponent.",

		admin_v1pro_logging_trace_hover: "Použite toto nastavenie na riešenie všeobecných problémov s prezeračom.<br><br>Informácie protokolovania sú zapisované do Java konzoly na klientskom počítači. K Java konzole môžete pristupovať z ovládacieho panelu (Windows) alebo zo systémových preferencií (Mac) pre váš operačný systém.",
		admin_v1pro_logging_trace_net_hover: "Toto nastavenie použite na riešenie nasledujúcich problémov:<ul><li>Problémy s vaším pripojením k serveru</li><li>Problémy s typmi MIME</li><li>Problémy spôsobené príliš dlhými súbormi</li></ul>Okrem toho môžete použiť protokolovanie sledovania siete na určenie, kde sa vyskytujú oneskorenia, keď používate Daeja ViewONE Professional.<br><br>Informácie protokolovania sú zapisované do Java konzoly na klientskom počítači. K Java konzole môžete pristupovať z ovládacieho panelu (Windows) alebo zo systémových preferencií (Mac) pre váš operačný systém.",
		admin_v1pro_logging_trace_annotations_hover: "Toto nastavenie použite na odstránenie problémov s vytváraním, ukladaním alebo zavádzaním anotácií.<br><br>Informácie protokolovania sú zapisované do Java konzoly na klientskom počítači. K Java konzole môžete pristupovať z ovládacieho panelu (Windows) alebo zo systémových preferencií (Mac) pre váš operačný systém.",

		admin_virtual_logging_trace_hover: "Použite toto nastavenie na riešenie všeobecných problémov s prezeračom.<br><br>Informácie protokolovania sú štandardne zapisované do súboru virtual.log v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Toto nastavenie použite na riešenie nasledujúcich problémov:<ul><li>Problémy s vaším pripojením k serveru</li><li>Problémy s typmi MIME</li><li>Problémy spôsobené príliš dlhými súbormi</li></ul>Okrem toho môžete použiť protokolovanie sledovania siete na určenie, kde sa vyskytujú oneskorenia, keď používate Daeja ViewONE Virtual.<br><br>Informácie protokolovania sú štandardne zapisované do súboru virtual.log v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Toto nastavenie použite na odstránenie problémov s vytváraním, ukladaním alebo zavádzaním anotácií.<br><br>Informácie protokolovania sú štandardne zapisované do súboru virtual.log v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Ak povolíte protokolovanie pre prezerač, musíte uviesť úplnú cestu k protokolovému súboru, do ktorého sa majú ukladať informácie z protokolovania, a jeho názov.  Odporúčaný názov tohto protokolového súboru je virtual.log.",

		admin_streamer_logging_trace_hover: "Toto nastavenie použite na riešenie všeobecných problémov s modulom Document Streaming Server.<br><br>Informácie protokolovania sú štandardne zapisované do súboru streamer.log, ktorý je v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Toto nastavenie použite na riešenie nasledujúcich problémov:<ul><li>Problémy s vaším pripojením k serveru</li><li>Problémy s určitými typmi MIME</li><li>Problémy spôsobené príliš dlhými súbormi</li></ul>Okrem toho môžete použiť protokolovanie sledovania siete na určenie, kde sa vyskytujú oneskorenia, keď používate modul Document Streaming Server.<br><br>Informácie protokolovania sú štandardne zapisované do súboru streamer.log, ktorý je v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Ak povolíte protokolovanie pre modul Document Streaming Server, musíte uviesť úplnú cestu k protokolovému súboru, do ktorého sa majú ukladať informácie z protokolovania, a jeho názov.  Odporúčaný názov tohto protokolového súboru je streamer.log.",

		admin_redaction_logging_trace_hover: "Toto nastavenie použite na riešenie všeobecných problémov s modulom Permanent Redaction Server.<br><br>Informácie protokolovania sú štandardne zapisované do súboru redacttofile.log, ktorý je v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Toto nastavenie použite na riešenie nasledujúcich problémov:<ul><li>Problémy s vaším pripojením k serveru</li><li>Problémy s určitými typmi MIME</li><li>Problémy spôsobené príliš dlhými súbormi</li></ul>Okrem toho môžete použiť protokolovanie sledovania siete na určenie, kde sa vyskytujú oneskorenia, keď používate modul Permanent Redaction Server.<br><br>Informácie protokolovania sú štandardne zapisované do súboru redacttofile.log, ktorý je v podadresári config inštalačného adresára IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Ak povolíte protokolovanie pre modul Permanent Redaction Server, musíte uviesť úplnú cestu k protokolovému súboru, do ktorého sa majú ukladať informácie z protokolovania, a jeho názov.  Odporúčaný názov tohto protokolového súboru je redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Nakonfigurujte komponenty pre vaše prezerače a služby.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Ak chcete webového klienta použiť na pripojenie k jednému alebo viacerým archívom Content Manager OnDemand, musíte zadať informácie, ktoré produkt OnDemand Web Enablement Kit vyžaduje pre správne fungovanie. Tieto informácie sa zdieľajú medzi všetkými archívmi Content Manager OnDemand, ktoré sú nakonfigurované pre webového klienta.",
		admin_ondemand_language: "Jazyk:",
		admin_ondemand_tempdir: "Dočasný adresár ODWEK:",
		admin_ondemand_tracegrp: "Sledovanie ODWEK",
		admin_ondemand_tracedir: "Adresár sledovania:",
		admin_ondemand_tracelevel: "Úroveň sledovania:",
		admin_ondemand_tracelevel_0: "0 - Bez protokolovania",
		admin_ondemand_tracelevel_1: "1 - Protokolovanie chybových správ",
		admin_ondemand_tracelevel_2: "2 - Protokolovanie chybových správ a varovaní",
		admin_ondemand_tracelevel_3: "3 - Protokolovanie chybových správ, varovaní a informačných správ",
		admin_ondemand_tracelevel_4: "4 - Zaznamenávať všetky správy vrátane sledovania funkcií",
		admin_ondemand_max_trace_filesize: "Maximálna veľkosť súboru sledovania:",
		admin_ondemand_max_trace_filesize_unlimited: "Neobmedzené",
		admin_ondemand_max_trace_filesize_limited: "Obmedzené (odporúča sa)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Táto hodnota je mimo rozsah. Hodnota musí byť celé číslo medzi 1 a 1,000,000.",
		admin_ondemand_afp2pdf_installdir: "Inštalačný adresár AFP2PDF:",
		admin_ondemand_language_hover: "Určite jazyk, v ktorom má ODWEK vracať správy.",
		admin_ondemand_tempdir_hover: "Uveďte adresár, do ktorého má OnDemand Web Enablement Kit ukladať dočasné súbory počas spracovania. Na webovom aplikačnom serveri musíte zadať úplnú cestu k existujúcemu adresáru.",
		admin_ondemand_tracedir_hover: "Uveďte adresár, do ktorého sa má ukladať súbor sledovania ODWEK (arswww.trace). Na webovom aplikačnom serveri musíte zadať úplnú cestu k existujúcemu adresáru.",
		admin_ondemand_tracelevel_hover: "Zadajte úroveň protokolovania informácií, ktoré sú zapisované do súboru arswww.trace. <b>Protokolovanie chybových správ</b> zaznamenáva najmenšie množstvo informácií protokolovania. <b>Zaznamenajú sa všetky správy vrátane sledovania funkcie</b> zaznamenáva najviac informácií.<br /><br />Voľbu <b>Zaznamenajú sa všetky správy vrátane sledovania funkcie</b> nezadávajte v produkčnom prostredí, pokiaľ vám na to nedala pokyn Softvérová podpora IBM.",
		admin_ondemand_max_trace_filesize_hover: "Uveďte, či chcete povoliť rast súboru sledovania ODWEK do neobmedzenej veľkosti alebo či chcete, aby webový klient vytvoril nové protokolové súbory, keď protokolový súbor dosiahne určitú veľkosť. Predvolené nastavenie je povoliť rast protokolového súboru sledovania pokiaľ nie je webová aplikácia zastavená na webovom aplikačnom serveri.",
		admin_ondemand_max_trace_unlimited_hover: "Vyberte túto voľbu, ak chcete, aby boli informácie sledovania ODWEK zapisované do jedného protokolového súboru. Ak vyberiete túto voľbu, mohli by ste mať protokolový súbor, ktorý je príliš veľký na otvorenie so štandardným prehliadačom súborov.",
		admin_ondemand_max_trace_limited_hover: "Vyberte túto voľbu, ak chcete, aby boli informácie sledovania ODWEK zapisované do menších protokolových súborov. Keď protokolový súbor dosiahne maximálnu veľkosť, aktuálny protokol je premenovaný tak, aby zahŕňal dátum (arswww.trace.RRRRMMDD.HHMMSS) a je vytvorený nový protokolový súbor.",
		admin_ondemand_afp2pdf_installdir_hover: "Ak chcete používať pomocný transformačný program AFP2PDF na konverziu dokumentov AFP na dokumenty PDF pre zobrazovanie a tlač, uveďte adresár, v ktorom je nainštalovaný pomocný transformačný program AFP2PDF na webovom aplikačnom serveri. Napríklad: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Správcovia",
		admin_adminusers_heading_text_multi: "Určite, ktorí užívatelia majú administračné privilégiá vo webovom klientovi. Do administračnej pracovnej plochy sa môžu prihlasovať len správcovia.<br /><br /><b>Upozornenie:</b> ID užívateľov správcov produktu IBM Content Navigator sa musia zhodovať:<ul><li>s ID užívateľov, ktoré existujú na vašom webovom aplikačnom serveri. Tieto ID užívateľov nemusia byť správcami na webovom aplikačnom serveri.</li><li>s ID užívateľov, ktoré existujú v predvolenom archíve nakonfigurovanom pre každú pracovnú plochu, ktorá obsahuje funkciu Administrácia.</li></ul>",
		admin_adminusers_heading_text_single: "Určite, ktorí užívatelia majú mať administratívne privilégiá vo webovom klientovi. Do administračnej pracovnej plochy sa môžu prihlasovať len správcovia.<br /><br /><b>Upozornenie:</b> ID užívateľov správcov produktu IBM Content Navigator sa musia zhodovať s ID užívateľov, ktoré existujú na vašom webovom aplikačnom serveri. Tieto ID užívateľov nemusia byť správcami na webovom aplikačnom serveri.",
		admin_adminusers_newuser: "Nový správca:",
		admin_adminusers_add: "Pridať",
		admin_adminusers_remove: "Odstrániť",
		admin_adminusers_listheading: "Správcovia",
		admin_adminusers_nameInvalid: "Hodnota nemôže byť duplicitná.",

		admin_sync_server_instructions: "<b>Iba užívatelia FileNet P8:</b> Ak plánujete povoliť služby synchronizácie pre niektoré archívy, webového klienta musíte nakonfigurovať tak, aby používal služby synchronizácie. Konfiguráciu služieb synchronizácie zdieľajú všetky archívy v prostredí.",
		admin_settings_instructions: "Hodnoty, ktoré zadáte na karte Nastavenia, sa uplatnia na všetkých pracovných plochách vo vašej konfigurácii.",
		admin_autocomplete: "Automaticky vyplniť mená užívateľov:",
		admin_autocomplete_hover: "Určite, či má webový klient ukladať mená užívateľov do objektov cookie prehliadača, aby umožnil prehliadaču automaticky vyplniť mená užívateľov vo webovom klientovi počas prihlásenia.<br><br>Ak povolíte túto voľbu, meno posledného užívateľa, ktorý sa prihlási do webového klienta, bude uložené do objektov cookie prehliadača a automaticky sa zobrazí na stránke Prihlásenie, keď užívateľ otvorí webového klienta.<br><br>Túto voľbu by ste mali zakázať v prípade, ak sa k aplikácii pristupuje zo zdieľaných pracovných staníc, alebo ak vás znepokojuje ukladanie mien užívateľov do objektov cookie prehliadača.<br /><br />Táto voľba sa nevzťahuje na mobilné alebo na vlastné aplikácie.",
		admin_autocomplete_enable: "Povoliť",
		admin_autocomplete_disable: "Zakázať",
		admin_cultural_collation: "Použiť triedenie podľa miestnych nastavení:",
		admin_cultural_collation_hover: "Ak povolíte triedenie podľa miestnych nastavení, toto triedenie sa bude vykonávať na serveri archívu. Toto nastavenie môže znížiť výkon webového klienta.<br><br>Zakázanie triedenia podľa miestnych nastavení môže zvýšiť výkon webového klienta.",
		admin_cultural_collation_enable: "Povoliť",
		admin_cultural_collation_disable: "Zakázať",
		admin_base_ui_style: "Štýl motívu",
		admin_base_ui_style_hover: "Určte štýl predvoleného motívu, ktorý sa používa vo webovom klientovi. Tento štýl sa použije iba v pracovných plochách používajúcich motív <b>Predvolené</b> (podľa nastavení na karte <b>Vzhľad</b> konfigurácie pracovnej plochy).<br/></br><b>Obmedzenie:</b> Ak sa vo vašich konfiguráciách pracovných plôch používajú vlastné motívy, tieto vlastné motívy budú založené na klasickom štýle, a to bez ohľadu na vybratý štýl.",
		admin_base_ui_style_classic: "Klasický",
		admin_access_control_access: "Obmedziť prístup na konkrétnych užívateľov a skupiny",
		admin_access_control_access_show: "Zobraziť údaje riadenia prístupu",
		admin_access_control_access_enable: "Áno",
		admin_access_control_access_disable: "Nie",
		admin_mobile_access: "Povoliť prístup z mobilných aplikácií",
		admin_mobile_access_hover: "Užívatelia môžu pristupovať k webovému klientovi z aplikácie IBM Content Navigator pre operačný systém iOS.<br /><br /><b>Dôležité:</b> Ak zabránite užívateľom v prístupe k webovému klientovi z aplikácie pre operačný systém iOS, užívatelia budú môcť naďalej pristupovať k webovému klientovi z webových prehliadačov na ich mobilných zariadeniach a zo všetkých vlastných aplikácií, ktoré sú napísané pomocou rozhrania API IBM Content Navigator a ktoré fungujú na mobilných zariadeniach.",
		admin_mobile_access_enable: "Áno",
		admin_mobile_access_disable: "Nie",
		admin_error: "Informácie o chybových správach:",
		admin_error_custom: "Vyhľadávať voliteľný obsah podpory",
		admin_error_default: "Vyhľadať obsah v lokalite podpory IBM <BDO DIR='LTR'>(</BDO>predvolené<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Určte, kde môžu užívatelia vyhľadať ďalšie informácie v prípade, že sa vyskytne chyba. Užívatelia môžu získať informácie v lokalite IBM Support Portal alebo v internom zdroji informácií, ako je napríklad technická podpora spoločnosti.",
		admin_error_URL: "Predpona adresy URL:",
		admin_error_URL_hover: "Zadajte adresu URL zdroja informácií, na ktorý chcete nasmerovať užívateľov, keď zaznamenajú chybu, napríklad na technickú podporu. Napríklad: http://localhost:číslo_portu. Webový klient pripojí číslo správy k adrese URL.",
		admin_prompt_close_without_save: "Zatvoriť bez uloženia zmien?",
		admin_object_expiration_time: "Interval obnovenia pamäte cache (v minútach):",
		admin_object_expiration_time_hover: "Výkon webového klienta môžete zvýšiť predĺžením času, počas ktorého sa konfiguračné objekty, ako sú napríklad pracovné plochy, uchovávajú v pamäti cache. Predvolený čas je 10 minút. Maximálny čas je 1 440 minút (1 deň).<br /><br />Zmeny sa uplatnia až po ďalšom spustení webovej aplikácie.<br /><br />Ak je produkt IBM Content Navigator nasadený vo vysoko dostupnom klastrovom prostredí, zmeny v konfiguračných objektoch nebudú propagované do uzlov v klastri, kým sa pamäť cache neobnoví.",
		admin_temp_file_cleanup_interval: "Interval prehľadávania pre čistenie pamäte cache prezerača (v hodinách):",
		admin_temp_file_cleanup_interval_hover: "Uveďte frekvenciu vyhľadávania a odstraňovania dočasných súborov s ukončenou platnosťou v dočasnom adresári. Dočasný adresár sa predvolene prehľadáva každých šesť hodín. Môžete určiť interval 6 až 48 hodín.",
		admin_temp_file_expiration_interval: "Doba platnosti pamäte cache prezerača (v hodinách):",
		admin_temp_file_expiration_interval_hover: "Uveďte dobu uchovávania dočasných súborov súvisiacich s aktivitami prezerača v pamäti cache webového prehliadača. Platnosť týchto dočasných súborov predvolene skončí po 24 hodinách. Môžete určiť interval v rozsahu 12 až 48 hodín.",
		admin_encryption_key_hover: "Kľúč používaný pre funkcie šifrovania navigátora.",
		admin_encryption_key: "Šifrovací kľúč:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Prispôsobenie",
		admin_mobile_branding_main_color: "Primárna farba:",
		admin_mobile_branding_secondary_color: "Sekundárna farba:",
		admin_mobile_device_title: "Správa služby MaaS360",
		admin_mobile_device_enable_maas360: "Povoliť službu MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Tu uveďte kontextovú pomoc pre povolenie služby MaaS360",
		admin_mobile_device_maas360_developer_id: "ID vývojára v službe MaaS360:",
		admin_mobile_device_maas360_license_key: "Licenčný kľúč pre službu MaaS360:",
		admin_mobile_settings_title: "Nastavenia",
		admin_mobile_email_address_hover_help: "E-mailová adresa, ktorá sa použije v mobilnej aplikácii, keď užívateľ ťukne na položku \"Poslať správu o chybe\".",
		admin_mobile_email_address: "E-mailová adresa:",
		admin_invalid_email_address_message: "E-mailová adresa, ktorú ste uviedli, nemá správny formát. Uveďte správnu adresu a skúste znova.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Niektoré údaje sú neplatné.",
		admin_configuration_parameters: "Konfiguračné parametre",
		admin_configuration_optional_features: "Voliteľné komponenty",
		admin_configuration_optional_features_p8_instructions: "Vyberte komponenty, ktoré chcete povoliť v tomto archíve.<p><b>Dôležité:</b> Ak povolíte komponent, ktorý do archívu inštaluje doplnok, musíte byť pripojený k archívu ako správca systému Content Platform Engine alebo Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Vyberte komponenty, ktoré chcete povoliť v tomto archíve.<p><b>Dôležité:</b> Tieto komponenty upravia dátový model vo vašom archíve. Na ich povolenie musíte byť pripojený k archívu ako správca knižničného servera.</p>",
		admin_system_properties: "Systémové vlastnosti",
		admin_system_properties_for: "Systémové vlastnosti pre:",
		admin_available_properties: "Dostupné vlastnosti",
		admin_displayed_properties: "Zobrazené vlastnosti",
		admin_selected_properties: "Vybraté vlastnosti",
		admin_selected_filtered_properties: "Skryté vlastnosti",
		admin_available_operators: "Zobrazené operátory",
		admin_selected_filtered_operators: "Skryté operátory",
		admin_system_properties_shown: "Zobrazené vlastnosti",
		admin_system_properties_hidden: "Skryté vlastnosti",
		admin_available_menu_items: "Dostupné akcie:",
		admin_selected_menu_items: "Vybraté akcie:",
		admin_menu_global: "Použije sa, keď nebudú vybraté žiadne položky:",
		admin_menu_multiple_document: "Použije sa, keď budú vybraté viaceré položky:",
		admin_menu_privileges: "Povinné privilégiá:",
		admin_menu_plugin: "Modul plug-in:",
		admin_menu_repository_types: "Typy archívov:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Oddeľovač",
		admin_browse: "Prehľadávanie",
		admin_search: "Hľadať",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Revízia na základe roly",
		admin_connections_library_enabled: "IBM Connections je povolený",
		admin_office_conf: "Úprava integrácií",
		admin_desktop_conf_label: "Konfigurácia pracovnej plochy",
		admin_ms_office_conf_label: "Konfigurácia balíka Office",
		admin_workflows: "Pracovné toky",
		admin_file_types: "Typy súborov",
		admin_file_type_contains_label: "Typ súboru obsahuje",
		admin_name_propepty: "Názov",
		admin_cm_name_property_default: "Použiť predvolený názov",
		admin_cm_name_property_default_hover: "Vlastnosť hierarchického názvu ICM (ICM$NAME) sa štandardne používa ako názov položky, ak je vlastnosť definovaná pre položku.  Ak vlastnosť hierarchického názvu ICM (ICM$NAME) nie je k dispozícii, ako názov položky sa použije prvá vlastnosť, ktorá je označená ako \"represents\".",
		admin_cm_name_property: "Zadajte vlastnosť názvu položky",
		admin_cm_name_property_hover: "Zadajte, ktorá vlastnosť sa použije ako názov pre dokumenty a priečinky.",
		admin_name_property: "Vlastnosť názvu:",
		admin_doc_name_property: "Vlastnosť názvu dokumentu:",
		admin_doc_name_property_hover: "Vyberte vlastnosť, ktorá sa použije ako názov dokumentu.",
		admin_folder_name_property: "Vlastnosť názvu priečinka:",
		admin_folder_name_property_hover: "Vyberte vlastnosť, ktorá sa použije ako názov priečinka.",
		admin_all_searches_label: "Počet zobrazených vyhľadávaní:",
		admin_unlimited: "Žiadne obmedzenie",
		admin_limit: "Obmedziť na",
		admin_repository: "Archív:",
		admin_application_space: "Aplikačný priestor",
		admin_available_application_spaces: "Dostupné aplikačné priestory:",
		admin_selected_application_spaces: "Vybraté aplikačné priestory:",
		admin_label: "Návestie",
		admin_repository_box_placeholder: "Vyberte archív v službe Box",
		admin_repository_placeholder: "Vyberte archív",
		admin_search_match: "Zhoda:",
		admin_search_match_all: "Vyhovuje všetkým kritériám vyhľadávania",
		admin_search_match_any: "Vyhovuje ľubovoľným kritériám vyhľadávania",
		admin_search_match_hover: "Určte, ktorá voľba je štandardne vybratá v ponuke <b>Voľby vlastností</b>.",

		admin_repository_redactions_instructions: "Môžete nakonfigurovať revízie na základe roly pre tento archív.",
		admin_repository_redaction_policies_description: "Môžete vytvoriť a spravovať politiky revízie, ktoré priraďujú príčiny revízie k užívateľom a skupinám s oprávnením na čítanie citlivých údajov a úpravu anotácií, ktoré zabraňujú v zobrazení citlivých údajov.",
		admin_repository_redaction_roles_instruction: "Môžete vytvoriť rolu revízie a udeliť tak konkrétnym užívateľom a skupinám oprávnenie na čítanie citlivých údajov alebo na úpravu anotácií, ktoré zabraňujú v zobrazení citlivých údajov. Rola revízie musí byť priradená k príčine revízie v politike revízie, aby títo užívatelia mohli čítať údaje alebo upraviť anotácie.",
		admin_repository_redaction_reasons_instruction: "Môžete nakonfigurovať príčiny revízie pre tento archív.",
		admin_repository_redaction_policies: "Konfigurácia politiky revízie",
		admin_repository_redaction_roles: "Konfigurácia rolí revízie",
		admin_repository_redaction_reasons: "Konfigurácia príčin revízie",
		admin_repository_redaction_roles_type: "Typ",
		admin_repository_redaction_roles_type_hover: "Editor môže vytvoriť, upraviť alebo odstrániť konkrétne typy revízií na základe roly, kým prezerač môže zobraziť niektoré typy citlivých údajov.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Prezeranie",
		admin_repository_redaction_roles_membership: "Členstvo",
		admin_repository_redaction_roles_membership_hover: "Vyberte editorov, ktorí majú mať túto rolu.",
		admin_repository_redaction_roles_user_group_hover: "Vyhľadajte užívateľov a skupiny alebo vyberte editorov, ktorí majú mať túto rolu.",
		admin_repository_redaction_roles_description: "Môžete vytvoriť a spravovať roly revízie, ktoré udeľujú užívateľovom a skupinám oprávnenie na čítanie citlivých údajov alebo na úpravu anotácií, ktoré zabraňujú v zobrazení citlivých údajov.",
		admin_repository_redaction_new: "Nová rola revízie",
		admin_repository_redaction_role_avail_editors: "Dostupní editori revízií",
		admin_repository_redaction_role_avail_users: "Dostupní užívatelia",
		admin_repository_redaction_role_avail_groups: "Dostupné skupiny",
		admin_repository_redaction_role_selected_editors: "Vybratí editori revízií",
		admin_repository_redaction_role_selected_users_groups: "Vybratí užívatelia a skupiny",
		admin_repository_redaction_role_add_editor: "Noví editori...",
		admin_repository_redaction_role_access_type: "Prístup",
		admin_repository_redaction_role_access_type_access: "Povoliť",
		admin_repository_redaction_role_access_type_no_access: "Zamietnuť",
		admin_repository_redaction_role_users: "Užívatelia",
		admin_repository_redaction_role_groups: "Skupiny",
		admin_repository_redaction_role_editors: "Editori",
		admin_delete_confirmation_redaction_roles: "Chcete odstrániť vybratú rolu revízie?",
		admin_repository_edit_redaction_role: "Rola revízie: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Predvolený prístup",
		// RBA
		desktop_user_group_acl: "Správcovia pracovnej plochy",
		desktop_user_group_remove: "Odstrániť",
		desktop_rba_membership: "Členstvo:",
		desktop_rba_membership_list_label: "Názov",
		admin_repository_redaction_policy_hover: "Uveďte popis, na základe ktorého budú môcť užívatelia identifikovať túto politiku.",
		admin_repository_new_redaction_policy: "Nová politika revízie",
		admin_repository_policy_name: "Názov politiky",
		admin_repository_reason_redactions: "Príčiny revízie:",
		admin_repository_role_editors: "Editori",
		admin_repository_role_viewers: "Prezerači",
		admin_repository_redaction_policy_instruction: "Môžete vytvoriť politiku revízie a priradiť tak vybraté príčiny revízie k editorom revízií a prezeračom revízií.",
		admin_repository_redaction_reasons_hover: "Vyberte typy citlivých údajov, ktoré väčšina užívateľov nemajú vidieť, napríklad osobné identifikačné informácie, obchodné tajomstvá alebo dôverné alebo vlastnícke informácie vašej spoločnosti.",
		admin_repository_readaction_available_reasons: "Dostupné príčiny",
		admin_repository_readaction_selected_reasons: "Vybraté príčiny",
		admin_repository_readaction_new_reason: "Nová príčina...",
		admin_repository_redeaction_reasons: "Príčiny revízie:",
		admin_repository_readaction_editor_permmission: "Editori revízií:",
		admin_repository_redaction_editors_hover: "Vyberte roly užívateľov, ktorí môžu vytvárať a upravovať revízie z vybratých príčin.",
		admin_repository_readaction_new_editor_role: "Nová rola editora...",
		admin_repository_readaction_available_editors: "Dostupné roly editorov",
		admin_repository_readaction_selected_editors: "Vybraté roly editorov",
		admin_repository_readaction_viewer_permmission: "Prezerači revízií:",
		admin_repository_redaction_viewers_hover: "Vyberte roly užívateľov, ktorí môžu zobrazovať citlivé údaje z vybratých príčin. Pri užívateľoch a skupinách s týmito rolami sa nebude uplatňovať revízia.",
		admin_repository_readaction_new_viewer_role: "Nová rola prezerača...",
		admin_repository_readaction_available_viewers: "Dostupné roly prezeračov",
		admin_repository_readaction_selected_viewers: "Vybraté roly prezeračov",
		admin_repository_reason_redactions_header: "Príčiny revízie",
		admin_delete_confirmation_redaction_policy: "Chcete odstrániť vybratú politiku revízie?",
		admin_role_type_repository: "Archív",
		admin_role_type_administrator: "Správca",
		admin_role_type_template: "Šablóna",
		admin_role_type_teamspace: "Tímový priestor",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Prezeranie",
		admin_collaboration_services_instructions: "Ak máte IBM Connections a webovú aplikáciu FileNet Collaboration Services, môžete nakonfigurovať komunitné tímové priestory a toky aktivít pre archív.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfigurácia komunitných knižníc",
		admin_collaboration_community_instruction: "Vo svojej doméne IBM FileNet P8 môžete nakonfigurovať jeden archív pre ukladanie komunitných knižníc IBM Connections (nazývaných aj tímové priestory). Keď užívatelia vytvoria komunitnú knižnicu prostredníctvom IBM Connections, bude uložená v archíve, ktorý je označený ako archív komunitných knižníc.",
		admin_collaboration_community_teamspaces: "Použiť tento archív pre komunitné knižnice:",
		admin_collaboration_community_teamspaces_hover: "Pre ukladanie nových komunitných knižníc môžete vo svojej doméne   IBM FileNet P8 použiť len jeden archív. Ak povolíte tento archív a máte existujúci archív, existujúci archív bude zakázaný. Avšak všetky existujúce knižnice zostanú v aktuálnom archíve.",
		admin_collaboration_connections_anonymous: "Povoliť anonymný prístup k verejnému obsahu:",
		admin_collaboration_connections_anonymous_hover: "Ak váš server IBM Connections obsahuje verejné alebo moderované komunity, nakonfigurujte aplikáciu FileNet Collaboration Services, aby povolila užívateľom prehľadávať a sťahovať obsah z knižníc  v takýchto komunitách, bez toho aby sa museli najprv prihlásiť.<br><br>Užívatelia, ktorí na komunitné knižnice pristupujú anonymne, nemôžu vytvárať, upravovať ani odstraňovať obsah.<br><br><b>Dôležité:</b> Jedného užívateľa LDAP v službe IBM FileNet P8 musíte určiť ako anonymného užívateľa a tohto užívateľa musíte na serveri WebSphere Application Server nakonfigurovať s rolou <b>Anonymous</b>.",
		admin_collaboration_connections_url: "Adresa URL servera IBM Connections:",
		admin_collaboration_connections_url_hover: "Zadajte adresu URL servera IBM Connections vo formáte http://IBMConnectionsServer:číslo_portu.  Ak je server IBM Connections nakonfigurovaný tak, aby používal IBM HTTP Server, môžete v adrese URL vynechať číslo portu.<br><br>Adresa URL musí byť prístupná užívateľom IBM Connections, pretože sa jedná o prepojenie, ktoré FileNet Collaboration Services používa na vytvorenie prepojení k cieľovej stránke dokumentov IBM Connections.",
		admin_collaboration_connections_url_http_use: "Použiť adresu URL IBM Connections",
		admin_collaboration_connections_url_https_use: "Použiť HTTPS adresu URL IBM Connections",
		admin_collaboration_connections_url_specify: "Zadať adresu URL",
		admin_collaboration_connections_url_https: "HTTPS adresa URL IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Aj je server IBM Connections nakonfigurovaný tak, aby používal protokol SSL, zadajte HTTPS adresu URL pre váš server IBM Connections vo formáte https://IBMConnectionsServer:číslo_portu.  Ak je server IBM Connections nakonfigurovaný tak, aby používal IBM HTTP Server, môžete v adrese URL vynechať číslo portu.",

		admin_collaboration_connections_gadget_url: "Adresa URL miniaplikácie IBM Connections:",
		admin_collaboration_connections_retrieval_url: "Adresa URL pre získavanie obsahu IBM Connections:",
		admin_collaboration_connections_security: "Správca komunity:",
		admin_collaboration_connections_security_hover: "Zadajte užívateľov a skupiny, ktorí dokážu spravovať obsah v komunitných knižníc.<br><br>Globálni správcovia môžu vytvárať, upravovať, vymazať a poskytovať prístup ku komunitným  knižniciam a k obsahu komunitných knižníc. Keď určíte užívateľa ako globálneho správcu, užívateľ v archíve dostane  privilégia ClbGlobalAdministrator.<br><br>Globálni revízni správcovia môžu v komunitnej knižnici schváliť a odmietnuť obsah, ktorý sa posudzuje pred publikovaním. Keď určíte užívateľa ako globálneho správcu, užívateľ v archíve dostane privilégia ClbGloablReviewAdministrator.",

		admin_collaboration_connections_admins: "Globálni správcovia",
		admin_collaboration_connections_admins_review: "Globálni revízni správcovia",
		admin_collaboration_connections_seedlist: "Indexovať obsah komunitnej knižnice:",
		admin_collaboration_connections_seedlist_hover: "Zadajte, či má IBM Connections prehľadať komunitné  knižnice v tomto archíve, aby vytvoril vyhľadávací index. Vytvorenie indexu dokáže ovplyvniť výkonnosť archívu.<br><br>Ak sú rozšírenia Social Collaboration Search Indexing Extensions nainštalované v archíve, táto voľba bude štandardne povolená. Ak rozšírenia Social Collaboration Search Indexing Extensions nie sú nainštalované v archíve, prídavný komponent bude do archívu nainštalovaný, keď túto voľbu povolíte",
		admin_collaboration_activity_stream: "Konfigurácia udalostí toku aktivít",
		admin_collaboration_activity_stream_label: "Doručovať informácie o udalostiach bez vyžiadania do služby IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Určte, či chcete, aby sa informácie o udalostiach, ako napríklad vytvorenie, odhlásenie, prihlásenie dokumentu, komentáre, značky a zdieľania, bez vyžiadania doručovali do služby IBM Connections.<br><br><b>Dôležité:</b> Doručovanie oznámení bez vyžiadania do IBM Connections môže mať vplyv na výkonnosť archívu.",

		admin_collaboration_activity_stream_instruction: "Tento archív môžete nakonfigurovať, aby bez vyžiadania doručoval  informácie o udalosti, ako sú napríklad komentáre a schválenia dokumentov, do IBM Connections. Udalosti sa budú  zobrazovať na stránke <b>Aktuálne aktualizácie</b> v komunitách IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorovať informácie o udalostiach pre špecifických užívateľov  a skupiny:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Môžete ignorovať udalosti, ktoré generujú špecifickí užívatelia alebo skupiny, ako sú napríklad správcovia alebo systémové kontá, aby ste zredukovali počet oznámení, ktoré sa zobrazia užívateľom. Ak napríklad vykonávate migráciu obsahu, môžete určiť, že sa budú ignorovať udalosti, ktoré generuje konto, ktoré sa používa na vykonanie migrácie.",
		admin_collaboration_activity_stream_userid: "Meno užívateľa IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Zadajte systémové konto, ktoré bude Content Platform Engine používať na autentifikáciu a na odosielanie informácií o udalostiach do IBM Connections. Užívateľ musí mať rolu <b>trustedExternalApplication</b> v aplikácii Widget Container v službe IBM Connections.<br><br><b>Tip:</b> Správca IBM Connections má predvolene príslušné oprávnenia. ID správcu môžete použiť ako meno užívateľa",
		admin_collaboration_activity_stream_password: "Heslo užívateľa IBM Connections:",

		admin_help_url: "Adresa URL pomoci pre koncových užívateľov:",
		admin_help_url_hover: "<b>Dôležité upozornenie:</b> Počnúc vydaním IBM Content Navigator, verzia 3.0.0, produkt IBM Knowledge Center Customer Installed nebude aktualizovaný. Bližšie informácie o používaní prispôsobenej pomoci vám poskytne oddelenie služieb zákazníkom.<br><br>Počnúc vydaním IBM Content Navigator, verzia 3.0.0, sa bude adresa URL pomoci pre koncových užívateľov odkazovať na lokalitu IBM Knowledge Center. Adresa URL služby IBM Knowledge Center je: http://www.ibm.com/support/knowledgecenter.<br><br>Ak chcete naďalej používať predchádzajúcu verziu produktu IBM Knowledge Center Customer Installed, určte adresu URL inštancie produktu IBM Knowledge Center Customer Installed, ktorú ste nasadili prostredníctvom nástroja IBM Content Navigator Configuration and Deployment Tool. Adresa URL musí byť dostupná z klientskych počítačov. Adresa URL má nasledujúci formát: http://názov_servera:číslo_portu/kc.<br><br>Názov servera a číslo portu môžete nájsť v súbore console.log, ktorý sa nachádza v podadresári KnowledgeCenter/logs v inštalačnom adresári produktu IBM Content Navigator.",

		admin_help_default: "Použiť predvolený systém pomoci poskytnutý spoločnosťou IBM",
		admin_custom_help: "Použiť voliteľný systém pomoci",
		admin_help_kc: "Použiť voliteľný systém pomoci v produkte IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Dôležité upozornenie:</b> Počnúc vydaním IBM Content Navigator, verzia 3.0.0, produkt IBM Knowledge Center Customer Installed nebude aktualizovaný. Bližšie informácie o používaní prispôsobenej pomoci vám poskytne oddelenie služieb zákazníkom.<br><br>Ak chcete naďalej používať predchádzajúcu verziu produktu IBM Knowledge Center Customer Installed, vyberte túto možnosť, aby sa obsah pridal do nasadenej inštancie produktu IBM Knowledge Center Customer Installed.",
		admin_help_taxonomy: "Kategorizačný kód:",
		admin_help_taxonomy_hover: "Uveďte kategorizačný kód pre voliteľný systém pomoci.<br><br>Kategorizačný kód produktu IBM Content Navigator je SSEUEX. Ak chcete, aby sa pomoc zobrazovala pod iným názvom produktu v produkte IBM Knowledge Center Customer Installed, do súboru KC_taxonomy.ditamap v podadresári KnowledgeCenter/usr/taxonomy v inštalačnom adresári produktu IBM Content Navigator musíte pridať jedinečný kategorizačný kód.",
		admin_help_context: "Kontext pomoci:",
		admin_help_context_hover: "Uveďte kontext pre voliteľný systém pomoci.<br><br>Systém pomoci produktu IBM Content Navigator sa nachádza v adresári KnowledgeCenter/usr/content/com.ibm.usingeuc.doc v inštalačnom adresári produktu IBM Content Navigator. Kontext predvoleného systému pomoci je com.ibm.usingeuc.doc. Ak chcete poskytnúť voliteľný systém pomoci, pridajte obsah do nového podadresára v adresári KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Úvodná stránka:",
		admin_help_welcome_hover: "Uveďte názov témy, ktorá sa má zobraziť ako úvodná stránka, keď užívatelia otvoria systém pomoci. Musíte vytvoriť súbor vlastností, ktorý bude určovať umiestnenie úvodnej stránky, a pridať tento súbor do adresára KnowledgeCenter/usr/conf v inštalačnom adresári produktu IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Súbor JSON prípon súborov typov MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Skontrolujte názov súboru JSON a úplnú cestu k tomuto súboru. Tento súbor môže byť všeobecný súbor zo súborového systému alebo adresa URL, ktorá sa odkazuje na súbor JSON.  <br><br>Obsah súboru JSON predstavuje pole definícií typov MIME. <br><br>Definícia typu MIME zahŕňa štyri kľúče: \"mimeTypes\", \"extensions\", \"fileType\" a \"iconName\". Prvé dva kľúče, \"mimeTypes\" a \"extensions\", sú povinné a môžu to byť množiny reťazcov oddelených znakom \",\". Posledné dva kľúče, \"fileType\" a \"iconName\", nie sú povinné. <br><br>Napríklad: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfigurácia správcu úloh",
		admin_taskmanager_service: "Služba správcu úloh:",
		admin_taskmanager_service_hover: "Určte, či chcete použiť službu správcu úloh na vytváranie a spúšťanie asynchrónnych úloh. <br><br>Ak zmeníte toto nastavenie, musíte reštartovať webovú aplikáciu IBM Content Navigator, aby zmeny nadobudli účinok.",
		admin_taskmanager_url: "Adresa URL služby správcu úloh:",
		admin_taskmanager_url_hover: "Zadajte adresu URL, prostredníctvom ktorej môžu ostatné aplikácie komunikovať so službou správcu úloh. Táto adresa URL má formát http://názov_servera:číslo_portu/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Adresár protokolu správcu úloh:",
		admin_taskmanager_logdirectory_hover: "Protokolové súbory pre službu správcu úloh sú štandardne zapisované do rovnakého adresára ako protokolové súbory webového aplikačného servera. <br><br>Ak chcete, aby boli informácie protokolovania zapisované do iného adresára na serveri IBM Content Navigator, zadajte úplnú cestu k adresáru, kde chcete ukladať protokolové súbory, ktoré sú generované komponentom správcu úloh. <br><br>Ak zmeníte toto nastavenie, musíte reštartovať webovú aplikáciu IBM Content Navigator, aby zmeny nadobudli účinok.",
		admin_taskmanager_heartBeatMonitor: "Monitorovanie signálu aktivity klastra",
		admin_taskmanager_heartBeatMonitor_hover: "Len pre klastrové prostredia s vysokou dostupnosťou. Ak povolíte túto voľbu, služba správcu úloh presmeruje úlohy z uzlov, ktoré sú aktuálne neaktívne, na uzly, ktoré sú aktuálne aktívne. <br><br>Ak zmeníte toto nastavenie, musíte reštartovať webovú aplikáciu IBM Content Navigator, aby zmeny nadobudli účinok.",

		admin_syncserver_title: "Konfigurácia synchronizácie servera",
		admin_syncserver_enable: "Služby synchronizácie:",
		admin_syncserver_enable_hover: "Uveďte, či chcete, aby užívatelia, ktorí pristupujú k tejto pracovnej ploche, boli schopní synchronizovať položky medzi ich pracovnými stanicami a mobilnými zariadeniami.<br><br><b>Dôležité:</b> Ak chcete používať túto funkciu, musíte vykonať aj nasledujúce kroky:<ul><li>Určiť <b>verejnú adresu URL služieb synchronizácie</b> v časti <b>Služby synchronizácie</b> v administračnom nástroji.</li><li>Pridať do tejto pracovnej plochy archív, pre ktorý sú povolené služby synchronizácie.</li></ul>Ak zakážete túto možnosť, ale do pracovnej plochy pridáte archív, pre ktorý sú povolené služby synchronizácie, nastavenie archívu sa bude ignorovať.",
		admin_mobileqr_enable: "Zobraziť kód QR IBM Navigator na prihlasovacej stránke:",
		admin_mobileqr_enable_hover: "Povoľte túto možnosť, ak chcete na prihlasovacej stránke webového klienta zobraziť kód QR pre mobilnú aplikáciu IBM Navigator.<br><br>Keď užívateľ zosníma kód QR, bude presmerovaný do príslušného obchodu s aplikáciami pre jeho zariadenie, kde môže stiahnuť mobilnú aplikáciu IBM Navigator.",

		admin_streamlineservice_enable: "Služba úprav:",
		admin_streamlineservice_enable_hover: "Len používatelia FileNet P8. Povoľte túto možnosť, ak chcete užívateľom počítačov dovoliť jednoducho pridávať a upravovať dokumenty z natívnych aplikácií v ich pracovných staniciach. <br><br>Ak chcete použiť toto nastavenie, musíte tiež vykonať nasledujúce: <ul><li>Povoľte službu úprav v jednom alebo viacerých archívoch, ktoré sú spojené s týmto počítačom</li><li>Nainštalujte klienta IBM Content Navigator Edit do užívateľských pracovných staníc</li></ul>",

		admin_repository_general_instructions: "Pred nakonfigurovaním parametrov, systémových vlastností, priečinkov a ďalších nastavení sa musíte pripojiť k archívu.",
		admin_repository_system_instructions: "Zadajte systémové vlastnosti, ktoré sa zobrazia pre dokumenty a priečinky v tomto archíve.",

		admin_desktop_general_create_instructions: "Pracovná plocha určuje, čo užívateľ bude môcť vidieť a urobiť, keď sa prihlási do webového klienta. Keď vytvoríte pracovnú plochu, pošlite adresu URL pracovnej plochy užívateľom, aby sa mohli k nej pripojiť.",
		admin_desktop_admin_instructions: "Administračná pracovná plocha je dodávaná s webovým klientom na povolenie administračným užívateľom nastaviť webového klienta. Táto pracovná plocha má prístup ku všetkým archívom, ktoré sú nakonfigurované pre webového klienta.",
		admin_desktop_repositories_instructions: "Vyberte archívy, ku ktorým budú mať užívatelia prístup z tejto pracovnej plochy. Najprv musíte nakonfigurovať archívy a až potom ich môžete pridať na pracovnú plochu.<br><br><b>Tip:</b> Pri konfigurácii rozloženia pracovnej plochy môžete obmedziť ktoré archívy budú k dispozícii pre každý komponent.",
		admin_desktop_menus_instructions: "Určite, ku ktorým ponukám majú mať užívatelia prístup z tejto pracovnej plochy. Ponuky určujú, ktoré akcie sú k dispozícii, v závislosti od toho, čo je vybraté v rozhraní.<br><br><b>Tip:</b> Môžete upraviť obsah ponúk v časti <b>Ponuky</b> v administračnom nástroji alebo môžete vytvoriť nové typy ponúk vytvorením modulov plug-in.",

		admin_desktop_no_repositories: "Nie sú nakonfigurované žiadne archívy.",

		admin_desktop_id_hover: "Identifikátor pracovnej plochy je súčasťou adresy URL webového klienta a určuje pracovnú plochu, ktorá sa otvorí, keď sa užívateľ prihlási do webového klienta. Identifikátor musí byť jedinečný a po uložení pracovnej plochy ho nie je možné zmeniť.<br><br>Identifikátor môže obsahovať len alfanumerické znaky a rozlišuje sa v ňom veľkosť písmen.",
		admin_desktop_id_disabled_hover: "Identifikátor (ID) pracovnej plochy nie je možné zmeniť. Ak chcete použiť iné ID, musíte vytvoriť novú pracovnú plochu.",
		admin_desktop_name_hover: "Názov pracovnej plochy nemôže obsahovať nasledujúce znaky: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Vaša konfigurácia môže obsahovať len jednu predvolenú pracovnú plochu.",

		admin_repository_id_disabled_hover: "Identifikátor (ID) archívu nie je možné zmeniť. Ak chcete použiť iné ID, musíte vytvoriť nové pripojenie k archívu.",
		admin_printService_enable: "Tlačiť s použitím tlačovej služby IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Ak povolíte tlačovú službu IBM Daeja ViewONE, dokumenty sa skonvertujú do formátu PDF a tlač môžete vykonať z ľubovoľného webového prehliadača.<br><br>Ak sa rozhodnete zakázať tlačovú službu IBM Daeja ViewONE, dokumenty budete môcť tlačiť iba z webových prehliadačov podporujúcich aplety Java.  Niektoré webové prehliadače nepodporujú aplety Java a preto nepodporujú ani tlač prostredníctvom apletov.<br><br>Zoznam podporovaných prehliadačov nájdete v dokumentácii.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Užívateľský domovský adresár",
		admin_file_tracking_doc_directory_my_documents: "Adresár užívateľských dokumentov",
		admin_file_tracking_doc_directory_qp: "Kvalifikovaná cesta",
		admin_file_tracking_section_tile: "Konfigurácia sledovania súborov",
		admin_file_tracking_home_path: "Cesta k domovskému priečinku",
		admin_file_tracking_my_documents: "Moje dokumenty",
		admin_file_tracking_exact_path: "Úplná cesta:",
		admin_file_tracking_qp: "Kvalifikovaná cesta",
		admin_file_tracking_ev: "Premenná prostredia",
		admin_file_tracking_ev_us: "Voliteľná premenná prostredia ",
		admin_file_tracking_del_local_copy: "Odstrániť lokálnu kópiu:",
		admin_file_tracking_yes: "Áno",
		admin_file_tracking_no: "Nie",
		admin_file_tracking_del_local_copy_rt_state_editable: "Povoliť užívateľom nahradiť toto nastavenie",
		admin_file_tracking_del_local_copy_rt_state1: "Áno",
		admin_file_tracking_del_local_copy_rt_state2: "Nie",
		admin_file_Tracking_label: "Sledovanie súborov:",
		admin_file_Tracking_disable: "Zakázať",
		admin_file_Tracking_enable: "Povoliť",
		admin_file_tracking_label_hover_help: "Sledovanie súborov používa aplet pre odhlásenie a sťahovanie dokumentov do špecifického adresára na užívateľských počítačoch. Aplet umožňuje aj to, aby IBM Content Navigator našiel dokumenty  na užívateľských počítačoch, keď užívatelia dokumenty prihlasujú.",
		admin_file_tracking_doc_directory: "Umiestnenie úložného priestoru:",
		admin_file_tracking_open_file: "Otvoriť súbor automaticky",
		admin_file_Tracking_append_qualified_path: "Pripojiť adresár",
		admin_file_Tracking_append_qualified_path_hover_help: "Ak chcete, aby sa dokumenty ukladali do špecifického podadresára, môžete adresár pripojiť na koniec premennej prostredia. <br/><br/>Napríklad môžete zadať, že dokumenty  sa budú sťahovať do adresára <i>EnterpriseDocuments</i> v rámci užívateľovho domovského adresára.",
		admin_file_Tracking_append_ev: "Pripojiť premennú prostredia",
		admin_file_Tracking_append_ev_hover_help: "Premennú prostredia môžete pripojiť, ak chcete, aby sa dokumenty ukladali do dynamicky určovaného adresára, ako je napríklad užívateľský adresár.<br/><br/>Napríklad môžete zadať, že dokumenty sa budú ukladať do podadresára <i>meno_užívateľa</i> v zdieľanom sieťovom adresári. ",
		admin_file_tracking_doc_directory_hover_help: "Určte umiestnenie, do ktorého by sa mali ukladať odhlásené a stiahnuté dokumenty.<br/><br/> <b>Tip</b>: Ak chcete dokumenty ukladať do užívateľovho domovského adresára alebo do predvoleného adresára dokumentov, vyberte voľbu <b>Premenná prostredia</b>, ktorá obsahuje preddefinované premenné, ktoré ukazujú na takéto umiestnenia.",
		admin_file_tracking_qualified_path_hover_help: "Použite vhodnú štruktúru adresára pre váš operačný systém Windows alebo Mac na špecifikovanie adresára alebo sieťového adresára, v ktorom chcete ukladať dokumenty. <ul><li>Pri operačnom systéme Windows, používajte pri zadávaní cesty písmeno jednotky, ako napríklad C:\\Enterprise Documents.</li><li>Pri zdieľanom sieťovom adresári zadajte cestu vo formáte \\\\názovservera\\adresár</li></ul><br/><b>Dôležité:</b> Pre použitie tejto voľby musí byť možné vytvoriť štruktúru adresára, ktorú špecifikujete, na všetkých klientskych pracovných staniciach vo vašom prostredí.",
		admin_file_tracking_environment_variable_path_hover_help: "Použite vhodné premenné prostredia pre váš operačný systém Windows alebo Mac na špecifikáciu adresára alebo sieťového adresára, v ktorom chcete ukladať dokumenty. <br/><br/>Voľba <b>Domovský adresár užívateľa</b> uloží dokumenty do nasledujúceho adresára:<br/><ul><li>Windows: C:\\Users\\Meno_užívateľa</li><li>Mac: /Users/Meno_užívateľa</li></ul><br/>Voľba <b>Adresár užívateľských dokumentov</b> uloží dokumenty do nasledujúceho adresára:<br/><ul><li>Windows: C:\\Users\\Meno_užívateľa\\Documents</li><li>Mac: /Users/Meno_užívateľa/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Určte, či bude lokálna kópia dokumentu vymazaná, keď užívatelia pridajú alebo prihlásia dokumenty v archíve.<br/><br/>Odstránenie lokálnej kópie vám umožní:<br/><ul><li>Vynútenie súladu s  nariadeniami politík IT</li><li>Zaistiť, že užívatelia budú pracovať s najnovšími verziami dokumentov</li></ul><br/><b>Obmedzenie:</b> Toto nastavenie sa neuplatňuje, keď užívatelia pridávajú dokumenty ich presunutím myšou.<br/><br/>Pre IBM Content Navigator for Microsoft Office musíte vybrať <b>Odstrániť lokálne súbory, keď užívatelia pridajú alebo prihlásia dokument alebo zrušia odhlásenie</b> v časti <b>Konfigurácia Office</b> na pracovnej ploche.",
		admin_file_tracking_open_file_hover_help: "Toto nastavenie vyradí všetky preferencie zaobchádzania s dokumentmi, ktoré sú nakonfigurované vo webových prehliadačoch užívateľov. </br></br><b>Obmedzenie:</b> Toto nastavenie nepoužíva IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Prepísať lokálnu kópiu:",
		admin_file_tracking_over_write_file_hover_help: "Zadajte, či sa lokálna kópia dokumentu prepíše, keď užívatelia  odhlásia dokument z archívu. <br/><br/>Prepísanie lokálnej kópie vám umožní:<br/><ul><li>Zaistiť, že užívatelia budú pracovať s najnovšími verziami dokumentov</li><li>Zamedziť, aby sa užívateľom zobrazila výzva, keď bude existovať lokálna kópia</li></ul> </br></br><b>Obmedzenie:</b> Toto nastavenie nepoužíva IBM Content Navigator for Microsoft Office, ak vyberiete <b>Povoliť užívateľom nahradiť toto nastavenie</b>.",
		admin_file_tracking_over_write_file_state_editable: "Povoliť užívateľom nahradiť toto nastavenie",
		admin_file_tracking_inline_help: "Sledovanie súborov racionalizuje proces odhlasovania dokumentov z archívu a ich prihlasovania do archívu. Umožňuje vám tiež riadiť ako budú dokumenty ukladané na užívateľských počítačoch. <br/><br/>Sledovanie súborov okrem toho umožňuje, aby boli dokumenty sledované vo viacerých komponentoch IBM Content Navigator, ako je napríklad webový klient a IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Pred pripojením k archívu musíte vybrať nastavenie Štandardná autentifikácia alebo Autentifikácia na serveri.",
		admin_box_use_oauth: "Typ autentifikácie:",
		admin_box_use_oauth_hover: "Ak poskytujete prístup k dokumentom v službe Box z prostredia aplikácie IBM Content Navigator, vyberte možnosť Štandardná autentifikácia alebo Autentifikácia na serveri v produkčnom prostredí. Zadajte hodnoty pre polia client_id a OAuth2 client_secret pre toto nasadenie aplikácie IBM Content Navigator. Tieto hodnoty získate v službe Box po vytvorení aplikácie Box pre váš server IBM Content Navigator.<br/><br/>Vo vývojovom prostredí vyberte možnosť Autentifikácia vývojára. Vývojári sa môžu prihlásiť do služby Box pomocou svojho konta vývojára a vygenerovať vývojársky bezpečnostný symbol, ktorý je platný 60 minút. Vývojárske bezpečnostné symboly umožňujú vývojárom prihlásiť sa do služby Box, pričom ako heslo pre ľubovoľný identifikátor užívateľa sa použijú tieto vývojárske bezpečnostné symboly.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdoména podnikového konta v službe Box:",
		admin_box_share: "Identifikátor pripojenia správcu úloh:",
		admin_box_share_hover: "V prípade úloh kopírovania v službe Box alebo zdieľania v službe Box používa správca úloh identifikátor správcu a heslo pri vykonávaní úloh upravujúcich archív na pozadí.<br/><br/>Kliknite na položku Nastaviť a prihláste sa do služby Box pod platným kontom správcu služby Box.<br/><br/>Ak konfigurujete pracovnú plochu, v rámci ktorej ako archív zdieľaných súborov vyberiete tento archív v službe Box, musíte určiť takého správcu služby Box, ktorý má neobmedzený úložný priestor v službe Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Otvoriť súbor automaticky",
		file_tracking_runtime_overwrite_hover_help: "Ak nevyberiete túto voľbu a máte dokument na vašom lokálnom súborovom systéme s rovnakým názvom, tento dokument bude odhlásený, ale nebude stiahnutý, pokiaľ nevykonáte niektorú z nasledujúcich akcií:<br/><ul><li> Stiahnete dokument do podadresára predvoleného adresára. Ak vyberiete nejaký podadresár, webová aplikácia môže zistiť umiestnenie dokumentu.</li><li>Premenujete dokument, ktorý práve sťahujete. Premenovanie dokumentu zamedzí konfliktu v názve súborov.</li></ul>",
		open_file: "Otvoriť súbor automaticky",
		over_write_file: "Prepísať lokálnu kópiu",
		checkout_and_download_file: "Odhlásiť a stiahnuť dokumenty",
		download_to_local_directory: "Stiahnuť do :",
		checkout_and_download_button_title: "Odhlásiť a stiahnuť",
		checkout_without_java_confirmation_dialog: "Súbor nie je možné stiahnuť a sledovať pomocou funkcie pre sledovanie súborov.",
		browse_for_directory: "Prehľadávanie",
		selected_documents: "Vybraté dokumenty",

		checkout_without_java_confirmation_text: "Tento problém môže nastať z nasledujúcich dôvodov:<br/><ul><li>Vo svojej  pracovnej stanici nemáte nainštalované prostredie JRE (Java Runtime Environment).</li><li>Modul plug-in Java nie je povolený vo vašom webovom prehliadači.</li><li>Váš webový prehliadač nepodporuje jazyk Java.</li></ul><br/><br/>Ak chcete problém vyriešiť:<br/><br/><ul><li>Ak chcete v sťahovaní súboru pokračovať bez povoleného sledovania súboru, kliknite na tlačidlo OK.</li><li>Ak chcete súbor stiahnuť s povoleným sledovaním súboru, zrušte sťahovanie a presvedčte sa, či máte JRE nainštalované vo svojej pracovnej stanici a či má váš webový prehliadač povolený modul plug-in Java.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokument bol odhlásený a stiahnutý, dokument však nie je možné otvoriť.",
		runtime_file_tracking_open_error_explanation: "Operačný systém, ktorý je nainštalovaný na vašej pracovnej stanici, nepodporuje súbory tohto typu.",
		runtime_file_tracking_open_error_userResponse: "Ak chcete problém vyriešiť:<br/><br/><ul><li>Ak potrebujete s dokumentom pracovať, otvorte webového klienta na inej pracovnej stanici s iným operačným  systémom.</li><li>Ak si potrebujete dokument len prezrieť, vo webovom klientovi kliknite pravým tlačidlom myši na dokument a kliknite na voľbu Otvoriť.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokument bol odhlásený, nebol však stiahnutý.",
		runtime_file_tracking_save_file_error_explanation: "Vo vašom lokálnom súborovom systéme sa nachádza dokument s rovnakým názvom, ten však nebol prepísaný. ",
		runtime_file_tracking_save_file_error_userResponse: "Ak si chcete súbor stiahnuť z archívu, pri sťahovaní dokumentu z archívu musíte prepísať lokálnu kópiu dokumentu.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokument bol odhlásený, nie je ho však možné stiahnuť alebo otvoriť.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Vo vašom lokálnom súborovom systéme sa nachádza dokument s rovnakým názvom. Súbor však nebol prepísaný, čo však bráni stiahnutiu a otvoreniu dokumentu z archívu.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Ak si chcete súbor stiahnuť z archívu, pri sťahovaní dokumentu z archívu musíte prepísať lokálnu kópiu dokumentu.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokument nemožno stiahnuť.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Premenná prostredia ${0}, ktorá sa vyžaduje pre sledovanie súborov, nie je definovaná v tomto klientskom počítači.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Ak chcete problém vyriešiť:<br/><br/><ul><li>Pridajte premennú prostredia ${0} k premenným prostredia operačného systému.</li><li>Odhláste sa z webového klienta a zatvorte webový prehliadač. Potom sa znovu prihláste.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Dokument nie je možné stiahnuť a sledovať pomocou apletu pre sledovanie súborov.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Adresár ${0}, ktorý sa vyžaduje pre sledovanie súborov, nie je definovaný a nie je ho možné vytvoriť.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Na vyriešenie tohto problému vykonajte príslušnú akciu:<br/><br/><ul><li>Kliknite na tlačidlo Prehľadávať a vyberte iný adresár na klientskom počítači. Ak vyberiete túto voľbu, súbor nebude sledovaný.</li><li>Obráťte sa na správcu systému a požiadajte ho, aby pre sledovanie súborov zadal iný adresár. Môže to byť potrebné napríklad vtedy, ak je zadaný adresár určený pre operačný systém Windows, vy však používate Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Ak sa k tejto pracovnej ploche pristupuje zo zariadení s inými operačnými systémami, môžete znížiť pravdepodobnosť problémov vykonaním niektorej z nasledujúcich akcií:<br/><br/><ul><li>Použite premenné prostredia na zadanie umiestnenia úložného priestoru na klientskych počítačoch.</li><li>Vytvorte  samostatné pracovné plochy pre užívateľov každého typu zariadenia. Napríklad vytvorte pracovnú plochu pre užívateľov s operačným systémom Windows a pracovnú plochu pre užívateľov Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Vašu požiadavku nie je možné spracovať.",
		runtime_file_tracking_generic_error_explanation: "Chyba sa vyskytla v aplete pre sledovanie súborov.",
		runtime_file_tracking_generic_error_userResponse: "O pomoc požiadajte správcu systému.",
		runtime_file_tracking_generic_error_adminResponse: "Otvorte konzolu Java a pokúste sa svoju požiadavku opätovne odovzdať. Podrobnosti chyby sa zobrazia v konzole Java.<br/><br/>K Java konzole môžete pristupovať z ovládacieho panelu (Windows) alebo zo systémových preferencií (Macintosh) pre váš operačný systém.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Vašu požiadavku nie je možné spracovať",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Nasledujúce súbory boli pridané do archívu, ale neboli vymazané z vášho lokálneho súborového systému: ${0}. K tomuto obvykle dochádza, keď sú súbory otvorené alebo keď ich používa iná aplikácia. V prípade potreby môžete tieto súbory vymazať manuálne.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokument nemožno stiahnuť.",
		runtime_file_tracking_ioexception_error_explanation: "Dokument nemožno stiahnuť.",
		runtime_file_tracking_ioexception_userResponse: "Možno nemáte príslušné oprávnenia na zápis do nasledujúceho adresára: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Presvedčte sa či máte oprávnenia na zápis do zadaného adresára. Ak nemáte oprávnenia na zápis do zadaného adresára, kontaktujte správcu systému.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Vašu požiadavku nie je možné spracovať.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Táto chyba sa môže vyskytnúť z nasledujúcich dôvodov:<br/><br/><ul><li>Používate prehliadač Safari v systéme Mac OS a softvér Java je spustený v zabezpečenom režime.</li><li>Nemáte oprávnenia na čítanie a zápis pre adresár, ktorý ste určili v konfigurácii sledovania súborov pre pracovnú plochu.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Môžete pokračovať v používaní aplikácie IBM Content Navigator bez sledovania súborov alebo môžete vykonaním nasledujúcich krokov vyriešiť problém:<br/><br/><ol><li>Povoľte nezabezpečený režim softvéru Java v prehliadači Safari.</li><li>Keď sa zobrazí otázka, či chcete dôverovať webovej lokalite IBM Content Navigator, kliknite na možnosť <b>Dôverovať</b>, čím povolíte načítanie stránky, a potom povoľte nezabezpečený režim softvéru Java v prehliadači Safari.</li></ol><br/><br/>Ak je prehliadač Safari nakonfigurovaný správne, vyriešte problém vykonaním nasledujúcich krokov:<br/><br/><ol><li>Uistite sa, že oprávnenia na čítanie a zápis pre adresár, ktorý ste určili v konfigurácii sledovania súborov pre pracovnú plochu.</li><li>Ak nemáte oprávnenia na čítanie a zápis pre tento adresár, upravte oprávnenia.</li><li>Ak nemôžete upraviť svoje oprávnenia pre adresár, požiadajte správcu, aby zmenil adresár, ktorý je nakonfigurovaný pre sledovanie súborov, alebo aby vám udelil prístup k pracovnej ploche, pre ktorú je nekonfigurovaný iný adresár sledovania súborov.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Vašu požiadavku nie je možné spracovať.",
		runtime_file_tracking_java__notfound_error_explanation: "Tento problém sa zvyčajne vyskytuje v nasledujúcich situáciách:<br/><br/><ul><li>Softvér Java Runtime Environment (JRE) nie je nainštalovaný alebo povolený na vašej pracovnej stanici.</li><li>Verzia softvéru JRE nainštalovaná na vašej pracovnej stanici nie je kompatibilná s verziou softvéru IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Môžete pokračovať v používaní aplikácie IBM Content Navigator bez sledovania súborov, alebo môžete vykonaním nasledujúcich krokov vyriešiť problém so softvérom JRE:<br/><br/><ol><li>Uistite sa, že je na vašej pracovnej stanici nainštalovaný softvér JRE.</li><li>Uistite sa, že je verzia softvéru JRE na vašej pracovnej stanici kompatibilná so softvérom IBM Content Navigator. Zoznam podporovaných verzií nájdete v dokumente <i>Hardvérové a  softvérové nevyhnutné podmienky pre IBM Content Navigator</i> v lokalite IBM Software Support.</li><li>Uistite sa, že je na vašej pracovnej stanici povolený softvér JRE.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Vašu požiadavku nie je možné spracovať.",
		runtime_file_tracking_security_error_explanation: "Nemáte oprávnenia na čítanie a zápis pre adresár, ktorý ste určili v konfigurácii sledovania súborov pre pracovnú plochu.",
		runtime_file_tracking_security_error_userResponse: "Môžete pokračovať v používaní aplikácie IBM Content Navigator bez sledovania súborov alebo môžete v spolupráci so správcom vykonať nasledujúce kroky:<ol><li>Uistite sa, že oprávnenia na čítanie a zápis pre adresár, ktorý ste určili v konfigurácii sledovania súborov pre pracovnú plochu. </li><li>Ak nemáte oprávnenia na čítanie a zápis pre tento adresár, upravte oprávnenia.</li><li>Ak nemôžete upraviť svoje oprávnenia pre adresár, požiadajte správcu, aby zmenil adresár, ktorý je nakonfigurovaný pre sledovanie súborov, alebo aby vám udelil prístup k pracovnej ploche, pre ktorú je nekonfigurovaný iný adresár sledovania súborov.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Boli stiahnuté nasledujúce dokumenty: ${0}.",

		admin_file_tracking_inline_help: "Sledovanie súborov zjednoduší proces pridávania dokumentov do archívu a proces ich prihlasovania a odhlasovania. Tiež vám povolí riadiť ako budú dokumenty ukladané na počítačoch užívateľov.<br/><br/>Sledovanie súborov okrem toho umožňuje, aby boli dokumenty sledované vo viacerých komponentoch IBM Content Navigator, ako je napríklad webový klient a IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Identifikátor ponuky nemôže začínať s \"Default\".  \"Default\" je rezervovaná predpona pre identifikátory ponúk.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Identifikátor môže obsahovať len alfanumerické znaky a rozlišuje sa v ňom veľkosť písmen.",
		admin_repository_id_hover: "Identifikátor je súčasťou adries URL webového klienta, obľúbených položiek a e-mailových prepojení, pričom určuje archív, do ktorého sa treba prihlásiť. Identifikátor musí byť jedinečný a po uložení archívu  ho nie je možné zmeniť.<br><br>Identifikátor môže obsahovať len alfanumerické znaky a rozlišuje sa v ňom veľkosť písmen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Názov nesmie obsahovať nasledujúce znaky: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Identifikátor pracovnej plochy nemôže obsahovať medzery ani žiadne z nasledujúcich znakov: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Názov pracovnej plochy nemôže obsahovať nasledujúce znaky: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Zobrazovaný názov nemôže obsahovať nasledujúce znaky: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Zadajte názov archívu, ktorý sa bude zobrazovať užívateľom vo webovom klientovi.<br><br>Názov nemôže obsahovať nasledujúce znaky: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Zadajte názov hostiteľa alebo IP adresu servera Content Manager OnDemand, ku ktorému sa chcete pripojiť, napríklad server.id.com.",
		admin_server_p8_name_hover: "Zadajte adresu URL servera Content Engine alebo Content Platform Engine. V adrese URL sa rozlišuje veľkosť písmen a má  nasledujúci formát:<br><br><ul><li>Vo WebSphere Application Server, iiop://názov_hostiteľa:číslo_portu/FileNet/Engine. V základných nasadeniach je predvolené číslo portu 2809.</li><li>Na serveri WebLogic, t3://názov_hostiteľa:číslo_portu/FileNet/Engine. Predvolené číslo portu je 7001.</li></ul><br><br>V prípade konfigurácií serverov Content Engine a Content Platform Engine s vysokou dostupnosťou použite adresu URL vysoko dostupného prenosu EJB bez predpony cemp:. ",
		admin_server_p8_protocol_hover: "Uveďte protokol, prostredníctvom ktorého sa má komunikovať so systémom Content Engine.",
		admin_server_cm_name_hover: "Zadajte názov lokálneho katalógu databázy Content Manager alebo názov pripojenia ku knižničnému serveru. Tento názov je hodnotou, ktorá bola určená pre premennú ICMSERVER.",
		admin_repository_cmis_hover: "Zadajte ID archívu, ku ktorému sa chcete pripojiť.  ID každého archívu vo vašom prostredí CMIS je uvedené v dokumente služby naviazania AtomPub.  <br/><br/><b>Tip:</b>Môžete zadať aj hviezdičku  (*), ak sa chcete pripojiť k prvému alebo jedinému archívu, ktorý je definovaný v dokumente služby naviazania Atompub.",
		admin_url_cmis_hover: "Rôzni poskytovatelia služieb používajú rôzne formáty adries URL. Adresu URL nájdete v dokumentácii k systému CMIS alebo vám ju poskytne správca servera CMIS.",
		admin_repcfg_cmis_status_columns_hover: "Zadajte stavy položiek, pre ktoré sa majú zobrazovať ikony. Stavové ikony sa zobrazujú vedľa dokumentov v zozname obsahu.",
		admin_port_hover: "Zadajte číslo portu TCP/IP, na ktorom bude server Content Manager OnDemand načúvať. Predvolená hodnota je 1445.",
		admin_unified_searches_hover: "Určte, či užívatelia môžu ukladať vyhľadávania vo viacerých archívoch do toto archívu.<br/><br/>Užívatelia budú môcť vytvárať vyhľadávania vo viacerých archívoch, ktoré sa budú spúšťať v tomto archíve, aj vtedy, ak nepovolíte túto voľbu. Vo vytváraní vyhľadávaní vo viacerých archívoch môžete užívateľov zabrániť na úrovni pracovnej plochy.<br/><br/>Ak povolíte vyhľadávania vo viacerých archívoch, aplikácia IBM Content Navigator vytvorí údajový model vyhľadávania vo viacerých archívoch v archíve.<br/><br/>V prípade systému IBM FileNet Content Manager sa pred povolením tejto voľby musíte k archívu pripojiť ako správca systému Content Engine.",
		admin_unified_searches_cm_hover: "Určte, či užívatelia môžu ukladať vyhľadávania vo viacerých archívoch do toto archívu.<br/><br/>Užívatelia budú môcť vytvárať vyhľadávania vo viacerých archívoch, ktoré sa budú spúšťať v tomto archíve, aj vtedy, ak nepovolíte túto voľbu. Vo vytváraní vyhľadávaní vo viacerých archívoch môžete užívateľov zabrániť na úrovni pracovnej plochy.<br/><br/>Ak povolíte vyhľadávania vo viacerých archívoch, aplikácia IBM Content Navigator vytvorí údajový model vyhľadávania vo viacerých archívoch v archíve.",
		admin_max_results_hover: "Uveďte, či sa má obmedziť počet výsledkov vrátených vyhľadávaním. Ak počet výsledkov vyhľadávania neobmedzíte, môžete zaznamenať problémy s výkonom, v prípade, že vyhľadávanie vráti veľký počet výsledkov.",
		admin_timeout_hover: "Uveďte maximálnu dobu vykonávania vyhľadávania v archíve (v sekundách). Ak sa vyhľadávanie nedokončí za tento čas, webový klient zruší požiadavku. Odporúčaný maximálny vyhradený čas je 60 sekúnd.",
		admin_object_store_hover: "Na serveri Content Engine zadajte sklad objektov, ku ktorému sa chcete pripojiť. Symbolický názov získate z administračnej konzoly Content Platform Engine.",
		admin_object_store_display_name_hover: "Zobrazovaný názov skladu objektov sa vyžaduje, ak chcete používať pracovné toky IBM FileNet P8. Zobrazovaný názov skladu objektov získate z administračnej konzoly Content Platform Engine.",
		admin_all_searches_hover: "Uveďte, či má byť obmedzený počet hľadaní, ktoré sa zobrazia v zozname <b>Všetky vyhľadávania</b>, keď užívatelia vyhľadávajú v archíve. Ak nechcete obmedziť počet hľadaní, môžu sa vyskytnúť problémy s výkonom, ak archív zahŕňa veľký počet uložených hľadaní.",

		admin_text_desktop: "Pracovná plocha",
		admin_text_repository: "Archív",
		admin_text_plugin: "Modul plug-in",
		admin_text_theme: "Motív",
		admin_text_menu: "Ponuka",
		admin_text_reason_code: "Príčina revízie",
		admin_text_redactions: "Revízie",
		admin_text_viewer_mapping: "Mapovanie prezerača",
		admin_text_mobile_feature: "Súčasť Mobile",
		admin_test_interface_text: "Text v rozhraní",
		admin_text_interface_text_locale: "Preložený text v rozhraní",
		admin_text_icon_status: "Stavová ikona",
		admin_text_icon: "Ikona",
		admin_text_file_type: "Typ súboru",
		admin_text_viewer: "Prezeranie",
		admin_text_desktop_access: "Prístup k pracovnej ploche",
		admin_text_mapped_properties_for_office: "Mapované vlastnosti pre aplikácie Microsoft Office",
		admin_text_desktop_features: "Komponenty pracovnej plochy",
		admin_text_unknown: "Neznáme",
		admin_folder_instruction: "Zadajte vlastnosti, ktoré sa zobrazia pre dokumenty a priečinky v zozname obsahu, keď ho budú užívatelia prehľadávať. Môžete zadať aj poradie, v ktorom sa budú vlastnosti zobrazovať.",
		admin_search_instruction: "Určte voľby, ktoré budú štandardne vybraté, keď užívatelia vytvoria vyhľadávanie.",
		admin_repository_office_conf_class_instruction: "Ak máte na klientskych počítačoch vo svojom prostredí nainštalovanú aplikáciu IBM Content Navigator for Microsoft Office, môžete určiť, ako sa budú dokumenty spracovávať po ich pridaní alebo prihlásení do tohto archívu.",
		admin_repository_office_conf_instruction: "Namapujte vlastnosti dokumentov Microsoft Office na vlastnosti definované v tomto archíve.<br/><br/>Ak je povolené mapovanie vlastností pre pracovnú plochu, ku ktorej je priradený tento archív, po pridaní dokumentu z aplikácie IBM Content Navigator for Microsoft Office sa vlastnosti nastavené pre dokumenty Microsoft Office použijú aj pre vlastnosti v archíve.",
		admin_repository_office_conf_prop_mapping_title: "Mapovanie vlastností",
		admin_repository_office_conf_prop_mapping_title1: "Integrácia s balíkom MS Office",
		admin_office_conf_instruction: "Ak je na klientskych počítačoch nainštalovaná aplikácia IBM Content Navigator for Microsoft Office, môžete určiť spôsob integrácie aplikácie IBM Content Navigator s aplikáciami Microsoft Office.<br /><br /><b>Upozornenie:</b> Ak vyberiete možnosť <b>Mapovať vlastnosti balíka Office...</b>, musíte nakonfigurovať aj mapovanie vlastností pre jednotlivé archívy priradené k tejto pracovnej ploche. Mapovanie vlastností môžete nakonfigurovať pre každý archív vo vašom prostredí na karte <b>Vlastnosti dokumentov Office</b>.",
		admin_desktop_workflows_instruction: "<b>Len systémy IBM FileNet P8:</b> Zadajte aplikačné priestory, ktoré sa na tejto pracovnej ploche zobrazia. Poradie vybratých aplikačných priestorov určuje poradie, v akom sa majú tieto aplikačné priestory zobrazovať vo webovom klientovi.<br><br><b>Tip:</b> Zobrazovaný názov aplikačných priestorov môžete zmeniť nastavením nových názvov v časti <b>Označenia</b> administračného nástroja.",
		admin_search_filtered_properties_instruction: "Určite vlastnosti, ktoré môžu užívatelia prehľadávať. Vlastnosti, ktoré užívatelia nebudú môcť prehľadávať, môžete skryť.",
		admin_search_filtered_operators_instruction: "Určite operátory, ktoré majú byť k dispozícii, keď budú užívatelia prehľadávať konkrétny typ údajov, napríklad dátum alebo celé číslo. Operátory, ktoré nebudú môcť užívatelia vybrať, môžete skryť.",
		admin_search_default_search_results_instruction: "Zadajte vlastnosti, ktoré sú zobrazené pre dokumenty a priečinky vo výsledkoch vyhľadávania. Skryť môžete ľubovoľné vlastnosti, ktoré nechcete, aby sa objavili vo výsledkoch vyhľadávania.",
		admin_search_default_search_results_p8_cmis_instruction: "Zadajte vlastnosti, ktoré sú zobrazené vo výsledkoch vyhľadávania. Skryť môžete ľubovoľné vlastnosti, ktoré nechcete, aby sa objavili vo výsledkoch.",

		admin_datetimeOp: "Dátum a čas",
		admin_floatOp: "Číslo s pohyblivou desatinnou čiarkou",
		admin_integerOp: "Celé číslo",
		admin_stringOp: "Reťazec",
		admin_binaryOp: "Binárny",
		admin_objectOp: "Objekt",
		admin_idOp: "Identifikátor",
		admin_userOp: "Užívateľ",
		admin_booleanOp: "Boolovská hodnota",

		admin_string: "Reťazec",
		admin_long: "Long",
		admin_date: "Dátum",
		admin_double: "Double",
		admin_object: "Objekt",
		admin_guid: "GUID",
		admin_boolean: "Boolovská hodnota",

		admin_repcfg_heading: "Predvolené správanie tohto archívu môžete zmeniť nastavením konfiguračných parametrov.",
		admin_repcfg_heading_od: "Predvolené správanie tohto archívu môžete zmeniť nastavením konfiguračných parametrov.<br /><br /><b>Upozornenie:</b> Ak chcete používať klienta s archívmi Content Manager OnDemand, musíte nastaviť aj hodnoty pre parametre na karte <b>Content Manager OnDemand</b> v časti <b>Nastavenia</b>, ktoré sa vzťahujú na všetky archívy Content Manager OnDemand, ku ktorým sa pripájate.",
		admin_repcfg_teamspaces: "Správa tímového priestoru:",
		admin_repcfg_enable: "Povoliť",
		admin_repcfg_disable: "Zakázať",

		admin_repcfg_deliver_redacted_pdf_files_as: "Súbory PDF po revízii budú doručené ako:",
		admin_repcfg_burn_pdf_to_pdf: "Súbory PDF",
		admin_repcfg_burn_pdf_to_tiff: "Súbory TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Súbor PDF, ktorý bol revidovaný použitím revízií založených na rolách, môže byť klientovi doručený v inom formáte súboru. Keď sa zmení formát súboru, zmení sa aj prípona súboru a typ MIME.<br><br>Napríklad, ak sa súbor PDF doručí ako súbor TIFF, prípona súboru sa zmení na .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Povoliť užívateľom zlučovanie a rozdeľovanie stránok s revíziami založenými na role",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Vyberte túto možnosť, ak chcete užívateľom povoliť zlučovanie a rozdeľovanie stránok s revíziami založenými na role. Užívatelia, ktorí nie sú editormi revízií, nebudú schopní upraviť revízie založené na rolách a nebudú mať prístup k citlivým údajom súvisiacim s revíziami založenými na rolách, ani keď je povolená táto možnosť.",
		admin_repcfg_modify_teamspace_roles: "Povoliť vlastníkom upravovanie rolí existujúcich tímových priestorov",
		admin_repcfg_tm_delete_teamspace: "Umožní vlastníkom vymazať tímový priestor vrátane obsahu",
		admin_repcfg_tm_delete_teamspace_id_missing: "Musíte zadať meno užívateľa správcu archívu.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Musíte zadať heslo správcu archívu.",
		admin_repcfg_teamspace_display_Recent: "Zobraziť len nedávno upravené tímové priestory ",
		admin_repcfg_teamspace_display_Recent_value: "Počet dní od poslednej úpravy:",

		admin_repcfg_folder_selector: "Koreňový priečinok:",
		admin_repcfg_enable_folder_selector: "Povoliť",
		admin_repcfg_disable_folder_selector: "Zakázať",
		admin_repcfg_SSO: "Jediné prihlásenie:",
		admin_repcfg_teamspace_template_permission_text: "Priradenie tvorcov šablón tímového priestoru:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť šablóny tímového priestoru. Týmto užívateľom a skupinám sú pridelené príslušné nastavenia bezpečnosti na požadované triedy a priečinky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Bližšie informácie</a><br/><br/><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy tímového priestoru.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť šablóny tímového priestoru. Užívatelia budú pridaní do príslušných zoznamov ACL a dostanú potrebné privilégiá. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Bližšie informácie</a><br/><br/><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy tímového priestoru.",
		admin_repcfg_teamspace_permission_text: "Priradenie rolí pre tímové priestory:",
		admin_repcfg_teamspace_permission_hover_p8: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť a používať tímové priestory. Týmto užívateľom sú pridelené príslušné nastavenia bezpečnosti na požadované triedy a priečinky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Bližšie informácie</a><br/><br/><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy tímového priestoru.",
		admin_repcfg_teamspace_permission_hover_cm: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť a používať tímové priestory. Užívatelia budú pridaní do príslušných zoznamov ACL a dostanú potrebné privilégiá. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Bližšie informácie</a><br/><br/><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy tímového priestoru.",
		admin_repcfg_entry_template_permission_text: "Priradenie rolí pre šablóny položiek:",
		admin_repcfg_entry_template_permission_hover_p8: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť a používať šablóny položiek. Týmto užívateľom sú pridelené príslušné nastavenia bezpečnosti na triedu dokumentov Šablóna položiek. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Bližšie informácie</a><br/><br/><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy šablón položiek.",
		admin_repcfg_entry_template_permission_hover_cm: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť a používať šablóny položiek. Užívatelia budú pridaní do príslušných zoznamov ACL a dostanú potrebné privilégiá. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Bližšie informácie</a><br /><br /><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy šablón položiek.",
		admin_repcfg_office_template_permission_text: "Priradenie rolí pre šablóny:",
		admin_repcfg_office_template_permission_hover_cm: "Určte skupiny alebo užívateľov s oprávnením na vytváranie, úpravu a používanie šablón Microsoft Office Online alebo šablón služby úprav. Užívatelia budú pridaní do príslušných zoznamov ACL a dostanú potrebné privilégiá.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a><br /><br /><b>Odporúčanie:</b> V záujme zjednodušenie správy šablón Microsoft Office Online alebo služby úprav používajte skupiny.",
		admin_repcfg_draft_permission_text: "Priradenie rolí pre koncepty:",
		admin_repcfg_draft_permission_hover_cm: "Určte skupiny a užívateľov s oprávnením na vytváranie konceptov dokumentov Microsoft Office Online alebo služby úprav v rámci tímových úprav. Všetci užívatelia, ktorí vyžadujú schopnosť upravovať dokumenty v tímoch v aplikácii Microsoft Office Online alebo službe úprav, musia mať príslušné oprávnenia na vytváranie konceptov. Užívatelia budú pridaní do príslušných zoznamov ACL a dostanú potrebné privilégiá. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a><br /><br /><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy konceptov.",
		admin_repcfg_search_permission_text: "Priradenie rolí pre vyhľadávanie:",
		admin_repcfg_search_permission_hover_p8: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvoriť alebo používať uložené vyhľadávania a vyhľadávania vo viacerých archívoch. Týmto užívateľom sú pridelené príslušné nastavenia bezpečnosti na požadované triedy. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Bližšie informácie</a><br /><br /><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy vyhľadávania.",
		admin_repcfg_search_permission_hover_cm: "Zadajte skupiny alebo užívateľov, ktorí môžu vytvárať, upravovať alebo používať uložené vyhľadávania a vyhľadávania vo viacerých archívoch. Užívatelia budú pridaní do príslušných zoznamov ACL a dostanú potrebné privilégiá. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Bližšie informácie</a><br /><br /><b>Odporúčanie:</b> Použite skupiny na zjednodušenie správy vyhľadávania.",
		admin_repcfg_search_permission_title: "Roly tvorcov vyhľadávaní",
		admin_repcfg_search_permission_intro_text: "Uistite sa, že užívatelia majú prístup k pracovnej ploche, ktorá podporuje ich rolu. Uistite sa napríklad, že tvorcovia vyhľadávaní majú prístup k pracovnej ploche, ktorá im umožňuje vytvoriť vyhľadávania a vyhľadávania vo viacerých archívoch.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Správcovia šablón tímových priestorov sú užívatelia, ktorí majú oprávnenia <b>Úplná kontrola</b> na archív (sklad objektov). Zoznam správcov šablón tímových priestorov nemôžete zmeniť z administračného nástroja. <p>Správcovia šablón tímových priestorov môžu vymazať alebo modifikovať ľubovoľnú šablónu tímového priestoru. Užívateľ, ktorý vytvorí šablónu tímového priestoru, nemusí zdieľať túto šablónu s správcami šablón tímových priestorov.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Keď určíte užívateľa alebo skupinu za tvorcu šablóny tímového priestoru, tomuto  užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na vytváranie šablón tímových priestorov. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Bližšie informácie</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Užívatelia a skupiny, ku ktorým boli priradené iné oprávnenia ako sú oprávnenia správcov a tvorcov.<p>Týchto užívateľov alebo skupiny môžete pridať do role tvorcov šablón tímových priestorov odstránením týchto užívateľov alebo skupín z roly Iné a ich pridaním ako tvorcov šablón tímových priestorov.<p>Oprávnenia, ktoré sú v súčasnosti priradené k týmto užívateľom a skupinám, môžete skontrolovať pomocou aplikácie IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Správcovia tímových priestorov sú užívatelia, ktorí majú oprávnenia <b>Úplná kontrola</b> na archív (sklad objektov). Zoznam správcov tímových priestorov nemôžete zmeniť z administračného nástroja.<p>Správcovia tímových priestorov môžu odstrániť alebo upraviť ľubovoľný tímový priestor. Užívateľ, ktorý vytvorí tímový priestor, nemusí zdieľať tento tímový priestor s správcami tímových priestorov.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Keď určíte užívateľa alebo skupinu za tvorcu tímového priestoru, tomuto užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na vytváranie tímových priestorov. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Bližšie informácie</a>",
		admin_repcfg_teamspace_user_hover_p8: "Keď určíte užívateľa alebo skupinu za užívateľa tímového priestoru, tomuto užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na používanie tímových priestorov. Užívateľ však musí byť členom tímového priestoru na prístup k tomuto tímovému priestoru. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Bližšie informácie</a><p><b>Tip:</b> Ak chcete, aby boli všetci užívatelia vo vašom prostredí schopní vidieť tímové priestory, môžete pridať k roli užívateľa tímového priestoru pseudokonto #AUTHENTICATED-USERS.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Užívatelia a skupiny, ktorým boli udelené iné oprávnenia ako sú oprávnenia správcov, tvorcov a užívateľov.<p>Týchto užívateľov a skupiny môžete presunúť do vopred definovaných rolí odstránením týchto užívateľov alebo skupín z role Iné a priradením rolí tímových priestorov k nim.<p>Oprávnenia, ktoré sú v súčasnosti priradené k týmto užívateľom a skupinám, môžete skontrolovať pomocou aplikácie IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Správcovia šablón položiek sú užívatelia, ktorí majú oprávnenia <b>Úplná kontrola</b> na archív (sklad objektov). Zoznam správcov šablón položiek nemôžete zmeniť z administračného nástroja. <p>Správcovia šablón položiek môžu vymazať alebo modifikovať ľubovoľnú šablónu položiek. Užívateľ, ktorý vytvorí šablónu položky, nemusí zdieľať túto šablónu s správcami šablón položiek.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Keď určíte užívateľa alebo skupinu za tvorcu šablóny položky, tomuto užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na vytváranie šablón položiek. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Bližšie informácie</a>",
		admin_repcfg_entry_template_user_hover_p8: "Keď určíte užívateľa alebo skupinu za užívateľa šablóny položky, tomuto užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na používanie šablón položiek. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Bližšie informácie</a><p><b>Tip:</b> Ak chcete, aby boli všetci užívatelia vo vašom prostredí schopní používať šablóny položiek, môžete pridať k roli užívateľa šablóny položky pseudokonto #AUTHENTICATED-USERS.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Užívatelia a skupiny, ktorým boli udelené iné oprávnenia ako sú oprávnenia správcov, tvorcov a užívateľov.<p>Týchto užívateľov a skupiny môžete presunúť do vopred definovaných rolí odstránením týchto užívateľov alebo skupín z role Iné a priradením rolí šablón položiek k nim.<p>Oprávnenia, ktoré sú v súčasnosti priradené k týmto užívateľom a skupinám, môžete skontrolovať pomocou aplikácie IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Keď určíte užívateľa alebo skupinu za tvorcu šablóny tímového priestoru, tomuto  užívateľovi alebo skupine budú udelené príslušné privilégiá na vytváranie šablón tímových priestorov v archíve. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Bližšie informácie</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Keď určíte užívateľa alebo skupinu za tvorcu tímového priestoru, tomuto užívateľovi alebo skupine budú udelené príslušné privilégiá na vytváranie tímových priestorov v archíve. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Bližšie informácie</a>",
		admin_repcfg_teamspace_user_hover_cm: "Keď určíte užívateľa alebo skupinu za užívateľa tímového priestoru, tomuto užívateľovi alebo skupine budú udelené príslušné privilégiá na používanie tímových priestorov v archíve. Užívateľ však musí byť členom tímového priestoru na prístup k tomuto tímovému priestoru. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Bližšie informácie</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Keď určíte užívateľa alebo skupinu za tvorcu šablóny položky, tomuto  užívateľovi alebo skupine budú udelené príslušné privilégiá na vytváranie šablón položiek v archíve. <br/><br/>Avšak nastavenia bezpečnosti pre špecifickú šablónu položky určujú privilégiá, ktoré má užívateľ alebo skupina na šablónu položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Bližšie informácie</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Keď určíte užívateľa alebo skupinu za editora šablóny položky, tomuto  užívateľovi alebo skupine budú udelené príslušné privilégiá na modifikáciu šablón položiek v archíve. <br/><br/>Avšak nastavenia bezpečnosti pre špecifickú šablónu položky určujú privilégiá, ktoré má užívateľ alebo skupina na šablónu položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Bližšie informácie</a>",
		admin_repcfg_entry_user_hover_cm: "Keď určíte užívateľa alebo skupinu za užívateľa šablóny položky, tomuto užívateľovi alebo skupine budú udelené príslušné privilégiá na používanie šablón položiek v archíve. <br/><br/>Avšak nastavenia bezpečnosti pre špecifickú šablónu položky určujú privilégiá, ktoré má užívateľ alebo skupina na šablónu položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Bližšie informácie</a>",
		admin_repcfg_office_template_creators_hover_cm: "Keď určíte užívateľa alebo skupinu ako tvorcu šablón Microsoft Office Online alebo služby úprav, tomuto užívateľovi alebo skupine budú udelené príslušné oprávnenia na vytváranie súborov šablón v archíve. <br/><br/>Avšak nastavenia bezpečnosti pre špecifický súbor šablóny určujú privilégiá, ktoré má užívateľ alebo skupina na šablónu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a>",
		admin_repcfg_office_template_editors_hover_cm: "Keď určíte užívateľa alebo skupinu ako editora šablón Microsoft Office Online alebo služby úprav, tomuto užívateľovi alebo skupine budú udelené príslušné oprávnenia na úpravu súborov šablón v archíve.  <br/><br/>Avšak nastavenia bezpečnosti pre špecifický súbor šablóny určujú privilégiá, ktoré má užívateľ alebo skupina na šablónu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a>",
		admin_repcfg_office_template_user_hover_cm: "Keď určíte užívateľa alebo skupinu ako užívateľa šablóny Microsoft Office Online alebo služby úprav, tomuto užívateľovi alebo skupine budú udelené príslušné oprávnenia na použitie šablóny pri vytváraní nového dokumentu Office Online alebo služby úprav z webového klienta.  <br/><br/>Avšak nastavenia bezpečnosti pre špecifický súbor šablóny určujú privilégiá, ktoré má užívateľ alebo skupina na šablónu.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a>",
		admin_repcfg_draft_creators_hover_cm: "Táto rola musí byť priradená k všetkými užívateľom, ktorí chcú spoločne upravovať dokumenty v službe Microsoft Office Online alebo službe úprav. Užívateľom nepriraďujte rolu editora alebo užívateľa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a>",
		admin_repcfg_draft_editors_hover_cm: "Rola <b>autor</b> musí byť priradená k všetkými užívateľom, ktorí chcú spoločne upravovať dokumenty v službe Microsoft Office Online alebo službe úprav. Ak má užívateľ priradenú rolu editora, nemôže vytvárať koncepty, čo je vyžadované pre súčasnú úpravu viacerými užívateľmi.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a>",
		admin_repcfg_draft_user_hover_cm: "Rola <b>autor</b> musí byť priradená k všetkými užívateľom, ktorí chcú spoločne upravovať dokumenty v službe Microsoft Office Online alebo službe úprav. Ak má užívateľ priradenú rolu užívateľa, nemôže vytvárať koncepty, čo je vyžadované pre súčasnú úpravu viacerými užívateľmi.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Bližšie informácie</a>",		
		admin_repcfg_search_others_hover_p8: "Užívatelia a skupiny, ktorým boli udelené iné oprávnenia ako sú oprávnenia správcov, tvorcov a užívateľov.<p>Týchto užívateľov a skupiny môžete presunúť do vopred definovaných rolí odstránením týchto užívateľov alebo skupín z role Iné a priradením rolí vyhľadávania k nim.<p>Oprávnenia, ktoré sú v súčasnosti priradené k týmto užívateľom a skupinám, môžete skontrolovať pomocou aplikácie IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Správcovia vyhľadávania sú užívatelia, ktorí majú oprávnenia <b>Úplná kontrola</b> na archív (sklad objektov). Zoznam správcov vyhľadávania nemôžete zmeniť z administračného nástroja. <br /><br />Správcovia vyhľadávania môžu odstrániť alebo upraviť ľubovoľné vyhľadávanie. Užívateľ, ktorý vytvorí vyhľadávanie, nemusí zdieľať toto vyhľadávanie s správcami vyhľadávania.",
		admin_repcfg_search_creators_hover_p8: "Keď určíte užívateľa alebo skupinu za tvorcu vyhľadávania, tomuto užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na vytváranie vyhľadávaní. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Bližšie informácie</a>",
		admin_repcfg_search_user_hover_p8: "Keď určíte užívateľa alebo skupinu za užívateľa vyhľadávania, tomuto užívateľovi alebo skupine bude udelená príslušná bezpečnosť v archíve na používanie vyhľadávaní.<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Bližšie informácie</a><br /><br /><b>Tip:</b> Ak chcete, aby boli všetci užívatelia vo vašom prostredí schopní používať vyhľadávania, môžete pridať k roli užívateľa vyhľadávania pseudokonto #AUTHENTICATED-USERS.<br/><br />Užívateľ vyhľadávania môže štandardne vytvárať vyhľadávania a vyhľadávania vo viacerých archívoch, ale nemôže uložiť vyhľadávania. Užívateľom vyhľadávania môžete zabrániť vytvárať vyhľadávania tak, že budú musieť používať pracovnú plochu, pre ktorú sú vybraté tieto voľby:<ul><li><b>Nedovoliť užívateľom vytvárať vyhľadávania</b></li><li><b>Nedovoliť užívateľom vytvárať vyhľadávania vo viacerých archívoch</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Keď určíte užívateľa alebo skupinu za tvorcu vyhľadávania, tomuto užívateľovi alebo skupine budú udelené príslušné privilégiá na vytváranie a ukladanie vyhľadávaní a vyhľadávaní vo viacerých archívoch v archíve. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Bližšie informácie</a><br /><br /><b>Dôležité:</b> Uistite sa, že tvorcovia vyhľadávania používajú pracovnú plochu, pre ktorú nie sú vybraté tieto voľby:<ul><li><b>Nedovoliť užívateľom vytvárať vyhľadávania</b></li><li><b>Nedovoliť užívateľom vytvárať vyhľadávania vo viacerých archívoch</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Keď určíte užívateľa alebo skupinu za editora vyhľadávania, tomuto užívateľovi alebo skupine budú udelené príslušné privilégiá na modifikáciu existujúcich vyhľadávaní a vyhľadávaní vo viacerých archívoch. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Bližšie informácie</a><br /><br /><b>Tip:</b> Editor vyhľadávania môže štandardne vytvárať vyhľadávania a vyhľadávania vo viacerých archívoch, ale nemôže ukladať tieto vyhľadávania. Editorom vyhľadávania môžete zabrániť vytvárať vyhľadávania tak, že budú musieť používať pracovnú plochu, pre ktorú sú vybraté tieto voľby:<ul><li><b>Nedovoliť užívateľom vytvárať vyhľadávania</b></li><li><b>Nedovoliť užívateľom vytvárať vyhľadávania vo viacerých archívoch</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Keď určíte užívateľa alebo skupinu za užívateľa vyhľadávania, tomuto užívateľovi alebo skupine budú udelené príslušné privilégiá na otvorenie a spustenie uložených vyhľadávaní a vyhľadávaní vo viacerých archívoch. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Bližšie informácie</a><br /><br /><b>Tip:</b> Užívateľ vyhľadávania môže štandardne vytvárať vyhľadávania a vyhľadávania vo viacerých archívoch, ale nemôže ukladať tieto vyhľadávania. Užívateľom vyhľadávania môžete zabrániť vytvárať vyhľadávania tak, že budú musieť používať pracovnú plochu, pre ktorú sú vybraté tieto voľby:<ul><li><b>Nedovoliť užívateľom vytvárať vyhľadávania</b></li><li><b>Nedovoliť užívateľom vytvárať vyhľadávania vo viacerých archívoch</b></li></ul>",
		admin_repcfg_db_encoding: "Kódovanie znakov databázy servera:",
		admin_repcfg_db_encoding_hover: "Databáza IBM Content Manager má predvolené kódovanie znakov UTF-8.",
		admin_repcfg_db_encoding_specify: "Zadať kódovanie znakov databázy",
		admin_repcfg_db_encoding_utf8: "Kódovanie UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Zadajte túto voľbu, ak používate databázu s kódovaním UTF-8. IBM Content Navigator použije kódovanie UTF-8 na kontrolu dĺžky reťazcov hodnôt vlastností položiek.",
		admin_repcfg_db_encoding_other: "Iné kódovanie",
		admin_repcfg_db_encoding_other_hover: "Zadajte túto voľbu, ak používate databázu s iným kódovaním ako UTF-8. IBM Content Navigator použije počet znakov na kontrolu dĺžky reťazcov hodnôt vlastností položiek.",
		admin_repcfg_language_codes: "Kódy jazykov servera:",
		admin_repcfg_language_codes_avail: "Dostupné",
		admin_repcfg_language_codes_sel: "Vybraté",
		admin_repcfg_pdf_conversion: "Typy MIME pre konverziu na dokumenty PDF v prílohách:",
		admin_repcfg_pdf_conversion_avail: "Dostupné",
		admin_repcfg_pdf_conversion_sel: "Vybraté",

		admin_repcfg_box_share_enable_classes_label: "Triedy, ktoré je potrebné upraviť za účelom povolenia podpory zdieľania v službe Box:",
		admin_repcfg_box_share_enable_classes_hover: "Triedu, do ktorej sa má uložiť identifikátor súboru v službe Box, môžete upraviť pri zdieľaní súboru.",
		admin_repcfg_box_share_enable_classes_warning: "Upozornenie: Všetky triedy, ktoré vyberiete, sa upravia tak, aby podporovali zdieľanie v službe Box. Keď svoje zmeny uložíte, nebudete ich môcť z tried odstrániť.<br><br>Pre modifikáciu tried musíte byť pripojený k archívu ako správca knižničného servera.",
		admin_repcfg_box_share_enable_classes_available: "Dostupné triedy",
		admin_repcfg_box_share_enable_classes_selected: "Vybraté triedy",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Uložiť identifikátor zdieľania v službe Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Táto trieda už bola upravená tak, aby sa do nej ukladal identifikátor zdieľania v službe Box. Túto voľbu nemôžete odstrániť.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Upraviť túto triedu tak, aby sa do nej uložil identifikátor súboru v službe Box, keď sa táto položka zdieľa.",

		admin_repcfg_redaction: "Revízie na základe roly:",
		admin_repcfg_enable_redaction_hover: "Vyberte, či chcete používať revízie na základe roly v dokumentoch v tomto archíve.<br/><br/>Revízie na základe roly sa uplatnia pri stiahnutí a tlači dokumentu, pri jeho zobrazení v prezerači alebo pri zobrazení miniatúry dokumentu. To, ktoré informácie budú užívatelia vidieť v dokumente, závisí od ich roly a príslušných politík revízie.",

		admin_repcfg_redaction_policy_permission_text: "Priradenie editorov politík:",
		admin_repcfg_redaction_policy_editors_hover: "Vyberte užívateľov a skupiny užívateľov, ktorí môžu vytvárať, upravovať a odstraňovať politiky revízií a roly revízií.",
		admin_repcfg_redaction_policy_editors_select_hover: "Editori politík revízií môžu vytvárať, upravovať a odstraňovať politiky revízií a roly revízií.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Správcovia politík revízií môžu priraďovať editorov politík revízií.<br/><br/>Zoznam správcov politík revízií môžete upraviť v aplikácii IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Správcovia politík revízií môžu priraďovať editorov politík revízií.<br/><br/>Zoznam správcov politík revízií môžete upraviť v aplikácii IBM Content Manager system administration client.",

		admin_repcfg_redaction_permission_text: "Priradenie editorov revízií:",
		admin_repcfg_redaction_editors_hover: "Vyberte užívateľov a skupiny užívateľov, ktorí môžu vytvárať, upravovať a odstraňovať revízie na základe rolí. Po výbere užívateľov a skupín ich musíte určiť ako editorov v politikách revízií, aby mohli upravovať revízie na základe rolí.",
   		admin_repcfg_redaction_editors_select_hover: "Editori revízií môžu vytvárať, upravovať a odstraňovať revízie na základe rolí, ak sú títo užívatelia určení ako editori v politikách revízií.",
   		admin_repcfg_redaction_administrators_hover_p8: "Správcovia revízií môžu priradiť editorov revízií.<br/><br/>Zoznam správcov revízií môžete upraviť v aplikácii IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Správcovia revízií môžu priradiť editorov revízií.<br/><br/>Zoznam správcov revízií môžete upraviť v aplikácii IBM Content Manager system administration client.",
		admin_repcfg_entry_template: "Spravovanie šablón položiek:",
		admin_repcfg_entry_template_enable_classes_label: "Triedy na modifikáciu pre podporu šablóny položky:",
		admin_repcfg_oos_reference_attribute_label: "Referenčné atribúty pre Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Dôležité: Všetky vami zadané triedy budú upravené, aby podporovali šablóny položiek. Keď svoje zmeny uložíte, nebudete ich môcť z tried odstrániť.<br><br>Triedu môžete upraviť na jeden alebo na obidva nasledujúce účely:<br><ul><li>Ak chcete uložiť ID šablóny položky, ktorá bola použitá na pridanie položky, aby sa nastavenia šablóny položky použili keď bude položka upravená</li><li>Len hierarchické triedy  priečinkov: Pre podporu priradení priečinka šablón položiek</li></ul>Pre modifikáciu tried musíte byť pripojený k archívu ako správca knižničného servera.",
		admin_repcfg_entry_template_enable_classes_warning: "Dôležité: Všetky vami zadané triedy budú upravené, aby podporovali šablóny položiek. Keď svoje zmeny uložíte, nebudete ich môcť z tried odstrániť.<br><br>Pre modifikáciu tried musíte byť pripojený k archívu ako správca knižničného servera.",
		admin_repcfg_entry_template_enable_classes_available: "Dostupné triedy",
		admin_repcfg_entry_template_enable_classes_selected: "Vybraté triedy",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Uložiť ID šablóny položky",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Upravte túto triedu, aby ukladala ID šablóny položiek,  ktorá bola použitá na pridanie položky, aby sa nastavenie šablóny položky použilo keď bude položka upravená.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Uložiť priradenia priečinka",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Upravte túto triedu tak, aby podporovala  priradenia priečinka šablóny položky. Táto voľba je k dispozícii len pri hierarchických tried priečinka.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Táto trieda už bola upravená, aby ukladala  ID šablóny položky. Túto voľbu nemôžete odstrániť.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Táto trieda už bola upravená, aby ukladala priradenia priečinka. Túto voľbu nemôžete odstrániť.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Na uloženie prepojení priečinka môžete použiť len hierarchické triedy priečinka a nehierarchické triedy.",
		admin_repcfg_entry_template_root_folder_association_title: "Šablóny položiek priradené ku koreňovému priečinku:",
		admin_repcfg_entry_template_root_folder_association_hover: "Určte šablóny položiek, ktoré chcete priradiť ku koreňovému priečinku archívu IBM Content Manager.<br /><br />Ak ku koreňovému priečinku priradíte šablóny položiek, vždy, keď užívatelia pridajú položky do hierarchického priečinka, použije sa šablóna položky.",
		admin_repcfg_entry_template_root_folder_association_button: "Nastaviť priradenia",
		admin_repcfg_oos_enable_classes_label: "Trieda, ktoré je potrebné upraviť v záujme podpory aplikácie Office Online a služby úprav:",
		admin_repcfg_oos_enable_classes_warning: "Dôležité: Všetky triedy, ktoré tu určíte, budú upravené tak, aby spolupracovali s aplikáciou Microsoft Office Online alebo službou úprav. Keď uložíte svoje zmeny, referenčný atribút automaticky pridaný do každej triedy už nemožno odstrániť.<br><br>Pre modifikáciu tried musíte byť pripojený k archívu ako správca knižničného servera.",
		admin_repcfg_oos_enable_classes_available: "Dostupné triedy",
		admin_repcfg_oos_enable_classes_selected: "Vybraté triedy",
		admin_repcfg_oos_enable_classes_note: "Dôležité:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Táto trieda nie je podporovaná s aplikáciou Microsoft Office Online alebo službou úprav.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Politika verzií pre túto triedu je nastavená tak, aby sa vždy vytvárali verzie, čo aplikácia Microsoft Office ani služba úprav nepodporujú. Vyberte inú triedu.",
		admin_repcfg_download_recording: "Sledovať sťahovanie:",
		admin_repcfg_download_recording_hover: "Keď je v archíve nainštalovaný prídavný komponent Social Collaboration Base Extensions, sťahovanie bude predvolene sledované. Zakázaním tejto voľby však môžete zvýšiť výkon archívu.<br><br>Ak túto voľbu zakážete, užívatelia uvidia počet stiahnutí, ku ktorým došlo pred zakázaním tejto voľby.",
		admin_repcfg_sync_service: "Služby synchronizácie:",
		admin_repcfg_download_ignored: "Ignorovať stiahnutia pri špecifických užívateľoch:",
		admin_repcfg_download_ignored_hover: "Môžete ignorovať stiahnutia požadované špecifickými užívateľmi, ako sú napríklad správcovia alebo systémové kontá, kvôli získaniu presnejšieho obrazu o počte užívateľov, ktorí si dokument stiahli. Ak máte napríklad špecifické konto, ktoré sa používa na sťahovanie obsahu kvôli generovaniu mesačného výkazu, môžete ignorovať stiahnutia požadované z takéhoto konta.<br><br><b>Obmedzenie:</b> Nemôžete zadávať skupiny.",

		admin_repcfg_add_as_major_version: "Pridať ako hlavnú verziu:",
		admin_repcfg_enable_add_as_major_version: "Áno",
		admin_repcfg_disable_add_as_major_version: "Nie",
		admin_repcfg_checkin_as_major_version: "Prihlásiť ako hlavnú verziu:",
		admin_repcfg_enable_checkin_as_major_version: "Áno",
		admin_repcfg_disable_checkin_as_major_version: "Nie",
		admin_repcfg_annotation_security: "Zabezpečenie poznámok:",
		admin_repcfg_inherit_annotation_security: "Duplikovať zabezpečenie nadradeného dokumentu",
		admin_repcfg_default_annotation_security: "Použiť predvolené zabezpečenie poznámky",
		admin_repcfg_connection_point: "Bod pripojenia pracovného toku:",
		admin_repcfg_include_workflow_definition: "Zobraziť triedu definície pracovného toku:",
		admin_repcfg_include_form_template: "Zobraziť triedu šablóny formulára:",
		admin_repcfg_enable_include_workflow_definition: "Áno",
		admin_repcfg_disable_include_workflow_definition: "Nie",

		admin_repcfg_status_columns: "Ikony stavu:",
		admin_repcfg_status_columns_hover: "Zadajte stavy, pre ktoré sa majú zobrazovať ikony. Ikony stavu sa zobrazujú v zozname obsahu vedľa dokumentov, priečinkov a pracovných položiek.",
		admin_repcfg_status_columns_documents_or_folders: "Zobraziť ikonu, keď dokumenty alebo priečinky:",
		admin_repcfg_status_columns_documents: "Zobraziť ikonu, keď dokumenty:",
		admin_repcfg_status_columns_documents_checked_out: "Sú odhlásené",
		admin_repcfg_status_columns_documents_declared_records: "Sú deklarované ako záznamy",
		admin_repcfg_status_columns_documents_minor_versions: "Majú vedľajšie verzie",
		admin_repcfg_status_columns_documents_compound_document: "Sú zložené dokumenty",
		admin_repcfg_status_columns_documents_bookmarks: "Majú záložky",
		admin_repcfg_status_columns_documents_hold: "Sú pozastavené",
		admin_repcfg_status_columns_documents_notes: "Majú poznámky",
		admin_repcfg_status_columns_work_items: "Zobraziť ikonu, keď pracovné položky:",
		admin_repcfg_status_columns_work_items_locked: "Sú uzamknuté",
		admin_repcfg_status_columns_work_items_checked_out: "Sú odhlásené",
		admin_repcfg_status_columns_work_items_deadline: "Majú termín",
		admin_repcfg_status_columns_work_items_suspended: "Majú pozastavené spracovanie",

		admin_repcfg_afp2pdf_config_file: "Konfiguračný súbor AFP2PDF:",
		admin_repcfg_transform_xml_file: "Vlastný transformačný súbor:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Povoliť",
		admin_repcfg_disable_ssl: "Zakázať",
		admin_repcfg_keyringdb_file: "Databázový súbor kľúčov:",
		admin_repcfg_keyringstash_file: "Súbor skladu kľúčov:",
		admin_repcfg_od_sso: "Jediné prihlásenie",
		admin_repcfg_od_enable_sso: "Povoliť",
		admin_repcfg_od_disable_sso: "Zakázať",
		admin_repcfg_od_sso_password: "Heslo",
		admin_repcfg_advanced_label: "Rozšírený",
		admin_repcfg_custom_properties_label: "Voliteľné vlastnosti:",
		admin_repcfg_new_button_label: "Nové",
		admin_repcfg_edit_button_label: "Upraviť",
		admin_repcfg_delete_button_label: "Odstrániť",
		admin_repcfg_custom_head1: "Názov",
		admin_repcfg_custom_head2: "Hodnota",
		admin_repcfg_ecpdialog_title_new: "Nová voliteľná vlastnosť",
		admin_repcfg_ecpdialog_title_edit: "Upraviť voliteľnú vlastnosť",
		admin_repcfg_ecpdialog_name: "Názov:",
		admin_repcfg_ecpdialog_value: "Hodnota:",
		admin_repcfg_ecpdialog_save: "Uložiť",
		admin_repcfg_ecpdialog_create: "Vytvoriť",
		admin_repcfg_ecpdialog_cancel: "Zrušiť",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Táto hodnota je povinná. Hodnota nemôže obsahovať medzery a nemôže byť duplicitná.",

		admin_repcfg_cmis_use_gzip_encoding: "Použiť kódovanie GZIP:",

		admin_repcfg_task_mgr_proxy: "Identifikátor pripojenia správcu úloh:",
		admin_repcfg_task_mgr_proxy_hover: "Pri odstránení zdieľania v službe Box alebo tímového priestoru použije správca úloh identifikátor užívateľa správcu a heslo s cieľom spustiť úlohy upravujúce archív na pozadí.<br><br>Kliknite na tlačidlo Nastaviť a prihláste sa do archívu s platným identifikátorom užívateľa a heslom správcu archívu.",
		admin_task_manager_not_enabled_warning: "Táto voľba vyžaduje, aby bola aktívna služba správcu úloh, avšak služba správcu úloh nie je povolená.  Službu správcu úloh môžete pre všetky pracovné plochy povoliť na stránke Všeobecné v okne Nastavenia.",
		admin_task_manager_not_enabled_and_user_warning: "Táto voľba vyžaduje, aby bola aktívna služba správcu úloh, avšak služba správcu úloh nie je povolená. Nastavte identifikátor pripojenia správcu úloh na tejto stránke a potom na stránke Všeobecné v okne Nastavenia povoľte službu správcu úloh pre všetky pracovné plochy.",
		admin_task_manager_user_id_pw_not_set_warning: "Táto voľba vyžaduje, aby bola aktívna služba správcu úloh, ako aj identifikátor užívateľa a heslo správcu. Nastavte identifikátor pripojenia správcu úloh na tejto stránke.",
		admin_repcfg_teamspaces_delete_task_id: "Správca archívu:",
		admin_repcfg_teamspaces_delete_task_password: "Heslo:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Musíte určiť správcu knižničného servera, aby mohla služba správcu úloh odstrániť tímový priestor z archívu.",
		admin_repcfg_teamspaces_delete_task_hover: "Keď užívateľ odstráni tímový priestor, tento tímový priestor sa predvolene skryje. Všetky priečinky a dokumenty v tímovom priestore zostanú v archíve. <br /> <br />Keď povolíte túto voľbu, v archíve zostanú len tie dokumenty, ktoré boli zaradené aj do iných priečinkov v archíve.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Ak máte vo vašom prostredí veľký počet tímových priestorov, zobrazenie všetkých tímových priestorov na karte <b>Tímové priestory</b> môže trvať dlho. Výberom tejto voľby dokážete skrátiť čas, ktorý je potrebný na zaplnenie zoznamu.<br /><br />Ak užívateľ potrebuje pracovať s tímovým  priestorom, ktorý je mimo vami zadaného rozsahu, užívateľ môže na nájdenie tímového priestoru použiť pole <b>Filter</b>.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Ak vyberiete túto voľbu, užívatelia s rolou vlastníka pre tímový priestor môžu upravovať roly priradené k tímovým priestorom, ktoré boli  vytvorené vo verzii aplikácie IBM Content Navigator staršej ako 2.0.2.<br /><br />Táto voľba nemá žiadny vplyv na tímové priestory, ktoré boli vytvorené v aplikácii IBM Content Navigator, verzia 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Uveďte, či chcete, aby užívatelia mohli vytvárať tímové priestory a šablóny tímových priestorov v tomto archíve.<br /><br /><b>Upozornenie:</b> Archív musí podporovať hierarchické priečinky.<br /><br />Ak povolíte tímové priestory, produkt IBM Content Navigator vytvorí v archíve dátový model tímového priestoru. Tento dátový model bude obsahovať objekty ACL, privilégiá, sady privilégií a dva nové typy položiek.",
		admin_repcfg_folder_selector_hover: "Vyberte priečinok, ktorý sa má použiť ako koreňový priečinok, keď užívatelia prehľadávajú dokumenty. Ak nemáte v archíve nakonfigurované hierarchické priečinky, toto nastavenie vám umožní vykonávať prehľadávanie definovaním koreňového priečinka. Ak máte v archíve nakonfigurované hierarchické priečinky, toto nastavenie nahradí koreňový priečinok, ktorý ja nakonfigurovaný v archíve.",
		admin_repcfg_cm_use_sso_hover: "Uveďte, či chcete povoliť jediné prihlásenie pre užívateľov so súborom privilégií Dôveryhodné prihlásenie.<br /><br /><b>Upozornenie:</b> Jediné prihlásenie musí byť povolené na serveri Content Manager a WebSphere Application Server musí byť nakonfigurovaný pre LTPA, aby tento konfiguračný parameter fungoval.",
		admin_repcfg_cm_direct_retrieve_hover: "Priame získavanie je štandardne povolené, pretože umožňuje webovému klientovi rýchlo získať obsah zo správcu prostriedkov. <br /><br />Túto voľbu môžete zakázať, ak nechcete, aby klientska aplikácia pristupovala priamo k správcovi prostriedkov alebo ak máte firewall alebo proxy server, ktoré bránia webovému klientovi v prístupe k správcovi prostriedkov cez adresu URL. Napríklad, firewall môže brániť užívateľom zobrazovať dokumenty v prezerači apletov, keď je povolené priame získavanie.",
		admin_repcfg_cmItemTypesToDisplay: "Ak nechcete, aby užívatelia videli typy položiek prostriedkov a položkové typy položiek na serveri IBM Content Manager, môžete zobraziť iba typy položiek s modelmi dokumentov. Typy položiek sa zobrazujú vtedy, keď užívatelia vytvárajú vyhľadávania, pridávajú dokumenty a vytvárajú priečinky.",
		admin_repcfg_cm_language_codes_hover: "Určite jazyky, v ktorých sa majú vracať údaje zo servera Content Manager. Zoznam dostupných jazykov sa riadi zoznamom definícií jazykov na serveri.<br /><br /><b>Zapamätajte si:</b> Údaje vo webovom klientovi sa zobrazujú v jazyku, ktorý je nastavený vo webovom prehliadači užívateľa.",
		admin_repcfg_cm_pdf_conversion_hover: "Určite typy dokumentov, ktoré majú byť skonvertované do formátu PDF, keď užívateľ pošle dokument s viacerými časťami ako prílohu e-mailu. Všetky tieto časti budú spojené do jedného PDF dokumentu.",
		admin_repcfg_use_teamspaces_p8_hover: "Uveďte, či chcete, aby užívatelia mohli vytvárať tímové priestory a šablóny tímových priestorov v tomto archíve.<br /><br />Ak povolíte tímové priestory, produkt IBM Content Navigator vytvorí v archíve dátový model tímového priestoru. Tento dátový model bude obsahovať šablóny vlastností, vlastné objekty, objekt priečinka a rôzne priečinky.",
		admin_repcfg_use_entry_template_p8_hover: "Zadajte, či chcete aby užívatelia mohli v tomto archíve vytvárať a spravovať šablóny položiek z IBM Content Navigator. Ak túto funkciu nepovolíte, užívatelia budú môcť vyhľadávať a používať šablóny položiek, ktoré sa už v archíve nachádzajú.<br /><br />Ak povolíte správu šablón položiek, IBM Content Navigator aktualizuje dátový model šablón položiek v archíve. Aktualizácia obsahuje nové vlastnosti. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Bližšie informácie</a>",
		admin_repcfg_use_entry_template_cm_hover: "Zadajte, či chcete aby užívatelia mohli v tomto archíve vytvárať a spravovať šablóny položiek z IBM Content Navigator.<br /><br />Ak povolíte správu šablón položiek, IBM Content Navigator vytvorí dátový model šablón položiek v archíve. Dátový model obsahuje nový objekt ACL, nové vlastnosti a nový typ položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Bližšie informácie</a>",
		admin_repcfg_sync_service_p8_hover: "Určte, či chcete, aby užívatelia boli schopní synchronizovať svoje obľúbené položky medzi ich pracovnými stanicami a mobilnými zariadeniami.<br><br><b>Dôležité:</b> Ak chcete používať túto funkciu, musíte vykonať aj nasledujúce kroky:<br><ul><li>Určiť <b>verejnú adresu URL služieb synchronizácie</b> v časti <b>Služby synchronizácie</b> v administračnom nástroji.</li><li>Pridať tento archív do pracovnej plochy, pre ktorú sú povolené služby synchronizácie.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Uveďte, či má byť štandardne vybratá voľba Hlavná verzia, keď užívatelia pridávajú dokumenty do archívu. <br /><br />Užívatelia môžu zrušiť výber tejto voľby, ak chcú dokument pridať ako vedľajšiu verziu.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Uveďte, či má byť štandardne vybratá voľba Hlavná verzia, keď užívatelia prihlasujú dokumenty do archívu.<br /><br />Užívatelia môžu zrušiť výber tejto voľby, ak chcú dokument prihlásiť ako vedľajšiu verziu.",
		admin_repcfg_p8_annotation_security_hover: "Uveďte, aký typ zabezpečenia sa má štandardne použiť pre poznámky.<br /><br />Užívatelia môžu zmeniť zabezpečenie poznámok.",
		admin_repcfg_p8_connection_point_hover: "Ak chcete použiť pracovné toky IBM FileNet P8, vyberte bod pripojenia Process Engine. Bod pripojenia, ktorý vyberiete, určí, ktoré pracovné toky majú byť k dispozícii užívateľom pristupujúcim do tohto archívu.",
		admin_repcfg_p8_include_workflow_definition_hover: "Ak sa vo webovom klientovi zobrazuje trieda dokumentov s definíciou pracovného toku IBM FileNet P8, užívatelia môžu vyhľadávať a pridávať definície pracovného toku do archívu.",
		admin_repcfg_p8_include_form_template_hover: "Ak sa vo webovom klientovi zobrazuje trieda dokumentov so šablónou formulára IBM FileNet P8, užívatelia môžu vyhľadávať a pridávať šablóny formulárov do archívu.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Zadajte úplnú cestu konfiguračného súboru AFP2PDF pre tento  archív na webovom aplikačnom serveri. Program AFP2PDF sa vyžaduje na prezeranie a tlač údajov AFP.<br /><br /><b>Nezabudnite:</b> Aby ste mohli tento parameter používať, musíte mať nainštalovaný program AFP2PDF Transform.",
		admin_repcfg_od_transform_xml_file_hover: " Ak chcete na skonvertovanie obsahu Content Manager OnDemand použiť vlastnú transformáciu, zadajte úplnú cestu súboru XML, ktorý sa používa na definovanie transformácie. Tento súbor XML musí byť umiestnený na webovom aplikačnom serveri.",
		admin_repcfg_od_ssl_hover: "Zadajte, či sa má na šifrovanie komunikácie medzi aplikačným serverom IBM Content Navigator a knižničným serverom Content Manager OnDemand a objektovými servermi používať protokol SSL.<br /><br /><b>Dôležité:</b> Povolenie protokolu SSL pre archív Content Manager OnDemand nemá vplyv komunikáciu medzi aplikačným serverom IBM Content Navigator, webovým serverom alebo užívateľskými pracovnými stanicami.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Zadajte úplnú cestu databázového súboru kľúčov pre tento archív na webovom aplikačnom serveri. Napríklad C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Databázový súbor kľúčov obsahuje vaše dôveryhodné koreňové certifikáty. Na zamedzenie neoprávneného prístupu do tohto súboru použite silnú ochranu súborového systému.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Zadajte úplnú cestu skrytého súboru kľúčov pre tento archív na webovom aplikačnom serveri. Napríklad C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Súbor  skladu kľúčov obsahuje heslo pre databázový súbor kľúčov. Na zamedzenie neoprávneného prístupu do tohto súboru použite silnú ochranu súborového systému.",
		admin_repcfg_od_sso_password_hover: "Zadajte heslo, ktoré chcete použiť pre jediné prihlásenie na server OnDemand.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API podporuje vlastné vlastnosti. Ak chcete používať ľubovoľné vlastné vlastnosti, keď sa pripájate k archívu cez webového klienta, zadajte názvy a hodnoty vlastných vlastností.<br /><br />Bližšie informácie o podporovaných vlastných vlastnostiach nájdete v dokumentoch ODWEK Java API Javadocs, ktoré sú v podadresári /api inštalačného adresára ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Zadajte názov vlastnosti.",
		admin_repcfg_od_custom_properties_value_hover: "Zadajte hodnotu vlastnosti.",
		admin_repcfg_od_use_sso_hover: "Určte, či sa má povoliť jediné prihlásenie pre užívateľov.<br /><br /><b>Upozornenie:</b> Aby tento konfiguračný parameter fungoval, na serveri Content Manager OnDemand musí byť povolené jediné prihlásenie.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Použiť kódovanie GZIP pre tento zdroj CMIS.",
		admin_repcfg_cm_use_part_file_name: "Používaný názov súboru pri sťahovaní dokumentov:",
		admin_repcfg_cm_use_part_file_name_help: "Uveďte, ako sa majú určovať názvy súborov dokumentov pri ich sťahovaní užívateľmi.",
		admin_repcfg_cm_use_part_file_name_enable: "Použiť názov súboru",
		admin_repcfg_cm_use_part_file_name_disable: "Použiť názov položky v archíve",
		admin_repcfg_add_doc_name: "Predvolený názov pre pridaný dokument:",
		admin_repcfg_add_doc_name_hover: "Užívatelia môžu zmeniť tento názov pred pridaním dokumentu.",
		admin_repcfg_add_doc_name_empty: "Žiadny (prázdny)",
		admin_repcfg_add_doc_name_file_name: "Názov súboru vybratého dokumentu",

		admin_repcfg_compound_documents: "Komponenty zloženého dokumentu:",
		admin_repcfg_compound_documents_hover: "Povoliť komponenty zložených dokumentov P8, ako je napríklad navigácia.",
		admin_repcfg_cm_action_list_config_enabled: "Zoznam akcií pracovnej položky:",
		admin_repcfg_cm_action_list_config_hover: "Pri konfigurácii smerovania dokumentov v Administračnom klientovi systému Content Manager môžete určiť zoznam akcií, ktoré môže užívateľ vykonať s pracovnou položkou.<br /><br />Povoľte túto možnosť, ak chcete používať zoznam akcií zo servera Content Manager. Tieto nastavenia sa použijú v kontextovej ponuke a v okne Upraviť vlastnosti pracovnej položky.<br /><br /><b>Dôležité:</b> Nastavenia v zozname akcií nahradia všetky prispôsobené ponuky, ktoré nakonfigurujete v administračnom nástroji Content Navigator. Ak zoznam akcií neobsahuje žiadne nastavenia, užívatelia nebudú môcť pracovať s pracovnými položkami.",

		admin_repcfg_box_share: "Zdieľanie v službe Box",
		admin_repcfg_box_share_p8_hover: "Umožňuje užívateľom zdieľať dokumenty z tohto archívu. Pri zdieľaní dokumentu sa súbor skopíruje do služby Box, vytvorí sa prepojenie a toto prepojenie sa pošle e-mailom.<br /><br />Ak povolíte zdieľanie v službe Box, aplikácia IBM Content Navigator vytvorí v archíve dátový model zdieľania v službe Box. Aby ste mohli nainštalovať doplnok zdieľania v službe Box pre server IBM Content Navigator, k archívu sa musíte pripojiť ako správca knižničného servera.",

		admin_menu_type_icon: "Ikona typu ponuky",
		admin_menu_toolbar_hover: "Panel nástrojov",
		admin_menu_toolbar_custom_hover: "Vlastný panel nástrojov",
		admin_menu_contextMenu_hover: "Kontextová ponuka",
		admin_menu_contextMenu_custom_hover: "Vlastná kontextová ponuka",

		admin_menu_contextMenu_custom_empty: "V nakonfigurovaných moduloch plug-in nie sú definované žiadne vlastné kontextové ponuky.",
		admin_menu_toolbar_custom_empty: "V nakonfigurovaných moduloch plug-in nie sú definované žiadne vlastné panely nástrojov.",

		admin_file_type_category_filters: "Filtre typov súborov:",
		admin_file_type_category_filters_hover_help: "Zadajte zoznam typov súborov, ktoré môžu užívatelia použiť v nasledujúcich situáciách:<ul><li>Spresnenie zoznamu výsledkov pri vyhľadávaní alebo prehľadávaní v IBM Content Navigator for Microsoft Office<li>Zúženie zoznamu výsledkov pri vyhľadávaní v archíve IBM FileNet P8 vo webovom klientovi<li>Ak chcete obmedziť typy súborov, ktoré môžu užívatelia pridávať do archívu keď používajú šablónu položky</ul>",
		admin_file_type_only_use_in_et_folder_association: "Zobraziť len v priradeniach priečinka šablóny položiek",
		admin_office_config_properties_label: "Vlastnosti dokumentov Office",
		admin_office_config_type_label: "Typ údajov",
		admin_office_config_mapped_property_label: "Vlastnosť archívu",
		admin_office_config_properties_hover_help: "Zadajte a potom pridajte názov každej vlastnosti dokumentu Microsoft Office, ktorá sa má mapovať do vlastnosti archívu. Typ údajov sa musí vo všetkých vlastnostiach zhodovať",
		admin_office_config_mapped_property_hover_help: "Ak chcete vlastnosti dokumentu Office mapovať do viacerých vlastností archívu, musíte vytvoriť nové mapovanie vlastnosti",
		admin_new_property_mapping_title: "Nové mapovanie vlastností",
		admin_property_mapping_title: "Upraviť mapovanie vlastností",
		admin_property_mapping_instruction: "Zadajte vlastnosti dokumentu Microsoft Office, ktoré chcete mapovať do vlastnosti v archíve. Typ údajov vlastnosti dokumentu Office sa musí zhodovať s typom údajov vlastnosti v archíve. <br /><br />Ak má dokument Office viaceré vlastnosti z mapovania, IBM Content Navigator použije prvú vlastnosť zo zoznamu na zaplnenie vlastnosti v archíve.",
		admin_ms_general_settings: "Všeobecná konfigurácia:",
		admin_ms_delete_local_settings: "Odstrániť lokálne súbory, keď užívatelia:",
		admin_ms_outlook_options: "Integrácia s aplikáciou Outlook:",
		admin_ms_enable_props_mapping: "Mapovať vlastnosti dokumentov Office do vlastností archívu, keď užívatelia:",
		admin_ms_open_doc_when_checkout: "Automaticky odhlásiť dokument po otvorení",
		admin_ms_open_doc_when_checkout_hover_help: "Výber tejto voľby zamedzí užívateľom prepísať súbor v archíve staršou verziou súboru.",
		admin_ms_prompt_close_office: "Vyzvať užívateľov, aby prihlásili dokumenty, keď zatvoria aplikácie balíka Office",
		admin_ms_prompt_close_office_hover_help: "Výber tejto voľby zamedzí užívateľom zabudnúť na prihlásenie ich práce.",
		admin_ms_add_with_entry_template_only: "Zobraziť len akciu Pridať so šablónou",
		admin_ms_delete_local_on_add: "Odstrániť lokálne súbory, keď užívatelia pridajú dokumenty",
		admin_ms_delete_local_on_checkin: "Odstrániť lokálne súbory, keď užívatelia prihlásia dokumenty alebo zrušia odhlásenie",
		admin_ms_delete_local_on_add_hover_help: "Keď užívateľ pridá dokument v doplnku IBM Content Navigator for Microsoft Office, tento dokument sa pridá do archívu, pričom lokálna kópia zostane otvorená, takže užívateľ môže okamžite odhlásiť dokument a vykonať potrebné zmeny.<br /><br />Túto možnosť vyberte vtedy, ak sa má po pridaní dokumentu do archívu automaticky zatvoriť a odstrániť lokálna kópia dokumentu.",
		admin_ms_delete_local_on_checkin_hover_help: "Keď užívateľ prihlási dokument v doplnku IBM Content Navigator for Microsoft Office, tento dokument sa prihlási v archíve, pričom lokálna kópia zostane otvorená. Lokálna kópia dokumentu zostane otvorená aj po zrušení odhlásenia. Keďže lokálna kópia zostane otvorená, užívatelia môžu okamžite odhlásiť dokument a vykonať potrebné zmeny.<br /><br />Túto možnosť vyberte vtedy, ak sa má po prihlásení dokumentu v archíve alebo po zrušení odhlásenia dokumentu automaticky zatvoriť a odstrániť lokálna kópia dokumentu.",
		admin_ms_delete_local_on_save: "Uložiť dokument",
		admin_ms_prompt_for_props_on_add: "Vyzvať užívateľov, aby zadali hodnoty vlastností pri pridávaní e-mailov do archívu",
		admin_ms_prompt_for_props_on_add_hover_help: "Ak túto voľbu nevyberiete, webový klient bude používať mapovanie vlastností aplikácie Outlook, ktoré je definované pre archív.<br /><br />Ak sú k priečinku, do ktorého sa pridávajú e-maily, priradené šablóny položiek, užívateľ nemusí byť vyzvaný na zadanie žiadnych vlastností.",
		admin_ms_delete_email_on_add: "Odstrániť e-mail z e-mailového servera, keď sa tento e-mail pridá do archívu",
		admin_ms_send_email_as_link_only: "Nedovoliť užívateľom posielať dokumenty ako prílohy",
		admin_ms_send_email_as_link_only_hover_help: "Ak vyberiete túto voľbu, užívatelia budú môcť dokumenty z aplikácie Outlook posielať len ako prepojenia. Táto voľba zaručuje, že dokumenty budú môcť zobraziť len užívatelia s potrebnými oprávneniami pre archív.",
		admin_ms_enable_prop_mapping_for_add: "Mapovať vlastnosti balíka Office na vlastnosti archívu, keď užívatelia pridajú alebo prihlásia dokumenty",
		admin_ms_checkout_document_after_add: "Automaticky odhlásiť dokumenty po ich pridaní do archívu",
		admin_no_default_document_type_filtering: "Keď užívatelia vyhľadávajú, predvolene vrátiť všetky typy dokumentov",
		admin_no_default_document_type_filtering_hover_help: "Predvoleným správaním IBM Content Navigator for Microsoft Office je, že užívatelia pri aktívnom vyhľadávaní uvidia len typ dokumentu aktuálnej aplikácie. Napríklad predvolene bude vybratý typ dokumentu Word, keď spustia vyhľadávanie z aplikácie Microsoft Word.<br/><br/>Výber tejto voľby však zruší výber začiarkavacích políčok typov dokumentov, preto užívatelia uvidia všetky dokumenty, ktoré vyhľadávanie vráti. Užívatelia môžu toto nastavenie vyradiť, ak pred spustením vyhľadávania vyberú jeden alebo viac typov dokumentov.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Zadajte, či sa majú vlastnosti dokumentu definované pre dokumenty Microsoft Office mapovať do vlastností definovaných v archíve.<br /></br /><b>Dôležité:</b> Ak túto funkciu povolíte, vlastnosti Office musíte nakonfigurovať každému archívu vo vašom prostredí. Ak nemapujete vlastnosti dokumentov Office do vlastností svojho archívu, táto funkcia nebude fungovať.<br /><br />Toto nastavenie sa nepoužije v aplikácii Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Výberom tejto možnosti môžete obmedziť počet krokov, ktoré musia užívatelia vykonať na to, aby mohli pracovať s dokumentmi, po pridaní dokumentov do archívu.<br /></br /><b>Tip:</b> Označením možnosti <b>Vyzvať užívateľov, aby prihlásili dokumenty po zatvorení aplikácií Office</b> môžete zabezpečiť, že užívatelia znova prihlásia dokumenty v archíve.",
		admin_ms_show_details_recently_used: "Zobraziť podrobné informácie o položkách v zozname <b>Naposledy použité</b>",
		admin_ms_show_details_recently_used_hover_help: "Predvolene sa v zozname Naposledy použité nezobrazia podrobné informácie o položkách, aby bolo možné zobraziť väčší počet položiek. Keď označíte túto možnosť, v paneli podrobností zoznamu Naposledy budú uvedené podrobné informácie o prvom dokumente.",
		admin_ms_show_no_permissions_warning: "Zobraziť varovania, keď užívatelia upravujú vlastnosti alebo prihlásia dokument, ale nemajú oprávnenie na zobrazenie šablóny položky dokumentu",
		admin_ms_show_no_permissions_warning_hover_help: "Ak bol dokument v archíve vytvorený s použitím šablóny položky, ale užívateľ nemá oprávnenie na zobrazenie šablóny položky dokumentu, šablóna položky sa neprevezme.<br /><br/>Takže keď užívateľ upravuje vlastnosti dokumentu, vlastnosti sa zobrazia bez použitia šablóny položky. Taktiež keď užívateľ prihlási dokument, tento dokument sa prihlási bez použitia šablóny položky.<br /><br />Tieto akcie sa predvolene vykonajú bez toho, že by sa užívateľ informoval o skutočnosti, že sa nepoužíva šablóna položky. Iba sa zaznamená varovanie do protokolového súboru.<br /><br />Vyberte túto možnosť, ak sa majú zobraziť varovania, ktoré okamžite informujú užívateľa o tom, že sa nepoužíva šablóna položky.",
		admin_ms_hide_search_actions: "Zvinúť časť s vyhľadávacími filtrami",
		admin_ms_hide_search_actions_hover_help: "Užívatelia môžu predvolene použitím filtra akcií určiť akciu, užívateľa alebo skupinu užívateľov a vybrať dátum alebo rozsah dátumov pre výskyt udalosti. Napríklad, môžete vyhľadať dokumenty, ktoré ste pridali iba vy minulý mesiac.<br /><br />Ak nechcete, aby mohli užívateľa používať filtre akcií, výberom tejto možnosti skryte filtre akcií, čím zároveň obmedzíte počet polí, ktoré sa zobrazia pri definovaní kritérií vyhľadávania.",
		admin_ms_hide_save_document: "Skryť možnosť <b>Uložiť</b> v páse s nástrojmi",
		admin_ms_hide_save_document_hover_help: "Výberom možnosti <b>Uložiť</b> môžu užívatelia uložiť zmeny v dokumente do archívu bez prihlásenia dokumentu.",
		admin_ms_indicate_managed_email_on_add: "Označiť, či už bol e-mail pridaný do archívu",
		admin_ms_indicate_managed_email_on_add_hover_help: "Výber tejto voľby poskytne užívateľom informáciu o tom, že e-mail je už v archíve, čo zredukuje počet pridaní e-mailu do archívu.  Keď vyberiete túto voľbu, v aplikácii Microsoft Outlook sa vytvorí nová farebná kategória s názvom IBM ECM. Každý e-mail, ktorý bude pridaný do archívu sa automaticky pridá do kategórie Spravované v IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Pridať voľby do skupiny Úpravy:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Zadajte, ktoré voľby <b>Pridať</b> budú k dispozícii na paneli nástrojov Ribbon Bar zo skupiny <b>Úpravy</b>:<ul><li>Vyberte <b>Zobraziť všetky voľby pridania</b> a zobrazí sa tlačidlo Pridať spolu s akciami Pridať, ktoré máte k dispozícii v skupine Úpravy.</li><li>Vyberte <b>Skryť všetky voľby pridania</b>, ak chcete zamedziť užívateľom v pridávaní dokumentov do archívu, alebo ak chcete, aby užívatelia pridávali  dokumenty do archívu len z tímového priestoru.</li><li>Vyberte <b>Skryť pridanie pomocou akcie šablóny</b>, ak si chcete vynútiť priradenia priečinka šablón položiek a zamedziť užívateľom vo výbere inej šablóny položky.</li><li>Vyberte <b>Zobraziť len akciu Pridať so šablónou</b>, ak chcete od užívateľov vyžadovať, aby pridávali dokumenty pomocou šablón položiek.</li></ul>",
		admin_ms_show_edit_group_add_button: "Zobraziť všetky voľby pridania (predvolené)",
		admin_ms_hide_edit_group_add_button: "Skryť všetky voľby pridania",
		admin_ms_hide_add_with_entry_template: "Skryť akciu Pridať so šablónou",
		admin_ms_managed_in_ecm: "Spravované v IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Ak užívatelia zobrazia kategórie v aplikácii Microsoft Outlook, toto označenie sa zobrazí pre e-mail, ktorý bol pridaný do archívu IBM Content Manager alebo IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Názov kategórie Spravované v IBM ECM nemôže obsahovať čiarku (,) ani bodkočiarku (;).",
		admin_delete_open_docs_after_close: "Automaticky odstrániť dokumenty, keď užívatelia dokumenty zatvoria",
		admin_admin_delete_open_docs_after_close_hover_help: "Keď užívateľ otvorí dokument v IBM Content Navigator for Microsoft Office, dokument sa stiahne do užívateľovho adresára dokumentov alebo na miesto zadané v nastaveniach  sledovania súborov pre pracovnú plochu.<br><br>Vyberte túto voľbu, ak chcete odstrániť súbory, ktoré budú otvorené, nie však odhlásené, keď užívatelia dokumenty zatvoria. Výber tejto voľby vám umožňuje:<ul><li>Vynútenie súladu s  nariadeniami politík IT</li><li>Zaistiť, že užívatelia budú pracovať s najnovšími verziami dokumentov</li><li>Zredukovať množstvo diskového priestoru, ktorý sa používa na ukladanie dokumentov</li><ul>",
		admin_ms_custom_command_configuration: "Voliteľné príkazy:",
		admin_ms_custom_command_configuration_hover_help: "V aplikáciách Microsoft Office môžete do panela nástrojov IBM Content Navigator for Microsoft Office pridať maximálne štyri príkazy. Príkazy môžete použiť na otvorenie adries URL. Napríklad  môžete pridať príkaz na otvorenie služby, ktorá sa používa na vyhľadávanie užívateľov a skupín.",
		admin_ms_custom_command_dialog_title: "Upraviť vlastný príkaz",
		admin_ms_custom_command_dialog_intro_text: "Zadefinujte príkaz, ktorý môžete v aplikáciách Microsoft Office použiť na otvorenie adresy URL z panela nástrojov IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_id: "Príkaz ${0}",
		admin_ms_custom_command_available_label: "Dostupné",
		admin_ms_custom_command_available_hover_help: "Ak je adresu URL, zadefinovanú pre príkaz, potrebné kvôli údržbe previesť do režimu offline, zrušte výber začiarkavacieho políčka príkazu, aby sa príkaz nezobrazoval v Microsoft Office.<br/><br/><b>Dôležité:</b> Užívatelia sa musia z pracovnej plochy odhlásiť, aby sa mohli zmeny prejaviť IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID príkazu",
		admin_ms_custom_command_id_label: "Identifikátor",
		admin_ms_custom_command_label_label: "Návestie",
		admin_ms_custom_command_label_hover_help: "Zadajte menovku príkazu, ktorá sa zobrazí v Microsoft Office.",
		admin_ms_custom_command_description_label: "Popis",
		admin_ms_custom_command_description_hover_help: "Zadajte popis príkazu, ktorý sa zobrazí v Microsoft Office.",
		admin_ms_custom_command_url_label: "Adresa URL",
		admin_ms_custom_command_url_hover_help: "Zadajte úplnú adresu URL, ktorá sa otvorí z Microsoft Office. Adresa URL môže byť pre webovú stránku alebo službu.",
		admin_ms_custom_command_icon_label: "Ikona",
		admin_ms_custom_command_icon_hover_help: "Zadajte názov súboru ikony, ktorá sa má zobraziť, napríklad  CommandIcon.png.<br/><br/><b>Dôležité:</b> Súbor ikony z podadresára Plugins v inštalačnom adresári IBM Content Navigator for Microsoft Office musíte pridať do každého klientskeho počítača.<br/><br/>Ak sa súbor ikony nenachádza v adresári Plugins, alebo ak ikonu nezadáte, zobrazí sa predvolená ikona customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Označenie skupiny:",
		admin_ms_custom_command_group_name_hover_help: "Môžete zadať menovku skupiny, ktorá sa zobrazí pod vlastnými príkazmi na paneli nástrojov Ribbon Bar.<br/><br/>Ak menovku nezadáte, skupina bude mať menovku <b>Vlastné príkazy</b>.",
		admin_ms_ribbon_tab_label: "Označenie karty IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Zadajte názov, ktorý sa má pre kartu IBM Content Navigator for Microsoft Office zobraziť na paneli nástrojov Ribbon Bar pre Microsoft Office. Ak nezadáte názov, karta sa bude volať \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Zatvoriť panel úloh, keď užívatelia otvoria dokumenty",
		admin_ms_close_task_pane_on_open_hover_help: "Vyberte túto voľbu, ak chcete maximalizovať priestor, v ktorom môžu užívatelia vidieť dokumenty z Microsoft Office.<br/><br/>Užívatelia Microsoft Office 2010: Pre zabezpečenie, že panel úloh sa zatvorí pre všetky dokumenty, povoľte režim MDI (Multiple Document Interface) kliknutím na <b>Voľby</b> &gt; <b>Rozšírené</b> a vyčistením voľby <b>Zobraziť všetky okná v paneli úloh</b>.",
		admin_ms_open_document_options: "Možnosti otvárania dokumentov:",
		admin_ms_delete_local_file_options: "Možnosti odstraňovania lokálnych súborov:",
		admin_ms_add_and_checkin_options: "Možnosti pridávania a prihlasovania:",
		admin_ms_search_options: "Možnosti vyhľadávania:",
		admin_ms_display_options: "Možnosti zobrazenia:",
		admin_ms_bidirection_enable_label: "Povoliť podporu pre obojsmerný text",
		admin_ms_bidirection_enable_hover_help: "Vyberte túto možnosť, ak chcete, aby užívatelia mohli zadávať alebo zobrazovať text v aplikácii IBM Content Navigator for Microsoft Office v jazyku s orientáciou textu zľava doprava.",
		admin_ms_text_direction_label: "Základný smer textu pre obsah:",
		admin_ms_text_direction_hover_help: "Uveďte smer zadávania textu do vstupných polí v aplikácii IBM Content Navigator for Microsoft Office. Toto nastavenia ovplyvňuje aj zobrazenie položiek, ako sú názvy priečinkov a hodnoty vlastností.",
		admin_ms_control_threshold_label: "Minimálny počet položiek pre povolenie funkcie automatického vyhľadávania:",
		admin_ms_control_threshold_hover_help: "Funkcia automatického vyhľadávania sa štandardne povolí vtedy, keď počet položiek dosiahne 50, pre vyhľadávanie a nastavovanie vlastností, ktoré majú vopred definované hodnoty v rozbaľovacom zozname. Túto minimálnu hodnotu môžete zmeniť.",

		admin_ms_default_email_class: "Trieda, ktorá sa má použiť pri pridávaní e-mailov",
		admin_ms_default_email_class_hover_help: "Každý e-mail, ktorý sa pridá do tohto archívu z aplikácie Microsoft Outlook, sa pridá do triedy, ktorú tu určíte. Užívatelia nemôžu zmeniť túto triedu.",
		admin_ms_default_folder_class: "Trieda, ktorá sa má použiť pri vytváraní priečinkov",
		admin_ms_default_folder_class_hover_help: "Každý priečinok, ktorý sa vytvorí v tomto archíve z aplikácie Microsoft Office, sa pridá do triedy, ktorú tu určíte.  Užívatelia nemôžu zmeniť túto triedu.",
		admin_ms_default_folder_warn_title: "Triedu ${0} nemôžete použiť ako triedu, ktorá sa má použiť pri vytváraní priečinkov.",
		admin_ms_default_folder_warn_name_prop_invalid: "Vlastnosť názvu triedy nie je reťazec, pričom názov priečinka musí byť reťazec.<br />Vyberte inú triedu, ktorá sa použije pri vytváraní priečinkov, alebo v spolupráci so správcom systému IBM Content Manager zmeňte vlastnosť názvu triedy na reťazec.",
		admin_ms_default_folder_warn_req_props: "Trieda obsahuje vyžadované vlastnosti, pre ktoré nie je definovaná žiadna hodnota. Užívatelia však nemôžu nastaviť hodnoty pre vyžadované vlastnosti pri vytváraní priečinkov v aplikácii IBM Content Navigator for Microsoft Office.<br />Vyberte inú triedu, ktorá sa použije pri vytváraní priečinkov, alebo v spolupráci so správcom systému IBM Content Manager nastavte vyžadované vlastnosti ako voliteľné alebo nastavte hodnoty pre vyžadované vlastnosti.",
		admin_ms_delimiter_for_office_properties: "Oddeľovač v reťazcových vlastnostiach s viacerými hodnotami",
		admin_ms_delimiter_for_office_properties_hover_help: "Uveďte znak, ktorý sa má používať ako oddeľovač v reťazcových vlastnostiach, ktoré sa mapujú na reťazcové vlastnosti s viacerými hodnotami. Predvolene sa ako oddeľovač oddeľujúci hodnoty v množine hodnôt priraďovaných k reťazcovej hodnote s viacerými hodnotami používa znak bodkočiarka (;). Ak však niektorá reťazcová hodnota obsahuje bodkočiarku, túto reťazcovú hodnotu nebudete môcť pridať, kým nezmeníte znak oddeľovača. Oddeľovač môžete zmeniť napríklad na znak čiarky (,)",
		admin_ms_outlookPropertyRemembrance : "Zapamätať si nastavenia pridávania správ a príloh",
		admin_ms_outlookPropertyRemembrance_hover_help : "Hodnoty vlastností, umiestnenie, výbery tried a nastavenia zabezpečenia priradené k správam a prílohám sa uložia a použijú sa ako predvolené nastavenia pri pridávaní ďalších položiek.",

		admin_file_type_name_hover_help: "Kontextová pomoc pre Názov",
		admin_file_type_description_hover_help: "Kontextová pomoc pre Popis",
		admin_file_type_dialog_title: "Upraviť filter typov súborov",
		admin_new_file_type_dialog_title: "Nový filter typov súborov",
		admin_mobile_feature_dialog_title: "Súčasť",
		admin_mobile_feature_dialog_new_title: "Nová funkcia",
		admin_file_type_instructions: "Vytvorte filter, pomocou ktorého budú môcť užívatelia spresniť výsledky vyhľadávania. Do filtra môžete mapovať viaceré typy MIME.",
		admin_file_type_filter_place_holder: "Filtrovať typy MIME",
		admin_new_button_label: "Nové",
		admin_edit_button_label: "Upraviť",
		admin_delete_button_label: "Odstrániť",
		admin_copy_button_label: "Kopírovať",
		admin_verify_button_label: "Overiť",
		admin_availabe_filters_label: "Dostupné filtre",
		admin_selected_filters_label: "Vybraté filtre",

		admin_mobile_access: "Prístup z mobilnej aplikácie",
		admin_mobile_access_hover_help: "Ak chcete aplikáciu IBM Content Navigator používať na mobilnom zariadení, odporúčame, aby ste povolili užívateľom pristupovať k tejto pracovnej ploche z mobilnej aplikácie.<br /><br />Ak zakážete prístup na túto pracovnú plochu z mobilnej aplikácie, užívatelia budú môcť naďalej pristupovať k webovému klientovi zo svojich mobilných prehliadačov. Webový klient však nie je navrhnutý tak, aby sa k nemu pristupovalo z mobilných zariadení.",

		admin_mobile_access_allow_label: "Povoliť užívateľom",
		admin_mobile_allow_add_photos: "Pridávať fotografie z fotoaparátu a knižnice fotografií",
		admin_mobile_allow_add_docs: "Pridávať dokumenty a vytvárať priečinky v archíve",
		admin_mobile_allow_open_docs: "Otvárať dokumenty v iných aplikáciách",
		admin_mobile_allow_add_docs_hover_help: "Užívatelia môžu vytvoriť priečinky alebo pridať dokumenty z iných mobilných  aplikácií, ako napríklad dokument, ktorý sa pripojí k e-mailu.",
		admin_mobile_allow_open_docs_hover_help: "Užívatelia budú vyzvaní, aby vybrali aplikáciu, ktorá sa použije na zobrazenie vybratého dokumentu. Ak je k dispozícii len jedna aplikácia, použije sa táto aplikácia.",
		admin_mobile_features: "Funkcie:",
		admin_mobile_features_hover_help: "Zadajte funkcie tejto pracovnej plochy, ktoré sa majú zobraziť v mobilnej aplikácii IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nová funkcia",
		admin_mobile_move_up_button_label: "Presunúť nahor",
		admin_mobile_move_down_button_label: "Presunúť nadol",
		admin_desktop_mobile_instructions: "Sem prídu pokyny pre mobilné nastavenia",
		admin_desktop_max_number_of_docs_to_add: "Maximálny počet dokumentov na pridanie:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Uveďte maximálny počet dokumentov, ktoré môžu užívatelia súčasne pridať. Predvolený maximálny počet je 50. Maximálny počet dokumentov však môžete nastaviť až na 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maximálny počet položiek na úpravu:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Zadajte maximálny počet položiek, ktoré môžu užívatelia súčasne upraviť. Predvolený maximálny počet je 50. Maximálny počet dokumentov však môžete nastaviť až na 300.",
		admin_desktop_max_conversion_size: "Maximálne množstvo údajov pre konverzie súborov PDF (v MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Obmedzenie:</b> Toto nastavenie nie je podporované v aplikácii IBM Content Manager OnDemand.<br/><br/>Zadajte maximálne množstvo údajov, ktoré môže byť skonvertované do formátu PDF. Tento limit sa použije, keď užívatelia sťahujú položky ako súbory PDF alebo odosielajú položky cez e-mail ako súbory PDF.<br /><br />Ak nie je možné určiť veľkosť každého dokumentu, dokumenty budú skonvertované do PDF.<br/><br/>Predvolený limit je 200 MB. Nastavenie limitu nad 200 MB môže ovplyvniť výkon systému.",
		admin_desktop_timeProperties: "Časová značka:",
		admin_desktop_time_properties_hover_help: "<b>Len užívatelia IBM FileNet P8:</b> Toto nastavenie sa používa na vlastné vlastnosti a nepoužíva sa na systémové vlastnosti. Napríklad vlastnosť Modifikoval bude stále ukazovať časovú časť časovej značky, ak vyberiete <b>Zobraziť len dátumovú časť časovej značky</b>.<br/><br/>Toto nastavenie nezmení časovú značku v archíve.",
		admin_desktop_disable_time_stamp: "Zobraziť úplnú časovú značku",
		admin_desktop_enable_time_stamp: "Zobraziť len dátumovú časť časovej značky",
		admin_desktop_timezone: "Časové pásmo:",
		admin_desktop_timezone_localuser: "Zobraziť lokálne časové pásmo užívateľa",
		admin_desktop_timezone_alluser: "Zobraziť rovnaké časové pásmo pre všetkých užívateľov",
		admin_desktop_timezone_hover_help: "Môžete špecifikovať, či užívatelia budú vidieť časovú značku, ktorá je založená na ich lokálnom časovom pásme alebo či všetci užívatelia uvidia rovnakú časovú značku.<br/><br/>Toto nastavenie nezmení časovú značku v archíve. Avšak nastavenie, ktoré vyberiete, určí časové pásmo, ktoré sa použije na vytvorenie časovej značky v archíve, keď užívatelia pridajú alebo modifikujú položky.",
		admin_desktop_mobile_feature_display_label: "Zobraziť",
		admin_desktop_mobile_feature_icon_file_label: "Súbor ikony",
		admin_mobile_feature_dialog_icon_file_label: "Súbor ikony:",
		admin_mobile_feature_dialog_url_label: "Adresa URL:",
		admin_desktop_mobile_feature_name_label: "Názov",
		admin_desktop_mobile_select_feature_label: "Vybrať súčasť",
		admin_desktop_mobile_feature_icon_label: "Ikona súčasti",
		admin_desktop_share_admin_none: "Správca nie je nastavený.",
		admin_desktop_share_admin_edit_label: "Nastaviť správcu...",
		admin_browse_icon: "Ikona prehľadávania",
		admin_search_icon: "Ikona vyhľadávania",
		admin_favorites_icon: "Ikona obľúbených položiek",
		admin_casesearch_icon: "Ikona prípadu",
		admin_datacap_icon: "Ikona Datacap",
		admin_system_defined: "Definované systémom",
		admin_icon_file_placeholder_text: "Umiestnenie súboru (napríklad http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Koreňový priečinok",
		admin_folder_default: "Predvolené",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Panely nástrojov",
		admin_menu_context_menus: "Kontextové ponuky",
		admin_menu_office_toolbars: "Príkazy v páse s nástrojmi aplikácií Microsoft Office",
		admin_menu_office_menus: "Kontextové ponuky v aplikáciách Microsoft Office",

		admin_file_name_label: "Názov súboru:",
		admin_exportconfiguration_security_label: "Zahrnúť užívateľov a skupiny s oprávnením na používanie tejto pracovnej plochy",
		admin_exportconfiguration_instruction: "Svoje pracovné plochy vrátane konfigurácií archívov a konfigurácií modulov plug-in súvisiacich s vybratými pracovnými plochami môžete exportovať do súboru, ktorý potom môžete importovať v inej inštancii aplikácie IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportovať pracovnú plochu",
		admin_exportconfiguration_button_label: "Exportovať",
		admin_dialog_select_all: "Vybrať všetko",
		admin_dialog_deselect_all: "Zrušiť výber",

		admin_importconfiguration_instruction: "Položky vo vybratom konfiguračnom súbore budú importované do tohto systému. Ak už však v systéme existuje položka s rovnakým identifikátorom, budete sa musieť rozhodnúť, či sa má táto položka zachovať alebo prepísať.",
		admin_importconfiguration_dialog_label: "Importovať pracovnú plochu",
		admin_importconfiguration_reason_dialog_label: "Importovať príčiny revízie",
		admin_importconfiguration_button_label: "Importovať",
		admin_to_be_imported: "Importovaná položka konfigurácie",
		admin_on_target_system: "Existujúca položka v cieľovom systéme",
		admin_import_short_warning_message: "Nasledujúce položky už existujú vo vašom systéme. Vyberte položky, ktoré chcete nahradiť v tomto systéme:",
		admin_import_warning_message: "Nasledujúce položky konfigurácie majú rovnaké identifikátory ako položky, ktoré existujú v cieľovom systéme. Vyberte len tie položky, ktoré chcete importovať a prepísať v cieľovom systéme.<br /><br />Ak nechcete prepísať položku konfigurácie, vytvorte kópiu položky v inštancii, z ktorej ste exportovali pracovnú plochu, dajte jej iný identifikátor a priraďte ju k pracovnej ploche. Exportujte znova pracovnú plochu a potom ju importujte v tejto inštancii.",
		admin_choose_file_to_import_label: "Vyberte súbor, ktorý chcete importovať:",
		admin_download_imported_log: "Stiahnuť správu",
		admin_desktop_import_summary: "Zhrnutie importovania pracovnej plochy",
		admin_reason_import_summary: "Zhrnutie importovania príčiny revízie",
		admin_rba_import_summary: "Zhrnutie importovania administračných rolí",
		admin_import_open_tabs_checking: "Aby ste mohli pracovné plochy importovať, musíte najprv v administračnom nástroji zatvoriť všetky karty okrem karty <bold>Pracovné plochy</bold>.",
		admin_import_no_conflict: "Budú importované nasledujúce položky:",
		admin_desktop_invalid: "Neplatná pracovná plocha",
		admin_desktop_warning: "Táto pracovná plocha sa uložila s varovaniami.",
		admin_repos_warning: "Tento archív sa uložil s varovaniami.",
		admin_config_type_icon: "Ikona typu položky konfigurácie",

		admin_approval_workflow: "Pracovný tok schvaľovania",
		admin_approval_workflow_hover: "Umožňuje užívateľom spúšťať vopred definovaný pracovný tok schvaľovania. Pracovný tok schvaľovania môžete zakázať, aby užívatelia mohli spustiť svoj vlastný pracovný tok schvaľovania definovaný odberom. Pracovný tok schvaľovania je predvolene povolený.<br><br><b>Dôležité:</b> Ak povolíte pracovný tok schvaľovania, musíte sa uistiť, že k archívu boli pridané vopred definované definície pracovného toku (ICNParallelDocumentApproval.pep alebo ICNSequentialDocumentApproval.pep) a tieto definície boli prenesené do systému Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Nemôžete určiť užívateľov alebo skupiny s prístupom k tejto pracovnej ploche.",
		admin_cannot_add_desktop_members_error_explanation: "Nemáte potrebné oprávnenia na získanie informácií o užívateľoch a skupinách.",
		admin_cannot_add_desktop_members_error_userResponse: "Prihláste sa s iným menom užívateľa alebo požiadajte správcu systému IBM Content Manager, aby vám udelil oprávnenie UserACLOwner, ktoré sa vyžaduje pri získavaní informácií o užívateľoch a skupinách.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Nemôžete vyberať užívateľov a skupiny.",
		admin_cannot_select_users_groups_error_explanation: "Nemáte potrebné oprávnenia na získanie informácií o užívateľoch a skupinách.",
		admin_cannot_select_users_groups_error_userResponse: "Prihláste sa s iným menom užívateľa alebo požiadajte správcu systému IBM Content Manager, aby vám udelil oprávnenie UserACLOwner, ktoré sa vyžaduje pri získavaní informácií o užívateľoch a skupinách.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Nenašiel sa klient OAuth2.",
		oauth_client_not_found_error_explanation: "Identifikátor klienta OAuth2 ${0} sa nenašiel.",
		oauth_client_not_found_error_userResponse: "Obráťte sa na správcu systému a upozornite ho na skutočnosť, že sa identifikátor klienta OAuth2 nenašiel.",
		oauth_client_not_found_error_adminResponse: "Skontrolujte konfiguráciu archívu a uistite sa, že obsahuje správny identifikátor klienta OAuth2.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Nepodarilo sa prihlásiť do archívu.",
		oauth_login_failed_error_explanation: "Pokus o prihlásenie do archívu ${0} nebol úspešný.",
		oauth_login_failed_error_userResponse: "Uistite sa, že ste zadali správny identifikátor užívateľa a heslo, a skúste znova.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Vyskytla sa chyba pri pokuse prihlásiť sa do služby ${0}.",
		oauth_error_return_error_explanation: "Pokus o autorizáciu ${0} nebol úspešný.",
		oauth_error_return_error_userResponse: "Obráťte sa na správcu systému a poskytnite mu nasledujúce informácie: Pokus o autorizáciu ${0} zlyhal a vrátilo sa nasledujúce chybové hlásenie: <br>${1}<br><b>chyba:</b> ${2}.<br><b>popis:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Ďalšie informácie o chybe nájdete v protokolových súboroch webového aplikačného servera.  Bližšie informácie o protokolových súboroch nájdete v téme &quot;Protokolové súbory servera IBM Content Navigator&quot; v službe IBM Knowledge Center. Pokúste sa vyriešiť problém na základe informácií o pokuse o autorizáciu ${0} a uistite sa tiež, že je povolená autentifikácia OAuth2.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Cieľová aplikácia OAuth",
		oauth_error_return_error_1: "chybová_správa",
		oauth_error_return_error_2: "chyba",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Neznáme chybové hlásenie OAuth.",

		delete_share_permission_error: "Zdieľanie sa neodstránilo.",
		delete_share_permission_error_explanation: "Nemáte vyžadované oprávnenia na odstránenie zdieľania.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Túto položku nemôžete zdieľať.",
		class_not_support_share_error_explanation: "Trieda ${0} nebola nakonfigurovaná tak, aby podporovala zdieľanie.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Túto položku nemôžete zdieľať.",
		rbr_not_support_share_error_explanation: "Do položky bol pridaný citlivý obsah.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Zariadenie, z ktorého sa užívateľ pokúša prihlásiť, nemá autorizáciu na prístup ku kontu užívateľa.",
		box_oauth_error_invalid_request: "Z požiadavky chýba vyžadovaný parameter, obsahuje neplatnú hodnotu parametra, zahŕňa viacero výskytov toho istého parametra alebo táto požiadavka nemá správny formát.",
		box_oauth_error_unsupported_response_type: "Autorizačný server nepodporuje získavanie autorizačného kódu prostredníctvom tejto metódy.  Skontrolujte hodnotu parametra code v požiadavke.",
		box_oauth_error_access_denied: "Vlastník prostriedku alebo autorizačný server zamietli požiadavku.",
		box_oauth_error_temporarily_unavailable: "Počet požiadaviek z vášho zariadenia bol obmedzený. Buď musíte znížiť počet požiadaviek o autorizáciu, alebo počkajte chvíľu.",
		box_oauth_error_unknown: "Neznáme chybové hlásenie zo služby Box.",

		admin_default_search_type: "Predvolený typ vyhľadávania",
		admin_default_search_type_hover: "Určte, ktorá možnosť bude predvolene vybratá v poli <b>Hľadať</b> v ponuke <b>Možnosti vyhľadávania</b>.",
		admin_default_search_type_documents: "Dokumenty",
		admin_default_search_type_folders: "Priečinky",
		admin_default_search_type_folders_and_documents: "Dokumenty a priečinky",

		admin_restricted_search_type: "Povoliť vyhľadávanie pre",
		admin_restricted_search_type_hover: "Užívatelia môžu predvolene vyhľadávať dokumenty aj priečinky. Ak chcete skryť možnosť Vyhľadávanie a obmedziť vyhľadávanie na dokumenty, vyberte možnosť Dokumenty a zrušte označenie možnosti Priečinky.</br></br> Ak povolíte vyhľadávanie dokumentov aj priečinkov, vyberte predvolenú možnosť pri otvorení panela vyhľadávania.",
		admin_restricted_search_type_documents: "Dokumenty",
		admin_restricted_search_type_folders: "Priečinky",
		admin_restricted_search_type_folders_and_documents: "Dokumenty a priečinky",

		admin_default_search_version: "Predvolená verzia pri vyhľadávaní",
		admin_default_search_version_hover: "Určte možnosť, ktorá bude predvolene vybratá v poli <b>Verzia</b> v ponuke <b>Možnosti vyhľadávania</b>.",

		admin_all_classes_search: "Vyhľadávať vo všetkých triedach",
		admin_all_classes_search_hover: "Určte, či môžu užívatelia vyhľadávať naprieč rôznymi triedami, a súčasti, ktoré sa majú zahrnúť do vyhľadávania dokumentov.",
		admin_all_classes_search_removed_hover: "Možnosti vyhľadávania vo všetkých triedach nie sú k dispozícii, pretože kontextový parameter allPseudoClassHidden v súbore web.xml aplikácie Navigator je nastavený na hodnotu true.",
		admin_all_classes_search_hide: "Odstrániť možnosť vyhľadávania vo všetkých triedach",
		admin_all_classes_search_documents_only_documents: "Vyhľadávanie dokumentov sa vzťahuje iba na dokumenty, uložené vyhľadávania a šablóny položiek",
		admin_all_classes_search_documents_non_folders: "Vyhľadávanie dokumentov sa vzťahuje na všetky položky, ktoré nie sú typu Priečinok",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Stromový pohľad:",
		admin_feature_config_tree_view_hoverhelp: "Zadajte, či užívatelia môžu pristúpiť k zoznamu priečinkov v archíve prostredníctvom panela Prehľadávať. Ak skryjete panel Prehľadávať, užívatelia musia zoznam obsahu použiť na navigáciu do priečinkov v archíve.",
		admin_feature_config_selected_repositories_label: "Archívy:",
		admin_feature_config_selected_repositories_hoverhelp: "Vyberte archívy, ku ktorým budú mať užívatelia prístup v tomto komponente.",
		admin_feature_config_selected_repositories_select_state_hdr: "Vyberte archív",
		admin_feature_config_selected_repositories_name_hdr: "Názov archívu",
		admin_feature_config_selected_repositories_show_hdr: "Zobraziť",
		admin_feature_config_invalid_icon_title: "V komponente vám chýbajú niektoré povinné nastavenia",
		admin_feature_config_view_select_hdr: "Vyberte zobrazenie",
		admin_feature_config_view_hdr: "Zobrazenie",
		admin_feature_config_view: "Zobrazenie",
		admin_feature_config_views: "Zobrazenia:",
		admin_feature_config_views_hoverhelp: "Určte, ktoré zobrazenia môžu užívatelia použiť v zozname obsahu. Tieto zobrazenia sú zobrazené v rovnakom poradí v akom sú uvedené v zozname. Prvé vybraté zobrazenie je predvolené zobrazenie pre komponent.<br><br><b>Dôležité:</b> Ak povolíte zobrazenie Filmový pás, musíte nakonfigurovať zobrazovač konverzie na HTML, aby sa zobrazil náhľad dokumentov.",

		admin_custom_dialog_name: "Názov:",
		admin_custom_dialog_value: "Hodnota:",
		admin_custom_setting_name_hover: "Zadajte názov nastavenia Daeja ViewONE, ktoré chcete pridať do vašej konfigurácie. Bližšie informácie o konfiguračných nastaveniach nájdete v dokumentácii Daeja ViewONE.",
		admin_custom_setting_value_hover: "Zadajte hodnotu, ktorú chcete použiť pre konfiguračné nastavenia Daeja ViewONE. Bližšie informácie o platných hodnotách konfiguračných nastavení nájdete v dokumentácii Daeja ViewONE.",

		entry_template_name_required_message: "Pole názvu v nastaveniach šablóny položky je povinné.",
		entry_template_name_invalid_message: "Pole názvu v nastaveniach šablóny položky nemôže obsahovať  nasledujúce znaky: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Keď boli pre zdieľanie vybratí špecifickí užívatelia alebo skupiny  pomocou poľa v nastaveniach šablóny položky, potom musíte zadať aspoň jedného užívateľa alebo skupinu.",
		entry_template_no_permission_to_save_to_teamspace_message: "Nemáte oprávnenie na pridanie šablón položiek do tímového  priestoru (${0}), ktorý bol v nastaveniach šablóny položky vybratý z poľa Uložiť do.",
		entry_template_save_in_destination_required_message: "Musíte špecifikovať predvolené ukladanie v lokalite v časti <b>Nastaviť miesto ukladania položiek</b>.",
		entry_template_save_in_destination_must_select_folder: "Ak skryjete pole <b>Uložiť do</b> a vyžadujete od užívateľov, aby pridali nové položky do priečinka, musíte vybrať priečinok v poli <b>Predvolené ukladanie v lokalite</b> v časti <b>Nastaviť miesto ukladania položiek</b>.",
		entry_template_what_to_save_required_message: "Vo voľbách nastavenia vyberte aspoň jednu možnosť pre to čo chcete ukladať.",
		entry_template_custom_workflow_empty_message: "Ak vyberiete možnosť <b>Voliteľný pracovný tok...</b>, musíte vyhľadať a vybrať pracovný tok, ktorý chcete použiť.",

		entry_template_new: "Nová šablóna položky",
		entry_template_name_hover: "Názov šablóny položky nemôže obsahovať nasledujúce znaky: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Názov šablóny položky nemôže obsahovať nasledujúce znaky: * \\ / : ? \" < > |",
		entry_template_description_hover: "Uveďte popis, na základe ktorého budú môcť užívatelia odlíšiť túto šablónu položky od ostatných šablón položiek.",
		entry_tempalte_save_in_hover: "Určte umiestnenie, do ktorého sa má uložiť šablóna položky.<br><br><b>Obmedzenie:</b> Ak šablónu položky uložíte do tímového priestoru, túto šablónu položky budete môcť použiť iba v tomto tímovom priestore.",
		entry_template_inherit_hover: "Ak vyberiete túto možnosť, do zoznamu užívateľov a skupín, s ktorými sa zdieľa táto šablóna položky, sa pridajú nastavenia bezpečnosti rodičovského priečinka.",
		entry_template_builder_aria_label: "Zostavovač šablón položiek",
		entry_template_builder_layout_aria_label: "Zostavovač vlastností šablón položiek",

		entry_template_settings_document: "Definovať šablónu položky",
		entry_template_settings_folder: "Nastaviť umiestnenie úložného priestoru položky",
		entry_template_settings_folder_intro: "Uveďte umiestnenie, do ktorého sa majú ukladať položky pridané s použitím tejto šablóny položky.",
		entry_template_settings_properties: "Nastaviť vlastnosti položky",
		entry_template_settings_properties_intro: "Môžete uviesť predvolené alebo vopred definované hodnoty pre položky, ktoré sa pridajú s použitím tejto šablóny položky. Okrem toho môžete zmenou rozloženia vlastností určiť vlastnosti, ktoré sa majú zobraziť, a poradie, v akom sa majú zobraziť.",
		entry_template_settings_workflow: "Nakonfigurovať pracovný tok pre položku",
		entty_template_settings_workflow_intro: "Môžete určiť, či sa má spustiť pracovný tok po pridaní položiek s použitím tejto šablóny položky.",
		entry_template_settings_security: "Nastaviť nastavenia bezpečnosti položiek",
		entry_template_settings_security_intro: "Môžete uviesť predvolené alebo vopred definované nastavenia bezpečnosti pre položky, ktoré sa pridajú s použitím tejto šablóny položky. Užívatelia s príslušnými oprávneniami môžu zmeniť nastavenia bezpečnosti položky po jej pridaní.",
		entry_template_settings_options: "Nastaviť voľby pre položku",
		entry_template_xt_warning: "Ak uložíte zmeny do tejto šablóny položky, táto šablóna položky sa skonvertuje zo šablóny položky IBM Workplace XT na šablónu položky IBM Content Navigator. IBM Workplace XT nepodporuje šablóny položiek IBM Content Navigator.",

		entry_template_properties_edit_layout: "Upraviť rozloženie...",
		entry_template_properties_read_only: "Len na čítanie",
		entry_template_properties_hidden: "Skryté",

		entry_template_destination_show: "Zobraziť pole <b>Uložiť do</b>",
		entry_template_destination_show_hover: "Ak sa zobrazuje pole <b>Uložiť do</b>, užívatelia môžu zmeniť umiestnenie, do ktorého sa ukladajú položky.",
		entry_template_destination_hide: "Skryť pole <b>Uložiť do</b>",
		entry_template_destination_hide_hover: "Ak skryjete pole <b>Uložiť do</b>, užívatelia nebudú môcť zmeniť umiestnenie, do ktorého sa ukladajú položky.",
		entry_template_folder_save_in_default: "Predvolené umiestnenie v poli <b>Uložiť do</b>:",
		entry_template_folder_save_in_default_hover: "Určte predvolené umiestnenie, do ktorého sa majú pridávať položky s použitím tejto šablóny.<br><br>Predvolené umiestnenie, ktoré vyberiete, určuje obmedzenia správania sa šablóny položky:<ul><li>Užívatelia nebudú môcť vybrať iný archív.</li><li>Ak je predvoleným umiestnením tímový priestor, užívatelia nebudú môcť vybrať iný tímový priestor.</li></ul>Ak však k tejto šablóne položky priradíte priečinok, užívatelia môžu zmeniť umiestnenie, ktoré nakonfigurujete pre túto šablónu položky.",
		entry_template_folder_restrict_choice: "Vyžadovať od užívateľov, aby pridávali položky do predvoleného umiestnenia alebo podpriečinka v predvolenom umiestnení",
		entry_template_folder_file_in_required: "Vyžadovať od užívateľov, aby pridávali nové položky do priečinka",
		entry_template_folder_file_in_required_hover: "Ak nevyberiete túto voľbu, užívatelia budú môcť pridávať položky do koreňového priečinka archívu.<br><br><b>Obmedzenie:</b> Konfigurácia pracovnej plochy môže prinútiť užívateľov vybrať priečinok.",

		entry_template_document_type_show: "Zobraziť pole <b>Čo chcete uložiť</b>",
		entry_template_document_type_show_hover: "Ak sa bude zobrazovať pole <b>Čo chcete uložiť</b>, položky, ktoré vyberiete, sa zobrazia ako možnosti v poli <b>Čo chcete uložiť</b>.",
		entry_template_document_type_hide: "Skryť pole <b>Čo chcete uložiť</b>",
		entry_template_document_type_hide_hover: "Ak sa nebude zobrazovať pole <b>Čo chcete uložiť</b>, typ dokumentu, ktorý vyberiete, sa použije vždy, keď budú užívatelia pridávať dokumenty s použitím tejto šablóny položky.",
		entry_template_document_type: "Pomocou tejto šablóny položky sa môžu pridať nasledujúce položky:",
		entry_template_document_type_hover: "Ak sa bude zobrazovať pole <b>Čo chcete uložiť</b>, položky, ktoré vyberiete, sa zobrazia ako možnosti v poli <b>Čo chcete uložiť</b>.<br><br>Ak sa nebude zobrazovať pole <b>Čo chcete uložiť</b>, typ dokumentu, ktorý vyberiete, sa použije vždy, keď budú užívatelia pridávať dokumenty s použitím tejto šablóny položky.",

		entry_template_misc: "Ďalšie možnosti:",
		entry_template_auto_classify_show: "Automaticky klasifikovať obsah dokumentu",
		entry_template_auto_classify_show_hover: "Keď sa dokument klasifikuje v systéme FileNet Content Manager, preskúma sa obsah dokumentu s cieľom zistiť príslušnú triedu a hodnoty vlastností pre dokument.<br><br>Informáciu o tom, či je v systéme Content Platform Engine povolená klasifikácia obsahu, vám poskytne správca systému.<br><br>Ak povolíte túto možnosť, trieda a vlastnosti dokumentu sa môžu zmeniť, keď užívateľ pridá dokument do archívu.",
		entry_template_allow_duplicate_file_names: "Povoliť dokumenty s duplicitnými názvami súborov",
		entry_template_allow_duplicate_file_names_hover: "V systéme FileNet Content Manager štandardne môžete pridávať do priečinkov dokumenty s rovnakými názvami. Ak chcete, aby mal každý súbor uložený v danom umiestnení jedinečný názov, zrušte označenie tejto voľby.",
		entry_template_allow_compound_documents: "Povoliť, aby bol tento dokument rodičom zloženého dokumentu",
		entry_template_version_show: "Zobraziť voľby verzie pre pridanie a prihlásenie",
		entry_template_version_hide: "Skryť voľby verzie pre pridanie a prihlásenie",
		entry_template_version_to_add_as: "Predvolená verzia, ktorá sa má pridať ako:",
		entry_template_version_default: "Voľba predvolenej verzie:",
		entry_template_version_default_checked: "Hlavná verzia",
		entry_template_version_default_unchecked: "Vedľajšia verzia",
		entry_template_version_display: "Verzia dokumentu:",
		entry_template_version_display_show: "Zobraziť",
		entry_template_version_display_hide: "Skryť",
		entry_template_version_default_add: "Predvolená verzia, ktorá sa má pridať ako:",

		entry_template_checkin_version_show: "Zobraziť voľby verzie pre prihlásenie",
		entry_template_checkin_version_hide: "Skryť voľby verzie pre prihlásenie",

		entry_template_checkin_version_message_no_versions: "Politika verzií vybratej triedy nedovoľuje užívateľom prihlásiť novú verziu dokumentu.",
		entry_template_checkin_version_message_always_version: "Politika verzií vybratej triedy nedovoľuje užívateľom nahradiť aktuálnu verziu dokumentu.",

		entry_template_applied: "Povoliť túto šablónu položky, keď užívatelia:",
		entry_template_applied_add: "Pridajú dokumenty (vyžadované)",
		entry_template_applied_add_folder: "Vytvoriť priečinky (vyžadované)",
		entry_template_applied_checkin: "Prihlásiť",
		entry_template_applied_properties_group: "Zobraziť alebo upraviť vlastnosti:",
		entry_template_applied_properties: "V okne Vlastnosti",
		entry_template_applied_viewer: "V apletovom prezerači",
		entry_template_applied_docinfo: "V paneli s informáciami o dokumente",
		entry_template_applied_no_class_support: "Táto šablóna položky sa môže použiť na pridávanie položiek, ale nemôže sa použiť na prihlasovanie dokumentov alebo zobrazenie a upravovanie vlastností. Vybratá trieda musí byť upravená na podporu týchto situácií. Ak potrebujete použiť šablónu položky v týchto situáciách, požiadajte správcu, aby použil administračný nástroj na úpravu triedy tak, aby mohla uchovávať ID šablón položiek.",
		entry_template_applied_no_child_component_support: "Pre vybratú triedu sú definované dcérske komponenty a rozloženia vlastností. Rozloženia vlastností nepodporujú dcérske komponenty. Tieto dcérske komponenty sa nebudú zobrazovať užívateľom.",
		entry_template_applied_child_component: "Vybratá trieda obsahuje dcérske komponenty. Tieto sa budú zobrazovať užívateľom, nemôžete však nakonfigurovať dcérske komponenty v tejto šablóne položky.",

		entry_template_properties_show: "Zobraziť časť <b>Vlastnosti</b>",
		entry_tempalte_properties_show_hover: "Ak sa bude zobrazovať časť <b>Vlastnosti</b>, užívatelia budú môcť upraviť všetky hodnoty vlastností, ktoré sa zobrazujú v šablóne položky, pokiaľ tieto položky nie sú určené len na čítanie.",
		entry_template_properties_hide: "Skryť časť <b>Vlastnosti</b>",
		entry_template_properties_hide_hover: "Ak sa časť <b>Vlastnosti</b> nebude zobrazovať, užívatelia nebudú môcť upraviť žiadne hodnoty vlastností. Šablóna položky musí preto definovať všetky hodnoty, ktoré sa majú použiť, keď sa položky pridávajú s použitím tejto šablóny položky.",

		entry_template_security_show: "Zobraziť časť <b>Bezpečnosť</b>",
		entry_template_security_show_hover: "Ak sa bude zobrazovať časť <b>Bezpečnosť</b>, užívatelia s príslušnými oprávneniami budú môcť upraviť nastavenia bezpečnosti položky.",
		entry_template_security_hide: "Skryť časť <b>Bezpečnosť</b>",
		entry_template_security_hide_hover: "Ak sa časť <b>Bezpečnosť</b> nebude zobrazovať, užívatelia nebudú môcť upraviť nastavenia bezpečnosti položiek. Šablóna položky musí preto definovať všetky nastavenia bezpečnosti, ktoré sa majú použiť, keď sa položky pridávajú alebo upravujú.",
		entry_template_security_policy: "Bezpečnostná politika:",
		entry_template_security_policy_hover: "V závislosti od vybratej bezpečnostnej politiky môže bezpečnostná politika:<br><ul><li>Nahradiť oprávnenia nastavené v časti <b>Nastaviť nastavenia bezpečnosti položky</b>.</li><li>Rozšíriť oprávnenia určené v časti <b>Nastaviť nastavenia bezpečnosti položky</b>.</li></ul>",
		entry_template_security_policy_none: "Nevybrali ste žiadnu bezpečnostnú politiku",
		entry_template_security_inherit: "Zdediť nastavenia bezpečnosti rodičovského priečinka",
		entry_tempalte_save_in_hover: "Určte umiestnenie, do ktorého sa má uložiť šablóna položky.<br><br><b>Obmedzenie:</b> Ak šablónu položky uložíte do tímového priestoru, túto šablónu položky budete môcť použiť iba v tomto tímovom priestore.",
		entry_template_security_inherit_item_security_hover: "Ak vyberiete túto možnosť, k nastaveniam bezpečnosti definovaným niektorou z nasledujúcich položiek sa pridajú nastavenia bezpečnosti rodičovského priečinka:<ul><li>Trieda, ktorá je určená v časti <b>Nastaviť nastavenia bezpečnosti položky</b></li><li>Voliteľné nastavenia bezpečnosti, ktoré ste určili v časti <b>Nastaviť nastavenia bezpečnosti položky</b></li></ul>",
		entry_template_security_change: "Nahradiť nastavenia bezpečnosti definované vybratou triedou",
		entry_template_security_change_hover: "Ak vyberiete túto možnosť, štandardne sa zobrazia nastavenia bezpečnosti, ktoré sú definované pre triedu. Potom môžete upraviť nastavenia bezpečnosti pre šablónu položky.<br><br>Ak sa bude zobrazovať časť <b>Bezpečnosť</b>, užívatelia s príslušnými oprávneniami budú môcť upraviť nastavenia bezpečnosti položky.<br><br>Ak vyberiete túto možnosť a zároveň vyberiete možnosť dedenia nastavení bezpečnosti rodičovského priečinka, všetky dediteľné oprávnenia sa pridajú k nastaveniam bezpečnosti, ktoré určíte.",
		entry_template_security_default_item_security: "Nahradiť predvolené nastavenia bezpečnosti položiek užívateľa, ktorý položku pridal",
		entry_template_security_policy_message_override: "Vybratá bezpečnostná politika je nakonfigurovaná tak, aby nahradila oprávnenia, ktoré sú uvedené v časti Nastaviť nastavenia bezpečnosti.",
		entry_template_security_policy_message_add: "Vybratá bezpečnostná politika je nakonfigurovaná tak, aby rozšírila oprávnenia, ktoré sú uvedené v časti Nastaviť nastavenia bezpečnosti.",
		entry_template_security_policy_preserve_true_hover: "Zachová priame oprávnenie",
		entry_template_security_policy_preserve_false_hover: "Nezachová priame oprávnenie",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Konkrétne roly",
		entry_template_security_class_role_search_title: "Hľadať roly:",
		entry_template_secuirty_class_member_title: "Zoznam členov pre ${0}",
		entry_template_secuirty_class_folder_only: "Tieto oprávnenia sa vzťahujú iba na tento priečinok",
		entry_template_secuirty_class_folder_and_immediate_children: "Tieto oprávnenia sa vzťahujú na tento priečinok a na tie priamo podriadené položky, ktoré sú nakonfigurované tak, aby zdedili nastavenia zabezpečenia od tohto priečinka.",
		entry_template_secuirty_class_folder_and_all_children: "Tieto oprávnenia sa vzťahujú na tento priečinok a na všetky podriadené položky, ktoré sú nakonfigurované tak, aby zdedili nastavenia zabezpečenia od tohto priečinka. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Tieto oprávnenia sa vzťahujú na tie priamo podriadené položky, ktoré sú nakonfigurované tak, aby zdedili nastavenia zabezpečenia od tohto priečinka.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Tieto oprávnenia sa vzťahujú na všetky podriadené položky, ktoré sú nakonfigurované tak, aby zdedili nastavenia zabezpečenia od tohto priečinka.",

		entry_template_class_security_message_no_override: "Bezpečnosť vybratej triedy nedovoľuje užívateľom nahradiť bezpečnosť.",
		entry_template_class_security_required_privileges: "<b>Dôležité</b>: Keď nahradíte bezpečnosť vybratej triedy, užívatelia, ktorí pridávajú položky s použitím tejto šablóny položky, musia mať privilégiá ItemSetACL a UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Pracovný tok po sebe nasledujúcich vzorov",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Pracovný tok paralelne idúcich vzorov",
		entry_template_workflow_type_existing: "Vlastný pracovný tok...",
		entry_template_workflow_launch_prompt: "Spýtať sa užívateľov, či sa má spustiť pracovný tok",
		entry_template_workflow_launch_auto: "Automaticky spustiť pracovný tok",
		entry_template_workflow_modify_launch: "Umožniť užívateľom úpravu kroku spustenia",
		entry_template_workflow_modify_launch_hover: "Vyberte túto voľbu, ak chcete, aby užívatelia mohli zmeniť spôsob spustenia pracovného toku.",

		entry_template_optionsButton_title: "Upraviť",
		entry_template_optionsButton_readonly_title: "Zobraziť priradenie",
		entry_template_optionsDialog_title: "Nastavenia priradení priečinka",
		entry_template_removeButton_title: "Odstrániť",
		entry_template_addButton_title: "Pridať",
		entry_template_selected_entry_templates: "Vybraté šablóny položiek",
		entry_template_docs_added_to_template_destination: "Dokumenty sa budú pridávať do cieľa, uvedeného v šablóne položky.",
		entry_template_docs_added_to_other_object_store: "Táto šablóna položky pridáva položky do skladu objektov ${0}.",
		entry_template_inherited_entry_templates_label: "Chcem: ",
		entry_template_inherited_entry_templates: "Dediť priradenia šablóny položky z priečinka: ",
		entry_template_inherited_entry_templates_not: "Vytvoriť nové priradenia pre tento priečinok",
		entry_template_inherited_folder_path: "Šablóny položiek zo zoznamu vybratých šablón položiek  sú priradené nasledujúcemu priečinku: ${0}. <br> Cesta k priečinku je ${1}.",
		entry_template_folder_associations_title: "Priradiť šablóny položiek",
		entry_template_folder_associations_intro: "Ak šablónu položky priradíte priečinku, užívatelia musia šablónu položky použiť na pridanie položiek do priečinka. Ak priečinku priradíte viaceré šablóny položiek, užívatelia si môžu vybrať, ktorú šablónu položky budú používať.",
		entry_tempalte_folder_associations_entrytemplate: "Šablóna položky: ",
		entry_template_avaliable_entry_templates: "Dostupné šablóny položiek",
		entry_template_fileTypes_intro_title: "Povolené typy súborov:",
		entry_template_fileTypes_intro: "Šablónu položky môžete predvolene použiť na pridanie ľubovoľného typu dokumentu  do archívu. Ak si však vyberiete jeden alebo viaceré typy súborov, šablóny položiek budú k dispozícii len vtedy, keď užívatelia pridajú dokumenty, ktoré sa zhodujú s niektorým zo zadaných typov súborov.",
		entry_template_fileTypes: "Typy súborov",
		entry_template_fileType_error: "Neplatné typy súborov boli vybraté pre jedno alebo viaceré priradenia šablón položiek. Najprv musíte odstrániť neplatné typy súborov, aby ste mohli uložiť tieto priradenia šablóny položky.",
		entry_template_fileTypes_any_type_of_file: " Ľubovoľný typ súboru",
		entry_template_description_label: "Popis",
		entry_template_ItemInfoPrefix: "Priradiť k: ",
		entry_template_TargetObjectStoreName: "Cieľový sklad objektov",
		entry_template_class: "Trieda",
		entry_template_current_folder_as_parent: "Použiť priečinok ako cieľ",
		entry_template_view_minetypes: "Zobraziť typy MIME",
		entry_template_avaliable_MIME_types: "Dostupné typy súborov",
		entry_template_selected_MIME_types: "Vybraté typy súborov",
		entry_template_MIME_type_column: "Názov kategórie typu súborov",
		entry_template_file_type_not_existing: "Odstráňte neplatné typy súborov.",
		entry_template_MIME_types: "Typy MIME:",
		entry_template_MIME_types_info_dialog_title: "Typy MIME pre",
		entry_template_destination_label: "Pridať dokumenty do: ",
		entry_template_destination_help: "Zadajte, kde sa do archívu budú dokumenty ukladať, keď užívatelia pridajú  dokumenty do tohto priečinka pomocou vybratej šablóny položky.",
		entry_template_radioButton_folder_destination: "Vybratý priečinok",
		entry_template_radioButton_template_destination: "Cieľ uvedený v šablóne položky",
		entry_tempalte_teamspace_default: "Predvolená šablóna položky",
		entry_template_folder_associations_save_new: "Upravili ste niekoľko priradení šablón položiek. Chcete zatvoriť toto okno bez uloženia vašich zmien?",
		entry_template_mode_binding_label: "Vlastnosti",
		entry_template_columns_className: "Názov triedy",
		entry_template_columns_type: "Typ šablóny",
		entry_template_columns_workflow: "Názov pracovného toku",
		entry_template_columns_destination: "Cieľ",
		entry_template_association_less_than_record: "Existujú šablóny položiek (${0}), ktoré nie sú uvedené v paneli Vybraté šablóny položiek. Nemáte oprávnenie na ich zobrazenie alebo mohli byť odstránené. Bližšie informácie vám poskytne správca systému.",
		/* Request */

		progress_message_general: "Pracuje sa...",
		cancel_message_general: "Akcia bola zrušená.",
		ie8_not_supported_browser: "Prehliadač IE8 nie je podporovaný.",
		progress_message_getDesktop: "Načítava sa pracovná plocha...",
		progress_message_getActions: "Načítavajú sa akcie...",
		progress_message_getViewers: "Načítava sa pracovná plocha...",
		progress_message_logon: "Prihlasuje sa...",
		progress_message_logoff: "Odhlasuje sa...",
		progress_message_getContentClasses: "Získavajú sa triedy...",
		progress_message_openContentClass: "Získavajú sa podrobnosti o triede...",
		progress_message_od_getCabinets: "Získavajú sa kabinety súborov...",
		progress_message_getSearchTemplates: "Získavajú sa vyhľadávania...",
		progress_message_od_getTemplates: "Získavajú sa priečinky...",
		progress_message_od_openCabinet: "Získavajú sa priečinky...",
		progress_message_openSearchTemplate: "Otvára sa vyhľadávanie...",
		progress_message_od_openTemplate: "Otvára sa priečinok...",

		progress_message_getWorklists: "Získavajú sa pracovné zoznamy...",
		progress_message_getWorkItems: "Získavajú sa pracovné položky...",
		progress_message_getNextWorkItems: "Získavajú sa pracovné položky...",
		progress_message_getStepParameters: "Získavajú sa informácie o pracovnej položke...",
		progress_message_getStepAttachmentItems: "Získavajú sa informácie o prílohe...",
		progress_message_getDependentParameters: "Prebieha získavanie informácií o vlastnosti...",

		progress_message_p8_getProcessApplicationSpaces: "Získavajú sa aplikačné priestory...",
		progress_message_p8_getProcessRoles: "Získavajú sa roly procesov...",
		progress_message_p8_getProcessInbaskets: "Získavajú sa zoznamy úloh...",
		progress_message_p8_getProcessorInformation: "Získavajú sa informácie o procese...",
		progress_message_p8_getFilterCriteria: "Získava sa filter zoznamu úloh...",
		progress_message_p8_getLaunchParameters: "Získavajú sa informácie o pracovnej položke...",
		progress_message_p8_getStepAttachments: "Získavajú sa prílohy pracovnej položky...",
		progress_message_p8_getSubscriptions: "Získavajú sa registrácie pracovných tokov...",
		progress_message_p8_getTrackerParameters: "Získavajú sa informácie o pracovnej položke...",
		progress_message_p8_getTrackerHistory: "Získava sa história pracovných položiek...",
		progress_message_p8_getTrackerMilestones: "Získavajú sa míľniky pracovných položiek...",
		progress_message_p8_completeStep: "Dokončuje sa pracovná položka...",
		progress_message_p8_moveToInbox: "Položka sa presúva do zoznamu úloh...",
		progress_message_p8_returnToSender: "Vracia sa pracovná položka...",
		progress_message_p8_reassign: "Znova sa priraďuje pracovná položka...",
		progress_message_p8_launchWorkflow: "Spúšťa sa pracovný tok...",
		progress_message_p8_getTransferedWorkflows: "Získavajú sa informácie o pracovnom toku...",

		progress_message_cm_getProcesses: "Získavajú sa informácie o pracovnom toku...",
		progress_message_cm_completeStep: "Pokračuje sa v pracovnej položke...",
		progress_message_cm_getItemProcessInformation: "Získavajú sa informácie o pracovnom toku...",

		progress_message_search: "Vyhľadáva sa...",
		cancel_message_search: "Vyhľadávanie bolo zrušené.",
		progress_message_getContentItems: "Získavajú sa informácie o položkách...",
		progress_message_openFolder: "Otvára sa priečinok...",
		progress_message_addItem: "Vytvára sa položka...",
		progress_message_checkIn: "Prihlasuje sa položka...",
		progress_message_changePassword: "Mení sa heslo...",
		progress_message_getDefaultInstancePermissions: "Získavajú sa predvolené oprávnenia...",
		progress_message_openItem: "Získavajú sa informácie o položkách...",
		progress_message_saveItem: "Ukladajú sa informácie o položkách...",
		progress_message_getPermissions: "Získavajú sa oprávnenia...",
		progress_message_getEntryTemplates: "Získavajú sa šablóny položiek...",
		progress_message_openEntryTemplate: "Otvára sa šablóna položky...",
		progress_message_getFavorites: "Získavajú sa obľúbené položky...",
		progress_message_getFoldersFiledIn: "Získavajú sa priečinky...",
		progress_message_getDocumentVersions: "Získavajú sa verzie...",
		progress_message_getDependentAttributeInfo: "Získavajú sa informácie o atribútoch...",
		progress_message_packageForDownload: "Vytvára sa balík na stiahnutie...",
		progress_message_convertDocument: "Konvertuje sa obsah...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Prebieha získavanie typu obsahu...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Pridáva sa dokument...",

		progress_message_desktop_reload: "Klient znova načítava pracovnú plochu.<br>Môže sa zobraziť výzva, aby ste sa znova prihlásili.",
		progress_message_email: "Posiela sa e-mail...",
		cancel_message_email: "E-mail bol zrušený.",

		progress_message_p8_getOfficeOnlineTemplates: "Získavajú sa šablóny balíka Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Strom obľúbených položiek",
		favorites_content_list_label: "Zoznam obsahu obľúbených položiek",
		syncItems_tree_label: "Strom Moje synchronizované súbory",
		syncItems_content_list_label: "Zoznam Moje synchronizované súbory",
		my_checkouts_content_list_label: "Zoznam Moje odhlásené položky",
		browse_tree_label: "Prehľadávať strom",
		browse_content_list_label: "Prehľadávať zoznam obsahu",
		repository_selector_label: "Selektor archívu",
		teamspaces_content_list_label: "Zoznam obsahu tímového priestoru",
		templates_content_list_label: "Zoznam obsahu šablón",
		work_content_list_label: "Pracovný zoznam obsahu",
		work_tree_label: "Pracovný strom",
		admin_tree_label: "Strom administrácie",
		admin_tabs_label: "Záložky administrácie",
		search_tabs_label: "Záložky vyhľadávania",
		search_selector_label: "Selektor vyhľadávania",
		teamspace_browse_content_list_label: "Zoznam obsahu prehľadávania tímového priestoru",
		teamspace_search_tabs_label: "Záložky vyhľadávania tímového priestoru",

		/* Desktop */
		undo_description: "Vrátiť späť ${0}",
		redo_description: "Znova vykonať ${0}",

		/* Application Tabs */
		home: "Domov",
		repository: "Archív",
		repository_type: "Typ archívu:",
		repository_type_header: "Typ archívu",
		repository_type_any: "Všetky archívy",
		repository_type_contains_label: "Typ archívu obsahuje",
		document_info: "Informácie o dokumente",
		team: "Tím",
		administration: "Administrácia",

		/* Home Page */
		recent_activity: "Posledná aktivita",
		repos_and_wrksp: "Archívy a tímové priestory",
		workspaces: "Tímové priestory",
		repositories: "Archívy",
		templates: "Šablóny",
		favorites: "Obľúbené položky",
		my_checkouts: "Moje odhlásené položky",
		mySyncedFiles: "Moje synchronizované súbory",
		links: "Odkazy",
		name_label: "Názov",
		description_label: "Popis:",
		type_label: "Typ:",
		type_heading: "Typ",
		type_id_label: "ID typu",
		server_type_icon: "Ikona typu servera",
		server_type_heading: "Typ servera",
		server_type: "Typ servera",
		port_heading: "Číslo portu",
		port_label: "Číslo portu:",
		server_name_heading: "Názov servera",
		server_label: "Názov servera:",
		server_url_label: "Adresa URL servera:",
		id_label: "Identifikátor:",
		id_heading: "Identifikátor",
		connected_label: "Pripojený:",
		repository_label: "Archív",
		modified_label: "Upravil:",
		modified_date_label: "Upravené dňa:",
		status_label: "Stav:",
		last_modified_label: "Naposledy upravil:",

		modifier: "Upravil",
		modified_date: "Upravil o",

		/* Favorites */
		new_favorite_label: "Pridať k obľúbeným položkám",
		edit_favorite_label: "Premenovať obľúbenú položku",
		remove_favorite_label: "Odstrániť z obľúbených položiek",
		missing_alias_message: "Musíte zadať názov.",
		sync_favorite_enable_hover: "Synchronizácia tejto položky je povolená.",
		sync_favorite_disable_hover: "Táto položka sa práve nesynchronizuje.",
		sync_favorite_sync_unavailable_hover: "Synchronizácia nie je k dispozícii pre tento typ objektu.",
		sync_enable_label: "Synchronizovať túto položku",
		sync_enable_label_hover: "Táto položka sa zosynchronizuje s vašimi zariadeniami.",
		delete_favorite_confirmation_question: "Chcete odstrániť túto položku zo svojich obľúbených položiek?",
		alias_label: "Názov:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Vybratá položka sa už nachádza medzi vašimi obľúbenými položkami.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Túto položku nemôžete pridať do svojho zoznamu obľúbených položiek.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Môžete si uložiť len ${0} obľúbených položiek.",
		add_favorite_max_reached_response: "Ak si chcete túto položku uložiť do svojho zoznamu obľúbených položiek, najprv musíte odstrániť niektorú z existujúcich obľúbených položiek, a až potom môžete pridať túto položku.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Vybraté dokumenty nemožno skonvertovať do PDF.",
		download_as_pdf_max_content_error_explanation: "Na formát PDF môžete skonvertovať len ${0} MB údajov. Veľkosť vybratých dokumentov však presahuje ${0} MB.",
		download_as_pdf_max_content_error_response: "Vyberte menej dokumentov alebo vyberte menšie dokumenty a stiahnite dokumenty ako súbory PDF znova.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Vybraté dokumenty nie je možné skonvertovať na jeden súbor PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Aby ste mohli dokument s viacerými časťami skonvertovať na jeden súbor PDF, každá z týchto častí musí mať rovnaký typ MIME.",
		download_as_pdf_mimetype_check_error_response: "Vyberte iný dokument na konverziu na súbor PDF.",

		/* Activity Stream */
		show_label: "Zobraziť:",
		all_filter: "Všetky",
		notifications_filter: "Oznámenia",
		workitems_filter: "Pracovné položky",
		documentes_filter: "Dokumenty",
		all_favorites_filter: "Všetky obľúbené položky",
		folders_filter: "Priečinky",
		searches_filter: "Vyhľadávania",
		teamspaces_filter: "Tímové priestory",

		/* Repository */
		all_search_templates: "Všetky vyhľadávania",
		all_od_searches: "Všetky šablóny vyhľadávania",
		recent_searches: "Posledné vyhľadávania",
		opened_searches: "Otvorené vyhľadávania",

		all_worklists: "Všetky schránky",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Zoznam všetkých pracovných zoznamov",

		/* Teamspace */
		all_workspaces: "Všetky tímové priestory",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Zoznam všetkých tímových priestorov",
		workspace_title: "Tímový priestor",
		workspace_icon: "Ikona tímového priestoru",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Dostupné",
		workspace_stat_offline: "Nedostupné",
		workspace_stat_validate: "Vyžaduje overenie platnosti",
		workspace_stat_pendingDelete: "Čakajúce vymazávanie",
		workspace_stat_deleteError: "Neúspešné vymazávanie",

		undefined_value: "Nie je definované",
		undefined_reference_value: "Nie je definovaný žiadny odkaz.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Viac výsledkov môže byť k dispozícii na serveri.",
		search_all_data: "Vyhľadať všetky údaje.",
		search_all_teamspaces: "Hľadať vo všetkých tímových priestoroch.",
		teamspace_filter_results: "Zobrazuje ${0} výsledkov. ",
		displaying_filtered_results: "Zobrazuje filtrované výsledky. ",
		displaying_recent_results: "Zobrazujú sa len tímové priestory, ktoré boli upravené za posledných ${0} dní. Ak chcete nájsť ďalšie tímové priestory, vyfiltrujte zoznam tímových priestorov podľa názvu alebo popisu. ",
		clear_filter: "Vymazať filter.",

		/* FolderTreeModel */
		move_item_task: "Presunúť položku",
		copy_item_task: "Kopírovať položku",
		add_item_task: "Pridať položku",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Nepodarilo sa nájsť nasledujúci priečinok: ${0}. Mohol byť odstránený alebo sa priečinok nepodarilo otvoriť v tomto  zobrazení. V stromovom zobrazení kliknite na prepojenie Viac, aby ste sa mohli dostať k priečinku. Ak sa tento priečinok nezobrazí, obnovte zobrazenie zoznamu obsahu.",
		more_paging_link: "viac ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Stav",
		status_dialog_cancel_label: "Zrušiť",

		/* ErrorDialog */
		error_dialog_title: "Chyba",
		error_dialog_icon_tooltip: "Chyba",
		error_dialog_stack_trace_title: "Sledovanie zásobníka",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Potvrdenie",

		close_browser_msg: "Zatvorte okno prehliadača.",

		/* MessageDialog */
		message_dialog_title: "Informácie",
		warning_dialog_title: "Varovanie",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Víta vás aplikácia ${0}",
		server: "Archív:",
		username: "Meno užívateľa:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Zadajte meno užívateľa pre prihlásenie sa do archívu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Zadajte heslo pre prihlásenie sa do archívu.",
		password: "Heslo:",
		login: "Prihlásiť sa",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Skončila platnosť vašej relácie. Prihláste sa znova.",
		login_repository_connection_expired_message: "Skončila sa platnosť vášho pripojenia k archívu ${0}. Prihláste sa znova.",
		login_site_connection_expired_message: "Vaše pripojenie k lokalite exspirovalo. Prihláste sa znova.",
		login_new_server_message: "Zadajte meno užívateľa a heslo pre archív ${0}.",
		login_error_more_information_message: "Bližšie informácie",

		disconnect_box_account_user: "Odpojiť konto v službe Box: ${0}",
		disconnect_box_account: "Odpojiť konto v službe Box",
		disconnect_box_accounts: "Odpojiť kontá v službe Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Na prístup k archívu v službe Box sa vyžaduje pripojenie SSL.",
		login_oauth_popup_blocked: "Kontextové okno bolo zablokované. Môže byť potrebné zrušiť blokovanie kontextových okien v prehliadači, aby ste sa mohli prihlásiť.",
		login_oauth_click_here: "Ak sa do 5 sekúnd nevykoná presmerovanie, kliknite sem.",
		login_oauth_title: "Prihlásiť sa",
		login_oauth_grant_intro: "Udelenie oprávnení pre archív ${0}.",
		login_pane_oauth_click_here: "Kliknite sem a prihláste sa.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Chcete sa odhlásiť z webového klienta?",
		logout_confirmation_button: "Odhlásiť sa",

		/* ChangeLocaleDialog */
		change_locale: "Zmeniť nastavenie jazyka a miestne nastavenie",
		change_locale_use_browser_language: "Použiť nastavenie jazyka prehliadača (predvolené)",
		change_locale_use_browser_locale: "Použiť nastavenie jazyka prehliadača (predvolené)",
		change_locale_description: "Po odstránení objektov cookie prehliadača budete musieť znova nastaviť svoje nastavenie jazyka a miestne nastavenie.",
		change_locale_language_locale: "Jazyk aplikácie:",
		change_locale_language_locale_hover: "Toto nastavenie zmení jazyk textu vo webovom klientovi, ale nezmení jazyk dokumentov v aplikácii.<br><br>Predvolené nastavenie použije jazyk, ktorý je určený v konfiguračných voľbách vášho webového prehliadača.",
		change_locale_value_format_locale: "Miestne nastavenie aplikácie:",
		change_locale_value_format_locale_hover: "Miestne nastavenie určuje formát dátumov, časov a čísel vo webovom klientovi.<br><br>Predvolené nastavenie použije formáty, ktoré sú priradené k jazyku, ktorý je určený v konfiguračných voľbách vášho webového prehliadača.",
		change_locale_for_office: "Nastavenia podpory obojsmerného textu:",
		change_locale_bidi_support_flag: "Povoliť podporu obojsmerných jazykov",
		change_locale_bidi_support_flag_hover: "Keď je povolená podpora obojsmerných jazykov, užívateľ môže nastaviť  smer textu, ktorý sa používa vo vstupných poliach.  Text zadaný pre položky, ako sú napríklad priečinky, by sa zobrazoval v rovnakom smere v akom bol zadaný.",
		change_locale_base_text_direction: "Základný smer textu pre obsah:",
		change_locale_base_text_direction_hover: "Nastavte smer textu zadávaného do vstupných polí.  Tento riadi aj smer zobrazovania menoviek, ktoré užívateľ zadal ako názvy priečinkov.",
		change_locale_calendar_type: "Typ kalendára:",
		change_locale_calendar_type_hover: "Vyberte typ kalendára, ktorý sa použije pre užívateľskú reláciu.",
		change_locale_base_text_direction_default: "Predvolené",
		change_locale_base_text_direction_ltr: "Zľava doprava",
		change_locale_base_text_direction_rtl: "Sprava doľava",
		change_locale_base_text_direction_contextual: "Kontextový",
		change_locale_calendar_type_gregorian: "Gregoriánsky",
		change_locale_calendar_type_hijri: "Islamský (Hijri)",
		change_locale_calendar_type_hebrew: "Hebrejský",
		change_locale_calendar_type_Umm_al_Qura: "Islamský (Umm al-Qura)",

		/* ChangePasswordDialog */
		change_password: "Zmeniť heslo",
		change_password_title: "Zmeniť heslo",
		change_password_expired_title: "Heslo s ukončenou platnosťou",
		change_password_message: "Zadajte nové heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Platnosť vášho hesla uplynula. Zadajte nové heslo.",
		change_password_password_rules: "Pravidlá pre heslá",
		change_password_old_password: "Staré heslo:",
		change_password_new_password: "Nové heslo:",
		change_password_confirm_password: "Potvrdenie hesla:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Musíte zadať staré heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Musíte zadať nové heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Musíte potvrdiť svoje nové heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Heslá sa musia zhodovať.",

		/* GlobalToolbar */
		actions: "Akcie",
		actions_label: "Akcie:",
		open_actions_label: "Otvoriť akcie:",

		/* About Dialog */
		about_dialog_title: "Informácie",
		about_product_name_label: "Názov produktu: ",
		about_product_version_label: "Verzia: ",
		about_product_build_label: "Zostavenie: ",
		about_product_license: "Licenčné materiály - Vlastníctvo spoločnosti IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Všetky práva vyhradené. Obmedzené právomoci užívateľov zo štátnej správy USA. Používanie, kopírovanie alebo zverejňovanie podlieha obmedzeniam uvedeným v zmluve GSA ADP Schedule Contract so spoločnosťou IBM Corporation. IBM a logo IBM sú registrované ochranné známky spoločnosti International Business Machines Corporation v Spojených štátoch alebo iných krajinách. Licencia na tento Program sa udeľuje na základe podmienok licenčnej zmluvy dodanej s týmto Programom. Táto licenčná zmluva sa môže nachádzať v adresári Programu alebo v knižnici s názvom \"License\" alebo \"Non_IBM_License\", ak taká existuje, alebo sa poskytuje v tlačenej podobe. Pred použitím Programu si túto zmluvu pozorne prečítajte. Používaním Programu vyjadrujete súhlas s jej podmienkami. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Chcete vymazať vybratú položku?",
		delete_single_folder_confirmation_question: "Chcete vymazať priečinok ${0}?",
		delete_multiple_confirmation_question: "Chcete vymazať vybraté položky?<br>Počet vybratých položiek: ${0}.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Odstrániť",
		search_template_delete_confirmation_question: "Chcete vymazať vyhľadávanie ${0}?",
		search_template_opened_delete_confirmation_question: "Vyhľadávanie ${0} je otvorené. Ak vyhľadávanie odstránite, zatvorí sa.<br>Chcete vymazať toto vyhľadávanie?",
		delete_multiple_opened_search_template_confirmation_question: "Nasledujúce vyhľadávania sú otvorené: ${0}.<br>Ak vymažete tieto vyhľadávania, budú zatvorené. Chcete vymazať tieto vyhľadávania?",
		delete_large_number_items_confirmation_question: "Počet vybratých položiek na odstránenie: ${0}.<br/>Odstránenie veľkého počtu položiek môže trvať dlho.<br/>Chcete pokračovať?",
		delete_confirmation_entrytemplate: "Ak vymažete túto šablónu položky, bude to mať nasledujúci účinok na dokumenty alebo priečinky, ktoré sú priradené k tejto šablóne položky:<ul><li>Položky už nebudú priradené k šablóne položky a užívateľom sa môže zobraziť varovanie, keď budú aktualizovať položku.</li><li>Všetky vlastnosti, ktoré kontrolovala šablóna položky, ako je názov alebo poradie vlastností, sa už nebudú aplikovať na položky, ktoré sú priradené k šablóne položky.</li></ul>Chcete odstrániť túto šablónu položky?",
		delete_confirmation_entrytempalte_with_multi_items: "Šablóny položiek musia byť odstránené jednotlivo. Šablóny položiek boli odstránené zo zoznamu položiek na odstránenie. Ak chcete odstrániť šablóny položiek, musíte odstrániť každú šablónu položky samostatne.",

		/* Create/Apply/Remove Hold */
		hold: "Zámok",
		createHold: "Nové pozastavenie",
		applyHold: "Použiť pozastavenie",
		removeHold: "Odstrániť pozastavenie",
		showHolds_title: "Zobraziť pozastavenia",
		applyHoldSelectText: "Vyberte pozastavenia, ktoré chcete použiť pre vybraté položky.",
		availableHolds: "Dostupné pozastavenia:",
		removeHoldSelectText: "Vyberte pozastavenia, ktoré chcete odstrániť z vybratých položiek.",
		appliedHolds: "Použité pozastavenia:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Vytvorte nové pozastavenie, ktoré sa použije pre vybraté položky.",
		holdName: "Názov pozastavenia:",
		holdDescription: "Popis:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Musíte zadať názov pre pozastavenie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Zadaný názov pozastavenia už existuje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Názov pozastavenia nemôže obsahovať nasledujúce znaky : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Platnosť vašej relácie uplynie o ${0} min.",
		session_expire: "Ukončenie relácie",
		logoff: "Odhlásiť sa",
		extend_session: "Predĺžiť reláciu",
		admin_custom_settings: "Ďalšie nastavenia:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning je booleovská hodnota, ktorá označuje, či je povolené varovanie o exspirácii relácie, predvolená hodnota je Áno. sessionExpireWarningTime je celé číslo medzi 2 a 5, ktoré špecifikuje čas varovania o exspirovaní relácie.",
		admin_custom_setting_dialog_title_new: "Nové nastavenie",
		admin_custom_setting_dialog_title_edit: "Upraviť nastavenie",
		admin_custom_setting_dialog_hover_help: "Ďalšie parametre môžete pridať uvedením názvu a hodnoty parametra. Napríklad, môžete špecifikovať “enableSessionExpireWarning” a “Áno”, ak chcete povoliť varovanie o exspirovaní relácie.",
		admin_custom_setting_dialog_field_hover_help: "Bližšie informácie o názvoch a hodnotách parametrov nájdete v referenčnej príručke IBM Navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Táto hodnota je povinná. Hodnota nemôže obsahovať medzery a nemôže byť duplicitná.",
		admin_custom_setting_dialog_bool_valueInvalid: "Táto hodnota je povinná. Táto hodnota musí byť booleovská.",
		admin_custom_setting_dialog_int_valueInvalid: "Táto hodnota je povinná. Táto hodnota musí byť celé číslo.",
		/* Add Document Dialog */
		add_document_dialog_title: "Pridať dokument",
		add_documents_dialog_title: "Pridať dokumenty",
		add_document_general_label: "Všeobecné",
		add_document_properties_label: "Vlastnosti",
		add_document_properties_with_ellipsis_label: "Vlastnosti...",
		add_document_security_label: "Bezpečnosť",
		add_document_location_label: "Uložiť do:",
		add_document_type_label: "Čo chcete uložiť?",
		add_document_localfile_label: "Lokálny dokument",
		add_document_metadata_label: "Informácie o dokumente",
		add_document_external_label: "Prepojenie na externý dokument",
		add_document_web_link_label: "Webové prepojenie",
		add_document_saved_content_label: "Použiť uložený súbor:",
		add_document_saved_content_choice: "Uložený súbor",
		add_document_file_name_label: "Názov súboru:",
		add_document_entry_template_label: "Šablóna položky:",
		add_document_delete_file_label: "Odstrániť lokálny súbor",
		add_document_delete_file_disabled_label: "Súbory, ktoré sa nenachádzajú v adresári sledovania súborov, sa neodstránia.",
		add_document_major_version_label: "Hlavná verzia",
		add_document_major_version_hover: "Nastaví stav dokumentu na Zverejnený. Dokument bude pridaný do archívu  ako verzia 1.0. Ak voľbu nevyberiete, dokument nebude pripravený na uvoľnenie a bude pridaný ako vedľajšia verzia 0.1.",
		add_document_save_document_as_unfiled_label: "Neuložiť dokument do priečinka",
		add_document_save_document_as_unfiled_hover: "Ak vyberiete túto voľbu, tento dokument budete môcť nájsť len pomocou vyhľadávania. Nebudete ho môcť nájsť pomocou prehľadávania.",
		add_document_create_new_version_label: "Vytvoriť novú verziu",
		add_document_replace_existing_version_label: "Nahradiť existujúcu verziu",
		add_document_start_workflow_label: "Spustiť pracovný tok",
		add_document_auto_classify_label: "Klasifikovať obsah automaticky",
		add_document_add_label: "Pridať",
		add_document_cancel_label: "Zrušiť",
		add_document_document_type_label: "Trieda",
		add_document_context_info: "Podľa hodnôt, ktoré nastavíte pre vlastnosti dokumentu, budete môcť neskôr vyhľadať dokument.",
		add_documents_context_info: "Podľa hodnôt, ktoré nastavíte pre dokumenty, budete môcť neskôr vyhľadať tieto dokumenty. Ak potrebujete pre dokument zadať inú hodnotu vlastnosti, musíte ju pridať osobitne alebo po jej pridaní upravte vlastnosti dokumentu.",
		add_document_url_label: "Adresa URL:",
		add_document_template_description: "Popis šablóny:",
		add_document_select_entry_template: "Zadajte alebo vyberte šablónu položky",
		add_document_no_permission_to_associations: "Nemáte oprávnenia na používanie šablóny položky",
		add_document_no_entry_template_to_use: "Pre vybraté súbory nemôžete použiť žiadnu šablónu položky",
		add_document_no_entry_template_itemtype_permission: "Nemôžete pridať položky do tohto priečinka. Musíte vybrať šablónu položky, ale nemáte oprávnenia na prístup k žiadnej zo šablón položiek pre tento priečinok. Požiadajte správcu systému, aby vám udelil prístup k šablónam položiek pre tento priečinok.",
		add_document_appgroup_name_label: "Názov skupiny aplikácií:",
		add_document_app_name_label: "Názov aplikácie:",
		create_folder_dialog_title: "Nový priečinok",
		create_folder_context_info: "Podľa hodnôt, ktoré nastavíte pre vlastnosti priečinka, budete môcť neskôr vyhľadať tento priečinok.",
		create_folder_folder_name_label: "Názov priečinka",
		create_folder_save_folder_as_unfiled_label: "Neuložiť priečinok do iného priečinka",
		create_folder_save_folder_as_unfiled_hover: "Ak vyberiete túto voľbu, tento priečinok budete môcť nájsť len pomocou vyhľadávania. Nebudete ho môcť nájsť pomocou prehľadávania.",
		add_item_create_in_folder: "Vytvoriť v priečinku:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Názov priečinka nemôže obsahovať nasledujúce znaky: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Názov priečinka nemôže obsahovať nasledujúce znaky: \\ / a nemôže byť . alebo ..",
		invalid_box_file_name_message: "Názov súboru nemôže obsahovať nasledujúce znaky: \\ / a nemôže byť . alebo ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Názov súboru nemôže obsahovať nasledujúce znaky: \\ / : * ? \" < > |",
		external_document_placeholder: "Zadajte adresu URL dokumentu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Farbu musíte zadať ako 3 miestne alebo 6 miestne šestnástkové číslo, napríklad #000 alebo  #000000.",
		add_document_unfiled: "${0}, nezaradené",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Pridať dokument pomocou šablóny položiek",
		add_document_using_template_context_info: "Keď dokument pridáte s použitím šablóny položiek, vami zadané hodnoty pre dokument budú konzistentné.",
		add_documents_using_template_dialog_title: "Pridať dokumenty s použitím šablóny položky",
		add_documents_document_name_is_file_name_hint: "Pre túto vlastnosť bude použitý názov súboru",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nový priečinok s použitím šablóny položiek",
		create_folder_using_template_context_info: "Keď priečinok vytvoríte s použitím šablóny položiek, vami zadané hodnoty pre priečinok budú konzistentné.",

		add_documents_batch_results_dialog_title: "Dokumenty neboli pridané do archívu",
		add_documents_batch_results_dialog_context_info: "Nasledujúce dokumenty neboli pridané do archívu. Informácie o tom, prečo sa dokument nepodarilo pridať do archívu, získate výberom dokumentu a kliknutím na položku Podrobnosti.",
		add_documents_batch_results_dialog_filename_col_hdr: "Názov súboru",
		add_documents_batch_results_dialog_status_col_hdr: "Stav",
		add_documents_batch_results_dialog_message_col_hdr: "Správa",
		add_documents_batch_results_status_error: "Chyba",
		add_documents_batch_results_status_cancelled: "Zrušené",
		add_documents_batch_results_status_cancelled_msg: "Dokument nebol pridaný, pretože požiadavka bola zrušená.",

		add_documents_batch_status_title: "Pridávanie dokumentov",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Pridáva sa súbor ${0} z ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Chyby: ${0}",
		add_documents_batch_status_completing_msg: "Proces sa zastaví po pridaní tohto dokumentu.",

		add_documents_status_uploading_msg: "Nahráva sa súbor ${0} z ${1}...",
		add_documents_status_adding_msg: "Pridáva sa súbor ${0} z ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Šablóna položky bola nakonfigurovaná v inej aplikácií a je  nakonfigurovaná, aby vždy dokumenty deklarovala ako záznamy. Toto nastavenie sa však bude ignorovať, pretože webový klient nepodporuje deklarovanie dokumentov ako záznamy.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Šablóna položky bola nakonfigurovaná v inej aplikácii a je  nakonfigurovaná, aby vám umožnila rozhodnúť sa, či tento dokument budete deklarovať ako záznam. Toto nastavenie sa však bude ignorovať, pretože webový klient nepodporuje deklarovanie dokumentov ako záznamy.",
		no_selection: "&lt;Vybrať&gt;",

		batch_results_dialog_details_label: "Podrobnosti",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Hodnota je neplatná. Hodnota musí predstavovať globálne jedinečný identifikátor (GUID), napríklad: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Hodnota je neplatná. Hodnota musí byť číslom s pohyblivou desatinnou čiarkou, napríklad  1,2 alebo 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Hodnota je neplatná. Hodnota musí byť vo formáte ${0}, napríklad ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Hodnota je neplatná. Hodnota musí byť desiatkovou hodnotou, napríklad 1,2 alebo 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Hodnota je neplatná. Hodnota musí byť celým číslom, napríklad 5 alebo 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Hodnota je neplatná. Hodnota môže obsahovať iba abecedné znaky, ako sú a-z a A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Hodnota je neplatná. Hodnota môže obsahovať iba alfanumerické znaky, ako sú a-z, A-Z a 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Hodnota je neplatná. Hodnota môže obsahovať iba číselné znaky, napríklad 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Hodnota je neplatná. Hodnota môže obsahovať iba nasledujúce znaky: a-z, A-Z, 0-9, [medzera] a `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Hodnota je neplatná. Hodnota musí predstavovať dátum v nasledujúcom formáte: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Hodnota je neplatná. Hodnota musí predstavovať čas v nasledujúcom formáte: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Hodnota je neplatná. Vyberte hodnotu v roletovej ponuke.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Hodnota je neplatná.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Hodnota je neplatná. Hodnota musí mať nasledujúci formát: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Táto hodnota je povinná.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Hodnota je pridlhá. Vlastnosť podporuje maximálnu dĺžku ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Hodnota je príliš krátka. Vlastnosť podporuje minimálnu dĺžku ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Hodnota je mimo rozsah. Hodnota musí byť číslo s pohyblivou desatinnou čiarkou v rozsahu ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Hodnota je mimo rozsah. Hodnota musí byť desiatkové číslo v rozsahu ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Hodnota je mimo rozsah. Hodnota musí byť celé číslo v rozsahu ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Hodnota musí predstavovať dátum v rozsahu ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Hodnota je mimo rozsah. Hodnota musí predstavovať dátum v rozsahu ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Hodnota je mimo rozsah. Hodnota musí predstavovať čas v rozsahu ${0} až ${1}.",
		property_and: "a",

		property_invalidValueOrRequired: "Nasledujúca hodnota je neplatná alebo povinná: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Vlastnosti",
		edit_properties_dialog_info: "Môžete si zobraziť alebo upraviť vlastnosti tejto položky. Ak máte príslušné  oprávnenia, môžete upraviť aj ich bezpečnosť. Nemôžete však zmeniť systémové charakteristiky.",
		edit_properties_od_dialog_info: "Môžete si zobraziť alebo upraviť vlastnosti tejto položky. Nemôžete však zmeniť systémové charakteristiky.",
		system_properties_title: "Systémové vlastnosti",
		custom_properties_title: "Vlastnosti",
		/* Folder collaboration tab */
		box_permission_permission: "Oprávnenie",
		box_permission_permissions: "Oprávnenia",
		box_permission_editor: "Editor",
		box_permission_owner: "Vlastník",
		box_permission_co_owner: "Spoluvlastník",
		box_permission_viewer_uploader: "Zobrazovanie, nahrávanie",
		box_permission_previewer_uploader: "Zobrazovanie ukážky, nahrávanie",
		box_permission_viewer: "Prezeranie",
		box_permission_previewer: "Zobrazenie ukážky",
		box_permission_uploader: "Nahrávanie",
		box_permission_add: "Pridať",
		box_permission_upload: "Nahrávanie",
		box_permission_download: "Sťahovanie",
		box_permission_preview: "Zobrazenie ukážky",
		box_permission_view: "Zobrazenie",
		box_permission_send_links: "Odoslanie prepojenia len na prezeranie",
		box_permission_create_subfolders: "Vytváranie podpriečinkov",
		box_permission_create_tasks: "Vytváranie úloh",
		box_permission_add_comments: "Pridávanie komentárov",
		box_collaboration_invite_placeholder: "Zadajte meno, e-mail alebo skupinu na pozvanie",
		box_collaboration_invite_placeholder_non_admin: "Uveďte e-mailovú adresu pozvanej osoby",
		box_collaboration_invalid_email: "Zadajte platnú e-mailovú adresu",
		box_collaboration_user_already_present: "Zadaný užívateľ už spolupracuje na priečinku",
		box_collaboration_user_name: "Názov",
		box_collaboration_email_address: "E-mailová adresa",
		box_collaboration_date_added: "Dátum pridania",
		box_collaboration_remove_collaboration: "Odstrániť",
		box_collaboration_remove_collaboration_title: "Odstrániť",
		box_collaboration_no_collaborators: "Nenašli sa žiadni spolupracovníci",
		box_collaboration_change_owner_title: "Zmeniť vlastníka položky",
		box_collaboration_change_owner_prompt: "Keď tohto spolupracovníka nastavíte ako vlastníka priečinka, vy sa stanete editorom a už nebudete vlastníkom priečinka. Všetci spolupracovníci, ktorí boli priamo pridaní do tohto priečinka, nájdu tento priečinok vo svojom koreňovom priečinku. Spolupracovníci, ktorí boli pridaní na úrovni rodičovského priečinka alebo na vyššej úrovni, už nebudú spolupracovníkmi. Chcete pokračovať?",
		box_collaboration_remove_self_title: "Odstrániť seba",
		box_collaboration_remove_self_prompt: "Naozaj chcete odstrániť seba samého ako spolupracovníka? Stratíte tým prístup k priečinku.",
		box_collaboration_user: "Užívateľ",
		box_collaboration_group: "Skupina",
		box_managing_users_not_configured: "Nemôžete vyhľadávať užívateľov a skupiny, pretože aplikácia Box nie je nakonfigurovaná správne. Ak chcete používať túto funkciu, obráťte sa na správcu a požiadajte ho, aby aplikáciu Box nakonfiguroval tak, aby umožňovala správu užívateľov a skupín.",
		duplicate_value_error: "Každá hodnota v tejto vlastnosti musí byť jedinečná.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Akékoľvek zmeny, ktoré vykonáte v týchto poliach sa použijú na všetky vybraté položky. Ak potrebujete zadať inú hodnotu vlastnosti pre konkrétnu položku alebo upraviť bezpečnosť položky, vlastnosti položky musíte upraviť individuálne.",
		multi_edit_properties_class_label: "Trieda:",
		multi_edit_properties_items_label: "Názvy položiek:",
		multi_edit_properties_properties_label: "Vlastnosti:",
		multi_edit_batch_status_title: "Aktualizácia vlastností",
		multi_edit_batch_status_adding_msg: "Aktualizácia položky ${0} z ${1}...",
		multi_edit_batch_status_verifying_msg: "Overovanie položky ${0} z ${1}...",
		multi_edit_batch_status_completing_msg: "Proces sa zastaví po aktualizácii tejto položky.",
		multi_edit_batch_status_validation_completing_msg: "Proces sa zastaví po overení tejto položky.",
		multi_edit_batch_results_status_error: "Chyba",
		multi_edit_batch_results_status_cancelled: "Zrušené",
		multi_edit_batch_results_status_cancelled_msg: "Položka nebola aktualizovaná, pretože požiadavka bola zrušená.",
		multi_edit_batch_results_dialog_title: "Položky neboli aktualizované",
		multi_edit_batch_results_dialog_context_info: "Tieto položky neboli aktualizované. Vyberte názov položky a kliknite na Podrobnosti pre viac informácií prečo položka nebola aktualizovaná.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Názov položky",
		multi_edit_batch_results_dialog_status_col_hdr: "Stav",
		multi_edit_batch_results_dialog_message_col_hdr: "Správa",
		multi_edit_batch_status_errors_msg: "Chyby: ${0}",
		multi_edit_batch_permission_error_text: "Zmeny vlastností nie je možné uložiť.",
		multi_edit_invalid_value_error: "Táto hodnota závisí od inej hodnoty vlastnosti a nie je platná pre všetky položky, ktoré ste vybrali.",
		multi_edit_batch_permission_error_explanation: "Nemôžete upraviť vlastnosti tejto položky, pretože nemáte dostatočné oprávnenia.",
		multi_edit_no_modifiable_properties: "Vlastnosti vybratých položiek nie je možné zmeniť. Táto situácia môže nastať vtedy, keď položka obsahuje vlastnosti určené len na čítanie alebo keď je možné upraviť iba názov alebo nadpis položky. Keď vyberiete viacero položiek, nemôžete zmeniť názov alebo nadpis týchto položiek.",
		multi_edit_mult_classes_dialog_info: "Vybraté položky sa nachádzajú v rôznych archívoch alebo patria do rozličných tried. Upraviť môžete len položky, ktoré sú v rovnakej triede alebo v rovnakom archíve. Vyberte podmnožinu položiek, ktoré chcete upraviť.",
		multi_edit_class_selector_class_heading: "Trieda",
		multi_edit_class_selector_entry_template_heading: "Šablóna položky",
		multi_edit_class_selector_repository_heading: "Archív",
		multi_edit_class_selector_items_heading: "Položky",
		multi_edit_some_classes_not_displayed: "Niektoré z vybratých položiek nie sú zahrnuté v tomto zozname, pretože položky obsahujú len vlastnosti určené len na čítanie alebo pretože položky sú v archívoch, ktoré nepodporujú vlastnosti úprav.",
		multi_edit_properties_invalid_msg: "Niektoré hodnoty vlastností nie sú platné pre všetky vybraté položky.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Táto vlastnosť je určená len na čítanie a nie je možné ju upraviť.",
		multi_edit_append_checkbox_label: "Pripojiť",
		multi_edit_append_checkbox_tooltip: "Vyberte túto voľbu, ak chcete pripojiť nové hodnoty vlastností do existujúcich hodnôt radšej ako ich nahradiť.",
		multi_edit_properties_invalid_childcomponent_msg: "Niektoré hodnoty vo vlastnosti ${0} dcérskeho komponentu ${1} sú závislé na iných vlastnostiach a už nie sú platné s výbermi, ktoré ste vykonali. Odstráňte hodnoty v dcérskom komponente ${1} alebo vlastnosti vybratých položiek upravte individuálne.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exportovať vlastnosti",
		export_properties_dialog_info: "Vyberte vlastnosti, ktoré chcete exportovať, a zadajte poradie, v akom sa majú zobrazovať.",
		export_properties_dialog_export_button_label: "Exportovať",
		export_properties_dialog_export_raw_values: "Exportovať neformátované hodnoty",

		/* Properties */
		filter_clear_tooltip: "Vymazať filter",
		properties_new_row: "Nové",
		properties_requiredClass_document_tooltip: "Vyberte dokument. Dokument musí patriť do triedy ${0}.",
		properties_requiredClass_folder_tooltip: "Vyberte priečinok. Priečinok musí patriť do triedy ${0}.",
		properties_dataType_tooltip: "Typ údajov: ${0}",
		properties_maxLength_tooltip: "Maximálna dĺžka: ",
		properties_minLength_tooltip: "Minimálna dĺžka: ",
		properties_minValue_tooltip: "Minimálna hodnota: ",
		properties_maxValue_tooltip: "Maximálna hodnota: ",
		properties_format_tooltip: "Formát: ",
		properties_description_tooltip: "Popis: ",

		properties_type_boolean_tooltip: "Boolovská hodnota",
		properties_type_date_tooltip: "Dátum",
		properties_type_time_tooltip: "Čas",
		properties_type_timestamp_tooltip: "Časová značka",
		properties_type_decimal_tooltip: "Desiatková hodnota",
		properties_type_double_tooltip: "Číslo s pohyblivou desatinnou čiarkou",
		properties_type_short_tooltip: "Celé číslo",
		properties_type_integer_tooltip: "Celé číslo",
		properties_type_long_tooltip: "Celé číslo",
		properties_type_string_tooltip: "Textový reťazec",
		properties_type_string_alpha_tooltip: "Abecedný reťazec",
		properties_type_string_alphanum_tooltip: "Alfanumerický reťazec",
		properties_type_string_ext_tooltip: "Rozšírený alfanumerický reťazec",
		properties_type_string_num_tooltip: "Číselný reťazec",
		properties_type_binary_tooltip: "Binárny",
		properties_type_object_tooltip: "Objekt",
		properties_type_reference_tooltip: "Táto vlastnosť odkazuje na inú položku v archíve.",
		properties_type_guid_tooltip: "Globálne jedinečný identifikátor",
		properties_type_group_tooltip: "Užívatelia a skupiny",
		properties_type_user_tooltip: "Užívatelia",
		properties_type_childComponent_tooltip: "Dcérsky komponent",

		properties_childComponent_minCardinalityOnly_tooltip: "Táto vlastnosť musí mať aspoň ${0} hodnôt.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Táto vlastnosť nemôže mať viac ako ${0} hodnôt.",
		properties_childComponent_minMaxCardinality_tooltip: "Táto vlastnosť musí mať aspoň ${0} hodnôt a nesmie mať viac ako ${1} hodnôt.",
		properties_childComponent_noCardinality_tooltip: "Táto vlastnosť môže mať ľubovoľný počet hodnôt.",

		properties_type_guid_example_tooltip: "napríklad {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Vyberte hodnotu zo zoznamu.",
		properties_single_select_choice_tooltip: "Vyberte hodnotu.",
		properties_multiple_select_typein_tooltip: "Zadajte jednu alebo viaceré hodnoty.",
		properties_multiple_select_choice_tooltip: "Vyberte jednu alebo viaceré hodnoty.",
		properties_not_selectable_tooltip: "Kategóriu nie je možné vybrať.",
		properties_none: "Žiadne",
		properties_none_tooltip: "Vyberte hodnotu <i>Žiadne</i>, ak chcete vymazať aktuálnu hodnotu tejto vlastnosti.",
		properties_value_empty: "Žiadna hodnota",
		properties_value_read_only: "Len na čítanie",
		properties_clear_label: "Odstrániť",
		properties_clear_tooltip: "Ak odstránite hodnotu v tomto poli, odstráni sa aj hodnota v archíve, keď kliknete na tlačidlo <b>Uložiť</b>.",
		properties_box_custom_properties: "Voliteľné vlastnosti",
		properties_box_metadata_name_in_use: "Tento názov sa už používa. Uveďte iný názov pre voliteľnú vlastnosť.",

		properties_templates: "Šablóny",
		properties_add_template: "Pridať šablónu",
		properties_remove_template: "Odstrániť",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Prihlásiť",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Prihlásiť",
		checkin_cancel_label: "Zrušiť",
		checkin_file_name_label: "Názov súboru",
		checkin_document_status_title: "Prihlásiť dokument",
		checkin_document_status_uploading_msg: "Nahráva sa súbor...",
		checkin_document_status_checkingin_msg: "Prihlasuje sa súbor...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Vyberte režim revízie",
		viewer_redaction_new_document_confirmation_question: "Chcete revízie uložiť ako nový dokument, alebo ako lokálny súbor?",
		viewer_redaction_new_version_confirmation_question: "Chcete uložiť revízie ako novú verziu?",
		viewer_redaction_new_version_confirmation_question_never: "Chcete uložiť revízie ako nový obsah?",		
		viewer_redaction_new_document_button: "Áno",
		viewer_redaction_new_document_cancel_button: "Nie",
		viewer_redaction_add_document_confirmation_question: "Chcete revízie uložiť ako nový dokument, novú verziu, či ako lokálny súbor?",
		viewer_redaction_add_document_confirmation_question_version_never: "Chcete revízie uložiť ako nový dokument, nový obsah, či ako lokálny súbor?",
		viewer_redaction_add_document_button: "Nový dokument",
		viewer_redaction_add_new_version_button: "Nová verzia",
		viewer_redaction_add_new_version_button_version_never: "Nový obsah",
		viewer_redaction_add_local_file_button: "Lokálny súbor",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Vyberte príčinu revízie",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Nepodarilo sa nájsť šablónu položky, ktorá bola použitá na pridanie tohto dokumentu do archívu. Dokument bude prihlásený do archívu bez použitia šablóny položky.",
		property_entry_template_not_retrieved_warning: "Nepodarilo sa nájsť šablónu položky, ktorá bola použitá na pridanie tohto dokumentu do archívu. Vlastnosti dokumentu sa zobrazia bez použitia šablóny položky.",
		multi_edit_entry_template_not_found_name: "[Nenájdené]",
		multi_edit_entry_template_not_retrieved_warning: "Nepodarilo sa nájsť šablónu položky, ktorá bola použitá na pridanie týchto položiek do archívu. Vlastnosti položky budú upravené bez použitia šablóny položky.",
		checkin_major_version_hover: "Zvýši číslo verzie dokumentu o jednotku a nastaví stav dokumentu na Zverejnený.  Ak voľbu nevyberiete, dokument nebude pripravený na uvoľnenie a bude prihlásený ako vedľajšia verzia.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokument nie je možné prihlásiť, pretože nie je odhlásený.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID užívateľa alebo heslo nie sú platné pre server.",
		error_bad_userid_password_userResponse: "Skontrolujte, či ste ID užívateľa a heslo zadali správne.",
		error_bad_userid_password_adminResponse: "Vrátila sa nasledujúca chyba: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "chybová_správa",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Nepodarilo sa pripojiť k webovému klientovi s nasledujúcou adresou URL: ${0}.",
		http_send_error_explanation: "Túto chybu mohol spôsobiť konfiguračný problém na webovom aplikačnom serveri alebo problém s webovou klientskou aplikáciou.",
		http_send_error_userResponse: "Pokúste sa znovu prihlásiť. Ak problém pretrváva, nahláste túto chybu správcovi systému.",
		http_send_error_adminResponse: "Vrátila sa nasledujúca chyba HTTP: ${1}.",
		http_send_error_0: "Adresa_URL_webového_klienta",
		http_send_error_1: "Chyba_HTTP",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Nepodarilo sa pripojiť k webovému klientovi s nasledujúcou adresou URL: ${0}.",
		http_error_explanation: "Možno sa budete musieť autentifikovať v bráne firewall, alebo nemusí byť kvôli problémom v sieti spustený alebo dostupný webový aplikačný server.",
		http_error_userResponse: "Ak sa musíte autentifikovať v bráne firewall, autentifikujte sa a znovu sa pokúste prihlásiť. Ak problém pretrváva, nahláste túto chybu správcovi systému.",
		http_error_adminResponse: "Vrátila sa nasledujúca chyba HTTP: ${1}.",
		http_error_0: "Adresa_URL_webového_klienta",
		http_error_1: "Chyba_HTTP",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Nepodarilo sa pripojiť k webovému klientovi s nasledujúcou adresou URL: ${0}.",
		http_response_bad_explanation: "Túto chybu mohol spôsobiť konfiguračný problém na webovom aplikačnom serveri alebo problém s webovým klientom.",
		http_response_bad_userResponse: "Pokúste sa znovu prihlásiť. Ak problém pretrváva, nahláste túto chybu správcovi systému.",
		http_response_bad_adminResponse: "Vrátila sa nasledujúca chyba: ${1}.",
		http_response_bad_0: "Adresa_URL_webového_klienta",
		http_response_bad_1: "Chyba_HTTP",
		http_response_bad_number: 2002,

		unititled_document_name: "Bez názvu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Nie je možné spustiť e-mailový aplet.",
		email_applet_init_failed_explanation: "Tento problém môže nastať, keď nemáte správne nainštalovaného a nakonfigurovaného e-mailového klienta alebo keď nemáte na svojej pracovnej stanici nainštalovanú podporovanú verziu JRE (Java Runtime Environment).",
		email_applet_init_failed_userResponse: "Ak chcete problém vyriešiť:<ul><li>Presvedčte sa, či máte nainštalovanú e-mailovú aplikáciu a či je vo vašej pracovnej stanici nastavená ako predvolený e-mailový klient.</li><li>Ak chcete zistiť, či máte na svojej pracovnej stanici nainštalovanú podporovanú verziu JRE, do okna s príkazovým riadkom zadajte nasledujúci príkaz: java -version</li></ul><p>Zoznam podporovaných verzií JRE nájdete v dokumente <i>Hardvérové a softvérové požiadavky pre aplikáciu IBM Content Navigator</i> v lokalite IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "E-mailovú aplikáciu sa nepodarilo spustiť, pretože nie je možné zaviesť súbor DLL.",
		email_applet_JNI_LOAD_FAILED_explanation: "Nie je možné zaviesť vyžadovaný súbor WCEmailAppletJNI.dll, pretože adresár temp vo vašej pracovnej stanici môže byť plný.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Presvedčte sa, či je v dočasnom adresári dostatok priestoru. Potom sa znovu  pokúste odoslať dokument z webového klienta. Súbor WCEmailAppletJNI.dll sa štandardne zavedie do dočasného adresára, ktorý je uvedený v nastaveniach webového prehliadača.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "E-mailovú aplikáciu sa nepodarilo spustiť, pretože e-mailový aplet nedokáže vytvoriť dočasný súbor.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Adresár temp vo vašej pracovnej stanici môže byť plný.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Presvedčte sa, či je v dočasnom adresári dostatok priestoru. Potom sa znovu  pokúste odoslať dokument z webového klienta.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "E-mailovú aplikáciu nie je možné spustiť, pretože e-mailový aplet nedokáže pristúpiť do dočasného adresára.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Adresár temp vo vašej pracovnej stanici môže byť plný alebo nemusíte mať príslušný prístup na zapisovanie do adresára temp.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Presvedčte sa, či má dočasný adresár dostatok priestoru  a presvedčte sa, či máte oprávnenie na zápis do dočasného adresára. Potom sa znovu  pokúste odoslať dokument z webového klienta. Ak problém pretrváva, obráťte sa na správcu systému.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E-mailový aplet nedokáže vymazať dočasný súbor.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Súbor môže používať iná aplikácia alebo sa súbor nemusí nachádzať  na vašej pracovnej stanici.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Ak súbor používa iná aplikácia, zatvorte ju. Ak sa súbor nachádza vo vašom lokálnom súborovom systéme, z dočasného adresára vo vašej pracovnej stanici odstráňte nasledujúci súbor: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Nie je možné vytvoriť prepojenie na dokument.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Archív vrátil adresu URL v neplatnom formáte.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Zatvorte webový prehliadač vrátane všetkých kariet a relácií a znova sa prihláste. Znovu sa pokúste odoslať dokument z webového klienta. Ak problém pretrváva, kontaktujte softvérovú podporu IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E-mailový aplet nedokáže pripojiť k e-mailu súbor.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Archív vrátil do dokumentu adresu URL v neplatnom formáte.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Zatvorte webový prehliadač vrátane všetkých kariet a relácií a znova sa prihláste. Znovu sa pokúste odoslať dokument z webového klienta. Ak problém pretrváva, kontaktujte softvérovú podporu IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Nie je možné vytvoriť prílohu.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E-mailový aplet nedokáže načítať adresu URL do dokumentu.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Zatvorte webový prehliadač vrátane všetkých kariet a relácií a znova sa prihláste. Znovu sa pokúste odoslať dokument z webového klienta. Ak problém pretrváva, kontaktujte softvérovú podporu IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Z archívu sa nepodarilo získať dokument.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Možno uplynul čas vyhradený pre vašu reláciu, možno nie je spustený archív alebo webový aplikačný server alebo sa mohol vyskytnúť problém v konfigurácii webového klienta.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Prihláste sa a znovu sa pokúste odoslať dokument e-mailom. Ak problém pretrváva, požiadajte správcu systému, aby skontroloval chybové protokoly archívu.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Ak ste pred odoslaním dokumentov v podobe príloh nakonfigurovali webového klienta, aby konvertoval dokumenty AFP do iného formátu, ako napríklad PDF, presvedčte sa či bola konverzia  správne nakonfigurovaná.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokument sa nepodarilo skonvertovať na PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Nástroj, ktorý sa používa na transformáciu dokumentov na PDF, nepodporuje typ súboru.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Zatvorte stránku a pokúste sa súbor znovu poslať e-mailom bez jeho konverzie do PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-mail nebol vytvorený.",
		email_applet_MAPI_USER_ABORT_explanation: "Otvorte svoju e-mailovú aplikáciu a presvedčte sa, či správne funguje. Potom sa znovu  pokúste odoslať dokument z webového klienta. Ak problém pretrváva, požiadajte správcu systému, aby prezrel protokoly udalostí vášho operačného systému.",
		email_applet_MAPI_USER_ABORT_userResponse: "Ak ste mali v úmysle zatvoriť e-mailovú aplikáciu, nevyžadujú sa žiadne ďalšie úkony. Ak chcete odoslať e-mail, prihláste sa do svojej e-mailovej aplikácie a dokument sa pokúste znovu odoslať z webového klienta.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-mail nie je možné vytvoriť.",
		email_applet_MAPI_FAILURE_explanation: "Možno nie je otvorený váš e-mailový klient alebo nie ste prihlásený.",
		email_applet_MAPI_FAILURE_userResponse: "Otvorte svoju e-mailovú aplikáciu a presvedčte sa, či správne funguje. Potom sa znovu  pokúste odoslať dokument z webového klienta. Ak problém pretrváva, požiadajte správcu systému, aby prezrel protokoly udalostí vášho operačného systému.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-mail nie je možné vytvoriť.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Nie ste prihlásený k svojmu e-mailovému klientovi. Váš e-mailový klient musí byť otvorený a vy musíte byť prihlásený, aby ste mohli odoslať správu z webového klienta.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Otvorte svojho e-mailového klienta prihláste sa. Potom sa znovu  pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-mail nie je možné vytvoriť, pretože vo vašej pracovnej stanici nie je možné vytvoriť  dočasný súbor.",
		email_applet_MAPI_DISK_FULL_explanation: "Adresár temp vo vašej pracovnej stanici môže byť plný.",
		email_applet_MAPI_DISK_FULL_userResponse: "Presvedčte sa, či je v dočasnom adresári dostatok priestoru. Potom sa znovu  pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-mail nie je možné vytvoriť kvôli nedostatku systémovej pamäte.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Možno máte otvorených priveľa aplikácií.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Zatvorte všetky nepoužívané aplikácie, a potom sa znovu pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Prístup k MAPI bol odmietnutý.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Možno vaša e-mailová aplikácia nedovoľuje alebo nepodporuje prístup do rozhrania MAPI (Messaging Application Programming Interface). MAPI je protokol pre posielanie správ, ktorý sa používa na povolenie komunikácie medzi webovým klientom a vašou e-mailovou aplikáciou.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Kontaktujte správcu systému.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Presvedčte sa či má e-mailová aplikácia nastavený prístup MAPI a či je správne nakonfigurovaný. Ak problém pretrváva, obráťte sa na IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Nie je možné vytvoriť prílohu alebo prepojenie na položku.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Možno máte otvorených priveľa relácií webového prehliadača.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Zatvorte všetky nepoužívané relácie webového prehliadača. Potom sa znovu  pokúste odoslať dokument z webového klienta. Ak problém pretrváva, obráťte sa na správcu systému.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-mail nie je možné odoslať.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Možno sa pokúšate odoslať priveľa príloh.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Vyberte menej súborov. Potom sa znovu  pokúste odoslať dokumenty z webového klienta.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-mail nie je možné odoslať.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Možno e-mail posielate príliš veľkému počtu príjemcov.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Pošlite e-mail menšiemu počtu príjemcov.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Nie je možné vytvoriť prílohu.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Niektoré vyžadované dočasné súbory mohli byť vymazané skôr ako by bolo možné vytvoriť prílohu. K tejto chybe dochádza vtedy, ak k vymazaniu cache pamäte prehliadača dôjde ešte pred odoslaním e-mailu.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Nie je možné vytvoriť prílohu.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Niektoré vyžadované dočasné súbory mohli byť vymazané skôr ako by bolo možné vytvoriť prílohu. K tejto chybe dochádza vtedy, ak k vymazaniu cache pamäte prehliadača dôjde ešte pred odoslaním e-mailu.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "E-mailová aplikácia nedokáže vytvoriť prílohu.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-mail nie je možné odoslať uvedenému príjemcovi.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Príjemca sa nemusí nachádzať v knihe adries.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Skontrolujte meno príjemcu a znovu sa pokúste dokument odoslať.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-mail nie je možné odoslať uvedenému príjemcovi.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-mailová adresa môže byť v nesprávnom formáte.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Skontrolujte, či ste zadali platnú e-mailovú adresu, a znova sa pokúste dokument odoslať.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_NO_MESSAGES_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-mail nie je možné odoslať.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-mail môže byť príliš dlhý.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Skráťte text e-mailu a znovu sa pokúste e-mail odoslať.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-mail nie je možné vytvoriť.",
		email_applet_MAPI_INVALID_SESSION_explanation: "E-mailový klient mohol zlyhať pri pokuse o vytvorenie e-mailu.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Reštartujte svojho e-mailového klienta a znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-mail mohol byť nesprávne zostavený.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-mail nie je možné odoslať uvedenému príjemcovi.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-mailová adresa môže byť v nesprávnom formáte.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Skontrolujte, či ste zadali platnú e-mailovú adresu, a dokument znovu odošlite.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E-mailový klient nedokáže vykonať požadovanú akciu.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E-mailová aplikácia vrátila neočakávanú chybu.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Znovu sa pokúste odoslať dokument z webového klienta.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Jednej z vlastností chýba požadovaný počet hodnôt.",
		error_property_cardinality_explanation: "Niektoré vlastnosti majú minimálny a maximálny počet hodnôt.",
		error_property_cardinality_userResponse: "Na určenie, ktorá vlastnosť vyžaduje minimálny počet hodnôt, použite kontextovú pomoc. Potom špecifikujte minimálny počet hodnôt a skúste znova.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Je vyžadovaný názov súboru.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Zadajte názov súboru a skúste to znovu.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Modul plug-in ${0} obsahuje chyby.",
		plugin_error_explanation: "Chyba sa vyskytla pri vyhodnocovaní JavaScript pre modul plug-in ${0}. Ak budete pokračovať v používaní webového klienta, môžete zaznamenať ďalšie chyby.",
		plugin_error_userResponse: "Kontaktujte správcu systému.",
		plugin_error_adminResponse: "Vyskytol sa problém s modulom plug-in, ktorý musí vyriešiť poskytovateľ modulu plug-in. Odporúča sa, aby ste modul plug-in odstránili z zo svojho webového klienta do doby než bude problém modulu plug-in  vyriešený.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Šablónu položky nie je možné otvoriť.",
		open_old_format_entry_template_error_explanation: "Šablóna položky používa starší formát, ktorý nie je podporovaný  vo webovom klientovi.",
		open_old_format_entry_template_error_userResponse: "Požiadajte správcu systému, aby aktualizoval šablónu položky.",
		open_old_format_entry_template_error_adminResponse: "Na uloženie aktualizovanej verzie šablóny položiek použite Application Engine alebo Workplace XT Entry Template Designer.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Šablónu položky nie je možné otvoriť.",
		open_custom_object_entry_template_error_explanation: "Webový klient nepodporuje nasledujúci typ šablóny položiek: Šablóny položiek vlastných objektov.",
		open_custom_object_entry_template_error_userResponse: "Otvorte inú šablónu položky.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Objekt elektronického formulára nie je možné otvoriť.",
		open_forms_object_error_explanation: "Webový klient nepodporuje nasledujúce typy objektov elektronických formulárov: šablóna formulára, údaje formulára, politika dokumentu a politika pracovného toku.",
		open_forms_object_error_userResponse: "Otvorte iný dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Nemôžete použiť šablónu položky ${0}.",
		entry_template_folder_restricted_error_explanation: "Šablóna položky pridá položky do priečinka ${1} a vy nemáte potrebné oprávnenia na pridávanie položiek do tohto priečinka.",
		entry_template_folder_restricted_error_userResponse: "Vyberte inú šablónu položky alebo požiadajte správcu systému, aby vám pridelil potrebné oprávnenia na pridávanie položiek do priečinka ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Šablónu položky nie je možné otvoriť.",
		open_records_entry_template_error_explanation: "Webový klient nepodporuje nasledujúci typ šablóny položiek: Deklarovať ako šablóny položiek záznamov.",
		open_records_entry_template_error_userResponse: "Otvorte inú šablónu položky.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Nie je možné otvoriť pracovný tok.",
		open_workflow_error_explanation: "Webový klient nepodporuje otváranie pracovných tokov.",
		open_workflow_error_userResponse: "Otvorte iný dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokument nie je možné otvoriť.",
		viewer_unable_to_view_error_explanation: "Nie je nakonfigurovaný žiadny prezerač pre dokumenty tohto typu alebo nakonfigurovaný prezerač nie je kompatibilný s vašim systémom.",
		viewer_unable_to_view_error_userResponse: "Požiadajte správcu systému, aby nakonfiguroval prezerač pre dokumenty tohto typu a uistite sa, že tento prezerač funguje správne v systéme užívateľa.",
		viewer_unable_to_view_error_adminResponse: "Na konfiguráciu prezerača pre tento typ dokumentu použite administračný nástroj.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Nie je možné otvoriť vyhľadávanie.",
		search_cannot_open_error_explanation: "Funkcia vyhľadávania nie je nakonfigurovaná pre túto pracovnú plochu.",
		search_cannot_open_error_userResponse: "Požiadajte správcu systému aby vám zriadil prístup k pracovnej ploche, ktorá obsahuje funkciu vyhľadávania, alebo aby funkciu vyhľadávania pridal na túto pracovnú plochu.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokument sa nezaviedol.",
		viewer_document_load_failed_error_explanation: "Prezerač Daeja ViewONE Professional nemôže otvoriť dokument.",
		viewer_document_load_failed_error_userResponse: "Bližšie informácie nájdete v chybovej správe zobrazenej v prezerači.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokument nie je možné zobraziť.",
		viewer_session_expired_explanation: "Nie je možné získať obsah dokumentu.",
		viewer_session_expired_userResponse: "Znova sa pokúste prihlásiť. Ak problém pretrváva, aplikačný server možno nie je spustený. Požiadajte správcu systému, aby skontroloval chybové protokoly aplikácie IBM Content Navigator alebo aby reštartoval server.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokument nie je možné zobraziť.",
		ajaxViewer_getPage_failed_explanation: "Aplikácia AJAX Viewer prijala chybovú odpoveď počas získavania obsahu stránky. Aplikačný server možno nie je spustený.",
		ajaxViewer_getPage_failed_userResponse: "Zatvorte webový prehliadač a znova sa prihláste. Ak problém pretrváva, požiadajte správcu systému aby skontroloval protokolové súbory webového aplikačného servera alebo aby reštartoval server.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Na vašej pracovnej stanici sa nenašlo prostredie Java Runtime Environment (JRE).",
		viewer_java_plugin_not_found_explanation: "Buď nebol nájdený modul plug-in alebo nemáte nainštalovanú správnu verziu JRE.",
		viewer_java_plugin_not_found_userResponse: "Skontrolujte, či je nainštalované JRE. Napríklad do okna s príkazovým riadkom  zadajte nasledujúci príkaz: Java -version. Ak JRE nainštalovaný alebo je nainštalovaná jeho nesprávna úroveň verzie, nainštalujte vhodnú verziu JRE. Zoznam podporovaných verzií nájdete v dokumente <i>Hardvérové a  softvérové nevyhnutné podmienky pre IBM Content Navigator</i> v lokalite IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokument nie je možné zobraziť vo webovom prehliadači.",
		viewer_pdf_plugin_not_found_explanation: "Nenašiel sa modul plug-in používaný na zobrazovanie dokumentov PDF vo webovom prehliadači.",
		viewer_pdf_plugin_not_found_userResponse: "Súbor PDF sa miesto zobrazenia v okne prezerača stiahne do vašej pracovnej stanice.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Do archívu nie je možné pridať nasledujúcu položku: ${0}.",
		add_document_single_item_error_explanation: "Táto chyba môže nastať z nasledujúcich dôvodov:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokúšate sa pridať dokument, ktorý bol presunutý alebo vymazaný.</li>" + "<li>Pokúšate sa pridať dokument, ktorý bol premenovaný.</li>" + "<li>Pokúšate sa pridať dokument, ktorý je poškodený.</li>" + "<li>Pokúšate sa pridať dokument,  ktorý je otvorený v inej aplikácií.</li>" + "<li>Pokúšate sa pridať priečinok do archívu.</li>" + "<li>V operačnom systéme nemáte potrebné oprávnenia na prístup k dokumentu.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Problém vyriešte príslušnou akciou:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ak bol dokument presunutý alebo premenovaný, dokument vyhľadajte vo svojom súborovom systéme a pokúste sa ho znova pridať.</li>" + "<li>Ak je dokument otvorený v inej aplikácii, zatvorte ho a pokúste sa ho znovu pridať.</li>" + "</ul>" + "<br>Nemôžete pridať priečinky do archívu.",
		add_document_single_item_error_0: "zlyhaná_položka",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Nasledujúce položky ${0} nie je možné pridať do archívu: ${1}",
		add_document_multiple_items_error_explanation: "Problém s jednou položkou zamedzuje pridaniu všetkých ostatných položiek do archívu. Táto chyba môže nastať z nasledujúcich dôvodov:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokúšate sa pridať dokument, ktorý bol presunutý alebo vymazaný.</li>" + "<li>Pokúšate sa pridať dokument, ktorý bol premenovaný.</li>" + "<li>Pokúšate sa pridať dokument, ktorý je poškodený.</li>" + "<li>Pokúšate sa pridať dokument,  ktorý je otvorený v inej aplikácií.</li>" + "<li>Pokúšate sa pridať priečinok do archívu.</li>" + "<li>V operačnom systéme nemáte potrebné oprávnenia na prístup k dokumentu.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Problém vyriešte príslušnou akciou:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ak bol dokument presunutý alebo premenovaný, dokument vyhľadajte vo svojom súborovom systéme a pokúste sa znova pridať položky.</li>" + "<li>Ak je dokument otvorený v inej aplikácii, zatvorte ho a pokúste sa znovu pridať položky.</li>" + "<li>Ak bol dokument  vymazaný alebo je poškodený, zrušte výber položky a ostatné položky sa pokúste znovu pridať.</li>" + "</ul>" + "<br>Nemôžete pridať priečinky do archívu.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Z tohto umiestnenia nemôžete presúvať položky pomocou myši.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Objekt elektronického formulára nie je možné otvoriť.",
		open_forms_work_object_error_explanation: "Webový klient nepodporuje nasledujúci typ objektu elektronických formulárov: politika pracovného toku.",
		open_forms_work_object_error_userResponse: "Otvorte iný dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokument nie je možné otvoriť.",
		viewer_privilege_to_view_error_explanation: "Nemáte potrebné oprávnenia na zobrazenie dokumentu.",
		viewer_privilege_to_view_error_userResponse: "Požiadajte vlastníka dokumentu, aby vám udelil potrebné oprávnenia, ktoré vám umožnia zobraziť dokument.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Položky nie je možné pridať do archívu.",
		add_document_too_many_items_error_explanation: "Naraz môžete maximálne pridať ${0} položiek. Pokúšate sa pridať ${1} položiek.",
		add_document_too_many_items_error_userResponse: "Zo zoznamu odstráňte niektoré položky a znovu sa pokúste položky pridať. Tiež môžete požiadať správcu systému, aby zvýšil maximálny počet dokumentov, ktoré môžete na jedenkrát pridať na túto pracovnú plochu.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Nepodarilo sa pripojiť k webovému klientovi s nasledujúcou adresou URL: ${0}.",
		http_ltpa_expired_explanation: "Platnosť kľúča LTPA, ktorý je priradený k relácii webového prehliadača, uplynula.",
		http_ltpa_expired_userResponse: "Ukončite a znova spustite webový prehliadač a potom sa znova pokúste prihlásiť. Ak problém pretrváva, oznámte nasledujúcu chybu správcovi systému: ${1}.",
		http_ltpa_expired_0: "Adresa_URL_webového_klienta",
		http_ltpa_expired_1: "Chyba_HTTP",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokument sa nepodarilo pridať do priečinka ${0}.",
		dnd_no_privilege_error_explanation: "Oprávnenia pre priečinok neumožňujú pridávanie dokumentov do priečinka.",
		dnd_no_privilege_error_userResponse: "Dokument pridajte do iného priečinka.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Nie je možné upraviť položky.",
		modify_document_too_many_items_error_explanation: "Naraz môžete upraviť až ${0} položiek. Pokúšate sa upraviť ${1} položiek.",
		modify_document_too_many_items_error_userResponse: "Vyberte menej položiek a pokúste sa ich upraviť znova. Prípadne sa môžete spojiť so správcom systému, aby zvýšil maximálny počet položiek, ktoré môžete naraz upraviť z tejto pracovnej plochy.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Triedu ${0} nemôžete použiť.",
		add_document_multiple_unique_values_error_explanation: "Trieda ${0} obsahuje jednu alebo viac vlastností, ktoré vyžadujú jedinečnú hodnotu pre každý dokument. Pri pridávaní viacerých dokumentov používajú všetky dokumenty rovnaké hodnoty.",
		add_document_multiple_unique_values_error_userResponse: "Vyberte inú triedu alebo dokumenty pridajte samostatne.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Nemôžete použiť šablónu položky ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Šablóna položky ${0} vyžaduje, aby ste pridali dokumenty do triedy ${1}. Trieda ${1} však obsahuje jednu alebo viac vlastností, ktoré vyžadujú jedinečnú hodnotu pre každý dokument. Pri pridávaní viacerých dokumentov používajú všetky dokumenty rovnaké hodnoty.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Vyberte inú šablónu položky alebo dokumenty pridajte samostatne.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Nemôžete použiť šablónu položky ${0}.",
		entry_template_class_restricted_error_explanation: "Šablóna položky pridáva položky použitím triedy ${1}, nemáte však vyžadované oprávnenia na pridanie položiek s použitím tejto triedy.",
		entry_template_class_restricted_error_userResponse: "Vyberte inú šablónu položky alebo požiadajte správcu systému, aby vám udelil príslušné oprávnenia na pridávanie položiek použitím triedy ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Pracovnú položku nie je možné prideliť inému užívateľovi.",
		process_reassign_error_explanation: "Túto akciu zakazuje pracovný tok.",
		process_reassign_error_userResponse: "Pracovnú položku môžete otvoriť a dokončiť aktuálny krok v pracovnej položke.  Ak chcete bližšie informácie o tejto téme, požiadajte vlastníka položky, aby skontroloval, či môže byť pracovná položka znova priradená.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Nepodarilo sa zaviesť nasledujúcu voliteľnú akciu: ${0}.",
		customaction_loadurl_error_explanation: "Voliteľná akcia sa nenachádza v prístupnom umiestnení. Aktuálna adresa URL voliteľnej akcie je ${1}.",
		customaction_loadurl_error_userResponse: "Požiadajte správcu, aby túto voliteľnú akciu presunul do prístupného umiestnenia.",
		customaction_loadurl_error_adminResponse: "Súbor JSP definujúci voliteľnú akciu sa musí poskytovať ako súčasť webovej aplikácie eClient alebo webovej aplikácie IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Tento komponent nie je možné nájsť: ${0}.",
		feature_invalid_explanation: "Tento problém sa môže objaviť, ak komponent nie je k dispozícii na určenej pracovnej ploche alebo názov komponentu je napísaný nesprávne.",
		feature_invalid_userResponse: "Keď kliknete na tlačidlo OK, budete presmerovaní na predvolený komponent pre túto pracovnú plochu. Tento problém nahláste správcovi systému.",
		feature_invalid_adminResponse: "Ak má byť komponent k dispozícii na pracovnej ploche, v administračnom nástroji aktualizujte konfiguráciu pracovnej plochy. Ak komponent nemá byť zahrnutý do pracovnej plochy alebo ak je nesprávne napísaný, s vývojárom aplikácie, ktorý vytvoril adresu URL na tento komponent, aktualizujte túto adresu URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "názov_komponentu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Vyhľadávanie ${0} sa nepodarilo otvoriť.",
		search_unsupportedTeamspaceSearch_error_explanation: "Pre otvorenie tohto vyhľadávania sa musíte nachádzať v tímovom priestore.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Vyberte iné vyhľadávanie.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Tento súbor nie je možné importovať: ${0}.",
		wrong_import_file_type_error_explanation: "Súbor musí byť súbor vlastností.",
		wrong_import_file_type_error_userResponse: "Vyberte súbor vlastností, ktorý ste exportovali z administračného nástroja.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Archív ${0} sa nepodarilo nájsť na pracovnej ploche ${1}.",
		browse_repository_not_found_error_explanation: "Archív sa musí nachádzať na pracovnej ploche a musí v ňom byť povolená funkcia prehľadávania, keď je zadaný v parametri adresy URL.",
		browse_repository_not_found_error_userResponse: "Presvedčte sa, či je zadané ID archívu v adrese URL správne,  či bol archív pridaný do pracovnej plochy ${1} a či je pre archív povolená funkcia prehľadávať.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Archív ${0} nemá v pracovnej ploche ${1} funkciu prehľadávania.",
		browse_repository_not_enabled_error_explanation: "Archív musí mať povolenú funkciu prehľadávania, keď je uvedený v parametri adresy URL.",
		browse_repository_not_enabled_error_userResponse: "Povoľte funkciu prehľadávania pre archív ${0} na pracovnej ploche ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Vyhľadávanie nie je možné dokončiť, pretože prepojenie obsahuje neplatné kritériá.",
		invalid_xt_stored_search_criteria_error_explanation: "Nasledujúca hodnota je neplatná: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Požiadajte správcu systému, aby poskytol aktualizované  prepojenie.",
		invalid_xt_stored_search_criteria_error_adminResponse: "V adrese URL upravte príslušnú dvojicu názov-hodnota. Ak neviete, ktoré hodnoty sú pre vlastnosť platné, v dizajnérovi vyhľadávania FileNet Workplace XT otvorte uložené vyhľadávanie a určite platnú hodnotu.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Nepodarilo sa otvoriť vyhľadávanie vo viacerých archívoch.",
		unified_search_invalid_fixed_value_error_explanation: "Vyhľadávanie vo viacerých archívoch obsahuje neplatné kritériá. Tento problém môže nastať, keď má kritérium pevne stanovenú hodnotu, ktorá nie je kompatibilná s inými vlastnosťami v mapovaní. Tento problém môže napríklad nastať, ak pevne stanovená hodnote bude reťazcom, ale ostatné vlastnosti v mapovaní budú celými číslami.",
		unified_search_invalid_fixed_value_error_userResponse: "Ak máte príslušné oprávnenia pre úpravu vyhľadávania, odstráňte neplatné kritériá a znovu uložte kritériá vyhľadávania. Ak nemáte potrebné oprávnenia na úpravy vyhľadávania, požiadajte vlastníka vyhľadávania alebo správcu systému, aby vyhľadávanie znovu uložil.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Vašu požiadavku nie je možné dokončiť.",
		launch_action_invalid_json_error_explanation: "Údaje, ktoré sa odovzdali do webového klienta, nie sú platné.",
		launch_action_invalid_json_error_userResponse: "Informujte správcu systému o aplikácii, ktorú ste používali, keď sa vyskytol tento problém.",
		launch_action_invalid_json_error_adminResponse: "Klientska aplikácia neodoslala platný objekt JSON do webového klienta. Požiadajte tím softvérovej podpory IBM o pomoc.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Vašu požiadavku nie je možné dokončiť.",
		launch_action_not_found_error_explanation: "Akcia ${0} nie je nakonfigurovaná v žiadnej ponuke v pracovnej ploche ${1}.",
		launch_action_not_found_error_userResponse: "Požiadajte správcu systému, aby pracovnú plochu ${1} nakonfiguroval tak, aby používala ponuku obsahujúcu akciu ${0}, alebo aby vám pridelil pracovnú plochu obsahujúcu akciu ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Vašu požiadavku nie je možné dokončiť.",
		launch_action_repository_not_found_error_explanation: "Archív ${0} nie je priradený k pracovnej ploche ${1}.",
		launch_action_repository_not_found_error_userResponse: "Požiadajte správcu systému, aby archív ${0} priradil k pracovnej ploche ${1}, alebo aby vám pridelil pracovnú plochu obsahujúcu archív ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Tímový priestor sa nepodarilo otvoriť.",
		teamspace_cannot_open_error_explanation: "Funkcia tímových priestorov nie je nakonfigurovaná pre túto pracovnú plochu.",
		teamspace_cannot_open_error_userResponse: "Požiadajte správcu systému, aby vám udelil prístup k pracovnej ploche obsahujúcej funkciu tímových priestorov alebo aby povolil funkciu tímového priestoru na tejto pracovnej ploche.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Vyskytla sa chyba pri prihlasovaní revidovaného obsahu.",
		viewer_redaction_checkin_failed_explanation: "Prezeraču bola vrátená chyba pri prihlasovaní revidovaného obsahu.",
		viewer_redaction_checkin_failed_userResponse: "Požiadajte správcu systému, aby skontroloval protokolové súbory webového aplikačného servera.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Nemôžete pridať dokumenty do tohto archívu.",
		add_document_odserver_odwek_version_od_error_explanation: "Aktuálna verzia servera IBM Content Manager OnDemand alebo ODWEK má nižšiu úroveň ako je minimálna úroveň vyžadovaná pre podporu pridávania dokumentov do archívu Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Požiadajte správcu, aby zistil, ktoré verzie servera Content Manager OnDemand a ODWEK sú vyžadované pre podporu pridávania dokumentov do archívov Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Položky nie je možné pridať do archívu.",
		add_document_too_many_items_od_error_explanation: "Do archívov IBM Content Manager OnDemand môžete naraz pridať iba jeden dokument.",
		add_document_too_many_items_od_error_userResponse: "Odstráňte niektoré položky zo zoznamu a znova sa pokúste pridať položky po jednom.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Položku sa nepodarilo pridať do archívu.",
		add_document_filesize_empty_od_error_explanation: "Do archívu IBM Content Manager OnDemand nemôžete pridať prázdne súbory.",
		add_document_filesize_empty_od_error_userResponse: "Pridajte nejaký obsah do súboru a znova sa pokúste pridať súbor alebo pridajte inú položku.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Nepodarilo sa otvoriť vyhľadávanie vo viacerých archívoch.",
		unified_search_repository_not_found_error_explanation: "Vyhľadávanie vo viacerých archívoch zahŕňa neplatné archívy. Tento problém sa môže vyskytnúť vtedy, keď sa archívy, na ktoré sa vzťahuje vyhľadávanie, odstránia z aplikácie alebo z aktuálnej pracovnej plochy.",
		unified_search_repository_not_found_error_userResponse: "Ak máte potrebné oprávnenia na úpravy vyhľadávania,  vyhľadávanie znovu uložte. Keď vyhľadávanie uložíte, webový klient z vyhľadávania odstráni neplatné archívy. Ak nemáte potrebné oprávnenia na úpravy vyhľadávania, požiadajte vlastníka vyhľadávania alebo správcu systému, aby vyhľadávanie znovu uložil.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Nový dokument nie je možné vytvoriť.",
		edit_document_using_office_online_error: "Dokument nie je možné otvoriť.",
		edit_document_using_office_online_error_explanation: "Adresa URL servera Microsoft Office Online nie je nakonfigurovaná.",
		edit_document_using_office_online_error_userResponse: "Skôr než budete môcť používať server Office Online, musí správca povoliť používanie servera Office Online archívom a určiť adresu URL servera Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Tento dokument sa nepodarilo otvoriť v službe Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Požiadajte správcu systému, aby aktualizoval integráciu servera Microsoft Office Online.<br><br> Ak užívateľ potrebuje mať prístup k tomuto dokumentu zo služby Microsoft Office Online, navštívte stránku Úprava integrácií pre daný archív a upravte integráciu servera Microsoft Office Online tak, aby zoznam upravených tried zahŕňal triedu pre podporu služby Microsoft Office Online. ",		
		browser_not_support_this_viewer: "Nakonfigurovaný prezerač nie je kompatibilný s týmto prehliadačom.",
		browser_not_support_this_viewer_explanation: "Prezerač ${0} nie je podporovaný v tomto prehliadači.",
		browser_not_support_this_viewer_userResponse: "Dokument otvorte v inom prezerači. Zoznam podporovaných prehliadačov nájdete v dokumente <i>Hardvérové a softvérové požiadavky produktu IBM Content Navigator</i> v lokalite IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informácie o pracovnom toku",
		process_information_info_text: "Vybratá položka je v súčasnosti spustená v nasledujúcich pracovných tokoch.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Rovná sa",
		operator_NOTEQUAL: "Nerovná sa",
		operator_LIKE: "Podobné",
		operator_STARTSWITH: "Začína",
		operator_ENDSWITH: "Končí",
		operator_NOTLIKE: "Nie je podobné",
		operator_NULL: "Je prázdne",
		operator_NOTNULL: "Nie je prázdne",
		operator_LESS: "Menšie ako",
		operator_LESSOREQUAL: "Menšie ako alebo rovná sa",
		operator_GREATER: "Väčšie ako",
		operator_GREATEROREQUAL: "Väčšie ako alebo rovná sa",
		operator_BETWEEN: "Medzi",
		operator_NOTBETWEEN: "Nie je medzi",
		operator_IN: "Zahŕňa všetky",
		operator_INANY: "Zahŕňa ľubovoľné",
		operator_NOTIN: "Vylúčiť všetky",
		operator_CONTAINS: "Obsahuje",

		/* SearchForm widget */
		search_button_tooltip: "Vyhľadá dokumenty, vyhovujúce vašim kritériám.",
		reset_button_tooltip: "Resetuje vyhľadávanie na predvolené hodnoty, ktoré nastavil správca.",
		clear_button_tooltip: "Odstráni všetky hodnoty, ktoré ste zadali na vyhľadávanie.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Výber vyhľadávania",
		append_to_search: "Pripojiť k vyhľadávaniu",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nové vyhľadávanie",
		new_unified_search: "Nové vyhľadávanie vo viacerých archívoch",
		searh_name_contains: "Názov vyhľadávania obsahuje",
		keep_search_criteria_expanded: "Ponechať vyhľadávacie kritériá otvorené",
		showing_results: "Zobrazujú sa výsledky pre:",
		open_in_new_window: "Otvoriť v novom okne",
		open_in_new_tab: "Otvoriť na novej karte",
		close_tab: "Zatvoriť kartu",
		add_repository: "Pridať archív",
		edit_repository: "Upraviť archív",
		remove_repository: "Odstrániť",
		search_scope: "Rozsah vyhľadávania",
		search_class_template: "Trieda",
		object_type_version: "Typ a verzia objektu",
		not_applicable: "Neuplatňuje sa",
		unified_search_including_subfolders: " (Vrátane podpriečinkov)",
		unified_search_dialog_intro_text: "Vyberte archív a vyhľadávanie alebo triedy, ktoré chcete zahrnúť do vyhľadávania.",
		unified_search_class_or_template: "Trieda alebo šablóna",

		select_object_fieldset_legend: "Ako chcete vyhľadať položky na pripojenie:",
		select_object_create_new_search: "Nové vyhľadávanie",
		select_object_search_template: "Existujúce vyhľadávanie",

		search_criteria: "Vyhľadávacie kritériá:",
		search_criteria_no_colon: "Kritériá vyhľadávania",
		search_in_multiple: "Hľadať v (${0}):",
		search_location_including_subfolders: "${0} vrátane podpriečinkov",
		search_class: "Trieda:",
		search_class_multiple: "Trieda (${0}):",
		search_class_including_subclasses: "${0} vrátane podtried",
		search_class_all_pseudo: "Všetky",
		search_results: "Výsledky vyhľadávania",
		select_operator: "Vyberte operátor",
		ending_value: "Koncová hodnota pre vlastnosť ${0} je:",
		search_options: "Možnosti vyhľadávania:",
		search_version: "Verzia:",
		search_released_version: "Publikovaná verzia",
		search_current_version: "Aktuálna verzia",
		search_all_versions: "Všetky verzie",
		search_file_type_filter: "Filter typu súboru:",
		search_one_file_type: "1 typ súboru",
		search_many_file_types: "typy súborov: ${0}",
		search_action_filter: "Filter akcií:",
		search_action_filter_hover_help: "Spresnite výsledky, aby obsahovali len súbory, na ktorých užívatelia vykonali špecifickú akciu.<br/>Napríklad môžete vyhľadať len dokumenty, ktoré ste pridali  20. septembra 2012.",
		search_action_filter_enabled: "Filter akcií je povolený",
		search_enable: "Povoliť",
		search_disable: "Zakázať",
		search_by: "kto",
		search_added: "Pridané",
		search_modified: "Upravené",
		search_checked_out: "Odhlásené",
		search_date_operator_on: "Zapnuté",
		search_date_operator_not_on: "Nie v",
		search_date_operator_before: "Pred",
		search_date_operator_after: "Po",
		search_version_hover_help_p8: "Publikovaná verzia je dostupná všetkým užívateľom. Ak má dokument aktuálnu verziu, znamená to, že tento dokument upravujú niektorí užívatelia.",
		search_version_hover_help_cm: "Aktuálna verzia je najnovšia verzia položky.",
		search_using: "Vyhľadať položky vyhovujúce:",
		search_property_and_text_criteria: "Hodnoty vlastností aj textové kritériá",
		search_property_or_text_criteria: "Hodnoty vlastností alebo textové kritériá",
		search_property_and_text: "Vlastnosť aj textové kritériá",
		search_property_or_text: "Vlastnosť alebo textové kritériá",
		search_property_options: "Možnosti vlastností:",
		search_property_option_match_all: "Všetky vlastnosti",
		search_property_option_match_any: "Ktorékoľvek z vlastností",
		search_property_option_match_all_summary: "Zhoda všetkých",
		search_property_option_match_any_summary: "Zhoda ktorýchkoľvek",
		search_total_count_type_total: "Celkom",
		search_total_count_type_atleast: "Aspoň",
		search_content_size_filter: "Filter veľkosti obsahu:",
		search_content_size_filter_any: "Ľubovoľná veľkosť obsahu",

		/* Search work options */
		search_work_filter: "Filter pracovných položiek:",
		search_work_filter_hover_help: "Zúžte výsledky, aby obsahovali len položky, ktoré sa nachádzajú v pracovnom toku. Napríklad  môžete zúžiť výsledky, aby obsahovali len pracovné položky, ktoré sú aktívne.<br /><br />Táto voľba sa nepoužije, ak chcete vidieť všetky verzie položiek, ktoré vráti vyhľadávanie.",
		search_work_filter_enabled: "Filter pracovných položiek je povolený",
		search_work_filter_status: "Stav:",
		search_work_filter_step: "Krok:",
		search_work_filter_owner: "Vlastník:",
		search_work_filter_status_all: "Všetky položky",
		search_work_filter_status_active: "Aktívne položky",
		search_work_filter_status_suspended: "Pozastavené položky",
		search_work_filter_process_all: "Všetky pracovné toky",
		search_work_filter_step_all: "Všetky kroky",
		search_work_filter_owner_all: "Všetky užívatelia",
		search_work_filter_step_error: "Názov kroku neexistuje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Vyhľadávanie sa nemôže vykonať bez ďalších informácií. Uveďte hodnotu pre aspoň jednu podmienku.",
		search_insufficient_input_box: "Vyhľadávanie sa nemôže vykonať bez ďalších informácií. Zadajte kritéria vyhľadávania textu alebo vyberte šablónu metaúdajov.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Vyhľadávanie nie je možné nakonfigurovať tak, aby sa spustilo pri otvorení, kým neuvediete ďalšie informácie. Uveďte hodnotu pre aspoň jednu podmienku.",
		search_member_required: "Ak chcete toto vyhľadávanie zdieľať s konkrétnymi užívateľmi a skupinami, vyberte užívateľov alebo skupiny, s ktorými sa má toto vyhľadávanie zdieľať.",
		search_criteria_layout_and: "A",
		search_criteria_layout_or: "ALEBO",
		search_prompt_close_without_save: "Zatvoriť bez uloženia zmien?",
		search_prompt_close_all_without_save: "Chcete zatvoriť všetky karty bez uloženia zmien?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Jeden z týchto typov vyhľadávacích kritérií nie je platný pre tento archív: ${0}. Ak chcete spustiť vyhľadávanie vo webovom klientovi, neplatné kritériá musia byť odstránené. Ak vyhľadávanie uložíte, neplatné kritériá budú odstránené. Ak nechcete zmeniť vyhľadávanie, zatvorte ho.",
		search_invalid_repository: "Jeden alebo viac archívov",
		search_invalid_class: "Jedna alebo viac tried",
		search_invalid_folder: "Jeden alebo viac priečinkov",
		search_invalid_file_type: "Jeden alebo viac typov súborov",
		search_invalid_property: "Jedna alebo viac vlastností",
		search_invalid_text_search: "Kritériá textového vyhľadávania",
		search_invalid_work: "Kritériá filtrovania pracovných položiek",

		search_operator_pulldown_missing: "Vyžaduje sa operátor. Vyberte operátor v roletovej ponuke. Ak nie je uvedený žiadny operátor, požiadajte správcu systému, aby na karte <b>Hľadať</b> v administračnom nástroji skontroloval, či operátory nie sú skryté. Ak ide o vyhľadávanie vo viacerých archívoch, roletová ponuka nemusí obsahovať žiadne operátory, ak vlastnosti, ktoré sú navzájom mapované, nemajú žiadne spoločné operátory.",

		/*SearchBuilder */
		open_search_builder: "Nové vyhľadávanie",
		document_type: "Trieda",
		show_all_properties: "Zobraziť všetky vlastnosti",
		text_search_label: "Hľadať položky s nasledujúcimi pojmami:",
		text_search_place_holder: "Použite kombináciu pojmov a operátorov: * ? alebo \"fráza pre presnú zhodu\"",
		text_search_place_holder_box: "Použite kombináciu pojmov a operátorov: AND, OR, NOT a \"frázu pre presnú zhodu\"",
		text_search_place_holder_cascade_proximity: "Použite kombináciu pojmov a operátorov: * alebo ?",
		text_search_place_holder_common: "Použite kombináciu pojmov a \"frázu pre presnú zhodu\"",
		text_search_hover_help_p8: "Ako zástupné znaky môžete použiť znak hviezdičky (*) a otáznik (?). Ak sa majú vyhľadať presné zhody, použite dvojité úvodzovky (\"\").",
		text_search_hover_help_p8_only_crs: "Ako zástupné znaky môžete použiť znak hviezdičky (*) a otáznik (?). Ak sa majú vyhľadať presné zhody, použite dvojité úvodzovky (\"\"). Ak uvediete viacero pojmov, vyhľadávanie vo viacerých archívoch vráti položky obsahujúce hociktorý z týchto pojmov.",
		text_search_hover_help_cm: "Ako zástupné znaky môžete použiť znak hviezdičky (*) a otáznik (?). Ak sa majú vyhľadať presné zhody, použite dvojité úvodzovky (\"\"). Pred pojmami, ktoré majú byť z vyhľadávania vylúčené, uveďte znamienko mínus (-) a pred pojmami, ktoré majú byť zahrnuté do vyhľadávania, uveďte znamienko plus (+).",
		text_search_hover_help_box: "Ak sa majú vyhľadať všetky pojmy, medzi pojmami uveďte operátor AND. Ak sa má vyhľadať ľubovoľný z týchto pojmov, medzi pojmami uveďte operátor OR. Ak sa majú vyhľadať presné zhody, použite dvojité úvodzovky (\"\"). Ak chcete vylúčiť pojem, uveďte pred ním operátor NOT.",
		text_search_hover_help_common: "Ak sa majú vyhľadať presné zhody, použite dvojité úvodzovky (\"\"). Ak uvediete viacero pojmov, vyhľadávanie vo viacerých archívoch vráti položky obsahujúce všetky tieto pojmy.",
		text_search_options: "Voľby textu:",
		text_search_options_hover_help: "Ak okrem zástupných znakov chcete použiť aj iné operátory, vyberte možnosť Rozšírené operátory.",
		text_search_option_any: "Ľubovoľný pojem",
		text_search_option_all: "Všetky pojmy",
		text_search_option_proximity: "V blízkosti slov:",
		text_search_option_none: "Rozšírené operátory",
		text_search_option_authoring: "Textové vyhľadávanie je:",
		text_search_option_authoring_hover_help: "Vyberte spôsob sprístupnenia kritérií textového vyhľadávania užívateľom. Ak do vyhľadávania nechcete zahrnúť žiadne kritériá textového vyhľadávania, skryte túto možnosť. V opačnom prípade môžete povoliť úpravu kritérií textového vyhľadávania, môžete ich nastaviť ako povinné alebo ich môžete zakázať ich úpravu užívateľmi.",
		text_search_option_hide: "Skryť kritériá",
		text_search_option_hide_hover_help: "Vyberte túto možnosť, ak nechcete do vyhľadávania zaradiť žiadne kritériá textového vyhľadávania alebo nechcete iným užívateľom umožniť zadávať kritériá textového vyhľadávania.",
		text_search_option_in: "V označení HTML/XML ${0}",
		text_search_option_paragraph: "V rovnakom odseku",
		text_search_option_sentence: "V rovnakej vete",
		text_search_option_vql: "Dotaz VQL",
		text_search_option_none_hover_help: "Pred pojmami, ktoré sa majú vylúčiť z vyhľadávania, uveďte znak -.",
		text_search_option_cascade_proximity_hover_help: "Obmedzí výsledky vyhľadávania na pojmy, ktoré sa nachádzajú v blízkosti slov, ktoré neobsahujú presné frázy.",

		box_search_metadata: "Metaúdaje:",
		box_search_select_template: "Vybrať šablónu",
		box_search_no_templates: "Nie sú dostupné žiadne šablóny",
		box_text_search_options_search_within: "Rozsah vyhľadávania:",
		box_text_search_options_search_within_everything: "Všetko",
		box_text_search_options_search_within_file_content: "Obsah dokumentov",
		box_text_search_options_search_within_tags: "Značky",
		box_text_search_options_limit_to: "Hľadať iba:",

		add_property: "Pridať vlastnosť",
		edit_template: "Upraviť vyhľadávanie",
		save_search: "Uložiť vyhľadávanie",
		search_template_name: "Názov:",
		search_template_desc: "Popis:",
		auto_run: "Spustiť vyhľadávanie pri otváraní",
		show_in_tree: "Zobraziť vyhľadávanie v štruktúre priečinkov",
		show_in_tree_hover_help: "Ak sa vyhľadávanie uloží do priečinka, predvolene sa bude zobrazovať iba v zozname obsahu. Ak vyberiete túto možnosť, vyhľadávanie sa zobrazí aj v strome priečinkov v zobrazení Prehľadávať.  Vyhľadávanie sa zobrazí v strome priečinkov iba vtedy, ak vyhľadávanie uložíte do priečinka.",
		share_search_with: "Zdieľať vyhľadávanie s:",
		remove_member: "Odstrániť ${0}",
		ok_button_label: "OK",
		save_template: "Uložiť",
		save_template_title: "Ak potrebujete často vyhľadávať určité položky, uložte si vyhľadávacie kritériá.",
		remove_criterion: "Odstrániť",
		apply_button_label: "Použiť",
		empty_search_results_pane: "Spustite vyhľadávanie, aby sa zobrazili výsledky.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Celý archív",

		repository_already_selected: "Archív ${0} nie je možné pridať do vyhľadávania vo viacerých archívoch, pretože už bol pridaný do tohto vyhľadávania. <br/> Archív sa do vyhľadávania vo viacerých archívoch môže pridať iba raz. <br/>Vyberte iný archív, ktorý sa má pridať do vyhľadávania vo viacerých archívoch.",

		repository_limit_reached: "Archív ${0} nie je možné pridať do vyhľadávania vo viacerých archívoch. Maximálny počet archívov, ktoré môžete pridať do vyhľadávania, je ${1}.",

		nomore_criteria_toappend: "Všetky mapované vlastnosti už boli pridané do vyhľadávacích kritérií. Do vyhľadávacích kritérií sa nepridali žiadne vlastnosti.",
		nomore_criteria_toappend_regular: "Vyhľadávacie kritériá už obsahujú všetky vlastnosti. Do vyhľadávacích kritérií sa nepridali žiadne vlastnosti.",

		/* OD Save Search dialog */
		reload_label: "Znova zaviesť",
		od_save_search_help_text: "Zadajte názov vyhľadávania alebo vyberte existujúce vyhľadávanie, ktoré má byť nahradené",
		public_access_label: "Umožniť iným používať toto vyhľadávanie",
		od_delete_search_help_text: "Vyberte jedno alebo viaceré vyhľadávania, ktoré majú byť vymazané",
		delete_save_searches: "Odstrániť uložené vyhľadávania",

		/* Unified Search */
		unified_search_enable_text_search: "Zahrnúť kritériá textového vyhľadávania",
		unified_search_text_search_enabled: "Zahrnúť textové vyhľadávanie",
		unified_search_mapping: "Mapovanie",
		unified_search_new_mapping: "Nové mapovanie",
		unified_search_mapping_name: "Názov mapovania",
		unified_search_mapping_dialog_instructions: "Vyberte vlastnosti, ktoré chcete mapovať. Niektoré vlastnosti sa môžu mapovať do vlastností s iným typom údajom. Napríklad, reťazcovú vlastnosť môžete mapovať do celočíselnej vlastnosti. Keď mapujete vlastnosť do inej vlastnosti, vo vyhľadávaní vo viacerých archívoch sa s týmito vlastnosťami bude zaobchádzať ako s jednou vlastnosťou.",
		unified_search_filter_available_properties: "Filtrovať dostupné vlastnosti",
		unified_search_available_properties: "Dostupné vlastnosti",
		unified_search_mapped_properties: "Mapované vlastnosti",
		unified_search_single_values: "jediné hodnoty",
		unified_search_multiple_values: "viacnásobné hodnoty",
		unified_search_add_mapping: "Pridať mapovanie",
		unified_search_warn_remove_repository: "Vybratý archív sa používa vo vyhľadávacích kritériách.\nAk odstránite tento archív, akékoľvek mapovania a vyhľadávacie kritériá, ktoré obsahujú tento archív, sa odstránia.\n\nNaozaj chcete odstrániť archív?",
		unified_search_warn_update_repository_mappings: "Zmena výberu vlastností pre tento archív bude mať vplyv na kritériá vyhľadávania.\n\nKritériá vyhľadávania zahrňujú mapovania zahrňujúce vlastnosti, ktoré sa snažíte odstrániť. Mapovania zahrňujúce vlastnosti, ktoré sa snažíte odstrániť, sa musia odstrániť. Musia sa tiež odstrániť všetky kritériá vyhľadávania zahrňujúce tieto mapovania, aby sa vyhľadávanie mohlo spustiť.\n\nChcete upraviť nastavenia archívu a odstrániť mapovania a kritériá vyhľadávania?",
		unified_search_warn_update_repository_mappings_reset: "Pridanie kritérií textového vyhľadávania pre tento archív bude mať vplyv na kritériá vyhľadávania vo viacerých archívoch.\n\nAby sa vyhľadávanie mohlo spustiť, musia sa odstrániť všetky kritériá vyhľadávania vlastností zahrňujúce mapovanie vlastností pre tento archív.\n\nChcete upraviť nastavenia archívu a odstrániť kritériá vyhľadávania?",
		unified_search_warn_update_repository_text_criteria: "Odstránenie kritérií textového vyhľadávania pre tento archív bude mať vplyv na kritériá vyhľadávania vo viacerých archívoch.\n\nAby sa vyhľadávanie mohlo spustiť, z kritérií vyhľadávania vo viacerých archívoch sa musia odstrániť kritériá textového vyhľadávania.\n\nChcete upraviť nastavenia archívu a odstrániť kritériá textového vyhľadávania?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Odstránenie kritérií textového vyhľadávania a zmena výberu vlastností pre tento archív bude mať vplyv na kritériá vyhľadávania vo viacerých archívoch.\n\nAby sa vyhľadávanie mohlo spustiť, z kritérií vyhľadávania vo viacerých archívoch sa musia odstrániť kritériá textového vyhľadávania. Taktiež, kritériá vyhľadávania vlastností zahrňujú mapovania zahrňujúce vlastnosti, ktoré sa snažíte odstrániť. Mapovania zahrňujúce vlastnosti, ktoré sa snažíte odstrániť, sa musia odstrániť. Musia sa tiež odstrániť všetky kritériá vyhľadávania vlastností zahrňujúce tieto mapovania, aby sa vyhľadávanie mohlo spustiť.\n\nChcete upraviť nastavenia archívu a odstrániť kritériá textového vyhľadávania, mapovania a kritériá vyhľadávania vlastností?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Vylúčenie kritérií textového vyhľadávania pre tento archív bude mať vplyv na kritériá vyhľadávania vo viacerých archívoch.\n\nAby sa vyhľadávanie mohlo spustiť, musia sa odstrániť všetky kritériá vyhľadávania vlastností zahrňujúce mapovanie vlastností pre tento archív. Pri spúšťaní vyhľadávania sa z kritérií vyhľadávania vo viacerých archívoch môžu odstrániť kritériá textového vyhľadávania.\n\nChcete upraviť nastavenia archívu a odstrániť kritériá vyhľadávania?",
		unified_search_warn_remove_mapping: "Odstránenie tohto mapovania bude mať vplyv na kritériá vyhľadávania.\n\nAby sa toto vyhľadávanie mohlo spustiť, musia sa odstrániť kritériá vyhľadávania používajúce toto mapovanie.\n\nChcete upraviť mapovanie a odstrániť kritériá vyhľadávania?",
		unified_search_warn_update_mapping: "Zmena tohto mapovania bude mať vplyv na kritériá vyhľadávania.\n\nKritériá vyhľadávania používajúce toto mapovanie sa musia vymazať, aby sa zabezpečilo, že vyhľadávanie nebude obsahovať neplatné operátory alebo neplatné hodnoty.\n\nChcete upraviť mapovanie a vymazať kritériá vyhľadávania?",
		unified_search_warn_update_mapping_not_searchable: "Zmeny v tomto mapovaní budú mať vplyv na kritériá vyhľadávania.\n\nAk sú všetky mapované vlastnosti nastavené tak, aby povoľovali iba zobrazenie, toto mapovanie nemôžete použiť v kritériách vyhľadávania. Aby sa vyhľadávanie mohlo spustiť, kritériá vyhľadávania používajúce toto mapovanie sa musia odstrániť.\n\nChcete upraviť mapovanie a odstrániť kritériá vyhľadávania?",
		unified_search_warn_update_mapping_box_searchable: "Zmeny v tomto mapovaní budú mať vplyv na kritériá vyhľadávania.\n\nKritériá vyhľadávania už obsahujú viacero výskytov tohto mapovania a ak pridáte vlastnosť ${0} z archívu ${1}, kritériá vyhľadávania budú obsahovať priveľa výskytov vlastnosti ${0}. Aby sa vyhľadávanie mohlo spustiť, kritériá vyhľadávania používajúce toto mapovanie sa musia odstrániť.\n\nChcete upraviť mapovanie a odstrániť kritériá vyhľadávania?",
		unified_search_details: "Podrobnosti o vyhľadávaní vo viacerých archívoch",
		unified_search_fixed_value_property: "Vlastnosť s nemennou hodnotou",
		unified_search_required_property: "Povinná vlastnosť",
		unified_search_display_only_property: "Vlastnosť iba na zobrazenie",
		unified_search_missing_required_properities: "Nie je možné uložiť alebo spustiť vyhľadávanie.<br/>Nasledujúce vlastnosti sú vyžadované:${0}Tieto vlastnosti musíte zahrnúť do mapovania a pridať ich spolu s hodnotami do vyhľadávacích kritérií.",
		unified_search_property_repostory: "${0} (Archív: ${1})",
		unified_search_builder_no_mappings: "Nie je možné spustiť vyhľadávanie.<br/>Musíte vytvoriť mapovanie vlastností a pridať toto mapovanie do panela <b>Zobrazenie výsledkov</b>, aby vyhľadávanie mohlo zobraziť výsledky.",
		unified_search_builder_insufficient_criteria_to_run: "Nie je možné spustiť vyhľadávanie.<br/>Kritériá vyhľadávania nezahŕňajú kritériá textového vyhľadávania alebo hodnoty vlastností pre nasledujúce archívy:${0}Pre každý archív, ktorý zahrniete do vyhľadávania, musíte buď zadať kritériá textového vyhľadávania, alebo vytvoriť mapovanie vlastností, pridať toto mapovanie do kritérií vlastností a určiť hodnoty vlastností.",
		unified_search_builder_insufficient_criteria_to_save: "Vyhľadávanie nie je možné uložiť.<br/>Vyhľadávanie nezahŕňa kritériá vyhľadávania pre nasledujúce archívy:${0}Pre každý archív, ktorý zahrniete do vyhľadávania, musíte vykonať niektoré z nasledujúcich úloh:<ol><li>Vytvoriť mapovanie vlastností a pridať toto mapovanie do kritérií vlastností.</li><li>Upraviť tento archív tak, aby zahŕňal kritériá textového vyhľadávania, a vytvoriť mapovanie vlastností a zahrnúť toto mapovanie do panela <b>Zobrazenie výsledkov</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Nie je možné spustiť vyhľadávanie.<br/>Pre každý archív, ktorý zahrniete do vyhľadávania, musíte uviesť aspoň jednu hodnotu vlastnosti. Môžete uviesť hodnoty napríklad pre nasledujúce vlastnosti: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Nie je možné spustiť vyhľadávanie.<br/>Vyžadujú sa kritériá vyhľadávania.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Nie je možné spustiť vyhľadávanie.<br/>Pre každý archív, ktorý zahrniete do vyhľadávania, musíte uviesť aspoň jednu hodnotu vlastnosti, alebo musíte uviesť kritériá textového vyhľadávania. Môžete uviesť hodnoty napríklad pre nasledujúce vlastnosti: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Nie je možné spustiť vyhľadávanie.<br/>Vyžadujú sa kritériá vyhľadávania. Pre každý archív, ktorý zahrniete do vyhľadávania, musíte uviesť aspoň jednu hodnotu vlastnosti, alebo musíte uviesť kritériá textového vyhľadávania. Môžete uviesť hodnoty napríklad pre nasledujúce vlastnosti: ${0}",
		unified_search_invalid_criteria: "Vyhľadávanie obsahuje neplatné kritériá, ktoré zabraňujú spusteniu vyhľadávania.<br/>Neplatné kritériá boli odstránené. Pred spustením vyhľadávania však musíte uložiť tieto zmeny vo vyhľadávaní. Ak nechcete uložiť zmeny, zatvorte vyhľadávanie.<br/><br/>Nasledujúce položky boli odstránené alebo zmenené: ${0}",
		unified_search_invalid_fixed_values: "Nie je možné uložiť alebo spustiť vyhľadávanie.<br/>Nasledujúce vyhľadávacie  kritériá majú pevne stanovené hodnoty, ktoré sú neplatné:${0}Vykonajte niektorú z nasledujúcich akcií, ak chcete problém vyriešiť:<ul><li>Odstráňte vyhľadávacie kritériá, ktoré obsahujú neplatné hodnoty</li><li>Upravte mapovania, ktoré obsahujú vlastnosť IBM Content Manager OnDemand s pevne stanovenou hodnotou tak, že vlastnosť odstránite.</li><li>Upravte mapovania, ktoré obsahujú vlastnosť IBM Content Manager OnDemand s pevne stanovenou hodnotou tak, aby boli všetky vlastnosti kompatibilné. Bližšie informácie o vlastnostiach, ktoré sa môžu mapovať, nájdete cez prepojenie Viac informácií v úvodnom texte na začiatku okna pre mapovanie vlastností.</li></ul>",
		unified_search_cannot_add_properties: "Do tohto vyhľadávania už nemôžete pridať ďalšie vlastnosti.<br/>Všetky dostupné mapované vlastnosti sú už uvedené v kritériách vyhľadávania, pričom každú vlastnosť môžete do vyhľadávania pridať iba raz.",
		unified_search_mapping_not_viewable: "Vo výsledkoch vyhľadávania nemožno zobraziť vlastnosti šablóny služby Box. Ak chcete pridať toto mapovanie ako stĺpec, musíte namapovať aspoň jednu vlastnosť, ktorá nie je vlastnosťou šablóny služby Box. Napríklad, môžete vybrať vlastnosť z iného archívu.",

		unified_search_returned_more: "Presiahol sa maximálny povolený počet výsledkov pre niektoré archívy.",
		unified_search_partial_failure: "Vyskytla sa chyba aspoň v jednom archíve.",
		unified_search_partial_failure_and_returned_more: "V niektorých archívoch sa vyskytla chyba v pre niektoré archívy sa presiahol maximálny povolený počet výsledkov.",
		unified_search_see_analysis: "Pozrite si analýzu výsledkov.",
		unified_search_analysis_intro_returned_more: "Spresnite kritériá vyhľadávania pre archívy, pre ktoré sa presiahol maximálny povolený počet výsledkov, aby sa vrátil menší počet výsledkov. Alebo vykonajte vyhľadávanie iba v jednom archíve, pri ktorom sa môže vrátiť väčší počet výsledkov ako je maximálny povolený počet výsledkov pri vyhľadávaní vo viacerých archívoch.",
		unified_search_analysis_intro_partial_failure: "Pozrite si chybové informácie, ktoré vrátil archív alebo archívy. Ak je to vhodné, odstráňte chyby a spustite vyhľadávanie vo viacerých archívoch znova.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Pokúste sa vyriešiť problémy s archívmi, v ktorých sa vyskytla chyba, a potom znova spustite vyhľadávanie.<br/><br/>Spresnite kritériá vyhľadávania pre archívy, pre ktoré sa presiahol maximálny povolený počet výsledkov, aby sa vrátil menší počet výsledkov. Alebo vykonajte vyhľadávanie iba v jednom archíve, pri ktorom sa môže vrátiť väčší počet výsledkov ako je maximálny povolený počet výsledkov pri vyhľadávaní vo viacerých archívoch.",
		unified_search_results_found: "Nájdené výsledky",
		unified_search_maximum_allowed: "Maximálny povolený počet",
		unified_search_maximum_exceeded: "Presiahol sa maximálny povolený počet",

		unified_search_mapping_rule_box: "Túto vlastnosť nie je možné pridať do mapovania.<p>Vlastnosť ${0} z archívu ${1} je už súčasťou iného mapovania, pričom vyhľadávateľné vlastnosti z tohto archívu sa môžu použiť iba v jednom mapovaní v každom vyhľadávaní.<br/>Vyberte inú vlastnosť, ktorá sa pridá do mapovania.</p>",
		unified_search_mapping_rule_repository: "Vlastnosť nie je možné pridať do mapovania.<br/>Mapovanie už obsahuje vlastnosť z archívu ${0}. Mapovanie môže zahŕňať len jednu vlastnosť z archívu.<br/>Vyberte iný archív, z ktorého sa má pridať vlastnosť, alebo vytvorte nové mapovanie pre vybratú vlastnosť.",
		unified_search_mapping_rule_data_type: "Vlastnosť nie je možné pridať do mapovania.<br/>Vlastnosť ${0} nie je možné mapovať do vlastnosti ${1}. Vyberte inú vlastnosť na mapovanie alebo vytvorte nové mapovanie pre vybratú vlastnosť.<br/>Bližšie informácie o vlastnostiach, ktoré sa môžu mapovať, nájdete cez prepojenie Viac informácií v úvodnom texte na začiatku tohto okna.",
		unified_search_mapping_rule_cardinality: "Vlastnosť nie je možné pridať do mapovania.<br/>Všetky vlastnosti v mapovaní musia podporovať buď jediné hodnoty, alebo viacnásobné hodnoty. Vybratá vlastnosť podporuje ${0}, a vlastnosti v mapovaní podporujú ${1}.<br/>Vyberte inú vlastnosť, ktorá sa má pridať do mapovania, alebo vytvorte nové mapovanie pre vybratú vlastnosť.",
		unified_search_mapping_rule_fixed_value: "Vlastnosť nie je možné pridať do mapovania.<br/>Mapovanie už obsahuje vlastnosť s pevnou hodnotou. Mapovanie môže zahŕňať len jednu vlastnosť s pevnou hodnotou.<br/>Vyberte inú vlastnosť, ktorá sa má pridať do mapovania, alebo vytvorte nové mapovanie pre vybratú vlastnosť.",
		unified_search_mapping_rule_child_component: "Vlastnosť nie je možné pridať do mapovania.<br/>Vlastnosť s dcérskym komponentom nie je možné mapovať na iné vlastnosti. Ak chcete vyhľadávať v tejto vlastnosti, pre vybratú vlastnosť vytvorte nové mapovanie.",
		unified_search_mapping_rule_operator_intersection: "Vlastnosť nie je možné pridať do mapovania.<br/>Všetky vlastnosti v mapovaní musia mať spoločného jedného alebo viacerých operátorov. Vlastnosť ${0} však nemá žiadnych spoločných operátorov s inými vlastnosťami v mapovaní.<br/>V prípade potreby vyberte inú vlastnosť. Ak musíte zahrnúť vybratú vlastnosť, spolu so správcom systému upravte operátorov, ktorí sú priradení k danej vlastnosti.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Rozšírené nastavenia",
		advanced_search_options_intro: "Nastavte rozšírené možnosti výberu kritérií.",
		advanced_search_options_editable: "Editovateľné",
		advanced_search_options_readonly: "Len na čítanie",
		advanced_search_options_required: "Povinné",
		advanced_search_options_hidden: "Skryté",
		advanced_search_options_property_editable:"Vlastnosť je:",
		advanced_search_options_operators:"Operátory:",
		advanced_search_options_use_all:"Použiť všetky",
		advanced_search_options_use_selected:"Použiť vybraté",
		advanced_search_options_operators_filtered: "Filtrované operátory",
		// Data types in lowercase
		data_type_boolean: "booleovský",
		data_type_date: "dátum",
		data_type_time: "čas",
		data_type_timestamp: "časová značka",
		data_type_decimal: "desatinná hodnota",
		data_type_double: "číslo s pohyblivou desatinnou čiarkou",
		data_type_short: "celé číslo",
		data_type_integer: "celé číslo",
		data_type_long: "celé číslo",
		data_type_string: "textový reťazec",
		data_type_string_alpha: "abecedný reťazec",
		data_type_string_alphanum: "alfanumerický reťazec",
		data_type_string_ext: "rozšírený alfanumerický reťazec",
		data_type_string_num: "numerický reťazec",
		data_type_binary: "binárny",
		data_type_object: "objekt",
		data_type_guid: "globálne jedinečný identifikátor",
		data_type_user: "užívatelia",
		data_type_child_component: "dcérsky komponent",

		/* Print Dialog */
		print_title: "Tlačiť",
		print_message: "Tlačí sa: ${0}",
		print_print_button: "Tlačiť",
		print_clean_margins_button: "Nastaviť všetky na hodnotu 0",
		print_type: "Typ tlačiarne:",
		print_printer_server_options: "Možnosti tlače na serveri",
		print_printer_properties: "Vlastnosti tlačiarne",
		print_printer_fax_properties: "Vlastnosti faxu",
		print_printer_name: "Názov tlačiarne:",
		print_fax_recipient: "Príjemca",
		print_fax_sender: "Odosielateľ",
		print_copies: "Kópie:",
		print_local_orientation: "Orientácia",
		print_local_orientation_landscape: "Stránka na šírku",
		print_local_orientation_portrait: "Stránka na výšku",
		print_local_margins: "Okraje",
		print_local_margins_top: "Začiatok",
		print_local_margins_bottom: "Dolu",
		print_local_margins_left: "Vľavo",
		print_local_margins_right: "Vpravo",
		print_printer_server: "Server",
		print_printer_local: "Lokálny",
		print_property_class: "Trieda:",
		print_property_routing: "Smerovanie:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Uzol:",
		print_property_writer: "Zapisovač:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Cieľ:",
		print_property_forms: "Formuláre:",
		print_property_faxnotes: "Poznámky:",
		print_property_faxcompany: "Spoločnosť:",
		print_property_faxnumber: "Číslo faxu:",
		print_property_faxname: "Názov:",
		print_property_faxsendertelnumber: "Telefónne číslo:",
		print_property_faxcoverpage: "Úvodná stránka:",
		print_property_faxsubject: "Predmet:",
		print_saveoptions: "Uložiť voľby tlače",
		print_property_bannerpage: "Použiť stránku reklamného pruhu",
		print_print_with_info_fields: "Vytlačiť s informačnými poľami",
		print_field_from: "Odosielateľ",
		print_field_to: "Adresát",
		print_invalid_value_class: "Platné znaky sú A-Z alebo 0-9",
		print_invalid_value_pagedef: "Platné znaky sú abecedné alebo numerické znaky, alebo znaky @, # alebo $",
		print_invalid_value_writer: "Platné znaky sú abecedné alebo numerické znaky, alebo znaky @, # alebo $",
		print_invalid_value_formdef: "Platné znaky sú abecedné alebo numerické znaky, alebo znaky @, # alebo $",
		print_invalid_value_forms: "Platné znaky sú abecedné alebo numerické znaky, alebo znaky @, # alebo $",
		print_invalid_value_margin: "Platné čísla sú medzi ${0} a ${1}",
		print_status_message: "Dokumenty (${0}) sa odoslali do tlačiarne ${1}.",

		print_applet_init_error: "Nepodarilo sa spustiť tlačový aplet.",
		print_applet_init_error_explanation: "Tento problém môže nastať z nasledujúcich dôvodov: <br/><br/><ul><li>Vo svojej  pracovnej stanici nemáte nainštalované prostredie JRE (Java Runtime Environment).</li><li>Modul plug-in Java nie je povolený vo vašom webovom prehliadači.</li><li>Verzia softvéru JRE nainštalovaná na vašej pracovnej stanici nie je kompatibilná s verziou softvéru IBM Content Navigator.</li><li>Uplynul vyhradený čas prehliadača pri čakaní na spustenie tlačového apletu.</li></ul>",
		print_applet_init_error_userResponse: "Problém s prostredím JRE môžete vyriešiť podľa nasledujúcich pokynov:<br/><br/><ol><li>Uistite sa, že je na vašej pracovnej stanici nainštalovaný softvér JRE.</li><li>Uistite sa, že je vo webovom prehliadači povolený modul plug-in prostredia Java.</li><li>Uistite sa, že je verzia prostredia JRE, ktorá je nainštalovaná na vašej pracovnej stanici, kompatibilná so serverom IBM Content Navigator, a potom skúste znova. Zoznam podporovaných verzií nájdete v dokumente <i>Hardvérové a  softvérové nevyhnutné podmienky pre IBM Content Navigator</i> v lokalite IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Prvá strana",
		daeja_print_selected_documents_title: "Vybraté dokumenty",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Vyhovuje všetkým kritériám vyhľadávania",
		match_any_criteria: "Vyhovuje ľubovoľným kritériám vyhľadávania",
		include_subfolders_summary: "${0} (vrátane podpriečinkov)",
		browse_button: "Prehľadávať&hellip;",
		search_for: "Hľadať:",
		object_type_documents: "Dokumenty",
		object_type_folders: "Priečinky",
		object_type_documents_folders: "Dokumenty a priečinky",
		object_type_web_links: "Webové prepojenia",
		object_type_documents_folders_web_links: "Dokumenty, priečinky a webové prepojenia",

		/* SelectSearchFolderDialog */
		search_in: "Hľadať v:",
		include_subfolders: "Vrátane podpriečinkov",

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
		warning_char: "v",

		// used for state icon title in Contentlist
		locked_item_icon_title: "Uzamkol ${0}",
		checked_out_icon_title: "Odhlásil ${0}",
		major_minor_version_icon_title: "Hlavná verzia s vedľajšími verziami",
		suspended_icon_title: "Pracovný tok je pozastavený",
		on_hold_icon_title: "Pozastavenie",
		has_notes_icon_title: "Má poznámky",
		record_icon_title: "Deklarovaný ako záznam",
		compound_document_icon_title: "Zložený dokument",
		validateTemplate_icon_title: "Šablóna tímového priestoru potrebuje validáciu",
		offlineTemplate_icon_title: "Šablóna tímového priestoru je offline",
		offlineTeamspace_icon_title: "Tímový priestor je offline",
		pending_delete_icon_title: "Tímový priestor čaká na odstránenie",
		delete_error_icon_title: "Tímový priestor nie je možné vymazať",
		defaultTemplate_icon_title: "Predvolená šablóna tímového priestoru",
		teamspace_icon_title: "Tímový priestor",
		teamspace_template_icon_title: "Šablóna tímového priestoru",
		has_bookmark_icon_title: "Má záložku",
		read_only_icon_title: "Len na čítanie",
		no_results_were_found: "Nenašli sa žiadne výsledky.",
		folder_is_empty: "Priečinok je prázdny",
		no_checked_out_items: "Nemáte žiadne odhlásené položky.",
		inbasket_is_empty: "Zoznam úloh je prázdny.",
		worklist_is_empty: "Pracovný zoznam je prázdny.",
		tracker_milestone_completed: "Dokončené",
		stepprocessor_attachments_title: "Obsah",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Uzamknúť položky",
		unlock_items: "Odomknúť položky",
		checkin_item: "Prihlásiť položku",

		/* Help */
		learn_more: "Bližšie informácie",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Otvoriť tímový priestor",
		repository_tab_createWorkspace: "Nový tímový priestor",
		repository_tab_createWorkspaceTemplate: "Nová šablóna tímového priestoru",
		repository_tab_DefaultTemplate: "Predvolené",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Táto úloha skopíruje dokumenty.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Nemáte privilégiá pre úpravy pre vybratú šablónu tímového priestoru.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Naozaj chcete odstrániť tímový priestor ${0}? <br><br>V archíve sa zachovajú iba tie dokumenty, ktoré boli zaradené aj do iných priečinkov. Dokumenty, ktoré boli zaradené iba do tohto tímového priestoru, sa odstránia.",
		teamspaceDecommissionLabel: "Odstrániť:",
		teamspaceDecommissionDescription: "Odstránenie tímového priestoru odstráni tento tímový priestor zo servera:  Označte ako sa bude zaobchádzať s artefaktmi tímového priestoru.",
		teamspaceDecommissionOptions: "Odstrániť voľby tímového priestoru",
		teamspaceDecommissionDeleteAll: "Odstrániť všetky artefakty tímového priestoru",
		teamspaceDecommissionReFileAll: "Presmerovať všetky artefakty tímového priestoru",
		teamspaceDecommissionReFileDestination: "Presunúť do:",
		teamspaceDecommissionReFileIn: "Presmerovať do",
		teamspaceDecommissionTaskName: "Úloha odstránenia tímového priestoru",
		teamspaceDecommissionTaskDescription: "Táto úloha odstráni tímový priestor z archívu.",
		teamspaceDecommissionDeletionStarted: "Bolo naplánované odstránenie tímového priestoru",
		teamspaceDecommissionDeletionConnectionFailed: "Úlohu na odstránenie tímového priestoru nemožno spustiť, pretože sa nemôže pripojiť k archívu. Uistite sa, že prihlasovacie údaje správcu archívu sú správne.",

		teamspace_edit_properties_notsupported: "Vlastnosti tímového priestoru môžete upravovať len zo zobrazenia Tímové priestory.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Tímový priestor je v stave offline a môžu ho otvoriť len vlastníci tímového priestoru",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Priečinok:",
		workspace_validation_ets: "Nasledovné šablóny položiek nie sú k dispozícii v tomto archíve a boli odstránené zo zoznamu vybratých šablón položiek:",
		workspace_validation_classes: "Nasledovné triedy nie sú k dispozícii v tomto archíve a boli odstránené zo zoznamu vybratých tried:",
		workspace_validation_searches: "Nasledovné vyhľadávania nie sú k dispozícii v tomto archíve a boli odstránené zo zoznamu vybratých vyhľadávaní:",
		workspace_validation_docs_folders: "Nasledovné dokumenty a priečinky nie sú k dispozícii v tomto archíve a boli odstránené zo zoznamu zahrnutých položiek:",
		workspace_change_template_confirmation_question: "Ak vyberiete inú šablónu, dôjde k strate všetkých vašich zmien. Chcete pokračovať?\n",
		workspace_delete_item_confirmation_question: "Chcete odstrániť položku ${0}?\n",
		workspace_delete_role_confirmation_question: "Chcete odstrániť rolu ${0}?\n",
		workspace_delete_confirmation_question: "Ak odstránite tímový priestor, odstráni sa len kontajner tímového priestoru. Priečinky a dokumenty v tímovom priestore zostanú v archíve a budete ich môcť nájsť pomocou funkcie vyhľadávania. Ak chcete odstrániť obsah tímového priestoru, najprv odstráňte položky v tímovom priestore a následne tímový priestor.<br><br>Chcete odstrániť tímový priestor ${0}?",
		workspacebuilder_instance_template_name_header: "Názov šablóny tímového priestoru",
		workspacebuilder_instance_template_description_header: "Popis",

		workspacebuilder_template_tooltip_name: "Názov šablóny nemôže obsahovať nasledujúce znaky: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Názov tímového priestoru nemôže obsahovať nasledujúce znaky: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Zadajte popis, ktorý užívateľom umožní vykonať správny výber zo zoznamu  šablón. Napríklad môžete uviesť informácie o užívateľoch, pre ktorých je šablóna určená alebo o použití šablóny.",
		workspacebuilder_instance_tooltip_description: "Zadajte popis, ktorý umožní užívateľom odlíšiť tento tímový priestor od iných tímových priestorov.",

		workspacebuilder_template_edit_properties_pane: "Upraviť šablónu tímového priestoru",
		workspacebuilder_instance_properties_pane: "Definícia tímového priestoru",
		workspacebuilder_template_properties_pane: "Definícia šablóny tímového priestoru",

		workspacebuilder_instance_security_pane: "Nastaviť nastavenia bezpečnosti tímového priestoru",
		workspacebuilder_template_security_pane: "Nastaviť nastavenia bezpečnosti šablóny",

		workspacebuilder_layout_pane: "Vybrať rozloženie",
		workspacebuilder_search_templates_pane: "Výber vyhľadávaní",
		workspacebuilder_document_folders_pane: "Zahrnuté priečinky a dokumenty",
		workspacebuilder_doctypes_entryTemplates_pane: "Výber tried alebo šablón položiek",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Výber tried",
		workspacebuilder_security: "Bezpečnosť tímového priestoru",

		workspacebuilder_roles_pane: "Výber rolí",
		workspacebuilder_security: "Bezpečnosť",

		workspacebuilder_properties_templates: "Dostupné šablóny:",
		workspacebuilder_available_templates: "Dostupné vyhľadávania:",
		workspacebuilder_selected_templates: "Vybraté vyhľadávania:",
		workspacebuilder_templates_name: "Názov",

		workspacebuilder_available_entryTemplates: "Dostupné šablóny položiek:",
		workspacebuilder_selected_entryTemplates: "Vybraté šablóny položiek:",

		workspacebuilder_item_classes: "Dostupné triedy:",
		workspacebuilder_item_classes_selected: "Vybraté triedy:",
		workspacebuilder_properties_select_template: "Vyberte šablónu, ktorá sa má použiť s týmto tímovým priestorom.",
		workspacebuilder_template_properties: "Definícia šablóny tímového priestoru",
		workspacebuilder_instance_properties: "Definícia tímového priestoru",
		workspacebuilder_template_introText: "Pomocou výberov v navigácii zadajte spoločné komponenty, ktoré chcete  mať v každom tímovom priestore, ktorý bude vytvorený z tejto šablóny. Keď prácu dokončíte, kliknite na tlačidlo <b>Dokončiť</b>, aby ste šablónu sprístupnili iným užívateľom, ktorí ju môžu použiť na vytvorenie nových tímových priestorov.",
		workspacebuilder_instance_introText: "Tímy používajú tímové priestory na zdieľanie a prácu pomocou špecifických množín  dokumentov. Zadajte zmysluplný názov a popis pre tento tímový priestor, aby umožňoval užívateľom odlíšiť tento tímový  priestor od iných tímových priestorov. Tímový priestor si môžete prispôsobiť tak, že doň zahrniete ďalšie vyhľadávania, triedy alebo šablóny položiek, dokumenty  a priečinky.",

		workspacebuilder_template_search_template_introText: "Vyberte predvolené vyhľadávania, ktoré chcete mať v každom tímovom priestore, ktorý bude vytvorený z tejto šablóny. Ak nevyberiete žiadne vyhľadávania, užívateľ tímového priestoru uvidí všetky vyhľadávania, ku ktorým bude mať prístup. Užívatelia s príslušnými oprávneniami môžu v tímovom priestore zdieľať vyhľadávania a do tímového priestoru ich pridávať.",
		workspacebuilder_instance_search_template_introText: "Zahrňte vyhľadávania, ktoré umožnia užívateľom tímových priestorov efektívnejšie vykonávať ich úlohy. Ak nie sú zahrnuté žiadne vyhľadávania, užívatelia tímových priestorov budú vidieť všetky vyhľadávania, na použitie ktorých majú oprávnenie. Užívatelia môžu taktiež pridávať a zdieľať vyhľadávania v tímovom priestore s príslušnými oprávneniami.",

		workspacebuilder_template_roles_introText: "Užívatelia tímového priestoru sú priraďovaní k roliam. Roly určujú, ktoré  úlohy môžu užívatelia vykonávať. Kliknite na ikony vedľa každej roly a zobrazia sa vám povolené úlohy. Vyberte roly, ktoré sú vhodné pre tímový priestor.",
		workspacebuilder_template_roles_modify_introText: "Môžete upraviť oprávnenia, ktoré sú priradené k jednotlivým rolám v tomto tímovom priestore. Členov tímového priestoru by ste mali informovať, keď sa ich oprávnenia zmenia.",

		workspacebuilder_template_roles_header_name: "Názov roly",

		workspacebuilder_template_folders_introText: "Vyberte predvolené dokumenty a priečinky, ktoré majú byť súčasťou každého tímového priestoru, ktorý bude vytvorený z tejto šablóny. Dokumenty môžete pridávať buď ako prepojenia, alebo ako kópie. Prepojenia použite na ukazovanie na dokumenty, z ktorých nechcete viaceré kópie, ako napríklad politiky alebo procedúry. Kópie vytvárajte z dokumentov, ktoré budú užívatelia upravovať, ako napríklad šablóny a formuláre.",
		workspacebuilder_instance_folders_introText: "Vyberte predvolené dokumenty a priečinky, ktoré majú byť súčasťou tímového priestoru. Dokumenty môžete pridávať buď ako prepojenia, alebo ako kópie. Prepojenia použite na ukazovanie na dokumenty, z ktorých nechcete viaceré kópie, ako napríklad politiky alebo procedúry. Kópie vytvárajte z dokumentov, ktoré budú užívatelia upravovať, ako napríklad šablóny a formuláre.",

		workspacebuilder_template_roles_introText: "Zadajte roly, ktoré budú súčasťou každého tímového priestoru, ktorý bude vytvorený z tejto šablóny. Vytvárať môžete aj nové roly, ktoré môžete použiť pri tvorbe iných šablón tímových priestorov.",
		workspacebuilder_instance_users_introText: "V tímovom priestore bude každému užívateľovi priradená jedna alebo viaceré roly, ktoré určujú úlohy, ktoré môže užívateľ vykonávať. Pridajte užívateľov do tímového priestoru a priraďte roly užívateľom.",

		workspacebuilder_instance_navigation_pane_title: "Zostavovanie tímových priestorov",
		workspacebuilder_template_navigation_pane_title: "Zostavovanie šablón tímových priestorov",

		workspacebuilder_roles_roles_nopermissions: "Pre {0} rolu nie sú vybraté žiadne oprávnenia.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Vybraté roly:",
		workspacebuilder_roles_available_roles: "Dostupné roly:",
		workspacebuilder_roles_privilege_header: "Oprávnenie",
		workspacebuilder_roles_select_role: "Vyberte rolu",
		workspacebuilder_roles_select_permission: "Vyberte oprávnenie",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Rola s názvom {0} už existuje. Pre rolu musíte zadať jedinečný názov. ",
		workspacebuilder_roles_edit_dialog_role_name: "Názov roly:",
		workspacebuilder_roles_edit_dialog_role_description: "Popis roly:",
		workspacebuilder_roles_edit_dialog_title_new: "Nová rola",
		workspacebuilder_roles_edit_dialog_title_edit: "Upraviť rolu",

		workspacebuilder_roles_privileges_header: "Oprávnenia pre {0} rolu:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Oprávnenia pre dokumenty:",
		workspacebuilder_roles_priv_group_folder: "Oprávnenia pre priečinky:",
		workspacebuilder_roles_priv_group_teamspace: "Oprávnenia pre tímové priestory:",
		workspacebuilder_roles_priv_group_item: "Oprávnenia pre dokumenty a priečinky:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Správa oprávnení",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Užívatelia s týmto oprávnením môžu riadiť prístup k dokumentom a priečinkom v tímovom priestore. Toto oprávnenie zahŕňa umožnenie iným užívateľom odstraňovať dokumenty a priečinky, upravovať ich vlastnosti, vytvárať podpriečinky, atď.",

		workspacebuilder_roles_priv_deleteItems: "Odstrániť",
		workspacebuilder_roles_plbl_deleteItems: "Užívatelia s týmto oprávnením môžu odstraňovať dokumenty a priečinky z tímového priestoru.",

		workspacebuilder_roles_priv_createItems: "Vytvoriť",
		workspacebuilder_roles_plbl_createItems: "Užívatelia s týmto oprávnením môžu v tímovom priestore vytvárať dokumenty a priečinky.",

		workspacebuilder_roles_priv_viewItemProperties: "Zobraziť vlastnosti",
		workspacebuilder_roles_plbl_viewItemProperties: "Užívatelia s týmto oprávnením môžu zobraziť vlastnosti dokumentov a priečinkov v tímovom priestore, čo zahŕňa aj systémové vlastnosti.",

		workspacebuilder_roles_priv_modifyItemProperties: "Upraviť vlastnosti",
		workspacebuilder_roles_plbl_modifyItemProperties: "Užívatelia s týmto oprávnením môžu upraviť vlastnosti dokumentov a priečinkov v tímovom priestore.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Spravovať oprávnenia priečinka",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Užívatelia s týmto oprávnením dokážu spravovať prístup do priečinkov v tímovom priestore. Toto oprávnenie zahŕňa povolenie iným užívateľom na odstránenie priečinkov, úpravy vlastností priečinka, vytváranie podpriečinkov, atď.",

		workspacebuilder_roles_priv_deleteFolders: "Odstrániť priečinky",
		workspacebuilder_roles_plbl_deleteFolders: "Užívatelia s týmto oprávnením môžu odstrániť priečinky z tímového priestoru.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Upraviť vlastnosti priečinka",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Užívatelia s týmto oprávnením môžu upraviť vlastnosti priečinkov v tímovom priestore.",

		workspacebuilder_roles_priv_createSubfolders: "Vytvoriť podpriečinky",
		workspacebuilder_roles_plbl_createSubfolders: "Užívatelia s týmto oprávnením môžu vytvárať priečinky v tímovom priestore.",

		workspacebuilder_roles_priv_fileInFolders: "Pridať do priečinkov",
		workspacebuilder_roles_plbl_fileInFolders: "Užívatelia s týmto oprávnením môžu pridávať prepojenia z priečinkov v tímovom priestore na dokumenty.",

		workspacebuilder_roles_priv_viewFolderProperties: "Zobraziť vlastnosti priečinka",
		workspacebuilder_roles_plbl_viewFolderProperties: "Užívatelia s týmto oprávnením môžu zobraziť vlastnosti priečinkov v tímovom priestore, ktorý obsahuje systémové vlastnosti.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Spravovať oprávnenia dokumentu",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Užívatelia s týmto oprávnením dokážu spravovať prístup do dokumentov v tímovom priestore. Toto oprávnenie umožňuje ostatným užívateľom odstraňovať dokumenty, upravovať vlastnosti dokumentu, atď.",

		workspacebuilder_roles_priv_deleteDocuments: "Odstrániť dokumenty",
		workspacebuilder_roles_plbl_deleteDocuments: "Užívatelia s týmto oprávnením môžu odstrániť dokumenty z tímového priestoru.",

		workspacebuilder_roles_priv_promoteVersions: "Zvýšiť verzie",
		workspacebuilder_roles_plbl_promoteVersions: "Užívatelia s týmto oprávnením môžu k dokumentom v tímovom priestore priradiť nové číslo verzie.",

		workspacebuilder_roles_priv_modifyContent: "Upraviť dokumenty",
		workspacebuilder_roles_plbl_modifyContent: "Užívatelia s týmto oprávnením môžu upraviť obsah dokumentov v tímovom priestore.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Upraviť vlastnosti dokumentu",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Užívatelia s týmto oprávnením môžu upraviť vlastnosti dokumentov v tímovom priestore.",

		workspacebuilder_roles_priv_viewContent: "Zobraziť dokumenty",
		workspacebuilder_roles_plbl_viewContent: "Užívatelia s týmto oprávnením môžu zobraziť dokumenty v tímovom priestore.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Zobraziť vlastnosti dokumentu",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Užívatelia s týmto oprávnením môžu zobraziť vlastnosti dokumentov v tímovom priestore, vrátane systémových vlastností.",

		workspacebuilder_roles_priv_addNewSearches: "Pridať vyhľadávania",
		workspacebuilder_roles_plbl_addNewSearches: "Užívatelia s týmto oprávnením dokážu pridať vyhľadávania do tímového priestoru. Vyhľadávanie nebude štandardne k dispozícii ostatným užívateľom.",

		workspacebuilder_roles_priv_createNewSearches: "Vytvoriť vyhľadávania",
		workspacebuilder_roles_plbl_createNewSearches: "Užívatelia s týmto oprávnením môžu vytvoriť nové vyhľadávania, ale nemôžu ich uložiť. Ak užívatelia nemajú toto oprávnenie, do tímového priestoru nemôžu pridať dokumenty, ktoré sú už v archíve.",

		workspacebuilder_roles_priv_shareSearches: "Zdieľať vyhľadávania",
		workspacebuilder_roles_plbl_shareSearches: "Užívatelia s týmto oprávnením môžu zdieľať vyhľadávania, ktoré vytvoria, s inými užívateľmi tímového priestoru.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Spravovať triedy alebo šablóny položiek",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Užívatelia s týmto oprávnením môžu pridávať a odstraňovať triedy alebo šablóny položiek do/z tímového priestoru.",

		workspacebuilder_roles_priv_addRemoveClasses: "Spravovať triedy",
		workspacebuilder_roles_plbl_addRemoveClasses: "Užívatelia s týmto oprávnením môžu do tímového priestoru pridávať a  odstraňovať z neho triedy.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Spravovať užívateľov tímového priestoru",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Užívatelia s týmto oprávnením dokážu pridávať a odstraňovať užívateľov a skupiny z tímového priestoru. Okrem toho môžu spravovať roly, ktoré majú užívatelia priradené.",

		workspacebuilder_roles_priv_modifyRoles: "Upraviť roly",
		workspacebuilder_roles_plbl_modifyRoles: "Vlastníci s týmto oprávnením môžu upraviť oprávnenia na roly pre tímový priestor. Toto oprávnenie je k dispozícii len pre vlastníkov.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Výber užívateľov",
		workspacebuilder_users_add_users_and_groups_button: "Pridať užívateľov a skupiny...",
		workspacebuilder_users_users_or_group_header: "Užívateľ a skupina",
		workspacebuilder_users_roles_header: "Roly",

		workspacebuilder_users_role_header: "Rola",
		workspacebuilder_users_role_no_permissions: "Táto rola nemá žiadne oprávnenia",
		workspacebuilder_users_available_roles_label: "Dostupné roly:",
		workspacebuilder_users_selected_users_and_groups_label: "Vybratí užívatelia a skupiny:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Nie je možné uložiť tímový priestor. Pre tento tímový priestor musíte zadať aspoň jedného vlastníka.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Nie je možné uložiť tímový priestor. Všetci užívatelia musia mať priradenú rolu.",
		// end of select users

		workspacebuilder_search_templates: "Výber vyhľadávaní",
		workspacebuilder_search_add: "Pridať vyhľadávanie",
		workspacebuilder_properties_workspaceName: "Názov tímového priestoru:",
		workspacebuilder_properties_templateName: "Názov šablóny:",
		workspacebuilder_properties_workspaceDescription: "Popis tímového priestoru:",
		workspacebuilder_properties_templateDescription: "Popis šablóny:",
		workspacebuilder_properties_workspaceTemplate: "Vybratá šablóna:",
		workspacebuilder_properties_security: "Zdieľať šablónu s:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Presunúť z tímového priestoru:",
		moveTeamspaceDocuments_security: "Zdieľať dokument s:",
		moveTeamspaceDocuments_security_change: "Nastaviť voliteľné možnosti zabezpečenia pre vybraté položky",
		moveTeamspaceDocuments_item_type_level: "Nemôžete vybrať voľbu Nahradiť možnosti zabezpečenia vybratých položiek, pretože trieda vybratej položky je nakonfigurovaná, aby používala len bezpečnosť na úrovni tried",
		moveTeamspaceDocuments_security_inherit: "Zdediť možnosti zabezpečenia z cieľového priečinka",
		moveTeamspaceDocuments_file_info_text: "Položky môžete presúvať z jedného tímového priestoru do druhého tímového priestoru alebo do priečinka.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Nemáte príslušné oprávnenia na presun položiek do vybratého priečinka.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Nemáte príslušné oprávnenia na presun položiek z  tímového priestoru.",
		moveTeamspaceDocuments_move_mixed_items: "Nemôžete nahradiť možnosti zabezpečenia vybratých položiek. Niektoré položky nie sú riadené tímovým priestorom. Možnosti zabezpečenia môžete nahradiť iba pre tie položky, ktoré sú riadené tímovým priestorom.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Musíte zadať názov pre tímový priestor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Musíte zadať názov pre šablónu tímového priestoru.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Názov tímového priestoru nemôže obsahovať nasledujúce znaky: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Názov šablóny nemôže obsahovať nasledujúce znaky: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Prepojenie na dokument",
		workspacebuilder_folders_makeDocCopy: "Kopírovať dokument",
		workspacebuilder_folders_newfolder: "Nový priečinok",
		workspacebuilder_folders_local_drive: "Z lokálneho adresára",
		workspacebuilder_folders_from_repo: "Z archívu",
		workspacebuilder_folders_add_doc: "Pridať dokument",
		workspacebuilder_folders_grid_name: "Názov",
		workspacebuilder_folders_props: "Vlastnosti",
		workspacebuilder_folders_remove: "Odstrániť",
		workspacebuilder_folders_delete: "Odstrániť",
		workspacebuilder_folders_adddoc_local: "Pridať dokument z lokálnej jednotky",
		workspacebuilder_folders_adddoc_repo: "Pridať dokument z archívu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Zadaný názov priečinka už existuje. Zadajte iný názov priečinka.",

		workspacebuilder_classes_title: "Výber tried alebo šablón položiek",
		workspacebuilder_classes_title_cm: "Výber tried",
		workspacebuilder_classes_template_introText: "Určte, či budú tímové priestory, ktoré boli vytvorené z tejto šablóny, používať triedy alebo šablóny položiek na pridávanie dokumentov do archívu. Ak nevyberiete žiadne triedy, tímové priestory uvidia všetky triedy, ku ktorým budú mať prístup.  Užívateľ môže upraviť zoznam tried alebo šablón položiek  v tímovom priestore, ak má na to príslušné oprávnenia.",
		workspacebuilder_classes_template_introText_cm: "Vyberte triedy, ktoré môžu užívatelia používať na pridávanie dokumentov do archívu. Ak nevyberiete žiadne triedy, užívatelia tímového priestoru uvidia všetky triedy, ku ktorým budú mať prístup. Užívatelia môžu upraviť zoznam tried v tímovom priestore, ak majú príslušné oprávnenia.",
		workspacebuilder_classes_instance_introText: "Vyberte triedy alebo šablóny položiek, ktoré môžu užívatelia používať na pridávanie dokumentov do archívu. Ak nie sú vybraté žiadne triedy, užívatelia tímového priestoru budú vidieť všetky triedy, pre ktoré majú oprávnenie. Užívatelia môžu upraviť zoznam tried alebo šablón položiek v tímovom priestore, ak majú príslušné oprávnenia.",
		workspacebuilder_classes_instance_introText_cm: "Vyberte triedy, ktoré môžu užívatelia používať na pridávanie dokumentov do archívu. Ak nie sú vybraté žiadne triedy, užívatelia tímového priestoru budú vidieť všetky triedy, pre ktoré majú oprávnenie. Užívatelia môžu upraviť zoznam tried v tímovom priestore, ak majú príslušné oprávnenia.",
		workspacebuilder_classes_selection: "Vyberte triedy:",
		workspacebuilder_classes_list: "Dostupné triedy:",
		workspacebuilder_classes_columns_default: "Predvolené",
		workspacebuilder_classes_columns_className: "Názov triedy",
		workspacebuilder_classes_type_classes: "Na pridanie dokumentov použiť triedy",
		workspacebuilder_classes_type_classes_tooltip: "Triedy zahŕňajú priradené vlastnosti tak, že dokumenty môžu byť uložené pre neskoršie použitie.",
		workspacebuilder_classes_type_entryTemplates: "Na pridanie dokumentov použiť šablóny položiek",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Šablóny položiek zabezpečia, že informácie, ktoré sú poskytnuté pre každý dokument, sú konzistentné a používajú preddefinované hodnoty.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Názov šablóny položiek",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Popis",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Do tímového priestoru musíte pridať aspoň jednu šablónu položky.",

		workspacebuilder_classes_new: "Nová trieda",
		workspacebuilder_classes_add: "Pridať triedu",
		workspacebuilder_entryTemplate_add: "Pridať šablónu položky",
		workspacebuilder_add_list: "Pridať",
		workspacebuilder_makeDefault_list: "Vytvoriť ako predvolené",
		workspacebuilder_removeDefault_list: "Odstrániť predvolené",

		workspacebuilder_roles_title: "Výber rolí",
		workspacebuilder_roles_title_modify: "Upraviť roly",

		workspacebuilder_selection_moveup: "Presunúť nahor",
		workspacebuilder_selection_movedown: "Presunúť nadol",
		workspacebuilder_selection_remove: "Odstrániť",
		workspacebuilder_selection_add: "Pridať",
		workspacebuilder_selection_create_new_search: "Nové vyhľadávanie...",
		workspacebuilder_selection_create_new_role: "Nová rola...",
		workspacebuilder_selection_make_role_available: "Sprístupniť",
		workspacebuilder_selection_make_role_available_tooltip: "Zdieľa vybratú rolu s inými šablónami. Roli musíte priradiť aspoň jedno oprávnenie na jeho zdieľanie.",

		workspacebuilder_navigation_next: "Ďalej",
		workspacebuilder_navigation_finish: "Dokončiť",
		workspacebuilder_navigation_validate: "Overiť platnosť",
		workspacebuilder_navigation_previous: "Späť",
		workspacebuilder_navigation_cancel: "Zrušiť",
		workspacebuilder_navigation_customize: "Prispôsobiť",

		workspacebuilder_search_dialog_title: "Hľadať",
		workspacebuilder_dialog_close: "Zatvoriť",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Dostupnosť šablón:",
		workspace_properties_templateState_tooltip: "Šablónu zneprístupnite, aby ste zamedzili užívateľom vytvárať tímové priestory, ktoré budú používať túto šablónu.",
		workspace_properties_dialog_title: "Vlastnosti šablóny",
		workspace_properties_online_radio_option_label: "Sprístupniť",
		workspace_properties_offline_radio_option_label: "Zneprístupniť",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Chcete zrušiť vytváranie tímového priestoru bez uloženia zmien?",
		workspacebuilder_cancel_confirmation_button: "Áno",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Všetky neplatné položky budú odstránené zo šablóny a šablóna je sprístupnená užívateľom.  Chcete overiť platnosť šablóny tohto tímového priestoru?",
		workspacebuilder_validate_confirmation_button: "Áno",
		workspacebuilder_validate_confirmation_title: "Overiť platnosť",

		/* Entry templates builder */
		entry_templates: "Manažér šablón položiek",
		no_entry_templates_were_found: "Neexistujú žiadne šablóny položiek",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Roly:",

		/* User Group picker widget */
		directory_label: "Adresár:",
		scope_label: "Hľadať:",
		name_starts_with_label: "Názov začína na",
		name_contains_label: "Názov obsahuje",
		display_name_contains_label: "Zobrazovaný názov obsahuje",
		starts_with_label: "Začína:",
		available_label: "Dostupné:",
		available_heading: "Dostupné",
		selected_label: "Vybraté:",
		selected_heading: "Vybraté",
		available_repositories_label: "Dostupné archívy",
		selected_repositories_label: "Vybraté archívy",
		default_repository: "Predvolený archív:",
		default_repository_placeholder: "Vyberte archív",
		default_role_placeholder: "Vyberte rolu",
		menu_label_placeholder: "Vyberte alebo zadajte označenie",
		default_repository_hover: "Vyberte archív, ktorý má byť štandardne vybratý, keď sa užívatelia prihlásia do webového klienta z tejto pracovnej plochy.<br><br><b>Upozornenie:</b> Pred výberom predvoleného archívu musíte pridať archívy na pracovnú plochu zoznamu vybratých archívov.",
		default_repository_workflow_hover: "<b>Zapamätajte si:</b>Aplikačné priestory môžete nakonfigurovať len pre archívy, ktoré sú nakonfigurované pre túto pracovnú plochu.",
		remove_label: "Odstrániť",
		users_label: "Užívatelia",
		groups_label: "Skupiny",
		user_or_group_name_label: "Meno užívateľa alebo názov skupiny:",
		user_or_group_name_hover: "Zadajte platné meno užívateľa alebo názov skupiny pre archív.  Platnosť mena alebo názvu sa neoveruje.",
		user: "Užívateľ",
		group: "Skupina",
		name: "Názov:",
		displayName: "Zobrazovaný názov",
		display_name: "Zobrazovaný názov:",
		shortName: "Skrátený názov:",
		distinguishedName: "Jedinečný názov:",
		search_tooltip: "Hľadať",
		add_tooltip: "Pridať",
		add_selected_tooltip: "Pridať do zoznamu vybratých položiek",
		remove_tooltip: "Odstrániť",
		remove_selected_tooltip: "Odstrániť zo zoznamu vybratých položiek",
		add_to_selected_tooltip: "Pridať",
		remove_from_selected_tooltip: "Odstrániť",
		move_up_selected_tooltip: "Presunúť nahor",
		move_down_selected_tooltip: "Presunúť nadol",
		advanced_search_options_tooltip: "Rozšírené nastavenia",
		move_right_selected_tooltip: "Presunúť do podponuky",
		move_left_selected_tooltip: "Presunúť mimo podponuky",
		add_separator: "Pridať oddeľovač",
		menu_item_label: "Označenie položky ponuky:",
		add_menu_label: "Pridať podponuku",
		menu_label: "Označenie podponuky:",
		menu_label_info: "<b>Upozornenie:</b> Pred uložením tejto ponuky musíte do tejto podponuky pridať aspoň jednu položku ponuky.",
		menu_dropdown_label: "Označenie rozbaľovacieho tlačidla:",
		menu_dropdown_label_info: "<b>Dôležité:</b> Aby ste mohli uložiť tento panel nástrojov, musíte najprv do tohto rozbaľovacieho tlačidla pridať aspoň jednu položku ponuky.",
		no_item_found: "Nenašli sa žiadne výsledky.",
		me: "Ja",
		anyone: "Ktokoľvek",
		specific_users: "Konkrétni užívatelia",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Vyhľadávanie vrátilo viac ako {0} výsledkov. Zmeňte svoje kritéria, aby bolo vyhľadávanie presnejšie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Výsledky vyhľadávania obsahujú položky, ktoré už boli vybraté. Tieto položky sa nezobrazia vo výsledkoch vyhľadávania.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Bolo vrátených viac ako {0} výsledkov. Na zúženie počtu výsledkov použite filter",

		user_already_selected: "Tento užívateľ je už vybratý.  Určte iného užívateľa.",
		group_already_selected: "Táto skupina je už vybratá.  Určte inú skupinu.",
		user_cannot_select_self: "Nemôžete pridať sám seba. Určte iného užívateľa.",

		/* Select User Group dialog */
		select_user_group_add_label: "Pridať",
		select_user_group_cancel_label: "Zrušiť",
		add_users_groups_label: "Pridať užívateľov a skupiny",
		add_user_group_label: "Pridať užívateľa a skupinu",
		add_users_label: "Pridať užívateľov",
		add_user_label: "Pridať užívateľa",
		add_label: "Pridať:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Nasledujúce dokumenty obsahujú neuložené zmeny v anotáciách:",
		viewer_confirm_to_proceed: "Chcete pokračovať bez uloženia zmien?",
		viewer_warn_has_changes: "Neuložené zmeny budú zrušené.",
		viewer_warn_is_printing: "Prebiehajúca tlač sa nemusí dokončiť.",
		viewer_warn_confirm_exit: "Chcete ukončiť?",
		viewer_prompt_save_changes: "Nasledujúci dokument má neuložené zmeny anotácií, ktoré sa stratia:<br>${0}<br><br>Chcete uložiť zmeny?",
		viewer_prompt_mergesplit_changes: "Nasledujúce dokumenty obsahujú neuložené zmeny:<br>${0}<br><br>Chcete pokračovať bez uloženia zmien?",
		viewer_prompt_mergesplit_tab_changes: "Nasledujúci dokument obsahuje neuložené zmeny:<br>${0}<br><br>Chcete pokračovať bez uloženia zmien?",
		viewer_new_item_name: "Nový dokument",
		viewer_top_frame: "Horný rámec:",
		viewer_bottom_frame: "Spodný rámec:",
		viewer_left_frame: "Ľavý rámec:",
		viewer_right_frame: "Pravý rámec:",
		viewer_viewer_frame: "Rámec prezerača:",
		viewer_properties_frame: "Rámec vlastností:",
		viewer_comment_frame: "Rámec komentárov:",
		viewer_mergesplit_on: "Zobrazenie",
		viewer_mergesplit_off: "Zlúčiť a rozdeliť",
		viewer_mergesplit_context_menu_move: "Presunúť",
		viewer_mergesplit_context_menu_rename: "Premenovať",
		viewer_mergesplit_context_menu_delete: "Odstrániť",
		//move to new window
		viewer_move_to_new_window:"Presunúť do nového okna",
		viewer_continue:"Zahodiť zmeny",
		viewer_return_to_original_window:"Späť do pôvodného okna",
		viewer_switch_window:"Prepnúť do druhého okna",
		viewer_prompt_lost_changes:"Dokument ${0} je už otvorený v inom okne. Niektoré zmeny v tomto dokumente neboli ešte uložené.<br><br>Chcete prejsť do druhého okna a uložiť zmeny, alebo chcete zhodiť zmeny v dokumente a otvoriť ho v tomto okne?",
		viewer_mergesplit_fallback_info: "Akciu zlúčenia a rozdelenia môžete vykonať iba na dokumentoch, ktoré sa nachádzajú v tom istom archíve.",
		viewer_tabbed_layout: "Zobraziť ako karty",
		viewer_tabbed_layout_highcontrast: "Karty",
		viewer_split_vertical_layout: "Rozdelené panely - hore a dolu",
		viewer_split_vertical_layout_highcontrast: "Hore a dolu",
		viewer_split_horizontal_layout: "Rozdelené panely - vľavo a vpravo",
		viewer_split_horizontal_layout_highcontrast: "Vľavo a vpravo",
		viewer_add_vertical_layout: "Nová karta dole",
		viewer_add_vertical_layout_highcontrast: "Karta dolu",
		viewer_add_horizontal_layout: "Nová karta vpravo",
		viewer_add_horizontal_layout_highcontrast: "Karta vpravo",
		viewer_add_horizontal_layout_rtl: "Nová karta vľavo",
		viewer_add_horizontal_layout_rtl_highcontrast: "Karta vľavo",
		viewer_split_properties_layout: "Zobraziť vlastnosti",
		viewer_split_comment_layout: "Zobraziť komentáre",
		viewer_split_notelog_layout: "Zobraziť zoznam poznámok",
		viewer_window_title: "Prezerač ${0}",
		viewer_next_hit: "Zobraziť ďalší dokument v zozname",
		viewer_prev_hit: "Zobraziť predchádzajúci dokument v zozname",
		viewer_confrim_more_search_results: "Výsledky vyhľadávania neobsahujú žiadne ďalšie zobraziteľné dokumenty. Chcete získať viac výsledkov vyhľadávania?",
		viewer_confirm_get_next_page: "Zoznam výsledkov neobsahuje viac položiek na zobrazenie.  Chcete získať viac výsledkov vyhľadávania?",
		viewer_confirm_get_next_item: "Zoznam výsledkov obsahuje viac položiek na zobrazenie.  Chcete zobraziť nasledujúcu položku?",
		viewer_fn_annotation_tooltip: " Vytvoril: ${0},  dňa: ${1}",
		viewer_box_note_limitation: "Dokumenty Box Note môžete otvoriť a zobraziť iba v samostatnom okne.",
		viewer_click_to_open_box_note: "Kliknite sem pre otvorenie dokumentu Box Note.",
		viewer_box_view_expiring: "Maximálna doba prehliadania dokumentu v službe Box je 60 minút. Platnosť vašej aktuálnej relácie skončí o ${0} min. Ak chcete pokračovať v práci s dokumentom, musíte ho znova načítať teraz. Chcete znova načítať dokument?",
		viewer_add_dialog_save_as_type: "Uložiť ako typ:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Konflikt pri odhlasovaní",
		viewer_checkout_conflict: "Dokument odhlásil iný užívateľ.",
		viewer_checkout_confirm: "K dispozícii je novšia verzia dokumentu. Chcete pokračovať v odhlasovaní dokumentu alebo chcete načítať novšiu verziu v prezerači? Ak načítate novší dokument, všetky neuložené zmeny sa stratia.",
		viewer_checkout_continue: "Pokračovať v odhlasovaní",
		viewer_checkout_reload: "Znova zaviesť",
		viewer_status_building: "Zostavuje sa dokument...",
		viewer_status_adding: "Pridáva sa dokument...",
		viewer_status_checking_in: "Prihlasuje sa dokument...",

		/* Class Selector Widget */
		include_subclasses_label: "Vrátane podtried",
		include_subclasses_label2: "Vyhľadávať aj v podtriedach",
		include_subclasses_note: "(Vrátane podtried)",
		available_classes_col_header: "Dostupné triedy",
		single_class_label: "Vyhľadávať v jednej triede",
		multiple_classes_label: "Vyhľadávať vo viacerých triedach",
		multiple_classes_hover_help: "Vyberte túto voľbu, ak chcete vyhľadávať vo viacerých triedach. Triedami môžu byť rodičovské triedy alebo podtriedy. Ak vyberiete túto voľbu, uvidíte len vlastnosti a hodnoty, ktoré majú vybraté triedy spoločné.",
		selected_classes_col_header: "Vybraté triedy",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Vrátane podpriečinkov)",
		favorites_pseudo_node: "\\Obľúbené položky\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "V archíve musíte vybrať priečinok, do ktorého sa dokument pridá.",
		no_permission_add_folder: "Nemáte príslušné oprávnenia na pridanie priečinkov do tohto priečinka.",
		no_permission_add_document: "Nemáte príslušné oprávnenia na pridanie dokumentov do tohto priečinka.",
		document_already_in_folder: "Dokument sa už v tomto priečinku nachádza.",
		cant_move_folder_onto_parent: "Priečinok sa už v tomto priečinku nachádza.",
		cant_move_folder_onto_self: "Priečinok nemôžete presunúť do neho samotného alebo do jeho podpriečinkov.",

		/* Workflow Widgets */
		process_application_space: "Aplikačný priestor procesu",
		process_role: "Rola procesu",
		process_inbasket: "Zoznam úloh procesu",
		process_worklist: "Pracovný zoznam",
		process_step_processor: "Spracovať pracovnú položku",
		process_tracker: "Sledovať pracovnú položku",
		process_info_subject: "Predmet",
		process_info_stepname: "Krok",
		process_info_is_locked: "Uzamknutý",
		process_info_no_access: "Bez prístupu",
		process_info_received_on: "Prijaté o",
		process_info_overdue: "Oneskorené",
		process_info_reminder_sent: "Odoslaná pripomienka",
		process_info_locked_by_user: "Uzamkol",
		process_work_object_number: "Číslo pracovného objektu",
		process_deadline: "Termín:",
		process_launchedby: "Spustil:",
		process_receivedon: "Prijaté o:",
		process_step: "Krok:",
		process_properties: "Vlastnosti",
		process_attachments: "Prílohy",
		process_attachments_select: "Vyberte prílohu",
		process_finish_button_label: "Zastaviť sledovanie",
		process_tracker_history: "História",
		process_tracker_milestones: "Míľniky",
		process_tracker_milestone: "Medzník",
		process_tracker_milestone_level: "Úroveň",
		process_tracker_milestones_empty: "Nenašli sa žiadne míľniky.",
		process_tracker_level_selector_label: "Zobraziť úrovne míľnikov do:",
		process_tracker_map_selector_label: "Filtrovať podľa mapy:",
		process_tracker_message: "Správa",
		process_tracker_datereached: "Dátum dosiahnutia",
		process_tracker_stepname: "Krok",
		process_tracker_cycle: "Cyklus",
		process_tracker_review_cycle: "Cyklus posudzovania",
		process_tracker_participant: "Účastník",
		process_tracker_completed: "Dokončené",
		process_tracker_response: "Odpoveď",
		process_tracker_comments: "Komentáre",
		process_tracker_delete_confirmation: "Chcete zastaviť sledovanie nasledujúceho pracovného toku: ${0}?",
		process_tracker_history_allmaps: "Všetky mapy",
		process_tracker_history_workflow: "Pracovný tok",
		process_tracker_history_terminate: "Ukončiť",
		process_tracker_history_malfunction: "Zlyhanie",
		process_filter_label: "Filter",
		process_no_filter_summary: "Neboli použité žiadne filtre",
		process_filter_summary: "${0} použité",
		process_filter_reset_tooltip: "Odstrániť filter a obnoviť zoznam úloh.",
		process_attachments_add_folder: "Pridať priečinok",
		process_attachments_add_doc: "Pridať dokument",
		process_complete_button_label: "Kompletné",
		process_save_button_label: "Uložiť",
		process_launch_button_label: "Spustiť pracovný tok",
		process_open_button_label: "Otvoriť",
		process_movetoinbox_button_label: "Presunúť do zoznamu úloh",
		process_return_button_label: "Späť",
		process_return_to_sender_tooltip: "Vrátiť pracovnú položku do pôvodného zoznamu úloh",
		process_move_to_inbasket_tooltip: "Presunúť pracovnú položku do vášho osobného zoznamu úloh",
		process_reassign_tooltip: "Znova priradiť pracovnú položku inému vlastníkovi",
		process_reassign_button_label: "Zmeniť priradenie",
		process_preferences_button_label: "Preferencie",
		process_manageroles_button_label: "Spravovať roly",
		process_manageroles_no_members: "Nie sú žiadni členovia.",
		process_responses_button_label: "Viac odpovedí",
		process_morecustomaction_button_label: "Viac akcií",
		process_show_instructions: "Zobraziť pokyny",
		process_hide_instructions: "Skryť pokyny",
		process_remove_attachment: "Odstrániť",
		process_close_window: "Pracovná položka bola spracovaná.",
		process_delegate_flag: "Požiadať aktuálneho vlastníka o schválenie pracovnej položky pred jej smerovaním do ďalšieho kroku v pracovnom toku.",
		process_paticipant_voting: "Počet účastníkov, vyžadovaných pri hlasovaní za schválenie:",
		process_get_next_label: "Získať ďalšiu pracovnú položku",
		process_no_more_items: "V zozname úloh už nie sú položky na spracovanie.",
		process_workflow_name: "Názov pracovného toku:",
		process_pattern_process_name: "Prehľad pre ${0}",
		process_instuctions: "Pokyny pre posudzovateľov:",
		process_pattern_deadline: "Termín:",
		process_reviewers: "Posudzovatelia:",
		process_approvals_required: "Vyžadujú sa schválenia:",
		process_on_reject: "Ak je pracovná položka odmietnutá:",
		process_return_to_originator: "Vrátiť mne",
		process_return_to_previous_reviewer: "Vrátiť predchádzajúcemu posudzovateľovi",
		process_additional_settings: "Ďalšie nastavenia:",
		process_allow_reassign: "Povoliť posudzovateľom znova priradiť tento prehľad",
		process_complete_notification: "Upozorniť ma, keď bude prehľad dokončený",
		process_workflow_name_hover_help: "Názov, ktorý zadáte pre pracovnú položku, by mal posudzovateľom zjednodušiť odlíšenie tejto pracovnej položky od ostatných pracovných položiek v ich zozname úloh.",
		process_approvals_required_hover_help: "Ak je pracovná položka kontrolovaná naraz viacerými ľuďmi, môžete zadať koľko schválení je potrebných, aby bola daná pracovná položka úspešne dokončená.",
		process_approval_options: "Voľby schválenia",
		process_all: "Všetky",
		process_at_least: "Aspoň",
		process_at_least_by_count: "Aspoň ${0} z počtu posudzovateľov",
		process_at_least_by_percentage: "Aspoň ${0}% z posudzovateľov",
		process_comments: "Komentáre:",
		process_review_step_comments_hover_help: "Ak odmietnete pracovnú položku, musíte uviesť, prečo ste ju odmietli. Tieto informácie umožnia pôvodcovi pracovnej položky alebo predchádzajúcemu posudzovateľovi venovať sa vašim obavám.",
		process_rework_step_comments_hover_help: "Musíte poskytnúť informácie ako riešili komentáre. Ak nesúhlasíte s komentármi, uveďte zdôvodnenie svojho rozhodnutia.",
		process_rejection_reason: "Príčina odmietnutia:",
		process_summary: "Zhrnutie",
		process_sequential_review: "Postupná kontrola",
		process_sequential_review_description: "Pracovná položka bude posúdená každým posudzovateľom v poradí.",
		process_parallel_review: "Paralelná kontrola",
		process_parallel_review_description: "Pracovná položka bude posúdená všetkými posudzovateľmi naraz.",
		process_parallel_approvals_required_error: "Počet vyžadovaných schválení je príliš vysoký. Určený počet schvaľovateľov je: ${0}.",
		process_parallel_invalid_required_approvals_count: "Hodnota je neplatná. Hodnota musí byť ${0}.",
		process_subject_prompt: "Uveďte predmet",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Pracovná položka:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Zobraziť vlastnosti",
		view_permissions_level: "Zobraziť oprávnenia",
		view_content_level: "Zobraziť dokument",
		link_level: "Prepojenie",
		modify_properties_level: "Upraviť vlastnosti",
		modify_content_level: "Upraviť dokument",
		minor_version_level: "Upraviť vedľajšiu verziu",
		major_version_level: "Upraviť hlavnú verziu",
		create_instance_level: "Vytvoriť inštanciu",
		delete_document_level: "Odstrániť dokument",
		delete_item_level: "Odstrániť položku",
		modify_document_permissions_level: "Správa oprávnení",
		modify_folder_permissions_level: "Správa oprávnení",
		modify_owner_level: "Zmeniť vlastníka",
		delete_folder_level: "Odstrániť priečinok",
		file_in_folder_level: "Pridať do priečinkov",
		create_subfolder_level: "Vytvoriť podpriečinky",
		link_item_level: "Pridať anotáciu k dokumentu, Pridať do priečinka", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Iba dokument: Pridajte anotáciu k dokumentu alebo odstráňte anotáciu z dokumentu</li><li>Iba priečinok: Pridajte položky do priečinka alebo odstráňte položky z priečinka</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Odstrániť",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Vlastník",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Čitateľ",
		/* previously \"Read only\" */
		no_access_privilege: "Bez prístupu",
		share_with_label: "Zdieľať s:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Len so mnou",
		public_label: "S každým",
		members_label: "S vybratými užívateľmi a skupinami",
		select_members_label: "Vybrať...",
		select_user_group_label: "Vybrať užívateľov...",
		select_users_groups_label: "Vybrať užívateľov a skupiny...",
		select_user_label: "Vybrať užívateľa...",
		propagation_label: "Propagácia:",
		access_label: "Oprávnenia:",
		add_permission_add_label: "Pridať",
		security_policy_label: "Bezpečnostná politika:",
		includes_inherited_access: "Obsahuje zdedený prístup",
		customize_access_for_label: "Prispôsobiť prístup pre:",
		customize: "Prispôsobiť",
		direct: "Túto položku",
		singleLevelInheritance: "Jedna úroveň",
		infiniteLevelInheritance: "Všetky úrovne",
		inherited: "Zdedený",
		direct_hover_help: "Nastavenia bezpečnosti sa uplatnia pre vybratú položku",
		singleLevelInheritance_hover_help: "Tieto oprávnenia sa vzťahujú na túto položku a na tých jej priamych potomkov, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky.",
		infiniteLevelInheritance_hover_help: "Tieto oprávnenia sa vzťahujú na túto položku a na všetkých jej potomkov, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky.",
		inherited_hover_help: "Tieto oprávnenia boli zdedené od rodičovskej položky.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Tieto oprávnenia na ${0} sa vzťahujú na túto položku a na tých jej priamych potomkov, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky .",
		infiniteLevelInheritance_member_hover_help: "Tieto oprávnenia na ${0} sa vzťahujú na túto položku a na všetkých jej potomkov, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky.",
		inherited_member_hover_help: "Tieto oprávnenia na ${0} boli zdedené od rodičovskej položky.",
		partial_hover_help: "Nastavenia bezpečnosti položky boli zmenené užívateľom",
		allow: "Povoliť",
		deny: "Zamietnuť",
		basic: "Základné",
		advanced: "Rozšírený",
		permission_type: "Nastaviť prístup pre:",
		share_with_hover_help: "Položka sa momentálne zdieľa s nasledujúcimi užívateľmi a skupinami.",
		direct_security_policy_hover_help: "Nastavenia tejto bezpečnostnej politiky vám umožňujú zmeniť bezpečnosť tejto položky.",
		security_policy_hover_help: "Bezpečnosť tejto položky je len na čítanie, pretože nastavenia tejto bezpečnostnej politiky vám zamedzujú zmeniť bezpečnosť tejto položky.",
		security_remove: "Žiadne oprávnenia",
		pseudo_group_label: "Aliasové kontá",
		marking_hover_help: "Bezpečnosť tejto položky riadi označovacia množina, ktorá môže mať vplyv na bezpečnosť položky.",
		note_label: "Dôležité:",
		marking_text: "Táto položka je označená ako: ${0}. Položka môže mať ďalšie bezpečnostné obmedzenia.",
		authenticated_users: "Autentifikovaní užívatelia",
		realm_users: "Užívatelia: ${0}",
		denyAll: "Zamietnuť všetko",
		allowAll: "Povoliť všetko",
		remove_direct_text: "Keď uložíte zmeny, oprávnenie pre tohto člena budú odstránené z položky.",
		remove_single_inheritance_text: "Keď uložíte zmeny, oprávnenie pre tohto člena budú odstránené z položky <br>a z tých priamych potomkov tejto položky, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky.<p>Chcete pokračovať?",
		remove_infinite_inheritance_text: "Keď uložíte zmeny, oprávnenie pre tohto člena budú odstránené z položky <br>zo všetkých jej potomkov, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky.<p>Chcete pokračovať?",
		remove_inheritance_text: "Keď uložíte zmeny, oprávnenie pre tohto člena budú odstránené z položky <br>zo všetkých jej potomkov, ktorí sú nakonfigurovaní tak, aby zdedili nastavenia zabezpečenia tejto položky. Zachovajú sa iba tie oprávnenia, <br>ktoré zdedila táto položka.<p>Chcete pokračovať?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Odstrániť tieto oprávnenia na ${0}",

		security_proxy_text: "Bezpečnosť tejto položky je len na čítanie.",
		security_proxy_declared_text: "Bezpečnosť tejto položky je určená len na čítanie, pretože je definovaná prostredníctvom proxy bezpečnosti.",
		security_proxy_hover_help: "Bezpečnosť tejto položky riadi bezpečnosť, ktorá je nastavená na inom objekte v archíve.",
		add_permissions_label: "Pridať oprávnenia",
		permission_propagation_direct: "Len tento priečinok",
		permission_propagation_onelevel: "Tento priečinok a jedna úroveň nižšie",
		permission_propagation_alllevels: "Tento priečinok a všetky úrovne nižšie",
		document_propagation_label: "Nastaviť prístup pre:",
		document_propagation_FOLDER: "Priečinok",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Zdroj autentifikácie:",

		/* Versions Widget */
		object_versions_selector_label: "Verzie:",
		object_versions_label: "Verzie",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Priečinky",
		folders_filed_in_folder_col_hdr: "Priečinok",
		folders_filed_in_path_col_hdr: "Cesta",
		folders_filed_in_containment_name_col_hdr: "Názov",
		folders_filed_in_creator_col_hdr: "Vytvoril",
		folders_filed_in_date_created_col_hdr: "Vytvorené o",

		/* Parent Documents */
		properties_parent_documents_label: "Rodičovské dokumenty",

		/* Select object dialog */
		select_object_title: "Výber položky",
		select_object_breadCrumb_version_prefix: "Verzie pre: ",
		show_versions_label: "Zobraziť verzie",
		use_current_version_label: "Použiť aktuálnu verziu",
		use_released_version_label: "Použiť zverejnenú verziu",

		/* Select content class dialog */
		select_class: "Výber triedy",
		/* Select Search dialog */
		select_search: "Výber vyhľadávania",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Zobraziť prepojenie",
		show_hyperlink_intro: "Prepojenie môžete skopírovať a prilepiť do e-mailov, konverzácií a na webové stránky. Ak existuje viacero verzií položky, uveďte, pre ktorú verziu chcete vytvoriť prepojenie.",
		show_hyperlink_intro_no_version_select: "Prepojenie môžete skopírovať a prilepiť do e-mailov, konverzácií a na webové stránky.",
		show_text_label: "Verzia:",
		released_button_label: "Publikovaná",
		current_button_label: "Aktuálna",
		select_button_label: "Konkrétna verzia",
		show_hyperlink_no_released_version_msg: "Neexistuje žiadna zverejnená verzia tohto dokumentu.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Spustiť pracovný tok",
		edit_workflow_title: "Vlastnosti pracovnej položky",
		start_workflow_intro: "Spustiť pracovný tok pre spracovanie vybratých položiek. Ak chcete pracovné položky priradiť špecifickému užívateľovi, zadajte vlastníka.",
		edit_workflow_intro: "Môžete upraviť vlastnosti vybratých pracovných položiek. Ak chcete pracovnú položku znova priradiť inému užívateľovi, zadajte vlastníka.",
		workflow_field_label: "Pracovný tok:",
		priority_field_label: "Priorita:",
		owner_field_label: "Vlastník:",
		start_button_label: "Spustiť",
		save_button_label: "Uložiť",
		owner_value_hint: "Zadajte alfanumerický reťazec s maximálnou dĺžkou 32 znakov. Reťazec môže obsahovať iba medzery a nasledujúce znaky: a-z, A-Z, 0-9, a ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Prvky obsahu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Hodnota je neplatná. Hodnota môže obsahovať iba medzery a nasledujúce znaky: a-z, A-Z, 0-9  a ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Zadajte hodnotu od 1 do 32000 uvádzajúcu dôležitosť pracovnej položky.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Hodnota je neplatná. Hodnota priority musí byť v rozsahu 1 až 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Názov pracovného toku neexistuje.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Pozastaviť v pracovnom toku",
		suspend_workitems_intro: "Keď pozastavíte pracovnú položku v pracovnom toku, pracovnú položku nebude možné spracovať, kým nebude znova spustená.",
		suspend_workitems_options_label: "Pozastaviť vybraté pracovné položky:",
		suspend_until_resume_label: "Kým nebude manuálne spustená",
		suspend_until_date_label: "Do",
		suspend_for_duration_label: "Na",
		suspend_for_duration_hours: "Hodiny",
		suspend_for_duration_days: "Dni",
		suspend_for_duration_weeks: "Týždne",
		suspend_for_duration_months: "Mesiace",
		suspend_for_duration_years: "Roky",
		suspend_button_label: "Pozastaviť",
		suspend_duration_value_hint: "Hodnotu trvania zadajte z rozsahu 1 - 99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Hodnota je neplatná. Hodnota musí byť v rozsahu 1 až 99.",

		/* Remove from workflow */
		remove_workflow_title: "Odstrániť z pracovného toku",
		remove_workflow_confirmation: "Chcete odstrániť vybraté položky z pracovného toku?<br>Počet vybratých položiek: ${0}.",
		remove_workflow_button_label: "Odstrániť",

		/* Unfile dialog */
		unfile_dialog_title: "Odstrániť z priečinka",
		unfile_dialog_remove_from_folder_label: "Odstrániť z:",
		unfile_dialog_info_text: "Môžete odstrániť položky z priečinkov. Avšak odstránenie položky zo všetkých priečinkov neodstráni túto položku z archívu. Položku môžete naďalej získať spustením vyhľadávania. V tomto zozname sa zobrazia len  priečinky, pre ktoré máte privilégiá na zobrazovanie.",
		unfile_dialog_select_all: "Vybrať všetko",
		unfile_dialog_deselect_all: "Zrušiť výber",
		unfile_dialog_remove_button_label: "Odstrániť",
		unfile_dialog_select_folder_col_hdr: "Vyberte priečinok",
		unfile_dialog_folder_col_hdr: "Priečinok",
		unfile_dialog_path_col_hdr: "Cesta",
		unfile_dialog_not_filed_msg: "Táto položka sa nenachádza v žiadnych priečinkoch.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nemáte príslušné oprávnenia na odstránenie tejto položky zo všetkých priečinkov,  v ktorých sa táto položka nachádza.",
		unfile_dialog_folder_not_selectable_tooltip: "Nemáte príslušné oprávnenia na odstránenie tejto položky z tohto priečinka.",
		unfile_multi_prompt: "Chcete odstrániť vybraté položky z priečinka ${0}?",
		unfile_large_number_items_confirmation_question: "Vybrali ste ${0} položiek na odstránenie z priečinka ${1}.<br/>Odstránenie veľkého počtu položiek z priečinka môže trvať dlho.<br/>Chcete pokračovať?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Otvoriť",
		move_to_folder_title: "Presunúť do priečinka",
		move_to_folder_button_caption: "Presunúť",
		move_to_folder_label: "Presunúť do:",
		add_to_folder_title: "Pridať do priečinka",
		add_to_folder_button_caption: "Pridať",
		add_to_folder_label: "Pridať do:",
		copy_to_folder_title: "Kopírovať do priečinka",
		copy_to_folder_button_caption: "Kopírovať",
		copy_to_folder_label: "Kopírovať do:",
		copy_to_folder_delete_label: "Po dokončení kopírovania odstrániť vybraté položky zo služby Box.",
		move_from_folder_label: "Presunúť z:",
		move_file_info_text: "Položky môžete presúvať z jedného priečinka do druhého.",
		move_folder_info_text: "Priečinky môžete presúvať z jedného rodičovského priečinka do druhého.",
		add_doc_to_folder_info_text: "Položky môžete pridávať do jedného alebo do viacerých priečinkov. Ak sa položka už v priečinku nachádza, zostane v takomto priečinku a pridá sa do všetkých ďalších vami zadaných priečinkov.",
		copy_doc_to_folder_info_text: "Položky môžete skopírovať do priečinka.",
		box_copy: "Kopírovanie v službe Box",
		box_copy__button_caption: "Kopírovať",
		box_copy_to_info_text: "Vyberte archív a priečinok, do ktorého chcete skopírovať vybraté položky zo služby Box.",
		box_copy_from_info_text: "Vyberte archív a priečinok, do ktorého chcete skopírovať vybraté položky zo služby Box.",
		box_copy_version_info_text: "Ak chcete pridať nový dokument, vyberte archív a priečinok. Ak chcete prihlásiť novú verziu, vyberte archív a dokument.",
		admin_box_copy: "Kopírovanie v službe Box",
		admin_box_copy_hover: "Táto možnosť umožňuje užívateľom skopírovať dokumenty do služby Box.",

		no_permission_to_copy_version_msg: "Dokument nemôžete skopírovať zo služby Box ako novú verziu vybratého dokumentu. Buď nemáte vyžadované oprávnenia na úpravu vybratého dokumentu, alebo vybratý dokument odhlásil niekto iný.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nemáte príslušné oprávnenia na odstránenie tejto položky zo všetkých priečinkov,  v ktorých sa táto položka nachádza.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nemáte príslušné oprávnenia na odstránenie tejto položky z tohto priečinka.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Túto položku nie je možné presunúť, pretože nie je zaradená do žiadnych priečinkov. Vyberte si inú položku.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Spustiť pracovný tok",
		subscriptions_dialog_available_items_label: "Dostupné položky:",
		subscriptions_dialog_info_text: "Uveďte, ktorý pracovný tok spustiť.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Názov",
		subscriptions_dialog_desc_col_hdr: "Popis",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Spravovať roly",
		manageroles_dialog_info_text: "Môžete upraviť zoznam užívateľov pre každú rolu, ktorá je priradená k tomuto aplikačnému priestoru procesu.",
		manageroles_dialog_members_label: "Členovia",
		manageroles_dialog_roles_label: "Roly",
		manageroles_dialog_add_button_label: "Pridať užívateľov a skupiny",
		manageroles_dialog_remove_button_label: "Odstrániť",
		manageroles_dialog_save_button_label: "Uložiť",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "K tejto položke nie sú priradené žiadne pracovné toky.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferencie pracovného toku",
		workflow_pref_dialog_info_text: "Zadajte udalosti pracovného toku, pre ktoré chcete dostávať e-mailové oznámenia. Tiež  môžete povoliť voľbu smerovania svojej práce inej osobe, keď vyberiete užívateľa, na ktorého chcete prácu delegovať.",

		workflow_pref_general: "Všeobecné",
		workflow_pref_email_address: "E-mailová adresa",
		workflow_pref_email_address_hover: "Zadajte e-mailovú adresu, na ktorú chcete dostávať oznámenia pracovného toku.",
		workflow_pref_preferred_locale: "Jazyk",
		workflow_pref_preferred_locale_hover: "Určuje jazyk, v ktorom sa budú zobrazovať e-mailové oznámenia.",

		workflow_pref_work_item_notice: "Oznámenie o pracovných položkách",
		workflow_pref_step_new_assignment: "Bola mi priradená nová pracovná položka",
		workflow_pref_step_new_assignment_hover: "Oznámiť, keď dostanem novú pracovnú položku.",
		workflow_pref_step_expired_deadline: "Uplynul termín pracovnej položky",
		workflow_pref_step_expired_deadline_hover: "Oznámiť, keď nedodržím termín pracovnej položky.",
		workflow_pref_step_reminders: "Blíži sa termín pracovnej položky",
		workflow_pref_step_reminders_hover: "Pripomenúť pracovnú položku, keď sa bude blížiť jej termín.",

		workflow_pref_originator_notice: "Upozornenia pre pôvodcu",
		workflow_pref_milestone_reached: "Bol dosiahnutý míľnik",
		workflow_pref_milestone_reached_hover: "Upozorniť na dosiahnutie míľnika v pracovnom toku, ktorý som spustil.",

		workflow_pref_tracker_notice: "Oznámenia sledovača pracovného toku",
		workflow_pref_tracker_new_assignment: "Bola mi priradená nová položka sledovača",
		workflow_pref_tracker_new_assignment_hover: "Oznámiť spustenie pracovného toku, ktorý sledujem.",
		workflow_pref_tracker_deadline_reminders: "Blíži sa termín pracovného toku",
		workflow_pref_tracker_deadline_reminders_hover: "Pripomenúť pracovný tok, keď sa bude blížiť jeho termín.",
		workflow_pref_tracker_deadline_expired: "Uplynul termín pracovného toku",
		workflow_pref_tracker_deadline_expired_hover: "Oznámiť, keď nedodržím termín pracovného toku.",
		workflow_pref_tracker_exception: "Nastala chyba pracovného toku",
		workflow_pref_tracker_exception_hover: "Oznámiť, keď nastane výnimka alebo chyba pracovného toku.",
		workflow_pref_tracker_expired_deadline: "Uplynul termín pre krok",
		workflow_pref_tracker_expired_deadline_hover: "Oznámiť uplynutie termínu pre krok sledovaného pracovného toku.",
		workflow_pref_tracker_milestone_reached: "Bol dosiahnutý míľnik",
		workflow_pref_tracker_milestone_reached_hover: "Oznámiť dosiahnutie míľnika v pracovnom toku, ktorý sledujem.",

		workflow_pref_out_notice: "Mimo kancelárie",
		workflow_pref_proxy_user: "Zastupuje ma",
		workflow_pref_proxy_user_hover: "Túto voľbu použite na automatické smerovanie svoje práce inému užívateľovi, napríklad keď sa nezdržiavate v kancelárií alebo ste na dovolenke.",
		workflow_pref_workflow: "Pracovný tok",
		workflow_pref_on: "Zapnuté",
		workflow_pref_off: "Vypnuté",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Spustiť pracovný tok",
		transfered_workflows_dialog_info_text: "Vybrať pracovný tok na spustenie.",
		transfered_workflows_dialog_available_items_label: "Dostupné položky:",
		transfered_workflows_dialog_select_button_label: "Spustiť",
		transfered_workflows_dialog_name_col_hdr: "Názov",
		transfered_workflows_dialog_no_item_found: "Nenašli sa žiadne prenesené pracovné toky.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Preniesť pracovný tok",
		transfer_workflow_dialog_info_text: "Vyberte pracovný tok na prenos do systému pracovných tokov.",
		transfer_workflow_dialog_use: "Použiť tento názov pracovného toku",
		transfer_workflow_dialog_use_another: "Použiť iný názov pracovného toku",
		transfer_workflow_dialog_in_use: "Názov pracovného toku je: ",
		transfer_workflow_dialog_transfer_button_label: "Presunúť",
		transfer_workflow_dialog_no_items_found: "Nenašli sa žiadne prenesené pracovné toky.",
		transfer_workflow_dialog_use_hover: "Zadajte názov aktuálneho pracovného toku z definície pracovného toku.",
		transfer_workflow_dialog_another_hover: "Zadajte iný názov pracovného toku alebo znovu použite názov existujúceho preneseného pracovného toku.",

		/*Search In control*/
		search_in_title: "Hľadať v:",
		search_in_teamspaces: "Tímové priestory",
		search_in_repositories: "Archívy",
		search_in_thisteamspaces: "Tento tímový priestor",

		ajaxViewer_save: "Uložiť anotácie",
		ajaxViewer_print: "Ukážka pred tlačou",
		ajaxViewer_firstPage: "Prvá stránka",
		ajaxViewer_previousPage: "Predchádzajúca stránka",
		ajaxViewer_nextPage: "Nasledujúca stránka",
		ajaxViewer_lastPage: "Posledná stránka",
		ajaxViewer_unknownPageCount: "1 z ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} z ${1}",
		ajaxViewer_zoomOut: "Oddialiť",
		ajaxViewer_zoomIn: "Priblížiť",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Prispôsobiť šírku",
		ajaxViewer_fitHeight: "Prispôsobiť výšku",
		ajaxViewer_fitPage: "Prispôsobiť stránku",
		ajaxViewer_rotate270: "Otočiť o 270 stupňov",
		ajaxViewer_rotate90: "Otočiť o 90 stupňov",
		ajaxViewer_rotate180: "Otočiť o 180 stupňov",
		ajaxViewer_darken: "Stmavieť",
		ajaxViewer_lighten: "Zosvetliť",
		ajaxViewer_lessContrast: "Znížiť kontrast",
		ajaxViewer_moreContrast: "Zvýšiť kontrast",
		ajaxViewer_invert: "Invertovať",
		ajaxViewer_createHighlight: "Zvýraznenie",
		ajaxViewer_createNote: "Opatriť poznámkami",
		ajaxViewer_editAnnotation: "Upraviť vlastnosti anotácie",
		ajaxViewer_deleteAnnotation: "Odstrániť anotáciu",
		ajaxViewer_editAnnotationTitle: "Upraviť vlastnosti anotácie",
		printableView_print: "Tlačiť",
		printableView_close: "Zatvoriť",

		search_results_dropdown_button: "Výsledky",
		search_results_columns_label: "Výsledky",
		search_results_columns_description: "Vyberte vlastnosti, ktoré sa majú zobraziť vo výsledkoch vyhľadávania.",
		search_results_sortby_label: "Podľa:",
		search_results_order_label: "Poradie:",
		search_results_accending_label: "Vzostupne",
		search_results_descending_label: "Zostupne",
		search_results_available_properties: "Dostupné",
		search_results_selected_properties: "Vybraté",
		search_rank_property: "Kategória (len textové vyhľadávanie)",
		search_name_attribute: "Názov (${0})",
		search_results_summary_enabled_label: "Povoliť zhrnutie obsahu (len textové vyhľadávanie)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Vyhľadávania",
		manage_teamspace_classes_tab_title: "Triedy",
		manage_teamspace_entry_templates_tab_title: "Šablóny položiek",
		manage_teamspace_team_tab_title: "Tím",
		manage_teamspace_roles_tab_title: "Roly",
		manage_teamspace_dialog_title: "Upraviť tímový priestor",
		manage_teamspace_button_label: "Upraviť tímový priestor",
		manage_teamspace_team_pane_heading: "Výber tímu",
		manage_teamspace_classes_pane_heading: "Výber tried",
		manage_teamspace_entry_templates_pane_heading: "Výber šablón položiek",
		manage_teamspace_no_rights_message: "Nemáte príslušné oprávnenia na úpravu tohto tímového priestoru.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Vlastnosti tímového priestoru",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Zadajte vlastnosti, ktoré sa zobrazia pri dokumentoch a priečinkoch v zozname obsahu, keď ich budú užívatelia v tímovom priestore prehľadávať. Môžete zadať aj poradie, v ktorom sa budú vlastnosti zobrazovať.",
		teamspace_props_sel_cols_use_default_label: "Použiť nastavenia na stránke <b>Prehľadávanie</b> pre tento archív",
		teamspace_props_sel_cols_use_default_tooltip: "Použiť nastavenia, ktoré sú pre tento archív nastavené v administračnom nástroji na stránke Prehľadávanie.",
		teamspace_props_general_tab_label: "Všeobecné",
		teamspace_props_column_props_tab_label: "Zobrazené vlastnosti",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Vyberte súbor, ktorý chcete importovať",
		teamspace_import_template_instruction: "Importovať môžete exportovaný súbor šablóny tímového priestoru.",
		teamspace_import_template_button_label: "Importovať",
		teamspace_import_template_dialog_label: "Importovať šablónu tímového priestoru",

		/* Annotation Dialog */
		annotationDlg_title: "Anotácie",
		annotationDlg_description: "Vybratý dokument obsahuje nasledujúce anotácie:",
		annotationDlg_msg_noAnnotations: "Neexistujú žiadne anotácie. Anotáciu vytvorte kliknutím na tlačidlo Pridať.",
		annotationDlg_pageLabel: "Stránka: ${pageNum}",
		annotationDlg_accLabel: "ACCESS: ${accType}",
		annotationDlg_accLabel_public: "Verejná",
		annotationDlg_accLabel_private: "Súkromná",
		annotationDlg_accLabel_privateGroup: "Súkromná (${groupName})",
		annotationDlg_copiable: "Môže byť skopírovaná na iný server",
		annotationDlg_cannotCopy: "Nemôže byť skopírovaná na iný server",
		annotationDlg_addButtonLabel: "Pridať",

		/* Share Dialog */
		is_shared: "Zdieľané",
		is_share_pending: "Čaká sa na zdieľanie",
		share_title: "Zdieľanie v službe Box",
		share_instructions_new: "Poslať e-mail obsahujúci prepojenie na zdieľaný súbor. K tomuto súboru budú mať prístup všetci užívatelia, ktorí dostanú toto prepojenie.",
		share_instructions_existing: "Poslať e-mail obsahujúci prepojenie na zdieľaný súbor. K tomuto súboru budú mať prístup všetci užívatelia, ktorí dostanú toto prepojenie. Toto prepojenie už môžu mať aj iní ľudia, pretože tento súbor už zdieľal iný užívateľ.",
		share_instructions_another_version_shared: "Poslať e-mail obsahujúci prepojenie na zdieľaný súbor. K tomuto súboru budú mať prístup všetci užívatelia, ktorí dostanú toto prepojenie. Toto prepojenie už môžu mať aj iní ľudia, pretože inú verziu tohto súboru už zdieľal iný užívateľ.",
		share_buttonLabel_share: "Zdieľať",
		share_email_addresses: "Odoslať na:",
		share_email_addresses_hover: "Po dokončení zdieľania sa na tieto e-mailové adresy pošle prepojenie. Ak neuvediete žiadne adresy, prepojenie sa pošle na vašu e-mailovú adresu.",
		share_email_addresses_reshare_hover: "Po dokončení zdieľania sa na tieto e-mailové adresy pošle prepojenie. Ak neuvediete žiadne adresy, nepošle sa žiadny e-mail.",
		share_password: "Nastaviť heslo:",
		share_password_placeholder: "Voliteľné",
		share_comments: "Správa:",
		share_comments_default: "Chcem s vami zdieľať svoj súbor v službe Box.",
		share_myEmail: "Odoslať z:",
		share_expiration: "Nastaviť dobu platnosti prepojenia:",
		share_expire: "Prístup sa skončí:",
		share_expire_none: "Nikdy sa neskončí",
		share_allowDownload: "Povoliť stiahnutie",
		share_add: "Pridať",
		share_advanced_instructions: "Nastavenia stiahnutia, doby platnosti a hesla sa vzťahujú na zdieľaný súbor v službe Box.",
		share_advanced_existing_instructions: "Nastavenia stiahnutia, doby platnosti a hesla sa vzťahujú na zdieľaný súbor v službe Box.",
		share_options_edit_warning: "Upozornenie: Akékoľvek zmeny v týchto nastaveniach budú mať vplyv na všetkých užívateľov, ktorí dostanú toto prepojenie, a to vrátane tých, ktorí ho už dostali.",
		share_link: "Prepojenie:",
		share_email_addresses_placeholder: "E-mailové adresy",
		share_email_address_placeholder: "E-mailová adresa",
		share_email_address_invalid: "Uveďte platnú e-mailovú adresu.",
		share_cannot_share_with_self: "Súbory nemôžete zdieľať so sebou. Určte iného užívateľa.",
		share_selected_version_with_minor_warning_hover: "Zdieľa sa verzia ${0} dokumentu. Vybrali ste verziu ${1}.<br><br><b>Varovanie</b>: Ak budete zdieľať verziu ${1}, nikto nebude môcť zdieľať verziu ${2}, kým neodstránite zdieľanie verzie ${1}.",
		share_selected_version_hover: "Zdieľa sa verzia ${0} dokumentu. Vybrali ste verziu ${1}.",
		share_selected_version_message: "Dôležité: Verzia ${0} tohto dokumentu sa zdieľa. Vybrali ste verziu ${1}.",
		share_different_version_message: "Dôležité: Vybrali ste verziu ${1}, ale verzia ${0} dokumentu sa už zdieľa.  Verziu ${1} nebudete môcť zdieľať, kým neodstránite zdieľanie. Môžete však zdieľať prepojenie na verziu ${0}.",
		share_version_message: "Dôležité: Verzia ${0} tohto dokumentu sa zdieľa. Vyberte verziu, ktorú chcete zdieľať.",
		share_version_new: "Zdieľať verziu ${0}",
		share_version_new_p8_hover: "Pri zdieľaní tohto dokumentu sa vytvorí prepojenie na konkrétnu vybratú verziu.<br><br>Ak sa už dokument zdieľa:<ul><li>Môžete zdieľať novšiu verziu, pričom prepojenie sa presmeruje na túto novšiu verziu.</li><li>Nemôžete zdieľať staršiu verziu, kým neodstránite zdieľanie.</li></ul>",
		share_version_new_cm_hover: "Pri zdieľaní tohto dokumentu sa vytvorí prepojenie na konkrétnu vybratú verziu.<br><br>Ak sa už dokument zdieľa:<ul><li>Môžete zdieľať novšiu verziu, pričom prepojenie sa presmeruje na túto novšiu verziu.</li><li>Nemôžete zdieľať staršiu verziu.</li></ul>",
		share_version_update: "Zdieľať verziu ${0} (upraviť možnosti zdieľania).",
		share_version_update_p8_hover: "Pri zdieľaní dokumentu sa zachová prepojenie na konkrétnu verziu.<br><br>Ak sa už dokument zdieľa:<ul><li>Môžete zdieľať novšiu verziu, pričom prepojenie sa presmeruje na túto novšiu verziu.</li><li>Nemôžete zdieľať staršiu verziu, kým neodstránite zdieľanie.</li></ul>",
		share_version_update_cm_hover: "Pri zdieľaní dokumentu sa zachová prepojenie na konkrétnu verziu.<br><br>Ak sa už dokument zdieľa:<ul><li>Môžete zdieľať novšiu verziu, pričom prepojenie sa presmeruje na túto novšiu verziu.</li><li>Nemôžete zdieľať staršiu verziu.</li></ul>",
		share_version_change_to_current: "Zdieľať verziu ${0} (nahradiť zdieľanú položku vybratou verziou).",
		share_version_change_to_current_p8_hover: "Pri zdieľaní tohto dokumentu sa prepojenie naň upraví tak, aby sa odkazovalo na konkrétnu vybratú verziu.<br><br>Ak sa už dokument zdieľa:<ul><li>Môžete zdieľať novšiu verziu, pričom prepojenie sa presmeruje na túto novšiu verziu.</li><li>Nemôžete zdieľať staršiu verziu, kým neodstránite zdieľanie.</li></ul>",
		share_version_change_to_current_cm_hover: "Pri zdieľaní tohto dokumentu sa prepojenie naň upraví tak, aby sa odkazovalo na konkrétnu vybratú verziu.<br><br>Ak sa už dokument zdieľa:<ul><li>Môžete zdieľať novšiu verziu, pričom prepojenie sa presmeruje na túto novšiu verziu.</li><li>Nemôžete zdieľať staršiu verziu.</li></ul>",
		share_repository: "Archív zdieľaných súborov",
		share_repository_hover: "Ak nie je uvedený požadovaný archív v službe Box, na stránke Archívy môžete pridať nový archív v službe Box.",
		share_options: "Možnosti zdieľania",
		unshare_confirm: "Ak odstránite zdieľanie, všetky prepojenia na toto zdieľanie sa prerušia, a to vrátane prepojení, ktoré už poslali iní užívatelia. Užívatelia, ktorí budú chcieť zdieľať tento dokument, budú musieť vybrať pôvodný dokument a znova ho zdieľať.<br><br>Naozaj chcete odstrániť toto zdieľanie?",
		unshare_button: "Odstrániť zdieľanie v službe Box",
		admin_share: "Služby zdieľania v službe Box:",
		admin_share_hover: "Umožňuje užívateľom zdieľať dokumenty z ľubovoľných archívov, v ktorých je povolené zdieľanie zo služby Box. Pri zdieľaní dokumentu sa súbor skopíruje do služby Box, vytvorí sa prepojenie a toto prepojenie sa pošle e-mailom.",
		admin_my_email_modifiable: "Povoliť užívateľom zmenu e-mailovej adresy odosielateľa",
		admin_my_email_modifiable_hover: "V prípade zdieľania v službe Box e-mailovú adresu užívateľa predvolene nie je možné upraviť a táto adresa sa získava z mapovania užívateľov a e-mailových adries predstavujúcich užívateľské kontá v službe Box.<br><br>Označte túto možnosť, ak chcete užívateľom povoliť úpravu e-mailovej adresy, keď zdieľajú položky. Platnosť e-mailovej adresy nebude overená.",
		admin_repos_admin_user: "Správca zdieľania:",
		admin_repos_admin_user_hover: "Ak máte pracovnú plochu, v ktorej sú povolené služby zdieľania v službe Box, pričom tento archív v službe Box je nastavený ako archív zdieľaných súborov, nastavte správcu zdieľania.<br><br>Kliknite na položku Nastaviť a prihláste sa do služby Box pod platným kontom správcu služby Box.<br><br>Správca zdieľania musí byť správca služby Box s neobmedzeným úložným priestorom v službe Box.",
		admin_repos_admin_user_not_set_warning: "Nie je nakonfigurovaný správca služby Box pre vybratý archív.<br><br>Služby zdieľania v službe Box budú zakázané, kým nenastavíte správcu služby Box pre vybratý archív alebo kým nevyberiete taký archív v službe Box, pre ktorý je nakonfigurovaný správca služby Box.<br><br>Správcu služby Box môžete nastaviť v časti Služby zdieľania v službe Box na stránke Všeobecné v nastaveniach archívu.",
		admin_share_not_configured_warning: "Skôr než budete môcť použiť zdieľané služby Box, musíte pridať a vybrať archív služby Box s autentifikáciou na serveri.",
		/* Office Online Server settings */
		admin_office_online_title: "Konfigurácia služby Office Online",
		admin_office_online_server_enable: "Server Office Online:",
		admin_office_online_server_enable_hover: "Určte, či chcete, aby užívatelia, ktorí pristupujú k tejto pracovnej ploche, mohli upravovať svoje dokumenty Office pomocou servera Office Online.",		
		admin_office_online_allow_collaborative_editing: "Povoliť súčasnú úpravu viacerými užívateľmi",
		admin_office_online_allow_collaborative_editing_hover: "Povoliť viacerým užívateľom pracovať na rovnakom dokumente. Zrušte označenie tejto možnosti, ak chcete úpravu dokumentov obmedziť na jedného užívateľa.",
		admin_office_online_repository_not_set_warning: "Skôr než budete môcť povoliť službu Office Online, musíte najskôr povoliť používanie tejto služby archívom a určiť adresu URL servera Microsoft Office Online. Kliknite na <b>Archívy</b>, vyberte nejaký archív a potom na karte <b>Úprava integrácií</b> povoľte službu. Kliknite na položku <b>Nastavenia > Všeobecné</b> a zadajte adresu URL servera Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Určte, či chcete používať server Office Online na prácu s dokumentmi Office.",
		admin_office_online_server_url: "Adresa URL servera Microsoft Office Online",
		admin_office_online_server_url_hover: "Zadajte adresu URL, prostredníctvom ktorej môžu iné aplikácie komunikovať so serverom Office Online. Adresa URL má formát: http://názov_servera:číslo_portu/hosting/discovery.",
		admin_office_online_server_Verified: "Overené",
	    admin_office_online_server_Failed: "<b>Neúspešné</b>",

		admin_repcfg_office_online_service_p8_hover: "Pre inicializáciu používania servera Office Online archívom, môžete pridať východiskový súbor šablóny pre každú aplikáciu Office. Ak nie je určená žiadna šablóna, použije sa predvolená šablóna.",	
		admin_repcfg_office_online_server_integration: "Integrácia so serverom Microsoft Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Skôr než budete môcť povoliť server Office Online, musíte zadať adresu URL servera Microsoft Office Online. Kliknite na položku Nastavenia > Všeobecné a zadajte adresu URL",
		admin_repcfg_office_online_word_template_name: "Predvolená šablóna Word",
		admin_repcfg_office_online_excel_template_name: "Predvolená šablóna Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Predvolená šablóna PowerPoint",
		admin_repcfg_office_online_blank_template_description: "Toto je predvolená šablóna, ktorá sa použije, ak nepridáte vašu vlastnú šablónu.",
		/* Edit Service settings */
		admin_icn_edit_title: "Upraviť konfiguráciu",	
	    admin_icn_edit_files_cleanup_interval: "Interval čistenia dočasných súborov (v dňoch):",
	    admin_icn_edit_files_cleanup_interval_hover: "Môžete určiť množstvo času kedy budú dočasné súbory uchovávané v klientovi ICN Edit.  Predvolený čas je 20 dní. Maximálny čas je 20 dní. Minimálny čas je 1 deň.",
	    admin_icn_edit_service_integration: "Integrácia služby úprav",
	    admin_icn_edit_service_integration_intro: "Táto služba úprav umožňuje užívateľom jednoducho pridávať a upravovať dokumenty v natívnych appkách, ktoré sú nainštalované v ich počítačoch.<br><br><b>Dôležité:</b> Ak povolíte službu úprav, musíte uložiť svoju konfiguráciu archívu, aby ste mohli upravovať vopred definované kategórie.",
		admin_icn_edit_service: "Služba úprav:",
		admin_icn_edit_enable_hover: "Ak chcete použiť službu úprav, musíte vykonať nasledujúce:<ul><li>Povoliť službu v archíve</li><li>Povoliť službu v počítačoch vo vašom prostredí</li><li>Nainštalujte klienta IBM Content Navigator Edit do užívateľských pracovných staníc</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Povoliť",
		admin_icn_edit_disable: "Zakázať",
		admin_icn_edit_create_new_category: "Nová kategória",
		admin_icn_edit_delete_category: "Odstrániť kategóriu",
		admin_icn_edit_edit_category: "Upraviť kategóriu",
		admin_icn_edit_disable_category: "Zakázať kategóriu",
		admin_icn_edit_enable_category: "Povoliť kategóriu",
		admin_icn_edit_new_category_dialog_title: "Nová kategória",
		admin_icn_edit_edit_category_dialog_title:"Upraviť kategóriu",
		admin_icn_edit_new_category_dialog_instructions: "Kategória dokumentu vám umožňuje priradiť šablóny so špecifickými typmi MIME pre službu úprav. Môžete napríklad priradiť množinu šablón k súborom PDF, aby užívatelia mohli použiť tieto šablóny pri pridávaní alebo upravovaní súborov v klientovi IBM Content Navigator Edit. <br><br><b>Dôležité:</b> Musíte uložiť svoju konfiguráciu archívu, aby ste mohli pridávať šablóny do kategórie, ktorú vytvoríte. ",
		admin_icn_edit_edit_category_dialog_instructions: "Musíte uložiť svoju konfiguráciu archívu, aby ste mohli pridávať šablóny do tejto kategórie. ",
		admin_icn_edit_delete_category_dialog_instructions: "Chcete odstrániť túto kategóriu a všetky šablóny, ktoré sú k nej priradené?<br><br><b>Dôležité:</b> Vaše zmeny nebudú trvalé, kým ich neuložíte v archíve. ",
		admin_icn_edit_category_label: "Kategória: ",
		admin_icn_edit_category_discription_label:"Popis: ",
		admin_icn_edit_template_column_head:"Názov šablóny",
		admin_icn_edit_category_duplicate_error_message: "Kategória s týmto ID už existuje. ",
		admin_icn_edit_word_category_description: "Táto kategória definuje dostupné šablóny pre dokumenty Microsoft Word v službe úprav. ",
		admin_icn_edit_excel_category_description: "Táto kategória definuje dostupné šablóny pre dokumenty Microsoft Excel v službe úprav. ",
		admin_icn_edit_powerpoint_category_description: "Táto kategória definuje dostupné šablóny pre dokumenty Microsoft PowerPoint v službe úprav. ",

		icn_edit_add_template_dialog_title:"Pridať šablónu ${0}",
		icn_edit_add_template_only_one_file_error: "Môžete vybrať iba jeden súbor.",
		icn_edit_add_template_file_type_error: "Musíte vybrať platný súbor pre šablónu ${0}.<br><br>Typ MIME vybratého dokumentu: ${1}.<br><br>Platné typy MIME: ${2}.",
		icn_edit_change_template_dialog_title: "Upraviť šablónu ${0}",
		icn_edit_action_in_new_menu_name:"Dokument ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "pomocou Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "pomocou appiek pre počítač",
		icn_edit_new_document_dialog_title: "Nový dokument ${0}",
		icn_edit_new_document_dialog_intro: "Vytvoriť nový dokument ${0} a pridať ho do archívu. Dokument sa vytvorí s vybratou šablónou služby úprav.", 
		icn_edit_select_edit_service_template: "Vyberte šablónu",
		icn_edit_edit_service_template: "Šablóna služby úprav:",
		icn_edit_new_document_category_no_templates_message:"V tejto kategórii neexistujú žiadne šablóny. Kontaktujte správcu, aby pridal šablóny do tejto kategórie.",
		icn_edit_installer: "Inštalačný program pre IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Nastavenia tried a rolí",
		admin_repcfg_classes_and_roles_warning: "Ak chcete určiť triedy a užívateľov alebo skupiny užívateľov s oprávnením na vytváranie, úpravu a používanie šablón alebo vytváranie konceptov dokumentov v službe Office Online Service a službe úprav,",
		admin_repcfg_classes_and_roles_click_warning: "kliknite sem.",
		/* Edit Service settings END */
		share_no_my_email_error: "Vyskytol sa problém pri identifikácii e-mailovej adresy, ktorá sa vyžaduje na zdieľanie dokumentu.",
		share_no_my_email_error_explanation: "Prihlásili ste sa s identifikátorom užívateľa ${0}, ale tento identifikátor užívateľa nie je mapovaný na e-mailovú adresu.",
		share_no_my_email_error_userResponse: "Pokúste sa znovu prihlásiť alebo sa prihláste s iným identifikátorom užívateľa. Ak problém pretrváva, nahláste túto chybu správcovi systému.",
		share_no_my_email_error_adminResponse: "Identifikátor užívateľa ${0} nie je mapovaný na e-mailovú adresu a pracovná plocha ${1} nepovoľuje užívateľom úpravu e-mailovej adresy pre služby zdieľania v službe Box.<br><br>Vyskúšajte niektoré z nasledujúcich riešení:<br>Uistite sa, že je zaregistrovaný modul plug-in Email Mapping.<br>Uistite sa, že súbor emailMappingPlugin.json obsahuje identifikátor užívateľa ${0} a e-mailovú adresu užívateľa, a potom zostavte, nakonfigurujte a zaregistrujte modul plug-in Email Mapping.<br>Ak nechcete používať modul plug-in Email Mapping alebo adresár e-mailových adries FileNet P8, ale chcete radšej, aby užívatelia zadali svoju e-mailovú adresu pri zdieľaní dokumentu, nastavenia pracovnej plochy pre služby zdieľania v službe Box môžete upraviť tak, aby povoľovali užívateľom posielanie prepojení z iných e-mailových adries.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Už sa zdieľa novšia verzia tohto dokumentu, takže vybratú verziu dokumentu nemôžete zdieľať.",
		share_later_version_shared_error_explanation: "Nemôžete zdieľať staršiu verziu dokumentu, ktorý sa už zdieľa.",
		share_later_version_shared_error_userResponse: "Ak chcete poslať prepojenie na novšiu verziu dokumentu, musíte najskôr vybrať novšiu verziu a potom použiť akciu Zdieľať.<br><br>Ak chcete zdieľať vybratú verziu dokumentu, musíte najskôr odstrániť zdieľanie novšej verzie dokumentu.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nová správa",
		email_from: "Od:",
		email_to: "Komu:",
		email_cc_link: "Kópia",
		email_bcc_link: "Skrytá kópia",
		email_cc: "Kópia:",
		email_bcc: "Skrytá kópia:",
		email_address_invalid: "Uveďte platnú e-mailovú adresu.",
		email_subject: "Predmet:",
		email_message: "Správa:",
		email_message_placeholder: "Pridajte správu",
		email_attachments: "Prílohy:",
		email_links: "Prepojenia:",
		email_send: "Odoslať",
		email_dont_send: "Neposielať",
		email_subject_reminder: "Chýba predmet",
		email_subject_reminder_confirm: "Naozaj chcete túto správu poslať bez predmetu?",
		email_missing_from_error: "Vyskytol sa problém pri identifikovaní e-mailovej adresy odosielateľa, ktorá je potrebná na odoslanie e-mailu.",
		email_missing_from_error_explanation: "Prihlásili ste sa s identifikátorom užívateľa ${0}, ale tento identifikátor užívateľa nie je mapovaný na e-mailovú adresu.",
		email_missing_from_error_userResponse: "Pokúste sa znovu prihlásiť alebo sa prihláste s iným identifikátorom užívateľa. Ak problém pretrváva, nahláste túto chybu správcovi systému.",
		email_missing_from_error_adminResponse: "ID užívateľa ${0} nie je mapované na e-mailovú adresu a pracovná plocha ${1} nepovoľuje úpravu e-mailovej adresy odosielateľa užívateľmi.<br><br>Vyskúšajte niektoré z nasledujúcich riešení:<br>Uistite sa, že je zaregistrovaný modul plug-in Email Mapping.<br>Uistite sa, že súbor emailMappingPlugin.json obsahuje identifikátor užívateľa ${0} a e-mailovú adresu užívateľa, a potom zostavte, nakonfigurujte a zaregistrujte modul plug-in Email Mapping.<br>Ak nechcete používať modul plug-in Email Mapping alebo adresár e-mailových adries FileNet P8, ale radšej chcete, aby užívatelia mohli zadať svoju e-mailovú adresu pri posielaní e-mailov, upravte nastavenia posielania e-mailov pre pracovné plochy.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokument nie je možné otvoriť.",
		open_edit_document_with_native_application_error_explanation: "Aplikácia IBM Content Navigator sa nemôže pripojiť ku klientovi IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Nainštalujte a spustite klienta IBM Content Navigator Edit vo svojej pracovnej stanici. Potom skúste znova otvoriť dokument.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokument nie je možné otvoriť.",
		connect_to_the_streamline_service_error_explanation: "Aplikácia IBM Content Navigator sa nemôže pripojiť ku klientovi IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Nainštalujte a spustite klienta IBM Content Navigator Edit vo svojej pracovnej stanici. Potom skúste znova otvoriť dokument.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "Aplikácia IBM Content Navigator nie je správne nakonfigurovaná pre zdieľanie dokumentov.",
		share_not_configured_error_explanation: "Funkcia zdieľania v službe Box musí byť správne nakonfigurovaná, aby ste mohli zdieľať dokumenty.",
		share_not_configured_error_userResponse: "Obráťte sa na správcu a požiadajte ho, aby nakonfiguroval funkciu zdieľania v službe Box.",
		share_not_configured_error_adminResponse: "Pred zdieľaním dokumentov musia byť nakonfigurované tieto položky:<ul><li>V nastaveniach administračného nástroja musí byť povolená služba správcu úloh.</li><li>V archíve musí byť nakonfigurovaný identifikátor pripojenia k správcovi úloh.</li><li>V archíve musí byť povolené zdieľanie.</li><li>V počítači musí byť vybratý archív služby Box pre zdieľanie.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Zmeny vlastností neboli uložené pre novú verziu",
		checkin_cors_save_attributes_error_explanation: "Verzia bola vytvorená, ale zmeny vlastností neboli uložené. Dokument môže byť stále odhlásený.",
		checkin_cors_save_attributes_error_userResponse: "Odomknite dokument a aktualizujte vlastnosti pomocou položky kontextovej ponuky Vlastnosti.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Zmeny vlastností neboli uložené pre nový dokument",
		add_cors_save_attributes_error_explanation: "Dokument bol vytvorený, ale zmeny vlastností neboli uložené.",
		add_cors_save_attributes_error_userResponse: "Aktualizujte vlastnosti pomocou položky kontextovej ponuky Vlastnosti.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokument nie je možné otvoriť.",		
		edit_document_using_edit_service_error_explanation: "Dokument nie je možné otvoriť v službe úprav.",
		edit_document_using_edit_service_error_userResponse: "Požiadajte správcu, aby upravil integráciu služby úprav.<br><br> Ak užívateľ vyžaduje prístup k tomuto dokumentu zo služby úprav, prejdite na stránku Upraviť integráciu pre príslušný archív a upravte nastavenia integrácie služby úprav tak, aby zoznam tried na úpravu zahŕňal triedu pre podporu služby úprav.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokument nie je možné otvoriť.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokument používa služba Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Musíte zatvoriť a uložiť dokument v službe Office Online, aby ste ho mohli otvoriť v službe úprav.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Povoliť nahrávania CORS (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Nastavenia e-mailov:",
		admin_email_settings_hover: "Určite typ e-mailovej služby, ktorú majú užívatelia používať. Ak vyberiete e-mailovú službu HTML, môžete užívateľom povoliť úpravu e-mailovej adresy odosielateľa. Ak chcete používať e-mailovú službu založenú na prostredí Java, musíte mať webový prehliadač podporujúci jazyk Java.",
		admin_email_use_service: "Používať e-mailovú službu HTML",
		admin_email_use_applet: "Používať e-mailovú službu založenú na prostredí Java",
		admin_email_can_modify_from: "Povoliť užívateľom zmenu e-mailovej adresy odosielateľa",
		admin_email_can_modify_from_hover: "E-mailovú adresu odosielateľa predvolene nie je možné upraviť, keďže sa získava z mapovania užívateľov a e-mailových adries predstavujúcich užívateľské kontá.<br><br>Označte túto možnosť, ak chcete užívateľom povoliť úpravu e-mailovej adresy, keď posielajú e-maily. Platnosť e-mailovej adresy nebude overená.",
		admin_email_use_from_as_sender: "Použiť e-mailovú adresu odosielateľa ako odosielateľa e-mailu",
		admin_email_use_from_as_sender_hover: "Predvolene sa v e-mailovej správe použije platná e-mailová adresa odosielateľa. Táto e-mailová adresa je definovaná poštovou reláciu CNMailSession na aplikačnom serveri. Označte túto možnosť, ak chcete v e-mailovej správe použiť e-mailovú adresu užívateľa.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nové anotácie",
		addAnnotationDlg_labelContents: "Obsah:",
		addAnnotationDlg_labelAccess: "Prístup:",
		addAnnotationDlg_labelPublic: "Verejná",
		addAnnotationDlg_labelPrivate: "Súkromná",
		addAnnotationDlg_labelPrivateGroup: "Súkromná pre skupinu",
		addAnnotationDlg_labelGroup: "Skupina",
		addAnnotationDlg_labelCopiable: "Túto anotáciu nie je možné skopírovať na iný server.",
		addAnnotationDlg_buttonLabel_save: "Uložiť",

		/* Skip navigation */
		skipNavigation_title_main: "Prejsť na hlavný obsah",
		skipNavigation_title_menu: "Prejsť na tlačidlá navigácie",
		skipNavigation_label_main: "Prejsť na hlavný obsah",
		skipNavigation_label_menu: "Prejsť na tlačidlá navigácie",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Spravovať tímové priestory",
		manage_teamspace_pane_instance_hdr: "Tímové priestory",
		manage_teamspace_pane_template_hdr: "Šablóny",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Rolovať dopredu",
		scroll_back: "Rolovať naspäť",

		breadcrumb_separator_open: "Otvoriť uzol",
		breadcrumb_separator_close: "Zatvoriť uzol",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nie je vybratá žiadna položka.",

		/* eds */
		eds_url: "Adresa URL externej dátovej služby:",
		eds_request_timeout: "Vyhradený čas pre požiadavku služby (sekundy):",
		eds_is_required: "Zabrániť užívateľom vo vykonávaní akcií, ktoré by zmenili hodnoty vlastností, keď EDS nie je dostupné",

		/* eforms */
		eform_signing_pane_welcome: "Podpísať formulár",
		eform_signing_button_label: "Podpísať",
		eform_signing_pane_delete: "Odstrániť podpis",
		eform_signing_button_label_delete: "Odstrániť",

		xtplugin_server_label: "Adresa URL servera IBM FileNet Workplace XT",
		xtplugin_server_hover: "Zadajte adresu URL servera, na ktorom je nasadený produkt IBM FileNet Workplace XT, napríklad: http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "Adresa URL servera IBM eClient",
		ecplugin_server_hover: "Zadajte adresu URL servera, na ktorom je nasadený produkt IBM eClient, napríklad: http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Akcie vykonávané s veľkým počtom položiek môžu trvať dlho. Chcete pokračovať?",
		large_number_actions_continue_button: "Pokračovať",

		large_items_actions_confirmation_question: "Akcie vykonávané s veľkými položkami môžu trvať dlho. Chcete pokračovať?",

		viewer_editproperties_title: "Potvrdenie",
		viewer_editproperties_title_warning: "Varovanie",
		viewer_editproperties_save: "Uložiť",
		viewer_editproperties_next: "Ďalej",
		viewer_editproperties_reset: "Zrušiť",
		viewer_editproperties_reset_hover: "Všetky neuložené údaje budú resetované na predtým uložené hodnoty",
		viewer_editproperties_saveandgetnext: "Uložiť potom získať ďalší",
		viewer_editproperties_saveandgetnext_hover: "Keď uložím svoje zmeny, automaticky získať ďalší dokument",
		viewer_editproperties_prompt_save_changes: "Upravili ste vlastnosti dokumentu<br>${0}<br><br>Chcete uložiť vykonané zmeny?",
		viewer_editproperties_prompt_discard_changes: "Upravili ste vlastnosti dokumentu<br>${0}<br><br>Niektoré vlastnosti však majú neplatnú hodnotu, takže zmeny nie je možné uložiť. Buď môžete opraviť neplatné hodnoty, alebo môžete zahodiť zmeny.<br>Chcete opraviť neplatné hodnoty uvedené v paneli vlastností?",
		viewer_comments_prompt_discard_changes: "Upravili ste komentáre. Chcete uložiť vykonané zmeny?",
		viewer_notelogs_prompt_discard_changes: "Upravili ste zoznamy poznámok. Chcete uložiť vykonané zmeny?",
		social_collaborated_version: "Verzia: ${0}",
		social_link_label: "Kto...",

		// social comments
		comments: "Komentáre",
		comments_add_hint: "Komentáre pridáte stlačením klávesu Enter.",
		comments_hint: "Zadajte svoje komentáre.",
		comments_label: "Ak chcete uložiť svoje komentáre, stlačte kláves Enter alebo Tab. Ak chcete zrušiť, stlačte kláves Esc.",
		comments_delete_confirmation: "Chcete odstrániť vybratý komentár?",
		comments_number: "Komentáre: ${0}",
		comments_save_new: "Upravili ste komentáre. Chcete zatvoriť okno bez uloženia vašich zmien?",

		notelogs: "Zoznamy poznámok",
		notelogs_download: "Sťahovanie",
		notelog_modify: "Uložiť zmeny",
		notelog_edit: "Upraviť zoznam poznámok",
		notelog_create_newVersion: "Vytvoriť novú verziu zoznamu poznámok",
		notelog_add_hint: "Napíšte komentáre a pridajte ich stlačením klávesu Enter.",
		notelog_hint: "Ďalší riadok vložíte stlačením klávesov Shift a Enter",
		notelog_add_placeholder: "Stlačením klávesu Enter a pridajte svoj komentár do zoznamu poznámok.",
		notelog_save_new: "Upravili ste zoznam poznámok. Chcete zatvoriť okno bez uloženia vašich zmien?",

		// P8 markings related
		cannot_remove_markings: "Nemáte oprávnenie na odstránenie hodnôt označení: {0}",

		// download count
		downloadcount: "Stiahnutia: {0}",
		downloadcount_single: "1 stiahnutie",
		downloadcount_multiple: "{0} stiahnutí",
		downloadcount_none: "Zatiaľ ho nikto nestiahol",

		// recommendations
		recommendations: "Páči sa: {0}",
		recommendations_recommend: "Páči sa mi to",
		recommendations_unrecommend: "Nepáči sa mi to",
		recommendations_you: "Páči sa vám to",
		recommendations_you_and_another: "Vám a ďalšej 1 osobe sa páči",
		recommendations_you_and_others: "Vám a ďalším {0} sa páči",
		recommendations_another: "Páči sa 1 osobe",
		recommendations_others: "{0} osobám sa to páči",
		recommendations_none: "Zatiaľ nebol označený ako obľúbený",

		// tags
		tags: "Značky: ${0}",
		tags_delete: "Odstrániť ${0}",
		tags_none: "Neexistujú žiadne značky na zobrazenie.",
		tags_add: "Pridať značky:",
		tags_hint: "Stlačte Enter na pridanie vašich značiek.",
		tags_hover_help: "Uveďte značku alebo zoznam značiek, na základe ktorých sa môžu vyhľadať dokumenty s rovnakou značkou. Značky môžete oddeliť čiarkou (,), bodkočiarkou (;) alebo medzerou.",
		tags_hover_help_box: "Uveďte značku alebo zoznam značiek oddelených čiarkou, na základe ktorých sa môžu vyhľadať dokumenty s rovnakou značkou.",
		tags_no_access: "Nemáte príslušné oprávnenia na pridávanie značiek.",

		//task scheduler pane
		taskPane_tooltip: "Otvoriť zobrazenie asynchrónnych úloh",
		taskPane_tree: "Navigačný strom panelu úloh",
		taskPane_allTasks: "Všetky úlohy",
		taskPane_scheduledTasks: "Naplánované úlohy",
		taskPane_recurringTasks: "Opakované úlohy",
		taskPane_inProgressTasks: "Prebiehajúce úlohy",
		taskPane_completedTasks: "Dokončené úlohy",
		taskPane_failedTasks: "Neúspešné úlohy",
		taskPane_disabledTasks: "Zakázané úlohy",
		taskPane_statusScheduled: "Naplánovaný",
		taskPane_statusInProgress: "Prebiehajúce",
		taskPane_statusCompleted: "Dokončené",
		taskPane_statusFailed: "Neúspešné",
		taskPane_statusPaused: "Pozastavený",
		taskPane_noItemSelected: "Nebola vybratá žiadna položka",
		taskSchedulerPane_scheduleInformation: "Informácie o pláne",
		taskSchedulerPane_loginInformation: "Prihlasovacie informácie",
		taskSchedulerPane_startImmediately: "Spustiť okamžite",
		taskSchedulerPane_recurrence: "Opakovanie",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Naplánovať správu",
		taskSchedulerPane_nameHoverHelp: "Zadajte názov úlohy.",
		taskSchedulerPane_descriptionHoverHelp: "Uveďte popis pre úlohu. Uveďte taký popis, ktorý vám pomôže identifikovať úlohu.",
		taskSchedulerPane_startTimeHoverHelp: "Zadajte, kedy sa má spustiť úloha. Ak chcete spustiť úlohu teraz, vyberte Spustiť okamžite.",
		taskSchedulerPane_recurrenceHoverHelp: "Môžete naplánovať pravidelné opakované spúšťanie úlohy.",
		taskSchedulerPane_endTimeHoverHelp: "Uveďte, kedy sa má zastaviť vykonávanie úlohy. Úloha sa spustí od naplánovaného času spustenia do naplánovaného času ukončenia.",
		taskSchedulerPane_usernameHoverHelp: "V prípade opakovaných úloh musíte zadať meno užívateľa, aby sa služba mohla autentifikovať pri spustení úlohy.",
		taskSchedulerPane_passwordHoverHelp: "V prípade opakovaných úloh musíte zadať heslo pre uvedeného užívateľa, aby sa služba mohla autentifikovať pri spustení úlohy.",
		taskSchedulerPane_notification: "Oznámenie",
		taskSchedulerPane_emailAddress: "E-mailová adresa",
		taskSchedulerPane_emailAddressHoverHelp: "Uveďte e-mailovú adresu, na ktorú sa majú posielať oznámenia o stave úlohy.",
		taskSchedulerPane_intervalHoverHelp: "Zadajte dĺžku časového intervalu, počas ktorého sa bude opakovaná úloha vykonávať. Tento interval môžete určiť v hodinách, dňoch, týždňoch alebo mesiacoch.",
		taskSchedulerPane_scheduledStartTime: "Plánovaný čas spustenia",
		taskSchedulerPane_startTime: "Čas spustenia",
		taskSchedulerPane_title: "Plán",
		taskSchedulerPane_runNow: "Spustiť teraz",
		taskSchedulerPane_runOnce: "Spustiť raz",
		taskSchedulerPane_runAtSchedule: "Spúšťať podľa plánu",
		taskSchedulerPane_repeats: "Opakovania",
		taskSchedulerPane_repeatsEvery: "Opakuje sa každých",
		taskSchedulerPane_hourly: "Každú hodinu",
		taskSchedulerPane_daily: "Denne",
		taskSchedulerPane_weekly: "Každý týždeň",
		taskSchedulerPane_monthly: "Mesačne",
		taskSchedulerPane_yearly: "Ročne",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Dátum začiatku",
		taskSchedulerPane_after: "Po",
		taskSchedulerPane_ending: "Dátum ukončenia",
		taskSchedulerPane_times: "čas(časy)",
		taskSchedulerPane_days: "deň(dni)",
		taskSchedulerPane_hours: "hodina(y) v rámci dňa",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Ukončenie (v dňoch)",
		taskSchedulerPane_never: "Nikdy",
		taskSchedulerPane_categorization: "Kategorizácia",
		taskSchedulerPane_scheduleTask: "Naplánovaná úloha",
		taskInformationPane_details: "Podrobnosti",
		taskInformationPane_errors: "Chyby",
		taskInformationPane_taskInstances: "Inštancie úloh",
		taskInformationPane_audits: "Audity",
		taskInformationPane_results: "Výsledky",
		asyncTasks: "Asynchrónne úlohy",

		//entry template pane
		search_all_entry_templates: "Vyhľadať všetky šablóny položiek",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Zobraziť celú stránku",
		mobilesite: "Zobraziť stránku pre mobilné zariadenia",
		profile: "Spravovať profil",
		office_template: "Šablóna dokumentu Office:",
		select_office_template: "Vyberte šablónu dokumentu Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Vybraté dokumenty nemôžu byť otvorené v prezerači s akciou Zlúčiť a rozdeliť.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Prezerač nakonfigurovaný pre dokumenty PDF a TIFF nepodporuje akciu Zlúčiť a rozdeliť.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Požiadajte správcu o konfiguráciu prezerača pre dokumenty PDF a TIFF, ktorý podporuje akciu Zlúčiť a rozdeliť, ako prezerač Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Vybraté dokumenty PDF nie je možné otvoriť v prezerači s akciou Zlúčiť a rozdeliť.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Prezerač nakonfigurovaný pre dokumenty PDF nepodporuje akciu Zlúčiť a rozdeliť.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Požiadajte správcu o konfiguráciu prezerača pre dokumenty PDF, ktorý podporuje akciu Zlúčiť a rozdeliť, ako je prezerač Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Vybraté dokumenty TIFF nie je možné otvoriť v prezerači s akciou Zlúčiť a rozdeliť.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Prezerač nakonfigurovaný pre dokumenty TIFF nepodporuje akciu Zlúčiť a rozdeliť.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Požiadajte správcu o konfiguráciu prezerača pre dokumenty TIFF, ktorý podporuje akciu Zlúčiť a rozdeliť, ako je prezerač Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Vybraté dokumenty nemôžu byť otvorené v prezerači s akciou Zlúčiť a rozdeliť.",
		document_builder_unsupported_documents_error_explanation: "Akcia Zlúčiť a rozdeliť funguje len s dokumentmi PDF a TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Vyberte podporované dokumenty a pokúste sa znova.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Niektoré z vybratých dokumentov nie je možné otvoriť v prezerači s akciou Zlúčiť a rozdeliť.",
		document_builder_some_unsupported_documents_error_explanation: "Akcia Zlúčiť a rozdeliť funguje len s dokumentmi PDF  a TIFF otvorenými z rovnakého archívu.",
		document_builder_some_unsupported_documents_error_userResponse: "Podporované dokumenty sa otvoria v prezerači.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Pri prihlasovaní modifikovaného obsahu nastala chyba.",
		document_builder_checkin_failed_explanation: "Prezeraču bola vrátená chyba pri prihlasovaní upraveného obsahu.",
		document_builder_checkin_failed_userResponse: "Požiadajte správcu systému, aby skontroloval protokolové súbory webového aplikačného servera.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokument nie je možné otvoriť.",
		no_viewer_to_view_error_explanation: "Správca systému zakázal zobrazovanie tohto dokumentu. Ak potrebujete získať prístup k tomuto dokumentu, stiahnite si ho.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Nepodarilo sa zostaviť obsah.",
		document_build_failed_userResponse: "Požiadajte správcu systému, aby skontroloval protokolové súbory prezerača.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokument nie je možné otvoriť v režime zlúčenia a rozdelenia.",
		document_builder_open_failed_userResponse: "Požiadajte správcu systému, aby skontroloval protokolové súbory prezerača.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Systém sa nepodarilo prepnúť do režimu zlúčenia a rozdelenia.",
		document_builder_switch_failed_userResponse: "Požiadajte správcu systému, aby skontroloval protokolové súbory prezerača.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenty",
		print_service_page_setup_tab_title: "Nastavenie strany",
		print_service_OD_print_tab_title: "Nastavenia tlačiarne",
		print_service_status_merging: "Zlučovanie dokumentov...",
		print_service_status_converting: "Konvertovanie dokumentov...",
		print_service_status_formatting: "Formátovanie dokumentov na účely tlače...",
		admin_print_service_maximum_number_to_print: "Maximálny povolený počet tlačených dokumentov:",
		admin_print_service_maximum_size_to_print: "Maximálne povolené množstvo údajov pre tlač (v MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Zadajte maximálny počet dokumentov, ktoré môžu užívatelia naraz vytlačiť. Predvolený maximálny počet je 50. Ak nechcete obmedziť tlač podľa počtu dokumentov, uveďte hodnotu 0.",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Obmedzenie:</b> Toto nastavenie nie je podporované v aplikácii IBM Content Manager OnDemand.<br/><br/>Zadajte maximálne množstvo údajov, ktoré je možné vytlačiť s použitím služby tlače IBM Daeja ViewONE. <br /><br />Celková veľkosť všetkých vybratých dokumentov nemôže byť väčšia ako je táto hodnota. <br/><br/>Predvolený limit je 200 MB. Nastavenie limitu nad 200 MB môže ovplyvniť výkon systému. Ak nechcete obmedziť tlač podľa veľkosti dokumentov, uveďte hodnotu 0.",
		// error printing
		print_service_error_printing: "Počas tlače sa vyskytla chyba.",
		print_service_error_printing_userResponse: "Požiadajte správcu, aby skontroloval protokolové súbory služby tlače.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Vybraté dokumenty sú príliš veľké pre tlač",
		print_service_max_content_error_explanation: "Veľkosť vybratých dokumentov presahuje limit ${0} MB.",
		print_service_max_content_error_userResponse: "Vyberte menší počet dokumentov alebo menšie dokumenty a skúste znova. Taktiež môžete požiadať správcu systému, aby zvýšil limit celkovej veľkosti položiek, ktoré môžete naraz vytlačiť z tejto pracovnej plochy.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Položky nie je možné vytlačiť.",
		print_service_max_number_selected_error_explanation: "Naraz môžete vytlačiť najviac nasledujúci počet položiek: ${0}. Pokúšate sa však vytlačiť nasledujúci počet položiek: ${1}.",
		print_service_max_number_selected_error_userResponse: "Vyberte menej položiek a znova sa pokúste spustiť tlač. Taktiež môžete požiadať správcu systému, aby zvýšil limit maximálneho počtu položiek, ktoré môžete naraz vytlačiť z tejto pracovnej plochy.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


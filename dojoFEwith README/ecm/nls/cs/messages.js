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
		welcome_user: "Vítejte, ",
		about: "O programu",
		all: "Vše",
		help: "Nápověda",
		user_session: "Uživatelská relace",
		user_session_for: "Uživatelská relace pro: ${0}",
		user_session_for_with_container: "Uživatelská relace pro: ${0} (${1})",
		tools: "Nástroje",
		login: "Přihlásit",
		logout: "Odhlásit",
		search: "Vyhledat",
		saved_searches: "Uložená hledání",
		content_analytics: "Analyzovat obsah",
		reset: "Obnovit",
		reset_hover: "Pro veškerá neuložená data na všech kartách budou nastaveny naposledy uložené hodnoty.",
		reset_default: "Vymazat vše",
		reset_default_hover: "Vymaže pole Aktuální popisek na všech kartách.",
		locale: "Národní prostředí:",
		up: "Nahoru",
		down: "Dolů",
		restore: "Obnovit",
		maximize: "Maximalizovat",
		values_label: "Hodnoty",
		value_label: "Hodnota:",
		path_label: "Cesta:",
		new_label: "Nové:",
		back_label: "Zpět",
		clear: "Vymazat",
		set: "Nastavit...",
		browse: "Procházet",
		work: "Práce",
		connect: "Připojit",
		documents: "Dokumenty:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM a logo IBM jsou ochranné známky společnosti IBM Corporation, registrované v mnoha jurisdikcích po celém světě. Java a všechny ochranné známky a loga založené na termínu Java jsou ochranné známky nebo registrované ochranné známky společnosti Oracle anebo příbuzných společností. Technologie Oracle Outside In, která je zde zahrnuta, je předmětem licence s omezeným použitím a lze ji použít pouze spolu s touto aplikací. Licence k tomuto programu je poskytována za licenčních podmínek dodávaných s programem. Tato licenční smlouva může být buď uložena v programovém adresáři ve složce, nebo v knihovně označené jako \"License\" nebo \"Non_IBM_License\" (pokud existuje), nebo může být poskytnuta v tištěné podobě. Než začnete program používat, přečtěte si pozorně licenční smlouvu. Použitím programu dáváte najevo svůj souhlas s jejími podmínkami. ",
		edit: "Upravit",
		cancel: "Storno",
		close: "Zavřít",
		close_all: "Zavřít všechny karty",
		close_others: "Zavřít ostatní karty",
		ok: "OK",
		yes: "Ano",
		no: "Ne",
		open: "Otevřít",
		refresh: "Aktualizovat",
		refresh_cabinets: "Aktualizovat všechny soubory CAB",
		delete_text: "Odstranit",
		export_config: "Exportovat konfiguraci",
		description: "Popis",
		true_label: "Ano",
		false_label: "Ne",
		error: "Chyba",
		error_reference_hover: "Vyhledat další informace o této chybě na webu www.ibm.com.",
		url_label: "Adresa URL",
		default_label: "Výchozí",
		ibm_label: "IBM",
		light_label: "Světlé",
		dark_label: "Tmavé",
		save: "Uložit",
		saveAs: "Uložit jako...",
		save_and_close: "Uložit a zavřít",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Žádné",
		Name: "Název",
		"${NAME}": "Název",
		mime_type: "Typ MIME",
		mime_type_contains_label: "Typ MIME obsahuje",
		mime_type_header: "Typ MIME",
		mime_type_icon: "Ikona Typ MIME",
		casesearch: "Případ",
		item: "Položka",
		no_mime_type: "Tato položka nemá žádný obsah.",
		items_selected: "Vybráno položek: ${0}",
		requestor: "Žadatel",
		scheduledStartTime: "Naplánovaný čas zahájení",
		isRecurring: "Opakuje se",
		weeks: "Týdny",
		days: "Dny",
		hours: "Hodiny",
		endTime: "Čas ukončení",
		username: "Jméno uživatele",
		password: "Heslo",
		serverURL: "Adresa URL serveru",
		enable: "Povolit",
		disable: "Zakázat",
		finish: "Dokončit",
		previous: "Předchozí",
		next: "Další",
		schedule: "Časový plán",
		removeFromThisList: "Odebrat z tohoto seznamu",
		status: "Stav",
		scheduledEndTime: "Naplánovaný čas ukončení",
		type: "Typ",
		mode: "Režim",
		startTime: "Čas spuštění",
		createdBy: "Vytvořil",
		nextScheduledTime: "Další naplánovaný čas",
		id: "ID",
		duration: "Doba trvání",
		repeatCycle: "Frekvence",
		taskTypeName: "Typ úlohy",
		to: "do",
		filter: "Filtrovat:",
		error_message: "Chybová zpráva",

        file_type: "Typ dokumentu",
        word_template_name: "Název šablony aplikace Word",
        excel_template_name: "Název šablony aplikace Excel",
        powerpoint_template_name: "Název šablony aplikace PowerPoint",
        template_description: "Popis šablony",
        action_add_template: "Přidat",
        action_change_template: "Upravit",      
        action_edit_template_properties: "Vlastnosti",
        add_presentation_template: "Přidat šablonu prezentace",
    	add_spreadsheet_template: "Přidat šablonu tabulky",
    	add_doc_template: "Přidat šablonu dokumentu",    	
    	file_type_doc_hover: "Je třeba určit soubor se šablonou dokumentu pro zpracování textu.<br><br>Platné typy MIME: ${0}",
    	file_type_doc_error: "Je třeba určit soubor se šablonou dokumentu pro zpracování textu.<br><br>Typ MIME vybraného dokumentu: ${0}<br><br>Platné typy MIME: ${1}",
    	file_type_presentation_hover: "Je třeba určit platný soubor se šablonou prezentace.<br><br>Platné typy MIME: ${0}",
    	file_type_presentation_error: "Je třeba určit platný soubor se šablonou prezentace.<br><br>Typ MIME vybraného dokumentu: ${0}<br><br>Platné typy MIME: ${1}",
    	file_type_spreadsheet_hover: "Je třeba určit platný soubor se šablonou tabulky.<br><br>Platné typy MIME: ${0}",
    	file_type_spreadsheet_error: "Je třeba určit platný soubor se šablonou tabulky.<br><br>Typ MIME vybraného dokumentu: ${0}<br><br>Platné typy MIME: ${1}",
    	office_online_only_one_template_error: "Můžete vybrat pouze jeden soubor.",
    	change_presentation_template: "Upravit šablonu prezentace",
    	change_spreadsheet_template: "Upravit šablonu tabulky",
    	change_doc_template: "Upravit šablonu dokumentu",
    	change_button: "Upravit",
	    new_document_dialog_doc_title: "Nový dokument",
	    new_document_dialog_presentation_title: "Nová prezentace",
	    new_document_dialog_spreadsheet_title: "Nová tabulka",
	    new_document_dialog_title_label: "Název:",
	    new_document_dialog_title_hover: "Zadejte název pro tento dokument.",
	    new_document_dialog_title_missing_message: "Je třeba určit název.",
	    office_online_save_before_adding_templates_title: "Uložit změny do úložiště",
	    office_online_save_before_adding_templates_error: "Dokud neuložíte změny provedené v úložišti, nebudete moci přidávat šablony produktu Office. Klepněte na volbu <b>Uložit a zavřít</b> a poté úložiště otevřete znovu, aby bylo možné přidávat šablony produktu Office.",
	    copy_to_OOS_dialog_doc_title: "Nový dokument",
	    office_online_checkin_cancelcheckout_message: "Tento dokument se upravuje ve službě Microsoft Office Online. Dokument nemůžete vrátit nebo zrušit jeho zapůjčení, pokud je otevřený ve službě Microsoft Office Online.",
	    new_document_classification: "Klasifikace:",
	    new_document_classification_help: "Resetuje třídu, vlastnosti a nadřízenou složku (pokud existuje) zdrojového dokumentu. Při přidávání dokumentu s použitím šablony položky bude automaticky vybrána šablona položky zdrojového dokumentu, pokud existuje. Vlastnosti zdrojového dokumentu se používají jako výchozí hodnoty, složka a třída určené v šablony položky jsou však zachovány.",
		new_document_classification_use_source_document: "Použít zdrojový dokument:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Ikona Typ - ${0}",
		repository_name_and_type: "Název a typ - ${0}",
		select_class_label: "Vybrat položku ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Zobrazení Podrobnosti",
		detail_view_button: "Podrobnosti",
		magazine_view_button_tooltip: "Zobrazení Zásobník",
		magazine_view_button: "Zásobník",
		filmstrip_view_button_tooltip: "Zobrazení Filmový pás",
		filmstrip_view_button: "Filmový pás",

		magazine_view_show: "Zobrazit v zobrazení Zásobník",
		detail_view_show: "Zobrazit v zobrazení Podrobnosti",

		total_count_item: "položka",
		total_count_items: "položky",
		total_count_more_items: "Více než ${0} položek",

		extension_changed: "Přípona vybraného souboru neodpovídá původní. Vyberte jiný soubor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Vybraný prohlížeč nepodporuje všechny typy souborů. Pokud toto mapování prohlížeče uložíte, mohou se při prohlížení dokumentů vyskytnout problémy. Jestliže vyberete volbu Všechny typy souborů, doporučujeme vybrat takový prohlížeč, který podporuje všechny typy souborů.<br><br><b>Tip:</b> Všechny typy souborů jsou podporovány následujícími prohlížeči:<ul><li>Prohlížeč apletů</li><li>Prohlížeč AJAX</li><li>Převod HTML</li><li>Převod PDF</li><li>Webový prohlížeč</li></ul>",
		file_type_any: "Všechny typy souborů",
		file_type_any_hover: "Tuto volbu vyberte, pokud chcete použít vybraný prohlížeč pro prohlížení všech dokumentů bez ohledu na typ souboru. Tato volba je podporována pro následující prohlížeče:<br><br><ul><li>Prohlížeč apletů</li><li>Prohlížeč AJAX</li><li>Převod HTML</li><li>Převod PDF</li><li>Webový prohlížeč</li></ul><br><br><b>Zapamatujte si:</b> Chcete-li ve většině případů používat konkrétní prohlížeče, veškerá vytvořená mapování používající tuto volbu je vhodné přesunout na konec mapy prohlížečů. ",
		file_type_input: "Nový typ souboru:",

		mime_type_input: "Nový typ MIME:",
		mime_type_input_invalid: "Nový typ MIME nesmí obsahovat žádný z následujících znaků: ,",
		mime_type_available: "Dostupné typy MIME",
		mime_type_selected: "Vybrané typy MIME",
		file_type_input: "Nový typ souboru:",
		file_type_input_invalid: "Nový typ souboru nesmí obsahovat žádný z následujících znaků: ,",
		file_type_available: "Dostupné typy souborů",
		file_type_selected: "Vybrané typy souborů",
		file_type_header: "Typ souboru",
		viewer: "Prohlížeč:",
		viewer_viewer: "Prohlížeč",
		viewer_view: "Zobrazit",
		viewer_preview: "Zobrazit náhled",
		viewer_merge_and_split: "Sloučit a rozdělit",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Pouze náhled",
		preview_only_label: "(náhled)",
		preview_only_hover: "Toto mapování prohlížeče lze použít pouze v případě, že uživatel klepne na volbu <b>Náhled</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Toto úložiště nepodporuje procházení. Vyberte jiné úložiště.",

		repository_community_teamspace_message: "Jiné úložiště je již přiřazeno jako úložiště knihovny komunity. Chcete-li nadále používat stávající úložiště jako úložiště knihovny komunity, vyberte před uložením změn volbu <b>Ne</b>, aby nebylo stávající úložiště nahrazeno tímto úložištěm.",

		favorites_empty: "Dosud nemáte žádné oblíbené položky.",
		syncItems_empty: "Dosud nemáte žádné synchronizované soubory.",

		root_folder_id: "ID kořenové složky",
		unified_searches: "Vyhledávání ve více úložištích:",
		max_results: "Počet výsledků:",
		direct_retrieve_enabled: "Přímé načtení:",
		itemTypesToDisplay: "Zobrazované typy položek:",
		allItemTypes: "Všechny typy položek",
		include_attr_group_name: "Popisy skupin atributů v zobrazovaných názvech atributů:",
		admin_repcfg_include_attr_group_name_hover: "Při výchozím nastavení je popis skupiny atributů uveden v názvech atributů skupiny atributů. Díky tomu uživatelé při práci s atributy vidí, do které skupiny atributů náleží atribut skupiny atributů.<br>Uživatelům se například může zobrazit následující název pro atribut skupiny atributů: Nastavení dokumentu.Typ dokumentu.<br><br>Pokud tuto volbu zakážete, bude pro název atributu skupiny atributů použit pouze popis atributu.<br>Uživatelům se například zobrazí následující název: Typ dokumentu.<br><br>Bez popisu skupiny atributů by se uživatelům mohlo obtížně rozlišovat, zda položka Typ dokumentu představuje jednoduchý atribut, nebo atribut skupiny atributů.",
		documentItemTypesOnly: "Pouze typy položek modelu dokumentu",
		object_store: "Symbolický název úložiště objektů:",
		object_store_display_name: "Zobrazovaný název úložiště objektů:",
		teamspaceUpgradeMsg: "Po uložení konfigurace úložiště budou vaše týmové prostory aktualizovány. V případě mnoha týmových prostorů může aktualizace trvat několik minut.",
		synchUpgradeMsg: "Po uložení konfigurace úložiště bude modul synchronizace v tomto úložišti aktualizován.",
		protocol: "Protokol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID úložiště CMIS:",
		cmis_url: "Adresa URL dokumentu služby CMIS AtomPub:",
		trace_level: "Úroveň trasování",
		trace_dir: "Adresář trasování",
		temp_dir: "Dočasný adresář",
		show_document_location: "Zobrazit umístění dokumentu",
		max_folders: "Maximální počet složek",
		afp_conversion: "Převod AFP",
		line_conversion: "Převod řádkových dat",
		max_hits: "Maximální počet přístupů",
		folder_search_expresssion: "Vyhledávací výraz pro složky",
		max_item_types: "Maximální počet typů položek",
		max_worklists: "Maximální počet seznamů pracovních položek",
		update_storage_collection: "Aktualizovat kolekci úložiště",
		include_mime_types_in_search_results: "Zahrnout typy MIME do výsledků hledání",
		object_type: "Typ objektu",
		object_type_document: "Dokumenty",
		object_type_folder: "Složky",
		file_label: "Soubor:",
		plugin_jarfile_path_label: "Cesta k souboru JAR:",
		plugin_classfolder_path_label: "Cesta k souboru třídy:",
		plugin_classname_label: "Název třídy:",
		plugin_id_label: "ID modulu plug-in:",
		class_label: "Třída",
		configuration: "Konfigurace",
		connect_repository: "Připojit...",
		server_type: "Typ serveru",
		timeout_in_seconds: "Časový limit (v sekundách):",
		default_search_template: "Výchozí hledání",
		search_filtered_properties: "Vlastnosti hledání",
		property_contains_label: "Vlastnost obsahuje",
		class_contains_label: "Třída obsahuje",
		search_filtered_operators: "Operátory hledání",
		default_search_results: "Výsledky hledání",
		data_type: "Datový typ",
		status_bar: "Stavový panel",
		operators_for: "Operátory pro:",
		currentUser: "Aktuální uživatel",
		nameContains: "Jméno/název obsahuje",
		searchFor: "Vyhledat",
		server_autentication: "Ověřování serveru (protokol OAuth 2.0 s technologií JWT)",
		standard_authentication: "Standardní ověřování (trojcestný protokol OAuth2.0)",
		developer_authentication: "Ověřování pro vývojáře",
		enterprise_id: "ID podniku:",
		public_key_id: "ID veřejného klíče:",
		private_key_path: "Cesta k souboru soukromého klíče:",
		server_user_email: "E-mailová adresa uživatele serveru",

		filter_builder_tooltip: "Definovat filtr",

		// Launch bar
		launchbar_home: "Otevřít domovské umístění",
		launchbar_favorites: "Otevřít oblíbené položky",
		launchbar_browse: "Otevřít zobrazení pro procházení",
		launchbar_browse_popup: "Otevřít rozevírací seznam pro procházení",
		launchbar_search: "Otevřít zobrazení pro hledání",
		launchbar_search_popup: "Otevřít rozevírací seznam pro hledání",
		launchbar_teamspaces: "Otevřít zobrazení týmových prostorů",
		launchbar_teamspaces_popup: "Otevřít rozevírací seznam týmových prostorů",
		launchbar_work: "Otevřít zobrazení práce",
		launchbar_work_popup: "Otevřít rozevírací seznam práce",
		launchbar_entry_templates: "Otevřít zobrazení šablon položek",
		launchbar_entry_templates_popup: "Otevřít rozevírací seznam šablon položek",
		launchbar_admin: "Otevřít zobrazení pro administraci",

		admin_sync_server: "Služby synchronizace",
		admin_settings: "Nastavení",
		admin_interface_text: "Popisky",
		admin_interface_text_desktop: "Pracovní plocha:",
		admin_desktops: "Pracovní plochy",
		admin_repositories: "Úložiště",
		admin_mobile: "Mobilní zařízení",
		admin_menus: "Nabídky",
		admin_reason_codes: "Důvody redakce",
		admin_plugins: "Moduly plug-in",
		admin_plugins_state_enabled: "Modul plug-in je povolen.",
		admin_plugins_state_disabled: "Modul plug-in je zakázán.",
		admin_plugins_version: "Verze:",
		admin_plugins_version_heading: "Verze",
		admin_plugins_icon: "Ikona Modul plug-in",
		admin_viewer_mapping_icon: "Ikona Mapování prohlížečů",
		admin_viewer_defs: "Mapy prohlížečů",
		admin_viewer_dialog_title: "Mapování",
		admin_viewer_dialog_new_title: "Nové mapování",
		admin_viewer_dialog_instructions: "Mapování určuje, který prohlížeč chcete používat pro soubory v úložišti. Můžete vytvořit několik mapování, která určí různé prohlížeče pro různé typy souborů. Pro definování mapování můžete použít buď typ MIME, nebo příponu souboru. Mapování s příponami souborů budou mapována na názvy dokumentů. Mapování s nastaveným typem souborů gif bude například mapováno na názvy dokumentů, které mají příponu .gif.",
		admin_desktop_viewer_defs: "Mapa prohlížečů:",
		admin_desktop_viewer_defs_hover: "Mapa prohlížečů určuje, který prohlížeč se používá pro otvírání různých typů dokumentů v úložišti.<br><br>V sekci <b>Mapy prohlížečů</b> v nástroji pro administraci lze vytvářet nové mapy prohlížečů.",
		admin_desktops_used: "Použito v pracovních plochách",
		admin_desktop_additional_settings: "Další nastavení:",
		admin_default_desktop: "Nastavit jako výchozí pracovní plochu",
		admin_default_desktop_header: "Výchozí pracovní plocha",
		admin_layout_tab_title: "Rozvržení",
		admin_desktop_icon: "Ikona Pracovní plocha",

		// Themes
		admin_themes: "Motivy",
		admin_theme_list_instructions: "Aby bylo přizpůsobení webového klienta pro vaši organizaci snazší, můžete vytvořit motiv. Chcete-li používat různé barvy, písma nebo loga pro různé pracovní plochy ve vašem prostředí, můžete vytvořit více motivů.<br><br>Po vytvoření lze téma použít na pracovní plochu konfigurováním motivu na kartě <b>Vzhled</b> příslušné pracovní plochy.",
		admin_theme_instructions: "Vytvořte motiv pro správu barev a písem, které se zobrazí ve webovém klientovi. Kromě toho můžete pomocí motivu změnit logo, název aplikace a text copyrightu, který je zobrazen na přihlašovací stránce a v pruhu nápisu.",
		admin_theme_heading: "Motiv: <b>${0}</b>",
		admin_new_theme: "Nový motiv",
		admin_text_theme: "Motiv",
		admin_delete_confirmation_themes: "Chcete odstranit vybrané motivy?\nPočet vybraných motivů: ${0}.",
		admin_theme_color: "Barva",
		admin_theme_text: "Text",
		admin_theme_solid: "Neprůhledné",
		admin_theme_gradient: "Přechod",
		admin_theme_box: "Box",
		admin_theme_color_label: "Barva ${0}:",
		admin_theme_name_invalid: "Název motivu nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID motivu musí být jedinečné a po uložení motivu nemůžete ID změnit.<br><br>ID může obsahovat pouze alfanumerické znaky.",
		admin_theme_name_hover: "Název nesmí obsahovat následující znaky: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatické nastavení",
		admin_theme_logo_url_hover: "Zadejte adresu URL souboru loga. Pokud se logo nachází na stejném webovém aplikačním serveru jako webový klient, zadejte relativní adresu URL. Příklad: /mycustomizations/banner_logo.png.<br><br>Doporučuje se použít logo s průhledným pozadím.",
		admin_theme_color_palette_title_heading: "Paleta barev",
		admin_theme_color_palette_help_text: "Vytvořte paletu barev pro svůj motiv pomocí hexadecimální hodnoty nebo nástroje pro výběr barev. Můžete přidat libovolný počet barev.",
		admin_theme_color_add_button_label: "Přidat barvu",
		admin_theme_color_remove_button_label: "Odebrat barvu",
		admin_theme_global_title_heading: "Prvky pro celou aplikaci",
		admin_theme_global_font: "Rodina písem:",
		admin_theme_global_font_hover: "Vyberte písmo, které se má použít ve webovém klientovi. Písma jsou uvedena v pořadí přednosti (další písmo v seznamu se použije pouze v případě, že předchozí písmo není v klientském počítači instalováno).",
		admin_theme_global_framework_color_label: "Barva rámce:",
		admin_theme_global_framework_color_hover: "Vyberte barvu, která má být použita pro následující prvky:<ul><li>Pruh titulku v dialogových oknech</li><li>Barva zvýraznění v horní části vybrané karty</li><li>Ikony zobrazení seznamu obsahu (zobrazení podrobností, zobrazení zásobníku, zobrazení filmového pásu)</li></ul><br>Tato barva se nepoužije pro oddělovače sekcí webového klienta. Chcete-li změnit barvu oddělovačů, musíte vytvořit modul plug-in, který poskytuje vlastní soubor CSS.",
		admin_theme_color_global_toolbar: "Barva globálního panelu nástrojů:",
		admin_theme_color_global_toolbar_hover: "Zahrnete-li globální panel nástrojů do webového klienta, vyberte barvu panelu nástrojů.<br><br><b>Tip:</b> Panel nástrojů se zobrazí v pruhu nápisu v horní části webového klienta, takže barva panelu nástrojů by měla doplňovat barvu pruhu nápisu.",
		admin_theme_global_selected_color: "Barva vybrané položky:",
		admin_theme_global_selected_color_hover: "Vyberte barvu, která má být použita pro vybrané položky ve stromu s možností procházení, stromu hledání a seznamu obsahu.<br><br>Barva při ponechání ukazatele myši nad položkou je z této barvy odvozena.",
		admin_theme_global_link_color: "Barva odkazu:",
		admin_theme_global_link_color_hover: "Vyberte barvu, která má být použita pro všechny adresy URL s možností klepnutí ve webovém klientovi. Tato barva se například používá pro odkazy „Další informace“, které se zobrazují v celém webovém klientovi.",
		admin_theme_login_title_heading: "Prvky přihlašovací stránky",
		admin_theme_page_background_label: "Barva pozadí přihlašovací stránky:",
		admin_theme_login_page_background_hover: "Vyberte barvu, která se zobrazí za přihlašovacím podoknem.",
		admin_theme_login_pane_background_label: "Barva pozadí přihlašovacího podokna:",
		admin_theme_login_pane_background_hover: "Vyberte barvu, která se zobrazí pro přihlašovací podokno. Barva by měla doplňovat barvu pozadí přihlašovací stránky.",
		admin_theme_text_color: "Barva textu:",
		admin_theme_login_pane_text_color_hover: "Vyberte barvu, která se použije pro text přihlašovacího podokna. Tato barva se použije pro text uvítání a popisky polí. Barva by měla být čitelná proti barvě pozadí přihlašovací stránky.",
		admin_theme_copyright_text: "Text copyrightu:",
		admin_theme_copyright_text_hover: "Určete, zda chcete na přihlašovací stránce zobrazit text copyrightu.",
		admin_theme_copyright_selection_IBM: "Copyright IBM",
		admin_theme_copyright_selection_none: "Žádný text copyrightu",
		admin_theme_banner_title_heading: "Prvky pruhu nápisu",
		admin_theme_text_icons_color: "Barva textu a ikon:",
		admin_theme_icon_color_label: "Barva ikon:",
		admin_theme_shadow_label: "Stín:",
		admin_theme_banner_text_icons_hover: "Vyberte barvu, která se použije pro text a ikony v pruhu nápisu. Barva by měla být čitelná proti barvě pozadí pruhu nápisu.",
		admin_theme_banner_product_name_label: "Název produktu:",
		admin_theme_banner_product_name_hover: "Při vytváření pracovní plochy můžete určit vlastní název, který se pro aplikaci zobrazí. Pokud nezadáte vlastní název, jako název produktu se použije IBM Content Navigator. Určete, zda chcete použít název aplikace, který je definován v pracovní ploše, nebo obrázek místo názvu.",
		admin_theme_banner_product_name_desktop_defined_label: "Použít název z pracovní plochy",
		admin_theme_banner_product_name_image: "Použít vlastní logo (adresa URL)",
		admin_theme_background_color_label: "Barva pozadí:",
		admin_theme_style_label: "Styl:",
		admin_theme_banner_color_hover: "Vyberte barvu, která má být použita pro pruh nápisu v horní části aplikace.<br><br><b>Rada:</b> Ověřte čitelnost barvy textu v pruhu nápisu na barvě pozadí pruhu nápisu.",
		admin_theme_buttons_title_heading: "Tlačítka",
		admin_theme_navigation_title_heading: "Navigační prvky",
		admin_theme_navigation_icon_selected_label: "Vybraná barva ikon:",
		admin_theme_navigation_background_hover: "Vyberte barvu, která má být použita pro pozadí navigačního panelu funkcí.",
		admin_theme_navigation_icon_color_hover: "Vyberte barvu, která má být použita pro ikony navigačního panelu funkcí. Pokud používáte pro pracovní plochu výchozí rozvržení, tato barva by měla kontrastovat s pozadím rozbalovací nabídky funkcí. Pokud používáte pro pracovní plochu klasické rozvržení, tato barva by měla kontrastovat s pozadím navigačního panelu funkcí.",
		admin_theme_navigation_icon_selected_hover: "Vyberte barvu, která má být použita pro vybranou funkci v navigačním panelu funkcí. Barva by měla doplňovat barvu ikon a pozadí navigačního panelu funkcí.<br><br>Pokud používáte pro pracovní plochu klasické rozvržení, tato barva se použije jako barva ponechání ukazatele myši v navigačním panelu funkcí.",
		admin_theme_button_background_color_hover: "Vyberte barvu, která má být použita pro pozadí tlačítek.",
		admin_theme_button_style_hover: "Vyberte styl tlačítka.",
		admin_theme_button_text_icon_color_hover: "Vyberte barvu, která má být použita pro text a obrázky na tlačítkách.",
		admin_theme_no_logo_label: "Žádné logo",
		admin_theme_custom_logo_label: "Vlastní logo (adresa URL)",
		admin_theme_banner_type: "Styl výplně pruhu nápisu:",
		admin_theme_banner_type_hover: "Určete, zda má být pro pruh nápisu použita plná barva, nebo barevný přechod. Určíte-li přechod, bude barva určená jako barva pruhu nápisu použita jako nejtmavší barva v pruhu nápisu.<br><br><b>Rada:</b> Ověřte čitelnost barvy textu v pruhu nápisu na barvě pozadí pruhu nápisu.",
		admin_theme_icon: "Ikona Motiv",
		admin_theme_buttons_and_links_title_heading: "Tlačítka, pole a odkazy",
		admin_theme_button_style_label: "Styl tlačítka:",
		admin_theme_theme_style_label: "Styl motivu:",
		admin_theme_theme_style_hover: "Vyberte styl, na kterém chcete motiv založit. Styl můžete kdykoli během vytváření nebo úpravy motivu změnit. Při změně stylu se nastavení motivu obnoví na výchozí hodnoty.",
		admin_theme_accent_color_label: "Barva zvýraznění:",
		admin_theme_accent_color_hover: "Vyberte barvu, která má být použita pro panel v horní části dialogového okna a animaci načítání.",
		admin_theme_global_toolbar_text_color_label: "Barva textu globálního panelu nástrojů:",
		admin_theme_global_toolbar_text_color_hover: "Zahrnete-li globální panel nástrojů do webového klienta, vyberte barvu používanou pro text na panelu nástrojů.",
		admin_theme_banner_text_color_hover: "Vyberte barvu, která se použije pro text v pruhu nápisu.",
		admin_theme_banner_icon_color_hover: "Vyberte barvu, která se použije pro ikony v pruhu nápisu.",
		admin_theme_button_color_label: "Barva:",
		admin_theme_button_color_hover: "Vyberte barvu, která má být použita pro následující prvky:<ul><li>Pruh titulku v dialogových oknech</li><li>Barva zvýraznění v horní části vybrané karty</li><li>Ikony zobrazení seznamu obsahu (zobrazení podrobností, zobrazení zásobníku, zobrazení filmového pásu)</li><li>Tlačítka, pole a odkazy</li></ul>Barva při ponechání ukazatele myši nad položkou je z této barvy odvozena. Tato barva se nepoužije pro oddělovače sekcí webového klienta. Chcete-li změnit barvu oddělovačů, musíte vytvořit modul plug-in, který poskytuje vlastní soubor CSS.",
		admin_theme_theme_style_col_header: "Styl motivu",

		admin_syncserver_consistency_checker: "Kontrola konzistence:",
		admin_syncserver_consistency_checker_hover: "Spusťte kontrolu konzistence, aby bylo zajištěno, že databáze služeb synchronizace mají aktuální informace o stavu jednotlivých položek, které jsou umístěny na serveru. Můžete například spustit kontrolu konzistence po výpadku databáze služeb synchronizace a získat informace o dokumentech, které byly aktualizovány v úložišti během výpadku.",
		admin_syncserver_consistency_checker_button: "Spustit kontrolu konzistence",
		admin_syncserver_consistency_checker_started: "Zahájeno:",
		admin_syncserver_consistency_checker_ended: "Ukončeno:",
		admin_syncserver_consistency_checker_duration: "Doba trvání:",
		admin_syncserver_consistency_checker_items_processed: "Zpracované položky synchronizace:",
		admin_syncserver_consistency_checker_items_processed_success: "Úspěšně zpracované položky synchronizace:",
		admin_syncserver_consistency_checker_items_discovered: "Nově zjištěné položky úložiště:",
		admin_syncserver_consistency_checker_change_updates: "Celkový počet aktualizací:",
		admin_syncserver_consistency_checker_state: "Stav:",
		admin_syncserver_consistency_checker_state_done: "Hotovo",
		admin_syncserver_consistency_checker_state_running: "Spuštěno",
		admin_syncserver_consistency_checker_user: "Odeslal:",
		admin_syncserver_consistency_checker_scheduled: "Naplánováno:",

		admin_syncserver_dbcleanup: "Vyčištění databáze",
		admin_syncserver_dbcleanup_hover: "Spusťte nástroj pro vyčištění databáze a odeberte veškerá nepoužívaná zařízení a položky, které již nejsou synchronizovány s databází.",
		admin_syncserver_dbcleanup_button: "Vyčištění databáze",
		admin_syncserver_dbcleanup_state_done: "Hotovo",
		admin_syncserver_dbcleanup_state_running: "Spuštěno",
		admin_syncserver_dbcleanup_started: "Zahájeno:",
		admin_syncserver_dbcleanup_ended: "Ukončeno:",
		admin_syncserver_dbcleanup_state: "Stav:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Počet odstraněných úložišť:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Počet odstraněných synchronizovaných položek:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Počet odstraněných zařízení:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Počet zařízení, jejichž platnost vypršela:",

		admin_syncserver_publicSyncUrl: "Veřejná adresa URL služeb synchronizace:",
		admin_syncserver_publicSyncUrl_hover: "Určete adresu URL, jejímž prostřednictvím mohou úložiště komunikovat se synchronizačními službami produktu IBM Content Navigator. Výchozí formát adresy URL je http://veřejná_adresa_URL_synchronizace:číslo_portu/sync/notify.",

		admin_syncserver_managed: "Nastavení klienta synchronizace:",
		admin_syncserver_managed_hover: "Uživatelé nemohou změnit tato nastavení v klientu IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Úrovně složek k synchronizaci",
		admin_syncserver_managed_subfolder_hover: "Pokud uživatel synchronizuje složku, určete maximální počet složek, jež budou synchronizovány. Pokud například uživatel určí tři úrovně složek, bude synchronizována složka určená uživatelem a dvě úrovně podsložek.<br><br>Ověřte, že je prostředí škálováno tak, aby podporovalo množství provozu vzniklého v důsledku použití tohoto nastavení.",
		admin_syncserver_managed_subfolder_all: "Všechny podsložky",
		admin_syncserver_managed_subfolder_none: "Bez podsložek",
		admin_syncserver_managed_subfolder_no_more: "Omezené úrovně",
		admin_syncserver_managed_subfolder_levels: "složky",
		admin_syncserver_managed_schedule: "Časový plán synchronizace",
		admin_syncserver_managed_schedule_hover: "Ověřte, že je prostředí škálováno tak, aby podporovalo množství provozu vzniklého v důsledku použití časového plánu synchronizace.<br><br>Maximální interval je 24 hodin (1440 minut).<br><br>Uživatelé mohou časový plán synchronizace potlačit klepnutím na volbu <b>Synchronizovat nyní</b> v klientu.",
		admin_syncserver_managed_schedule_manual: "Synchronizovat ručně",
		admin_syncserver_managed_schedule_continuous: "Synchronizovat průběžně",
		admin_syncserver_managed_schedule_every: "Synchronizovat v určených intervalech",
		admin_syncserver_managed_schedule_minutes: "Minuty",
		admin_syncserver_managed_schedule_hours: "Hodiny",

		// redaction codes
		admin_new_reason_code: "Nový důvod redakce",		
		admin_reason_code_name_invalid: "Název důvodu redakce nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Popis nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Popis nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Název nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Popis:",
		admin_reason_code_applications_hover: "Seznam aplikací produktu Datacap odkazujících na tento důvod redakce.",
		admin_reason_code_applications: "Aplikace produktu Datacap",
		admin_delete_confirmation_reason_codes: "Chcete odstranit vybrané důvody redakce?",
		admin_delete_confirmation_reason_code: "Chcete odstranit vybraný důvod redakce?",
		admin_reason_code_heading: "Důvod redakce: <b>${0}</b>",
		admin_reason_code_list_instructions: "Důvody redakce informují o tom, proč jsou citlivá data chráněna tím, že jsou pro zobrazení skryta. Každý důvod označuje typ citlivých dat, která jsou obecným uživatelům skryta.",
		admin_reason_code_instructions: "Pro každý typ citlivých dat můžete vytvořit důvod redakce. Poté můžete tento důvod redakce použít v zásadách redakce k definování uživatelů, kteří mohou příslušná data zobrazit a kteří mohou vytvářet nebo upravovat redakce.",
		admin_reason_code_applications_label: "Aplikace produktu Datacap",
		admin_reason_code_repositories: "Úložiště",
		admin_reason_code_repositories_label: "Úložiště",
		admin_reason_code_repositories_hover: "Seznam úložišť produktu ICN, která odkazují na tento důvod redakce.",
		admin_reason_code_repositories_default_value: "Nenastaveno",
		admin_reason_code_description_label: "Popis",
		admin_reason_code_applications_default_value: "Nenastaveno",
		admin_redaction_reasons: "Důvody redakce",
		admin_redactions: "Redakce založené na rolích",
		admin_redactions_policies_roles: "Zásady a role",
		admin_reasons: "Důvody",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID nelze upravovat. Lze je zkopírovat do schránky.",
		// Role based administration
		admin_rba: "Administrace pracovních ploch na základě rolí",
		admin_rba_mobile_access_enabled: "Tato pracovní plocha je povolena pro mobilní přístup.",
		admin_rba_mobile_access_disabled: "Tato pracovní plocha není povolena pro mobilní přístup.",
		admin_rba_confirm_delete_multiple: "Chcete odstranit vybrané role pro administraci?",
		admin_rba_confirm_delete_single: "Chcete odstranit vybranou roli pro administraci?",
		admin_rba_delete_multi_role_desktop: "Jedna nebo několik vybraných rolí je přiřazeno pracovní ploše. Před jejich odstraněním je třeba role z pracovních ploch odebrat.",
		admin_rba_delete_single_role_desktop: "Vybraná role je přiřazena pracovní ploše ${0}. Před jejím odstraněním je třeba roli z pracovní plochy odebrat.",
		admin_desktop: "Pracovní plocha",
		admin_rba_instructions: "Můžete vytvářet a spravovat role administrace pracovních ploch, které mají přiřazená oprávnění udělená administrátorům pracovních ploch.",
		admin_rba_not_used: "${0} se nepoužívá pro žádnou pracovní plochu.",
		admin_rba_desktops: "<b>${0} se používá pro následující pracovní plochy:</b>",
		admin_rba_new_role: "Nová role",
		admin_rba_name_invalid: "Název role pro administraci nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Popis nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Popis nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Název nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Popis:</b> ${0}",
		admin_rba_membership: "Členství",
		admin_rba_general_priv: "Obecné",
		admin_rba_appearance_priv: "Vzhled",
		admin_rba_desktop_config_priv: "Konfigurace pracovní plochy",
		admin_rba_app_name_priv: "Název aplikace",
		admin_rba_theme_priv: "Motiv",
		admin_rba_viewer_map_priv: "Mapa prohlížečů",
		admin_rba_merge_split_priv: "Sloučit a rozdělit",
		admin_rba_sync_svc_priv: "Služby synchronizace",
		admin_rba_menus_priv: "Nabídky",
		admin_rba_edit_svc_priv: "Služby úprav",
		admin_rba_toolbars_priv: "Panely nástrojů",
		admin_rba_ctx_menus_priv: "Kontextové nabídky",
		admin_rba_office_ribbon_priv: "Příkazy pásu karet MS Office",
		admin_rba_office_menues_priv: "Kontextové nabídky MS Office",
		admin_rba_addl_settings_priv: "Další nastavení",
		admin_rba_mobile_priv: "Mobilní zařízení",
		admin_rba_add_doc_dlg_priv: "Dialogové okno přidání dokumentu",
		admin_rba_doc_mgmt_priv: "Správa dokumentů",
		admin_rba_def_redaction_priv: "Výchozí volba redakce",
		admin_rba_add_photos_priv: "Přidat fotografie z fotoaparátu a knihovny fotografií",
		admin_rba_time_stamp_priv: "Časové razítko",
		admin_rba_add_docs_folders_priv: "Přidat dokumenty do úložiště a vytvořit složky",
		admin_rba_open_docs_priv: "Otvírat dokumenty v jiných aplikacích",
		admin_rba_office_config_priv: "Konfigurace produktu Office",
		admin_rba_tab_label_priv: "Popisek karty systému IBM ECM",
		admin_rba_feature_sel_priv: "Výběr funkce",
		admin_rba_general_config_priv: "Obecná konfigurace",
		admin_rba_favorites_priv: "Oblíbené položky",
		admin_rba_add_options_priv: "Volby přidání ve skupině Upravit",
		admin_rba_browse_priv: "Procházet",
		admin_rba_outlook_int_priv: "Integrace s produktem Outlook",
		admin_rba_search_priv: "Vyhledat",
		admin_rba_layout_priv: "Rozvržení",
		admin_rba_case_priv: "Případ",
		admin_rba_desktop_feat_priv: "Funkce pracovní plochy",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Zobrazené funkce",
		admin_rba_branding_priv: "Branding",
		admin_rba_home_priv: "Domovské umístění",
		admin_rba_main_color_priv: "Hlavní barva",
		admin_rba_sec_color_priv: "Sekundární barva",
		admin_rba_teamspaces_priv: "Týmové prostory",
		admin_rba_rbr_priv: "Redakce založená na rolích",
		admin_rba_et_mgr_priv: "Správce šablon položek",
		admin_rba_policies_roles_priv: "Správa zásad a rolí",
		admin_rba_work_priv: "Práce",
		admin_rba_reasons_priv: "Kódy příčiny",
		admin_rba_tasks_priv: "Asynchronní úlohy",
		admin_rba_auth_priv: "Ověřování:",
		admin_rba_all_privs: "Všechna oprávnění",
		admin_rba_some_privs: "Některá oprávnění",
		admin_rba_no_privs: "Žádná oprávnění",
		admin_add_users_groups_priv: "Přidat uživatele a skupiny",
		admin_url_features_priv: "Spravovat funkce adres URL",
		admin_plugin_features_priv: "Spravovat funkce modulů plug-in",
		admin_addl_components_priv: "Další komponenty",
		admin_global_toolbar_priv: "Globální panel nástrojů",
		admin_status_bar_priv: "Stavový panel",
		admin_refresh_message: "Chcete-li používat aktualizovaná data, je třeba aktualizovat obsah v prohlížeči.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Chcete-li používat aktualizovanou výchozí pracovní plochu, je třeba aktualizovat obsah v prohlížeči.",
		admin_desktop_refresh_message: "Chcete-li používat aktualizovanou pracovní plochu, je třeba aktualizovat obsah v prohlížeči.",
		admin_action_open: "Otevřít",
		admin_action_edit: "Upravit",
		admin_action_copy: "Kopírovat",
		admin_action_delete: "Odstranit",
		admin_action_copy: "Kopírovat",
		admin_action_new: "Vytvořit novou položku",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Toto ID je již používáno. Je třeba určit jedinečné ID.",

		admin_searchable_properties_for: "Vlastnosti hledání pro:",
		admin_repository_new: "Nové úložiště",
		admin_desktop_new: "Nová pracovní plocha",
		admin_desktop_file_documents: "Vyžadovat, aby uživatelé ukládali nové dokumenty a složky do složky",
		admin_desktop_file_documents_hover: "Tuto volbu vyberte, chcete-li, aby byl po uživatelích při přidávání položek do úložiště požadován výběr složky. Pokud tuto volbu nevyberete, budou uživatelé moci přidávat dokumenty (IBM FileNet P8) nebo dokumenty a složky (IBM Content Manager), aniž by je zařadili do složky.",
		admin_desktop_show_security_tab: "Zobrazovat nastavení zabezpečení během akcí přidávání a vracení",
		admin_desktop_show_security_hover: "<b>Pouze pro uživatele produktu IBM FileNet P8.</b>  <b>Pouze uživatelé produktu IBM FileNet P8.</b> Tuto volbu vyberte, chcete-li uživatelům povolit úpravy zabezpečení dokumentů a složek při přidávání nebo vracení položek na tuto pracovní plochu.",
		admin_desktop_configure_security_inheritance: "Povolit uživatelům konfigurovat dědičnost zabezpečení složek",
		admin_desktop_configure_security_inheritance_hover: "<b>Pouze pro uživatele produktu IBM FileNet P8.</b>  Tuto volbu vyberte, chcete-li, aby uživatelé mohli upravovat přístup k položkám ve složce prostřednictvím dědičnosti zabezpečení složek. Vyberete-li tuto volbu, uživatelé budou moci určit, zda uživatelé či skupiny mohou dědit zabezpečení:<ul><li>ze složky,</li><li>ze složky a jejích přímých podsložek,</li><li>ze složky a všech jejích podsložek.</li></ul>",
		admin_desktop_appearance: "Vzhled",
		admin_desktop_appearance_instruction: "Můžete upravit vzhled pracovní plochy změnou přihlašovací stránky a pruhu nápisu, které jsou zobrazeny pro pracovní plochy.",
		admin_desktop_layout: "Rozvržení:",
		admin_desktop_layout_hover: "Rozvržení určuje funkce, které lze zobrazit ve webovém klientu, a způsob uspořádání obsahu webového klienta.<br><br><b>Rada:</b> Můžete definovat vlastní rozvržení vytvořením modulů plug-in. Před výběrem vlastního rozvržení je třeba modul plug-in registrovat v nástroji pro administraci.",
		admin_desktop_layout_default: "Výchozí",
		admin_desktop_layout_custom: "Vlastní",
		admin_desktop_enable_workflow_email: "Povolit pro tuto pracovní plochu e-mailová oznámení o sledu prací produktu FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Pouze uživatelé produktu FileNet P8. Tuto volbu vyberte, chcete-li uživatelům povolit otevírání webového klienta z adres URL, které jsou obsažené v e-mailových oznámeních generovaných modulem Process Engine.<br /><br />Pokud tuto volbu nepovolíte pro žádné pracovní plochy, uživatelé se nebudou moci z adres URL z oznámení přihlásit k webovému klientovi.<br /><br />Pokud tuto volbu povolíte na více pracovních plochách a pokud kritéria určená v adrese URL v oznámení splňuje více než jedna pracovní plocha, webový klient použije první pracovní plochu, která splňuje kritéria. ",
		admin_desktop_prevent_create_new_search: "Zabránit uživatelům ve vytváření vyhledávání",
		admin_desktop_prevent_create_new_search_hover: "Tato volba dovolí uživatelům používat pouze existující vyhledávání a zabrání jim vytvářet vyhledávání s otevřeným koncem, která není možné optimalizovat.</br></br>Toto nastavení nemá vliv na týmové prostory. Oprávnění k vytváření hledání v týmovém prostoru je řízeno rolí, kterou uživatel má v daném týmovém prostoru.",
		admin_desktop_prevent_create_new_unified_search: "Zabránit uživatelům ve vytváření vyhledávání ve více úložištích",
		admin_desktop_prevent_create_new_unified_search_hover: "Tato volba dovolí uživatelům používat pouze existující vyhledávání ve více úložištích a zabrání jim vytvářet vyhledávání ve více úložištích s otevřeným koncem, která není možné optimalizovat.",
		admin_desktop_hide_entry_template_not_found_warning: "Skrýt zobrazené varování, pokud nebyla nalezena přidružená šablona položky",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Tuto volbu vyberte, pokud chcete skrýt varovnou zprávu, která se zobrazí, když jsou upraveny vlastnosti položky a šablona položky přidružená k položce nebyla nalezena.",
		admin_desktop_show_class_role_security_selection: "Povolit uživatelům konfigurovat zabezpečení založené na rolích v šablonách položky",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Pouze pro uživatele produktu IBM FileNet P8.</b> Tuto volbu vyberte, chcete-li, aby uživatelé konfigurovali šablony položky, aby používaly zabezpečení založené na rolích při nastavování bezpečnost dokumentů a složek pomocí šablon položky. Pokud tuto volbu vyberte, editoři šablon položky mohou určit, zda se na definici šablony položky použijí objekty zabezpečení rolí.",
		admin_desktop_show_primary_multi_part: "Otevřít pouze primární dokument v prohlížeči",
		admin_desktop_show_primary_multi_part_hover: "<b>Pouze pro uživatele produktu IBM FileNet P8.</b> Tuto volbu vyberte, pokud pouze chcete v prohlížeči otevřít primární soubor dokumentu. Dokumenty mohou mít v sobě přidruženo více souborů. Tato volba otevře pouze primární soubor přidružený dokumentu.",
		admin_desktop_redaction_save_mode: "Výchozí volba redakce:",
		admin_desktop_redaction_save_mode_hover: "Vyberte výchozí režim ukládání redakce prohlížeče ViewONE Virtual:</br>* Vždy požádat uživatele o volbu: Při přechodu do režimu redakce se zobrazí dialogové okno s dotazem, zda uživatel chce vrátit novou verzi, vytvořit nový dokument nebo stáhnout obsah.</br>* Vrátit jako novou verzi: Upravený obsah bude vždy uložen zpět jako nová verze existujícího dokumentu.</br>* Uložit jako zcela nový dokument: Upravený obsah bude vždy uložen jako zcela nový dokument.</br>* Stáhnout a uložit v klientu: Upravený obsah bude stažen do klientského systému.",
		admin_desktop_redaction_save_mode_user_select: "Vždy požádat uživatele o volbu",
		admin_desktop_redaction_save_mode_new_version: "Vrátit jako novou verzi",
		admin_desktop_redaction_save_mode_new_document: "Uložit jako zcela nový dokument",
		admin_desktop_redaction_save_mode_local_content: "Stáhnout a uložit v klientu",

		admin_desktop_document_add_mode: "Dialogové okno Přidat dokument:",
		admin_desktop_document_add_mode_hover: "Určete dialogové okno pro přidávání, které se používá při přidávání dokumentů vytvořených produktem IBM Content Navigator:<ul><li>Nový trvale redigovaný dokument</li><li>Nový sloučený a rozdělený dokument</li><li>Nový dokument sady Microsoft Office</li><li>Nový dokument služby úprav</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Přidat dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Přidat dokument s použitím šablony položky",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Sloučit a rozdělit:",
		admin_desktop_merge_and_split_enable_hover: "Určete, zda uživatelé, kteří přistupují k této pracovní ploše, mají mít možnost sloučit a rozdělit dokumenty pomocí podporujících prohlížečů.",

		admin_desktop_merge_and_split_show_checkin: "Zobrazit výzvu k zadání hodnot vlastností při vracení změn do dokumentu",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Vyberete-li tuto volbu, zobrazí se dialogové okno vrácení, když uživatelé vracejí změny do dokumentu v režimu sloučení a rozdělení.",

		admin_desktop_available_categories: "Dostupné funkce",
		admin_desktop_selected_categories: "Vybrané funkce",

		admin_layout_banner_title: "Pruh nápisu a přihlašovací stránka",
		admin_layout_title: "Rozvržení",

		admin_desktop_application_name: "Název aplikace:",
		admin_desktop_application_name_hover: "Určete název aplikace, který má být zobrazen jako nadpis.<br><br>Rada: Pro jiné jazyky lze název aplikace definovat na kartě Popisky / Popisky pracovní plochy.",
		admin_desktop_theme: "Motiv:",
		admin_desktop_theme_hover: "Určete, zda má být použito výchozí nastavení produktu IBM Content Navigator, nebo vlastní motiv pro tuto pracovní plochu. Chcete-li použít vlastní motiv, musíte vytvořit motiv v části <b>Motivy</b> nástroje pro administraci.",
		admin_desktop_login_logo: "Logo přihlašovací stránky:",
		admin_desktop_login_logo_hover: "Chcete-li změnit logo zobrazené na přihlašovací stránce, můžete určit adresu URL souboru loga. Doporučuje se nicméně změnit logo pomocí vlastního motivu.",
		admin_desktop_login_logo_url_hover: "Zadejte adresu URL souboru loga. Pokud se logo nachází na stejném webovém aplikačním serveru jako webový klient, zadejte relativní adresu URL. Příklad: /mycustomizations/login_logo.png.<br><br>Logo by nemělo být větší než 200 pixelů na šířku a 150 pixelů na výšku.<br><br>Doporučuje se použít logo s průhledným pozadím.",
		admin_desktop_banner_logo: "Logo pruhu nápisu:",
		admin_desktop_banner_logo_hover: "Chcete-li změnit logo zobrazené v pruhu nápisu, můžete určit adresu URL souboru loga. Doporučuje se nicméně změnit logo pomocí vlastního motivu.",
		admin_desktop_banner_logo_url_hover: "Zadejte adresu URL souboru loga. Pokud se logo nachází na stejném webovém aplikačním serveru jako webový klient, zadejte relativní adresu URL. Příklad: /mycustomizations/banner_logo.png.<br><br>Logo by nemělo být větší než 72 pixelů na šířku a 36 pixelů na výšku.<br><br>Doporučuje se použít logo s průhledným pozadím.",
		admin_desktop_banner_background_color: "Barva pozadí pruhu nápisu:",
		admin_desktop_banner_background_color_hover: "Chcete-li změnit barvu pozadí v pruhu nápisu, můžete určit vlastní barvu. Doporučuje se nicméně změnit barvu pruhu nápisu pomocí vlastního motivu.",
		admin_desktop_banner_background_color_custom_hover: "Zadejte barvu pruhu nápisu aplikace jako šestnáctkové číslo.",
		admin_desktop_banner_application_name_color: "Barva textu názvu aplikace:",
		admin_desktop_banner_application_name_color_hover: "Chcete-li změnit barvu názvu aplikace, můžete určit vlastní barvu. Doporučuje se nicméně změnit barvu názvu aplikace pomocí vlastního motivu.",
		admin_desktop_banner_application_name_color_custom_hover: "Zadejte barvu názvu aplikace jako šestnáctkové číslo.",
		admin_desktop_banner_menu_color: "Barva ikon v pruhu nápisu:",
		admin_desktop_banner_menu_color_hover: "Změníte-li barvu pozadí pruhu nápisu, může být nutné změnit barevné schéma ikon v pruhu nápisu, aby byly lépe vidět. Určete, zda chcete zobrazovat světlou nebo tmavou verzi ikon v pruhu nápisu.<br><br>Doporučuje se nicméně změnit barvu ikon pomocí vlastního motivu.",
		admin_desktop_login_page_content: "Obsah přihlašovací stránky:",
		admin_desktop_login_page_content_hover: "Chcete-li na přihlašovací stránce zobrazit další informace, například oznámení o výpadcích systému nebo o způsobu získání nápovědy a jménech uživatele a heslech, můžete zadat adresu URL obsahu, který chcete zobrazit.",
		admin_desktop_login_page_content_url_hover: "Zadejte adresu URL obsahu přihlašovací stránky. Pokud se obsah nachází na stejném webovém aplikačním serveru jako webový klient, zadejte relativní adresu URL. Příklad: /mycustomizations/login_notices.html.",
		admin_desktop_password_rules: "Pravidla pro hesla:",
		admin_desktop_password_rules_hover: "Chcete-li uživatelům poskytnout pokyny pro vytváření hesel, například zakázané znaky nebo minimální počet znaků, můžete zadat adresu URL stránky, která tato pravidla pro hesla obsahuje.",
		admin_desktop_password_rules_url_hover: "Zadejte adresu URL obsahu s pravidly pro hesla. Pokud se obsah nachází na stejném webovém aplikačním serveru jako webový klient, zadejte relativní adresu URL. Příklad: /mycustomizations/passwords.html.",
		admin_desktop_help_url: "Adresa URL nápovědy pro koncové uživatele:",
		admin_desktop_help_url_hover: "Můžete používat nápovědu dodávanou s produktem IBM Content Navigator nebo můžete uživatele přesměrovat na vlastní obsah nápovědy provedením jedné z následujících akcí:<br><br><ul><li>Přesměrování na vlastní systém nápovědy</li><li>Přidání nápovědy do instance produktu IBM Knowledge Center implementované spolu s produktem IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Zadejte adresu URL vlastního systému nápovědy. Produkt IBM Content připojí na konec zadané adresy URL řetězec index.jsp?content=/com.ibm.usingeuc.doc/ a název souboru. Odkazy \"Další informace\" v rámci rozhraní budou funkční pouze v případě, že systém nápovědy používá stejné názvy souborů jako integrovaná nápověda pro koncové uživatele. ",
		admin_desktop_deprecated_appearance_title: "Zamítnutá nastavení",
		admin_desktop_deprecated_appearance_instructions: "Pokud použijete vlastní motiv, tato nastavení se přepíší vlastním motivem. Je třeba migrovat tato nastavení do vlastního motivu, který poskytuje podrobnější možnosti stylů než nastavení v tomto oddíle. Vlastní motiv lze navíc použít pro více pracovních ploch.",

		admin_desktop_plugins_title: "Pro tuto pracovní plochu můžete povolit nebo zakázat moduly plug-in.",
		admin_desktop_plugins_enable_all_plugins: "Povolit pro používání s touto pracovní plochou všechny implementované moduly plug-in",
		admin_desktop_plugins_select_plugins: "Vybrat pro používání s touto pracovní plochou implementované moduly plug-in",
		admin_desktop_plugins_select_plugin: "Vybrat modul plug-in",

		admin_desktop_layout_features: "Zobrazené funkce:",
		admin_desktop_layout_features_hover: "Vyberte funkce, ke kterým mají mít uživatelé přístup z této pracovní plochy. Funkce jsou zobrazeny v pořadí, v jakém jsou uvedeny.<br><br>Po výběru funkce lze přizpůsobit chování funkce v rámci pracovní plochy, jako je například výchozí úložiště, které bude vybráno pro funkci.",
		admin_desktop_layout_default_repository: "Výchozí úložiště:",
		admin_desktop_layout_default_repository_layout_hover: "Určete, které úložiště bude standardně vybráno, když uživatelé otevřou tuto funkci.",
		admin_desktop_layout_document_thumbnails: "Miniatury dokumentu:",
		admin_desktop_layout_document_thumbnails_hover: "Určete, zda chcete zobrazit miniatury pro dokumenty v podokně Informace o dokumentu.<br><br>Zobrazení miniatur může zpomalit výkon webového klienta.",
		admin_desktop_layout_show_filmstrip_view: "Zobrazení Filmový pás:",
		admin_desktop_layout_show_filmstrip_view_hover: "Určete, zda mají mít uživatelé možnost přepínat zobrazení seznamu obsahu na zobrazení Filmový pás.<br><br>Zobrazení Filmový pás generuje náhled každého dokumentu, který uživatel vybere. Zobrazení Filmový pás však může zpomalit výkon webového klienta. Kromě toho je nutné konfigurovat prohlížeč převodu HTML, aby se zobrazovaly náhledy dokumentů.",
		admin_enabled: "Povolit",
		admin_disabled: "Zakázat",
		admin_include: "Zahrnout",
		admin_exclude: "Vyloučit",
		admin_layout_teamspaces_default_repository: "Týmové prostory:",
		admin_layout_entry_templates_default_repository: "Šablony položek:",
		admin_layout_other_features_default_repository: "Hledání a procházení:",
		admin_layout_work_default_repository: "Práce:",
		admin_layout_default_feature: "Výchozí funkce:",
		admin_default_category_placeholder: "Vybrat funkci",
		admin_layout_default_feature_hover: "Určete, které funkce se zobrazí při přihlášení uživatelů k této pracovní ploše.",
		admin_layout_default_feature_warning: "Změna výchozí funkce může ovlivnit dobu potřebnou k načtení aplikace.",
		admin_layout_feature_list_header: "Funkce",
		admin_layout_show_statusbar: "Stavový panel:",
		admin_layout_show_statusbar_hover: "Určete, zda se má ve spodní části pracovní plochy zobrazit stavový pruh.<br><br>Pokud stavový pruh skryjete, nemohou uživatelé zobrazit informace o nechybových událostech, jako je například:<ul><li>Dokument byl přidán do úložiště.</li><li>Hledání vrátilo 59 dokumentů.</li></ul>",
		admin_layout_show_magazineview: "Zobrazení Zásobník:",
		admin_layout_show_magazineview_hover: "Určete, zda mají mít uživatelé možnost přepínat zobrazení seznamu obsahu na zobrazení zásobníku.<br><br>Zobrazení zásobníku zvyšuje výšku každé položky v seznamu obsahu, což snižuje počet položek, které se mohou zobrazit v seznamu obsahu najednou.",
		admin_layout_show_detailsview: "Zobrazení Podrobnosti:",
		admin_layout_show_detailsview_hover: "Určete, zda mají mít uživatelé možnost přepínat zobrazení seznamu obsahu na zobrazení podrobností.<br><br>V zobrazení Podrobnosti je maximalizován počet řádků zobrazených v seznamu obsahu.",
		admin_feature_config_docinfopane_label: "Podokno informací o dokumentu:",
		admin_feature_config_docinfopane_hoverhelp: "Určete, zda smějí uživatelé přistupovat k podoknu Informace o dokumentu v rámci této funkce.",
		admin_feature_config_docinfopane_default_label: "Výchozí chování:",
		admin_feature_config_docinfopane_expanded: "Rozbaleno",
		admin_feature_config_docinfopane_collapsed: "Sbaleno",
		admin_feature_config_docinfopane_expand_on_select: "Rozbalit při výběru položky",
		admin_layout_features_title: "Funkce pracovní plochy",
		admin_layout_features_instructions: "Určete, ke kterým funkcím mohou uživatelé přistupovat z této pracovní plochy. Dále můžete přizpůsobit chování jednotlivých funkcí, které jsou součástí pracovní plochy.",
		admin_layout_components_title: "Další komponenty pracovní plochy",
		admin_layout_components_instructions: "Můžete zakázat některé komponenty pracovní plochy, pokud chcete přímočařejší rozhraní nebo pokud chcete zvýšit výkon webového klienta.",
		admin_layout_featureconfig_instructions: "Vyberte funkci, která má být konfigurována.",
		admin_layout_featureconfig_no_configuration: "Není k dispozici žádná konfigurace funkce.",
		admin_layout_featureconfig_label: "Konfigurace pro funkci ${0}",
		admin_layout_featureconfig_title: "Konfigurace funkce",
		admin_layout_featureconfig_taskManagerURL: "Chcete-li tuto funkci použít, musíte povolit a konfigurovat produkt IBM Content Navigator, aby se připojoval ke službě správce úloh. Povolte službu správce úloh v části <b>Nastavení</b> tohoto nástroje pro administraci.",
		admin_feature_config_show_my_checkouts_label: "Podokno Moje zápůjčky:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Podokno Moje zápůjčky umožňuje uživatelům spouštět hledání všech položek, které byly zapůjčeny z úložiště. Určete, zda uživatelé budou mít přístup k podoknu Moje zápůjčky z funkce Domovské umístění.<br/><br/><b>Omezení:</b> Tato funkce vyžaduje, aby k této pracovní ploše bylo přidruženo alespoň jedno úložiště produktu IBM Content Manager, IBM FileNet P8 nebo OASIS CMIS.",

		admin_feature_config_default_repository_icon_text: "Výchozí úložiště",
		admin_show: "Zobrazit",
		admin_hide: "Skrýt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Nelze odebrat funkci Správa z pracovní plochy správce.",
		admin_warning_label: "Varování:",
		admin_layout_show_globaltoolbar: "Globální panel nástrojů:",
		admin_layout_show_globaltoolbar_hover: "Určete, zda chcete zobrazit panel nástrojů v pruhu nápisu v horní části okna pracovní plochy.<br><br>Globální panel nástrojů obsahuje akce, které uživatelům umožňují přidávat dokumenty, složky nebo zadržení do úložiště. Dostupné akce závisí na úložišti, ke kterému je uživatel připojen.",
		admin_interface_text_name_label: "Typ štítku",

		admin_interface_text_label_description: "Text zobrazený v určitých oblastech webového klienta je možné upravit. Popisky se zobrazí pro všechna úložiště a pracovní plochy v dané konfiguraci. Do pole Aktuální popisek zadejte text, který se má zobrazit v daném rozhraní.<br><br><b>Důležité:</b> V nástroji pro administraci se nezobrazí žádné změny provedené v popiscích.",
		admin_interface_text_label_action: "Popisky akcí",
		admin_interface_text_label_action_description: "Popisky akcí se zobrazí na tlačítkách a v nabídkách webového klienta. Pro každý typ úložiště můžete definovat jiné popisky akcí.",
		admin_interface_text_label_application: "Popisky aplikací",
		admin_interface_text_label_application_description: "Popisky aplikací se zobrazují v celém webovém klientovi.",
		admin_interface_text_label_system: "Popisky systémových vlastností",
		admin_interface_text_label_system_description: "Zobrazení systémových vlastností závisí na úložišti. Popisky, které se zobrazí pro systémové vlastnosti přidružené k dokumentům a složkám v úložištích, můžete upravit.",
		admin_interface_text_label_desktop: "Popisky pracovní plochy",
		admin_interface_text_label_desktop_description: "Pokud jste upravili název aplikace na pracovní ploše, můžete tento název upravit také v jiných jazycích než v angličtině. Můžete rovněž upravit názvy aplikačních prostorů produktu IBM FileNet P8 na pracovní ploše.",

		admin_interface_text_system_label: "Systémový popisek",
		admin_interface_text_current_label: "Aktuální popisek",
		admin_interface_text_default_label_heading: "Výchozí popisek",
		admin_interface_text_default_label: "Výchozí popisek:",
		admin_interface_text_displayed_in_label: "Zobrazeno pro",
		admin_interface_text_displayed_in_document_folder: "Dokumenty a složky",
		admin_interface_text_displayed_in_document: "Dokumenty",
		admin_interface_text_displayed_in_folder: "Složky",
		admin_interface_text_displayed_in_admin_application_space: "Jmenovka aplikačního prostoru",
		admin_interface_text_displayed_in_desktop: "Jmenovka funkce pro mobil",
		admin_interface_text_displayed_in_admin_application_name: "Název aplikace",

		admin_new_desktop: "Nová pracovní plocha",
		admin_new_repository: "Nové úložiště",
		admin_new_menu: "Nová nabídka",
		admin_new_viewer_mapping: "Nová mapa prohlížečů",
		admin_new_mapping_label: "Nové mapování",
		admin_new_icon_mapping: "Nové mapování ikony",
		admin_viewer_mapping_list_instructions: "Můžete nakonfigurovat, které prohlížeče bude webový klient používat k zobrazení různých typů obsahu. Mapa prohlížečů definuje, které typy MIME jsou přiřazeny jednotlivým používaným prohlížečům. Chcete-li používat různé prohlížeče pro různé pracovní plochy, můžete vytvořit několik map prohlížečů.",
		admin_viewer_mapping_instructions: "Určete prohlížeče, ve kterých chcete otvírat soubory. Chcete-li použít vlastní prohlížeč, musíte jej nejprve integrovat jako modul plug-in a teprve poté jej můžete přidat do mapy prohlížečů.<br><br><b>Důležité:</b> Když uživatel otevře dokument, webový klient prohledá seznam mapování prohlížečů a najde první prohlížeč, který může dokument otevřít, na základě operačního systému, který uživatel používá, a úložiště, ke kterému je připojen. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nový modul plug-in",
		admin_menu_list_instructions: "Můžete vytvořit vlastní panely nástrojů a kontextové nabídky a určit, které akce budou pro uživatele k dispozici. Nelze sice upravovat výchozí nabídky, ale můžete vytvořit kopie stávajících nabídek, ve kterých omezíte seznam dostupných akcí nebo přidáte vlastní akce definované v modulech plug-in.<br><br>Pokud chcete vytvořit nový typ nabídky, musíte nabídku definovat v modulu plug-in.",
		admin_menu_id_hover: "ID musí být jedinečné a po uložení nabídky nemůžete ID změnit.<br><br>ID může obsahovat pouze alfanumerické znaky a rozlišují se velká a malá písmena.",
		admin_menu_id_disabled_hover: "ID nabídky nelze změnit. Chcete-li použít jiné ID, je nutné vytvořit novou nabídku.",
		admin_menu_default_instructions: "Tuto nabídku nemůžete upravovat, protože se jedná o výchozí nabídku. Chcete-li tuto nabídku upravovat, je třeba vytvořit její kopii.",
		admin_menu_toolbar_instructions: "Můžete omezit akce, které jsou k dispozici pro tento panel nástrojů, nebo přidat vlastní akce definované v modulu plug-in. Akce můžete také na panelu nástrojů vizuálně seskupit přidáním oddělovačů.",
		admin_menu_toolbar_custom_instructions: "Tento panel nástrojů je definován modulem plug-in. Chcete-li upravit tento panel nástrojů, je nutné aktualizovat modul plug-in nebo vytvořit kopii panelu nástrojů.",
		admin_menu_context_menu_instructions: "Můžete omezit akce, které jsou k dispozici pro tuto kontextovou nabídku, nebo přidat vlastní akce definované v modulu plug-in. Akce můžete také v kontextové nabídce uspořádat přidáním oddělovačů nebo podnabídek.",
		admin_menu_context_menu_custom_instructions: "Tato kontextová nabídka je definována modulem plug-in. Chcete-li upravit tuto kontextovou nabídku, je nutné aktualizovat modul plug-in nebo vytvořit kopii kontextové nabídky.",
		admin_desktop_list_instructions: "Pokud chcete různým uživatelům poskytnout přístup k potřebnému obsahu, můžete vytvořit několik pracovních ploch. Je například možné vytvořit pracovní plochu, která uživatelům umožní pouze vyhledávat obsah, nebo plochu, která uživatelům zajistí přístup k jedinému úložišti. ",
		admin_plugin_updated: "Konfigurace vybraného modulu plug-in byla změněna. Chcete-li, aby se změny projevily, je třeba aktualizovat zobrazení prohlížeče.",
		admin_repository_ci_heading: "Úložiště produktu Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Úložiště produktu FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Úložiště produktu Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Úložiště produktu Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Úložiště produktu CMIS (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Úložiště produktu Box: <b>${0}</b>",
		admin_repository_generic_heading: "Úložiště: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Chcete odstranit vybrané pracovní plochy?\nPočet vybraných pracovních ploch: ${0}",
		admin_delete_confirmation_menus: "Chcete odstranit vybrané nabídky?\nPočet vybraných nabídek: ${0}",
		admin_delete_confirmation_repositories: "Chcete odstranit vybraná úložiště?\nPočet vybraných úložišť: ${0}",
		admin_delete_confirmation_viewer_mappings: "Chcete odstranit vybrané mapy prohlížečů? Počet vybraných map: ${0}.",
		admin_delete_confirmation_icon_mappings: "Chcete odstranit vybrané konfigurace ikon?\nPočet vybraných konfigurací ikon: ${0}",
		admin_delete_confirmation_plugins: "Chcete odstranit vybrané moduly plug-in?\nPočet vybraných modulů plug-in: ${0}",
		admin_delete_confirmation: "Chcete odstranit vybrané položky?\nPočet vybraných položek: ${0}",

		admin_viewer_mapping_id_hover: "ID musí být jedinečné a po uložení mapy prohlížečů již nelze ID změnit.<br><br>ID může obsahovat pouze alfanumerické znaky a rozlišují se velká a malá písmena.",
		admin_viewer_mapping_id_disabled_hover: "ID mapy prohlížečů nelze změnit. Chcete-li použít jiné ID, musíte vytvořit novou mapu prohlížečů.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Výchozí pracovní plochu nelze odstranit.",

		admin_desktop_heading: "Pracovní plocha: <b>${0}</b>",
		admin_menu_toolbar_heading: "Panel nástrojů: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Vlastní panel nástrojů: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontextová nabídka: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Vlastní kontextová nabídka: <b>${0}</b>",
		admin_plugin_heading: "Modul plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Modul plug-in může být soubor JAR nebo zkompilovaný soubor třídy.<br/><br/><b>Důležité:</b> Webový aplikační server IBM Content Navigator musí mít možnost přístupu k souboru modulu plug-in v lokálním souborovém systému nebo prostřednictvím adresy URL.",
		admin_plugin_list_instructions: "Moduly plug-in pro webového klienta lze registrovat prostřednictvím nástroje pro administraci. Pokud modul plug-in vyžaduje další konfiguraci, budou konfigurační parametry zobrazeny po provedení registrace příslušného modulu plug-in.<br /><br /><b>Důležitá informace:</b> Upravíte-li modul plug-in, odkazovaný v jiné oblasti nástroje pro administraci, například v nabídce, mohou se vyskytnout problémy s chováním příslušného modulu plug-in. Moduly plug-in jsou navíc vyvolávány v pořadí, v jakém jsou uvedeny. Je-li třeba spustit některý modul plug-in dříve než jiný modul plug-in, zajistěte, aby byly uvedeny v pořadí, v jakém mají být spouštěny.",
		admin_plugin_cannot_delete: "Vybrané moduly plug-in nelze odstranit, protože některé moduly plug-in jsou na nich závislé.<br/>Vybrané moduly plug-in: ${0}<br/>Závislé moduly plug-in: ${1}",
		admin_plugin_cannot_disable: "Vybrané moduly plug-in nelze zakázat, protože některé moduly plug-in jsou na nich závislé.<br/>Vybrané moduly plug-in: ${0}<br/>Závislé moduly plug-in: ${1}",
		admin_plugin_cannot_add: "Modul plug-in nelze přidat, protože některé moduly plug-in, na kterých závisí, chybí nebo jsou zakázány. Chybějící nebo zakázané moduly plug-in: ${0}",
		admin_plugin_cannot_enable: "Vybrané moduly plug-in nelze povolit, protože některé moduly plug-in, na kterých závisí, chybí nebo jsou zakázány.<br/>Vybrané moduly plug-in: ${0}<br/>Chybějící nebo zakázané moduly plug-in: ${1}",
		admin_plugin_save_order: "Uložit pořadí",
		admin_plugin_load: "Načíst",
		admin_plugin_load_hover: "Zadejte adresu URL modulu plug-in",
		admin_plugin_file_hover: "Pokud se soubor JAR modulu plug-in nachází v lokálním systému, můžete zadat úplnou cestu nebo adresu URL souboru modulu plug-in. Pokud se soubor JAR modulu plug-in nachází na vzdáleném serveru, můžete zadat adresu URL souboru modulu plug-in.",
		admin_plugin_classfolderpath_hover: "Zkompilovaný soubor třídy musí být uložen na webovém aplikačním serveru IBM Content Navigator.<br/><br/>Zadejte úplnou cestu do složky, kde jsou kompilovány a generovány třídy modulů plug-in.<br/><br/>Cesta nesmí obsahovat název balíku třídy modulu plug-in. Příklad: výchozí cesta pro ukázkovou třídu modulu plug-in v systému Windows je C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Zadejte úplný název třídy Java v souboru třídy, která by měl být načtena a volán jako třída modulu plug-in.<br/>Například název třídy ukázkového modulu plug-in je com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Soubor JAR modulu plug-in nebyl nalezen na zadané adrese URL. Zajistěte, aby byl soubor JAR uložen na webovém aplikačním serveru a adresa URL a název souboru byly správné.",
		admin_plugin_for_repository_not_loaded: "Toto úložiště nelze upravit. Modulu plug-in, který definuje a podporuje tento typ úložiště, nebyl načten. Na kartě Moduly plug-in upravte modul plug-in a zkontrolujte, že je správně zkonfigurován a že je načten.",
		admin_plugin_repository_types: "Typy úložiště:",
		admin_plugin_viewers: "Prohlížeče:",
		admin_plugin_features: "Funkce:",
		admin_plugin_layouts: "Rozvržení:",
		admin_plugin_not_available: "Není k dispozici",
		admin_plugin_config_params: "Konfigurační parametry:",
		admin_viewer_def_heading: "Mapa prohlížečů: <b>${0}</b>",
		admin_users_and_groups: "Uživatelé a skupiny",
		admin_general: "Obecné",
		admin_logging: "Protokolování",
		admin_authentication: "Ověřování:",		
		admin_rolebase_role: "Role:",
		admin_settings_logging_instructions: "Protokolování lze používat k odstraňování problémů s webovým klientem. Pokud víte, že k problémům dochází v konkrétní třídě Java nebo pro určitého uživatele, můžete upravit úroveň podrobností ukládaných do protokolu. Informace o chybách jsou zapisovány do souborů protokolu chyb webového aplikačního serveru.",
		admin_settings_logging_instructions2: "<b>Nastavení protokolování ladění</b><br />Víte-li, že k problému dochází pro konkrétní hostitelský počítač klienta nebo uživatele, můžete protokolování ladění zúžit na příslušný počítač nebo uživatele. V provozním prostředí můžete zaznamenávat ladicí informace bez výraznějšího vlivu na výkon systému.<br /><br /><b>Důležité upozornění:</b> Určením hostitelského počítače klienta nebo uživatele potlačíte veškerá další nastavení protokolování. Po zachycení potřebných informací nastavte pro tuto volbu hodnotu <b>Žádné</b>, aby bylo obnoveno standardní protokolování pro příslušné prostředí.",
		admin_settings_export_config_hover: "Vyexportujte aktuální informace konfigurace systému do souboru pro použití s datovým kolektorem produktu IBM Support Assistant. Tento soubor je uložen do umístění definovaného systémovou vlastností user.home jazyka Java.",
		admin_logging_level: "Protokolování na úrovni aplikace:",
		admin_logging_level_hover: "Úrovně protokolování určují, jaký objem informací se ukládá na serveru. Volbou <b>Chyba</b> budete ukládat nejmenší množství informací protokolování. Pokud vyberete volbu <b>Ladění</b>, zachytíte maximum údajů.<br /><br />V produkčním prostředí volbu <b>Ladění</b> nastavte pouze v případě, že vás o to požádá softwarová podpora společnosti IBM.",
		admin_logging_level_0: "Bez protokolování",
		admin_logging_level_1: "Chyba",
		admin_logging_level_2: "Varování",
		admin_logging_level_3: "Informace",
		admin_logging_level_4: "Ladění",
		admin_logging_classes: "Protokolování na úrovni tříd Java:",
		admin_logging_classes_hover: "Při výchozím nastavení jsou všechny třídy Java a balíky zahrnuty do protokolů chyb webového aplikačního serveru. Můžete však určit, které třídy nebo balíky mají být zahrnuty nebo vyloučeny z protokolování. Můžete použít protokoly chyb webového aplikačního serveru a určit třídy, které chcete zahrnout nebo vyloučit.<br><br>Pokud víte, že k problémům dochází v konkrétní třídě, můžete zahrnout specificky takovou třídy do souborů protokolu. Při zahrnutí třídy do chybových protokolů jsou všechny ostatní třídy vyloučeny ze souboru protokolu.<br><br>Pokud víte, že problém v určité třídě nenastává, a chcete omezit velikost souboru protokolu, můžete takovou třídy vyloučit ze souborů protokolu.",
		admin_logging_classes_include: "Zahrnout",
		admin_logging_classes_include_all: "Všechny třídy",
		admin_logging_classes_include_specified: "Konkrétní třídy",
		admin_logging_classes_include_specified_msg: "Určete třídy, které chcete zahrnout.",
		admin_logging_classes_exclude: "Vyloučit",
		admin_logging_classes_exclude_none: "Žádné",
		admin_logging_classes_exclude_specified: "Konkrétní třídy",
		admin_logging_classes_exclude_specified_msg: "Určete třídy, které chcete vyloučit.",
		admin_logging_debug: "Protokolování ladění pro:",
		admin_logging_debug_hover: "<b>Důležité:</b> Před určením adresy IP hostitelského počítače klienta nebo uživatele zkontrolujte soubory protokolu webového aplikačního serveru. Zadaná hodnota musí odpovídat hodnotě uvedené v souboru protokolu.",
		admin_logging_debug_none: "Žádné (výchozí)",
		admin_logging_debug_host: "Hostitelské počítače klienta (adresy IP)",
		admin_logging_debug_host_msg: "Určete adresu IP jednoho či více klientských počítačů, pro které chcete protokolovat ladicí informace. Adresy IP lze oddělovat čárkami.<br /><br /><b>Důležité upozornění:</b> Před určením adresy IP přezkoumejte soubory protokolu webového aplikačního serveru. Zadaná hodnota musí odpovídat hodnotě uvedené v souboru protokolu.",
		admin_logging_debug_user: "Uživatelé",
		admin_logging_debug_user_msg: "Určete jméno jednoho či více uživatelů, pro které chcete protokolovat ladicí informace. Jména uživatelů lze oddělovat čárkami.<br /><br /><b>Důležité upozornění:</b> Před určením jména uživatele přezkoumejte soubory protokolu webového aplikačního serveru. Zadaná hodnota musí odpovídat hodnotě uvedené v souboru protokolu.",

		admin_office_settings_logging_instructions: "Protokolování lze používat k odstraňování problémů s produktem IBM Content Navigator for Microsoft Office. Pokud víte, že k problémům dochází v konkrétní třídě nebo pro určitého uživatele, můžete upravit úroveň podrobností ukládaných do protokolu. Informace o chybách jsou zapisovány do souborů protokolu aplikace v hostitelských počítačích klienta produktu IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Nastavení protokolování ladění</b><br />Víte-li, že k problému dochází pro konkrétní hostitelský počítač klienta nebo uživatele produktu IBM Content Navigator for Microsoft Office, můžete protokolování ladění zúžit na příslušný počítač nebo uživatele. V provozním prostředí můžete zaznamenávat ladicí informace bez výraznějšího vlivu na výkon systému. <br /><br /><b>Důležité upozornění:</b> Určením hostitelského počítače klienta nebo uživatele potlačíte veškerá další nastavení protokolování. Po zachycení potřebných informací nastavte pro tuto volbu hodnotu <b>Žádné</b>, aby bylo obnoveno standardní protokolování pro příslušné prostředí produktu IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Důležité upozornění:</b> Před určením adresy IP hostitelského počítače klienta nebo uživatele přezkoumejte soubory protokolu klientského počítače. Zadaná hodnota musí odpovídat hodnotě uvedené v souboru protokolu. ",
		admin_office_logging: "Protokolování sady Office",
		admin_office_logging_classes: "Protokolování na úrovni tříd:",
		admin_office_logging_classes_hover: "Při výchozím nastavení jsou všechny třídy a balíky zahrnuty do protokolů chyb produktu IBM Content Navigator for Microsoft Office. Můžete však určit, které třídy nebo balíky mají být zahrnuty nebo vyloučeny z protokolování. Můžete použít protokoly klientského počítače a určit třídy, které chcete zahrnout nebo vyloučit.<br /><br />Pokud víte, že k problémům dochází v konkrétní třídě, můžete zahrnout specificky takovou třídy do souborů protokolu. Při zahrnutí třídy do chybových protokolů jsou všechny ostatní třídy ze souborů protokolu vyloučeny. <br /><br />Pokud víte, že problém v určité třídě nenastává, a chcete omezit velikost souboru protokolu, můžete takovou třídy vyloučit ze souborů protokolu. ",
		admin_office_logging_debug_hover: "<b>Důležité upozornění:</b> Před určením adresy IP hostitelského počítače klienta nebo uživatele přezkoumejte soubory protokolu klientského počítače. Zadaná hodnota musí odpovídat hodnotě uvedené v souboru protokolu.",
		admin_office_logging_additional_settings: "Další nastavení:",
		admin_office_logging_additional_settings_hover: "Určit další nastavení",
		admin_office_logging_file_size: "Velikost souboru protokolu",
		admin_office_logging_file_size_hover: "Určete velikost, při které produkt IBM Content Navigator for Microsoft Office vytvoří nový soubor protokolu. Jakmile soubor protokolu dosáhne maximální velikosti, dojde k přejmenování aktuálního protokolu, přičemž název bude obsahovat datum ve tvaru RRRRMMDD a přírůstkové číslo protokolu (například ICNExcelAddin-20121116-5.log), a vytvoření nového souboru protokolu. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Zobrazit trasování zásobníku v dialogových oknech",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Volitelně můžete zobrazovat informace o trasování zásobníku pro dialogová okna se zprávami a využívat je při odstraňování problémů. Protokoly chyb produktu IBM Content Navigator for Microsoft Office obsahují podrobné informace o trasování zásobníku vždy bez ohledu na to, zda je tato volba povolena. ",

		admin_icon_state_twisty: "Ikony stavu",
		admin_icon_state_icon: "Ikona stavu",
		admin_icon_state: "Stav",
		state_contains_label: "Stav obsahuje",
		admin_icon_state_instructions: "Můžete přizpůsobit ikony zobrazené u dokumentů, složek a pracovních položek v úložištích.<br><br><b>Tip:</b> Můžete se rozhodnout, zda chcete ve svém prostředí zobrazit ikony stavů pro jednotlivá úložiště.",
		admin_icon_state_dialog_title: "Mapování ikon stavu",
		admin_icon_state_dialog_instructions: "Vybraný stav lze mapovat na předdefinovanou ikonu, která je poskytována s webovým klientem, nebo na vlastní ikonu.",

		admin_icon_mapping_twisty: "Ikony typů MIME",
		admin_icon_mapping_dialog_title: "Mapování ikon",
		admin_icon_mapping: "Mapování ikon",
		admin_icon_mapping_instructions: "Seznam typů MIME lze mapovat na předdefinovanou ikonu, která je poskytována s webovým klientem, nebo na vlastní ikonu.",
		admin_icon_mapping_list_instructions: "Můžete přizpůsobit ikony zobrazené pro různé typy MIME, které jsou uloženy v úložišti. Webový klient použije ikony v pořadí, v jakém jsou uvedeny v seznamu. Pokud je typ MIME uveden několikrát, použije se první nalezená ikona, která je přidružena k danému typu MIME.",
		admin_icon_mapping_icon_label: "Jakou ikonu chcete použít?",
		admin_icon_mapping_file_name: "Vlastní ikona:",
		admin_icon_mapping_file_name_heading: "Vlastní ikona",
		admin_icon_mapping_file_name_placeholder: "Zadejte adresu URL ikony",
		admin_icon_mapping_file_name_hover: "Zadejte adresu URL ikony. Pokud se ikona nachází na stejném webovém aplikačním serveru jako webový klient, zadejte relativní adresu URL. Příklad: /mycustomizations/icon_logo.png.",
		admin_icon_mapping_class_name: "Předdefinovaná ikona:",
		admin_icon_mapping_class_name_heading: "Předdefinovaná ikona",
		admin_icon_mapping_class_name_hover: "Vyberte ikonu poskytovanou s webovým klientem.",
		admin_icon_mapping_class_name_placeholder: "Vyberte ikonu",

		admin_p8_instructions: "Tyto údaje jsou sdíleny mezi všemi úložišti produktu FileNet Content Manager konfigurovanými pro webového klienta.",
		admin_p8_collaboration_config: "Volitelná konfigurace produktu FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Tyto parametry můžete konfigurovat, chcete-li vyladit produkt FileNet Collaboration Services pro příslušné prostředí produktu IBM FileNet P8.",
		admin_p8_use_url_incoming: "Použít adresu URL u příchozích požadavků pro generování adres URL odpovědi:",
		admin_p8_use_url_incoming_hover: "Ve většině prostředí produktu FileNet Collaboration Services lze s použitím adresy URL příchozího požadavky vygenerovat adresu URL jako odpověď. Vyberte hodnotu <b>Ano</b>, pokud se v případě vašeho prostředí nejedná o některou z následujících situací:<ul><li>Chcete vynutit přístup klientských aplikací k produktu FileNet Collaboration Services prostřednictvím konkrétní adresy URL.<li>V důsledku nastavení serveru proxy produkt FileNet Collaboration Services vytváří neplatné adresy URL.</ul>",

		admin_p8_use_url_incoming_http: "Adresa URL produktu FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Určete adresu URL, jejímž prostřednictvím mohou aplikace klienta přistupovat k produktu FileNet Collaboration Services, ve tvaru http://server_FNCS:číslo_portu.",
		admin_p8_use_url_incoming_https: "Adresa URL produktu FileNet Collaboration Services (HTTPS):",
		admin_p8_use_url_incoming_https_hover: "Je-li produkt FileNet Collaboration Services konfigurován tak, aby používal zabezpečení SSL, určete adresu URL pro protokol HTTPS, jejímž prostřednictvím mohou aplikace klienta přistupovat k produktu FileNet Collaboration Services, ve tvaru https://server_FNCS:číslo_portu.",
		admin_p8_hide_email_addresses: "Skrýt e-mailové adresy uživatelů v odpovědích serveru:",
		admin_p8_hide_email_addresses_hover: "Potřebujete-li dodržovat zásady ochrany osobních údajů, můžete skrýt e-mailové adresy uživatelů v odpovědích serveru. Můžete například skrýt seznam e-mailových adres uživatelů, když server vrátí seznam dokumentů a informací o uživatelích, kteří dokumenty vytvořili nebo upravovali.",

		admin_p8_mask_user_ids: "Maskovat jména uživatelů v souborech protokolu:",
		admin_p8_mask_user_ids_hover: "Potřebujete-li dodržovat zásady ochrany osobních údajů, můžete skrýt jména uživatelů v souborech protokolu produktu FileNet Collaboration Services. Povolíte-li tuto volbu, budou jména uživatelů nahrazena křížky. Tímto způsobem lze poskytovat soubory protokolu externím společnostem, například IBM, z důvodů podpory, aniž by došlo k porušení důvěrnosti jmen uživatelů či záznamů aktivit.",

		admin_p8_soft_delete: "Přesunout odstraněné soubory do koše s možností obnovení:",
		admin_p8_soft_delete_hover: "Když uživatelé odstraní položky, můžete příslušné položky namísto odstranění z úložiště přesunout do koše. Položky zůstanou v koši až do jeho vyprázdnění. Toto nastavení je ignorováno, pokud cílové úložiště nepodporuje koše.<br><br><b>Omezení:</b> Koše jsou podporovány v produktu IBM FileNet P8 verze 5.2 nebo novější a vyžadují doplněk Social Collaboration Base Extensions.",

		admin_p8_download: "Konfigurace mezipaměti HTTP stahování obsahu",
		admin_p8_download_instructions: "Pokud úložiště produktu IBM FileNet Content Manager obsahuje mnoho velkých souborů, můžete konfigurovat mezipaměť HTTP stahování obsahu (CDHC) tak, aby produktu FileNet Collaboration Services umožňovala bezpečné přesměrování požadavků na obsah pro velké soubory na vyhrazený webový server.<br/><br/>Tato funkce vyžaduje produkt IBM HTTP Server. Kromě toho je třeba aktualizovat soubor httpd.conf produktu IBM HTTP Server.",
		admin_p8_download_cache: "Mezipaměť HTTP stahování obsahu",
		admin_p8_download_cache_hover: "Určete, zda chcete mezipaměť HTTP stahování obsahu (CDHC) pro všechna úložiště produktu IBM FileNet Content Manager v příslušném prostředí. Můžete určit minimální velikost souboru, při níž jsou soubory ukládány do mezipaměti.",
		admin_p8_download_cache_folder: "Úplný název adresáře mezipaměti:",
		admin_p8_download_cache_folder_hover: "Zadejte úplnou cestu k adresáři, do kterého chcete ukládat soubory v mezipaměti. Adresář se může nacházet ve kterémkoli operačním systému či zařízení, například ve sdíleném síťovém adresáři, musí však být viditelný jako systém souborů pro produkty FileNet Collaboration Services a IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias pro umístění mezipaměti:",
		admin_p8_download_cache_url_hover: "Určete alias sloužící k odkazování na adresář mezipaměti z adresy URL produktu FileNet Collaboration Services. Určete alias ve formátu /alias. Příklad: /cdhc.<br/><br/>Je-li řetězec /cdhc součástí adresy URL, je aplikace přesměrována na úplnou adresu adresáře mezipaměti.",
		admin_p8_download_cache_max_files: "Maximální počet souborů v mezipaměti:",
		admin_p8_download_cache_max_files_hover: "Po dosažení maximálního počtu souborů je z mezipaměti odebrán nejstarší soubor.<br><br>Určíte-li maximální počet souborů pro uložení do mezipaměti a maximální velikost mezipaměti, bude nejstarší soubor z mezipaměti odebrán, bude-li splněna méně omezující podmínka z obou uvedených podmínek.",
		admin_p8_download_cache_max_size: "Maximální velikost mezipaměti (v GB):",
		admin_p8_download_cache_max_size_hover: "Po dosažení maximální velikosti mezipaměti je z mezipaměti odebrán nejstarší soubor.<br/><br/>Určíte-li maximální počet souborů pro uložení do mezipaměti a maximální velikost mezipaměti, bude nejstarší soubor z mezipaměti odebrán, bude-li splněna méně omezující podmínka z obou uvedených podmínek.",
		admin_p8_download_cache_cleanup_duration: "Maximální doba trvání vyčištění (v sekundách):",
		admin_p8_download_cache_cleanup_duration_hover: "Můžete určit maximální dobu, po kterou může probíhat operace čištění. Výchozí doba trvání je 5 sekund.<br><br>Veškeré soubory, které mají být odstraněny, ale zůstanou v mezipaměti po operaci vyčištění, budou odebrány během budoucí operace vyčištění.",
		admin_p8_download_cache_cleanup_min: "Minimální interval mezi operacemi vyčištění mezipaměti (v sekundách):",
		admin_p8_download_cache_cleanup_min_hover: "Můžete určit minimální dobu, která by měla uplynout mezi operacemi vyčištění mezipaměti. Výchozí doba je 3600 sekund (1 hodina).<br><br>Operace čištění mezipaměti probíhají pouze v případě aktivního požadavku na stažení obsahu z mezipaměti. Jsou-li požadavky přijímány každou minutu, proběhne operace vyčištění každou hodinu. Pokud však mezi požadavky na stahování uplynou tři hodiny, operace vyčištění neproběhne, dokud nebude obdržen další požadavek na stahování.",
		admin_p8_download_cache_min_lifetime: "Minimální doba uložení v mezipaměti (v sekundách):",
		admin_p8_download_cache_min_lifetime_hover: "Určete minimální dobu, po kterou je soubor uložen v mezipaměti, než jej lze odebrat. Výchozí doba je 3600 sekund (1 hodina).<br><br>Nejstarší soubor v mezipaměti nelze odstranit, dokud nebyl v mezipaměti uložen po určenou dobu, a to ani v případě, že mezipaměť dosáhne maximální velikosti nebo obsahuje maximální počet souborů.",
		admin_p8_download_cache_size_threshold: "Minimální velikost souboru pro uložení v mezipaměti (v kB):",
		admin_p8_download_cache_size_threshold_hover: "Určete minimální velikost, při které má být k ukládání souborů použita mezipaměť CDHC. Je-li soubor menší než určená velikost, je směrován prostřednictvím webového aplikačního serveru, na němž je produkt FileNet Collaboration Services implementován. Výchozí velikost je 1000 kB.",
		admin_p8_download_guard_header: "Záhlaví HTTP pro gatekeeping:",
		admin_p8_download_guard_header_hover: "Pokud klientská aplikace nesměruje požadavek prostřednictvím produktu IBM HTTP Server, obsah uložený v mezipaměti nelze stáhnout. Můžete určit, že přístup k obsahu uloženému v mezipaměti budou mít pouze příchozí požadavky s konkrétním záhlavím HTTP (jež je přidáváno do požadavků z produktu IBM HTTP Server), aby se předcházelo neúspěšnému stahování.<br><br>Záhlaví HTTP je konfigurováno v produktu IBM HTTP Server a je obsaženo ve všech příchozích požadavcích směrovaných prostřednictvím produktu IBM HTTP Server. Pokud požadavek neobsahuje záhlaví HTTP, je obsah směrován prostřednictvím webového aplikačního serveru namísto produktu IBM HTTP Server.",
		admin_p8_download_generate_config: "Generovat konfiguraci",
		admin_p8_download_generate_config_label: "Konfigurace produktu IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Má-li být mezipaměť CHDC funkční, je třeba aktualizovat soubor httpd.conf produktu IBM HTTP Server. Klepnutím na volbu Generovat konfiguraci můžete vygenerovat příkazy, které je třeba přidat do souboru httpd.conf.",

		admin_logging_viewone_pro: "Protokolování prohlížeče ViewONE Professional:",
		admin_logging_viewone_virtual: "Protokolování prohlížeče ViewONE Virtual:",
		admin_logging_viewone_streamer: "Protokolování produktu Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "Volby protokolování produktu Document Streaming Server Module lze použít pouze v případě, že jste povolili streamování pro soubory PDF či TIFF v části <b>Daeja ViewONE</b> nástroje pro administraci.",
		admin_logging_viewone_redaction: "Protokolování produktu Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "Volby protokolování produktu Permanent Redaction Server Module lze použít pouze v případě, že máte oprávnění k používání modulu Redaction prohlížeče Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Streamovat soubory PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Pokud se v úložišti nacházejí velké dokumenty ve formátu PDF, můžete pro prohlížeč povolit, aby obsah dokumentů odesílal jako proud, čímž se pro uživatele zobrazování těchto dokumentů zrychlí. Pokud však v příslušném prostředí proudové zpracování není funkční, můžete je zakázat.",
		admin_daeja_viewonepro_stream_tiff_documents: "Streamovat soubory TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Pokud se v úložišti nacházejí velké dokumenty ve formátu TIFF, můžete pro prohlížeč povolit, aby obsah dokumentů odesílal jako proud, čímž se pro uživatele zobrazování těchto dokumentů zrychlí. Pokud však v příslušném prostředí proudové zpracování není funkční, můžete je zakázat.",
		admin_daeja_viewonepro_show_file_buttons: "Tlačítka pro soubor",
		admin_daeja_viewonepro_show_file_menus: "Nabídky pro soubor",
		admin_daeja_viewonepro_enable_file_keys: "Aktivační klávesy pro soubory",
		admin_daeja_viewonepro_file_keys_hover_help: "Určete, zda chcete, aby uživatelé mohli pro práci se soubory (například pro otevření nebo uložení souboru) používat klávesové zkratky. Další informace o konkrétních aktivačních klávesách naleznete v popisu parametru FileKeys v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Tlačítka pro tisk",
		admin_daeja_viewonepro_show_print_menus: "Nabídky pro tisk",
		admin_daeja_viewonepro_enable_print_keys: "Aktivační klávesy pro tisk",
		admin_daeja_viewonepro_print_keys_hover_help: "Určete, zda chcete, aby uživatelé mohli pro tisk souborů (například pro tisk stránky nebo tisk dokumentu) používat klávesové zkratky. Další informace o konkrétních aktivačních klávesách naleznete v popisu parametru PrintKeys v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Invertovat tlačítka",
		admin_daeja_viewonepro_annotation_tooltip: "Výchozí popis vlastní anotace:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Zadejte text, který má být zobrazen, pokud pro vlastní anotaci není určen žádný popis. Text může obsahovat nahraditelné prvky. Příklad: „Uživatel &lt;creator&gt; vytvořil tuto anotaci dne &lt;createdateonly&gt;.“ Další informace o nahraditelných prvcích naleznete v popisu parametru customAnnotationsToolTip v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Použít předdefinovaný vlastní popis",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Použít vlastní popis definovaný systémem a zobrazený v textovém poli níže",
		admin_daeja_viewonepro_help_url: "Adresa URL nápovědy:",
		admin_daeja_viewonepro_help_url_hover_help: "Určete adresu URL webové stránky obsahující dokumentaci nápovědy pro prohlížeč. Webová stránka se otevře po stisknutí tlačítka nápovědy na panelu nástrojů prohlížeče nebo po výběru příslušné akce nabídky nápovědy. Neurčíte-li adresu URL, tlačítko nápovědy a akce nabídky se nezobrazí.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kontext zdroje obrázku razítka:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "úkol",
		admin_daeja_viewonepro_route_docs: "Směrovat nepodporovaný obsah do prohlížeče:",
		admin_daeja_viewonepro_route_docs_hover_help: "Uživatelé mohou zobrazovat nepodporované soubory obrázků tak, že je přesměrují do prohlížeče, který otevře odpovídající aplikaci pro zobrazení příslušného souboru. Chcete-li například otevřít dokument aplikace Microsoft Word, prohlížeč použije prohlížeč souborů aplikace Microsoft Word.",
		admin_daeja_viewonepro_scale: "Automaticky přizpůsobit obrázek:",
		admin_daeja_viewonepro_scale_best: "Nejvhodnější",
		admin_daeja_viewonepro_scale_ftow: "Přizpůsobit šířce",
		admin_daeja_viewonepro_scale_ftoh: "Přizpůsobit výšce",
		admin_daeja_viewonepro_enable_hotkeys: "Povolit aktivační klávesy:",
		admin_daeja_viewonepro_show_features: "Zobrazit tlačítka a nabídky:",
		admin_daeja_custom_settings: "Další nastavení:",
		admin_daeja_custom_settings_hover_help: "Můžete přidat další parametry určením názvu a hodnoty parametru. Můžete například zadat parametr scrollbars a hodnotu Ano (true), chcete-li, aby byly zobrazeny posuvníky, je-li obrázek zvětšen na plochu přesahující oblast zobrazení. Další informace o názvech a hodnotách parametrů naleznete v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Výchozí popis vlastní anotace:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Zadejte text, který má být zobrazen, pokud pro vlastní anotaci není určen žádný popis. Text může obsahovat nahraditelné prvky. Příklad: „Uživatel &lt;creator&gt; vytvořil tuto anotaci dne &lt;createdateonly&gt;.“ Další informace o nahraditelných prvcích naleznete v popisu parametru customAnnotationsToolTip v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Použít předdefinovaný vlastní popis",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Použít vlastní popis definovaný systémem a zobrazený v textovém poli níže",
		admin_daeja_virtual_image_stamp_resource_context: "Kontext zdroje obrázku razítka:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "úkol",
		admin_daeja_virtual_license_path:"Cesta k souborům s licencemi:",
		admin_daeja_virtual_license_path_hover_help:"Zadejte úplnou cestu k adresáři obsahujícímu soubory s licencemi lic-server-virtual.v1 a lic-server.v1.",
		admin_default_license_path:"Použít výchozí cestu k souborům s licencemi",
		admin_license_path_specified:"Použít vlastní cestu k souborům s licencemi",

		admin_daeja_streamer: "Na serveru",
		admin_daeja_streamer_cache_root: "Adresář mezipaměti:",
		admin_daeja_streamer_cache_root_hover_help: "Zadejte úplnou cestu k adresáři, do kterého chcete ukládat soubory v mezipaměti kvůli rychlejšímu přístupu. Adresář se může nacházet ve kterémkoli operačním systému či v jakémkoli zařízení, jako je síťový adresář, je-li viditelný jako systém souborů pro produkty IBM Content Navigator a IBM HTTP Server. Chcete-li zvýšit výkon, použijte lokální adresář.",
		admin_daeja_streamer_settings: "Další nastavení:",
		admin_daeja_streamer_settings_hover_help: "Můžete přidat další parametry určením názvu a hodnoty parametru. Můžete například určit parametr cookieAllowedDomainList a seznam hostitelských serverů s čárkami jako oddělovači. Další informace o názvech a hodnotách parametrů naleznete v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Nastavení:",
		admin_daeja_redaction_settings_hover_help: "Můžete přidat další parametry určením názvu a hodnoty parametru. Můžete například určit parametr burnIncrementalAnnotations a hodnotu Ano (true). Další informace o názvech a hodnotách parametrů naleznete v referenční příručce parametrů prohlížeče IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Nové nastavení",
		admin_daeja_setting_dialog_title_edit: "Upravit nastavení",
		admin_daeja_setting_dialog_hover_help: "Můžete přidat další parametry určením názvu a hodnoty parametru. Můžete například zadat parametr scrollbars a hodnotu Ano (true), chcete-li, aby byly zobrazeny posuvníky, je-li obrázek zvětšen na plochu přesahující oblast zobrazení.",
		admin_daeja_setting_dialog_field_hover_help: "Další informace o názvech a hodnotách parametrů naleznete v referenční příručce parametrů prohlížeče Daeja ViewONE.",

		admin_daeja_logging: "Protokolování Daeja ViewONE",
		admin_daeja_logging_trace: "Povolit protokolování trasování",
		admin_daeja_logging_trace_net: "Povolit síťové protokolování",
		admin_daeja_logging_trace_annotations: "Povolit protokolování anotací",
		admin_daeja_logging_log_file: "Soubor žurnálu:",
		admin_daeja_logging_instructions: "Protokolování lze používat k odstraňování problémů s prohlížeči Daeja ViewONE Professional a Daeja ViewONE Virtual. Víte-li, že k problému dochází pro konkrétní funkci, můžete protokolování zúžit na příslušnou funkci.",

		admin_v1pro_logging_trace_hover: "Prostřednictvím tohoto nastavení můžete odstraňovat obecné problémy s prohlížečem.<br><br>Informace protokolování jsou zapisovány do konzoly Java v klientském počítači. Konzola Java je přístupná prostřednictvím ovládacích panelů (Windows) nebo předvoleb systému (Mac).",
		admin_v1pro_logging_trace_net_hover: "Toto nastavení použijte k řešení následujících problémů:<ul><li>Problémy s připojením serveru</li><li>Problémy s typy MIME</li><li>Problémy s příliš dlouhými soubory</li></ul>Kromě toho lze pomocí síťového protokolování trasování určit, kde dochází při používání prohlížeče Daeja ViewONE Professional k prodlevám.<br><br>Informace protokolování jsou zapisovány do konzoly Java v klientském počítači. Konzola Java je přístupná prostřednictvím ovládacích panelů (Windows) nebo předvoleb systému (Mac).",
		admin_v1pro_logging_trace_annotations_hover: "Prostřednictvím tohoto nastavení můžete odstraňovat problémy s vytvářením, ukládáním nebo načítáním anotací.<br><br>Informace protokolování jsou zapisovány do konzoly Java v klientském počítači. Konzola Java je přístupná prostřednictvím ovládacích panelů (Windows) nebo předvoleb systému (Mac).",

		admin_virtual_logging_trace_hover: "Prostřednictvím tohoto nastavení můžete odstraňovat obecné problémy s prohlížečem.<br><br>Standardně se informace protokolování zapisují do souboru virtual.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Toto nastavení použijte k řešení následujících problémů:<ul><li>Problémy s připojením serveru</li><li>Problémy s typy MIME</li><li>Problémy s příliš dlouhými soubory</li></ul>Kromě toho lze pomocí síťového protokolování trasování určit, kde dochází při používání prohlížeče Daeja ViewONE Virtual k prodlevám.<br><br>Standardně se informace protokolování zapisují do souboru virtual.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Prostřednictvím tohoto nastavení můžete odstraňovat problémy s vytvářením, ukládáním nebo načítáním anotací.<br><br>Standardně se informace protokolování zapisují do souboru virtual.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Chcete-li povolit protokolování pro prohlížeč, musíte určit úplnou cestu k souboru protokolu, kam chcete zapisovat informace protokolování. Doporučuje se dát souboru název virtual.log.",

		admin_streamer_logging_trace_hover: "Prostřednictvím tohoto nastavení můžete odstraňovat obecné problémy s produktem Document Streaming Server Module.<br><br>Při výchozím nastavení se informace protokolování zapisují do souboru streamer.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Toto nastavení použijte k řešení následujících problémů:<ul><li>Problémy s připojením serveru</li><li>Problémy s konkrétními typy MIME</li><li>Problémy s příliš dlouhými soubory</li></ul>Kromě toho lze pomocí síťového protokolování trasování určit, kde dochází při používání produktu Document Streaming Server Module k prodlevám.<br><br>Při výchozím nastavení se informace protokolování zapisují do souboru streamer.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Chcete-li povolit protokolování pro modul serveru Document Streaming, musíte určit úplnou cestu k souboru protokolu, kam chcete zapisovat informace protokolování. Doporučuje se dát souboru název streamer.log.",

		admin_redaction_logging_trace_hover: "Prostřednictvím tohoto nastavení můžete odstraňovat obecné problémy s produktem Permanent Redaction Server Module.<br><br>Při výchozím nastavení se informace protokolování zapisují do souboru redacttofile.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Toto nastavení použijte k řešení následujících problémů:<ul><li>Problémy s připojením serveru</li><li>Problémy s konkrétními typy MIME</li><li>Problémy s příliš dlouhými soubory</li></ul>Kromě toho lze pomocí síťového protokolování trasování určit, kde dochází při používání produktu Permanent Redaction Server Module k prodlevám.<br><br>Při výchozím nastavení se informace protokolování zapisují do souboru redacttofile.log v podadresáři config instalačního adresáře produktu IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Chcete-li povolit protokolování pro modul serveru Permanent Redaction, musíte určit úplnou cestu k souboru protokolu, kam chcete zapisovat informace protokolování. Doporučuje se dát souboru název redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Můžete konfigurovat funkce pro prohlížeče a služby.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Pokud se připojujete k jednomu nebo několika úložištím produktu Content Manager OnDemand prostřednictvím webového klienta, je nutné zadat informace, které jsou vyžadovány pro správné fungování sady OnDemand Web Enablement Kit. Tyto údaje jsou sdíleny mezi všemi úložišti produktu Content Manager OnDemand konfigurovanými pro webového klienta.",
		admin_ondemand_language: "Jazyk:",
		admin_ondemand_tempdir: "Dočasný adresář sady ODWEK:",
		admin_ondemand_tracegrp: "Trasování sady ODWEK",
		admin_ondemand_tracedir: "Adresář trasování:",
		admin_ondemand_tracelevel: "Úroveň trasování:",
		admin_ondemand_tracelevel_0: "0 - Bez protokolování",
		admin_ondemand_tracelevel_1: "1 - Protokolování chybových zpráv",
		admin_ondemand_tracelevel_2: "2 - Protokolování chybových zpráv a varování",
		admin_ondemand_tracelevel_3: "3 - Protokolování chybových zpráv, varování a informačních zpráv",
		admin_ondemand_tracelevel_4: "4 - Zachycování všech zpráv včetně trasování funkcí",
		admin_ondemand_max_trace_filesize: "Maximální velikost trasovacího souboru:",
		admin_ondemand_max_trace_filesize_unlimited: "Neomezeno",
		admin_ondemand_max_trace_filesize_limited: "Omezená (doporučeno)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Tato hodnota leží mimo rozsah. Musí se jednat o celé číslo v rozsahu 1 až 1 000 000.",
		admin_ondemand_afp2pdf_installdir: "Instalační adresář programu AFP2PDF:",
		admin_ondemand_language_hover: "Zadejte jazyk, ve kterém sada ODWEK vrací zprávy.",
		admin_ondemand_tempdir_hover: "Zadejte adresář, do kterého bude sada OnDemand Web Enablement Kit ukládat při zpracování dočasné soubory. Je nutné zadat úplnou cestu ke stávajícímu adresáři na webovém aplikačním serveru.",
		admin_ondemand_tracedir_hover: "Zadejte adresář, do kterého chcete uložit trasovací soubor sady ODWEK arswww.trace. Je nutné zadat úplnou cestu ke stávajícímu adresáři na webovém aplikačním serveru.",
		admin_ondemand_tracelevel_hover: "Zadejte úroveň protokolovacích informací, které se budou zapisovat do souboru arswww.trace. <b>Protokolování chybových zpráv</b> - je zachycováno minimální množství informací protokolu. <b>Jsou zachycovány všechny zprávy, včetně trasování funkcí</b> - je zachycováno maximum informací.<br /><br />Úroveň <b>Jsou zachycovány všechny zprávy, včetně trasování funkcí</b> nezadávejte v provozním prostředí (s výjimkou případů, kdy vás k tomu vyzvou pracovníci softwarové podpory IBM).",
		admin_ondemand_max_trace_filesize_hover: "Určete, zda chcete pro soubor trasování sady ODWEK povolit nárůst velikosti bez omezení či zda chcete, aby webový klient vytvořit nové soubory protokolu, jakmile soubor protokolu dosáhne určitou velikost. Při výchozím nastavení je povolen nárůst velikosti souboru protokolu trasování, dokud webová aplikace na webovém aplikačním serveru nebude zastavena.",
		admin_ondemand_max_trace_unlimited_hover: "Tuto volbu vyberte, pokud chcete informace o trasování sady ODWEK zapisovat do jediného souboru protokolu. Je-li tato volba vybrána, může velikost souboru protokolu narůst natolik, že nebude možné otevřít jej ve standardním prohlížeči souborů.",
		admin_ondemand_max_trace_limited_hover: "Tuto volbu vyberte, pokud chcete informace o trasování sady ODWEK zapisovat do menších souborů protokolu. Jakmile soubor protokolu dosáhne maximální velikosti, dojde k přejmenování aktuálního protokolu (název bude obsahovat aktuální datum a bude mít tvar arswww.trace.RRRRMMDD.HHMMSS) a vytvoření nového souboru protokolu.",
		admin_ondemand_afp2pdf_installdir_hover: "Chcete-li při prohlížení a tisku převádět dokumenty AFP do formátu PDF s použitím obslužného programu pro transformaci AFP2PDF, určete adresář, ve kterém je na webovém aplikačním serveru instalován obslužný program pro transformaci AFP2PDF. Příklad: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administrátoři",
		admin_adminusers_heading_text_multi: "Je nutné určit, kteří uživatelé mají na webovém klientovi oprávnění k administraci. K pracovní ploše administrátora se smí přihlásit pouze administrátoři.<br /><br /><b>Důležité:</b> Jména uživatelů administrátorů produktu IBM Content Navigator musí odpovídat:<ul><li>Jménům uživatelů na webovém aplikačním serveru. Tito uživatelé nemusí být administrátory webového aplikačního serveru.</li><li>Jménům uživatelů, kteří existují ve výchozím úložišti konfigurovaném pro jednotlivé pracovní plochy obsahující funkci Správa.</li></ul>",
		admin_adminusers_heading_text_single: "Je nutné určit, kteří uživatelé mají na webovém klientovi oprávnění k administraci. K pracovní ploše administrátora se smí přihlásit pouze administrátoři.<br /><br /><b>Důležité:</b> Jména uživatelů administrátorů produktu IBM Content Navigator musí odpovídat jménům uživatelů, kteří existují na webovém aplikačním serveru. Tito uživatelé nemusí být administrátory webového aplikačního serveru.",
		admin_adminusers_newuser: "Nový administrátor:",
		admin_adminusers_add: "Přidat",
		admin_adminusers_remove: "Odebrat",
		admin_adminusers_listheading: "Administrátoři",
		admin_adminusers_nameInvalid: "Hodnota nesmí být duplicitní.",

		admin_sync_server_instructions: "<b>Pouze pro uživatele produktu FileNet:</b> Máte-li v úmyslu povolit služby synchronizace pro jedno či více úložišť, je třeba konfigurovat webového klienta tak, aby používal služby synchronizace. Konfigurace služeb synchronizace je sdílena všemi úložišti v příslušném prostředí.",
		admin_settings_instructions: "Hodnoty zadané na kartě Nastavení platí pro všechny pracovní plochy vaší konfigurace.",
		admin_autocomplete: "Automaticky naplnit jmény uživatele:",
		admin_autocomplete_hover: "Rozhodněte, zda má webový klient ukládat jména uživatelů v souborech cookie prohlížeče a umožnit prohlížeči, aby při přihlášení ve webovém klientovi automaticky vyplňoval jména uživatelů.<br><br>Pokud povolíte tuto volbu, jméno posledního uživatele přihlášeného k webovému klientovi se uloží do souborů cookie prohlížeče a při dalším otevření webového klienta se automaticky zobrazí na stránce přihlášení.<br><br>Tuto volbu vypněte, pokud aplikaci otevíráte na sdílené pracovní stanici nebo jestliže máte obavy z ukládání jmen uživatelů do souborů cookie prohlížeče.<br /><br />Tato volba se nevztahuje na mobilní ani vlastní aplikace.",
		admin_autocomplete_enable: "Povolit",
		admin_autocomplete_disable: "Zakázat",
		admin_cultural_collation: "Použít řazení specifické pro národní prostředí:",
		admin_cultural_collation_hover: "Pokud povolíte řazení specifické pro národní prostředí, řazení se provádí na serveru úložiště. To může mít za následek snížení výkonu webového klienta.<br><br>Zakázáním řazení specifického pro národní prostředí můžete zvýšit výkon webového klienta.",
		admin_cultural_collation_enable: "Povolit",
		admin_cultural_collation_disable: "Zakázat",
		admin_base_ui_style: "Styl motivu",
		admin_base_ui_style_hover: "Určete styl výchozího motivu, který se používá ve webovém klientovi. Tento styl se používá jen v pracovních plochách, které používají motiv <b>Výchozí</b> (je uvedený na kartě <b>Vzhled</b> konfigurace pracovní plochy).<br/></br><b>Omezení:</b> Pokud vaše konfigurace pracovní plochy používají vlastní motivy, jsou tyto vlastní motivy založené na klasickém stylu bez ohledu na to, který styl vyberete.",
		admin_base_ui_style_classic: "Klasický",
		admin_access_control_access: "Omezit přístup pro konkrétní uživatele a skupiny",
		admin_access_control_access_show: "Zobrazit údaje o řízení přístupu",
		admin_access_control_access_enable: "Ano",
		admin_access_control_access_disable: "Ne",
		admin_mobile_access: "Povolit přístup z mobilních aplikací:",
		admin_mobile_access_hover: "Při výchozím nastavení mají uživatelé přístup k webovému klientu z aplikace iOS produktu IBM Content Navigator.<br /><br /><b>Důležitá informace:</b> Pokud uživatelům zabráníte v přístupu k webovému klientu z aplikace iOS, budou nadále mít přístup k webovému klientu z webových prohlížečů ve svých mobilních zařízeních a z jakýchkoli vlastních aplikací napsaných s použitím rozhraní API produktu IBM Content Navigator, které jsou v mobilních zařízeních funkční.",
		admin_mobile_access_enable: "Ano",
		admin_mobile_access_disable: "Ne",
		admin_error: "Informace o chybových zprávách:",
		admin_error_custom: "Hledat obsah vlastní podpory",
		admin_error_default: "Hledat obsah podpory IBM <BDO DIR='LTR'>(</BDO>výchozí<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Určete, kam chcete při zobrazení chybové zprávy nasměrovat uživatele pro další informace. Uživatele můžete odkázat na informace na portálu podpory společnosti IBM nebo na interní prostředek, například středisko podpory.",
		admin_error_URL: "Předpona adresy URL:",
		admin_error_URL_hover: "Zadejte adresu URL prostředku, na který chcete při zobrazení chyby přesměrovat uživatele (například středisko podpory). Příklad:http://localhost:číslo_portu. Webový klient přidá do adresy URL číslo zprávy.",
		admin_prompt_close_without_save: "Chcete provést zavření bez uložení změn?",
		admin_object_expiration_time: "Obnovovací interval mezipaměti (v minutách):",
		admin_object_expiration_time_hover: "Můžete prodloužit dobu, po kterou jsou objekty konfigurace, například pracovní plochy, udržovány v mezipaměti za účelem zvýšení výkonu webového klienta. Výchozí nastavení je 10 minut. Maximální hodnota je 1440 minut (1 den).<br /><br />Aby se změny projevily, musíte webovou aplikaci restartovat.<br /><br />Pokud je aplikace IBM Content Navigator implementována v klastrovaném prostředí s vysokou dostupností, nebudou změny objektů konfigurace rozšířeny do uzlů v klastru, dokud neproběhne aktualizace mezipaměti.",
		admin_temp_file_cleanup_interval: "Interval procházení pro vymazání mezipaměti prohlížeče (v hodinách):",
		admin_temp_file_cleanup_interval_hover: "Můžete naplánovat, jak často má být dočasný adresář procházen s cílem najít a odstranit vypršelé dočasné soubory. Při výchozím nastavení je dočasný adresář procházen každých šest hodin. Určit lze hodnotu v rozmezí 6 až 48 hodin.",
		admin_temp_file_expiration_interval: "Ukončit platnost mezipaměti prohlížeče (v hodinách):",
		admin_temp_file_expiration_interval_hover: "Můžete určit časový úsek, po který zůstávají v mezipaměti prohlížeče dočasné soubory související s činnostmi v prohlížeči. Při výchozím nastavení vyprší platnost těchto dočasných souborů po 24 hodinách. Určit lze hodnotu v rozmezí 12 až 48 hodin.",
		admin_encryption_key_hover: "Klíč používaný pro šifrovací funkce produktu Navigator.",
		admin_encryption_key: "Šifrovací klíč:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Branding",
		admin_mobile_branding_main_color: "Hlavní barva:",
		admin_mobile_branding_secondary_color: "Sekundární barva:",
		admin_mobile_device_title: "Správa MaaS360",
		admin_mobile_device_enable_maas360: "Povolit MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Bublinová nápověda pro povolení MaaS360",
		admin_mobile_device_maas360_developer_id: "ID vývojáře MaaS360:",
		admin_mobile_device_maas360_license_key: "Licenční klíč MaaS360:",
		admin_mobile_settings_title: "Nastavení",
		admin_mobile_email_address_hover_help: "E-mailová adresa se používá v mobilní aplikaci, když uživatel klepne na volbu \"Odeslat hlášení o chybách\".",
		admin_mobile_email_address: "E-mailová adresa:",
		admin_invalid_email_address_message: "E-mailová adresa, kterou jste zadali, není ve správném formátu. Zadejte správnou adresu a zkuste operaci znovu.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Některá data jsou neplatná.",
		admin_configuration_parameters: "Konfigurační parametry",
		admin_configuration_optional_features: "Volitelné funkce",
		admin_configuration_optional_features_p8_instructions: "Vyberte funkce, které chcete povolit v tomto úložišti.<p><b>Důležité upozornění:</b> Pokud povolíte funkci, která instaluje do úložiště doplněk, musíte být k příslušnému úložišti připojeni jako administrátor produktu Content Platform Engine nebo Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Vyberte funkce, které chcete povolit v tomto úložišti.<p><b>Důležité upozornění:</b> Tyto funkce upravují datový model v úložišti. Chcete-li je povolit, musíte být k úložišti připojeni jako administrátor indexového serveru.</p>",
		admin_system_properties: "Systémové vlastnosti",
		admin_system_properties_for: "Systémové vlastnosti pro:",
		admin_available_properties: "Dostupné vlastnosti",
		admin_displayed_properties: "Zobrazené vlastnosti",
		admin_selected_properties: "Vybrané vlastnosti",
		admin_selected_filtered_properties: "Skryté vlastnosti",
		admin_available_operators: "Zobrazené operátory",
		admin_selected_filtered_operators: "Skryté operátory",
		admin_system_properties_shown: "Zobrazené vlastnosti",
		admin_system_properties_hidden: "Skryté vlastnosti",
		admin_available_menu_items: "Dostupné akce:",
		admin_selected_menu_items: "Vybrané akce:",
		admin_menu_global: "Použije se v případě, že není vybrána žádná položka:",
		admin_menu_multiple_document: "Použije se v případě, že je vybráno několik položek:",
		admin_menu_privileges: "Vyžadovaná oprávnění:",
		admin_menu_plugin: "Modul plug-in:",
		admin_menu_repository_types: "Typy úložiště:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Oddělovač",
		admin_browse: "Procházet",
		admin_search: "Vyhledat",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redakce založená na rolích",
		admin_connections_library_enabled: "Produkt IBM Connections povolen",
		admin_office_conf: "Integrace úprav",
		admin_desktop_conf_label: "Konfigurace pracovní plochy",
		admin_ms_office_conf_label: "Konfigurace produktu Office",
		admin_workflows: "Sledy prací",
		admin_file_types: "Typy souborů",
		admin_file_type_contains_label: "Typ souboru obsahuje",
		admin_name_propepty: "Název",
		admin_cm_name_property_default: "Použít výchozí název",
		admin_cm_name_property_default_hover: "Standardně je jako název položky použit hierarchický název ICM (ICM$NAME), pokud je tato vlastnost pro položku definována. Pokud vlastnost hierarchický název ICM (ICM$NAME) není k dispozici, je jako název položky použita první vlastnost s příznakem \"represents\".",
		admin_cm_name_property: "Určete vlastnost názvu položky",
		admin_cm_name_property_hover: "Určete vlastnost, která je použita jako název dokumentů a složek.",
		admin_name_property: "Název vlastnosti:",
		admin_doc_name_property: "Vlastnost názvu dokumentu:",
		admin_doc_name_property_hover: "Určete vlastnost, která je použita jako název dokumentu.",
		admin_folder_name_property: "Vlastnost názvu složky:",
		admin_folder_name_property_hover: "Určete vlastnost, která je použita jako název složky.",
		admin_all_searches_label: "Počet zobrazovaných hledání:",
		admin_unlimited: "Bez omezení",
		admin_limit: "Omezit na",
		admin_repository: "Úložiště:",
		admin_application_space: "Aplikační prostor",
		admin_available_application_spaces: "Dostupné aplikační prostory:",
		admin_selected_application_spaces: "Vybrané aplikační prostory:",
		admin_label: "Popisek",
		admin_repository_box_placeholder: "Vybrat úložiště produktu Box",
		admin_repository_placeholder: "Vybrat úložiště",
		admin_search_match: "Shoda:",
		admin_search_match_all: "Shoda se všemi vyhledávacími kritérii",
		admin_search_match_any: "Shoda s libovolným vyhledávacím kritériem",
		admin_search_match_hover: "Určete volbu vybranou jako výchozí v nabídce <b>Volby vlastnosti</b>.",

		admin_repository_redactions_instructions: "Pro toto úložiště můžete konfigurovat redakce založené na rolích.",
		admin_repository_redaction_policies_description: "Můžete vytvářet a spravovat zásady redakce, jejichž prostřednictvím jsou důvody redakce přidruženy k uživatelům a skupinám, které mohou číst citlivá data a upravovat anotace chránící příslušná citlivá data před zobrazením.",
		admin_repository_redaction_roles_instruction: "Můžete vytvořit roli redakce pro přidružení možnosti číst citlivá data nebo možnosti upravovat anotace chránící citlivá data před zobrazením k určeným uživatelům a skupinám. Role redakce musí být přidružena k důvodu redakce v rámci zásad redakce, než budou příslušní uživatelé a skupiny moci číst data nebo upravovat anotace.",
		admin_repository_redaction_reasons_instruction: "Můžete konfigurovat důvody redakce pro své úložiště.",
		admin_repository_redaction_policies: "Konfigurace zásad redakce",
		admin_repository_redaction_roles: "Konfigurace rolí redakce",
		admin_repository_redaction_reasons: "Konfigurace důvodů redakce",
		admin_repository_redaction_roles_type: "Typ",
		admin_repository_redaction_roles_type_hover: "Editor může vytvářet, upravovat nebo odstraňovat konkrétní typy redakcí založených na rolích, zatímco prohlížeč může zobrazovat konkrétní typy citlivých dat.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Prohlížeč",
		admin_repository_redaction_roles_membership: "Členství",
		admin_repository_redaction_roles_membership_hover: "Vyberte editory, kterým chcete přiřadit tuto roli.",
		admin_repository_redaction_roles_user_group_hover: "Vyhledejte uživatele a skupiny nebo vyberte editory, kterým chcete přiřadit tuto roli.",
		admin_repository_redaction_roles_description: "Můžete vytvářet a spravovat role redakce, jejichž prostřednictvím jsou k uživatelům a skupinám přidruženy možnosti čtení citlivých dat a úpravy anotací chránících citlivá data před zobrazením.",
		admin_repository_redaction_new: "Nová role redakce",
		admin_repository_redaction_role_avail_editors: "Editoři redakce k dispozici",
		admin_repository_redaction_role_avail_users: "Uživatelé k dispozici",
		admin_repository_redaction_role_avail_groups: "Skupiny k dispozici",
		admin_repository_redaction_role_selected_editors: "Vybraní editoři redakce",
		admin_repository_redaction_role_selected_users_groups: "Vybraní uživatelé a skupiny",
		admin_repository_redaction_role_add_editor: "Noví editoři...",
		admin_repository_redaction_role_access_type: "Přístup",
		admin_repository_redaction_role_access_type_access: "Povolit",
		admin_repository_redaction_role_access_type_no_access: "Zamítnout",
		admin_repository_redaction_role_users: "Uživatelé",
		admin_repository_redaction_role_groups: "Skupiny",
		admin_repository_redaction_role_editors: "Editoři",
		admin_delete_confirmation_redaction_roles: "Chcete odstranit vybranou roli redakce?",
		admin_repository_edit_redaction_role: "Role redakce: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Výchozí přístup",
		// RBA
		desktop_user_group_acl: "Administrátoři pracovní plochy",
		desktop_user_group_remove: "Odebrat",
		desktop_rba_membership: "Členství:",
		desktop_rba_membership_list_label: "Název",
		admin_repository_redaction_policy_hover: "Zadejte popis, který uživatelům umožní odlišit tyto zásady od ostatních zásad.",
		admin_repository_new_redaction_policy: "Nové zásady redakce",
		admin_repository_policy_name: "Název zásady",
		admin_repository_reason_redactions: "Důvody redakce:",
		admin_repository_role_editors: "Editoři",
		admin_repository_role_viewers: "Prohlížeče",
		admin_repository_redaction_policy_instruction: "Můžete vytvořit zásady redakce, jejichž prostřednictvím budou vybrané důvody redakce přidruženy k editorům redakce a k prohlížečům redakce.",
		admin_repository_redaction_reasons_hover: "Vyberte jeden či více typů citlivých dat, jejichž zobrazení nemá být většině uživatelů umožněno, například informace umožňující identifikaci osoby, obchodní tajemství nebo informace, které jsou důvěrné nebo jsou vlastnictvím vaší společnosti.",
		admin_repository_readaction_available_reasons: "Důvody k dispozici",
		admin_repository_readaction_selected_reasons: "Vybrané důvody",
		admin_repository_readaction_new_reason: "Nový důvod...",
		admin_repository_redeaction_reasons: "Důvody redakce:",
		admin_repository_readaction_editor_permmission: "Editoři redakce:",
		admin_repository_redaction_editors_hover: "Vyberte role, které mohou vytvářet a upravovat redakci pro vybrané důvody.",
		admin_repository_readaction_new_editor_role: "Nová role editora...",
		admin_repository_readaction_available_editors: "Role editora k dispozici",
		admin_repository_readaction_selected_editors: "Vybrané role editora",
		admin_repository_readaction_viewer_permmission: "Prohlížeči redakce:",
		admin_repository_redaction_viewers_hover: "Vyberte role, které mohou zobrazovat citlivá data pro vybrané důvody. Redakce není použita na uživatele a skupiny s těmito rolemi.",
		admin_repository_readaction_new_viewer_role: "Nová role prohlížeče...",
		admin_repository_readaction_available_viewers: "Role prohlížeče k dispozici",
		admin_repository_readaction_selected_viewers: "Vybrané role prohlížeče",
		admin_repository_reason_redactions_header: "Důvody redakce",
		admin_delete_confirmation_redaction_policy: "Chcete odstranit vybrané zásady redakce?",
		admin_role_type_repository: "Úložiště",
		admin_role_type_administrator: "Administrátor",
		admin_role_type_template: "Šablona",
		admin_role_type_teamspace: "Týmový prostor",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Prohlížeč",
		admin_collaboration_services_instructions: "Máte-li k dispozici produkt IBM Connections a webovou aplikaci FileNet Collaboration Services, můžete pro úložiště konfigurovat týmové prostory komunity a proudy aktivit.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfigurace knihoven komunity",
		admin_collaboration_community_instruction: "Můžete konfigurovat jedno úložiště v rámci domény IBM FileNet P8 pro ukládání knihoven komunit produktu IBM Connections (označovaných také výrazem týmové prostory). Když uživatelé vytvoří knihovnu komunity prostřednictvím produktu IBM Connections, je uložena v úložišti označeném jako úložiště knihoven komunit.",
		admin_collaboration_community_teamspaces: "Použít toto úložiště pro knihovny komunity:",
		admin_collaboration_community_teamspaces_hover: "K ukládání nových knihoven komunity můžete v doméně IBM FileNet P8 používat pouze jedno úložiště. Pokud povolíte toto úložiště a máte k dispozici existující úložiště, bude existující úložiště zakázáno. Veškeré existující knihovny však zůstanou v aktuálním úložišti.",
		admin_collaboration_connections_anonymous: "Povolit anonymní přístup k veřejnému obsahu:",
		admin_collaboration_connections_anonymous_hover: "Pokud server IBM Connections obsahuje veřejné nebo moderované komunity, můžete produkt FileNet Collaboration Services konfigurovat tak, aby uživatelům umožňoval procházení a stahování obsahu z knihoven v příslušných komunitách bez nutnosti nejprve se přihlásit.<br><br>Uživatelé, kteří ke knihovnám komunit přistupují anonymně, nemohou vytvářet, upravovat ani odstraňovat obsah.<br><br><b>Důležité upozornění:</b> Je třeba určit uživatele služby LDAP produktu IBM FileNet P8 jako anonymního uživatele a konfigurovat příslušného uživatele s použitím role <b>Anonymní uživatel</b> v produktu WebSphere Application Server.",
		admin_collaboration_connections_url: "Adresa URL produktu IBM Connections:",
		admin_collaboration_connections_url_hover: "Můžete určit adresu URL pro server IBM Connections ve formátu http://server_IBM_Connections:číslo_port. Je-li produkt IBM Connections konfigurován pro používání produktu IBM HTTP Server, můžete v adrese URL vynechat číslo portu.<br><br>Příslušná adresa URL musí být přístupná pro uživatele produktu IBM Connections, protože se jedná o odkaz, který je používán produktem FileNet Collaboration Services pro vytváření odkazů na úvodní stránky dokumentů v produktu IBM Connections.",
		admin_collaboration_connections_url_http_use: "Použít adresu URL produktu IBM Connections",
		admin_collaboration_connections_url_https_use: "Použít adresu URL produktu IBM Connections (HTTPS)",
		admin_collaboration_connections_url_specify: "Zadat adresu URL",
		admin_collaboration_connections_url_https: "Adresa URL produktu IBM Connections (HTTPS):",
		admin_collaboration_connections_url_https_hover: "Je-li produkt IBM Connections konfigurován pro používání zabezpečení SSL, určete adresu URL protokolu HTTPS pro příslušný server IBM Connections ve formátu https://server_IBM_Connections:číslo_portu. Je-li produkt IBM Connections konfigurován pro používání produktu IBM HTTP Server, můžete v adrese URL vynechat číslo portu.",

		admin_collaboration_connections_gadget_url: "Adresa URL modulu gadget IBM Connections:",
		admin_collaboration_connections_retrieval_url: "Adresa URL načtení produktu IBM Connections:",
		admin_collaboration_connections_security: "Administrátoři komunity:",
		admin_collaboration_connections_security_hover: "Určete uživatele a skupiny s oprávněním pro administraci obsahu v knihovnách komunit.<br><br>Globální administrátoři mohou vytvářet, upravovat či odstraňovat knihovny komunit a jejich obsah a poskytovat k nim přístup. Určíte-li uživatele jako globálního administrátora, bude mu v úložišti uděleno oprávnění ClbGlobalAdministrator.<br><br>Globální administrátoři přezkoumání mohou schvalovat a odmítat obsah, který má být v knihovně komunity před publikováním přezkoumán. Určíte-li uživatele jako globálního administrátora přezkoumání, bude mu v úložišti uděleno oprávnění ClbGlobalReviewAdministrator.",

		admin_collaboration_connections_admins: "Globální administrátoři",
		admin_collaboration_connections_admins_review: "Globální administrátoři pro revize",
		admin_collaboration_connections_seedlist: "Indexovat obsah knihoven komunity:",
		admin_collaboration_connections_seedlist_hover: "Určete, zda má produkt IBM Connections prolézat knihovny komunity v tomto úložišti a vytvářet vyhledávací index. Vytváření indexu může mít vliv na výkon úložiště.<br><br>Je-li v úložišti nainstalován doplněk Social Collaboration Search Indexing Extensions, je tato volba při výchozím nastavení povolena. Není-li v úložišti doplněk Social Collaboration Search Indexing Extensions nainstalován, bude do úložiště nainstalován poté, co tuto volbu povolíte.",
		admin_collaboration_activity_stream: "Konfigurace události proudu aktivit",
		admin_collaboration_activity_stream_label: "Odesílat informace o události produktu IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Můžete určit, zda chcete aktivně odesílat informace o událostech, jako je vytvoření, zapůjčení, vrácení, komentáře, značky a sdílení dokumentu, do produktu IBM Connections.<br><br><b>Důležité upozornění:</b> Aktivní odesílání oznámení do produktu IBM Connections může mít vliv na výkon úložiště.",

		admin_collaboration_activity_stream_instruction: "Můžete konfigurovat toto úložiště tak, aby aktivně odesílalo informace o událostech, jako jsou komentáře a schválení dokumentu, do produktu IBM Connections. Události jsou zobrazeny na stránce <b>Nejnovější aktualizace</b> v komunitách produktu IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorovat informace o událostech pro konkrétní uživatele a skupiny:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Můžete ignorovat události vygenerované konkrétními uživateli a skupinami, například administrátory nebo systémovými účty, a snížit počet oznámení, která se uživatelům zobrazují. Pokud například provádíte migraci obsahu, může být vhodné určit, že události vygenerované účtem, který je používán pro migraci, mají být ignorovány.",
		admin_collaboration_activity_stream_userid: "Jméno uživatele produktu IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Můžete určit systémový účet, který bude produktem Content Platform Engine používán k ověřování a odesílání informací o událostech do produktu IBM Connections. Uživatel musí být přiřazen k roli <b>trustedExternalApplication</b> v aplikaci Widget Container v produktu IBM Connections.<br><br><b>Tip:</b> Při výchozím nastavení má administrátor produktu IBM Connections odpovídající oprávnění. Jako jméno uživatele můžete použít ID administrátora.",
		admin_collaboration_activity_stream_password: "Heslo uživatele produktu IBM Connections:",

		admin_help_url: "Adresa URL nápovědy pro koncové uživatele:",
		admin_help_url_hover: "<b>Důležité upozornění:</b> Produkt IBM Knowledge Center Customer Installed nebude od verze produktu IBM Content Navigator 3.0.0 aktualizován. Další informace ohledně používání přizpůsobené nápovědy vám poskytne středisko služeb zákazníkům.<br><br>Od verze IBM Content Navigator 3.0.0 bude adresa URL nápovědy pro koncové uživatele odkazovat na produkt IBM Knowledge Center. Adresa URL pro produkt IBM Knowledge Center: http://www.ibm.com/support/knowledgecenter.<br><br>Chcete-li i nadále používat předchozí verzi produktu IBM Knowledge Center Customer Installed, určete adresu URL instance produktu IBM Knowledge Center Customer Installed implementované pomocí nástroje pro konfiguraci a implementaci produktu IBM Content Navigator. Adresa URL musí být přístupná pro klientské počítače. Formát adresy URL: http://název_serveru:číslo_portu/kc.<br><br>Název serveru a číslo portu lze zjistit v souboru console.log v podadresáři KnowledgeCenter/logs instalačního adresáře produktu IBM Content Navigator.",

		admin_help_default: "Použít výchozí nápovědu poskytnutou společností IBM",
		admin_custom_help: "Použít vlastní systém nápovědy",
		admin_help_kc: "Použít vlastní nápovědu v produktu IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Důležité upozornění:</b> Produkt IBM Knowledge Center Customer Installed nebude od verze produktu IBM Content Navigator 3.0.0 aktualizován. Další informace ohledně používání přizpůsobené nápovědy vám poskytne středisko služeb zákazníkům.<br><br>Chcete-li i nadále používat předchozí verzi produktu IBM Knowledge Center Customer Installed, můžete po výběru této volby pokračovat v přidávání obsahu do instance produktu IBM Knowledge Center Customer Installed, kterou jste implementovali dříve.",
		admin_help_taxonomy: "Kód taxonomie:",
		admin_help_taxonomy_hover: "Určete kód taxonomie pro vlastní nápovědu.<br><br>Kód taxonomie pro produkt IBM Content Navigator je SSEUEX. Chcete-li vlastní nápovědu zobrazit v produktu IBM Knowledge Center Customer Installed pod jiným názvem produktu, je třeba přidat jedinečný kód taxonomie do souboru KC_taxonomy.ditamap v adresáři KnowledgeCenter/usr/taxonomy v instalačním adresáři produktu IBM Content Navigator.",
		admin_help_context: "Kontext nápovědy:",
		admin_help_context_hover: "Určete kontext pro vlastní nápovědu.<br><br>Nápověda pro produkt IBM Content Navigator je umístěna v adresáři KnowledgeCenter/usr/content/com.ibm.usingeuc.doc instalačního adresáře produktu IBM Content Navigator. Kontext výchozí nápovědy je com.ibm.usingeuc.doc. Chcete-li poskytovat vlastní nápovědu, přidejte obsah do nového podadresáře v adresáři KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Úvodní stránka:",
		admin_help_welcome_hover: "Určete název tématu, které chcete použít jako úvodní stránku, když uživatelé přejdou k nápovědě. Je třeba vytvořit soubor vlastností, který bude určovat umístění úvodní stránky, a přidat příslušný soubor vlastností do adresáře KnowledgeCenter/usr/conf instalačního adresáře produktu IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Soubor JSON přípon typů MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Ověřte název souboru JSON a úplnou cestu k souboru. Soubor může být obecným souborem v systému souborů, nebo adresou URL, která odkazuje na soubor JSON. <br><br>Obsahem souboru JSON je pole pro definice typů MIME. <br><br>Definice typu MIME zahrnuje čtyři klíče: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". První dva klíče (\"mimeTypes\", \"extensions\") jsou povinné a může se jednat o pole řetězců oddělených čárkou (\",\"). Poslední dva klíče (\"fileType\", \"iconName\") jsou volitelné. <br><br>Příklad: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfigurace správce úloh",
		admin_taskmanager_service: "Služba správce úloh:",
		admin_taskmanager_service_hover: "Určete, zda chcete prostřednictvím služby správce úloh vytvářet a spouštět asynchronní úlohy. <br><br>Změníte-li toto nastavení, je třeba restartovat webovou aplikaci produktu IBM Content Navigator, aby se změny projevily.",
		admin_taskmanager_url: "Adresa URL služby správce úloh:",
		admin_taskmanager_url_hover: "Určete adresu URL, jejímž prostřednictvím mohou jiné aplikace komunikovat se službou správce úloh. Formát adresy URL: http://název_serveru:číslo_portu/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Adresář protokolu správce úloh:",
		admin_taskmanager_logdirectory_hover: "Při výchozím nastavení jsou soubory protokolu pro službu správce úloh zapisovány do téhož adresáře jako soubory protokolu webového aplikačního serveru. <br><br>Chcete-li informace protokolování zapisovat do jiného adresáře na serveru IBM Content Navigator, určete úplnou cestu k adresáři, do kterého chcete ukládat soubory protokolu vygenerované komponentou správce úloh. <br><br>Změníte-li toto nastavení, je třeba restartovat webovou aplikaci produktu IBM Content Navigator, aby se změny projevily.",
		admin_taskmanager_heartBeatMonitor: "Monitorování prezenčního signálu klastru",
		admin_taskmanager_heartBeatMonitor_hover: "Pouze pro klastrovaná prostředí s vysokou dostupností. Povolíte-li tuto volbu, služba správce úloh bude přesměrovávat úloh z uzlů, které jsou aktuálně nedostupné, do uzlů, které jsou aktuálně spuštěny. <br><br>Změníte-li toto nastavení, je třeba restartovat webovou aplikaci produktu IBM Content Navigator, aby se změny projevily.",

		admin_syncserver_title: "Konfigurace synchronizačního serveru",
		admin_syncserver_enable: "Služby synchronizace:",
		admin_syncserver_enable_hover: "Určete, zda uživatelé, kteří přistupují k této pracovní ploše, mají mít možnost synchronizovat své položky mezi pracovními stanicemi a mobilními zařízeními.<br><br><b>Důležité upozornění:</b> Chcete-li používat tuto funkci, je třeba dokončit také následující úlohy:<ul><li>Určete volbu <b>Veřejná adresa URL služeb synchronizace</b> v části <b>Služby synchronizace</b> nástroje pro administraci.</li><li>Přidejte na tuto pracovní plochu úložiště, pro které jsou povoleny služby synchronizace.</li></ul>Pokud zakážete tuto volbu, ale přidáte na tuto pracovní plochu úložiště s povolenými službami synchronizace, bude příslušné nastavení pro úložiště ignorováno.",
		admin_mobileqr_enable: "Zobrazit kód QR produktu IBM Navigator na přihlašovací stránce:",
		admin_mobileqr_enable_hover: "Tuto volbu povolte, pokud chcete zobrazit kód QR pro mobilní aplikaci IBM Navigator na přihlašovací stránce webového klienta.<br><br>Když uživatel naskenuje tento kód QR, dostane se do příslušného úložiště aplikací pro své zařízení, kde může stáhnout mobilní aplikaci IBM Navigator.",

		admin_streamlineservice_enable: "Služba úprav:",
		admin_streamlineservice_enable_hover: "Pouze uživatelé produktu FileNet P8. Tuto volbu povolte, chcete-li uživatelům pracovní plochy umožnit snadné přidávání a úpravy dokumentů z nativních aplikací v příslušných pracovních stanicích. <br><br>Abyste mohli použít toto nastavení, musíte také: <ul><li>Povolit službu úprav v jednom nebo několika úložištích, které jsou přidružené k této pracovní ploše</li><li>V pracovních stanicích uživatelů nainstalovat klienta IBM Content Navigator Edit</li></ul>",

		admin_repository_general_instructions: "Parametry, systémové vlastnosti, složky a další nastavení lze konfigurovat až po připojení k úložišti.",
		admin_repository_system_instructions: "Pro dokumenty a složky v úložišti určete vlastnosti, které se mají zobrazit.",

		admin_desktop_general_create_instructions: "Pracovní plocha určuje možnosti uživatele při přihlášení k webovému klientovi. Po vytvoření pracovní plochy můžete odeslat adresu URL pracovní plochy uživatelům, kteří k ní pak mohou přistupovat.",
		admin_desktop_admin_instructions: "S webovým klientem je poskytována pracovní plocha administrátora, která umožňuje administrativním uživatelům vytvořit webového klienta. Tato pracovní plocha má přístup ke všem úložištím, které jsou konfigurovány pro webového klienta.",
		admin_desktop_repositories_instructions: "Určete úložiště, k nimž mají mít uživatelé přístup prostřednictvím této pracovní plochy. Úložiště je nutné před přidáním na pracovní plochu konfigurovat.<br><br><b>Tip:</b> Při konfigurování rozvržení pracovní plochy můžete omezit seznam úložišť, která jsou pro každou funkci k dispozici.",
		admin_desktop_menus_instructions: "Určete, ke kterým nabídkám mají mít uživatelé z této pracovní plochy přístup. Nabídky definují akce, které jsou k dispozici v závislosti na vybraných funkcích rozhraní.<br><br><b>Tip:</b> Obsah nabídek lze přizpůsobit v oddílu <b>Nabídky</b> nástroje pro administraci nebo můžete vytvořit vlastní typy nabídky vytvořením modulů plug-in.",

		admin_desktop_no_repositories: "Nejsou konfigurována žádná úložiště.",

		admin_desktop_id_hover: "ID pracovní plochy je zahrnuto v adrese URL webového klienta a určuje pracovní plochu, která se otevře při přihlášení uživatele k webovému klientovi. Toto ID musí být jedinečné a po uložení pracovní plochy je nelze změnit.<br><br>ID může obsahovat pouze alfanumerické znaky a rozlišují se velká a malá písmena.",
		admin_desktop_id_disabled_hover: "ID pracovní plochy nelze změnit. Chcete-li použít jiné ID, je nutné vytvořit novou pracovní plochu.",
		admin_desktop_name_hover: "Název pracovní plochy nesmí obsahovat následující znaky: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Konfigurace může obsahovat pouze jednu výchozí pracovní plochu.",

		admin_repository_id_disabled_hover: "ID úložiště nelze změnit. Chcete-li použít jiné ID, je nutné vytvořit nové připojení k úložišti.",
		admin_printService_enable: "Tisknout pomocí tiskové služby IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Pokud se rozhodnete povolit tiskovou službu IBM Daeja ViewONE, dokumenty se převedou na formát PDF a tisk lze dokončit pomocí libovolného webového prohlížeče.<br><br>Pokud se rozhodnete zakázat tiskovou službu IBM Daeja ViewONE, budete omezeni na tisk dokumentů pouze ve webových prohlížečích, které podporují aplety jazyka Java. Některé webové prohlížeče nepodporují aplety jazyka Java, a proto nepodporují tisk pomocí apletů.<br><br>Přečtěte si v dokumentaci o podporovaných prohlížečích.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Domovský adresář uživatele",
		admin_file_tracking_doc_directory_my_documents: "Adresář dokumentů uživatele",
		admin_file_tracking_doc_directory_qp: "Úplná cesta",
		admin_file_tracking_section_tile: "Konfigurace sledování souborů",
		admin_file_tracking_home_path: "Domovská cesta",
		admin_file_tracking_my_documents: "Moje dokumenty",
		admin_file_tracking_exact_path: "Úplná cesta:",
		admin_file_tracking_qp: "Úplná cesta",
		admin_file_tracking_ev: "Proměnná prostředí",
		admin_file_tracking_ev_us: "Vlastní proměnná prostředí ",
		admin_file_tracking_del_local_copy: "Odstranit lokální kopii:",
		admin_file_tracking_yes: "Ano",
		admin_file_tracking_no: "Ne",
		admin_file_tracking_del_local_copy_rt_state_editable: "Povolit uživatelům přepsání tohoto nastavení",
		admin_file_tracking_del_local_copy_rt_state1: "Ano",
		admin_file_tracking_del_local_copy_rt_state2: "Ne",
		admin_file_Tracking_label: "Sledování souborů:",
		admin_file_Tracking_disable: "Zakázat",
		admin_file_Tracking_enable: "Povolit",
		admin_file_tracking_label_hover_help: "Sledování souborů využívá aplet k zapůjčování a stahování dokumentů do konkrétního adresáře v počítačích uživatelů. Tento aplet navíc umožňuje produktu IBM Content Navigator vyhledávat dokumenty v počítačích uživatelů, když uživatelé vrátí dokumenty.",
		admin_file_tracking_doc_directory: "Umístění úložiště:",
		admin_file_tracking_open_file: "Otevřít soubor automaticky",
		admin_file_Tracking_append_qualified_path: "Připojit adresář",
		admin_file_Tracking_append_qualified_path_hover_help: "Můžete připojit adresář na konec proměnné prostředí, chcete-li dokumenty ukládat do konkrétního podadresáře. <br/><br/>Můžete například určit, že dokumenty mají být ukládány do adresáře <i>PodnikovéDokumenty</i> v rámci domovského adresáře uživatele.",
		admin_file_Tracking_append_ev: "Připojit proměnnou prostředí",
		admin_file_Tracking_append_ev_hover_help: "Můžete připojit proměnnou prostředí, chcete-li, aby byly dokumenty ukládány do dynamicky určovaného adresáře, například do adresáře uživatele.<br/><br/>Můžete například určit, že dokumenty budou ukládány do podadresáře <i>jméno_uživatele</i> ve sdíleném síťovém adresáři. ",
		admin_file_tracking_doc_directory_hover_help: "Určete, kde mají být dokumenty uloženy, jsou-li zapůjčeny a staženy.<br/><br/> <b>Tip:</b> Chcete-li dokumenty ukládat do domovského adresáře uživatele nebo výchozího adresáře dokumentů, vyberte volbu <b>Proměnná prostředí</b>, jež obsahuje předdefinované proměnné odkazující na příslušná umístění.",
		admin_file_tracking_qualified_path_hover_help: "Můžete určit adresář nebo síťový adresář, do kterého mají být ukládány dokumenty, s použitím odpovídající adresářové struktury pro příslušný operační systém Windows nebo Mac. <ul><li>V případě systému Windows uveďte v cestě písmeno označující jednotku. Příklad: C:\\Podnikové dokumenty.</li><li>V případě sdíleného síťového adresáře zadejte cestu ve formátu \\\\název_serveru\\adresář.</li></ul><br/><b>Důležité upozornění:</b> Chcete-li použít tuto volbu, musí být možné vytvořit určenou adresářovou strukturu ve všech klientských pracovních stanicích v příslušném prostředí.",
		admin_file_tracking_environment_variable_path_hover_help: "Můžete určit adresář nebo síťový adresář, do kterého mají být ukládány dokumenty, s použitím odpovídajících proměnných prostředí pro příslušný operační systém Windows nebo Mac. <br/><br/>Volba <b>Domovský adresář uživatele</b> určuje ukládání dokumentů v následujícím adresáři:<br/><ul><li>Windows: C:\\Users\\jméno_uživatele</li><li>Mac: /Users/jméno_uživatele</li></ul><br/>Volba <b>Adresář dokumentů uživatele</b> určuje ukládání dokumentů v následujícím adresáři:<br/><ul><li>Windows: C:\\Users\\jméno_uživatele\\Documents</li><li>Mac: /Users/jméno_uživatele/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Můžete určit, zda má být při přidání nebo vrácení dokumentů uživateli do úložiště odstraněna lokální kopie dokumentu.<br/><br/>Odstraněním lokální kopie lze dosáhnout následujících výsledků:<br/><ul><li>Vynucení shody se zásadami IT</li><li>Zajištění, že uživatelé pracují s nejnovějšími verzemi dokumentů</li></ul><br/><b>Omezení:</b> Toto nastavení není použito, pokud uživatelé přidávají dokumenty přetažením pomocí myši.<br/><br/>V případě produktu IBM Content Navigator for Microsoft Office je třeba vybrat volbu <b>Odstranit lokální soubory v případě, že uživatelé přidají nebo vrátí dokument či zruší zapůjčení dokumentu</b> v části <b>Konfigurace produktu Office</b> na pracovní ploše.",
		admin_file_tracking_open_file_hover_help: "Toto nastavení potlačuje veškeré předvolby manipulace s dokumenty, které jsou konfigurovány ve webových prohlížečích uživatelů. </br></br><b>Omezení:</b> Toto nastavení není používáno produktem IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Přepsat lokální kopii:",
		admin_file_tracking_over_write_file_hover_help: "Můžete určit, zda má být při zapůjčení dokumentů uživateli z úložiště přepsána lokální kopie dokumentu. <br/><br/>Přepsáním lokální kopie lze dosáhnout následujících výsledků:<br/><ul><li>Zajištění, že uživatelé pracují s nejnovějšími verzemi dokumentů</li><li>Zabránění zobrazení výzvy uživatelům v případě existence lokální kopie</li></ul> </br></br><b>Omezení:</b> Toto nastavení není používáno produktem IBM Content Navigator for Microsoft Office, vyberete-li volbu <b>Povolit uživatelům přepsání tohoto nastavení</b>.",
		admin_file_tracking_over_write_file_state_editable: "Povolit uživatelům přepsání tohoto nastavení",
		admin_file_tracking_inline_help: "Sledování souborů zvyšuje efektivitu procesu zapůjčování souborů z úložiště a jejich vracení do úložiště. Umožňuje rovněž spravovat způsob ukládání dokumentů v počítačích uživatelů. <br/><br/>Sledování souborů kromě toho umožňuje sledovat dokumenty v několika komponentách produktu IBM Content Navigator, jako je webový klient a produkt IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Před připojením k úložišti je třeba povolit typ ověřování Standardní ověřování nebo Ověřování serveru.",
		admin_box_use_oauth: "Typ ověřování:",
		admin_box_use_oauth_hover: "Typ Standardní ověřování nebo Ověřování serveru vyberte v produkčním prostředí, pokud z produktu IBM Content Navigator poskytujete přístup k dokumentům produktu Box. Určete položky client_id a client_secret ověřování OAuth2 přidružené k této implementaci produktu IBM Content Navigator. Tyto hodnoty lze získat z produktu Box po vytvoření aplikace Box pro příslušný server IBM Content Navigator.<br/><br/>Ve vývojovém prostředí vyberte typ Ověřování pro vývojáře. Vývojáři se mohou přihlásit k produktu Box s použitím svého účtu vývojáře a vygenerovat token pro vývojáře, který má platnost 60 minut. Tokeny pro vývojáře umožňují vývojářům přihlásit se k produktu Box s použitím tokenu pro vývojáře jako hesla pro kterékoli ID uživatele.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Poddoména podnikového účtu produktu Box:",
		admin_box_share: "ID připojení správce úloh:",
		admin_box_share_hover: "Pro kopírování prostřednictvím produktu Box nebo sdílení prostřednictvím produktu Box správce úloh používá ID administrativního uživatele ke spouštění úloh na pozadí, jež upravují úložiště.<br/><br/>Klepněte na volbu Nastavit a přihlaste se k produktu Box s použitím platného účtu administrátora produktu Box.<br/><br/>Pokud konfigurujete pracovní plochu výběrem tohoto úložiště produktu Box jako úložiště pro sdílené soubory, je třeba určit administrativního uživatele produktu Box, který má v produktu Box k dispozici neomezený úložný prostor.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Otevřít soubor automaticky",
		file_tracking_runtime_overwrite_hover_help: "Pokud tuto volbu nevyberete a v lokálním systému souborů existuje dokument se stejným názvem, bude dokument zapůjčen, nebude však stažen, neprovedete-li některou z následujících akcí:<br/><ul><li> Stažení dokumentu do podadresáře výchozího adresáře. Vyberete-li podadresář, lze umístění dokumentu sledovat webovou aplikací.</li><li>Přejmenování dokumentu, který stahujete. Přejmenování dokumentu zabrání konfliktu názvů souborů.</li></ul>",
		open_file: "Otevřít soubor automaticky",
		over_write_file: "Přepsat lokální kopii",
		checkout_and_download_file: "Zapůjčit a stáhnout dokumenty",
		download_to_local_directory: "Stáhnout do:",
		checkout_and_download_button_title: "Zapůjčit a stáhnout",
		checkout_without_java_confirmation_dialog: "Soubor nelze stáhnout a sledovat pomocí funkce sledování souborů.",
		browse_for_directory: "Procházet",
		selected_documents: "Vybrané dokumenty",

		checkout_without_java_confirmation_text: "K tomuto problému může dojít z následujících příčin:<br/><ul><li>Ve vaší pracovní stanici není nainstalováno běhové prostředí Java (JRE).</li><li>Modul plug-in prostředí Java není povolen ve webovém prohlížeči.</li><li>Webový prohlížeč nepodporuje technologii Java.</li></ul><br/><br/>Chcete-li tento problém odstranit, proveďte příslušnou akci:<br/><br/><ul><li>Chcete-li pokračovat ve stahování souboru bez povoleného sledování souborů, klepněte na tlačítko OK.</li><li>Chcete-li soubor stáhnout s povoleným sledováním souborů, zrušte stahování a ověřte, že je v pracovní stanici nainstalováno prostředí JRE a že je modul plug-in prostředí Java povolen ve webovém prohlížeči.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokument byl zapůjčen a stažen, nelze jej však otevřít.",
		runtime_file_tracking_open_error_explanation: "Operační systém nainstalovaný v pracovní stanici nepodporuje soubory tohoto typu.",
		runtime_file_tracking_open_error_userResponse: "Chcete-li problém odstranit, proveďte jednu z následujících akcí:<br/><br/><ul><li>Potřebujete-li s dokumentem pracovat, otevřete webového klienta z jiné pracovní stanice s jiným operačním systémem.</li><li>Potřebujete-li dokument pouze zobrazit, klepněte na něj ve webovém klientu pravým tlačítkem myši a vyberte volbu Otevřít.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokument byl zapůjčen, nebyl však stažen.",
		runtime_file_tracking_save_file_error_explanation: "V lokálním systému souborů existuje dokument se stejným názvem, nebyl však přepsán. ",
		runtime_file_tracking_save_file_error_userResponse: "Chcete-li soubor stáhnout z úložiště, je třeba přepsat lokální kopii dokumentu při stahování dokumentu z úložiště.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokument byl zapůjčen, nelze jej však stáhnout či otevřít.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "V lokálním systému souborů existuje dokument se stejným názvem. Soubor však nebyl přepsán, což brání stažení a otevření dokumentu v úložišti.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Chcete-li soubor stáhnout z úložiště, je třeba přepsat lokální kopii dokumentu při stahování dokumentu z úložiště.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokument nelze stáhnout.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Proměnná prostředí ${0}, která je vyžadována pro sledování souborů, není v klientském počítači definována.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Vyřešení problému:<br/><br/><ul><li>Přidejte proměnnou prostředí ${0} mezi proměnné prostředí operačního systému.</li><li>Odhlaste se od webového klienta a zavřete webový prohlížeč. Poté se opět přihlaste.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Dokument nelze stáhnout a sledovat prostřednictvím apletu pro sledování souborů. ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Adresář ${0}, který je vyžadován pro sledování souborů, není definován a nelze jej vytvořit.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Chcete-li tento problém odstranit, proveďte příslušnou akci:<br/><br/><ul><li>Klepněte na volbu Procházet a vyberte jiný adresář v klientském počítači. Vyberete-li tuto volbu, nebude soubor sledován.</li><li>Obraťte se na administrátora systému a požádejte jej o určení jiného adresáře používaného pro sledování souborů. Tento postup může být potřebný například v situaci, kdy příslušný adresář je určen pro operační systém Windows, avšak vy používáte systém Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "V případě přístupu k této pracovní ploše ze zařízení s různými operačními systémy lze snížit pravděpodobnost výskytu problémů provedením jedné z následujících akcí:<br/><br/><ul><li>Určete umístění úložiště v klientských počítačích pomocí proměnných prostředí.</li><li>Vytvořte různé pracovní plochy pro uživatele jednotlivých typů zařízení. Můžete například vytvořit pracovní plochy pro uživatele s operačním systémem Windows a pracovní plochu pro uživatele s operačním systémem Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Požadavek nelze zpracovat.",
		runtime_file_tracking_generic_error_explanation: "V apletu pro sledování souborů došlo k chybě.",
		runtime_file_tracking_generic_error_userResponse: "Obraťte se na administrátora systému se žádostí o pomoc.",
		runtime_file_tracking_generic_error_adminResponse: "Otevřete konzolu Java a zkuste požadavek odeslat znovu. Podrobnosti o chybě jsou zobrazeny v konzole Java.<br/><br/>Konzola Java je přístupná prostřednictvím ovládacích panelů (Windows) nebo předvoleb systému (Macintosh).",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Požadavek nelze zpracovat.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Následující soubory byly přidány do úložiště, nebyly však odstraněny z lokálního systému souborů: ${0}. Tento stav obvykle nastává, pokud jsou soubory otevřeny nebo jsou používány jinou aplikací. V případě potřeby můžete soubory odstranit ručně.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokument nelze stáhnout.",
		runtime_file_tracking_ioexception_error_explanation: "Dokument nelze stáhnout.",
		runtime_file_tracking_ioexception_userResponse: "Je možné, že nemáte odpovídající oprávnění pro zápis do následujícího adresáře: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Ověřte, že máte oprávnění k zápisu do určeného adresáře. Nemáte-li oprávnění k zápisu do určeného adresáře, obraťte se na administrátora systému.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Požadavek nelze zpracovat.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "K této chybě může dojít z následujících důvodů:<br/><br/><ul><li>Používáte prohlížeč Safari v systému Mac OS a prostředí Java je spuštěno v zabezpečeném režimu.</li><li>Nemáte oprávnění pro čtení/zápis k adresáři, který je určen v konfiguraci sledování souborů pro příslušnou pracovní plochu.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Můžete pokračovat v používání produktu IBM Content Navigator bez funkce sledování souborů nebo můžete provést následující kroky a odstranit problém:<br/><br/><ol><li>Povolte v prohlížeči Safari nezabezpečený režim prostředí Java.</li><li>Zobrazí-li se dotaz, zda webu produktu IBM Content Navigator důvěřovat, klepněte na volbu <b>Trust</b> (Důvěřovat). Po načtení stránky povolte v prohlížeči Safari nezabezpečený režim prostředí Java.</li></ol><br/><br/>Je-li prohlížeč Safari konfigurován správně, odstraňte problém provedením následujících kroků:<br/><br/><ol><li>Ověřte, že máte oprávnění pro čtení/zápis k adresáři, který je určen v konfiguraci sledování souborů pro příslušnou pracovní plochu.</li><li>Nemáte-li oprávnění pro čtení/zápis k příslušnému adresáři, upravte oprávnění k adresáři.</li><li>Nemůžete-li upravit svá oprávnění k adresáři, musí administrátor změnit adresář konfigurovaný pro sledování souborů nebo vám musí udělit přístup k pracovní ploše, která má konfigurován jiný adresář sledování souborů.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Požadavek nelze zpracovat.",
		runtime_file_tracking_java__notfound_error_explanation: "Tento problém a chyba se zpravidla vyskytuje v následujících situacích:<br/><br/><ul><li>Ve vaší pracovní stanici není přítomno či povoleno běhové prostředí Java (JRE).</li><li>Verze prostředí JRE v pracovní stanici není kompatibilní s verzí produktu IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Můžete pokračovat v používání produktu IBM Content Navigator bez funkce sledování souborů nebo můžete provést následující kroky a odstranit problém s prostředím JRE:<br/><br/><ol><li>Ověřte, že je v pracovní stanici instalováno prostředí JRE.</li><li>Ověřte kompatibilitu verze prostředí JRE v pracovní stanici s verzí produktu IBM Content Navigator. Seznam podporovaných verzí je uveden na serveru softwarové podpory společnosti IBM v <i>dokumentu popisujícím hardwarové a softwarové předpoklady pro produkt IBM Content Navigator</i>.</li><li>Ověřte, že je v pracovní stanici prostředí JRE povoleno.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Požadavek nelze zpracovat.",
		runtime_file_tracking_security_error_explanation: "Nemáte oprávnění pro čtení/zápis k adresáři, který je určen v konfiguraci sledování souborů pro příslušnou pracovní plochu.",
		runtime_file_tracking_security_error_userResponse: "Můžete pokračovat v používání produktu IBM Content Navigator bez funkce sledování souborů nebo můžete ve spolupráci s administrátorem systému provést následující kroky:<ol><li>Ověřte, že máte oprávnění pro čtení/zápis k adresáři, který je určen v konfiguraci sledování souborů pro příslušnou pracovní plochu. </li><li>Nemáte-li oprávnění pro čtení/zápis k příslušnému adresáři, upravte oprávnění k adresáři.</li><li>Nemůžete-li upravit svá oprávnění k adresáři, musí administrátor změnit adresář konfigurovaný pro sledování souborů nebo vám musí udělit přístup k pracovní ploše, která má konfigurován jiný adresář sledování souborů.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Byly staženy následující dokumenty: ${0}.",

		admin_file_tracking_inline_help: "Sledování souborů zvyšuje efektivitu procesu přidávání dokumentů, zapůjčování dokumentů z úložiště a jejich vracení do úložiště. Umožňuje rovněž spravovat způsob ukládání dokumentů v počítačích uživatelů.<br/><br/>Sledování souborů kromě toho umožňuje sledovat dokumenty v několika komponentách produktu IBM Content Navigator, jako je webový klient a produkt IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID nabídky nesmí začínat předponou \"Default\". \"Default\" je vyhrazená předpona pro identifikátory nabídek.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID může obsahovat pouze alfanumerické znaky a rozlišují se velká a malá písmena.",
		admin_repository_id_hover: "ID úložiště je zahrnuto v adresách URL webové klienta, v oblíbených položkách a v e-mailových odkazech a určuje úložiště k přihlášení. Toto ID musí být jedinečné a po uložení úložiště je nelze změnit.<br><br>ID může obsahovat pouze alfanumerické znaky a rozlišují se velká a malá písmena.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Název nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID plochy nesmí obsahovat mezery ani tyto znaky: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Název plochy nesmí obsahovat následující znaky: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Zobrazovaný název nesmí obsahovat následující znaky: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Zadejte název úložiště, který se má zobrazit uživatelům ve webovém klientovi.<br><br>Název nesmí obsahovat následující znaky: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Zadejte název hostitele nebo adresu IP serveru Content Manager OnDemand, k němuž se chcete připojit (například server.id.com).",
		admin_server_p8_name_hover: "Zadejte adresu URL serveru Content Engine nebo Content Platform Engine. V adrese URL je rozlišována velikost písmen a má následující formát:<br><br><ul><li>Na serveru WebSphere Application Server se jedná o adresu iiop://název_hostitele:číslo_portu/FileNet/Engine. V základních implementacích je výchozí číslo portu 2809.</li><li>Na serveru WebLogic Server se jedná o adresu t3://název_hostitele:číslo_portu/FileNet/Engine. Výchozí číslo portu je 7001.</li></ul><br><br>U konfigurací produktů Content Engine a Content Platform Engine s vysokou dostupností používejte adresu URL pro přenos objektů EJB s vysokou dostupností bez předpony cemp:. ",
		admin_server_p8_protocol_hover: "Určete protokol, který má být použit ke komunikaci s produktem Content Engine.",
		admin_server_cm_name_hover: "Zadejte lokální název katalogu databáze Content Manager nebo název připojení indexového serveru. Tento název představuje hodnotu zadanou pro proměnnou ICMSERVER.",
		admin_repository_cmis_hover: "Zadejte ID úložiště, k němuž se chcete připojit. ID každého úložiště v prostředí CMIS je uvedeno v dokumentu služby AtomPub. <br/><br/><b>Rada:</b> Dále můžete zadat hvězdičku (*) a připojit se k prvnímu nebo jedinému úložišti, které je definované v dokumentu služby Atompub.",
		admin_url_cmis_hover: "Formát adresy URL se liší podle poskytovatele servisu. Chcete-li získat další informace o adrese URL, přečtěte si dokumentaci produktu CMIS nebo se obraťte na administrátora serveru CMIS.",
		admin_repcfg_cmis_status_columns_hover: "Určete stavy položek, pro které chcete zobrazit ikony. Ikony stavu se zobrazují u dokumentů v seznamu obsahu.",
		admin_port_hover: "Zadejte číslo portu TCP/IP, na kterém naslouchá server OnDemand produktu Content Manager. Výchozí hodnota je 1445.",
		admin_unified_searches_hover: "Určete, zda mají uživatelé mít možnost uložit  v tomto úložišti vyhledávání ve více úložištích.<br/><br/>Pokud tuto volbu nepovolíte, uživatelé budou moci i nadále vytvářet vyhledávání ve více úložištích spouštěná pro toto úložiště. Můžete zabránit uživatelům vytvářet vyhledávání ve více úložištích na úrovni pracovní plochy.<br/><br/>Pokud povolíte vyhledávání ve více úložištích, nástroj IBM Content Navigator vytvoří v příslušném úložišti datový model vyhledávání ve více úložištích.<br/><br/>Před povolením této volby musíte pro produkt IBM FileNet Content Manager připojit úložiště jako administrátor produktu Content Engine.",
		admin_unified_searches_cm_hover: "Určete, zda mají uživatelé mít možnost uložit  v tomto úložišti vyhledávání ve více úložištích.<br/><br/>Pokud tuto volbu nepovolíte, uživatelé budou moci i nadále vytvářet vyhledávání ve více úložištích spouštěná pro toto úložiště. Můžete zabránit uživatelům vytvářet vyhledávání ve více úložištích na úrovni pracovní plochy.<br/><br/>Pokud povolíte vyhledávání ve více úložištích, nástroj IBM Content Navigator vytvoří v příslušném úložišti datový model vyhledávání ve více úložištích.",
		admin_max_results_hover: "Určete, zda chcete omezit počet výsledků vrácených hledáním. Jestliže počet výsledků hledání neomezíte a funkce hledání vrátí velký počet výsledků, může dojít k problémům s výkonem.",
		admin_timeout_hover: "Zadejte dobu (v sekundách), po kterou může probíhat hledání v úložišti. Pokud hledání není během určené doby dokončeno, webový klient požadavek zruší. Doporučený časový limit je 60 sekund.",
		admin_object_store_hover: "Zadejte databázi objektů, ke které se chcete připojit na serveru Content Engine. Symbolický název získáte z administrativní konzoly produktu Content Platform Engine.",
		admin_object_store_display_name_hover: "Zobrazovaný název databáze objektů je vyžadován, pokud chcete používat sledy prací IBM FileNet P8. Zobrazovaný název databáze objektů lze získat z administrativní konzoly produktu Content Platform Engine.",
		admin_all_searches_hover: "Určete, zda má být omezen počet hledání zobrazených v části <b>Všechna hledání</b>, když uživatelé provádějí hledání v úložišti. Neomezíte-li počet hledání, může docházet k problémům s výkonem, pokud úložiště obsahuje velké množství uložených hledání.",

		admin_text_desktop: "Pracovní plocha",
		admin_text_repository: "Úložiště",
		admin_text_plugin: "Modul plug-in",
		admin_text_theme: "Motiv",
		admin_text_menu: "Nabídka",
		admin_text_reason_code: "Důvod redakce",
		admin_text_redactions: "Redakce",
		admin_text_viewer_mapping: "Mapování prohlížečů",
		admin_text_mobile_feature: "Funkce pro mobilní zařízení",
		admin_test_interface_text: "Text rozhraní",
		admin_text_interface_text_locale: "Lokalizovaný text rozhraní",
		admin_text_icon_status: "Ikona stavu",
		admin_text_icon: "Ikona",
		admin_text_file_type: "Typ souboru",
		admin_text_viewer: "Prohlížeč",
		admin_text_desktop_access: "Přístup k pracovní ploše",
		admin_text_mapped_properties_for_office: "Mapované vlastnosti pro produkt Microsoft Office",
		admin_text_desktop_features: "Funkce pracovní plochy",
		admin_text_unknown: "Neznámé",
		admin_folder_instruction: "Zadejte vlastnosti, které se mají zobrazit pro dokumenty a složky v seznamu obsahu pro uživatele při procházení. Dále můžete určit pořadí, v jakém jsou vlastnosti uvedeny.",
		admin_search_instruction: "Určete, které volby jsou při výchozím nastavení vybrány, když uživatelé vytvoří hledání.",
		admin_repository_office_conf_class_instruction: "Pokud ve svém prostředí máte v klientských počítačích nainstalován nástroj IBM Content Navigator for Microsoft Office, můžete určit, jak jsou dokumenty zpracovávány při přidání či zařazení do úložiště.",
		admin_repository_office_conf_instruction: "Namapujte vlastnost dokumentů Microsoft Office na vlastnosti, které jsou v tomto úložišti definovány.<br/><br/>Pokud je pro pracovní plochu, ke které je přidruženo toto úložiště, povoleno mapování vlastností, vlastnosti nastavené pro dokumenty Microsoft Office se používají k naplnění vlastností úložiště, když uživatel přidá dokument z produktu IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mapování vlastnosti",
		admin_repository_office_conf_prop_mapping_title1: "Integrace s produktem MS Office",
		admin_office_conf_instruction: "Při instalaci produktu IBM Content Navigator for Microsoft Office v počítačích klienta můžete definovat způsob integrace produktu IBM Content Navigator s aplikacemi Microsoft Office.<br /><br /><b>Důležité:</b> Pokud vyberete volbu <b>Mapování vlastností Office</b>, je třeba také konfigurovat mapování vlastností pro každé úložiště přidružené k této pracovní ploše. Mapování vlastností pro každé úložiště v daném prostředí můžete konfigurovat na kartě <b>Vlastnosti aplikací Office</b>.",
		admin_desktop_workflows_instruction: "<b>Pouze systémy IBM FileNet P8:</b> Určete aplikační prostory, které se zobrazí na této pracovní ploše. Pořadí vybraných aplikačních prostorů určuje pořadí, ve kterém se aplikační prostory zobrazí ve webovém klientovi.<br><br><b>Tip:</b> Zobrazovaný název aplikačních prostorů lze změnit zadáním nových názvů do sekce <b>Popisky</b> v nástroji pro administraci.",
		admin_search_filtered_properties_instruction: "Určete vlastnosti, podle kterých mohou uživatelé vyhledávat. Vlastnosti, které chcete vyloučit z uživatelského hledání, můžete skrýt.",
		admin_search_filtered_operators_instruction: "Zadejte operátory, které jsou k dispozici pro uživatele při hledání podle konkrétního datového typu (například kalendářní datum nebo celé číslo). Operátory, které nechcete dát uživatelům k dispozici, můžete skrýt.",
		admin_search_default_search_results_instruction: "Zadejte vlastnosti, které se mají zobrazit pro dokumenty a složky ve výsledcích vyhledávání. Vlastnosti, které chcete z výsledků hledání vyloučit, můžete skrýt.",
		admin_search_default_search_results_p8_cmis_instruction: "Zadejte vlastnosti, které se mají zobrazit pro dokumenty ve výsledcích vyhledávání. Vlastnosti, které chcete z výsledků vyloučit, můžete skrýt.",

		admin_datetimeOp: "Datum a čas",
		admin_floatOp: "Číslo s pohyblivou řádovou čárkou",
		admin_integerOp: "Celočíselná hodnota",
		admin_stringOp: "Řetězec",
		admin_binaryOp: "Binární",
		admin_objectOp: "Předmět",
		admin_idOp: "ID",
		admin_userOp: "Uživatel",
		admin_booleanOp: "Logická hodnota",

		admin_string: "Řetězec",
		admin_long: "Dlouhý",
		admin_date: "Datum",
		admin_double: "Dvojitý",
		admin_object: "Předmět",
		admin_guid: "GUID",
		admin_boolean: "Logická hodnota",

		admin_repcfg_heading: "Výchozí chování tohoto úložiště můžete přepsat nastavením konfiguračních parametrů.",
		admin_repcfg_heading_od: "Výchozí chování tohoto úložiště můžete přepsat nastavením konfiguračních parametrů.<br /><br /><b>Důležité:</b> Chcete-li webového klienta používat společně s produktem Content Manager OnDemand, je třeba rovněž určit hodnoty parametrů na kartě <b>Content Manager OnDemand</b> v části <b>Nastavení</b>, které se vztahují na všechna úložiště produktu Content Manager OnDemand, k nimž se připojíte.",
		admin_repcfg_teamspaces: "Správa týmových prostorů:",
		admin_repcfg_enable: "Povolit",
		admin_repcfg_disable: "Zakázat",

		admin_repcfg_deliver_redacted_pdf_files_as: "Soubory PDF po redakci budou dodány jako:",
		admin_repcfg_burn_pdf_to_pdf: "Soubory PDF",
		admin_repcfg_burn_pdf_to_tiff: "Soubory TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Soubor PDF po použití redakce založené na rolích lze dodat do klienta v různých formátech souboru. Pokud se změní formát souboru, změní se i přípona souboru a typ MIME.<br><br>Pokud je například soubor PDF dodán jako soubor TIFF, přípona souboru se změní na příponu .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Povolit uživatelům slučovat a rozdělovat stránky, které obsahují redakce založené na rolích",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Tuto volbu vyberte, pokud chcete povolit uživatelům slučovat a rozdělovat stránky, které obsahují redakce založené na rolích. Pokud je tato volba zapnuta, uživatelé, kteří nejsou editory redakcí, nebudou moci upravovat redakce založené na rolích a nebudou mít přístup k citlivým datům týkajícím se redakcí založených na rolích.",
		admin_repcfg_modify_teamspace_roles: "Povolit vlastníkům úpravu rolí existujících týmových prostorů",
		admin_repcfg_tm_delete_teamspace: "Umožnit vlastníkům odstraňování týmových prostorů včetně obsahu",
		admin_repcfg_tm_delete_teamspace_id_missing: "Je třeba určit jméno uživatele administrátora úložiště.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Je třeba určit heslo administrátora úložiště.",
		admin_repcfg_teamspace_display_Recent: "Zobrazit pouze nedávno upravené týmové prostory ",
		admin_repcfg_teamspace_display_Recent_value: "Počet dnů od poslední úpravy:",

		admin_repcfg_folder_selector: "Kořenová složka:",
		admin_repcfg_enable_folder_selector: "Povolit",
		admin_repcfg_disable_folder_selector: "Zakázat",
		admin_repcfg_SSO: "Jednotné přihlášení:",
		admin_repcfg_teamspace_template_permission_text: "Přiřadit tvůrce šablony týmového prostoru:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Určete skupiny nebo uživatele, kteří mohou vytvářet šablony týmových prostorů. Uživatelům a skupinám budou přidělena příslušná nastavení zabezpečení pro požadované třídy a složky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Další informace</a><br/><br/><b>Doporučení:</b> Zjednodušte správu týmových prostorů pomocí skupin.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Určete skupiny nebo uživatele, kteří mohou vytvářet šablony týmových prostorů. Uživatelé jsou přidáni do příslušných seznamů ACL a jsou jim udělena vyžadovaná oprávnění. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Další informace</a><br/><br/><b>Doporučení:</b> Zjednodušte správu týmových prostorů pomocí skupin.",
		admin_repcfg_teamspace_permission_text: "Přiřadit role týmového prostoru:",
		admin_repcfg_teamspace_permission_hover_p8: "Určete skupiny nebo uživatele, kteří mohou vytvářet týmové prostory a používat týmové prostory. Uživatelům budou přidělena příslušná nastavení zabezpečení pro požadované třídy a složky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Další informace</a><br/><br/><b>Doporučení:</b> Zjednodušte správu týmových prostorů pomocí skupin.",
		admin_repcfg_teamspace_permission_hover_cm: "Určete skupiny nebo uživatele, kteří mohou vytvářet týmové prostory a používat týmové prostory. Uživatelé jsou přidáni do příslušných seznamů ACL a jsou jim udělena vyžadovaná oprávnění. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Další informace</a><br/><br/><b>Doporučení:</b> Zjednodušte správu týmových prostorů pomocí skupin.",
		admin_repcfg_entry_template_permission_text: "Přiřadit role šablony položky:",
		admin_repcfg_entry_template_permission_hover_p8: "Určete skupiny nebo uživatele, kteří mohou vytvářet šablony položek a používat šablony položek. Uživatelům budou přidělena příslušná nastavení zabezpečení pro třídu dokumentů Šablona položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Další informace</a><br/><br/><b>Doporučení:</b> Zjednodušte si správu šablon položek pomocí skupin.",
		admin_repcfg_entry_template_permission_hover_cm: "Určete skupiny nebo uživatele, kteří mohou vytvářet šablony položek a používat šablony položek. Uživatelé jsou přidáni do příslušných seznamů ACL a jsou jim udělena vyžadovaná oprávnění. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Další informace</a><br /><br /><b>Doporučení:</b> Zjednodušte si správu šablon položek pomocí skupin.",
		admin_repcfg_office_template_permission_text: "Přiřadit role šablony:",
		admin_repcfg_office_template_permission_hover_cm: "Určete skupiny nebo uživatele, kteří mohou vytvářet, upravovat a používat šablony produktu Microsoft Office Online nebo služby úprav. Uživatelé jsou přidáni do příslušných seznamů ACL a jsou jim udělena vyžadovaná oprávnění. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a><br /><br /><b>Doporučení:</b> Zjednodušte si správu šablon produktu Microsoft Office Online nebo služby úprav pomocí skupin.",
		admin_repcfg_draft_permission_text: "Přiřadit role konceptu:",
		admin_repcfg_draft_permission_hover_cm: "Určete skupiny nebo uživatele, kteří mohou vytvářet koncepty dokumentů produktu Microsoft Office Online nebo služby úprav v rámci spolupráce na úpravách. Všichni uživatelé, kteří chtějí společně upravovat dokumenty v produktu Microsoft Office Online nebo pomocí služby úprav, musí mít odpovídající oprávnění pro vytváření konceptů. Uživatelé jsou přidáni do příslušných seznamů ACL a jsou jim udělena vyžadovaná oprávnění. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a><br /><br /><b>Doporučení:</b> Zjednodušte správu konceptů pomocí skupin.",
		admin_repcfg_search_permission_text: "Přiřadit role hledání:",
		admin_repcfg_search_permission_hover_p8: "Určete skupiny nebo uživatele, kteří mohou vytvářet nebo používat uložená hledání a hledání ve více úložištích. Uživatelům budou přidělena příslušná nastavení zabezpečení pro požadované třídy. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Další informace</a><br /><br /><b>Doporučení:</b> Zjednodušte správu hledání pomocí skupin.",
		admin_repcfg_search_permission_hover_cm: "Určete skupiny nebo uživatele, kteří mohou vytvářet, upravovat nebo používat uložená hledání a hledání ve více úložištích. Uživatelé jsou přidáni do příslušných seznamů ACL a jsou jim udělena vyžadovaná oprávnění. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Další informace</a><br /><br /><b>Doporučení:</b> Zjednodušte správu hledání pomocí skupin.",
		admin_repcfg_search_permission_title: "Role hledání",
		admin_repcfg_search_permission_intro_text: "Zajistěte, aby uživatelé měli přístup k pracovní ploše, která podporuje jejich roli. Zajistěte například, aby tvůrci hledání měli přístup k pracovní ploše, která jim umožní vytvářet hledání a také hledání ve více úložištích.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administrátoři šablon týmových prostorů jsou uživatelé s oprávněním <b>Úplné řízení</b> k příslušnému úložišti (úložiště objektů). Seznam administrátorů šablon týmových prostorů nemůžete změnit prostřednictvím nástroje pro administraci. <p>Administrátoři šablon týmových prostorů mohou odstranit nebo upravit kteroukoli šablonu týmového prostoru. Uživatel, který vytvoří šablonu týmového prostoru, ji nemusí sdílet s administrátory šablon týmových prostorů.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Označíte-li uživatele nebo skupinu jako tvůrce šablon týmových prostorů, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné vytvářet šablony týmových prostorů. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Další informace</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Uživatelé a skupiny, kterým jsou přiřazena jiná oprávnění, než oprávnění přidružená skupinám Administrátoři a Tvůrci.<p>Tyto uživatele a skupiny můžete přesunout do role tvůrců šablon týmového prostoru tak, že je odeberete z role Jiné a přiřadíte je do role tvůrců šablon týmového prostoru.<p>Oprávnění, která jsou těmto uživatelům a skupinám aktuálně přidělená, můžete zkontrolovat pomocí administrativní konzoly IBM pro Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Administrátoři týmových prostorů jsou uživatelé s oprávněním <b>Úplné řízení</b> k příslušnému úložišti (úložiště objektů). Seznam administrátorů týmových prostorů nemůžete změnit prostřednictvím nástroje pro administraci.<p>Administrátoři týmových prostorů mohou odstranit nebo upravit kterýkoli týmový prostor. Uživatel, který vytvoří týmový prostor, jej nemusí sdílet s administrátory týmových prostorů.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Označíte-li uživatele nebo skupinu jako tvůrce týmových prostorů, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné vytvářet týmové prostory. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Další informace</a>",
		admin_repcfg_teamspace_user_hover_p8: "Označíte-li uživatele nebo skupinu jako uživatele týmových prostorů, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné používat týmové prostory. Uživatel však musí být členem týmového prostoru, aby k němu měl přístup. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Další informace</a><p><b>Tip:</b> Chcete-li, aby byly týmové prostory viditelné pro všechny uživatele v příslušném prostředí, můžete do role uživatele týmových prostorů přidat pseudo-účet #AUTHENTICATED-USERS.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Uživatelé a skupiny, kterým jsou přiřazena jiná oprávnění, než oprávnění přidružená skupinám Administrátoři, Tvůrci a Uživatelé.<p>Tyto uživatele a skupiny můžete přesunout do předdefinované role tak, že je odeberete z role Jiné a přiřadíte jim role týmového prostoru.<p>Oprávnění, která jsou těmto uživatelům a skupinám aktuálně přidělená, můžete zkontrolovat pomocí administrativní konzoly IBM pro Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administrátoři šablon položek jsou uživatelé s oprávněním <b>Úplné řízení</b> k příslušnému úložišti (úložiště objektů). Seznam administrátorů šablon položek nemůžete změnit prostřednictvím nástroje pro administraci. <p>Administrátoři šablon položek mohou odstranit nebo upravit kteroukoli šablonu položky. Uživatel, který vytvoří šablonu položky, ji nemusí sdílet s administrátory šablon položek.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Označíte-li uživatele nebo skupinu jako tvůrce šablon položek, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné vytvářet šablony položek. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Další informace</a>",
		admin_repcfg_entry_template_user_hover_p8: "Označíte-li uživatele nebo skupinu jako uživatele šablon položek, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné používat šablony položek. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Další informace</a><p><b>Tip:</b> Chcete-li, aby mohli šablony položek používat všichni uživatelé v příslušném prostředí, můžete do role uživatele šablon položek přidat pseudo-účet #AUTHENTICATED-USERS.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Uživatelé a skupiny, kterým jsou přiřazena jiná oprávnění, než oprávnění přidružená skupinám Administrátoři, Tvůrci a Uživatelé.<p>Tyto uživatele a skupiny můžete přesunout do předdefinované role tak, že je odeberete z role Jiné a přiřadíte jim role šablony položky.<p>Oprávnění, která jsou těmto uživatelům a skupinám aktuálně přidělená, můžete zkontrolovat pomocí administrativní konzoly IBM pro Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Označíte-li uživatele nebo skupinu jako tvůrce šablon týmových prostorů, budou příslušnému uživateli nebo skupině udělena oprávnění pro vytváření šablon týmových prostorů v úložišti. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Další informace</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Označíte-li uživatele nebo skupinu jako tvůrce týmových prostorů, budou příslušnému uživateli nebo skupině udělena oprávnění pro vytváření týmových prostorů v úložišti. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Další informace</a>",
		admin_repcfg_teamspace_user_hover_cm: "Označíte-li uživatele nebo skupinu jako uživatele týmových prostorů, budou příslušnému uživateli nebo skupině udělena oprávnění pro používání týmových prostorů v úložišti. Uživatel však musí být členem týmového prostoru, aby k němu měl přístup. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Další informace</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Označíte-li uživatele nebo skupinu jako tvůrce šablon položek, budou příslušnému uživateli nebo skupině udělena oprávnění pro vytváření šablon položek v úložišti. <br/><br/>Oprávnění, která uživatel či skupina pro šablonu položky má, jsou však určena nastavením zabezpečení pro příslušnou šablonu položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Další informace</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Označíte-li uživatele nebo skupinu jako editora šablon položek, budou příslušnému uživateli nebo skupině udělena oprávnění pro úpravy šablon položek v úložišti. <br/><br/>Oprávnění, která uživatel či skupina pro šablonu položky má, jsou však určena nastavením zabezpečení pro příslušnou šablonu položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Další informace</a>",
		admin_repcfg_entry_user_hover_cm: "Označíte-li uživatele nebo skupinu jako uživatele šablon položek, budou příslušnému uživateli nebo skupině udělena oprávnění pro používání šablon položek v úložišti. <br/><br/>Oprávnění, která uživatel či skupina pro šablonu položky má, jsou však určena nastavením zabezpečení pro příslušnou šablonu položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Další informace</a>",
		admin_repcfg_office_template_creators_hover_cm: "Označíte-li uživatele nebo skupinu jako tvůrce šablon produktu Microsoft Office Online nebo služby úprav, budou příslušnému uživateli nebo skupině udělena oprávnění pro vytváření souborů šablon v úložišti. <br/><br/>Oprávnění, která uživatel či skupina pro šablonu má, jsou však určena nastavením zabezpečení pro příslušný soubor šablony. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a>",
		admin_repcfg_office_template_editors_hover_cm: "Označíte-li uživatele nebo skupinu jako editor šablon produktu Microsoft Office Online nebo služby úprav, budou příslušnému uživateli nebo skupině udělena oprávnění pro úpravu souborů šablon v úložišti. <br/><br/>Oprávnění, která uživatel či skupina pro šablonu má, jsou však určena nastavením zabezpečení pro příslušný soubor šablony. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a>",
		admin_repcfg_office_template_user_hover_cm: "Označíte-li uživatele nebo skupinu jako uživatele šablon produktu Microsoft Office Online nebo služby úprav, budou příslušnému uživateli nebo skupině udělena odpovídající oprávnění pro použití šablony při vytváření nového dokumentu produktu Office Online nebo služby úprav z webového klienta. <br/><br/>Oprávnění, která uživatel či skupina pro šablonu má, jsou však určena nastavením zabezpečení pro příslušný soubor šablony. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a>",
		admin_repcfg_draft_creators_hover_cm: "Všichni uživatelé, kteří chtějí společně upravovat dokumenty v produktu Microsoft Office Online nebo ve službě úprav, musí mít přiřazenu tuto roli. Nepřiřazujte uživatelům roli editora nebo uživatele. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a>",
		admin_repcfg_draft_editors_hover_cm: "Všichni uživatelé, kteří chtějí společně upravovat dokumenty v produktu Microsoft Office Online nebo ve službě úprav, musí mít přiřazenu roli <b>tvůrce</b>. Pokud má uživatel přiřazenu roli editora, nemůže vytvářet koncepty, které jsou potřeba pro společné úpravy. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a>",
		admin_repcfg_draft_user_hover_cm: "Všichni uživatelé, kteří chtějí společně upravovat dokumenty v produktu Microsoft Office Online nebo ve službě úprav, musí mít přiřazenu roli <b>tvůrce</b>. Pokud má uživatel přiřazenu roli uživatele, nemůže vytvářet koncepty, které jsou potřeba pro společné úpravy. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Další informace</a>",		
		admin_repcfg_search_others_hover_p8: "Uživatelé a skupiny, kterým jsou přiřazena jiná oprávnění, než oprávnění přidružená skupinám Administrátoři, Tvůrci a Uživatelé.<p>Tyto uživatele a skupiny můžete přesunout do předdefinované role tak, že je odeberete z role Jiné a přiřadíte jim role hledání.<p>Oprávnění, která jsou těmto uživatelům a skupinám aktuálně přidělená, můžete zkontrolovat pomocí administrativní konzoly IBM pro Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Administrátoři hledání jsou uživatelé s oprávněním <b>Úplné řízení</b> k příslušnému úložišti (úložiště objektů). Seznam administrátorů hledání nemůžete změnit prostřednictvím nástroje pro administraci. <br /><br />Administrátoři hledání mohou odstranit nebo upravit kterékoli hledání. Uživatel, který vytvoří hledání, je nemusí sdílet s administrátory hledání.",
		admin_repcfg_search_creators_hover_p8: "Označíte-li uživatele nebo skupinu jako tvůrce hledání, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné vytvářet hledání. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Další informace</a>",
		admin_repcfg_search_user_hover_p8: "Označíte-li uživatele nebo skupinu jako uživatele hledání, bude příslušnému uživateli nebo skupině přiděleno odpovídající zabezpečení v úložišti, aby bylo možné používat hledání. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Další informace</a><br /><br /><b>Tip:</b> Chcete-li, aby mohli hledání používat všichni uživatelé v příslušném prostředí, můžete do role uživatele hledání přidat pseudo-účet #AUTHENTICATED-USERS.<br/><br />Při výchozím nastavení může uživatel hledání vytvářet hledání a také hledání ve více úložištích, nemůže však hledání ukládat. Uživatelům hledání můžete zabránit ve vytváření hledání, pokud jim pro používání poskytnete pracovní plochu, pro kterou jsou vybrány následující volby:<ul><li><b>Zabránit uživatelům ve vytváření vyhledávání</b></li><li><b>Zabránit uživatelům ve vytváření vyhledávání ve více úložištích</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Označíte-li uživatele nebo skupinu jako tvůrce hledání, budou příslušnému uživateli nebo skupině v rámci úložiště udělena oprávnění pro vytváření hledání a také hledání ve více úložištích. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Další informace</a><br /><br /><b>Důležité upozornění:</b> Zajistěte, aby tvůrci hledání používali pracovní plochu, pro kterou nejsou vybrány následující volby:<ul><li><b>Zabránit uživatelům ve vytváření vyhledávání</b></li><li><b>Zabránit uživatelům ve vytváření vyhledávání ve více úložištích</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Označíte-li uživatele nebo skupinu jako editora hledání, budou příslušnému uživateli nebo skupině udělena oprávnění pro úpravy existujících hledání a také hledání ve více úložištích. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Další informace</a><br /><br /><b>Tip:</b> Při výchozím nastavení může editor hledání vytvářet hledání a také hledání ve více úložištích, nemůže však hledání ukládat. Editorům hledání můžete zabránit ve vytváření hledání, pokud jim pro používání poskytnete pracovní plochu, pro kterou jsou vybrány následující volby:<ul><li><b>Zabránit uživatelům ve vytváření vyhledávání</b></li><li><b>Zabránit uživatelům ve vytváření vyhledávání ve více úložištích</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Označíte-li uživatele nebo skupinu jako uživatele hledání, budou příslušnému uživateli nebo skupině udělena oprávnění pro otevírání a spouštění uložených hledání a také hledání ve více úložištích. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Další informace</a><br /><br /><b>Tip:</b> Při výchozím nastavení může uživatel hledání vytvářet hledání a také hledání ve více úložištích, nemůže však hledání ukládat. Uživatelům hledání můžete zabránit ve vytváření hledání, pokud jim pro používání poskytnete pracovní plochu, pro kterou jsou vybrány následující volby:<ul><li><b>Zabránit uživatelům ve vytváření vyhledávání</b></li><li><b>Zabránit uživatelům ve vytváření vyhledávání ve více úložištích</b></li></ul>",
		admin_repcfg_db_encoding: "Kódování znaků databáze serveru:",
		admin_repcfg_db_encoding_hover: "Výchozí kódování znaků pro databázi produktu IBM Content Manager je UTF-8.",
		admin_repcfg_db_encoding_specify: "Určit kódování znaků databáze",
		admin_repcfg_db_encoding_utf8: "Kódování UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Tuto volbu určete, používáte-li databázi s kódováním UTF-8. Produkt IBM Content Navigator bude používat ke kontrole délky řetězců hodnot vlastností položek kódování UTF-8.",
		admin_repcfg_db_encoding_other: "Jiné kódování",
		admin_repcfg_db_encoding_other_hover: "Tuto volbu určete, používáte-li databázi s jiným kódováním než UTF-8. Produkt IBM Content Navigator bude používat ke kontrole délky řetězců hodnot vlastností položek počet znaků.",
		admin_repcfg_language_codes: "Kódy jazyka serveru:",
		admin_repcfg_language_codes_avail: "Dostupné",
		admin_repcfg_language_codes_sel: "Vybrané",
		admin_repcfg_pdf_conversion: "Typy MIME pro převod do formátu PDF v přílohách:",
		admin_repcfg_pdf_conversion_avail: "Dostupné",
		admin_repcfg_pdf_conversion_sel: "Vybrané",

		admin_repcfg_box_share_enable_classes_label: "Třídy k úpravě pro podporu sdílení prostřednictvím produktu Box:",
		admin_repcfg_box_share_enable_classes_hover: "Třídu můžete upravit tak, aby v ní bylo uloženo ID souboru v produktu Box, je-li položka sdílena.",
		admin_repcfg_box_share_enable_classes_warning: "Důležité upozornění: Všechny třídy, které určíte, budou upraveny tak, aby podporovaly sdílení prostřednictvím produktu Box. Po uložení změn nelze změny ze tříd odstranit.<br><br>Chcete-li třídy upravovat, musíte být k úložišti připojeni jako administrátor indexového serveru.",
		admin_repcfg_box_share_enable_classes_available: "Dostupné třídy",
		admin_repcfg_box_share_enable_classes_selected: "Vybrané třídy",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Uložit ID sdílení prostřednictvím produktu Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Tato třída již byla upravena tak, aby se do ní ukládalo ID sdílení prostřednictvím produktu Box. Tuto volbu nelze odebrat.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Tuto třídu můžete upravit tak, aby v ní bylo uloženo ID souboru v produktu Box, je-li položka sdílena.",

		admin_repcfg_redaction: "Redakce založené na rolích:",
		admin_repcfg_enable_redaction_hover: "Určete, zda chcete pro dokumenty v tomto úložišti používat redakce založené na rolích.<br/><br/>Redakce založené na rolích jsou použity, když je dokument stažen, tištěn, zobrazen prohlížečem nebo zobrazen jako miniatura. Obsah, který se uživatelům zobrazí při zobrazení dokumentu, závisí na jejich roli a odpovídajících zásadách redakce.",

		admin_repcfg_redaction_policy_permission_text: "Přiřadit editory zásad:",
		admin_repcfg_redaction_policy_editors_hover: "Vyberte uživatele a skupiny, které budou vytvářet, upravovat a odstraňovat zásady redakce a role redakce.",
		admin_repcfg_redaction_policy_editors_select_hover: "Editoři zásad redakce mohou vytvářet, upravovat a odstraňovat zásady redakce a role redakce.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Administrátoři zásad redakce mohou přiřazovat editory zásad redakce.<br/><br/>Seznam administrátorů zásad redakce lze změnit prostřednictvím produktu IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Administrátoři zásad redakce mohou přiřazovat editory zásad redakce.<br/><br/>Seznam administrátorů zásad redakce lze změnit prostřednictvím klienta pro administraci systému IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Přiřadit editory redakce:",
		admin_repcfg_redaction_editors_hover: "Vyberte uživatele a skupiny, které budou vytvářet, upravovat a odstraňovat redakce založené na rolích. Poté, co vyberete uživatele a skupiny jako editory, je třeba určit je jako editory v rámci zásad redakce, než budou moci upravovat redakce založené na rolích.",
   		admin_repcfg_redaction_editors_select_hover: "Editoři redakcí mohou vytvářet, upravovat a odstraňovat redakce založené na rolích, jsou-li určeni jako editoři také v rámci zásad redakce.",
   		admin_repcfg_redaction_administrators_hover_p8: "Administrátoři redakce mohou přiřazovat editory redakcí.<br/><br/>Seznam administrátorů redakce lze změnit prostřednictvím produktu IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Administrátoři redakce mohou přiřazovat editory redakcí.<br/><br/>Seznam administrátorů redakce lze změnit prostřednictvím klienta pro administraci systému IBM Content Manager.",
		admin_repcfg_entry_template: "Správa šablon položek:",
		admin_repcfg_entry_template_enable_classes_label: "Třídy k úpravě pro podporu šablon položek:",
		admin_repcfg_oos_reference_attribute_label: "Referenční atributy pro produkt Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Důležité upozornění: Všechny třídy, které určíte, budou upraveny tak, aby podporovaly šablony položek. Po uložení změn nelze změny ze tříd odstranit.<br><br>Třídu lze upravit z jednoho či obou následujících důvodů:<br><ul><li>Kvůli uložení ID šablony položky, jež byla použita k přidání položky, aby po úpravě položky byla použita nastavení šablony položky</li><li>Pouze pro hierarchické třídy složek: Kvůli podpoře přidružení složek pro šablony položek</li></ul>Chcete-li třídy upravovat, musíte být k úložišti připojeni jako administrátor indexového serveru.",
		admin_repcfg_entry_template_enable_classes_warning: "Důležité upozornění: Všechny třídy, které určíte, budou upraveny tak, aby podporovaly šablony položek. Po uložení změn nelze změny ze tříd odstranit.<br><br>Chcete-li třídy upravovat, musíte být k úložišti připojeni jako administrátor indexového serveru.",
		admin_repcfg_entry_template_enable_classes_available: "Dostupné třídy",
		admin_repcfg_entry_template_enable_classes_selected: "Vybrané třídy",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Ukládat ID šablony položky",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Tuto třídu můžete upravit tak, aby do ní bylo ukládáno ID šablony položky, jež byla použita k přidání položky, aby po úpravě položky byla použita nastavení šablony položky.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Ukládat přidružení složek",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Tuto třídu můžete upravit tak, aby podporovala přidružení složek pro šablony položek. Tato volba je k dispozici pouze pro hierarchické třídy složek.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Tato třída již byla upravena tak, aby se do ní ukládalo ID šablony položky. Tuto volbu nelze odebrat.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Tato třída již byla upravena tak, aby se do ní ukládala přidružení složek. Tuto volbu nelze odebrat.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "K ukládání přidružení složek lze použít pouze hierarchické třídy složek a jiné než hierarchické třídy.",
		admin_repcfg_entry_template_root_folder_association_title: "Šablony položek přidružené kořenové složce:",
		admin_repcfg_entry_template_root_folder_association_hover: "Určete, které šablony položek chcete přidružit kořenové složce v úložišti produktu IBM Content Manager.<br /><br />Pokud kořenové složce přidružíte šablony položek a uživatelé přidají položky do hierarchické složky, bude pro přidání položek vždy použita šablona položky.",
		admin_repcfg_entry_template_root_folder_association_button: "Nastavit přidružení",
		admin_repcfg_oos_enable_classes_label: "Třídy k úpravě pro podporu produktu Office Online nebo služby úprav:",
		admin_repcfg_oos_enable_classes_warning: "Důležité upozornění: Všechny třídy, které určíte, budou upraveny tak, aby pracovaly s produktem Microsoft Office Online nebo službou úprav. Po uložení změn nelze referenční atribut, který se automaticky přidává ke každé třídě, odebrat.<br><br>Chcete-li třídy upravovat, musíte být k úložišti připojeni jako administrátor indexového serveru.",
		admin_repcfg_oos_enable_classes_available: "Dostupné třídy",
		admin_repcfg_oos_enable_classes_selected: "Vybrané třídy",
		admin_repcfg_oos_enable_classes_note: "Důležité:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Tato role není produktem Microsoft Office Online nebo službou úprav podporována.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Zásady verzí pro třídu jsou nastaveny jako verze vždy, což není podporováno produktem Microsoft Office Online nebo službou úprav. Vyberte jinou třídu.",
		admin_repcfg_download_recording: "Sledovat stahování:",
		admin_repcfg_download_recording_hover: "Po instalaci doplňku produktu Social Collaboration Base Extensions v úložišti je při výchozím nastavení sledováno stahování. Zakázáním této volby však lze zvýšit výkon úložiště.<br><br>Pokud tuto volbu zakážete, zobrazí se uživatelům počet stažení, k nimž došlo před zakázáním této volby.",
		admin_repcfg_sync_service: "Služby synchronizace:",
		admin_repcfg_download_ignored: "Ignorovat stahování pro specifické uživatele:",
		admin_repcfg_download_ignored_hover: "Můžete ignorovat stahování vyžádaná specifickými uživateli, například administrátory či systémovými účty, aby byl počet uživatelů, kteří dokument stáhli, přesnější. Pokud například máte specifický účet používaný ke stahování obsahu kvůli generování měsíční sestavy, můžete ignorovat stahování vyžádaná tímto účtem.<br><br><b>Omezení:</b> Nelze určit skupiny.",

		admin_repcfg_add_as_major_version: "Přidat jako hlavní verzi:",
		admin_repcfg_enable_add_as_major_version: "Ano",
		admin_repcfg_disable_add_as_major_version: "Ne",
		admin_repcfg_checkin_as_major_version: "Vrátit jako hlavní verzi:",
		admin_repcfg_enable_checkin_as_major_version: "Ano",
		admin_repcfg_disable_checkin_as_major_version: "Ne",
		admin_repcfg_annotation_security: "Zabezpečení anotací:",
		admin_repcfg_inherit_annotation_security: "Duplikovat zabezpečení obsaženého dokumentu",
		admin_repcfg_default_annotation_security: "Použít výchozí zabezpečení anotací",
		admin_repcfg_connection_point: "Přípojný bod sledu prací:",
		admin_repcfg_include_workflow_definition: "Zobrazit třídu definic sledu prací:",
		admin_repcfg_include_form_template: "Zobrazit třídu šablon formuláře:",
		admin_repcfg_enable_include_workflow_definition: "Ano",
		admin_repcfg_disable_include_workflow_definition: "Ne",

		admin_repcfg_status_columns: "Ikony stavu:",
		admin_repcfg_status_columns_hover: "Určete stavy, pro které chcete zobrazit ikony. Ikony stavu se zobrazují u dokumentů, složek a pracovních položek v seznamu obsahu.",
		admin_repcfg_status_columns_documents_or_folders: "Zobrazit ikonu, když dokumenty nebo složky:",
		admin_repcfg_status_columns_documents: "Zobrazit ikonu, když dokumenty:",
		admin_repcfg_status_columns_documents_checked_out: "Jsou zapůjčeny",
		admin_repcfg_status_columns_documents_declared_records: "Jsou deklarovány jako záznamy",
		admin_repcfg_status_columns_documents_minor_versions: "Mají vedlejší verze",
		admin_repcfg_status_columns_documents_compound_document: "Jsou složené dokumenty",
		admin_repcfg_status_columns_documents_bookmarks: "Mají záložky",
		admin_repcfg_status_columns_documents_hold: "Jsou zadrženy",
		admin_repcfg_status_columns_documents_notes: "Mají poznámky",
		admin_repcfg_status_columns_work_items: "Zobrazit ikonu, když pracovní položky:",
		admin_repcfg_status_columns_work_items_locked: "Jsou zamčeny",
		admin_repcfg_status_columns_work_items_checked_out: "Jsou zapůjčeny",
		admin_repcfg_status_columns_work_items_deadline: "Mají konečný termín",
		admin_repcfg_status_columns_work_items_suspended: "Jsou pozastaveny při zpracování",

		admin_repcfg_afp2pdf_config_file: "Konfigurační soubor AFP2PDF:",
		admin_repcfg_transform_xml_file: "Vlastní transformační soubor:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Povolit",
		admin_repcfg_disable_ssl: "Zakázat",
		admin_repcfg_keyringdb_file: "Databázový soubor svazku klíčů:",
		admin_repcfg_keyringstash_file: "Soubor pro dočasné ukládání svazku klíčů:",
		admin_repcfg_od_sso: "Jednotné přihlášení",
		admin_repcfg_od_enable_sso: "Povolit",
		admin_repcfg_od_disable_sso: "Zakázat",
		admin_repcfg_od_sso_password: "Heslo",
		admin_repcfg_advanced_label: "Rozšířené",
		admin_repcfg_custom_properties_label: "Přizpůsobené vlastnosti:",
		admin_repcfg_new_button_label: "Nový",
		admin_repcfg_edit_button_label: "Upravit",
		admin_repcfg_delete_button_label: "Odstranit",
		admin_repcfg_custom_head1: "Název",
		admin_repcfg_custom_head2: "Hodnota",
		admin_repcfg_ecpdialog_title_new: "Nová přizpůsobená vlastnost",
		admin_repcfg_ecpdialog_title_edit: "Upravit přizpůsobenou vlastnost",
		admin_repcfg_ecpdialog_name: "Název:",
		admin_repcfg_ecpdialog_value: "Hodnota:",
		admin_repcfg_ecpdialog_save: "Uložit",
		admin_repcfg_ecpdialog_create: "Vytvořit",
		admin_repcfg_ecpdialog_cancel: "Storno",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Tato hodnota je povinná. Hodnota nesmí obsahovat mezery a musí být jedinečná.",

		admin_repcfg_cmis_use_gzip_encoding: "Použít kódování GZIP:",

		admin_repcfg_task_mgr_proxy: "ID připojení správce úloh:",
		admin_repcfg_task_mgr_proxy_hover: "Pro sdílení prostřednictvím produktu Box nebo odstranění týmového prostoru správce úloh používá ID administrativního uživatele ke spouštění úloh na pozadí, jež upravují úložiště.<br><br>Klepněte na volbu Nastavit a přihlaste se k úložišti s použitím ID administrativního uživatele a hesla pro úložiště.",
		admin_task_manager_not_enabled_warning: "Tato volba vyžaduje službu správce úloh, služba správce úloh však není povolena. Službu správce úloh lze pro všechny pracovní plochy povolit na stránce Obecné v sekci Nastavení.",
		admin_task_manager_not_enabled_and_user_warning: "Tato volba vyžaduje službu správce úloh, služba správce úloh však není povolena. Můžete nastavit ID připojení správce úloh na této stránce a poté povolit službu správce úloh pro všechny pracovní plochy na stránce Obecné v sekci Nastavení.",
		admin_task_manager_user_id_pw_not_set_warning: "Tato volba vyžaduje službu správce úloh, ID administrativního uživatele a heslo. Na této stránce lze nastavit ID připojení správce úloh.",
		admin_repcfg_teamspaces_delete_task_id: "Administrátor úložiště:",
		admin_repcfg_teamspaces_delete_task_password: "Heslo:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Chcete-li službě správce úloh umožnit odstranění týmového prostoru v úložišti, je třeba zadat administrátora indexového serveru.",
		admin_repcfg_teamspaces_delete_task_hover: "Při výchozím nastavení platí, že když uživatel odstraní týmový prostor, je příslušný týmový prostor skryt. Veškeré složky a dokumenty v týmovém prostoru zůstávají v úložišti. <br /> <br />Povolíte-li tuto volbu, zůstanou v úložišti pouze dokumenty uložené v jiných složkách.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Pokud v prostředí existuje velké množství týmových prostorů, může zobrazování všech týmových prostorů na kartě <b>Týmové prostory</b> trvat dlouho. Tuto volbu můžete vybrat, chcete-li zkrátit čas potřebný na naplnění seznamu.<br /><br />Pokud některý uživatel potřebuje pracovat s týmovým prostorem mimo určený rozsah, může jej vyhledat prostřednictvím pole <b>Filtr</b>.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Vyberete-li tuto volbu, uživatelé s rolí vlastníka pro týmový prostor budou moci upravovat role přidružené k týmovým prostorům vytvořeným ve verzi produktu IBM Content Navigator nižší než 2.0.2.<br /><br />Tato volba se neprojeví u týmových prostorů vytvořených v produktu IBM Content Navigator verze 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Určete, zda chcete uživatelům v tomto úložišti umožnit vytváření týmových prostorů a jejich šablon.<br /><br /><b>Důležité:</b> Úložiště musí podporovat hierarchické složky.<br /><br />Pokud povolíte týmové prostory, produkt IBM Content Navigator vytvoří datový model týmových prostorů v úložišti. Datový model zahrnuje objekty ACL, oprávnění, sady oprávnění a dva nové typy položek.",
		admin_repcfg_folder_selector_hover: "Vyberte složku, kterou chcete používat jako kořenovou složku, když uživatelé hledají dokumenty procházením. Pokud v úložišti nejsou konfigurovány hierarchické složky, umožňuje vám toto nastavení poskytnout podporu pro procházení definováním kořenové složky. Jsou-li v úložišti konfigurovány hierarchické složky, toto nastavení potlačí kořenovou složku konfigurovanou v úložišti.",
		admin_repcfg_cm_use_sso_hover: "Rozhodněte, zda chcete povolit jednotné přihlášení pro uživatele se sadou oprávnění Důvěryhodné přihlášení.<br /><br /><b>Důležité:</b> Jednotné přihlášení musí být povoleno na serveru Content Manager. Tento konfigurační parametr funguje správně pouze v případě, že je produkt WebSphere Application Server konfigurován pro ověřování LTPA.",
		admin_repcfg_cm_direct_retrieve_hover: "Přímé načtení je při výchozím nastavení povoleno, protože umožňuje webovému klientu rychle načítat obsah ze správce prostředků.<br /><br />Tuto volbu můžete zakázat, pokud nechcete, aby klientská aplikace přistupovala ke správci prostředků přímo, nebo pokud používáte bránu firewall či server proxy, který brání webovému klientu v přístupu ke správci prostředků prostřednictvím adres URL. Brána firewall může například uživatelům bránit v zobrazování dokumentů v prohlížeči apletů, je-li povoleno přímé načtení.",
		admin_repcfg_cmItemTypesToDisplay: "Chcete-li, aby se uživatelům na serveru IBM Content Manager zobrazovaly typy položek pro prostředky a položky, můžete zobrazovat pouze typy položek pro model dokumentu. Typy položek se zobrazují, když uživatelé vytvářejí vyhledávání, přidávají dokumenty a vytvářejí složky.",
		admin_repcfg_cm_language_codes_hover: "Určete jazyky, ve kterých má server Content Manager vracet data. Seznam dostupných jazyků je určen seznamem definic jazyků na serveru.<br /><br /><b>Zapamatujte si:</b> Data ve webovém klientovi se zobrazují v jazyku, který je nastaven ve webovém prohlížeči uživatele.",
		admin_repcfg_cm_pdf_conversion_hover: "Určete typy dokumentů, které mají být převedeny do formátu PDF v případě, že uživatel odešle dokument s několika částmi jako přílohu e-mailu. Všechny části jsou sloučeny do jediného dokumentu PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Určete, zda chcete uživatelům v tomto úložišti umožnit vytváření týmových prostorů a jejich šablon.<br /><br />Pokud povolíte týmové prostory, produkt IBM Content Navigator vytvoří datový model týmových prostorů v úložišti. Datový model zahrnuje šablony vlastností, vlastní objekty, objekt složky a několik složek.",
		admin_repcfg_use_entry_template_p8_hover: "Určete, zda chcete uživatelům umožnit vytváření a správu šablon položek v tomto úložišti z produktu IBM Content Navigator. Pokud tuto funkci nepovolíte, uživatelé budou moci hledat a používat šablony položek, které jsou již v úložišti obsaženy.<br /><br />Povolíte-li správu šablon položek, produkt IBM Content Navigator provede aktualizaci datového modelu šablon položek v úložišti. Aktualizace bude zahrnovat nové vlastnosti. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Další informace</a>",
		admin_repcfg_use_entry_template_cm_hover: "Určete, zda chcete uživatelům umožnit vytváření a správu šablon položek v tomto úložišti z produktu IBM Content Navigator.<br /><br />Povolíte-li správu šablon položek, produkt IBM Content Navigator vytvoří datový model šablon položek v úložišti. Datový model bude obsahovat nový objekt seznamu přístupových práv, nové vlastnosti a nový typ položky. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Další informace</a>",
		admin_repcfg_sync_service_p8_hover: "Určete, zda mají uživatelé mít možnost synchronizovat své oblíbené položky mezi pracovními stanicemi a mobilními zařízeními.<br><br><b>Důležité upozornění:</b> Chcete-li používat tuto funkci, je třeba dokončit také následující úlohy:<br><ul><li>Určete volbu <b>Veřejná adresa URL služeb synchronizace</b> v části <b>Služby synchronizace</b> nástroje pro administraci.</li><li>Přidejte toto úložiště na pracovní plochu, pro kterou jsou povoleny služby synchronizace.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Určete, zda je standardně vybrána volba hlavní verze, když uživatel přidá dokumenty do úložiště. <br /><br />V případě, že uživatelé chtějí přidat dokument jako vedlejší verzi, mají možnost tuto volbu deaktivovat.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Určete, zda je standardně vybrána volba hlavní verze, když uživatelé vrátí dokumenty do úložiště. <br /><br />V případě, že uživatelé chtějí vrátit dokument jako vedlejší verzi, mají možnost tuto volbu deaktivovat.",
		admin_repcfg_p8_annotation_security_hover: "Určete, jaký typ zabezpečení se standardně použije pro anotace.<br /><br />Zabezpečení anotací mohou uživatelé změnit.",
		admin_repcfg_p8_connection_point_hover: "Chcete-li používat sledy prací IBM FileNet P8, vyberte přípojný bod Process Engine. Vybraný přípojný bod určuje, které sledy prací budou k dispozici pro uživatele, kteří přistupují k tomuto úložišti.",
		admin_repcfg_p8_include_workflow_definition_hover: "Pokud zobrazíte třídu definic sledu prací IBM FileNet P8 ve webovém klientovi, uživatelé mohou vyhledávat a přidávat definice sledu prací do úložiště.",
		admin_repcfg_p8_include_form_template_hover: "Pokud zobrazíte třídu třída dokumentů šablony formuláře IBM FileNet P8 ve webovém klientovi, uživatelé mohou vyhledávat a přidávat šablony formuláře do úložiště.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Určete úplnou cestu konfiguračního souboru AFP2PDF pro toto úložiště na webovém aplikačním serveru. K zobrazení a tisku dat AFP je zapotřebí nástroj pro transformaci AFP2PDF.<br /><br /><b>Zapamatujte si:</b> Tento parametr lze použít pouze v případě, že je nainstalován nástroj pro transformaci AFP2PDF.",
		admin_repcfg_od_transform_xml_file_hover: " Pokud chcete při převodu obsahu produktu Content Manager OnDemand použít vlastní transformaci, zadejte úplnou cestu k souboru XML, který slouží k definování transformace. Soubor XML musí být uložen na webovém aplikačním serveru.",
		admin_repcfg_od_ssl_hover: "Určete, zda se má komunikace mezi aplikačním serverem IBM Content Navigator a indexovým serverem Content Manager OnDemand a objektovými servery šifrovat pomocí protokolu SSL.<br /><br /><b>Důležité:</b> Pokud povolíte šifrování pomocí protokolu SSL pro produkt Content Manager OnDemand, nebude zahrnuta komunikace mezi aplikačním serverem, webovým serverem a uživatelskými pracovními stanicemi produktu IBM Content Navigator.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Zadejte úplnou cestu k databázovému souboru svazku klíčů pro toto úložiště na webovém aplikačním serveru. Příklad: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Databázový soubor svazku klíčů obsahuje důvěryhodné kořenové certifikáty. Měli byste bránit neoprávněnému přístupu k tomuto souboru pomocí silné ochrany systému souborů.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Zadejte úplnou cestu k souboru pro dočasné ukládání svazku klíčů pro toto úložiště na webovém aplikačním serveru. Příklad: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Soubor pro dočasné ukládání svazku klíčů obsahuje heslo k databázovému souboru svazku klíčů. Měli byste bránit neoprávněnému přístupu k tomuto souboru pomocí silné ochrany systému souborů.",
		admin_repcfg_od_sso_password_hover: "Zadejte heslo, které chcete použít pro jednotné přihlášení na serveru OnDemand.",
		admin_repcfg_od_custom_properties_hover: "Rozhraní API ODWEK Java podporuje uživatelské vlastnosti. Pokud chcete při připojování k úložišti prostřednictvím webového klienta používat libovolné uživatelské vlastnosti, zadejte jejich názvy a hodnoty.<br /><br />Další informace týkající se podporovaných uživatelských vlastností naleznete v dokumentaci Javadoc k rozhraní API ODWEK Java, která je uložena v podadresáři /api instalačního adresáře sady ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Zadat název vlastnosti",
		admin_repcfg_od_custom_properties_value_hover: "Zadat hodnotu vlastnosti",
		admin_repcfg_od_use_sso_hover: "Určete, zda chcete pro uživatele povolit jednotné přihlášení.<br /><br /><b>Důležité upozornění:</b> Jednotné přihlášení musí být povoleno na serveru Content Manager OnDemand, aby tento konfigurační parametr fungoval správně.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Použít kódování GZIP pro tento zdroj CMIS",
		admin_repcfg_cm_use_part_file_name: "Název souboru použitý při stahování dokumentů:",
		admin_repcfg_cm_use_part_file_name_help: "Zadejte, jak se určují názvy dokumentů, když uživatelé stahují dokumenty.",
		admin_repcfg_cm_use_part_file_name_enable: "Použít název souboru",
		admin_repcfg_cm_use_part_file_name_disable: "Použít název položky v úložišti",
		admin_repcfg_add_doc_name: "Výchozí název pro přidaný dokument:",
		admin_repcfg_add_doc_name_hover: "Uživatelé mohou před přidáním dokumentu název změnit.",
		admin_repcfg_add_doc_name_empty: "Žádný (prázdná hodnota)",
		admin_repcfg_add_doc_name_file_name: "Název souboru vybraného dokumentu",

		admin_repcfg_compound_documents: "Funkce složeného dokumentu:",
		admin_repcfg_compound_documents_hover: "Povolte funkce složeného dokumentu P8, jako je navigace.",
		admin_repcfg_cm_action_list_config_enabled: "Seznam akcí pracovních položek:",
		admin_repcfg_cm_action_list_config_hover: "Když konfigurujete směrování dokumentů v klientovi pro administraci systému produktu Content Manager, mů žete určit seznam akcí, které může uživatel pro pracovní položku provést.<br /><br />Tuto volbu povolte, pokud chcete použít seznam akcí ze serveru Content Manager. Tato nastavení se použijí v kontextové nabídce a v okně Upravit vlastnosti příslušné pracovní položky.<br /><br /><b>Důležité:</b> Nastavení v seznamu akcí přepíší libovolné přizpůsobené nabídky, které nakonfigurujete v nástroji pro administraci produktu Content Navigator. Pokud seznam akcí neobsahuje žádná nastavení, uživatel nebude moci provádět s pracovními položkami žádné akce.",

		admin_repcfg_box_share: "Sdílet prostřednictvím produktu Box",
		admin_repcfg_box_share_p8_hover: "Umožňuje uživatelům sdílet dokument z tohoto úložiště. Sdílení dokumentu zahrnuje zkopírování souboru do produktu Box, vytvoření odkazu a odeslání odkazu e-mailem.<br /><br />Povolíte-li sdílení prostřednictvím produktu Box, produkt IBM Content Navigator vytvoří v úložišti datový modul sdílení prostřednictvím produktu Box. Chcete-li nainstalovat doplněk produktu IBM Content Navigator pro sdílení prostřednictvím produktu Box, musíte být k úložišti připojeni jako administrátor indexového serveru.",

		admin_menu_type_icon: "Ikona Typ nabídky",
		admin_menu_toolbar_hover: "Panely nástrojů",
		admin_menu_toolbar_custom_hover: "Vlastní panel nástrojů",
		admin_menu_contextMenu_hover: "Kontextová nabídka",
		admin_menu_contextMenu_custom_hover: "Vlastní kontextová nabídka",

		admin_menu_contextMenu_custom_empty: "V konfigurovaném modulu plug-in nejsou definované žádné kontextové nabídky.",
		admin_menu_toolbar_custom_empty: "V konfigurovaném modulu plug-in nejsou definované žádné vlastní panely nástrojů.",

		admin_file_type_category_filters: "Filtry typů souborů:",
		admin_file_type_category_filters_hover_help: "Určete seznam typů souborů, které uživatelé mohou používat v následujících situacích:<ul><li>Zúžení seznamu výsledků při hledání nebo procházení v produktu IBM Content Navigator for Microsoft Office<li>Zúžení seznamu výsledků při prohledávání úložiště produktu IBM FileNet P8 v rámci webového klienta<li>Omezení typů souborů, které mohou uživatelé přidávat do úložiště s použitím šablony položky</ul>",
		admin_file_type_only_use_in_et_folder_association: "Zobrazovat pouze v přidruženích složek šablon položek",
		admin_office_config_properties_label: "Vlastnosti aplikací Office",
		admin_office_config_type_label: "Datový typ",
		admin_office_config_mapped_property_label: "Vlastnost úložiště",
		admin_office_config_properties_hover_help: "Zadejte a poté přidejte název každé vlastnosti aplikací Microsoft Office, kterou chcete mapovat na vlastnost úložiště. Datový typ všech vlastností se musí shodovat.",
		admin_office_config_mapped_property_hover_help: "Chcete-li mapovat Vlastnosti aplikací Office na více než jednu vlastnost úložiště, je nutné vytvořit nové mapování vlastností.",
		admin_new_property_mapping_title: "Nové mapování vlastností",
		admin_property_mapping_title: "Upravit mapování vlastností",
		admin_property_mapping_instruction: "Určete vlastnosti aplikací Microsoft Office, které chcete mapovat na vlastnost v úložišti. Datový typ vlastností aplikací Office se musí shodovat s datovým typem vlastnosti v úložišti. <br /><br />Pokud dokument aplikací Office obsahuje více vlastností z daného mapování, produkt IBM Content Navigator použije k naplnění úložiště první vlastnost v seznamu.",
		admin_ms_general_settings: "Obecná konfigurace:",
		admin_ms_delete_local_settings: "Odstranit lokální soubory v případě, že uživatelé:",
		admin_ms_outlook_options: "Integrace s produktem Outlook:",
		admin_ms_enable_props_mapping: "Mapování vlastností aplikací Office na vlastnosti úložiště v případě, že uživatelé:",
		admin_ms_open_doc_when_checkout: "Automaticky zapůjčit dokument při otevření",
		admin_ms_open_doc_when_checkout_hover_help: "Výběrem této volby uživatelům zabráníte v přepsání souboru v úložišti starší verzí daného souboru.",
		admin_ms_prompt_close_office: "Zobrazit výzvu k vrácení dokumentů při zavření aplikací Office",
		admin_ms_prompt_close_office_hover_help: "Při výběru této volby uživatelé nezapomenou vrátit svou práci.",
		admin_ms_add_with_entry_template_only: "Zobrazit pouze akci Přidat se šablonou",
		admin_ms_delete_local_on_add: "Odstranit lokální soubory v případě, že uživatelé přidávají dokumenty",
		admin_ms_delete_local_on_checkin: "Odstranit lokální soubory v případě, že uživatelé vracejí dokumenty nebo zruší zapůjčení",
		admin_ms_delete_local_on_add_hover_help: "Když uživatel přidá dokument do produktu IBM Content Navigator for Microsoft Office, dokument bude přidán do úložiště a lokální kopie dokumentu zůstane otevřená, aby si uživatelé mohli okamžitě zapůjčit dokument a provést změny.<br /><br />Tuto volbu vyberte, chcete-li automaticky zavřít a odstranit lokální kopii dokumentu po jeho přidání do úložiště.",
		admin_ms_delete_local_on_checkin_hover_help: "Když uživatel vrátí dokument do produktu IBM Content Navigator for Microsoft Office, dokument bude vrácen do úložiště a lokální kopie dokumentu zůstane otevřená. Po provedení akce zrušení zapůjčení zůstane lokální kopie dokumentu otevřena také. Když je lokální kopie otevřena, uživatelé si mohou dokument okamžitě vypůjčit znovu a provádět změny.<br /><br />Tuto volbu vyberte, chcete-li automaticky zavřít a odstranit lokální kopii dokumentu po jeho vrácení nebo provedení akce zrušení zapůjčení.",
		admin_ms_delete_local_on_save: "Uložit dokument",
		admin_ms_prompt_for_props_on_add: "Zobrazit výzvu k zadání hodnot vlastností při přidání e-mailů do úložiště",
		admin_ms_prompt_for_props_on_add_hover_help: "Pokud tuto volbu nevyberete, webový klient bude používat mapování vlastností aplikace Outlook definované pro dané úložiště.<br /><br />Pokud je ke složce, do níž jsou přidávány e-maily, přidruženy šablony položek, nemusí se uživateli zobrazit výzva k zadání vlastností.",
		admin_ms_delete_email_on_add: "Odstranit e-mail z e-mailového serveru při přidání do úložiště",
		admin_ms_send_email_as_link_only: "Zabránit uživatelům v odesílání dokumentů jako příloh",
		admin_ms_send_email_as_link_only_hover_help: "Při výběru této volby mohou uživatelé v aplikaci Outlook dokumenty odesílat pouze jako odkazy. Tato možnost zajišťuje, že dokumenty mohou zobrazit pouze uživatelé, kteří mají příslušná oprávnění pro dané úložiště.",
		admin_ms_enable_prop_mapping_for_add: "Mapovat vlastnosti aplikací Office na vlastnosti úložiště, když uživatelé přidají či vrátí dokument",
		admin_ms_checkout_document_after_add: "Automaticky zapůjčit dokumenty po jejich přidání do úložiště",
		admin_no_default_document_type_filtering: "Vracet standardně všechny typy dokumentů, když uživatelé spustí hledání",
		admin_no_default_document_type_filtering_hover_help: "Při výchozím chování produktu IBM Content Navigator for Microsoft Office se uživatelům v rámci hledání zobrazí pouze typ dokumentu pro aktuální aplikaci. Při hledání z aplikace Microsoft Word je například jako výchozí vybrán typ dokumentu Word.<br/><br/>Výběrem této volby je však zrušeno zaškrtnutí políček Typy dokumentů, takže se uživatelům zobrazí všechny dokumenty vrácené hledáním. Uživatelé mohou toto nastavení potlačit výběrem jednoho či více typů dokumentů před spuštěním hledání.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Určete, zda chcete mapovat vlastnosti dokumentu definované pro dokumenty aplikací Microsoft Office na vlastnosti definované v úložišti.<br /></br /><b>Důležité upozornění:</b> Při povolení této funkce je nutné konfigurovat vlastnosti aplikací Office pro každé úložiště v daném prostředí. Pokud nenamapujete vlastnosti aplikací Office na vlastnosti úložiště, tato funkce nebude fungovat.<br /><br />Tato nastavení se nevztahují na aplikaci Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Tuto volbu vyberte, chcete-li snížit počet kroků, které musí uživatelé provést, aby mohli pracovat s dokumenty po jejich přidání do úložiště.<br /></br /><b>Tip:</b> Chcete-li zajistit, že uživatelé vrátí soubory do úložiště, vyberte volbu <b>Zobrazit výzvu k vrácení dokumentů při zavření aplikací Office</b>.",
		admin_ms_show_details_recently_used: "Ukázat podrobnosti o položce <b>Nedávno použité</b>",
		admin_ms_show_details_recently_used_hover_help: "Při zobrazení seznamu nedávno použitých položek jsou standardně podrobnosti pro položky skryté,  aby bylo možné zobrazit více položek. Když tuto volbu v seznamu nedávno použitých položek vyberete, v podokně podrobností se zobrazí standardně podrobnosti pro první dokument.",
		admin_ms_show_no_permissions_warning: "Zobrazit varování, když uživatelé upraví vlastnosti nebo vrátí dokument, ale nemají oprávnění zobrazit šablonu položky dokumentu",
		admin_ms_show_no_permissions_warning_hover_help: "Pokud byl dokument v úložišti vytvořen pomocí šablony položky, ale uživatel nemá právo zobrazit šablonu položky dokumentu, nebude šablona položky načtena.<br /><br/>Když tedy uživatel upraví vlastnosti dokumentu, vlastnosti budou zobrazeny bez použití šablony položky. A když uživatel dokument vrátí, dokument je vrácen bez použití šablony položky.<br /><br />Standardně tyto akce nastávají bez informování uživatele, že šablona položky nebyla použita. Varování je pouze zaznamenáno do souboru protokolu.<br /><br />Tuto volbu vyberte, pokud chcete zobrazit varování, které okamžitě informuje uživatele, když není použita šablona položky.",
		admin_ms_hide_search_actions: "Sbalit sekci filtrů vyhledávání",
		admin_ms_hide_search_actions_hover_help: "Standardně mohou uživatelé použít filtr akcí, zadat akci, uživatele nebo skupinu uživatelů a vybrat datum nebo rozsah dat, kdy akce proběhla. Můžete například vyhledat pouze dokumenty, které jste přidali vy minulý měsíc.<br /><br />Nechcete-li povolit uživatelům používat filtry akcí, výběrem této volby skryjete filtry akcí a snížíte počet polí, která se zobrazí při definování vyhledávacích kritérií.",
		admin_ms_hide_save_document: "Skrýt volbu <b>Uložit</b> na pásu karet",
		admin_ms_hide_save_document_hover_help: "Pomocí volby <b>Uložit</b> mohou uživatelé ukládat změny dokumentu do úložiště bez nutnosti vrácení dokumentu.",
		admin_ms_indicate_managed_email_on_add: "Označovat, zda byl e-mail již přidán do úložiště",
		admin_ms_indicate_managed_email_on_add_hover_help: "Vyberete-li tuto volbu, uživatelé se dozvědí, že byl e-mail již přidán do úložiště, čímž lze snížit počet přidání e-mailu do úložiště. Je-li tato volba vybrána, bude v aplikaci Microsoft Outlook vytvořena nová barevná kategorie s názvem IBM ECM. Všechny e-maily přidané do úložiště budou automaticky přidány do kategorie Spravováno v produktu IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Volby přidání ve skupině Upravit:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Určete, které volby <b>Přidat</b> mají být k dispozici ve skupině <b>Upravit</b> na pásu karet:<ul><li>Chcete-li zobrazit tlačítko Přidat a všechny akce Přidat, které jsou k dispozici ve skupině Upravit, vyberte volbu <b>Zobrazit všechny volby Přidat</b>.</li><li>Pokud chcete uživatelům zabránit v přidávání dokumentů do úložiště nebo pokud chcete, aby uživatelé mohli přidávat dokumenty pouze z úložiště, vyberte volbu <b>Skrýt všechny volby Přidat</b>.</li><li>Chcete-li vynutit přidružení složek pro šablony položek a zabránit uživatelům ve výběru jiné šablony položky, vyberte volbu <b>Skrýt akci Přidat se šablonou</b>.</li><li>Chcete-li, aby od uživatelů bylo vyžadováno přidávání dokumentů s použitím šablon položek, vyberte volbu <b>Zobrazit pouze akci Přidat se šablonou</b>.</li></ul>",
		admin_ms_show_edit_group_add_button: "Zobrazit všechny volby Přidat (výchozí)",
		admin_ms_hide_edit_group_add_button: "Skrýt všechny volby Přidat",
		admin_ms_hide_add_with_entry_template: "Skrýt akci Přidat se šablonou",
		admin_ms_managed_in_ecm: "Spravovat v systému IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Pokud uživatelé zobrazí kategorie v aplikaci Microsoft Outlook, bude se tento popisek zobrazovat u e-mailových zpráv přidaných do úložiště produktu IBM Content Manager nebo IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Název kategorie Spravováno v produktu IBM ECM nesmí obsahovat čárku (,) ani středník (;).",
		admin_delete_open_docs_after_close: "Automaticky odstranit otevřené dokumenty po jejich zavření uživateli",
		admin_admin_delete_open_docs_after_close_hover_help: "Když uživatel otevře dokument v produktu IBM Content Navigator for Microsoft Office, je dokument stažen do adresáře dokumentů příslušného uživatele nebo do umístění určeného prostřednictvím nastavením sledování souborů pro příslušnou pracovní plochu.<br><br>Tuto volbu vyberte, chcete-li odstranit soubory, které jsou otevřeny, nikoli však zapůjčeny, když uživatelé zavřou příslušné dokumenty. Výběr této volby má následující důsledky:<ul><li>Vynucení shody se zásadami IT</li><li>Zajištění, že uživatelé pracují s nejnovějšími verzemi dokumentů</li><li>Snížení množství místa na disku použitého k uložení dokumentů</li><ul>",
		admin_ms_custom_command_configuration: "Vlastní příkazy:",
		admin_ms_custom_command_configuration_hover_help: "Na panel nástrojů produktu IBM Content Navigator for Microsoft Office v aplikacích sady Microsoft Office můžete přidat až čtyři příkazy. Příkazy lze použít k otvírání adres URL. Můžete například přidat příkaz pro otevření služby, jejímž prostřednictvím lze hledat uživatele a skupiny.",
		admin_ms_custom_command_dialog_title: "Upravit vlastní příkaz",
		admin_ms_custom_command_dialog_intro_text: "Můžete definovat příkaz, které lze použít k otevření adresy URL z panelu nástrojů produktu IBM Content Navigator for Microsoft Office v aplikacích sady Microsoft Office.",
		admin_ms_custom_command_id: "Příkaz ${0}",
		admin_ms_custom_command_available_label: "Dostupné",
		admin_ms_custom_command_available_hover_help: "Pokud je třeba adresu URL definovanou pro některý příkaz převést do stavu offline kvůli údržbě, můžete zrušit zaškrtnutí políčka pro příslušný příkaz, aby nebyl v sadě Microsoft Office zobrazován.<br/><br/><b>Důležité upozornění:</b> Uživatelé se musí z pracovní plochy odhlásit, aby se změny v produktu IBM Content Navigator for Microsoft Office projevily.",
		admin_ms_custom_command_command_id_label: "ID příkazu",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Popisek",
		admin_ms_custom_command_label_hover_help: "Určete popisek, který má být pro příslušný příkaz zobrazen v sadě Microsoft Office.",
		admin_ms_custom_command_description_label: "Popis",
		admin_ms_custom_command_description_hover_help: "Určete popis, který má být pro příslušný příkaz zobrazen v sadě Microsoft Office.",
		admin_ms_custom_command_url_label: "Adresa URL",
		admin_ms_custom_command_url_hover_help: "Určete úplnou adresu URL, která má být ze sady Microsoft Office otevřena. Adresa URL může odkazovat na webovou stránku nebo službu.",
		admin_ms_custom_command_icon_label: "Ikona",
		admin_ms_custom_command_icon_hover_help: "Určete název souboru ikony, jež má být zobrazena, například CommandIcon.png.<br/><br/><b>Důležité upozornění:</b> Soubor ikony musíte přidat do podadresáře Plugins instalačního adresáře produktu IBM Content Navigator for Microsoft Office v každém klientském počítači.<br/><br/>Pokud se soubor ikony nenachází v adresáři Plugins nebo pokud ikonu neurčíte, bude zobrazena výchozí ikona customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Popisek skupiny:",
		admin_ms_custom_command_group_name_hover_help: "Můžete určit popisek skupiny, který bude zobrazen pod vlastními příkazy na pásu karet.<br/><br/>Neurčíte-li popisek, bude pro skupinu použit popisek <b>Vlastní příkazy</b>.",
		admin_ms_ribbon_tab_label: "Popisek karty systému IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Zadejte název, který chcete zobrazovat pro kartu produktu IBM Content Navigator for Microsoft Office na pásu karet aplikace Microsoft Office. Neurčíte-li název, bude pro kartu použit název IBM ECM.",
		admin_ms_close_task_pane_on_open: "Zavřít podokno úloh v případě, že uživatelé otevřou dokumenty",
		admin_ms_close_task_pane_on_open_hover_help: "Tuto volbu vyberte, chcete-li maximalizovat prostor, ve kterém mohou uživatelé zobrazovat dokumenty v sadě Microsoft Office.<br/><br/>Pro uživatele sady Microsoft Office 2010: Chcete-li ověřit, že je podokno úloh zavřeno pro všechny dokumenty, povolte režim rozhraní více dokumentů (MDI) klepnutím na volbu <b>Možnosti</b> &gt; <b>Rozšířené</b> a zrušením výběru volby <b>Zobrazit všechna okna na hlavním panelu</b>.",
		admin_ms_open_document_options: "Volby otevření dokumentu:",
		admin_ms_delete_local_file_options: "Volby odstranění lokálních souborů:",
		admin_ms_add_and_checkin_options: "Volby přidání a vrácení:",
		admin_ms_search_options: "Volby hledání:",
		admin_ms_display_options: "Volby zobrazení:",
		admin_ms_bidirection_enable_label: "Povolit podporu pro obousměrný text",
		admin_ms_bidirection_enable_hover_help: "Tuto volbu vyberte, chcete-li uživatelům povolit zadávání či zobrazování textu v produktu IBM Content Navigator for Microsoft Office v jiném směru než zleva doprava.",
		admin_ms_text_direction_label: "Základní směr textu pro obsah:",
		admin_ms_text_direction_hover_help: "Určete směr, ve kterém je zadáván text do vstupních polí v produktu IBM Content Navigator for Microsoft Office. Toto nastavení rovněž určuje způsob zobrazení položek, jako jsou názvy složek či hodnoty vlastností.",
		admin_ms_control_threshold_label: "Minimální počet položek pro povolení hledání v předstihu:",
		admin_ms_control_threshold_hover_help: "Při výchozím nastavení je hledání v předstihu při hledání nebo nastavování vlastností s předem definovanými hodnotami v rozevíracím seznamu povoleno, je-li počet položek větší nebo roven 50. Minimální hodnotu lze změnit.",

		admin_ms_default_email_class: "Použitá třída při přidání e-mailu",
		admin_ms_default_email_class_hover_help: "Každý e-mail přidávaný do tohoto úložiště z aplikace Microsoft Outlook bude přidán do vámi určené třídy. Uživatelé nemohou tuto třídu změnit.",
		admin_ms_default_folder_class: "Použitá třída při vytvoření složek",
		admin_ms_default_folder_class_hover_help: "Každá složka vytvořená v rámci do tohoto úložiště z aplikace Microsoft Office bude přidána do vámi určené třídy. Uživatelé nemohou tuto třídu změnit.",
		admin_ms_default_folder_warn_title: "Třídu ${0} nelze použít jako třídu při vytváření složek.",
		admin_ms_default_folder_warn_name_prop_invalid: "Vlastnost názvu třídy neurčuje řetězec, název složky však musí být řetězec.<br />Vyberte jinou třídu, která má být použita při vytváření složek, nebo ve spolupráci s administrátorem produktu IBM Content Manager změňte vlastnost názvu třídy na řetězec.",
		admin_ms_default_folder_warn_req_props: "Třída obsahuje povinné vlastnosti bez hodnot. Uživatelé však při vytváření složek produktu IBM Content Navigator pro produkt Microsoft Office nemohou určovat hodnoty pro povinné vlastnosti.<br />Vyberte jinou třídu, která má být použita při vytváření složek, nebo ve spolupráci s administrátorem produktu IBM Content Manager nastavte příslušné povinné vlastnosti jako volitelné nebo jejich hodnotu předem vyplňte.",
		admin_ms_delimiter_for_office_properties: "Oddělovač pro vlastnosti řetězce s více hodnotami",
		admin_ms_delimiter_for_office_properties_hover_help: "Určete znak, který má být použit jako oddělovač pro vlastnosti řetězce, které mapujete na vlastnosti řetězce s více hodnotami. Při výchozím nastavení můžete k vlastnosti řetězce s více hodnotami přiřadit sadu hodnot použitím středníku (;) jako oddělovače hodnot. Pokud však některá z hodnot řetězce obsahuje středník, nelze tuto hodnotu řetězce přidat, nezměníte-li oddělovač na jiný znak. Můžete například změnit oddělovač na čárku (,).",
		admin_ms_outlookPropertyRemembrance : "Zapamatovat si nastavení při ukládání zpráv a příloh",
		admin_ms_outlookPropertyRemembrance_hover_help : "Hodnoty vlastností, umístění, výběr třídy a zabezpečení přiřazené ke zprávám a přílohám se zapamatují a budou použity jako výchozí nastavení při přidávání položek v budoucnu.",

		admin_file_type_name_hover_help: "Název - bublinová nápověda",
		admin_file_type_description_hover_help: "Popis - bublinová nápověda",
		admin_file_type_dialog_title: "Upravit filtr typů souborů",
		admin_new_file_type_dialog_title: "Nový filtr typů souborů",
		admin_mobile_feature_dialog_title: "Funkce",
		admin_mobile_feature_dialog_new_title: "Nová funkce",
		admin_file_type_instructions: "Vytvořte filtr, který uživatelé mohou použít k omezení výsledků hledání. Pro filtr můžete mapovat více typů MIME.",
		admin_file_type_filter_place_holder: "Filtrovat typy MIME",
		admin_new_button_label: "Nový",
		admin_edit_button_label: "Upravit",
		admin_delete_button_label: "Odstranit",
		admin_copy_button_label: "Kopírovat",
		admin_verify_button_label: "Ověřit",
		admin_availabe_filters_label: "Dostupné filtry",
		admin_selected_filters_label: "Vybrané filtry",

		admin_mobile_access: "Přístup mobilní aplikace:",
		admin_mobile_access_hover_help: "Chcete-li produkt IBM Content Navigator používat na mobilním zařízení, doporučuje se umožnit uživatelům přístup k této pracovní ploše z mobilní aplikace.<br /><br />Pokud přístup k této pracovní ploše z mobilní aplikace zakážete, uživatelé budou nadále moci přistupovat k webovému klientovi pomocí mobilního prohlížeče. Webový klient však není navržen pro přístup z mobilního zařízení.",

		admin_mobile_access_allow_label: "Povolit uživatelům:",
		admin_mobile_allow_add_photos: "Přidat fotografie z fotoaparátu a knihovny fotografií",
		admin_mobile_allow_add_docs: "Přidat dokumenty do úložiště a vytvořit složky",
		admin_mobile_allow_open_docs: "Otvírat dokumenty v jiných aplikacích",
		admin_mobile_allow_add_docs_hover_help: "Uživatelé mohou vytvářet složky nebo přidávat dokumenty z jiných mobilních aplikací. Příkladem je  dokument přiložený k e-mailu.",
		admin_mobile_allow_open_docs_hover_help: "Uživatelům se zobrazí výzva k výběru aplikace, která má být použita k zobrazení vybraného dokumentu. Pokud je k dispozici pouze jedna aplikace, bude použita právě ta.",
		admin_mobile_features: "Funkce:",
		admin_mobile_features_hover_help: "Určete funkce této pracovní plochy, které se mají zobrazit v mobilní aplikaci IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nová funkce",
		admin_mobile_move_up_button_label: "Přesunout nahoru",
		admin_mobile_move_down_button_label: "Přesunout dolů",
		admin_desktop_mobile_instructions: "Pokyny k nastavení mobilního zařízení",
		admin_desktop_max_number_of_docs_to_add: "Maximální počet přidávaných dokumentů:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Určete maximální počet dokumentů, které uživatelé mohou najednou přidat. Výchozí maximální hodnota je 50. Lze však nastavit maximální hodnotu až 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maximální počet měněných položek:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Určete maximální počet položek, které uživatelé mohou najednou změnit. Výchozí maximální hodnota je 50. Lze však nastavit maximální hodnotu až 300.",
		admin_desktop_max_conversion_size: "Maximální objem dat pro převody do formátu PDF (v MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Omezení:</b> Toto nastavení není používáno produktem IBM Content Manager OnDemand.<br/><br/>Určete maximální objem dat, který lze převést do formátu PDF. Toto omezení se uplatňuje, pokud uživatelé stahují položky jako soubory PDF nebo odesílají položky e-mailem jako soubory PDF.<br /><br />I v případě, že nelze určit velikost každého dokumentu, jsou dokumenty převedeny do formátu PDF.<br/><br/>Výchozí mezní hodnota je 200 MB. Nastavení mezní hodnoty vyšší než 200 MB může mít vliv na výkon systému.",
		admin_desktop_timeProperties: "Časové razítko:",
		admin_desktop_time_properties_hover_help: "<b>Pouze pro uživatele produktu IBM FileNet P8:</b> Toto nastavení se vztahuje na přizpůsobené vlastnosti, a nikoli na systémové vlastnosti. Vlastnost Změněno uživatelem bude například zobrazovat časovou část časového razítka i v případě, že vyberete volbu <b>Zobrazovat pouze datovou část časového razítka</b>.<br/><br/>Toto nastavení nezmění časové razítko v úložišti.",
		admin_desktop_disable_time_stamp: "Zobrazovat úplné časové razítko",
		admin_desktop_enable_time_stamp: "Zobrazovat pouze datovou část časového razítka",
		admin_desktop_timezone: "Časové pásmo:",
		admin_desktop_timezone_localuser: "Zobrazovat místní časové pásmo uživatele",
		admin_desktop_timezone_alluser: "Zobrazovat totéž časové pásmo pro všechny uživatele",
		admin_desktop_timezone_hover_help: "Můžete určit, zda se uživatelům bude zobrazovat časové razítko v příslušném místním časovém pásmu, nebo zda se bude všem uživatelům zobrazovat totéž časové razítko.<br/><br/>Toto nastavení nezmění časové razítko v úložišti. Vybrané nastavení však určuje časové pásmo, které je použito k vytváření časového razítka v úložišti, když uživatelé přidávají či upravují položky.",
		admin_desktop_mobile_feature_display_label: "Zobrazit",
		admin_desktop_mobile_feature_icon_file_label: "Soubor ikony",
		admin_mobile_feature_dialog_icon_file_label: "Soubor ikony:",
		admin_mobile_feature_dialog_url_label: "Adresa URL:",
		admin_desktop_mobile_feature_name_label: "Název",
		admin_desktop_mobile_select_feature_label: "Vybrat funkci",
		admin_desktop_mobile_feature_icon_label: "Ikona Funkce",
		admin_desktop_share_admin_none: "Administrátor není nastaven.",
		admin_desktop_share_admin_edit_label: "Nastavit administrátora...",
		admin_browse_icon: "Ikona procházení",
		admin_search_icon: "Ikona hledání",
		admin_favorites_icon: "Ikona oblíbených položek",
		admin_casesearch_icon: "Ikona případu",
		admin_datacap_icon: "Ikona Datacap",
		admin_system_defined: "Definované systémem",
		admin_icon_file_placeholder_text: "Umístění souboru (tj. http://icons.com/obrazek.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Kořenová fazeta",
		admin_folder_default: "Výchozí",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Panely nástrojů",
		admin_menu_context_menus: "Kontextové nabídky",
		admin_menu_office_toolbars: "Příkazy pásu karet Microsoft Office",
		admin_menu_office_menus: "Kontextové nabídky Microsoft Office",

		admin_file_name_label: "Název souboru:",
		admin_exportconfiguration_security_label: "Zahrnout uživatele a skupiny s autorizací pro používání této pracovní plochy",
		admin_exportconfiguration_instruction: "Můžete exportovat pracovní plochy včetně konfigurací úložišť a konfigurací modulů plug-in přidružených k vybraným pracovním plochám do souboru, který lze importovat do jiné instance produktu IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportovat pracovní plochu",
		admin_exportconfiguration_button_label: "Exportovat",
		admin_dialog_select_all: "Vybrat vše",
		admin_dialog_deselect_all: "Vymazat vše",

		admin_importconfiguration_instruction: "Položky ve vybraném konfiguračním souboru budou importovány do tohoto systému. Pokud však již v systému existuje položka se stejným ID, musíte rozhodnout, zda má být zachována, nebo přepsána.",
		admin_importconfiguration_dialog_label: "Importovat pracovní plochu",
		admin_importconfiguration_reason_dialog_label: "Importovat důvody redakce",
		admin_importconfiguration_button_label: "Importovat",
		admin_to_be_imported: "Položka konfigurace k importu",
		admin_on_target_system: "Existující položka v cílovém systému",
		admin_import_short_warning_message: "Následující položky již v tomto systému existují. Vyberte položky, které chcete v tomto systému nahradit:",
		admin_import_warning_message: "Následující položky konfigurace mají shodné ID jako položky, které již existují v cílovém systému. Vyberte pouze ty položky, které chcete importovat a přepsat v cílovém systému.<br /><br />Pokud nějakou konfigurační položku nechcete přepsat, vytvořte kopii položky v instanci, ze které exportujete pracovní plochu, přidělte jí odlišné ID a přidružte ji k ploše. Znovu vyexportujte pracovní plochu a poté ji importujte do této instance.",
		admin_choose_file_to_import_label: "Vybrat soubor pro import:",
		admin_download_imported_log: "Stáhnout sestavu",
		admin_desktop_import_summary: "Souhrn importu pracovní plochy",
		admin_reason_import_summary: "Souhrn importu důvodů redakce",
		admin_rba_import_summary: "Souhrn importu role administrace",
		admin_import_open_tabs_checking: "Než budete moci importovat pracovní plochy, je třeba v nástroji pro administraci zavřít všechny karty kromě karty <bold>Pracovní plochy</bold>.",
		admin_import_no_conflict: "Následující položky budou importovány:",
		admin_desktop_invalid: "Neplatná pracovní plocha",
		admin_desktop_warning: "Pracovní plocha byla uložena s varováními.",
		admin_repos_warning: "Úložiště bylo uloženo s varováními.",
		admin_config_type_icon: "Ikona Typ položky konfigurace",

		admin_approval_workflow: "Sled prací se schválením",
		admin_approval_workflow_hover: "Umožňuje uživatelům spustit předdefinovaný sled prací se schválením. Můžete zakázat sled prací se schválením a umožnit uživatelům spustit vlastní sled prací se schválením, který je definován na základě odběru. Při výchozím nastavení je sled prací se schválením povolen.<br><br><b>Důležité upozornění:</b> Pokud sled prací se schválením povolíte, je třeba také zajistit, že jedna nebo obě předdefinované definice sledu prací (ICNParallelDocumentApproval.pep a ICNSequentialDocumentApproval.pep) jsou přidány do úložiště a přeneseny do produktu Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Nelze určit uživatele a skupiny s přístupem k této pracovní ploše.",
		admin_cannot_add_desktop_members_error_explanation: "Nemáte potřebná oprávnění pro načítání informací o uživatelích a skupinách.",
		admin_cannot_add_desktop_members_error_userResponse: "Přihlaste se s jiným jménem uživatele nebo požádejte administrátora produktu IBM Content Manager o udělení oprávnění UserACLOwner vyžadovaného pro načítání informací o uživatelích a skupinách.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Nelze vybrat uživatele a skupiny.",
		admin_cannot_select_users_groups_error_explanation: "Nemáte potřebná oprávnění pro načítání informací o uživatelích a skupinách.",
		admin_cannot_select_users_groups_error_userResponse: "Přihlaste se s jiným jménem uživatele nebo požádejte administrátora produktu IBM Content Manager o udělení oprávnění UserACLOwner vyžadovaného pro načítání informací o uživatelích a skupinách.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Klient ověřování OAuth2 nebyl nalezen.",
		oauth_client_not_found_error_explanation: "ID klienta ověřování OAuth2 ${0} nebylo nalezeno.",
		oauth_client_not_found_error_userResponse: "Obraťte se na administrátora systému a informujte jej, že ID klienta ověřování OAuth2 nebylo nalezeno.",
		oauth_client_not_found_error_adminResponse: "Zkontrolujte konfiguraci úložiště a ověřte, že obsahuje správné ID klienta ověřování OAuth2.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "ID_klienta",

		oauth_login_failed_error: "Přihlášení k úložišti se nezdařilo.",
		oauth_login_failed_error_explanation: "Pokus o přihlášení k úložišti ${0} se nezdařil.",
		oauth_login_failed_error_userResponse: "Ověřte správnost ID uživatele a hesla a zkuste přihlášení zopakovat.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "ID_úložiště",

		oauth_error_return_error: "Došlo k chybě při pokusu o přihlášení k umístění ${0}.",
		oauth_error_return_error_explanation: "Pokus o autorizaci aplikace ${0} se nezdařil.",
		oauth_error_return_error_userResponse: "Obraťte se na administrátora systému a předejte mu následující informace: Pokus o autorizaci aplikace ${0} se nezdařil a byla vrácena následující chybová zpráva: <br>${1}<br><b>Chyba:</b> ${2}.<br><b>Popis:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Další informace o chybě naleznete v souborech protokolu webového aplikačního serveru. Další informace o souborech protokolu naleznete v tématu &quot;Soubory protokolu produktu IBM Content Navigator&quot; na webu IBM Knowledge Center. S použitím informací o pokusu o autorizaci aplikace ${0} se pokuste odstranit problém a ověřit, že je ověřování OAuth2 povoleno.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Cílová aplikace ověřování OAuth",
		oauth_error_return_error_1: "chybová_zpráva",
		oauth_error_return_error_2: "chyba",
		oauth_error_return_error_3: "popis_chyby",

		oauth_error_unknown: "Nerozpoznaná chybová zpráva ověřování OAuth.",

		delete_share_permission_error: "Sdílení nebylo odstraněno.",
		delete_share_permission_error_explanation: "Nemáte potřebná oprávnění pro odstranění sdílení.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Tuto položku nemůžete sdílet.",
		class_not_support_share_error_explanation: "Třída ${0} není nastavena tak, aby podporovala sdílení.",
		class_not_support_share_error_0: "název_třídy",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Tuto položku nemůžete sdílet.",
		rbr_not_support_share_error_explanation: "Do položky byl přidán citlivý obsah.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Zařízení, ze kterého se uživatel pokouší přihlásit, není autorizováno pro přístup k účtu uživatele.",
		box_oauth_error_invalid_request: "V požadavku chybí vyžadovaný parametr, je v něm uvedena neplatná hodnota parametru, je v něm uveden parametr vícekrát než jednou nebo je nesprávně utvořen z jiného důvodu.",
		box_oauth_error_unsupported_response_type: "Autorizační server nepodporuje získání autorizačního kódu touto metodou. Zkontrolujte hodnotu parametru kódu v požadavku.",
		box_oauth_error_access_denied: "Vlastník prostředku nebo autorizační server odepřel zpracování požadavku.",
		box_oauth_error_temporarily_unavailable: "Rychlost vašeho zařízení je omezena. Je třeba, abyste snížili rychlost vyřizování požadavků na autorizaci nebo chvíli počkali.",
		box_oauth_error_unknown: "Nerozpoznaná chybová zpráva produktu Box.",

		admin_default_search_type: "Výchozí typ hledání",
		admin_default_search_type_hover: "Určete volbu vybranou jako výchozí v poli <b>Vyhledat</b> v nabídce <b>Volby hledání</b>.",
		admin_default_search_type_documents: "Dokumenty",
		admin_default_search_type_folders: "Složky",
		admin_default_search_type_folders_and_documents: "Dokumenty a složky",

		admin_restricted_search_type: "Povolit vyhledávání v položkách:",
		admin_restricted_search_type_hover: "Při výchozím nastavení mohou uživatelé vyhledávat v dokumentech i složkách. Chcete-li skrýt volbu Vyhledávání v položkách a omezit vyhledávání pouze na dokumenty, vyberte volbu Dokumenty a zrušte výběr volby Složky. </br></br>Povolíte-li vyhledávání v dokumentech i složkách, vyberte výchozí volbu pro zobrazení po otevření podokna vyhledávání.",
		admin_restricted_search_type_documents: "Dokumenty",
		admin_restricted_search_type_folders: "Složky",
		admin_restricted_search_type_folders_and_documents: "Dokumenty a složky",

		admin_default_search_version: "Výchozí verze hledání",
		admin_default_search_version_hover: "Určete volbu vybranou jako výchozí v poli <b>Verze</b> v nabídce <b>Volby hledání</b>.",

		admin_all_classes_search: "Prohledat všechny třídy",
		admin_all_classes_search_hover: "Určete, zda uživatelé mohou prohledávat všechny třídy, a pokud ano, co se má zahrnout do hledání dokumentů.",
		admin_all_classes_search_removed_hover: "Volby prohledávání všech tříd nejsou k dispozici, protože parametr kontextu allPseudoClassHidden v aplikaci web.xml produktu Navigator je nastaven na hodnotu Ano (true).",
		admin_all_classes_search_hide: "Odebráním volby se prohledají všechny třídy",
		admin_all_classes_search_documents_only_documents: "Hledání dokumentů zahrnuje pouze dokumenty, uložená hledání a šablony položky",
		admin_all_classes_search_documents_non_folders: "Hledání dokumentů zahrnuje všechny položky, které nejsou složky",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Zobrazení stromu:",
		admin_feature_config_tree_view_hoverhelp: "Určete, zda uživatelé mohou přistupovat k seznamu složek v úložišti prostřednictvím podokna procházení. Pokud podokno procházení skryjete, musí uživatelé přecházet ke složkám v úložišti prostřednictvím seznamu obsahu.",
		admin_feature_config_selected_repositories_label: "Úložiště:",
		admin_feature_config_selected_repositories_hoverhelp: "Vyberte úložiště, k nimž mohou uživatelé v rámci této funkce přistupovat.",
		admin_feature_config_selected_repositories_select_state_hdr: "Vybrat úložiště",
		admin_feature_config_selected_repositories_name_hdr: "Název úložiště",
		admin_feature_config_selected_repositories_show_hdr: "Zobrazit",
		admin_feature_config_invalid_icon_title: "Pro funkci chybí některá požadovaná nastavení.",
		admin_feature_config_view_select_hdr: "Vybrat zobrazení",
		admin_feature_config_view_hdr: "Zobrazit",
		admin_feature_config_view: "Zobrazit",
		admin_feature_config_views: "Zobrazení:",
		admin_feature_config_views_hoverhelp: "Určete, která zobrazení mohou uživatelé aplikovat na seznam obsahu. Zobrazení jsou zobrazena v pořadí, v jakém jsou uvedena. První vybrané zobrazení je výchozím zobrazením pro příslušnou funkci.<br><br><b>Důležité upozornění:</b> Povolíte-li zobrazení Filmový pás, je třeba konfigurovat prohlížeč pro převod kódu HTML, aby bylo možné zobrazovat náhledy dokumentů.",

		admin_custom_dialog_name: "Název:",
		admin_custom_dialog_value: "Hodnota:",
		admin_custom_setting_name_hover: "Zadejte název nastavení prohlížeče Daeja ViewONE, které chcete přidat do konfigurace. Další informace o nastavení konfigurace naleznete v dokumentaci k prohlížeči Daeja ViewONE.",
		admin_custom_setting_value_hover: "Zadejte hodnotu, kterou chcete použít pro nastavení konfigurace prohlížeče Daeja ViewONE. Další informace o platných hodnotách pro nastavení konfigurace naleznete v dokumentaci k prohlížeči Daeja ViewONE.",

		entry_template_name_required_message: "V rámci nastavení šablony položky je vyžadováno pole názvu.",
		entry_template_name_invalid_message: "Pole názvu v rámci nastavení šablony položky nesmí obsahovat následující znaky: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Jsou-li v rámci nastavení šablony položky vybráni prostřednictvím pole Sdílet s uživatelem konkrétní uživatelé a skupiny, je třeba určit alespoň jednoho uživatele nebo skupinu.",
		entry_template_no_permission_to_save_to_teamspace_message: "Nemáte oprávnění k přidávání šablon položek do týmového prostoru (${0}) vybraného prostřednictvím volby Uložit do v rámci nastavení šablony položky.",
		entry_template_save_in_destination_required_message: "Je třeba určit výchozí umístění pole Uložit do v části <b>Nastavit umístění úložiště položky</b>.",
		entry_template_save_in_destination_must_select_folder: "Pokud skryjete pole <b>Uložit do</b> a požadujete, aby uživatelé přidávali nové položky do složky, je třeba vybrat složku v poli <b>Výchozí umístění pole Uložit do</b> v části <b>Nastavit umístění úložiště položky</b>.",
		entry_template_what_to_save_required_message: "Vyberte alespoň jednu možnost pro volbu Co chcete uložit? v rámci nastavení voleb.",
		entry_template_custom_workflow_empty_message: "Vyberete-li volbu <b>Vlastní sled prací</b>, je třeba vyhledat a vybrat sled prací, který chcete použít.",

		entry_template_new: "Nová šablona položky",
		entry_template_name_hover: "Název šablony položky nesmí obsahovat následující znaky: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Název šablony položky nesmí obsahovat žádný z následujících znaků: * \\ / : ? \" < > |",
		entry_template_description_hover: "Zadejte popis, který uživatelům umožní odlišit tuto šablonu položky od ostatních šablon položek.",
		entry_tempalte_save_in_hover: "Určete, kam chcete šablonu položky uložit.<br><br><b>Omezení:</b> Uložíte-li šablonu položky do týmového prostoru, budete ji moci používat pouze v rámci příslušného týmového prostoru.",
		entry_template_inherit_hover: "Vyberete-li tuto volbu, budou nastavení zabezpečení pro nadřízenou složku přidána do seznamu uživatelů a skupin, s nimiž je šablona položky sdílena.",
		entry_template_builder_aria_label: "Tvůrce šablon položek",
		entry_template_builder_layout_aria_label: "Tvůrce vlastností šablon položek",

		entry_template_settings_document: "Definovat šablonu položky",
		entry_template_settings_folder: "Nastavit umístění úložiště položky",
		entry_template_settings_folder_intro: "Určete umístění, ve kterém budou uloženy položky přidané s použitím této šablony položky.",
		entry_template_settings_properties: "Nastavit vlastnosti položky",
		entry_template_settings_properties_intro: "Můžete určit výchozí nebo předdefinované hodnoty pro položky přidané s použitím této šablony položky. Kromě toho můžete změnit rozvržení vlastností, a tím určovat, které vlastnosti a v jakém pořadí budou zobrazeny.",
		entry_template_settings_workflow: "Konfigurovat sled prací pro položku",
		entty_template_settings_workflow_intro: "Můžete určit, zda při přidání položek s použitím šablony položky bude spuštěn sled prací.",
		entry_template_settings_security: "Nastavit zabezpečení položky",
		entry_template_settings_security_intro: "Můžete určit výchozí nebo předdefinované zabezpečení pro položky přidané s použitím této šablony položky. Uživatelé s příslušnými oprávněními budou moci změnit zabezpečení položky po jejím přidání.",
		entry_template_settings_options: "Nastavit volby pro položku",
		entry_template_xt_warning: "Uložením změn do této šablony položky bude příslušná šablona položky produktu IBM Workplace XT převedena na šablonu položky produktu IBM Content Navigator. Produkt IBM Workplace XT nepodporuje šablony položek produktu IBM Content Navigator.",

		entry_template_properties_edit_layout: "Upravit rozvržení...",
		entry_template_properties_read_only: "Pouze pro čtení",
		entry_template_properties_hidden: "Skryté",

		entry_template_destination_show: "Zobrazit pole <b>Uložit do</b>",
		entry_template_destination_show_hover: "Zobrazíte-li pole <b>Uložit do</b>, uživatelé budou moci změnit umístění pro ukládání položek.",
		entry_template_destination_hide: "Skrýt pole <b>Uložit do</b>",
		entry_template_destination_hide_hover: "Skryjete-li pole <b>Uložit do</b>, uživatelé nebudou moci změnit umístění pro ukládání položek.",
		entry_template_folder_save_in_default: "Výchozí umístění pole <b>Uložit do</b>:",
		entry_template_folder_save_in_default_hover: "Určete výchozí umístění pro položky přidané s použitím této šablony položky.<br><br>Vybrané výchozí umístění klade omezení na chování běhového prostředí pro šablonu položky:<ul><li>Uživatelé nemohou vybrat jiné úložiště.</li><li>Je-li výchozím umístěním týmový prostor, uživatelé nemohou vybrat jiný týmový prostor.</li></ul>Pokud však uživatelé přidruží tuto šablonu položky ke složce, mohou potlačit umístění úložiště konfigurované pro tuto šablonu položky.",
		entry_template_folder_restrict_choice: "Vyžadovat, aby uživatelé přidávali položky do výchozího umístění nebo podřízené složky výchozího umístění",
		entry_template_folder_file_in_required: "Vyžadovat, aby uživatelé přidávali nové položky do složky",
		entry_template_folder_file_in_required_hover: "Pokud tuto volbu nevyberete, uživatelé budou moci přidávat položky do kořenové složky úložiště.<br><br><b>Omezení:</b> Konfigurace pracovní plochy může vyžadovat, aby uživatelé vybrali složku.",

		entry_template_document_type_show: "Zobrazit pole <b>Co chcete uložit?</b>",
		entry_template_document_type_show_hover: "Zobrazíte-li pole <b>Co chcete uložit</b>, budou vybrané položky zobrazeny jako volby v poli <b>Co chcete uložit</b>.",
		entry_template_document_type_hide: "Skrýt pole <b>Co chcete uložit?</b>",
		entry_template_document_type_hide_hover: "Pokud pole <b>Co chcete uložit</b> skryjete, bude v případě, že uživatelé budou přidávat dokumenty s použitím této šablony položky, vždy použit vybraný typ dokumentu.",
		entry_template_document_type: "Tuto šablonu položky lze použít pro přidání následujících položek:",
		entry_template_document_type_hover: "Zobrazíte-li pole <b>Co chcete uložit</b>, budou vybrané položky zobrazeny jako volby v poli <b>Co chcete uložit</b>.<br><br>Pokud pole <b>Co chcete uložit</b> skryjete, bude v případě, že uživatelé budou přidávat dokumenty s použitím této šablony položky, vždy použit vybraný typ dokumentu.",

		entry_template_misc: "Další volby:",
		entry_template_auto_classify_show: "Automaticky klasifikovat obsah dokumentu",
		entry_template_auto_classify_show_hover: "Je-li dokument klasifikován v produktu FileNet Content Manager, je prozkoumán obsah dokumentu a určí se odpovídající třída hodnoty vlastností pro příslušný dokument.<br><br>Obraťte se na administrátora systému s dotazem, zda je v produktu Content Platform Engine povolena klasifikace obsahu.<br><br>Povolíte-li tuto volbu, může dojít ke změně třídy a vlastností dokumentu při přidání dokumentu do úložiště.",
		entry_template_allow_duplicate_file_names: "Povolit dokumenty s duplicitními názvy souborů",
		entry_template_allow_duplicate_file_names_hover: "Při výchozím nastavení lze do složky v produktu FileNet Content Manager přidávat dokumenty se stejným názvem. Výběr této volby můžete zrušit, chcete-li, aby každý soubor ve vybraném umístění úložiště měl jedinečný název.",
		entry_template_allow_compound_documents: "Povolit, aby tento dokument byl nadřízen složeném dokumentu",
		entry_template_version_show: "Zobrazit volby verze pro přidávání a vracení",
		entry_template_version_hide: "Skrýt volby verze pro přidávání a vracení",
		entry_template_version_to_add_as: "Výchozí verze pro přidání jako:",
		entry_template_version_default: "Výchozí volba verze:",
		entry_template_version_default_checked: "Hlavní verze",
		entry_template_version_default_unchecked: "Vedlejší verze",
		entry_template_version_display: "Verze dokumentu:",
		entry_template_version_display_show: "Zobrazit",
		entry_template_version_display_hide: "Skrýt",
		entry_template_version_default_add: "Výchozí verze pro přidání jako:",

		entry_template_checkin_version_show: "Zobrazit volby verze pro vracení",
		entry_template_checkin_version_hide: "Skrýt volby verze pro vracení",

		entry_template_checkin_version_message_no_versions: "Zásady pro verzi vybrané třídy brání uživatelům ve vrácení nové verze dokumentu.",
		entry_template_checkin_version_message_always_version: "Zásady pro verzi vybrané třídy brání uživatelům v nahrazení aktuální verze dokumentu.",

		entry_template_applied: "Použít tuto šablonu položky, pokud uživatelé:",
		entry_template_applied_add: "Přidat dokumenty (požadováno)",
		entry_template_applied_add_folder: "Vytvořit složku (požadováno)",
		entry_template_applied_checkin: "Vrátit",
		entry_template_applied_properties_group: "Zobrazit nebo upravit vlastnosti:",
		entry_template_applied_properties: "V okně Vlastnosti",
		entry_template_applied_viewer: "V prohlížeči apletů",
		entry_template_applied_docinfo: "V podokně Informace o dokumentu",
		entry_template_applied_no_class_support: "Tuto šablonu položky lze použít k přidávání položek, nelze ji však použít k vracení dokumentů ani k zobrazování či úpravám vlastností. Aby byly podporovány tyto situace, je třeba upravit vybranou třídu. Potřebujete-li používat šablonu položky v těchto situacích, požádejte administrátora, aby prostřednictvím nástroje pro administraci třídu upravil tak, aby v ní bylo možné ukládat ID šablon položek.",
		entry_template_applied_no_child_component_support: "Vybraná třída má podřízené komponenty a je definováno rozvržení vlastností. Rozvržení vlastností nepodporuje podřízené komponenty. Podřízené komponenty se nezobrazí uživateli.",
		entry_template_applied_child_component: "Vybraná třída má podřízené komponenty. Zobrazí se uživateli, ale nelze konfigurovat podřízené komponenty v této šabloně položky.",

		entry_template_properties_show: "Zobrazit sekci <b>Vlastnosti</b>",
		entry_tempalte_properties_show_hover: "Pokud sekci <b>Vlastnosti</b> zobrazíte, mohou uživatelé upravovat hodnoty vlastností zobrazené v rámci šablony položky, pokud se nejedná o vlastnosti pouze pro čtení.",
		entry_template_properties_hide: "Skrýt sekci <b>Vlastnosti</b>",
		entry_template_properties_hide_hover: "Pokud sekci <b>Vlastnosti</b> skryjete, uživatelé nebudou moci upravovat žádné hodnoty vlastností. Šablona položky musí definovat všechny hodnoty, které chcete použít při přidání položek s použitím této šablony položky.",

		entry_template_security_show: "Zobrazit sekci <b>Zabezpečení</b>",
		entry_template_security_show_hover: "Je-li zobrazena sekce <b>Zabezpečení</b>, uživatelé s příslušnými oprávněními budou moci upravovat zabezpečení položky.",
		entry_template_security_hide: "Skrýt sekci <b>Zabezpečení</b>",
		entry_template_security_hide_hover: "Pokud sekci <b>Zabezpečení</b> skryjete, uživatelé nebudou moci upravovat zabezpečení položek. Šablona položky musí definovat všechna nastavení zabezpečení, která chcete použít při přidávání či úpravách položek.",
		entry_template_security_policy: "Zásady zabezpečení:",
		entry_template_security_policy_hover: "V závislosti na vybraných zásadách zabezpečení mohou zásady zabezpečení:<br><ul><li>Potlačit oprávnění určená v části <b>Nastavit zabezpečení položky</b>.</li><li>Doplnit oprávnění určená v části <b>Nastavit zabezpečení položky</b>.</li></ul>",
		entry_template_security_policy_none: "Nejsou vybrány žádné zásady zabezpečení.",
		entry_template_security_inherit: "Zdědit nastavení zabezpečení z nadřízené složky",
		entry_tempalte_save_in_hover: "Určete, kam chcete šablonu položky uložit.<br><br><b>Omezení:</b> Uložíte-li šablonu položky do týmového prostoru, budete ji moci používat pouze v rámci příslušného týmového prostoru.",
		entry_template_security_inherit_item_security_hover: "Vyberete-li tuto volbu, budou nastavení zabezpečení pro nadřízenou složku přidána k nastavením zabezpečení, která jsou definována jednou z následujících položek:<ul><li>Třída určená v sekci <b>Nastavit vlastnosti položky</b></li><li>Vlastní zabezpečení určené v sekci <b>Nastavit zabezpečení položky</b></li></ul>",
		entry_template_security_change: "Potlačit zabezpečení definované vybranou třídou",
		entry_template_security_change_hover: "Vyberete-li tuto volbu, budou při výchozím nastavení zobrazena nastavení zabezpečení definovaná pro příslušnou třídu. Poté můžete upravit nastavení zabezpečení pro šablonu položky.<br><br>Je-li zobrazena sekce <b>Zabezpečení</b>, uživatelé s příslušnými oprávněními budou moci upravovat zabezpečení položky.<br><br>Pokud zvolíte tuto volbu a nastavíte dědění nastavení zabezpečení z nadřízené složky, budou k určenému zabezpečení přidána veškerá oprávnění s možností dědění.",
		entry_template_security_default_item_security: "Potlačit výchozí zabezpečení položky pro uživatele, který položku přidává",
		entry_template_security_policy_message_override: "Vybrané zásady zabezpečení jsou konfigurovány tak, aby potlačovaly oprávnění určená v rámci nastavení zabezpečení.",
		entry_template_security_policy_message_add: "Vybrané zásady zabezpečení jsou konfigurovány tak, aby byly přidávány k oprávněním určeným v rámci nastavení zabezpečení.",
		entry_template_security_policy_preserve_true_hover: "Zachovat přímé oprávnění",
		entry_template_security_policy_preserve_false_hover: "Nezachovávat přímé oprávnění",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specifické role",
		entry_template_security_class_role_search_title: "Hledat role:",
		entry_template_secuirty_class_member_title: "Seznam členů pro ${0}",
		entry_template_secuirty_class_folder_only: "Tato oprávnění se vztahují pouze na tuto složku",
		entry_template_secuirty_class_folder_and_immediate_children: "Tato oprávnění se vztahují na tuto složku a na ty bezprostředně podřízené položky, které jsou nakonfigurovány, aby z této složky dědily zabezpečení.",
		entry_template_secuirty_class_folder_and_all_children: "Tato oprávnění se vztahují na tuto složku a na všechny podřízené položky, které jsou nakonfigurovány, aby z této složky dědily zabezpečení. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Tato oprávnění se vztahují na ty bezprostředně podřízené položky, které jsou nakonfigurovány, aby z této složky dědily zabezpečení.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Tato oprávnění se vztahují na všechny podřízené položky, které jsou nakonfigurovány, aby z této složky dědily zabezpečení.",

		entry_template_class_security_message_no_override: "Zabezpečení vybrané třídy brání uživatelům v potlačení zabezpečení.",
		entry_template_class_security_required_privileges: "<b>Důležité upozornění:</b> Potlačíte-li zabezpečení vybrané třídy, uživatelé přidávající položky s použitím této šablony položky budou muset mít oprávnění ItemSetACL a UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Sled prací se sekvenčním vzorem",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Sled prací s paralelním vzorem",
		entry_template_workflow_type_existing: "Vlastní sled prací...",
		entry_template_workflow_launch_prompt: "Dotázat se uživatelů, zda chtějí spustit sled prací",
		entry_template_workflow_launch_auto: "Spustit sled prací automaticky",
		entry_template_workflow_modify_launch: "Povolit uživatelům úpravu kroku spuštění",
		entry_template_workflow_modify_launch_hover: "Tuto volbu vyberte, chcete-li uživatelům povolit změnu způsobu spuštění sledu prací.",

		entry_template_optionsButton_title: "Upravit",
		entry_template_optionsButton_readonly_title: "Zobrazit přidružení",
		entry_template_optionsDialog_title: "Nastavení přidružení složky",
		entry_template_removeButton_title: "Odebrat",
		entry_template_addButton_title: "Přidat",
		entry_template_selected_entry_templates: "Vybrané šablony položky",
		entry_template_docs_added_to_template_destination: "Dokumenty jsou přidávány do cíle určeného v rámci šablony položky.",
		entry_template_docs_added_to_other_object_store: "Tato šablona položky přidává položky do úložiště objektů ${0}.",
		entry_template_inherited_entry_templates_label: "Požadováno: ",
		entry_template_inherited_entry_templates: "Zdědit přidružení šablony položky ze složky: ",
		entry_template_inherited_entry_templates_not: "Vytvořit nové přidružení pro tuto složku",
		entry_template_inherited_folder_path: "Šablony položek v seznamu vybraných šablon položek jsou přidruženy k následující složce: ${0}. <br> Cesta ke složce: ${1}.",
		entry_template_folder_associations_title: "Přidružit šablony položek",
		entry_template_folder_associations_intro: "Přidružíte-li šablonu položky ke složce, musí uživatelé při přidávání položek do příslušné složky používat tuto šablonu položky. Přidružíte-li ke složce několik šablon položek, mohou uživatelé vybrat, která šablona položky bude použita.",
		entry_tempalte_folder_associations_entrytemplate: "Šablona položky: ",
		entry_template_avaliable_entry_templates: "Dostupné šablony položky",
		entry_template_fileTypes_intro_title: "Povolené typy souborů:",
		entry_template_fileTypes_intro: "Při výchozím nastavení lze šablonu položky použít k přidání jakéhokoli typu dokumentu do úložiště. Pokud však vyberete jeden či více typů souborů, budou příslušné šablony položek k dispozici pouze v případě, že uživatelé přidávají dokumenty odpovídající jednomu z určených typů souborů.",
		entry_template_fileTypes: "Typy souborů",
		entry_template_fileType_error: "Pro jedno či více přidružení šablony položky jsou vybrány neplatné typy souborů. Před uložením těchto přidružení šablon položek je třeba odebrat neplatné typy souborů.",
		entry_template_fileTypes_any_type_of_file: " Libovolný typ souboru",
		entry_template_description_label: "Popis",
		entry_template_ItemInfoPrefix: "Přidružit k: ",
		entry_template_TargetObjectStoreName: "Cílové úložiště objektů",
		entry_template_class: "Třída",
		entry_template_current_folder_as_parent: "Použít složku jako cíl",
		entry_template_view_minetypes: "Zobrazit typy MIME",
		entry_template_avaliable_MIME_types: "Dostupné typy souborů",
		entry_template_selected_MIME_types: "Vybrané typy souborů",
		entry_template_MIME_type_column: "název kategorie typu souboru",
		entry_template_file_type_not_existing: "Odeberte neplatné typy souborů.",
		entry_template_MIME_types: "Typy MIME:",
		entry_template_MIME_types_info_dialog_title: "Typy MIME pro",
		entry_template_destination_label: "Přidat dokumenty do: ",
		entry_template_destination_help: "Určete, kde budou dokumenty v úložišti ukládány, pokud budou uživatelé přidávat dokumenty do této složky s použitím vybrané šablony položky.",
		entry_template_radioButton_folder_destination: "Vybraná složka",
		entry_template_radioButton_template_destination: "Cíl určený v šabloně položky",
		entry_tempalte_teamspace_default: "Výchozí šablona položky",
		entry_template_folder_associations_save_new: "Upravili jste některá přidružení šablon položek. Chcete toto okno zavřít bez uložení změn?",
		entry_template_mode_binding_label: "Vlastnosti",
		entry_template_columns_className: "Název třídy",
		entry_template_columns_type: "Typ šablony",
		entry_template_columns_workflow: "Název sledu prací",
		entry_template_columns_destination: "Cíl",
		entry_template_association_less_than_record: "Mezi vybranými šablonami položek není uvedeno ${0} šablon položek. Nemáte oprávnění k jejich zobrazení. Je také možné, že byly odstraněny. Obraťte se na administrátora systému se žádostí o další informace.",
		/* Request */

		progress_message_general: "Probíhá zpracování...",
		cancel_message_general: "Akce byla zrušena.",
		ie8_not_supported_browser: "Prohlížeč IE8 není podporován.",
		progress_message_getDesktop: "Načítání pracovní plochy...",
		progress_message_getActions: "Načítání akcí...",
		progress_message_getViewers: "Načítání pracovní plochy...",
		progress_message_logon: "Přihlašování...",
		progress_message_logoff: "Odhlašování...",
		progress_message_getContentClasses: "Načítání tříd...",
		progress_message_openContentClass: "Načítání podrobností o třídě...",
		progress_message_od_getCabinets: "Načítání souborů CAB...",
		progress_message_getSearchTemplates: "Načítání hledání...",
		progress_message_od_getTemplates: "Načítání složek...",
		progress_message_od_openCabinet: "Načítání složek...",
		progress_message_openSearchTemplate: "Otevírání hledání...",
		progress_message_od_openTemplate: "Otevírání složky...",

		progress_message_getWorklists: "Načítání seznamů pracovních položek...",
		progress_message_getWorkItems: "Načítání pracovních položek...",
		progress_message_getNextWorkItems: "Načítání pracovních položek...",
		progress_message_getStepParameters: "Načítání informací o pracovní položce...",
		progress_message_getStepAttachmentItems: "Načítání informací o příloze...",
		progress_message_getDependentParameters: "Načítání informací o vlastnosti...",

		progress_message_p8_getProcessApplicationSpaces: "Načítání aplikačních prostorů...",
		progress_message_p8_getProcessRoles: "Načítání rolí procesu...",
		progress_message_p8_getProcessInbaskets: "Načítání složek s příchozími zprávami...",
		progress_message_p8_getProcessorInformation: "Načítání informací o zpracování...",
		progress_message_p8_getFilterCriteria: "Načítání filtru složek s příchozími zprávami...",
		progress_message_p8_getLaunchParameters: "Načítání informací o pracovní položce...",
		progress_message_p8_getStepAttachments: "Načítání příloh pracovní položky...",
		progress_message_p8_getSubscriptions: "Načítání odběrů sledu prací...",
		progress_message_p8_getTrackerParameters: "Načítání informací o pracovní položce...",
		progress_message_p8_getTrackerHistory: "Načítání historie pracovní položky...",
		progress_message_p8_getTrackerMilestones: "Načítání milníků pracovní položky...",
		progress_message_p8_completeStep: "Dokončení pracovní položky...",
		progress_message_p8_moveToInbox: "Přesunutí položky do složky s příchozími zprávami...",
		progress_message_p8_returnToSender: "Vracení pracovní položky...",
		progress_message_p8_reassign: "Opětovné přiřazení pracovní položky...",
		progress_message_p8_launchWorkflow: "Spouštění sledu prací...",
		progress_message_p8_getTransferedWorkflows: "Načítání informací o sledu prací...",

		progress_message_cm_getProcesses: "Načítání informací o sledu prací...",
		progress_message_cm_completeStep: "Pokračování pracovní položky...",
		progress_message_cm_getItemProcessInformation: "Načítání informací o sledu prací...",

		progress_message_search: "Hledání...",
		cancel_message_search: "Hledání bylo zrušeno.",
		progress_message_getContentItems: "Načítání informací o položce...",
		progress_message_openFolder: "Otevírání složky...",
		progress_message_addItem: "Vytváření položky...",
		progress_message_checkIn: "Vracení položky...",
		progress_message_changePassword: "Změna hesla...",
		progress_message_getDefaultInstancePermissions: "Načítání výchozích oprávnění...",
		progress_message_openItem: "Načítání informací o položce...",
		progress_message_saveItem: "Ukládání informací o položce...",
		progress_message_getPermissions: "Načítání oprávnění...",
		progress_message_getEntryTemplates: "Načítání šablon položky...",
		progress_message_openEntryTemplate: "Otevírání šablony položky...",
		progress_message_getFavorites: "Načítání oblíbených položek...",
		progress_message_getFoldersFiledIn: "Načítání složek...",
		progress_message_getDocumentVersions: "Načítání verzí...",
		progress_message_getDependentAttributeInfo: "Načítání informací o atributech...",
		progress_message_packageForDownload: "Balení pro stažení...",
		progress_message_convertDocument: "Převod obsahu...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Načítání typu obsahu...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Přidávání dokumentu...",

		progress_message_desktop_reload: "Klient znovu načítá pracovní plochu.<br>Je možné, že budete vyzváni, abyste se přihlásili znovu.",
		progress_message_email: "Odesílání e-mailu...",
		cancel_message_email: "E-mail byl zrušen.",

		progress_message_p8_getOfficeOnlineTemplates: "Načítání šablon produktu Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Strom Oblíbené položky",
		favorites_content_list_label: "Seznam obsahu Oblíbené položky",
		syncItems_tree_label: "Strom Moje synchronizované soubory",
		syncItems_content_list_label: "Seznam obsahu Moje synchronizované soubory",
		my_checkouts_content_list_label: "Seznam obsahu Moje zápůjčky",
		browse_tree_label: "Procházet strom",
		browse_content_list_label: "Procházet seznam obsahu",
		repository_selector_label: "Selektor úložiště",
		teamspaces_content_list_label: "Seznam obsahu Týmový prostor",
		templates_content_list_label: "Seznam obsahu Šablony",
		work_content_list_label: "Seznam obsahu Práce",
		work_tree_label: "Strom Práce",
		admin_tree_label: "Strom Správa",
		admin_tabs_label: "Karty Správa",
		search_tabs_label: "Karty Hledání",
		search_selector_label: "Selektor Hledání",
		teamspace_browse_content_list_label: "Seznam obsahu Procházet týmový prostor",
		teamspace_search_tabs_label: "Karty Hledání týmového prostoru",

		/* Desktop */
		undo_description: "Zpět ${0}",
		redo_description: "Znovu ${0}",

		/* Application Tabs */
		home: "Domovské umístění",
		repository: "Úložiště",
		repository_type: "Typ úložiště:",
		repository_type_header: "Typ úložiště",
		repository_type_any: "Všechna úložiště",
		repository_type_contains_label: "Typ úložiště obsahuje",
		document_info: "Informace o dokumentu",
		team: "Tým",
		administration: "Správa",

		/* Home Page */
		recent_activity: "Nedávná aktivita",
		repos_and_wrksp: "Úložiště a týmové prostory",
		workspaces: "Týmové prostory",
		repositories: "Úložiště",
		templates: "Šablony",
		favorites: "Oblíbené položky",
		my_checkouts: "Moje zápůjčky",
		mySyncedFiles: "Moje synchronizované soubory",
		links: "Odkazy",
		name_label: "Název",
		description_label: "Popis:",
		type_label: "Typ:",
		type_heading: "Typ",
		type_id_label: "ID typu",
		server_type_icon: "Ikona Typ serveru",
		server_type_heading: "Typ serveru",
		server_type: "Typ serveru",
		port_heading: "Číslo portu",
		port_label: "Číslo portu:",
		server_name_heading: "Název serveru",
		server_label: "Název serveru:",
		server_url_label: "Adresa URL serveru:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Připojeno:",
		repository_label: "Úložiště",
		modified_label: "Změnil:",
		modified_date_label: "Upraveno:",
		status_label: "Stav:",
		last_modified_label: "Naposledy změnil:",

		modifier: "Změnil",
		modified_date: "Upraveno",

		/* Favorites */
		new_favorite_label: "Přidat k oblíbeným položkám",
		edit_favorite_label: "Přejmenovat oblíbenou položku",
		remove_favorite_label: "Odebrat z oblíbených položek",
		missing_alias_message: "Musíte zadat název.",
		sync_favorite_enable_hover: "Pro tuto položku je povolena synchronizace.",
		sync_favorite_disable_hover: "Tato položka není synchronizována.",
		sync_favorite_sync_unavailable_hover: "Pro tento typ objektu není synchronizace k dispozici.",
		sync_enable_label: "Synchronizovat tuto položku",
		sync_enable_label_hover: "Tato položka bude synchronizována do vašich zařízení.",
		delete_favorite_confirmation_question: "Chcete odebrat tuto položku z oblíbených položek?",
		alias_label: "Název:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Vybraná položka je již zařazena v oblíbených položkách.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Tuto položku nelze přidat do vašeho seznamu oblíbených položek.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Maximální počet oblíbených položek, které lze uložit: ${0}",
		add_favorite_max_reached_response: "Chcete-li přidat tuto položku do svého seznamu oblíbených položek, je nutné před přidáním položky odstranit některou existující oblíbenou položku.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Vybrané dokumenty nelze převést do formátu PDF.",
		download_as_pdf_max_content_error_explanation: "Do formátu PDF můžete převést pouze ${0} MB dat. Vybrané dokumenty však překračují objem ${0} MB.",
		download_as_pdf_max_content_error_response: "Vyberte méně dokumentů nebo vyberte menší dokumenty a stáhněte je jako soubory PDF znovu.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Vybrané dokumenty nelze převést do jednoho souboru PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Chcete-li převést dokument a více částmi do jednoho souboru PDF, všechny části musí mít stejný typ MIME.",
		download_as_pdf_mimetype_check_error_response: "Vyberte pro převod do formátu PDF jiný dokument.",

		/* Activity Stream */
		show_label: "Zobrazit:",
		all_filter: "Vše",
		notifications_filter: "Oznámení",
		workitems_filter: "Pracovní položky",
		documentes_filter: "Dokumenty",
		all_favorites_filter: "Všechny oblíbené položky",
		folders_filter: "Složky",
		searches_filter: "Hledání",
		teamspaces_filter: "Týmové prostory",

		/* Repository */
		all_search_templates: "Všechna hledání",
		all_od_searches: "Všechny šablony hledání",
		recent_searches: "Nedávná hledání",
		opened_searches: "Otevřená hledání",

		all_worklists: "Všechny vstupní schránky",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Seznam všech seznamů pracovních položek",

		/* Teamspace */
		all_workspaces: "Všechny týmové prostory",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Seznam všech týmových prostorů",
		workspace_title: "Týmový prostor",
		workspace_icon: "Ikona Týmový prostor",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Dostupné",
		workspace_stat_offline: "Nedostupné",
		workspace_stat_validate: "Vyžaduje ověření",
		workspace_stat_pendingDelete: "Nevyřízené odstranění",
		workspace_stat_deleteError: "Odstranění se nezdařilo",

		undefined_value: "Není definováno",
		undefined_reference_value: "Nebyl definován žádný odkaz.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Na serveru může být k dispozici více výsledků.",
		search_all_data: "Prohledat všechna data",
		search_all_teamspaces: "Prohledat všechny týmové prostory",
		teamspace_filter_results: "Zobrazeno ${0} výsledků. ",
		displaying_filtered_results: "Zobrazeny vyfiltrované výsledky. ",
		displaying_recent_results: "Zobrazeny jsou pouze týmové prostory, které byly upraveny za posledních ${0} dnů. Chcete-li vyhledat další týmové prostory, filtrujte seznam týmových prostoru podle názvu nebo popisu. ",
		clear_filter: "Smazat filtr",

		/* FolderTreeModel */
		move_item_task: "Přesunout položku",
		copy_item_task: "Kopírovat položku",
		add_item_task: "Přidat položku",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Následující složka nebyla nalezena: ${0}. Je možné, že byla odstraněna nebo ji nebylo možné z tohoto zobrazení otevřít. V zobrazení stromu přejděte do složky kliknutím na odkaz Další. Nemůžete-li složku zobrazit, aktualizujte zobrazení seznamu obsahu.",
		more_paging_link: "více ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Stav",
		status_dialog_cancel_label: "Storno",

		/* ErrorDialog */
		error_dialog_title: "Chyba",
		error_dialog_icon_tooltip: "Chyba",
		error_dialog_stack_trace_title: "Sledování zásobníku",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Potvrzení",

		close_browser_msg: "Zavřete okno prohlížeče.",

		/* MessageDialog */
		message_dialog_title: "Informace",
		warning_dialog_title: "Varování",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Vítejte na serveru ${0}",
		server: "Úložiště:",
		username: "Jméno uživatele:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "K přihlášení k úložišti je vyžadováno jméno uživatele.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "K přihlášení k úložišti je vyžadováno heslo.",
		password: "Heslo:",
		login: "Přihlásit",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Vaše relace vypršela. Přihlaste se znovu.",
		login_repository_connection_expired_message: "Připojení k úložišti ${0} vypršelo. Přihlaste se znovu.",
		login_site_connection_expired_message: "Platnost vašeho připojení k webu vypršela. Přihlaste se znovu.",
		login_new_server_message: "Zadejte heslo a jméno uživatele pro server ${0}.",
		login_error_more_information_message: "Další informace",

		disconnect_box_account_user: "Odpojit účet produktu Box: ${0}",
		disconnect_box_account: "Odpojit účet produktu Box",
		disconnect_box_accounts: "Odpojit účty produktu Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Pro přístup k úložišti produktu Box je vyžadováno připojení SSL.",
		login_oauth_popup_blocked: "Rozevírací okno bylo zablokováno. Aby bylo možné se přihlásit, může být v prohlížeči potřeba rozevírací okna odblokovat.",
		login_oauth_click_here: "Pokud jste nebyli přesměrováni do 5 sekund, klepněte sem.",
		login_oauth_title: "Přihlásit",
		login_oauth_grant_intro: "Udělení ověření pro: ${0}.",
		login_pane_oauth_click_here: "Chcete-li se přihlásit, klepněte zde.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Chcete se odhlásit od webového klienta?",
		logout_confirmation_button: "Odhlásit",

		/* ChangeLocaleDialog */
		change_locale: "Změnit jazyk a národní nastavení",
		change_locale_use_browser_language: "Použít jazykové nastavení prohlížeče (výchozí)",
		change_locale_use_browser_locale: "Použít jazykové nastavení prohlížeče (výchozí)",
		change_locale_description: "Pokud smažete soubory cookie prohlížeče, budete muset resetovat své jazykové a národní nastavení.",
		change_locale_language_locale: "Jazyk aplikace:",
		change_locale_language_locale_hover: "Toto nastavení změní jazyk textu ve webovém klientu, avšak nezmění jazyk dokumentů v aplikaci.<br><br>Výchozí nastavení používá jazyk, který je zadán v konfiguraci vašeho prohlížeče.",
		change_locale_value_format_locale: "Národní prostředí aplikace:",
		change_locale_value_format_locale_hover: "Národní prostředí určuje formáty data, času a čísel ve webovém klientu.<br><br>Výchozí nastavení používá formáty, které jsou přidružené k jazyku, jež je zadán v konfiguraci vašeho prohlížeče.",
		change_locale_for_office: "Nastavení obousměrného textu:",
		change_locale_bidi_support_flag: "Povolit obousměrnou podporu",
		change_locale_bidi_support_flag_hover: "Je-li povolena obousměrná podpora, může uživatel nastavit směr textu používaný ve vstupních polích. Text zadaný pro položky, jako jsou například složky, bude zobrazen ve směru, v jakém byl zadán.",
		change_locale_base_text_direction: "Základní směr textu pro obsah:",
		change_locale_base_text_direction_hover: "Můžete nastavit směr textu zadávaného do vstupních polí. Tato volba určuje také směr zobrazení popisků zadaných uživatelem, například názvů složek.",
		change_locale_calendar_type: "Typ kalendáře:",
		change_locale_calendar_type_hover: "Vyberte typ kalendáře, který bude používán pro uživatelskou relaci.",
		change_locale_base_text_direction_default: "Výchozí",
		change_locale_base_text_direction_ltr: "Zleva doprava",
		change_locale_base_text_direction_rtl: "Zprava doleva",
		change_locale_base_text_direction_contextual: "Kontextový",
		change_locale_calendar_type_gregorian: "Gregoriánský",
		change_locale_calendar_type_hijri: "Hidžra",
		change_locale_calendar_type_hebrew: "Hebrejský",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Kura",

		/* ChangePasswordDialog */
		change_password: "Změnit heslo",
		change_password_title: "Změnit heslo",
		change_password_expired_title: "Vypršela platnost hesla",
		change_password_message: "Zadejte nové heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Platnost hesla vypršela. Zadejte nové heslo.",
		change_password_password_rules: "Pravidla pro hesla",
		change_password_old_password: "Původní heslo:",
		change_password_new_password: "Nové heslo:",
		change_password_confirm_password: "Potvrzení hesla:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Je třeba zadat původní heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Je třeba zadat nové heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Je třeba potvrdit nové heslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Hesla se musí shodovat.",

		/* GlobalToolbar */
		actions: "Akce",
		actions_label: "Akce:",
		open_actions_label: "Akce otevření:",

		/* About Dialog */
		about_dialog_title: "O programu",
		about_product_name_label: "Název produktu: ",
		about_product_version_label: "Verze: ",
		about_product_build_label: "Sestavení: ",
		about_product_license: "Licencované materiály - vlastnictví společnosti IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Všechna práva vyhrazena. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM a logo IBM jsou registrované ochranné známky společnosti International Business Machines Corporation ve Spojených státech a případně v dalších jiných zemích. Licence k tomuto programu je poskytována za licenčních podmínek dodávaných s programem. Tato licenční smlouva může být buď uložena v programovém adresáři ve složce, nebo v knihovně označené jako \"License\" nebo \"Non_IBM_License\" (pokud existuje), nebo může být poskytnuta v tištěné podobě. Než začnete program používat, přečtěte si pozorně licenční smlouvu. Použitím programu dáváte najevo svůj souhlas s jejími podmínkami. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Chcete odstranit vybranou položku?",
		delete_single_folder_confirmation_question: "Chcete odstranit složku ${0}?",
		delete_multiple_confirmation_question: "Chcete odstranit vybrané položky?<br>Počet vybraných položek: ${0}",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Odstranit",
		search_template_delete_confirmation_question: "Chcete odstranit hledání ${0}?",
		search_template_opened_delete_confirmation_question: "Hledání ${0} je otevřené. Pokud odstraníte hledání, dojde k jeho zavření.<br>Opravdu chcete toto hledání odstranit?",
		delete_multiple_opened_search_template_confirmation_question: "Následující hledání jsou otevřená: ${0}.<br>Pokud hledání odstraníte, dojde k jejich zavření. Opravdu chcete tato hledání odstranit?",
		delete_large_number_items_confirmation_question: "Vybrali jste ${0} položek k odstranění.<br/>Odstraňování velkého množství položek může trvat delší dobu.<br/>Chcete pokračovat?",
		delete_confirmation_entrytemplate: "Odstranění této šablony položky bude mít následující dopad na dokumenty či složky přidružené k příslušné šabloně položky:<ul><li>Položky již nebudou přidruženy k šabloně položky a uživatelům se při aktualizaci položky může zobrazit varování.</li><li>Na položky přidružené k šabloně položky se již nebudou vztahovat žádné z vlastností, které byly řízeny příslušnou šablonou položky, například název či pořadí vlastností.</li></ul>Chcete tuto šablonu položky odstranit?",
		delete_confirmation_entrytempalte_with_multi_items: "Šablony položek je třeba odstraňovat jednotlivě. Šablony položek byly odebrány ze seznamu položek k odstranění. Chcete-li šablony položek odstranit, je třeba odstranit každou šablonu položky zvlášť.",

		/* Create/Apply/Remove Hold */
		hold: "Zadržení",
		createHold: "Nové zadržení",
		applyHold: "Použít zadržení",
		removeHold: "Odebrat zadržení",
		showHolds_title: "Zobrazit zadržení",
		applyHoldSelectText: "Vyberte zadržení, která chcete použít na vybrané položky.",
		availableHolds: "Dostupná zadržení:",
		removeHoldSelectText: "Vyberte zadržení, která chcete odebrat z vybraných položek.",
		appliedHolds: "Použitá zadržení:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Vytvořte nové zadržení, které má být použito pro vybrané položky.",
		holdName: "Název zadržení:",
		holdDescription: "Popis:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Je nutné zadat název zadržení.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Zadaný název zadržení již existuje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Název zadržení nesmí obsahovat následující znaky: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Platnost vaší relace vyprší za ${0} min.",
		session_expire: "Vypršení platnosti relace",
		logoff: "Odhlásit se",
		extend_session: "Prodloužit relaci",
		admin_custom_settings: "Další nastavení:",
		admin_custom_settings_hover_help: "Parametr enableSessionExpireWarning je logická hodnota, která indikuje, zda je povoleno varování ohledně vypršení platnosti relace. Výchozí hodnota je true (ano). Parametr sessionExpireWarningTime je celočíselná hodnota v rozsahu 2 až 5, která určuje dobu varování ohledně vypršení platnosti relace.",
		admin_custom_setting_dialog_title_new: "Nové nastavení",
		admin_custom_setting_dialog_title_edit: "Upravit nastavení",
		admin_custom_setting_dialog_hover_help: "Můžete přidat další parametry určením názvu a hodnoty parametru. Chcete-li například povolit varování ohledně vypršení platnosti relace, můžete zadat řetězce „enableSessionExpireWarning“ a „true“.",
		admin_custom_setting_dialog_field_hover_help: "Další informace o názvech a hodnotách parametrů naleznete v referenční příručce parametrů produktu IBM Navigator.",
		admin_custom_setting_dialog_nameInvalid: "Tato hodnota je povinná. Hodnota nesmí obsahovat mezery a musí být jedinečná.",
		admin_custom_setting_dialog_bool_valueInvalid: "Tato hodnota je povinná. Hodnota musí být logická.",
		admin_custom_setting_dialog_int_valueInvalid: "Tato hodnota je povinná. Hodnota musí být celočíselná.",
		/* Add Document Dialog */
		add_document_dialog_title: "Přidat dokument",
		add_documents_dialog_title: "Přidat dokumenty",
		add_document_general_label: "Obecné",
		add_document_properties_label: "Vlastnosti",
		add_document_properties_with_ellipsis_label: "Vlastnosti...",
		add_document_security_label: "Zabezpečení",
		add_document_location_label: "Uložit do:",
		add_document_type_label: "Co chcete uložit?",
		add_document_localfile_label: "Lokální dokument",
		add_document_metadata_label: "Informace o dokumentu",
		add_document_external_label: "Odkaz na externí dokument",
		add_document_web_link_label: "Webový odkaz",
		add_document_saved_content_label: "Použít uložený soubor:",
		add_document_saved_content_choice: "Uložený soubor",
		add_document_file_name_label: "Název souboru:",
		add_document_entry_template_label: "Šablona položky:",
		add_document_delete_file_label: "Odstranit lokální soubor",
		add_document_delete_file_disabled_label: "Soubory, které nejsou umístěny v adresáři sledování souborů, nebudou odstraněny.",
		add_document_major_version_label: "Hlavní verze",
		add_document_major_version_hover: "Nastaví stav dokumentu na hodnotu Vydáno. Dokument je přidán do úložiště jako verze 1.0. Pokud tato volba není vybrána, dokument není připraven na vydání a je přidán jako vedlejší verze 0.1.",
		add_document_save_document_as_unfiled_label: "Neukládat dokument do složky",
		add_document_save_document_as_unfiled_hover: "Vyberete-li tuto volbu, lze tento dokument najít pouze hledáním. Nelze na něj přejít.",
		add_document_create_new_version_label: "Vytvořit novou verzi",
		add_document_replace_existing_version_label: "Nahradit existující verzi",
		add_document_start_workflow_label: "Spustit sled prací",
		add_document_auto_classify_label: "Automaticky klasifikovat obsah",
		add_document_add_label: "Přidat",
		add_document_cancel_label: "Storno",
		add_document_document_type_label: "Třída",
		add_document_context_info: "Dokument lze později najít pomocí hodnot zadaných pro vlastnosti dokumentu.",
		add_documents_context_info: "Dokumenty lze později najít pomocí hodnot zadaných pro tyto dokumenty. Chcete-li pro některý dokument zadat jinou hodnotu vlastnosti, je nutné ji přidat samostatně nebo upravit vlastnosti dokumentu po přidání.",
		add_document_url_label: "Adresa URL:",
		add_document_template_description: "Popis šablony:",
		add_document_select_entry_template: "Zadejte nebo vyberte šablonu položky.",
		add_document_no_permission_to_associations: "Nemáte oprávnění k použití šablony položky",
		add_document_no_entry_template_to_use: "Pro vybrané soubory nelze použít žádné šablony položky",
		add_document_no_entry_template_itemtype_permission: "Do této složky nemůžete přidávat položky. Je třeba vybrat šablonu položky, nemáte však přístup k žádné šabloně položky, které jsou k této složce přidruženy. Obraťte se na administrátora systému a požádejte ho o udělení přístupu k šablonám položek přidruženým k této složce.",
		add_document_appgroup_name_label: "Název skupiny aplikací:",
		add_document_app_name_label: "Název aplikace:",
		create_folder_dialog_title: "Nová složka",
		create_folder_context_info: "Složku lze později najít pomocí hodnot zadaných pro vlastnosti složky.",
		create_folder_folder_name_label: "Název složky",
		create_folder_save_folder_as_unfiled_label: "Neukládat složku do jiné složky",
		create_folder_save_folder_as_unfiled_hover: "Vyberete-li tuto volbu, lze tuto složku najít pouze hledáním. Nelze na ni přejít.",
		add_item_create_in_folder: "Vytvořit ve složce:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Název složky nesmí obsahovat následující znaky: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Název složky nesmí obsahovat následující znaky: \\ / a nesmí se rovnat . nebo ..",
		invalid_box_file_name_message: "Název souboru nesmí obsahovat následující znaky: \\ / a nesmí se rovnat . nebo ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Název souboru nesmí obsahovat následující znaky: \\ / : * ? \"  < > |",
		external_document_placeholder: "Zadejte adresu URL dokumentu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Barvu je nutné zadat jako hexadecimální číslo se 3 nebo 6 číslicemi (například #000 nebo #000000).",
		add_document_unfiled: "${0} bez uložení",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Přidat dokument použitím šablony položky",
		add_document_using_template_context_info: "Když přidáte dokument použitím šablony položky, hodnoty zadané pro dokument budou konzistentní.",
		add_documents_using_template_dialog_title: "Přidat dokumenty s použitím šablony položky",
		add_documents_document_name_is_file_name_hint: "Pro tuto vlastnost bude použit název souboru.",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nová složka použitím šablony položky",
		create_folder_using_template_context_info: "Když vytvoříte složku s použitím šablony položky, hodnoty zadané pro danou složku budou konzistentní.",

		add_documents_batch_results_dialog_title: "Dokumenty nepřidané do úložiště",
		add_documents_batch_results_dialog_context_info: "Následující dokumenty nebyly přidány do úložiště. Když dokument vyberete a klepnete na volbu Podrobnosti, zobrazí se další informace o důvodu nepřidání dokumentu do úložiště.",
		add_documents_batch_results_dialog_filename_col_hdr: "Název souboru",
		add_documents_batch_results_dialog_status_col_hdr: "Stav",
		add_documents_batch_results_dialog_message_col_hdr: "Zpráva",
		add_documents_batch_results_status_error: "Chyba",
		add_documents_batch_results_status_cancelled: "Zrušeno",
		add_documents_batch_results_status_cancelled_msg: "Dokument nebyl přidán, protože požadavek byl zrušen.",

		add_documents_batch_status_title: "Přidávání dokumentů",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Přidávání souboru ${0} z ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Chyby: ${0}",
		add_documents_batch_status_completing_msg: "Po přidání tohoto dokumentu se proces zastaví.",

		add_documents_status_uploading_msg: "Odesílání souboru ${0} z ${1}...",
		add_documents_status_adding_msg: "Přidávání souboru ${0} z ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Šablona položky byla konfigurována v jiné aplikaci a je nakonfigurována tak, že dokumenty jsou vždy deklarovány jako záznamy. Toto nastavení je však ignorováno, protože webový klient nepodporuje deklaraci dokumentů jako záznamů.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Šablona položky byla konfigurována v jiné aplikaci a je nakonfigurována tak, že můžete rozhodnout, zda mají být dokumenty deklarovány jako záznamy. Toto nastavení je však ignorováno, protože webový klient nepodporuje deklaraci dokumentů jako záznamů.",
		no_selection: "&lt;Vybrat&gt;",

		batch_results_dialog_details_label: "Podrobnosti",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Hodnota není platná. Musí se jednat o identifikátor GUID, například {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Hodnota není platná. Musí se jednat o číslo s pohyblivou řádovou čárkou, například 1,2 nebo 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Hodnota není platná. Hodnota musí být ve formátu ${0}, například ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Hodnota není platná. Musí se jednat o desetinnou hodnotu, například 1,2 nebo 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Hodnota není platná. Musí se jednat o celé číslo, například 5 nebo 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Hodnota není platná. Může obsahovat pouze abecední znaky, například a-z nebo A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Hodnota není platná. Může obsahovat pouze alfanumerické znaky, například a-z, A-Z nebo 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Hodnota není platná. Může obsahovat pouze číselné znaky, například 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Hodnota není platná. Může obsahovat pouze následující znaky: a-z, A-Z, 0-9, [mezera] a znaky`.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Hodnota není platná. Musí se jednat o datum v následujícím formátu: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Hodnota není platná. Musí se jednat o čas v následujícím formátu: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Hodnota není platná. Vyberte platnou hodnotu z rozevírací nabídky.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Hodnota není platná.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Hodnota není platná. Musí mít následující formát: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Tato hodnota je povinná.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Hodnota je příliš dlouhá. Maximální podporovaná délka pro hodnotu vlastnosti je ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Hodnota je příliš krátká. Minimální podporovaná délka pro hodnotu vlastnosti je ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Hodnota je mimo rozsah. Hodnota musí být číslem s pohyblivou řádovou čárkou v rozmezí ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Hodnota je mimo rozsah. Hodnota musí být desetinná v rozmezí ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Hodnota je mimo rozsah. Hodnota musí být celočíselná v rozmezí ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Hodnota musí být datem v rozmezí ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Hodnota je mimo rozsah. Hodnota musí být datem v rozmezí ${0} až ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Hodnota je mimo rozsah. Hodnota musí být časem v rozmezí ${0} až ${1}.",
		property_and: "a",

		property_invalidValueOrRequired: "Následující hodnota je neplatná nebo je povinná: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Vlastnosti",
		edit_properties_dialog_info: "Vlastnosti této položky je možné zobrazit nebo upravit. Pokud máte příslušná oprávnění, můžete upravit také zabezpečení položky. Nelze však změnit systémové vlastnosti.",
		edit_properties_od_dialog_info: "Vlastnosti této položky je možné zobrazit nebo upravit. Nelze však změnit systémové vlastnosti.",
		system_properties_title: "Systémové vlastnosti",
		custom_properties_title: "Vlastnosti",
		/* Folder collaboration tab */
		box_permission_permission: "Oprávnění",
		box_permission_permissions: "Oprávnění",
		box_permission_editor: "Editor",
		box_permission_owner: "Vlastník",
		box_permission_co_owner: "Spoluvlastník",
		box_permission_viewer_uploader: "Odesílač prohlížeče",
		box_permission_previewer_uploader: "Odesílač zobrazení náhledu",
		box_permission_viewer: "Prohlížeč",
		box_permission_previewer: "Zobrazení náhledu",
		box_permission_uploader: "Odesílač",
		box_permission_add: "Přidat",
		box_permission_upload: "Odesílat",
		box_permission_download: "Stáhnout",
		box_permission_preview: "Zobrazit náhled",
		box_permission_view: "Zobrazit",
		box_permission_send_links: "Odesílat odkazy pouze pro zobrazení",
		box_permission_create_subfolders: "Vytvářet podsložky",
		box_permission_create_tasks: "Vytvářet úlohy",
		box_permission_add_comments: "Přidávat komentáře",
		box_collaboration_invite_placeholder: "Zadejte jméno, e-mailovou adresu nebo skupinu pro zaslání pozvánky.",
		box_collaboration_invite_placeholder_non_admin: "Zadejte e-mailovou adresu pro zaslání pozvánky.",
		box_collaboration_invalid_email: "Zadejte platnou e-mailovou adresu.",
		box_collaboration_user_already_present: "Tento uživatel již je zapojen do spolupráce na složce.",
		box_collaboration_user_name: "Název",
		box_collaboration_email_address: "E-mailová adresa",
		box_collaboration_date_added: "Datum přidání",
		box_collaboration_remove_collaboration: "Odebrat",
		box_collaboration_remove_collaboration_title: "Odstranit",
		box_collaboration_no_collaborators: "K dispozici nejsou žádní spolupracovníci.",
		box_collaboration_change_owner_title: "Změnit vlastníka položky",
		box_collaboration_change_owner_prompt: "Nastavíte-li tohoto spolupracovníka jako vlastníka složky, stanete se editorem a složku již nebudete vlastnit. Všichni spolupracovníci, kteří byli přidáni přímo pro tuto složku, ji uvidí mezi svými kořenovými složkami. Všichni spolupracovníci, kteří byli přidáni na úrovni nadřízené složky nebo na vyšší úrovni, přestanou být spolupracovníky. Chcete pokračovat?",
		box_collaboration_remove_self_title: "Odebrat sebe sama",
		box_collaboration_remove_self_prompt: "Opravdu chcete odebrat sebe sama jako spolupracovníka? Poté již k této složce nebudete mít přístup.",
		box_collaboration_user: "Uživatel",
		box_collaboration_group: "Skupina",
		box_managing_users_not_configured: "Uživatele a skupiny nelze hledat, protože aplikace Box není správně nakonfigurována. Chcete-li používat tuto funkci, obraťte se na administrátora a požádejte ho, aby pro aplikaci Box nakonfiguroval možnost správy uživatelů a skupin.",
		duplicate_value_error: "Každá hodnota v rámci této vlastnosti musí být jedinečná.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Jakékoli změny provedené v následujících polích budou použity pro všechny vybrané položky. Chcete-li pro některou položku zadat jinou hodnotu vlastnosti nebo upravit zabezpečení položky, je nutné upravit vlastnosti takové položky samostatně.",
		multi_edit_properties_class_label: "Třída:",
		multi_edit_properties_items_label: "Názvy položek:",
		multi_edit_properties_properties_label: "Vlastnosti:",
		multi_edit_batch_status_title: "Aktualizace vlastností",
		multi_edit_batch_status_adding_msg: "Aktualizace položky ${0} z ${1}...",
		multi_edit_batch_status_verifying_msg: "Ověřování položky ${0} z ${1}...",
		multi_edit_batch_status_completing_msg: "Tento proces se po aktualizaci položky zastaví.",
		multi_edit_batch_status_validation_completing_msg: "Tento proces se po ověření položky zastaví.",
		multi_edit_batch_results_status_error: "Chyba",
		multi_edit_batch_results_status_cancelled: "Zrušeno",
		multi_edit_batch_results_status_cancelled_msg: "Položka nebyla aktualizována, protože požadavek byl zrušen.",
		multi_edit_batch_results_dialog_title: "Položky nebyly aktualizovány",
		multi_edit_batch_results_dialog_context_info: "Následující položky nebyly aktualizovány. Vyberte položku a klepněte na volbu Podrobnosti, zobrazí se další informace o důvodu, proč položka nebyla aktualizována.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Název položky",
		multi_edit_batch_results_dialog_status_col_hdr: "Stav",
		multi_edit_batch_results_dialog_message_col_hdr: "Zpráva",
		multi_edit_batch_status_errors_msg: "Chyby: ${0}",
		multi_edit_batch_permission_error_text: "Změny vlastností nelze uložit.",
		multi_edit_invalid_value_error: "Tato hodnota je závislá na hodnotě jiné vlastnosti a není platná pro všechny vybrané položky.",
		multi_edit_batch_permission_error_explanation: "Nemůžete změnit vlastnosti této položky, jelikož nemáte dostatečná oprávnění.",
		multi_edit_no_modifiable_properties: "Vlastnosti u vybraných položek nelze upravovat. K tomu může dojít, pokud položka obsahuje pouze vlastnosti jen pro čtení nebo je-li editovatelný pouze název či nadpis položky. Je-li vybráno více položek, nelze upravit název nebo nadpis položek.",
		multi_edit_mult_classes_dialog_info: "Vybrané položky se nacházejí v různých úložištích nebo patří do různých tříd. Můžete upravovat pouze položky ze stejné třídy nebo ve stejném úložišti. Vyberte podmnožinu položek, kterou chcete upravit.",
		multi_edit_class_selector_class_heading: "Třída",
		multi_edit_class_selector_entry_template_heading: "Šablona položky",
		multi_edit_class_selector_repository_heading: "Úložiště",
		multi_edit_class_selector_items_heading: "Položky",
		multi_edit_some_classes_not_displayed: "Některé z vybraných položek nejsou do tohoto seznamu zahrnuty, jelikož obsahují vlastnosti určené pouze pro čtení nebo se nacházejí v úložištích, která nepodporují úpravy vlastností.",
		multi_edit_properties_invalid_msg: "Některé hodnoty vlastností nejsou platné pro všechny vybrané položky.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Tato vlastnost je určena pouze pro čtení a nelze ji měnit.",
		multi_edit_append_checkbox_label: "Připojit",
		multi_edit_append_checkbox_tooltip: "Tuto volbu vyberte, chcete-li připojit novou hodnotu vlastnosti k existujícím hodnotám namísto jejich nahrazení novou hodnotou.",
		multi_edit_properties_invalid_childcomponent_msg: "Některé hodnoty v rámci vlastnosti ${0} podřízené komponenty ${1} závisí na dalších vlastnostech a v kombinaci s provedeným výběrem jsou neplatné. Vymažte hodnoty v podřízené komponentě ${1} nebo jednotlivě proveďte změny vlastností položek, které jste vybrali.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exportovat vlastnosti",
		export_properties_dialog_info: "Vyberte vlastnosti, které chcete exportovat, a určete pořadí, ve kterém se zobrazí.",
		export_properties_dialog_export_button_label: "Exportovat",
		export_properties_dialog_export_raw_values: "Exportovat nezpracované hodnoty",

		/* Properties */
		filter_clear_tooltip: "Vymazat filtr",
		properties_new_row: "Nový",
		properties_requiredClass_document_tooltip: "Vyberte dokument. Tento dokument musí náležet do třídy ${0}.",
		properties_requiredClass_folder_tooltip: "Vyberte složku. Tato složka musí náležet do třídy ${0}.",
		properties_dataType_tooltip: "Datový typ: ${0}",
		properties_maxLength_tooltip: "Maximální délka: ",
		properties_minLength_tooltip: "Minimální délka: ",
		properties_minValue_tooltip: "Minimální hodnota: ",
		properties_maxValue_tooltip: "Maximální hodnota: ",
		properties_format_tooltip: "Formát: ",
		properties_description_tooltip: "Popis: ",

		properties_type_boolean_tooltip: "Logická hodnota",
		properties_type_date_tooltip: "Datum",
		properties_type_time_tooltip: "Čas",
		properties_type_timestamp_tooltip: "Časové razítko",
		properties_type_decimal_tooltip: "Desetinná hodnota",
		properties_type_double_tooltip: "Číslo s pohyblivou řádovou čárkou",
		properties_type_short_tooltip: "Celočíselná hodnota",
		properties_type_integer_tooltip: "Celočíselná hodnota",
		properties_type_long_tooltip: "Celočíselná hodnota",
		properties_type_string_tooltip: "Textový řetězec",
		properties_type_string_alpha_tooltip: "Abecední řetězec",
		properties_type_string_alphanum_tooltip: "Alfanumerický řetězec",
		properties_type_string_ext_tooltip: "Rozšířený alfanumerický řetězec",
		properties_type_string_num_tooltip: "Numerický řetězec",
		properties_type_binary_tooltip: "Binární",
		properties_type_object_tooltip: "Předmět",
		properties_type_reference_tooltip: "Tato vlastnost odkazuje na jinou položku v úložišti.",
		properties_type_guid_tooltip: "Identifikátor GUID",
		properties_type_group_tooltip: "Uživatelé a skupiny",
		properties_type_user_tooltip: "Uživatelé",
		properties_type_childComponent_tooltip: "Podřízená komponenta",

		properties_childComponent_minCardinalityOnly_tooltip: "Tato vlastnost musí zahrnovat alespoň ${0} hodnot.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Tato vlastnost nesmí zahrnovat více než ${0} hodnot.",
		properties_childComponent_minMaxCardinality_tooltip: "Tato vlastností musí zahrnovat alespoň ${0} a nesmí zahrnovat více než ${1} hodnot.",
		properties_childComponent_noCardinality_tooltip: "Tato vlastnost může zahrnovat libovolný počet hodnot.",

		properties_type_guid_example_tooltip: ", například {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Vyberte hodnotu ze seznamu.",
		properties_single_select_choice_tooltip: "Vyberte hodnotu.",
		properties_multiple_select_typein_tooltip: "Zadejte jednu nebo více hodnot.",
		properties_multiple_select_choice_tooltip: "Vyberte jednu nebo více hodnot.",
		properties_not_selectable_tooltip: "Kategorii nelze vybrat.",
		properties_none: "Žádné",
		properties_none_tooltip: "Chcete-li vymazat aktuální hodnotu vlastnosti, vyberte volbu <i>Žádná hodnota</i>.",
		properties_value_empty: "Žádná hodnota",
		properties_value_read_only: "Pouze pro čtení",
		properties_clear_label: "Vymazat",
		properties_clear_tooltip: "Vymazání hodnoty v tomto poli vymaže po klepnutí na volbu <b>Uložit</b> tuto hodnotu v úložišti.",
		properties_box_custom_properties: "Přizpůsobené vlastnosti",
		properties_box_metadata_name_in_use: "Tento název je již používán. Zadejte pro přizpůsobenou vlastnost jiný název.",

		properties_templates: "Šablony",
		properties_add_template: "Přidat šablonu",
		properties_remove_template: "Odebrat",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Vrátit",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Vrátit",
		checkin_cancel_label: "Storno",
		checkin_file_name_label: "Název souboru",
		checkin_document_status_title: "Vrátit dokument",
		checkin_document_status_uploading_msg: "Odesílání souboru...",
		checkin_document_status_checkingin_msg: "Vracení souboru...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Vybrat režim redakce",
		viewer_redaction_new_document_confirmation_question: "Chcete redakci uložit jako nový dokument, nebo lokální soubor?",
		viewer_redaction_new_version_confirmation_question: "Chcete uložit redakci jako novou verzi?",
		viewer_redaction_new_version_confirmation_question_never: "Chcete redakci uložit jako nový obsah?",		
		viewer_redaction_new_document_button: "Ano",
		viewer_redaction_new_document_cancel_button: "Ne",
		viewer_redaction_add_document_confirmation_question: "Chcete redakci uložit jako nový dokument, novou verzi, nebo lokální soubor?",
		viewer_redaction_add_document_confirmation_question_version_never: "Chcete redakci uložit jako nový dokument, nový obsah, nebo lokální soubor?",
		viewer_redaction_add_document_button: "Nový dokument",
		viewer_redaction_add_new_version_button: "Nová verze",
		viewer_redaction_add_new_version_button_version_never: "Nový obsah",
		viewer_redaction_add_local_file_button: "Lokální soubor",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Vybrat důvod redakce",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Šablona položky, která byla použita k přidání dokumentu do úložiště, nebyla nalezena. Dokument bude vrácen do úložiště bez použití šablony položky.",
		property_entry_template_not_retrieved_warning: "Šablona položky, která byla použita k přidání dokumentu do úložiště, nebyla nalezena. Vlastnosti dokumentu budou zobrazeny bez použití šablony položky.",
		multi_edit_entry_template_not_found_name: "[Nenalezeno]",
		multi_edit_entry_template_not_retrieved_warning: "Šablona položky, která byla použita k přidání těchto položek do úložiště, nebyla nalezena. Vlastnosti položky budou upraveny bez použití šablony položky.",
		checkin_major_version_hover: "Zvýší číslo verze dokumentu o jeden stupeň a nastaví stav dokumentu na hodnotu Vydáno. Pokud tato volba není vybrána, dokument není připraven na vydání a je vrácen jako vedlejší verze.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokument nelze vrátit, protože není zapůjčen.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Jméno uživatele nebo heslo pro daný server není platné.",
		error_bad_userid_password_userResponse: "Zkontrolujte, že jste jméno uživatele a heslo zadali správně.",
		error_bad_userid_password_adminResponse: "Byla vrácena následující chyba: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "chybová_zpráva",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Nelze vytvořit připojení k webovému klientu s použitím následující adresy URL: ${0}.",
		http_send_error_explanation: "Tuto chybu může způsobit problém konfigurace na webovém aplikačním serveru nebo problém s aplikací webového klienta.",
		http_send_error_userResponse: "Zkuste se znovu přihlásit. Pokud potíže přetrvávají, ohlaste chybu administrátorovi systému.",
		http_send_error_adminResponse: "Byla vrácena následující chyba HTTP: ${1}.",
		http_send_error_0: "adresa_URL_web_klienta",
		http_send_error_1: "chyba_HTTP",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Nelze vytvořit připojení k webovému klientu s použitím následující adresy URL: ${0}.",
		http_error_explanation: "Může být nutné provést ověření pro bránu firewall, případně nemusí být spuštěn webový aplikační server, nebo není dostupný kvůli problémům sítě.",
		http_error_userResponse: "Při požadavku ověření pro bránu firewall proveďte ověření a pokuste se přihlásit znovu. Pokud potíže přetrvávají, ohlaste chybu administrátorovi systému.",
		http_error_adminResponse: "Byla vrácena následující chyba HTTP: ${1}.",
		http_error_0: "adresa_URL_web_klienta",
		http_error_1: "chyba_HTTP",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Nelze vytvořit připojení k webovému klientu s použitím následující adresy URL: ${0}.",
		http_response_bad_explanation: "Tato chyba může být způsobena problémem s konfigurací webového aplikačního serveru nebo problémem s webovým klientem.",
		http_response_bad_userResponse: "Zkuste se znovu přihlásit. Pokud potíže přetrvávají, ohlaste chybu administrátorovi systému.",
		http_response_bad_adminResponse: "Byla vrácena následující chyba: ${1}.",
		http_response_bad_0: "adresa_URL_web_klienta",
		http_response_bad_1: "chyba_HTTP",
		http_response_bad_number: 2002,

		unititled_document_name: "Bez názvu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "E-mailový aplet nelze spustit.",
		email_applet_init_failed_explanation: "Tento problém může nastat v případě, že e-mailový klient není správně nainstalován a nakonfigurován nebo že ve vaší pracovní stanici není nainstalována podporovaná verze prostředí Java Runtime Environment (JRE).",
		email_applet_init_failed_userResponse: "Vyřešení problému:<ul><li>Zkontrolujte, zda je nainstalována e-mailová aplikace a nakonfigurována jako výchozí e-mailový klient pro vaši pracovní stanici.</li><li>Ověřte, zda je ve vaší pracovní stanici nainstalována podporovaná verze prostředí JRE. To provedete zadáním následujícího příkazu na příkazový řádek: java -version</li></ul><p>Seznam podporovaných verzí prostředí JRE je uveden na serveru softwarové podpory společnosti IBM v <i>dokumentu popisujícím hardwarové a softwarové předpoklady pro produkt IBM Content Navigator</i>.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "E-mailovou aplikaci nebylo možné spustit, protože nelze načíst vyžadovanou soubor knihovny DLL.",
		email_applet_JNI_LOAD_FAILED_explanation: "Požadovaný soubor WCEmailAppletJNI.dll nelze načíst, protože dočasný adresář vaší pracovní stanice je zřejmě zaplněn.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Zkontrolujte, zda je v dočasném adresáři dostatek místa. Poté zkuste odeslat dokument z webového klienta znovu. Při výchozím nastavení se soubor WCEmailAppletJNI.dll načte do dočasného adresáře, který je určen v nastaveních webového prohlížeče.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "E-mailovou aplikaci nebylo možné spustit, protože e-mailový aplet nemůže vytvořit dočasný soubor.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Dočasný adresář vaší pracovní stanice může být zaplněn.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Zkontrolujte, zda je v dočasném adresáři dostatek místa. Poté zkuste odeslat dokument z webového klienta znovu.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "E-mailovou aplikaci nelze spustit, protože e-mailový aplet nemůže zobrazit dočasný adresář.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Dočasný adresář pracovní stanice může být zaplněn, případně nemusíte mít potřebný přístup k zápisu do dočasného adresáře.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Zkontrolujte, zda je v dočasném adresáři dostatek místa, a dále se ujistěte, že máte oprávnění k zápisu do dočasného adresáře. Poté zkuste odeslat dokument z webového klienta znovu. Pokud problém přetrvává, obraťte se na administrátora systému.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E-mailový aplet nemůže odstranit dočasný soubor.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Je možné, že soubor používá jiná aplikace nebo že soubor na pracovní stanici neexistuje.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Pokud soubor používá jiná aplikace, zavřete ji. Pokud soubor na pracovní stanici existuje, odeberte z dočasného adresáře pracovní stanice následující soubor: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Odkaz na dokument nelze vytvořit.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Úložiště vrátilo adresu URL v neplatném formátu.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Zavřete webový prohlížeč včetně všech karet a relací a znovu se přihlaste. Zkuste odeslat dokument z webového klienta znovu. Pokud problém přetrvává, obraťte se na softwarovou podporu společnosti IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E-mailový aplet nemůže soubor připojit k e-mailu.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Úložiště vrátilo adresu URL dokumentu v neplatném formátu.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Zavřete webový prohlížeč včetně všech karet a relací a znovu se přihlaste. Zkuste odeslat dokument z webového klienta znovu. Pokud problém přetrvává, obraťte se na softwarovou podporu společnosti IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Přílohu nelze vytvořit.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E-mailový aplet nemůže přečíst adresu URL dokumentu.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Zavřete webový prohlížeč včetně všech karet a relací a znovu se přihlaste. Zkuste odeslat dokument z webového klienta znovu. Pokud problém přetrvává, obraťte se na softwarovou podporu společnosti IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokument nelze načíst z úložiště.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Je možné, že došlo k vypršení časového limitu relace, nemusí být spuštěno úložiště či webový aplikační server nebo mohlo dojít k problému s konfigurací webového klienta.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Přihlaste se a zkuste odeslat dokument e-mailem znovu. Pokud potíže přetrvávají, obraťte se na administrátora systému a požádejte jej o analýzu protokolů chyb úložiště.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Pokud jste webového klienta nakonfigurovali tak, aby převáděl dokumenty AFP do jiného formátu, například do formátu PDF, před odesláním dokumentů jako příloh se ujistěte, že je převod správně nakonfigurován.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokument nelze převést na soubor PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Nástroj používaný k transformaci dokumentů do formátu PDF nepodporuje tento typ souboru.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Zavřete tuto stránku a pokuste se dokument odeslat e-mailem znovu bez převodu do formátu PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-mail nebyl vytvořen.",
		email_applet_MAPI_USER_ABORT_explanation: "Otevřete e-mailovou aplikaci a ověřte, že pracuje správně. Poté zkuste odeslat dokument z webového klienta znovu. Pokud problém přetrvává, obraťte se na administrátora systému se žádostí o kontrolu protokolů událostí operačního systému.",
		email_applet_MAPI_USER_ABORT_userResponse: "Pokud jste chtěli e-mailovou aplikaci zavřít, není vyžadována žádná další akce. Pokud chcete e-mail odeslat, přihlaste se k e-mailové aplikaci a pokuste se dokument z webového klienta odeslat znovu.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-mail nelze vytvořit.",
		email_applet_MAPI_FAILURE_explanation: "Je možné, že není otevřen e-mailový klient nebo že nejste přihlášeni.",
		email_applet_MAPI_FAILURE_userResponse: "Otevřete e-mailovou aplikaci a ověřte, že pracuje správně. Poté zkuste odeslat dokument z webového klienta znovu. Pokud problém přetrvává, obraťte se na administrátora systému se žádostí o kontrolu protokolů událostí operačního systému.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-mail nelze vytvořit.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Nejste přihlášeni k e-mailovému klientovi. Chcete-li poslat zprávu z webového klienta, musíte mít otevřeného e-mailového klienta a musíte být přihlášeni.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Otevřete e-mailového klienta a přihlaste se. Poté zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-mail nelze vytvořit, protože na vaší pracovní stanici nelze vytvořit dočasný soubor.",
		email_applet_MAPI_DISK_FULL_explanation: "Dočasný adresář vaší pracovní stanice může být zaplněn.",
		email_applet_MAPI_DISK_FULL_userResponse: "Zkontrolujte, zda je v dočasném adresáři dostatek místa. Poté zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-mail nelze vytvořit, protože není k dispozici dostatek systémové paměti.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Pravděpodobně je otevřeno příliš mnoho aplikací.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Zavřete nepoužívané aplikace a poté zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Přístup k rozhraní MAPI byl odepřen.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Přístup k rozhraní MAPI (Messaging Application Programming Interface) nemusí být pro danou e-mailovou aplikaci povolen nebo podporován. Rozhraní MAPI představuje protokol systému zpráv používaný ke komunikaci mezi webovým klientem a e-mailovou aplikací.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Obraťte se na administrátora systému.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Zkontrolujte, zda je v e-mailové aplikaci správně nastaven a konfigurován přístup MAPI. Pokud problém přetrvává, kontaktujte softwarovou podporu IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Přílohu nebo odkaz na položku nelze vytvořit.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Může být otevřeno příliš velké množství relací webového prohlížeče.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Zavřete všechny nepoužívané relace webového prohlížeče. Poté zkuste odeslat dokument z webového klienta znovu. V případě, že chyba přetrvá, obraťte se na administrátora systému.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-mail nelze odeslat.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Je možné, že se snažíte odeslat příliš mnoho příloh.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Vyberte menší počet souborů. Poté zkuste dokumenty z webového klienta odeslat znovu.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-mail nelze odeslat.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Je možné, že se snažíte odeslat e-mail příliš velkému počtu příjemců.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Odešlete e-mail menšímu počtu příjemců.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Přílohu nelze vytvořit.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Některé vyžadované dočasné soubory mohly být odstraněny před vytvořením přílohy. K této chybě může dojít v případě, že před odesláním e-mailu dojde k vymazání mezipaměti prohlížeče.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Přílohu nelze vytvořit.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Některé vyžadované dočasné soubory mohly být odstraněny před vytvořením přílohy. K této chybě může dojít v případě, že před odesláním e-mailu dojde k vymazání mezipaměti prohlížeče.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "E-mailová aplikace nemůže vytvořit přílohu.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-mail nelze odeslat zadanému příjemci.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Příjemce pravděpodobně neexistuje v adresáři.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Zkontrolujte jméno příjemce a zkuste dokument odeslat znovu.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-mail nelze odeslat zadanému příjemci.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-mailová adresa může být nesprávně formátována.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Zkontrolujte, že jste zadali platnou e-mailovou adresu, a zkuste dokument odeslat znovu.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_NO_MESSAGES_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-mail nelze odeslat.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-mail je pravděpodobně příliš dlouhý.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Zkraťte text e-mailu a pokuste se e-mail odeslat znovu.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-mail nelze vytvořit.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Je možné, že e-mailový klient při pokusu o vytvoření e-mailu selhal.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Restartujte e-mailového klienta a zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-mail pravděpodobně nebyl správně sestaven.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-mail nelze odeslat zadanému příjemci.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-mailová adresa může být nesprávně formátována.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Zkontrolujte, že jste zadali platnou e-mailovou adresu, a odešlete dokument znovu.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E-mailový klient nemůže provést požadovanou akci.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E-mailová aplikace vrátila neočekávanou chybu.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Zkuste odeslat dokument z webového klienta znovu.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Pro jednu z vlastností není uveden požadovaný počet hodnot.",
		error_property_cardinality_explanation: "Některé vlastnosti mají minimální a maximální počet hodnot.",
		error_property_cardinality_userResponse: "K určení vlastnosti, která vyžaduje minimální počet hodnot, použijte bublinovou nápovědu. Poté zadejte minimální počet hodnot a operaci zopakujte.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Je vyžadován název souboru.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Zadejte název souboru a operaci zopakujte.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Modul plug-in ${0} obsahuje chyby.",
		plugin_error_explanation: "Při vyhodnocení skriptu JavaScript pro modul plug-in ${0} došlo k chybě. Pokud budete webového klienta nadále používat, může dojít k dalším chybám.",
		plugin_error_userResponse: "Obraťte se na administrátora systému.",
		plugin_error_adminResponse: "Nastal problém s modulem plug-in, který musí vyřešit poskytovatel modulu plug-in. Doporučuje se odebrat modul plug-in z konfigurace webového klienta, dokud se problém s modulem plug-in nevyřeší.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Šablonu položky nelze otevřít.",
		open_old_format_entry_template_error_explanation: "Šablona položky používá starý formát, který není ve webovém klientovi podporován.",
		open_old_format_entry_template_error_userResponse: "Požádejte administrátora systému, aby šablonu položky aktualizoval.",
		open_old_format_entry_template_error_adminResponse: "Pomocí aplikace Application Engine nebo návrháře šablony položky Workplace XT můžete uložit aktualizovanou verzi šablony položky.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Šablonu položky nelze otevřít.",
		open_custom_object_entry_template_error_explanation: "Webový klient nepodporuje následující typ šablony položky: Šablona položky pro vlastní objekty.",
		open_custom_object_entry_template_error_userResponse: "Otevřete jinou šablonu položky.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Objekt elektronického formuláře nelze otevřít.",
		open_forms_object_error_explanation: "Webový klient nepodporuje následující typy objektů elektronických formulářů: šablona formuláře, data formuláře, zásady dokumentu a zásady sledu prací.",
		open_forms_object_error_userResponse: "Otevřete jiný dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Šablonu položky ${0} nelze použít.",
		entry_template_folder_restricted_error_explanation: "Šablona položky přidává položky do složky ${1}, ale k přidání položek do této složky nemáte příslušná oprávnění.",
		entry_template_folder_restricted_error_userResponse: "Vyberte jinou šablonu položky nebo požádejte administrátora systému, aby vám udělil potřebná oprávnění k přidání položek do složky ${1}.",
		entry_template_folder_restricted_error_0: "název_šablony_položky",
		entry_template_folder_restricted_error_1: "název_složky",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Šablonu položky nelze otevřít.",
		open_records_entry_template_error_explanation: "Webový klient nepodporuje následující typ šablony položky: Šablona položky pro deklaraci jako záznamu.",
		open_records_entry_template_error_userResponse: "Otevřete jinou šablonu položky.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Sled prací nelze otevřít.",
		open_workflow_error_explanation: "Webový klient nepodporuje otevírání sledů prací.",
		open_workflow_error_userResponse: "Otevřete jiný dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokument nelze otevřít.",
		viewer_unable_to_view_error_explanation: "Pro dokumenty tohoto typu není konfigurován žádný prohlížeč nebo konfigurovaný prohlížeč není kompatibilní s vaším systémem.",
		viewer_unable_to_view_error_userResponse: "Požádejte administrátora systému, aby pro dokumenty tohoto typu nakonfiguroval prohlížeč a ověřil, že konfigurovaný prohlížeč spolupracuje se systémem uživatele.",
		viewer_unable_to_view_error_adminResponse: "Pomocí nástroje pro administraci nakonfigurujte prohlížeč pro tento typ dokumentů.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Hledání nelze otevřít.",
		search_cannot_open_error_explanation: "Funkce hledání není nakonfigurována pro tuto pracovní plochu.",
		search_cannot_open_error_userResponse: "Zeptejte se administrátora systému, zda můžete získat přístup k pracovní ploše, která obsahuje tuto funkci hledání, nebo zda lze stávající pracovní plochu aktualizovat a přidat do ní funkci hledání.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokument nebyl načten.",
		viewer_document_load_failed_error_explanation: "Prohlížeči Daeja ViewONE Professional se nepodařilo otevřít dokument.",
		viewer_document_load_failed_error_userResponse: "Další informace naleznete v chybové zprávě zobrazené v prohlížeči.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokument nelze prohlížet.",
		viewer_session_expired_explanation: "Obsah dokumentu nelze načíst.",
		viewer_session_expired_userResponse: "Zkuste se znovu přihlásit. Pokud problém přetrvává, je možné, že aplikační server není spuštěn. Požádejte administrátora systému, aby vyhledal další informace v protokolech chyb produktu IBM Content Navigator nebo aby restartoval server.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokument nelze prohlížet.",
		ajaxViewer_getPage_failed_explanation: "Prohlížeč AJAX obdržel během načítání obsahu stránky chybovou odezvu. Je možné, že aplikační server není spuštěn.",
		ajaxViewer_getPage_failed_userResponse: "Zavřete webový prohlížeč a znovu se přihlaste. Pokud problém přetrvává, požádejte administrátora systému o kontrolu souborů protokolu webového aplikačního serveru nebo o restartování serveru.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Na vaší pracovní stanici nebylo nalezeno běhové prostředí Java (JRE).",
		viewer_java_plugin_not_found_explanation: "Buď nebyl nalezen modul plug-in nebo není nainstalována správná verze prostředí JRE.",
		viewer_java_plugin_not_found_userResponse: "Zkontrolujte, zda je nainstalováno prostředí JRE. Na příkazový řádek například zadejte následující příkaz: Java -version. Pokud prostředí JRE není nainstalováno nebo pokud je nainstalována nesprávná úroveň verze, nainstalujte správnou verzi prostředí JRE. Seznam podporovaných verzí je uveden na serveru softwarové podpory společnosti IBM v <i>dokumentu popisujícím hardwarové a softwarové předpoklady pro produkt IBM Content Navigator</i>.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokument nelze zobrazit ve webovém prohlížeči.",
		viewer_pdf_plugin_not_found_explanation: "Modul plug-in sloužící k zobrazování dokumentů PDF ve webovém prohlížeči nebyl nalezen.",
		viewer_pdf_plugin_not_found_userResponse: "Soubor PDF nebude zobrazen v okně prohlížeče, ale stažen do pracovní stanice.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Následující položku nelze přidat do úložiště: ${0}.",
		add_document_single_item_error_explanation: "Tato chyba se může vyskytnout z následujících příčin:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokoušíte se přidat dokument, který byl přesunut nebo odstraněn.</li>" + "<li>Pokoušíte se přidat dokument, který byl přejmenován.</li>" + "<li>Pokoušíte se přidat dokument, který je poškozen.</li>" + "<li>Pokoušíte se přidat dokument, který je otevřen v jiné aplikaci.</li>" + "<li>Pokoušíte se přidat složku do úložiště.</li>" + "<li>Nemáte oprávnění potřebná k přístupu k dokumentu v operačním systému.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Provedením vhodné akce problém vyřešte:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokud byl dokument přesunut nebo přejmenován, najděte jej v souborovém systému a zkuste jej přidat znovu.</li>" + "<li>Je-li dokument otevřen v jiné aplikaci, zavřete jej a zkuste jej přidat znovu.</li>" + "</ul>" + "<br>Do úložiště nelze přidávat složky.",
		add_document_single_item_error_0: "nezdařená_položka",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Následující položky (v počtu ${0}) nelze přidat do úložiště: ${1}",
		add_document_multiple_items_error_explanation: "Přidání všech položek do úložiště brání problém s některou z položek. Tato chyba se může vyskytnout z následujících příčin:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokoušíte se přidat dokument, který byl přesunut nebo odstraněn.</li>" + "<li>Pokoušíte se přidat dokument, který byl přejmenován.</li>" + "<li>Pokoušíte se přidat dokument, který je poškozen.</li>" + "<li>Pokoušíte se přidat dokument, který je otevřen v jiné aplikaci.</li>" + "<li>Pokoušíte se přidat složku do úložiště.</li>" + "<li>Nemáte oprávnění potřebná k přístupu k dokumentu v operačním systému.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Provedením vhodné akce problém vyřešte:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokud byl některý dokument přesunut nebo přejmenován, najděte jej v souborovém systému a zkuste položky přidat znovu.</li>" + "<li>Je-li některý dokument otevřen v jiné aplikaci, zavřete jej a zkuste položky přidat znovu.</li>" + "<li>Pokud byl některý dokument odstraněn nebo je poškozen, zrušte výběr příslušné položky a zkuste přidat zbývající položky znovu.</li>" + "</ul>" + "<br>Do úložiště nelze přidávat složky.",
		add_document_multiple_items_error_0: "počet_položek",
		add_document_multiple_items_error_1: "nezdařené_položky",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Z tohoto umístění nelze přetahovat položky pomocí myši.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Objekt elektronického formuláře nelze otevřít.",
		open_forms_work_object_error_explanation: "Webový klient nepodporuje následující typ objektu elektronického formuláře: zásady sledu prací.",
		open_forms_work_object_error_userResponse: "Otevřete jiný dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokument nelze otevřít.",
		viewer_privilege_to_view_error_explanation: "Nemáte příslušná oprávnění k zobrazení dokumentu.",
		viewer_privilege_to_view_error_userResponse: "Požádejte vlastníka dokumentu nebo administrátora systému o udělení příslušných oprávnění k zobrazení dokumentu.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Položky nelze přidat do úložiště.",
		add_document_too_many_items_error_explanation: "Najednou můžete přidat až ${0} položek. Pokoušíte se přidat ${1} položek.",
		add_document_too_many_items_error_userResponse: "Odeberte některé položky ze seznamu a zkuste položky přidat znovu. Dále se můžete obrátit na administrátora systému kvůli zvýšení maximálního počtu dokumentů, které lze najednou přidat na pracovní plochu.",
		add_document_too_many_items_error_0: "maximální_počet_položek",
		add_document_too_many_items_error_1: "počet_položek",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Nelze vytvořit připojení k webovému klientu s použitím následující adresy URL: ${0}.",
		http_ltpa_expired_explanation: "Platnost klíče ověřování LTPA přidruženého k relaci prohlížení vypršela.",
		http_ltpa_expired_userResponse: "Spusťte webový prohlížeč znovu a zkuste se znovu přihlásit. Pokud potíže přetrvávají, ohlaste administrátorovi systému následující chybu: ${1}.",
		http_ltpa_expired_0: "adresa_URL_web_klienta",
		http_ltpa_expired_1: "chyba_HTTP",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokument nelze přidat do složky ${0}.",
		dnd_no_privilege_error_explanation: "Oprávnění pro složku neumožňují přidávat do složky dokumenty.",
		dnd_no_privilege_error_userResponse: "Přidejte dokument do jiné složky.",
		dnd_no_privilege_error_0: "název_položky",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Položky nelze měnit.",
		modify_document_too_many_items_error_explanation: "Můžete změnit až ${0} položek najednou. Pokoušíte se změnit ${1} položek.",
		modify_document_too_many_items_error_userResponse: "Vyberte menší počet položek a zkuste znovu změnit položky. Dále se můžete obrátit na administrátora systému kvůli zvýšení maximálního počtu položek, které lze najednou měnit z této pracovní plochy.",
		modify_document_too_many_items_error_0: "maximální_počet_položek",
		modify_document_too_many_items_error_1: "počet_položek",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Nelze použít třídu ${0}.",
		add_document_multiple_unique_values_error_explanation: "Třída ${0} obsahuje jednu či více vlastností, které vyžadují jedinečnou hodnotu pro každý dokument. Když přidáte více dokumentů, všechny používají stejné hodnoty.",
		add_document_multiple_unique_values_error_userResponse: "Vyberte jinou třídu nebo přidejte dokumenty jednotlivě.",
		add_document_multiple_unique_values_error_0: "zobrazovaný_název_třídy",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Šablonu položky ${0} nelze použít.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Šablona položky ${0} vyžaduje přidání dokumentů do třídy ${1}. Třída ${1} však obsahuje jednu či více vlastností, které vyžadují jedinečnou hodnotu pro každý dokument. Když přidáte více dokumentů, všechny používají stejné hodnoty.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Vyberte jinou šablonu položky nebo přidejte dokumenty jednotlivě.",
		add_document_multiple_unique_values_entry_template_error_0: "název_šablony_položky",
		add_document_multiple_unique_values_entry_template_error_1: "zobrazovaný_název_třídy",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Šablonu položky ${0} nelze použít.",
		entry_template_class_restricted_error_explanation: "Šablona položky přidává položky pomocí třídy ${1}, ale k přidání položek pomocí této třídy nemáte příslušná oprávnění.",
		entry_template_class_restricted_error_userResponse: "Vyberte jinou šablonu položky nebo požádejte administrátora systému, aby vám udělil potřebná oprávnění k přidání položek pomocí třídy ${1}.",
		entry_template_class_restricted_error_0: "název_šablony_položky",
		entry_template_class_restricted_error_1: "zobrazovaný_název_třídy",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Pracovní položku nelze přiřadit jinému uživateli.",
		process_reassign_error_explanation: "Tato akce je zakázána sledem prací.",
		process_reassign_error_userResponse: "Můžete otevřít pracovní položku a dokončit aktuální krok v pracovní položce. Více informací o této otázce získáte tím, že pořádáte vlastníka položky o ověření, zda je pracovní položka opakovaně přiřazena.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Následující vlastní akci nelze načíst: ${0}.",
		customaction_loadurl_error_explanation: "Příslušná vlastní akce není k dispozici v přístupném umístění. Aktuální adresa URL vlastní akce je ${1}.",
		customaction_loadurl_error_userResponse: "Požádejte administrátora o přesunutí vlastní akce do přístupného umístění.",
		customaction_loadurl_error_adminResponse: "Soubor JSP, který definuje příslušnou vlastní akci, musí být předán jako součást webové aplikace eClient nebo webové aplikace IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Následující funkci nelze nalézt: ${0}.",
		feature_invalid_explanation: "K tomuto problému může dojít, když daná funkce není v určené pracovní ploše k dispozici nebo je nesprávně uveden název funkce.",
		feature_invalid_userResponse: "Po klepnutí na tlačítko OK budete přesměrováni na výchozí funkci pro tuto pracovní plochu. Obraťte se na vašeho administrátora systému a ohlaste tento problém.",
		feature_invalid_adminResponse: "Pokud by daná funkce měla být v pracovní ploše dostupná, aktualizujte konfiguraci pracovní plochy pomocí nástroje pro administraci. Pokud by daná funkce neměla být zahrnuta do pracovní plochy nebo je nesprávně zapsána, aktualizujte adresu URL ve spolupráci s vývojářem aplikace, který vytvořil adresu URL této funkce.",
		feature_invalid_number: 2066,
		feature_invalid_0: "název_funkce",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Hledání ${0} nelze otevřít.",
		search_unsupportedTeamspaceSearch_error_explanation: "Hledání lze otevřít pouze v případě, že se nacházíte v týmovém prostoru.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Vyberte jiné hledání.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Následující soubor nelze importovat: ${0}.",
		wrong_import_file_type_error_explanation: "Soubor musí být souborem vlastností.",
		wrong_import_file_type_error_userResponse: "Vyberte soubor vlastností, který jste exportovali pomocí nástroje pro administraci.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Úložiště ${0} nebylo na pracovní ploše ${1} nalezeno.",
		browse_repository_not_found_error_explanation: "Úložiště se musí nacházet na pracovní ploše a musí pro ně být povolena funkce procházení, je-li určeno prostřednictvím parametru adresy URL.",
		browse_repository_not_found_error_userResponse: "Ověřte, že ID úložiště uvedené v adrese URL je správné, že úložiště bylo přidáno na plochu ${1} a že je pro příslušné úložiště povolena funkce procházení.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Pro úložiště ${0} není povolena funkce procházení na pracovní ploše ${1}.",
		browse_repository_not_enabled_error_explanation: "Pro úložiště musí být povolena funkce procházení, je-li určeno prostřednictvím parametru adresy URL.",
		browse_repository_not_enabled_error_userResponse: "Povolte funkci procházení pro úložiště ${0} na pracovní ploše ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Hledání nelze dokončit, protože odkaz obsahuje neplatná kritéria.",
		invalid_xt_stored_search_criteria_error_explanation: "Následující hodnota je neplatná: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Požádejte administrátora systému o poskytnutí aktualizovaného odkazu.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Upravte příslušnou dvojici názvu a hodnoty v adres URL. Nevíte-li, které hodnoty jsou pro příslušnou vlastnost platné, otevřete uložené hledání v návrháři hledání produktu FileNet Workplace XT a určete platnou hodnotu.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Vyhledávání ve více úložištích nelze otevřít.",
		unified_search_invalid_fixed_value_error_explanation: "Vyhledávání ve více úložištích obsahuje neplatná kritéria. Tento problém může nastat v případě kritéria s pevnou hodnotou, jež není kompatibilní s ostatními vlastnosti v rámci mapování. Tento problém může nastat například v případě, že pevnou hodnotou je řetězec, ostatní vlastnosti v rámci mapování však mají celočíselné hodnoty.",
		unified_search_invalid_fixed_value_error_userResponse: "Pokud máte oprávnění potřebná k úpravám hledání, odeberte neplatná kritéria a uložte hledání znovu. Pokud nemáte oprávnění potřebná k úpravám hledání, požádejte o opětovné uložení hledání vlastníka hledání nebo administrátora systému.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Požadavek nelze zpracovat.",
		launch_action_invalid_json_error_explanation: "Data předaná webovému klientu jsou neplatná.",
		launch_action_invalid_json_error_userResponse: "Informujte administrátora systému o aplikaci, kterou jste používali, když nastal tento problém.",
		launch_action_invalid_json_error_adminResponse: "Klientská aplikace neodeslala webovému klientu platný objekt JSON. Obraťte se na softwarovou podporu IBM se žádostí o další pomoc.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Požadavek nelze zpracovat.",
		launch_action_not_found_error_explanation: "Akce ${0} není konfigurována pro žádné nabídky na pracovní ploše ${1}.",
		launch_action_not_found_error_userResponse: "Požádejte administrátora systému, aby konfiguroval pro pracovní plochu ${1} možnost použití nabídky obsahující akci ${0} nebo aby vám přidělil pracovní plochu, která akci ${0} obsahuje.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Požadavek nelze zpracovat.",
		launch_action_repository_not_found_error_explanation: "Úložiště ${0} není přidruženo k pracovní ploše ${1}.",
		launch_action_repository_not_found_error_userResponse: "Požádejte administrátora systému, aby úložiště ${0} přidružil k pracovní ploše ${1} nebo aby vám přidělil pracovní plochu, která úložiště ${0} obsahuje.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Týmový prostor nelze otevřít.",
		teamspace_cannot_open_error_explanation: "Funkce týmového prostoru není nakonfigurována pro tuto pracovní plochu.",
		teamspace_cannot_open_error_userResponse: "Zeptejte se administrátora systému, zda můžete získat přístup k pracovní ploše, která obsahuje tuto funkci týmového prostoru, nebo zda lze stávající pracovní plochu aktualizovat a přidat do ní funkci týmového prostoru.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Při vracení redigovaného obsahu došlo k chybě.",
		viewer_redaction_checkin_failed_explanation: "Prohlížeč obdržel během vracení redigovaného obsahu chybovou odezvu.",
		viewer_redaction_checkin_failed_userResponse: "Požádejte administrátora svého systému, aby zkontroloval soubory protokolu webového aplikačního serveru.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Do tohoto úložiště nelze přidávat dokumenty.",
		add_document_odserver_odwek_version_od_error_explanation: "Aktuální verze serveru IBM Content Manager OnDemand nebo produktu ODWEK je nižší než minimální úroveň vyžadovaná pro podporu přidávání dokumentů do úložiště produktu Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Požádejte administrátora, aby zkontroloval, které verze serveru Content Manager OnDemand a produktu ODWEK jsou vyžadovány pro podporu přidávání dokumentů do úložišť produktu Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Položky nelze přidat do úložiště.",
		add_document_too_many_items_od_error_explanation: "V případě úložišť produktu IBM Content Manager OnDemand lze položky přidávat pouze jednu po druhé.",
		add_document_too_many_items_od_error_userResponse: "Odeberte některé položky ze seznamu a zkuste položky přidat znovu jednu po druhé.",
		add_document_too_many_items_od_error_0: "maximální_počet_položek",
		add_document_too_many_items_od_error_1: "počet_položek",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Položku nelze přidat do úložiště.",
		add_document_filesize_empty_od_error_explanation: "Do úložiště produktu IBM Content Manager OnDemand nelze přidávat prázdné soubory.",
		add_document_filesize_empty_od_error_userResponse: "Přidejte do souboru obsah a zkuste soubor přidat znovu nebo přidejte jinou položku.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Vyhledávání ve více úložištích nelze otevřít.",
		unified_search_repository_not_found_error_explanation: "Vyhledávání ve více úložištích zahrnuje jedno či více neplatných úložišť. Tento problém může nastat, pokud úložiště, která jsou zahrnuta v hledání, byla odstraněna z aplikace nebo odebrána z aktuální pracovní plochy.",
		unified_search_repository_not_found_error_userResponse: "Pokud máte oprávnění potřebná k úpravám hledání, uložte hledání znovu. Při uložení hledání webový klient odebere z hledání neplatná úložiště. Pokud nemáte oprávnění potřebná k úpravám hledání, požádejte o opětovné uložení hledání vlastníka hledání nebo administrátora systému.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Nelze vytvořit nový dokument.",
		edit_document_using_office_online_error: "Dokument nelze otevřít.",
		edit_document_using_office_online_error_explanation: "Adresa URL serveru Microsoft Office Online není nakonfigurovaná.",
		edit_document_using_office_online_error_userResponse: "Než budete moci používat produkt Office Online, musí administrátor nejprve povolit server Office Online pro úložiště a určit adresu URL serveru Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokument nelze otevřít v produktu Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Požádejte administrátora, aby aktualizoval integraci se serverem MS Office Online.<br><br> Pokud uživatel potřebuje přistupovat k tomuto dokumentu z produktu Microsoft Office Online, přejděte na stránku Integrace úprav pro příslušné úložiště a aktualizujte integraci se serverem MS Office Online tak, aby obsahovala třídu v seznamu tříd pro úpravy kvůli podpoře produktu Office Online. ",		
		browser_not_support_this_viewer: "Konfigurovaný prohlížeč není kompatibilní s vaším webovým prohlížečem.",
		browser_not_support_this_viewer_explanation: "Prohlížeč ${0} není podporován vaším webovým prohlížečem.",
		browser_not_support_this_viewer_userResponse: "K otevření tohoto dokumentu použijte jiný prohlížeč. Seznam podporovaných webových prohlížečů je obsažen v dokumentu <i>Požadavky na hardware a software pro produkt IBM Content Navigator</i> na webu IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informace o sledu prací",
		process_information_info_text: "Vybraná položka je aktuálně zpracovávána v následujících sledech prací:",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Rovná se",
		operator_NOTEQUAL: "Nerovná se",
		operator_LIKE: "Jako",
		operator_STARTSWITH: "Má na začátku",
		operator_ENDSWITH: "Má na konci",
		operator_NOTLIKE: "Není jako",
		operator_NULL: "Je prázdné",
		operator_NOTNULL: "Není prázdné",
		operator_LESS: "Menší než",
		operator_LESSOREQUAL: "Menší nebo rovno",
		operator_GREATER: "Větší než",
		operator_GREATEROREQUAL: "Větší nebo rovno",
		operator_BETWEEN: "Mezi",
		operator_NOTBETWEEN: "Není mezi",
		operator_IN: "Zahrnout vše",
		operator_INANY: "Zahrnout libovolné",
		operator_NOTIN: "Vyloučit vše",
		operator_CONTAINS: "Obsahuje",

		/* SearchForm widget */
		search_button_tooltip: "Vyhledat dokumenty, které odpovídají kritériím.",
		reset_button_tooltip: "Obnoví hledání na výchozí hodnoty nastavené administrátorem.",
		clear_button_tooltip: "Odebere všechny hodnoty zadané pro hledání.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Vybrat hledání",
		append_to_search: "Připojit ke hledání",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nové hledání",
		new_unified_search: "Nové hledání ve více úložištích",
		searh_name_contains: "Název hledání obsahuje",
		keep_search_criteria_expanded: "Ponechat vyhledávací kritéria otevřená",
		showing_results: "Zobrazení výsledků pro:",
		open_in_new_window: "Otevřít v novém okně",
		open_in_new_tab: "Otevřít na novém kartě",
		close_tab: "Zavřít kartu",
		add_repository: "Přidat úložiště",
		edit_repository: "Upravit úložiště",
		remove_repository: "Odebrat",
		search_scope: "Rozsah vyhledávání",
		search_class_template: "Třída",
		object_type_version: "Typ a verze objektu",
		not_applicable: "Nelze použít",
		unified_search_including_subfolders: " (včetně podsložek)",
		unified_search_dialog_intro_text: "Vyberte úložiště a vyhledávání nebo třídy, které chcete do vyhledávání zahrnout.",
		unified_search_class_or_template: "Třída nebo šablona",

		select_object_fieldset_legend: "Požadovaný způsob hledání položek pro připojení:",
		select_object_create_new_search: "Nové hledání",
		select_object_search_template: "Existující hledání",

		search_criteria: "Vyhledávací kritéria:",
		search_criteria_no_colon: "Vyhledávací kritéria",
		search_in_multiple: "Obor hledání (${0}):",
		search_location_including_subfolders: "${0} včetně podsložek",
		search_class: "Třída:",
		search_class_multiple: "Třída (${0}):",
		search_class_including_subclasses: "${0} včetně podtříd",
		search_class_all_pseudo: "Vše",
		search_results: "Výsledky hledání",
		select_operator: "Vybrat operátor",
		ending_value: "Koncová hodnota vlastnosti ${0}:",
		search_options: "Volby hledání:",
		search_version: "Verze:",
		search_released_version: "Vydaná verze",
		search_current_version: "Aktuální verze",
		search_all_versions: "Všechny verze",
		search_file_type_filter: "Filtr typů souborů:",
		search_one_file_type: "1 typ souboru",
		search_many_file_types: "${0} typy souborů",
		search_action_filter: "Filtr akce:",
		search_action_filter_hover_help: "Omezte rozsah výsledků tak, aby obsahoval pouze soubory, pro které uživatelé provedli specifické akce.<br/>Můžete například vyhledat pouze soubory, které byly přidány dne 20. září 2012.",
		search_action_filter_enabled: "Filtr akce je aktivován",
		search_enable: "Povolit",
		search_disable: "Zakázat",
		search_by: "uživatelem",
		search_added: "Přidáno",
		search_modified: "Změněno",
		search_checked_out: "Zapůjčeno",
		search_date_operator_on: "Zap.",
		search_date_operator_not_on: "Nikoli dne",
		search_date_operator_before: "Před",
		search_date_operator_after: "Po",
		search_version_hover_help_p8: "Pro všechny uživatele je k dispozici vydaná verze. Dokument s aktuální verzí indikuje, že jeden či více uživatelů příslušný dokument právě upravuje.",
		search_version_hover_help_cm: "Aktuální verze představuje nejnovější verzi položky.",
		search_using: "Hledat položky, které splňují:",
		search_property_and_text_criteria: "Zároveň hodnoty vlastností i textová kritéria",
		search_property_or_text_criteria: "Buď hodnoty vlastností, nebo textová kritéria",
		search_property_and_text: "Zároveň vlastnosti i textová kritéria",
		search_property_or_text: "Buď vlastnosti, nebo textová kritéria",
		search_property_options: "Volby vlastnosti:",
		search_property_option_match_all: "Všechny vlastnosti",
		search_property_option_match_any: "Kterákoli z vlastností",
		search_property_option_match_all_summary: "Shoda se všemi",
		search_property_option_match_any_summary: "Shoda alespoň s jednou",
		search_total_count_type_total: "Celkem",
		search_total_count_type_atleast: "Nejméně",
		search_content_size_filter: "Filtr velikosti obsahu:",
		search_content_size_filter_any: "Libovolná velikost obsahu",

		/* Search work options */
		search_work_filter: "Filtr pracovních položek:",
		search_work_filter_hover_help: "Můžete zúžit výsledky tak, aby obsahovaly pouze položky v určitém sledu prací. Můžete například zúžit výsledky tak, aby obsahovaly pouze pracovní položky, které jsou aktivní.<br /><br />Tato volba se neuplatňuje v případě, že chcete zobrazit všechny verze položek, které byly vráceny při vyhledávání.",
		search_work_filter_enabled: "Filtr pracovních položek je povolen",
		search_work_filter_status: "Stav:",
		search_work_filter_step: "Krok:",
		search_work_filter_owner: "Vlastník:",
		search_work_filter_status_all: "Všechny položky",
		search_work_filter_status_active: "Aktivní položky",
		search_work_filter_status_suspended: "Pozastavené položky",
		search_work_filter_process_all: "Všechny sledy prací",
		search_work_filter_step_all: "Všechny kroky",
		search_work_filter_owner_all: "Všichni uživatelé",
		search_work_filter_step_error: "Název kroku neexistuje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Hledání nelze provést bez dalších informací. Zadejte hodnotu alespoň pro jednu podmínku.",
		search_insufficient_input_box: "Hledání nelze provést bez dalších informací. Zadejte kritéria pro textové vyhledávání nebo vyberte šablonu metadat.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Spuštění hledání nelze konfigurovat, pokud je hledání otevřeno bez dalších informací. Zadejte hodnotu alespoň pro jednu podmínku.",
		search_member_required: "Chcete-li toto hledání sdílet s konkrétními uživateli a skupinami, vyberte alespoň jednoho uživatele nebo skupinu pro sdílení tohoto hledání.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Chcete provést zavření bez uložení změn?",
		search_prompt_close_all_without_save: "Chcete provést zavření všech karet bez uložení změn?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Jeden z následujících typů vyhledávacích kritérií není platný pro toto úložiště: ${0}. Chcete-li spustit vyhledávání ve webovém klientu, je nutné odebrat neplatná kritéria. Pokud vyhledávání uložíte, bude neplatné kritérium odebráno. Pokud vyhledávání nechcete změnit, zavřete jej.",
		search_invalid_repository: "Jedno nebo více úložišť",
		search_invalid_class: "Jedna nebo více tříd",
		search_invalid_folder: "Jedna nebo více složek",
		search_invalid_file_type: "Jeden nebo více typů souboru",
		search_invalid_property: "Jedna nebo více vlastností",
		search_invalid_text_search: "Textová vyhledávací kritéria",
		search_invalid_work: "Kritéria filtru pracovních položek",

		search_operator_pulldown_missing: "Je vyžadován operátor. Vyberte operátor z rozevírací nabídky. Není-li zobrazen žádný operátor, požádejte administrátora systému o kontrolu karty <b>Hledání</b> v nástroji pro administraci a ověření, zda jsou všechny operátory skryty. Pokud se jedná o hledání ve více úložištích, je možné, že v rozevírací nabídce nebude uveden žádný operátor, pokud vlastnosti, které jsou na sebe mapovány, nemají žádný společný operátor.",

		/*SearchBuilder */
		open_search_builder: "Nové hledání",
		document_type: "Třída",
		show_all_properties: "Zobrazit všechny vlastnosti",
		text_search_label: "Najít položky s následujícími výrazy:",
		text_search_place_holder: "Použít kombinaci výrazů a operátorů: * ? nebo \"fráze pro přesnou shodu\"",
		text_search_place_holder_box: "Použít kombinaci výrazů a operátorů: AND, OR, NOT a \"fráze pro přesnou shodu\"",
		text_search_place_holder_cascade_proximity: "Použít kombinaci výrazů a operátorů: * nebo ?",
		text_search_place_holder_common: "Použít kombinaci výrazů a \"frází pro přesnou shodu\"",
		text_search_hover_help_p8: "Hvězdičku (*) nebo otazník (?) lze použít jako zástupný znak. Uvozovky (\"\") lze použít při hledání přesné shody.",
		text_search_hover_help_p8_only_crs: "Hvězdičku (*) nebo otazník (?) lze použít jako zástupný znak. Uvozovky (\"\") lze použít při hledání přesné shody. Když určíte více výrazů, vyhledávání ve více úložištích vrátí položky obsahující některý z uvedených výrazů.",
		text_search_hover_help_cm: "Hvězdičku (*) nebo otazník (?) lze použít jako zástupný znak. Uvozovky (\"\") lze použít při hledání přesné shody. Znak minus (-) použijte před výrazy, které chcete vyloučit, znak plus (+) naopak před výrazy, které chcete zahrnout.",
		text_search_hover_help_box: "Chcete-li vyhledávat všechny výrazy, zadávejte mezi ně operátor AND. Chcete-li vyhledávat alespoň jeden z výrazů, zadávejte mezi ně operátor OR. Uvozovky (\"\") lze použít při hledání přesné shody. Chcete-li termín vyloučit, zadejte před něj operátor NOT.",
		text_search_hover_help_common: "Uvozovky (\"\") lze použít při hledání přesné shody. Když určíte více výrazů, vyhledávání ve více úložištích vrátí položky obsahující všechny uvedené výrazy.",
		text_search_options: "Volby textu:",
		text_search_options_hover_help: "Pokud použijete jiné operátory než zástupné znaky, vyberte volbu Rozšířené operátory.",
		text_search_option_any: "Kterýkoli z výrazů",
		text_search_option_all: "Všechny výrazy",
		text_search_option_proximity: "V blízkosti slov:",
		text_search_option_none: "Rozšířené operátory",
		text_search_option_authoring: "Textové vyhledávání:",
		text_search_option_authoring_hover_help: "Zvolte volbu, která určuje požadovaný způsob zpřístupnění kritérií pro textové vyhledávání uživatelům. Pokud do hledání nechcete zahrnout žádná kritéria pro textové vyhledávání, skryjte příslušnou volbu. V opačném případě můžete povolit úpravy nebo vyžadování kritérií pro textové vyhledávání uživateli nebo uživatelům povolit pouze jejich čtení.",
		text_search_option_hide: "Skrýt kritéria",
		text_search_option_hide_hover_help: "Tuto volbu vyberte v případě, že nechcete do hledání zahrnout žádná kritéria hledání textu nebo nechcete ostatním uživatelům povolit zadávání kritérií hledání textu.",
		text_search_option_in: "Ve značce HTML/XML ${0}",
		text_search_option_paragraph: "Ve stejném odstavci",
		text_search_option_sentence: "Ve stejné větě",
		text_search_option_vql: "Dotaz VQL",
		text_search_option_none_hover_help: "Před výrazy, které chcete vyloučit uveďte znak -.",
		text_search_option_cascade_proximity_hover_help: "Omezí výsledky hledání na výrazy vyskytující se v rozsahu slov, který neobsahuje přesné fráze.",

		box_search_metadata: "Metadata:",
		box_search_select_template: "Vybrat šablonu",
		box_search_no_templates: "K dispozici nejsou žádné šablony.",
		box_text_search_options_search_within: "Rozsah hledání:",
		box_text_search_options_search_within_everything: "Vše",
		box_text_search_options_search_within_file_content: "Obsah dokumentu",
		box_text_search_options_search_within_tags: "Značky",
		box_text_search_options_limit_to: "Pouze hledat:",

		add_property: "Přidat vlastnost",
		edit_template: "Upravit hledání",
		save_search: "Uložit hledání",
		search_template_name: "Název:",
		search_template_desc: "Popis:",
		auto_run: "Spustit hledání při otevření",
		show_in_tree: "Zobrazit hledání ve struktuře složek",
		show_in_tree_hover_help: "Je-li hledání uloženo ve složce, zobrazí se standardně pouze v seznamu obsahu. Vyberete-li tuto volbu, hledání se zobrazí také ve stromu složek v zobrazení pro procházení. Hledání se nicméně zobrazí ve stromu složek pouze v případě, že jste je uložili do složky.",
		share_search_with: "Sdílet hledání s uživatelem:",
		remove_member: "Odebrat uživatele ${0}",
		ok_button_label: "OK",
		save_template: "Uložit",
		save_template_title: "Potřebujete-li často hledat určité položky, můžete uložit vyhledávací kritéria.",
		remove_criterion: "Odebrat",
		apply_button_label: "Použít",
		empty_search_results_pane: "Spusťte hledání a zobrazte výsledky.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Celé úložiště",

		repository_already_selected: "Úložiště ${0} nelze přidat do vyhledávání ve více úložištích, jelikož je již zahrnuto ve vyhledávání. <br/> Úložiště lze zahrnout do vyhledávání ve více úložištích pouze jednou. <br/>Vyberte jiné úložiště, které má být zahrnuto do vyhledávání ve více úložištích.",

		repository_limit_reached: "Úložiště ${0} nelze přidat do vyhledávání ve více úložištích. Do hledání lze přidat maximálně ${1} úložišť.",

		nomore_criteria_toappend: "Všechny mapované vlastnosti jsou již zahrnuty ve vyhledávacích kritériích. K vyhledávacím kritériím nebyly přidány žádné vlastnosti.",
		nomore_criteria_toappend_regular: "Všechny vlastnosti jsou již zahrnuty ve vyhledávacích kritériích. K vyhledávacím kritériím nebyly přidány žádné vlastnosti.",

		/* OD Save Search dialog */
		reload_label: "Znovu načíst",
		od_save_search_help_text: "Zadejte název pro hledání nebo vyberte existující hledání, které chcete nahradit.",
		public_access_label: "Povolit ostatním používat toto hledání",
		od_delete_search_help_text: "Vyberte jedno nebo více hledání, která chcete odstranit.",
		delete_save_searches: "Odstranit uložená hledání",

		/* Unified Search */
		unified_search_enable_text_search: "Zahrnout kritéria pro textové vyhledávání",
		unified_search_text_search_enabled: "Se zahrnutím textového vyhledávání",
		unified_search_mapping: "Mapování",
		unified_search_new_mapping: "Nové mapování",
		unified_search_mapping_name: "Název mapování",
		unified_search_mapping_dialog_instructions: "Vyberte vlastnosti, které chcete mapovat. Některé vlastnosti lze mapovat na vlastnosti s jiným datovým typem. Můžete například mapovat řetězcovou vlastnost na celočíselnou vlastnost. Při mapování vlastnosti na jinou vlastnost jsou tyto vlastnosti při vyhledávání ve více úložištích zpracovávány jako jedna vlastnost.",
		unified_search_filter_available_properties: "Filtrovat dostupné vlastnosti",
		unified_search_available_properties: "Dostupné vlastnosti",
		unified_search_mapped_properties: "Mapované vlastnosti",
		unified_search_single_values: "jediné hodnoty",
		unified_search_multiple_values: "vícenásobné hodnoty",
		unified_search_add_mapping: "Přidat mapování",
		unified_search_warn_remove_repository: "Vybrané úložiště je použito ve vyhledávacích kritériích.\nPokud toto úložiště odeberete, budou všechna mapování a vyhledávací kritéria zahrnující toto úložiště odstraněna.\n\nOpravdu chcete toto úložiště odebrat?",
		unified_search_warn_update_repository_mappings: "Změna výběru vlastností pro toto úložiště má vliv na vyhledávací kritéria.\n\nVyhledávací kritéria obsahují jedno či více mapování, jež obsahují jednu či více vlastností, které odebíráte. Veškerá mapování obsahující vlastnosti, které odebíráte, musí být odstraněna. Veškerá vyhledávací kritéria zahrnující tato mapování musí být odstraněna, aby bylo možné spustit vyhledávání.\n\nChcete aktualizovat volby úložiště a odstranit mapování a vyhledávací kritéria?",
		unified_search_warn_update_repository_mappings_reset: "Zahrnutí kritérií textového vyhledávání pro toto úložiště má vliv na kritéria vyhledávání ve více úložištích.\n\nVeškerá kritéria prohledávání vlastností obsahující mapování s vlastnostmi pro tuto úložiště musí být vymazána, aby bylo možné vyhledávání spustit.\n\nChcete aktualizovat volby úložiště a vymazat vyhledávací kritéria?",
		unified_search_warn_update_repository_text_criteria: "Odebrání kritérií textového vyhledávání pro toto úložiště má vliv na kritéria vyhledávání ve více úložištích.\n\nKritéria textového vyhledávání musí být odstraněna z kritérií vyhledávání ve více úložištích, aby bylo možné spustit vyhledávání.\n\nChcete aktualizovat volbu úložiště a odstranit kritéria textového vyhledávání?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Odebrání kritérií textového vyhledávání a změna výběru vlastností pro toto úložiště má vliv na kritéria vyhledávání ve více úložištích.\n\nKritéria textového vyhledávání musí být odstraněna z kritérií vyhledávání ve více úložištích, aby bylo možné spustit vyhledávání. Kromě toho vyhledávací kritéria obsahují jedno či více mapování, jež obsahují jednu či více vlastností, které odebíráte. Veškerá mapování obsahující vlastnosti, které odebíráte, musí být odstraněna. Veškerá kritéria prohledávání vlastností zahrnující tato mapování musí být odstraněna, aby bylo možné spustit vyhledávání.\n\nChcete aktualizovat volby úložiště a odstranit kritéria textového vyhledávání, mapování a kritéria prohledávání vlastností?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Vyloučení kritérií textového vyhledávání pro toto úložiště má vliv na kritéria vyhledávání ve více úložištích.\n\nVeškerá kritéria prohledávání vlastností obsahující mapování s vlastnostmi pro tuto úložiště musí být vymazána, aby bylo možné vyhledávání spustit. Kritéria pro textové vyhledávání mohou být odstraněna z kritérií vyhledávání ve více úložištích, aby bylo možné vyhledávání spustit.\n\nChcete aktualizovat volby úložiště a vymazat vyhledávací kritéria?",
		unified_search_warn_remove_mapping: "Odebrání tohoto mapování má vliv na vyhledávací kritéria.\n\nVyhledávací kritéria používající mapování musí být odstraněna, aby bylo možné spustit vyhledávání.\n\nChcete aktualizovat mapování a odstranit vyhledávací kritéria?",
		unified_search_warn_update_mapping: "Změny tohoto mapování mají vliv na vyhledávací kritéria.\n\nVyhledávací kritéria používající mapování musí být vymazána, aby bylo zajištěno, že vyhledávání neobsahuje neplatné operátory ani neplatné hodnoty.\n\nChcete aktualizovat mapování a vymazat vyhledávací kritéria?",
		unified_search_warn_update_mapping_not_searchable: "Změny tohoto mapování mají vliv na vyhledávací kritéria.\n\nJsou-li mapované vlastnosti určeny pouze pro zobrazení, nemůžete mapování používat ve vyhledávacích kritériích. Vyhledávací kritéria používající mapování musí být odstraněna, aby bylo možné spustit vyhledávání.\n\nChcete aktualizovat mapování a odstranit vyhledávací kritéria?",
		unified_search_warn_update_mapping_box_searchable: "Změny tohoto mapování mají vliv na vyhledávací kritéria.\n\nVyhledávací kritéria již obsahují toto mapování vícekrát než jednou, a pokud přidáte vlastnost ${0} z úložiště ${1}, budou vyhledávací kritéria obsahovat příliš mnoho výskytů vlastnosti ${0}. Vyhledávací kritéria používající mapování musí být odstraněna, aby bylo možné spustit vyhledávání.\n\nChcete aktualizovat mapování a odstranit vyhledávací kritéria?",
		unified_search_details: "Podrobnosti vyhledávání ve více úložištích",
		unified_search_fixed_value_property: "Vlastnost s pevnou hodnotou",
		unified_search_required_property: "Povinná vlastnost",
		unified_search_display_only_property: "Vlastnost pouze pro zobrazení",
		unified_search_missing_required_properities: "Vyhledávání nelze uložit nebo spustit.<br/>Následující vlastnosti jsou povinné: ${0} Tyto vlastnosti je třeba zahrnout do mapování a přidat vlastnosti s hodnotami do vyhledávacích kritérií.",
		unified_search_property_repostory: "${0} (Úložiště: ${1})",
		unified_search_builder_no_mappings: "Hledání nelze spustit.<br/>Je třeba, abyste vytvořili mapování vlastností a zahrnuli je do části <b>Zobrazení výsledků</b>, aby bylo možné zobrazit výsledky vašeho hledání.",
		unified_search_builder_insufficient_criteria_to_run: "Hledání nelze spustit.<br/>Vyhledávací kritéria nezahrnují kritéria pro textové vyhledávání či hodnoty vlastností pro následující úložiště: ${0} Pro každé úložiště zahrnuté do hledání je třeba buď zadat kritéria pro textové vyhledávání, nebo vytvořit mapování vlastností, zahrnout je do kritérií vlastností a určit hodnotu vlastnosti.",
		unified_search_builder_insufficient_criteria_to_save: "Hledání nelze uložit.<br/>Hledání nezahrnuje vyhledávací kritéria pro následující úložiště: ${0} Pro každé úložiště, které je zahrnuto do hledání, je třeba provést jednu z následujících operací:<ol><li>Vytvořit mapování vlastností a zahrnout je do kritérií vlastností.</li><li>Upravit úložiště tak, aby zahrnovalo kritéria pro textové vyhledávání, vytvořit mapování vlastností a zahrnout je do části <b>Zobrazení výsledků</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Hledání nelze spustit.<br/>Pro každé úložiště, které je obsaženo v hledání, je třeba určit alespoň jednu hodnotu vlastnosti. Můžete například určit hodnoty pro následující vlastnosti: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Hledání nelze spustit.<br/>Jsou vyžadována kritéria pro textové vyhledávání.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Hledání nelze spustit.<br/>Pro každé úložiště, které je obsaženo v hledání, je třeba určit alespoň jednu hodnotu vlastnosti nebo zadat kritéria pro textové vyhledávání. Můžete například určit hodnoty pro následující vlastnosti: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Hledání nelze spustit.<br/>Jsou vyžadována kritéria pro textové vyhledávání. Pro každé úložiště, které je obsaženo v hledání, je třeba určit alespoň jednu hodnotu vlastnosti nebo zadat kritéria pro textové vyhledávání. Můžete například určit hodnoty pro následující vlastnosti: ${0}",
		unified_search_invalid_criteria: "Vyhledávání obsahuje neplatná kritéria, která brání spuštění hledání.<br/>Neplatná kritéria byla odebrána. Před spuštěním vyhledávání je však třeba uložit změny vyhledávání. Nechcete-li změny uložit, zavřete vyhledávání.<br/><br/>Následující položky byly odebrány nebo upraveny: ${0}.",
		unified_search_invalid_fixed_values: "Vyhledávání nelze uložit nebo spustit.<br/>Následující kritéria vyhledávání mají nastaveny pevné hodnoty, které jsou neplatné:${0}Odstraňte problém provedením některé z následujících akcí:<ul><li>Odeberte kritéria vyhledávání, která obsahují neplatné hodnoty.</li><li>Úpravou mapování obsahujících vlastnost produktu IBM Content Manager OnDemand s pevnou hodnotu odeberte příslušnou vlastnost.</li><li>Úpravou mapování obsahujících vlastnost produktu IBM Content Manager OnDemand s pevnou hodnotu dosáhněte kompatibility všech vlastností. Další informace o vlastnostech, které mohou být mapovány, lze získat prostřednictvím odkazu Další informace v úvodním textu na začátku obsahu okna mapování vlastností.</li></ul>",
		unified_search_cannot_add_properties: "Do tohoto vyhledávání nelze přidávat hodnoty.<br/>Všechny vaše mapované vlastnosti, které jsou k dispozici, jsou již ve vyhledávacích kritériích obsaženy a každou vlastnost lze do vyhledávání přidat pouze jednou.",
		unified_search_mapping_not_viewable: "Vlastnosti šablony produktu Box nelze zobrazit ve výsledcích hledání. Chcete-li toto mapování přidat jako sloupec, je třeba mapovat alespoň jednu vlastnost, která není vlastností šablony produktu Box. Můžete například vybrat vlastnost z jiného úložiště.",

		unified_search_returned_more: "Nejméně jedno úložiště překročilo maximální povolený počet výsledků.",
		unified_search_partial_failure: "Došlo k chybě nejméně pro jedno úložiště.",
		unified_search_partial_failure_and_returned_more: "Došlo k chybě nejméně pro jedno úložiště a nejméně jedno úložiště překročilo maximální povolený počet výsledků.",
		unified_search_see_analysis: "Prohlédněte si výsledky analýzy.",
		unified_search_analysis_intro_returned_more: "Pro každé úložiště, které překročilo maximální povolený počet výsledků, se pokuste zpřesnit vyhledávací kritéria, aby byl počet vrácených výsledků menší. Můžete také spustit vyhledávání pro jedno úložiště, které by vrátilo více výsledků, než je maximální počet povolený pro vyhledávání ve více úložištích.",
		unified_search_analysis_intro_partial_failure: "Přezkoumejte informace o chybě, které byly vráceny z úložišť. Je-li to vhodné, odstraňte chyby a spusťte hledání ve více úložištích znovu.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Pro každé úložiště, u kterého došlo k chybě, se pokuste odstranit problém a spustit vyhledávání znovu.<br/><br/>Pro každé úložiště, které překročilo maximální povolený počet výsledků, se pokuste zpřesnit vyhledávací kritéria, aby byl počet vrácených výsledků menší. Můžete také spustit vyhledávání pro jedno úložiště, které by vrátilo více výsledků, než je maximální počet povolený pro vyhledávání ve více úložištích.",
		unified_search_results_found: "Nalezené výsledky",
		unified_search_maximum_allowed: "Povolené maximum",
		unified_search_maximum_exceeded: "Maximum bylo překročeno.",

		unified_search_mapping_rule_box: "Tuto vlastnost nelze přidat do mapování.<p>Vlastnost ${0} z úložiště ${1} je již obsažena v jiném mapování a vlastnosti s možností hledání mohou být obsaženy pouze v jednom mapování pro každé hledání.<br/>Vyberte jinou vlastnost pro přidání do mapování.</p>",
		unified_search_mapping_rule_repository: "Tuto vlastnost nelze přidat do mapování.<br/>Mapování již obsahuje vlastnost z úložiště ${0}. Mapování může zahrnovat pouze jednu vlastnost z úložiště.<br/>Vyberte jiné úložiště, ze kterého chcete zahrnout vlastnost, nebo pro vybranou vlastnost vytvořte nové mapování.",
		unified_search_mapping_rule_data_type: "Tuto vlastnost nelze přidat do mapování.<br/>Vlastnost ${0} nelze mapovat na vlastnost ${1}. Vyberte pro mapování jinou vlastnost nebo pro vybranou vlastnost vytvořte nové mapování.<br/>Další informace o vlastnostech, které mohou být mapovány, lze získat prostřednictvím odkazu Další informace v úvodním textu na začátku obsahu tohoto okna.",
		unified_search_mapping_rule_cardinality: "Tuto vlastnost nelze přidat do mapování.<br/>Všechny vlastnosti v mapování musí podporovat buď jediné hodnoty, nebo vícenásobné hodnoty. Vybraná vlastnost podporuje ${0} a vlastnosti v mapování podporují ${1}.<br/>Vyberte jinou vlastnost pro přidání do mapování nebo pro vybranou vlastnost vytvořte nové mapování.",
		unified_search_mapping_rule_fixed_value: "Tuto vlastnost nelze přidat do mapování.<br/>Mapování již obsahuje vlastnost s pevnou hodnotou. Mapování může zahrnovat pouze jednu vlastnost s pevnou hodnotou.<br/>Vyberte jinou vlastnost pro přidání do mapování nebo pro vybranou vlastnost vytvořte nové mapování.",
		unified_search_mapping_rule_child_component: "Tuto vlastnost nelze přidat do mapování.<br/>Vlastnost s podřízenou komponentou nelze mapovat na jiné vlastnosti. Pokud chcete mít možnost vyhledávat s touto vlastností, vytvořte pro vybranou vlastnost nové mapování.",
		unified_search_mapping_rule_operator_intersection: "Tuto vlastnost nelze přidat do mapování.<br/>Všechny vlastnosti v mapování musí mít společný jeden nebo více operátorů. Vlastnost ${0} však nemá žádný společný operátor s ostatními vlastnostmi v mapování.<br/>Pokud je to vhodné, vyberte jinou vlastnost. Pokud potřebujete zahrnout vybranou vlastnost, ve spolupráci s administrátorem systému upravte operátory přidružené k této vlastnosti.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Rozšířená nastavení",
		advanced_search_options_intro: "Můžete nastavit volby pro rozšířená kritéria.",
		advanced_search_options_editable: "S možností úprav",
		advanced_search_options_readonly: "Pouze pro čtení",
		advanced_search_options_required: "Povinné",
		advanced_search_options_hidden: "Skryté",
		advanced_search_options_property_editable:"Vlastnost:",
		advanced_search_options_operators:"Operátory:",
		advanced_search_options_use_all:"Použít vše",
		advanced_search_options_use_selected:"Použít vybrané",
		advanced_search_options_operators_filtered: "Operátory - filtrováno",
		// Data types in lowercase
		data_type_boolean: "boolean",
		data_type_date: "date",
		data_type_time: "time",
		data_type_timestamp: "časové razítko",
		data_type_decimal: "desetinná hodnota",
		data_type_double: "číslo s pohyblivou řádovou čárkou",
		data_type_short: "celočíselná hodnota",
		data_type_integer: "celočíselná hodnota",
		data_type_long: "celočíselná hodnota",
		data_type_string: "textový řetězec",
		data_type_string_alpha: "abecední řetězec",
		data_type_string_alphanum: "alfanumerický řetězec",
		data_type_string_ext: "rozšířený alfanumerický řetězec",
		data_type_string_num: "numerický řetězec",
		data_type_binary: "binární",
		data_type_object: "Objekt",
		data_type_guid: "identifikátor GUID",
		data_type_user: "uživatelé",
		data_type_child_component: "podřízená komponenta",

		/* Print Dialog */
		print_title: "Tisk",
		print_message: "Tisk: ${0}",
		print_print_button: "Tisk",
		print_clean_margins_button: "Nastavit vše na hodnotu 0",
		print_type: "Typ tiskárny:",
		print_printer_server_options: "Volby tisku na serveru",
		print_printer_properties: "Vlastnosti tiskárny",
		print_printer_fax_properties: "Vlastnosti faxu",
		print_printer_name: "Název tiskárny:",
		print_fax_recipient: "Příjemce",
		print_fax_sender: "Odesílatel",
		print_copies: "Počet kopií:",
		print_local_orientation: "Orientace",
		print_local_orientation_landscape: "Na šířku",
		print_local_orientation_portrait: "Na výšku",
		print_local_margins: "Okraje",
		print_local_margins_top: "Začátek",
		print_local_margins_bottom: "Dolní konec",
		print_local_margins_left: "Vlevo",
		print_local_margins_right: "Vpravo",
		print_printer_server: "Na serveru",
		print_printer_local: "Lokální",
		print_property_class: "Třída:",
		print_property_routing: "Směrování:",
		print_property_pagedef: "Definice stránky:",
		print_property_node: "Uzel:",
		print_property_writer: "Modul výpisu:",
		print_property_formdef: "Definice formuláře:",
		print_property_printerid: "Cíl:",
		print_property_forms: "Formuláře:",
		print_property_faxnotes: "Poznámky:",
		print_property_faxcompany: "Společnost:",
		print_property_faxnumber: "Číslo faxu:",
		print_property_faxname: "Název:",
		print_property_faxsendertelnumber: "Telefonní číslo:",
		print_property_faxcoverpage: "Titulní stránka:",
		print_property_faxsubject: "Předmět:",
		print_saveoptions: "Uložit volby tisku",
		print_property_bannerpage: "Použít stránku nápisu",
		print_print_with_info_fields: "Tisk s informačními poli",
		print_field_from: "Od",
		print_field_to: "Do",
		print_invalid_value_class: "Platné znaky jsou A-Z a 0-9.",
		print_invalid_value_pagedef: "Platné znaky jsou abecední či číselné znaky, nebo znaky @, # a $",
		print_invalid_value_writer: "Platné znaky jsou abecední či číselné znaky, nebo znaky @, # a $",
		print_invalid_value_formdef: "Platné znaky jsou abecední či číselné znaky, nebo znaky @, # a $",
		print_invalid_value_forms: "Platné znaky jsou abecední či číselné znaky, nebo znaky @, # a $",
		print_invalid_value_margin: "Platná čísla jsou od ${0} do ${1}.",
		print_status_message: "${0} dokumentů bylo odesláno na tiskárnu ${1}.",

		print_applet_init_error: "Aplet pro tisk nelze spustit.",
		print_applet_init_error_explanation: "K tomuto problému může dojít z následujících příčin: <br/><br/><ul><li>Ve vaší pracovní stanici není nainstalováno běhové prostředí Java (JRE).</li><li>Modul plug-in prostředí Java není povolen ve webovém prohlížeči.</li><li>Verze prostředí JRE v pracovní stanici není kompatibilní s verzí produktu IBM Content Navigator.</li><li>Při čekání na spuštění apletu pro tisk vypršel časový limit prohlížeče.</li></ul>",
		print_applet_init_error_userResponse: "Problém s prostředím JRE lze odstranit provedením následujících kroků:<br/><br/><ol><li>Ověřte, že je v pracovní stanici instalováno prostředí JRE.</li><li>Ověřte, že je ve webovém prohlížeči povolen modul plug-in jazyka Java.</li><li>Ověřte kompatibilitu verze prostředí JRE v pracovní stanici s verzí produktu IBM Content Navigator a zkuste operaci zopakovat. Seznam podporovaných verzí je uveden na serveru softwarové podpory společnosti IBM v <i>dokumentu popisujícím hardwarové a softwarové předpoklady pro produkt IBM Content Navigator</i>.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Titulní stránka",
		daeja_print_selected_documents_title: "Vybrané dokumenty",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Shoda se všemi vyhledávacími kritérii",
		match_any_criteria: "Shoda s libovolným vyhledávacím kritériem",
		include_subfolders_summary: "${0} (včetně podsložek)",
		browse_button: "Procházet&hellip;",
		search_for: "Vyhledat:",
		object_type_documents: "Dokumenty",
		object_type_folders: "Složky",
		object_type_documents_folders: "Dokumenty a složky",
		object_type_web_links: "Webové odkazy",
		object_type_documents_folders_web_links: "Dokumenty, složky a webové odkazy",

		/* SelectSearchFolderDialog */
		search_in: "Obor hledání:",
		include_subfolders: "Zahrnout podsložky",

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
		locked_item_icon_title: "Uzamknuto uživatelem ${0}",
		checked_out_icon_title: "Zapůjčeno uživatelem ${0}",
		major_minor_version_icon_title: "Hlavní verze s vedlejšími verzemi",
		suspended_icon_title: "Sled prací je pozastavený",
		on_hold_icon_title: "Pozastaveno",
		has_notes_icon_title: "Obsahuje poznámky",
		record_icon_title: "Deklarováno jako záznam",
		compound_document_icon_title: "Složený dokument",
		validateTemplate_icon_title: "Šablona týmového prostoru vyžaduje ověření",
		offlineTemplate_icon_title: "Šablona týmového prostoru je offline",
		offlineTeamspace_icon_title: "Týmový prostor je offline",
		pending_delete_icon_title: "Odstranění týmového prostoru je nevyřešené",
		delete_error_icon_title: "Týmový prostor se nepodařilo odstranit",
		defaultTemplate_icon_title: "Výchozí šablona týmového prostoru",
		teamspace_icon_title: "Týmový prostor",
		teamspace_template_icon_title: "Šablona týmového prostoru",
		has_bookmark_icon_title: "Se záložkou",
		read_only_icon_title: "Pouze pro čtení",
		no_results_were_found: "Nebyly nalezeny žádné výsledky.",
		folder_is_empty: "Složka je prázdná.",
		no_checked_out_items: "Nemáte žádné zapůjčené položky.",
		inbasket_is_empty: "Složka s příchozími zprávami je prázdná.",
		worklist_is_empty: "Seznam pracovních položek je prázdný.",
		tracker_milestone_completed: "Dokončeno",
		stepprocessor_attachments_title: "Obsah",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Zamknout položky",
		unlock_items: "Odemknout položky",
		checkin_item: "Vrátit položku",

		/* Help */
		learn_more: "Další informace",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Otevřít týmový prostor",
		repository_tab_createWorkspace: "Nový týmový prostor",
		repository_tab_createWorkspaceTemplate: "Nová šablona týmového prostoru",
		repository_tab_DefaultTemplate: "Výchozí",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Tato úloha kopíruje dokumenty.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Pro vybranou šablonu týmového prostoru nemáte oprávnění k úpravám.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Skutečně chcete odstranit týmový prostor ${0}? <br><br>V úložišti zůstanou pouze dokumenty uložené v jiných složkách. Všechny dokumenty, které jsou uloženy pouze v týmovém prostoru, budou odstraněny.",
		teamspaceDecommissionLabel: "Odstranit:",
		teamspaceDecommissionDescription: "V případě odstranění týmového prostoru bude příslušný týmový prostor odebrán ze serveru: Určete, jaký postup má být zvolen pro artefakty týmového prostoru.",
		teamspaceDecommissionOptions: "Volby odstranění týmového prostoru",
		teamspaceDecommissionDeleteAll: "Odstranit všechny artefakty týmového prostoru",
		teamspaceDecommissionReFileAll: "Znovu zařadit všechny artefakty týmového prostoru",
		teamspaceDecommissionReFileDestination: "Přesunout do složky:",
		teamspaceDecommissionReFileIn: "Znovu zařadit do",
		teamspaceDecommissionTaskName: "Úloha odstranění týmového prostoru",
		teamspaceDecommissionTaskDescription: "Tato úloha odstraní týmový prostor z úložiště.",
		teamspaceDecommissionDeletionStarted: "Týmový prostor byl naplánován k odstranění",
		teamspaceDecommissionDeletionConnectionFailed: "Úlohu odstranění týmového prostoru nebylo možné spustit, protože se nepodařilo vytvořit připojení k úložišti. Ověřte správnost pověření administrátora úložiště.",

		teamspace_edit_properties_notsupported: "Vlastnosti týmových prostorů lze upravovat pouze ze zobrazení Týmové prostory.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Týmový prostor se nachází v režimu offline a otevřít jej mohou pouze jeho vlastníci.",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Složka:",
		workspace_validation_ets: "Následující šablony položky nejsou k dispozici v tomto úložišti a byly odebrány ze seznamu vybraných šablon položek:",
		workspace_validation_classes: "Následující třídy nejsou k dispozici v tomto úložišti a byly odebrány ze seznamu vybraných tříd:",
		workspace_validation_searches: "Následující hledání nejsou k dispozici v tomto úložišti a byly odebrány ze seznamu vybraných hledání:",
		workspace_validation_docs_folders: "Následující dokumenty a složky nejsou k dispozici v tomto úložišti a byly odebrány ze seznamu zahrnutých položek:",
		workspace_change_template_confirmation_question: "Pokud vyberete jinou šablonu, budou všechny změny ztraceny. Chcete pokračovat?\n",
		workspace_delete_item_confirmation_question: "Chcete odebrat položku ${0}?\n",
		workspace_delete_role_confirmation_question: "Chcete odebrat roli ${0}?\n",
		workspace_delete_confirmation_question: "Pokud odstraníte týmový prostor, je odstraněn pouze kontejner týmového prostoru. Složky a dokumenty v týmovém prostoru zůstávají v úložišti a najdete je pomocí hledání. Chcete-li odstranit obsah týmovém prostoru, nejprve odstraňte položky v týmovém prostoru a poté odstraňte týmový prostor.<br><br>Chcete odstranit týmový prostor ${0}?",
		workspacebuilder_instance_template_name_header: "Název šablony týmového prostoru",
		workspacebuilder_instance_template_description_header: "Popis",

		workspacebuilder_template_tooltip_name: "Název šablony nemůže obsahovat následující znaky: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Název týmového prostoru nemůže obsahovat následující znaky: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Zadejte popis, který uživatelům usnadní výběr ze seznamu šablon. Můžete uvést například informace o vhodných uživatelích nebo o použití dané šablony.",
		workspacebuilder_instance_tooltip_description: "Zadejte popis, který uživatelům umožní týmový prostor odlišit od ostatních týmových prostorů.",

		workspacebuilder_template_edit_properties_pane: "Upravit šablonu týmového prostoru",
		workspacebuilder_instance_properties_pane: "Definovat týmový prostor",
		workspacebuilder_template_properties_pane: "Definovat šablonu týmového prostoru",

		workspacebuilder_instance_security_pane: "Nastavit zabezpečení týmového prostoru",
		workspacebuilder_template_security_pane: "Nastavit zabezpečení šablony",

		workspacebuilder_layout_pane: "Vybrat rozvržení",
		workspacebuilder_search_templates_pane: "Vybrat hledání",
		workspacebuilder_document_folders_pane: "Zahrnout složky a dokumenty",
		workspacebuilder_doctypes_entryTemplates_pane: "Vybrat třídy nebo šablony položky",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Vybrat třídy",
		workspacebuilder_security: "Zabezpečení týmového prostoru",

		workspacebuilder_roles_pane: "Vybrat role",
		workspacebuilder_security: "Zabezpečení",

		workspacebuilder_properties_templates: "Dostupné šablony:",
		workspacebuilder_available_templates: "Dostupná hledání:",
		workspacebuilder_selected_templates: "Vybraná hledání:",
		workspacebuilder_templates_name: "Název hledání",

		workspacebuilder_available_entryTemplates: "Dostupné šablony položky:",
		workspacebuilder_selected_entryTemplates: "Vybrané šablony položky:",

		workspacebuilder_item_classes: "Dostupné třídy:",
		workspacebuilder_item_classes_selected: "Vybrané třídy:",
		workspacebuilder_properties_select_template: "Vyberte šablonu, kterou chcete použít pro tento týmový prostor.",
		workspacebuilder_template_properties: "Definovat šablonu týmového prostoru",
		workspacebuilder_instance_properties: "Definovat týmový prostor",
		workspacebuilder_template_introText: "Zadejte společné komponenty, které mají být zahrnuty v každém týmovém prostoru vytvořeném z této šablony pomocí výběrů v rámci navigace. Po dokončení šablonu klepnutím na tlačítko <b>Dokončit</b> zpřístupněte ostatním uživatelům, kteří ji budou moci použít k vytváření nových týmových prostorů.",
		workspacebuilder_instance_introText: "Týmy používají týmové prostory ke sdílení konkrétních sad dokumentů a k práci s nimi. Zadejte vhodný název a popis týmového prostoru, který uživatelům usnadní jeho odlišení od ostatních týmových prostorů. Týmový prostor můžete přizpůsobit přidáním dalších hledání, tříd nebo šablon položek, dokumentů a složek.",

		workspacebuilder_template_search_template_introText: "Vyberte výchozí hledání, která chcete zahrnout do každého týmového prostoru vytvořeného z této šablony. Pokud nebudou vybrána žádná hledání, zobrazí se uživateli týmového prostoru všechna hledání, k nimž má přístup. S příslušnými oprávněními mohou uživatelé sdílet a přidávat hledání v týmovém prostoru.",
		workspacebuilder_instance_search_template_introText: "Zahrňte hledání, která uživatelům týmového prostoru usnadní provádění úloh. Nejsou-li zahrnuta žádná hledání, zobrazí se uživatelům týmového prostoru všechna vyhledávání, pro která mají oprávnění. Uživatelé s potřebnými oprávněními mohou rovněž přidávat a sdílet hledání v týmovém prostoru.",

		workspacebuilder_template_roles_introText: "Uživatelé týmového prostoru jsou přiřazeni k rolím. Role určují úlohy, které uživatelé mohou provádět. Klepnutím na ikonu vedle role zobrazíte povolené úlohy. Vyberte role, které jsou pro týmový prostor vhodné.",
		workspacebuilder_template_roles_modify_introText: "Můžete upravit oprávnění přidružená k jednotlivým rolím v tomto týmovém prostoru. V případě změn oprávnění byste o tom měli uvědomit členy týmového prostoru.",

		workspacebuilder_template_roles_header_name: "Název role",

		workspacebuilder_template_folders_introText: "Vyberte výchozí dokumenty a složky, které mají být zahrnuty v každém týmovém prostoru vytvořeném na základě dané šablony. Dokumenty můžete přidávat jako odkazy nebo jako kopie. Odkazy jsou směrovány na dokumenty, které nemají existovat ve více kopiích, jako jsou například zásady nebo procedury. Vytvořte kopie dokumentů, které uživatelé budou upravovat, například v případě šablon nebo formulářů.",
		workspacebuilder_instance_folders_introText: "Vyberte výchozí dokumenty a složky, které mají být zahrnuty v daném týmovém prostoru. Dokumenty můžete přidávat jako odkazy nebo jako kopie. Odkazy jsou směrovány na dokumenty, které nemají existovat ve více kopiích, jako jsou například zásady nebo procedury. Vytvořte kopie dokumentů, které uživatelé budou upravovat, například v případě šablon nebo formulářů.",

		workspacebuilder_template_roles_introText: "Zadejte role, které budou zahrnuty do každého týmového prostoru vytvořeného na základě dané šablony. Dále můžete vytvořit nové role, které lze použít při vytváření dalších šablon týmového prostoru.",
		workspacebuilder_instance_users_introText: "V týmovém prostoru je každému uživateli přiřazena jedna nebo více rolí, které určují úlohy, jež může tento uživatel provádět. Přidejte do týmového prostoru uživatele a přiřaďte jim role.",

		workspacebuilder_instance_navigation_pane_title: "Tvůrce týmového prostoru",
		workspacebuilder_template_navigation_pane_title: "Tvůrce šablony týmového prostoru",

		workspacebuilder_roles_roles_nopermissions: "Pro roli {0} nejsou vybrána žádná oprávnění.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Vybrané role:",
		workspacebuilder_roles_available_roles: "Dostupné role:",
		workspacebuilder_roles_privilege_header: "Oprávnění",
		workspacebuilder_roles_select_role: "Vybrat roli",
		workspacebuilder_roles_select_permission: "Vybrat oprávnění",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Role s názvem {0} již existuje. Pro roli je nutné zadat jedinečný název. ",
		workspacebuilder_roles_edit_dialog_role_name: "Název role:",
		workspacebuilder_roles_edit_dialog_role_description: "Popis role:",
		workspacebuilder_roles_edit_dialog_title_new: "Nová role",
		workspacebuilder_roles_edit_dialog_title_edit: "Upravit roli",

		workspacebuilder_roles_privileges_header: "Oprávnění pro roli {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Oprávnění pro dokument:",
		workspacebuilder_roles_priv_group_folder: "Oprávnění pro složku:",
		workspacebuilder_roles_priv_group_teamspace: "Oprávnění pro týmový prostor:",
		workspacebuilder_roles_priv_group_item: "Oprávnění pro dokument a složku:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Spravovat oprávnění",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Uživatelé s tímto oprávněním mohou spravovat přístup k dokumentům a složkám v týmovém prostoru. Toto oprávnění zahrnuje možnost povolení odstraňování, úprav vlastností, vytváření podsložek apod. pro jiné uživatele.",

		workspacebuilder_roles_priv_deleteItems: "Odstranit",
		workspacebuilder_roles_plbl_deleteItems: "Uživatelé s tímto oprávněním mohou odstraňovat dokumenty a složky v týmovém prostoru.",

		workspacebuilder_roles_priv_createItems: "Vytvořit",
		workspacebuilder_roles_plbl_createItems: "Uživatelé s tímto oprávněním mohou vytvářet dokumenty a složky v týmovém prostoru.",

		workspacebuilder_roles_priv_viewItemProperties: "Zobrazit vlastnosti",
		workspacebuilder_roles_plbl_viewItemProperties: "Uživatelé s tímto oprávněním mohou zobrazovat vlastnosti dokumentů a složek v týmovém prostoru, což zahrnuje i systémové vlastnosti.",

		workspacebuilder_roles_priv_modifyItemProperties: "Upravit vlastnosti",
		workspacebuilder_roles_plbl_modifyItemProperties: "Uživatelé s tímto oprávněním mohou upravovat vlastnosti dokumentů a složek v týmovém prostoru.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Spravovat oprávnění pro složku",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Uživatelé s tímto oprávněním mohou spravovat přístup ke složkám v týmovém prostoru. Toto oprávnění zahrnuje povolení odstraňování složek, úpravy vlastností složek, vytváření podsložek atd.",

		workspacebuilder_roles_priv_deleteFolders: "Odstranit složky",
		workspacebuilder_roles_plbl_deleteFolders: "Uživatelé s tímto oprávněním mohou odstraňovat složky v týmovém prostoru.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Upravit vlastnosti složky",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Uživatelé s tímto oprávněním mohou upravovat vlastnosti složek v týmovém prostoru.",

		workspacebuilder_roles_priv_createSubfolders: "Vytvořit podsložky",
		workspacebuilder_roles_plbl_createSubfolders: "Uživatelé s tímto oprávněním mohou vytvářet složky v týmovém prostoru.",

		workspacebuilder_roles_priv_fileInFolders: "Přidat do složek",
		workspacebuilder_roles_plbl_fileInFolders: "Uživatelé s tímto oprávněním mohou přidat odkaz ze složek v týmovém prostoru na dokumenty.",

		workspacebuilder_roles_priv_viewFolderProperties: "Zobrazit vlastnosti složky",
		workspacebuilder_roles_plbl_viewFolderProperties: "Uživatelé s tímto oprávněním mohou zobrazit vlastnosti složek v týmovém prostoru, což zahrnuje i systémové vlastnosti.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Spravovat oprávnění pro dokument",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Uživatelé s tímto oprávněním mohou spravovat přístup k dokumentům v týmovém prostoru. Toto oprávnění zahrnuje práva k odstraňování dokumentů, úprav vlastností dokumentů a další akce ostatním uživatelům.",

		workspacebuilder_roles_priv_deleteDocuments: "Odstranit dokumenty",
		workspacebuilder_roles_plbl_deleteDocuments: "Uživatelé s tímto oprávněním mohou odstraňovat dokumenty v týmovém prostoru.",

		workspacebuilder_roles_priv_promoteVersions: "Zvýšit úroveň verzí",
		workspacebuilder_roles_plbl_promoteVersions: "Uživatelé s tímto oprávněním mohou k dokumentům v týmovém prostoru přiřadit nové číslo verze.",

		workspacebuilder_roles_priv_modifyContent: "Upravit dokumenty",
		workspacebuilder_roles_plbl_modifyContent: "Uživatelé s tímto oprávněním mohou upravovat obsah dokumentů v týmovém prostoru.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Upravit vlastnosti dokumentů",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Uživatelé s tímto oprávněním mohou upravovat vlastnosti dokumentů v týmovém prostoru.",

		workspacebuilder_roles_priv_viewContent: "Zobrazit dokumenty",
		workspacebuilder_roles_plbl_viewContent: "Uživatelé s tímto oprávněním mohou zobrazit dokumenty v týmovém prostoru.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Zobrazit vlastnosti dokumentu",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Uživatelé s tímto oprávněním mohou zobrazit vlastnosti dokumentů v týmovém prostoru, a to včetně systémových vlastností.",

		workspacebuilder_roles_priv_addNewSearches: "Přidat hledání",
		workspacebuilder_roles_plbl_addNewSearches: "Uživatelé s tímto oprávněním mohou do týmového prostoru přidávat hledání. Hledání není ostatním uživatelům standardně zpřístupněno.",

		workspacebuilder_roles_priv_createNewSearches: "Vytvořit hledání",
		workspacebuilder_roles_plbl_createNewSearches: "Uživatelé s tímto oprávněním mohou vytvářet nová hledání, avšak nemohou tato hledání uložit. Pokud uživatelé nemají toto oprávnění, nemohou přidávat dokumenty, jež jsou již v úložišti, do týmového prostoru.",

		workspacebuilder_roles_priv_shareSearches: "Sdílet hledání",
		workspacebuilder_roles_plbl_shareSearches: "Uživatelé s tímto oprávněním mohou sdílet hledání, která vytvoří, s dalšími uživateli týmového prostoru.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Spravovat třídy či šablony položky",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Uživatelé s tímto oprávněním mohou v týmovém prostoru přidávat a odebírat třídy nebo šablony položek.",

		workspacebuilder_roles_priv_addRemoveClasses: "Spravovat třídy",
		workspacebuilder_roles_plbl_addRemoveClasses: "Uživatelé s tímto oprávněním mohou v týmovém prostoru přidávat a odebírat třídy.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Spravovat uživatele týmového prostoru",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Uživatelé s tímto oprávněním mohou v týmovém prostoru přidávat a odebírat uživatele a skupiny. Dále mohou spravovat přiřazení rolí uživatelům.",

		workspacebuilder_roles_priv_modifyRoles: "Upravit role",
		workspacebuilder_roles_plbl_modifyRoles: "Vlastníci s tímto oprávněním mohou upravovat oprávnění rolí pro týmový prostor. Toto oprávnění je dostupné pouze pro vlastníky.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Vybrat uživatele",
		workspacebuilder_users_add_users_and_groups_button: "Přidat uživatele a skupiny...",
		workspacebuilder_users_users_or_group_header: "Uživatel a skupina",
		workspacebuilder_users_roles_header: "Role",

		workspacebuilder_users_role_header: "Role",
		workspacebuilder_users_role_no_permissions: "Tato role nemá žádná oprávnění.",
		workspacebuilder_users_available_roles_label: "Dostupné role:",
		workspacebuilder_users_selected_users_and_groups_label: "Vybraní uživatelé a skupiny:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Týmový prostor nelze uložit. Je nutné určit alespoň jednoho vlastníka týmového prostoru.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Týmový prostor nelze uložit. Všem uživatelům musí být přiřazena role.",
		// end of select users

		workspacebuilder_search_templates: "Vybrat hledání",
		workspacebuilder_search_add: "Přidat hledání",
		workspacebuilder_properties_workspaceName: "Název týmového prostoru:",
		workspacebuilder_properties_templateName: "Název šablony:",
		workspacebuilder_properties_workspaceDescription: "Popis týmového prostoru:",
		workspacebuilder_properties_templateDescription: "Popis šablony:",
		workspacebuilder_properties_workspaceTemplate: "Vybraná šablona:",
		workspacebuilder_properties_security: "Sdílet šablonu s uživatelem:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Přesunout z týmového prostoru:",
		moveTeamspaceDocuments_security: "Sdílet dokument s:",
		moveTeamspaceDocuments_security_change: "Zadat vlastní zabezpečení pro vybrané položky",
		moveTeamspaceDocuments_item_type_level: "Volbu potlačení zabezpečení vybraných položek nelze vybrat, protože třída vybrané položky je konfigurována tak, aby využívala pouze zabezpečení na úrovni třídy.",
		moveTeamspaceDocuments_security_inherit: "Zdědit zabezpečení z cílové složky",
		moveTeamspaceDocuments_file_info_text: "Položky lze přesouvat z jednoho týmového prostoru do jiného týmového prostoru nebo složky.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "K přesunutí položek do vybrané složky nemáte odpovídající oprávnění.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "K přesunutí položek z týmového prostoru nemáte odpovídající oprávnění.",
		moveTeamspaceDocuments_move_mixed_items: "Zabezpečení vybraných položek nemůžete potlačit. Některé položky nejsou spravovány týmovým prostorem. Přepsat zabezpečení lze pouze u položek , které jsou spravovány týmovým prostorem.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Musíte zadat název pro týmový prostor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Musíte zadat název pro šablonu týmového prostoru.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Název týmového prostoru nemůže obsahovat následující znaky: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Název šablony nemůže obsahovat následující znaky: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Odkaz na dokument",
		workspacebuilder_folders_makeDocCopy: "Kopírovat dokument",
		workspacebuilder_folders_newfolder: "Nová složka",
		workspacebuilder_folders_local_drive: "Z lokálního adresáře",
		workspacebuilder_folders_from_repo: "Z úložiště",
		workspacebuilder_folders_add_doc: "Přidat dokument",
		workspacebuilder_folders_grid_name: "Název",
		workspacebuilder_folders_props: "Vlastnosti",
		workspacebuilder_folders_remove: "Odebrat",
		workspacebuilder_folders_delete: "Odstranit",
		workspacebuilder_folders_adddoc_local: "Přidat dokument z lokální jednotky",
		workspacebuilder_folders_adddoc_repo: "Přidat dokument z úložiště",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Zadaný název složky již existuje. Zadejte jiný název složky.",

		workspacebuilder_classes_title: "Vybrat třídy nebo šablony položky",
		workspacebuilder_classes_title_cm: "Vybrat třídy",
		workspacebuilder_classes_template_introText: "Určete, zda týmové prostory vytvořené z této šablony budou používat třídy nebo šablony položek pro přidávání dokumentů do úložiště. Pokud nejsou vybrány žádné třídy, budou pro týmové prostory zobrazeny všechny třídy, k nimž je k dispozici přístup. Uživatel může upravit seznam tříd nebo šablon položek v týmovém prostoru, má-li příslušné oprávnění.",
		workspacebuilder_classes_template_introText_cm: "Vyberte třídy, které budou uživatelé moci používat k přidání dokumentů do úložiště. Nejsou-li vybrány žádné třídy, zobrazí se uživatelům týmového prostoru všechny třídy, k nimž mají přístup. Uživatelé mohou upravit seznam tříd v týmovém prostoru, pokud mají příslušná oprávnění.",
		workspacebuilder_classes_instance_introText: "Vyberte třídy nebo šablony položek, které budou uživatelé moci používat k přidání dokumentů do úložiště. Nejsou-li vybrány žádné třídy, zobrazí se uživatelům týmového prostoru všechny třídy, pro které mají oprávnění. Uživatelé mohou upravit seznam tříd nebo šablon položek v týmovém prostoru, pokud mají příslušná oprávnění.",
		workspacebuilder_classes_instance_introText_cm: "Vyberte třídy, které budou uživatelé moci používat k přidání dokumentů do úložiště. Nejsou-li vybrány žádné třídy, zobrazí se uživatelům týmového prostoru všechny třídy, pro které mají oprávnění. Uživatelé mohou upravit seznam tříd v týmovém prostoru, pokud mají příslušná oprávnění.",
		workspacebuilder_classes_selection: "Vybrat třídy:",
		workspacebuilder_classes_list: "Dostupné třídy:",
		workspacebuilder_classes_columns_default: "Výchozí",
		workspacebuilder_classes_columns_className: "Název třídy",
		workspacebuilder_classes_type_classes: "Použít třídy k přidání dokumentů",
		workspacebuilder_classes_type_classes_tooltip: "Třídy obsahují i přidružené vlastnosti, dokumenty lze proto vyhledávat kvůli pozdějšímu použití.",
		workspacebuilder_classes_type_entryTemplates: "Použít šablony položky k přidání dokumentů",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Šablony položek zaručují že informace poskytované pro jednotlivé dokumenty jsou konzistentní a používají předdefinované hodnoty.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Název šablony položky",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Popis",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Je třeba přidat do týmového prostoru alespoň jednu šablonu položky.",

		workspacebuilder_classes_new: "Nová třída",
		workspacebuilder_classes_add: "Přidat třídu",
		workspacebuilder_entryTemplate_add: "Přidat šablonu položky",
		workspacebuilder_add_list: "Přidat",
		workspacebuilder_makeDefault_list: "Nastavit jako výchozí",
		workspacebuilder_removeDefault_list: "Odebrat výchozí",

		workspacebuilder_roles_title: "Vybrat role",
		workspacebuilder_roles_title_modify: "Upravit role",

		workspacebuilder_selection_moveup: "Přesunout nahoru",
		workspacebuilder_selection_movedown: "Přesunout dolů",
		workspacebuilder_selection_remove: "Odebrat",
		workspacebuilder_selection_add: "Přidat",
		workspacebuilder_selection_create_new_search: "Nové hledání...",
		workspacebuilder_selection_create_new_role: "Nová role...",
		workspacebuilder_selection_make_role_available: "Zpřístupnit",
		workspacebuilder_selection_make_role_available_tooltip: "Sdílí roli výběru s dalšími šablonami. Roli je třeba přiřadit alespoň jedno oprávnění, aby bylo možné sdílet ji.",

		workspacebuilder_navigation_next: "Další",
		workspacebuilder_navigation_finish: "Dokončit",
		workspacebuilder_navigation_validate: "Ověřit",
		workspacebuilder_navigation_previous: "Předchozí",
		workspacebuilder_navigation_cancel: "Storno",
		workspacebuilder_navigation_customize: "Přizpůsobit",

		workspacebuilder_search_dialog_title: "Vyhledat",
		workspacebuilder_dialog_close: "Zavřít",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Dostupnost šablony:",
		workspace_properties_templateState_tooltip: "Znepřístupněte šablonu, aby uživatelé nemohli vytvářet týmové prostory využívající tuto šablonu.",
		workspace_properties_dialog_title: "Vlastnosti šablony",
		workspace_properties_online_radio_option_label: "Zpřístupnit",
		workspace_properties_offline_radio_option_label: "Znepřístupnit",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Chcete provést zrušení bez uložení změn?",
		workspacebuilder_cancel_confirmation_button: "Ano",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Veškeré neplatné položky budou odebrány z šablony a šablona bude zpřístupněna uživatelům. Chcete ověřit tuto šablonu týmového prostoru?",
		workspacebuilder_validate_confirmation_button: "Ano",
		workspacebuilder_validate_confirmation_title: "Ověřit",

		/* Entry templates builder */
		entry_templates: "Správce šablon položek",
		no_entry_templates_were_found: "Nejsou k dispozici žádné šablony položek",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtr",

		/* Roleselector widget */
		role_selector_name: "Role:",

		/* User Group picker widget */
		directory_label: "Adresář:",
		scope_label: "Vyhledat:",
		name_starts_with_label: "Jméno/název začíná znaky",
		name_contains_label: "Jméno/název obsahuje",
		display_name_contains_label: "Zobrazovaný název obsahuje",
		starts_with_label: "Začíná na:",
		available_label: "Dostupné:",
		available_heading: "Dostupné",
		selected_label: "Vybrané:",
		selected_heading: "Vybrané",
		available_repositories_label: "Dostupná úložiště",
		selected_repositories_label: "Vybraná úložiště",
		default_repository: "Výchozí úložiště:",
		default_repository_placeholder: "Vybrat úložiště",
		default_role_placeholder: "Vyberte roli",
		menu_label_placeholder: "Vyberte nebo zadejte popisek",
		default_repository_hover: "Určete úložiště, které bude vybráno jako výchozí při přihlášení uživatelů k webovému klientovi z této pracovní plochy.<br><br><b>Důležité:</b> Před určením výchozího úložiště je nutné úložiště přidat na pracovní plochu se seznamem vybraných úložišť.",
		default_repository_workflow_hover: "<b>Zapamatujte si:</b> Aplikační prostory můžete konfigurovat pouze pro úložiště, která jsou konfigurována pro tuto pracovní plochu.",
		remove_label: "Odebrat",
		users_label: "Uživatelé",
		groups_label: "Skupiny",
		user_or_group_name_label: "Jméno uživatele nebo skupiny:",
		user_or_group_name_hover: "Zadejte jméno uživatele nebo název skupiny platný v příslušném úložišti. Jméno ani název se neověřuje.",
		user: "Uživatel",
		group: "Skupina",
		name: "Název:",
		displayName: "Zobrazovaný název",
		display_name: "Zobrazovaný název:",
		shortName: "Krátký název:",
		distinguishedName: "Rozlišující název:",
		search_tooltip: "Vyhledat",
		add_tooltip: "Přidat",
		add_selected_tooltip: "Přidat do vybraného seznamu",
		remove_tooltip: "Odebrat",
		remove_selected_tooltip: "Odebrat z vybraného seznamu",
		add_to_selected_tooltip: "Přidat",
		remove_from_selected_tooltip: "Odebrat",
		move_up_selected_tooltip: "Přesunout nahoru",
		move_down_selected_tooltip: "Přesunout dolů",
		advanced_search_options_tooltip: "Rozšířená nastavení",
		move_right_selected_tooltip: "Přesunout do podnabídky",
		move_left_selected_tooltip: "Přesunout z podnabídky",
		add_separator: "Přidat oddělovač",
		menu_item_label: "Popisek položky nabídky:",
		add_menu_label: "Přidat podnabídku",
		menu_label: "Popisek podnabídky:",
		menu_label_info: "<b>Důležité:</b> Před uložením této nabídky musíte přidat alespoň jednu položky do podnabídky.",
		menu_dropdown_label: "Popisek rozevíracího tlačítka:",
		menu_dropdown_label_info: "<b>Důležité:</b> Před uložením tohoto panelu nástrojů musíte přidat alespoň jednu položku nabídky do tohoto rozevíracího tlačítka.",
		no_item_found: "Nebyly nalezeny žádné výsledky.",
		me: "Já",
		anyone: "Kdokoli",
		specific_users: "Specifičtí uživatelé",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Vyhledávání vrátilo více než {0} výsledků. Změnou kritérií omezte výsledky hledání.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Výsledky hledání obsahují položky, které již byly vybrány. Tyto položky nebudou ve výsledcích hledání zobrazeny.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Bylo vráceno více než {0} výsledků. Omezte rozsah výsledků pomocí filtru.",

		user_already_selected: "Určený uživatel je již vybrán. Určete jiného uživatele.",
		group_already_selected: "Určená skupina je již vybrána. Určete jinou skupinu.",
		user_cannot_select_self: "Nemůžete přidat sami sebe. Určete jiného uživatele.",

		/* Select User Group dialog */
		select_user_group_add_label: "Přidat",
		select_user_group_cancel_label: "Storno",
		add_users_groups_label: "Přidat uživatele a skupiny",
		add_user_group_label: "Přidat uživatele a skupinu",
		add_users_label: "Přidat uživatele",
		add_user_label: "Přidat uživatele",
		add_label: "Přidat:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Následující dokumenty obsahují neuložené změny anotací:",
		viewer_confirm_to_proceed: "Chcete pokračovat a změny ztratit?",
		viewer_warn_has_changes: "Dojde ke zrušení neuložených změn.",
		viewer_warn_is_printing: "Probíhající tisk nemusí být dokončen.",
		viewer_warn_confirm_exit: "Chcete správce ukončit?",
		viewer_prompt_save_changes: "Následující dokument obsahuje neuložené změny anotací, které budou ztraceny:<br>${0}<br><br>Chcete uložit změny?",
		viewer_prompt_mergesplit_changes: "Následující dokumenty obsahují neuložené změny:<br>${0}<br><br>Chcete pokračovat a změny ztratit?",
		viewer_prompt_mergesplit_tab_changes: "Následující dokument obsahuje neuložené změny:<br>${0}<br><br>Chcete pokračovat a změny ztratit?",
		viewer_new_item_name: "Nový dokument",
		viewer_top_frame: "Horní rámec:",
		viewer_bottom_frame: "Dolní rámec:",
		viewer_left_frame: "Levý rámec:",
		viewer_right_frame: "Pravý rámec:",
		viewer_viewer_frame: "Rámec prohlížeče:",
		viewer_properties_frame: "Rámec vlastností:",
		viewer_comment_frame: "Rámec komentářů:",
		viewer_mergesplit_on: "Zobrazit",
		viewer_mergesplit_off: "Sloučit a rozdělit",
		viewer_mergesplit_context_menu_move: "Přesunout",
		viewer_mergesplit_context_menu_rename: "Přejmenovat",
		viewer_mergesplit_context_menu_delete: "Odstranit",
		//move to new window
		viewer_move_to_new_window:"Přesunout do nového okna",
		viewer_continue:"Zrušit změny",
		viewer_return_to_original_window:"Zpět do původního okna",
		viewer_switch_window:"Přepnout okno",
		viewer_prompt_lost_changes:"Dokument ${0} je aktuálně otevřen v jiném okně. Tento dokument obsahuje neuložené změny.<br><br>Chcete se přepnout do tohoto okna a uložit změny, nebo chcete změny zrušit a otevřít ho v tomto okně?",
		viewer_mergesplit_fallback_info: "Akci Sloučit a rozdělit lze dokončit pouze pro dokumenty, které se nacházejí ve stejném úložišti.",
		viewer_tabbed_layout: "Zobrazit jako karty",
		viewer_tabbed_layout_highcontrast: "Karty",
		viewer_split_vertical_layout: "Rozdělit podokna na horní a dolní",
		viewer_split_vertical_layout_highcontrast: "Horní a dolní",
		viewer_split_horizontal_layout: "Rozdělit podokna na levé a pravé",
		viewer_split_horizontal_layout_highcontrast: "Vlevo a vpravo",
		viewer_add_vertical_layout: "Nová karta dole",
		viewer_add_vertical_layout_highcontrast: "Karta dole",
		viewer_add_horizontal_layout: "Nová karta vpravo",
		viewer_add_horizontal_layout_highcontrast: "Karta vpravo",
		viewer_add_horizontal_layout_rtl: "Nová karta vlevo",
		viewer_add_horizontal_layout_rtl_highcontrast: "Karta vlevo",
		viewer_split_properties_layout: "Zobrazit vlastnosti",
		viewer_split_comment_layout: "Zobrazit komentáře",
		viewer_split_notelog_layout: "Zobrazit protokol poznámek",
		viewer_window_title: "Prohlížeč ${0}",
		viewer_next_hit: "Zobrazit další dokument v seznamu",
		viewer_prev_hit: "Zobrazit předchozí dokument v seznamu",
		viewer_confrim_more_search_results: "Výsledky hledání neobsahují žádné další dokumenty, které by bylo možné prohlížet. Chcete načíst další výsledky hledání?",
		viewer_confirm_get_next_page: "Seznam výsledků neobsahuje žádné další položky, které by bylo možné prohlížet. Chcete načíst další výsledky hledání?",
		viewer_confirm_get_next_item: "Seznam výsledků obsahuje další položky, které lze prohlížet. Chcete zobrazit další položku?",
		viewer_fn_annotation_tooltip: " Vytvořil: ${0}, vytvořeno: ${1}",
		viewer_box_note_limitation: "Můžete pouze otvírat poznámky Box a zobrazovat je v samostatném okně.",
		viewer_click_to_open_box_note: "Poznámku Box můžete otevřít kliknutím zde.",
		viewer_box_view_expiring: "Maximální doba, po kterou můžete mít svůj dokument produktu Box zobrazen, je 60 minut. Platnost vaší aktuální relace vyprší za ${0} minut. Chcete-li pokračovat v práci na dokumentu, musíte jej nyní znovu načíst. Chcete dokument znovu načíst?",
		viewer_add_dialog_save_as_type: "Uložit jako typ:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Konflikt zapůjčení",
		viewer_checkout_conflict: "Dokument je zapůjčen jinému uživateli.",
		viewer_checkout_confirm: "K dispozici je novější verze dokumentu. Chcete pokračovat v zapůjčení dokumentu, nebo chcete znovu načíst prohlížeč s novější verzí? Zvolíte-li opětné načtení prohlížeče, budou veškeré neuložené změny ztraceny.",
		viewer_checkout_continue: "Pokračovat v zapůjčení",
		viewer_checkout_reload: "Znovu načíst",
		viewer_status_building: "Sestavování dokumentu...",
		viewer_status_adding: "Přidávání dokumentu...",
		viewer_status_checking_in: "Vracení dokumentu...",

		/* Class Selector Widget */
		include_subclasses_label: "Zahrnout podtřídy",
		include_subclasses_label2: "Hledat také v podtřídách",
		include_subclasses_note: "(včetně podtříd)",
		available_classes_col_header: "Dostupné třídy",
		single_class_label: "Hledat v jedné třídě",
		multiple_classes_label: "Hledat ve více třídách",
		multiple_classes_hover_help: "Při výběru této možnosti můžete hledat ve více třídách. Třídy mohou být nadřízenými třídami nebo podtřídami. Při výběru této volby se zobrazí pouze vlastnosti a hodnoty společné pro vybrané třídy.",
		selected_classes_col_header: "Vybrané třídy",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(včetně podsložek)",
		favorites_pseudo_node: "\\Favorites\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Je nutné vybrat složku v úložišti, kam chcete přidat dokument.",
		no_permission_add_folder: "Nemáte oprávnění k přidání složek do této složky.",
		no_permission_add_document: "Nemáte oprávnění k přidání dokumentů do této složky.",
		document_already_in_folder: "Dokument se již v této složce nachází.",
		cant_move_folder_onto_parent: "Složka se již v této složce nachází.",
		cant_move_folder_onto_self: "Složku nelze přesunout do této složky samotné ani do jejích podsložek.",

		/* Workflow Widgets */
		process_application_space: "Aplikační prostor procesu",
		process_role: "Role procesu",
		process_inbasket: "Složka s příchozími zprávami procesu",
		process_worklist: "Pracovní seznam",
		process_step_processor: "Pracovní položka procesu",
		process_tracker: "Sledovat pracovní položku",
		process_info_subject: "Předmět",
		process_info_stepname: "Krok",
		process_info_is_locked: "Uzamčeno",
		process_info_no_access: "Bez přístupu",
		process_info_received_on: "Přijato",
		process_info_overdue: "Zpožděno",
		process_info_reminder_sent: "Připomenutí odesláno",
		process_info_locked_by_user: "Zamknuto uživatelem",
		process_work_object_number: "Číslo pracovního objektu",
		process_deadline: "Termín:",
		process_launchedby: "Spustil:",
		process_receivedon: "Přijato:",
		process_step: "Krok:",
		process_properties: "Vlastnosti",
		process_attachments: "Přílohy",
		process_attachments_select: "Vybrat přílohu",
		process_finish_button_label: "Ukončit sledování",
		process_tracker_history: "Historie",
		process_tracker_milestones: "Milníky",
		process_tracker_milestone: "Milník",
		process_tracker_milestone_level: "Úroveň",
		process_tracker_milestones_empty: "Pro zobrazení nejsou k dispozici žádné milníky.",
		process_tracker_level_selector_label: "Zobrazit úrovně milníku do:",
		process_tracker_map_selector_label: "Filtrovat podle mapy:",
		process_tracker_message: "Zpráva",
		process_tracker_datereached: "Datum dosažení",
		process_tracker_stepname: "Krok",
		process_tracker_cycle: "Cyklus",
		process_tracker_review_cycle: "Cyklus revizí",
		process_tracker_participant: "Účastník",
		process_tracker_completed: "Dokončeno",
		process_tracker_response: "Odpověď",
		process_tracker_comments: "Komentáře",
		process_tracker_delete_confirmation: "Chcete ukončit sledování následujícícho sledu prací: ${0}?",
		process_tracker_history_allmaps: "Všechny mapy",
		process_tracker_history_workflow: "Sled prací",
		process_tracker_history_terminate: "Ukončit",
		process_tracker_history_malfunction: "Nesprávná funkce",
		process_filter_label: "Filtr",
		process_no_filter_summary: "Nebyly použity žádné filtry",
		process_filter_summary: "Použito: ${0}",
		process_filter_reset_tooltip: "Při obnovení bude smazán filtr a složka bude aktualizována.",
		process_attachments_add_folder: "Přidat složku",
		process_attachments_add_doc: "Přidat dokument",
		process_complete_button_label: "Dokončit",
		process_save_button_label: "Uložit",
		process_launch_button_label: "Spustit sled prací",
		process_open_button_label: "Otevřít",
		process_movetoinbox_button_label: "Přesunout do složky s příchozími zprávami",
		process_return_button_label: "Návrat",
		process_return_to_sender_tooltip: "Vrátit pracovní položku do původní složky s příchozími zprávami",
		process_move_to_inbasket_tooltip: "Přesunout pracovní položku do osobní složky s příchozími zprávami",
		process_reassign_tooltip: "Opakovaně přiřadit pracovní položku jinému vlastníkovi",
		process_reassign_button_label: "Opakovaně přiřadit",
		process_preferences_button_label: "Předvolby",
		process_manageroles_button_label: "Spravovat role",
		process_manageroles_no_members: "Neexistují žádné členy.",
		process_responses_button_label: "Další odpovědi",
		process_morecustomaction_button_label: "Další akce",
		process_show_instructions: "Zobrazit pokyny",
		process_hide_instructions: "Skrýt pokyny",
		process_remove_attachment: "Odebrat",
		process_close_window: "Pracovní položka byla zpracována.",
		process_delegate_flag: "Před směrováním pracovní položky do dalšího kroku ve sledu prací vyžadovat schválení pracovní položky aktuálním vlastníkem",
		process_paticipant_voting: "Počet účastníků nutných pro schválení hlasování:",
		process_get_next_label: "Získat další pracovní položku",
		process_no_more_items: "Ve složce s příchozími zprávami nejsou žádné další položky ke zpracování.",
		process_workflow_name: "Název sledu prací:",
		process_pattern_process_name: "Přezkoumání pro ${0}",
		process_instuctions: "Pokyny pro recenzenty:",
		process_pattern_deadline: "Termín:",
		process_reviewers: "Recenzenti:",
		process_approvals_required: "Povinná schválení:",
		process_on_reject: "V případě odmítnutí pracovní položky:",
		process_return_to_originator: "Vrátit mně",
		process_return_to_previous_reviewer: "Vrátit předchozímu recenzentovi",
		process_additional_settings: "Další nastavení:",
		process_allow_reassign: "Povolit recenzentům opakovaně přiřadit toto přezkoumání",
		process_complete_notification: "Upozornit mě po dokončení přezkoumání",
		process_workflow_name_hover_help: "Název, který zadáte pro pracovní položku, by měl recenzentům usnadnit odlišit tuto pracovní položku od jiných pracovních položek v jejich složce s příchozími zprávami.",
		process_approvals_required_hover_help: "Když je pracovní položka současně přezkoumávána více lidmi, můžete určit, kolik schválení je potřeba, aby byla pracovní položka úspěšně dokončena.",
		process_approval_options: "Volby schválení",
		process_all: "Vše",
		process_at_least: "Nejméně",
		process_at_least_by_count: "Nejméně ${0} recenzentů",
		process_at_least_by_percentage: "Nejméně ${0} % recenzentů",
		process_comments: "Komentáře:",
		process_review_step_comments_hover_help: "Pokud odmítnete pracovní položku, musíte zadat informace s důvody odmítnutí. Tato informace umožní původci pracovní položky či předchozímu recenzentovi reagovat na vaše námitky.",
		process_rework_step_comments_hover_help: "Musíte zadat informace o tom, jak jste reagovali na komentáře. Pokud s komentáři nesouhlasíte, uveďte důvody pro své rozhodnutí.",
		process_rejection_reason: "Důvod odmítnutí:",
		process_summary: "Souhrn",
		process_sequential_review: "Postupné přezkoumání",
		process_sequential_review_description: "Pracovní položka bude přezkoumána postupně každým recenzentem.",
		process_parallel_review: "Paralelní přezkoumání",
		process_parallel_review_description: "Pracovní položka bude přezkoumána všemi recenzenty najednou.",
		process_parallel_approvals_required_error: "Požadovaný počet schválení je příliš vysoký. Určeno je pouze ${0} recenzentů.",
		process_parallel_invalid_required_approvals_count: "Hodnota není platná. Musí být použita hodnota ${0}.",
		process_subject_prompt: "Zadejte předmět.",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Pracovní položka:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Zobrazit vlastnosti",
		view_permissions_level: "Zobrazit oprávnění",
		view_content_level: "Zobrazit dokument",
		link_level: "Odkaz",
		modify_properties_level: "Upravit vlastnosti",
		modify_content_level: "Upravit dokument",
		minor_version_level: "Upravit vedlejší verzi",
		major_version_level: "Upravit hlavní verzi",
		create_instance_level: "Vytvořit instanci",
		delete_document_level: "Odstranit dokument",
		delete_item_level: "Odstranit položku",
		modify_document_permissions_level: "Spravovat oprávnění",
		modify_folder_permissions_level: "Spravovat oprávnění",
		modify_owner_level: "Upravit vlastníka",
		delete_folder_level: "Odstranit složku",
		file_in_folder_level: "Přidat do složek",
		create_subfolder_level: "Vytvořit podsložky",
		link_item_level: "Anotovat dokument, přidat do složky", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Pouze dokument: Přidat anotaci k dokumentu nebo odebrat anotaci z dokumentu</li><li>Pouze složka: Přidat položku do složky nebo odebrat položku ze složky</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Odstranit",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Vlastník",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Čtenář",
		/* previously \"Read only\" */
		no_access_privilege: "Bez přístupu",
		share_with_label: "Sdílet s uživatelem:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Pouze já",
		public_label: "Všichni",
		members_label: "Konkrétní uživatelé a skupiny",
		select_members_label: "Vybrat...",
		select_user_group_label: "Vybrat uživatele...",
		select_users_groups_label: "Vybrat uživatele a skupiny...",
		select_user_label: "Vybrat uživatele...",
		propagation_label: "Šíření:",
		access_label: "Oprávnění:",
		add_permission_add_label: "Přidat",
		security_policy_label: "Zásady zabezpečení:",
		includes_inherited_access: "Zahrnuje zděděný přístup",
		customize_access_for_label: "Upravit přístup pro:",
		customize: "Přizpůsobit",
		direct: "Tato položka",
		singleLevelInheritance: "Jedna úroveň",
		infiniteLevelInheritance: "Všechny úrovně",
		inherited: "Zděděné",
		direct_hover_help: "Nastavení zabezpečení se vztahuje na vybranou položku.",
		singleLevelInheritance_hover_help: "Tato oprávnění se vztahují na tuto položku a na ty bezprostředně podřízené položky, které jsou nakonfigurovány, aby z této položky dědily zabezpečení.",
		infiniteLevelInheritance_hover_help: "Tato oprávnění se vztahují na tuto položku a na všechny podřízené položky, které jsou nakonfigurovány, aby z této položky dědily zabezpečení.",
		inherited_hover_help: "Tato oprávnění se dědí z nadřízené položky.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Tato oprávnění pro ${0} se vztahují na tuto položku a na ty bezprostředně podřízené položky, které jsou nakonfigurovány, aby z této položky dědily zabezpečení.",
		infiniteLevelInheritance_member_hover_help: "Tato oprávnění pro ${0} se vztahují na tuto položku a na všechny podřízené položky, které jsou nakonfigurovány, aby z této položky dědily zabezpečení.",
		inherited_member_hover_help: "Tato oprávnění pro ${0} se dědí z nadřízené položky.",
		partial_hover_help: "Nastavení zabezpečení položky byla změněna uživatelem.",
		allow: "Povolit",
		deny: "Zamítnout",
		basic: "Základní",
		advanced: "Rozšířené",
		permission_type: "Nastavit přístup pro:",
		share_with_hover_help: "Položka je aktuálně sdílena s následujícími uživateli a skupinami.",
		direct_security_policy_hover_help: "Nastavení této zásady zabezpečení umožňuje změnit zabezpečení této položky.",
		security_policy_hover_help: "Zabezpečení této položky je určeno pouze pro čtení, protože nastavení této zásady zabezpečení brání ve změně zabezpečení této položky.",
		security_remove: "Žádná oprávnění",
		pseudo_group_label: "Účty aliasu",
		marking_hover_help: "Zabezpečení této položky je řízeno sadou značení, která může ovlivnit její zabezpečení.",
		note_label: "Důležité:",
		marking_text: "Položka je označena jako ${0}. Může zahrnovat další bezpečnostní omezení.",
		authenticated_users: "Ověření uživatelé",
		realm_users: "Počet uživatelů: ${0}",
		denyAll: "Odepřít všem",
		allowAll: "Povolit vše",
		remove_direct_text: "Když uložíte změny, oprávnění pro tohoto člena budou z položky odebrána.",
		remove_single_inheritance_text: "Když uložíte změny, oprávnění pro tohoto člena budou odebrána z položky <br>a z těch bezprostředně podřízených položek, které jsou nakonfigurovány, aby z této položky dědily zabezpečení.<p>Chcete pokračovat?",
		remove_infinite_inheritance_text: "Když uložíte změny, oprávnění pro tohoto člena budou odebrána z položky <br>a ze všech podřízených položek, které jsou nakonfigurovány, aby z této položky dědily zabezpečení.<p>Chcete pokračovat?",
		remove_inheritance_text: "Když uložíte změny, oprávnění pro tohoto člena budou odebrána z položky <br>a ze všech podřízených položek, které jsou nakonfigurovány, aby z této položky dědily zabezpečení. Zachovají se jen ta oprávnění, <br>která zdědila tato položka.<p>Chcete pokračovat?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Odebrat tato oprávnění pro ${0}",

		security_proxy_text: "Zabezpečení této položky je určeno pouze pro čtení.",
		security_proxy_declared_text: "Zabezpečení této položky je určeno pouze pro čtení, protože je definované serverem proxy.",
		security_proxy_hover_help: "Zabezpečení této položky je řízeno zabezpečením nastaveným v jiném objektu daného úložiště.",
		add_permissions_label: "Přidat oprávnění",
		permission_propagation_direct: "Pouze tato složka",
		permission_propagation_onelevel: "Tato složka a o jednu úroveň nižší",
		permission_propagation_alllevels: "Tato složka a všechny nižší úrovně",
		document_propagation_label: "Nastavit přístup pro:",
		document_propagation_FOLDER: "Složka",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Zdroj ověření:",

		/* Versions Widget */
		object_versions_selector_label: "Verze:",
		object_versions_label: "Verze",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Složky založení",
		folders_filed_in_folder_col_hdr: "Složka",
		folders_filed_in_path_col_hdr: "Cesta",
		folders_filed_in_containment_name_col_hdr: "Název obsažení",
		folders_filed_in_creator_col_hdr: "Vytvořil",
		folders_filed_in_date_created_col_hdr: "Vytvořeno dne",

		/* Parent Documents */
		properties_parent_documents_label: "Nadřízené dokumenty",

		/* Select object dialog */
		select_object_title: "Vybrat položku",
		select_object_breadCrumb_version_prefix: "Verze pro: ",
		show_versions_label: "Zobrazit verze",
		use_current_version_label: "Použít aktuální verzi",
		use_released_version_label: "Použít vydanou verzi",

		/* Select content class dialog */
		select_class: "Vybrat třídu",
		/* Select Search dialog */
		select_search: "Vybrat hledání",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Zobrazit odkaz",
		show_hyperlink_intro: "Odkaz můžete zkopírovat a vložit do e-mailů, konverzací nebo webových stránek. Pokud existuje více verzí dané položky, určete, na kterou verzi chcete odkazovat.",
		show_hyperlink_intro_no_version_select: "Odkaz můžete zkopírovat a vložit do e-mailů, konverzací nebo webových stránek.",
		show_text_label: "Verze:",
		released_button_label: "Vydáno",
		current_button_label: "Aktuální",
		select_button_label: "Konkrétní verze",
		show_hyperlink_no_released_version_msg: "Neexistuje žádná vydaná verze tohoto dokumentu.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Spustit sled prací",
		edit_workflow_title: "Vlastnosti pracovní položky",
		start_workflow_intro: "Po spuštění sledu prací budou vybrané položky zpracovány. Chcete-li pracovní položky přiřadit konkrétnímu uživateli, určete vlastníka.",
		edit_workflow_intro: "Vlastnosti vybraných pracovních položek je možné upravit. Chcete-li pracovní položku přiřadit jinému uživateli, určete vlastníka.",
		workflow_field_label: "Sled prací:",
		priority_field_label: "Priorita:",
		owner_field_label: "Vlastník:",
		start_button_label: "Začátek",
		save_button_label: "Uložit",
		owner_value_hint: "Zadejte alfanumerický řetězec o maximální délce 32 znaků. Řetězec může obsahovat pouze mezery nebo následující znaky: a-z, A-Z, 0-9, ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Prvky obsahu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Hodnota není platná. Může obsahovat pouze mezery nebo následující znaky: a-z, A-Z, 0-9, ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Zadejte hodnotu v rozsahu 1 až 32000 označující důležitost pracovní položky.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Hodnota není platná. Priorita musí mít hodnotu v rozsahu 1 až 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Název sledu prací neexistuje.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Pozastavit ve sledu prací",
		suspend_workitems_intro: "Při pozastavení pracovní položky ve sledu prací tuto položku nelze zpracovat, dokud nedojde k její obnově.",
		suspend_workitems_options_label: "Pozastavit vybrané pracovní položky:",
		suspend_until_resume_label: "Do ručního obnovení",
		suspend_until_date_label: "Do",
		suspend_for_duration_label: "Po dobu",
		suspend_for_duration_hours: "Hodiny",
		suspend_for_duration_days: "Dny",
		suspend_for_duration_weeks: "Týdny",
		suspend_for_duration_months: "Měsíce",
		suspend_for_duration_years: "Roky",
		suspend_button_label: "Pozastavit",
		suspend_duration_value_hint: "Zadejte hodnotu trvání v rozsahu 1 - 99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Hodnota není platná. Zadaná hodnota musí být v rozsahu 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Odebrat ze sledu prací",
		remove_workflow_confirmation: "Chcete odebrat vybrané položky ze sledu prací?<br>Počet vybraných položek: ${0}",
		remove_workflow_button_label: "Odebrat",

		/* Unfile dialog */
		unfile_dialog_title: "Odebrat ze složky",
		unfile_dialog_remove_from_folder_label: "Odebrat ze složky:",
		unfile_dialog_info_text: "Položky lze ze složek odebrat. Odebrání položky ze všech složek však neznamená odebrání položky z úložiště. Položku lze i nadále načíst, pokud spustíte hledání. V tomto seznamu jsou zobrazeny pouze složky, pro které máte oprávnění k zobrazení.",
		unfile_dialog_select_all: "Vybrat vše",
		unfile_dialog_deselect_all: "Vymazat vše",
		unfile_dialog_remove_button_label: "Odebrat",
		unfile_dialog_select_folder_col_hdr: "Vybrat složku",
		unfile_dialog_folder_col_hdr: "Složka",
		unfile_dialog_path_col_hdr: "Cesta",
		unfile_dialog_not_filed_msg: "Tato položka se nenachází v žádných složkách.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nemáte oprávnění k odebrání položky ze žádné ze složek, ve kterých se nachází.",
		unfile_dialog_folder_not_selectable_tooltip: "Nemáte oprávnění k odebrání položky z dané složky.",
		unfile_multi_prompt: "Chcete odebrat vybrané položky ze složky ${0}?",
		unfile_large_number_items_confirmation_question: "Vybrali jste ${0} položek pro odebrání ze složky ${1}.<br/>Odebírání velkého množství položek ze složky může trvat delší dobu.<br/>Chcete pokračovat?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Otevřít",
		move_to_folder_title: "Přesunout do složky",
		move_to_folder_button_caption: "Přesunout",
		move_to_folder_label: "Přesunout do složky:",
		add_to_folder_title: "Přidat do složky",
		add_to_folder_button_caption: "Přidat",
		add_to_folder_label: "Přidat do složky:",
		copy_to_folder_title: "Kopírovat do složky",
		copy_to_folder_button_caption: "Kopírovat",
		copy_to_folder_label: "Kopírovat do:",
		copy_to_folder_delete_label: "Po dokončení kopírování odstranit vybrané položky z produktu Box",
		move_from_folder_label: "Přesunout ze složky:",
		move_file_info_text: "Položky je možné přesouvat mezi složkami.",
		move_folder_info_text: "Složky je možné přesouvat mezi nadřízenými složkami.",
		add_doc_to_folder_info_text: "Položky je možné přidat do jedné nebo více složek. Pokud se položka již nachází ve složce, zůstane v ní a bude přidána do dalších složek, které určíte.",
		copy_doc_to_folder_info_text: "Můžete zkopírovat položky do složky.",
		box_copy: "Kopírovat prostřednictvím produktu Box",
		box_copy__button_caption: "Kopírovat",
		box_copy_to_info_text: "Vyberte úložiště a složku, do níž chcete vybrané položky zkopírovat z produktu Box.",
		box_copy_from_info_text: "Vyberte úložiště a složku, do níž chcete vybrané položky zkopírovat z produktu Box.",
		box_copy_version_info_text: "Chcete-li přidat nový dokument, vyberte úložiště a složku. Chcete-li vrátit novou verzi, vyberte úložiště a dokument.",
		admin_box_copy: "Kopírovat prostřednictvím produktu Box",
		admin_box_copy_hover: "Tato volba umožňuje uživatelům kopírovat dokumenty do produktu Box.",

		no_permission_to_copy_version_msg: "Dokument nelze kopírovat z produktu Box jako novou verzi vybraného dokumentu. Buď nemáte příslušná oprávnění pro úpravu vybraného dokumentu, nebo je vybraný dokument zapůjčen jiným uživatelem.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nemáte oprávnění k odebrání položky ze žádné ze složek, ve kterých se nachází.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nemáte oprávnění k odebrání položky z dané složky.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Položku nelze přesunout, protože není založená v žádných složkách. Vyberte jinou položku.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Spustit sled prací",
		subscriptions_dialog_available_items_label: "Dostupné položky:",
		subscriptions_dialog_info_text: "Určete sled prací, který má být spuštěn.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Název",
		subscriptions_dialog_desc_col_hdr: "Popis",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Spravovat role",
		manageroles_dialog_info_text: "Můžete upravit seznam uživatelů pro každou roli, která je přidružená s tímto prostorem aplikace procesu.",
		manageroles_dialog_members_label: "Členové",
		manageroles_dialog_roles_label: "Role",
		manageroles_dialog_add_button_label: "Přidat uživatele a skupiny",
		manageroles_dialog_remove_button_label: "Odebrat",
		manageroles_dialog_save_button_label: "Uložit",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "K položce nejsou přidruženy žádné sledy prací.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Předvolby sledu prací",
		workflow_pref_dialog_info_text: "Určete události sledu prací, pro které chcete přijímat e-mailové oznámení. Dále můžete povolit možnost přesměrování práce jinému uživateli pomocí jeho výběru.",

		workflow_pref_general: "Obecné",
		workflow_pref_email_address: "E-mailová adresa",
		workflow_pref_email_address_hover: "Zadejte e-mailovou adresu, kde chcete přijímat oznámení o sledu prací.",
		workflow_pref_preferred_locale: "Jazyk",
		workflow_pref_preferred_locale_hover: "Určuje jazyk, ve kterém mají být zobrazována e-mailová oznámení.",

		workflow_pref_work_item_notice: "Oznámení pracovních položek",
		workflow_pref_step_new_assignment: "Byla mi přiřazena nová pracovní položka",
		workflow_pref_step_new_assignment_hover: "Upozornit mě na obdržení nové pracovní položky.",
		workflow_pref_step_expired_deadline: "Došlo k překročení termínu pracovní položky",
		workflow_pref_step_expired_deadline_hover: "Upozornit mě na překročení termínu pracovní položky.",
		workflow_pref_step_reminders: "Blíží se termín pracovní položky",
		workflow_pref_step_reminders_hover: "Upozornit mě na blížící se termín pracovní položky.",

		workflow_pref_originator_notice: "Oznámení původce",
		workflow_pref_milestone_reached: "Došlo k dosažení milníku",
		workflow_pref_milestone_reached_hover: "Upozornit mě na dosažení milníku u sledu prací, který byl zahájen mnou.",

		workflow_pref_tracker_notice: "Upozornění sledování sledu prací",
		workflow_pref_tracker_new_assignment: "Byla mi přiřazena nová položka modulu sledování",
		workflow_pref_tracker_new_assignment_hover: "Upozornit mě na zahájení sledu prací, který sleduji.",
		workflow_pref_tracker_deadline_reminders: "Blíží se termín sledu prací",
		workflow_pref_tracker_deadline_reminders_hover: "Upozornit mě na sled prací, u kterého se blíží termín.",
		workflow_pref_tracker_deadline_expired: "Došlo k překročení termínu sledu prací",
		workflow_pref_tracker_deadline_expired_hover: "Upozornit mě na překročení termínu sledu prací.",
		workflow_pref_tracker_exception: "Došlo k chybě sledu prací",
		workflow_pref_tracker_exception_hover: "Upozornit mě na výjimku nebo chybu sledu prací.",
		workflow_pref_tracker_expired_deadline: "Konečný termín kroku byl překročen.",
		workflow_pref_tracker_expired_deadline_hover: "Upozornit mě na překročení termínu kroku v rámci sledu prací, který sleduji.",
		workflow_pref_tracker_milestone_reached: "Došlo k dosažení milníku",
		workflow_pref_tracker_milestone_reached_hover: "Upozornit mě na dosažení milníku u sledu prací, který sleduji.",

		workflow_pref_out_notice: "Mimo kancelář",
		workflow_pref_proxy_user: "Delegovat práci na",
		workflow_pref_proxy_user_hover: "Tuto volbu můžete použít k automatickému přesměrování vaší práce na jiného uživatele, například pokud jste mimo kancelář nebo na dovolené.",
		workflow_pref_workflow: "Sled prací",
		workflow_pref_on: "Zap.",
		workflow_pref_off: "Vyp.",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Spustit sled prací",
		transfered_workflows_dialog_info_text: "Vyberte sled prací, který chcete zahájit.",
		transfered_workflows_dialog_available_items_label: "Dostupné položky:",
		transfered_workflows_dialog_select_button_label: "Spustit",
		transfered_workflows_dialog_name_col_hdr: "Název",
		transfered_workflows_dialog_no_item_found: "Nebyly nalezeny žádné přenesené sledy prací.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Přenést sled prací",
		transfer_workflow_dialog_info_text: "Vyberte sled prací, který chcete přenést do systému sledů prací.",
		transfer_workflow_dialog_use: "Použít tento název sledu prací",
		transfer_workflow_dialog_use_another: "Použít jiný název sledu prací",
		transfer_workflow_dialog_in_use: "Název sledu prací je: ",
		transfer_workflow_dialog_transfer_button_label: "Přenést",
		transfer_workflow_dialog_no_items_found: "Nebyly nalezeny žádné přenesené sledy prací.",
		transfer_workflow_dialog_use_hover: "Určete název aktuálního sledu prací z definice sledu prací.",
		transfer_workflow_dialog_another_hover: "Můžete určit jiný název sledu prací nebo znovu použít existující název přeneseného sledu prací.",

		/*Search In control*/
		search_in_title: "Obor hledání:",
		search_in_teamspaces: "Týmové prostory",
		search_in_repositories: "Úložiště",
		search_in_thisteamspaces: "Tento týmový prostor",

		ajaxViewer_save: "Uložit anotace",
		ajaxViewer_print: "Náhled tisku",
		ajaxViewer_firstPage: "První strana",
		ajaxViewer_previousPage: "Předchozí strana",
		ajaxViewer_nextPage: "Další strana",
		ajaxViewer_lastPage: "Poslední strana",
		ajaxViewer_unknownPageCount: "1 z ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} z ${1}",
		ajaxViewer_zoomOut: "Zmenšit",
		ajaxViewer_zoomIn: "Zvětšit",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "Přizpůsobit šířce",
		ajaxViewer_fitHeight: "Přizpůsobit výšce",
		ajaxViewer_fitPage: "Přizpůsobit stránce",
		ajaxViewer_rotate270: "Otočit o 270 stupňů",
		ajaxViewer_rotate90: "Otočit o 90 stupňů",
		ajaxViewer_rotate180: "Otočit o 180 stupňů",
		ajaxViewer_darken: "Ztmavit",
		ajaxViewer_lighten: "Zesvětlit",
		ajaxViewer_lessContrast: "Méně kontrastu",
		ajaxViewer_moreContrast: "Více kontrastu",
		ajaxViewer_invert: "Invertovat",
		ajaxViewer_createHighlight: "Zvýraznit",
		ajaxViewer_createNote: "Anotovat",
		ajaxViewer_editAnnotation: "Upravit vlastnosti anotace",
		ajaxViewer_deleteAnnotation: "Odstranit anotaci",
		ajaxViewer_editAnnotationTitle: "Upravit vlastnosti anotace",
		printableView_print: "Tisk",
		printableView_close: "Zavřít",

		search_results_dropdown_button: "Zobrazení výsledků",
		search_results_columns_label: "Zobrazení výsledků hledání",
		search_results_columns_description: "Vyberte vlastnosti, které chcete zobrazit ve výsledcích hledání.",
		search_results_sortby_label: "Řadit podle:",
		search_results_order_label: "Pořadí řazení:",
		search_results_accending_label: "Vzestupně",
		search_results_descending_label: "Sestupně",
		search_results_available_properties: "Dostupné",
		search_results_selected_properties: "Vybrané",
		search_rank_property: "Ohodnocení (pouze textové hledání)",
		search_name_attribute: "Název (${0})",
		search_results_summary_enabled_label: "Povolit souhrny obsahu (pouze textové hledání)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Hledání",
		manage_teamspace_classes_tab_title: "Třídy",
		manage_teamspace_entry_templates_tab_title: "Šablony položek",
		manage_teamspace_team_tab_title: "Tým",
		manage_teamspace_roles_tab_title: "Role",
		manage_teamspace_dialog_title: "Upravit týmový prostor",
		manage_teamspace_button_label: "Upravit týmový prostor",
		manage_teamspace_team_pane_heading: "Vybrat tým",
		manage_teamspace_classes_pane_heading: "Vybrat třídy",
		manage_teamspace_entry_templates_pane_heading: "Vybrat šablony položky",
		manage_teamspace_no_rights_message: "Nemáte příslušná oprávnění k úpravě tohoto týmového prostoru.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Vlastnosti týmového prostoru",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Zadejte vlastnosti, které se mají zobrazit pro dokumenty a složky v seznamu obsahu pro uživatele při procházení týmového prostoru. Dále můžete určit pořadí, v jakém jsou vlastnosti uvedeny.",
		teamspace_props_sel_cols_use_default_label: "Pro toto úložiště použít nastavení ze stránky <b>Procházet</b>",
		teamspace_props_sel_cols_use_default_tooltip: "Pro toto úložiště bude použito nastavení určené na stránce Procházet v nástroji pro administraci.",
		teamspace_props_general_tab_label: "Obecné",
		teamspace_props_column_props_tab_label: "Zobrazené vlastnosti",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Vybrat soubor pro import",
		teamspace_import_template_instruction: "Můžete vybrat soubor exportu šablony týmového prostoru pro import.",
		teamspace_import_template_button_label: "Importovat",
		teamspace_import_template_dialog_label: "Importovat šablonu týmového prostoru",

		/* Annotation Dialog */
		annotationDlg_title: "Anotace",
		annotationDlg_description: "Pro vybraný dokument existují následující anotace:",
		annotationDlg_msg_noAnnotations: "Neexistují žádné anotace. Chcete-li přidat anotaci, klepněte na volbu Přidat.",
		annotationDlg_pageLabel: "Stránka: ${pageNum}",
		annotationDlg_accLabel: "PŘÍSTUP: ${accType}",
		annotationDlg_accLabel_public: "Veřejný",
		annotationDlg_accLabel_private: "Soukromý",
		annotationDlg_accLabel_privateGroup: "Soukromý (${groupName})",
		annotationDlg_copiable: "Lze kopírovat na jiný server",
		annotationDlg_cannotCopy: "Nelze kopírovat na jiný server",
		annotationDlg_addButtonLabel: "Přidat",

		/* Share Dialog */
		is_shared: "Sdíleno",
		is_share_pending: "Nevyřízené sdílení",
		share_title: "Sdílet prostřednictvím produktu Box",
		share_instructions_new: "Můžete odeslat e-mail obsahující odkaz na sdílený soubor. Kdokoli s odkazem bude mít k souboru přístup.",
		share_instructions_existing: "Můžete odeslat e-mail obsahující odkaz na sdílený soubor. Kdokoli s odkazem bude mít k souboru přístup. Odkaz mohou mít i další lidé, protože tento soubor již byl sdílen.",
		share_instructions_another_version_shared: "Můžete odeslat e-mail obsahující odkaz na sdílený soubor. Kdokoli s odkazem bude mít k souboru přístup. Odkaz mohou mít i další lidé, protože již byla sdílena jiná verze tohoto souboru.",
		share_buttonLabel_share: "Sdílet",
		share_email_addresses: "Odeslat komu:",
		share_email_addresses_hover: "Po dokončení sdílení je na tyto e-mailové adresy odeslán odkaz. Pokud nezadáte žádnou položku, bude odkaz odeslán na vaši vlastní e-mailovou adresu.",
		share_email_addresses_reshare_hover: "Po dokončení sdílení je na tyto e-mailové adresy odeslán odkaz. Pokud nezadáte žádnou položku, nebude odeslán žádný e-mail.",
		share_password: "Nastavit heslo:",
		share_password_placeholder: "Volitelné",
		share_comments: "Zpráva:",
		share_comments_default: "Chtěl(a) bych s Vámi sdílet svůj soubor prostřednictvím produktu Box.",
		share_myEmail: "Odeslat z adresy:",
		share_expiration: "Nastavit vypršení platnosti odkazu:",
		share_expire: "Platnost přístupu vyprší:",
		share_expire_none: "Platnost nikdy nevyprší",
		share_allowDownload: "Povolit stažení",
		share_add: "Přidat",
		share_advanced_instructions: "Nastavení stahování, vypršení platnosti a hesla se týkají sdíleného souboru v rámci produktu Box.",
		share_advanced_existing_instructions: "Nastavení stahování, vypršení platnosti a hesla se týkají sdíleného souboru v rámci produktu Box.",
		share_options_edit_warning: "Důležité upozornění: Jakékoli změny těchto nastavení se projeví pro všechny, kdo budou mít k dispozici odkaz, včetně lidí, kteří odkaz již mají.",
		share_link: "Odkaz:",
		share_email_addresses_placeholder: "E-mailové adresy",
		share_email_address_placeholder: "E-mailová adresa",
		share_email_address_invalid: "Zadejte platnou e-mailovou adresu.",
		share_cannot_share_with_self: "Nemůžete sdílet soubory sami se sebou. Určete jiného uživatele.",
		share_selected_version_with_minor_warning_hover: "Verze ${0} dokumentu je sdílená. Vybrali jste verzi ${1}.<br><br><b>Varování:</b> Pokud budete sdílet verzi ${1}, nebude nikdo moci sdílet verzi ${2}, dokud neodstraníte sdílení pro verzi ${1}.",
		share_selected_version_hover: "Verze ${0} dokumentu je sdílená. Vybrali jste verzi ${1}.",
		share_selected_version_message: "Důležité upozornění: Verze ${0} dokumentu je sdílená. Vybrali jste verzi ${1}.",
		share_different_version_message: "Důležité upozornění: Vybrali jste verzi ${1}, ale verze ${0} dokumentu je již sdílena. Verzi ${1} nemůžete odstranit, pokud nejprve neodstraníte sdílení, můžete však namísto původní položky sdílet odkaz na verzi ${0}.",
		share_version_message: "Důležité upozornění: Verze ${0} dokumentu je sdílená. Vyberte verzi, kterou chcete sdílet.",
		share_version_new: "Sdílet verzi ${0}",
		share_version_new_p8_hover: "Sdílením tohoto dokumentu vznikne odkaz na konkrétní verzi, který vede pouze na vybranou verzi.<br><br>Je-li dokument již sdílen:<ul><li>Můžete sdílet pozdější verzi; odkaz se přesměruje na pozdější verzi.</li><li>Dřívější verzi nemůžete sdílet, pokud nejprve neodstraníte sdílení.</li></ul>",
		share_version_new_cm_hover: "Sdílením tohoto dokumentu vznikne odkaz na konkrétní verzi, který vede pouze na vybranou verzi.<br><br>Je-li dokument již sdílen:<ul><li>Můžete sdílet pozdější verzi; odkaz se přesměruje na pozdější verzi.</li><li>Dřívější verzi nemůžete sdílet.</li></ul>",
		share_version_update: "Sdílet verzi ${0} (aktualizovat volby sdílení)",
		share_version_update_p8_hover: "Sdílením tohoto dokumentu bude zachován odkaz pouze na konkrétní verzi.<br><br>Je-li dokument již sdílen:<ul><li>Můžete sdílet pozdější verzi; odkaz se přesměruje na pozdější verzi.</li><li>Dřívější verzi nemůžete sdílet, pokud nejprve neodstraníte sdílení.</li></ul>",
		share_version_update_cm_hover: "Sdílením tohoto dokumentu bude zachován odkaz pouze na konkrétní verzi.<br><br>Je-li dokument již sdílen:<ul><li>Můžete sdílet pozdější verzi; odkaz se přesměruje na pozdější verzi.</li><li>Dřívější verzi nemůžete sdílet.</li></ul>",
		share_version_change_to_current: "Sdílet verzi ${0} (aktualizovat sdílení vybranou verzí)",
		share_version_change_to_current_p8_hover: "Sdílením tohoto dokumentu bude aktualizován odkaz tak, aby vedl pouze na vybranou verzi.<br><br>Je-li dokument již sdílen:<ul><li>Můžete sdílet pozdější verzi; odkaz se přesměruje na pozdější verzi.</li><li>Dřívější verzi nemůžete sdílet, pokud nejprve neodstraníte sdílení.</li></ul>",
		share_version_change_to_current_cm_hover: "Sdílením tohoto dokumentu bude aktualizován odkaz tak, aby vedl pouze na vybranou verzi.<br><br>Je-li dokument již sdílen:<ul><li>Můžete sdílet pozdější verzi; odkaz se přesměruje na pozdější verzi.</li><li>Dřívější verzi nemůžete sdílet.</li></ul>",
		share_repository: "Úložiště pro sdílené soubory",
		share_repository_hover: "Pokud není zobrazeno úložiště produktu Box, které chcete použít, můžete přidat nové úložiště produktu Box na stránce Úložiště.",
		share_options: "Volby sdílení",
		unshare_confirm: "Odstraníte-li sdílení, všechny odkazy týkající se tohoto sdílení včetně odkazů odeslaných dříve jinými uživateli přestanou být funkční. Všichni ostatní uživatelé, kteří chtějí dokument sdílet, musí vybrat původní dokument a sdílet jej znovu.<br><br>Opravdu chcete sdílení odstranit?",
		unshare_button: "Odstranit sdílení prostřednictvím produktu Box",
		admin_share: "Služby sdílení prostřednictvím produktu Box:",
		admin_share_hover: "Povolit uživatelům sdílení dokumentu ze kteréhokoli úložiště s povoleným sdílením prostřednictvím produktu Box. Sdílení dokumentu zahrnuje zkopírování souboru do produktu Box, vytvoření odkazu a odeslání odkazu e-mailem.",
		admin_my_email_modifiable: "Povolit uživatelům upravit adresu odesilatele e-mailu",
		admin_my_email_modifiable_hover: "Při výchozím nastavení je v rámci sdílení prostřednictvím produktu Box e-mailová adresa uživatele určena pouze pro čtení a je získána z mapování uživatelů a e-mailových adres, které představují účty uživatelů produktu Box.<br><br>Tuto volbu vyberte, chcete-li uživatelům povolit úpravy jejich e-mailových adres při sdílení. Platnost e-mailové adresy se ale neověřuje.",
		admin_repos_admin_user: "Administrátor sdílení:",
		admin_repos_admin_user_hover: "Můžete nastavit administrátora sdílení, pokud jsou pro vaši pracovní plochu povoleny služby sdílení prostřednictvím produktu Box a toto úložiště produktu Box je vybráno jako úložiště pro sdílené soubory.<br><br>Klepněte na volbu Nastavit a přihlaste se k produktu Box s použitím platného účtu administrátora produktu Box.<br><br>Administrátorem sdílení musí být administrátor produktu Box, pro kterého je konfigurován neomezený úložný prostor v produktu Box.",
		admin_repos_admin_user_not_set_warning: "Příslušný administrátor produktu Box není konfigurován pro vybrané úložiště.<br><br>Služby sdílení prostřednictvím produktu Box jsou zakázány, dokud nenastavíte administrátora produktu Box pro vybrané úložiště nebo nevyberete jiné úložiště produktu Box, pro které je administrátor produktu Box konfigurován.<br><br>Administrátora produktu Box lze nastavit v sekci služeb sdílení prostřednictvím produktu Box na stránce Obecné pro příslušné úložiště.",
		admin_share_not_configured_warning: "Než budete moci začít používat služby sdílení produktu Box, je třeba nejprve přidat a vybrat úložiště produktu Box s ověřováním serveru.",
		/* Office Online Server settings */
		admin_office_online_title: "Konfigurace serveru Office Online",
		admin_office_online_server_enable: "Server Office Online:",
		admin_office_online_server_enable_hover: "Určete, zda uživatelé, kteří přistupují k této pracovní ploše, mají mít možnost upravovat své dokumenty produktu Office s použitím serveru Office Online.",		
		admin_office_online_allow_collaborative_editing: "Povolit spolupráci při úpravách",
		admin_office_online_allow_collaborative_editing_hover: "Můžete povolit více než jednomu uživateli práci na tomtéž dokumentu. Chcete-li možnost úprav dokumentů omezit na jednoho uživatele, zrušte výběr volby.",
		admin_office_online_repository_not_set_warning: "Než budete moci povolit službu Office Online, je třeba nejprve povolit příslušnou službu v úložišti a určit adresu URL serveru Microsoft Office Online. Klepněte na volbu <b>Úložiště</b>, vyberte úložiště a poté na kartě <b>Integrace úprav</b> službu povolte. Klepněte na volbu <b>Nastavení > Obecné</b> a zadejte adresu URL serveru Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Určete, zda chcete používat server Office Online pro práci s dokumenty Office.",
		admin_office_online_server_url: "Adresa URL serveru Microsoft Office Online",
		admin_office_online_server_url_hover: "Určete adresu URL, jejímž prostřednictvím mohou jiné aplikace komunikovat se serverem Office Online. Formát adresy URL: http://název_serveru:číslo_portu/hosting/discovery",
		admin_office_online_server_Verified: "Ověřeno",
	    admin_office_online_server_Failed: "<b>Neúspěch</b>",

		admin_repcfg_office_online_service_p8_hover: "Chcete-li inicializovat úložiště, aby bylo možné používat server Office Online, můžete přidat soubor počáteční šablony pro každou aplikaci produktu Office. Není-li šablona určena, bude použita výchozí šablona.",	
		admin_repcfg_office_online_server_integration: "Integrace se serverem MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Než budete moci povolit server Office Online, je třeba nejprve určit adresu URL serveru Microsoft Office Online. Klepněte na volbu Nastavení > Obecné a zadejte adresu URL.",
		admin_repcfg_office_online_word_template_name: "Výchozí šablona aplikace Word",
		admin_repcfg_office_online_excel_template_name: "Výchozí šablona aplikace Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Výchozí šablona aplikace PowerPoint",
		admin_repcfg_office_online_blank_template_description: "Toto je výchozí šablona, která bude použita, pokud nepřidáte vlastní šablonu.",
		/* Edit Service settings */
		admin_icn_edit_title: "Úprava konfigurace",	
	    admin_icn_edit_files_cleanup_interval: "Interval mazání dočasných souborů (ve dnech):",
	    admin_icn_edit_files_cleanup_interval_hover: "Můžete nastavit dobu, po kterou jsou v klientu produktu ICN pro úpravy uchovávány dočasné soubory. Výchozí doba je 20 dnů. Maximální doba je 20 dnů. Minimální doba je 1 den.",
	    admin_icn_edit_service_integration: "Integrace služby úprav",
	    admin_icn_edit_service_integration_intro: "Služba úprav umožňuje uživatelům snadno přidávat či upravovat soubory v nativních aplikacích, které mají nainstalovány v počítačích.<br><br><b>Důležité upozornění:</b> Pokud službu úprav povolíte, je třeba uložit konfiguraci úložiště, než budete moci upravovat předdefinované kategorie.",
		admin_icn_edit_service: "Služba úprav:",
		admin_icn_edit_enable_hover: "Abyste mohli používat službu úprav, musíte:<ul><li>Povolit službu v úložišti</li><li>Povolit službu na pracovních plochách ve vašem prostředí</li><li>V pracovních stanicích uživatelů nainstalovat klienta IBM Content Navigator Edit</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Povolit",
		admin_icn_edit_disable: "Zakázat",
		admin_icn_edit_create_new_category: "Nová kategorie",
		admin_icn_edit_delete_category: "Odstranit kategorii",
		admin_icn_edit_edit_category: "Upravit kategorii",
		admin_icn_edit_disable_category: "Zakázat kategorii",
		admin_icn_edit_enable_category: "Povolit kategorii",
		admin_icn_edit_new_category_dialog_title: "Nová kategorie",
		admin_icn_edit_edit_category_dialog_title:"Upravit kategorii",
		admin_icn_edit_new_category_dialog_instructions: "Kategorie dokumentu umožňuje přidružit šablony ke konkrétním typům MIME pro službu úprav. Můžete například přidružit sadu šablon k souborům PDF, aby uživatele mohli používat šablony při přidávání nebo úpravách souborů z klienta produktu IBM Content Navigator Edit. <br><br><b>Důležité upozornění:</b> Je třeba uložit konfiguraci úložiště, než budete moci přidávat šablony do kategorie, kterou vytvoříte. ",
		admin_icn_edit_edit_category_dialog_instructions: "Je třeba uložit konfiguraci úložiště, než budete moci přidávat šablony do této kategorie. ",
		admin_icn_edit_delete_category_dialog_instructions: "Chcete tuto kategorii a veškeré šablony, které jsou k této kategorii přidruženy, odstranit?<br><br><b>Důležité upozornění:</b> Změny nebudou provedeny trvale, dokud je neuložíte do úložiště. ",
		admin_icn_edit_category_label: "Kategorie: ",
		admin_icn_edit_category_discription_label:"Popis: ",
		admin_icn_edit_template_column_head:"Název šablony",
		admin_icn_edit_category_duplicate_error_message: "Kategorie s tímto ID již existuje. ",
		admin_icn_edit_word_category_description: "Tato kategorie definuje šablony pro dokumenty aplikace Microsoft Word, které jsou k dispozici v rámci služby úprav. ",
		admin_icn_edit_excel_category_description: "Tato kategorie definuje šablony pro dokumenty aplikace Microsoft Excel, které jsou k dispozici v rámci služby úprav. ",
		admin_icn_edit_powerpoint_category_description: "Tato kategorie definuje šablony pro dokumenty aplikace Microsoft PowerPoint, které jsou k dispozici v rámci služby úprav. ",

		icn_edit_add_template_dialog_title:"Přidat šablonu pro: ${0}",
		icn_edit_add_template_only_one_file_error: "Můžete vybrat pouze jeden soubor.",
		icn_edit_add_template_file_type_error: "Je třeba určit platný soubor šablony ${0}.<br><br>Typ MIME vybraného dokumentu: ${1}.<br><br>Platné typy MIME: ${2}.",
		icn_edit_change_template_dialog_title: "Upravit šablonu ${0}",
		icn_edit_action_in_new_menu_name:"Dokument ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "prostřednictvím produktu Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "prostřednictvím aplikací pracovní plochy",
		icn_edit_new_document_dialog_title: "Nový dokument ${0}",
		icn_edit_new_document_dialog_intro: "Vytvořte nový dokument ${0} a přidejte ho do úložiště. Dokument bude vytvořen se zvolenou šablonou služby úprav.", 
		icn_edit_select_edit_service_template: "Vybrat šablonu",
		icn_edit_edit_service_template: "Šablona služby úprav:",
		icn_edit_new_document_category_no_templates_message:"V této kategorii nejsou k dispozici žádné šablony. Obraťte se na administrátora se žádostí o přidání šablon do této kategorie.",
		icn_edit_installer: "Instalační program nástroje IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Nastavení tříd a rolí",
		admin_repcfg_classes_and_roles_warning: "Chcete-li určit třídy a uživatele nebo skupiny uživatelů, kteří mají oprávnění vytvářet, upravovat a používat šablony nebo vytvářet koncepty dokumentů fungujících se službou Office Online nebo službou úprav,",
		admin_repcfg_classes_and_roles_click_warning: "klepněte zde.",
		/* Edit Service settings END */
		share_no_my_email_error: "Došlo k problému při identifikaci e-mailové adresy, která je vyžadována pro sdílení dokumentu.",
		share_no_my_email_error_explanation: "Přihlásili jste se s použitím ID uživatele ${0}, příslušné ID uživatele však není mapováno na e-mailovou adresu.",
		share_no_my_email_error_userResponse: "Pokuste se přihlášení zopakovat nebo se přihlaste s použitím jiného ID uživatele. Pokud potíže přetrvávají, ohlaste chybu administrátorovi systému.",
		share_no_my_email_error_adminResponse: "ID uživatele ${0} není mapováno na e-mailovou adresu a pracovní plocha ${1} uživatelům neumožňuje úpravy e-mailové adresy pro služby sdílení prostřednictvím produktu Box.<br><br>Zkuste použít některé z následujících řešení:<br>Ověřte, že je modul plug-in pro mapování e-mailových adres zaregistrován.<br>Ověřte, že soubor emailMappingPlugin.json obsahuje ID uživatele ${0} a e-mailovou adresu uživatele, a poté sestavte, konfigurujte a registrujte modul plug-in pro mapování e-mailových adres.<br>Nechcete-li použít modul plug-in pro mapování e-mailových adres či adresář e-mailových adres v produktu FileNet P8, ale namísto toho chcete uživatelům povolit zadání jejich vlastních e-mailových adres při sdílení dokumentu, můžete upravit nastavení pracovní plochy pro služby sdílení produktu Box tak, aby uživatelé mohli odkaz odeslat z jiné e-mailové adresy.",
		share_no_my_email_error_0: "ID_uživatele",
		share_no_my_email_error_1: "název_pracovní_plochy",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Sdílena je pozdější verze tohoto dokumentu, proto nelze sdílet vybranou verzi tohoto dokumentu.",
		share_later_version_shared_error_explanation: "Nelze sdílet dřívější verzi dokumentu, který již je sdílen.",
		share_later_version_shared_error_userResponse: "Chcete-li odeslat odkaz na pozdější verzi dokumentu, je třeba nejprve vybrat pozdější verzi, a poté použít akci Sdílet.<br><br>Chcete-li sdílet vybranou verzi dokumentu, je třeba nejprve odstranit sdílení pro pozdější verzi dokumentu.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nová zpráva",
		email_from: "Od:",
		email_to: "Komu:",
		email_cc_link: "Kopie",
		email_bcc_link: "Skrytá kopie",
		email_cc: "Kopie:",
		email_bcc: "Skrytá kopie:",
		email_address_invalid: "Zadejte platnou e-mailovou adresu.",
		email_subject: "Předmět:",
		email_message: "Zpráva:",
		email_message_placeholder: "Přidat zprávu",
		email_attachments: "Přílohy:",
		email_links: "Odkazy:",
		email_send: "Odeslat",
		email_dont_send: "Neodesílat",
		email_subject_reminder: "Připomenutí předmětu",
		email_subject_reminder_confirm: "Chcete tuto zprávu odeslat bez předmětu?",
		email_missing_from_error: "Došlo k problému při identifikaci e-mailové adresy odesilatele, která je vyžadována pro odeslání e-mailu.",
		email_missing_from_error_explanation: "Přihlásili jste se s použitím ID uživatele ${0}, příslušné ID uživatele však není mapováno na e-mailovou adresu.",
		email_missing_from_error_userResponse: "Pokuste se přihlášení zopakovat nebo se přihlaste s použitím jiného ID uživatele. Pokud potíže přetrvávají, ohlaste chybu administrátorovi systému.",
		email_missing_from_error_adminResponse: "ID uživatele ${0} není mapováno na e-mailovou adresu a pracovní plocha ${1} uživatelům neumožňuje úpravy e-mailové adresy odesilatele.<br><br>Zkuste použít některé z následujících řešení:<br>Ověřte, že je modul plug-in pro mapování e-mailových adres zaregistrován.<br>Ověřte, že soubor emailMappingPlugin.json obsahuje ID uživatele ${0} a e-mailovou adresu uživatele, a poté sestavte, konfigurujte a registrujte modul plug-in pro mapování e-mailových adres.<br>Nechcete-li použít modul plug-in pro mapování e-mailových adres či adresář e-mailových adres v produktu FileNet P8, ale namísto toho chcete uživatelům povolit zadání jejich vlastních e-mailových adres při odesílání e-mailu, můžete upravit nastavení e-mailu pro pracovní plochy tak, aby uživatelé mohli upravit e-mailovou adresu odesilatele.",
		email_missing_from_error_0: "ID_uživatele",
		email_missing_from_error_1: "název_pracovní_plochy",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokument nelze otevřít.",
		open_edit_document_with_native_application_error_explanation: "Produkt IBM Content Navigator se nemůže připojit ke klientovi IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "V pracovní stanici nainstalujte a spusťte klienta IBM Content Navigator Edit. Pak se znovu pokuste dokument otevřít.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokument nelze otevřít.",
		connect_to_the_streamline_service_error_explanation: "Produkt IBM Content Navigator se nemůže připojit ke klientovi IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "V pracovní stanici nainstalujte a spusťte klienta IBM Content Navigator Edit. Pak se znovu pokuste dokument otevřít.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "Produkt IBM Content Navigator není správně konfigurován pro sdílení dokumentů.",
		share_not_configured_error_explanation: "Aby bylo možné sdílet dokumenty, musí být řádně konfigurována funkce sdílení produktu Box.",
		share_not_configured_error_userResponse: "Obraťte se na administrátora se žádostí o konfigurování funkce sdílení produktu Box.",
		share_not_configured_error_adminResponse: "Před sdílením dokumentů musí být konfigurovány následující položky:<ul><li>V rámci nastavení nástroje pro administraci musí být povolena služba správce úloh.</li><li>V úložišti musí být konfigurován identifikátor připojení správce úloh.</li><li>V úložišti musí být povoleno sdílení.</li><li>Úložiště produktu Box musí být vybráno pro sdílení na pracovní ploše.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Změny vlastností nebyly uloženy pro novou verzi.",
		checkin_cors_save_attributes_error_explanation: "Verze byla vytvořena, změny vlastností však nebyly uloženy. Je možné, že je dokument dosud zapůjčen.",
		checkin_cors_save_attributes_error_userResponse: "Odemkněte dokument a aktualizujte vlastnosti s použitím položky kontextové nabídky Vlastnosti.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Změny vlastností nebyly uloženy pro nový dokument.",
		add_cors_save_attributes_error_explanation: "Dokument byl vytvořeny, změny vlastností však nebyly uloženy.",
		add_cors_save_attributes_error_userResponse: "Aktualizujte vlastnosti s použitím položky kontextové nabídky Vlastnosti.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokument nelze otevřít.",		
		edit_document_using_edit_service_error_explanation: "Dokument nelze ve službě úprav otevřít.",
		edit_document_using_edit_service_error_userResponse: "Požádejte administrátora, aby aktualizoval integraci služby úprav.<br><br> Pokud uživatel potřebuje přistupovat k tomuto dokumentu ze služby úprav, přejděte na stránku Integrace úprav pro příslušné úložiště a aktualizujte službu úprav tak, aby obsahovala třídu v seznamu tříd pro úpravy kvůli podpoře služby úprav.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokument nelze otevřít.",		
		edit_document_is_editing_by_oos_error_explanation: "Tento dokument je používán službou Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Abyste mohli dokument otevřít ve službě úprav, musíte ho nejdříve ve službě Office Online uložit a zavřít.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Povolit odesílání CORS (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Nastavení e-mailu:",
		admin_email_settings_hover: "Určete typ e-mailové služby, kterou mají uživatelé používat. Pokud povolíte e-mailovou službu založenou na protokolu HTTP,  máte možnost povolit uživatelům úpravu e-mailové adresy odesilatele. Pokud chcete povolit e-mailovou službu založenou na jazyku Java, musíte mít prohlížeč s podporou jazyka Java.",
		admin_email_use_service: "Použít e-mailovou službu založenou na protokolu HTTP",
		admin_email_use_applet: "Použít e-mailovou službu založenou na jazyku Java",
		admin_email_can_modify_from: "Povolit uživatelům upravit adresu odesilatele e-mailu",
		admin_email_can_modify_from_hover: "Při výchozím nastavení nelze e-mailovou adresu odesilatele měnit a je získána z mapování uživatelů a e-mailových adres, které představují účty uživatelů.<br><br>Tuto volbu vyberte, chcete-li uživatelům povolit úpravy jejich e-mailových adres při odesílání e-mailu. Platnost e-mailové adresy se ale neověřuje.",
		admin_email_use_from_as_sender: "Použít adresu uživatele jako adresu odesilatele e-mailu",
		admin_email_use_from_as_sender_hover: "Při výchozím nastavení se v e-mailu uživatele použije platná e-mailová adresa odesilatele. Tato e-mailová adresa je definována v relaci pošty CNMailSession na aplikačním serveru. Výběrem této volby určíte, že se v e-mailu použije e-mailová adresa uživatele.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nové anotace",
		addAnnotationDlg_labelContents: "Obsah:",
		addAnnotationDlg_labelAccess: "Přístup:",
		addAnnotationDlg_labelPublic: "Veřejný",
		addAnnotationDlg_labelPrivate: "Soukromý",
		addAnnotationDlg_labelPrivateGroup: "Soukromý pro skupinu",
		addAnnotationDlg_labelGroup: "Skupina",
		addAnnotationDlg_labelCopiable: "Tuto anotaci lze kopírovat na jiný server.",
		addAnnotationDlg_buttonLabel_save: "Uložit",

		/* Skip navigation */
		skipNavigation_title_main: "Přejít na hlavní obsah",
		skipNavigation_title_menu: "Přejít na navigační tlačítka",
		skipNavigation_label_main: "Přejít na hlavní obsah",
		skipNavigation_label_menu: "Přejít na navigační tlačítka",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Správa týmových prostorů",
		manage_teamspace_pane_instance_hdr: "Týmové prostory",
		manage_teamspace_pane_template_hdr: "Šablony",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Posunout vpřed",
		scroll_back: "Posunout vzad",

		breadcrumb_separator_open: "Otevřít uzel",
		breadcrumb_separator_close: "Zavřít uzel",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Není vybrána žádná položka.",

		/* eds */
		eds_url: "Adresa URL externích datových služeb:",
		eds_request_timeout: "Časový limit požadavku na službu (v sekundách):",
		eds_is_required: "Zabránit uživatelům provádět akce měnící hodnoty vlastností při nedostupnosti EDS",

		/* eforms */
		eform_signing_pane_welcome: "Podepsat formulář",
		eform_signing_button_label: "Podepsat",
		eform_signing_pane_delete: "Odstranit podpis",
		eform_signing_button_label_delete: "Odstranit",

		xtplugin_server_label: "Adresa URL serveru IBM FileNet Workplace XT",
		xtplugin_server_hover: "Zadejte adresu URL serveru, na kterém je implementován produkt IBM FileNet Workplace XT. Příklad: http://localhost:8080/WorkplaceXT",

		ecplugin_server_label: "Adresa URL serveru IBM eClient",
		ecplugin_server_hover: "Zadejte adresu URL serveru, na kterém je implementován produkt IBM eClient. Příklad: http://localhost:9080/eClient/s",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Akce s velkým množstvím položek mohou trvat delší dobu. Chcete pokračovat?",
		large_number_actions_continue_button: "Pokračovat",

		large_items_actions_confirmation_question: "Akce pro velké položky mohou trvat delší dobu. Chcete pokračovat?",

		viewer_editproperties_title: "Potvrzení",
		viewer_editproperties_title_warning: "Varování",
		viewer_editproperties_save: "Uložit",
		viewer_editproperties_next: "Další",
		viewer_editproperties_reset: "Obnovit",
		viewer_editproperties_reset_hover: "Pro veškerá neuložená data budou nastaveny naposledy uložené hodnoty.",
		viewer_editproperties_saveandgetnext: "Uložit a poté načíst další",
		viewer_editproperties_saveandgetnext_hover: "Automaticky načíst další dokument po uložení změn",
		viewer_editproperties_prompt_save_changes: "Změnili jste vlastnosti následujícího dokumentu<br>${0}<br><br>Chcete změny uložit?",
		viewer_editproperties_prompt_discard_changes: "Změnili jste vlastnosti následujícího dokumentu<br>${0}<br><br>Nicméně některé vlastnosti mají neplatnou hodnotu, takže změny nelze uložit. Můžete buď opravit neplatné hodnoty,nebo zrušit změny.<br>Chcete opravit neplatné hodnoty zobrazené v podokně vlastností?",
		viewer_comments_prompt_discard_changes: "Upravili jste komentáře. Chcete změny uložit?",
		viewer_notelogs_prompt_discard_changes: "Upravili jste protokoly poznámek. Chcete změny uložit?",
		social_collaborated_version: "Verze: ${0}",
		social_link_label: "Kdo...",

		// social comments
		comments: "Komentáře",
		comments_add_hint: "Stisknutím klávesy Enter zadejte své komentáře.",
		comments_hint: "Zadejte své komentáře.",
		comments_label: "Stisknutím klávesy Enter či Tab zadejte své komentáře. Stisknutím klávesy Esc akci zrušíte.",
		comments_delete_confirmation: "Chcete odstranit vybraný komentář?",
		comments_number: "Komentáře: ${0}",
		comments_save_new: "Upravili jste komentáře. Chcete okno zavřít bez uložení změn?",

		notelogs: "Protokoly poznámek",
		notelogs_download: "Stáhnout",
		notelog_modify: "Uložit změny",
		notelog_edit: "Upravit protokol poznámek",
		notelog_create_newVersion: "Vytvořit novou verzi protokolu poznámek",
		notelog_add_hint: "Zadejte komentáře a přidejte je stisknutím klávesy Enter.",
		notelog_hint: "Stisknutím kláves Shift+Enter odřádkujete.",
		notelog_add_placeholder: "Chcete-li komentář přidat do protokolu poznámek, stiskněte klávesu Enter.",
		notelog_save_new: "Upravili jste protokol poznámek. Chcete okno zavřít bez uložení změn?",

		// P8 markings related
		cannot_remove_markings: "Nemáte oprávnění k odstranění hodnoty značení: {0}",

		// download count
		downloadcount: "Stažení: {0}",
		downloadcount_single: "1 stažení",
		downloadcount_multiple: "Počet stažení: {0}",
		downloadcount_none: "Toto dosud nikdo nestáhl",

		// recommendations
		recommendations: "Oblíbené: {0}",
		recommendations_recommend: "Nastavit jako oblíbené",
		recommendations_unrecommend: "Odebrat hodnocení Oblíbené",
		recommendations_you: "Tato položka se vám líbí",
		recommendations_you_and_another: "Tato položka se líbí vám a jedné další osobě",
		recommendations_you_and_others: "Tato položka se líbí vám a {0} dalším osobám",
		recommendations_another: "Počet osob, kterým se tato položka líbí: 1",
		recommendations_others: "Počet osob, kterým se tato položka líbí: {0}",
		recommendations_none: "Toto dosud nikdo neoznačil jako oblíbené",

		// tags
		tags: "Značky: ${0}",
		tags_delete: "Odstranit značku ${0}",
		tags_none: "Pro zobrazení nejsou k dispozici žádné značky.",
		tags_add: "Přidat značky:",
		tags_hint: "Chcete-li zadávat značky, stiskněte klávesu Enter.",
		tags_hover_help: "Zadejte značku nebo seznam značek, které lze použít k vyhledávání dokumentů se stejnými značkami. K oddělení značek můžete použít čárku (,), středník (;) nebo mezeru.",
		tags_hover_help_box: "Zadejte značku nebo seznam značek oddělený čárkami, které lze použít k vyhledávání dokumentů se stejnými značkami.",
		tags_no_access: "K přidávání značek nemáte příslušná oprávnění.",

		//task scheduler pane
		taskPane_tooltip: "Otevřít zobrazení Asynchronní úlohy",
		taskPane_tree: "Navigační strom podokna úloh",
		taskPane_allTasks: "Všechny úlohy",
		taskPane_scheduledTasks: "Naplánované úlohy",
		taskPane_recurringTasks: "Opakující se úlohy",
		taskPane_inProgressTasks: "Probíhající úlohy",
		taskPane_completedTasks: "Dokončené úlohy",
		taskPane_failedTasks: "Nezdařené úlohy",
		taskPane_disabledTasks: "Zakázané úlohy",
		taskPane_statusScheduled: "Naplánováno",
		taskPane_statusInProgress: "Probíhá",
		taskPane_statusCompleted: "Dokončeno",
		taskPane_statusFailed: "Nezdařilo se",
		taskPane_statusPaused: "Pozastaveno",
		taskPane_noItemSelected: "Není vybrána žádná položka",
		taskSchedulerPane_scheduleInformation: "Plánovací informace",
		taskSchedulerPane_loginInformation: "Přihlašovací informace",
		taskSchedulerPane_startImmediately: "Spustit ihned",
		taskSchedulerPane_recurrence: "Opakování",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Naplánovat sestavu",
		taskSchedulerPane_nameHoverHelp: "Zadejte název úlohy.",
		taskSchedulerPane_descriptionHoverHelp: "Zadejte pro úlohu popis. Popis by vám měl usnadnit rozlišování jednotlivých úloh.",
		taskSchedulerPane_startTimeHoverHelp: "Určete, kdy má být úloha spuštěna. Chcete-li úlohu spustit nyní, vyberte volbu Spustit ihned.",
		taskSchedulerPane_recurrenceHoverHelp: "Můžete naplánovat spouštění úlohy v pravidelných intervalech.",
		taskSchedulerPane_endTimeHoverHelp: "Určete, kdy má být úloha zastavena. Úloha poběží od naplánovaného času zahájení až do naplánovaného času ukončení.",
		taskSchedulerPane_usernameHoverHelp: "V případě opakujících se úloh je třeba zadat jméno uživatele, aby bylo možné provést ověření služby při spuštění úlohy.",
		taskSchedulerPane_passwordHoverHelp: "V případě opakujících se úloh je třeba zadat heslo určeného uživatele, aby bylo možné provést ověření služby při spuštění úlohy.",
		taskSchedulerPane_notification: "Upozornění",
		taskSchedulerPane_emailAddress: "E-mailová adresa",
		taskSchedulerPane_emailAddressHoverHelp: "Zadejte e-mailovou adresu, na které chcete přijímat upozornění o stavu úlohy.",
		taskSchedulerPane_intervalHoverHelp: "Určete interval spouštění opakující se úlohy. Interval můžete nastavit ve hodinách, dnech, týdnech nebo měsících.",
		taskSchedulerPane_scheduledStartTime: "Naplánovaný čas zahájení",
		taskSchedulerPane_startTime: "Čas spuštění",
		taskSchedulerPane_title: "Časový plán",
		taskSchedulerPane_runNow: "Spustit nyní",
		taskSchedulerPane_runOnce: "Spustit jednou",
		taskSchedulerPane_runAtSchedule: "Spustit s časovým plánem",
		taskSchedulerPane_repeats: "Opakování",
		taskSchedulerPane_repeatsEvery: "Opakuje se každý",
		taskSchedulerPane_hourly: "Každou hodinu",
		taskSchedulerPane_daily: "Denně",
		taskSchedulerPane_weekly: "Týdně",
		taskSchedulerPane_monthly: "Měsíčně",
		taskSchedulerPane_yearly: "Ročně",
		taskSchedulerPane_sunday: "Ne",
		taskSchedulerPane_monday: "Po",
		taskSchedulerPane_tuesday: "Út",
		taskSchedulerPane_wednesday: "St",
		taskSchedulerPane_thursday: "Út",
		taskSchedulerPane_friday: "Pá",
		taskSchedulerPane_saturday: "Ne",
		taskSchedulerPane_starting: "Počáteční datum",
		taskSchedulerPane_after: "Po",
		taskSchedulerPane_ending: "Koncové datum",
		taskSchedulerPane_times: "krát",
		taskSchedulerPane_days: "den/dny/dnů",
		taskSchedulerPane_hours: "hodina/hodiny/hodin během dne",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Ukončení (ve dnech)",
		taskSchedulerPane_never: "Nikdy",
		taskSchedulerPane_categorization: "Kategorizace",
		taskSchedulerPane_scheduleTask: "Naplánovaná úloha",
		taskInformationPane_details: "Podrobnosti",
		taskInformationPane_errors: "Chyby",
		taskInformationPane_taskInstances: "Instance úlohy",
		taskInformationPane_audits: "Audity",
		taskInformationPane_results: "Výsledky",
		asyncTasks: "Asynchronní úlohy",

		//entry template pane
		search_all_entry_templates: "Prohledat všechny šablony položek",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Zobrazit plnou verzi webu",
		mobilesite: "Zobrazit verzi webu pro mobilní zařízení",
		profile: "Spravovat profil",
		office_template: "Šablona produktu Office:",
		select_office_template: "Vybrat šablonu produktu Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Vybrané dokumenty nelze otevřít v prohlížeči s použitím akce Sloučit a rozdělit.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Prohlížeč konfigurovaný pro dokumenty PDF a TIFF nepodporuje akci Sloučit a rozdělit.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Požádejte administrátora, aby konfiguroval prohlížeč pro dokumenty PDF a TIFF, který podporuje akci Sloučit a rozdělit, například prohlížeč Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Vybrané dokumenty PDF nelze otevřít v prohlížeči s použitím akce Sloučit a rozdělit.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Prohlížeč konfigurovaný pro dokumenty PDF nepodporuje akci Sloučit a rozdělit.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Požádejte administrátora, aby konfiguroval prohlížeč pro dokumenty PDF, který podporuje akci Sloučit a rozdělit, například prohlížeč Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Vybrané dokumenty TIFF nelze otevřít v prohlížeči s použitím akce Sloučit a rozdělit.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Prohlížeč konfigurovaný pro dokumenty TIFF nepodporuje akci Sloučit a rozdělit.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Požádejte administrátora, aby konfiguroval prohlížeč pro dokumenty TIFF, který podporuje akci Sloučit a rozdělit, například prohlížeč Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Vybrané dokumenty nelze otevřít v prohlížeči s použitím akce Sloučit a rozdělit.",
		document_builder_unsupported_documents_error_explanation: "Akci Sloučit a rozdělit lze použít pouze pro dokumenty PDF a TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Vyberte podporované dokumenty a zopakujte akci.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Některé z vybraných dokumentů nelze otevřít v prohlížeči s použitím akce Sloučit a rozdělit.",
		document_builder_some_unsupported_documents_error_explanation: "Akci Sloučit a rozdělit lze použít pouze pro dokumenty PDF a TIFF otevřených ze stejného úložiště.",
		document_builder_some_unsupported_documents_error_userResponse: "Podporované dokumenty budou otevřeny v prohlížeči.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Při vracení upraveného obsahu došlo k chybě.",
		document_builder_checkin_failed_explanation: "Prohlížeč obdržel během vracení upraveného obsahu chybovou odezvu.",
		document_builder_checkin_failed_userResponse: "Požádejte administrátora svého systému, aby zkontroloval soubory protokolu webového aplikačního serveru.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokument nelze otevřít.",
		no_viewer_to_view_error_explanation: "Administrátor systému pro tento dokument zablokoval zobrazení. Pokud potřebujete přístup k tomuto dokumentu, můžete ho stáhnout.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Obsah nelze sestavit.",
		document_build_failed_userResponse: "Požádejte administrátora svého systému, aby zkontroloval soubory protokolu prohlížeče.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokument nelze otevřít v režimu sloučení a rozdělení.",
		document_builder_open_failed_userResponse: "Požádejte administrátora svého systému, aby zkontroloval soubory protokolu prohlížeče.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Systém nelze přepnout do režimu sloučení a rozdělení.",
		document_builder_switch_failed_userResponse: "Požádejte administrátora svého systému, aby zkontroloval soubory protokolu prohlížeče.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenty",
		print_service_page_setup_tab_title: "Nastavení stránky",
		print_service_OD_print_tab_title: "Volby tiskárny",
		print_service_status_merging: "Slučování dokumentů...",
		print_service_status_converting: "Převod dokumentů...",
		print_service_status_formatting: "Formátování dokumentů pro tisk...",
		admin_print_service_maximum_number_to_print: "Maximální počet dokumentů povolených pro tisk:",
		admin_print_service_maximum_size_to_print: "Maximální objem dat povolených pro tisk (v MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Určete maximální počet dokumentů, které uživatelé mohou najednou vytisknout. Výchozí maximální hodnota je 50. Pokud nechcete omezovat tisk počtem dokumentů, nastavte tento limit na 0.",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Omezení:</b> Toto nastavení není používáno produktem IBM Content Manager OnDemand.<br/><br/>Určete maximální objem dat, který lze vytisknout pomocí tiskové služby IBM Daeja ViewONE.<br /><br />Celková velikost každého dokumentu nesmí být větší než tato hodnota.<br/><br/>Výchozí mezní hodnota je 200 MB. Nastavení mezní hodnoty vyšší než 200 MB může mít vliv na výkon systému. Pokud nechcete omezovat tisk velikostí dokumentu, nastavte tento limit na 0.",
		// error printing
		print_service_error_printing: "Během tisku došlo k chybě.",
		print_service_error_printing_userResponse: "Požádejte administrátora svého systému, aby zkontroloval soubory protokolu služby tisku.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Vybrané dokumenty jsou pro tisk příliš velké.",
		print_service_max_content_error_explanation: "Vybrané dokumenty překročily limit ${0} MB dat.",
		print_service_max_content_error_userResponse: "Vyberte méně dokumentů nebo vyberte menší dokumenty a tisk opakujte. Dále se můžete obrátit na administrátora systému kvůli zvýšení maximální celkové velikosti položek, které lze najednou tisknout z této pracovní plochy.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Položky nelze tisknout.",
		print_service_max_number_selected_error_explanation: "Tisknout lze vždy nejvýše ${0} položek. Pokoušíte se tisknout ${1} položek.",
		print_service_max_number_selected_error_userResponse: "Vyberte menší počet položek a zkuste položky tisknout znovu. Dále se můžete obrátit na administrátora systému kvůli zvýšení maximálního počtu položek, které lze najednou tisknout z této pracovní plochy.",
		print_service_max_number_selected_error_0: "maximální_počet_položek",
		print_service_max_number_selected_error_1: "počet_položek",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


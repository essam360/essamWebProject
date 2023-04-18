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
		welcome_user: "Üdvözöljük, ",
		about: "Névjegy",
		all: "Összes",
		help: "Súgó",
		user_session: "Felhasználói munkamenet",
		user_session_for: "Felhasználói munkamenet a következőhöz: ${0}",
		user_session_for_with_container: "Felhasználói munkamenet a következőhöz: ${0} (${1})",
		tools: "Eszközök",
		login: "Bejelentkezés",
		logout: "Kijelentkezés",
		search: "Keresés",
		saved_searches: "Mentett keresések",
		content_analytics: "Tartalmak elemzése",
		reset: "Visszaállítás",
		reset_hover: "Az összes lap nem mentett adatai vissza lesznek állítva a korábban mentett értékekre.",
		reset_default: "Az összes törlése",
		reset_default_hover: "Törli az Aktuális címke mező tartalmát minden lapon",
		locale: "Területi beállítás:",
		up: "Fel",
		down: "Le",
		restore: "Visszaállítás",
		maximize: "Teljes méret",
		values_label: "Értékek",
		value_label: "Érték:",
		path_label: "Útvonal:",
		new_label: "Új:",
		back_label: "Vissza",
		clear: "Törlés",
		set: "Beállítás...",
		browse: "Tallózás",
		work: "Munka",
		connect: "Csatlakozás",
		documents: "Dokumentumok:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. Az IBM és az IBM logó az IBM Corporation védjegye a világ számos országában. A Java és minden Java alapú védjegy és logó az Oracle és/vagy leányvállalatai védjegye vagy bejegyzett védjegye. Az itt beillesztett Oracle Outside In Technology korlátozott licencszerződés hatálya alá tartozik, és csak ezzel az alkalmazással kapcsolatban használható. Ez a Program az azt kísérő licencszerződésben foglaltak hatálya alá tartozik.  Ez a licencszerződés a Program egyik könyvtárában vagy \"License\" illetve \"Non_IBM_License\" nevű mappájában található (ha van ilyen), vagy nyomtatott licencszerződés formájában van biztosítva. A program használatba vétele előtt figyelmesen olvassa el a szerződést. A program használatával elfogadja a szerződés feltételeit. ",
		edit: "Szerkesztés",
		cancel: "Mégse",
		close: "Bezárás",
		close_all: "Összes lap bezárása",
		close_others: "Egyéb lapok lezárása",
		ok: "OK",
		yes: "Igen",
		no: "Nem",
		open: "Megnyitás",
		refresh: "Frissítés",
		refresh_cabinets: "Minden kabinet frissítése",
		delete_text: "Törlés",
		export_config: "Konfiguráció exportálása",
		description: "Leírás",
		true_label: "True",
		false_label: "False",
		error: "Hiba",
		error_reference_hover: "A hibával kapcsolatos további információkat a www.ibm.com webhelyen kereshet.",
		url_label: "URL",
		default_label: "Alapértelmezett",
		ibm_label: "IBM",
		light_label: "Könnyű",
		dark_label: "Sötét",
		save: "Mentés",
		saveAs: "Mentés másként...",
		save_and_close: "Mentés és bezárás",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Nincs",
		Name: "Név",
		"${NAME}": "Név",
		mime_type: "MIME típus",
		mime_type_contains_label: "MIME típus tartalmazza",
		mime_type_header: "MIME típus",
		mime_type_icon: "MIME típus ikon",
		casesearch: "Ügy",
		item: "Elem",
		no_mime_type: "Ebben az elemben nem található tartalom.",
		items_selected: "${0} elem van kijelölve.",
		requestor: "Kérelmező",
		scheduledStartTime: "Ütemezett indítási idő",
		isRecurring: "Ismétlődő",
		weeks: "Hét",
		days: "Nap",
		hours: "Óra",
		endTime: "Leállás ideje",
		username: "Felhasználónév",
		password: "Jelszó",
		serverURL: "Kiszolgáló URL címe",
		enable: "Engedélyezés",
		disable: "Letiltás",
		finish: "Befejezés",
		previous: "Előző",
		next: "Következő",
		schedule: "Ütemezés",
		removeFromThisList: "Eltávolítás a listából",
		status: "Állapot",
		scheduledEndTime: "Ütemezett befejezési idő",
		type: "Típus",
		mode: "Mód",
		startTime: "Indítási idő",
		createdBy: "Létrehozó",
		nextScheduledTime: "Következő ütemezett időpont",
		id: "Azonosító",
		duration: "Időtartam",
		repeatCycle: "Gyakoriság",
		taskTypeName: "Feladattípus",
		to: "eddig:",
		filter: "Szűrő:",
		error_message: "Hibaüzenet",

        file_type: "Dokumentumtípus",
        word_template_name: "Word sablon neve",
        excel_template_name: "Excel sablon neve",
        powerpoint_template_name: "PowerPoint sablon neve",
        template_description: "Sablon leírása",
        action_add_template: "Hozzáadás",
        action_change_template: "Szerkesztés",      
        action_edit_template_properties: "Tulajdonságok",
        add_presentation_template: "Bemutatósablon hozzáadása",
    	add_spreadsheet_template: "Táblázatsablon hozzáadása",
    	add_doc_template: "Dokumentumsablon hozzáadása",    	
    	file_type_doc_hover: "Meg kell adnia egy érvényes szövegszerkesztő dokumentumsablon-fájlt.<br><br>Az érvényes MIME típusok: ${0}",
    	file_type_doc_error: "Meg kell adnia egy érvényes szövegszerkesztő dokumentumsablon-fájlt.<br><br>A kiválasztott dokumentum mime típus: ${0}<br><br>Az érvényes MIME típusok: ${1}",
    	file_type_presentation_hover: "Meg kell adnia egy érvényes bemutatósablon-fájlt.<br><br>Az érvényes MIME típusok: ${0}",
    	file_type_presentation_error: "Meg kell adnia egy érvényes bemutatósablon-fájlt.<br><br>A kiválasztott dokumentum mime típus: ${0}<br><br>Az érvényes MIME típusok: ${1}",
    	file_type_spreadsheet_hover: "Meg kell adnia egy érvényes táblázatsablon-fájlt.<br><br>Az érvényes MIME típusok: ${0}",
    	file_type_spreadsheet_error: "Meg kell adnia egy érvényes táblázatsablon-fájlt.<br><br>A kiválasztott dokumentum mime típus: ${0}<br><br>Az érvényes MIME típusok: ${1}",
    	office_online_only_one_template_error: "Csak egy fájlt választhat.",
    	change_presentation_template: "Bemutatósablon szerkesztése",
    	change_spreadsheet_template: "Táblázatsablon szerkesztése",
    	change_doc_template: "Dokumentumsablon szerkesztése",
    	change_button: "Szerkesztés",
	    new_document_dialog_doc_title: "Új dokumentum",
	    new_document_dialog_presentation_title: "Új bemutató",
	    new_document_dialog_spreadsheet_title: "Új táblázat",
	    new_document_dialog_title_label: "Cím:",
	    new_document_dialog_title_hover: "Adja meg a dokumentum címét.",
	    new_document_dialog_title_missing_message: "Meg kell adnia egy címet.",
	    office_online_save_before_adding_templates_title: "Mentse a lerakat módosításait",
	    office_online_save_before_adding_templates_error: "A lerakat módosításainak mentése előtt nem adhat hozzá Office sablonokat. Kattintson a <b>Mentés és bezárás</b> gombra, és nyissa meg újra a lerakatot, hogy hozzáadhassa az Office sablonokat.",
	    copy_to_OOS_dialog_doc_title: "Új dokumentum",
	    office_online_checkin_cancelcheckout_message: "A dokumentum szerkesztés alatt van a Microsoft Office Online szolgáltatásban. A dokumentumot nem iktathatja be és nem vonhatja vissza a kiiktatást, amíg meg van nyitva a Microsoft Office Online szolgáltatásban.",
	    new_document_classification: "Osztályozás:",
	    new_document_classification_help: "Visszaállítja a forrásdokumentum osztályát, tulajdonságait és szülőmappáját (ha van). Amikor beviteli sablon használatával ad hozzá egy dokumentumot, a forrásdokumentum beviteli sablonja lesz automatikusan kiválasztva, ha van ilyen. A forrásdokumentum tulajdonságai kerülnek alapértelmezésként felhasználásra, de a beviteli sablonon megadott mappa és osztály megőrződik.",
		new_document_classification_use_source_document: "Forrásdokumentum használata:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} típus ikon",
		repository_name_and_type: "${0} neve és típusa",
		select_class_label: "${0} kijelölése",

		// View toggle buttons
		detail_view_button_tooltip: "Részletek nézet",
		detail_view_button: "Részletek",
		magazine_view_button_tooltip: "Magazin nézet",
		magazine_view_button: "Magazin",
		filmstrip_view_button_tooltip: "Diafilm nézet",
		filmstrip_view_button: "Diafilm",

		magazine_view_show: "Megjelenítés Magazin nézetben",
		detail_view_show: "Megjelenítés Részletek nézetben",

		total_count_item: "elem",
		total_count_items: "elem",
		total_count_more_items: "Több, mint ${0} elem",

		extension_changed: "A kiválasztott fájl kiterjesztése nem egyezik meg az eredeti fájl kiterjesztésével.  Válasszon egy másik fájlt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "A kiválasztott megjelenítő nem támogatja az összes fájltípust. Ha menti ezt a megjelenítő leképezést, akkor problémákba ütközhet egyes dokumentumok megtekintésekor. Javasoljuk, hogy válasszon olyan megjelenítőt, amely minden fájltípust támogat, ha ki van jelölve az Összes fájltípus beállítási lehetőség.<br><br><b>Tipp:</b> A következő megjelenítők támogatják az összes fájltípust:<ul><li>Kisalkalmazás megjelenítő</li><li>AJAX megjelenítő</li><li>HTML átalakító</li><li>PDF átalakítás</li><li>Webböngésző</li></ul>",
		file_type_any: "Minden fájltípus",
		file_type_any_hover: "Válassza ezt a lehetőséget, ha a kiválasztott megjelenítőt kívánja használni minden dokumentum megtekintéséhez, függetlenül annak fájltípusától. Ezt a beállítási lehetőséget a következő megjelenítők támogatják:<br><br><ul><li>Kisalkalmazás megjelenítő</li><li>AJAX megjelenítő</li><li>HTML átalakító</li><li>PDF átalakítás</li><li>Webböngésző</li></ul><br><br><b>Ne feledje:</b> Ha többnyire külön meghatározott jelenítőket kíván használni, akkor helyezze a megjelenítő kiosztás végére mindazokat a leképezéseket, amelyek ezt a beállítást alkalmazzák. ",
		file_type_input: "Új fájltípus:",

		mime_type_input: "Új MIME típus:",
		mime_type_input_invalid: "Az új MIME típus nem tartalmazhatja a következő karaktereket: ,",
		mime_type_available: "Elérhető MIME típusok",
		mime_type_selected: "Kiválasztott MIME típusok",
		file_type_input: "Új fájltípus:",
		file_type_input_invalid: "Az új fájltípus nem tartalmazhatja a következő karaktereket: ,",
		file_type_available: "Rendelkezésre álló fájltípusok",
		file_type_selected: "Kiválasztott fájltípusok",
		file_type_header: "Fájltípus",
		viewer: "Megjelenítő:",
		viewer_viewer: "Megjelenítő",
		viewer_view: "Nézet",
		viewer_preview: "Előnézet",
		viewer_merge_and_split: "Összefésülés és felosztás",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Csak előnézet",
		preview_only_label: "(előnézet)",
		preview_only_hover: "Ezt a megjelenítési leképezést csak akkor használja a rendszer, amikor a felhasználó az <b>Előkép</b> lehetőségre kattint.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Ez a lerakat nem támogatja a tallózást. Válasszon másik lerakatot.",

		repository_community_teamspace_message: "Már másik lerakat ki lett jelölve közösségi könyvtár lerakatkén. Ha a meglévő lerakatot kívánja használni továbbra is közösségi könyvtár lerakatként, akkor válassza ki a <b>Nem</b> lehetőséget a módosítások mentése előtt annak megakadályozása érdekében, hogy a meglévő lerakatot a rendszer lecserélje erre a lerakatra.",

		favorites_empty: "Még nem rendelkezik kedvencekkel.",
		syncItems_empty: "Még nem rendelkezik szinkronizált fájlokkal.",

		root_folder_id: "Gyökérmappa azonosítója",
		unified_searches: "Lerakatok közötti keresések:",
		max_results: "Eredmények száma:",
		direct_retrieve_enabled: "Közvetlen lekérés:",
		itemTypesToDisplay: "Megjelenítendő elemtípusok:",
		allItemTypes: "Minden elemtípus",
		include_attr_group_name: "Attribútumcsoport leírások attribútumok megjelenő nevében:",
		admin_repcfg_include_attr_group_name_hover: "Az attribútumcsoport leírások alapértelmezésben szerepelnek az attribútumcsoport-attribútumok nevében. Ennek segítségével a felhasználók az attribútumok kezelése során láthatják, hogy egy attribútumcsoport-attribútum melyik attribútumcsoporthoz tartozik.<br>Például a felhasználók a következő attribútumcsoport-attribútum nevet láthatják: Document Settings.Document Type.<br><br>Ha tiltja ezt a beállítást, akkor az attribútumcsoport-attribútumhoz csak az attribútum leírása kerül felhasználásra.<br>Például a felhasználók a következő nevet fogják látni: Document Type.<br><br>Az attribútumcsoport leírása nélkül a felhasználók nem tudják megállapítani, hogy a Document Type egyszerű attribútum vagy attribútumcsoport-attribútum.",
		documentItemTypesOnly: "Csak dokumentum típusú elemek",
		object_store: "Objektumtároló szimbolikus neve:",
		object_store_display_name: "Objektumtároló megjelenő neve:",
		teamspaceUpgradeMsg: "A csoportterületei frissítésre kerülnek, amikor menti a lerakat konfigurációját. Ha sok csoportterülettel rendelkezik, akkor a frissítés több percig is eltarthat.",
		synchUpgradeMsg: "A lerakathoz tartozó szinkronizációs modul frissítve lesz, amikor menti a lerakatkonfigurációt.",
		protocol: "Protokoll:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS lerakat azonosítója:",
		cmis_url: "CMIS AtomPub kötési szolgáltatás dokumentum URL:",
		trace_level: "Nyomkövetési szint",
		trace_dir: "Nyomkövetési könyvtár",
		temp_dir: "Ideiglenes katalógus",
		show_document_location: "Dokumentum helyének megjelenítése",
		max_folders: "Mappák maximális száma",
		afp_conversion: "AFP átalakítás",
		line_conversion: "Soradat átalakítás",
		max_hits: "Találatok maximális száma",
		folder_search_expresssion: "Mappa keresési kifejezések",
		max_item_types: "Elemtípusok maximális száma",
		max_worklists: "Feladatlisták maximális száma",
		update_storage_collection: "Tárgyűjtemény frissítése",
		include_mime_types_in_search_results: "A találatok tartalmazzák a MIME típusokat",
		object_type: "Objektum típusa",
		object_type_document: "Dokumentumok",
		object_type_folder: "Mappák",
		file_label: "Fájl:",
		plugin_jarfile_path_label: "JAR fájl elérési útja:",
		plugin_classfolder_path_label: "Osztályfájl elérési útja:",
		plugin_classname_label: "Osztály neve:",
		plugin_id_label: "Bedolgozó azonosítója:",
		class_label: "Osztály",
		configuration: "Beállítás",
		connect_repository: "Csatlakozás...",
		server_type: "Kiszolgáló típusa",
		timeout_in_seconds: "Időkorlát (másodperc):",
		default_search_template: "Alapértelmezett keresés",
		search_filtered_properties: "Kereshető tulajdonságok",
		property_contains_label: "Tulajdonság tartalmazza",
		class_contains_label: "Osztály tartalma:",
		search_filtered_operators: "Keresési operátorok",
		default_search_results: "Keresési eredmények",
		data_type: "Adattípus",
		status_bar: "Állapotsor",
		operators_for: "Operátorok a következőhöz:",
		currentUser: "Aktuális felhasználó",
		nameContains: "Név tartalmazza",
		searchFor: "Keresés",
		server_autentication: "Kiszolgáló hitelesítés (OAuth 2.0 JWT)",
		standard_authentication: "Szabványos hitelesítés (3- lábú OAuth 2.0)",
		developer_authentication: "Fejlesztői hitelesítés",
		enterprise_id: "Vállalatazonosító:",
		public_key_id: "Nyilvános kulcs azonosító:",
		private_key_path: "Privát kulcs elérési út:",
		server_user_email: "Felhasználói e-mail kiszolgáló",

		filter_builder_tooltip: "Szűrő meghatározása",

		// Launch bar
		launchbar_home: "Saját könyvtár megnyitása",
		launchbar_favorites: "Kedvencek megnyitása",
		launchbar_browse: "Tallózás nézet megnyitása",
		launchbar_browse_popup: "Tallózás előugró lista megnyitása",
		launchbar_search: "Keresés nézet megnyitása",
		launchbar_search_popup: "Keresés előugró lista megnyitása",
		launchbar_teamspaces: "Csoportterületek nézet megnyitása",
		launchbar_teamspaces_popup: "Csoportterületek előugró lista megnyitása",
		launchbar_work: "Munka nézet megnyitása",
		launchbar_work_popup: "Munka előugró lista megnyitása",
		launchbar_entry_templates: "Adatbeviteli sablonok nézet megnyitása",
		launchbar_entry_templates_popup: "Adatbeviteli sablon előugró lista megnyitása",
		launchbar_admin: "Adminisztráció nézet megnyitása",

		admin_sync_server: "Szinkronizálási szolgáltatások",
		admin_settings: "Beállítások",
		admin_interface_text: "Címkék",
		admin_interface_text_desktop: "Munkaasztal:",
		admin_desktops: "Munkaasztalok",
		admin_repositories: "Lerakatok",
		admin_mobile: "Mobil",
		admin_menus: "Menük",
		admin_reason_codes: "Szerkesztés okai",
		admin_plugins: "Bedolgozók",
		admin_plugins_state_enabled: "A bedolgozó engedélyezett",
		admin_plugins_state_disabled: "A bedolgozó tiltott",
		admin_plugins_version: "Változat:",
		admin_plugins_version_heading: "Változat",
		admin_plugins_icon: "Bedolgozó ikon",
		admin_viewer_mapping_icon: "Megjelenítő leképezése ikon",
		admin_viewer_defs: "Megjelenítő leképezések",
		admin_viewer_dialog_title: "Leképezés",
		admin_viewer_dialog_new_title: "Új leképezés",
		admin_viewer_dialog_instructions: "A leképezés határozza meg, hogy melyik megjelenítővel történjen a lerakat fájlok megnyitása. Több leképezést is létrehozhat, ha külön megjelenítőket kíván hozzárendelni az eltérő fájltípusokhoz. Leképezés meghatározásához használhat MIME típust vagy fájlkiterjesztést is. A fájlkiterjesztéseket használó leképezések dokumentumnevekre lesznek leképezve. Például egy gif fájltípusra beállított leképezés olyan dokumentumnevekre lesz leképezve, amelyek .gif kiterjesztéssel végződnek.",
		admin_desktop_viewer_defs: "Megjelenítő leképezés:",
		admin_desktop_viewer_defs_hover: "A megjelenítő kiosztás határozza meg, hogy melyik megjelenítővel történjen a különböző típusú lerakat dokumentumok megnyitása.<br><br>Új megjelentő kiosztások az adminisztrációs eszköz <b>Megjelenítő leképezések</b> részében határozhatók meg.",
		admin_desktops_used: "Munkaasztalokon használt",
		admin_desktop_additional_settings: "További beállítások:",
		admin_default_desktop: "Beállítás alapértelmezett munkaasztalként",
		admin_default_desktop_header: "Alapértelmezett munkaasztal",
		admin_layout_tab_title: "Elrendezés",
		admin_desktop_icon: "Munkaasztal ikon",

		// Themes
		admin_themes: "Témák",
		admin_theme_list_instructions: "Létrehozhat egy témát, hogy egyszerűbb legyen személyre szabni a webes ügyfelet a szervezethez. Létrehozhat több témát, ha más számokat, betűtípusokat vagy logókat kíván használni a környezet különböző munkaasztalaihoz.<br><br>A témát létrehozás után alkalmazhatja egy munkaasztalra a téma beállításával a munkaasztal <b>Megjelenés</b> lapján.",
		admin_theme_instructions: "Hozzon létre egy témát a webes ügyfélen megjelenített színek és betűtípusok szabályozása érdekében. Ezen felül a téma segítségével módosíthatja a naplót, az alkalmazás nevét és a copyright szövegét, amely megjelenik a naplóban az oldalon és a fejléccsíkon.",
		admin_theme_heading: "Téma: <b>${0}</b>",
		admin_new_theme: "Új téma",
		admin_text_theme: "Téma",
		admin_delete_confirmation_themes: "Kívánja törölni a kiválasztott témákat?\n${0} téma van kiválasztva.",
		admin_theme_color: "Szín",
		admin_theme_text: "Szöveg",
		admin_theme_solid: "Egyszerű",
		admin_theme_gradient: "Színátmenet",
		admin_theme_box: "Box",
		admin_theme_color_label: "Szín ${0}:",
		admin_theme_name_invalid: "A téma nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "A témaazonosítónak egyedinek kell lennie, és a téma mentése után nem módosítható.<br><br>Az azonosító csak alfanumerikus karaktereket tartalmazhat.",
		admin_theme_name_hover: "A név nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatikus",
		admin_theme_logo_url_hover: "Adja meg a logó fájl URL címét. Ha a logó ugyanazon a webalkalmazás-kiszolgálón található, mint a webes ügyfél, akkor relatív URL címet adjon meg, például: /mycustomizations/banner_logo.png<br><br>Ajánlott, hogy a logó háttere áttetsző legyen.",
		admin_theme_color_palette_title_heading: "Színpaletta",
		admin_theme_color_palette_help_text: "Hozza létre a színpalettát a témához a hexadecimális érték vagy a színválasztó használatával. Tetszőleges számú színt megadhat.",
		admin_theme_color_add_button_label: "Szín hozzáadása",
		admin_theme_color_remove_button_label: "Szín eltávolítása",
		admin_theme_global_title_heading: "Alkalmazás szintű elemek",
		admin_theme_global_font: "Betűtípuscsalád:",
		admin_theme_global_font_hover: "Válassza ki a webes felületen használni kívánt betűkészletet. A betűkészletek elsőbbségi sorrendben jelennek meg. A listában lévő következő betűtípus csak akkor kerül alkalmazásra, ha az előző betűkészlet nincs telepítve az ügyfélgépen.",
		admin_theme_global_framework_color_label: "Keretrendszer színe:",
		admin_theme_global_framework_color_hover: "Válassza ki a következő elemekhez használni kívánt színt:<ul><li>Címsorok a párbeszédablakokon</li><li>A kiemelőszín a kiválasztott lap tetején</li><li>A tartalomlista nézet ikonok (Részletes nézet, Magazin nézet, Diafilm nézet)</li></ul><br>Ez a szín nem kerül alkalmazásra a webes ügyfél részei közötti elválasztókhoz. Ha módosítani kívánja az elválasztók színét, akkor létre kell hozni egy bedolgozót egyéni CSS fájl biztosítása érdekében.",
		admin_theme_color_global_toolbar: "Globális eszköztár szín:",
		admin_theme_color_global_toolbar_hover: "Ha megadja a globális eszköztárat a webes ügyfélen, akkor válassza ki az eszköztár színét.<br><br><b>Tipp:</b> Az eszköztár a fejléccsíkon jelenik meg a webes ügyfél tetején, így az eszköztár színének a fejléccsík színének komplementerének kell lennie.",
		admin_theme_global_selected_color: "Kiválasztott elem színe:",
		admin_theme_global_selected_color_hover: "Válassza ki a színt, amely a böngészőfában, a keresési fában és a tartalomlistában kiválasztott elemekhez kerül kiválasztásra.<br><br>A lebegési szín (ez a szín akkor kerül felhasználásra, amikor a felhasználó egy elem fölé húzza az egeret) ebből a színből kerül származtatásra.",
		admin_theme_global_link_color: "Hivatkozás színe:",
		admin_theme_global_link_color_hover: "Válassza ki a webes ügyfélen a kattintható URL címekhez használni kívánt színt. Ez a szín például a webes ügyfélen megjelenített További tudnivalók hivatkozásokon kerül felhasználásra.",
		admin_theme_login_title_heading: "Bejelentkezési oldal elemei",
		admin_theme_page_background_label: "Bejelentkezési oldal háttérszíne:",
		admin_theme_login_page_background_hover: "Válassza ki a bejelentkezési ablakrész mögött megjelenítendő színt.",
		admin_theme_login_pane_background_label: "Bejelentkezési ablakrész háttérszíne:",
		admin_theme_login_pane_background_hover: "Válassza ki a bejelentkezési ablakrészhez megjelenítendő színt. Ennek a színnek a bejelentkezési oldal háttérszínének a komplementerének kell lennie.",
		admin_theme_text_color: "Szöveg színe:",
		admin_theme_login_pane_text_color_hover: "Válassza ki a bejelentkezési ablakrész szövegéhez használandó színt. Ez a szín kerül felhasználásra az üdvözlő szöveghez és a mezőcímkékhez. Ennek a színnek olvashatónak kell lennie a bejelentkezési ablakrész háttérszínén.",
		admin_theme_copyright_text: "Copyright szövege:",
		admin_theme_copyright_text_hover: "Adja meg, hogy a copyright szövege megjelenjen-e a bejelentkezési oldalon.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Nincs copyright szöveg",
		admin_theme_banner_title_heading: "Fejléccsík elemei",
		admin_theme_text_icons_color: "Szöveg és ikon színe:",
		admin_theme_icon_color_label: "Ikon színe:",
		admin_theme_shadow_label: "Árnyék:",
		admin_theme_banner_text_icons_hover: "Válassza ki a fejléccsíkon lévő szöveghez és ikonokhoz használandó színt. Ennek a színnek olvashatónak kell lennie a fejléccsík háttérszínén.",
		admin_theme_banner_product_name_label: "Termék neve:",
		admin_theme_banner_product_name_hover: "Munkaasztal létrehozásakor megadhat egy egyéni nevet, amely megjelenik az alkalmazáshoz. Ha nem ad meg egyedi nevet, akkor az IBM Content Navigator kerül felhasználásra terméknévként. Adja meg, hogy a munkaasztalon megadott alkalmazásnév kerüljön felhasználásra vagy egy képfájl a név helyett.",
		admin_theme_banner_product_name_desktop_defined_label: "Munkaasztalon lévő név használata",
		admin_theme_banner_product_name_image: "Egyéni logó (URL) használata",
		admin_theme_background_color_label: "Háttérszín:",
		admin_theme_style_label: "Stílus:",
		admin_theme_banner_color_hover: "Válassza ki az alkalmazás tetején lévő fejléccsíkhoz használni kívánt színt.<br><br><b>Javaslat:</b>Győződjön meg róla, hogy a fejléccsík szövegéhez megadott szín olvasható a fejléc hátterén.",
		admin_theme_buttons_title_heading: "Gombok",
		admin_theme_navigation_title_heading: "Navigációs elemek",
		admin_theme_navigation_icon_selected_label: "Kiválasztott ikon színe",
		admin_theme_navigation_background_hover: "Válassza ki a szolgáltatás navigációs sorának hátteréhez használandó színt.",
		admin_theme_navigation_icon_color_hover: "Válassza ki a szolgáltatás navigációs során lévő ikonokhoz használandó színt. Amikor az alapértelmezett elrendezést használja a munkaasztalon, ennek a színnek kontrasztban kell lennie a szolgáltatás legördülő menüjének hátterével. Amikor a klasszikus elrendezést használja a munkaasztalon, ennek a színnek kontrasztban kell lennie a szolgáltatás navigációs sáv hátterével. ",
		admin_theme_navigation_icon_selected_hover: "Válassza ki a szolgáltatás navigációs sorában kijelölt szolgáltatáshoz használandó színt. A színnek a szolgáltatás navigációs sorának háttérszínének és ikonjainak komplementerének kell lennie.<br><br>Amikor a klasszikus elrendezést használja a munkaasztalon, ez a szín használatos a szolgáltatás navigációs sáv lebegtetési színeként. ",
		admin_theme_button_background_color_hover: "Válassza ki a gomb háttérszínét.",
		admin_theme_button_style_hover: "Válassza ki a gomb stílusát.",
		admin_theme_button_text_icon_color_hover: "Válassza ki a gombok szövegéhez és képeihez használandó színt.",
		admin_theme_no_logo_label: "Nincs logó",
		admin_theme_custom_logo_label: "Egyéni logó (URL)",
		admin_theme_banner_type: "Fejléccsík kitöltési stílus:",
		admin_theme_banner_type_hover: "Adja meg, hogy a fejléc egyszínű vagy átmenetes lesz-e. Ha átmenetes fejlécet választ, akkor a fejléchez megadott szín az átmenet legsötétebb színe lesz.<br><br><b>Javaslat:</b>Győződjön meg róla, hogy a fejléccsík szövegéhez megadott szín olvasható a fejléc hátterén.",
		admin_theme_icon: "Téma ikon",
		admin_theme_buttons_and_links_title_heading: "Gombok, mezők és hivatkozások",
		admin_theme_button_style_label: "Gomb stílusa:",
		admin_theme_theme_style_label: "Téma stílusa:",
		admin_theme_theme_style_hover: "Válassza ki a stílust, amelyen a téma alapul. A stílust bármikor módosíthatja egy téma létrehozásakor vagy szerkesztésekor. Amikor átvált egy stílusról egy másikra, a témabeállítások visszaállításra kerülnek az alapértelmezett értékekre.",
		admin_theme_accent_color_label: "Hangsúly színe:",
		admin_theme_accent_color_hover: "Válassza ki a párbeszédablak felső részén lévő sávhoz és a betöltés léptetőhöz használandó színt.",
		admin_theme_global_toolbar_text_color_label: "Globális eszköztár szövegszín:",
		admin_theme_global_toolbar_text_color_hover: "Ha megadja a globális eszköztárat a webes ügyfélben, akkor válassza ki az eszköztárban lévő szöveghez használandó színt.",
		admin_theme_banner_text_color_hover: "Válassza ki a fejléccsíkon lévő szöveghez használandó színt.",
		admin_theme_banner_icon_color_hover: "Válassza ki a fejléccsíkon lévő ikonokhoz használandó színt.",
		admin_theme_button_color_label: "Szín:",
		admin_theme_button_color_hover: "Válassza ki a következő elemekhez használni kívánt színt:<ul><li>Címsorok a párbeszédablakokon</li><li>A kiemelőszín a kiválasztott lap tetején</li><li>A tartalomlista nézet ikonok (Részletes nézet, Magazin nézet, Diafilm nézet)</li><li>Gombok, mezők és hivatkozások</li></ul>Ebből a színből kerül származtatásra az a szín, amely akkor kerül alkalmazásra, amikor a felhasználó egy elem fölé húzza az egeret. Ez a szín nem kerül alkalmazásra a webes ügyfél részei közötti elválasztókhoz. Ha módosítani kívánja az elválasztók színét, akkor létre kell hozni egy bedolgozót egyéni CSS fájl biztosítása érdekében.",
		admin_theme_theme_style_col_header: "Témastílus",

		admin_syncserver_consistency_checker: "Konzisztenciaellenőrző:",
		admin_syncserver_consistency_checker_hover: "A konzisztenciaellenőrző futtatásával ellenőrizheti, hogy a szinkronizációs adatbázis a kiszolgáló összes elemének állapotáról az aktuális információt tartalmazza. Futtatható például a konzisztenciaellenőrző a szinkronizációs adatbázis kiesése után a lerakaton a kiesés során frissített dokumentumokkal kapcsolatos információk lekéréséhez.",
		admin_syncserver_consistency_checker_button: "Konzisztenciaellenőrző futtatása",
		admin_syncserver_consistency_checker_started: "Elindítva:",
		admin_syncserver_consistency_checker_ended: "Leállítva:",
		admin_syncserver_consistency_checker_duration: "Időtartam:",
		admin_syncserver_consistency_checker_items_processed: "Feldolgozott szinkronizációs elemek:",
		admin_syncserver_consistency_checker_items_processed_success: "Sikeresen feldolgozott szinkronizációs elemek:",
		admin_syncserver_consistency_checker_items_discovered: "Új feltérképezett lerakatelemek:",
		admin_syncserver_consistency_checker_change_updates: "Összes frissítés:",
		admin_syncserver_consistency_checker_state: "Állapot:",
		admin_syncserver_consistency_checker_state_done: "Kész",
		admin_syncserver_consistency_checker_state_running: "Futó",
		admin_syncserver_consistency_checker_user: "Elküldő:",
		admin_syncserver_consistency_checker_scheduled: "Ütemezve:",

		admin_syncserver_dbcleanup: "Adatbázis tisztítása",
		admin_syncserver_dbcleanup_hover: "Futtassa az adatbázis-tisztító eszközt azoknak a már nem használt eszközöknek és elemeknek az eltávolítására, amelyek már nem kerülnek szinkronizálásra az adatbázisból.",
		admin_syncserver_dbcleanup_button: "Adatbázis tisztítása",
		admin_syncserver_dbcleanup_state_done: "Kész",
		admin_syncserver_dbcleanup_state_running: "Futó",
		admin_syncserver_dbcleanup_started: "Elindítva:",
		admin_syncserver_dbcleanup_ended: "Leállítva:",
		admin_syncserver_dbcleanup_state: "Állapot:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Törölt lerakat:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Törölt szinkronizált elem:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Törölt eszköz:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Lejárt eszköz:",

		admin_syncserver_publicSyncUrl: "Szinkronizálási szolgáltatások nyilvános URL címe:",
		admin_syncserver_publicSyncUrl_hover: "Az URL-lel adja meg, melyik lerakatok kommunikálhatnak az IBM Content Navigator szinkronizálási szolgáltatásaival. Az URL alapértelmezett formátuma: http://szinkronizálási_nyilvános_URL:portszám/sync/notify.",

		admin_syncserver_managed: "Szinkronizálási ügyfél beállításai:",
		admin_syncserver_managed_hover: "A felhasználók nem módosíthatják ezeket a beállításokat az IBM Content Navigator Sync ügyfélben.",
		admin_syncserver_managed_subfolder: "Szinkronizálandó mappaszintek",
		admin_syncserver_managed_subfolder_hover: "Ha egy felhasználó mappát szinkronizál, akkor megadja a szinkronizálandó mappák maximális számát. Például ha a felhasználó 3 mappaszintet ad meg, akkor a szinkronizálásban a felhasználó által szinkronizált mappa és 2 almappa-szint vesz részt.<br><br>Győződjön meg róla, hogy a környezet képes kezelni a beállítás által okozott szinkronizálási forgalmat.",
		admin_syncserver_managed_subfolder_all: "Összes almappa",
		admin_syncserver_managed_subfolder_none: "Nincsenek almappák",
		admin_syncserver_managed_subfolder_no_more: "Korlátozott szint",
		admin_syncserver_managed_subfolder_levels: "mappák",
		admin_syncserver_managed_schedule: "Szinkronizálás ütemezése",
		admin_syncserver_managed_schedule_hover: "Győződjön meg róla, hogy a környezet képes kezelni a szinkronizálási ütemezés által okozott szinkronizálási forgalmat.<br><br>A maximális időköz 24 óra vagy 1440 perc.<br><br>A felhasználók felülbírálhatják a szinkronizálás ütemezését a <b>Szinkronizálás most</b> műveletre kattintással.",
		admin_syncserver_managed_schedule_manual: "Kézi szinkronizálás",
		admin_syncserver_managed_schedule_continuous: "Szinkronizálás folyamatosan",
		admin_syncserver_managed_schedule_every: "Szinkronizálás a megadott időtartamban",
		admin_syncserver_managed_schedule_minutes: "Perc",
		admin_syncserver_managed_schedule_hours: "Óra",

		// redaction codes
		admin_new_reason_code: "Új szerkesztési ok",		
		admin_reason_code_name_invalid: "A szerkesztési ok neve nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "A leírás nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "A leírás nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "A név nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Leírás:",
		admin_reason_code_applications_hover: "A szerkesztési okra hivatkozó Datacap alkalmazások listája.",
		admin_reason_code_applications: "Datacap alkalmazások",
		admin_delete_confirmation_reason_codes: "Kívánja törölni a kiválasztott szerkesztési okokat?",
		admin_delete_confirmation_reason_code: "Kívánja törölni a kiválasztott szerkesztési okot?",
		admin_reason_code_heading: "Szerkesztési ok: <b>${0}</b>",
		admin_reason_code_list_instructions: "A szerkesztési okok jelzik, hogy az érzékeny adatok miért vannak védve a megtekintéstől elhomályosítással. Minden ok az érzékeny adatok egy típusát azonosítja, amely el van rejtve az általános felhasználók elől.",
		admin_reason_code_instructions: "Az érzékeny adatok minden egyes típusához létrehozhat egy szerkesztési okot. Ezután ezt az okot felhasználhatja egy szerkesztési irányelvben annak meghatározásához, hogy ki láthatja az adott adatot, és ki hozhat létre vagy módosíthat szerkesztéseket.",
		admin_reason_code_applications_label: "Datacap alkalmazások",
		admin_reason_code_repositories: "Lerakatok",
		admin_reason_code_repositories_label: "Lerakatok",
		admin_reason_code_repositories_hover: "Az ICN lerakatok listája, amelyek hivatkoznak erre a szerkesztési okra.",
		admin_reason_code_repositories_default_value: "Nincs beállítva",
		admin_reason_code_description_label: "Leírás",
		admin_reason_code_applications_default_value: "Nincs beállítva",
		admin_redaction_reasons: "Szerkesztés okai",
		admin_redactions: "Szerep alapú szerkesztések",
		admin_redactions_policies_roles: "Irányelvek és szerepek",
		admin_reasons: "Okok",
		admin_reason_code_id: "Azonosító",
		admin_reason_code_id_hover: "Az azonosító nem szerkeszthető.  Átmásolható a vágólapra.",
		// Role based administration
		admin_rba: "Szerepköralapú munkaasztali adminisztráció",
		admin_rba_mobile_access_enabled: "Ezen a munkaasztalon engedélyezett a mobileszközök hozzáférése.",
		admin_rba_mobile_access_disabled: "Ezen a munkaasztalon nem engedélyezett a mobileszközök hozzáférése.",
		admin_rba_confirm_delete_multiple: "Kívánja törölni a kiválasztott adminisztrációs szerepköröket?",
		admin_rba_confirm_delete_single: "Kívánja törölni a kiválasztott adminisztrációs szerepkört?",
		admin_rba_delete_multi_role_desktop: "Legalább egy kiválasztott szerepkör hozzá van rendelve egy munkaasztalhoz. A törlés előtt el kell távolítania a szerepkört a munkaasztalokról.",
		admin_rba_delete_single_role_desktop: "A kiválasztott szerepkör a(z) ${0} munkaasztalhoz van hozzárendelve. A szerepkör törlése előtt el kell azt távolítania a munkaasztalról.",
		admin_desktop: "Munkaasztal",
		admin_rba_instructions: "Munkaasztal adminisztrációs szerepeket hozhat létre és kezelhet, amelyek jogosultságokat rendelnek hozzá a munkaasztal adminisztrátorokhoz. ",
		admin_rba_not_used: "A(z) ${0} nincs használatban munkaasztalon.",
		admin_rba_desktops: "A(z) <b>${0} a következő munkaasztalokon van használatban: </b>",
		admin_rba_new_role: "Új szerep",
		admin_rba_name_invalid: "Az adminisztrációs szerepkör neve nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "A leírás nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "A leírás nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "A név nem tartalmazhatja a következő karaktereket: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Leírás: </b> ${0}",
		admin_rba_membership: "Tagság",
		admin_rba_general_priv: "Általános",
		admin_rba_appearance_priv: "Megjelenés",
		admin_rba_desktop_config_priv: "Munkaasztal beállítás",
		admin_rba_app_name_priv: "Alkalmazás neve",
		admin_rba_theme_priv: "Téma",
		admin_rba_viewer_map_priv: "Megjelenítő leképezés",
		admin_rba_merge_split_priv: "Összefésülés és felosztás",
		admin_rba_sync_svc_priv: "Szinkronizálási szolgáltatások",
		admin_rba_menus_priv: "Menük",
		admin_rba_edit_svc_priv: "Szerkesztési szolgáltatások",
		admin_rba_toolbars_priv: "Eszköztárak",
		admin_rba_ctx_menus_priv: "Előugró menük",
		admin_rba_office_ribbon_priv: "MS Office szalagsáv parancsok",
		admin_rba_office_menues_priv: "MS Office előugró menük",
		admin_rba_addl_settings_priv: "További beállítások",
		admin_rba_mobile_priv: "Mobil",
		admin_rba_add_doc_dlg_priv: "Dokumentum párbeszédablak hozzáadása",
		admin_rba_doc_mgmt_priv: "Dokumentumkezelés",
		admin_rba_def_redaction_priv: "Alapértelmezett szerkesztési opció",
		admin_rba_add_photos_priv: "Fotók hozzáadása fényképezőgépről és fotókönyvtárból",
		admin_rba_time_stamp_priv: "Időbélyeg",
		admin_rba_add_docs_folders_priv: "Dokumentumok hozzáadása és mappák létrehozása a lerakatban",
		admin_rba_open_docs_priv: "Dokumentumok megnyitása más alkalmazásokban",
		admin_rba_office_config_priv: "Office beállítás",
		admin_rba_tab_label_priv: "IBM ECM lap címke",
		admin_rba_feature_sel_priv: "Szolgáltatás kiválasztása",
		admin_rba_general_config_priv: "Általános konfiguráció",
		admin_rba_favorites_priv: "Kedvencek",
		admin_rba_add_options_priv: "Hozzáadási lehetőségek a Szerkesztés csoportban",
		admin_rba_browse_priv: "Tallózás",
		admin_rba_outlook_int_priv: "Outlook integráció",
		admin_rba_search_priv: "Keresés",
		admin_rba_layout_priv: "Elrendezés",
		admin_rba_case_priv: "Ügy",
		admin_rba_desktop_feat_priv: "Munkaasztali szolgáltatások",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Megjelenített szolgáltatások",
		admin_rba_branding_priv: "Cégjelzés",
		admin_rba_home_priv: "Alapkönyvtár",
		admin_rba_main_color_priv: "Fő szín",
		admin_rba_sec_color_priv: "Másodlagos szín",
		admin_rba_teamspaces_priv: "Csoportterületek",
		admin_rba_rbr_priv: "Szerep alapú szerkesztés",
		admin_rba_et_mgr_priv: "Adatbeviteli sablon kezelő",
		admin_rba_policies_roles_priv: "Irányelvek és szerepek kezelése",
		admin_rba_work_priv: "Munka",
		admin_rba_reasons_priv: "Okkódok",
		admin_rba_tasks_priv: "Aszinkron feladatok",
		admin_rba_auth_priv: "Hitelesítés",
		admin_rba_all_privs: "Minden jogosultság",
		admin_rba_some_privs: "Bizonyos jogosultságok",
		admin_rba_no_privs: "Semmilyen jogosultság",
		admin_add_users_groups_priv: "Felhasználók és csoportok hozzáadása",
		admin_url_features_priv: "URL szolgáltatások kezelése",
		admin_plugin_features_priv: "Bedolgozói szolgáltatások kezelése",
		admin_addl_components_priv: "További összetevők",
		admin_global_toolbar_priv: "Globális eszköztár",
		admin_status_bar_priv: "Állapotsor",
		admin_refresh_message: "A frissített adatok használatához frissítenie kell a böngészőt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Az alapértelmezett munkaasztal használatához frissítenie kell a böngészőt.",
		admin_desktop_refresh_message: "A munkaasztal használatához frissítenie kell a böngészőt.",
		admin_action_open: "Megnyitás",
		admin_action_edit: "Szerkesztés",
		admin_action_copy: "Másolás",
		admin_action_delete: "Törlés",
		admin_action_copy: "Másolás",
		admin_action_new: "Új létrehozása",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Az az azonosító már használatban van. Egyedi azonosítót kell megadni.",

		admin_searchable_properties_for: "Kereshető tulajdonságok a következőhöz:",
		admin_repository_new: "Új lerakat",
		admin_desktop_new: "Új munkaasztal",
		admin_desktop_file_documents: "A felhasználóknak mappákba kell menteniük az új dokumentumokat és mappákat",
		admin_desktop_file_documents_hover: "Válassza ezt a beállítást, ha meg szeretné követelni a felhasználóktól, hogy amikor elemeket adnak hozzá a lerakathoz, válasszanak egy mappát. Ha nem választja ki ezt a beállítást, akkor a felhasználók anélkül adhatnak hozzá dokumentumokat (IBM FileNet P8), illetve dokumentumokat és mappákat (IBM Content Manager), hogy azokat mappába rendeznék.",
		admin_desktop_show_security_tab: "Biztonsági beállítások megjelenítése a hozzáadási és beiktatási műveletek során",
		admin_desktop_show_security_hover: "<b>Csak IBM FileNet P8 felhasználók számára.</b>  Akkor válassza ki ezt a beállítást, ha engedélyezni kívánja a felhasználók számára a dokumentumok és mappák biztonságának szerkesztését a munkaasztalon elemek felvétele vagy beiktatása során.",
		admin_desktop_configure_security_inheritance: "A felhasználók konfigurálhatják a mappák biztonság-öröklését",
		admin_desktop_configure_security_inheritance_hover: "<b>Csak IBM FileNet P8 felhasználók számára.</b>  A beállítás kiválasztásával a felhasználók a mappák biztonság-öröklésének szabályozásával képesek lesznek a mappa elemeinek elérésére. Ha kiválasztja ezt a beállítást, akkor a felhasználók megadhatják, hogy a felhasználók vagy csoportok a biztonságot honnan örökölhetik:<ul><li>Mappából</li><li>Mappából és annak közvetlen almappáiból</li><li>Mappából és annak összes almappájából</li></ul>",
		admin_desktop_appearance: "Megjelenés",
		admin_desktop_appearance_instruction: "Személyre szabhatja a munkaasztal megjelenését a munkaasztalhoz megjelenő bejelentkezési oldal és fejléccsík módosításával.",
		admin_desktop_layout: "Elrendezés:",
		admin_desktop_layout_hover: "Az elrendezés adja meg, hogy a webes ügyfélprogramban mely szolgáltatások jelenjenek meg, és hogy a webes ügyfélprogram tartalma hogyan jelenjen meg.<br><br><b>Tipp:</b> Egyéni elrendezéseket bedolgozók létrehozásával határozhat meg. Mielőtt kiválaszthatna egy egyéni elrendezést, a bedolgozót regisztrálnia kell az adminisztrációs eszközben.",
		admin_desktop_layout_default: "Alapértelmezett",
		admin_desktop_layout_custom: "Egyéni",
		admin_desktop_enable_workflow_email: "Munkaasztal engedélyezése FileNet P8 munkafolyamat e-mail értesítésekhez",
		admin_desktop_enable_workflow_email_hover: "Csak FileNet P8 felhasználók számára. Válassza ezt a beállítást, ha engedélyezni kívánja a felhasználók számára a webes ügyfél megnyitását az URL címekről, amelyeket a Process Engine által előállított e-mail értesítések tartalmaznak.<br /><br />Ha egy munkaasztalhoz sem engedélyezi ezt a beállítást, akkor a felhasználók nem tudnak bejelentkezni a webes ügyfélbe az értesítésekben szereplő URL címekről.<br /><br />Ha több munkaasztalon engedélyezi ezt a beállítást, és több munkaasztal is megfelel az értesítésben foglalt URL címben megadott feltételeknek, akkor a webes ügyfélprogram a feltételeknek megfelelő első munkaasztalt használja. ",
		admin_desktop_prevent_create_new_search: "Felhasználók nem indíthatnak kereséseket",
		admin_desktop_prevent_create_new_search_hover: "Ez a beállítás a meglévő keresések használatára korlátozza a felhasználókat, és megakadályozza határozatlan idejű, nem optimalizált keresések indítását.</br></br>Ez a beállítás nem érinti a csoportterületeket. A csoportterületen a keresések létrehozásának jogosultságát az határozza meg, hogy a felhasználó az adott csoportterületen milyen szereppel rendelkezik.",
		admin_desktop_prevent_create_new_unified_search: "Felhasználók nem indíthatnak lerakatok közötti kereséseket",
		admin_desktop_prevent_create_new_unified_search_hover: "Ez a beállítás a meglévő lerakatok közötti keresések használatára korlátozza a felhasználókat, és megakadályozza határozatlan idejű, nem optimalizált lerakatok közötti keresések indítását.",
		admin_desktop_hide_entry_template_not_found_warning: "Figyelmeztetés elrejtése, amely akkor jelenik meg, amikor a társított adatbeviteli sablon nem található.",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Válassza ezt a beállítást, ha el szeretné rejteni a figyelmeztető üzenetet, amely az elemtulajdonságok szerkesztésekor jelenik meg, amikor az elemmel társított adatbeviteli sablon nem található.",
		admin_desktop_show_class_role_security_selection: "Lehetővé teszi, hogy a felhasználók szerepalapú védelmet állítsanak be a beviteli sablonokban ",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Csak IBM FileNet P8 felhasználók számára.</b> A beállítás kiválasztásával lehetővé teszi a felhasználók számára szerepalapú biztonságot alkalmazó beviteli sablonok beállítását a dokumentumok vagy mappák védelmének beállításakor beviteli sablonok segítségével. Ha ezt a beállítást választja, akkor a beviteli sablon szerkesztői megadhatják, hogy egy beviteli sablon esetén a szerep biztonsági objektumok alkalmazásra kerüljenek-e. ",
		admin_desktop_show_primary_multi_part: "Csak az elsődleges dokumentum megnyitása a megjelenítőben",
		admin_desktop_show_primary_multi_part_hover: "<b>Csak IBM FileNet P8 felhasználók számára.</b> A beállítás kiválasztásával csak az elsődleges dokumentumfájl kerül megnyitásra a megjelenítőben. A dokumentumokhoz több fájl is kapcsolódhat. Ez a beállítás csak a dokumentumhoz kapcsolódó elsődleges fájlt nyitja meg. ",
		admin_desktop_redaction_save_mode: "Alapértelmezett szerkesztési paraméter:",
		admin_desktop_redaction_save_mode_hover: "Válassza ki az alapértelmezett ViewONE virtuális megjelenítő szerkesztés mentési módját:</br>* A felhasználó felszólítása minden esetben a választásra: a bejegyzésen megjelenítendő párbeszédablak okoz szerkesztés módba lépést, kérdezze meg a felhasználót, hogy új verziószámként szeretné-e a beiktatást, létrehozni új dokumentumot vagy letölteni tartalmat.</br>* Beiktatás új verziószámként: mindig menti a szerkesztett tartalmat vissza a meglévő dokumentum egy új változatára.</br>* Mentés teljesen új dokumentumként: mindig menti a szerkesztett tartalmat vissza egy teljesen új dokumentumként.</br>* Letöltés és mentés az ügyfélen: szerkesztett tartalom letöltése az ügyfélrendszerre.",
		admin_desktop_redaction_save_mode_user_select: "Felhasználó felszólítása a választásra minden esetben",
		admin_desktop_redaction_save_mode_new_version: "Beiktatás új változatként",
		admin_desktop_redaction_save_mode_new_document: "Mentés teljesen új dokumentumként",
		admin_desktop_redaction_save_mode_local_content: "Letöltés és mentés az ügyfélen",

		admin_desktop_document_add_mode: "Dokumentum hozzáadása párbeszédablak:",
		admin_desktop_document_add_mode_hover: "Adja meg az IBM Content Navigator programmal létrehozott dokumentumok hozzáadásakor használandó párbeszédablakot:<ul><li>Új véglegesen szerkesztett dokumentum</li><li>Új összefésülés és felosztás dokumentum</li><li>Új Microsoft Office dokumentum</li><li>Új szerkesztési szolgáltatás dokumentum</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Dokumentum hozzáadása",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Dokumentum hozzáadása beviteli sablon segítségével",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Összefésülés és felosztás:",
		admin_desktop_merge_and_split_enable_hover: "Határozza meg, hogy a munkaasztalt elérő felhasználók összefésülhetik-e és feloszthatják-e a dokumentumokat egy támogatott megjelenítő segítségével.",

		admin_desktop_merge_and_split_show_checkin: "Felszólítja a felhasználókat tulajdonságértékek megadására, amikor módosításokat iktatnak be egy dokumentumhoz.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Ha ezt a beállítást választja, akkor megjelenik a Beiktatás párbeszédablak, amikor a felhasználók összefésülés és felosztás módosításokat iktatnak be egy dokumentumhoz.",

		admin_desktop_available_categories: "Rendelkezésre álló szolgáltatások",
		admin_desktop_selected_categories: "Kiválasztott szolgáltatások",

		admin_layout_banner_title: "Fejléccsík és Bejelentkezési oldal",
		admin_layout_title: "Elrendezés",

		admin_desktop_application_name: "Alkalmazás neve:",
		admin_desktop_application_name_hover: "Adja meg a fejléccsíkban megjelenítendő alkalmazásnevet.<br><br>Tipp: A Címkék / Asztali címkék lapon meghatározhat alkalmazásnevet más nyelvekhez.",
		admin_desktop_theme: "Téma:",
		admin_desktop_theme_hover: "Adja meg, hogy az adott munkaasztalhoz az alapértelmezett IBM Content Navigator téma kerüljön felhasználásra, vagy egy egyéni téma. Egyéni téma használatához létre kell hozni egy témát az adminisztrációs eszköz <b>Témák</b> részében.",
		admin_desktop_login_logo: "Bejelentkezési oldal logó:",
		admin_desktop_login_logo_hover: "Ha módosítani kívánja a bejelentkezési oldalon megjelenített logót, akkor megadhatja egy logó fájl URL címét. Ajánlatos azonban egyéni témát használni a logó módosításához.",
		admin_desktop_login_logo_url_hover: "Adja meg a logó fájl URL címét. Ha a logó ugyanazon a webalkalmazás-kiszolgálón található, mint a webes ügyfél, akkor relatív URL címet adjon meg, például: /mycustomizations/login_logo.png<br><br>A logó nem lehet nagyobb, mint 200 képpont széles és 150 képpont magas.<br><br>Ajánlott, hogy a logó háttere áttetsző legyen.",
		admin_desktop_banner_logo: "Fejléccsík logó:",
		admin_desktop_banner_logo_hover: "Ha módosítani kívánja a fejléccsíkon megjelenített logót, akkor megadhatja egy logó fájl URL címét. Ajánlatos azonban egyéni témát használni a logó módosításához.",
		admin_desktop_banner_logo_url_hover: "Adja meg a logó fájl URL címét. Ha a logó ugyanazon a webalkalmazás-kiszolgálón található, mint a webes ügyfél, akkor relatív URL címet adjon meg, például: /mycustomizations/banner_logo.png<br><br>A logó nem lehet nagyobb, mint 72 képpont széles és 36 képpont magas.<br><br>Ajánlott, hogy a logó háttere áttetsző legyen.",
		admin_desktop_banner_background_color: "Fejléccsík háttérszíne:",
		admin_desktop_banner_background_color_hover: "Ha módosítani szeretné a fejléccsík háttérszínét, akkor adjon meg egy egyéni színt. Ajánlatos azonban egyéni témát használni a fejléccsík színének módosításához.",
		admin_desktop_banner_background_color_custom_hover: "Adja meg hexadecimális színkódként az alkalmazás fejléccsíkjának színét.",
		admin_desktop_banner_application_name_color: "Alkalmazásnév szövegszíne:",
		admin_desktop_banner_application_name_color_hover: "Ha módosítani szeretné az alkalmazásnév színét, akkor adjon meg egy egyéni színt. Ajánlatos azonban egyéni témát használni az alkalmazásnév színének módosításához.",
		admin_desktop_banner_application_name_color_custom_hover: "Adja meg hexadecimális színkódként az alkalmazás nevének színét.",
		admin_desktop_banner_menu_color: "Fejléccsík ikon színe",
		admin_desktop_banner_menu_color_hover: "Ha módosítja a fejléccsík háttérszínét, akkor szükséges lehet a fejléccsíkon lévő ikonok színsémájának módosítása is, hogy jobban láthatóak legyenek. Adja meg, hogy a fejléccsík ikonok világos vagy sötét változata jelenjen meg.<br><br>Ajánlatos azonban egyéni témát használni az ikonok színének módosításához.",
		admin_desktop_login_page_content: "Bejelentkezési oldal tartalma:",
		admin_desktop_login_page_content_hover: "Ha további információkat is meg szeretne jeleníteni a bejelentkezési oldalon, mint például a rendszerkimaradásokkal kapcsolatos bejelentéseket vagy azt, hogy a felhasználók hol kaphatnak segítséget a felhasználónevekkel és jelszavakkal kapcsolatban, akkor megadhatja a megjeleníteni kívánt tartalom URL címét.",
		admin_desktop_login_page_content_url_hover: "Adja meg a bejelentkezési oldal tartalmának URL címét. Ha a tartalom ugyanazon a webalkalmazás-kiszolgálón található, mint a webes ügyfél, akkor relatív URL címet adjon meg, például: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Jelszószabályok:",
		admin_desktop_password_rules_hover: "Ha a felhasználóknak további iránymutatást szeretne adni a jelszavak létrehozásához (például a korlátozott karakterek vagy a karakterek minimális száma), akkor megadhatja a jelszószabályokat tartalmazó oldal URL címét.",
		admin_desktop_password_rules_url_hover: "Adja meg a jelszószabályok tartalmának URL címét. Ha a tartalom ugyanazon a webalkalmazás-kiszolgálón található, mint a webes ügyfél, akkor relatív URL címet adjon meg, például: /mycustomizations/passwords.html",
		admin_desktop_help_url: "Végfelhasználói súgó URL címe:",
		admin_desktop_help_url_hover: "Használhatja az IBM Content Navigator termékkel együtt szállított súgót, vagy a átirányíthatja a felhasználókat egyéni súgótartalomhoz a következők valamelyikével:<br><br><ul><li>Irányítás egyéni súgórendszerhez</li><li>Súgó hozzáadása az IBM Content Navigator termékkel telepített IBM Knowledge Center-hez.</li></ul>",
		admin_desktop_help_url_url_hover: "Adja meg az egyéni súgórendszer URL címét. Az IBM Content Navigator hozzáfűzi az index.jsp?content=/com.ibm.usingeuc.doc/ tagot és egy fájlnevet a megadott URL végéhez.  Ahhoz, hogy a \"További tudnivalók\" hivatkozások működjenek a felületben, a súgórendszernek az integrált végfelhasználói súgóval egyező fájlneveket kell használnia. ",
		admin_desktop_deprecated_appearance_title: "Elavult beállítások",
		admin_desktop_deprecated_appearance_instructions: "Ha egyéni témát használ, akkor az egyéni téma felülbírálja ezeket a beállításokat. Ezeket a beállításokat egyéni témába érdemes átvinni, ami részletesebb stílusmegadást tesz lehetővé, mint a beállítások ebben a részben. Ezen felül az egyéni téma több munkaasztal által használható.",

		admin_desktop_plugins_title: "Bedolgozók engedélyezése vagy letiltása a munkaasztalhoz",
		admin_desktop_plugins_enable_all_plugins: "Minden telepített bedolgozó engedélyezése felhasználásra a munkaasztallal",
		admin_desktop_plugins_select_plugins: "Válassza ki a telepített bedolgozókat az engedélyezéshez felhasználásra a munkaasztallal",
		admin_desktop_plugins_select_plugin: "Bedolgozó kiválasztása",

		admin_desktop_layout_features: "Megjelenített szolgáltatások:",
		admin_desktop_layout_features_hover: "Válassza ki azokat a szolgáltatásokat, amelyekhez a felhasználók számára hozzáférést kíván biztosítani az adott munkaasztalról. A szolgáltatások a felsorolási sorrendjükben kerülnek megjelenítésre.<br><br>Szolgáltatás kiválasztásakor személyre szabhatja a szolgáltatás néhány tulajdonságát a munkaasztalon belül, mint például a szolgáltatáshoz kiválasztott alapértelmezett lerakat.",
		admin_desktop_layout_default_repository: "Alapértelmezett lerakat:",
		admin_desktop_layout_default_repository_layout_hover: "Adja meg, hogy melyik lerakat legyen alapértelmezésben kijelölve, amikor a felhasználó megnyitja ezt a szolgáltatást.",
		admin_desktop_layout_document_thumbnails: "Dokumentum miniatűrök:",
		admin_desktop_layout_document_thumbnails_hover: "Adja meg, hogy megjelenjenek-e a dokumentumok miniatűrjei a dokumentum információs panelén.<br><br>A miniatűrök megjelenítése ronthat a webes ügyfél teljesítményén.",
		admin_desktop_layout_show_filmstrip_view: "Diafilm nézet:",
		admin_desktop_layout_show_filmstrip_view_hover: "Adja meg, hogy a felhasználók átválthatják-e a tartalomlista megjelenítést a diafilm nézetre.<br><br>A diafilm nézet előállítja a felhasználó által kiválasztott dokumentumok előképét. A diafilm nézet használata azonban ronthatja a webes ügyfél teljesítményét. Ezen felül a dokumentumelőképek megjelenítéséhez be kell állítani a HTML átalakítás megjelenítőt.",
		admin_enabled: "Engedélyezés",
		admin_disabled: "Letiltás",
		admin_include: "Beleértve",
		admin_exclude: "Kizárva",
		admin_layout_teamspaces_default_repository: "Csoportterületek:",
		admin_layout_entry_templates_default_repository: "Adatbeviteli sablonok:",
		admin_layout_other_features_default_repository: "Keresés és tallózás:",
		admin_layout_work_default_repository: "Munka:",
		admin_layout_default_feature: "Alapértelmezett szolgáltatás:",
		admin_default_category_placeholder: "Válasszon egy szolgáltatást",
		admin_layout_default_feature_hover: "Megadja, hogy melyik szolgáltatás jelenik meg, amikor a felhasználó bejelentkezik a munkaasztalra.",
		admin_layout_default_feature_warning: "Az alapértelmezett szolgáltatás módosítása hatással lehet az alkalmazás betöltési idejére.",
		admin_layout_feature_list_header: "Szolgáltatás",
		admin_layout_show_statusbar: "Állapotsor:",
		admin_layout_show_statusbar_hover: "Megadja, hogy az állapotsor megjelenjen-e a munkaasztal alján.<br><br>Ha elrejti az állapotsort, akkor a felhasználók nem látják a nem hiba eseményekkel kapcsolatos információkat, mint például:<ul><li>A dokumentum hozzáadásra került a lerakathoz.</li><li>A keresés 59 dokumentumot adott vissza.</li></ul>",
		admin_layout_show_magazineview: "Magazin nézet:",
		admin_layout_show_magazineview_hover: "Megadja, hogy a felhasználók átválthatják-e a tartalomlista megjelenítést a magazin nézetre.<br><br>A magazin nézet növeli az egyes bejegyzések magasságát a tartalomlistában, amely csökkenti a tartalomlistában egyidejűleg megjeleníthető elemek számát.",
		admin_layout_show_detailsview: "Részletek nézet:",
		admin_layout_show_detailsview_hover: "Adja meg, hogy a felhasználók átválthatják-e a tartalomlista megjelenítést a részletek nézetre.<br><br>A részletek nézet a maximális számú sort jeleníti meg a tartalomlistában.",
		admin_feature_config_docinfopane_label: "Dokumentum információs ablakrész:",
		admin_feature_config_docinfopane_hoverhelp: "Megadja, hogy a felhasználók hozzáférhetnek-e a dokumentum információs ablakrészéhez ebben a szolgáltatásban.",
		admin_feature_config_docinfopane_default_label: "Alapértelmezett viselkedés:",
		admin_feature_config_docinfopane_expanded: "Kibontott",
		admin_feature_config_docinfopane_collapsed: "Összehúzott",
		admin_feature_config_docinfopane_expand_on_select: "Kibontás elem kiválasztása esetén",
		admin_layout_features_title: "Munkaasztali szolgáltatások",
		admin_layout_features_instructions: "Megadja, hogy mely szolgáltatások érhetők el a munkaasztalról.  Ezen felül személyre szabhatja a munkaasztalon megadott szolgáltatások viselkedését.",
		admin_layout_components_title: "További munkaasztal-összetevők",
		admin_layout_components_instructions: "A munkaasztal néhány összetevőjét letilthatja, ha személyre szabottabb felületen szeretne, vagy ha javítani kívánja a webes ügyfél teljesítményét.",
		admin_layout_featureconfig_instructions: "Válassza ki a beállítandó szolgáltatást",
		admin_layout_featureconfig_no_configuration: "Nem áll rendelkezésre szolgáltatáskonfiguráció.",
		admin_layout_featureconfig_label: "Szolgáltatás beállítása a következőhöz: ${0}",
		admin_layout_featureconfig_title: "Szolgáltatás beállítása",
		admin_layout_featureconfig_taskManagerURL: "A szolgáltatás használatához meg kell valósítania az IBM Content Navigator engedélyezését és beállítását, hogy csatlakozzon a feladatkezelő szolgáltatáshoz. Engedélyezze a feladatkezelő szolgáltatást az adminisztrációs eszköz <b>Beállítások</b> részében.",
		admin_feature_config_show_my_checkouts_label: "Saját kiiktatások ablakrész:",
		admin_feature_config_show_my_checkouts_hoverhelp: "A Saját kiiktatások ablakrészben a felhasználók kereséseket futtathatnak minden olyan elemen, amelyet egy adott lerakatból kiiktattak. Megadja, hogy a felhasználók hozzáférhetnek-e a Saját kiiktatások ablakrészhez a Saját összetevőből.<br/><br/><b>Korlátozás:</b> Ehhez a funkcióhoz szükség van arra, hogy a munkaasztalhoz hozzá legyen társítva legalább egy IBM Content Manager, IBM FileNet P8 vagy OASIS CMIS lerakat.",

		admin_feature_config_default_repository_icon_text: "Alapértelmezett lerakat",
		admin_show: "Megjelenítés",
		admin_hide: "Elrejtés",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Nem távolítható el az Adminisztrációs szolgáltatást az Adminisztrátori munkaasztalról.",
		admin_warning_label: "Figyelem:",
		admin_layout_show_globaltoolbar: "Globális eszköztár:",
		admin_layout_show_globaltoolbar_hover: "Megadja, hogy az eszköztár megjelenjen-e a munkaasztal tetején lévő fejléccsíkon.<br><br>A globális eszköztár azokat a műveleteket tartalmazza, amelyekkel a felhasználók dokumentumokat, mappákat és felfüggesztéseket adhatnak hozzá a lerakathoz. Az elérhető műveletek attól a lerakattól függenek, amelyhez csatlakozott a felhasználó.",
		admin_interface_text_name_label: "Címketípusok",

		admin_interface_text_label_description: "A webes ügyfél bizonyos területein megjelenő szöveget személyre szabhatja. A címkék a konfigurációjában található összes lerakat és munkaasztal esetében megjelenítésre kerülnek. Írja be a felületen látni kívánt szöveget az Aktuális címke< mezőbe.<br><br><b>Fontos:</b> A címkéken tett módosítások nem jelennek meg az adminisztrációs eszközben.",
		admin_interface_text_label_action: "Művelet címkék",
		admin_interface_text_label_action_description: "A művelet címkék a webes ügyfél gombjain és menüiben jelennek meg. Az egyes lerakattípusokhoz különböző művelet címkéket határozhat meg.",
		admin_interface_text_label_application: "Alkalmazás címkék",
		admin_interface_text_label_application_description: "Az alkalmazás címkék mindenhol látszanak a webes ügyfélnél.",
		admin_interface_text_label_system: "Rendszertulajdonság címkék",
		admin_interface_text_label_system_description: "A megjelenített rendszertulajdonságok lerakatonként változóak. A lerakatokban található dokumentumokhoz és mappákhoz tartozó rendszertulajdonságok megjelenített címkéit személyre szabhatja.",
		admin_interface_text_label_desktop: "Munkaasztal címkék",
		admin_interface_text_label_desktop_description: "Ha személyre szabta az alkalmazás nevét a munkaasztalon, akkor az adott nevet az angoltól eltérő nyelveken is személyre szabhatja. Az IBM FileNet P8 alkalmazásterületek neve is személyre szabható a munkaasztalon.",

		admin_interface_text_system_label: "Rendszercímke",
		admin_interface_text_current_label: "Aktuális címke",
		admin_interface_text_default_label_heading: "Alapértelmezett címke",
		admin_interface_text_default_label: "Alapértelmezett címke:",
		admin_interface_text_displayed_in_label: "Megjelenítve a következőhöz:",
		admin_interface_text_displayed_in_document_folder: "Dokumentumok és mappák",
		admin_interface_text_displayed_in_document: "Dokumentumok",
		admin_interface_text_displayed_in_folder: "Mappák",
		admin_interface_text_displayed_in_admin_application_space: "Alkalmazásterület címkéje",
		admin_interface_text_displayed_in_desktop: "Szolgáltatáscímke mobilhoz",
		admin_interface_text_displayed_in_admin_application_name: "Alkalmazás neve",

		admin_new_desktop: "Új munkaasztal",
		admin_new_repository: "Új lerakat",
		admin_new_menu: "Új menü",
		admin_new_viewer_mapping: "Új megjelenítő leképezés",
		admin_new_mapping_label: "Új leképezés",
		admin_new_icon_mapping: "Új ikonleképezés",
		admin_viewer_mapping_list_instructions: "Beállíthatja, hogy a webes ügyfél mely megjelenítőket használja a különböző típusú tartalmak megjelenítéséhez. Egy megjelenítőleképezés meghatározza, hogy mely MIME típusok legyenek társítva az egyes használni kívánt megjelenítőkkel. Ha a különböző munkaasztalokhoz különböző megjelenítőket szeretne használni, akkor több megjelenítőleképezést is létrehozhat.",
		admin_viewer_mapping_instructions: "Adja meg a fájlok megnyitásához használni kívánt megjelenítőket. Ha egyéni megjelenítőt kíván alkalmazni, akkor bedolgozóként integrálni kell azt a megjelenítőt, mielőtt hozzáadhatná a megjelenítőleképezéshez.<br><br><b>Fontos:</b> Amikor egy felhasználó megnyit egy dokumentumot, a webes ügyfél a felhasználó által használt operációs rendszer és a csatlakoztatott lerakat alapján megkeresi a megjelenítőleképezésekben az első olyan megjelenítőt, amely meg tudja nyitni a dokumentumot. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Új bedolgozó",
		admin_menu_list_instructions: "Létrehozhat személyre szabott eszköztárakat és előugró menüket, hogy szabályozza a felhasználók számára elérhető műveleteket. Az alapértelmezett menük nem szerkeszthetők, viszont másolatot készítve a meglévő menükről korlátozhatók az elérhető műveletek, vagy a bedolgozókban meghatározott egyéni műveletek is hozzáadhatók.<br><br>Ha létre kíván hozni egy új menütípust, akkor meg kell határoznia a menüt egy bedolgozóban.",
		admin_menu_id_hover: "Az azonosítónak egyedinek kell lennie, és a menü mentését követően nem módosítható.<br><br>Az azonosító csak alfanumerikus karaktereket tartalmaz, és a kis- és nagybetűk eltérőnek számítanak.",
		admin_menu_id_disabled_hover: "A menü azonosítója nem módosítható. Ha más azonosítót kíván használni, akkor új menüt kell létrehoznia.",
		admin_menu_default_instructions: "Ezt a menüt nem szerkesztheti, mert ez az alapértelmezett menü. Ha szerkeszteni szeretné ezt a menüt, akkor létre kell hoznia belőle egy másolatot.",
		admin_menu_toolbar_instructions: "Letilthatja az eszköztár számára elérhető műveleteket, vagy a bedolgozókban meghatározott egyéni műveleteket is hozzáadhatja. A műveletek rendezéséhez elválasztókat adhat hozzá az eszköztárhoz.",
		admin_menu_toolbar_custom_instructions: "Ezt az eszköztárt egy bedolgozó határozza meg. Ha szerkeszteni kívánja ezt az eszköztárt, akkor frissítse a bedolgozót, vagy készítenie róla másolatot.",
		admin_menu_context_menu_instructions: "Letilthatja az előugró menü számára elérhető műveleteket, vagy a bedolgozókban meghatározott egyéni műveleteket is hozzáadhatja. A műveletek rendezéséhez elválasztókat és almenüket adhat hozzá az előugró menühöz.",
		admin_menu_context_menu_custom_instructions: "Ezt az előugró menüt egy bedolgozó határozza meg. Ha szerkeszteni kívánja ezt az előugró menüt, akkor frissítse a bedolgozót, vagy készítenie róla másolatot.",
		admin_desktop_list_instructions: "Több munkaasztalt is létrehozhat, hogy az eltérő felhasználók mind elérhessék a szükséges tartalmakat. Például létrehozhat egy olyan munkaasztalt, amely csak a tartalmak keresését engedélyezi a felhasználóknak, illetve egy olyat, amely egyetlen lerakathoz biztosít felhasználói hozzáférést. ",
		admin_plugin_updated: "A kiválasztott bedolgozó konfigurációja változott. Ahhoz, hogy a változás érvényre jusson, frissítenie kell a böngészőjét.",
		admin_repository_ci_heading: "Content Integrator lerakat: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager lerakat: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager lerakat: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand lerakat: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS) lerakat: <b>${0}</b>",
		admin_repository_box_heading: "Box lerakat: <b>${0}</b>",
		admin_repository_generic_heading: "Lerakat: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Biztosan törli a kijelölt munkaasztalokat?\n${0} munkaasztal van kijelölve.",
		admin_delete_confirmation_menus: "Biztosan törli a kijelölt menüket?\n${0} menü van kijelölve.",
		admin_delete_confirmation_repositories: "Biztosan törli a kijelölt lerakatokat?\n${0} lerakat van kijelölve.",
		admin_delete_confirmation_viewer_mappings: "Kívánja törölni a kiválasztott megjelenítői leképezéseket?  ${0} leképezés van kijelölve.",
		admin_delete_confirmation_icon_mappings: "Biztosan törli a kijelölt ikon konfigurációkat?\n${0} ikon konfiguráció van kijelölve.",
		admin_delete_confirmation_plugins: "Biztosan törli a kijelölt bedolgozókat?\n${0} bedolgozó van kijelölve.",
		admin_delete_confirmation: "Biztosan törli a kijelölt elemeket?\n${0} elem van kijelölve.",

		admin_viewer_mapping_id_hover: "Az azonosítónak egyedinek kell lennie és, a megjelenítői leképezés mentését követően nem módosítható.<br><br>Az azonosító csak alfanumerikus karaktereket tartalmaz, és a kis- és nagybetűk eltérőnek számítanak.",
		admin_viewer_mapping_id_disabled_hover: "A megjelenítői leképezés azonosítója nem módosítható. Ha más azonosítót kíván használni, akkor új megjelenítői leképezést kell létrehoznia.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Az alapértelmezett munkaasztal nem törölhető.",

		admin_desktop_heading: "Munkaasztal: <b>${0}</b>",
		admin_menu_toolbar_heading: "Eszköztár: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Egyéni eszköztár: <b>${0}</b>",
		admin_menu_context_menu_heading: "Előugró menü: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Egyéni előugró menü: <b>${0}</b>",
		admin_plugin_heading: "Bedolgozó: <b>${0}</b>",
		admin_plugin_instructions: "A bedolgozó lehet egy JAR fájl vagy egy lefordított osztályfájl.<br/><br/><b>Fontos:</b> Az IBM Content Navigator webalkalmazás kiszolgálónak hozzá kell férnie a bedolgozó fájlhoz vagy a helyi fájlrendszeren vagy egy URL címen keresztül.",
		admin_plugin_list_instructions: "Az adminisztrációs eszköz segítségével kell bejegyeznie a webes ügyfél bedolgozóit. Ha egy bedolgozó további beállítást igényel, akkor a bedolgozó bejegyzése után megjelennek a konfigurációs paraméterek.<br /><br /><b>Fontos:</b> Ha szerkeszt egy bedolgozót, amelyre az adminisztrációs eszköz egy másik területén lévő másik bedolgozó hivatkozik (mint például egy menü), akkor problémákba ütközhet a bedolgozó viselkedésével kapcsolatban. Emellett a bedolgozók abban a sorrendben kerülnek meghívásra, ahogy azokat a lista tartalmazza. Ha egy bedolgozót egy másik előtt kell futtatni, akkor győződjön meg róla, hogy a bedolgozók a futtatás sorrendjében szerepelnek a listában.",
		admin_plugin_cannot_delete: "A kiválasztott bedolgozók nem törölhetők, mivel más bedolgozók támaszkodnak rájuk.<br/>Kiválasztott bedolgozók: ${0}<br/>Függő bedolgozók: ${1}",
		admin_plugin_cannot_disable: "A kiválasztott bedolgozók nem tilthatók le, mivel más bedolgozók támaszkodnak rájuk.<br/>Kiválasztott bedolgozók: ${0}<br/>Függő bedolgozók: ${1}",
		admin_plugin_cannot_add: "A bedolgozó nem adható hozzá, mert néhány bedolgozó, amelyektől függ, hiányzik vagy le van tiltva. Hiányzó vagy letiltott bedolgozók: ${0}",
		admin_plugin_cannot_enable: "A kiválasztott bedolgozók nem engedélyezhetők, mivel néhány bedolgozó, amelyektől függnek, hiányzik vagy le van tiltva.<br/>Kiválasztott bedolgozók: ${0}<br/>Hiányzó vagy letiltott bedolgozók: ${1}",
		admin_plugin_save_order: "Sorrend mentése",
		admin_plugin_load: "Betöltés",
		admin_plugin_load_hover: "Adja meg a bedolgozó URL címét",
		admin_plugin_file_hover: "Ha a bedolgozó JAR fájl a helyi fájlrendszeren található, akkor megadhatja a bedolgozó fájl teljes képzésű elérési útját vagy URL címét. Ha a bedolgozó JAR fájl egy távoli kiszolgálón található, akkor a bedolgozó fájl URL címét kell megadnia.",
		admin_plugin_classfolderpath_hover: "A lefordított osztályfájlnak az IBM Content Navigator webalkalmazás-kiszolgálón kell lennie.<br/><br/>Adja meg annak a mappának a teljes képzésű elérési útját, amely a lefordított bedolgozó osztályokat tartalmazza.<br/><br/>Az elérési út nem tartalmazhatja a bedolgozó osztály csomagnevét. Például a minta bedolgozó osztály alapértelmezett elérési útja Windows esetében C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Adja meg annak az osztályfájlban lévő Java osztálynak a teljes nevét, amelyet szeretne betölteni és bedolgozó osztályként meghívni.<br/>Például a minta bedolgozó esetében az osztály név: com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "A bedolgozó JAR fájl nem található a megadott URL címen. Győződjön meg róla, hogy a JAR fájl a webalkalmazás-kiszolgálón található, és hogy helyes az URL cím és a fájlnév.",
		admin_plugin_for_repository_not_loaded: "Ez a lerakat nem szerkeszthető. Nem töltődött be az a bedolgozó, amely megadja és támogatja ezt a lerakattípust. A Bedolgozók lapon szerkessze a bedolgozót annak biztosítása érdekében, hogy az megfelelően meg van állítva és betöltésre került.",
		admin_plugin_repository_types: "Lerakattípusok:",
		admin_plugin_viewers: "Megjelenítők:",
		admin_plugin_features: "Szolgáltatások:",
		admin_plugin_layouts: "Elrendezések:",
		admin_plugin_not_available: "Nem érhető el",
		admin_plugin_config_params: "Konfigurációs paraméterek:",
		admin_viewer_def_heading: "Megjelenítő leképezés: <b>${0}</b>",
		admin_users_and_groups: "Felhasználók és csoportok",
		admin_general: "Általános",
		admin_logging: "Naplózás",
		admin_authentication: "Hitelesítés",		
		admin_rolebase_role: "Szerep:",
		admin_settings_logging_instructions: "A naplózás segítségével felderítheti a webes ügyfél hibáit. A naplózás akár szűkíthető is, ha megállapította, hogy a hiba egy bizonyos Java osztály vagy adott felhasználó esetében szokott jelentkezni. A hibainformációk a webes alkalmazáskiszolgáló hibanapló fájlokba kerülnek írásra.",
		admin_settings_logging_instructions2: "<b>Hibakeresési naplózási beállításai</b><br />Ha megállapította, hogy a probléma adott ügyfélhoszton vagy egy felhasználónál lép fel, akkor elvégezheti a hibakeresési naplózást célzottan ezen a gépen vagy ennél felhasználónál. Lementheti a hibakeresési információkat az éles környezetben anélkül, hogy ez jelentősen befolyásolná a rendszer teljesítményét.<br /><br /><b>Fontos:</b> Ha megad egy ügyfél hosztszámítógépet vagy felhasználót, akkor ez a beállítás felülírja a többi naplózási beállítást. A szükséges információk lementése után állítsa a beállítást <b>Nincs</b> értékre a környezet normál naplózásának folytatásához.",
		admin_settings_export_config_hover: "Exportálja az aktuális rendszerkonfigurációs információkat egy fájlba, az IBM Support Assistant Data Collector általi felhasználásra. A fájlt a rendszer a user.home Java rendszertulajdonság által megadott helyre menti.",
		admin_logging_level: "Alkalmazásszintű naplózás:",
		admin_logging_level_hover: "A naplózási szintek befolyásolják, hogy milyen mennyiségben tároljon információkat a rendszer. A <b>Hibák</b> lehetőséget választva a lehető legkevesebb naplózási információ kerül rögzítésre. A <b>Hibakeresés</b> lehetőséget választva rögzül a legtöbb információ.<br /><br />Ne válassza a <b>Hibakeresés</b> lehetőséget éles környezetekben, kivéve, ha kifejezetten ezt kérte az IBM terméktámogatás.",
		admin_logging_level_0: "Nincs naplózás",
		admin_logging_level_1: "Hiba",
		admin_logging_level_2: "Figyelmeztetés",
		admin_logging_level_3: "Információk",
		admin_logging_level_4: "Hibakeresés",
		admin_logging_classes: "Java osztály szintű naplózás:",
		admin_logging_classes_hover: "A webes alkalmazáskiszolgáló hibanaplók alapértelmezésben az összes Java osztályt és csomagot tartalmazzák. Azonban megadhatja, hogy melyik osztályok és csomagok kerüljenek bele a naplózásba, vagy melyek kerüljenek kihagyásra a naplózásból. A webes alkalmazáskiszolgáló hibanaplók segítségével meghatározhatja a felvenni vagy kihagyni kívánt osztályokat.<br><br>Ha megállapította, hogy a hiba egy bizonyos osztályban fordul elő, akkor ezt az osztályt felveheti a naplófájlba. Amikor felvesz egy osztályt a hibanaplóba, akkor az összes többi osztály kizárásra kerül a naplófájlból.<br><br>Ha megállapította, hogy a probléma nem egy osztályban lép fel és csökkenteni kívánja a naplófájl méretét, akkor kihagyhatja az osztályt a naplófájlokból.",
		admin_logging_classes_include: "Beleértve",
		admin_logging_classes_include_all: "Minden osztály",
		admin_logging_classes_include_specified: "Adott osztályok",
		admin_logging_classes_include_specified_msg: "Adja meg a belefoglalni kívánt osztályokat.",
		admin_logging_classes_exclude: "Kizárva",
		admin_logging_classes_exclude_none: "Nincs",
		admin_logging_classes_exclude_specified: "Adott osztályok",
		admin_logging_classes_exclude_specified_msg: "Adja meg a kizárni kívánt osztályokat.",
		admin_logging_debug: "Hibakeresési naplózás a következőn:",
		admin_logging_debug_hover: "<b>Fontos:</b> Mindig tekintse át a webes alkalmazáskiszolgáló naplófájljait, mielőtt megadja egy ügyfél hosztszámítógép IP címét vagy felhasználóját. A megadott értéknek egyeznie kell a naplófájlban szereplő értékkel.",
		admin_logging_debug_none: "Nincs (alapértelmezés)",
		admin_logging_debug_host: "Ügyfélhoszt-gépek IP-cím)",
		admin_logging_debug_host_msg: "Adja meg annak vagy azoknak az ügyfélgépeknek az IP-címét, amelyeket naplózni szeretne a hibakereséshez. Az IP-címek elválasztására használjon vesszőket.<br /><br /><b>Fontos:</b> Mindig tekintse át a webes alkalmazáskiszolgáló naplófájljait egy IP-cím megadása előtt. A megadott értéknek egyeznie kell a naplófájlban szereplő értékkel.",
		admin_logging_debug_user: "Felhasználók",
		admin_logging_debug_user_msg: "Adja meg annak a felhasználónak (több is lehet) a felhasználónevét, amelyet naplózni szeretne a hibakereséshez. A felhasználónevek elválasztására használjon vesszőket.<br /><br /><b>Fontos:</b> Mindig tekintse át a webes alkalmazáskiszolgáló naplófájljait egy felhasználónév megadása előtt. A megadott értéknek egyeznie kell a naplófájlban szereplő értékkel.",

		admin_office_settings_logging_instructions: "A naplózás segítségével elháríthatja az IBM Content Navigator for Microsoft Office hibáit. A naplózás akár szűkíthető is, ha megállapította, hogy a hiba egy bizonyos osztály vagy adott felhasználó esetében szokott jelentkezni. A hibainformációk bekerülnek az alkalmazásnaplófájlokba az IBM Content Navigator for Microsoft Office ügyfél hosztszámítógépeken. ",
		admin_office_settings_logging_instructions2: "<b>Hibakeresési naplózási beállításai</b><br />Ha megállapította, hogy a probléma adott ügyfél hosztszámítógépen vagy egy IBM Content Navigator for Microsoft Office felhasználónál lép fel, akkor elvégezheti a hibakeresési naplózást célzottan ezen a gépen vagy ennél felhasználónál. Lementheti a hibakeresési információkat az éles környezetben anélkül, hogy ez jelentősen befolyásolná a rendszer teljesítményét. <br /><br /><b>Fontos:</b> Ha megad egy ügyfél hosztszámítógépet vagy felhasználót, akkor ez a beállítás felülírja a többi naplózási beállítást. A szükséges információk lementése után állítsa a beállítást <b>Nincs</b> értékre az IBM Content Navigator for Microsoft Office környezet normál naplózásának folytatásához. ",
		admin_office_logging_debug_hover: "<b>Fontos:</b> Mindig tekintse át az ügyfélszámítógép naplófájljait, mielőtt megadja egy ügyfél hosztszámítógép IP címét vagy felhasználóját. A megadott értéknek egyeznie kell a naplófájlban szereplő értékkel. ",
		admin_office_logging: "Office naplózás",
		admin_office_logging_classes: "Osztályszintű naplózás:",
		admin_office_logging_classes_hover: "Az IBM Content Navigator for Microsoft Office hibanaplók alapértelmezésben az összes osztályt és csomagot tartalmazzák. Azonban megadhatja, hogy melyik osztályok és csomagok kerüljenek bele a naplózásba, vagy melyek kerüljenek kihagyásra a naplózásból. Az ügyfélszámítógép-naplók segítségével meghatározhatja a felvenni vagy kihagyni kívánt osztályokat.<br /><br />Ha megállapította, hogy a hiba egy bizonyos osztályban fordul elő, akkor ezt az osztályt felveheti a naplófájlba. Amikor felvesz egy osztályt a hibanaplóba, akkor az összes többi osztály kizárásra kerül a naplófájlból. <br /><br />Ha megállapította, hogy a probléma nem egy osztályban lép fel és csökkenteni kívánja a naplófájl méretét, akkor kihagyhatja az osztályt a naplófájlokból. ",
		admin_office_logging_debug_hover: "<b>Fontos:</b> Mindig tekintse át az ügyfélszámítógép naplófájljait, mielőtt megadja egy ügyfél hosztszámítógép IP címét vagy felhasználóját. A megadott értéknek egyeznie kell a naplófájlban szereplő értékkel.",
		admin_office_logging_additional_settings: "További beállítások:",
		admin_office_logging_additional_settings_hover: "További beállítások megadása",
		admin_office_logging_file_size: "Naplófájl mérete",
		admin_office_logging_file_size_hover: "Megadja az IBM Content Navigator for Microsoft Office által létrehozott új naplófájlok méretét. Ha egy naplófájl eléri a maximális méretet, akkor átnevezésre kerül, nevében dátummegjelöléssel (például: ÉÉÉÉHHNN) és fájlinkrementálási számmal (például: ICNExcelAddin-20121116-5.log), majd létrejön egy új naplófájl. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Veremnyomkövetés megjelenítése a párbeszédablakokon",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "A veremnyomkövetési információkat is megjelenítheti az üzenet párbeszédablakokon a problémamegoldás elősegítése érdekében. A részletes veremnyomkövetési információk mindig megtalálhatók az IBM Content Navigator for Microsoft Office hibanaplókban, még akkor is, ha nem engedélyezi ezt a beállítást. ",

		admin_icon_state_twisty: "Állapotikonok",
		admin_icon_state_icon: "Állapot ikon",
		admin_icon_state: "Állapot",
		state_contains_label: "Állapot tartalmazza",
		admin_icon_state_instructions: "Személyre szabhatók a lerakat dokumentumai, mappái és munkaelemei mellett megjelenő ikonok.<br><br><b>Tipp:</b> Megadhatja, hogy megjelenjenek-e az állapotikonok az egyes lerakatok mellet a saját környezetben.",
		admin_icon_state_dialog_title: "Állapotikonok leképezése",
		admin_icon_state_dialog_instructions: "A kijelölt állapot hozzárendelhető a webes ügyfél előre meghatározott ikonjaihoz, illetve egyéni ikonokhoz.",

		admin_icon_mapping_twisty: "MIME típusikonok",
		admin_icon_mapping_dialog_title: "Ikonleképezés",
		admin_icon_mapping: "Ikonleképezés",
		admin_icon_mapping_instructions: "A legtöbb MIME típus hozzárendelhető a webes ügyfél előre meghatározott ikonjaihoz, illetve egyéni ikonokhoz.",
		admin_icon_mapping_list_instructions: "Személyre szabhatók a lerakatban tárolt különböző MIME típusok esetében megjelenő ikonok. A webes ügyfél a felsorolásuk sorrendjében alkalmazza az ikonokat. Ha egy MIME típus többször szerepel, akkor a MIME típushoz elsőként rendelt ikon kerül felhasználásra.",
		admin_icon_mapping_icon_label: "Milyen ikont kíván használni?",
		admin_icon_mapping_file_name: "Egyéni ikon:",
		admin_icon_mapping_file_name_heading: "Egyéni ikon",
		admin_icon_mapping_file_name_placeholder: "Adja meg az ikon URL címét",
		admin_icon_mapping_file_name_hover: "Adja meg az ikon URL címét. Ha az ikon ugyanazon a webalkalmazás-kiszolgálón található, mint a webes ügyfél, akkor relatív URL címet adjon meg. Például: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Előre meghatározott ikon:",
		admin_icon_mapping_class_name_heading: "Előre meghatározott ikon",
		admin_icon_mapping_class_name_hover: "Válasszon egyet a webes ügyfél ikonjai közül.",
		admin_icon_mapping_class_name_placeholder: "Válasszon egy ikont",

		admin_p8_instructions: "Ezek az információk közösek minden FileNet Content Manager lerakat esetében, amelyek be vannak állítva a webes ügyfélhez.",
		admin_p8_collaboration_config: "Választható FileNet Collaboration Services konfiguráció",
		admin_p8_collaboration_config_instructions: "Beállíthatja ezeket a paramétereket, ha hangolni kívánja a FileNet Collaboration Services szolgáltatásokat az IBM FileNet P8 környezethez.",
		admin_p8_use_url_incoming: "A válasz URL címek előállításához használja a bejövő kéréseken lévő URL címet:",
		admin_p8_use_url_incoming_hover: "A legtöbb FileNet Collaboration Services környezetben használhatja a bejövő kérés URL címét a válaszban lévő URL előállításához. Válassza ki az <b>Igen</b> értéket, hacsak a következő helyzetek egyike nem áll fenn a környezetben:<ul><li>Kényszeríteni akarja, hogy az ügyfélalkalmazások a FileNet Collaboration Services szolgáltatásokat adott URL címen keresztül érjék el.<li>A proxy kiszolgáló beállítások hatására a FileNet Collaboration Services érvénytelen URL címeket állítanak elő.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL:",
		admin_p8_use_url_incoming_http_hover: "Megadja az URL címet, amellyel az ügyfélalkalmazások elérik a FileNet Collaboration Services szolgáltatásokat http://FNCSserver:portszám formátumban.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL:",
		admin_p8_use_url_incoming_https_hover: "Ha a FileNet Collaboration Services SSL használatára van beállítva, akkor https://FNCSserver:portszám formátumban adja meg a HTTPS URL címet, amellyel az ügyfélalkalmazások elérik a FileNet Collaboration Services szolgáltatásokat",
		admin_p8_hide_email_addresses: "Felhasználói e-mail címek elrejtése a kiszolgálóválaszokban:",
		admin_p8_hide_email_addresses_hover: "Elrejtheti a felhasználói e-mail címeket a kiszolgálóválaszokban, ha meg kell felelnie az adatvédelmi irányelveknek. Például elrejtheti a felhasználói e-mail címek listáját, amikor a kiszolgáló a dokumentumot létrehozó vagy szerkesztő felhasználókkal kapcsolatos dokumentumokat és információkat ad vissza.",

		admin_p8_mask_user_ids: "Felhasználói azonosítók maszkolása a naplófájlokban:",
		admin_p8_mask_user_ids_hover: "Elrejtheti a felhasználóneveket a FileNet Collaboration Services naplófájlokban, ha meg kell felelnie az adatvédelmi irányelveknek. Ha engedélyezi ezt a lehetőséget, akkor a felhasználónevek helyére kivonatérték kerül. Ez lehetővé teszi a naplófájlok biztosítását külső cégek számára, mint például az IBM, támogatási célra a felhasználónév és tevékenységrekordok veszélyeztetése nélkül.",

		admin_p8_soft_delete: "Törölt fájlok áthelyezése a helyreállítási tárolóba:",
		admin_p8_soft_delete_hover: "Amikor a felhasználók elemeket törölnek, akkor ezeket az elemek áthelyezésre kerülnek a helyreállítási tárolóba ahelyett, hogy törlésre kerülnének a lerakatból. Az elemek a helyreállítási tárolóban maradnak kiürítésükig. Ezt a beállítást a rendszer figyelmen kívül hagyja, ha a céllerakat nem támogatja a helyreállítási tárolót.<br><br><b>Korlátozás:</b> A helyreállítási tárolók IBM FileNet P8 5.2 és újabb változaton támogatottak, és Social Collaboration Base Extensions bővítmény meglétét igénylik.",

		admin_p8_download: "Tartalomletöltési HTTP gyorsítótár konfiguráció",
		admin_p8_download_instructions: "Ha az IBM FileNet Content Manager lerakatok nagy fájlokat tartalmaznak, akkor beállíthatja a Content Download HTTP Cache (CDHC) gyorsítótárat, hogy engedélyezze a FileNet Collaboration Services szolgáltatásnak a nagyméretű fájlokra vonatkozó tartalomkérések biztonságos átirányítását egy dedikált webkiszolgálóra.<br/><br/>Ehhez a szolgáltatáshoz IBM HTTP Server szükséges. Ezen felül az IBM HTTP Server httpd.conf fájlt is frissíteni kell.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Megadja, hogy a Content Download HTTP Cache (CDHC) engedélyezett-e a környezet összes IBM FileNet Content Manager lerakatán. Megadhat egy minimális fájlméretet, amelynél a fájlok gyorsítótárba kerülnek.",
		admin_p8_download_cache_folder: "Teljes képzésű gyorsítótár könyvtárak:",
		admin_p8_download_cache_folder_hover: "Adja meg a könyvtár teljes képzésű útvonalát, amelyben a gyorsítótárazott fájlokat tárolni kívánja. A könyvtár lehet tetszőleges operációs rendszeren vagy eszközön, mint például a megosztott hálózati könyvtár, amíg az fájlrendszerként látható a FileNet Collaboration Services és az IBM HTTP Server számára.",
		admin_p8_download_cache_url: "Gyorsítótár hely álneve:",
		admin_p8_download_cache_url_hover: "Megadja az álnevet, amely a gyorsítótár könyvtárra mutat a FileNet Collaboration Services URL címből. Az álnevet /alias formátumban adja meg, például: /cdhc.<br/><br/>Ha az URL cím tartalmazza a /cdhc elemet, akkor az alkalmazás átirányításra kerül a teljes képzésű gyorsítótár könyvtárba.",
		admin_p8_download_cache_max_files: "Gyorsítótárban tárolt fájlok maximális száma:",
		admin_p8_download_cache_max_files_hover: "A fájlok maximális számának elérésekor a legrégebbi fájl eltávolításra kerül a gyorsítótárból.<br><br>Ha megadja a gyorsítótárban tárolandó fájlok maximális számát és a maximális gyorsítótárméretet, akkor a legrégebbi fájl eltávolításra kerül a gyorsítótárból, amikor a kettő feltétel közül az alacsonyabb teljesül.",
		admin_p8_download_cache_max_size: "Maximális gyorsítótárméret (GB):",
		admin_p8_download_cache_max_size_hover: "A maximális gyorsítótárméret elérésekor a legrégebbi fájl eltávolításra kerül a gyorsítótárból.<br/><br/>Ha megadja a gyorsítótárban tárolandó fájlok maximális számát és a maximális gyorsítótárméretet, akkor a legrégebbi fájl eltávolításra kerül a gyorsítótárból, amikor a kettő feltétel közül az alacsonyabb teljesül.",
		admin_p8_download_cache_cleanup_duration: "Maximális kiürítési időtartam (másodperc):",
		admin_p8_download_cache_cleanup_duration_hover: "Megadja a maximális időt, ameddig a kiürítési művelet tarthat. Az alapértelmezett időtartam 5 másodperc.<br><br>Azok a fájlok, amelyeket törölni kellene, de a gyorsítótárban maradnak a kiürítési művelet után, egy jövőbeli kiürítési művelet során kerülnek eltávolításra.",
		admin_p8_download_cache_cleanup_min: "Gyorsítótár kiürítési műveletek közötti minimális időtartam (másodperc):",
		admin_p8_download_cache_cleanup_min_hover: "Megadja, hogy a gyorsítótárkiürítési műveletek között legalább mennyi időnek kell eltelnie. Az alapértelmezett idő a 3 600 másodperc (1 óra).<br><br>A gyorsítótárkiürítési művelet csak akkor kerül végrehajtásra, ha van a gyorsítótártartalom letöltésére vonatkozó aktív kérés. Ha minden percben érkezik kérés, akkor a kiürítési művelet minden órában végrehajtásra kerül. Ha azonban három óra telik el a letöltési kérések között, akkor a kiürítési művelet nem kerül végrehajtásra a következő kérés beérkezésééig.",
		admin_p8_download_cache_min_lifetime: "Minimális gyorsítótárazási idő (másodperc):",
		admin_p8_download_cache_min_lifetime_hover: "Megadja a minimális időtartamot, ameddig a fájl a gyorsítótárban marad eltávolítás előtt. Az alapértelmezett idő a 3 600 másodperc (1 óra).<br><br>A legrégebbi fájl nem törölhető, amíg a fájl nem töltötte el a megadott időt a gyorsítótárban, még akkor sem, ha a gyorsítótár elérte a maximális méretét vagy a maximális számú fájlt tartalmazza.",
		admin_p8_download_cache_size_threshold: "Minimális gyorsítótárazási fájlméret (KB):",
		admin_p8_download_cache_size_threshold_hover: "Megadja a minimális méretet, amelynél a CDHC-t kell használni a fájlok gyorsítótárazásához. Ha a fájl kisebb a megadott méretnél, akkor átkerül a webes alkalmazáskiszolgálóra, amelyen a FileNet Collaboration Services telepítésre került. Az alapértelmezett méret az 1 000 KB.",
		admin_p8_download_guard_header: "HTTP fejléc őrzéshez:",
		admin_p8_download_guard_header_hover: "Ha az ügyfélalkalmazás nem IBM HTTP Serveren keresztül továbbítja a kérést, akkor a gyorsítótárban tárolt tartalom nem tölthető le. Megadhatja, hogy csak az adott HTTP fejléccel (amelyet az IBM HTTP Server adott a kéréshez) rendelkező bejövő kérések érhessék el a gyorsítótárban tárolt tartalmat a letöltési hibák megakadályozása érdekében.<br><br>A HTTP fejléc az IBM HTTP Serveren kerül beállításra és az IBM HTTP Serveren keresztül továbbított összes bejövő kérésben megtalálható. Ha egy kérés nem rendelkezik HTTP fejléccel, akkor a tartalom a webes alkalmazáskiszolgálón keresztül kerül továbbításra az IBM HTTP Server helyett.",
		admin_p8_download_generate_config: "Konfiguráció előállítása",
		admin_p8_download_generate_config_label: "IBM HTTP Server konfiguráció:",
		admin_p8_download_generate_config_label_hover: "Ahhoz, hogy a CHDC konfiguráció működjön, az IBM HTTP Server httpd.conf fájlt is frissíteni kell. Kattintson a Konfiguráció előállítása lehetőségre a httpd.conf fájlhoz adni kívánt utasítások előállítása érdekében.",

		admin_logging_viewone_pro: "ViewONE Professional naplózás:",
		admin_logging_viewone_virtual: "ViewONE Virtual logging:",
		admin_logging_viewone_streamer: "Document Streaming Server Module naplózás:",
		admin_logging_viewone_streamer_hover: "A Document Streaming Server Module naplózási beállítások csak akkor használhatók, ha engedélyezte a PDF vagy TIFF fájlok lejátszását az adminisztrációs eszköz <b>Daeja ViewONE</b> részében.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module naplózás:",
		admin_logging_viewone_redaction_hover: "A Permanent Redaction Server Module naplózási beállítások csak akkor használhatók, ha jogosult a Daeja ViewONE Professional Redaction moduljának használatára.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Folyam PDF fájlok:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Ha a lerakat nagy PDF dokumentumokat tartalmaz, akkor beállíthatja a megjelenítőt a dokumentumtartalom folyammá alakításához, hogy a felhasználók gyorsabban megjeleníthessék a dokumentumokat. Ha azonban az adatfolyam nem működik a környezetében, akkor letilthatja azt.",
		admin_daeja_viewonepro_stream_tiff_documents: "Folyam TIFF fájlok:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Ha a lerakat nagy TIFF dokumentumokat tartalmaz, akkor beállíthatja a megjelenítőt a dokumentumtartalom folyammá alakításához, hogy a felhasználók gyorsabban megjeleníthessék a dokumentumokat. Ha azonban az adatfolyam nem működik a környezetében, akkor letilthatja azt.",
		admin_daeja_viewonepro_show_file_buttons: "Fájl gombok",
		admin_daeja_viewonepro_show_file_menus: "Fájl menük",
		admin_daeja_viewonepro_enable_file_keys: "Fájl gyorsbillentyűk",
		admin_daeja_viewonepro_file_keys_hover_help: "Megadhatja, hogy használjanak-e a felhasználók billentyűparancsokat a fájlok kezeléséhez, például fájl megnyitásához vagy mentéséhez. Az adott billentyűparancsokról további információkért tekintse meg a FileKeys paraméter leírását az IBM Daeja ViewONE paraméterleírások kézikönyvében.",
		admin_daeja_viewonepro_show_print_buttons: "Nyomtatás gombok",
		admin_daeja_viewonepro_show_print_menus: "Nyomtatás menük",
		admin_daeja_viewonepro_enable_print_keys: "Nyomtatás gyorsbillentyűk",
		admin_daeja_viewonepro_print_keys_hover_help: "Megadhatja, hogy használjanak-e a felhasználók billentyűparancsokat a fájlok nyomtatásához, például oldal vagy dokumentum nyomtatásához. Az adott billentyűparancsokról további információkért tekintse meg a PrintKeys paraméter leírását az IBM Daeja ViewONE paraméterleírások kézikönyvében.",
		admin_daeja_viewonepro_show_invert_buttons: "Megfordítás gombok",
		admin_daeja_viewonepro_annotation_tooltip: "Egyéni feljegyzés alapértelmezett előugró leírása:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Adja meg azt a szöveget, amely akkor kerül megjelenítésre, amikor nincs megadva egyéni feljegyzés. A szöveg helyettesíthető jelsorokat tartalmazhat. Például: &quot;&lt;creator&gt; hozta létre ezt a feljegyzést &lt;createdateonly&gt; dátummal.&quot; A helyettesíthető jelsorokról további információkért tanulmányozza a customAnnotationsToolTip paramétert az IBM Daeja ViewONE paraméterleírási kézikönyvben.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Előre meghatározott egyéni előugró leírás használata",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Használja az alábbi szövegmezőben megjelenített rendszer által meghatározott egyéni előugró leírást",
		admin_daeja_viewonepro_help_url: "Súgó URL:",
		admin_daeja_viewonepro_help_url_hover_help: "Adja meg a megjelenítő súgódokumentációját tartalmazó weboldal URL címét. A megjelenítő eszköztár menüjének súgó gombja és a súgó menüpont ezt a weboldalt nyitja meg. Ha nem ad meg URL címet, akkor a súgó gomb és a menüpont nem jelenik meg.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kép pecsét erőforrás kontextus:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "teendő",
		admin_daeja_viewonepro_route_docs: "Nem támogatott tartalom átirányítása a böngészőbe:",
		admin_daeja_viewonepro_route_docs_hover_help: "A felhasználók a nem támogatott képfájlokat úgy tekinthetik meg, hogy átirányítják azokat a böngészőbe, amely megnyitja a megfelelő alkalmazást a fájl megjelenítéséhez. Például egy Microsoft Word dokumentum megnyitásához a böngésző a Microsoft Word megjelenítőt használja.",
		admin_daeja_viewonepro_scale: "Kép automatikus illesztése:",
		admin_daeja_viewonepro_scale_best: "Legjobb illeszkedés",
		admin_daeja_viewonepro_scale_ftow: "Illesztés szélességhez",
		admin_daeja_viewonepro_scale_ftoh: "Illesztés magassághoz",
		admin_daeja_viewonepro_enable_hotkeys: "Gyorsbillentyűk engedélyezése:",
		admin_daeja_viewonepro_show_features: "Gombok és menük megjelenítése:",
		admin_daeja_custom_settings: "További beállítások:",
		admin_daeja_custom_settings_hover_help: "Hozzáadhat más paramétereket a paraméter nevének és értékének megadásával. Például a &quot;scrollbars&quot; és &quot;true&quot; megadásával megjelenítésre kerülnek a gördítősávok, amikor a kép a megjelenítő területnél nagyobbra van méretezve. A paraméternevekről és -értékekről további információkért tekintse meg az IBM Daeja ViewONE paraméterleírások kézikönyvét.",
		admin_daeja_virtual: "Virtuális",
		admin_daeja_virtual_annotation_tooltip: "Egyéni feljegyzés alapértelmezett előugró leírása:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Adja meg azt a szöveget, amely akkor kerül megjelenítésre, amikor nincs megadva egyéni feljegyzés. A szöveg helyettesíthető jelsorokat tartalmazhat. Például: &quot;&lt;creator&gt; hozta létre ezt a feljegyzést &lt;createdateonly&gt; dátummal.&quot; A helyettesíthető jelsorokról további információkért tanulmányozza a customAnnotationsToolTip paramétert az IBM Daeja ViewONE paraméterleírási kézikönyvben.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Előre meghatározott egyéni előugró leírás használata",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Használja az alábbi szövegmezőben megjelenített rendszer által meghatározott egyéni előugró leírást",
		admin_daeja_virtual_image_stamp_resource_context: "Kép pecsét erőforrás kontextus:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "teendő",
		admin_daeja_virtual_license_path:"Licencfájlok útvonala: ",
		admin_daeja_virtual_license_path_hover_help:"Adja meg a lic-server-virtual.v1 és lic-server.v1 licencfájlokat tartalmazó könyvtár teljes képzésű elérési útját. ",
		admin_default_license_path:"Alapértelmezett licencfájl útvonal használata",
		admin_license_path_specified:"Egyéni licencfájl útvonal használata",

		admin_daeja_streamer: "Kiszolgáló",
		admin_daeja_streamer_cache_root: "Gyorsítótár könyvtár:",
		admin_daeja_streamer_cache_root_hover_help: "Adja meg annak a  könyvtárnak a teljes képzésű útvonalát, amelyben a gyorsabb elérést biztosító gyorsítótárazott fájlokat kívánja tárolni. A könyvtár bármely olyan operációs rendszeren vagy eszközön, például hálózati könyvtárban elhelyezkedhet, amely fájlrendszerként látható az IBM Content Navigator és az IBM HTTP kiszolgáló számára.A teljesítmény növelése érdekében használjon helyi könyvtárat.",
		admin_daeja_streamer_settings: "További beállítások:",
		admin_daeja_streamer_settings_hover_help: "Hozzáadhat más paramétereket a paraméter nevének és értékének megadásával. Például megadhatja a “cookieAllowedDomainList” paramétert és a hosztkiszolgálók vesszőkkel tagolt listáját.  A paraméternevekről és -értékekről további információkért tekintse meg az IBM Daeja ViewONE paraméterleírások kézikönyvét.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Beállítások:",
		admin_daeja_redaction_settings_hover_help: "Hozzáadhat más paramétereket a paraméter nevének és értékének megadásával. Például megadhatja a “burnIncrementalAnnotations” paramétert és a ”true” értéket. A paraméternevekről és -értékekről további információkért tekintse meg az IBM Daeja ViewONE paraméterleírások kézikönyvét.",

		admin_daeja_setting_dialog_title_new: "Új beállítás",
		admin_daeja_setting_dialog_title_edit: "Beállítás szerkesztése",
		admin_daeja_setting_dialog_hover_help: "Hozzáadhat más paramétereket a paraméternév és -érték megadásával. Például a “scrollbars” és “true” megadásával megjelenítésre kerülnek a gördítősávok, amikor a kép a megjelenítő területnél nagyobbra van méretezve.",
		admin_daeja_setting_dialog_field_hover_help: "A paraméternevekről és -értékekről további információkért tekintse meg a Daeja ViewONE paraméterleírások kézikönyvét.",

		admin_daeja_logging: "Daeja ViewONE naplózás",
		admin_daeja_logging_trace: "Naplózás nyomkövetésének engedélyezése",
		admin_daeja_logging_trace_net: "Hálózati naplózás engedélyezése",
		admin_daeja_logging_trace_annotations: "Feljegyzések naplózásának engedélyezése",
		admin_daeja_logging_log_file: "Naplófájl:",
		admin_daeja_logging_instructions: "A naplózás segítségével elháríthatja a Daeja ViewONE Professional és a Daeja ViewONE Virtual hibáit. Ha megállapította, hogy a probléma egy adott szolgáltatásnál lép fel, akkor a naplózást arra összpontosíthatja.",

		admin_v1pro_logging_trace_hover: "Használja ezt a beállítást a megjelenítő általános hibáinak elhárításához.<br><br>A naplózási információk az ügyfélgép Java konzoljába kerültek beírásra. A Java konzol az operációs rendszer vezérlőpaneljéből (Windows) vagy a System Preferences panelben (Mac) érhető el.",
		admin_v1pro_logging_trace_net_hover: "Használja ezt a beállítást a következő problémák elhárításához:<ul><li>Kiszolgálókapcsolati hibák</li><li>MIME típusokkal kapcsolatos hibák</li><li>Túl hosszú fájlokkal kapcsolatos hibák</li></ul>Emellett a hálózati nyomkövetéssel megkeresheti, hogy hol történnek a késések a Daeja ViewONE Professional használata során.<br><br>A naplózási információk az ügyfélgép Java konzoljába kerültek beírásra. A Java konzol az operációs rendszer vezérlőpaneljéből (Windows) vagy a System Preferences panelben (Mac) érhető el.",
		admin_v1pro_logging_trace_annotations_hover: "Használja ezt a beállítást a feljegyzések készítése, mentése vagy betöltése során előforduló hibák megkeresésére.<br><br>A naplózási információk az ügyfélgép Java konzoljába kerültek beírásra. A Java konzol az operációs rendszer vezérlőpaneljéből (Windows) vagy a System Preferences panelben (Mac) érhető el.",

		admin_virtual_logging_trace_hover: "Használja ezt a beállítást a megjelenítő általános hibáinak elhárításához.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának virtual.log fájljába kerülnek.",
		admin_virtual_logging_trace_net_hover: "Használja ezt a beállítást a következő problémák elhárításához:<ul><li>Kiszolgálókapcsolati hibák</li><li>MIME típusokkal kapcsolatos hibák</li><li>Túl hosszú fájlokkal kapcsolatos hibák</li></ul>Emellett a hálózati nyomkövetéssel megkeresheti, hogy hol történnek a késések a Daeja ViewONE Virtual használata során.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának virtual.log fájljába kerülnek.",
		admin_virtual_logging_trace_annotations_hover: "Használja ezt a beállítást a feljegyzések készítése, mentése vagy betöltése során előforduló hibák megkeresésére.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának virtual.log fájljába kerülnek.",
		admin_virtual_logging_log_file_hover: "Ha a megjelenítőhöz engedélyezte a naplózást, akkor meg kell adnia annak a naplófájlnak a teljes képzésű elérési útját és nevét, ahol a naplózási információkat tárolni kívánja.  Ajánlott a naplófájl virtual.log elnevezése.",

		admin_streamer_logging_trace_hover: "Használja ezt a beállítást a Document Streaming Server Module általános hibáinak elhárításához.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának streamer.log fájljába kerülnek.",
		admin_streamer_logging_trace_net_hover: "Használja ezt a beállítást a következő problémák elhárításához:<ul><li>Kiszolgálókapcsolati hibák</li><li>Egyes MIME típusokkal kapcsolatos hibák</li><li>Túl hosszú fájlokkal kapcsolatos hibák</li></ul>Emellett a hálózati nyomkövetéssel megkeresheti, hogy hol történnek a késések a Document Streaming Server Module használata során.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának streamer.log fájljába kerülnek.",
		admin_streamer_logging_log_file_hover: "Ha a Document Streaming Server Module naplózását engedélyezte, akkor meg kell adnia annak a naplófájlnak a teljes képzésű elérési útját és nevét, ahol a naplózási információkat tárolni kívánja.  Ajánlott a naplófájl streamer.log elnevezése.",

		admin_redaction_logging_trace_hover: "Használja ezt a beállítást a Permanent Redaction Server Module általános hibáinak elhárításához.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának redacttofile.log fájljába kerülnek.",
		admin_redaction_logging_trace_net_hover: "Használja ezt a beállítást a következő problémák elhárításához:<ul><li>Kiszolgálókapcsolati hibák</li><li>Egyes MIME típusokkal kapcsolatos hibák</li><li>Túl hosszú fájlokkal kapcsolatos hibák</li></ul>Emellett a hálózati nyomkövetéssel megkeresheti, hogy hol történnek a késések a Permanent Redaction Server Module használata során.<br><br>A naplózási információk alapértelmezésben az IBM Content Navigator telepítési könyvtár config alkönyvtárának redacttofile.log fájljába kerülnek.",
		admin_redaction_logging_log_file_hover: "Ha a Permanent Redaction Server Module naplózását engedélyezte, akkor meg kell adnia annak a naplófájlnak a teljes képzésű elérési útját és nevét, ahol a naplózási információkat tárolni kívánja.  Ajánlott a naplófájl redacttofile.log elnevezése.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Beállíthatja a megjelenítők és szolgáltatások összetevőit.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Ha a webes ügyfél használatával csatlakozik egy vagy több Content Manager OnDemand lerakathoz, akkor a megfelelő működés érdekében meg kell adnia a szükséges információkat a OnDemand Web Enablement Kit terméknek. Ezek az információk közösek minden Content Manager OnDemand lerakat esetében, amelyek a webes ügyfél számára lettek konfigurálva.",
		admin_ondemand_language: "Nyelv:",
		admin_ondemand_tempdir: "ODWEK ideiglenes könyvtár:",
		admin_ondemand_tracegrp: "ODWEK nyomkövetés",
		admin_ondemand_tracedir: "Nyomkövetési könyvtár:",
		admin_ondemand_tracelevel: "Nyomkövetés szintje:",
		admin_ondemand_tracelevel_0: "0 - Nincs naplózás",
		admin_ondemand_tracelevel_1: "1 - Hibaüzenetek naplózása",
		admin_ondemand_tracelevel_2: "2 - Hiba és figyelmeztető üzenetek naplózása",
		admin_ondemand_tracelevel_3: "3 - Hiba, figyelmeztető és információs üzenetek naplózása",
		admin_ondemand_tracelevel_4: "4- Minden üzenet rögzítése, beleértve a függvények nyomkövetési üzeneteit",
		admin_ondemand_max_trace_filesize: "Nyomkövetési fájl maximális mérete:",
		admin_ondemand_max_trace_filesize_unlimited: "Korlátlan",
		admin_ondemand_max_trace_filesize_limited: "Korlátozott (ajánlott)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Ez az érték kívül esik a tartományon. Az értéknek egy 1 és 1.000.000 közötti egész számnak kell lennie.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF telepítési könyvtár:",
		admin_ondemand_language_hover: "Adja meg, hogy milyen nyelvű üzeneteket küldjön az ODWEK.",
		admin_ondemand_tempdir_hover: "Adja meg azt a könyvtárat, ahol az OnDemand Web Enablement Kit a feldolgozás során tárolja az ideiglenes fájlokat. A webalkalmazás-kiszolgálón egy meglévő könyvtár teljes képzésű elérési útját kell megadnia.",
		admin_ondemand_tracedir_hover: "Adja meg a könyvtárat, ahol tárolni szeretné az ODWEK nyomkövetési fájlt (arswww.trace). A webalkalmazás-kiszolgálón egy meglévő könyvtár teljes képzésű elérési útját kell megadnia.",
		admin_ondemand_tracelevel_hover: "Megadja az információk nyomkövetésének szintjét, amely az arswww.trace fájlba kerül írásra. <b>Hibaüzenetek naplózása</b> - a legkevesebb naplózási információt rögzíti. <b>Minden üzenet rögzítése, beleértve a függvények nyomkövetési üzeneteit</b> - a legtöbb információt rögzíti.<br /><br />Ne válassza a <b>Minden üzenet rögzítése, beleértve a függvények nyomkövetési üzeneteit</b> lehetőséget éles környezetekben, kivéve, ha kifejezetten ezt kérte az IBM terméktámogatás.",
		admin_ondemand_max_trace_filesize_hover: "Adja meg, hogy engedélyezni kívánja-e az ODWEK nyomkövetési fájl növekedését korlátlan méretűre, vagy a webes ügyfélprogram új naplófájlokat hozzon létre, amikor a naplófájl elér egy bizonyos méretet. Alapértelmezés szerint a nyomkövetési naplófájl addig növekedhet, amíg a webalkalmazást le nem állítja a webalkalmazás-kiszolgálón.",
		admin_ondemand_max_trace_unlimited_hover: "Válassza ezt a lehetőséget, ha az ODWEK nyomkövetési információkat egyetlen naplófájlba kíván rögzíteni. Ha kiválasztotta ezt a beállítási lehetőséget, akkor esetleg olyan nagy naplófájlok jöhetnek létre, amelyek túl nagyok ahhoz, hogy megnyithatók legyenek egy szabványos fájlmegjelenítővel.",
		admin_ondemand_max_trace_limited_hover: "Válassza ezt a lehetőséget, ha az ODWEK nyomkövetési információkat kisebb naplófájlokba kívánja rögzíteni. Ha egy naplófájl eléri a maximális méretet, akkor átnevezésre kerül, nevében dátummegjelöléssel (arswww.trace.ÉÉÉÉHHNN.ÓÓPPMM), majd létrejön egy új naplófájl.",
		admin_ondemand_afp2pdf_installdir_hover: "Ha az AFP2PDF átalakító segédprogram használatával AFP dokumentumokat kíván megtekinthető és nyomtatható PDF dokumentumokba konvertálni, akkor adja meg az AFP2PDF átalakító segédprogram telepítési könyvtárát a webes alkalmazáskiszolgálón. Például: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Adminisztrátorok",
		admin_adminusers_heading_text_multi: "Meg kell adnia, hogy melyik felhasználók rendelkeznek adminisztrátori jogosultsággal a webes ügyfélen. Csak adminisztrátorok jelentkezhetnek be az adminisztrátori munkaasztalra.<br /><br /><b>Fontos:</b> Az IBM Content Navigator adminisztrátorok felhasználói azonosítóinak egyezniük kell a következőkkel:<ul><li>A webes alkalmazáskiszolgálón már létező felhasználói azonosítókkal. Nem szükséges, hogy ezek a felhasználói azonosítók adminisztrátori jogosultsággal rendelkezzenek a webes alkalmazáskiszolgálón.</li><li>Az alapértelmezett lerakatban már létező felhasználói azonosítókkal. A lerakat azokhoz a munkaasztalokhoz konfigurált, amelyek tartalmazzák az Adminisztráció szolgáltatást.</li></ul>",
		admin_adminusers_heading_text_single: "Meg kell adnia, hogy melyik felhasználók rendelkeznek adminisztrátori jogosultsággal a webes ügyfélen. Csak adminisztrátorok jelentkezhetnek be az adminisztrátori munkaasztalra.<br /><br /><b>Fontos:</b> Az IBM Content Navigator adminisztrátorok felhasználói azonosítóinak egyezniük kell a webes alkalmazáskiszolgálón már létező felhasználói azonosítókkal. Nem szükséges, hogy ezek a felhasználói azonosítók adminisztrátori jogosultsággal rendelkezzenek a webes alkalmazáskiszolgálón.",
		admin_adminusers_newuser: "Új adminisztrátor:",
		admin_adminusers_add: "Hozzáadás",
		admin_adminusers_remove: "Eltávolítás",
		admin_adminusers_listheading: "Adminisztrátorok",
		admin_adminusers_nameInvalid: "Az érték nem szerepelhet többször.",

		admin_sync_server_instructions: "<b>Csak FileNet P8 felhasználók:</b> Ha a szinkronizálási szolgáltatásokat legalább egy lerakathoz engedélyezni kívánja, akkor be kell állítania a webes ügyfelet a szinkronizálási szolgáltatások használatára. A szinkronizálási szolgáltatások konfigurációja a környezet összes lerakatában meg lesz osztva.",
		admin_settings_instructions: "A Beállítások lapon megadott értékek a konfiguráció minden munkaasztalára érvényesek lesznek.",
		admin_autocomplete: "Felhasználónevek automatikus kitöltése:",
		admin_autocomplete_hover: "Adja meg, hogy a webes ügyfélen a felhasználónevek tárolása a böngészői cookie-jaiban történjen-e, engedélyezve a böngészőnek a felhasználónevek automatikus kitöltését a webes ügyfélre való bejelentkezéskor.<br><br>Ha engedélyezi ezt a beállítási lehetőséget, akkor a webes ügyfélre legutóbb bejelentkezett felhasználó neve lesz eltárolva a böngésző cookie-jaiban, és a név automatikusan meg is jelenik a bejelentkezési oldalon, amikor a felhasználó megnyitja a webes ügyfélt.<br><br>Célszerű tiltani ezt a lehetőséget, ha az alkalmazás elérése megosztott munkaállomásokról történik, vagy ha fenntartásai vannak azzal kapcsolatban, hogy a böngésző cookie-jai is tárolják a felhasználóneveket.<br /><br />Ez a beállítás nem vonatkozik a mobil vagy egyéni alkalmazásokra.",
		admin_autocomplete_enable: "Engedélyezés",
		admin_autocomplete_disable: "Letiltás",
		admin_cultural_collation: "Helyszínfüggő rendezés használata:",
		admin_cultural_collation_hover: "Ha engedélyezi a helyszínfüggő rendezést, akkor a rendezés a lerakati kiszolgálón megy végbe. Ez ronthatja a webes ügyfél teljesítményét.<br><br>A helyszínfüggő rendezés tiltása javíthat a webes ügyfél teljesítményén.",
		admin_cultural_collation_enable: "Engedélyezés",
		admin_cultural_collation_disable: "Letiltás",
		admin_base_ui_style: "Témastílus",
		admin_base_ui_style_hover: "A webes ügyfélen használt alapértelmezett téma stílusát határozza meg. Ez a stílus csak az <b>Alapértelmezett</b> témát használó munkaasztalokon használatos (a munkaasztal-beállítás <b>Megjelenés </b> lapján megadottak szerint).<br/></br><b>Korlátozás:</b> Ha munkaasztal-konfigurációja egyéni témákat használ, akkor az egyéni témák a klasszikus stílust veszik alapul, függetlenül a kiválasztott stílustól.",
		admin_base_ui_style_classic: "Klasszikus",
		admin_access_control_access: "Hozzáférés csak bizonyos felhasználók és csoportok számára engedélyezett",
		admin_access_control_access_show: "Hozzáférés-felügyeleti adatok megjelenítése",
		admin_access_control_access_enable: "Igen",
		admin_access_control_access_disable: "Nem",
		admin_mobile_access: "Hozzáférés engedélyezés mobil alkalmazásokból",
		admin_mobile_access_hover: "Alapértelmezés szerint a felhasználók a webes ügyfélprogramot az IBM Content Navigator iOS alkalmazásból érhetik el. <br /><br /><b>Fontos:</b> Ha nem engedélyezi, hogy a felhasználók elérhessék a webes ügyfélprogramot az iOS alkalmazásból, akkor a felhasználók a webes ügyfélprogramot a mobil eszközeiken keresztül és bármely, az IBM Content Navigator API-k használatával készült és mobil eszközön működő alkalmazásból továbbra is elérhetik.",
		admin_mobile_access_enable: "Igen",
		admin_mobile_access_disable: "Nem",
		admin_error: "Hibaüzenetek információi:",
		admin_error_custom: "Egyéni támogatási tartalom keresése",
		admin_error_default: "IBM terméktámogatási tartalom keresése <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Adj meg, hogy hová kívánja irányítani további információkért a felhasználókat, ha hibaüzenetet kaptak. Átirányíthatja a felhasználókat az IBM Support Portalon lévő információkhoz, vagy átirányíthatja a felhasználókat egy belső erőforrásra, mint például a help desk.",
		admin_error_URL: "URL előtag:",
		admin_error_URL_hover: "Adja meg az információforrás, például help desk URL címét, amelyhez a felhasználókat kívánja irányítani, ha hibaüzenetet kaptak. Például: http://localhost:port. A webes ügyfél hozzáfűzi az üzenet számát az URL címhez.",
		admin_prompt_close_without_save: "Valóban bezárja a módosítások mentése nélkül?",
		admin_object_expiration_time: "Gyorsítótár frissítési időköze (percben):",
		admin_object_expiration_time_hover: "Az idő, ameddig a konfigurációs objektumok, mint például a munkaasztalok, a gyorsítótárban maradnak növelhető, ezáltal javítható a webes ügyfél teljesítménye.  Az alapértelmezett idő 10 perc. A maximális idő 1440 perc (1 nap).<br /><br />A módosítások érvénybe lépéséhez újra kell indítania a webes alkalmazást.<br /><br />Ha az IBM Content Navigator egy magasszintű rendelkezésre állást biztosító fürtözött környezetben van telepítve, akkor a konfigurációs objektumok módosítása csak a gyorsítótár frissítésekor lesz továbbítva a fürtben lévő csomópontokhoz.",
		admin_temp_file_cleanup_interval: "Elemzési időköz a megjelenítő gyorsítótár kiürítéséhez (óra):",
		admin_temp_file_cleanup_interval_hover: "Ütemezze az ideiglenes könyvtár elemzésének gyakoriságát a lejárt ideiglenes fájlok kereséséhez és törléséhez. Alapértelmezésben az ideiglenes könyvtár hat óránként kerül elemzésre. 6-48 órás időszak adható meg.",
		admin_temp_file_expiration_interval: "Megjelenítő gyorsítótár lejárata (óra):",
		admin_temp_file_expiration_interval_hover: "Adja meg az időmennyiséget, ameddig a tevékenységekhez kapcsolódó ideiglenes fájlok a megjelenítőben a böngésző gyorsítótárában maradjanak. Alapértelmezésben ezek az ideiglenes fájlok 24 óra elteltével járnak le. 12-48 óra adható meg.",
		admin_encryption_key_hover: "A Navigator titkosítási funkciókhoz használt kulcs",
		admin_encryption_key: "Titkosítási kulcs:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Cégjelzés",
		admin_mobile_branding_main_color: "Fő szín",
		admin_mobile_branding_secondary_color: "Másodlagos szín:",
		admin_mobile_device_title: "MaaS360 kezelése",
		admin_mobile_device_enable_maas360: "MaaS360 engedélyezése:",
		admin_mobile_device_enable_maas360_hover_help: "Ide kerül az MaaS360 előugró súgó",
		admin_mobile_device_maas360_developer_id: "MaaS360 fejlesztőazonosító",
		admin_mobile_device_maas360_license_key: "MaaS360 licenckulcs",
		admin_mobile_settings_title: "Beállítások",
		admin_mobile_email_address_hover_help: "A mobil alkalmazásban használt e-mail cím, amikor a felhasználó a \"Hibajelentés küldése\" lehetőségre kattint.",
		admin_mobile_email_address: "E-mail cím:",
		admin_invalid_email_address_message: "A megadott e-mail cím formátuma helytelen. Adja meg a helyes címet, majd próbálkozzon újra.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Néhány adat érvénytelen.",
		admin_configuration_parameters: "Konfigurációs paraméterek",
		admin_configuration_optional_features: "Opcionális összetevők",
		admin_configuration_optional_features_p8_instructions: "Válassza ki azokat az összetevőket, amelyeket engedélyezni szeretne ebben a lerakatban.<p><b>Fontos:</b> Ha engedélyez egy olyan funkciót, amely egy kiegészítőt telepít a lerakatba, akkor Content Platform Engine vagy Content Engine adminisztrátor szereppel kell csatlakozni a lerakathoz.</p>",
		admin_configuration_optional_features_cm_instructions: "Válassza ki azokat az összetevőket, amelyeket engedélyezni szeretne ebben a lerakatban.<p><b>Fontos:</b> Ezek a funkciók módosítják az adatmodellt a lerakatban. Az engedélyezésükhöz könyvtárkiszolgáló-adminisztrátorként kell csatlakozni a lerakathoz.</p>",
		admin_system_properties: "Rendszertulajdonságok",
		admin_system_properties_for: "Rendszertulajdonságok a következőn:",
		admin_available_properties: "Elérhető tulajdonságok",
		admin_displayed_properties: "Megjelenített tulajdonságok",
		admin_selected_properties: "Kiválasztott tulajdonságok",
		admin_selected_filtered_properties: "Rejtett tulajdonságok",
		admin_available_operators: "Megjelenített operátorok",
		admin_selected_filtered_operators: "Rejtett operátorok",
		admin_system_properties_shown: "Megjelenített tulajdonságok",
		admin_system_properties_hidden: "Rejtett tulajdonságok",
		admin_available_menu_items: "Elérhető műveletek:",
		admin_selected_menu_items: "Kiválasztott műveletek:",
		admin_menu_global: "Akkor érvényes, amikor nincsenek kiválasztva elemek:",
		admin_menu_multiple_document: "Akkor érvényes, amikor több elem van kiválasztva:",
		admin_menu_privileges: "Kötelező jogosultságok:",
		admin_menu_plugin: "Bedolgozó:",
		admin_menu_repository_types: "Lerakattípusok:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Elválasztó",
		admin_browse: "Tallózás",
		admin_search: "Keresés",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Szerep alapú szerkesztés",
		admin_connections_library_enabled: "Engedélyezett IBM Connections",
		admin_office_conf: "Integráció szerkesztése",
		admin_desktop_conf_label: "Munkaasztal beállítás",
		admin_ms_office_conf_label: "Office beállítás",
		admin_workflows: "Munkafolyamatok",
		admin_file_types: "Fájltípusok",
		admin_file_type_contains_label: "Fájltípus tartalmazza:",
		admin_name_propepty: "Név",
		admin_cm_name_property_default: "Alapértelmezett név használata",
		admin_cm_name_property_default_hover: "Alapértelmezésben, az ICM hierarchikus név (ICM$NAME) tulajdonságérték lesz használva az elem neveként, ha ez a tulajdonság adott az elemre.  Ha az ICM hierarchikus név (ICM$NAME) tulajdonságérték nem érhető el, akkor az első \"represents\" jelzővel ellátott tulajdonságérték lesz használva az elem neveként.",
		admin_cm_name_property: "Elem név tulajdonságértékének megadása",
		admin_cm_name_property_hover: "Adja meg a dokumentum- és mappanévként használt tulajdonságot.",
		admin_name_property: "Név tulajdonság:",
		admin_doc_name_property: "Dokumentumnév tulajdonság:",
		admin_doc_name_property_hover: "Adja meg a dokumentumnévként használt tulajdonságot.",
		admin_folder_name_property: "Mappanév tulajdonság:",
		admin_folder_name_property_hover: "Adja meg a mappanévként használt tulajdonságot.",
		admin_all_searches_label: "Megjelenítendő keresések száma:",
		admin_unlimited: "Nincs korlát",
		admin_limit: "Korlátozás",
		admin_repository: "Lerakat:",
		admin_application_space: "Alkalmazásterület",
		admin_available_application_spaces: "Elérhető alkalmazásterületek:",
		admin_selected_application_spaces: "Kiválasztott alkalmazásterületek:",
		admin_label: "Címke",
		admin_repository_box_placeholder: "Válasszon ki egy Box lerakatot",
		admin_repository_placeholder: "Válasszon egy lerakatot",
		admin_search_match: "Egyezés:",
		admin_search_match_all: "Összes keresési feltételnek megfelelő",
		admin_search_match_any: "Bármely keresési feltételnek megfelelő",
		admin_search_match_hover: "Adja meg, mely összetevők vannak alapértelmezésben kiválasztva a <b>Paraméterbeállítások</b> menüben.",

		admin_repository_redactions_instructions: "Ehhez a lerakathoz konfigurálhat szerep alapú szerkesztéseket.",
		admin_repository_redaction_policies_description: "Létrehozhat és kezelhet szerkesztési irányelveket, amelyek a szerkesztési okokat felhasználókkal és csoportokkal társítják, akik olvashatják az érzékeny adatokat és szerkeszthetik a feljegyzéseket, amelyek védik az érzékeny adatokat a megtekintéstől.",
		admin_repository_redaction_roles_instruction: "Létrehozhat egy szerkesztési szerepet, amely társítható a megadott felhasználók és csoportokkal, az érzékeny adatok olvasásának képességével vagy az érzékeny adatokat a megtekintéstől védő feljegyzések szerkesztésével. A szerkesztési szerepet társítani kell egy szerkesztési okkal egy szerkesztési irányelvben, mielőtt ezek a felhasználók és csoportok olvashatnák az adatokat, vagy szerkeszthetnék a feljegyzéseket.",
		admin_repository_redaction_reasons_instruction: "Konfigurálhat szerkesztési okokat a lerakathoz.",
		admin_repository_redaction_policies: "Szerkesztési irányelv konfigurálása",
		admin_repository_redaction_roles: "Szerkesztési szerepek konfigurálása",
		admin_repository_redaction_reasons: "Szerkesztési okok konfigurálása",
		admin_repository_redaction_roles_type: "Típus",
		admin_repository_redaction_roles_type_hover: "Egy szerkesztő létrehozhat, módosíthat vagy törölhet adott típusú szerep alapú szerkesztéseket, míg egy megtekintő megtekinthet bizonyos típusú érzékeny adatokat.",
		admin_repository_redaction_roles_type_editor: "Szerkesztő",
		admin_repository_redaction_roles_type_viewer: "Megjelenítő",
		admin_repository_redaction_roles_membership: "Tagság",
		admin_repository_redaction_roles_membership_hover: "Válassza ki a szerkesztőket, akiket fel szeretne ruházni ezzel a szereppel.",
		admin_repository_redaction_roles_user_group_hover: "Keressen felhasználókat és csoportokat, vagy válassza ki a szerkesztőket, akiket fel szeretne ruházni ezzel a szereppel.",
		admin_repository_redaction_roles_description: "Létrehozhat és kezelhet szerkesztési szerepeket, amelyek felhasználókat és csoportokat társítanak az érzékeny adatok olvasásának és az érzékeny adatokat a megtekintéstől védő feljegyzések szerkesztésének képességével.",
		admin_repository_redaction_new: "Új szerkesztési szerep",
		admin_repository_redaction_role_avail_editors: "Elérhető szerkesztők",
		admin_repository_redaction_role_avail_users: "Elérhető felhasználók",
		admin_repository_redaction_role_avail_groups: "Elérhető csoportok",
		admin_repository_redaction_role_selected_editors: "Kiválasztott szerkesztők",
		admin_repository_redaction_role_selected_users_groups: "Kiválasztott felhasználók és csoportok",
		admin_repository_redaction_role_add_editor: "Új szerkesztők...",
		admin_repository_redaction_role_access_type: "Hozzáférés",
		admin_repository_redaction_role_access_type_access: "Engedélyezés",
		admin_repository_redaction_role_access_type_no_access: "Megtagadás",
		admin_repository_redaction_role_users: "Felhasználók",
		admin_repository_redaction_role_groups: "Csoportok",
		admin_repository_redaction_role_editors: "Szerkesztők",
		admin_delete_confirmation_redaction_roles: "Kívánja törölni a kiválasztott szerkesztési szerepet?",
		admin_repository_edit_redaction_role: "Szerkesztési szerep: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Alapértelmezett hozzáférés",
		// RBA
		desktop_user_group_acl: "Munkaasztal adminisztrátorok",
		desktop_user_group_remove: "Eltávolítás",
		desktop_rba_membership: "Tagság:",
		desktop_rba_membership_list_label: "Név",
		admin_repository_redaction_policy_hover: "Adjon meg egy rövid leírást, amely lehetővé teszi a felhasználók számára az irányelv megkülönböztetését a többi irányelvtől.",
		admin_repository_new_redaction_policy: "Új szerkesztési irányelv",
		admin_repository_policy_name: "Irányelv neve",
		admin_repository_reason_redactions: "Szerkesztési okok:",
		admin_repository_role_editors: "Szerkesztők",
		admin_repository_role_viewers: "Megtekintők",
		admin_repository_redaction_policy_instruction: "Létrehozhat egy szerkesztési irányelvet a kiválasztott szerkesztési okok társításához szerkesztőkkel és szerkesztési megtekintőkkel.",
		admin_repository_redaction_reasons_hover: "Válassza ki az érzékeny adatok típusait, amelyeket nem szeretne láthatóvá tenni a legtöbb felhasználó számára, mint például a személyi azonosító információk, üzleti titkok, vagy a vállalat bizalmas vagy szabadalomvédett információi.",
		admin_repository_readaction_available_reasons: "Elérhető okok",
		admin_repository_readaction_selected_reasons: "Kiválasztott okok",
		admin_repository_readaction_new_reason: "Új ok...",
		admin_repository_redeaction_reasons: "Szerkesztési okok:",
		admin_repository_readaction_editor_permmission: "Szerkesztők:",
		admin_repository_redaction_editors_hover: "Válassza ki a szerepeket, amelyek létrehozhatják és módosíthatják a kiadást a kiválasztott okok miatt.",
		admin_repository_readaction_new_editor_role: "Új szerkesztői szerep...",
		admin_repository_readaction_available_editors: "Elérhető szerkesztői szerepek",
		admin_repository_readaction_selected_editors: "Kiválasztott szerkesztői szerepek",
		admin_repository_readaction_viewer_permmission: "Szerkesztés megtekintők:",
		admin_repository_redaction_viewers_hover: "Válassza ki a szerepeket, amelyek megtekinthetik az érzékeny adatokat a kiválasztott okokból. A szerkesztés nem lesz alkalmazva az ilyen szerepekkel rendelkező felhasználók és csoportok esetén.",
		admin_repository_readaction_new_viewer_role: "Új megtekintő szerep...",
		admin_repository_readaction_available_viewers: "Elérhető megtekintő szerepek",
		admin_repository_readaction_selected_viewers: "Kiválasztott megtekintő szerepek",
		admin_repository_reason_redactions_header: "Szerkesztés okai",
		admin_delete_confirmation_redaction_policy: "Kívánja törölni a kiválasztott szerkesztési irányelvet?",
		admin_role_type_repository: "Lerakat",
		admin_role_type_administrator: "Adminisztrátor",
		admin_role_type_template: "Sablon",
		admin_role_type_teamspace: "Csoportterület",
		admin_role_type_author: "Szerkesztő",
		admin_role_type_user: "Megjelenítő",
		admin_collaboration_services_instructions: "Ha rendelkezik IBM Connections és FileNet Collaboration Services webalkalmazással, akkor beállíthatja a közösségi csoportterületeket és a tevékenységfolyamokat a lerakathoz.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Közösségi könyvtár konfiguráció",
		admin_collaboration_community_instruction: "Beállíthat egy lerakatot az IBM FileNet P8 tartományban az IBM Connections közösségi könyvtárak tárolásához (csoportterületnek is nevezik). Amikor a felhasználók az IBM Connections eszköz segítségével hoznak létre közösségi könyvtárat, akkor az a közösségi könyvtárlerakatként kijelölt lerakaton kerül tárolásra.",
		admin_collaboration_community_teamspaces: "Használja ezt a lerakatot a közösségi könyvtárakhoz:",
		admin_collaboration_community_teamspaces_hover: "Csak egy lerakatot használhat az IBM FileNet P8 tartományban az új közösségi könyvtárak tárolásához. Ha engedélyezi ezt a lerakatot és rendelkezik meglévő lerakattal, akkor a meglévő lerakat tiltott lesz. Azonban a meglévő könyvtárak az aktuális lerakaton maradnak.",
		admin_collaboration_connections_anonymous: "Anonim hozzáférés engedélyezése a nyilvános tartalomhoz:",
		admin_collaboration_connections_anonymous_hover: "Ha az IBM Connections kiszolgáló nyilvános vagy moderált közösségeket tartalmaz, akkor beállíthatja a FileNet Collaboration Services eszközt úgy, hogy a felhasználók számára engedélyezze a tartalom böngészését és letöltését ezen közösségekben lévő könyvtárakban bejelentkezés nélkül.<br><br>A közösségi könyvtárakhoz anonim hozzáféréssel rendelkező felhasználók nem hozhatnak létre, nem módosíthatnak és nem törölhetnek tartalmat.<br><br><b>Fontos:</b> Ki kell jelölnie egy IBM FileNet P8 LDAP felhasználót anonim felhasználóként és be kell állítania ezt a felhasználót <b>Anonim</b> szereppel a WebSphere Application Server rendszeren.",
		admin_collaboration_connections_url: "IBM Connections URL:",
		admin_collaboration_connections_url_hover: "Adja meg az IBM Connections kiszolgáló URL címét http://IBMConnectionsServer:portszám formátumban.  Ha az IBM Connections az IBM HTTP Server használatára van beállítva, akkor kihagyhatja a portszámot az URL címből.<br><br>Az URL címnek elérhetőnek kell lennie az IBM Connections felhasználók számára, mivel ezt a hivatkozást használja a FileNet Collaboration Services a dokumentum fogadóoldalak hivatkozásainak létrehozásához az IBM Connections eszközben.",
		admin_collaboration_connections_url_http_use: "Használja az IBM Connections URL címet",
		admin_collaboration_connections_url_https_use: "Használja az IBM Connections HTTPS URL címet",
		admin_collaboration_connections_url_specify: "Adja meg az URL címet",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS URL:",
		admin_collaboration_connections_url_https_hover: "Ha az IBM Connections SSL használatára van beállítva, akkor adja meg a HTTPS URL címet az IBM Connections kiszolgálóhoz https://IBMConnectionsServer:portszám formátumban.  Ha az IBM Connections az IBM HTTP Server használatára van beállítva, akkor kihagyhatja a portszámot az URL címből.",

		admin_collaboration_connections_gadget_url: "IBM Connections vezérlőelem URL:",
		admin_collaboration_connections_retrieval_url: "IBM Connections lekérési URL cím:",
		admin_collaboration_connections_security: "Közösségi adminisztrátorok:",
		admin_collaboration_connections_security_hover: "Adja meg a felhasználókat és a csoportokat, akik felügyelni tudják a tartalmat a közösségi könyvtárakban.<br><br>A globális adminisztrátorok létrehozhatnak, módosíthatnak, törölhetnek és biztosíthatnak hozzáférést a közösségi könyvtárakhoz és a közösségi könyvtárak tartalmához. Amikor megad egy felhasználót globális adminisztrátorként, akkor a felhasználó ClbGlobalAdministrator jogosultságokat kap a lerakatban.<br><br>A globális áttekintő adminisztrátorok elfogathatják vagy visszautasíthatják a kiadás előtti áttekintés alatt álló tartalmat a közösségi könyvtárban. Amikor megad egy felhasználót globális áttekintő adminisztrátorként, akkor a felhasználó ClbGloablReviewAdministrator jogosultságokat kap a lerakatban.",

		admin_collaboration_connections_admins: "Globális adminisztrátorok",
		admin_collaboration_connections_admins_review: "Globális áttekintő adminisztrátorok",
		admin_collaboration_connections_seedlist: "Közösségi könyvtár tartalmának indexelése:",
		admin_collaboration_connections_seedlist_hover: "Adja meg, hogy az IBM Connections bejárja a lerakatban lévő közösségi könyvtárakat keresési index létrehozásához. Az index létrehozása hatással lehet a lerakat teljesítményére.<br><br>Ha a Social Collaboration Search Indexing Extensions telepítve van a lerakaton, akkor ez a lehetőség alapértelmezésben engedélyezett. Ha a Social Collaboration Search Indexing Extensions nincs telepítve a lerakaton, akkor a bővítmény akkor kerül telepítésre a lerakaton, amikor ez a lehetőség engedélyezésre kerül",
		admin_collaboration_activity_stream: "Tevékenységfolyam-esemény konfigurációja",
		admin_collaboration_activity_stream_label: "Eseményinformációk átadása az IBM Connections eszköznek:",
		admin_collaboration_activity_stream_label_hover: "Adja meg, hogy az eseményinformációkat át kívánja-e adni az IBM Connections eszköznek, mint például a dokumentumlétrehozás, kiiktatások, beiktatások, megjegyzések, címkék és megosztások.<br><br><b>Fontos:</b> Az értesítések IBM Connections eszköznek való átadása hatással lehet a lerakat teljesítményére.",

		admin_collaboration_activity_stream_instruction: "Beállíthatja ezt a lerakatot az eseményinformációk átadására IBM Connections eszköznek, mint például a megjegyzések és dokumentumjóváhagyások. Az események megjelennek a <b>Új frissítések</b> oldalon az IBM Connections közösségekben. ",
		admin_collaboration_activity_stream_ignored_ids: "Eseményinformációk figyelmen kívül hagyása adott felhasználók és csoportok esetén:",
		admin_collaboration_activity_stream_ignored_ids_hover: "figyelmen kívül hagyhatja az adott felhasználók vagy csoportok által előállított eseményeket, mint például az adminisztrátorok vagy rendszerfiókok, a felhasználók számára megjelenő értesítések számának csökkentése érdekében. Ha például átállítja a tartalmat, akkor megadhatja, hogy az átállításhoz használt fiók által előállított események figyelmen kívül maradjanak.",
		admin_collaboration_activity_stream_userid: "IBM Connections felhasználónév:",
		admin_collaboration_activity_stream_userid_hover: "Adja meg a rendszerfiókot, amelyet a Content Platform Engine használ a hitelesítéshez és eseményinformációkat küld az IBM Connections eszköznek. A felhasználónak a <b>trustedExternalApplication</b> szerep tagjának kell lennie a Felületi elem tároló alkalmazásban az IBM Connections eszközben.<br><br><b>Tipp:</b> Alapértelmezésben az IBM Connections adminisztrátor rendelkezik a megfelelő jogosultságokkal. Használhatja az adminisztrátori azonosítót felhasználónévként",
		admin_collaboration_activity_stream_password: "IBM Connections felhasználói jelszó:",

		admin_help_url: "Végfelhasználói súgó URL címe:",
		admin_help_url_hover: "<b>Fontos megjegyzés:</b> Az ügyfél által telepített IBM Knowledge Center nem kerül frissítésre az IBM Content Navigator 3.0.0 változatával. Az egyéni súgó használatával kapcsolatos további információkért lépjen kapcsolatba az ügyfélszolgálattal.<br><br>Az IBM Content Navigator 3.0.0 változatában a végfelhasználói súgó URL címe az IBM Knowledge Center címére mutat. Az IBM Knowledge Center URL címe a következő: http://www.ibm.com/support/knowledgecenter.<br><br>Ha továbbra is az előzőleg telepített IBM Knowledge Center ügyfél példányt szeretné használni, akkor adja meg annak az IBM Knowledge Center ügyfél példánynak az URL címét, melyet az IBM Content Navigator konfigurációs és telepítési eszköz telepített. Az URL címnek elérhetőnek kell lennie az ügyfél számítógépek számára. Az URL formátuma: http://kiszolgálónév:portszám/kc.<br><br>A kiszolgálónév és portszám az IBM Content Navigator telepítési könyvtár KnowledgeCenter/logs alkönyvtárában található console.log fájlból kérhető le.",

		admin_help_default: "Az IBM által biztosított alapértelmezett súgó használata",
		admin_custom_help: "Egyéni súgórendszer használata",
		admin_help_kc: "Egyéni súgó használata a telepített IBM Knowledge Center ügyfélben",
		admin_help_kc_hover: "<b>Fontos megjegyzés:</b> Az ügyfél által telepített IBM Knowledge Center nem kerül frissítésre az IBM Content Navigator 3.0.0 változatával. Az egyéni súgó használatával kapcsolatos további információkért lépjen kapcsolatba az ügyfélszolgálattal.<br><br>Ha továbbra is az előzőleg telepített IBM Knowledge Center ügyfél példányt szeretné használni, akkor válassza ezt a beállítást, hogy továbbra is tartalmat adhasson hozzá az előzőleg telepített IBM Knowledge Center ügyfél példányhoz.",
		admin_help_taxonomy: "Osztályozási kód:",
		admin_help_taxonomy_hover: "Adja meg az egyéni súgó osztályozási kódját.<br><br>Az IBM Content Navigator osztályozási kódja SSEUEX. Ha azt szeretné, hogy a telepített IBM Knowledge Center ügyfélben a súgó más terméknév alatt jelenjen meg, akkor egyedi osztályozási kódot kell megadnia az IBM Content Navigator telepítési könyvtár KnowledgeCenter/usr/taxonomy könyvtárában elhelyezkedő KC_taxonomy.ditamap fájlban.",
		admin_help_context: "Súgó kontextus:",
		admin_help_context_hover: "Adja meg az egyéni súgó kontextusát.<br><br>Az IBM Content Navigator súgója az IBM Content Navigator telepítési könyvtár KnowledgeCenter/usr/content/com.ibm.usingeuc.doc fájljában található. Az alapértelmezett súgó kontextusa a com.ibm.usingeuc.doc. Ha egyéni súgót kíván biztosítani, akkor vegye fel a tartalmat a KnowledgeCenter/usr/content/ könyvtár új alkönyvtárába.",
		admin_help_welcome: "Kezdőlap:",
		admin_help_welcome_hover: "Adja meg annak a témakörnek a nevét, melyet kezdőoldalként kíván beállítani, amikor a felhasználók elérik a súgót. Létre kell hoznia egy tulajdonságfájlt, amely meghatározza a kezdőoldal helyét, majd hozzá kell adnia ezt a tulajdonságfájlt az IBM Content Navigator telepítési könyvtár KnowledgeCenter/usr/conf könyvtárához.",

		admin_settings_mimetype_extensions_jsonfile: "Mime típus kiterjesztések JSON fájl:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Ellenőrizze a JSON fájl nevét és a teljes elérési utat a fájlhoz. A fájl lehet általános fájl a fájlrendszerből, illetve a JSON fájlra mutató URL-cím.  <br><br>A JSON fájl tartalma egy mime típus definíciókat tartalmazó tömb. <br><br>A mime típus definíció 4 kulcsot tartalmaz: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Az első két kulcs, \"mimeTypes\", \"extensions\", kötelező, és  \",\" elválasztókat használó karakterlánctömb lehet. Az utolsó két kulcs, \"fileType\", \"iconName\", választható. <br><br>Például: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demó,demószöveg\", <br>\"fileType\": \"fájl.típus.szöveg.dokumentum\",<br>\"iconName\": \"ikon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Feladatkezelő beállítása",
		admin_taskmanager_service: "Feladatkezelő szolgálatatás",
		admin_taskmanager_service_hover: "Adja meg, szeretné-e a feladatkezelő szolgáltatást használni aszinkron feladatok létrehozására és futtatására. <br><br>Ha megváltoztatja ezt a beállítást, akkor ahhoz, hogy érvényre lépjen, újra kell indítania az IBM Content Navigator webalkalmazást.",
		admin_taskmanager_url: "Feladatkezelő szolgáltatás URL-je:",
		admin_taskmanager_url_hover: "Az URL-lel adja meg, melyik alkalmazások kommunikálhatnak a feladatkezelő szolgáltatással. Az URL cím formátuma a következő: http://kiszolgáló_neve:port_száma/feladatkezelőWeb/api/v1.",
		admin_taskmanager_logdirectory: "Feladatkezelő naplókönyvtár:",
		admin_taskmanager_logdirectory_hover: "A Feladatkezelő szolgáltatás naplófájljai alapértelmezésben ugyanabba a könyvtárba kerülnek, mint a webalkalmazás kiszolgáló naplófájljai. <br><br>Ha azt akarja, hogy a naplózási információk az IBM Content Navigator kiszolgáló egy másik könyvtárába kerüljenek, akkor adja meg annak a könyvtárnak a teljes képzésű útvonalát, ahol a feladatkezelő összetevő által létrehozott naplófájlokat tárolni szeretné. <br><br>Ha megváltoztatja ezt a beállítást, akkor ahhoz, hogy érvényre lépjen, újra kell indítania az IBM Content Navigator webalkalmazást.",
		admin_taskmanager_heartBeatMonitor: "Fürt életjel figyelés",
		admin_taskmanager_heartBeatMonitor_hover: "Csak magas rendelkezésre állású fürtkörnyezetekben. Ha engedélyezi ezt a beállítást, akkor a feladatkezelő átirányítja a feladatokat az éppen álló csomópontokról azokra, amelyek éppen futnak. <br><br>Ha megváltoztatja ezt a beállítást, akkor ahhoz, hogy érvényre lépjen, újra kell indítania az IBM Content Navigator webalkalmazást.",

		admin_syncserver_title: "Szinkronizációs kiszolgáló konfiguráció",
		admin_syncserver_enable: "Szinkronizálási szolgáltatások:",
		admin_syncserver_enable_hover: "Adja meg, hogy a munkaasztalt elérő felhasználók szinkronizálhassák-e elemeiket a munkaállomásuk és a mobileszközeik között.<br><br><b>Fontos:</b> A szolgáltatás használatához a következőket kell tennie:<ul><li>Adja meg a <b>Szinkronizálási szolgáltatások nyilvános URL címét</b> az adminisztrációs eszköz <b>Szinkronizálási szolgáltatások</b> részében.</li><li>Adjon hozzá egy olyan lerakatot a munkaasztalhoz, melyre a szinkronizálási szolgáltatások engedélyezettek.</li></ul>Ha ezt a beállítást tiltja, de a munkaasztalhoz hozzáad egy olyan lerakatot, melyre a szinkronizálási szolgáltatások engedélyezettek, akkor a beállítás a lerakaton figyelmen kívül marad.",
		admin_mobileqr_enable: "IBM Navigator QR kód megjelenítése a bejelentkezési oldalon:",
		admin_mobileqr_enable_hover: "Engedélyezze ezt a beállítást, ha meg szeretné jeleníteni a QR kódot az IBM Navigator mobil alkalmazásban a webes ügyfél bejelentkezési oldalán.<br><br>Amikor egy felhasználó beolvassa a QR kódot, megnyílik az eszközének megfelelő alkalmazásbolt, ahonnan letöltheti az IBM Navigator mobilalkalmazást.",

		admin_streamlineservice_enable: "Szerkesztési szolgáltatás:",
		admin_streamlineservice_enable_hover: "Csak FileNet P8 felhasználók számára. A beállítás engedélyezésével az asztali felhasználók könnyen adhatnak hozzá és szerkeszthetnek dokumentumokat a munkaállomásukon lévő natív alkalmazásokból. <br><br>A beállítás használatához a következők is szükségesek: <ul><li>Engedélyezze a szerkesztési szolgáltatást legalább egy lerakathoz, amely társítva van ezzel a munkaasztallal</li><li>Telepítse az IBM Content Navigator Edit ügyfelet a felhasználói munkaállomásokra</li></ul>",

		admin_repository_general_instructions: "Csatlakoznia kell a lerakathoz, mielőtt beállíthatná a paramétereket, rendszertulajdonságokat, mappákat és további dolgokat.",
		admin_repository_system_instructions: "Adja meg, hogy a lerakatban található dokumentumok és mappák mely rendszertulajdonságai kerülnek megjelenítésre.",

		admin_desktop_general_create_instructions: "A munkaasztal határozza meg, hogy a felhasználó mit láthat és csinálhat, miután bejelentkezett a webes ügyfélbe. A munkaasztal létrehozását követően elküldheti annak URL címét azoknak a felhasználóknak, akiknek hozzáférést kíván biztosítani a munkaasztalhoz.",
		admin_desktop_admin_instructions: "Az adminisztrációs munkaasztalt a webes ügyfélprogram biztosítja. Ez lehetővé teszi az adminisztrátorok számára a webes ügyfél beállítását. Ez a munkaasztal hozzáfér a webes ügyfél számára konfigurált összes lerakathoz.",
		admin_desktop_repositories_instructions: "Határozza meg, hogy melyik lerakatokhoz kíván hozzáférést biztosítani a felhasználóknak erről a munkaasztalról. A lerakatokat konfigurálni kell, mielőtt hozzáadná azokat a munkaasztalhoz.<br><br><b>Tipp:</b> Korlátozhatja, hogy mely lerakatok álljanak rendelkezésre álló az egyes szolgáltatásokhoz a munkaasztal elrendezésének beállításakor.",
		admin_desktop_menus_instructions: "Határozza meg, hogy melyik menükhöz kíván hozzáférést biztosítani a felhasználóknak erről a munkaasztalról. A menüket konfigurálni kell, mielőtt hozzáadná azokat a munkaasztalhoz.<br><br><b>Tipp:</b> A menük tartalmát az adminisztrációs eszköz <b>Menük</b> részében személyre szabhatja, továbbá bedolgozók létrehozásával új típusú menüket is létrehozhat.",

		admin_desktop_no_repositories: "Nincsenek lerakatok beállítva.",

		admin_desktop_id_hover: "A munkaasztal azonosítót a webes ügyfél URL címe tartalmazza, és megadja, hogy melyik munkaasztal legyen megnyitva, amikor egy felhasználó bejelentkezik a webes ügyfélre. Az azonosítónak egyedinek kell lennie, és a munkaasztal mentése után nem módosítható.<br><br>Az azonosító csak alfanumerikus karaktereket tartalmaz, és a kis- és nagybetűk eltérőnek számítanak.",
		admin_desktop_id_disabled_hover: "A munkaasztal-azonosító nem módosítható. Ha más azonosítót kíván használni, akkor új munkaasztalt kell létrehoznia.",
		admin_desktop_name_hover: "A munkaasztal neve nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "A konfigurációja csak egy alapértelmezett munkaasztalt tartalmazhat.",

		admin_repository_id_disabled_hover: "A lerakatazonosító nem módosítható. Ha más azonosítót kíván használni, akkor új lerakatkapcsolatot kell létrehoznia.",
		admin_printService_enable: "Nyomtatás az IBM Daeja ViewONE nyomtatási szolgáltatással: ",
		admin_printService_enable_hover: "Ha engedélyezi az IBM Daeja ViewONE nyomtatási szolgáltatást, akkor a dokumentumok átalakításra kerülnek PDF formátumra, és a nyomtatás bármely webböngésző használatával elvégezhető. <br><br>Ha letiltja az IBM Daeja ViewONE nyomtatási szolgáltatást, akkor a dokumentumokat csak Java kisalkalmazásokat támogató böngészővel nyomtathatja ki.  Egyes webböngészők nem támogatják a Java kisalkalmazásokat, ezért a kisalkalmazáson keresztüli nyomtatást sem.<br><br>A támogatott böngészőket a dokumentáció tartalmazza.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Felhasználó saját könyvtára",
		admin_file_tracking_doc_directory_my_documents: "Felhasználó dokumentumkönyvtára",
		admin_file_tracking_doc_directory_qp: "Képzett elérési út",
		admin_file_tracking_section_tile: "Fájlnyomkövetési konfiguráció",
		admin_file_tracking_home_path: "Saját könyvtár elérési útja",
		admin_file_tracking_my_documents: "Saját dokumentumok",
		admin_file_tracking_exact_path: "Teljes képzésű elérési út:",
		admin_file_tracking_qp: "Képzett elérési út",
		admin_file_tracking_ev: "Környezeti változó",
		admin_file_tracking_ev_us: "Egyéni környezeti változó ",
		admin_file_tracking_del_local_copy: "Helyi másolat törlése:",
		admin_file_tracking_yes: "Igen",
		admin_file_tracking_no: "Nem",
		admin_file_tracking_del_local_copy_rt_state_editable: "Beállítás felülbírálásának engedélyezése a felhasználók számára",
		admin_file_tracking_del_local_copy_rt_state1: "Igen",
		admin_file_tracking_del_local_copy_rt_state2: "Nem",
		admin_file_Tracking_label: "Fájlnyomkövetés:",
		admin_file_Tracking_disable: "Letiltás",
		admin_file_Tracking_enable: "Engedélyezés",
		admin_file_tracking_label_hover_help: "A fájlnyomkövetés egy kisalkalmazást használ a dokumentumok kiiktatásához és letöltéséhez a felhasználó gépének adott könyvtárába. A kisalkalmazás azt is lehetővé teszi, hogy az IBM Content Navigator megkeresse a dokumentumokat a felhasználó gépén, amikor a felhasználó beiktatja a dokumentumokat.",
		admin_file_tracking_doc_directory: "Tároló helye:",
		admin_file_tracking_open_file: "Fájl automatikus megnyitása:",
		admin_file_Tracking_append_qualified_path: "Könyvtár hozzáfűzése",
		admin_file_Tracking_append_qualified_path_hover_help: "Hozzáfűzhet egy könyvtárat a környezeti változó végéhez, ha azt kívánja, hogy a dokumentumok adott alkönyvtárba kerüljenek mentésre. <br/><br/>Megadhatja például, hogy a dokumentumok letöltésre kerüljenek a felhasználó saját könyvárában lévő <i>EnterpriseDocuments</i> könyvtárba.",
		admin_file_Tracking_append_ev: "Környezeti változó hozzáfűzése",
		admin_file_Tracking_append_ev_hover_help: "Hozzáfűzhet egy katalógust, ha azt kívánja, hogy a dokumentumok dinamikusan megadott könyvtárba kerüljenek mentésre, mint például a felhasználói könyvtár.<br/><br/>Megadhatja például, hogy a dokumentumok a megosztott hálózati könyvtár <i>felhasználónév</i> alkönyvtárában kerüljenek tárolásra. ",
		admin_file_tracking_doc_directory_hover_help: "Adja meg, hogy a dokumentumok hol kerüljenek tárolásra kiiktatáskor és letöltéskor.<br/><br/> <b>Tipp</b>: Ha a dokumentumokat a felhasználó saját könyvtárában vagy az alapértelmezett dokumentumkönyvtárban kívánja tárolni, akkor válassza ki a <b>Környezeti változót</b>, amely tartalmazza az ezekre a helyekre mutató, előre megadott változókat.",
		admin_file_tracking_qualified_path_hover_help: "Használja a megfelelő könyvtárstruktúrát Windows vagy Mac operációs rendszeren a dokumentumok tárolásához használni kívánt könyvtár vagy hálózati könyvtár megadásához. <ul><li>Windows rendszeren adjon meg egy meghajtó betűjelet az útvonalon, mint például a C:\\Enterprise Documents.</li><li>Megosztott hálózati könyvtár esetén adja meg az útvonalat a következő formátumban: \\\\kiszolgálónév\\könyvtár</li></ul><br/><b>Fontos:</b> Ennek a beállításnak a használatához a megadott könyvtárszerkezetet létre kell tudni hozni a környezet összes ügyfél-munkaállomásán.",
		admin_file_tracking_environment_variable_path_hover_help: "Használja a megfelelő környezeti változókat Windows vagy Mac operációs rendszeren a dokumentumok tárolásához használni kívánt könyvtár vagy hálózati könyvtár megadásához. <br/><br/>A <b>Felhasználó saját könyvtára</b> lehetőség a dokumentumokat a következő könyvtárban tárolja:<br/><ul><li>Windows: C:\\Felhasználók\\Felhasználónév</li><li>Mac: /Felhasználók/Felhasználónév</li></ul><br/>A <b>Felhasználó dokumentumkönyvtára</b> lehetőség a dokumentumokat a következő könyvtárban tárolja:<br/><ul><li>Windows: C:\\Felhasználók\\Felhasználónév\\Dokumentumok</li><li>Mac: /Felhasználók/Felhasználónév/Dokumentumok</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Adja meg, hogy dokumentum helyi másolata törlésre kerüljön-e, amikor a felhasználók hozzáadják vagy beiktatják a dokumentumokat a lerakatba.<br/><br/>A helyi másolat törlése lehetővé teszi a következőt:<br/><ul><li>IT irányelvekkel való megfelelés kikényszerítése</li><li>Annak biztosítása, hogy a felhasználók a dokumentumok legfrissebb változatát használják</li></ul><br/><b>Korlátozás:</b> Ez a beállítás nem használható akkor, ha a felhasználók odahúzással adnak hozzá dokumentumokat.<br/><br/>IBM Content Navigator for Microsoft Office esetében ki kell választania a <b>Helyi fájlok törlése, ha a felhasználók dokumentumokat adnak hozzá vagy iktatnak be, vagy leállítanak egy kiiktatást</b> lehetőséget az asztal <b>Office beállítás</b> részében.",
		admin_file_tracking_open_file_hover_help: "Ez a beállítás felülbírálja a felhasználó webböngészőjében beállított dokumentumkezelési beállításokat. </br></br><b>Korlátozás:</b> Ezt a beállítást az IBM Content Navigator for Microsoft Office nem használja.",
		admin_file_tracking_over_write_file: "Helyi másolat felülírása:",
		admin_file_tracking_over_write_file_hover_help: "Adja meg, hogy dokumentum helyi másolata felülírásra kerüljön-e, amikor a felhasználók kiiktatják a dokumentumokat a lerakatból. <br/><br/>A helyi másolat felülírása lehetővé teszi a következőt:<br/><ul><li>Annak biztosítása, hogy a felhasználók a dokumentumok legfrissebb változatát használják</li><li>Annak megakadályozását, hogy a felhasználók rákérdezést lássanak helyi másolat létezése esetén</li></ul> </br></br><b>Korlátozás:</b> Ezt a beállítást az IBM Content Navigator for Microsoft Office nem használja, ha a <b>Beállítás felülbírálásának engedélyezése a felhasználók számára</b> lehetőséget választja.",
		admin_file_tracking_over_write_file_state_editable: "Beállítás felülbírálásának engedélyezése a felhasználók számára",
		admin_file_tracking_inline_help: "A fájlnyomkövetés leegyszerűsíti a dokumentumok ki- és beiktatásának folyamatát a lerakatban. Ezzel azt is megadhatja, hogy a dokumentumok hogyan kerüljenek tárolásra a felhasználói gépen. <br/><br/>Ezen felül a fájlnyomkövetés lehetővé teszi a dokumentumok nyomkövetését több IBM Content Navigator összetevőn, mint például a webes ügyfél és az IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Mielőtt csatlakozhatna a lerakathoz, engedélyeznie kell a szabványos vagy kiszolgálói hitelesítést.",
		admin_box_use_oauth: "Hitelesítés típusa:",
		admin_box_use_oauth_hover: "Amikor a Box dokumentumokhoz biztosít hozzáférést az IBM Content Navigator alkalmazásból éles környezetben, akkor válassza a szabványos vagy kiszolgálói hitelesítést. Adja meg az ügyfélazonosító és OAuth2 ügyféltitok értékeket, amelyek az IBM Content Navigator ezen telepítéséhez kapcsolódnak. Ezeket az értékeket a Box-ból kérdezheti le, miután létrehozta a Box alkalmazást az IBM Content Navigator kiszolgálójához.<br/><br/>Fejlesztői környezetben válasszon fejlesztői hitelesítést. A fejlesztők bejelentkezhetnek a Box alkalmazásba a fejlesztői fiókjukkal, és előállíthatnak egy 60 percig érvényes fejlesztői tokent. A fejlesztői token lehetővé teszi a fejlesztők számára, hogy a fejlesztői tokent bármely felhasználói azonosító jelszavaként használva bejelentkezzenek a Box alkalmazásba.",
		admin_box_oauth_client_id: "ügyfélazonosító:",
		admin_box_oauth_client_secret: "ügyféltitok:",
		admin_box_oauth_subdomain: "Box vállalati fiók altartomány:",
		admin_box_share: "Feladatkezelő kapcsolat azonosítója:",
		admin_box_share_hover: "A Box másolás vagy a Box megosztás esetén a feladatkezelő egy adminisztrátori felhasználói azonosítót és jelszót használ a lerakatot módosító háttérfeladatok futtatásához.<br/><br/>Kattintson a Beállítás lehetőségre, és jelentkezzen be a Box alkalmazásba egy érvényes Box adminisztrátori fiókkal.<br/><br/>Ha egy munkaasztalt konfigurál a Box lerakat kiválasztásával a megosztott fájlok lerakataként, akkor meg kell adnia egy Box adminisztrátori felhasználót, aki korlátlan tárterülettel rendelkezik a Box alkalmazáshoz.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Fájl automatikus megnyitása:",
		file_tracking_runtime_overwrite_hover_help: "Ha nem választja ki ezt a lehetőséget, és vannak ilyen nevű dokumentumok a helyi fájlrendszeren, akkor a dokumentum kiiktatásra kerül, de nem kerül letöltésre, hacsak nem végzi el a következő műveletek egyikét:<br/><ul><li> A dokumentum letöltése az alapértelmezett könyvtár egy alkönyvtárába. Ha kiválaszt egy alkönyvtárat, akkor a dokumentum helyét a webalkalmazás nyomon tudja követni.</li><li>Átnevezi a letöltendő dokumentumot. A dokumentum átnevezése megakadályozza a névütközést.</li></ul>",
		open_file: "Fájl automatikus megnyitása:",
		over_write_file: "Helyi másolat felülírása:",
		checkout_and_download_file: "Dokumentumok kiiktatása és letöltése",
		download_to_local_directory: "Letöltés helye:",
		checkout_and_download_button_title: "Kiiktatás és letöltés",
		checkout_without_java_confirmation_dialog: "A fájl nem tölthető le és a fájlnyomkövetési szolgáltatás nem tudja nyomon követni.",
		browse_for_directory: "Tallózás",
		selected_documents: "Kiválasztott dokumentumok",

		checkout_without_java_confirmation_text: "Ezt a problémát az alábbiak okozhatják:<br/><ul><li>A Java futási környezet (JRE) nincs telepítve a munkaállomáson.</li><li>A Java bedolgozó nem engedélyezett a webböngészőben.</li><li>A webböngésző nem támogatja a Javat.</li></ul><br/><br/>A probléma megoldásához végezze el a megfelelő műveletet:<br/><br/><ul><li>Ha folytatni kívánja a fájl letöltését a fájlnyomkövetés engedélyezése nélkül, akkor kattintson az OK gombra.</li><li>Ha a fájlt a fájlnyomkövetés engedélyezésével kívánja letölteni, akkor vonja vissza a letöltését és biztosítsa, hogy a JRE telepítve legyen a munkaállomáson és a Java bedolgozó engedélyezett legyen a webböngészőben.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "A dokumentum kiiktatásra és letöltésre került, de a dokumentum nem nyitható meg.",
		runtime_file_tracking_open_error_explanation: "A munkaállomáson telepített operációs rendszer nem támogatja ezt a fájltípust.",
		runtime_file_tracking_open_error_userResponse: "A probléma megoldása érdekében tegye a következők egyikét:<br/><br/><ul><li>Ha kezelnie kell a dokumentumot, akkor nyissa meg a webes ügyfelet másik munkaállomásról, amelyen operációs rendszer fut.</li><li>Ha a dokumentumot csak megtekinteni kívánja, akkor kattintson a jobb egérgombbal a dokumentumra a webböngészőben, majd kattintson a Megnyitás műveletre.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "A dokumentum kiiktatásra került, de nem került letöltésre.",
		runtime_file_tracking_save_file_error_explanation: "Már létezik ilyen nevű dokumentum a fájlrendszeren, de az nem került felülírásra. ",
		runtime_file_tracking_save_file_error_userResponse: "Ha le kívánja tölteni a fájlt a lerakatból, akkor felül kell írnia a dokumentum helyi másolatát a dokumentum lerakatból való letöltése során.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "A dokumentum kiiktatásra került, de nem tölthető le és nem nyitható meg.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Már létezik ilyen nevű dokumentum a fájlrendszeren. Azonban a fájl nem került felülírásra, amely megakadályozza a lerakatban lévő dokumentum letöltését és megnyitását.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Ha le kívánja tölteni a fájlt a lerakatból, akkor felül kell írnia a dokumentum helyi másolatát a dokumentum lerakatból való letöltése során.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "A dokumentum nem tölthető le.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "A fájlkövetéshez szükséges ${0} környezeti változó nincs megadva ezen az ügyfélgépen.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "A probléma megoldásához:<br/><br/><ul><li>Adja hozzá a(z) ${0} környezeti változót az operációs rendszer környezeti változóihoz.</li><li>Jelentkezzen ki a webes ügyfélből, majd zárja be a webböngészőt. Majd jelentkezzen újra be.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "A dokumentum nem tölthető le és a fájlnyomkövetési kisalkalmazás nem tudja nyomon követni.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "A fájlkövetéshez szükséges ${0} könyvtár nincs megadva és nem hozható létre.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "A probléma megoldásához végezze el a megfelelő műveletet:<br/><br/><ul><li>Kattintson a Tallózás gombra és válasszon ki másik könyvtárat az ügyfélgépen. Ha kiválasztja ezt a lehetőséget, akkor nem kerül nyomkövetés alkalmazásra a fájlon.</li><li>Lépjen kapcsolatba a rendszeradminisztrátorral és kérje meg, hogy adjon meg másik könyvtárat a fájlok nyomkövetéséhez. Erre például akkor lehet szükség, ha a megadott könyvtár Windows operációs rendszerhez tartozik, de a felhasználó Mac operációs rendszert használ. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Ha ezt a munkaasztalt különböző operációs rendszerrel működő eszközökről érik el, akkor csökkentheti a problémák valószínűségét a következőkkel:<br/><br/><ul><li>Használjon környezeti változókat a tárolóhely megadásához az ügyfélgépeken.</li><li>Hozzon létre különböző munkaasztalokat az egyes típusú eszközökhöz. Például hozzon létre egy munkaasztalt a Windows operációs rendszert használó felhasználók számára, illetve egy másikat a Mac operációs rendszert használók számára.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "A kérés nem dolgozható fel.",
		runtime_file_tracking_generic_error_explanation: "Hiba történt a fájlnyomkövetési kisalkalmazásban.",
		runtime_file_tracking_generic_error_userResponse: "Lépjen kapcsolatba a rendszeradminisztrátorral segítségért.",
		runtime_file_tracking_generic_error_adminResponse: "Nyissa meg a Java konzolt, majd próbálja meg elküldeni a kérést újra. A hiba részletei megjelennek a Java konzolon.<br/><br/>A Java konzol az operációs rendszer vezérlőpaneljéből (Windows) vagy a System Preferences panelben (Mac) érhető el.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "A kérés nem dolgozható fel",
		runtime_file_tracking_cannot_delete_file_error_explanation: "A következő fájlok hozzáadásra kerültek a lerakathoz, de nem kerültek törlésre a helyi fájlrendszerből: ${0}. Ez általában olyankor történik, ha a fájlok nyitva vannak vagy azokat egy másik alkalmazás éppen használja. Ha szükséges, kézzel törölheti a fájlokat.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "A dokumentum nem tölthető le.",
		runtime_file_tracking_ioexception_error_explanation: "A dokumentum nem tölthető le.",
		runtime_file_tracking_ioexception_userResponse: "Elképzelhető, hogy nem rendelkezik a megfelelő jogosultsággal a következő könyvtár írásához: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Biztosítsa, hogy rendelkezzen írás jogosultsággal a megadott könyvtárhoz. Ha nem rendelkezik írás jogosultsággal a megadott könyvtár írásához, akkor lépjen kapcsolatba a rendszeradminisztrátorral.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "A kérés nem dolgozható fel.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Ezt a hibát a következők okozhatják:<br/><br/><ul><li>Safari böngészőt használ Mac OS operációs rendszeren, és a Java védett módban fut.</li><li>Nem rendelkezik olvasási/írási engedélyekkel a munkaasztal fájlnyomkövetési konfigurációjában megadott könyvtárhoz.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Folytathatja az IBM Content Navigator használatát fájlnyomkövetés nélkül, vagy a probléma megoldása érdekében a következőket teheti:<br/><br/><ol><li>Engedélyezze a Java nem biztonságos módját a Safari böngészőben.</li><li>Ha a rendszer rákérdez, hogy megbízik-e az IBM Content Navigator webhelyben, akkor válassza a <b>Megbízom</b> lehetőséget az oldal betöltéséhez, majd engedélyezze a Java nem biztonságos módját a Safari böngészőben.</li></ol><br/><br/>Ha a Safari helyesen van beállítva, akkor a probléma megoldása érdekében tegye a következőket:<br/><br/><ol><li>Győződjön meg róla, hogy rendelkezik olvasási/írási engedélyekkel a munkaasztal fájlnyomkövetési konfigurációjában megadott könyvtárhoz.</li><li>Ha nem rendelkezik olvasási/írási engedélyekkel a könyvtárhoz, akkor szerkessze a könyvtárengedélyeket.</li><li>Ha nem tudja szerkeszteni a könyvtár engedélyeit, akkor az adminisztrátornak módosítania kell a fájlnyomkövetéshez konfigurált könyvtárat, vagy hozzáférést kell adnia az Ön számára egy olyan munkaasztalhoz, amelyhez más fájlnyomkövetési könyvtár van beállítva.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "A kérés nem dolgozható fel.",
		runtime_file_tracking_java__notfound_error_explanation: "Ez a probléma általában a következő helyzetekben fordulhat elő:<br/><br/><ul><li>A Java futási környezet (JRE) nincs jelen vagy nincs engedélyezve a munkaállomáson.</li><li>A munkaállomásán meglévő JRE változat nem kompatibilis az IBM Content Navigator változattal.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Folytathatja az IBM Content Navigator használatát fájlnyomkövetés nélkül, vagy a probléma JRE-vel való megoldása érdekében a következőket teheti:<br/><br/><ol><li>Győződjön meg róla, hogy a JRE telepítve van a munkaállomásán.</li><li>Győződjön meg róla hogy a munkaállomáson a JRE változat kompatibilis az IBM Content Navigator-ral. A támogatott változatok az IBM szoftvertámogatási webhelyen az <i>IBM Content Navigator hardver és szoftver előfeltételei</i> dokumentumban találhatók.</li><li>Győződjön meg róla, hogy a JRE engedélyezve van a munkaállomásán.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "A kérés nem dolgozható fel.",
		runtime_file_tracking_security_error_explanation: "Nem rendelkezik olvasási/írási engedélyekkel a munkaasztal fájlnyomkövetési konfigurációjában megadott könyvtárhoz.",
		runtime_file_tracking_security_error_userResponse: "Folytathatja az IBM Content Navigator használatát fájlnyomkövetés nélkül, vagy a rendszeradminisztrátorral együtt a következőket tehetik:<ol><li>Győződjön meg róla, hogy rendelkezik olvasási/írási engedélyekkel a munkaasztal fájlnyomkövetési konfigurációjában megadott könyvtárhoz. </li><li>Ha nem rendelkezik olvasási/írási engedélyekkel a könyvtárhoz, akkor szerkessze a könyvtárengedélyeket.</li><li>Ha nem tudja szerkeszteni a könyvtár engedélyeit, akkor az adminisztrátornak módosítania kell a fájlnyomkövetéshez konfigurált könyvtárat, vagy hozzáférést kell adnia az Ön számára egy olyan munkaasztalhoz, amelyhez más fájlnyomkövetési könyvtár van beállítva.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "A következő dokumentumok letöltésre kerültek: ${0}.",

		admin_file_tracking_inline_help: "A fájlnyomkövetés leegyszerűsíti a dokumentumok hozzáadásának, valamint ki- és beiktatásának folyamatát a lerakatban. Ezzel azt is megadhatja, hogy a dokumentumok hogyan kerüljenek tárolásra a felhasználói gépen.<br/><br/>Ezen felül a fájlnyomkövetés lehetővé teszi a dokumentumok nyomkövetését több IBM Content Navigator összetevőn, mint például a webes ügyfél és az IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "A menü azonosítója nem kezdődhet a \"Default\" előtaggal. A \"Default\" a menük azonosítóinak fenntartott előtag.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Az azonosító csak alfanumerikus karaktereket tartalmaz, és a kis- és nagybetűk eltérőnek számítanak.",
		admin_repository_id_hover: "A lerakatazonosítót webes ügyfél URL címek, kedvencek és e-mail hivatkozások tartalmazzák; megadja, hogy melyik lerakatba kell bejelentkezni. Az azonosítónak egyedinek kell lennie, és a lerakat mentését követően nem módosítható.<br><br>Az azonosító csak alfanumerikus karaktereket tartalmaz, és a kis- és nagybetűk eltérőnek számítanak.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "A név nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "A munkaasztal azonosítója nem tartalmazhat szóközt és a következő karaktereket: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "A munkaasztal neve nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "A megjelenő név nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Adja meg a webes ügyfélben a felhasználók számára megjelenítendő lerakatot.<br><br>A név nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Adja meg annak a Content Manager OnDemand kiszolgálónak a hosztnevét vagy IP címét, amelyhez csatlakozni kíván, például server.id.com.",
		admin_server_p8_name_hover: "Adja meg a Content Engine vagy a Content Platform Engine kiszolgáló URL címét. Az URL címben a kis- és nagybetűk eltérőnek számítanak és formátuma a következő:<br><br><ul><li>WebSphere Application Server esetében iiop://hosztnév:portszám/FileNet/Engine. Az alap telepítések alapértelmezett portszáma 2809.</li><li>WebLogic Server kiszolgálón, t3://hosztnév:portszám/FileNet/Engine. Az alapértelmezett portszám 7001.</li></ul><br><br>A Content Engine és a Content Platform Engine magas szintű rendelkezésre állást biztosító beállításához használja a magas szintű rendelkezésre állást biztosító EJB szállítás URL címét a következő CEMP nélkül: előtag. ",
		admin_server_p8_protocol_hover: "Adja meg a Content Engine  kiszolgálóval folytatott kommunikációhoz használandó protokollt.",
		admin_server_cm_name_hover: "Adja meg a Content Manager adatbázis helyi katalógusnevét vagy a könyvtárkiszolgáló kapcsolat nevét. Ez a név az ICMSERVER változóban megadott érték.",
		admin_repository_cmis_hover: "Adja meg annak a lerakatnak az azonosítóját, amelyhez csatlakozni kíván.  A CMIS környezet összes lerakatának azonosítója fel van sorolva az AtomPub kötési szolgáltatás dokumentumban.  <br/><br/><b>Tipp: </b>Csillagot (*) is megadhat, amely esetben az Atompub kötési szolgáltatás dokumentumban meghatározott első vagy egyetlen lerakathoz fog kapcsolódni.",
		admin_url_cmis_hover: "Az URL cím formátuma szolgáltatónként változik. Az URL címért tanulmányozza a CMIS dokumentációt, vagy keresse meg a CMIS kiszolgáló adminisztrátorát.",
		admin_repcfg_cmis_status_columns_hover: "Adja meg azokat az elemállapotokat, amelyek ikonjait megjeleníteni kívánja. Az állapotikonok a tartalomlistában a dokumentumok mellett jelennek meg.",
		admin_port_hover: "Adja meg azt a TCP/IP portszámot, amin a Content Manager OnDemand kiszolgáló figyel. Az alapértelmezett érték: 1445.",
		admin_unified_searches_hover: "Adja meg, hogy a felhasználók elmenthessenek-e lerakatok közötti kereséseket a lerakatba.<br/><br/>A felhasználók akkor is indíthatnak lerakatok közötti kereséseket a lerakaton, ha ez a beállítás nincs engedélyezve. Megtiltható a felhasználók számára, hogy lerakatok közötti kereséseket indítsanak a munkaasztal szintjén.<br/><br/>Ha a lerakatok közötti keresések engedélyezve vannak, akkor az IBM Content Navigator létrehozza a lerakatok közötti keresés adatmodellt a lerakatban.<br/><br/>IBM FileNet Content Manager használata esetén Content Engine adminisztrátorként csatlakoznia kell a lerakathoz, mielőtt engedélyezné ezt a beállítást.",
		admin_unified_searches_cm_hover: "Adja meg, hogy a felhasználók elmenthessenek-e lerakatok közötti kereséseket a lerakatba.<br/><br/>A felhasználók akkor is indíthatnak lerakatok közötti kereséseket a lerakaton, ha ez a beállítás nincs engedélyezve. Megtiltható a felhasználók számára, hogy lerakatok közötti kereséseket indítsanak a munkaasztal szintjén.<br/><br/>Ha a lerakatok közötti keresések engedélyezve vannak, akkor az IBM Content Navigator létrehozza a lerakatok közötti keresés adatmodellt a lerakatban.",
		admin_max_results_hover: "Határozza meg, hogy legyen-e korlátozás a keresési találatok számán. Ha nem korlátozza a keresési találatok számát, akkor teljesítménybeli problémák jelentkezhetnek, amennyiben egy keresés nagy számú találatot ad vissza.",
		admin_timeout_hover: "Adja meg (másodpercben), hogy egy keresés mennyi ideig futhat a lerakaton. Ha a keresés nem fejeződik be a megadott időn belül, akkor a webes ügyfél megszakítja a kérést. A javasolt maximális időkorlát 60 másodperc.",
		admin_object_store_hover: "Adja meg azt az objektumtárolót, amelyhez a Content Engine kiszolgálón csatlakozni kíván. A szimbolikus nevet lekérheti a Content Platform Engine adminisztrációs konzolról.",
		admin_object_store_display_name_hover: "Az objektumtároló megjelenő neve az IBM FileNet P8 munkafolyamatok használatához szükséges. Az objektumtároló megjelenő nevét lekérheti a Content Platform Engine Adminisztrációs konzolról.",
		admin_all_searches_hover: "Adja meg, hogy korlátozni szeretné-e az <b>Összes keresés</b> alatt megjelenített keresések számát, amikor a felhasználók a lerakatban keresnek. Ha nem korlátozza a keresések számát, akkor teljesítmény problémákat tapasztalhat, ha a lerakat nagyszámú mentett keresést tartalmaz.",

		admin_text_desktop: "Munkaasztal",
		admin_text_repository: "Lerakat",
		admin_text_plugin: "Bedolgozó",
		admin_text_theme: "Téma",
		admin_text_menu: "Menü",
		admin_text_reason_code: "Szerkesztés oka",
		admin_text_redactions: "Szerkesztések",
		admin_text_viewer_mapping: "Megtekintő leképezés",
		admin_text_mobile_feature: "Mobil összetevő",
		admin_test_interface_text: "Felületi szöveg",
		admin_text_interface_text_locale: "Lefordított felület szöveg",
		admin_text_icon_status: "Állapot ikon",
		admin_text_icon: "Ikon",
		admin_text_file_type: "Fájltípus",
		admin_text_viewer: "Megjelenítő",
		admin_text_desktop_access: "Munkaasztal hozzáférés",
		admin_text_mapped_properties_for_office: "Microsoft Office számára leképezett tulajdonságok",
		admin_text_desktop_features: "Munkaasztali szolgáltatások",
		admin_text_unknown: "Ismeretlen",
		admin_folder_instruction: "Adja meg, hogy a dokumentumok és mappák mely tulajdonságai jelenjenek meg a tartalomlistában, amikor a felhasználók tallóznak. Megadhatja a tulajdonságok megjelenési sorrendjét is.",
		admin_search_instruction: "Adja meg, hogy melyik beállítás legyen kijelölve alapértelmezésben, amikor a felhasználók keresést hoznak létre.",
		admin_repository_office_conf_class_instruction: "Ha az IBM Content Navigator for Microsoft Office telepítve van a környezetben lévő ügyfél számítógépeken, akkor megadható a dokumentumok lerakatbeli kezelésének módja azok hozzáadásakor vagy beiktatásakor.",
		admin_repository_office_conf_instruction: "Képezze le a Microsoft Office dokumentumtulajdonságokat a lerakatban meghatározott tulajdonságokra.<br/><br/>Ha engedélyezve van a tulajdonságleképezés a lerakathoz társított munkaasztalnál, akkor a Microsoft Office dokumentumokban beállított tulajdonságok alapján lesznek feltöltve a lerakatban lévő tulajdonságok, amikor a felhasználó hozzáad egy dokumentumot az IBM Content Navigator for Microsoft Office programból.",
		admin_repository_office_conf_prop_mapping_title: "Tulajdonság leképezés",
		admin_repository_office_conf_prop_mapping_title1: "MS Office integráció",
		admin_office_conf_instruction: "Vezérelhető, hogyan kerüljön az IBM Content Navigator integrálásra Microsoft Office alkalmazásokkal, amikor IBM Content Navigator for Microsoft Office van telepítve az ügyfél számítógépeken<br /><br /><b>Fontos:</b> Ha kiválasztja az <b>Office tulajdonságok leképezése…</b> pontot, akkor a tulajdonság leképezését minden olyan lerakatra be kell állítania, amely a munkaasztalhoz tartozik. A környezetében a lerakatok tulajdonságleképezéseit az <b>Office tulajdonságok</b> lapon állíthatja be.",
		admin_desktop_workflows_instruction: "<b>Csak IBM FileNet P8 rendszereken:</b> Adja meg, hogy mely alkalmazásterületek jelenjenek meg ezen a munkaasztalon. A kijelölt alkalmazásterületek sorrendje határozza meg az alkalmazásterületek megjelenítési sorrendjét a webes ügyfélen.<br><br><b>Tipp:</b> Az alkalmazásterületek megjelenő nevének módosításához adjon meg új neveket az adminisztrációs eszköz <b>Címkék</b> szakaszában.",
		admin_search_filtered_properties_instruction: "Adja meg, hogy milyen tulajdonságokra kereshetnek a felhasználók. Rejtse el azokat a tulajdonságokat, amelyekre nem akarja, hogy kereshessenek a felhasználók.",
		admin_search_filtered_operators_instruction: "Határozza meg, hogy milyen operátorokat érhetnek el a felhasználók bizonyos adattípusokra való kereséskor, ez lehet például egy dátum vagy egész szám. Rejtse el azokat az operátorokat, amelyeket nem kívánja, hogy kiválaszthassák a felhasználók.",
		admin_search_default_search_results_instruction: "Adja meg, hogy a dokumentumok és mappák mely tulajdonságai jelenjenek meg a keresési találatok között. Rejtse el azokat a tulajdonságokat, amelyeket nem akarja, hogy megjelenjenek a keresési találatok között.",
		admin_search_default_search_results_p8_cmis_instruction: "Adja meg, hogy a dokumentumok mely tulajdonságai jelenjenek meg a keresési találatok között. Rejtse el azokat a tulajdonságokat, amelyeket nem akarja, hogy megjelenjenek a találatok között.",

		admin_datetimeOp: "Dátum/Idő",
		admin_floatOp: "Lebegőpontos szám",
		admin_integerOp: "Egész",
		admin_stringOp: "Karaktersorozat",
		admin_binaryOp: "Kétváltozós",
		admin_objectOp: "Objektum",
		admin_idOp: "Azonosító",
		admin_userOp: "Felhasználó",
		admin_booleanOp: "Logikai",

		admin_string: "Karaktersorozat",
		admin_long: "Hosszú egész",
		admin_date: "Dátum",
		admin_double: "Dupla pontosságú",
		admin_object: "Objektum",
		admin_guid: "GUID",
		admin_boolean: "Logikai",

		admin_repcfg_heading: "A konfigurációs paraméterek beállításával felülbírálhatja a lerakat alapértelmezett viselkedését.",
		admin_repcfg_heading_od: "A konfigurációs paraméterek beállításával felülbírálhatja a lerakat alapértelmezett viselkedését.<br /><br /><b>Fontos:</b> A webes ügyfélprogram használatához a Content Manager OnDemand alkalmazással, meg kell adnia értékeket a <b>Beállítások</b> alatti <b>Content Manager OnDemand</b> lapon található paraméterekhez is, amelyek minden Content Manager OnDemand lerakatra érvényesek, amelyekhez csatlakozni kíván.",
		admin_repcfg_teamspaces: "Csoportterület kezelése:",
		admin_repcfg_enable: "Engedélyezés",
		admin_repcfg_disable: "Letiltás",

		admin_repcfg_deliver_redacted_pdf_files_as: "Szerkesztett PDF fájlok szállítása, mint:",
		admin_repcfg_burn_pdf_to_pdf: "PDF fájlok",
		admin_repcfg_burn_pdf_to_tiff: "TIFF fájlok",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Egy szerep alapú szerkesztések alkalmazásával szerkesztett PDF fájl különböző fájlformátumokban szállítható az ügyfélnek. A fájlformátum megváltozásakor a fájlkiterjesztés és a MIME típus is megváltozik.<br><br>Például egy PDF fájl szállításakor TIFF fájlként, a fájlkiterjesztés .tiff kiterjesztésre változik.",
		admin_repcfg_redaction_allow_merge_and_split: "Szerepalapú szerkesztéseket tartalmazó oldalak összefésülésének és felosztásának lehetővé tétele a felhasználók számára.",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Válassza ezt a beállítást, ha lehetővé kívánja tenni a felhasználóknak a szerepalapú szerkesztéseket tartalmazó oldalak összefésülését és felosztását. Nem szerkesztő felhasználók nem fogják tudni szerkeszteni a szerepalapú szerkesztéseket, és nem lesz hozzáférésük a szerepalapú szerkesztésekhez tartozó kényes adatokhoz akkor sem, ha ez a beállítás engedélyezett.",
		admin_repcfg_modify_teamspace_roles: "A tulajdonosok módosíthatják a meglévő csoportterületek szerepét",
		admin_repcfg_tm_delete_teamspace: "A tulajdonosok törölhetik a csoportterületet, a tartalmakat is beleértve.",
		admin_repcfg_tm_delete_teamspace_id_missing: "Meg kell adni egy lerakatadminisztrátor felhasználónevét.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Meg kell adni a lerakatadminisztrátor jelszavát.",
		admin_repcfg_teamspace_display_Recent: "Csak a nemrég módosított csoportterületek megjelenítése ",
		admin_repcfg_teamspace_display_Recent_value: "Az utolsó módosítás óra eltelt napok:",

		admin_repcfg_folder_selector: "Gyökérmappa:",
		admin_repcfg_enable_folder_selector: "Engedélyezés",
		admin_repcfg_disable_folder_selector: "Letiltás",
		admin_repcfg_SSO: "Egypontos bejelentkezés:",
		admin_repcfg_teamspace_template_permission_text: "Csoportterületsablon létrehozók hozzárendelése:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Adja meg azokat a csoportokat vagy felhasználókat, akik csoportterület sablonokat készíthetnek. A felhasználók és a csoportok megkapják a megfelelő biztonsági beállításokat a kért osztályokhoz és mappákhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>További tudnivalók</a><br/><br/><b>Ajánlás:</b> Használjon csoportokat a csoportterületek egyszerűbb kezeléséhez.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Adja meg azokat a csoportokat vagy felhasználókat, akik csoportterület sablonokat készíthetnek. A felhasználók hozzáadásra kerülnek a megfelelő hozzáférés-felügyeleti listákhoz és megkapják a szükséges jogosultságokat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>További tudnivalók</a><br/><br/><b>Ajánlás:</b> Használjon csoportokat a csoportterületek egyszerűbb kezeléséhez.",
		admin_repcfg_teamspace_permission_text: "Csoportterület szerepek társítása",
		admin_repcfg_teamspace_permission_hover_p8: "Adja meg azokat a csoportokat vagy felhasználókat, akik létrehozhatnak csoportterületeket, illetve használhatják azokat. A felhasználók megkapják a megfelelő biztonsági beállításokat a kért osztályokhoz és mappákhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>További tudnivalók</a><br/><br/><b>Ajánlás:</b> Használjon csoportokat a csoportterületek egyszerűbb kezeléséhez.",
		admin_repcfg_teamspace_permission_hover_cm: "Adja meg azokat a csoportokat vagy felhasználókat, akik létrehozhatnak csoportterületeket, illetve használhatják azokat. A felhasználók hozzáadásra kerülnek a megfelelő hozzáférés-felügyeleti listákhoz és megkapják a szükséges jogosultságokat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>További tudnivalók</a><br/><br/><b>Ajánlás:</b> Használjon csoportokat a csoportterületek egyszerűbb kezeléséhez.",
		admin_repcfg_entry_template_permission_text: "Beviteli sablon szerepek társítása:",
		admin_repcfg_entry_template_permission_hover_p8: "Adja meg azokat a csoportokat vagy felhasználókat, akik létrehozhatnak beviteli sablonokat, illetve használhatják azokat. A felhasználók megkapják a megfelelő biztonsági beállításokat a Beviteli sablon dokumentumosztályhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>További tudnivalók</a><br/><br/><b>Ajánlás:</b> Használjon csoportokat a beviteli sablonok egyszerűbb kezeléséhez.",
		admin_repcfg_entry_template_permission_hover_cm: "Adja meg azokat a csoportokat vagy felhasználókat, akik létrehozhatnak beviteli sablonokat, illetve használhatják azokat. A felhasználók hozzáadásra kerülnek a megfelelő hozzáférés-felügyeleti listákhoz és megkapják a szükséges jogosultságokat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>További tudnivalók</a><br /><br /><b>Ajánlás:</b> Használjon csoportokat a beviteli sablonok egyszerűbb kezeléséhez.",
		admin_repcfg_office_template_permission_text: "Sablonszerepek társítása:",
		admin_repcfg_office_template_permission_hover_cm: "Adja meg azokat a csoportokat vagy felhasználókat, akik Microsoft Office Online vagy Szerkesztési szolgáltatás sablonokat készíthetnek, szerkeszthetnek vagy használhatnak. A felhasználók hozzáadásra kerülnek a megfelelő hozzáférés-felügyeleti listákhoz és megkapják a szükséges jogosultságokat.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a><br /><br /><b>Ajánlás:</b> Használjon csoportokat a Microsoft Office Online vagy Szerkesztési szolgáltatás sablonok egyszerűbb kezeléséhez.",
		admin_repcfg_draft_permission_text: "Vázlat szerepek társítása:",
		admin_repcfg_draft_permission_hover_cm: "Adja meg azokat a csoportokat vagy felhasználókat, akik létrehozhatnak Microsoft Office Online vagy Szerkesztési szolgáltatás sablon vázlatokat együttműködő szerkesztés során. Egy felhasználó csak akkor végezhet együttműködő szerkesztést dokumentumokon a Microsoft Office Online szolgáltatásban vagy a Szerkesztési szolgáltatásban, ha rendelkezik a vázlatok létrehozásához szükséges engedélyekkel. A felhasználók hozzáadásra kerülnek a megfelelő hozzáférés-felügyeleti listákhoz és megkapják a szükséges jogosultságokat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a><br /><br /><b>Ajánlás:</b> Használjon csoportokat a vázlatok egyszerűbb kezeléséhez.",
		admin_repcfg_search_permission_text: "Keresési szerepek társítása:",
		admin_repcfg_search_permission_hover_p8: "Adja meg azokat a csoportokat vagy felhasználókat, akik mentett kereséseket és lerakatok közötti kereséseket készíthetnek vagy használhatnak. A felhasználók megkapják a megfelelő biztonsági beállításokat a kért osztályokhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>További tudnivalók</a><br /><br /><b>Ajánlás:</b> Használjon csoportokat a keresések egyszerűbb kezeléséhez.",
		admin_repcfg_search_permission_hover_cm: "Adja meg azokat a csoportokat vagy felhasználókat, akik mentett kereséseket és lerakatok közötti kereséseket készíthetnek, szerkeszthetnek vagy használhatnak. A felhasználók hozzáadásra kerülnek a megfelelő hozzáférés-felügyeleti listákhoz és megkapják a szükséges jogosultságokat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>További tudnivalók</a><br /><br /><b>Ajánlás:</b> Használjon csoportokat a keresések egyszerűbb kezeléséhez.",
		admin_repcfg_search_permission_title: "Keresési szerepek",
		admin_repcfg_search_permission_intro_text: "Ellenőrizze, hogy a felhasználónak egy olyan asztali rendszerhez van hozzáférése, amely támogatja a szerepét. Ellenőrizze például, hogy a keresés létrehozóinak van jogosultsága egy olyan asztali rendszerhez, amely megengedi nekik a keresések és lerakatok közötti keresések készítését.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "A csoportterület-sablon adminisztrátorok olyan felhasználók, akiknek <b>Teljes ellenőrzés</b> jogosultsága van a lerakat (objektumtároló) fölött. A csoportterület-sablon adminisztrátorok listája nem módosítható az adminisztrációs eszközből. <p>A csoportterület-sablon adminisztrátorok bármely csoportterület-sablont törölhetnek vagy módosíthatnak. A csoportterület-sablont létrehozó felhasználónak nem kell megosztania a sablont a csoportterület-sablon adminisztrátorokkal.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Amikor egy felhasználót vagy csoportot csoportterület-sablon létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a lerakathoz a csoportterület-sablonok készítéséhez. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>További tudnivalók</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Olyan felhasználók és csoportok, amelyekhez az Adminisztrátorok és Létrehozók csoportokkal társítottaktól eltérő jogosultságok vannak hozzárendelve.<p>Ezeket a felhasználókat és csoportokat áthelyezheti a csoportterület sablon létrehozók szerepébe, ha eltávolítja azokat az Egyéb szerepből, majd hozzárendeli csoportterület sablon létrehozóként.<p>A felhasználókhoz és csoportokhoz jelenleg hozzárendelt jogosultságokat az IBM Administration Console for Content Engine alkalmazással tekintheti át.",
		admin_repcfg_teamspace_administrators_hover_p8: "A csoportterület-adminisztrátorok olyan felhasználók, akiknek <b>Teljes ellenőrzés</b> jogosultsága van a lerakat (objektumtároló) fölött. A csoportterület-adminisztrátorok listája nem módosítható az adminisztrációs eszközből.<p>A csoportterület-adminisztrátorok bármely csoportterületet törölhetik vagy módosíthatják. A csoportterületet létrehozó felhasználónak nem kell megosztania a csoportterületet a csoportterület-adminisztrátorokkal.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Amikor egy felhasználót vagy csoportot csoportterület-létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a lerakathoz a csoportterületek készítéséhez. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>További tudnivalók</a>",
		admin_repcfg_teamspace_user_hover_p8: "Amikor egy felhasználót vagy csoportot csoportterület-felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a lerakathoz a csoportterületek használatához. A felhasználónak azonban a csoportterület eléréséhez kötelezően csoportterület-tagnak kell lennie. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>További tudnivalók</a><p><b>Javaslat:</b> Ha azt szeretné, hogy a környezete összes felhasználója láthassa a csoportterületeket, akkor adja meg a csoportterület felhasználói szerepeként az #AUTHENTICATED-USERS ál-fiókot.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Olyan felhasználók és csoportok, amelyekhez az Adminisztrátorok, Létrehozók és Felhasználók csoportokkal társítottaktól eltérő jogosultságok vannak hozzárendelve.<p>Ezeket a felhasználókat és csoportokat áthelyezheti előre meghatározott szerepekbe, ha eltávolítja azokat az Egyéb szerepből, majd csoportterület szerepeket rendel hozzájuk.<p>A felhasználókhoz és csoportokhoz jelenleg hozzárendelt jogosultságokat az IBM Administration Console for Content Engine alkalmazással tekintheti át.",		
		admin_repcfg_entry_template_administrators_hover_p8: "A adatbeviteli sablon adminisztrátorok olyan felhasználók, akiknek <b>Teljes ellenőrzés</b> jogosultsága van a lerakat (objektumtároló) fölött. Az adatbeviteli sablon adminisztrátorok listája nem módosítható az adminisztrációs eszközből. <p>A bemenetisablon-adminisztrátorok bármelyik bemeneti sablont törölhetik vagy módosíthatják. A bemeneti sablont létrehozó felhasználónak nem kell megosztania a bemeneti sablont a bemenetisablon-adminisztrátorokkal.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Amikor egy felhasználót vagy csoportot bemenetisablon-létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a lerakathoz az adatbeviteli sablonok készítéséhez. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>További tudnivalók</a>",
		admin_repcfg_entry_template_user_hover_p8: "Amikor egy felhasználót vagy csoportot bemenetisablon-felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a lerakathoz az adatbeviteli sablonok használatához. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>További tudnivalók</a><p><b>Javaslat:</b> Ha azt szeretné, hogy a környezete összes felhasználója használhassa a bemeneti sablonokat, akkor adja meg a bemeneti sablon felhasználói szerepeként az #AUTHENTICATED-USERS ál-fiókot.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Olyan felhasználók és csoportok, amelyekhez az Adminisztrátorok, Létrehozók és Felhasználók csoportokkal társítottaktól eltérő jogosultságok vannak hozzárendelve.<p>Ezeket a felhasználókat és csoportokat áthelyezheti előre meghatározott szerepekbe, ha eltávolítja azokat az Egyéb szerepből, majd adatbeviteli sablon szerepeket rendel hozzájuk.<p>A felhasználókhoz és csoportokhoz jelenleg hozzárendelt jogosultságokat az IBM Administration Console for Content Engine alkalmazással tekintheti át.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Amikor egy felhasználót vagy csoportot csoportterület-sablon létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a csoportterület-sablonok készítéséhez a lerakatban. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>További tudnivalók</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Amikor egy felhasználót vagy csoportot csoportterület-létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a csoportterületek készítéséhez a lerakatban. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>További tudnivalók</a>",
		admin_repcfg_teamspace_user_hover_cm: "Amikor egy felhasználót vagy csoportot csoportterület-felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a csoportterületek használatához a lerakatban. A felhasználónak azonban a csoportterület eléréséhez kötelezően csoportterület-tagnak kell lennie. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>További tudnivalók</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Amikor egy felhasználót vagy csoportot adatbeviteli sablon létrehozóként jelöl meg, akkor a felhasználó vagy an csoport megkapja a megfelelő jogosultságokat az adatbeviteli sablonok készítéséhez a lerakatban. <br/><br/>Egy adott adatbeviteli sablon biztonsági beállításai azonban meghatározzák, milyen jogosultságokkal rendelkezik a felhasználó vagy csoport az adatbeviteli sablonhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>További tudnivalók</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Amikor egy felhasználót vagy csoportot adatbeviteli sablon szerkesztőként jelöl meg, akkor a felhasználó vagy csoport megkapja a megfelelő jogosultságokat az adatbeviteli sablonok módosításához a lerakatban. <br/><br/>Egy adott adatbeviteli sablon biztonsági beállításai azonban meghatározzák, milyen jogosultságokkal rendelkezik a felhasználó vagy csoport az adatbeviteli sablonhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>További tudnivalók</a>",
		admin_repcfg_entry_user_hover_cm: "Amikor egy felhasználót vagy csoportot adatbeviteli sablon felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat az adatbeviteli sablonok használatához a lerakatban. <br/><br/>Egy adott adatbeviteli sablon biztonsági beállításai azonban meghatározzák, milyen jogosultságokkal rendelkezik a felhasználó vagy csoport az adatbeviteli sablonhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>További tudnivalók</a>",
		admin_repcfg_office_template_creators_hover_cm: "Amikor egy felhasználót vagy csoportot Microsoft Office Online vagy Szerkesztési szolgáltatás sablon létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a sablonfájlok készítéséhez a lerakatban. <br/><br/>Egy adott sablonfájl biztonsági beállításai azonban meghatározzák, milyen jogosultságokkal rendelkezik a felhasználó vagy csoport a sablonhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a>",
		admin_repcfg_office_template_editors_hover_cm: "Amikor egy felhasználót vagy csoportot Microsoft Office Online vagy Szerkesztési szolgáltatás sablon szerkesztőként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a sablonfájlok módosításához a lerakatban.  <br/><br/>Egy adott sablonfájl biztonsági beállításai azonban meghatározzák, milyen jogosultságokkal rendelkezik a felhasználó vagy csoport a sablonhoz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a>",
		admin_repcfg_office_template_user_hover_cm: "Amikor egy felhasználót vagy csoportot Microsoft Office Online vagy Szerkesztési szolgáltatás sablon felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a sablon alkalmazásához, amikor új Office Online vagy Szerkesztési szolgáltatás dokumentumot hoz létre a webes ügyfélben.  <br/><br/>Egy adott sablonfájl biztonsági beállításai azonban meghatározzák, milyen jogosultságokkal rendelkezik a felhasználó vagy csoport a sablonhoz.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a>",
		admin_repcfg_draft_creators_hover_cm: "Egy felhasználó csak akkor végezhet együttműködő szerkesztést dokumentumokon a Microsoft Office Online szolgáltatásban vagy a Szerkesztési szolgáltatásban, ha hozzá van rendelve ehhez a szerephez. Ne rendelje hozzá a felhasználókat a szerkesztő vagy felhasználó szerepekhez. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a>",
		admin_repcfg_draft_editors_hover_cm: "Egy felhasználó csak akkor végezhet együttműködő szerkesztést dokumentumokon a Microsoft Office Online szolgáltatásban vagy a Szerkesztési szolgáltatásban, ha hozzá van rendelve a <b>létrehozó</b> szerephez. Ha egy felhasználó hozzá van rendelve a szerkesztő szerephez, akkor nem hozhat létre vázlatokat, ami szükséges az együttműködő szerkesztéshez.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a>",
		admin_repcfg_draft_user_hover_cm: "Egy felhasználó csak akkor végezhet együttműködő szerkesztést dokumentumokon a Microsoft Office Online szolgáltatásban vagy a Szerkesztési szolgáltatásban, ha hozzá van rendelve a <b>létrehozó</b> szerephez. Ha egy felhasználó hozzá van rendelve a felhasználó szerephez, akkor nem hozhat létre vázlatokat, ami szükséges az együttműködő szerkesztéshez.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>További tudnivalók</a>",		
		admin_repcfg_search_others_hover_p8: "Olyan felhasználók és csoportok, amelyekhez az Adminisztrátorok, Létrehozók és Felhasználók csoportokkal társítottaktól eltérő jogosultságok vannak hozzárendelve.<p>Ezeket a felhasználókat és csoportokat áthelyezheti előre meghatározott szerepekbe, ha eltávolítja azokat az Egyéb szerepből, majd keresési szerepeket rendel hozzájuk.<p>A felhasználókhoz és csoportokhoz jelenleg hozzárendelt jogosultságokat az IBM Administration Console for Content Engine alkalmazással tekintheti át.",		
		admin_repcfg_search_admins_hover_p8: "A keresési adminisztrátorok olyan felhasználók, akiknek <b>Teljes ellenőrzés</b> jogosultsága van a lerakat (objektumtároló) fölött. A keresési adminisztrátorok listája nem módosítható az adminisztrációs eszközből. <br /><br />A keresési adminisztrátorok bármely keresést törölhetik vagy módosíthatják. A keresést létrehozó felhasználónak nem kell megosztania a keresést a keresési adminisztrátorokkal.",
		admin_repcfg_search_creators_hover_p8: "Amikor egy felhasználót vagy csoportot keresés-létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a lerakathoz a keresések létrehozásához. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>További tudnivalók</a>",
		admin_repcfg_search_user_hover_p8: "Amikor egy felhasználót vagy csoportot keresési felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő biztonsági jogosultságokat a keresések használatához. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>További információk</a><br /><br /><b>Javaslat:</b> Ha azt szeretné, hogy a környezete összes felhasználója használhassa a kereséseket, akkor adja meg a keresés felhasználói szerepeként az #AUTHENTICATED-USERS ál-fiókot.<br/><br />Egy keresési felhasználó alapértelmezésben készíthet kereséseket és lerakatok közötti kereséseket, de nem mentheti el azokat. Ha azt akarja, hogy a keresési felhasználók ne csinálhassanak kereséseket, akkor intézze el, hogy az asztali környezetükben a következő beállítások legyenek kiválasztva:<ul><li><b>Felhasználók nem indíthatnak kereséseket</b></li><li><b>Felhasználók nem indíthatnak lerakatok közötti kereséseket</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Amikor egy felhasználót vagy csoportot keresés-létrehozóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a keresések létrehozásához a lerakatban. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>További tudnivalók</a><br /><br /><b>Fontos:</b> Ellenőrizze, hogy a keresések létrehozói olyan asztali környezetet használnak, amelyben a következő beállítások nincsenek kiválasztva:<ul><li><b>Felhasználók nem indíthatnak kereséseket</b></li><li><b>Felhasználók nem indíthatnak lerakatok közötti kereséseket</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Amikor egy felhasználót vagy csoportot keresésszerkesztőként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a meglévő keresések és lerakatok közötti keresések módosításához. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>További tudnivalók</a><br /><br /><b>Javaslat:</b> Egy keresésszerkesztő alapértelmezésben készíthet kereséseket és lerakatok közötti kereséseket, de nem mentheti el azokat. Ha azt akarja, hogy a keresésszerkesztők ne csinálhassanak kereséseket, akkor intézze el, hogy az asztali környezetükben a következő beállítások legyenek kiválasztva:<ul><li><b>Felhasználók nem indíthatnak kereséseket</b></li><li><b>Felhasználók nem indíthatnak lerakatok közötti kereséseket</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Amikor egy felhasználót vagy csoportot keresési felhasználóként jelöl meg, akkor a felhasználó vagy a csoport megkapja a megfelelő jogosultságokat a meglévő keresések és lerakatok közötti keresések megnyitásához és futtatásához. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>További tudnivalók</a><br /><br /><b>Javaslat:</b> Egy keresési felhasználó alapértelmezésben készíthet kereséseket és lerakatok közötti kereséseket, de nem mentheti el azokat. Ha azt akarja, hogy a keresési felhasználók ne csinálhassanak kereséseket, akkor intézze el, hogy az asztali környezetükben a következő beállítások legyenek kiválasztva:<ul><li><b>Felhasználók nem indíthatnak kereséseket</b></li><li><b>Felhasználók nem indíthatnak lerakatok közötti kereséseket</b></li></ul>",
		admin_repcfg_db_encoding: "Kiszolgáló-adatbázis karakterkódolás:",
		admin_repcfg_db_encoding_hover: "Az IBM Content Manager adatbázis alapértelmezett karakterkódolása UTF-8.",
		admin_repcfg_db_encoding_specify: "Adja meg az adatbázis karakterkódolását",
		admin_repcfg_db_encoding_utf8: "UTF-8 kódolás",
		admin_repcfg_db_encoding_utf8_hover: "Adja meg ezt a lehetőséget, ha UTF-8 kódolású adatbázist használ. Az IBM Content Navigator UTF-8 kódolást használ az elemtulajdonság érték karaktersorozatok hosszának ellenőrzéséhez.",
		admin_repcfg_db_encoding_other: "Más kódolás",
		admin_repcfg_db_encoding_other_hover: "Adja meg ezt a lehetőséget, ha nem UTF-8 kódolású adatbázist használ. Az IBM Content Navigator a karakterszámot használja az elemtulajdonság érték karaktersorozatok hosszának ellenőrzéséhez.",
		admin_repcfg_language_codes: "Kiszolgáló nyelvkódok:",
		admin_repcfg_language_codes_avail: "Elérhető",
		admin_repcfg_language_codes_sel: "Kijelölve",
		admin_repcfg_pdf_conversion: "PDF dokumentummá átalakítandó MIME típusok a mellékletekben:",
		admin_repcfg_pdf_conversion_avail: "Elérhető",
		admin_repcfg_pdf_conversion_sel: "Kijelölve",

		admin_repcfg_box_share_enable_classes_label: "A Box megosztás támogatásához módosítandó osztályok:",
		admin_repcfg_box_share_enable_classes_hover: "Ezt az osztályt, módosíthatja úgy, hogy tárolja a fájl Box azonosítóját, amikor az elem meg van osztva.",
		admin_repcfg_box_share_enable_classes_warning: "Fontos: A megadott osztályok módosításra kerülnek az Box megosztás támogatásához. A módosítások mentése után a módosítások nem távolíthatók el az osztályokból.<br><br>Az osztályok módosításához könyvtárkiszolgáló-adminisztrátorként kell csatlakoznia a lerakathoz.",
		admin_repcfg_box_share_enable_classes_available: "Elérhető osztályok",
		admin_repcfg_box_share_enable_classes_selected: "Kijelölt osztályok",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Box megosztásazonosító tárolása",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Ez az osztály már módosítva lett a Box megosztásazonosító tárolásához. Nem távolíthatja el ezt a lehetőséget.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Módosítsa ezt az osztályt, hogy az tárolja a fájl Box azonosítóját, amikor az elem meg van osztva.",

		admin_repcfg_redaction: "Szerep alapú szerkesztések:",
		admin_repcfg_enable_redaction_hover: "Adja meg, hogy kíván-e használni szerep alapú szerkesztéseket a jelen lerakatban lévő dokumentumokhoz.<br/><br/>A szerep alapú szerkesztések egy dokumentum letöltésekor, nyomtatásakor, megtekintő általi megjelenítésekor vagy miniatűrként való megjelenítéskor lesznek alkalmazva. Amit a felhasználók a dokumentum megtekintésekor látnak, a szerepüktől és az érvényes szerkesztési irányelvektől függ.",

		admin_repcfg_redaction_policy_permission_text: "Irányelv-szerkesztők hozzárendelése:",
		admin_repcfg_redaction_policy_editors_hover: "Válassza ki a felhasználókat és csoportokat, akik szerkesztési irányelveket és szerkesztési szerepeket hozhatnak létre, módosíthatnak és törölhetnek.",
		admin_repcfg_redaction_policy_editors_select_hover: "A szerkesztési irányelv szerkesztők létrehozhatnak, módosíthatnak és törölhetnek szerkesztési irányelveket és szerkesztési szerepeket.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "A szerkesztési irányelv adminisztrátorok hozzárendelhetnek szerkesztési irányelv szerkesztőket.<br/><br/>A szerkesztési irányelv adminisztrátorok listáját az IBM Administration Console for Content Engine alkalmazással módosíthatja.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "A szerkesztési irányelv adminisztrátorok hozzárendelhetnek szerkesztési irányelv szerkesztőket.<br/><br/>A szerkesztési irányelv adminisztrátorok listáját az IBM Content Manager rendszeradminisztrációs ügyfél használatával módosíthatja.",

		admin_repcfg_redaction_permission_text: "Szerkesztők hozzárendelése:",
		admin_repcfg_redaction_editors_hover: "Válassza ki a felhasználókat és csoportokat, akik szerep alapú szerkesztéseket hozhatnak létre, módosíthatnak és törölhetnek. Miután kiválaszt felhasználókat és csoportokat szerkesztőként, meg kell adnia őket szerkesztőként a szerkesztési irányelvekben, mielőtt szerkeszthetnék a szerep alapú szerkesztéseket.",
   		admin_repcfg_redaction_editors_select_hover: "A szerkesztők akkor hozhatnak létre, módosíthatnak és törölhetnek szerep alapú szerkesztéseket, ha a szerkesztési irányelvekben is meg vannak adva szerkesztőként.",
   		admin_repcfg_redaction_administrators_hover_p8: "A szerkesztési adminisztrátorok hozzárendelhetnek szerkesztőket.<br/><br/>A szerkesztési adminisztrátorok listája az IBM Administration Console for Content Engine alkalmazással módosítható.",
   		admin_repcfg_redaction_administrators_hover_cm: "A szerkesztési adminisztrátorok hozzárendelhetnek szerkesztőket.<br/><br/>A szerkesztési adminisztrátorok listáját az IBM Content Manager rendszeradminisztrációs ügyfél használatával módosíthatja.",
		admin_repcfg_entry_template: "Adatbeviteli sablon kezelése:",
		admin_repcfg_entry_template_enable_classes_label: "Az adatbeviteli sablonok támogatásához módosítandó osztályok:",
		admin_repcfg_oos_reference_attribute_label: "Office Online referencia attribútumok:",
		admin_repcfg_entry_template_enable_classes_hover: "Fontos: A megadott osztályok módosításra kerülnek az adatbeviteli sablonok támogatásához. A módosítások mentése után a módosítások nem távolíthatók el az osztályokból.<br><br>Módosíthatja az osztályt a következő célok egyike miatt:<br><ul><li>Az elem hozzáadásához használt adatbeviteli sablon azonosítójának tárolásához az adatbeviteli sablon beállítások az elem módosításakor kerülnek alkalmazásra.</li><li>Csak hierarchikus mappaosztályok: az adatbeviteli sablon mappa társítások támogatásához</li></ul>Az osztályok módosításához könyvtárkiszolgáló-adminisztrátorként kell csatlakoznia a lerakathoz.",
		admin_repcfg_entry_template_enable_classes_warning: "Fontos: A megadott osztályok módosításra kerülnek az adatbeviteli sablonok támogatásához. A módosítások mentése után a módosítások nem távolíthatók el az osztályokból.<br><br>Az osztályok módosításához könyvtárkiszolgáló-adminisztrátorként kell csatlakoznia a lerakathoz.",
		admin_repcfg_entry_template_enable_classes_available: "Elérhető osztályok",
		admin_repcfg_entry_template_enable_classes_selected: "Kijelölt osztályok",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Tároló adatbeviteli sablon azonosítója",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Módosítsa ezt az osztályt, így az tárolja az elem hozzáadásához használt adatbeviteli sablon azonosítóját, így az adatbeviteli sablon beállítások az elem módosításakor kerülnek alkalmazásra.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Tároló mappatársítások",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Módosítsa ezt az osztályt, hogy támogatni tudja az adatbeviteli sablon mappa társításokat. Ez a lehetőség csak hierarchikus mappa osztályokhoz áll rendelkezésre.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Ez az osztály már módosítva lett az adatbeviteli sablon azonosító tárolásához. Nem távolíthatja el ezt a lehetőséget.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Ez az osztály már módosítva lett a mappatársítások tárolásához. Nem távolíthatja el ezt a lehetőséget.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Csak a hierarchikus mappaosztályok és nem hierarchikus osztályok használhatók a mappatársítások tárolásához.",
		admin_repcfg_entry_template_root_folder_association_title: "A gyökérmappához tartozó adatbeviteli sablonok:",
		admin_repcfg_entry_template_root_folder_association_hover: "Adja meg, hogy melyik adatbeviteli sablonokat kívánja társítani a IBM Content Manager lerakatban a gyökérmappával.<br /><br />Ha a gyökérmappával társít adatbeviteli sablonokat, és a felhasználók elemeket vesznek fel egy hierarchikus mappába, akkor az elemek hozzáadásához mindig felhasználásra kerül egy adatbeviteli sablon.",
		admin_repcfg_entry_template_root_folder_association_button: "Társítások beállítása",
		admin_repcfg_oos_enable_classes_label: "Az Office Online és a Szerkesztési szolgáltatás támogatásához módosítandó osztályok:",
		admin_repcfg_oos_enable_classes_warning: "Fontos: A megadott osztályok módosításra kerülnek a Microsoft Office Online szolgáltatással vagy a Szerkesztési szolgáltatással történő együttműködéshez. A módosítások mentése után az osztályokhoz automatikusan hozzáadott referencia attribútum nem távolítható el.<br><br>Az osztályok módosításához könyvtárkiszolgáló-adminisztrátorként kell csatlakoznia a lerakathoz.",
		admin_repcfg_oos_enable_classes_available: "Elérhető osztályok",
		admin_repcfg_oos_enable_classes_selected: "Kijelölt osztályok",
		admin_repcfg_oos_enable_classes_note: "Fontos:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Ez az osztály nem támogatott a Microsoft Office Online szolgáltatással vagy a Szerkesztési szolgáltatással.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Az osztály változat irányelve állandó verziószámozásra van beállítva, amit a Microsoft Office Online vagy a Szerkesztési szolgáltatás nem támogat. Válasszon egy másik osztályt.",
		admin_repcfg_download_recording: "Nyomkövetés letöltések:",
		admin_repcfg_download_recording_hover: "A letöltéseken alapértelmezésben nyomkövetés történik, ha a Social Collaboration Base Extensions bővítmény telepítve van a lerakaton. Azonban a lehetőség letiltása javíthatja a lerakat teljesítményét.<br><br>Ha letiltja ezt a lehetőséget, akkor a felhasználók látni fogják a lehetőség letiltása előtt történt letöltések számát.",
		admin_repcfg_sync_service: "Szinkronizálási szolgáltatások:",
		admin_repcfg_download_ignored: "Letöltések figyelmen kívül hagyása adott felhasználók esetén:",
		admin_repcfg_download_ignored_hover: "Figyelmen kívül hagyhatja az adott felhasználók - mint például az adminisztrátorok vagy rendszerfiókok - által kért letöltéseket a dokumentumot letöltő felhasználók számának pontosabb megadása érdekében. Ha például vagy egy adott fiók, amely tartalmat tölt le a havi jelentés előállításához, akkor figyelmen kívül hagyhatja az adott fiók által kért letöltéseket.<br><br><b>Korlátozás:</b> Nem adhat meg csoportokat.",

		admin_repcfg_add_as_major_version: "Hozzáadás főváltozatként:",
		admin_repcfg_enable_add_as_major_version: "Igen",
		admin_repcfg_disable_add_as_major_version: "Nem",
		admin_repcfg_checkin_as_major_version: "Beiktatás főváltozatként:",
		admin_repcfg_enable_checkin_as_major_version: "Igen",
		admin_repcfg_disable_checkin_as_major_version: "Nem",
		admin_repcfg_annotation_security: "Feljegyzés biztonság:",
		admin_repcfg_inherit_annotation_security: "A tartalmazó dokumentum biztonságának többszörözése",
		admin_repcfg_default_annotation_security: "Feljegyzések alapértelmezett védelmének használata",
		admin_repcfg_connection_point: "Munkafolyamat csatlakozási pontja:",
		admin_repcfg_include_workflow_definition: "Munkafolyamat meghatározás osztály megjelenítése:",
		admin_repcfg_include_form_template: "Űrlap sablon osztály megjelenítése:",
		admin_repcfg_enable_include_workflow_definition: "Igen",
		admin_repcfg_disable_include_workflow_definition: "Nem",

		admin_repcfg_status_columns: "Állapotikon",
		admin_repcfg_status_columns_hover: "Adja meg azokat az állapotokat, amelyek ikonjait megjeleníteni kívánja. Az állapotikonok a tartalomlistában a dokumentumok, mappák és feladatok mellett jelennek meg.",
		admin_repcfg_status_columns_documents_or_folders: "Ikon megjelenítése, ha a dokumentumok vagy mappák:",
		admin_repcfg_status_columns_documents: "Ikon megjelenítése, ha a dokumentumok:",
		admin_repcfg_status_columns_documents_checked_out: "Ki vannak iktatva",
		admin_repcfg_status_columns_documents_declared_records: "Rekordként lettek meghatározva",
		admin_repcfg_status_columns_documents_minor_versions: "Rendelkeznek alverziószámmal",
		admin_repcfg_status_columns_documents_compound_document: "Összetett dokumentumok",
		admin_repcfg_status_columns_documents_bookmarks: "Rendelkeznek könyvjelzővel",
		admin_repcfg_status_columns_documents_hold: "Fel vannak függesztve",
		admin_repcfg_status_columns_documents_notes: "Rendelkeznek megjegyzéssel",
		admin_repcfg_status_columns_work_items: "Ikon megjelenítése, ha a munkaelemek:",
		admin_repcfg_status_columns_work_items_locked: "Zárolva vannak",
		admin_repcfg_status_columns_work_items_checked_out: "Ki vannak iktatva",
		admin_repcfg_status_columns_work_items_deadline: "Rendelkeznek határidővel",
		admin_repcfg_status_columns_work_items_suspended: "Feldolgozás felfüggesztett",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF konfigurációs fájl:",
		admin_repcfg_transform_xml_file: "Egyéni átalakítási fájl:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Engedélyezés",
		admin_repcfg_disable_ssl: "Letiltás",
		admin_repcfg_keyringdb_file: "Kulcscsomó adatbázisfájl:",
		admin_repcfg_keyringstash_file: "Kulcscsomó gyűjtőfájl:",
		admin_repcfg_od_sso: "Egypontos bejelentkezés",
		admin_repcfg_od_enable_sso: "Engedélyezés",
		admin_repcfg_od_disable_sso: "Letiltás",
		admin_repcfg_od_sso_password: "Jelszó",
		admin_repcfg_advanced_label: "Részletes",
		admin_repcfg_custom_properties_label: "Egyéni tulajdonságok:",
		admin_repcfg_new_button_label: "Új",
		admin_repcfg_edit_button_label: "Szerkesztés",
		admin_repcfg_delete_button_label: "Törlés",
		admin_repcfg_custom_head1: "Név",
		admin_repcfg_custom_head2: "Érték",
		admin_repcfg_ecpdialog_title_new: "Új egyéni tulajdonság",
		admin_repcfg_ecpdialog_title_edit: "Egyéni tulajdonság szerkesztése",
		admin_repcfg_ecpdialog_name: "Név:",
		admin_repcfg_ecpdialog_value: "Érték:",
		admin_repcfg_ecpdialog_save: "Mentés",
		admin_repcfg_ecpdialog_create: "Létrehozás",
		admin_repcfg_ecpdialog_cancel: "Mégse",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Ez az érték kötelező. Az érték nem lehet üres vagy másodpéldány.",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP kódolás használata:",

		admin_repcfg_task_mgr_proxy: "Feladatkezelő kapcsolat azonosítója:",
		admin_repcfg_task_mgr_proxy_hover: "A Box megosztás vagy a Csoportterület törlés esetén a feladatkezelő egy adminisztrátori felhasználói azonosítót és jelszót használ a lerakatot módosító háttérfeladatok futtatásához.<br><br>Kattintson a Beállítás lehetőségre, és jelentkezzen be a lerakatba egy érvényes lerakatadminisztrátori felhasználói azonosítóval és jelszóval.",
		admin_task_manager_not_enabled_warning: "Ehhez a beállításhoz a feladatkezelő szolgáltatás szükséges, azonban a feladatkezelő szolgáltatás nincs engedélyezve.  A feladatkezelő szolgáltatást a Beállítások Általános oldalán engedélyezheti minden munkaasztalhoz.",
		admin_task_manager_not_enabled_and_user_warning: "Ehhez a beállításhoz a feladatkezelő szolgáltatás szükséges, azonban a feladatkezelő szolgáltatás nincs engedélyezve. Ezen az oldalon állítsa be a feladatkezelő kapcsolat azonosítóját, majd a Beállítások Általános oldalán engedélyezze a feladatkezelő szolgáltatást minden munkaasztalhoz.",
		admin_task_manager_user_id_pw_not_set_warning: "Ehhez a beállításhoz a feladatkezelő szolgáltatás, valamint egy adminisztrátori felhasználói azonosító és jelszó szükséges. Ezen az oldalon állíthatja be a feladatkezelő kapcsolat azonosítóját.",
		admin_repcfg_teamspaces_delete_task_id: "Lerakat-adminisztrátor:",
		admin_repcfg_teamspaces_delete_task_password: "Jelszó:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Meg kell adnia egy könyvtárkiszolgáló-adminisztrátort, aki engedélyezi a feladatkezelő szolgáltatás számára a lerakatban csoportterület törlését.",
		admin_repcfg_teamspaces_delete_task_hover: "Amikor egy felhasználó töröl egy csoportterületet, akkor ez alapértelmezésben csak elrejtésre kerül. A csoportterület minden mappája és dokumentuma megmarad a lerakatban. <br /> <br />A beállítás engedélyezésekor csak azok a dokumentumok maradnak meg a lerakatban, amelyek a lerakat más mappáiba vannak iktatva.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Ha nagy számú csoportterület található a környezetben, akkor hosszú ideig tarthat az összes csoportterület megjelenítése a <b>Csoportterületek</b> lapon. Kiválaszthatja ezt a lehetőséget a lista feltöltéséhez szükséges idő lecsökkentése érdekében.<br /><br />Ha egy felhasználónak a megadott tartományon kívül eső csoportterületet kell kezelnie, akkor a felhasználó használhatja a <b>Szűrő</b> mezőt a csoportterület megkereséséhez.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "A beállítás kiválasztásával a csoportterület tulajdonos szereppel rendelkező felhasználói módosíthatják az olyan csoportterületekhez társított szerepeket, amelyek az IBM Content Navigator 2.0.2. használata előtt lettek létrehozva.<br /><br />A beállítás nem érinti az olyan csoportterületeket, amelyek az IBM Content Navigator 2.0.2. változatával kerültek létrehozásra.",
		admin_repcfg_use_teamspaces_cm_hover: "Adja meg, hogy szeretné-e engedélyezni a felhasználók számára csoportterületek és csoportterület-sablonok létrehozását ehhez a lerakathoz.<br /><br /><b>Fontos:</b> A lerakatnak támogatnia kell a hierarchikus mappákat.<br /><br />Ha engedélyezi a csoportterületeket, akkor az IBM Content Navigator létrehoz egy csoportterület adatmodellt a lerakathoz. Az adatmodell ACL objektumokat, jogosultságokat, jogosultságkészleteket és két új elemtípust tartalmaz.",
		admin_repcfg_folder_selector_hover: "Válassza ki a mappát, amelyet gyökérmappaként kíván használni, amikor a felhasználók tallózással dokumentumokat keresnek. Ha a lerakatban nincsenek konfigurálva hierarchikus mappák, akkor ez a beállítás lehetővé teszi, hogy egy gyökérmappa megadásával támogassa a tallózást. Ha a lerakatban vannak beállítva hierarchikus mappák, akkor ez a beállítás felülbírálja a lerakathoz beállított gyökérmappát.",
		admin_repcfg_cm_use_sso_hover: "Adja meg, hogy engedélyezi-e az egypontos bejelentkezést a Trusted Logon jogosultságkészlettel rendelkező felhasználók számára.<br /><br /><b>Fontos:</b> A konfigurációs paraméter működéséhez az egypontos bejelentkezést engedélyezni kell a Content Manager kiszolgálón, a WebSphere Application Server rendszert pedig LTPA használatára kell konfigurálni.",
		admin_repcfg_cm_direct_retrieve_hover: "A közvetlen lekérés alapértelmezésben engedélyezve van, mert ez lehetővé teszi a webes ügyfélprogram számára, hogy gyorsan kérje le a tartalmat az erőforrás-kezelőtől. <br /><br />Ha nem szeretné, hogy az ügyfélalkalmazás közvetlenül érje el az erőforrás-kezelőt, vagy ha rendelkezik egy tűzfallal vagy proxykiszolgálóval, amely megakadályozza, hogy a webes ügyfélprogram URL címeken keresztül érje el az erőforrás-kezelőt, akkor letilthatja ezt a beállítást. Például a közvetlen lekérés engedélyezésekor a tűzfal megakadályozhatja, hogy a felhasználók dokumentumokat tekintsenek meg a kisalkalmazás megjelenítőben.",
		admin_repcfg_cmItemTypesToDisplay: "Ha nem akarja, hogy a felhasználók lássák az erőforrás elemtípusokat és az elem elemtípusokat az IBM Content Manager kiszolgálón, akkor megjelenítheti kizárólag a dokumentum típusú elemeket. Az elemtípusok akkor kerülnek megjelenítésre, amikor a felhasználók kereséseket hoznak létre, dokumentumokat vesznek fel és mappákat hoznak létre.",
		admin_repcfg_cm_language_codes_hover: "Adja meg, hogy milyen nyelven küldje vissza az adatokat a Content Manager kiszolgáló. Az elérhető nyelvek listája a kiszolgálón található nyelvmeghatározásoktól függ.<br /><br /><b>Ne feledje:</b> Az adatok a webes ügyfélben a felhasználó böngészőjének nyelvén jelennek meg.",
		admin_repcfg_cm_pdf_conversion_hover: "Határozza meg a PDF formátumba konvertálandó dokumentumok típusát, ha egy felhasználó több részből álló dokumentumot küld email mellékletként. A részekből egyetlen PDF dokumentum kerül összeállításra.",
		admin_repcfg_use_teamspaces_p8_hover: "Adja meg, hogy szeretné-e engedélyezni a felhasználók számára csoportterületek és csoportterület-sablonok létrehozását ehhez a lerakathoz.<br /><br />Ha engedélyezi a csoportterületeket, akkor az IBM Content Navigator létrehoz egy csoportterület adatmodellt a lerakathoz. Az adatmodell tulajdonságsablonokat, egyéni objektumokat, egy mappa objektumot és több mappát tartalmaz.",
		admin_repcfg_use_entry_template_p8_hover: "Adja meg, hogy a felhasználók létrehozhassanak-e, illetve kezelhessenek-e adatbeviteli sablonokat ezen a lerakaton az IBM Content Navigatorból. Ha nem engedélyezi ezt a szolgáltatást, akkor a felhasználók megkereshetik és használhatják a lerakat meglévő adatbeviteli sablonjait.<br /><br />Ha engedélyezi az adatbeviteli sablon kezelését, akkor az IBM Content Navigator frissíti az adatbeviteli sablon modellt a lerakaton. A frissítés új tulajdonságokat tartalmaz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>További tudnivalók</a>",
		admin_repcfg_use_entry_template_cm_hover: "Adja meg, hogy a felhasználók létrehozhassanak-e, illetve kezelhessenek-e adatbeviteli sablonokat ezen a lerakaton az IBM Content Navigatorból.<br /><br />Ha engedélyezi az adatbeviteli sablon kezelését, akkor az IBM Content Navigator létrehozza az adatbeviteli sablon modellt a lerakaton. Az adatmodell új ACL objektumot, új tulajdonságokat és új elemtípust tartalmaz. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>További tudnivalók</a>",
		admin_repcfg_sync_service_p8_hover: "Adja meg, hogy a felhasználók szinkronizálhassák-e a kedvenc elemeiket a munkaállomásuk és a mobileszközeik között.<br><br><b>Fontos:</b> A szolgáltatás használatához a következőket kell tennie:<br><ul><li>Adja meg a <b>Szinkronizálási szolgáltatások nyilvános URL címét</b> az adminisztrációs eszköz <b>Szinkronizálási szolgáltatások</b> részében.</li><li>Adja hozzá ezt a lerakatot egy olyan munkaasztalhoz, melyre a szinkronizálási szolgáltatások engedélyezettek.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Határozza meg, hogy alapértelmezésben főváltozatként legyenek-e beállítva a dokumentumok, amelyeket a felhasználók hozzáadnak a lerakathoz.<br /><br />A felhasználóknak lehetőségük van a beállítás törlésére, amennyiben alváltozatként kívánják hozzáadni a dokumentumokat.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Határozza meg, hogy alapértelmezésben főváltozatként legyenek-e beállítva a dokumentumok, amelyeket a felhasználók beiktatnak a lerakatba.<br /><br />A felhasználóknak lehetőségük van a beállítás törlésére, amennyiben alváltozatként kívánják beiktatni a dokumentumokat.",
		admin_repcfg_p8_annotation_security_hover: "Határozza meg, hogy alapértelmezésben milyen típusú védelmet kíván a feljegyzésekhez rendelni.<br /><br />A felhasználóknak lehetősége van módosítani a feljegyzések védelmén.",
		admin_repcfg_p8_connection_point_hover: "Amennyiben használni kívánja az IBM FileNet P8 munkafolyamatokat, akkor jelöljön ki egy Process Engine csatlakozási pontot. A választott csatlakozási pont határozza meg, hogy melyik munkafolyamatokat érhetik el a lerakat felhasználói.",
		admin_repcfg_p8_include_workflow_definition_hover: "Ha megjeleníti az IBM FileNet P8 munkafolyamat meghatározás dokumentum osztályt a webes ügyfélben, akkor a felhasználók a lerakatban kereshetnek és ahhoz hozzáadhatnak munkafolyamat meghatározásokat.",
		admin_repcfg_p8_include_form_template_hover: "Ha megjeleníti az IBM FileNet P8 űrlap sablon dokumentum osztályt a webes ügyfélben, akkor a felhasználók a lerakatban kereshetnek és ahhoz hozzáadhatnak formátum sablonokat.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Adja meg a lerakatra vonatkozó AFP2PDF konfigurációs fájl teljes képzésű elérési útját a webalkalmazás-kiszolgálón. Az AFP adatok megtekintéséhez és nyomtatásához az AFP2PDF átalakító szükséges. <br /><br /><b>Ne feledje:</b> Telepíteni kell az AFP2PDF átalakító segédprogramot a paraméter használatához.",
		admin_repcfg_od_transform_xml_file_hover: " Ha egyéni átalakítást kívánt alkalmazni a Content Manager OnDemand tartalmak konvertálásához, akkor adja meg az átalakítást meghatározó XML fájl teljes képzésű elérési útját. Az XML fájlnak a webes alkalmazáskiszolgálón kell lennie.",
		admin_repcfg_od_ssl_hover: "Adja meg, hogy legyen-e SSL titkosítás az IBM Content Navigator alkalmazáskiszolgáló és a Content Manager OnDemand könyvtárkiszolgáló, valamint az objektumkiszolgálók közötti kommunikációban.<br /><br /><b>Fontos:</b> Ha engedélyezi az SSL-t a Content Manager OnDemand kiszolgálóhoz, akkor az nem tartalmazza az IBM Content Navigator alkalmazáskiszolgáló, webkiszolgáló vagy a felhasználói munkaállomások közötti kommunikációt.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Adja meg a kulcscsomó adatbázis fájl teljes képzésű elérési útját ehhez a lerakathoz a webalkalmazás-kiszolgálón. Például C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />A kulcscsomó adatbázis fájl tartalmazza a megbízható gyökértanúsítványait. Erős fájlrendszer védelmet kell alkalmaznia, hogy a fájlhoz ne férjenek hozzá jogosulatlanok.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Adja meg a kulcscsomó gyűjtőfájl teljes képzésű elérési útját ehhez a lerakathoz a webalkalmazás-kiszolgálón. Például C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />A kulcscsomó gyűjtőfájl tartalmazza a kulcscsomó adatbázis fájl jelszavát. Erős fájlrendszer védelmet kell alkalmaznia, hogy a fájlhoz ne férjenek hozzá jogosulatlanok.",
		admin_repcfg_od_sso_password_hover: "Adja meg az OnDemand kiszolgálóra való egypontos bejelentkezés jelszavát.",
		admin_repcfg_od_custom_properties_hover: "Az ODWEK Java API támogatja az egyéni tulajdonságokat. Ha egyéni tulajdonságokat szeretne használni, amikor a webes ügyfélen keresztül a lerakathoz csatlakozik, adja meg az egyéni tulajdonságok nevét és értékét.<br /><br />A támogatott egyéni tulajdonságokkal kapcsolatos információkért tekintse meg az ODWEK telepítési könyvtárának /api alkönyvtárban található ODWEK Java API Javadoc dokumentációt.",
		admin_repcfg_od_custom_properties_name_hover: "Adja meg a tulajdonság nevét.",
		admin_repcfg_od_custom_properties_value_hover: "Adja meg a tulajdonság értékét.",
		admin_repcfg_od_use_sso_hover: "Határozza meg, hogy engedélyezi-e az egypontos bejelentkezést a felhasználóknak.<br /><br /><b>Fontos:</b> A konfigurációs paraméter működéséhez az egypontos bejelentkezést engedélyezni kell a Content Manager OnDemand kiszolgálón.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "GZIP kódolás használata ezen a CMIS forráson.",
		admin_repcfg_cm_use_part_file_name: "A dokumentumok letöltésekor  használandó fájlnév:",
		admin_repcfg_cm_use_part_file_name_help: "Adja meg, hogy hogyan legyenek meghatározva a dokumentumok fájlnevei, amikor a felhasználó letölti a dokumentumokat.",
		admin_repcfg_cm_use_part_file_name_enable: "A következő fájlnév használata:",
		admin_repcfg_cm_use_part_file_name_disable: "A következő lerakatban levő elem nevének a használata:",
		admin_repcfg_add_doc_name: "Hozzáadott dokumentum alapértelmezett neve:",
		admin_repcfg_add_doc_name_hover: "A felhasználók módosíthatják a nevet a dokumentum hozzáadása előtt.",
		admin_repcfg_add_doc_name_empty: "Nincs (üres)",
		admin_repcfg_add_doc_name_file_name: "A kiválasztott dokumentum fájlneve",

		admin_repcfg_compound_documents: "Összetett dokumentum szolgáltatások:",
		admin_repcfg_compound_documents_hover: "P8 összetett dokumentum szolgáltatások engedélyezése, mint például a navigáció.",
		admin_repcfg_cm_action_list_config_enabled: "Munkaelem műveletlista:",
		admin_repcfg_cm_action_list_config_hover: "Amikor a Content Manager rendszeradminisztrációs ügyfelén a dokumentumútvonalat konfigurálja, akkor meghatározhatja a felhasználó által a munkaelemeken használható műveletek listáját.<br /><br />Engedélyezze ezt a beállítást akkor, ha a Content Manager kiszolgáló műveletlistáját kívánja igénybe venni. Ezek a beállítások a munkaelem előugró menüjében és a Tulajdonságok szerkesztése menüben kerülnek felhasználásra.<br /><br /><b>Fontos:</b> A Műveletlistában megadott beállítások felülbírálnak a Content Navigator adminisztrációs eszközben beállított minden egyéni menüt. Ha a Műveletlistában nincs beállítás, akkor a felhasználó nem fog tudni műveleteket végezni a munkaelemekkel.",

		admin_repcfg_box_share: "Box megosztás",
		admin_repcfg_box_share_p8_hover: "Lehetővé teszi egy dokumentum megosztását ebből a lerakatból. Egy dokumentum megosztása magában foglalja a fájl átmásolását a Box alkalmazásba, egy hivatkozás létrehozását, valamint a hivatkozás elküldését e-mailben.<br /><br />Ha engedélyezi a Box megosztást, akkor az IBM Content Navigator létrehozza a Box megosztás adatmodellt a lerakathoz. Az IBM Content Navigator Box megosztás kiegészítő telepítéséhez könyvtárkiszolgáló-adminisztrátorként kell csatlakoznia a lerakathoz.",

		admin_menu_type_icon: "Menütípus ikon",
		admin_menu_toolbar_hover: "Eszköztár",
		admin_menu_toolbar_custom_hover: "Egyéni eszköztár",
		admin_menu_contextMenu_hover: "Előugró menü",
		admin_menu_contextMenu_custom_hover: "Egyéni előugró menü",

		admin_menu_contextMenu_custom_empty: "Nincsenek meghatározva egyéni előugró menük a konfigurált bedolgozókban.",
		admin_menu_toolbar_custom_empty: "Nincsenek meghatározva egyéni eszköztárak a konfigurált bedolgozókban.",

		admin_file_type_category_filters: "Fájltípus szűrők:",
		admin_file_type_category_filters_hover_help: "Adja meg a felhasználók által a következő helyzetekben használható fájltípusok listáját:<ul><li>A találati lista szűkítéséhez az IBM Content Navigator for Microsoft Office eszközben való keresés vagy tallózás esetén<li>Az eredménylista szűkítéséhez az IBM FileNet P8 eszközben való keresés vagy tallózás esetén a webes ügyfélen<li>A felhasználók által a lerakathoz adható fájltípusok korlátozásához adatbeviteli sablon használata esetén</ul>",
		admin_file_type_only_use_in_et_folder_association: "Megjelenítés csak adatbeviteli sablon mappa társításokban",
		admin_office_config_properties_label: "Office tulajdonságok",
		admin_office_config_type_label: "Adattípus",
		admin_office_config_mapped_property_label: "Lerakat tulajdonság",
		admin_office_config_properties_hover_help: "Írja be, majd adja hozzá az összes Microsoft Office tulajdonság nevét, amelyet egy lerakat tulajdonságra kíván leképezni. Az összes tulajdonság adattípusának meg kell egyeznie",
		admin_office_config_mapped_property_hover_help: "Ha az Office tulajdonságokat több lerakat tulajdonságra kívánja leképezni, akkor új tulajdonságleképezést kell létrehoznia",
		admin_new_property_mapping_title: "Új tulajdonság leképezés",
		admin_property_mapping_title: "Tulajdonság leképezés szerkesztése",
		admin_property_mapping_instruction: "Adja meg, hogy mely Microsoft Office tulajdonságokat kívánja leképezni a lerakatban egy tulajdonságra. Az Office tulajdonságok adattípusának meg kell egyezniük a lerakatban lévő tulajdonság adattípusával. <br /><br />Ha egy Office dokumentum több tulajdonsággal rendelkezik a leképezésből, akkor az IBM Content Navigator a lista első tulajdonságát használja a lerakatban a tulajdonság feltöltésére.",
		admin_ms_general_settings: "Általános beállítás:",
		admin_ms_delete_local_settings: "Helyi fájlok törlése, amikor a felhasználók:",
		admin_ms_outlook_options: "Outlook integráció:",
		admin_ms_enable_props_mapping: "Office tulajdonságok leképezése lerakat tulajdonságokra, amikor a felhasználók:",
		admin_ms_open_doc_when_checkout: "Dokumentum automatikus kiiktatása, amikor az megnyitásra kerül",
		admin_ms_open_doc_when_checkout_hover_help: "A beállítás választása megelőzi azt, hogy a felhasználó felülírja a fájlt a lerakatban annak korábbi változatával.",
		admin_ms_prompt_close_office: "Felhasználók felszólítása a dokumentumok beiktatására Office alkalmazások bezárásakor",
		admin_ms_prompt_close_office_hover_help: "A beállítás választása megelőzi azt, hogy a felhasználó elfelejtse a munkája beiktatását.",
		admin_ms_add_with_entry_template_only: "Csak a Hozzáadása sablonnak művelet megjelenítése",
		admin_ms_delete_local_on_add: "Helyi fájlok törlése, amikor a felhasználó dokumentumokat ad hozzá",
		admin_ms_delete_local_on_checkin: "Helyi fájlok törlése, amikor a felhasználó dokumentumokat iktat be vagy visszavonja a kiiktatást",
		admin_ms_delete_local_on_add_hover_help: "Amikor egy felhasználó hozzáad egy dokumentumot az IBM Content Navigator for Microsoft Office eszközhöz, a dokumentum hozzáadásra kerül a lerakathoz, és a dokumentum helyi példánya megnyitva marad, hogy a felhasználó azonnal kiiktathassa a dokumentumot, hogy módosításokat végezhessen rajta.<br /><br />Válassza ezt a beállítást, ha automatikusan be szeretné zárni és törölni szeretné a dokumentumot, miután a dokumentum hozzáadásra került a lerakathoz.",
		admin_ms_delete_local_on_checkin_hover_help: "Amikor egy felhasználó beiktat egy dokumentumot az IBM Content Navigator for Microsoft Office eszközben, a dokumentum be lesz iktatva a lerakatba, és a dokumentum helyi példánya megnyitva marad. Továbbá a Kiiktatás visszavonása művelet után a dokumentum helyi példánya megnyitva marad. A nyitott helyi példánnyal a felhasználó azonnal újra ki tudja iktatni a dokumentumot módosítások elvégzéséhez.<br /><br />Válassza ezt a beállítást, ha automatikusan be szeretné zárni és törölni szeretné a dokumentumot a dokumentum beiktatása vagy a Kiiktatás visszavonása művelet használata után.",
		admin_ms_delete_local_on_save: "Dokumentum mentése",
		admin_ms_prompt_for_props_on_add: "Felszólítja a felhasználókat tulajdonságértékek megadására, amikor e-maileket adnak hozzá a lerakathoz",
		admin_ms_prompt_for_props_on_add_hover_help: "Ha ez a beállítás nincs kijelölve, akkor a webes ügyfél a lerakathoz meghatározott Outlook tulajdonságleképezést használja.<br /><br />Ha az adott mappához adatbeviteli sablonok tartoznak, akkor lehetséges, hogy a felhasználó nem kap felszólítást tulajdonság megadására.",
		admin_ms_delete_email_on_add: "E-mail törlése az e-mail kiszolgálóról, amikor az adott e-mail hozzáadásra kerül a lerakathoz",
		admin_ms_send_email_as_link_only: "Felhasználók nem küldhetnek dokumentumokat csatolásként",
		admin_ms_send_email_as_link_only_hover_help: "Ha a beállítás be van jelölve, akkor a felhasználók dokumentumokat csak hivatkozásként küldhetnek Outlook alkalmazásból. Ez biztosítja azt, hogy a dokumentumokat csak a lerakathoz megfelelő jogosultságokkal rendelkező felhasználók tekinthessék meg.",
		admin_ms_enable_prop_mapping_for_add: "Office tulajdonságok leképezése lerakat tulajdonságokra dokumentumok hozzáadásakor vagy beiktatásakor",
		admin_ms_checkout_document_after_add: "Automatikusan kiiktatja a dokumentumokat, miután hozzáadásra kerültek a lerakathoz",
		admin_no_default_document_type_filtering: "Összes dokumentumtípus visszaadása alapértelmezésben, amikor a felhasználók keresést futtatnak",
		admin_no_default_document_type_filtering_hover_help: "Az IBM Content Navigator for Microsoft Office eszközben a felhasználók alapértelmezésben csak az aktuális alkalmazáshoz tartalmazó dokumentumtípust látják keresés futtatásakor. Például alapértelmezésben a Word dokumentumtípus van kiválasztva a Microsoft Wordben való kereséskor.<br/><br/>Azonban a lehetőség kiválasztása törli a Dokumentumtípusok jelölőnégyzet bejelölését, így a felhasználók az keresés által visszaadott összes dokumentumot látják. A felhasználók felülbírhatják ezt a beállítása egy vagy több dokumentumtípus kiválasztásával a keresések futtatása előtt.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Megadja, hogy le kell-e képezni a Microsoft Office dokumentumok számára meghatározott dokumentumtulajdonságokat a lerakatban meghatározott tulajdonságokra.<br /></br /><b>Fontos:</b> Ha engedélyezi ezt a szolgáltatást, akkor a környezetben az összes lerakathoz be kell állítania az Office tulajdonságokat. Ha nem képezi le az Office tulajdonságokat a lerakat tulajdonságokra, akkor ez a szolgáltatás nem fog működni.<br /><br />Ez  a beállítás nem vonatkozik a Microsoft Outlook alkalmazásra.",
		admin_ms_checkout_document_after_add_hover_help: "Válassza ezt a beállítást azon lépések számának csökkentéséhez, amelyeket a felhasználóknak a dokumentumok kezeléséhez kell tenniük, miután a dokumentumok hozzáadásra kerülnek a lerakathoz.<br /></br /><b>Tipp:</b> Annak biztosításához, hogy a felhasználók ismét beiktatják a fájlokat a lerakatba, válassza ki a <b>Felhasználók felszólítása a dokumentumok beiktatására az Office alkalmazások bezárásakor</b> lehetőséget.",
		admin_ms_show_details_recently_used: "<b>Nemrég használt</b> elemek részleteinek megjelenítése",
		admin_ms_show_details_recently_used_hover_help: "Alapértelmezés szerint, amikor megtekinti a Nemrég használt elemek listáját, az egyes elemek részletei nem jelennek meg, hogy több elem legyen látható. Ha ezt a beállítást választja, akkor alapértelmezés szerint a Nemrég használt elemek listájában az első dokumentum részletei láthatók a Részletek panelen.",
		admin_ms_show_no_permissions_warning: "Figyelmeztetések megjelenítése, amikor a felhasználók tulajdonságokat szerkesztenek vagy beiktatnak egy dokumentumot, de nincs jogosultságuk a dokumentum adatbeviteli sablonjának megtekintésére.",
		admin_ms_show_no_permissions_warning_hover_help: "Ha a lerakatban lévő dokumentum egy adatbeviteli sablon használatával került létrehozásra, azonban a felhasználónak nincs jogosultsága a dokumentum adatbeviteli sablonjának megtekintésére, akkor az adatbeviteli sablon nem lesz lekérve.<br /><br/>Így amikor a felhasználó szerkeszti a dokumentum tulajdonságait, a tulajdonságok az adatbeviteli sablon használata nélkül jelennek meg. És amikor a felhasználó beiktatja a dokumentumot, a dokumentum az adatbeviteli sablon használata nélkül lesz beiktatva.<br /><br />Alapértelmezés szerint ezek a műveletek úgy történnek, hogy a felhasználó nem kap tájékoztatást az adatbeviteli sablon használatának mellőzéséről. Csak a naplófájlba kerül egy figyelmeztetés.<br /><br />Válassza ki ezt a beállítás, ha szeretne figyelmeztetéseket megjeleníteni, amelyek azonnal tájékoztatják a felhasználót, amikor az adatbeviteli sablon nem kerül felhasználásra.",
		admin_ms_hide_search_actions: "Keresési szűrők szakasz összehúzása",
		admin_ms_hide_search_actions_hover_help: "Alapértelmezés szerint a felhasználók alkalmazhatnak egy műveletszűrőt egy művelet, egy felhasználó vagy egy felhasználói csoport megadásához, és kiválaszthatnak egy dátum- vagy időtartományt, amikor a művelet történt. Például kereshet olyan dokumentumokat, amelyeket az elmúlt hónapban adott hozzá.<br /><br />Ha nem szeretné engedélyezni a felhasználók számára műveletszűrők használatát, akkor válassza ki ezt a beállítást a műveletszűrők elrejtéséhez, és a keresési feltételek meghatározásakor megjelenő mezők számának csökkentéséhez.",
		admin_ms_hide_save_document: "A <b>Mentés</b> lehetőség elrejtése a szalagsoron",
		admin_ms_hide_save_document_hover_help: "A <b>Mentés</b> funkcióval a felhasználók a dokumentum beiktatása nélkül menthetik a lerakatba a dokumentum módosításait.",
		admin_ms_indicate_managed_email_on_add: "Jelzi, hogy az e-mail már hozzáadásra került-e a lerakathoz",
		admin_ms_indicate_managed_email_on_add_hover_help: "A lehetőség kiválasztása lehetővé teszi, hogy a felhasználók tudják, hogy az e-mail más a lerakatban van-e, amely csökkenteni tudja adott e-mail lerakathoz adásának számát.  Ha a elem ki van választva, akkor új IBM ECM nevű színkategória jön létre a Microsoft Outlookban. A lerakathoz adott e-mailek automatikusan hozzáadásra kerülnek az IBM ECM által kezelt kategóriához.",
		admin_ms_edit_group_add_command_configuration: "Hozzáadása lehetőségek a Szerkesztés csoportban:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Adja meg, hogy mely <b>Hozzáadási</b> lehetőségek állnak rendelkezésre a szalagsor <b>Szerkesztés</b> csoportjában:<ul><li>Válassza ki az <b>Összes hozzáadása megjelenítése lehetőséget</b> a Hozzáadás és a Szerkesztés csoportban elérhető összes Hozzáadása művelet megjelenítéséhez.</li><li>Válassza ki az <b>Összes hozzáadása elrejtése lehetőséget</b> annak megakadályozásához, hogy a felhasználók dokumentumokat adjanak hozzá, vagy ha csak azt akarja, hogy a felhasználók csak a csoportterületről adjanak hozzá dokumentumokat.</li><li>Válassza ki az <b>Hozzáadása sablonnal művelet elrejtése</b> lehetőséget, ha ki kívánja kényszeríteni az adatbeviteli sablon mappa társításokat, és meg kívánja akadályozni, hogy a felhasználók különböző adatbeviteli sablont válasszanak ki.</li><li>Válassza ki a <b>Csak a sablonnal hozzáadás művelet megjelenítése</b> lehetőséget, ha azt kívánja, hogy a felhasználók a dokumentumokat adatbeviteli sablonokkal adják hozzá.</li></ul>",
		admin_ms_show_edit_group_add_button: "Összes hozzáadás lehetőség megjelenítése (alapértelmezett)",
		admin_ms_hide_edit_group_add_button: "Összes hozzáadás lehetőség elrejtése",
		admin_ms_hide_add_with_entry_template: "Hozzáadás sablonnal művelet elrejtése",
		admin_ms_managed_in_ecm: "IBM ECM által kezelt",
		admin_ms_managed_in_ecm_hover_help: "Ha a felhasználók megjelenítenek kategóriákat a Microsoft Outlookban, akkor ez a címke megjelenik az IBM Content Manager vagy IBM FileNet Content Manager lerakathoz adott emailnél.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Az IBM ECM által kezelt kategórianév nem tartalmazhat vesszőt (,) és pontosvesszőt (;).",
		admin_delete_open_docs_after_close: "Dokumentumok automatikus törlése, amikor a felhasználók bezárják a dokumentumot",
		admin_admin_delete_open_docs_after_close_hover_help: "Amikor a felhasználó megnyit egy dokumentumot az IBM Content Navigator for Microsoft Office eszközben, akkor a dokumentum letöltésre kerül a felhasználó dokumentumkönyvtárába vagy a munkaasztal fájlnyomkövetési beállítása által megadott helyre.<br><br>Válassza ki ezt a lehetőséget azon fájlok törléséhez, amelyek meg vannak nyitva, de nem lettek kiiktatva, amikor a felhasználók bezárták a dokumentumot. A lehetőség kiválasztása a következőket teszi lehetővé:<ul><li>IT irányelvekkel való megfelelés kikényszerítése</li><li>Annak biztosítása, hogy a felhasználók a dokumentumok legfrissebb változatát használják</li><li>A dokumentumok tárolásához használt lemezterület csökkentése</li><ul>",
		admin_ms_custom_command_configuration: "Egyéni parancsok:",
		admin_ms_custom_command_configuration_hover_help: "Legfeljebb négy parancsot adhat hozzá az IBM Content Navigator for Microsoft Office eszköztárhoz a Microsoft Office alkalmazásban. A parancsok használhatók az URL címek megnyitásához. Például felvehet egy parancsot felhasználók és csoportok kereséséhez használható szolgáltatás megnyitására szolgáló parancsot.",
		admin_ms_custom_command_dialog_title: "Egyéni parancs szerkesztése",
		admin_ms_custom_command_dialog_intro_text: "Megadhat egy parancsot, amely megnyit egy URL címet az IBM Content Navigator for Microsoft Office eszköztárból a Microsoft Office alkalmazásban.",
		admin_ms_custom_command_id: "${0} parancs",
		admin_ms_custom_command_available_label: "Elérhető",
		admin_ms_custom_command_available_hover_help: "Ha a parancshoz megadott URL címet offline állapotba kell helyezni karbantartás érdekében, akkor megszüntetheti a jelölőnégyzet bejelölését, így a parancs nem jelenik meg a Microsoft Office eszközben.<br/><br/><b>Fontos:</b> A felhasználóknak ki kell jelentkezniük a munkaasztalról ahhoz, hogy a módosítások látszódjanak az IBM Content Navigator for Microsoft Office eszközben.",
		admin_ms_custom_command_command_id_label: "Parancsazonosító",
		admin_ms_custom_command_id_label: "Azonosító",
		admin_ms_custom_command_label_label: "Címke",
		admin_ms_custom_command_label_hover_help: "Adja meg a parancshoz a Microsoft Office eszközben megjelenítendő címkét.",
		admin_ms_custom_command_description_label: "Leírás",
		admin_ms_custom_command_description_hover_help: "Adja meg a parancshoz a Microsoft Office eszközben megjelenítendő leírást.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Adja meg a teljes képzésű URL címet, amely megnyitásra kerül a Microsoft Office eszközben. Az URL lehet weboldal vagy szolgáltatás.",
		admin_ms_custom_command_icon_label: "Ikon",
		admin_ms_custom_command_icon_hover_help: "Adja meg a megjelenítendő ikon fájlnevét, például: CommandIcon.png.<br/><br/><b>Fontos:</b> Az ikonfájlt hozzá kell adni az IBM Content Navigator for Microsoft Office telepítési könyvtár Bedolgozók alkönyvtárához minden ügyfélgépen.<br/><br/>Ha az ikonfájl nem található meg a Bedolgozók könyvtárban, vagy ha nem ad meg ikont, akkor az alapértelmezett customButtonIcon_38.gif ikon jelenik meg.",
		admin_ms_custom_command_group_name: "Csoportcímke:",
		admin_ms_custom_command_group_name_hover_help: "Megadhat egy csoportcímkét, amely megjelenik az egyéni parancs alatt a szalagsoron.<br/><br/>Ha nem ad meg címkét, akkor a csoportcímke <b>Egyéni parancsok</b> lesz.",
		admin_ms_ribbon_tab_label: "IBM ECM lap címke:",
		admin_ms_ribbon_tab_hover_help: "Adja meg az IBM Content Navigator for Microsoft Office laphoz a Microsoft Office szalagsoron megjeleníteni kívánt nevet. Ha nem ad meg nevet, akkor a lap neve \“IBM ECM\" lesz.",
		admin_ms_close_task_pane_on_open: "Feladat ablakrész bezárása, amikor a felhasználó megnyitja a dokumentumot",
		admin_ms_close_task_pane_on_open_hover_help: "Válassza ki ezt a lehetőséget, ha maximalizálni kívánja a területet, amelyen a felhasználó dokumentumokat láthat a Microsoft Office eszközben.<br/><br/>Microsoft Office 2010 felhasználó esetén: Annak biztosítása érdekében, hogy a feladat ablakrész bezárásra kerüljön az összes dokumentumnál, engedélyezze a többszörös dokumentumfelület (MDI) módot a <b>Beállítások</b> &gt; <b>Összetett</b> menüpontra kattintással és az <b>Összes ablak megjelenítése a feladatsoron</b> lehetőség törléséhez.",
		admin_ms_open_document_options: "Dokumentummegnyitási lehetőségek:",
		admin_ms_delete_local_file_options: "Helyi fájl törlési lehetőségek:",
		admin_ms_add_and_checkin_options: "Hozzáadási és beiktatási lehetőségek:",
		admin_ms_search_options: "Keresési beállítások:",
		admin_ms_display_options: "Beállítások megjelenítése:",
		admin_ms_bidirection_enable_label: "Kétirányú szöveg támogatásának engedélyezése",
		admin_ms_bidirection_enable_hover_help: "Válassza ezt a beállítást, ha engedélyezni kívánja a felhasználók számára, hogy az IBM Content Navigator for Microsoft Office alkalmazásban a balról jobbra irány helyett más irányú szöveget adjanak meg.",
		admin_ms_text_direction_label: "Tartalom alap szövegiránya:",
		admin_ms_text_direction_hover_help: "Adja meg az irányt, mellyel a szöveg beírásra kerül az IBM Content Navigator for Microsoft Office beviteli mezőiben. Ez a beállítás azt is meghatározza, hogyan kerüljenek megjelenítésre az elemek, például a mappanevek vagy tulajdonságértékek.",
		admin_ms_control_threshold_label: "Az előretekintés engedélyezéséhez szükséges elemek minimális száma:",
		admin_ms_control_threshold_hover_help: "Alapértelmezés szerint az előretekintés akkor kerül engedélyezésre, amikor az elemek száma 50 vagy ennél nagyobb, a kereséshez vagy az olyan tulajdonságok beállításához, amelyek egy legördülő listában előre meghatározott értékekkel rendelkeznek. Ezt a minimális értéket módosíthatja.",

		admin_ms_default_email_class: "Email hozzáadásakor használt osztály",
		admin_ms_default_email_class_hover_help: "Minden, a Microsoft Outlook alkalmazásból a lerakathoz adott email a megadott osztályhoz lesz hozzáadva. A felhasználók nem módosíthatják az osztályt.",
		admin_ms_default_folder_class: "Mappák létrehozásakor használt osztály",
		admin_ms_default_folder_class_hover_help: "Minden, egy Microsoft Office alkalmazásból a lerakatban létrehozott mappa a megadott osztályhoz lesz hozzáadva.  A felhasználók nem módosíthatják az osztályt.",
		admin_ms_default_folder_warn_title: "A(z) ${0} osztályt nem használhatja mappák létrehozása során alkalmazandó osztályként.",
		admin_ms_default_folder_warn_name_prop_invalid: "Az osztály tulajdonságának neve nem karaktersorozat, de a mappa nevének karaktersorozatnak kell lennie.<br />Válasszon másik osztályt mappák létrehozásához, vagy az IBM Content Manager adminisztrátor segítségével módosítsa az osztály név tulajdonságát karaktersorozatra.",
		admin_ms_default_folder_warn_req_props: "Az osztály olyan kötelező tulajdonságokat tartalmaz, amelyek nem rendelkeznek értékkel. Azonban a felhasználók nem  adhatnak meg értéket a kötelező tulajdonságok számára, amikor mappákat hoznak létre IBM Content Navigator for Microsoft Office alkalmazásból.<br />Válasszon másik osztályt mappák létrehozása során megvalósuló használatra, vagy az IBM Content Manager adminisztrátor segítségével állítsa be a kötelező tulajdonságokat nem kötelezővé, vagy töltse ki előre értékkel a kötelező tulajdonságokat.",
		admin_ms_delimiter_for_office_properties: "Többértékű karaktersorozat tulajdonságok határolója",
		admin_ms_delimiter_for_office_properties_hover_help: "Adja meg a karaktert, amelyet határolóként szeretne használni az olyan karaktersorozat tulajdonságokhoz, amelyeket többértékű karaktersorozat tulajdonságokra képez le. Alapértelmezés szerint egy többértékű karaktersorozat tulajdonságokhoz az értékek elválasztásához határolóként pontosvessző (;) használatával elválasztott értékek készletét rendelheti hozzá. Ha azonban az egyik karaktersorozat érték tartalmaz egy pontosvesszőt, akkor nem adhatja hozzá az adott karaktersorozat értéket, kivéve, ha a határolót egy másik karakterre módosítja. A határolót módosíthatja például vesszőre (,).",
		admin_ms_outlookPropertyRemembrance : "Beállítások megjegyzése üzenetek és mellékletek hozzáadásakor",
		admin_ms_outlookPropertyRemembrance_hover_help : "Az üzenetekhez és mellékletekhez rendelt tulajdonságértékeket, helyet, osztályválasztást és biztonságot megjegyzi a rendszer, és a későbbi elemek hozzáadása során alapértelmezett beállításként kerülnek felhasználásra.",

		admin_file_type_name_hover_help: "Név előugró leírás",
		admin_file_type_description_hover_help: "Leírás előugró leírás",
		admin_file_type_dialog_title: "Fájltípusszűrő szerkesztése",
		admin_new_file_type_dialog_title: "Új fájltípusszűrő",
		admin_mobile_feature_dialog_title: "Szolgáltatás",
		admin_mobile_feature_dialog_new_title: "Új szolgáltatás",
		admin_file_type_instructions: "Szűrőt hozhat létre, amivel a felhasználók szűkíthetik a találati listát. Több MIME típust kioszthat a szűrőhöz.",
		admin_file_type_filter_place_holder: "Szűrő MIME típusok",
		admin_new_button_label: "Új",
		admin_edit_button_label: "Szerkesztés",
		admin_delete_button_label: "Törlés",
		admin_copy_button_label: "Másolás",
		admin_verify_button_label: "Ellenőrzés",
		admin_availabe_filters_label: "Rendelkezésre álló szűrők",
		admin_selected_filters_label: "Kijelölt szűrők",

		admin_mobile_access: "Mobil alkalmazás hozzáférés:",
		admin_mobile_access_hover_help: "Ha mobil eszközről szeretné használni az IBM Content Navigator alkalmazást, akkor javasolt engedélyezni, hogy a felhasználók elérjék ezt a munkaasztalt a mobil alkalmazásból.<br /><br />Ha tiltja a munkaasztal elérését a mobil alkalmazásból, akkor a felhasználók még elérik a webes ügyfelet a mobil böngészőjükből. A webes ügyfél azonban nem mobil eszközökről való elérésre lett tervezve.",

		admin_mobile_access_allow_label: "Felhasználók számára engedélyezett:",
		admin_mobile_allow_add_photos: "Fotók hozzáadása fényképezőgépről és fotókönyvtárból",
		admin_mobile_allow_add_docs: "Dokumentumok hozzáadása és mappák létrehozása a lerakatban",
		admin_mobile_allow_open_docs: "Dokumentumok megnyitása más alkalmazásokban",
		admin_mobile_allow_add_docs_hover_help: "A felhasználók létrehozhatnak mappákat vagy hozzáadhatnak dokumentumokat, például e-mailhez csatolt dokumentumot más mobil alkalmazásokból.",
		admin_mobile_allow_open_docs_hover_help: "A felhasználók felszólítást kapnak a kijelölt dokumentum megjelenítéséhez használt alkalmazás kiválasztására. Ha csak egyetlen alkalmazás érhető áll rendelkezésre, akkor az az alkalmazás kerül felhasználásra.",
		admin_mobile_features: "Szolgáltatások:",
		admin_mobile_features_hover_help: "Adja meg, hogy a munkaasztal mely szolgáltatásai jelenjenek meg az IBM Content Navigator mobil alkalmazásban.",
		admin_mobile_new_feature_button_label: "Új szolgáltatás",
		admin_mobile_move_up_button_label: "Mozgatás felfelé",
		admin_mobile_move_down_button_label: "Mozgatás lefelé",
		admin_desktop_mobile_instructions: "Mobil beállítások útmutatásának helye",
		admin_desktop_max_number_of_docs_to_add: "Hozzáadható dokumentumok maximális száma:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "A felhasználók által egyszerre hozzáadható dokumentumok maximális száma. Az alapértelmezett maximum az 50. Maximális számként azonban akár 300-at is beállíthat.",
		admin_desktop_max_number_of_docs_to_modify: "Módosítható elemek maximális száma:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Adja meg a felhasználók által egyszerre módosítható elemek számát. Az alapértelmezett maximum az 50. Maximális számként azonban akár 300-at is beállíthat.",
		admin_desktop_max_conversion_size: "Maximális adatmennyiség PDF-átalakításokhoz (MB-ban):",
		admin_desktop_max_conversion_size_hover_help: "<b>Korlátozás:</b> Ez a beállítás IBM Content Manager OnDemand rendszeren nem használható.<br/><br/>Adja meg a PDF-formátumúvá alakítható adatok maximális mennyiségét. Ez a korlát akkor lép érvénybe, amikor a felhasználók PDF-fájlokként töltenek le elemeket, vagy PDF-fájlként küldenek el elemeket e-mailben.<br /><br />Ha az egyes dokumentumok mérete nincs meghatározva, akkor a dokumentumok továbbra is PDF-állománnyá alakíthatók.<br/><br/>Az alapértelmezett méretkorlát 200 MB. A 200 MB-nál nagyobb érték megadása befolyásolhatja a rendszer teljesítményét.",
		admin_desktop_timeProperties: "Időpecsét:",
		admin_desktop_time_properties_hover_help: "<b>Csak IBM FileNet P8 felhasználók:</b> Ez a beállítás az egyedi beállításokra vonatkozik, a rendszerbeállításokat nem érinti. A Módosító tulajdonság továbbra is az időpecsét idő részét fogja mutatni, hiába választja a <b>Csak az időpecsét dátum részének megjelenítése</b> beállítást.<br/><br/>Ez a beállítás nem változtatja meg az időpecsétet a lerakatban.",
		admin_desktop_disable_time_stamp: "Teljes időpecsét megjelenítése",
		admin_desktop_enable_time_stamp: "Csak az időpecsét dátum részének megjelenítése",
		admin_desktop_timezone: "Időzóna:",
		admin_desktop_timezone_localuser: "A felhasználó helyi időzónájának megjelenítése",
		admin_desktop_timezone_alluser: "Azonos időzóna megjelenítése minden felhasználó számára",
		admin_desktop_timezone_hover_help: "Megadhatja, hogy a felhasználók a saját helyi idejük szerinti időpecsétet lássanak, vagy minden felhasználó ugyanazt.<br/><br/>Ez a beállítás nem változtatja meg az időpecsétet a lerakatban. A kiválasztott beállítás azonban meghatározza, hogy milyen időzóna vonatkozzon az időpecsét létrehozására akkor, amikor a felhasználók elemeket adnak hozzá a lerakathoz vagy módosítanak benne.",
		admin_desktop_mobile_feature_display_label: "Megjelenítés",
		admin_desktop_mobile_feature_icon_file_label: "Ikon fájl",
		admin_mobile_feature_dialog_icon_file_label: "Ikon fájl:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Név",
		admin_desktop_mobile_select_feature_label: "Szolgáltatás kiválasztása",
		admin_desktop_mobile_feature_icon_label: "Szolgáltatás ikon",
		admin_desktop_share_admin_none: "Nincs beállítva adminisztrátor.",
		admin_desktop_share_admin_edit_label: "Adminisztrátor beállítása...",
		admin_browse_icon: "Tallózás ikon",
		admin_search_icon: "Keresés ikon",
		admin_favorites_icon: "Kedvencek ikon",
		admin_casesearch_icon: "Ügy ikon",
		admin_datacap_icon: "Datacap ikon",
		admin_system_defined: "Rendszer által meghatározott",
		admin_icon_file_placeholder_text: "Fájl helye (például http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Gyökér",
		admin_folder_default: "Alapértelmezett",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Eszköztárak",
		admin_menu_context_menus: "Előugró menük",
		admin_menu_office_toolbars: "Microsoft Office szalagsáv parancsok",
		admin_menu_office_menus: "Microsoft Office előugró menük",

		admin_file_name_label: "Fájlnév:",
		admin_exportconfiguration_security_label: "Munkaasztal jogosultsággal rendelkező felhasználók és csoportok tartalmazása",
		admin_exportconfiguration_instruction: "Lehetőség van a munkaasztalok exportálására, beleértve a kiválasztott munkaasztalokhoz tartozó lerakat és bedolgozó beállításokat, egy olyan fájlba, amely importálható az IBM Content Navigator egy másik példányába.",
		admin_exportconfiguration_dialog_label: "Munkaasztal exportálása",
		admin_exportconfiguration_button_label: "Exportálás",
		admin_dialog_select_all: "Mindent kijelöl",
		admin_dialog_deselect_all: "Az összes törlése",

		admin_importconfiguration_instruction: "A kiválasztott konfigurációs fájlban levő elemek importálásra kerülnek a rendszerbe. Ha azonban egy megegyező azonosítóval rendelkező elem már létezik a rendszerben, akkor el kell döntenie, hogy megőrizze vagy felülírja az elemet.",
		admin_importconfiguration_dialog_label: "Munkaasztal importálása",
		admin_importconfiguration_reason_dialog_label: "Szerkesztési okok importálása",
		admin_importconfiguration_button_label: "Importálás",
		admin_to_be_imported: "Importálni kívánt konfigurációs elem",
		admin_on_target_system: "Meglévő elem a célrendszeren",
		admin_import_short_warning_message: "A következő elemek már léteznek a rendszeren. Válassza ki a rendszer azon elemeit, amelyeket felül kíván írni:",
		admin_import_warning_message: "A következő konfigurációs elemek ugyanazzal az azonosítóval rendelkeznek, mint a célrendszeren meglévő elemek. Válassza ki az importálni és a célrendszeren felülírni kívánt elemeket.<br /><br />Ha egy konfigurációs elemet nem akar felülírni, akkor hozzon létre annak exportált példányáról egy másolatot, adjon neki egy új azonosítót, majd társítsa a munkaasztallal. Exportálja a munkaasztalt újra, majd importálja a munkaasztalt erre a példányra.",
		admin_choose_file_to_import_label: "Válassza ki az importálni kívánt fájlt:",
		admin_download_imported_log: "Jelentés letöltése",
		admin_desktop_import_summary: "Munkaasztal importálásának összegzése",
		admin_reason_import_summary: "Szerkesztési ok importálásának összegzése",
		admin_rba_import_summary: "Adminisztrációs szerep importálásának összegzése",
		admin_import_open_tabs_checking: "A munkaasztalok importálása előtt be kell zárnia az összes lapot, kivéve a <bold>Munkaasztalok</bold> lapot az adminisztrációs eszközön.",
		admin_import_no_conflict: "A következő elemek kerülnek importálásra:",
		admin_desktop_invalid: "Érvénytelen munkaasztal",
		admin_desktop_warning: "A munkaasztal figyelmeztetésekkel lett mentve.",
		admin_repos_warning: "A lerakat figyelmeztetésekkel lett mentve.",
		admin_config_type_icon: "Konfigurációs elemtípus ikon",

		admin_approval_workflow: "Jóváhagyási munkafolyamat",
		admin_approval_workflow_hover: "Lehetővé teszi a felhasználók számára egy előre meghatározott jóváhagyási munkafolyamat indítását. A jóváhagyási munkafolyamat letiltásával lehetővé teheti a felhasználók számára egy egyéni jóváhagyási munkafolyamat indítását, amelyet az előfizetés határoz meg. Alapértelmezésben a jóváhagyási munkafolyamat engedélyezett.<br><br><b>Fontos:</b> Ha engedélyezi a jóváhagyási munkafolyamatot, akkor győződjön meg arról is, hogy az előre meghatározott munkafolyamat meghatározások egyike vagy mindkettő (ICNParallelDocumentApproval.pep és ICNSequentialDocumentApproval.pep) hozzá van adva a lerakathoz és át van adva a Tartalomfeldolgozási alrendszernek.",

		admin_cannot_add_desktop_members_error: "Nem adhatja meg azokat a felhasználókat és csoportokat, akik hozzáféréssel rendelkeznek ehhez a munkaasztalhoz.",
		admin_cannot_add_desktop_members_error_explanation: "Nem rendelkezik a megfelelő engedélyekkel felhasználói- és csoportinformációk lekéréséhez.",
		admin_cannot_add_desktop_members_error_userResponse: "Jelentkezzen be másik felhasználónévvel, vagy kérje meg az IBM Content Manager rendszeradminisztrátorát, hogy adja meg Önnek a felhasználói- és csoportinformációk lekéréséhez szükséges UserACLOwner jogosultságot.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Nem választhat ki felhasználókat és csoportokat.",
		admin_cannot_select_users_groups_error_explanation: "Nem rendelkezik a megfelelő engedélyekkel felhasználói- és csoportinformációk lekéréséhez.",
		admin_cannot_select_users_groups_error_userResponse: "Jelentkezzen be másik felhasználónévvel, vagy kérje meg az IBM Content Manager rendszeradminisztrátorát, hogy adja meg Önnek a felhasználói- és csoportinformációk lekéréséhez szükséges UserACLOwner jogosultságot.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Az OAuth2 ügyfél nem található.",
		oauth_client_not_found_error_explanation: "A(z) ${0} OAuth2 ügyfélazonosító nem található.",
		oauth_client_not_found_error_userResponse: "Lépjen kapcsolatba a rendszeradminisztrátorral, és tudassa vele, hogy az OAuth2 ügyfélazonosító nem található.",
		oauth_client_not_found_error_adminResponse: "Tekintse át a lerakat konfigurációt, és ellenőrizze, hogy tartalmazza-e a helyes OAuth2 ügyfélazonosítót.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "ügyfélazonosító",

		oauth_login_failed_error: "A bejelentkezés a lerakatba meghiúsult.",
		oauth_login_failed_error_explanation: "A kísérlet a bejelentkezésre a(z) ${0} lerakatba meghiúsult.",
		oauth_login_failed_error_userResponse: "Ellenőrizze a felhasználói azonosító helyességét, majd próbáljon meg újra bejelentkezni.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "lerakatazonosító",

		oauth_error_return_error: "Hiba történt a bejelentkezéskor a következőbe: ${0}.",
		oauth_error_return_error_explanation: "A(z) ${0} felhatalmazási kísérlet meghiúsult.",
		oauth_error_return_error_userResponse: "Lépjen kapcsolatba a rendszeradminisztrátorral a következő információkkal: A(z) ${0} felhatalmazási kísérlet meghiúsult, és a következő hibaüzenetet adta vissza: <br>${1}<br><b>hiba:</b> ${2}.<br><b>leírás:</b> ${3}.",
		oauth_error_return_error_adminResponse: "A hibával kapcsolatos további információk a webalkalmazás-kiszolgáló naplófájljában találhatók.  A naplófájlokról további információkat az IBM Knowledge Center &quot;IBM Content Navigator naplófájljai&quot; című témakörében talál. A(z) ${0} felhatalmazási kísérlet információnak felhasználásával próbálja meg javítani a problémát, és ellenőrizze, hogy az OAuth2 engedélyezve van-e.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth cél alkalmazás",
		oauth_error_return_error_1: "hibaüzenet",
		oauth_error_return_error_2: "hiba",
		oauth_error_return_error_3: "hiba_leírása",

		oauth_error_unknown: "Ismeretlen OAuth hibaüzenet.",

		delete_share_permission_error: "A megosztás nem lett törölve.",
		delete_share_permission_error_explanation: "Ön nem rendelkezik a megosztás törléséhez szükséges megfelelő engedélyekkel.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Ezt az elemet nem oszthatja meg.",
		class_not_support_share_error_explanation: "A(z) ${0} osztály nincs beállítva a megosztás támogatásához.",
		class_not_support_share_error_0: "osztály_neve",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Ezt az elemet nem oszthatja meg.",
		rbr_not_support_share_error_explanation: "Érzékeny tartalom került hozzáadásra az elemhez.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Az eszköz, amelyre a felhasználó megpróbál bejelentkezni, nincs felhatalmazva a felhasználó fiókjának elérésére.",
		box_oauth_error_invalid_request: "A kérésből hiányzik egy kötelező paraméter, érvénytelen paraméterértéket tartalmaz, egy paramétert többször tartalmaz, vagy más módon helytelen a formátuma.",
		box_oauth_error_unsupported_response_type: "A jogosultságkiszolgáló nem támogatja a jogosultságkód beszerzését ezzel a módszerrel.  Ellenőrizze a kérésben a kód (code) paraméter értékét.",
		box_oauth_error_access_denied: "Az erőforrás tulajdonosa vagy a jogosultságkiszolgáló visszautasította a kérést.",
		box_oauth_error_temporarily_unavailable: "Az eszköz sebessége korlátozva van, csökkentenie kell a felhatalmazási kérések gyakoriságát, vagy várnia kell egy kis ideig.",
		box_oauth_error_unknown: "Ismeretlen Box hibaüzenet.",

		admin_default_search_type: "Alapértelmezett keresési típus",
		admin_default_search_type_hover: "Adja meg, melyik beállítás van alapértelmezésben kiválasztva a <b>Keresési beállítások</b> menü <b>Keresés</b> mezőjében.",
		admin_default_search_type_documents: "Dokumentumok",
		admin_default_search_type_folders: "Mappák",
		admin_default_search_type_folders_and_documents: "Dokumentumok és mappák",

		admin_restricted_search_type: "Keresés engedélyezése",
		admin_restricted_search_type_hover: "Alapértelmezés szerint a felhasználók dokumentumokat és mappákat is kereshetnek. Ha el szeretné rejteni a Keresés beállítást és a kereséseket csak dokumentumokra szeretné korlátozni, akkor jelölje be a Dokumentumok elemet, és törölje a Mappák elem bejelölését. </br>,</br> Ha dokumentumok és mappák keresését egyaránt engedélyezni szeretné, akkor válassza ki a Keresés panel megnyitásakor alapértelmezés szerint megjelenítendő beállítást.",
		admin_restricted_search_type_documents: "Dokumentumok",
		admin_restricted_search_type_folders: "Mappák",
		admin_restricted_search_type_folders_and_documents: "Dokumentumok és mappák",

		admin_default_search_version: "Alapértelmezett keresés változat",
		admin_default_search_version_hover: "Adja meg, melyik beállítás van alapértelmezésben kiválasztva a <b>Keresési beállítások</b> menü <b>Változat</b> mezőjében.",

		admin_all_classes_search: "Keresés az összes osztályban.",
		admin_all_classes_search_hover: "Adja meg, hogy a felhasználók kereshetnek-e az összes osztályban, ha ez engedélyezve van, akkor határozza meg, mi tartozzon bele a dokumentum keresésekbe.",
		admin_all_classes_search_removed_hover: "A keresés az összes osztályban lehetőségek nem érhetők el, mert a Navigator alkalmazás web.xml fájljában az allPseudoClassHidden paraméter true értékre van állítva.",
		admin_all_classes_search_hide: "Távolítsa el a keresés az összes osztályban lehetőséget.",
		admin_all_classes_search_documents_only_documents: "Egy dokumentum keresés csak dokumentumokat, mentett kereséseket és adatbeviteli sablonokat foglal magába",
		admin_all_classes_search_documents_non_folders: "Egy dokumentum keresés a mappákon kívül minden elemet magába foglal",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Fa nézet:",
		admin_feature_config_tree_view_hoverhelp: "Adja meg, hogy a felhasználók elérhessék-e a mappák listáját a lerakatban a Tallózás ablakrészen keresztül. Ha elrejti a Tallózás ablakrészt, akkor a felhasználóknak a tartalomlistát kell használniuk a mappákhoz való navigációhoz a lerakatban.",
		admin_feature_config_selected_repositories_label: "Lerakatok:",
		admin_feature_config_selected_repositories_hoverhelp: "Válassza ki a felhasználók által a szolgáltatásban elérhető lerakatokat.",
		admin_feature_config_selected_repositories_select_state_hdr: "Lerakat kiválasztása",
		admin_feature_config_selected_repositories_name_hdr: "Lerakat neve",
		admin_feature_config_selected_repositories_show_hdr: "Megjelenítés",
		admin_feature_config_invalid_icon_title: "A szolgáltatáshoz néhány kötelező beállítás hiányzik",
		admin_feature_config_view_select_hdr: "Nézet kiválasztása",
		admin_feature_config_view_hdr: "Nézet",
		admin_feature_config_view: "Nézet",
		admin_feature_config_views: "Nézetek:",
		admin_feature_config_views_hoverhelp: "Adja meg, hogy a felhasználók mely nézeteket alkalmazhatják a tartalomlistára. A nézetek a felsorolási sorrendjükben kerülnek megjelenítésre. Az első kiválasztott nézet a szolgáltatás alapértelmezett nézete.<br><br><b>Fontos:</b> Ha engedélyezi a Diafilm nézetet, akkor be kell állítania a HTML átalakítás megjelenítőt a dokumentum előképek megjelenítéséhez.",

		admin_custom_dialog_name: "Név:",
		admin_custom_dialog_value: "Érték:",
		admin_custom_setting_name_hover: "Adja meg annak a Daeja ViewONE beállításnak a nevét, amelyet a konfigurációhoz hozzá szeretne adni. A konfigurációs beállításokkal kapcsolatban további információkat a Daeja ViewONE dokumentációjában talál.",
		admin_custom_setting_value_hover: "Adja meg a Daeja ViewONE konfigurációs beállításhoz használni kívánt értéket. A konfigurációs beállítások érvényes értékeivel kapcsolatban további információkat a Daeja ViewONE dokumentációjában talál.",

		entry_template_name_required_message: "A név mező az adatbeviteli sablon beállításoknál kötelező.",
		entry_template_name_invalid_message: "A név mező az adatbeviteli sablon beállításoknál nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Ha adott felhasználók vagy csoportok vannak kiválasztva a Megosztás vele: mezőhöz az adatbeviteli sablon beállításoknál, akkor legalább egy felhasználót vagy csoportot meg kell adni.",
		entry_template_no_permission_to_save_to_teamspace_message: "Nem jogosult adatbeviteli sablonok csoportterülethez (${0}) adására, amely az Adatbeviteli sablon beállítása Mentés lehetőségénél lett kiválasztva.",
		entry_template_save_in_destination_required_message: "Meg kell adnia egy alapértelmezett mentési helyet az <b>Elemtároló hely beállítása</b> részben.",
		entry_template_save_in_destination_must_select_folder: "Ha elrejti a <b>Mentési hely</b> mezőt és a felhasználóknak új elemeket kell hozzáadniuk egy mappához, akkor ki kell választania egy mappát az <b>Alapértelmezett mentési hely</b> mezőben az <b>Elemtároló beállítása</b> részben.",
		entry_template_what_to_save_required_message: "Válasszon ki legalább egy lehetőséget a Mit kíván menteni lehetőséghez a Beállítások megadása elemnél.",
		entry_template_custom_workflow_empty_message: "Ha az <b>Egyéni munkafolyamat...</b> lehetőséget választja ki, akkor meg kell keresnie és ki kell választania a használni kívánt munkafolyamatot.",

		entry_template_new: "Új adatbeviteli sablon",
		entry_template_name_hover: "Az adatbeviteli sablon neve nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Az adatbeviteli sablon neve nem tartalmazhatja a következő karaktereket: * \\ / : ? \" < > |",
		entry_template_description_hover: "Adjon meg egy olyan leírást, amely lehetővé teszi a felhasználók számára, hogy megkülönböztessék ezt az adatbeviteli sablont a többi adatbeviteli sablontól.",
		entry_tempalte_save_in_hover: "Adja meg, hová kell elmenteni az adatbeviteli sablont.<br><br><b>Korlátozás:</b> Ha az adatbeviteli sablont egy csoportterületre menti, akkor az adatbeviteli sablont csak az adott csoportterületen tudja használni.",
		entry_template_inherit_hover: "Ha kiválasztja ezt a beállítást, akkor a szülőmappa biztonsági beállításai hozzáadásra kerülnek azon felhasználók és csoportok listájához, melyekkel az adatbeviteli sablon meg van osztva.",
		entry_template_builder_aria_label: "Adatbeviteli sablon tervező",
		entry_template_builder_layout_aria_label: "Adatbeviteli sablon tulajdonság készítő",

		entry_template_settings_document: "Adatbeviteli sablon megadása",
		entry_template_settings_folder: "Elem tárolóhelyének beállítása",
		entry_template_settings_folder_intro: "Adja meg, hogy az adatbeviteli sablon használatával hozzáadott elemek hol legyenek tárolva.",
		entry_template_settings_properties: "Elem tulajdonságainak beállítása",
		entry_template_settings_properties_intro: "Az adatbeviteli sablon használatával hozzáadott elemekhez használhat alapértelmezett értéket vagy előre meghatározott értéket. Ezen felül a tulajdonságok elrendezésének módosításával szabályozhatja, hogy mely tulajdonságok és milyen sorrendben kerüljenek megjelenítésre.",
		entry_template_settings_workflow: "Munkafolyamat beállítása az elemhez",
		entty_template_settings_workflow_intro: "Megadhatja, hogy egy munkafolyamat elinduljon-e, amikor elemek kerülnek hozzáadásra az adatbeviteli sablon használatával.",
		entry_template_settings_security: "Elem biztonságának beállítása",
		entry_template_settings_security_intro: "Az adatbeviteli sablon használatával hozzáadott elemekhez használhat alapértelmezett biztonságot vagy előre meghatározott biztonságot. A megfelelő engedélyekkel rendelkező felhasználók meg tudják változtatni az elem biztonságát annak hozzáadása után.",
		entry_template_settings_options: "Elem lehetőségeinek beállítása",
		entry_template_xt_warning: "Az adatbeviteli sablon módosításainak mentése át fogja alakítani azt IBM Workplace XT adatbeviteli sablonról IBM Content Navigator adatbeviteli sablonná. Az IBM Workplace XT nem támogatja az IBM Content Navigator adatbeviteli sablonokat.",

		entry_template_properties_edit_layout: "Elrendezés szerkesztése...",
		entry_template_properties_read_only: "Csak olvasás",
		entry_template_properties_hidden: "Rejtett",

		entry_template_destination_show: "<b>Mentés helye</b> mező megjelenítése",
		entry_template_destination_show_hover: "Ha megjeleníti a <b>Mentés helye</b> mezőt, akkor a felhasználók átválthatnak oda, ahol az elemek tárolva vannak.",
		entry_template_destination_hide: "<b>Mentés helye</b> mező elrejtése",
		entry_template_destination_hide_hover: "Ha nem jeleníti meg a <b>Mentés helye</b> mezőt, akkor a felhasználók nem válthatnak át oda, ahol az elemek tárolva vannak.",
		entry_template_folder_save_in_default: "Alapértelmezett <b>Mentés helye</b>:",
		entry_template_folder_save_in_default_hover: "Adja meg azt az alapértelmezett helyet, ahol az elemek hozzáadásra kerülnek ezzel az adatbeviteli sablonnal.<br><br>A kiválasztott alapértelmezett hely korlátozásokat állít be az adatbeviteli sablon viselkedésére:<ul><li>A felhasználók nem választhatnak ki másik lerakatot.</li><li>Ha az alapértelmezett hely egy csoportterület, akkor a felhasználók nem választhatnak ki másik csoportterületet.</li></ul>Azonban ha a felhasználók ezt az adatbeviteli sablont egy mappához társítják, akkor felülbírálhatják az adatbeviteli sablon számára beállított tárolóhelyet.",
		entry_template_folder_restrict_choice: "A felhasználók csak az alapértelmezett helyre vagy annak utódmappájába vehetnek fel elemeket",
		entry_template_folder_file_in_required: "A felhasználóknak új elemeket kell hozzáadniuk egy mappához",
		entry_template_folder_file_in_required_hover: "Ha nem választja ki ezt a beállítást, akkor a felhasználók a lerakat gyökérmappájába vehetnek fel elemeket.<br><br><b>Korlátozás:</b> A munkaasztal beállítása egy mappa kiválasztását követelheti meg a felhasználóktól.",

		entry_template_document_type_show: "<b>Mit kíván menteni</b> mező megjelenítése",
		entry_template_document_type_show_hover: "Ha megjeleníti a <b>Mit kíván menteni</b> mezőt, akkor a kiválasztott elemek a <b>Mit kíván menteni</b> mező választható listaelemeiként jelennek meg.",
		entry_template_document_type_hide: "<b>Mit kíván menteni</b> mező elrejtése",
		entry_template_document_type_hide_hover: "Ha elrejti a <b>Mit kíván menteni</b> mezőt. akkor mindig a kiválasztott dokumentumtípus kerül felhasználásra, amikor a felhasználók dokumentumokat adnak hozzá ezen adatbeviteli sablon használatával.",
		entry_template_document_type: "Ez az adatbeviteli sablon használható a következő elemek hozzáadásához:",
		entry_template_document_type_hover: "Ha megjeleníti a <b>Mit kíván menteni</b> mezőt, akkor a kiválasztott elemek a <b>Mit kíván menteni</b> mező választható listaelemeiként jelennek meg.<br><br>Ha elrejti a <b>Mit kíván menteni</b> mezőt. akkor mindig a kiválasztott dokumentumtípus kerül felhasználásra, amikor a felhasználók dokumentumokat adnak hozzá ezen adatbeviteli sablon használatával.",

		entry_template_misc: "További beállítások:",
		entry_template_auto_classify_show: "A dokumentum tartalmának automatikus osztályozása",
		entry_template_auto_classify_show_hover: "Amikor egy dokumentum a FileNet Content Manager alkalmazásban osztályozásra kerül, akkor a rendszer a dokumentum tartalmának vizsgálatával megállapítja a dokumentum megfelelő osztály- és tulajdonságértékeit.<br><br>Kérje meg a rendszeradminisztrátorát, hogy állapítsa meg, a tartalomosztályozás engedélyezett-e a Content Platform Engine rendszerben.<br><br>Ha engedélyezi ezt a beállítást, akkor a dokumentum osztálya és tulajdonságai módosításra kerülhetnek, amikor egy felhasználó dokumentumot vesz fel a lerakatba.",
		entry_template_allow_duplicate_file_names: "Dokumentumok engedélyezése többször szereplő fájlnevekkel",
		entry_template_allow_duplicate_file_names_hover: "Alapértelmezésben felvehet ugyanolyan nevű dokumentumokat egy FileNet Content Manager mappába. Törölheti a beállítást, ha azt szeretné, hogy a kiválasztott tárolóhelyen minden egyes fájl egyedi névvel rendelkezzen.",
		entry_template_allow_compound_documents: "A dokumentum összetett dokumentum szülője lehet",
		entry_template_version_show: "Változatbeállítások megjelenítése a hozzáadáshoz és a beiktatáshoz",
		entry_template_version_hide: "Változatbeállítások elrejtése a hozzáadáshoz és a beiktatáshoz",
		entry_template_version_to_add_as: "Alapértelmezett változat hozzáadása másként:",
		entry_template_version_default: "Alapértelmezett változatbeállítás:",
		entry_template_version_default_checked: "Főváltozat",
		entry_template_version_default_unchecked: "Alváltozat",
		entry_template_version_display: "Dokumentumváltozat:",
		entry_template_version_display_show: "Megjelenítés",
		entry_template_version_display_hide: "Elrejtés",
		entry_template_version_default_add: "Alapértelmezett változat hozzáadása másként:",

		entry_template_checkin_version_show: "Változatbeállítások megjelenítése a beiktatáshoz",
		entry_template_checkin_version_hide: "Változatbeállítások elrejtése a beiktatásnál",

		entry_template_checkin_version_message_no_versions: "A kiválasztott osztály változat irányelve megakadályozza, hogy a felhasználók beiktassák a dokumentum új változatát.",
		entry_template_checkin_version_message_always_version: "A kiválasztott osztály változat irányelve megakadályozza, hogy a felhasználók lecseréljék a dokumentum aktuális változatát.",

		entry_template_applied: "Használja ezt az adatbeviteli sablont, ha a felhasználók:",
		entry_template_applied_add: "Dokumentumokat adnak hozzá (kötelező)",
		entry_template_applied_add_folder: "Mappákat hoznak létre (kötelező)",
		entry_template_applied_checkin: "Beiktatás",
		entry_template_applied_properties_group: "Tulajdonságokat jelenítenek meg vagy szerkesztenek:",
		entry_template_applied_properties: "A Tulajdonságok ablakban",
		entry_template_applied_viewer: "A kisalkalmazás megjelenítőben",
		entry_template_applied_docinfo: "A dokumentum információs paneljén",
		entry_template_applied_no_class_support: "Ez az adatbeviteli sablon felhasználható elemek hozzáadására, de nem használható elemek beiktatására, vagy tulajdonságok megjelenítésére, illetve szerkesztésére. A kiválasztott osztályt módosítani kell ezeknek a szituációknak a kezeléséhez. Ha ezekben a helyzetekben adatbeviteli sablont kell használnia, kérje meg a rendszergazdát, hogy az adminisztrációs eszközzel módosítsa úgy az osztályt, hogy az tárolni tudja az adatbevitelisablon-azonosítókat.",
		entry_template_applied_no_child_component_support: "A kiválasztott osztály utód komponensekkel és meghatározott tulajdonságelrendezéssel rendelkezik. A tulajdonságelrendezések nem támogatják az utód komponenseket. Az utód komponensek nem kerülnek megjelenítésre a felhasználó számára.",
		entry_template_applied_child_component: "A kiválasztott osztály nem rendelkezik utód komponensekkel. Ezek megjelenítésre kerülnek a felhasználó számára, de nem konfigurálhatja az utód komponenseket ebben az adatbeviteli sablonban.",

		entry_template_properties_show: "<b>Tulajdonságok</b> rész megjelenítése",
		entry_tempalte_properties_show_hover: "Ha megjeleníti a <b>Tulajdonságok</b> részt, akkor a felhasználók módosíthatják azokat a tulajdonságértékeket, melyek az adatbeviteli sablonban megjelennek és nem írásvédett tulajdonságok.",
		entry_template_properties_hide: "<b>Tulajdonságok</b> rész elrejtése",
		entry_template_properties_hide_hover: "Ha elrejti a <b>Tulajdonságok</b> részt, akkor a felhasználók nem módosíthatják a tulajdonságértékeket. Az adatbeviteli sablonnak meg kell határoznia az összes olyan értéket, melyet használni kíván, amikor elemek kerülnek hozzáadásra az adatbeviteli sablon használatával.",

		entry_template_security_show: "<b>Biztonság</b> rész megjelenítése",
		entry_template_security_show_hover: "Ha megjeleníti a <b>Biztonság</b> részt, akkor a megfelelő engedélyekkel rendelkező felhasználók módosíthatják az elem biztonságát.",
		entry_template_security_hide: "<b>Biztonság</b> rész elrejtése",
		entry_template_security_hide_hover: "Ha elrejti a <b>Biztonság</b> részt, akkor a felhasználók nem módosíthatják az elemek biztonságát. Az adatbeviteli sablonnak meg kell határoznia az összes olyan biztonsági beállítást, melyet használni kíván, amikor elemek kerülnek hozzáadásra vagy szerkesztésre.",
		entry_template_security_policy: "Biztonsági irányelv:",
		entry_template_security_policy_hover: "A kiválasztott biztonsági irányelvtől függően a biztonsági irányelvnek a következőkre van lehetősége:<br><ul><li>Az <b>Elem biztonságának beállítása</b> alatt megadott engedélyek felülbírálása.</li><li>Hozzáadás az <b>Elem biztonságának beállítása</b> alatt megadott engedélyekhez.</li></ul>",
		entry_template_security_policy_none: "Nincs kiválasztott biztonsági irányelv",
		entry_template_security_inherit: "A biztonsági beállítások öröklése a szülőmappától",
		entry_tempalte_save_in_hover: "Adja meg, hová kell elmenteni az adatbeviteli sablont.<br><br><b>Korlátozás:</b> Ha az adatbeviteli sablont egy csoportterületre menti, akkor az adatbeviteli sablont csak az adott csoportterületen tudja használni.",
		entry_template_security_inherit_item_security_hover: "Ha kiválasztja ezt a beállítást, akkor a szülőmappa biztonsági beállításai hozzáadásra kerülnek a következő elemek egyike által meghatározott biztonsági beállításokhoz:<ul><li>Az <b>Elem tulajdonságainak beállítása</b> részben megadott osztály</li><li>Az <b>Elem biztonságának beállítása</b> részben megadott egyéni biztonság</li></ul>",
		entry_template_security_change: "A kiválasztott osztály által megadott biztonság felülbírálása",
		entry_template_security_change_hover: "Ha kiválasztja ezt a beállítást, akkor a alapértelmezésben az osztály számára meghatározott biztonsági beállítások kerülnek megjelenítésre. Azután módosíthatja az adatbeviteli sablon biztonsági beállításait.<br><br>Ha megjeleníti a <b>Biztonság</b> részt, akkor a megfelelő engedélyekkel rendelkező felhasználók módosíthatják az elem biztonságát.<br><br>Ha kiválasztja ezt a beállítást, és a biztonsági beállítások öröklését választja a szülőmappából, akkor az összes örökölhető engedély hozzáadásra kerül a megadott biztonsághoz.",
		entry_template_security_default_item_security: "Az elemek hozzáadó felhasználó alapértelmezett elembiztonságának felülbírálása",
		entry_template_security_policy_message_override: "A kiválasztott biztonsági irányelv úgy van beállítva, hogy felülbírálja a Biztonság beállítása rész alatt megadott jogosultságokat.",
		entry_template_security_policy_message_add: "A kiválasztott biztonsági irányelv úgy van beállítva, hogy hozzáadjon a Biztonság beállítása rész alatt megadott jogosultságokhoz.",
		entry_template_security_policy_preserve_true_hover: "Közvetlen jogosultság megtartása",
		entry_template_security_policy_preserve_false_hover: "Közvetlen jogosultság nincs megtartva",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Konkrét szerepek",
		entry_template_security_class_role_search_title: "Szerepek keresése:",
		entry_template_secuirty_class_member_title: "${0} taglistája",
		entry_template_secuirty_class_folder_only: "Ezek az engedélyek csak erre a mappára vonatkoznak",
		entry_template_secuirty_class_folder_and_immediate_children: "Ezek a jogosultságok erre a mappára és minden olyan közvetlen leszármazottjára vonatkoznak, amelyek ettől a mappától öröklik a biztonsági beállításokat.",
		entry_template_secuirty_class_folder_and_all_children: "Ezek a jogosultságok erre a mappára és minden olyan leszármazottjára vonatkoznak, amelyek ettől a mappától öröklik a biztonsági beállításokat.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Ezek a jogosultságok azokra a közvetlen leszármazottakra vonatkoznak, amelyek ettől a mappától öröklik a biztonsági beállításokat",
		entry_template_secuirty_class_folder_all_children_not_folder: "Ezek a jogosultságok minden olyan leszármazottra vonatkoznak, amelyek ettől a mappától öröklik a biztonsági beállításokat",

		entry_template_class_security_message_no_override: "A kiválasztott osztály biztonsága megakadályozza, hogy a felhasználók felülbírálják a biztonságot.",
		entry_template_class_security_required_privileges: "<b>Fontos</b>: A kiválasztott osztály biztonságának felülbírálásakor az elemet az adott adatbeviteli sablonnal hozzáadó felhasználónak ItemSetACL és UserACLOwner jogosultsággal kell rendelkeznie.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Szekvenciális mintájú munkafolyamat",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Párhuzamos mintájú munkafolyamat",
		entry_template_workflow_type_existing: "Egyéni munkafolyamat...",
		entry_template_workflow_launch_prompt: "Rákérdezés, hogy a felhasználók elindítják-e a munkafolyamatot",
		entry_template_workflow_launch_auto: "A munkafolyamat automatikus elindítása",
		entry_template_workflow_modify_launch: "A felhasználók módosíthatják az indítási lépést",
		entry_template_workflow_modify_launch_hover: "Válassza ezt a beállítást, ha engedélyezni kívánja a felhasználók számára a munkafolyamat indítási módjának módosítását.",

		entry_template_optionsButton_title: "Módosítás",
		entry_template_optionsButton_readonly_title: "Társítás megjelenítése",
		entry_template_optionsDialog_title: "Mappatársítás beállításai",
		entry_template_removeButton_title: "Eltávolítás",
		entry_template_addButton_title: "Hozzáadás",
		entry_template_selected_entry_templates: "Kiválasztott adatbeviteli sablonok",
		entry_template_docs_added_to_template_destination: "A dokumentumok az adatbeviteli sablonban megadott célhoz kerülnek hozzáadásra.",
		entry_template_docs_added_to_other_object_store: "Ez az adatbeviteli sablon elemeket ad a(z) ${0} objektumtárolóhoz.",
		entry_template_inherited_entry_templates_label: "A következőt szeretném: ",
		entry_template_inherited_entry_templates: "Adatbeviteli sablon társítások öröklése a mappából: ",
		entry_template_inherited_entry_templates_not: "Új társítások létrehozása az adott mappához",
		entry_template_inherited_folder_path: "A kiválasztott adatbeviteli sablonok listájában lévő adatbeviteli sablonok társításra kerülnek a következő mappához: ${0}. <br> A mappa útvonala: ${1}.",
		entry_template_folder_associations_title: "Adatbeviteli sablonok társítása",
		entry_template_folder_associations_intro: "Adatbeviteli sablon mappához társításakor a felhasználóknak az adatbeviteli sablont kell használniuk elemek mappához adásához. Ha több adatbeviteli sablont társít a mappához, akkor a felhasználók kiválaszthatják a használni kívánt adatbeviteli sablont.",
		entry_tempalte_folder_associations_entrytemplate: "Adatbeviteli sablon: ",
		entry_template_avaliable_entry_templates: "Rendelkezésre álló adatbeviteli sablonok",
		entry_template_fileTypes_intro_title: "Engedélyezett fájltípusok:",
		entry_template_fileTypes_intro: "Alapértelmezésben az adatbeviteli sablon tetszőleges dokumentumtípus lerakathoz adására használható. Ha azonban kiválaszt legalább egy fájltípust, akkor az adatbeviteli sablonok csak akkor állnak rendelkezésre, amikor a felhasználók a megadott fájltípusoknak megfelelő dokumentumokat adnak hozzá.",
		entry_template_fileTypes: "Fájltípusok",
		entry_template_fileType_error: "Érvénytelen fájltípus van kiválasztva legalább egy adatbeviteli sablon társításhoz. El kell távolítani a fájltípusokat ezen adatbeviteli sablon társítások mentéséhez.",
		entry_template_fileTypes_any_type_of_file: " Tetszőleges fájltípus",
		entry_template_description_label: "Leírás",
		entry_template_ItemInfoPrefix: "Társítás a következőhöz: ",
		entry_template_TargetObjectStoreName: "Cél objektumtároló",
		entry_template_class: "Osztály",
		entry_template_current_folder_as_parent: "Mappa használata célként",
		entry_template_view_minetypes: "MIME típusok megjelenítése",
		entry_template_avaliable_MIME_types: "Rendelkezésre álló fájltípusok",
		entry_template_selected_MIME_types: "Kiválasztott fájltípusok",
		entry_template_MIME_type_column: "fájltípus kategórianeve",
		entry_template_file_type_not_existing: "Kérjük, távolítsa el az érvénytelen fájltípusokat.",
		entry_template_MIME_types: "MIME típusok:",
		entry_template_MIME_types_info_dialog_title: "MIME típusok a következőhöz:",
		entry_template_destination_label: "Dokumentumok hozzáadása a következőhöz: ",
		entry_template_destination_help: "Adja meg, hogy a dokumentumok hol kerüljenek tárolásra a lerakatban, amikor a felhasználók dokumentumokat adnak ehhez a mappához a kiválasztott adatbeviteli sablon segítségével.",
		entry_template_radioButton_folder_destination: "Kiválasztott mappa",
		entry_template_radioButton_template_destination: "Adatbeviteli sablonban megadott cél",
		entry_tempalte_teamspace_default: "Alapértelmezett adatbeviteli sablon",
		entry_template_folder_associations_save_new: "Módosított néhány bevitelisablon-társítást. Valóban bezárja ezt az ablakot a módosítások mentése nélkül?",
		entry_template_mode_binding_label: "Tulajdonságok",
		entry_template_columns_className: "Osztály neve",
		entry_template_columns_type: "Sablontípus",
		entry_template_columns_workflow: "Munkafolyamat neve",
		entry_template_columns_destination: "Cél",
		entry_template_association_less_than_record: "${0} adatbeviteli sablon nem szerepel a Kiválasztott adatbeviteli sablonok listájában. Nem rendelkezik engedéllyel ezek megjelenítéséhez. Vagy törlésre kerültek. További információkért keresse meg a rendszeradminisztrátorát.",
		/* Request */

		progress_message_general: "Feldolgozás...",
		cancel_message_general: "A művelet megszakításra került.",
		ie8_not_supported_browser: "Az IE8 nem támogatott böngésző.",
		progress_message_getDesktop: "Munkaasztal betöltése...",
		progress_message_getActions: "Műveletek betöltése...",
		progress_message_getViewers: "Munkaasztal betöltése...",
		progress_message_logon: "Bejelentkezés...",
		progress_message_logoff: "Kijelentkezés...",
		progress_message_getContentClasses: "Osztályok beolvasása...",
		progress_message_openContentClass: "Osztály részletek beolvasása...",
		progress_message_od_getCabinets: "Kabinetek beolvasása...",
		progress_message_getSearchTemplates: "Keresések beolvasása...",
		progress_message_od_getTemplates: "Mappák beolvasása...",
		progress_message_od_openCabinet: "Mappák beolvasása...",
		progress_message_openSearchTemplate: "Keresés megnyitása...",
		progress_message_od_openTemplate: "Gyűjtő megnyitása...",

		progress_message_getWorklists: "Feladatlista beolvasása...",
		progress_message_getWorkItems: "Munkaelemek beolvasása...",
		progress_message_getNextWorkItems: "Munkaelemek beolvasása...",
		progress_message_getStepParameters: "Munkaelem információk beolvasása...",
		progress_message_getStepAttachmentItems: "Melléklet információk beolvasása...",
		progress_message_getDependentParameters: "Tulajdonságinformációk lekérése...",

		progress_message_p8_getProcessApplicationSpaces: "Alkalmazásterületek beolvasása...",
		progress_message_p8_getProcessRoles: "Folyamatszerepek beolvasása...",
		progress_message_p8_getProcessInbaskets: "Bejövő kosarak beolvasása...",
		progress_message_p8_getProcessorInformation: "Folyamatinformációk lekérése...",
		progress_message_p8_getFilterCriteria: "Kosár szűrő beolvasása...",
		progress_message_p8_getLaunchParameters: "Munkaelem információk beolvasása...",
		progress_message_p8_getStepAttachments: "Munkaelem mellékletek beolvasása...",
		progress_message_p8_getSubscriptions: "Munkafolyamat feliratkozások lekérése...",
		progress_message_p8_getTrackerParameters: "Munkaelem információk beolvasása...",
		progress_message_p8_getTrackerHistory: "Munkaelem előzmények beolvasása...",
		progress_message_p8_getTrackerMilestones: "Munkaelem mérföldkövek beolvasása...",
		progress_message_p8_completeStep: "Munkaelem befejezése...",
		progress_message_p8_moveToInbox: "Elem áthelyezése a kosárba...",
		progress_message_p8_returnToSender: "Munkaelem visszaadása...",
		progress_message_p8_reassign: "Munkaelem hozzárendelésének módosítása...",
		progress_message_p8_launchWorkflow: "Munkafolyamat indítása...",
		progress_message_p8_getTransferedWorkflows: "Munkafolyamat információk beolvasása...",

		progress_message_cm_getProcesses: "Munkafolyamat információk beolvasása...",
		progress_message_cm_completeStep: "Munkaelem folytatása...",
		progress_message_cm_getItemProcessInformation: "Munkafolyamat információk beolvasása...",

		progress_message_search: "Keresés...",
		cancel_message_search: "A keresést törölték.",
		progress_message_getContentItems: "Elem információk beolvasása...",
		progress_message_openFolder: "Gyűjtő megnyitása...",
		progress_message_addItem: "Elem létrehozása...",
		progress_message_checkIn: "Elem beiktatása...",
		progress_message_changePassword: "Jelszó módosítása...",
		progress_message_getDefaultInstancePermissions: "Alapértelmezett engedélyek beolvasása...",
		progress_message_openItem: "Elem információk beolvasása...",
		progress_message_saveItem: "Elem információk mentése...",
		progress_message_getPermissions: "Engedélyek beolvasása...",
		progress_message_getEntryTemplates: "Adatbeviteli sablonok lekérése...",
		progress_message_openEntryTemplate: "Adatbeviteli sablon megnyitása...",
		progress_message_getFavorites: "Kedvencek beolvasása...",
		progress_message_getFoldersFiledIn: "Mappák beolvasása...",
		progress_message_getDocumentVersions: "Verziószámok lekérése...",
		progress_message_getDependentAttributeInfo: "Attribútum információk beolvasása...",
		progress_message_packageForDownload: "Csomagolás letöltéshez...",
		progress_message_convertDocument: "Tartalom konvertálása...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Tartalomtípus lekérése...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Dokumentum hozzáadása...",

		progress_message_desktop_reload: "Az ügyfél ismét betölti a munkaasztalát.<br>Előfordulhat, hogy a rendszer újból felszólítja a bejelentkezésre.",
		progress_message_email: "E-mail küldése...",
		cancel_message_email: "Az e-mail meg lett szakítva.",

		progress_message_p8_getOfficeOnlineTemplates: "Office sablonok lekérése...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Kedvencek fa",
		favorites_content_list_label: "Kedvencek tartalomlista",
		syncItems_tree_label: "Saját szinkronizált fájlok fa",
		syncItems_content_list_label: "Saját szinkronizált fájlok tartalomlista",
		my_checkouts_content_list_label: "Saját beiktatások tartalomlista",
		browse_tree_label: "Tallózás fa",
		browse_content_list_label: "Tartalomlista tallózása",
		repository_selector_label: "Lerakat kiválasztó",
		teamspaces_content_list_label: "Csoportterület tartalomlista",
		templates_content_list_label: "Sablonok tartalomlista",
		work_content_list_label: "Feladat tartalomlista",
		work_tree_label: "Feladat fa",
		admin_tree_label: "Adminisztrációs fa",
		admin_tabs_label: "Adminisztrációs lapok",
		search_tabs_label: "Keresési lapok",
		search_selector_label: "Kereső kiválasztó",
		teamspace_browse_content_list_label: "Csoportterület tallózási tartalomlista",
		teamspace_search_tabs_label: "Csoportterület keresési lapok",

		/* Desktop */
		undo_description: "${0} visszavonása",
		redo_description: "${0} újra végrehajtása",

		/* Application Tabs */
		home: "Alapkönyvtár",
		repository: "Lerakat",
		repository_type: "Lerakat típusa:",
		repository_type_header: "Lerakat típusa",
		repository_type_any: "Összes lerakat",
		repository_type_contains_label: "A lerakattípus tartalmazza",
		document_info: "Dokumentum információk",
		team: "Csoport",
		administration: "Adminisztráció",

		/* Home Page */
		recent_activity: "Új tevékenység",
		repos_and_wrksp: "Lerakatok és csoportterületek",
		workspaces: "Csoportterületek",
		repositories: "Lerakatok",
		templates: "Sablonok",
		favorites: "Kedvencek",
		my_checkouts: "Saját kiiktatások",
		mySyncedFiles: "Saját szinkronizált fájlok",
		links: "Hivatkozások",
		name_label: "Név",
		description_label: "Leírás:",
		type_label: "Típus:",
		type_heading: "Típus",
		type_id_label: "Típusazonosító",
		server_type_icon: "Kiszolgálótípus ikon",
		server_type_heading: "Kiszolgáló típusa",
		server_type: "Kiszolgáló típusa",
		port_heading: "Portszám",
		port_label: "Portszám:",
		server_name_heading: "Kiszolgáló neve",
		server_label: "Kiszolgálónév:",
		server_url_label: "Kiszolgáló URL címe:",
		id_label: "Azonosító:",
		id_heading: "Azonosító",
		connected_label: "Csatlakoztatva:",
		repository_label: "Lerakat",
		modified_label: "Módosította:",
		modified_date_label: "Módosítás ideje:",
		status_label: "Állapot:",
		last_modified_label: "Legutóbb módosította:",

		modifier: "Módosította:",
		modified_date: "Módosítás dátuma",

		/* Favorites */
		new_favorite_label: "Hozzáadás a kedvencekhez",
		edit_favorite_label: "Kedvenc átnevezése",
		remove_favorite_label: "Eltávolítás a kedvencekből",
		missing_alias_message: "A név megadása kötelező.",
		sync_favorite_enable_hover: "Ez az elem felkészített a szinkronizálásra.",
		sync_favorite_disable_hover: "Ez az elem nem kerül szinkronizálásra.",
		sync_favorite_sync_unavailable_hover: "A szinkronizálás nem érhető el az adott objektumtípushoz.",
		sync_enable_label: "Adott elem szinkronizálása",
		sync_enable_label_hover: "Ez az elem szinkronizálásra kerül az eszközökre.",
		delete_favorite_confirmation_question: "Biztosan el kívánja távolítani ezt az elemet a kedvencek közül?",
		alias_label: "Név:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Az kiválasztott elem már szerepel a kedvencek listájában.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Ez az elem nem adható hozzá a kedvencek listájához.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Csak ${0} kedvencet tárolhat.",
		add_favorite_max_reached_response: "Ha ezt az elemet hozzá kívánja adni a kedvencek listájához, akkor a hozzáadás előtt egy meglévő kedvenc elemet törölnie kell a listából.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "A kiválasztott dokumentumok nem alakíthatók PDF-formátumúvá.",
		download_as_pdf_max_content_error_explanation: "Csak ${0} MB adatot alakíthat PDF-formátumúvá. Azonban a kiválasztott dokumentumok meghaladják a ${0} MB-ot.",
		download_as_pdf_max_content_error_response: "Válasszon ki kevesebb dokumentumot, vagy válasszon kisebb dokumentumokat a PDF-hez.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "A kiválasztott dokumentumok nem alakíthatók át egyetlen PDF fájllá.",
		download_as_pdf_mimetype_check_error_explanation: "A több részt tartalmazó dokumentum egyetlen PDF fájllá történő konvertálásához minden résznek ugyanolyan MIME típussal kell rendelkeznie.",
		download_as_pdf_mimetype_check_error_response: "Válasszon másik dokumentumot a PDF fájllá történő átalakításhoz.",

		/* Activity Stream */
		show_label: "Megjelenítés:",
		all_filter: "Összes",
		notifications_filter: "Értesítések",
		workitems_filter: "Munkaelemek",
		documentes_filter: "Dokumentumok",
		all_favorites_filter: "Összes kedvenc",
		folders_filter: "Mappák",
		searches_filter: "Keresések",
		teamspaces_filter: "Csoportterületek",

		/* Repository */
		all_search_templates: "Összes keresés",
		all_od_searches: "Összes keresési sablon",
		recent_searches: "Friss keresések",
		opened_searches: "Megnyitott keresések",

		all_worklists: "Összes bejövő postaláda",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Összes feladatlista listája",

		/* Teamspace */
		all_workspaces: "Összes csoportterület",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Összes csoportterület listája",
		workspace_title: "Csoportterület",
		workspace_icon: "Csapatterület ikon",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Elérhető",
		workspace_stat_offline: "Nem érhető el",
		workspace_stat_validate: "Érvényesítést igényel",
		workspace_stat_pendingDelete: "Törlés függőben",
		workspace_stat_deleteError: "Törlés sikertelen",

		undefined_value: "Nincs meghatározva",
		undefined_reference_value: "Nincs megadva hivatkozás.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Lehetséges, hogy további találatok érhetők el a kiszolgálón.",
		search_all_data: "Összes adatkeresése.",
		search_all_teamspaces: "Keresés az összes csoportterületen.",
		teamspace_filter_results: "${0} találat megjelenítése. ",
		displaying_filtered_results: "Szűrt találatok megjelenítése. ",
		displaying_recent_results: "Csak az az elmúlt ${0} napban módosított csoportterületek megjelenítése. Más csoportterületek megkereséséhez szűrje a csoportterületek listáját név vagy leírás alapján. ",
		clear_filter: "Szűrő törlése",

		/* FolderTreeModel */
		move_item_task: "Elem áthelyezése",
		copy_item_task: "Elem másolása",
		add_item_task: "Elem hozzáadása",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "A következő mappa nem található: ${0}. Vagy törlésre került, vagy a mappa nem nyitható meg ebből a nézetből. A fa nézetben kattintson a További hivatkozásra, hogy ehhez a mappához navigáljon. Ha nem látható a mappa, akkor frissítse a tartalomlista nézetet.",
		more_paging_link: "további ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Állapot",
		status_dialog_cancel_label: "Mégse",

		/* ErrorDialog */
		error_dialog_title: "Hiba",
		error_dialog_icon_tooltip: "Hiba",
		error_dialog_stack_trace_title: "Veremnyomkövetés",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Megerősítés",

		close_browser_msg: "Zárja be a böngészőablakot.",

		/* MessageDialog */
		message_dialog_title: "Információk",
		warning_dialog_title: "Figyelmeztetés",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Üdvözli a(z) ${0}",
		server: "Lerakat:",
		username: "Felhasználói név:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "A lerakatba felhasználónév megadásával lehet bejelentkezni.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "A lerakatba jelszó megadásával lehet bejelentkezni.",
		password: "Jelszó:",
		login: "Bejelentkezés",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "A munkamenet lejárt. Jelentkezzen be újra.",
		login_repository_connection_expired_message: "A(z) ${0} lerakat kapcsolata lejárt. Jelentkezzen be újra.",
		login_site_connection_expired_message: "Lejárt a helyhez vezető kapcsolat. Jelentkezzen be újra.",
		login_new_server_message: "Adjon meg egy felhasználónevet és jelszót a következőhöz: ${0}.",
		login_error_more_information_message: "További információk",

		disconnect_box_account_user: "Szétkapcsolt Box fiók: ${0}",
		disconnect_box_account: "Szétkapcsolt Box fiók",
		disconnect_box_accounts: "Szétkapcsolt Box fiókok",

		// OAuth2/Box Login
		login_ssl_connection_required: "A Box lerakat eléréséhez SSL kapcsolat szükséges.",
		login_oauth_popup_blocked: "A felugró ablak blokkolva van. A bejelentkezéshez engedélyeznie kell a felugró ablakokat a böngészőjében.",
		login_oauth_click_here: "Ha az átirányítás nem történik meg 5 másodpercen belül, akkor kattintson ide.",
		login_oauth_title: "Bejelentkezés",
		login_oauth_grant_intro: "Hitelesítés megadása a következőnek: ${0}.",
		login_pane_oauth_click_here: "Kattintson ide a bejelentkezéshez.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Valóban kijelentkezik a webes ügyfélről?",
		logout_confirmation_button: "Kijelentkezés",

		/* ChangeLocaleDialog */
		change_locale: "Nyelvi és területi beállítások módosítása",
		change_locale_use_browser_language: "Böngésző nyelvi beállításának használata (Alapértelmezett)",
		change_locale_use_browser_locale: "Böngésző nyelvi beállításának használata (Alapértelmezett)",
		change_locale_description: "A böngésző cookie-k törlése esetén, vissza kell állítania a nyelvi és területi beállításait.",
		change_locale_language_locale: "Alkalmazás nyelve:",
		change_locale_language_locale_hover: "Ez a beállítás módosítja a webes ügyfélben lévő szövegek nyelvét, de nem változtatja meg az alkalmazásban lévő dokumentumok nyelvét.<br><br>Az alapértelmezett beállítás azt a nyelvet használja, amely a webböngészője konfigurációs beállításaiban van megadva.",
		change_locale_value_format_locale: "Alkalmazás területi beállítása:",
		change_locale_value_format_locale_hover: "A területi beállítás határozza meg a webes ügyfélben lévő dátumok, időpontok és számok formátumát.<br><br>Az alapértelmezett beállítás azokat a formátumokat használja, amelyek a webböngészője konfigurációs beállításaiban megadott nyelvhez tartoznak.",
		change_locale_for_office: "Kétirányú szövegbeállítások:",
		change_locale_bidi_support_flag: "Kétirányú támogatás engedélyezése",
		change_locale_bidi_support_flag_hover: "Ha a kétirányú támogatás engedélyezett. akkor a felhasználó beállíthatja az adatbeviteli mezőkben használt szövegirányt.  Az elemekhez, például a mappákhoz megadott szöveg például ugyanabban az irányban jelenik meg, mint ahogy meg lett adva.",
		change_locale_base_text_direction: "Tartalom alap szövegiránya:",
		change_locale_base_text_direction_hover: "Állítsa be az adatbeviteli mezőkbe beírandó szöveg irányát.  Ez a felhasználó által megadott címkék - például mappanevek - megjelenítési irányát is szabályozza.",
		change_locale_calendar_type: "Naptártípus:",
		change_locale_calendar_type_hover: "Válassza ki a felhasználói munkamenethez használandó naptár típusát.",
		change_locale_base_text_direction_default: "Alapértelmezett",
		change_locale_base_text_direction_ltr: "Balról jobbra",
		change_locale_base_text_direction_rtl: "Jobbról balra",
		change_locale_base_text_direction_contextual: "Környezetfüggő",
		change_locale_calendar_type_gregorian: "Gregorian",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Héber",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Jelszócsere",
		change_password_title: "Jelszócsere",
		change_password_expired_title: "A jelszó lejárt.",
		change_password_message: "Adjon meg egy új jelszót.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "A jelszava lejárt. Adjon meg egy új jelszót.",
		change_password_password_rules: "Jelszószabályok",
		change_password_old_password: "Régi jelszó:",
		change_password_new_password: "Új jelszó:",
		change_password_confirm_password: "Erősítse meg a jelszót:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Meg kell adnia régi jelszavát.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Meg kell adnia az új jelszót.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Meg kell erősítenie az új jelszót.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "A jelszavaknak meg kell egyezniük.",

		/* GlobalToolbar */
		actions: "Műveletek",
		actions_label: "Műveletek:",
		open_actions_label: "Műveletek megnyitása:",

		/* About Dialog */
		about_dialog_title: "Névjegy",
		about_product_name_label: "Termék neve: ",
		about_product_version_label: "Változat: ",
		about_product_build_label: "Összeépítés: ",
		about_product_license: "Licenc hatálya alá eső anyagok - az IBM Corp. tulajdona. &copy; Copyright IBM Corp. 2012, 2016. Minden jog fenntartva. Az USA kormányzati felhasználóinak jogkorlátozása. A használatra, másolásra és közzétételre a GSA ADP szerződéskiegészítés korlátozásai vonatkoznak. Az IBM és az IBM logó az International Business Machine Corporation bejegyzett védjegyei az Egyesült Államokban és/vagy más országokban. Ez a Program az azt kísérő licencszerződésben foglaltak hatálya alá tartozik. Ez a licencszerződés a Program egyik könyvtárában vagy \"License\" illetve \"Non_IBM_License\" nevű mappájában található (ha van ilyen), vagy nyomtatott licencszerződés formájában van biztosítva. A program használatba vétele előtt figyelmesen olvassa el a szerződést. A program használatával elfogadja a szerződés feltételeit. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Törli a kiválasztott elemeket?",
		delete_single_folder_confirmation_question: "Törli a(z) ${0} mappát?",
		delete_multiple_confirmation_question: "Kívánja törölni a kiválasztott elemeket?<br>${0} elem van kijelölve.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Törlés",
		search_template_delete_confirmation_question: "Törli a(z) ${0} keresést?",
		search_template_opened_delete_confirmation_question: "A(z) ${0} keresés meg van nyitva. Ha törli a keresést, akkor az bezárásra kerül.<br>Törölni kívánja a keresést?",
		delete_multiple_opened_search_template_confirmation_question: "A következő keresések vannak megnyitva: ${0}.<br>Ha törli a kereséseket, akkor azok bezárásra kerülnek. Törli ezeket a kereséseket?",
		delete_large_number_items_confirmation_question: "${0} elemet jelölt ki törlésre.<br/>Nagyszámú elem törlése hosszú ideig tarthat.<br/>Kívánja folytatni?",
		delete_confirmation_entrytemplate: "Ha törli ezt az adatbeviteli sablont, akkor az a következő hatással lesz az adatbeviteli sablonokhoz társított dokumentumokra vagy mappákra:<ul><li>Ezek az elemek többé nem lesznek társítva az adatbeviteli sablonhoz, és a felhasználóknak figyelmeztető üzenet jelenhet meg egy elem frissítésekor.</li><li>Az adatbeviteli sablonnal vezérelt tulajdonságok (például az elemek neve vagy sorrendje) ettől kezdve nem lesz érvényes az adatbeviteli sablonhoz társított elemekre.</li></ul>Kívánja törölni ezt az adatbeviteli sablont?",
		delete_confirmation_entrytempalte_with_multi_items: "Az adatbeviteli sablonokat egyedileg kell törölni. Az adatbeviteli sablonok eltávolításra kerültek a törlendő elemek listájából. Ha törölni szeretné az adatbeviteli sablonokat, akkor mindegyiket külön kell törölnie.",

		/* Create/Apply/Remove Hold */
		hold: "Felfüggesztés",
		createHold: "Új felfüggesztés",
		applyHold: "Felfüggesztés alkalmazása",
		removeHold: "Felfüggesztés eltávolítása",
		showHolds_title: "Felfüggesztek megjelenítése",
		applyHoldSelectText: "Válassza ki a kijelölt elemekre alkalmazni kívánt felfüggesztéseket.",
		availableHolds: "Elérhető felfüggesztések:",
		removeHoldSelectText: "Válassza ki a kijelölt elemekről eltávolítani kívánt felfüggesztéseket.",
		appliedHolds: "Alkalmazott felfüggesztések:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "A kijelölt elemekre alkalmazandó új felfüggesztés létrehozása.",
		holdName: "Felfüggesztés neve:",
		holdDescription: "Leírás:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Meg kell adnia a felfüggesztés nevét.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "A megadott felfüggesztésnév már létezik.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "A felfüggesztés neve nem tartalmazhatja a következő karaktereket: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Munkamenete ${0} percen belül lejár.",
		session_expire: "Lejáró munkamenet",
		logoff: "Kijelentkezés",
		extend_session: "Munkamenet meghosszabbítása",
		admin_custom_settings: "További beállítások:",
		admin_custom_settings_hover_help: "Az enableSessionExpireWarning egy logikai érték, amely azt jelzi, hogy a munkamenet lejáratára való figyelmeztetés engedélyezett-e. Az alapértelmezett érték: true. A sessionExpireWarningTime egész szám 2 és 5 között, amely a munkamenet lejáratára való figyelmeztetés idejét határozza meg.",
		admin_custom_setting_dialog_title_new: "Új beállítás",
		admin_custom_setting_dialog_title_edit: "Beállítás szerkesztése",
		admin_custom_setting_dialog_hover_help: "Hozzáadhat más paramétereket a paraméternév és -érték megadásával. Például beállíthatja az “enableSessionExpireWarning”  “true” értéket, ha engedélyezni szeretné a munkamenet lejárati figyelmeztetést.",
		admin_custom_setting_dialog_field_hover_help: "A paraméternevekről és -értékekről további információkért tekintse meg az IBM Navigator paraméterleírások kézikönyvét.",
		admin_custom_setting_dialog_nameInvalid: "Ez az érték kötelező. Az érték nem lehet üres vagy másodpéldány.",
		admin_custom_setting_dialog_bool_valueInvalid: "Ez az érték kötelező. Az értéknek logikai értéknek kell lennie.",
		admin_custom_setting_dialog_int_valueInvalid: "Ez az érték kötelező. Az érték csak egész szám lehet.",
		/* Add Document Dialog */
		add_document_dialog_title: "Dokumentum hozzáadása",
		add_documents_dialog_title: "Dokumentumok hozzáadása",
		add_document_general_label: "Általános",
		add_document_properties_label: "Tulajdonságok",
		add_document_properties_with_ellipsis_label: "Tulajdonságok...",
		add_document_security_label: "Biztonság",
		add_document_location_label: "Mentés ide:",
		add_document_type_label: "Mit kíván menteni?",
		add_document_localfile_label: "Helyi dokumentum",
		add_document_metadata_label: "Dokumentummal kapcsolatos információk",
		add_document_external_label: "Külső dokumentumra mutató hivatkozás",
		add_document_web_link_label: "Webes hivatkozás",
		add_document_saved_content_label: "Mentett fájl használata:",
		add_document_saved_content_choice: "Mentett fájl",
		add_document_file_name_label: "Fájlnév:",
		add_document_entry_template_label: "Adatbeviteli sablon:",
		add_document_delete_file_label: "Helyi fájl törlése",
		add_document_delete_file_disabled_label: "A fájlkövetési könyvtárban nem tartalmazott fájlok nem lesznek törölve.",
		add_document_major_version_label: "Főváltozat",
		add_document_major_version_hover: "Beállítja a dokumentum állapotát Kiadva állapotra. A dokumentum 1.0 változatként kerül hozzáadásra a lerakathoz. Ha nem választja ki a beállítást, akkor a dokumentum nem áll készen a kiadásra, és 0.1-es alváltozatként kerül hozzáadásra.",
		add_document_save_document_as_unfiled_label: "A dokumentum ne legyen mappába mentve",
		add_document_save_document_as_unfiled_hover: "Ha kiválasztja ezt a beállítást, akkor ezt a dokumentumot csak kereséssel találhatja meg. Tallózással nem választhatja ki.",
		add_document_create_new_version_label: "Új változat létrehozása",
		add_document_replace_existing_version_label: "Meglévő változat felülírása",
		add_document_start_workflow_label: "Munkafolyamat indítása",
		add_document_auto_classify_label: "Tartalom automatikus osztályozása",
		add_document_add_label: "Hozzáadás",
		add_document_cancel_label: "Mégse",
		add_document_document_type_label: "Osztály",
		add_document_context_info: "A dokumentum tulajdonságokhoz megadott értékek később segítenek a dokumentum megkeresésében.",
		add_documents_context_info: "A dokumentumokhoz megadott értékek később segítenek a dokumentumok megkeresésében. Ha egy dokumentum esetében eltérő tulajdonságértéket kell megadnia, akkor külön kell azt hozzáadnia, vagy a hozzáadás után kell szerkesztenie a dokumentum tulajdonságait.",
		add_document_url_label: "URL:",
		add_document_template_description: "Sablon leírása:",
		add_document_select_entry_template: "Beviteli sablon megadása vagy kiválasztása",
		add_document_no_permission_to_associations: "Nem jogosult adatbeviteli sablon használatára",
		add_document_no_entry_template_to_use: "A kiválasztott fájlokhoz nem használható adatbeviteli sablon",
		add_document_no_entry_template_itemtype_permission: "Nem adhat hozzá elemeket ehhez a mappához. Ki kell választani egy adatbeviteli sablont, de Ön nem rendelkezik hozzáféréssel a mappához tartozó egyik adatbeviteli sablonhoz sem. Keresse meg a rendszeradminisztrátorát és kérje meg, hogy adjon jogosultságot a mappához tartozó adatbeviteli sablonokhoz.",
		add_document_appgroup_name_label: "Alkalmazáscsoport neve:",
		add_document_app_name_label: "Alkalmazás neve:",
		create_folder_dialog_title: "Új mappa",
		create_folder_context_info: "A mappa tulajdonságokhoz megadott értékek később segíthetnek a mappa megkeresésében.",
		create_folder_folder_name_label: "Mappa neve",
		create_folder_save_folder_as_unfiled_label: "A mappa ne legyen egy másik mappába mentve",
		create_folder_save_folder_as_unfiled_hover: "Ha kiválasztja ezt a beállítást, akkor ezt a mappát csak kereséssel találhatja meg. Tallózással nem választhatja ki.",
		add_item_create_in_folder: "Létrehozás a következő mappában:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "A mappanév nem tartalmazhatja a következő karaktereket: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "A mappanév nem tartalmazhatja a következő karaktereket: \\ / és nem lehet egyenlő a . vagy .. karakterekkel",
		invalid_box_file_name_message: "A fájlnév nem tartalmazhatja a következő karaktereket: \\ / és nem lehet egyenlő a . vagy .. karakterekkel",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "A fájlnév nem tartalmazhatja a következő karaktereket: \\ / : * ? \" < > |",
		external_document_placeholder: "Írja be a dokumentum URL címét.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "A színt három- vagy hatjegyű hexadecimális értékként kell megadni, például: #000 vagy #000000.",
		add_document_unfiled: "${0} nincs iktatva",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Dokumentum hozzáadása beviteli sablon segítségével",
		add_document_using_template_context_info: "Ha beviteli sablon segítségével adja hozzá a dokumentumot, akkor konzisztensek lesznek a dokumentum számára megadott értékek.",
		add_documents_using_template_dialog_title: "Dokumentumok hozzáadása beviteli sablon segítségével",
		add_documents_document_name_is_file_name_hint: "Ehhez a tulajdonsághoz a fájlnév kerül felhasználásra",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Új mappa beviteli sablon segítségével",
		create_folder_using_template_context_info: "Ha beviteli sablon segítségével hoz létre egy mappát, akkor konzisztensek lesznek a mappa számára megadott értékek.",

		add_documents_batch_results_dialog_title: "Lerakathoz nem hozzáadott dokumentumok",
		add_documents_batch_results_dialog_context_info: "A következő dokumentumok nem kerültek hozzáadásra a lerakathoz. Jelöljön ki egy dokumentumot és kattintson a Részletek gombra, ha további információkat szeretne arról, hogy a dokumentum miért nem lett hozzáadva a lerakathoz.",
		add_documents_batch_results_dialog_filename_col_hdr: "Fájlnév",
		add_documents_batch_results_dialog_status_col_hdr: "Állapot",
		add_documents_batch_results_dialog_message_col_hdr: "Üzenet",
		add_documents_batch_results_status_error: "Hiba",
		add_documents_batch_results_status_cancelled: "Megszakítva",
		add_documents_batch_results_status_cancelled_msg: "A dokumentum nem került hozzáadásra, mert a kérést megszakították.",

		add_documents_batch_status_title: "Dokumentumok hozzáadása",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "${0} / ${1}. fájl hozzáadása...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Hibák: ${0}",
		add_documents_batch_status_completing_msg: "A folyamat leáll a dokumentum hozzáadása után.",

		add_documents_status_uploading_msg: "${0} / ${1} fájl feltöltése...",
		add_documents_status_adding_msg: "${0} / ${1}. fájl hozzáadása...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Az adatbeviteli sablon másik alkalmazásban került konfigurálásra, és úgy lett beállítva, hogy a dokumentumok mindig rekordként legyenek deklarálva. Ez a beállítás azonban figyelmen kívül marad, mivel a webes ügyfél a dokumentumok rekordkénti deklarálását nem támogatja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Az adatbeviteli sablon másik alkalmazásban került konfigurálásra, és úgy lett beállítva, hogy eldöntheti, az adott dokumentum rekordként legyen-e deklarálva. Ez a beállítás azonban figyelmen kívül marad, mivel a webes ügyfél a dokumentumok rekordkénti deklarálását nem támogatja.",
		no_selection: "&lt;Kijelölés&gt;",

		batch_results_dialog_details_label: "Részletek",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Az érték érvénytelen. Az értéknek Globálisan egyedi azonosítónak (GUID) kell lennie, például: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Az érték érvénytelen. Az értéknek lebegőpontos számnak kell lennie, például 1.2 vagy 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Az érték érvénytelen. Az értéknek ${0} formátumúnak kell lennie, például: ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Az érték érvénytelen. Az értéknek decimális értéknek kell lennie, például 1.2 vagy 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Az érték érvénytelen. Az értéknek egész számnak kell lennie, például 5 vagy 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Az érték érvénytelen. Az érték csak betűket tartalmazhat, például a-z és A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Az érték érvénytelen. Az érték csak alfanumerikus karaktereket tartalmazhat, például a-z, A-Z és 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Az érték érvénytelen. Az érték csak numerikus karaktereket tartalmazhat, például 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Az érték érvénytelen. Az érték csak a következő karaktereket tartalmazhatja: a-z, A-Z, 0-9, [szóköz], valamint `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Az érték érvénytelen. Az értéknek a következő formátumú dátumnak kell lennie: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Az érték érvénytelen. Az értéknek a következő formátumú időpontnak kell lennie: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Az érték érvénytelen. Válasszon ki egy értéket a legördülő menüből.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Az érték érvénytelen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Az érték érvénytelen. Az értéknek a következő formátumúnak kell lennie: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Ez az érték kötelező.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Az érték túl hosszú. A tulajdonság által támogatott maximális hossz ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Az érték túl rövid. A tulajdonság a(z) ${0} minimális hosszt támogatja.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Az érték kívül van a megengedett tartományon. Az értéknek ${0} és ${1} közötti lebegőpontos számnak kell lennie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Az érték kívül van a megengedett tartományon. Az értéknek ${0} és ${1} közötti decimális értéknek kell lennie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Az érték kívül van a megengedett tartományon. Az értéknek ${0} és ${1} közötti egész számnak kell lennie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Az értéknek ${0} és ${1} közötti dátumnak kell lennie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Az érték kívül van a megengedett tartományon. Az értéknek ${0} és ${1} közötti dátumnak kell lennie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Az érték kívül van a megengedett tartományon. Az értéknek ${0} és ${1} közötti időpontnak kell lennie.",
		property_and: "és",

		property_invalidValueOrRequired: "A következő érték érvénytelen vagy kötelező: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Tulajdonságok",
		edit_properties_dialog_info: "Megtekintheti és szerkesztheti az elem tulajdonságait. Ha rendelkezik a szükséges engedélyekkel, akkor az elem biztonsági beállításait is módosíthatja. Azonban a rendszertulajdonságokat nem módosíthatja.",
		edit_properties_od_dialog_info: "Megtekintheti és szerkesztheti az elem tulajdonságait. Azonban a rendszertulajdonságokat nem módosíthatja.",
		system_properties_title: "Rendszertulajdonságok",
		custom_properties_title: "Tulajdonságok",
		/* Folder collaboration tab */
		box_permission_permission: "Engedély",
		box_permission_permissions: "Jogosultságok",
		box_permission_editor: "Szerkesztő",
		box_permission_owner: "Tulajdonos",
		box_permission_co_owner: "Társtulajdonos",
		box_permission_viewer_uploader: "Megjelenítő feltöltő",
		box_permission_previewer_uploader: "Előmegjelenítő feltöltő",
		box_permission_viewer: "Megjelenítő",
		box_permission_previewer: "Előmegjelenítő",
		box_permission_uploader: "Feltöltő",
		box_permission_add: "Hozzáadás",
		box_permission_upload: "Feltöltés",
		box_permission_download: "Letöltés",
		box_permission_preview: "Előnézet",
		box_permission_view: "Nézet",
		box_permission_send_links: "'Csak megtekintés' hivatkozások küldése",
		box_permission_create_subfolders: "Almappák létrehozása",
		box_permission_create_tasks: "Feladatok létrehozása",
		box_permission_add_comments: "Megjegyzések hozzáadása",
		box_collaboration_invite_placeholder: "Adjon meg egy meghívandó nevet, e-mail címet vagy csoportot",
		box_collaboration_invite_placeholder_non_admin: "Adjon meg egy meghívandó e-mail címet.",
		box_collaboration_invalid_email: "Adjon meg egy érvényes e-mail címet",
		box_collaboration_user_already_present: "Ez a felhasználó már közreműködő a mappában",
		box_collaboration_user_name: "Név",
		box_collaboration_email_address: "E-mail cím",
		box_collaboration_date_added: "Hozzáadás dátuma",
		box_collaboration_remove_collaboration: "Eltávolítás",
		box_collaboration_remove_collaboration_title: "Törlés",
		box_collaboration_no_collaborators: "Nincsenek közreműködők",
		box_collaboration_change_owner_title: "Elem tulajdonosának módosítása",
		box_collaboration_change_owner_prompt: "Ha a közreműködőt a mappa tulajdonosává teszi, akkor Ön szerkesztővé válik, és nem lesz többé a mappa tulajdonosa. A mappához közvetlenül hozzáadott közreműködők a gyökérmappában fogják látni a mappát. A szülő-mappa vagy magasabb szinten hozzáadott közreműködők nem maradnak közreműködők. Kívánja folytatni?",
		box_collaboration_remove_self_title: "Önmaga eltávolítása",
		box_collaboration_remove_self_prompt: "Biztosan el kívánja távolítani saját magát mint közreműködőt? Többé nem lesz hozzáférése a mappához.",
		box_collaboration_user: "Felhasználó",
		box_collaboration_group: "Csoport",
		box_managing_users_not_configured: "Nem kereshet felhasználókat és csoportokat, mert a Box alkalmazás nincs megfelelően beállítva. A szolgáltatás használatához vegye fel a kapcsolatot az adminisztrátorral, és kérje meg, hogy konfigurálja a Box alkalmazást felhasználók és csoportok kezelésére.",
		duplicate_value_error: "A tulajdonság mindegyik értékének egyedinek kell lennie.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "A következő mezőkben megadott módosításai az összes kijelölt elemre végre lesznek hajtva. Ha szükség van egy új tulajdonság érték megadására vagy a biztonsági beállítások szerkesztésére egy adott elem esetében, akkor az elem tulajdonságait külön-külön kell szerkesztenie.",
		multi_edit_properties_class_label: "Osztály:",
		multi_edit_properties_items_label: "Elemek nevei:",
		multi_edit_properties_properties_label: "Tulajdonságok:",
		multi_edit_batch_status_title: "Tulajdonságok frissítése",
		multi_edit_batch_status_adding_msg: "${0} / ${1}. elem frissítése...",
		multi_edit_batch_status_verifying_msg: "${0} / ${1}. elem ellenőrzése...",
		multi_edit_batch_status_completing_msg: "A folyamat leáll az elem frissítése után.",
		multi_edit_batch_status_validation_completing_msg: "A folyamat leáll az elem ellenőrzése után.",
		multi_edit_batch_results_status_error: "Hiba",
		multi_edit_batch_results_status_cancelled: "Megszakítva",
		multi_edit_batch_results_status_cancelled_msg: "Az elem nem lett frissítve, mert a kérést megszakították.",
		multi_edit_batch_results_dialog_title: "Nem frissített elemek",
		multi_edit_batch_results_dialog_context_info: "A következő elemek nem lettek frissítve. Jelöljön ki egy elemet és kattintson a Részletek gombra, ha további információkat szeretne arról, hogy az elem miért nem lett frissítve.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Elem neve",
		multi_edit_batch_results_dialog_status_col_hdr: "Állapot",
		multi_edit_batch_results_dialog_message_col_hdr: "Üzenet",
		multi_edit_batch_status_errors_msg: "Hibák: ${0}",
		multi_edit_batch_permission_error_text: "A tulajdonságok módosításai nem menthetők.",
		multi_edit_invalid_value_error: "Az érték függ egy másik tulajdonság értéktől, és nem érvényes az összes kiválasztott elemre.",
		multi_edit_batch_permission_error_explanation: "Nem módosíthatja az elem tulajdonságait, mert nem rendelkezik a szükséges jogosultsággal.",
		multi_edit_no_modifiable_properties: "A kijelölt elemek tulajdonságai nem módosíthatók. Ez akkor történhet, amikor egy elem csak írásvédett tulajdonságokat tartalmaz, vagy amikor csak az elem neve vagy címe szerkeszthető. Ha több elem van kijelölve, akkor az elemek neve vagy címe nem módosítható.",
		multi_edit_mult_classes_dialog_info: "A kiválasztott elemek különböző lerakatban vannak, vagy különböző osztályokhoz tartoznak. Csak olyan elemek szerkesztése lehetséges, amelyek ugyanabban az osztályban vagy ugyanabban a lerakatban vannak. Válassza ki az elemeknek azt a részhalmazát, amelyet szerkeszteni kíván.",
		multi_edit_class_selector_class_heading: "Osztály",
		multi_edit_class_selector_entry_template_heading: "Adatbeviteli sablon",
		multi_edit_class_selector_repository_heading: "Lerakat",
		multi_edit_class_selector_items_heading: "Elemek",
		multi_edit_some_classes_not_displayed: "A lista nem tartalmazza a kiválasztott elemek egy részét, mert azok az elemek kizárólag írásvédett tulajdonságokat tartalmaznak, vagy olyan lerakatban foglalnak helyet, amelyek nem támogatják a tulajdonságok szerkesztését.",
		multi_edit_properties_invalid_msg: "A tulajdonság értékek közül néhány nem érvényes az összes kiválasztott elemre.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Ez a tulajdonság írásvédett, és nem módosítható.",
		multi_edit_append_checkbox_label: "Hozzáfűzés",
		multi_edit_append_checkbox_tooltip: "Válassza ezt a beállítást, ha új tulajdonság értékeket kíván hozzáfűzni a meglévő értékekhez ahelyett, hogy felülírná azokat.",
		multi_edit_properties_invalid_childcomponent_msg: "A(z) ${1} leszármazott összetevő ${0} tulajdonsága más tulajdonságoktól függ, és az eszközölt kiválasztásokkal már nem érvényes. Ürítse ki a(z) ${1} leszármazott összetevő értékeit, vagy változtassa meg a kiválasztott elemek tulajdonságait egyedileg.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Tulajdonságok exportálása",
		export_properties_dialog_info: "Válassza ki az exportálni kívánt tulajdonságokat, és adja meg a sorrendet, amely szerint megjelenítésre kerülnek.",
		export_properties_dialog_export_button_label: "Exportálás",
		export_properties_dialog_export_raw_values: "Nyers értékek exportálása",

		/* Properties */
		filter_clear_tooltip: "A szűrő törlése",
		properties_new_row: "Új",
		properties_requiredClass_document_tooltip: "Válasszon egy dokumentumot. A dokumentumnak a(z) ${0} osztályba kell tartoznia.",
		properties_requiredClass_folder_tooltip: "Válasszon egy mappát. A mappának a(z) ${0} osztályba kell tartoznia.",
		properties_dataType_tooltip: "Adattípus: ${0}",
		properties_maxLength_tooltip: "Maximális hossz: ",
		properties_minLength_tooltip: "Minimális hossz: ",
		properties_minValue_tooltip: "Minimális érték: ",
		properties_maxValue_tooltip: "Maximális érték: ",
		properties_format_tooltip: "Formátum: ",
		properties_description_tooltip: "Leírás: ",

		properties_type_boolean_tooltip: "Logikai",
		properties_type_date_tooltip: "Dátum",
		properties_type_time_tooltip: "Időpont",
		properties_type_timestamp_tooltip: "Időbélyeg",
		properties_type_decimal_tooltip: "Tizedes érték",
		properties_type_double_tooltip: "Lebegőpontos szám",
		properties_type_short_tooltip: "Egész",
		properties_type_integer_tooltip: "Egész",
		properties_type_long_tooltip: "Egész",
		properties_type_string_tooltip: "Szöveges karaktersorozat",
		properties_type_string_alpha_tooltip: "Betűkből álló karaktersorozat",
		properties_type_string_alphanum_tooltip: "Alfanumerikus karaktersorozat",
		properties_type_string_ext_tooltip: "Kiterjesztett alfanumerikus karaktersorozat",
		properties_type_string_num_tooltip: "Numerikus karaktersorozat",
		properties_type_binary_tooltip: "Kétváltozós",
		properties_type_object_tooltip: "Objektum",
		properties_type_reference_tooltip: "Ez a tulajdonság a lerakat másik elemére hivatkozik.",
		properties_type_guid_tooltip: "Globálisan egyedi azonosító",
		properties_type_group_tooltip: "Felhasználók és csoportok",
		properties_type_user_tooltip: "Felhasználók",
		properties_type_childComponent_tooltip: "Utód komponens",

		properties_childComponent_minCardinalityOnly_tooltip: "A tulajdonságnak legalább ${0} értékkel kell rendelkeznie.",
		properties_childComponent_maxCardinalityOnly_tooltip: "A tulajdonságnak nem lehet több értéke, mint ${0}.",
		properties_childComponent_minMaxCardinality_tooltip: "A tulajdonságnak legalább ${0} értékkel kell rendelkeznie és nem lehet több értéke, mint ${1}.",
		properties_childComponent_noCardinality_tooltip: "A tulajdonságnak tetszőleges számú értéke lehet.",

		properties_type_guid_example_tooltip: ", például {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Válasszon egy értéket a listából.",
		properties_single_select_choice_tooltip: "Válasszon ki egy értéket.",
		properties_multiple_select_typein_tooltip: "Adjon meg legalább egy értéket.",
		properties_multiple_select_choice_tooltip: "Válasszon ki legalább egy értéket.",
		properties_not_selectable_tooltip: "A kategória nem választható ki.",
		properties_none: "Nincs",
		properties_none_tooltip: "A tulajdonság jelenlegi értékének törléséhez válassza a <i>Nincs</i> lehetőséget.",
		properties_value_empty: "Nincs érték",
		properties_value_read_only: "Csak olvasás",
		properties_clear_label: "Törlés",
		properties_clear_tooltip: "A mezőben lévő érték törlése esetén, a <b>Mentés</b> gombra kattintás után törlődik a lerakatban lévő érték.",
		properties_box_custom_properties: "Egyéni tulajdonságok",
		properties_box_metadata_name_in_use: "A név már használatban van. Adjon másik nevet az egyéni tulajdonságnak.",

		properties_templates: "Sablonok",
		properties_add_template: "Sablon hozzáadása",
		properties_remove_template: "Eltávolítás",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Beiktatás",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Beiktatás",
		checkin_cancel_label: "Mégse",
		checkin_file_name_label: "Fájlnév",
		checkin_document_status_title: "Dokumentum beiktatása",
		checkin_document_status_uploading_msg: "Fájl feltöltése...",
		checkin_document_status_checkingin_msg: "Fájl beiktatása...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Szerkesztő mód kiválasztása",
		viewer_redaction_new_document_confirmation_question: "Új dokumentumként vagy helyi fájlként kívánja menteni a szerkesztést?",
		viewer_redaction_new_version_confirmation_question: "Kívánja új változatként menteni a szerkesztést?",
		viewer_redaction_new_version_confirmation_question_never: "Kívánja új tartalomként menteni a szerkesztést?",		
		viewer_redaction_new_document_button: "Igen",
		viewer_redaction_new_document_cancel_button: "Nem",
		viewer_redaction_add_document_confirmation_question: "Új dokumentumként, új változatként vagy helyi fájlként kívánja menteni a szerkesztést?",
		viewer_redaction_add_document_confirmation_question_version_never: "Új dokumentumként, új tartalomként vagy helyi fájlként kívánja menteni a szerkesztést?",
		viewer_redaction_add_document_button: "Új dokumentum",
		viewer_redaction_add_new_version_button: "Új változat",
		viewer_redaction_add_new_version_button_version_never: "Új tartalom",
		viewer_redaction_add_local_file_button: "Helyi fájl",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Válassza ki a szerkesztés okát",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Az adatbeviteli sablon, amelynek segítségével a dokumentumot hozzáadták a lerakathoz, nem található. A dokumentumok az adatbeviteli sablon használata nélkül kerülnek beiktatásra a lerakatba.",
		property_entry_template_not_retrieved_warning: "Az adatbeviteli sablon, amelynek segítségével a dokumentumot hozzáadták a lerakathoz, nem található. A dokumentumtulajdonságok adatbeviteli sablon nélkül jelennek meg.",
		multi_edit_entry_template_not_found_name: "[Nem található]",
		multi_edit_entry_template_not_retrieved_warning: "Az adatbeviteli sablon, amelynek segítségével az elemeket hozzáadták a lerakathoz, nem található. Az elemtulajdonságok adatbeviteli sablon nélkül kerülnek módosításra.",
		checkin_major_version_hover: "Eggyel növeli a dokumentum verziószámát, és beállítja a dokumentum állapotát Kiadott állapotra. Ha nincs kiválasztva a beállítás, akkor a dokumentum nem áll készen a kiadásra, és alvátlozatként lesz beiktatva.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "A dokumentumot nem lehet beiktatni, mert nincs kiiktatva.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "A felhasználói azonosító vagy a jelszó nem érvényes a kiszolgálóhoz.",
		error_bad_userid_password_userResponse: "Győződjön meg róla, hogy helyesen adta meg felhasználói azonosítóját és jelszavát.",
		error_bad_userid_password_adminResponse: "A következő hiba került visszaadásra: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "hibaüzenet",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "A webes ügyfélhez nem létesíthető kapcsolat a következő URL címmel: ${0}.",
		http_send_error_explanation: "A hibát az alkalmazáskiszolgálón felmerülő konfigurációs probléma vagy a webes ügyfélalkalmazással kapcsolatos probléma okozhatta.",
		http_send_error_userResponse: "Próbáljon meg újra bejelentkezni. Ha a probléma továbbra is fennáll, akkor jelentse ezt a hibát a rendszeradminisztrátornak.",
		http_send_error_adminResponse: "A következő HTTP hiba került visszaadásra: ${1}.",
		http_send_error_0: "webes_ügyfél_URL",
		http_send_error_1: "HTTP_hiba",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "A webes ügyfélhez nem létesíthető kapcsolat a következő URL címmel: ${0}.",
		http_error_explanation: "Lehetséges, hogy hitelesítést kell végeznie egy tűzfal szoftverben, vagy az is elképzelhető, hogy a webalkalmazás-kiszolgáló nem fut vagy hálózati problémák miatt nem érhető el.",
		http_error_userResponse: "Ha hitelesítést kell végeznie egy tűzfal szoftverben, akkor hajtsa végre a hitelesítést és próbáljon meg újra bejelentkezni. Ha a probléma továbbra is fennáll, akkor jelentse ezt a hibát a rendszeradminisztrátornak.",
		http_error_adminResponse: "A következő HTTP hiba került visszaadásra: ${1}.",
		http_error_0: "webes_ügyfél_URL",
		http_error_1: "HTTP_hiba",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "A webes ügyfélhez nem létesíthető kapcsolat a következő URL címmel: ${0}.",
		http_response_bad_explanation: "A hibát az alkalmazáskiszolgálón felmerülő konfigurációs probléma vagy a webes ügyfélprogrammal kapcsolatos probléma okozhatta.",
		http_response_bad_userResponse: "Próbáljon meg újra bejelentkezni. Ha a probléma továbbra is fennáll, akkor jelentse ezt a hibát a rendszeradminisztrátornak.",
		http_response_bad_adminResponse: "A következő hiba került visszaadásra: ${1}.",
		http_response_bad_0: "webes_ügyfél_URL",
		http_response_bad_1: "HTTP_hiba",
		http_response_bad_number: 2002,

		unititled_document_name: "Névtelen",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Az e-mail kisalkalmazás nem indítható.",
		email_applet_init_failed_explanation: "Ez a probléma akkor állhat fenn, amikor az e-mail ügyfél nincs megfelelően telepítve és konfigurálva, vagy amikor nincsen a Java futási környezet (JRE) támogatott változata telepítve a munkaállomáson.",
		email_applet_init_failed_userResponse: "A probléma megoldásához:<ul><li>Győződjön meg róla, hogy az e-mail alkalmazása a munkaállomáson az alapértelmezett e-mail alkalmazásként van telepítve és beállítva.</li><li>Ellenőrizze, hogy támogatott JRE változat van-e telepítve a munkaállomásán a parancssorból a következő parancs kiadásával: java -version</li></ul><p>A támogatott JRE változatok az IBM szoftvertámogatási webhelyen az <i>IBM Content Navigator hardver és szoftver előfeltételei</i> dokumentumban találhatók.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Az e-mail alkalmazás nem indítható, mert egy szükséges DLL fájl nem tölthető be.",
		email_applet_JNI_LOAD_FAILED_explanation: "A szükséges WCEmailAppletJNI.dll fájl nem tölthető be, mert lehetséges, hogy a munkaállomáson lévő ideiglenes könyvtár megtelt.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Ellenőrizze, hogy az ideiglenes könyvtár rendelkezik-e elegendő területtel. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. A WCEmailAppletJNI.dll fájl alapértelmezésben a webböngésző beállításaiban megadott ideiglenes könyvtárban töltődik be.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Az e-mail alkalmazás nem indítható, mert az e-mail kisalkalmazás nem tud ideiglenes fájlt létrehozni.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Lehetséges, hogy a munkaállomásán lévő ideiglenes könyvtár megtelt.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Ellenőrizze, hogy az ideiglenes könyvtár rendelkezik-e elegendő területtel. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Az e-mail alkalmazás nem indítható, mert az e-mail kisalkalmazás fér hozzá az ideiglenes könyvtárhoz.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Lehetséges, hogy a munkaállomásán lévő ideiglenes könyvtár megtelt, vagy a felhasználó nem rendelkezik a megfelelő hozzáféréssel az ideiglenes könyvtár eléréséhez.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Ellenőrizze, hogy az ideiglenes könyvtár rendelkezik-e elegendő területtel, és hogy Ön rendelkezik-e írási hozzáféréssel az ideiglenes könyvtárhoz. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor lépjen kapcsolatba a rendszeradminisztrátorral.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Az e-mail kisalkalmazás nem képes törölni egy ideiglenes fájlt.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Lehetséges, hogy a fájlt másik alkalmazás használja, vagy a fájl nem létezik a munkaállomáson.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Ha a fájlt másik alkalmazás használja, akkor zárja be a kérdéses alkalmazást. Ha a fájl a helyi fájlrendszeren található, akkor távolítsa el a következő fájlt a munkaállomás ideiglenes könyvtárából: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "A dokumentumra mutató hivatkozás nem hozható létre.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "A lerakat érvénytelen formátumú URL címet adott vissza.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Zárja be a webböngészőt (az összes lapot és munkamenetet beleértve), majd jelentkezzen be ismét. Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor keresse meg rendszeradminisztrátorát.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Az e-mail kisalkalmazás nem képes a fájlt e-mailhez csatolni.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "A dokumentum lerakat által visszaadott URL címe érvénytelen formátumú.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Zárja be a webböngészőt (az összes lapot és munkamenetet beleértve), majd jelentkezzen be ismét. Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor keresse meg rendszeradminisztrátorát.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "A melléklet nem hozható létre.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Az e-mail kisalkalmazás nem tudja beolvasni a dokumentum URL címét.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Zárja be a webböngészőt (az összes lapot és munkamenetet beleértve), majd jelentkezzen be ismét. Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor keresse meg rendszeradminisztrátorát.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "A dokumentum nem kérhető le a lerakatból.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Lehetséges, hogy munkamenete túllépte az időkorlátot, illetve elképzelhető, hogy a lerakat vagy a webalkalmazás-kiszolgáló nem fut, vagy pedig probléma lehet a webes ügyfélprogram konfigurációjával.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Jelentkezzen be, és próbálja meg ismét elküldeni e-mailben a dokumentumot. Ha a probléma továbbra is fennáll, akkor kérje meg a rendszeradminisztrátort a lerakat hibanaplóinak ellenőrzésére.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Ha úgy állította be a webes ügyfélprogramot, hogy átalakítsa az AFP dokumentumokat másik formátumra (például PDF), akkor mielőtt mellékletként elküldené ezeket a dokumentumokat, győződjön meg róla, hogy az átalakítás helyesen van beállítva.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "A dokumentum nem alakítható PDF formátumúvá.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Az dokumentumok PDF formátumba alakításához használt eszköz nem támogatja a fájltípust.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Zárja be ezt az oldalt, majd próbálja meg ismét e-mailben elküldeni a dokumentumot, ezúttal PDF formátumba alakítás nélkül.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Az e-mail nem került létrehozásra.",
		email_applet_MAPI_USER_ABORT_explanation: "Nyissa meg az e-mail alkalmazását, és győződjön meg róla, hogy, hogy megfelelően működik-e. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor keresse meg a rendszeradminisztrátorát, hogy átnézze az operációs rendszer eseménynaplóit.",
		email_applet_MAPI_USER_ABORT_userResponse: "Ha be kívánta zárni az e-mail alkalmazást, akkor nincs további teendője. Az e-mail elküldéséhez jelentkezzen be az e-mail alkalmazásba és próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Az e-mail nem hozható létre.",
		email_applet_MAPI_FAILURE_explanation: "Lehetséges, hogy nincs megnyitva az e-mail ügyfélprogram, vagy nincs bejelentkezve.",
		email_applet_MAPI_FAILURE_userResponse: "Nyissa meg az e-mail alkalmazását, és győződjön meg róla, hogy, hogy megfelelően működik-e. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor keresse meg a rendszeradminisztrátorát, hogy átnézze az operációs rendszer eseménynaplóit.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Az e-mail nem hozható létre.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Nincs bejelentkezve az e-mail ügyfélre. Csak akkor küldhet üzenetet a webes ügyfélről, ha meg nyitva az e-mail ügyfél és be van jelentkezve.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Nyissa meg az e-mail ügyfelet, majd jelentkezzen be. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Az e-mail nem hozható létre, mert az ideiglenes fájlt nem lehet létrehozni a munkaállomáson.",
		email_applet_MAPI_DISK_FULL_explanation: "Lehetséges, hogy a munkaállomásán lévő ideiglenes könyvtár megtelt.",
		email_applet_MAPI_DISK_FULL_userResponse: "Ellenőrizze, hogy az ideiglenes könyvtár rendelkezik-e elegendő területtel. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Az e-mail nem hozható létre, mert nincs elég rendszermemória.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Lehet, hogy túl sok megnyitott alkalmazása van.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Zárja be a nem használt alkalmazásokat, majd próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "A MAPI hozzáférés megtagadva.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Lehetséges, hogy az Üzenetkezelési alkalmazásprogramozási felület (MAPI) elérése nem engedélyezett vagy e-mail alkalmazása nem támogatja azt. A MAPI a webes ügyfél és az e-mail alkalmazás közötti kommunikáció lehetővé tévő üzenetkezelési protokoll.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Lépjen kapcsolatba a rendszeradminisztrátorral.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Győződjön meg róla, hogy az e-mail alkalmazásban a MAPI hozzáférés be van állítva és megfelelően van konfigurálva. Ha a probléma továbbra is fennáll, akkor keresse meg rendszeradminisztrátorát.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "A melléklet vagy az elemre mutató hivatkozás nem hozható létre.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Lehet, hogy túl sok megnyitott webböngésző-munkamenete van.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Zárja be a nem használt webböngésző-munkameneteket. Ezután próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből. Ha a probléma továbbra is fennáll, akkor lépjen kapcsolatba a rendszeradminisztrátorral.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Az e-mail nem küldhető el.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Lehet, hogy túl sok mellékletet próbál meg elküldeni.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Jelöljön ki kevesebb fájlt. Ezután próbálja meg ismét elküldeni a dokumentumokat a webes ügyfélből.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Az e-mail nem küldhető el.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Lehet, hogy túl sok címzettnek küldi el az e-mailt.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Küldje az e-mailt kevesebb címzettnek.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "A melléklet nem hozható létre.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Néhány szükséges ideiglenes fájl a melléklet létrehozása előtt törlésre kerülhetett. Ez a hiba akkor fordulhat elő, ha a böngésző gyorsítótárát az e-mail elküldése előtt kiürítik.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "A melléklet nem hozható létre.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Néhány szükséges ideiglenes fájl a melléklet létrehozása előtt törlésre kerülhetett. Ez a hiba akkor fordulhat elő, ha a böngésző gyorsítótárát az e-mail elküldése előtt kiürítik.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Az e-mail alkalmazás nem tudja létrehozni a mellékletet.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Az e-mail nem küldhető el a megadott címzettnek.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Lehetséges, hogy a címzett nem létezik a címjegyzékben.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Ellenőrizze a címzett nevét, majd próbálja meg újra elküldeni a dokumentumot.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Az e-mail nem küldhető el a megadott címzettnek.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Elképzelhető, hogy az e-mail cím formátuma helytelen.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Győződjön meg róla, hogy érvényes e-mail címet adott meg, majd próbálja meg újra elküldeni a dokumentumot.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Az e-mail nem küldhető el.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Lehet, hogy az e-mail túl hosszú.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Rövidítse az e-mail szövegét, majd próbálja meg újra elküldeni az e-mailt.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Az e-mail nem hozható létre.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Lehet, hogy az e-mail ügyfél meghibásodott, amikor megpróbálta létrehozni az e-mailt.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Indítsa újra az e-mail ügyfelet, majd próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Lehet, hogy az e-mail nem megfelelően van összeállítva.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Az e-mail nem küldhető el a megadott címzettnek.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Elképzelhető, hogy az e-mail cím formátuma helytelen.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Győződjön meg róla, hogy érvényes e-mail címet adott meg, majd küldje el újra a dokumentumot.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Az e-mail ügyfél nem képes végrehajtani a kért műveletet.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Az e-mail alkalmazás váratlan hibát adott vissza.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Próbálja meg ismét elküldeni a dokumentumot a webes ügyfélből.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Az egyik tulajdonságnak nincs megadva minden kötelező értéke.",
		error_property_cardinality_explanation: "Egyes tulajdonságok esetében meghatározott a szükséges értékek minimális és maximális száma.",
		error_property_cardinality_userResponse: "Az előugró leírás segítségével állapítsa meg, melyik tulajdonság követel meg minimális számú értéket. Ezután adja meg a minimális számú értéket, majd próbálkozzon újra.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "A fájlnév megadása kötelező.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Adjon meg egy fájlnevet és próbálkozzon újra.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "A(z) ${0} bedolgozó hibákat tartalmaz.",
		plugin_error_explanation: "Hiba történt a(z) ${0} bedolgozó JavaScript kódjának kiértékelése során. Ha tovább használja a webes ügyfelet, akkor további hibák fordulhatnak elő.",
		plugin_error_userResponse: "Lépjen kapcsolatba a rendszeradminisztrátorral.",
		plugin_error_adminResponse: "Probléma merült fel a bedolgozóval kapcsolatban, amelyet a bedolgozó szolgáltatónak kell megoldania. Ajánlott, hogy a bedolgozó problémájának megoldásáig távolítsa el a bedolgozót a webes ügyfélprogram konfigurációjából.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "A beviteli sablon nem nyitható meg.",
		open_old_format_entry_template_error_explanation: "A beviteli sablon olyan régebbi formátumot használ, amit a webes ügyfél nem támogat.",
		open_old_format_entry_template_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy frissítse a beviteli sablont.",
		open_old_format_entry_template_error_adminResponse: "Az Application Engine vagy a Workplace XT beviteli sablon tervező segítségével mentse a beviteli sablon frissített változatát.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "A beviteli sablon nem nyitható meg.",
		open_custom_object_entry_template_error_explanation: "A webes ügyfél nem támogatja a következő beviteli sablontípusokat: egyéni objektum beviteli sablonok.",
		open_custom_object_entry_template_error_userResponse: "Nyisson meg másik beviteli sablont.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Az eForm objektum nem nyitható meg.",
		open_forms_object_error_explanation: "A webes ügyfélprogram nem támogatja a következő eForm objektumtípusokat: űrlapsablon, űrlapadatok, dokumentum irányelv és munkafolyamat irányelv.",
		open_forms_object_error_userResponse: "Nyisson meg egy másik dokumentumot.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "A(z) ${0} beviteli sablont nem használhatja.",
		entry_template_folder_restricted_error_explanation: "A beviteli sablon a(z) ${1} mappához ad hozzá elemeket és nem rendelkezik a megfelelő engedélyekkel ahhoz, hogy elemeket adjon hozzá az adott mappához.",
		entry_template_folder_restricted_error_userResponse: "Válasszon másik beviteli sablont vagy kérje meg a rendszeradminisztrátort, hogy adja meg a megfelelő engedélyeket, amelyekkel felvehet elemeket a(z) ${1} mappába.",
		entry_template_folder_restricted_error_0: "beviteli_sablon_neve",
		entry_template_folder_restricted_error_1: "mappa_neve",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "A beviteli sablon nem nyitható meg.",
		open_records_entry_template_error_explanation: "A webes ügyfél nem támogatja a következő beviteli sablontípusokat: deklarálás rekordként beviteli sablonok.",
		open_records_entry_template_error_userResponse: "Nyisson meg másik beviteli sablont.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "A munkafolyamat nem nyitható meg.",
		open_workflow_error_explanation: "A webes ügyfél nem támogatja a munkafolyamatok megnyitását.",
		open_workflow_error_userResponse: "Nyisson meg egy másik dokumentumot.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "A dokumentum nem nyitható meg.",
		viewer_unable_to_view_error_explanation: "Az ilyen típusú dokumentumokhoz nincs beállítva megjelenítő vagy a beállított megjelenítő nem kompatibilis a rendszerrel.",
		viewer_unable_to_view_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy állítson be egy megjelenítőt az ilyen típusú dokumentumokhoz és győződjön meg róla, hogy a megjelenítő működik a felhasználó rendszerével.",
		viewer_unable_to_view_error_adminResponse: "Az adminisztrációs eszköz segítségével állítson be egy megjelenítőt az ilyen típusú dokumentumokhoz.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "A keresés nem nyitható meg.",
		search_cannot_open_error_explanation: "A keresési szolgáltatás nincs beállítva ehhez a munkaasztalhoz.",
		search_cannot_open_error_userResponse: "Kérdezze meg a rendszeradminisztrátort, hogy van-e hozzáférése egy olyan munkaasztalhoz, amely tartalmazza a keresési szolgáltatást, vagy a munkaasztal frissíthető-e, hogy tartalmazza a keresési szolgáltatást.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "A dokumentum nem került betöltésre.",
		viewer_document_load_failed_error_explanation: "A Daeja ViewONE Professional megjelenítő nem tudta megnyitni a dokumentumot.",
		viewer_document_load_failed_error_userResponse: "További információkért tekintse meg a megjelenítőben látható hibaüzenetet.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "A dokumentumot nem lehet megjeleníteni.",
		viewer_session_expired_explanation: "A dokumentum tartalma nem kérdezhető le.",
		viewer_session_expired_userResponse: "Próbáljon meg újra bejelentkezni. Ha a probléma továbbra is fennáll, akkor az alkalmazáskiszolgáló nem fut. Kérje meg a rendszeradminisztrátort, hogy ellenőrizze az IBM Content Navigator hibanaplóit, vagy indítsa újra a kiszolgálót.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "A dokumentumot nem lehet megjeleníteni.",
		ajaxViewer_getPage_failed_explanation: "Az AJAX megjelenítő hibaválaszt kapott az oldal tartalmának lekérésekor. Lehet, hogy az alkalmazáskiszolgáló nem fut.",
		ajaxViewer_getPage_failed_userResponse: "Zárja be a webböngészőt, és lépjen be újra. Ha a probléma továbbra is fennáll, akkor kérje meg a rendszeradminisztrátort, hogy vizsgálja meg a webalkalmazás-kiszolgáló hibanaplóit, vagy indítsa újra a kiszolgálót.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "A Java futási környezet (JRE) nem található a munkaállomáson.",
		viewer_java_plugin_not_found_explanation: "A bedolgozó nem található, vagy nincs telepítve a helyes verziószámú JRE.",
		viewer_java_plugin_not_found_userResponse: "Győződjön meg róla, hogy a JRE telepítve van. Például a parancssorba írja be a következő parancsot: Java -version. Ha a JRE nincs telepítve, vagy helytelen változatszint van telepítve, akkor telepítse a JRE megfelelő változatát. A támogatott változatok az IBM szoftvertámogatási webhelyen az <i>IBM Content Navigator hardver és szoftver előfeltételei</i> dokumentumban találhatók.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "A dokumentum nem jeleníthető meg a webböngészőben.",
		viewer_pdf_plugin_not_found_explanation: "A webböngészőben a PDF dokumentumok megjelenítésére használt bedolgozó nem található.",
		viewer_pdf_plugin_not_found_userResponse: "A PDF fájl letöltésre kerül a munkaállomásra ahelyett, hogy megjelenítésre kerülne a böngésző ablakában.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "A következő elemek nem adhatók hozzá a lerakathoz: ${0}.",
		add_document_single_item_error_explanation: "Ezt a hibát az alábbiak okozhatják:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Áthelyezett vagy törölt dokumentumot próbál hozzáadni.</li>" + "<li>Átnevezett dokumentumot próbál hozzáadni.</li>" + "<li>Sérült dokumentumot próbál hozzáadni.</li>" + "<li>Olyan dokumentumot próbál hozzáadni, amely másik alkalmazásban meg van nyitva.</li>" + "<li>Mappát próbál hozzáadni a lerakathoz.</li>" + "<li>Nem rendelkezik megfelelő engedélyekkel az operációs rendszeren a dokumentum eléréséhez.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Hajtsa végre a megfelelő műveletet a probléma megoldása érdekében:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ha a dokumentum áthelyezésre vagy átnevezésre került, akkor keresse meg a dokumentumot a fájlrendszeren, majd kísérelje meg újra a hozzáadást.</li>" + "<li>Ha a dokumentum másik alkalmazásban meg van nyitva, akkor zárja be azt, majd próbálja meg újra.</li>" + "</ul>" + "<br>Nem adhat mappákat a lerakathoz.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "A következő ${0} elem nem adható hozzá a lerakathoz: ${1}",
		add_document_multiple_items_error_explanation: "Az egyik elem problémája megakadályozza bármely elem hozzáadását a lerakathoz. Ezt a hibát az alábbiak okozhatják:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Áthelyezett vagy törölt dokumentumot próbál hozzáadni.</li>" + "<li>Átnevezett dokumentumot próbál hozzáadni.</li>" + "<li>Sérült dokumentumot próbál hozzáadni.</li>" + "<li>Olyan dokumentumot próbál hozzáadni, amely másik alkalmazásban meg van nyitva.</li>" + "<li>Mappát próbál hozzáadni a lerakathoz.</li>" + "<li>Nem rendelkezik megfelelő engedélyekkel az operációs rendszeren a dokumentum eléréséhez.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Hajtsa végre a megfelelő műveletet a probléma megoldása érdekében:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ha egy dokumentum áthelyezésre vagy átnevezésre került, akkor keresse meg a dokumentumot a fájlrendszeren, majd kísérelje meg újra a hozzáadást.</li>" + "<li>Ha egy dokumentum másik alkalmazásban meg van nyitva, akkor zárja be azt, majd próbálja meg újra.</li>" + "<li>Ha egy dokumentum törölt vagy sérült, akkor törölje az adott elem kijelölését, majd próbálja meg újra a többi elem hozzáadását.</li>" + "</ul>" + "<br>Nem adhat mappákat a lerakathoz.",
		add_document_multiple_items_error_0: "elemek_száma",
		add_document_multiple_items_error_1: "sikertelen_elemek",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Nem ragadhat meg és húzhat elemeket erről a helyről.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Az eForm objektum nem nyitható meg.",
		open_forms_work_object_error_explanation: "A webes ügyfél nem támogatja a következő eforms objektumtípust: munkafolyamat irányelv.",
		open_forms_work_object_error_userResponse: "Nyisson meg egy másik dokumentumot.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "A dokumentum nem nyitható meg.",
		viewer_privilege_to_view_error_explanation: "Nem rendelkezik a dokumentum megtekintéséhez szükséges megfelelő jogosultságokkal.",
		viewer_privilege_to_view_error_userResponse: "Kérje meg a dokumentum tulajdonosát vagy a rendszeradminisztrátort, hogy adjon megfelelő engedélyeket a dokumentum megtekintéséhez.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Az elemek nem adhatók hozzá a lerakathoz.",
		add_document_too_many_items_error_explanation: "Egyidejűleg legfeljebb ${0} elem adható hozzá. ${1} elem hozzáadását kísérelte meg.",
		add_document_too_many_items_error_userResponse: "Távolítson el néhány elemet a listáról, majd próbálkozzon újra az elemek hozzáadásával. Vagy keresse meg a rendszeradminisztrátort, hogy növelje meg a munkaasztalhoz egyidejűleg hozzáadható dokumentumok maximális számát.",
		add_document_too_many_items_error_0: "elemek_maximális_száma",
		add_document_too_many_items_error_1: "elemek_száma",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "A webes ügyfélhez nem létesíthető kapcsolat a következő URL címmel: ${0}.",
		http_ltpa_expired_explanation: "A böngésző-munkamenethez tartozó LTPA kulcs lejárt.",
		http_ltpa_expired_userResponse: "Indítsa újra a webböngészőt, majd próbálkozzon meg újra a bejelentkezéssel. Ha a probléma továbbra is fennáll, akkor jelentse a következő hibát a rendszeradminisztrátorának: ${1}.",
		http_ltpa_expired_0: "webes_ügyfél_URL",
		http_ltpa_expired_1: "HTTP_hiba",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "A dokumentum nem adható hozzá a(z) ${0} mappához.",
		dnd_no_privilege_error_explanation: "A mappára beállított jogosultságok tiltják dokumentumok hozzáadását a mappához.",
		dnd_no_privilege_error_userResponse: "Adja hozzá a dokumentumot egy másik mappához.",
		dnd_no_privilege_error_0: "elem_neve",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Az elemek nem módosíthatók.",
		modify_document_too_many_items_error_explanation: "Egyidejűleg legfeljebb ${0} elemet módosíthat. ${1} elem módosítását kísérelte meg.",
		modify_document_too_many_items_error_userResponse: "Válasszon ki kevesebb elemet, és próbálkozzon újra az elemek módosításával. Vagy keresse meg a rendszeradminisztrátort, hogy növelje meg a munkaasztalról egyidejűleg módosítható elemek maximális számát.",
		modify_document_too_many_items_error_0: "elemek_maximális_száma",
		modify_document_too_many_items_error_1: "elemek_száma",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Nem használhatja a(z) ${0} osztályt.",
		add_document_multiple_unique_values_error_explanation: "A(z) ${0} osztály legalább egy olyan tulajdonságot tartalmaz, amely egy egyedi értéket követel meg minden dokumentumra. Több dokumentum hozzáadásakor, az összes dokumentum ugyanazt az értéket használja.",
		add_document_multiple_unique_values_error_userResponse: "Válasszon egy különböző osztályt, vagy vegye fel a dokumentumokat egyenként.",
		add_document_multiple_unique_values_error_0: "osztály_megjelenő_neve",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "A(z) ${0} beviteli sablont nem használhatja.",
		add_document_multiple_unique_values_entry_template_error_explanation: "A(z) ${0} adatbeviteli sablon megköveteli dokumentumok hozzáadását a(z) ${1} osztályhoz. A(z) ${1} osztály azonban tartalmaz legalább egy olyan tulajdonságot, amely megkövetel egy egyedi értéket minden dokumentumra. Több dokumentum hozzáadásakor, az összes dokumentum ugyanazt az értéket használja.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Válasszon egy különböző adatbeviteli sablont, vagy vegye fel a dokumentumokat egyenként.",
		add_document_multiple_unique_values_entry_template_error_0: "beviteli_sablon_neve",
		add_document_multiple_unique_values_entry_template_error_1: "osztály_megjelenő_neve",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "A(z) ${0} beviteli sablont nem használhatja.",
		entry_template_class_restricted_error_explanation: "Az adatbeviteli sablon a(z) ${1} használatával ad hozzá elemeket, de Ön nem rendelkezik a megfelelő engedélyekkel elemek hozzáadásához az adott osztállyal.",
		entry_template_class_restricted_error_userResponse: "Válasszon másik beviteli sablont, vagy kérje meg a rendszeradminisztrátort, hogy adja meg a megfelelő engedélyeket elemek felvételéhez a(z) ${1} osztály használatával.",
		entry_template_class_restricted_error_0: "beviteli_sablon_neve",
		entry_template_class_restricted_error_1: "osztály_megjelenő_neve",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "A munkaelem nem rendelhető hozzá egy másik felhasználóhoz.",
		process_reassign_error_explanation: "Ezt a műveletet tiltja a munkafolyamat.",
		process_reassign_error_userResponse: "Megnyithatja a munkaelemet, és befejezheti az aktuális lépést a munkaelemben.  Ha a kérdéssel kapcsolatban további információkat szeretne kapni, akkor kérje meg az elem tulajdonosát, hogy ellenőrizze a munkaelem áthelyezhetőségét.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "A következő egyéni művelet nem tölthető be: ${0}.",
		customaction_loadurl_error_explanation: "Az egyéni művelet nincs elérhető helyen. Az egyéni művelet aktuális URL címe: ${1}.",
		customaction_loadurl_error_userResponse: "Kérje meg az adminisztrátorát, hogy helyezze át az egyéni műveletet elérhető helyre.",
		customaction_loadurl_error_adminResponse: "Az egyéni műveletet meghatározó JSP fájlnak az eClient webalkalmazás részeként vagy az IBM Content Navigator webalkalmazás részeként rendelkezésre kell állnia.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "A következő összetevő nem található: ${0}.",
		feature_invalid_explanation: "A probléma akkor merülhet fel, ha az összetevő nem elérhető a megadott munkaasztalon vagy az összetevő neve hibásan lett megadva.",
		feature_invalid_userResponse: "Az OK gombra kattintva, a munkaasztal alapértelmezett összetevőjéhez lesz átirányítva. Lépjen kapcsolatba a rendszeradminisztrátorral, és jelentse a problémát.",
		feature_invalid_adminResponse: "Ha az összetevő esetleg elérhető a munkaasztalon, akkor az adminisztrációs eszköz használatával frissítse a munkaasztal beállításait. Ha az összetevőt a munkaasztal nem tartalmazza vagy annak hibás a neve, akkor az alkalmazás fejlesztőjének segítségével, aki az összetevő URL címét létrehozta, frissítse az URL címet.",
		feature_invalid_number: 2066,
		feature_invalid_0: "összetevő_neve",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "A(z) ${0} keresés nem nyitható meg.",
		search_unsupportedTeamspaceSearch_error_explanation: "Egy csoportterületen kell lennie, hogy megnyithassa ezt a keresést.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Válasszon egy másik keresést.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "A következő fájl nem importálható: ${0}",
		wrong_import_file_type_error_explanation: "A fájlnak egy tulajdonságfájlnak kell lennie.",
		wrong_import_file_type_error_userResponse: "Válassza ki a adminisztrációs eszközből exportált tulajdonságfájlt.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "A(z) ${0} lerakat nem található a(z) ${1} munkaasztalon.",
		browse_repository_not_found_error_explanation: "A lerakatnak a munkaasztalon kell lennie és engedélyezni kell a tallózás szolgáltatást, amennyiben az meg van adva egy URL paraméterben.",
		browse_repository_not_found_error_userResponse: "Győződjön meg róla, hogy az URL címben megadott lerakatazonosító helyes, a lerakat hozzá van adva a(z) ${1} munkaasztalhoz, és a tallózás szolgáltatás engedélyezett a lerakathoz.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "A(z) ${0} lerakathoz nincs engedélyezve a tallózás szolgáltatás a(z) ${1} munkaasztalon.",
		browse_repository_not_enabled_error_explanation: "A lerakaton engedélyezni kell a tallózás szolgáltatást, amennyiben az meg van adva egy URL paraméterben.",
		browse_repository_not_enabled_error_userResponse: "Engedélyezze a tallózás szolgáltatást a(z) ${0} lerakathoz a(z) ${1} munkaasztalon.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "A keresés nem hajtható végre, mert érvénytelen feltételeket tartalmaz.",
		invalid_xt_stored_search_criteria_error_explanation: "A következő érték érvénytelen: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy biztosítson friss hivatkozást.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Szerkessze a megfelelő név-érték párt az URL címben. Ha nem tudja, hogy mely értékek érvényesek a tulajdonsághoz, akkor nyissa meg a tárolt keresést a FileNet Workplace XT kereséstervezőben az érvényes értékek meghatározásához.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "A lerakatok közötti keresés nem nyitható meg.",
		unified_search_invalid_fixed_value_error_explanation: "A lerakatok közötti keresés érvénytelen feltételt tartalmaz. Ez a probléma akkor léphet fel, ha egy feltétel rögzített értékkel rendelkezik, amely nem kompatibilis a leképezés többi tulajdonságával. Ez a probléma például akkor léphet fel, ha a rögzített érték karaktersorozat, de a leképezés többi tulajdonsága egész szám.",
		unified_search_invalid_fixed_value_error_userResponse: "Ha rendelkezik a keresés szerkesztéséhez szükséges megfelelő jogosultságokkal, akkor távolítsa el az érvénytelen feltételt, majd mentse el újra a keresést. Ha nem rendelkezik a keresés szerkesztéséhez szükséges megfelelő jogosultságokkal, akkor kérje meg a keresés tulajdonosát vagy a rendszeradminisztrátort, hogy mentse újra a keresést.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "A kérés nem hajtható végre.",
		launch_action_invalid_json_error_explanation: "A webes ügyfélnek átadott adatok érvénytelenek.",
		launch_action_invalid_json_error_userResponse: "Tájékoztassa az adminisztrátort, hogy a probléma felmerülésekor melyik alkalmazást használta.",
		launch_action_invalid_json_error_adminResponse: "Az ügyfélalkalmazás nem küldött érvényes JSON objektumot a webes ügyfélnek. További segítségért vegye fel a kapcsolatot az IBM szoftvertámogatással.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "A kérés nem hajtható végre.",
		launch_action_not_found_error_explanation: "A(z) ${0} művelet nincs konfigurálva egyetlen menühöz sem a(z) ${1} munkaasztalon.",
		launch_action_not_found_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy konfigurálja a(z) ${1} munkaasztalt, hogy egy olyan menüt használjon, amely tartalmazza a(z) ${0} műveletet, vagy rendelje hozzá Önt egy olyan munkaasztalhoz, amely tartalmazza a(z) ${0} műveletet.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "A kérés nem hajtható végre.",
		launch_action_repository_not_found_error_explanation: "A(z) ${0} lerakat nincs társítva a(z) ${1} munkaasztallal.",
		launch_action_repository_not_found_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy társítsa a(z) ${0} lerakatot a(z) ${1} munkaasztallal, vagy rendelje hozzá Önt egy olyan munkaasztalhoz, amely tartalmazza a(z) ${0} lerakatot.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "A csoportterület nem nyitható meg.",
		teamspace_cannot_open_error_explanation: "A csoportterület szolgáltatás nincs beállítva ehhez a munkaasztalhoz.",
		teamspace_cannot_open_error_userResponse: "Kérdezze meg a rendszeradminisztrátort, hogy van-e hozzáférése egy olyan munkaasztalhoz, amely tartalmazza a csoportterület szolgáltatást, vagy a munkaasztal frissíthető-e, hogy tartalmazza a csoportterület szolgáltatást.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Hiba történt a szerkesztett tartalom beiktatásakor.",
		viewer_redaction_checkin_failed_explanation: "A megjelenítő hiba választ kapott a szerkesztett tartalom beiktatásakor.",
		viewer_redaction_checkin_failed_userResponse: "Kérje meg adminisztrátorát, hogy tekintse át a a webalkalmazás-kiszolgáló naplófájljait.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Nem lehet dokumentumokat hozzáadni a lerakathoz.",
		add_document_odserver_odwek_version_od_error_explanation: "Az IBM Content Manager OnDemand kiszolgáló vagy ODWEK aktuális változata nincs azon a minimális szinten, amely a dokumentumok hozzáadásának támogatásához szükséges a Content Manager OnDemand lerakathoz.",
		add_document_odserver_odwek_version_od_error_userResponse: "Az adminisztrátorral ellenőriztesse, hogy a Content Manager OnDemand Server és az ODWEK melyik változatára van szükség a dokumentumok hozzáadásának támogatásához a Content Manager OnDemand lerakatokhoz.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Az elemek nem adhatók hozzá a lerakathoz.",
		add_document_too_many_items_od_error_explanation: "IBM Content Manager OnDemand lerakatok esetében egyszerre csak egy elemet lehet hozzáadni.",
		add_document_too_many_items_od_error_userResponse: "Távolítson el néhány elemet a listáról, majd próbálkozzon meg az elemek ismételt hozzáadásával, egyszerre egy elemmel.",
		add_document_too_many_items_od_error_0: "elemek_maximális_száma",
		add_document_too_many_items_od_error_1: "elemek_száma",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Az elem nem adható hozzá a lerakathoz.",
		add_document_filesize_empty_od_error_explanation: "Nem lehet üres fájlokat hozzáadni az IBM Content Manager OnDemand lerakathoz.",
		add_document_filesize_empty_od_error_userResponse: "Adjon hozzá tartalmat a fájlhoz, majd próbálkozzon meg újra a fájl ismételt hozzáadásával vagy adjon hozzá egy másik elemet.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "A lerakatok közötti keresés nem nyitható meg.",
		unified_search_repository_not_found_error_explanation: "A lerakatok közötti keresés legalább egy érvénytelen lerakatot tartalmaz. Ez a probléma akkor történhet, amikor a keresésben tartalmazott lerakatok törölve lettek az alkalmazásból, vagy el lettek távolítva a jelenlegi munkaasztalról.",
		unified_search_repository_not_found_error_userResponse: "Ha rendelkezik a keresés szerkesztéséhez szükséges megfelelő jogosultságokkal, akkor mentse újra a keresést. A keresés mentésekor a webes ügyfélprogram eltávolítja az érvénytelen lerakatokat a keresésből. Ha nem rendelkezik a keresés szerkesztéséhez szükséges megfelelő jogosultságokkal, akkor kérje meg a keresés tulajdonosát vagy a rendszeradminisztrátort, hogy mentse újra a keresést.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Nem hozható létre új dokumentum.",
		edit_document_using_office_online_error: "A dokumentum nem nyitható meg.",
		edit_document_using_office_online_error_explanation: "A Microsoft Office Online kiszolgáló URL-címe nincs beállítva.",
		edit_document_using_office_online_error_userResponse: "Mielőtt használhatná az Office Online alkalmazást, rendszergazdájának engedélyeznie kell az Office Online kiszolgálót egy lerakaton, és meg kell adnia a Microsoft Office Online kiszolgáló URL-címét.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "A dokumentum nem nyitható meg a Microsoft Office Online szolgáltatásban.",
		edit_document_using_office_online_error_userResponse1: "Kérje meg az adminisztrátort, hogy frissítse az MS Office Online kiszolgáló integrációt.<br><br> Ha a felhasználónak el kell érnie a dokumentumot a Microsoft Office Online szolgáltatásból, akkor menjen a lerakat Integráció szerkesztése oldalára, és frissítse az MS Office Online kiszolgáló integrációt, hogy tartalmazza az osztályt az Office Online támogatáshoz módosítandó osztályok listájában. ",		
		browser_not_support_this_viewer: "A konfigurált megjelenítő nem kompatibilis a böngészőjével. ",
		browser_not_support_this_viewer_explanation: "A(z) ${0} megjelenítőt a böngésző nem támogatja.",
		browser_not_support_this_viewer_userResponse: "Használjon egy másik megjelenítőt a dokumentum megnyitásához. A támogatott böngészők az IBM szoftvertámogatási webhelyen az <i>IBM Content Navigator hardver és szoftver előfeltételei</i> dokumentumban találhatók.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Munkafolyamat információk",
		process_information_info_text: "Az kiválasztott elem jelenleg a következő munkafolyamatokban fut.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Egyenlő",
		operator_NOTEQUAL: "Nem egyenlő",
		operator_LIKE: "Hasonló",
		operator_STARTSWITH: "Kezdődik",
		operator_ENDSWITH: "Végződik",
		operator_NOTLIKE: "Nem hasonló",
		operator_NULL: "Üres",
		operator_NOTNULL: "Nem üres",
		operator_LESS: "Kisebb",
		operator_LESSOREQUAL: "Nem nagyobb mint",
		operator_GREATER: "Nagyobb",
		operator_GREATEROREQUAL: "Nagyobb vagy egyenlő",
		operator_BETWEEN: "Közé esik",
		operator_NOTBETWEEN: "Nem esik közé",
		operator_IN: "Összeset tartalmazza",
		operator_INANY: "Bármelyiket tartalmazza",
		operator_NOTIN: "Összeset kizárja",
		operator_CONTAINS: "Tartalmaz",

		/* SearchForm widget */
		search_button_tooltip: "A feltételeknek megfelelő dokumentumok keresése.",
		reset_button_tooltip: "Visszaállítja a keresést az adminisztrátor által beállított alapértelmezett értékekre.",
		clear_button_tooltip: "A kereséshez megadott összes értéket eltávolítja.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Keresés kiválasztása",
		append_to_search: "Hozzáfűzés kereséshez",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Új keresés",
		new_unified_search: "Új lerakatok közötti keresés",
		searh_name_contains: "A keresési név tartalmazza",
		keep_search_criteria_expanded: "Keresési feltétel nyitva tartása",
		showing_results: "Találatok a következőre:",
		open_in_new_window: "Megnyitás új ablakban",
		open_in_new_tab: "Megnyitás új lapon",
		close_tab: "Lap bezárása",
		add_repository: "Lerakat hozzáadása",
		edit_repository: "Lerakat szerkesztése",
		remove_repository: "Eltávolítás",
		search_scope: "Keresési hatókör",
		search_class_template: "Osztály",
		object_type_version: "Objektum típus és verziószám",
		not_applicable: "Nem alkalmazható",
		unified_search_including_subfolders: " (almappákkal együtt)",
		unified_search_dialog_intro_text: "Válassza ki a lerakatot és a keresést vagy az osztályokat, amelyek a keresésbe beleértendők.",
		unified_search_class_or_template: "Osztály vagy sablon",

		select_object_fieldset_legend: "Hogyan szeretné megkeresni a csatolandó elemeket:",
		select_object_create_new_search: "Új keresés",
		select_object_search_template: "Meglévő keresés",

		search_criteria: "Keresési feltétel:",
		search_criteria_no_colon: "Keresési feltétel",
		search_in_multiple: "Keresés itt: (${0}):",
		search_location_including_subfolders: "${0} beleértve az almappákat",
		search_class: "Osztály:",
		search_class_multiple: "Osztály (${0}):",
		search_class_including_subclasses: "${0} beleértve az alosztályokat",
		search_class_all_pseudo: "Összes",
		search_results: "Keresési eredmények",
		select_operator: "Operátor kiválasztása",
		ending_value: "A(z) ${0} tulajdonság befejező értéke a következő:",
		search_options: "Keresési beállítások:",
		search_version: "Változat:",
		search_released_version: "Kiadott változat",
		search_current_version: "Jelenlegi változat",
		search_all_versions: "Minden változat",
		search_file_type_filter: "Fájltípus szűrő:",
		search_one_file_type: "1 fájltípus",
		search_many_file_types: "${0} fájltípus",
		search_action_filter: "Művelet szűrő:",
		search_action_filter_hover_help: "Szűkítse a találatok körét azon fájlokra, amelyeken a felhasználók adott műveletet hajtottak végre.<br/>Például kereshet olyan dokumentumokra, amelyeket 2012 szeptember 20-án adott hozzá.",
		search_action_filter_enabled: "Művelet szűrő engedélyezett",
		search_enable: "Engedélyezés",
		search_disable: "Letiltás",
		search_by: "szempont:",
		search_added: "Hozzáadva",
		search_modified: "Módosítva",
		search_checked_out: "Kiiktatva",
		search_date_operator_on: "Be",
		search_date_operator_not_on: "Nem ekkor",
		search_date_operator_before: "Előtte:",
		search_date_operator_after: "Utána:",
		search_version_hover_help_p8: "Egy kiadott változat minden felhasználó számára elérhető. A dokumentum aktuális változata azt jelenti, hogy legalább egy felhasználó szerkeszti az adott dokumentumot.",
		search_version_hover_help_cm: "Az aktuális változat az elem legújabb változata.",
		search_using: "Elemek keresése, melyek megfelelnek:",
		search_property_and_text_criteria: "A tulajdonságértékeknek és a szöveges feltételeknek",
		search_property_or_text_criteria: "A tulajdonságértékeknek vagy a szöveges feltételeknek",
		search_property_and_text: "Tulajdonság- és szöveges feltételeknek",
		search_property_or_text: "Tulajdonság- vagy szöveges feltételeknek",
		search_property_options: "Tulajdonság-beállítások:",
		search_property_option_match_all: "Minden tulajdonság",
		search_property_option_match_any: "Bármely tulajdonság",
		search_property_option_match_all_summary: "Mind egyezik",
		search_property_option_match_any_summary: "Bármelyik egyezik",
		search_total_count_type_total: "Összesen",
		search_total_count_type_atleast: "Legalább",
		search_content_size_filter: "Tartalomméret szűrő:",
		search_content_size_filter_any: "Bármilyen tartalomméret",

		/* Search work options */
		search_work_filter: "Munkaelem szűrő:",
		search_work_filter_hover_help: "Szűkítse az eredményeket, hogy csak a munkafolyamatban lévő elemeket tartalmazza. Például szűkítheti az eredményt, hogy csak az aktív munkaelemet tartalmazza.<br /><br />Ez a lehetőség nem érvényes, ha a keresés által visszaadott elemek összes változatát meg kívánja jeleníteni.",
		search_work_filter_enabled: "Munkaelem szűrő engedélyezett",
		search_work_filter_status: "Állapot:",
		search_work_filter_step: "Lépés:",
		search_work_filter_owner: "Tulajdonos:",
		search_work_filter_status_all: "Összes elem",
		search_work_filter_status_active: "Aktív elemek",
		search_work_filter_status_suspended: "Felfüggesztett elemek",
		search_work_filter_process_all: "Összes munkafolyamat",
		search_work_filter_step_all: "Összes lépés",
		search_work_filter_owner_all: "Összes felhasználó",
		search_work_filter_step_error: "A lépésnév nem létezik.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "A keresés nem végezhető el további információk nélkül. Adjon meg egy értéket legalább egy feltételhez.",
		search_insufficient_input_box: "A keresés nem végezhető el további információk nélkül. Adja meg a szöveges keresési feltételeket, vagy válasszon ki egy metaadat sablont.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "További információk nélkül nem állíthatja be, hogy a megnyitásakor elinduljon a keresés. Adjon meg egy értéket legalább egy feltételhez.",
		search_member_required: "Ahhoz, hogy ezt a keresést megossza adott felhasználókkal és csoportokkal, válasszon ki legalább egy felhasználót vagy csoportot a keresés megosztásához.",
		search_criteria_layout_and: "ÉS",
		search_criteria_layout_or: "VAGY",
		search_prompt_close_without_save: "Valóban bezárja a módosítások mentése nélkül?",
		search_prompt_close_all_without_save: "Valóban bezár minden lapot a módosítások mentése nélkül?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "A következő keresési feltétel típusok közül az egyik nem érvényes a lerakatra: ${0}. Az érvénytelen feltételeket el kell távolítani a keresés futtatásához a webes ügyfélen. A keresés mentésekor az érvénytelen feltételek eltávolításra kerülnek. Ha nem akarja módosítani a keresést, akkor zárja azt be.",
		search_invalid_repository: "Legalább egy lerakat",
		search_invalid_class: "Legalább egy osztály",
		search_invalid_folder: "Legalább egy mappa",
		search_invalid_file_type: "Legalább egy fájltípus",
		search_invalid_property: "Legalább egy tulajdonság",
		search_invalid_text_search: "Szöveg keresési feltétel",
		search_invalid_work: "Munkaelem szűrő feltétel:",

		search_operator_pulldown_missing: "Egy operátor szükséges. Válasszon operátort a legördülő menüből. Ha nem látható egyetlen operátor sem, akkor kérje meg a rendszeradminisztrátorát, hogy a <b>Keresés</b> lap adminisztrációs eszközével ellenőrizze, hogy nincs-e elrejtve az összes operátor. Ha ez egy lerakatok közti keresés, akkor lehetséges, hogy a legördülő menü nem tartalmaz operátorokat, ha az egymásra leképezett tulajdonságoknak nincs egyetlen közös operátora sem.",

		/*SearchBuilder */
		open_search_builder: "Új keresés",
		document_type: "Osztály",
		show_all_properties: "Minden tulajdonság megjelenítése.",
		text_search_label: "A következő kifejezéseket tartalmazó elemek keresése:",
		text_search_place_holder: "Használja a kifejezések és operátorok kombinációját: * ? vagy \"pontosan egyező kifejezések\"",
		text_search_place_holder_box: "Használja a kifejezések és operátorok kombinációját: AND, OR, NOT és \"pontosan egyező kifejezések\"",
		text_search_place_holder_cascade_proximity: "Használja a kifejezések és operátorok kombinációját: * vagy ?",
		text_search_place_holder_common: "Használja a kifejezések és \"pontosan egyező kifejezések\" kombinációját",
		text_search_hover_help_p8: "Helyettesítő karakterként használja a csillag (*) vagy a kérdőjel (?) karaktert. Pontos egyezések kereséséhez használjon dupla idézőjeleket (\"\").",
		text_search_hover_help_p8_only_crs: "Helyettesítő karakterként használja a csillag (*) vagy a kérdőjel (?) karaktert. Pontos egyezések kereséséhez használjon dupla idézőjeleket (\"\"). Több kifejezés megadásakor a több lerakatban végzett keresés olyan elemeket ad vissza, amelyek bármelyik kifejezést tartalmazzák.",
		text_search_hover_help_cm: "Helyettesítő karakterként használja a csillag (*) vagy a kérdőjel (?) karaktert. Pontos egyezések kereséséhez használjon dupla idézőjeleket (\"\"). A kizárandó kifejezések előtt használjon mínuszjelet (-), a belefoglalandó kifejezések előtt pluszjelet (+).",
		text_search_hover_help_box: "Az összes kifejezés egyeztetéséhez használja az AND operátort két kifejezés között. Bármely kifejezés egyeztetéséhez használja az OR operátort két kifejezés között. Pontos egyezések kereséséhez használjon dupla idézőjeleket (\"\"). Egy kifejezés kizárásához használja előtte a NOT operátort.",
		text_search_hover_help_common: "Pontos egyezések kereséséhez használjon dupla idézőjeleket (\"\"). Több kifejezés megadásakor a több lerakatban végzett keresés olyan elemeket ad vissza, amelyek az összes kifejezést tartalmazzák.",
		text_search_options: "Szövegbeállítások:",
		text_search_options_hover_help: "Ha a helyettesítő karakterektől eltérő operátorokat is szeretne használni, akkor válassza a Speciális operátorok lehetőséget.",
		text_search_option_any: "A kifejezések bármelyikét",
		text_search_option_all: "Az összes kifejezést",
		text_search_option_proximity: "Következő szavakhoz közeliek:",
		text_search_option_none: "Speciális operátorok",
		text_search_option_authoring: "A szöveges keresés:",
		text_search_option_authoring_hover_help: "Válasszon ki egy beállítást, amely meghatározza, hogy hogyan kívánja a szöveges keresési feltételeket elérhetővé tenni a felhasználók számára. Ha nem kíván szöveges keresési feltételeket belefoglalni a keresésbe, akkor rejtse el ezt a beállítást. Egyébként engedélyezheti a felhasználók számára a szöveges keresési feltételek szerkesztését, vagy írásvédetté teheti azokat a felhasználók számára.",
		text_search_option_hide: "Feltételek elrejtése",
		text_search_option_hide_hover_help: "Válassza ezt a beállítást, ha a keresésbe nem kíván belefoglalni szöveges keresési feltételeket, vagy nem szeretné engedélyezni, hogy más felhasználók szöveges keresési feltételeket adjanak meg.",
		text_search_option_in: "A(z) ${0} HTML/XML címkében",
		text_search_option_paragraph: "Azonos bekezdésben",
		text_search_option_sentence: "Azonos mondatban",
		text_search_option_vql: "VQL lekérdezés",
		text_search_option_none_hover_help: "A kizárandó kifejezések előtt használja a - karaktert.",
		text_search_option_cascade_proximity_hover_help: "A keresési eredményeket azokra a kifejezésekre korlátozza, amelyek olyan szavak tartományában jelennek meg, amik nem tartalmazzák a pontos szókapcsolatokat.",

		box_search_metadata: "Metaadatok:",
		box_search_select_template: "Sablon kiválasztása",
		box_search_no_templates: "Nincsenek elérhető sablonok",
		box_text_search_options_search_within: "Keresés hatóköre:",
		box_text_search_options_search_within_everything: "Minden",
		box_text_search_options_search_within_file_content: "Dokumentumtartalom",
		box_text_search_options_search_within_tags: "Címkék",
		box_text_search_options_limit_to: "Csak a következők keresése:",

		add_property: "Tulajdonság hozzáadása",
		edit_template: "Keresés szerkesztése",
		save_search: "Keresés mentése",
		search_template_name: "Név:",
		search_template_desc: "Leírás:",
		auto_run: "Keresés futtatása a megnyitásakor",
		show_in_tree: "Keresés megjelenítése a mappaszerkezetben",
		show_in_tree_hover_help: "Ha a keresés egy mappába van mentve, akkor az alapértelmezés szerint csak a tartalomlistában jelenik meg. Ha ezt a beállítást választja, akkor a keresés megjelenik a Tallózás nézet mappa fájában is.  Azonban a keresés a mappa fában csak akkor jelenik meg, ha egy mappába menti a keresést.",
		share_search_with: "Keresés megosztása a következővel:",
		remove_member: "${0} eltávolítása",
		ok_button_label: "OK",
		save_template: "Mentés",
		save_template_title: "Ha gyakran kell keresnie adott elemeket, akkor mentse a keresési feltételeket.",
		remove_criterion: "Eltávolítás",
		apply_button_label: "Alkalmaz",
		empty_search_results_pane: "Keresés futtatása a találatok megjelenítéséhez.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Teljes lerakat",

		repository_already_selected: "A ${0} lerakat nem adható hozzá a lerakatok közötti kereséshez, mert a keresés azt már tartalmazza. <br/> A lerakatok közötti keresés csak egyszer tartalmazhatja a lerakatot. <br/>Válasszon ki egy, a lerakatok közötti keresésbe beleértendő másik lerakatot.",

		repository_limit_reached: "A(z) ${0} lerakat nem adható hozzá a lerakatok közötti kereséshez. Legfeljebb ${1} lerakatot adhat hozzá a kereséshez.",

		nomore_criteria_toappend: "A keresési feltétel már tartalmaz minden leképezett tulajdonságot. Nem kerültek tulajdonságok felvételre a keresési feltételek közé.",
		nomore_criteria_toappend_regular: "A keresési feltétel már tartalmaz minden tulajdonságot. Nem kerültek tulajdonságok felvételre a keresési feltételek közé.",

		/* OD Save Search dialog */
		reload_label: "Frissít",
		od_save_search_help_text: "Írjon be egy nevet a keresés számára, vagy válasszon ki egy meglévő keresést, amelyet felül kíván írni.",
		public_access_label: "Mások is használhassák a keresést",
		od_delete_search_help_text: "Válassza ki a törölni kívánt keresés(eke)t",
		delete_save_searches: "Mentett keresések törlése",

		/* Unified Search */
		unified_search_enable_text_search: "Szöveges keresési feltételek tartalmazása",
		unified_search_text_search_enabled: "Szöveges keresés tartalmazása",
		unified_search_mapping: "Leképezés",
		unified_search_new_mapping: "Új leképezés",
		unified_search_mapping_name: "Leképezés neve",
		unified_search_mapping_dialog_instructions: "Válassza ki a leképezni kívánt tulajdonságokat. Néhány tulajdonság nem képezhető le más adattípusú tulajdonságra. Például leképezhet egy karaktersorozat tulajdonságot egész tulajdonságra. Egy tulajdonságnak a leképezésénél egy másik tulajdonságra, a lerakatok közötti keresésben a tulajdonságok egyetlen tulajdonságként lesznek kezelve.",
		unified_search_filter_available_properties: "Szűrés a rendelkezésre álló tulajdonságok között",
		unified_search_available_properties: "Elérhető tulajdonságok",
		unified_search_mapped_properties: "Leképezett tulajdonságok",
		unified_search_single_values: "egyedülálló értékek",
		unified_search_multiple_values: "többszörös értékek",
		unified_search_add_mapping: "Leképezés hozzáadása",
		unified_search_warn_remove_repository: "A keresési feltételekben a kiválasztott lerakat kerül használatra.\nHa eltávolítja a lerakatot, akkor minden olyan leképezés és keresési feltétel, amely tartalmazza a lerakatot törölve lesz.\n\nEl kívánja távolítani a lerakatot?",
		unified_search_warn_update_repository_mappings: "A lerakat tulajdonság kiválasztásának módosítása hatással van a keresési feltételekre.\n\nA keresési feltételek leképezéseket tartalmaznak, ahol szerepelnek olyan tulajdonságok, amelyeket el kíván távolítani. Az eltávolítani kívánt tulajdonságokat tartalmazó leképezéseket törölni kell. Az ilyen leképezéseket tartalmazó keresési feltételeket törölni kell a keresés futtatásához.\n\nKívánja frissíteni a lerakat beállításokat és törölni a leképezéseket és keresési feltételeket?",
		unified_search_warn_update_repository_mappings_reset: "Szöveges keresési feltételek belefoglalása ehhez a lerakathoz érinti a lerakatok közötti keresési feltételeket.\n\nA keresés futtatásához minden olyan tulajdonság keresési feltétel törölni kell, amely tartalmaz egy leképezést a lerakat tulajdonságaival. \n\nFrissíti a lerakat beállításait és törli a keresési feltételeket?",
		unified_search_warn_update_repository_text_criteria: "A lerakat szöveges keresési feltételeinek eltávolítása hatással van a lerakatok közötti keresési feltételekre. \n\nA szöveges keresési feltételt törölni kell a lerakatok közötti keresési feltételekből a keresés futtatásához.\n\nKívánja frissíteni a lerakat beállítást és törölni a szöveges keresési feltételeket?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "A lerakat szöveges keresési feltételeinek eltávolítása és a lerakat tulajdonság kiválasztásának módosítása hatással van a lerakatok közötti keresési feltételekre. \n\nA szöveges keresési feltételt törölni kell a lerakatok közötti keresési feltételekből a keresés futtatásához. Továbbá a tulajdonság keresési feltételek leképezéseket tartalmaznak, ahol szerepelnek olyan tulajdonságok, amelyeket el kíván távolítani. Az eltávolítani kívánt tulajdonságokat tartalmazó leképezéseket törölni kell. Az ilyen leképezéseket tartalmazó tulajdonság keresési feltételeket törölni kell a keresés futtatásához.\n\nKívánja frissíteni a lerakat beállításokat és törölni a szöveges keresési feltételeket, leképezéseket és tulajdonság keresési feltételeket?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Szöveges keresési feltételek kizárása ehhez a lerakathoz érinti a lerakatok közötti keresési feltételeket.\n\nA keresés futtatásához minden olyan tulajdonság keresési feltétel törölni kell, amely tartalmaz egy leképezést a lerakat tulajdonságaival. A szöveges keresési feltételek törölhetők a lerakatok közötti keresési feltételekből a keresés futtatásához.\n\nFrissíti a lerakat beállításait és törli a keresési feltételeket?",
		unified_search_warn_remove_mapping: "A leképezés eltávolítása hatással van a keresési feltételekre. \n\nA leképezést használó keresési feltételeket törölni kell a keresés futtatásához.\n\nKívánja frissíteni a leképezést és törölni a keresési feltételeket?",
		unified_search_warn_update_mapping: "A leképezés módosítása hatással van a keresési feltételekre.\n\nA leképezést használó keresési feltételeket törölni kell, hogy biztosítsa, a keresés nem tartalmaz érvénytelen operátorokat vagy érvénytelen értékeket.\n\nKívánja frissíteni a leképezést és törölni a keresési feltételeket?",
		unified_search_warn_update_mapping_not_searchable: "A leképezés módosítása hatással van a keresési feltételekre.\n\nAmikor a leképezett tulajdonságok mindegyike csak-megjelenítés, nem használhatja a leképezést a keresési feltételekben. A leképezést használó keresési feltételeket törölni kell a lekérdezés futtatásához.\n\nKívánja frissíteni a leképezést és törölni a keresési feltételeket?",
		unified_search_warn_update_mapping_box_searchable: "A leképezés módosítása hatással van a keresési feltételekre.\n\nA keresési feltételek már többször is tartalmazzák ezt a leképezést, és ha hozzáadja a(z) ${0} tulajdonságot a(z) ${1} lerakatból, akkor a keresési feltételek a(z) ${0} tulajdonságot túl sokszor tartalmazzák. A leképezést használó keresési feltételeket törölni kell a lekérdezés futtatásához.\n\nKívánja frissíteni a leképezést és törölni a keresési feltételeket?",
		unified_search_details: "Lerakatok közötti keresés részletei",
		unified_search_fixed_value_property: "Rögzített értékű tulajdonság",
		unified_search_required_property: "Kötelező tulajdonság",
		unified_search_display_only_property: "Csak-megjelenítés tulajdonság",
		unified_search_missing_required_properities: "A keresés nem menthető vagy futtatható.<br/>A következő tulajdonságok kötelezőek: ${0} A tulajdonságokat tartalmaznia kell egy leképezésnek, és hozzá kell adnia az értékkel ellátott tulajdonságokat a keresési feltételhez.",
		unified_search_property_repostory: "${0} (Lerakat: ${1})",
		unified_search_builder_no_mappings: "A keresés nem futtatható.<br/>Létre kell hoznia egy tulajdonságleképezést, és bele kell azt foglalnia az <b>Eredmények megjelenítése</b> elembe, hogy a keresés megjeleníthesse a találatokat.",
		unified_search_builder_insufficient_criteria_to_run: "A keresés nem futtatható.<br/>A keresési feltételek nem tartalmaznak szöveges keresési feltételeket vagy tulajdonságértékeket a következő lerakatokhoz: ${0} A keresésbe foglalt minden lerakat esetén meg kell adnia szöveges keresési feltételeket, vagy létre kell hoznia egy tulajdonságleképezést, belefoglalni azt a tulajdonság feltételekbe, és meg kell adnia tulajdonságértéket.",
		unified_search_builder_insufficient_criteria_to_save: "A keresés nem menthető.<br/>A keresés nem tartalmaz keresési feltételeket a következő lerakatokhoz: ${0} A keresésbe foglalt minden lerakat esetén el kell végeznie a következők egyikét:<ol><li>Hozzon létre egy tulajdonságleképezést, és foglalja bele azt a tulajdonság feltételekbe.</li><li>Módosítsa a lerakatot úgy, hogy szöveges keresési feltételeket tartalmazzon, hozzon létre egy tulajdonságleképezést, és foglalja bele azt az <b>Eredmények megjelenítése</b> elembe.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "A keresés nem futtatható.<br/>A keresésből kihagyott minden lerakat esetén legalább egy tulajdonságértéket meg kell adnia. Megadhat értékeket például a következő tulajdonságokhoz: ${0}",
		unified_search_runtime_insufficient_criteria_text: "A keresés nem futtatható.<br/>Szöveges keresési feltétel szükséges.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "A keresés nem futtatható.<br/>A keresésből kihagyott minden lerakat esetén legalább egy tulajdonságértéket meg kell adnia, vagy be kell írnia szöveges keresési feltételeket. Megadhat értékeket például a következő tulajdonságokhoz: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "A keresés nem futtatható.<br/>Szöveges keresési feltétel szükséges. A keresésből kihagyott minden lerakat esetén legalább egy tulajdonságértéket meg kell adnia, vagy be kell írnia szöveges keresési feltételeket. Megadhat értékeket például a következő tulajdonságokhoz: ${0}",
		unified_search_invalid_criteria: "A keresés érvénytelen feltételeket tartalmaz, amelyek megakadályozzák a keresés futását.<br/>Az érvénytelen feltételek eltávolításra kerültek. Azonban mentenie kell a keresés módosításait mielőtt futtathatná a keresést. Ha nem kívánja menteni a módosításokat, akkor zárja be a keresést.<br/><br/>A következő elemek eltávolításra kerültek vagy módosítva lettek: ${0}",
		unified_search_invalid_fixed_values: "A keresés nem menthető vagy futtatható.<br/>A következő keresési feltétel érvénytelen rögzített értékekkel rendelkezik:${0} Tegye a következők egyikét a probléma megoldása érdekében:<ul><li>Távolítsa el az érvénytelen értékeket tartalmazó keresési feltételt</li><li>Szerkessze azokat a leképezéseket, amelyek rögzített értékkel rendelkező IBM Content Manager OnDemand tulajdonságot tartalmaznak a tulajdonság eltávolítása érdekében.</li><li>Szerkessze azokat a leképezéseket, amelyek rögzített értékkel rendelkező IBM Content Manager OnDemand tulajdonságot tartalmaznak az összes tulajdonság kompatibilissé tétele érdekében. A leképezhető tulajdonságokkal kapcsolatos további információkért tekintse meg a További tudnivalók hivatkozást a tulajdonságleképezési ablak tetején lévő bevezető szövegben.</li></ul>",
		unified_search_cannot_add_properties: "Nem adhat hozzá tulajdonságokat ehhez a kereséshez.<br/>Az összes leképezett tulajdonság már szerepel a keresési feltételekben, és az egyes tulajdonságok csak egyszer adhatók hozzá a kereséshez.",
		unified_search_mapping_not_viewable: "A Box sablontulajdonságokat nem lehet megjeleníteni a keresési találatok között. Ha oszlopként szeretné hozzáadni ezt a leképezést, akkor legalább egy nem Box sablon tulajdonságot le kell képeznie. Például kiválaszthat egy tulajdonságot egy másik lerakatból.",

		unified_search_returned_more: "Legalább egy lerakat meghaladta a maximálisan engedélyezett eredményeket.",
		unified_search_partial_failure: "Legalább egy lerakat esetében hiba történt.",
		unified_search_partial_failure_and_returned_more: "Hiba történt legalább egy lerakat esetén, és legalább egy lerakat meghaladta a maximálisan engedélyezett eredményeket.",
		unified_search_see_analysis: "Találatok elemzésének megtekintése.",
		unified_search_analysis_intro_returned_more: "Minden egyes lerakat esetén, amelyek meghaladták a maximálisan engedélyezett eredményeket, próbálja meg finomítani a keresési feltételeket, hogy a keresés kevesebb eredményt adjon vissza. Vagy egy több lerakatot érintő keresés esetén futtathatja a keresést egyetlen lerakaton, hogy a maximálisan engedélyezettnél több eredményt kapjon vissza.",
		unified_search_analysis_intro_partial_failure: "Nézze meg a lerakat(ok) által visszaadott hibaüzenetet. Ha kell, oldja fel a hibákat és futtassa újra a lerakatok közötti keresést.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "A hibát mutató minden egyes lerakat esetén próbálja meg megoldani a problémát, majd futtassa újra a keresést.<br/><br/>Minden egyes lerakat esetén, amelyek meghaladták a maximálisan engedélyezett eredményeket, próbálja meg finomítani a keresési feltételeket, hogy a keresés kevesebb eredményt adjon vissza. Vagy egy több lerakatot érintő keresés esetén futtathatja a keresést egyetlen lerakaton, hogy a maximálisan engedélyezettnél több eredményt kapjon vissza.",
		unified_search_results_found: "Találatok",
		unified_search_maximum_allowed: "Maximálisan engedélyezett",
		unified_search_maximum_exceeded: "Maximális szám túllépése",

		unified_search_mapping_rule_box: "Ez a tulajdonság nem adható hozzá a leképezéshez.<p>A(z) ${1} lerakatból származó ${0} tulajdonság már szerepel egy másik leképezésben, és az ebből a lerakatból származó kereshető tulajdonságok csak keresésenként egyszer foglalhatók bele.<br/>Válasszon ki egy másik tulajdonságot, amelyet hozzáad a leképezéshez.</p>",
		unified_search_mapping_rule_repository: "A tulajdonság nem adható hozzá a leképezéshez.<br/>A leképezés már tartalmaz egy tulajdonságot a ${0} lerakatból. A leképezés egy lerakatból csak egy tulajdonságot tartalmazhat.<br/>Adjon hozzá tulajdonságot egy másik lerakatból, vagy hozzon létre egy új leképezést a kiválasztott tulajdonság számára.",
		unified_search_mapping_rule_data_type: "A tulajdonság nem adható hozzá a leképezéshez.<br/>${0} tulajdonság nem képezhető le ${1} tulajdonságra. Válasszon ki egy másik tulajdonságot a leképezéshez, vagy hozzon létre egy új leképezést a kiválasztott tulajdonsághoz.<br/>A leképezhető tulajdonságokkal kapcsolatos további információkért tekintse meg a További tudnivalók hivatkozást az ablak tetején lévő bevezető szövegben.",
		unified_search_mapping_rule_cardinality: "A tulajdonság nem adható hozzá a leképezéshez.<br/>A leképezésben levő összes tulajdonságnak támogatnia kell vagy az egyedülálló, vagy pedig a többszörös értékeket. A kiválasztott tulajdonság által a(z) ${0} támogatottak, és a leképezésben levő tulajdonságok által a(z) ${1} vannak támogatva.<br/>Adjon egy különböző tulajdonságot a leképezéshez, vagy hozzon létre egy új leképezést a kiválasztott tulajdonság számára.",
		unified_search_mapping_rule_fixed_value: "A tulajdonság nem adható hozzá a leképezéshez.<br/>A leképezés már tartalmaz egy rögzített értékű tulajdonságot. A leképezés csak egy egy rögzített értékű tulajdonságot tartalmazhat.<br/>Adjon egy különböző tulajdonságot a leképezéshez, vagy hozzon létre egy új leképezést a kiválasztott tulajdonság számára.",
		unified_search_mapping_rule_child_component: "A tulajdonság nem adható hozzá a leképezéshez.<br/>Utód komponenssel rendelkező tulajdonság nem képezhető le más tulajdonságokra. Ha azt akarja, hogy kereshessen erre a tulajdonságra, akkor hozzon létre egy új leképezést a kiválasztott tulajdonság számára.",
		unified_search_mapping_rule_operator_intersection: "A tulajdonság nem adható hozzá a leképezéshez.<br/>A leképezésben levő összes tulajdonságnak legalább egy operátora közös kell legyen. A ${0} tulajdonságnak azonban nincs közös operátora a leképezésben levő többi tulajdonsággal.<br/>Ha lehetséges, akkor válasszon egy különböző tulajdonságot. Ha mindenképpen a kiválasztott tulajdonságot kell beleértenie, akkor kérje a rendszeradminisztrátor segítségét a tulajdonsághoz társított operátorok szerkesztésében.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Speciális beállítások",
		advanced_search_options_intro: "További feltételek beállításainak megtétele.",
		advanced_search_options_editable: "Szerkeszthető",
		advanced_search_options_readonly: "Csak olvasás",
		advanced_search_options_required: "Kötelező",
		advanced_search_options_hidden: "Rejtett",
		advanced_search_options_property_editable:"A tulajdonság:",
		advanced_search_options_operators:"Műveleti jelek:",
		advanced_search_options_use_all:"Összes használata",
		advanced_search_options_use_selected:"Kiválasztott használata",
		advanced_search_options_operators_filtered: "Szűrési műveleti jelek",
		// Data types in lowercase
		data_type_boolean: "logikai",
		data_type_date: "dátum",
		data_type_time: "idő",
		data_type_timestamp: "időbélyeg",
		data_type_decimal: "tizedes érték",
		data_type_double: "lebegőpontos szám",
		data_type_short: "egész",
		data_type_integer: "egész",
		data_type_long: "egész",
		data_type_string: "szöveges karaktersorozat",
		data_type_string_alpha: "betűkből álló karaktersorozat",
		data_type_string_alphanum: "alfanumerikus karaktersorozat",
		data_type_string_ext: "kiterjesztett alfanumerikus karaktersorozat",
		data_type_string_num: "numerikus karaktersorozat",
		data_type_binary: "bináris",
		data_type_object: "objektum",
		data_type_guid: "globálisan egyedi azonosító",
		data_type_user: "felhasználók",
		data_type_child_component: "utód komponens",

		/* Print Dialog */
		print_title: "Nyomtatás",
		print_message: "Nyomtatás: ${0}",
		print_print_button: "Nyomtatás",
		print_clean_margins_button: "Összes beállítása 0-ra",
		print_type: "Nyomtató típusa:",
		print_printer_server_options: "Kiszolgáló nyomtatási beállítások",
		print_printer_properties: "Nyomtató tulajdonságai",
		print_printer_fax_properties: "Fax tulajdonságai",
		print_printer_name: "nyomtató neve:",
		print_fax_recipient: "Fogadó",
		print_fax_sender: "Küldő",
		print_copies: "másolatok:",
		print_local_orientation: "Tájolás",
		print_local_orientation_landscape: "Fekvő",
		print_local_orientation_portrait: "Álló",
		print_local_margins: "Margók",
		print_local_margins_top: "Felső",
		print_local_margins_bottom: "Alsó",
		print_local_margins_left: "Bal",
		print_local_margins_right: "Jobb",
		print_printer_server: "Kiszolgáló",
		print_printer_local: "Helyi",
		print_property_class: "Osztály:",
		print_property_routing: "Útválasztás:",
		print_property_pagedef: "Oldalmeghatározás",
		print_property_node: "Csomópont:",
		print_property_writer: "Író:",
		print_property_formdef: "Formátummeghatározás",
		print_property_printerid: "Cél:",
		print_property_forms: "Űrlapok:",
		print_property_faxnotes: "Jegyzetek:",
		print_property_faxcompany: "Cég:",
		print_property_faxnumber: "Faxszám:",
		print_property_faxname: "Név:",
		print_property_faxsendertelnumber: "Telefonszám:",
		print_property_faxcoverpage: "Fedőlap:",
		print_property_faxsubject: "Tárgy:",
		print_saveoptions: "Nyomtatási beállítások mentése",
		print_property_bannerpage: "Címoldal használata",
		print_print_with_info_fields: "Nyomtatás információs mezőkkel",
		print_field_from: "Feladó",
		print_field_to: "Funkció",
		print_invalid_value_class: "Az érvényes karakterek: A-Z és 0-9",
		print_invalid_value_pagedef: "Az érvényes karakterek a betűk és számok, továbbá a következők: @, # és $",
		print_invalid_value_writer: "Az érvényes karakterek a betűk és számok, továbbá a következők: @, # és $",
		print_invalid_value_formdef: "Az érvényes karakterek a betűk és számok, továbbá a következők: @, # és $",
		print_invalid_value_forms: "Az érvényes karakterek a betűk és számok, továbbá a következők: @, # és $",
		print_invalid_value_margin: "Az érvényes számok határai ${0} és ${1}",
		print_status_message: "${0} dokumentum lett elküldve a(z) ${1} nyomtatóra.",

		print_applet_init_error: "A nyomtatás kisalkalmazás nem indítható.",
		print_applet_init_error_explanation: "Ezt a problémát az alábbiak okozhatják: <br/><br/><ul><li>A Java futási környezet (JRE) nincs telepítve a munkaállomáson.</li><li>A Java bedolgozó nem engedélyezett a webböngészőben.</li><li>A munkaállomásán meglévő JRE változat nem kompatibilis az IBM Content Navigator változattal.</li><li>A böngésző túllépte az időkorlátot, miközben a nyomtatási kisalkalmazás indítására várt.</li></ul>",
		print_applet_init_error_userResponse: "A JRE-vel kapcsolatos probléma megoldása érdekében a következőket teheti:<br/><br/><ol><li>Győződjön meg róla, hogy a JRE telepítve van a munkaállomásán.</li><li>Győződjön meg róla, hogy a Java bedolgozó engedélyezve van a webböngészőben.</li><li>Győződjön meg róla hogy a munkaállomáson a JRE változat kompatibilis az IBM Content Navigator alkalmazás, majd próbálkozzon újra. A támogatott változatok az IBM szoftvertámogatási webhelyen az <i>IBM Content Navigator hardver és szoftver előfeltételei</i> dokumentumban találhatók.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Fedőlap",
		daeja_print_selected_documents_title: "Kiválasztott dokumentumok",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Összes keresési feltételnek megfelelő",
		match_any_criteria: "Bármely keresési feltételnek megfelelő",
		include_subfolders_summary: "${0} (almappák tartalmazása)",
		browse_button: "Böngészés&hellip;",
		search_for: "Következő keresése:",
		object_type_documents: "Dokumentumok",
		object_type_folders: "Mappák",
		object_type_documents_folders: "Dokumentumok és mappák",
		object_type_web_links: "Webes hivatkozások",
		object_type_documents_folders_web_links: "Dokumentumok, mappák és webes hivatkozások",

		/* SelectSearchFolderDialog */
		search_in: "Keresés itt:",
		include_subfolders: "Almappákban is",

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
		locked_item_icon_title: "${0} által zárolva",
		checked_out_icon_title: "${0} által kiiktatva",
		major_minor_version_icon_title: "Főváltozat alváltozatokkal",
		suspended_icon_title: "A munkafolyamat fel van függesztve.",
		on_hold_icon_title: "Felfüggesztve",
		has_notes_icon_title: "Rendelkezik megjegyzéssel",
		record_icon_title: "Rekordként van deklarálva",
		compound_document_icon_title: "Összetett dokumentum",
		validateTemplate_icon_title: "Szükséges a csoportterület sablon érvényesítése",
		offlineTemplate_icon_title: "Csoportterület sablon offline",
		offlineTeamspace_icon_title: "A csoportterület offline",
		pending_delete_icon_title: "A csoportterület törlése függőben van",
		delete_error_icon_title: "A csoportterület nem törölhető",
		defaultTemplate_icon_title: "Alapértelmezett csoportterület sablon",
		teamspace_icon_title: "Csoportterület",
		teamspace_template_icon_title: "Csoportterület sablon",
		has_bookmark_icon_title: "Rendelkezik könyvjelzővel",
		read_only_icon_title: "Csak olvasás",
		no_results_were_found: "Eredmény nem található.",
		folder_is_empty: "A mappa üres.",
		no_checked_out_items: "Nincs egyetlen kiiktatott elme sem.",
		inbasket_is_empty: "A kosár üres.",
		worklist_is_empty: "A feladatlista üres.",
		tracker_milestone_completed: "Kész",
		stepprocessor_attachments_title: "Tartalom",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Elemek zárolása",
		unlock_items: "Elemek zárolásának feloldása",
		checkin_item: "Elem beiktatása",

		/* Help */
		learn_more: "További tudnivalók",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Csoportterület megnyitása",
		repository_tab_createWorkspace: "Új csoportterület",
		repository_tab_createWorkspaceTemplate: "Új csoportterület sablon",
		repository_tab_DefaultTemplate: "Alapértelmezett",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Ez a feladat dokumentumokat másol.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Nem rendelkezik szerkesztési jogosultságokkal a kijelölt csoportterületi sablonhoz.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Biztosan törölni kívánja a(z) ${0} csoportterületet?<br><br>Csak az a dokumentumok maradnak a lerakatban, amelyek a lerakat más mappáiban vannak iktatva. A csak a csoportterületen iktatott dokumentumok törlésre kerülnek.",
		teamspaceDecommissionLabel: "Törlés:",
		teamspaceDecommissionDescription: "A csoportterület törlése eltávolítja ezt a csoportterületet a kiszolgálóról: jelezze a csoportterület termékek kezelésének módját.",
		teamspaceDecommissionOptions: "Csoportterület beállítások törlése",
		teamspaceDecommissionDeleteAll: "Összes csoportterület termék törlése",
		teamspaceDecommissionReFileAll: "Összes csoportterület termék finomítása",
		teamspaceDecommissionReFileDestination: "Áthelyezés ide:",
		teamspaceDecommissionReFileIn: "Finomítás itt:",
		teamspaceDecommissionTaskName: "Csoportterület törlési feladat",
		teamspaceDecommissionTaskDescription: "Ez a feladat töröl egy csoportterületet a lerakatból.",
		teamspaceDecommissionDeletionStarted: "A csoportterület ütemezve lett törlésre.",
		teamspaceDecommissionDeletionConnectionFailed: "A csoportterület törlésére szolgáló feladat nem futtatható, mert nem tartozik a lerakathoz. Győződjön meg róla, hogy a lerakatadminisztrátor hitelesítési adatai helyesek.",

		teamspace_edit_properties_notsupported: "A csoportterületek tulajdonságai csak csoportterület nézetből szerkeszthetők.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "A csoportterület offline és csak a csoportterület tulajdonosa tudja megnyitni",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokumentum:",
		workspace_validation_folder: "Mappa:",
		workspace_validation_ets: "A következő adatbeviteli sablonok nem érhetők el ebben a lerakatban, és eltávolításra kerültek a kiválasztott adatbeviteli sablonok listájából:",
		workspace_validation_classes: "A következő osztályok nem érhetők el ebben a lerakatban, és eltávolításra kerültek a kiválasztott osztályok listájából:",
		workspace_validation_searches: "A következő keresések nem érhetők el ebben a lerakatban, és eltávolításra kerültek a kiválasztott keresések listájából:",
		workspace_validation_docs_folders: "A következő dokumentumok és mappák nem érhetők el ebben a lerakatban, és eltávolításra kerültek a beleértett elemek listájából:",
		workspace_change_template_confirmation_question: "Ha kiválaszt egy másik sablont, akkor a módosítások elvesznek. Kívánja folytatni?\n",
		workspace_delete_item_confirmation_question: "Eltávolítja a(z) ${0} elemet?\n",
		workspace_delete_role_confirmation_question: "Eltávolítja a(z) ${0} szerepet?\n",
		workspace_delete_confirmation_question: "Csoportterület törlésekor csak a csoportterület tároló törlődik. A csoportterületben levő mappák és dokumentumok a lerakatban maradnak, és keresés során megtalálhatók. A csoportterület tartalmának törléséhez először törölje a csoportterületben levő elemeket, majd aztán törölje a csoportterületet.<br><br>Törli a(z) ${0} csoportterületet?",
		workspacebuilder_instance_template_name_header: "Csoportterület sablon neve",
		workspacebuilder_instance_template_description_header: "Leírás",

		workspacebuilder_template_tooltip_name: "A sablonnév nem tartalmazhatja a következő karaktereket:  \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "A csoportterület neve nem tartalmazhatja a következő karaktereket: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Adjon meg egy rövid leírást, amely lehetővé teszi a felhasználók számára a megfelelő sablon kiválasztását a sablonlistából. Ez tartalmazhat például információkat a célközönségről vagy a sablon használatáról.",
		workspacebuilder_instance_tooltip_description: "Adjon meg egy rövid leírást, amely lehetővé teszi a felhasználók számára a csoportterület megkülönböztetését a többi csoportterülettől.",

		workspacebuilder_template_edit_properties_pane: "Csoportterület sablon szerkesztése",
		workspacebuilder_instance_properties_pane: "Csoportterület meghatározása",
		workspacebuilder_template_properties_pane: "Csoportterület sablon meghatározása",

		workspacebuilder_instance_security_pane: "Csoportterület biztonság beállítása",
		workspacebuilder_template_security_pane: "Sablon biztonság beállítása",

		workspacebuilder_layout_pane: "Elrendezés kiválasztása",
		workspacebuilder_search_templates_pane: "Keresések kiválasztása",
		workspacebuilder_document_folders_pane: "Mappák és dokumentumok tartalmazása",
		workspacebuilder_doctypes_entryTemplates_pane: "Osztályok vagy beviteli sablonok kiválasztása",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Osztályok kiválasztása",
		workspacebuilder_security: "Csoportterület biztonság",

		workspacebuilder_roles_pane: "Szerepek kiválasztása",
		workspacebuilder_security: "Biztonság",

		workspacebuilder_properties_templates: "Rendelkezésre álló sablonok:",
		workspacebuilder_available_templates: "Rendelkezésre álló keresések:",
		workspacebuilder_selected_templates: "Kijelölt keresések?",
		workspacebuilder_templates_name: "Név keresése",

		workspacebuilder_available_entryTemplates: "Rendelkezésre álló beviteli sablonok:",
		workspacebuilder_selected_entryTemplates: "Kijelölt beviteli sablonok:",

		workspacebuilder_item_classes: "Rendelkezésre álló osztályok:",
		workspacebuilder_item_classes_selected: "Kijelölt osztályok:",
		workspacebuilder_properties_select_template: "A csoportterülethez használandó sablon kiválasztása.",
		workspacebuilder_template_properties: "Csoportterület sablon meghatározása",
		workspacebuilder_instance_properties: "Csoportterület meghatározása",
		workspacebuilder_template_introText: "A navigációban található beállítások segítségével adja meg azokat a közös összetevőket, amelyeket szeretné, ha a sablonból létrehozott minden csoportterület tartalmazna. Ha elkészült, akkor a <b>Befejezés</b> gombra kattintva tegye elérhető a sablont a többi felhasználó számára, akik új csoportterületek létrehozására használhatják azt.",
		workspacebuilder_instance_introText: "A munkacsoportok a csoportterületeket adott dokumentumhalmazok megosztására és kezelésére használják. Adjon meg olyan nevet és leírást a csoportterület számára, amely alapján a felhasználók megkülönböztethetik azt a többi csoportterülettől. A csoportterületet további keresések, osztályok vagy beviteli sablonok, dokumentumok és mappák hozzáadásával szabhatja személyre.",

		workspacebuilder_template_search_template_introText: "Válassza ki azokat az alapértelmezett kereséseket, amelyeket a sablonból létrehozott összes csoportterületbe fel kíván venni. Ha nincsenek kiválasztva keresések, akkor a csoportterület felhasználói az összes olyan keresést láthatják, amelyekhez hozzáféréssel rendelkeznek. A megfelelő jogosultsággal a felhasználók megoszthatnak és felvehetnek kereséseket a csoportterületen.",
		workspacebuilder_instance_search_template_introText: "Vegyen fel olyan kereséseket, amelyek segítségével a felhasználók hatékonyabban végezhetik feladataikat. Ha nincsenek keresések hozzáadva, akkor a csoportterület felhasználói az összes keresést látni fogják, amelyekhez jogosultságokkal rendelkeznek. A megfelelő engedélyekkel rendelkező felhasználók felvehetnek és meg is oszthatnak kereséseket a csoportterületen.",

		workspacebuilder_template_roles_introText: "A csoportterület felhasználók szerepekhez vannak hozzárendelve. A szerepek határozzák meg a felhasználók által végrehajtható feladatokat. Az engedélyezett feladatokat az egyes szerepek melletti ikonokra kattintva tekintheti meg. Válassza a csoportterületnek megfelelő szerepeket.",
		workspacebuilder_template_roles_modify_introText: "Módosíthatja a csoportterületben levő szerepekhez társított jogosultságokat. Értesítenie kell a csoportterület tagjait, amikor a jogosultságaik megváltoznak.",

		workspacebuilder_template_roles_header_name: "Szerep neve",

		workspacebuilder_template_folders_introText: "Válassza ki az alapértelmezett dokumentumokat és mappákat, amelyeket a sablonból létrehozott összes csoportterületbe fel kíván venni. A dokumentumokat hivatkozásként vagy példányként adhatja hozzá. Használjon hivatkozásokat az olyan dokumentumokhoz, amelyekből nem szeretné, ha több példány létezne, mint például az irányelvek és eljárások. Hozzon létre példányokat az olyan dokumentumokhoz, amelyeket a felhasználók módosítani fognak, mint például a sablonok és az űrlapok.",
		workspacebuilder_instance_folders_introText: "Válassza ki az alapértelmezett dokumentumokat és mappákat, amelyeket a csoportterületbe fel kíván venni. A dokumentumokat hivatkozásként vagy példányként adhatja hozzá. Használjon hivatkozásokat az olyan dokumentumokhoz, amelyekből nem szeretné, ha több példány létezne, mint például az irányelvek és eljárások. Hozzon létre példányokat az olyan dokumentumokhoz, amelyeket a felhasználók módosítani fognak, mint például a sablonok és az űrlapok.",

		workspacebuilder_template_roles_introText: "Adja meg azokat az szerepeket, amelyeket a sablonból létrehozott összes csoportterületbe fel kíván venni. Új szerepeket is létrehozhat, amelyeket más csoportterület sablonok létrehozásához használhat.",
		workspacebuilder_instance_users_introText: "A csoportterületen minden felhasználó hozzá van rendelve legalább egy szerephez, amely meghatározza az által végezhető feladatokat. Adjon hozzá felhasználókat a csoportterülethez és rendeljen hozzá szerepeket a felhasználókhoz.",

		workspacebuilder_instance_navigation_pane_title: "Csoportterület készítő",
		workspacebuilder_template_navigation_pane_title: "Csoportterület sablon készítő",

		workspacebuilder_roles_roles_nopermissions: "A(z) {0} szerephez nincsenek kiválasztva jogosultságok.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Kijelölt szerepek:",
		workspacebuilder_roles_available_roles: "Elérhető szerepek:",
		workspacebuilder_roles_privilege_header: "Engedély",
		workspacebuilder_roles_select_role: "Szerep kiválasztása",
		workspacebuilder_roles_select_permission: "Engedély kiválasztása",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Már létezik {0} nevű szerep. A szerephez egyedi nevet kell megadnia. ",
		workspacebuilder_roles_edit_dialog_role_name: "Szerep neve:",
		workspacebuilder_roles_edit_dialog_role_description: "Szerep leírás:",
		workspacebuilder_roles_edit_dialog_title_new: "Új szerep",
		workspacebuilder_roles_edit_dialog_title_edit: "Szerep módosítása",

		workspacebuilder_roles_privileges_header: "A(z) {0} szerep jogosultságai:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dokumentum jogosultságok:",
		workspacebuilder_roles_priv_group_folder: "Mappa jogosultságok:",
		workspacebuilder_roles_priv_group_teamspace: "Csoportterület jogosultságok:",
		workspacebuilder_roles_priv_group_item: "Dokumentum és mappa jogosultságok:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Jogosultságok kezelése",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Ezzel a jogosultsággal a felhasználók kezelhetik a dokumentumok és mappák elérését a csoportterületen. A jogosultság birtokában a felhasználók törölhetnek, szerkeszthetik a tulajdonságokat, almappákat hozhatnak létre, stb.",

		workspacebuilder_roles_priv_deleteItems: "Törlés",
		workspacebuilder_roles_plbl_deleteItems: "Ezzel a jogosultsággal a felhasználók dokumentumokat és mappákat törölhetnek a csoportterületen.",

		workspacebuilder_roles_priv_createItems: "Létrehozás",
		workspacebuilder_roles_plbl_createItems: "Ezzel a jogosultsággal a felhasználók dokumentumokat és mappákat hozhat létre a csoportterületen.",

		workspacebuilder_roles_priv_viewItemProperties: "Tulajdonságok megtekintése",
		workspacebuilder_roles_plbl_viewItemProperties: "Ezzel a jogosultsággal a felhasználók a csoportterületen található dokumentumok és mappák tulajdonságait (a rendszertulajdonságokat is beleértve) jeleníthetik meg.",

		workspacebuilder_roles_priv_modifyItemProperties: "Tulajdonságok szerkesztése",
		workspacebuilder_roles_plbl_modifyItemProperties: "Ezzel a jogosultsággal a felhasználók a csoportterületen található dokumentumok és mappák tulajdonságait szerkeszthetik.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Mappaengedélyek kezelése",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Az ezzel a jogosultsággal rendelkező felhasználók felügyelhetik a csoportterületen található mappák elérését. A jogosultság birtokában a felhasználók törölhetnek mappákat, szerkeszthetik azok tulajdonságait, almappákat hozhatnak létre, stb.",

		workspacebuilder_roles_priv_deleteFolders: "Mappák törlése",
		workspacebuilder_roles_plbl_deleteFolders: "Ezzel a jogosultsággal a felhasználók mappákat törölhetnek a csoportterületen.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Mappa tulajdonságainak szerkesztése",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Ezzel a jogosultsággal a felhasználók a csoportterületen található mappák tulajdonságait szerkeszthetik.",

		workspacebuilder_roles_priv_createSubfolders: "Almappák létrehozása",
		workspacebuilder_roles_plbl_createSubfolders: "Ezzel a jogosultsággal a felhasználók almappákat hozhatnak létre a csoportterületen.",

		workspacebuilder_roles_priv_fileInFolders: "Hozzáadás mappákhoz",
		workspacebuilder_roles_plbl_fileInFolders: "Ezzel a jogosultsággal a felhasználók a csoportterületen található mappákból vehetnek dokumentumokra mutató hivatkozásokat.",

		workspacebuilder_roles_priv_viewFolderProperties: "Mappa tulajdonságainak megjelenítése",
		workspacebuilder_roles_plbl_viewFolderProperties: "Ezzel a jogosultsággal a felhasználók a csoportterületen található mappák tulajdonságait (a rendszertulajdonságokat is beleértve) jeleníthetik meg.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Dokumentumengedélyek kezelése",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Az ezzel a jogosultsággal rendelkező felhasználók felügyelhetik a csoportterületen található dokumentumok elérését. A jogosultság birtokában a felhasználó engedélyezheti más felhasználók a dokumentumok törlését, a dokumentum tulajdonságainak szerkesztését, stb.",

		workspacebuilder_roles_priv_deleteDocuments: "Dokumentum törlése",
		workspacebuilder_roles_plbl_deleteDocuments: "Ezzel a jogosultsággal a felhasználók dokumentumokat törölhetnek a csoportterületen.",

		workspacebuilder_roles_priv_promoteVersions: "Verziószámok előléptetése",
		workspacebuilder_roles_plbl_promoteVersions: "Ezzel a jogosultsággal a felhasználók új verziószámot rendelhetnek hozzá a csoportterületen található dokumentumokhoz.",

		workspacebuilder_roles_priv_modifyContent: "Dokumentumok szerkesztése",
		workspacebuilder_roles_plbl_modifyContent: "Ezzel a jogosultsággal a felhasználók a csoportterületen található dokumentumok tartalmát szerkeszthetik.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Dokumentum tulajdonságainak szerkesztése",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Ezzel a jogosultsággal a felhasználók a csoportterületen található dokumentumok tulajdonságait szerkeszthetik.",

		workspacebuilder_roles_priv_viewContent: "Dokumentumok megtekintése",
		workspacebuilder_roles_plbl_viewContent: "Ezzel a jogosultsággal a felhasználók dokumentumokat jeleníthetnek meg a csoportterületen.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Dokumentumtulajdonságok megjelenítése",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Ezzel a jogosultsággal a felhasználók a csoportterületen található dokumentumok tulajdonságait (a rendszertulajdonságokat is beleértve) jeleníthetik meg.",

		workspacebuilder_roles_priv_addNewSearches: "Keresések hozzáadása",
		workspacebuilder_roles_plbl_addNewSearches: "Ezzel a jogosultsággal a felhasználók kereséseket adhatnak hozzá a csoportterülethez. A keresés más felhasználók számára alapértelmezésben nem elérhető.",

		workspacebuilder_roles_priv_createNewSearches: "Keresések létrehozása",
		workspacebuilder_roles_plbl_createNewSearches: "Ezzel a jogosultsággal a felhasználók kereséseket indíthatnak, de nem menthetik a kereséseket. Ha a felhasználók nem rendelkeznek ezzel a jogosultsággal, akkor nem adhatnak a csoportterülethez olyan dokumentumokat, amelyek már a lerakatban foglalnak helyet.",

		workspacebuilder_roles_priv_shareSearches: "Keresések megosztása",
		workspacebuilder_roles_plbl_shareSearches: "Ezzel a jogosultsággal a felhasználók az általuk létrehozott kereséseket oszthatják meg a csoportterület más felhasználóival.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Osztályok és beviteli sablonok kezelése",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Ezzel a jogosultsággal a felhasználók osztályokat és beviteli sablonokat adhatnak hozzá vagy távolíthatnak el a csoportterületről.",

		workspacebuilder_roles_priv_addRemoveClasses: "Osztályok kezelése",
		workspacebuilder_roles_plbl_addRemoveClasses: "Ezzel a jogosultsággal a felhasználók osztályokat adhatnak hozzá vagy távolíthatnak el a csoportterületről.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Csoportterület felhasználóinak kezelése",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Ezzel a jogosultsággal a felhasználók felhasználókat és csoportokat adhatnak hozzá vagy távolíthatnak el a csoportterületről. Ezen felül felügyelhetik, hogy a felhasználók mely szerepkörökhöz legyenek hozzárendelve.",

		workspacebuilder_roles_priv_modifyRoles: "Szerepek módosítása",
		workspacebuilder_roles_plbl_modifyRoles: "Az ezzel a jogosultsággal rendelkező tulajdonosok módosíthatják a csoportterület szerep jogosultságait. Ez a jogosultság kizárólag tulajdonosok számára elérhető.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Felhasználók kiválasztása",
		workspacebuilder_users_add_users_and_groups_button: "Felhasználók és csoportok hozzáadása...",
		workspacebuilder_users_users_or_group_header: "Felhasználó és csoport",
		workspacebuilder_users_roles_header: "Szerepek",

		workspacebuilder_users_role_header: "Szerep",
		workspacebuilder_users_role_no_permissions: "Ennek a szerepnek nincsenek jogosultságai",
		workspacebuilder_users_available_roles_label: "Elérhető szerepek:",
		workspacebuilder_users_selected_users_and_groups_label: "Kiválasztott felhasználók és csoportok:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "A csoportterület nem menthető. Meg kell adnia legalább egy tulajdonost a csoportterülethez.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "A csoportterület nem menthető. Minden felhasználóhoz hozzá kell rendelni egy szerepet.",
		// end of select users

		workspacebuilder_search_templates: "Keresések kiválasztása",
		workspacebuilder_search_add: "Keresés hozzáadása",
		workspacebuilder_properties_workspaceName: "Csoportterület neve:",
		workspacebuilder_properties_templateName: "Sablon neve:",
		workspacebuilder_properties_workspaceDescription: "Csoportterület leírása:",
		workspacebuilder_properties_templateDescription: "Sablon leírása:",
		workspacebuilder_properties_workspaceTemplate: "Kijelölt sablon:",
		workspacebuilder_properties_security: "Sablon megosztása a következővel:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Áthelyezés csoportterületről:",
		moveTeamspaceDocuments_security: "Dokumentum megosztása a következővel:",
		moveTeamspaceDocuments_security_change: "Adja meg a kiválasztott elemek egyéni biztonságát",
		moveTeamspaceDocuments_item_type_level: "Nem választhatja ki a kiválasztott elemek biztonságának felülbírálása lehetőséget, mivel a kiválasztott elem osztálya csak osztály szintű biztonság használatára van beállítva",
		moveTeamspaceDocuments_security_inherit: "Biztonság öröklése a cél mappából",
		moveTeamspaceDocuments_file_info_text: "Elemeket átmozgathat egy csoportterületről egy másikra vagy egy mappába.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Nem rendelkezik megfelelő jogosultsággal az elemek áthelyezéséhez a kiválasztott mappába.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Nem rendelkezik megfelelő jogosultsággal az elemek áthelyezéséhez a csoportterületről.",
		moveTeamspaceDocuments_move_mixed_items: "A kiválasztott elemek biztonsága nem bírálható felül. Az elemek némelyikét nem a csoportterület felügyeli. Csak a csoportterület által kezelt elemek biztonságát bírálhatja felül.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Meg kell adnia a csoportterület nevét.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Meg kell adnia a csoportterület sablon nevét.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "A csoportterület neve nem tartalmazhatja a következő karaktereket: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "A sablonnév nem tartalmazhatja a következő karaktereket:  \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Hivatkozás dokumentumra",
		workspacebuilder_folders_makeDocCopy: "Dokumentum másolása",
		workspacebuilder_folders_newfolder: "Új mappa",
		workspacebuilder_folders_local_drive: "Helyi könyvtárból",
		workspacebuilder_folders_from_repo: "Lerakatból",
		workspacebuilder_folders_add_doc: "Dokumentum hozzáadása",
		workspacebuilder_folders_grid_name: "Név",
		workspacebuilder_folders_props: "Tulajdonságok",
		workspacebuilder_folders_remove: "Eltávolítás",
		workspacebuilder_folders_delete: "Törlés",
		workspacebuilder_folders_adddoc_local: "Dokumentum hozzáadása dokumentum meghajtóról",
		workspacebuilder_folders_adddoc_repo: "Dokumentum hozzáadása lerakatból",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "A megadott mappanév már létezik. Adjon meg egy eltérő mappanevet.",

		workspacebuilder_classes_title: "Osztályok vagy beviteli sablonok kiválasztása",
		workspacebuilder_classes_title_cm: "Osztályok kiválasztása",
		workspacebuilder_classes_template_introText: "Adja meg, hogy az adott sablonból létrehozott csoportterületek osztályok vagy beviteli sablonok segítségével adják hozzá a dokumentumokat a lerakathoz. Ha nincsenek kiválasztva osztályok, akkor a csoportterület felhasználói az összes osztályt láthatják, amelyekhez hozzáféréssel rendelkeznek.  A felhasználó módosíthatja az osztályok és beviteli sablonok listáját, ha ehhez megvan a megfelelő jogosultsága.",
		workspacebuilder_classes_template_introText_cm: "Válassza ki azokat az osztályokat, amelyek segítségével a felhasználók dokumentumokat adhatnak hozzá a lerakathoz. Ha nincsenek osztályok kiválasztva, akkor a csoportterület felhasználói az összes osztályt látni fogják, amelyekhez hozzáféréssel rendelkeznek. A felhasználók módosíthatják az osztályok listáját, ha ehhez megvan a megfelelő jogosultságuk.",
		workspacebuilder_classes_instance_introText: "Válassza ki azokat az osztályokat vagy beviteli sablonokat, amelyek segítségével a felhasználók dokumentumokat adhatnak hozzá a lerakathoz. Ha nincsenek osztályok kiválasztva, akkor a csoportterület felhasználói az összes osztályt látni fogják, amelyekhez jogosultságokkal rendelkeznek. A felhasználók módosíthatják az osztályok és beviteli sablonok listáját, ha ehhez megvan a megfelelő jogosultságuk.",
		workspacebuilder_classes_instance_introText_cm: "Válassza ki azokat az osztályokat, amelyek segítségével a felhasználók dokumentumokat adhatnak hozzá a lerakathoz. Ha nincsenek osztályok kiválasztva, akkor a csoportterület felhasználói az összes osztályt látni fogják, amelyekhez jogosultságokkal rendelkeznek. A felhasználók módosíthatják az osztályok listáját, ha ehhez megvan a megfelelő jogosultságuk.",
		workspacebuilder_classes_selection: "Osztályok kiválasztása",
		workspacebuilder_classes_list: "Rendelkezésre álló osztályok:",
		workspacebuilder_classes_columns_default: "Alapértelmezett",
		workspacebuilder_classes_columns_className: "Osztály neve",
		workspacebuilder_classes_type_classes: "Dokumentumok hozzáadása osztályok segítségével",
		workspacebuilder_classes_type_classes_tooltip: "Az osztályok társított tulajdonságokat tartalmaznak, hogy a dokumentumok megtalálhatóak legyenek későbbi felhasználás céljából.",
		workspacebuilder_classes_type_entryTemplates: "Dokumentumok hozzáadása beviteli sablonok segítségével",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Az adatbeviteli sablonok biztosítják, hogy az egyes dokumentumokhoz megadott információk következetesek legyenek, és előre meghatározott értékeket használnak.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Beviteli sablon neve",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Leírás",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Legalább egy adatbeviteli sablont hozzá kell adnia a csoportterülethez.",

		workspacebuilder_classes_new: "Új osztály",
		workspacebuilder_classes_add: "Osztály hozzáadása",
		workspacebuilder_entryTemplate_add: "Beviteli sablon hozzáadása",
		workspacebuilder_add_list: "Hozzáadás",
		workspacebuilder_makeDefault_list: "Legyen alapértelmezett",
		workspacebuilder_removeDefault_list: "Alapértelmezés eltávolítása",

		workspacebuilder_roles_title: "Szerepek kiválasztása",
		workspacebuilder_roles_title_modify: "Szerepek módosítása",

		workspacebuilder_selection_moveup: "Mozgatás felfelé",
		workspacebuilder_selection_movedown: "Mozgatás lefelé",
		workspacebuilder_selection_remove: "Eltávolítás",
		workspacebuilder_selection_add: "Hozzáadás",
		workspacebuilder_selection_create_new_search: "Új keresés...",
		workspacebuilder_selection_create_new_role: "Új szerep...",
		workspacebuilder_selection_make_role_available: "Elérhetővé tétel",
		workspacebuilder_selection_make_role_available_tooltip: "Megosztja a kiválasztott szerepet más sablonokkal. A szerep megosztásához legalább egy jogosultságot hozzá kell rendelnie a szerephez.",

		workspacebuilder_navigation_next: "Következő",
		workspacebuilder_navigation_finish: "Befejezés",
		workspacebuilder_navigation_validate: "Érvényesítés",
		workspacebuilder_navigation_previous: "Előző",
		workspacebuilder_navigation_cancel: "Mégse",
		workspacebuilder_navigation_customize: "Egyéni beállítások",

		workspacebuilder_search_dialog_title: "Keresés",
		workspacebuilder_dialog_close: "Bezárás",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Sablon elérhetősége:",
		workspace_properties_templateState_tooltip: "Tegye a sablont elérhetetlenné, ha meg kívánja akadályozni, hogy a felhasználók csoportterületeket hozzanak létre a sablon segítségével.",
		workspace_properties_dialog_title: "Sablontulajdonságok",
		workspace_properties_online_radio_option_label: "Elérhetővé tétel",
		workspace_properties_offline_radio_option_label: "Elérhetetlenné tétel",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Valóban megszakítja a módosítások mentése nélkül?",
		workspacebuilder_cancel_confirmation_button: "Igen",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Minden érvénytelen elem eltávolításra kerül a sablonból, és a sablon elérhetővé válik a felhasználók számára.  Szeretné érvényesíteni a csoportterület sablont?",
		workspacebuilder_validate_confirmation_button: "Igen",
		workspacebuilder_validate_confirmation_title: "Érvényesítés",

		/* Entry templates builder */
		entry_templates: "Adatbeviteli sablon kezelő",
		no_entry_templates_were_found: "Nincsenek adatbeviteli sablonok",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Szűrő",

		/* Roleselector widget */
		role_selector_name: "Szerepek:",

		/* User Group picker widget */
		directory_label: "Katalógus:",
		scope_label: "Következő keresése:",
		name_starts_with_label: "Név ezzel kezdődik",
		name_contains_label: "Név tartalmazza",
		display_name_contains_label: "A megjelenő név tartalmazza",
		starts_with_label: "Ezzel kezdődik:",
		available_label: "Elérhető:",
		available_heading: "Elérhető",
		selected_label: "Kijelölt:",
		selected_heading: "Kijelölve",
		available_repositories_label: "Elérhető lerakatok",
		selected_repositories_label: "Kiválasztott lerakatok",
		default_repository: "Alapértelmezett lerakat:",
		default_repository_placeholder: "Válasszon egy lerakatot",
		default_role_placeholder: "Válasszon egy szerepet",
		menu_label_placeholder: "Azonosító kiválasztása vagy megadása",
		default_repository_hover: "Adja meg, hogy melyik lerakat legyen alapértelmezésben kijelölve, amikor a felhasználók bejelentkeznek a webes ügyfélre erről a munkaasztalról.<br><br><b>Fontos:</b> Az alapértelmezett lerakat meghatározásához előbb lerakatokat kell felvennie a kijelölt lerakatlista munkaasztalra.",
		default_repository_workflow_hover: "<b>Ne feledje:</b> Csak a munkaasztalhoz konfigurált lerakatok esetében konfigurálhatók az alkalmazás-területek.",
		remove_label: "Eltávolítás",
		users_label: "Felhasználók",
		groups_label: "Csoportok",
		user_or_group_name_label: "Felhasználó vagy csoport neve:",
		user_or_group_name_hover: "Adjon meg egy felhasználónevet vagy csoportnevet, amely érvényes a lerakatra.  A név nincs érvényesítve.",
		user: "Felhasználó",
		group: "Csoport",
		name: "Név:",
		displayName: "Megjelenő név",
		display_name: "Megjelenő név:",
		shortName: "Rövid név:",
		distinguishedName: "Megkülönböztetett név:",
		search_tooltip: "Keresés",
		add_tooltip: "Hozzáadás",
		add_selected_tooltip: "Hozzáadás a kijelölt listához",
		remove_tooltip: "Eltávolítás",
		remove_selected_tooltip: "Eltávolítás a kijelölt listából",
		add_to_selected_tooltip: "Hozzáadás",
		remove_from_selected_tooltip: "Eltávolítás",
		move_up_selected_tooltip: "Mozgatás fel",
		move_down_selected_tooltip: "Mozgatás le",
		advanced_search_options_tooltip: "Speciális beállítások",
		move_right_selected_tooltip: "Belépés az almenübe",
		move_left_selected_tooltip: "Kilépés az almenüből",
		add_separator: "Elválasztó hozzáadása",
		menu_item_label: "Menüpont címkéje:",
		add_menu_label: "Almenü hozzáadása",
		menu_label: "Almenü címkéje:",
		menu_label_info: "<b>Fontos:</b> Hozzá kell adnia legalább egy menüpontot ehhez az almenühöz, mielőtt elmenthetné a menüt.",
		menu_dropdown_label: "Legördülő gomb címkéje:",
		menu_dropdown_label_info: "<b>Fontos:</b> Hozzá kell adnia legalább egy menüpontot ehhez a legördülő menü gombhoz, mielőtt elmenthetné az eszköztárat.",
		no_item_found: "Eredmény nem található.",
		me: "Én",
		anyone: "Bárki",
		specific_users: "Adott felhasználók",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "A keresés több, mint {0} találatot eredményezett. Módosítsa a feltételeket a keresés szűkítése érdekében.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "A keresési eredmények között már kiválasztott elemek is találhatók. Ezek az elemek nem jelennek meg a találatok között.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Több, mint {0} találat. Használja a szűrőt a találatok szűkítéséhez",

		user_already_selected: "A megadott felhasználó már ki van választva.  Adjon meg másik felhasználót.",
		group_already_selected: "A megadott csoport már ki van választva.  Adjon meg másik csoportot.",
		user_cannot_select_self: "Nem adhatja hozzá önmagát. Adjon meg másik felhasználót.",

		/* Select User Group dialog */
		select_user_group_add_label: "Hozzáadás",
		select_user_group_cancel_label: "Mégse",
		add_users_groups_label: "Felhasználók és csoportok hozzáadása",
		add_user_group_label: "Felhasználó és csoport hozzáadása",
		add_users_label: "Felhasználók hozzáadása",
		add_user_label: "Felhasználó hozzáadása",
		add_label: "Hozzáadás:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "A következő dokumentumok nem mentett feljegyzés változásokat tartalmaznak:",
		viewer_confirm_to_proceed: "Folytatni kívánja, és eldobja a módosításokat?",
		viewer_warn_has_changes: "A nem mentett módosítások eldobásra kerülnek.",
		viewer_warn_is_printing: "Lehetséges, hogy a folyamatban lévő nyomtatást nem lehet befejezni.",
		viewer_warn_confirm_exit: "Valóban ki szeretne lépni?",
		viewer_prompt_save_changes: "A következő dokumentum nem mentett feljegyzés változásokat tartalmaz, amik el fognak veszni:<br>${0}<br><br>Kívánja menteni a módosításokat?",
		viewer_prompt_mergesplit_changes: "A következő dokumentumok nem mentett módosításokat tartalmaznak:<br>${0}<br><br>Folytatni kívánja, és eldobja a módosításokat?",
		viewer_prompt_mergesplit_tab_changes: "A következő dokumentum nem mentett módosításokat tartalmaz:<br>${0}<br><br>Folytatni kívánja, és eldobja a módosításokat?",
		viewer_new_item_name: "Új dokumentum",
		viewer_top_frame: "Felső keret:",
		viewer_bottom_frame: "Alsó keret:",
		viewer_left_frame: "Bal oldali keret:",
		viewer_right_frame: "Jobb oldali keret:",
		viewer_viewer_frame: "Megjelenítő keret:",
		viewer_properties_frame: "Tulajdonságok:",
		viewer_comment_frame: "Megjegyzés keret:",
		viewer_mergesplit_on: "Nézet",
		viewer_mergesplit_off: "Összefésülés és felosztás",
		viewer_mergesplit_context_menu_move: "Áthelyezés",
		viewer_mergesplit_context_menu_rename: "Átnevezés",
		viewer_mergesplit_context_menu_delete: "Törlés",
		//move to new window
		viewer_move_to_new_window:"Áthelyezés új ablakba",
		viewer_continue:"Módosítások elvetése",
		viewer_return_to_original_window:"Vissza az eredeti ablakba",
		viewer_switch_window:"Ablak váltása",
		viewer_prompt_lost_changes:"A(z) ${0} dokumentum jelenleg meg van nyitva egy másik ablakban. A dokumentum nem mentett módosításokat tartalmaz. <br><br>Átvált az adott ablakra a módosítások mentéséhez, vagy elveti a módosításokat és megnyitja ebben az ablakban? ",
		viewer_mergesplit_fallback_info: "Az Összefésülés és felosztás műveletet csak olyan dokumentumokon végezheti el, amelyek ugyanabban a lerakatban vannak.",
		viewer_tabbed_layout: "Megjelenítés lapokként",
		viewer_tabbed_layout_highcontrast: "Lapok",
		viewer_split_vertical_layout: "Felosztás felső és alsó panelre",
		viewer_split_vertical_layout_highcontrast: "Felső és alsó",
		viewer_split_horizontal_layout: "Felosztás jobb és bal oldali panelre",
		viewer_split_horizontal_layout_highcontrast: "Jobb és bal",
		viewer_add_vertical_layout: "Új lap alul",
		viewer_add_vertical_layout_highcontrast: "Alsó lap",
		viewer_add_horizontal_layout: "Új lap a jobb oldalon",
		viewer_add_horizontal_layout_highcontrast: "Jobb oldali lap",
		viewer_add_horizontal_layout_rtl: "Új lap a bal oldalon",
		viewer_add_horizontal_layout_rtl_highcontrast: "Bal oldali lap",
		viewer_split_properties_layout: "Tulajdonságok megjelenítése",
		viewer_split_comment_layout: "Megjegyzések megtekintése",
		viewer_split_notelog_layout: "Megjegyzésnapló megtekintése",
		viewer_window_title: "${0} megjelenítő",
		viewer_next_hit: "A listában szereplő következő dokumentum megjelenítése",
		viewer_prev_hit: "A listában szereplő előző dokumentum megjelenítése",
		viewer_confrim_more_search_results: "A keresési eredmények nem tartalmaznak több megtekinthető  dokumentumot.  Szeretne lekérni további keresési eredményeket?",
		viewer_confirm_get_next_page: "Az eredmények listája nem tartalmaz több megtekinthető elemet.  Szeretne lekérni további keresési eredményeket?",
		viewer_confirm_get_next_item: "Az eredmények listája tartalmaz további megtekinthető elemet.  Szeretne megtekinteni a következő elemet?",
		viewer_fn_annotation_tooltip: " Létrehozta: ${0},  létrehozás ideje: ${1}",
		viewer_box_note_limitation: "A Box Notes alkalmazást csak külön ablakban nyithatja és jelenítheti meg.",
		viewer_click_to_open_box_note: "Kattintson ide a Box Note megnyitásához.",
		viewer_box_view_expiring: "Legfeljebb 60 percig jelenítheti meg a Box dokumentumot. Az aktuális munkamenete ${0} percen belül lejár. Ha szeretné folytatni a munkát a dokumentumon, akkor most újra be kell töltenie. Kívánja újra betölteni a dokumentumot?",
		viewer_add_dialog_save_as_type: "Mentés más típusként:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Kiiktatási ütközés",
		viewer_checkout_conflict: "A dokumentumot egy másik felhasználó kiiktatta.",
		viewer_checkout_confirm: "A dokumentum újabb változata érhető el. Folytatja a dokumentum kiiktatását, vagy betölti a megjelenítőbe az újabb változatot? Ha az újrabetöltést választja, a nem mentett módosítások elvesznek.",
		viewer_checkout_continue: "Kiiktatás folytatása",
		viewer_checkout_reload: "Frissít",
		viewer_status_building: "Dokumentum összeállítása...",
		viewer_status_adding: "Dokumentum hozzáadása...",
		viewer_status_checking_in: "Dokumentum beiktatása ...",

		/* Class Selector Widget */
		include_subclasses_label: "Alosztályok tartalmazása",
		include_subclasses_label2: "Keresés alosztályokban is",
		include_subclasses_note: "(Alosztályokkal együtt)",
		available_classes_col_header: "Elérhető osztályok",
		single_class_label: "Keresés egyetlen osztályban",
		multiple_classes_label: "Keresés több osztályban",
		multiple_classes_hover_help: "A beállítással több osztályban kereshet. Az osztályok lehetnek szülő osztályok vagy alosztályok. A beállítás kiválasztása esetén csak azokat a tulajdonságokat és értékeket fogja látni, amelyek közösek a kijelölt osztályokban.",
		selected_classes_col_header: "Kijelölt osztályok",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(almappákkal együtt)",
		favorites_pseudo_node: "\\Kedvencek\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Ki kell választania azt a mappát a lerakatban, amelyhez a dokumentumot hozzá kívánja adni.",
		no_permission_add_folder: "Nem rendelkezik a megfelelő jogosultságokkal, hogy mappákat adjon hozzá ehhez a mappához.",
		no_permission_add_document: "Nem rendelkezik a megfelelő jogosultságokkal, hogy dokumentumokat adjon hozzá ehhez a mappához.",
		document_already_in_folder: "A dokumentum már szerepel a mappában.",
		cant_move_folder_onto_parent: "A mappa már szerepel a mappában.",
		cant_move_folder_onto_self: "Mappa nem helyezhető át önmagába vagy saját almappáiba.",

		/* Workflow Widgets */
		process_application_space: "Alkalmazásterület feldolgozása",
		process_role: "Szerep feldolgozása",
		process_inbasket: "Kosár feldolgozása",
		process_worklist: "Feladatlista",
		process_step_processor: "Munkaelem feldolgozása",
		process_tracker: "Munkaelem követése",
		process_info_subject: "Tárgy",
		process_info_stepname: "Lépés",
		process_info_is_locked: "Zárolva",
		process_info_no_access: "Nincs hozzáférés",
		process_info_received_on: "Érkezés időpontja",
		process_info_overdue: "Lejárt",
		process_info_reminder_sent: "Emlékeztető kiküldve",
		process_info_locked_by_user: "Zárolta:",
		process_work_object_number: "Munkaobjektum száma",
		process_deadline: "Határidő:",
		process_launchedby: "Elindította:",
		process_receivedon: "Fogadás ideje:",
		process_step: "Lépés:",
		process_properties: "Tulajdonságok",
		process_attachments: "Mellékletek",
		process_attachments_select: "Válasszon egy mellékletet",
		process_finish_button_label: "Nyomkövetés leállítása",
		process_tracker_history: "Előzmények",
		process_tracker_milestones: "Sarokpontok",
		process_tracker_milestone: "Mérföldkő",
		process_tracker_milestone_level: "Szint",
		process_tracker_milestones_empty: "Nincsenek megjeleníthető mérföldkövek.",
		process_tracker_level_selector_label: "Mérföldkő szintek megjelenítése a következő szintig:",
		process_tracker_map_selector_label: "Szűrve a kiosztás alapján:",
		process_tracker_message: "Üzenet",
		process_tracker_datereached: "Teljesülés dátuma",
		process_tracker_stepname: "Lépés",
		process_tracker_cycle: "Ciklus",
		process_tracker_review_cycle: "Ciklus áttekintése",
		process_tracker_participant: "Résztvevő",
		process_tracker_completed: "Kész",
		process_tracker_response: "Válasz",
		process_tracker_comments: "Megjegyzések",
		process_tracker_delete_confirmation: "Valóban leállítja a(z) ${0} munkafolyamat nyomkövetését?",
		process_tracker_history_allmaps: "Összes leképezés",
		process_tracker_history_workflow: "Munkafolyamat",
		process_tracker_history_terminate: "Megszüntetés",
		process_tracker_history_malfunction: "Hibás működés",
		process_filter_label: "Szűrő",
		process_no_filter_summary: "Nincsenek alkalmazott szűrők",
		process_filter_summary: "${0} alkalmazva",
		process_filter_reset_tooltip: "A visszaállítás törli a szűrőt és frissíti a bejövő kosarat.",
		process_attachments_add_folder: "Mappa hozzáadása",
		process_attachments_add_doc: "Dokumentum hozzáadása",
		process_complete_button_label: "Kész",
		process_save_button_label: "Mentés",
		process_launch_button_label: "Munkafolyamat indítása",
		process_open_button_label: "Megnyitás",
		process_movetoinbox_button_label: "Áthelyezés kosárba",
		process_return_button_label: "Visszalépés",
		process_return_to_sender_tooltip: "Munkaelem visszahelyezése az eredeti kosárba",
		process_move_to_inbasket_tooltip: "Munkaelem áthelyezése a személyes kosárba",
		process_reassign_tooltip: "Munkaelem hozzárendelése másik tulajdonoshoz",
		process_reassign_button_label: "Átruházás",
		process_preferences_button_label: "Beállítások",
		process_manageroles_button_label: "Szerepek kezelése",
		process_manageroles_no_members: "Nincsenek tagok.",
		process_responses_button_label: "Több válasz",
		process_morecustomaction_button_label: "További műveletek",
		process_show_instructions: "Utasítások megjelenítése",
		process_hide_instructions: "Utasítások elrejtése",
		process_remove_attachment: "Eltávolítás",
		process_close_window: "A Munkaelem feldolgozásra került.",
		process_delegate_flag: "A jelenlegi tulajdonosnak jóvá kell hagynia a munkaelemet, mielőtt továbbítaná azt a munkafolyamat következő lépéséhez.",
		process_paticipant_voting: "A szavazás jóváhagyásához szükséges résztvevők száma:",
		process_get_next_label: "Következő munkaelem lekérése",
		process_no_more_items: "Nincs több feldolgozandó elem a kosárban.",
		process_workflow_name: "Munkafolyamat neve:",
		process_pattern_process_name: "Áttekintés a(z) ${0} számára",
		process_instuctions: "Utasítások az áttekintők részére:",
		process_pattern_deadline: "Határidő:",
		process_reviewers: "Áttekintők:",
		process_approvals_required: "Szükséges jóváhagyások:",
		process_on_reject: "Munkaelem visszautasítása esetén:",
		process_return_to_originator: "Vissza hozzám",
		process_return_to_previous_reviewer: "Vissza az előző áttekintőhöz",
		process_additional_settings: "További beállítások:",
		process_allow_reassign: "Áttekintés áthelyezési engedély az áttekintők számára",
		process_complete_notification: "Kapjak értesítést, amikor az áttekintés elkészül.",
		process_workflow_name_hover_help: "A munkaelem számára megadott név könnyítse meg az áttekintők számára a munkaelem megkülönböztetését a kosarukban levő más munkaelemektől.",
		process_approvals_required_hover_help: "Ha a munkaelemet egyszerre több személy tekinti át, akkor megadható, hogy hány jóváhagyás szükséges a munkaelem sikeres befejezéséhez.",
		process_approval_options: "Jóváhagyási beállítások",
		process_all: "Összes",
		process_at_least: "Legalább",
		process_at_least_by_count: "Legalább ${0} áttekintő",
		process_at_least_by_percentage: "Az áttekintők legalább ${0} százaléka",
		process_comments: "Megjegyzések:",
		process_review_step_comments_hover_help: "Ha visszautasítja a munkaelemet, akkor meg kell adnia a visszautasítás okát. Ez lehetővé teszi a munkaelem szerzője vagy az előző áttekintő számára, hogy kijavítsa a kifogásolt részeket.",
		process_rework_step_comments_hover_help: "Meg kell adnia, hogyan vette figyelembe a megjegyzéseket. Ha nem ért egyet a megjegyzésekkel, akkor magyarázza meg a döntését.",
		process_rejection_reason: "Elutasítás oka:",
		process_summary: "Összegzés",
		process_sequential_review: "Szekvenciális áttekintés",
		process_sequential_review_description: "A munkaelemet az áttekintők egymás után tekintik át.",
		process_parallel_review: "Párhuzamos áttekintés",
		process_parallel_review_description: "A munkaelemet az összes áttekintő egyidejűleg tekinti át.",
		process_parallel_approvals_required_error: "A szükséges jóváhagyások száma túl nagy. Csak ${0} áttekintő van megadva.",
		process_parallel_invalid_required_approvals_count: "Az érték érvénytelen. Az értéknek a következőnek kell lennie: ${0}.",
		process_subject_prompt: "Adja meg a tárgyat.",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Munkaelem:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Tulajdonságok megtekintése",
		view_permissions_level: "Jogosultságok megtekintése",
		view_content_level: "Dokumentum megjelenítése",
		link_level: "Hivatkozás",
		modify_properties_level: "Tulajdonságok szerkesztése",
		modify_content_level: "Dokumentum szerkesztése",
		minor_version_level: "Alverziószám módosítása",
		major_version_level: "Főverziószám módosítása",
		create_instance_level: "Példány létrehozása",
		delete_document_level: "Dokumentum törlése",
		delete_item_level: "Elem törlése",
		modify_document_permissions_level: "Jogosultságok kezelése",
		modify_folder_permissions_level: "Jogosultságok kezelése",
		modify_owner_level: "Tulajdonos módosítása",
		delete_folder_level: "Mappa törlése",
		file_in_folder_level: "Hozzáadás mappákhoz",
		create_subfolder_level: "Almappák létrehozása",
		link_item_level: "Feljegyzés hozzáadása, Hozzáadás mappához", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Csak dokumentum: Feljegyzés hozzáadása a dokumentumhoz vagy feljegyzés eltávolítása a dokumentumból.</li><li>Csak mappa: Elemek hozzáadása a mappához vagy elemek eltávolítása a mappából</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Törlés",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Tulajdonos",
		/* previously \"Full control\" */
		edit_privilege: "Szerző",
		/* previously \"Edit\" */
		read_only_privilege: "Olvasó",
		/* previously \"Read only\" */
		no_access_privilege: "Nincs hozzáférés",
		share_with_label: "Megosztás ezzel:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Csak én",
		public_label: "Mindenki",
		members_label: "Bizonyos felhasználók és csoportok",
		select_members_label: "Kiválasztás…",
		select_user_group_label: "Felhasználók kiválasztása...",
		select_users_groups_label: "Felhasználók és csoportok kiválasztása...",
		select_user_label: "Felhasználó kiválasztása...",
		propagation_label: "Terjesztés:",
		access_label: "Jogosultságok:",
		add_permission_add_label: "Hozzáadás",
		security_policy_label: "Biztonsági irányelv:",
		includes_inherited_access: "Tartalmazza az örökölt hozzáférést",
		customize_access_for_label: "Következő elérésének személyre szabása:",
		customize: "Egyéni beállítások",
		direct: "Ezt az elemet",
		singleLevelInheritance: "Egy szint",
		infiniteLevelInheritance: "Összes szint",
		inherited: "Örökölt",
		direct_hover_help: "A biztonsági beállítások a kiválasztott elemre kerülnek alkalmazásra",
		singleLevelInheritance_hover_help: "Ezek a jogosultságok erre az elemre és minden olyan közvetlen leszármazottjára vonatkoznak, amelyek ettől az elemtől öröklik a biztonsági beállításokat.",
		infiniteLevelInheritance_hover_help: "Ezek a jogosultságok erre az elemre és minden olyan leszármazottjára vonatkoznak, amelyek ettől az elemtől öröklik a biztonsági beállításokat.",
		inherited_hover_help: "Ezek a jogosultságok a szülőtől öröklődtek.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "${0} ezen jogosultságai erre az elemre és minden olyan közvetlen leszármazottjára vonatkoznak, amelyek ettől az elemtől öröklik a biztonsági beállításokat.",
		infiniteLevelInheritance_member_hover_help: "${0} ezen jogosultságai erre az elemre és minden olyan leszármazottjára vonatkoznak, amelyek ettől az elemtől öröklik a biztonsági beállításokat.",
		inherited_member_hover_help: "${0} ezen jogosultságai a szülőtől öröklődtek.",
		partial_hover_help: "Az elem biztonsági beállításait a felhasználó módosította",
		allow: "Engedélyezés",
		deny: "Megtagadás",
		basic: "Alap",
		advanced: "Részletes",
		permission_type: "Következő elérésének beállítása:",
		share_with_hover_help: "Az elem pillanatnyilag a következő felhasználókkal és csoportokkal van megosztva.",
		direct_security_policy_hover_help: "A biztonsági irányelv beállításai lehetővé teszik, hogy módosítsa az elem biztonságát.",
		security_policy_hover_help: "Az elem biztonsági beállításai írásvédettek, mert a biztonsági irányelv beállításai nem engedélyezik az elem biztonságának módosítását.",
		security_remove: "Nincsenek jogosultságok",
		pseudo_group_label: "Álnév fiókok",
		marking_hover_help: "Az elem biztonságát jelölőkészlet vezérli, ami hatással lehet az elem biztonságára.",
		note_label: "Fontos:",
		marking_text: "Ez az elem mint ${0} van megjelölve. Az elemre további biztonsági korlátozások vonatkozhatnak.",
		authenticated_users: "Hitelesített felhasználók",
		realm_users: "${0} felhasználók",
		denyAll: "Összes visszautasítása",
		allowAll: "Összes engedélyezése",
		remove_direct_text: "Ha menti a módosításokat, akkor a tag összes jogosultsága eltávolításra kerül az elemről.",
		remove_single_inheritance_text: "Ha menti a módosításokat, akkor a tag összes jogosultsága eltávolításra kerül az elemről<br>és minden olyan közvetlen leszármazottjáról, amely ettől az elemtől örökli a biztonsági beállításokat.<p>Kívánja folytatni?",
		remove_infinite_inheritance_text: "Ha menti a módosításokat, akkor a tag összes jogosultsága eltávolításra kerül az elemről<br>és minden olyan leszármazottjáról, amely ettől az elemtől örökli a biztonsági beállításokat.<p>Kívánja folytatni?",
		remove_inheritance_text: "Ha menti a módosításokat, akkor a tag összes jogosultsága eltávolításra kerül az elemről<br>és minden olyan leszármazottjáról, amely ettől az elemtől örökli a biztonsági beállításokat. Csak az elem által örökölt<br>jogosultságok maradnak meg.<p>Kívánja folytatni?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "${0} jogosultságainak eltávolítása",

		security_proxy_text: "Az elem biztonsága csak olvasható.",
		security_proxy_declared_text: "Az elem biztonsága csak olvasható, mert azt egy biztonsági proxy határozza meg.",
		security_proxy_hover_help: "Az elem biztonságát a lerakat másik objektumához beállított biztonság vezérli.",
		add_permissions_label: "Engedélyek hozzáadása",
		permission_propagation_direct: "Csak ez a mappa",
		permission_propagation_onelevel: "Ez a mappa és az egyel alatta levő szint",
		permission_propagation_alllevels: "Ez a mappa és az összes alatta levő szint",
		document_propagation_label: "Következő elérésének beállítása:",
		document_propagation_FOLDER: "Mappa",
		document_propagation_DOCUMENT: "Dokumentum",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Hitelesítési forrás:",

		/* Versions Widget */
		object_versions_selector_label: "Változatok:",
		object_versions_label: "Változatok",
		object_type_document_label: "Dokumentum:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Mappák iktatási helye",
		folders_filed_in_folder_col_hdr: "Mappa",
		folders_filed_in_path_col_hdr: "Útvonal",
		folders_filed_in_containment_name_col_hdr: "Tartalmazás neve",
		folders_filed_in_creator_col_hdr: "Létrehozó",
		folders_filed_in_date_created_col_hdr: "Létrehozás ideje",

		/* Parent Documents */
		properties_parent_documents_label: "Szülő dokumentumok",

		/* Select object dialog */
		select_object_title: "Elem kiválasztása",
		select_object_breadCrumb_version_prefix: "Következő változatai: ",
		show_versions_label: "Változatok megjelenítése",
		use_current_version_label: "Aktuális változat használata",
		use_released_version_label: "Kiadott változat használata",

		/* Select content class dialog */
		select_class: "Osztály kiválasztása",
		/* Select Search dialog */
		select_search: "Keresés kiválasztása",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Hivatkozás megjelenítése",
		show_hyperlink_intro: "A hivatkozást másolhatja és beillesztheti e-mail üzenetekbe, csevegésekbe és weboldalakra. Ha az elemnek több változata van, akkor adja meg, hogy melyik változathoz kíván hivatkozást létrehozni.",
		show_hyperlink_intro_no_version_select: "A hivatkozást másolhatja és beillesztheti e-mail üzenetekbe, csevegésekbe és weboldalakra.",
		show_text_label: "Változat:",
		released_button_label: "Kiadott",
		current_button_label: "Jelenlegi",
		select_button_label: "Adott változat",
		show_hyperlink_no_released_version_msg: "A dokumentumnak nem létezik kiadott változata.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Munkafolyamat indítása",
		edit_workflow_title: "Munkaelem tulajdonságai",
		start_workflow_intro: "Indítson el egy munkafolyamatot a kijelölt elemek feldolgozásához. Ha a feladatokat hozzá kívánja rendelni egy adott felhasználóhoz, akkor adjon meg egy tulajdonost.",
		edit_workflow_intro: "A kijelölt feladatok tulajdonságai módosíthatók. Ha szeretné újra hozzárendelni a feladatot egy másik felhasználóhoz, akkor adjon meg egy tulajdonost.",
		workflow_field_label: "Munkafolyamat:",
		priority_field_label: "Prioritás:",
		owner_field_label: "Tulajdonos:",
		start_button_label: "Indítás",
		save_button_label: "Mentés",
		owner_value_hint: "Adjon meg egy maximum 32 karakter hosszú alfanumerikus kifejezést. A kifejezés csak szóközöket és a következő karaktereket tartalmazhatja: a-z, A-Z, 0-9 és ` . , : ; ? \\ \" / - _ &amp;+ % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Tartalomelemek",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Az érték érvénytelen. Az érték csak szóközöket és a következő karaktereket tartalmazhatja: a-z, A-Z, 0-9 és ` . , : ; ? \\ \" / - _ &amp;+ % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "1 - 32000 közötti érték megadásával jelezheti a munkaelem fontosságát.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Az érték érvénytelen. A csak 1 és 32000 közötti érték lehet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "A munkafolyamatnév nem létezik.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Felfüggesztés munkafolyamatból",
		suspend_workitems_intro: "Ha felfüggeszti a munkaelemet a munkafolyamatból, akkor a munkaelemet addig nem lehet feldolgozni, amíg vissza nem állítják.",
		suspend_workitems_options_label: "A kijelölt munkaelemek felfüggesztése:",
		suspend_until_resume_label: "Kézi folytatásig",
		suspend_until_date_label: "Eddig:",
		suspend_for_duration_label: "Eddig:",
		suspend_for_duration_hours: "Óra",
		suspend_for_duration_days: "Nap",
		suspend_for_duration_weeks: "Hét",
		suspend_for_duration_months: "Hónap",
		suspend_for_duration_years: "Év",
		suspend_button_label: "Felfüggesztés",
		suspend_duration_value_hint: "Adja meg az időtartam 1 és 99 közötti értékét.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Az érték érvénytelen. Az értéknek az 1 - 99 tartományba kell esnie.",

		/* Remove from workflow */
		remove_workflow_title: "Eltávolítás munkafolyamatból",
		remove_workflow_confirmation: "Eltávolítja a kiválasztott elemeket a munkafolyamatból?<br>${0} elem van kijelölve.",
		remove_workflow_button_label: "Eltávolítás",

		/* Unfile dialog */
		unfile_dialog_title: "Eltávolítás mappából",
		unfile_dialog_remove_from_folder_label: "Eltávolítás innen:",
		unfile_dialog_info_text: "Eltávolíthat elemeket mappákból. Hiába távolít el azonban egy elemet minden mappából, az nem fog törlődni a lerakatból. Egy keresés futtatásakor továbbra is meg fogja kapni az elemet. Csak azok a mappák fognak megjelenni a listában, amelyekhez van megjelenítési jogosultsága.",
		unfile_dialog_select_all: "Mindent kijelöl",
		unfile_dialog_deselect_all: "Az összes törlése",
		unfile_dialog_remove_button_label: "Eltávolítás",
		unfile_dialog_select_folder_col_hdr: "Mappa kiválasztása",
		unfile_dialog_folder_col_hdr: "Mappa",
		unfile_dialog_path_col_hdr: "Útvonal",
		unfile_dialog_not_filed_msg: "Ez az elem egyetlen mappában sem található meg.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nincs megfelelő jogosultsága az elem eltávolítására bármely olyan mappából, amelyben az elem benne van.",
		unfile_dialog_folder_not_selectable_tooltip: "Nincsenek meg a megfelelő jogosultságai az elem eltávolításához ebből a mappából.",
		unfile_multi_prompt: "Eltávolítja a kiválasztott elemeket a(z) ${0} mappából?",
		unfile_large_number_items_confirmation_question: "${0} elemet választott ki a(z) ${1} mappából eltávolításhoz.<br/>Nagyszámú elem eltávolítása a mappából hosszú ideig tarthat.<br/>Kívánja folytatni?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Megnyitás",
		move_to_folder_title: "Áthelyezés mappába",
		move_to_folder_button_caption: "Áthelyezés",
		move_to_folder_label: "Áthelyezés ide:",
		add_to_folder_title: "Hozzáadás mappához",
		add_to_folder_button_caption: "Hozzáadás",
		add_to_folder_label: "Hozzáadás:",
		copy_to_folder_title: "Másolás mappába",
		copy_to_folder_button_caption: "Másolás",
		copy_to_folder_label: "Másolás ide:",
		copy_to_folder_delete_label: "A másolás befejeződése után törölje a kijelölt elemeket a Box alkalmazásból.",
		move_from_folder_label: "Áthelyezés innen:",
		move_file_info_text: "Az elemeket áthelyezheti egyik mappából a másikba.",
		move_folder_info_text: "A mappákat áthelyezheti egyik szülőmappából a másikba.",
		add_doc_to_folder_info_text: "A mappákhoz hozzáadhat elemeket. Ha egy elem már megtalálható egy mappában, akkor abban a mappában megmarad és hozzáadásra kerül a felhasználó által megadott többi mappához is.",
		copy_doc_to_folder_info_text: "Átmásolhat elemeket egy mappába.",
		box_copy: "Box másolás",
		box_copy__button_caption: "Másolás",
		box_copy_to_info_text: "Válassza ki a lerakatot és a mappát, ahová a kiválasztott elemeket át szeretné másolni a Box alkalmazásból.",
		box_copy_from_info_text: "Válassza ki a lerakatot és a mappát, ahová a kiválasztott elemeket át szeretné másolni a Box alkalmazásból.",
		box_copy_version_info_text: "Egy új dokumentum hozzáadásához válassza ki a lerakatot és mappát. Egy új változat beiktatásához válassza ki a lerakatot és a dokumentumot.",
		admin_box_copy: "Box másolás",
		admin_box_copy_hover: "Ez a beállítás lehetővé teszi a felhasználók számára dokumentumok átmásolását a Box alkalmazásba.",

		no_permission_to_copy_version_msg: "Nem másolhatja a dokumentumot a Box alkalmazásból a kijelölt dokumentum új változataként. Vagy nem rendelkezik a kijelölt dokumentum szerkesztéséhez szükséges megfelelő engedélyekkel, vagy a kijelölt dokumentumot valaki más iktatta ki.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nincs megfelelő jogosultsága az elem eltávolítására bármely olyan mappából, amelyben az elem benne van.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nincsenek meg a megfelelő jogosultságai az elem eltávolításához ebből a mappából.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Ez az elem nem helyezhető át, mert egyetlen mappában sincs iktatva. Válasszon másik elemet.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Munkafolyamat indítása",
		subscriptions_dialog_available_items_label: "Rendelkezésre álló elemek:",
		subscriptions_dialog_info_text: "Adja meg az elindítani kívánt munkafolyamatot.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Név",
		subscriptions_dialog_desc_col_hdr: "Leírás",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Szerepek kezelése",
		manageroles_dialog_info_text: "Módosíthatja a felhasználók listáját minden olyan szerepre, amely ehhez a folyamatalkalmazás területhez tartozik.",
		manageroles_dialog_members_label: "Tagok",
		manageroles_dialog_roles_label: "Szerepek",
		manageroles_dialog_add_button_label: "Felhasználók és csoportok hozzáadása",
		manageroles_dialog_remove_button_label: "Eltávolítás",
		manageroles_dialog_save_button_label: "Mentés",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Ehhez az elemhez nem tartozik munkafolyamat.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Munkafolyamat beállítások",
		workflow_pref_dialog_info_text: "Határozza meg a munkafolyamat eseményeket, amelyekhez e-mail értesítést szeretne kapni. Át is irányíthatja a munkáit másik felhasználó felé, ha kijelöl egy felhasználót, aki felé delegálja a munkát.",

		workflow_pref_general: "Általános",
		workflow_pref_email_address: "E-mail cím",
		workflow_pref_email_address_hover: "Az az e-mail cím, ahol a munkafolyamat értesítéseket meg szeretné kapni.",
		workflow_pref_preferred_locale: "Nyelv",
		workflow_pref_preferred_locale_hover: "Megadja a nyelvet az email értesítések megjelenítéséhez.",

		workflow_pref_work_item_notice: "Munkaelem értesítések",
		workflow_pref_step_new_assignment: "Új munkaelemet rendelnek hozzám",
		workflow_pref_step_new_assignment_hover: "Kapjak értesítést, amikor új munkaelemet kapok.",
		workflow_pref_step_expired_deadline: "Munkaelem határidő lejárt",
		workflow_pref_step_expired_deadline_hover: "Kapjak értesítést, amikor egy munkaelem határideje lejárt.",
		workflow_pref_step_reminders: "Munkaelem határidő közeleg",
		workflow_pref_step_reminders_hover: "Kapjak emlékeztetést, amikor egy munkaelem határideje közeleg.",

		workflow_pref_originator_notice: "Kezdeményező értesítések",
		workflow_pref_milestone_reached: "Mérföldkő elérve",
		workflow_pref_milestone_reached_hover: "Kapjak értesítést, amikor egy általam indított munkafolyamatban egy mérföldkő elérkezett.",

		workflow_pref_tracker_notice: "Munkafolyamat nyomkövetési értesítések",
		workflow_pref_tracker_new_assignment: "Új nyomkövetési elemet rendelnek hozzám",
		workflow_pref_tracker_new_assignment_hover: "Kapjak értesítést, amikor egy általam nyomon követett munkafolyamat elindul.",
		workflow_pref_tracker_deadline_reminders: "Munkafolyamat határidő közel",
		workflow_pref_tracker_deadline_reminders_hover: "Kapjak emlékeztetőt, amikor egy munkafolyamat határideje közeleg.",
		workflow_pref_tracker_deadline_expired: "Munkafolyamat határidő letelt",
		workflow_pref_tracker_deadline_expired_hover: "Kapjak értesítést, amikor egy munkafolyamat határideje lejárt.",
		workflow_pref_tracker_exception: "Munkafolyamat hiba történt",
		workflow_pref_tracker_exception_hover: "Kapjak értesítést, amikor egy munkafolyamat kivétel vagy hiba történik.",
		workflow_pref_tracker_expired_deadline: "Lépés határidő letelt",
		workflow_pref_tracker_expired_deadline_hover: "Kapjak értesítést, amikor egy általam nyomon követett munkafolyamatban egy lépéshatáridő letelt.",
		workflow_pref_tracker_milestone_reached: "Mérföldkő elérve",
		workflow_pref_tracker_milestone_reached_hover: "Kapjak értesítést, amikor egy általam nyomon követett munkafolyamatban egy mérföldkő elérkezett.",

		workflow_pref_out_notice: "Távollét",
		workflow_pref_proxy_user: "Munka delegálása",
		workflow_pref_proxy_user_hover: "A beállítással a munkái automatikusan továbbításra kerülnek egy másik felhasználó számára, például amikor irodán kívül vagy szabadságon van.",
		workflow_pref_workflow: "Munkafolyamat",
		workflow_pref_on: "Be",
		workflow_pref_off: "Ki",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Munkafolyamat indítása",
		transfered_workflows_dialog_info_text: "Válasszon ki egy elindítani kívánt munkafolyamatot.",
		transfered_workflows_dialog_available_items_label: "Rendelkezésre álló elemek:",
		transfered_workflows_dialog_select_button_label: "Indítás",
		transfered_workflows_dialog_name_col_hdr: "Név",
		transfered_workflows_dialog_no_item_found: "Nem található átvitt munkafolyamat.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Munkafolyamat átvitele",
		transfer_workflow_dialog_info_text: "Válassza ki a munkafolyamatot, amelybe át kíván vinni a munkafolyamat rendszerbe.",
		transfer_workflow_dialog_use: "Használja ezt a munkafolyamat nevet",
		transfer_workflow_dialog_use_another: "Használjon egy másik munkafolyamat nevet",
		transfer_workflow_dialog_in_use: "A munkafolyamat neve: ",
		transfer_workflow_dialog_transfer_button_label: "Átvitel",
		transfer_workflow_dialog_no_items_found: "Nem található átvitt munkafolyamat.",
		transfer_workflow_dialog_use_hover: "adja meg az aktuális munkafolyamat nevet a munkafolyamat meghatározásból.",
		transfer_workflow_dialog_another_hover: "Adjon meg egy másik munkafolyamatnevet vagy használjon fel újra egy meglévő átvitt munkafolyamat nevet.",

		/*Search In control*/
		search_in_title: "Keresés itt:",
		search_in_teamspaces: "Csoportterületek",
		search_in_repositories: "Lerakatok",
		search_in_thisteamspaces: "Ez a csoportterület",

		ajaxViewer_save: "Feljegyzések mentése",
		ajaxViewer_print: "Nyomtatási kép",
		ajaxViewer_firstPage: "Első oldal",
		ajaxViewer_previousPage: "Előző oldal",
		ajaxViewer_nextPage: "Következő oldal",
		ajaxViewer_lastPage: "Utolsó oldal",
		ajaxViewer_unknownPageCount: "1. az ismeretlen számú oldalból",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} / ${1}",
		ajaxViewer_zoomOut: "Kicsinyítés",
		ajaxViewer_zoomIn: "Nagyítás",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Illeszkedés a szélességhez",
		ajaxViewer_fitHeight: "Illeszkedés a magassághoz",
		ajaxViewer_fitPage: "Illeszkedés az oldalhoz",
		ajaxViewer_rotate270: "Elforgatás 270 fokkal",
		ajaxViewer_rotate90: "Elforgatás 90 fokkal",
		ajaxViewer_rotate180: "Elforgatás 180 fokkal",
		ajaxViewer_darken: "Sötétítés",
		ajaxViewer_lighten: "Világosítás",
		ajaxViewer_lessContrast: "Kevesebb kontraszt",
		ajaxViewer_moreContrast: "Több kontraszt",
		ajaxViewer_invert: "Invertálás",
		ajaxViewer_createHighlight: "Kiemelés",
		ajaxViewer_createNote: "Feljegyzés hozzáadása",
		ajaxViewer_editAnnotation: "Feljegyzés tulajdonságainak szerkesztése",
		ajaxViewer_deleteAnnotation: "Feljegyzés törlése",
		ajaxViewer_editAnnotationTitle: "Feljegyzés tulajdonságainak szerkesztése",
		printableView_print: "Nyomtatás",
		printableView_close: "Bezárás",

		search_results_dropdown_button: "Találatok képernyő",
		search_results_columns_label: "Keresési eredmények képernyő",
		search_results_columns_description: "Válassza ki a keresési találatoknál megjeleníteni kívánt tulajdonságokat.",
		search_results_sortby_label: "Rendezési szempont:",
		search_results_order_label: "Rendezési sorrend:",
		search_results_accending_label: "Növekvő",
		search_results_descending_label: "Csökkenő",
		search_results_available_properties: "Elérhető",
		search_results_selected_properties: "Kijelölve",
		search_rank_property: "Rang (Csak szöveges keresés esetén)",
		search_name_attribute: "Név (${0})",
		search_results_summary_enabled_label: "Tartalomösszegzés engedélyezése (Csak szöveges keresés)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Keresések",
		manage_teamspace_classes_tab_title: "Osztályok",
		manage_teamspace_entry_templates_tab_title: "Adatbeviteli sablonok",
		manage_teamspace_team_tab_title: "Csoport",
		manage_teamspace_roles_tab_title: "Szerepek",
		manage_teamspace_dialog_title: "Csoportterület módosítása",
		manage_teamspace_button_label: "Csoportterület módosítása",
		manage_teamspace_team_pane_heading: "Csoport kijelölése",
		manage_teamspace_classes_pane_heading: "Osztályok kiválasztása",
		manage_teamspace_entry_templates_pane_heading: "Beviteli sablonok kiválasztása",
		manage_teamspace_no_rights_message: "Nem rendelkezik megfelelő jogosultságokkal a csoportterület módosításához.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Csoportterület tulajdonságai",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Adja meg, hogy a dokumentumok és mappák mely tulajdonságai jelenjenek meg a tartalomlistában, amikor a felhasználók tallóznak a csoportterületen. Megadhatja a tulajdonságok megjelenési sorrendjét is.",
		teamspace_props_sel_cols_use_default_label: "A lerakat <b>Tallózás</b> beállításainak használata",
		teamspace_props_sel_cols_use_default_tooltip: "Használja azokat a beállításokat, amelyek az adminisztrációs eszközben a lerakathoz tartozó Tallózás oldalon meg vannak adva.",
		teamspace_props_general_tab_label: "Általános",
		teamspace_props_column_props_tab_label: "Megjelenített tulajdonságok",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Válassza ki az importálni kívánt fájlt",
		teamspace_import_template_instruction: "Importálásra kiválasztható egy csoportterület sablon export fájl.",
		teamspace_import_template_button_label: "Importálás",
		teamspace_import_template_dialog_label: "Csoportterület sablon importálása",

		/* Annotation Dialog */
		annotationDlg_title: "Feljegyzések",
		annotationDlg_description: "A kijelölt dokumentum a következő feljegyzésekkel rendelkezik:",
		annotationDlg_msg_noAnnotations: "Nem léteznek feljegyzések. Kattintson a Hozzáadás lehetőségre feljegyzés létrehozásához.",
		annotationDlg_pageLabel: "Oldal: ${pageNum}",
		annotationDlg_accLabel: "HOZZÁFÉRÉS: ${accType}",
		annotationDlg_accLabel_public: "Nyilvános",
		annotationDlg_accLabel_private: "Saját",
		annotationDlg_accLabel_privateGroup: "Privát (${groupName})",
		annotationDlg_copiable: "Átmásolható másik kiszolgálóra",
		annotationDlg_cannotCopy: "Nem másolható át másik kiszolgálóra",
		annotationDlg_addButtonLabel: "Hozzáadás",

		/* Share Dialog */
		is_shared: "Megosztott",
		is_share_pending: "Függőben lévő megosztás",
		share_title: "Box megosztás",
		share_instructions_new: "A megosztott fájlra mutató hivatkozást tartalmazó e-mail küldése. A hivatkozás birtokában bárki elérheti a fájlt.",
		share_instructions_existing: "A megosztott fájlra mutató hivatkozást tartalmazó e-mail küldése. A hivatkozás birtokában bárki elérheti a fájlt. Mások már rendelkezhetnek a hivatkozással, mert valaki már megosztotta ezt a fájlt.",
		share_instructions_another_version_shared: "A megosztott fájlra mutató hivatkozást tartalmazó e-mail küldése. A hivatkozás birtokában bárki elérheti a fájlt. Mások már rendelkezhetnek a hivatkozással, mert valaki már megosztotta a fájl egy másik változatát.",
		share_buttonLabel_share: "Megosztás",
		share_email_addresses: "Küldés a következőknek:",
		share_email_addresses_hover: "Amikor a megosztás befejeződik, egy hivatkozás kerül elküldésre ezekre az e-mail címekre. Ha nem ad meg semmit, akkor a hivatkozás a saját e-mail címére lesz elküldve.",
		share_email_addresses_reshare_hover: "Amikor a megosztás befejeződik, egy hivatkozás kerül elküldésre ezekre az e-mail címekre. Ha nem ad meg semmit, akkor a rendszer nem küld e-mailt.",
		share_password: "Jelszó beállítása:",
		share_password_placeholder: "Nem kötelező",
		share_comments: "Üzenet:",
		share_comments_default: "Szeretném megosztani a Box alkalmazásban tárolt fájlomat.",
		share_myEmail: "Küldés innen:",
		share_expiration: "Hivatkozás lejáratának beállítása:",
		share_expire: "Hozzáférés lejárata:",
		share_expire_none: "Soha nem jár le",
		share_allowDownload: "Letöltés engedélyezése",
		share_add: "Hozzáadás",
		share_advanced_instructions: "A letöltés, a lejárat és a jelszó beállítások a Box alkalmazásban lévő megosztott fájlra vonatkoznak.",
		share_advanced_existing_instructions: "A letöltés, a lejárat és a jelszó beállítások a Box alkalmazásban lévő megosztott fájlra vonatkoznak.",
		share_options_edit_warning: "Fontos: A beállítások bármilyen módosítása a hivatkozás minden birtokosára hatással van, beleértve azokat, akik már korábban rendelkeztek a hivatkozással.",
		share_link: "Hivatkozás:",
		share_email_addresses_placeholder: "E-mail címek",
		share_email_address_placeholder: "E-mail cím",
		share_email_address_invalid: "Adjon meg egy érvényes e-mail címet.",
		share_cannot_share_with_self: "Nem oszthat meg fájlokat önmagával. Adjon meg másik felhasználót.",
		share_selected_version_with_minor_warning_hover: "A dokumentum ${0} változata meg van osztva. Ön a(z) ${1} változatot választotta ki.<br><br><b>Figyelmeztetés</b>: Ha megosztja a(z) ${1} változatot, más felhasználók csak úgy tudják megosztani a(z) ${2} változatot, ha Ön törli a(z) ${1} változat megosztását.",
		share_selected_version_hover: "A dokumentum ${0} változata meg van osztva. Ön a(z) ${1} változatot választotta ki.",
		share_selected_version_message: "Fontos: A dokumentum ${0} változata meg van osztva. Ön a(z) ${1} változatot választotta ki.",
		share_different_version_message: "Fontos: A(z) ${1} változatot választotta, azonban a dokumentum ${0} változata már meg van osztva.  Csak akkor oszthatja meg a(z) ${1} változatot, ha először törli a megosztást, azonban ehelyett megteheti azt is, hogy a(z) ${0} változatra mutató hivatkozást osztja meg.",
		share_version_message: "Fontos: A dokumentum ${0} változata meg van osztva. Válassza ki, hogy melyik változatot kívánja megosztani.",
		share_version_new: "${0} változat megosztása",
		share_version_new_p8_hover: "A dokumentum megosztása csak a kijelölt változatra mutató specifikus változathivatkozás hoz létre.<br><br>Amikor egy dokumentum már meg van osztva, a következőket teheti:<ul><li>Megoszthatja a legfrissebb változatot, és a hivatkozás a legfrissebb változatra irányítja át a felhasználókat.</li><li>Csak akkor oszthat meg egy korábbi változatot, ha először törli a megosztást.</li></ul>",
		share_version_new_cm_hover: "A dokumentum megosztása csak a kijelölt változatra mutató specifikus változathivatkozás hoz létre.<br><br>Amikor egy dokumentum már meg van osztva, a következőket teheti:<ul><li>Megoszthatja a legfrissebb változatot, és a hivatkozás a legfrissebb változatra irányítja át a felhasználókat.</li><li>Egy korábbi változatot nem oszthat meg.</li></ul>",
		share_version_update: "${0} változat megosztása (A megosztási beállítások frissítése).",
		share_version_update_p8_hover: "A dokumentum megosztása csak az adott változatra mutató hivatkozást tartja meg.<br><br>Amikor egy dokumentum már meg van osztva, a következőket teheti:<ul><li>Megoszthatja a legfrissebb változatot, és a hivatkozás a legfrissebb változatra irányítja át a felhasználókat.</li><li>Csak akkor oszthat meg egy korábbi változatot, ha először törli a megosztást.</li></ul>",
		share_version_update_cm_hover: "A dokumentum megosztása csak az adott változatra mutató hivatkozást tartja meg.<br><br>Amikor egy dokumentum már meg van osztva, a következőket teheti:<ul><li>Megoszthatja a legfrissebb változatot, és a hivatkozás a legfrissebb változatra irányítja át a felhasználókat.</li><li>Egy korábbi változatot nem oszthat meg.</li></ul>",
		share_version_change_to_current: "${0} változat megosztása (Frissítse a megosztást a kiválasztott változattal.)",
		share_version_change_to_current_p8_hover: "A dokumentumfrissítés megosztása frissíti a hivatkozást, hogy csak a kijelölt változatra mutasson.<br><br>Amikor egy dokumentum már meg van osztva, a következőket teheti:<ul><li>Megoszthatja a legfrissebb változatot, és a hivatkozás a legfrissebb változatra irányítja át a felhasználókat.</li><li>Csak akkor oszthat meg egy korábbi változatot, ha először törli a megosztást.</li></ul>",
		share_version_change_to_current_cm_hover: "A dokumentumfrissítés megosztása frissíti a hivatkozást, hogy csak a kijelölt változatra mutasson.<br><br>Amikor egy dokumentum már meg van osztva, a következőket teheti:<ul><li>Megoszthatja a legfrissebb változatot, és a hivatkozás a legfrissebb változatra irányítja át a felhasználókat.</li><li>Egy korábbi változatot nem oszthat meg.</li></ul>",
		share_repository: "Megosztott fájlok lerakata",
		share_repository_hover: "Ha nem látja a használni kívánt Box lerakatot, akkor egy új Box lerakatot a Lerakatok oldalon adhat hozzá.",
		share_options: "Megosztási beállítások",
		unshare_confirm: "Ha törli a megosztást, akkor minden megosztás hivatkozás megszakad, beleértve a más felhasználók által korábban küldött megosztás hivatkozásokat. Bármely más felhasználónak, aki meg szeretné osztani a dokumentumot, az eredeti dokumentumot kell kiválasztania és azt kell megosztania.<br><br>Valóban törölni kívánja a megosztást?",
		unshare_button: "Box megosztás törlése",
		admin_share: "Box megosztási szolgáltatások:",
		admin_share_hover: "Lehetővé teszi a felhasználók számára a dokumentumok megosztását bármely lerakatból, ahol engedélyezve van a Box megosztás. Egy dokumentum megosztása magában foglalja a fájl átmásolását a Box alkalmazásba, egy hivatkozás létrehozását, valamint a hivatkozás elküldését e-mailben.",
		admin_my_email_modifiable: "A felhasználók módosíthatják a Küldés innen e-mail címet",
		admin_my_email_modifiable_hover: "Alapértelmezés szerint egy Box megosztás esetén a felhasználó e-mail címe írásvédett, és a Box felhasználói fiókokat ábrázoló felhasználók és e-mail címek leképezéséből kerül beszerzésre.<br><br>Válassza ki ezt a beállítást, ha engedélyezni szeretné a felhasználók számára, hogy megosztáskor szerkesszék az e-mail címüket; az e-mail cím érvényessége azonban nem kerül ellenőrzésre.",
		admin_repos_admin_user: "Megosztásadminisztrátor:",
		admin_repos_admin_user_hover: "Állítsa be a megosztásadminisztrátort, ha egy olyan munkaasztallal rendelkezik, amelyhez engedélyezve vannak a Box megosztási szolgáltatások, és ez a Box lerakat van kiválasztva a megosztott fájlok lerakataként.<br><br>Kattintson a Beállítás lehetőségre, és jelentkezzen be a Box alkalmazásba egy érvényes Box adminisztrátori fiókkal.<br><br>A megosztásadminisztrátornak egy Box adminisztrátori felhasználónak kell lennie, aki a Box alkalmazásban korlátlan tárterülettel van beállítva.",
		admin_repos_admin_user_not_set_warning: "A Box adminisztrátor nincs konfigurálva a kiválasztott lerakathoz.<br><br>A Box megosztási szolgáltatások le vannak tiltva, amíg be nem állít egy Box adminisztrátort a kiválasztott lerakathoz, vagy válasszon egy másik Box lerakatot, ahol Box adminisztrátor be van állítva.<br><br>A Box adminisztrátort a lerakat Általános oldalán, a Box megosztási szolgáltatások szakaszban állíthatja be.",
		admin_share_not_configured_warning: "Mielőtt használhatná a BOX megosztási szolgáltatásait, fel kell venni és ki kell választani egy Box lerakatot kiszolgálói hitelesítéssel.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online konfiguráció:",
		admin_office_online_server_enable: "Office Online kiszolgáló:",
		admin_office_online_server_enable_hover: "Határozza meg, hogy a munkaasztalt elérő felhasználók szerkeszthetik-e Office dokumentumaikat az Office Online kiszolgáló használatával.",		
		admin_office_online_allow_collaborative_editing: "Együttműködő szerkesztés engedélyezése",
		admin_office_online_allow_collaborative_editing_hover: "Ugyanazon dokumentumon történő munka engedélyezése egynél több felhasználó számára. Törölje a beállítást akkor, ha egy felhasználóra kívánja korlátozni a dokumentumok szerkesztését.",
		admin_office_online_repository_not_set_warning: "Mielőtt engedélyezhetné az Office Online szolgáltatást, engedélyeznie kell a szolgáltatást egy lerakaton, és meg kell adnia a Microsoft Office Online kiszolgáló URL-címét. Kattintson a <b>Lerakatok</b> elemre, válasszon ki egy lerakatot, majd az <b>Integráció szerkesztése</b> lapon engedélyezheti a szolgáltatást. Kattintson a <b>Beállítások > Általános</b> menüpontra, és vigye fel a Microsoft Office Online kiszolgáló URL-címét.",
		admin_settings_office_online_server_enable_hover: "Adja meg, hogy az Office Online kiszolgáló használatával kívánja-e kezelni az Office dokumentumokat.",
		admin_office_online_server_url: "Microsoft Office Online kiszolgáló URL",
		admin_office_online_server_url_hover: "Adja meg az URL-címet, amellyel más alkalmazások kommunikálhatnak az Office Online kiszolgálóval. Az URL-cím formátuma a következő: http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Ellenőrizve",
	    admin_office_online_server_Failed: "<b>Meghiúsult</b>",

		admin_repcfg_office_online_service_p8_hover: "Az Office Online kiszolgálót használó lerakat inicializálásához hozzáadhatja a kiinduló sablonfájlt minden Office alkalmazáshoz. Ha egy sablon nincs megadva, akkor az alapértelmezett sablon kerül felhasználásra.",	
		admin_repcfg_office_online_server_integration: "MS Office Online kiszolgáló integráció",
		admin_repcfg_office_online_service_url_not_set_warning: "Mielőtt engedélyezhetné az Office Online kiszolgálót, meg kell adnia a Microsoft Office Online kiszolgáló URL-címét. Kattintson a Beállítások&gt; Általános menüpontra, és adja meg az URL-címet",
		admin_repcfg_office_online_word_template_name: "Alapértelmezett Word sablon",
		admin_repcfg_office_online_excel_template_name: "Alapértelmezett Excel sablon",
		admin_repcfg_office_online_powerpoint_template_name: "Alapértelmezett PowerPoint sablon",
		admin_repcfg_office_online_blank_template_description: "Ez az alapértelmezett sablon kerül felhasználásra akkor, ha nem vesz fel saját sablont.",
		/* Edit Service settings */
		admin_icn_edit_title: "Konfiguráció szerkesztése",	
	    admin_icn_edit_files_cleanup_interval: "Ideiglenes fájlok megszüntetési időköze (napokban):",
	    admin_icn_edit_files_cleanup_interval_hover: "Beállíthatja az ideiglenes fájlok megőrzésének időtartamát az ICN Edit ügyfélen. Az alapértelmezett időtartam 20 nap. A maximális időtartam 20 nap, a minimális 1 nap.",
	    admin_icn_edit_service_integration: "Szerkesztési szolgáltatás integráció",
	    admin_icn_edit_service_integration_intro: "A szerkesztési szolgáltatás segítségével a felhasználók egyszerűen hozzáadhatják vagy szerkesztheti a fájlokat a számítógépükre telepített natív alkalmazásokkal.<br><br><b>Fontos:</b> Ha engedélyezi a szerkesztési szolgáltatást, előbb mentenie kell a lerakat konfigurációját, hogy szerkeszteni tudja az előre meghatározott kategóriákat.",
		admin_icn_edit_service: "Szerkesztési szolgáltatás:",
		admin_icn_edit_enable_hover: "A szerkesztési szolgáltatás használatához:<ul><li>Engedélyezze a szolgáltatást a lerakaton</li><li>Engedélyezze a szolgáltatást a környezetben található munkaasztalokon</li><li>Telepítse az IBM Content Navigator Edit ügyfelet a felhasználói munkaállomásokra</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Engedélyezés",
		admin_icn_edit_disable: "Letiltás",
		admin_icn_edit_create_new_category: "Új kategória",
		admin_icn_edit_delete_category: "Kategória törlése",
		admin_icn_edit_edit_category: "Kategória szerkesztése",
		admin_icn_edit_disable_category: "Kategória letiltása",
		admin_icn_edit_enable_category: "Kategória engedélyezése",
		admin_icn_edit_new_category_dialog_title: "Új kategória",
		admin_icn_edit_edit_category_dialog_title:"Kategória szerkesztése",
		admin_icn_edit_new_category_dialog_instructions: "A dokumentumkategóriák segítségével a sablonokat MIME típusokhoz társíthatja a szerkesztési szolgáltatás számára. Például társíthatja a sablonok egy csoportját PDF fájlokhoz, hogy a felhasználók alkalmazhassanak sablonokat, amikor fájlokat adnak hozzá vagy szerkesztenek az IBM Content Navigator Edit ügyfélből. <br><br><b>Fontos:</b> Előbb mentenie kell a lerakat konfigurációját, hogy sablonokat adhasson hozzá a létrehozott kategóriához. ",
		admin_icn_edit_edit_category_dialog_instructions: "Előbb mentenie kell a lerakat konfigurációját, hogy sablonokat adhasson hozzá a kategóriához. ",
		admin_icn_edit_delete_category_dialog_instructions: "Szeretné törölni a kategóriát és a hozzá társított sablonokat?<br><br><b>Fontos:</b> A módosítások addig nem lesznek véglegesek, amíg nem menti azokat a lerakatba. ",
		admin_icn_edit_category_label: "Kategória: ",
		admin_icn_edit_category_discription_label:"Leírás: ",
		admin_icn_edit_template_column_head:"Sablon neve",
		admin_icn_edit_category_duplicate_error_message: "Már létezik ilyen azonosítójú kategória. ",
		admin_icn_edit_word_category_description: "Ez a kategória a Microsoft Word dokumentumokhoz a szerkesztési szolgáltatásban elérhető sablonokat határozza meg. ",
		admin_icn_edit_excel_category_description: "Ez a kategória a Microsoft Excel dokumentumokhoz a szerkesztési szolgáltatásban elérhető sablonokat határozza meg. ",
		admin_icn_edit_powerpoint_category_description: "Ez a kategória a Microsoft PowerPoint dokumentumokhoz a szerkesztési szolgáltatásban elérhető sablonokat határozza meg. ",

		icn_edit_add_template_dialog_title:"${0} sablon hozzáadása",
		icn_edit_add_template_only_one_file_error: "Csak egy fájlt választhat.",
		icn_edit_add_template_file_type_error: "Meg kell adnia egy érvényes ${0} sablonfájlt.<br><br>A kiválasztott dokumentum MIME típusa: ${1}.<br><br>Az érvényes MIME típusok: ${2}.",
		icn_edit_change_template_dialog_title: "${0} sablon szerkesztése",
		icn_edit_action_in_new_menu_name:"${0} dokumentum",
		icn_edit_action_in_new_menu_submenu_oo_name: "Office Online használatával",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "asztali alkalmazásokkal",
		icn_edit_new_document_dialog_title: "Új ${0} dokumentum",
		icn_edit_new_document_dialog_intro: "Új ${0} dokumentum létrehozása és hozzáadása a lerakathoz. A dokumentuma a kiválasztott szerkesztési szolgáltatás sablonnal kerül létrehozásra.", 
		icn_edit_select_edit_service_template: "Válasszon egy sablont",
		icn_edit_edit_service_template: "Szerkesztési szolgáltatás sablon:",
		icn_edit_new_document_category_no_templates_message:"Nincsenek sablonok ebben a kategóriában. Kérje meg az adminisztrátort, hogy vegye fel a sablonokat a kategóriába.",
		icn_edit_installer: "IBM Content Navigator Edit telepítő",
		admin_icn_cm_classes_and_roles_settings: "Osztály és szerepkör beállítások",
		admin_repcfg_classes_and_roles_warning: "Azoknak az osztályoknak és csoportoknak vagy felhasználóknak a megadása, akik sablonokat készíthetnek, szerkeszthetnek és használhatnak, illetve létrehozhatnak Microsoft Office Online vagy Szerkesztési szolgáltatással működő dokumentumvázlatokat.",
		admin_repcfg_classes_and_roles_click_warning: "kattintson ide.",
		/* Edit Service settings END */
		share_no_my_email_error: "Probléma merült fel a dokumentum megosztásához szükséges e-mail cím azonosításakor.",
		share_no_my_email_error_explanation: "Ön a(z) ${0} felhasználói azonosítóval van bejelentkezve, azonban a felhasználói azonosító nincs leképezve e-mail címre.",
		share_no_my_email_error_userResponse: "Próbáljon meg újra bejelentkezni, vagy jelentkezzen be egy eltérő felhasználói azonosítóval. Ha a probléma továbbra is fennáll, akkor jelentse ezt a hibát a rendszeradminisztrátornak.",
		share_no_my_email_error_adminResponse: "A(z) ${0} felhasználói azonosító nincs leképezve egy e-mail címre, és a(z) ${1} munkaasztal nem engedélyezi a felhasználók számára a Box megosztási szolgáltatásokhoz tartozó e-mail szerkesztését.<br><br>Próbálja meg a következő megoldások egyikét:<br>Győződjön meg róla, hogy az E-mail leképezés bedolgozó engedélyezve van.<br>Győződjön meg róla, hogy az emailMappingPlugin.json fájl tartalmazza a (z) ${0} felhasználói azonosítót és felhasználói e-mail címet, majd építse össze, konfigurálja és regisztrálja az E-mail leképezés bedolgozót.<br>Ha nem szeretné az E-mail leképezés bedolgozót vagy a FileNet P8 e-mail címtárat használni, hanem lehetővé szeretné tenni a felhasználók számára a saját e-mail címük megadását egy dokumentum megosztásakor, akkor módosíthatja a Box megosztási szolgáltatások munkaasztali beállításait, hogy engedélyezze a felhasználók számára a hivatkozás elküldését egy másik e-mail címről.",
		share_no_my_email_error_0: "felhasználói_azonosító",
		share_no_my_email_error_1: "munkaasztal_neve",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "A dokumentum egy későbbi változata meg van osztva, így nem oszthatja meg a dokumentum kiválasztott változatát.",
		share_later_version_shared_error_explanation: "Nem oszthatja meg egy korábban megosztott dokumentum régebbi változatát.",
		share_later_version_shared_error_userResponse: "A dokumentum későbbi változatára mutató hivatkozás elküldéséhez először ki kell választania a későbbi változatot, majd ezután használhatja a Megosztás műveletet.<br><br>A dokumentum kiválasztott változatának megosztásához először törölnie kell a dokumentum későbbi változatának megosztását.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Új üzenet",
		email_from: "Kezdő:",
		email_to: "Vége:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Adjon meg egy érvényes e-mail címet.",
		email_subject: "Tárgy:",
		email_message: "Üzenet:",
		email_message_placeholder: "Üzenet hozzáadása",
		email_attachments: "Mellékletek:",
		email_links: "Hivatkozások:",
		email_send: "Küldés",
		email_dont_send: "Ne legyen elküldve",
		email_subject_reminder: "Tárgy emlékeztető",
		email_subject_reminder_confirm: "Elküldi ezt az üzenetet tárgy nélkül?",
		email_missing_from_error: "Probléma merült fel az e-mail küldéséhez szükséges Feladó e-mail cím azonosításakor.",
		email_missing_from_error_explanation: "Ön a(z) ${0} felhasználói azonosítóval van bejelentkezve, azonban a felhasználói azonosító nincs leképezve e-mail címre.",
		email_missing_from_error_userResponse: "Próbáljon meg újra bejelentkezni, vagy jelentkezzen be egy eltérő felhasználói azonosítóval. Ha a probléma továbbra is fennáll, akkor jelentse ezt a hibát a rendszeradminisztrátornak.",
		email_missing_from_error_adminResponse: "A(z) ${0} felhasználói azonosító nincs leképezve egy e-mail címre, és a(z) ${1} munkaasztal nem engedélyezi a felhasználók számára a Feladó e-mail cím szerkesztését.<br><br>Próbálja meg a következő megoldások egyikét:<br>Győződjön meg róla, hogy az E-mail leképezés bedolgozó engedélyezve van.<br>Győződjön meg róla, hogy az emailMappingPlugin.json fájl tartalmazza a (z) ${0} felhasználói azonosítót és felhasználói e-mail címet, majd építse össze, konfigurálja és regisztrálja az E-mail leképezés bedolgozót.<br>Ha nem szeretné az E-mail leképezés bedolgozót vagy a FileNet P8 e-mail címtárat használni, hanem lehetővé szeretné tenni a felhasználók számára a saját e-mail címük megadását egy e-mail küldésekor, akkor módosíthatja a munkaasztali E-mail beállításokat, hogy engedélyezze a felhasználók számára a Feladó e-mail cím módosítását.",
		email_missing_from_error_0: "felhasználói_azonosító",
		email_missing_from_error_1: "munkaasztal_neve",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "A dokumentum nem nyitható meg.",
		open_edit_document_with_native_application_error_explanation: "Az IBM Content Navigator nem tud csatlakozni az IBM Content Navigator Edit ügyfélhez.",
		open_edit_document_with_native_application_error_userResponse: "Telepítse és indítsa el az IBM Content Navigator Edit ügyfelet a munkaállomásán. Azután próbálja meg újra megnyitni a dokumentumot.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "A dokumentum nem nyitható meg.",
		connect_to_the_streamline_service_error_explanation: "Az IBM Content Navigator nem tud csatlakozni az IBM Content Navigator Edit ügyfélhez.",
		connect_to_the_streamline_service_error_userResponse: "Telepítse és indítsa el az IBM Content Navigator Edit ügyfelet a munkaállomásán. Azután próbálja meg újra megnyitni a dokumentumot.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "Az IBM Content Navigator nincs helyesen konfigurálva dokumentumok megosztására.",
		share_not_configured_error_explanation: "A Box megosztási szolgáltatását megfelelően konfigurálni kell, mielőtt megosztja a dokumentumokat.",
		share_not_configured_error_userResponse: "Lépjen kapcsolatba az adminisztrátorral, és kérje a Box megosztási szolgáltatás beállítását.",
		share_not_configured_error_adminResponse: "A dokumentumok megosztása előtt a következő elemeket kell beállítani:<ul><li>Az adminisztrációs eszközök beállításaiban engedélyezni kell a feladatkezelő szolgáltatást.</li><li>A feladatkezelő csatlakozási azonosítóját konfigurálni kell a lerakatban.</li><li>A megosztást engedélyezni kell a lerakatban.</li><li>Ki kell választani egy Box lerakatot megosztás céljából a munkaasztalon.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Az új változat tulajdonságmódosításai nem kerültek mentésre.",
		checkin_cors_save_attributes_error_explanation: "A változat létrehozásra került, de a tulajdonságmódosítások nem kerültek mentésre. A dokumentum még mindig kiiktatható.",
		checkin_cors_save_attributes_error_userResponse: "Oldja fel a dokumentum zárolását, és frissítse a tulajdonságokat a Tulajdonságok előugró menüpont segítségével.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Az új dokumentum tulajdonságmódosításai nem kerültek mentésre.",
		add_cors_save_attributes_error_explanation: "A dokumentum létrehozásra került, de a tulajdonságmódosítások nem kerültek mentésre.",
		add_cors_save_attributes_error_userResponse: "Frissítse a tulajdonságokat a Tulajdonságok előugró menüpont segítségével.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "A dokumentum nem nyitható meg.",		
		edit_document_using_edit_service_error_explanation: "A dokumentum nem nyitható meg a Szerkesztési szolgáltatásban.",
		edit_document_using_edit_service_error_userResponse: "Kérje meg az adminisztrátort, hogy frissítse a Szerkesztési szolgáltatás integrációt.<br><br> Ha a felhasználónak el kell érnie a dokumentumot a Szerkesztési szolgáltatásból, akkor menjen a lerakat Integráció szerkesztése oldalára, és frissítse a Szerkesztési szolgáltatás integrációt, hogy tartalmazza az osztályt a Szerkesztési szolgáltatás támogatáshoz módosítandó osztályok listájában.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "A dokumentum nem nyitható meg.",		
		edit_document_is_editing_by_oos_error_explanation: "A dokumentumot jelenleg az Office Online szolgáltatás használja.",
		edit_document_is_editing_by_oos_error_userResponse: "Megnyitás előtt a szerkesztési szolgáltatásban, a dokumentumot mentenie kell és be kell zárnia az Office Online szolgáltatásban.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Cross-Origin Resource Sharing (CORS) feltöltések engedélyezése",

		/* Email Settings */
		admin_email_settings: "E-mail beállítások:",
		admin_email_settings_hover: "Válassza ki, hogy a felhasználók melyik típusú e-mail szolgáltatást használják. Ha engedélyezi a HTML alapú e-mail szolgáltatást, akkor engedélyezheti a felhasználók számára, hogy módosítsák a Feladó e-mail címét. Ha a Java alapú e-mail szolgáltatást szeretné engedélyezni, akkor rendelkeznie kell Java-t támogató böngészővel.",
		admin_email_use_service: "HTML alapú e-mail szolgáltatás használata",
		admin_email_use_applet: "Java alapú e-mail szolgáltatás használata",
		admin_email_can_modify_from: "A felhasználók módosíthatják a Feladó e-mail címét",
		admin_email_can_modify_from_hover: "Alapértelmezés szerint a feladó e-mail címe nem módosítható, és a felhasználói fiókokat ábrázoló felhasználók és e-mail címek leképezéséből kerül beszerzésre.<br><br>Válassza ki ezt a beállítást, ha engedélyezni szeretné a felhasználók számára, hogy e-mail küldésekor szerkesszék az e-mail címüket; az e-mail cím érvényessége azonban nem kerül ellenőrzésre.",
		admin_email_use_from_as_sender: "A Feladó e-mail címe legyen az e-mail küldője",
		admin_email_use_from_as_sender_hover: "Alapértelmezésben a felhasználók e-mailjeiben egy érvényes Feladó e-mail cím kerül felhasználásra. Az e-mail címet a CNMailSession levelezési munkamenet határozza meg az alkalmazáskiszolgálón. Válassza ezt a beállítást, hogy a felhasználó e-mail címe legyen használva az e-mailben.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Új feljegyzések",
		addAnnotationDlg_labelContents: "Tartalom:",
		addAnnotationDlg_labelAccess: "Hozzáférés:",
		addAnnotationDlg_labelPublic: "Nyilvános",
		addAnnotationDlg_labelPrivate: "Saját",
		addAnnotationDlg_labelPrivateGroup: "Csoport sajátja",
		addAnnotationDlg_labelGroup: "Csoport",
		addAnnotationDlg_labelCopiable: "A feljegyzés másolható másik kiszolgálóra.",
		addAnnotationDlg_buttonLabel_save: "Mentés",

		/* Skip navigation */
		skipNavigation_title_main: "Ugrás a fő tartalomra",
		skipNavigation_title_menu: "Ugrás a navigációs gombokra",
		skipNavigation_label_main: "Ugrás a fő tartalomra",
		skipNavigation_label_menu: "Ugrás a navigációs gombokra",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Csoportterületek kezelése",
		manage_teamspace_pane_instance_hdr: "Csoportterületek",
		manage_teamspace_pane_template_hdr: "Sablonok",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Görgetés előre",
		scroll_back: "Görgetés vissza",

		breadcrumb_separator_open: "Csomópont megnyitása",
		breadcrumb_separator_close: "Csomópont bezárása",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nincs kijelölt elem.",

		/* eds */
		eds_url: "Külső adatszolgáltatás URL címe:",
		eds_request_timeout: "Szerviz igénylés időtúllépés (másodperc):",
		eds_is_required: "Megakadályozza, hogy a felhasználók olyan műveleteket végezzenek, amelyek módosítják a tulajdonságok értékeit, amikor az EDS nem érhető el",

		/* eforms */
		eform_signing_pane_welcome: "Űrlap aláírása",
		eform_signing_button_label: "Aláírás",
		eform_signing_pane_delete: "Aláírás törlése",
		eform_signing_button_label_delete: "Törlés",

		xtplugin_server_label: "Az IBM FileNet Workplace XT kiszolgáló URL címe",
		xtplugin_server_hover: "Adja meg annak a kiszolgálónak az URL címét, amelyen az IBM FileNet Workplace XT rendszerbe van állítva. Például http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "Az IBM eClient kiszolgáló URL címe",
		ecplugin_server_hover: "Adja meg annak a kiszolgálónak az URL címét, amelyen az IBM eClient rendszerbe van állítva. Például http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Nagyszámú elemen végzett művelet hosszú ideig tarthat. Kívánja folytatni?",
		large_number_actions_continue_button: "Folytatás",

		large_items_actions_confirmation_question: "Nagyszámú elemen végzett művelet hosszú ideig tarthat. Kívánja folytatni?",

		viewer_editproperties_title: "Megerősítés",
		viewer_editproperties_title_warning: "Figyelmeztetés",
		viewer_editproperties_save: "Mentés",
		viewer_editproperties_next: "Következő",
		viewer_editproperties_reset: "Visszaállítás",
		viewer_editproperties_reset_hover: "A nem mentett adatok vissza lesznek állítva a korábban mentett értékekre",
		viewer_editproperties_saveandgetnext: "Mentés, majd következő lekérése",
		viewer_editproperties_saveandgetnext_hover: "A módosításaim mentése után automatikusan lekéri következő dokumentumot",
		viewer_editproperties_prompt_save_changes: "A következő dokumentum tulajdonságait módosította<br>${0}<br><br>Menti a módosításokat?",
		viewer_editproperties_prompt_discard_changes: "A következő dokumentum tulajdonságait módosította<br>${0}<br><br>Azonban a tulajdonságok közül legalább egynek az értéke érvénytelen, így a módosítások nem menthetők. Javítsa az érvénytelen értékeket, vagy vesse el a módosításokat.<br>Kívánja javítani a Tulajdonságok panelen megjelenített érvénytelen értékeket?",
		viewer_comments_prompt_discard_changes: "Módosította a megjegyzéseket. Menti a módosításokat?",
		viewer_notelogs_prompt_discard_changes: "Módosította a megjegyzésnaplókat. Menti a módosításokat?",
		social_collaborated_version: "Változat: ${0}",
		social_link_label: "Kicsoda...",

		// social comments
		comments: "Megjegyzések",
		comments_add_hint: "Nyomja meg az Entert megjegyzések hozzáadásához.",
		comments_hint: "Írja be a megjegyzéseit.",
		comments_label: "Nyomja meg az Entert vagy a Tab billentyűt a megjegyzések mentéséhez. Nyomja meg az Esc billentyűt a visszavonáshoz.",
		comments_delete_confirmation: "Kívánja törölni a kiválasztott megjegyzést?",
		comments_number: "Megjegyzések: ${0}",
		comments_save_new: "Módosította a megjegyzéseket. Valóban bezárja az ablakot a módosítások mentése nélkül?",

		notelogs: "Megjegyzésnaplók",
		notelogs_download: "Letöltés",
		notelog_modify: "Módosítások mentése",
		notelog_edit: "Megjegyzésnapló szerkesztése",
		notelog_create_newVersion: "Új megjegyzésnapló változat létrehozása",
		notelog_add_hint: "Írja be a megjegyzéseit, majd a hozzáadáshoz nyomja meg az Entert.",
		notelog_hint: "Soremeléshez nyomja meg a Shift+Enter kombinációt",
		notelog_add_placeholder: "Nyomja meg az Entert, hogy hozzáadja a megjegyzést a megjegyzésnaplóhoz.",
		notelog_save_new: "Módosította a megjegyzésnaplót. Valóban bezárja az ablakot a módosítások mentése nélkül?",

		// P8 markings related
		cannot_remove_markings: "Nem jogosult eltávolítani a következő jelzés(eke)t: {0}",

		// download count
		downloadcount: "Letöltések: {0}",
		downloadcount_single: "1 letöltés",
		downloadcount_multiple: "{0} letöltés",
		downloadcount_none: "Még senki nem töltötte le",

		// recommendations
		recommendations: "Tetszik ennyinek: {0}",
		recommendations_recommend: "Tetszik",
		recommendations_unrecommend: "Nem tetszik",
		recommendations_you: "Ön kedveli ezt",
		recommendations_you_and_another: "Ön és 1 másik személy kedveli ezt",
		recommendations_you_and_others: "Ön és {0} másik személy kedveli ezt",
		recommendations_another: "1 személy kedveli ezt",
		recommendations_others: "{0} személy kedveli ezt",
		recommendations_none: "Még senki nem kedveli ezt",

		// tags
		tags: "Címkék: ${0}",
		tags_delete: "${0} törlése",
		tags_none: "Nincs megjelenítendő címke.",
		tags_add: "Címkék hozzáadása:",
		tags_hint: "Címkék hozzáadásához nyomja meg az Entert.",
		tags_hover_help: "Adjon meg egy címkét vagy egy címkelistát, amely az azonos címkéjű dokumentumok kereséséhez használható. A címkék elválasztásához vesszőt (,), pontosvesszőt (;) vagy szóközt használhat.",
		tags_hover_help_box: "Adjon meg egy címkét vagy egy vesszővel elválasztott címkelistát, amely az azonos címkéjű dokumentumok kereséséhez használható.",
		tags_no_access: "Nem rendelkezik megfelelő engedélyekkel címkék hozzáadásához.",

		//task scheduler pane
		taskPane_tooltip: "Aszinkron feladatok nézet megnyitása",
		taskPane_tree: "Feladat ablakrész navigációs fa",
		taskPane_allTasks: "Összes feladat",
		taskPane_scheduledTasks: "Ütemezett feladatok",
		taskPane_recurringTasks: "Ismétlődő feladatok",
		taskPane_inProgressTasks: "Folyamatban lévő feladatok",
		taskPane_completedTasks: "Kész feladatok",
		taskPane_failedTasks: "Sikertelen feladatok",
		taskPane_disabledTasks: "Tiltott feladatok",
		taskPane_statusScheduled: "Ütemezve",
		taskPane_statusInProgress: "Folyamatban",
		taskPane_statusCompleted: "Kész",
		taskPane_statusFailed: "Meghiúsult",
		taskPane_statusPaused: "Szünetel",
		taskPane_noItemSelected: "Nincs választott elem",
		taskSchedulerPane_scheduleInformation: "Ütemezési információk",
		taskSchedulerPane_loginInformation: "Bejelentkezési információk",
		taskSchedulerPane_startImmediately: "Azonnali indítás",
		taskSchedulerPane_recurrence: "Ismétlődés",
		taskSchedulerPane_interval: "Időköz",
		taskSchedulerPane_scheduleReport: "Jelentés ütemezése",
		taskSchedulerPane_nameHoverHelp: "Adja meg a feladat nevét.",
		taskSchedulerPane_descriptionHoverHelp: "Adja meg a feladat leírását. A leírás segítséget nyújt a feladatok megkülönböztetésében.",
		taskSchedulerPane_startTimeHoverHelp: "Adja meg mikor fusson a feladat. A feladat azonnali futtatásához válassza az Azonnali indítás lehetőséget.",
		taskSchedulerPane_recurrenceHoverHelp: "Ütemezheti úgy a feladatot, hogy annak futása időnként ismétlődjön.",
		taskSchedulerPane_endTimeHoverHelp: "Adja meg mikor álljon meg a feladat futása. A feladat az ütemezett indítási időponttól az ütemezett leállási időpontig fut.",
		taskSchedulerPane_usernameHoverHelp: "Ismétlődő feladatok esetében meg kell adnia egy felhasználónevet, hogy a szolgáltatás hitelesíthesse a futási időpontot.",
		taskSchedulerPane_passwordHoverHelp: "Ismétlődő feladatok esetében meg kell adnia az adott felhasználó jelszavát, hogy a szolgáltatás hitelesíthesse a futási időpontot.",
		taskSchedulerPane_notification: "Értesítés",
		taskSchedulerPane_emailAddress: "E-mail cím",
		taskSchedulerPane_emailAddressHoverHelp: "Adjon meg azt az e-mail címet, amelyen fogadni kívánja a feladat állapotával kapcsolatos értesítéseket.",
		taskSchedulerPane_intervalHoverHelp: "Adja meg annak az időtartamnak a hosszát, ameddig az ismétlődő feladat futtatása érvényben van. Az időtartam megadható órában, napban, hétben vagy hónapban.",
		taskSchedulerPane_scheduledStartTime: "Ütemezett indítási idő",
		taskSchedulerPane_startTime: "Indítási idő",
		taskSchedulerPane_title: "Ütemezés",
		taskSchedulerPane_runNow: "Futtatás most",
		taskSchedulerPane_runOnce: "Futtatás egyszer",
		taskSchedulerPane_runAtSchedule: "Futtatás ütemezésben",
		taskSchedulerPane_repeats: "Ismétlések",
		taskSchedulerPane_repeatsEvery: "Ismétlés",
		taskSchedulerPane_hourly: "Óránként",
		taskSchedulerPane_daily: "Naponta",
		taskSchedulerPane_weekly: "Hetente",
		taskSchedulerPane_monthly: "Havonta",
		taskSchedulerPane_yearly: "Évente",
		taskSchedulerPane_sunday: "V",
		taskSchedulerPane_monday: "H",
		taskSchedulerPane_tuesday: "K",
		taskSchedulerPane_wednesday: "Sze",
		taskSchedulerPane_thursday: "K",
		taskSchedulerPane_friday: "P",
		taskSchedulerPane_saturday: "V",
		taskSchedulerPane_starting: "Kezdési dátum",
		taskSchedulerPane_after: "Utána:",
		taskSchedulerPane_ending: "Befejező dátum",
		taskSchedulerPane_times: "idő",
		taskSchedulerPane_days: "nap",
		taskSchedulerPane_hours: "óra a napon belül",
		taskSchedulerPane_interval: "Időköz",
		taskSchedulerPane_endingDays: "Befejezés (nap)",
		taskSchedulerPane_never: "Soha",
		taskSchedulerPane_categorization: "Kategorizálás",
		taskSchedulerPane_scheduleTask: "Feladat ütemezése",
		taskInformationPane_details: "Részletek",
		taskInformationPane_errors: "Hibák",
		taskInformationPane_taskInstances: "Feladatpéldányok",
		taskInformationPane_audits: "Felülvizsgálatok",
		taskInformationPane_results: "Eredmények",
		asyncTasks: "Aszinkron feladatok",

		//entry template pane
		search_all_entry_templates: "Összes adatbeviteli sablon megkeresése.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Teljes hely megjelenítése",
		mobilesite: "Mobil webhely megjelenítése",
		profile: "Profil kezelése",
		office_template: "Office sablon:",
		select_office_template: "Válasszon egy Office sablont",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "A kiválasztott dokumentumokat nem lehet megnyitni a megjelenítőben az Összefésülés és felosztás művelettel.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "A PDF és TIFF dokumentumokra beállított megjelenítő nem támogatja az Összefésülés és felosztás műveletet.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy konfiguráljon olyan megjelenítőt a PDF és TIFF dokumentumokhoz, amely támogatja az Összefésülés és felosztás műveletet, mint például a Daeja ViewONE virtuális megjelenítő.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "A kiválasztott PDF dokumentumokat nem lehet megnyitni a megjelenítőben az Összefésülés és felosztás művelettel.",
		document_builder_pdf_unsupported_viewer_error_explanation: "A PDF dokumentumokra beállított megjelenítő nem támogatja az Összefésülés és felosztás műveletet.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy konfiguráljon olyan megjelenítőt a PDF dokumentumokhoz, amely támogatja az Összefésülés és felosztás műveletet, mint például a Daeja ViewONE virtuális megjelenítő.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "A kiválasztott TIFF dokumentumokat nem lehet megnyitni a megjelenítőben az Összefésülés és felosztás művelettel.",
		document_builder_tiff_unsupported_viewer_error_explanation: "A TIFF dokumentumokra beállított megjelenítő nem támogatja az Összefésülés és felosztás műveletet.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Kérje meg a rendszeradminisztrátort, hogy konfiguráljon olyan megjelenítőt a TIFF dokumentumokhoz, amely támogatja az Összefésülés és felosztás műveletet, mint például a Daeja ViewONE virtuális megjelenítő.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "A kiválasztott dokumentumokat nem lehet megnyitni a megjelenítőben az Összefésülés és felosztás művelettel.",
		document_builder_unsupported_documents_error_explanation: "Az Összefésülés és felosztás művelet csak PDF és TIFF dokumentumok esetén működik.",
		document_builder_unsupported_documents_error_userResponse: "Válasszon ki támogatott dokumentumokat, majd próbálkozzon újra.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Egyes kiválasztott dokumentumokat nem lehet megnyitni a megjelenítőben az Összefésülés és felosztás művelettel.",
		document_builder_some_unsupported_documents_error_explanation: "Az Összefésülés és felosztás művelet csak az azonos lerakatból megnyitott PDF és TIFF dokumentumok esetén működik.",
		document_builder_some_unsupported_documents_error_userResponse: "A támogatott dokumentumok a megjelenítőben nyílnak meg.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Hiba történt a módosított tartalom beiktatásakor.",
		document_builder_checkin_failed_explanation: "A megjelenítő hiba választ kapott a módosított tartalom beiktatásakor.",
		document_builder_checkin_failed_userResponse: "Kérje meg adminisztrátorát, hogy tekintse át a a webalkalmazás-kiszolgáló naplófájljait.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "A dokumentum nem nyitható meg.",
		no_viewer_to_view_error_explanation: "A rendszeradminisztrátor letiltotta a dokumentum megjelenítését. Ha szeretne hozzáférni a dokumentumhoz, akkor letöltheti.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "A tartalom nem állítható össze.",
		document_build_failed_userResponse: "Kérje meg adminisztrátorát, hogy tekintse át a megjelenítő naplófájljait.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "A dokumentum nem nyitható meg Összefésülés és felosztás módban.",
		document_builder_open_failed_userResponse: "Kérje meg adminisztrátorát, hogy tekintse át a megjelenítő naplófájljait.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "A rendszer nem tudott átváltani Összefésülés és felosztás módba.",
		document_builder_switch_failed_userResponse: "Kérje meg adminisztrátorát, hogy tekintse át a megjelenítő naplófájljait.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumentumok",
		print_service_page_setup_tab_title: "Oldalbeállítás",
		print_service_OD_print_tab_title: "Nyomtatóbeállítások",
		print_service_status_merging: "Dokumentumok összefésülése...",
		print_service_status_converting: "Dokumentumok konvertálása...",
		print_service_status_formatting: "Dokumentum formázása nyomtatásra...",
		admin_print_service_maximum_number_to_print: "Kinyomtatható dokumentumok maximális száma:",
		admin_print_service_maximum_size_to_print: "Maximálisan nyomtatható adatmennyiség (MB-ban):",
		admin_print_service_maximum_number_to_print_hover_help: "A felhasználók által egyszerre nyomtatható dokumentumok maximális száma. Az alapértelmezett maximum az 50. Ha nem kívánja dokumentumszámmal korlátozni a nyomtatást, akkor állítsa be a korlátot nullára. ",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Korlátozás:</b> Ez a beállítás IBM Content Manager OnDemand rendszeren nem használható.<br/><br/>Adja meg az IBM Daeja ViewONE nyomtatási szolgáltatásával nyomtatható adatok maximális mennyiségét. <br /><br />Az egyes kiválasztott dokumentumok teljes mérete nem haladhatja meg ezt az értéket. <br/><br/>Az alapértelmezett méretkorlát 200 MB. A 200 MB-nál nagyobb érték megadása befolyásolhatja a rendszer teljesítményét. Ha nem kívánja dokumentummérettel korlátozni a nyomtatást, akkor állítsa be a korlátot nullára. ",
		// error printing
		print_service_error_printing: "Hiba történt a nyomtatás során.",
		print_service_error_printing_userResponse: "Kérje meg rendszeradminisztrátort, hogy tekintse át a nyomtatási szolgáltatás naplófájljait.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "A kiválasztott dokumentumok túl nagyok a nyomtatáshoz",
		print_service_max_content_error_explanation: "A kiválasztott dokumentumok meghaladják a(z) ${0} MB adatméretet. ",
		print_service_max_content_error_userResponse: "Válasszon ki kevesebb dokumentumot, vagy válasszon ki kisebb dokumentumokat, és nyomtasson újra. Vagy keresse meg a rendszeradminisztrátort, hogy növelje meg a munkaasztalról egyidejűleg nyomtatható elemek maximális méretét.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Az elemek nem nyomtathatók ki. ",
		print_service_max_number_selected_error_explanation: "Egyidejűleg legfeljebb ${0} elem nyomtatható. ${1} elem nyomtatását kísérelte meg.",
		print_service_max_number_selected_error_userResponse: "Válasszon ki kevesebb elemet, és próbálkozzon újra az elemek nyomtatásával. Vagy keresse meg a rendszeradminisztrátort, hogy növelje meg a munkaasztalról egyidejűleg nyomtatható elemek maximális számát.",
		print_service_max_number_selected_error_0: "elemek_maximális_száma",
		print_service_max_number_selected_error_1: "elemek_száma",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


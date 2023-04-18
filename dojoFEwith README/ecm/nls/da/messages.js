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
		welcome_user: "Velkommen, ",
		about: "Om",
		all: "Alle",
		help: "Hjælp",
		user_session: "Brugersession",
		user_session_for: "Brugersession for ${0}",
		user_session_for_with_container: "Brugersession for ${0} (${1})",
		tools: "Værktøjer",
		login: "Log på",
		logout: "Log ud",
		search: "Søg",
		saved_searches: "Gemte søgninger",
		content_analytics: "Analysér indhold",
		reset: "Nulstil",
		reset_hover: "Alle ikke-gemte data på alle skilleblade nulstilles til de værdier, der tidligere er gemt",
		reset_default: "Ryd alle",
		reset_default_hover: "Rydder feltet Aktuel etiket på alle skilleblade.",
		locale: "Sprogkonvention:",
		up: "Op",
		down: "Ned",
		restore: "Gendan",
		maximize: "Maksimér",
		values_label: "Værdier",
		value_label: "Værdi:",
		path_label: "Sti:",
		new_label: "Nyt:",
		back_label: "Tilbage",
		clear: "Ryd",
		set: "Angiv...",
		browse: "Gennemse",
		work: "Arbejde",
		connect: "Opret forbindelse",
		documents: "Dokumenter:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. Varemærkerne IBM og IBM-logoet tilhører IBM Corporation i mange af verdens jurisdiktioner. Varemærket Java og alle varemærker og logoer, der er baseret på Java, tilhører Oracle og/eller tilknyttede virksomheder. Der er en begrænset licens til den inkluderede Oracle Outside In Technology, og den kan kun anvendes sammen med dette program. Dette Program licenseres under vilkårene i den licensaftale, der følger med Programmet. Licensaftalen kan være placeret i en programbiblioteksmappe eller i et bibliotek ved navn \"License\" eller \"Non_IBM_License\", eller den kan være leveret som en trykt licensaftale. Læs denne aftale grundigt igennem, inden du anvender Programmet. Ved at tage dette Program i brug, accepterer du disse vilkår. ",
		edit: "Redigér",
		cancel: "Annullér",
		close: "Luk",
		close_all: "Luk alle skilleblade",
		close_others: "Luk andre skilleblade",
		ok: "OK",
		yes: "Ja",
		no: "Nej",
		open: "Åbn",
		refresh: "Opfrisk",
		refresh_cabinets: "Opfrisk alle kabinetter",
		delete_text: "Slet",
		export_config: "Eksportér konfiguration",
		description: "Beskrivelse",
		true_label: "Sand",
		false_label: "Falsk",
		error: "Fejl",
		error_reference_hover: "Søg på www.ibm.com efter flere oplysninger om denne fejl.",
		url_label: "URL",
		default_label: "Standard",
		ibm_label: "IBM",
		light_label: "Lys",
		dark_label: "Mørk",
		save: "Gem",
		saveAs: "Gem som...",
		save_and_close: "Gem og luk",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ingen",
		Name: "Navn",
		"${NAME}": "Navn",
		mime_type: "MIME-type",
		mime_type_contains_label: "MIME-typen indeholder",
		mime_type_header: "MIME-type",
		mime_type_icon: "MIME-typeikon",
		casesearch: "Sag",
		item: "Element",
		no_mime_type: "Dette element er tomt.",
		items_selected: "${0} elementer valgt.",
		requestor: "Rekvireret af",
		scheduledStartTime: "Planlagt starttid",
		isRecurring: "Gentages",
		weeks: "Uger",
		days: "Dage",
		hours: "Timer",
		endTime: "Sluttid",
		username: "Brugernavn",
		password: "Kodeord",
		serverURL: "Server-URL",
		enable: "Aktivér",
		disable: "Deaktivér",
		finish: "Udfør",
		previous: "Forrige",
		next: "Næste",
		schedule: "Plan",
		removeFromThisList: "Fjern fra denne liste",
		status: "Status",
		scheduledEndTime: "Planlagt sluttidspunkt",
		type: "Type",
		mode: "Tilstand",
		startTime: "Starttid",
		createdBy: "Oprettet af",
		nextScheduledTime: "Næste planlagte tidspunkt",
		id: "Id",
		duration: "Varighed",
		repeatCycle: "Hyppighed",
		taskTypeName: "Opgavetype",
		to: "til",
		filter: "Filtrér:",
		error_message: "Fejlmeddelelse",

        file_type: "Dokumenttype",
        word_template_name: "Navn på Word-skabelon",
        excel_template_name: "Navn på Excel-skabelon",
        powerpoint_template_name: "Navn på PowerPoint-skabelon",
        template_description: "Beskrivelse af skabelon",
        action_add_template: "Tilføj",
        action_change_template: "Redigér",      
        action_edit_template_properties: "Egenskaber",
        add_presentation_template: "Tilføj præsentationsskabelon",
    	add_spreadsheet_template: "Tilføj regnearksskabelon",
    	add_doc_template: "Tilføj dokumentskabelon",    	
    	file_type_doc_hover: "Du skal angive en gyldig skabelonfil til et tekstbehandlingsdokument.<br><br>Gyldige MIME-typer: ${0}",
    	file_type_doc_error: "Du skal angive en gyldig skabelonfil til et tekstbehandlingsdokument.<br><br>Den valgte dokument-MIME-type: ${0}<br><br>Gyldige MIME-typer: ${1}",
    	file_type_presentation_hover: "Du skal angive en gyldig skabelonfil til præsentationer.<br><br>Gyldige MIME-typer: ${0}",
    	file_type_presentation_error: "Du skal angive en gyldig skabelonfil til præsentationer.<br><br>Den valgte dokument-MIME-type: ${0}<br><br>Gyldige MIME-typer: ${1}",
    	file_type_spreadsheet_hover: "Du skal angive en gyldig skabelonfil til regneark.<br><br>Gyldige MIME-typer: ${0}",
    	file_type_spreadsheet_error: "Du skal angive en gyldig skabelonfil til regneark.<br><br>Den valgte dokument-MIME-type: ${0}<br><br>Gyldige MIME-typer: ${1}",
    	office_online_only_one_template_error: "Du kan kun vælge én fil.",
    	change_presentation_template: "Redigér præsentationsskabelon",
    	change_spreadsheet_template: "Redigér regnearksskabelon",
    	change_doc_template: "Redigér dokumentskabelon",
    	change_button: "Redigér",
	    new_document_dialog_doc_title: "Nyt dokument",
	    new_document_dialog_presentation_title: "Ny præsentation",
	    new_document_dialog_spreadsheet_title: "Nyt regneark",
	    new_document_dialog_title_label: "Titel:",
	    new_document_dialog_title_hover: "Angiv en titel til dette dokument.",
	    new_document_dialog_title_missing_message: "Du skal angive en titel.",
	    office_online_save_before_adding_templates_title: "Gem ændringerne i opbevaringsstedet",
	    office_online_save_before_adding_templates_error: "Du kan ikke tilføje Office-skabeloner, før du har gemt de ændringer, du har foretaget i opbevaringsstedet. Klik på <b>Gem og luk</b>, og åbn derefter opbevaringsstedet for at tilføje Office-skabeloner.",
	    copy_to_OOS_dialog_doc_title: "Nyt dokument",
	    office_online_checkin_cancelcheckout_message: "Dette dokument redigeres i Microsoft Office Online. Du kan ikke tjekke dokumentet ind eller annullere udtjekningen, mens det er åbent i Microsoft Office Online.",
	    new_document_classification: "Klassificering:",
	    new_document_classification_help: "Nulstiller klasse, egenskaber og den overordnede folder, hvis den findes, for kildedokumentet. Når du tilføjer et dokument ved hjælp af en indgangsskabelon, bliver indgangsskabelonen til kildedokumentet automatisk valgt, hvis der findes en. Egenskaberne for kildedokumentet bliver anvendt som standardværdier, men folderen og den klasse, der er angivet i indgangsskabelonen, bevares.",
		new_document_classification_use_source_document: "Brug kildedokument:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0}-typeikon",
		repository_name_and_type: "${0}-navn og -type",
		select_class_label: "Vælg ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Oplysninger",
		detail_view_button: "Oplysninger",
		magazine_view_button_tooltip: "Magasin",
		magazine_view_button: "Magasin",
		filmstrip_view_button_tooltip: "Filmklip",
		filmstrip_view_button: "Filmklip",

		magazine_view_show: "Vis i magasinformat",
		detail_view_show: "Vis i detaljeformat",

		total_count_item: "element",
		total_count_items: "elementer",
		total_count_more_items: "Flere end ${0} elementer",

		extension_changed: "Filtypen for den valgte fil svarer ikke til filtypen for den oprindelige fil. Vælg en anden fil.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Den valgte fremviser understøtter ikke alle filtyper. Hvis du gemmer denne fremvisertilknytning, kan der opstå problemer ved fremvisning af dokumenter. Det anbefales, at du vælger en fremviser, der understøtter alle filtyper, når indstillingen Alle filtyper er valgt<br><br><b>Tip:</b> Følgende fremvisere understøtter alle filtyper:<ul><li>Minifremviser</li><li>AJAX-fremviser</li><li>HTML-konvertering</li><li>PDF-konvertering</li><li>Webbrowser</li></ul>",
		file_type_any: "Alle filtyper",
		file_type_any_hover: "Vælg denne indstilling, hvis du vil bruge den markerede fremviser til fremvisning af alle dokumenter, uanset filtype. Indstillingen understøttes for følgende fremvisere:<br><br><ul><li>Minifremviser</li><li>AJAX-fremviser</li><li>HTML-konvertering</li><li>PDF-konvertering</li><li>Webbrowser</li></ul><br><br><b>Husk:</b> Hvis du størstedelen af tiden vil bruge en bestemt slags fremviser, skal alle tilknytninger, som du opretter, og som bruger denne indstilling, flyttes til slutningen oversigten over fremvisertilknytninger. ",
		file_type_input: "Ny filtype",

		mime_type_input: "Ny MIME-type",
		mime_type_input_invalid: "Den nye MIME-type må ikke indeholde følgende tegn: ,",
		mime_type_available: "Tilgængelige MIME-typer",
		mime_type_selected: "Valgte MIME-typer",
		file_type_input: "Ny filtype",
		file_type_input_invalid: "Den nye filtype må ikke indeholde følgende tegn: ,",
		file_type_available: "Tilgængelige filtyper",
		file_type_selected: "Valgte filtyper",
		file_type_header: "Filtype",
		viewer: "Fremviser:",
		viewer_viewer: "Fremviser",
		viewer_view: "Oversigt",
		viewer_preview: "Visning",
		viewer_merge_and_split: "Flet og opdel",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Kun visning",
		preview_only_label: "(visning)",
		preview_only_hover: "Denne fremvisertilknytning benyttes kun, når en bruger klikker på <b>Visning</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Dette opbevaringssted understøtter ikke brug af funktionen Gennemse. Vælg et andet opbevaringssted.",

		repository_community_teamspace_message: "Et andet opbevaringssted er allerede angivet som fællesskabets biblioteksopbevaringssted. Hvis du fortsat vil bruge det eksisterende opbevaringssted som biblioteksopbevaringssted for fællesskabet, skal du vælge <b>Nej</b>, inden du gemmer dine ændringer, for at forhindre at det eksisterende opbevaringssted udskiftes med dette opbevaringssted.",

		favorites_empty: "Du har ingen foretrukne endnu.",
		syncItems_empty: "Du har ingen synkroniserede filer endnu.",

		root_folder_id: "Rodfolder-id",
		unified_searches: "Søgninger på tværs af opbevaringssteder:",
		max_results: "Antal resultater:",
		direct_retrieve_enabled: "Direkte hentning:",
		itemTypesToDisplay: "Elementtype, der skal vises:",
		allItemTypes: "Alle elementtyper",
		include_attr_group_name: "Attributgruppebeskrivelser i attributfremvisningsnavne:",
		admin_repcfg_include_attr_group_name_hover: "Som standard er attributgruppebeskrivelsen inkluderet i navnene på attributgruppeattributter. Dette er en hjælp til brugere, så de kan se, hvilken attributgruppe en attributgruppeattribut hører til, når de arbejder med attributter.<br>For eksempel kan brugere få vist følgende navn til en attributgruppeattribut: Dokumentindstillinger.Dokumenttype.<br><br>Hvis du deaktiverer denne indstilling, bliver kun attributbeskrivelsen anvendt til navnet på attributgruppeattributten.<br>For eksempel kan brugere få vist dette navn: Dokumenttype.<br><br>Uden attributgruppebeskrivelsen er brugere måske ikke i stand til at angive, om Dokumenttype er en enkelt attribut eller en attributgruppeattribut.",
		documentItemTypesOnly: "Kun elementer af typen dokumentmodel",
		object_store: "Symbolsk navn for objektlager:",
		object_store_display_name: "Fremvisningsnavn for objektlager:",
		teamspaceUpgradeMsg: "Dine teampladser bliver opdateret, når du gemmer din opbevaringsstedskonfiguration. Hvis du har mange teampladser, kan opdateringen tage flere minutter.",
		synchUpgradeMsg: "Synkroniseringsmodulet på opbevaringsstedet bliver opdateret, når du gemmer din opbevaringsstedskonfiguration.",
		protocol: "Protokol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "Id til CMIS-opbevaringssted:",
		cmis_url: "URL til dokument om CMIS AtomPub-bindingsfunktion:",
		trace_level: "Sporingsniveau",
		trace_dir: "Sporingsbibliotek",
		temp_dir: "Midlertidigt bibliotek",
		show_document_location: "Vis dokumentplacering",
		max_folders: "Maks. antal foldere",
		afp_conversion: "AFP-konvertering",
		line_conversion: "Linjedatakonvertering",
		max_hits: "Maks. antal hits",
		folder_search_expresssion: "Foldersøgeudtryk",
		max_item_types: "Maks. antal elementtyper",
		max_worklists: "Maks. antal arbejdslister",
		update_storage_collection: "Opdatér lagersamling",
		include_mime_types_in_search_results: "Inkludér MIME-typer i søgeresultater",
		object_type: "Objekttype",
		object_type_document: "Dokumenter",
		object_type_folder: "Foldere",
		file_label: "Fil:",
		plugin_jarfile_path_label: "Sti til JAR-fil:",
		plugin_classfolder_path_label: "Sti til klassefil:",
		plugin_classname_label: "Klassenavn:",
		plugin_id_label: "Plugin-id:",
		class_label: "Klasse",
		configuration: "Konfiguration",
		connect_repository: "Opret forbindelse...",
		server_type: "Servertype",
		timeout_in_seconds: "Tidsfrist (i sekunder):",
		default_search_template: "Standardsøgning",
		search_filtered_properties: "Søgbare egenskaber",
		property_contains_label: "Egenskaben indeholder",
		class_contains_label: "Klasse indeholder",
		search_filtered_operators: "Søgeoperatorer",
		default_search_results: "Søgeresultater",
		data_type: "Datatype",
		status_bar: "Statuslinje",
		operators_for: "Operatorer for:",
		currentUser: "Aktuel bruger",
		nameContains: "Navn indeholder",
		searchFor: "Søg efter",
		server_autentication: "Servervalidering (OAuth 2.0 med JWT)",
		standard_authentication: "Standardvalidering (3-benet OAuth2.0)",
		developer_authentication: "Udviklervalidering",
		enterprise_id: "Virksomheds-id:",
		public_key_id: "Offentlig nøgle-id:",
		private_key_path: "Sti til privat nøglefil:",
		server_user_email: "E-mail for serverbruger",

		filter_builder_tooltip: "Definér filter",

		// Launch bar
		launchbar_home: "Åbn Hjem",
		launchbar_favorites: "Åbn foretrukne",
		launchbar_browse: "Åbn oversigten Gennemse",
		launchbar_browse_popup: "Åbn pop op-listen Gennemse",
		launchbar_search: "Åbn oversigten Søg",
		launchbar_search_popup: "Åbn pop op-listen Søg",
		launchbar_teamspaces: "Åbn oversigten Teampladser",
		launchbar_teamspaces_popup: "Åbn pop op-listen Teampladser",
		launchbar_work: "Åbn oversigten Arbejde",
		launchbar_work_popup: "Åbn pop op-listen Arbejde",
		launchbar_entry_templates: "Åbn oversigten Indgangsskabeloner",
		launchbar_entry_templates_popup: "Åbn pop op-listen Indgangsskabeloner",
		launchbar_admin: "Åbn oversigten Administration",

		admin_sync_server: "Sync Services",
		admin_settings: "Indstillinger",
		admin_interface_text: "Etiketter",
		admin_interface_text_desktop: "Arbejdsplads:",
		admin_desktops: "Arbejdspladser",
		admin_repositories: "Opbevaringssteder",
		admin_mobile: "Mobil",
		admin_menus: "Menuer",
		admin_reason_codes: "Redigeringsårsager",
		admin_plugins: "Plugins",
		admin_plugins_state_enabled: "Plugin er aktiveret",
		admin_plugins_state_disabled: "Plugin er deaktiveret",
		admin_plugins_version: "Version:",
		admin_plugins_version_heading: "Version",
		admin_plugins_icon: "Plugin-ikon",
		admin_viewer_mapping_icon: "Ikon for fremvisertilknytning",
		admin_viewer_defs: "Fremvisertilknytninger",
		admin_viewer_dialog_title: "Tilknytning",
		admin_viewer_dialog_new_title: "Ny tilknytning",
		admin_viewer_dialog_instructions: "En tilknytning angiver, hvilken fremviser der skal bruges til filerne på et opbevaringssted. Du kan oprette flere tilknytninger for at angive forskellige fremvisere til forskellige filtyper. Du kan enten bruge en MIME-type eller en filtype til at definere en tilknytning. Tilknytninger med filtyper bliver knyttet til dokumentnavne. F.eks. bliver en tilknytning med filtypen GIF knyttet til dokumentnavne, der slutter med filtypen .gif",
		admin_desktop_viewer_defs: "Fremvisertilknytning:",
		admin_desktop_viewer_defs_hover: "Fremvisertilknytningen angiver, hvilken fremviser der bruges til at åbne forskellige dokumenttyper på opbevaringsstedet.<br><br>Du kan oprette nye fremvisertilknytninger i afsnittet <b>Fremvisertilknytninger</b> i administrationsværktøjet.",
		admin_desktops_used: "Bruges på arbejdspladser",
		admin_desktop_additional_settings: "Yderligere indstillinger:",
		admin_default_desktop: "Angiv som standardarbejdsplads",
		admin_default_desktop_header: "Standardarbejdsplads",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Arbejdspladsikon",

		// Themes
		admin_themes: "Temaer",
		admin_theme_list_instructions: "Du kan oprette et tema for at gøre det lettere at tilpasse webklienten for din organisation. Du kan oprette flere temaer, hvis du skal bruge forskellige farver, fonte eller logoer til forskellige arbejdspladser i dit systemmiljø.<br><br>Når du har oprettet et tema, kan du aktivere det på en arbejdsplads ved at konfigurere temaet på skillebladet <b>Udseende</b> på arbejdspladsen.",
		admin_theme_instructions: "Opret et tema til at styre de farver og fonte, der vises i webklienten. Du kan desuden bruge temaet til at ændre det logo, applikationsnavn, copyright og tekst, der vises på logonsiden og i banneret.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nyt tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Vil du slette de valgte temaer?\n${0} temaer er valgt.",
		admin_theme_color: "Farve",
		admin_theme_text: "Tekst",
		admin_theme_solid: "Udfyldt",
		admin_theme_gradient: "Graduering",
		admin_theme_box: "Box",
		admin_theme_color_label: "Farve ${0}:",
		admin_theme_name_invalid: "Temaets navn må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Tema-id'en skal være entydig. Du kan ikke ændre id'en, når først du har gemt temaet.<br><br>Id'en kan kun indeholde alfanumeriske tegn.",
		admin_theme_name_hover: "Navnet må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatisk",
		admin_theme_logo_url_hover: "Angiv URL'en til logofilen. Hvis logoet er på samme webapplikationsserver som webklienten, skal du angive en relativ URL, f.eks.: /minetilpasninger/banner_logo.png<br><br>Det anbefales, at logoet har en transparent baggrund.",
		admin_theme_color_palette_title_heading: "Farvepalet",
		admin_theme_color_palette_help_text: "Opret en farvepalet til temaet vha. den hexadecimale værdi eller farvevælgeren. Du kan tilføje lige så mange farver, du vil.",
		admin_theme_color_add_button_label: "Tilføj farve",
		admin_theme_color_remove_button_label: "Fjern farve",
		admin_theme_global_title_heading: "Elementer på tværs af applikation",
		admin_theme_global_font: "Typografi:",
		admin_theme_global_font_hover: "Vælg den font, der skal bruges i webklienten. Fontene vises i ønskerækkefølge. Den næste font i listen benyttes kun, hvis den forrige font ikke er installeret på klientmaskinen.",
		admin_theme_global_framework_color_label: "Rammefarve:",
		admin_theme_global_framework_color_hover: "Vælg den farve, der skal bruges til følgende elementer:<ul><li>Titellinjer i dialogbokse</li><li>Fremhævningsfarven øverst på det valgte skilleblad</li><li>Ikoner for fremvisning af listeindhold (Oplysninger, Magasin, Filmklip)</li></ul><br>Denne farve anvendes ikke til skilletegn mellem afsnit i webklienten. Hvis du vil ændre baggrundsfarven for skilletegnene, skal du oprette en plugin, der stiller en tilpasset CSS-fil til rådighed.",
		admin_theme_color_global_toolbar: "Farve for global værktøjslinje:",
		admin_theme_color_global_toolbar_hover: "Hvis du inkluderer den globale værktøjslinje i webklienten, skal du vælge farven på værktøjslinjen.<br><br><b>Tip:</b> Værktøjslinjen vises i banneret øverst i webklienten, så farven på værktøjslinjen skal komplementere farven på banneret.",
		admin_theme_global_selected_color: "Farve på valgt element:",
		admin_theme_global_selected_color_hover: "Vælg den farve, der skal anvendes, når elementer vælges i træstrukturen Gennemse, Søg og i indholdslisten.<br><br>Pegefunktionens farve (den farve, der bruges, når en bruger placerer markøren over et element) afledes af denne farve.",
		admin_theme_global_link_color: "Linkfarve:",
		admin_theme_global_link_color_hover: "Vælg den farve, der skal bruges til alle URL'er, der kan klikkes på, i webklienten. Den farve benyttes f.eks. til link af typen Lær mere, som vises gennem hele webklienten.",
		admin_theme_login_title_heading: "Elementer på logonside",
		admin_theme_page_background_label: "Baggrundsfarven på logonsiden",
		admin_theme_login_page_background_hover: "Vælg den farve, der skal vises bag logondelvinduet.",
		admin_theme_login_pane_background_label: "Baggrundsfarven på logondelvinduet:",
		admin_theme_login_pane_background_hover: "Vælg en farve til logondelvinduet. Denne farve skal komplementere baggrundsfarven på logonsiden.",
		admin_theme_text_color: "Tekstfarve:",
		admin_theme_login_pane_text_color_hover: "Vælg en farve til tekst på logondelvinduet. Denne farve bruges til velkomsttekst og feltetiketter. Farven skal adskille sig tydeligt fra logondelvinduets baggrundsfarve.",
		admin_theme_copyright_text: "Copyrighttekst:",
		admin_theme_copyright_text_hover: "Angiv, om copyrighttekst skal kunne læses på logonsiden.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Ingen copyrighttekst",
		admin_theme_banner_title_heading: "Bannerelementer",
		admin_theme_text_icons_color: "Tekst- og ikonfarve:",
		admin_theme_icon_color_label: "Ikonfarve:",
		admin_theme_shadow_label: "Skygge:",
		admin_theme_banner_text_icons_hover: "Vælg en farve til tekst og ikoner i banneret. Farven skal adskille sig tydeligt fra bannerets baggrundsfarve.",
		admin_theme_banner_product_name_label: "Produktnavn:",
		admin_theme_banner_product_name_hover: "Når du opretter en arbejdsplads, kan du tilpasse navnet til applikationen. Hvis du ikke angiver et tilpasset navn, benyttes IBM Content Navigator som produktnavn. Angiv, om du vil bruge det applikationsnavn, der er defineret for arbejdspladsen, eller om du vil bruge et billede i stedet for.",
		admin_theme_banner_product_name_desktop_defined_label: "Brug navn fra arbejdspladsen",
		admin_theme_banner_product_name_image: "Brug tilpasset logo (URL)",
		admin_theme_background_color_label: "Baggrundsfarve:",
		admin_theme_style_label: "Typografi:",
		admin_theme_banner_color_hover: "Vælg en farve til banneret øverst i applikationen.<br><br><b>Tip:</b> Kontrollér, at tekstfarven adskiller sig tydeligt fra bannerets baggrundsfarve.",
		admin_theme_buttons_title_heading: "Knapper",
		admin_theme_navigation_title_heading: "Navigationselementer",
		admin_theme_navigation_icon_selected_label: "Valgt ikonfarve:",
		admin_theme_navigation_background_hover: "Vælg en farve til navigeringslinjens baggrund.",
		admin_theme_navigation_icon_color_hover: "Vælg en farve til ikoner i navigeringslinjen. Når du bruger standardlayoutet på en arbejdsplads, skal denne farve være i kontrast til baggrundsfarven på funktionens menu. Når du bruger det klassiske layout på en arbejdsplads, skal denne farve være i kontrast til baggrundsfarven på funktionens navigeringslinje.",
		admin_theme_navigation_icon_selected_hover: "Vælg en farve til den valgte funktion på navigeringslinjen. Farven skal komplementere ikonernes farve og baggrundsfarven på navigeringslinjen.<br><br>Når du bruger det klassiske layout på en arbejdsplads, bruges denne farve, når der peges på funktionens navigeringslinje.",
		admin_theme_button_background_color_hover: "Vælg farve til knapbaggrund.",
		admin_theme_button_style_hover: "Vælg knaptypografi.",
		admin_theme_button_text_icon_color_hover: "Vælg en farve til tekst og billeder på knapper",
		admin_theme_no_logo_label: "Intet logo",
		admin_theme_custom_logo_label: "Tilpasset logo (URL)",
		admin_theme_banner_type: "Bannerudfyldningstype",
		admin_theme_banner_type_hover: "Angiv, om bannerfarven skal være udfyldt eller gradueret. Hvis du angiver et gradueret banner, er den farve, du angiver for bannerfarven, den mørkeste farve i banneret.<br><br><b>Tip:</b> Kontrollér, at tekstfarven adskiller sig tydeligt fra bannerets baggrundsfarve.",
		admin_theme_icon: "Temaikon",
		admin_theme_buttons_and_links_title_heading: "Knapper, felter og link",
		admin_theme_button_style_label: "Knaptypografi:",
		admin_theme_theme_style_label: "Tematypografi:",
		admin_theme_theme_style_hover: "Vælg den typografi, som temaet skal baseres på. Du kan når som helst ændre typografien, når du opretter eller redigerer et tema. Hvis du ændrer fra en typografi til en anden, bliver temaindstillingerne nulstillet til standardværdierne.",
		admin_theme_accent_color_label: "Accent-farve:",
		admin_theme_accent_color_hover: "Vælg den farve, der skal bruges til linjen øverst i dialogboksen og til indlæsningshjulet.",
		admin_theme_global_toolbar_text_color_label: "Tekstfarve for global værktøjslinje:",
		admin_theme_global_toolbar_text_color_hover: "Hvis du inkluderer den globale værktøjslinje i webklienten, skal du vælge farven, der skal bruges til teksten på værktøjslinjen.",
		admin_theme_banner_text_color_hover: "Vælg den farve, der skal bruges til teksten i banneret.",
		admin_theme_banner_icon_color_hover: "Vælg den farve, der skal bruges til ikonerne i banneret.",
		admin_theme_button_color_label: "Farve:",
		admin_theme_button_color_hover: "Vælg den farve, der skal bruges til følgende elementer:<ul><li>Titellinjer i dialogbokse</li><li>Fremhævningsfarven øverst på det valgte skilleblad</li><li>Ikoner for fremvisning af listeindhold (Oplysninger, Magasin, Filmklip)</li><li>Knapper, felter og link</li></ul>Den farve, der bruges, når en bruger placerer markøren over en knap, afledes af denne farve. Denne farve anvendes ikke til skilletegn mellem afsnit i webklienten. Hvis du vil ændre baggrundsfarven for skilletegnene, skal du oprette en plugin, der stiller en tilpasset CSS-fil til rådighed.",
		admin_theme_theme_style_col_header: "Tematypografi",

		admin_syncserver_consistency_checker: "Konsistenskontrol:",
		admin_syncserver_consistency_checker_hover: "Kør konsistenskontrollen for at sikre, at Sync Service-databaser har de aktuelle statusoplysninger for hvert element på serveren. Kør f.eks. konsistenskontrollen, hvis der har været driftsstop på en Sync Services-database, for at hente oplysninger om de dokumenter, der blev opdateret på opbevaringsstedet under driftsstoppet.",
		admin_syncserver_consistency_checker_button: "Kør konsistenskontrol",
		admin_syncserver_consistency_checker_started: "Startet:",
		admin_syncserver_consistency_checker_ended: "Afsluttet:",
		admin_syncserver_consistency_checker_duration: "Varighed:",
		admin_syncserver_consistency_checker_items_processed: "Synkroniseringselementer, der skal behandles:",
		admin_syncserver_consistency_checker_items_processed_success: "Behandlede synkroniseringselementer:",
		admin_syncserver_consistency_checker_items_discovered: "Nye opbevaringsstedselementer registreret:",
		admin_syncserver_consistency_checker_change_updates: "Opdateringer i alt:",
		admin_syncserver_consistency_checker_state: "Tilstand:",
		admin_syncserver_consistency_checker_state_done: "Udført",
		admin_syncserver_consistency_checker_state_running: "Udføres",
		admin_syncserver_consistency_checker_user: "Startet af:",
		admin_syncserver_consistency_checker_scheduled: "Planlagt:",

		admin_syncserver_dbcleanup: "Databaseoprydning",
		admin_syncserver_dbcleanup_hover: "Kør databaseoprydningsværktøjet for at fjerne ikke-benyttede enheder og elementer, der ikke længere synkroniseres, fra databasen.",
		admin_syncserver_dbcleanup_button: "Databaseoprydning",
		admin_syncserver_dbcleanup_state_done: "Udført",
		admin_syncserver_dbcleanup_state_running: "Udføres",
		admin_syncserver_dbcleanup_started: "Startet:",
		admin_syncserver_dbcleanup_ended: "Afsluttet:",
		admin_syncserver_dbcleanup_state: "Tilstand:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Slettede opbevaringssteder:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Slettet synkroniseret element:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Slettede enheder:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Udløbne enheder:",

		admin_syncserver_publicSyncUrl: "Offentlig URL for Sync Services:",
		admin_syncserver_publicSyncUrl_hover: "Angiv den URL, hvormed opbevaringssteder kan kommunikere med IBM Content Navigator Sync Services. Standardformatet for URL'en er http://sync_public_URL:portnummer/sync/notify.",

		admin_syncserver_managed: "Indstillinger for klientsynkronisering:",
		admin_syncserver_managed_hover: "Brugere kan ikke ændre disse indstillinger i IBM Content Navigator-synkroniseringsklienten.",
		admin_syncserver_managed_subfolder: "Folderniveauer, der skal synkroniseres.",
		admin_syncserver_managed_subfolder_hover: "Hvis en bruger synkroniserer en folder, skal du angive det maksimale antal foldere, der skal synkroniseres. Hvis f.eks. en bruger angiver 3 folderniveauer, bliver den folder, som brugeren synkroniserer, og 2 niveauer af underfoldere synkroniseret.<br><br>Undersøg, om systemmiljøet er skaleret til den mængde synkroniseringstrafik, som denne indstilling medfører.",
		admin_syncserver_managed_subfolder_all: "Alle underfoldere",
		admin_syncserver_managed_subfolder_none: "Ingen underfoldere",
		admin_syncserver_managed_subfolder_no_more: "Begrænsede niveauer",
		admin_syncserver_managed_subfolder_levels: "foldere",
		admin_syncserver_managed_schedule: "Synkroniseringsplan",
		admin_syncserver_managed_schedule_hover: "Undersøg, om systemmiljøet er skaleret til den mængde synkroniseringstrafik, som synkroniseringsplanen medfører.<br><br>Det maksimale interval er 24 timer eller 1440 minutter.<br><br>Brugere kan tilsidesætte synkroniseringsplanen ved at klikke på <b>Synkronisér nu</b>.",
		admin_syncserver_managed_schedule_manual: "Synkronisér manuelt",
		admin_syncserver_managed_schedule_continuous: "Synkronisér fortløbende",
		admin_syncserver_managed_schedule_every: "Synkronisér ved angivne intervaller",
		admin_syncserver_managed_schedule_minutes: "Minutter",
		admin_syncserver_managed_schedule_hours: "Timer",

		// redaction codes
		admin_new_reason_code: "Ny redigeringsårsag",		
		admin_reason_code_name_invalid: "Navnet på redigeringsårsagen må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Beskrivelsen må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Beskrivelsen må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Navnet må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Beskrivelse:",
		admin_reason_code_applications_hover: "Listen over Datacap-applikationer, der henviser til denne redigeringsårsag.",
		admin_reason_code_applications: "Datacap-applikationer",
		admin_delete_confirmation_reason_codes: "Vil du slette de valgte redigeringsårsager?",
		admin_delete_confirmation_reason_code: "Vil du slette den valgte redigeringsårsag?",
		admin_reason_code_heading: "Redigeringsårsag: <b>${0}</b>",
		admin_reason_code_list_instructions: "Redigeringsårsager angiver, hvorfor følsomme data beskyttes ved at fjerne dem fra oversigten. De enkelte årsager angiver en type følsomme data, der er skjult fra generelle brugere.",
		admin_reason_code_instructions: "Du kan oprette en redigeringsårsag til hver type følsomme data. Du kan derefter anvende den pågældende årsag i en redigeringsårsag til at definere, hvem der kan se data, og hvem der kan oprette redigeringer.",
		admin_reason_code_applications_label: "Datacap-applikationer",
		admin_reason_code_repositories: "Opbevaringssteder",
		admin_reason_code_repositories_label: "Opbevaringssteder",
		admin_reason_code_repositories_hover: "Listen over ICN-opbevaringssteder, der henviser til denne redigeringsårsag.",
		admin_reason_code_repositories_default_value: "Ikke angivet",
		admin_reason_code_description_label: "Beskrivelse",
		admin_reason_code_applications_default_value: "Ikke angivet",
		admin_redaction_reasons: "Redigeringsårsager",
		admin_redactions: "Rollebaserede redigeringer",
		admin_redactions_policies_roles: "Politikker og roller",
		admin_reasons: "Årsager",
		admin_reason_code_id: "Id",
		admin_reason_code_id_hover: "Id'en kan ikke redigeres. Den kan kopieres til udklipsholderen.",
		// Role based administration
		admin_rba: "Rollebaseret arbejdspladsadministration",
		admin_rba_mobile_access_enabled: "Denne arbejdsplads er aktiveret til mobiladgang.",
		admin_rba_mobile_access_disabled: "Denne arbejdsplads er ikke aktiveret til mobiladgang.",
		admin_rba_confirm_delete_multiple: "Vil du slette de valgte administrationsroller?",
		admin_rba_confirm_delete_single: "Vil du slette den valgte administrationsrolle?",
		admin_rba_delete_multi_role_desktop: "En eller flere af de roller, du har valgt, er knyttet til en arbejdsplads. Du skal fjerne rollerne fra arbejdspladserne, før du kan slette dem.",
		admin_rba_delete_single_role_desktop: "Den rolle, du har valgt, er knyttet til arbejdspladsen ${0}. Du skal fjerne rollen fra arbejdspladsen, før du kan slette den.",
		admin_desktop: "Arbejdsplads",
		admin_rba_instructions: "Du kan oprette og administrere administrationsrollerne til arbejdspladsen, som tilknytter privilegier, der er givet til arbejdspladsadministratorer.",
		admin_rba_not_used: "${0} bruges ikke i nogen arbejdspladser.",
		admin_rba_desktops: "<b>${0} bruges i følgende arbejdspladser:</b>",
		admin_rba_new_role: "Ny rolle",
		admin_rba_name_invalid: "Navnet på den administrative rolle må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Beskrivelsen må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Beskrivelsen må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Navnet må ikke indeholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Beskrivelse:</b> ${0}",
		admin_rba_membership: "Medlemskab",
		admin_rba_general_priv: "Generelt",
		admin_rba_appearance_priv: "Udseende",
		admin_rba_desktop_config_priv: "Konfiguration af arbejdsplads",
		admin_rba_app_name_priv: "Applikationsnavn",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Fremvisertilknytning",
		admin_rba_merge_split_priv: "Flet og opdel",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Menuer",
		admin_rba_edit_svc_priv: "Redigeringsservice",
		admin_rba_toolbars_priv: "Værktøjslinjer",
		admin_rba_ctx_menus_priv: "Kontekstmenuer",
		admin_rba_office_ribbon_priv: "Kommandoer på MS Office-bånd",
		admin_rba_office_menues_priv: "Kontekstmenuer i MS Office",
		admin_rba_addl_settings_priv: "Yderligere indstillinger",
		admin_rba_mobile_priv: "Mobil",
		admin_rba_add_doc_dlg_priv: "Dialogboks for Tilføj dokument",
		admin_rba_doc_mgmt_priv: "Dokumentstyring",
		admin_rba_def_redaction_priv: "Standardindstilling for redigering",
		admin_rba_add_photos_priv: "Tilføj fotografier fra kamera og fotobibliotek",
		admin_rba_time_stamp_priv: "Tidsstempel",
		admin_rba_add_docs_folders_priv: "Tilføj dokumenter og opret foldere på opbevaringsstedet",
		admin_rba_open_docs_priv: "Åbn dokumenter i andre applikationer",
		admin_rba_office_config_priv: "Office-konfiguration",
		admin_rba_tab_label_priv: "IBM ECM-skillebladsetiket",
		admin_rba_feature_sel_priv: "Valg af funktion",
		admin_rba_general_config_priv: "Generel konfiguration",
		admin_rba_favorites_priv: "Foretrukne",
		admin_rba_add_options_priv: "Tilføj indstillingerne i gruppen Redigér",
		admin_rba_browse_priv: "Gennemse",
		admin_rba_outlook_int_priv: "Outlook-integration",
		admin_rba_search_priv: "Søg",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Sag",
		admin_rba_desktop_feat_priv: "Arbejdspladsfunktioner",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Fremviste funktioner",
		admin_rba_branding_priv: "Branding",
		admin_rba_home_priv: "Hjem",
		admin_rba_main_color_priv: "Hovedfarve",
		admin_rba_sec_color_priv: "Sekundær farve",
		admin_rba_teamspaces_priv: "Teampladser",
		admin_rba_rbr_priv: "Rollebaseret redigering",
		admin_rba_et_mgr_priv: "Styring af indgangsskabeloner",
		admin_rba_policies_roles_priv: "Administrér politikker og roller",
		admin_rba_work_priv: "Arbejde",
		admin_rba_reasons_priv: "Årsagskode",
		admin_rba_tasks_priv: "Asynkrone opgaver",
		admin_rba_auth_priv: "Validering",
		admin_rba_all_privs: "Alle privilegier",
		admin_rba_some_privs: "Nogle privilegier",
		admin_rba_no_privs: "Ingen privilegier",
		admin_add_users_groups_priv: "Tilføj brugere og grupper",
		admin_url_features_priv: "Administrér URL-funktioner",
		admin_plugin_features_priv: "Administrér pluginfunktioner",
		admin_addl_components_priv: "Flere komponenter",
		admin_global_toolbar_priv: "Værktøjslinjen Global",
		admin_status_bar_priv: "Statuslinje",
		admin_refresh_message: "Du skal opfriske browseren for at kunne bruge de opdaterede data.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Du skal opfriske browseren for at bruge den opdaterede standardarbejdsplads.",
		admin_desktop_refresh_message: "Du skal opfriske browseren for at kunne bruge den opdaterede arbejdsplads.",
		admin_action_open: "Åbn",
		admin_action_edit: "Redigér",
		admin_action_copy: "Kopiér",
		admin_action_delete: "Slet",
		admin_action_copy: "Kopiér",
		admin_action_new: "Opret ny",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Denne id er allerede i brug. Du skal angive en entydig id.",

		admin_searchable_properties_for: "Søgbare egenskaber for:",
		admin_repository_new: "Nyt opbevaringssted",
		admin_desktop_new: "Ny arbejdsplads",
		admin_desktop_file_documents: "Kræv, at brugere gemmer nye dokumenter og foldere i en folder",
		admin_desktop_file_documents_hover: "Vælg denne indstilling, hvis du vil kræve, at brugere vælger en folder, når de tilføjer elementer til opbevaringsstedet. Hvis ikke du vælger denne indstilling, kan brugere tilføje dokumenter (IBM FileNet P8) eller dokumenter og foldere (IBM Content Manager) uden at arkivere dem i en folder.",
		admin_desktop_show_security_tab: "Vis sikkerhedsindstillinger ved tilføjelse og indtjekning",
		admin_desktop_show_security_hover: "<b>Kun IBM FileNet P8-brugere. </b>  Vælg denne indstilling, hvis brugere skal kunne redigere sikkerhedsindstillingerne for dokumenter og foldere, når brugerne tilføjer eller tjekker elementer ind på denne arbejdsplads.",
		admin_desktop_configure_security_inheritance: "Tillad brugere at konfigurere overtagelse af sikkerhed for foldere",
		admin_desktop_configure_security_inheritance_hover: "<b>Kun IBM FileNet P8-brugere. </b>  Vælg denne indstilling, hvis brugere skal kunne tilpasse adgangen til elementer i en folder ved at styre overtagelse af sikkerhed for foldere. Hvis du vælger denne indstilling, kan brugere angive, om brugere eller grupper kan overtage sikkerhed fra:<ul><li>En folder</li><li>En folder og dens umiddelbare underfoldere</li><li>En folder og alle dens underfoldere</li></ul>",
		admin_desktop_appearance: "Udseende",
		admin_desktop_appearance_instruction: "Du kan tilpasse arbejdspladsens udseende ved at ændre den logonside og det banner, der vises for denne arbejdsplads.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "Layoutet angiver, hvilke funktioner der kan vises i webklienten, og hvordan indholdet af webklienten er placeret.<br><br><b>Tip:</b> Du kan definere tilpassede layout ved at oprette plugins. Du skal registrere pluginen i administrationsværktøjet, før du kan vælge et tilpasset layout.",
		admin_desktop_layout_default: "Standard",
		admin_desktop_layout_custom: "Tilpasset",
		admin_desktop_enable_workflow_email: "Aktivér denne arbejdsplads til e-mail-adviseringer for FileNet P8-arbejdsgange",
		admin_desktop_enable_workflow_email_hover: "Kun FileNet P8-brugere. Vælg denne indstilling, hvis du vil sætte brugere i stand til at åbne webklienten fra URL'er, der er inkluderet i e-mailnotifikationer, der genereres af Process Engine.<br /><br />Hvis du ikke aktiverer denne indstilling for alle arbejdspladser, kan brugerne ikke logge på webklienten fra URL'er i notifikationer.<br /><br />Hvis du aktiverer indstillingen for flere arbejdspladser, og mere end én af arbejdspladserne opfylder de kriterier, der er angivet i URL'en i notifikationen, så bruger webklienten den første arbejdsplads, som opfylder kriterierne. ",
		admin_desktop_prevent_create_new_search: "Forhindr brugere i at oprette søgninger",
		admin_desktop_prevent_create_new_search_hover: "Med denne indstilling kan brugere udelukkende bruge eksisterende søgninger, og de kan ikke oprette uafgrænsede søgninger, der muligvis ikke kan optimeres.</br></br>Denne indstilling har ikke indflydelse på teampladser. Retten til at oprette søgninger i en teamplads styres af den rolle, som en bruger har på en given teamplads.",
		admin_desktop_prevent_create_new_unified_search: "Forhindr brugere i at oprette søgninger på tværs af opbevaringssteder",
		admin_desktop_prevent_create_new_unified_search_hover: "Med denne indstilling kan brugere udelukkende bruge eksisterende søgninger på tværs af opbevaringssteder, og de kan ikke oprette uafgrænsede søgninger på tværs af opbevaringssteder, der muligvis ikke kan optimeres.",
		admin_desktop_hide_entry_template_not_found_warning: "Skjul advarsel, der vises, hvis den tilknyttede indgangsskabelon ikke findes.",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Vælg denne indstilling, hvis du vil skjule den advarsel, der vises, når der ændres egenskaber for et element, og dets tilknyttede indgangsskabelon ikke findes.",
		admin_desktop_show_class_role_security_selection: "Tillad brugere at konfigurere rollebaseret sikkerhed i indgangsskabeloner",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Kun IBM FileNet P8-brugere. </b> Vælg denne indstilling, hvis brugere skal kunne konfigurere indgangsskabeloner, som skal bruge rollebaseret sikkerhed, når der angives sikkerhed for dokumenter og/eller foldere ved brug af indgangsskabeloner. Hvis du vælger denne indstilling, kan indgangsskabelonredaktører angive, om rollesikkerhedsobjekter skal anvendes på en indgangsskabelondefinition.",
		admin_desktop_show_primary_multi_part: "Åbn kun det primære dokument i fremviseren",
		admin_desktop_show_primary_multi_part_hover: "<b>Kun IBM FileNet P8-brugere. </b> Vælg denne indstilling, hvis det udelukkende er den primære dokumentfil, der skal åbnes i fremviseren. Dokumenter kan have flere filer tilknyttet. Denne indstilling åbner kun den primære fil, der er tilknyttet til dokumentet.",
		admin_desktop_redaction_save_mode: "Standardversionsindstilling:",
		admin_desktop_redaction_save_mode_hover: "Vælg standardtilstand for gemning af redigering i ViewONE Virtual-fremviser:</br>* Bed altid brugeren om at vælge: dialogboksen vises ved adgang til redigeringstilstand, brugeren bliver spurgt, om han/hun vil tjekke ind som ny version, oprette et nyt dokument eller downloade indhold.</br>* Tjek ind som ny version: det redigerede indhold bliver altid gemt i en ny version af det eksisterende dokument.</br>* Gem som et helt nyt dokument: det redigerede indhold bliver altid gemt som et helt nyt dokument.</br>* Download og gem på klienten: det redigerede indhold bliver downloadet til klientsystemet.",
		admin_desktop_redaction_save_mode_user_select: "Bed altid brugeren om at vælge",
		admin_desktop_redaction_save_mode_new_version: "Tjek ind som en ny version",
		admin_desktop_redaction_save_mode_new_document: "Gem som et helt nyt dokument",
		admin_desktop_redaction_save_mode_local_content: "Download og gem på klienten",

		admin_desktop_document_add_mode: "Dialogboks for Tilføj dokument:",
		admin_desktop_document_add_mode_hover: "Angiv den dialogboks til tilføjelse, der skal bruges, når du tilføjer dokumenter, der er oprettet af IBM Content Navigator:<ul><li>Nyt permanent redigeret dokument</li><li>Nyt flettet og opdelt dokument</li><li>Nyt Microsoft Office-dokument</li><li>Nyt dokument til redigeringsservice</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Tilføj dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Tilføj dokument ved brug af indgangsskabelon",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Flet og opdel:",
		admin_desktop_merge_and_split_enable_hover: "Angiv, om brugere, der anvender denne arbejdsplads, skal kunne flette og opdele dokumenter ved hjælp af understøttende fremviser.",

		admin_desktop_merge_and_split_show_checkin: "Bed brugerne om at angive egenskabsværdier, når de tjekker ændringer ind i et dokument.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Hvis du vælger denne indstilling, bliver dialogboksen til indtjekning vist, når brugere tjekker ændringer ind i et dokument i flette- og opdelingstilstand.",

		admin_desktop_available_categories: "Tilgængelige funktioner",
		admin_desktop_selected_categories: "Valgte funktioner",

		admin_layout_banner_title: "Banner og logonside",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Applikationsnavn:",
		admin_desktop_application_name_hover: "Angiv det applikationsnavn, der skal vises i banneret.<br><br>Definér applikationsnavnet for andre sprog på skillebladet med navne eller arbejdspladsnavne.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Angiv, om du vil bruge standardtemaet for IBM Content Navigator, eller om du vil bruge et tilpasset tema til denne arbejdsplads. Hvis du vil bruge et tilpasset tema, skal du først oprette et tema i afsnittet <b>Temaer</b> i administrationsværktøjet.",
		admin_desktop_login_logo: "Logo på logonside:",
		admin_desktop_login_logo_hover: "Hvis du vil ændre det logo, der vises på logonsiden, kan du angive URL'en til en logofil. Dog anbefales det, at du bruger et tilpasset tema til at ændre logoet.",
		admin_desktop_login_logo_url_hover: "Angiv URL'en til logofilen. Hvis logoet er på samme webapplikationsserver som webklienten, skal du angive en relativ URL, f.eks.: /minetilpasninger/logon_logo.png<br><br>Logoet må højst være 200 pixel bredt og 150 pixel højt.<br><br>Det anbefales, at logoet har en transparent baggrund.",
		admin_desktop_banner_logo: "Bannerlogo:",
		admin_desktop_banner_logo_hover: "Hvis du vil ændre det logo, der vises på banneret, kan du angive URL'en til en logofil. Dog anbefales det, at du bruger et tilpasset tema til at ændre logoet.",
		admin_desktop_banner_logo_url_hover: "Angiv URL'en til logofilen. Hvis logoet er på samme webapplikationsserver som webklienten, skal du angive en relativ URL, f.eks.: /minetilpasninger/banner_logo.png<br><br>Logoet må højst være 72 pixel bredt og 36 pixel højt.<br><br>Det anbefales, at logoet har en transparent baggrund.",
		admin_desktop_banner_background_color: "Baggrundsfarve for banner",
		admin_desktop_banner_background_color_hover: "Hvis du vil ændre baggrundsfarven for banneret, kan du angive en brugerdefineret farve. Dog anbefales det, at du bruger et tilpasset tema til at ændre bannerets farve.",
		admin_desktop_banner_background_color_custom_hover: "Angiv farven på applikationsbanneret som en hexadecimal farve.",
		admin_desktop_banner_application_name_color: "Tekstfarve for applikationsnavn:",
		admin_desktop_banner_application_name_color_hover: "Hvis du vil ændre farven for applikationsnavnet, kan du angive en brugerdefineret farve. Dog anbefales det, at du bruger et tilpasset tema til at ændre farven på applikationens navn.",
		admin_desktop_banner_application_name_color_custom_hover: "Angiv farven på applikationsnavnet som en hexadecimal farve.",
		admin_desktop_banner_menu_color: "Farve på bannerikon:",
		admin_desktop_banner_menu_color_hover: "Hvis du ændrer bannerets baggrundsfarve, skal du muligvis ændre farveskemaet for ikonerne på banneret for at gøre dem mere synlige. Angiv, om den lyse eller mørke udgave af bannerikonerne skal vises.<br><br>Dog anbefales det, at du bruger et tilpasset tema til at ændre ikonernes farve.",
		admin_desktop_login_page_content: "Indhold af logonside:",
		admin_desktop_login_page_content_hover: "Hvis du vil have vist yderligere oplysninger på logonsiden, f.eks. oplysninger om systemafbrydelser eller om hvor brugerne kan få hjælp til brugernavne og kodeord, kan du angive URL'en til det indhold, du vil have vist.",
		admin_desktop_login_page_content_url_hover: "Angiv URL'en til logonsideindholdet. Hvis indholdet er på samme webapplikationsserver som webklienten, skal du angive en relativ URL, f.eks.: /minetilpasninger/logon_oplysninger.html",
		admin_desktop_password_rules: "Regler for kodeord:",
		admin_desktop_password_rules_hover: "Hvis du vil give brugerne retningslinjer for oprettelse af kodeord, f.eks. tegn, der ikke må anvendes, eller mindste antal tegn, kan du angive URL'en til den side, der indeholder kodeordsreglerne.",
		admin_desktop_password_rules_url_hover: "Angiv URL'en til reglerne for kodeord. Hvis indholdet er på samme webapplikationsserver som webklienten, skal du angive en relativ URL, f.eks.: /minetilpasninger/kodeord.html",
		admin_desktop_help_url: "URL til slutbrugerhjælp:",
		admin_desktop_help_url_hover: "Du kan bruge hjælpen, der leveres med IBM Content Navigator, eller du kan omdirigere brugere til tilpasset hjælpeindhold ved at gøre et af følgende:<br><br><ul><li>Omdirigér til et tilpasset hjælpesystem</li><li>Tilføj hjælp til den forekomst af IBM Knowledge Center, der distribueres sammen med IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Angiv URL'en til det tilpassede hjælpesystem. IBM Content Navigator tilføjer index.jsp?content=/com.ibm.usingeuc.doc/ og et filnavn i slutningen af den URL, du angiver. For at få links af typen \"Læs mere\" til at fungere, skal hjælpesystemet bruge de samme filnavne som den integrerede slutbrugerhjælp. ",
		admin_desktop_deprecated_appearance_title: "Forældede indstillinger",
		admin_desktop_deprecated_appearance_instructions: "Hvis du benytter et tilpasset tema, tilsidesættes disse indstillinger af det tilpassede tema. Du skal overføre disse indstillinger til et tilpasset tema, som stiller mere detaljerede typografimuligheder til rådighed, end indstillingerne i dette afsnit. Desuden kan et tilpasset tema benyttes på flere arbejdspladser.",

		admin_desktop_plugins_title: "Aktivér eller deaktivér plugins til denne arbejdsplads.",
		admin_desktop_plugins_enable_all_plugins: "Aktivér alle distribuerede plugins til brug sammen med denne arbejdsplads",
		admin_desktop_plugins_select_plugins: "Markér de distribuerede plugins, der skal aktiveres til brug sammen med denne arbejdsplads",
		admin_desktop_plugins_select_plugin: "Markér plugin",

		admin_desktop_layout_features: "Fremviste funktioner:",
		admin_desktop_layout_features_hover: "Angiv de funktioner, som brugere skal have adgang til fra arbejdspladsen. Funktionerne vises i den rækkefølge, de er angivet.<br><br>Når du vælger en funktion, kan du tilpasse nogle af dens funktionsmåder inden for arbejdspladsen, f.eks. dets standardopbevaringssted.",
		admin_desktop_layout_default_repository: "Standardopbevaringssted:",
		admin_desktop_layout_default_repository_layout_hover: "Angiv, hvilket opbevaringssted der skal vælges som standard, når en bruger åbner funktionen.",
		admin_desktop_layout_document_thumbnails: "Dokumentminiaturer:",
		admin_desktop_layout_document_thumbnails_hover: "Angiv, om der skal vises miniaturer for dokumenter i delvinduet Dokumentoplysninger.<br><br>Visning af miniaturer kan reducere webklientens ydeevne.",
		admin_desktop_layout_show_filmstrip_view: "Filmklip:",
		admin_desktop_layout_show_filmstrip_view_hover: "Angiv, om brugerne må skifte fra fremvisning af indholdslisten til filmklip.<br><br>Filmklip genererer et eksempel for hvert enkelt dokument, som en bruger vælger. Men filmklipfremvisning kan reducere webklientens ydeevne. Desuden skal du konfigurere fremviseren til HTML-konvertering for at kunne se dokumentet.",
		admin_enabled: "Aktivér",
		admin_disabled: "Deaktivér",
		admin_include: "Inkludér",
		admin_exclude: "Udelad",
		admin_layout_teamspaces_default_repository: "Teampladser:",
		admin_layout_entry_templates_default_repository: "Indgangsskabeloner:",
		admin_layout_other_features_default_repository: "Søg og gennemse:",
		admin_layout_work_default_repository: "Arbejde:",
		admin_layout_default_feature: "Standardfunktion:",
		admin_default_category_placeholder: "Vælg en funktion",
		admin_layout_default_feature_hover: "Angiv, hvilken funktion der skal vises, når en bruger logger på denne arbejdsplads.",
		admin_layout_default_feature_warning: "Ændring i standardfunktionen kan eventuelt påvirke den tid, der kræves til indlæsning af applikationen.",
		admin_layout_feature_list_header: "Funktion",
		admin_layout_show_statusbar: "Statuslinje:",
		admin_layout_show_statusbar_hover: "Angiv, om statuslinjen skal vises nederst på arbejdspladsen.<br><br>Hvis du skjuler statuslinjen, får brugerne ikke vist oplysninger om hændelser, der ikke vedrører fejl, f.eks. at:<ul><li>dokumentet er tilføjet til opbevaringsstedet.</li><li>søgningen returnerede 59 dokumenter.</li></ul>",
		admin_layout_show_magazineview: "Magasinfremvisning:",
		admin_layout_show_magazineview_hover: "Angiv, om brugere skal kunne skifte fremvisningen af indholdslisten til magasinfremvisning.<br><br>I magasinfremvisning øges højden på hver indgang i indholdslisten, hvilket reducerer antallet af elementer, der kan vises i indholdslisten på en gang.",
		admin_layout_show_detailsview: "Oplysninger:",
		admin_layout_show_detailsview_hover: "Angiv, om brugere skal kunne skifte fremvisningen af indholdslisten til oversigten Oplysninger.<br><br>I oversigten Oplysninger maksimeres antallet af synlige rækker i indholdslisten.",
		admin_feature_config_docinfopane_label: "Delvinduet Dokumentoplysninger:",
		admin_feature_config_docinfopane_hoverhelp: "Angiv, om brugere skal have adgang til delvinduet med dokumentoplysninger i denne funktion.",
		admin_feature_config_docinfopane_default_label: "Standardfunktionsmåde:",
		admin_feature_config_docinfopane_expanded: "Udvidet",
		admin_feature_config_docinfopane_collapsed: "Skjult",
		admin_feature_config_docinfopane_expand_on_select: "Udvides, når elementet vises",
		admin_layout_features_title: "Arbejdspladsfunktioner",
		admin_layout_features_instructions: "Angiv, hvilke funktioner brugere skal have adgang til fra denne arbejdsplads. Desuden kan du tilpasse funktionsmåden for hver funktion i arbejdspladsen.",
		admin_layout_components_title: "Yderligere arbejdspladskomponenter",
		admin_layout_components_instructions: "Du kan deaktivere nogle af arbejdspladsens komponenter, hvis du ønsker en mere strømlinet brugergrænseflade, eller hvis du vil forbedre webklientens ydeevne.",
		admin_layout_featureconfig_instructions: "Vælg en funktion, du vil konfigurere",
		admin_layout_featureconfig_no_configuration: "Der er ingen tilgængelig konfiguration for funktionen",
		admin_layout_featureconfig_label: "Konfiguration for funktion ${0}",
		admin_layout_featureconfig_title: "Konfiguration af funktion",
		admin_layout_featureconfig_taskManagerURL: "Hvis du vil bruge denne funktion, skal du aktivere og konfigurere IBM Content Navigator for at oprette forbindelse til Task Manager. Aktivér Task Manager-serviceprogrammet i afsnittet med <b>indstillinger</b> i administrationsværktøjet.",
		admin_feature_config_show_my_checkouts_label: "Delvinduet Mine udtjekninger:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Ved hjælp af delvinduet Mine udtjekninger kan brugere udføre en søgning for alle de elementer, de har tjekket ud for et bestemt opbevaringssted. Angiv, om brugere skal have adgang til delvinduet Mine udtjekninger fra funktionen Hjem.<br/><br/><b>Begrænsning:</b> Denne funktion kræver, at mindst ét IBM Content Manager-, IBM FileNet P8- eller OASIS CMIS-opbevaringssted er tilknyttet arbejdspladsen.",

		admin_feature_config_default_repository_icon_text: "Standardopbevaringssted",
		admin_show: "Vis",
		admin_hide: "Skjul",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Du kan ikke fjerne administrationsfunktionen fra administratorarbejdspladsen",
		admin_warning_label: "Advarsel:",
		admin_layout_show_globaltoolbar: "Global værktøjslinje:",
		admin_layout_show_globaltoolbar_hover: "Angiv, om værktøjslinjen skal vises i banneret øverst på arbejdspladsen.<br><br>Den globale værktøjslinje indeholder funktioner, der sætter brugere i stand til at tilføje dokumenter, foldere og tilbageholdelser til opbevaringsstedet. De tilgængelige handlinger afhænger af, hvilket opbevaringssted brugeren har forbindelse til.",
		admin_interface_text_name_label: "Etikettype",

		admin_interface_text_label_description: "Du kan tilpasse den tekst, der vises i visse områder af webklienten. Etiketterne vises for alle opbevaringssteder og arbejdspladser i konfigurationen. Skriv den tekst, du vil have vist i grænsefladen, i feltet Aktuel etiket.<br><br><b>Vigtigt:</b> Ændringer, du foretager i etiketterne, bliver ikke vist i administrationsværktøjet.",
		admin_interface_text_label_action: "Funktionsetiketter",
		admin_interface_text_label_action_description: "Funktionsetiketter vises på knapper og i menuer i webklienten. Du kan definere forskellige funktionsetiketter for hver type opbevaringssted.",
		admin_interface_text_label_application: "Applikationsetiketter",
		admin_interface_text_label_application_description: "Applikationsetiketter vises i hele webklienten.",
		admin_interface_text_label_system: "Systemegenskabsetiketter",
		admin_interface_text_label_system_description: "De systemegenskaber, der vises, varierer afhængigt af opbevaringsstedet. Du kan tilpasse de etiketter, der vises for de systemegenskaber, der er knyttet til dokumenter og foldere på dine opbevaringssteder.",
		admin_interface_text_label_desktop: "Arbejdspladsetiketter",
		admin_interface_text_label_desktop_description: "Hvis du har tilpasset navnet på applikationen på en arbejdsplads, kan du tilpasse navnet på andre sprog end dansk. Du kan også tilpasse navnene på IBM FileNet P8-applikationspladserne på en arbejdsplads.",

		admin_interface_text_system_label: "Systemetiket",
		admin_interface_text_current_label: "Aktuel etiket",
		admin_interface_text_default_label_heading: "Standardetiket",
		admin_interface_text_default_label: "Standardetiket:",
		admin_interface_text_displayed_in_label: "Fremvist for",
		admin_interface_text_displayed_in_document_folder: "Dokumenter og foldere",
		admin_interface_text_displayed_in_document: "Dokumenter",
		admin_interface_text_displayed_in_folder: "Foldere",
		admin_interface_text_displayed_in_admin_application_space: "Etiket for applikationsplads",
		admin_interface_text_displayed_in_desktop: "Funktionsetiket for mobil",
		admin_interface_text_displayed_in_admin_application_name: "Applikationsnavn",

		admin_new_desktop: "Ny arbejdsplads",
		admin_new_repository: "Nyt opbevaringssted",
		admin_new_menu: "Ny menu",
		admin_new_viewer_mapping: "Ny fremvisertilknytning",
		admin_new_mapping_label: "Ny tilknytning",
		admin_new_icon_mapping: "Ny ikontilknytning",
		admin_viewer_mapping_list_instructions: "Du kan konfigurere, hvilke fremvisere webklienten skal bruge til at vise forskellige typer indhold. En fremvisertilknytning definerer, hvilke MIME-typer der er forbundet med hver af de fremvisere, du vil bruge. Du kan oprette flere fremvisertilknytninger, hvis du vil bruge forskellige fremvisere til forskellige arbejdspladser.",
		admin_viewer_mapping_instructions: "Angiv de fremvisere, du vil bruge til at åbne filer. Hvis du vil bruge en tilpasset fremviser, skal du integrere fremviseren som plugin, før du kan tilføje den til fremvisertilknytningen.<br><br><b>Vigtigt:</b> Når en bruger åbner et dokument, søger webklienten i listen med fremvisertilknytninger for at finde den første fremviser, der kan åbne dokumentet, baseret på brugerens styresystem og det opbevaringssted, brugeren har oprettet forbindelse til. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Ny plugin",
		admin_menu_list_instructions: "Du kan oprette tilpassede værktøjslinjer og kontekstmenuer, som kontrollerer, hvilke handlinger der er tilgængelige for brugerne. Du kan ikke redigere standardmenuerne, men du kan oprette kopier af eksisterende menuer for at begrænse de handlinger, der er til rådighed, eller for at tilføje tilpassede handlinger, der er defineret i plugins.<br><br>Hvis du vil oprette en ny menutype, skal du definere menuen i en plugin.",
		admin_menu_id_hover: "Id'en skal være entydig, og du kan ikke ændre id'en, når du har gemt menuen.<br><br>Id'en må kun indeholde alfanumeriske tegn, og der skelnes mellem store og små bogstaver.",
		admin_menu_id_disabled_hover: "Menu-id'en kan ikke ændres. Hvis du vil bruge en anden id, skal du oprette en ny menu.",
		admin_menu_default_instructions: "Du kan ikke redigere denne menu, fordi det er en standardmenu. Hvis du vil redigere menuen, skal du oprette en kopi af den.",
		admin_menu_toolbar_instructions: "Du kan begrænse de handlinger, der er tilgængelige for denne værktøjslinje, eller du kan tilføje tilpassede handlinger, der er defineret i en plugin. Du kan også organisere handlingerne ved at tilføje skilletegn til værktøjslinjen.",
		admin_menu_toolbar_custom_instructions: "Denne værktøjslinje er defineret af en plugin. Hvis du vil redigere værktøjslinjen, skal du opdatere pluginen eller oprette en kopi af værktøjslinjen.",
		admin_menu_context_menu_instructions: "Du kan begrænse de handlinger, der er tilgængelige for denne kontekstmenu, eller du kan tilføje tilpassede handlinger, der er defineret i en plugin. Du kan også organisere handlingerne ved at tilføje skilletegn og undermenuer til kontekstmenuen.",
		admin_menu_context_menu_custom_instructions: "Denne kontekstmenu er defineret af en plugin. Hvis du vil redigere kontekstmenuen, skal du opdatere pluginen eller oprette en kopi af kontekstmenuen.",
		admin_desktop_list_instructions: "Du kan oprette flere arbejdspladser, hvis du vil give forskellige brugere adgang til det indhold, de skal bruge. Du kan f.eks. oprette en arbejdsplads, hvor brugere kun kan søge efter indhold, eller en arbejdsplads, hvor brugere har adgang til et enkelt opbevaringssted. ",
		admin_plugin_updated: "Konfigurationen af den valgte plugin er ændret. Du skal opfriske browseren, så ændringerne kan træde i kraft.",
		admin_repository_ci_heading: "Content Integrator-opbevaringssted: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager-opbevaringssted: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager-opbevaringssted: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand-opbevaringssted: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS-opbevaringssted (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Box-opbevaringssted: <b>${0}</b>",
		admin_repository_generic_heading: "Opbevaringssted: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Vil du slette de valgte arbejdspladser?\nDer er valgt ${0} arbejdspladser.",
		admin_delete_confirmation_menus: "Vil du slette de valgte menuer?\nDer er valgt ${0} menuer.",
		admin_delete_confirmation_repositories: "Vil du slette de valgte opbevaringssteder?\nDer er valgt ${0} opbevaringssteder.",
		admin_delete_confirmation_viewer_mappings: "Vil du slette de valgte fremvisertilknytninger?  ${0} tilknytninger er valgt.",
		admin_delete_confirmation_icon_mappings: "Vil du slette de valgte ikonkonfigurationer?\n Der er valgt ${0} ikonkonfigurationer.",
		admin_delete_confirmation_plugins: "Vil du slette de valgte plugins?\nDer er valgt ${0} plugins.",
		admin_delete_confirmation: "Vil du slette de valgte elementer?\nDer er valgt ${0} elementer.",

		admin_viewer_mapping_id_hover: "Id'en skal være entydig, og du kan ikke ændre id'en, når du har gemt tilknytningsoversigten.<br><br>Id'en må kun indeholde alfanumeriske tegn, og der skelnes mellem store og små bogstaver.",
		admin_viewer_mapping_id_disabled_hover: "Tilknytningsoversigtens id kan ikke ændres. Hvis du vil bruge en anden id, skal du oprette en ny tilknytningsoversigt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Standardarbejdspladsen kan ikke slettes.",

		admin_desktop_heading: "Arbejdsplads: <b>${0}</b>",
		admin_menu_toolbar_heading: "Værktøjslinje: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Tilpasset værktøjslinje: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontekstmenu: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Tilpasset kontekstmenu: <b>${0}</b>",
		admin_plugin_heading: "Plugin: <b>${0}</b>",
		admin_plugin_instructions: "En plugin kan enten være en JAR-fil eller en kompileret klassefil.<br/><br/><b>Vigtigt:</b> IBM Content Navigator-webapplikationsserveren skal kunne få adgang til pluginfilen på det lokale filsystem eller via en url.",
		admin_plugin_list_instructions: "Du skal bruge administrationsværktøjet til at registrere plugins til webklienten. Hvis en plugin kræver yderligere konfiguration, vises konfigurationsparametrene, når du har registreret pluginen.<br /><br /><b>Vigtigt:</b> Hvis du redigerer en plugin, der refereres til i et andet område af administrationsværktøjet, f.eks. en menu, kan der opstå problemer med den måde, pluginen fungerer på. Desuden starter plugins i den rækkefølge, de er angivet. Hvis én plugin skal udføres før en anden, skal du kontrollere, at de står opført i den rækkefølge, de skal udføres i.",
		admin_plugin_cannot_delete: "De valgte plugins kan ikke slettes, fordi andre plugins er afhængige af dem.<br/>Valgte plugins: ${0}<br/>Afhængige plugins: ${1}",
		admin_plugin_cannot_disable: "De valgte plugins kan ikke deaktiveres, fordi andre plugins er afhængige af dem.<br/>Valgte plugins: ${0}<br/>Afhængige plugins: ${1}",
		admin_plugin_cannot_add: "Pluginen kan ikke tilføjes, fordi nogle pluginer afhænger af eller mangler eller er deaktiverede. Manglende eller deaktiverede pluginer: ${0}",
		admin_plugin_cannot_enable: "De valgte plugins kan ikke aktiveres, fordi andre plugins, der er afhængige af dem, mangler eller er deaktiverede.<br/>Valgte plugins: ${0}<br/>Manglende eller deaktiverede pluginer: ${1}",
		admin_plugin_save_order: "Gem rækkefølge",
		admin_plugin_load: "Indlæs",
		admin_plugin_load_hover: "Angiv URL for plugin",
		admin_plugin_file_hover: "Hvis JAR-pluginfilen findes på dit lokale filsystem, kan du angive den fuldstændige sti eller URL'en til pluginfilen. Hvis JAR-pluginfilen findes på en ekstern server, skal du angive URL'en til pluginfilen.",
		admin_plugin_classfolderpath_hover: "Den kompilerede klassefil skal findes på IBM Content Navigator-webapplikationsserveren.<br/><br/>Angiv den fuldstændige sti til den folder, hvor pluginklasserne kompileres og genereres.<br/><br/>Stien må ikke indeholde pakkenavnet på pluginklassen. Eksempel: Standardstien til pluginklasseeksemplet i Windows er C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Angiv det fuldstændige navn på Java-klassen i den klassefil, der skal indlæses og kaldes som pluginklasse.<br/>Eksempel: Klassenavnet for plugineksemplet er com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Plugin-JAR-filen er ikke fundet på den angivne URL. Kontrollér, at JAR-filen er på webapplikationsserveren, og at URL- og filnavnsangivelsen er korrekt.",
		admin_plugin_for_repository_not_loaded: "Du kan ikke redigere dette opbevaringssted. Den plugin, der definerer og understøtter denne type opbevaringssted, er ikke indlæst. På skillebladet Plugin kan du redigere pluginen for at kontrollere, at den er konfigureret korrekt, og at den er indlæst.",
		admin_plugin_repository_types: "Opbevaringsstedstyper:",
		admin_plugin_viewers: "Fremvisere:",
		admin_plugin_features: "Funktioner:",
		admin_plugin_layouts: "Layout:",
		admin_plugin_not_available: "Ikke tilgængelig",
		admin_plugin_config_params: "Konfigurationsparametre:",
		admin_viewer_def_heading: "Fremvisertilknytning: <b>${0}</b>",
		admin_users_and_groups: "Brugere og grupper",
		admin_general: "Generelt",
		admin_logging: "Registrering i log",
		admin_authentication: "Validering",		
		admin_rolebase_role: "Rolle:",
		admin_settings_logging_instructions: "Du kan bruge logning til at finde og løse problemer med webklienten. Du kan omdefinere logningen, hvis du ved, at et problem opstår inden for en specifik Java-klasse eller for en bestemt bruger. Oplysninger om fejl skrives til webapplikationsserverens fejllogfiler.",
		admin_settings_logging_instructions2: "<b>Indstillinger for fejllogfiler</b><br />Hvis du ved, at et problem opstår for en bestemt klientværtsmaskine eller bruger, kan du målrette fejlregistreringen til den pågældende maskine eller bruger. Du kan registrere fejloplysninger i et produktionsmiljø uden større indvirkning på systemets ydeevne.<br /><br /><b>Vigtigt:</b> Hvis du angiver en klientværtsmaskine eller bruger, tilsidesætter denne indstilling eventuelle andre logningsindstillinger. Når du har indsamlet de oplysninger, du skal bruge, skal du angive denne indstilling til <b>Ingen</b> for at at genoptage standardlogning af dit miljø.",
		admin_settings_export_config_hover: "Eksportér de aktuelle systemkonfigurationsoplysninger til en fil, der kan bruges til IBM Support Assistant Data Collector. Filen gemmes i den placering, der er angivet med Java-systemegenskaben user.home.",
		admin_logging_level: "Registrering i log på applikationsniveau:",
		admin_logging_level_hover: "Niveauet for registrering i log har indflydelse på, hvor mange informationer der bliver gemt på serveren. Hvis du vælger <b>Fejl</b>, indsamler du færrest registreringsoplysninger. Hvis du vælger <b>Fejlsøgning</b>, indsamler du flest oplysninger.<br /><br />Angiv ikke <b>Fejlsøgning</b> i et produktionsmiljø, medmindre du får besked på at gøre det af IBM Software Support.",
		admin_logging_level_0: "Ingen logning",
		admin_logging_level_1: "Fejl",
		admin_logging_level_2: "Advarsel",
		admin_logging_level_3: "Information",
		admin_logging_level_4: "Fejlsøgning",
		admin_logging_classes: "Logning på Java-klasseniveau:",
		admin_logging_classes_hover: "Som standard inkluderes alle Java-klasser og -pakker i webapplikationsserverens fejllogfiler. Men du kan angive, hvilke klasser eller pakker der skal medtages eller udelukkes for logning. Du kan bruge webapplikationsserverens fejllogfiler til at bestemme, hvilke klasser der skal medtages eller udelades.<br><br>Hvis du ved, at et problem opstår i en bestemt klasse, kan du specifikt vælge at medtage den pågældende klasse i logfilerne. Når du medtager en klasse i dine fejllogfiler, bliver alle de andre klasser udelukket fra logfilen.<br><br>Hvis du ved, at et problem ikke forekommer i en klasse, og du ønsker at mindske størrelse på logfilen, kan du udelade den pågældende klasse i logfilerne.",
		admin_logging_classes_include: "Inkludér",
		admin_logging_classes_include_all: "Alle klasser",
		admin_logging_classes_include_specified: "Bestemte klasser",
		admin_logging_classes_include_specified_msg: "Angiv, hvilke klasser der skal inkluderes.",
		admin_logging_classes_exclude: "Udelad",
		admin_logging_classes_exclude_none: "Ingen",
		admin_logging_classes_exclude_specified: "Bestemte klasser",
		admin_logging_classes_exclude_specified_msg: "Angiv, hvilke klasser der skal udelades.",
		admin_logging_debug: "Registrering i log ved fejlsøgning på:",
		admin_logging_debug_hover: "<b>Vigtigt:</b> Gennemse webapplikationsserverens logfiler, inden du angiver en IP-adresse for en klientværtsmaskine eller en bruger. Den værdi, du angiver, skal svare til den værdi, der er vist i logfilen.",
		admin_logging_debug_none: "Ingen (standard)",
		admin_logging_debug_host: "Klientværtsmaskiner (IP-adresser)",
		admin_logging_debug_host_msg: "Angiv IP-adressen for en eller flere klientmaskiner, som du gerne vil registrere fejlsøgningsoplysninger for. Brug et komma til at adskille IP-adresser.<br /><br /><b>Vigtigt:</b> Gennemse webapplikationsserverens logfiler, før du angiver en IP-adresse. Den værdi, du angiver, skal svare til den værdi, der er vist i logfilen.",
		admin_logging_debug_user: "Brugere",
		admin_logging_debug_user_msg: "Angiv brugernavnet for en eller flere brugere, som du gerne vil registrere fejlsøgningsoplysninger for. Brug et komma til at adskille brugernavne.<br /><br /><b>Vigtigt:</b> Gennemse webapplikationsserverens logfiler, før du angiver et brugernavn. Den værdi, du angiver, skal svare til den værdi, der er vist i logfilen.",

		admin_office_settings_logging_instructions: "Du kan bruge logning til at finde og løse problemer med IBM Content Navigator for Microsoft Office. Du kan omdefinere logningen, hvis du ved, at et problem opstår inden for en specifik klasse eller for en bestemt bruger. Fejloplysninger skrives til applikationens logfiler på IBM Content Navigator for Microsoft Office-klientværtsmaskinerne. ",
		admin_office_settings_logging_instructions2: "<b>Indstillinger for fejllogfiler</b><br />Hvis du ved, at et problem opstår for en bestemt klientværtsmaskine eller IBM Content Navigator for Microsoft Office-bruger, kan du målrette fejlregistreringen til den pågældende maskine eller bruger. Du kan registrere fejloplysninger i et produktionsmiljø uden større indvirkning på systemets ydeevne. <br /><br /><b>Vigtigt:</b> Hvis du angiver en klientværtsmaskine eller bruger, tilsidesætter denne indstilling eventuelle andre logningsindstillinger. Når du har indsamlet de oplysninger, du skal bruge, skal du angive <b>Ingen</b> for denne indstilling for at genoptage standardlogning af IBM Content Navigator for Microsoft Office-miljøet. ",
		admin_office_logging_debug_hover: "<b>Vigtigt:</b> Gennemse klientmaskinens logfiler, inden du angiver en IP-adresse for en klientværtsmaskine eller en bruger. Den værdi, du angiver, skal svare til den værdi, der er vist i logfilen. ",
		admin_office_logging: "Office-logning",
		admin_office_logging_classes: "Registrering i log på klasseniveau:",
		admin_office_logging_classes_hover: "Som standard inkluderes alle klasser og pakker i IBM Content Navigator for Microsoft Office-fejllogfilerne. Men du kan angive, hvilke klasser eller pakker der skal medtages eller udelukkes for logning. Du kan bruge klientmaskinens fejllogfiler til at bestemme, hvilke klasser der skal medtages eller udelades.<br /><br />Hvis du ved, at et problem opstår i en bestemt klasse, kan du specifikt vælge at medtage den pågældende klasse i logfilerne. Når du medtager en klasse i dine fejllogfiler, bliver alle de andre klasser udelukket fra logfilerne. <br /><br />Hvis du ved, at et problem ikke forekommer i en klasse, og du ønsker at mindske størrelse på logfilen, kan du udelade den pågældende klasse i logfilerne. ",
		admin_office_logging_debug_hover: "<b>Vigtigt:</b> Gennemse klientmaskinens logfiler, inden du angiver en IP-adresse for en klientværtsmaskine eller en bruger. Den værdi, du angiver, skal svare til den værdi, der er vist i logfilen.",
		admin_office_logging_additional_settings: "Yderligere indstillinger:",
		admin_office_logging_additional_settings_hover: "Angiv yderligere indstillinger",
		admin_office_logging_file_size: "Logfilstørrelse",
		admin_office_logging_file_size_hover: "Angiv en størrelse for, hvornår IBM Content Navigator for Microsoft Office skal oprette en ny logfil. Når en logfil når den maksimale størrelse, omdøbes den aktuelle logfil, så navnet indeholder datoen (i formatet ÅÅÅÅMMdd) og et filnummer (f.eks. ICNExcelAddin-20121116-5.log), og en ny logfil oprettes. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Vis staksporing i dialogbokse.",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Det er valgfrit, om du vil vise oplysninger om staksporing i meddelelsesdialogbokse for at lette fejlfinding- og afhjælpning. Selvom du ikke aktiverer denne funktion, medtages oplysninger om staksporing altid i IBM Content Navigator for Microsoft Office-fejlloggene. ",

		admin_icon_state_twisty: "Tilstandsikoner",
		admin_icon_state_icon: "Tilstandsikon",
		admin_icon_state: "Tilstand",
		state_contains_label: "Tilstand indeholder",
		admin_icon_state_instructions: "Du kan tilpasse de ikoner, der bliver vist ved siden af dokumenter, foldere og arbejdselementer på dine opbevaringssteder.<br><br><b>Tip:</b> Du kan angive, om der skal vises tilstandsikoner for hvert enkelt opbevaringssted i dit systemmiljø.",
		admin_icon_state_dialog_title: "Tilknytning af tilstandsikoner",
		admin_icon_state_dialog_instructions: "Du kan knytte en bestemt tilstand til en foruddefineret ikon, som leveres sammen med webklienten, eller til en tilpasset ikon.",

		admin_icon_mapping_twisty: "Ikoner for MIME-typer",
		admin_icon_mapping_dialog_title: "Ikontilknytning",
		admin_icon_mapping: "Ikontilknytning",
		admin_icon_mapping_instructions: "Du kan knytte en liste med MIME-typer til en foruddefineret ikon, som leveres sammen med webklienten, eller til en tilpasset ikon.",
		admin_icon_mapping_list_instructions: "Du kan tilpasse de ikoner, der bliver vist for de forskellige MIME-typer, som er gemt på dit opbevaringssted. Webklienten bruger ikonerne i den rækkefølge, de er angivet. Hvis en MIME-type er angivet mere end én gang, bruges den første ikon, der er forbundet med den MIME-type.",
		admin_icon_mapping_icon_label: "Hvilken ikon vil du bruge?",
		admin_icon_mapping_file_name: "Tilpasset ikon:",
		admin_icon_mapping_file_name_heading: "Tilpasset ikon",
		admin_icon_mapping_file_name_placeholder: "Angiv ikonens URL",
		admin_icon_mapping_file_name_hover: "Angiv URL'en til ikonen. Hvis ikonen er på samme webapplikationsserver som webklienten, skal du angive en relativ URL. f.eks.: /minetilpasninger/ikon.png",
		admin_icon_mapping_class_name: "Foruddefineret ikon:",
		admin_icon_mapping_class_name_heading: "Foruddefineret ikon",
		admin_icon_mapping_class_name_hover: "Vælg en ikon, som leveres sammen med webklienten.",
		admin_icon_mapping_class_name_placeholder: "Vælg en ikon",

		admin_p8_instructions: "Disse oplysninger er fælles for alle de FileNet Content Manage-opbevaringssteder, der er konfigureret for webklienten.",
		admin_p8_collaboration_config: "Valgfri konfiguration af FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Du kan konfigurere disse parametre, hvis du vil optimere FileNet Collaboration Services for IBM FileNet P8-miljøet.",
		admin_p8_use_url_incoming: "Brug URL'en for indgående anmodninger til at generere URL'er til svar:",
		admin_p8_use_url_incoming_hover: "I de fleste FileNet Collaboration Services-miljøer kan du bruge URL'en for en indgående anmodning til at generere URL'en i et svar. Vælg <b>Ja</b>, medmindre en af følgende situationer gælder for dit systemmiljø:<ul><li>Du ønsker at tvinge klientapplikationer til at opnå adgang til FileNet Collaboration Services gennem en bestemt URL.<li>Indstillingerne for proxyserver bevirker, at FileNet Collaboration Services frembringer ugyldige URL'er.</ul>",

		admin_p8_use_url_incoming_http: "URL til FileNet Collaboration Services",
		admin_p8_use_url_incoming_http_hover: "Angiv den URL, som klientapplikationer kan bruge til at få adgang til FileNet Collaboration Services, i formatet http://FNCSserver:port_nummer.",
		admin_p8_use_url_incoming_https: "HTTPS URL til FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Hvis FileNet Collaboration Services er konfigureret til at bruge SSL, skal du angive den HTTPS URL, som klientapplikationer skal bruge for at opnå adgang til FileNet Collaboration Services, i formatet https://FNCSserver:port_nummer",
		admin_p8_hide_email_addresses: "Skjul brugeres e-mailadresser i serversvar:",
		admin_p8_hide_email_addresses_hover: "Du kan skjule brugernes e-mailadresser i serversvar, hvis der er brug for det iht. virksomhedens politik vedrørende beskyttelse af persondata. Du kan f.eks. skjule listen over brugernes e-mailadresser, når serveren returnerer en liste dokument og oplysninger om de brugere, som har oprettet eller redigeret dokumenterne.",

		admin_p8_mask_user_ids: "Maskér bruger-id'er i logfiler:",
		admin_p8_mask_user_ids_hover: "Du kan skjule brugernavne i FileNet Collaboration Services-logfiler, hvis der er brug for det iht. virksomhedens politik vedrørende beskyttelse af persondata. Hvis du aktiverer denne funktion, erstattes brugernavnene med hash-værdier. Herved kan du stille logfiler til rådighed for eksterne virksomheder, f.eks. IBM, med henblik på støtte uden at afsløre dine brugeres navne eller aktiviteter.",

		admin_p8_soft_delete: "Flyt slettede filer til retableringspapirkurven:",
		admin_p8_soft_delete_hover: "Når brugere sletter elementer, flyttes elementerne til retableringspapirkurven i stedet for, at de slettes fra opbevaringsstedet. Elementerne bliver i retableringspapirkurven, indtil de slettes. Denne indstilling ignoreres, hvis målopbevaringsstedet ikke understøtter retableringspapirkurve.<br><br><b>Begrænsning:</b> Retableringspapirkurve understøttes på IBM FileNet P8 Version 5.2 eller nyere og kræver Social Collaboration Base Extensions-tilføjelsesprogram.",

		admin_p8_download: "Konfiguration af CDHC (Content Download HTTP Cache)",
		admin_p8_download_instructions: "Hvis IBM FileNet Content Manager-opbevaringsstederne indeholder mange store filer, kan du konfigurere CDHC (Content Download HTTP Cache) til at aktivere FileNet Collaboration Services for at lede anmodninger vedrørende store filers indhold sikkert til en særligt udpeget webserver.<br/><br/>Denne funktion kræver IBM HTTP Server. Desuden skal du opdatere IBM HTTP Server-filen httpd.conf.",
		admin_p8_download_cache: "CDHC (Content Download HTTP Cache):",
		admin_p8_download_cache_hover: "Angiv, om du vil aktivere CDHC for alle IBM FileNet Content Manager-opbevaringssteder i dit systemmiljø. Du kan angive en minimumsfilstørrelse for, hvornår filer skal gemmes i cache.",
		admin_p8_download_cache_folder: "Fuldstændigt kvalificeret cachebibliotek:",
		admin_p8_download_cache_folder_hover: "Angiv den fuldstændige sti til det bibliotek, hvor du vil gemme cachefiler. Biblioteket kan være placeret på et hvilket som styresystem eller en hvilken som helst enhed, f.eks. som et delt netværksbibliotek, sålænge det er synligt for FileNet Collaboration Services og IBM HTTP Server som et filsystem.",
		admin_p8_download_cache_url: "Alias for cacheplacering:",
		admin_p8_download_cache_url_hover: "Angiv det alias, der skal bruges til at pege på cachebiblioteket fra FileNet Collaboration Services-URL'en. Angiv aliaset i formatet /alias, f.eks. /cdhc.<br/><br/>Når /cdhc medtages i en URL, omdirigeres applikationen til det fuldstændige cachebibliotek.",
		admin_p8_download_cache_max_files: "Maksimalt antal cachefiler:",
		admin_p8_download_cache_max_files_hover: "Når det maksimale antal filer nås, fjernes den ældste fil fra cachelageret.<br><br>Hvis du angiver det maksimale antal cachefiler samt den maksimale cachestørrelse, fjernes den ældste fil fra cachen, når den laveste af de to betingelser opfyldes.",
		admin_p8_download_cache_max_size: "Maksimal cachestørrelse (i GB):",
		admin_p8_download_cache_max_size_hover: "Når den maksimale cachestørrelse nås, fjernes den ældste fil fra cachelageret.<br/><br/>Hvis du angiver det maksimale antal cachefiler samt den maksimale cachestørrelse, fjernes den ældste fil fra cachen, når den laveste af de to betingelser opfyldes.",
		admin_p8_download_cache_cleanup_duration: "Maksimal oprydningsvarighed (i sekunder):",
		admin_p8_download_cache_cleanup_duration_hover: "Angiv, hvor længe oprydningen højst må tage. Standardværdien er 5 sekunder.<br><br>Filer, som er underlagt sletning, men som fortsat findes i cachelageret efter oprydning, fjernes ved en fremtidig oprydning.",
		admin_p8_download_cache_cleanup_min: "Mindste interval mellem oprydningsfunktioner for cachelager (i sekunder):",
		admin_p8_download_cache_cleanup_min_hover: "Angiv den korteste tid, der må gå, mellem oprydninger af cachelager. Standardværdien er 3.600 sekunder (1 time).<br><br>Oprydning af cachelager finder kun sted, når der er en aktiv anmodning om download af indhold fra cachelageret. Hvis anmodninger modtages hvert minut, finder oprydningen sted hver time. Men hvis 3 timer passerer mellem downloadanmodninger, finder oprydningen først sted, når den næste downloadanmodning modtages.",
		admin_p8_download_cache_min_lifetime: "Korteste tid i cachelager (i sekunder):",
		admin_p8_download_cache_min_lifetime_hover: "Angiv den korteste tid, en fil opbevares i cache, inden den kan flyttes. Standardværdien er 3.600 sekunder (1 time).<br><br>Selvom cachen når den maksimale størrelse eller indeholder det maksimale antal filer, slettes den ældste fil først, når den angivne tid er gået.",
		admin_p8_download_cache_size_threshold: "Minimal cachefilstørrelse (i KB):",
		admin_p8_download_cache_size_threshold_hover: "Angiv den mindste størrelse for, hvornår CDHC skal bruges til at placere filer i cachelager. Hvis en fil er mindre end den angivne størrelse, føres den gennem den webapplikationsserver, hvor FileNet Collaboration Services er distribueret. Standardværdien er 1.000 KB.",
		admin_p8_download_guard_header: "HTTP-header for gatekeeping:",
		admin_p8_download_guard_header_hover: "Hvis en klientapplikation ikke dirigerer en anmodning gennem IBM HTTP Server, kan cacheindholdet ikke downloades. Du kan angive, at det kun er indgående anmodninger med en bestemt HTTP-header (som tilføjes til anmodninger fra IBM HTTP Server), der kan få adgang til cacheindholdet for at forhindre downloadfejl.<br><br>HTTP-headeren konfigureres i IBM HTTP Server og findes i alle indgående anmodninger, der dirigeres gennem IBM HTTP Server. Hvis en anmodning ikke indeholder HTTP-headeren, dirigeres indholdet gennem webapplikationsserveren i stedet for IBM HTTP Server.",
		admin_p8_download_generate_config: "Generér konfiguration",
		admin_p8_download_generate_config_label: "Konfiguration af IBM HTTP Server",
		admin_p8_download_generate_config_label_hover: "For at CDHC-konfigurationen kan fungere skal du opdatere IBM HTTP Server-filen httpd.conf. Klik på Generér konfiguration for at generere de sætninger, der skal tilføjes til filen httpd.conf.",

		admin_logging_viewone_pro: "ViewONE Professional-logning:",
		admin_logging_viewone_virtual: "ViewONE Virtual-logning:",
		admin_logging_viewone_streamer: "Document Streaming Server Module-logning:",
		admin_logging_viewone_streamer_hover: "Indstillingerne for Document Streaming Server Module-logning kan kun anvendes, hvis du har aktiveret streaming for PDF- eller TIFF-filer i afsnittet <b>Daeja ViewONE</b> i administrationsværktøjet.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module-logning:",
		admin_logging_viewone_redaction_hover: "Indstillingerne for Permanent Redaction Server Module-logning kan kun anvendes, hvis du har tilladelse til at bruge Redaction-modulet i Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Stream PDF-filer:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Hvis du har store PDF-dokumenter i dit opbevaringssted, kan du aktivere fremviseren til at streame dokumentindhold for at gøre det hurtigere for brugere at få vist disse dokumenter. Hvis streaming ikke fungerer i dit systemmiljø, kan du deaktivere streaming.",
		admin_daeja_viewonepro_stream_tiff_documents: "Stream TIFF-filer:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Hvis du har store TIFF-dokumenter i dit opbevaringssted, kan du aktivere fremviseren til at streame dokumentindhold for at gøre det hurtigere for brugere at få vist disse dokumenter. Hvis streaming ikke fungerer i dit systemmiljø, kan du deaktivere streaming.",
		admin_daeja_viewonepro_show_file_buttons: "Fil-knapper",
		admin_daeja_viewonepro_show_file_menus: "Fil-menuer",
		admin_daeja_viewonepro_enable_file_keys: "Fil-genvejstaster",
		admin_daeja_viewonepro_file_keys_hover_help: "Angiv, om brugere skal benytte tastaturgenveje til at arbejde med filer, f.eks. til at åbne eller gemme en fil. Der er flere oplysninger om genvejstaster under beskrivelsen af parameteren FileKeys i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Udskriv-knapper",
		admin_daeja_viewonepro_show_print_menus: "Udskriv-menuer",
		admin_daeja_viewonepro_enable_print_keys: "Udskriv-genvejstaster",
		admin_daeja_viewonepro_print_keys_hover_help: "Angiv, om brugere skal benytte tastaturgenveje til at udskrive filer, f.eks. til at udskrive en side eller et dokument. Der er flere oplysninger om genvejstaster under beskrivelsen af parameteren PrintKeys i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Byt om-knapper",
		admin_daeja_viewonepro_annotation_tooltip: "Standardværktøjstip for tilpasset markering",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Angiv den tekst, der skal vises, når der ikke er angivet et værktøjstip for en tilpasset markering. Teksten kan indeholde tokens, der kan erstattes. Eksempel: &quot;&lt;creator&gt; oprettede denne markering &lt;createdateonly&gt;.&quot; Der er flere oplysninger om tokens, der kan erstattes, under parameteren customAnnotationsToolTip i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Brug foruddefineret, tilpasset værktøjstip",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Brug systemdefineret, tilpasset værktøjstip, som vises i tekstfeltet nedenfor",
		admin_daeja_viewonepro_help_url: "URL til hjælp:",
		admin_daeja_viewonepro_help_url_hover_help: "Angiv URL'en til den webside, der indeholder hjælpedokumentation for fremviseren. Hjælp-knappen i fremviserens værktøjslinje og menupunktet Hjælp åbner websiden. Hvis du ikke angiver en URL, vises Hjælp-knappen og -menupunktet ikke.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Ressourcekontekst for billedstempel:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "opgave",
		admin_daeja_viewonepro_route_docs: "Omdirigér ikke-understøttet indhold til browseren:",
		admin_daeja_viewonepro_route_docs_hover_help: "Brugere kan få vist ikke-understøttede billedfiler ved at omdirigere dem til browseren, som åbner den relevante applikation for visning af filen. Browseren benytter f.eks. Microsoft Word-fremviseren for at åbne et Microsoft Word-dokument.",
		admin_daeja_viewonepro_scale: "Tilpas automatisk billede:",
		admin_daeja_viewonepro_scale_best: "Nærmeste tilpasning",
		admin_daeja_viewonepro_scale_ftow: "Tilpas til bredde",
		admin_daeja_viewonepro_scale_ftoh: "Tilpas til højde",
		admin_daeja_viewonepro_enable_hotkeys: "Aktivér genvejstaster:",
		admin_daeja_viewonepro_show_features: "Vis knapper og menuer:",
		admin_daeja_custom_settings: "Yderligere indstillinger:",
		admin_daeja_custom_settings_hover_help: "Du kan tilføje andre parametre ved at angive parameternavn og -værdi. Du kan f.eks. angive &quot;scrollbars&quot; og &quot;true&quot;, hvis du ønsker, at rullepaneler skal vises, når et billede skaleres til en størrelse, der er større end fremvisningsområdet. Der er flere oplysninger om parameternavne og -værdier i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Standardværktøjstip for tilpasset markering",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Angiv den tekst, der skal vises, når der ikke er angivet et værktøjstip for en tilpasset markering. Teksten kan indeholde tokens, der kan erstattes. Eksempel: &quot;&lt;creator&gt; oprettede denne markering &lt;createdateonly&gt;.&quot; Der er flere oplysninger om tokens, der kan erstattes, under parameteren customAnnotationsToolTip i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Brug foruddefineret, tilpasset værktøjstip",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Brug systemdefineret, tilpasset værktøjstip, som vises i tekstfeltet nedenfor",
		admin_daeja_virtual_image_stamp_resource_context: "Ressourcekontekst for billedstempel:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "opgave",
		admin_daeja_virtual_license_path:"Sti til licensfiler:",
		admin_daeja_virtual_license_path_hover_help:"Angiv den fuldstændige sti til det bibliotek, der indeholder licensfilerne lic-server-virtual.v1 og lic-server.v1.",
		admin_default_license_path:"Brug standardstien til licensfiler",
		admin_license_path_specified:"Brug den tilpassede sti til licensfiler",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Cachebibliotek:",
		admin_daeja_streamer_cache_root_hover_help: "Angiv den fuldstændige sti til det bibliotek, hvor du vil gemme cachefiler, så du hurtigere kan få adgang til dem. Biblioteket kan være placeret på et hvilket som styresystem eller en hvilken som helst enhed, f.eks. et netværksbibliotek, sålænge det er synligt for IBM Content Navigator og IBM HTTP Server som et filsystem. Brug et lokalt bibliotek for at øge ydeevnen.",
		admin_daeja_streamer_settings: "Yderligere indstillinger:",
		admin_daeja_streamer_settings_hover_help: "Du kan tilføje andre parametre ved at angive parameternavn og -værdi. Du kan f.eks. angive “cookieAllowedDomainList” og en kommasepareret liste over værtsservere. Der er flere oplysninger om parameternavne og -værdier i IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Indstillinger:",
		admin_daeja_redaction_settings_hover_help: "Du kan tilføje andre parametre ved at angive parameternavn og -værdi. Du kan f.eks. angive “burnIncrementalAnnotations” og ”true”. Der er flere oplysninger om parameternavne og -værdier i IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Ny indstilling",
		admin_daeja_setting_dialog_title_edit: "Redigér indstilling",
		admin_daeja_setting_dialog_hover_help: "Tilføj yderligere parametre ved at angive parameternavn og -værdi. Du kan f.eks. angive “scrollbars” og “true”, hvis du ønsker, at rullepaneler skal vises, når et billede skaleres til en størrelse, der er større end fremvisningsområdet.",
		admin_daeja_setting_dialog_field_hover_help: "Der er flere oplysninger om parameternavne og -værdier i Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Daeja ViewONE-logning",
		admin_daeja_logging_trace: "Aktivér sporingslogning",
		admin_daeja_logging_trace_net: "Aktivér netværkslogning",
		admin_daeja_logging_trace_annotations: "Aktivér markeringslogning",
		admin_daeja_logging_log_file: "Logfil:",
		admin_daeja_logging_instructions: "Du kan bruge logning til at løse problemer med Daeja ViewONE Professional og Daeja ViewONE Virtual. Hvis du ved, at et problem opstår for en bestemt funktion, kan du målrette logningen til den pågældende funktion.",

		admin_v1pro_logging_trace_hover: "Brug disse indstillinger til at løse generelle fremviserproblemer.<br><br>Logningsoplysninger skrives til Java-konsollen på klientmaskine. Du har adgang til Java-konsollen fra kontrolpanelet (Windows) eller systemindstillinger (Mac) i dit styresystem.",
		admin_v1pro_logging_trace_net_hover: "Brug disse indstillinger til at løse følgende problemer:<ul><li>Problemer med serverforbindelsen</li><li>Problemer med MIME-typer</li><li>Problemer med filer, der er for lange</li></ul>Du kan desuden bruge netværkssporingslogning til at bestemme, hvor det er forsinkelser forekommer, når du bruger Daeja ViewONE Professional.<br><br>Logningsoplysninger skrives til Java-konsollen på klientmaskine. Du har adgang til Java-konsollen fra kontrolpanelet (Windows) eller systemindstillinger (Mac) i dit styresystem.",
		admin_v1pro_logging_trace_annotations_hover: "Brug denne indstilling til at løse problemer med at oprette, gemme eller indlæse markeringer.<br><br>Logningsoplysninger skrives til Java-konsollen på klientmaskine. Du har adgang til Java-konsollen fra kontrolpanelet (Windows) eller systemindstillinger (Mac) i dit styresystem.",

		admin_virtual_logging_trace_hover: "Brug disse indstillinger til at løse generelle fremviserproblemer.<br><br>Som standard skrives logningsoplysninger til filen virtual.log i config-underbiblioteket til IBM Content Navigator-installationsbiblioteket.",
		admin_virtual_logging_trace_net_hover: "Brug disse indstillinger til at løse følgende problemer:<ul><li>Problemer med serverforbindelsen</li><li>Problemer med MIME-typer</li><li>Problemer med filer, der er for lange</li></ul>Du kan desuden bruge netværkssporingslogning til at bestemme, hvor det er forsinkelser forekommer, når du bruger Daeja ViewONE Professional.<br><br>Som standard skrives logningsoplysninger til filen virtual.log i config-underbiblioteket til IBM Content Navigator-installationsbiblioteket.",
		admin_virtual_logging_trace_annotations_hover: "Brug denne indstilling til at løse problemer med at oprette, gemme eller indlæse markeringer.<br><br>Som standard skrives logningsoplysninger til filen virtual.log i config-underbiblioteket til IBM Content Navigator-installationsbiblioteket.",
		admin_virtual_logging_log_file_hover: "Hvis du aktiverer logning for fremviseren, skal du angive den fuldstændige sti til og navnet på logfilen, hvor logningsoplysningerne skal gemmes. Det anbefales, at du giver logfilen navnet virtual.log.",

		admin_streamer_logging_trace_hover: "Brug denne indstilling til at løse generelle problemer med Document Streaming Server Module.<br><br>Som standard skrives logningsoplysninger til filen streamer.log, som er placeret i config-underbiblioteket til IBM Content Navigator-installationsbibliotek.",
		admin_streamer_logging_trace_net_hover: "Brug disse indstillinger til at løse følgende problemer:<ul><li>Problemer med serverforbindelsen</li><li>Problemer med bestemte MIME-typer</li><li>Problemer med filer, der er for lange</li></ul>Du kan desuden bruge netværkssporingslogning til at bestemme, hvor det er forsinkelser forekommer, når du bruger Document Streaming Server Modul.<br><br>Som standard skrives logningsoplysninger til filen streamer.log, som er placeret i config-underbiblioteket til IBM Content Navigator-installationsbibliotek.",
		admin_streamer_logging_log_file_hover: "Hvis du aktiverer logning for Document Streaming Server Module, skal du angive den fuldstændige sti til og navnet på logfilen, hvor logningsoplysningerne skal gemmes. Det anbefales, at du giver logfilen navnet streamer.log.",

		admin_redaction_logging_trace_hover: "Brug denne indstilling til at løse generelle problemer med Permanent Redaction Server Module.<br><br>Som standard skrives logningsoplysninger til filen redacttofile.log, som er placeret i config-underbiblioteket til IBM Content Navigator-installationsbibliotek.",
		admin_redaction_logging_trace_net_hover: "Brug disse indstillinger til at løse følgende problemer:<ul><li>Problemer med serverforbindelsen</li><li>Problemer med bestemte MIME-typer</li><li>Problemer med filer, der er for lange</li></ul>Du kan desuden bruge netværkssporingslogning til at bestemme, hvor det er forsinkelser forekommer, når du bruger Permanent Redaction Server Modul.<br><br>Som standard skrives logningsoplysninger til filen redacttofile.log, som er placeret i config-underbiblioteket til IBM Content Navigator-installationsbibliotek.",
		admin_redaction_logging_log_file_hover: "Hvis du aktiverer logning for Permanent Redaction Server Module, skal du angive den fuldstændige sti til og navnet på logfilen, hvor logningsoplysningerne skal gemmes. Det anbefales, at du giver logfilen navnet redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfigurér funktioner til dine fremvisere og serviceprogrammer",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Hvis du bruger webklienten til at oprette forbindelse til et eller flere Content Manager OnDemand-opbevaringssteder, skal du angive oplysninger, som OnDemand Web Enablement Kit kræver for at kunne fungere korrekt. Disse oplysninger er fælles for alle de Content Manager OnDemand-opbevaringssteder, der er konfigureret for webklienten.",
		admin_ondemand_language: "Sprog:",
		admin_ondemand_tempdir: "Midlertidigt ODWEK-bibliotek:",
		admin_ondemand_tracegrp: "ODWEK-sporing",
		admin_ondemand_tracedir: "Sporingsbibliotek:",
		admin_ondemand_tracelevel: "Sporingsniveau:",
		admin_ondemand_tracelevel_0: "0 - Ingen logning",
		admin_ondemand_tracelevel_1: "1 - Logning af fejlmeddelelser",
		admin_ondemand_tracelevel_2: "2 - Logning af fejlmeddelelser og advarsler",
		admin_ondemand_tracelevel_3: "3 - Logning af fejlmeddelelser, advarsler og orienterende meddelelser",
		admin_ondemand_tracelevel_4: "4 - Alle meddelelser registreres, inklusive funktionssporing",
		admin_ondemand_max_trace_filesize: "Maksimal størrelse på sporingsfil:",
		admin_ondemand_max_trace_filesize_unlimited: "Ubegrænset",
		admin_ondemand_max_trace_filesize_limited: "Begrænset (anbefalet)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Værdien er uden for intervallet. Værdien skal være et heltal mellem 1 og 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF-installationsbibliotek:",
		admin_ondemand_language_hover: "Angiv sprog, som ODWEK returnerer meddelelser i.",
		admin_ondemand_tempdir_hover: "Angiv det bibliotek, hvor OnDemand Web Enablement Kit opbevarer midlertidige filer under behandlingen. Du skal angive hele stien til et eksisterende bibliotek på webapplikationsserveren.",
		admin_ondemand_tracedir_hover: "Angiv det bibliotek, hvor du vil gemme ODWEK-sporingsfilen arswww.trace. Du skal angive hele stien til et eksisterende bibliotek på webapplikationsserveren.",
		admin_ondemand_tracelevel_hover: "Angiv niveau for logoplysninger, der skrives i filen arswww.trace. <b>Registrering i log af fejlmeddelelser</b> indsamler den mindste mængde logoplysninger. <b>Alle meddelelser registreres, inklusive funktionssporing</b> indsamler den største mængde oplysninger.<br /><br />Angiv ikke <b>Alle meddelelser registreres, inklusive funktionssporing</b> i et produktionsmiljø, medmindre du bliver bedt om det af IBM Software Support.",
		admin_ondemand_max_trace_filesize_hover: "Angiv, om ODWEK-sporingsfilen må vokse ubegrænset, eller om webklienten skal oprette nye logfiler, når logfilen når en vis størrelse. Standardindstillingen er, at sporingslogfilen må vokse, indtil webapplikationen standses på webapplikationsserveren.",
		admin_ondemand_max_trace_unlimited_hover: "Vælg denne indstilling, hvis ODWEK-sporingsoplysningerne skal skrives til en enkelt logfil. Hvis du vælger denne indstilling, kan du få en logfil, der er for stor til at blive åbnet med en standardfilfremviser.",
		admin_ondemand_max_trace_limited_hover: "Vælg denne indstilling, hvis ODWEK-sporingsoplysningerne skal skrives til mindre logfiler. Når en logfil når den maksimale størrelse, omdøbes den aktuelle logfil, så navnet indeholder datoen (i formatet arswww.trace.ÅÅÅÅMMDD.TTMMSS), og en ny logfil oprettes.",
		admin_ondemand_afp2pdf_installdir_hover: "Hvis du vil bruge konverteringsfunktionen AFP2PDF til at konvertere AFP-dokumenter til PDF-dokumenter med henblik på fremvisning og udskrivning, skal du angive det bibliotek, hvor AFP2PDF-konverteringsfunktionen er installeret på webapplikationsserveren, f.eks. C:\\Program Files\\IBM\\AFP2web\\afp2pdf",

		admin_adminusers: "Administratorer",
		admin_adminusers_heading_text_multi: "Du skal angive, hvilke brugere der har administrative privilegier på webklienten. Kun administratorer kan logge på administrationsarbejdspladsen.<br /><br /><b>Vigtigt:</b> Bruger-id'erne på IBM Content Navigator-administratorerne skal svare til:<ul><li>bruger-id'er, der findes på webapplikationsserveren. Bruger-id'erne behøver ikke være administratorer på webapplikationsserveren.</li><li>bruger-id'er, der findes på det standardopbevaringssted, der er konfigureret for hver enkelt arbejdsplads, som inkluderer administrationsfunktionen.</li></ul>",
		admin_adminusers_heading_text_single: "Du skal angive, hvilke brugere der har administrative privilegier på webklienten. Kun administratorer kan logge på administrationsarbejdspladsen.<br /><br /><b>Vigtigt:</b> Bruger-id'erne på IBM Content Navigator-administratorerne skal svare til de bruger-id'er, der findes på din webapplikationsserver. Bruger-id'erne behøver ikke være administratorer på webapplikationsserveren.",
		admin_adminusers_newuser: "Ny administrator:",
		admin_adminusers_add: "Tilføj",
		admin_adminusers_remove: "Fjern",
		admin_adminusers_listheading: "Administratorer",
		admin_adminusers_nameInvalid: "Værdien findes i forvejen.",

		admin_sync_server_instructions: "<b>Kun FileNet P8-brugere:</b> Hvis du planlægger at aktivere Sync Services for en eller flere opbevaringssteder, skal du konfigurere webklienten til at benytte Sync Services. Sync Services-konfigurationen deles af alle opbevaringsstederne i dit systemmiljø.",
		admin_settings_instructions: "De værdier, du angiver på skillebladet Indstillinger, gælder for alle arbejdspladserne i din konfiguration.",
		admin_autocomplete: "Udfyld automatisk brugernavne:",
		admin_autocomplete_hover: "Angiv, om webklienten skal gemme brugernavne i browsercookier, så browseren automatisk kan indsætte brugernavne i webklienten under logon.<br><br>Hvis du aktiverer denne funktion, gemmes brugernavnet på den bruger, der senest har logget på webklienten, i browsercookierne, og det bliver automatisk vist på logonsiden, når en bruger åbner webklienten.<br><br>Du skal deaktivere denne funktion, hvis der er adgang til applikationen fra fælles arbejdsstationer, eller hvis du ikke vil gemme brugernavne i browsercookier.<br /><br />Funktionen gælder ikke mobilapplikationer eller tilpassede applikationer.",
		admin_autocomplete_enable: "Aktivér",
		admin_autocomplete_disable: "Deaktivér",
		admin_cultural_collation: "Landespecifik sortering:",
		admin_cultural_collation_hover: "Hvis du aktiverer landespecifik sortering, foretages sorteringen på opbevaringsstedsserveren. Det kan betyde, at webklientens ydeevne mindskes.<br><br>Hvis du deaktiverer landespecifik sortering, kan det forbedre webklientens ydeevne.",
		admin_cultural_collation_enable: "Aktivér",
		admin_cultural_collation_disable: "Deaktivér",
		admin_base_ui_style: "Tematypografi",
		admin_base_ui_style_hover: "Angiv typografien for standardtemaet, der anvendes til webklienten. Denne typografi anvendes kun på arbejdspladser, der anvender <b>standardtemaet</b> (som angivet på skillebladet <b>Udseende</b> i konfigurationen af arbejdspladsen).<br/></br><b>Begrænsning:</b> Hvis dine konfigurationer af arbejdspladser anvender tilpassede temaer, er de tilpassede temaer baseret på det klassiske udseende, uanset hvilken typografi du vælger.",
		admin_base_ui_style_classic: "Klassisk",
		admin_access_control_access: "Begræns adgang til bestemte brugere og grupper",
		admin_access_control_access_show: "Vis adgangskontroldata",
		admin_access_control_access_enable: "Ja",
		admin_access_control_access_disable: "Nej",
		admin_mobile_access: "Tillad adgang fra mobilapplikationer",
		admin_mobile_access_hover: "Brugere kan som standard få adgang til webklienten fra IBM Content Navigator iOS-applikationen.<br /><br /><b>Vigtigt:</b> Hvis du forhindrer brugere i at få adgang til webklienten fra iOS-applikationen, kan brugerne stadig få adgang fra webbrowserne på deres mobilenhed og fra en tilpasset applikation, som er skrevet ved brug af IBM Content Navigator-API'er, og som fungerer på mobilenheder.",
		admin_mobile_access_enable: "Ja",
		admin_mobile_access_disable: "Nej",
		admin_error: "Oplysning om fejlmeddelelse:",
		admin_error_custom: "Søg efter support i tilpasset indhold",
		admin_error_default: "Søg i IBM-understøttet indhold <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Angiv, hvor du vil dirigere brugere hen, så de kan få flere oplysninger, når der vises en fejlmeddelelse. Du kan dirigere brugere til oplysninger på IBM Support Portal, eller du kan dirigere brugere til en intern ressource, f.eks. en helpdesk.",
		admin_error_URL: "URL-præfiks:",
		admin_error_URL_hover: "Angiv URL'en på den ressource, du vil lede brugerne hen til, når de får vist en fejl, f.eks. en helpdesk. Det kan f.eks. være http://localhost:port_nummer. Webklienten tilføjer meddelelsesnummeret til URL'en.",
		admin_prompt_close_without_save: "Vil du lukke uden at gemme ændringerne?",
		admin_object_expiration_time: "Interval for opfriskning af cache (i minutter):",
		admin_object_expiration_time_hover: "Du kan øge den tid, som konfigurationsobjekter, f.eks. arbejdspladser, opbevares i cachen, for at forbedre webklientens performance. Standardtiden er 10 minutter. Maksimumstiden er 1440 minutter (1 dag).<br /><br />Du skal genstarte webapplikationen, før ændringerne træder i kraft.<br /><br />Hvis IBM Content Navigator distribueres i et klyngemiljø med høj tilgængelighed, udbredes ændringer af konfigurationsobjekter først til noderne i klyngen, når cachen opfriskes.",
		admin_temp_file_cleanup_interval: "Scanningsinterval for oprydning i fremvisningscache (i timer):",
		admin_temp_file_cleanup_interval_hover: "Planlæg, hvor ofte det midlertidige bibliotek scannes for at finde og slette udløbne, midlertidige filer. Det midlertidige bibliotek scannes som standard hver sjette time. Du kan angive et interval på mellem 6 og 48 timer.",
		admin_temp_file_expiration_interval: "Udløb i fremvisercache (i timer):",
		admin_temp_file_expiration_interval_hover: "Angiv, hvor længe midlertidige filer, som vedrører aktiviteter i fremviseren, skal blive i browsercachen. De midlertidige filer udløber som standard efter 24 timer. Du kan angive et interval på mellem 12 og 48 timer.",
		admin_encryption_key_hover: "Nøgle til Navigator-krypteringsfunktioner.",
		admin_encryption_key: "Krypteringsnøgle:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Branding",
		admin_mobile_branding_main_color: "Hovedfarve:",
		admin_mobile_branding_secondary_color: "Sekundær farve:",
		admin_mobile_device_title: "MaaS360-administration",
		admin_mobile_device_enable_maas360: "Aktivér MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Hjælpetekst til Aktivér MaaS360",
		admin_mobile_device_maas360_developer_id: "MaaS360-udvikler-id:",
		admin_mobile_device_maas360_license_key: "MaaS360-licensnøgle:",
		admin_mobile_settings_title: "Indstillinger",
		admin_mobile_email_address_hover_help: "E-mailadressen bruges i mobilapplikationen, når en bruger klikker på \"Send fejlrapport.\"",
		admin_mobile_email_address: "E-mailadresse:",
		admin_invalid_email_address_message: "Den indtastede e-mailadresse er i forkert format. Indtast den korrekte adresse, og prøv igen.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Nogle data er ugyldige.",
		admin_configuration_parameters: "Konfigurationsparametre",
		admin_configuration_optional_features: "Valgfri funktioner",
		admin_configuration_optional_features_p8_instructions: "Vælg de funktioner, du vil aktivere for dette opbevaringssted.<p><b>Vigtigt:</b> Hvis du aktiverer en funktion, der installerer et tilføjelsesprogram til opbevaringsstedet, skal du have oprettet forbindelse til opbevaringsstedet som Content Platform Engine- eller Content Engine-administrator.</p>",
		admin_configuration_optional_features_cm_instructions: "Vælg de funktioner, du vil aktivere for dette opbevaringssted.<p><b>Vigtigt:</b> Disse funktioner ændrer datamodellen for dit opbevaringssted. For at aktivere dem skal du have oprettet forbindelse til opbevaringsstedet som biblioteksserveradministrator.</p>",
		admin_system_properties: "Systemegenskaber",
		admin_system_properties_for: "Systemegenskaber for:",
		admin_available_properties: "Tilgængelige egenskaber",
		admin_displayed_properties: "Viste egenskaber",
		admin_selected_properties: "Valgte egenskaber",
		admin_selected_filtered_properties: "Skjulte egenskaber",
		admin_available_operators: "Viste operatorer",
		admin_selected_filtered_operators: "Skjulte operatorer",
		admin_system_properties_shown: "Viste egenskaber",
		admin_system_properties_hidden: "Skjulte egenskaber",
		admin_available_menu_items: "Tilgængelige handlinger:",
		admin_selected_menu_items: "Valgte handlinger:",
		admin_menu_global: "Finder anvendelse, når der ikke er valgt nogen elementer:",
		admin_menu_multiple_document: "Finder anvendelse, når der er valgt flere elementer:",
		admin_menu_privileges: "Påkrævede privilegier:",
		admin_menu_plugin: "Plugin:",
		admin_menu_repository_types: "Opbevaringsstedstyper:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separator",
		admin_browse: "Gennemse",
		admin_search: "Søg",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Rollebaseret redigering",
		admin_connections_library_enabled: "IBM Connections er aktiveret",
		admin_office_conf: "Redigeringsintegration",
		admin_desktop_conf_label: "Konfiguration af arbejdsplads",
		admin_ms_office_conf_label: "Office-konfiguration",
		admin_workflows: "Arbejdsgange",
		admin_file_types: "Filtyper",
		admin_file_type_contains_label: "Filtype indeholder",
		admin_name_propepty: "Navn",
		admin_cm_name_property_default: "Brug standardnavn",
		admin_cm_name_property_default_hover: "Som standard bruges egenskaben for ICM hierarkisk navn (ICM$NAME) som elementnavn, hvis egenskaben er defineret for elementet. Hvis egenskaben for ICM hierarkisk navn (ICM$NAME) ikke er tilgængelig, bruges den første egenskab, der er markeret med flaget \"repræsenterer\", som elementnavn.",
		admin_cm_name_property: "Angiv egenskab for elementnavn",
		admin_cm_name_property_hover: "Angiv, hvilken egenskab der bruges som navn for dokumenter og foldere.",
		admin_name_property: "Navneegenskab:",
		admin_doc_name_property: "Dokumentnavnsegenskab:",
		admin_doc_name_property_hover: "Angiv, hvilken egenskab der bruges som dokumentnavn.",
		admin_folder_name_property: "Foldernavnsegenskab:",
		admin_folder_name_property_hover: "Angiv, hvilken egenskab der bruges som foldernavn.",
		admin_all_searches_label: "Antal søgninger, der skal vises:",
		admin_unlimited: "Ingen grænse",
		admin_limit: "Begrænset til",
		admin_repository: "Opbevaringssted:",
		admin_application_space: "Applikationsplads",
		admin_available_application_spaces: "Tilgængelige applikationspladser:",
		admin_selected_application_spaces: "Valgte applikationspladser:",
		admin_label: "Etiket",
		admin_repository_box_placeholder: "Vælg et Box-opbevaringssted",
		admin_repository_placeholder: "Vælg et opbevaringssted",
		admin_search_match: "Match:",
		admin_search_match_all: "Match alle søgekriterierne",
		admin_search_match_any: "Match et hvilket som helst søgekriterium",
		admin_search_match_hover: "Angiv, hvilken indstilling der som standard skal vælges i menuen <b>Egenskabsmuligheder</b>.",

		admin_repository_redactions_instructions: "Du kan konfigurere rollebaserede redigeringer til dette opbevaringssted.",
		admin_repository_redaction_policies_description: "Du kan oprette og administrere redigeringspolitikker, som knytter redigeringsårsager til brugere og grupper, der kan læse følsomme data og som kan redigere anmærkninger, der beskytter de følsomme data i forhold til fremvisning.",
		admin_repository_redaction_roles_instruction: "Du kan oprette en redigeringsrolle for at give de angivne brugere og grupper mulighed for at læse følsomme data eller mulighed for at redigere anmærkninger, der beskytter følsomme data fra fremvisning. Redigeringsrollen skal være knyttet til en redigeringsårsag i redigeringspolitikken, før disse brugere og grupper kan læse data eller redigere anmærkningerne.",
		admin_repository_redaction_reasons_instruction: "Du kan konfigurere redigeringsårsager til dit opbevaringssted.",
		admin_repository_redaction_policies: "Konfiguration af redigeringspolitik",
		admin_repository_redaction_roles: "Konfiguration af redigeringsroller",
		admin_repository_redaction_reasons: "Konfiguration af redigeringsårsager",
		admin_repository_redaction_roles_type: "Type",
		admin_repository_redaction_roles_type_hover: "En redaktør kan oprette, ændre eller slette specifikke typer rollebaserede redigeringer, mens en fremviser kan se specifikke typer af følsomme data.",
		admin_repository_redaction_roles_type_editor: "Redaktør",
		admin_repository_redaction_roles_type_viewer: "Fremviser",
		admin_repository_redaction_roles_membership: "Medlemskab",
		admin_repository_redaction_roles_membership_hover: "Vælg de redaktører, der skal have denne rolle.",
		admin_repository_redaction_roles_user_group_hover: "Søg efter brugere og grupper, eller vælg redaktører, der skal denne rolle.",
		admin_repository_redaction_roles_description: "Du kan oprette og administrere redigeringsroller, som giver brugere og grupper mulighed for at læse følsomme data og redigere anmærkninger, der beskytter de følsomme data i forhold til fremvisning.",
		admin_repository_redaction_new: "Ny redigeringsrolle",
		admin_repository_redaction_role_avail_editors: "Tilgængelige redigeringsredaktører",
		admin_repository_redaction_role_avail_users: "Tilgængelige brugere",
		admin_repository_redaction_role_avail_groups: "Tilgængelige grupper",
		admin_repository_redaction_role_selected_editors: "Valgte redigeringsredaktører",
		admin_repository_redaction_role_selected_users_groups: "Valgte brugere og grupper",
		admin_repository_redaction_role_add_editor: "Nee redaktører...",
		admin_repository_redaction_role_access_type: "Adgang",
		admin_repository_redaction_role_access_type_access: "Tillad",
		admin_repository_redaction_role_access_type_no_access: "Afvis",
		admin_repository_redaction_role_users: "Brugere",
		admin_repository_redaction_role_groups: "Grupper",
		admin_repository_redaction_role_editors: "Redaktører",
		admin_delete_confirmation_redaction_roles: "Vil du slette den valgte redigeringsrolle?",
		admin_repository_edit_redaction_role: "Redigeringsrolle: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Standardadgang",
		// RBA
		desktop_user_group_acl: "Arbejdspladsadministratorer",
		desktop_user_group_remove: "Fjern",
		desktop_rba_membership: "Medlemskab",
		desktop_rba_membership_list_label: "Navn",
		admin_repository_redaction_policy_hover: "Angiv en beskrivelse, så brugerne kan skelne mellem denne politik og de andre politikker.",
		admin_repository_new_redaction_policy: "Ny redigeringspolitik",
		admin_repository_policy_name: "Politiknavn",
		admin_repository_reason_redactions: "Redigeringsårsager:",
		admin_repository_role_editors: "Redaktører",
		admin_repository_role_viewers: "Fremvisere",
		admin_repository_redaction_policy_instruction: "Du kan oprette en redigeringspolitik for at knytte de valgte redigeringsårsager til både redigeringsredaktører og redigeringsfremvisere.",
		admin_repository_redaction_reasons_hover: "Vælg en flere typer følsomme data, som de fleste brugere ikke skal kunne se, f.eks. personfølsomme oplysninger, forretningshemmeligheder eller generelle fortrolige virksomhedsoplysninger.",
		admin_repository_readaction_available_reasons: "Tilgængelige årsager",
		admin_repository_readaction_selected_reasons: "Valgte årsager",
		admin_repository_readaction_new_reason: "Ny årsag...",
		admin_repository_redeaction_reasons: "Redigeringsårsager:",
		admin_repository_readaction_editor_permmission: "Redigeringsredaktører:",
		admin_repository_redaction_editors_hover: "Vælg de roller, der kan oprette og ændre redigeringen for de valgte årsager.",
		admin_repository_readaction_new_editor_role: "Ny redaktørrolle...",
		admin_repository_readaction_available_editors: "Tilgængelige redaktørroller:",
		admin_repository_readaction_selected_editors: "Valgte redaktørroller:",
		admin_repository_readaction_viewer_permmission: "Redigeringsfremvisere:",
		admin_repository_redaction_viewers_hover: "Vælg de roller, der kan få vist følsomme data for de valgte årsager. Redigeringen bliver ikke tilføjet for brugere og grupper med disse roller.",
		admin_repository_readaction_new_viewer_role: "Ny fremviserrolle...",
		admin_repository_readaction_available_viewers: "Tilgængelige fremviserroller:",
		admin_repository_readaction_selected_viewers: "Valgte fremviserroller:",
		admin_repository_reason_redactions_header: "Redigeringsårsager",
		admin_delete_confirmation_redaction_policy: "Vil du slette den valgte redigeringspolitik?",
		admin_role_type_repository: "Opbevaringssted",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Skabelon",
		admin_role_type_teamspace: "Teamplads",
		admin_role_type_author: "Redaktør",
		admin_role_type_user: "Fremviser",
		admin_collaboration_services_instructions: "Hvis du har IBM Connections og en FileNet Collaboration Services-webapplikation, kan du konfigurere fællesskabsteampladser og aktivitetsstrømme for opbevaringsstedet.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfiguration af fællesskabsbibliotek",
		admin_collaboration_community_instruction: "Du kan konfigurere et opbevaringssted i IBM FileNet P8-domænet til opbevaring af IBM Connections-fællesskabsbiblioteker (også kaldet teampladser). Når brugere opretter et fællesskabsbibliotek gennem IBM Connections, opbevares det i det opbevaringssted, der er udpeget som opbevaringsstedets fællesskabsbibliotek.",
		admin_collaboration_community_teamspaces: "Brug dette opbevaringssted til fællesskabsbiblioteker:",
		admin_collaboration_community_teamspaces_hover: "Du kan kun bruge ét opbevaringssted i IBM FileNet P8-domænet til opbevaring af nye fællesskabsbiblioteker. Hvis du aktiverer dette opbevaringssted, og du har et eksisterende opbevaringssted, deaktiveres det eksisterende opbevaringssted. Men alle eksisterende biblioteker vil fortsat være placeret i det aktuelle opbevaringssted.",
		admin_collaboration_connections_anonymous: "Tillad anonym adgang til offentligt indhold:",
		admin_collaboration_connections_anonymous_hover: "Hvis IBM Connections-serveren indeholder offentlige eller modererede fællesskaber, kan du konfigurere FileNet Collaboration Services til at give brugere tilladelse til at gennemse og downloade indhold fra bibliotekerne i de fællesskaber uden at skulle logge på først.<br><br>Brugere, som får anonym adgang til fællesskabsbiblioteker kan ikke oprette, ændre eller slette indhold.<br><br><b>Vigtigt:</b> Du skal udpege en IBM FileNet P8 LDAP-bruger som den anonyme bruger og konfigurere vedkommende med rollen <b>Anonymous</b> på WebSphere Application Server.",
		admin_collaboration_connections_url: "URL til IBM Connections:",
		admin_collaboration_connections_url_hover: "Angiv URL'en til IBM Connections-serveren i formatet http://IBMConnectionsServer:port_nummer. Hvis IBM Connections er konfigureret til at bruge IBM HTTP Server, kan du udelade portnummeret fra URL'en.<br><br>URL'en skal være til tilgængelig for IBM Connections-brugere, fordi det er det link, som FileNet Collaboration Services bruger til at oprette link til dokumentlandingssider i IBM Connections.",
		admin_collaboration_connections_url_http_use: "Brug IBM Connections-URL'en",
		admin_collaboration_connections_url_https_use: "Brug IBM Connections HTTPS-URL'en",
		admin_collaboration_connections_url_specify: "Angiv URL'en",
		admin_collaboration_connections_url_https: "URL til IBM Connections HTTPS:",
		admin_collaboration_connections_url_https_hover: "Hvis IBM Connections er konfigureret til at bruge SSL, skal du angive HTTPS-URL'en til IBM Connections-serveren i formatet https://IBMConnectionsServer:port_nummer. Hvis IBM Connections er konfigureret til at bruge IBM HTTP Server, kan du udelade portnummeret fra URL'en.",

		admin_collaboration_connections_gadget_url: "URL til IBM Connections-gadget:",
		admin_collaboration_connections_retrieval_url: "Hente-URL til IBM Connections:",
		admin_collaboration_connections_security: "Fællesskabsadministratorer:",
		admin_collaboration_connections_security_hover: "Angiv de brugere og grupper, som kan administrere indholdet af fællesskabsbibliotekerne.<br><br>Globale administratorer kan oprette, ændre, slette og give adgang til fællesskabsbiblioteker og indholdet af fællesskabsbibliotekerne. Når du definerer en bruger som en global administrator, får brugeren ClbGlobalAdministrator-privilegier i opbevaringsstedet.<br><br>Globale gennemsynsadministratorer godkender og afviser indhold, inden det offentliggøres i et fællesskabsbibliotek. Når du definerer en bruger som en global gennemsynsadministrator, får brugeren ClbGloablReviewAdministrator-privilegier i opbevaringsstedet.",

		admin_collaboration_connections_admins: "Globale administratorer",
		admin_collaboration_connections_admins_review: "Globale gennemsynsadministratorer",
		admin_collaboration_connections_seedlist: "Indeksér indholdet af fællesskabsbiblioteket:",
		admin_collaboration_connections_seedlist_hover: "Angiv, om IBM Connections skal søge vha. crawling af fællesskabsbibliotekerne i dette opbevaringssted for at oprette et søgeindeks. At oprette et indeks kan påvirke opbevaringsstedets ydeevne.<br><br>Hvis Social Collaboration Search Indexing Extensions er installeret på opbevaringsstedet, er denne funktion aktiveret som standard. Hvis Social Collaboration Search Indexing Extensions ikke er installeret på opbevaringsstedet, installeres tilføjelsesprogrammet, når du aktiverer denne funktion.",
		admin_collaboration_activity_stream: "Konfiguration af aktivitetsstrøm for hændelse",
		admin_collaboration_activity_stream_label: "Overfør oplysninger om hændelser til IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Angiv, om du vil overføre oplysninger om hændelser, f.eks. oprettelse af dokumenter, udtjekninger, indtjekninger, kommentarer, tags og delinger, til IBM Connections.<br><br><b>Vigtigt:</b> Brug af denne funktion kan påvirke opbevaringsstedets ydeevne.",

		admin_collaboration_activity_stream_instruction: "Du kan konfigurere opbevaringsstedet til at overføre oplysninger om hændelser, f.eks. kommentarer og dokumentgodkendelser, til IBM Connections. Hændelser vises på siden <b>Seneste opdateringer</b> i IBM Connections-fællesskaber. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorér oplysninger om hændelser for bestemte brugere og grupper:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Du kan ignorere hændelser, der genereres af bestemte brugere eller grupper, f.eks. administratorer eller systemkonti, for at reducere antallet af beskeder, som brugerne får vist. Hvis du f.eks. er ved at overføre indhold, kan du angive, at de hændelser, som genereres af den konto, der bruges til overførslen, ignoreres.",
		admin_collaboration_activity_stream_userid: "IBM Connections-brugernavn:",
		admin_collaboration_activity_stream_userid_hover: "Angiv den systemkonto, som Content Platform Engine skal bruge til at validere og sende hændelsesoplysninger til IBM Connections. Brugeren skal være tildelt rollen <b>trustedExternalApplication</b> i Widget Container-applikationen i IBM Connections.<br><br><b>Tip:</b> Som standard har IBM Connections-administratoren de relevante privilegier. Du kan bruge administrator-id'en som brugernavn",
		admin_collaboration_activity_stream_password: "IBM Connections-brugeradgangskode",

		admin_help_url: "URL til slutbrugerhjælp:",
		admin_help_url_hover: "<b>Vigtigt:</b> IBM Knowledge Center Customer Installed opdateres ikke fra og med IBM Content Navigator Version 3.0.0. Kontakt kundeservice for at få flere oplysninger om brug af tilpasset hjælp.<br><br>Fra og med IBM Content Navigator Version 3.0.0 henviser URL'en til brugerhjælp til IBM Knowledge Center. URL'en til IBM Knowledge Center er: http://www.ibm.com/support/knowledgecenter.<br><br>Hvis du vil fortsætte med at bruge en tidligere version af IBM Knowledge Center Customer Installed, skal du angive URL'en til den forekomst af IBM Knowledge Center Customer Installed, der er distribueret af konfigurations- og distributionsværktøjet til IBM Content Navigator. Klientmaskiner skal have adgang til URL'en. URL'en har formatet http://server_navn:port_nummer/kc.<br><br>Du finder servernavnet og portnummeret i filen console.log i underbiblioteket KnowledgeCenter/logs til IBM Content Navigator-installationsbiblioteket.",

		admin_help_default: "Brug standardhjælpen, som leveres af IBM",
		admin_custom_help: "Brug et tilpasset hjælpesystem",
		admin_help_kc: "Brug tilpasset hjælp i kundeinstalleret IBM Knowledge Center",
		admin_help_kc_hover: "<b>Vigtigt:</b> IBM Knowledge Center Customer Installed opdateres ikke fra og med IBM Content Navigator Version 3.0.0. Kontakt kundeservice for at få flere oplysninger om brug af tilpasset hjælp.<br><br>Hvis du vil fortsætte med at bruge en tidligere version af IBM Knowledge Center Customer Installed, skal du vælge dette punkt for fortsat at tilføje indhold til den forekomst af IBM Knowledge Center Customer Installed, du tidligere har distribueret.",
		admin_help_taxonomy: "Taksonomikode:",
		admin_help_taxonomy_hover: "Angiv taksonomikoden til den tilpassede hjælp.<br><br>Taksonomikoden for IBM Content Navigator er SSEUEX. Hvis du vil vise din hjælp under et andet produktnavn i det kundeinstallerede IBM Knowledge Center, skal du tilføje en entydig taksonomikode til filen KC_taxonomy.ditamap i KnowledgeCenter/usr/taxonomy-biblioteket til IBM Content Navigator-installationsbiblioteket.",
		admin_help_context: "Hjælpekontekst:",
		admin_help_context_hover: "Angiv konteksten til din tilpassede hjælp.<br><br>Hjælpen til IBM Content Navigator er placeret i KnowledgeCenter/usr/content/com.ibm.usingeuc.doc-biblioteket til IBM Content Navigator-installationsbibliotek. Konteksten til standardhjælpen er com.ibm.usingeuc.doc. Hvis du vil stille tilpasset hjælp til rådighed, skal du tilføje indholdet til et nyt underbibliotek i KnowledgeCenter/usr/content/-biblioteket.",
		admin_help_welcome: "Landingsside:",
		admin_help_welcome_hover: "Angiv navnet på det emne, du vil benytte som landingsside, når brugere åbner hjælpen. Du skal oprette en egenskabsfil, der angiver placeringen af landingssiden og tilføje egenskabsfilen til KnowledgeCenter/usr/conf-biblioteket til IBM Content Navigator-installationsbibliotek.",

		admin_settings_mimetype_extensions_jsonfile: "JSON-fil til MIME-typeudvidelser:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verificér JSON-filnavnet og den fuldstændige sti til filen. Filen kan være en generel fil fra filsystemet eller en URL, der peger på JSON-filen. <br><br>Indholdet af JSON-filen er et array til MIME-typedefinitioner. <br><br>En MIME-typedefinition indeholder fire nøgler \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". De første to nøgler, \"mimeTypes\" og \"extensions\", er påkrævede, og de kan være streng-arrays, der er adskilt af \",\". De sidste to nøgler, \"fileType\" og \"iconName\", valgfri. <br><br>Eksempel: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Task Manager-konfiguration",
		admin_taskmanager_service: "Task Manager-serviceprogram:",
		admin_taskmanager_service_hover: "Angiv, om du vil bruge Task Manager-serviceprogrammet til at oprette og udføre asynkrone opgaver. <br><br>Hvis du ændrer denne indstilling, skal du starte IBM Content Navigator-webapplikationen igen, så ændringerne kan træde i kraft.",
		admin_taskmanager_url: "URL til Task Manager-serviceprogram:",
		admin_taskmanager_url_hover: "Angiv den URL, som andre applikationer skal bruge til at kommunikere med Task Manager-serviceprogrammet. URL'en har formatet http://server_navn:port_nummer/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Task Manager-logbibliotek:",
		admin_taskmanager_logdirectory_hover: "Som standard skrives Task Manager-serviceprogrammets logfiler til det samme bibliotek som webapplikationsserverens logfiler. <br><br>Hvis du ønsker, at logningsoplysningerne skal skrives til et andet bibliotek på IBM Content Navigator-serveren, skal du angive den fuldstændige sti til det bibliotek, hvor du vil gemme de logfiler, der genereres af Task Manager-komponenten. <br><br>Hvis du ændrer denne indstilling, skal du starte IBM Content Navigator-webapplikationen igen, så ændringerne kan træde i kraft.",
		admin_taskmanager_heartBeatMonitor: "Overvågning af klyngeimpulser",
		admin_taskmanager_heartBeatMonitor_hover: "Kun højt tilgængelige klyngemiljøer. Hvis du aktiverer denne indstilling, omdirigerer Task Manager-serviceprogrammet opgaver fra de noder, der aktuelt er nede, til de noder, der aktuelt er i gang. <br><br>Hvis du ændrer denne indstilling, skal du starte IBM Content Navigator-webapplikationen igen, så ændringerne kan træde i kraft.",

		admin_syncserver_title: "Konfiguration af Sync Server",
		admin_syncserver_enable: "Sync Services:",
		admin_syncserver_enable_hover: "Angiv, om de brugere, som får adgang til denne arbejdsplads, skal kunne synkronisere deres elementer på tværs af arbejdsstationer og mobile enheder.<br><br><b>Vigtigt:</b> For at kunne benytte denne funktion skal du også udføre følgende opgaver:<ul><li>Angiv <b>Offentlig URL for Sync Services</b> i afsnittet <b>Sync Services</b> i administrationsværktøjet.</li><li>Tilføj et opbevaringssted, som Sync Services aktiveres for på denne arbejdsplads.</li></ul>Hvis du deaktiverer denne indstilling, men tilføjer et opbevaringssted, som Sync Services aktiveres for for denne arbejdsplads, ignoreres indstillingen i opbevaringsstedet.",
		admin_mobileqr_enable: "Vis IBM Navigator QR-kode på logonside:",
		admin_mobileqr_enable_hover: "Aktivér denne indstilling, hvis du vil have vist QR-koden for IBM Navigator-mobilapplikationen på logonsiden til webklienten.<br><br>Når brugere scanner QR-koden, får de vist den relevante app-butik til deres enhed, hvor de kan downloade IBM Navigator-mobilapplikationen.",

		admin_streamlineservice_enable: "Redigeringsservice:",
		admin_streamlineservice_enable_hover: "Kun FileNet P8-brugere. Aktivér denne indstilling, hvis brugere af arbejdspladsen let skal kunne tilføje og redigere dokumenter fra indbyggede applikationer på deres arbejdsstationer. <br><br>For at kunne bruge indstillingen skal du også: <ul><li>Aktivere redigeringsservicen på en eller flere opbevaringssteder, der er knyttet til denne arbejdsplads.</li><li>Installere IBM Content Navigator Edit-klienten på brugerarbejdsstationer</li></ul>",

		admin_repository_general_instructions: "Du skal oprette forbindelse til opbevaringsstedet, før du konfigurerer parametre, systemegenskaber, foldere og så videre.",
		admin_repository_system_instructions: "Angiv, hvilke systemegenskaber der skal vises for dokumenterne og folderne på dette opbevaringssted.",

		admin_desktop_general_create_instructions: "En arbejdsplads bestemmer, hvad brugerne kan se og gøre, når de logger på webklienten. Når du har oprettet en arbejdsplads, kan du sende arbejdspladsens URL til brugerne, så de kan få adgang til arbejdspladsen.",
		admin_desktop_admin_instructions: "Administrationsarbejdspladsen leveres sammen med webklienten for at sætte administrative brugere i stand til at konfigurere webklienten. Arbejdspladsen har adgang til alle de opbevaringssteder, der er konfigureret for webklienten.",
		admin_desktop_repositories_instructions: "Angiv de opbevaringssteder, som brugere skal have adgang til fra arbejdspladsen. Du skal konfigurere opbevaringsstederne, før du kan tilføje dem til arbejdspladsen.<br><br><b>Tip:</b> Du kan begrænse, hvilke opbevaringssteder der er tilgængelige for hver funktion, når du konfigurerer arbejdspladsens layout.",
		admin_desktop_menus_instructions: "Angiv menuer, som brugere skal have adgang til fra arbejdspladsen. Menuerne angiver, hvilke handlinger der er tilgængelige afhængigt af, hvad der er valgt i grænsefladen.<br><br><b>Tip:</b> Du kan tilpasse indholdet af menuerne i afsnittet <b>Menuer</b> i administrationsværktøjet, eller du kan oprette nye menutyper ved at oprette plugins.",

		admin_desktop_no_repositories: "Ingen opbevaringssteder er konfigureret.",

		admin_desktop_id_hover: "Arbejdsplads-id'en er inkluderet i webklientens URL og angiver, hvilken arbejdsplads der åbnes, når en bruger logger på webklienten. Id'en skal være entydig, og du kan ikke ændre den, når du har gemt arbejdspladsen.<br><br>Id'en må kun indeholde alfanumeriske tegn, og der skelnes mellem store og små bogstaver.",
		admin_desktop_id_disabled_hover: "Arbejdsplads-id'en kan ikke ændres. Hvis du vil bruge en anden id, skal du oprette en ny arbejdsplads.",
		admin_desktop_name_hover: "Navnet på arbejdspladsen må ikke indeholde følgende tegn: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Konfigurationen kan kun indeholde én standardarbejdsplads.",

		admin_repository_id_disabled_hover: "Opbevaringsstedets id kan ikke ændres. Hvis du vil bruge en anden id, skal du oprette et nyt opbevaringssted.",
		admin_printService_enable: "Udskriv ved hjælp af udskrivningsservicen IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Hvis du vælger at aktivere udskrivningsservicen IBM Daeja ViewONE, bliver dokumenter konverteret til PDF-format, og udskrivningen kan udføres ved hjælp af en webbrowser.<br><br>Hvis du vælger at deaktivere udskrivningsservicen IBM Daeja ViewONE, kan du kun udskrive dokumenter i webbrowsere, der understøtter Java-miniprogrammer. Visse webbrowsere understøtter ikke Java-miniprogrammer, og de understøtter derfor ikke udskrivning via disse.<br><br>Der er oplysninger om understøttede browsere i dokumentationen.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Brugers hjemmebibliotek",
		admin_file_tracking_doc_directory_my_documents: "Brugers dokumentbibliotek",
		admin_file_tracking_doc_directory_qp: "Fuldstændig sti",
		admin_file_tracking_section_tile: "Konfiguration af filsporing",
		admin_file_tracking_home_path: "Hjemmesti",
		admin_file_tracking_my_documents: "Mine dokumenter",
		admin_file_tracking_exact_path: "Fuldstændig sti:",
		admin_file_tracking_qp: "Fuldstændig sti",
		admin_file_tracking_ev: "Systemvariabel",
		admin_file_tracking_ev_us: "Tilpasset systemvariabel ",
		admin_file_tracking_del_local_copy: "Slet lokal kopi:",
		admin_file_tracking_yes: "Ja",
		admin_file_tracking_no: "Nej",
		admin_file_tracking_del_local_copy_rt_state_editable: "Tillad brugere at tilsidesætte denne indstilling",
		admin_file_tracking_del_local_copy_rt_state1: "Ja",
		admin_file_tracking_del_local_copy_rt_state2: "Nej",
		admin_file_Tracking_label: "Filsporing:",
		admin_file_Tracking_disable: "Deaktivér",
		admin_file_Tracking_enable: "Aktivér",
		admin_file_tracking_label_hover_help: "Filsporing bruger et miniprogram til at tjekke dokumenter ud og downloade dokumenter til et bestemt bibliotek på brugernes maskiner. Miniprogrammet sætter også IBM Content Navigator i stand til at finde dokumenter på brugernes maskiner, når de tjekker dokumenter ind.",
		admin_file_tracking_doc_directory: "Lagerplacering:",
		admin_file_tracking_open_file: "Åbn fil automatisk",
		admin_file_Tracking_append_qualified_path: "Tilføj bibliotek",
		admin_file_Tracking_append_qualified_path_hover_help: "Du kan tilføje et bibliotek i slutningen af systemvariablen, hvis du vil have, at dokumenter skal gemmes i et bestemt underbibliotek. <br/><br/>Du kan f.eks. angive, at dokumenter skal downloades til et <i>VirksomhedsDokumenter</i>-bibliotek, som ligger i brugerhjemmebiblioteket.",
		admin_file_Tracking_append_ev: "Tilføj systemvariabel",
		admin_file_Tracking_append_ev_hover_help: "Du kan tilføje en systemvariabel, hvis du vil have, at dokumenter skal gemmes i et dynamisk angivet bibliotek, f.eks. et brugerbibliotek.<br/><br/>Du kan f.eks. angive, at dokumenter skal gemmes i et <i>bruger_navn</i>-underbibliotek i et delt netværksunderbibliotek. ",
		admin_file_tracking_doc_directory_hover_help: "Angiv, hvor dokumenter skal gemmes, når de tjekkes ud og downloades.<br/><br/> <b>Tip</b>: Hvis du vil gemme dokumenter i en brugers hjemmebibliotek eller i standarddokumentbiblioteket, skal du vælge <b>Miljøvariabler</b>, som medtager foruddefinerede variabler, der peger på de placeringer.",
		admin_file_tracking_qualified_path_hover_help: "Brug den relevante biblioteksstruktur for dit Windows- eller Mac-styresystem til at angive det bibliotek eller netværksbibliotek, du vil gemme dokumenter i. <ul><li>I Windows skal du medtage drevbogstav i stien, f.eks. C:\\Virksomhedsdokumenter.</li><li>I et delt netværksbibliotek skal du angive stien i formatet: \\\\servernavn\\bibliotek</li></ul><br/><b>Vigtigt:</b> For at benytte denne indstilling skal den biblioteksstruktur, som du angiver, kunne oprettes på alle klientarbejdsstationerne i dit systemmiljø.",
		admin_file_tracking_environment_variable_path_hover_help: "Brug de relevante systemvariabler for dit Windows- eller Mac-styresystem til at angive det bibliotek eller netværksbibliotek, du vil gemme dokumenter i. <br/><br/>Indstillingen <b>Brugers hjemmebibliotek</b> gemmer dokumenter i følgende bibliotek:<br/><ul><li>Windows: C:\\Brugere\\Brugernavn</li><li>Mac: /Brugere/Brugernavn</li></ul><br/>Indstillingen <b>Brugers dokumentbibliotek</b> gemmer dokumenter i følgende bibliotek:<br/><ul><li>Windows: C:\\Brugere\\Brugernavn\\Dokumenter</li><li>Mac: /Brugere/Brugernavn/Dokumenter</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Angiv, om den lokale kopi af et dokument skal slettes, når brugere tilføjer eller tjekker dokumenter ind i opbevaringsstedet.<br/><br/>Hvis den lokale kopi slettes, sættes du i stand til at:<br/><ul><li>Gennemtvinge overholdelse af IT-politikker</li><li>Sikre, at brugere arbejder på den seneste version af dokumenter</li></ul><br/><b>Begrænsning:</b> Denne indstilling benyttes ikke, når brugere tilføjer dokumenter ved at trække og placere dem.<br/><br/>For IBM Content Navigator for Microsoft Office: Du skal vælge <b>Slet lokale filer, når brugere tilføjer eller tjekker et dokument ind eller annullerer udtjekning af et dokument</b> i afsnittet <b>Office-konfiguration</b> for arbejdspladsen.",
		admin_file_tracking_open_file_hover_help: "Denne indstilling tilsidesætter alle indstillinger for dokumenthåndtering, der er konfigureret i brugernes webbrowsere. </br></br><b>Begrænsning:</b> Denne indstilling benyttes ikke af IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Overskriv lokal kopi:",
		admin_file_tracking_over_write_file_hover_help: "Angiv, om den lokale kopi af et dokument skal overskrives, når brugere tjekker dokumenter ud fra opbevaringsstedet. <br/><br/>Hvis den lokale kopi overskrives, sættes du i stand til at:<br/><ul><li>Sikre, at brugere arbejder på den seneste version af dokumenter</li><li>Forhindre brugere i at få vist en prompt, når der findes en lokal kopi</li></ul> </br></br><b>Begrænsning:</b> Denne indstilling benyttes ikke af IBM Content Navigator for Microsoft Office, hvis du vælger <b>Tillad brugere at tilsidesætte denne indstilling</b>.",
		admin_file_tracking_over_write_file_state_editable: "Tillad brugere at tilsidesætte denne indstilling",
		admin_file_tracking_inline_help: "Filsporing strømliner den proces, der består i at tjekke dokumenter ud af og ind i opbevaringsstedet. Det sætter dig også i stand til at styre, hvordan dokumenter gemmes på brugernes maskiner. <br/><br/>Desuden gør filsporing det muligt at spore dokumenter på flere IBM Content Navigator-komponenter, f.eks. webklienten og IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Du skal aktivere standard- eller servervalidering, før du opretter forbindelse til opbevaringsstedet.",
		admin_box_use_oauth: "Valideringstype:",
		admin_box_use_oauth_hover: "Vælg standard- eller servervalidering i et produktionsmiljø, når du tildeler adgang til Box-dokumenter fra IBM Content Navigator. Angiv de værdier for client_id og Auth2 client_secret, der er knyttet til denne distribution af IBM Content Navigator. Du kan hente værdierne fra Box, når du har oprettet Box-applikationen til din IBM Content Navigator-server.<br/><br/>Vælg Udviklervalidering i et udviklingsmiljø. Udviklere kan logge på Box ved hjælp af deres udviklerkonto og oprette et udvikler-token, der er gyldigt i 60 minutter. Med et udvikler-token kan udviklere logge på Box ved at bruge udvikler-tokenet som kodeord til en vilkårlig bruger-id.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdomæne til Box-virksomhedsdomæne:",
		admin_box_share: "Forbindelses-id til Task Manager",
		admin_box_share_hover: "Til Box-kopiering eller Box-deling anvender Task Manager en administratorbruger-id og et administratorkodeord til at udføre opgaver, som ændrer opbevaringsstedet.<br/><br/>Klik på Angiv, og log på Box med en gyldig Box-administratorkonto.<br/><br/>Hvis du konfigurerer en arbejdsplads ved at vælge dette Box-opbevaringssted som opbevaringssted til delte filer, skal du angive en Box-administratorbruger, der har ubegrænset lager i Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Åbn fil automatisk",
		file_tracking_runtime_overwrite_hover_help: "Hvis du ikke vælger denne indstilling og har et dokument på dit lokale filsystem med samme navn, tjekkes dokumentet ud, men det downloades kun, hvis du gør et af følgende:<br/><ul><li> Download dokumentet til et underbibliotek i standardbiblioteket. Hvis du vælger et underbibliotek, kan placeringen af dokumentet spores af webapplikationen.</li><li>Omdøber det dokument, du er ved at downloade. Omdøbning af dokumentet forhindrer en filnavnekonflikt.</li></ul>",
		open_file: "Åbn fil automatisk",
		over_write_file: "Overskriv lokal kopi",
		checkout_and_download_file: "Tjek dokumenter ud og download",
		download_to_local_directory: "Download til :",
		checkout_and_download_button_title: "Tjek ud og download",
		checkout_without_java_confirmation_dialog: "Filen kan ikke downloades og spores af filsporingsfunktionen.",
		browse_for_directory: "Gennemse",
		selected_documents: "Valgte dokumenter",

		checkout_without_java_confirmation_text: "Denne fejl kan opstå, hvis:<br/><ul><li>JRE (Java Runtime Environment) ikke er installeret på arbejdsstationen.</li><li>Java-pluginen ikke er aktiveret i webbrowseren.</li><li>Webbrowseren understøtter ikke Java.</li></ul><br/><br/>Udfør den relevante handling for at løse problemet:<br/><br/><ul><li>Klik på OK, hvis du vil fortsætte med at downloade filen, uden at filsporing er aktiveret.</li><li>Hvis du vil downloade filen med filsporing aktiveret, skal du annullere downloadningen og kontrollere, om JRE er installeret på arbejdsstationen, og om Java-pluginen er aktiveret i din webbrowser.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokumentet er tjekket ud og downloadet, men dokumentet kan ikke åbnes.",
		runtime_file_tracking_open_error_explanation: "Det styresystem, som er installeret på arbejdsstationen, understøtter ikke denne type filer.",
		runtime_file_tracking_open_error_userResponse: "Udfør en af følgende handlinger for at løse problemet:<br/><br/><ul><li>Hvis du har brug for at arbejde med dokumentet, skal du åbne webklienten fra en anden arbejdsstation med et andet styresystem.</li><li>Hvis du kun har brug for at få vist dokument, kan du højreklikke på dokumentet i webklienten og klikke på Åbn.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokumentet er tjekket ud, men ikke downloadet.",
		runtime_file_tracking_save_file_error_explanation: "Et dokument med samme navn findes i det lokale filsystem, men det er ikke overskrevet. ",
		runtime_file_tracking_save_file_error_userResponse: "Hvis du vil downloade filen fra opbevaringsstedet, skal du overskrive den lokale kopi af dokumentet, når du downloader dokumentet fra opbevaringsstedet.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokumentet er tjekket ud, men det kan hverken downloades eller åbnes.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Et dokument med samme navn findes i det lokale filsystem. Men filen er ikke blevet overskrevet, hvilket forhindrer dokumentet i opbevaringsstedet i at blive downloadet og åbnet.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Hvis du vil downloade filen fra opbevaringsstedet, skal du overskrive den lokale kopi af dokumentet, når du downloader dokumentet fra opbevaringsstedet.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokumentet kan ikke downloades.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Systemvariablen ${0}, som kræves ved filsporing, er ikke defineret på denne klientmaskine.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "For at løse problemet:<br/><br/><ul><li>Tilføj systemvariablen ${0} til styresystemets systemvariabler.</li><li>Log af webklienten, og luk webbrowseren. Log derefter på igen.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Dokumentet kan ikke downloades og spores af filsporingsminiprogrammet. ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Biblioteket ${0}, som kræves ved filsporing, er ikke defineret og kan ikke oprettes.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Udfør den relevante handling for at løse problemet:<br/><br/><ul><li>Klik på Gennemse, og vælg et andet bibliotek på klientmaskinen. Hvis du vælger denne løsning, spores filen ikke.</li><li>Kontakt systemadministratoren og bed om at få angivet et andet bibliotek til brug for sporing af filer. Det kan f.eks. være nødvendigt, hvis det angivne bibliotek er beregnet til et Windows-styresystem, og du benytter Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Hvis der er adgang til denne arbejdsplads fra andre enheder, der benytter andre styresystemer, kan du reducere risikoen for problemer ved at gøre et af følgende:<br/><br/><ul><li>Bruge systemvariabler til at angive lagerplaceringen på klientmaskiner.</li><li>Oprette forskellige arbejdspladser for brugere med hver deres type enhed. Oprette f.eks. én arbejdsplads for brugere med et Windows-styresystem og én for brugere af Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Anmodningen kan ikke behandles.",
		runtime_file_tracking_generic_error_explanation: "Der er opstået en fejl i filsporingsminiprogrammet.",
		runtime_file_tracking_generic_error_userResponse: "Kontakt systemadministratoren for at få hjælp.",
		runtime_file_tracking_generic_error_adminResponse: "Åbn Java-konsollen, og prøv at sende anmodningen igen. Oplysninger om fejlen vises på Java-konsollen.<br/><br/>Du har adgang til Java-konsollen fra kontrolpanelet (Windows) eller systemindstillinger (Mac) i dit styresystem.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Anmodningen kan ikke behandles",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Følgende filer er tilføjet til opbevaringsstedet, men er ikke slettet fra dit lokale filsystem: ${0}. Dette forekommer normalt, hvis filerne er åbne eller bruges af en anden applikation. Hvis det er nødvendigt, kan du slette filerne manuelt.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokumentet kan ikke downloades.",
		runtime_file_tracking_ioexception_error_explanation: "Dokumentet kan ikke downloades.",
		runtime_file_tracking_ioexception_userResponse: "Du har muligvis ikke de nødvendige tilladelser til at skrive til følgende bibliotek: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Kontrollér, at du har skrivetilladelse til det angivne bibliotek. Kontakt systemadministratoren, hvis du ikke har skrivetilladelse til det angivne bibliotek.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Anmodningen kan ikke behandles.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Denne fejl kan opstå af følgende årsager:<br/><br/><ul><li>Du anvender Safari på Mac OS, og Java kører i sikkerhedstilstand.</li><li>Du har ikke læse-/skriveadgang til det bibliotek, der er angivet i konfigurationen for filsporing til din arbejdsplads.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Du kan fortsat benytte IBM Content Navigator uden filsporing, eller du kan udføre følgende trin for at løse problemet:<br/><br/><ol><li>Aktivér usikker Java-tilstand i Safari.</li><li>Hvis du bliver bedt om at angive, om du stoler på IBM Content Navigator-webstedet, skal du klikke på <b>Betroet</b> for at indlæse side og derefter aktivere usikker Java-tilstand i Safari.</li></ol><br/><br/>Hvis Safari er konfigureret korrekt, skal du udføre følgende trin for at løse problemet:<br/><br/><ol><li>Du skal have læse-/skriveadgang til det bibliotek, der er angivet i konfigurationen for filsporing til din arbejdsplads.</li><li>Hvis du ikke har læse-/skrivetilladelse til biblioteket, skal du ændre tilladelserne til biblioteket.</li><li>Hvis du ikke kan ændre tilladelserne til biblioteket, skal din administrator ændre det bibliotek, der er konfigureret til filsporing eller give dig adgang til en arbejdsplads, hvor der er konfigureret et andet bibliotek til filsporing.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Anmodningen kan ikke behandles.",
		runtime_file_tracking_java__notfound_error_explanation: "Dette problem opstår normalt i følgende situationer:<br/><br/><ul><li>JRE (Java Runtime Environment) findes ikke eller er ikke aktiveret på arbejdsstationen.</li><li>JRE-versionen på din arbejdsstation er ikke kompatibel med IBM Content Navigator-versionen.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Du kan fortsat benytte IBM Content Navigator uden filsporing, eller du kan udføre følgende trin for at løse problemet med JRE:<br/><br/><ol><li>Kontrollér, at JRE er installeret på din arbejdsstation.</li><li>Kontrollér, at JRE-versionen på din arbejdsstation er kompatibel med IBM Content Navigator. Der er en liste over understøttede versioner i dokumentet <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> på webstedet IBM Software Support.</li><li>Kontrollér, at JRE er aktiveret på din arbejdsstation.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Anmodningen kan ikke behandles.",
		runtime_file_tracking_security_error_explanation: "Du har ikke læse-/skriveadgang til det bibliotek, der er angivet i konfigurationen for filsporing til din arbejdsplads.",
		runtime_file_tracking_security_error_userResponse: "Du kan fortsat benytte IBM Content Navigator uden filsporing, eller du kan kontakte systemadministratoren for at udføre følgende trin:<ol><li>Du skal have læse-/skriveadgang til det bibliotek, der er angivet i konfigurationen for filsporing til din arbejdsplads. </li><li>Hvis du ikke har læse-/skrivetilladelse til biblioteket, skal du ændre tilladelserne til biblioteket.</li><li>Hvis du ikke kan ændre tilladelserne til biblioteket, skal din administrator ændre det bibliotek, der er konfigureret til filsporing eller give dig adgang til en arbejdsplads, hvor der er konfigureret et andet bibliotek til filsporing.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Følgende dokumenter er downloadet: ${0}.",

		admin_file_tracking_inline_help: "Filsporing strømliner den proces, der består i tilføjelse af dokumenter til opbevaringsstedet samt ind- og udtjekning af dokumenter. Det sætter dig også i stand til at styre, hvordan dokumenter gemmes på brugernes maskiner.<br/><br/>Desuden gør filsporing det muligt at spore dokumenter på flere IBM Content Navigator-komponenter, f.eks. webklienten og IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Menu-id'en må ikke begynde med \"Default\". \"Default\" er et reserveret præfiks for menu-id'er.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Id'en må kun indeholde alfanumeriske tegn, og der skelnes mellem store og små bogstaver.",
		admin_repository_id_hover: "Opbevaringssted-id inkluderes i webklient-URL'er, foretrukne og e-mail-link for at angive, hvilket opbevaringssted der skal logges på. Id'en skal være entydig, og du kan ikke ændre den, efter at du har gemt opbevaringsstedet.<br><br>Id'en må kun indeholde alfanumeriske tegn, og der skelnes mellem store og små bogstaver.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Navnet må ikke indeholde følgende tegn: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Arbejdsplads-id'en må ikke indeholde mellemrum og følgende tegn: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Arbejdspladsens navn må ikke indeholde følgende tegn: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Fremvisningsnavnet må ikke indeholde følgende tegn: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Angiv det navn på opbevaringsstedet, der skal vises for brugerne i webklienten.<br><br>Navnet må ikke indeholde følgende tegn: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Angiv værtsnavnet eller IP-adressen for den Content Manager OnDemand-server, du vil oprette forbindelse til, f.eks. server.id.com.",
		admin_server_p8_name_hover: "Angiv URL'en for Content Engine- eller Content Platform Engine-serveren. Der skelnes mellem store og små bogstaver for URL'en, som har følgende format:<br><br><ul><li>På WebSphere Application Server: iiop://værts_navn:portnummer/FileNet/Engine. På basisdistributioner er standardportnummeret 2809.</li><li>På WebLogic Server: t3://værts_navn:port_nummer/FileNet/Engine. Standardportnummeret er 7001.</li></ul><br><br>I forbindelse med Content Engine- og Content Platform Engine-konfigurationer med høj tilgængelighed skal du bruge EJB-transport-URL'en med høj tilgængelighed uden præfikset cemp:. ",
		admin_server_p8_protocol_hover: "Angiv protokol, der skal bruges til at kommunikere med Content Engine.",
		admin_server_cm_name_hover: "Angiv det lokale katalognavn på Content Manager-databasen eller navnet på biblioteksserverforbindelsen. Navnet er den værdi, der er angivet for variablen ICMSERVER.",
		admin_repository_cmis_hover: "Angiv id'en for det opbevaringssted, som du vil oprette forbindelse til. Id'en for hvert opbevaringssted i CMIS-miljøet er angivet i dokumentet om AtomPub-bindingsfunktionen. <br/><br/><b>Tip:</b> Du kan også angive en stjerne (*) for at oprette forbindelse til det første eller eneste opbevaringssted, der er defineret i dokumentet om Atompub-bindingsfunktionen.",
		admin_url_cmis_hover: "Formatet på URL'en afhænger af serviceudbyderen. Se i CMIS-dokumentationen eller kontakt CMIS-serveradministratoren for at få oplyst URL'en.",
		admin_repcfg_cmis_status_columns_hover: "Angiv de elementtilstande, du vil have vist ikoner for. Tilstandsikoner vises ved siden af dokumenter i indholdslisten.",
		admin_port_hover: "Angiv det TCP/IP-portnummer, som Content Manager OnDemand-serveren lytter på. Standardværdien er 1445.",
		admin_unified_searches_hover: "Angiv, om brugerne skal kunne gemme søgninger på tværs af opbevaringssteder på dette opbevaringssted.<br/><br/>Selv om du ikke aktiverer denne indstilling, kan brugerne stadig oprette søgninger på tværs af opbevaringssteder, der kører mod dette opbevaringssted. Du kan forhindre brugere i at oprette søgninger på tværs af opbevaringssteder på arbejdspladsniveau.<br/><br/>Hvis du aktiverer søgninger på tværs af opbevaringssteder, opretter IBM Content Navigator datamodellen for søgninger på tværs af opbevaringssteder på opbevaringsstedet.<br/><br/>I forbindelse med IBM FileNet Content Manager skal du oprette forbindelse til opbevaringsstedet som Content Engine-administrator, før du aktiverer denne indstilling.",
		admin_unified_searches_cm_hover: "Angiv, om brugerne skal kunne gemme søgninger på tværs af opbevaringssteder på dette opbevaringssted.<br/><br/>Selv om du ikke aktiverer denne indstilling, kan brugerne stadig oprette søgninger på tværs af opbevaringssteder, der kører mod dette opbevaringssted. Du kan forhindre brugere i at oprette søgninger på tværs af opbevaringssteder på arbejdspladsniveau.<br/><br/>Hvis du aktiverer søgninger på tværs af opbevaringssteder, opretter IBM Content Navigator datamodellen for søgninger på tværs af opbevaringssteder på opbevaringsstedet.",
		admin_max_results_hover: "Angiv, om antallet af resultater, der bliver returneret af en søgning, skal begrænses. Hvis du ikke begrænser antallet af søgeresultater, kan der opstå problemer med ydeevnen, hvis en søgning returnerer mange resultater.",
		admin_timeout_hover: "Angiv i sekunder, hvor længe en søgning kan være i gang på opbevaringsstedet. Hvis søgningen ikke gennemføres inden for den angivne tid, annullerer webklienten anmodningen. Den anbefalede maksimumsværdi for timeout er 60 sekunder.",
		admin_object_store_hover: "Angiv det objektlager, du vil oprette forbindelse til, på Content Engine-serveren. Du kan få oplyst det symbolske navn fra Content Platform Engine-administrationskonsollen.",
		admin_object_store_display_name_hover: "Objektlagerets fremvisningsnavn kræves, hvis du vil benytte IBM FileNet P8-arbejdsgange. Du kan få oplyst objektlagerets fremvisningsnavn fra Content Platform Engine-administrationskonsollen.",
		admin_all_searches_hover: "Angiv, om antallet af søgninger, der vises under <b>Alle søgninger</b>, skal begrænses, når brugerne søger på opbevaringsstedet. Hvis du ikke begrænser antallet, kan der opstå problemer med ydeevnen, hvis opbevaringsstedet indeholder et stort antal gemte søgninger.",

		admin_text_desktop: "Arbejdsplads",
		admin_text_repository: "Opbevaringssted",
		admin_text_plugin: "Plugin",
		admin_text_theme: "Tema",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Redigeringsårsag",
		admin_text_redactions: "Redigeringer",
		admin_text_viewer_mapping: "Fremvisertilknytning",
		admin_text_mobile_feature: "Mobil funktion",
		admin_test_interface_text: "Grænsefladetekst",
		admin_text_interface_text_locale: "Lokaliseret grænsefladetekst",
		admin_text_icon_status: "Statusikon",
		admin_text_icon: "Ikon",
		admin_text_file_type: "Filtype",
		admin_text_viewer: "Fremviser",
		admin_text_desktop_access: "Arbejdspladsadgang",
		admin_text_mapped_properties_for_office: "Tilknyttede egenskaber for Microsoft Office",
		admin_text_desktop_features: "Arbejdspladsfunktioner",
		admin_text_unknown: "Ukendt",
		admin_folder_instruction: "Angiv de egenskaber, der skal vises for dokumenter og foldere i indholdslisten, når brugerne anvender Gennemse. Du kan også angive, hvilken rækkefølge egenskaberne skal vises i.",
		admin_search_instruction: "Angiv, hvilke funktioner der som standard skal vælges, når en bruger opretter en søgning.",
		admin_repository_office_conf_class_instruction: "Hvis IBM Content Navigator for Microsoft Office er installeret på klientmaskinerne i dit systemmiljø, kan du angive, hvordan dokumenter skal håndteres, når de tilføjes eller tjekkes ind i dette opbevaringssted.",
		admin_repository_office_conf_instruction: "Tilknyt Microsoft Office-dokumentegenskaberne til de egenskaber, der er defineret på opbevaringsstedet.<br/><br/>Når egenskabstilknytning er aktiveret for en arbejdsplads, som dette opbevaringssted er knyttet til, indsættes egenskaberne fra Microsoft Office-dokumenterne i egenskaberne på opbevaringsstedet, når brugeren tilføjer et dokument fra IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Egenskabstilknytning",
		admin_repository_office_conf_prop_mapping_title1: "MS Office-integration",
		admin_office_conf_instruction: "Du kan styre, hvordan IBM Content Navigator skal integreres med Microsoft Office-applikationer, når IBM Content Navigator for Microsoft Office er installeret på klientmaskiner.<br /><br /><b>Vigtigt:</b> Hvis du vælger <b>Tilknyt Office-egenskaber...</b>, skal du også konfigurere egenskabstilknytningen for hvert af de opbevaringssteder, som er knyttet til denne arbejdsplads. Du kan konfigurere egenskabstilknytningerne på skillebladet  <b>Egenskaber for Office</b> for hvert opbevaringssted i dit systemmiljø.",
		admin_desktop_workflows_instruction: "<b>Kun IBM FileNet P8-systemer:</b> Angiv, hvilke applikationspladser der vises på denne arbejdsplads. Rækkefølgen af de valgte applikationspladser bestemmer den rækkefølge, de bliver vist i på webklienten.<br><br><b>Tip:</b> Du kan ændre fremvisningsnavnet for applikationspladserne ved at angive nye navne i afsnittet <b>Etiketter</b> i administrationsværktøjet.",
		admin_search_filtered_properties_instruction: "Angiv de egenskaber, som brugere kan søge på. Du kan skjule de egenskaber, du ikke vil have, brugerne skal søge på.",
		admin_search_filtered_operators_instruction: "Angiv de operatorer, der skal være tilgængelige, når brugere søger på en bestemt datatype, f.eks. en dato eller et heltal. Du kan skjule de operatorer, du ikke vil have, brugerne skal vælge.",
		admin_search_default_search_results_instruction: "Angiv de egenskaber, der skal vises for dokumenter og foldere i søgeresultaterne. Du kan skjule de egenskaber, du ikke vil have vist i søgeresultaterne.",
		admin_search_default_search_results_p8_cmis_instruction: "Angiv de egenskaber, der skal vises for dokumenter i søgeresultaterne. Du kan skjule de egenskaber, du ikke vil have vist i resultaterne.",

		admin_datetimeOp: "Dato klokkeslæt",
		admin_floatOp: "Tal med flydende decimaltegn",
		admin_integerOp: "Heltal",
		admin_stringOp: "Streng",
		admin_binaryOp: "Binær",
		admin_objectOp: "Objekt",
		admin_idOp: "Id",
		admin_userOp: "Bruger",
		admin_booleanOp: "Boolesk",

		admin_string: "Streng",
		admin_long: "Lang",
		admin_date: "Dato",
		admin_double: "Dobbelt",
		admin_object: "Objekt",
		admin_guid: "GUID",
		admin_boolean: "Boolesk",

		admin_repcfg_heading: "Du kan tilsidesætte standardadfærden for dette opbevaringssted ved at angive konfigurationsparametre.",
		admin_repcfg_heading_od: "Du kan tilsidesætte standardadfærden for dette opbevaringssted ved at angive konfigurationsparametre.<br /><br /><b>Vigtigt:</b> Hvis du vil bruge webklienten sammen med Content Manager OnDemand, skal du også angive værdier for de parametre, der er inkluderet på skillebladet <b>Content Manager OnDemand</b> under <b>Indstillinger</b>, som gælder for alle Content Manager OnDemand-opbevaringssteder, som du opretter forbindelse til.",
		admin_repcfg_teamspaces: "Administration af teamplads:",
		admin_repcfg_enable: "Aktivér",
		admin_repcfg_disable: "Deaktivér",

		admin_repcfg_deliver_redacted_pdf_files_as: "Redigerede PDF-filer bliver leveret som:",
		admin_repcfg_burn_pdf_to_pdf: "PDF-filer",
		admin_repcfg_burn_pdf_to_tiff: "TIFF-filer",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "En PDF-fil, der er redigeret ved at tilføje rollebaserede redigeringer, kan leveres til klienten i et andet filformat. Når filformatet ændres, ændres filtypen og MIME-typen også.<br><br>Hvis f.eks. en PDF-fil leveres som en TIFF-fil, ændres filtypen til .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Tillad brugere at flette og opdele sider, der har rollebaserede redigeringer",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Vælg denne indstilling for at tillade brugere at flette og opdele sider, der har rollebaserede redigeringer. Brugere, der ikke kan redigere, kan ikke redigere rollebaserede redigeringer, og de får ikke tildelt adgang til følsomme data, der er knyttet til de rollebaserede redigeringer, selv om denne indstilling er aktiveret.",
		admin_repcfg_modify_teamspace_roles: "Tillad ejere at ændre rollerne til eksisterende teampladser",
		admin_repcfg_tm_delete_teamspace: "Sæt ejere i stand til at slette teamplads, også indhold",
		admin_repcfg_tm_delete_teamspace_id_missing: "Du skal angive brugernavnet på en administrator af opbevaringssted.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Du skal angive kodeordet for administratoren af opbevaringsstedet.",
		admin_repcfg_teamspace_display_Recent: "Vis kun nyligt ændrede teampladser ",
		admin_repcfg_teamspace_display_Recent_value: "Dage siden sidste ændring:",

		admin_repcfg_folder_selector: "Rodfolder:",
		admin_repcfg_enable_folder_selector: "Aktivér",
		admin_repcfg_disable_folder_selector: "Deaktivér",
		admin_repcfg_SSO: "Enkelt logon:",
		admin_repcfg_teamspace_template_permission_text: "Tildel oprettere af teampladsskabeloner:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Angiv de grupper eller brugere, som kan oprette teampladsskabeloner. Brugerne og grupperne tildeles de relevante sikkerhedsindstillinger til de nødvendige klasser og foldere. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Læs mere</a><br/><br/><b>Anbefaling:</b> Administration af teamplads forenkles, hvis du benytter grupper.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Angiv de grupper eller brugere, som kan oprette teampladsskabeloner. Brugerne tilføjes til de relevante ACL'er og tildeles de nødvendige privilegier. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Læs mere</a><br/><br/><b>Anbefaling:</b> Administration af teamplads forenkles, hvis du benytter grupper.",
		admin_repcfg_teamspace_permission_text: "Tildel teampladsroller:",
		admin_repcfg_teamspace_permission_hover_p8: "Angiv de grupper eller brugere, som kan oprette og benytte teampladser. Brugerne tildeles de relevante sikkerhedsindstillinger til de nødvendige klasser og foldere. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Læs mere</a><br/><br/><b>Anbefaling:</b> Administration af teamplads forenkles, hvis du benytter grupper.",
		admin_repcfg_teamspace_permission_hover_cm: "Angiv de grupper eller brugere, som kan oprette og benytte teampladser. Brugerne tilføjes til de relevante ACL'er og tildeles de nødvendige privilegier. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Læs mere</a><br/><br/><b>Anbefaling:</b> Administration af teamplads forenkles, hvis du benytter grupper.",
		admin_repcfg_entry_template_permission_text: "Tildel indgangsskabelonroller:",
		admin_repcfg_entry_template_permission_hover_p8: "Angiv de grupper eller brugere, som kan oprette og benytte indgangsskabeloner. Brugerne tildeles de relevante sikkerhedsindstillinger til dokumentklassen Indgangsskabelon. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Læs mere</a><br/><br/><b>Anbefaling:</b> Administration af indgangsskabeloner forenkles, hvis du benytter grupper.",
		admin_repcfg_entry_template_permission_hover_cm: "Angiv de grupper eller brugere, som kan oprette og benytte indgangsskabeloner. Brugerne tilføjes til de relevante ACL'er og tildeles de nødvendige privilegier. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Læs mere</a><br /><br /><b>Anbefaling:</b> Administration af indgangsskabeloner forenkles, hvis du benytter grupper.",
		admin_repcfg_office_template_permission_text: "Tildel skabelonroller:",
		admin_repcfg_office_template_permission_hover_cm: "Angiv de grupper eller brugere, som kan oprette, redigere og benytte skabeloner til Microsoft Office Online eller Edit Service. Brugerne tilføjes til de relevante ACL'er og tildeles de nødvendige privilegier. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a><br /><br /><b>Anbefaling:</b> Administration af skabeloner til Microsoft Office online eller Edit Service forenkles, hvis du benytter grupper.",
		admin_repcfg_draft_permission_text: "Tildel kladderoller:",
		admin_repcfg_draft_permission_hover_cm: "Angiv de grupper eller brugere, som kan oprette kladder af Microsoft Office Online eller Edit Service-dokumenter under samarbejdende redigering. Brugere, der skal redigere dokumenter i fællesskab i Microsoft Office Online eller Edit Service, skal have de relevante rettigheder til at oprette kladder. Brugerne tilføjes til de relevante ACL'er og tildeles de nødvendige privilegier. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a><br /><br /><b>Anbefaling:</b> Administration af kladder forenkles, hvis der benyttes grupper.",
		admin_repcfg_search_permission_text: "Tildel søgeroller:",
		admin_repcfg_search_permission_hover_p8: "Angiv de grupper eller brugere, som kan oprette eller bruge gemte søgninger samt søgninger på tværs af opbevaringssteder. Brugerne tildeles de relevante sikkerhedsindstillinger til de nødvendige klasser. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Læs mere</a><br /><br /><b>Anbefaling:</b> Administration af søgning forenkles, hvis der benyttes grupper.",
		admin_repcfg_search_permission_hover_cm: "Angiv de grupper eller brugere, som kan oprette, redigere eller bruge gemte søgninger samt søgninger på tværs af opbevaringssteder. Brugerne tilføjes til de relevante ACL'er og tildeles de nødvendige privilegier. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Læs mere</a><br /><br /><b>Anbefaling:</b> Administration af søgning forenkles, hvis der benyttes grupper.",
		admin_repcfg_search_permission_title: "Søgeroller",
		admin_repcfg_search_permission_intro_text: "Kontrollér, at brugere har adgang til en arbejdsplads, der understøtter deres rolle. Kontrollér f.eks., at oprettere af søgninger har adgang til en arbejdsplads, der tillader oprettelse af søgninger samt søgninger på tværs af opbevaringssteder.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administratorer af teampladsskabeloner er brugere, som har tilladelsen <b>Fuld kontrol</b> til opbevaringsstedet (objektlager). Du kan ikke ændre listen over administratorer af teampladsskabeloner fra administrationsværktøjet. <p>Administratorer af teampladsskabeloner kan slette og ændre alle teampladsskabeloner. Den bruger, der opretter en teampladsskabelon, behøver ikke at dele den med administratorerne af teampladsskabeloner.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Når du udpeger en bruger eller gruppe som opretter af teampladsskabeloner, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at oprette teampladsskabeloner. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Læs mere</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Brugere og grupper, der er tildelt andre rettigheder end de rettigheder, der er knyttet til administratorer og oprettere.<p>Du kan flytte disse brugere og grupper til rollen som opretter af teampladsskabeloner ved at fjerne dem fra rollen Andre og derefter tildele dem som oprettere af teampladsskabeloner.<p>Du kan gennemse de rettigheder, der i øjeblikket er tildelt til disse brugere og grupper, ved hjælp af IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Teampladsadministratorer er brugere, som har tilladelsen <b>Fuld kontrol</b> til opbevaringsstedet (objektlager). Du kan ikke ændre listen over teampladsadministratorer fra administrationsværktøjet.<p>Teampladsadministratorer kan slette og ændre alle teampladser. Den bruger, der opretter en teampladsskabelon, behøver ikke at dele den med teampladsadministratorerne.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Når du udpeger en bruger eller gruppe som teampladsopretter, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at oprette teampladser. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Læs mere</a>",
		admin_repcfg_teamspace_user_hover_p8: "Når du udpeger en bruger eller gruppe som teampladsbruger, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at bruge teampladser. Dog skal en bruger være medlem af en teamplads for at få adgang til teampladsen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Læs mere</a><p><b>Tip:</b> Hvis alle brugere i dit systemmiljø skal kunne se teampladser, kan du tilføje pseudokontoen #AUTHENTICATED-USERS til brugerrollen for teampladser.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Brugere og grupper, der er tildelt andre rettigheder end de rettigheder, der er knyttet til administratorer, oprettere og brugere.<p>Du kan flytte disse brugere og grupper til foruddefinerede roller ved at fjerne dem fra rollen Andre og derefter tildele teampladsroller til dem.<p>Du kan gennemse de rettigheder, der i øjeblikket er tildelt til disse brugere og grupper, ved hjælp af IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administratorer af indgangsskabeloner er brugere, som har tilladelsen <b>Fuld kontrol</b> til opbevaringsstedet (objektlager). Du kan ikke ændre listen over administratorer af indgangsskabeloner fra administrationsværktøjet. <p>Administratorer af indgangsskabeloner kan slette og ændre alle teampladsskabeloner. Den bruger, som opretter en indgangsskabelon, behøver ikke at dele den med administratorerne af indgangsskabeloner.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Når du udpeger en bruger eller gruppe som opretter af indgangsskabeloner, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at oprette indgangsskabeloner. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Læs mere</a>",
		admin_repcfg_entry_template_user_hover_p8: "Når du udpeger en bruger eller gruppe som bruger af indgangsskabeloner, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at bruge indgangsskabeloner. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Læs mere</a><p><b>Tip:</b> Hvis alle brugere i dit systemmiljø skal kunne bruge indgangsskabeloner, kan du tilføje pseudokontoen #AUTHENTICATED-USERS til brugerrollen for indgangsskabeloner.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Brugere og grupper, der er tildelt andre rettigheder end de rettigheder, der er knyttet til administratorer, oprettere og brugere.<p>Du kan flytte disse brugere og grupper til foruddefinerede roller ved at fjerne dem fra rollen Andre og derefter tildele indgangsskabelonroller til dem.<p>Du kan gennemse de rettigheder, der i øjeblikket er tildelt til disse brugere og grupper, ved hjælp af IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Når du udpeger en bruger eller gruppe som opretter af teampladsskabeloner, tildeles brugeren eller gruppen de relevante rettigheder til at oprette teampladsskabeloner på opbevaringsstedet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Læs mere</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Når du udpeger en bruger eller gruppe som opretter af teampladser, tildeles brugeren eller gruppen de relevante rettigheder til at oprette teamplader på opbevaringsstedet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Læs mere</a>",
		admin_repcfg_teamspace_user_hover_cm: "Når du udpeger en bruger eller gruppe som bruger af teampladser, tildeles brugeren eller gruppen de relevante rettigheder til at bruge teamplader på opbevaringsstedet. Dog skal en bruger være medlem af en teamplads for at få adgang til teampladsen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Læs mere</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Når du udpeger en bruger eller gruppe som opretter af indgangsskabeloner, tildeles brugeren eller gruppen de relevante rettigheder til at oprette indgangsskabeloner på opbevaringsstedet. <br/><br/>Dog bestemmer sikkerhedsindstillingerne for den enkelte indgangsskabelon de rettigheder, som brugeren eller gruppen har til indgangsskabelonen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Læs mere</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Når du udpeger en bruger eller gruppe som redaktør af indgangsskabeloner, tildeles brugeren eller gruppen de relevante rettigheder til at redigere indgangsskabeloner på opbevaringsstedet. <br/><br/>Dog bestemmer sikkerhedsindstillingerne for den enkelte indgangsskabelon de rettigheder, som brugeren eller gruppen har til indgangsskabelonen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Læs mere</a>",
		admin_repcfg_entry_user_hover_cm: "Når du udpeger en bruger eller gruppe som bruger af indgangsskabeloner, tildeles brugeren eller gruppen de relevante rettigheder til at bruge indgangsskabeloner på opbevaringsstedet. <br/><br/>Dog bestemmer sikkerhedsindstillingerne for den enkelte indgangsskabelon de rettigheder, som brugeren eller gruppen har til indgangsskabelonen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Læs mere</a>",
		admin_repcfg_office_template_creators_hover_cm: "Når du udpeger en bruger eller gruppe som opretter af skabeloner til Microsoft Office Online eller Edit Service, tildeles brugeren eller gruppen de relevante rettigheder til at oprette skabelonfiler på opbevaringsstedet. <br/><br/>Dog bestemmer sikkerhedsindstillingerne for den enkelte skabelonfil de rettigheder, som brugeren eller gruppen har til indgangsskabelonen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a>",
		admin_repcfg_office_template_editors_hover_cm: "Når du udpeger en bruger eller gruppe som redaktør af skabeloner til Microsoft Office Online eller Edit Service, tildeles brugeren eller gruppen de relevante rettigheder til at ændre skabelonfiler på opbevaringsstedet. <br/><br/>Dog bestemmer sikkerhedsindstillingerne for den enkelte skabelonfil de rettigheder, som brugeren eller gruppen har til indgangsskabelonen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a>",
		admin_repcfg_office_template_user_hover_cm: "Når du udpeger en bruger eller gruppe som bruger af skabeloner til Microsoft Office Online eller Edit Service, tildeles brugeren eller gruppen de relevante rettigheder til at anvende en skabelon, når de opretter et nyt Office Online- eller Edit Service-dokument fra webklienten. <br/><br/>Dog bestemmer sikkerhedsindstillingerne for den enkelte skabelonfil de rettigheder, som brugeren eller gruppen har til indgangsskabelonen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a>",
		admin_repcfg_draft_creators_hover_cm: "Brugere, der skal redigere dokumenter i fællesskab i Microsoft Office Online eller Edit Service, skal tildeles denne rolle. Tildel ikke brugere redaktør- eller brugerrollen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a>",
		admin_repcfg_draft_editors_hover_cm: "Brugere, der skal redigere dokumenter i fællesskab i Microsoft Office Online eller Edit Service, skal tildeles rollen <b>opretter</b>. Hvis en bruger får tildelt redaktørrollen, kan de ikke oprette kladder, som er påkrævet ved samredigering. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a>",
		admin_repcfg_draft_user_hover_cm: "Brugere, der skal redigere dokumenter i fællesskab i Microsoft Office Online eller Edit Service, skal tildeles rollen <b>opretter</b>. Hvis en bruger får tildelt brugerrollen, kan de ikke oprette kladder, som er påkrævet ved samredigering. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Læs mere</a>",		
		admin_repcfg_search_others_hover_p8: "Brugere og grupper, der er tildelt andre rettigheder end de rettigheder, der er knyttet til administratorer, oprettere og brugere.<p>Du kan flytte disse brugere og grupper til foruddefinerede roller ved at fjerne dem fra rollen Andre og derefter tildele søgeroller til dem.<p>Du kan gennemse de rettigheder, der i øjeblikket er tildelt til disse brugere og grupper, ved hjælp af IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Administratorer af søgninger er brugere, som har tilladelsen <b>Fuld kontrol</b> til opbevaringsstedet (objektlager). Du kan ikke ændre listen over administratorer af søgninger fra administrationsværktøjet. <br /><br />Administratorer af søgninger kan slette og ændre alle søgninger. Den bruger, der opretter en søgning, behøver ikke at dele den med administratorerne af søgninger.",
		admin_repcfg_search_creators_hover_p8: "Når du udpeger en bruger eller gruppe som opretter af søgninger, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at oprette søgninger. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Læs mere</a>",
		admin_repcfg_search_user_hover_p8: "Når du udpeger en bruger eller gruppe som bruger af søgninger, tildeles brugeren eller gruppen den relevante sikkerhed på opbevaringsstedet til at bruge søgninger. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Læs mere</a>.<br /><br /><b>Tip:</b> Hvis du ønsker, at alle brugere i dit systemmiljø skal kunne benytte søgninger, kan du tilføje pseudokontoen #AUTHENTICATED-USERS til brugerrollen for søgning.<br/><br />Som standard kan en bruger af søgninger oprette søgninger samt søgninger på tværs af opbevaringssteder, men kan ikke gemme søgningerne. Du kan forhindre brugere af søgninger i at oprette søgninger ved at sørge for, at de benytter en arbejdsplads, som følgende indstillinger er valgt for:<ul><li><b>Forhindr brugere i at oprette søgninger</b></li><li><b>Forhindr brugere i at oprette søgninger på tværs af opbevaringssteder</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Når du udpeger en bruger eller gruppe som opretter af søgninger, tildeles brugeren eller gruppen de relevante rettigheder til at oprette og gemme søgninger på opbevaringsstedet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Læs mere</a><br /><br /><b>Vigtigt:</b> Kontrollér, at oprettere af søgninger benytter en arbejdsplads, som følgende indstillinger ikke er valgt for:<ul><li><b>Forhindr brugere i at oprette søgninger</b></li><li><b>Forhindr brugere i at oprette søgninger på tværs af opbevaringssteder</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Når du udpeger en bruger eller gruppe som redaktør af søgninger, tildeles brugeren eller gruppen de relevante rettigheder til at ændre eksisterende søgninger samt søgninger på tværs af opbevaringssteder. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Læs mere</a><br /><br /><b>Tip:</b> Som standard kan en redaktør af søgninger oprette søgninger samt søgninger på tværs af opbevaringssteder, men kan ikke gemme søgningerne. Du kan forhindre redaktører af søgninger i at oprette søgninger ved at have dem bruge en arbejdsplads, som følgende indstillinger er valgt for:<ul><li><b>Forhindr brugere i at oprette søgninger</b></li><li><b>Forhindr brugere i at oprette søgninger på tværs af opbevaringssteder</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Når du udpeger en bruger eller gruppe som bruger af søgninger, tildeles brugeren eller gruppen de relevante rettigheder til at åbne og udføre gemte søgninger samt søgninger på tværs af opbevaringssteder. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Læs mere</a><br /><br /><b>Tip:</b> Som standard kan en bruger af søgninger oprette søgninger samt søgninger på tværs af opbevaringssteder, men kan ikke gemme søgningerne. Du kan forhindre brugere af søgninger i at oprette søgninger ved at sørge for, at de benytter en arbejdsplads, som følgende indstillinger er valgt for:<ul><li><b>Forhindr brugere i at oprette søgninger</b></li><li><b>Forhindr brugere i at oprette søgninger på tværs af opbevaringssteder</b></li></ul>",
		admin_repcfg_db_encoding: "Tegnkodning for serverdatabase",
		admin_repcfg_db_encoding_hover: "Standardtegnkodning for IBM Content Manager-database er UTF-8.",
		admin_repcfg_db_encoding_specify: "Angiv databasetegnkodning",
		admin_repcfg_db_encoding_utf8: "UTF-8-kodning",
		admin_repcfg_db_encoding_utf8_hover: "Angiv denne valgmulighed, hvis du benytter en UTF-8-kodet database. IBM Content Navigator bruger UTF-8-kodning til at kontrollere længden på elementers egenskabsværdistrenge.",
		admin_repcfg_db_encoding_other: "Anden kodning",
		admin_repcfg_db_encoding_other_hover: "Angiv denne valgmulighed, hvis du benytter en database, der har en anden kodning end UTF-8. IBM Content Navigator bruger tegnoptælling til at kontrollere længden på elementers egenskabsværdistrenge.",
		admin_repcfg_language_codes: "Serversprogkoder:",
		admin_repcfg_language_codes_avail: "Tilgængelig",
		admin_repcfg_language_codes_sel: "Valgt",
		admin_repcfg_pdf_conversion: "MIME-typer, der skal konverteres til PDF-dokumenter i vedhæftninger:",
		admin_repcfg_pdf_conversion_avail: "Tilgængelig",
		admin_repcfg_pdf_conversion_sel: "Valgt",

		admin_repcfg_box_share_enable_classes_label: "Klasser, der skal ændres til at understøtte Box-deling:",
		admin_repcfg_box_share_enable_classes_hover: "Du kan revidere denne klasse, så den lagrer id'en på filen i Box, hvis elementet deles.",
		admin_repcfg_box_share_enable_classes_warning: "Vigtigt: Alle de klasser, du angiver, ændres til at understøtte Box-deling. Når du har gemt dine ændringer, kan de ikke fjernes igen fra klasserne.<br><br>Du skal have oprettet forbindelse til opbevaringsstedet som biblioteksserveradministrator for at kunne redigere klasser.",
		admin_repcfg_box_share_enable_classes_available: "Tilgængelige klasser",
		admin_repcfg_box_share_enable_classes_selected: "Valgte klasser",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Gem Box-delings-id",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Denne klasse er allerede blevet ændret til at gemme Box-delings-id'en. Du kan ikke fjerne denne indstilling.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Revidér denne klasse, så den lagrer id'en på filen i Box, hvis elementet deles.",

		admin_repcfg_redaction: "Rollebaserede redigeringer:",
		admin_repcfg_enable_redaction_hover: "Angiv, om du vil bruge rollebaserede redigeringer på dokumenter i dette opbevaringssted.<br/><br/>Rollebaserede redigeringer anvendes, når et dokument downloades, udskrives, gengives af en fremviser eller vises som en miniature. Det afhænger af rolle og tildelte redigeringspolitikker, hvad brugere får vist, når de ser dokumentet.",

		admin_repcfg_redaction_policy_permission_text: "Tildel politikredaktører:",
		admin_repcfg_redaction_policy_editors_hover: "Vælg de brugere og grupper, der kan oprette, ændre og slette redigeringspolitikker og redigeringsroller.",
		admin_repcfg_redaction_policy_editors_select_hover: "Redigeringspolitikredaktører kan oprette, ændre og slette redigeringspolitikker og redigeringsroller.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Redigeringspolitikadministratorer kan tildele redigeringspolitikredaktører.<br/><br/>Du kan ændre listen over redigeringspolitikadministratorer ved hjælp af IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Redigeringspolitikadministratorer kan tildele redigeringspolitikredaktører.<br/><br/>Du kan ændre listen over redigeringspolitikadministratorer ved hjælp af systemadministrationsklienten til IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Tildel redigeringsredaktører:",
		admin_repcfg_redaction_editors_hover: "Vælg de brugere og grupper, der kan oprette, ændre og slette rollebaserede redigeringer. Når du har valgt brugere og grupper som redaktører, skal du angive dem som redaktører i redigeringspolitikker, før de kan redigere rollebaserede redigeringer.",
   		admin_repcfg_redaction_editors_select_hover: "Redigeringsredaktører kan oprette, ændre og slette rollebaserede redigeringer, når de også er angivet som redaktører i redigeringspolitikker.",
   		admin_repcfg_redaction_administrators_hover_p8: "Redigeringspolitikadministratorer kan tildele redigeringsredaktører.<br/><br/>Du kan ændre listen over redigeringsadministratorer ved hjælp af IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Redigeringspolitikadministratorer kan tildele redigeringsredaktører.<br/><br/>Du kan ændre listen over redigeringsadministratorer ved hjælp af systemadministrationsklienten til IBM Content Manager.",
		admin_repcfg_entry_template: "Styring af indgangsskabeloner:",
		admin_repcfg_entry_template_enable_classes_label: "Klasser, der skal ændres til at understøtte indgangsskabeloner:",
		admin_repcfg_oos_reference_attribute_label: "Referenceattributter for Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Vigtigt: Alle de klasser, du angiver, ændres til at understøtte indgangsskabeloner. Når du har gemt dine ændringer, kan de ikke fjernes igen fra klasserne.<br><br>Du kan ændre klassen i den ene eller i begge af følgende situationer:<br><ul><li>For at lagre id'en for den indgangsskabelon, der blev brugt til at tilføje et element, så indstillingerne for indgangsskabelonen anvendes, når elementet skal revideres</li><li>Kun hierarkiske folderklasser: For at understøtte foldertilknytninger for indgangsskabeloner</li></ul>Du skal have oprettet forbindelse til opbevaringsstedet som biblioteksserveradministrator for at kunne redigere klasser.",
		admin_repcfg_entry_template_enable_classes_warning: "Vigtigt: Alle de klasser, du angiver, ændres til at understøtte indgangsskabeloner. Når du har gemt dine ændringer, kan de ikke fjernes igen fra klasserne.<br><br>Du skal have oprettet forbindelse til opbevaringsstedet som biblioteksserveradministrator for at kunne redigere klasser.",
		admin_repcfg_entry_template_enable_classes_available: "Tilgængelige klasser",
		admin_repcfg_entry_template_enable_classes_selected: "Valgte klasser",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Gem indgangsskabelon-id",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Revidér denne klasse, så den lagrer id'en for den indgangsskabelon, der blev brugt til at tilføje et element, så indgangsskabelonens indstillinger anvendes, når elementet er ændret.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Gem foldertilknytninger",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Revidér denne klasse, så den kan understøtte foldertilknytninger for indgangsskabeloner. Denne indstilling er kun tilgængelige for hierarkiske folderklasser.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Denne klasse er allerede blevet ændret til at gemme indgangsskabelon-id'en. Du kan ikke fjerne denne indstilling.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Denne klasse er allerede blevet ændret til at gemme foldertilknytninger. Du kan ikke fjerne denne indstilling.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Kun hierarkiske folderklasser og ikke-hierarkiske klasser kan anvendes til at gemme foldertilknytninger.",
		admin_repcfg_entry_template_root_folder_association_title: "Indgangskabeloner, der er tilknyttet rodfolderen:",
		admin_repcfg_entry_template_root_folder_association_hover: "Angiv, hvilke indgangsskabeloner du vil tilknytte rodfolderen i dit IBM Content Manager-opbevaringssted.<br /><br />Hvis du tilknytter indgangsskabeloner til rodfolderen, og brugere tilføjer elementer til en hierarkisk folder, benyttes en indgangsskabelon altid til at tilføje elementer.",
		admin_repcfg_entry_template_root_folder_association_button: "Angiv tilknytninger",
		admin_repcfg_oos_enable_classes_label: "Klasser, der skal ændres til at understøtte Office online og Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "Vigtigt: Alle de klasser, du angiver, ændres til at kunne bruge Microsoft Office Online eller Edit Service. Når du har gemt dine ændringer, kan den referenceattribut, der automatisk tilføjes de enkelte klasser, ikke fjernes.<br><br>Du skal have oprettet forbindelse til opbevaringsstedet som biblioteksserveradministrator for at kunne redigere klasser.",
		admin_repcfg_oos_enable_classes_available: "Tilgængelige klasser",
		admin_repcfg_oos_enable_classes_selected: "Valgte klasser",
		admin_repcfg_oos_enable_classes_note: "Vigtigt:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Denne klasse understøttes ikke med Microsoft Office online eller Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Versionspolitik for denne klasse er angivet til altid version, som Microsoft Office Online eller Edit Service ikke understøtter. Vælg en anden klasse.",
		admin_repcfg_download_recording: "Spor downloadninger:",
		admin_repcfg_download_recording_hover: "Downloadninger spores som standard, når tilføjelsesprogrammet Social Collaboration Base Extensions er installeret på opbevaringsstedet. Men deaktivering af denne indstilling kan forbedre opbevaringsstedets ydeevne.<br><br>Hvis du deaktiverer denne indstilling, vises brugere antallet af downloadninger, der har fundet sted, inden indstillingen deaktiveres.",
		admin_repcfg_sync_service: "Sync Services:",
		admin_repcfg_download_ignored: "Ignorér downloadninger for specifikke brugere:",
		admin_repcfg_download_ignored_hover: "Du kan ignorere downloadninger, som specifikke brugere har anmodet om, lige fra administratorer eller systemkonti til mere præcist at afspejle antallet af brugere, som har downloadet et dokument. Hvis du f.eks. har en bestemt konto, der bruges til at downloade indhold til at generere en månedlig rapport, kan du ignorere downloadninger, som denne konto anmoder om.<br><br><b>Begrænsning:</b> Du kan ikke angive grupper.",

		admin_repcfg_add_as_major_version: "Tilføj som overordnet version:",
		admin_repcfg_enable_add_as_major_version: "Ja",
		admin_repcfg_disable_add_as_major_version: "Nej",
		admin_repcfg_checkin_as_major_version: "Tjek ind som overordnet version:",
		admin_repcfg_enable_checkin_as_major_version: "Ja",
		admin_repcfg_disable_checkin_as_major_version: "Nej",
		admin_repcfg_annotation_security: "Markeringssikkerhed:",
		admin_repcfg_inherit_annotation_security: "Duplikér sikkerheden for det indeholdende dokument",
		admin_repcfg_default_annotation_security: "Brug standardmarkeringssikkerhed",
		admin_repcfg_connection_point: "Forbindelsespunkt for arbejdsgang:",
		admin_repcfg_include_workflow_definition: "Vis klasse for arbejdsgangsdefinition:",
		admin_repcfg_include_form_template: "Vis klasse for formularskabelon:",
		admin_repcfg_enable_include_workflow_definition: "Ja",
		admin_repcfg_disable_include_workflow_definition: "Nej",

		admin_repcfg_status_columns: "Tilstandsikoner:",
		admin_repcfg_status_columns_hover: "Angiv de tilstande, som du vil have vist ikoner for. Tilstandsikoner vises ud for dokumenter, foldere og arbejdselementer i indholdslisten.",
		admin_repcfg_status_columns_documents_or_folders: "Vis en ikon, når dokumenter eller foldere:",
		admin_repcfg_status_columns_documents: "Vis en ikon, når dokumenter:",
		admin_repcfg_status_columns_documents_checked_out: "er tjekket ud",
		admin_repcfg_status_columns_documents_declared_records: "bliver erklæret som records",
		admin_repcfg_status_columns_documents_minor_versions: "har underordnede versioner",
		admin_repcfg_status_columns_documents_compound_document: "Er sammensatte dokumenter",
		admin_repcfg_status_columns_documents_bookmarks: "har bogmærker",
		admin_repcfg_status_columns_documents_hold: "er tilbageholdt",
		admin_repcfg_status_columns_documents_notes: "har noter",
		admin_repcfg_status_columns_work_items: "Vis en ikon, når arbejdselementer:",
		admin_repcfg_status_columns_work_items_locked: "er låst",
		admin_repcfg_status_columns_work_items_checked_out: "er tjekket ud",
		admin_repcfg_status_columns_work_items_deadline: "har en tidsfrist",
		admin_repcfg_status_columns_work_items_suspended: "er midlertidigt afbrudt i behandlingen",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF-konfigurationsfil:",
		admin_repcfg_transform_xml_file: "Tilpasset konverteringsfil:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Aktivér",
		admin_repcfg_disable_ssl: "Deaktivér",
		admin_repcfg_keyringdb_file: "Nøgleringsdatabasefil:",
		admin_repcfg_keyringstash_file: "Nøglerings-stash-fil:",
		admin_repcfg_od_sso: "Enkelt logon",
		admin_repcfg_od_enable_sso: "Aktivér",
		admin_repcfg_od_disable_sso: "Deaktivér",
		admin_repcfg_od_sso_password: "Kodeord",
		admin_repcfg_advanced_label: "Udvidet",
		admin_repcfg_custom_properties_label: "Tilpassede egenskaber:",
		admin_repcfg_new_button_label: "Ny",
		admin_repcfg_edit_button_label: "Redigér",
		admin_repcfg_delete_button_label: "Slet",
		admin_repcfg_custom_head1: "Navn",
		admin_repcfg_custom_head2: "Værdi",
		admin_repcfg_ecpdialog_title_new: "Ny tilpasset egenskab",
		admin_repcfg_ecpdialog_title_edit: "Redigér tilpasset egenskab",
		admin_repcfg_ecpdialog_name: "Navn:",
		admin_repcfg_ecpdialog_value: "Værdi:",
		admin_repcfg_ecpdialog_save: "Gem",
		admin_repcfg_ecpdialog_create: "Opret",
		admin_repcfg_ecpdialog_cancel: "Annullér",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Denne værdi er obligatorisk. Værdien må ikke indeholde blanktegn og må ikke være magen til en anden.",

		admin_repcfg_cmis_use_gzip_encoding: "Brug GZIP-kodning:",

		admin_repcfg_task_mgr_proxy: "Forbindelses-id til Task Manager",
		admin_repcfg_task_mgr_proxy_hover: "Til Box-deling og sletning af Teamplads anvender Task Manager en administratorbruger-id og et administratorkodeord til at udføre opgaver, som ændrer opbevaringsstedet.<br><br>Klik på Angiv, og log på opbevaringsstedet med en gyldig administratorbruger-id og kodeord til opbevaringsstedet.",
		admin_task_manager_not_enabled_warning: "Denne indstilling kræver Task Manager-serviceprogrammet, men Task Manager-serviceprogrammet er ikke aktiveret. Du kan aktivere Task Manager-serviceprogrammet til alle arbejdspladser på siden Generelt under Indstillinger.",
		admin_task_manager_not_enabled_and_user_warning: "Denne indstilling kræver Task Manager-serviceprogrammet, men Task Manager-serviceprogrammet er ikke aktiveret. På denne side kan du angive Task Manager-forbindelses-id'en og derefter aktivere Task Manager-serviceprogrammet for alle arbejdspladser på siden Generelt under Indstillinger.",
		admin_task_manager_user_id_pw_not_set_warning: "Denne indstilling kræver Task Manager-serviceprogrammet, en administratorbruger-id og et kodeord. På denne side kan du angive Task Manager-forbindelses-id'en.",
		admin_repcfg_teamspaces_delete_task_id: "Administrator af opbevaringssted:",
		admin_repcfg_teamspaces_delete_task_password: "Kodeord:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Du skal angive en administrator af opbevaringsstedet for at aktivere Task Manager-serviceprogrammet for at slette en teamplads på opbevaringsstedet.",
		admin_repcfg_teamspaces_delete_task_hover: "Som standard, når en bruger sletter en teamplads, skjules teampladsen. Alle foldere og dokumenter i teampladsen forbliver i opbevaringsstedet. <br /> <br />Når du aktiverer denne indstilling, er det kun de dokumenter, der gemmes i andre foldere i opbevaringsstedet, der forbliver i opbevaringsstedet.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Hvis der er mange teampladser i dit systemmiljø, kan det tage lang tid at få vist alle teampladserne på skillebladet <b>Teampladser</b>. Du kan vælge denne indstilling for at reducere den tid, det tager at udfylde listen.<br /><br />Hvis en bruger har behov for at arbejde med en teamplads, der ligger uden for det angivne interval, kan brugeren anvende feltet <b>Filtrér</b> til at finde teampladsen.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Hvis du vælger denne indstilling, kan brugere med ejerrolle på teampladsen ændre de roller, der er knyttet til de teampladser, der er oprettet før IBM Content Navigator version 2.0.2.<br /><br />Denne indstilling påvirker ikke teampladser, der er oprettet med IBM Content Navigator version 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Angiv, om brugerne skal kunne oprette teampladser og skabeloner for teampladser på dette opbevaringssted.<br /><br /><b>Vigtigt:</b> Opbevaringsstedet skal understøtte hierarkiske foldere.<br /><br />Hvis du aktiverer teampladser, opretter IBM Content Navigator teampladsdatamodellen i opbevaringsstedet. Datamodellen inkluderer ACL-objekter, privilegier, privilegiesæt og to nye elementtyper.",
		admin_repcfg_folder_selector_hover: "Vælg den folder, der skal bruges som rodfolder, når brugerne søger efter dokumenter. Hvis der ikke er konfigureret hierarkiske foldere på opbevaringsstedet, giver indstillingen dig mulighed for at understøtte søgningen ved at definere en rodfolder. Hvis der er konfigureret hierarkiske foldere på opbevaringsstedet, tilsidesætter indstillingen den rodfolder, der er konfigureret på opbevaringsstedet.",
		admin_repcfg_cm_use_sso_hover: "Angiv, om brugere med privilegiesættet Betroet logon må benytte enkelt logon.<br /><br /><b>Vigtigt:</b> Enkelt logon skal være aktiveret på Content Manager-serveren, og WebSphere Application Server skal være konfigureret til LTPA, for at denne konfigurationsparameter fungerer.",
		admin_repcfg_cm_direct_retrieve_hover: "Direkte hentning er aktiveret som standard, fordi det giver webklienten mulighed for hurtigt at hente indhold fra ressourcestyringen. <br /><br />Du kan deaktivere indstillingen, hvis du ikke ønsker, at klientapplikationer får adgang til ressourcestyringen direkte, eller hvis du har en firewall eller en proxyserver, som forhindrer webklienten i at få adgang til ressourcestyringen via webadresser. En firewall kan f.eks. forhindre brugere i at få vist dokumenter i minifremviseren, når direkte hentning er aktiveret.",
		admin_repcfg_cmItemTypesToDisplay: "Hvis du ikke vil lade brugere se elementtyper for ressourcer og elementer på IBM Content Manager-serveren, kan du vælge udelukkende at vise elementtyper af typen dokumentmodel. Elementtyperne vises, når brugere opretter søgninger, tilføjer dokumenter og opretter foldere.",
		admin_repcfg_cm_language_codes_hover: "Angiv de sprog, hvorpå der skal returneres data fra Content Manager-serveren. Listen over tilgængelige sprog styres af listen med sprogdefinitioner på serveren.<br /><br /><b>Husk:</b> Data i webklienten bliver vist på det sprog, der er angivet i brugerens webbrowser.",
		admin_repcfg_cm_pdf_conversion_hover: "Angiv typerne af dokumenter, der skal konverteres til PDF, når en bruger sender et dokument med flere dele som en vedhæftning til en email. Alle delene kombineres til et enkelt PDF-dokument.",
		admin_repcfg_use_teamspaces_p8_hover: "Angiv, om brugerne skal kunne oprette teampladser og skabeloner for teampladser på dette opbevaringssted.<br /><br />Hvis du aktiverer teampladser, opretter IBM Content Navigator teampladsdatamodellen i opbevaringsstedet. Datamodellen inkluderer egenskabsskabeloner, tilpassede objekter, et folderobjekt og flere foldere.",
		admin_repcfg_use_entry_template_p8_hover: "Angiv, om brugere skal kunne oprette og administrere indgangsskabeloner på dette opbevaringssted fra IBM Content Navigator. Hvis du ikke aktiverer denne funktion, kan brugere søge efter og benytte de indgangsskabeloner, der allerede er på dette opbevaringssted.<br /><br />Hvis du aktiverer styring af indgangsskabeloner, opdaterer IBM Content Navigator datamodellen for indgangsskabeloner på opbevaringsstedet. Opdateringen inkluderer nye egenskaber. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Læs mere</a>",
		admin_repcfg_use_entry_template_cm_hover: "Angiv, om brugere skal kunne oprette og administrere indgangsskabeloner på dette opbevaringssted fra IBM Content Navigator.<br /><br />Hvis du aktiverer styring af indgangsskabeloner, opretter IBM Content Navigator datamodellen for indgangsskabeloner på opbevaringsstedet. Datamodellen inkluderer et nyt ACL-objekt, nye egenskaber og en ny elementtype. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Læs mere</a>",
		admin_repcfg_sync_service_p8_hover: "Angiv, om brugerne skal kunne synkronisere deres foretrukne elementer på tværs af deres arbejdsstationer og mobilenheder.<br><br><b>Vigtigt:</b> For at kunne benytte denne funktion skal du også udføre følgende opgaver:<br><ul><li>Angiv <b>Offentlig URL for Sync Services</b> i afsnittet <b>Sync Services</b> i administrationsværktøjet.</li><li>Tilføj dette opbevaringssted til en arbejdsplads, som Sync Services er aktiveret for.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Angiv, om indstillingen overordnet version vælges som standard, når brugere tilføjer dokumenter til opbevaringsstedet. <br /><br />Brugerne kan fjerne markeringen af denne indstilling, hvis de vil tilføje dokumentet som en underordnet version.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Angiv, om indstillingen overordnet version vælges som standard, når brugere tjekker dokumenter ind i opbevaringsstedet.<br /><br />Brugerne kan fjerne markeringen af denne indstilling, hvis de vil tjekke dokumentet ind som en underordnet version.",
		admin_repcfg_p8_annotation_security_hover: "Angiv, hvilken type sikkerhed der som standard skal gælde for markeringer. <br /><br />Brugerne kan vælge at ændre sikkerheden for markeringer.",
		admin_repcfg_p8_connection_point_hover: "Hvis du vil bruge IBM FileNet P8-arbejdsgange, skal du vælge et Process Engine-forbindelsespunkt. Det forbindelsespunkt, som du vælger, bestemmer, hvilke arbejdsgange der er tilgængelige for de brugere, der har adgang til opbevaringsstedet.",
		admin_repcfg_p8_include_workflow_definition_hover: "Hvis du viser dokumentklassen for IBM FileNet P8-arbejdsgangsdefinitionen i webklienten, kan brugere søge efter og tilføje arbejdsgangsdefinitioner til opbevaringsstedet.",
		admin_repcfg_p8_include_form_template_hover: "Hvis du viser dokumentklassen for IBM FileNet P8-formularskabelonen i webklienten, kan brugere søge efter og tilføje formularskabeloner til opbevaringsstedet.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Angiv den fuldstændige sti for AFP2PDF-konfigurationsfilen til dette opbevaringssted på webapplikationsserveren. AFP2PDF-konvertering er påkrævet ved fremvisning og udskrivning af AFP-data.<br /><br /><b>Husk:</b> AFP2PDF-konverteringsfunktionen skal være installeret, før du kan bruge denne parameter.",
		admin_repcfg_od_transform_xml_file_hover: " Hvis du vil bruge en tilpasset konvertering til at konvertere Content Manager OnDemand-indhold, skal du angive den fuldstændige sti til den XML-fil, der bruges til at definere konverteringen. XML-filen skal være placeret på webapplikationsserveren.",
		admin_repcfg_od_ssl_hover: "Angiver, om SSL skal bruges til at kryptere kommunikation mellem IBM Content Navigator-applikationsserveren og Content Manager OnDemand-biblioteksserveren og objektserverne.<br /><br /><b>Vigtigt:</b> Når du aktiverer SSL for Content Manager OnDemand, omfatter det ikke kommunikationen mellem IBM Content Navigator-applikationsserveren, webserveren eller brugernes arbejdsstationer.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Angiv den fuldstændige sti til nøgleringsdatabasefilen for dette opbevaringssted på webapplikationsserveren. Eksempel: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Nøgleringsdatabasefilen indeholder dine betroede rodcertifikater. Du skal bruge stærk filsystembeskyttelse for at forhindre uautoriseret adgang til denne fil.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Angiv den fuldstændige sti til nøglerings-stash-filen for dette opbevaringssted på webapplikationsserveren. Eksempel: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Nøglerings-stash-filen indeholder kodeordet til nøgleringdatabasefilen. Du skal bruge stærk filsystembeskyttelse for at forhindre uautoriseret adgang til denne fil.",
		admin_repcfg_od_sso_password_hover: "Angiv det kodeord, der skal bruges ved enkelt logon til OnDemand-serveren.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java-API'et understøtter tilpassede egenskaber. Hvis du vil bruge nogen af de tilpassede egenskaber, når du opretter forbindelse til opbevaringsstedet via webklienten, skal du angive de tilpassede egenskabers navne og værdier. <br /><br />Der er flere oplysninger om understøttelse af tilpassede egenskaber i ODWEK Java API Javadocs, som er placeret i /api-underbiblioteket i ODWEK-installationsbiblioteket.",
		admin_repcfg_od_custom_properties_name_hover: "Angiv egenskabsnavn.",
		admin_repcfg_od_custom_properties_value_hover: "Angiv egenskabsværdi.",
		admin_repcfg_od_use_sso_hover: "Angiv, om brugere skal kunne anvende enkelt logon.<br /><br /><b>Vigtigt:</b> Enkelt logon skal være aktiveret på Content Manager OnDemand-serveren, for at denne konfigurationsparameter fungerer.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Brug GZIP-kodning til denne CMIS-kilde.",
		admin_repcfg_cm_use_part_file_name: "Filnavn, der skal bruges ved download af dokumenter:",
		admin_repcfg_cm_use_part_file_name_help: "Angiv, hvordan filnavnene til dokumenter bestemmes, når brugere downloader dokumenter.",
		admin_repcfg_cm_use_part_file_name_enable: "Brug filnavnet",
		admin_repcfg_cm_use_part_file_name_disable: "Brug navnet på elementet i opbevaringsstedet",
		admin_repcfg_add_doc_name: "Standardnavn for et tilføjet dokument:",
		admin_repcfg_add_doc_name_hover: "Brugere kan ændre navnet, før dokumentet tilføjes.",
		admin_repcfg_add_doc_name_empty: "Intet (tomt)",
		admin_repcfg_add_doc_name_file_name: "Filnavnet på det valgte dokument",

		admin_repcfg_compound_documents: "Funktioner for sammensat dokument",
		admin_repcfg_compound_documents_hover: "Aktivér P8-funktioner for sammensat dokument, f.eks. navigering.",
		admin_repcfg_cm_action_list_config_enabled: "Funktionsliste til arbejdselementer:",
		admin_repcfg_cm_action_list_config_hover: "Når du konfigurerer dokumentrutning i administrationsklienten til Content Manager-systemet, kan du angive en liste over handlinger, som en bruger kan udføre på et arbejdselement.<br /><br />Aktivér denne indstilling, hvis du vil bruge funktionslisten fra Content Manager-serveren. Disse indstillinger anvendes på kontekstmenuen i vinduet Redigér egenskaber til arbejdselementet.<br /><br /><b>Vigtigt:</b> Indstillinger i funktionslisten overskriver eventuelle tilpassede menuer, du konfigurerer i administrationsværktøjet til Content Navigator. Hvis der ikke er nogen indstillinger på funktionslisten, kan brugeren ikke anvende funktioner på arbejdselementerne.",

		admin_repcfg_box_share: "Box-deling",
		admin_repcfg_box_share_p8_hover: "Brugere kan dele et dokument fra dette opbevaringssted. Deling af et dokument omfatter kopiering af filen til Box, oprettelse af et link og afsendelse af linket i en e-mail.<br /><br />Hvis du aktiverer Box-deling, opretter IBM Content Navigator Box-delingsdatamodellen i opbevaringsstedet. Hvis du vil installere tilføjelsesprogrammet til IBM Content Navigator Box-deling skal du have oprettet forbindelse til opbevaringsstedet som biblioteksserveradministrator.",

		admin_menu_type_icon: "Ikon for menutype",
		admin_menu_toolbar_hover: "Værktøjslinje",
		admin_menu_toolbar_custom_hover: "Tilpasset værktøjslinje",
		admin_menu_contextMenu_hover: "Kontekstmenu",
		admin_menu_contextMenu_custom_hover: "Tilpasset kontekstmenu",

		admin_menu_contextMenu_custom_empty: "Der er ikke defineret nogen tilpassede kontekstmenuer i de konfigurerede plugins.",
		admin_menu_toolbar_custom_empty: "Der er ikke defineret nogen tilpassede værktøjslinjer i de konfigurerede plugins.",

		admin_file_type_category_filters: "Filtypefiltre:",
		admin_file_type_category_filters_hover_help: "Angiv listen over filtyper, som brugerne kan benytte i følgende situationer:<ul><li>For at indsnævre listen over resultater ved søgning eller gennemsyn i IBM Content Navigator for Microsoft Office<li>For at indsnævre listen over resultater ved søgning i et IBM FileNet P8-opbevaringssted i webklienten for Microsoft Office<li>For at begrænse de typer filer, som brugere kan tilføje til opbevaringsstedet, når de bruger en indgangsskabelon</ul>",
		admin_file_type_only_use_in_et_folder_association: "Vis kun i Tilknytninger til indgangsskabelonfolder",
		admin_office_config_properties_label: "Office-indstillinger",
		admin_office_config_type_label: "Datatype",
		admin_office_config_mapped_property_label: "Egenskaber for opbevaringssted",
		admin_office_config_properties_hover_help: "Angiv og tilføj derefter navnet på hver af de Microsoft Office-egenskaber, du vil knytte til en opbevaringsstedsegenskab. Datatypen for alle egenskaberne skal stemme overens",
		admin_office_config_mapped_property_hover_help: "Hvis du vil tilknytte Office-egenskaberne til mere end én opbevaringsstedsegenskab, skal du oprette en ny egenskabstilknytning",
		admin_new_property_mapping_title: "Ny egenskabstilknytning",
		admin_property_mapping_title: "Redigér egenskabstilknytning",
		admin_property_mapping_instruction: "Angiv, hvilke Microsoft Office-egenskaber, du vil tilknytte til en egenskab på opbevaringsstedet. Datatypen for Office-egenskaberne skal svare til datatypen for egenskaben på opbevaringsstedet. <br /><br />Hvis et Office-dokument har mere end én egenskab fra tilknytningen, bruger IBM Content Navigator den første egenskab i listen til indsættelse i egenskaben på opbevaringsstedet.",
		admin_ms_general_settings: "Generel konfiguration:",
		admin_ms_delete_local_settings: "Slet lokale filer, når brugerne:",
		admin_ms_outlook_options: "Outlook-integration:",
		admin_ms_enable_props_mapping: "Tilknyt Office-egenskaber til opbevaringsstedsegenskaber, når brugerne:",
		admin_ms_open_doc_when_checkout: "Tjek automatisk et dokument ud, når det åbnes",
		admin_ms_open_doc_when_checkout_hover_help: "Vælg denne indstilling for at forhindre brugerne i at overskrive filen på opbevaringsstedet med en ældre version af filen.",
		admin_ms_prompt_close_office: "Bed brugere om at tjekke dokumenter ind, når de lukker Office-applikationer",
		admin_ms_prompt_close_office_hover_help: "Vælg denne indstilling for at forhindre brugerne i at glemme at tjekke deres arbejde ind.",
		admin_ms_add_with_entry_template_only: "Vis kun handlingen Tilføj med skabelon",
		admin_ms_delete_local_on_add: "Slet lokale filer, når brugerne tilføjer dokumenter",
		admin_ms_delete_local_on_checkin: "Slet lokale filer, når brugerne tjekker dokumenter ind eller annullerer udtjekning",
		admin_ms_delete_local_on_add_hover_help: "Når en bruger tilføjer et dokument i IBM Content Navigator for Microsoft Office, tilføjes dokumentet til opbevaringsstedet, og den lokale kopi af dokumentet forbliver åbent, så brugeren straks kan tjekke dokumentet ud og foretage ændringer.<br /><br />Vælg denne indstilling for automatisk at lukke og slette den lokale kopi af dokumentet, når det er blevet tilføjet til opbevaringsstedet.",
		admin_ms_delete_local_on_checkin_hover_help: "Når en bruger tjekker et dokument ind i IBM Content Navigator for Microsoft Office, tjekkes dokumentet i ind opbevaringsstedet, og den lokale kopi af dokumentet forbliver åbent. Den lokale kopi af dokumentet forbliver også åbent efter annullering af udtjekning. Når den lokale kopi er åben, kan brugerne straks tjekke dokumentet ud igen for at foretage ændringer.<br /><br />Vælg denne indstilling for automatisk at lukke og slette den lokale kopi af dokumentet efter indtjekning af det eller ved annullering af udtjekning.",
		admin_ms_delete_local_on_save: "Gem et dokument",
		admin_ms_prompt_for_props_on_add: "Bed brugerne om at angive egenskabsværdier, når de tilføjer e-mails til opbevaringsstedet",
		admin_ms_prompt_for_props_on_add_hover_help: "Hvis du ikke vælger denne indstilling, bruger webklienten den Outlook-egenskabstilknytning, der er defineret for opbevaringsstedet.<br /><br />Hvis du har indgangsskabeloner, der er knyttet til den folder, som e-mails tilføjes til, bliver brugeren muligvis ikke bedt om at angive nogen egenskaber.",
		admin_ms_delete_email_on_add: "Slet e-mail fra e-mail-server, når den pågældende e-mail tilføjes til opbevaringsstedet",
		admin_ms_send_email_as_link_only: "Forhindr brugere i at sende dokumenterne som vedhæftninger",
		admin_ms_send_email_as_link_only_hover_help: "Hvis du vælger denne indstilling, kan brugerne kun sende dokumenterne som link fra Outlook. Denne indstilling sikrer, at kun brugere, som har de relevante rettigheder til opbevaringsstedet, kan få vist dokumenter.",
		admin_ms_enable_prop_mapping_for_add: "Tilknyt Office-egenskaber til opbevaringsstedsegenskaber, når brugeren tilføjer eller tjekker dokumenter ind",
		admin_ms_checkout_document_after_add: "Tjek automatisk dokumenter ud, efter de er tilføjet til opbevaringsstedet",
		admin_no_default_document_type_filtering: "Returnér alle dokumenttyper som standard, når brugere udfører søgninger.",
		admin_no_default_document_type_filtering_hover_help: "I IBM Content Navigator for Microsoft Office gælder det, at brugere som standard kun kan se dokumenttypen for den aktuelle applikation, når de udfører søgninger. Word-dokumenttype vælges som standard, når søgningen foregår fra Microsoft Word.<br/><br/>Men hvis du vælger denne indstilling, ryddes afkrydsningsfelterne for dokumenttyper, så brugere får vist alle de dokumenter, der returneres af en søgning. Brugere kan tilsidesætte denne indstilling ved at vælge en eller flere dokumenttyper, inden de udfører søgninger.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Angiv, om du vil tilknytte de dokumentegenskaber, der er defineret for Microsoft Office-dokumenter, til egenskaber, der er defineret på opbevaringsstedet.<br /></br /><b>Vigtigt:</b> Hvis du aktiverer denne funktion, skal du konfigurere Office-egenskaberne for hvert opbevaringssted i dit systemmiljø. Hvis du ikke tilknytter Office-egenskaberne til opbevaringsstedsegenskaberne, fungerer denne funktion ikke.<br /><br />Denne indstilling gælder ikke for Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Vælg denne indstilling for at reducere antallet af trin, som brugerne skal udføre for at arbejde med dokumenter, efter at dokumenterne er tilføjet til opbevaringsstedet.<br /></br /><b>Tip:</b> Hvis du vil sikre, at brugerne tjekker filerne ind i opbevaringsstedet, skal du vælge <b>Bed brugere om at tjekke dokumenter ind, når de lukker Office-applikationer</b>.",
		admin_ms_show_details_recently_used: "Vis detaljer om <b>nyligt anvendt</b> element",
		admin_ms_show_details_recently_used_hover_help: "Når du fremviser listen over nyligt anvendte elementer, bliver detaljerne for elementerne skjult, så der kan vises flere elementer. Når du vælger denne indstilling, bliver oplysningerne for det første dokument i vinduet med detaljer vist som standard.",
		admin_ms_show_no_permissions_warning: "Vis advarsler, når brugerne redigerer egenskaber eller tjekker et dokument ind, men ikke har tilladelse til at få dokumentets indgangsskabelon vist.",
		admin_ms_show_no_permissions_warning_hover_help: "Hvis et dokument i opbevaringsstedet er oprettet med en indgangsskabelon, men brugeren ikke har tilladelse til at få indgangsskabelonen vist, kan den ikke hentes.<br /><br/>Når brugeren derfor redigerer dokumentegenskaberne, bliver de vist uden indgangsskabelonen. Når brugeren tjekker dokumentet ind, bliver det desuden tjekket ind uden brug af indgangsskabelonen.<br /><br />Disse funktioner forekommer som standard uden at informere brugeren om, at indgangsskabelonen ikke bliver anvendt. Der registreres kun en advarsel i logfilen.<br /><br />Vælg denne indstilling, hvis du vil vise advarsler, der straks fortæller brugeren, at indgangsskabelonen ikke bliver anvendt.",
		admin_ms_hide_search_actions: "Skjul søgefilterafsnit",
		admin_ms_hide_search_actions_hover_help: "Brugerne kan som standard anvende et handlingsfilter til at angive en handling, en bruger eller en gruppe brugere og derefter vælge en dato eller et datointerval, for hvornår handlingen blev udført. De kan f.eks. søge efter dokumenter, som de har tilføjet den sidste måned.<br /><br />Hvis brugerne ikke skal kunne anvende handlingsfiltre, kan du vælge denne indstilling for at skjule handlingsfiltrene og reducere antallet af felter, der vises ved angivelse af søgekriterier.",
		admin_ms_hide_save_document: "Skjul indstillingen <b>Gem</b> på båndlinjen",
		admin_ms_hide_save_document_hover_help: "Når du bruger indstillingen <b>Gem</b>, kan brugere gemme dokumentændringer i opbevaringsstedet uden at tjekke dokumentet ind.",
		admin_ms_indicate_managed_email_on_add: "Angiv, om en e-mail allerede er tilføjet til opbevaringsstedet",
		admin_ms_indicate_managed_email_on_add_hover_help: "At vælge denne indstilling fortæller brugere, at der allerede er en e-mail i opbevaringsstedet, hvilket kan reducere antallet af gange en e-mail tilføjes til opbevaringsstedet. Når indstillingen vælges, oprettes en ny farvekategori, IBM ECM, i Microsoft Outlook. E-mails, der tilføjes til opbevaringsstedet, tilføjes automatisk til kategorien Håndteret i IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Tilføj indstillingerne i gruppen Redigér:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Angiv, hvilke <b>Tilføj</b>-indstillinger, der er tilgængelige fra gruppen <b>Redigér</b> på båndet:<ul><li>Vælg <b>Vis alle indstillinger for Tilføj</b>, så knappen Tilføj og alle de tilgængelige tilføjelseshandlinger fra gruppen Redigér vises.</li><li>Vælg <b>Skjul alle indstillinger for Tilføj</b> for at forhindre brugerne i at tilføje dokumenter til opbevaringsstedet, eller hvis du ønsker, at brugerne kun skal kunne tilføje dokumenter inde fra en teamplads.</li><li>Vælg <b>Skjul handlingen Tilføj med skabelon</b>, hvis du vil gennemtvinge tilknytninger for indgangsskabelonfolder og forhindre brugerne i at vælge en anden indgangsskabelon.</li><li>Vælg <b>Vis kun handlingen Tilføj med skabelon</b>, hvis brugerne skal tilføje dokumenter ved hjælp af indgangsskabeloner.</li></ul>",
		admin_ms_show_edit_group_add_button: "Vis alle indstillinger for Tilføj (standard)",
		admin_ms_hide_edit_group_add_button: "Skjul alle indstillinger for Tilføj",
		admin_ms_hide_add_with_entry_template: "Skjul handlingen Tilføj med skabelon",
		admin_ms_managed_in_ecm: "Håndteret i IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Hvis brugere viser kategorier i Microsoft Outlook, vises denne etiket for e-mail, der tilføjes et IBM Content Manager- eller IBM FileNet Content Manager-opbevaringssted.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Et navn i kategorien Håndteret i IBM ECM må ikke indeholde komma (,) eller et semikolon (;).",
		admin_delete_open_docs_after_close: "Slet automatisk åbne dokumenter, når brugere lukker dokumenterne",
		admin_admin_delete_open_docs_after_close_hover_help: "Når en bruger åbner et dokument i IBM Content Navigator for Microsoft Office, downloades dokumentet til brugerens dokumentbibliotek eller til den placering, som filsporingsindstillingerne for arbejdspladsen angiver.<br><br>Vælg denne indstilling for at slette filer, der er åbne, men som brugeren ikke har tjekket ud, når de lukker dem. Valg af denne indstilling sætter dig i stand til at:<ul><li>Gennemtvinge overholdelse af IT-politikker</li><li>Sikre, at brugere arbejder på den seneste version af dokumenter</li><li>Reducere den mængde diskplads, der bruges til opbevaring af dokumenter</li><ul>",
		admin_ms_custom_command_configuration: "Tilpassede kommandoer:",
		admin_ms_custom_command_configuration_hover_help: "Du kan tilføje op til 4 kommandoer til IBM Content Navigator for Microsoft Office-værktøjslinjen i Microsoft Office-applikationer. Kommandoerne kan bruges til at åbne URL'er. Du kan f.eks. tilføje en kommando for at åbne en service, der kan bruges til at søge efter brugere og grupper.",
		admin_ms_custom_command_dialog_title: "Redigér tilpasset kommando",
		admin_ms_custom_command_dialog_intro_text: "Definér en kommando, der kan bruges til at åbne en URL fra IBM Content Navigator for Microsoft Office-værktøjslinjen i Microsoft Office-applikationer.",
		admin_ms_custom_command_id: "Kommando ${0}",
		admin_ms_custom_command_available_label: "Tilgængelig",
		admin_ms_custom_command_available_hover_help: "Hvis den URL, der er defineret for en kommando, skal tages offline for vedligeholdelse, skal du fjerne markeringen af kommandoens afkrydsningsfelt, så den ikke vises i Microsoft Office.<br/><br/><b>Vigtigt:</b> Brugere skal logge af arbejdspladsen, så ændringerne afspejles i IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "Kommando-id",
		admin_ms_custom_command_id_label: "Id",
		admin_ms_custom_command_label_label: "Etiket",
		admin_ms_custom_command_label_hover_help: "Angiv den etiket, der skal vises for kommandoen i Microsoft Office.",
		admin_ms_custom_command_description_label: "Beskrivelse",
		admin_ms_custom_command_description_hover_help: "Angiv den beskrivelse, der skal vises for kommandoen i Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Angiv den fuldstændige URL, så åbning kan finde sted fra Microsoft Office. URL'en kan være en webside eller en service.",
		admin_ms_custom_command_icon_label: "Ikon",
		admin_ms_custom_command_icon_hover_help: "Angiv filnavnet på den ikon, der skal vises, f.eks. CommandIcon.png.<br/><br/><b>Vigtigt:</b> Du skal tilføje ikonfilen til Plugins-underbiblioteker i IBM Content Navigator for Microsoft Office-installationsbibliotek på hver enkelt klientmaskine.<br/><br/>Hvis ikonen ikke er placeret i Plugins-biblioteket, eller hvis du ikke angiver en ikon, vises standardikonen customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Gruppeetiket:",
		admin_ms_custom_command_group_name_hover_help: "Du kan angive en gruppeetiket, der skal vises under de tilpassede kommandoer på båndet.<br/><br/>Hvis du ikke angiver en etiket, benyttes gruppeetiketten <b>Tilpassede kommandoer</b>.",
		admin_ms_ribbon_tab_label: "IBM ECM-skillebladsetiket:",
		admin_ms_ribbon_tab_hover_help: "Angiv det navn, der skal vises for skillebladet IBM Content Navigator for Microsoft Office i Microsoft Office-båndet. Hvis du ikke angiver et navn, får skillebladet navnet \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Luk opgavedelvinduet, når brugere åbner dokumenter",
		admin_ms_close_task_pane_on_open_hover_help: "Vælg denne indstilling, hvis du vil maksimere den plads, som brugere kan få vist dokument i, i Microsoft Office.<br/><br/>Microsoft Office 2010-brugere: For at sikre at opgavedelvinduet lukkes for alle dokumenter, skal du aktivere MDI-tilstand (multiple document interface) ved at klikke på <b>Indstillinger</b> &gt; <b>Udvidet</b> og fjerne markeringen af indstillingen <b>Vis alle vinduer i proceslinjen</b>.",
		admin_ms_open_document_options: "Indstillinger for åbning af dokument:",
		admin_ms_delete_local_file_options: "Indstillinger for sletning af lokal fil:",
		admin_ms_add_and_checkin_options: "Indstillinger for tilføjelse og indtjekning:",
		admin_ms_search_options: "Søgeparametre:",
		admin_ms_display_options: "Indstillinger for fremvisning:",
		admin_ms_bidirection_enable_label: "Aktivér understøttelse af tovejstekst.",
		admin_ms_bidirection_enable_hover_help: "Vælg denne indstilling, hvis du vil sætte brugere i stand til at angive eller få vist tekst i IBM Content Navigator for Microsoft Office i en anden retning end venstre-mod-højre.",
		admin_ms_text_direction_label: "Standardtekstretning for indhold:",
		admin_ms_text_direction_hover_help: "Angiv den retning, som tekst skal have i inputfelter i IBM Content Navigator for Microsoft Office. Denne indstilling styrer også, hvordan elementer, såsom foldernavne eller egenskabsværdier, vises.",
		admin_ms_control_threshold_label: "Mindste antal elementer, der aktiverer forudvisning:",
		admin_ms_control_threshold_hover_help: "Forudvisning er som standard aktiveret, når antallet af elementer er større end eller lig med 50 i forbindelse med søgning eller angivelse af egenskaber, der har foruddefinerede værdier i en oversigt. Du kan ændre minimumsværdien.",

		admin_ms_default_email_class: "Klasse, der skal bruges ved tilføjelse af e-mail",
		admin_ms_default_email_class_hover_help: "E-mails, der tilføjes til opbevaringsstedet fra Microsoft Outlook, tilføjes til den klasse, du angiver. Brugere kan ikke ændre klassen.",
		admin_ms_default_folder_class: "Klasse, der skal bruges ved oprettelse af foldere",
		admin_ms_default_folder_class_hover_help: "Foldere, der oprettes på dette opbevaringssted fra en Microsoft Office-applikation, tilføjes til den klasse, du angiver. Brugere kan ikke ændre klassen.",
		admin_ms_default_folder_warn_title: "Du kan ikke bruge klassen ${0} som den klasse, der skal bruges ved oprettelse af foldere.",
		admin_ms_default_folder_warn_name_prop_invalid: "Navneegenskaben for klassen er ikke en streng, og navnet på folderen skal være en streng.<br />Vælg at bruge en anden klasse ved oprettelse af foldere, eller arbejd sammen med IBM Content Manager-administratoren om at ændre navneegenskaben for klassen til en streng.",
		admin_ms_default_folder_warn_req_props: "Klassen indeholder påkrævede egenskaber, der ikke har nogen værdier. Brugerne kan imidlertid ikke angive værdier for de påkrævede egenskaber, når de opretter foldere fra IBM Content Navigator for Microsoft Office.<br />Vælg at bruge en anden klasse ved oprettelse af foldere, eller arbejd sammen med IBM Content Manager-administratoren om at gøre de påkrævede egenskaber valgfri eller om at udfylde de påkrævede egenskaber med en værdi på forhånd.",
		admin_ms_delimiter_for_office_properties: "Skilletegn for egenskaber til streng med flere værdier",
		admin_ms_delimiter_for_office_properties_hover_help: "Angiv det tegn, der skal bruges som skilletegn til strengegenskaber, du tilknytter til egenskaber for streng med flere værdier. Som standard kan du tildele et sæt værdier til en egenskab for en streng med flere værdier ved hjælp af et semikolon (;) mellem værdierne. Hvis en af strengværdierne imidlertid indeholder et semikolon, kan du ikke anvende denne strengværdi, medmindre skilletegnet ændres til et andet tegn. Du kan f.eks. ændre skilletegnet til et komma (,)",
		admin_ms_outlookPropertyRemembrance : "Husk indstillinger, når du tilføjer meddelelser og vedhæftninger",
		admin_ms_outlookPropertyRemembrance_hover_help : "Egenskabsværdierne, placeringen, klassevalget og sikkerheden, der er tilknyttet meddelelserne og de vedhæftninger, du tilføjer, huskes og bliver anvendt som standardindstillinger, når de fremtidige elementer tilføjes.",

		admin_file_type_name_hover_help: "Pegehjælp til Navn",
		admin_file_type_description_hover_help: "Pegehjælp til Beskrivelse",
		admin_file_type_dialog_title: "Redigér filtypefilter",
		admin_new_file_type_dialog_title: "Nyt filtypefilter",
		admin_mobile_feature_dialog_title: "Funktion",
		admin_mobile_feature_dialog_new_title: "Ny funktion",
		admin_file_type_instructions: "Opret et filter, som brugere kan bruge til at indsnævre deres liste over søgeresultater. Du kan tilknytte flere MIME-typer til filteret.",
		admin_file_type_filter_place_holder: "Filtrér MIME-typer",
		admin_new_button_label: "Ny",
		admin_edit_button_label: "Redigér",
		admin_delete_button_label: "Slet",
		admin_copy_button_label: "Kopiér",
		admin_verify_button_label: "Verificér",
		admin_availabe_filters_label: "Tilgængelige filtre",
		admin_selected_filters_label: "Valgte filtre",

		admin_mobile_access: "Mobil applikationsadgang:",
		admin_mobile_access_hover_help: "Hvis du vil bruge IBM Content Navigator fra en mobil enhed, anbefales det, at du gør det muligt for brugere at få adgang til denne arbejdsplads fra mobilapplikationen.<br /><br />Hvis du deaktiverer adgang til denne arbejdsplads fra mobilapplikationen, kan brugerne stadig få adgang til webklienten fra deres mobilbrowsere. Webklienten er imidlertid ikke designet til adgang fra mobile enheder.",

		admin_mobile_access_allow_label: "Tilladelser til brugerne:",
		admin_mobile_allow_add_photos: "Tilføj fotografier fra kamera og fotobibliotek",
		admin_mobile_allow_add_docs: "Tilføj dokumenter og opret foldere på opbevaringsstedet",
		admin_mobile_allow_open_docs: "Åbn dokumenter i andre applikationer",
		admin_mobile_allow_add_docs_hover_help: "Brugere kan oprette foldere eller tilføje dokumenter fra andre mobilapplikationer, f.eks. et dokument, der er en vedhæftning til en e-mail.",
		admin_mobile_allow_open_docs_hover_help: "Brugerne bliver bedt om at vælge den applikation, der skal bruges til at få vist det valgte dokument. Hvis kun én applikation er tilgængelig, bruges den pågældende applikation.",
		admin_mobile_features: "Funktioner:",
		admin_mobile_features_hover_help: "Angiv de funktioner på denne arbejdsplads, der skal vises i IBM Content Navigator-mobilapplikationen.",
		admin_mobile_new_feature_button_label: "Ny funktion",
		admin_mobile_move_up_button_label: "Flyt op",
		admin_mobile_move_down_button_label: "Flyt ned",
		admin_desktop_mobile_instructions: "Vejledning til mobilindstillinger indsættes her",
		admin_desktop_max_number_of_docs_to_add: "Maksimalt antal dokumenter, der kan tilføjes:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Angiv det maksimale antal dokumenter, som brugere kan tilføje på én gang. Standardmaksimum er 50. Du kan imidlertid angive maksimum op til 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maksimalt antal elementer, der kan ændres:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Angiv det maksimale antal elementer, som brugere kan ændre på én gang. Standardmaksimum er 50. Du kan imidlertid angive maksimum op til 300.",
		admin_desktop_max_conversion_size: "Maks. datamængde til PDF-konverteringer (i MB):",
		admin_desktop_max_conversion_size_hover_help: "</br></br><b>Begrænsning:</b> Denne indstilling understøttes ikke på IBM Content Manager OnDemand.<br/><br/>Angiv den maksimale datamængde, der kan konverteres til PDF. Denne grænse anvendes, når brugere downloader elementer som PDF-filer eller sender elementer gennem deres e-mail som PDF-filer.<br /><br />Hvis størrelsen på hvert dokument ikke kan bestemmes, konverteres dokumenterne stadig til PDF.<br/><br/>Standardgrænsen er på 200 MB. Hvis du angiver en grænse over 200 MB, kan det påvirke systemets ydeevne.",
		admin_desktop_timeProperties: "Tidsstempel:",
		admin_desktop_time_properties_hover_help: "<b>Kun IBM FileNet P8-brugere:</b> Denne indstilling gælder for tilpassede egenskaber og ikke for systemegenskaberne. Eksempelvis viser egenskaben Ændret fortsat tidsdelen af tidsstemplet, hvis du vælger <b>Vis kun datodelen af tidsstemplet</b>.<br/><br/>Denne indstilling ændrer ikke tidsstemplet i opbevaringsstedet.",
		admin_desktop_disable_time_stamp: "Vis hele tidsstemplet",
		admin_desktop_enable_time_stamp: "Vis kun datodelen af tidsstemplet",
		admin_desktop_timezone: "Tidszone:",
		admin_desktop_timezone_localuser: "Vis brugerens lokale tidszone",
		admin_desktop_timezone_alluser: "Vis den samme tidszone for alle brugere",
		admin_desktop_timezone_hover_help: "Du kan angive, om brugerne skal se et tidsstempel, der er baseret på deres egen lokale tidszone, eller om alle brugere skal se det samme tidsstempel.<br/><br/>Denne indstilling ændrer ikke tidsstemplet i opbevaringsstedet. Men den indstilling, du vælger, bestemmer den tidszone, der bruges til at oprette tidsstemplet i opbevaringsstedet, når brugere tilføjer eller ændrer elementer.",
		admin_desktop_mobile_feature_display_label: "Fremvisning",
		admin_desktop_mobile_feature_icon_file_label: "Ikonfil",
		admin_mobile_feature_dialog_icon_file_label: "Ikonfil:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Navn",
		admin_desktop_mobile_select_feature_label: "Vælg funktion",
		admin_desktop_mobile_feature_icon_label: "Funktionsikon",
		admin_desktop_share_admin_none: "Administrator ikke angivet.",
		admin_desktop_share_admin_edit_label: "Angiv administrator...",
		admin_browse_icon: "Ikonen Gennemse",
		admin_search_icon: "Ikonen Søg",
		admin_favorites_icon: "Ikonen Foretrukne",
		admin_casesearch_icon: "Ikonen Store/små bogstaver",
		admin_datacap_icon: "Ikonen Datacap",
		admin_system_defined: "Systemdefineret",
		admin_icon_file_placeholder_text: "Filplacering (f.eks. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Rod",
		admin_folder_default: "Standard",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Værktøjslinjer",
		admin_menu_context_menus: "Kontekstmenuer",
		admin_menu_office_toolbars: "Kommandoer på Microsoft Office-bånd",
		admin_menu_office_menus: "Kontekstmenuer i Microsoft Office",

		admin_file_name_label: "Filnavn:",
		admin_exportconfiguration_security_label: "Inkludér brugere og grupper med tilladelse til at bruge denne arbejdsplads",
		admin_exportconfiguration_instruction: "Du kan eksportere dine arbejdspladser inkl. konfigurationer af opbevaringssteder og plugins med tilknytning til valgte arbejdspladser, til en fil, som du kan importere til en anden forekomst af IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Eksportér arbejdsplads",
		admin_exportconfiguration_button_label: "Eksportér",
		admin_dialog_select_all: "Vælg alle",
		admin_dialog_deselect_all: "Ryd alle",

		admin_importconfiguration_instruction: "Elementerne i den valgte konfigurationsfil bliver importeret til dette system. Men hvis der allerede findes et element med samme id på systemet, skal du beslutte, om du vil bevare eller overskrive elementet.",
		admin_importconfiguration_dialog_label: "Importér arbejdsplads",
		admin_importconfiguration_reason_dialog_label: "Importér redigeringsårsager",
		admin_importconfiguration_button_label: "Importér",
		admin_to_be_imported: "Konfigurationselement, der skal importeres",
		admin_on_target_system: "Eksisterende element på målsystem",
		admin_import_short_warning_message: "Følgende elementer findes allerede på systemet. Vælg de elementer, du vil erstatte på systemet:",
		admin_import_warning_message: "Følgende konfigurationselementer har samme id'er som elementer, der findes på målsystemet. Vælg kun de elementer, du vil importere og overskrive på målsystemet.<br /><br />Hvis du ikke vil overskrive et konfigurationselement, skal du oprette en kopi af elementet på den forekomst, hvorfra du eksporterede arbejdspladsen, give det en anden id og tilknytte det til arbejdspladsen. Eksportér arbejdspladsen igen, og importér derefter arbejdspladsen på denne forekomst.",
		admin_choose_file_to_import_label: "Vælg fil til import:",
		admin_download_imported_log: "Download rapport",
		admin_desktop_import_summary: "Importoversigt for arbejdsplads",
		admin_reason_import_summary: "Importoversigt for redigeringsårsager",
		admin_rba_import_summary: "Importoversigt for administrationsrolle",
		admin_import_open_tabs_checking: "Før du kan importere arbejdspladser, skal du lukke alle andre skilleblade end skillebladet <bold>Arbejdspladser</bold> i administrationsværktøjet.",
		admin_import_no_conflict: "Følgende elementer bliver importeret:",
		admin_desktop_invalid: "Ugyldig arbejdsplads",
		admin_desktop_warning: "Arbejdspladsen blev gemt med advarsler.",
		admin_repos_warning: "Opbevaringsstedet blev gemt med advarsler.",
		admin_config_type_icon: "Ikon for konfigurationselementtype",

		admin_approval_workflow: "Godkendelsesarbejdsgang",
		admin_approval_workflow_hover: "Brugere kan starte en foruddefineret godkendelsesarbejdsgang. Du kan deaktivere en godkendelsesarbejdsgang, hvis brugere skal kunne starte en tilpasset godkendelsesarbejdsgang, som er defineret ved et abonnement. En godkendelsesarbejdsgang er som standard aktiveret.<br><br><b>Vigtigt:</b> Hvis du aktiverer en godkendelsesarbejdsgang, skal du sikre, at en af eller begge de foruddefinerede arbejdsgangsdefinitioner (ICNParallelDocumentApproval.pep og ICNSequentialDocumentApproval.pep) tilføjes til opbevaringsstedet og overføres til indholdsbehandlingsfunktionen.",

		admin_cannot_add_desktop_members_error: "Du kan ikke angive de brugere og grupper, der har adgang til arbejdspladsen.",
		admin_cannot_add_desktop_members_error_explanation: "Du har ikke de rigtige tilladelser til at kunne hente bruger- og gruppeinformation.",
		admin_cannot_add_desktop_members_error_userResponse: "Log på med et andet brugernavn, eller bed IBM Content Manager-systemadministratoren om at give dig privilegiet UserACLOwner, som er påkrævet for at kunne hente bruger- og gruppeinformation.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Du kan ikke vælge brugere og grupper",
		admin_cannot_select_users_groups_error_explanation: "Du har ikke de rigtige tilladelser til at kunne hente bruger- og gruppeinformation.",
		admin_cannot_select_users_groups_error_userResponse: "Log på med et andet brugernavn, eller bed IBM Content Manager-systemadministratoren om at give dig privilegiet UserACLOwner, som er påkrævet for at kunne hente bruger- og gruppeinformation.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2-klienten findes ikke.",
		oauth_client_not_found_error_explanation: "OAuth2-klient-id'en ${0} findes ikke.",
		oauth_client_not_found_error_userResponse: "Kontakt systemadministratoren og oplys om, at OAuth2-klient-id'en ikke findes.",
		oauth_client_not_found_error_adminResponse: "Gennemse konfigurationen for opbevaringsstedet, og undersøg, om det indeholder den korrekte OAuth2-klient-id.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "klient-id",

		oauth_login_failed_error: "Logon til opbevaringsstedet blev ikke udført.",
		oauth_login_failed_error_explanation: "Fejl under forsøg på at logge på opbevaringsstedet ${0}.",
		oauth_login_failed_error_userResponse: "Kontrollér, at den angivne bruger-id og kodeordet er korrekt, og prøv at logge på igen.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "opbevaringssteds_id",

		oauth_error_return_error: "Der er opstået en fejl under forsøg på at logge på ${0}.",
		oauth_error_return_error_explanation: "Der opstod en fejl under forsøg på ${0}-validering.",
		oauth_error_return_error_userResponse: "Kontakt systemadministratoren med følgende oplysninger: Fejl-id: ${0}-valideringsforsøget blev ikke udført, og følgende fejlmeddelelse blev returneret: <br>${1}<br><b>fejl:</b> ${2}.<br><b>beskrivelse:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Der findes flere oplysninger om fejlen i webapplikationsserverens logfiler. Der er flere oplysninger om logfiler under &quot;IBM Content Navigator log files&quot; i IBM Knowledge Center. Brug oplysningerne i ${0}-valideringsforsøget til at forsøge at rette problemet, og kontrollér, at OAuth2 er aktiveret.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth-målapplikation",
		oauth_error_return_error_1: "fejl_meddelelse",
		oauth_error_return_error_2: "fejl",
		oauth_error_return_error_3: "fejl_beskrivelse",

		oauth_error_unknown: "Ukendt OAuth-fejlmeddelelse",

		delete_share_permission_error: "Delingen blev ikke slettet.",
		delete_share_permission_error_explanation: "Du har ikke de korrekte tilladelser til at slette delingen.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Du kan ikke dele dette element.",
		class_not_support_share_error_explanation: "Klassen ${0} er ikke defineret til at støtte deling.",
		class_not_support_share_error_0: "klasse_navn",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Du kan ikke dele dette element.",
		rbr_not_support_share_error_explanation: "Der er tilføjet følsomme oplysninger til dette element.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Den enhed, som brugeren forsøger at logge på fra, har ikke ret til at anvende brugerens konto.",
		box_oauth_error_invalid_request: "Der mangler en påkrævet parameter i anmodningen, den indeholder en ugyldig parameterværdi, den indeholder en parameter flere gange, eller den er på anden måde forkert udformet.",
		box_oauth_error_unsupported_response_type: "Autorisationsserveren understøtter ikke hentning af en autorisationskode vha. denne metode. Kontrollér værdien af kodeparameteren i din anmodning.",
		box_oauth_error_access_denied: "Ressourceejeren eller autorisationsserveren har afvist anmodningen.",
		box_oauth_error_temporarily_unavailable: "Din enhed er begrænset i forhold til mængde. Du må enten reducere mængden af autorisationsanmodninger eller vente lidt.",
		box_oauth_error_unknown: "Ukendt Box-fejlmeddelelse.",

		admin_default_search_type: "Type af standardsøgning",
		admin_default_search_type_hover: "Angiv, hvilken indstilling der skal vælges som standard i feltet <b>Søg efter</b> på menuen <b>Søgeparametre</b>.",
		admin_default_search_type_documents: "Dokumenter",
		admin_default_search_type_folders: "Foldere",
		admin_default_search_type_folders_and_documents: "Dokumenter og foldere",

		admin_restricted_search_type: "Tillad søgning i",
		admin_restricted_search_type_hover: "Som standard kan brugere søge på både dokumenter og foldere. Hvis du vil skjule søgeparameteren og begrænse søgningerne til alene dokumenter, skal du vælge Dokumenter og fravælge Foldere. </br>,</br> Hvis du tillader søgning på dokumenter og foldere, skal du vælge standardvalget for at få vist, når søgevinduet åbnes.",
		admin_restricted_search_type_documents: "Dokumenter",
		admin_restricted_search_type_folders: "Foldere",
		admin_restricted_search_type_folders_and_documents: "Dokumenter og foldere",

		admin_default_search_version: "Version af standardsøgning",
		admin_default_search_version_hover: "Angiv, hvilken indstilling der skal vælges som standard i feltet <b>Version</b> på menuen <b>Søgeparametre</b>.",

		admin_all_classes_search: "Søg i alle klasser",
		admin_all_classes_search_hover: "Angiv, om brugerne må søge i alle klasser, og hvad der i så fald skal være inkluderet i dokumentsøgninger.",
		admin_all_classes_search_removed_hover: "Mulighederne for søgning i alle klasser er ikke tilgængelige, fordi parameteren context-param allPseudoClassHidden i Navigator-applikationens web.xml er angivet til sand.",
		admin_all_classes_search_hide: "Fjern mulighed for at søge i alle klasser",
		admin_all_classes_search_documents_only_documents: "En dokumentsøgning inkluderer kun dokumenter, gemte søgninger og indgangsskabeloner",
		admin_all_classes_search_documents_non_folders: "En dokumentsøgning inkluderer alle elementer, der ikke er foldere",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Træstruktur:",
		admin_feature_config_tree_view_hoverhelp: "Angiv, om brugere kan få adgang til opbevaringsstedets folderliste via delvinduet Gennemse. Hvis du skjuler delvinduet Gennemse, skal brugerne benytte indholdslisten til at navigere til foldere i opbevaringsstedet.",
		admin_feature_config_selected_repositories_label: "Opbevaringssteder:",
		admin_feature_config_selected_repositories_hoverhelp: "Vælg de opbevaringssteder, brugere har adgang til i denne funktion.",
		admin_feature_config_selected_repositories_select_state_hdr: "Vælg opbevaringssted",
		admin_feature_config_selected_repositories_name_hdr: "Navn på opbevaringssted",
		admin_feature_config_selected_repositories_show_hdr: "Vis",
		admin_feature_config_invalid_icon_title: "Funktionen mangler nogle påkrævede indstillinger",
		admin_feature_config_view_select_hdr: "Vælg oversigt",
		admin_feature_config_view_hdr: "Oversigt",
		admin_feature_config_view: "Oversigt",
		admin_feature_config_views: "Oversigter:",
		admin_feature_config_views_hoverhelp: "Angiv, hvilke oversigter brugere kan benytte til indholdslisten. Oversigterne vises i den rækkefølge, de er angivet. Den førstvalgte oversigt er standardoversigten for funktionen.<br><br><b>Vigtigt:</b> Hvis du aktiverer oversigten Filmklip, skal du konfigurere fremviseren til HTML-konvertering for at kunne se dokumenter.",

		admin_custom_dialog_name: "Navn:",
		admin_custom_dialog_value: "Værdi:",
		admin_custom_setting_name_hover: "Angiv navnet på den Daeja ViewONE-indstilling, du vil tilføje til din konfiguration. I dokumentationen til Daeja ViewONE finder du flere oplysninger om konfigurationsindstillinger.",
		admin_custom_setting_value_hover: "Angiv den værdi, du vil bruge til Daeja ViewONE-konfigurationsindstillingerne. I dokumentationen til Daeja ViewONE finder du flere oplysninger om gyldige værdier til konfigurationsindstillingerne.",

		entry_template_name_required_message: "Navnefeltet i Indstillinger for indgangsskabelon er påkrævet.",
		entry_template_name_invalid_message: "Navnefeltet i Indstillinger for indgangsskabelon t må ikke indeholde følgende tegn: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Når bestemte brugere og grupper er valgt til feltet Del med i Indstillinger for indgangsskabelon, skal du angive mindst én bruger eller gruppe.",
		entry_template_no_permission_to_save_to_teamspace_message: "Du har ikke tilladelse til at tilføje indgangsskabeloner til den teamplads (${0}), som blev valgt fra Gem i, i Indstillinger for indgangsskabelon.",
		entry_template_save_in_destination_required_message: "Du skal angive en standardplacering for lagring i afsnittet <b>Angiv placering for elementlagring</b>.",
		entry_template_save_in_destination_must_select_folder: "Hvis du vil skjule feltet <b>Gem i</b> og kræve, at brugere skal tilføje nye elementer til en folder, skal du vælge en folder i feltet <b>Standardplacering for Gem i</b> i afsnittet <b>Angiv placering for elementlagring</b>.",
		entry_template_what_to_save_required_message: "Vælg mindst en indstilling, for hvad du vil gemme i Angiv valg.",
		entry_template_custom_workflow_empty_message: "Hvis du vælger <b>Tilpasset arbejdsgang...</b>, skal du søge efter og vælge den arbejdsgang, du vil bruge.",

		entry_template_new: "Ny indgangsskabelon",
		entry_template_name_hover: "Navnet på indgangsskabelonen må ikke indeholde følgende tegn: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Navnet på indgangsskabelonen må ikke indeholder nogen af følgende tegn: * \\ / : ? \" < > |",
		entry_template_description_hover: "Angiv en beskrivelse, så brugerne kan skelne mellem denne indgangsskabelon og de andre indgangsskabeloner.",
		entry_tempalte_save_in_hover: "Angiv, hvor du vil gemme indgangsskabelonen.<br><br><b>Begrænsning:</b> Hvis du gemmer indgangsskabelonen i en teamplads, kan du kun bruge indgangsskabelonen i teampladsen.",
		entry_template_inherit_hover: "Hvis du vælger denne indstilling, tilføjes sikkerhedsindstillingerne for den overordnede folder til listen over brugere og grupper, som indgangsskabelonen deles med.",
		entry_template_builder_aria_label: "Byggeprogram for indgangsskabeloner",
		entry_template_builder_layout_aria_label: "Byggeprogram for indgangsskabeloner - egenskaber",

		entry_template_settings_document: "Definér indgangsskabelonen",
		entry_template_settings_folder: "Angiv placering for elementlagring",
		entry_template_settings_folder_intro: "Angiv, hvor de elementerne, der tilføjes ved hjælp af denne indgangsskabelon, skal gemmes.",
		entry_template_settings_properties: "Angiv elementegenskaber",
		entry_template_settings_properties_intro: "Du kan angive standardværdier eller foruddefinerede værdier for de elementer, der tilføjes ved hjælp af denne indgangsskabelon. Du kan desuden ændre layoutet af egenskaberne for at styre, hvilke egenskaber der vises samt den rækkefølge, de vises i.",
		entry_template_settings_workflow: "Konfigurér en arbejdsgang for elementet",
		entty_template_settings_workflow_intro: "Du kan angive om en arbejdsgang skal startes, når elementer tilføjes ved hjælp af denne indgangsskabelon.",
		entry_template_settings_security: "Angiv elementsikkerhed",
		entry_template_settings_security_intro: "Du kan angive standardsikkerhed eller foruddefineret sikkerhed for de elementer, der tilføjes ved hjælp af denne indgangsskabelon. Brugere med de relevante tilladelser kan muligvis ændre sikkerheden for elementet, når det først er tilføjet.",
		entry_template_settings_options: "Angiv indstillinger for elementet",
		entry_template_xt_warning: "Når ændringerne til denne indgangsskabelon gemmes, konverteres den fra en IBM Workplace XT-indgangsskabelon til en IBM Content Navigator-indgangsskabelon. IBM Workplace XT understøtter ikke IBM Content Navigator-indgangsskabeloner.",

		entry_template_properties_edit_layout: "Redigér layout...",
		entry_template_properties_read_only: "Skrivebeskyttet",
		entry_template_properties_hidden: "Skjult",

		entry_template_destination_show: "Vis feltet <b>Gem i</b>.",
		entry_template_destination_show_hover: "Hvis du vælger at vise feltet <b>Gem i</b>, kan brugere ændre, hvor elementer skal gemmes.",
		entry_template_destination_hide: "Skjul feltet <b>Gem i</b>",
		entry_template_destination_hide_hover: "Hvis du vælger at skjule feltet <b>Gem i</b>, kan brugere ikke ændre, hvor elementer skal gemmes.",
		entry_template_folder_save_in_default: "Standardplacering for <b>Gem i</b>:",
		entry_template_folder_save_in_default_hover: "Angiv standardplaceringen for elementer, der tilføjes ved hjælp af denne indgangsskabelon.<br><br>Den standardplacering, som du vælger, sætter begrænsninger for funktionaliteten af indgangsskabelonen på kørselstidspunktet.<ul><li>Brugere kan ikke vælge et andet opbevaringssted.</li><li>Hvis standardplaceringen er en teamplads, kan brugere ikke vælge en anden teamplads.</li></ul>Men hvis brugerne tilknytter denne indgangsskabelon til en folder, kan brugere tilsidesætte den lagringsplacering, som er konfigureret for denne indgangsskabelon.",
		entry_template_folder_restrict_choice: "Kræv, at brugere tilføjer elementer til standardplaceringen eller til en underordnet folder til standardplaceringen.",
		entry_template_folder_file_in_required: "Kræv, at brugere tilføjer nye elementer til en folder",
		entry_template_folder_file_in_required_hover: "Hvis du ikke vælger denne indstilling, kan brugere tilføje elementer til opbevaringsstedets rodfolder.<br><br><b>Begrænsning:</b> Konfigurationen af arbejdspladsen kræver muligvis, at brugere skal vælge en folder.",

		entry_template_document_type_show: "Vis feltet <b>Hvad vil du gemme?</b>",
		entry_template_document_type_show_hover: "Hvis du vælger at vise feltet <b>Hvad vil du gemme?</b>, vises de elementer, du vælger som muligheder, i feltet <b>Hvad vil du gemme?</b>.",
		entry_template_document_type_hide: "Skjul feltet <b>Hvad vil du gemme?</b>",
		entry_template_document_type_hide_hover: "Hvis du vælger at skjule feltet <b>Hvad vil du gemme?</b>, benyttes den type dokument, du vælger, altid, når brugere tilføjer dokumenter ved hjælp af denne indgangsskabelon.",
		entry_template_document_type: "Denne indgangsskabelon kan bruges til at tilføje følgende elementer:",
		entry_template_document_type_hover: "Hvis du vælger at vise feltet <b>Hvad vil du gemme?</b>, vises de elementer, du vælger som muligheder, i feltet <b>Hvad vil du gemme?</b>.<br><br>Hvis du vælger at skjule feltet <b>Hvad vil du gemme?</b>, benyttes den type dokument, du vælger, altid, når brugere tilføjer dokumenter ved hjælp af denne indgangsskabelon.",

		entry_template_misc: "Yderligere indstillinger:",
		entry_template_auto_classify_show: "Klassificér automatisk dokumentindholdet",
		entry_template_auto_classify_show_hover: "Når et dokument klassificeres i FileNet Content Manager, undersøges dokumentets indhold for at bestemme dets relevante klasse og egenskabsværdier.<br><br>Kontakt systemadministratoren for at bestemme, om indholdsklassificering er aktiveret på Content Platform Engine.<br><br>Hvis du aktiverer indstillingen, ændres dokumentets klasse og egenskaber muligvis, når en bruger tilføjer det til opbevaringsstedet.",
		entry_template_allow_duplicate_file_names: "Tillad dokumenter med ens filnavne",
		entry_template_allow_duplicate_file_names_hover: "Som standard kan du tilføje dokumenter med det samme navn til en folder i FileNet Content Manager. Du kan fjerne markeringen af denne indstilling, hvis du ønsker, at alle filer i den valgte lagringsplacering skal have entydige navne.",
		entry_template_allow_compound_documents: "Tillad, at dette dokument er det overordnede i en sammensat dokument",
		entry_template_version_show: "Vis versionsindstillinger for tilføj og tjek ind",
		entry_template_version_hide: "Skjul versionsindstillinger for tilføj og tjek ind",
		entry_template_version_to_add_as: "Standardversion, der skal tilføjes som:",
		entry_template_version_default: "Standardversionsindstilling:",
		entry_template_version_default_checked: "Overordnet version",
		entry_template_version_default_unchecked: "Underordnet version",
		entry_template_version_display: "Dokumentversion:",
		entry_template_version_display_show: "Vis",
		entry_template_version_display_hide: "Skjul",
		entry_template_version_default_add: "Standardversion, der skal tilføjes som:",

		entry_template_checkin_version_show: "Vis versionsindstillinger for tjek ind",
		entry_template_checkin_version_hide: "Skjul versionsindstillinger for indtjekning",

		entry_template_checkin_version_message_no_versions: "Versionsreglerne for den valgte klasse forhindrer brugere i at tjekke en ny version af dokumentet ind.",
		entry_template_checkin_version_message_always_version: "Versionsreglerne for den valgte klasse forhindrer brugere i at erstatte den aktuelle version af dokumentet.",

		entry_template_applied: "Brug denne indgangsskabelon, når brugere:",
		entry_template_applied_add: "Tilføjer dokumenter (påkrævet)",
		entry_template_applied_add_folder: "Opret foldere (påkrævet)",
		entry_template_applied_checkin: "Tjek ind",
		entry_template_applied_properties_group: "Vis eller redigér egenskaber:",
		entry_template_applied_properties: "I vinduet Egenskaber",
		entry_template_applied_viewer: "I miniprogrammets fremviser",
		entry_template_applied_docinfo: "I dokumentets delvindue med oplysninger",
		entry_template_applied_no_class_support: "Denne indgangsskabelon kan bruges til at tilføje elementer, men ikke til at tjekke dokumenter ind eller få vist og redigere egenskaber. Den valgte klasse skal redigeres for at understøtte disse situationer. Hvis du har behov for at bruge indgangsskabelonen i disse situationer, skal du bede din administrator om at bruge administrationsværktøjet til at ændre klassen, så den kan lagre indgangsskabelon-id'er.",
		entry_template_applied_no_child_component_support: "Den valgte klasse har underordnede komponenter, og et egenskabslayout er defineret. Egenskabslayout understøtter ikke underordnede komponenter. De underordnede komponenter bliver ikke vist for brugeren.",
		entry_template_applied_child_component: "Den valgte klasse har underordnede komponenter. De bliver vist for brugeren, men du kan ikke konfigurere de underordnede komponenter i denne indgangsskabelon.",

		entry_template_properties_show: "Vis afsnittet <b>Egenskaber</b>",
		entry_tempalte_properties_show_hover: "Hvis du vælger at vise afsnittet <b>Egenskaber</b>, kan brugere ændre alle de egenskabsværdier, der vises i den indgangsskabelon, og som ikke er skrivebeskyttet.",
		entry_template_properties_hide: "Skjul afsnittet <b>Egenskaber</b>",
		entry_template_properties_hide_hover: "Hvis du vælger at skjule afsnittet <b>Egenskaber</b>, kan brugere ikke ændre nogen af egenskabsværdierne. Indgangsskabelonen skal definere alle de værdier, du vil bruge, når elementer tilføjes ved hjælp af denne indgangsskabelon.",

		entry_template_security_show: "Vis afsnittet <b>Sikkerhed</b>",
		entry_template_security_show_hover: "Hvis du vælger at vise afsnittet <b>Sikkerhed</b>, kan de brugere, som har de relevante tilladelser, ændre sikkerheden for elementet.",
		entry_template_security_hide: "Skjul afsnittet <b>Sikkerhed</b>",
		entry_template_security_hide_hover: "Hvis du vælger at skjule afsnittet <b>Sikkerhed</b>, kan brugere ikke ændre sikkerheden for elementerne. Indgangsskabelonen skal definere alle de sikkerhedsindstillinger, du vil bruge, når elementer tilføjes ved hjælp af denne indgangsskabelon.",
		entry_template_security_policy: "Sikkerhedspolitik:",
		entry_template_security_policy_hover: "Afhængigt af den sikkerhedspolitik, du vælger, kan sikkerhedspolitikken:<br><ul><li>Tilsidesætte de tilladelser, der er angivet under <b>Angiv elementsikkerhed</b>.</li><li>Tilføje til de tilladelser, der er angivet under <b>Angiv elementsikkerhed</b>.</li></ul>",
		entry_template_security_policy_none: "Ingen sikkerhedspolitik er valgt",
		entry_template_security_inherit: "Overtag sikkerhedsindstillingerne fra den overordnede folder",
		entry_tempalte_save_in_hover: "Angiv, hvor du vil gemme indgangsskabelonen.<br><br><b>Begrænsning:</b> Hvis du gemmer indgangsskabelonen i en teamplads, kan du kun bruge indgangsskabelonen i teampladsen.",
		entry_template_security_inherit_item_security_hover: "Hvis du vælger denne indstilling, tilføjes sikkerhedsindstillingerne for den overordnede folder til de sikkerhedsindstillinger, der er defineret af en af følgende elementer:<ul><li>Den klasse, der er angivet i afsnittet <b>Angiv elementegenskaber</b></li><li>Den tilpassede sikkerhed, som du angav i afsnittet <b>Angiv elementsikkerhed</b></li></ul>",
		entry_template_security_change: "Tilsidesæt den sikkerhed, der er defineret af den valgte klasse",
		entry_template_security_change_hover: "Hvis du vælger denne indstilling, vises de sikkerhedsindstillinger, der er defineret for klassen, som standard. Du kan ændre sikkerhedsindstillingerne for indgangsskabelonen.<br><br>Hvis du vælger at vise afsnittet <b>Sikkerhed</b>, kan de brugere, som har de relevante tilladelser, ændre sikkerheden for elementet.<br><br>Hvis du vælger denne indstilling og vælger at overtage sikkerhedsindstillingerne fra den overordnede folder, tilføjes alle tilladelser, der kan overtages, til den sikkerhed, du angiver.",
		entry_template_security_default_item_security: "Tilsidesæt standardsikkerheden for den bruger, som tilføjer elementet",
		entry_template_security_policy_message_override: "Den valgte sikkerhedspolitik er konfigureret til at tilsidesætte de tilladelser, der er angivet under Angiv sikkerhed.",
		entry_template_security_policy_message_add: "Den valgte sikkerhedspolitik er konfigureret til at tilføje til de tilladelser, der er angivet under Angiv sikkerhed.",
		entry_template_security_policy_preserve_true_hover: "Bevarer direkte tilladelse",
		entry_template_security_policy_preserve_false_hover: "Bevarer ikke direkte tilladelse",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specifikke roller",
		entry_template_security_class_role_search_title: "Søg efter roller:",
		entry_template_secuirty_class_member_title: "Medlemsliste for ${0}",
		entry_template_secuirty_class_folder_only: "Disse tilladelser gælder kun for denne folder",
		entry_template_secuirty_class_folder_and_immediate_children: "Disse tilladelser gælder for denne folder og de umiddelbare underordnede, der er konfigureret til at overtage sikkerhed fra denne folder.",
		entry_template_secuirty_class_folder_and_all_children: "Disse tilladelser gælder for denne folder og for alle efterkommere, der er konfigureret til at overtage sikkerhed fra denne folder.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Disse tilladelser gælder for de umiddelbare underordnede, der er konfigureret til at overtage sikkerhed fra denne folder",
		entry_template_secuirty_class_folder_all_children_not_folder: "Disse tilladelser gælder for alle efterkommere, der er konfigureret til at overtage sikkerhed fra denne folder",

		entry_template_class_security_message_no_override: "Sikkerheden for den valgte klasse forhindrer brugere i at tilsidesætte sikkerhed.",
		entry_template_class_security_required_privileges: "<b>Vigtigt:</b>Når du tilsidesætter sikkerheden for den valgte klasse, skal de brugere, som tilføjer elementer ved hjælp af denne indgangsskabelon, have ItemSetACL- og UserACLOwner-privilegier.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Sekventielt arbejdsgangsmønster",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Parallelt arbejdsgangsmønster",
		entry_template_workflow_type_existing: "Tilpasset arbejdsgang...",
		entry_template_workflow_launch_prompt: "Spørg brugere, om arbejdsgangen skal startes",
		entry_template_workflow_launch_auto: "Start arbejdsgangen automatisk",
		entry_template_workflow_modify_launch: "Tillad brugere at ændre starttrinnet",
		entry_template_workflow_modify_launch_hover: "Vælg denne indstilling, hvis du vil tillade brugere at ændre, hvordan arbejdsgangen starter.",

		entry_template_optionsButton_title: "Revidér",
		entry_template_optionsButton_readonly_title: "Vis tilknytning",
		entry_template_optionsDialog_title: "Indstillinger for foldertilknytning",
		entry_template_removeButton_title: "Fjern",
		entry_template_addButton_title: "Tilføj",
		entry_template_selected_entry_templates: "Valgte indgangsskabeloner",
		entry_template_docs_added_to_template_destination: "Dokumenter tilføjes til den destination, der er angivet i indgangsskabelonen.",
		entry_template_docs_added_to_other_object_store: "Denne indgangsskabelon tilføjer elementer til ${0}-objektlageret.",
		entry_template_inherited_entry_templates_label: "Jeg vil: ",
		entry_template_inherited_entry_templates: "Overtage indgangsskabelontilknytninger fra folder: ",
		entry_template_inherited_entry_templates_not: "Oprette nye tilknytninger for denne folder",
		entry_template_inherited_folder_path: "Indgangsskabelonerne i listen over valgte indgangsskabeloner tilknyttes følgende folder: ${0}. <br> Stien til folderen er ${1}.",
		entry_template_folder_associations_title: "Tilknyt indgangsskabeloner",
		entry_template_folder_associations_intro: "Når du tilknytter en indgangsskabelon til en folder, skal brugere benytte indgangsskabelonen til at tilføje elementer til folderen. Hvis du tilknytter flere indgangsskabeloner til en folder, kan brugere vælge, hvilken indgangsskabelon de vil bruge.",
		entry_tempalte_folder_associations_entrytemplate: "Indgangsskabelon: ",
		entry_template_avaliable_entry_templates: "Tilgængelige indgangsskabeloner",
		entry_template_fileTypes_intro_title: "Tilladte filtyper:",
		entry_template_fileTypes_intro: "Som standard kan en indgangsskabelon bruges til at tilføje alle typer dokumenter til opbevaringsstedet. Men hvis du vælger en eller flere filtyper, er indgangsskabelonerne kun til rådighed, når brugere tilføjer dokumenter, der svarer til en af de angivne filtyper.",
		entry_template_fileTypes: "Filtyper",
		entry_template_fileType_error: "Ugyldige filtyper er valgt til en eller flere indgangsskabelontilknytninger. Du skal fjerne de ugyldige filtyper, før disse skabelontilknytninger kan gemmes.",
		entry_template_fileTypes_any_type_of_file: " Alle filtyper",
		entry_template_description_label: "Beskrivelse",
		entry_template_ItemInfoPrefix: "Tilknyt til: ",
		entry_template_TargetObjectStoreName: "Målobjektlager",
		entry_template_class: "Klasse",
		entry_template_current_folder_as_parent: "Brug folder som destination",
		entry_template_view_minetypes: "Vis MIME-typer",
		entry_template_avaliable_MIME_types: "Tilgængelige filtyper",
		entry_template_selected_MIME_types: "Valgte filtyper",
		entry_template_MIME_type_column: "kategorinavn for filtype",
		entry_template_file_type_not_existing: "Fjern de ugyldige filtyper.",
		entry_template_MIME_types: "MIME-typer:",
		entry_template_MIME_types_info_dialog_title: "MIME-typerne for",
		entry_template_destination_label: "Tilføj dokumenter til: ",
		entry_template_destination_help: "Angiv, hvor dokumenter gemmes på opbevaringsstedet, når brugere tilføjer dokumenter til denne folder ved hjælp af den valgte indgangsskabelon.",
		entry_template_radioButton_folder_destination: "Valgt folder",
		entry_template_radioButton_template_destination: "Destination angivet i indgangsskabelon",
		entry_tempalte_teamspace_default: "Standardindgangsskabelon",
		entry_template_folder_associations_save_new: "Du har ændret nogle tilknytninger til indgangsskabeloner. Vil du lukke vinduet uden at gemme dine ændringer?",
		entry_template_mode_binding_label: "Egenskaber",
		entry_template_columns_className: "Klassenavn",
		entry_template_columns_type: "Skabelontype",
		entry_template_columns_workflow: "Navn på arbejdsgang",
		entry_template_columns_destination: "Destination",
		entry_template_association_less_than_record: "Der er ${0} indgangsskabeloner, som ikke vises i Valgte indgangsskabeloner. Du har ikke tilladelser til at få dem vist. Eller også er de slettet. Kontakt systemadministratoren for at få flere oplysninger.",
		/* Request */

		progress_message_general: "Arbejder...",
		cancel_message_general: "Handlingen er annulleret.",
		ie8_not_supported_browser: "IE8 er ikke en understøttet browser.",
		progress_message_getDesktop: "Indlæser arbejdsplads...",
		progress_message_getActions: "Indlæser handlinger...",
		progress_message_getViewers: "Indlæser arbejdsplads...",
		progress_message_logon: "Logger på...",
		progress_message_logoff: "Logger af...",
		progress_message_getContentClasses: "Henter klasser...",
		progress_message_openContentClass: "Henter klasseoplysninger...",
		progress_message_od_getCabinets: "Henter kabinetter...",
		progress_message_getSearchTemplates: "Henter søgninger...",
		progress_message_od_getTemplates: "Henter foldere...",
		progress_message_od_openCabinet: "Henter foldere...",
		progress_message_openSearchTemplate: "Åbner søgning...",
		progress_message_od_openTemplate: "Åbner folder...",

		progress_message_getWorklists: "Henter arbejdslister...",
		progress_message_getWorkItems: "Henter arbejdselementer...",
		progress_message_getNextWorkItems: "Henter arbejdselementer...",
		progress_message_getStepParameters: "Henter oplysninger om arbejdselement...",
		progress_message_getStepAttachmentItems: "Henter oplysninger om vedhæftning...",
		progress_message_getDependentParameters: "Henter egenskabsoplysninger...",

		progress_message_p8_getProcessApplicationSpaces: "Henter applikationspladser...",
		progress_message_p8_getProcessRoles: "Henter procesroller...",
		progress_message_p8_getProcessInbaskets: "Henter indbakker...",
		progress_message_p8_getProcessorInformation: "Henter procesoplysninger...",
		progress_message_p8_getFilterCriteria: "Henter indbakkefiltre...",
		progress_message_p8_getLaunchParameters: "Henter oplysninger om arbejdselement...",
		progress_message_p8_getStepAttachments: "Henter arbejdselementvedhæftninger...",
		progress_message_p8_getSubscriptions: "Henter arbejdsgangsabonnementer...",
		progress_message_p8_getTrackerParameters: "Henter oplysninger om arbejdselement...",
		progress_message_p8_getTrackerHistory: "Henter historik for arbejdselement...",
		progress_message_p8_getTrackerMilestones: "Henter milepæle for arbejdselement...",
		progress_message_p8_completeStep: "Færdiggør arbejdselement...",
		progress_message_p8_moveToInbox: "Flytter element til indbakke...",
		progress_message_p8_returnToSender: "Returnerer arbejdselement...",
		progress_message_p8_reassign: "Tilknytter arbejdselement igen...",
		progress_message_p8_launchWorkflow: "Starter arbejdsgang...",
		progress_message_p8_getTransferedWorkflows: "Henter arbejdsgangsoplysninger...",

		progress_message_cm_getProcesses: "Henter arbejdsgangsoplysninger...",
		progress_message_cm_completeStep: "Fortsætter arbejdselement...",
		progress_message_cm_getItemProcessInformation: "Henter arbejdsgangsoplysninger...",

		progress_message_search: "Søger...",
		cancel_message_search: "Søgningen er annulleret.",
		progress_message_getContentItems: "Henter oplysninger om element...",
		progress_message_openFolder: "Åbner folder...",
		progress_message_addItem: "Opretter element...",
		progress_message_checkIn: "Tjekker element ind...",
		progress_message_changePassword: "Skifter kodeord...",
		progress_message_getDefaultInstancePermissions: "Henter standardtilladelser...",
		progress_message_openItem: "Henter oplysninger om element...",
		progress_message_saveItem: "Gemmer oplysninger om element...",
		progress_message_getPermissions: "Henter tilladelser...",
		progress_message_getEntryTemplates: "Henter indgangsskabeloner...",
		progress_message_openEntryTemplate: "Åbner indgangsskabelon...",
		progress_message_getFavorites: "Henter foretrukne...",
		progress_message_getFoldersFiledIn: "Henter foldere...",
		progress_message_getDocumentVersions: "Henter versioner...",
		progress_message_getDependentAttributeInfo: "Henter attributoplysninger...",
		progress_message_packageForDownload: "Pakker til downloadning...",
		progress_message_convertDocument: "Konverterer indhold...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Henter indholdstype...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Tilføjer dokument...",

		progress_message_desktop_reload: "Klienten genindlæser arbejdspladsen.<br>Du bliver muligvis bedt om at logge på igen.",
		progress_message_email: "Sender e-mail...",
		cancel_message_email: "E-mailen er annulleret.",

		progress_message_p8_getOfficeOnlineTemplates: "Henter Office-skabeloner...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Træ med foretrukne",
		favorites_content_list_label: "Indholdsliste for foretrukne",
		syncItems_tree_label: "Træ med Mine synkroniserede filer",
		syncItems_content_list_label: "Indholdsliste for Mine synkroniserede filer",
		my_checkouts_content_list_label: "Indholdsliste for Mine udtjekninger",
		browse_tree_label: "Gennemse træ",
		browse_content_list_label: "Gennemse indholdsliste",
		repository_selector_label: "Valg af opbevaringssted",
		teamspaces_content_list_label: "Indholdsliste for teamplads",
		templates_content_list_label: "Indholdsliste for skabeloner",
		work_content_list_label: "Indholdsliste for arbejde",
		work_tree_label: "Arbejdstræ",
		admin_tree_label: "Administrationstræ",
		admin_tabs_label: "Administrationsskilleblade",
		search_tabs_label: "Søgeskilleblade",
		search_selector_label: "Valg af søgning",
		teamspace_browse_content_list_label: "Indholdsliste for Gennemse teamplads",
		teamspace_search_tabs_label: "Søgeskilleblade for teamplads",

		/* Desktop */
		undo_description: "Fortryd ${0}",
		redo_description: "Fortryd igen ${0}",

		/* Application Tabs */
		home: "Hjem",
		repository: "Opbevaringssted",
		repository_type: "Opbevaringsstedstype:",
		repository_type_header: "Opbevaringsstedstype",
		repository_type_any: "Alle opbevaringssteder",
		repository_type_contains_label: "Opbevaringsstedstypen indeholder",
		document_info: "Dokumentoplysninger",
		team: "Team",
		administration: "Administration",

		/* Home Page */
		recent_activity: "Seneste aktivitet",
		repos_and_wrksp: "Opbevaringssteder og teampladser",
		workspaces: "Teampladser",
		repositories: "Opbevaringssteder",
		templates: "Skabeloner",
		favorites: "Foretrukne",
		my_checkouts: "Mine udtjekninger",
		mySyncedFiles: "Mine synkroniserede filer",
		links: "Link",
		name_label: "Navn",
		description_label: "Beskrivelse:",
		type_label: "Type:",
		type_heading: "Type",
		type_id_label: "Type-id",
		server_type_icon: "Ikon for servertype",
		server_type_heading: "Servertype",
		server_type: "Servertype",
		port_heading: "Portnummer",
		port_label: "Portnummer:",
		server_name_heading: "Servernavn",
		server_label: "Servernavn:",
		server_url_label: "Server-URL:",
		id_label: "Id:",
		id_heading: "Id",
		connected_label: "Forbindelse oprettet:",
		repository_label: "Opbevaringssted",
		modified_label: "Ændret af:",
		modified_date_label: "Ændret den:",
		status_label: "Status:",
		last_modified_label: "Sidst ændret af:",

		modifier: "Ændret af",
		modified_date: "Ændret den",

		/* Favorites */
		new_favorite_label: "Tilføj til foretrukne",
		edit_favorite_label: "Omdøb foretrukken",
		remove_favorite_label: "Fjern fra foretrukne",
		missing_alias_message: "Du skal angive et navn.",
		sync_favorite_enable_hover: "Elementet er aktiveret for synkronisering.",
		sync_favorite_disable_hover: "Dette element skal ikke synkroniseres.",
		sync_favorite_sync_unavailable_hover: "Synkronisering er ikke tilgængelig for denne objekttype.",
		sync_enable_label: "Synkronisér dette element",
		sync_enable_label_hover: "Dette element synkroniseres til dine enheder.",
		delete_favorite_confirmation_question: "Vil du fjerne elementet fra dine foretrukne?",
		alias_label: "Navn:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Det valgte element findes allerede i dine foretrukne.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Dette element kan tilføjes til listen over foretrukne.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Du kan kun gemme ${0} foretrukne.",
		add_favorite_max_reached_response: "Hvis du vil tilføje elementet til din liste over foretrukne, skal du slette en eksisterende foretrukken, før du kan tilføje dette element.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "De valgte dokumenter kan ikke konverteres til PDF.",
		download_as_pdf_max_content_error_explanation: "Du kan kun konvertere ${0} MB data til PDF. De markerede dokumenter overstiger imidlertid ${0} MB.",
		download_as_pdf_max_content_error_response: "Markér færre dokumenter, eller vælg mindre dokumenter, og download dokumenterne igen som PDF-filer.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "De valgte dokumenter kan ikke konverteres til en enkelt PDF-fil.",
		download_as_pdf_mimetype_check_error_explanation: "Hvis du vil konvertere et dokument med flere dele til en enkelt PDF-fil, skal hver del har den samme MIME-type.",
		download_as_pdf_mimetype_check_error_response: "Vælg et andet dokument, der skal konverteres til PDF.",

		/* Activity Stream */
		show_label: "Vis:",
		all_filter: "Alle",
		notifications_filter: "Beskeder",
		workitems_filter: "Arbejdselementer",
		documentes_filter: "Dokumenter",
		all_favorites_filter: "Alle foretrukne",
		folders_filter: "Foldere",
		searches_filter: "Søgninger",
		teamspaces_filter: "Teampladser",

		/* Repository */
		all_search_templates: "Alle søgninger",
		all_od_searches: "Alle søgeskabeloner",
		recent_searches: "Seneste søgninger",
		opened_searches: "Åbne søgninger",

		all_worklists: "Alle indbakker",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "En liste med alle arbejdslister",

		/* Teamspace */
		all_workspaces: "Alle teampladser",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "En liste med alle teampladser",
		workspace_title: "Teamplads",
		workspace_icon: "Ikon for teamplads",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Tilgængelig",
		workspace_stat_offline: "Ikke tilgængelig",
		workspace_stat_validate: "Kræver validering",
		workspace_stat_pendingDelete: "Ventende sletning",
		workspace_stat_deleteError: "Sletning er ikke udført",

		undefined_value: "Ikke defineret",
		undefined_reference_value: "Der er ikke defineret nogen reference.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Der er muligvis flere resultater på serveren.",
		search_all_data: "Søg i alle data.",
		search_all_teamspaces: "Søg på alle teampladser",
		teamspace_filter_results: "Viser ${0} resultater. ",
		displaying_filtered_results: "Viser filtrerede resultater. ",
		displaying_recent_results: "Viser kun de teampladser, der er ændret i løbet af de seneste ${0} dage. Du finder andre teampladser ved at filtrere listen over teampladser efter navn eller beskrivelse. ",
		clear_filter: "Ryd filter.",

		/* FolderTreeModel */
		move_item_task: "Flyt element",
		copy_item_task: "Kopiér element",
		add_item_task: "Tilføj element",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Følgende folder findes ikke: ${0}. Den kan være blevet slettet, eller folderen kan ikke åbnes fra denne oversigt. Klik på linket Mere i træstrukturoversigten for at navigere til folderen. Hvis du ikke kan få folderen vist, skal du opfriske indholdslisteoversigten.",
		more_paging_link: "mere ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Annullér",

		/* ErrorDialog */
		error_dialog_title: "Fejl",
		error_dialog_icon_tooltip: "Fejl",
		error_dialog_stack_trace_title: "Staksporing",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Bekræftelse",

		close_browser_msg: "Luk browservinduet.",

		/* MessageDialog */
		message_dialog_title: "Information",
		warning_dialog_title: "Advarsel",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Velkommen til ${0}",
		server: "Opbevaringssted:",
		username: "Brugernavn:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Der kræves et brugernavn for at logge på opbevaringsstedet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Der kræves et kodeord for at logge på opbevaringsstedet.",
		password: "Kodeord:",
		login: "Log på",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Sessionen er udløbet. Log på igen.",
		login_repository_connection_expired_message: "Forbindelsen til ${0}-opbevaringsstedet er udløbet. Log på igen.",
		login_site_connection_expired_message: "Din forbindelse til webstedet er udløbet. Log på igen.",
		login_new_server_message: "Angiv et brugernavn og kodeord for ${0}.",
		login_error_more_information_message: "Flere oplysninger",

		disconnect_box_account_user: "Afbryd Box-konto: ${0}",
		disconnect_box_account: "Afbryd Box-konto",
		disconnect_box_accounts: "Afbryd Box-konti",

		// OAuth2/Box Login
		login_ssl_connection_required: "Der kræves en SSL-forbindelse for at få adgang til Box-opbevaringssteder.",
		login_oauth_popup_blocked: "Pop op-vinduet er blokeret. Du skal muligvis fjerne blokering af pop op-vinduer i din browser for at kunne logge på.",
		login_oauth_click_here: "Klik her, hvis du ikke bliver omdirigeret inden for 5 sekunder.",
		login_oauth_title: "Log på",
		login_oauth_grant_intro: "Tildel validering for ${0}.",
		login_pane_oauth_click_here: "Klik her for at logge på.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Vil du logge af webklienten?",
		logout_confirmation_button: "Log ud",

		/* ChangeLocaleDialog */
		change_locale: "Skift indstillinger for sprog og sprogkonvention",
		change_locale_use_browser_language: "Brug browserens sprogindstilling (standard)",
		change_locale_use_browser_locale: "Brug browserens sprogindstilling (standard)",
		change_locale_description: "Hvis du sletter browserens cookier, skal du angive indstillingerne for sprog og sprogkonvention igen.",
		change_locale_language_locale: "Applikationssprog:",
		change_locale_language_locale_hover: "Denne indstilling ændrer sprog for teksten i webklienten men ændrer ikke sprog for dokumenterne i applikationen.<br><br>Standardindstillingen bruger det sprog, der er angivet i konfigurationsindstillingerne for webbrowseren.",
		change_locale_value_format_locale: "Applikationssprogkonvention:",
		change_locale_value_format_locale_hover: "Sprogkonventionen bestemmer formatet på datoer, klokkeslæt og tal i webklienten.<br><br>Standardindstillingen bruger de formater, der er knyttet til det sprog, der er angivet i konfigurationsindstillingerne for webbrowseren.",
		change_locale_for_office: "Indstillinger for tovejstekst:",
		change_locale_bidi_support_flag: "Aktivér støtte for BIDI-sprog",
		change_locale_bidi_support_flag_hover: "Når støtte for BIDI-sprog er aktiveret, kan brugeren angive tekstretning for inputfelter. Den tekst, der angives for elementer, såsom foldere, vises i samme retning, som den er angivet.",
		change_locale_base_text_direction: "Standardtekstretning for indhold:",
		change_locale_base_text_direction_hover: "Angiv retningen på den tekst, der angives i inputfelter. Dette styrer også fremvisningsretningen for etiketter, der angives af brugeren, såsom foldernavne.",
		change_locale_calendar_type: "Kalendertype:",
		change_locale_calendar_type_hover: "Angiv den type kalender, der skal benyttes for brugersessionen.",
		change_locale_base_text_direction_default: "Standard",
		change_locale_base_text_direction_ltr: "Venstre mod højre",
		change_locale_base_text_direction_rtl: "Højre mod venstre",
		change_locale_base_text_direction_contextual: "Kontekstafhængig",
		change_locale_calendar_type_gregorian: "Gregoriansk",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebraisk",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Skift kodeord",
		change_password_title: "Skift kodeord",
		change_password_expired_title: "Kodeord udløbet",
		change_password_message: "Angiv et nyt kodeord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Dit kodeord er udløbet. Angiv et nyt kodeord.",
		change_password_password_rules: "Regler for kodeord",
		change_password_old_password: "Gammelt kodeord:",
		change_password_new_password: "Nyt kodeord:",
		change_password_confirm_password: "Bekræft kodeord:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Du skal indtaste det gamle kodeord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Du skal indtaste et nyt kodeord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Du skal bekræfte det nye kodeord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Kodeordene skal stemme overens.",

		/* GlobalToolbar */
		actions: "Handlinger",
		actions_label: "Handlinger:",
		open_actions_label: "Åbne handlinger:",

		/* About Dialog */
		about_dialog_title: "Om",
		about_product_name_label: "Produktnavn: ",
		about_product_version_label: "Version: ",
		about_product_build_label: "Build: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All rights reserved.   Varemærkerne IBM og IBM-logoet tilhører International Business Machine Corporation. Dette Program licenseres under vilkårene i den licensaftale, der følger med Programmet. Licensaftalen kan være placeret i en programbiblioteksmappe eller i et bibliotek ved navn \"License\" eller \"Non_IBM_License\", eller den kan være leveret som en trykt licensaftale. Læs denne aftale grundigt igennem, inden du anvender Programmet. Ved at tage dette Program i brug, accepterer du disse vilkår. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Vil du slette det valgte element?",
		delete_single_folder_confirmation_question: "Vil du slette folderen ${0}?",
		delete_multiple_confirmation_question: "Vil du slette de valgte elementer?<br>${0} elementer valgt.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Slet",
		search_template_delete_confirmation_question: "Vil du slette søgningen ${0}?",
		search_template_opened_delete_confirmation_question: "Søgningen ${0} er åben. Hvis du sletter søgningen, lukkes den.<br>Vil du slette denne søgning?",
		delete_multiple_opened_search_template_confirmation_question: "Følgende søgninger er åbne: ${0}.<br>Hvis du sletter søgningerne, bliver de lukket. Vil du slette søgningerne?",
		delete_large_number_items_confirmation_question: "Du har valgt at slette ${0} elementer.<br/>Det kan tage lang tid at slette et stort antal elementer.<br/>Vil du fortsætte?",
		delete_confirmation_entrytemplate: "Hvis du sletter denne indgangsskabelon, får det følgende indvirkning på de dokumenter eller foldere, der er knyttet til indgangsskabelonen:<ul><li>Elementerne vil ikke længere være tilknyttet indgangsskabelonen, og brugere vises muligvis en advarsel, når de opdaterer et element.</li><li>Alle egenskaber, der styres af indgangsskabelonen, såsom navnet eller rækkefølgen på egenskaberne, vil ikke længere være gældende for de elementer, der er tilknyttet indgangsskabelonen.</li></ul>Vil du slette denne indgangsskabelon?",
		delete_confirmation_entrytempalte_with_multi_items: "Indgangsskabeloner skal slettes individuelt. Indgangsskabelonerne er fjernet fra listen over elementer, der skal slettes. Hvis du vil slette indgangsskabelonerne, skal du slette hver indgangsskabelon separat.",

		/* Create/Apply/Remove Hold */
		hold: "Tilbageholdelse",
		createHold: "Ny tilbageholdelse",
		applyHold: "Aktivér tilbageholdelse",
		removeHold: "Fjern tilbageholdelse",
		showHolds_title: "Vis tilbageholdelser",
		applyHoldSelectText: "Vælg de tilbageholdelser, du vil aktivere for de valgte elementer.",
		availableHolds: "Tilgængelige tilbageholdelser:",
		removeHoldSelectText: "Vælg de tilbageholdelser, du vil fjerne fra de valgte elementer.",
		appliedHolds: "Aktiverede tilbageholdelser:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Opret en ny tilbageholdelse, der skal aktiveres for de valgte elementer.",
		holdName: "Navn på tilbageholdelse:",
		holdDescription: "Beskrivelse:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Du skal angive et navn på tilbageholdelsen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Det angivne navn på tilbageholdelsen findes allerede.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Et navn på en tilbageholdelse må ikke indeholde følgende tegn : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Sessionen udløber om ${0} minutter.",
		session_expire: "Session udløber",
		logoff: "Log af",
		extend_session: "Forlæng session",
		admin_custom_settings: "Yderligere indstillinger:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning er en boolesk værdi, der angiver, om advarsel for sessionsudløb er aktiveret. Standardværdien er true. sessionExpireWarningTime er et heltal mellem 2 og 5, som angiver advarselstiden for sessionsudløb.",
		admin_custom_setting_dialog_title_new: "Ny indstilling",
		admin_custom_setting_dialog_title_edit: "Redigér indstilling",
		admin_custom_setting_dialog_hover_help: "Tilføj yderligere parametre ved at angive parameternavn og -værdi. Du kan f.eks. angive “enableSessionExpireWarning” og “true”, hvis du vil aktivere advarsel for sessionsudløb.",
		admin_custom_setting_dialog_field_hover_help: "Der er flere oplysninger om parameternavne og -værdier i IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Denne værdi er obligatorisk. Værdien må ikke indeholde blanktegn og må ikke være magen til en anden.",
		admin_custom_setting_dialog_bool_valueInvalid: "Denne værdi er obligatorisk. Værdien skal være boolesk.",
		admin_custom_setting_dialog_int_valueInvalid: "Denne værdi er obligatorisk. Værdien skal være et heltal.",
		/* Add Document Dialog */
		add_document_dialog_title: "Tilføj dokument",
		add_documents_dialog_title: "Tilføj dokumenter",
		add_document_general_label: "Generelt",
		add_document_properties_label: "Egenskaber",
		add_document_properties_with_ellipsis_label: "Egenskaber...",
		add_document_security_label: "Sikkerhed",
		add_document_location_label: "Gem i:",
		add_document_type_label: "Hvad vil du gemme?",
		add_document_localfile_label: "Lokalt dokument",
		add_document_metadata_label: "Oplysninger om et dokument",
		add_document_external_label: "Link til et eksternt dokument",
		add_document_web_link_label: "Weblink",
		add_document_saved_content_label: "Brug gemt fil:",
		add_document_saved_content_choice: "Gemt fil",
		add_document_file_name_label: "Filnavn:",
		add_document_entry_template_label: "Indgangsskabelon:",
		add_document_delete_file_label: "Slet lokal fil",
		add_document_delete_file_disabled_label: "Filer, der ikke er placeret i filsporingsbiblioteket, bliver ikke slettet.",
		add_document_major_version_label: "Overordnet version",
		add_document_major_version_hover: "Angiver dokumentstatus som Frigivet. Dokumentet tilføjes til opbevaringsstedet som version 1.0. Hvis indstillingen ikke vælges, er dokumentet ikke parat til at blive frigivet, og det tilføjes som en underordnet version 0.1.",
		add_document_save_document_as_unfiled_label: "Gem ikke dokumentet i en folder",
		add_document_save_document_as_unfiled_hover: "Hvis du vælger denne indstilling, kan du kun finde dokumentet ved at søge efter det. Du kan ikke bruge funktionen Gennemse til at finde det.",
		add_document_create_new_version_label: "Opret ny version",
		add_document_replace_existing_version_label: "Erstat eksisterende version",
		add_document_start_workflow_label: "Start arbejdsgang",
		add_document_auto_classify_label: "Klassificér indholdet automatisk",
		add_document_add_label: "Tilføj",
		add_document_cancel_label: "Annullér",
		add_document_document_type_label: "Klasse",
		add_document_context_info: "De værdier, du angiver for dokumentegenskaberne, kan bruges til at finde dokumentet senere.",
		add_documents_context_info: "De værdier, du angiver for dokumenterne, kan bruges til at finde dokumenterne senere. Hvis du vil angive en anden egenskabsværdi for et dokument, skal du tilføje den separat eller redigere egenskaberne for dokumentet, efter at du har tilføjet det.",
		add_document_url_label: "URL:",
		add_document_template_description: "Skabelonbeskrivelse:",
		add_document_select_entry_template: "Angiv eller vælg en indgangsskabelon",
		add_document_no_permission_to_associations: "Du har ikke tilladelser til at bruge en indgangsskabelon",
		add_document_no_entry_template_to_use: "Ingen indgangsskabelon kan bruges til de valgte filer",
		add_document_no_entry_template_itemtype_permission: "Du kan ikke tilføje elementer til denne folder. Der skal vælges en indgangsskabelon, og du har ikke adgang til nogen af de indgangsskabeloner, der er knyttet til denne folder. Kontakt systemadministratoren, og bed om at få tildelt adgang til de indgangsskabeloner, der er knyttet til denne folder.",
		add_document_appgroup_name_label: "Applikationsgruppenavn:",
		add_document_app_name_label: "Applikationsnavn:",
		create_folder_dialog_title: "Ny folder",
		create_folder_context_info: "De værdier, du angiver for folderegenskaberne, kan bruges til at finde folderen senere.",
		create_folder_folder_name_label: "Foldernavn",
		create_folder_save_folder_as_unfiled_label: "Gem ikke folderen i en anden folder",
		create_folder_save_folder_as_unfiled_hover: "Hvis du vælger denne indstilling, kan du kun finde folderen ved at søge efter den. Du kan ikke bruge funktionen Gennemse til at finde den.",
		add_item_create_in_folder: "Opret i folder:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Et foldernavn må ikke indeholde følgende tegn: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Et foldernavn må ikke indeholde følgende tegn: \\ / . eller ..",
		invalid_box_file_name_message: "Et filnavn må ikke indeholde følgende tegn: \\ / . eller ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Et filnavn må ikke indeholde følgende tegn: \\ / : * ? \" < > |",
		external_document_placeholder: "Indtast dokumentets URL",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Farven skal angives som et 3- eller 6-cifret hexadecimalt tal, f.eks. #000 eller #000000.",
		add_document_unfiled: "${0} ikke arkiveret",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Tilføj dokument ved brug af indgangsskabelon",
		add_document_using_template_context_info: "Når du tilføjer et dokument ved brug af en indgangsskabelon, er de værdier, du angiver for dokumentet, konsistente.",
		add_documents_using_template_dialog_title: "Tilføj dokumenter ved brug af indgangsskabelon",
		add_documents_document_name_is_file_name_hint: "Filnavnet bruges til denne egenskab",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Ny folder ved brug af indgangsskabelon",
		create_folder_using_template_context_info: "Når du opretter en folder ved brug af en indgangsskabelon, er de værdier, du angiver for folderen, konsistente.",

		add_documents_batch_results_dialog_title: "Dokumenter ikke tilføjet til opbevaringsstedet",
		add_documents_batch_results_dialog_context_info: "Følgende dokumenter er ikke tilføjet til opbevaringsstedet. Vælg et dokument, og klik på Oplysninger for at få flere oplysninger om, hvorfor dokumentet ikke er tilføjet til opbevaringsstedet.",
		add_documents_batch_results_dialog_filename_col_hdr: "Filnavn",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Meddelelse",
		add_documents_batch_results_status_error: "Fejl",
		add_documents_batch_results_status_cancelled: "Annulleret",
		add_documents_batch_results_status_cancelled_msg: "Dokumentet er ikke tilføjet, fordi anmodningen blev annulleret.",

		add_documents_batch_status_title: "Tilføjer dokumenter",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Tilføjer fil ${0} af ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Fejl: ${0}",
		add_documents_batch_status_completing_msg: "Processen stopper, når dette dokument er tilføjet.",

		add_documents_status_uploading_msg: "Uploader fil ${0} af ${1}...",
		add_documents_status_adding_msg: "Tilføjer fil ${0} af ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Indgangsskabelonen er konfigureret i en anden applikation og er konfigureret til altid at erklære dokumenter som records. Denne indstilling bliver imidlertid ignoreret, fordi webklienten ikke understøtter, at dokumenter erklæres som records.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Indgangsskabelonen er konfigureret i en anden applikation og er konfigureret til at lade dig bestemme, om dokumentet skal erklæres som record. Denne indstilling bliver imidlertid ignoreret, fordi webklienten ikke understøtter, at dokumenter erklæres som records.",
		no_selection: "&lt;Vælg&gt;",

		batch_results_dialog_details_label: "Oplysninger",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Værdien er ikke gyldig. Værdien skal være en GUID (Globally Unique Identifier), f.eks. {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Værdien er ikke gyldig. Værdien skal være et tal med flydende decimaltegn, f.eks. 1,2 eller 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Værdien er ikke gyldig. Værdien skal angives i formatet ${0}, f.eks. ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Værdien er ikke gyldig. Værdien skal være en decimalværdi, f.eks. 1,2 eller 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Værdien er ikke gyldig. Værdien skal være et heltal, f.eks. 5 eller 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Værdien er ikke gyldig. Værdien kan kun indeholde alfabetiske tegn, f.eks. a-z og A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Værdien er ikke gyldig. Værdien kan kun indeholde alfanumeriske tegn, f.eks. a-z, A-Z og 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Værdien er ikke gyldig. Værdien kan kun indeholde numeriske tegn, f.eks. 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Værdien er ikke gyldig. Værdien må kun indeholde følgende tegn: a-z, A-Z, 0-9, [mellemrum] og `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Værdien er ikke gyldig. Værdien skal være en dato med følgende format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Værdien er ikke gyldig. Værdien skal være et klokkeslæt med følgende format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Værdien er ikke gyldig. Vælg en værdi fra menuen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Værdien er ikke gyldig.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Værdien er ikke gyldig. Værdien skal have følgende format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Denne værdi er obligatorisk.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Værdien er for lang. Egenskaben understøtter en maks. længde på ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Værdien er for kort. Egenskaben understøtter en minimumslængde på ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Værdien er uden for intervallet. Værdien skal være et tal med flydende decimaltegn mellem ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Værdien er uden for intervallet. Værdien skal være en decimalværdi mellem ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Værdien er uden for intervallet. Værdien skal være et heltal mellem ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Værdien skal være en dato mellem ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Værdien er uden for intervallet. Værdien skal være en dato mellem ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Værdien er uden for intervallet. Værdien skal være et klokkeslæt mellem ${0} og ${1}.",
		property_and: "og",

		property_invalidValueOrRequired: "Følgende værdi er ugyldig eller påkrævet: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Egenskaber",
		edit_properties_dialog_info: "Du kan få vist og redigere egenskaberne for dette element. Hvis du har de relevante tilladelser, kan du også ændre sikkerheden for elementet. Du kan dog ikke ændre systemegenskaber.",
		edit_properties_od_dialog_info: "Du kan få vist og redigere egenskaberne for dette element. Du kan dog ikke ændre systemegenskaber.",
		system_properties_title: "Systemegenskaber",
		custom_properties_title: "Egenskaber",
		/* Folder collaboration tab */
		box_permission_permission: "Tilladelse",
		box_permission_permissions: "Tilladelser",
		box_permission_editor: "Redaktør",
		box_permission_owner: "Ejer",
		box_permission_co_owner: "Samejer",
		box_permission_viewer_uploader: "Fremvisning, Uploadning",
		box_permission_previewer_uploader: "Forhåndsvisning, Uploadning",
		box_permission_viewer: "Fremviser",
		box_permission_previewer: "Forhåndsvisning",
		box_permission_uploader: "Uploadning",
		box_permission_add: "Tilføj",
		box_permission_upload: "Upload",
		box_permission_download: "Download",
		box_permission_preview: "Visning",
		box_permission_view: "Oversigt",
		box_permission_send_links: "Send link til kun fremvisning",
		box_permission_create_subfolders: "Opret underfoldere",
		box_permission_create_tasks: "Opret opgaver",
		box_permission_add_comments: "Tilføj kommentarer",
		box_collaboration_invite_placeholder: "Angiv navn, e-mail eller gruppe, der skal inviteres",
		box_collaboration_invite_placeholder_non_admin: "Indtast en e-mailadresse for at invitere",
		box_collaboration_invalid_email: "Angiv en gyldig e-mailadresse",
		box_collaboration_user_already_present: "Denne bruger er allerede samarbejdspartner til folderen",
		box_collaboration_user_name: "Navn",
		box_collaboration_email_address: "E-mailadresse",
		box_collaboration_date_added: "Tilføjet",
		box_collaboration_remove_collaboration: "Fjern",
		box_collaboration_remove_collaboration_title: "Slet",
		box_collaboration_no_collaborators: "Der er ingen samarbejdspartnere",
		box_collaboration_change_owner_title: "Revidér elementejer",
		box_collaboration_change_owner_prompt: "Hvis du gør denne samarbejdspartner til folderejer, bliver du selv redaktør og ejer ikke længere folderen. Samarbejdspartnere, som er blevet tilføjet direkte til denne folder, får den nu vist i deres rodfoldere. Samarbejdspartnere, der er tilføjet på det overordnede folderniveau eller over, er ikke længere samarbejdspartnere. Vil du fortsætte?",
		box_collaboration_remove_self_title: "Fjern dig selv",
		box_collaboration_remove_self_prompt: "Er du sikker på, at du vil fjerne dig selv om samarbejdspartner? Du har ikke længere adgang til denne folder.",
		box_collaboration_user: "Bruger",
		box_collaboration_group: "Gruppe",
		box_managing_users_not_configured: "Du kan ikke søge efter brugere og grupper, fordi Box-applikationen er ikke konfigureret korrekt. Hvis du vil bruge denne funktion, skal du kontakte administratoren og anmode om, at Box-applikationen bliver konfigureret til administration af brugere og grupper.",
		duplicate_value_error: "Alle værdierne i denne egenskab skal være entydige.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "De ændringer, du foretager i følgende felter, anvendes på alle de valgte elementer. Hvis du vil angive en anden egenskabsværdi for et bestemt element eller redigere sikkerheden for et element, skal du redigere egenskaberne for det enkelte element.",
		multi_edit_properties_class_label: "Klasse:",
		multi_edit_properties_items_label: "Elementnavne:",
		multi_edit_properties_properties_label: "Egenskaber:",
		multi_edit_batch_status_title: "Opdaterer egenskaber",
		multi_edit_batch_status_adding_msg: "Opdaterer element ${0} af ${1}...",
		multi_edit_batch_status_verifying_msg: "Verificerer element ${0} af ${1}...",
		multi_edit_batch_status_completing_msg: "Processen stopper, når dette element er opdateret.",
		multi_edit_batch_status_validation_completing_msg: "Processen stopper, når dette element er verificeret.",
		multi_edit_batch_results_status_error: "Fejl",
		multi_edit_batch_results_status_cancelled: "Annulleret",
		multi_edit_batch_results_status_cancelled_msg: "Elementet er ikke opdateret, fordi anmodningen blev annulleret.",
		multi_edit_batch_results_dialog_title: "Elementer ikke opdateret",
		multi_edit_batch_results_dialog_context_info: "Følgende elementer er ikke opdateret. Vælg et element, og klik på Oplysninger for at få flere oplysninger om, hvorfor elementet ikke er opdateret.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Elementnavn",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Meddelelse",
		multi_edit_batch_status_errors_msg: "Fejl: ${0}",
		multi_edit_batch_permission_error_text: "Ændringerne til egenskaberne kan ikke gemmes.",
		multi_edit_invalid_value_error: "Denne værdi er afhængig af en anden egenskabsværdi og er ikke gyldig for alle de elementer, du har valgt.",
		multi_edit_batch_permission_error_explanation: "Du kan ikke ændre egenskaberne for dette element, fordi du ikke har tilstrækkelige rettigheder.",
		multi_edit_no_modifiable_properties: "Egenskaberne for de valgte elementer kan ikke ændres. Dette kan forekomme, når et element udelukkende indeholder skrivebeskyttede egenskaber, eller når kun elementets navn eller titel kan redigeres. Når flere elementer er valgt, kan du ikke ændre navn eller titel på elementerne.",
		multi_edit_mult_classes_dialog_info: "De valgte elementer findes på forskellige opbevaringssteder eller tilhører forskellige klasser. Du kan kun redigere elementer, der findes i samme klasse eller på samme opbevaringssted. Vælg et udsnit af elementer, du vil redigere.",
		multi_edit_class_selector_class_heading: "Klasse",
		multi_edit_class_selector_entry_template_heading: "Indgangsskabelon",
		multi_edit_class_selector_repository_heading: "Opbevaringssted",
		multi_edit_class_selector_items_heading: "Elementer",
		multi_edit_some_classes_not_displayed: "Nogle af de valgte elementer er ikke inkluderet på denne liste, fordi elementerne kun indeholder skrivebeskyttede egenskaber, eller fordi elementerne findes på opbevaringssteder, der ikke understøtter redigering af egenskaber.",
		multi_edit_properties_invalid_msg: "Nogle af egenskabsværdierne er ikke gyldige for alle de valgte elementer.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Denne egenskab er skrivebeskyttet og kan ikke ændres.",
		multi_edit_append_checkbox_label: "Tilføj",
		multi_edit_append_checkbox_tooltip: "Vælg denne indstilling, hvis du vil tilføje nye egenskabsværdier til eksisterende værdier i stedet for at erstatte dem.",
		multi_edit_properties_invalid_childcomponent_msg: "Visse værdier i egenskaben ${0} for den underordnede ${1}-komponent er afhængige af andre egenskaber og er ikke længere gyldige med de valg, du foretager. Ryd værdierne i den underordnede ${1}-komponent, eller revidér egenskaberne for de elementer, du har valgt individuelt.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Eksportér egenskaber",
		export_properties_dialog_info: "Vælg de egenskaber, du vil eksportere, og angiv den rækkefølge, de skal vises i.",
		export_properties_dialog_export_button_label: "Eksportér",
		export_properties_dialog_export_raw_values: "Eksportér rå værdier",

		/* Properties */
		filter_clear_tooltip: "Ryd filteret",
		properties_new_row: "Ny",
		properties_requiredClass_document_tooltip: "Vælg et dokument. Dokumentet skal tilhøre klassen ${0}.",
		properties_requiredClass_folder_tooltip: "Vælg en folder. Folderen skal tilhøre klassen ${0}.",
		properties_dataType_tooltip: "Datatype: ${0}",
		properties_maxLength_tooltip: "Maksimumslængde: ",
		properties_minLength_tooltip: "Minimumslængde: ",
		properties_minValue_tooltip: "Minimumsværdi: ",
		properties_maxValue_tooltip: "Maksimumsværdi: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Beskrivelse: ",

		properties_type_boolean_tooltip: "Boolesk",
		properties_type_date_tooltip: "Dato",
		properties_type_time_tooltip: "Klokkeslæt",
		properties_type_timestamp_tooltip: "Tidsstempel",
		properties_type_decimal_tooltip: "Decimalværdi",
		properties_type_double_tooltip: "Tal med flydende decimaltegn",
		properties_type_short_tooltip: "Heltal",
		properties_type_integer_tooltip: "Heltal",
		properties_type_long_tooltip: "Heltal",
		properties_type_string_tooltip: "Tekststreng",
		properties_type_string_alpha_tooltip: "Alfabetisk streng",
		properties_type_string_alphanum_tooltip: "Alfanumerisk streng",
		properties_type_string_ext_tooltip: "Udvidet alfanumerisk streng",
		properties_type_string_num_tooltip: "Numerisk streng",
		properties_type_binary_tooltip: "Binær",
		properties_type_object_tooltip: "Objekt",
		properties_type_reference_tooltip: "Denne egenskab henviser til et andet element på opbevaringsstedet.",
		properties_type_guid_tooltip: "GUID (Globally Unique Identifier)",
		properties_type_group_tooltip: "Brugere og grupper",
		properties_type_user_tooltip: "Brugere",
		properties_type_childComponent_tooltip: "Underordnet komponent",

		properties_childComponent_minCardinalityOnly_tooltip: "Denne egenskab skal have mindst ${0} værdier.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Denne egenskab kan højst have ${0} værdier.",
		properties_childComponent_minMaxCardinality_tooltip: "Denne egenskab skal have mindst ${0} værdier, og kan højst have ${1} værdier.",
		properties_childComponent_noCardinality_tooltip: "Denne egenskab kan have et vilkårligt antal værdier.",

		properties_type_guid_example_tooltip: ", f.eks. {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Vælg en værdi på listen.",
		properties_single_select_choice_tooltip: "Vælg en værdi.",
		properties_multiple_select_typein_tooltip: "Angiv en eller flere værdier.",
		properties_multiple_select_choice_tooltip: "Vælg en eller flere værdier.",
		properties_not_selectable_tooltip: "Kategorien kan ikke vælges.",
		properties_none: "Ingen",
		properties_none_tooltip: "Vælg <i>Ingen</i> for at rydde den aktuelle værdi for egenskaben.",
		properties_value_empty: "Ingen værdi",
		properties_value_read_only: "Skrivebeskyttet",
		properties_clear_label: "Ryd",
		properties_clear_tooltip: "Når du rydder værdien i dette felt, ryddes værdien på opbevaringsstedet, når du har klikket på <b>Gem</b>.",
		properties_box_custom_properties: "Tilpassede egenskaber",
		properties_box_metadata_name_in_use: "Navnet anvendes allerede. Angiv et andet navn til den tilpassede egenskab.",

		properties_templates: "Skabeloner",
		properties_add_template: "Tilføj skabelon",
		properties_remove_template: "Fjern",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Tjek ind",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Tjek ind",
		checkin_cancel_label: "Annullér",
		checkin_file_name_label: "Filnavn",
		checkin_document_status_title: "Tjek dokument ind",
		checkin_document_status_uploading_msg: "Uploader fil...",
		checkin_document_status_checkingin_msg: "Tjekker fil ind...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Vælg redigeringstilstand",
		viewer_redaction_new_document_confirmation_question: "Vil du gemme redigeringen som et nyt dokument eller en lokal fil?",
		viewer_redaction_new_version_confirmation_question: "Vil du gemme redigeringen som en ny version?",
		viewer_redaction_new_version_confirmation_question_never: "Vil du gemme redigeringen som nyt indhold?",		
		viewer_redaction_new_document_button: "Ja",
		viewer_redaction_new_document_cancel_button: "Nej",
		viewer_redaction_add_document_confirmation_question: "Vil du gemme redigeringen som et nyt dokument, en ny version eller en lokal fil?",
		viewer_redaction_add_document_confirmation_question_version_never: "Vil du gemme redigeringen som et nyt dokument, nyt indhold eller en lokal fil?",
		viewer_redaction_add_document_button: "Nyt dokument",
		viewer_redaction_add_new_version_button: "Ny version",
		viewer_redaction_add_new_version_button_version_never: "Nyt indhold",
		viewer_redaction_add_local_file_button: "Lokal fil",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Vælg redigeringsårsag",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Den indgangsskabelon, der blev brugt til at tilføje dette dokument til opbevaringsstedet, findes ikke. Dokumentet tjekkes fortsat ind i opbevaringsstedet, men uden brug af indgangsskabelonen.",
		property_entry_template_not_retrieved_warning: "Den indgangsskabelon, der blev brugt til at tilføje dette dokument til opbevaringsstedet, findes ikke. Dokumentegenskaberne vises uden brug af indgangsskabelonen.",
		multi_edit_entry_template_not_found_name: "[Ikke fundet]",
		multi_edit_entry_template_not_retrieved_warning: "Den indgangsskabelon, der blev brugt til at tilføje disse elementer til opbevaringsstedet, findes ikke. Elementegenskaberne bliver ændret uden brug af indgangsskabelonen.",
		checkin_major_version_hover: "Forøger dokumentets versionsnummer med en, og angiver dokumentstatus til Frigivet. Hvis indstillingen ikke vælges, er dokumentet ikke parat til at blive frigivet, og det tjekkes ind som en underordnet version.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokumentet kan ikke tjekkes ind, da det ikke er tjekket ud.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Bruger-id'en eller kodeordet er ikke gyldigt for serveren.",
		error_bad_userid_password_userResponse: "Kontrollér, at du har indtastet bruger-id'en og kodeordet rigtigt.",
		error_bad_userid_password_adminResponse: "Følgende fejl er returneret: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "fejl_meddelelse",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Der kan ikke oprettes forbindelse til webklienten vha. følgende URL: ${0}.",
		http_send_error_explanation: "Fejlen kan skyldes et konfigurationsproblem på webapplikationsserveren eller et problem med webklientapplikationen.",
		http_send_error_userResponse: "Prøv at logge på igen. Rapportér fejlen til systemadministratoren, hvis problemet fortsætter.",
		http_send_error_adminResponse: "Følgende HTTP-fejl er returneret: ${1}.",
		http_send_error_0: "web_klient_URL",
		http_send_error_1: "HTTP_fejl",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Der kan ikke oprettes forbindelse til webklienten vha. følgende URL: ${0}.",
		http_error_explanation: "Du skal muligvis valideres på en firewall, eller webapplikationsserveren kører muligvis ikke eller kan ikke nås på grund af netværksproblemer.",
		http_error_userResponse: "Hvis du skal valideres på en firewall, skal du validere og prøve at logge på igen. Rapportér fejlen til systemadministratoren, hvis problemet fortsætter.",
		http_error_adminResponse: "Følgende HTTP-fejl er returneret: ${1}.",
		http_error_0: "web_klient_URL",
		http_error_1: "HTTP_fejl",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Der kan ikke oprettes forbindelse til webklienten vha. følgende URL: ${0}.",
		http_response_bad_explanation: "Fejlen kan skyldes et konfigurationsproblem på webapplikationsserveren eller et problem med webklienten.",
		http_response_bad_userResponse: "Prøv at logge på igen. Rapportér fejlen til systemadministratoren, hvis problemet fortsætter.",
		http_response_bad_adminResponse: "Følgende fejl er returneret: ${1}.",
		http_response_bad_0: "web_klient_URL",
		http_response_bad_1: "HTTP_fejl",
		http_response_bad_number: 2002,

		unititled_document_name: "Uden titel",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "E-mail-miniprogrammet kan ikke startes.",
		email_applet_init_failed_explanation: "Dette problem kan opstå, hvis e-mail-klienten er ikke installeret og konfigureret korrekt, eller når en understøttet version af JRE (Java Runtime Environment) er ikke installeret på arbejdsstationen.",
		email_applet_init_failed_userResponse: "For at løse problemet:<ul><li>Kontrollér, at e-mail-applikationen er installeret og konfigureret som standard-e-mail-klient på arbejdsstationen.</li><li>Kontrollér, at en understøttet version af JRE er installeret på din arbejdsstation, ved at skrive følgende kommando på en kommandolinje: java -version.</li></ul><p>Der er en liste over understøttede JRE-versioner i dokumentet <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> på webstedet IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "E-mail-applikationen kan ikke startes, fordi en påkrævet DLL-fil ikke kan indlæses.",
		email_applet_JNI_LOAD_FAILED_explanation: "Den påkrævede WCEmailAppletJNI.dll-fil kan ikke indlæses, fordi det midlertidige bibliotek på arbejdsstationen muligvis er fuldt.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Kontrollér, at der er tilstrækkelig plads i det midlertidige bibliotek. Prøv derefter at sende dokumentet fra webklienten igen. Som standard indlæses filen WCEmailAppletJNI.dll i det midlertidige bibliotek, der er angivet i indstillingerne til webbrowseren.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "E-mail-applikationen kan ikke startes, fordi e-mail-miniprogrammet ikke kan oprette en midlertidig fil.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Det midlertidige bibliotek på arbejdsstationen er muligvis fuldt.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Kontrollér, at der er tilstrækkelig plads i det midlertidige bibliotek. Prøv derefter at sende dokumentet fra webklienten igen.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "E-mail-applikationen kan ikke startes, fordi e-mail-miniprogrammet ikke kan få adgang til det midlertidige bibliotek.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Det midlertidige bibliotek på arbejdsstationen er muligvis fuldt, eller du har ikke den relevante skriveadgang til det midlertidige bibliotek.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Kontrollér, at der er tilstrækkelig plads i det midlertidige bibliotek, og kontrollér, at du har skriveadgang til det midlertidige bibliotek. Prøv derefter at sende dokumentet fra webklienten igen. Kontakt systemadministratoren, hvis problemet fortsætter.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E-mail-miniprogrammet kan ikke slette en midlertidig fil.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "En anden applikation bruger muligvis filen, eller også findes filen ikke på arbejdsstationen.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Hvis filen bruges af en anden applikation, skal du lukke applikationen. Hvis filen er på dit lokale filsystem, skal du fjerne følgende fil fra det midlertidige bibliotek på arbejdsstationen: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Der kan ikke oprettes link til dokumentet.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Opbevaringsstedet har returneret URL'en med et ugyldigt format.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Luk webbrowseren og alle skilleblade og sessioner, og log på igen. Prøv at sende dokumentet fra webklienten igen. Hvis problemet fortsætter, skal du kontakte IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E-mail-miniprogrammet kan ikke tilknytte filen til en e-mail.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Opbevaringsstedet returnerede URL'en til dokumentet i et ugyldigt format.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Luk webbrowseren og alle skilleblade og sessioner, og log på igen. Prøv at sende dokumentet fra webklienten igen. Hvis problemet fortsætter, skal du kontakte IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Vedhæftningen kan ikke oprettes.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E-mail-miniprogrammet kan ikke læse URL'en til dokumentet.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Luk webbrowseren og alle skilleblade og sessioner, og log på igen. Prøv at sende dokumentet fra webklienten igen. Hvis problemet fortsætter, skal du kontakte IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokumentet kan ikke hentes fra opbevaringsstedet.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Tidsfristen for sessionen er udløbet, opbevaringsstedet eller webapplikationen kører muligvis ikke, eller der kan være problemer med konfigurationen af webapplikationen.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Log på, og prøv at sende dokumentet via e-mail igen. Hvis problemet fortsætter, skal du bede systemadministratoren om at undersøge opbevaringsstedets fejllogfiler.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Hvis du konfigurerede webklienten til at konvertere AFP-dokumenter til et andet format, f.eks. PDF, før du sendte dokumenterne som vedhæftninger, skal du kontrollere at konverteringen er konfigureret korrekt.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokumentet kan ikke konverteres til PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Det værktøj, der bruges til at konvertere dokumenter til PDF, understøtter ikke filtypen.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Luk siden, og prøv at downloade dokumentet igen uden at konvertere det til PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-mailen er ikke oprettet.",
		email_applet_MAPI_USER_ABORT_explanation: "Åbn e-mail-applikationen, og kontrollér, at den fungerer korrekt. Prøv derefter at sende dokumentet fra webklienten igen. Hvis problemet fortsætter, skal du kontakte systemadministratoren, som kan gennemse styresystemets aktivitetslogfiler.",
		email_applet_MAPI_USER_ABORT_userResponse: "Hvis du vil lukke e-mail-applikationen, er ingen yderligere handling påkrævet. Du kan sende e-mailen ved at logge på e-mail-applikationen og prøve at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-mailen kan ikke oprettes.",
		email_applet_MAPI_FAILURE_explanation: "E-mail-klienten er muligvis ikke åben, eller du er muligvis ikke logget på.",
		email_applet_MAPI_FAILURE_userResponse: "Åbn e-mail-applikationen, og kontrollér, at den fungerer korrekt. Prøv derefter at sende dokumentet fra webklienten igen. Hvis problemet fortsætter, skal du kontakte systemadministratoren, som kan gennemse styresystemets aktivitetslogfiler.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-mailen kan ikke oprettes.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Du er ikke logget på e-mail-klienten. E-mail-klienten skal være åben, og du skal være logget på for at kunne sende en besked fra webklienten.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Åbn din e-mail-klient, og log på. Prøv derefter at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-mailen kan ikke oprettes, fordi den midlertidige fil kan ikke oprettes på arbejdsstationen.",
		email_applet_MAPI_DISK_FULL_explanation: "Det midlertidige bibliotek på arbejdsstationen er muligvis fuldt.",
		email_applet_MAPI_DISK_FULL_userResponse: "Kontrollér, at der er tilstrækkelig plads i det midlertidige bibliotek. Prøv derefter at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-mailen kan ikke oprettes, fordi der ikke er tilstrækkelig systemhukommelse.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Du har muligvis åbnet for mange applikationer.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Luk de applikationer, der ikke bruges, og prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI-adgang nægtet.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "MAPI-adgang (Messaging Application Programming Interface) er muligvis ikke aktiveret eller understøttes ikke til din e-mail-applikation. MAPI er den meddelelsesprotokol, der bruges til aktivering af kommunikation mellem webklienten og din e-mail-applikation.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Kontakt systemadministratoren.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Kontrollér, at MAPI-adgang er aktiveret og konfigureret korrekt for e-mail-applikationen. Kontakt IBM Software Support, hvis problemet fortsætter.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Vedhæftningen eller linket til elementet kan ikke oprettes.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Du har muligvis åbnet for mange webbrowsersessioner.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Luk de webbrowsersessioner, der ikke bruges. Prøv derefter at sende dokumentet fra webklienten igen. Kontakt systemadministratoren, hvis problemet fortsætter.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-mailen kan ikke sendes.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Du prøver muligvis at sende for mange vedhæftninger.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Vælg færre filer. Prøv derefter at sende dokumenterne fra webklienten igen.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-mailen kan ikke sendes.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Du prøver muligvis at sende e-mailen til for mange modtagere.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Send e-mailen til færre modtagere.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Vedhæftningen kan ikke oprettes.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Nogle obligatoriske midlertidige filer er muligvis blevet slettet, før vedhæftningen kunne oprettes. Denne fejl kan opstå, hvis browserens cache ryddes, før e-mailen sendes.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Vedhæftningen kan ikke oprettes.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Nogle obligatoriske midlertidige filer er muligvis blevet slettet, før vedhæftningen kunne oprettes. Denne fejl kan opstå, hvis browserens cache ryddes, før e-mailen sendes.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Vedhæftningen kan ikke oprettes af e-mail-programmet.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-mailen kan ikke sendes til den angivne modtager.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Modtageren findes muligvis ikke i adressebogen.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Kontrollér navnet på modtageren, og prøv at sende dokumentet igen.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-mailen kan ikke sendes til den angivne modtager.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-mail-adressen har muligvis et forkert format.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Kontrollér, at du har angivet en gyldig e-mail-adresse, og prøv at sende dokumentet igen.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_NO_MESSAGES_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-mailen kan ikke sendes.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-mailen er muligvis for lang.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Forkort teksten i e-mailen, og prøv at sende e-mailen igen.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-mailen kan ikke oprettes.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Der er muligvis opstået en fejl ved e-mail-klienten, da den forsøgte at oprette e-mailen.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Genstart e-mail-klienten, og prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-mailen er muligvis ikke sammensat korrekt.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-mailen kan ikke sendes til den angivne modtager.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-mail-adressen har muligvis et forkert format.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Kontrollér, at du har angivet en gyldig e-mail-adresse, og send dokumentet igen.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E-mail-klienten kan ikke udføre den ønskede handling.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E-mail-applikationen har returneret en uventet fejl.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Prøv at sende dokumentet fra webklienten igen.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "En af egenskaberne har ikke det nødvendige antal værdier.",
		error_property_cardinality_explanation: "Nogle egenskaber har et mindste eller største antal værdier.",
		error_property_cardinality_userResponse: "Brug hjælpeboblen til at se, hvilken egenskab der har et mindstekrav, hvad angår antallet af værdier. Angiv derefter mindsteantallet af værdier, og prøv igen.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Der kræves et filnavn.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Angiv et filnavn, og prøv igen.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Pluginen ${0} indeholder fejl.",
		plugin_error_explanation: "Fejlen opstod under evaluering af JavaScript for pluginen ${0}. Hvis du fortsætter med at bruge webklienten, risikerer du, at der opstår flere fejl.",
		plugin_error_userResponse: "Kontakt systemadministratoren.",
		plugin_error_adminResponse: "Der er et problem med pluginen, der skal rettes af plugin-leverandøren. Det anbefales, at du fjerner pluginen fra webklientkonfigurationen, indtil problemet med pluginen er blevet løst.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Indgangsskabelonen kan ikke åbnes.",
		open_old_format_entry_template_error_explanation: "Indgangsskabelonen bruger et ældre format, der ikke understøttes i webklienten.",
		open_old_format_entry_template_error_userResponse: "Bed systemadministratoren om at opdatere indgangsskabelonen.",
		open_old_format_entry_template_error_adminResponse: "Brug Application Engine eller Workplace XT Entry Template Designer til at gemme en opdateret version af indgangsskabelonen.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Indgangsskabelonen kan ikke åbnes.",
		open_custom_object_entry_template_error_explanation: "Webklienten understøtter ikke følgende type indgangsskabelon: Custom Object-indgangsskabeloner.",
		open_custom_object_entry_template_error_userResponse: "Åbn en anden indgangsskabelon.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "E-formular-objektet kan ikke åbnes.",
		open_forms_object_error_explanation: "Webklienten understøtter ikke følgende typer e-formular-objekter: formularskabelon, formulardata, dokumentpolitik og arbejdsgangspolitik.",
		open_forms_object_error_userResponse: "Åbn et andet dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Du kan ikke bruge indgangsskabelonen ${0}.",
		entry_template_folder_restricted_error_explanation: "Indgangsskabelonen tilføjer elementer til folderen ${1}, og du har ikke de relevante tilladelser til at tilføje elementer til den pågældende folder.",
		entry_template_folder_restricted_error_userResponse: "Vælg en anden indgangsskabelon, eller bed systemadministratoren om at tildele dig de relevante tilladelser til at tilføje elementer til folderen ${1}.",
		entry_template_folder_restricted_error_0: "indgangs_skabelon_navn",
		entry_template_folder_restricted_error_1: "folder_navn",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Indgangsskabelonen kan ikke åbnes.",
		open_records_entry_template_error_explanation: "Webklienten understøtter ikke følgende type indgangsskabelon: Declare as Record-indgangsskabeloner.",
		open_records_entry_template_error_userResponse: "Åbn en anden indgangsskabelon.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Arbejdsgangen kan ikke åbnes.",
		open_workflow_error_explanation: "Webklienten understøtter ikke åbning af arbejdsgange.",
		open_workflow_error_userResponse: "Åbn et andet dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokumentet kan ikke åbnes.",
		viewer_unable_to_view_error_explanation: "Ingen fremviser er konfigureret for denne type dokumenter, eller den konfigurerede fremviser er ikke kompatibel med dit system.",
		viewer_unable_to_view_error_userResponse: "Bed systemadministratoren om at konfigurere en fremviser for denne type dokumenter, og kontrollér, at den konfigurerede fremviser fungerer sammen med brugerens system.",
		viewer_unable_to_view_error_adminResponse: "Brug administrationsværktøjet til at konfigurere en fremviser for denne type dokument.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Søgningen kan ikke åbnes.",
		search_cannot_open_error_explanation: "Søgefunktionen er ikke konfigureret til denne arbejdsplads.",
		search_cannot_open_error_userResponse: "Spørg systemadministratoren, om du kan få adgang til en arbejdsplads, der indeholder søgefunktionen, eller om denne arbejdsplads kan opdateres til at omfatte søgefunktionen.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokumentet er ikke indlæst.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional-fremviseren kan ikke åbne dokumentet.",
		viewer_document_load_failed_error_userResponse: "Der er flere oplysninger i den fejlmeddelelse, der bliver vist i fremviseren.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokumentet kan ikke vises.",
		viewer_session_expired_explanation: "Dokumentindholdet kan ikke hentes.",
		viewer_session_expired_userResponse: "Prøv at logge på igen. Hvis problemet fortsætter, kører applikationsserveren muligvis ikke. Bed systemadministratoren om at undersøge IBM Content Navigator-fejllogfilerne eller om at genstarte serveren.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokumentet kan ikke vises.",
		ajaxViewer_getPage_failed_explanation: "AJAX-fremviseren har modtaget et fejlsvar under hentning af sideindhold. Applikationsserveren kører muligvis ikke.",
		ajaxViewer_getPage_failed_userResponse: "Luk webbrowseren, og log på igen. Hvis problemet fortsætter, skal du bede systemadministratoren om at gennemse webapplikationsserverens fejllogfiler eller om at genstarte serveren.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "JRE (Java Runtime Environment) er ikke fundet på arbejdsstationen.",
		viewer_java_plugin_not_found_explanation: "Enten er findes pluginen ikke, eller den korrekte version af JRE er ikke installeret.",
		viewer_java_plugin_not_found_userResponse: "Kontrollér, om JRE er installeret. Skriv f.eks. følgende kommando på en kommandolinje: Java -version. Hvis JRE'et ikke er installeret, eller der er installeret et forkert versionsniveau, skal du installere den relevante version af JRE. Der er en liste over understøttede versioner i dokumentet <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> på webstedet IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokumentet kan ikke vises i webbrowseren.",
		viewer_pdf_plugin_not_found_explanation: "Den plugin, der bruges til fremvisning af pdf-dokumenter i webbrowseren, er ikke fundet.",
		viewer_pdf_plugin_not_found_userResponse: "Pdf-filen downloades til arbejdsstationen i stedet for at blive vist i fremviservinduet.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Følgende element kan ikke tilføjes til opbevaringsstedet: ${0}.",
		add_document_single_item_error_explanation: "Denne fejl kan opstå, hvis:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Du forsøger at tilføje et dokument, der er flyttet eller slettet.</li>" + "<li>Du forsøger at tilføje et dokument, som er omdøbt.</li>" + "<li>Du forsøger at tilføje et dokument, der er beskadiget.</li>" + "<li>Du forsøger at tilføje et dokument, der er åbent i en anden applikation.</li>" + "<li>Du forsøger at tilføje en folder til opbevaringsstedet.</li>" + "<li>Du har ikke de korrekte tilladelser på styresystemet til at få adgang til dokumentet.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Udfør den relevante handling for at løse problemet:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Hvis dokumentet er flyttet eller omdøbt, skal du finde dokumentet i filsystemet og prøve at tilføje det igen.</li>" + "<li>Hvis dokumentet er åbent i en anden applikation, skal du lukke det og prøve at tilføje det igen.</li>" + "</ul>" + "<br>Du kan ikke tilføje foldere til opbevaringsstedet.",
		add_document_single_item_error_0: "element_med_fejl",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Følgende ${0} elementer kan ikke tilføjes til opbevaringsstedet: ${1}",
		add_document_multiple_items_error_explanation: "Et problem med et af elementerne forhindrer dem i at blive tilføjet til opbevaringsstedet. Denne fejl kan opstå, hvis:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Du forsøger at tilføje et dokument, der er flyttet eller slettet.</li>" + "<li>Du forsøger at tilføje et dokument, som er omdøbt.</li>" + "<li>Du forsøger at tilføje et dokument, der er beskadiget.</li>" + "<li>Du forsøger at tilføje et dokument, der er åbent i en anden applikation.</li>" + "<li>Du forsøger at tilføje en folder til opbevaringsstedet.</li>" + "<li>Du har ikke de korrekte tilladelser på styresystemet til at få adgang til dokumentet.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Udfør den relevante handling for at løse problemet:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Hvis et dokument er flyttet eller omdøbt, skal du finde dokumentet i filsystemet og prøve at tilføje det igen.</li>" + "<li>Hvis et dokument er åbent i en anden applikation, skal du lukke det og prøve at tilføje elementerne igen.</li>" + "<li>Hvis dokumentet er slettet eller er beskadiget, skal du fravælge elementet og prøve at tilføje de resterende elementer igen.</li>" + "</ul>" + "<br>Du kan ikke tilføje foldere til opbevaringsstedet.",
		add_document_multiple_items_error_0: "antal_elementer",
		add_document_multiple_items_error_1: "elementer_med_fejl",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Du kan ikke trække og placere elementer fra denne placering.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "E-formular-objektet kan ikke åbnes.",
		open_forms_work_object_error_explanation: "Webklienten understøtter ikke følgende typer e-formular-objekttyper: arbejdsgangspolitik.",
		open_forms_work_object_error_userResponse: "Åbn et andet dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokumentet kan ikke åbnes.",
		viewer_privilege_to_view_error_explanation: "Du har ikke de korrekte rettigheder til at få dokumentet vist.",
		viewer_privilege_to_view_error_userResponse: "Bed systemadministratoren eller ejeren af dokumentet eller om at tildele dig de relevante tilladelser til at få vist dokumentet.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Elementerne kan ikke tilføjes til opbevaringsstedet.",
		add_document_too_many_items_error_explanation: "Du kan tilføje op til ${0} elementer ad gangen. Du forsøger at tilføje ${1} elementer.",
		add_document_too_many_items_error_userResponse: "Fjern nogle af elementerne fra listen, og prøv at tilføje elementerne igen. Du kan også kontakte systemadministratoren for at få øget det maksimale antal dokumenter, der kan tilføjes til denne arbejdsplads på én gang.",
		add_document_too_many_items_error_0: "maksimalt_antal_elementer",
		add_document_too_many_items_error_1: "antal_elementer",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Der kan ikke oprettes forbindelse til webklienten vha. følgende URL: ${0}.",
		http_ltpa_expired_explanation: "LTPA-nøglen, som er knyttet til browsersessionen, er udløbet.",
		http_ltpa_expired_userResponse: "Genstart webbrowseren, og prøv at logge på igen. Rapportér følgende fejl til systemadministratoren, hvis problemet fortsætter: ${1}.",
		http_ltpa_expired_0: "web_klient_URL",
		http_ltpa_expired_1: "HTTP_fejl",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokumentet kan ikke tilføjes til folderen ${0}.",
		dnd_no_privilege_error_explanation: "Tilladelserne for folderen forhindrer, at dokumenter kan tilføjes til folderen.",
		dnd_no_privilege_error_userResponse: "Tilføj dokumentet til en anden folder.",
		dnd_no_privilege_error_0: "element_navn",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Elementerne kan ikke ændres.",
		modify_document_too_many_items_error_explanation: "Du kan ændre op til ${0} elementer ad gangen. Du forsøger at ændre ${1} elementer.",
		modify_document_too_many_items_error_userResponse: "Vælg færre elementer, og prøv at ændre elementerne igen. Du kan også kontakte systemadministratoren for at få øget det maksimale antal elementer, der kan ændres på én gang på denne arbejdsplads.",
		modify_document_too_many_items_error_0: "maksimalt_antal_elementer",
		modify_document_too_many_items_error_1: "antal_elementer",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Du kan ikke bruge klassen ${0}.",
		add_document_multiple_unique_values_error_explanation: "Klassen ${0} indeholder en eller flere egenskaber, der kræver en entydig værdi for hvert dokument. Når du tilføjer flere dokumenter, bruger alle dokumenterne de samme værdier.",
		add_document_multiple_unique_values_error_userResponse: "Vælg en anden klasse, eller tilføj dokumenterne enkeltvis.",
		add_document_multiple_unique_values_error_0: "klassefremvisnings_navn",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Du kan ikke bruge indgangsskabelonen ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Indgangsskabelonen ${0} kræver, at du tilføjer dokumenter til klassen ${1}. Klassen ${1} indeholder imidlertid en eller flere egenskaber, der kræver en entydig værdi for hvert dokument. Når du tilføjer flere dokumenter, bruger alle dokumenterne de samme værdier.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Vælg en anden indgangsskabelon, eller tilføj dokumenterne enkeltvis.",
		add_document_multiple_unique_values_entry_template_error_0: "indgangs_skabelon_navn",
		add_document_multiple_unique_values_entry_template_error_1: "klassefremvisnings_navn",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Du kan ikke bruge indgangsskabelonen ${0}.",
		entry_template_class_restricted_error_explanation: "Indgangsskabelonen tilføjer elementer ved hjælp af klassen ${1}, og du har ikke de relevante tilladelser til at tilføje elementer ved hjælp af den pågældende klasse.",
		entry_template_class_restricted_error_userResponse: "Vælg en anden indgangsskabelon, eller bed systemadministratoren om at tildele dig de relevante tilladelser til at tilføje elementer ved hjælp af klassen ${1}.",
		entry_template_class_restricted_error_0: "indgangs_skabelon_navn",
		entry_template_class_restricted_error_1: "klassefremvisnings_navn",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Arbejdselementet kan ikke tilknyttes til en anden bruger.",
		process_reassign_error_explanation: "Arbejdsgangen forbyder denne handling.",
		process_reassign_error_userResponse: "Du kan åbne arbejdselementet og færdiggøre det aktuelle trin i arbejdselementet. Du kan få flere oplysninger om problemet ved at bede ejeren af elementet om at kontrollere, at arbejdselementet kan gentildeles.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Følgende tilpassede funktion kan ikke indlæses: ${0}.",
		customaction_loadurl_error_explanation: "Den tilpassede funktion findes ikke på en placering, der er adgang til. Den aktuelle URL til den tilpassede funktion er ${1}.",
		customaction_loadurl_error_userResponse: "Bed administratoren om at flytte den tilpassede funktion til en placering, der er adgang til.",
		customaction_loadurl_error_adminResponse: "Den JSP-fil, der definerer den tilpassede funktion, skal leveres som en del af eClient-webapplikationen eller IBM Content Navigator-webapplikationen.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Følgende funktion findes ikke: ${0}.",
		feature_invalid_explanation: "Problemet kan opstå, hvis funktionen ikke er tilgængelig på den angivne arbejdsplads, eller hvis funktionsnavnet er stavet forkert.",
		feature_invalid_userResponse: "Når du klikker på OK, omdirigeres du til standardfunktionen for denne arbejdsplads. Kontakt systemadministratoren for at rapportere dette problem.",
		feature_invalid_adminResponse: "Hvis funktionen burde være tilgængelig på arbejdspladsen, skal du opdatere arbejdspladskonfigurationen i administrationsværktøjet. Hvis funktionen ikke skal være inkluderet på arbejdspladsen, eller hvis den er stavet forkert, skal du opdatere URL'en i samarbejde med den applikationsudvikler, der har oprettet URL'en til funktionen.",
		feature_invalid_number: 2066,
		feature_invalid_0: "funktions_navn",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Søgningen ${0} kan ikke åbnes.",
		search_unsupportedTeamspaceSearch_error_explanation: "Du skal være i en teamplads for at kunne åbne denne søgning.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Vælg en anden søgning.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Følgende fil kan ikke importeres: ${0}.",
		wrong_import_file_type_error_explanation: "Filen skal være en egenskabsfil.",
		wrong_import_file_type_error_userResponse: "Vælg den egenskabsfil, du har eksporteret fra administrationsværktøjet.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Opbevaringsstedet ${0} findes ikke på arbejdspladsen ${1}.",
		browse_repository_not_found_error_explanation: "Opbevaringsstedet skal være til stede på arbejdspladsen og aktiveret for gennemsynsfunktionen, når den er angivet i en URL-parameter.",
		browse_repository_not_found_error_userResponse: "Kontrollér, at den opbevaringssted-id, som er angivet i URL'en, er korrekt, at opbevaringsstedet er tilføjet til arbejdspladsen ${1}, og at gennemsynsfunktionen er aktiveret for opbevaringsstedet.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Opbevaringsstedet ${0} er ikke aktiveret for gennemsynsfunktionen på ${1}-arbejdspladsen.",
		browse_repository_not_enabled_error_explanation: "Opbevaringsstedet skal være aktiveret for gennemsynsfunktionen, når den er angivet i en URL-parameter.",
		browse_repository_not_enabled_error_userResponse: "Aktivér gennemsynsfunktionen for ${0}-opbevaringsstedet på ${1}-arbejdspladsen.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Søgningen kan ikke udføres, fordi linket indeholder ugyldige kriterier.",
		invalid_xt_stored_search_criteria_error_explanation: "Følgende værdi er ugyldig: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Bed systemadministratoren om et opdateret link.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Redigér det relevante navneværdipar i URL'en. Hvis du ikke ved, hvilke værdier der er gyldige for egenskaben, skal du åbne den gemte søgning i FileNet Workplace XT Search Designer for at bestemme en gyldig værdi.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Søgningen på tværs af opbevaringssteder kan ikke åbnes.",
		unified_search_invalid_fixed_value_error_explanation: "Søgningen på tværs af opbevaringssteder indeholder ugyldige kriterier. Dette problem opstår, når et kriterium har en fast værdi, der ikke er kompatibelt med de øvrige egenskaber i tilknytningen. Dette problem kan opstå, hvis den faste værdi er en streng, og de øvrige egenskaber i tilknytninger er heltal.",
		unified_search_invalid_fixed_value_error_userResponse: "Hvis du har de relevante tilladelser til at redigere søgningen, skal du fjerne de ugyldige kriterier og gemme søgningen igen. Hvis du ikke har de relevante tilladelser til at redigere søgningen, skal du bede ejeren af søgningen eller systemadministratoren om at gemme søgningen igen.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Din anmodning kan ikke gennemføres.",
		launch_action_invalid_json_error_explanation: "De overførte data til webklienten er ikke gyldige.",
		launch_action_invalid_json_error_userResponse: "Oplys systemadministratoren om, hvilken applikation du brugte, da problemet opstod.",
		launch_action_invalid_json_error_adminResponse: "Klientapplikationen sendte ikke et gyldigt JSON-objekt til webklienten. Kontakt IBM Software Support for at få hjælp.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Din anmodning kan ikke gennemføres.",
		launch_action_not_found_error_explanation: "Handlingen ${0} er ikke konfigureret for nogen menuer på ${1}-arbejdspladsen.",
		launch_action_not_found_error_userResponse: "Bed systemadministratoren om at konfigurere ${1}-arbejdspladsen til at bruge en menu, som indeholder handlingen ${0}, eller om at tildele dig en arbejdsplads, der omfatter ${0}-handlingen.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Din anmodning kan ikke gennemføres.",
		launch_action_repository_not_found_error_explanation: "Opbevaringsstedet ${0} er ikke knyttet til ${1}-arbejdspladsen.",
		launch_action_repository_not_found_error_userResponse: "Bed systemadministratoren om at knytte ${0}-opbevaringsstedet til ${1}-arbejdspladsen eller om at tildele dig en arbejdsplads, der omfatter ${0}-opbevaringsstedet.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Teampladsen kan ikke åbnes.",
		teamspace_cannot_open_error_explanation: "Teampladsfunktionen er ikke konfigureret til denne arbejdsplads.",
		teamspace_cannot_open_error_userResponse: "Spørg systemadministratoren, om du kan få adgang til en arbejdsplads, der indeholder teampladsfunktionen, eller om denne arbejdsplads kan opdateres til at omfatte teampladsfunktionen.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Der er opstået en fejl under indtjekning af det redigerede indhold.",
		viewer_redaction_checkin_failed_explanation: "Fremviseren har modtaget et fejlsvar under indtjekning af redigeret indhold.",
		viewer_redaction_checkin_failed_userResponse: "Bed systemadministratoren om at gennemse webapplikationsserverens logfiler.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Du kan ikke tilføje dokumenter til dette opbevaringssted.",
		add_document_odserver_odwek_version_od_error_explanation: "Den aktuelle version af IBM Content Manager OnDemand-serveren eller ODWEK har ikke det mindsteniveau, der kræves for at understøtte tilføjelse af dokumenter til et Content Manager OnDemand-opbevaringssted.",
		add_document_odserver_odwek_version_od_error_userResponse: "Bed din administrator om at tjekke, hvilke versioner af Content Manager OnDemand Server og ODWEK der kræves for at kunne understøtte tilføjelse af dokumenter til Content Manager OnDemand-opbevaringssteder.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Elementerne kan ikke tilføjes til opbevaringsstedet.",
		add_document_too_many_items_od_error_explanation: "Du kan kun tilføje ét element ad gangen til IBM Content Manager OnDemand-opbevaringssteder.",
		add_document_too_many_items_od_error_userResponse: "Fjern nogle af elementerne fra listen, og prøv at tilføje elementerne igen ét ad gangen.",
		add_document_too_many_items_od_error_0: "maksimalt_antal_elementer",
		add_document_too_many_items_od_error_1: "antal_elementer",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Elementet kan ikke tilføjes til opbevaringsstedet.",
		add_document_filesize_empty_od_error_explanation: "Du kan ikke tilføje tomme filer til et IBM Content Manager OnDemand-opbevaringssted.",
		add_document_filesize_empty_od_error_userResponse: "Tilføj indhold til filen, og prøv at tilføje filen igen, eller tilføj et andet element.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Søgningen på tværs af opbevaringssteder kan ikke åbnes.",
		unified_search_repository_not_found_error_explanation: "Søgningen på tværs af opbevaringssteder inkluderer et eller flere ugyldige opbevaringssteder. Problemet kan opstå, når de opbevaringssteder, der er inkluderet i søgningen, er blevet slettet fra applikationen eller blevet fjernet fra den aktuelle arbejdsplads.",
		unified_search_repository_not_found_error_userResponse: "Gem søgningen igen, hvis du har de relevante tilladelser til at redigere søgningen. Når du gemmer søgningen, fjerner webklienten de ugyldige opbevaringssteder fra søgningen. Hvis du ikke har de relevante tilladelser til at redigere søgningen, skal du bede ejeren af søgningen eller systemadministratoren om at gemme søgningen igen.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Et nyt dokument kan ikke oprettes.",
		edit_document_using_office_online_error: "Dokumentet kan ikke åbnes.",
		edit_document_using_office_online_error_explanation: "URL'en til Microsoft Office Online Server er ikke konfigureret.",
		edit_document_using_office_online_error_userResponse: "Før du kan bruge Office Online, skal administratoren aktivere Office Online Server i et opbevaringssted og angive URL'en til Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokumentet kan ikke åbnes i Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Bed administratoren  om at opdatere MS Office Online Server Integration.<br><br> Hvis brugeren skal have adgang til dette dokument fra Microsoft Office Online, skal du gå til siden med redigeringsintegration for opbevaringsstedet og opdatere MS Office Online Server Integration for at inkludere klassen i listen over klasser og at ændre Office Online-support. ",		
		browser_not_support_this_viewer: "Den konfigurerede fremviser er ikke kompatibel med browseren.",
		browser_not_support_this_viewer_explanation: "${0} understøttes ikke af browseren.",
		browser_not_support_this_viewer_userResponse: "Brug en anden fremviser til at åbne dokumentet. Der er en liste over understøttede browsere i dokumentet <i>Hardware and software prerequisites for IBM Content Navigator</i> på webstedet IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Arbejdsgangsoplysninger",
		process_information_info_text: "Det valgte element udføres aktuelt i følgende arbejdsgange.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Lig med",
		operator_NOTEQUAL: "Ikke lig med",
		operator_LIKE: "Som",
		operator_STARTSWITH: "Starter med",
		operator_ENDSWITH: "Slutter med",
		operator_NOTLIKE: "Ikke som",
		operator_NULL: "Er tom",
		operator_NOTNULL: "Er ikke tom",
		operator_LESS: "Mindre end",
		operator_LESSOREQUAL: "Mindre end eller lig med",
		operator_GREATER: "Større end",
		operator_GREATEROREQUAL: "Større end eller lig med",
		operator_BETWEEN: "Mellem",
		operator_NOTBETWEEN: "Ikke mellem",
		operator_IN: "Inkludér alle",
		operator_INANY: "Inkludér hvilken som helst",
		operator_NOTIN: "Udelad alle",
		operator_CONTAINS: "Indeholder",

		/* SearchForm widget */
		search_button_tooltip: "Søg efter dokumenter, der matcher dine kriterier.",
		reset_button_tooltip: "Nulstiller søgningen til de standardværdier, administratoren har angivet.",
		clear_button_tooltip: "Fjerner alle de værdier, du har angivet til søgningen.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Vælg Søg",
		append_to_search: "Tilføj til søgning",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Ny søgning",
		new_unified_search: "Ny søgning på tværs af opbevaringssteder",
		searh_name_contains: "Søgenavnet indeholder",
		keep_search_criteria_expanded: "Behold søgekriterierne åbne",
		showing_results: "Viser resultater for:",
		open_in_new_window: "Åbn i nyt vindue",
		open_in_new_tab: "Åbn på nyt skilleblad",
		close_tab: "Luk skilleblad",
		add_repository: "Tilføj opbevaringssted",
		edit_repository: "Redigér opbevaringssted",
		remove_repository: "Fjern",
		search_scope: "Søgeomfang",
		search_class_template: "Klasse",
		object_type_version: "Objekttype og version",
		not_applicable: "Ikke tilgængelig",
		unified_search_including_subfolders: " (Inkluderer underfoldere)",
		unified_search_dialog_intro_text: "Vælg opbevaringsstedet og søgningen eller de klasser, du vil inkludere i søgningen.",
		unified_search_class_or_template: "Klasse eller skabelon",

		select_object_fieldset_legend: "Hvordan vil du finde navne, der skal tilknyttes:",
		select_object_create_new_search: "Ny søgning",
		select_object_search_template: "Eksisterende søgning",

		search_criteria: "Søgekriterier:",
		search_criteria_no_colon: "Søgekriterier",
		search_in_multiple: "Søg i (${0}):",
		search_location_including_subfolders: "${0} inklusive underfoldere",
		search_class: "Klasse:",
		search_class_multiple: "Klasse (${0}):",
		search_class_including_subclasses: "${0} inklusive underklasser",
		search_class_all_pseudo: "Alle",
		search_results: "Søgeresultater",
		select_operator: "Vælg en operator",
		ending_value: "Slutværdien for egenskaben ${0} er:",
		search_options: "Søgeparametre:",
		search_version: "Version:",
		search_released_version: "Frigivet version",
		search_current_version: "Aktuel version",
		search_all_versions: "Alle versioner",
		search_file_type_filter: "Filtypefilter:",
		search_one_file_type: "1 filtype",
		search_many_file_types: "${0} filtyper",
		search_action_filter: "Funktionsfilter:",
		search_action_filter_hover_help: "Du kan indsnævre resultaterne til kun at omfatte de filer, som brugerne har udført en bestemt funktion med.<br/>Du kan f.eks. nøjes med at søge efter dokumenter, som du har tilføjet 20. september 2012.",
		search_action_filter_enabled: "Funktionsfilter er aktiveret",
		search_enable: "Aktivér",
		search_disable: "Deaktivér",
		search_by: "af",
		search_added: "Tilføjet",
		search_modified: "Ændret",
		search_checked_out: "Tjekket ud",
		search_date_operator_on: "Aktiveret",
		search_date_operator_not_on: "Ikke d.",
		search_date_operator_before: "Før",
		search_date_operator_after: "Efter",
		search_version_hover_help_p8: "En frigivet version er tilgængelig for alle brugere. Et dokument med en aktuel version betyder, at en eller flere brugere er ved at redigere dokumentet.",
		search_version_hover_help_cm: "Den aktuelle version er den seneste version af elementet.",
		search_using: "Søg efter elementer, der matcher:",
		search_property_and_text_criteria: "Både egenskabsværdier og tekstkriterier",
		search_property_or_text_criteria: "Enten egenskabsværdier eller tekstkriterier",
		search_property_and_text: "Både egenskabs- og tekstkriterier",
		search_property_or_text: "Enten egenskabs- eller tekstkriterier",
		search_property_options: "Egenskabsmuligheder:",
		search_property_option_match_all: "Alle egenskaberne",
		search_property_option_match_any: "En af egenskaberne",
		search_property_option_match_all_summary: "Matcher alle",
		search_property_option_match_any_summary: "Matcher vilkårlig",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Mindst",
		search_content_size_filter: "Filter for indholdsstørrelse:",
		search_content_size_filter_any: "Vilkårlig indholdsstørrelse",

		/* Search work options */
		search_work_filter: "Arbejdselementfilter:",
		search_work_filter_hover_help: "Begræns resultater, så de kun indeholder elementer, der er i en arbejdsgang. Du kan f.eks. begrænse resultaterne til kun at inkludere aktive arbejdselementer.<br /><br />Denne indstilling gælder ikke, hvis du vil have vist alle versioner af de elementer, der returneres af søgningen.",
		search_work_filter_enabled: "Arbejdselementfilter er aktiveret",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Trin:",
		search_work_filter_owner: "Ejer:",
		search_work_filter_status_all: "Alle elementer",
		search_work_filter_status_active: "Aktive elementer",
		search_work_filter_status_suspended: "Afbryd elementer midlertidigt",
		search_work_filter_process_all: "Alle arbejdsgange",
		search_work_filter_step_all: "All trin",
		search_work_filter_owner_all: "Alle brugere",
		search_work_filter_step_error: "Trinnavnet findes ikke.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Søgningen kan ikke gennemføres uden yderligere oplysninger. Angiv en værdi for mindst én betingelse.",
		search_insufficient_input_box: "Søgningen kan ikke gennemføres uden yderligere oplysninger. Angiv tekstsøgekriterier, eller vælg en metadataskabelon.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Søgningen kan ikke konfigureres til at blive udført, når den åbnes uden yderligere oplysninger. Angiv en værdi for mindst én betingelse.",
		search_member_required: "For at dele denne søgning med bestemte brugere eller grupper skal du vælge mindst én bruger eller gruppe at dele søgningen med.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Vil du lukke uden at gemme ændringerne?",
		search_prompt_close_all_without_save: "Vil du lukke alle skilleblade uden at gemme ændringerne?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "En af følgende typer søgekriterier er ikke gyldig for dette opbevaringssted: ${0}. Hvis du vil udføre søgningen i webklienten, skal det ugyldige kriterium fjernes. Hvis du gemmer søgningen, fjernes det ugyldige kriterium. Hvis du ikke vil ændre søgningen, skal du lukke den.",
		search_invalid_repository: "Et eller flere opbevaringssteder",
		search_invalid_class: "En eller flere klasser",
		search_invalid_folder: "En eller flere foldere",
		search_invalid_file_type: "En eller flere filtyper",
		search_invalid_property: "En eller flere egenskaber",
		search_invalid_text_search: "Tekstsøgningskriterier",
		search_invalid_work: "Filterkriterier for arbejdselement",

		search_operator_pulldown_missing: "En operator er påkrævet. Vælg en operator fra menuen. Hvis du ikke får vist nogen operatorer, skal du bede systemadministratoren om at kontrollere skillebladet <b>Søg</b> i administrationsværktøjet for at se, om alle operatorerne er skjult. Hvis dette er en søgning på tværs af opbevaringssteder, indeholder menuen muligvis ingen operatorer, hvis de egenskaber, der er knyttet til hinanden, ikke har nogen fælles operatorer.",

		/*SearchBuilder */
		open_search_builder: "Ny søgning",
		document_type: "Klasse",
		show_all_properties: "Vis alle egenskaber",
		text_search_label: "Find elementer med følgende ord:",
		text_search_place_holder: "Brug en kombination af ord og operatorer: *, ? eller \"nøjagtige udtryk\"",
		text_search_place_holder_box: "Brug en kombination af ord og operatorer: AND, OR, NOT og \"nøjagtige udtryk\"",
		text_search_place_holder_cascade_proximity: "Brug en kombination af ord og operatorer: * eller ?",
		text_search_place_holder_common: "Brug en kombination af ord og \"nøjagtige udtryk\"",
		text_search_hover_help_p8: "Brug en asterisk (*) eller et spørgsmålstegn (?) som jokertegn. Brug dobbelte anførselstegn (\"\") til nøjagtig ordlyd.",
		text_search_hover_help_p8_only_crs: "Brug en asterisk (*) eller et spørgsmålstegn (?) som jokertegn. Brug dobbelte anførselstegn (\"\") til nøjagtig ordlyd. Når du angiver flere udtryk, returnerer en søgning på tværs af opbevaringssteder elementer, der indeholder et af udtrykkene.",
		text_search_hover_help_cm: "Brug en asterisk (*) eller et spørgsmålstegn (?) som jokertegn. Brug dobbelte anførselstegn (\"\") til nøjagtig ordlyd. Brug et minustegn (-) foran ord, der skal udelades, og et plustegn (+) foran ord, der skal medtages.",
		text_search_hover_help_box: "Brug AND mellem udtryk for at finde alle udtrykkene. Brug OR mellem udtryk for at finde nogen af udtrykkene. Brug dobbelte anførselstegn (\"\") til nøjagtig ordlyd. Sæt NOT foran et udtryk for at udelade det.",
		text_search_hover_help_common: "Brug dobbelte anførselstegn (\"\") til nøjagtig ordlyd. Når du angiver flere udtryk, returnerer en søgning på tværs af opbevaringssteder elementer, der indeholder alle udtrykkene.",
		text_search_options: "Tekstmuligheder:",
		text_search_options_hover_help: "Vælg Udvidede operatorer, hvis du skal bruge andre operatorer end jokertegn.",
		text_search_option_any: "Et hvilket som helst af ordene",
		text_search_option_all: "Alle ordene",
		text_search_option_proximity: "I nærheden af ordene:",
		text_search_option_none: "Udvidede operatorer",
		text_search_option_authoring: "Tekstsøgning er:",
		text_search_option_authoring_hover_help: "Vælg en indstilling, der afgør, hvordan du vil gøre tekstsøgekriterierne tilgængelige for brugere. Hvis der ikke skal inkluderes tekstsøgningskriterier i søgningen, skal du skjule indstillingen. Du kan også angive, at tekstsøgningskriterierne kan redigeres eller er påkrævet af brugere eller gjort skrivebeskyttede kun for brugere.",
		text_search_option_hide: "Skjul kriterier",
		text_search_option_hide_hover_help: "Vælg denne indstilling, hvis der ikke skal inkluderes tekstsøgningskriterier i søgningen, eller hvis andre brugere ikke må angive søgekriterier.",
		text_search_option_in: "I HTML/XML-koden ${0}",
		text_search_option_paragraph: "I samme afsnit",
		text_search_option_sentence: "I samme sætning",
		text_search_option_vql: "VQL-forespørgsel",
		text_search_option_none_hover_help: "Brug - foran ord, der skal udelades.",
		text_search_option_cascade_proximity_hover_help: "Begrænser søgeresultaterne til ord, der findes blandt bestemte ord, der ikke omfatter nøjagtige udtryk.",

		box_search_metadata: "Metadata:",
		box_search_select_template: "Vælg skabelon",
		box_search_no_templates: "Der er ingen tilgængelige skabeloner",
		box_text_search_options_search_within: "Søgeomfang:",
		box_text_search_options_search_within_everything: "Alt",
		box_text_search_options_search_within_file_content: "Dokumentindhold",
		box_text_search_options_search_within_tags: "Emneord",
		box_text_search_options_limit_to: "Søg kun efter:",

		add_property: "Tilføj egenskab",
		edit_template: "Redigér søgning",
		save_search: "Gem søgning",
		search_template_name: "Navn:",
		search_template_desc: "Beskrivelse:",
		auto_run: "Udfør søgningen, når den åbnes",
		show_in_tree: "Vis søgningen i folderstrukturen",
		show_in_tree_hover_help: "Hvis en søgning er gemt i en folder, vises den som standard kun i indholdslisten. Hvis du vælger denne indstilling, vises søgningen også i foldertræet i oversigten Gennemse. Men søgningen vises kun i foldertræet, hvis du gemmer søgningen i en folder.",
		share_search_with: "Del søgning med:",
		remove_member: "Fjern ${0}",
		ok_button_label: "OK",
		save_template: "Gem",
		save_template_title: "Gem søgekriterierne, hvis du ofte skal søge efter bestemte elementer.",
		remove_criterion: "Fjern",
		apply_button_label: "Anvend",
		empty_search_results_pane: "Kør en søgning for at få vist resultater.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Hele opbevaringsstedet",

		repository_already_selected: "Opbevaringsstedet ${0} kan ikke tilføjes til søgningen på tværs af opbevaringssteder, fordi det allerede er inkluderet i søgningen. <br/> Et opbevaringssted kan kun inkluderes én gang i søgningen på tværs af opbevaringssteder. <br/>Vælg et andet opbevaringssted, der skal inkluderes i søgningen på tværs af opbevaringssteder.",

		repository_limit_reached: "Opbevaringsstedet ${0} kan ikke tilføjes til søgningen på tværs af opbevaringssteder. Du kan højst tilføje ${1} opbevaringssteder til søgningen.",

		nomore_criteria_toappend: "Alle de tilknyttede egenskaber er allerede inkluderet i søgekriterierne. Ingen egenskaber er tilføjet til søgekriterierne.",
		nomore_criteria_toappend_regular: "Alle egenskaberne er allerede inkluderet i søgekriterierne. Ingen egenskaber er tilføjet til søgekriterierne.",

		/* OD Save Search dialog */
		reload_label: "Genindlæs",
		od_save_search_help_text: "Skriv et navn på søgningen, eller vælg en eksisterende søgning, som skal erstattes",
		public_access_label: "Tillad andre at bruge denne søgning",
		od_delete_search_help_text: "Vælg en eller flere søgninger, der skal slettes",
		delete_save_searches: "Slet gemte søgninger",

		/* Unified Search */
		unified_search_enable_text_search: "Inkludér tekstsøgningskriterier",
		unified_search_text_search_enabled: "Tekstsøgning inkluderet",
		unified_search_mapping: "Tilknytning",
		unified_search_new_mapping: "Ny tilknytning",
		unified_search_mapping_name: "Tilknytningsnavn",
		unified_search_mapping_dialog_instructions: "Vælg de egenskaber, du vil tilknytte. Nogle egenskaber kan tilknyttes til egenskaber, der har en anden datatype. Du kan f.eks. tilknytte en strengegenskab til en heltalsegenskab. Når du tilknytter en egenskab til en anden egenskab, behandles egenskaberne som en enkelt egenskab i søgningen på tværs af opbevaringssteder.",
		unified_search_filter_available_properties: "Filtrér tilgængelige egenskaber",
		unified_search_available_properties: "Tilgængelige egenskaber",
		unified_search_mapped_properties: "Tilknyttede egenskaber",
		unified_search_single_values: "enkeltværdier",
		unified_search_multiple_values: "flere værdier",
		unified_search_add_mapping: "Tilføj tilknytning",
		unified_search_warn_remove_repository: "Det valgte opbevaringssted bruges i søgekriterierne.\nHvis du fjerner opbevaringsstedet, slettes eventuelle tilknytninger og søgekriterier, der inkluderer opbevaringsstedet.\n\nVil du fjerne opbevaringsstedet?",
		unified_search_warn_update_repository_mappings: "Hvis du ændrer egenskabsvalg for dette opbevaringssted, påvirker det søgekriterierne.\n\nSøgekriterierne omfatter en eller flere tilknytninger, der inkluderer en eller flere egenskaber, som du fjerner. Tilknytninger, der omfatter egenskaber, som du fjerner, skal slettes. Søgekriterier, der omfatter disse tilknytninger, skal slettes for at søgningen kan udføres.\n\nVil du opdatere indstillingerne for opbevaringsstedet og slette tilknytninger og søgekriterier?",
		unified_search_warn_update_repository_mappings_reset: "Hvis du indsætter tekstsøgekriterier for dette opbevaringssted, påvirker det søgekriterierne på tværs af opbevaringssteder.\n\nTekstsøgekriterierne skal slettes fra søgekriterierne på tværs af opbevaringssteder for at søgningen kan udføres.\n\nVil du opdatere indstillingerne for opbevaringsstedet og slette tekstsøgekriterierne?",
		unified_search_warn_update_repository_text_criteria: "Hvis du fjerner tekstsøgekriterier for dette opbevaringssted, påvirker det søgekriterierne på tværs af opbevaringssteder.\n\nTekstsøgekriterierne skal slettes fra søgekriterierne på tværs af opbevaringssteder for at søgningen kan udføres.\n\nVil du opdatere indstillingerne for opbevaringsstedet og slette tekstsøgekriterierne?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Hvis du fjerner tekstsøgekriterier og ændrer egenskabsvalget for dette opbevaringssted, påvirker det søgekriterierne på tværs af opbevaringssteder.\n\nTekstsøgekriterierne skal slettes fra søgekriterierne på tværs af opbevaringssteder for at søgningen kan udføres. Egenskabssøgekriterierne omfatter også en eller flere tilknytninger, der inkluderer en eller flere egenskaber, som du fjerner. Tilknytninger, der omfatter egenskaber, som du fjerner, skal slettes. Egenskabssøgekriterier, der omfatter disse tilknytninger, skal slettes for at søgningen kan udføres.\n\nVil du opdatere indstillingerne for opbevaringsstedet og slette tekstsøgekriterier, tilknytninger og egenskabssøgekriterier?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Hvis du udelader tekstsøgekriterier for dette opbevaringssted, påvirker det søgekriterierne på tværs af opbevaringssteder.\n\nTekstsøgekriterierne skal slettes fra søgekriterierne på tværs af opbevaringssteder for at søgningen kan udføres. Tekstsøgekriterierne skal muligvis slettes fra søgningen på tværs af opbevaringssteder for at søgningen kan udføres.\n\nVil du opdatere indstillingerne for opbevaringsstedet og slette søgekriterierne?",
		unified_search_warn_remove_mapping: "Hvis du fjerner denne tilknytning, påvirker det søgekriterierne.\n\nSøgekriterierne, der anvender tilknytningen, skal slettes for at søgningen kan udføres.\n\nVil du opdatere tilknytningen og slette søgekriterierne?",
		unified_search_warn_update_mapping: "Ændringer til denne tilknytning påvirker søgekriterierne.\n\nSøgekriterierne, der anvender tilknytningen, skal slettes for at sikre, at søgningen ikke inkluderer ugyldige operatorer eller ugyldige værdier.\n\nVil du opdatere tilknytningen og rydde søgekriterierne?",
		unified_search_warn_update_mapping_not_searchable: "Ændringer til denne tilknytning påvirker søgekriterierne.\n\nNår de tilknyttede egenskaber kun kan vises, kan du ikke anvende tilknytningen i søgekriterierne. Søgekriterier, der anvender denne tilknytning, skal slettes for at søgningen kan udføres.\n\nVil du opdatere indstillingen og slette søgekriterierne?",
		unified_search_warn_update_mapping_box_searchable: "Ændringer til denne tilknytning påvirker søgekriterierne.\n\nSøgekriterierne omfatter allerede denne tilknytning flere gange, og hvis du tilføjer egenskaben ${0} fra opbevaringsstedet ${1}, omfatter søgekriterierne egenskaben ${0} for mange gange? Søgekriterier, der anvender denne tilknytning, skal slettes for at søgningen kan udføres.\n\nVil du opdatere indstillingen og slette søgekriterierne?",
		unified_search_details: "Detaljer for søgning på tværs af opbevaringssteder",
		unified_search_fixed_value_property: "Fast værdiegenskab",
		unified_search_required_property: "Påkrævet egenskab",
		unified_search_display_only_property: "Egenskaben Vis kun",
		unified_search_missing_required_properities: "Søgningen kan ikke gemmes eller udføres.<br/>Følgende egenskaber er påkrævede: ${0} Du skal inkludere egenskaberne i en tilknytning og tilføje egenskaberne med værdier til søgekriterierne.",
		unified_search_property_repostory: "${0} (Opbevaringssted: ${1})",
		unified_search_builder_no_mappings: "Søgningen kan ikke udføres.<br/>Du skal oprette en egenskabstilknytning og inkludere den i <b>Visning af resultater</b>, så søgningen kan vise resultaterne.",
		unified_search_builder_insufficient_criteria_to_run: "Søgningen kan ikke udføres.<br/>Søgekriterierne indeholder ikke tekstsøgningskriterier eller egenskabsværdier til følgende opbevaringssteder:${0}Til alle opbevaringssteder i søgningen skal du enten angive tekstsøgningskriterier eller oprette en egenskabstilknytning, inkludere den i egenskabskriterierne og angive en egenskabsværdi.",
		unified_search_builder_insufficient_criteria_to_save: "Søgningen kan ikke gemmes.<br/>Søgningen indeholder ikke tekstsøgningskriterier til følgende opbevaringssteder:${0}Til alle opbevaringssteder i søgningen skal du angive en af følgende indstillinger:<ol><li>Opret en egenskabstilknytning, og inkludér den i egenskabskriterierne.</li><li>Revidér opbevaringsstedet, så det indeholder tekstsøgningskriterier, og opret en egenskabstilknytning, og inkludér den i <b>Visning af resultater</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Søgningen kan ikke udføres.<br/>Til alle opbevaringssteder, der er inkluderet i søgningen, skal du angive mindst én egenskabsværdi. Du kan f.eks. angive værdier for følgende egenskaber: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Søgningen kan ikke udføres.<br/>Tekstsøgekriterier er påkrævede.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Søgningen kan ikke udføres.<br/>Til alle opbevaringssteder, der er inkluderet i søgningen, skal du angive mindst én egenskabsværdi eller angive tekstsøgekriterier. Du kan f.eks. angive værdier for følgende egenskaber: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Søgningen kan ikke udføres.<br/>Tekstsøgekriterier er påkrævede. Til alle opbevaringssteder, der er inkluderet i søgningen, skal du angive mindst én egenskabsværdi eller angive tekstsøgekriterier. Du kan f.eks. angive værdier for følgende egenskaber: ${0}",
		unified_search_invalid_criteria: "Søgningen indeholder ugyldige kriterier, der forhindrer, at søgningen kan udføres.<br/>De ugyldige kriterier er fjernet. Du skal dog gemme ændringerne til søgningen, før du kan udføre søgningen. Hvis du ikke vil gemme ændringerne, skal du lukke søgningen.<br/><br/>Følgende elementer er fjernet eller ændret: ${0}",
		unified_search_invalid_fixed_values: "Søgningen kan ikke gemmes eller udføres.<br/>Følgende søgekriterier har faste værdier, der ikke er gyldige:${0} Udfør en af følgende handlinger for at løse problemet:<ul><li>Fjern det søgekriterium, der indeholder ugyldige værdier</li><li>Redigér de tilknytninger, der indeholder IBM Content Manager OnDemand-egenskaben med den faste værdi, for at fjerne egenskaben.</li><li>Redigér de tilknytninger, der indeholder IBM Content Manager OnDemand-egenskaben med den faste værdi, for at gøre alle egenskaber kompatible. Der er flere oplysninger, om hvilke egenskaber der kan tilknyttes, via linket Lær mere, der er placeret i den indledende tekst øverst i vinduet til tilknytning af egenskaber.</li></ul>",
		unified_search_cannot_add_properties: "Du kan ikke tilføje egenskaber til denne søgning.<br/>Alle de tilgængelige tilknyttede egenskaber er allerede i søgekriterierne, og de enkelte egenskaber kan kun tilføjes til søgningen én gang.",
		unified_search_mapping_not_viewable: "Egenskaber for Box-skabelon bliver ikke vist i søgeresultaterne. Hvis du vil tilføje denne tilknytning som en kolonne, skal du tilknytte mindst én egenskab, som ikke er en Box-skabelonegenskab. Du kan f.eks. vælge en egenskab fra et andet lager.",

		unified_search_returned_more: "Mindst ét opbevaringssted har returneret mere end det tilladte antal resultater.",
		unified_search_partial_failure: "Der er opstået en fejl på mindst ét opbevaringssted.",
		unified_search_partial_failure_and_returned_more: "Der er opstået en fejl på mindst ét opbevaringssted, og mindst ét opbevaringssted har returneret mere end det tilladte antal resultater.",
		unified_search_see_analysis: "Se resultatanalysen.",
		unified_search_analysis_intro_returned_more: "For hvert opbevaringssted der har overskredet det tilladte antal resultater, kan du prøve at ændre søgekriterierne, så der returneres færre resultater. Du kan også udføre en søgning i et enkelt opbevaringssted for at returnere flere resultater end det tilladte maksimum for søgninger på tværs af opbevaringssteder.",
		unified_search_analysis_intro_partial_failure: "Gennemgå de oplysninger om fejl, som returneres af et eller flere opbevaringssteder. Hvis det er muligt, skal du afhjælpe fejlene og køre søgningen på tværs af opbevaringssteder igen.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "For hvert opbevaringssted, hvor der er opstået en fejl, skal du forsøge at løse problemet og derefter udføre søgningen igen.<br/><br/>For hvert opbevaringssted der har overskredet det tilladte antal resultater, kan du prøve at ændre søgekriterierne, så der returneres færre resultater. Du kan også udføre en søgning i et enkelt opbevaringssted for at returnere flere resultater end det tilladte maksimum for søgninger på tværs af opbevaringssteder.",
		unified_search_results_found: "Resultater fundet",
		unified_search_maximum_allowed: "Maksimum tilladt",
		unified_search_maximum_exceeded: "Maksimum overskredet",

		unified_search_mapping_rule_box: "Denne egenskab kan ikke tilføjes til tilknytningen.<p>Egenskaben ${0} fra opbevaringsstedet ${1} er allerede i en anden tilknytning, og søgbare genskaber fra dette opbevaringssted kan kun inkluderes i én tilknytning for hver søgning.<br/>Vælg en anden tilknytning, der skal tilføjes til tilknytningen.</p>",
		unified_search_mapping_rule_repository: "Egenskaben kan ikke tilføjes til tilknytningen.<br/>Tilknytningen inkluderer allerede en egenskab fra opbevaringsstedet ${0}. En tilknytning kan kun inkludere én egenskab fra et opbevaringssted.<br/>Vælg et andet opbevaringssted at tilføje en egenskab fra, eller opret en ny tilknytning for den valgte egenskab.",
		unified_search_mapping_rule_data_type: "Egenskaben kan ikke tilføjes til tilknytningen.<br/>En ${0}-egenskab kan ikke tilknyttes til en ${1}-egenskab. Vælg en anden egenskab, eller opret en ny tilknytning for den valgte egenskab.<br/>Der er flere oplysninger, om hvilke egenskaber der kan tilknyttes via linket Lær mere, der er placeret i den indledende tekst øverst i dette vindue.",
		unified_search_mapping_rule_cardinality: "Egenskaben kan ikke tilføjes til tilknytningen.<br/>Alle egenskaberne i tilknytningen skal understøtte enten enkeltværdier eller flere værdier. Den valgte egenskab understøtter ${0}, og egenskaberne i tilknytningen understøtter ${1}.<br/>Vælg at tilføje en anden egenskab, eller opret en ny tilknytning for den valgte egenskab.",
		unified_search_mapping_rule_fixed_value: "Egenskaben kan ikke tilføjes til tilknytningen.<br/>Tilknytningen inkluderer allerede en egenskab med en fast værdi. En tilknytning kan kun inkludere én egenskab med en fast værdi.<br/>Vælg at tilføje en anden egenskab, eller opret en ny tilknytning for den valgte egenskab.",
		unified_search_mapping_rule_child_component: "Egenskaben kan ikke tilføjes til tilknytningen.<br/>En egenskab med en underordnet komponent kan ikke tilknyttes til andre egenskaber. Hvis du vil kunne søge på denne egenskab, skal du oprette en ny tilknytning for den valgte egenskab.",
		unified_search_mapping_rule_operator_intersection: "Egenskaben kan ikke tilføjes til tilknytningen.<br/>Alle egenskaberne i tilknytningen skal have en eller flere operatorer tilfælles. Egenskaben ${0} har imidlertid ikke nogen operatorer tilfælles med de andre egenskaber i tilknytningen.<br/>Vælg en anden egenskab, hvis det er relevant. Hvis du skal inkludere den valgte egenskab, skal du sammen med systemadministratoren redigere de operatorer, der er tilknyttet egenskaben.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Udvidede indstillinger",
		advanced_search_options_intro: "Angiv udvidede indstillinger.",
		advanced_search_options_editable: "Redigérbar",
		advanced_search_options_readonly: "Skrivebeskyttet",
		advanced_search_options_required: "Påkrævet",
		advanced_search_options_hidden: "Skjult",
		advanced_search_options_property_editable:"Egenskaben er:",
		advanced_search_options_operators:"Operatorer:",
		advanced_search_options_use_all:"Brug alle",
		advanced_search_options_use_selected:"Brug valgte",
		advanced_search_options_operators_filtered: "Operatorer er filtreret",
		// Data types in lowercase
		data_type_boolean: "boolesk",
		data_type_date: "dato",
		data_type_time: "klokkeslæt",
		data_type_timestamp: "tidsstempel",
		data_type_decimal: "decimalværdi",
		data_type_double: "tal med flydende decimaltegn",
		data_type_short: "heltal",
		data_type_integer: "heltal",
		data_type_long: "heltal",
		data_type_string: "tekststreng",
		data_type_string_alpha: "alfabetisk streng",
		data_type_string_alphanum: "alfanumerisk streng",
		data_type_string_ext: "udvidet alfanumerisk streng",
		data_type_string_num: "numerisk streng",
		data_type_binary: "binær",
		data_type_object: "objekt",
		data_type_guid: "guid (globally unique identifier)",
		data_type_user: "brugere",
		data_type_child_component: "underordnet komponent",

		/* Print Dialog */
		print_title: "Udskriv",
		print_message: "Udskriver: ${0}",
		print_print_button: "Udskriv",
		print_clean_margins_button: "Angiv alle til 0",
		print_type: "Printertype:",
		print_printer_server_options: "Serverudskrivningsparametre",
		print_printer_properties: "Printeregenskaber",
		print_printer_fax_properties: "Faxegenskaber",
		print_printer_name: "Navn på printer:",
		print_fax_recipient: "Modtager",
		print_fax_sender: "Afsender",
		print_copies: "Antal kopier:",
		print_local_orientation: "Retning",
		print_local_orientation_landscape: "Tværformat",
		print_local_orientation_portrait: "Højformat",
		print_local_margins: "Marginer",
		print_local_margins_top: "Top",
		print_local_margins_bottom: "Bund",
		print_local_margins_left: "Venstre",
		print_local_margins_right: "Højre",
		print_printer_server: "Server",
		print_printer_local: "Lokal",
		print_property_class: "Klasse:",
		print_property_routing: "Rutning:",
		print_property_pagedef: "SideDef:",
		print_property_node: "Node:",
		print_property_writer: "Forfatter:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Mål:",
		print_property_forms: "Formularer:",
		print_property_faxnotes: "Bemærkninger:",
		print_property_faxcompany: "Firma:",
		print_property_faxnumber: "Faxnummer:",
		print_property_faxname: "Navn:",
		print_property_faxsendertelnumber: "Telefonnummer:",
		print_property_faxcoverpage: "Forside:",
		print_property_faxsubject: "Emne:",
		print_saveoptions: "Gem udskrivningsparametre",
		print_property_bannerpage: "Brug bannerside",
		print_print_with_info_fields: "Udskriv med infofelter",
		print_field_from: "Fra",
		print_field_to: "Til",
		print_invalid_value_class: "Gyldige tegn er A-Z eller 0-9",
		print_invalid_value_pagedef: "Gyldige tegn er bogstaver, tal eller tegnene @, #, $",
		print_invalid_value_writer: "Gyldige tegn er bogstaver, tal eller tegnene @, #, $",
		print_invalid_value_formdef: "Gyldige tegn er bogstaver, tal eller tegnene @, #, $",
		print_invalid_value_forms: "Gyldige tegn er bogstaver, tal eller tegnene @, #, $",
		print_invalid_value_margin: "Gyldige tal er mellem ${0} og ${1}",
		print_status_message: "${0} dokumenter er sendt til printeren ${1}.",

		print_applet_init_error: "Udskrivningsminiprogrammet kan ikke startes.",
		print_applet_init_error_explanation: "Denne fejl kan opstå, hvis: <br/><br/><ul><li>JRE (Java Runtime Environment) ikke er installeret på arbejdsstationen.</li><li>Java-pluginen ikke er aktiveret i webbrowseren.</li><li>JRE-versionen på din arbejdsstation er ikke kompatibel med IBM Content Navigator-versionen.</li><li>Tidsfristen for browseren blev overskredet i forbindelse med forsøg på at starte udskrivningsminiprogrammet.</li></ul>",
		print_applet_init_error_userResponse: "Du kan udføre følgende trin for at løse problemet med JRE:<br/><br/><ol><li>Kontrollér, at JRE er installeret på din arbejdsstation.</li><li>Sørg for, at Java-pluginen er aktiveret i webbrowseren.</li><li>Kontrollér, at JRE-versionen på din arbejdsstation er kompatibel med IBM Content Navigator, og forsøg igen. Der er en liste over understøttede versioner i dokumentet <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> på webstedet IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Forside",
		daeja_print_selected_documents_title: "Valgte dokumenter",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Match alle søgekriterierne",
		match_any_criteria: "Match et hvilket som helst søgekriterium",
		include_subfolders_summary: "${0} (inkludér underfoldere)",
		browse_button: "Gennemse&hellip;",
		search_for: "Søg efter:",
		object_type_documents: "Dokumenter",
		object_type_folders: "Foldere",
		object_type_documents_folders: "Dokumenter og foldere",
		object_type_web_links: "Weblink",
		object_type_documents_folders_web_links: "Dokumenter, foldere og weblink",

		/* SelectSearchFolderDialog */
		search_in: "Søg i:",
		include_subfolders: "Inkludér underfoldere",

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
		warning_char: "a",

		// used for state icon title in Contentlist
		locked_item_icon_title: "Låst af ${0}",
		checked_out_icon_title: "Tjekket ud af ${0}",
		major_minor_version_icon_title: "Overordnet version med underordnede versioner",
		suspended_icon_title: "Arbejdsgangen er midlertidigt afbrudt",
		on_hold_icon_title: "Tilbageholdes",
		has_notes_icon_title: "Har bemærkninger",
		record_icon_title: "Er erklæret som en record",
		compound_document_icon_title: "Sammensat dokument",
		validateTemplate_icon_title: "Teampladsskabelon skal valideres",
		offlineTemplate_icon_title: "Teampladsskabelon er offline",
		offlineTeamspace_icon_title: "Teampladsen er offline",
		pending_delete_icon_title: "Teamplads afventer sletning",
		delete_error_icon_title: "Teampladsen kan ikke slettes",
		defaultTemplate_icon_title: "Standardteampladsskabelon",
		teamspace_icon_title: "Teamplads",
		teamspace_template_icon_title: "Teampladsskabelon",
		has_bookmark_icon_title: "Har et bogmærke",
		read_only_icon_title: "Skrivebeskyttet",
		no_results_were_found: "Ingen resultater fundet.",
		folder_is_empty: "Folderen er tom.",
		no_checked_out_items: "Der er ingen elementer, der er tjekket ud.",
		inbasket_is_empty: "Indbakken er tom.",
		worklist_is_empty: "Arbejdslisten er tom.",
		tracker_milestone_completed: "Udført",
		stepprocessor_attachments_title: "Indhold",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Lås elementer",
		unlock_items: "Lås elementer op",
		checkin_item: "Tjek element ind",

		/* Help */
		learn_more: "Læs mere",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Åbn teamplads",
		repository_tab_createWorkspace: "Ny teamplads",
		repository_tab_createWorkspaceTemplate: "Ny teampladsskabelon",
		repository_tab_DefaultTemplate: "Standard",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Denne opgave kopierer dokumenter.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Du har ikke redigeringsprivilegier til den valgte teampladsskabelon.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Er du sikker på, at du vil slette teampladsen ${0}? <br><br>Kun det dokument, der gemmes i andre foldere i opbevaringsstedet, forbliver i opbevaringsstedet. Dokumenter, der kun gemmes i teampladsen, slettes.",
		teamspaceDecommissionLabel: "Slet:",
		teamspaceDecommissionDescription: "Hvis teampladsen slettes, fjernes det fra serveren: Angiv, hvordan teampladsartifakter skal håndteres.",
		teamspaceDecommissionOptions: "Slet teampladsindstillinger",
		teamspaceDecommissionDeleteAll: "Slet alle teampladsartifakter",
		teamspaceDecommissionReFileAll: "Arkivér alle teampladsartifakter igen",
		teamspaceDecommissionReFileDestination: "Flyt til:",
		teamspaceDecommissionReFileIn: "Arkivér igen i",
		teamspaceDecommissionTaskName: "Teampladssletning",
		teamspaceDecommissionTaskDescription: "Denne opgave sletter en teamplads fra opbevaringsstedet.",
		teamspaceDecommissionDeletionStarted: "Der er planlagt sletning af teampladsen.",
		teamspaceDecommissionDeletionConnectionFailed: "Sletteopgaven for en teamplads kan ikke udføres, fordi der ikke kunne oprettes forbindelse til opbevaringsstedet. Kontrollér, at brugeroplysningerne for opbevaringsstedets administrator er korrekte.",

		teamspace_edit_properties_notsupported: "Du kan kun redigere egenskaberne for teampladser fra oversigten Teampladser.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Teampladsen er offline og kan kun åbnes af ejerne",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Folder:",
		workspace_validation_ets: "Følgende indgangsskabeloner er ikke tilgængelige på dette opbevaringssted og blev fjernet fra listen over valgte indgangsskabeloner:",
		workspace_validation_classes: "Følgende klasser er ikke tilgængelige på dette opbevaringssted og blev fjernet fra listen over valgte klasser:",
		workspace_validation_searches: "Følgende søgninger er ikke tilgængelige på dette opbevaringssted og blev fjernet fra listen over valgte søgninger:",
		workspace_validation_docs_folders: "Følgende dokumenter og foldere er ikke tilgængelige på dette opbevaringssted og blev fjernet fra listen over inkluderede elementer:",
		workspace_change_template_confirmation_question: "Hvis du vælger en anden skabelon, vil alle dine ændringer gå tabt. Vil du fortsætte?\n",
		workspace_delete_item_confirmation_question: "Vil du fjerne elementet ${0}?\n",
		workspace_delete_role_confirmation_question: "Vil du fjerne rollen ${0}?\n",
		workspace_delete_confirmation_question: "Hvis du sletter en teamplads, er det kun opbevaringsstedet for teampladsen, der slettes. Folderne og dokumenterne på teampladsen forbliver på opbevaringsstedet, og du kan finde dem ved at foretage en søgning. Hvis du vil slette indholdet af teampladserne, skal du først slette elementerne på teampladsen og derefter slette teampladsen.<br><br>Vil du slette teampladsen ${0}?",
		workspacebuilder_instance_template_name_header: "Navn på teampladsskabelon",
		workspacebuilder_instance_template_description_header: "Beskrivelse",

		workspacebuilder_template_tooltip_name: "Skabelonnavnet må ikke indeholde følgende tegn: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Teampladsnavnet må ikke indeholde følgende tegn: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Angiv en beskrivelse, så brugerne kan foretage det rigtige valg fra listen med skabeloner. Du kan f.eks. medtage oplysninger om de forventede brugere eller den forventede brug af skabelonen.",
		workspacebuilder_instance_tooltip_description: "Angiv en beskrivelse, så brugerne kan skelne mellem denne teamplads og de andre teampladser.",

		workspacebuilder_template_edit_properties_pane: "Redigér teampladsskabelon",
		workspacebuilder_instance_properties_pane: "Definér teamplads",
		workspacebuilder_template_properties_pane: "Definér teampladsskabelon",

		workspacebuilder_instance_security_pane: "Angiv sikkerhed for teamplads",
		workspacebuilder_template_security_pane: "Angiv sikkerhed for skabelon",

		workspacebuilder_layout_pane: "Vælg layout",
		workspacebuilder_search_templates_pane: "Vælg søgninger",
		workspacebuilder_document_folders_pane: "Inkludér foldere og dokumenter",
		workspacebuilder_doctypes_entryTemplates_pane: "Vælg klasser eller indgangsskabeloner",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Vælg klasser",
		workspacebuilder_security: "Teampladssikkerhed",

		workspacebuilder_roles_pane: "Vælg roller",
		workspacebuilder_security: "Sikkerhed",

		workspacebuilder_properties_templates: "Tilgængelige skabeloner:",
		workspacebuilder_available_templates: "Tilgængelige søgninger:",
		workspacebuilder_selected_templates: "Valgte søgninger:",
		workspacebuilder_templates_name: "Navn på søgning",

		workspacebuilder_available_entryTemplates: "Tilgængelige indgangsskabeloner:",
		workspacebuilder_selected_entryTemplates: "Valgte indgangsskabeloner:",

		workspacebuilder_item_classes: "Tilgængelige klasser:",
		workspacebuilder_item_classes_selected: "Valgte klasser:",
		workspacebuilder_properties_select_template: "Vælg en skabelon, der skal bruges til denne teamplads.",
		workspacebuilder_template_properties: "Definér teampladsskabelon",
		workspacebuilder_instance_properties: "Definér teamplads",
		workspacebuilder_template_introText: "Angiv de fælles komponenter, du vil inkludere på hver teamplads, der oprettes ud fra denne skabelon, ved hjælp af valgene i navigeringen. Klik på <b>Udfør</b>, når du er færdig, for at gøre skabelonen tilgængelig for andre brugere, som kan bruge den til at oprette nye teampladser.",
		workspacebuilder_instance_introText: "Teams bruger teampladser til at dele og arbejde med specifikke dokumentsæt. Giv teampladsen et meningsfuldt navn, så brugerne kan skelne denne teamplads fra andre teampladser. Du kan tilpasse teampladsen ved at inkludere yderligere søgninger, klasser eller indgangsskabeloner, dokumenter og foldere.",

		workspacebuilder_template_search_template_introText: "Vælg de standardsøgninger, du vil inkludere i hver teamplads, der oprettes ud fra denne skabelon. Hvis du ikke vælger nogen søgninger, får brugerne af teampladsen vist alle de søgninger, de har adgang til. Med de relevante tilladelser kan brugerne dele og tilføje søgninger i teampladsen.",
		workspacebuilder_instance_search_template_introText: "Inkludér søgninger, så brugerne af teampladsen kan udføre opgaver mere effektivt. Hvis ingen søgninger inkluderes, får brugerne af teampladsen vist alle de søgninger, de har tilladelser til. Brugerne kan også tilføje og dele søgninger på teampladsen, hvis de har de relevante tilladelser.",

		workspacebuilder_template_roles_introText: "Teampladsbrugere tilknyttes til roller. Roller angiver de opgaver, brugere må udføre. Klik på ikonerne ud for hver rolle for at se de tilladte opgaver. Vælg de roller, der er relevante for teampladsen.",
		workspacebuilder_template_roles_modify_introText: "Du kan redigere de tilladelser, der er knyttet til hver rolle på denne teamplads. Du bør give teampladsmedlemmerne besked, når deres tilladelser ændres.",

		workspacebuilder_template_roles_header_name: "Rollenavn",

		workspacebuilder_template_folders_introText: "Vælg de standarddokumenter og -foldere, der skal medtages i alle de teampladser, der oprettes fra denne skabelon. Du kan tilføje dokumenter som link eller kopier. Brug link til at pege på dokumenter, som du ikke ønsker flere kopier af, f.eks. regler eller procedurer. Opret kopier af dokumenter, som brugere vil ændre, f.eks. skabeloner og formularer.",
		workspacebuilder_instance_folders_introText: "Vælg de standarddokumenter og -foldere, der skal medtages i teampladsen. Du kan tilføje dokumenter som link eller kopier. Brug link til at pege på dokumenter, som du ikke ønsker flere kopier af, f.eks. regler eller procedurer. Opret kopier af dokumenter, som brugere vil ændre, f.eks. skabeloner og formularer.",

		workspacebuilder_template_roles_introText: "Angiv de roller, der skal inkluderes på hver teamplads, som oprettes ud fra denne skabelon. Du kan også oprette nye roller, som du kan bruge, når du opretter andre teampladsskabeloner.",
		workspacebuilder_instance_users_introText: "På en teamplads er hver bruger knyttet til en eller flere roller, der angiver de opgaver, brugeren kan udføre. Tilføj brugere til teampladsen, og tilknyt roller til brugerne.",

		workspacebuilder_instance_navigation_pane_title: "Teamplads - oprettelsesfunktion",
		workspacebuilder_template_navigation_pane_title: "Teampladsskabelon - oprettelsesfunktion",

		workspacebuilder_roles_roles_nopermissions: "Der er ikke valgt nogen tilladelser til rollen {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Valgte roller:",
		workspacebuilder_roles_available_roles: "Tilgængelige roller:",
		workspacebuilder_roles_privilege_header: "Tilladelse",
		workspacebuilder_roles_select_role: "Vælg rolle",
		workspacebuilder_roles_select_permission: "Vælg tilladelse",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "En rolle med navnet {0} findes allerede. Du skal angive et entydigt navn på rollen. ",
		workspacebuilder_roles_edit_dialog_role_name: "Rollenavn:",
		workspacebuilder_roles_edit_dialog_role_description: "Rollebeskrivelse:",
		workspacebuilder_roles_edit_dialog_title_new: "Ny rolle",
		workspacebuilder_roles_edit_dialog_title_edit: "Redigér rolle",

		workspacebuilder_roles_privileges_header: "Tilladelser for rollen {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dokumenttilladelser:",
		workspacebuilder_roles_priv_group_folder: "Foldertilladelser:",
		workspacebuilder_roles_priv_group_teamspace: "Teampladstilladelser:",
		workspacebuilder_roles_priv_group_item: "Dokument- og foldertilladelser:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Administrér tilladelser",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Brugere med denne tilladelse kan administrere adgangen til dokumenter og foldere på teampladsen. Tilladelsen omfatter at tillade andre brugere at slette, redigere egenskaber, oprette underfoldere osv.",

		workspacebuilder_roles_priv_deleteItems: "Slet",
		workspacebuilder_roles_plbl_deleteItems: "Brugere med denne tilladelse kan slette dokumenter og foldere fra teampladsen.",

		workspacebuilder_roles_priv_createItems: "Opret",
		workspacebuilder_roles_plbl_createItems: "Brugere med denne tilladelse kan oprette dokumenter og foldere på teampladsen.",

		workspacebuilder_roles_priv_viewItemProperties: "Vis egenskaber",
		workspacebuilder_roles_plbl_viewItemProperties: "Brugere med denne tilladelse kan få vist egenskaberne for dokumenter og foldere på teampladsen, herunder systemegenskaberne.",

		workspacebuilder_roles_priv_modifyItemProperties: "Redigér egenskaber",
		workspacebuilder_roles_plbl_modifyItemProperties: "Brugere med denne tilladelse kan redigere egenskaberne for dokumenter og foldere på teampladsen",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Administrér foldertilladelser",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Brugere med denne tilladelse kan administrere adgangen til foldere på teampladsen. Tilladelsen omfatter at tillade andre brugere at slette foldere, redigere folderegenskaber, oprette underfoldere osv.",

		workspacebuilder_roles_priv_deleteFolders: "Slet foldere",
		workspacebuilder_roles_plbl_deleteFolders: "Brugere med denne tilladelse kan slette foldere fra teampladsen",

		workspacebuilder_roles_priv_modifyFolderProperties: "Redigér folderegenskaber",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Brugere med denne tilladelse kan redigere egenskaberne for foldere på teampladsen",

		workspacebuilder_roles_priv_createSubfolders: "Opret underfoldere",
		workspacebuilder_roles_plbl_createSubfolders: "Brugere med denne tilladelse kan oprette foldere på teampladsen",

		workspacebuilder_roles_priv_fileInFolders: "Tilføj til foldere",
		workspacebuilder_roles_plbl_fileInFolders: "Bruger med denne tilladelse kan tilføje et link fra foldere på teampladsen til dokumenter.",

		workspacebuilder_roles_priv_viewFolderProperties: "Vis folderegenskaber",
		workspacebuilder_roles_plbl_viewFolderProperties: "Brugere med denne tilladelse kan få vist egenskaberne for de foldere på teampladsen, der inkluderer systemegenskaberne.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Administrér dokumenttilladelser",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Brugere med denne tilladelse kan administrere adgangen til dokumenter på teampladsen. Tilladelsen omfatter at tillade andre brugere at slette dokumenter, redigere dokumentegenskaber osv.",

		workspacebuilder_roles_priv_deleteDocuments: "Slet dokumenter",
		workspacebuilder_roles_plbl_deleteDocuments: "Brugere med denne tilladelse kan slette dokumenter fra teampladsen",

		workspacebuilder_roles_priv_promoteVersions: "Forfrem versioner",
		workspacebuilder_roles_plbl_promoteVersions: "Brugere med denne tilladelse kan tildele et nyt versionsnummer til dokumenter på teampladsen.",

		workspacebuilder_roles_priv_modifyContent: "Redigér dokumenter",
		workspacebuilder_roles_plbl_modifyContent: "Brugere med denne tilladelse kan redigere indholdet af dokumenter på teampladsen",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Redigér dokumentegenskaber",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Brugere med denne tilladelse kan redigere egenskaberne for dokumenter på teampladsen",

		workspacebuilder_roles_priv_viewContent: "Vis dokumenter",
		workspacebuilder_roles_plbl_viewContent: "Brugere med denne tilladelse kan få vist dokumenter på teampladsen",

		workspacebuilder_roles_priv_viewDocumentProperties: "Vis dokumentegenskaber",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Brugere med denne tilladelse kan få vist egenskaberne for dokumenterne på teampladsen, herunder systemegenskaberne.",

		workspacebuilder_roles_priv_addNewSearches: "Tilføj søgninger",
		workspacebuilder_roles_plbl_addNewSearches: "Brugere med denne tilladelse kan tilføje søgninger til teampladsen. Som standard er søgningen ikke tilgængelig for andre brugere.",

		workspacebuilder_roles_priv_createNewSearches: "Opret søgninger",
		workspacebuilder_roles_plbl_createNewSearches: "Brugere med denne tilladelse kan oprette søgninger, men de kan ikke gemme søgningerne. Hvis brugerne ikke har denne tilladelse, kan de ikke tilføje dokumenter til teampladsen, hvis dokumenterne allerede findes på opbevaringsstedet.",

		workspacebuilder_roles_priv_shareSearches: "Del søgninger",
		workspacebuilder_roles_plbl_shareSearches: "Brugere med denne tilladelse kan dele søgninger, de opretter, med andre brugere af teampladsen.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Administrér klasser eller indgangsskabeloner",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Brugere med denne tilladelse kan tilføje og fjerne klasser eller indgangsskabeloner fra teampladsen.",

		workspacebuilder_roles_priv_addRemoveClasses: "Administrér klasser",
		workspacebuilder_roles_plbl_addRemoveClasses: "Brugere med denne tilladelse kan tilføje og fjerne klasser fra teampladsen.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Administrér teampladsbrugere",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Brugere med denne tilladelse kan tilføje og fjerne brugere og grupper fra teampladsen. De kan også styre, hvilke roller brugerne får tildelt.",

		workspacebuilder_roles_priv_modifyRoles: "Revidér roller",
		workspacebuilder_roles_plbl_modifyRoles: "Ejere med denne tilladelse kan ændre rolletilladelser for teampladsen. Denne tilladelse er kun tilgængelig for ejere.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Vælg brugere",
		workspacebuilder_users_add_users_and_groups_button: "Tilføj brugere og grupper...",
		workspacebuilder_users_users_or_group_header: "Bruger og gruppe",
		workspacebuilder_users_roles_header: "Roller",

		workspacebuilder_users_role_header: "Rolle",
		workspacebuilder_users_role_no_permissions: "Denne rolle har ingen tilladelser",
		workspacebuilder_users_available_roles_label: "Tilgængelige roller:",
		workspacebuilder_users_selected_users_and_groups_label: "Valgte brugere og grupper:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Teampladsen kan ikke gemmes. Du skal angive mindst én ejer for teampladsen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Teampladsen kan ikke gemmes. Alle brugere skal have tilknyttet en rolle.",
		// end of select users

		workspacebuilder_search_templates: "Vælg søgninger",
		workspacebuilder_search_add: "Tilføj søgning",
		workspacebuilder_properties_workspaceName: "Teampladsnavn:",
		workspacebuilder_properties_templateName: "Skabelonnavn:",
		workspacebuilder_properties_workspaceDescription: "Beskrivelse af teamplads:",
		workspacebuilder_properties_templateDescription: "Beskrivelse af skabelon:",
		workspacebuilder_properties_workspaceTemplate: "Valgt skabelon:",
		workspacebuilder_properties_security: "Del skabelon med:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Flyt fra teamplads:",
		moveTeamspaceDocuments_security: "Del dokument med:",
		moveTeamspaceDocuments_security_change: "Angiv tilpasset sikkerhed for de valgte elementer",
		moveTeamspaceDocuments_item_type_level: "Du kan ikke vælge at tilsidesætte sikkerhed for de valgte elementer, fordi klassen for det valgte element er konfigureret til kun at bruge sikkerhed på klasseniveau",
		moveTeamspaceDocuments_security_inherit: "Overtag sikkerhed fra destinationsfolder",
		moveTeamspaceDocuments_file_info_text: "Du kan flytte elementer fra en teamplads til en anden teamplads eller folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Du har ikke de nødvendige tilladelser til at flytte elementerne til den valgte folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Du har ikke de nødvendige tilladelser til at flytte elementerne fra teampladsen.",
		moveTeamspaceDocuments_move_mixed_items: "Du kan ikke tilsidesætte sikkerheden for de valgte elementer. Nogle elementer styres ikke af teampladses. Du kan kun tilsidesætte sikkerheden for elementer, der styres af teampladsen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Du skal angive et navn på teampladsen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Du skal angive et navn på teampladsskabelonen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Teampladsnavnet må ikke indeholde følgende tegn: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Skabelonnavnet må ikke indeholde følgende tegn: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link til dokument",
		workspacebuilder_folders_makeDocCopy: "Kopiér dokument",
		workspacebuilder_folders_newfolder: "Ny folder",
		workspacebuilder_folders_local_drive: "Fra lokalt bibliotek",
		workspacebuilder_folders_from_repo: "Fra opbevaringssted",
		workspacebuilder_folders_add_doc: "Tilføj dokument",
		workspacebuilder_folders_grid_name: "Navn",
		workspacebuilder_folders_props: "Egenskaber",
		workspacebuilder_folders_remove: "Fjern",
		workspacebuilder_folders_delete: "Slet",
		workspacebuilder_folders_adddoc_local: "Tilføj dokument fra lokalt drev",
		workspacebuilder_folders_adddoc_repo: "Tilføj dokument fra opbevaringssted",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Det angivne foldernavn findes allerede. Angiv et andet foldernavn.",

		workspacebuilder_classes_title: "Vælg klasser eller indgangsskabeloner",
		workspacebuilder_classes_title_cm: "Vælg klasser",
		workspacebuilder_classes_template_introText: "Angiv, om de teampladser, der oprettes ud fra denne skabelon, skal bruge klasser eller indgangsskabeloner til at tilføje dokumenter til opbevaringsstedet. Hvis der ikke vælges nogen klasser, får teampladserne vist alle de klasser, de har adgang til. Brugerne kan ændre listen med klasser eller indgangsskabeloner på teampladsen, hvis de har de relevante tilladelser.",
		workspacebuilder_classes_template_introText_cm: "Vælg de klasser, som brugere kan bruge til at tilføje dokumenter til opbevaringsstedet. Hvis ingen klasser vælges, får brugerne af teampladsen vist alle de klasser, de har adgang til. Brugere kan ændre listen med klasser på teampladsen, hvis de har de relevante tilladelser.",
		workspacebuilder_classes_instance_introText: "Vælg de klasser eller indgangsskabeloner, som brugere kan bruge til at tilføje dokumenter til opbevaringsstedet. Hvis ingen klasser vælges, får brugerne af teampladsen vist alle de klasser, de har tilladelser til. Brugere kan ændre listen med klasser eller indgangsskabeloner på teampladsen, hvis de har de relevante tilladelser.",
		workspacebuilder_classes_instance_introText_cm: "Vælg de klasser, som brugere kan bruge til at tilføje dokumenter til opbevaringsstedet. Hvis ingen klasser vælges, får brugerne af teampladsen vist alle de klasser, de har tilladelser til. Brugere kan ændre listen med klasser på teampladsen, hvis de har de relevante tilladelser.",
		workspacebuilder_classes_selection: "Vælg klasser:",
		workspacebuilder_classes_list: "Tilgængelige klasser:",
		workspacebuilder_classes_columns_default: "Standard",
		workspacebuilder_classes_columns_className: "Klassenavn",
		workspacebuilder_classes_type_classes: "Brug klasser til at tilføje dokumenter",
		workspacebuilder_classes_type_classes_tooltip: "Klasser inkluderer de tilhørende egenskaber, så dokumenter kan identificeres til senere brug.",
		workspacebuilder_classes_type_entryTemplates: "Brug indgangsskabeloner til at tilføje dokumenter",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Indgangsskabeloner sikrer, at de oplysninger, der er angivet for hvert enkelt dokument, er ensartede og bruger foruddefinerede værdier.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Navn på indgangsskabelon",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Beskrivelse",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Du skal tilføje mindst én indgangsskabelon til teampladsen.",

		workspacebuilder_classes_new: "Ny klasse",
		workspacebuilder_classes_add: "Tilføj klasse",
		workspacebuilder_entryTemplate_add: "Tilføj indgangsskabelon",
		workspacebuilder_add_list: "Tilføj",
		workspacebuilder_makeDefault_list: "Gør til standard",
		workspacebuilder_removeDefault_list: "Fjern standard",

		workspacebuilder_roles_title: "Vælg roller",
		workspacebuilder_roles_title_modify: "Revidér roller",

		workspacebuilder_selection_moveup: "Flyt op",
		workspacebuilder_selection_movedown: "Flyt ned",
		workspacebuilder_selection_remove: "Fjern",
		workspacebuilder_selection_add: "Tilføj",
		workspacebuilder_selection_create_new_search: "Ny søgning...",
		workspacebuilder_selection_create_new_role: "Ny rolle...",
		workspacebuilder_selection_make_role_available: "Gør tilgængelig",
		workspacebuilder_selection_make_role_available_tooltip: "Deler den valgte rolle med andre skabeloner. Du skal tilknytte mindst én tilladelse til rollen, for at den kan deles.",

		workspacebuilder_navigation_next: "Næste",
		workspacebuilder_navigation_finish: "Udfør",
		workspacebuilder_navigation_validate: "Validér",
		workspacebuilder_navigation_previous: "Forrige",
		workspacebuilder_navigation_cancel: "Annullér",
		workspacebuilder_navigation_customize: "Tilpas",

		workspacebuilder_search_dialog_title: "Søg",
		workspacebuilder_dialog_close: "Luk",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Tilgængelighed for skabelon:",
		workspace_properties_templateState_tooltip: "Gør skabelonen utilgængelig for at forhindre brugere i at oprette teampladser ved hjælp af skabelonen.",
		workspace_properties_dialog_title: "Skabelonegenskaber",
		workspace_properties_online_radio_option_label: "Gør tilgængelig",
		workspace_properties_offline_radio_option_label: "Gør utilgængelig",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Vil du annullere uden at gemme ændringerne?",
		workspacebuilder_cancel_confirmation_button: "Ja",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Eventuelle ugyldige elementer fjernes fra skabelonen, og skabelonen gøres tilgængelig for brugerne. Vil du validere denne teampladsskabelon?",
		workspacebuilder_validate_confirmation_button: "Ja",
		workspacebuilder_validate_confirmation_title: "Validér",

		/* Entry templates builder */
		entry_templates: "Styring af indgangsskabeloner",
		no_entry_templates_were_found: "Der er ingen indgangsskabeloner",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Roller:",

		/* User Group picker widget */
		directory_label: "Bibliotek:",
		scope_label: "Søg efter:",
		name_starts_with_label: "Navn starter med",
		name_contains_label: "Navn indeholder",
		display_name_contains_label: "Fremvisningsnavn indeholder",
		starts_with_label: "Starter med:",
		available_label: "Tilgængelig:",
		available_heading: "Tilgængelig",
		selected_label: "Valgt:",
		selected_heading: "Valgt",
		available_repositories_label: "Tilgængelige opbevaringssteder",
		selected_repositories_label: "Valgte opbevaringssteder",
		default_repository: "Standardopbevaringssted:",
		default_repository_placeholder: "Vælg et opbevaringssted",
		default_role_placeholder: "Vælg en rolle",
		menu_label_placeholder: "Vælg eller angiv en etiket",
		default_repository_hover: "Angiv det opbevaringssted, der vælges som standard, når brugerne logger på webklienten fra denne arbejdsplads.<br><br><b>Vigtigt:</b> Du skal tilføje opbevaringssteder til arbejdspladsens liste med valgte opbevaringssteder, før du kan angive standardopbevaringsstedet.",
		default_repository_workflow_hover: "<b>Husk:</b> Du kan kun konfigurere applikationspladser for de opbevaringssteder, der er konfigureret til denne arbejdsplads.",
		remove_label: "Fjern",
		users_label: "Brugere",
		groups_label: "Grupper",
		user_or_group_name_label: "Navn på bruger eller gruppe:",
		user_or_group_name_hover: "Angiv navnet på en bruger eller gruppe, der er gyldig på opbevaringsstedet. Navnet valideres ikke.",
		user: "Bruger",
		group: "Gruppe",
		name: "Navn:",
		displayName: "Fremvisningsnavn",
		display_name: "Fremvisningsnavn:",
		shortName: "Kort navn:",
		distinguishedName: "DN (Distinguished Name):",
		search_tooltip: "Søg",
		add_tooltip: "Tilføj",
		add_selected_tooltip: "Tilføj til listen med valgte",
		remove_tooltip: "Fjern",
		remove_selected_tooltip: "Fjern fra listen med valgte",
		add_to_selected_tooltip: "Tilføj",
		remove_from_selected_tooltip: "Fjern",
		move_up_selected_tooltip: "Flyt op",
		move_down_selected_tooltip: "Flyt ned",
		advanced_search_options_tooltip: "Udvidede indstillinger",
		move_right_selected_tooltip: "Flyt til undermenu",
		move_left_selected_tooltip: "Flyt fra undermenu",
		add_separator: "Tilføj separator",
		menu_item_label: "Etiket for menuelement:",
		add_menu_label: "Tilføj undermenu",
		menu_label: "Etiket for undermenu:",
		menu_label_info: "<b>Vigtigt:</b> Du skal tilføje mindst ét menuelement til denne undermenu, før du kan gemme menuen.",
		menu_dropdown_label: "Etiket for rullemenuknap:",
		menu_dropdown_label_info: "<b>Vigtigt:</b> Du skal tilføje mindst ét menuelement til denne rullemenuknap, inden du kan gemme værktøjslinjen.",
		no_item_found: "Ingen resultater fundet.",
		me: "Mig",
		anyone: "Enhver",
		specific_users: "Bestemte brugere",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Søgningen returnerede flere end {0} resultater. Revidér kriterierne for at indsnævre søgningen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Søgeresultaterne indeholder elementer, der allerede er valgt. Disse elementer bliver ikke vist i søgeresultaterne.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Der er returneret mere end {0} resultater. Brug filtret til at begrænse antallet af resultater.",

		user_already_selected: "Den angivne bruger er allerede valgt. Angiv en anden bruger.",
		group_already_selected: "Den angivne gruppe er allerede valgt. Angiv en anden gruppe.",
		user_cannot_select_self: "Du kan ikke tilføje dig selv. Angiv en anden bruger.",

		/* Select User Group dialog */
		select_user_group_add_label: "Tilføj",
		select_user_group_cancel_label: "Annullér",
		add_users_groups_label: "Tilføj brugere og grupper",
		add_user_group_label: "Tilføj bruger og gruppe",
		add_users_label: "Tilføj brugere",
		add_user_label: "Tilføj bruger",
		add_label: "Tilføj:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Følgende dokumenter har ikke-gemte markeringsændringer:",
		viewer_confirm_to_proceed: "Vil du fortsætte og miste ændringerne?",
		viewer_warn_has_changes: "De ændringer, der ikke er gemt, bliver slettet.",
		viewer_warn_is_printing: "Udskrivning, der er i gang, kan muligvis ikke færdiggøres.",
		viewer_warn_confirm_exit: "Vil du afslutte?",
		viewer_prompt_save_changes: "Følgende dokument har ikke-gemte markeringsændringer, der vil gå tabt:<br>${0}<br><br>Vil du gemme ændringerne?",
		viewer_prompt_mergesplit_changes: "Følgende dokumenter har ikke-gemte ændringer:<br>${0}<br><br>Vil du fortsætte og miste ændringerne?",
		viewer_prompt_mergesplit_tab_changes: "Følgende dokument har ikke-gemte ændringer:<br>${0}<br><br>Vil du fortsætte og miste ændringerne?",
		viewer_new_item_name: "Nyt dokument",
		viewer_top_frame: "Øverste ramme:",
		viewer_bottom_frame: "Nederste ramme:",
		viewer_left_frame: "Venstre ramme:",
		viewer_right_frame: "Højre ramme:",
		viewer_viewer_frame: "Fremviserramme:",
		viewer_properties_frame: "Egenskabsramme:",
		viewer_comment_frame: "Kommentarramme:",
		viewer_mergesplit_on: "Oversigt",
		viewer_mergesplit_off: "Flet og opdel",
		viewer_mergesplit_context_menu_move: "Flyt",
		viewer_mergesplit_context_menu_rename: "Omdøb",
		viewer_mergesplit_context_menu_delete: "Slet",
		//move to new window
		viewer_move_to_new_window:"Flyt til nyt vindue",
		viewer_continue:"Slet ændringer",
		viewer_return_to_original_window:"Retur til oprindeligt vindue",
		viewer_switch_window:"Skift vindue",
		viewer_prompt_lost_changes:"Dokumentet ${0} er åbent i et andet vindue. Dokumentet indeholder ikke-gemte ændringer.<br><br>Vil du skifte til vinduet for at gemme ændringerne, eller vil du slette ændringerne og åbne det i dette vindue?",
		viewer_mergesplit_fallback_info: "Du kan kun udføre Flet og opdel-funktionen på dokumenter, der er i det samme opbevaringssted.",
		viewer_tabbed_layout: "Vis som skilleblade",
		viewer_tabbed_layout_highcontrast: "Skilleblade",
		viewer_split_vertical_layout: "Opdel skærmbilleder i top og bund",
		viewer_split_vertical_layout_highcontrast: "Top og bund",
		viewer_split_horizontal_layout: "Opdel skærmbilleder til venstre og højre",
		viewer_split_horizontal_layout_highcontrast: "Venstre og højre",
		viewer_add_vertical_layout: "Nyt skilleblad nederst",
		viewer_add_vertical_layout_highcontrast: "Nederste skilleblad",
		viewer_add_horizontal_layout: "Nyt skilleblad til højre",
		viewer_add_horizontal_layout_highcontrast: "Højre skilleblad",
		viewer_add_horizontal_layout_rtl: "Nyt skilleblad til venstre",
		viewer_add_horizontal_layout_rtl_highcontrast: "Venstre skilleblad",
		viewer_split_properties_layout: "Vis egenskaber",
		viewer_split_comment_layout: "Vis kommentarer",
		viewer_split_notelog_layout: "Vis notelog",
		viewer_window_title: "${0}-fremviser",
		viewer_next_hit: "Vis det næste dokument i listen",
		viewer_prev_hit: "Vis det forrige dokument i listen",
		viewer_confrim_more_search_results: "Søgeresultaterne indeholder ikke flere dokumenter, der kan vises. Vil du hente flere søgeresultater?",
		viewer_confirm_get_next_page: "Listen med resultater indeholder ikke flere elementer, der kan vises. Vil du hente flere søgeresultater?",
		viewer_confirm_get_next_item: "Listen med resultater indeholder flere elementer, der kan vises. Vil du have vist det næste element?",
		viewer_fn_annotation_tooltip: " Oprettet af: ${0},  Oprettet d.: ${1}",
		viewer_box_note_limitation: "Du kan kun åbne og få vist Box-noter i et separat vindue.",
		viewer_click_to_open_box_note: "Klik her for at åbne Box-noten.",
		viewer_box_view_expiring: "Du kan maksimalt få vist Box-dokumentet i 60 minutter. Din aktuelle session udløber om ${0} minutter. Hvis du vil fortsætte med arbejde med dokumentet, skal du genindlæse det nu. Vil du genindlæse dokumentet?",
		viewer_add_dialog_save_as_type: "Gem som type:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Udtjekningskonflikt",
		viewer_checkout_conflict: "Dokumentet er tjekket ud af en anden bruger.",
		viewer_checkout_confirm: "Der findes en nyere version af dette dokument. Vil du fortsætte med at tjekke dokumentet ud, eller vil du genindlæse fremviseren med den nye version? Hvis du vil genindlæse fremviseren, går eventuelle ændringer tabt.",
		viewer_checkout_continue: "Fortsæt med udtjekning",
		viewer_checkout_reload: "Genindlæs",
		viewer_status_building: "Bygger dokument...",
		viewer_status_adding: "Tilføjer dokument...",
		viewer_status_checking_in: "Tjekker dokument ind...",

		/* Class Selector Widget */
		include_subclasses_label: "Inkludér underklasser",
		include_subclasses_label2: "Søg også i underklasser",
		include_subclasses_note: "(Inkluderer underklasser)",
		available_classes_col_header: "Tilgængelige klasser",
		single_class_label: "Søg i en enkelt klasse",
		multiple_classes_label: "Søg i flere klasser",
		multiple_classes_hover_help: "Vælg denne indstilling, hvis du vil søge i mere end én klasse. Klasserne kan være overordnede klasser eller underklasser. Hvis du vælger denne indstilling, får du kun vist de egenskaber og værdier, der er fælles for de valgte klasser.",
		selected_classes_col_header: "Valgte klasser",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Inkluderer underfoldere)",
		favorites_pseudo_node: "\\Foretrukne\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Du skal vælge en folder på opbevaringsstedet, som dokumentet skal tilføjes til.",
		no_permission_add_folder: "Du har ikke de korrekte tilladelser til at tilføje foldere til denne folder.",
		no_permission_add_document: "Du har ikke de korrekte tilladelser til at tilføje dokumenter til denne folder.",
		document_already_in_folder: "Dokumentet findes allerede i folderen.",
		cant_move_folder_onto_parent: "Folderen findes allerede i folderen.",
		cant_move_folder_onto_self: "Du kan ikke flytte en folder ind i sig selv eller ind i underfolderne.",

		/* Workflow Widgets */
		process_application_space: "Procesapplikationsplads",
		process_role: "Procesrolle",
		process_inbasket: "Procesindbakke",
		process_worklist: "Arbejdsliste",
		process_step_processor: "Procesarbejdselement",
		process_tracker: "Spor arbejdselement",
		process_info_subject: "Emne",
		process_info_stepname: "Trin",
		process_info_is_locked: "Låst",
		process_info_no_access: "Ingen adgang",
		process_info_received_on: "Modtaget den",
		process_info_overdue: "Overskredet",
		process_info_reminder_sent: "Påmindelse sendt",
		process_info_locked_by_user: "Låst af",
		process_work_object_number: "Arbejdsobjektnummer",
		process_deadline: "Forfaldsdato:",
		process_launchedby: "Startet af:",
		process_receivedon: "Modtaget den:",
		process_step: "Trin:",
		process_properties: "Egenskaber",
		process_attachments: "Vedhæftninger",
		process_attachments_select: "Vælg en vedhæftning",
		process_finish_button_label: "Stop sporing",
		process_tracker_history: "Historik",
		process_tracker_milestones: "Milepæle",
		process_tracker_milestone: "Milepæl",
		process_tracker_milestone_level: "Niveau",
		process_tracker_milestones_empty: "Der er ingen milepæle at vise.",
		process_tracker_level_selector_label: "Vis milepælsniveauer op til:",
		process_tracker_map_selector_label: "Filtrér efter tilknytningsoversigt:",
		process_tracker_message: "Meddelelse",
		process_tracker_datereached: "Dato nået",
		process_tracker_stepname: "Trin",
		process_tracker_cycle: "Cyklus",
		process_tracker_review_cycle: "Gennemgå cyklus",
		process_tracker_participant: "Deltager",
		process_tracker_completed: "Udført",
		process_tracker_response: "Svar",
		process_tracker_comments: "Kommentarer",
		process_tracker_delete_confirmation: "Vil du holde op med at spore følgende arbejdsgang: ${0}?",
		process_tracker_history_allmaps: "Alle kort",
		process_tracker_history_workflow: "Arbejdsgang",
		process_tracker_history_terminate: "Afbryd",
		process_tracker_history_malfunction: "Fejl",
		process_filter_label: "Filter",
		process_no_filter_summary: "Ingen filtre anvendt",
		process_filter_summary: "${0} anvendt",
		process_filter_reset_tooltip: "Nulstil rydder filtret og opfrisker indbakken.",
		process_attachments_add_folder: "Tilføj folder",
		process_attachments_add_doc: "Tilføj dokument",
		process_complete_button_label: "Udfør",
		process_save_button_label: "Gem",
		process_launch_button_label: "Start arbejdsgang",
		process_open_button_label: "Åbn",
		process_movetoinbox_button_label: "Flyt til indbakke",
		process_return_button_label: "Returnér",
		process_return_to_sender_tooltip: "Returnér arbejdselementet til den oprindelige indbakke",
		process_move_to_inbasket_tooltip: "Flyt arbejdselementet til din personlige indbakke",
		process_reassign_tooltip: "Tildel dette arbejdselement til en anden ejer",
		process_reassign_button_label: "Tilknyt igen",
		process_preferences_button_label: "Indstillinger",
		process_manageroles_button_label: "Administrér roller",
		process_manageroles_no_members: "Der er ingen medlemmer.",
		process_responses_button_label: "Flere svar",
		process_morecustomaction_button_label: "Flere handlinger",
		process_show_instructions: "Vis vejledning",
		process_hide_instructions: "Skjul vejledning",
		process_remove_attachment: "Fjern",
		process_close_window: "Arbejdselementet er behandlet.",
		process_delegate_flag: "Den aktuelle ejer skal godkende arbejdselementet, før det sendes videre til næste trin i arbejdsgangen.",
		process_paticipant_voting: "Antal deltagere, som kræves for afstemningsgodkendelse:",
		process_get_next_label: "Hent næste arbejdselement",
		process_no_more_items: "Der er ikke flere elementer i indbakken, der skal behandles.",
		process_workflow_name: "Arbejdsgangens navn:",
		process_pattern_process_name: "Gennemsyn for ${0}",
		process_instuctions: "Instruktioner til godkendere:",
		process_pattern_deadline: "Forfaldsdato:",
		process_reviewers: "Godkendere:",
		process_approvals_required: "Godkendelse påkrævet:",
		process_on_reject: "Hvis arbejdselementet afvises:",
		process_return_to_originator: "Retur til mig",
		process_return_to_previous_reviewer: "Retur til den forrige godkender",
		process_additional_settings: "Yderligere indstillinger:",
		process_allow_reassign: "Tillad godkendere at gentildele dette gennemsyn",
		process_complete_notification: "Giv mig besked, når gennemsynet er udført",
		process_workflow_name_hover_help: "Det navn, du angiver for arbejdselementet, bør gøre det nemt for godkenderne at skelne mellem dette arbejdselement og andre arbejdselementer i indbakken.",
		process_approvals_required_hover_help: "Hvis arbejdselementet er til gennemsyn hos flere personer samtidig, kan du angive, hvor mange godkendelser, der kræves, for at arbejdselementet er udført.",
		process_approval_options: "Godkendelsesindstillinger",
		process_all: "Alle",
		process_at_least: "Mindst",
		process_at_least_by_count: "Mindst ${0} godkendere",
		process_at_least_by_percentage: "Mindst ${0}% af godkenderne",
		process_comments: "Kommentarer:",
		process_review_step_comments_hover_help: "Hvis du afviser arbejdselementet, skal du oplyse, hvorfor du har afvist det. Denne oplysning gør det muligt for arbejdselementets ophavsmand eller for den forrige godkender at adressere dine betænkeligheder.",
		process_rework_step_comments_hover_help: "Du skal oplyse, hvordan du har adresseret kommentarerne. Hvis du er uenig i kommentarerne, skal du begrunde din beslutning.",
		process_rejection_reason: "Årsag til afvisning:",
		process_summary: "Oversigt",
		process_sequential_review: "Sekventielt gennemsyn",
		process_sequential_review_description: "Arbejdselementet gennemses af de enkelte godkendere i rækkefølge.",
		process_parallel_review: "Parallelt gennemsyn",
		process_parallel_review_description: "Arbejdselementet gennemses af alle godkendere samtidig.",
		process_parallel_approvals_required_error: "Antallet af påkrævede godkendelser er for højt. Der er kun angivet ${0} godkendere.",
		process_parallel_invalid_required_approvals_count: "Værdien er ikke gyldig. Værdien skal være mindst ${0}.",
		process_subject_prompt: "Angiv emnet",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Arbejdselement:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Vis egenskaber",
		view_permissions_level: "Vis tilladelser",
		view_content_level: "Vis dokument",
		link_level: "Link",
		modify_properties_level: "Redigér egenskaber",
		modify_content_level: "Redigér dokument",
		minor_version_level: "Redigér underordnet version",
		major_version_level: "Redigér overordnet version",
		create_instance_level: "Opret forekomst",
		delete_document_level: "Slet dokument",
		delete_item_level: "Slet element",
		modify_document_permissions_level: "Administrér tilladelser",
		modify_folder_permissions_level: "Administrér tilladelser",
		modify_owner_level: "Revidér ejer",
		delete_folder_level: "Slet folder",
		file_in_folder_level: "Tilføj til foldere",
		create_subfolder_level: "Opret underfoldere",
		link_item_level: "Anmærk dokument, Tilføj til folder", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Kun dokument: Tilføj en anmærkning til dokumentet, eller fjern en anmærkning fra dokumentet</li><li>Kun folder: Tilføj elementer til folderen, eller fjern elementer fra folderen</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Slet",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Ejer",
		/* previously \"Full control\" */
		edit_privilege: "Forfatter",
		/* previously \"Edit\" */
		read_only_privilege: "Læser",
		/* previously \"Read only\" */
		no_access_privilege: "Ingen adgang",
		share_with_label: "Del med:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Kun mig",
		public_label: "Alle",
		members_label: "Bestemte brugere og grupper",
		select_members_label: "Vælg...",
		select_user_group_label: "Vælg brugere...",
		select_users_groups_label: "Vælg brugere og grupper...",
		select_user_label: "Vælg bruger...",
		propagation_label: "Udbredelse:",
		access_label: "Tilladelser:",
		add_permission_add_label: "Tilføj",
		security_policy_label: "Sikkerhedspolitik:",
		includes_inherited_access: "Inkluderer arvet adgang",
		customize_access_for_label: "Tilpas adgang for:",
		customize: "Tilpas",
		direct: "Dette element",
		singleLevelInheritance: "Ét niveau",
		infiniteLevelInheritance: "Alle niveauer",
		inherited: "Arvet",
		direct_hover_help: "Sikkerhedsindstillinger gælder for det valgte element",
		singleLevelInheritance_hover_help: "Disse tilladelser gælder for dette element og de umiddelbare underordnede, der er konfigureret til at overtage sikkerhed fra dette element.",
		infiniteLevelInheritance_hover_help: "Disse tilladelser gælder for dette element og for alle efterkommere, der er konfigureret til at overtage sikkerhed fra dette element.",
		inherited_hover_help: "Disse tilladelser er overtaget fra den overordnede.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Disse tilladelser for ${0} gælder for dette element og de umiddelbare underordnede, der er konfigureret til at overtage sikkerhed fra dette element.",
		infiniteLevelInheritance_member_hover_help: "Disse tilladelser for ${0} gælder for dette element og for alle efterkommere, der er konfigureret til at overtage sikkerhed fra dette element.",
		inherited_member_hover_help: "Disse tilladelser for ${0} er overtaget fra den overordnede.",
		partial_hover_help: "Sikkerhedsindstillingerne for elementet er ændret af en bruger",
		allow: "Tillad",
		deny: "Afvis",
		basic: "Grundlæggende",
		advanced: "Udvidet",
		permission_type: "Angiv adgang for:",
		share_with_hover_help: "Elementet deles aktuelt med følgende brugere og grupper.",
		direct_security_policy_hover_help: "Indstillingerne for denne sikkerhedspolitik tillader, at du ændrer sikkerheden for dette element.",
		security_policy_hover_help: "Sikkerheden for dette element er skrivebeskyttet, fordi indstillingerne for denne sikkerhedspolitik forhindrer dig i at ændre sikkerheden for dette element.",
		security_remove: "Ingen tilladelser",
		pseudo_group_label: "Aliaskonti",
		marking_hover_help: "Sikkerheden for dette element kontrolleres af et markeringssæt, som kan påvirke sikkerheden for elementet.",
		note_label: "Vigtigt:",
		marking_text: "Dette element er markeret som: ${0}. Elementet kan have yderligere sikkerhedsrestriktioner.",
		authenticated_users: "Validerede brugere",
		realm_users: "${0} brugere",
		denyAll: "Afvis alle",
		allowAll: "Tillad alle",
		remove_direct_text: "Når du har gemt dine ændringer, bliver tilladelserne for dette medlem fjernet fra elementet.",
		remove_single_inheritance_text: "Når du har gemt dine ændringer, bliver tilladelserne for dette medlem fjernet fra elementet og fra <br>de umiddelbare underordnede, der er konfigureret til at overtage sikkerhed fra elementet.<p>Vil du fortsætte?",
		remove_infinite_inheritance_text: "Når du har gemt dine ændringer, bliver tilladelserne for dette medlem fjernet fra elementet og fra <br>alle efterkommere, der er konfigureret til at overtage sikkerhed fra elementet.<p>Vil du fortsætte?",
		remove_inheritance_text: "Når du har gemt dine ændringer, bliver tilladelserne for dette medlem fjernet fra elementet og fra <br>alle efterkommere, der er konfigureret til at overtage sikkerhed fra elementet. Kun de tilladelser, der <br>er overtaget af dette element, bevares.<p>Vil du fortsætte?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Fjern disse tilladelser for ${0}",

		security_proxy_text: "Sikkerheden for dette element er skrivebeskyttet.",
		security_proxy_declared_text: "Sikkerheden for dette element er skrivebeskyttet, fordi det er defineret af en sikkerhedsproxy.",
		security_proxy_hover_help: "Sikkerheden for dette element kontrolleres af den sikkerhed, der er angivet på et andet objekt på opbevaringsstedet.",
		add_permissions_label: "Tilføj tilladelser",
		permission_propagation_direct: "Kun denne folder",
		permission_propagation_onelevel: "Denne folder og ét niveau derunder",
		permission_propagation_alllevels: "Denne folder og alle niveauer derunder",
		document_propagation_label: "Angiv adgang for:",
		document_propagation_FOLDER: "Folder",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Valideringskilde:",

		/* Versions Widget */
		object_versions_selector_label: "Versioner:",
		object_versions_label: "Versioner",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Foldere arkiveret i",
		folders_filed_in_folder_col_hdr: "Folder",
		folders_filed_in_path_col_hdr: "Sti",
		folders_filed_in_containment_name_col_hdr: "Opbevaringsnavn",
		folders_filed_in_creator_col_hdr: "Oprettet af",
		folders_filed_in_date_created_col_hdr: "Oprettet den",

		/* Parent Documents */
		properties_parent_documents_label: "Overordnede dokumenter",

		/* Select object dialog */
		select_object_title: "Vælg element",
		select_object_breadCrumb_version_prefix: "Versioner for: ",
		show_versions_label: "Vis versioner",
		use_current_version_label: "Brug aktuel version",
		use_released_version_label: "Brug frigivet version",

		/* Select content class dialog */
		select_class: "Vælg klasse",
		/* Select Search dialog */
		select_search: "Vælg Søg",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Vis link",
		show_hyperlink_intro: "Du kan kopiere linket og indsætte det i e-mails, i chat og på websider. Hvis der er flere versioner af elementet, skal du angive, hvilken version du vil linke til.",
		show_hyperlink_intro_no_version_select: "Du kan kopiere linket og indsætte det i e-mails, i chat og på websider.",
		show_text_label: "Version:",
		released_button_label: "Frigivet",
		current_button_label: "Aktuel",
		select_button_label: "Bestemt version",
		show_hyperlink_no_released_version_msg: "Der findes ingen frigivet version af dette dokument i forvejen.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Start arbejdsgang",
		edit_workflow_title: "Egenskaber for arbejdselement",
		start_workflow_intro: "Start en arbejdsgang for at behandle de valgte elementer. Hvis du vil tildele arbejdselementerne til en bestemt bruger, skal du angive en ejer.",
		edit_workflow_intro: "Du kan redigere egenskaberne for de valgte arbejdselementer. Hvis du vil tildele arbejdselementet til en anden bruger, skal du angive en ejer.",
		workflow_field_label: "Arbejdsgang:",
		priority_field_label: "Prioritet:",
		owner_field_label: "Ejer:",
		start_button_label: "Start",
		save_button_label: "Gem",
		owner_value_hint: "Angiv en alfanumerisk streng på højst 32 tegn. Strengen må kun indeholde blanktegn og følgende tegn: a-z, A-Z, 0-9, og ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Indholdselementer",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Værdien er ikke gyldig. Værdien må kun indeholde blanktegn og følgende tegn: a-z, A-Z, 0-9 og ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Angiv en værdi mellem 1 og 32000 for at angive arbejdselementets prioritering.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Værdien er ikke gyldig. Prioriteringen skal være en værdi mellem 1 og 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Arbejdsgangsnavnet findes ikke.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Afbryd midlertidigt i arbejdsgang",
		suspend_workitems_intro: "Når du afbryder et arbejdselement fra arbejdsgangen, kan arbejdselementet ikke behandles, før det genoptages",
		suspend_workitems_options_label: "Afbryd de valgte arbejdselementer midlertidigt:",
		suspend_until_resume_label: "Indtil manuel genoptagelse",
		suspend_until_date_label: "Indtil",
		suspend_for_duration_label: "I",
		suspend_for_duration_hours: "Timer",
		suspend_for_duration_days: "Dage",
		suspend_for_duration_weeks: "Uger",
		suspend_for_duration_months: "Måneder",
		suspend_for_duration_years: "År",
		suspend_button_label: "Afbryd midlertidigt",
		suspend_duration_value_hint: "Angiv en værdi for varighed i intervallet 1 - 99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Værdien er ikke gyldig. Værdien skal være i intervallet 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Fjern fra arbejdsgang",
		remove_workflow_confirmation: "Vil du fjerne de valgte elementer fra arbejdsgangen?<br>${0} elementer valgt.",
		remove_workflow_button_label: "Fjern",

		/* Unfile dialog */
		unfile_dialog_title: "Fjern fra folder",
		unfile_dialog_remove_from_folder_label: "Fjern fra:",
		unfile_dialog_info_text: "Du kan fjerne elementer fra foldere. Men at fjerne et element fra alle foldere fjerner ikke elementet fra opbevaringsstedet. Du kan stadig hente elementer ved at udføre en søgning. Det er kun de foldere, som du har visningsrettigheder til, der vises i listen.",
		unfile_dialog_select_all: "Vælg alle",
		unfile_dialog_deselect_all: "Ryd alle",
		unfile_dialog_remove_button_label: "Fjern",
		unfile_dialog_select_folder_col_hdr: "Vælg folder",
		unfile_dialog_folder_col_hdr: "Folder",
		unfile_dialog_path_col_hdr: "Sti",
		unfile_dialog_not_filed_msg: "Elementet findes ikke i nogen foldere.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Du har ikke de relevante tilladelser til at fjerne dette element fra nogen af de foldere, elementet findes i.",
		unfile_dialog_folder_not_selectable_tooltip: "Du har ikke de relevante tilladelser til at fjerne elementet fra denne folder.",
		unfile_multi_prompt: "Vil du fjerne de valgte elementer fra folderen ${0}?",
		unfile_large_number_items_confirmation_question: "Du har valgt at fjerne ${0} elementer fra folderen ${1}.<br/>Det kan tage lang tid at fjerne et stort antal elementer fra en folder.<br/>Vil du fortsætte?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Åbn",
		move_to_folder_title: "Flyt til folder",
		move_to_folder_button_caption: "Flyt",
		move_to_folder_label: "Flyt til:",
		add_to_folder_title: "Tilføj til folder",
		add_to_folder_button_caption: "Tilføj",
		add_to_folder_label: "Tilføj til:",
		copy_to_folder_title: "Kopiér til folder",
		copy_to_folder_button_caption: "Kopiér",
		copy_to_folder_label: "Kopiér til:",
		copy_to_folder_delete_label: "Når kopieringen er udført, skal du slette de valgte elementer i Box.",
		move_from_folder_label: "Flyt fra:",
		move_file_info_text: "Du kan flytte elementer fra en folder til en anden.",
		move_folder_info_text: "Du kan flytte foldere fra en overordnet folder til en anden.",
		add_doc_to_folder_info_text: "Du kan tilføje elementer til en eller flere foldere. Hvis et element allerede findes i en folder, forbliver det i den pågældende folder og tilføjes til eventuelt yderligere foldere, som du angiver.",
		copy_doc_to_folder_info_text: "Du kan kopiere elementer til en folder.",
		box_copy: "Box-kopiering",
		box_copy__button_caption: "Kopiér",
		box_copy_to_info_text: "Vælg opbevaringsstedet og folderen i Box, som du vil kopiere de valgte elementer fra.",
		box_copy_from_info_text: "Vælg opbevaringsstedet og folderen i Box, som du vil kopiere de valgte elementer fra.",
		box_copy_version_info_text: "Hvis du vil tilføje et nyt dokument, skal du vælge opbevaringsstedet og folderen. Hvis du vil tjekke en ny version ind, skal du vælge opbevaringsstedet og dokumentet.",
		admin_box_copy: "Kopiér til Box",
		admin_box_copy_hover: "Med den indstilling kan brugere kopiere dokumenter til Box.",

		no_permission_to_copy_version_msg: "Du kan ikke kopiere dokumentet fra Box som en ny version af det valgte dokument. Enten har du ikke de relevante tilladelser til at redigere det valgte dokument, eller også er det valgte dokument tjekket ud af en anden bruger.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Du har ikke de relevante tilladelser til at fjerne dette element fra nogen af de foldere, elementet findes i.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Du har ikke de relevante tilladelser til at fjerne elementet fra denne folder.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Elementet kan ikke flyttes, fordi det ikke findes i nogen foldere. Vælg et andet element.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Start arbejdsgang",
		subscriptions_dialog_available_items_label: "Tilgængelige elementer:",
		subscriptions_dialog_info_text: "Angiv, hvilken arbejdsgang der skal startes.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Navn",
		subscriptions_dialog_desc_col_hdr: "Beskrivelse",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Administrér roller",
		manageroles_dialog_info_text: "Du kan revidere listen med brugere for hver rolle, der er knyttet til denne procesapplikationsplads.",
		manageroles_dialog_members_label: "Medlemmer",
		manageroles_dialog_roles_label: "Roller",
		manageroles_dialog_add_button_label: "Tilføj brugere og grupper",
		manageroles_dialog_remove_button_label: "Fjern",
		manageroles_dialog_save_button_label: "Gem",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Ingen arbejdsgange er knyttet til elementet.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Indstillinger for arbejdsgang",
		workflow_pref_dialog_info_text: "Angiv de arbejdsgangshændelser, du vil modtage e-mail-beskeder for. Du kan også aktivere indstillingen for at dirigere arbejdet til en anden person ved at vælge en bruger, som arbejdet skal videredelegeres til.",

		workflow_pref_general: "Generelt",
		workflow_pref_email_address: "E-mailadresse",
		workflow_pref_email_address_hover: "Angiv den e-mail-adresse, hvor du ønsker at modtage arbejdsgangsbeskeder.",
		workflow_pref_preferred_locale: "Sprog",
		workflow_pref_preferred_locale_hover: "Angiver det sprog, som e-mail-beskeder skal vises på.",

		workflow_pref_work_item_notice: "Arbejdselementbeskeder",
		workflow_pref_step_new_assignment: "Et nyt arbejdselement er tildelt til mig",
		workflow_pref_step_new_assignment_hover: "Giv mig besked, når jeg modtager et nyt arbejdselement.",
		workflow_pref_step_expired_deadline: "Tidsfrist for arbejdselementet er overskredet",
		workflow_pref_step_expired_deadline_hover: "Giv mig besked, når jeg overskrider en tidsfrist for et arbejdselement.",
		workflow_pref_step_reminders: "Tidsfrist for et arbejdselement nærmer sig",
		workflow_pref_step_reminders_hover: "Påmind mig om et arbejdselement, når tidsfristen nærmer sig.",

		workflow_pref_originator_notice: "Ophavsbeskeder",
		workflow_pref_milestone_reached: "Milepæl er nået",
		workflow_pref_milestone_reached_hover: "Giv mig besked, når en milepæl er nået i en arbejdsgang, som jeg har startet.",

		workflow_pref_tracker_notice: "Beskeder om sporingsfunktion for arbejdsgang",
		workflow_pref_tracker_new_assignment: "Et nyt element i sporingsfunktion er tildelt til mig",
		workflow_pref_tracker_new_assignment_hover: "Giv mig besked, når en arbejdsgang, som jeg sporer, er startet.",
		workflow_pref_tracker_deadline_reminders: "Tidsfrist for arbejdsgang nærmer sig",
		workflow_pref_tracker_deadline_reminders_hover: "Påmind mig om en arbejdsgang, når tidsfristen nærmer sig.",
		workflow_pref_tracker_deadline_expired: "Tidsfrist for arbejdsgang er overskredet",
		workflow_pref_tracker_deadline_expired_hover: "Giv mig besked, når en tidsfrist for en arbejdsgang er overskredet.",
		workflow_pref_tracker_exception: "Der er opstået en arbejdsgangsfejl",
		workflow_pref_tracker_exception_hover: "Giv mig besked, når der opstår en undtagelse eller en fejl for en arbejdsgang.",
		workflow_pref_tracker_expired_deadline: "Tidsfrist for trinnet er overskredet",
		workflow_pref_tracker_expired_deadline_hover: "Giv mig besked, når en tidsfrist for et trin i en arbejdsgang, som jeg sporer, er overskredet.",
		workflow_pref_tracker_milestone_reached: "Milepæl er nået",
		workflow_pref_tracker_milestone_reached_hover: "Giv mig besked, når en milepæl er nået i en arbejdsgang, som jeg sporer.",

		workflow_pref_out_notice: "Træffes ikke",
		workflow_pref_proxy_user: "Videredelegér arbejde til",
		workflow_pref_proxy_user_hover: "Brug denne indstilling til automatisk at dirigere arbejdet til en anden bruger, f.eks. når du ikke er på kontoret, eller når du er på ferie.",
		workflow_pref_workflow: "Arbejdsgang",
		workflow_pref_on: "Aktiveret",
		workflow_pref_off: "Deaktiveret",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Start arbejdsgang",
		transfered_workflows_dialog_info_text: "Vælg en arbejdsgang der skal startes.",
		transfered_workflows_dialog_available_items_label: "Tilgængelige elementer:",
		transfered_workflows_dialog_select_button_label: "Start",
		transfered_workflows_dialog_name_col_hdr: "Navn",
		transfered_workflows_dialog_no_item_found: "Ingen overførte arbejdsgange er fundet.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Overfør arbejdsgang",
		transfer_workflow_dialog_info_text: "Vælg en arbejdsgang, der skal overføres til arbejdsgangssystemet.",
		transfer_workflow_dialog_use: "Brug dette arbejdsgangsnavn",
		transfer_workflow_dialog_use_another: "Brug et andet arbejdsgangsnavn",
		transfer_workflow_dialog_in_use: "Arbejdsgangens navn er: ",
		transfer_workflow_dialog_transfer_button_label: "Overfør",
		transfer_workflow_dialog_no_items_found: "Ingen overførte arbejdsgange er fundet.",
		transfer_workflow_dialog_use_hover: "Angiv navnet på den aktuelle arbejdsgang fra arbejdsgangsdefinition.",
		transfer_workflow_dialog_another_hover: "Angiv et andet arbejdsgangsnavn, eller genbrug et eksisterende overført arbejdsgangsnavn.",

		/*Search In control*/
		search_in_title: "Søg i:",
		search_in_teamspaces: "Teampladser",
		search_in_repositories: "Opbevaringssteder",
		search_in_thisteamspaces: "Denne teamplads",

		ajaxViewer_save: "Gem markeringer",
		ajaxViewer_print: "Vis udskrift",
		ajaxViewer_firstPage: "Første side",
		ajaxViewer_previousPage: "Forrige side",
		ajaxViewer_nextPage: "Næste side",
		ajaxViewer_lastPage: "Sidste side",
		ajaxViewer_unknownPageCount: "1 af ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} af ${1}",
		ajaxViewer_zoomOut: "Zoom ud",
		ajaxViewer_zoomIn: "Zoom ind",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "Tilpas bredde",
		ajaxViewer_fitHeight: "Tilpas højde",
		ajaxViewer_fitPage: "Tilpas side",
		ajaxViewer_rotate270: "Rotér 270 grader",
		ajaxViewer_rotate90: "Rotér 90 grader",
		ajaxViewer_rotate180: "Rotér 180 grader",
		ajaxViewer_darken: "Mørkere",
		ajaxViewer_lighten: "Lysere",
		ajaxViewer_lessContrast: "Mindre kontrast",
		ajaxViewer_moreContrast: "Større kontrast",
		ajaxViewer_invert: "Byt om",
		ajaxViewer_createHighlight: "Fremhævning",
		ajaxViewer_createNote: "Markér",
		ajaxViewer_editAnnotation: "Redigér markeringsegenskaber",
		ajaxViewer_deleteAnnotation: "Slet markering",
		ajaxViewer_editAnnotationTitle: "Redigér markeringsegenskaber",
		printableView_print: "Udskriv",
		printableView_close: "Luk",

		search_results_dropdown_button: "Resultatfremvisning",
		search_results_columns_label: "Søgeresultatfremvisning",
		search_results_columns_description: "Vælg de egenskaber, du vil have vist i søgeresultaterne.",
		search_results_sortby_label: "Sortér efter:",
		search_results_order_label: "Sorteringsrækkefølge:",
		search_results_accending_label: "Stigende",
		search_results_descending_label: "Faldende",
		search_results_available_properties: "Tilgængelig",
		search_results_selected_properties: "Valgt",
		search_rank_property: "Prioritér (kun tekstsøgning)",
		search_name_attribute: "Navn (${0})",
		search_results_summary_enabled_label: "Aktivér indholdsoversigter (kun tekstsøgning)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Søgninger",
		manage_teamspace_classes_tab_title: "Klasser",
		manage_teamspace_entry_templates_tab_title: "Indgangsskabelon",
		manage_teamspace_team_tab_title: "Team",
		manage_teamspace_roles_tab_title: "Roller",
		manage_teamspace_dialog_title: "Revidér teamplads",
		manage_teamspace_button_label: "Revidér teamplads",
		manage_teamspace_team_pane_heading: "Vælg team",
		manage_teamspace_classes_pane_heading: "Vælg klasser",
		manage_teamspace_entry_templates_pane_heading: "Vælg indgangsskabelon",
		manage_teamspace_no_rights_message: "Du har ikke de korrekte tilladelser til at revidere denne teamplads.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Egenskaber for teamplads",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Angiv de egenskaber, der skal vises for dokumenter og foldere i indholdslisten, når brugerne gennemser teampladsen. Du kan også angive, hvilken rækkefølge egenskaberne skal vises i.",
		teamspace_props_sel_cols_use_default_label: "Brug <b>Gennemse</b>-indstillingerne for dette dette opbevaringssted",
		teamspace_props_sel_cols_use_default_tooltip: "Brug de indstillinger, der er angivet på siden Gennemse for dette opbevaringssted i administrationsværktøjet.",
		teamspace_props_general_tab_label: "Generelt",
		teamspace_props_column_props_tab_label: "Viste egenskaber",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Vælg fil til import",
		teamspace_import_template_instruction: "Du kan vælge en eksportfil med en teampladsskabelon, der skal importeres.",
		teamspace_import_template_button_label: "Importér",
		teamspace_import_template_dialog_label: "Importér teampladsskabelon",

		/* Annotation Dialog */
		annotationDlg_title: "Markeringer",
		annotationDlg_description: "Det valgte dokument har følgende markeringer:",
		annotationDlg_msg_noAnnotations: "Der er ingen markeringer. Klik på Tilføj for at oprette en markering.",
		annotationDlg_pageLabel: "Side: ${pageNum}",
		annotationDlg_accLabel: "Adgang: ${accType}",
		annotationDlg_accLabel_public: "Fælles",
		annotationDlg_accLabel_private: "Personlig",
		annotationDlg_accLabel_privateGroup: "Personlig(${groupName})",
		annotationDlg_copiable: "Kan kopieres til en anden server",
		annotationDlg_cannotCopy: "Kan ikke kopieres til en anden server",
		annotationDlg_addButtonLabel: "Tilføj",

		/* Share Dialog */
		is_shared: "Delt",
		is_share_pending: "Deling venter",
		share_title: "Box-deling",
		share_instructions_new: "Send en e-mail med et link til den delte fil. Alle, der kender linket, har adgang til filen.",
		share_instructions_existing: "Send en e-mail med et link til den delte fil. Alle, der kender linket, har adgang til filen. Andre personer kan have linket, fordi en anden allerede har delt denne fil.",
		share_instructions_another_version_shared: "Send en e-mail med linket til den delte fil. Alle, der kender linket, har adgang til filen. Andre personer kan have linket, fordi en anden allerede har delt en anden version af denne fil.",
		share_buttonLabel_share: "Del",
		share_email_addresses: "Send til:",
		share_email_addresses_hover: "Når delingen er udført, sendes et link til disse e-mailadresser. Hvis du ikke angiver noget, sendes linket til din egen e-mailadresse.",
		share_email_addresses_reshare_hover: "Når delingen er udført, sendes et link til disse e-mailadresser. Hvis du ikke angiver noget, sendes ingen e-mail.",
		share_password: "Angiv kodeord:",
		share_password_placeholder: "Valgfri",
		share_comments: "Meddelelse:",
		share_comments_default: "Jeg vil gerne dele min fil med dig i Box.",
		share_myEmail: "Send fra:",
		share_expiration: "Angiv udløb for link:",
		share_expire: "Adgang udløber:",
		share_expire_none: "Udløber aldrig",
		share_allowDownload: "Tillad download",
		share_add: "Tilføj",
		share_advanced_instructions: "Indstillingerne for download, udløb og kodeord gælder for den delte fil i Box.",
		share_advanced_existing_instructions: "Indstillingerne for download, udløb og kodeord gælder for den delte fil i Box.",
		share_options_edit_warning: "Vigtigt: Ændringer til disse indstillinger gælder for alle med linket, herunder personer der allerede har linket.",
		share_link: "Link:",
		share_email_addresses_placeholder: "E-mailadresser",
		share_email_address_placeholder: "E-mailadresse",
		share_email_address_invalid: "Angiv en gyldig e-mailadresse.",
		share_cannot_share_with_self: "Du kan ikke dele filer med dig selv. Angiv en anden bruger.",
		share_selected_version_with_minor_warning_hover: "Version ${0} af dokumentet er delt. Du har valgt version ${1}.<br><br><b>Advarsel</b>: Hvis du deler version ${1}, kan ingen dele version ${2}, medmindre du sletter delingen for version ${1}.",
		share_selected_version_hover: "Version ${0} af dokumentet er delt. Du har valgt version ${1}.",
		share_selected_version_message: "Vigtigt: Version ${0} af dokumentet er delt. Du har valgt version ${1}.",
		share_different_version_message: "Vigtigt: Du har valgt version ${1}, men version ${0} af dokumentet er allerede delt. Du kan ikke dele versionen ${1}, medmindre du først sletter delingen, men du kan dele linket til version ${0} i stedet.",
		share_version_message: "Vigtigt: Version ${0} af dokumentet er delt. Vælg, hvilken version du vil dele.",
		share_version_new: "Del version ${0}",
		share_version_new_p8_hover: "Deling af dette dokument opretter et specifikt versionslink alene til den valgte version.<br><br>Hvis et dokument allerede er delt:<ul><li>Du kan dele en senere version, og linket omdirigeres til den senere version.</li><li>Du kan ikke dele en tidligere version, medmindre du først sletter delingen.</li></ul>",
		share_version_new_cm_hover: "Deling af dette dokument opretter et specifikt versionslink alene til den valgte version.<br><br>Hvis et dokument allerede er delt:<ul><li>Du kan dele en senere version, og linket omdirigeres til den senere version.</li><li>Du kan ikke dele en tidligere version.</li></ul>",
		share_version_update: "Del version ${0} (opdatér delingsindstillingerne).",
		share_version_update_p8_hover: "Deling af dette dokument bevarer kun linket til den specifikke version.<br><br>Hvis et dokument allerede er delt:<ul><li>Du kan dele en senere version, og linket omdirigeres til den senere version.</li><li>Du kan ikke dele en tidligere version, medmindre du først sletter delingen.</li></ul>",
		share_version_update_cm_hover: "Deling af dette dokument bevarer kun linket til den specifikke version.<br><br>Hvis et dokument allerede er delt:<ul><li>Du kan dele en senere version, og linket omdirigeres til den senere version.</li><li>Du kan ikke dele en tidligere version.</li></ul>",
		share_version_change_to_current: "Del version ${0} (opdatér delingen med den valgte version).",
		share_version_change_to_current_p8_hover: "Deling af dette dokument opdaterer linket, så det kun peger på den valgte version.<br><br>Hvis et dokument allerede er delt:<ul><li>Du kan dele en senere version, og linket omdirigeres til den senere version.</li><li>Du kan ikke dele en tidligere version, medmindre du først sletter delingen.</li></ul>",
		share_version_change_to_current_cm_hover: "Deling af dette dokument opdaterer linket, så det kun peger på den valgte version.<br><br>Hvis et dokument allerede er delt:<ul><li>Du kan dele en senere version, og linket omdirigeres til den senere version.</li><li>Du kan ikke dele en tidligere version.</li></ul>",
		share_repository: "Opbevaringssted for delte filer",
		share_repository_hover: "Hvis du ikke kan se det Box-opbevaringssted, du vil bruge, kan du tilføje et nyt Box-opbevaringssted på siden Opbevaringssteder.",
		share_options: "Indstillinger for deling",
		unshare_confirm: "Hvis du sletter delingen, fungerer delingslinkene ikke mere, herunder link der tidligere er sendt af andre brugere. Andre brugere, der vil dele dokumentet, skal vælge det originale dokument og dele det igen.<br><br>Er du sikker på, at du vil slette delingen?",
		unshare_button: "Slet Box-deling",
		admin_share: "Box-delingsfunktioner:",
		admin_share_hover: "Tillad brugere at dele et dokument fra et opbevaringssted, hvor Box-deling er aktiveret. Deling af et dokument omfatter kopiering af filen til Box, oprettelse af et link og afsendelse af linket i en e-mail.",
		admin_my_email_modifiable: "Tillad brugere at ændre e-mailadressen Send fra",
		admin_my_email_modifiable_hover: "I Box-deling er brugerens e-mailadresse som standard skrivebeskyttet og hentes fra en tilknytning af brugere og e-mailadresser, der repræsenterer Box-brugerkonti.<br><br>Vælg denne indstilling for at lade brugere redigere deres e-mailadresse, når de deler. E-mailadressens gyldighed bliver imidlertid ikke valideret.",
		admin_repos_admin_user: "Administrator for deling",
		admin_repos_admin_user_hover: "Angiv administratoren for deling, hvis du har en arbejdsplads, hvor Box-delingsfunktioner er aktiveret, og hvor dette Box-opbevaringssted er valgt som opbevaringssted for delte filer.<br><br>Klik på Angiv, og log på Box med en gyldig Box-administratorkonto.<br><br>Administratoren for deling skal være en Box-administratorbruger, der er konfigureret til at have ubegrænset lager i Box.",
		admin_repos_admin_user_not_set_warning: "Box-administratoren er ikke konfigureret for det valgte opbevaringssted.<br><br>Box-delingsfunktionen er deaktiveret, indtil du angiver Box-administratoren til det valgte opbevaringssted. Du kan også vælge et andet Box-opbevaringssted, hvor Box-administratoren er konfigureret.<br><br>Du kan angive Box-administratoren i afsnittet med Box-delingsfunktionen på siden Generelt til opbevaringsstedet.",
		admin_share_not_configured_warning: "Før du kan bruge Box-delingsservices, skal du tilføje og vælge et Box-opbevaringssted med servervalidering.",
		/* Office Online Server settings */
		admin_office_online_title: "Konfiguration af Office Online",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Angiv, om brugere, der anvender denne arbejdsplads, skal kunne redigere deres Office-dokumenter ved hjælp af Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Tillad samredigering",
		admin_office_online_allow_collaborative_editing_hover: "Tillad, at mere end en bruger arbejder på det samme dokument. Ryd denne indstilling, hvis du vil begrænse redigering af dokumenter til én bruger.",
		admin_office_online_repository_not_set_warning: "Før du kan aktivere Office Online-servicen, skal du først aktivere servicen i et opbevaringssted og angive URL'en til Microsoft Office Online Server. Klik på <b>Opbevaringssteder</b>, vælg et opbevaringssted og derefter skillebladet <b>Redigeringsintegration</b>, og aktivér servicen. Klik på <b>Indstillinger > Generelt</b>, og indtast URL'en til Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Angiv, om du vil bruge Office Online Server sammen med Office-dokumenter.",
		admin_office_online_server_url: "URL til Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Angiv den URL, som andre applikationer kan kommunikere med Office Online Server. URL'en skal have formatet http://servernavn:portnummer/hosting/discovery.",
		admin_office_online_server_Verified: "Verificeret",
	    admin_office_online_server_Failed: "<b>Ikke udført</b>",

		admin_repcfg_office_online_service_p8_hover: "Du kan initialisere opbevaringsstedet til at bruge Office Online Server ved at tilføje startskabelonfilen til de enkelte Office-applikationer. Hvis en skabelon ikke er angivet, bliver standardskabelonen anvendt.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server-integration",
		admin_repcfg_office_online_service_url_not_set_warning: "Før du kan aktivere Office Online Server, skal du først angive URL'en til Microsoft Office Online Server. Klik på Indstillinger > Generelt, og indtast URL'en.",
		admin_repcfg_office_online_word_template_name: "Standardskabelon til Word",
		admin_repcfg_office_online_excel_template_name: "Standardskabelon til Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Standardskabelon til PowerPoint",
		admin_repcfg_office_online_blank_template_description: "Dette er den standardskabelon, der anvendes, hvis du ikke tilføjer din egen skabelon.",
		/* Edit Service settings */
		admin_icn_edit_title: "Redigér konfiguration",	
	    admin_icn_edit_files_cleanup_interval: "Interval for oprydning i midlertidige filer (i dage):",
	    admin_icn_edit_files_cleanup_interval_hover: "Du kan angive det tidsrum, hvor midlertidige filer skal opbevares i ICN Edit-klienten. Standardværdien er 20 dage. Det maksimale tidsrum er 20 dage. Minimum er 1 dag.",
	    admin_icn_edit_service_integration: "Integration af redigeringsservice",
	    admin_icn_edit_service_integration_intro: "Redigeringsservicen gør det lettere for brugere at tilføje eller redigere filer i de apps, der er installeret på deres computere.<br><br><b>Vigtigt:</b> Hvis du aktivere redigeringsservicen, skal du gemme konfigurationen af opbevaringsstedet, før du kan redigere de foruddefinerede kategorier.",
		admin_icn_edit_service: "Redigeringsservice:",
		admin_icn_edit_enable_hover: "For at kunne bruge redigeringsservicen skal du:<ul><li>Aktivere servicen i opbevaringsstedet.</li><li>Aktivere servicen på arbejdspladsen i dit miljø</li><li>Installere IBM Content Navigator Edit-klienten på brugerarbejdsstationer</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Aktivér",
		admin_icn_edit_disable: "Deaktivér",
		admin_icn_edit_create_new_category: "Ny kategori",
		admin_icn_edit_delete_category: "Slet kategori",
		admin_icn_edit_edit_category: "Rediger kategori",
		admin_icn_edit_disable_category: "Deaktivér kategori",
		admin_icn_edit_enable_category: "Aktivér kategori",
		admin_icn_edit_new_category_dialog_title: "Ny kategori",
		admin_icn_edit_edit_category_dialog_title:"Rediger kategori",
		admin_icn_edit_new_category_dialog_instructions: "Med en dokumentkategori kan du knytte skabeloner til specifikke MIME-typer til redigeringsservicen. Du kan f.eks. tilknytte et sæt skabeloner med PDF-filer, så brugere kan anvende skabeloner, når de tilføjer eller redigerer filer fra IBM Content Navigator Edit-klienten. <br><br><b>Vigtigt:</b> Du skal gemme konfigurationen af opbevaringsstedet, før du kan tilføje skabeloner til den kategori, du tilføjer. ",
		admin_icn_edit_edit_category_dialog_instructions: "Du skal gemme konfigurationen af opbevaringsstedet, før du kan tilføje skabeloner til denne kategori. ",
		admin_icn_edit_delete_category_dialog_instructions: "Vil du slette denne kategori og evt. skabeloner, der er knyttet til kategorien?<br><br><b>Vigtigt:</b> Dine ændringer er ikke permanente, før du gemmer ændringerne til opbevaringsstedet. ",
		admin_icn_edit_category_label: "Kategori: ",
		admin_icn_edit_category_discription_label:"Beskrivelse: ",
		admin_icn_edit_template_column_head:"Skabelonnavn",
		admin_icn_edit_category_duplicate_error_message: "En kategori med denne id findes allerede. ",
		admin_icn_edit_word_category_description: "Denne kategori definerer de tilgængelige skabeloner til Microsoft Word-dokumenter i redigeringsservicen. ",
		admin_icn_edit_excel_category_description: "Denne kategori definerer de tilgængelige skabeloner til Microsoft Excel-dokumenter i redigeringsservicen. ",
		admin_icn_edit_powerpoint_category_description: "Denne kategori definerer de tilgængelige skabeloner til Microsoft PowerPoint-dokumenter i redigeringsservicen. ",

		icn_edit_add_template_dialog_title:"Tilføj en ${0}-skabelon",
		icn_edit_add_template_only_one_file_error: "Du kan kun vælge én fil.",
		icn_edit_add_template_file_type_error: "Du skal angive en gyldig  ${0}-skabelonfil.<br><br>Det valgte dokument har MIME-typen ${1}.<br><br>Gyldige MIME-typer: ${2}.",
		icn_edit_change_template_dialog_title: "Redigér ${0}-skabelon",
		icn_edit_action_in_new_menu_name:"${0}-dokument",
		icn_edit_action_in_new_menu_submenu_oo_name: "med Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "med Desktop-apps",
		icn_edit_new_document_dialog_title: "Nyt ${0}-dokument",
		icn_edit_new_document_dialog_intro: "Opret et nyt ${0}-dokument og tilføj det til opbevaringsstedet. Dokumentet oprettes med den valgte redigeringsserviceskabelon.", 
		icn_edit_select_edit_service_template: "Vælg en skabelon",
		icn_edit_edit_service_template: "Redigér redigeringsservice:",
		icn_edit_new_document_category_no_templates_message:"Der er ingen skabeloner i denne kategori. Kontakt administratoren for at tilføje skabeloner i denne kategori.",
		icn_edit_installer: "IBM Content Navigator Edit - Installationsprogram",
		admin_icn_cm_classes_and_roles_settings: "Indstillinger for klasse og rolle",
		admin_repcfg_classes_and_roles_warning: "Angiv de klasser, brugere eller grupper, som har tilladelse til at oprette, redigere og bruge skabeloner eller oprette kladder af dokumenter, som fungerer med Office Online Service og Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "Klik her.",
		/* Edit Service settings END */
		share_no_my_email_error: "Problem i forbindelse med identifikation af e-mailadresse, der skal bruges til deling af dokumentet.",
		share_no_my_email_error_explanation: "Du er logget på med bruger-id'en ${0}, men bruger-id'en er ikke knyttet til en e-mailadresse.",
		share_no_my_email_error_userResponse: "Prøv at logge på igen, eller log på med en anden bruger-id. Rapportér fejlen til systemadministratoren, hvis problemet fortsætter.",
		share_no_my_email_error_adminResponse: "Bruger-id'en ${0} er ikke knyttet til en e-mailadresse, og arbejdspladsen ${1} tillader ikke, at brugere redigerer e-mailadressen til Box-delingsfunktioner.<br><br>Prøv en af følgende løsninger:<br>Kontrollér, at pluginen til e-mailtilknytning er registreret.<br>Sørg for, at filen emailMappingPlugin.json inkluderer bruger-id'en ${0} og bruger-e-mailadressen. Byg, konfigurér og registrér derefter pluginen til E-mailtilknytning.<br>Hvis du ikke vil bruge pluginen E-mailtilknytning eller FileNet P8-e-mailadressekartoteket, men i stedet vil have brugerne til at angive deres egen e-mailadresse, når de deler et dokument, kan du ændre arbejdspladsindstillingerne for Box-delingsfunktioner, så brugere kan sende linket fra en anden e-mailadresse.",
		share_no_my_email_error_0: "bruger_id",
		share_no_my_email_error_1: "arbejdsplads_navn",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "En senere version af dette dokument er delt, så du kan ikke dele den valgte version af dette dokument.",
		share_later_version_shared_error_explanation: "Du kan ikke dele en tidligere version af et dokument, som tidligere er delt.",
		share_later_version_shared_error_userResponse: "Hvis du vil sende linket til en tidligere version af dokumentet, skal du først vælge den senere version og derefter bruge handlingen Del.<br><br>Hvis du vil dele den valgte version af dokumentet, skal du først slette delingen af den tidligere version af dokumentet.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Ny meddelelse",
		email_from: "Fra:",
		email_to: "Til:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Angiv en gyldig e-mailadresse.",
		email_subject: "Emne:",
		email_message: "Meddelelse:",
		email_message_placeholder: "Tilføj en meddelelse",
		email_attachments: "Vedhæftninger",
		email_links: "Link:",
		email_send: "Send",
		email_dont_send: "Send ikke",
		email_subject_reminder: "Påmindelse om emne",
		email_subject_reminder_confirm: "Vil du sende denne meddelelse uden et emne?",
		email_missing_from_error: "Problem i forbindelse med identifikation af Fra-e-mailadresse, der skal bruges til at sende e-mailen.",
		email_missing_from_error_explanation: "Du er logget på med bruger-id'en ${0}, men bruger-id'en er ikke knyttet til en e-mailadresse.",
		email_missing_from_error_userResponse: "Prøv at logge på igen, eller log på med en anden bruger-id. Rapportér fejlen til systemadministratoren, hvis problemet fortsætter.",
		email_missing_from_error_adminResponse: "Bruger-id'en ${0} er ikke knyttet til en e-mailadresse, og arbejdspladsen ${1} tillader ikke, at brugere redigerer Fra-e-mailadressen.<br><br>Prøv en af følgende løsninger:<br>Kontrollér, at pluginen til e-mailtilknytning er registreret.<br>Sørg for, at filen emailMappingPlugin.json inkluderer bruger-id'en ${0} og bruger-e-mailadressen. Byg, konfigurér og registrér derefter pluginen til E-mailtilknytning.<br>Hvis du ikke vil bruge pluginen E-mailtilknytning eller FileNet P8-e-mailadressekartoteket, men i stedet vil tillade, at brugerne angiver deres egen e-mailadresse, når de sender en e-mail, kan du ændre e-mailindstillingerne arbejdspladser, så brugere kan ændre Fra-e-mailadressen.",
		email_missing_from_error_0: "bruger_id",
		email_missing_from_error_1: "arbejdsplads_navn",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokumentet kan ikke åbnes.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator kan ikke oprette forbindelse til IBM Content Navigator Edit-klient.",
		open_edit_document_with_native_application_error_userResponse: "Installér og start IBM Content Navigator Edit-klienten på din arbejdsstation. Prøv derefter at åbne dokumentet igen.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokumentet kan ikke åbnes.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator kan ikke oprette forbindelse til IBM Content Navigator Edit-klient.",
		connect_to_the_streamline_service_error_userResponse: "Installér og start IBM Content Navigator Edit-klienten på din arbejdsstation. Prøv derefter at åbne dokumentet igen.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator er ikke konfigureret korrekt til deling af dokumenter.",
		share_not_configured_error_explanation: "Box-delingsfunktionen skal være konfigureret korrekt, før du kan dele dokumenter.",
		share_not_configured_error_userResponse: "Kontakt administratoren, og anmod om, at Box-delingsfunktionen bliver konfigureret.",
		share_not_configured_error_adminResponse: "Følgende elementer skal være konfigureret før deling af dokumenter:<ul><li>Opgavestyringen skal være aktiveret under indstillingerne til administrationsværktøjet.</li><li>Forbindelses-id'en til opgavestyring skal være konfigureret i opbevaringsstedet.</li><li>Deling skal være aktiveret i opbevaringsstedet.</li><li>Der skal være valgt et Box-opbevaringssted til deling på arbejdspladsen.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Egenskabsændringerne er ikke gemt til den nye version",
		checkin_cors_save_attributes_error_explanation: "Versionen blev oprettet, men egenskabsændringerne er ikke gemt. Dokumentet er muligvis stadig tjekket ud.",
		checkin_cors_save_attributes_error_userResponse: "Lås dokumentet op, og opdatér egenskaber via Egenskaber i genvejsmenuen.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Egenskabsændringerne er ikke gemt for det nye dokument",
		add_cors_save_attributes_error_explanation: "Dokumentet blev oprettet, men egenskabsændringerne er ikke gemt.",
		add_cors_save_attributes_error_userResponse: "Opdatér egenskaberne via Egenskaber i genvejsmenuen.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokumentet kan ikke åbnes.",		
		edit_document_using_edit_service_error_explanation: "Dokumentet kan ikke åbnes i Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Bed administratoren om at opdatere Edit Service-integrationen.<br><br> Hvis brugeren skal have adgang til dette dokument fra Edit Service, skal du gå til siden med redigeringsintegration for opbevaringsstedet og opdatere Edit Service Integration for at inkludere klassen i listen over klasser og for at ændre til Edit Service-support.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokumentet kan ikke åbnes.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokumentet er i brug i Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Du skal gemme og lukke dokumentet i Office Online Service, før du kan åbne det i Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Aktivér CORS-uploadninger (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Indstillinger for e-mail:",
		admin_email_settings_hover: "Angiv den type e-mailservice, som brugerne skal anvende. Hvis du aktiverer HTML-baseret e-mailservice, har du mulighed for at tillade, at brugerne kan ændre deres Fra-e-mailadresse. Hvis du vil aktivere Java-baseret e-mailservice, skal du anvende en browser, der understøtter Java.",
		admin_email_use_service: "Brug HTML-baseret e-mailservice",
		admin_email_use_applet: "Brug Java-baseret e-mailservice",
		admin_email_can_modify_from: "Tillad brugere at ændre Fra-e-mailadressen",
		admin_email_can_modify_from_hover: "Som standard kan Fra-e-mailadressen ikke ændres og hentes fra en tilknytning af brugere og e-mailadresser, der repræsenterer brugerkonti.<br><br>Vælg denne indstilling for at lade brugere redigere deres e-mailadresse, når de sender en e-mail. E-mailadressens gyldighed bliver imidlertid ikke valideret.",
		admin_email_use_from_as_sender: "Brug Fra-e-mailadressen som afsender til e-mailen.",
		admin_email_use_from_as_sender_hover: "Som standard anvendes en gyldig Fra-e-mailadressen i en brugers e-mail. Den pågældende e-mailadresse defineres af CNMailSession-e-mailsessionen på applikationsserveren. Vælg denne indstilling for at angive, at brugerens e-mailadresse skal anvendes i e-mailen.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nye markeringer",
		addAnnotationDlg_labelContents: "Indhold:",
		addAnnotationDlg_labelAccess: "Adgang:",
		addAnnotationDlg_labelPublic: "Fælles",
		addAnnotationDlg_labelPrivate: "Personlig",
		addAnnotationDlg_labelPrivateGroup: "Personlig for gruppe",
		addAnnotationDlg_labelGroup: "Gruppe",
		addAnnotationDlg_labelCopiable: "Denne markering kan kopieres til anden server.",
		addAnnotationDlg_buttonLabel_save: "Gem",

		/* Skip navigation */
		skipNavigation_title_main: "Spring til hovedindhold",
		skipNavigation_title_menu: "Spring til navigeringsknapper",
		skipNavigation_label_main: "Spring til hovedindhold",
		skipNavigation_label_menu: "Spring til navigeringsknapper",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Administrér teampladser",
		manage_teamspace_pane_instance_hdr: "Teampladser",
		manage_teamspace_pane_template_hdr: "Skabeloner",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Blad frem",
		scroll_back: "Blad tilbage",

		breadcrumb_separator_open: "Åbn node",
		breadcrumb_separator_close: "Luk node",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Ingen markerede elementer.",

		/* eds */
		eds_url: "URL til eksternt dataserviceprogram:",
		eds_request_timeout: "Serviceprogrammet har anmodet om timeout (sekunder):",
		eds_is_required: "Forhindr brugere i at foretage handlinger, der ændrer egenskabsværdier, når EDS ikke er tilgængelig",

		/* eforms */
		eform_signing_pane_welcome: "Underskriv formularen",
		eform_signing_button_label: "Underskriv",
		eform_signing_pane_delete: "Slet underskrift",
		eform_signing_button_label_delete: "Slet",

		xtplugin_server_label: "URL til IBM FileNet Workplace XT-server",
		xtplugin_server_hover: "Angiv URL'en for serveren, hvor IBM FileNet Workplace XT er implementeret, f.eks. http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL til IBM eClient-server",
		ecplugin_server_hover: "Angiv URL'en for serveren, hvor IBM eClient er implementeret, f.eks. http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Det kan tage lang tid at udføre funktioner på et stort antal elementer. Vil du fortsætte?",
		large_number_actions_continue_button: "Fortsæt",

		large_items_actions_confirmation_question: "Det kan tage lang tid at udføre funktioner på et stort antal elementer. Vil du fortsætte?",

		viewer_editproperties_title: "Bekræftelse",
		viewer_editproperties_title_warning: "Advarsel",
		viewer_editproperties_save: "Gem",
		viewer_editproperties_next: "Næste",
		viewer_editproperties_reset: "Nulstil",
		viewer_editproperties_reset_hover: "Alle ikke-gemte data nulstilles til de værdier, der tidligere er gemt.",
		viewer_editproperties_saveandgetnext: "Gem og hent næste",
		viewer_editproperties_saveandgetnext_hover: "Hent automatisk det næste dokument, når jeg gemmer mine ændringer",
		viewer_editproperties_prompt_save_changes: "Du har ændret egenskaberne for følgende dokument:<br>${0}<br><br>Vil du gemme ændringerne?",
		viewer_editproperties_prompt_discard_changes: "Du har ændret egenskaberne for følgende dokument:<br>${0}<br><br>En eller flere egenskaber har imidlertid en ugyldig værdi, så ændringerne kan ikke gemmes. Ret de ugyldige værdier, eller slet ændringerne.<br>Vil du rette de ugyldige værdier, der vises i delvinduet Egenskaber?",
		viewer_comments_prompt_discard_changes: "Du har ændret kommentarerne. Vil du gemme ændringerne?",
		viewer_notelogs_prompt_discard_changes: "Du har ændret noteslogfilerne. Vil du gemme ændringerne?",
		social_collaborated_version: "Version: ${0}",
		social_link_label: "Hvem...",

		// social comments
		comments: "Kommentarer",
		comments_add_hint: "Tryk på Enter for at tilføje dine kommentarer.",
		comments_hint: "Angiv dine kommentarer.",
		comments_label: "Tryk på Enter eller på tabulatortasten for at gemme dine kommentarer. Tryk på Esc for at annullere.",
		comments_delete_confirmation: "Vil du slette den valgte kommentar?",
		comments_number: "Kommentarer: ${0}",
		comments_save_new: "Du har ændret kommentarerne. Vil du lukke vinduet uden at gemme dine ændringer?",

		notelogs: "Notelogge",
		notelogs_download: "Download",
		notelog_modify: "Gem ændringer",
		notelog_edit: "Redigér notelog",
		notelog_create_newVersion: "Opret en ny notelogversion",
		notelog_add_hint: "Angiv dine kommentarer, og tryk på Enter for at tilføje.",
		notelog_hint: "Tryk på Skift+Enter for at gå til en ny linje",
		notelog_add_placeholder: "Tryk på Enter for at tilføje kommentarer til noteloggen.",
		notelog_save_new: "Du har ændret noteslogfilen. Vil du lukke vinduet uden at gemme dine ændringer?",

		// P8 markings related
		cannot_remove_markings: "Du har ikke tilladelse til at fjerne markeringsværdierne: {0}",

		// download count
		downloadcount: "Downloadninger: {0}",
		downloadcount_single: "1 downloadning",
		downloadcount_multiple: "{0} downloadninger",
		downloadcount_none: "Er ikke downloadet af nogen endnu",

		// recommendations
		recommendations: "Synes godt om-tilkendegivelser: {0}",
		recommendations_recommend: "Synes godt om",
		recommendations_unrecommend: "Synes ikke godt om længere",
		recommendations_you: "Du synes godt om dette",
		recommendations_you_and_another: "Du og 1 anden synes godt om dette",
		recommendations_you_and_others: "Du og {0} andre synes godt om dette",
		recommendations_another: "1 person synes godt om dette",
		recommendations_others: "{0} personer synes godt om dette",
		recommendations_none: "Ingen synes godt om dette endnu",

		// tags
		tags: "Emneord: ${0}",
		tags_delete: "Slet ${0}",
		tags_none: "Der er ingen emneord at vise.",
		tags_add: "Tilføj emneord:",
		tags_hint: "Tryk på Enter for at tilføje dine emneord.",
		tags_hover_help: "Angiv et emneord eller en liste med emneord, der kan bruges til at søge efter dokumenter med samme emneord. Adskil flere emneord med et komma (,), et semikolon (;) eller et mellemrum.",
		tags_hover_help_box: "Angiv et emneord eller en kommasepareret liste med emneord, der kan bruges til at søge efter dokumenter med samme emneord.",
		tags_no_access: "Du har ikke de nødvendige tilladelser til at tilføje emneord.",

		//task scheduler pane
		taskPane_tooltip: "Åbn oversigten Asynkrone opgaver",
		taskPane_tree: "Navigeringstræstruktur for opgavedelvindue",
		taskPane_allTasks: "Alle opgaver",
		taskPane_scheduledTasks: "Planlagte opgaver",
		taskPane_recurringTasks: "Gentagne opgaver",
		taskPane_inProgressTasks: "Igangværende opgaver",
		taskPane_completedTasks: "Udførte opgaver",
		taskPane_failedTasks: "Opgaver, der ikke kunne udføres",
		taskPane_disabledTasks: "Deaktiverede opgaver",
		taskPane_statusScheduled: "Planlagt",
		taskPane_statusInProgress: "I gang",
		taskPane_statusCompleted: "Udført",
		taskPane_statusFailed: "Ikke udført",
		taskPane_statusPaused: "Midlertidigt stoppet",
		taskPane_noItemSelected: "Intet element er valgt",
		taskSchedulerPane_scheduleInformation: "Planoplysninger",
		taskSchedulerPane_loginInformation: "Logonoplysninger",
		taskSchedulerPane_startImmediately: "Start omgående",
		taskSchedulerPane_recurrence: "Gentagelse",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Planrapport",
		taskSchedulerPane_nameHoverHelp: "Angiv navnet på opgaven.",
		taskSchedulerPane_descriptionHoverHelp: "Angiv en beskrivelse af opgaven. Beskrivelsen skal hjælpe dig med at skelne mellem opgaver.",
		taskSchedulerPane_startTimeHoverHelp: "Angiv, hvornår opgaven skal udføres. Vælg Start omgående for at udføre opgaven nu.",
		taskSchedulerPane_recurrenceHoverHelp: "Du kan planlægge, at opgaven skal udføres regelmæssigt.",
		taskSchedulerPane_endTimeHoverHelp: "Angiv, hvornår udførelse af opgaven skal slutte. Opgaven udføres fra det planlagte starttidspunkt til det planlagte sluttidspunkt.",
		taskSchedulerPane_usernameHoverHelp: "Ved gentagne opgaver skal du angive et brugernavn for at aktivere valideringsservicen, når opgaven udføres.",
		taskSchedulerPane_passwordHoverHelp: "Ved gentagne opgaver skal du angive kodeordet for den angivne bruger for at aktivere valideringsservicen, når opgaven udføres.",
		taskSchedulerPane_notification: "Advisering",
		taskSchedulerPane_emailAddress: "E-mailadresse",
		taskSchedulerPane_emailAddressHoverHelp: "Angiv den e-mailadresse, hvor du ønsker at modtage advisering om status for opgaven.",
		taskSchedulerPane_intervalHoverHelp: "Angiv det tidsrum, hvor den gentagne opgave skal udføres. Du kan angive intervallet i timer, dage, uger eller måneder.",
		taskSchedulerPane_scheduledStartTime: "Planlagt starttid",
		taskSchedulerPane_startTime: "Starttid",
		taskSchedulerPane_title: "Plan",
		taskSchedulerPane_runNow: "Udfør nu",
		taskSchedulerPane_runOnce: "Udfør en gang",
		taskSchedulerPane_runAtSchedule: "Udfør i en plan",
		taskSchedulerPane_repeats: "Gentagelser",
		taskSchedulerPane_repeatsEvery: "Gentages hver",
		taskSchedulerPane_hourly: "Time",
		taskSchedulerPane_daily: "Dag",
		taskSchedulerPane_weekly: "Uge",
		taskSchedulerPane_monthly: "Måned",
		taskSchedulerPane_yearly: "År",
		taskSchedulerPane_sunday: "L",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "O",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "L",
		taskSchedulerPane_starting: "Startdato",
		taskSchedulerPane_after: "Efter",
		taskSchedulerPane_ending: "Slutdato",
		taskSchedulerPane_times: "gang(e)",
		taskSchedulerPane_days: "dag(e)",
		taskSchedulerPane_hours: "time(er) i døgnet",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Slutter (i dage)",
		taskSchedulerPane_never: "Aldrig",
		taskSchedulerPane_categorization: "Kategorisering",
		taskSchedulerPane_scheduleTask: "Planlæg opgave",
		taskInformationPane_details: "Oplysninger",
		taskInformationPane_errors: "Fejl",
		taskInformationPane_taskInstances: "Opgaveforekomster",
		taskInformationPane_audits: "Revisioner",
		taskInformationPane_results: "Resultater",
		asyncTasks: "Asynkrone opgaver",

		//entry template pane
		search_all_entry_templates: "Søg i alle indgangsskabeloner.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Vis hele websted",
		mobilesite: "Vis mobilwebsted",
		profile: "Administrér profil",
		office_template: "Office-skabelon:",
		select_office_template: "Vælg en office-skabelon",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "De valgte dokumenter kan ikke åbnes i fremviseren med Flet og opdel-funktionen.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Fremviseren, der er konfigureret til PDF- og TIFF-dokumenter, understøtter ikke Flet- og opdel-funktionen.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Bed administratoren om at konfigurere en fremviser til PDF- og TIFF-dokumenter, der understøtter Flet- og opdel-funktionen, f.eks. Daeja viewONE Virtual-fremviseren.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "De valgte PDF-dokumenter kan ikke åbnes i fremviseren med Flet og opdel-funktionen.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Fremviseren, der er konfigureret til PDF-dokumenter, understøtter ikke Flet- og opdel-funktionen.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Bed administratoren om at konfigurere en fremviser til PDF-dokumenter, der understøtter Flet- og opdel-funktionen, f.eks. Daeja viewONE Virtual-fremviseren.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "De valgte TIFF-dokumenter kan ikke åbnes i fremviseren med Flet og opdel-funktionen.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Fremviseren, der er konfigureret til TIFF-dokumenter, understøtter ikke Flet- og opdel-funktionen.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Bed administratoren om at konfigurere en fremviser til TIFF-dokumenter, der understøtter Flet- og opdel-funktionen, f.eks. Daeja viewONE Virtual-fremviseren.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "De valgte dokumenter kan ikke åbnes i fremviseren med Flet og opdel-funktionen.",
		document_builder_unsupported_documents_error_explanation: "Flet- og opdel-funktionen fungerer kun med PDF- og TIFF-dokumenter.",
		document_builder_unsupported_documents_error_userResponse: "Vælg understøttede dokumenter, og prøv igen.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Nogle af de valgte dokumenter kan ikke åbnes i fremviseren med Flet- og opdel-funktionen.",
		document_builder_some_unsupported_documents_error_explanation: "Flet- og opdel-funktionen fungerer kun med PDF- og TIFF-dokumenter, der er åbnet fra samme opbevaringssted.",
		document_builder_some_unsupported_documents_error_userResponse: "De understøttede dokumenter åbnes i fremviseren.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Der er opstået en fejl under indtjekning af det ændrede indhold.",
		document_builder_checkin_failed_explanation: "Fremviseren har modtaget et fejlsvar under indtjekning af ændret indhold.",
		document_builder_checkin_failed_userResponse: "Bed systemadministratoren om at gennemse webapplikationsserverens logfiler.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokumentet kan ikke åbnes.",
		no_viewer_to_view_error_explanation: "Systemadministratoren har blokeret fremvisning af dette dokument. Hvis du har brug for dokumentet, kan du downloade det.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Indholdet kan ikke bygges.",
		document_build_failed_userResponse: "Bed systemadministratoren om at gennemse fremviserens logfiler.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokumentet kan ikke åbnes i flette- og opdelingstilstand.",
		document_builder_open_failed_userResponse: "Bed systemadministratoren om at gennemse fremviserens logfiler.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Systemet kan ikke skifte til flette- og opdelingstilstand.",
		document_builder_switch_failed_userResponse: "Bed systemadministratoren om at gennemse fremviserens logfiler.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenter",
		print_service_page_setup_tab_title: "Sideopsætning",
		print_service_OD_print_tab_title: "Printerindstillinger",
		print_service_status_merging: "Fletter dokumenter...",
		print_service_status_converting: "Konverterer dokumenter...",
		print_service_status_formatting: "Formaterer dokumentet til udskrivning...",
		admin_print_service_maximum_number_to_print: "Maksimalt antal dokumenter, der kan udskrives:",
		admin_print_service_maximum_size_to_print: "Maksimal datamængde, der kan udskrives (i MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Angiv det maksimale antal dokumenter, som brugere kan udskrive på én gang. Standardmaksimum er 50. Hvis du ikke vil begrænse udskrivning ved hjælp af antal dokumenter, skal du sætte grænsen til 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Begrænsning:</b> Denne indstilling understøttes ikke på IBM Content Manager OnDemand.<br/><br/>Angiv den maksimale datamængde, der kan udskrives ved hjælp af udskrivningsservicen IBM Daeja ViewONE.<br /><br />Den samlede størrelse af hvert dokument må ikke være større end denne grænse.<br/><br/>Standardgrænsen er på 200 MB. Hvis du angiver en grænse over 200 MB, kan det påvirke systemets ydeevne. Hvis du ikke vil begrænse udskrivning ved hjælp af dokumentstørrelse, skal du sætte grænsen til 0",
		// error printing
		print_service_error_printing: "Der er opstået en fejl under udskrivning.",
		print_service_error_printing_userResponse: "Bed systemadministratoren om at gennemse logfilerne til udskrivningsservicen.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "De valgte dokumenter er for store til udskrivning.",
		print_service_max_content_error_explanation: "De valgte dokumenter overskrider grænsen på ${0} MB data.",
		print_service_max_content_error_userResponse: "Vælg færre dokumenter, eller vælg mindre dokumenter, og udskriv igen. Du kan også kontakte systemadministratoren for at få øget den maksimale samlede størrelse af elementer, der kan udskrives på én gang fra denne arbejdsplads.",
		print_service_max_content_error_0: "maksimal_størrelse_på_elementer",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Elementerne kan ikke udskrives.",
		print_service_max_number_selected_error_explanation: "Du kan udskrive op til ${0} elementer ad gangen. Du forsøger at udskrive ${1} elementer.",
		print_service_max_number_selected_error_userResponse: "Vælg færre elementer, og prøv at udskrive elementerne igen. Du kan også kontakte systemadministratoren for at få øget det maksimale antal elementer, der kan udskrives på én gang fra denne arbejdsplads.",
		print_service_max_number_selected_error_0: "maksimalt_antal_elementer",
		print_service_max_number_selected_error_1: "antal_elementer",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


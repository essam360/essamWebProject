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
		welcome_user: "Welkom, ",
		about: "Info",
		all: "Alle",
		help: "Help",
		user_session: "Gebruikerssessie",
		user_session_for: "Gebruikerssessie voor ${0}",
		user_session_for_with_container: "Gebruikerssessie voor ${0} (${1})",
		tools: "Tools",
		login: "Aanmelden",
		logout: "Afmelden",
		search: "Zoeken",
		saved_searches: "Opgeslagen zoekacties",
		content_analytics: "Content analyseren",
		reset: "Resetten",
		reset_hover: "Alle niet-opgeslagen gegevens in alle tabs worden opnieuw ingesteld naar de eerder opgeslagen waarden.",
		reset_default: "Alles wissen",
		reset_default_hover: "Hiermee wist u het veld Huidig label op alle tabs",
		locale: "Locale:",
		up: "Omhoog",
		down: "Omlaag",
		restore: "Herstellen",
		maximize: "Maximaliseren",
		values_label: "Waarden",
		value_label: "Waarde:",
		path_label: "Pad:",
		new_label: "Nieuw:",
		back_label: "Vorige",
		clear: "Wissen",
		set: "Instellen...",
		browse: "Bladeren",
		work: "Werk",
		connect: "Verbinding tot stand brengen",
		documents: "Documenten:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM en het IBM-logo zijn merken van IBM Corporation die wereldwijd in vele rechtsgebieden zijn geregistreerd. Java en alle op Java gebaseerde merken en logo's zijn merken van Oracle en/of daaraan gelieerde ondernemingen. De Oracle Outside In Technology die hierin is inbegrepen, is onderworpen aan een beperkte licentie voor gebruik en mag alleen worden gebruikt in samenhang met deze toepassing. Dit Programma wordt in licentie gegeven onder de voorwaarden van de bij het Programma geleverde licentieovereenkomst. Deze licentieovereenkomst bevindt zich in een directorymap of bibliotheek van het programma, aangeduid als \"License\" of \"Non_IBM_License\", of is verstrekt als afgedrukte licentieovereenkomst. Lees deze overeenkomst zorgvuldig voordat u het programma gaat gebruiken. Door het programma te gebruiken, stemt u in met deze voorwaarden.  ",
		edit: "Bewerken",
		cancel: "Annuleren",
		close: "Sluiten",
		close_all: "Alle tabs sluiten",
		close_others: "Overige tabs sluiten",
		ok: "OK",
		yes: "Ja",
		no: "Nee",
		open: "Openen",
		refresh: "Vernieuwen",
		refresh_cabinets: "Alle kabinetten vernieuwen",
		delete_text: "Wissen",
		export_config: "Configuratie exporteren",
		description: "Beschrijving",
		true_label: "Waar",
		false_label: "Onwaar",
		error: "Fout",
		error_reference_hover: "Zoek op www.ibm.com naar meer informatie over deze fout.",
		url_label: "URL",
		default_label: "Standaard",
		ibm_label: "IBM",
		light_label: "Licht",
		dark_label: "Donker",
		save: "Opslaan",
		saveAs: "Opslaan als...",
		save_and_close: "Opslaan en Sluiten",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Geen",
		Name: "Naam",
		"${NAME}": "Naam",
		mime_type: "MIME-type",
		mime_type_contains_label: "MIME-type bevat",
		mime_type_header: "MIME-type",
		mime_type_icon: "Pictogram voor MIME-type",
		casesearch: "Zaak",
		item: "Item",
		no_mime_type: "Dit item bevat geen content.",
		items_selected: "${0} items geselecteerd.",
		requestor: "Aangevraagd door",
		scheduledStartTime: "Geplande begintijd",
		isRecurring: "Is herhalend",
		weeks: "Weken",
		days: "Dagen",
		hours: "Uur",
		endTime: "Eindtijd",
		username: "Gebruikersnaam",
		password: "Wachtwoord",
		serverURL: "Server-URL",
		enable: "Inschakelen",
		disable: "Uitschakelen",
		finish: "Voltooien",
		previous: "Vorige",
		next: "Volgende",
		schedule: "Plannen",
		removeFromThisList: "Verwijderen uit Deze Lijst",
		status: "Status",
		scheduledEndTime: "Geplande eindtijd",
		type: "Type",
		mode: "Modus",
		startTime: "Begintijd",
		createdBy: "Gemaakt door",
		nextScheduledTime: "Volgende geplande tijd",
		id: "ID",
		duration: "Duur",
		repeatCycle: "Frequentie",
		taskTypeName: "Taaktype",
		to: "tot",
		filter: "Filter:",
		error_message: "Foutbericht",

        file_type: "Documenttype",
        word_template_name: "Naam Word-sjabloon",
        excel_template_name: "Naam Excel-sjabloon",
        powerpoint_template_name: "Naam PowerPoint-sjabloon",
        template_description: "Beschrijving sjabloon",
        action_add_template: "Toevoegen",
        action_change_template: "Bewerken",      
        action_edit_template_properties: "Eigenschappen",
        add_presentation_template: "Presentatiesjabloon toevoegen",
    	add_spreadsheet_template: "Spreadsheetsjabloon toevoegen",
    	add_doc_template: "Documentsjabloon toevoegen",    	
    	file_type_doc_hover: "U moet een geldig sjabloonbestand voor een tekstverwerkingsdocument opgeven.<br><br>Geldige MIME-typen:${0}",
    	file_type_doc_error: "U moet een geldig sjabloonbestand voor een tekstverwerkingsdocument opgeven.<br><br>Het geselecteerde MIME-type voor het document: ${0}<br><br>Geldige MIME-typen:${1}",
    	file_type_presentation_hover: "U moet een geldig sjabloonbestand voor een presentatie opgeven.<br><br>Geldige MIME-typen:${0}",
    	file_type_presentation_error: "U moet een geldig sjabloonbestand voor een presentatie opgeven.<br><br>Het geselecteerde MIME-type voor het document: ${0}<br><br>Geldige MIME-typen:${1}",
    	file_type_spreadsheet_hover: "U moet een geldig sjabloonbestand voor een spreadsheet opgeven.<br><br>Geldige MIME-typen:${0}",
    	file_type_spreadsheet_error: "U moet een geldig sjabloonbestand voor een spreadsheet opgeven.<br><br>Het geselecteerde MIME-type voor het document: ${0}<br><br>Geldige MIME-typen:${1}",
    	office_online_only_one_template_error: "U kunt slechts één bestand selecteren.",
    	change_presentation_template: "Presentatiesjabloon bewerken",
    	change_spreadsheet_template: "Spreadsheetsjabloon bewerken",
    	change_doc_template: "Documentsjabloon bewerken",
    	change_button: "Bewerken",
	    new_document_dialog_doc_title: "Nieuw document",
	    new_document_dialog_presentation_title: "Nieuwe presentatie",
	    new_document_dialog_spreadsheet_title: "Nieuwe spreadsheet",
	    new_document_dialog_title_label: "Titel:",
	    new_document_dialog_title_hover: "Geef een titel op voor dit document.",
	    new_document_dialog_title_missing_message: "U moet een titel opgeven.",
	    office_online_save_before_adding_templates_title: "Wijzigingen opslaan in de repository",
	    office_online_save_before_adding_templates_error: "U kunt pas Office-sjablonen toevoegen nadat u de aangebrachte wijzigingen hebt opgeslagen in de repository. Klik op <b>Opslaan en sluiten</b> en open de repository vervolgens opnieuw om de Office-sjablonen toe te voegen. ",
	    copy_to_OOS_dialog_doc_title: "Nieuw document",
	    office_online_checkin_cancelcheckout_message: "Dit document wordt bewerkt in Microsoft Office Online. U kunt het document niet inchecken of de uitcheckprocedure annuleren terwijl het open is in Microsoft Office Online.",
	    new_document_classification: "Classificatie:",
	    new_document_classification_help: "Hiermee worden de klasse, de eigenschappen en de bovenliggende map, indien aanwezig, van het brondocument opnieuw ingesteld. Als u een document toevoegt met behulp van van een invoersjabloon, wordt de invoersjabloon van het brondocument automatisch geselecteerd indien deze aanwezig is. De eigenschappen van het brondocument worden gebruikt als de standaardwaarden, maar de map en klasse die zijn opgegeven in de invoersjabloon blijven bewaard.",
		new_document_classification_use_source_document: "Brondocument gebruiken:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Pictogram voor ${0}-type",
		repository_name_and_type: "Naam en type van ${0}",
		select_class_label: "${0} selecteren",

		// View toggle buttons
		detail_view_button_tooltip: "Detailweergave",
		detail_view_button: "Details",
		magazine_view_button_tooltip: "Tijdschriftweergave",
		magazine_view_button: "Tijdschrift",
		filmstrip_view_button_tooltip: "Filmstrookweergave",
		filmstrip_view_button: "Filmstrook",

		magazine_view_show: "Afbeelden als tijdschrift",
		detail_view_show: "Afbeelden met details",

		total_count_item: "item",
		total_count_items: "items",
		total_count_more_items: "Meer dan ${0} items",

		extension_changed: "De extensie van het bestand dat u hebt geselecteerd komt niet overeen met die van het oorspronkelijke bestand. Selecteer een ander bestand.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Niet alle bestandstypen worden door de geselecteerde viewer ondersteund. Als u deze viewertoewijzing opslaat, kunnen er problemen optreden bij het afbeelden van documenten. Als de optie Alle bestandstypen wordt geselecteerd, wordt u aanbevolen om een viewer te selecteren die alle bestandstypen ondersteunt.<br><br><b>Tip:</b> De volgende viewers ondersteunen alle bestandstypen:<ul><li>Appletviewer</li><li>AJAX-viewer</li><li>HTML-conversie</li><li>PDF-conversie</li><li>Webbrowser</li></ul>",
		file_type_any: "Alle bestandstypen",
		file_type_any_hover: "Selecteer deze optie als u de geselecteerde viewer wilt gebruiken voor weergave van alle documenten, ongeacht het bestandstype. Deze optie wordt ondersteund voor de volgende viewers:<br><br><ul><li>Appletviewer</li><li>AJAX-viewer</li><li>HTML-conversie</li><li>PDF-conversie</li><li>Webbrowser</li></ul><br><br><b>Onthoud:</b> Als u bepaalde viewers meestal wilt gebruiken, moeten toewijzingen die u maakt en die deze optie gebruiken, worden verplaatst naar het einde van uw viewertoewijzing. ",
		file_type_input: "Nieuw bestandstype:",

		mime_type_input: "Nieuw MIME-type:",
		mime_type_input_invalid: "Het nieuwe MIME-type mag geen van de volgende tekens bevatten: ,",
		mime_type_available: "Beschikbare MIME-typen",
		mime_type_selected: "Geselecteerde MIME-typen",
		file_type_input: "Nieuw bestandstype:",
		file_type_input_invalid: "Het nieuwe bestandstype mag geen van de volgende tekens bevatten: ,",
		file_type_available: "Beschikbare bestandstypen",
		file_type_selected: "Geselecteerde bestandstypen",
		file_type_header: "Bestandstype",
		viewer: "Viewer:",
		viewer_viewer: "Lezer",
		viewer_view: "Weergave",
		viewer_preview: "Preview",
		viewer_merge_and_split: "Samenvoegen en splitsen",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Alleen preview",
		preview_only_label: "(preview)",
		preview_only_hover: "Deze viewertoewijzing wordt alleen gebruikt als een gebruiker op <b>Preview</b> klikt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Deze repository biedt geen ondersteuning voor bladeren. Selecteer een andere repository.",

		repository_community_teamspace_message: "Er is al een andere repository aangemerkt als de bibliotheekrepository voor de community. Als u de bestaande repository wilt blijven gebruiken als de bibliotheekrepository voor de community, selecteert u <b>Nee</b> voordat u uw wijzigingen opslaat. Op die manier voorkomt u dat de bestaande repository wordt vervangen door deze repository.",

		favorites_empty: "U hebt nog geen favorieten.",
		syncItems_empty: "U hebt nog geen gesynchroniseerde bestanden.",

		root_folder_id: "Hoofdmap-ID",
		unified_searches: "Zoekopdrachten over meerdere repository's:",
		max_results: "Aantal resultaten:",
		direct_retrieve_enabled: "Rechtstreeks ophalen:",
		itemTypesToDisplay: "Af te beelden itemtypen",
		allItemTypes: "Alle itemtypen",
		include_attr_group_name: "Beschrijvingen van kenmerkgroepen in weergavenamen van kenmerken:",
		admin_repcfg_include_attr_group_name_hover: "De beschrijving van een kenmerkgroep is standaard opgenomen in de namen van de kenmerken van de kenmerkgroep. Hierdoor kunnen gebruikers tijdens het werken met kenmerken snel zien tot welke kenmerkgroep een kenmerk van een kenmerkgroep behoort.<br>Gebruiker kunnen bijvoorbeeld de volgende naam zien voor een kenmerk van een kenmerkgroep: Document Settings.Document Type.<br><br>Als u deze optie uitschakelt, wordt alleen de kenmerkbeschrijving gebruikt voor de kenmerknaam van de kenmerkgroep.<br>In dat geval zien gebruikers bijvoorbeeld deze naam: Document Type.<br><br>Zonder de beschrijving van de kenmerkgroep kunnen gebruikers mogelijk niet snel inzien of Document Type een eenvoudig kenmerk is of een kenmerk van een kenmerkgroep.",
		documentItemTypesOnly: "Alleen itemtypen voor documentmodellen",
		object_store: "Symbolische naam objectruimte:",
		object_store_display_name: "Weergavenaam objectruimte:",
		teamspaceUpgradeMsg: "Uw teamruimten worden bijgewerkt zodra u de repositoryconfiguratie opslaat. Als u veel teamruimten hebt, kan de update een aantal minuten duren.",
		synchUpgradeMsg: "De synchronisatiemodule voor deze repository wordt bijgewerkt zodra u de repositoryconfiguratie opslaat.",
		protocol: "Protocol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID CMIS-repository:",
		cmis_url: "URL van servicedocument CMIS AtomPub-binding:",
		trace_level: "Traceerniveau",
		trace_dir: "Traceerdirectory",
		temp_dir: "Tijdelijke directory",
		show_document_location: "Documentlocatie afbeelden",
		max_folders: "Maximum aantal mappen",
		afp_conversion: "AFP-conversie",
		line_conversion: "Conversie regelgegevens",
		max_hits: "Maximum aantal hits",
		folder_search_expresssion: "Expressie map zoeken",
		max_item_types: "Maximum aantal itemtypen",
		max_worklists: "Maximum aantal werklijsten",
		update_storage_collection: "Opslagverzameling bijwerken",
		include_mime_types_in_search_results: "MIME-typen opnemen in zoekresultaten",
		object_type: "Objecttype",
		object_type_document: "Documenten",
		object_type_folder: "Mappen",
		file_label: "Bestand:",
		plugin_jarfile_path_label: "Pad JAR-bestand:",
		plugin_classfolder_path_label: "Pad van klassenbestand:",
		plugin_classname_label: "Klassennaam:",
		plugin_id_label: "ID plugin:",
		class_label: "Klasse",
		configuration: "Aanpassen",
		connect_repository: "Verbinding maken...",
		server_type: "Servertype",
		timeout_in_seconds: "Time-out (in seconden):",
		default_search_template: "Standaard zoekopdracht",
		search_filtered_properties: "Doorzoekbare eigenschappen",
		property_contains_label: "Eigenschap bevat",
		class_contains_label: "Klasse bevat",
		search_filtered_operators: "Zoekoperators",
		default_search_results: "Zoekresultaten",
		data_type: "Gegevenstype",
		status_bar: "Statusregel",
		operators_for: "Operators voor:",
		currentUser: "Huidige gebruiker",
		nameContains: "Naam bevat",
		searchFor: "Zoeken naar",
		server_autentication: "Serververificatie (OAuth 2.0 met JWT)",
		standard_authentication: "Standaardverificatie (3-legged OAuth2.0)",
		developer_authentication: "Ontwikkelaarsverificatie",
		enterprise_id: "Bedrijfs-ID:",
		public_key_id: "ID openbare sleutel:",
		private_key_path: "Pad persoonlijke-sleutelbestand:",
		server_user_email: "E-mailadres van gebruiker op server",

		filter_builder_tooltip: "Filter definiëren",

		// Launch bar
		launchbar_home: "Home openen",
		launchbar_favorites: "Favorieten openen",
		launchbar_browse: "View Bladeren openen",
		launchbar_browse_popup: "Voorgrondlijst Bladeren openen",
		launchbar_search: "View Zoeken openen",
		launchbar_search_popup: "Voorgrondlijst Zoeken openen",
		launchbar_teamspaces: "View Teamruimten openen",
		launchbar_teamspaces_popup: "Voorgrondlijst Teamruimten openen",
		launchbar_work: "View Werk openen",
		launchbar_work_popup: "Voorgrondlijst Werk openen",
		launchbar_entry_templates: "View Invoersjablonen openen",
		launchbar_entry_templates_popup: "Voorgrondlijst Invoersjablonen openen",
		launchbar_admin: "View Beheer openen",

		admin_sync_server: "Synchronisatieservices",
		admin_settings: "Instellingen",
		admin_interface_text: "Labels",
		admin_interface_text_desktop: "Desktop:",
		admin_desktops: "Desktops",
		admin_repositories: "Repository's",
		admin_mobile: "Mobiel",
		admin_menus: "Menu's",
		admin_reason_codes: "Afschermingsredenen",
		admin_plugins: "Plugins",
		admin_plugins_state_enabled: "Plugin is ingeschakeld",
		admin_plugins_state_disabled: "Plugin is uitgeschakeld",
		admin_plugins_version: "Versie:",
		admin_plugins_version_heading: "Versie",
		admin_plugins_icon: "Pluginpictogram",
		admin_viewer_mapping_icon: "Pictogram Viewertoewijzing",
		admin_viewer_defs: "Viewertoewijzingen",
		admin_viewer_dialog_title: "Toewijzing",
		admin_viewer_dialog_new_title: "Nieuwe toewijzing",
		admin_viewer_dialog_instructions: "Met een toewijzing wordt opgegeven welke viewer moet worden gebruikt voor de bestanden in een repository. U kunt meerdere toewijzingen maken om verschillende viewers op te geven voor verschillende bestandstypen. Bij het definiëren van een toewijzing kunt u ofwel een MIME-type, ofwel een bestandsextensie opgeven. Toewijzingen met bestandsextensies worden toegewezen aan documentnamen. Bijvoorbeeld: als het bestandstype van een toewijzing is ingesteld op gif, wordt er een toewijzing aangebracht naar documenten waarvan de bestandsnaam eindigt met de extensie .gif",
		admin_desktop_viewer_defs: "Viewertoewijzing:",
		admin_desktop_viewer_defs_hover: "Met de viewertoewijzing wordt opgegeven welke viewer wordt gebruikt om verschillende typen documenten te openen in de repository.<br><br>U kunt nieuwe viewertoewijzingen maken in de sectie <b>Viewertoewijzingen</b> van de beheerfunctie.",
		admin_desktops_used: "Gebruikt op desktops",
		admin_desktop_additional_settings: "Aanvullende instellingen:",
		admin_default_desktop: "Instellen als standaarddesktop",
		admin_default_desktop_header: "Standaarddesktop",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Desktoppictogram",

		// Themes
		admin_themes: "Thema's",
		admin_theme_list_instructions: "Door een thema te maken, kunt u het gemakkelijker maken om de webclient aan te passen voor uw organisatie. Als u voor de verschillende desktops in uw omgeving verschillende kleuren, lettertypen of logo's wilt gebruiken, kunt u meerdere thema's maken.<br><br>Nadat u een thema hebt gemaakt, kunt u het toepassen op een desktop door dat thema te configureren op het tabblad <b>Presentatie</b> van de desbetreffende desktop.",
		admin_theme_instructions: "Met een thema kunt u bepalen welke kleuren en lettertypen er in de webclient worden gebruikt. Bovendien kunt u het thema gebruiken voor het wijzigen van het logo, de programmanaam en de copyrighttekst op de aanmeldingspagina en in de banner.",
		admin_theme_heading: "Thema: <b>${0}</b>",
		admin_new_theme: "Nieuw thema",
		admin_text_theme: "Thema",
		admin_delete_confirmation_themes: "Weet u zeker dat u de geselecteerde thema's wilt wissen?\nEr zijn ${0} thema's geselecteerd.",
		admin_theme_color: "Kleur",
		admin_theme_text: "Tekst",
		admin_theme_solid: "Effen",
		admin_theme_gradient: "Overgang",
		admin_theme_box: "Vak",
		admin_theme_color_label: "Kleur ${0}:",
		admin_theme_name_invalid: "De volgende tekens mogen niet voorkomen in de naam van het thema: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Het ID van het thema moet uniek zijn. Als het thema eenmaal is opgeslagen, kan de naam niet meer worden gewijzigd.<br><br>Het ID mag alleen alfanumerieke tekens bevatten.",
		admin_theme_name_hover: "In de naam mogen de volgende tekens niet voorkomen: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatisch",
		admin_theme_logo_url_hover: "Geef de URL van het logobestand op. Als het logo zich op dezelfde webtoepassingenserver bevindt als de webclient, geeft u een relatieve URL op, bijvoorbeeld: /mycustomizations/banner_logo.png<br><br>Het wordt aanbevolen een logo met transparante achtergrond te gebruiken.",
		admin_theme_color_palette_title_heading: "Kleurenpalet",
		admin_theme_color_palette_help_text: "Stel het kleurenpalet voor uw thema samen. Dit kan met de hexadecimale waarde of de kleurkiezer. U kunt zo veel kleuren toevoegen als u wilt.",
		admin_theme_color_add_button_label: "Kleur toevoegen",
		admin_theme_color_remove_button_label: "Kleur verwijderen",
		admin_theme_global_title_heading: "Toepassingsbrede elementen",
		admin_theme_global_font: "Letterfamilie:",
		admin_theme_global_font_hover: "Selecteer het lettertype dat in de webclient moet worden gebruikt. De lettertypen worden opgesomd in volgorde van voorrang. Het volgende lettertype in de lijst wordt alleen gebruikt als het vorige lettertype niet is geïnstalleerd op de clientcomputer.",
		admin_theme_global_framework_color_label: "Kleur framework:",
		admin_theme_global_framework_color_hover: "Selecteer de kleur die moet worden gebruikt voor de volgende elementen:<ul><li>Titelbalken van dialoogvensters</li><li>De accentkleur aan de bovenkant van de geselecteerde tab</li><li>De pictogrammen in de view Contentlijst (Detailweergave, Tijdschriftweergave, Filmstrookweergave)</li></ul><br>Deze kleur wordt niet gebruikt voor de scheidingslijnen tussen de secties van de webclient. Als u de kleur van de scheidingslijnen wilt wijzigen, moet u een plugin met een aangepast CSS-bestand maken.",
		admin_theme_color_global_toolbar: "Kleur algemene werkbalk:",
		admin_theme_color_global_toolbar_hover: "Als u de algemene werkbalk opneemt in de webclient, kunt u de kleur van die werkbalk kiezen.<br><br><b>Tip:</b> De werkbalk wordt afgebeeld in de banner bovenin de webclient, dus de kleur van de werkbalk moet een aanvulling vormen op de kleur van de banner.",
		admin_theme_global_selected_color: "Kleur geselecteerde items:",
		admin_theme_global_selected_color_hover: "Selecteer de kleur voor items die zijn geselecteerd in de bladerstructuur, de zoekstructuur en de contentlijst.<br><br>De kleur die wordt gebruikt als de muisaanwijzer boven een item wordt gehouden, is van deze kleur afgeleid.",
		admin_theme_global_link_color: "Kleur van links:",
		admin_theme_global_link_color_hover: "Selecteer de kleur voor alle URL's waarop in de webclient geklikt kan worden. Deze kleur wordt bijvoorbeeld gebruikt voor de links Meer Informatie die overal in de webclient zichtbaar zijn.",
		admin_theme_login_title_heading: "Elementen van aanmeldingspagina",
		admin_theme_page_background_label: "Achtergrondkleur van aanmeldingspagina:",
		admin_theme_login_page_background_hover: "Selecteer de kleur voor de achtergrond van het aanmeldingsvenster.",
		admin_theme_login_pane_background_label: "Achtergrondkleur van aanmeldingsvenster:",
		admin_theme_login_pane_background_hover: "Selecteer een kleur voor het aanmeldingsvenster. Deze kleur moet een aanvulling vormen op de achtergrondkleur van de aanmeldingspagina.",
		admin_theme_text_color: "Tekstkleur:",
		admin_theme_login_pane_text_color_hover: "Selecteer een kleur voor de tekst van het aanmeldingsvenster. Deze kleur wordt gebruikt voor de welkomsttekst en de veldlabels. Let erop dat deze kleur goed zichtbaar moet zijn tegen de achtergrondkleur van het aanmeldingsvenster.",
		admin_theme_copyright_text: "Copyrighttekst:",
		admin_theme_copyright_text_hover: "Geef op of er copyrighttekst moet worden afgebeeld op de aanmeldingspagina.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Geen copyrighttekst",
		admin_theme_banner_title_heading: "Elementen in de banner",
		admin_theme_text_icons_color: "Kleur van tekst en pictogrammen",
		admin_theme_icon_color_label: "Kleur van pictogrammen:",
		admin_theme_shadow_label: "Schaduw:",
		admin_theme_banner_text_icons_hover: "Selecteer een kleur voor de tekst en pictogrammen in de banner. Let erop dat deze kleur goed zichtbaar moet zijn tegen de achtergrondkleur van de banner.",
		admin_theme_banner_product_name_label: "Productnaam:",
		admin_theme_banner_product_name_hover: "Als u een desktop maakt, kunt u opgeven dat er een aangepaste naam voor de toepassing moet worden afgebeeld. Als u geen aangepaste naam opgeeft, wordt IBM Content Navigator gebruikt als productnaam. Geef op of de in de desktop gedefinieerde toepassingsnaam moet worden gebruikt, of een afbeelding in plaats van een naam. ",
		admin_theme_banner_product_name_desktop_defined_label: "Naam uit desktop gebruiken",
		admin_theme_banner_product_name_image: "Aangepast logo (URL) gebruiken",
		admin_theme_background_color_label: "Achtergrondkleur:",
		admin_theme_style_label: "Tekenstijl:",
		admin_theme_banner_color_hover: "Selecteer een kleur voor de banner bovenin de toepassing.<br><br><b>Tip:</b> Zorg ervoor dat de kleur van de tekst op de banner leesbaar is ten opzichte van de achtergrondkleur van de banner.",
		admin_theme_buttons_title_heading: "Knoppen",
		admin_theme_navigation_title_heading: "Navigatie-elementen",
		admin_theme_navigation_icon_selected_label: "Kleur geselecteerd pictogram:",
		admin_theme_navigation_background_hover: "Selecteer een kleur voor de achtergrond van de functienavigatiebalk.",
		admin_theme_navigation_icon_color_hover: "Selecteer een kleur voor de pictogrammen op de functienavigatiebalk. Als u de standaardlayout van een desktop gebruikt, moet deze kleur contrasteren met de achtergrond van het vervolgkeuzemenu van de functie. Als u de klassieke layout van een desktop gebruikt, moet deze kleur contrasteren met de achtergrond van de navigatiebalk van de functie.",
		admin_theme_navigation_icon_selected_hover: "Selecteer een kleur voor de geselecteerde functies op de functienavigatiebalk. De kleur moet een aanvulling vormen op de kleur van de pictogrammen en de achtergrondkleur van de functienavigatiebalk.<br><br>Als u de klassieke layout van een desktop gebruikt, wordt deze kleur gebruikt als de kleur van de voorgrondinfo in de navigatiebalk van de functie.",
		admin_theme_button_background_color_hover: "Selecteer een kleur voor de achtergrond van knoppen.",
		admin_theme_button_style_hover: "Selecteer een knopstijl.",
		admin_theme_button_text_icon_color_hover: "Selecteer een kleur voor de tekst en afbeeldingen op knoppen.",
		admin_theme_no_logo_label: "Geen logo",
		admin_theme_custom_logo_label: "Aangepast logo (URL)",
		admin_theme_banner_type: "Vullingstijl banner:",
		admin_theme_banner_type_hover: "Geef op of de banner een effen kleur of een verloopkleur moet hebben. Als u hier een banner met overgangskleur opgeeft, wordt de kleur die u opgeeft voor de banner de donkerste kleur in de banner<br><br><b>Tip:</b> Zorg ervoor dat de kleur van de tekst op de banner leesbaar is ten opzichte van de achtergrondkleur van de banner.",
		admin_theme_icon: "Themapictogram",
		admin_theme_buttons_and_links_title_heading: "Knoppen, velden en links",
		admin_theme_button_style_label: "Knopstijl:",
		admin_theme_theme_style_label: "Themastijl:",
		admin_theme_theme_style_hover: "Selecteer de stijl waarop u het thema wilt baseren. U kunt de stijl altijd wijzigen bij het maken of bewerken van een thema. Als u wisselt van de ene stijl naar de andere, worden de thema-instellingen teruggezet naar de standaardwaarden. ",
		admin_theme_accent_color_label: "Accentkleur:",
		admin_theme_accent_color_hover: "Selecteer de kleur voor de balk bovenaan een dialoogvenster en voor het draaipictogram tijdens het laden. ",
		admin_theme_global_toolbar_text_color_label: "Tekstkleur algemene werkbalk:",
		admin_theme_global_toolbar_text_color_hover: "Als u de algemene werkbalk opneemt in de webclient, kunt u de kleur van de tekst in de werkbalk kiezen.",
		admin_theme_banner_text_color_hover: "Selecteer de kleur voor de tekst in de banner.",
		admin_theme_banner_icon_color_hover: "Selecteer de kleur voor de pictogrammen in de banner.",
		admin_theme_button_color_label: "Kleur:",
		admin_theme_button_color_hover: "Selecteer de kleur die moet worden gebruikt voor de volgende elementen:<ul><li>Titelbalken van dialoogvensters</li><li>De accentkleur aan de bovenkant van de geselecteerde tab</li><li>De pictogrammen in de view Contentlijst (Detailweergave, Tijdschriftweergave, Filmstrookweergave)</li><li>Knoppen, velden en links</li></ul>De kleur die wordt gebruikt als de muisaanwijzer boven een knop wordt gehouden, is van deze kleur afgeleid. Deze kleur wordt niet gebruikt voor de scheidingslijnen tussen de secties van de webclient. Als u de kleur van de scheidingslijnen wilt wijzigen, moet u een plugin met een aangepast CSS-bestand maken.",
		admin_theme_theme_style_col_header: "Themastijl",

		admin_syncserver_consistency_checker: "Consistency Checker:",
		admin_syncserver_consistency_checker_hover: "Voer de Consistency Checker uit om te controleren of de synchronisatieservice beschikt over actuele informatie over de status van elk item op de server. Voer de Consistency Checker bijvoorbeeld uit na een storing van de synchronisatieservice, zodat er informatie wordt verzameld over documenten die tijdens de storing zijn bijgewerkt in de repository.",
		admin_syncserver_consistency_checker_button: "Consistency Checker uitvoeren",
		admin_syncserver_consistency_checker_started: "Gestart:",
		admin_syncserver_consistency_checker_ended: "Beëindigd:",
		admin_syncserver_consistency_checker_duration: "Duur:",
		admin_syncserver_consistency_checker_items_processed: "Verwerkte synchronisatie-items:",
		admin_syncserver_consistency_checker_items_processed_success: "Met succes verwerkte synchronisatie-items:",
		admin_syncserver_consistency_checker_items_discovered: "Ontdekte nieuwe repository-items:",
		admin_syncserver_consistency_checker_change_updates: "Totaal aantal updates:",
		admin_syncserver_consistency_checker_state: "Status:",
		admin_syncserver_consistency_checker_state_done: "Klaar",
		admin_syncserver_consistency_checker_state_running: "Hardlopen",
		admin_syncserver_consistency_checker_user: "Aangeboden door:",
		admin_syncserver_consistency_checker_scheduled: "Gepland:",

		admin_syncserver_dbcleanup: "Database opschonen",
		admin_syncserver_dbcleanup_hover: "Voer de opschoontool van de database uit om alle ongebruikte apparaten en items die niet meer vanuit de database worden gesynchroniseerd te verwijderen. ",
		admin_syncserver_dbcleanup_button: "Database opschonen",
		admin_syncserver_dbcleanup_state_done: "Klaar",
		admin_syncserver_dbcleanup_state_running: "Hardlopen",
		admin_syncserver_dbcleanup_started: "Gestart:",
		admin_syncserver_dbcleanup_ended: "Beëindigd:",
		admin_syncserver_dbcleanup_state: "Status:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Verwijderde repository's:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Gewist gesynchroniseerd item:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Gewiste apparaten:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Vervallen apparaten:",

		admin_syncserver_publicSyncUrl: "Openbare URL van synchronisatieservices:",
		admin_syncserver_publicSyncUrl_hover: "Geef de URL op waarmee repository's kunnen communiceren met de synchronisatieservices van IBM Content Navigator. De standaardindeling van de URL is http://sync_public_URL:poortnummer/sync/notify.",

		admin_syncserver_managed: "Instellingen voor synchronisatieclient:",
		admin_syncserver_managed_hover: "Gebruikers kunnen deze instellingen niet wijzigen in de IBM Content Navigator Sync-client.",
		admin_syncserver_managed_subfolder: "Te synchroniseren mapniveaus",
		admin_syncserver_managed_subfolder_hover: "Als een gebruiker een map synchroniseert, geeft u het maximumaantal mappen op dat wordt gesynchroniseerd. Als de gebruiker bijvoorbeeld 3 mapniveaus opgeeft, wordt de map die de gebruiker synchroniseert en twee niveaus van submappen gesynchroniseerd.<br><br>Zorg ervoor dat uw omgeving zo wordt opgeschaald dat de hoeveelheid gesynchroniseerd verkeer wordt ondersteund die met deze instelling wordt gegenereerd.",
		admin_syncserver_managed_subfolder_all: "Alle submappen",
		admin_syncserver_managed_subfolder_none: "Geen submappen",
		admin_syncserver_managed_subfolder_no_more: "Beperkt aantal niveaus",
		admin_syncserver_managed_subfolder_levels: "Mappen",
		admin_syncserver_managed_schedule: "Synchronisatierooster",
		admin_syncserver_managed_schedule_hover: "Zorg ervoor dat uw omgeving zo wordt opgeschaald dat de hoeveelheid gesynchroniseerd verkeer wordt ondersteund die door het synchronisatierooster wordt gegenereerd.<br><br>Het maximuminterval is 24 uur oftewel 1440 minuten.<br><br>U kunt de synchronisatieplanning negeren door op <b>Nu Synchroniseren</b> te klikken.",
		admin_syncserver_managed_schedule_manual: "Handmatig synchroniseren",
		admin_syncserver_managed_schedule_continuous: "Doorlopend synchroniseren",
		admin_syncserver_managed_schedule_every: "Met vaste intervallen synchroniseren",
		admin_syncserver_managed_schedule_minutes: "Minuten",
		admin_syncserver_managed_schedule_hours: "Uur",

		// redaction codes
		admin_new_reason_code: "Nieuwe afschermingsreden",		
		admin_reason_code_name_invalid: "In de naam van de afschermingsreden mogen de volgende tekens niet voorkomen: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "De volgende tekens mogen niet voorkomen in de beschrijving: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "De volgende tekens mogen niet voorkomen in de beschrijving: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "De volgende tekens mogen niet voorkomen in de naam: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Beschrijving:",
		admin_reason_code_applications_hover: "De lijst van Datacap-toepassingen die verwijzen naar deze afschermingsreden.",
		admin_reason_code_applications: "Datacap-toepassingen",
		admin_delete_confirmation_reason_codes: "Wilt u de geselecteerde afschermingsredenen wissen?",
		admin_delete_confirmation_reason_code: "Wilt u de geselecteerde afschermingsreden wissen?",
		admin_reason_code_heading: "Afschermingsreden: <b>${0}</b>",
		admin_reason_code_list_instructions: "Afschermingsredenen geven aan waarom vertrouwelijke gegevens worden beschermd door ze te verbergen voor weergave. Elke reden geeft een type vertrouwelijke gegevens aan dat niet zichtbaar is voor algemene gebruikers.",
		admin_reason_code_instructions: "U kunt een afschermingsreden maken voor elk type vertrouwelijke gegevens. Vervolgens kunt u deze reden opnemen in een afschermingsbeleid om te definiëren wie deze gegevens kan zien en wie afschermingsdefinities kan maken of wijzigen.",
		admin_reason_code_applications_label: "Datacap-toepassingen",
		admin_reason_code_repositories: "Repository's",
		admin_reason_code_repositories_label: "Repository's",
		admin_reason_code_repositories_hover: "De lijst van ICN-repository's die verwijzen naar deze afschermingsreden.",
		admin_reason_code_repositories_default_value: "Niet ingesteld",
		admin_reason_code_description_label: "Beschrijving",
		admin_reason_code_applications_default_value: "Niet ingesteld",
		admin_redaction_reasons: "Afschermingsredenen",
		admin_redactions: "Afscherming op basis van rol",
		admin_redactions_policies_roles: "Beleidsdefinities en rollen",
		admin_reasons: "Redenen",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Het ID kan niet worden bewerkt. U kunt het kopiëren naar het klembord.",
		// Role based administration
		admin_rba: "Desktopbeheer op basis van rollen",
		admin_rba_mobile_access_enabled: "Deze desktop is geactiveerd voor mobiele toegang.",
		admin_rba_mobile_access_disabled: "Deze desktop is niet geactiveerd voor mobiele toegang.",
		admin_rba_confirm_delete_multiple: "Wilt u de geselecteerde beheerdersrollen wissen?",
		admin_rba_confirm_delete_single: "Wilt u de geselecteerde beheerdersrol wissen?",
		admin_rba_delete_multi_role_desktop: "Een of meer van de geselecteerde rollen is toegewezen aan een desktop. U moet rollen verwijderen uit de desktop voordat u ze kunt wissen.",
		admin_rba_delete_single_role_desktop: "De geselecteerde rol is toegewezen aan de desktop ${0}. U moet de rol verwijderen uit de desktop voordat u deze kunt wissen.",
		admin_desktop: "Desktop",
		admin_rba_instructions: "U kunt rollen voor desktopbeheer maken en beheren. Hiermee koppelt u bevoegdheden die aan beheerders van desktops verleend worden.",
		admin_rba_not_used: "${0} wordt niet gebruikt in desktops.",
		admin_rba_desktops: "<b>${0} wordt gebruikt in de volgende desktops:</b>",
		admin_rba_new_role: "Nieuwe rol",
		admin_rba_name_invalid: "De volgende tekens mogen niet voorkomen in de naam van de beheerdersrol: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "De volgende tekens mogen niet voorkomen in de beschrijving: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "De volgende tekens mogen niet voorkomen in de beschrijving: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "De volgende tekens mogen niet voorkomen in de naam: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Beschrijving:</b> ${0}",
		admin_rba_membership: "Lidmaatschap",
		admin_rba_general_priv: "Algemeen",
		admin_rba_appearance_priv: "Presentatie",
		admin_rba_desktop_config_priv: "Configuratie van desktop",
		admin_rba_app_name_priv: "Naam toepassing",
		admin_rba_theme_priv: "Thema",
		admin_rba_viewer_map_priv: "Viewer toewijzen",
		admin_rba_merge_split_priv: "Samenvoegen en splitsen",
		admin_rba_sync_svc_priv: "Synchronisatieservices",
		admin_rba_menus_priv: "Menu's",
		admin_rba_edit_svc_priv: "Bewerkingsservices",
		admin_rba_toolbars_priv: "Werkbalken",
		admin_rba_ctx_menus_priv: "Contextmenu's",
		admin_rba_office_ribbon_priv: "Opdrachten op lintwerkbalk van MS Office",
		admin_rba_office_menues_priv: "Contextmenu's van MS Office",
		admin_rba_addl_settings_priv: "Aanvullende instellingen",
		admin_rba_mobile_priv: "Mobiel",
		admin_rba_add_doc_dlg_priv: "Documentenvenster toevoegen",
		admin_rba_doc_mgmt_priv: "Documentbeheer",
		admin_rba_def_redaction_priv: "Standaard redactieoptie",
		admin_rba_add_photos_priv: "Foto's toevoegen via de camera en fotobibliotheek",
		admin_rba_time_stamp_priv: "Datum/tijd",
		admin_rba_add_docs_folders_priv: "Documenten toevoegen en mappen maken voor de repository",
		admin_rba_open_docs_priv: "Documenten openen in andere toepassingen",
		admin_rba_office_config_priv: "Office-configuratie",
		admin_rba_tab_label_priv: "Label voor IBM ECM-tab",
		admin_rba_feature_sel_priv: "Functies selecteren",
		admin_rba_general_config_priv: "Algemene configuratie",
		admin_rba_favorites_priv: "Favorieten",
		admin_rba_add_options_priv: "Opties voor Toevoegen in de groep Bewerken",
		admin_rba_browse_priv: "Bladeren",
		admin_rba_outlook_int_priv: "Outlook-integratie",
		admin_rba_search_priv: "Zoeken",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Zaak",
		admin_rba_desktop_feat_priv: "Desktopfuncties",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Afgebeelde functies",
		admin_rba_branding_priv: "Huisstijl",
		admin_rba_home_priv: "Home",
		admin_rba_main_color_priv: "Hoofdkleur",
		admin_rba_sec_color_priv: "Secundaire kleur",
		admin_rba_teamspaces_priv: "Teamruimtes",
		admin_rba_rbr_priv: "Afscherming op basis van rol",
		admin_rba_et_mgr_priv: "Beheer Invoersjablonen",
		admin_rba_policies_roles_priv: "Beleidsdefinities en rollen beheren",
		admin_rba_work_priv: "Werk",
		admin_rba_reasons_priv: "Oorzaakcodes",
		admin_rba_tasks_priv: "Asynchrone taken",
		admin_rba_auth_priv: "Verificatie",
		admin_rba_all_privs: "Alle bevoegdheden",
		admin_rba_some_privs: "Sommige bevoegdheden",
		admin_rba_no_privs: "Geen bevoegdheden",
		admin_add_users_groups_priv: "Gebruikers en groepen toevoegen",
		admin_url_features_priv: "URL-functies beheren",
		admin_plugin_features_priv: "Pluginfuncties beheren",
		admin_addl_components_priv: "Aanvullende componenten",
		admin_global_toolbar_priv: "Algemene werkbalk",
		admin_status_bar_priv: "Statusbalk",
		admin_refresh_message: "Vernieuw uw browser om te werken met de bijgewerkte gegevens.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Vernieuw uw browser om met de bijgewerkte standaarddesktop te werken.",
		admin_desktop_refresh_message: "Vernieuw uw browser om met de bijgewerkte desktop te werken.",
		admin_action_open: "Openen",
		admin_action_edit: "Bewerken",
		admin_action_copy: "Kopiëren",
		admin_action_delete: "Wissen",
		admin_action_copy: "Kopiëren",
		admin_action_new: "Nieuwe maken",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Dit ID is reeds in gebruik. U moet een uniek ID opgeven.",

		admin_searchable_properties_for: "Doorzoekbare eigenschappen voor:",
		admin_repository_new: "Nieuwe repository",
		admin_desktop_new: "Nieuwe desktop",
		admin_desktop_file_documents: "Van gebruikers vereisen dat ze nieuwe documenten en mappen opslaan in een map",
		admin_desktop_file_documents_hover: "Selecteer deze optie als u wilt dat gebruikers een map moeten selecteren bij het toevoegen van items aan de repository. Als u deze optie niet selecteert, kunnen gebruikers documenten (IBM FileNet P8) of documenten en mappen (IBM Content Manager) toevoegen zonder deze in een map op te slaan.",
		admin_desktop_show_security_tab: "Beveiligingsinstellingen afbeelden tijdens de acties toevoegen en inchecken",
		admin_desktop_show_security_hover: "<b>Alleen voor gebruikers van IBM FileNet P8.</b>  Selecteer deze optie als u wilt dat gebruikers de beveiliging van documenten en mappen kunnen bewerken wanneer ze items toevoegen aan of inchecken bij deze desktop.",
		admin_desktop_configure_security_inheritance: "Gebruikers toestaan de beveiligingsovername van mappen te configureren",
		admin_desktop_configure_security_inheritance_hover: "<b>Alleen voor gebruikers van IBM FileNet P8.</b>  Selecteer deze optie als u wilt dat gebruikers in staat zijn de toegang tot items in een map aan te passen door de beveiligingsovername van de mappen te bewerken. Als u deze optie selecteert, kunnen gebruikers opgeven of gebruikers of groepen de beveiliging kunnen overnemen van:<ul><li>Een map</li><li>Een map en de direct onderliggende mappen</li><li>Een map en alle onderliggende mappen</li></ul>",
		admin_desktop_appearance: "Presentatie",
		admin_desktop_appearance_instruction: "U kunt de presentatie van de desktop aanpassen door wijzigingen aan te brengen in de aanmeldingspagina en de banner die voor de desktop worden afgebeeld.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "Met de layout wordt opgegeven welke functies kunnen worden afgebeeld in de webclient en hoe de inhoud van de webclient wordt gerangschikt.<br><br><b>Tip:</b> U kunt aangepaste layouts definiëren door plugins te maken. U moet de plugin registreren in de beheerfunctie voordat u een aangepaste layout kunt selecteren.",
		admin_desktop_layout_default: "Standaard",
		admin_desktop_layout_custom: "Aangepast",
		admin_desktop_enable_workflow_email: "E-mailmeldingen voor FileNet P8-werkstroom inschakelen voor deze desktop",
		admin_desktop_enable_workflow_email_hover: "Alleen voor gebruikers van FileNet P8. Selecteer deze optie als u gebruikers in staat wilt stellen de webclient te openen vanuit URL's die zijn opgenomen in e-mailmeldingen die gegenereerd zijn door Process Engine.<br /><br />Als u deze optie voor geen enkele desktop inschakelt, kunnen gebruikers zich niet aanmelden bij de webclient met behulp van de URL's in meldingen.<br /><br />Als u deze optie inschakelt op meerdere desktops en meer dan één desktop voldoet aan de opgegeven criteria in de URL in de melding, gebruikt de webclient de eerste desktop die overeenkomt met de criteria.",
		admin_desktop_prevent_create_new_search: "Verhinderen dat gebruikers zoekopdrachten maken",
		admin_desktop_prevent_create_new_search_hover: "Met deze optie worden gebruikers beperkt tot gebruik van alleen bestaande zoekopdrachten en wordt voorkomen dat te algemene zoekopdrachten worden gemaakt die niet geoptimaliseerd zijn. </br></br>Deze instelling heeft geen impact op teamruimten. De machtiging voor het maken van zoekopdrachten in een teamruimte wordt bepaald door de rol die een gebruiker voor een bepaalde teamruimte heeft.",
		admin_desktop_prevent_create_new_unified_search: "Verhinderen dat gebruikers zoekopdrachten over meerdere repository's maken",
		admin_desktop_prevent_create_new_unified_search_hover: "Met deze optie worden gebruikers beperkt tot gebruik van alleen bestaande zoekopdrachten over meerdere repository's en wordt voorkomen dat te algemene zoekopdrachten over meerdere repository's worden gemaakt die niet geoptimaliseerd zijn.",
		admin_desktop_hide_entry_template_not_found_warning: "Verberg de waarschuwing die wordt afgebeeld wanneer de bijbehorende invoersjabloon niet is gevonden",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Selecteer deze optie als u het waarschuwingsbericht wilt laten verbergen, dat wordt afgebeeld wanneer itemeigenschappen zijn gewijzigd en de invoersjabloon behorend bij het item niet is gevonden.",
		admin_desktop_show_class_role_security_selection: "Gebruikers toestaan op rollen gebaseerde beveiliging in invoersjablonen te configureren",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Alleen voor gebruikers van IBM FileNet P8.</b> Selecteer deze optie als u wilt dat gebruikers invoersjablonen kunnen configureren voor het gebruik van op rollen gebaseerde beveiliging bij het instellen van beveiliging voor documenten en/of mappen met behulp van invoersjablonen. Als u deze optie selecteert,  kunnen editors van invoersjablonen opgeven of rolbeveiligingsobjecten toegepast worden op een invoersjabloondefinitie.",
		admin_desktop_show_primary_multi_part: "Alleen het primaire document in de viewer openen",
		admin_desktop_show_primary_multi_part_hover: "<b>Alleen voor gebruikers van IBM FileNet P8.</b> Selecteer deze optie als u alleen het primaire documentbestand in de viewer wilt openen. Aan documenten kunnen meerdere bestanden gekoppeld zijn. Met deze optie opent u alleen het primaire bestand dat aan het document gekoppeld is.",
		admin_desktop_redaction_save_mode: "Standaard redactieoptie:",
		admin_desktop_redaction_save_mode_hover: "Selecteer de standaard opslagmodus voor redactie in de ViewONE Virtual viewer:</br>* Gebruiker altijd vragen te kiezen: Hiermee wordt er bij het starten van de redactiemodus een venster afgebeeld waarin de gebruiker wordt gevraagd of het document moet worden ingecheckt als een nieuwe versie, of er een nieuw document moet worden gemaakt of dat er content moet worden gedownload.</br>* Inchecken als een nieuwe versie: Hiermee wordt de geredigeerde content altijd weer opgeslagen als een nieuwe versie van het bestaande document.</br>* Opslaan als een volkomen nieuw document: Hiermee wordt de geredigeerde content altijd weer opgeslagen als een volkomen nieuw document.</br>* Downloaden en opslaan op de client: Hiermee wordt de geredigeerde content gedownload naar het clientsysteem.",
		admin_desktop_redaction_save_mode_user_select: "Gebruiker altijd vragen te kiezen",
		admin_desktop_redaction_save_mode_new_version: "Inchecken als een nieuwe versie",
		admin_desktop_redaction_save_mode_new_document: "Opslaan als een volkomen nieuw document",
		admin_desktop_redaction_save_mode_local_content: "Downloaden en opslaan op de client",

		admin_desktop_document_add_mode: "Dialoogvenster Document toevoegen:",
		admin_desktop_document_add_mode_hover: "Geef het dialoogvenster voor toevoegen op dat u wilt gebruiken bij het toevoegen van documenten die gemaakt zijn door IBM Content Navigator:<ul><li>Nieuw permanent geredigeerd document</li><li>Nieuw samengevoegd en gesplitst document </li><li>Nieuw Microsoft Office-document</li><li>Nieuw document voor Edit-service</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Document toevoegen",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Document toevoegen met een invoersjabloon",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Samenvoegen en splitsen:",
		admin_desktop_merge_and_split_enable_hover: "Geef op of u het voor gebruikers die deze desktop openen, mogelijk wilt maken om hun documenten samen te voegen en te splitsen met behulp van een ondersteunde viewer.",

		admin_desktop_merge_and_split_show_checkin: "Gebruikers vragen om waarden voor eigenschappen op te geven als ze wijzigingen in een document inchecken.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Als u deze optie selecteert, wordt het incheckvenster afgebeeld wanneer gebruikers wijzigingen van een document inchecken in de modus Samenvoegen en splitsen.",

		admin_desktop_available_categories: "Beschikbare functies",
		admin_desktop_selected_categories: "Geselecteerde functies",

		admin_layout_banner_title: "Banner en aanmeldingspagina",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Toepassingsnaam:",
		admin_desktop_application_name_hover: "Geef de toepassingsnaam op die u wilt afbeelden in de banner.<br><br>Tip: Definieer de toepassingsnaam voor andere talen op het tabblad Labels / Desktoplabels.",
		admin_desktop_theme: "Thema:",
		admin_desktop_theme_hover: "Geef op of voor deze desktop het standaardthema van IBM Content Navigator moet worden gebruikt, of een aangepast thema. Bij gebruik van een aangepast thema moet u een thema maken in het gedeelte <b>Thema's</b> van het beheertool.",
		admin_desktop_login_logo: "Logo op aanmeldingspagina:",
		admin_desktop_login_logo_hover: "Als u het logo wilt veranderen dat op de aanmeldingspagina wordt afgebeeld, kunt u de URL van een logobestand opgeven. U wordt echter aangeraden om een aangepast thema te gebruiken en daarin het logo te wijzigen.",
		admin_desktop_login_logo_url_hover: "Geef de URL van het logobestand op. Als het logo zich op dezelfde webtoepassingenserver bevindt als de webclient, geeft u een relatieve URL op, bijvoorbeeld: /mycustomizations/login_logo.png<br><br>Het logo mag niet groter zijn dan 200 pixels breed en 150 pixels hoog.<br><br>Het wordt aanbevolen een logo met transparante achtergrond te gebruiken.",
		admin_desktop_banner_logo: "Bannerlogo:",
		admin_desktop_banner_logo_hover: "Als u het logo wilt veranderen dat op de banner wordt afgebeeld, kunt u de URL van een logobestand opgeven. U wordt echter aangeraden om een aangepast thema te gebruiken en daarin het logo te wijzigen.",
		admin_desktop_banner_logo_url_hover: "Geef de URL van het logobestand op. Als het logo zich op dezelfde webtoepassingenserver bevindt als de webclient, geeft u een relatieve URL op, bijvoorbeeld: /mycustomizations/banner_logo.png<br><br>Het logo mag niet groter zijn dan 72 pixels breed en 36 pixels hoog.<br><br>Het wordt aanbevolen een logo met transparante achtergrond te gebruiken.",
		admin_desktop_banner_background_color: "Achtergrondkleur van banner:",
		admin_desktop_banner_background_color_hover: "Als u de achtergrondkleur van de banner wilt veranderen, kunt u een aangepaste kleur opgeven. U wordt echter aangeraden om een aangepast thema te gebruiken en daarin de kleur van de banner te wijzigen.",
		admin_desktop_banner_background_color_custom_hover: "Geef de kleur van de toepassingsbanner op als hexadecimale kleur.",
		admin_desktop_banner_application_name_color: "Tekstkleur van toepassingsnaam:",
		admin_desktop_banner_application_name_color_hover: "Als u de kleur van de toepassingsnaam wilt veranderen, kunt u een aangepaste kleur opgeven. U wordt echter aangeraden om een aangepast thema te gebruiken en daarin de kleur van de toepassingsnaam te wijzigen.",
		admin_desktop_banner_application_name_color_custom_hover: "Geef de kleur van de toepassingsnaam op als hexadecimale kleur.",
		admin_desktop_banner_menu_color: "Kleur van bannerpictogrammen:",
		admin_desktop_banner_menu_color_hover: "Als u de achtergrondkleur van de banner wijzigt, kan het ook nodig zijn om het kleurenschema van de pictogrammen in de banner te wijzigen, omdat ze anders niet goed zichtbaar zijn. Geef op of u de lichte of de donkere versie van de bannerpictogrammen wilt gebruiken.<br><br>U wordt echter aangeraden om een aangepast thema te gebruiken en daarin de kleur van de pictogrammen te wijzigen.",
		admin_desktop_login_page_content: "Inhoud van aanmeldingspagina:",
		admin_desktop_login_page_content_hover: "Als u extra informatie wilt laten afbeelden op de aanmeldingspagina, bijvoorbeeld aankondigingen over systeemonderhoud of waar gebruikers hulp kunnen krijgen voor gebruikersnamen en wachtwoorden, kunt u de URL opgeven van de content die moet worden afgebeeld.",
		admin_desktop_login_page_content_url_hover: "Geef de URL van de content op de aanmeldingspagina op. Als de content zich op dezelfde webtoepassingenserver bevindt als de webclient, geeft u een relatieve URL op, bijvoorbeeld: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Regels voor wachtwoorden:",
		admin_desktop_password_rules_hover: "Als u gebruikers richtlijnen wilt geven voor het maken van wachtwoorden, bijvoorbeeld voor de te gebruiken tekens of het minimumaantal tekens, kunt u de URL opgeven van een pagina met de regels voor wachtwoorden.",
		admin_desktop_password_rules_url_hover: "Geef de URL van de pagina met regels voor wachtwoorden op. Als de content zich op dezelfde webtoepassingenserver bevindt als de webclient, geeft u een relatieve URL op, bijvoorbeeld: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL van Help voor eindgebruikers:",
		admin_desktop_help_url_hover: "U kunt de Help gebruiken die bij IBM Content Navigator wordt geleverd, of u kunt gebruikers met een van de volgende acties doorsturen naar aangepaste Help-content:<br><br><ul><li>Doorsturen naar een aangepast Help-systeem</li><li>Help toevoegen aan de instance van IBM Knowledge Center die bij IBM Content Navigator geïmplementeerd is.</li></ul>",
		admin_desktop_help_url_url_hover: "Geef de URL van uw aangepaste Help-systeem op. IBM Content Navigator voegt index.jsp?content=/com.ibm.usingeuc.doc/ en een bestandsnaam toe aan het einde van de URL die u opgeeft. Als u wilt dat links van het type \"Meer informatie\" in de interface werken, moet het Help-systeem dezelfde bestandsnamen gebruiken als die van de geïntegreerde Help voor eindgebruikers. ",
		admin_desktop_deprecated_appearance_title: "Gedeprecieerde instellingen",
		admin_desktop_deprecated_appearance_instructions: "Als u een eigen thema gebruikt, vervangt dit deze instellingen. Migreer deze instellingen naar het eigen thema dat meer gedetailleerde stijlwaarden bevat dan de instellingen in deze sectie. Een eigen thema kan ook door meerdere desktops worden gebruikt.",

		admin_desktop_plugins_title: "Plugins voor deze desktop in- of uitschakelen",
		admin_desktop_plugins_enable_all_plugins: "Alle geïmplementeerde plugins inschakelen voor gebruik met deze desktop",
		admin_desktop_plugins_select_plugins: "De geïmplementeerde plugins selecteren die worden ingeschakeld voor gebruik met deze desktop",
		admin_desktop_plugins_select_plugin: "Plugin selecteren",

		admin_desktop_layout_features: "Afgebeelde functies:",
		admin_desktop_layout_features_hover: "Selecteer de functies waarvan u wilt dat gebruikers er vanaf deze desktop toegang toe hebben. De functies worden afgebeeld in de volgorde van de lijst.<br><br>Als u een functie selecteert, kunt u bepaalde gedragskenmerken van die functie binnen de desktop aanpassen, zoals de standaardrepository die voor de functie is geselecteerd.",
		admin_desktop_layout_default_repository: "Standaardrepository:",
		admin_desktop_layout_default_repository_layout_hover: "Opgeven welke repository standaard geselecteerd is wanneer gebruikers deze functie openen.",
		admin_desktop_layout_document_thumbnails: "Miniaturen voor documenten:",
		admin_desktop_layout_document_thumbnails_hover: "Geef op of er miniaturen moeten worden afgebeeld voor documenten in het scherm Documentinformatie. <br><br>Als miniaturen worden afgebeeld, kunnen de prestaties van de webclient trager worden.",
		admin_desktop_layout_show_filmstrip_view: "Filmstrookweergave:",
		admin_desktop_layout_show_filmstrip_view_hover: "Geef op of u gebruikers toestemming wilt geven om de contentlijst op te roepen in de vorm van een filmstrook.<br><br>Met de weergave als filmstrook wordt er een preview gegenereerd van elk document dat een gebruiker selecteert. De filmstrookweergave kan echter negatieve gevolgen hebben voor de performance van de webclient. Bovendien kunnen er alleen documentpreviews worden afgebeeld als de HTML-conversieviewer geconfigureerd is. ",
		admin_enabled: "Inschakelen",
		admin_disabled: "Uitschakelen",
		admin_include: "Opnemen",
		admin_exclude: "Uitsluiten",
		admin_layout_teamspaces_default_repository: "Teamruimten:",
		admin_layout_entry_templates_default_repository: "Invoersjablonen:",
		admin_layout_other_features_default_repository: "Zoeken en bladeren:",
		admin_layout_work_default_repository: "Werk:",
		admin_layout_default_feature: "Standaardfunctie:",
		admin_default_category_placeholder: "Selecteer een functie",
		admin_layout_default_feature_hover: "Geef op welke functie er wordt afgebeeld als gebruikers zich aanmelden bij deze desktop.",
		admin_layout_default_feature_warning: "Als u de standaardfunctie wijzigt, kan dit van invloed zijn op de tijd voor het laden van de toepassing.",
		admin_layout_feature_list_header: "Functie",
		admin_layout_show_statusbar: "Statusbalk:",
		admin_layout_show_statusbar_hover: "Geef aan of de statusbalk aan de onderkant van de desktop moet worden afgebeeld.<br><br>Als u de statusbalk verbergt, krijgen de gebruikers wel informatie over fouten te zien, maar geen berichten zoals:<ul><li>Het document is toegevoegd aan de huidige repository.</li><li>De zoekopdracht heeft 59 documenten opgeleverd.</li></ul>",
		admin_layout_show_magazineview: "Magazijnweergave:",
		admin_layout_show_magazineview_hover: "Hiermee geeft u aan dat gebruikers de weergave van de contentlijst in een magazijnweergave kunnen bekijken.<br><br>In de magazijnweergave is elke vermelding in de contentlijst hoger, waardoor er minder items tegelijk kunnen worden afgebeeld in de contentlijst.",
		admin_layout_show_detailsview: "Details:",
		admin_layout_show_detailsview_hover: "Hiermee geeft u aan dat gebruikers de weergave van de contentlijst in een detailweergave kunnen bekijken.<br><br>De view Details maximaliseert het aantal rijen dat zichtbaar is in de contentlijst.",
		admin_feature_config_docinfopane_label: "Deelvenster Documentinformatie",
		admin_feature_config_docinfopane_hoverhelp: "Geef op of de gebruikers toegang krijgen tot het deelvenster Documentinformatie in deze functie.",
		admin_feature_config_docinfopane_default_label: "Standaardgedrag:",
		admin_feature_config_docinfopane_expanded: "Uitgevouwen",
		admin_feature_config_docinfopane_collapsed: "Samengevouwen",
		admin_feature_config_docinfopane_expand_on_select: "Uitvouwen wanneer item wordt geselecteerd",
		admin_layout_features_title: "Desktopfuncties",
		admin_layout_features_instructions: "Geef op tot welke functies de gebruikers toegang hebben vanuit deze desktop. Bovendien kunt u wijzigingen doorvoeren in het gedrag van elke functie die in de desktop wordt opgenomen.",
		admin_layout_components_title: "Aanvullende desktopcomponenten",
		admin_layout_components_instructions: "Bepaalde componenten van de desktop kunt u uitschakelen. Dit is van belang als u een meer gestroomlijnde interface wenst of als u de performance van de webclient wilt verbeteren.",
		admin_layout_featureconfig_instructions: "Selecteer een functie die u wilt configureren",
		admin_layout_featureconfig_no_configuration: "Geen functieconfiguratie beschikbaar.",
		admin_layout_featureconfig_label: "Configuratie voor functie ${0}",
		admin_layout_featureconfig_title: "Functieconfiguratie",
		admin_layout_featureconfig_taskManagerURL: "Om deze functie te kunnen gebruiken, moet u IBM Content Navigator inschakelen en zodanig configureren dat er verbinding wordt gemaakt met de service Taakbeheer. Schakel de service Taakbeheer in het gedeelte <b>Instellingen</b> van dit beheertool in.",
		admin_feature_config_show_my_checkouts_label: "Venster Mijn uitcheckbewerkingen",
		admin_feature_config_show_my_checkouts_hoverhelp: "In het deelvenster Mijn uitcheckbewerkingen kunnen gebruikers een zoekopdracht uitvoeren naar alle items die ze bij een bepaalde repository hebben uitgecheckt. Geef op of de gebruikers toegang krijgen tot het deelvenster Mijn uitcheckbewerkingen vanuit de Home-functie.<br/><br/><b>Beperking:</b> Voor deze functie moet er ten minste één repository van IBM Content Manager, IBM FileNet P8 of OASIS CMIS aan deze desktop gekoppeld zijn.",

		admin_feature_config_default_repository_icon_text: "Standaardrepository",
		admin_show: "Weergeven",
		admin_hide: "Verbergen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "U kunt de functie Beheer niet verwijderen uit de desktop Beheerder",
		admin_warning_label: "Waarschuwing:",
		admin_layout_show_globaltoolbar: "Algemene werkbalk:",
		admin_layout_show_globaltoolbar_hover: "Geef aan of de werkbalk aan de bovenkant van de desktop moet worden afgebeeld.<br><br>Deze werkbalk bevat de acties waarmee de gebruiker documenten, mappen en aanhoudingen kan toevoegen aan de repository. Welke acties er beschikbaar zijn, hangt af van de repository waarmee de gebruiker verbonden is.",
		admin_interface_text_name_label: "Type label",

		admin_interface_text_label_description: "U kunt de tekst die in bepaalde gebieden van de webclient wordt afgebeeld, aanpassen. De labels worden afgebeeld voor alle repository's en werkplekken in uw configuratie. Geef in het veld Huidig label de tekst op die u in de interface wilt laten afbeelden.<br><br><b>Belangrijk:</b> Wijzigingen die u aanbrengt in de labels worden niet afgebeeld in de beheerfunctie.",
		admin_interface_text_label_action: "Actielabels",
		admin_interface_text_label_action_description: "Actielabels worden afgebeeld in de hele webclient op knoppen en in menu's. U kunt voor elk type repository verschillende actielabels definiëren.",
		admin_interface_text_label_application: "Toepassingslabels",
		admin_interface_text_label_application_description: "Toepassingslabels worden afgebeeld in de webclient.",
		admin_interface_text_label_system: "Systeemeigenschaplabels",
		admin_interface_text_label_system_description: "De systeemeigenschappen die worden afgebeeld, verschillen per repository. U kunt de labels aanpassen die worden afgebeeld voor de systeemeigenschappen die aan de documenten en mappen in uw repository's zijn gekoppeld.",
		admin_interface_text_label_desktop: "Desktoplabels",
		admin_interface_text_label_desktop_description: "Als u de naam van de toepassing in een werkplek hebt aangepast, kunt u de naam aanpassen in andere talen dan Engels. U kunt ook de namen van de IBM FileNet P8-toepassingsruimten aanpassen in een werkplek.",

		admin_interface_text_system_label: "Systeemlabel",
		admin_interface_text_current_label: "Huidig label",
		admin_interface_text_default_label_heading: "Standaardlabel",
		admin_interface_text_default_label: "Standaardlabel:",
		admin_interface_text_displayed_in_label: "Afgebeeld voor",
		admin_interface_text_displayed_in_document_folder: "Documenten en mappen",
		admin_interface_text_displayed_in_document: "Documenten",
		admin_interface_text_displayed_in_folder: "Mappen",
		admin_interface_text_displayed_in_admin_application_space: "Label toepassingsruimte",
		admin_interface_text_displayed_in_desktop: "Functielabel voor mobiel",
		admin_interface_text_displayed_in_admin_application_name: "Naam toepassing",

		admin_new_desktop: "Nieuwe desktop",
		admin_new_repository: "Nieuwe repository",
		admin_new_menu: "Nieuw menu",
		admin_new_viewer_mapping: "Nieuwe viewertoewijzing",
		admin_new_mapping_label: "Nieuwe toewijzing",
		admin_new_icon_mapping: "Nieuwe pictogramtoewijzing",
		admin_viewer_mapping_list_instructions: "U kunt configureren welke viewers de webclient gebruikt om verschillende inhoudstypen af te beelden. Met een viewer-toewijzing wordt gedefinieerd welke MIME-typen worden gekoppeld aan elke viewer die u wilt gebruiken. U kunt viewer-toewijzingen maken als u verschillende viewers wilt gebruiken voor verschillende werkplekken.",
		admin_viewer_mapping_instructions: "Geef op welke viewers u wilt gebruiken om bestanden te openen. Als u een aangepaste viewer wilt gebruiken, moet u de viewer integreren als plugin voordat u hem kunt toevoegen aan de viewer-toewijzing.<br><br><b>Belangrijk:</b> Als een gebruiker een document opent, zoekt de webclient in de lijst van viewertoewijzingen naar de eerste viewer die het document kan openen op basis van het besturingssysteem dat de gebruiker heeft en de repository waarmee de gebruiker verbonden is. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nieuwe plugin",
		admin_menu_list_instructions: "U kunt aangepaste werkbalken en contextmenu's maken om te beheren welke acties beschikbaar zijn voor gebruikers. U kunt de standaardmenu's niet bewerken, maar u kunt kopieën maken van bestaande menu's om de acties te beperken die beschikbaar zijn of om aangepaste acties toe te voegen die zijn gedefinieerd in plugins.<br><br>Als u een nieuw type menu wilt maken, moet u het menu in een plugin definiëren.",
		admin_menu_id_hover: "Het ID moet uniek zijn, en u kunt het ID niet wijzigen nadat u het menu hebt opgeslagen.<br><br>Het ID is hoofdlettergevoelig en mag alleen alfanumerieke tekens bevatten.",
		admin_menu_id_disabled_hover: "Het menu-ID kan niet worden gewijzigd. Als u een ander ID wilt gebruiken, moet u een nieuw menu maken.",
		admin_menu_default_instructions: "U kunt dit menu niet bewerken omdat het een standaardmenu is. Als u dit menu wilt bewerken, moet u een kopie maken van het menu.",
		admin_menu_toolbar_instructions: "U kunt de acties beperken die beschikbaar zijn voor deze werkbalk, of u kunt aangepaste acties toevoegen die zijn gedefinieerd in een plugin. U kunt ook de acties organiseren door scheidingstekens toe te voegen aan de werkbalk.",
		admin_menu_toolbar_custom_instructions: "Deze werkbalk wordt gedefinieerd door een plugin. Als u deze werkbalk wilt bewerken, moet u de plugin bijwerken om een kopie te maken van de werkbalk.",
		admin_menu_context_menu_instructions: "U kunt de acties beperken die beschikbaar zijn voor dit contextmenu, of u kunt aangepaste acties toevoegen die zijn gedefinieerd in een plugin. U kunt ook de acties organiseren door scheidingstekens en submenu's toe te voegen aan het contextmenu.",
		admin_menu_context_menu_custom_instructions: "Dit contextmenu wordt gedefinieerd door een plugin. Als u dit contextmenu wilt bewerken, moet u de plugin bijwerken om een kopie te maken van het contextmenu.",
		admin_desktop_list_instructions: "U kunt meerdere werkplekken maken om verschillende gebruikers toegang te geven tot de context die ze nodig hebben. U kunt bijvoorbeeld een werkplek maken waarmee gebruikers alleen mogen zoeken naar content of een werkplek waarmee gebruikers toegang krijgen tot een enkele repository. ",
		admin_plugin_updated: "De configuratie van de geselecteerde plugin is gewijzigd. Start de browser opnieuw op om de wijzigingen van kracht te laten worden.",
		admin_repository_ci_heading: "Content Integrator-repository: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager-repository: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager-repository: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand-repository: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS-repository (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Box-repository: <b>${0}</b>",
		admin_repository_generic_heading: "Repository: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Wilt u de geselecteerde desktops wissen?\nEr zijn ${0}  desktops geselecteerd.",
		admin_delete_confirmation_menus: "Wilt u de geselecteerde menu's wissen?\nEr zijn ${0}  menu's geselecteerd.",
		admin_delete_confirmation_repositories: "Wilt u de geselecteerde repository's wissen?\nEr zijn ${0}  repository's geselecteerd.",
		admin_delete_confirmation_viewer_mappings: "Wilt u de geselecteerde viewertoewijzingen wissen? Er zijn ${0} toewijzingen geselecteerd.",
		admin_delete_confirmation_icon_mappings: "Wilt u de geselecteerde pictogramconfiguraties wissen?\nEr zijn ${0} pictogramconfiguraties geselecteerd.",
		admin_delete_confirmation_plugins: "Wilt u de geselecteerde plugins wissen?\nEr zijn ${0}  plugins geselecteerd.",
		admin_delete_confirmation: "Wilt u de geselecteerde items wissen?\nEr zijn ${0} items geselecteerd.",

		admin_viewer_mapping_id_hover: "Het ID moet uniek zijn, en u kunt het ID niet wijzigen nadat u de viewertoewijzing hebt opgeslagen.<br><br>Het ID is hoofdlettergevoelig en mag alleen alfanumerieke tekens bevatten.",
		admin_viewer_mapping_id_disabled_hover: "Het viewertoewijzings-ID kan niet worden gewijzigd. Als u een ander ID wilt gebruiken, moet u een nieuwe viewertoewijzing maken.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "De standaarddesktop kan niet worden gewist.",

		admin_desktop_heading: "Desktop: <b>${0}</b>",
		admin_menu_toolbar_heading: "Werkbalk: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Aangepaste werkbalk: <b>${0}</b>",
		admin_menu_context_menu_heading: "Contextmenu: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Aangepast contextmenu: <b>${0}</b>",
		admin_plugin_heading: "Plugin: <b>${0}</b>",
		admin_plugin_instructions: "Een plugin kan een JAR-bestand zijn of een gecompileerd klassenbestand.<br/><br/><b>Belangrijk:</b> De webtoepassingenserver van IBM Content Navigator moet in staat zijn het pluginbestand in het lokale bestandssysteem of via een URL te openen.",
		admin_plugin_list_instructions: "U moet de beheerfunctie gebruiken voor het registreren van plugins voor de webclient. Als er voor een plugin aanvullende configuratie benodigd is, worden de configuratieparameters afgebeeld nadat u de plugin hebt geregistreerd. <br /><br /><b>Belangrijk:</b> Als u een plugin bewerkt waarnaar wordt verwezen in een ander gebied van de beheerfunctie, zoals een menu, kunt u problemen aantreffen met het gedrag van de plugin. Daarnaast worden de plugins opgeroepen in de volgorde waarin ze worden afgebeeld. Wanneer een plugin moet worden uitgevoerd vóór  een andere plugin, zorg er dan voor dat de plugins worden afgebeeld in de volgorde waarin ze moet worden uitgevoerd.",
		admin_plugin_cannot_delete: "De geselecteerde plugins kunnen niet worden gewist omdat bepaalde plugins ervan afhankelijk zijn. <br/>Geselecteerde plugins: ${0}<br/>Afhankelijke plugins: ${1}",
		admin_plugin_cannot_disable: "De geselecteerde plugins kunnen niet worden uitgeschakeld omdat bepaalde plugins ervan afhankelijk zijn.<br/>Geselecteerde plugins: ${0}<br/>Afhankelijke plugins: ${1}",
		admin_plugin_cannot_add: "De plugin kan niet worden toegevoegd omdat bepaalde plugins waarvan deze afhankelijk is, ontbreken of zijn uitgeschakeld. Ontbrekende of uitgeschakelde plugins: ${0}",
		admin_plugin_cannot_enable: "De geselecteerde plugins kunnen niet worden ingeschakeld omdat bepaalde plugins waarvan deze afhankelijk zijn, ontbreken of zijn uitgeschakeld.<br/>Geselecteerde plugins: ${0}<br/>Ontbrekende of uitgeschakelde plugins: ${1}",
		admin_plugin_save_order: "Opslagvolgorde",
		admin_plugin_load: "Laden",
		admin_plugin_load_hover: "Geef de URL van de plugin op",
		admin_plugin_file_hover: "Als het JAR-bestand van de plugin zich op uw lokale bestandssysteem bevindt, kunt u het volledige pad of de URL van het pluginbestand invoeren. Als het JAR-bestand van de plugin zich op een server op afstand bevindt, moet u de URL van het pluginbestand invoeren.",
		admin_plugin_classfolderpath_hover: "Het gecompileerde klassenbestand moet zich op de webtoepassingenserver van IBM Content Navigator bevinden.<br/><br/>Geef het volledige pad op van de map waarin de pluginklassen worden gecompileerd en gegenereerd.<br/><br/>Het pad mag niet de pakketnaam van de pluginklasse bevatten. Het standaardpad voor de voorbeeldpluginklasse onder Windows is bijvoorbeeld C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Geef de volledige naam op van de Java-klasse binnen het klassenbestand die moet worden geladen en aangeroepen als de pluginklasse.<br/>De klassennaam voor de voorbeeldplugin is bijvoorbeeld com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Het JAR-bestand van de plugin is niet gevonden op de opgegeven URL. Zorg ervoor dat het JAR-bestand zich op de webtoepassingenserver bevindt en dat de URL en de bestandsnaam juist zijn.",
		admin_plugin_for_repository_not_loaded: "U kunt deze repository niet bewerken. De plugin waarmee dit type repository wordt gedefinieerd en ondersteund, is niet geladen. Ga naar het tabblad Plugins en open de plugin om te controleren of deze correct geconfigureerd is en wordt geladen.",
		admin_plugin_repository_types: "Repositorytypen:",
		admin_plugin_viewers: "Viewers:",
		admin_plugin_features: "Functies:",
		admin_plugin_layouts: "Layouts:",
		admin_plugin_not_available: "Niet beschikbaar",
		admin_plugin_config_params: "Configuratieparameters:",
		admin_viewer_def_heading: "Viewertoewijzing: <b>${0}</b>",
		admin_users_and_groups: "Gebruikers en groepen",
		admin_general: "Algemeen",
		admin_logging: "Logboekregistratie",
		admin_authentication: "Verificatie",		
		admin_rolebase_role: "Rol:",
		admin_settings_logging_instructions: "U kunt logboekregistratie gebruiken om problemen met de webclient op te lossen. U kunt uw logboekregistratie verfijnen als u weet dat een probleem optreedt binnen een bepaalde Java-klasse of voor een bepaalde gebruiker. De gegevens over de fout zijn bijgeschreven in de foutenlogbestanden van uw webtoepassingenserver.",
		admin_settings_logging_instructions2: "<b>Logboekregistratie voor debugging instellen</b><br />Als u weet dat er een probleem optreedt voor een bepaalde client-hostcomputer of gebruiker, kunt u de logboekregistratie voor debugging richten op die machine of gebruiker. In een productieomgeving kunt u debug-informatie vastleggen zonder dat dat grote gevolgen heeft voor de performance van uw systeem.<br /><br /><b>Belangrijk:</b> Als u een client-hostcomputer of gebruiker opgeeft, gaat deze instelling vóór alle andere instellingen voor logboekregistratie. Nadat u de gewenste informatie hebt vastgelegd, stelt u deze optie weer in op <b>Geen</b>, zodat de standaard logboekregistratie voor uw omgeving weer wordt hervat.",
		admin_settings_export_config_hover: "De huidige systeemconfiguratie exporteren naar een bestand dat kan worden gebruikt met IBM Support Assistant Data Collector. Het bestand wordt opgeslagen op de locatie die is opgegeven met de Java-systeemeigenschap user.home.",
		admin_logging_level: "Logboekregistratie op toepassingsniveau:",
		admin_logging_level_hover: "Logboekniveaus beïnvloeden hoeveel informatie wordt opgeslagen op uw server. Als u <b>Fout</b> selecteert, wordt de kleinste hoeveelheid logboekgegevens vastgelegd. Als u <b>Fouten opsporen</b> selecteert, wordt de meeste informatie vastgelegd.<br /><br />Geef <b>Fouten opsporen</b> niet op in een productieomgeving tenzij u een instructie krijgt van IBM Software Support om dit te doen.",
		admin_logging_level_0: "Geen logboekregistratie",
		admin_logging_level_1: "Fout",
		admin_logging_level_2: "Waarschuwing",
		admin_logging_level_3: "Informatie",
		admin_logging_level_4: "Foutopsporing",
		admin_logging_classes: "Logboekregistratie op Java-klasseniveau:",
		admin_logging_classes_hover: "Standaard worden alle Java-klassen en -pakketten opgenomen in de foutenlogboeken van de webtoepassingenserver. U kunt echter ook opgeven welke klassen of pakketten er moeten opgenomen in, of uitgesloten van, logboekregistratie. Aan de hand van de foutenlogboeken van de webtoepassingenserver kunt u bepalen welke klassen u wilt opnemen of uitsluiten.<br><br>Als u weet dat er in een bepaalde klasse een probleem optreedt, kunt u die klasse specifiek opnemen in de logbestanden. Als u een klasse opneemt in uw foutenlogboeken, worden alle andere klassen uitgesloten van het foutenlogboek.<br><br>Als u weet dat er in een bepaalde klasse geen problemen voorkomen en u wilt de grootte van het logbestand beperken, kunt u de klasse uitsluiten van de logbestanden.",
		admin_logging_classes_include: "Opnemen",
		admin_logging_classes_include_all: "Alle klassen",
		admin_logging_classes_include_specified: "Bepaalde klassen",
		admin_logging_classes_include_specified_msg: "Geef op welke klassen moeten worden opgenomen.",
		admin_logging_classes_exclude: "Uitsluiten",
		admin_logging_classes_exclude_none: "Geen",
		admin_logging_classes_exclude_specified: "Bepaalde klassen",
		admin_logging_classes_exclude_specified_msg: "Geef op welke klassen moeten worden uitgesloten.",
		admin_logging_debug: "Logboekregistratie van foutopsporing voor:",
		admin_logging_debug_hover: "<b>Belangrijk:</b> Bekijk de logbestanden van de webtoepassingenserver voordat u het IP-adres of de gebruiker van de client-hostcomputer opgeeft. De waarde die u opgeeft, moet overeenkomen met de waarde die wordt afgebeeld in het logbestand.",
		admin_logging_debug_none: "Geen (standaard)",
		admin_logging_debug_host: "Client-hostcomputers (IP-adressen)",
		admin_logging_debug_host_msg: "Geef het IP-adres op van een of meer clientcomputers waarvoor u foutopsporingsgegevens wilt vastleggen. Gebruik een komma om IP-adressen te scheiden.<br /><br /><b>Belangrijk:</b> Bekijk de logbestanden van de webtoepassingenserver voordat u een IP-adres opgeeft. De waarde die u opgeeft, moet overeenkomen met de waarde die wordt afgebeeld in het logbestand.",
		admin_logging_debug_user: "Gebruikers",
		admin_logging_debug_user_msg: "Geef de gebruikersnaam op van een of meer gebruikers waarvoor u foutopsporingsgegevens wilt vastleggen. Gebruik een komma om gebruikersnamen te scheiden.<br /><br /><b>Belangrijk:</b> Bekijk de logbestanden van de webtoepassingenserver voordat u een gebruikersnaam opgeeft. De waarde die u opgeeft, moet overeenkomen met de waarde die wordt afgebeeld in het logbestand.",

		admin_office_settings_logging_instructions: "U kunt logboekregistratie gebruiken om problemen met IBM Content Navigator for Microsoft Office op te lossen. U kunt uw logboekregistratie verfijnen als u weet dat een probleem optreedt binnen een bepaalde klasse of voor een bepaalde gebruiker. De gegevens over de fout worden weggeschreven in de toepassingslogbestanden op de client-hostmachines van IBM Content Navigator for Microsoft Office.",
		admin_office_settings_logging_instructions2: "<b>Logboekregistratie voor debugging instellen</b><br />Als u weet dat er een probleem optreedt voor een bepaalde client-hostcomputer of een gebruiker van IBM Content Navigator for Microsoft Office, kunt u de logboekregistratie voor debugging richten op die computer of gebruiker. In een productieomgeving kunt u debug-informatie vastleggen zonder dat dat grote gevolgen heeft voor de performance van uw systeem.<br /><br /><b>Belangrijk:</b> Als u een client-hostcomputer of gebruiker opgeeft, gaat deze instelling vóór alle andere instellingen voor logboekregistratie. Nadat u de gewenste informatie hebt vastgelegd, stelt u deze optie weer in op <b>Geen</b>, zodat de standaard logboekregistratie voor uw IBM Content Navigator for Microsoft Office-omgeving weer wordt hervat.",
		admin_office_logging_debug_hover: "<b>Belangrijk:</b> Bekijk de logbestanden van de clientcomputer voordat u het IP-adres of de gebruiker van de client-hostcomputer opgeeft. De waarde die u opgeeft, moet overeenkomen met de waarde die wordt afgebeeld in het logbestand.",
		admin_office_logging: "Logboekregistratie voor Office",
		admin_office_logging_classes: "Logboekregistratie op klasseniveau:",
		admin_office_logging_classes_hover: "Standaard worden alle klassen en pakketten opgenomen in de foutenlogboeken van IBM Content Navigator for Microsoft Office. U kunt echter ook opgeven welke klassen of pakketten er moeten opgenomen in, of uitgesloten van, logboekregistratie. Aan de hand van de logboeken van de clientcomputer kunt u bepalen welke klassen u wilt opnemen of uitsluiten.<br /><br />Als u weet dat er in een bepaalde klasse een probleem optreedt, kunt u die klasse specifiek opnemen in de logbestanden. Als u een klasse opneemt in uw foutenlogboeken, worden alle andere klassen uitgesloten van de foutenlogboeken.<br /><br />Als u weet dat er in een bepaalde klasse geen problemen voorkomen en u wilt de grootte van het logbestand beperken, dan kunt u de klasse uitsluiten van de logbestanden. ",
		admin_office_logging_debug_hover: "<b>Belangrijk:</b> Bekijk de logbestanden van de clientcomputer voordat u het IP-adres of de gebruiker van de client-hostcomputer opgeeft. De waarde die u opgeeft, moet overeenkomen met de waarde die wordt afgebeeld in het logbestand.",
		admin_office_logging_additional_settings: "Aanvullende instellingen:",
		admin_office_logging_additional_settings_hover: "Geef de aanvullende instellingen op",
		admin_office_logging_file_size: "Grootte logbestand",
		admin_office_logging_file_size_hover: "Geef op hoe groot de nieuwe logbestanden moeten zijn die door IBM Content Navigator for Microsoft Office worden gemaakt. Als een logboek de maximumgrootte bereikt, wordt er aan de naam van dat bestand een datum (notatie JJJJMMdd) en een volgnummer (bijvoorbeeld ICNExcelAddin-20121116-5.log) en wordt er een nieuw bestand gemaakt. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Stacktracering afbeelden in vensters",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "U kunt opgeven dat de stacktraceergegevens moeten worden afgebeeld in berichtenvensters. Dit is handig bij de probleemoplossing. Ook als u deze optie niet inschakelt, wordt er altijd gedetailleerde stacktracering opgenomen in de foutenlogboeken van IBM Content Navigator for Microsoft Office.",

		admin_icon_state_twisty: "Statuspictogrammen",
		admin_icon_state_icon: "Statuspictogram",
		admin_icon_state: "Status",
		state_contains_label: "Status bevat",
		admin_icon_state_instructions: "U kunt de pictogrammen aanpassen die worden afgebeeld naast de documenten, mappen en werkitems in uw repository's.<br><br><b>Tip:</b> U kunt opgeven of statuspictogrammen worden afgebeeld voor elke repository in uw omgeving.",
		admin_icon_state_dialog_title: "Toewijzing van statuspictogram",
		admin_icon_state_dialog_instructions: "U kunt de geselecteerde werkstand toewijzen aan een vooraf gedefinieerd pictogram dat wordt opgegeven met de webclient of toewijzen aan een aangepast pictogram.",

		admin_icon_mapping_twisty: "Pictogrammen MIME-typen",
		admin_icon_mapping_dialog_title: "Toewijzing pictogrammen",
		admin_icon_mapping: "Toewijzing pictogrammen",
		admin_icon_mapping_instructions: "U kunt een lijst met MIME-typen toewijzen aan een vooraf gedefinieerd pictogram dat wordt opgegeven met de webclient of toewijzen aan een aangepast pictogram.",
		admin_icon_mapping_list_instructions: "U kunt de pictogrammen aanpassen die worden afgebeeld voor de verschillende MIME-typen die in uw repository worden opgeslagen. De webclient gebruikt de pictogrammen in de volgorde waarin ze worden afgebeeld. Als een MIME-type meerdere keren wordt afgebeeld, wordt het eerste pictogram gebruikt dat aan dat MIME-type gekoppeld is.",
		admin_icon_mapping_icon_label: "Welk pictogram wilt u gebruiken?",
		admin_icon_mapping_file_name: "Aangepast pictogram:",
		admin_icon_mapping_file_name_heading: "Aangepast pictogram",
		admin_icon_mapping_file_name_placeholder: "Geef de URL van het pictogram op",
		admin_icon_mapping_file_name_hover: "Geef de URL van het pictogram op. Als het pictogram zich op dezelfde webtoepassingenserver bevindt als de webclient, geeft u een relatieve URL op. Bijvoorbeeld: /mijnaanpassingen/icon.png",
		admin_icon_mapping_class_name: "Vooraf gedefinieerd pictogram:",
		admin_icon_mapping_class_name_heading: "Vooraf gedefinieerd pictogram",
		admin_icon_mapping_class_name_hover: "Selecteer een pictogram dat wordt opgegeven met de webclient.",
		admin_icon_mapping_class_name_placeholder: "Selecteer een pictogram",

		admin_p8_instructions: "Deze informatie wordt gedeeld door alle repository's van FileNet Content Manager die worden geconfigureerd voor de webclient.",
		admin_p8_collaboration_config: "Optionele configuratie van FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Deze parameters kunt u configureren als u FileNet Collaboration Services wilt afstemmen op uw IBM FileNet P8-omgeving.",
		admin_p8_use_url_incoming: "URL van inkomende aanvragen gebruiken voor het genereren van respons-URL's:",
		admin_p8_use_url_incoming_hover: "In de meeste FileNet Collaboration Services-omgevingen kunt u de URL van een inkomende aanvraag gebruiken voor het genereren van de URL in een respons. Selecteer <b>Ja</b>, behalve als een van de volgende situaties van toepassing is op uw omgeving:<ul><li>U wilt clienttoepassingen dwingen om via een bepaalde URL naar FileNet Collaboration Services te gaan.<li>Door de instellingen van uw proxyserver produceert FileNet Collaboration Services ongeldige URL's.</ul>",

		admin_p8_use_url_incoming_http: "URL van FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Geef de URL op waarmee clienttoepassingen toegang kunnen krijgen tot FileNet Collaboration Services. Gebruik de notatie http://FNCSserver:poortnummer.",
		admin_p8_use_url_incoming_https: "HTTPS-URL van FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Als FileNet Collaboration Services is geconfigureerd is om SSL te gebruiken, geeft u de HTTPS URL op waarmee clienttoepassingen toegang kunnen krijgen tot FileNet Collaboration Services. Gebruik de notatie https://FNCSserver:poortnummer.",
		admin_p8_hide_email_addresses: "E-mailadres van gebruiker niet afbeelden in respons van server:",
		admin_p8_hide_email_addresses_hover: "Als u zich aan bepaalde privacyregels moet houden, kunt u opgeven dat de e-mailadressen van gebruikers niet wordt vermeld in de respons van de server. U kunt er bijvoorbeeld voor zorgen dat de lijst van e-mailadressen niet wordt afgebeeld als de server een lijst van documenten terugstuurt inclusief informatie over de gebruikers door wie die documenten zijn gemaakt of bewerkt.",

		admin_p8_mask_user_ids: "Gebruikers-ID's maskeren in logbestanden:",
		admin_p8_mask_user_ids_hover: "Als u zich aan bepaalde privacyregels moet houden, kunt u opgeven dat de gebruikersnamen niet zichtbaar zijn in de logbestanden van FileNet Collaboration Services. Als u deze optie inschakelt, worden de gebruikersnamen vervangen door hashwaarden. U kunt de logbestanden dan voor ondersteuningsdoeleinden aan externe organisaties zoals IBM ter beschikking stellen zonder daarbij de namen of activiteitsoverzichten van gebruikers te onthullen.",

		admin_p8_soft_delete: "Gewiste items naar de herstelbak verplaatsen:",
		admin_p8_soft_delete_hover: "Als de gebruikers items wissen, worden die items niet uit de repository verwijderd, maar worden ze in een herstelbak (recovery bin) geplaatst. De items blijven in die herstelbak staan totdat ze definitief worden verwijderd. Als de doelrepository niet werkt met een herstelbak, wordt deze instelling genegeerd.<br><br><b>Beperking:</b> Herstelbakken worden alleen ondersteund door IBM FileNet P8 Versie 5.2 en hoger en werken alleen in combinatie met een Social Collaboration Base Extensions-addon.",

		admin_p8_download: "Content Download HTTP Cache configureren",
		admin_p8_download_instructions: "Als er in uw IBM FileNet Content Manager-repository's veel grote bestanden staan, kunt u Content Download HTTP Cache (CDHC) configureren om FileNet Collaboration Services in staat te stellen contentaanvragen voor grote bestanden op een veilige manier door te sturen naar een dedicated web server.<br/><br/>Voor deze functie is IBM HTTP Server vereist. Bovendien moet u het bestand httpd.conf van IBM HTTP Server bijwerken.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Geef op os u Content Download HTTP Cache (CDHC) wilt inschakelen voor alle IBM FileNet Content Manager-repository's in uw omgeving. U kunt ook een minimum bestandsgrootte opgeven waarmee de bestanden worden opgeslagen in de cache.",
		admin_p8_download_cache_folder: "Volledige cachedirectory:",
		admin_p8_download_cache_folder_hover: "Geef het volledige pad op van de directory waarin u de cachebestanden wilt opslaan. Voor de directory mag elk besturingssysteem en elk apparaat worden gebruikt, dus bijvoorbeeld ook een gemeenschappelijke netwerkdirectory, zo lang die directory voor FileNet Collaboration Services en IBM HTTP Server maar zichtbaar is als een bestandssysteem.",
		admin_p8_download_cache_url: "Alias voor de cachelocatie:",
		admin_p8_download_cache_url_hover: "Geef de alias op waarmee vanuit de URL van FileNet Collaboration Services wordt verwezen naar de cachedirectory. Gebruik de notatie /alias, bijvoorbeeld /cdhc.<br/><br/>Als /cdhc wordt opgenomen in de URL, wordt de toepassing doorgestuurd naar de volledige cachedirectory.",
		admin_p8_download_cache_max_files: "Maximum aantal bestanden in cache:",
		admin_p8_download_cache_max_files_hover: "Zodra het maximum aantal bestanden is bereikt, wordt het oudste bestand uit de cache verwijderd.<br><br>Als u zowel een maximum aantal bestanden als een maximumgrootte voor de cache opgeeft, wordt het oudste bestand uit de cache verwijderd zodra een van beide maxima is bereikt.",
		admin_p8_download_cache_max_size: "Maximum cachegrootte (in GB):",
		admin_p8_download_cache_max_size_hover: "Zodra de maximale grootte van de cache is bereikt, wordt het oudste bestand uit de cache verwijderd.<br/><br/>Als u zowel een maximum aantal bestanden als een maximumgrootte voor de cache opgeeft, wordt het oudste bestand uit de cache verwijderd zodra een van beide maxima is bereikt.",
		admin_p8_download_cache_cleanup_duration: "Maximale duur opschoning (in seconden):",
		admin_p8_download_cache_cleanup_duration_hover: "Geef op hoeveel seconden de opschoningsactie maximaal mag duren. De standaardduur is 5 seconden.<br><br>Eventuele bestanden die moeten worden gewist maar die na de opschoningsactie nog in de cache zijn achtergebleven, worden tijdens een volgende opschoningsactie verwijderd.",
		admin_p8_download_cache_cleanup_min: "Minimum interval tussen cacheopschoningsacties (in seconden):",
		admin_p8_download_cache_cleanup_min_hover: "Geef op hoeveel tijd er minimaal tussen twee opeenvolgende opschoningsacties van de cache moet zitten. De standaardtijd is 3600 seconden (1 uur).<br><br>Er vinden alleen cacheopschoningsacties plaats in geval van een actieve aanvraag om content te downloaden uit de cache. Als er elke minuut een aanvraag binnenkomt, vindt elk uur een opschoningsactie plaats. Als een volgende downloadaanvraag echter drie uur op zich laat wachten, vindt er pas een opschoningsactie plaats wanneer de volgende downloadaanvraag binnenkomt.",
		admin_p8_download_cache_min_lifetime: "Minimale tijd in cache (in seconden):",
		admin_p8_download_cache_min_lifetime_hover: "Geef op hoeveel tijd een bestand minimaal in de cache moet hebben doorgebracht alvorens verwijderd te kunnen worden. De standaardtijd is 3600 seconden (1 uur).<br><br>Het oudste bestand in de cache kan pas worden verwijderd nadat het de opgegeven tijd in de cache heeft doorgebracht. Dit geldt zelfs als de cache zijn maximale grootte of zijn maximale aantal bestanden heeft bereikt.",
		admin_p8_download_cache_size_threshold: "Minimumgrootte voor bestanden in cache (in kB):",
		admin_p8_download_cache_size_threshold_hover: "Geef op hoe groot een bestand minimaal moet zijn om door CDHC te worden gebruikt voor opslag in de cache. Als een bestand kleiner is dan de opgegeven grootte, wordt het doorgestuurd via de webtoepassingenserver waarop FileNet Collaboration Services is geïmplementeerd. De standaardgrootte is 1000 kB.",
		admin_p8_download_guard_header: "HTTP-header voor gatekeeping:",
		admin_p8_download_guard_header_hover: "Als een clienttoepassing zijn aanvraag niet indient via een IBM HTTP Server, kan de content in de cache niet worden gedownload. U kunt opgeven dat alleen inkomende aanvragen met een bepaalde HTTP-header (die wordt toegevoegd aan aanvragen vanuit IBM HTTP Server) toegang krijgen tot content in de cache. Daarmee kunt u bepaalde downloadproblemen voorkomen.<br><br>De HTTP-header wordt in IBM HTTP Server geconfigureerd en is aanwezig in alle inkomende aanvragen die via IBM HTTP Server worden doorgestuurd. Als de HTTP-header niet aanwezig is in een aanvraag, wordt de content niet doorgestuurd via IBM HTTP Server, maar via de webtoepassingenserver.",
		admin_p8_download_generate_config: "Configuratie genereren",
		admin_p8_download_generate_config_label: "IBM HTTP Server-configuratie:",
		admin_p8_download_generate_config_label_hover: "Om de CHDC-configuratie te laten werken, moet u het bestand httpd.conf van IBM HTTP Server bijwerken. Klik op Configuratie Genereren om de instructies te genereren die moeten worden toegevoegd aan het bestand httpd.conf.",

		admin_logging_viewone_pro: "Logboekregistratie van ViewONE Professional:",
		admin_logging_viewone_virtual: "Logboekregistratie van ViewONE Virtual:",
		admin_logging_viewone_streamer: "Logboekregistratie van Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "De opties voor logboekregistratie van Document Streaming Server Module zijn alleen van toepassing als u streaming voor PDF-of TIFF-bestanden hebt ingeschakeld in de <b>Daeja ViewONE</b>-sectie van de beheerfunctie.",
		admin_logging_viewone_redaction: "Logboekregistratie van Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "De opties voor logboekregistratie van Permanent Redaction Server Module zijn alleen van toepassing als u bent gerechtigd voor het gebruik van de Redaction-module van Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "PDF-bestanden streamen:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Als er grote PDF-documenten in uw repository staan, kunt u de viewer zodanig configureren dat de documentcontent wordt gestreamd, zodat de gebruikers deze documenten sneller te zien krijgen. Als streaming in uw omgeving niet werkt, kunt u streaming uitschakelen.",
		admin_daeja_viewonepro_stream_tiff_documents: "TIFF-bestanden streamen:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Als er grote TIFF-documenten in uw repository staan, kunt u de viewer zodanig configureren dat de documentcontent wordt gestreamd, zodat de gebruikers deze documenten sneller te zien krijgen. Als streaming in uw omgeving niet werkt, kunt u streaming uitschakelen.",
		admin_daeja_viewonepro_show_file_buttons: "Bestandsknoppen",
		admin_daeja_viewonepro_show_file_menus: "Bestandsmenu's",
		admin_daeja_viewonepro_enable_file_keys: "Sneltoetsen van bestanden",
		admin_daeja_viewonepro_file_keys_hover_help: "Geef aan of u wilt dat gebruikers sneltoetscombinaties gebruiken bij het werken met bestanden, bijvoorbeeld voor het openen of opslaan ervan. Meer informatie over specifieke sneltoetsen vindt u bij de parameterbeschrijving voor FileKeys in de IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Knoppen voor afdrukken",
		admin_daeja_viewonepro_show_print_menus: "Afdrukmenu's",
		admin_daeja_viewonepro_enable_print_keys: "Sneltoetsen voor afdrukken",
		admin_daeja_viewonepro_print_keys_hover_help: "Geef aan of u wilt dat gebruikers sneltoetscombinaties gebruiken bij het afdrukken van bestanden, bijvoorbeeld bij het afdrukken van een pagina of document. Meer informatie over specifieke sneltoetsen vindt u bij de parameterbeschrijving voor PrintKeys in de IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Knoppen voor negatief afbeelden",
		admin_daeja_viewonepro_annotation_tooltip: "Standaard tooltip aangepaste annotatie:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Geef de tekst die wordt afgebeeld als er geen tooltip opgegeven is voor een aangepaste annotatie. De tekst kan vervangbare tokens bevatten. Bijvoorbeeld: &quot;&lt;creator&gt; heeft deze annotatie gemaakt op &lt;createdateonly&gt;.&quot; Meer informatie over vervangbare tokens vindt u bij de parameter voor customAnnotationsToolTip in de IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Vooraf gedefinieerde aangepaste tooltip gebruiken",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Een door het systeem gedefinieerde aangepaste tooltip gebruiken, zoals afgebeeld in het onderstaande tekstvak",
		admin_daeja_viewonepro_help_url: "Help-URL:",
		admin_daeja_viewonepro_help_url_hover_help: "Geef de URL op van de webpagina die de Help-documentatie voor de viewer bevat. De Help-knop op de werkbalk van de viewer en de actie van het Help-menu openen de webpagina. Als u geen URL opgeeft, worden de Help-knop en de actie niet afgebeeld.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Resourcecontext afbeeldingsstempel:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Niet-ondersteunde content naar de browser doorsturen:",
		admin_daeja_viewonepro_route_docs_hover_help: "Gebruikers kunnen niet-ondersteunde afbeeldingen bekijken door ze door te leiden naar de browser; deze opent het passende programma voor het bekijken van het bestand. Om bijvoorbeeld een Microsoft Word-document te bekijken, gebruikt de browser de Microsoft Word-viewer.",
		admin_daeja_viewonepro_scale: "Afbeelding automatisch passend maken:",
		admin_daeja_viewonepro_scale_best: "Best passend",
		admin_daeja_viewonepro_scale_ftow: "Passend maken op breedte",
		admin_daeja_viewonepro_scale_ftoh: "Passend maken op hoogte",
		admin_daeja_viewonepro_enable_hotkeys: "Sneltoetsen inschakelen:",
		admin_daeja_viewonepro_show_features: "Knoppen en menu's afbeelden:",
		admin_daeja_custom_settings: "Aanvullende instellingen:",
		admin_daeja_custom_settings_hover_help: "U kunt andere parameters toevoegen door de parameternaam en de waarde op te geven. U kunt bijvoorbeeld &quot;scrollbars&quot; en &quot;true&quot; opgeven als u wilt dat schuifbalken worden afgebeeld als de afbeelding wordt opgeschaald naar een formaat dat groter is dan het weergavegebied. Meer informatie over namen en waarden van parameters vindt u in de IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtueel",
		admin_daeja_virtual_annotation_tooltip: "Standaard tooltip aangepaste annotatie:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Geef de tekst die wordt afgebeeld als er geen tooltip opgegeven is voor een aangepaste annotatie. De tekst kan vervangbare tokens bevatten. Bijvoorbeeld: &quot;&lt;creator&gt; heeft deze annotatie gemaakt op &lt;createdateonly&gt;.&quot; Meer informatie over vervangbare tokens vindt u bij de parameter voor customAnnotationsToolTip in de IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Vooraf gedefinieerde aangepaste tooltip gebruiken",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Een door het systeem gedefinieerde aangepaste tooltip gebruiken, zoals afgebeeld in het onderstaande tekstvak",
		admin_daeja_virtual_image_stamp_resource_context: "Resourcecontext afbeeldingsstempel:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Pad van licentiebestanden:",
		admin_daeja_virtual_license_path_hover_help:"Geef het volledige pad op van de directory waarin de licentiebestanden lic-server-virtual.v1 en lic-server.v1 zich bevinden.",
		admin_default_license_path:"Het standaardpad voor licentiebestanden gebruiken",
		admin_license_path_specified:"Het aangepaste pad voor licentiebestanden gebruiken",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Cachedirectory:",
		admin_daeja_streamer_cache_root_hover_help: "Geef voor een snellere toegang het volledige pad op van de directory waarin u de cachebestanden wilt opslaan. Voor de directory mag elk besturingssysteem en elk apparaat worden gebruikt, dus bijvoorbeeld ook een netwerkdirectory, zo lang die directory voor IBM Content Navigator en IBM HTTP Server maar zichtbaar is als een bestandssysteem. Gebruik een lokale directory om de performance te verbeteren.",
		admin_daeja_streamer_settings: "Aanvullende instellingen:",
		admin_daeja_streamer_settings_hover_help: "U kunt andere parameters toevoegen door de parameternaam en de waarde op te geven. U kunt bijvoorbeeld “cookieAllowedDomainList” en een door komma's gescheiden lijst van hostservers opgeven. Meer informatie over namen en waarden van parameters vindt u in de IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Instellingen:",
		admin_daeja_redaction_settings_hover_help: "U kunt andere parameters toevoegen door de parameternaam en de waarde op te geven. U kunt bijvoorbeeld “burnIncrementalAnnotations” en ”true” opgeven. Meer informatie over namen en waarden van parameters vindt u in de IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Nieuwe instelling",
		admin_daeja_setting_dialog_title_edit: "Instelling bewerken",
		admin_daeja_setting_dialog_hover_help: "U kunt andere parameters toevoegen door de parameternaam en de waarde op te geven. U kunt bijvoorbeeld “scrollbars” en “true” opgeven als u wilt dat schuifbalken worden afgebeeld als de afbeelding wordt opgeschaald naar een formaat dat groter is dan het weergavegebied.",
		admin_daeja_setting_dialog_field_hover_help: "Meer informatie over namen en waarden van parameters vindt u in de Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Logboekregistratie van Daeja ViewONE",
		admin_daeja_logging_trace: "Traceerlogboeken inschakelen",
		admin_daeja_logging_trace_net: "Logboekregistratie voor netwerk inschakelen",
		admin_daeja_logging_trace_annotations: "Logboekregistratie voor annotaties inschakelen",
		admin_daeja_logging_log_file: "Logbestand:",
		admin_daeja_logging_instructions: "Met behulp van logboekregistratie kunt u problemen met Daeja ViewONE Professional en Daeja ViewONE Virtual oplossen. Als u weet dat een probleem optreedt bij een bepaalde functie, kunt u zich richten op de logboekregistratie voor die functie.",

		admin_v1pro_logging_trace_hover: "Gebruik deze instelling voor het oplossen van algemene problemen met de viewer.<br><br>Gegevens voor logboekregistratie worden naar de Java-console op de clientcomputer geschreven. Vanuit het Configuratiescherm (Windows) of de Systeemvoorkeuren (Mac) in uw besturingssysteem krijgt u toegang tot de Java-applet.",
		admin_v1pro_logging_trace_net_hover: "Gebruik deze instelling voor het oplossen van de volgende problemen:<ul><li>Problemen met uw serververbinding</li><li>Problemen met MIME-typen</li><li>Problemen met bestanden die te lang zijn</li></ul>Daarnaast kunt u bij het gebruik van Daeja ViewONE Professional logboekregistratie van netwerktracering gebruiken om te bepalen waar vertragingen optreden.<br><br>Gegevens voor logboekregistratie worden naar de Java-console op de clientcomputer geschreven. Vanuit het Configuratiescherm (Windows) of de Systeemvoorkeuren (Mac) in uw besturingssysteem krijgt u toegang tot de Java-applet.",
		admin_v1pro_logging_trace_annotations_hover: "Gebruik deze instelling om problemen op te lossen bij het maken, opslaan of laden van annotaties.<br><br>Gegevens voor logboekregistratie worden naar de Java-console op de clientcomputer geschreven. Vanuit het Configuratiescherm (Windows) of de Systeemvoorkeuren (Mac) in uw besturingssysteem krijgt u toegang tot de Java-applet.",

		admin_virtual_logging_trace_hover: "Gebruik deze instelling voor het oplossen van algemene problemen met de viewer.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand virtual.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_virtual_logging_trace_net_hover: "Gebruik deze instelling voor het oplossen van de volgende problemen:<ul><li>Problemen met uw serververbinding</li><li>Problemen met MIME-typen</li><li>Problemen met bestanden die te lang zijn</li></ul>Daarnaast kunt u bij het gebruik van Daeja ViewONE Virtual logboekregistratie van netwerktracering gebruiken om te bepalen waar vertragingen optreden.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand virtual.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_virtual_logging_trace_annotations_hover: "Gebruik deze instelling om problemen op te lossen bij het maken, opslaan of laden van annotaties.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand virtual.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_virtual_logging_log_file_hover: "Als u logboekregistratie voor de viewer inschakelt, geeft u het volledige pad en de naam van het logbestand op waarin u de logboekgegevens wilt opslaan. Het wordt aanbevolen het logboekbestand virtual.log te noemen.",

		admin_streamer_logging_trace_hover: "Gebruik deze instelling voor het oplossen van algemene problemen met de Document Streaming Server Module.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand streamer.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_streamer_logging_trace_net_hover: "Gebruik deze instelling voor het oplossen van de volgende problemen:<ul><li>Problemen met uw serververbinding</li><li>Problemen met bepaalde MIME-typen</li><li>Problemen met bestanden die te lang zijn</li></ul>Daarnaast kunt u bij het gebruik van de Document Streaming Server Module logboekregistratie van netwerktracering gebruiken om te bepalen waar vertragingen optreden.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand streamer.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_streamer_logging_log_file_hover: "Als u logboekregistratie voor de Document Streaming Server Module inschakelt, geeft u het volledige pad en de naam van het logbestand op waarin u de logboekgegevens wilt opslaan. Het wordt aanbevolen het logboekbestand streamer.log te noemen.",

		admin_redaction_logging_trace_hover: "Gebruik deze instelling voor het oplossen van algemene problemen met de Permanent Redaction Server Module.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand redacttofile.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_redaction_logging_trace_net_hover: "Gebruik deze instelling voor het oplossen van de volgende problemen:<ul><li>Problemen met uw serververbinding</li><li>Problemen met bepaalde MIME-typen</li><li>Problemen met bestanden die te lang zijn</li></ul>Daarnaast kunt u bij het gebruik van de Permanent Redaction Server Module logboekregistratie van netwerktracering gebruiken om te bepalen waar vertragingen optreden.<br><br>Standaard wordt de logboekinformatie weggeschreven naar het bestand redacttofile.log in de subdirectory config van de IBM Content Navigator-installatiedirectory.",
		admin_redaction_logging_log_file_hover: "Als u logboekregistratie voor de Permanent Redaction Server Module inschakelt, geeft u het volledige pad en de naam van het logbestand op waarin u de logboekgegevens wilt opslaan.  Het wordt aanbevolen het logboekbestand redacttofile.log te noemen.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Functies configureren voor uw viewers en services.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Als u met de webclient verbinding maakt met een of meer Content Manager OnDemand-repository's, moet u informatie opgeven die de OnDemand Web Enablement Kit nodig heeft voor een correcte werking. Deze informatie wordt gedeeld door alle repository's van Content Manager OnDemand die worden geconfigureerd voor de webclient.",
		admin_ondemand_language: "Taal:",
		admin_ondemand_tempdir: "Tijdelijke directory ODWEK:",
		admin_ondemand_tracegrp: "Tracering ODWEK",
		admin_ondemand_tracedir: "Directory voor traceergegevens:",
		admin_ondemand_tracelevel: "Traceerniveau:",
		admin_ondemand_tracelevel_0: "0 - Geen logboekregistratie",
		admin_ondemand_tracelevel_1: "1 - Foutberichten in logboek vastleggen",
		admin_ondemand_tracelevel_2: "2 - Fout- en waarschuwingsberichten in logboek vastleggen",
		admin_ondemand_tracelevel_3: "3 - Fout-, waarschuwings- en informatieberichten in logboek vastleggen",
		admin_ondemand_tracelevel_4: "4 - Alle berichten vastleggen, inclusief functietracering",
		admin_ondemand_max_trace_filesize: "Maximale bestandsgrootte voor traceerbestand:",
		admin_ondemand_max_trace_filesize_unlimited: "Onbeperkt",
		admin_ondemand_max_trace_filesize_limited: "Beperkt (aanbevolen)",
		admin_ondemand_max_trace_filesize_meg: " MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "De waarde ligt buiten bereik. De waarde moet een geheel getal zijn tussen 1 en 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Installatiedirectory AFP2PDF:",
		admin_ondemand_language_hover: "Geef de taal op waarin ODWEK berichten retourneert.",
		admin_ondemand_tempdir_hover: "Voer de directory in waar de OnDemand Web Enablement Kit tijdelijke bestanden opslaat tijdens verwerking. U moet het volledige pad van een bestaande directory invoeren op de webtoepassingenserver.",
		admin_ondemand_tracedir_hover: "Voer de directory in waar u het ODWEK-traceerbestand arswww.trace wilt opslaan. U moet het volledige pad invoeren van een bestaande directory op de webtoepassingenserver.",
		admin_ondemand_tracelevel_hover: "Geef het niveau van de logboekgegevens op die moeten worden weggeschreven in het bestand arswww.trace. Met het <b>vastleggen van foutberichten</b> wordt de kleinste hoeveelheid logboekgegevens vastgelegd. Met <b>alle berichten, inclusief functietracering</b> wordt de grootste hoeveelheid informatie vastgelegd.<br /><br />Geef <b>Alle berichten worden vastgelegd, met inbegrip van functietracering</b> niet op in een productieomgeving, tenzij u van IBM Software Support de instructie krijgt om dit te doen.",
		admin_ondemand_max_trace_filesize_hover: "Geef op of u wilt toestaan dat het ODWEK-traceerbestand onbeperkt kan groeien, of dat u wilt dat de webclient nieuwe logbestanden maakt wanneer het logbestand een bepaalde grootte bereikt. De standaardwaarde is om toe te staan dat het traceerlogbestand groeit totdat de webtoepassing wordt gestopt op de webtoepassingenserver.",
		admin_ondemand_max_trace_unlimited_hover: "Selecteer deze optie als u wilt dat de ODWEK-traceergegevens worden weggeschreven naar één logbestand. Als u deze optie selecteert, krijgt u mogelijk een logboekbestand dat te groot is om te openen met een standaard bestandsviewer.",
		admin_ondemand_max_trace_limited_hover: "Selecteer deze optie als u wilt dat de ODWEK-traceergegevens worden weggeschreven naar kleinere logbestanden. Als een logboek de maximumgrootte bereikt, wordt er aan de naam van dat logbestand een datum toegevoegd (arswww.trace.JJJJMMDD.UUMMSS) en wordt een nieuw logbestand gemaakt.",
		admin_ondemand_afp2pdf_installdir_hover: "Als u de functie AFP2PDF Transform wilt gebruiken om AFP-documenten te converteren naar PDF-documenten voor weergave of afdrukken, geeft u de directory op waarin de functie AFP2PDF Transform is geïnstalleerd op de webtoepassingenserver. Bijvoorbeeld: C:\\Program Files\\IBM\\AFP2web\\afp2pdf",

		admin_adminusers: "Beheerders",
		admin_adminusers_heading_text_multi: "U moet opgeven welke gebruikers beheermachtigingen hebben in de webclient. Alleen beheerders kunnen zich aanmelden bij de beheerdesktop.<br /><br /><b>Belangrijk:</b> De gebruikers-ID's van de beheerders van IBM Content Navigator moeten overeenkomen met:<ul><li>Gebruikers-ID's die op uw webtoepassingenserver aanwezig zijn. De gebruikers-ID's hoeven geen beheerders te zijn op de webtoepassingenserver.</li><li>Gebruikers-ID's die bestaan in de standaardrepository die geconfigureerd is voor elke desktop die de functie Beheer bevat.</li></ul>",
		admin_adminusers_heading_text_single: "U moet opgeven welke gebruikers beheermachtigingen hebben in de webclient. Alleen beheerders kunnen zich aanmelden bij de beheerdesktop.<br /><br /><b>Belangrijk:</b> De gebruikers-ID's van de beheerders van IBM Content Navigator moeten overeenkomen met gebruikers-ID's die bestaan op uw webtoepassingenserver. De gebruikers-ID's hoeven geen beheerders te zijn op de webtoepassingenserver.",
		admin_adminusers_newuser: "Nieuwe beheerder:",
		admin_adminusers_add: "Toevoegen",
		admin_adminusers_remove: "Verwijderen",
		admin_adminusers_listheading: "Beheerders",
		admin_adminusers_nameInvalid: "De waarde mag gen duplicaat zijn.",

		admin_sync_server_instructions: "<b>Alleen voor gebruikers van FileNet P8:</b> Als u van plan bent synchronisatieservices voor een of meer repository's in te schakelen, moet u de webclient configureren voor gebruik van synchronisatieservices. De configuratie van synchronisatieservices wordt gemeenschappelijk gebruikt door alle repository's in uw omgeving. ",
		admin_settings_instructions: "De waarden die u opgeeft op het tabblad Instellingen zijn van toepassing op alle desktops in uw configuratie.",
		admin_autocomplete: "Automatisch gebruikersnamen invullen:",
		admin_autocomplete_hover: "Geef op of u wilt dat de webclient gebruikersnamen opslaat in browsercookies om ervoor te zorgen dat de browser tijdens het aanmelden automatisch gebruikersnamen in de webclient invult.<br><br>Als u deze optie inschakelt, wordt de gebruikersnaam van de laatste gebruiker die zich heeft aangemeld bij de webclient opgeslagen in de browsercookies en wordt deze automatisch afgebeeld op de aanmeldingspagina wanneer een gebruiker de webclient opent.<br><br>U moet deze optie uitschakelen als de toepassing wordt geopend vanaf gedeelde werkstations, of als u liever geen gebruikersnamen opslaat in browsercookies.<br /><br />Deze optie is niet van toepassing op mobiele of aangepaste toepassingen.",
		admin_autocomplete_enable: "Inschakelen",
		admin_autocomplete_disable: "Uitschakelen",
		admin_cultural_collation: "Sortering op locale gebruiken:",
		admin_cultural_collation_hover: "Als u sortering op locale inschakelt, wordt het sorteren uitgevoerd op de repositoryserver. Hierdoor kunnen de prestaties van de webclient slechter worden.<br><br>Als sortering op locale wordt uitgeschakeld, kunnen de prestaties van de webclient verbeteren.",
		admin_cultural_collation_enable: "Inschakelen",
		admin_cultural_collation_disable: "Uitschakelen",
		admin_base_ui_style: "Themastijl",
		admin_base_ui_style_hover: "Geef de stijl op van het standaardthema dat in de webclient gebruikt  wordt. Deze stijl wordt alleen gebruikt voor desktops die gebruik maken van het thema <b>Standaard</b> (zoals opgegeven op de tab <b>Presentatie</b> van de desktopconfiguratie).<br/></br><b>Beperking:</b> Als uw desktopconfiguraties gebruik maken van aangepaste thema's, worden de aangepaste thema's gebaseerd op de klassieke stijl, ongeacht de stijl die u selecteert. ",
		admin_base_ui_style_classic: "Klassiek",
		admin_access_control_access: "Toegang beperken tot bepaalde gebruikers en groepen",
		admin_access_control_access_show: "Gegevens over toegangsbesturing afbeelden",
		admin_access_control_access_enable: "Ja",
		admin_access_control_access_disable: "Nee",
		admin_mobile_access: "Toegang vanaf mobiele toepassingen toestaan",
		admin_mobile_access_hover: "Standaard kunnen gebruikers de webclient openen vanuit de iOS-toepassing voor IBM Content Navigator.<br /><br /><b>Belangrijk:</b> Als u voorkomt dat gebruikers de webclient openen vanuit de iOS-toepassing, kunnen gebruikers de webclient alsnog openen vanuit de webbrowsers op hun mobiele apparaten en vanuit aangepaste toepassingen die worden geschreven met behulp van de API's van IBM Content Navigator die op mobiele apparaten werken.",
		admin_mobile_access_enable: "Ja",
		admin_mobile_access_disable: "Nee",
		admin_error: "Informatie over foutbericht:",
		admin_error_custom: "Zoeken in aangepaste ondersteuningscontent",
		admin_error_default: "Zoeken in content van IBM Support <BDO DIR='LTR'>(</BDO>standaard<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Geef op waar gebruikers moeten kijken voor meer informatie als ze een foutbericht aantreffen. U kunt gebruikers verwijzen naar informatie op de IBM Support Portal, of naar een interne resource, zoals een helpdesk. ",
		admin_error_URL: "URL-voorvoegsel:",
		admin_error_URL_hover: "Voer de URL in van de resource die gebruikers moeten gebruiken als ze een fout aantreffen, zoals een helpdesk. Bijvoorbeeld: http://localhost:poortnummer. De webclient voegt het berichtnummer toe aan de URL.",
		admin_prompt_close_without_save: "Wilt u afsluiten zonder uw wijzigingen op te slaan?",
		admin_object_expiration_time: "Interval voor vernieuwen van cache (in minuten):",
		admin_object_expiration_time_hover: "U kunt de periode verlengen die configuratieobjecten (bijvoorbeeld desktops) in cache worden bewaard ter verbetering van de prestaties van de webclient. De standaardwaarde is 10 minuten. De maximumtijd is 1440 minuten (1 dag).<br /><br />De webtoepassing moet opnieuw worden gestart om de wijzigingen van kracht te laten worden.<br /><br />Als IBM Content Navigator in een hoogbeschikbare clusteromgeving wordt geïmplementeerd, worden wijzigingen in de configuratieobjecten niet doorgegeven aan de knooppunten in het cluster totdat de cache vernieuwd is.",
		admin_temp_file_cleanup_interval: "Scaninterval voor opschonen van viewercache (in uren):",
		admin_temp_file_cleanup_interval_hover: "Geef op hoe vaak de tijdelijke directory moet worden gescand om vervallen tijdelijke bestanden op te sporen en te wissen. Standaard wordt de tijdelijke directory elke zes uur gescand. U kunt een waarde van 6 tot 48 uur opgeven.",
		admin_temp_file_expiration_interval: "Vervaltijd viewercache (in uren):",
		admin_temp_file_expiration_interval_hover: "Geef op hoeveel uur de tijdelijke bestanden die te maken hebben met activiteiten in de viewer, worden bewaard in de browsercache. Standaard vervallen dergelijke tijdelijke bestanden na 24 uur. U kunt een waarde van 12 tot 48 uur opgeven.",
		admin_encryption_key_hover: "Sleutel voor de codeerfuncties van Navigator.",
		admin_encryption_key: "Codeersleutel:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Huisstijl",
		admin_mobile_branding_main_color: "Hoofdkleur:",
		admin_mobile_branding_secondary_color: "Secundaire kleur:",
		admin_mobile_device_title: "MaaS360 Beheren",
		admin_mobile_device_enable_maas360: "MaaS360 inschakelen:",
		admin_mobile_device_enable_maas360_hover_help: "Hier komt voorgrond-Help voor inschakelen van MaaS360",
		admin_mobile_device_maas360_developer_id: "MaaS360-ontwikkelaars-ID:",
		admin_mobile_device_maas360_license_key: "MaaS360-licentiecode:",
		admin_mobile_settings_title: "Instellingen",
		admin_mobile_email_address_hover_help: "Het e-mailadres wordt in de mobiele toepassing gebruikt wanneer een gebruiker klikt op \"Foutenrapport verzenden.\"",
		admin_mobile_email_address: "E-mailadres:",
		admin_invalid_email_address_message: "Het opgegeven e-mailadres heeft niet de juiste notatie. Geef het correcte adres op en probeer het opnieuw.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Sommige gegevens zijn ongeldig.",
		admin_configuration_parameters: "Configuratieparameters",
		admin_configuration_optional_features: "Optionele voorzieningen",
		admin_configuration_optional_features_p8_instructions: "Selecteer de voorzieningen die u wilt inschakelen voor deze repository.<p><b>Belangrijk:</b> Als u een voorziening inschakelt die een addon voor de repository installeert, moet u een verbinding met de repository hebben als beheerder van Content Platform Engine of Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Selecteer de voorzieningen die u wilt inschakelen voor deze repository.<p><b>Belangrijk:</b> Deze functies passen het gegevensmodel van uw repository aan. Om deze in te schakelen, moet u verbinding hebben met de repository als beheerder van de bibliotheekserver.</p>",
		admin_system_properties: "Systeemeigenschappen",
		admin_system_properties_for: "Systeemeigenschappen voor:",
		admin_available_properties: "Beschikbare eigenschappen",
		admin_displayed_properties: "Weergegeven eigenschappen",
		admin_selected_properties: "Geselecteerde eigenschappen",
		admin_selected_filtered_properties: "Verborgen eigenschappen",
		admin_available_operators: "Afgebeelde operators",
		admin_selected_filtered_operators: "Verborgen operators",
		admin_system_properties_shown: "Afgebeelde eigenschappen",
		admin_system_properties_hidden: "Verborgen eigenschappen",
		admin_available_menu_items: "Beschikbare acties:",
		admin_selected_menu_items: "Geselecteerde acties:",
		admin_menu_global: "Van toepassing als er geen items zijn geselecteerd:",
		admin_menu_multiple_document: "Van toepassing als er meerdere items zijn geselecteerd:",
		admin_menu_privileges: "Vereiste bevoegdheden:",
		admin_menu_plugin: "Plugin:",
		admin_menu_repository_types: "Repositorytypen:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Scheidingsteken",
		admin_browse: "Bladeren",
		admin_search: "Zoeken",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Afscherming op basis van rol",
		admin_connections_library_enabled: "IBM Connections ingeschakeld",
		admin_office_conf: "Edit-integratie",
		admin_desktop_conf_label: "Configuratie van desktop",
		admin_ms_office_conf_label: "Office-configuratie",
		admin_workflows: "Werkstromen",
		admin_file_types: "Bestandstypen",
		admin_file_type_contains_label: "Bestandstype bevat",
		admin_name_propepty: "Naam",
		admin_cm_name_property_default: "Standaardnaam gebruiken",
		admin_cm_name_property_default_hover: "De eigenschap voor hiërarchische ICM-naam (ICM$NAME) wordt standaard gebruikt als de itemnaam als de eigenschap voor het item gedefinieerd is. Als de eigenschap voor hiërarchische ICM-naam (ICM$NAME) niet beschikbaar is, wordt de eerste eigenschap die is gemarkeerd met \"represents\" gebruikt als de itemnaam.",
		admin_cm_name_property: "Geef de eigenschap voor itemnaam op",
		admin_cm_name_property_hover: "Geef op welke eigenschap wordt gebruikt als naam voor documenten en mappen.",
		admin_name_property: "Naameigenschap:",
		admin_doc_name_property: "Eigenschap documentnaam:",
		admin_doc_name_property_hover: "Geef op welke eigenschap wordt gebruikt als documentnaam.",
		admin_folder_name_property: "Eigenschap mapnaam:",
		admin_folder_name_property_hover: "Geef op welke eigenschap wordt gebruikt als mapnaam.",
		admin_all_searches_label: "Aantal af te beelden zoekopdrachten:",
		admin_unlimited: "Geen limiet",
		admin_limit: "Beperken tot",
		admin_repository: "Repository:",
		admin_application_space: "Toepassingsruimte",
		admin_available_application_spaces: "Beschikbare toepassingsruimten:",
		admin_selected_application_spaces: "Geselecteerde toepassingsruimten:",
		admin_label: "Label",
		admin_repository_box_placeholder: "Selecteer een Box-repository",
		admin_repository_placeholder: "Selecteer een repository",
		admin_search_match: "Zoektype:",
		admin_search_match_all: "Moet overeenkomen met alle zoekcriteria",
		admin_search_match_any: "Moet overeenkomen met een van de zoekcriteria",
		admin_search_match_hover: "Geef op welke optie standaard wordt geselecteerd in het menu <b>Opties van eigenschappen</b>.",

		admin_repository_redactions_instructions: "U kunt rolgebaseerde afscherming voor deze repository configureren.",
		admin_repository_redaction_policies_description: "U kunt afschermingsdefinities maken en beheren. Hiermee worden afschermingsredenen gekoppeld aan gebruikers en groepen die vertrouwelijke gegevens kunnen lezen en annotaties kunnen bewerken waarmee de vertrouwelijke gegevens verborgen worden voor weergave. ",
		admin_repository_redaction_roles_instruction: "U kunt een afschermingsrol definiëren om de opgegeven gebruikers en groepen te koppelen aan het lezen van vertrouwelijke gegevens of aan het bewerken van annotaties waarmee vertrouwelijke gegevens verborgen worden voor weergave. De afschermingsrol moet aan een afschermingsreden in een afschermingsbeleid worden gekoppeld voordat deze gebruikers en groepen de gegevens kunnen lezen of de annotaties kunnen bewerken.",
		admin_repository_redaction_reasons_instruction: "U kunt afschermingsredenen voor uw repository configureren.",
		admin_repository_redaction_policies: "Configuratie afschermingsbeleid",
		admin_repository_redaction_roles: "Configuratie afschermingsrollen",
		admin_repository_redaction_reasons: "Configuratie afschermingsredenen",
		admin_repository_redaction_roles_type: "Type",
		admin_repository_redaction_roles_type_hover: "Een editor kan specifieke typen rolgebaseerde afscherming maken, wijzigen of wissen, terwijl een lezer specifieke typen vertrouwelijke gegevens kan bekijken.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Lezer",
		admin_repository_redaction_roles_membership: "Lidmaatschap",
		admin_repository_redaction_roles_membership_hover: "Selecteer de editors aan wie u deze rol wilt toewijzen.",
		admin_repository_redaction_roles_user_group_hover: "Zoek de gebruikers en groepen, of selecteer de editors aan wie u deze rol wilt toewijzen.",
		admin_repository_redaction_roles_description: "U kunt afschermingsrollen definiëren en beheren. Hiermee worden gebruikers en groepen gekoppeld aan het lezen van vertrouwelijke gegevens en het bewerken van annotaties waarmee vertrouwelijke gegevens verborgen worden voor weergave. ",
		admin_repository_redaction_new: "Nieuwe afschermingsrol",
		admin_repository_redaction_role_avail_editors: "Beschikbare editors voor afscherming",
		admin_repository_redaction_role_avail_users: "Beschikbare gebruikers",
		admin_repository_redaction_role_avail_groups: "Beschikbare groepen",
		admin_repository_redaction_role_selected_editors: "Geselecteerde editors voor afscherming",
		admin_repository_redaction_role_selected_users_groups: "Geselecteerde gebruikers en groepen",
		admin_repository_redaction_role_add_editor: "Nieuwe editors...",
		admin_repository_redaction_role_access_type: "Toegang",
		admin_repository_redaction_role_access_type_access: "Toestaan",
		admin_repository_redaction_role_access_type_no_access: "Weigeren",
		admin_repository_redaction_role_users: "Gebruikers",
		admin_repository_redaction_role_groups: "Groepen",
		admin_repository_redaction_role_editors: "Editors",
		admin_delete_confirmation_redaction_roles: "Wilt u de geselecteerde afschermingsrol wissen?",
		admin_repository_edit_redaction_role: "Afschermingsrol: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Standaardtoegang",
		// RBA
		desktop_user_group_acl: "Desktopbeheerders",
		desktop_user_group_remove: "Verwijderen",
		desktop_rba_membership: "Lidmaatschap:",
		desktop_rba_membership_list_label: "Naam",
		admin_repository_redaction_policy_hover: "Geef een beschrijving op waarmee gebruikers onderscheid kunnen maken tussen dit beleid en de andere beleidsdefinities. ",
		admin_repository_new_redaction_policy: "Nieuw afschermingsbeleid",
		admin_repository_policy_name: "Naam beleid",
		admin_repository_reason_redactions: "Afschermingsredenen:",
		admin_repository_role_editors: "Editors",
		admin_repository_role_viewers: "Lezers",
		admin_repository_redaction_policy_instruction: "U kunt een afschermingsbeleid definiëren om de geselecteerde afschermingsredenen te koppelen aan zowel afschermingseditors als afschermingslezers.",
		admin_repository_redaction_reasons_hover: "Selecteer een of meer typen vertrouwelijke gegevens die u niet wilt laten zien aan de meeste gebruikers, bijvoorbeeld, persoonlijk identificeerbare informatie, bedrijfsgeheimen of informatie die vertrouwelijk is of eigendom is van uw bedrijf.",
		admin_repository_readaction_available_reasons: "Beschikbare redenen",
		admin_repository_readaction_selected_reasons: "Geselecteerde redenen",
		admin_repository_readaction_new_reason: "Nieuwe reden...",
		admin_repository_redeaction_reasons: "Afschermingsredenen:",
		admin_repository_readaction_editor_permmission: "Afschermings:",
		admin_repository_redaction_editors_hover: "Selecteer de rollen die de afscherming voor de geselecteerde redenen kunnen definiëren en wijzigen.",
		admin_repository_readaction_new_editor_role: "Nieuwe editorrol...",
		admin_repository_readaction_available_editors: "Beschikbare editorrollen:",
		admin_repository_readaction_selected_editors: "Geselecteerde editorrollen",
		admin_repository_readaction_viewer_permmission: "Afschermingslezers:",
		admin_repository_redaction_viewers_hover: "Selecteer de rollen die de vertrouwelijke gegevens voor de geselecteerde redenen kunnen bekijken. De afscherming wordt niet toegepast op gebruikers en groepen met deze rollen.",
		admin_repository_readaction_new_viewer_role: "Nieuwe lezersrol...",
		admin_repository_readaction_available_viewers: "Beschikbare lezersrollen:",
		admin_repository_readaction_selected_viewers: "Geselecteerde lezersrollen",
		admin_repository_reason_redactions_header: "Afschermingsredenen",
		admin_delete_confirmation_redaction_policy: "Wilt u het geselecteerde afschermingsbeleid wissen?",
		admin_role_type_repository: "Repository",
		admin_role_type_administrator: "Beheerder",
		admin_role_type_template: "Sjabloon",
		admin_role_type_teamspace: "Teamruimte",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Lezer",
		admin_collaboration_services_instructions: "Als u een webtoepassing van IBM Connections en van FileNet Collaboration Services hebt, kunt u communityteamruimten en activiteitenstromen voor de repository configureren.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configuratie communitybibliotheken",
		admin_collaboration_community_instruction: "U kunt één repository in uw IBM FileNet P8-domein configureren voor de opslag van IBM Connections communitybibliotheken (ook wel teamruimten genoemd). Als de gebruikers een communitybibliotheek maken via IBM Connections, wordt deze opgeslagen in de repository die is aangemerkt als de repository voor communitybibliotheken.",
		admin_collaboration_community_teamspaces: "Deze repository gebruiken voor communitybibliotheken:",
		admin_collaboration_community_teamspaces_hover: "U kunt slechts één repository in uw IBM FileNet P8-domein gebruiken voor de opslag van nieuwe communitybibliotheken. Als u deze repository inschakelt en u al een bestaande repository hebt, wordt die bestaande repository uitgeschakeld. De eventueel aanwezige in de bestaande repository blijven echter aanwezig.",
		admin_collaboration_connections_anonymous: "Anonieme toegang tot openbare content toestaan:",
		admin_collaboration_connections_anonymous_hover: "Als uw IBM Connections-server openbare of beheerde (moderated) community's bevat, kunt u FileNet Collaboration Services zodanig configureren dat gebruikers content in de bibliotheken van die community's kunnen bekijken en daaruit kunnen downloaden zonder zich eerst te hoeven aanmelden.<br><br>Gebruikers die anoniem toegang krijgen tot community's, kunnen geen content maken, wijzigen of wissen. <br><br><b>Belangrijk:</b> U moet een IBM FileNet P8 LDAP-gebruiker aanwijzen als de anonieme gebruiker en die gebruiker de rol <b>Anonymous</b> geven in WebSphere Application Server.",
		admin_collaboration_connections_url: "IBM Connections-URL:",
		admin_collaboration_connections_url_hover: "Geef de URL van uw IBM Connections-server op, in de notatie http://IBMConnectionsServer:poortnummer. Als IBM Connections zodanig is geconfigureerd dat IBM HTTP Server wordt gebruikt, kunt u het poortnummer in de URL weglaten.<br><br>De URL moet toegankelijk zijn voor gebruikers van IBM Connections, want dit is de link die door FileNet Collaboration Services wordt gebruikt voor het maken van links naar documentlandingspagina's in IBM Connections.",
		admin_collaboration_connections_url_http_use: "De URL van IBM Connections gebruiken",
		admin_collaboration_connections_url_https_use: "De HTTPS-URL van IBM Connections gebruiken",
		admin_collaboration_connections_url_specify: "Geef de URL op",
		admin_collaboration_connections_url_https: "HTTPS-URL IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Als IBM Connections is geconfigureerd voor gebruik van SSL, geeft u de HTTPS-URL van uw IBM Connections-server op, in de notatie https://IBMConnectionsServer:poortnummer. Als IBM Connections zodanig is geconfigureerd dat IBM HTTP Server wordt gebruikt, kunt u het poortnummer in de URL weglaten.",

		admin_collaboration_connections_gadget_url: "Gadget-URL IBM Connections:",
		admin_collaboration_connections_retrieval_url: "Ophaal-URL IBM Connections:",
		admin_collaboration_connections_security: "Communitybeheerders:",
		admin_collaboration_connections_security_hover: "Geef op welke gebruikers en groepen in staat zijn content te beheren in communitybibliotheken.<br><br>Algemene beheerders (global administrators) kunnen communitybibliotheken maken, wijzigen en wissen, en er toegang toe verlenen. Datzelfde geldt voor de in die bibliotheken aanwezige content. Als u een gebruiker opgeeft als algemene beheerder, krijgt die gebruiker de bevoegdheden van ClbGlobalAdministrator in de repository.<br><br>Algemene evaluatieheerders (global review administrators) kunnen de de content die wordt geëvalueerd voor publicatie in een communitybibliotheek, goedkeuren of afwijzen. Als u een gebruiker opgeeft als algemene evaluatiebeheerder, krijgt die gebruiker de bevoegdheden van ClbGloablReviewAdministrator in de repository.",

		admin_collaboration_connections_admins: "Algemene beheerders",
		admin_collaboration_connections_admins_review: "Algemene evaluatiebeheerders",
		admin_collaboration_connections_seedlist: "Inhoud van de communitybibliotheek indexeren:",
		admin_collaboration_connections_seedlist_hover: "Geef aan of u wilt dat de communitybibliotheken in deze repository door IBM Connections worden gecrawld, zodat er een zoekindex kan worden gemaakt. Het maken van een index heeft gevolgen voor de performance van de repository.<br><br>Als de Social Collaboration Search Indexing Extensions zijn geïnstalleerd voor de repository, is deze optie standaard ingeschakeld. Zijn de Social Collaboration Search Indexing Extensions niet geïnstalleerd voor de repository, wordt de addon geïnstalleerd zodra u deze optie inschakelt.",
		admin_collaboration_activity_stream: "Configuratie van events in activiteitgegevensstroom",
		admin_collaboration_activity_stream_label: "Informatie over events naar IBM Connections pushen:",
		admin_collaboration_activity_stream_label_hover: "Geef op of u wilt dat de informatie over bepaalde events, zoals het maken van documenten, uitchecken, inchecken, het plaatsen van commentaar of tags, of het delen van informatie, naar IBM Connections wordt gepusht.<br><br><b>Belangrijk:</b> Het pushen van meldingen naar IBM Connections heeft gevolgen voor de performance van de repository.",

		admin_collaboration_activity_stream_instruction: "U kunt deze repository zodanig configureren dat informatie over events, zoals het plaatsen van commentaar of het goedkeuren van documenten, naar IBM Connections wordt gepusht. Events worden afgebeeld op de pagina <b>Recente updates</b> in IBM Connections-community's. ",
		admin_collaboration_activity_stream_ignored_ids: "Informatie over events voor bepaalde gebruikers en groepen negeren:",
		admin_collaboration_activity_stream_ignored_ids_hover: "U kunt opgeven dat events die gegenereerd zijn door bepaalde gebruikers of groepen, zoals beheerders of systeemaccounts, worden genegeerd. Op die manier vermindert u het aantal meldingen dat de gebruikers te zien krijgen. Bijvoorbeeld: als u content migreert, zou u kunnen opgeven dat de events die worden gegenereerd door het account dat voor de migratie wordt gebruikt, genegeerd worden.",
		admin_collaboration_activity_stream_userid: "Gebruikersnaam IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Geef op welk systeemaccount er door Content Platform Engine wordt gebruikt voor de verificatie bij IBM Connections en voor het verzenden van informatie over events naar IBM Connections. Deze gebruiker moet deel uitmaken van de rol <b>trustedExternalApplication</b> in de toepassing Widget Container in IBM Connections.<br><br><b>Tip:</b> Standaard heeft de IBM Connections-beheerder de juiste bevoegdheden. U zou dit beheerders-ID dus als de gebruikersnaam kunnen gebruiken. ",
		admin_collaboration_activity_stream_password: "Gebruikerswachtwoord IBM Connections:",

		admin_help_url: "URL van Help voor eindgebruikers:",
		admin_help_url_hover: "<b>Belangrijke opmerking:</b> IBM Knowledge Center Customer Installed wordt niet bijgewerkt vanaf IBM Content Navigator Versie 3.0.0. Neem contact op met de klantenservice voor meer informatie over het gebruik van aangepaste Help.<br><br>Vanaf IBM Content Navigator Versie 3.0.0, leidt de URL voor Help voor de eindgebruiker naar het IBM Knowledge Center. De URL voor het IBM Knowledge Center is: http://www.ibm.com/support/knowledgecenter.<br><br>Als u een vorige versie van IBM Knowledge Center Customer Installed wilt gebruiken, geef dan de URL op van de instance van IBM Knowledge Center Customer Installed die is geïmplementeerd door de IBM Content Navigator Configuration and Deployment Tool. De URL moet toegankelijk zijn voor clientcomputers. De URL heeft de indeling http://server_naam:poort_nummer/kc.<br><br>U kunt de servernaam en het poortnummer ophalen uit het bestand console.log in de subdirectory KnowledgeCenter/logs van de installatiedirectory van IBM Content Navigator. ",

		admin_help_default: "De standaard Help gebruiken die door IBM geleverd wordt",
		admin_custom_help: "Een aangepast Help-systeem gebruiken",
		admin_help_kc: "Aangepaste Help gebruiken in IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Belangrijke opmerking:</b> IBM Knowledge Center Customer Installed wordt niet bijgewerkt vanaf IBM Content Navigator Versie 3.0.0. Neem contact op met de klantenservice voor meer informatie over het gebruik van aangepaste Help.<br><br>Als u een vorige versie van IBM Knowledge Center Customer Installed wilt gebruiken,  selecteer dan deze optie om door te gaan met het toevoegen van content aan de instance van IBM Knowledge Center Customer Installed die u eerder geïmplementeerd hebt. ",
		admin_help_taxonomy: "Taxonomiecode:",
		admin_help_taxonomy_hover: "Geef de taxonomiecode op voor uw aangepaste Help.<br><br>De taxonomiecode voor IBM Content Navigator is SSEUEX. Als u de Help onder een andere productnaam in IBM Knowledge Center Customer Installed wilt afbeelden, moet u een unieke taxonomiecode toevoegen aan het bestand KC_taxonomy.ditamap in de directory KnowledgeCenter/usr/taxonomy van de installatiedirectory van IBM Content Navigator.",
		admin_help_context: "Help-context:",
		admin_help_context_hover: "Geef de context op voor uw aangepaste Help.<br><br>De Help voor IBM Content Navigator bevindt zich in de directory KnowledgeCenter/usr/content/com.ibm.usingeuc.doc van de installatiedirectory van IBM Content Navigator. De context van de standaard-Help is com.ibm.usingeuc.doc. Als u aangepaste Help wilt leveren, voeg dan de content toe aan een nieuwe subdirectory in de directory KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Landingspagina:",
		admin_help_welcome_hover: "Geef de naam op van het onderwerp dat u wilt gebruiken als landingspagina wanneer gebruikers de Help openen. U moet een eigenschappenbestand maken dat de locatie van de landingspagina aangeeft en dit eigenschappenbestand toevoegen aan de directory KnowledgeCenter/usr/conf van de installatiedirectory van IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Extensies voor MIME-type van JSON-bestand:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Controleer de JSON-bestandsnaam en het volledige  pad naar het bestand. Het bestand kan een algemeen bestand zijn uit het bestandssysteem of een URL die naar het JSON-bestand verwijst. <br><br>De inhoud van het JSON-bestand is een array voor definities van het MIME-type. <br><br>Een definitie van een MIME-type bevat vier sleutels: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". De eerste twee sleutels \"mimeTypes\", \"extensions\" zijn verplicht en kunnen bestaan uit tekenreeksarrays gescheiden door \",\". De laatste twee sleutels, \"fileType\", \"iconName\" zijn optioneel. <br><br>Bijvoorbeeld:<br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuratie van taakbeheer",
		admin_taskmanager_service: "Service voor taakbeheer:",
		admin_taskmanager_service_hover: "Geef aan of u de service voor taakbeheer wilt gebruiken voor het maken en uitvoeren van asynchrone taken. <br><br>Als u deze instelling wijzigt, moet u de IBM Content Navigator-webtoepassing opnieuw starten om de wijzigingen van kracht te laten worden.",
		admin_taskmanager_url: "Service-URL voor taakbeheer:",
		admin_taskmanager_url_hover: "Geef de URL op waarmee andere toepassingen kunnen samenwerken met de taakbeheerservice. De URL heeft de indeling http://servernaam:poortnummer/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Logboekdirectory voor taakbeheer:",
		admin_taskmanager_logdirectory_hover: "Standaard worden de logboekbestanden voor de taakbeheerservice weggeschreven naar dezelfde directory als de logboekbestanden van de webtoepassingenserver. <br><br>Als u wilt dat logboekgegevens worden weggeschreven naar een andere directory op de IBM Content Navigator-server, geeft u het volledige pad van de directory in waar u de logbestanden wilt opslaan die worden gegenereerd door de taakbeheercomponent. <br><br>Als u deze instelling wijzigt, moet u de IBM Content Navigator-webtoepassing opnieuw starten om de wijzigingen van kracht te laten worden.",
		admin_taskmanager_heartBeatMonitor: "Clusterhartslagbewaking",
		admin_taskmanager_heartBeatMonitor_hover: "Alleen voor hoogbeschikbare clusteromgevingen. Als u deze optie inschakelt, zendt de taakbeheerservice taken door vanuit knooppunten die momenteel down zijn naar knooppunten die momenteel actief zijn. <br><br>Als u deze instelling wijzigt, moet u de IBM Content Navigator-webtoepassing opnieuw starten om de wijzigingen van kracht te laten worden.",

		admin_syncserver_title: "Configuratie synchronisatieserver",
		admin_syncserver_enable: "Synchronisatieservices:",
		admin_syncserver_enable_hover: "Geef aan of u wilt dat gebruikers die deze desktop openen, hun items over hun werkstations en mobiele apparatuur kunnen synchroniseren.<br><br><b>Belangrijk:</b> Om deze functie te kunnen gebruiken, moet u ook de volgende taken voltooien:<ul><li>Geef de <b>Openbare URL van synchronisatieservices</b> op in het gedeelte <b>Synchronisatieservices</b> van de beheerfunctie.</li><li>Voeg een repository toe waarvoor synchronisatieservices ingeschakeld zijn voor deze desktop.</li></ul>Als u deze optie uitschakelt maar wel een repository toevoegt waarvoor synchronisatieservices voor deze desktop ingeschakeld zijn, wordt de instelling voor de repository genegeerd.",
		admin_mobileqr_enable: "QR-code voor IBM Navigator afbeelden op de aanmeldingspagina:",
		admin_mobileqr_enable_hover: "Schakel deze optie in als u de QR-code voor de mobiele toepassing van IBM Navigator op de aanmeldingspagina van de webclient wilt afbeelden. <br><br>Als een gebruiker de QR-code scant, wordt hij/zij naar de toepasselijke appstore voor hun apparaat doorgeleid; daar kan de mobiele toepassing van IBM Navigator worden gedownload.",

		admin_streamlineservice_enable: "Edit-service:",
		admin_streamlineservice_enable_hover: "Alleen voor gebruikers van FileNet P8. Schakel deze optie in als u wilt dat desktopgebruikers op eenvoudige wijze hun documenten vanuit native toepassingen op hun werkstations kunnen toevoegen en bewerken. <br><br>Als u deze instelling wilt gebruiken, moet u ook het volgende doen: <ul><li>U moet de edit-service inschakelen voor één of meer repository's die aan deze desktop gekoppeld zijn.</li><li>De IBM Content Navigator Edit-client installeren op de werkstations van gebruikers</li></ul>",

		admin_repository_general_instructions: "U moet verbinding maken met de repository voordat u parameters, systeemeigenschappen, mappen enzovoort configureert.",
		admin_repository_system_instructions: "Geef op welke systeemeigenschappen voor de documenten en mappen in deze repository worden afgebeeld.",

		admin_desktop_general_create_instructions: "Met een desktop wordt bepaald wat de gebruiker kan bekijken en doen als deze zich aanmeldt op de webclient. Nadat u een desktop hebt gemaakt, kunt u de desktop-URL naar gebruikers sturen zodat ze toegang hebben tot de desktop.",
		admin_desktop_admin_instructions: "De beheerdesktop wordt met de webclient geleverd om beheerders in staat te stellen de webclient configureren. Deze desktop heeft toegang tot alle repository's die voor de webclient zijn geconfigureerd.",
		admin_desktop_repositories_instructions: "Geef op tot welke repository's gebruikers toegang moeten hebben vanaf deze desktop. U moet eerst uw repository's configureren voordat u deze kunt toevoegen aan de desktop.<br><br><b>Tip:</b> Het is mogelijk om bij het configureren van de desktoplayout slechts een beperkt aantal repository's beschikbaar te stellen voor elke functie.",
		admin_desktop_menus_instructions: "Geef op tot welke menu's gebruikers toegang moeten hebben vanaf deze desktop. De menu's geven aan welke acties beschikbaar zijn voor hetgeen is geselecteerd in de interface.<br><br><b>Tip:</b> U kunt de inhoud van menu's aanpassen in de sectie <b>Menu's</b> van de beheerfunctie of u kunt nieuwe typen menu's maken door plugins te maken.",

		admin_desktop_no_repositories: "Er zijn geen repository's ingesteld.",

		admin_desktop_id_hover: "Het desktop-ID wordt toegevoegd aan de URL van de webclient en geeft aan welke desktop wordt geopend wanneer een gebruiker zich aanmeldt bij de webclient. Het ID moet uniek zijn, en nadat u de desktop hebt opgeslagen, kunt u het ID niet meer wijzigen. <br><br>Het ID is hoofdlettergevoelig en mag alleen alfanumerieke tekens bevatten.",
		admin_desktop_id_disabled_hover: "Het desktop-ID kan niet worden gewijzigd. Als u een ander ID wilt gebruiken, moet u een nieuwe desktop aanmaken.",
		admin_desktop_name_hover: "In de naam van de desktop mogen de volgende tekens niet voorkomen: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Uw configuratie kan slechts één standaarddesktop bevatten.",

		admin_repository_id_disabled_hover: "Het repository-ID kan niet worden gewijzigd. Als u een ander ID wilt gebruiken, moet u een nieuwe verbinding met de repository maken.",
		admin_printService_enable: "Afdrukken met behulp van de IBM Daeja ViewONE-afdrukservice:",
		admin_printService_enable_hover: "Als u ervoor kiest de IBM Daeja ViewONE-afdrukservice in te schakelen, worden documenten geconverteerd naar PDF-indeling en kunt u het afdrukken in een webbrowser voltooien. <br><br>Als u ervoor kiest de IBM Daeja ViewONE-afdrukservice uit te schakelen, kunt u documenten alleen afdrukken in webbrowsers die Java-applets ondersteunen. Sommige webbrowsers ondersteunen geen Java-applets en ondersteunen daarom ook geen afdrukfuncties via applets.<br><br>Zie de documentatie voor informatie over ondersteunde browsers.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Home-directory gebruiker",
		admin_file_tracking_doc_directory_my_documents: "Documentendirectory gebruiker",
		admin_file_tracking_doc_directory_qp: "Volledig pad",
		admin_file_tracking_section_tile: "Configuratie bestandstracering",
		admin_file_tracking_home_path: "Home-pad",
		admin_file_tracking_my_documents: "Mijn documenten",
		admin_file_tracking_exact_path: "Volledig pad:",
		admin_file_tracking_qp: "Volledig pad",
		admin_file_tracking_ev: "Omgevingsvariabele",
		admin_file_tracking_ev_us: "Aangepaste omgevingsvariabele",
		admin_file_tracking_del_local_copy: "Lokale kopie wissen:",
		admin_file_tracking_yes: "Ja",
		admin_file_tracking_no: "Nee",
		admin_file_tracking_del_local_copy_rt_state_editable: "Gebruikers toestaan deze instelling te negeren",
		admin_file_tracking_del_local_copy_rt_state1: "Ja",
		admin_file_tracking_del_local_copy_rt_state2: "Nee",
		admin_file_Tracking_label: "Bestandstracering:",
		admin_file_Tracking_disable: "Uitschakelen",
		admin_file_Tracking_enable: "Inschakelen",
		admin_file_tracking_label_hover_help: "Bij bestandstracering worden documenten met behulp van een applet uitgecheckt en gedownload naar een bepaalde directory op de computer van de gebruiker. Die applet maakt het bovendien voor IBM Content Navigator mogelijk om documenten op de computer van de gebruiker op te zoeken wanneer de gebruiker documenten incheckt.",
		admin_file_tracking_doc_directory: "Opslaglocatie:",
		admin_file_tracking_open_file: "Bestand automatisch openen",
		admin_file_Tracking_append_qualified_path: "Directory toevoegen",
		admin_file_Tracking_append_qualified_path_hover_help: "Als u wilt dat de documenten worden opgeslagen in een bepaalde subdirectory, kunt u aan het eind van een omgevingsvariabele een directory laten toevoegen. <br/><br/>U kunt bijvoorbeeld opgeven dat de documenten moeten worden gedownload naar een directory <i>EnterpriseDocuments</i> binnen de home-directory van de gebruiker.",
		admin_file_Tracking_append_ev: "Omgevingsvariabele toevoegen",
		admin_file_Tracking_append_ev_hover_help: "Als u wilt dat de documenten worden opgeslagen in een dynamisch opgegeven directory, zoals een gebruikersdirectory, kunt u een omgevingsvariabele laten toevoegen. <br/><br/>U kunt bijvoorbeeld opgeven dat de documenten moeten worden opgeslagen in een directory <i>user_name</i> in een gemeenschappelijke netwerkdirectory.",
		admin_file_tracking_doc_directory_hover_help: "Geef op waar documenten die worden uitgecheckt en gedownload, moeten worden opgeslagen.<br/><br/> <b>Tip</b>: Als u documenten wilt opslaan in de home-directory of standaard documentendirectory van een gebruiker, selecteert dan <b>Omgevingsvariabele</b>. Deze optie bevat vooraf gedefinieerde variabelen die naar deze locaties verwijzen.",
		admin_file_tracking_qualified_path_hover_help: "Gebruik de juiste directorystructuur voor uw besturingssysteem (Windows of Mac) om op te geven in welke directory of netwerkdirectory u documenten wilt opslaan. <ul><li>Voor Windows laat u het pad beginnen met de stationsletter, bijvoorbeeld C:\\Enterprise Documents.</li><li>Voor een gemeenschappelijke netwerkdirectory geeft u een pad op met de indeling \\\\servernaam\\directory</li></ul><br/><b>Belangrijk:</b> Als u deze optie wilt gebruiken, moet de directorystructuur die u opgeeft, kunnen worden gemaakt op alle clientwerkstations in uw omgeving.",
		admin_file_tracking_environment_variable_path_hover_help: "Gebruik de juiste omgevingsvariabelen voor uw besturingssysteem (Windows of Mac) om op te geven in welke directory of netwerkdirectory u documenten wilt opslaan. <br/><br/>Met de optie <b>Home-directory gebruiker</b> worden de documenten opgeslagen in de volgende directory:<br/><ul><li>Windows: C:\\Users\\Gebruikersnaam</li><li>Mac: /Users/Gebruikersnaam</li></ul><br/>Met de optie <b>Documentendirectory gebruiker</b> worden de documenten opgeslagen in de volgende directory:<br/><ul><li>Windows: C:\\Users\\Gebruikersnaam\\Documents</li><li>Mac: /Users/Gebruikersnaam/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Geef op of de lokale kopie van een document wordt gewist op het moment dat een gebruiker dat document maakt of incheckt in de repository.<br/><br/>Het wissen van de lokale kopie maakt het mogelijk om:<br/><ul><li>De naleving van het IT-beleid af te dwingen</li><li>Te garanderen dat de gebruikers met de meest recente versie van het document werken</li></ul><br/><b>Beperking:</b> Deze instelling wordt niet gebruikt wanneer gebruikers documenten toevoegen door ze te verslepen en weer neer te zetten.<br/><br/>Voor IBM Content Navigator for Microsoft Office moet u <b>Lokale bestanden wissen wanneer gebruikers een document toevoegen of inchecken of het uitchecken annuleren</b> selecteren in het gedeelte <b>Office-configuratie</b> van de desktop.",
		admin_file_tracking_open_file_hover_help: "Deze instelling gaat vóór alle voorkeuren voor documentafhandeling die zijn opgegeven in de webbrowsers van de gebruikers. </br></br><b>Beperking:</b> Deze instelling wordt niet gebruikt door IBM Content Navigator voor Microsoft Office.",
		admin_file_tracking_over_write_file: "Lokale kopie overschrijven:",
		admin_file_tracking_over_write_file_hover_help: "Geef op of de lokale kopie van een document wordt overschreven op het moment dat een gebruiker dat document uitcheckt uit de repository.<br/><br/>Het overschrijven van de lokale kopie maakt het mogelijk om:<br/><ul><li>Te garanderen dat de gebruikers met de meest recente versie van het document werken</li><li>Te voorkomen dat de gebruikers een prompt te zien krijgen als er al een lokale kopie aanwezig is</li></ul> </br></br><b>Beperking:</b> Deze instelling wordt niet gebruikt door IBM Content Navigator voor Microsoft Office als u <b>Gebruikers toestaan deze instelling te negeren</b> selecteert.",
		admin_file_tracking_over_write_file_state_editable: "Gebruikers toestaan deze instelling te negeren",
		admin_file_tracking_inline_help: "Bestandstracering stroomlijnt het in- en uitchecken van documenten in en uit de repository. Bovendien wordt het met deze optie mogelijk om op te geven hoe documenten moeten worden opgeslagen op de computers van gebruikers. <br/><br/>Verder wordt het met bestandstracering mogelijk om documenten te traceren in meerdere IBM Content Navigator-componenten, zoals de webclient en IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Voordat u verbinding maakt met de repository, moet u Standaard- of Serververificatie inschakelen.",
		admin_box_use_oauth: "Verificatietype:",
		admin_box_use_oauth_hover: "Als u in een productieomgeving toegang tot Box-documenten verleent vanuit IBM Content Navigator, selecteer dan Standaard- of Serververificatie. Geef waarden op voor client_id en voor OAuth2 client_secret. Die waarden moeten bij deze implementatie van IBM Content Navigator horen. U kunt deze waarden ophalen uit Box, nadat u de Box-toepassing hebt gemaakt voor uw IBM Content Navigator-server.<br/><br/>Selecteer Ontwikkelaarsverificatie in een ontwikkelomgeving. De ontwikkelaars kunnen zich bij Box aanmelden met behulp van hun ontwikkelaarsaccount en een ontwikkelaarstoken genereren dat 60 minuten lang geldig is. Met ontwikkelaarstokens kunnen ontwikkelaars zich bij Box aanmelden met behulp van het ontwikkelaarstoken als wachtwoord voor elk gebruikers-ID.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdomein voor Box-enterpriseaccount:",
		admin_box_share: "Verbindings-ID voor taakbeheer:",
		admin_box_share_hover: "Voor het kopiëren naar Box of het delen met Box maakt taakbeheer gebruik van een beheerder-ID en wachtwoord voor het uitvoeren van taken die wijzigingen in de repository aanbrengen.<br/><br/>Klik op Instellen en meld u bij Box aan met een geldig Box-beheerdersaccount.<br/><br/>Als u een desktop configureert door deze Box-repository als repository voor gedeelde bestanden te selecteren, moet u een Box-beheerder opgeven die een onbeperkte opslagruimte in Box heeft.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Bestand automatisch openen",
		file_tracking_runtime_overwrite_hover_help: "Als u deze optie niet selecteert en er op uw lokale bestandssysteem een document met dezelfde naam aanwezig is, wordt het document wel uitgecheckt maar niet gedownload, behalve als u een van de volgende handelingen uitvoert:<br/><ul><li> Download het document naar een subdirectory van de standaarddirectory. Als u een subdirectory selecteert, kan de locatie van het document door de webtoepassing worden bijgehouden.</li><li>Hernoem het document dat u wilt downloaden. Door het hernoemen wordt een conflict in de bestandsnamen voorkómen.</li></ul>",
		open_file: "Bestand automatisch openen",
		over_write_file: "Lokale kopie overschrijven",
		checkout_and_download_file: "Documenten uitchecken en downloaden",
		download_to_local_directory: "Downloaden naar:",
		checkout_and_download_button_title: "Uitchecken en downloaden",
		checkout_without_java_confirmation_dialog: "Het bestand kan niet worden gedownload en getraceerd met de functie voor bestandstracering.",
		browse_for_directory: "Bladeren",
		selected_documents: "Geselecteerde documenten",

		checkout_without_java_confirmation_text: "Dit probleem kan de volgende oorzaken hebben:<br/><ul><li>De Java Runtime Environment (JRE) is niet aangetroffen op uw werkstation.</li><li>De Java-plugin is niet ingeschakeld in uw webbrowser. </li><li>Uw webbrowser biedt geen ondersteuning aan Java.</li></ul><br/><br/>U kunt dit probleem als volgt oplossen:<br/><br/><ul><li>Als u het downloaden van het bestand wilt voortzetten zonder bestandstracering, klikt u op OK. </li><li>Als u het bestand wilt downloaden terwijl bestandstracering ingeschakeld is, annuleert u het downloadproces en controleert u op de JRE op uw werkstation is geïnstalleerd en of de Java-plugin in uw webbrowser is ingeschakeld.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Het document is wel uitgecheckt en gedownload, maar kan niet worden geopend.",
		runtime_file_tracking_open_error_explanation: "Bestanden van dit type worden niet ondersteund door het besturingssysteem dat op uw werkstation is geïnstalleerd.",
		runtime_file_tracking_open_error_userResponse: "Voer een van de volgende acties uit om dit probleem op te lossen: <br/><br/><ul><li>Als u met het document moet kunnen werken, opent u de webclient op een ander werkstation waarop wel een geschikt besturingssysteem geïnstalleerd is. </li><li>Als u het document alleen hoeft in te zien, klikt u met de rechter muisknop op het document in de webclient en klikt u op Openen.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Het document is wel uitgecheckt, maar is niet gedownload.",
		runtime_file_tracking_save_file_error_explanation: "Op uw lokale bestandssysteem is er een document met dezelfde naam aanwezig, maar dat is niet overschreven.",
		runtime_file_tracking_save_file_error_userResponse: "Als u het bestand wilt downloaden uit de repository, moet u de lokale kopie van het document bij het downloaden overschrijven.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Het document is wel uitgecheckt, maar kan niet worden gedownload of geopend.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Op uw lokale bestandssysteem is er een document met dezelfde naam aanwezig. Dat bestand is echter niet overschreven. Daardoor is het onmogelijk om het bestand uit de repository te downloaden en te openen.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Als u het bestand wilt downloaden uit de repository, moet u de lokale kopie van het document bij het downloaden overschrijven.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Het document kan niet worden gedownload.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "De omgevingsvariabele ${0}, die vereist is voor bestandstracering, is niet gedefinieerd op deze clientcomputer. ",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Het probleem oplossen:<br/><br/><ul><li>Voeg de omgevingsvariabele ${0} toe aan de omgevingsvariabelen van het besturingssysteem.</li><li>Meld u af van de webclient en sluit uw webbrowser. Meld u daarna weer aan.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Het document kan niet worden gedownload en getraceerd met de applet voor bestandstracering.",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "De directory ${0} is vereist voor bestandstracering, maar deze directory is niet gedefinieerd en kan ook niet worden gemaakt.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Om dit probleem op te lossen, voert u de juiste handeling uit:<br/><br/><ul><li>Klik op Bladeren en kies een andere directory op de clientcomputer. Als u deze optie selecteert, wordt het niet getraceerd.</li><li>Vraag of de systeembeheerder een andere directory wil opgeven voor het traceren van bestanden. Dit kan bijvoorbeeld nodig zijn als de opgegeven directory bedoeld is voor Windows terwijl u met Mac OS werkt. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Als deze desktop wordt benaderd vanaf apparaten met een ander besturingssystemen, kunt u de kans op problemen verkleinen door een van de volgende maatregelen te nemen:<br/><br/><ul><li>Geef de opslaglocatie op clientcomputer op met behulp van omgevingsvariabelen. </li><li>Maak voor de gebruikers van elk type apparaat een verschillende desktop. Maak bijvoorbeeld een desktop voor Windows-gebruikers en een andere desktop voor gebruikers van Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Uw aanvraag kan niet verwerkt worden.",
		runtime_file_tracking_generic_error_explanation: "Er is een fout opgetreden in de applet voor bestandstracering.",
		runtime_file_tracking_generic_error_userResponse: "Neem voor hulp contact op met de systeembeheerder.",
		runtime_file_tracking_generic_error_adminResponse: "Open de Java-console en probeer nogmaals om de opdracht in te dienen. De details van de fout worden afgebeeld in de Java-console.<br/><br/>Vanuit het Configuratiescherm (Windows) of de Systeemvoorkeuren (Macintosh) in uw besturingssysteem krijgt u toegang tot de Java-applet.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Uw opdracht kan niet worden verwerkt",
		runtime_file_tracking_cannot_delete_file_error_explanation: "De volgende bestanden zijn toegevoegd aan de repository, maar nog niet verwijderd uit uw lokale bestandssysteem: ${0}. Dit is meestal het geval als de bestanden nog open zijn of worden gebruikt door een andere toepassing. Indien nodig kunt u de bestanden handmatig verwijderen.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Het document kan niet worden gedownload.",
		runtime_file_tracking_ioexception_error_explanation: "Het document kan niet worden gedownload.",
		runtime_file_tracking_ioexception_userResponse: "Mogelijk hebt u niet de juiste machtiging om naar de volgende directory te schrijven: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Controleer u schrijfmachtiging hebt voor de opgegeven directory. Als u nog geen schrijfmachtiging voor de opgegeven directory hebt, neem dan contact op met de systeembeheerder.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Uw aanvraag kan niet verwerkt worden.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Deze fout kan de volgende oorzaken hebben:<br/><br/><ul><li>U gebruikt Safari onder Mac OS en Java wordt in veilige modus uitgevoerd.</li><li>U hebt geen machtigingen voor het lezen/schrijven van de directory die opgegeven is in de configuratie voor bestandstracering voor uw desktop.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "U kunt IBM Content Navigator blijven gebruiken zonder bestandstracering of u kunt de volgende stappen uitvoeren om het probleem op te lossen:<br/><br/><ol><li>Schakel de onveilige modus van Java in Safari in.</li><li>Als u de vraag krijgt of u de website van IBM Content Navigator wilt vertrouwen, klikt u op <b>Vertrouwen</b> om de pagina te laden en schakelt u vervolgens de onveilige modus van Java in Safari in.</li></ol><br/><br/>Als Safari correct is geconfigureerd voert u de volgende stappen uit om het probleem op te lossen:<br/><br/><ol><li>Zorg dat u  machtigingen voor het lezen/schrijven van de directory hebt die opgegeven is in de configuratie voor bestandstracering voor uw desktop.</li><li>Als u geen machtigingen voor het lezen/schrijven van de directory hebt,  bewerkt u de machtigingen voor de directory.</li><li>Als u de machtigingen voor de directory niet kunt wijzigen, moet uw beheerder de directory wijzigen die geconfigureerd is voor bestandstracering of u toegang geven tot een desktop waarvoor een andere bestandstracering geconfigureerd is.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Uw aanvraag kan niet verwerkt worden.",
		runtime_file_tracking_java__notfound_error_explanation: "Dit probleem treedt meestal onder de volgende omstandigheden op:<br/><br/><ul><li>De Java Runtime Environment (JRE) is niet aanwezig of ingeschakeld op uw werkstation.</li><li>De JRE-versie op uw werkstation is niet compatibel met de versie van IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "U kunt IBM Content Navigator blijven gebruiken zonder bestandstracering of u kunt de volgende stappen uitvoeren om het probleem met de JRE op te lossen:<br/><br/><ol><li>Controleer of de JRE op uw werkstation geïnstalleerd is.</li><li>Controleer of de JRE-versie op uw werkstation compatibel is met IBM Content Navigator. Een lijst van ondersteunde versies vindt u in het document <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> op de website van IBM Software Support.</li><li>Controleer of de JRE op uw werkstation ingeschakeld is.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Uw aanvraag kan niet verwerkt worden.",
		runtime_file_tracking_security_error_explanation: "U hebt geen machtigingen voor het lezen/schrijven van de directory die opgegeven is in de configuratie voor bestandstracering voor uw desktop.",
		runtime_file_tracking_security_error_userResponse: "U kunt IBM Content Navigator blijven gebruiken zonder bestandstracering of u kunt samen met de systeembeheerder de volgende stappen uitvoeren:<ol><li>Zorg dat u  machtigingen voor het lezen/schrijven van de directory hebt die opgegeven is in de configuratie voor bestandstracering voor uw desktop. </li><li>Als u geen machtigingen voor het lezen/schrijven van de directory hebt,  bewerkt u de machtigingen voor de directory.</li><li>Als u de machtigingen voor de directory niet kunt wijzigen, moet uw beheerder de directory wijzigen die geconfigureerd is voor bestandstracering of u toegang geven tot een desktop waarvoor een andere bestandstracering geconfigureerd is.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "De volgende documenten zijn gedownload: ${0}.",

		admin_file_tracking_inline_help: "Bestandstracering stroomlijnt het toevoegen aan en het in- en uitchecken van documenten bij de repository. Bovendien wordt het met deze optie mogelijk om op te geven hoe documenten moeten worden opgeslagen op de computers van gebruikers.<br/><br/>Verder wordt het met bestandstracering mogelijk om documenten te traceren in meerdere IBM Content Navigator-componenten, zoals de webclient en IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Het menu-ID mag niet beginnen met \"Default\". \"Default\" is een gereserveerd voorvoegsel voor menu-ID's.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Het ID is hoofdlettergevoelig en mag alleen alfanumerieke tekens bevatten.",
		admin_repository_id_hover: "Het repository-ID wordt opgenomen in webclient-URL's, favorieten en e-maillinks om aan te geven bij welke repository u zich moet aanmelden. Het ID moet uniek zijn, en u kunt het ID niet meer wijzigen nadat u de repository hebt opgeslagen.<br><br>Het ID is hoofdlettergevoelig en mag alleen alfanumerieke tekens bevatten.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "De volgende tekens mogen niet voorkomen in de naam: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "In het desktop-ID mogen geen spaties of een van de volgende tekens voorkomen: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "In de naam van de desktop mogen de volgende tekens niet voorkomen: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "De volgende tekens mogen niet voorkomen in de weergavenaam: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Geef de naam op van de repository die voor gebruikers in de webclient moet worden afgebeeld.<br><br>In de naam mogen de volgende tekens niet voorkomen: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Geef de hostnaam of het IP-adres op van de Content Manager OnDemand-server waarmee u verbinding wilt maken, bijvoorbeeld server.id.com.",
		admin_server_p8_name_hover: "Geef de URL op van de Content Engine-server of de Content Engine Platform-server. De URL is hoofdlettergevoelig en heeft de volgende indeling:<br><br><ul><li>Op WebSphere Application Server, iiop://hostnaam:poortnummer/FileNet/Engine. Het standaardpoortnummer is 2809 op basisimplementaties.</li><li>Op WebLogic Server, t3://host_name:port_number/FileNet/Engine. Het standaardpoortnummer is 7001.</li></ul><br><br>Voor hoogbeschikbare configuraties van Content Engine en Content Platform Engine gebruikt u de URL voor hoogbeschikbaar EJB-transport zonder het voorvoegsel cemp: . ",
		admin_server_p8_protocol_hover: "Geef het protocol op voor de communicatie met Content Engine.  ",
		admin_server_cm_name_hover: "Geef de lokale catalogusnaam op van de Content Manager-database of de naam van de verbinding met de bibliotheekserver. Deze naam is de waarde die is opgegeven voor de ICMSERVER-variabele.",
		admin_repository_cmis_hover: "Geef het ID op van de repository waarmee u verbinding wilt maken. Het ID van elke repository in uw CMIS-omgeving wordt vermeld in het servicedocument voor AtomPub-binding. <br/><br/><b>Tip:</b>U kunt ook een sterretje (*) opgeven om verbinding te maken met de eerste of enige repository die is gedefinieerd het servicedocument voor Atompub-binding.",
		admin_url_cmis_hover: "De notatie van de URL verschilt per serviceprovider.  Raadpleeg voor de URL uw CMIS-documentatie of neem contact op met uw CMIS-serverbeheerder.",
		admin_repcfg_cmis_status_columns_hover: "Geef de itemstatus op waarvan u de pictogrammen wilt laten afbeelden. De statuspictogrammen worden afgebeeld naast documenten in de contentlijst.",
		admin_port_hover: "Geef het TCP/IP-poortnummer op waar de Content Manager OnDemand-server naar luistert. De standaardwaarde is 1445.",
		admin_unified_searches_hover: "Geef aan of u wilt dat gebruikers zoekopdrachten over meerdere repository's in deze repository kunnen opslaan.<br/><br/>Als u deze optie niet inschakelt, kunnen gebruikers nog wel zoekopdrachten over meerdere repository's maken die op deze repository worden uitgevoerd. U kunt voorkomen dat gebruikers zoekopdrachten over meerdere repository's maken op desktopniveau.<br/><br/>Als u zoekopdrachten over meerdere repository's inschakelt, maakt IBM Content Navigator het gegevensmodel voor de zoekopdracht over meerdere repository's in de repository.<br/><br/>Bij IBM FileNet Content Manager moet u een verbinding tot stand brengen als beheerder van Content Engine voordat u deze optie inschakelt.",
		admin_unified_searches_cm_hover: "Geef aan of u wilt dat gebruikers zoekopdrachten over meerdere repository's in deze repository kunnen opslaan.<br/><br/>Als u deze optie niet inschakelt, kunnen gebruikers nog wel zoekopdrachten over meerdere repository's maken die op deze repository worden uitgevoerd. U kunt voorkomen dat gebruikers zoekopdrachten over meerdere repository's maken op desktopniveau.<br/><br/>Als u zoekopdrachten over meerdere repository's inschakelt, maakt IBM Content Navigator het gegevensmodel voor de zoekopdracht over meerdere repository's in de repository.",
		admin_max_results_hover: "Geef op of u het aantal resultaten wilt beperken dat wordt geretourneerd door een zoekactie. Als u het aantal zoekresultaten niet beperkt, kunt u prestatieproblemen ervaren als een zoekactie een groot aantal resultaten retourneert.",
		admin_timeout_hover: "Geef op hoe lang, in seconden, een zoekactie kan worden uitgevoerd op de repository. Als de zoekactie niet binnen de opgegeven tijd kan worden voltooid, annuleert de webclient de opdracht. De aanbevolen maximale timeout is 60 seconden.",
		admin_object_store_hover: "Geef de objectruimte op waarmee u op de Content Engine-server verbinding wilt maken. U kunt de symbolische naam verkrijgen via de beheerconsole van FileNet Platform Engine. ",
		admin_object_store_display_name_hover: "De weergavenaam van de objectruimte wordt vereist als u werkstromen van IBM FileNet P8 wilt gebruiken. U kunt de weergavenaam van de objectruimte ophalen uit de beheerconsole van FileNet Platform Engine.",
		admin_all_searches_hover: "Geef op of het aantal zoekopdrachten dat wordt afgebeeld onder <b>Alle zoekopdrachten</b> moet worden beperkt wanneer gebruikers zoeken in de repository. Als u het aantal zoekopdrachten niet beperkt, ervaart u mogelijk prestatieproblemen als de repository een groot aantal opgeslagen zoekopdrachten bevat.",

		admin_text_desktop: "Desktop",
		admin_text_repository: "Repository",
		admin_text_plugin: "Plugin",
		admin_text_theme: "Thema",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Afschermingsreden",
		admin_text_redactions: "Afschermingen",
		admin_text_viewer_mapping: "Viewertoewijzing",
		admin_text_mobile_feature: "Mobiele functie",
		admin_test_interface_text: "Interfacetekst",
		admin_text_interface_text_locale: "Gelokaliseerde interfacetekst",
		admin_text_icon_status: "Statuspictogram",
		admin_text_icon: "Pictogram",
		admin_text_file_type: "Bestandstype",
		admin_text_viewer: "Lezer",
		admin_text_desktop_access: "Toegang tot desktop",
		admin_text_mapped_properties_for_office: "Toegewezen eigenschappen voor Microsoft Office",
		admin_text_desktop_features: "Desktopfuncties",
		admin_text_unknown: "Onbekend",
		admin_folder_instruction: "Geef de eigenschappen op die worden afgebeeld voor mappen en documenten in de contentlijst als gebruikers bladeren. U kunt ook de volgorde opgeven waarin de eigenschappen worden afgebeeld.",
		admin_search_instruction: "Geef op welke opties standaard worden geselecteerd wanneer gebruikers een zoekopdracht samenstellen.",
		admin_repository_office_conf_class_instruction: "Als er op de clientmachines in uw omgeving IBM Content Navigator for Microsoft Office geïnstalleerd is, kunt u opgeven hoe documenten worden afgehandeld als ze worden toegevoegd aan of ingecheckt bij deze repository.",
		admin_repository_office_conf_instruction: "Wijs documenteigenschappen van Microsoft Office toe aan de eigenschappen die in deze repository zijn gedefinieerd.<br/><br/>Als eigenschappentoewijzing ingeschakeld is voor een desktop waaraan deze repository gekoppeld is, worden de eigenschappen die ingesteld zijn voor Microsoft Office-documenten gebruikt voor het vullen van de eigenschappen in de repository op het moment dat de gebruiker een document van IBM Content Navigator for Microsoft Office toevoegt.",
		admin_repository_office_conf_prop_mapping_title: "Eigenschappentoewijzing",
		admin_repository_office_conf_prop_mapping_title1: "Integratie van MS Office",
		admin_office_conf_instruction: "Bij de installatie van IBM Content Navigator for Microsoft Office op clientcomputers kunt u opgeven hoe IBM Content Navigator moet worden geïntegreerd met Microsoft Office-toepassingen.<br /><br /><b>Belangrijk</b> Als u <b>Office-eigenschappen toewijzen</b> kiest, moet u de eigenschappentoewijzing voor elke repository die bij de desktop hoort eveneens configureren. U kunt de eigenschappentoewijzingen configureren op het tabblad <b>Office-eigenschappen</b>. Dit geldt voor elke repository in uw omgeving.",
		admin_desktop_workflows_instruction: "<b>Alleen IBM FileNet P8-systemen:</b> Geef op welke toepassingsruimten worden afgebeeld in deze desktop. Met de volgorde van de geselecteerde toepassingsruimten wordt de volgorde bepaald waarin de toepassingsruimten worden afgebeeld in de webclient.<br><br><b>Tip:</b> U kunt de weergavenaam van de toepassingsruimten wijzigen door nieuwe namen op te geven in het gedeelte <b>Labels</b> van de beheerfunctie.",
		admin_search_filtered_properties_instruction: "Geef de eigenschappen op waarnaar gebruikers kunnen zoeken. U kunt eigenschappen verbergen waarvan u niet wilt dat gebruikers ernaar zoeken.",
		admin_search_filtered_operators_instruction: "Geef de operators op die beschikbaar zijn wanneer gebruikers zoeken op een bepaald gegevenstype, zoals een datum of een geheel getal. U kunt operators verbergen die gebruikers niet mogen selecteren.",
		admin_search_default_search_results_instruction: "Geef de eigenschappen op die worden afgebeeld voor documenten en mappen in de zoekresultaten. U kunt eigenschappen verbergen die niet mogen worden afgebeeld in de zoekresultaten.",
		admin_search_default_search_results_p8_cmis_instruction: "Geef de eigenschappen op die worden afgebeeld voor documenten in de zoekresultaten. U kunt eigenschappen verbergen die niet mogen worden afgebeeld in de resultaten.",

		admin_datetimeOp: "Datum tijd",
		admin_floatOp: "Getal met drijvende komma",
		admin_integerOp: "Geheel getal",
		admin_stringOp: "Tekenreeks",
		admin_binaryOp: "Binair",
		admin_objectOp: "Object",
		admin_idOp: "ID",
		admin_userOp: "Gebruiker",
		admin_booleanOp: "Booleaans",

		admin_string: "Tekenreeks",
		admin_long: "Lang",
		admin_date: "Datum",
		admin_double: "Dubbel",
		admin_object: "Object",
		admin_guid: "GUID",
		admin_boolean: "Booleaans",

		admin_repcfg_heading: "U kunt het standaardgedrag van deze repository vervangen door de configuratieparameters in te stellen.",
		admin_repcfg_heading_od: "U kunt het standaardgedrag van deze repository vervangen door de configuratieparameters in te stellen.<br /><br /><b>Belangrijk:</b> Om de webclient te kunnen gebruiken met Content Manager OnDemand, moet u ook waarden opgeven voor de parameters op de tab <b>Content Manager OnDemand</b> onder <b>Instellingen</b>; deze zijn van toepassing op alle repository's van Content Manager OnDemand waarmee u verbinding maakt.",
		admin_repcfg_teamspaces: "Beheer van teamruimten:",
		admin_repcfg_enable: "Inschakelen",
		admin_repcfg_disable: "Uitschakelen",

		admin_repcfg_deliver_redacted_pdf_files_as: "Afgeschermde PDF-bestanden worden geleverd als:",
		admin_repcfg_burn_pdf_to_pdf: "PDF-bestanden",
		admin_repcfg_burn_pdf_to_tiff: "TIFF-bestanden",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Een PDF-bestand dat op rollen gebaseerde afscherming bevat, kan aan de client in een andere bestandsindeling worden geleverd. Als de bestandsindeling verandert, veranderen de bestandsextensie en het MIME-type ook. <br><br>Als een PDF-bestand bijvoorbeeld wordt geleverd als een TIFF-bestand, wordt de bestandsextensie gewijzigd in .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Gebruikers toestaan pagina's samen te voegen en te splitsen die gebruik maken van op rollen gebaseerde afscherming",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Selecteer deze optie om gebruikers toe te staan pagina's samen te voegen en te splitsen die gebruik maken van op rollen gebaseerde afscherming. Gebruikers die geen editors voor afscherming zijn, kunnen geen op rollen gebaseerde afscherming bewerken en krijgen geen toegang tot de vertrouwelijke gegevens die gekoppeld zijn aan de op rollen gebaseerde afscherming, zelfs als deze optie ingeschakeld is.",
		admin_repcfg_modify_teamspace_roles: "Eigenaren toestaan de rollen van bestaande teamruimten te wijzigen",
		admin_repcfg_tm_delete_teamspace: "Eigenaren toestaan de teamruimte te wissen, met inbegrip van de inhoud",
		admin_repcfg_tm_delete_teamspace_id_missing: "U moet de gebruikersnaam van een repositorybeheerder opgeven.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "U moet het wachtwoord van de repositorybeheerder opgeven.",
		admin_repcfg_teamspace_display_Recent: "Alleen recentelijk gewijzigde teamruimten afbeelden",
		admin_repcfg_teamspace_display_Recent_value: "Dagen sinds de laatste wijziging:",

		admin_repcfg_folder_selector: "Hoofdmap:",
		admin_repcfg_enable_folder_selector: "Inschakelen",
		admin_repcfg_disable_folder_selector: "Uitschakelen",
		admin_repcfg_SSO: "Enkelvoudige aanmelding:",
		admin_repcfg_teamspace_template_permission_text: "Makers van teamruimtesjabloon toewijzen:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Geef de groepen of gebruikers aan die teamruimtesjablonen kunnen maken. De gebruikers en groepen krijgen de juiste beveiligingsinstellingen voor de vereiste klassen en mappen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Meer informatie</a><br/><br/><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van teamruimtebeheer.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Geef de groepen of gebruikers aan die teamruimtesjablonen kunnen maken. De gebruikers worden toegevoegd aan de toepasselijke toegangslijsten en krijgen de vereiste machtigingen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Meer informatie</a><br/><br/><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van teamruimtebeheer.",
		admin_repcfg_teamspace_permission_text: "Rollen voor teamruimte toewijzen:",
		admin_repcfg_teamspace_permission_hover_p8: "Geef de groepen of gebruikers aan die teamruimten kunnen maken en gebruiken. De gebruikers krijgen de juiste beveiligingsinstellingen voor de vereiste klassen en mappen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Meer informatie</a><br/><br/><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van teamruimtebeheer.",
		admin_repcfg_teamspace_permission_hover_cm: "Geef de groepen of gebruikers aan die teamruimten kunnen maken en gebruiken. De gebruikers worden toegevoegd aan de toepasselijke toegangslijsten en krijgen de vereiste machtigingen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Meer informatie</a><br/><br/><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van teamruimtebeheer.",
		admin_repcfg_entry_template_permission_text: "Rollen voor invoersjabloon toewijzen:",
		admin_repcfg_entry_template_permission_hover_p8: "Geef de groepen of gebruikers aan die invoersjablonen kunnen maken en gebruiken. De gebruikers krijgen de juiste beveiligingsinstellingen voor de documentklasse Invoersjabloon. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Meer informatie</a><br/><br/><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van beheer van invoersjablonen.",
		admin_repcfg_entry_template_permission_hover_cm: "Geef de groepen of gebruikers aan die invoersjablonen kunnen maken en gebruiken. De gebruikers worden toegevoegd aan de toepasselijke toegangslijsten en krijgen de vereiste machtigingen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Meer informatie</a><br /><br /><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van beheer van invoersjablonen.",
		admin_repcfg_office_template_permission_text: "Rollen voor sjablonen toewijzen:",
		admin_repcfg_office_template_permission_hover_cm: "Geef op welke groepen of gebruikers er Microsoft Office Online- of Edit-services kunnen maken, bewerken en gebruiken. De gebruikers worden toegevoegd aan de toepasselijke toegangslijsten en krijgen de vereiste machtigingen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a><br /><br /><b>Aanbeveling:</b> Met groepen kunt u het beheer van invoersjablonen Microsoft Office Online- of Edit Service-sjablonen vereenvoudigen.",
		admin_repcfg_draft_permission_text: "Rollen voor concepten toewijzen:",
		admin_repcfg_draft_permission_hover_cm: "Geef op welke groepen of gebruikers er concepten voor Microsoft Office Online- of Edit Service-documenten kunnen maken tijdens gezamenlijk bewerken. Elke gebruiker die documenten in Microsoft Office Online- of Edit-service gezamenlijk moet kunnen bewerken, moet de desbetreffende bevoegdheden hebben om concepten te maken. De gebruikers worden toegevoegd aan de toepasselijke toegangslijsten en krijgen de vereiste machtigingen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a><br /><br /><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van conceptbeheer.",
		admin_repcfg_search_permission_text: "Zoekrollen toewijzen:",
		admin_repcfg_search_permission_hover_p8: "Geef de groepen of gebruikers op die opgeslagen zoekopdrachten en zoekopdrachten over meerdere repository's kunnen maken of gebruiken. De gebruikers krijgen de juiste beveiligingsinstellingen voor de vereiste klassen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Meer informatie</a><br /><br /><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van zoekbeheer.",
		admin_repcfg_search_permission_hover_cm: "Geef de groepen of gebruikers op die opgeslagen zoekopdrachten en zoekopdrachten over meerdere repository's kunnen maken, bewerken of gebruiken. De gebruikers worden toegevoegd aan de toepasselijke toegangslijsten en krijgen de vereiste machtigingen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Meer informatie</a><br /><br /><b>Aanbeveling:</b> Gebruik groepen voor het vereenvoudigen van zoekbeheer.",
		admin_repcfg_search_permission_title: "Rollen zoeken",
		admin_repcfg_search_permission_intro_text: "Zorg ervoor dat gebruikers toegang hebben tot een desktop die hun rol ondersteunt. Zorg er bijvoorbeeld voor dat makers van zoekopdrachten toegang hebben tot een desktop waarin ze zoekopdrachten en zoekopdrachten over meerdere repository's kunnen maken. ",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Beheerders van teamruimtesjablonen zijn gebruikers met machtigingen voor <b>volledig beheer</b> van de repository (objectruimte). U kunt de lijst van beheerders van teamruimtesjablonen niet wijzigen vanuit de beheerfunctie. <p>Beheerders van teamruimtesjablonen kunnen elke teamruimtesjabloon wissen en wijzigen. De gebruiker die een teamruimtesjabloon maakt, hoeft de sjabloon niet te delen met de beheerders van teamruimtesjablonen.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Als u een gebruiker of groep aanwijst als maker van teamruimtesjablonen, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om teamruimtesjablonen in de repository te maken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Meer informatie</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Gebruikers en groepen waaraan andere machtigingen zijn toegewezen dan de machtigingen die horen bij beheerders en makers.<p>U kunt deze gebruikers en groepen verplaatsen naar de rol Maker van teamruimtesjabloon door ze te verwijderen uit de rol Overigen en vervolgens toe te wijzen als maker van teamruimtesjabloon.<p>U kunt de machtigingen die momenteel aan deze gebruikers en groepen zijn verleend controleren met behulp van de IBM-beheerconsole voor Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Beheerders van teamruimten zijn gebruikers met machtigingen voor <b>volledig beheer</b> van de repository (objectruimte). U kunt de lijst van beheerders van teamruimten niet wijzigen vanuit de beheerfunctie.<p>Beheerders van teamruimten kunnen elke teamruimte wissen en wijzigen. De gebruiker die een teamruimte maakt, hoeft de teamruimte niet te delen met de beheerders van teamruimten.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Als u een gebruiker of groep aanwijst als maker van teamruimten, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om teamruimten in de repository te maken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Meer informatie</a>",
		admin_repcfg_teamspace_user_hover_p8: "Als u een gebruiker of groep aanwijst als gebruiker van teamruimten, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om teamruimten in de repository te gebruiken. Een gebruiker moet echter wel lid zijn van een teamruimte om toegang te krijgen tot de teamruimte. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Meer informatie</a><p><b>Tip:</b> Als u wilt dat alle gebruikers in uw omgeving teamruimten kunnen zien, kunt u het pseudo-account #AUTHENTICATED-USERS toevoegen aan de gebruikersrol van de teamruimte.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Gebruikers en groepen waaraan andere machtigingen zijn toegewezen dan de machtigingen die horen bij beheerders, makers en gebruikers.<p>U kunt deze gebruikers en groepen verplaatsen naar vooraf gedefinieerde rollen door ze te verwijderen uit de rol Overigen en er vervolgens teamruimterollen aan toe te wijzen.<p>U kunt de machtigingen die momenteel aan deze gebruikers en groepen zijn verleend controleren met behulp van de IBM-beheerconsole voor Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Beheerders van invoersjablonen zijn gebruikers met machtigingen voor <b>volledig beheer</b> van de repository (objectruimte). U kunt de lijst van beheerders van invoersjablonen niet wijzigen vanuit de beheerfunctie. <p>Beheerders van invoersjablonen kunnen elke invoersjabloon wissen en wijzigen. De gebruiker die een invoersjabloon maakt, hoeft de sjabloon niet te delen met de beheerders van invoersjablonen. </p>",
		admin_repcfg_entry_template_creators_hover_p8: "Als u een gebruiker of groep aanwijst als maker van invoersjablonen, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om invoersjablonen in de repository te maken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Meer informatie</a>",
		admin_repcfg_entry_template_user_hover_p8: "Als u een gebruiker of groep aanwijst als gebruiker van invoersjablonen, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om invoersjablonen in de repository te gebruiken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Meer informatie</a><p><b>Tip:</b> Als u wilt dat alle gebruikers in uw omgeving invoersjablonen kunnen gebruiken, kunt u het pseudo-account #AUTHENTICATED-USERS toevoegen aan de gebruikersrol voor invoersjablonen.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Gebruikers en groepen waaraan andere machtigingen zijn toegewezen dan de machtigingen die horen bij beheerders, makers en gebruikers.<p>U kunt deze gebruikers en groepen verplaatsen naar vooraf gedefinieerde rollen door ze te verwijderen uit de rol Overigen en er vervolgens invoersjabloonrollen aan toe te wijzen.<p>U kunt de machtigingen die momenteel aan deze gebruikers en groepen zijn verleend controleren met behulp van de IBM-beheerconsole voor Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Als u een gebruiker of groep aanwijst als maker van teamruimtesjablonen, krijgt deze gebruiker of groep de toepasselijke machtigingen om teamruimtesjablonen in de repository te maken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Meer informatie</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Als u een gebruiker of groep aanwijst als maker van teamruimten, krijgt deze gebruiker of groep de toepasselijke machtigingen om teamruimten in de repository te maken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Meer informatie</a>",
		admin_repcfg_teamspace_user_hover_cm: "Als u een gebruiker of groep aanwijst als gebruiker van teamruimten, krijgt deze gebruiker of groep de toepasselijke machtigingen om teamruimten in de repository te gebruiken. Een gebruiker moet echter wel lid zijn van een teamruimte om toegang te krijgen tot de teamruimte. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Meer informatie</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Als u een gebruiker of groep aanwijst als maker van invoersjablonen, krijgt deze gebruiker of groep de toepasselijke machtigingen om invoersjablonen in de repository te maken. <br/><br/>De beveiligingsinstellingen voor een specifiek invoersjabloon bepalen echter welke bevoegdheden de gebruiker of de groep voor de invoersjabloon heeft. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Meer informatie</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Als u een gebruiker of groep aanwijst als editor van invoersjablonen, krijgt deze gebruiker of groep de toepasselijke machtigingen om invoersjablonen in de repository te wijzigen. <br/><br/>De beveiligingsinstellingen voor een specifiek invoersjabloon bepalen echter welke bevoegdheden de gebruiker of de groep voor de invoersjabloon heeft. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Meer informatie</a>",
		admin_repcfg_entry_user_hover_cm: "Als u een gebruiker of groep aanwijst als gebruiker van invoersjablonen, krijgt deze gebruiker of groep de toepasselijke machtigingen om invoersjablonen in de repository te gebruiken. <br/><br/>De beveiligingsinstellingen voor een specifiek invoersjabloon bepalen echter welke bevoegdheden de gebruiker of de groep voor de invoersjabloon heeft. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Meer informatie</a>",
		admin_repcfg_office_template_creators_hover_cm: "Als u een gebruiker of groep aanwijst als maker van Microsoft Office Online- of Edit Service-sjablonen, krijgt deze gebruiker of groep de desbetreffende machtigingen om sjabloonbestanden in de repository te maken. <br/><br/>De beveiligingsinstellingen voor een specifiek sjabloonbestand bepalen echter welke bevoegdheden de gebruiker of de groep voor de sjabloon heeft. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a>",
		admin_repcfg_office_template_editors_hover_cm: "Als u een gebruiker of groep aanwijst als editor van Microsoft Office Online- of Edit Service-sjablonen, krijgt deze gebruiker of groep de desbetreffende machtigingen om sjabloonbestanden in de repository te bewerken. <br/><br/>De beveiligingsinstellingen voor een specifiek sjabloonbestand bepalen echter welke bevoegdheden de gebruiker of de groep voor de sjabloon heeft. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a>",
		admin_repcfg_office_template_user_hover_cm: "Als u een gebruiker of groep aanwijst als gebruiker van Microsoft Office Online- of Edit Service-sjablonen, krijgt deze gebruiker of groep de desbetreffende machtigingen een nieuwe sjabloon toe te passen wanneer hij of zij een nieuw Office Online- of Edit Service-document maakt vanuit de webclient. <br/><br/>De beveiligingsinstellingen voor een specifiek sjabloonbestand bepalen echter welke bevoegdheden de gebruiker of de groep voor de sjabloon heeft.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a>",
		admin_repcfg_draft_creators_hover_cm: "Aan elke gebruiker die documenten in Microsoft Office Online- of Edit-service gezamenlijk moet kunnen bewerken, moet deze rol toegewezen worden. Wijs geen gebruikers toe aan de rol van editor of gebruiker. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a>",
		admin_repcfg_draft_editors_hover_cm: "Aan elke gebruiker die documenten in Microsoft Office Online- of Edit-service gezamenlijk moet kunnen bewerken, moet de rol <b>maker</b> toegewezen worden. Als aan een gebruiker de rol van editor is toegewezen, kan hij/zij geen concepten maken; deze zijn nodig voor het gezamenlijk bewerken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a>",
		admin_repcfg_draft_user_hover_cm: "Aan elke gebruiker die documenten in Microsoft Office Online- of Edit-service gezamenlijk moet kunnen bewerken, moet de rol <b>maker</b> toegewezen worden. Als aan een gebruiker de rol van gebruiker is toegewezen, kan hij/zij geen concepten maken; deze zijn nodig voor het gezamenlijk bewerken.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Meer informatie</a>",		
		admin_repcfg_search_others_hover_p8: "Gebruikers en groepen waaraan andere machtigingen zijn toegewezen dan de machtigingen die horen bij beheerders, makers en gebruikers.<p>U kunt deze gebruikers en groepen verplaatsen naar vooraf gedefinieerde rollen door ze te verwijderen uit de rol Overigen en er vervolgens zoekrollen aan toe te wijzen.<p>U kunt de machtigingen die momenteel aan deze gebruikers en groepen zijn verleend controleren met behulp van de IBM-beheerconsole voor Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Beheerders van zoekopdrachten zijn gebruikers met machtigingen voor <b>volledig beheer</b> van de repository (objectruimte). U kunt de lijst van beheerders van zoekopdrachten niet wijzigen vanuit de beheerfunctie. <br /><br />Beheerders van zoekopdrachten kunnen elke zoekopdracht wissen en wijzigen. De gebruiker die een zoekopdracht maakt, hoeft de zoekopdracht niet te delen met de beheerders van zoekopdrachten. ",
		admin_repcfg_search_creators_hover_p8: "Als u een gebruiker of groep aanwijst als maker van zoekopdrachten, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om zoekopdrachten in de repository te maken. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Meer informatie</a>",
		admin_repcfg_search_user_hover_p8: "Als u een gebruiker of groep aanwijst als gebruiker van zoekopdrachten, krijgt deze gebruiker of groep de toepasselijke beveiligingsinstellingen om zoekopdrachten te gebruiken <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Meer informatie</a>.<br /><br /><b>Tip:</b> Als u wilt dat alle gebruikers in uw omgeving zoekopdrachten kunnen gebruiken, kunt u het pseudo-account #AUTHENTICATED-USERS toevoegen aan de gebruikersrol van de zoekopdracht.<br/><br />Gebruikers van zoekopdrachten kunnen standaard zoekopdrachten (over meerdere repository's) maken, maar deze niet opslaan. U kunt voorkomen dat gebruikers zoekopdrachten maken door ervoor te zorgen dat ze gebruik maken van een desktop waarvoor de volgende opties geselecteerd zijn:<ul><li><b>Verhinderen dat gebruikers zoekopdrachten maken</b></li><li><b>Verhinderen dat gebruikers zoekopdrachten over meerdere repository's maken</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Als u een gebruiker of groep aanwijst als maker van zoekopdrachten, krijgt deze gebruiker of groep de toepasselijke machtigingen om zoekopdrachten in de repository te maken en op te slaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Meer informatie</a><br /><br /><b>Belangrijk:</b> Zorg ervoor dat makers van zoekopdrachten gebruik maken van een desktop waarvoor de volgende opties niet zijn geselecteerd:<ul><li><b>Verhinderen dat gebruikers zoekopdrachten maken</b></li><li><b>Verhinderen dat gebruikers zoekopdrachten over meerdere repository's maken</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Als u een gebruiker of groep aanwijst als editor van zoekopdrachten, krijgt deze gebruiker of groep de toepasselijke machtigingen om bestaande zoekopdrachten (en zoekopdrachten over meerdere repository's) in de repository te wijzigen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Meer informatie</a><br /><br /><b>Tip:</b> editors van zoekopdrachten kunnen standaard zoekopdrachten (over meerdere repository's) maken, maar deze niet opslaan. U kunt voorkomen dat editors zoekopdrachten maken door ervoor te zorgen dat ze gebruik maken van een desktop waarvoor de volgende opties geselecteerd zijn:<ul><li><b>Verhinderen dat gebruikers zoekopdrachten maken</b></li><li><b>Verhinderen dat gebruikers zoekopdrachten over meerdere repository's maken</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Als u een gebruiker of groep aanwijst als gebruiker van zoekopdrachten, krijgt deze gebruiker of groep de toepasselijke machtigingen om opgeslagen zoekopdrachten (en zoekopdrachten over meerdere repository's) in de repository te openen en uit te voeren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Meer informatie</a><br /><br /><b>Tip:</b> gebruikers van zoekopdrachten kunnen standaard zoekopdrachten (over meerdere repository's) maken, maar deze niet opslaan. U kunt voorkomen dat gebruikers zoekopdrachten maken door ervoor te zorgen dat ze gebruik maken van een desktop waarvoor de volgende opties geselecteerd zijn:<ul><li><b>Verhinderen dat gebruikers zoekopdrachten maken</b></li><li><b>Verhinderen dat gebruikers zoekopdrachten over meerdere repository's maken</b></li></ul>",
		admin_repcfg_db_encoding: "Tekencodering serverdatabase:",
		admin_repcfg_db_encoding_hover: "De standaard tekencodering voor een IBM Content Manager-database is UTF-8.",
		admin_repcfg_db_encoding_specify: "Geef de tekencodering van de database op",
		admin_repcfg_db_encoding_utf8: "UTF-8-codering",
		admin_repcfg_db_encoding_utf8_hover: "Geef deze optie op als u een UTF-8-gecodeerde database gebruikt. IBM Content Navigator gebruikt de UTF-8-codering dan voor het controleren van de lengte van tekenreeksen met de waarde van itemeigenschappen.",
		admin_repcfg_db_encoding_other: "Andere codering",
		admin_repcfg_db_encoding_other_hover: "Geef deze optie op als u een database gebruikt met een andere codering dan UTF-8. IBM Content Navigator gebruikt het aantal tekens dan voor het controleren van de lengte van tekenreeksen met de waarde van itemeigenschappen.",
		admin_repcfg_language_codes: "Taalcodes voor server:",
		admin_repcfg_language_codes_avail: "Beschikbaar",
		admin_repcfg_language_codes_sel: "Geselecteerd",
		admin_repcfg_pdf_conversion: "Naar PDF-documenten te converteren MIME-typen in bijlagen:",
		admin_repcfg_pdf_conversion_avail: "Beschikbaar",
		admin_repcfg_pdf_conversion_sel: "Geselecteerd",

		admin_repcfg_box_share_enable_classes_label: "Te wijzigen klassen voor ondersteuning van Box-shares:",
		admin_repcfg_box_share_enable_classes_hover: "U kunt deze klasse wijzigen zodat het ID van het bestand wordt opgeslagen in Box wanneer het item wordt gedeeld.",
		admin_repcfg_box_share_enable_classes_warning: "Belangrijk: Alle klassen die u opgeeft, worden aangepast ter ondersteuning van Box-shares. Nadat u uw wijzigingen hebt opgeslagen, kunnen die wijzigingen niet meer uit de klassen worden verwijderd.<br><br>U moet een verbinding met de repository hebben als bibliotheekserverbeheerder om klassen te kunnen wijzigen.",
		admin_repcfg_box_share_enable_classes_available: "Beschikbare klassen",
		admin_repcfg_box_share_enable_classes_selected: "Geselecteerde klassen",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Box-share-ID opslaan",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Deze klasse is al zodanig gewijzigd dat het ID van de Box-share wordt opgeslagen. Deze optie kan niet worden verwijderd.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Deze klasse wijzigen zodat het ID van het bestand wordt opgeslagen in Box wanneer het item wordt gedeeld.",

		admin_repcfg_redaction: "Afscherming op basis van rol:",
		admin_repcfg_enable_redaction_hover: "Geef op of u rolgebaseerde afscherming wilt gebruiken voor documenten in deze repository.<br/><br/>Afscherming op basis van rol wordt toegepast als een document wordt gedownload, afgedrukt, weergegeven door een viewer of afgebeeld als miniatuur. Wat gebruikers wel of niet te zien krijgen bij het bekijken van het document, is afhankelijk van hun rol en het toepasselijke beleid. ",

		admin_repcfg_redaction_policy_permission_text: "Beleidseditors toewijzen:",
		admin_repcfg_redaction_policy_editors_hover: "Selecteer de gebruikers en groepen die het afschermingsbeleid en de afschermingsrollen definiëren, wijzigen en wissen.",
		admin_repcfg_redaction_policy_editors_select_hover: "Editors van een afschermingsbeleid kunnen het afschermingsbeleid en de afschermingsrollen definiëren, wijzigen en wissen. ",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Beheerders van het afschermingsbeleid kunnen editors voor een afschermingsbeleid toewijzen.<br/><br/>U kunt de lijst van beheerders van het afschermingsbeleid wijzigen met behulp van IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Beheerders van het afschermingsbeleid kunnen editors voor een afschermingsbeleid toewijzen.<br/><br/>U kunt de lijst van beheerders van het afschermingsbeleid wijzigen met behulp van de IBM Content Manager-client voor systeembeheer.",

		admin_repcfg_redaction_permission_text: "Afschermingseditors toewijzen:",
		admin_repcfg_redaction_editors_hover: "Selecteer de gebruikers en groepen die rolgebaseerde afscherming definiëren, wijzigen en wissen. Wanneer u gebruikers en groepen instelt als editor, moet u ze als editor opgeven in het afschermingsbeleid voordat ze rolgebaseerde afscherming kunnen bewerken. ",
   		admin_repcfg_redaction_editors_select_hover: "Afschermingseditors kunnen rolgebaseerde afscherming definiëren, wijzigen en wissen wanneer ze ook als editor worden opgegeven in het afschermingsbeleid.",
   		admin_repcfg_redaction_administrators_hover_p8: "Afschermingsbeheerders kunnen afschermingseditors toewijzen.<br/><br/>U kunt de lijst van afschermingsbeheerders wijzigen met behulp van IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Afschermingsbeheerders kunnen afschermingseditors toewijzen.<br/><br/>U kunt de lijst van afschermingsbeheerders wijzigen met behulp van de IBM Content Manager-client voor systeembeheer.",
		admin_repcfg_entry_template: "Beheer invoersjablonen:",
		admin_repcfg_entry_template_enable_classes_label: "Te wijzigen klassen voor ondersteuning van invoersjablonen:",
		admin_repcfg_oos_reference_attribute_label: "Verwijzingskenmerken voor Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Belangrijk: Alle klassen die u opgeeft, worden aangepast voor de ondersteuning van invoersjablonen. Nadat u uw wijzigingen hebt opgeslagen, kunnen die wijzigingen niet meer uit de klassen worden verwijderd.<br><br>Het is niet mogelijk om de klassen voor een of meer van de volgende doelen te wijzigen:<br><ul><li>Voor het opslaan van het ID van de invoersjabloon die is gebruikt voor het toevoegen van een item, zodanig dat de instellingen van de invoersjabloon worden toegepast wanneer het item wordt gewijzigd</li><li>Alleen hiërarchische mapklassen: Ter ondersteuning koppelingen tussen invoersjablonen</li></ul>U moet een verbinding met de repository hebben als bibliotheekserverbeheerder om klassen te kunnen wijzigen.",
		admin_repcfg_entry_template_enable_classes_warning: "Belangrijk: Alle klassen die u opgeeft, worden aangepast voor de ondersteuning van invoersjablonen. Nadat u uw wijzigingen hebt opgeslagen, kunnen die wijzigingen niet meer uit de klassen worden verwijderd.<br><br>U moet een verbinding met de repository hebben als bibliotheekserverbeheerder om klassen te kunnen wijzigen.",
		admin_repcfg_entry_template_enable_classes_available: "Beschikbare klassen",
		admin_repcfg_entry_template_enable_classes_selected: "Geselecteerde klassen",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "ID invoersjabloon opslaan",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Hiermee wordt deze klasse zodanig gewijzigd dat deze geschikt is voor het opslaan van het ID van de invoersjabloon die is gebruikt voor het toevoegen van een item, zodanig dat de instellingen van de invoersjabloon worden toegepast wanneer het item wordt gewijzigd.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Mapkoppelingen opslaan",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Hiermee wordt deze klasse zodanig gewijzigd dat deze koppelingen (associaties) tussen mappen van invoersjablonen ondersteunt. Deze optie is alleen beschikbaar voor hiërarchische mapklassen.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Deze klasse is al zodanig gewijzigd dat het ID van de invoersjabloon wordt opgeslagen. Deze optie kan niet worden verwijderd.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Deze klasse is al zodanig gewijzigd dat de mapkoppeling wordt opgeslagen. Deze optie kan niet worden verwijderd.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Er kunnen alleen hiërarchische mapklassen en niet-hiërarchische klassen worden gebruikt voor het opslaan van mapkoppelingen.",
		admin_repcfg_entry_template_root_folder_association_title: "Invoersjablonen voor de hoofdmap:",
		admin_repcfg_entry_template_root_folder_association_hover: "Geef op welk invoersjabloon u wilt koppelen aan de de hoofdmap van uw IBM Content Manager-repository.<br /><br />Als u invoersjablonen koppelt aan de hoofdmap en gebruikers voegen items toe aan een hiërarchische map, zal daarvoor altijd een invoersjabloon worden gebruikt.",
		admin_repcfg_entry_template_root_folder_association_button: "Koppelingen instellen",
		admin_repcfg_oos_enable_classes_label: "Te wijzigen klassen voor ondersteuning van Office Online- en Edit-service:",
		admin_repcfg_oos_enable_classes_warning: "Belangrijk: Alle klassen die u opgeeft, worden aangepast om te werken met Microsoft Office Online of Edit Service. Nadat u uw wijzigingen hebt opgeslagen, kan het verwijzingskenmerk dat automatisch aan elke klasse toegevoegd is, niet meer worden verwijderd.<br><br>U moet een verbinding met de repository hebben als bibliotheekserverbeheerder om klassen te kunnen wijzigen.",
		admin_repcfg_oos_enable_classes_available: "Beschikbare klassen",
		admin_repcfg_oos_enable_classes_selected: "Geselecteerde klassen",
		admin_repcfg_oos_enable_classes_note: "Belangrijk:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Deze klasse wordt niet ondersteund in combinatie met Microsoft Office Online- of Edit-service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Het versiebeleid voor de klasse wordt ingesteld op Altijd versies maken. Dit wordt niet ondersteund door Microsoft Office Online- of Edit-service. Selecteer een andere klasse.",
		admin_repcfg_download_recording: "Downloads traceren:",
		admin_repcfg_download_recording_hover: "Standaard worden downloads getraceerd wanneer de Social Collaboration Base Extensions-addon is geïnstalleerd in de repository. Door deze optie uit te schakelen, kunt u de performance van de repository echter verhogen.<br><br>Als u deze optie uitschakelt, zien de gebruikers hoeveel downloads er hebben plaatsgevonden vóórdat de optie werd uitgeschakeld. ",
		admin_repcfg_sync_service: "Synchronisatieservices:",
		admin_repcfg_download_ignored: "Downloads voor bepaalde gebruikers negeren:",
		admin_repcfg_download_ignored_hover: "U kunt opgeven dat de downloads die zijn aangevraagd door bepaalde gebruikers, zoals beheerders of systeemaccounts, worden genegeerd. U krijgt dan een beter beeld van het aantal gebruikers dat een bepaald document heeft gedownload. Als u bijvoorbeeld een bepaald account hebt dat wordt gebruikt voor het downloaden van content ten behoeve van het genereren van een maandelijks rapport, kunt u opgeven dat de downloads die door dat account zijn aangevraagd, genegeerd worden. <br><br><b>Beperking:</b> Het is niet mogelijk om groepen op te geven.",

		admin_repcfg_add_as_major_version: "Toevoegen als hoofdversie:",
		admin_repcfg_enable_add_as_major_version: "Ja",
		admin_repcfg_disable_add_as_major_version: "Nee",
		admin_repcfg_checkin_as_major_version: "Inchecken als hoofdversie:",
		admin_repcfg_enable_checkin_as_major_version: "Ja",
		admin_repcfg_disable_checkin_as_major_version: "Nee",
		admin_repcfg_annotation_security: "Annotatiebeveiliging:",
		admin_repcfg_inherit_annotation_security: "De beveiliging van het bevattende document dupliceren",
		admin_repcfg_default_annotation_security: "De standaard annotatiebeveiliging gebruiken",
		admin_repcfg_connection_point: "Verbindingspunt werkstroom:",
		admin_repcfg_include_workflow_definition: "Werkstroomdefinitieklasse afbeelden:",
		admin_repcfg_include_form_template: "Formuliersjabloonklasse afbeelden:",
		admin_repcfg_enable_include_workflow_definition: "Ja",
		admin_repcfg_disable_include_workflow_definition: "Nee",

		admin_repcfg_status_columns: "Statuspictogrammen:",
		admin_repcfg_status_columns_hover: "Geef de status op waarvan u de pictogrammen wilt laten afbeelden. De statuspictogrammen worden afgebeeld naast documenten, mappen en werkitems in de contentlijst.",
		admin_repcfg_status_columns_documents_or_folders: "Pictogram afbeelden als documenten of mappen:",
		admin_repcfg_status_columns_documents: "Pictogram afbeelden als documenten:",
		admin_repcfg_status_columns_documents_checked_out: "Zijn uitgecheckt",
		admin_repcfg_status_columns_documents_declared_records: "Zijn gedeclareerd als records",
		admin_repcfg_status_columns_documents_minor_versions: "Kleine versies hebben",
		admin_repcfg_status_columns_documents_compound_document: "Samengestelde documenten zijn",
		admin_repcfg_status_columns_documents_bookmarks: "Bladwijzers hebben",
		admin_repcfg_status_columns_documents_hold: "In de wachtrij staan",
		admin_repcfg_status_columns_documents_notes: "Opmerkingen hebben",
		admin_repcfg_status_columns_work_items: "Een pictogram afbeelden als werkitems:",
		admin_repcfg_status_columns_work_items_locked: "Zijn vergrendeld",
		admin_repcfg_status_columns_work_items_checked_out: "Zijn uitgecheckt",
		admin_repcfg_status_columns_work_items_deadline: "Een deadline hebben",
		admin_repcfg_status_columns_work_items_suspended: "Zijn onderbroken voor verwerking",

		admin_repcfg_afp2pdf_config_file: "Configuratiebestand AFP2PDF:",
		admin_repcfg_transform_xml_file: "Aangepast conversiebestand:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Inschakelen",
		admin_repcfg_disable_ssl: "Uitschakelen",
		admin_repcfg_keyringdb_file: "Databasebestand sleutelring:",
		admin_repcfg_keyringstash_file: "Stashbestand sleutelring:",
		admin_repcfg_od_sso: "Enkelvoudige aanmelding",
		admin_repcfg_od_enable_sso: "Inschakelen",
		admin_repcfg_od_disable_sso: "Uitschakelen",
		admin_repcfg_od_sso_password: "Wachtwoord",
		admin_repcfg_advanced_label: "Geavanceerd",
		admin_repcfg_custom_properties_label: "Aangepaste eigenschappen:",
		admin_repcfg_new_button_label: "Nieuw",
		admin_repcfg_edit_button_label: "Bewerken",
		admin_repcfg_delete_button_label: "Wissen",
		admin_repcfg_custom_head1: "Naam",
		admin_repcfg_custom_head2: "Waarde",
		admin_repcfg_ecpdialog_title_new: "Nieuwe aangepaste eigenschap",
		admin_repcfg_ecpdialog_title_edit: "Aangepaste eigenschap bewerken",
		admin_repcfg_ecpdialog_name: "Naam:",
		admin_repcfg_ecpdialog_value: "Waarde:",
		admin_repcfg_ecpdialog_save: "Opslaan",
		admin_repcfg_ecpdialog_create: "Maken",
		admin_repcfg_ecpdialog_cancel: "Annuleren",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Deze waarde is vereist. De waarde mag geen spaties bevatten en moet uniek zijn.",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP-codering gebruiken:",

		admin_repcfg_task_mgr_proxy: "Verbindings-ID voor taakbeheer:",
		admin_repcfg_task_mgr_proxy_hover: "Voor het delen van Box of het wissen van een teamruimte maakt taakbeheer gebruik van een beheerder-ID en wachtwoord om taken uit te voeren die wijzigingen in de repository aanbrengen.<br><br>Klik op Instellen en meld u bij de repository aan met een geldig beheerdersaccount en wachtwoord voor de repository.",
		admin_task_manager_not_enabled_warning: "Deze optie vereist de service voor taakbeheer, maar deze service is niet ingeschakeld.  U kunt de service voor taakbeheer voor alle desktops inschakelen op de pagina Algemeen van Instellingen.",
		admin_task_manager_not_enabled_and_user_warning: "Deze optie vereist de service voor taakbeheer, maar deze service is niet ingeschakeld. Op deze pagina stelt u het verbindings-ID voor taakbeheer in, waarna u op de pagina Algemeen van Instellingen de taakbeheerservice inschakelt voor alle desktops.",
		admin_task_manager_user_id_pw_not_set_warning: "Deze optie vereist de service voor taakbeheer, samen met een beheerders-ID en wachtwoord. Op deze pagina stelt u het verbindings-ID voor taakbeheer in.",
		admin_repcfg_teamspaces_delete_task_id: "Repositorybeheerder:",
		admin_repcfg_teamspaces_delete_task_password: "Wachtwoord:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "U moet een ID van een bibliotheekserverbeheerder opgeven om de taakbeheerservice in staat te stellen een teamruimte van de repository te wissen.",
		admin_repcfg_teamspaces_delete_task_hover: "Als een gebruiker een teamruimte wist, wordt de teamruimte standaard verborgen. Alle mappen en documenten in de teamruimte blijven in de repository. <br /> <br />Als u deze optie inschakelt, blijven alleen de documenten die in andere mappen in de repository aanwezig zijn in de repository.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Als er een groot aantal teamruimten aanwezig is in uw omgeving, kan het lang duren voordat al die teamruimten op het tabblad <b>Teamruimten</b> worden afgebeeld. Als u deze optie selecteert, duurt het korter om de lijst te vullen. <br /><br />Als een gebruiker met een teamruimte buiten het door u opgegeven bereik moet werken, kan die gebruiker de desbetreffende teamruimte vinden met behulp van het veld <b>Filter</b>.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Als u deze optie selecteert, kunnen gebruikers die de rol van eigenaar van een teamruimte hebben de rollen wijzigen die horen bij teamruimten die gemaakt zijn vóór IBM Content Navigator, Versie 2.0.2.<br /><br />Deze optie heeft geen effect op teamruimten die gemaakt zijn met IBM Content Navigator, Versie 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Geef aan of u wilt dat gebruikers teamruimten en teamruimtesjablonen kunnen maken in deze repository.<br /><br /><b>Belangrijk:</b> De repository moet ondersteuning bieden aan hiërarchische mappen. <br /><br />Als u het werken met teamruimten inschakelt, maakt IBM Content Navigator het gegevensmodel voor teamruimten in de repository. Dat gegevensmodel bevat ACL-objecten, bevoegdheden, bevoegdhedensets en twee nieuwe itemtypen.",
		admin_repcfg_folder_selector_hover: "Selecteer de map die u wilt gebruiken als hoofdmap wanneer gebruikers bladeren naar documenten. Als u geen hiërarchische mappen hebt geconfigureerd in uw repository, kunt u met deze instelling bladeren ondersteunen door een hoofdmap te definiëren. Als u hiërarchische mappen hebt geconfigureerd op uw repository, vervangt deze instelling de hoofdmap die in de repository geconfigureerd is.",
		admin_repcfg_cm_use_sso_hover: "Geef op of enkelvoudige aanmelding moet worden toegestaan voor gebruikers met de machtigingenset Trusted Logon.<br /><br /><b>Belangrijk:</b> Enkelvoudige aanmelding moet worden ingeschakeld op de Content Management-server en WebSphere Application Server moet worden geconfigureerd voor LTPA zodat deze configuratieparameter werkt.",
		admin_repcfg_cm_direct_retrieve_hover: "Rechtstreeks ophalen wordt standaard ingeschakeld omdat de webclient hiermee  snel content uit de resourcemanager kan ophalen. <br /><br />U kunt deze optie uitschakelen als u niet wilt dat de clienttoepassing direct toegang heeft tot resourcebeheer, of als u een firewall of proxyserver hebt waardoor de webclient geen directe toegang heeft tot resourcebeheer via URL's. Met een firewall kan bijvoorbeeld worden voorkomen dat gebruikers documenten bekijken in de appletviewer wanneer rechtstreeks ophalen wordt ingeschakeld.",
		admin_repcfg_cmItemTypesToDisplay: "Als u niet wilt dat gebruikers de itemtypen resources en items op uw IBM Content Manager-server kunnen zien, kunt u alleen de itemtypen voor documentmodellen afbeelden. De itemtypen worden afgebeeld als gebruikers zoekopdrachten maken, documenten toevoegen  en mappen maken.",
		admin_repcfg_cm_language_codes_hover: "Geef de talen op waarin gegevens moeten worden teruggezonden vanaf de Content Management-server. De lijst met beschikbare talen wordt bestuurd door de lijst met taaldefinities op de server.<br /><br /><b>Onthoud:</b> Gegevens in de webclient worden afgebeeld in de taal die is ingesteld in de webbrowser van de gebruiker.",
		admin_repcfg_cm_pdf_conversion_hover: "Geef de documenttypen op die moeten worden geconverteerd naar PDF wanneer een gebruiker een document verzendt met meerdere gedeelten als e-mailbijlage. Alle gedeelten worden gecombineerd tot een enkel PDF-document.",
		admin_repcfg_use_teamspaces_p8_hover: "Geef aan of u wilt dat gebruikers teamruimten en teamruimtesjablonen kunnen maken in deze repository.<br /><br />Als u het werken met teamruimten inschakelt, maakt IBM Content Navigator het gegevensmodel voor teamruimten in de repository. Het gegevensmodel omvat eigenschappensjablonen, aangepaste objecten, een mapobject en diverse mappen.",
		admin_repcfg_use_entry_template_p8_hover: "Geef aan of u wilt dat gebruikers vanuit IBM Content Navigator invoersjablonen kunnen maken en beheren in deze repository. Als u deze functie inschakelt, kunnen de gebruikers naar invoersjablonen zoeken die al aanwezig zijn in de repository, en deze invoersjablonen gebruiken.<br /><br />Als u het beheer van invoersjablonen mogelijk maakt, werkt IBM Content Navigator het gegevensmodel voor invoersjablonen in de repository bij. De update omvat nieuwe eigenschappen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Meer informatie</a>",
		admin_repcfg_use_entry_template_cm_hover: "Geef aan of u wilt dat gebruikers vanuit IBM Content Navigator invoersjablonen kunnen maken en beheren in deze repository. <br /><br />Als u het beheer van invoersjablonen mogelijk maakt, maakt IBM Content Navigator het gegevensmodel voor invoersjablonen in de repository. Het gegevensmodel omvat een nieuw ACL-object, nieuwe eigenschappen en een nieuw itemtype. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Meer informatie</a>",
		admin_repcfg_sync_service_p8_hover: "Geef aan of u wilt dat gebruikers hun favoriete items over hun werkstations en mobiele apparatuur  kunnen synchroniseren.<br><br><b>Belangrijk:</b> Om deze functie te kunnen gebruiken, moet u ook de volgende taken voltooien:<br><ul><li>Geef de <b>Openbare URL van synchronisatieservices</b> op in het gedeelte <b>Synchronisatieservices</b> van de beheerfunctie.</li><li>Voeg deze repository toe aan een desktop waarvoor synchronisatieservices ingeschakeld zijn.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Geef op of de optie hoofdversie standaard wordt ingeschakeld wanneer gebruikers documenten toevoegen aan de repository.<br /><br />Gebruikers kunnen deze optie uitschakelen als ze het document willen toevoegen als een kleine versie.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Geef op of de optie hoofdversie standaard wordt ingeschakeld wanneer gebruikers documenten inchecken bij de repository.<br /><br />Gebruikers kunnen deze optie uitschakelen als ze het document willen inchecken als een kleine versie.",
		admin_repcfg_p8_annotation_security_hover: "Geef op welk type beveiliging standaard moet worden toegepast op aantekeningen.<br /><br />Gebruikers hebben de optie om de beveiliging van de aantekeningen te wijzigen.",
		admin_repcfg_p8_connection_point_hover: "Als u werkstromen van IBM FileNet P8 wilt gebruiken, selecteert u een verbindingspunt van Process Engine. Het verbindingspunt dat u selecteert bepaalt welke werkstromen beschikbaar zijn voor de gebruikers die toegang hebben tot deze repository.",
		admin_repcfg_p8_include_workflow_definition_hover: "Als u de documentklasse voor werkstroomdefinities van IBM FileNet P8 in de webclient afbeeldt, kunnen gebruikers werkstroomdefinities zoeken en aan de repository toevoegen.",
		admin_repcfg_p8_include_form_template_hover: "Als u de documentklasse voor formuliersjablonen van IBM FileNet P8 in de webclient afbeeldt, kunnen gebruikers formuliersjablonen zoeken en aan de repository toevoegen.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Geef het volledige pad van het AFP2PDF-configuratiebestand op voor deze repository op de webtoepassingenserver. De AFP2PDF-conversie is vereist om AFP-gegevens af te beelden en af te drukken.<br /><br /><b>Onthoud:</b> AFP2PDF Transform moet zijn geïnstalleerd om deze parameter te gebruiken.",
		admin_repcfg_od_transform_xml_file_hover: " Als u een aangepaste conversie gebruikt om Content Manager OnDemand te converteren, geeft u het volledige pad van het XML-bestand op dat wordt gebruikt om de transformatie te definiëren. Het XML-bestand moet zich bevinden op de webtoepassingenserver.",
		admin_repcfg_od_ssl_hover: "Geef op of SSL moet worden gebruikt voor het versleutelen van de communicatie tussen een IBM Content Navigator-toepassingenserver en de Content Manager OnDemand-bibliotheekserver en objectservers.<br /><br /><b>Belangrijk:</b> Als u SSL inschakelt voor Content Manager OnDemand, heeft dit geen betrekking op de communicatie tussen de IBM Content Navigator-toepassingenserver, webserver of werkstations van gebruikers.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Geef het volledige pad van het databasebestand voor de sleutelring op voor deze repository op de webtoepassingenserver. Bijvoorbeeld: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Het sleutelring-databasebestand bevat uw betrouwbare hoofdcertificaten. Om ongewenste toegang tot dit bestand te voorkomen, dient u gebruik te maken van sterke bescherming van het bestandssysteem.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Geef het volledige pad van het stashbestand voor de sleutelring op voor deze repository op de webtoepassingenserver. Bijvoorbeeld: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Het sleutelring-stashbestand bevat het wachtwoord voor het sleutelring-databasebestand. Om ongewenste toegang tot dit bestand te voorkomen, dient u gebruik te maken van sterke bescherming van het bestandssysteem.",
		admin_repcfg_od_sso_password_hover: "Geef op welk wachtwoord moet worden gebruikt voor enkelvoudige aanmelding met de OnDemand-server.",
		admin_repcfg_od_custom_properties_hover: "Met de Java-API van ODWEK worden aangepaste eigenschappen ondersteund. Als u de aangepaste eigenschappen wilt gebruiken bij het maken van een verbinding met de repository via de webclient, geeft u de namen en waarden van de aangepaste eigenschappen op.<br /><br />Voor meer informatie over ondersteunde aangepaste eigenschappen, raadpleegt u de Javadocs voor de Java-APO van ODWEK. Deze bevinden zich in de subdirectory /api in de installatiedirectory van ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Voer de naam van de eigenschap in.",
		admin_repcfg_od_custom_properties_value_hover: "Voer de waarde van de eigenschap in.",
		admin_repcfg_od_use_sso_hover: "Geef op of enkelvoudige aanmelding moet worden toegestaan voor gebruikers.<br /><br /><b>Belangrijk:</b> Enkelvoudige aanmelding moet worden ingeschakeld op de Content Management OnDemand-server zodat deze configuratieparameter werkt.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Gebruik GZIP-codering voor deze CMIS-bron.",
		admin_repcfg_cm_use_part_file_name: "Bestandsnaam die wordt gebruikt voor het downloaden van documenten:",
		admin_repcfg_cm_use_part_file_name_help: "Geef aan hoe de bestandsnamen van documenten worden vastgesteld op het moment dat gebruikers documenten downloaden.",
		admin_repcfg_cm_use_part_file_name_enable: "De bestandsnaam gebruiken",
		admin_repcfg_cm_use_part_file_name_disable: "De naam van het item in de repository gebruiken",
		admin_repcfg_add_doc_name: "Standaardnaam voor een toegevoegd document:",
		admin_repcfg_add_doc_name_hover: "Gebruikers kunnen de naam wijzigen voordat het document wordt toegevoegd.",
		admin_repcfg_add_doc_name_empty: "Geen (blanco)",
		admin_repcfg_add_doc_name_file_name: "De bestandsnaam van het geselecteerde document",

		admin_repcfg_compound_documents: "Functies voor samengestelde documenten:",
		admin_repcfg_compound_documents_hover: "Hiermee schakelt u de functies voor samengestelde P8-documenten in. ",
		admin_repcfg_cm_action_list_config_enabled: "Actielijst voor werkitem:",
		admin_repcfg_cm_action_list_config_hover: "Als u documentroutering configureert in de systeembeheerclient van Content Manager kunt u een lijst van acties opgeven die een gebruiker met werkitems kan uitvoeren.<br /><br />Schakel deze optie in als u de actielijst van de Content Manager-server wilt gebruiken. Deze instellingen worden gebruikt in het contextmenu en in het venster Eigenschappen bewerken voor het werkitem.<br /><br /><b>Belangrijk:</b> De instellingen in de actielijst vervangen eventuele aangepaste menu's die u in de beheerfunctie van Content Navigator configureert. Als er geen instellingen in de actielijst aanwezig zijn, kan de gebruiker geen acties op werkitems ondernemen.",

		admin_repcfg_box_share: "Delen in Box",
		admin_repcfg_box_share_p8_hover: "Hiermee kunnen gebruikers een document in deze repository delen. Voor het delen van een document wordt het bestand gekopieerd naar Box, wordt een link gemaakt en wordt deze link per e-mail verzonden.<br /><br />Als u Box-share inschakelt, maakt IBM Content Navigator het gegevensmodel van de Box-share voor de repository. Voor het installeren van de addon voor de IBM Content Navigator Box-share moet u met de repository verbonden zijn als beheerder van een bibliotheekserver.",

		admin_menu_type_icon: "Pictogram voor menutype",
		admin_menu_toolbar_hover: "Werkbalk",
		admin_menu_toolbar_custom_hover: "Aangepaste werkbalk",
		admin_menu_contextMenu_hover: "Contextmenu",
		admin_menu_contextMenu_custom_hover: "Aangepast contextmenu",

		admin_menu_contextMenu_custom_empty: "Er zijn geen aangepaste contextmenu's gedefinieerd in de geconfigureerde plugins.",
		admin_menu_toolbar_custom_empty: "Er zijn geen aangepaste werkbalken gedefinieerd in de geconfigureerde plugins.",

		admin_file_type_category_filters: "Filters voor bestandstypen:",
		admin_file_type_category_filters_hover_help: "Geef de lijst van bestandstypen op die in de volgende situaties door gebruikers kunnen worden gebruikt:<ul><li>Voor het beperken van de lijst van resultaten bij het zoeken of bladeren in IBM Content Navigator for Microsoft Office<li>Voor het beperken van de lijst van resultaten bij het doorzoeken van IBM FileNet P8-repository in de webclient<li>Voor het beperken van de typen bestanden die bij gebruik van een invoersjabloon door gebruikers kunnen worden toegevoegd aan de repository</ul>",
		admin_file_type_only_use_in_et_folder_association: "Alleen afbeelden in koppelingen van invoersjabloonmappen",
		admin_office_config_properties_label: "Office-eigenschappen",
		admin_office_config_type_label: "Gegevenstype",
		admin_office_config_mapped_property_label: "Repository-eigenschap",
		admin_office_config_properties_hover_help: "Voeg de naam toe van elke Microsoft Office-eigenschap die u wilt koppelen aan een repository-eigenschap. Het gegevenstype moet gelijk zijn voor alle eigenschappen.",
		admin_office_config_mapped_property_hover_help: "Als u de Office-eigenschappen wilt toewijzen aan meerdere repository-eigenschappen, moet u een nieuwe eigenschappentoewijzing maken",
		admin_new_property_mapping_title: "Nieuwe eigenschappentoewijzing",
		admin_property_mapping_title: "Eigenschappentoewijzing bewerken",
		admin_property_mapping_instruction: "Geef de Microsoft Office-eigenschappen op die u wilt toewijzen aan een eigenschap van de repository. Het gegevenstype van de Office-eigenschappen moet overeenkomen met het gegevenstype van de eigenschap voor de repository. <br /><br />Als een Office-document meerdere eigenschappen heeft uit de toewijzing, gebruikt IBM Content Navigator de eerste eigenschap in de lijst voor het invullen van de eigenschap voor de repository.",
		admin_ms_general_settings: "Algemene configuratie:",
		admin_ms_delete_local_settings: "Lokale bestanden wissen als gebruikers:",
		admin_ms_outlook_options: "Integratie met Outlook:",
		admin_ms_enable_props_mapping: "Office-eigenschappen toewijzen aan repository-eigenschappen wanneer gebruikers:",
		admin_ms_open_doc_when_checkout: "Automatisch een document uitchecken wanneer het wordt geopend",
		admin_ms_open_doc_when_checkout_hover_help: "Door het selecteren van deze optie verhindert u dat de gebruiker het bestand in de repository kan overschrijven met een oudere versie van het bestand.",
		admin_ms_prompt_close_office: "Gebruikers vragen documenten in te checken als ze Office-toepassingen afsluiten",
		admin_ms_prompt_close_office_hover_help: "Met deze optie voorkomt u dat gebruikers vergeten om hun werk in te checken.",
		admin_ms_add_with_entry_template_only: "Alleen de actie Toevoegen met Sjabloon afbeelden",
		admin_ms_delete_local_on_add: "Lokale bestanden wissen wanneer gebruikers documenten toevoegen",
		admin_ms_delete_local_on_checkin: "Lokale bestanden wissen wanneer gebruikers documenten inchecken of het uitchecken annuleren",
		admin_ms_delete_local_on_add_hover_help: "Wanneer een gebruiker een document toevoegt in IBM Content Navigator for Microsoft Office, wordt het document toegevoegd aan de repository en blijft de lokale versie van het document geopend, zodat gebruikers het document meteen kunnen uitchecken om wijzigingen aan te brengen.<br /><br />Selecteer deze optie om de lokale versie van het document automatisch te sluiten en te wissen nadat het document is toegevoegd aan de repository.",
		admin_ms_delete_local_on_checkin_hover_help: "Wanneer een gebruiker een document incheckt in IBM Content Navigator for Microsoft Office, wordt het document ingecheckt in de repository en blijft de lokale versie van het document geopend. Ook na het gebruik van de optie Uitchecken annuleren blijft de lokale versie van het document geopend. Wanneer de lokale versie geopend is, kunnen gebruikers meteen het document weer uitchecken om wijzigingen aan te brengen.<br /><br />Selecteer deze optie om de lokale versie van het document automatisch te sluiten en te wissen nadat een document is ingecheckt of nadat de actie Uitchecken annuleren is gebruikt.",
		admin_ms_delete_local_on_save: "Een document opslaan",
		admin_ms_prompt_for_props_on_add: "Gebruikers vragen om waarden van eigenschappen op te geven wanneer zij e-mails toevoegen aan de repository",
		admin_ms_prompt_for_props_on_add_hover_help: "Als u deze optie niet selecteert, maakt de webclient gebruik van de Outlook-eigenschappentoewijzing die is gedefinieerd voor de repository.<br /><br />Als er invoersjablonen zijn gekoppeld aan de map waaraan de e-mails worden toegevoegd, wordt de gebruiker mogelijk niet gevraagd om eigenschappen.",
		admin_ms_delete_email_on_add: "E-mail wissen op de e-mailserver wanneer de e-mail wordt toegevoegd aan de repository",
		admin_ms_send_email_as_link_only: "Verhinderen dat gebruikers documenten verzenden als bijlagen",
		admin_ms_send_email_as_link_only_hover_help: "Als u deze optie selecteert, kunnen gebruikers documenten alleen verzenden als koppelingen vanuit Outlook. Deze optie zorgt ervoor dat alleen gebruikers met de juiste machtigingen voor de repository documenten kunnen bekijken.",
		admin_ms_enable_prop_mapping_for_add: "Office-eigenschappen toewijzen aan repository-eigenschappen wanneer gebruikers documenten toevoegen of inchecken",
		admin_ms_checkout_document_after_add: "Documenten automatisch uitchecken nadat deze zijn toegevoegd aan de repository",
		admin_no_default_document_type_filtering: "Standaard alle documenttypen afbeelden als gebruikers zoekopdrachten uitvoeren",
		admin_no_default_document_type_filtering_hover_help: "Het standaardgedrag in IBM Content Navigator for Microsoft Office is dat de gebruiker bij het uitvoeren van zoekopdrachten alleen de documenttypen voor de huidige toepassing te zien krijgt. Als de gebruiker bijvoorbeeld een zoekopdracht uitvoer vanuit Microsoft Word, is het documenttype Word standaard geselecteerd.<br/><br/>Als u deze optie selecteert, worden de selectievakjes voor Documenttypen echter uitgeschakeld, zodat de gebruiker alle documenten ziet die bij de zoekopdracht worden gevonden. De gebruiker kan deze instelling overschrijven door vóór het uitvoeren van de zoekopdracht een of meer documenttypen te selecteren. ",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Geef aan of de documenteigenschappen die zijn gedefinieerd voor Microsoft Office-documenten moeten worden toegewezen aan de eigenschappen die zijn gedefinieerd voor de repository.<br /><br /><b>Belangrijk:</b> Als u deze functie inschakelt, moet u de Office-eigenschappen configureren voor elke repository in uw omgeving. Als u de Office-eigenschappen niet toewijst aan uw repository-eigenschappen, werkt deze functie niet.<br /><br />Deze instelling is niet van toepassing voor Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Selecteer deze optie voor het verkleinen van het aantal stappen dat gebruikers moeten ondernemen om te kunnen werken met documenten nadat de documenten zijn toegevoegd aan de repository.<br /></br /><b>Tip:</b> Om ervoor te zorgen dat gebruikers de bestanden weer inchecken in de repository, selecteert u <b>Gebruikers vragen documenten in te checken als ze Office-toepassingen afsluiten</b>.",
		admin_ms_show_details_recently_used: "Details van <b>Recent gebruikt</b> item afbeelden",
		admin_ms_show_details_recently_used_hover_help: "Wanneer u de lijst van Recent gebruikte items weergeeft, worden de details van items standaard verborgen zodat meer items kunnen worden afgebeeld. Als u deze optie selecteert in de lijst van Recent gebruikte opties, worden standaard de details voor het eerste document afgebeeld in het deelvenster met details.",
		admin_ms_show_no_permissions_warning: "Waarschuwingen afbeelden wanneer gebruikers eigenschappen bewerken of een document inchecken, zonder dat zij zijn gemachtigd voor het bekijken van de invoersjabloon van het document",
		admin_ms_show_no_permissions_warning_hover_help: "Als een document in de repository is gemaakt met een invoersjabloon, maar de gebruiker niet is gemachtigd voor het bekijken van de invoersjabloon van het document, wordt de invoersjabloon niet opgehaald.<br /><br/>Wanneer de gebruiker de documenteigenschappen wijzigt, worden daardoor de eigenschappen afgebeeld zonder gebruik te maken van de invoersjabloon. Wanneer de gebruiker het document incheckt, wordt dit ook niet gedaan met behulp van de invoersjabloon.<br /><br />Deze acties treden standaard op zonder dat de gebruiker wordt geïnformeerd dat niet wordt gewerkt met de invoersjabloon. In het logboek wordt alleen een waarschuwing vastgelegd.<br /><br />Selecteer deze optie als u waarschuwingen wilt laten afbeelden waarmee de gebruiker meteen wordt geïnformeerd dat de invoersjabloon niet wordt gebruikt.",
		admin_ms_hide_search_actions: "Sectie met zoekfilters samenvouwen",
		admin_ms_hide_search_actions_hover_help: "Standaard kunnen gebruikers een actiefilter toepassen voor het opgeven van een actie, gebruiker of groep gebruikers en daarbij een datum of periode selecteren voor wanneer de actie is opgetreden. U kunt bijvoorbeeld alleen zoeken naar documenten die vorige maand zijn toegevoegd.<br /><br />Als u niet wilt toestaan dat gebruikers actiefilters toepassen, selecteert u deze optie om de actiefilters te verbergen en om een kleiner aantal velden af te beelden voor het definiëren van zoekcriteria.",
		admin_ms_hide_save_document: "De optie <b>Opslaan</b> in de lintbalk verbergen",
		admin_ms_hide_save_document_hover_help: "Gebruikers kunnen met de optie <b>Opslaan</b> wijzigingen in documenten in de repository opslaan zonder het document in te checken.",
		admin_ms_indicate_managed_email_on_add: "Aangeven of er al een e-mail aan de repository is toegevoegd",
		admin_ms_indicate_managed_email_on_add_hover_help: "Als u deze optie selecteert, wordt aan de gebruikers gemeld dat er al een e-mail in de repository aanwezig is. Daardoor hoeft er in bepaalde gevallen minder vaak een e-mail aan de repository te worden toegevoegd. Als deze optie wordt geselecteerd, wordt er in Microsoft Outlook een nieuwe kleurcategorie gemaakt, met de naam IBM ECM. Elke e-mail die aan de repository wordt toegevoegd, wordt automatisch toegevoegd aan de categorie Beheerd in IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Opties voor Toevoegen in de groep Bewerken:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Geef op welke opties voor <b>Toevoegen</b> er beschikbaar zijn in de groep <b>Bewerken</b> op de werkbalk:<ul><li>Selecteer <b>Alle opties voor Toevoegen afbeelden</b> als u wilt dat de knop Toevoegen wordt afgebeeld, plus alle acties die beschikbaar zijn in de groep Bewerken. </li><li>Selecteer <b>Alle opties voor Toevoegen verbergen</b> om te voorkomen dat de gebruikers documenten aan de repository toevoegen of om ervoor te zorgen dat de gebruikers alleen documenten kunnen toevoegen vanuit een teamruimte. </li><li>Selecteer <b>Actie Toevoegen met Sjabloon verbergen</b> als koppelingen van de map voor invoersjablonen wilt afdwingen en wilt voorkomen dat de gebruikers een andere invoersjabloon selecteren. </li><li>Selecteer <b>Alleen actie Toevoegen met Invoersjabloon afbeelden</b> als u wilt dat de gebruikers verplicht zijn om documenten toe te voegen met behulp van invoersjablonen.</li></ul>",
		admin_ms_show_edit_group_add_button: "Alle opties voor Toevoegen afbeelden (standaard)",
		admin_ms_hide_edit_group_add_button: "Alle opties voor Toevoegen verbergen",
		admin_ms_hide_add_with_entry_template: "Actie Toevoegen met Sjabloon verbergen",
		admin_ms_managed_in_ecm: "Beheerd in IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Als gebruikers categorieën afbeelden in Microsoft Outlook, wordt dit label afgebeeld voor e-mail die toegevoegd was aan een repository van IBM Content Manager of IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "In de naam van de categorie Beheerd in IBM ECM mogen geen komma's (,) of puntkomma's (;) voorkomen.",
		admin_delete_open_docs_after_close: "Geopende documenten automatisch wissen wanneer gebruikers die documenten sluiten",
		admin_admin_delete_open_docs_after_close_hover_help: "Als een gebruiker een document opent in IBM Content Navigator for Microsoft Office, wordt het gedownload naar de documentendirectory van die gebruiker of naar de locatie die is ingesteld voor de bestandstracering voor de desktop.<br><br>Selecteer deze optie als u wilt dat de bestanden die open zijn maar niet zijn uitgecheckt, worden gewist wanneer de gebruikers de desbetreffende documenten sluiten. Gebruik deze optie om:<ul><li>De naleving van het IT-beleid af te dwingen</li><li>Te garanderen dat de gebruikers met de meest recente versie van het document werken</li><li>De voor de opslag van documenten vereiste hoeveelheid opslag te verminderen</li><ul>",
		admin_ms_custom_command_configuration: "Aangepaste opdrachten:",
		admin_ms_custom_command_configuration_hover_help: "U kunt maximaal vier opdrachten toevoegen aan de werkbalk van IBM Content Navigator for Microsoft Office in Microsoft Office-toepassingen. De opdrachten kunnen worden gebruikt voor het openen van URL's. U kunt bijvoorbeeld een opdracht toevoegen voor het openen van een service die kan worden gebruikt voor het zoeken naar gebruikers en groepen.",
		admin_ms_custom_command_dialog_title: "Aangepaste opdracht bewerken",
		admin_ms_custom_command_dialog_intro_text: "Definieer een opdracht die kan worden gebruikt voor het openen van een URL vanaf de werkbalk van IBM Content Navigator for Microsoft Office in Microsoft Office-toepassingen.",
		admin_ms_custom_command_id: "Opdracht ${0}",
		admin_ms_custom_command_available_label: "Beschikbaar",
		admin_ms_custom_command_available_hover_help: "Als de URL die voor een opdracht is gedefinieerd, offline moet worden gehaald ten behoeve van onderhoud, heft u de selectie van het vakje voor de opdracht op, zodat de opdracht niet meer wordt afgebeeld in Microsoft Office.<br/><br/><b>Belangrijk:</b> Eventuele wijzigingen worden pas zichtbaar in IBM Content Navigator for Microsoft Office nadat de gebruiker zich heeft afgemeld van de desktop.",
		admin_ms_custom_command_command_id_label: "Opdracht-ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Label",
		admin_ms_custom_command_label_hover_help: "Geef het label op in Microsoft Office moet worden afgebeeld voor de opdracht.",
		admin_ms_custom_command_description_label: "Beschrijving",
		admin_ms_custom_command_description_hover_help: "Geef de beschrijving op die in Microsoft Office moet worden afgebeeld voor de opdracht.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Geef de volledige URL op voor het openen vanuit Microsoft Office. Dit kan de URL van een webpagina of een service zijn.",
		admin_ms_custom_command_icon_label: "Pictogram",
		admin_ms_custom_command_icon_hover_help: "Geef de bestandsnaam op van het pictogram dat moet worden afgebeeld, bijvoorbeeld CommandIcon.png.<br/><br/><b>Belangrijk:</b> U moet het pictogrambestand op elke clientmachine in de subdirectory Plugins van de installatiedirectory van IBM Content Navigator for Microsoft Office plaatsen. <br/><br/>Als het bestand niet in de directory Plugins staat of als u geen pictogram opgeeft, wordt het standaardpictogram afgebeeld: customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Groepslabel:",
		admin_ms_custom_command_group_name_hover_help: "U kunt een groepslabel opgeven dat in de werkbalk wordt afgebeeld onder de aangepaste opdrachten. <br/><br/>Als u geen groepslabel opgeeft, is het groepslabel <b>Aangepaste opdrachten</b>.",
		admin_ms_ribbon_tab_label: "Label voor IBM ECM-tab:",
		admin_ms_ribbon_tab_hover_help: "Typ de naam die moet worden afgebeeld voor de tab IBM Content Navigator for Microsoft Office in de werkbalk van Microsoft Office. Als u geen naam opgeeft, krijgt de tab de naam \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Taakvenster sluiten als gebruikers documenten openen",
		admin_ms_close_task_pane_on_open_hover_help: "Selecteer deze optie als u de ruimte waarin de gebruikers documenten zien in Microsoft Office maximaal wilt vergroten.<br/><br/>Gebruikers van Microsoft Office 2010 opgelet: Om te zorgen dat het taakvenster wordt gesloten voor alle documenten, moet u de MDI-modus (multiple document interface) openen door op <b>Opties</b> &gt; <b>Geavanceerd</b> te klikken en de selectie van de optie <b>Alle vensters in de taakbalk afbeelden</b> ongedaan te maken.",
		admin_ms_open_document_options: "Opties voor openen van documenten:",
		admin_ms_delete_local_file_options: "Opties voor wissen van lokale bestanden:",
		admin_ms_add_and_checkin_options: "Opties voor toevoegen en inchecken:",
		admin_ms_search_options: "Zoekopties:",
		admin_ms_display_options: "Weergaveopties:",
		admin_ms_bidirection_enable_label: "Ondersteuning voor bidirectionele tekst inschakelen",
		admin_ms_bidirection_enable_hover_help: "Selecteer deze optie als u gebruikers in staat wilt stellen tekst in IBM Content Navigator for Microsoft Office in te voeren of te bekijken die een andere richting heeft dan van links naar rechts. ",
		admin_ms_text_direction_label: "Basis tekstrichting voor content:",
		admin_ms_text_direction_hover_help: "Geef de richting op waarin tekst wordt ingevoerd in invoervelden in IBM Content Navigator for Microsoft Office. Deze instelling bepaalt ook hoe items zoals mapnamen of waarden van eigenschappen afgebeeld worden. ",
		admin_ms_control_threshold_label: "Minimumaantal items voor inschakelen van look-ahead:",
		admin_ms_control_threshold_hover_help: "Look-ahead wordt standaard ingeschakeld wanneer het aantal items groter dan of gelijk is aan 50, voor het zoeken of instellen van eigenschappen met vooraf gedefinieerde waarden in een vervolgkeuzelijst. U kunt deze minimumwaarde wijzigen.",

		admin_ms_default_email_class: "Klasse die wordt gebruikt voor het toevoegen van e-mail",
		admin_ms_default_email_class_hover_help: "Alle e-mail die vanuit Microsoft Outlook aan deze repository wordt toegevoegd, wordt toegevoegd aan de klasse die u opgeeft. Gebruikers kunnen de klasse niet wijzigen.",
		admin_ms_default_folder_class: "Klasse die wordt gebruikt bij het maken van mappen",
		admin_ms_default_folder_class_hover_help: "Elke map die vanuit Microsoft Office in deze repository wordt gemaakt, wordt toegevoegd aan de klasse die u opgeeft. Gebruikers kunnen de klasse niet wijzigen.",
		admin_ms_default_folder_warn_title: "Het is niet mogelijk om de klasse ${0} te gebruiken als klasse voor het maken van mappen.",
		admin_ms_default_folder_warn_name_prop_invalid: "De naameigenschap van de klasse is geen tekenreeks, en de naam van de map moet een tekenreeks zijn.<br />Selecteer een andere klasse die moet worden gebruikt bij het maken van mappen of vraag aan de beheerder van IBM Content Manager of deze de naameigenschap van de klasse wil veranderen in een tekenreeks.",
		admin_ms_default_folder_warn_req_props: "De klasse bevat een of meer verplichte eigenschappen die geen waarde hebben. De gebruikers kunnen echter geen waarde voor die verplichte eigenschappen opgeven wanneer ze mappen maken vanuit IBM Content Navigator for Microsoft Office.<br />Selecteer een andere klasse die moet worden gebruikt bij het maken van mappen of vraag aan de beheerder van IBM Content Manager of deze de verplicht eigenschappen ofwel optioneel wil maken, ofwel een initiële waarde wil geven.",
		admin_ms_delimiter_for_office_properties: "Scheidingsteken voor tekenreekseigenschappen met meerdere waarden",
		admin_ms_delimiter_for_office_properties_hover_help: "Geef op welk teken moet worden gebruikt als scheidingsteken voor tekenreekseigenschappen die u toewijst aan tekenreekseigenschappen met meerdere waarden. Standaard kunt u een set waarden aan een tekenreekseigenschap met meerdere waarden toewijzen met behulp van een puntkomma (;) als teken voor het scheiden van de waarden. Als een van uw tekenreekswaarden echter een puntkomma bevat, kunt u die waarde niet toevoegen, tenzij u een ander scheidingstelen instelt. U kunt het scheidingsteken bijvoorbeeld wijzigen in een komma (,)",
		admin_ms_outlookPropertyRemembrance : "Instellingen onthouden bij toevoegen van berichten en bijlagen",
		admin_ms_outlookPropertyRemembrance_hover_help : "De eigenschapswaarden, locatie, gekozen klasse en beveiliging die zijn toegewezen aan de berichten en bijlagen, worden onthouden en worden gebruikt als standaardinstellingen wanneer er in de toekomst items worden toegevoegd. ",

		admin_file_type_name_hover_help: "Voorgrond-Help voor Naam",
		admin_file_type_description_hover_help: "Voorgrond-Help voor Beschrijving",
		admin_file_type_dialog_title: "Bestandstypefilter bewerken",
		admin_new_file_type_dialog_title: "Nieuw bestandstypefilter",
		admin_mobile_feature_dialog_title: "Functie",
		admin_mobile_feature_dialog_new_title: "Nieuwe functie",
		admin_file_type_instructions: "Maak een filter waarmee gebruikers hun lijst van zoekresultaten kunnen beperken. U kunt meerdere MIME-typen toewijzen aan het filter.",
		admin_file_type_filter_place_holder: "MIME-typen filteren",
		admin_new_button_label: "Nieuw",
		admin_edit_button_label: "Bewerken",
		admin_delete_button_label: "Wissen",
		admin_copy_button_label: "Kopiëren",
		admin_verify_button_label: "Controleren",
		admin_availabe_filters_label: "Beschikbare filters",
		admin_selected_filters_label: "Geselecteerde filters",

		admin_mobile_access: "Toegang tot mobiele toepassing:",
		admin_mobile_access_hover_help: "Als u wilt dat IBM Content Navigator kan worden gebruikt op een mobiel apparaat, wordt aanbevolen dat u gebruikers in staat stelt deze desktop te openen via de mobiele toepassing.<br /><br />Als u toegang tot deze desktop via de mobiele toepassing uitschakelt, hebben gebruikers nog steeds toegang tot de webclient via hun mobiele browsers. De webclient is echter niet ontworpen voor toegang vanaf mobiele apparaten.",

		admin_mobile_access_allow_label: "Gebruikers toestaan het volgende te doen:",
		admin_mobile_allow_add_photos: "Foto's toevoegen via de camera en fotobibliotheek",
		admin_mobile_allow_add_docs: "Documenten toevoegen en mappen maken voor de repository",
		admin_mobile_allow_open_docs: "Documenten openen in andere toepassingen",
		admin_mobile_allow_add_docs_hover_help: "Gebruikers kunnen hiermee mappen maken of documenten toevoegen via andere mobiele toepassingen, zoals een document dat een bijlage is van een e-mail.",
		admin_mobile_allow_open_docs_hover_help: "Gebruikers wordt gevraagd de toepassing te selecteren om het geselecteerde document mee af te beelden. Als slechts één toepassing beschikbaar is, wordt die gebruikt.",
		admin_mobile_features: "Functies:",
		admin_mobile_features_hover_help: "Geef aan welke functies van deze desktop moeten worden weergegeven in de mobiele toepassing van IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nieuwe functie",
		admin_mobile_move_up_button_label: "Omhoog verplaatsen",
		admin_mobile_move_down_button_label: "Omlaag verplaatsen",
		admin_desktop_mobile_instructions: "Hier komen instructies voor mobiele instellingen",
		admin_desktop_max_number_of_docs_to_add: "Maximumaantal toe te voegen documenten:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Geef de maximumhoeveelheid documenten aan die per keer door gebruikers kunnen worden toegevoegd. De standaard maximumwaarde is 50. U kunt een maximum tot 300 opgeven.",
		admin_desktop_max_number_of_docs_to_modify: "Maximumaantal items dat gewijzigd kan worden:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Geef de maximumhoeveelheid items aan die per keer door gebruikers kunnen worden gewijzigd. De standaard maximumwaarde is 50. U kunt een maximum tot 300 opgeven.",
		admin_desktop_max_conversion_size: "Maximumhoeveelheid gegevens voor PDF-conversies (in MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Beperking:</b> Deze instelling wordt niet ondersteund bij IBM Content Manager OnDemand.<br/><br/>Geef de maximale hoeveelheid gegevens op die kan worden geconverteerd naar PDF. Deze limiet geldt ook wanneer gebruikers items als PDF-bestand downloaden of items via e-mail als PDF-bestand verzenden.<br /><br />Als de grootte van elk document niet kan worden vastgesteld, worden de documenten nog wel geconverteerd naar PDF.<br/><br/>De standaardlimiet is 200 MB. Als u de limiet boven 200 MB instelt, kan dit nadelig uitpakken voor de systeemprestaties. ",
		admin_desktop_timeProperties: "Tijdsaanduiding:",
		admin_desktop_time_properties_hover_help: "<b>Alleen voor gebruikers van IBM FileNet P8:</b> Deze instelling is van toepassing op aangepaste eigenschappen en is niet van toepassing op de systeemeigenschappen. Voor de eigenschap Gewijzigd door wordt bijvoorbeeld nog steeds het tijdsgedeelte van de tijdsaanduiding afgebeeld als u <b>Alleen het datumgedeelte van de tijdsaanduiding afbeelden</b> kiest.<br/><br/>Deze instelling is niet van invloed op de tijdsaanduiding in de repository.",
		admin_desktop_disable_time_stamp: "De volledige tijdsaanduiding afbeelden",
		admin_desktop_enable_time_stamp: "Alleen het datumgedeelte van de tijdsaanduiding afbeelden",
		admin_desktop_timezone: "Tijdzone:",
		admin_desktop_timezone_localuser: "De lokale tijdzone van de gebruiker afbeelden",
		admin_desktop_timezone_alluser: "Dezelfde tijdzone voor alle gebruikers afbeelden",
		admin_desktop_timezone_hover_help: "U kunt opgeven of gebruikers een tijdsaanduiding te zien krijgen die is gebaseerd op hun lokale tijdzone of dat alle gebruikers dezelfde tijdsaanduiding zien.<br/><br/>Deze instelling is niet van invloed op de tijdsaanduiding in de repository. De instelling die u selecteert bepaalt echter wel de tijdzone die wordt gebruikt voor het maken van de tijdsaanduiding in de repository wanneer gebruikers items toevoegen of wijzigen.",
		admin_desktop_mobile_feature_display_label: "Weergave",
		admin_desktop_mobile_feature_icon_file_label: "Pictogrambestand",
		admin_mobile_feature_dialog_icon_file_label: "Pictogrambestand:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Naam",
		admin_desktop_mobile_select_feature_label: "Functie selecteren",
		admin_desktop_mobile_feature_icon_label: "Functiepictogram",
		admin_desktop_share_admin_none: "Beheerder is niet ingesteld.",
		admin_desktop_share_admin_edit_label: "Beheerder instellen...",
		admin_browse_icon: "Bladeren naar pictogram",
		admin_search_icon: "Pictogram zoeken",
		admin_favorites_icon: "Favorieten-pictogram",
		admin_casesearch_icon: "Zaakpictogram",
		admin_datacap_icon: "Datacap-pictogram",
		admin_system_defined: "Vooraf gedefinieerd",
		admin_icon_file_placeholder_text: "Bestandslocatie (d.i. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Hoofdmap",
		admin_folder_default: "Standaard",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Werkbalken",
		admin_menu_context_menus: "Contextmenu's",
		admin_menu_office_toolbars: "Opdrachten op lintwerkbalk van Microsoft Office",
		admin_menu_office_menus: "Contextmenu's van Microsoft Office",

		admin_file_name_label: "Bestandsnaam:",
		admin_exportconfiguration_security_label: "Gebruikers en groepen opnemen die gemachtigd zijn voor gebruik van deze desktop",
		admin_exportconfiguration_instruction: "U kunt uw desktops, inclusief de repositoryconfiguraties en pluginconfiguraties die aan de geselecteerde desktops gekoppeld zijn, exporteren naar een bestand en dat importeren bij een andere instance van IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Desktop exporteren",
		admin_exportconfiguration_button_label: "Exporteren",
		admin_dialog_select_all: "Alles selecteren",
		admin_dialog_deselect_all: "Alles wissen",

		admin_importconfiguration_instruction: "De items in het geselecteerde configuratiebestand worden naar dit systeem geïmporteerd. Als een item met hetzelfde ID echter al op het systeem aanwezig is, dient u te beslissen of u het wilt bewaren of overschrijven.",
		admin_importconfiguration_dialog_label: "Desktop importeren",
		admin_importconfiguration_reason_dialog_label: "Afschermingsredenen importeren",
		admin_importconfiguration_button_label: "Importeren",
		admin_to_be_imported: "Configuratie-item dat geïmporteerd wordt",
		admin_on_target_system: "Bestaand item op het doelsysteem",
		admin_import_short_warning_message: "De volgende items bestaan al op dit systeem. Selecteer de items die u op dit systeem wilt vervangen:",
		admin_import_warning_message: "De volgende configuratie-items hebben ID's van items die al op het doelsysteem aanwezig zijn. Selecteer alleen de items die u wilt importeren en op het doelsysteem wilt overschrijven.<br /><br />Als u een configuratie-item niet wilt overschrijven, maak dan een kopie van het item op de instance waaruit u de desktop exporteert, geeft het een ander ID en koppel dit aan de desktop. Exporteer de desktop nogmaals en importeer de desktop dan op deze instance.",
		admin_choose_file_to_import_label: "Te importeren bestand:",
		admin_download_imported_log: "Rapport downloaden",
		admin_desktop_import_summary: "Overzicht van importeren van desktop",
		admin_reason_import_summary: "Overzicht van importeren afschermingsredenen",
		admin_rba_import_summary: "Overzicht van importeren beheerdersrollen",
		admin_import_open_tabs_checking: "Voordat u desktops kunt importeren, moet u alle andere tabs dan de tab <bold>Desktops</bold> in de beheertool sluiten.",
		admin_import_no_conflict: "De volgende items worden geïmporteerd:",
		admin_desktop_invalid: "Ongeldige desktop",
		admin_desktop_warning: "De desktop is opgeslagen. Er zijn waarschuwingen.",
		admin_repos_warning: "De repository is opgeslagen. Er zijn waarschuwingen.",
		admin_config_type_icon: "Pictogram voor Type configuratie-item",

		admin_approval_workflow: "Goedkeuringswerkstroom",
		admin_approval_workflow_hover: "Hiermee kunnen gebruikers een vooraf gedefinieerde goedkeuringswerkstroom starten. U kunt deze goedkeuringswerkstroom uitschakelen. De gebruikers kunnen dan een aangepaste, door een abonnement gedefinieerde goedkeuringswerkstroom starten. Standaard is de goedkeuringswerkstroom ingeschakeld.<br><br><b>Belangrijk:</b> Als de goedkeuringswerkstroom ingeschakeld is, moet u ervoor zorgen dat minimaal één van de twee vooraf gedefinieerde werkstroomdefinities (ICNParallelDocumentApproval.pep en ICNSequentialDocumentApproval.pep) toegevoegd is aan de repository en is overgebracht naar de Content Process Engine.",

		admin_cannot_add_desktop_members_error: "U kunt niet opgeven welke gebruikers en groepen er toegang hebben tot deze desktop.",
		admin_cannot_add_desktop_members_error_explanation: "U moet over de juiste machtigingen beschikken om informatie over gebruikers en groepen op te halen.",
		admin_cannot_add_desktop_members_error_userResponse: "Meld u aan met een andere gebruikersnaam of vraag aan de systeembeheerder van IBM Content Manager of deze u de bevoegdheid UserACLOwner wil verlenen. Dit is de bevoegdheid die u nodig hebt om informatie over gebruikers en groepen op te halen.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "U kunt geen gebruikers en groepen selecteren.",
		admin_cannot_select_users_groups_error_explanation: "U moet over de juiste machtigingen beschikken om informatie over gebruikers en groepen op te halen.",
		admin_cannot_select_users_groups_error_userResponse: "Meld u aan met een andere gebruikersnaam of vraag aan de systeembeheerder van IBM Content Manager of deze u de bevoegdheid UserACLOwner wil verlenen. Dit is de bevoegdheid die u nodig hebt om informatie over gebruikers en groepen op te halen.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "De OAuth2-client is niet gevonden.",
		oauth_client_not_found_error_explanation: "Het OAuth2-client-ID ${0} is niet gevonden.",
		oauth_client_not_found_error_userResponse: "Neem contact op met uw systeembeheerder en laat deze weten dat het OAuth2-client-ID niet is gevonden.",
		oauth_client_not_found_error_adminResponse: "Controleer de configuratie van de repository en ga na of het correcte OAuth2-client-ID erin aanwezig is.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "De aanmelding bij de repository is mislukt.",
		oauth_login_failed_error_explanation: "Een poging om aan te melden bij de repository ${0} is mislukt.",
		oauth_login_failed_error_userResponse: "Controleer of uw gebruikers-ID en wachtwoord correct zijn en probeer opnieuw u aan te melden.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Fout bij het aanmelden bij ${0}.",
		oauth_error_return_error_explanation: "De poging tot autorisatie voor ${0} is mislukt.",
		oauth_error_return_error_userResponse: "Waarschuw de systeembeheerder en geef de volgende gegevens door: De poging tot autorisatie voor ${0} is mislukt en het volgende foutbericht is geretourneerd: <br>${1}<br><b>fout:</b> ${2}.<br><b>beschrijving:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Aanvullende informatie over de fout vindt u in de logbestanden van de webtoepassingenserver. Zie voor meer informatie over de logbestanden &quot;IBM Content Navigator log files&quot; in IBM Knowledge Center. Probeer aan de hand van informatie over de autorisatiepoging voor ${0} het probleem te corrigeren en controleer of OAuth2 ingeschakeld is.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth-doeltoepassing",
		oauth_error_return_error_1: "fout_bericht",
		oauth_error_return_error_2: "fout",
		oauth_error_return_error_3: "fout_beschrijving",

		oauth_error_unknown: "Niet-herkend OAuth-foutbericht.",

		delete_share_permission_error: "De share is niet gewist.",
		delete_share_permission_error_explanation: "U beschikt niet over de juiste machtigingen om de share te wissen.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "U kunt dit item niet delen.",
		class_not_support_share_error_explanation: "De klasse ${0} is niet ingesteld voor het ondersteunen van gemeenschappelijk gebruik.",
		class_not_support_share_error_0: "klassennaam",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "U kunt dit item niet delen.",
		rbr_not_support_share_error_explanation: "Er is vertrouwelijke content aan het item toegevoegd.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Het apparaat waarmee de gebruiker zich probeert aan te melden is niet geautoriseerd voor toegang tot het gebruikersaccount.",
		box_oauth_error_invalid_request: "Er ontbreekt een verplichte parameter in de opdracht,  hij bevat een ongeldige parameterwaarde, een parameter is er meer dan één keer in aanwezig of de opdracht is anderszins onjuist ingedeeld.",
		box_oauth_error_unsupported_response_type: "De machtigingsserver biedt geen ondersteuning voor het verkrijgen van een machtigingscode met deze methode.  Controleer de waarde van de codeparameter in uw opdracht.",
		box_oauth_error_access_denied: "De resource-eigenaar of de autorisatieserver heeft de opdracht geweigerd.",
		box_oauth_error_temporarily_unavailable: "Uw apparaat heeft een snelheidslimiet; u moet het tempo van uw autorisatieopdrachten verminderen of even wachten.",
		box_oauth_error_unknown: "Niet-herkend Box-foutbericht.",

		admin_default_search_type: "Standaard zoektype",
		admin_default_search_type_hover: "Geef op welke optie standaard wordt geselecteerd in het veld <b>Zoeken naar</b> in het menu <b>Zoekopties</b>.",
		admin_default_search_type_documents: "Documenten",
		admin_default_search_type_folders: "Mappen",
		admin_default_search_type_folders_and_documents: "Documenten en mappen",

		admin_restricted_search_type: "Zoekactie toestaan op",
		admin_restricted_search_type_hover: "Standaard kunnen gebruikers zoeken op zowel documenten als mappen. Als u de optie voor Zoeken op wilt verbergen en alleen in documenten wilt zoeken, selecteert u Documenten en deselecteert u Mappen.</br>,</br> Als u zoekacties wilt toestaan in zowel documenten als mappen, kiest u voor het afbeelden van de standaardoptie bij het openen van het zoekvenster.",
		admin_restricted_search_type_documents: "Documenten",
		admin_restricted_search_type_folders: "Mappen",
		admin_restricted_search_type_folders_and_documents: "Documenten en mappen",

		admin_default_search_version: "Standaard zoekversie",
		admin_default_search_version_hover: "Geef op welke optie standaard wordt geselecteerd in het veld <b>Versie</b> in het menu <b>Zoekopties</b>.",

		admin_all_classes_search: "Alle klassen doorzoeken",
		admin_all_classes_search_hover: "Geef aan of het gebruikers is toegestaan om te zoeken in alle klassen, en als dat zo is, wat kan worden opgenomen in de zoekacties naar documenten.",
		admin_all_classes_search_removed_hover: "De opties voor het doorzoeken van alle klassen zijn niet beschikbaar omdat de parameter context-param allPseudoClassHidden in web.xml van de Navigator op true is ingesteld.",
		admin_all_classes_search_hide: "Verwijder de keuze om alle klassen te doorzoeken",
		admin_all_classes_search_documents_only_documents: "Met een documentzoekopdracht zoekt u alleen documenten, opgeslagen zoekacties en invoersjablonen",
		admin_all_classes_search_documents_non_folders: "Een zoekopdracht naar documenten behelst alleen items die geen mappen zijn",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Boomstructuur:",
		admin_feature_config_tree_view_hoverhelp: "Geef op of de gebruikers via het deelvenster Bladeren naar de lijst van mappen in de repository kunnen gaan. Als u het deelvenster Bladeren verbergt, moeten de gebruikers met behulp van de contentlijst naar de mappen in de repository navigeren.",
		admin_feature_config_selected_repositories_label: "Repository's:",
		admin_feature_config_selected_repositories_hoverhelp: "Selecteer de repository's waartoe de gebruikers in deze functie toegang hebben.",
		admin_feature_config_selected_repositories_select_state_hdr: "Repository selecteren",
		admin_feature_config_selected_repositories_name_hdr: "Naam repository",
		admin_feature_config_selected_repositories_show_hdr: "Weergeven",
		admin_feature_config_invalid_icon_title: "Bepaalde verplichte instellingen zijn niet aanwezig in de functie",
		admin_feature_config_view_select_hdr: "Weergave selecteren",
		admin_feature_config_view_hdr: "Weergave",
		admin_feature_config_view: "Weergave",
		admin_feature_config_views: "Weergave:",
		admin_feature_config_views_hoverhelp: "Geef aan welke weergave gebruikers op de lijst met content kunnen toepassen. De weergaven worden afgebeeld in de volgorde van de lijst. De eerste geselecteerde weergave is de standaardweergave voor de functie.<br><br><b>Belangrijk:</b> Als u de filmstrookweergave inschakelt, kunnen er alleen documentpreviews worden afgebeeld als de HTML-conversieviewer geconfigureerd is.",

		admin_custom_dialog_name: "Naam:",
		admin_custom_dialog_value: "Waarde:",
		admin_custom_setting_name_hover: "Geef de naam op van de Daeja ViewONE-instelling die u aan uw configuratie wilt toevoegen. Meer informatie over de configuratie-instellingen vindt u in de documentatie van Daeja ViewONE.",
		admin_custom_setting_value_hover: "Geef de waarde op die u wilt gebruiken voor de configuratie-instelling van Daeja ViewONE. Meer informatie over geldige waarden voor de configuratie-instelling vindt u in de documentatie van Daeja ViewONE.",

		entry_template_name_required_message: "Het naamveld in de Instellingen Invoersjabloon is verplicht.",
		entry_template_name_invalid_message: "De volgende tekens mogen niet worden gebruikt in het naamveld in de Instellingen Invoersjabloon: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Als de optie voor specifieke gebruikers en groepen is geselecteerd in het veld Delen Met in de <Instellingen Invoersjabloon , moet u minimaal één gebruiker of groep selecteren.",
		entry_template_no_permission_to_save_to_teamspace_message: "U bent niet gemachtigd om invoersjablonen toe te voegen aan de teamruimte (${0}) die bij Opslaan In is geselecteerd in de Instellingen Invoersjabloon. ",
		entry_template_save_in_destination_required_message: "U moet een standaardlocatie voor opslaan opgeven in de sectie <b>Locatie voor itemopslag instellen</b>.",
		entry_template_save_in_destination_must_select_folder: "Als u het veld <b>Opslaan in</b> verbergt en van gebruikers vereist dat ze nieuwe items in een map opslaan, moet u een map selecteren in het veld <b>Standaard opslaan in locatie</b> in de sectie <b>Locatie voor itemopslag instellen</b>.",
		entry_template_what_to_save_required_message: "Selecteer minimaal één optie voor 'Wat wilt u opslaan'.",
		entry_template_custom_workflow_empty_message: "Als u <b>Aangepaste werkstroom...</b> kiest, moet u de werkstroom die u wilt gebruiken zoeken en selecteren. ",

		entry_template_new: "Nieuwe invoersjabloon",
		entry_template_name_hover: "In de naam van de invoersjabloon mogen de volgende tekens niet voorkomen: * \\ / : ? \" < > |",
		entry_template_name_invalid: "De volgende tekens mogen niet voorkomen in de naam van de invoersjabloon: * \\ / : ? \" < > |",
		entry_template_description_hover: "Geef een beschrijving op waarmee gebruikers onderscheid kunnen maken tussen deze invoersjabloon en de andere invoersjablonen. ",
		entry_tempalte_save_in_hover: "Geef aan waar u de invoersjabloon wilt opslaan.<br><br><b>Beperking:</b> Als u de invoersjabloon in een teamruimte opslaat, kunt u de invoersjabloon alleen binnen de teamruimte gebruiken.",
		entry_template_inherit_hover: "Als u deze optie selecteert, worden de beveiligingsinstellingen van de bovenliggende map toegevoegd aan de lijst van gebruikers en groepen waarmee de invoersjabloon wordt gedeeld.",
		entry_template_builder_aria_label: "Builder voor invoersjabloon",
		entry_template_builder_layout_aria_label: "Builder voor eigenschappen invoersjabloon",

		entry_template_settings_document: "Invoersjabloon definiëren",
		entry_template_settings_folder: "Locatie voor itemopslag instellen",
		entry_template_settings_folder_intro: "Geef aan waar items die met deze invoersjabloon toegevoegd worden, worden opgeslagen. ",
		entry_template_settings_properties: "Itemeigenschappen instellen",
		entry_template_settings_properties_intro: "U kunt standaard of vooraf gedefinieerde waarden opgeven voor items die met deze invoersjabloon toegevoegd worden. Daarnaast kunt u de layout van de eigenschappen wijzigen om aan te geven welke eigenschappen worden afgebeeld en de volgorde waarin ze worden afgebeeld.",
		entry_template_settings_workflow: "Werkstroom voor het item configureren",
		entty_template_settings_workflow_intro: "U kunt opgeven of een werkstroom wordt gestart als items toegevoegd worden met behulp van de invoersjabloon. ",
		entry_template_settings_security: "Itembeveiliging instellen",
		entry_template_settings_security_intro: "U kunt standaard of vooraf gedefinieerde beveiliging opgeven voor items die met deze invoersjabloon toegevoegd worden. Gebruikers met toepasselijke machtigingen kunnen de beveiliging van het item na toevoeging wijzigen. ",
		entry_template_settings_options: "Opties voor het item instellen",
		entry_template_xt_warning: "Als u de wijzigingen in deze invoersjabloon opslaat, wordt deze geconverteerd van een IBM Workplace XT-invoersjabloon naar een IBM Content Navigator-invoersjabloon. IBM Workplace XT werkt niet met IBM Content Navigator-invoersjablonen.",

		entry_template_properties_edit_layout: "Layout bewerken...",
		entry_template_properties_read_only: "Alleen lezen",
		entry_template_properties_hidden: "Verborgen",

		entry_template_destination_show: "Veld <b>Opslaan in </b> afbeelden",
		entry_template_destination_show_hover: "Als u het veld <b>Opslaan in</b> laat afbeelden, kunnen gebruikers aangeven waar items opgeslagen worden.",
		entry_template_destination_hide: "Veld <b>Opslaan in </b> verbergen",
		entry_template_destination_hide_hover: "Als u het veld <b>Opslaan in</b> laat verbergen, kunnen gebruikers niet aangeven waar items opgeslagen worden.",
		entry_template_folder_save_in_default: "Standaardlocatie voor <b>Opslaan in</b>:",
		entry_template_folder_save_in_default_hover: "Geef de standaardlocatie aan waar items met deze invoersjabloon toegevoegd worden.<br><br>De standaardlocatie die u selecteert, legt beperkingen op aan het gedrag tijdens runtime van de invoersjabloon:<ul><li>Gebruikers kunnen geen andere repository kiezen.</li><li>Als de standaardlocatie een teamruimte is, kunnen gebruikers geen andere teamruimte kiezen.</li></ul>Als gebruikers deze invoersjabloon echter aan een map koppelen, kunnen ze de opslaglocatie overschrijven die voor deze invoersjabloon geconfigureerd is. ",
		entry_template_folder_restrict_choice: "Van gebruikers vereisen dat items aan de standaardlocatie of een onderliggende map van de standaardlocatie worden toegevoegd",
		entry_template_folder_file_in_required: "Van gebruikers vereisen dat ze nieuwe items toevoegen aan een map",
		entry_template_folder_file_in_required_hover: "Als u deze optie niet selecteert, kunnen gebruikers items aan de hoofdmap van de repository toevoegen.<br><br><b>Beperking:</b> De configuratie van de desktop kan vereisen dat gebruikers een map selecteren.",

		entry_template_document_type_show: "Veld <b>Wat wilt u opslaan</b> afbeelden",
		entry_template_document_type_show_hover: "Als u opgeeft dat het veld <b>Wat wilt u opslaan</b> zichtbaar is, worden de items die u selecteert, afgebeeld als opties in het veld <b>Wat wilt u opslaan</b>.",
		entry_template_document_type_hide: "Veld <b>Wat wilt u opslaan</b> verbergen",
		entry_template_document_type_hide_hover: "Als u opgeeft dat het veld <b>Wat wilt u opslaan</b> niet wordt afgebeeld, wordt het type document dat u selecteert altijd gebruikt als de gebruikers met behulp van deze invoersjabloon documenten toevoegen.",
		entry_template_document_type: "Deze invoersjabloon kan worden gebruikt voor het toevoegen van de volgende items:",
		entry_template_document_type_hover: "Als u opgeeft dat het veld <b>Wat wilt u opslaan</b> zichtbaar is, worden de items die u selecteert, afgebeeld als opties in het veld <b>Wat wilt u opslaan</b>.<br><br>Als u opgeeft dat het veld <b>Wat wilt u opslaan</b> niet wordt afgebeeld, wordt het type document dat u selecteert altijd gebruikt als de gebruikers met behulp van deze invoersjabloon documenten toevoegen.",

		entry_template_misc: "Extra opties:",
		entry_template_auto_classify_show: "De inhoud van het document automatisch classificeren",
		entry_template_auto_classify_show_hover: "Bij het classificeren van een document in FileNet Content Manager wordt de inhoud van het document onderzocht om de passende klasse en waarden van eigenschappen voor het document vast te stellen. <br><br>Vraag aan de systeembeheerder of classificatie van content ingeschakeld is bij Content Platform Engine.<br><br>Als u deze optie inschakelt, worden de klasse en de eigenschappen van het document mogelijk gewijzigd als een gebruiker een document aan de repository toevoegt.",
		entry_template_allow_duplicate_file_names: "Dubbele bestandsnamen voor documenten toestaan",
		entry_template_allow_duplicate_file_names_hover: "Standaard kunt u documenten met dezelfde naam aan een map in FileNet Content Manager toevoegen. U kunt deze optie deselecteren als u wilt dat elk bestand in de geselecteerde opslaglocatie een unieke naam heeft. ",
		entry_template_allow_compound_documents: "Toestaan dat dit document het bovenliggende item van een samengesteld document kan zijn. ",
		entry_template_version_show: "Versieopties afbeelden voor toevoegen en inchecken",
		entry_template_version_hide: "Versieopties verbergen voor toevoegen en inchecken",
		entry_template_version_to_add_as: "Standaardversie toe te voegen als:",
		entry_template_version_default: "Standaard versieoptie:",
		entry_template_version_default_checked: "Hoofdversie",
		entry_template_version_default_unchecked: "Kleine versie",
		entry_template_version_display: "Documentversie:",
		entry_template_version_display_show: "Weergeven",
		entry_template_version_display_hide: "Verbergen",
		entry_template_version_default_add: "Standaardversie toe te voegen als:",

		entry_template_checkin_version_show: "Versieopties afbeelden voor inchecken",
		entry_template_checkin_version_hide: "Versieopties verbergen voor inchecken",

		entry_template_checkin_version_message_no_versions: "Het versiebeleid van de geselecteerde klasse verhindert dat gebruikers een nieuwe versie van het document inchecken.",
		entry_template_checkin_version_message_always_version: "Het versiebeleid van de geselecteerde klasse verhindert dat gebruikers de bestaande versie van het document vervangen.",

		entry_template_applied: "Deze invoersjabloon gebruiken als gebruikers:",
		entry_template_applied_add: "Documenten toevoegen (vereist)",
		entry_template_applied_add_folder: "Mappen maken (vereist)",
		entry_template_applied_checkin: "Inchecken",
		entry_template_applied_properties_group: "Eigenschappen bekijken of bewerken:",
		entry_template_applied_properties: "In het venster Eigenschappen",
		entry_template_applied_viewer: "In de appletviewer",
		entry_template_applied_docinfo: "In het venster voor documentinformatie",
		entry_template_applied_no_class_support: "Deze itemsjabloon kan worden gebruikt voor het toevoegen van items, maar kan niet worden gebruikt om documenten in te checken of eigenschappen te bekijken of te bewerken. De geselecteerde klasse moet worden gewijzigd om deze situaties te ondersteunen. Als het nodig is om de invoersjabloon in deze situaties te gebruiken, vraagt u de beheerder de klasse middels de beheertool te wijzigen zodat deze invoersjabloon-ID's kan opslaan.",
		entry_template_applied_no_child_component_support: "De geselecteerde klasse heeft onderliggende componenten en er is een eigenschapslayout voor gedefinieerd. Eigenschapslayouts ondersteunen geen onderliggende componenten. De onderliggende componenten worden niet bij de gebruiker afgebeeld. ",
		entry_template_applied_child_component: "De geselecteerde klasse heeft onderliggende componenten. Deze worden afgebeeld bij de gebruiker maar u kunt geen onderliggende componenten in deze invoersjabloon configureren. ",

		entry_template_properties_show: "Sectie <b>Eigenschappen</b> afbeelden",
		entry_tempalte_properties_show_hover: "Als u de sectie <b>Eigenschappen</b> laat afbeelden, kunnen gebruikers alle (niet alleen-lezen) waarden van eigenschappen wijzigen die in de invoersjabloon worden afgebeeld.",
		entry_template_properties_hide: "Sectie <b>Eigenschappen</b> verbergen",
		entry_template_properties_hide_hover: "Als u de sectie <b>Eigenschappen</b> verbergt, kunnen gebruikers geen waarden van eigenschappen veranderen. In de invoersjabloon moet alle waarden gedefinieerd zijn die u wilt gebruiken bij het toevoegen van items met deze invoersjabloon.",

		entry_template_security_show: "Sectie <b>Beveiliging</b> afbeelden",
		entry_template_security_show_hover: "Als u de sectie <b>Beveiliging</b> afbeeldt, kunnen gebruikers met de juiste machtigingen de beveiliging van een item wijzigen.",
		entry_template_security_hide: "Sectie <b>Beveiliging</b> verbergen",
		entry_template_security_hide_hover: "Als u de sectie <b>Beveiliging</b> verbergt, kunnen gebruikers de beveiliging van een item niet wijzigen. In de invoersjabloon moet alle beveiligingsinstellingen gedefinieerd zijn die u wilt gebruiken bij het toevoegen of bewerken van items.",
		entry_template_security_policy: "Beveiligingsbeleid:",
		entry_template_security_policy_hover: "Afhankelijk van het beveiligingsbeleid dat u selecteert, kan het beveiligingsbeleid:<br><ul><li>De machtigingen overschrijven die zijn opgegeven bij <b>Itembeveiliging instellen</b></li><li>De machtigingen toevoegen die zijn opgegeven bij <b>Itembeveiliging instellen</b></li></ul>",
		entry_template_security_policy_none: "Geen beveiligingsbeleid ingesteld",
		entry_template_security_inherit: "Beveiligingsinstellingen overnemen van de bovenliggende map",
		entry_tempalte_save_in_hover: "Geef aan waar u de invoersjabloon wilt opslaan.<br><br><b>Beperking:</b> Als u de invoersjabloon in een teamruimte opslaat, kunt u de invoersjabloon alleen binnen de teamruimte gebruiken.",
		entry_template_security_inherit_item_security_hover: "Als u deze optie selecteert, worden de beveiligingsinstellingen van de bovenliggende map toegevoegd aan de beveiligingsinstellingen die door een van de volgende items wordt gedefinieerd:<ul><li>De klasse die is opgegeven in de sectie <b>Itemeigenschappen instellen</b></li><li>De aangepaste beveiliging klasse die is opgegeven in de sectie <b>Itembeveiliging instellen</b></li></ul>",
		entry_template_security_change: "Beveiliging gedefinieerd door de geselecteerde klasse negeren",
		entry_template_security_change_hover: "Als u deze optie selecteert, worden de beveiligingsinstellingen die voor de klasse zijn gedefinieerd standaard afgebeeld. U kunt dan de beveiligingsinstellingen voor de invoersjabloon wijzigen. <br><br>Als u de sectie <b>Beveiliging</b> afbeeldt, kunnen gebruikers met de juiste machtigingen de beveiliging van een item wijzigen.<br><br>Als u deze optie selecteert en ervoor kiest de beveiligingsinstellingen over te nemen uit de bovenliggende map, worden eventuele over te nemen machtigingen toegevoegd aan de beveiligingsinstellingen die u opgeeft.",
		entry_template_security_default_item_security: "Standaard itembeveiliging van gebruiker die item toevoegt negeren",
		entry_template_security_policy_message_override: "Het geselecteerde beveiligingsbeleid is zodanig geconfigureerd dat de onder Beveiliging Instellen opgegeven machtigingen worden genegeerd.",
		entry_template_security_policy_message_add: "Het geselecteerde beveiligingsbeleid is zodanig geconfigureerd dat er machtigingen worden toegevoegd aan de onder Beveiliging Instellen opgegeven machtigingen.",
		entry_template_security_policy_preserve_true_hover: "Behoudt directe machtiging",
		entry_template_security_policy_preserve_false_hover: "Behoudt directe machtiging niet",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specifieke rollen",
		entry_template_security_class_role_search_title: "Zoeken naar rollen:",
		entry_template_secuirty_class_member_title: "Ledenlijst voor ${0}",
		entry_template_secuirty_class_folder_only: "Deze machtigingen zijn alleen op deze map van toepassing",
		entry_template_secuirty_class_folder_and_immediate_children: "Deze machtigingen zijn van toepassing op deze map en op de direct onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit deze map.",
		entry_template_secuirty_class_folder_and_all_children: "Deze machtigingen zijn van toepassing op deze map en op alle onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit deze map. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Deze machtigingen zijn van toepassing op de direct onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit deze map.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Deze machtigingen zijn van toepassing op alle onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit deze map",

		entry_template_class_security_message_no_override: "De beveiliging van de geselecteerde klasse staat het niet toe dat gebruikers de beveiliging negeren.",
		entry_template_class_security_required_privileges: "<b>Belangrijk</b>: Als u de beveiliging van de geselecteerde klasse negeert, moeten gebruikers van deze invoersjabloon de machtigingen ItemSetACL en UserACLOwner om items te kunnen toevoegen.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Werkstroom voor sequentiële patronen",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Werkstroom voor parallelle patronen",
		entry_template_workflow_type_existing: "Aangepaste werkstroom...",
		entry_template_workflow_launch_prompt: "Gebruikers vragen of de werkstroom gestart moet worden",
		entry_template_workflow_launch_auto: "De werkstroom automatisch starten",
		entry_template_workflow_modify_launch: "De gebruiker toestaan de startstap te wijzigen",
		entry_template_workflow_modify_launch_hover: "Selecteer deze optie als u wilt dat gebruikers de manier van starten van de werkstroom kunnen wijzigen.",

		entry_template_optionsButton_title: "Wijzigen",
		entry_template_optionsButton_readonly_title: "Koppeling bekijken",
		entry_template_optionsDialog_title: "Instellingen mapkoppeling",
		entry_template_removeButton_title: "Verwijderen",
		entry_template_addButton_title: "Toevoegen",
		entry_template_selected_entry_templates: "Geselecteerde invoersjablonen",
		entry_template_docs_added_to_template_destination: "De documenten worden toegevoegd aan de in de invoersjabloon opgegeven bestemming.",
		entry_template_docs_added_to_other_object_store: "Met deze invoersjabloon voegt u items toe aan de objectruimte van ${0}.",
		entry_template_inherited_entry_templates_label: "Ik wil: ",
		entry_template_inherited_entry_templates: "Koppelingen van invoersjablonen overnemen uit map: ",
		entry_template_inherited_entry_templates_not: "Nieuwe koppelingen maken voor deze map",
		entry_template_inherited_folder_path: "De invoersjablonen in de lijst van geselecteerde invoersjablonen worden aan de volgende map gekoppeld: ${0}. <br> Het pad van de map is ${1}.",
		entry_template_folder_associations_title: "Invoersjablonen koppelen",
		entry_template_folder_associations_intro: "Als u een invoersjabloon aan een map koppelt, moeten de gebruikers de desbetreffende invoersjabloon gebruiken om items aan de map toe te voegen. Als u meerdere invoersjablonen aan een map koppelt, kunnen de gebruikers kiezen welke invoersjabloon ze gebruiken.",
		entry_tempalte_folder_associations_entrytemplate: "Invoersjabloon: ",
		entry_template_avaliable_entry_templates: "Beschikbare invoersjablonen",
		entry_template_fileTypes_intro_title: "Toegestane bestandstypen:",
		entry_template_fileTypes_intro: "Standaard kan een invoersjabloon worden gebruikt om elk type document toe te voegen aan de repository. Als u echter een of meer bestandstypen selecteert, zijn de invoersjablonen alleen beschikbaar als de gebruikers documenten van de desbetreffende bestandstypen toevoegen.",
		entry_template_fileTypes: "Bestandstypen",
		entry_template_fileType_error: "Er zijn ongeldige documenttypen geselecteerd voor een of meer gekoppelde invoersjablonen. De ongeldige bestandstypen moeten worden verwijderd voordat de koppelingen van invoersjablonen kunnen worden opgeslagen.",
		entry_template_fileTypes_any_type_of_file: " Elk type bestand",
		entry_template_description_label: "Beschrijving",
		entry_template_ItemInfoPrefix: "Koppelen met: ",
		entry_template_TargetObjectStoreName: "Doelobjectruimte",
		entry_template_class: "Klasse",
		entry_template_current_folder_as_parent: "Map gebruiken als bestemming",
		entry_template_view_minetypes: "MIME-typen bekijken",
		entry_template_avaliable_MIME_types: "Beschikbare bestandstypen",
		entry_template_selected_MIME_types: "Geselecteerde bestandstypen",
		entry_template_MIME_type_column: "naam bestandstypecategorie",
		entry_template_file_type_not_existing: "Verwijder de ongeldige bestandstypen.",
		entry_template_MIME_types: "MIME-typen:",
		entry_template_MIME_types_info_dialog_title: "De MIME-typen voor",
		entry_template_destination_label: "Documenten toevoegen aan: ",
		entry_template_destination_help: "Geef op waar de documenten in de repository worden opgeslagen wanneer de gebruikers met behulp van de geselecteerde invoersjabloon documenten toevoegen aan deze map.",
		entry_template_radioButton_folder_destination: "Geselecteerde map",
		entry_template_radioButton_template_destination: "Bestemming zoals opgegeven in de invoersjabloon",
		entry_tempalte_teamspace_default: "Standaard invoersjabloon",
		entry_template_folder_associations_save_new: "U hebt een aantal koppelingen van invoersjablonen gewijzigd. Wilt u dit venster afsluiten zonder uw wijzigingen op te slaan?",
		entry_template_mode_binding_label: "Eigenschappen",
		entry_template_columns_className: "Klassennaam",
		entry_template_columns_type: "Sjabloontype",
		entry_template_columns_workflow: "Naam werkstroom",
		entry_template_columns_destination: "Bestemming",
		entry_template_association_less_than_record: "Er zijn ${0} invoersjablonen niet opgenomen in de lijst met geselecteerde invoersjablonen. U hebt geen machtiging om deze te bekijken. Het kan ook zijn dat ze zijn gewist. Vraag uw systeembeheerder om meer informatie.",
		/* Request */

		progress_message_general: "Bezig...",
		cancel_message_general: "De actie is geannuleerd.",
		ie8_not_supported_browser: "IE8 is geen ondersteunde browser.",
		progress_message_getDesktop: "Desktop wordt geladen...",
		progress_message_getActions: "Acties worden geladen...",
		progress_message_getViewers: "Desktop wordt geladen...",
		progress_message_logon: "Bezig met aanmelding...",
		progress_message_logoff: "Bezig met afmelden...",
		progress_message_getContentClasses: "Klassen worden opgehaald...",
		progress_message_openContentClass: "Klassedetails worden opgehaald...",
		progress_message_od_getCabinets: "Kabinetten worden opgehaald...",
		progress_message_getSearchTemplates: "Zoekopdrachten worden opgehaald...",
		progress_message_od_getTemplates: "Mappen worden opgehaald...",
		progress_message_od_openCabinet: "Mappen worden opgehaald...",
		progress_message_openSearchTemplate: "Zoekopdracht wordt geactiveerd...",
		progress_message_od_openTemplate: "Map wordt geopend...",

		progress_message_getWorklists: "Werklijsten worden opgehaald",
		progress_message_getWorkItems: "Werkitems worden opgehaald",
		progress_message_getNextWorkItems: "Werkitems worden opgehaald",
		progress_message_getStepParameters: "Werkitemgegevens worden opgehaald...",
		progress_message_getStepAttachmentItems: "Bijlagegegevens worden opgehaald...",
		progress_message_getDependentParameters: "Eigenschapsgegevens worden opgehaald...",

		progress_message_p8_getProcessApplicationSpaces: "Toepassingsruimtes worden opgehaald...",
		progress_message_p8_getProcessRoles: "Procesrollen worden opgehaald...",
		progress_message_p8_getProcessInbaskets: "Vakken IN worden opgehaald...",
		progress_message_p8_getProcessorInformation: "Procesgegevens worden opgehaald...",
		progress_message_p8_getFilterCriteria: "Vak IN-filter wordt opgehaald...",
		progress_message_p8_getLaunchParameters: "Werkitemgegevens worden opgehaald...",
		progress_message_p8_getStepAttachments: "Werkitembijlagen worden opgehaald...",
		progress_message_p8_getSubscriptions: "Werkstroomabonnementen worden opgehaald...",
		progress_message_p8_getTrackerParameters: "Werkitemgegevens worden opgehaald...",
		progress_message_p8_getTrackerHistory: "Historie van werkitem wordt opgehaald...",
		progress_message_p8_getTrackerMilestones: "Mijlpalen van werkitem worden opgehaald...",
		progress_message_p8_completeStep: "Werkitem wordt voltooid...",
		progress_message_p8_moveToInbox: "Item wordt verplaatst naar ingekomen post...",
		progress_message_p8_returnToSender: "Werkitem wordt teruggezonden...",
		progress_message_p8_reassign: "Werkitem wordt opnieuw toegewezen...",
		progress_message_p8_launchWorkflow: "Werkstroom wordt gestart...",
		progress_message_p8_getTransferedWorkflows: "Werkstroomgegevens ophalen...",

		progress_message_cm_getProcesses: "Werkstroomgegevens ophalen...",
		progress_message_cm_completeStep: "Werkitem wordt voorgezet...",
		progress_message_cm_getItemProcessInformation: "Werkstroomgegevens ophalen...",

		progress_message_search: "Bezig met zoeken...",
		cancel_message_search: "De zoekactie is geannuleerd.",
		progress_message_getContentItems: "Itemgegevens worden opgehaald...",
		progress_message_openFolder: "Map wordt geopend...",
		progress_message_addItem: "Item wordt gemaakt...",
		progress_message_checkIn: "Item wordt ingecheckt...",
		progress_message_changePassword: "Wachtwoord wordt gewijzigd...",
		progress_message_getDefaultInstancePermissions: "Standaardmachtigingen worden opgehaald...",
		progress_message_openItem: "Itemgegevens worden opgehaald...",
		progress_message_saveItem: "Itemgegevens worden opgeslagen...",
		progress_message_getPermissions: "Machtigingen worden opgehaald...",
		progress_message_getEntryTemplates: "Invoersjablonen worden opgehaald...",
		progress_message_openEntryTemplate: "Invoersjabloon wordt geopend...",
		progress_message_getFavorites: "Favorieten worden opgehaald...",
		progress_message_getFoldersFiledIn: "Mappen worden opgehaald...",
		progress_message_getDocumentVersions: "Versies worden opgehaald...",
		progress_message_getDependentAttributeInfo: "Kenmerkgegevens worden opgehaald...",
		progress_message_packageForDownload: "Inpakken voor download...",
		progress_message_convertDocument: "Content converteren...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Contenttype wordt opgehaald...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Document wordt toegevoegd...",

		progress_message_desktop_reload: "De client laadt uw desktop opnieuw.<br>Mogelijk wordt u gevraagd u opnieuw aan te melden.",
		progress_message_email: "Bezig met verzenden van e-mail...",
		cancel_message_email: "De e-mail is geannuleerd.",

		progress_message_p8_getOfficeOnlineTemplates: "Office-sjablonen worden opgehaald...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Structuur met favorieten",
		favorites_content_list_label: "Contentlijst van favorieten",
		syncItems_tree_label: "Boomstructuur Mijn gesynchroniseerde bestanden",
		syncItems_content_list_label: "Contentlijst Mijn gesynchroniseerde bestanden",
		my_checkouts_content_list_label: "Contentlijst van Mijn uitcheckbewerkingen",
		browse_tree_label: "Bladerstructuur",
		browse_content_list_label: "Bladercontentlijst",
		repository_selector_label: "Selectie van repository",
		teamspaces_content_list_label: "Contentlijst van teamruimte",
		templates_content_list_label: "Contentlijst van sjablonen",
		work_content_list_label: "Contentlijst van werk",
		work_tree_label: "Werkstructuur",
		admin_tree_label: "Beheerstructuur",
		admin_tabs_label: "Beheertabs",
		search_tabs_label: "Zoektabs",
		search_selector_label: "Selectie van zoekopdracht",
		teamspace_browse_content_list_label: "Bladercontentlijst van teamruimte",
		teamspace_search_tabs_label: "Zoektabs van teamruimte",

		/* Desktop */
		undo_description: "Ongedaan maken ${0}",
		redo_description: "Opnieuw wijzigen ${0}",

		/* Application Tabs */
		home: "Home",
		repository: "Repository",
		repository_type: "Repositorytype:",
		repository_type_header: "Type repository",
		repository_type_any: "Alle repository's",
		repository_type_contains_label: "Type repository bevat",
		document_info: "Documentinformatie",
		team: "Team",
		administration: "Beheer",

		/* Home Page */
		recent_activity: "Recente activiteit",
		repos_and_wrksp: "Repository's en teamruimten",
		workspaces: "Teamruimtes",
		repositories: "Repository's",
		templates: "Sjablonen",
		favorites: "Favorieten",
		my_checkouts: "Mijn uitcheckbewerkingen",
		mySyncedFiles: "Mijn gesynchroniseerde bestanden",
		links: "Links",
		name_label: "Naam",
		description_label: "Beschrijving:",
		type_label: "Type:",
		type_heading: "Type",
		type_id_label: "Type-ID",
		server_type_icon: "Pictogram voor servertype",
		server_type_heading: "Servertype",
		server_type: "Servertype",
		port_heading: "Poortnummer",
		port_label: "Poortnummer:",
		server_name_heading: "Naam server",
		server_label: "Servernaam:",
		server_url_label: "Server-URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Verbonden:",
		repository_label: "Repository",
		modified_label: "Gewijzigd door:",
		modified_date_label: "Gewijzigd op:",
		status_label: "Status:",
		last_modified_label: "Laatst gewijzigd door:",

		modifier: "Aangepast door",
		modified_date: "Gewijzigd op",

		/* Favorites */
		new_favorite_label: "Aan Favorieten toevoegen",
		edit_favorite_label: "Naam van favoriet wijzigen",
		remove_favorite_label: "Uit Favorieten verwijderen",
		missing_alias_message: "U moet een naam opgeven.",
		sync_favorite_enable_hover: "Voor dit item is de synchronisatie ingeschakeld.",
		sync_favorite_disable_hover: "Dit item wordt niet gesynchroniseerd.",
		sync_favorite_sync_unavailable_hover: "Voor dit objecttype is synchronisatie niet beschikbaar.",
		sync_enable_label: "Dit item synchroniseren",
		sync_enable_label_hover: "Dit item wordt gesynchroniseerd met uw apparatuur.",
		delete_favorite_confirmation_question: "Wilt u dit item verwijderen uit uw favorieten?",
		alias_label: "Naam:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Het geselecteerde item staat al in uw favorieten.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Dit item kan niet worden toegevoegd aan uw lijst van favorieten.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Er kunnen slechts ${0} favorieten worden opgeslagen.",
		add_favorite_max_reached_response: "Als u dit item wilt toevoegen aan uw lijst van favorieten, moet u minimaal één van de bestaande favorieten wissen. Pas daarna is er ruimte om dit item toe te voegen.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "De geselecteerde documenten kunnen niet worden geconverteerd naar PDF.",
		download_as_pdf_max_content_error_explanation: "U kunt niet meer dan ${0} MB aan gegevens naar PDF converteren. De geselecteerde documenten bevatten meer dan ${0} MB.",
		download_as_pdf_max_content_error_response: "Selecteer minder of kleinere documenten en download de documenten nogmaals als PDF-bestand. ",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "De geselecteerde documenten kunnen niet worden geconverteerd naar een enkel PDF-bestand.",
		download_as_pdf_mimetype_check_error_explanation: "Om een document met meerdere onderdelen te converteren naar een enkel PDF-bestand, moet elk onderdeel hetzelfde MIME-type hebben.",
		download_as_pdf_mimetype_check_error_response: "Selecteer een ander document om te converteren naar PDF-indeling.",

		/* Activity Stream */
		show_label: "Afbeelden",
		all_filter: "Alle",
		notifications_filter: "Meldingen",
		workitems_filter: "Werkitems",
		documentes_filter: "Documenten",
		all_favorites_filter: "Alle favorieten",
		folders_filter: "Mappen",
		searches_filter: "Zoekopdrachten",
		teamspaces_filter: "Teamruimtes",

		/* Repository */
		all_search_templates: "Alle zoekopdrachten",
		all_od_searches: "Alle zoeksjablonen",
		recent_searches: "Recente zoekopdrachten",
		opened_searches: "Geopende zoekopdrachten",

		all_worklists: "Alle postvakken IN",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Een lijst van elke werklijst",

		/* Teamspace */
		all_workspaces: "Alle teamruimten",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Een lijst van elke teamruimte",
		workspace_title: "Teamruimte",
		workspace_icon: "Teamsruimtepictogram",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Beschikbaar",
		workspace_stat_offline: "Niet beschikbaar",
		workspace_stat_validate: "Vereist validatie",
		workspace_stat_pendingDelete: "Wissen in behandeling",
		workspace_stat_deleteError: "Wissen is mislukt",

		undefined_value: "Niet gedefinieerd",
		undefined_reference_value: "Er is geen referentie gedefinieerd.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Mogelijk zijn er meer resultaten beschikbaar op de server.",
		search_all_data: "Alle gegevens doorzoeken.",
		search_all_teamspaces: "Alle teamruimten doorzoeken.",
		teamspace_filter_results: "Afbeelden van ${0} resultaten. ",
		displaying_filtered_results: "Afgebeeld worden gefilterde resultaten. ",
		displaying_recent_results: "Afgebeeld worden alleen teamruimten die de afgelopen ${0} dagen zijn gewijzigd. Als u op zoek bent naar andere teamruimten, kunt u de lijst van teamruimten filteren op naam of beschrijving.",
		clear_filter: "Filter leegmaken.",

		/* FolderTreeModel */
		move_item_task: "Item verplaatsen",
		copy_item_task: "Item kopiëren",
		add_item_task: "Item toevoegen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "De volgende map is niet gevonden: ${0}. Wellicht is de map gewist of kan hij vanuit deze view niet worden geopend. Klik in de boomstructuur op de link om naar de map te navigeren. Als u de map nog steeds niet kunt zien, vernieuw dan de view met de lijst van content.",
		more_paging_link: "meer ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Annuleren",

		/* ErrorDialog */
		error_dialog_title: "Fout",
		error_dialog_icon_tooltip: "Fout",
		error_dialog_stack_trace_title: "Stacktracering",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Bevestiging",

		close_browser_msg: "Sluit het browservenster.",

		/* MessageDialog */
		message_dialog_title: "Informatie",
		warning_dialog_title: "Waarschuwing",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Welkom bij ${0}",
		server: "Repository:",
		username: "Gebruikersnaam:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "U hebt een gebruikersnaam nodig om u bij de repository aan te melden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "U hebt een wachtwoord nodig om u bij de repository aan te melden.",
		password: "Wachtwoord:",
		login: "Aanmelden",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Uw sessie is vervallen. Meld u opnieuw aan.",
		login_repository_connection_expired_message: "Uw verbinding met de repository ${0} is vervallen. Meld u opnieuw aan.",
		login_site_connection_expired_message: "Uw verbinding met de site is vervallen. Meld u opnieuw aan.",
		login_new_server_message: "Voer een gebruikersnaam en wachtwoord in voor ${0}.",
		login_error_more_information_message: "Meer informatie",

		disconnect_box_account_user: "Verbinding Box-account verbreken: ${0}",
		disconnect_box_account: "Verbinding Box-account verbreken",
		disconnect_box_accounts: "Verbinding Box-accounts verbreken",

		// OAuth2/Box Login
		login_ssl_connection_required: "Er is een SSL-verbinding vereist voor toegang tot Box-repository.",
		login_oauth_popup_blocked: "Het voorgrondvenster is geblokkeerd. Mogelijk moet u het blokkeren van voorgrondvensters uitschakelen om u aan te melden.",
		login_oauth_click_here: "Als u binnen 5 seconden niet wordt doorgestuurd, klikt u hier.",
		login_oauth_title: "Aanmelden",
		login_oauth_grant_intro: "Verificatie verlenen voor ${0}.",
		login_pane_oauth_click_here: "Klik hier om u aan te melden.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Wilt u zich afmelden bij de webclient?",
		logout_confirmation_button: "Afmelden",

		/* ChangeLocaleDialog */
		change_locale: "Instellingen voor taal en locale wijzigen",
		change_locale_use_browser_language: "Taalinstelling van browser gebruiken (standaardwaarde)",
		change_locale_use_browser_locale: "Taalinstelling van browser gebruiken (standaardwaarde)",
		change_locale_description: "Als u de browsercookies wist, moet u de instellingen voor uw taal en locale opnieuw instellen.",
		change_locale_language_locale: "Toepassingstaal:",
		change_locale_language_locale_hover: "Met deze instelling wijzigt u de taal van de tekst in de webclient  maar niet de taal van de documenten in de toepassing.<br><br>Met de standaardinstelling wordt de taal gebruikt die is opgegeven in de configuratieopties van uw webbrowser.",
		change_locale_value_format_locale: "Toepassingslocale:",
		change_locale_value_format_locale_hover: "De locale bepaalt de notatie van de datum, tijd en getallen in de webclient.<br><br>Met de standaardinstelling worden de indelingen gebruikt die horen bij de taal die is opgegeven in de configuratieopties van uw webbrowser.",
		change_locale_for_office: "Bidirectionele instellingen voor tekst:",
		change_locale_bidi_support_flag: "Bidirectionele ondersteuning inschakelen",
		change_locale_bidi_support_flag_hover: "Als bidirectionele ondersteuning ingeschakeld is, kan de gebruiker de richting van de tekst in invoervelden instellen. De tekst voor items zoals mappen zou bijvoorbeeld worden afgebeeld in de richting waarin deze is ingevoerd.",
		change_locale_base_text_direction: "Basis tekstrichting voor content:",
		change_locale_base_text_direction_hover: "Stel de richting in van de tekst die wordt ingevoerd in de invoervelden. Dit is ook bepalend voor de weergaverichting van labels die door de gebruiker zijn ingevoerd, zoals namen van mappen.",
		change_locale_calendar_type: "Type kalender:",
		change_locale_calendar_type_hover: "Selecteer het type kalender dat voor deze gebruikerssessie wordt gebruikt.",
		change_locale_base_text_direction_default: "Standaard",
		change_locale_base_text_direction_ltr: "Van links naar rechts",
		change_locale_base_text_direction_rtl: "Van rechts naar links",
		change_locale_base_text_direction_contextual: "Contextueel",
		change_locale_calendar_type_gregorian: "Gregoriaans",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebreeuws",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Wachtwoord wijzigen",
		change_password_title: "Wachtwoord wijzigen",
		change_password_expired_title: "Wachtwoord is vervallen",
		change_password_message: "Typ een nieuw wachtwoord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Uw wachtwoord is verlopen. Typ een nieuw wachtwoord.",
		change_password_password_rules: "Wachtwoordregels",
		change_password_old_password: "Oud wachtwoord:",
		change_password_new_password: "Nieuw wachtwoord:",
		change_password_confirm_password: "Wachtwoord bevestigen:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "U moet uw oude wachtwoord opgeven.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "U moet een nieuw wachtwoord opgeven.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "U moet uw nieuwe wachtwoord bevestigen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "De wachtwoorden moeten gelijk zijn.",

		/* GlobalToolbar */
		actions: "Acties ",
		actions_label: "Acties:",
		open_actions_label: "Open acties:",

		/* About Dialog */
		about_dialog_title: "Info",
		about_product_name_label: "Naam product: ",
		about_product_version_label: "Versie: ",
		about_product_build_label: "Build: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Alle rechten voorbehouden. Beperkte rechten voor gebruikers in Amerikaanse overheidsdienst. Gebruik, vermenigvuldiging en openbaarmaking worden beperkt door het GSA ADP Schedule Contract met IBM Corporation. IBM en het IBM-logo zijn handelsmerken van International Business Machines Corporation in de Verenigde Staten en/of andere landen. Dit Programma wordt in licentie gegeven onder de voorwaarden van de bij het Programma geleverde licentieovereenkomst. Deze licentieovereenkomst bevindt zich in een directorymap of bibliotheek van het programma, aangeduid als \"License\" of \"Non_IBM_License\", of is verstrekt als afgedrukte licentieovereenkomst. Lees deze overeenkomst zorgvuldig voordat u het programma gaat gebruiken. Door het programma te gebruiken, stemt u in met deze voorwaarden.  ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Wilt u het geselecteerde item wissen?",
		delete_single_folder_confirmation_question: "Wilt u de map ${0} wissen?",
		delete_multiple_confirmation_question: "Wilt u de geselecteerde items wissen?<br>${0} items zijn geselecteerd.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Wissen",
		search_template_delete_confirmation_question: "Wilt u de zoekopdracht ${0} wissen?",
		search_template_opened_delete_confirmation_question: "De zoekopdracht ${0} is nog open. Als u de zoekopdracht wist, wordt deze afgesloten.<br>Wilt u deze zoekopdracht wissen?",
		delete_multiple_opened_search_template_confirmation_question: "De volgende zoekopdrachten zijn open: ${0}.<br>Als u de zoekopdrachten wist, worden ze gesloten. Wilt u deze zoekopdrachten wissen?",
		delete_large_number_items_confirmation_question: "U hebt ${0} items geselecteerd om te wissen.<br/>Als u een groot aantal items wist, kan dat lang duren.<br/>Wilt u doorgaan?",
		delete_confirmation_entrytemplate: "Als u deze itemsjabloon verwijdert, heeft dit de volgende impact op de documenten of mappen die aan de invoersjabloon zijn gekoppeld:<ul><li>De items zijn niet meer gekoppeld aan de invoersjabloon en gebruikers zien mogelijk een waarschuwing wanneer ze een item bijwerken. </li><li>Alle eigenschappen die werden bestuurd door de invoersjabloon, zoals de naam of volgorde van de eigenschappen, zijn niet meer van toepassing op de items die aan de invoersjabloon zijn gekoppeld</li></ul>Wilt u deze invoersjabloon wissen?",
		delete_confirmation_entrytempalte_with_multi_items: "Invoersjablonen moet afzonderlijk worden gewist. De itemsjablonen zijn verwijderd uit de lijst met items die gewist worden. Als u de invoersjablonen wilt wissen, wist u elke invoersjabloon afzonderlijk.",

		/* Create/Apply/Remove Hold */
		hold: "Aanhouding",
		createHold: "Nieuwe aanhouding",
		applyHold: "Aanhouding toepassen",
		removeHold: "Aanhouding verwijderen",
		showHolds_title: "Aanhoudingen afbeelden",
		applyHoldSelectText: "Selecteer de aanhoudingen die u wilt toepassen op de geselecteerde items.",
		availableHolds: "Beschikbare aanhoudingen:",
		removeHoldSelectText: "Selecteer de aanhoudingen die u wilt verwijderen uit geselecteerde items.",
		appliedHolds: "Toegepaste aanhoudingen:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Maak een nieuwe aanhouding voor de geselecteerde items.",
		holdName: "Naam aanhouding:",
		holdDescription: "Beschrijving:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "U moet een naam voor de aanhouding opgeven.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "De opgegeven naam aanhouding bestaat al.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Een aanhoudingsnaam mag geen van de volgende tekens bevatten: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Uw sessie vervalt over ${0} minuten.",
		session_expire: "Sessie gaat vervallen",
		logoff: "Afmelden",
		extend_session: "Sessie verlengen",
		admin_custom_settings: "Aanvullende instellingen:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning is een booleaanse waarde die aangeeft of de waarschuwing voor vervallen van sessie is ingeschakeld; de standaardwaarde is true. sessionExpireWarningTime is een geheel getal tussen 2 en 5 voor het aangeven van de waarschuwingstijd voor vervallen.",
		admin_custom_setting_dialog_title_new: "Nieuwe instelling",
		admin_custom_setting_dialog_title_edit: "Instelling bewerken",
		admin_custom_setting_dialog_hover_help: "U kunt andere parameters toevoegen door de parameternaam en de waarde op te geven. U kunt bijvoorbeeld “enableSessionExpireWarning” en “true” opgeven als u de waarschuwing voor vervallen van sessies wilt inschakelen. ",
		admin_custom_setting_dialog_field_hover_help: "Meer informatie over namen en waarden van parameters vindt u in de IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Deze waarde is vereist. De waarde mag geen spaties bevatten en moet uniek zijn.",
		admin_custom_setting_dialog_bool_valueInvalid: "Deze waarde is vereist. De waarde moet booleaans zijn.",
		admin_custom_setting_dialog_int_valueInvalid: "Deze waarde is vereist. De waarde moet een geheel getal zijn.",
		/* Add Document Dialog */
		add_document_dialog_title: "Document toevoegen",
		add_documents_dialog_title: "Documenten toevoegen",
		add_document_general_label: "Algemeen",
		add_document_properties_label: "Eigenschappen",
		add_document_properties_with_ellipsis_label: "Eigenschappen...",
		add_document_security_label: "Beveiliging",
		add_document_location_label: "Opslaan in:",
		add_document_type_label: "Wat wilt u opslaan?",
		add_document_localfile_label: "Lokaal document",
		add_document_metadata_label: "Informatie over een document",
		add_document_external_label: "Link naar een extern document",
		add_document_web_link_label: "Weblink",
		add_document_saved_content_label: "Opgeslagen bestand gebruiken:",
		add_document_saved_content_choice: "Opgeslagen bestand",
		add_document_file_name_label: "Bestandsnaam:",
		add_document_entry_template_label: "Invoersjabloon:",
		add_document_delete_file_label: "Lokaal bestand wissen",
		add_document_delete_file_disabled_label: "Bestanden die niet in de directory voor bestandstracering staan, worden niet gewist.",
		add_document_major_version_label: "Hoofdversie",
		add_document_major_version_hover: "Hiermee wordt de status van het document ingesteld op Vrijgegeven. Het document wordt aan de repository toegevoegd als versie 1.0. Als de optie niet is geselecteerd, is het document niet klaar om te worden vrijgegeven en wordt het toegevoegd als de kleine versie 0.1.",
		add_document_save_document_as_unfiled_label: "Het document niet in een map opslaan",
		add_document_save_document_as_unfiled_hover: "Als u deze optie selecteert, kunt u dit document alleen vinden door het te zoeken. U kunt er niet naar toe bladeren.",
		add_document_create_new_version_label: "Nieuwe versie maken",
		add_document_replace_existing_version_label: "Bestaande versie vervangen",
		add_document_start_workflow_label: "Werkstroom starten",
		add_document_auto_classify_label: "De content automatisch classificeren",
		add_document_add_label: "Toevoegen",
		add_document_cancel_label: "Annuleren",
		add_document_document_type_label: "Klasse",
		add_document_context_info: "De waarden die u voor de documenteigenschappen opgeeft, kunnen worden gebruikt om het document later terug te vinden.",
		add_documents_context_info: "De waarden die u voor de documenten opgeeft, kunnen worden gebruikt om de documenten later terug te vinden. Als u een voor bepaald document afwijkende eigenschapswaarden wilt opgeven, moet u dat document afzonderlijk toevoegen, of de eigenschappen van dat document wijzigen nadat u het hebt toegevoegd.",
		add_document_url_label: "URL:",
		add_document_template_description: "Beschrijving van sjabloon:",
		add_document_select_entry_template: "Een invoersjabloon invoeren of selecteren",
		add_document_no_permission_to_associations: "U bent niet gemachtigd om een invoersjabloon te gebruiken",
		add_document_no_entry_template_to_use: "Er kan voor de geselecteerde bestanden geen invoersjabloon worden gebruikt",
		add_document_no_entry_template_itemtype_permission: "U kunt geen items aan deze map toevoegen. Er moet een invoersjabloon worden geselecteerd en u hebt geen toegang tot een van de invoersjablonen die aan deze map gekoppeld zijn. Vraag of de systeembeheerder u toegang wil geven voor de invoersjablonen die aan deze map gekoppeld zijn. ",
		add_document_appgroup_name_label: "Naam toepassingengroep:",
		add_document_app_name_label: "Naam toepassing:",
		create_folder_dialog_title: "Nieuwe map",
		create_folder_context_info: "De waarden die u voor de mapeigenschappen opgeeft, kunnen worden gebruikt om de map later terug te vinden.",
		create_folder_folder_name_label: "Mapnaam",
		create_folder_save_folder_as_unfiled_label: "De map niet in een andere map opslaan",
		create_folder_save_folder_as_unfiled_hover: "Als u deze optie selecteert, kunt u deze map alleen vinden door hem te zoeken. U kunt er niet naar toe bladeren.",
		add_item_create_in_folder: "In map maken:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "In de mapnaam mogen de volgende tekens niet voorkomen: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "De mapnaam mag niet de tekens \\ / bevatten en mag niet gelijk zijn aan . of ..",
		invalid_box_file_name_message: "De bestandsnaam mag niet de tekens \\ / bevatten en mag niet gelijk zijn aan . of ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "In de bestandsnaam mogen de volgende tekens niet voorkomen: \\ / : * ? \" < > |",
		external_document_placeholder: "Voer de URL van het document in",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "De kleur moet worden ingevoerd als een hexadecimaal getal met 3 of 6 cijfers, bijvoorbeeld #000 of #000000.",
		add_document_unfiled: "${0} niet-opgeslagen",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Document toevoegen met een invoersjabloon",
		add_document_using_template_context_info: "Wanneer u een document toevoegt met behulp van een invoersjabloon, zijn de waarden die u invoert consistent.",
		add_documents_using_template_dialog_title: "Documenten toevoegen met een invoersjabloon",
		add_documents_document_name_is_file_name_hint: "De bestandsnaam wordt voor deze eigenschap gebruikt",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nieuwe map met behulp van invoersjabloon",
		create_folder_using_template_context_info: "Wanneer u een map maakt met behulp van een invoersjabloon, zijn de waarden die u invoert consistent.",

		add_documents_batch_results_dialog_title: "Documenten die niet aan de repository zijn toegevoegd",
		add_documents_batch_results_dialog_context_info: "De volgende documenten zijn niet toegevoegd aan de repository. Selecteer een document en klik op Details voor informatie over de reden waarom een document niet aan de repository is toegevoegd.",
		add_documents_batch_results_dialog_filename_col_hdr: "Bestandsnaam",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Bericht",
		add_documents_batch_results_status_error: "Fout",
		add_documents_batch_results_status_cancelled: "Geannuleerd",
		add_documents_batch_results_status_cancelled_msg: "Het document is niet toegevoegd omdat de opdracht geannuleerd is.",

		add_documents_batch_status_title: "Documenten toevoegen",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Bezig met toevoegen van bestand ${0} van ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Fouten: ${0}",
		add_documents_batch_status_completing_msg: "Het proces wordt beëindigd nadat dit document toegevoegd is.",

		add_documents_status_uploading_msg: "Bezig met uploaden van bestand ${0} van ${1}...",
		add_documents_status_adding_msg: "Bezig met toevoegen van bestand ${0} van ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "De invoersjabloon is in een andere toepassing geconfigureerd, en wel zodanig dat documenten altijd worden gedeclareerd als records. Deze instelling wordt echter genegeerd omdat het declareren van documenten als records niet door de webclient wordt ondersteund.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "De invoersjabloon wordt zodanig geconfigureerd dat u kunt bepalen of dit document als record wordt declareren. Deze instelling wordt echter genegeerd omdat het declareren van documenten als records niet door de webclient wordt ondersteund.",
		no_selection: "&lt;Selecteer&gt;",

		batch_results_dialog_details_label: "Details",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "De waarde is niet geldig.  De waarde moet een GUID (Globally Unique Identifier) zijn, bv.{F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "De waarde is niet geldig.  De waarde moet een getal met drijvende komma zijn, bijvoorbeeld 1,2 of 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "De waarde is niet geldig.  De waarde moet de indeling ${0} hebben, bijvoorbeeld ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "De waarde is niet geldig.  Het moet een decimale waarde zijn, bijvoorbeeld  1,2 of 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "De waarde is niet geldig.  De waarde moet een geheel getal zijn, bijvoorbeeld 5 of 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "De waarde is niet geldig.  De waarde mag alleen alfabetische tekens bevatten, bijvoorbeeld a-z of A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "De waarde is niet geldig.  De waarde mag alleen alfanumerieke tekens bevatten, bijvoorbeeld a-z, A-Z of 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "De waarde is niet geldig.  De waarde mag alleen numerieke tekens bevatten, bijvoorbeeld 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "De waarde is niet geldig.  De waarde mag alleen de volgende tekens bevatten: a-z, A-Z, 0-9, [spatie] en `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "De waarde is niet geldig.  De waarde moet een datum zijn met de volgende indeling: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "De waarde is niet geldig.  De waarde moet een tijd zijn met de volgende indeling: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "De waarde is niet geldig.  Selecteer een waarde in het vervolgkeuzemenu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "De waarde is niet geldig.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "De waarde is niet geldig.  De waarde moet de volgende indeling hebben: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Deze waarde is verplicht.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "De waarde is te lang. Voor de eigenschap geldt een maximumlengte van ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "De waarde is te kort. Voor de eigenschap geldt een minimumlengte van ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "De waarde valt buiten het bereik. De waarde moet een getal met drijvende komma bevatten tussen ${0} en ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "De waarde valt buiten het bereik. De waarde moet een decimale waarden zijn tussen ${0} en ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "De waarde valt buiten het bereik. De waarde moet een geheel getal zijn tussen ${0} en ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "De waarde moet een datum zijn tussen ${0} en ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "De waarde valt buiten het bereik. De waarde moet een datum zijn tussen ${0} en ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "De waarde valt buiten het bereik. De waarde moet een tijd zijn tussen ${0} en ${1}.",
		property_and: "en",

		property_invalidValueOrRequired: "De volgende waarde is ongeldig of is verplicht: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Eigenschappen",
		edit_properties_dialog_info: "U kunt de eigenschappen van dit item bekijken of bewerken. Als u over de juiste machtigingen beschikt, kunt u ook de beveiliging van het item wijzigen. U kunt de systeemeigenschappen echter niet wijzigen.",
		edit_properties_od_dialog_info: "U kunt de eigenschappen van dit item bekijken of bewerken. U kunt de systeemeigenschappen echter niet wijzigen.",
		system_properties_title: "Systeemeigenschappen",
		custom_properties_title: "Eigenschappen",
		/* Folder collaboration tab */
		box_permission_permission: "Machtiging",
		box_permission_permissions: "Machtigingen",
		box_permission_editor: "Editor",
		box_permission_owner: "Eigenaar",
		box_permission_co_owner: "Mede-eigenaar",
		box_permission_viewer_uploader: "Viewer Uploader",
		box_permission_previewer_uploader: "Previewer Uploader",
		box_permission_viewer: "Lezer",
		box_permission_previewer: "Previewer",
		box_permission_uploader: "Uploader",
		box_permission_add: "Toevoegen",
		box_permission_upload: "Uploaden",
		box_permission_download: "Downloaden",
		box_permission_preview: "Preview",
		box_permission_view: "Weergave",
		box_permission_send_links: "Alleen-lezen-links verzenden",
		box_permission_create_subfolders: "Submappen maken",
		box_permission_create_tasks: "Taken maken",
		box_permission_add_comments: "Commentaar toevoegen",
		box_collaboration_invite_placeholder: "Geef een naam, e-mail of groep op ter uitnodiging",
		box_collaboration_invite_placeholder_non_admin: "Geef een e-mail op ter uitnodiging",
		box_collaboration_invalid_email: "Voer een geldig e-mailadres in",
		box_collaboration_user_already_present: "Deze gebruiker werkt al mee aan de map",
		box_collaboration_user_name: "Naam",
		box_collaboration_email_address: "E-mailadres",
		box_collaboration_date_added: "Datum toegevoegd",
		box_collaboration_remove_collaboration: "Verwijderen",
		box_collaboration_remove_collaboration_title: "Wissen",
		box_collaboration_no_collaborators: "Er zijn geen samenwerkers",
		box_collaboration_change_owner_title: "Eigenaar van item wijzigen",
		box_collaboration_change_owner_prompt: "Als u deze samenwerker tot eigenaar van de map maakt, krijgt u de rol van Editor en bent u niet meer de eigenaar van de map. Alle samenwerkers die rechtstreeks aan deze map zijn toegevoegd, krijgen deze map te zien in hun hoofdmap. Alle samenwerkers die zijn toegevoegd op het niveau van de bovenliggende map of hoger, zijn geen samenwerkers meer. Wilt u doorgaan?",
		box_collaboration_remove_self_title: "Uzelf verwijderen",
		box_collaboration_remove_self_prompt: "Weet u zeker dat u u zichzelf wilt verwijderen als samenwerker? U hebt dan geen toegang meer tot deze map.",
		box_collaboration_user: "Gebruiker",
		box_collaboration_group: "Groep",
		box_managing_users_not_configured: "U kunt niet zoeken naar gebruikers en groepen omdat de Box-toepassing niet correct geconfigureerd is. Om deze functie te gebruiken, neemt u contact op met uw beheerder en vraagt u of de BOX-toepassing geconfigureerd kan worden voor het beheer van gebruikers en groepen.",
		duplicate_value_error: "Elke waarde van deze eigenschap moet uniek zijn.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Wijzigingen die u in de volgende velden maakt, worden toegepast op alle geselecteerde  items. Als u een voor bepaald item afwijkende eigenschapswaarden wilt opgeven of de beveiliging van het item wilt wijzigen, moet u de eigenschappen van dat item afzonderlijk wijzigen.",
		multi_edit_properties_class_label: "Klasse:",
		multi_edit_properties_items_label: "Itemnamen:",
		multi_edit_properties_properties_label: "Eigenschappen:",
		multi_edit_batch_status_title: "Eigenschappen bijwerken",
		multi_edit_batch_status_adding_msg: "Bijwerken van item ${0} van ${1}...",
		multi_edit_batch_status_verifying_msg: "Controleren van item ${0} van ${1}...",
		multi_edit_batch_status_completing_msg: "Het proces wordt beëindigd nadat dit item bijgewerkt is.",
		multi_edit_batch_status_validation_completing_msg: "Het proces wordt beëindigd nadat dit item gecontroleerd is.",
		multi_edit_batch_results_status_error: "Fout",
		multi_edit_batch_results_status_cancelled: "Geannuleerd",
		multi_edit_batch_results_status_cancelled_msg: "Het item is niet bijgewerkt omdat de opdracht is geannuleerd.",
		multi_edit_batch_results_dialog_title: "Niet-bijgewerkte items",
		multi_edit_batch_results_dialog_context_info: "De volgende items zijn niet bijgewerkt. Selecteer een itemnaam en klik op Details voor informatie over de reden waarom een item niet is bijgewerkt.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Itemnaam",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Bericht",
		multi_edit_batch_status_errors_msg: "Fouten: ${0}",
		multi_edit_batch_permission_error_text: "De wijzigingen in de eigenschappen kunnen niet worden opgeslagen.",
		multi_edit_invalid_value_error: "Deze waarde is afhankelijk van een andere eigenschapswaarde en is niet geldig voor alle door u geselecteerde items.",
		multi_edit_batch_permission_error_explanation: "U kunt de eigenschappen van dit item niet wijzigen omdat u onvoldoende machtigingen hebt.",
		multi_edit_no_modifiable_properties: "De eigenschappen van de geselecteerde items kunnen niet worden gewijzigd. Dit kan het geval zijn als een item alleen eigenschappen heeft die alleen kunnen worden gelezen of als alleen de naam of de titel van het item bewerkbaar is. Als er meerdere items geselecteerd zijn, kunt u de de naam of titel van de items niet wijzigen.",
		multi_edit_mult_classes_dialog_info: "De geselecteerde items bevinden zich in andere repository's of behoren tot andere klassen. U kunt alleen items wijzigen die in dezelfde klasse of repository aanwezig zijn. Selecteer de subset van items die u wilt bewerken.",
		multi_edit_class_selector_class_heading: "Klasse",
		multi_edit_class_selector_entry_template_heading: "Invoersjabloon",
		multi_edit_class_selector_repository_heading: "Repository",
		multi_edit_class_selector_items_heading: "Items",
		multi_edit_some_classes_not_displayed: "Een aantal van de geselecteerde items zijn niet in deze lijst opgenomen omdat de items alleen eigenschappen bevat die alleen gelezen kunnen worden of omdat de items zich in repository's bevinden die het wijzigen van eigenschappen niet ondersteunen.",
		multi_edit_properties_invalid_msg: "Een aantal van de eigenschapswaarden is niet geldig voor alle geselecteerde  items.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Deze eigenschap kan alleen worden gelezen en niet gewijzigd.",
		multi_edit_append_checkbox_label: "Toevoegen",
		multi_edit_append_checkbox_tooltip: "Selecteer deze optie als u nieuwe eigenschapswaarden wilt toevoegen aan de bestaande waarden in plaats van die te vervangen.",
		multi_edit_properties_invalid_childcomponent_msg: "Sommige waarden in de eigenschap ${0} van de onderliggende component ${1} zijn afhankelijk van andere eigenschappen en zijn niet meer geldig met de selecties die u hebt gemaakt. Wis waarden in de onderliggende component ${1} of maak wijzigingen in eigenschappen voor de items die u afzonderlijk geselecteerd hebt. ",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Eigenschappen exporteren",
		export_properties_dialog_info: "Selecteer de eigenschappen die u wilt exporteren en geef aan in welke volgorde deze moeten worden afgebeeld.",
		export_properties_dialog_export_button_label: "Exporteren",
		export_properties_dialog_export_raw_values: "Onbewerkte waarden exporteren",

		/* Properties */
		filter_clear_tooltip: "Filter wissen",
		properties_new_row: "Nieuw",
		properties_requiredClass_document_tooltip: "Selecteer een document. Het document moet tot de klasse ${0} behoren.",
		properties_requiredClass_folder_tooltip: "Selecteer een map. De map moet tot de klasse ${0} behoren.",
		properties_dataType_tooltip: "Gegevenstype: ${0}",
		properties_maxLength_tooltip: "Maximumlengte: ",
		properties_minLength_tooltip: "Minimumlengte: ",
		properties_minValue_tooltip: "Minimumwaarde: ",
		properties_maxValue_tooltip: "Maximumwaarde: ",
		properties_format_tooltip: "Indeling: ",
		properties_description_tooltip: "Beschrijving: ",

		properties_type_boolean_tooltip: "Booleaans",
		properties_type_date_tooltip: "Datum",
		properties_type_time_tooltip: "Tijd",
		properties_type_timestamp_tooltip: "Tijdsaanduiding",
		properties_type_decimal_tooltip: "Decimale waarde",
		properties_type_double_tooltip: "Getal met drijvende komma",
		properties_type_short_tooltip: "Geheel getal",
		properties_type_integer_tooltip: "Geheel getal",
		properties_type_long_tooltip: "Geheel getal",
		properties_type_string_tooltip: "Tekenreeks",
		properties_type_string_alpha_tooltip: "Alfabetische tekenreeks",
		properties_type_string_alphanum_tooltip: "Alfanumerieke tekenreeks",
		properties_type_string_ext_tooltip: "Uitgebreid alfanumerieke tekenreeks",
		properties_type_string_num_tooltip: "Numerieke tekenreeks",
		properties_type_binary_tooltip: "Binair",
		properties_type_object_tooltip: "Object",
		properties_type_reference_tooltip: "Met deze eigenschap wordt naar een ander item in de repository verwezen.",
		properties_type_guid_tooltip: "Globally Unique Identifier",
		properties_type_group_tooltip: "Gebruikers en groepen",
		properties_type_user_tooltip: "Gebruikers",
		properties_type_childComponent_tooltip: "Onderliggend component",

		properties_childComponent_minCardinalityOnly_tooltip: "Deze eigenschap moet minstens ${0} waarden bevatten.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Deze eigenschap mag niet meer dan ${0} waarden bevatten.",
		properties_childComponent_minMaxCardinality_tooltip: "Deze eigenschap moet minstens ${0} waarden bevatten en dit mogen er niet meer zijn dan ${1}.",
		properties_childComponent_noCardinality_tooltip: "Deze eigenschap mag een willekeurig aantal waarden bevatten.",

		properties_type_guid_example_tooltip: ", bijvoorbeeld {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Selecteer een waarde uit de lijst.",
		properties_single_select_choice_tooltip: "Selecteer een waarde.",
		properties_multiple_select_typein_tooltip: "Een of meer waarden invoeren.",
		properties_multiple_select_choice_tooltip: "Selecteer een of meer waarden.",
		properties_not_selectable_tooltip: "De categorie kan niet worden geselecteerd.",
		properties_none: "Geen",
		properties_none_tooltip: "Selecteer <i>Geen</i> om de huidige waarde voor deze eigenschap te wissen.",
		properties_value_empty: "Geen waarde",
		properties_value_read_only: "Alleen lezen",
		properties_clear_label: "Wissen",
		properties_clear_tooltip: "Door de waarde in dit veld te wissen, wist u de waarde in de repository nadat u op <b>Opslaan</b> hebt geklikt.",
		properties_box_custom_properties: "Aangepaste eigenschappen",
		properties_box_metadata_name_in_use: "Deze naam wordt al gebruikt. Geef een andere naam op voor de aangepaste eigenschap.",

		properties_templates: "Sjablonen",
		properties_add_template: "Sjabloon toevoegen",
		properties_remove_template: "Verwijderen",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Inchecken",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Inchecken",
		checkin_cancel_label: "Annuleren",
		checkin_file_name_label: "Bestandsnaam",
		checkin_document_status_title: "Document inchecken",
		checkin_document_status_uploading_msg: "Bestand uploaden...",
		checkin_document_status_checkingin_msg: "Bestand inchecken...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Selecteer de redactiemodus",
		viewer_redaction_new_document_confirmation_question: "Wilt u de redactie opslaan als nieuw document of lokaal bestand?",
		viewer_redaction_new_version_confirmation_question: "Wilt u de redactie opslaan als een nieuwe versie?",
		viewer_redaction_new_version_confirmation_question_never: "Wilt u de redactie opslaan als nieuwe content?",		
		viewer_redaction_new_document_button: "Ja",
		viewer_redaction_new_document_cancel_button: "Nee",
		viewer_redaction_add_document_confirmation_question: "Wilt u de redactie opslaan als nieuw document, nieuwe versie of lokaal bestand?",
		viewer_redaction_add_document_confirmation_question_version_never: "Wilt u de redactie opslaan als nieuw document, nieuwe content of lokaal bestand?",
		viewer_redaction_add_document_button: "Nieuw document",
		viewer_redaction_add_new_version_button: "Nieuwe versie",
		viewer_redaction_add_new_version_button_version_never: "Nieuwe content",
		viewer_redaction_add_local_file_button: "Lokaal bestand",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Afschermingsreden selecteren",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "De invoersjabloon die is gebruikt om dit document aan de repository toe te voegen, is niet gevonden. Het document wordt in de repository ingecheckt zonder gebruik van de invoersjabloon.",
		property_entry_template_not_retrieved_warning: "De invoersjabloon die is gebruikt om dit document aan de repository toe te voegen, is niet gevonden. De documenteigenschappen worden afgebeeld zonder gebruik te maken van de invoersjabloon.",
		multi_edit_entry_template_not_found_name: "[Niet gevonden]",
		multi_edit_entry_template_not_retrieved_warning: "De invoersjabloon die is gebruikt om items aan de repository toe te voegen, is niet gevonden. De itemeigenschappen worden gewijzigd zonder gebruik te maken van de invoersjabloon.",
		checkin_major_version_hover: "Verhoogt het nummer van de documentversie met één en stelt de documentstatus in op Vrijgegeven. Als deze optie niet is geselecteerd, is het document niet klaar om te worden vrijgegeven en wordt het ingecheckt als kleine versie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Het document kan niet worden ingecheckt want het is niet uitgecheckt.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Het gebruikers-ID of wachtwoord is ongeldig voor de server.",
		error_bad_userid_password_userResponse: "Controleer het gebruikers-ID en het wachtwoord.",
		error_bad_userid_password_adminResponse: "De volgende fout is geretourneerd: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "fout_bericht",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Er kan geen verbinding met de webclient tot stand worden gebracht via de volgende URL: ${0}.",
		http_send_error_explanation: "Deze fout kan worden veroorzaakt door een configuratieprobleem op de webtoepassingenserver of door een probleem met de webclienttoepassing.",
		http_send_error_userResponse: "Meld u opnieuw aan. Als het probleem blijft bestaan, meld dit dan bij de systeembeheerder.",
		http_send_error_adminResponse: "De volgende HTTP-fout is geretourneerd: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Er kan geen verbinding met de webclient tot stand worden gebracht via de volgende URL: ${0}.",
		http_error_explanation: "Het kan zijn dat u zich moet verifiëren bij een firewall, of dat de webtoepassingenserver niet werkt of niet kan worden bereikt door netwerkproblemen.",
		http_error_userResponse: "Als u zich moet verifiëren bij een firewall, doe dit dan en probeer u opnieuw aan te melden. Als het probleem blijft bestaan, meld dit dan bij de systeembeheerder.",
		http_error_adminResponse: "De volgende HTTP-fout is geretourneerd: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Er kan geen verbinding met de webclient tot stand worden gebracht via de volgende URL: ${0}.",
		http_response_bad_explanation: "Deze fout kan worden veroorzaakt door een configuratieprobleem op de webtoepassingenserver of door een probleem met de webclient.",
		http_response_bad_userResponse: "Meld u opnieuw aan. Als het probleem blijft bestaan, meld dit dan bij de systeembeheerder.",
		http_response_bad_adminResponse: "De volgende fout is geretourneerd: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Naamloos",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "De e-mailapplet kan niet worden gestart.",
		email_applet_init_failed_explanation: "Dit probleem kan optreden als uw e-mailclient niet correct geïnstalleerd en geconfigureerd is, of als er geen ondersteunde versie van de Java Runtime Environment (JRE) op uw werkstation is geïnstalleerd.",
		email_applet_init_failed_userResponse: "Het probleem oplossen:<ul><li>Zorg ervoor dat uw e-mailtoepassing geïnstalleerd is en is ingesteld als de standaard e-mailclient op uw werkstation.</li><li>Controleer of er op uw werkstation een ondersteunde versie van JRE is geïnstalleerd. Dit doet u door naar een opdrachtprompt te gaan en de volgende opdracht op te geven: java -version</li></ul><p>Een lijst van ondersteunde versies van JRE vindt u in het document <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> op de website van IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "De e-mailtoepassing kon niet worden gestart, omdat een vereist DLL-bestand niet kan worden geladen.",
		email_applet_JNI_LOAD_FAILED_explanation: "Het vereiste WCEmailAppletJNI.dll-bestand kan niet worden geladen, omdat de tijdelijke directory van uw werkstation mogelijk vol is.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Zorg ervoor dat er voldoende ruimte is in de tijdelijke directory.  Probeer het document daarna nogmaals vanaf de webclient te versturen. Het bestand WCEmailAppletJNI.dll wordt standaard geladen in de tijdelijke directory die in de instellingen van uw webbrowser is opgegeven.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "De e-mailtoepassing kon niet worden gestart, omdat de e-mailapplet geen tijdelijk bestand kan  maken.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Mogelijk is de tijdelijke directory op uw werkstation vol.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Zorg ervoor dat er voldoende ruimte is in de tijdelijke directory.  Probeer het document daarna nogmaals vanuit de webclient te versturen.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "De e-mailtoepassing kon niet worden gestart, omdat de e-mailapplet de tijdelijke directory niet kan openen.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Mogelijk is de tijdelijke directory op uw werkstation vol of beschikt u niet over de juiste toegangsrechten om naar de tijdelijke directory te schrijven.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Zorg ervoor dat er voldoende ruimte is op de tijdelijke directory en dat u over schrijfrechten beschikt voor de tijdelijke directory. Probeer het document daarna nogmaals vanaf de webclient te versturen. Als het probleem blijft bestaan, kunt u contact opnemen met de systeembeheerder.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "De e-mailapplet kan een tijdelijk bestand niet wissen.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Mogelijk werkt een andere toepassing met het bestand of het bestand is misschien niet aanwezig op uw werkstation.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Als het bestand wordt gebruikt in een andere toepassing, sluit u die toepassing. Als het bestand zich op uw lokale bestandssysteem bevindt, verwijdert u het volgende bestand van de tijdelijke directory op uw werkstation: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "De link naar het document kan niet worden gemaakt.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "De repository heeft de URL geretourneerd in een ongeldige indeling.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Sluit de webbrowser (inclusief alle tabbladen en sessies) en meld u opnieuw aan. Probeer het document nogmaals vanaf de webclient te versturen. Als dit probleem blijft bestaan, neemt u contact op met IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "De e-mailapplet kan het bestand niet toevoegen aan een e-mail.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "De repository heeft de URL voor het document in een ongeldige indeling geretourneerd.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Sluit de webbrowser (inclusief alle tabbladen en sessies) en meld u opnieuw aan. Probeer het document nogmaals vanaf de webclient te versturen. Als dit probleem blijft bestaan, neemt u contact op met IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "De bijlage kan niet worden gemaakt.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "De e-mailapplet kan de URL voor het bestand niet lezen.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Sluit de webbrowser (inclusief alle tabbladen en sessies) en meld u opnieuw aan. Probeer het document nogmaals vanaf de webclient te versturen. Als dit probleem blijft bestaan, neemt u contact op met IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Het document kan niet worden opgehaald uit de repository.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Het kan zijn dat uw sessie is verlopen, dat de repository of webtoepassing niet actief is, of er kan een probleem zijn met de configuratie van de webclient.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Meld u aan en probeer nogmaals het document te e-mailen. Als het probleem zich blijft voordoen, vraagt u de systeembeheerder om de foutenlogboeken van de repository te checken.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Als u de webclient hebt geconfigureerd voor het converteren van AFP-documenten naar een andere indeling, zoals PDF, zorg er dan voor dat de conversie correct is geconfigureerd voordat u de documenten als bijlagen verzendt.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Het document kan niet worden geconverteerd naar PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "De functie die wordt gebruikt om documenten te converteren naar PDF ondersteunt het bestandstype niet.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Sluit deze pagina en probeer het document opnieuw te e-mailen zonder het te converteren naar PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "De e-mail is niet gemaakt.",
		email_applet_MAPI_USER_ABORT_explanation: "Open uw e-mailtoepassing en controleer of alles naar behoren werkt. Probeer het document daarna nogmaals vanaf de webclient te versturen. Als het probleem blijft bestaan, vraag dan of de systeembeheerder de eventlogboeken van uw besturingssysteem wil controleren.",
		email_applet_MAPI_USER_ABORT_userResponse: "Als u van plan was de e-mailtoepassing af te sluiten, hoeft u verder niets te doen. Om de e-mail te verzenden, meldt u zich aan bij uw e-mailtoepassing en probeert u nogmaals het document te verzenden vanuit de webclient. ",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "De e-mail kan niet worden gemaakt.",
		email_applet_MAPI_FAILURE_explanation: "Mogelijk is uw e-mailclient niet geopend of bent u niet aangemeld.",
		email_applet_MAPI_FAILURE_userResponse: "Open uw e-mailtoepassing en controleer of alles naar behoren werkt. Probeer het document daarna nogmaals vanaf de webclient te versturen. Als het probleem blijft bestaan, vraag dan of de systeembeheerder de eventlogboeken van uw besturingssysteem wil controleren.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "De e-mail kan niet worden gemaakt.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "U bent niet bij uw e-mailclient aangemeld. Uw e-mailclient moet open staan en u moet zijn aangemeld om een bericht te verzenden vanuit de webclient.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Open uw e-mailclient en meld u aan. Probeer het document daarna nogmaals vanuit de webclient te versturen.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "De e-mail kan niet worden gemaakt, omdat het tijdelijke bestand niet op uw werkstation kan worden gemaakt.",
		email_applet_MAPI_DISK_FULL_explanation: "Mogelijk is de tijdelijke directory op uw werkstation vol.",
		email_applet_MAPI_DISK_FULL_userResponse: "Zorg ervoor dat er voldoende ruimte is in de tijdelijke directory.  Probeer het document daarna nogmaals vanuit de webclient te versturen.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "De e-mail kan niet worden gemaakt omdat er onvoldoende systeemgeheugen is.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Mogelijk zijn er te veel toepassingen open.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Sluit alle ongebruikte toepassingen en probeer vervolgens om het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI-toegang is geweigerd.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Toegang tot MAPI (Messaging Application Programming Interface) is mogelijk niet ingeschakeld of niet ondersteund voor uw e-mailtoepassing. MAPI is het berichtenprotocol dat wordt gebruikt om communicatie tussen de webclient en uw e-mailtoepassing mogelijk te maken.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Neem contact op met de systeembeheerder.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Zorg ervoor dat toegang tot MAPI voor de e-mailtoepassing is ingesteld en juist is geconfigureerd. Als het probleem blijft bestaan, neemt u contact op met IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "De bijlage of de koppeling naar het item kan niet worden gemaakt.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Mogelijk zijn er te veel webbrowsersessies open.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Sluit alle ongebruikte webbrowsersessies. Probeer het document daarna nogmaals vanaf de webclient te versturen. Als het probleem blijft bestaan, kunt u contact opnemen met de systeembeheerder.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "De e-mail kan niet worden verstuurd.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Mogelijk wilt u te veel bijlagen versturen.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Selecteer minder bestanden. Probeer de documenten daarna nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "De e-mail kan niet worden verstuurd.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Mogelijk wilt u de e-mail verzenden naar te veel ontvangers.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Verzend de e-mail naar een kleiner aantal ontvangers.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "De bijlage kan niet worden gemaakt.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Mogelijk zijn enkele vereiste tijdelijke bestanden gewist voordat de bijlage kon worden gemaakt. Deze fout kan optreden als de browsercache wordt gewist voordat de e-mail is verzonden.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "De bijlage kan niet worden gemaakt.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Mogelijk zijn enkele vereiste tijdelijke bestanden gewist voordat de bijlage kon worden gemaakt. Deze fout kan optreden als de browsercache wordt gewist voordat de e-mail is verzonden.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "De bijlage kan niet worden gemaakt door de e-mailtoepassing.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "De e-mail kan niet worden verzonden naar de opgegeven ontvanger.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "De ontvanger is mogelijk niet aanwezig in het adresboek.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Controleer de naam van de ontvanger en probeer het document opnieuw te verzenden.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "De e-mail kan niet worden verzonden naar de opgegeven ontvanger.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Het e-mailadres is mogelijk onjuist geformuleerd.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Zorg dat u een geldig e-mailadres hebt opgegeven en probeer het document opnieuw te verzenden.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_NO_MESSAGES_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "De e-mail kan niet worden verstuurd.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "De e-mail is mogelijk te lang.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Verkort de tekst van de e-mail en probeer de e-mail opnieuw te verzenden.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "De e-mail kan niet worden gemaakt.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Op de e-mailclient is mogelijk een fout opgetreden tijdens het maken van de e-mail.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Start uw e-mailclient opnieuw en probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "De e-mail is misschien niet goed samengesteld.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "De e-mail kan niet worden verzonden naar de opgegeven ontvanger.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Het e-mailadres is mogelijk onjuist geformuleerd.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Zorg dat u een geldig e-mailadres hebt opgegeven en verzend opnieuw het document.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "De e-mailclient kan de gevraagde actie niet uitvoeren.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "De e-mailtoepassing heeft een onverwachte fout teruggezonden.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Probeer het document nogmaals vanaf de webclient te versturen.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Uit een van de eigenschappen ontbreekt het vereiste aantal waarden.",
		error_property_cardinality_explanation: "Sommige eigenschappen hebben een minimum- en maximumaantal waarden.",
		error_property_cardinality_userResponse: "Gebruik de voorgrond-Help om te achterhalen welke eigenschap een minimaal aantal waarden vereist. Geef vervolgens het minimale aantal waarden op en probeer het opnieuw.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Er is een bestandsnaam vereist.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Geef een bestandsnaam op en probeer het opnieuw.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "De plugin ${0} bevat fouten.",
		plugin_error_explanation: "Er is een fout opgetreden bij de evaluatie van het JavaScript voor de plugin ${0}. Als u de webclient blijft gebruiken, kunt u nog meer fouten aantreffen.",
		plugin_error_userResponse: "Neem contact op met de systeembeheerder.",
		plugin_error_adminResponse: "Er is een probleem met de plugin dat opgelost moet worden door de leverancier ervan. Het wordt aanbevolen de plugin uit de configuratie van uw webclient te verwijderen totdat het probleem met de plugin is verholpen.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "De invoersjabloon kan niet worden geopend.",
		open_old_format_entry_template_error_explanation: "De invoersjabloon gebruikt een oudere indeling die niet in de webclient wordt ondersteund.",
		open_old_format_entry_template_error_userResponse: "Vraag de systeembeheerder om de invoersjabloon bij te werken.",
		open_old_format_entry_template_error_adminResponse: "Gebruik de Application Engine of Workplace XT Entry Template Designer om een bijgewerkte versie van de invoersjabloon op te slaan.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "De invoersjabloon kan niet worden geopend.",
		open_custom_object_entry_template_error_explanation: "De webclient ondersteunt het volgende type invoersjabloon: invoersjablonen voor aangepaste objecten.",
		open_custom_object_entry_template_error_userResponse: "Open een andere invoersjabloon.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Het eforms-object kan niet worden geopend.",
		open_forms_object_error_explanation: "De webclient ondersteunt de volgende eforms-objecttypen niet: formuliersjabloon, formuliergegevens documentbeleid en werkstroombeleid.",
		open_forms_object_error_userResponse: "Open een ander document.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "U kunt de invoersjabloon ${0} niet gebruiken.",
		entry_template_folder_restricted_error_explanation: "Met de invoersjabloon worden items toegevoegd aan de map ${1}, en u beschikt niet over de juiste machtigingen om items aan die map toe te voegen.",
		entry_template_folder_restricted_error_userResponse: "Selecteer een andere invoersjabloon of vraag de systeembeheerder om u de juiste machtigingen te geven om items toe te voegen aan map ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "map_naam",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "De invoersjabloon kan niet worden geopend.",
		open_records_entry_template_error_explanation: "De webclient ondersteunt het volgende type invoersjabloon: invoersjablonen voor declareren als record.",
		open_records_entry_template_error_userResponse: "Open een andere invoersjabloon.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "De werkstroom kan niet worden geopend.",
		open_workflow_error_explanation: "De webclient biedt geen ondersteuning voor het openen van werkstromen.",
		open_workflow_error_userResponse: "Open een ander document.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Het document kan niet worden geopend.",
		viewer_unable_to_view_error_explanation: "Er is geen viewer geconfigureerd voor documenten van dit type, of de geconfigureerde viewer is niet compatibel met uw systeem.",
		viewer_unable_to_view_error_userResponse: "Vraag de systeembeheerder een viewer te configureren voor documenten van dit type en controleer of de geconfigureerde viewer geschikt is voor het systeem van de gebruiker.",
		viewer_unable_to_view_error_adminResponse: "Configureer met de beheerfunctie een viewer voor dit type document.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "De zoekopdracht kan niet worden geopend.",
		search_cannot_open_error_explanation: "De zoekfunctie is niet voor deze desktop geconfigureerd.",
		search_cannot_open_error_userResponse: "Vraag de systeembeheerder of u toegang kunt krijgen tot een desktop met de zoekfunctie of vraag of de zoekfunctie in deze desktop kan worden opgenomen.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Het document is niet geladen.",
		viewer_document_load_failed_error_explanation: "Met de Daeja ViewONE Professional-viewer kan het document niet worden geopend.",
		viewer_document_load_failed_error_userResponse: "Zie voor meer informatie het foutbericht dat wordt afgebeeld in de viewer.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Het document kan niet worden afgebeeld.",
		viewer_session_expired_explanation: "De inhoud van het document kan niet worden afgebeeld.",
		viewer_session_expired_userResponse: "Probeer u nogmaals aan te melden.  Blijft het probleem bestaan, dan kan het zijn dat de toepassingenserver niet actief is. Vraag uw systeembeheerder om de logboeken van IBM Content Navigator te bekijken of start de server opnieuw op.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Het document kan niet worden afgebeeld.",
		ajaxViewer_getPage_failed_explanation: "De AJAX-viewer heeft een foutrespons ontvangen bij het ophalen van de inhoud van de pagina.  Mogelijk is de toepassingenserver niet actief.",
		ajaxViewer_getPage_failed_userResponse: "Sluit de webbrowser en meld u opnieuw aan.  Als het probleem zich blijft voordoen, vraagt u de systeembeheerder om de foutlogboeken van de webtoepassingenserver te controleren of de server opnieuw te starten.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "De Java Runtime Environment (JRE) is niet aangetroffen op uw werkstation.",
		viewer_java_plugin_not_found_explanation: "De plugin is niet gevonden of er is geen juiste versie van de JRE geïnstalleerd.",
		viewer_java_plugin_not_found_userResponse: "Controleer of de JRE geïnstalleerd is. Ga bijvoorbeeld naar een opdrachtprompt en geef de volgende opdracht op: Java -version. Als de JRE niet geïnstalleerd is, of als de verkeerde versie geïnstalleerd is, installeert u de juiste versie van de JRE. Een lijst van ondersteunde versies vindt u in het document <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> op de website van IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Het document kan niet in uw webbrowser worden afgebeeld.",
		viewer_pdf_plugin_not_found_explanation: "De plugin die gebruikt wordt voor het afbeelden van PDF-documenten in de webbrowser is niet gevonden.",
		viewer_pdf_plugin_not_found_userResponse: "Het PDF-bestand wordt gedownload naar uw werkstation in plaats van afgebeeld in het viewervenster.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Het volgende item kan niet worden toegevoegd aan de repository: ${0}.",
		add_document_single_item_error_explanation: "Deze fout kan optreden om een van de volgende redenen:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>U probeerde een document toe te voegen dat verplaatst of gewist was.</li>" + "<li>U probeerde een document toe te voegen waarvan de naam was gewijzigd.</li>" + "<li>U probeerde een beschadigd document toe te voegen.</li>" + "<li>U probeerde een document toe te voegen dat open is in een andere toepassing.</li>" + "<li>U probeerde een map toe te voegen aan de repository.</li>" + "<li>U beschikt niet over de juiste machtigingen op het besturingssysteem om met het document te mogen werken.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Neem de juiste maatregelen om het probleem op te lossen:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Als het document verplaatst of hernoemd is, zoek het dan op en probeer het nogmaals toe te voegen.</li>" + "<li>Als het document open is in een andere toepassing, sluit het dan en probeer het nogmaals toe te voegen.</li>" + "</ul>" + "<br>Het is niet mogelijk om mappen toe te voegen aan de repository.",
		add_document_single_item_error_0: "mislukt_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "De volgende ${0} items kunnen niet worden toegevoegd aan de repository: ${1}.",
		add_document_multiple_items_error_explanation: "Door een probleem met een van de items kan geen van de items worden toegevoegd aan de repository. Deze fout kan optreden om een van de volgende redenen:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>U probeerde een document toe te voegen dat verplaatst of gewist was.</li>" + "<li>U probeerde een document toe te voegen waarvan de naam was gewijzigd.</li>" + "<li>U probeerde een beschadigd document toe te voegen.</li>" + "<li>U probeerde een document toe te voegen dat open is in een andere toepassing.</li>" + "<li>U probeerde een map toe te voegen aan de repository.</li>" + "<li>U beschikt niet over de juiste machtigingen op het besturingssysteem om met het document te mogen werken.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Neem de juiste maatregelen om het probleem op te lossen:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Als er een document verplaatst of hernoemd is, zoek het dan op en probeer de items nogmaals toe te voegen.</li>" + "<li>Als er een document open is in een andere toepassing, sluit het dan en probeer de items nogmaals toe te voegen.</li>" + "<li>Als er een document gewist of beschadigd is, hef de selectie ervan dan op en probeer nogmaals de resterende items toe te voegen.</li>" + "</ul>" + "<br>Het is niet mogelijk om mappen toe te voegen aan de repository.",
		add_document_multiple_items_error_0: "aantal_items",
		add_document_multiple_items_error_1: "mislukte_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "U kunt geen items vanaf deze locatie slepen en neerzetten.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Het eforms-object kan niet worden geopend.",
		open_forms_work_object_error_explanation: "De webclient ondersteunt niet het volgende type eforms-object: werkstroombeleid.",
		open_forms_work_object_error_userResponse: "Open een ander document.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Het document kan niet worden geopend.",
		viewer_privilege_to_view_error_explanation: "U beschikt niet over de vereiste bevoegdheden om het document te bekijken.",
		viewer_privilege_to_view_error_userResponse: "Vraag de eigenaar van het document of uw systeembeheerder om u de vereiste machtigingen te verlenen voor het bekijken van het document.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "De items kunnen niet worden toegevoegd aan de repository.",
		add_document_too_many_items_error_explanation: "U kunt maximaal ${0} items tegelijk toevoegen. U probeert ${1} items toe te voegen.",
		add_document_too_many_items_error_userResponse: "Verwijder een aantal items uit uw lijst en probeer opnieuw de items toe te voegen. U kunt uw systeembeheerder ook vragen om een hogere waarde in te stellen voor het maximumaantal documenten dat per keer kan worden toegevoegd aan deze desktop.",
		add_document_too_many_items_error_0: "maximum_aantal_items",
		add_document_too_many_items_error_1: "aantal_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Er kan geen verbinding met de webclient tot stand worden gebracht via de volgende URL: ${0}.",
		http_ltpa_expired_explanation: "De LTPA-sleutel die bij uw browsersessie hoort, is verlopen.",
		http_ltpa_expired_userResponse: "Start de webbrowser opnieuw en probeer u nogmaals aan te melden. Als het probleem blijft bestaan, meld dan de volgende fout bij de systeembeheerder: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_fout",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Het document kan niet worden toegevoegd aan de map ${0}.",
		dnd_no_privilege_error_explanation: "De machtigingen van de map verhinderen dat er documenten aan de map worden toegevoegd.",
		dnd_no_privilege_error_userResponse: "Voeg het document toe aan een andere map.",
		dnd_no_privilege_error_0: "item_naam",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "De items kunnen niet worden gewijzigd.",
		modify_document_too_many_items_error_explanation: "U kunt maximaal ${0} items tegelijk wijzigen. U probeert ${1} items te wijzigen.",
		modify_document_too_many_items_error_userResponse: "Selecteer minder items en probeer de items nogmaals te wijzigen. U kunt uw systeembeheerder ook vragen om een hogere waarde in te stellen voor het maximumaantal items dat per keer op deze desktop kan worden gewijzigd.",
		modify_document_too_many_items_error_0: "maximum_aantal_items",
		modify_document_too_many_items_error_1: "aantal_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "U kunt de klasse ${0} niet gebruiken.",
		add_document_multiple_unique_values_error_explanation: "De klasse ${0} bevat een of meer eigenschappen die een unieke waarde voor elk document vereisen. Als u meerdere documenten toevoegt, gebruiken alle documenten dezelfde waarden.",
		add_document_multiple_unique_values_error_userResponse: "Selecteer een andere klasse of voeg de documenten afzonderlijk toe.",
		add_document_multiple_unique_values_error_0: "weergavenaam_klasse",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "U kunt de invoersjabloon ${0} niet gebruiken.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Voor de invoersjabloon ${0} dient u documenten toe te voegen aan klasse ${1}. De klasse ${1} bevat echter een of meer eigenschappen die een unieke waarde voor elk document vereisen. Als u meerdere documenten toevoegt, gebruiken alle documenten dezelfde waarden.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Selecteer een andere invoersjabloon of voeg de documenten afzonderlijk toe.",
		add_document_multiple_unique_values_entry_template_error_0: "naam_invoersjabloon",
		add_document_multiple_unique_values_entry_template_error_1: "weergavenaam_klasse",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "U kunt de invoersjabloon ${0} niet gebruiken.",
		entry_template_class_restricted_error_explanation: "Met de invoersjabloon worden items toegevoegd met behulp van de klasse ${1}, en u beschikt niet over de juiste machtigingen om items met die klasse toe te voegen.",
		entry_template_class_restricted_error_userResponse: "Selecteer een andere invoersjabloon of vraag de systeembeheerder om u de juiste machtigingen te geven om items toe te voegen met behulp van de klasse ${1}.",
		entry_template_class_restricted_error_0: "naam_invoersjabloon",
		entry_template_class_restricted_error_1: "weergavenaam_klasse",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Het werkitem kan niet opnieuw worden toegewezen aan een andere gebruiker.",
		process_reassign_error_explanation: "De actie wordt verboden door de werkstroom.",
		process_reassign_error_userResponse: "U kunt het werkitem openen en de huidige stap voltooien in het werkitem. Voor meer informatie over dit probleem kunt u de eigenaar van het item vragen of het werkitem opnieuw toegewezen kan worden.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "De volgende aangepaste actie kan niet geladen worden: ${0}.",
		customaction_loadurl_error_explanation: "De aangepaste actie bevindt zich niet op een toegankelijke locatie. De huidige URL van de aangepaste actie is ${1}.",
		customaction_loadurl_error_userResponse: "Vraag of de beheerder de aangepaste actie wil verplaatsen naar een locatie die wel toegankelijk is.",
		customaction_loadurl_error_adminResponse: "Het JSP-bestand waarin de aangepaste actie wordt gedefinieerd, moet worden geleverd als onderdeel van de webtoepassing van de eClient of de webtoepassing van IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "De volgende functie is niet gevonden: ${0}.",
		feature_invalid_explanation: "Dit probleem kan zich voordoen als de functie niet beschikbaar is op de opgegeven desktop of als de naam van de functie onjuist gespeld is.",
		feature_invalid_userResponse: "Als u op OK klikt, wordt u doorgeleid naar de standaardfunctie voor deze desktop. Meld dit probleem aan de systeembeheerder.",
		feature_invalid_adminResponse: "Als de functie niet op de desktop beschikbaar is, werk dan de configuratie van de desktop bij in de beheerfunctie. Als de functie niet op de desktop aanwezig is of onjuist gespeld is, werk dan samen met de toepassingsontwikkelaar die de URL gemaakt heeft de URL bij.",
		feature_invalid_number: 2066,
		feature_invalid_0: "functie_naam",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "De zoekopdracht ${0} kan niet worden geopend.",
		search_unsupportedTeamspaceSearch_error_explanation: "U moet zich in een teamruimte bevinden om deze zoekopdracht te openen.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Selecteer een andere zoekopdracht.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Het volgende bestand kan niet worden geïmporteerd: ${0}",
		wrong_import_file_type_error_explanation: "Het bestand moet een eigenschappenbestand zijn.",
		wrong_import_file_type_error_userResponse: "Selecteer het eigenschappenbestand dat u uit de beheerfunctie hebt geëxporteerd.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "De repository ${0} is niet gevonden in de desktop ${1}.",
		browse_repository_not_found_error_explanation: "Als een bepaalde repository wordt opgegeven in een URL-parameter, moet die repository aanwezig zijn op de desktop en moet de bladerfunctie voor die repository zijn ingeschakeld.",
		browse_repository_not_found_error_userResponse: "Controleer of het in de URL opgegeven repository-ID correct is, of de repository is toegevoegd aan de desktop ${1} en of de bladerfuncties voor de repository is ingeschakeld.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "De bladerfunctie van de repository ${0} is niet ingeschakeld op de desktop ${1}.",
		browse_repository_not_enabled_error_explanation: "Als een bepaalde repository wordt opgegeven in een URL-parameter, moet de bladerfunctie voor die repository zijn ingeschakeld.",
		browse_repository_not_enabled_error_userResponse: "Schakel de bladerfunctie in voor de repository ${0} in de desktop ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "De zoekopdracht kan niet worden uitgevoerd, want de link bevat ongeldige criteria.",
		invalid_xt_stored_search_criteria_error_explanation: "De volgende waarde is niet geldig: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Vraag of de systeembeheerder een bijgewerkte link kan verstrekken.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Wijzig het desbetreffende naam/waarde-paar in de URL. Als u niet weet welke waarden er geldig zijn voor de eigenschap, opent u de opgeslagen zoekopdracht in de FileNet Workplace XT Search Designer en zoekt u een waarde op die geldig is.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "De zoekopdracht over meerdere repository's kan niet worden geopend.",
		unified_search_invalid_fixed_value_error_explanation: "De zoekopdracht over meerdere repository's bevat ongeldige criteria. Dit probleem kan zich voordoen als het criterium een vaste waarde heeft die niet compatibel is met de andere eigenschappen in een toewijzing. Dit probleem kan bijvoorbeeld optreden als de vaste waarde een tekenreeks is maar de andere eigenschappen in de toewijzing gehele getallen zijn.",
		unified_search_invalid_fixed_value_error_userResponse: "Als u de toepasselijke machtigingen hebt om de zoekopdracht te bewerken, verwijdert u de ongeldige criteria en slaat u de zoekopdracht opnieuw op. Als u geen toepasselijke machtigingen hebt om de zoekopdracht te bewerken, vraag dan aan de eigenaar ervan of aan de systeembeheerder om de zoekopdracht opnieuw op te slaan.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Uw opdracht kan niet worden uitgevoerd.",
		launch_action_invalid_json_error_explanation: "De aan de webclient doorgegeven gegevens zijn ongeldig.",
		launch_action_invalid_json_error_userResponse: "Geef aan de systeembeheerder door welke toepassing u gebruikte op het moment dat dit probleem optrad.",
		launch_action_invalid_json_error_adminResponse: "De clienttoepassing heeft geen geldig JSON-object naar de webclient gestuurd. Neem voor extra assistentie contact op met IBM Software Support.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Uw opdracht kan niet worden uitgevoerd.",
		launch_action_not_found_error_explanation: "De actie ${0} is geconfigureerd voor geen enkel menu op de desktop ${1}.",
		launch_action_not_found_error_userResponse: "Vraag of de systeembeheerder de desktop ${1} zodanig wil configureren dat er de actie ${0} aanwezig is in een menu. De systeembeheerder kan u ook toewijzen aan een desktop waarin de actie ${0} al aanwezig is.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Uw opdracht kan niet worden uitgevoerd.",
		launch_action_repository_not_found_error_explanation: "De repository ${0} is niet gekoppeld aan de desktop ${1}.",
		launch_action_repository_not_found_error_userResponse: "Vraag of de systeembeheerder de repository ${0} aan de desktop ${1} kan koppelen. De systeembeheerder kan u ook toewijzen aan een desktop waarin de repository ${0} al aanwezig is.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "De teamruimte kan niet worden geopend.",
		teamspace_cannot_open_error_explanation: "De functie voor teamruimten is niet voor deze werkplek geconfigureerd.",
		teamspace_cannot_open_error_userResponse: "Vraag de systeembeheerder of u toegang kunt krijgen tot een desktop met de functie voor teamruimten of vraag of de functie in deze desktop kan worden opgenomen.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Een fout is opgetreden tijdens het inchecken van de geredigeerde content.",
		viewer_redaction_checkin_failed_explanation: "De viewer heeft een foutrespons ontvangen bij het inchecken van geredigeerde content.",
		viewer_redaction_checkin_failed_userResponse: "Vraag de systeembeheerder om de logboekbestanden van de webtoepassingenserver te controleren.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "U kunt geen documenten aan deze repository toevoegen.",
		add_document_odserver_odwek_version_od_error_explanation: "De huidige versie van IBM Content Manager OnDemand Server of ODWEK is niet op het minimumniveau dat vereist is om het toevoegen van documenten aan een Content Manager OnDemand-repository mogelijk te maken.",
		add_document_odserver_odwek_version_od_error_userResponse: "Vraag de beheerder om na te gaan welke versies van Content Manager OnDemand Server en ODWEK er vereist zijn voor de ondersteuning van het toevoegen van documenten aan Content Manager OnDemand-repository's.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "De items kunnen niet worden toegevoegd aan de repository.",
		add_document_too_many_items_od_error_explanation: "Bij IBM Content Manager OnDemand-repository's kunt u slechts één item tegelijk toevoegen.",
		add_document_too_many_items_od_error_userResponse: "Verwijder een aantal items uit uw lijst en probeer opnieuw de items toe te voegen, één voor één.",
		add_document_too_many_items_od_error_0: "maximum_aantal_items",
		add_document_too_many_items_od_error_1: "aantal_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Het item kan niet worden toegevoegd aan de repository.",
		add_document_filesize_empty_od_error_explanation: "Het is niet mogelijk om lege bestanden toe te voegen aan een IBM Content Manager OnDemand-repository.",
		add_document_filesize_empty_od_error_userResponse: "Voeg content toe aan het bestand en probeer nogmaals het bestand toe te voegen, of voeg een ander item toe.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "De zoekopdracht over meerdere repository's kan niet worden geopend.",
		unified_search_repository_not_found_error_explanation: "De zoekopdracht over meerdere repository's bevat een of meer ongeldige repository's. Dit probleem kan zich voordoen als repository's die in de zoekopdracht voorkomen uit de toepassing gewist zijn of verwijderd zijn uit de huidige desktop.",
		unified_search_repository_not_found_error_userResponse: "Als u de toepasselijke machtigingen hebt om de zoekopdracht te bewerken, slaat u de zoekopdracht opnieuw op. Bij het opslaan van de zoekopdracht verwijdert de webclient ongeldige repository's uit de zoekopdracht. Als u geen toepasselijke machtigingen hebt om de zoekopdracht te bewerken, vraag dan aan de eigenaar ervan of aan de systeembeheerder om de zoekopdracht opnieuw op te slaan.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Er kan geen nieuw document worden gemaakt.",
		edit_document_using_office_online_error: "Het document kan niet worden geopend.",
		edit_document_using_office_online_error_explanation: "De URL van Microsoft Office Online Server is niet geconfigureerd.",
		edit_document_using_office_online_error_userResponse: "Voordat u Office Online kunt gaan gebruiken, moet de beheerder Office Online Server inschakelen in een repository en moet de beheerder de URL van Microsoft Office Online Server opgeven.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Het document kan niet in Microsoft Office Online geopend worden.",
		edit_document_using_office_online_error_userResponse1: "Vraag uw beheerder de MS Office Online Server Integration bij te werken.<br><br> Als de gebruiker toegang tot dit document moet hebben in Microsoft Office Online, gaat u naar de pagina Edit-integratie voor de repository en werkt u de MS Office Online Server Integration bij door het opnemen van de klassen in de lijst van klassen die gewijzigd worden ter ondersteuning van Office Online. ",		
		browser_not_support_this_viewer: "De geconfigureerde viewer is niet compatibel met uw browser.",
		browser_not_support_this_viewer_explanation: "De ${0} wordt niet ondersteund door de browser.",
		browser_not_support_this_viewer_userResponse: "Gebruik een andere viewer om het document te openen. Een lijst van ondersteunde browsers vindt u in het document <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> op de website van IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Werkstroomgegevens",
		process_information_info_text: "Het geselecteerde item is momenteel actief op de volgende werkstromen.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Is gelijk aan",
		operator_NOTEQUAL: "Is niet gelijk aan",
		operator_LIKE: "Lijkt op",
		operator_STARTSWITH: "Begint met",
		operator_ENDSWITH: "Eindigt op",
		operator_NOTLIKE: "Lijkt niet op",
		operator_NULL: "Is leeg",
		operator_NOTNULL: "Is niet leeg",
		operator_LESS: "Is kleiner dan",
		operator_LESSOREQUAL: "Is kleiner dan of gelijk aan",
		operator_GREATER: "Is groter dan",
		operator_GREATEROREQUAL: "Is groter dan of gelijk aan",
		operator_BETWEEN: "Is tussen",
		operator_NOTBETWEEN: "Is niet tussen",
		operator_IN: "Alles opnemen",
		operator_INANY: "Een of meer opnemen",
		operator_NOTIN: "Alles uitsluiten",
		operator_CONTAINS: "Bevat",

		/* SearchForm widget */
		search_button_tooltip: "Zoeken naar documenten die overeenkomen met uw criteria.",
		reset_button_tooltip: "Hiermee stelt u de zoekopdracht opnieuw in naar de standaardwaarden die door de beheerder zijn ingesteld.",
		clear_button_tooltip: "Hiermee verwijdert u alle waarden die u voor de zoekopdracht hebt ingevoerd.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Zoekopdracht selecteren",
		append_to_search: "Toevoegen aan zoekopdracht",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nieuwe zoekopdracht",
		new_unified_search: "Nieuwe zoekopdracht over meerdere repository's",
		searh_name_contains: "Zoeknaam bevat",
		keep_search_criteria_expanded: "Zoekcriteria geopend houden",
		showing_results: "Resultaten afbeelden voor:",
		open_in_new_window: "Openen in nieuw venster",
		open_in_new_tab: "Openen op een nieuwe tab",
		close_tab: "Tab sluiten",
		add_repository: "Repository toevoegen",
		edit_repository: "Repository bewerken",
		remove_repository: "Verwijderen",
		search_scope: "Zoekbereik",
		search_class_template: "Klasse",
		object_type_version: "Objecttype en versie",
		not_applicable: "Niet van toepassing",
		unified_search_including_subfolders: " (Inclusief submappen)",
		unified_search_dialog_intro_text: "Selecteer de repository en de zoekopdracht of de klassen die u wilt opnemen in de zoekopdracht.",
		unified_search_class_or_template: "Klasse of sjabloon",

		select_object_fieldset_legend: "Hoe wilt u zoeken naar items die u wilt bijsluiten:",
		select_object_create_new_search: "Nieuwe zoekopdracht",
		select_object_search_template: "Bestaande zoekopdracht",

		search_criteria: "Zoekcriteria:",
		search_criteria_no_colon: "Zoekcriteria",
		search_in_multiple: "Zoeken in (${0}):",
		search_location_including_subfolders: "${0} met inbegrip van submappen",
		search_class: "Klasse:",
		search_class_multiple: "Klasse (${0}):",
		search_class_including_subclasses: "${0} met inbegrip van subklassen",
		search_class_all_pseudo: "Alle",
		search_results: "Zoekresultaten",
		select_operator: "Selecteer een operator",
		ending_value: "De eindwaarde voor de eigenschap ${0} is:",
		search_options: "Zoekopties:",
		search_version: "Versie:",
		search_released_version: "Vrijgegeven versie",
		search_current_version: "Huidige versie",
		search_all_versions: "Alle versies",
		search_file_type_filter: "Filter voor bestandstypen:",
		search_one_file_type: "1 bestandstype",
		search_many_file_types: "${0} bestandstypen",
		search_action_filter: "Actiefilter:",
		search_action_filter_hover_help: "Verfijn de resultaten, zodat er alleen bestanden overblijven waarop gebruikers een bepaalde actie hebben uitgevoerd.<br/>U kunt bijvoorbeeld alleen zoeken naar documenten die zijn toegevoegd vóór 20 september 2012.",
		search_action_filter_enabled: "Actiefilter is ingeschakeld",
		search_enable: "Inschakelen",
		search_disable: "Uitschakelen",
		search_by: "door",
		search_added: "Toegevoegd",
		search_modified: "Gewijzigd",
		search_checked_out: "Uitgecheckt",
		search_date_operator_on: "Op",
		search_date_operator_not_on: "Niet op",
		search_date_operator_before: "Vóór",
		search_date_operator_after: "Na",
		search_version_hover_help_p8: "Er is een vrijgegeven versie beschikbaar voor alle gebruikers. Als een document een huidige versie is, betekent dit dat een of meer gebruikers dat document bewerken.",
		search_version_hover_help_cm: "Een huidige versie is de nieuwste versie van het item.",
		search_using: "Zoeken naar items die overeenkomen met:",
		search_property_and_text_criteria: "Zowel de eigenschapswaarden als de tekstcriteria",
		search_property_or_text_criteria: "Ofwel de eigenschapswaarden, ofwel de tekstcriteria",
		search_property_and_text: "Zowel de eigenschap als de tekstcriteria",
		search_property_or_text: "Ofwel de eigenschap, ofwel de tekstcriteria",
		search_property_options: "Opties van eigenschappen:",
		search_property_option_match_all: "Alle eigenschappen",
		search_property_option_match_any: "Een of meer eigenschappen",
		search_property_option_match_all_summary: "Voldoen aan alle",
		search_property_option_match_any_summary: "Voldoen aan een of meer",
		search_total_count_type_total: "Totaal",
		search_total_count_type_atleast: "Ten minste",
		search_content_size_filter: "Filter voor contentgrootte:",
		search_content_size_filter_any: "Elk contentgrootte",

		/* Search work options */
		search_work_filter: "Filter voor werkitems:",
		search_work_filter_hover_help: "Versmal de resultaten zodanig dat deze alleen items bevatten die in een werkstroom staan. U kunt de resultaten bijvoorbeeld beperken tot werkitems die actief zijn.<br /><br />Deze optie geldt niet als u alle versies wilt zien van de items die door de zoekopdracht zijn geretourneerd.",
		search_work_filter_enabled: "Filter voor werkitems is ingeschakeld",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Stap:",
		search_work_filter_owner: "Eigenaar:",
		search_work_filter_status_all: "Alle items",
		search_work_filter_status_active: "Actieve items",
		search_work_filter_status_suspended: "Onderbroken items",
		search_work_filter_process_all: "Alle werkstromen",
		search_work_filter_step_all: "Alle stappen",
		search_work_filter_owner_all: "Alle gebruikers",
		search_work_filter_step_error: "De stapnaam bestaat niet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "De zoekactie kan niet worden voltooid zonder aanvullende informatie. Voer een waarde in voor ten minste één voorwaarde.",
		search_insufficient_input_box: "De zoekactie kan niet worden voltooid zonder aanvullende informatie. Geef criteria voor zoeken in tekst op of selecteer een sjabloon voor metagegevens.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "De zoekactie kan niet worden uitgevoerd zonder aanvullende informatie. Voer een waarde in voor ten minste één voorwaarde.",
		search_member_required: "Om deze zoekopdracht te delen met specifieke gebruikers en groepen, moet u minimaal één gebruiker of groep selecteren om deze zoekopdracht mee te delen.",
		search_criteria_layout_and: "EN",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Wilt u afsluiten zonder uw wijzigingen op te slaan?",
		search_prompt_close_all_without_save: "Wilt u alle tabs afsluiten zonder uw wijzigingen op te slaan?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Een van de volgende typen zoekcriteria is niet geldig voor deze repository: ${0}. Om de zoekopdracht uit te voeren in de webclient, moeten de ongeldige criteria worden verwijderd. Als u de zoekopdracht opslaat, worden de ongeldige criteria verwijderd. Als u de zoekopdracht niet wilt wijzigen, sluit u de zoekopdracht af.",
		search_invalid_repository: "Een of meer repository's",
		search_invalid_class: "Eén of meer klassen",
		search_invalid_folder: "Een of meer mappen",
		search_invalid_file_type: "Eén of meer bestandstypen",
		search_invalid_property: "Eén of meer eigenschappen",
		search_invalid_text_search: "Criteria voor doorzoeken van tekst",
		search_invalid_work: "Filtercriteria voor werkitems",

		search_operator_pulldown_missing: "Er is een operator vereist. Selecteer een operator in het vervolgkeuzemenu. Als u geen operators ziet, vraag dan of de systeembeheerder in de beheertool wil nagaan of wellicht alle operators voor het tabblad <b>Zoeken</b> verborgen zijn. Als dit een zoekopdracht voor meerdere repository's is, staan er mogelijk geen operators in het vervolgkeuzemenu als de eigenschappen die aan elkaar zijn toegewezen geen gemeenschappelijke operators hebben.",

		/*SearchBuilder */
		open_search_builder: "Nieuwe zoekopdracht",
		document_type: "Klasse",
		show_all_properties: "Alle eigenschappen afbeelden",
		text_search_label: "Items zoeken met de volgende termen:",
		text_search_place_holder: "Gebruik een combinatie van termen en operators: * ? of \"exacte zoektermen\"",
		text_search_place_holder_box: "Gebruik een combinatie van termen en operators: AND, OR, NOT en \"exacte zoektermen\"",
		text_search_place_holder_cascade_proximity: "Gebruik een combinatie van termen en operators: * of ?",
		text_search_place_holder_common: "Gebruik een combinatie van termen en \"exacte zoektermen\"",
		text_search_hover_help_p8: "Gebruik het sterretje (*) of het vraagteken (?) als jokerteken. Voor exacte overeenkomsten gebruikt u dubbele aanhalingstekens (\"\").",
		text_search_hover_help_p8_only_crs: "Gebruik het sterretje (*) of het vraagteken (?) als jokerteken. Voor exacte overeenkomsten gebruikt u dubbele aanhalingstekens (\"\"). Wanneer u meerdere termen opgeeft, levert een zoekopdracht in meerdere repository's resultaten op waarin één van deze termen aanwezig is.",
		text_search_hover_help_cm: "Gebruik het sterretje (*) of het vraagteken (?) als jokerteken. Voor exacte overeenkomsten gebruikt u dubbele aanhalingstekens (\"\"). Plaats - voor termen die u wilt uitsluiten en + voor op te nemen termen.",
		text_search_hover_help_box: "Gebruik AND tussen termen voor een overeenkomst met alle termen. Gebruik OR tussen termen voor een overeenkomst met een van de termen. Voor exacte overeenkomsten gebruikt u dubbele aanhalingstekens (\"\"). Plaats NOT voor een term om deze uit te sluiten.",
		text_search_hover_help_common: "Voor exacte overeenkomsten gebruikt u dubbele aanhalingstekens (\"\"). Wanneer u meerdere termen opgeeft, levert een zoekopdracht in meerdere repository's resultaten op waarin alle termen aanwezig zijn.",
		text_search_options: "Tekstopties:",
		text_search_options_hover_help: "Als u andere operators wilt gebruiken dan de jokertekens, selecteer dan Geavanceerde operators.",
		text_search_option_any: "Een of meer van deze termen",
		text_search_option_all: "Alle termen",
		text_search_option_proximity: "Binnen nabijheid van woorden:",
		text_search_option_none: "Geavanceerde operators",
		text_search_option_authoring: "Zoeken in tekst is:",
		text_search_option_authoring_hover_help: "Kies een optie die bepaalt hoe u criteria voor zoeken in tekst ter beschikking wilt stellen aan gebruikers. Verberg de optie als u geen criteria voor zoeken in tekst wilt opnemen. Anders kunt u toestaan dat criteria voor zoeken in tekst door gebruikers kunnen worden gewijzigd of verplicht zijn of dat ze alleen gelezen kunnen worden.",
		text_search_option_hide: "Criteria verbergen",
		text_search_option_hide_hover_help: "Selecteer deze optie als u geen criteria voor zoeken in tekst in de zoekopdracht wilt opnemen of als u andere gebruikers wilt toestaan om criteria voor zoeken in tekst op te geven.",
		text_search_option_in: "In de HTML-/XML-tag ${0}",
		text_search_option_paragraph: "In dezelfde alinea",
		text_search_option_sentence: "In dezelfde zin",
		text_search_option_vql: "VQL-query",
		text_search_option_none_hover_help: "Plaats een minteken - voorafgaand aan termen die u wilt uitsluiten.",
		text_search_option_cascade_proximity_hover_help: "Hiermee wordt het zoekresultaat beperkt tot de termen die voorkomen in een reeks woorden die geen exacte termen bevatten.",

		box_search_metadata: "Metagegevens:",
		box_search_select_template: "Sjabloon selecteren",
		box_search_no_templates: "Geen enkele sjabloon beschikbaar",
		box_text_search_options_search_within: "Zoekbereik:",
		box_text_search_options_search_within_everything: "Alles",
		box_text_search_options_search_within_file_content: "Documentinhoud",
		box_text_search_options_search_within_tags: "Tags",
		box_text_search_options_limit_to: "Alleen zoeken in:",

		add_property: "Eigenschap toevoegen",
		edit_template: "Zoekopdracht bewerken",
		save_search: "Zoekactie opslaan",
		search_template_name: "Naam:",
		search_template_desc: "Beschrijving:",
		auto_run: "De zoekopdracht uitvoeren na het openen",
		show_in_tree: "De zoekopdracht afbeelden in de mapstructuur",
		show_in_tree_hover_help: "Als een zoekopdracht in een map is opgeslagen, wordt die standaard alleen in de lijst van content afgebeeld. Als u deze optie selecteert, wordt de zoekopdracht ook afgebeeld in de mapstructuur van de view Bladeren. De zoekopdracht wordt echter alleen in de mapstructuur afgebeeld als u de zoekopdracht in een map opslaat.",
		share_search_with: "Zoekopdracht delen met:",
		remove_member: "${0} verwijderen",
		ok_button_label: "OK",
		save_template: "Opslaan",
		save_template_title: "Als u vaak zoekt naar bepaalde items, kunt u uw zoekcriteria opslaan.",
		remove_criterion: "Verwijderen",
		apply_button_label: "Toepassen",
		empty_search_results_pane: "Voer een zoekopdracht uit om resultaten te zien.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Gehele repository",

		repository_already_selected: "De repository ${0} kan niet aan de zoekopdracht over meerdere repository's worden toegevoegd omdat hij al in de zoekopdracht is opgenomen. <br/> Een repository kan maar één keer in de zoekopdracht over meerdere repository's worden opgenomen. <br/>Selecteer een andere repository voor opname in de zoekopdracht over meerdere repository's.",

		repository_limit_reached: "De repository ${0} kan niet aan de zoekopdracht over meerdere repository's worden toegevoegd. U kunt maximaal ${1} repository's aan de zoekopdracht toevoegen.",

		nomore_criteria_toappend: "Alle toegewezen eigenschappen zijn al in de zoekcriteria opgenomen. Er zijn geen eigenschappen aan de zoekcriteria toegevoegd.",
		nomore_criteria_toappend_regular: "Alle eigenschappen zijn al in de zoekcriteria opgenomen. Er zijn geen eigenschappen aan de zoekcriteria toegevoegd.",

		/* OD Save Search dialog */
		reload_label: "Opnieuw laden",
		od_save_search_help_text: "Typ een naam voor de zoekbewerking of selecteer een bestaande zoekbewerking die u wilt vervangen",
		public_access_label: "Anderen toestaan deze zoekopdracht te gebruiken",
		od_delete_search_help_text: "Selecteer een of meer zoekopdrachten om te wissen.",
		delete_save_searches: "Opgeslagen zoekopdrachten wissen",

		/* Unified Search */
		unified_search_enable_text_search: "Criteria voor doorzoeken van tekst opnemen",
		unified_search_text_search_enabled: "Zoeken in tekst inbegrepen",
		unified_search_mapping: "Toewijzing",
		unified_search_new_mapping: "Nieuwe toewijzing",
		unified_search_mapping_name: "Toewijzingsnaam",
		unified_search_mapping_dialog_instructions: "Selecteer de eigenschappen die u wilt toewijzen. Bepaalde eigenschappen kunnen worden toegewezen aan eigenschappen met een ander gegevenstype. Een eigenschap van het type tekenreeks kan bijvoorbeeld worden toegewezen aan een eigenschap van het type geheel getal. Als u een eigenschap toewijst aan een andere eigenschap, worden de eigenschappen in de zoekopdracht over meerdere repository's als een enkele eigenschap behandeld.",
		unified_search_filter_available_properties: "Beschikbare eigenschappen filteren",
		unified_search_available_properties: "Beschikbare eigenschappen",
		unified_search_mapped_properties: "Toegewezen eigenschappen",
		unified_search_single_values: "enkelvoudige waarden",
		unified_search_multiple_values: "meervoudige waarden",
		unified_search_add_mapping: "Toewijzing toevoegen",
		unified_search_warn_remove_repository: "De geselecteerde repository wordt in de zoekcriteria gebruikt.\nAls u de repository verwijdert,  worden eventuele toewijzingen en zoekcriteria waarin de repository voorkomt, gewist.\n\nWilt u de repository verwijderen?",
		unified_search_warn_update_repository_mappings: "Het wijzigen van de selectie van eigenschappen voor deze repository is van invloed op de zoekcriteria.\n\nDe zoekcriteria bevatten één of meer toewijzingen die één of meer eigenschappen bevatten die u verwijdert. Alle toewijzingen die eigenschappen bevatten die u verwijdert, moeten worden gewist. Alle zoekcriteria die deze toewijzingen bevatten, moeten worden gewist om de zoekactie uit te kunnen voeren.\n\nWilt u de opties voor de repository bijwerken en de toewijzingen en zoekcriteria wissen?",
		unified_search_warn_update_repository_mappings_reset: "Het opnemen van de criteria voor zoeken in tekst voor deze repository is van invloed op de criteria voor zoekopdrachten over meerdere repository's.\n\nElk zoekcriterium dat een toewijzing bevat met eigenschappen voor deze repository moet worden gewist om de zoekactie uit te kunnen voeren.\n\nWilt u de opties voor de repository bijwerken en de zoekcriteria wissen?",
		unified_search_warn_update_repository_text_criteria: "Het verwijderen van de criteria voor zoeken in tekst voor deze repository is van invloed op de criteria voor zoekopdrachten over meerdere repository's.\n\nDe criteria voor zoeken in tekst moeten worden gewist uit de criteria voor zoekopdrachten over meerdere repository's om de zoekopdracht uit te kunnen voeren.\n\nWilt u de repository-optie bijwerken en de criteria voor zoeken in tekst wissen?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Het verwijderen van de criteria voor zoeken in tekst en het wijzigen van de selectie van eigenschappen voor deze repository zijn van invloed op de criteria voor zoekopdrachten over meerdere repository's.\n\nDe criteria voor zoeken in tekst moeten worden gewist uit de criteria voor zoekopdrachten over meerdere repository's om de zoekopdracht uit te kunnen voeren. Daarnaast bevatten de zoekcriteria één of meer toewijzingen die één of meer eigenschappen bevatten die u verwijdert. Alle toewijzingen die eigenschappen bevatten die u verwijdert, moeten worden gewist. Alle zoekcriteria naar eigenschappen die deze toewijzingen bevatten, moeten worden gewist om de zoekactie uit te kunnen voeren.\n\nWilt u de opties voor de repository bijwerken en de zoekcriteria voor tekst, toewijzingen en zoekcriteria voor eigenschappen wissen?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Het uitsluiten van de criteria voor zoeken in tekst voor deze repository is van invloed op de criteria voor zoekopdrachten over meerdere repository's.\n\nElk zoekcriterium dat een toewijzing bevat met eigenschappen voor deze repository moet worden gewist om de zoekactie uit te kunnen voeren. De tekstzoekcriteria worden mogelijk uit de zoekopdracht over meerdere repository's gewist om de zoekactie uit te kunnen  voeren.\n\n\n\nWilt u de opties voor de repository bijwerken en de zoekcriteria wissen?",
		unified_search_warn_remove_mapping: "Het verwijderen van deze toewijzingen is van invloed op de zoekcriteria.\n\nDe zoekcriteria die de toewijzing gebruiken, moeten worden gewist om de zoekactie uit te kunnen voeren.\n\nWilt u de toewijzing bijwerken en de zoekcriteria wissen?",
		unified_search_warn_update_mapping: "Wijzigingen in deze toewijzing zijn van invloed op de zoekcriteria.\n\nDe zoekcriteria die de toewijzing gebruiken, moeten worden gewist om ervoor te zorgen dat de zoekactie geen ongeldige operators of ongeldige waarden gebruikt.\n\nWilt u de toewijzing bijwerken en de zoekcriteria wissen?",
		unified_search_warn_update_mapping_not_searchable: "Wijzigingen in deze toewijzing zijn van invloed op de zoekcriteria.\n\nAls de toegewezen eigenschappen alle alleen voor weergave zijn, kunt u de toewijzing niet in de zoekcriteria gebruiken. De zoekcriteria die gebruik maken van de toewijzing moeten worden gewist om de zoekactie uit te kunnen voeren.\n\nWilt u de toewijzing bijwerken en de zoekcriteria wissen?",
		unified_search_warn_update_mapping_box_searchable: "Wijzigingen in deze toewijzing zijn van invloed op de zoekcriteria.\n\nDe zoekcriteria bevatten deze toewijzing meer dan één keer; als u de eigenschap ${0} vanuit de repository ${1} toevoegt, komt de eigenschap ${0} te vaak voor in de zoekcriteria. De zoekcriteria die gebruik maken van de toewijzing moeten worden gewist om de zoekactie uit te kunnen voeren.\n\nWilt u de toewijzing bijwerken en de zoekcriteria wissen?",
		unified_search_details: "Details voor zoekopdracht over meerdere repository's",
		unified_search_fixed_value_property: "Eigenschap met vaste waarde",
		unified_search_required_property: "Verplichte eigenschap",
		unified_search_display_only_property: "Eigenschap alleen voor weergave",
		unified_search_missing_required_properities: "De zoekactie kan niet worden opgeslagen of uitgevoerd.<br/>De volgende eigenschappen zijn verplichte eigenschappen:${0}U dient de eigenschappen in een toewijzing op te nemen en de eigenschappen met waarden toe te voegen aan de zoekcriteria.",
		unified_search_property_repostory: "${0} (Repository: ${1})",
		unified_search_builder_no_mappings: "De zoekactie kan niet worden uitgevoerd.<br/>U moet een eigenschappentoewijzing maken en deze opnemen in de <b>Weergave resultaten</b>, zodat de zoekactie uw resultaten kan afbeelden.",
		unified_search_builder_insufficient_criteria_to_run: "De zoekactie kan niet worden uitgevoerd.<br/>In de zoekcriteria zijn geen criteria voor zoeken in tekst of eigenschapwaarden aanwezig voor de volgende repository's:${0}Voor elke repository die is opgenomen in de zoekactie, moet u criteria voor zoeken in tekst opgeven of een eigenschappentoewijzing maken, deze opnemen in de eigenschappencriteria en een eigenschapwaarde opgeven.",
		unified_search_builder_insufficient_criteria_to_save: "De zoekopdracht kan niet worden opgeslagen.<br/>De zoekactie bevat geen zoekcriteria voor de volgende repository's:${0}Voor elke repository die is opgenomen in de zoekactie, moet u een van de volgende opties uitvoeren:<ol><li>Maak een eigenschappentoewijzing en voeg deze toe aan de eigenschappencriteria.</li><li>Voeg criteria voor zoeken in tekst toe aan de repository, maak een eigenschappentoewijzing en neem deze op in <b>Weergave resultaten</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "De zoekactie kan niet worden uitgevoerd.<br/>Voor elke repository die in de zoekactie is inbegrepen, moet u ten minste één waarde van een eigenschap opgeven. U kunt bijvoorbeeld waarden opgeven voor de volgende eigenschappen: ${0}",
		unified_search_runtime_insufficient_criteria_text: "De zoekactie kan niet worden uitgevoerd.<br/>Er zijn criteria voor zoeken in tekst benodigd.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "De zoekactie kan niet worden uitgevoerd.<br/>Voor elke repository die in de zoekactie is inbegrepen, moet u ten minste één waarde van een eigenschap opgeven of criteria voor zoeken in tekst invoeren. U kunt bijvoorbeeld waarden opgeven voor de volgende eigenschappen: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "De zoekactie kan niet worden uitgevoerd.<br/>Er zijn criteria voor zoeken in tekst benodigd. Voor elke repository die in de zoekactie is inbegrepen, moet u ten minste één waarde van een eigenschap opgeven of criteria voor zoeken in tekst invoeren. U kunt bijvoorbeeld waarden opgeven voor de volgende eigenschappen: ${0}",
		unified_search_invalid_criteria: "De zoekopdracht bevat ongeldige criteria, waardoor de opdracht niet kan worden uitgevoerd.<br/>De ongeldige criteria zijn verwijderd. U moet de wijzigingen echter bij de zoekopdracht opslaan voordat u de opdracht kunt uitvoeren. Als u de wijzigingen niet wilt opslaan, sluit de zoekopdracht dan af.<br/><br/>De volgende items zijn verwijderd of gewijzigd: ${0}",
		unified_search_invalid_fixed_values: "De zoekactie kan niet worden opgeslagen of uitgevoerd.<br/>De volgende zoekcriteria hebben vaste waarden en zijn niet geldig:${0}Neem een van de volgende maatregelen om het probleem op te lossen:<ul><li>Verwijder de zoekcriteria die ongeldige waarden bevatten. </li><li>Open de toewijzingen waarin de IBM Content Manager OnDemand-eigenschap met de vaste waarde voorkomt en verwijder die eigenschap.</li><li>Open de toewijzingen waarin de IBM Content Manager OnDemand-eigenschap met de vaste waarde voorkomt en maak alle eigenschappen compatibel. Voor meer informatie over de vraag welke eigenschappen er kunnen worden toegewezen, klikt u op de link Meer Informatie in de inleidende tekst bovenin het toewijzingsvenster voor eigenschappen. </li></ul>",
		unified_search_cannot_add_properties: "U kunt geen eigenschappen aan deze zoekactie toevoegen.<br/>Alle beschikbare toegewezen eigenschappen bevinden zich al in de zoekcriteria en elke eigenschap kan slechts één keer aan de zoekactie worden toegevoegd.",
		unified_search_mapping_not_viewable: "Eigenschappen van Box-sjablonen kunnen niet worden afgebeeld in de zoekresultaten. Als u deze toewijzing wilt toevoegen in de vorm van een kolom. moet u minimaal één eigenschap toevoegen die geen eigenschap van een Box-sjabloon is. U zou bijvoorbeeld een eigenschap uit een andere repository kunnen selecteren. ",

		unified_search_returned_more: "Voor ten minste één repository is het maximumaantal toegestane resultaten overschreden.",
		unified_search_partial_failure: "Er is een fout opgetreden bij ten minste één repository.",
		unified_search_partial_failure_and_returned_more: "Er is een fout opgetreden bij ten minste één repository en voor ten minste één repository is het maximumaantal toegestane resultaten overschreden.",
		unified_search_see_analysis: "Zie de analyse van het resultaat.",
		unified_search_analysis_intro_returned_more: "Probeer voor elke repository waarvoor het maximumaantal toegestane resultaten overschreden is de zoekcriteria te verfijnen om minder resultaten te retourneren. U kunt ook een zoekactie op een enkele repository uitvoeren om meer resultaten te retourneren dan het maximum dat toegestaan is voor een zoekopdracht over meerdere repository's.",
		unified_search_analysis_intro_partial_failure: "Bekijk de informatie over de fout die geretourneerd is door de repository of repository's. Indien van toepassing lost u de fouten op en voert u de zoekopdracht over meerdere repository's opnieuw uit.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Probeer voor elke repository waar een fout is opgetreden het probleem op te lossen en de zoekactie opnieuw uit te voeren.<br/><br/>Probeer voor elke repository waarvoor het maximumaantal toegestane resultaten overschreden is de zoekcriteria te verfijnen om minder resultaten te retourneren. U kunt ook een zoekactie op een enkele repository uitvoeren om meer resultaten te retourneren dan het maximum dat toegestaan is voor een zoekopdracht over meerdere repository's.",
		unified_search_results_found: "Gevonden resultaten",
		unified_search_maximum_allowed: "Toegestaan maximum",
		unified_search_maximum_exceeded: "Maximum is overschreden",

		unified_search_mapping_rule_box: "Deze eigenschap kan niet aan de toewijzing worden toegevoegd.<p>De eigenschap ${0} uit repository ${1} bevindt zich al in een andere toewijzing en doorzoekbare eigenschappen uit deze repository kunnen in slechts één toewijzing per zoekactie worden opgenomen.<br/>Selecteer een andere eigenschap om aan de toewijzing toe te voegen.</p>",
		unified_search_mapping_rule_repository: "De eigenschap kan niet worden toegevoegd aan de toewijzing.<br/>De toewijzing bevat al een eigenschap van de repository ${0}. Een toewijzing kan slechts één eigenschap van een repository bevatten.<br/>Selecteer een andere repository waaruit u een eigenschap wilt toevoegen of maak een nieuwe toewijzing voor de geselecteerde eigenschap.",
		unified_search_mapping_rule_data_type: "De eigenschap kan niet worden toegevoegd aan de toewijzing.<br/>Een eigenschap ${0} kan niet worden toegewezen aan een eigenschap ${1}. Selecteer een andere eigenschap om toe te wijzen, of definieer een nieuwe toewijzing voor de geselecteerde eigenschap.<br/>Voor meer informatie over de vraag welke eigenschappen er kunnen worden toegewezen, klikt u op de link Meer Informatie in de inleidende tekst bovenin dit venster.",
		unified_search_mapping_rule_cardinality: "De eigenschap kan niet worden toegevoegd aan de toewijzing.<br/>Alle eigenschappen in de toewijzing moeten ofwel enkelvoudige ofwel meervoudige waarden hebben. De geselecteerde eigenschap ondersteunt ${0} en de eigenschappen in de toewijzing ondersteunen ${1}.<br/>Selecteer een andere eigenschap voor toevoeging aan de toewijzing of maak een nieuwe toewijzing voor de geselecteerde eigenschap.",
		unified_search_mapping_rule_fixed_value: "De eigenschap kan niet worden toegevoegd aan de toewijzing.<br/>De toewijzing bevat al een eigenschap met een vaste waarde. Een toewijzing kan slechts één eigenschap met een vaste waarde bevatten.<br/>Selecteer een andere eigenschap voor toevoeging aan de toewijzing of maak een nieuwe toewijzing voor de geselecteerde eigenschap.",
		unified_search_mapping_rule_child_component: "De eigenschap kan niet worden toegevoegd aan de toewijzing.<br/>Een eigenschap met een onderliggende component kan niet aan andere eigenschappen worden toegewezen. Als u in staat wilt zijn naar deze eigenschap te zoeken, maak dan een nieuwe toewijzing voor de geselecteerde eigenschap.",
		unified_search_mapping_rule_operator_intersection: "De eigenschap kan niet worden toegevoegd aan de toewijzing.<br/>Alle eigenschappen in de toewijzing moeten een of meer gemeenschappelijk operators hebben. De eigenschap ${0} heeft echter geen operators gemeen met de andere eigenschappen in de toewijzing.<br/>Selecteer een andere eigenschap, voor zover van toepassing. Als u de geselecteerde eigenschap moet opnemen, bewerk dan samen met de systeembeheerder de operators die aan de eigenschap zijn gekoppeld.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Geavanceerde instellingen",
		advanced_search_options_intro: "Opties voor geavanceerde criteria instellen.",
		advanced_search_options_editable: "Bewerkbaar ",
		advanced_search_options_readonly: "Alleen lezen",
		advanced_search_options_required: "Verplicht",
		advanced_search_options_hidden: "Verborgen",
		advanced_search_options_property_editable:"Eigenschap is:",
		advanced_search_options_operators:"Operators:",
		advanced_search_options_use_all:"Alles gebruiken",
		advanced_search_options_use_selected:"Geselecteerde items gebruiken",
		advanced_search_options_operators_filtered: "Operators gefilterd",
		// Data types in lowercase
		data_type_boolean: "booleaans",
		data_type_date: "datum",
		data_type_time: "tijd",
		data_type_timestamp: "tijdsaanduiding",
		data_type_decimal: "decimale waarde",
		data_type_double: "getal met drijvende komma",
		data_type_short: "geheel getal",
		data_type_integer: "geheel getal",
		data_type_long: "geheel getal",
		data_type_string: "Tekstreeks",
		data_type_string_alpha: "alfabetische tekenreeks",
		data_type_string_alphanum: "alfanumerieke tekenreeks",
		data_type_string_ext: "uitgebreid alfanumerieke tekenreeks",
		data_type_string_num: "numerieke tekenreeks",
		data_type_binary: "binair",
		data_type_object: "object",
		data_type_guid: "globally unique identifier",
		data_type_user: "gebruikers",
		data_type_child_component: "dochtercomponent",

		/* Print Dialog */
		print_title: "Afdrukken",
		print_message: "Afdrukken: ${0}",
		print_print_button: "Afdrukken",
		print_clean_margins_button: "Alles op 0 instellen",
		print_type: "Printertype:",
		print_printer_server_options: "Afdrukopties server",
		print_printer_properties: "Printereigenschappen",
		print_printer_fax_properties: "Faxeigenschappen",
		print_printer_name: "Printernaam:",
		print_fax_recipient: "Ontvanger",
		print_fax_sender: "Afzender",
		print_copies: "Exemplaren:",
		print_local_orientation: "Afdruk",
		print_local_orientation_landscape: "Liggend",
		print_local_orientation_portrait: "Staand",
		print_local_margins: "Paginamarges",
		print_local_margins_top: "Boven",
		print_local_margins_bottom: "Onder",
		print_local_margins_left: "Links",
		print_local_margins_right: "Rechts",
		print_printer_server: "Server",
		print_printer_local: "Landinstelling",
		print_property_class: "Klasse:",
		print_property_routing: "Routering:",
		print_property_pagedef: "Paginadefinitie:",
		print_property_node: "Knooppunt:",
		print_property_writer: "Schrijfprogramma:",
		print_property_formdef: "Formulierdefinitie:",
		print_property_printerid: "Bestemming:",
		print_property_forms: "Papier:",
		print_property_faxnotes: "Opmerkingen:",
		print_property_faxcompany: "Bedrijf:",
		print_property_faxnumber: "Faxnummer:",
		print_property_faxname: "Naam:",
		print_property_faxsendertelnumber: "Telefoonnummer:",
		print_property_faxcoverpage: "Voorloopblad:",
		print_property_faxsubject: "Onderwerp:",
		print_saveoptions: "Afdrukopties opslaan",
		print_property_bannerpage: "Bannerpagina gebruiken",
		print_print_with_info_fields: "Afdrukken met Info-velden",
		print_field_from: "Van",
		print_field_to: "Naar",
		print_invalid_value_class: "Geldige tekens zijn A-Z of 0-9",
		print_invalid_value_pagedef: "Geldige tekens zijn alfabetische of numerieke tekens of de tekens @, #, of $",
		print_invalid_value_writer: "Geldige tekens zijn alfabetische of numerieke tekens of de tekens @, #, of $",
		print_invalid_value_formdef: "Geldige tekens zijn alfabetische of numerieke tekens of de tekens @, #, of $",
		print_invalid_value_forms: "Geldige tekens zijn alfabetische of numerieke tekens of de tekens @, #, of $",
		print_invalid_value_margin: "Geldige getallen liggen tussen ${0} en ${1}",
		print_status_message: "${0} documenten zijn naar printer ${1} verzonden.",

		print_applet_init_error: "De afdrukapplet kan niet worden gestart.",
		print_applet_init_error_explanation: "Dit probleem kan de volgende oorzaken hebben: <br/><br/><ul><li>De Java Runtime Environment (JRE) is niet aangetroffen op uw werkstation.</li><li>De Java-plugin is niet ingeschakeld in uw webbrowser. </li><li>De JRE-versie op uw werkstation is niet compatibel met de versie van IBM Content Navigator.</li><li>Er is een browser-timeout opgetreden voordat de afdrukapplet gestart kon worden.</li></ul>",
		print_applet_init_error_userResponse: "U kunt de volgende stappen uitvoeren om het probleem met de JRE op te lossen:<br/><br/><ol><li>Controleer of de JRE op uw werkstation geïnstalleerd is.</li><li>Controleer of de Java-plugin is ingeschakeld in uw webbrowser.</li><li>Controleer of de JRE-versie op uw werkstation compatibel is met IBM Content Navigator en probeer het opnieuw. Een lijst van ondersteunde versies vindt u in het document <i>Hardware and software prerequisites for IBM Web Interface for Content Navigator</i> op de website van IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Voorloopblad",
		daeja_print_selected_documents_title: "Geselecteerde documenten",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Moet overeenkomen met alle zoekcriteria",
		match_any_criteria: "Moet overeenkomen met een van de zoekcriteria",
		include_subfolders_summary: "${0} (inclusief submappen)",
		browse_button: "Bladeren&hellip;",
		search_for: "Zoeken naar:",
		object_type_documents: "Documenten",
		object_type_folders: "Mappen",
		object_type_documents_folders: "Documenten en mappen",
		object_type_web_links: "Weblinks",
		object_type_documents_folders_web_links: "Documenten, mappen en weblinks",

		/* SelectSearchFolderDialog */
		search_in: "Zoeken in:",
		include_subfolders: "Submappen opnemen",

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
		locked_item_icon_title: "Vergrendeld door ${0}",
		checked_out_icon_title: "Uitgecheckt door ${0}",
		major_minor_version_icon_title: "Hoofdversie met kleine versies",
		suspended_icon_title: "De werkstroom wordt onderbroken",
		on_hold_icon_title: "Stilgezet",
		has_notes_icon_title: "Bevat opmerkingen",
		record_icon_title: "Gedeclareerd als record",
		compound_document_icon_title: "Samengesteld document",
		validateTemplate_icon_title: "Teamruimtesjabloon moet gevalideerd worden",
		offlineTemplate_icon_title: "Teamruimtesjabloon is offline",
		offlineTeamspace_icon_title: "Teamruimte is offline",
		pending_delete_icon_title: "Teamruimte is in afwachting van verwijdering",
		delete_error_icon_title: "De teamruimte kan niet worden gewist",
		defaultTemplate_icon_title: "Standaard teamruimtesjabloon",
		teamspace_icon_title: "Teamruimte",
		teamspace_template_icon_title: "Teamruimtesjabloon",
		has_bookmark_icon_title: "Heeft een bladwijzer",
		read_only_icon_title: "Alleen lezen",
		no_results_were_found: "Geen resultaten gevonden.",
		folder_is_empty: "De map is leeg.",
		no_checked_out_items: "U hebt geen items die zijn uitgecheckt.",
		inbasket_is_empty: "De ingekomen post is leeg.",
		worklist_is_empty: "De werklijst is leeg.",
		tracker_milestone_completed: "Voltooid",
		stepprocessor_attachments_title: "Inhoud",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Items vergrendelen",
		unlock_items: "Items ontgrendelen",
		checkin_item: "Item inchecken",

		/* Help */
		learn_more: "Meer informatie",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Teamruimte openen",
		repository_tab_createWorkspace: "Nieuwe teamruimte",
		repository_tab_createWorkspaceTemplate: "Nieuwe teamruimtesjabloon",
		repository_tab_DefaultTemplate: "Standaard",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Met deze taak worden documenten gekopieerd.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "U hebt geen bewerkingsmachtigingen voor de geselecteerde teamruimtesjabloon.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Weet u zeker dat u de teamruimte ${0} wilt wissen? <br><br>Alleen de documenten die in andere mappen in de repository aanwezig zijn, blijven in de repository. Documenten die alleen in de teamruimte opgeslagen zijn, worden gewist. ",
		teamspaceDecommissionLabel: "Wissen:",
		teamspaceDecommissionDescription: "Als u de teamruimte wist, wordt deze teamruimte verwijderd van de server. Geef aan wat er met de artefacten van de teamruimte moet gebeuren.",
		teamspaceDecommissionOptions: "Opties voor wissen van teamruimte",
		teamspaceDecommissionDeleteAll: "Alle artefacten van teamruimte wissen",
		teamspaceDecommissionReFileAll: "Alle artefacten van teamruimte opnieuw opslaan",
		teamspaceDecommissionReFileDestination: "Verplaatsen naar:",
		teamspaceDecommissionReFileIn: "Opnieuw opslaan in",
		teamspaceDecommissionTaskName: "Taak voor wissen van teamruimte",
		teamspaceDecommissionTaskDescription: "Met deze taak wordt de teamruimte gewist uit de repository.",
		teamspaceDecommissionDeletionStarted: "Het wissen van de teamruimte is gepland",
		teamspaceDecommissionDeletionConnectionFailed: "De taak voor het wissen van een teamruimte kan niet worden uitgevoerd omdat er geen verbinding met de repository kan worden gemaakt. Controleer of de legitimatiegegevens van de repositorybeheerder correct zijn.",

		teamspace_edit_properties_notsupported: "U kunt eigenschappen van teamruimten alleen bewerken vanuit de view Teamruimten.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "De teamruimte is offline en kan alleen worden geopend door eigenaren van de teamruimte",

		/* Teamspace Builder widget */
		workspace_validation_document: "Document:",
		workspace_validation_folder: "Map:",
		workspace_validation_ets: "De volgende invoersjablonen zijn niet beschikbaar in deze repository en zijn verwijderd uit de lijst van geselecteerde invoersjablonen:",
		workspace_validation_classes: "De volgende klassen zijn niet beschikbaar in deze repository en zijn verwijderd uit de lijst van geselecteerde klassen:",
		workspace_validation_searches: "De volgende zoekopdrachten zijn niet beschikbaar in deze repository en zijn verwijderd uit de lijst van geselecteerde zoekopdrachten:",
		workspace_validation_docs_folders: "De volgende documenten zijn niet beschikbaar in deze repository en zijn verwijderd uit de lijst van geselecteerde documenten:",
		workspace_change_template_confirmation_question: "Als u een ander sjabloon selecteert, gaan al uw wijzigingen verloren? Wilt u doorgaan?\n",
		workspace_delete_item_confirmation_question: "Wilt u het item ${0} verwijderen?\n",
		workspace_delete_role_confirmation_question: "Wilt u de rol ${0} verwijderen?\n",
		workspace_delete_confirmation_question: "Als u een teamruimte wist, wordt alleen de container van de teamruimte gewist. De mappen en documenten in de teamruimte blijven in de repository en u kunt ze vinden door een zoekopdracht uit te voeren. Om de inhoud van de teamruimte te wissen, wist u eerst de items in de  teamruimte en daarna de teamruimte zelf.<br><br>Wilt u de teamruimte ${0} verwijderen?",
		workspacebuilder_instance_template_name_header: "Naam teamruimtesjabloon",
		workspacebuilder_instance_template_description_header: "Beschrijving",

		workspacebuilder_template_tooltip_name: "De naam van de sjabloon mag geen van de volgende tekens bevatten: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "De teamruimtenaam mag geen van de volgende tekens bevatten: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Geef een beschrijving op waarmee gebruikers de juist keuze uit de lijst van sjablonen kunnen maken. Zo kunt u bijvoorbeeld informatie opnemen over de beoogde gebruikers of beoogd gebruik van de sjabloon.",
		workspacebuilder_instance_tooltip_description: "Geef een beschrijving op waarmee gebruikers onderscheid kunnen maken tussen deze teamruimte en de andere teamruimten.",

		workspacebuilder_template_edit_properties_pane: "Teamruimtesjabloon bewerken",
		workspacebuilder_instance_properties_pane: "Teamruimte definiëren",
		workspacebuilder_template_properties_pane: "Teamruimtesjabloon definiëren",

		workspacebuilder_instance_security_pane: "Beveiliging teamruimte instellen",
		workspacebuilder_template_security_pane: "Beveiliging sjabloon instellen",

		workspacebuilder_layout_pane: "Layout selecteren",
		workspacebuilder_search_templates_pane: "Zoekopdrachten selecteren",
		workspacebuilder_document_folders_pane: "Mappen en documenten opnemen",
		workspacebuilder_doctypes_entryTemplates_pane: "Klassen of invoersjablonen selecteren",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Klassen selecteren",
		workspacebuilder_security: "Beveiliging teamruimte",

		workspacebuilder_roles_pane: "Rollen selecteren",
		workspacebuilder_security: "Beveiliging",

		workspacebuilder_properties_templates: "Beschikbare sjablonen:",
		workspacebuilder_available_templates: "Beschikbare zoekopdrachten:",
		workspacebuilder_selected_templates: "Geselecteerde zoekopdrachten:",
		workspacebuilder_templates_name: "Naam zoekopdracht",

		workspacebuilder_available_entryTemplates: "Beschikbare invoersjablonen:",
		workspacebuilder_selected_entryTemplates: "Geselecteerde invoersjablonen:",

		workspacebuilder_item_classes: "Beschikbare klassen",
		workspacebuilder_item_classes_selected: "Geselecteerde klassen:",
		workspacebuilder_properties_select_template: "Selecteer een sjabloon die u voor deze teamruimte wilt gebruiken.",
		workspacebuilder_template_properties: "Teamruimtesjabloon definiëren",
		workspacebuilder_instance_properties: "Teamruimte definiëren",
		workspacebuilder_template_introText: "Geef de algemene componenten op die u in elke op basis van deze sjabloon gemaakte teamruimte wilt opnemen door middel van de selecties in de navigatie. Als u dit hebt gedaan, klikt u op <b>Voltooien</b> om de sjabloon beschikbaar te stellen aan andere gebruikers, die het weer kunnen gebruiken om nieuwe teamruimten te maken.",
		workspacebuilder_instance_introText: "Teams gebruiken teamruimten om met specifieke sets documenten te werken en deze te delen. Geef een begrijpelijke naam en beschrijving op voor deze teamruimte zodat gebruikers deze teamruimte kunnen onderscheiden van andere teamruimten. U kunt de teamruimte aanpassen door aanvullende zoekopdrachten, klassen of invoersjablonen, documenten en mappen op te nemen.",

		workspacebuilder_template_search_template_introText: "Selecteer de standaard zoekopdrachten die u wilt opnemen in elke teamruimte die wordt gemaakt met deze sjabloon. Als er geen zoekopdrachten zijn geselecteerd, zien teamruimtegebruikers alle zoekopdrachten waarvoor ze toegang hebben. Met de juiste machtigingen kunnen gebruikers zoekopdrachten delen en toevoegen in de teamruimte.",
		workspacebuilder_instance_search_template_introText: "Neem zoekopdrachten op waarmee gebruikers taken efficiënter kunnen vervullen. Als er geen zoekopdrachten opgenomen zijn, zien gebruikers van de teamruimte alle zoekopdrachten waartoe ze toegang hebben. Met de juiste machtigingen kunnen gebruikers ook zoekopdrachten in de teamruimte toevoegen en delen.",

		workspacebuilder_template_roles_introText: "Teamruimtegebruikers worden aan rollen toegewezen. Rollen geven de taken aan die gebruikers mogen uitvoeren. Klik op de pictogrammen naast elke rol om de toegestane taken te bekijken. Kies de rollen die geschikt zijn voor de teamruimte.",
		workspacebuilder_template_roles_modify_introText: "U kunt de machtigingen wijzigen die zijn gekoppeld aan elke rol in deze teamruimte. U dient leden van teamruimten een bericht te sturen als hun machtigingen veranderen.",

		workspacebuilder_template_roles_header_name: "Rolnaam",

		workspacebuilder_template_folders_introText: "Selecteer de standaarddocumenten en -mappen die u in elke teamruimte wilt opnemen die op basis van deze sjabloon is gemaakt. U kunt documenten als koppelingen of als kopieën toevoegen. Gebruik koppelingen om te verwijzen naar documenten waarvan u niet meerdere kopieën wilt, zoals beleidsregels of procedures. Maak kopieën van documenten die gebruikers zullen aanpassen, zoals sjablonen en formulieren.",
		workspacebuilder_instance_folders_introText: "Selecteer de standaarddocumenten en -mappen die u in de teamruimte wilt opnemen. U kunt documenten als koppelingen of als kopieën toevoegen. Gebruik koppelingen om te verwijzen naar documenten waarvan u niet meerdere kopieën wilt, zoals beleidsregels of procedures. Maak kopieën van documenten die gebruikers zullen aanpassen, zoals sjablonen en formulieren.",

		workspacebuilder_template_roles_introText: "Geef de rollen op die u in elke teamruimte wilt opnemen die op basis van deze sjabloon is gemaakt. U kunt ook nieuwe rollen maken, die u kunt gebruiken bij het maken van andere teamruimtesjablonen.",
		workspacebuilder_instance_users_introText: "In een teamruimte wordt elke gebruiker toegewezen aan een of meer rollen die de taken aangeven die de gebruiker kan voltooien. Voeg gebruikers toe aan de teamruimte en wijs rollen toe aan de gebruikers",

		workspacebuilder_instance_navigation_pane_title: "Teamruimte-builder",
		workspacebuilder_template_navigation_pane_title: "Teamruimtesjabloon-builder",

		workspacebuilder_roles_roles_nopermissions: "Er zijn geen machtigingen geselecteerd voor de rol {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Geselecteerde rollen:",
		workspacebuilder_roles_available_roles: "Beschikbare rollen:",
		workspacebuilder_roles_privilege_header: "Machtiging",
		workspacebuilder_roles_select_role: "Rol selecteren",
		workspacebuilder_roles_select_permission: "Machtiging selecteren",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Er bestaat al een rol met de naam {0}. U moet een unieke naam voor de rol opgeven. ",
		workspacebuilder_roles_edit_dialog_role_name: "Rolnaam:",
		workspacebuilder_roles_edit_dialog_role_description: "Beschrijving van rol:",
		workspacebuilder_roles_edit_dialog_title_new: "Nieuwe rol",
		workspacebuilder_roles_edit_dialog_title_edit: "Rol bewerken",

		workspacebuilder_roles_privileges_header: "Machtigingen voor de rol {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Documentmachtigingen:",
		workspacebuilder_roles_priv_group_folder: "Mapmachtigingen:",
		workspacebuilder_roles_priv_group_teamspace: "Teamruimtemachtigingen",
		workspacebuilder_roles_priv_group_item: "Machtigingen voor documenten en mappen:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Machtigingen beheren",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Gebruikers met deze machtigingen kunnen documenten en mappen in de teamruimte beheren. Met deze machtiging kunt u ook andere gebruikers toestaan om te wissen, eigenschappen te bewerken, submappen te maken, enzovoort.",

		workspacebuilder_roles_priv_deleteItems: "Wissen",
		workspacebuilder_roles_plbl_deleteItems: "Gebruikers met deze machtiging kunnen documenten en mappen in de teamruimte wissen.",

		workspacebuilder_roles_priv_createItems: "Maken",
		workspacebuilder_roles_plbl_createItems: "Gebruikers met deze machtiging kunnen documenten en mappen in de teamruimte maken.",

		workspacebuilder_roles_priv_viewItemProperties: "Eigenschappen bekijken",
		workspacebuilder_roles_plbl_viewItemProperties: "Gebruikers met deze machtiging kunnen de documenten en eigenschappen van de mappen in de teamruimte bekijken, waaronder ook de systeemeigenschappen.",

		workspacebuilder_roles_priv_modifyItemProperties: "Eigenschappen bewerken",
		workspacebuilder_roles_plbl_modifyItemProperties: "Gebruikers met deze machtiging kunnen de eigenschappen van documenten en mappen in de teamruimte bewerken.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Mapmachtigingen beheren",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Gebruikers met deze machtigingen kunnen mappen in de teamruimte beheren. Met deze machtiging kunt u ook andere gebruikers toestaan om mappen te wissen, eigenschappen van mappen te bewerken, submappen te maken, enzovoort.",

		workspacebuilder_roles_priv_deleteFolders: "Mappen wissen",
		workspacebuilder_roles_plbl_deleteFolders: "Gebruikers met deze machtiging kunnen mappen in de teamruimte wissen.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Mapeigenschappen bewerken",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Gebruikers met deze machtiging kunnen de eigenschappen van mappen in de teamruimte bewerken.",

		workspacebuilder_roles_priv_createSubfolders: "Submappen maken",
		workspacebuilder_roles_plbl_createSubfolders: "Gebruikers met deze machtigingen kunnen mappen in de teamruimte maken.",

		workspacebuilder_roles_priv_fileInFolders: "Toevoegen aan mappen",
		workspacebuilder_roles_plbl_fileInFolders: "Gebruikers met deze machtiging kunnen een koppeling uit mappen in de teamruimte aan documenten toevoegen.",

		workspacebuilder_roles_priv_viewFolderProperties: "Mapeigenschappen bekijken",
		workspacebuilder_roles_plbl_viewFolderProperties: "Gebruikers met deze machtiging kunnen de eigenschappen van de mappen in de teamruimte bekijken, waaronder ook de systeemeigenschappen.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Documentmachtigingen beheren",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Gebruikers met deze machtigingen kunnen documenten in de teamruimte beheren. Met deze machtiging kunt u ook andere gebruikers toestaan om documenten te wissen, documenteigenschappen te bewerken, enzovoort.",

		workspacebuilder_roles_priv_deleteDocuments: "Documenten wissen",
		workspacebuilder_roles_plbl_deleteDocuments: "Gebruikers met deze machtiging kunnen documenten in de teamruimte wissen.",

		workspacebuilder_roles_priv_promoteVersions: "Versies verhogen",
		workspacebuilder_roles_plbl_promoteVersions: "Gebruikers met deze machtiging kunnen een nieuw versienummer aan documenten in de teamruimte toewijzen.",

		workspacebuilder_roles_priv_modifyContent: "Documenten bewerken",
		workspacebuilder_roles_plbl_modifyContent: "Gebruikers met deze machtiging kunnen de inhoud van documenten in de teamruimte bewerken.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "De eigenschappen van documenten wijzigen",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Gebruikers met deze machtiging kunnen de eigenschappen van documenten in de teamruimte bewerken.",

		workspacebuilder_roles_priv_viewContent: "Documenten bekijken",
		workspacebuilder_roles_plbl_viewContent: "Gebruikers met deze machtiging kunnen documenten in de teamruimte bekijken.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Documenteigenschappen bekijken",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Gebruikers met deze machtiging kunnen de eigenschappen van de documenten in de teamruimte bekijken, waaronder ook de systeemeigenschappen.",

		workspacebuilder_roles_priv_addNewSearches: "Zoekopdrachten toevoegen",
		workspacebuilder_roles_plbl_addNewSearches: "Gebruikers met deze machtiging kunnen zoekopdrachten aan de teamruimte toevoegen. De zoekopdracht is standaard niet beschikbaar voor andere gebruikers.",

		workspacebuilder_roles_priv_createNewSearches: "Zoekopdrachten maken",
		workspacebuilder_roles_plbl_createNewSearches: "Gebruikers met deze machtiging kunnen nieuwe zoekopdrachten maken, maar deze niet opslaan. Als gebruikers deze machtiging niet hebben, kunnen ze geen documenten toevoegen die al in de repository voor de teamruimte aanwezig zijn.",

		workspacebuilder_roles_priv_shareSearches: "Zoekopdrachten delen",
		workspacebuilder_roles_plbl_shareSearches: "Gebruikers met deze machtiging kunnen zoekopdrachten die ze maken met andere gebruikers van de teamruimte delen.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Klassen of invoersjablonen beheren",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Gebruikers met deze machtiging kunnen klassen of invoersjablonen uit de teamruimte verwijderen of eraan toevoegen.",

		workspacebuilder_roles_priv_addRemoveClasses: "Klassen beheren",
		workspacebuilder_roles_plbl_addRemoveClasses: "Gebruikers met deze machtiging kunnen klassen uit de teamruimte verwijderen of eraan toevoegen.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Teamruimtegebruikers beheren",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Gebruikers met deze machtiging kunnen gebruikers en groepen uit de teamruimte verwijderen of eraan toevoegen. Bovendien kunnen ze bepalen welke rollen er aan gebruikers worden toegewezen.",

		workspacebuilder_roles_priv_modifyRoles: "Rollen wijzigen",
		workspacebuilder_roles_plbl_modifyRoles: "Eigenaren met deze machtiging kunnen rolmachtigingen voor de teamruimte wijzigen. Deze machtiging is alleen beschikbaar voor eigenaren.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Gebruikers selecteren",
		workspacebuilder_users_add_users_and_groups_button: "Gebruikers en groepen toevoegen...",
		workspacebuilder_users_users_or_group_header: "Gebruiker en Groep",
		workspacebuilder_users_roles_header: "Rollen",

		workspacebuilder_users_role_header: "Functie",
		workspacebuilder_users_role_no_permissions: "Deze rol heeft geen machtigingen",
		workspacebuilder_users_available_roles_label: "Beschikbare rollen:",
		workspacebuilder_users_selected_users_and_groups_label: "Geselecteerde gebruikers en groepen:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "De teamruimte kan niet worden opgeslagen. U moet minstens één eigenaar voor deze teamruimte opgeven.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "De teamruimte kan niet worden opgeslagen. Aan alle gebruikers moet een rol worden toegewezen.",
		// end of select users

		workspacebuilder_search_templates: "Zoekopdrachten selecteren",
		workspacebuilder_search_add: "Zoekopdracht toevoegen",
		workspacebuilder_properties_workspaceName: "Naam teamruimte:",
		workspacebuilder_properties_templateName: "Sjabloonnaam:",
		workspacebuilder_properties_workspaceDescription: "Beschrijving van teamruimte:",
		workspacebuilder_properties_templateDescription: "Beschrijving van sjabloon:",
		workspacebuilder_properties_workspaceTemplate: "Geselecteerde sjabloon:",
		workspacebuilder_properties_security: "Sjabloon delen met:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Verplaatsen vanuit teamruimte:",
		moveTeamspaceDocuments_security: "Document delen met:",
		moveTeamspaceDocuments_security_change: "Geef aangepaste beveiliging op voor de geselecteerde items",
		moveTeamspaceDocuments_item_type_level: "U kunt niet opgeven dat de beveiliging van de geselecteerde items genegeerd moet worden, want de klasse van de geselecteerde items is zodanig geconfigureerd dat er alleen beveiliging op klassenniveau wordt gebruikt",
		moveTeamspaceDocuments_security_inherit: "Beveiliging overnemen uit doelmap",
		moveTeamspaceDocuments_file_info_text: "U kunt items van de ene teamruimte verplaatsen naar de andere teamruimte of map.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "U beschikt niet over de juiste machtigingen om de items te verplaatsen naar de geselecteerde map. ",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "U beschikt niet over de juiste machtigingen om de items te verplaatsen vanuit de teamruimte.",
		moveTeamspaceDocuments_move_mixed_items: "U kunt de beveiliging van de geselecteerde items niet negeren. Een aantal items wordt niet door de teamruimte beheerd. U kunt alleen de beveiliging van items vervangen die door de teamruimte worden beheerd. ",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "U moet een naam opgeven voor de teamruimte.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "U moet een naam opgeven voor de teamruimtesjabloon.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "De teamruimtenaam mag geen van de volgende tekens bevatten: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "De naam van de sjabloon mag geen van de volgende tekens bevatten: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link naar document",
		workspacebuilder_folders_makeDocCopy: "Document kopiëren",
		workspacebuilder_folders_newfolder: "Nieuwe map",
		workspacebuilder_folders_local_drive: "Uit lokale directory",
		workspacebuilder_folders_from_repo: "Uit repository",
		workspacebuilder_folders_add_doc: "Document toevoegen",
		workspacebuilder_folders_grid_name: "Naam",
		workspacebuilder_folders_props: "Eigenschappen",
		workspacebuilder_folders_remove: "Verwijderen",
		workspacebuilder_folders_delete: "Wissen",
		workspacebuilder_folders_adddoc_local: "Document toevoegen vanuit lokaal station",
		workspacebuilder_folders_adddoc_repo: "Document toevoegen vanuit repository",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "De opgegeven mapnaam bestaat al. Geef een andere mapnaam op",

		workspacebuilder_classes_title: "Klassen of invoersjablonen selecteren",
		workspacebuilder_classes_title_cm: "Klassen selecteren",
		workspacebuilder_classes_template_introText: "Geef op of in de teamruimten die voor deze sjabloon worden gemaakt klassen of invoersjablonen worden gebruikt om documenten aan de repository toe te voegen. Als er geen klassen zijn geselecteerd, werken de teamruimten met alle klassen waarvoor ze toegang hebben. Gebruikers kunnen de lijst met klassen of invoersjablonen wijzigen in de teamruimte als ze de juiste machtiging hebben.",
		workspacebuilder_classes_template_introText_cm: "Selecteer de klassen die gebruikers kunnen gebruiken om documenten aan de repository toe te voegen. Als er geen klassen zijn geselecteerd, zien gebruikers van de teamruimte alle klassen waartoe ze toegang hebben. Gebruikers kunnen de lijst van klassen in de teamruimte wijzigen als ze over de juiste machtigingen beschikken.",
		workspacebuilder_classes_instance_introText: "Selecteer de klassen of invoersjablonen die gebruikers kunnen gebruiken om documenten aan de repository toe te voegen. Als er geen klassen geselecteerd zijn, zien gebruikers van de teamruimte alle klassen waartoe ze toegang hebben. Gebruikers kunnen de lijst van klassen of invoersjablonen in de teamruimte wijzigen als ze over de juiste machtigingen beschikken.",
		workspacebuilder_classes_instance_introText_cm: "Selecteer de klassen die gebruikers kunnen gebruiken om documenten aan de repository toe te voegen. Als er geen klassen geselecteerd zijn, zien gebruikers van de teamruimte alle klassen waartoe ze toegang hebben. Gebruikers kunnen de lijst van klassen in de teamruimte wijzigen als ze over de juiste machtigingen beschikken.",
		workspacebuilder_classes_selection: "Selecteer klassen:",
		workspacebuilder_classes_list: "Beschikbare klassen:",
		workspacebuilder_classes_columns_default: "Standaard",
		workspacebuilder_classes_columns_className: "Klassennaam",
		workspacebuilder_classes_type_classes: "Klassen gebruiken om documenten toevoegen",
		workspacebuilder_classes_type_classes_tooltip: "Klassen bevatten bijbehorende eigenschappen zodat documenten kunnen worden gevonden voor later gebruik.",
		workspacebuilder_classes_type_entryTemplates: "Invoersjablonen gebruiken om documenten toe te voegen",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Met invoersjablonen wordt ervoor gezorgd dat de informatie die wordt opgegeven voor elk document consistent is en vooraf gedefinieerde waarden gebruikt.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Naam invoersjabloon",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Beschrijving",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "U moet ten minste één invoersjabloon toevoegen aan de teamruimte.",

		workspacebuilder_classes_new: "Nieuwe klasse",
		workspacebuilder_classes_add: "Klasse toevoegen",
		workspacebuilder_entryTemplate_add: "Invoersjabloon toevoegen",
		workspacebuilder_add_list: "Toevoegen",
		workspacebuilder_makeDefault_list: "Standaard maken",
		workspacebuilder_removeDefault_list: "Standaardwaarde verwijderen",

		workspacebuilder_roles_title: "Rollen selecteren",
		workspacebuilder_roles_title_modify: "Rollen wijzigen",

		workspacebuilder_selection_moveup: "Omhoog verplaatsen",
		workspacebuilder_selection_movedown: "Omlaag verplaatsen",
		workspacebuilder_selection_remove: "Verwijderen",
		workspacebuilder_selection_add: "Toevoegen",
		workspacebuilder_selection_create_new_search: "Nieuwe zoekopdracht...",
		workspacebuilder_selection_create_new_role: "Nieuwe rol...",
		workspacebuilder_selection_make_role_available: "Beschikbaar maken",
		workspacebuilder_selection_make_role_available_tooltip: "Hiermee wordt de geselecteerde rol gedeeld met andere sjablonen. U moet ten minste één machtiging toewijzen aan de rol om het te delen.",

		workspacebuilder_navigation_next: "Volgende",
		workspacebuilder_navigation_finish: "Voltooien",
		workspacebuilder_navigation_validate: "Valideren",
		workspacebuilder_navigation_previous: "Vorige",
		workspacebuilder_navigation_cancel: "Annuleren",
		workspacebuilder_navigation_customize: "Aanpassen",

		workspacebuilder_search_dialog_title: "Zoeken",
		workspacebuilder_dialog_close: "Sluiten",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Beschikbaarheid van de sjabloon",
		workspace_properties_templateState_tooltip: "Maak de sjabloon onbeschikbaar om te voorkomen dat gebruikers teamruimten maken die deze sjabloon gebruiken.",
		workspace_properties_dialog_title: "Sjablooneigenschappen",
		workspace_properties_online_radio_option_label: "Beschikbaar maken",
		workspace_properties_offline_radio_option_label: "Niet-beschikbaar maken",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Wilt u annuleren zonder uw wijzigingen op te slaan?",
		workspacebuilder_cancel_confirmation_button: "Ja",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Ongeldige items worden uit de sjabloon verwijderd en de sjabloon wordt beschikbaar gesteld aan gebruikers. Wilt u deze teamruimtesjabloon valideren?",
		workspacebuilder_validate_confirmation_button: "Ja",
		workspacebuilder_validate_confirmation_title: "Valideren",

		/* Entry templates builder */
		entry_templates: "Beheer Invoersjablonen",
		no_entry_templates_were_found: "Er zijn geen invoersjablonen",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filteren",

		/* Roleselector widget */
		role_selector_name: "Rollen:",

		/* User Group picker widget */
		directory_label: "Directory:",
		scope_label: "Zoeken naar:",
		name_starts_with_label: "Naam begint met",
		name_contains_label: "Naam bevat",
		display_name_contains_label: "Weergavenaam bevat",
		starts_with_label: "Begint met:",
		available_label: "Beschikbaar:",
		available_heading: "Beschikbaar",
		selected_label: "Geselecteerd:",
		selected_heading: "Geselecteerd",
		available_repositories_label: "Beschikbare repository's",
		selected_repositories_label: "Geselecteerde repository's",
		default_repository: "Standaardrepository:",
		default_repository_placeholder: "Selecteer een repository",
		default_role_placeholder: "Selecteer een rol",
		menu_label_placeholder: "Selecteer een label of voer deze in",
		default_repository_hover: "Geef de repository op die standaard wordt geselecteerd wanneer gebruikers zich aanmelden bij de webclient vanaf deze desktop.<br><br><b>Belangrijk:</b> U moet eerst repository's toevoegen aan de desktop met de geselecteerde lijst van repository. Pas daarna kunt u de standaardrepository opgeven.",
		default_repository_workflow_hover: "<b>Onthoud:</b> U kunt de toepassingsruimte alleen configureren voor de repository's die zijn geconfigureerd voor deze desktop.",
		remove_label: "Verwijderen",
		users_label: "Gebruikers",
		groups_label: "Groepen",
		user_or_group_name_label: "Naam gebruiker of groep:",
		user_or_group_name_hover: "Geef de naam op van een gebruiker of groep die geldig is voor de repository. De naam is niet gevalideerd.",
		user: "Gebruiker",
		group: "Groep",
		name: "Naam:",
		displayName: "Weergavenaam",
		display_name: "Weergavenaam:",
		shortName: "Korte naam:",
		distinguishedName: "Unieke naam:",
		search_tooltip: "Zoeken",
		add_tooltip: "Toevoegen",
		add_selected_tooltip: "Toevoegen aan de geselecteerde lijst",
		remove_tooltip: "Verwijderen",
		remove_selected_tooltip: "Verwijderen uit de geselecteerde lijst",
		add_to_selected_tooltip: "Toevoegen",
		remove_from_selected_tooltip: "Verwijderen",
		move_up_selected_tooltip: "Omhoog",
		move_down_selected_tooltip: "Omlaag",
		advanced_search_options_tooltip: "Geavanceerde instellingen",
		move_right_selected_tooltip: "Verplaatsen naar submenu",
		move_left_selected_tooltip: "Verplaatsen vanuit submenu",
		add_separator: "Scheidingsteken toevoegen",
		menu_item_label: "Label menuoptie:",
		add_menu_label: "Submenu toevoegen",
		menu_label: "Label submenu:",
		menu_label_info: "<b>Belangrijk:</b> U moet ten minste één menuoptie toevoegen aan dit submenu voordat u dit menu kunt opslaan.",
		menu_dropdown_label: "Label vervolgkeuzeknop:",
		menu_dropdown_label_info: "<b>Belangrijk:</b> U moet ten minste één menuoptie toevoegen aan deze vervolgkeuzeknop voordat u deze werkbalk kunt opslaan.",
		no_item_found: "Geen resultaten gevonden.",
		me: "Mij",
		anyone: "Iedereen",
		specific_users: "Bepaalde gebruikers",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "De zoekopdracht heeft meer dan {0} resultaten opgeleverd. Wijzig uw criteria om uw zoekopdracht te verfijnen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "In de zoekresultaten komen items voor die al geselecteerd waren. Die items worden niet afgebeeld in de zoekresultaten.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Er zijn meer dan {0} resultaten gevonden. Gebruik een filter om de resultaten te beperken",

		user_already_selected: "De opgegeven gebruiker is al geselecteerd. Geef een andere gebruiker op.",
		group_already_selected: "De opgegeven groep is al geselecteerd. Geef een andere groep op.",
		user_cannot_select_self: "U kunt uzelf niet toevoegen. Geef een andere gebruiker op.",

		/* Select User Group dialog */
		select_user_group_add_label: "Toevoegen",
		select_user_group_cancel_label: "Annuleren",
		add_users_groups_label: "Gebruikers en groepen toevoegen",
		add_user_group_label: "Gebruiker en Groep toevoegen",
		add_users_label: "Gebruikers toevoegen",
		add_user_label: "Gebruiker toevoegen",
		add_label: "Toevoegen:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "De volgende documenten bevatten niet-opgeslagen gewijzigde annotaties:",
		viewer_confirm_to_proceed: "Wilt u doorgaan en de wijzigingen teniet doen?",
		viewer_warn_has_changes: "Uw niet-opgeslagen wijzigingen gaan verloren.",
		viewer_warn_is_printing: "Het afdrukken dat in uitvoering is, wordt mogelijk niet voltooid.",
		viewer_warn_confirm_exit: "Wilt u het programma afsluiten?",
		viewer_prompt_save_changes: "Het volgende document bevat niet-opgeslagen annotaties die verloren zullen gaan:<br>${0}<br><br>Wilt u de wijzigingen opslaan?",
		viewer_prompt_mergesplit_changes: "De volgende documenten bevatten niet-opgeslagen wijzigingen:<br>${0}<br><br>Wilt u doorgaan en de wijzigingen teniet doen?",
		viewer_prompt_mergesplit_tab_changes: "Het volgende document bevat niet-opgeslagen wijzigingen:<br>${0}<br><br>Wilt u doorgaan en de wijzigingen teniet doen?",
		viewer_new_item_name: "Nieuw document",
		viewer_top_frame: "Bovenste kader:",
		viewer_bottom_frame: "Onderste kader:",
		viewer_left_frame: "Linkerkader:",
		viewer_right_frame: "Rechterkader:",
		viewer_viewer_frame: "Viewerkader:",
		viewer_properties_frame: "Eigenschappenkader:",
		viewer_comment_frame: "Commentaarkader:",
		viewer_mergesplit_on: "Weergave",
		viewer_mergesplit_off: "Samenvoegen en splitsen",
		viewer_mergesplit_context_menu_move: "Verplaatsen",
		viewer_mergesplit_context_menu_rename: "Naam wijzigen",
		viewer_mergesplit_context_menu_delete: "Wissen",
		//move to new window
		viewer_move_to_new_window:"Verplaatsen naar nieuw venster",
		viewer_continue:"Wijzigingen wissen",
		viewer_return_to_original_window:"Teruggaan naar oorspronkelijke venster",
		viewer_switch_window:"Naar het andere venster gaan",
		viewer_prompt_lost_changes:"Het document ${0} is momenteel open in een ander venster. Dat document heeft niet-opgeslagen wijzigingen. <br><br>Wil u naar dat venster gaan om de wijzigingen op te slaan of de wijzigingen verwijderen en het bestand in dit venster openen?",
		viewer_mergesplit_fallback_info: "U kunt de Samenvoegings- en splitsingsactie alleen uitvoeren voor documenten die zich in dezelfde repository bevinden.",
		viewer_tabbed_layout: "Als tabs weergeven",
		viewer_tabbed_layout_highcontrast: "Tabs",
		viewer_split_vertical_layout: "Vensters splitsen in boven- en onderkant",
		viewer_split_vertical_layout_highcontrast: "Boven en onder",
		viewer_split_horizontal_layout: "Vensters splitsen in linker- en rechterkant",
		viewer_split_horizontal_layout_highcontrast: "Links en rechts",
		viewer_add_vertical_layout: "Nieuw tabblad onderaan",
		viewer_add_vertical_layout_highcontrast: "Tabblad onderaan",
		viewer_add_horizontal_layout: "Nieuw tabblad rechts",
		viewer_add_horizontal_layout_highcontrast: "Tabblad rechts",
		viewer_add_horizontal_layout_rtl: "Nieuw tabblad links",
		viewer_add_horizontal_layout_rtl_highcontrast: "Tabblad links",
		viewer_split_properties_layout: "Eigenschappen bekijken",
		viewer_split_comment_layout: "Commentaar bekijken",
		viewer_split_notelog_layout: "Notitiebestand bekijken",
		viewer_window_title: "${0} Viewer",
		viewer_next_hit: "Het volgende document in de lijst afbeelden",
		viewer_prev_hit: "Het vorige document in de lijst afbeelden",
		viewer_confrim_more_search_results: "De zoekresultaten bevatten geen documenten meer die kunnen worden bekeken. Wilt u meer zoekresultaten ophalen?",
		viewer_confirm_get_next_page: "De lijst met resultaten bevat geen items meer die kunnen worden bekeken. Wilt u meer zoekresultaten ophalen?",
		viewer_confirm_get_next_item: "De lijst met resultaten bevat meer items die kunnen worden bekeken. Wilt u het volgende item bekijken?",
		viewer_fn_annotation_tooltip: " Gemaakt door: ${0}, gemaakt op: ${1}",
		viewer_box_note_limitation: "U kunt Box-notitie alleen openen en bekijken in een afzonderlijk venster.",
		viewer_click_to_open_box_note: "Klik hier om de Box-notitie te openen.",
		viewer_box_view_expiring: "De maximale tijd dat u uw Box-document kunt bekijken is 60 minuten. Uw huidige sessie vervalt over ${0} minuten. Als u aan het document wilt blijven werken, moet u het nu opnieuw laden. Wilt u het document opnieuw laden? ",
		viewer_add_dialog_save_as_type: "Opslaan als type:",
		viewer_add_dialog_save_as_pdf: "PDF ",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflict bij uitchecken",
		viewer_checkout_conflict: "Dit document is door een andere gebruiker uitgecheckt.",
		viewer_checkout_confirm: "Er is een nieuwere versie van het document beschikbaar. Wilt u doorgaan met het uitchecken van het document of wilt u de nieuwere versie in de viewer laden? Als u ervoor kiest de viewer opnieuw te laden, gaan niet-opgeslagen wijzigingen verloren. ",
		viewer_checkout_continue: "Doorgaan met uitcheckprocedure",
		viewer_checkout_reload: "Opnieuw laden",
		viewer_status_building: "Document wordt gebouwd...",
		viewer_status_adding: "Document wordt toegevoegd...",
		viewer_status_checking_in: "Document wordt ingecheckt...",

		/* Class Selector Widget */
		include_subclasses_label: "Subklassen opnemen",
		include_subclasses_label2: "Ook zoeken in subklassen",
		include_subclasses_note: "(Inclusief subklassen)",
		available_classes_col_header: "Beschikbare klassen",
		single_class_label: "Zoeken in één klasse",
		multiple_classes_label: "Zoeken in meerdere klassen",
		multiple_classes_hover_help: "Selecteer deze optie om te zoeken in meer dan één klasse. De klassen kunnen bovenliggende klassen of subklassen zijn. Als u deze optie selecteert, worden alleen de eigenschappen en waarden weergegeven die gelden voor de geselecteerde klassen.",
		selected_classes_col_header: "Geselecteerde klassen",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Inclusief submappen)",
		favorites_pseudo_node: "\\Favorieten\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Kies een map in de repository waaraan u het document wilt toevoegen.",
		no_permission_add_folder: "U beschikt niet over de juiste machtigingen om mappen aan deze map toe te voegen.",
		no_permission_add_document: "U beschikt niet over de juiste machtigingen om documenten aan deze map toe te voegen.",
		document_already_in_folder: "Het document bevindt zich al in deze folder.",
		cant_move_folder_onto_parent: "De map komt al in deze map voor.",
		cant_move_folder_onto_self: "U kunt geen map verplaatsen naar zichzelf of naar submappen van die map.",

		/* Workflow Widgets */
		process_application_space: "Toepassingsruimte proces",
		process_role: "Procesrol",
		process_inbasket: "Vak IN proces",
		process_worklist: "Werklijst",
		process_step_processor: "Werkitem proces",
		process_tracker: "Werkitem volgen",
		process_info_subject: "Subject",
		process_info_stepname: "Stap",
		process_info_is_locked: "Vergrendeld",
		process_info_no_access: "Geen toegang",
		process_info_received_on: "Ontvangen op",
		process_info_overdue: "Achterstallig",
		process_info_reminder_sent: "Herinnering verzonden",
		process_info_locked_by_user: "Vergrendeld door",
		process_work_object_number: "Werkobjectnummer",
		process_deadline: "Actiedatum:",
		process_launchedby: "Gestart door:",
		process_receivedon: "Ontvangen op:",
		process_step: "Stap:",
		process_properties: "Eigenschappen",
		process_attachments: "Bijlagen",
		process_attachments_select: "Selecteer een bijlage",
		process_finish_button_label: "Stoppen met volgen",
		process_tracker_history: "Historie",
		process_tracker_milestones: "Mijlpalen",
		process_tracker_milestone: "Mijlpaal",
		process_tracker_milestone_level: "Level",
		process_tracker_milestones_empty: "Er zijn geen mijlpalen om af te beelden.",
		process_tracker_level_selector_label: "Mijlpaalniveaus afbeelden tot aan:",
		process_tracker_map_selector_label: "Filteren op toewijzing:",
		process_tracker_message: "Bericht",
		process_tracker_datereached: "Bereikte datum",
		process_tracker_stepname: "Stap",
		process_tracker_cycle: "Cyclus",
		process_tracker_review_cycle: "Evaluatiecyclus",
		process_tracker_participant: "Deelnemer",
		process_tracker_completed: "Voltooid",
		process_tracker_response: "Antwoord",
		process_tracker_comments: "Commentaar",
		process_tracker_delete_confirmation: "Wilt u stoppen met het volgen van de volgende werkstroom: ${0}?",
		process_tracker_history_allmaps: "Alle kaarten",
		process_tracker_history_workflow: "Werkstroom",
		process_tracker_history_terminate: "Beëindigen",
		process_tracker_history_malfunction: "Storing",
		process_filter_label: "Filteren",
		process_no_filter_summary: "Geen filters toegepast",
		process_filter_summary: "${0} toegepast",
		process_filter_reset_tooltip: "Bij een reset wordt het filter leeggemaakt en wordt het vak IN vernieuwd.",
		process_attachments_add_folder: "Map toevoegen",
		process_attachments_add_doc: "Document toevoegen",
		process_complete_button_label: "Voltooien",
		process_save_button_label: "Opslaan",
		process_launch_button_label: "Werkstroom starten",
		process_open_button_label: "Openen",
		process_movetoinbox_button_label: "Naar vak IN verplaatsen",
		process_return_button_label: "Terug",
		process_return_to_sender_tooltip: "Het werkitem terugzetten naar het vak IN van herkomst",
		process_move_to_inbasket_tooltip: "Het werkitem verplaatsen naar uw persoonlijke postvak IN",
		process_reassign_tooltip: "Het werkitem opnieuw toewijzen aan een andere eigenaar",
		process_reassign_button_label: "Opnieuw toewijzen",
		process_preferences_button_label: "Voorkeuren",
		process_manageroles_button_label: "Rollen beheren",
		process_manageroles_no_members: "Er zijn geen leden.",
		process_responses_button_label: "Meer responsen",
		process_morecustomaction_button_label: "Meer acties",
		process_show_instructions: "Instructies weergeven",
		process_hide_instructions: "Instructies verbergen",
		process_remove_attachment: "Verwijderen",
		process_close_window: "Het werkitem is verwerkt.",
		process_delegate_flag: "Vereisen dat de huidige eigenaar het werkitem goedkeurt voordat u het doorstuurt naar de volgende stap in de werkstroom.",
		process_paticipant_voting: "Aantal deelnemers dat is vereist voor goedkeuring van stemming:",
		process_get_next_label: "Volgend werkitem ophalen",
		process_no_more_items: "Het vak IN heeft geen items meer om te verwerken.",
		process_workflow_name: "Werkstroomnaam:",
		process_pattern_process_name: "Evaluatie voor ${0}",
		process_instuctions: "Instructies voor reviewers:",
		process_pattern_deadline: "Actiedatum:",
		process_reviewers: "Reviewers:",
		process_approvals_required: "Vereiste goedkeuringen:",
		process_on_reject: "Als het werkitem afgewezen is:",
		process_return_to_originator: "Naar mij terugzenden",
		process_return_to_previous_reviewer: "Terugzenden naar voorgaande reviewer",
		process_additional_settings: "Aanvullende instellingen:",
		process_allow_reassign: "Reviewers toestaan deze evaluatie opnieuw toe te wijzen",
		process_complete_notification: "Mij waarschuwen als de evaluatie voltooid is",
		process_workflow_name_hover_help: "De naam die u voor het werkitem opgeeft, moet het voor reviewers eenvoudig maken onderscheid te zien tussen dit werkitem en andere werkitems in hun vak IN.",
		process_approvals_required_hover_help: "Als het werkitem door meerdere personen tegelijkertijd wordt geëvalueerd, kunt u aangeven hoeveel goedkeuringen nodig zijn om het werkitem te voltooien.",
		process_approval_options: "Opties voor goedkeuring",
		process_all: "Alle",
		process_at_least: "Ten minste",
		process_at_least_by_count: "Ten minste ${0} reviewers",
		process_at_least_by_percentage: "Ten minste ${0} reviewers",
		process_comments: "Commentaar:",
		process_review_step_comments_hover_help: "Als u het werkitem afwijst, moet u informatie opgeven over de reden van de afwijzing. Met deze informatie kan de afzender van het werkitem of de vorige reviewer uw opmerkingen verwerken.",
		process_rework_step_comments_hover_help: "U dient informatie op te geven over de manier waarop u de opmerkingen hebt verwerkt. Als u het niet eens bent met het commentaar, geef dan aan waarom.",
		process_rejection_reason: "Reden voor afwijzing:",
		process_summary: "Overzicht",
		process_sequential_review: "Opeenvolgende evaluatie",
		process_sequential_review_description: "Het werkitem wordt door elke reviewer in volgorde geëvalueerd.",
		process_parallel_review: "Parallelle evaluatie",
		process_parallel_review_description: "Het werkitem wordt door alle reviewers tegelijkertijd geëvalueerd.",
		process_parallel_approvals_required_error: "Het aantal goedkeuringen is te hoog. Er zijn maar ${0} reviewers opgegeven.",
		process_parallel_invalid_required_approvals_count: "De waarde is niet geldig.  De waarde moet ${0} zijn.",
		process_subject_prompt: "Voer het onderwerp in",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Werkitem:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Eigenschappen bekijken",
		view_permissions_level: "Machtigingen bekijken",
		view_content_level: "Document bekijken",
		link_level: "Link",
		modify_properties_level: "Eigenschappen bewerken",
		modify_content_level: "Document bewerken",
		minor_version_level: "Kleine versie bewerken",
		major_version_level: "Hoofdversie bewerken",
		create_instance_level: "Instance maken",
		delete_document_level: "Document wissen",
		delete_item_level: "Item verwijderen",
		modify_document_permissions_level: "Machtigingen beheren",
		modify_folder_permissions_level: "Machtigingen beheren",
		modify_owner_level: "Eigenaar wijzigen",
		delete_folder_level: "Map wissen",
		file_in_folder_level: "Toevoegen aan mappen",
		create_subfolder_level: "Submappen maken",
		link_item_level: "Document annoteren, Toevoegen aan map", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Alleen documenten: Voeg een annotatie aan het document toe of verwijder een annotatie uit het document</li><li>Alleen mappen: Voeg items aan de map toe of verwijder items uit de map</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Wissen",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Eigenaar",
		/* previously \"Full control\" */
		edit_privilege: "Auteur",
		/* previously \"Edit\" */
		read_only_privilege: "Lezer",
		/* previously \"Read only\" */
		no_access_privilege: "Geen toegang",
		share_with_label: "Delen met:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Alleen mij",
		public_label: "Iedereen",
		members_label: "Bepaalde gebruikers en groepen",
		select_members_label: "Selecteren...",
		select_user_group_label: "Gebruikers selecteren...",
		select_users_groups_label: "Gebruikers en groepen selecteren...",
		select_user_label: "Gebruiker selecteren...",
		propagation_label: "Doorgave:",
		access_label: "Machtigingen:",
		add_permission_add_label: "Toevoegen",
		security_policy_label: "Beveiligingsbeleid:",
		includes_inherited_access: "Bevat geërfde toegang",
		customize_access_for_label: "Toegang wijzigen voor:",
		customize: "Aanpassen",
		direct: "Dit item",
		singleLevelInheritance: "Eén niveau",
		infiniteLevelInheritance: "Alle niveaus",
		inherited: "Overgenomen",
		direct_hover_help: "Beveiligingsinstellingen zijn van toepassing op het geselecteerde item",
		singleLevelInheritance_hover_help: "Deze machtigingen zijn van toepassing op dit item en op de direct onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit dit item.",
		infiniteLevelInheritance_hover_help: "Deze machtigingen zijn van toepassing op dit item en op alle onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit dit item.",
		inherited_hover_help: "Deze machtigingen zijn overgenomen van het bovenliggende item.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Deze machtigingen voor ${0} zijn van toepassing op dit item en op de direct onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit dit item.",
		infiniteLevelInheritance_member_hover_help: "Deze machtigingen voor ${0} zijn van toepassing op dit item en op alle onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit dit item.",
		inherited_member_hover_help: "Deze machtigingen voor ${0} zijn overgenomen van het bovenliggende item.",
		partial_hover_help: "Instellingen voor beveiliging van het item zijn door een gebruiker gewijzigd",
		allow: "Toestaan",
		deny: "Weigeren",
		basic: "Basis",
		advanced: "Geavanceerd",
		permission_type: "Toegang instellen voor:",
		share_with_hover_help: "Het item wordt momenteel gedeeld met de volgende gebruikers en groepen.",
		direct_security_policy_hover_help: "U kunt de beveiliging van dit item instellen middels dit beveiligingsbeleid.",
		security_policy_hover_help: "De beveiliging van dit item kan alleen worden bekeken, omdat door het beveiligingsbeleid wijzigingen niet toegestaan zijn.",
		security_remove: "Geen machtigingen",
		pseudo_group_label: "Alias-accounts",
		marking_hover_help: "De beveiliging van dit item wordt door een markeringsset geregeld, wat invloed kan hebben op de beveiliging van het item.",
		note_label: "Belangrijk:",
		marking_text: "Dit item wordt gemarkeerd als: ${0}. Het item kan aanvullende beveiligingsbeperkingen hebben.",
		authenticated_users: "Geverifieerde gebruikers",
		realm_users: "${0} gebruikers",
		denyAll: "Alle weigeren",
		allowAll: "Alle toestaan",
		remove_direct_text: "Bij het opslaan van de wijzigingen worden de machtigingen voor dit lid verwijderd uit dit item. ",
		remove_single_inheritance_text: "Bij het opslaan van de wijzigingen worden de machtigingen voor dit lid verwijderd uit het item en uit <br>de direct onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit het item.<p>Wilt u doorgaan?",
		remove_infinite_inheritance_text: "Bij het opslaan van de wijzigingen worden de machtigingen voor dit lid verwijderd uit het item en uit <br>alle onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit het item.<p>Wilt u doorgaan?",
		remove_inheritance_text: "Bij het opslaan van de wijzigingen worden de machtigingen voor dit lid verwijderd uit het item en uit <br>alle onderliggende items die zijn geconfigureerd voor de overname van beveiligingsinstellingen uit het item. Alleen de machtigingen die <br>zijn overgenomen door dit item blijven gehandhaafd.<p>Wilt u doorgaan?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Deze machtigingen voor ${0} verwijderen",

		security_proxy_text: "De beveiliging van dit item kan alleen worden bekeken.",
		security_proxy_declared_text: "De beveiliging van dit item kan alleen worden bekeken omdat deze door een beveiligingsproxy gedefinieerd is.",
		security_proxy_hover_help: "De beveiliging van dit item wordt geregeld door de beveiliging die is ingesteld op een ander object in de repository.",
		add_permissions_label: "Machtigingen toevoegen",
		permission_propagation_direct: "Alleen deze map",
		permission_propagation_onelevel: "Deze map en één niveau lager",
		permission_propagation_alllevels: "Deze map en alle onderliggende niveaus",
		document_propagation_label: "Toegang instellen voor:",
		document_propagation_FOLDER: "Map",
		document_propagation_DOCUMENT: "Document",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Verificatiebron:",

		/* Versions Widget */
		object_versions_selector_label: "Versies:",
		object_versions_label: "Versies",
		object_type_document_label: "Document:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Mappen opgeslagen in",
		folders_filed_in_folder_col_hdr: "Map",
		folders_filed_in_path_col_hdr: "Pad",
		folders_filed_in_containment_name_col_hdr: "Naam van item",
		folders_filed_in_creator_col_hdr: "Gemaakt door",
		folders_filed_in_date_created_col_hdr: "Gemaakt op",

		/* Parent Documents */
		properties_parent_documents_label: "Bovenliggende documenten",

		/* Select object dialog */
		select_object_title: "Item selecteren",
		select_object_breadCrumb_version_prefix: "Versies voor: ",
		show_versions_label: "Versies tonen",
		use_current_version_label: "Huidige versie gebruiken",
		use_released_version_label: "Vrijgegeven versie gebruiken",

		/* Select content class dialog */
		select_class: "Klasse selecteren",
		/* Select Search dialog */
		select_search: "Zoekopdracht selecteren",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Koppeling weergeven",
		show_hyperlink_intro: "U kunt de koppeling in e-mails, chats en webpagina's kopiëren en plakken. Als er meerdere versies van het item zijn, geeft u op naar welke versie u wilt verwijzen.",
		show_hyperlink_intro_no_version_select: "U kunt de koppeling in e-mails, chats en webpagina's kopiëren en plakken.",
		show_text_label: "Versie:",
		released_button_label: "Release",
		current_button_label: "Huidige",
		select_button_label: "Specifieke versie",
		show_hyperlink_no_released_version_msg: "Er bestaat geen vrijgegeven versie van dit document.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Werkstroom starten",
		edit_workflow_title: "Eigenschappen werkitem",
		start_workflow_intro: "Start een werkstroom om de geselecteerde items te verwerken. Als u de werkitems wilt toewijzen aan een specifieke gebruiker, geeft u een eigenaar op.",
		edit_workflow_intro: "U kunt de eigenschappen van de geselecteerde werkitems bewerken. Als u het werkitem aan een andere gebruiker wilt toewijzen, geeft u een eigenaar op.",
		workflow_field_label: "Werkstroom:",
		priority_field_label: "Prioriteit:",
		owner_field_label: "Eigenaar:",
		start_button_label: "Start",
		save_button_label: "Opslaan",
		owner_value_hint: "Voer een alfanumerieke reeks van maximaal 32 tekens in. De tekenreeks mag alleen spaties en de volgende tekens bevatten: a-z, A-Z, 0-9 en ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Contentelementen",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "De waarde is niet geldig.  De waarde mag alleen spaties of de volgende tekens bevatten: a-z, A-Z, 0-9, en ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Geef een waarde op tussen 1 en 32000 om het belang van het werkitem aan te geven.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "De waarde is niet geldig.  De prioriteit moet een waarde zijn tussen 1 en 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "De werkstroomnaam bestaat niet.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Onderbreken in werkstroom",
		suspend_workitems_intro: "Als u een werkitem in de werkstroom onderbreekt, kan het werkitem pas worden verwerkt als het weer wordt hervat.",
		suspend_workitems_options_label: "De geselecteerde werkitems onderbreken:",
		suspend_until_resume_label: "Totdat deze handmatig worden hervat",
		suspend_until_date_label: "Tot",
		suspend_for_duration_label: "Gedurende",
		suspend_for_duration_hours: "Uur",
		suspend_for_duration_days: "Dagen",
		suspend_for_duration_weeks: "Weken",
		suspend_for_duration_months: "Maanden",
		suspend_for_duration_years: "Jaar",
		suspend_button_label: "Aanhouden",
		suspend_duration_value_hint: "Geef een waarde op tussen 1 - 99 voor de duur.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "De waarde is niet geldig.  De waarde moet tussen 1 - 99 liggen.",

		/* Remove from workflow */
		remove_workflow_title: "Verwijderen uit werkstroom",
		remove_workflow_confirmation: "Wilt u de geselecteerde items verwijderen uit de werkstroom?<br>${0} items zijn geselecteerd.",
		remove_workflow_button_label: "Verwijderen",

		/* Unfile dialog */
		unfile_dialog_title: "Verwijderen uit map",
		unfile_dialog_remove_from_folder_label: "Verwijderen uit:",
		unfile_dialog_info_text: "U kunt items uit mappen verwijderen. Als u echter een item uit alle mappen wist, verwijdert u het item daarmee niet uit de repository. U kunt het item nog steeds opzoeken door een zoekactie uit te voeren. Alleen de mappen waarvoor u weergaverechten hebt, worden in deze lijst weergegeven.",
		unfile_dialog_select_all: "Alles selecteren",
		unfile_dialog_deselect_all: "Alles wissen",
		unfile_dialog_remove_button_label: "Verwijderen",
		unfile_dialog_select_folder_col_hdr: "Map selecteren",
		unfile_dialog_folder_col_hdr: "Map",
		unfile_dialog_path_col_hdr: "Pad",
		unfile_dialog_not_filed_msg: "Dit item bevindt zich in geen enkele map.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "U beschikt niet over de juiste machtigingen om dit item te verwijderen uit een van de mappen waar dit item zich in bevindt.",
		unfile_dialog_folder_not_selectable_tooltip: "U beschikt niet over de juiste machtigingen om dit item uit deze map te verwijderen.",
		unfile_multi_prompt: "Wilt u de geselecteerde items verwijderen uit de map ${0}?",
		unfile_large_number_items_confirmation_question: "U hebt ${0} items geselecteerd om te verwijderen uit de map ${1}.<br/>Als u een groot aantal items uit een map wist, kan dat lang duren.<br/>Wilt u doorgaan?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Openen",
		move_to_folder_title: "Verplaatsen naar map",
		move_to_folder_button_caption: "Verplaatsen",
		move_to_folder_label: "Verplaatsen naar:",
		add_to_folder_title: "Toevoegen aan map",
		add_to_folder_button_caption: "Toevoegen",
		add_to_folder_label: "Toevoegen aan:",
		copy_to_folder_title: "Kopiëren naar map",
		copy_to_folder_button_caption: "Kopiëren",
		copy_to_folder_label: "Kopiëren naar:",
		copy_to_folder_delete_label: "Na het kopiëren de geselecteerde items uit Box verwijderen.",
		move_from_folder_label: "Verplaatsen uit:",
		move_file_info_text: "U kunt items van de ene naar de andere map verplaatsen.",
		move_folder_info_text: "U kunt mappen van de ene naar de andere bovenliggende map verplaatsen.",
		add_doc_to_folder_info_text: "U kunt items aan een of meer mappen toevoegen. Als een item zich al in een map bevindt, blijft het in die map en wordt het toegevoegd aan alle andere mappen die u opgeeft.",
		copy_doc_to_folder_info_text: "U kunt items kopiëren naar een map.",
		box_copy: "Kopiëren naar Box",
		box_copy__button_caption: "Kopiëren",
		box_copy_to_info_text: "Selecteer de repository en map waarnaar u de geselecteerde items uit Box wilt kopiëren.",
		box_copy_from_info_text: "Selecteer de repository en map waarnaar u de geselecteerde items uit Box wilt kopiëren.",
		box_copy_version_info_text: "Om een nieuw document toe te voegen, selecteert u de repository en de map. Om een nieuwe versie in te checken, selecteert u de repository en het document.",
		admin_box_copy: "Kopiëren naar Box",
		admin_box_copy_hover: "Met deze optie kunnen gebruikers documenten naar Box kopiëren.",

		no_permission_to_copy_version_msg: "Het is niet mogelijk om het document vanuit Box te kopiëren als een nieuwe versie van het geselecteerde document. U hebt niet de vereiste machtiging om het geselecteerde document te bewerken, of het geselecteerde document is door iemand anders uitgecheckt.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "U beschikt niet over de juiste machtigingen om dit item te verwijderen uit een van de mappen waar dit item zich in bevindt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "U beschikt niet over de juiste machtigingen om dit item uit deze map te verwijderen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Dit item kan niet worden verplaatst, want het is in geen enkele map opgeslagen. Kies een ander item.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Werkstroom starten",
		subscriptions_dialog_available_items_label: "Beschikbare items:",
		subscriptions_dialog_info_text: "Opgeven welke werkstroom moet worden gestart.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Naam",
		subscriptions_dialog_desc_col_hdr: "Beschrijving",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Rollen beheren",
		manageroles_dialog_info_text: "U kunt de lijst van gebruikers wijzigen voor elke rol die gekoppeld is aan de ruimte van deze procestoepassing.",
		manageroles_dialog_members_label: "Leden",
		manageroles_dialog_roles_label: "Rollen",
		manageroles_dialog_add_button_label: "Gebruikers en groepen toevoegen",
		manageroles_dialog_remove_button_label: "Verwijderen",
		manageroles_dialog_save_button_label: "Opslaan",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Er zijn geen werkstromen aan dit item gekoppeld.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Voorkeuren voor werkstromen",
		workflow_pref_dialog_info_text: "Geef de werkstroomevents aan waarvoor u e-mailmeldingen wilt ontvangen. U kunt er ook voor kiezen om uw werk door te sturen naar een andere persoon; dit doet u door een gebruiker te selecteren aan wie u het werk wilt delegeren.",

		workflow_pref_general: "Algemeen",
		workflow_pref_email_address: "E-mailadres",
		workflow_pref_email_address_hover: "Geef het e-mailadres op waarop u werkstroommeldingen wilt ontvangen.",
		workflow_pref_preferred_locale: "Taal",
		workflow_pref_preferred_locale_hover: "Dit is de taal waarin de e-mailmeldingen worden afgebeeld.",

		workflow_pref_work_item_notice: "Werkitem-meldingen",
		workflow_pref_step_new_assignment: "Een nieuw werkitem is aan mij toegewezen",
		workflow_pref_step_new_assignment_hover: "Waarschuw mij wanneer ik een nieuw werkitem ontvang.",
		workflow_pref_step_expired_deadline: "Deadline voor werkitem is verstreken",
		workflow_pref_step_expired_deadline_hover: "Waarschuw mij wanneer ik een deadline voor een werkitem niet haal.",
		workflow_pref_step_reminders: "Deadline voor werkitem is nabij",
		workflow_pref_step_reminders_hover: "Herinner mij aan een werkitem wanneer de deadline nabij is.",

		workflow_pref_originator_notice: "Meldingen afzender",
		workflow_pref_milestone_reached: "Mijlpaal is bereikt",
		workflow_pref_milestone_reached_hover: "Waarschuw mij wanneer een mijlpaal wordt bereikt voor een door mij gestarte werkstroom.",

		workflow_pref_tracker_notice: "Trackermeldingen werkstroom",
		workflow_pref_tracker_new_assignment: "Een nieuw tracker-item is aan mij toegewezen",
		workflow_pref_tracker_new_assignment_hover: "Waarschuw mij wanneer een door mij gevolgde werkstroom wordt geopend.",
		workflow_pref_tracker_deadline_reminders: "Deadline voor werkstroom is nabij",
		workflow_pref_tracker_deadline_reminders_hover: "Herinner mij aan een werkstroom wanneer de deadline ervoor nabij is.",
		workflow_pref_tracker_deadline_expired: "Deadline van werkstroom is verstreken",
		workflow_pref_tracker_deadline_expired_hover: "Waarschuw mij wanneer deadline voor een werkstroom is verstreken.",
		workflow_pref_tracker_exception: "Werkstroomfout is opgetreden",
		workflow_pref_tracker_exception_hover: "Waarschuw mij wanneer een uitzondering of fout optreedt voor een werkstroom.",
		workflow_pref_tracker_expired_deadline: "Deadline van stap is verstreken",
		workflow_pref_tracker_expired_deadline_hover: "Waarschuw mij wanneer een deadline voor stap in een door mij gevolgde werkstroom is verstreken.",
		workflow_pref_tracker_milestone_reached: "Mijlpaal is bereikt",
		workflow_pref_tracker_milestone_reached_hover: "Waarschuw mij wanneer een mijlpaal wordt bereikt voor een door mij gevolgde werkstroom.",

		workflow_pref_out_notice: "Niet op kantoor",
		workflow_pref_proxy_user: "Werk delegeren aan",
		workflow_pref_proxy_user_hover: "Met deze optie kunt u uw werk automatisch laten doorsturen naar een andere gebruiker, bijvoorbeeld wanneer u niet op kantoor bent of op vakantie.",
		workflow_pref_workflow: "Werkstroom",
		workflow_pref_on: "Op",
		workflow_pref_off: "Uit",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Werkstroom starten",
		transfered_workflows_dialog_info_text: "Selecteer werkstroom om te starten.",
		transfered_workflows_dialog_available_items_label: "Beschikbare items:",
		transfered_workflows_dialog_select_button_label: "Starten",
		transfered_workflows_dialog_name_col_hdr: "Naam",
		transfered_workflows_dialog_no_item_found: "Er zijn geen overgedragen werkstromen gevonden.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Werkstroom overbrengen",
		transfer_workflow_dialog_info_text: "Selecteer een werkstroom om over te brengen naar het werkstroomsysteem.",
		transfer_workflow_dialog_use: "Gebruik deze werkstroomnaam",
		transfer_workflow_dialog_use_another: "Gebruik een andere werkstroomnaam",
		transfer_workflow_dialog_in_use: "De naam van de werkstroom is: ",
		transfer_workflow_dialog_transfer_button_label: "Overbrengen",
		transfer_workflow_dialog_no_items_found: "Er zijn geen overgedragen werkstromen gevonden.",
		transfer_workflow_dialog_use_hover: "Geef de huidige werkstroomnaam uit de werkstroomdefinitie op.",
		transfer_workflow_dialog_another_hover: "Geef een andere werkstroomnaam op of gebruik van een bestaande naam van een overgedragen werkstroom opnieuw.",

		/*Search In control*/
		search_in_title: "Zoeken in:",
		search_in_teamspaces: "Teamruimtes",
		search_in_repositories: "Repository's",
		search_in_thisteamspaces: "Deze teamruimte",

		ajaxViewer_save: "Annotaties opslaan",
		ajaxViewer_print: "Afdrukvoorbeeld",
		ajaxViewer_firstPage: "Eerste pagina",
		ajaxViewer_previousPage: "Vorige pagina",
		ajaxViewer_nextPage: "Volgende pagina",
		ajaxViewer_lastPage: "Laatste pagina",
		ajaxViewer_unknownPageCount: "1 van ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} van ${1}",
		ajaxViewer_zoomOut: "Uitzoomen",
		ajaxViewer_zoomIn: "Inzoomen",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Passend maken op breedte",
		ajaxViewer_fitHeight: "Passend maken op hoogte",
		ajaxViewer_fitPage: "Passend maken",
		ajaxViewer_rotate270: "270 graden draaien",
		ajaxViewer_rotate90: "90 graden draaien",
		ajaxViewer_rotate180: "180 graden draaien",
		ajaxViewer_darken: "Donkerder",
		ajaxViewer_lighten: "Lichter",
		ajaxViewer_lessContrast: "Minder contrast",
		ajaxViewer_moreContrast: "Meer contrast",
		ajaxViewer_invert: "Selectie omkeren",
		ajaxViewer_createHighlight: "Accentuering",
		ajaxViewer_createNote: "Annoteren",
		ajaxViewer_editAnnotation: "Eigenschappen van annotatie wijzigen",
		ajaxViewer_deleteAnnotation: "Annotatie wissen",
		ajaxViewer_editAnnotationTitle: "Eigenschappen van annotatie wijzigen",
		printableView_print: "Afdrukken",
		printableView_close: "Sluiten",

		search_results_dropdown_button: "Weergave resultaten",
		search_results_columns_label: "Weergave zoekresultaten",
		search_results_columns_description: "Selecteer de eigenschappen die u wilt afbeelden in de zoekresultaten.",
		search_results_sortby_label: "Sorteren op:",
		search_results_order_label: "Sorteren op:",
		search_results_accending_label: "Oplopend",
		search_results_descending_label: "Afnemend",
		search_results_available_properties: "Beschikbaar",
		search_results_selected_properties: "Geselecteerd",
		search_rank_property: "Rangorde (alleen bij zoeken op tekst)",
		search_name_attribute: "Naam (${0})",
		search_results_summary_enabled_label: "Contentsamenvattingen inschakelen (alleen bij zoeken op tekst)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Zoekopdrachten",
		manage_teamspace_classes_tab_title: "Klassen",
		manage_teamspace_entry_templates_tab_title: "Invoersjablonen",
		manage_teamspace_team_tab_title: "Team",
		manage_teamspace_roles_tab_title: "Rollen",
		manage_teamspace_dialog_title: "Teamruimte wijzigen",
		manage_teamspace_button_label: "Teamruimte wijzigen",
		manage_teamspace_team_pane_heading: "Team selecteren",
		manage_teamspace_classes_pane_heading: "Klassen selecteren",
		manage_teamspace_entry_templates_pane_heading: "Invoersjablonen selecteren",
		manage_teamspace_no_rights_message: "U hebt niet de juiste machtigingen om deze teamruimte te wijzigen.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Eigenschappen teamruimte",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Geef de eigenschappen op die worden afgebeeld voor mappen en documenten in de contentlijst als gebruikers door de teamruimte bladeren. U kunt ook de volgorde opgeven waarin de eigenschappen worden afgebeeld.",
		teamspace_props_sel_cols_use_default_label: "De instellingen voor <b>Bladeren</b> van deze repository gebruiken",
		teamspace_props_sel_cols_use_default_tooltip: "De instellingen die in de beheerfunctie op de pagina Bladeren voor deze repository zijn ingesteld.",
		teamspace_props_general_tab_label: "Algemeen",
		teamspace_props_column_props_tab_label: "Weergegeven eigenschappen",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Te importeren bestand",
		teamspace_import_template_instruction: "U kunt voor de import een exportbestand voor een teamruimtesjabloon selecteren.",
		teamspace_import_template_button_label: "Importeren",
		teamspace_import_template_dialog_label: "Teamruimtesjabloon importeren",

		/* Annotation Dialog */
		annotationDlg_title: "Annotaties",
		annotationDlg_description: "Het geselecteerde document heeft de volgende annotaties:",
		annotationDlg_msg_noAnnotations: "Er zijn geen annotaties. Klik op Toevoegen om een annotatie te maken.",
		annotationDlg_pageLabel: "Pagina: ${pageNum}",
		annotationDlg_accLabel: "Toegang: ${accType}",
		annotationDlg_accLabel_public: "Openbaar",
		annotationDlg_accLabel_private: "Persoonlijk",
		annotationDlg_accLabel_privateGroup: "Persoonlijk(${groupName})",
		annotationDlg_copiable: "Kan worden gekopieerd naar andere server",
		annotationDlg_cannotCopy: "Kan niet worden gekopieerd naar andere server",
		annotationDlg_addButtonLabel: "Toevoegen",

		/* Share Dialog */
		is_shared: "Gedeeld",
		is_share_pending: "Delen in behandeling",
		share_title: "Box delen",
		share_instructions_new: "Een e-mail verzenden met daarin een link voor het gedeelde bestand. Iedereen die over de link beschikt, heeft toegang tot het bestand.",
		share_instructions_existing: "Een e-mail verzenden met daarin een link voor het gedeelde bestand. Iedereen die over de link beschikt, heeft toegang tot het bestand. Andere personen beschikken misschien al over de link omdat iemand dit bestand al heeft gedeeld.",
		share_instructions_another_version_shared: "Een e-mail verzenden met daarin de link voor het gedeelde bestand. Iedereen die over de link beschikt, heeft toegang tot het bestand. Andere personen beschikken misschien al over de link omdat iemand een andere versie van dit bestand al heeft gedeeld.",
		share_buttonLabel_share: "Delen",
		share_email_addresses: "Verzenden naar:",
		share_email_addresses_hover: "Als het delen voltooid is, wordt er een link naar deze e-mailadressen verzonden. Als u niets opgeeft, wordt de link naar uw eigen e-mailadres verzonden.",
		share_email_addresses_reshare_hover: "Als het delen voltooid is, wordt er een link naar deze e-mailadressen verzonden. Als u niets opgeeft, wordt er geen e-mail verzonden.",
		share_password: "Wachtwoord instellen:",
		share_password_placeholder: "Optioneel",
		share_comments: "Bericht:",
		share_comments_default: "Ik wil graag mijn bestand met u delen op Box.",
		share_myEmail: "Verzenden vanaf:",
		share_expiration: "Verval van link instellen:",
		share_expire: "Toegang vervalt:",
		share_expire_none: "Vervalt nooit",
		share_allowDownload: "Download toestaan",
		share_add: "Toevoegen",
		share_advanced_instructions: "De instellingen voor downloaden, verval en wachtwoord zijn van toepassing op het gedeelde bestand in Box.",
		share_advanced_existing_instructions: "De instellingen voor downloaden, verval en wachtwoord zijn van toepassing op het gedeelde bestand in Box.",
		share_options_edit_warning: "Belangrijk: Wijzigingen in deze instellingen zijn van invloed op iedereen die over de link beschikt, met inbegrip van de personen die de link al hebben.",
		share_link: "Link:",
		share_email_addresses_placeholder: "E-mailadressen",
		share_email_address_placeholder: "E-mailadres",
		share_email_address_invalid: "Geef een geldig e-mailadres op.",
		share_cannot_share_with_self: "U kunt geen bestanden met uzelf delen. Geef een andere gebruiker op.",
		share_selected_version_with_minor_warning_hover: "Versie ${0} van het document wordt gedeeld. U hebt versie ${1} geselecteerd.<br><br><b>Waarschuwing</b>: Als u versie ${1} deelt, kan niemand versie ${2} delen tenzij u de share voor versie ${1} wist.",
		share_selected_version_hover: "Versie ${0} van het document wordt gedeeld. U hebt versie ${1} geselecteerd.",
		share_selected_version_message: "Belangrijk: Versie ${0} van het document wordt gedeeld. U hebt versie ${1} geselecteerd.",
		share_different_version_message: "Belangrijk: U hebt versie ${1} geselecteerd, maar versie ${0} van het document wordt al gedeeld.  U kunt versie ${1} pas delen nadat u de share hebt gewist. In plaats daarvan kunt u echter wel een link naar versie ${0} delen.",
		share_version_message: "Belangrijk: Versie ${0} van het document wordt gedeeld. Geef aan welke versie u wilt delen.",
		share_version_new: "Versie ${0} delen",
		share_version_new_p8_hover: "Bij het delen van dit document wordt er een specifieke link gemaakt, uitsluitend naar de geselecteerde versie.<br><br>Als het document al werd gedeeld, geldt het volgende:<ul><li>U kunt een latere versie delen. De link wordt dan omgeleid naar die latere versie.</li><li>Het is niet mogelijk om een eerdere versie te delen, tenzij u de share eerst wist.</li></ul>",
		share_version_new_cm_hover: "Bij het delen van dit document wordt er een specifieke link gemaakt, uitsluitend naar de geselecteerde versie.<br><br>Als het document al werd gedeeld, geldt het volgende:<ul><li>U kunt een latere versie delen. De link wordt dan omgeleid naar die latere versie.</li><li>Het is niet mogelijk om een eerdere versie te delen.</li></ul>",
		share_version_update: "Versie ${0} delen (werk de shareopties bij).",
		share_version_update_p8_hover: "Bij het delen van dit document blijft alleen de link naar de specifieke versie bewaard.<br><br>Als het document al werd gedeeld, geldt het volgende:<ul><li>U kunt een latere versie delen. De link wordt dan omgeleid naar die latere versie.</li><li>Het is niet mogelijk om een eerdere versie te delen, tenzij u de share eerst wist.</li></ul>",
		share_version_update_cm_hover: "Bij het delen van dit document blijft alleen de link naar de specifieke versie bewaard.<br><br>Als het document al werd gedeeld, geldt het volgende:<ul><li>U kunt een latere versie delen. De link wordt dan omgeleid naar die latere versie.</li><li>Het is niet mogelijk om een eerdere versie te delen.</li></ul>",
		share_version_change_to_current: "Versie ${0} delen (werk de share bij met de geselecteerde versie).",
		share_version_change_to_current_p8_hover: "Bij het delen van dit document wordt de link bijgewerkt, zodat deze alleen naar de geselecteerde versie verwijst.<br><br>Als het document al werd gedeeld, geldt het volgende:<ul><li>U kunt een latere versie delen. De link wordt dan omgeleid naar die latere versie.</li><li>Het is niet mogelijk om een eerdere versie te delen, tenzij u de share eerst wist.</li></ul>",
		share_version_change_to_current_cm_hover: "Bij het delen van dit document wordt de link bijgewerkt, zodat deze alleen naar de geselecteerde versie verwijst.<br><br>Als het document al werd gedeeld, geldt het volgende:<ul><li>U kunt een latere versie delen. De link wordt dan omgeleid naar die latere versie.</li><li>Het is niet mogelijk om een eerdere versie te delen.</li></ul>",
		share_repository: "Repository voor gedeelde bestanden",
		share_repository_hover: "Als u de te gebruiken Box-repository niet ziet, kunt u op de pagina Repository's een nieuwe Box-repository toevoegen.",
		share_options: "Opties voor shares",
		unshare_confirm: "Als u de share wist, worden alle links met de share verbroken, met inbegrip van de sharelinks die eerder door andere gebruikers verzonden zijn. Andere gebruikers die het document willen delen, moeten het oorspronkelijke document selecteren en dit opnieuw delen.<br><br>Weet u zeker dat u de share wilt verwijderen?",
		unshare_button: "Box-share wissen",
		admin_share: "Services voor Box-share:",
		admin_share_hover: "Hiermee kunnen gebruikers een document delen vanuit elke repository waarvoor een Box-share ingeschakeld is. Voor het delen van een document wordt het bestand gekopieerd naar Box, wordt een link gemaakt en wordt deze link per e-mail verzonden.",
		admin_my_email_modifiable: "Gebruikers toestaan e-mailadres bij Verzenden vanaf te wijzigen",
		admin_my_email_modifiable_hover: "Voor delen met Box is het e-mailadres van de gebruiker standaard alleen-lezen; het wordt opgehaald vanuit een toewijzing van gebruikers en e-mailadressen die gebruikersaccounts van Box vertegenwoordigen.<br><br>Selecteer deze optie om gebruikers toe te staan hun e-mailadres te bewerken als ze items delen. De geldigheid van het e-mailadres wordt echter niet gecontroleerd.",
		admin_repos_admin_user: "Sharebeheerder:",
		admin_repos_admin_user_hover: "Stel de beheerder van de share in als u een desktop met Box-shareservices hebt geactiveerd en deze Box-repository hebt geselecteerd als de repository voor gedeelde bestanden.<br><br>Klik op Instellen en meld u bij Box aan met een geldig Box-beheerdersaccount.<br><br>De sharebeheerder moet een Box-beheerder zijn waarvoor onbeperkte opslagruimte is geconfigureerd in Box.",
		admin_repos_admin_user_not_set_warning: "De Box-beheerder is niet geconfigureerd voor de geselecteerde repository.<br><br>Box-shareservices zijn uitgeschakeld totdat u de Box-beheerder voor de geselecteerde repository instelt, of u een andere Box-repository selecteert waarvoor de Box-beheerder geconfigureerd is.<br><br>U kunt de Box-beheerder instellen in het gedeelte voor Box-shareservices op de pagina Algemeen van de repository.",
		admin_share_not_configured_warning: "Voordat u services voor Box-share kunt gebruiken, moet u een Box-repository met serververificatie toevoegen en selecteren",
		/* Office Online Server settings */
		admin_office_online_title: "Configuratie van Office Online",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Geef op of u het voor gebruikers die deze desktop openen, mogelijk wilt maken om hun Office-documenten te bewerken met behulp van Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Gezamenlijk bewerken toestaan",
		admin_office_online_allow_collaborative_editing_hover: "Hiermee maakt u het voor meerdere gebruikers mogelijk om aan hetzelfde document te werken. Hef de selectie van deze optie op als u wilt dat documenten door slechts één gebruiker tegelijk kunnen worden bewerkt.",
		admin_office_online_repository_not_set_warning: "Voordat u de Office Online-service kunt inschakelen, moet u die service inschakelen op een repository en moet u de URL van Microsoft Office Online Server opgeven. Klik op <b>Repository's</b>, selecteer een repository, ga naar het tabblad <b>Edit-integratie</b> en schakel de service in. Klik op <b>Instellingen > Algemeen</b> en voer de URL van Microsoft Office Online Server in.",
		admin_settings_office_online_server_enable_hover: "Geef aan of u Office Online Server wilt gebruiken voor het werken met Office-documenten.",
		admin_office_online_server_url: "URL van Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Geef op via welke URL de andere toepassingen kunnen communiceren met Office Online Server. De URL heeft de volgende indeling: http://servernaam:poortnummer/hosting/discovery.",
		admin_office_online_server_Verified: "Gecontroleerd",
	    admin_office_online_server_Failed: "<b>Mislukt</b>",

		admin_repcfg_office_online_service_p8_hover: "Om de repository te initialiseren voor het gebruik van Office Online Server, kunt u het oorspronkelijke sjabloonbestand voor elke Office-toepassing toevoegen. Als er geen sjabloonbestand wordt opgegeven, wordt de standaardsjabloon gebruikt. ",	
		admin_repcfg_office_online_server_integration: "Integratie met MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Voordat u Office Online Server kunt inschakelen, moet u moet u de URL van Microsoft Office Online Server opgeven. Klik op Instellingen > Algemeen en voer de URL in",
		admin_repcfg_office_online_word_template_name: "Standaard Word-sjabloon",
		admin_repcfg_office_online_excel_template_name: "Standaard Excel-sjabloon",
		admin_repcfg_office_online_powerpoint_template_name: "Standaard PowerPoint-sjabloon",
		admin_repcfg_office_online_blank_template_description: "Dit is de standaardsjabloon die wordt gebruikt als u geen eigen sjabloon toevoegt.",
		/* Edit Service settings */
		admin_icn_edit_title: "Edit-configuratie",	
	    admin_icn_edit_files_cleanup_interval: "Interval voor opschoning van tijdelijke bestanden (in dagen):",
	    admin_icn_edit_files_cleanup_interval_hover: "U kunt de hoeveelheid tijd instellen die de tijdelijke bestanden in de ICN Edit-client worden bewaard. De standaardwaarde is 20 dagen. De maximale tijdsduur is 20 dagen. De minimale tijdsduur is 1 dag.",
	    admin_icn_edit_service_integration: "Integratie met Edit-service",
	    admin_icn_edit_service_integration_intro: "Met de Edit-service kunnen gebruikers eenvoudig bestanden toevoegen en bewerken in de native apps die op hun computers zijn geïnstalleerd.<br><br><b>Belangrijk:</b> Als u de Edit-service inschakelt, moet u uw repositoryconfiguratie opslaan voordat u de vooraf gedefinieerde categorieën kunt bewerken. ",
		admin_icn_edit_service: "Edit-service:",
		admin_icn_edit_enable_hover: "Om de Edit-service te kunnen gebruiken, moet u:<ul><li>De service inschakelen in de repository</li><li>De service inschakelen in uw omgeving</li><li>De IBM Content Navigator Edit-client installeren op de werkstations van gebruikers</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Inschakelen",
		admin_icn_edit_disable: "Uitschakelen",
		admin_icn_edit_create_new_category: "Nieuwe categorie",
		admin_icn_edit_delete_category: "Categorie wissen",
		admin_icn_edit_edit_category: "Categorie bewerken",
		admin_icn_edit_disable_category: "Categorie uitschakelen",
		admin_icn_edit_enable_category: "Categorie inschakelen",
		admin_icn_edit_new_category_dialog_title: "Nieuwe categorie",
		admin_icn_edit_edit_category_dialog_title:"Categorie bewerken",
		admin_icn_edit_new_category_dialog_instructions: "Met een documentcategorie kunt u sjablonen koppelen aan specifieke MIME-typen voor de Edit-service. U kunt bijvoorbeeld een set van sjablonen koppelen aan PDF-bestanden zodat gebruikers sjablonen kunnen toepassen bij het maken of bewerken van bestanden vanuit de Edit-client van IBM Content Navigator. <br><br><b>Belangrijk:</b> U moet uw repositoryconfiguratie opslaan voordat u sjablonen kunt toevoegen aan de categorie die u maakt. ",
		admin_icn_edit_edit_category_dialog_instructions: "U moet uw repositoryconfiguratie opslaan voordat u sjablonen kunt toevoegen aan deze categorie. ",
		admin_icn_edit_delete_category_dialog_instructions: "Wilt u deze categorie, samen met de bijbehorende sjablonen wissen? <br><br><b>Belangrijk:</b> Uw wijzigingen zijn niet permanent totdat u uw wijzigingen in de repository hebt opgeslagen. ",
		admin_icn_edit_category_label: "Categorie: ",
		admin_icn_edit_category_discription_label:"Beschrijving: ",
		admin_icn_edit_template_column_head:"Naam sjabloon",
		admin_icn_edit_category_duplicate_error_message: "Er bestaat al een categorie met dit ID. ",
		admin_icn_edit_word_category_description: "Deze categorie definieert de beschikbare sjablonen voor Microsoft Word-documenten in de Edit-service. ",
		admin_icn_edit_excel_category_description: "Deze categorie definieert de beschikbare sjablonen voor Microsoft Excel-documenten in de Edit-service. ",
		admin_icn_edit_powerpoint_category_description: "Deze categorie definieert de beschikbare sjablonen voor Microsoft PowerPoint-documenten in de Edit-service. ",

		icn_edit_add_template_dialog_title:"Een sjabloon voor ${0} toevoegen",
		icn_edit_add_template_only_one_file_error: "U kunt slechts één bestand selecteren.",
		icn_edit_add_template_file_type_error: "U moet een geldig sjabloonbestand voor ${0} opgeven.<br><br>Het MIME-type van het geselecteerde document is ${1}.<br><br>Geldige MIME-typen: ${2}.",
		icn_edit_change_template_dialog_title: "Sjabloon ${0} bewerken",
		icn_edit_action_in_new_menu_name:"${0}-document",
		icn_edit_action_in_new_menu_submenu_oo_name: "met Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "met desktopapps",
		icn_edit_new_document_dialog_title: "Nieuw ${0}-document",
		icn_edit_new_document_dialog_intro: "Maak een nieuw ${0}-document en voeg het toe aan de repository. Het document wordt met de geselecteerde sjabloon van de edit-service gemaakt.", 
		icn_edit_select_edit_service_template: "Selecteer een sjabloon",
		icn_edit_edit_service_template: "Sjabloon voor Edit-service:",
		icn_edit_new_document_category_no_templates_message:"Er zijn geen sjablonen in deze categorie. neem contact op met de beheerder om sjablonen in deze categorie toe te voegen. ",
		icn_edit_installer: "Installatieprogramma voor IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Instellingen klassen en rollen",
		admin_repcfg_classes_and_roles_warning: "Voor het opgeven van klassen en gebruikers of gebruikersgroepen die beschikken over de machtiging voor het maken, bewerken en gebruiken van sjablonen of het maken van concepten van documenten, en die werken met Office Online-service en Edit-service.",
		admin_repcfg_classes_and_roles_click_warning: "klik hier.",
		/* Edit Service settings END */
		share_no_my_email_error: "Er was een probleem bij het vaststellen van het e-mailadres dat vereist is voor het delen van het document.",
		share_no_my_email_error_explanation: "U hebt zich aangemeld met gebruikers-ID ${0}, maar dit gebruikers-ID is niet aan een e-mailadres toegewezen.",
		share_no_my_email_error_userResponse: "Probeer u opnieuw aan te melden of meld u aan met een ander gebruikers-ID. Als het probleem blijft bestaan, meld dit dan bij de systeembeheerder.",
		share_no_my_email_error_adminResponse: "Het gebruikers-ID ${0} is niet aan een e-mailadres toegewezen en gebruikers kunnen in desktop ${1} geen email-adres voor Box-shareservices wijzigen.<br><br>Probeer een van de volgende oplossingen:<br>Controleer of de plugin voor e-mailtoewijzing geregistreerd is.<br>Controleer of het bestand emailMappingPlugin.json het gebruikers-ID ${0} en het e-mailadres van de gebruiker bevat en bouw, configureer en registreer vervolgens de plugin voor e-mailtoewijzing.<br>Als u de plugin voor e-mailtoewijzing of de e-mailadresdirectory van FileNet P8 niet wilt gebruiken, maar in plaats daarvan gebruikers wilt toestaan hun eigen e-mailadres in te voeren bij het delen van een document,  kunt u de desktopinstellingen voor Box-shareservices wijzigen zodat gebruikers de link vanaf een ander e-mailadres kunnen verzenden.",
		share_no_my_email_error_0: "gebruikers_ID",
		share_no_my_email_error_1: "desktop_naam",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Er wordt al een nieuwere versie van dit document gedeeld; u kunt de geselecteerde versie van dit document daarom niet delen.",
		share_later_version_shared_error_explanation: "U kunt geen eerdere versie van een document delen dat eerder al gedeeld is.",
		share_later_version_shared_error_userResponse: "Om de link naar de recentere versie van het document te verzenden, moet u eerst de recentere versie selecteren en daarna de actie Delen gebruiken.<br><br>Om de geselecteerde versie van het document te delen, moet u eerst de share voor de latere versie van het document wissen.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nieuw bericht",
		email_from: "Uit:",
		email_to: "Aan:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Geef een geldig e-mailadres op.",
		email_subject: "Onderwerp:",
		email_message: "Bericht:",
		email_message_placeholder: "Bericht toevoegen",
		email_attachments: "Bijlagen:",
		email_links: "Links:",
		email_send: "Verzenden",
		email_dont_send: "Niet verzenden",
		email_subject_reminder: "Herinneringsbericht onderwerp",
		email_subject_reminder_confirm: "Wilt u dit bericht verzenden zonder onderwerp?",
		email_missing_from_error: "Er was een probleem bij het vaststellen van het Van e-mailadres dat vereist is voor het delen van e-mail.",
		email_missing_from_error_explanation: "U hebt zich aangemeld met gebruikers-ID ${0}, maar dit gebruikers-ID is niet aan een e-mailadres toegewezen.",
		email_missing_from_error_userResponse: "Probeer u opnieuw aan te melden of meld u aan met een ander gebruikers-ID. Als het probleem blijft bestaan, meld dit dan bij de systeembeheerder.",
		email_missing_from_error_adminResponse: "Het gebruikers-ID ${0} is niet aan een e-mailadres toegewezen en gebruikers kunnen in desktop ${1} niet het Van e-mailadres wijzigen.<br><br>Probeer een van de volgende oplossingen:<br>Controleer of de plugin voor e-mailtoewijzing geregistreerd is.<br>Controleer of het bestand emailMappingPlugin.json het gebruikers-ID ${0} en het e-mailadres van de gebruiker bevat en bouw, configureer en registreer vervolgens de plugin voor e-mailtoewijzing.<br>Als u de plugin voor e-mailtoewijzing of de e-mailadresdirectory van FileNet P8 niet wilt gebruiken, maar in plaats daarvan gebruikers wilt toestaan hun eigen e-mailadres in te voeren bij het verzenden van een e-mail, kunt u de e-mailinstellingen voor desktops wijzigen zodat gebruikers het Van e-mailadres kunnen wijzigen.",
		email_missing_from_error_0: "gebruikers_ID",
		email_missing_from_error_1: "desktop_naam",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Het document kan niet worden geopend.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator kan geen verbinding maken met de IBM Content Navigator Edit-client.",
		open_edit_document_with_native_application_error_userResponse: "Installeer (of start) de Edit-client van IBM Content Navigator op uw werkstation. Probeer daarna het document opnieuw te openen.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Het document kan niet worden geopend.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator kan geen verbinding maken met de IBM Content Navigator Edit-client.",
		connect_to_the_streamline_service_error_userResponse: "Installeer (of start) de Edit-client van IBM Content Navigator op uw werkstation. Probeer daarna het document opnieuw te openen.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator is niet correct geconfigureerd voor het delen van documenten.",
		share_not_configured_error_explanation: "Voordat u documenten kunt delen, moet de feature Share van Box correct worden geconfigureerd. ",
		share_not_configured_error_userResponse: "Vraag of de systeembeheerder de feature Share van Box kan configureren.",
		share_not_configured_error_adminResponse: "De volgende items moeten worden geconfigureerd voordat u documenten kunt delen:<ul><li>De service Taakbeheer moet worden ingeschakeld in de instellingen van de beheertool.</li><li>Het verbindings-ID van taakbeheer moet worden geconfigureerd in de repository.</li><li>Het delen van documenten moet worden ingeschakeld in de repository.</li><li>Er moet een Box-repository worden geselecteerd om het delen mogelijk te maken.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "De eigenschapswijzigingen voor de nieuwe versie zijn niet opgeslagen",
		checkin_cors_save_attributes_error_explanation: "De versie is gemaakt, maar de wijzigingen van de eigenschap zijn niet opgeslagen. Het document kan nog worden uitgecheckt.",
		checkin_cors_save_attributes_error_userResponse: "Ontgrendel het document en werk de eigenschappen bij met behulp van de contextmenuoptie voor Eigenschappen.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "De eigenschapswijzigingen voor het nieuwe document zijn niet opgeslagen",
		add_cors_save_attributes_error_explanation: "Het document is gemaakt, maar de wijzigingen van de eigenschap zijn niet opgeslagen.",
		add_cors_save_attributes_error_userResponse: "Werk de eigenschappen bij met behulp van de contextmenuoptie voor Eigenschappen.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Het document kan niet worden geopend.",		
		edit_document_using_edit_service_error_explanation: "Het document kan niet worden geopend in Edit-service.",
		edit_document_using_edit_service_error_userResponse: "Vraag de beheerder om Integratie met edit-service bij te werken.<br><br> Als de gebruiker toegang tot dit document moet hebben in Edit-service, gaat u naar de pagina Edit-integratie voor de repository en werkt u Integratie met edit-service bij door het opnemen van de klasse in de lijst van klassen die gewijzigd worden ter ondersteuning van Edit-service.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Het document kan niet worden geopend.",		
		edit_document_is_editing_by_oos_error_explanation: "Het document is in gebruik door de Office Online-service.",
		edit_document_is_editing_by_oos_error_userResponse: "U moet het document opslaan en sluiten in de Office Online-service voordat u het kunt openen in de Edit-service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "CORS-uploads inschakelen (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "E-mailinstellingen:",
		admin_email_settings_hover: "Geef het type e-mailservice op waarmee u gebruikers wilt laten werken. Als u de e-mailservice op basis van HTML wilt inschakelen, kunt u gebruikers de mogelijkheid bieden het Van e-mailadres te wijzigen. Als u de e-mailservice op basis van Java wilt inschakelen, moet u beschikken over een browser die Java-ondersteuning biedt.",
		admin_email_use_service: "E-mailservice op basis van HTML gebruiken",
		admin_email_use_applet: "E-mailservice op basis van Java gebruiken",
		admin_email_can_modify_from: "Gebruikers toestaan Van e-mailadres te wijzigen",
		admin_email_can_modify_from_hover: "Standaard kan het Van e-mailadres niet worden gewijzigd; het wordt opgehaald vanuit een toewijzing van gebruikers en e-mailadressen die gebruikersaccounts vertegenwoordigen. <br><br>Selecteer deze optie om gebruikers toe te staan hun e-mailadres te bewerken als ze een e-mail verzenden. De geldigheid van het e-mailadres wordt echter niet gecontroleerd.",
		admin_email_use_from_as_sender: "Van e-mailadres gebruiken als afzender van de e-mail",
		admin_email_use_from_as_sender_hover: "Standaard wordt er in een gebruikersmail een geldig Van e-mailadres gebruikt. Dit e-mailadres wordt gedefinieerd door de mailsessie CNMailSession op de toepassingenserver. Selecteer deze optie als u wilt dat het e-mailadres van de gebruiker wordt toegepast in de e-mail.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nieuwe annotaties",
		addAnnotationDlg_labelContents: "Inhoud:",
		addAnnotationDlg_labelAccess: "Toegang:",
		addAnnotationDlg_labelPublic: "Openbaar",
		addAnnotationDlg_labelPrivate: "Persoonlijk",
		addAnnotationDlg_labelPrivateGroup: "Persoonlijk voor groep",
		addAnnotationDlg_labelGroup: "Groep",
		addAnnotationDlg_labelCopiable: "Deze annotatie kan worden gekopieerd naar een andere server.",
		addAnnotationDlg_buttonLabel_save: "Opslaan",

		/* Skip navigation */
		skipNavigation_title_main: "Meteen naar hoofdcontent",
		skipNavigation_title_menu: "Naar de navigatieknoppen",
		skipNavigation_label_main: "Meteen naar hoofdcontent",
		skipNavigation_label_menu: "Naar de navigatieknoppen",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Teamruimten beheren",
		manage_teamspace_pane_instance_hdr: "Teamruimtes",
		manage_teamspace_pane_template_hdr: "Sjablonen",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Vooruit bladeren",
		scroll_back: "Terug bladeren",

		breadcrumb_separator_open: "Knooppunt openen",
		breadcrumb_separator_close: "Knooppunt sluiten",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Er is geen item geselecteerd.",

		/* eds */
		eds_url: "URL van externe gegevensservice:",
		eds_request_timeout: "Timeout serviceaanvraag (seconden):",
		eds_is_required: "Verhinderen dat gebruikers acties uitvoeren waarmee eigenschapwaarden worden gewijzigd wanneer EDS niet beschikbaar is",

		/* eforms */
		eform_signing_pane_welcome: "Formulier ondertekenen",
		eform_signing_button_label: "Ondertekenen",
		eform_signing_pane_delete: "De handtekening wissen",
		eform_signing_button_label_delete: "Wissen",

		xtplugin_server_label: "Server-URL van IBM FileNet Workplace XT",
		xtplugin_server_hover: "Geef de URL op van de server waarop IBM FileNet Workplace XT geïmplementeerd is, bijvoorbeeld http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "Server-URL voor IBM eClient",
		ecplugin_server_hover: "Geef de URL op van de server waarop IBM eClient geïmplementeerd is, bijvoorbeeld http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Acties op een groot aantal items kunnen lang duren. Wilt u doorgaan?",
		large_number_actions_continue_button: "Doorgaan",

		large_items_actions_confirmation_question: "Acties op grote items kunnen lang duren. Wilt u doorgaan?",

		viewer_editproperties_title: "Bevestiging",
		viewer_editproperties_title_warning: "Waarschuwing",
		viewer_editproperties_save: "Opslaan",
		viewer_editproperties_next: "Volgende",
		viewer_editproperties_reset: "Resetten",
		viewer_editproperties_reset_hover: "Alle niet-opgeslagen gegevens worden gereset naar de eerder opgeslagen waarden",
		viewer_editproperties_saveandgetnext: "Opslaan en daarna volgende ophalen",
		viewer_editproperties_saveandgetnext_hover: "Automatisch het volgende document ophalen zodra ik mijn wijzigingen heb opgeslagen",
		viewer_editproperties_prompt_save_changes: "U hebt de eigenschappen van het volgende document gewijzigd<br>${0}<br><br>Wilt u de wijzigingen opslaan?",
		viewer_editproperties_prompt_discard_changes: "U hebt de eigenschappen van het volgende document gewijzigd<br>${0}<br><br>Een of meer van de eigenschappen heeft echter een ongeldige waarde; de wijzigingen kunnen daarom niet worden opgeslagen. U kunt de ongeldige waarden corrigeren of uw wijzigingen verwijderen.<br>Wilt u de ongeldige waarden corrigeren die in het eigenschappenvenster afgebeeld worden?",
		viewer_comments_prompt_discard_changes: "U hebt het commentaar gewijzigd. Wilt u de wijzigingen opslaan?",
		viewer_notelogs_prompt_discard_changes: "U hebt de notitiebestanden gewijzigd. Wilt u de wijzigingen opslaan?",
		social_collaborated_version: "Versie: ${0}",
		social_link_label: "Wie...",

		// social comments
		comments: "Commentaar",
		comments_add_hint: "Druk op Enter om uw commentaar toe te voegen.",
		comments_hint: "Typ uw commentaar.",
		comments_label: "Druk op Enter of Tab om uw commentaar op te slaan. Druk op Esc om te annuleren.",
		comments_delete_confirmation: "Wilt u het geselecteerde commentaar wissen?",
		comments_number: "Commentaar: ${0}",
		comments_save_new: "U hebt het commentaar gewijzigd. Wilt u het venster sluiten zonder uw wijzigingen op te slaan?",

		notelogs: "Notitiebestanden",
		notelogs_download: "Downloaden",
		notelog_modify: "Wijzigingen opslaan",
		notelog_edit: "Notitiebestand bewerken",
		notelog_create_newVersion: "Nieuwe versie van annotatiebestand maken",
		notelog_add_hint: "Geef uw commentaar op en druk op Enter om dit toe te voegen.",
		notelog_hint: "Druk op Shift+Enter voor een nieuwe regel",
		notelog_add_placeholder: "Druk op Enter om commentaar aan het annotatiebestand toe te voegen.",
		notelog_save_new: "U hebt het annotatiebestand gewijzigd. Wilt u het venster sluiten zonder uw wijzigingen op te slaan?",

		// P8 markings related
		cannot_remove_markings: "U hebt geen machtiging voor het verwijderen van de markeringswaarde(n): {0}",

		// download count
		downloadcount: "Downloads: {0}",
		downloadcount_single: "1 download",
		downloadcount_multiple: "{0} downloads",
		downloadcount_none: "Dit is nog door niemand gedownload",

		// recommendations
		recommendations: "Likes: {0}",
		recommendations_recommend: "Dit liken",
		recommendations_unrecommend: "Dit unliken",
		recommendations_you: "U hebt dit geliket",
		recommendations_you_and_another: "U en één andere persoon hebben dit geliket",
		recommendations_you_and_others: "U en {0} anderen hebben dit geliket",
		recommendations_another: "1 persoon heeft dit geliket",
		recommendations_others: "{0} personen hebben dit geliket",
		recommendations_none: "Dit is nog door niemand geliket",

		// tags
		tags: "Tags: ${0}",
		tags_delete: "${0} wissen",
		tags_none: "Er zijn geen tags om af te beelden.",
		tags_add: "Tags toevoegen:",
		tags_hint: "Druk op Enter om uw tags toe te voegen.",
		tags_hover_help: "Geef een tag of een lijst van tags op om te gebruiken bij het zoeken naar documenten met dezelfde tag. U kunt de tags van elkaar scheiden met een komma (,), puntkomma (;) of een spatie.",
		tags_hover_help_box: "Geef een tag of een door komma's gescheiden lijst van tags op om te gebruiken bij het zoeken naar documenten met dezelfde tag.",
		tags_no_access: "U beschikt niet over de juiste machtigingen om tags toe te voegen.",

		//task scheduler pane
		taskPane_tooltip: "View Asynchrone taken openen",
		taskPane_tree: "Navigatiestructuur Taakvenster",
		taskPane_allTasks: "Alle taken",
		taskPane_scheduledTasks: "Geplande taken",
		taskPane_recurringTasks: "Herhaalde taken",
		taskPane_inProgressTasks: "In uitvoering zijnde taken",
		taskPane_completedTasks: "Voltooide taken",
		taskPane_failedTasks: "Mislukte taken",
		taskPane_disabledTasks: "Uitgeschakelde taken",
		taskPane_statusScheduled: "Gepland",
		taskPane_statusInProgress: "In uitvoering",
		taskPane_statusCompleted: "Voltooid",
		taskPane_statusFailed: "Mislukt",
		taskPane_statusPaused: "Gepauzeerd",
		taskPane_noItemSelected: "Geen item geselecteerd",
		taskSchedulerPane_scheduleInformation: "Planningsgegevens",
		taskSchedulerPane_loginInformation: "Aanmeldingsgegevens",
		taskSchedulerPane_startImmediately: "Direct starten",
		taskSchedulerPane_recurrence: "Herhaling",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Rapport plannen",
		taskSchedulerPane_nameHoverHelp: "Geef de naam van de taak op.",
		taskSchedulerPane_descriptionHoverHelp: "Geef een beschrijving voor de taak op. De beschrijving helpt u de taken te onderscheiden. ",
		taskSchedulerPane_startTimeHoverHelp: "Geef op wanneer u de taak wilt uitvoeren. Om de taak nu uit te voeren, kiest u Direct starten.",
		taskSchedulerPane_recurrenceHoverHelp: "U kunt de taak plannen voor uitvoering op gezette tijden.",
		taskSchedulerPane_endTimeHoverHelp: "Geef op wanneer u de taak wilt laten stoppen. De taak wordt uitgevoerd vanaf de geplande begintijd tot aan de geplande eindtijd.",
		taskSchedulerPane_usernameHoverHelp: "Voor herhalende taken geeft u een gebruikersnaam op om de service de mogelijkheid te geven een verificatie uit te voeren als de taak actief is.",
		taskSchedulerPane_passwordHoverHelp: "Voor herhalende taken geeft u een wachtwoord op van de opgegeven gebruiker om de service de mogelijkheid te geven een verificatie uit te voeren als de taak actief is.",
		taskSchedulerPane_notification: "Melding",
		taskSchedulerPane_emailAddress: "E-mailadres",
		taskSchedulerPane_emailAddressHoverHelp: "Geef het e-mailadres op waar u meldingen over de status van de taak wilt ontvangen.",
		taskSchedulerPane_intervalHoverHelp: "Geef de tijdsduur op waarin de taak actief is. U kunt het interval in uren, dagen, weken of maanden opgeven.",
		taskSchedulerPane_scheduledStartTime: "Geplande begintijd",
		taskSchedulerPane_startTime: "Begintijd",
		taskSchedulerPane_title: "Plannen",
		taskSchedulerPane_runNow: "Nu uitvoeren",
		taskSchedulerPane_runOnce: "Eén keer uitvoeren",
		taskSchedulerPane_runAtSchedule: "Uitvoeren volgens planning",
		taskSchedulerPane_repeats: "Herhalingen",
		taskSchedulerPane_repeatsEvery: "Wordt herhaald",
		taskSchedulerPane_hourly: "Elk uur",
		taskSchedulerPane_daily: "Dagelijks",
		taskSchedulerPane_weekly: "Wekelijks",
		taskSchedulerPane_monthly: "Maandelijks",
		taskSchedulerPane_yearly: "Jaarlijks",
		taskSchedulerPane_sunday: "Z",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "D",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "D",
		taskSchedulerPane_friday: "V",
		taskSchedulerPane_saturday: "Z",
		taskSchedulerPane_starting: "Begindatum",
		taskSchedulerPane_after: "Na",
		taskSchedulerPane_ending: "Einddatum",
		taskSchedulerPane_times: "keer",
		taskSchedulerPane_days: "dag(en)",
		taskSchedulerPane_hours: "uur binnen de dag",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Eindigt (in dagen)",
		taskSchedulerPane_never: "Nooit",
		taskSchedulerPane_categorization: "Categorisering",
		taskSchedulerPane_scheduleTask: "Taak plannen",
		taskInformationPane_details: "Details",
		taskInformationPane_errors: "Fouten",
		taskInformationPane_taskInstances: "Taakinstances",
		taskInformationPane_audits: "Audits",
		taskInformationPane_results: "Resultaten",
		asyncTasks: "Asynchrone taken",

		//entry template pane
		search_all_entry_templates: "Alle invoersjablonen doorzoeken.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Volledige site bekijken",
		mobilesite: "Mobiele site bekijken",
		profile: "Profiel beheren",
		office_template: "Office-sjabloon:",
		select_office_template: "Selecteer een Office-sjabloon",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "De geselecteerde documenten kunnen niet met behulp van de actie voor samenvoegen en splitsen in de viewer worden geopend.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "De viewer die is geconfigureerd voor PDF- en TIFF-documenten biedt geen ondersteuning voor het samenvoegen en splitsen.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Vraag de beheerder een viewer te configureren voor PDF- en TIFF-documenten die ondersteuning biedt voor het samenvoegen en splitsen, zoals de Daeja ViewONE Virtual viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "De geselecteerde PDF-documenten kunnen niet met behulp van de actie voor samenvoegen en splitsen in de viewer worden geopend.",
		document_builder_pdf_unsupported_viewer_error_explanation: "De viewer die is geconfigureerd voor PDF-documenten biedt geen ondersteuning voor het samenvoegen en splitsen.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Vraag de beheerder een viewer te configureren voor PDF-documenten die ondersteuning biedt voor het samenvoegen en splitsen, zoals de Daeja ViewONE Virtual viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "De geselecteerde TIFF-documenten kunnen niet met behulp van de actie voor samenvoegen en splitsen in de viewer worden geopend.",
		document_builder_tiff_unsupported_viewer_error_explanation: "De viewer die is geconfigureerd voor TIFF-documenten biedt geen ondersteuning voor het samenvoegen en splitsen.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Vraag de beheerder een viewer te configureren voor TIFF-documenten die ondersteuning biedt voor het samenvoegen en splitsen, zoals de Daeja ViewONE Virtual viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "De geselecteerde documenten kunnen niet met behulp van de actie voor samenvoegen en splitsen in de viewer worden geopend.",
		document_builder_unsupported_documents_error_explanation: "De actie Samenvoegen en splitsen werkt alleen met PDF-en TIFF-documenten.",
		document_builder_unsupported_documents_error_userResponse: "Selecteer ondersteunde documenten en probeer het opnieuw.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Een aantal van de geselecteerde documenten kan niet met behulp van de actie voor samenvoegen en splitsen in de viewer worden geopend.",
		document_builder_some_unsupported_documents_error_explanation: "De actie Samenvoegen en splitsen werkt alleen met PDF-en TIFF-documenten die vanuit dezelfde repository geopend worden.",
		document_builder_some_unsupported_documents_error_userResponse: "De ondersteunde documenten worden geopend in de viewer.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Een fout is opgetreden tijdens het inchecken van de gewijzigde content.",
		document_builder_checkin_failed_explanation: "De viewer heeft een foutrespons ontvangen bij het inchecken van de gewijzigde content.",
		document_builder_checkin_failed_userResponse: "Vraag de systeembeheerder om de logboekbestanden van de webtoepassingenserver te controleren.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Het document kan niet worden geopend.",
		no_viewer_to_view_error_explanation: "De systeembeheerder heeft de weergave van dit document geblokkeerd. Als u het document wilt openen, moet u het downloaden.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "De content kan niet worden samengesteld. ",
		document_build_failed_userResponse: "Vraag de systeembeheerder om de logboekbestanden van de viewer te controleren.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Het document kan niet worden geopend in de modus Samenvoegen en splitsen. ",
		document_builder_open_failed_userResponse: "Vraag de systeembeheerder om de logboekbestanden van de viewer te controleren.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Het systeem kan niet overschakelen naar de modus Samenvoegen en splitsen.",
		document_builder_switch_failed_userResponse: "Vraag de systeembeheerder om de logboekbestanden van de viewer te controleren.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documenten",
		print_service_page_setup_tab_title: "Pagina-indeling",
		print_service_OD_print_tab_title: "Printeropties",
		print_service_status_merging: "Bezig met samenvoegen van documenten...",
		print_service_status_converting: "Bezig met converteren van documenten...",
		print_service_status_formatting: "Bezig met indeling van document voor afdrukken...",
		admin_print_service_maximum_number_to_print: "Maximumaantal documenten dat kan worden afgedrukt:",
		admin_print_service_maximum_size_to_print: "Maximumaantal documenten dat kan worden afgedrukt (in MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Geef de maximumhoeveelheid documenten aan die per keer door gebruikers kunnen worden afgedrukt. De standaard maximumwaarde is 50. Als u geen beperking wilt opleggen aan het aantal documenten dat afgedrukt kan worden, stelt u deze limiet in op 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Beperking:</b> Deze instelling wordt niet ondersteund bij IBM Content Manager OnDemand.<br/><br/>Geef de maximale hoeveelheid gegevens op die kan worden afgedrukt met behulp van de afdrukservice van IBM Daeja ViewONE. <br /><br />De totale grootte van elk geselecteerd  document kan niet meer dan deze grootte zijn.<br/><br/>De standaardlimiet is 200 MB. Als u de limiet boven 200 MB instelt, kan dit nadelig uitpakken voor de systeemprestaties. Als u geen beperking wilt opleggen aan de grootte van documenten die afgedrukt kan worden, stelt u deze limiet in op 0",
		// error printing
		print_service_error_printing: "Er is een fout opgetreden bij het afdrukken.",
		print_service_error_printing_userResponse: "Vraag de systeembeheerder om de logbestanden van de afdrukservice te controleren.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "De geselecteerde documenten zijn te groot om af te drukken",
		print_service_max_content_error_explanation: "De grootte van de geselecteerde documenten overschrijdt de limiet van ${0} MB aan gegevens. ",
		print_service_max_content_error_userResponse: "Selecteer minder of kleinere documenten en druk ze nogmaals af. U kunt uw systeembeheerder ook vragen om een hogere waarde in te stellen voor het maximum totale grootte van items die u per keer vanaf deze desktop kunt afdrukken.",
		print_service_max_content_error_0: "maximum_grootte_van_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "De items kunnen niet worden afgedrukt.",
		print_service_max_number_selected_error_explanation: "U kunt maximaal ${0} items tegelijk afdrukken. U probeert echter ${1} items af te drukken.",
		print_service_max_number_selected_error_userResponse: "Selecteer minder items en probeer nogmaals om ze af te drukken. U kunt uw systeembeheerder ook vragen om een hogere waarde in te stellen voor het maximumaantal items dat per keer op deze desktop kan worden afgedrukt.",
		print_service_max_number_selected_error_0: "maximum_aantal_items",
		print_service_max_number_selected_error_1: "aantal_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


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
		help: "Hjelp",
		user_session: "Brukersesjon",
		user_session_for: "Brukersesjon for ${0}",
		user_session_for_with_container: "Brukersesjon for ${0} (${1})",
		tools: "Verktøy",
		login: "Logg på",
		logout: "Logg av",
		search: "Søk",
		saved_searches: "Lagrede søk",
		content_analytics: "Analyser innhold",
		reset: "Tilbakestill",
		reset_hover: "Alle ulagrede data på alle flipper blir tilbakestilt til tidligere lagrede verdier.",
		reset_default: "Fjern alle",
		reset_default_hover: "Tømmer feltet Gjeldende etikett på alle flipper.",
		locale: "Språkmiljø:",
		up: "Opp",
		down: "Ned",
		restore: "Gjenopprett",
		maximize: "Maksimer",
		values_label: "Verdier",
		value_label: "Verdi:",
		path_label: "Bane:",
		new_label: "Ny(tt):",
		back_label: "Tilbake",
		clear: "Tøm",
		set: "Definer...",
		browse: "Bla gjennom",
		work: "Arbeid",
		connect: "Koble til",
		documents: "Dokumenter:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM og IBM-logoen er varemerker for IBM Corporation, registrert i mange jurisdiksjoner over hele verden. Java og alle Java-baserte varemerker og logoer er varemerker eller registrerte varemerker for Oracle og/eller deres tilknyttede selskaper. Oracle Outside In Technology som er inkludert i dette produktet, er underlagt en lisens for begrenset bruk og kan bare brukes sammen med denne applikasjonen. Dette Programmet er lisensiert under betingelsene i lisensavtalen som følger med Programmet.  Denne lisensavtalen ligger enten i programkatalogen eller biblioteket \"License\" eller \"Non_IBM_License\", hvis aktuelt, eller den blir levert i trykt form. Les denne avtalen nøye før du bruker Programmet. Ved å bruke Programmet aksepterer du disse betingelsene. ",
		edit: "Rediger",
		cancel: "Avbryt",
		close: "Lukk",
		close_all: "Lukk alle flipper",
		close_others: "Lukk andre flipper",
		ok: "OK",
		yes: "Ja",
		no: "Nei",
		open: "Åpne",
		refresh: "Oppdater",
		refresh_cabinets: "Oppdater alle kabinetter",
		delete_text: "Slett",
		export_config: "Eksporter konfigurasjon",
		description: "Beskrivelse",
		true_label: "Sann",
		false_label: "Usann",
		error: "Feil",
		error_reference_hover: "Søk i www.ibm.com for å finne mer informasjon om denne feilen.",
		url_label: "URL",
		default_label: "Standard",
		ibm_label: "IBM",
		light_label: "Lys",
		dark_label: "Mørk",
		save: "Lagre",
		saveAs: "Lagre som...",
		save_and_close: "Lagre og lukk",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ingen",
		Name: "Navn",
		"${NAME}": "Navn",
		mime_type: "MIME-type",
		mime_type_contains_label: "MIME-type inneholder",
		mime_type_header: "MIME-type",
		mime_type_icon: "Ikon for MIME-type",
		casesearch: "Sak",
		item: "Element",
		no_mime_type: "Dette elementet inneholder ikke noe innhold.",
		items_selected: "${0} elementer valgt.",
		requestor: "Forespurt av",
		scheduledStartTime: "Planlagt starttidspunkt",
		isRecurring: "Gjentas",
		weeks: "Uker",
		days: "Dager",
		hours: "Timer",
		endTime: "Sluttklokkeslett",
		username: "Bruker-ID",
		password: "Passord",
		serverURL: "Server-URL",
		enable: "Aktiver",
		disable: "Deaktiver",
		finish: "Fullfør",
		previous: "Forrige",
		next: "Neste",
		schedule: "Tidsplan",
		removeFromThisList: "Fjern fra denne listen",
		status: "Status",
		scheduledEndTime: "Planlagt sluttidspunkt",
		type: "Type",
		mode: "Modus",
		startTime: "Starttidspunkt",
		createdBy: "Opprettet av",
		nextScheduledTime: "Neste planlagte tidspunkt",
		id: "ID",
		duration: "Varighet",
		repeatCycle: "Hyppighet",
		taskTypeName: "Oppgavetype",
		to: "til",
		filter: "Filter:",
		error_message: "Feilmelding",

        file_type: "Dokumenttype",
        word_template_name: "Navn på Word-mal",
        excel_template_name: "Navn på Excel-mal",
        powerpoint_template_name: "Navn på PowerPoint-mal",
        template_description: "Malbeskrivelse",
        action_add_template: "Legg til",
        action_change_template: "Rediger",      
        action_edit_template_properties: "Egenskaper",
        add_presentation_template: "Legg til presentasjonsmal",
    	add_spreadsheet_template: "Legg til regnearkmal",
    	add_doc_template: "Legg til dokumentmal",    	
    	file_type_doc_hover: "Du må oppgi en gyldig dokumentmalfil for tekstbehandling.<br><br>Gyldige MIME-typer: ${0}",
    	file_type_doc_error: "Du må oppgi en gyldig dokumentmalfil for tekstbehandling.<br><br>Valgt MIME-type for dokument: ${0}<br><br>Gyldige MIME-typer: ${1}",
    	file_type_presentation_hover: "Du må oppgi en gyldig presentasjonsmalfil.<br><br>Gyldige MIME-typer: ${0}",
    	file_type_presentation_error: "Du må oppgi en gyldig presentasjonsmalfil.<br><br>Valgt MIME-type for dokument: ${0}<br><br>Gyldige MIME-typer: ${1}",
    	file_type_spreadsheet_hover: "Du må oppgi en gyldig regnearkmalfil.<br><br>Gyldige MIME-typer: ${0}",
    	file_type_spreadsheet_error: "Du må oppgi en gyldig regnearkmalfil.<br><br>Valgt MIME-type for dokument: ${0}<br><br>Gyldige MIME-typer: ${1}",
    	office_online_only_one_template_error: "Du kan bare velge én fil.",
    	change_presentation_template: "Rediger presentasjonsmal",
    	change_spreadsheet_template: "Rediger regnearkmal",
    	change_doc_template: "Rediger dokumentmal",
    	change_button: "Rediger",
	    new_document_dialog_doc_title: "Nytt dokument",
	    new_document_dialog_presentation_title: "Ny presentasjon",
	    new_document_dialog_spreadsheet_title: "Nytt regneark",
	    new_document_dialog_title_label: "Tittel:",
	    new_document_dialog_title_hover: "Oppgi en tittel for dette dokumentet.",
	    new_document_dialog_title_missing_message: "Du må oppgi en tittel.",
	    office_online_save_before_adding_templates_title: "Lagre endringene i datalageret",
	    office_online_save_before_adding_templates_error: "Du kan ikke legge til Office-maler før du lagrer endringene du har gjort i datalageret. Klikk på <b>Lagre og lukk</b> og åpne deretter datalageret på nytt for å legge til Office-malene.",
	    copy_to_OOS_dialog_doc_title: "Nytt dokument",
	    office_online_checkin_cancelcheckout_message: "Dette dokumentet blir redigert i Microsoft Office Online. Du kan ikke sjekke inn dokumentet eller avbryte utsjekkingen mens det er åpent i Microsoft Office Online.",
	    new_document_classification: "Klassifisering:",
	    new_document_classification_help: "Tilbakestiller klassen, egenskapene og den overordnede mappen, hvis den finnes, for kildedokumentet. Når du legger til et dokument ved hjelp av en oppføringsmal, blir oppføringsmalen for kildedokumentet automatisk valgt hvis den finnes. Egenskapene for kildedokumentet blir brukt som standardverdier, men mappen og klassen som er oppgitt i oppføringsmalen, blir bevart.",
		new_document_classification_use_source_document: "Bruk kildedokument:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Ikon for ${0}-type",
		repository_name_and_type: "Navn og type for ${0}",
		select_class_label: "Velg ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Detaljvisning",
		detail_view_button: "Detaljer",
		magazine_view_button_tooltip: "Magasinvisning",
		magazine_view_button: "Magasin",
		filmstrip_view_button_tooltip: "Filmstripevisning",
		filmstrip_view_button: "Filmstripe",

		magazine_view_show: "Vis i magasinvisning",
		detail_view_show: "Vis i detaljvisning",

		total_count_item: "element",
		total_count_items: "elementer",
		total_count_more_items: "Mer enn ${0} elementer",

		extension_changed: "Filtypen for filen du valgte, stemmer ikke overens med filtypen for den opprinnelige filen.  Velg en annen fil.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Det valgte visningsprogrammet støtter ikke alle filtyper. Hvis du lagrer denne visningsprogramtilordningen, kan du få problemer når du viser dokumenter. Det anbefales at du velger et visningsprogram som støtter alle filtyper når alternativet Alle filtyper er valgt.<br><br><b>Tips:</b> Følgende visningsprogrammer støtter alle filtyper:<ul><li>Visningsapplett</li><li>AJAX-visningsprogram</li><li>HTML-konvertering</li><li>PDF-konvertering</li><li>Nettleser</li></ul>",
		file_type_any: "Alle filtyper",
		file_type_any_hover: "Velg dette alternativet hvis du vil at det valgte visningsprogrammet skal vise alle dokumenter uansett filtype. Dette alternativet støttes for følgende visningsprogrammer:<br><br><ul><li>Visningsapplett</li><li>AJAX-visningsprogram</li><li>HTML-konvertering</li><li>PDF-konvertering</li><li>Nettleser</li></ul><br><br><b>Husk:</b> Hvis du vil bruke bestemte visningsprogrammer størstedelen av tiden, bør alle tilordninger du oppretter som bruker dette alternativet, flyttes til slutten av listen over visningsprogramtilordninger. ",
		file_type_input: "Ny filtype:",

		mime_type_input: "Ny MIME-type:",
		mime_type_input_invalid: "Den nye MIME-typen kan ikke inneholde noen av følgende tegn: ,",
		mime_type_available: "Tilgjengelige MIME-typer",
		mime_type_selected: "Valgte MIME-typer",
		file_type_input: "Ny filtype:",
		file_type_input_invalid: "Den nye filtypen kan ikke inneholde noen av følgende tegn: ,",
		file_type_available: "Tilgjengelige filtyper",
		file_type_selected: "Valgte filtyper",
		file_type_header: "Filtype",
		viewer: "Visningsprogram:",
		viewer_viewer: "Visningsprogram",
		viewer_view: "Vis",
		viewer_preview: "Forhåndsvisning",
		viewer_merge_and_split: "Slå sammen og del",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Bare forhåndsvisning",
		preview_only_label: "(forhåndsvisning)",
		preview_only_hover: "Denne visningsprogramtilordningen vil bare bli brukt når en bruker klikker på <b>Forhåndsvis</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Dette datalageret støtter ikke blaing. Velg et annet datalager.",

		repository_community_teamspace_message: "Det annet datalager er allerede definert som datalager for fellesskapsbiblioteker. Hvis du vil fortsette å bruke det eksisterende datalageret som datalager for fellesskapsbiblioteker, velger du <b>Nei</b> før du lagrer endringene for å forhindre at det eksisterende datalageret blir erstattet med dette datalageret.",

		favorites_empty: "Du har ingen favoritter ennå.",
		syncItems_empty: "Du har ingen synkroniserte filer ennå.",

		root_folder_id: "Rotmappe-ID",
		unified_searches: "Flerdatalagersøk:",
		max_results: "Antall resultater:",
		direct_retrieve_enabled: "Direkte henting:",
		itemTypesToDisplay: "Elementtyper som skal vises:",
		allItemTypes: "Alle elementtyper",
		include_attr_group_name: "Attributtgruppebeskrivelser i attributtvisningsnavn:",
		admin_repcfg_include_attr_group_name_hover: "Som standard er attributtgruppebeskrivelsen inkludert i navnene for attributtgruppeattributter. Dette hjelper brukerne med å se hvilken attributtgruppe et attributtgruppeattributt tilhører når de arbeider med attributter.<br>Brukerne ser kanskje for eksempel følgende navn for et attributtgruppeattributt: Document Settings.Document Type.<br><br>Hvis du deaktiverer dette alternativet, brukes bare attributtbeskrivelsen for navnet på attributtgruppeattributtet.<br>Brukerne vil for eksempel se dette navnet: Document Type.<br><br>Uten attributtgruppebeskrivelsen vil ikke brukerne kunne vite om Document Type er det enkle attributtet eller et attributtgruppeattributt.",
		documentItemTypesOnly: "Bare dokumentmodellelementtyper",
		object_store: "Symbolsk navn for objektlager:",
		object_store_display_name: "Visningsnavn for objektlager:",
		teamspaceUpgradeMsg: "Grupperommene dine vil bli oppdatert når du lagrer datalagerkonfigurasjonen. Hvis du har mange grupperom, kan oppdateringen ta flere minutter.",
		synchUpgradeMsg: "Synkroniseringsmodulen på dette datalageret vil bli oppdatert når du lagrer datalagerkonfigurasjonen.",
		protocol: "Protokoll:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "Datalager-ID for CMIS:",
		cmis_url: "Dokument-URL for CMIS AtomPub-tjenesten:",
		trace_level: "Sporingsnivå",
		trace_dir: "Sporingskatalog",
		temp_dir: "Midlertidig katalog",
		show_document_location: "Vis dokumentplassering",
		max_folders: "Maksimalt antall mapper",
		afp_conversion: "AFP-konvertering",
		line_conversion: "Linjedatakonvertering",
		max_hits: "Maksimalt antall treff",
		folder_search_expresssion: "Søkeuttrykk for mappe",
		max_item_types: "Maksimalt antall elementtyper",
		max_worklists: "Maksimalt antall arbeidslister",
		update_storage_collection: "Oppdater lagersamling",
		include_mime_types_in_search_results: "Inkluder MIME-typer i søkeresultater",
		object_type: "Objekttype",
		object_type_document: "Dokumenter",
		object_type_folder: "Mapper",
		file_label: "Fil:",
		plugin_jarfile_path_label: "JAR-filbane:",
		plugin_classfolder_path_label: "Klassefilbane:",
		plugin_classname_label: "Klassenavn:",
		plugin_id_label: "Plugin-ID:",
		class_label: "Klasse",
		configuration: "Konfigurasjon",
		connect_repository: "Koble til...",
		server_type: "Servertype",
		timeout_in_seconds: "Tidsavbrudd (i sekunder):",
		default_search_template: "Standardsøk",
		search_filtered_properties: "Søkbare egenskaper",
		property_contains_label: "Egenskap inneholder",
		class_contains_label: "Klasse inneholder",
		search_filtered_operators: "Søkeoperatorer",
		default_search_results: "Søkeresultater",
		data_type: "Data type",
		status_bar: "Statuslinje",
		operators_for: "Operatorer for:",
		currentUser: "Gjeldende bruker",
		nameContains: "Navn inneholder",
		searchFor: "Søk etter",
		server_autentication: "Serverautentisering (OAuth 2.0 med JWT)",
		standard_authentication: "Standard autentisering (3-delt OAuth2.0)",
		developer_authentication: "Utviklerautentisering",
		enterprise_id: "Virksomhets-ID:",
		public_key_id: "Offentlig nøkkel-ID:",
		private_key_path: "Bane til privat nøkkelfil:",
		server_user_email: "E-post for bruker på server",

		filter_builder_tooltip: "Definer filter",

		// Launch bar
		launchbar_home: "Åpne Hjem",
		launchbar_favorites: "Åpne Favoritter",
		launchbar_browse: "Åpne Bla gjennom-visningen",
		launchbar_browse_popup: "Åpne Bla gjennom-hurtiglisten",
		launchbar_search: "Åpne Søk-visningen",
		launchbar_search_popup: "Åpne Søk-hurtiglisten",
		launchbar_teamspaces: "Åpne Grupperom-visningen",
		launchbar_teamspaces_popup: "Åpne Grupperom-hurtiglisten",
		launchbar_work: "Åpne Arbeid-visningen",
		launchbar_work_popup: "Åpne Arbeid-hurtiglisten",
		launchbar_entry_templates: "Åpne Oppføringsmal-visning",
		launchbar_entry_templates_popup: "Åpne Oppføringsmal-hurtiglisten",
		launchbar_admin: "Åpne Administrasjon-visningen",

		admin_sync_server: "Sync Services",
		admin_settings: "Innstillinger",
		admin_interface_text: "Etiketter",
		admin_interface_text_desktop: "Skrivebord:",
		admin_desktops: "Skrivebord",
		admin_repositories: "Datalagre",
		admin_mobile: "Mobil",
		admin_menus: "Menyer",
		admin_reason_codes: "Retusjeringsårsaker",
		admin_plugins: "Plugin-moduler",
		admin_plugins_state_enabled: "Plugin-modul er aktivert",
		admin_plugins_state_disabled: "Plugin-modul er deaktivert",
		admin_plugins_version: "Versjon:",
		admin_plugins_version_heading: "Versjon",
		admin_plugins_icon: "Ikon for plugin-modul",
		admin_viewer_mapping_icon: "Ikon for visningsprogramtilordning",
		admin_viewer_defs: "Visningsprogramtilordninger",
		admin_viewer_dialog_title: "Tilordning",
		admin_viewer_dialog_new_title: "Ny tilordning",
		admin_viewer_dialog_instructions: "En tilordning oppgir hvilket visningsprogram som skal brukes for filer i et datalager. Du kan opprette flere tilordninger for å oppgi forskjellige visningsprogrammer for forskjellige typer av filer. Du kan bruke enten en MIME-type eller en filtype til å definere en tilordning. Tilordninger med filtyper vil bli tilordnet til dokumentnavn. For eksempel vil en tilordning der filtypen er satt til gif, bli tilordnet til dokumentnavn som slutter med filtypen .gif",
		admin_desktop_viewer_defs: "Visningsprogramtilordning:",
		admin_desktop_viewer_defs_hover: "Visningsprogramtilordninger oppgir hvilket visningsprogram som skal brukes til forskjellige typer av dokumenter i datalageret.<br><br>Du kan opprette nye visningsprogramtilordninger i seksjonen <b>Visningsprogramtilordninger</b> i administrasjonsverktøyet.",
		admin_desktops_used: "Brukt i skrivebord",
		admin_desktop_additional_settings: "Ekstra innstillinger:",
		admin_default_desktop: "Definer som standard skrivebord",
		admin_default_desktop_header: "Standard skrivebord",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Skrivebordsikon",

		// Themes
		admin_themes: "Temaer",
		admin_theme_list_instructions: "Du kan opprette et tema for å gjøre det enklere å tilpasse webklienten for organisasjonen din. Du kan opprette flere temaer hvis du har behov for å bruke ulike farger, fonter eller logoer for ulike skrivebord i miljøet.<br><br>Når du har opprettet et tema, kan du ta det i bruk på en et skrivebord ved å konfigurere temaet på flippen <b>Utseende</b> for skrivebordet.",
		admin_theme_instructions: "Opprett et tema for å definere hvilke farger og fonter som blir brukt i webklienten. I tillegg kan du bruke temaet til å endre logoen, applikasjonsnavnet og opphavsretteksten som blir vist på påloggingssiden og banneret.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nytt tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Vil du slette de valgte temaene?\n${0} temaer er valgt.",
		admin_theme_color: "Farge",
		admin_theme_text: "Tekst",
		admin_theme_solid: "Heltrukket",
		admin_theme_gradient: "Gradering",
		admin_theme_box: "Box",
		admin_theme_color_label: "Farge ${0}:",
		admin_theme_name_invalid: "Temanavnet kan ikke inneholde følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Tema-IDen må være unik, og du kan ikke endre IDen etter at du har lagret temaet.<br><br>IDen kan bare inneholde alfanumeriske tegn.",
		admin_theme_name_hover: "Navnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatisk",
		admin_theme_logo_url_hover: "Oppgi URLen for logofilen. Hvis logoen finnes på samme webapplikasjonsserver som webklienten, oppgir du en relativ URL, for eksempel /mycustomizations/banner_logo.png<br><br>Det anbefales at logoen har en gjennomsiktig bakgrunn.",
		admin_theme_color_palette_title_heading: "Fargepalett",
		admin_theme_color_palette_help_text: "Opprett fargepaletten for temaet ditt ved hjelp av en heksadesimal verdi eller fargevelgeren. Du kan legge til så mange farger du vil.",
		admin_theme_color_add_button_label: "Legg til farge",
		admin_theme_color_remove_button_label: "Fjern farge",
		admin_theme_global_title_heading: "Elementer for hele applikasjonen",
		admin_theme_global_font: "Fontfamilie:",
		admin_theme_global_font_hover: "Velg fonten du vil bruke i webklienten. Fontene står i prioritert rekkefølge på listen. Neste skrift på listen blir bare brukt hvis den forrige fonten ikke er installert på klientmaskinen.",
		admin_theme_global_framework_color_label: "Rammeverkfarge:",
		admin_theme_global_framework_color_hover: "Velg fargen som skal brukes for følgende elementer:<ul><li>Tittellinjer i dialogbokser</li><li>Uthevingsfargen øverst på den valgte flippen</li><li>Visningsikoner for innholdslisten (detaljvisning, magasinvisning, filmstripevisning)</li></ul><br>Denne fargen brukes ikke for skillelinjene mellom seksjoner i webklienten. Hvis du vil endre fargen for skillelinjene, må du opprette en plugin-modul for å bruke en tilpasset CSS-fil.",
		admin_theme_color_global_toolbar: "Global verktøylinjefarge:",
		admin_theme_color_global_toolbar_hover: "Hvis du inkluderer den globale verktøylinjen i webklienten, må du velge fargen på verktøylinjen.<br><br><b>Tips:</b> Verktøylinjen vises i banneret øverst i webklienten, så fargen på verktøylinjen bør passe til fargen på banneret.",
		admin_theme_global_selected_color: "Farge for valgt element:",
		admin_theme_global_selected_color_hover: "Velg fargen som skal brukes når elementer er valgt i blatreet, søketreet og innholdslisten.<br><br>Svevefargen (fargen som brukes når brukeren holde musepekeren over et element) avledes av denne fargen.",
		admin_theme_global_link_color: "Linkfarge:",
		admin_theme_global_link_color_hover: "Velg fargen som skal brukes for alle klikkbare URLer i webklienten. Denne fargen blir for eksempel brukt i Les mer-linker som blir vist i hele webklienten.",
		admin_theme_login_title_heading: "Elementer på påloggingsside",
		admin_theme_page_background_label: "Bakgrunnsfarge på påloggingsside:",
		admin_theme_login_page_background_hover: "Velg fargen som skal vises bak påloggingsruten.",
		admin_theme_login_pane_background_label: "Bakgrunnsfarge på påloggingsrute:",
		admin_theme_login_pane_background_hover: "Velg en farge som skal vises for påloggingsruten. Denne fargen bør passe til påloggingssidens bakgrunnsfarge.",
		admin_theme_text_color: "Tekstfarge:",
		admin_theme_login_pane_text_color_hover: "Velg en farge som skal brukes for teksten i påloggingsruten. Denne fargen blir brukt for velkomstteksten og feltetikettene. Denne fargen må være leselig mot påloggingsrutens bakgrunnsfarge.",
		admin_theme_copyright_text: "Opphavsrettekst:",
		admin_theme_copyright_text_hover: "Oppgi om du vil vise opphavsrettekst på påloggingssiden.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Ingen opphavsrettekst",
		admin_theme_banner_title_heading: "Bannerelementer",
		admin_theme_text_icons_color: "Tekst- og ikonfarge:",
		admin_theme_icon_color_label: "Ikonfarge:",
		admin_theme_shadow_label: "Skygge:",
		admin_theme_banner_text_icons_hover: "Velg en farge du vil bruke for teksten og ikonene i banneret. Denne fargen må være leselig mot bannerets bakgrunnsfarge.",
		admin_theme_banner_product_name_label: "Produktnavn:",
		admin_theme_banner_product_name_hover: "Når du oppretter et skrivebord, kan du oppgi et egendefinert navn som skal vises for applikasjonen. Hvis du ikke oppgir et egendefinert navn, brukes IBM Content Navigator som produktnavn. Oppgi om du vil bruke applikasjonsnavnet som er definert på skrivebordet, eller et bilde i stedet for et navn.",
		admin_theme_banner_product_name_desktop_defined_label: "Bruk navn fra skrivebord",
		admin_theme_banner_product_name_image: "Bruk tilpasset logo (URL)",
		admin_theme_background_color_label: "Bakgrunnsfarge:",
		admin_theme_style_label: "Stil:",
		admin_theme_banner_color_hover: "Velg en farge som skal brukes for banneret øverst i applikasjonen.<br><br><b>Tips:</b>Pass på at tekstfargen på banneret er leselig mot bannerets bakgrunnsfarge.",
		admin_theme_buttons_title_heading: "Knapper",
		admin_theme_navigation_title_heading: "Navigeringselementer",
		admin_theme_navigation_icon_selected_label: "Farge for valgt ikon:",
		admin_theme_navigation_background_hover: "Velg en farge som skal brukes for bakgrunnen på funksjonens navigeringslinje.",
		admin_theme_navigation_icon_color_hover: "Velg en farge som skal brukes for ikonene på funksjonens navigeringslinje. Når du bruker standardlayout på et skrivebord, bør denne fargen stå i kontrast til bakgrunnen for funksjonens rullegardinmeny. Når du bruker klassisk layout på et skrivebord, bør denne fargen stå i kontrast til bakgrunnen for funksjonens navigeringslinje.",
		admin_theme_navigation_icon_selected_hover: "Velg en farge som skal brukes for den valgte funksjonen på funksjonens navigeringslinje. Denne fargen bør passe til fargen på ikonene og bakgrunnen på funksjonens navigeringslinje.<br><br>Når du bruker klassisk layout på et skrivebord, brukes denne fargen som svevefarge på funksjonens navigeringslinje.",
		admin_theme_button_background_color_hover: "Velg en farge som skal brukes på bakgrunnen for knapper.",
		admin_theme_button_style_hover: "Velg en knappestil.",
		admin_theme_button_text_icon_color_hover: "Velg en farge som skal brukes for tekst og bilder på knapper.",
		admin_theme_no_logo_label: "Ingen logo",
		admin_theme_custom_logo_label: "Tilpasset logo (URL)",
		admin_theme_banner_type: "Fyllstil for banner:",
		admin_theme_banner_type_hover: "Oppgi om banneren skal være en ren farge eller en graderingsfarge. Hvis du oppgir et graderingsbanner, blir fargen du oppgir for bannerfargen, den mørkeste fargen i banneret.<br><br><b>Tips:</b>Pass på at tekstfargen på banneret er leselig mot bannerets bakgrunnsfarge.",
		admin_theme_icon: "Temaikon",
		admin_theme_buttons_and_links_title_heading: "Knapper, felt og linker",
		admin_theme_button_style_label: "Knappestil:",
		admin_theme_theme_style_label: "Temastil:",
		admin_theme_theme_style_hover: "Velg stilen som temaet skal baseres på. Du kan endre stilen når som helst når du oppretter eller redigerer et tema. Når du bytter fra en stil til en annen, blir temainnstillingene tilbakestilt til standardverdiene.",
		admin_theme_accent_color_label: "Aksentfarge:",
		admin_theme_accent_color_hover: "Velg fargen som skal brukes for linjen øverst i en dialogboks og for innlastingsspinneren.",
		admin_theme_global_toolbar_text_color_label: "Tekstfarge for global verktøylinje:",
		admin_theme_global_toolbar_text_color_hover: "Hvis du inkluderer den globale verktøylinjen i webklienten, må du velge fargen som skal brukes for teksten på verktøylinjen.",
		admin_theme_banner_text_color_hover: "Velg fargen du vil bruke for teksten på banneret.",
		admin_theme_banner_icon_color_hover: "Velg fargen du vil bruke for ikonene på banneret.",
		admin_theme_button_color_label: "Farge:",
		admin_theme_button_color_hover: "Velg fargen som skal brukes for følgende elementer:<ul><li>Tittellinjer i dialogbokser</li><li>Uthevingsfargen øverst på den valgte flippen</li><li>Visningsikoner for innholdslisten (detaljvisning, magasinvisning, filmstripevisning)</li><li>Knapper, felt og linker</li></ul>Fargen som brukes når en bruker holder musepekeren over en knapp, avledes av denne fargen. Denne fargen brukes ikke for skillelinjene mellom seksjoner i webklienten. Hvis du vil endre fargen for skillelinjene, må du opprette en plugin-modul for å bruke en tilpasset CSS-fil.",
		admin_theme_theme_style_col_header: "Temastil",

		admin_syncserver_consistency_checker: "Konsistenskontroll:",
		admin_syncserver_consistency_checker_hover: "Kjør konsistenskontrollen for å sikre at Sync Services-databasene har oppdatert informasjon om statusen for hvert enkelt element som ligger på serveren. Du kan for eksempel kjøre konsistenskontrollen etter at Sync Services-databasen har vært nede, for å hente informasjon om dokumenter som er oppdatert på datalageret i løpet av nedetiden.",
		admin_syncserver_consistency_checker_button: "Kjør konsistenskontroll",
		admin_syncserver_consistency_checker_started: "Startet:",
		admin_syncserver_consistency_checker_ended: "Avsluttet:",
		admin_syncserver_consistency_checker_duration: "Varighet:",
		admin_syncserver_consistency_checker_items_processed: "Synkroniseringselementer behandlet:",
		admin_syncserver_consistency_checker_items_processed_success: "Synkroniseringselementer behandlet uten feil:",
		admin_syncserver_consistency_checker_items_discovered: "Nye datalagerelementer oppdaget:",
		admin_syncserver_consistency_checker_change_updates: "Totale oppdateringer:",
		admin_syncserver_consistency_checker_state: "Status:",
		admin_syncserver_consistency_checker_state_done: "Ferdig",
		admin_syncserver_consistency_checker_state_running: "Kjører",
		admin_syncserver_consistency_checker_user: "Sendt av:",
		admin_syncserver_consistency_checker_scheduled: "Planlagt:",

		admin_syncserver_dbcleanup: "Databaseopprydding",
		admin_syncserver_dbcleanup_hover: "Kjøre databaseoppryddingsverktøyet for å fjerne eventuelle ubrukte enheter og elementer som er ikke lenger synkroniseres fra databasen.",
		admin_syncserver_dbcleanup_button: "Databaseopprydding",
		admin_syncserver_dbcleanup_state_done: "Ferdig",
		admin_syncserver_dbcleanup_state_running: "Kjører",
		admin_syncserver_dbcleanup_started: "Startet:",
		admin_syncserver_dbcleanup_ended: "Avsluttet:",
		admin_syncserver_dbcleanup_state: "Status:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Datalagre slettet:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Synkronisert element slettet:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Slettede enheter:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Utløpte enheter:",

		admin_syncserver_publicSyncUrl: "Felles Sync Services-URL:",
		admin_syncserver_publicSyncUrl_hover: "Oppgi URLen som datalagre kan bruke til å kommunisere med IBM Content Navigator Sync Services. Standardformatet for URLen er http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Innstillinger for synkroniseringsklient:",
		admin_syncserver_managed_hover: "Brukere kan ikke endre disse innstillingene i IBM Content Navigator Sync-klienten.",
		admin_syncserver_managed_subfolder: "Mappenivåer som skal synkroniseres",
		admin_syncserver_managed_subfolder_hover: "Hvis en bruker synkroniserer en mappe, må det oppgis hvor mange mapper som skal synkroniseres. Hvis en bruker for eksempel oppgir 3 mappenivåer, synkroniseres mappen som brukeren synkroniserer, pluss to nivåer med undermapper.<br><br>Sørg for at miljøet ditt er skalert for å støtte det omfanget av synkroniseringstrafikk som blir skapt av denne innstillingen.",
		admin_syncserver_managed_subfolder_all: "Alle undermapper",
		admin_syncserver_managed_subfolder_none: "Ingen undermapper",
		admin_syncserver_managed_subfolder_no_more: "Begrensede nivåer",
		admin_syncserver_managed_subfolder_levels: "mapper",
		admin_syncserver_managed_schedule: "Synkroniseringsplan",
		admin_syncserver_managed_schedule_hover: "Sørg for at miljøet ditt er skalert for å støtte det omfanget av synkroniseringstrafikk som blir skapt av synkroniseringsplanen.<br><br>Det maksimale intervallet er 24 timer eller 1440 minutter.<br><br>Brukere kan overstyre synkroniseringsplanen ved å klikke på <b>Synkroniser nå</b> i klienten.",
		admin_syncserver_managed_schedule_manual: "Synkroniser manuelt",
		admin_syncserver_managed_schedule_continuous: "Synkroniser kontinuerlig",
		admin_syncserver_managed_schedule_every: "Synkroniser med oppgitte intervaller",
		admin_syncserver_managed_schedule_minutes: "Minutter",
		admin_syncserver_managed_schedule_hours: "Timer",

		// redaction codes
		admin_new_reason_code: "Ny retusjeringsårsak",		
		admin_reason_code_name_invalid: "Navnet på retusjeringsårsaken kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Beskrivelsen kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Beskrivelsen kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Navnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Beskrivelse:",
		admin_reason_code_applications_hover: "Listen med Datacap-applikasjoner som refererer til denne retusjeringsårsaken.",
		admin_reason_code_applications: "Datacap-applikasjoner",
		admin_delete_confirmation_reason_codes: "Vil du slette de valgte retusjeringsårsakene?",
		admin_delete_confirmation_reason_code: "Vil du slette den valgte retusjeringsårsaken?",
		admin_reason_code_heading: "Retusjeringsårsak: <b>${0}</b>",
		admin_reason_code_list_instructions: "Retusjeringsårsaker viser hvorfor sensitive data er beskyttet ved å skjule dem fra visning. Hver enkelt årsak angir hvilken type sensitive data som er skjult for vanlige brukere.",
		admin_reason_code_instructions: "Du kan opprette en retusjeringsårsak for hver type sensitive data. Du kan deretter bruke den årsaken i en retusjeringspolicy for å definere hvem som kan se disse dataene, og hvem som kan opprette eller endre retusjeringer.",
		admin_reason_code_applications_label: "Datacap-applikasjoner",
		admin_reason_code_repositories: "Datalagre",
		admin_reason_code_repositories_label: "Datalagre",
		admin_reason_code_repositories_hover: "Listen med ICN-datalagre som refererer til denne retusjeringsårsaken.",
		admin_reason_code_repositories_default_value: "Ikke definert",
		admin_reason_code_description_label: "Beskrivelse",
		admin_reason_code_applications_default_value: "Ikke definert",
		admin_redaction_reasons: "Retusjeringsårsaker",
		admin_redactions: "Rollebaserte retusjeringer",
		admin_redactions_policies_roles: "Policyer og roller",
		admin_reasons: "Årsaker",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "IDen kan ikke redigeres.  Den kan kopieres til utklippstavlen",
		// Role based administration
		admin_rba: "Rollebasert skrivebordsadministrasjon",
		admin_rba_mobile_access_enabled: "Dette skrivebordet er aktivert for mobiltilgang.",
		admin_rba_mobile_access_disabled: "Dette skrivebordet er ikke aktivert for mobiltilgang.",
		admin_rba_confirm_delete_multiple: "Vil du slette de valgte administrasjonsrollene?",
		admin_rba_confirm_delete_single: "Vil du slette den valgte administrasjonsrollen?",
		admin_rba_delete_multi_role_desktop: "En eller flere av rollene du valgte, er tildelt til et skrivebord. Du må fjerne rollene fra skrivebordene før du kan slette dem.",
		admin_rba_delete_single_role_desktop: "Rollen du valgte, er tildelt til skrivebordet ${0}. Du må fjerne rollen fra skrivebordet før du kan slette den.",
		admin_desktop: "Skrivebord",
		admin_rba_instructions: "Du kan opprette og administrere administrasjonsroller for skrivebordet, som tilknytter rettigheter som er gitt til skrivebordsadministratorer.",
		admin_rba_not_used: "${0} brukes ikke i noen skrivebord.",
		admin_rba_desktops: "<b>${0} brukes i følgende skrivebord:</b>",
		admin_rba_new_role: "Ny rolle",
		admin_rba_name_invalid: "Navnet på administrasjonsrollen kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Beskrivelsen kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Beskrivelsen kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Navnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Beskrivelse:</b> ${0}",
		admin_rba_membership: "Medlemskap",
		admin_rba_general_priv: "Generelt",
		admin_rba_appearance_priv: "Utseende",
		admin_rba_desktop_config_priv: "Skrivebordskonfigurasjon",
		admin_rba_app_name_priv: "Applikasjonsnavn",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Visningsprogramtilordning",
		admin_rba_merge_split_priv: "Slå sammen og del",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Menyer",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Verktøylinjer",
		admin_rba_ctx_menus_priv: "Hurtigmenyer",
		admin_rba_office_ribbon_priv: "Kommandoer for MS Office-båndlinje",
		admin_rba_office_menues_priv: "Hurtigmenyer for MS Office",
		admin_rba_addl_settings_priv: "Ekstra innstillinger",
		admin_rba_mobile_priv: "Mobil",
		admin_rba_add_doc_dlg_priv: "Dialogboksen Legg til dokument",
		admin_rba_doc_mgmt_priv: "Dokumentbehandling",
		admin_rba_def_redaction_priv: "Standard retusjeringsalternativ",
		admin_rba_add_photos_priv: "Legge til bilder fra kameraet og bildebiblioteket",
		admin_rba_time_stamp_priv: "Systemtid",
		admin_rba_add_docs_folders_priv: "Legge til dokumenter og opprette mapper på datalageret",
		admin_rba_open_docs_priv: "Åpne dokumenter i andre applikasjoner",
		admin_rba_office_config_priv: "Office-konfigurasjon",
		admin_rba_tab_label_priv: "Etikett for IBM ECM-flipp",
		admin_rba_feature_sel_priv: "Funksjonsvalg",
		admin_rba_general_config_priv: "Generell konfigurasjon",
		admin_rba_favorites_priv: "Favoritter",
		admin_rba_add_options_priv: "Legg til-alternativer i gruppen Rediger",
		admin_rba_browse_priv: "Bla gjennom",
		admin_rba_outlook_int_priv: "Outlook-integrering",
		admin_rba_search_priv: "Søk",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Sak",
		admin_rba_desktop_feat_priv: "Skrivebordsfunksjoner",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Viste funksjoner",
		admin_rba_branding_priv: "Branding",
		admin_rba_home_priv: "Hjem",
		admin_rba_main_color_priv: "Hovedfarge",
		admin_rba_sec_color_priv: "Sekundærfarge",
		admin_rba_teamspaces_priv: "Grupperom",
		admin_rba_rbr_priv: "Rollebasert retusjering",
		admin_rba_et_mgr_priv: "Oppføringsmalstyrer",
		admin_rba_policies_roles_priv: "Administrer policyer og roller",
		admin_rba_work_priv: "Arbeid",
		admin_rba_reasons_priv: "Årsakskoder",
		admin_rba_tasks_priv: "Asynkrone oppgaver",
		admin_rba_auth_priv: "Autentisering",
		admin_rba_all_privs: "Alle rettigheter",
		admin_rba_some_privs: "Noen rettigheter",
		admin_rba_no_privs: "Ingen rettigheter",
		admin_add_users_groups_priv: "Legg til brukere og grupper",
		admin_url_features_priv: "Administrer URL-funksjoner",
		admin_plugin_features_priv: "Administrer pluginfunksjoner",
		admin_addl_components_priv: "Tilleggskomponenter",
		admin_global_toolbar_priv: "Global verktøylinje",
		admin_status_bar_priv: "Statuslinje",
		admin_refresh_message: "Du må oppdatere nettleseren for å bruke de oppdaterte dataene.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Du må oppdatere nettleseren for å bruke det oppdaterte standardskrivebordet.",
		admin_desktop_refresh_message: "Du må oppdatere nettleseren for å bruke det oppdaterte skrivebordet.",
		admin_action_open: "Åpne",
		admin_action_edit: "Rediger",
		admin_action_copy: "Kopier",
		admin_action_delete: "Slett",
		admin_action_copy: "Kopier",
		admin_action_new: "Opprett nytt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Denne IDen er allerede i bruk. Du må oppgi en unik ID.",

		admin_searchable_properties_for: "Søkbare egenskaper for:",
		admin_repository_new: "Nytt datalager",
		admin_desktop_new: "Nytt skrivebord",
		admin_desktop_file_documents: "Krev at brukerne lagrer nye dokumenter og mapper i en mappe",
		admin_desktop_file_documents_hover: "Velg dette alternativet hvis du vil at brukerne skal velge en mappe når de legger til elementer i datalageret. Hvis du ikke velger dette alternativet, kan brukerne legge til dokumenter (IBM FileNet P8) eller dokumenter og mapper (IBM Content Manager) uten å lagre dem i en mappe.",
		admin_desktop_show_security_tab: "Vis sikkerhetsinnstillinger under tilføying og innsjekking",
		admin_desktop_show_security_hover: "<b>Bare for IBM FileNet P8-brukere.</b>  Velg dette alternativet hvis du vil tillate at brukerne redigerer sikkerheten for dokumenter og mapper ved tilføying og innsjekking av elementer til dette skrivebordet.",
		admin_desktop_configure_security_inheritance: "Tillat brukere å konfigurere sikkerhetsarv for mapper",
		admin_desktop_configure_security_inheritance_hover: "<b>Bare for IBM FileNet P8-brukere.</b>  Velg dette alternativet hvis du vil at brukerne skal kunne tilpasse tilgangen til elementer i en mappe ved å kontrollere sikkerhetsarven for mapper. Hvis du velger dette alternativet, kan brukerne oppgi om brukere eller grupper kan arve sikkerhet fra:<ul><li>En mappe</li><li>En mappe og mappens nærmeste undermapper</li><li>En mappe og alle tilhørende undermapper</li></ul>",
		admin_desktop_appearance: "Utseende",
		admin_desktop_appearance_instruction: "Du kan tilpasse utseendet til skrivebordet ved å endre påloggingssiden og banneret som blir vist for skrivebordet.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "Layouten oppgir hvilke funksjoner som kan vises i webklienten og hvordan innholdet i webklienten skal ordnes.<br><br>Tips: Du kan definere tilpassede layouter ved å opprette plugin-moduler. Du må registrere plugin-modulen i administrasjonsverktøyet før du kan velge en tilpasset layout.",
		admin_desktop_layout_default: "Standard",
		admin_desktop_layout_custom: "Tilpasset",
		admin_desktop_enable_workflow_email: "Aktiver dette skrivebordet for e-postvarsling for FileNet P8-arbeidsflyt",
		admin_desktop_enable_workflow_email_hover: "Bare for FileNet P8-brukere. Velg dette alternativet hvis du vil gjøre det mulig for brukerne å åpne webklienten fra URLer som er inkludert i e-postvarslene som blir generert av Process Engine.<br /><br />Hvis du ikke aktiverer dette alternativet for alle skrivebord, kan ikke brukere logge på webklienten fra URLene i varslinger.<br /><br />Hvis du aktiverer dette alternativet på flere skrivebord og mer enn ett skrivebord oppfyller kriteriene som er oppgitt i URLen i varselet, vil webklienten bruke det første skrivebordet som samsvarer med kriteriene. ",
		admin_desktop_prevent_create_new_search: "Hindre brukere i å opprette søk",
		admin_desktop_prevent_create_new_search_hover: "Dette alternativet gjør at brukerne bare kan bruke eksisterende søk og ikke opprette åpne søk som kanskje ikke er optimalisert.</br></br>Denne innstillingen påvirker ikke grupperom. Rettigheten for å opprette søk i et grupperom styres av rollen en bruker har på et gitt grupperom.",
		admin_desktop_prevent_create_new_unified_search: "Hindre brukere i å opprette flerdatalagersøk",
		admin_desktop_prevent_create_new_unified_search_hover: "Dette alternativet gjør at brukerne bare kan bruke eksisterende flerdatalagersøk og ikke opprette åpne flerdatalagersøk som kanskje ikke er optimalisert.",
		admin_desktop_hide_entry_template_not_found_warning: "Skjul advarselen som blir vist når den tilknyttede oppføringsmalen ikke blir funnet",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Velg dette alternativet når du vil skjule varselmeldingen som blir vist når elementegenskapene blir redigert og oppføringsmalen som er knyttet til elementet, ikke blir funnet.",
		admin_desktop_show_class_role_security_selection: "Tillat brukere å konfigurere rollebasert sikkerhet i oppføringsmaler",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Bare for IBM FileNet P8-brukere.</b> Velg dette alternativet hvis du vil at brukerne skal kunne konfigurere oppføringsmaler som skal bruke rollebasert sikkerhet når det defineres sikkerhet på dokumenter eller mapper ved hjelp av oppføringsmaler. Hvis du velger dette alternativet, kan redigerere av oppføringsmaler oppgi om rollesikkerhetsobjekter skal brukes på en oppføringsmaldefinisjon.",
		admin_desktop_show_primary_multi_part: "Åpne bare primærdokumentet i visningsprogrammet",
		admin_desktop_show_primary_multi_part_hover: "<b>Bare for IBM FileNet P8-brukere.</b> Velg dette alternativet hvis du vil at bare primærdokumentfilen skal åpnes i visningsprogrammet. Dokumenter kan ha flere filer knyttet til seg. Dette alternativet vil bare åpne primærfilen som er knyttet til dokumentet.",
		admin_desktop_redaction_save_mode: "Standard retusjeringsalternativ:",
		admin_desktop_redaction_save_mode_hover: "Velg standard lagringsmodus for retusjering i ViewONE Virtual Viewer:</br>* Be alltid brukeren om å velge: Dette vil gjøre at det vises en dialogboks når retusjeringsmodus startes, der brukerne blir spurt om de vil sjekke inn dokumentet som en ny versjon, opprette et nytt dokument eller laste ned innhold.</br>* Sjekk inn som en ny versjon: Vil alltid lagre de bearbeidede innholdet tilbake til en ny versjon av det eksisterende dokumentet.</br>* Lagre som et helt nytt dokument: Vil alltid lagre det bearbeidede innholdet tilbake som et helt nytt dokument.</br>* Last ned og lagre på klienten: Vil laste ned det bearbeidede innholdet til klientsystemet.",
		admin_desktop_redaction_save_mode_user_select: "Be alltid brukeren om å velge",
		admin_desktop_redaction_save_mode_new_version: "Sjekk inn som en ny versjon",
		admin_desktop_redaction_save_mode_new_document: "Lagre som et helt nytt dokument",
		admin_desktop_redaction_save_mode_local_content: "Last ned og lagre på klienten",

		admin_desktop_document_add_mode: "Dialogboksen Legg til dokument:",
		admin_desktop_document_add_mode_hover: "Oppgi dialogboksen som skal brukes for tilføying av dokumenter som er opprettet av IBM Content Navigator:<ul><li>Nytt permanent retusjert dokument</li><li>Nytt sammenslått og delt dokument</li><li>Nytt Microsoft Office-dokument</li><li>Nytt Edit Service-dokument</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Legg til dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Legg til dokument ved hjelp av oppføringsmal",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Slå sammen og del:",
		admin_desktop_merge_and_split_enable_hover: "Oppgi om du vil at brukerne som benytter dette skrivebordet, skal kunne slå sammen og dele dokumenter ved hjelp av et støttet visningsprogram.",

		admin_desktop_merge_and_split_show_checkin: "Be brukere om å oppgi egenskapsverdier når de sjekker inn endringer i et dokument.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Hvis du velger dette alternativet, blir dialogboken for innsjekking vist når brukere sjekker inn endringer for et dokument i modusen Slå sammen og del.",

		admin_desktop_available_categories: "Tilgjengelige funksjoner",
		admin_desktop_selected_categories: "Valgte funksjoner",

		admin_layout_banner_title: "Banner og påloggingsside",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Applikasjonsnavn:",
		admin_desktop_application_name_hover: "Oppgi applikasjonsnavnet som skal vises i banneret.<br><br>Tips: Definer applikasjonsnavnet for andre språk på flippen Etiketter / Skrivebordsetiketter.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Oppgi om du vil bruke standard IBM Content Navigator-tema eller et tilpasset tema for dette skrivebordet. Hvis du vil bruke et tilpasset tema, må du opprette et tema i seksjonen <b>Temaer</b> i administrasjonsverktøyet.",
		admin_desktop_login_logo: "Logo for påloggingsside:",
		admin_desktop_login_logo_hover: "Hvis du vil endre logoen som blir vist på påloggingssiden, kan du oppgi URL for en logofil. Det anbefales imidlertid at du bruker en tilpasset tema for å endre logoen.",
		admin_desktop_login_logo_url_hover: "Oppgi URLen for logofilen. Hvis logoen finnes på samme webapplikasjonsserver som webklienten, oppgir du en relativ URL, for eksempel /mycustomizations/login_logo.png<br><br>Logoen må ikke være større enn 200 piksler bred og 150 piksler høy.<br><br>Det anbefales at logoen har en gjennomsiktig bakgrunn.",
		admin_desktop_banner_logo: "Bannerlogo:",
		admin_desktop_banner_logo_hover: "Hvis du vil endre logoen som blir vist i banneret, kan du oppgi URL for en logofil. Det anbefales imidlertid at du bruker en tilpasset tema for å endre logoen.",
		admin_desktop_banner_logo_url_hover: "Oppgi URLen for logofilen. Hvis logoen finnes på samme webapplikasjonsserver som webklienten, oppgir du en relativ URL, for eksempel /mycustomizations/banner_logo.png<br><br>Logoen må ikke være større enn 72 piksler bred og 36 piksler høy.<br><br>Det anbefales at logoen har en gjennomsiktig bakgrunn.",
		admin_desktop_banner_background_color: "Bakgrunnsfarge for banner:",
		admin_desktop_banner_background_color_hover: "Hvis du vil endre bakgrunnsfargen for banneret, kan du oppgi en tilpasset farge. Det anbefales imidlertid at du bruker en tilpasset tema for å endre fargen for banneret.",
		admin_desktop_banner_background_color_custom_hover: "Oppgi fargen for applikasjonsbanneret som en heksadesimal farge.",
		admin_desktop_banner_application_name_color: "Tekstfarge for applikasjonsnavn:",
		admin_desktop_banner_application_name_color_hover: "Hvis du vil endre fargen for applikasjonsnavnet, kan du oppgi en tilpasset farge. Det anbefales imidlertid at du bruker en tilpasset tema for å endre fargen for applikasjonsnavnet.",
		admin_desktop_banner_application_name_color_custom_hover: "Oppgi fargen for applikasjonsnavnet som en heksadesimal farge.",
		admin_desktop_banner_menu_color: "Ikonfarge for banner:",
		admin_desktop_banner_menu_color_hover: "Hvis du endrer bakgrunnsfargen for banneret, er det mulig du må endre fargevalget for ikonene i banneret for å gjøre dem mer synlige. Oppgi om du vil vise den lyse eller mørke versjonen av bannerikonene.<br><br>Det anbefales imidlertid at du bruker en tilpasset tema for å endre fargen for ikonene.",
		admin_desktop_login_page_content: "Innhold for påloggingsside:",
		admin_desktop_login_page_content_hover: "Hvis du vil vise mer informasjon på påloggingssiden, for eksempel kunngjøringer av nedetid for systemet eller hvor brukerne kan få hjelp med brukernavn og passord, kan du oppgi URL for innholdet du vil vise.",
		admin_desktop_login_page_content_url_hover: "Oppgi URLen for påloggingssideinnholdet. Hvis innholdet finnes på samme webapplikasjonsserver som webklienten, oppgir du en relativ URL, for eksempel /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Passordregler:",
		admin_desktop_password_rules_hover: "Hvis du vil gi brukerne retningslinjer for opprettelse av passord, for eksempel ugyldige tegn eller minimumsantallet tegn, kan du oppgi URL for en side som inneholder passordreglene.",
		admin_desktop_password_rules_url_hover: "Oppgi URLen for passordregelinnholdet. Hvis innholdet finnes på samme webapplikasjonsserver som webklienten, oppgir du en relativ URL, for eksempel /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL til sluttbrukerhjelp:",
		admin_desktop_help_url_hover: "Du kan bruke hjelpen som følger med IBM Content Navigator, eller du kan lede brukerne til et tilpasset hjelpeinnhold på en av følgende måter:<br><br><ul><li>Lede til et tilpasset hjelpesystem</li><li>Legge til hjelp i den forekomsten av IBM Knowledge Center som distribueres med IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Oppgi URLen til det tilpassede hjelpesystemet. IBM Content Navigator legger til index.jsp?content=/com.ibm.usingeuc.doc/ og et filnavn på slutten av URLen du oppgir.  For at \"Les mer\"-linker i grensesnittet skal virke, må hjelpesystemet bruke samme filnavn som den integrerte sluttbrukerhjelpen. ",
		admin_desktop_deprecated_appearance_title: "Frarådede innstillinger",
		admin_desktop_deprecated_appearance_instructions: "Hvis du bruker et tilpasset tema, blir disse innstillingene overstyrt av det tilpassede temaet. Du bør migrere disse innstillingene til et tilpasset tema, som gir en mer detaljert stilutforming enn innstillingene i denne seksjonen. I tillegg kan et tilpasset tema brukes av flere skrivebord.",

		admin_desktop_plugins_title: "Aktiver eller deaktiver plugin-moduler for dette skrivebordet.",
		admin_desktop_plugins_enable_all_plugins: "Aktiver alle distribuerte plugin-moduler for bruk med dette skrivebordet",
		admin_desktop_plugins_select_plugins: "Velg de distribuerte plugin-modulene som skal aktiveres for bruk med dette skrivebordet",
		admin_desktop_plugins_select_plugin: "Velg plugin-modul",

		admin_desktop_layout_features: "Viste funksjoner:",
		admin_desktop_layout_features_hover: "Velg hvilke funksjoner du vil at brukerne skal ha tilgang til fra dette skrivebordet. Funksjonene blir vist i den rekkefølgen de er oppført.<br><br>Når du velger en funksjon, kan du tilpasse noe av virkemåten for funksjonen på skrivebordet, for eksempel standard datalager som er valgt for funksjonen.",
		admin_desktop_layout_default_repository: "Standard datalager:",
		admin_desktop_layout_default_repository_layout_hover: "Oppgi hvilket datalager som velges som standard når brukerne åpner denne funksjonen.",
		admin_desktop_layout_document_thumbnails: "Dokumentminiatyrbilder:",
		admin_desktop_layout_document_thumbnails_hover: "Oppgi om det skal vises miniatyrbilder for dokumenter i ruten Dokumentinformasjon.<br><br>Hvis du viser miniatyrbilder, kan webklientens ytelse bli dårligere.",
		admin_desktop_layout_show_filmstrip_view: "Filmstripevisning:",
		admin_desktop_layout_show_filmstrip_view_hover: "Oppgi om brukerne skal kunne bytte fra innholdslistevisning til filmstripevisning.<br><br>Filmstripevisningen genererer en forhåndsvisning av hvert dokument en bruker velger. Filmstripevisningen kan imidlertid gi dårligere ytelse i webklienten. I tillegg må du konfigurere visningsprogrammet med HTML-konvertering for å se forhåndsvisninger av dokumenter.",
		admin_enabled: "Aktiver",
		admin_disabled: "Deaktiver",
		admin_include: "Inkluder",
		admin_exclude: "Ekskluder",
		admin_layout_teamspaces_default_repository: "Grupperom:",
		admin_layout_entry_templates_default_repository: "Oppføringsmaler:",
		admin_layout_other_features_default_repository: "Søk og bla gjennom:",
		admin_layout_work_default_repository: "Arbeid:",
		admin_layout_default_feature: "Standardfunksjon:",
		admin_default_category_placeholder: "Velg en funksjon",
		admin_layout_default_feature_hover: "Oppgi hvilken funksjon som skal vises når brukerne logger seg på dette skrivebordet.",
		admin_layout_default_feature_warning: "En endring av standardfunksjonen kan påvirke tiden det tar å laste inn applikasjonen.",
		admin_layout_feature_list_header: "Funksjon",
		admin_layout_show_statusbar: "Statuslinje:",
		admin_layout_show_statusbar_hover: "Angi om statuslinjen skal vises nederst på skrivebordet.<br><br>Hvis du skjuler statuslinjen, kan ikke brukerne se informasjon om andre ting enn feil, for eksempel:<ul><li>Dokumentet ble lagt til i datalageret.</li><li>Søket returnerte 59 dokumenter.</li></ul>",
		admin_layout_show_magazineview: "Magasinvisning:",
		admin_layout_show_magazineview_hover: "Oppgi om brukerne skal kunne bytte fra innholdslistevisning til magasinvisning.<br><br>Magasinvisningen øker høyden på hver oppføring på innholdslisten, slik at det kan vises færre elementer på innholdslisten samtidig.",
		admin_layout_show_detailsview: "Detaljvisning:",
		admin_layout_show_detailsview_hover: "Oppgi om brukerne skal kunne bytte fra innholdslistevisning til detaljvisningen.<br><br>Detaljvisningen maksimerer antall rader som er synlige på innholdslisten.",
		admin_feature_config_docinfopane_label: "Dokumentinforute:",
		admin_feature_config_docinfopane_hoverhelp: "Oppgi om brukerne kan få tilgang til dokumentinformasjonsruten i denne funksjonen.",
		admin_feature_config_docinfopane_default_label: "Standard virkemåte:",
		admin_feature_config_docinfopane_expanded: "Utvidet",
		admin_feature_config_docinfopane_collapsed: "Komprimert",
		admin_feature_config_docinfopane_expand_on_select: "Utvid når elementet blir valgt",
		admin_layout_features_title: "Skrivebordsfunksjoner",
		admin_layout_features_instructions: "Oppgi hvilke funksjoner brukerne har tilgang til fra dette skrivebordet.  I tillegg kan du tilpasse virkemåten for hver funksjon som er inkludert på skrivebordet.",
		admin_layout_components_title: "Ekstra skrivebordskomponenter",
		admin_layout_components_instructions: "Du kan deaktivere enkelte av komponentene på skrivebordet hvis du vil ha et mer strømlinjeformet grensesnitt eller hvis du vil forbedre ytelsen i webklienten.",
		admin_layout_featureconfig_instructions: "Velg en funksjon som skal konfigureres",
		admin_layout_featureconfig_no_configuration: "Ingen funksjonskonfigurasjon tilgjengelig.",
		admin_layout_featureconfig_label: "Konfigurasjon for funksjon ${0}",
		admin_layout_featureconfig_title: "Funksjonskonfigurasjon",
		admin_layout_featureconfig_taskManagerURL: "Hvis du vil bruke denne funksjonen, må du aktivere og konfigurere IBM Content Navigator for å knytte den til oppgavestyrertjenesten. Aktiver oppgavestyrertjenesten i seksjonen <b>Innstillinger</b> i dette administrasjonsverktøyet.",
		admin_feature_config_show_my_checkouts_label: "Ruten Mine utsjekkinger:",
		admin_feature_config_show_my_checkouts_hoverhelp: "I ruten Mine utsjekkinger kan brukerne utføre et søk etter alle elementer de har sjekket ut av et bestemt datalager. Oppgi om brukerne skal ha tilgang til ruten Mine utsjekkinger fra Hjem-funksjonen.<br/><br/><b>Begrensning:</b> Denne funksjonen krever at du har minst ett IBM Content Manager-, IBM FileNet P8- eller OASIS CMIS-datalager knyttet til dette skrivebordet.",

		admin_feature_config_default_repository_icon_text: "Standard datalager",
		admin_show: "Vis",
		admin_hide: "Skjul",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Du kan ikke fjerne funksjonen Administrasjon fra administrasjonsskrivebordet",
		admin_warning_label: "Advarsel:",
		admin_layout_show_globaltoolbar: "Global verktøylinje:",
		admin_layout_show_globaltoolbar_hover: "Oppgi om verktøylinjen skal vises i banneret øverst på skrivebordet.<br><br>Den globale verktøylinjen inneholder handlinger som gjør det mulig for brukerne å legge til dokumenter, mapper og sperringer i datalageret. Hvilke handlinger som er tilgjengelige, avhenger av hvilket datalager brukeren er koblet til.",
		admin_interface_text_name_label: "Etikettype",

		admin_interface_text_label_description: "Du kan tilpasse teksten som vises bestemte områder av webklienten. Etikettene vises for alle datalagre og skrivebord i din konfigurasjon. Oppgi teksten du vil se i grensesnittet, i feltet Gjeldende etikett.<br><br><b>Viktig:</b> Endringer du gjør i etikettene, blir ikke vist i administrasjonsverktøyet.",
		admin_interface_text_label_action: "Handlingsetiketter",
		admin_interface_text_label_action_description: "Handlingsetiketter vises på knapper og menyer i hele webklienten. Du kan definere forskjellige handlingsetiketter for hver type av datalager.",
		admin_interface_text_label_application: "Applikasjonsetiketter",
		admin_interface_text_label_application_description: "Applikasjonsetiketter blir vist i hele webklienten.",
		admin_interface_text_label_system: "Systemegenskapsetiketter",
		admin_interface_text_label_system_description: "Hvilke systemegenskaper som blir vist, varierer etter datalager. Du kan tilpasse etikettene som blir vist for systemegenskapene som er knyttet til dokumentene og mappene i datalagrene.",
		admin_interface_text_label_desktop: "Skrivebordsetiketter",
		admin_interface_text_label_desktop_description: "Hvis du har tilpasset navnet på applikasjonen i et skrivebord, kan du tilpasse det navnet for andre språk enn engelsk. Du kan også tilpasse navnene på IBM FileNet P8-applikasjonsområdene i et skrivebord.",

		admin_interface_text_system_label: "Systemetikett",
		admin_interface_text_current_label: "Gjeldende etikett",
		admin_interface_text_default_label_heading: "Standardetikett",
		admin_interface_text_default_label: "Standardetikett:",
		admin_interface_text_displayed_in_label: "Vist for",
		admin_interface_text_displayed_in_document_folder: "Dokumenter og mapper",
		admin_interface_text_displayed_in_document: "Dokumenter",
		admin_interface_text_displayed_in_folder: "Mapper",
		admin_interface_text_displayed_in_admin_application_space: "Etikett for applikasjonsområde",
		admin_interface_text_displayed_in_desktop: "Funksjonsetikett for mobil",
		admin_interface_text_displayed_in_admin_application_name: "Applikasjonsnavn",

		admin_new_desktop: "Nytt skrivebord",
		admin_new_repository: "Nytt datalager",
		admin_new_menu: "Ny meny",
		admin_new_viewer_mapping: "Ny visningsprogramtilordning",
		admin_new_mapping_label: "Ny tilordning",
		admin_new_icon_mapping: "Ny ikontilordning",
		admin_viewer_mapping_list_instructions: "Du kan konfigurere hvilke visningsprogrammer webklienten bruker for å vise forskjellige typer av innhold. Visningsprogramtilordninger definerer hvilke MIME-typer som er knyttet til hvert visningsprogram du vil bruke. Du kan opprette flere visningsprogramtilordninger hvis du vil bruke forskjellige visningsprogrammer for forskjellige skrivebord.",
		admin_viewer_mapping_instructions: "Oppgi hvilke visningsprogrammer du vil bruke til å åpne filer med. Hvis du vil bruke et tilpasset visningsprogram, må du integrere visningsprogrammet som en plugin-modul før du kan legge det til i visningsprogramtilordningen.<br><br><b>Viktig:</b> Når en bruker åpner et dokument søker webklienten i listen med visningsprogramtilordninger for å finne det første visningsprogrammet som kan åpne dokumentet basert på operativsystemet brukeren kjører og datalageret brukeren er knyttet til. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Ny plugin-modul",
		admin_menu_list_instructions: "Du kan opprette tilpassede verktøylinjer og hurtigmenyer for å styre hvilke handlinger som skal være tilgjengelige for brukerne. Du kan ikke redigere standardmenyene, men du kan opprette kopier av eksisterende menyer for å begrense hvilke handlinger som er tilgjengelige, eller for å legge til tilpassede handlinger som er definert i plugin-moduler.<br><br>Hvis du vil opprette en ny type meny, må du definere menyen i en plugin-modul.",
		admin_menu_id_hover: "IDen må være unik, og du kan ikke endre IDen etter at du har lagret menyen.<br><br>IDen kan bare inneholde alfanumeriske tegn og skiller mellom store og små bokstaver.",
		admin_menu_id_disabled_hover: "Meny-IDen kan ikke endres. Hvis du vil bruke en annen ID, må du opprette en ny meny.",
		admin_menu_default_instructions: "Du kan ikke redigere denne menyen fordi det er en standardmeny. Hvis du vil redigere denne menyen, må du opprette en kopi av den.",
		admin_menu_toolbar_instructions: "Du kan begrense hvilke handlinger som skal være tilgjengelige for denne verktøylinjen, eller legge til tilpassede handlinger som er definert i en plugin-modul. Du kan også organisere handlingene ved å legge til skillelinjer på verktøylinjen.",
		admin_menu_toolbar_custom_instructions: "Denne verktøylinjen er definert av en plugin-modul. Hvis du vil redigere verktøylinjen, må du oppdatere plugin-modulen eller opprette en kopi av verktøylinjen.",
		admin_menu_context_menu_instructions: "Du kan begrense hvilke handlinger som skal være tilgjengelige for denne hurtigmenyen, eller legge til tilpassede handlinger som er definert i en plugin-modul. Du kan også organisere handlingene ved å legge til skillelinjer og undermenyer i hurtigmenyen.",
		admin_menu_context_menu_custom_instructions: "Denne hurtigmenyen er definert av en plugin-modul. Hvis du vil redigere hurtigmenyen, må du oppdatere plugin-modulen eller opprette en kopi av hurtigmenyen.",
		admin_desktop_list_instructions: "Du kan opprette flere skrivebord for å gi forskjellige brukere tilgang til det innholdet de trenger. Du kan for eksempel opprette et skrivebord som bare gjør det mulig for brukerne å søke etter innhold, eller et skrivebord som gir brukerne tilgang til ett enkelt datalager. ",
		admin_plugin_updated: "Konfigurasjonen for den valgte plugin-modulen er endret. Du må oppdatere nettleseren for at endringene skal tre i kraft.",
		admin_repository_ci_heading: "Content Integrator-datalager: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager-datalager: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager-datalager: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand-datalager: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS-datalager (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Box-datalager: <b>${0}</b>",
		admin_repository_generic_heading: "Datalager: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Vil du slette de valgte skrivebordene?\n${0} skrivebord er valgt.",
		admin_delete_confirmation_menus: "Vil du slette de valgte menyene?\n${0} menyer er valgt.",
		admin_delete_confirmation_repositories: "Vil du slette de valgte datalagrene?\n${0} datalagre er valgt.",
		admin_delete_confirmation_viewer_mappings: "Vil du slette de valgte visningsprogramtilordningene?  ${0} tilordninger er valgt.",
		admin_delete_confirmation_icon_mappings: "Vil du slette de valgte ikonkonfigurasjonene?\n${0} ikonkonfigurasjoner er valgt.",
		admin_delete_confirmation_plugins: "Vil du slette de valgte plugin-modulene?\n${0} plugin-moduler er valgt.",
		admin_delete_confirmation: "Vil du slette de valgte elementene?\n${0} elementer er valgt.",

		admin_viewer_mapping_id_hover: "IDen må være unik, og du kan ikke endre IDen etter at du har lagret visningsprogramtilordningen.<br><br>IDen kan bare inneholde alfanumeriske tegn og skiller mellom store og små bokstaver.",
		admin_viewer_mapping_id_disabled_hover: "Visningsprogramtilordnings-IDen kan ikke endres. Hvis du vil bruke en annen ID, må du opprette en ny visningsprogramtilordning.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Standard skrivebord kan ikke slettes.",

		admin_desktop_heading: "Skrivebord: <b>${0}</b>",
		admin_menu_toolbar_heading: "Verktøylinje: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Tilpasset verktøylinje: <b>${0}</b>",
		admin_menu_context_menu_heading: "Hurtigmeny: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Tilpasset hurtigmeny: <b>${0}</b>",
		admin_plugin_heading: "Plugin-modul: <b>${0}</b>",
		admin_plugin_instructions: "En plugin-modul kan være enten en JAR-fil eller en kompilert klassefil.<br/><br/><b>Viktig:</b> IBM Content Navigator-webapplikasjonsserveren må ha tilgang til plugin-modulfilen på det lokale filsystemet eller via en URL.",
		admin_plugin_list_instructions: "Du må bruke administrasjonsverktøyet når du skal registrere plugin-moduler for webklienten. Hvis en plugin-modul krever ytterligere konfigurasjon, blir konfigurasjonsparameterne vist etter at du har registrert plugin-modulen.<br /><br />Viktig: Hvis du redigerer en plugin-modul som det er referert til i et annet område i administrasjonsverktøyet, for eksempel en meny, kan du få problemer med virkemåten til plugin-modulen. I tillegg blir plugin-modulene startet i den rekkefølgen de har på listen. Hvis en plugin-modul må kjøres før en annen plugin-modul, må du sørge for at plugin-modulene er oppført i den rekkefølgen de må kjøres i.",
		admin_plugin_cannot_delete: "De valgte plugin-modulene kan ikke slettes fordi enkelte plugin-moduler avhenger av dem.<br/>Valgte plugin-moduler: ${0}<br/>Avhengige plugin-moduler: ${1}",
		admin_plugin_cannot_disable: "De valgte plugin-modulene kan ikke deaktiveres fordi enkelte plugin-moduler avhenger av dem.<br/>Valgte plugin-moduler: ${0}<br/>Avhengige plugin-moduler: ${1}",
		admin_plugin_cannot_add: "Plugin-modulen kan ikke legges til, fordi noen plugin-moduler den er avhengig av, mangler eller er deaktivert. Plugin-moduler som mangler eller er deaktivert: ${0}",
		admin_plugin_cannot_enable: "De valgte plugin-modulene kan ikke aktiveres, fordi noen plugin-moduler de er avhengige av, mangler eller er deaktivert.<br/>Valgte plugin-moduler: ${0}<br/>Plugin-moduler som mangler eller er deaktivert: ${1}",
		admin_plugin_save_order: "Lagre rekkefølge",
		admin_plugin_load: "Last inn",
		admin_plugin_load_hover: "Oppgi URLen for plugin-modulen",
		admin_plugin_file_hover: "Hvis JAR-filen for plugin-modulen er på ditt lokale filsystem, kan du skrive inn den fullstendige banen eller URLen til plugin-modulfilen. Hvis JAR-filen for plugin-modulen er på en ekstern server, må du skrive inn URLen til plugin-modulfilen.",
		admin_plugin_classfolderpath_hover: "Den kompilerte klassefilen må være på IBM Content Navigator-webapplikasjonsserveren.<br/><br/>Oppgi den fullstendige banen til mappen der plugin-klassene blir kompilert og generert.<br/><br/>Banen må ikke inneholde pakkenavnet for plugin-klassen. For eksempel er standardbanen for plugin-eksempelklassen på Windows C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Oppgi det fullstendige navnet på Java-klassen i klassefilen som skal lastes inn og kalles opp som plugin-klasse.<br/>For eksempel er klassenavnet for plugin-eksempelet com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Plugin-modulens JAR-fil ble ikke funnes på oppgitt URL. Kontroller at JAR-filen finnes på webapplikasjonsserveren, og at URLen og filnavnet er riktig.",
		admin_plugin_for_repository_not_loaded: "Du kan ikke redigere dette datalageret. Plugin-modulen som definerer og støtter denne typen datalager er ikke lastet inn. På flippen Plugin-moduler må du redigere plugin-modulen for å kontrollere at den er riktig konfigurert, og at den blir lastet inn.",
		admin_plugin_repository_types: "Datalagertyper:",
		admin_plugin_viewers: "Visningsprogrammer:",
		admin_plugin_features: "Funksjoner:",
		admin_plugin_layouts: "Layouter:",
		admin_plugin_not_available: "Ikke tilgjengelig",
		admin_plugin_config_params: "Konfigurasjonsparametere:",
		admin_viewer_def_heading: "Visningsprogramtilordning: <b>${0}</b>",
		admin_users_and_groups: "Brukere og grupper",
		admin_general: "Generelt",
		admin_logging: "Logging",
		admin_authentication: "Autentisering",		
		admin_rolebase_role: "Rolle:",
		admin_settings_logging_instructions: "Du kan bruke logging for å løse problemer med webklienten. Du kan tilpasse loggingen hvis du vet at problemet oppstår innenfor en bestemt Java-klasse eller for en bestemt bruker. Feilinformasjon blir skrevet til feilloggfilene for webapplikasjonsserveren.",
		admin_settings_logging_instructions2: "<b>Innstillinger for feilsøkingslogging</b><br />Hvis du vet at problemet oppstår for en bestemt klientvertsmaskin eller bruker, kan du avgrense feilsøkingsloggingen til den maskinen eller brukeren. Du kan registrere feilsøkingsinformasjon i et produksjonsmiljø uten at det har noen betydelig effekt på ytelsen til systemet.<br /><br />Viktig: Hvis du oppgir en klientvertsmaskin eller bruker, overstyrer denne innstillingen eventuelle andre innstillinger for logging. Når du har registrert informasjon du trenger, definerer du dette alternativet til <b>Ingen</b> hvis du vil gjenoppta standardlogging for ditt miljø.",
		admin_settings_export_config_hover: "Eksporterer den gjeldende systemkonfigurasjonsinformasjonen til en fil for bruk med IBM Support Assistant-datainnsamleren. Filen lagres på plasseringen som er definert av Java-systemegenskapen user.home.",
		admin_logging_level: "Logging på applikasjonsnivå:",
		admin_logging_level_hover: "Loggingsnivåer påvirker hvor mye informasjon som blir lagret på serveren. Hvis du velger Feil, blir den minste mengden av loggingsinformasjon registrert. Hvis du velger Feilsøking, blir den største mengden av informasjon registrert.<br /><br />Ikke oppgi Feilsøking i et produksjonsmiljø med mindre IBMs programvarestøtte. ber deg om å gjøre dette.",
		admin_logging_level_0: "Ingen logging",
		admin_logging_level_1: "Feil",
		admin_logging_level_2: "Advarsel",
		admin_logging_level_3: "Informasjon",
		admin_logging_level_4: "Feilsøking",
		admin_logging_classes: "Logging på Java-klassenivå:",
		admin_logging_classes_hover: "Som standard er alle Java-klasser og -pakker inkludert i feilloggene for webapplikasjonsserveren. Du kan imidlertid oppgi hvilke klasser eller pakker som skal inkluderes eller utelates fra loggingen. Du kan se gjennom feilloggene for å finne ut hvilke klasser som skal inkluderes eller utelates.<br><br>Hvis du vet at problemet oppstår i en bestemt klasse, kan du spesifikt inkludere denne klassen i loggfilene. Når du inkluderer en klasse i feilloggene, blir alle andre klasser utelukket fra loggfilen.<br><br>Hvis du vet at problemet ikke forekommer i en klasse, og du vil redusere størrelsen på loggfilen, kan du utelate denne klassen fra loggfilene.",
		admin_logging_classes_include: "Inkluder",
		admin_logging_classes_include_all: "Alle klasser",
		admin_logging_classes_include_specified: "Bestemte klasser",
		admin_logging_classes_include_specified_msg: "Oppgi hvilke klasser som skal inkluderes.",
		admin_logging_classes_exclude: "Ekskluder",
		admin_logging_classes_exclude_none: "Ingen",
		admin_logging_classes_exclude_specified: "Bestemte klasser",
		admin_logging_classes_exclude_specified_msg: "Oppgi hvilke klasser som skal ekskluderes.",
		admin_logging_debug: "Feilsøkingslogging for:",
		admin_logging_debug_hover: "<b>Viktig:</b> Se gjennom loggfilene for webapplikasjonsserveren før du oppgir enten en IP-adresse for vertsmaskinen eller en bruker. Verdien du oppgir, må samsvare med verdien som vises i loggfilen.",
		admin_logging_debug_none: "Ingen (standard)",
		admin_logging_debug_host: "Klientvertsmaskiner (IP-adresser)",
		admin_logging_debug_host_msg: "Oppgi IP-adressen til én eller flere klientmaskiner som du vil logge feilsøkingsinformasjon for. Skill IP-adressene med komma.<br /><br />Viktig: Se gjennom loggfilene for webapplikasjonsserveren før du oppgir en IP-adresse. Verdien du oppgir, må samsvare med verdien som vises i loggfilen.",
		admin_logging_debug_user: "Brukere",
		admin_logging_debug_user_msg: "Oppgi brukernavnet til én eller flere brukere som du vil logge feilsøkingsinformasjon for. Skill brukernavnene med komma.<br /><br />Viktig: Se gjennom loggfilene for webapplikasjonsserveren før du oppgir et brukernavn. Verdien du oppgir, må samsvare med verdien som vises i loggfilen.",

		admin_office_settings_logging_instructions: "Du kan bruke logging for å løse problemer med IBM Content Navigator for Microsoft Office. Du kan tilpasse loggingen hvis du vet at problemet oppstår innenfor en bestemt klasse eller for en bestemt bruker. Feilinformasjonen blir skrevet til applikasjonsloggfilene på vertsmaskinene med IBM Content Navigator for Microsoft Office-klienten. ",
		admin_office_settings_logging_instructions2: "<b>Innstillinger for feilsøkingslogging</b><br />Hvis du vet at problemet oppstår for en bestemt klientvertsmaskin eller IBM Content Navigator for Microsoft Office-bruker, kan du avgrense feilsøkingsloggingen til den maskinen eller brukeren. Du kan registrere feilsøkingsinformasjon i et produksjonsmiljø uten at det har noen betydelig effekt på ytelsen til systemet. <br /><br />Viktig: Hvis du oppgir en klientvertsmaskin eller bruker, overstyrer denne innstillingen eventuelle andre innstillinger for logging. Når du har registrert informasjon du trenger, definerer du dette alternativet til <b>Ingen</b> hvis du vil gjenoppta standardlogging for ditt IBM Content Navigator for Microsoft Office-miljø. ",
		admin_office_logging_debug_hover: "<b>Viktig:</b> Se gjennom loggfilene på klientmaskinen før du oppgir enten en IP-adresse for vertsmaskinen eller en bruker. Verdien du oppgir, må samsvare med verdien som vises i loggfilen. ",
		admin_office_logging: "Office-logging",
		admin_office_logging_classes: "Logging på klassenivå:",
		admin_office_logging_classes_hover: "Som standard er alle klasser og pakker inkludert i feilloggene for IBM Content Navigator for Microsoft Office. Du kan imidlertid oppgi hvilke klasser eller pakker som skal inkluderes eller utelates fra loggingen. Du kan se gjennom klientmaskinloggene for å finne ut hvilke klasser som skal inkluderes eller utelates.<br /><br />Hvis du vet at problemet oppstår i en bestemt klasse, kan du spesifikt inkludere denne klassen i loggfilene. Når du inkluderer en klasse i feilloggene, blir alle andre klasser utelukket fra loggfilene. <br /><br />Hvis du vet at problemet ikke forekommer i en klasse, og du vil redusere størrelsen på loggfilen, kan du utelate denne klassen fra loggfilene. ",
		admin_office_logging_debug_hover: "<b>Viktig:</b> Se gjennom loggfilene på klientmaskinen før du oppgir enten en IP-adresse for vertsmaskinen eller en bruker. Verdien du oppgir, må samsvare med verdien som vises i loggfilen.",
		admin_office_logging_additional_settings: "Ekstra innstillinger:",
		admin_office_logging_additional_settings_hover: "Oppgi flere innstillinger",
		admin_office_logging_file_size: "Loggfilstørrelse",
		admin_office_logging_file_size_hover: "Oppgi hvor stor en loggfil skal være for at IBM Content Navigator for Microsoft Office skal opprette en ny. Når en loggfil når den maksimale størrelsen, endres navnet på den gjeldende loggen slik at den inneholder datoen (med formatet ÅÅÅÅMMdd) og et filøkningstall (for eksempel ICNExcelAddin-20121116-5.log), og det blir opprettet en ny loggfil. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Vis stakksporing i dialogbokser",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Du kan eventuelt vis stakksporingsinformasjon i meldingsdialogbokser som hjelp til å løse problemet. Selv om du ikke aktiverer dette alternativet, blir detaljert stakksporingsinformasjon alltid inkludert i feilloggene for IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Statusikoner",
		admin_icon_state_icon: "Statusikon",
		admin_icon_state: "Status",
		state_contains_label: "Status inneholder",
		admin_icon_state_instructions: "Du kan tilpasse ikonene som blir vist ved siden av dokumenter, mapper og arbeidselementer i datalagrene.<br><br><b>Tips:</b> Du kan oppgi om statusikoner skal vises for hvert datalager i miljøet.",
		admin_icon_state_dialog_title: "Statusikontilordning",
		admin_icon_state_dialog_instructions: "Du kan tilordne den valgte statusen til et forhåndsdefinert ikon som blir levert sammen med webklienten, eller til et tilpasset ikon.",

		admin_icon_mapping_twisty: "Ikoner for MIME-type",
		admin_icon_mapping_dialog_title: "Ikontilordning",
		admin_icon_mapping: "Ikontilordning",
		admin_icon_mapping_instructions: "Du kan tilordne en liste over MIME-typer til et forhåndsdefinert ikon som blir levert sammen med webklienten, eller til et tilpasset ikon.",
		admin_icon_mapping_list_instructions: "Du kan tilpasse ikonene som blir vist for de forskjellige MIME-typene som er lagret i datalageret. Webklienten bruker ikonene i den rekkefølgen de er oppført. Hvis en MIME-type er oppført mer enn én gang, blir det første ikonet som er knyttet til denne MIME-typen, brukt.",
		admin_icon_mapping_icon_label: "Hvilket ikon vil du bruke?",
		admin_icon_mapping_file_name: "Tilpasset ikon:",
		admin_icon_mapping_file_name_heading: "Tilpasset ikon",
		admin_icon_mapping_file_name_placeholder: "Oppgi URLen for ikonet",
		admin_icon_mapping_file_name_hover: "Oppgi URLen for ikonet. Hvis ikonet er på samme webapplikasjonsserver som webklienten, oppgir du en relativ URL. For eksempel /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Forhåndsdefinert ikon:",
		admin_icon_mapping_class_name_heading: "Forhåndsdefinert ikon",
		admin_icon_mapping_class_name_hover: "Velg et ikon som er levert sammen med webklienten.",
		admin_icon_mapping_class_name_placeholder: "Velg et ikon",

		admin_p8_instructions: "Denne informasjonen deles av alle FileNet Content Manager-datalagre som er konfigurert for webklienten.",
		admin_p8_collaboration_config: "Valgfri FileNet Collaboration Services-konfigurasjon",
		admin_p8_collaboration_config_instructions: "Du kan konfigurere disse parameterne hvis du vil tilpasse FileNet Collaboration Services for IBM FileNet P8-miljøet.",
		admin_p8_use_url_incoming: "Bruke URLen i innkommende forespørsler til generere svar-URLer:",
		admin_p8_use_url_incoming_hover: "I de fleste FileNet Collaboration Services-miljøer kan du bruke URLen for en innkommende forespørsel til å generere URLen i et svar. Velg <b>Ja</b> hvis ikke en av disse situasjonene gjelder for miljøet:<ul><li>Du vil tvinge klientapplikasjoner til å bruke FileNet Collaboration Services via en bestemt URL.<li>Innstillingene for proxyserveren gjør at FileNet Collaboration Services produserer ugyldige URLer.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services-URL:",
		admin_p8_use_url_incoming_http_hover: "Oppgi URLen som klientapplikasjoner kan få tilgang til FileNet Collaboration Services med, i formatet http://FNCSserver:portnummer.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS-URL:",
		admin_p8_use_url_incoming_https_hover: "Hvis FileNet Collaboration Services er konfigurert til å bruke SSL, oppgir du HTTPS-URL som klientapplikasjoner kan få tilgang til FileNet Collaboration Services med, i formatet https://FNCSserver:portnummer",
		admin_p8_hide_email_addresses: "Skjul e-postadresser for brukere i serversvar:",
		admin_p8_hide_email_addresses_hover: "Du kan skjule brukernes e-postadresser i serversvar hvis det er nødvendig for å følge retningslinjer for personvern. Du kan for eksempel skjule listen over brukernes e-postadresser når serveren returnerer en liste over dokumenter og informasjon om brukerne som opprettet eller redigerte dokumentene.",

		admin_p8_mask_user_ids: "Masker bruker-IDer i loggfiler:",
		admin_p8_mask_user_ids_hover: "Du kan skjule brukernavn i FileNet Collaboration Services-loggfiler hvis det er nødvendig for å følge retningslinjer for personvern. Når du aktiverer dette alternativet, blir brukernavn erstattet med hash-verdier. Dette gjør det mulig for deg å lage loggfiler til eksterne selskaper, for eksempel IBM, for å få støtte uten å avsløre din brukeres navn eller aktivitetsposter.",

		admin_p8_soft_delete: "Flytt slettede filer til gjenopprettingsbingen:",
		admin_p8_soft_delete_hover: "Når brukerne sletter elementer, flyttes elementene til en gjenopprettingsbinge i stedet for at de blir slettet fra datalageret. Elementer blir værende i gjenopprettingsbingen til de blir slettet. Denne innstillingen ignoreres hvis måldatalageret ikke støtter gjenopprettingsbinger.<br><br><b>Begrensning:</b> Gjenopprettingsbinger støttes på IBM FileNet P8 versjon 5.2 eller senere og krever Social Collaboration Base Extensions-tillegget.",

		admin_p8_download: "Content Download HTTP Cache-konfigurasjon",
		admin_p8_download_instructions: "Hvis IBM FileNet Content Manager-datalagrene dine inneholder mange store filer, kan du konfigurere Content Download HTTP Cache (CDHC) til å aktivere FileNet Collaboration Services for å omdirigere innholdsforespørsler om store filer på en sikker måte til en reservert webserver.<br/><br/>Denne funksjonen krever IBM HTTP Server. I tillegg må du oppdatere IBM HTTP Server-filen httpd.conf.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Oppgi om du vil aktivere Content Download HTTP Cache (CDHC) for alle IBM FileNet Content Manager-datalagrene i miljøet. Du kan oppgi en minste filstørrelse for hurtigbufring av filer.",
		admin_p8_download_cache_folder: "Fullstendig hurtigbufferkatalog:",
		admin_p8_download_cache_folder_hover: "Oppgi den fullstendige banen til katalogen der du vil lagre hurtigbufrede filer. Katalogen kan være på et hvilket som helst operativsystem eller enhet, for eksempel en delt nettverkskatalog, så lenge den er synlig som et filsystem for FileNet Collaboration Services og IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias for hurtigbufferstedet:",
		admin_p8_download_cache_url_hover: "Oppgi aliaset som brukes for å peke til hurtigbufferkatalogen fra FileNet Collaboration Services-URLen. Oppgi aliaset med formatet /alias, for eksempel /cdhc.<br/><br/>Når /cdhc er inkludert i en URL, blir applikasjonen omdirigert til den fullstendige hurtigbufferkatalogen.",
		admin_p8_download_cache_max_files: "Største antall hurtigbufrede filer:",
		admin_p8_download_cache_max_files_hover: "Når det største antall filer er nådd, blir den eldste filen blir fjernet fra hurtigbufferen.<br><br>Hvis du oppgir det største antall filer til hurtigbufferen og den maksimale størrelsen på hurtigbufferen, blir den eldste filen fjernet fra hurtigbufferen når den laveste av de to betingelser er oppfylt.",
		admin_p8_download_cache_max_size: "Maksimal bufferstørrelse (i GB):",
		admin_p8_download_cache_max_size_hover: "Når den maksimale bufferstørrelsen er nådd, blir den eldste filen blir fjernet fra hurtigbufferen.<br/><br/>Hvis du oppgir det største antall filer til hurtigbufferen og den maksimale størrelsen på hurtigbufferen, blir den eldste filen fjernet fra hurtigbufferen når den laveste av de to betingelser er oppfylt.",
		admin_p8_download_cache_cleanup_duration: "Maksimal varighet på opprydding (i sekunder):",
		admin_p8_download_cache_cleanup_duration_hover: "Oppgi den maksimale tiden oppryddingsoperasjonen kan ta. Standard varighet er 5 sekunder.<br><br>Eventuelle filer som skal slettes, men som blir værende i hurtigbufferen etter opprydningsoperasjonen, vil bli fjernet i en fremtidig oppryddingsoperasjon.",
		admin_p8_download_cache_cleanup_min: "Minimum intervall mellom oppryddingsoperasjoner i hurtigbuffer (i sekunder):",
		admin_p8_download_cache_cleanup_min_hover: "Oppgi minimumstiden som må gå mellom oppryddingsoperasjonene i hurtigbufferen. Standardtiden er 3600 sekunder (1 time).<br><br>Oppryddingsoperasjoner i hurtigbuffer utføres bare når det finnes en aktiv forespørsel om å laste ned innhold fra hurtigbufferen. Hvis det kommer inn forespørsler hvert minutt, vil oppryddingsoperasjonen bli utført hver time. Hvis det imidlertid går tre timer mellom nedlastingsforespørsler, vil ikke oppryddingsoperasjonen bli utført før neste nedlastingsforespørsel blir mottatt.",
		admin_p8_download_cache_min_lifetime: "Minimum tid i hurtigbuffer (i sekunder):",
		admin_p8_download_cache_min_lifetime_hover: "Oppgi den minste tiden en fil må lagres i hurtigbufferen før den kan fjernes. Standardtiden er 3600 sekunder (1 time).<br><br>Selv om hurtigbufferen når maksimalstørrelsen eller inneholder det største tillatte antall filer, kan ikke den eldste filen i hurtigbufferen slettes før filen har vært i hurtigbufferen den angitte tiden.",
		admin_p8_download_cache_size_threshold: "Minimum filstørrelse til hurtigbuffer (i kB):",
		admin_p8_download_cache_size_threshold_hover: "Oppgi minimumsstørrelsen for en fil for at CDHC skal hurtigbufre. Hvis en fil er mindre enn den oppgitte størrelsen, blir filen sendt via webapplikasjonsserveren der FileNet Collaboration Services er distribuert. Standardstørrelsen er 1000 kB.",
		admin_p8_download_guard_header: "HTTP-topptekst for gatekeeping:",
		admin_p8_download_guard_header_hover: "Hvis en klientapplikasjon ikke ruter en forespørsel via IBM HTTP Server, kan ikke det bufrede innholdet lastes ned. Du kan oppgi at bare innkommende forespørsler med en bestemt HTTP-topptekst (som er lagt til i forespørsler fra IBM HTTP Server) får tilgang til det hurtigbufrede innholdet, for å hindre nedlastingsfeil.<br><br>HTTP-toppteksten blir konfigurert i IBM HTTP Server og finnes på alle innkommende forespørsler som blir rutet via IBM HTTP Server. Hvis en forespørsel ikke har HTTP-toppteksten, blir innholdet rutet gjennom webapplikasjonsserveren i stedet for IBM HTTP-serveren.",
		admin_p8_download_generate_config: "Generer konfigurasjon",
		admin_p8_download_generate_config_label: "IBM HTTP Server-konfigurasjon:",
		admin_p8_download_generate_config_label_hover: "For at CHDC-konfigurasjonen skal virke, må du oppdatere IBM HTTP Server-filen httpd.conf. Klikk på Generer konfigurasjon for å generere setningene som må legges til i filen httpd.conf.",

		admin_logging_viewone_pro: "ViewONE Professional-logging:",
		admin_logging_viewone_virtual: "ViewONE Virtual-logging:",
		admin_logging_viewone_streamer: "Document Streaming Server Module-logging:",
		admin_logging_viewone_streamer_hover: "Alternativene for Document Streaming Server Module-logging gjelder bare hvis du aktiverte datastrømming for PDF- eller TIFF-filer i seksjonen <b>Daeja ViewONE</b> i administrasjonsverktøyet.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module-logging:",
		admin_logging_viewone_redaction_hover: "Alternativene for Permanent Redaction Server Module-logging gjelder bare hvis du har rettigheter til å bruke Redaction-modulen i Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Strøm PDF-filer:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Hvis du har store PDF-dokumenter i datalageret, kan du konfigurere visningsprogrammet til å strømme dokumentinnhold for å gjøre det raskere for brukerne å vise disse dokumentene. Hvis strømming ikke fungerer i miljøet, kan du deaktivere strømmingen.",
		admin_daeja_viewonepro_stream_tiff_documents: "Strøm TIFF-filer:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Hvis du har store TIFF-dokumenter i datalageret, kan du konfigurere visningsprogrammet til å strømme dokumentinnhold for å gjøre det raskere for brukerne å vise disse dokumentene. Hvis strømming ikke fungerer i miljøet, kan du deaktivere strømmingen.",
		admin_daeja_viewonepro_show_file_buttons: "Fil-knapper",
		admin_daeja_viewonepro_show_file_menus: "Fil-menyer",
		admin_daeja_viewonepro_enable_file_keys: "Fil-hurtigtaster",
		admin_daeja_viewonepro_file_keys_hover_help: "Oppgi om du vil at brukerne skal bruke tastatursnarveier for å arbeide med filer, for eksempel åpne eller lagre en fil. Hvis du vil vite mer om bestemte hurtigtaster, kan du lese beskrivelsen av FileKeys-parameteren i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Skriv ut-knapper",
		admin_daeja_viewonepro_show_print_menus: "Skriv ut-menyer",
		admin_daeja_viewonepro_enable_print_keys: "Skriv ut-hurtigtaster",
		admin_daeja_viewonepro_print_keys_hover_help: "Oppgi om du vil at brukerne skal bruke tastatursnarveier for å skrive ut filer, for eksempel skrive ut side eller dokument. Hvis du vil vite mer om bestemte hurtigtaster, kan du lese beskrivelsen av PrintKeys-parameteren i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Inverter-knapper",
		admin_daeja_viewonepro_annotation_tooltip: "Standard verktøytips for tilpasset annotasjon:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Skriv teksten som skal vises når det ikke er angitt noe verktøytips for en tilpasset annotasjon. Teksten kan inneholde utskiftbare tokener. For eksempel &quot;&lt;creator&gt; opprettet denne annotasjonen &lt;createdateonly&gt;.&quot; Hvis du vil vite mer om utskiftbare tokener, kan du lese om customAnnotationsToolTip-parameteren i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Bruk forhåndsdefinert tilpasset verktøytips",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Bruk systemdefinert tilpasset verktøytips i tekstfeltet nedenfor",
		admin_daeja_viewonepro_help_url: "Hjelp-URL:",
		admin_daeja_viewonepro_help_url_hover_help: "Oppgi URLen for websiden som inneholder hjelpedokumentasjonen for visningsprogrammet. Hjelpeknappen på visningsprogrammets verktøylinje og menyvalget Hjelp åpner websiden. Hvis du ikke oppgir en URL, vises ikke knappen og menypunktet Hjelp.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Ressurskontekst for bildestempel:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "tekst mangler",
		admin_daeja_viewonepro_route_docs: "Rut ikke støttet innhold til nettleseren:",
		admin_daeja_viewonepro_route_docs_hover_help: "Brukerne kan vise ikke støttede bildefiler ved å omdirigere dem til nettleseren, som åpner den riktige applikasjonen for å vise filen. For å åpne et Microsoft Word-dokument bruker nettleseren for eksempel Microsoft Word Viewer.",
		admin_daeja_viewonepro_scale: "Beste tilpassing av bilde:",
		admin_daeja_viewonepro_scale_best: "Beste tilpassing",
		admin_daeja_viewonepro_scale_ftow: "Tilpass til bredde",
		admin_daeja_viewonepro_scale_ftoh: "Tilpass til høyde",
		admin_daeja_viewonepro_enable_hotkeys: "Aktiver hurtigtaster:",
		admin_daeja_viewonepro_show_features: "Vis knapper og menyer:",
		admin_daeja_custom_settings: "Ekstra innstillinger:",
		admin_daeja_custom_settings_hover_help: "Du kan legge til andre parametere ved å oppgi parameternavnet og -verdien. Du kan for eksempel oppgi &quot;scrollbars&quot; og &quot;true&quot; hvis du vil at det skal vises rullefelt når bildet blir skalert til en størrelse som er større enn visningsområdet. Hvis du vil vite mer om parameternavn og -verdier, kan du slå opp i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Standard verktøytips for tilpasset annotasjon:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Skriv teksten som skal vises når det ikke er angitt noe verktøytips for en tilpasset annotasjon. Teksten kan inneholde utskiftbare tokener. For eksempel &quot;&lt;creator&gt; opprettet denne annotasjonen &lt;createdateonly&gt;.&quot; Hvis du vil vite mer om utskiftbare tokener, kan du lese om customAnnotationsToolTip-parameteren i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Bruk forhåndsdefinert tilpasset verktøytips",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Bruk systemdefinert tilpasset verktøytips i tekstfeltet nedenfor",
		admin_daeja_virtual_image_stamp_resource_context: "Ressurskontekst for bildestempel:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "tekst mangler",
		admin_daeja_virtual_license_path:"Bane til lisensfiler:",
		admin_daeja_virtual_license_path_hover_help:"Oppgi den fullstendige banen til katalogen som inneholder lisensfilene lic-server-virtual.v1 og lic-server.v1.",
		admin_default_license_path:"Bruk standard bane for lisensfiler",
		admin_license_path_specified:"Bruk tilpasset bane for lisensfiler",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Hurtigbufferkatalog:",
		admin_daeja_streamer_cache_root_hover_help: "Oppgi den fullstendige banen til katalogen der du vil lagre hurtigbufrede filer for raskere tilgang. Katalogen kan være på et hvilket som helst operativsystem eller enhet, for eksempel en nettverkskatalog, hvis den er synlig som et filsystem for IBM Content Navigator og IBM HTTP Server. Bruk en lokal katalog for å få bedre ytelse.",
		admin_daeja_streamer_settings: "Ekstra innstillinger:",
		admin_daeja_streamer_settings_hover_help: "Du kan legge til andre parametere ved å oppgi parameternavnet og -verdien. Du kan for eksempel oppgi “cookieAllowedDomainList” og en kommadelt liste med vertsservere.  Hvis du vil vite mer om parameternavn og -verdier, kan du slå opp i IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Innstillinger:",
		admin_daeja_redaction_settings_hover_help: "Du kan legge til andre parametere ved å oppgi parameternavnet og -verdien. Du kan for eksempel oppgi “burnIncrementalAnnotations” og ”true”. Hvis du vil vite mer om parameternavn og -verdier, kan du slå opp i IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Ny innstilling",
		admin_daeja_setting_dialog_title_edit: "Rediger innstilling",
		admin_daeja_setting_dialog_hover_help: "Legg til andre parametere ved å oppgi parameternavnet og -verdien. Du kan for eksempel oppgi “scrollbars” og “true” hvis du vil at det skal vises rullefelt når bildet blir skalert til en størrelse som er større enn visningsområdet.",
		admin_daeja_setting_dialog_field_hover_help: "Hvis du vil vite mer om parameternavn og -verdier, kan du slå opp i Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Daeja ViewONE Logging",
		admin_daeja_logging_trace: "Aktiver sporingslogging",
		admin_daeja_logging_trace_net: "Aktiver nettverkslogging",
		admin_daeja_logging_trace_annotations: "Aktiver annotasjonslogging",
		admin_daeja_logging_log_file: "Loggfil:",
		admin_daeja_logging_instructions: "Du kan bruke logging for feilsøking av problemer med Daeja ViewONE Professional og Daeja ViewONE Virtual. Hvis du vet at problemet oppstår for en bestemt funksjon, kan du avgrense loggingen til den funksjonen.",

		admin_v1pro_logging_trace_hover: "Bruk denne innstillingen til å feilsøke generelle problemer med visningsprogrammet.<br><br>Logginformasjonen blir skrevet til Java-konsollen på klientmaskinen. Du kan få tilgang til Java-konsollen fra kontrollpanelet (Windows) eller systeminnstillingene (Mac) for ditt operativsystem.",
		admin_v1pro_logging_trace_net_hover: "Bruk denne innstillingen til å feilsøke følgende problemer:<ul><li>Problemer med servertilkoblingen</li><li>Problemer med MIME-typer</li><li>Problemer med at filer er for lange</li></ul>I tillegg kan du bruke nettverkssporingslogging for å finne ut hvor det oppstår forsinkelser når du bruker Daeja ViewONE Professional.<br><br>Logginformasjonen blir skrevet til Java-konsollen på klientmaskinen. Du kan få tilgang til Java-konsollen fra kontrollpanelet (Windows) eller systeminnstillingene (Mac) for ditt operativsystem.",
		admin_v1pro_logging_trace_annotations_hover: "Bruk denne innstillingen til å feilsøke problemer med opprettelse, lagring eller innlasting av annotasjoner.<br><br>Logginformasjonen blir skrevet til Java-konsollen på klientmaskinen. Du kan få tilgang til Java-konsollen fra kontrollpanelet (Windows) eller systeminnstillingene (Mac) for ditt operativsystem.",

		admin_virtual_logging_trace_hover: "Bruk denne innstillingen til å feilsøke generelle problemer med visningsprogrammet.<br><br>Som standard blir logginformasjonen skrevet til filen virtual.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_virtual_logging_trace_net_hover: "Bruk denne innstillingen til å feilsøke følgende problemer:<ul><li>Problemer med servertilkoblingen</li><li>Problemer med MIME-typer</li><li>Problemer med at filer er for lange</li></ul>I tillegg kan du bruke nettverkssporingslogging for å finne ut hvor det oppstår forsinkelser når du bruker Daeja ViewONE Virtual.<br><br>Som standard blir logginformasjonen skrevet til filen virtual.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_virtual_logging_trace_annotations_hover: "Bruk denne innstillingen til å feilsøke problemer med opprettelse, lagring eller innlasting av annotasjoner.<br><br>Som standard blir logginformasjonen skrevet til filen virtual.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_virtual_logging_log_file_hover: "Hvis du aktiverer logging for visningsprogrammet, må du oppgi den fullstendige banen og navnet på loggfilen der du vil lagre logginformasjon.  Du bør gi loggfilen navnet virtual.log.",

		admin_streamer_logging_trace_hover: "Bruk denne innstillingen til å feilsøke generelle problemer med Document Streaming Server Module.<br><br>Som standard blir logginformasjonen skrevet til filen streamer.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_streamer_logging_trace_net_hover: "Bruk denne innstillingen til å feilsøke følgende problemer:<ul><li>Problemer med servertilkoblingen</li><li>Problemer med bestemte MIME-typer</li><li>Problemer med at filer er for lange</li></ul>I tillegg kan du bruke nettverkssporingslogging for å finne ut hvor det oppstår forsinkelser når du bruker Document Streaming Server Module.<br><br>Som standard blir logginformasjonen skrevet til filen streamer.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_streamer_logging_log_file_hover: "Hvis du aktiverer logging for Document Streaming Server Module, må du oppgi den fullstendige banen og navnet på loggfilen der du vil lagre logginformasjon.  Du bør gi loggfilen navnet streamer.log.",

		admin_redaction_logging_trace_hover: "Bruk denne innstillingen til å feilsøke generelle problemer med Permanent Redaction Server Module.<br><br>Som standard blir logginformasjonen skrevet til filen redacttofile.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_redaction_logging_trace_net_hover: "Bruk denne innstillingen til å feilsøke følgende problemer:<ul><li>Problemer med servertilkoblingen</li><li>Problemer med bestemte MIME-typer</li><li>Problemer med at filer er for lange</li></ul>I tillegg kan du bruke nettverkssporingslogging for å finne ut hvor det oppstår forsinkelser når du bruker Permanent Redaction Server Module.<br><br>Som standard blir logginformasjonen skrevet til filen redacttofile.log i config-underkatalogen i IBM Content Navigator-installeringskatalogen.",
		admin_redaction_logging_log_file_hover: "Hvis du aktiverer logging for Permanent Redaction Server Module, må du oppgi den fullstendige banen og navnet på loggfilen der du vil lagre logginformasjon.  Du bør gi loggfilen navnet redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfigurer funksjoner for visningsprogrammer og tjenester.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Hvis du bruker webklienten for tilkobling til ett eller flere Content Manager OnDemand-datalagre, må du oppgi informasjon som OnDemand Web Enablement Kit trenger for å fungere på riktig måte. Denne informasjonen deles av alle Content Manager OnDemand-datalagre som er konfigurert for webklienten.",
		admin_ondemand_language: "Språk:",
		admin_ondemand_tempdir: "Midlertidig ODWEK-katalog:",
		admin_ondemand_tracegrp: "ODWEK-sporing",
		admin_ondemand_tracedir: "Sporingskatalog:",
		admin_ondemand_tracelevel: "Sporingsnivå:",
		admin_ondemand_tracelevel_0: "0 - Ingen logging",
		admin_ondemand_tracelevel_1: "1 - Logging av feilmeldinger",
		admin_ondemand_tracelevel_2: "2 - Logging av feil- og advarselsmeldinger",
		admin_ondemand_tracelevel_3: "3 - Logging av feil-, advarsels- og informasjonsmeldinger",
		admin_ondemand_tracelevel_4: "4 - Alle meldinger blir registrert, inkludert funksjonssporing",
		admin_ondemand_max_trace_filesize: "Maksimal størrelse på sporingsfil:",
		admin_ondemand_max_trace_filesize_unlimited: "Ubegrenset",
		admin_ondemand_max_trace_filesize_limited: "Begrenset (anbefalt)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Denne verdien er utenfor gyldig område. Verdien må være et heltall mellom 1 og 1 000 000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF-installeringskatalog:",
		admin_ondemand_language_hover: "Oppgi språket for meldinger som returneres fra ODWEK.",
		admin_ondemand_tempdir_hover: "Oppgi katalogen der OnDemand Web Enablement Kit lagrer midlertidige filer under behandlingen. Du må oppgi fullstendig bane til en eksisterende katalog på webapplikasjonsserveren.",
		admin_ondemand_tracedir_hover: "Oppgi katalogen der du vil lagre ODWEK-sporingsfilen arswww.trace. Du må oppgi fullstendig bane til en eksisterende katalog på webapplikasjonsserveren.",
		admin_ondemand_tracelevel_hover: "Oppgi nivået av logginformasjon som skrives til filen arswww.trace. Logging av feilmeldinger registrerer den minste mengden av loggingsinformasjon. Alle meldinger blir registrert, inkludert funksjonssporing registrerer den største mengden av loggingsinformasjon.<br /><br />Ikke oppgi Alle meldinger blir registrert, inkludert funksjonssporing i et produksjonsmiljø med mindre IBMs programvarestøtte. ber deg om å gjøre dette.",
		admin_ondemand_max_trace_filesize_hover: "Oppgi om du vil tillate at ODWEK-sporingsfilen vokser til ubegrenset størrelse, eller om du vil at webklienten skal opprette nye loggfiler når loggfilen når en bestemt størrelse. Standardverdien er å tillate at sporingsloggfilen vokser til webapplikasjonen blir stoppet på webapplikasjonsserveren.",
		admin_ondemand_max_trace_unlimited_hover: "Velg dette alternativet hvis du vil at ODWEK-sporingsinformasjonen skal skrives til én enkelt loggfil. Hvis du velger dette alternativet, kan du få en loggfil som er for stor til å kunne åpnes med et standard visningsprogram for filer.",
		admin_ondemand_max_trace_limited_hover: "Velg dette alternativet hvis du vil at ODWEK-sporingsinformasjonen skal skrives til mindre loggfiler. Når en loggfil når den maksimale størrelsen, endres navnet på den gjeldende loggen slik at den inneholder datoen (arswww.trace.ÅÅÅÅMMDD.TTMMSS), og det blir opprettet en ny loggfil.",
		admin_ondemand_afp2pdf_installdir_hover: "Hvis du vil bruke verktøyet AFP2PDF Transform til å konvertere AFP-dokumenter til PDF-dokumenter for visning og utskrift, oppgir du katalogen der AFP2PDF Transform er installert på webapplikasjonsserveren. For eksempel: C: \\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administratorer",
		admin_adminusers_heading_text_multi: "Du må oppgi hvilke brukere som har administratorrettigheter i webklienten. Bare administratorer kan logge seg på administrasjonsskrivebordet.<br /><br />Viktig: Bruker-IDene til IBM Content Navigator-administratorene må samsvare med følgende:<ul><li>Bruker-IDer som finnes på webapplikasjonsserveren. Bruker-IDene trenger ikke å være administratorer på webapplikasjonsserveren.</li><li>Bruker-IDer som finnes i standard datalager som er konfigurert for hvert skrivebord som inneholder administrasjonsfunksjonen.</li></ul>",
		admin_adminusers_heading_text_single: "Du må oppgi hvilke brukere som har administratorrettigheter i webklienten. Bare administratorer kan logge seg på administrasjonsskrivebordet.<br /><br />Viktig: Bruker-IDene til IBM Content Navigator-administratorene må samsvare med bruker-IDer som finnes på webapplikasjonsserveren. Bruker-IDene trenger ikke å være administratorer på webapplikasjonsserveren.",
		admin_adminusers_newuser: "Ny administrator:",
		admin_adminusers_add: "Legg til",
		admin_adminusers_remove: "Fjern",
		admin_adminusers_listheading: "Administratorer",
		admin_adminusers_nameInvalid: "Verdien kan ikke dupliseres.",

		admin_sync_server_instructions: "<b>Bare FileNet P8-brukere:</b> Hvis du har tenkt å aktivere Sync Services for ett eller flere datalagre, må du konfigurere webklienten til å bruke Sync Services. Sync Services-konfigurasjonen deles av alle datalagrene i miljøet.",
		admin_settings_instructions: "Verdiene du oppgir på flippen Innstillinger, gjelder for alle skrivebord i konfigurasjonen.",
		admin_autocomplete: "Fyll ut brukernavn automatisk:",
		admin_autocomplete_hover: "Oppgi om du vil at webklienten skal lagre brukernavn i nettleserinformasjonskapsler slik at nettleseren automatisk kan fylle ut brukernavn i webklienten ved pålogging.<br><br>Hvis du aktiverer dette alternativet, blir brukernavnet til den siste brukeren som logget seg på webklienten, lagret i nettleserinformasjonskapsler og vist automatisk på påloggingssiden når en bruker åpner webklienten.<br><br>Du bør deaktivere dette alternativet hvis brukerne åpner applikasjonen fra delte arbeidsstasjoner, eller hvis du ikke ønsker å lagre brukernavn i informasjonskapsler.<br /><br />Dette alternativet gjelder ikke for mobilapplikasjoner eller tilpassede applikasjoner.",
		admin_autocomplete_enable: "Aktiver",
		admin_autocomplete_disable: "Deaktiver",
		admin_cultural_collation: "Bruk språkmiljøspesifikk sortering:",
		admin_cultural_collation_hover: "Hvis du aktiverer språkmiljøspesifikk sortering, blir sorteringen utført på datalagerserveren. Dette kan redusere ytelsen til webklienten.<br><br>Hvis du deaktiverer språkmiljøspesifikk sortering, kan det øke ytelsen til webklienten.",
		admin_cultural_collation_enable: "Aktiver",
		admin_cultural_collation_disable: "Deaktiver",
		admin_base_ui_style: "Temastil",
		admin_base_ui_style_hover: "Oppgi stilen for standardtemaet som brukes i webklienten. Denne stilen brukes bare på skrivebord som bruker <b>Standard</b>-temaet (som angitt på flippen <b>Utseende</b> i skrivebordskonfigurasjonen).<br/></br><b>Begrensning:</b> Hvis skrivebordskonfigurasjonene dine bruker tilpassede temaer, er de tilpassede temaene basert på den klassiske stilen, uansett hvilken stil du velger.",
		admin_base_ui_style_classic: "Klassisk",
		admin_access_control_access: "Begrens tilgang til bestemte brukere og grupper",
		admin_access_control_access_show: "Vis tilgangskontrolldata",
		admin_access_control_access_enable: "Ja",
		admin_access_control_access_disable: "Nei",
		admin_mobile_access: "Tillat tilgang fra mobilapplikasjoner",
		admin_mobile_access_hover: "Som standard har brukerne tilgang til webklienten fra IBM Content Navigator iOS-applikasjonen.<br /><br />Viktig: Hvis du hindrer at brukerne får tilgang til webklienten fra iOS-applikasjonen, har brukerne fortsatt tilgang til webklienten fra nettleserne på sine mobilenheter og fra tilpassede applikasjoner som er skrevet ved hjelp av IBM Content Navigator-APIer og fungerer på mobilenheter.",
		admin_mobile_access_enable: "Ja",
		admin_mobile_access_disable: "Nei",
		admin_error: "Feilmeldingsinformasjon:",
		admin_error_custom: "Søk i tilpasset støtteinnhold",
		admin_error_default: "Søk i IBM Support-innhold <BDO DIR='LTR'>(</BDO>standard<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Oppgi hvor du vil lede brukerne for mer informasjon når de får en feilmelding. Du kan lede brukerne til informasjonen i IBM Support Portal, eller til en intern ressurs, for eksempel brukerstøtte.",
		admin_error_URL: "URL-prefiks:",
		admin_error_URL_hover: "Oppgi URL for ressursen du vil lede brukerne til når de får en feil, for eksempel brukerstøtte. Eksempel: http://localhost:portnummer. Webklienten tilføyer nummeret på meldingen til URLen.",
		admin_prompt_close_without_save: "Vil du lukke uten å lagre endringene?",
		admin_object_expiration_time: "Oppdateringsintervall for hurtigbuffer (i minutter):",
		admin_object_expiration_time_hover: "Du kan øke tiden som konfigurasjonsobjekter, for eksempel skrivebord, blir beholdt i hurtigbufferen for å forbedre webklientens ytelse. Standard er 10 minutter. Maksimal tid er 1440 minutter (1 dag).<br /><br />Du må starte webapplikasjonen på nytt for å ta i bruk endringene.<br /><br />Hvis IBM Content Navigator er implementerte i et klyngemiljø med høy tilgjengelighet, vil ikke eventuelle endringer av konfigurasjonsobjektene bli spredt til nodene i klyngen før hurtigbufferen blir oppdatert.",
		admin_temp_file_cleanup_interval: "Skanneintervall for rensing av visningsprogrammets hurtigbuffer (i timer):",
		admin_temp_file_cleanup_interval_hover: "Planlegg hvor ofte den midlertidige katalogen blir skannet for å finne og slette utløpte midlertidige filer. Som standard blir den midlertidige katalogen skannet hver sjette time. Du kan oppgi 6-48 timer.",
		admin_temp_file_expiration_interval: "Utløp av visningsprogrammets hurtigbuffer (i timer):",
		admin_temp_file_expiration_interval_hover: "Oppgi hvor lenge midlertidige filer som er knyttet til aktiviteter i visningsprogrammet, blir liggende i nettleserens hurtigbuffer. Som standard utløper disse midlertidige filene etter 24 timer. Du kan oppgi 12-48 timer.",
		admin_encryption_key_hover: "Nøkkel som brukes til Navigator-krypteringsfunksjoner.",
		admin_encryption_key: "Krypteringsnøkkel:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Branding",
		admin_mobile_branding_main_color: "Hovedfarge:",
		admin_mobile_branding_secondary_color: "Sekundærfarge:",
		admin_mobile_device_title: "MaaS360 Management",
		admin_mobile_device_enable_maas360: "Aktiver MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Dynamisk hjelp for Aktiver MaaS360 plasseres her",
		admin_mobile_device_maas360_developer_id: "Utvikler-ID for MaaS360:",
		admin_mobile_device_maas360_license_key: "MaaS360-lisensnøkkel:",
		admin_mobile_settings_title: "Innstillinger",
		admin_mobile_email_address_hover_help: "E-postadressen brukes i mobilapplikasjonen når en bruker klikker på \"Send feilrapport.\"",
		admin_mobile_email_address: "E-postadresse:",
		admin_invalid_email_address_message: "E-postadressen du oppgav, har ikke riktig format. Oppgi riktig adresse og prøv igjen.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Enkelte data er ikke gyldige.",
		admin_configuration_parameters: "Konfigurasjonsparametere",
		admin_configuration_optional_features: "Valgfrie funksjoner",
		admin_configuration_optional_features_p8_instructions: "Velg hvilke funksjoner du vil aktivere på dette datalageret.<p><b>Viktig:</b> Hvis du aktiverer en funksjon som installerer et tilleggsprogram på datalageret, må du være koblet til datalageret som en administrator for Content Platform Engine eller Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Velg hvilke funksjoner du vil aktivere på dette datalageret.<p><b>Viktig:</b> Disse funksjonene endrer datamodellen på datalageret. Hvis du vil aktivere dem, må du være koblet til datalageret som en bibliotekserveradministrator.</p>",
		admin_system_properties: "Systemegenskaper",
		admin_system_properties_for: "Systemegenskaper for:",
		admin_available_properties: "Tilgjengelige egenskaper",
		admin_displayed_properties: "Viste egenskaper",
		admin_selected_properties: "Valgte egenskaper",
		admin_selected_filtered_properties: "Skjulte egenskaper",
		admin_available_operators: "Viste operatorer",
		admin_selected_filtered_operators: "Skjulte operatorer",
		admin_system_properties_shown: "Viste egenskaper",
		admin_system_properties_hidden: "Skjulte egenskaper",
		admin_available_menu_items: "Tilgjengelige handlinger:",
		admin_selected_menu_items: "Valgte handlinger:",
		admin_menu_global: "Gjelder når ingen elementer er valgt:",
		admin_menu_multiple_document: "Gjelder når flere elementer er valgt:",
		admin_menu_privileges: "Nødvendige rettigheter:",
		admin_menu_plugin: "Plugin-modul:",
		admin_menu_repository_types: "Datalagertyper:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Skilletegn",
		admin_browse: "Bla gjennom",
		admin_search: "Søk",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Rollebasert retusjering",
		admin_connections_library_enabled: "IBM Connections aktivert",
		admin_office_conf: "Rediger integrasjon",
		admin_desktop_conf_label: "Skrivebordskonfigurasjon",
		admin_ms_office_conf_label: "Office-konfigurasjon",
		admin_workflows: "Arbeidsflyt",
		admin_file_types: "Filtyper",
		admin_file_type_contains_label: "Filtype inneholder",
		admin_name_propepty: "Navn",
		admin_cm_name_property_default: "Bruk standardnavn",
		admin_cm_name_property_default_hover: "Som standard brukes egenskapen for hierarkisk ICM-navn (ICM$NAME) som elementnavn hvis egenskapen er definert for elementet.  Hvis egenskapen for hierarkisk ICM-navn (ICM$NAME) ikke er tilgjengelig, blir den første egenskapen som er merket som \"represents\", brukt som elementnavn.",
		admin_cm_name_property: "Oppgi elementnavnegenskap",
		admin_cm_name_property_hover: "Oppgi hvilken egenskap som skal brukes som navn for dokumenter og mapper.",
		admin_name_property: "Navneegenskap:",
		admin_doc_name_property: "Dokumentnavnegenskap:",
		admin_doc_name_property_hover: "Oppgi hvilken egenskap som skal brukes som dokumentnavn.",
		admin_folder_name_property: "Mappenavnegenskap:",
		admin_folder_name_property_hover: "Oppgi hvilken egenskap som skal brukes som mappenavn.",
		admin_all_searches_label: "Antall søk som skal vises:",
		admin_unlimited: "Ingen grense",
		admin_limit: "Begrens til",
		admin_repository: "Datalager:",
		admin_application_space: "Applikasjonsområde",
		admin_available_application_spaces: "Tilgjengelige applikasjonsområder:",
		admin_selected_application_spaces: "Valgte applikasjonsområder:",
		admin_label: "Etikett",
		admin_repository_box_placeholder: "Velg et Box-datalager",
		admin_repository_placeholder: "Velg et datalager",
		admin_search_match: "Samsvar:",
		admin_search_match_all: "Samsvar med alle søkekriteriene",
		admin_search_match_any: "Samsvar med hvilke som helst av søkekriteriene",
		admin_search_match_hover: "Oppgi hvilket alternativ som velges som standard på menyen <b>Egenskapsalternativer</b>.",

		admin_repository_redactions_instructions: "Du kan konfigurere rollebaserte retusjeringer for dette datalageret.",
		admin_repository_redaction_policies_description: "Du kan opprette og administrere retusjeringspolicyer, som knytter retusjeringsårsaker til brukere og grupper som kan lese sensitive data og kan redigere annotasjoner som gjør at disse sensitive dataene ikke blir vist.",
		admin_repository_redaction_roles_instruction: "Du kan opprette en retusjeringsrolle for å knytte de oppgitte brukerne eller gruppene med enten muligheten til å lese sensitive data eller muligheten til å redigere annotasjoner som hindrer at sensitive data blir vist. Retusjeringsrollen må være knyttet til en retusjeringsårsak i en retusjeringspolicy før disse brukerne og gruppene kan lese dataene eller redigere annotasjonene.",
		admin_repository_redaction_reasons_instruction: "Du kan konfigurere retusjeringsårsaker for datalageret ditt.",
		admin_repository_redaction_policies: "Konfigurasjon for retusjeringspolicy",
		admin_repository_redaction_roles: "Konfigurasjon for retusjeringsroller",
		admin_repository_redaction_reasons: "Konfigurasjon for retusjeringsårsaker",
		admin_repository_redaction_roles_type: "Type",
		admin_repository_redaction_roles_type_hover: "En redigerer kan opprette, endre eller slette bestemte typer rollebaserte retusjeringer, mens en leser kan se bestemte typer sensitive data.",
		admin_repository_redaction_roles_type_editor: "Redigerer",
		admin_repository_redaction_roles_type_viewer: "Leser",
		admin_repository_redaction_roles_membership: "Medlemskap",
		admin_repository_redaction_roles_membership_hover: "Velg redigererne du vil skal ha denne rollen.",
		admin_repository_redaction_roles_user_group_hover: "Søk etter brukerne og gruppene, eller velg redigererne, du vil skal ha denne rollen.",
		admin_repository_redaction_roles_description: "Du kan opprette og administrere retusjeringsroller, som knytter brukere og grupper til muligheten for å lese sensitive data og redigere annotasjoner som hindrer at sensitive data blir vist.",
		admin_repository_redaction_new: "Ny retusjeringsrolle",
		admin_repository_redaction_role_avail_editors: "Tilgjengelige retusjeringsredigerere",
		admin_repository_redaction_role_avail_users: "Tilgjengelige brukere",
		admin_repository_redaction_role_avail_groups: "Tilgjengelige grupper",
		admin_repository_redaction_role_selected_editors: "Valgte retusjeringsredigerere",
		admin_repository_redaction_role_selected_users_groups: "Valgte brukere og grupper",
		admin_repository_redaction_role_add_editor: "Nye redigerere...",
		admin_repository_redaction_role_access_type: "Tilgang",
		admin_repository_redaction_role_access_type_access: "Tillat",
		admin_repository_redaction_role_access_type_no_access: "Avvis",
		admin_repository_redaction_role_users: "Brukere",
		admin_repository_redaction_role_groups: "Grupper",
		admin_repository_redaction_role_editors: "Redigerere",
		admin_delete_confirmation_redaction_roles: "Vil du slette den valgte retusjeringsrollen?",
		admin_repository_edit_redaction_role: "Retusjeringsrolle: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Standardtilgang",
		// RBA
		desktop_user_group_acl: "Skrivebordsadministratorer",
		desktop_user_group_remove: "Fjern",
		desktop_rba_membership: "Medlemskap:",
		desktop_rba_membership_list_label: "Navn",
		admin_repository_redaction_policy_hover: "Oppgi en beskrivelse som vil gjøre det mulig for brukerne å skille denne policyen fra de andre policyene.",
		admin_repository_new_redaction_policy: "Ny retusjeringspolicy",
		admin_repository_policy_name: "Policynavn",
		admin_repository_reason_redactions: "Retusjeringsårsaker:",
		admin_repository_role_editors: "Redigerere",
		admin_repository_role_viewers: "Lesere",
		admin_repository_redaction_policy_instruction: "Du kan opprette en retusjeringspolicy for å knytte det valgte retusjeringsårsakene til både retusjeringsredigerere og retusjeringslesere.",
		admin_repository_redaction_reasons_hover: "Velg en eller flere typer sensitive data som du ikke vil at de fleste brukere skal kunne se, for eksempel personopplysninger, forretningshemmeligheter eller konfidensiell eller rettighetsbeskyttet informasjon.",
		admin_repository_readaction_available_reasons: "Tilgjengelige årsaker",
		admin_repository_readaction_selected_reasons: "Valgte årsaker",
		admin_repository_readaction_new_reason: "Ny årsak...",
		admin_repository_redeaction_reasons: "Retusjeringsårsaker:",
		admin_repository_readaction_editor_permmission: "Retusjeringsredigerere:",
		admin_repository_redaction_editors_hover: "Velg rollene som kan opprette og endre retusjeringen av de valgte årsakene.",
		admin_repository_readaction_new_editor_role: "Ny redigererrolle...",
		admin_repository_readaction_available_editors: "Tilgjengelige redigererroller",
		admin_repository_readaction_selected_editors: "Valgte redigererroller",
		admin_repository_readaction_viewer_permmission: "Retusjeringslesere:",
		admin_repository_redaction_viewers_hover: "Velg rollene som kan se sensitive data av de valgte årsakene. Retusjeringen brukes ikke for brukere og grupper med disse rollene.",
		admin_repository_readaction_new_viewer_role: "Ny leserrolle...",
		admin_repository_readaction_available_viewers: "Tilgjengelige leserroller",
		admin_repository_readaction_selected_viewers: "Valgte leserroller",
		admin_repository_reason_redactions_header: "Retusjeringsårsaker",
		admin_delete_confirmation_redaction_policy: "Vil du slette den valgte retusjeringspolicyen?",
		admin_role_type_repository: "Datalager",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Mal",
		admin_role_type_teamspace: "Grupperom",
		admin_role_type_author: "Redigerer",
		admin_role_type_user: "Leser",
		admin_collaboration_services_instructions: "Hvis du har IBM Connections og en FileNet Collaboration Services-webapplikasjon, kan du konfigurere fellesskapsgrupperom og aktivitetsstrømmer for datalageret.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfigurasjon av fellesskapsbibliotek",
		admin_collaboration_community_instruction: "Du kan konfigurere et datalager i IBM FileNet P8-domenet for å lagre IBM Connections-fellesskapsbiblioteker (også kalt grupperom). Når brukere oppretter et fellesskapsbibliotek via IBM Connections, blir det lagret i datalageret som er utpekt som fellesskapsbibliotekdatalager.",
		admin_collaboration_community_teamspaces: "Bruke dette datalageret for fellesskapsbiblioteker:",
		admin_collaboration_community_teamspaces_hover: "Du kan bruke bare ett datalager i IBM FileNet P8-domene til å lagre nye fellesskapsbiblioteker. Hvis du aktiverer dette datalageret og du har et eksisterende datalager, blir det eksisterende datalageret deaktivert. Alle eksisterende biblioteker vil imidlertid bli liggende i det gjeldende datalageret.",
		admin_collaboration_connections_anonymous: "Tillat anonym tilgang til felles innhold:",
		admin_collaboration_connections_anonymous_hover: "Hvis IBM Connections-serveren inneholder felles eller styrte fellesskap, kan du konfigurere FileNet Collaboration Services for å tillate brukerne å bla gjennom og laste ned innhold fra bibliotekene i disse fellesskapene uten å måtte logge seg på først.<br><br>Brukere som får tilgang til fellesskapsbiblioteker anonymt, kan ikke opprette, endre eller slette innhold.<br><br><b>Viktig:</b> Du må oppgi en IBM FileNet P8 LDAP-bruker som den anonyme brukeren og konfigurere den brukeren med rollen <b>Anonymous</b> i WebSphere Application Server.",
		admin_collaboration_connections_url: "IBM Connections-URL:",
		admin_collaboration_connections_url_hover: "Oppgi URLen til IBM Connections-serveren med formatet http://IBMConnectionsServer:portnummer.  Hvis IBM Connections er konfigurert for å bruke IBM HTTP Server, kan du utelate portnummeret fra URLen.<br><br>URLen må være tilgjengelig for IBM Connections-brukerne fordi dette er linken som FileNet Collaboration Services bruker til å opprette linker til dokumentlandingssider i IBM Connections.",
		admin_collaboration_connections_url_http_use: "Bruk IBM Connections-URL",
		admin_collaboration_connections_url_https_use: "Bruk IBM Connections HTTPS-URL",
		admin_collaboration_connections_url_specify: "Oppgi URL",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS-URL:",
		admin_collaboration_connections_url_https_hover: "Hvis IBM Connections er konfigurert for å bruke SSL, oppgir du HTTPS-URLen for IBM Connections-serveren med formatet https://IBMConnectionsServer:portnummer.  Hvis IBM Connections er konfigurert for å bruke IBM HTTP Server, kan du utelate portnummeret fra URLen.",

		admin_collaboration_connections_gadget_url: "URL for gadgeter for IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL for henting for IBM Connections:",
		admin_collaboration_connections_security: "Fellesskapsadministratorer:",
		admin_collaboration_connections_security_hover: "Oppgi brukerne og gruppene som kan administrere innhold i fellesskapsbiblioteker.<br><br>Globale administratorer kan opprette, endre, slette og gi tilgang til fellesskapsbiblioteker og innholdet i fellesskapsbiblioteker. Når du oppgir en bruker som global administrator, får brukeren ClbGlobalAdministrator-rettigheter i datalageret.<br><br>Globale gjennomgangsadministratorer kan godkjenne og avvise innhold som gjennomgås for publisering i et fellesskapsbibliotek. Når du oppgir en bruker som global gjennomgangsadministrator, får brukeren ClbGloablReviewAdministrator-rettigheter i datalageret.",

		admin_collaboration_connections_admins: "Globale administratorer",
		admin_collaboration_connections_admins_review: "Globale gjennomgangsadministratorer",
		admin_collaboration_connections_seedlist: "Indekser innhold i fellesskapsbibliotek:",
		admin_collaboration_connections_seedlist_hover: "Oppgi om du vil at IBM Connections skal crawle fellesskapsbibliotekene i dette datalageret for å opprette en søkeindeks. Opprettelsen av en indeks kan påvirke ytelsen til datalageret.<br><br>Hvis Social Collaboration Search Indexing-utvidelsene er installert i datalageret, er dette alternativet aktivert som standard. Hvis Social Collaboration Search Indexing-utvidelsene ikke er installert i datalageret,  blir tillegget installert i datalageret når du aktiverer dette alternativet",
		admin_collaboration_activity_stream: "Konfigurasjon av aktivitetsstrømhendelse",
		admin_collaboration_activity_stream_label: "Overfør hendelsesinformasjon til IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Oppgi om du vil overføre informasjon om hendelsen, for eksempel opprettelse av dokumenter, utsjekkinger, innsjekkinger, kommentarer, koder og delinger, til IBM Connections.<br><br><b>Viktig:</b> Overføring av varsler til IBM Connections kan påvirke ytelsen til datalageret.",

		admin_collaboration_activity_stream_instruction: "Du kan konfigurere dette datalageret for å overføre informasjon om hendelser, for eksempel kommentarer og dokumentgodkjennelser, til IBM Connections. Hendelser blir vist på siden <b>Nyeste oppdateringer</b> i IBM Connections-fellesskap. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorer hendelsesinformasjon for bestemte brukere og grupper:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Du kan ignorere hendelser som er generert av bestemte brukere eller grupper, for eksempel administratorer eller systemkontoer, for å redusere antall varsler som brukerne ser. Hvis du for eksempel migrerer innhold, kan du ønske å oppgi at hendelser som blir generert av kontoen som blir brukt til migreringen, blir ignorert.",
		admin_collaboration_activity_stream_userid: "Brukernavn for IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Oppgi systemkontoen som Content Platform Engine vil bruke til å autentisere og sende hendelsesinformasjon til IBM Connections. Brukeren må ha rollen <b>trustedExternalApplication</b> i applikasjonen Widgetbeholder i IBM Connections.<br><br><b>Tips:</b> Som standard har IBM Connections-administratoren riktige rettigheter. Du kan bruke administrator-IDen som brukernavn",
		admin_collaboration_activity_stream_password: "Brukerpassord for IBM Connections:",

		admin_help_url: "URL til sluttbrukerhjelp:",
		admin_help_url_hover: "<b>Viktig merknad:</b> IBM Knowledge Center Customer Installed vil ikke bli oppdatert fra og med IBM Content Navigator versjon 3.0.0. Kontakt kundeservice for å få vite mer om bruk av tilpasset hjelp.<br><br>Fra og med IBM Content Navigator versjon 3.0.0 går URLen for sluttbrukerhjelpen til IBM Knowledge Center. URLen for IBM Knowledge Center er: http://www.ibm.com/support/knowledgecenter.<br><br>Hvis du vil fortsette å bruke en tidligere versjon av IBM Knowledge Center Customer Installed, må du oppgi URLen for den forekomsten av IBM Knowledge Center Customer Installed som ble distribuert av IBM Content Navigator Configuration and Deployment Tool. URLen må være tilgjengelig for klientmaskiner. URLen har formatet http://servernavn:portnummer/kc.<br><br>Du kan få servernavnet og portnummeret fra filen console.log i underkatalogen KnowledgeCenter/logs i IBM Content Navigator-installeringskatalogen.",

		admin_help_default: "Bruk standard hjelp fra IBM",
		admin_custom_help: "Bruk et tilpasset hjelpesystem",
		admin_help_kc: "Bruk tilpasset hjelp i IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Viktig merknad:</b> IBM Knowledge Center Customer Installed vil ikke bli oppdatert fra og med IBM Content Navigator versjon 3.0.0. Kontakt kundeservice for å få vite mer om bruk av tilpasset hjelp.<br><br>Hvis du vil fortsette å bruke en tidligere versjon av IBM Knowledge Center Customer Installed, velger du dette alternativet for å fortsette å legge til innhold i den forekomsten av IBM Knowledge Center Customer Installed som du tidligere har distribuert.",
		admin_help_taxonomy: "Taksonomikode:",
		admin_help_taxonomy_hover: "Oppgi taksonomikoden for din tilpassede hjelp.<br><br>Taksonomikoden for IBM Content Navigator er SSEUEX. Hvis du vil vise hjelpen din under et annet produktnavn i IBM Knowledge Center Customer Installed, må du legge til en unik taksonomikode i filen KC_taxonomy.ditamap i katalogen KnowledgeCenter/usr/taxonomy under IBM Content Navigator-installeringskatalogen.",
		admin_help_context: "Hjelpekontekst:",
		admin_help_context_hover: "Oppgi konteksten for din tilpassede hjelp.<br><br>Hjelpen for IBM Content Navigator ligger i katalogen KnowledgeCenter/usr/content/com.ibm.usingeuc.doc under IBM Content Navigator-installeringskatalogen. Konteksten for standardhjelpen er com.ibm.usingeuc.doc. Hvis du vil bruke tilpasset hjelp, legger du til innholdet i en ny underkatalog under katalogen KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Landingsside:",
		admin_help_welcome_hover: "Oppgi navnet på emnet du vil bruke som landingsside når brukerne benytter hjelpen. Du må opprette en egenskapsfil som angir plasseringen av landingssiden, og legge til egenskapsfilen i katalogen KnowledgeCenter/usr/conf under IBM Content Navigator-installeringskatalogen.",

		admin_settings_mimetype_extensions_jsonfile: "JSON-fil for MIME-typeutvidelser:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Kontroller JSON-filnavnet og den fullstendige banen til filen. Filen kan være en generell fil fra filsystemet eller en URL som peker til JSON-filen.  <br><br>JSON-filinnholdet er en matrise for mime-typedefinisjoner. <br><br>En Mime-typedefinisjon inkluderer fire nøkler: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". De første to nøklene, \"mimeTypes\" og \"extensions\", er obligatoriske, og de kan være strengmatriser som er atskilt av \",\". De to siste nøklene, \"fileType\" og \"iconName\", er valgfrie. <br><br>For  eksempel: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfigurasjon av oppgavestyrer",
		admin_taskmanager_service: "Oppgavestyrertjeneste:",
		admin_taskmanager_service_hover: "Oppgi om du vil bruke oppgavestyrertjenesten til å opprette og kjøre asynkrone oppgaver. <br><br>Hvis du endrer denne innstillingen, må du starte IBM Content Navigator-webapplikasjonen på nytt for at endringene skal tre i kraft.",
		admin_taskmanager_url: "Oppgavestyrertjeneste-URL:",
		admin_taskmanager_url_hover: "Oppgi URLen som andre applikasjoner kan bruke til å kommunisere med oppgavestyrertjenesten. URLen har formatet http://servernavn:portnummer/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Loggkatalog for oppgavestyrer:",
		admin_taskmanager_logdirectory_hover: "Som standard blir loggfilene for oppgavestyrertjenesten skrevet til den samme katalogen som loggfilene for webapplikasjonsserveren. <br><br>Hvis du vil at logginformasjonen skal skrives til en annen katalog på IBM Content Navigator-serveren, oppgir du den fullstendige banen til katalogen der du vil lagre loggfilene som blir generert av oppgavestyrerkomponenten. <br><br>Hvis du endrer denne innstillingen, må du starte IBM Content Navigator-webapplikasjonen på nytt for at endringene skal tre i kraft.",
		admin_taskmanager_heartBeatMonitor: "Hjerteslagovervåking for klynge",
		admin_taskmanager_heartBeatMonitor_hover: "Bare for klyngemiljøer med høy tilgjengelighet. Hvis du aktiverer dette alternativet, omdirigerer oppgavestyrertjenesten oppgaver fra noder som i øyeblikket er nede, til noder som er i gang. <br><br>Hvis du endrer denne innstillingen, må du starte IBM Content Navigator-webapplikasjonen på nytt for at endringene skal tre i kraft.",

		admin_syncserver_title: "Konfigurasjon av synkroniseringsserver",
		admin_syncserver_enable: "Sync Services:",
		admin_syncserver_enable_hover: "Oppgi om du vil at brukerne som benytter dette skrivebordet, skal kunne synkronisere elementene sine på tvers av arbeidsstasjoner og mobile enheter.<br><br><b>Viktig:</b> Hvis du vil bruke denne funksjonen, må du også utføre følgende oppgaver:<ul><li>Oppgi <b>Felles Sync Services-URL</b> i seksjonen <b>Sync Services</b> i administrasjonsverktøyet.</li><li>Legg til et datalager som Sync Services er aktivert for på dette skrivebordet.</li></ul>Hvis du deaktiverer dette alternativet, men legger til et datalager som Sync Services er aktivert for på dette skrivebordet, blir innstillingen på datalageret ignorert.",
		admin_mobileqr_enable: "Vis QR-kode for IBM Navigator på påloggingsside:",
		admin_mobileqr_enable_hover: "Aktiver dette alternativet hvis du vil vise QR-koden for IBM Navigator-mobilapplikasjonen på påloggingssiden for webklienten.<br><br>Når brukerne skanner QR-koden, blir de tatt til det riktige applageret for enheten sin, der de kan laste ned IBM Navigator-mobilapplikasjonen.",

		admin_streamlineservice_enable: "Edit Service:",
		admin_streamlineservice_enable_hover: "Bare for FileNet P8-brukere. Aktiver dette alternativet hvis du vil at skrivebordsbrukere skal kunne legge til og redigere dokumenter på en enkel måte fra applikasjonene på datamaskinen sin. <br><br>For å bruke denne innstillingen må du også gjøre følgende: <ul><li>Aktiver Edit Service på ett eller flere datalagre som er knyttet til dette skrivebordet</li><li>Installer IBM Content Navigator Edit-klienten på brukernes arbeidsstasjoner</li></ul>",

		admin_repository_general_instructions: "Du må koble til datalageret før du konfigurerer parametere, systemegenskaper, mapper, med mer.",
		admin_repository_system_instructions: "Oppgi hvilke systemegenskaper som skal vises for dokumentene og mappene i dette datalageret.",

		admin_desktop_general_create_instructions: "Et skrivebord styrer hva en bruker kan se og gjøre når brukeren logger seg på webklienten. Når du har opprettet et skrivebord, kan du sende URLen for skrivebordet til brukerne slik at de får tilgang til skrivebordet.",
		admin_desktop_admin_instructions: "Administrasjonsskrivebordet blir levert sammen med webklienten slik at administrative brukere kan konfigurere webklienten. Dette skrivebordet har tilgang til alle datalagrene som er konfigurert for webklienten.",
		admin_desktop_repositories_instructions: "Oppgi hvilke datalagre du vil at brukerne skal ha tilgang til fra dette skrivebordet. Du må konfigurere datalagrene før du kan legge dem til på skrivebordet.<br><br><b>Tips:</b> Du kan begrense hvilke datalagre som er tilgjengelige for hver funksjon, når du konfigurerer skrivebordslayouten.",
		admin_desktop_menus_instructions: "Oppgi hvilke menyer du vil at brukerne skal ha tilgang til fra dette skrivebordet. Menyene oppgir hvilke handlinger som er tilgjengelige, avhengig av hva som er valgt i grensesnittet.<br><br><b>Tips:</b> Du kan tilpasse innholdet i menyer i seksjonen <b>Menyer</b> i administrasjonsverktøyet, eller du kan opprette nye typer av menyer ved å opprette plugin-moduler.",

		admin_desktop_no_repositories: "Det er ikke konfigurert noen datalagre.",

		admin_desktop_id_hover: "Skrivebords-IDen er inkludert i URLen for webklienten og oppgir hvilket skrivebord som skal åpnes når en bruker logger seg på webklienten. IDen må være unik, og du kan ikke endre IDen etter at du har lagret skrivebordet.<br><br>IDen kan bare inneholde alfanumeriske tegn og skiller mellom store og små bokstaver.",
		admin_desktop_id_disabled_hover: "Skrivebords-IDen kan ikke endres. Hvis du vil bruke en annen ID, må du opprette et nytt skrivebord.",
		admin_desktop_name_hover: "Skrivebordsnavnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Konfigurasjonen kan bare inneholde ett standard skrivebord.",

		admin_repository_id_disabled_hover: "Datalager-IDen kan ikke endres. Hvis du vil bruke en annen ID, må du opprette en ny datalagertilkobling.",
		admin_printService_enable: "Skriv ut ved hjelp av IBM Daeja ViewONE-utskriftstjenesten",
		admin_printService_enable_hover: "Hvis du velger å aktivere IBM Daeja ViewONE-utskriftstjenesten, blir dokumentene konvertert til PDF-format, og utskriften kan utføres ved hjelp av en hvilken som helst nettleser.<br><br>Hvis du velger å deaktivere IBM Daeja ViewONE-utskriftstjenesten, kan du bare skrive ut dokumenter i nettlesere som støtter Java-appletter.  Enkelte nettlesere støtter ikke Java-appletter, og støtter dermed ikke applettutskrift.<br><br>Slå opp i dokumentasjonen for støttede nettlesere.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Brukerens hjemmekatalog",
		admin_file_tracking_doc_directory_my_documents: "Brukerens dokumentkatalog",
		admin_file_tracking_doc_directory_qp: "Kvalifisert bane",
		admin_file_tracking_section_tile: "Filsporingskonfigurasjon",
		admin_file_tracking_home_path: "Hjemmebane",
		admin_file_tracking_my_documents: "Mine dokumenter",
		admin_file_tracking_exact_path: "Fullstendig bane:",
		admin_file_tracking_qp: "Kvalifisert bane",
		admin_file_tracking_ev: "Miljøvariabel",
		admin_file_tracking_ev_us: "Tilpasset miljøvariabel ",
		admin_file_tracking_del_local_copy: "Slett lokal kopi:",
		admin_file_tracking_yes: "Ja",
		admin_file_tracking_no: "Nei",
		admin_file_tracking_del_local_copy_rt_state_editable: "Tillat at brukere overstyrer denne innstillingen",
		admin_file_tracking_del_local_copy_rt_state1: "Ja",
		admin_file_tracking_del_local_copy_rt_state2: "Nei",
		admin_file_Tracking_label: "Filsporing:",
		admin_file_Tracking_disable: "Deaktiver",
		admin_file_Tracking_enable: "Aktiver",
		admin_file_tracking_label_hover_help: "Filsporing bruker en applett til å sjekke ut og laste ned dokumenter til en bestemt katalog på brukernes maskiner. Appletten gjør det også mulig for IBM Content Navigator å finne dokumenter på brukernes maskiner når brukerne sjekker inn dokumenter.",
		admin_file_tracking_doc_directory: "Lagerplassering:",
		admin_file_tracking_open_file: "Åpne fil automatisk",
		admin_file_Tracking_append_qualified_path: "Føy til katalog",
		admin_file_Tracking_append_qualified_path_hover_help: "Du kan føye til en katalog til slutt i miljøvariabelen hvis du vil at dokumenter skal lagres i en bestemt underkatalog. <br/><br/>Du kan for eksempel oppgi at dokumenter skal lastes ned til en <i>EnterpriseDocuments</i>-katalog i brukerens hjemmekatalog.",
		admin_file_Tracking_append_ev: "Føy til miljøvariabel",
		admin_file_Tracking_append_ev_hover_help: "Du kan føye til en miljøvariabel hvis du vil at dokumenter skal lagres i en dynamisk oppgitt katalog, for eksempel en brukerkatalog.<br/><br/>Du kan for eksempel oppgi at dokumenter skal lagres i en <i>user_name</i>-underkatalog i en delt nettverkskatalog. ",
		admin_file_tracking_doc_directory_hover_help: "Oppgi hvor dokumenter skal lagres når de sjekkes ut og lastes ned.<br/><br/> <b>Tips:</b>Hvis du vil lagre dokumenter i en brukers hjemmekatalog eller standard dokumentkatalog, velger du <b>Miljøvariabel</b>, som inkluderer forhåndsdefinerte variabler som peker til disse plasseringene.",
		admin_file_tracking_qualified_path_hover_help: "Bruk riktig katalogstruktur for Windows- eller Mac-operativsystemet når du oppgir katalogen eller nettverkskatalogen der du vil lagre dokumenter. <ul><li>For Windows tar du med en stasjonsbokstav i banen, for eksempel C:\\Enterprise-dokumenter.</li><li>For en delt nettverkskatalog oppgir du banen med formatet \\\\servernavn\\katalog</li></ul><br/><b>Viktig:</b> Hvis du vil bruke dette alternativet, må katalogstrukturen du oppgir, kunne opprettes på alle klientarbeidsstasjonene i miljøet ditt.",
		admin_file_tracking_environment_variable_path_hover_help: "Bruk riktige miljøvariabler for Windows- eller Mac-operativsystemet når du oppgir katalogen eller nettverkskatalogen der du vil lagre dokumenter. <br/><br/>Alternativet <b>Brukerens hjemmekatalog</b> lagrer dokumenter i følgende katalog:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>Alternativet <b>Brukerens dokumentkatalog</b> lagrer dokumenter i følgende katalog:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Oppgi om den lokale kopien av et dokument skal slettes når brukerne legger til eller sjekker inn dokumenter i datalageret.<br/><br/>Hvis den lokale kopien slettes, kan du:<br/><ul><li>Håndheve overensstemmelse med IT-policyer</li><li>Sikre at brukerne arbeider med den nyeste versjonen av dokumenter</li></ul><br/><b>Begrensning:</b> Denne innstillingen brukes ikke når brukere legger til dokumenter ved å dra og slippe dem.<br/><br/>For IBM Content Navigator for Microsoft Office må du velge <b>Slett lokale filer når brukerne legger til eller sjekker inn et dokument eller avbryter en utsjekking</b> i seksjonen <b>Office-konfigurasjon</b> for skrivebordet.",
		admin_file_tracking_open_file_hover_help: "Denne innstillingen overstyrer eventuelle dokumenthåndteringspreferanser som er konfigurert i brukernes nettlesere. </br></br><b>Begrensning:</b> Denne innstillingen brukes ikke av IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Overskriv lokal kopi:",
		admin_file_tracking_over_write_file_hover_help: "Oppgi om den lokale kopien av et dokument skal overskrives når brukerne sjekker ut dokumenter fra datalageret. <br/><br/>Hvis den lokale kopien overskrives, kan du:<br/><ul><li>Sikre at brukerne arbeider med den nyeste versjonen av dokumenter</li><li>Forhindre at brukerne får en forespørsel når det finnes en lokal kopi</li></ul> </br></br><b>Begrensning:</b> Denne innstillingen brukes ikke av IBM Content Navigator for Microsoft Office hvis du velger <b>Tillat at brukere overstyrer denne innstillingen</b>.",
		admin_file_tracking_over_write_file_state_editable: "Tillat at brukere overstyrer denne innstillingen",
		admin_file_tracking_inline_help: "Filsporing strømlinjeformer prosessen for å sjekke dokumenter ut av og inn i datalageret. Den gjør det også mulig å styre hvordan dokumenter blir lagret på brukernes maskiner. <br/><br/>I tillegg gjør filsporing det mulig å spore dokumenter i flere IBM Content Navigator-komponenter, for eksempel i webklienten og i IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Du må aktivere Standard autentisering eller Serverautentisering før du kobler deg til datalageret.",
		admin_box_use_oauth: "Autentiseringstype:",
		admin_box_use_oauth_hover: "Velg Standard autentisering eller Serverautentisering i et produksjonsmiljø når du gir tilgang til Box-dokumenter fra IBM Content Navigator. Oppgi verdiene for client_id og OAuth2 client_secret som er knyttet til denne distribusjonen av IBM Content Navigator. Du kan hente disse verdiene fra Box etter at du har opprettet Box-applikasjonen for din IBM Content Navigator-server.<br/><br/>Velg Utviklerautentisering i et utviklingsmiljø. Utviklere kan logge seg på Box ved hjelp av sin utviklerkonto og generere et utviklertoken som er gyldig i 60 minutter. Utviklertokener gjør det mulig for utviklere å logge seg på Box med utviklertokenet som passord for en hvilken som helst bruker-ID.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Underdomene for Box-bedriftskonto:",
		admin_box_share: "Tilkoblings-ID for Task Manager:",
		admin_box_share_hover: "For Box-kopiering eller Box-deling bruker Task Manager en administratorbruker-ID og passord til å kjøre bakgrunnsoppgaver som endrer datalageret.<br/><br/>Klikk på Definer og logg deg på Box ved hjelp av en gyldig Box-administratorkonto.<br/><br/>Hvis du konfigurerer et skrivebord ved å velge dette Box-datalageret som datalager for delte filer, må du oppgi en Box-administratorbruker som har ubegrenset lagring i Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Åpne fil automatisk",
		file_tracking_runtime_overwrite_hover_help: "Hvis du ikke velger dette alternativet og du har et dokument med samme navn i det lokale filsystemet, blir dokumentet sjekket ut, men det blir ikke lastet ned hvis du ikke utfører en av følgende handlinger:<br/><ul><li> Last ned dokumentet til en underkatalog i standardkatalogen. Hvis du velger en underkatalog, kan plasseringen av dokumentet spores av webapplikasjonen.</li><li>Endrer navnet på dokumentet du laster ned. Ved å endre navnet på dokumentet forhindrer du en filnavnkonflikt.</li></ul>",
		open_file: "Åpne fil automatisk",
		over_write_file: "Overskriv lokal kopi",
		checkout_and_download_file: "Sjekk ut og last ned dokumenter",
		download_to_local_directory: "Last ned til:",
		checkout_and_download_button_title: "Sjekk ut og last ned",
		checkout_without_java_confirmation_dialog: "Filen kan ikke lastes ned og spores av filsporingsfunksjonen.",
		browse_for_directory: "Bla gjennom",
		selected_documents: "Valgte dokumenter",

		checkout_without_java_confirmation_text: "Dette problemet kan oppstå av følgende årsaker:<br/><ul><li>Java Runtime Environment (JRE) er ikke installert på arbeidsstasjonen.</li><li>Java-pluginmodulen er ikke aktivert i nettleseren.</li><li>Nettleseren støtter ikke Java.</li></ul><br/><br/>Du kan løse dette problemet på følgende måter:<br/><br/><ul><li>Hvis du vil fortsette å laste ned filen uten at filsporing er aktivert, klikker du på OK.</li><li>Hvis du vil laste ned filen med filsporing aktivert, avbryter du nedlastingen og kontroller at JRE er installert på arbeidsstasjonen, og at Java-pluginmodulen er aktivert i nettleseren.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokumentet ble sjekket ut og lastet ned, men dokumentet kan ikke åpnes.",
		runtime_file_tracking_open_error_explanation: "Operativsystemet som er installert på arbeidsstasjonen, støtter ikke filer av denne typen.",
		runtime_file_tracking_open_error_userResponse: "Du kan løse problemet på følgende måter:<br/><br/><ul><li>Hvis du har behov for å arbeide med dokumentet, åpner du webklienten fra en annen arbeidsstasjon som har et annet operativsystem.</li><li>Hvis du bare trenger å vise dokumentet, høyreklikker du på dokumentet i webklienten og klikker på Åpne.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokumentet ble sjekket ut, men ble ikke lastet ned.",
		runtime_file_tracking_save_file_error_explanation: "Det finnes et dokument med samme navn i det lokale filsystemet, men det ble ikke overskrevet. ",
		runtime_file_tracking_save_file_error_userResponse: "Hvis du vil laste ned filen fra datalageret, må du overskrive den lokale kopien av dokumentet når du laster ned dokumentet fra datalageret.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokumentet ble sjekket ut, men dokumentet kan ikke lastes ned eller åpnes.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Det finnes et dokument med samme navn i det lokale filsystemet. Filen ble imidlertid ikke overskrevet, noe som forhindrer at dokumentet i datalageret blir lastet ned og åpnet.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Hvis du vil laste ned filen fra datalageret, må du overskrive den lokale kopien av dokumentet når du laster ned dokumentet fra datalageret.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokumentet kan ikke lastes ned.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Miljøvariabelen ${0}, som kreves for filsporing, er ikke definert på denne klientmaskinen.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "For å løse problemet:<br/><br/><ul><li>Legg til miljøvariabelen ${0} i operativsystemets miljøvariabler.</li><li>Logg deg av webklienten og lukk nettleseren. Logg deg deretter på igjen.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Dokumentet kan ikke lastes ned og spores av filsporingsappletten.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Katalogen ${0}, som kreves for filsporing, er ikke definert og kan ikke opprettes.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Du kan løse dette problemet på følgende måter:<br/><br/><ul><li>Klikk på Bla gjennom og velger en annen katalog på klientmaskinen. Hvis du velger dette alternativet, blir filen ikke sporet.</li><li>Kontakt systemadministratoren og be vedkommende om å oppgi en annen katalog som skal brukes for sporing av filer. Dette kan for eksempel være nødvendig hvis den oppgitte katalogen er for et Windows-operativsystem, men du kjører Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Hvis dette skrivebordet brukes fra enheter med ulike operativsystemer, kan du redusere muligheten for problemer ved å utføre en av følgende handlinger:<br/><br/><ul><li>Bruk miljøvariabler til å oppgi lagerplassering på klientmaskiner.</li><li>Opprett forskjellige skrivebord for brukerne av hver type av enheter. Du kan for eksempel opprette et skrivebord for brukere med et Windows-operativsystem, og et skrivebord for brukere med Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Forespørselen kan ikke behandles.",
		runtime_file_tracking_generic_error_explanation: "Det oppstod en feil i filsporingsappletten.",
		runtime_file_tracking_generic_error_userResponse: "Kontakt systemadministratoren for å få hjelp.",
		runtime_file_tracking_generic_error_adminResponse: "Åpne Java-konsollen og prøv å sende forespørselen på nytt. Detaljene for feilen blir vist i Java-konsollen.<br/><br/>Du kan få tilgang til Java-konsollen fra kontrollpanelet (Windows) eller systeminnstillingene (Macintosh) for ditt operativsystem.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Forespørselen kan ikke behandles",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Følgende filer ble lagt til på datalageret, men ble ikke slettet fra ditt lokale filsystem: ${0}. Dette skjer vanligvis når filene er åpne eller blir brukt av en annen applikasjon. Om nødvendig kan du slette filene manuelt.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokumentet kan ikke lastes ned.",
		runtime_file_tracking_ioexception_error_explanation: "Dokumentet kan ikke lastes ned.",
		runtime_file_tracking_ioexception_userResponse: "Du har kanskje ikke de nødvendige tillatelsene for å skrive til følgende katalog: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Kontroller at du har skrivetillatelse til den oppgitte katalogen. Hvis du ikke har skrivetillatelse til den oppgitte katalogen, må du kontakte systemadministratoren.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Forespørselen kan ikke behandles.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Det er flere mulige årsaker til at denne feilen kan oppstå:<br/><br/><ul><li>Du bruker Safari på Mac OS, og Java kjører i sikker modus.</li><li>Du har ikke lese/skrive-tillatelse for katalogen som er angitt i filsporingskonfigurasjonen for skrivebordet ditt.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Du kan fortsette å bruke IBM Content Navigator uten filsporing, eller du kan gjøre følgende for å løse problemet:<br/><br/><ol><li>Aktiver usikker modus for Java i Safari.</li><li>Hvis du blir spurt om du vil stole på IBM Content Navigator-webstedet, klikker du på <b>Trust</b> for å laste inn siden, og deretter aktiverer du usikker modus for Java i Safari.</li></ol><br/><br/>Hvis Safari er konfigurert på riktig måte, gjør du følgende for å løse problemet:<br/><br/><ol><li>Sørg for at du har lese/skrive-tillatelse for katalogen som er angitt i filsporingskonfigurasjonen for skrivebordet ditt.</li><li>Hvis du ikke har lese/skrive-tillatelser på katalogen, redigerer du tillatelsene på katalogen.</li><li>Hvis du ikke kan redigere tillatelsene dine på katalogen, må administratoren endre katalogen som er konfigurert for filsporing, eller gi deg tilgang til et skrivebord som har en annen filsporingskatalog konfigurert.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Forespørselen kan ikke behandles.",
		runtime_file_tracking_java__notfound_error_explanation: "Dette problemet oppstår vanligvis i følgende situasjoner:<br/><br/><ul><li>Java Runtime Environment (JRE) finnes ikke eller er ikke aktivert på arbeidsstasjonen din.</li><li>JRE-versjonen på arbeidsstasjonen din er ikke kompatibel med IBM Content Navigator-versjonen.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Du kan fortsette å bruke IBM Content Navigator uten filsporing, eller du kan gjøre følgende for å løse JRE-problemet:<br/><br/><ol><li>Kontroller at JRE er installert på arbeidsstasjonen din.</li><li>Kontroller at JRE-versjonen på arbeidsstasjonen er kompatibel med IBM Content Navigator. En liste over de støttede versjonene finner du i dokumentet <i>Hardware and software prerequisites for IBM Content Navigator</i> på IBM Support-nettstedet.</li><li>Kontroller at JRE er aktivert på arbeidsstasjonen din.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Forespørselen kan ikke behandles.",
		runtime_file_tracking_security_error_explanation: "Du har ikke lese/skrive-tillatelse for katalogen som er angitt i filsporingskonfigurasjonen for skrivebordet ditt.",
		runtime_file_tracking_security_error_userResponse: "Du kan fortsette å bruke IBM Content Navigator uten filsporing, eller du kan gjøre følgende sammen med systemadministratoren:<ol><li>Sørg for at du har lese/skrive-tillatelse for katalogen som er angitt i filsporingskonfigurasjonen for skrivebordet ditt. </li><li>Hvis du ikke har lese/skrive-tillatelser på katalogen, redigerer du tillatelsene på katalogen.</li><li>Hvis du ikke kan redigere tillatelsene dine på katalogen, må administratoren endre katalogen som er konfigurert for filsporing, eller gi deg tilgang til et skrivebord som har en annen filsporingskatalog konfigurert.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Følgende dokumenter ble lastet ned: ${0}.",

		admin_file_tracking_inline_help: "Filsporing strømlinjeformer prosessen for å legge til dokumenter i og sjekke dokumenter ut av og inn i datalageret. Den gjør det også mulig å styre hvordan dokumenter blir lagret på brukernes maskiner.<br/><br/>I tillegg gjør filsporing det mulig å spore dokumenter i flere IBM Content Navigator-komponenter, for eksempel i webklienten og i IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Meny-IDen kan ikke begynne med \"Default\".  \"Default\" er et reservert prefiks for meny-IDer.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "IDen kan bare inneholde alfanumeriske tegn og skiller mellom store og små bokstaver.",
		admin_repository_id_hover: "Datalager-IDen er inkludert i URLer for webklienter, favoritter og e-postlinker og oppgir hvilket datalager brukeren logges på. IDen må være unik, og du kan ikke endre IDen etter at du har lagret datalageret.<br><br>IDen kan bare inneholde alfanumeriske tegn og skiller mellom store og små bokstaver.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Navnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Skrivebords-IDen kan ikke inneholde mellomrom eller noen av følgende tegn: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Skrivebordsnavnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Visningsnavnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Oppgi datalagernavnet som skal vises for brukerne i webklienten.<br><br>Navnet kan ikke inneholde noen av følgende tegn: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Oppgi vertsnavnet eller IP-adressen for Content Manager OnDemand-serveren du vil opprette tilkobling til, for eksempel server.id.com.",
		admin_server_p8_name_hover: "Oppgi URLen for Content Engine- eller Content Platform Engine-serveren. Det skilles mellom store og små bokstaver i URLen, og den har følgende format:<br><br><ul><li>På WebSphere-applikasjonsserver, iiop://vertsnavn:portnummer/FileNet/Engine. For basisimplementeringer er standard portnummer 2809.</li><li>På WebLogic-server, t3://vertsnavn:portnummer/FileNet/Engine. Standard portnummer er 7001.</li></ul><br><br>For konfigurasjoner av Content Engine og Content Platform Engine med svært høy tilgjengelighet bruker du EJB transport-URL for høy tilgjengelighet uten cemp:-prefikset. ",
		admin_server_p8_protocol_hover: "Oppgi protokollen som skal brukes til å kommunisere med Content Engine.",
		admin_server_cm_name_hover: "Oppgi lokalt katalognavn for Content Manager-databasen eller tilkoblingsnavnet for bibliotekserveren. Dette navnet er verdien som er oppgitt for ICMSERVER-variabelen.",
		admin_repository_cmis_hover: "Oppgi IDen for datalageret du vil koble deg til.  IDen for hvert datalager i CMIS-miljøet ditt står i AtomPub-bindingstjenestedokumentet.  <br/><br/><b>Tips:</b> Du kan også skrive en stjerne (*) for å koble deg til det første eller eneste datalageret som er definert i Atompub-bindingstjenestedokumentet.",
		admin_url_cmis_hover: "Formatet på URLen varierer avhengig av tjenesteleverandør. Slå opp i CMIS-dokumentasjonen eller kontakt CMIS-serveradministratoren for få informasjon om URLen.",
		admin_repcfg_cmis_status_columns_hover: "Oppgi elementstatusene du vil vise ikoner for. Statusikonene blir vist ved siden av dokumentene på innholdslisten.",
		admin_port_hover: "Oppgi TCP/IP-portnummeret som Content Manager OnDemand-serveren lytter på. Standardverdien er 1445.",
		admin_unified_searches_hover: "Oppgi om du vil at brukerne skal kunne lagre flerdatalagersøk i dette datalageret.<br/><br/>Hvis du ikke aktiverer dette alternativet, kan brukerne fremdeles opprette flerdatalagersøk som kjøres mot dette datalageret. Du kan hindre brukere i å opprette flerdatalagersøk på skrivebordsnivå.<br/><br/>Hvis du aktiverer flerdatalagersøk, oppretter IBM Content Navigator datamodellen for flerdatalagersøk i datalageret.<br/><br/>For IBM FileNet Content Manager må du koble deg til datalageret som Content Engine-administrator før du kan aktivere dette alternativet.",
		admin_unified_searches_cm_hover: "Oppgi om du vil at brukerne skal kunne lagre flerdatalagersøk i dette datalageret.<br/><br/>Hvis du ikke aktiverer dette alternativet, kan brukerne fremdeles opprette flerdatalagersøk som kjøres mot dette datalageret. Du kan hindre brukere i å opprette flerdatalagersøk på skrivebordsnivå.<br/><br/>Hvis du aktiverer flerdatalagersøk, oppretter IBM Content Navigator datamodellen for flerdatalagersøk i datalageret.",
		admin_max_results_hover: "Oppgi om du vil begrense antallet resultater som returneres av et søk. Hvis du ikke begrenser antall søkeresultater, kan du oppleve ytelsesproblemer hvis et søk returnerer et stort antall resultater.",
		admin_timeout_hover: "Oppgi hvor lang tid, i sekunder, et søk kan kjøre i datalageret. Hvis søket ikke er fullført i løpet av tiden du oppgir, avbryter webklienten forespørselen. Anbefalt maksimal tidsgrense er 60 sekunder.",
		admin_object_store_hover: "Oppgi objektlageret som du vil koble til på Content Engine-serveren. Du kan hente det symbolske navnet fra Content Platform Engine-administrasjonskonsollen.",
		admin_object_store_display_name_hover: "Visningsnavnet for objektlageret er nødvendig hvis du vil bruke IBM FileNet P8-arbeidsflyter. Du kan hente visningsnavnet for objektlageret fra Content Platform Engine-administrasjonskonsollen.",
		admin_all_searches_hover: "Oppgi om du vil begrense antallet søk som skal vises under Alle søk når brukerne søker i datalageret. Hvis du ikke begrenser antall søk, kan du oppleve ytelsesproblemer hvis datalageret inneholder et stort antall lagrede søk.",

		admin_text_desktop: "Skrivebord",
		admin_text_repository: "Datalager",
		admin_text_plugin: "Plugin-modul",
		admin_text_theme: "Tema",
		admin_text_menu: "Meny",
		admin_text_reason_code: "Retusjeringsårsak",
		admin_text_redactions: "Retusjeringer",
		admin_text_viewer_mapping: "Visningsprogramtilordning",
		admin_text_mobile_feature: "Mobilfunksjon",
		admin_test_interface_text: "Grensesnittekst",
		admin_text_interface_text_locale: "Lokalisert grensesnittekst",
		admin_text_icon_status: "Statusikon",
		admin_text_icon: "Ikon",
		admin_text_file_type: "Filtype",
		admin_text_viewer: "Visning",
		admin_text_desktop_access: "Skrivebordstilgang",
		admin_text_mapped_properties_for_office: "Tilordnede egenskaper for Microsoft Office",
		admin_text_desktop_features: "Skrivebordsfunksjoner",
		admin_text_unknown: "Ukjent",
		admin_folder_instruction: "Oppgi hvilke egenskaper som skal vises for dokumenter og mapper på innholdslisten når brukerne blar. Du kan også oppgi hvilken rekkefølge egenskapene skal vises i.",
		admin_search_instruction: "Oppgi hvilke alternativer som velges som standard når brukerne oppretter et søk.",
		admin_repository_office_conf_class_instruction: "Hvis du har IBM Content Navigator for Microsoft Office installert på klientmaskinene i miljøet, kan du oppgi hvordan dokumenter blir håndtert når de blir lagt til eller sjekket inn i dette datalageret.",
		admin_repository_office_conf_instruction: "Tilordne Microsoft Office-dokumentegenskaper til egenskapene som er definert på dette datalageret.<br/><br/>Når egenskapstilordning er aktivert for et skrivebord som dette datalageret er knyttet til, vil egenskapene som er definert på Microsoft Office-dokumentene, bli brukt til å fylle ut egenskapene på datalageret når brukeren legger til et dokument fra IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Egenskapstilordning",
		admin_repository_office_conf_prop_mapping_title1: "MS Office-integrering",
		admin_office_conf_instruction: "Du kan styre hvordan IBM Content Navigator kan integreres med Microsoft Office-applikasjoner når IBM Content Navigator for Microsoft Office er installert på klientmaskinene<br /><br /><b>Viktig:</b> Hvis du velger <b>Tilordne Office-egenskaper…</b>, må du også konfigurere egenskapstilordningen for hvert datalager som er knyttet til dette skrivebordet. Du kan konfigurere egenskapstilordninger på flippen <b>Office-egenskaper</b> for hvert datalager i miljøet.",
		admin_desktop_workflows_instruction: "<b>Bare for IBM FileNet P8-systemer:</b> Oppgi hvilke applikasjonsområder som skal vises i dette skrivebordet. Rekkefølgen til de valgte applikasjonsområdene bestemmer rekkefølgen for visning av applikasjonsområdene i webklienten.<br><br><b>Tips:</b> Du kan endre visningsnavnet for applikasjonsområdene ved å oppgi nye navn i seksjonen <b>Etiketter</b> i administrasjonsverktøyet.",
		admin_search_filtered_properties_instruction: "Oppgi hvilke egenskaper som brukerne kan søke i. Du kan skjule egenskaper du ikke vil at brukerne skal kunne søke i.",
		admin_search_filtered_operators_instruction: "Oppgi hvilke operatorer som skal være tilgjengelige når brukerne søker i en bestemt datatype, for eksempel en dato eller et heltall. Du kan skjule de operatorene du ikke vil at brukerne skal kunne velge.",
		admin_search_default_search_results_instruction: "Oppgi hvilke egenskaper som skal vises for dokumenter og mapper i søkeresultatene. Du kan skjule egenskaper du ikke vil skal vises i søkeresultatene.",
		admin_search_default_search_results_p8_cmis_instruction: "Oppgi hvilke egenskaper som skal vises for dokumenter i søkeresultatene. Du kan skjule egenskaper du ikke vil skal vises i resultatene.",

		admin_datetimeOp: "Dato/klokkeslett",
		admin_floatOp: "Flytetall",
		admin_integerOp: "Heltall",
		admin_stringOp: "Streng",
		admin_binaryOp: "Binært",
		admin_objectOp: "Objekt",
		admin_idOp: "ID",
		admin_userOp: "Bruker",
		admin_booleanOp: "Boolsk",

		admin_string: "Streng",
		admin_long: "Lang",
		admin_date: "Dato",
		admin_double: "Dobbel",
		admin_object: "Objekt",
		admin_guid: "GUID",
		admin_boolean: "Boolsk",

		admin_repcfg_heading: "Du kan overstyre standard virkemåte for dette datalageret ved å definere konfigurasjonsparameterne.",
		admin_repcfg_heading_od: "Du kan overstyre standard virkemåte for dette datalageret ved å definere konfigurasjonsparameterne.<br /><br /><b>Viktig:</b> Hvis du skal bruke webklienten sammen med Content Manager OnDemand, må du også oppgi verdier for parameterne på flippen <b>Content Manager OnDemand</b> under <b>Innstillinger</b>, som gjelder for alle Content Manager OnDemand-datalagrene du kobler deg til.",
		admin_repcfg_teamspaces: "Grupperomadministrasjon:",
		admin_repcfg_enable: "Aktiver",
		admin_repcfg_disable: "Deaktiver",

		admin_repcfg_deliver_redacted_pdf_files_as: "Retusjerte PDF-filer vil bli levert som:",
		admin_repcfg_burn_pdf_to_pdf: "PDF-filer",
		admin_repcfg_burn_pdf_to_tiff: "TIFF-filer",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "En PDF-fil som er retusjert ved å bruke rollebaserte retusjeringer, kan leveres til klienten i et annet filformat. Når filformatet endres, endres også filtypen og MIME-typen.<br><br>Når en PDF-fil for eksempel leveres som en TIFF-fil, endres filtypen til .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Tillat brukere å slå sammen eller dele sider som har rollebaserte retusjeringer",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Velg dette alternativet for å tillate brukere å slå sammen eller dele sider som har rollebaserte retusjeringer. Brukere som ikke er retusjeringsredigerere, vil ikke kunne redigere rollebaserte retusjeringer og har ikke tilgang til de sensitive dataene som er knyttet til de rollebaserte retusjeringene, selv om dette alternativet er aktivert.",
		admin_repcfg_modify_teamspace_roles: "Tillat eiere å endre rollene for eksisterende grupperom",
		admin_repcfg_tm_delete_teamspace: "Tillat eiere å slette grupperom, inkludert innhold",
		admin_repcfg_tm_delete_teamspace_id_missing: "Du må oppgi brukernavnet for en datalageradministrator.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Du må oppgi passordet for en datalageradministrator.",
		admin_repcfg_teamspace_display_Recent: "Vis bare nylig endrede grupperom ",
		admin_repcfg_teamspace_display_Recent_value: "Dager siden siste endring:",

		admin_repcfg_folder_selector: "Rotmappe:",
		admin_repcfg_enable_folder_selector: "Aktiver",
		admin_repcfg_disable_folder_selector: "Deaktiver",
		admin_repcfg_SSO: "Enkeltpålogging:",
		admin_repcfg_teamspace_template_permission_text: "Tildel opprettere for grupperommaler:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Oppgi gruppene eller brukerne som kan opprette grupperommaler. Brukerne og gruppene blir gitt de nødvendige sikkerhetsinnstillingene på de nødvendige klassene og mappene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Les mer</a><br/><br/><b>Anbefaling:</b> Bruk grupper for å forenkle grupperomadministrasjonen.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Oppgi gruppene eller brukerne som kan opprette grupperommaler. Brukerne blir lagt til på de aktuelle tilgangskontrollistene og gitt de nødvendige rettighetene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Les mer</a><br/><br/><b>Anbefaling:</b> Bruk grupper for å forenkle grupperomadministrasjonen.",
		admin_repcfg_teamspace_permission_text: "Tildel roller for grupperom:",
		admin_repcfg_teamspace_permission_hover_p8: "Oppgi gruppene eller brukerne som kan opprette og bruke grupperom. Brukerne blir gitt de nødvendige sikkerhetsinnstillingene på de nødvendige klassene og mappene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Les mer</a><br/><br/><b>Anbefaling:</b> Bruk grupper for å forenkle grupperomadministrasjonen.",
		admin_repcfg_teamspace_permission_hover_cm: "Oppgi gruppene eller brukerne som kan opprette og bruke grupperom. Brukerne blir lagt til på de aktuelle tilgangskontrollistene og gitt de nødvendige rettighetene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Les mer</a><br/><br/><b>Anbefaling:</b> Bruk grupper for å forenkle grupperomadministrasjonen.",
		admin_repcfg_entry_template_permission_text: "Tildel roller for oppføringsmaler:",
		admin_repcfg_entry_template_permission_hover_p8: "Oppgi gruppene eller brukerne som kan opprette og bruke oppføringsmaler. Brukerne blir gitt de nødvendige sikkerhetsinnstillingene på klassen Oppføringsmal. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Les mer</a><br/><br/><b>Anbefaling:</b> Bruk grupper for å forenkle oppføringsmaladministrasjonen.",
		admin_repcfg_entry_template_permission_hover_cm: "Oppgi gruppene eller brukerne som kan opprette og bruke oppføringsmaler. Brukerne blir lagt til på de aktuelle tilgangskontrollistene og gitt de nødvendige rettighetene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Les mer</a><br /><br /><b>Anbefaling:</b> Bruk grupper for å forenkle oppføringsmaladministrasjonen.",
		admin_repcfg_office_template_permission_text: "Tildel malroller:",
		admin_repcfg_office_template_permission_hover_cm: "Oppgi gruppene eller brukerne som kan opprette, redigere og bruke Microsoft Office Online- eller Edit Service-maler. Brukerne blir lagt til på de aktuelle tilgangskontrollistene og gitt de nødvendige rettighetene.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a><br /><br /><b>Anbefaling:</b> Bruk grupper for å forenkle administrasjon av Microsoft Office Online- eller Edit Service-maler.",
		admin_repcfg_draft_permission_text: "Tildel utkastroller:",
		admin_repcfg_draft_permission_hover_cm: "Oppgi gruppene eller brukerne som kan opprette utkast av Microsoft Office Online- eller Edit Service-dokumenter under samarbeidsredigering. Eventuelle brukere som ønsker å samarbeide om å redigere dokumenter i Microsoft Office Online eller Edit Service, må ha de riktige tillatelsene for å opprette utkast. Brukerne blir lagt til på de aktuelle tilgangskontrollistene og gitt de nødvendige rettighetene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a><br /><br /><b>Anbefaling:</b> Bruk grupper for å forenkle utkastadministrasjonen.",
		admin_repcfg_search_permission_text: "Tildel roller for søk:",
		admin_repcfg_search_permission_hover_p8: "Oppgi gruppene eller brukerne som kan opprette eller bruke lagrede søk og flerdatalagersøk. Brukerne blir gitt de nødvendige sikkerhetsinnstillingene på de nødvendige klassene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Les mer</a><br /><br /><b>Anbefaling:</b> Bruk grupper for å forenkle søkeadministrasjonen.",
		admin_repcfg_search_permission_hover_cm: "Oppgi gruppene eller brukerne som kan opprette, redigere eller bruke lagrede søk og flerdatalagersøk. Brukerne blir lagt til på de aktuelle tilgangskontrollistene og gitt de nødvendige rettighetene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Les mer</a><br /><br /><b>Anbefaling:</b> Bruk grupper for å forenkle søkeadministrasjonen.",
		admin_repcfg_search_permission_title: "Søkeroller",
		admin_repcfg_search_permission_intro_text: "Sørg for at brukerne har tilgang til et skrivebord som støtter rollen deres. Du må for eksempel sørge for at brukere som har tillatelse til å opprette søk, har tilgang til et skrivebord som gjør det mulig å opprette søk og flerdatalagersøk.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administratorer for grupperommaler er brukere som har <b>Alle tillatelser</b> på datalageret (objektlageret). Du kan ikke endre listen over administratorer for grupperommaler fra administrasjonsverktøyet. <p>Administratorer av grupperommaler kan slette eller endre enhver grupperommal. Brukeren som oppretter en grupperommal, trenger ikke å dele malen med administratorer for grupperommaler.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Når du definerer en bruker eller gruppe som en oppretter av grupperommaler, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å opprette grupperommaler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Les mer</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Brukere og grupper som er tildelt andre rettigheter enn rettighetene som er knyttet til Administratorer og Opprettere.<p>Du kan flytte disse brukerne og gruppene til rollen som opprettere for grupperommaler ved å fjerne dem fra rollen Andre og deretter definere dem som opprettere for grupperommaler.<p>Du kan se gjennom rettighetene som i øyeblikket er gitt til disse brukerne og gruppene, ved hjelp av IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Grupperomadministratorer er brukere som har <b>Alle tillatelser</b> på datalageret (objektlageret). Du kan ikke endre listen over grupperomadministratorer fra administrasjonsverktøyet.<p>Grupperomadministratorer kan slette eller endre ethvert grupperom. Brukeren som oppretter et grupperom, trenger ikke å dele grupperommet med grupperomadministratorer.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Når du definerer en bruker eller gruppe som en oppretter av grupperom, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å opprette grupperom. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Les mer</a>",
		admin_repcfg_teamspace_user_hover_p8: "Når du definerer en bruker eller gruppe som en bruker av grupperom, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å bruke grupperom. En bruker må imidlertid være medlem av et grupperom for å få tilgang til grupperommet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Les mer</a><p><b>Tips:</b> Hvis du vil at alle brukerne i miljøet ditt skal kunne se grupperom, kan du legge til pseudokontoen #AUTHENTICATED-USERS i grupperommets brukerrolle.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Brukere og grupper som er tildelt andre rettigheter enn rettighetene som er knyttet til Administratorer, Opprettere og Brukere.<p>Du kan flytte disse brukerne og gruppene til forhåndsdefinerte roller ved å fjerne dem fra rollen Andre og deretter tildele dem grupperomroller.<p>Du kan se gjennom rettighetene som i øyeblikket er gitt til disse brukerne og gruppene, ved hjelp av IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administratorer for oppføringsmaler er brukere som har <b>Alle tillatelser</b> på datalageret (objektlageret). Du kan ikke endre listen over administratorer for oppføringsmaler fra administrasjonsverktøyet. <p>Administratorer av oppføringsmaler kan slette eller endre enhver oppføringsmal. Brukeren som oppretter en oppføringsmal, trenger ikke å dele oppføringsmalen med administratorer for oppføringsmaler.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Når du definerer en bruker eller gruppe som en oppretter av oppføringsmaler, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å opprette oppføringsmaler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Les mer</a>",
		admin_repcfg_entry_template_user_hover_p8: "Når du definerer en bruker eller gruppe som en bruker av oppføringsmaler, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å bruke oppføringsmaler. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Les mer</a><p><b>Tips:</b> Hvis du vil at alle brukerne i miljøet ditt skal kunne bruke oppføringsmaler, kan du legge til pseudokontoen #AUTHENTICATED-USERS i oppføringsmalens brukerrolle.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Brukere og grupper som er tildelt andre rettigheter enn rettighetene som er knyttet til Administratorer, Opprettere og Brukere.<p>Du kan flytte disse brukerne og gruppene til forhåndsdefinerte roller ved å fjerne dem fra rollen Andre og deretter tildele dem oppføringsmalroller.<p>Du kan se gjennom rettighetene som i øyeblikket er gitt til disse brukerne og gruppene, ved hjelp av IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Når du definerer en bruker eller gruppe som en oppretter av grupperommaler, får brukeren eller gruppen de riktige rettighetene for å opprette grupperommaler på datalageret. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Les mer</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Når du definerer en bruker eller gruppe som en oppretter av grupperom, får brukeren eller gruppen de riktige rettighetene for å opprette grupperom på datalageret. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Les mer</a>",
		admin_repcfg_teamspace_user_hover_cm: "Når du definerer en bruker eller gruppe som en bruker av grupperom, får brukeren eller gruppen de riktige rettighetene for å bruke grupperom på datalageret. En bruker må imidlertid være medlem av et grupperom for å få tilgang til grupperommet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Les mer</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Når du definerer en bruker eller gruppe som en oppretter av oppføringsmaler, får brukeren eller gruppen de riktige rettighetene for å opprette oppføringsmaler på datalageret. <br/><br/>Sikkerhetsinnstillingene for en bestemt oppføringsmal bestemmer imidlertid hvilke rettigheter brukeren eller gruppen har på oppføringsmalen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Les mer</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Når du definerer en bruker eller gruppe som en redigerer av oppføringsmaler, får brukeren eller gruppen de riktige rettighetene for å endre oppføringsmaler på datalageret. <br/><br/>Sikkerhetsinnstillingene for en bestemt oppføringsmal bestemmer imidlertid hvilke rettigheter brukeren eller gruppen har på oppføringsmalen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Les mer</a>",
		admin_repcfg_entry_user_hover_cm: "Når du definerer en bruker eller gruppe som en bruker av oppføringsmaler, får brukeren eller gruppen de riktige rettighetene for å bruke oppføringsmaler på datalageret. <br/><br/>Sikkerhetsinnstillingene for en bestemt oppføringsmal bestemmer imidlertid hvilke rettigheter brukeren eller gruppen har på oppføringsmalen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Les mer</a>",
		admin_repcfg_office_template_creators_hover_cm: "Når du definerer en bruker eller gruppe som en oppretter av Microsoft Office Online- eller Edit Service-maler, får brukeren eller gruppen de riktige rettighetene for å opprette malfiler på datalageret. <br/><br/>Sikkerhetsinnstillingene for en bestemt malfil bestemmer imidlertid hvilke rettigheter brukeren eller gruppen har på malen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a>",
		admin_repcfg_office_template_editors_hover_cm: "Når du definerer en bruker eller gruppe som en redigerer av Microsoft Office Online- eller Edit Service-maler, får brukeren eller gruppen de riktige rettighetene for å endre malfiler på datalageret.  <br/><br/>Sikkerhetsinnstillingene for en bestemt malfil bestemmer imidlertid hvilke rettigheter brukeren eller gruppen har på malen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a>",
		admin_repcfg_office_template_user_hover_cm: "Når du definerer en bruker eller gruppe som en bruker av Microsoft Office Online- eller Edit Service-maler, får brukeren eller gruppen de riktige rettighetene for å bruke en mal når de oppretter et nytt Office Online- eller Edit Service-dokument fra webklienten.  <br/><br/>Sikkerhetsinnstillingene for en bestemt malfil bestemmer imidlertid hvilke rettigheter brukeren eller gruppen har på malen.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a>",
		admin_repcfg_draft_creators_hover_cm: "Eventuelle brukere som ønsker å samarbeide om å redigere dokumenter i Microsoft Office Online eller Edit Service, må tildeles denne rollen. Ikke tildel brukere til redigerer- eller brukerrollene. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a>",
		admin_repcfg_draft_editors_hover_cm: "Eventuelle brukere som ønsker å samarbeide om å redigere dokumenter i Microsoft Office Online eller Edit Service, må tildeles rollen <b>oppretter</b>. Hvis en bruker blir tildelt til redigererrollen, kan ikke vedkommende opprette utkast, som kreves for samarbeidsredigering.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a>",
		admin_repcfg_draft_user_hover_cm: "Eventuelle brukere som ønsker å samarbeide om å redigere dokumenter i Microsoft Office Online eller Edit Service, må tildeles rollen <b>oppretter</b>. Hvis en bruker blir tildelt til brukerrollen, kan ikke vedkommende opprette utkast, som kreves for samarbeidsredigering.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Les mer</a>",		
		admin_repcfg_search_others_hover_p8: "Brukere og grupper som er tildelt andre rettigheter enn rettighetene som er knyttet til Administratorer, Opprettere og Brukere.<p>Du kan flytte disse brukerne og gruppene til forhåndsdefinerte roller ved å fjerne dem fra rollen Andre og deretter tildele dem søkeroller.<p>Du kan se gjennom rettighetene som i øyeblikket er gitt til disse brukerne og gruppene, ved hjelp av IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Søkeadministratorer er brukere som har <b>Alle tillatelser</b> på datalageret (objektlageret). Du kan ikke endre listen over søkeadministratorer fra administrasjonsverktøyet. <br /><br />Søkeadministratorer kan slette eller endre ethvert søk. Brukeren som oppretter et søk, trenger ikke å dele søket med søkeadministratorer.",
		admin_repcfg_search_creators_hover_p8: "Når du definerer en bruker eller gruppe som en oppretter av søk, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å opprette søk. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Les mer</a>",
		admin_repcfg_search_user_hover_p8: "Når du definerer en bruker eller gruppe som en bruker av søk, får brukeren eller gruppen den riktige sikkerhetstillatelsen på datalageret for å bruke søk. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Les mer</a><br /><br /><b>Tips:</b> Hvis du vil at alle brukerne i miljøet ditt skal kunne bruke søk, kan du legge til pseudokontoen #AUTHENTICATED-USERS i søkets brukerrolle.<br/><br />Som standard kan en bruker av søk opprette søk og flerdatalagersøk, men kan ikke lagre søkene. Du kan hindre brukere av søk i å opprette søk ved å la dem bruke et skrivebord der følgende alternativer er valgt:<ul><li><b>Hindre brukere i å opprette søk</b></li><li><b>Hindre brukere i å opprette flerdatalagersøk</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Når du definerer en bruker eller gruppe som en oppretter av søk, får brukeren eller gruppen de riktige rettighetene for å opprette og lagre søk og flerdatalagersøk på datalageret. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Les mer</a><br /><br /><b>Viktig:</b> Pass på at opprettere av søk bruker et skrivebord der følgende alternativer ikke er valgt:<ul><li><b>Hindre brukere i å opprette søk</b></li><li><b>Hindre brukere i å opprette flerdatalagersøk</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Når du definerer en bruker eller gruppe som en redigerer av søk, får brukeren eller gruppen de riktige rettighetene for å endre eksisterende søk og flerdatalagersøk. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Les mer</a><br /><br /><b>Tips:</b> Som standard kan en redigerer av søk opprette søk og flerdatalagersøk, men kan ikke lagre søkene. Du kan hindre redigerere av søk i å opprette søk ved å la dem bruke et skrivebord der følgende alternativer er valgt:<ul><li><b>Hindre brukere i å opprette søk</b></li><li><b>Hindre brukere i å opprette flerdatalagersøk</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Når du definerer en bruker eller gruppe som en bruker av søk, får brukeren eller gruppen de riktige rettighetene for å åpne og utføre lagrede søk og flerdatalagersøk. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Les mer</a><br /><br /><b>Tips:</b> Som standard kan en bruker av søk opprette søk og flerdatalagersøk, men kan ikke lagre søkene. Du kan hindre brukere av søk i å opprette søk ved å la dem bruke et skrivebord der følgende alternativer er valgt:<ul><li><b>Hindre brukere i å opprette søk</b></li><li><b>Hindre brukere i å opprette flerdatalagersøk</b></li></ul>",
		admin_repcfg_db_encoding: "Tegnkoding for serverdatabase:",
		admin_repcfg_db_encoding_hover: "Standard tegnkoding for en IBM Content Manager-database er UTF-8.",
		admin_repcfg_db_encoding_specify: "Oppgi databasetegnkodingen",
		admin_repcfg_db_encoding_utf8: "UTF-8-koding",
		admin_repcfg_db_encoding_utf8_hover: "Oppgi dette alternativet hvis du bruker en UTF-8-kodet database. IBM Content Navigator vil bruke UTF-8-koding ved kontroll av lengden på verdistrenger for elementegenskaper.",
		admin_repcfg_db_encoding_other: "Annen koding",
		admin_repcfg_db_encoding_other_hover: "Oppgi dette alternativet hvis du bruker en database med en annen koding enn UTF-8. IBM Content Navigator vil bruke antall tegn ved kontroll av lengden på verdistrenger for elementegenskaper.",
		admin_repcfg_language_codes: "Serverspråkkoder:",
		admin_repcfg_language_codes_avail: "Tilgjengelig",
		admin_repcfg_language_codes_sel: "Valgt",
		admin_repcfg_pdf_conversion: "MIME-typer som skal konverteres til PDF-dokumenter i vedlegg:",
		admin_repcfg_pdf_conversion_avail: "Tilgjengelig",
		admin_repcfg_pdf_conversion_sel: "Valgt",

		admin_repcfg_box_share_enable_classes_label: "Klasser som skal endres for støtte for Box-deling:",
		admin_repcfg_box_share_enable_classes_hover: "Du kan endre denne klassen slik at den lagrer IDen for filen i Box når elementet blir delt.",
		admin_repcfg_box_share_enable_classes_warning: "Viktig: Alle klasser som du oppgir, blir endret for å støtte Box-deling. Når du har lagret endringene, kan endringene ikke fjernes fra klassene.<br><br>Du må være koblet til datalageret som en bibliotekserveradministrator for å endre klasser.",
		admin_repcfg_box_share_enable_classes_available: "Tilgjengelige klasser",
		admin_repcfg_box_share_enable_classes_selected: "Valgte klasser",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Lagre ID for Box-deling",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Denne klassen er allerede endret for å lagre IDen for Box-deling. Du kan ikke fjerne dette alternativet.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Endre denne klassen slik at den lagrer IDen for filen i Box når elementet blir delt.",

		admin_repcfg_redaction: "Rollebaserte retusjeringer:",
		admin_repcfg_enable_redaction_hover: "Oppgi om du vil bruke rollebaserte retusjeringer på dokumenter i dette datalageret.<br/><br/>Rollebaserte retusjeringer blir brukt når et dokument blir lastet ned, skrevet ut, gjengitt i et visningsprogram eller vist som et miniatyrbilde. Hva brukerne ser når de viser dokumentet, avhenger av hvilken rolle de har, og av hvilke retusjeringspolicyer som er i bruk.",

		admin_repcfg_redaction_policy_permission_text: "Tildel policyredigerere:",
		admin_repcfg_redaction_policy_editors_hover: "Velg brukerne og gruppene som skal opprette, endre og slette retusjeringspolicyer og retusjeringsroller.",
		admin_repcfg_redaction_policy_editors_select_hover: "Redigerere av retusjeringspolicyer kan opprette, endre og slette retusjeringspolicyer og retusjeringsroller.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Administratorer av retusjeringspolicyer kan definere redigerere av retusjeringspolicyer.<br/><br/>Du kan endre listen over administratorer for retusjeringspolicyer ved hjelp av IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Administratorer av retusjeringspolicyer kan definere redigerere av retusjeringspolicyer.<br/><br/>Du kan endre listen over administratorer for retusjeringspolicyer ved hjelp av systemadministrasjonsklienten i IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Tildel retusjeringsredigerere:",
		admin_repcfg_redaction_editors_hover: "Velg brukerne og gruppene som skal opprette, endre og slette rollebaserte retusjeringer. Når du har valgt brukere og grupper som redigerere, må du oppgi dem som redigerere i retusjeringspolicyer før de kan redigere rollebaserte retusjeringer.",
   		admin_repcfg_redaction_editors_select_hover: "Retusjeringsredigerere kan opprette, endre og slette rollebaserte retusjeringer når de også er definert som redigerere i retusjeringspolicyer.",
   		admin_repcfg_redaction_administrators_hover_p8: "Retusjeringsadministratorer kan definere retusjeringsredigerere.<br/><br/>Du kan endre listen over retusjeringsadministratorer ved hjelp av IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Retusjeringsadministratorer kan definere retusjeringsredigerere.<br/><br/>Du kan endre listen over retusjeringsadministratorer ved hjelp av systemadministrasjonsklienten i IBM Content Manager.",
		admin_repcfg_entry_template: "Administrasjon av oppføringsmaler:",
		admin_repcfg_entry_template_enable_classes_label: "Klasser som skal endres for støtte for oppføringsmaler:",
		admin_repcfg_oos_reference_attribute_label: "Referanseattributter for Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Viktig: Alle klasser som du oppgir, blir endret for å støtte oppføringsmaler. Når du har lagret endringene, kan endringene ikke fjernes fra klassene.<br><br>Du kan endre en klasse for følgende formål:<br><ul><li>For å lagre IDen til oppføringsmalen som ble brukt til å legge til et element, slik at oppføringsmalinnstillingene blir brukt når elementet skal endres</li><li>Bare for hierarkiske mappeklasser: For å støtte mappetilknytninger for oppføringsmaler</li></ul>Du må være koblet til datalageret som en bibliotekserveradministrator for å endre klasser.",
		admin_repcfg_entry_template_enable_classes_warning: "Viktig: Alle klasser som du oppgir, blir endret for å støtte oppføringsmaler. Når du har lagret endringene, kan endringene ikke fjernes fra klassene.<br><br>Du må være koblet til datalageret som en bibliotekserveradministrator for å endre klasser.",
		admin_repcfg_entry_template_enable_classes_available: "Tilgjengelige klasser",
		admin_repcfg_entry_template_enable_classes_selected: "Valgte klasser",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Lagre oppføringsmal-ID",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Endre denne klassen slik at den lagrer IDen til oppføringsmalen som ble brukt til å legge til et element, slik at oppføringsmalinnstillingene blir brukt når elementet skal endres.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Lagre mappetilknytninger",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Endre denne klassen slik at den kan støtte mappetilknytninger for oppføringsmaler. Dette alternativet er bare tilgjengelig for hierarkiske mappeklasser.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Denne klassen er allerede endret for å lagre oppføringsmal-IDen. Du kan ikke fjerne dette alternativet.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Denne klassen er allerede endret for å lagre mappetilknytninger. Du kan ikke fjerne dette alternativet.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Bare hierarkiske mappeklasser og ikke-hierarkiske klasser kan brukes til å lagre mappetilknytninger.",
		admin_repcfg_entry_template_root_folder_association_title: "Oppføringsmaler knyttet til rotmappen:",
		admin_repcfg_entry_template_root_folder_association_hover: "Oppgi hvilke oppføringsmaler du vil knytte til rotmappen på ditt IBM Content Manager-datalager.<br /><br />Hvis du knytter oppføringsmaler til rotmappen og brukere legger til elementer i en hierarkisk mappe, vil det alltid brukes en oppføringsmal til å legge til elementer.",
		admin_repcfg_entry_template_root_folder_association_button: "Definer tilknytninger",
		admin_repcfg_oos_enable_classes_label: "Klasser som skal endres for støtte for Office Online og Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "Viktig: Alle klasser som du oppgir, blir endret for å fungere sammen med Microsoft Office Online eller Edit Service. Når du har lagret endringene, vil referanseattributtet som automatisk er lagt til i hver enkelt klasse, ikke kunne fjernes.<br><br>Du må være koblet til datalageret som en bibliotekserveradministrator for å endre klasser.",
		admin_repcfg_oos_enable_classes_available: "Tilgjengelige klasser",
		admin_repcfg_oos_enable_classes_selected: "Valgte klasser",
		admin_repcfg_oos_enable_classes_note: "Viktig:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Denne klassen støttes ikke med Microsoft Office Online eller Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Versjonspolicyen for klassen er satt til always version, noe Microsoft Office Online eller Edit Service ikke støtter. Velg en annen klasse.",
		admin_repcfg_download_recording: "Spor nedlastinger:",
		admin_repcfg_download_recording_hover: "Nedlastinger blir sporet som standard når Social Collaboration Base Extensions-tillegget er installert i datalageret. men hvis du deaktiverer dette alternativet, kan det forbedre ytelsen til datalageret.<br><br>Hvis du deaktiverer dette alternativet, vil brukerne se antallet nedlastinger som skjedde før alternativet ble deaktivert.",
		admin_repcfg_sync_service: "Sync Services:",
		admin_repcfg_download_ignored: "Ignorer nedlastinger for bestemte brukere:",
		admin_repcfg_download_ignored_hover: "Du kan ignorere nedlastinger som er forespurt av bestemte brukere, for eksempel administratorer eller systemkontoer, slik at verdien gjenspeiler mer nøyaktig antall brukere som har lastet ned et dokument. Hvis du for eksempel har en bestemt konto som brukes til å laste ned innhold for å generere en månedlig rapport, kan du ignorere nedlastinger som er forespurt av den kontoen.<br><br><b>Begrensning:</b> Du kan ikke oppgi grupper.",

		admin_repcfg_add_as_major_version: "Legg til som hovedversjon:",
		admin_repcfg_enable_add_as_major_version: "Ja",
		admin_repcfg_disable_add_as_major_version: "Nei",
		admin_repcfg_checkin_as_major_version: "Sjekk inn som en hovedversjon:",
		admin_repcfg_enable_checkin_as_major_version: "Ja",
		admin_repcfg_disable_checkin_as_major_version: "Nei",
		admin_repcfg_annotation_security: "Annotasjonssikkerhet:",
		admin_repcfg_inherit_annotation_security: "Dupliser sikkerheten til dokumentet som inneholder annotasjonen",
		admin_repcfg_default_annotation_security: "Bruk standard annotasjonssikkerhet",
		admin_repcfg_connection_point: "Tilkoblingspunkt for arbeidsflyt:",
		admin_repcfg_include_workflow_definition: "Vis definisjonsklasse for arbeidsflyt:",
		admin_repcfg_include_form_template: "Vis skjemamalklasse:",
		admin_repcfg_enable_include_workflow_definition: "Ja",
		admin_repcfg_disable_include_workflow_definition: "Nei",

		admin_repcfg_status_columns: "Statusikoner:",
		admin_repcfg_status_columns_hover: "Oppgi statusene du vil vise ikoner for. Statusikonene blir vist ved siden av dokumenter, mapper og aktivitetsposter på innholdslisten.",
		admin_repcfg_status_columns_documents_or_folders: "Vis et ikon når dokumenter eller mapper:",
		admin_repcfg_status_columns_documents: "Vis et ikon når dokumenter:",
		admin_repcfg_status_columns_documents_checked_out: "Er sjekket ut",
		admin_repcfg_status_columns_documents_declared_records: "Er deklarert som poster",
		admin_repcfg_status_columns_documents_minor_versions: "Har underversjoner",
		admin_repcfg_status_columns_documents_compound_document: "Er sammensatte dokumenter",
		admin_repcfg_status_columns_documents_bookmarks: "Har bokmerker",
		admin_repcfg_status_columns_documents_hold: "Er sperret",
		admin_repcfg_status_columns_documents_notes: "Har merknader",
		admin_repcfg_status_columns_work_items: "Vis et ikon når arbeidselementer:",
		admin_repcfg_status_columns_work_items_locked: "Er låst",
		admin_repcfg_status_columns_work_items_checked_out: "Er sjekket ut",
		admin_repcfg_status_columns_work_items_deadline: "Har en tidsfrist",
		admin_repcfg_status_columns_work_items_suspended: "Er stoppet midlertidig",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF-konfigurasjonsfil:",
		admin_repcfg_transform_xml_file: "Tilpasset transformeringsfil:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Aktiver",
		admin_repcfg_disable_ssl: "Deaktiver",
		admin_repcfg_keyringdb_file: "Nøkkelringdatabasefil:",
		admin_repcfg_keyringstash_file: "Nøkkelring-stash-fil:",
		admin_repcfg_od_sso: "Enkeltpålogging",
		admin_repcfg_od_enable_sso: "Aktiver",
		admin_repcfg_od_disable_sso: "Deaktiver",
		admin_repcfg_od_sso_password: "Passord",
		admin_repcfg_advanced_label: "Avansert",
		admin_repcfg_custom_properties_label: "Tilpassede egenskaper:",
		admin_repcfg_new_button_label: "Ny",
		admin_repcfg_edit_button_label: "Rediger",
		admin_repcfg_delete_button_label: "Slett",
		admin_repcfg_custom_head1: "Navn",
		admin_repcfg_custom_head2: "Verdi",
		admin_repcfg_ecpdialog_title_new: "Ny tilpasset egenskap",
		admin_repcfg_ecpdialog_title_edit: "Rediger tilpasset egenskap",
		admin_repcfg_ecpdialog_name: "Navn:",
		admin_repcfg_ecpdialog_value: "Verdi:",
		admin_repcfg_ecpdialog_save: "Lagre",
		admin_repcfg_ecpdialog_create: "Opprett",
		admin_repcfg_ecpdialog_cancel: "Avbryt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Denne verdien er obligatorisk. Verdien kan ikke inneholde blanktegn og kan ikke være et duplikat.",

		admin_repcfg_cmis_use_gzip_encoding: "Bruk GZIP-koding:",

		admin_repcfg_task_mgr_proxy: "Tilkoblings-ID for Task Manager:",
		admin_repcfg_task_mgr_proxy_hover: "For Box-deling eller grupperomsletting bruker Task Manager en administratorbruker-ID og passord til å kjøre bakgrunnsoppgaver som endrer datalageret.<br><br>Klikk på Definer og logg deg på datalageret ved hjelp gyldig bruker-ID og passord for en datalageradministrator.",
		admin_task_manager_not_enabled_warning: "Dette alternativet krever oppgavestyrertjenesten, men oppgavestyrertjenesten er ikke aktivert.  Du kan aktivere oppgavestyrertjenesten for alle skrivebord på siden Generelt i Innstillinger.",
		admin_task_manager_not_enabled_and_user_warning: "Dette alternativet krever oppgavestyrertjenesten, men oppgavestyrertjenesten er ikke aktivert. På denne siden definerer du tilkoblings-IDen for oppgavestyreren, og på siden Generelt i Innstillinger aktiverer du oppgavestyrertjenesten for alle skrivebord.",
		admin_task_manager_user_id_pw_not_set_warning: "Dette alternativet krever oppgavestyrertjenesten og en administratorbruker-ID og passord. På denne siden definerer du tilkoblings-IDen for oppgavestyreren.",
		admin_repcfg_teamspaces_delete_task_id: "Datalageradministrator:",
		admin_repcfg_teamspaces_delete_task_password: "Passord:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Du må oppgi en bibliotekserveradministrator for at oppgavestyrertjenesten skal kunne slette et grupperom på datalageret.",
		admin_repcfg_teamspaces_delete_task_hover: "Som standard blir et grupperom skjult når en bruker sletter det. Alle mapper og dokumenter i grupperommet blir liggende på datalageret. <br /> <br />Når du aktiverer dette alternativet, er det bare dokumenter som er lagret i andre mapper på datalageret, som blir liggende på datalageret.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Hvis du har et stort antall grupperom i ditt miljø, kan det ta lang tid å vise alle grupperom på flippen <b>Grupperom</b>. Du kan velge dette alternativet hvis du vil redusere hvor lang tid det tar å fylle ut listen.<br /><br />Hvis en bruker trenger å arbeide med et grupperom som er utenfor området du oppgir, kan brukeren bruke feltet <b>Filter</b> for å finne grupperommet.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Hvis du velger dette alternativet, kan brukere som har eierrollen i et grupperom, endre rollene som er knyttet til grupperom som ble opprettet før IBM Content Navigator, versjon 2.0.2.<br /><br />Dette alternativet påvirker ikke grupperom som er opprettet med IBM Content Navigator, versjon 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Oppgi om du vil at brukerne skal kunne opprette grupperom og grupperommaler i dette datalageret.<br /><br />Viktig: Datalageret må støtte hierarkiske mapper.<br /><br />Hvis du aktiverer grupperom, oppretter IBM Content Navigator datamodellen for grupperom i datalageret. Datamodellen inneholder ACL-objekter, rettigheter, rettighetssett og to nye elementtyper.",
		admin_repcfg_folder_selector_hover: "Velg mappen du vil bruke som rotmappe når brukerne blar gjennom etter dokumenter. Hvis hierarkiske mapper ikke er konfigurert for datalageret, gjør denne innstillingen det mulig å støtte blaing ved å definere en rotmappe. Hvis hierarkiske mapper er konfigurert for datalageret, overstyrer denne innstillingen rotmappen som er konfigurert for datalageret.",
		admin_repcfg_cm_use_sso_hover: "Oppgi om du vil tillate enkeltpålogging for brukere med rettighetssettet Pålitelig pålogging.<br /><br />Viktig: Enkeltpålogging må være aktivert på Content Manager-serveren, og WebSphere-applikasjonsserveren må være konfigurert for LTPA hvis denne konfigurasjonsparameteren skal fungere.",
		admin_repcfg_cm_direct_retrieve_hover: "Direkte henting er aktivert som standard fordi det tillater at webklienten raskt kan hente innhold fra ressursstyrer. <br /><br />Du kan deaktivere dette alternativet hvis du ikke vil at klientapplikasjonen skal få tilgang til ressursstyrer direkte, eller hvis du har en brannmur eller proxy-server som hindrer webklienten fra å få tilgang til ressursstyrer via URLer. En brannmur kan for eksempel forhindre at brukerne kan se dokumenter i applettvisningsprogrammet når direkte henting er aktivert.",
		admin_repcfg_cmItemTypesToDisplay: "Hvis du ikke vil at brukerne skal se ressurselementtypene og elementelementtypene på IBM Content Manager-serveren, kan du vise bare dokumentmodellelementtypene. Elementtypene blir vist når brukerne oppretter søk, legger til dokumenter og oppretter mapper.",
		admin_repcfg_cm_language_codes_hover: "Oppgi hvilke språk data skal returneres for fra Content Manager-serveren. Listen over tilgjengelige språk styres av listen over språkdefinisjoner på serveren.<br /><br />Husk: Data i webklienten blir vist på språket som er definert i brukerens nettleser.",
		admin_repcfg_cm_pdf_conversion_hover: "Oppgi dokumenttypene som skal konverteres til PDF når en bruker sender et dokument med flere deler som et e-postvedlegg. Alle delene blir slått sammen til ett enkelt PDF-dokument.",
		admin_repcfg_use_teamspaces_p8_hover: "Oppgi om du vil at brukerne skal kunne opprette grupperom og grupperommaler i dette datalageret.<br /><br />Hvis du aktiverer grupperom, oppretter IBM Content Navigator datamodellen for grupperom i datalageret. Datamodellen inneholder egenskapsmaler, tilpassede objekter, et mappeobjekt og flere mapper.",
		admin_repcfg_use_entry_template_p8_hover: "Oppgi om du vil at brukerne skal kunne opprette og administrere oppføringsmaler i dette datalageret fra IBM Content Navigator. Hvis du ikke aktiverer denne funksjonen, kan brukerne søke etter og bruke oppføringsmaler som allerede finnes i datalageret.<br /><br />Hvis du aktiverer administrasjon av oppføringsmaler, oppdaterer IBM Content Navigator datamodellen for oppføringsmaler i datalageret. Oppdateringen inkluderer nye egenskaper. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Les mer</a>",
		admin_repcfg_use_entry_template_cm_hover: "Oppgi om du vil at brukerne skal kunne opprette og administrere oppføringsmaler i dette datalageret fra IBM Content Navigator.<br /><br />Hvis du aktiverer administrasjon av oppføringsmaler, oppretter IBM Content Navigator datamodellen for oppføringsmaler i datalageret. Datamodellen inneholder et nytt ACL-objekt, nye egenskaper og en ny posttype. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Les mer</a>",
		admin_repcfg_sync_service_p8_hover: "Oppgi om du vil at brukerne skal kunne synkronisere favorittelementene sine på tvers av arbeidsstasjoner og mobile enheter.<br><br><b>Viktig:</b> Hvis du vil bruke denne funksjonen, må du også utføre følgende oppgaver:<br><ul><li>Oppgi <b>Felles Sync Services-URL</b> i seksjonen <b>Sync Services</b> i administrasjonsverktøyet.</li><li>Legg til dette datalageret på et skrivebord som Sync Services er aktivert for.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Oppgi om alternativet for hovedversjon skal velges som standard når brukerne legger til dokumenter i datalageret.<br /><br />Brukerne kan oppheve dette alternativet hvis de vil legge til et dokument som en underversjon.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Oppgi om alternativet for hovedversjon skal være valgt som standard når brukerne sjekker inn dokumenter i datalageret.<br /><br />Brukerne kan oppheve dette alternativet hvis de vil sjekke inn et dokument som en underversjon.",
		admin_repcfg_p8_annotation_security_hover: "Oppgi hvilken type sikkerhet som skal brukes som standard for merkinger.<br /><br />Brukerne kan endre sikkerheten for merkinger.",
		admin_repcfg_p8_connection_point_hover: "Hvis du vil bruke IBM FileNet P8-arbeidsflyter, må du velge et Process Engine-tilkoblingspunkt. Tilkoblingspunktet du velger, bestemmer hvilke arbeidsflyter som er tilgjengelige for brukerne som har tilgang til dette datalageret.",
		admin_repcfg_p8_include_workflow_definition_hover: "Hvis du viser klassen for IBM FileNet P8-arbeidsflytdefinisjonsdokumenter i webklienten, kan brukerne søke etter og legge til arbeidsflytdefinisjoner i datalageret.",
		admin_repcfg_p8_include_form_template_hover: "Hvis du viser klassen for IBM FileNet P8-skjemamaldokumenter i webklienten, kan brukerne søke etter og legge til skjemamaler i datalageret.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Oppgi den fullstendige banen til AFP2PDF-konfigurasjonsfilen for dette datalageret på webapplikasjonsserveren. AFP2PDF Transform er nødvendig for å vise og skrive ut AFP-data.<br /><br />Husk: AFP2PDF Transform må være installert hvis du skal bruke denne parameteren.",
		admin_repcfg_od_transform_xml_file_hover: " Hvis du vil bruke en egendefinert transformering til konvertering av Content Manager OnDemand-innhold, oppgir du den fullstendige banen til XML-filen som definerer transformeringen. XML-filen må finnes på webapplikasjonsserveren.",
		admin_repcfg_od_ssl_hover: "Oppgi om SSL skal brukes til å kryptere kommunikasjon mellom IBM Content Navigator-applikasjonsserveren og Content Manager OnDemand-bibliotekserveren og objektserverne.<br /><br />Viktig: Når du aktiverer SSL for Content Manager OnDemand, omfatter det ikke kommunikasjonen mellom IBM Content Navigator-applikasjonsserveren og webserveren eller brukernes arbeidsstasjoner.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Oppgi den fullstendige banen til nøkkelringdatabasefilen for dette datalageret på webapplikasjonsserveren. For eksempel C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Nøkkelringdatabasefilen inneholder dine klarerte rotsertifikater. Du bør bruke sterk filsystembeskyttelse for å forhindre uautorisert tilgang til denne filen.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Oppgi den fullstendige banen til nøkkelring-stash-filen for dette datalageret på webapplikasjonsserveren. For eksempel C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Nøkkelring-stash-filen inneholder passordet for nøkkelringdatabasefilen. Du bør bruke sterk filsystembeskyttelse for å forhindre uautorisert tilgang til denne filen.",
		admin_repcfg_od_sso_password_hover: "Oppgi passordet som skal brukes for enkeltpålogging på OnDemand-serveren.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java-APIen støtter tilpassede egenskaper. Hvis du vil bruke noen tilpassede egenskaper ved tilkobling til datalageret gjennom webklienten, oppgir du navn og verdier for de tilpassede egenskapene.<br /><br />Hvis du vil ha mer informasjon om støttede tilpassede egenskaper, kan du se ODWEK Java-APIen Javadocs i underkatalogen /api under ODWEK-installeringskatalogen.",
		admin_repcfg_od_custom_properties_name_hover: "Oppgi egenskapsnavnet.",
		admin_repcfg_od_custom_properties_value_hover: "Oppgi egenskapsverdien.",
		admin_repcfg_od_use_sso_hover: "Oppgi om enkeltpålogging skal tillates for brukere.<br /><br /><b>Viktig:</b> Enkeltpålogging må være aktivert på Content Manager OnDemand-serveren hvis denne konfigurasjonsparameteren skal fungere.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Bruk GZIP-koding for denne CMIS-kilden.",
		admin_repcfg_cm_use_part_file_name: "Filnavn som skal brukes ved nedlasting av dokumenter:",
		admin_repcfg_cm_use_part_file_name_help: "Oppgi hvordan filnavnene til dokumenter avgjøres når brukere laster ned dokumenter.",
		admin_repcfg_cm_use_part_file_name_enable: "Bruk filnavnet",
		admin_repcfg_cm_use_part_file_name_disable: "Bruk navnet på elementet i datalageret",
		admin_repcfg_add_doc_name: "Standardnavn for et dokument som blir lagt til:",
		admin_repcfg_add_doc_name_hover: "Brukerne kan endre navnet før de legger til dokumentet.",
		admin_repcfg_add_doc_name_empty: "Ingen (tom)",
		admin_repcfg_add_doc_name_file_name: "Filnavnet for det valgte dokumentet",

		admin_repcfg_compound_documents: "Funksjoner for sammensatte dokumenter:",
		admin_repcfg_compound_documents_hover: "Aktiver P8-funksjoner for sammensatte dokumenter, for eksempel navigering.",
		admin_repcfg_cm_action_list_config_enabled: "Handlingsliste for arbeidselement:",
		admin_repcfg_cm_action_list_config_hover: "Når du konfigurerer dokumentruting i Content Manager-systemadministrasjonsklienten, kan du oppgi en liste med handlinger som en bruker kan utføre på et arbeidselement.<br /><br />Aktiver dette alternativet hvis du vil bruke handlingslisten fra Content Manager-serveren. Disse innstillingene brukes på hurtigmenyen og i vinduet Rediger egenskaper for arbeidselementet.<br /><br /><b>Viktig:</b> Innstillingene i handlingslisten overstyrer eventuelle tilpassede menyer du konfigurerer i Content Navigator-administrasjonsverktøyet. Hvis det ikke er noen innstillinger på handlingslisten, vil ikke brukeren kunne utføre noen handlinger på arbeidselementer.",

		admin_repcfg_box_share: "Box-deling",
		admin_repcfg_box_share_p8_hover: "Tillater brukere å dele et dokument fra dette datalageret. Deling av et dokument består i å kopiere filen til Box, opprette en link og sende linken via e-post.<br /><br />Hvis du aktiverer Box-deling, oppretter IBM Content Navigator datamodellen for Box-deling på datalageret. Hvis du vil aktivere IBM Content Navigator-tillegget for Box-deling, må du være koblet til datalageret som en bibliotekserveradministrator.",

		admin_menu_type_icon: "Ikon for menytype",
		admin_menu_toolbar_hover: "Verktøylinje",
		admin_menu_toolbar_custom_hover: "Tilpasset verktøylinje",
		admin_menu_contextMenu_hover: "Hurtigmeny",
		admin_menu_contextMenu_custom_hover: "Tilpasset hurtigmeny",

		admin_menu_contextMenu_custom_empty: "Ingen tilpassede hurtigmenyer er definert i de konfigurerte plugin-modulene.",
		admin_menu_toolbar_custom_empty: "Ingen tilpassede verktøylinjer er definert i de konfigurerte plugin-modulene.",

		admin_file_type_category_filters: "Filtypefiltre:",
		admin_file_type_category_filters_hover_help: "Oppgi listen over filtyper som brukerne kan bruke i disse situasjonene:<ul><li>For å begrense listen over resultater når de søker eller blar i IBM Content Navigator for Microsoft Office<li>For å begrense listen over resultater når du søker i et IBM FileNet P8-datalager i webklienten<li>For å begrense hvilke typer av filer som brukere kan legge til i datalageret ved hjelp av en oppføringsmal</ul>",
		admin_file_type_only_use_in_et_folder_association: "Vis bare i mappetilknytninger for oppføringsmaler",
		admin_office_config_properties_label: "Office-egenskaper",
		admin_office_config_type_label: "Datatype",
		admin_office_config_mapped_property_label: "Datalageregenskaper",
		admin_office_config_properties_hover_help: "Skriv inn og legg deretter til navnet på hver enkelt Microsoft Office-egenskap du vil tilordne til en datalageregenskap. Datatypen for alle egenskaper må samsvare",
		admin_office_config_mapped_property_hover_help: "Hvis du vil tilordne Office-egenskapene til mer enn en enkelt datalageregenskap, må du opprette en ny egenskapstilordning",
		admin_new_property_mapping_title: "Tilordning av ny egenskap",
		admin_property_mapping_title: "Tilordning av redigering av egenskap",
		admin_property_mapping_instruction: "Oppgi hvilke Microsoft Office-egenskaper du vil tilordne til en egenskap i datalageret. Datatypen for Office-egenskapene må samsvare med datatypen for egenskapen i datalageret. <br /><br />Hvis et Office-dokument har mer enn en enkelt egenskap fra tilordningen, bruker IBM Content Navigator den første egenskapen på listen til å fylle ut egenskapen i datalageret.",
		admin_ms_general_settings: "Generell konfigurasjon:",
		admin_ms_delete_local_settings: "Slett lokale filer når brukere:",
		admin_ms_outlook_options: "Outlook-integrering:",
		admin_ms_enable_props_mapping: "Tilordne Office-egenskaper til datalageregenskaper når brukere:",
		admin_ms_open_doc_when_checkout: "Automatisk sjekker ut et dokument når det blir åpnet",
		admin_ms_open_doc_when_checkout_hover_help: "Hvis du velger dette alternativet, hindrer du brukeren i å overskrive filen i datalageret med en eldre versjon av filen.",
		admin_ms_prompt_close_office: "Be brukerne om å sjekke inn dokumenter når de lukker Office-applikasjoner",
		admin_ms_prompt_close_office_hover_help: "Hvis du velger dette alternativet, hindrer du at brukere glemmer å sjekke inn det de har gjort.",
		admin_ms_add_with_entry_template_only: "Vis bare handlingen Legg til med mal",
		admin_ms_delete_local_on_add: "Slett lokale filer når brukere legger til dokumenter",
		admin_ms_delete_local_on_checkin: "Slett lokale filer når brukere sjekker inn dokumenter eller avbryter utsjekking",
		admin_ms_delete_local_on_add_hover_help: "Når en bruker legger til et dokument i IBM Content Navigator for Microsoft Office, blir dokumentet lagt til i datalageret, og den lokale kopien av dokumentet forblir åpen slik at brukere umiddelbart kan sjekke ut dokumentet for å gjøre endringer.<br /><br />Velg dette alternativet hvis du vil at den lokale kopien av dokumentet automatisk skal lukkes og slettes etter at dokumentet er lagt inn i datalageret.",
		admin_ms_delete_local_on_checkin_hover_help: "Når en bruker sjekker inn et dokument i IBM Content Navigator for Microsoft Office, blir dokumentet sjekket inn i datalageret, og den lokale kopien av dokumentet forblir åpen. Også etter at en utsjekking er avbrutt forblir den lokale kopien av dokumentet åpen. Når den lokale kopien er åpen, kan brukere umiddelbart sjekke ut dokumentet igjen for å gjøre endringer.<br /><br />Velg dette alternativet hvis du vil at den lokale kopien av dokumentet automatisk skal lukkes og slettes etter at dokumentet enten er sjekket inn eller at en utsjekking er avbrutt.",
		admin_ms_delete_local_on_save: "Lagre et dokument",
		admin_ms_prompt_for_props_on_add: "Be brukere om å oppgi egenskapsverdier når de legger inn e-poster i datalageret",
		admin_ms_prompt_for_props_on_add_hover_help: "Hvis du ikke velger dette alternativet, bruker webklienten Outlook-egenskapstilordningen som er definert for datalageret.<br /><br />Hvis du har knyttet oppføringsmaler til mappen som e-postene blir lagt inn i, blir brukeren kanskje ikke spurt om noen egenskaper.",
		admin_ms_delete_email_on_add: "Slett e-posten fra e-postserveren når den e-posten blir lagt til i datalageret",
		admin_ms_send_email_as_link_only: "Hindre brukere i å sende dokumenter som vedlegg",
		admin_ms_send_email_as_link_only_hover_help: "Hvis du velger dette alternativet, kan brukerne bare sende dokumenter som linker fra Outlook. Dette alternativet sikrer at bare brukere som har riktig tilgang til datalageret, kan vise dokumenter.",
		admin_ms_enable_prop_mapping_for_add: "Tilordne Office-egenskaper til datalageregenskaper når brukere legger til eller sjekker inn dokumenter",
		admin_ms_checkout_document_after_add: "Sjekk ut dokumenter automatisk etter at de er lagt til i datalageret",
		admin_no_default_document_type_filtering: "Returner alle dokumenttyper som standard når brukere kjører søk",
		admin_no_default_document_type_filtering_hover_help: "I IBM Content Navigator for Microsoft Office er standard virkemåte at brukerne bare ser dokumenttypen for den gjeldende applikasjonen når de kjører søk. For eksempel er Word-dokumenttypen valgt som standard når de søker fra Microsoft Word.<br/><br/>Men hvis du velger dette alternativet, tømmes Dokumenttyper-avmerkingsboksene slik at brukerne ser alle dokumentene som er returnert av et søk. Brukerne kan overstyre denne innstillingen ved å velge en eller flere dokumenttyper før de kjører søk.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Oppgi om du vil tilordne dokumentegenskapene som er definert for Microsoft Office-dokumenter, til egenskaper som er definert i datalageret.<br /></br /><b>Viktig:</b> Hvis du aktiverer denne funksjonen, må du konfigurere Office-egenskapene for hvert enkelt datalager i miljøet. Hvis du ikke tilordner Office-egenskapene til datalageregenskapene, vil ikke denne funksjonen virke.<br /><br />Denne innstillingen gjelder ikke for Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Velg dette alternativet for å redusere antall trinn som brukerne må utføre for å arbeide med dokumenter etter at dokumentene er lagt til i datalageret.<br /></br /><b>Tips:</b> For å sikre at brukerne sjekker filene inn igjen i datalageret, velger du <b>Be brukerne om å sjekke inn dokumenter når de lukker Office-applikasjoner</b>.",
		admin_ms_show_details_recently_used: "Vis detaljer for elementet <b>Nylig brukt</b>",
		admin_ms_show_details_recently_used_hover_help: "Når du viser listen med nylig brukte elementer, blir detaljene for elementene som standard skjult, slik at det kan vises flere elementer. Når du velger dette alternativet, vises som standard detaljene for det første dokumentet i detaljruten på listen med nylig brukte elementer.",
		admin_ms_show_no_permissions_warning: "Vis advarsler når brukere redigerer egenskaper eller sjekker inn et dokument, men ikke har tillatelse til å vise dokumentets oppføringsmal",
		admin_ms_show_no_permissions_warning_hover_help: "Hvis et dokument i datalageret ble opprettet med en oppføringsmal, men brukeren ikke har tillatelse til å vise dokumentets oppføringsmal, blir ikke oppføringsmalen hentet.<br /><br/>Så når brukere redigerer dokumentegenskapene, blir egenskapene vist uten bruk av oppføringsmalen. Og når brukeren sjekker inn dokumentet, blir dokumentet sjekket inn uten bruk av oppføringsmalen.<br /><br />Som standard utføres disse handlingene uten at brukeren blir informert om at oppføringsmalen ikke blir brukt. Det blir bare logget en advarsel i loggfilen.<br /><br />Velg dette alternativet hvis du vil vise advarsler til brukeren umiddelbart når oppføringsmalen ikke brukes.",
		admin_ms_hide_search_actions: "Komprimer søkefilterseksjonen",
		admin_ms_hide_search_actions_hover_help: "Som standard kan brukerne benytte et handlingsfilter for å oppgi en handling, en bruker eller en brukergruppe og velge en dato eller et datointervall da handlingen ble utført. Du kan for eksempel søke bare etter dokumenter du la til forrige måned.<br /><br />Hvis du ikke vil tillate brukerne å benytte handlingsfiltre, velger du dette alternativet for å skjule handlingsfiltrene og redusere antall felt som blir vist ved definering av søkekriterier.",
		admin_ms_hide_save_document: "Skjul alternativet <b>Lagre</b> på båndet",
		admin_ms_hide_save_document_hover_help: "Ved hjelp av alternativet <b>Lagre</b> kan brukerne lagre dokumentendringer i datalageret uten å sjekke inn dokumentet.",
		admin_ms_indicate_managed_email_on_add: "Angi om en e-post allerede er lagt til i datalageret",
		admin_ms_indicate_managed_email_on_add_hover_help: "Hvis du velger dette alternativet, får brukerne vite at en e-post allerede finnes i datalageret, noe som kan redusere antallet ganger en e-post blir lagt til i datalageret.  Når dette alternativet er valgt, blir en ny fargekategori kalt IBM ECM opprettet i Microsoft Outlook. Eventuell e-post som legges til i datalageret blir automatisk lagt til i kategorien Administrert i IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Legg til-alternativer i gruppen Rediger:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Oppgi hvilke <b>Legg til</b>-alternativer som skal være tilgjengelige fra gruppen <b>Rediger</b> på båndlinjen:<ul><li>Velg <b>Vis alle Legg til-alternativer</b> hvis du vil vise Legg til-knappen og alle Legg til-handlingene som er tilgjengelige fra gruppen Rediger.</li><li>Velg <b>Skjul alle Legg til-alternativer</b> hvis du vil forhindre at brukerne legger til dokumenter i datalageret, eller hvis du vil at brukerne bare skal legge til dokumenter fra et grupperom.</li><li>Velg <b>Skjul handlingen Legg til med mal</b> hvis du vil tvinge gjennom mappetilknytninger for oppføringsmaler og hindre brukere i å velge en annen oppføringsmal.</li><li>Velg <b>Vis bare handlingen Legg til med mal</b> hvis du vil kreve at brukerne legger til dokumenter ved hjelp av oppføringsmaler.</li></ul>",
		admin_ms_show_edit_group_add_button: "Vis alle Legg til-alternativer (standard)",
		admin_ms_hide_edit_group_add_button: "Skjul alle Legg til-alternativer",
		admin_ms_hide_add_with_entry_template: "Skjul handlingen Legg til med mal",
		admin_ms_managed_in_ecm: "Administrert i IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Hvis brukere viser kategorier i Microsoft Outlook, vises denne etiketten for e-post som er lagt til i et IBM Content Manager- eller IBM FileNet Content Manager-datalager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Administrert i IBM ECM-kategorinavnet kan ikke inneholde komma (,) eller semikolon (;).",
		admin_delete_open_docs_after_close: "Slett åpne dokumenter automatisk når brukerne lukker dokumentene",
		admin_admin_delete_open_docs_after_close_hover_help: "Når en bruker åpner et dokument i IBM Content Navigator for Microsoft Office, blir dokumentet lastet ned til brukerens dokumentkatalog eller til plasseringen som er oppgitt av filsporingsinnstillingene for skrivebordet.<br><br>Velg dette alternativet hvis du vil slette filer som er åpne, men som ikke er sjekket ut, når brukerne lukker dokumentene. Ved å velge dette alternativet kan du:<ul><li>Håndheve overensstemmelse med IT-policyer</li><li>Sikre at brukerne arbeider med den nyeste versjonen av dokumenter</li><li>Redusere mengden av lagerplass som brukes til å lagre dokumenter</li><ul>",
		admin_ms_custom_command_configuration: "Tilpassede kommandoer:",
		admin_ms_custom_command_configuration_hover_help: "Du kan legge til opptil fire kommandoer på IBM Content Navigator for Microsoft Office-verktøylinjen i Microsoft Office-applikasjoner. Kommandoene kan brukes til å åpne URLer. Du kan for eksempel legge til en kommando for å åpne en tjeneste som kan brukes til å søke etter brukere og grupper.",
		admin_ms_custom_command_dialog_title: "Rediger tilpasset kommando",
		admin_ms_custom_command_dialog_intro_text: "Definer en kommando som kan brukes til å åpne en URL fra IBM Content Navigator for Microsoft Office-verktøylinjen i Microsoft Office-applikasjoner.",
		admin_ms_custom_command_id: "Kommando ${0}",
		admin_ms_custom_command_available_label: "Tilgjengelig",
		admin_ms_custom_command_available_hover_help: "Hvis URLen som er definert for en kommando, trenger å frakobles for vedlikehold, kan du fjerne merket i avmerkingsboksen for kommandoen slik at kommandoen ikke blir vist i Microsoft Office.<br/><br/><b>Viktig:</b> Brukerne må logge seg av skrivebordet for at endringene skal gjenspeiles i IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "Kommando-ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etikett",
		admin_ms_custom_command_label_hover_help: "Oppgi etiketten som skal vises for kommandoen i Microsoft Office.",
		admin_ms_custom_command_description_label: "Beskrivelse",
		admin_ms_custom_command_description_hover_help: "Oppgi beskrivelsen som skal vises for kommandoen i Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Oppgi fullstendig URL som skal åpnes fra Microsoft Office. URLen kan være en webside eller tjeneste.",
		admin_ms_custom_command_icon_label: "Ikon",
		admin_ms_custom_command_icon_hover_help: "Oppgi filnavnet for ikonet som skal vises, for eksempel CommandIcon.png.<br/><br/><b>Viktig:</b> Du må legge til ikonfilen i Plugins-underkatalogen under IBM Content Navigator for Microsoft Office-installeringskatalogen på hver enkelt klientmaskin.<br/><br/>Hvis ikonfilen ikke finnes i Plugins-katalogen, eller hvis du ikke oppgir et ikon, blir standardikonet, customButtonIcon_38.gif, vist.",
		admin_ms_custom_command_group_name: "Gruppeetikett:",
		admin_ms_custom_command_group_name_hover_help: "Du kan oppgi en gruppeetikett som skal vises under de tilpassede kommandoene på båndlinjen.<br/><br/>Hvis du ikke oppgir en etikett, er gruppeetiketten <b>Tilpassede kommandoer</b>.",
		admin_ms_ribbon_tab_label: "Etikett for IBM ECM-flipp:",
		admin_ms_ribbon_tab_hover_help: "Oppgi navnet du vil skal vises for IBM Content Navigator for Microsoft Office-flippen på Microsoft Office-båndlinjen. Hvis du ikke oppgir et navn, får flippen navnet \"IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Lukk oppgaveruten når brukerne åpner dokumenter",
		admin_ms_close_task_pane_on_open_hover_help: "Velg dette alternativet hvis du vil maksimere området der brukerne kan se dokumenter i Microsoft Office.<br/><br/>Microsoft Office 2003-brukere: For å sikre at oppgaveruten blir lukket for alle dokumenter, må du aktivere MDI-modus (Multiple Document Interface) ved å klikke på <b>Alternativer</b> &gt; <b>Avansert</b> og fjerne merket for alternativet <b>Vis alle vinduer på oppgavelinjen</b>.",
		admin_ms_open_document_options: "Alternativer for åpning av dokument:",
		admin_ms_delete_local_file_options: "Alternativer for sletting av lokal fil:",
		admin_ms_add_and_checkin_options: "Alternativer for tilføyelse og innsjekking:",
		admin_ms_search_options: "Søkealternativer:",
		admin_ms_display_options: "Visningsalternativer:",
		admin_ms_bidirection_enable_label: "Aktiver støtte for toveistekst",
		admin_ms_bidirection_enable_hover_help: "Velg dette alternativet hvis du vil gjøre det mulig for brukerne å skrive inn eller vise tekst i IBM Content Navigator for Microsoft Office i en annen retning enn venstre mot høyre.",
		admin_ms_text_direction_label: "Basistekstretning for innhold:",
		admin_ms_text_direction_hover_help: "Oppgi retningen som tekst blir skrevet inn i i felt i IBM Content Navigator for Microsoft Office. Denne innstillingen styrer også hvordan elementer, for eksempel mappenavn eller egenskapsverdier, blir vist.",
		admin_ms_control_threshold_label: "Minimum antall elementer for å aktivere lookahead:",
		admin_ms_control_threshold_hover_help: "Som standard blir lookahead aktivert når antall elementer er større enn eller lik 50, for søk eller definering av egenskaper som har forhåndsdefinerte verdier på en rullegardinliste. Du kan endre minimumverdien.",

		admin_ms_default_email_class: "Klasse som skal brukes når e-post legges til",
		admin_ms_default_email_class_hover_help: "Eventuell e-post som legges til i dette datalageret fra Microsoft Outlook, vil bli lagt til klassen du oppgir. Brukere kan ikke endre klassen.",
		admin_ms_default_folder_class: "Klasse som skal brukes når mapper opprettes",
		admin_ms_default_folder_class_hover_help: "Eventuelle mapper som blir opprettet i dette datalageret fra en Microsoft Office-applikasjon, vil bli lagt til klassen du oppgir.  Brukere kan ikke endre klassen.",
		admin_ms_default_folder_warn_title: "Du kan ikke bruke klassen ${0} som klasse for å opprette mapper.",
		admin_ms_default_folder_warn_name_prop_invalid: "Navneegenskapen for klassen er ikke en streng, og navnet på mappen må være en streng.<br />Velg en annen klasse som skal brukes for å opprette mapper, eller be IBM Content Manager-administratoren om å endre navneegenskapen for klassen til en streng.",
		admin_ms_default_folder_warn_req_props: "Klassen inneholder obligatoriske egenskaper som ikke har verdier. Brukerne kan imidlertid oppgi verdier for de obligatoriske egenskapene når de oppretter mapper fra IBM Content Navigator for Microsoft Office.<br />Velg en annen klasse som skal brukes for å opprette mapper, eller be IBM Content Manager-administratoren om å gjøre de obligatoriske egenskapene valgfrie eller forhåndsdefinere en verdi for de obligatoriske egenskapene.",
		admin_ms_delimiter_for_office_properties: "Skilletegn for strengegenskaper med flere verdier",
		admin_ms_delimiter_for_office_properties_hover_help: "Oppgi tegnet som skal brukes som et skilletegn for strengegenskaper som du tilordner til strengegenskaper med flere verdier. Som standard kan du tilordne et sett med verdier til en strengegenskap med flere verdier ved å bruke semikolon (;) som skilletegn mellom verdiene. Hvis en av strengverdiene dine inneholder et semikolon, kan du imidlertid ikke legge til den strengverdien uten at skilletegnet blir endret til et annet tegn. Du kan for eksempel endre skilletegnet til et komma (,)",
		admin_ms_outlookPropertyRemembrance : "Husk innstillinger når meldinger og vedlegg legges til",
		admin_ms_outlookPropertyRemembrance_hover_help : "Egenskapsverdiene, plasseringen, klassevalget og sikkerheten som er tildelt meldingene og vedleggene, blir husket og vil bli brukt som standardinnstillinger når du legger til elementer senere.",

		admin_file_type_name_hover_help: "Navn på pekehjelp",
		admin_file_type_description_hover_help: "Beskrivelse av pekehjelp",
		admin_file_type_dialog_title: "Rediger filtypefilter",
		admin_new_file_type_dialog_title: "Nytt filtypefilter",
		admin_mobile_feature_dialog_title: "Funksjon",
		admin_mobile_feature_dialog_new_title: "Ny funksjon",
		admin_file_type_instructions: "Opprett et filter som brukere kan benytte for å begrense listen med søkeresultater. Du kan tilordne flere MIME-typer til filteret.",
		admin_file_type_filter_place_holder: "Filtrer MIME-typer",
		admin_new_button_label: "Ny",
		admin_edit_button_label: "Rediger",
		admin_delete_button_label: "Slett",
		admin_copy_button_label: "Kopier",
		admin_verify_button_label: "Verifiser",
		admin_availabe_filters_label: "Tilgjengelige filtre",
		admin_selected_filters_label: "Valgte filtre",

		admin_mobile_access: "Mobilapplikasjonstilgang:",
		admin_mobile_access_hover_help: "Hvis du vil bruke IBM Content Navigator fra en mobil enhet, bør du gjøre det mulig for brukere å få tilgang til dette skrivebordet fra mobilapplikasjonen.<br /><br />Hvis du deaktiverer tilgangen til dette skrivebordet fra mobilapplikasjonen, kan brukerne fremdeles se webklienten fra nettleseren på den mobile enheten. Webklienten er imidlertid ikke beregnet på bruk fra mobile enheter.",

		admin_mobile_access_allow_label: "Tillat brukere å:",
		admin_mobile_allow_add_photos: "Legge til bilder fra kameraet og bildebiblioteket",
		admin_mobile_allow_add_docs: "Legge til dokumenter og opprette mapper på datalageret",
		admin_mobile_allow_open_docs: "Åpne dokumenter i andre applikasjoner",
		admin_mobile_allow_add_docs_hover_help: "Brukerne kan opprette mapper eller legge til dokumenter fra andre mobilapplikasjoner, for eksempel et dokument som er lagt ved en e-post.",
		admin_mobile_allow_open_docs_hover_help: "Brukerne blir bedt om å velge applikasjonen som skal brukes til å vise det valgte dokumentet. Hvis det bare er en enkelt applikasjon tilgjengelig, brukes den.",
		admin_mobile_features: "Funksjoner:",
		admin_mobile_features_hover_help: "Oppgi hvilke funksjoner for dette skrivebordet som blir vist i mobilapplikasjonen IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Ny funksjon",
		admin_mobile_move_up_button_label: "Flytt opp",
		admin_mobile_move_down_button_label: "Flytt ned",
		admin_desktop_mobile_instructions: "Instruksjoner for mobilinnstillinger kommer her",
		admin_desktop_max_number_of_docs_to_add: "Største antall dokumenter som kan legges til:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Oppgi det største antall dokumenter som brukere kan legge til om gangen. Som standard er det 50. Du kan imidlertid oppgi en maksimalverdi på opptil 300.",
		admin_desktop_max_number_of_docs_to_modify: "Største antall elementer som kan endres:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Oppgi det største antall elementer brukerne kan endre om gangen. Som standard er det 50. Du kan imidlertid oppgi en maksimalverdi på opptil 300.",
		admin_desktop_max_conversion_size: "Maksimal datamengde for PDF-konverteringer (i MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Begrensning:</b> Denne innstillingen støttes ikke på IBM Content Manager OnDemand.<br/><br/>Oppgi den maksimale datamengden som kan konverteres til PDF. Denne grensen gjelder når brukere laster ned elementer som PDF-filer eller sender elementer via e-post som PDF-filer.<br /><br />Hvis størrelsen på hvert enkelt dokument ikke kan fastslås, blir dokumentene likevel konvertert til PDF.<br/><br/>Standardgrensen er 200 MB. Hvis grensen settes til over 200 MB, kan det påvirke systemytelsen.",
		admin_desktop_timeProperties: "Systemtid:",
		admin_desktop_time_properties_hover_help: "<b>Bare IBM FileNet P8-brukere:</b> Denne innstillingen gjelder for tilpassede egenskaper og ikke for systemegenskaper. Egenskapen Endret av vil for eksempel fremdeles vise klokkeslettdelen av systemtiden hvis du velger <b>Vis bare datodelen av systemtiden</b>.<br/><br/>Denne innstillingen endrer ikke systemtiden i datalageret.",
		admin_desktop_disable_time_stamp: "Vis fullstendig systemtid",
		admin_desktop_enable_time_stamp: "Vis bare datodelen av systemtiden",
		admin_desktop_timezone: "Tidssone:",
		admin_desktop_timezone_localuser: "Vis brukerens lokale tidssone",
		admin_desktop_timezone_alluser: "Vis samme tidssone for alle brukere",
		admin_desktop_timezone_hover_help: "Du kan oppgi om brukerne ser en systemtid som er basert på deres lokale tidssone, eller om alle brukere ser den samme systemtiden.<br/><br/>Denne innstillingen endrer ikke systemtiden i datalageret. Innstillingen du velger, bestemmer imidlertid hvilken tidssone som brukes for å opprette tidssonen i datalageret når brukere legger til eller endrer elementer.",
		admin_desktop_mobile_feature_display_label: "Vis",
		admin_desktop_mobile_feature_icon_file_label: "Ikonfil",
		admin_mobile_feature_dialog_icon_file_label: "Ikonfil:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Navn",
		admin_desktop_mobile_select_feature_label: "Velg funksjon",
		admin_desktop_mobile_feature_icon_label: "Funksjonsikon",
		admin_desktop_share_admin_none: "Administrator ikke definert.",
		admin_desktop_share_admin_edit_label: "Definer administrator...",
		admin_browse_icon: "Ikon for Bla gjennom",
		admin_search_icon: "Ikon for søk",
		admin_favorites_icon: "Ikon for Favoritter",
		admin_casesearch_icon: "Saksikon",
		admin_datacap_icon: "Datacap-ikon",
		admin_system_defined: "Systemdefinert",
		admin_icon_file_placeholder_text: "Filplassering (f.eks. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Rot",
		admin_folder_default: "Standard",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Verktøylinjer",
		admin_menu_context_menus: "Hurtigmenyer",
		admin_menu_office_toolbars: "Kommandoer for Microsoft Office-båndlinje",
		admin_menu_office_menus: "Hurtigmenyer for Microsoft Office",

		admin_file_name_label: "Filnavn:",
		admin_exportconfiguration_security_label: "Inkluder brukere og grupper som er autorisert for å bruke dette skrivebordet",
		admin_exportconfiguration_instruction: "Du kan eksportere skrivebordene dine, inkludert datalagerkonfigurasjoner og plugin-modulkonfigurasjoner som er knyttet til de valgte skrivebordene, til en fil du kan importere til en annen forekomst av IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Eksporter skrivebord",
		admin_exportconfiguration_button_label: "Eksporter",
		admin_dialog_select_all: "Velg alle",
		admin_dialog_deselect_all: "Fjern alle",

		admin_importconfiguration_instruction: "Elementene i den valgte konfigurasjonsfilen vil bli importert til dette systemet. Hvis det allerede finnes et element med samme ID på systemet, må du imidlertid bestemme om du vil beholde eller overskrive elementet.",
		admin_importconfiguration_dialog_label: "Importer skrivebord",
		admin_importconfiguration_reason_dialog_label: "Importer retusjeringsårsaker",
		admin_importconfiguration_button_label: "Importer",
		admin_to_be_imported: "Konfigurasjonselement som skal importeres",
		admin_on_target_system: "Eksisterende element på målsystem",
		admin_import_short_warning_message: "Følgende elementer finnes allerede på systemet. Velg elementene du vil erstatte på dette systemet:",
		admin_import_warning_message: "Følgende konfigurasjonselementer har samme IDer som elementene på målsystemet. Velg bare de elementene du vil importere og overskrive på målsystemet.<br /><br />Hvis du ikke vil overskrive et konfigurasjonselement, oppretter du en kopi av elementet på forekomsten du eksporterte skrivebordet fra, gir det en annen ID og knyter det til skrivebordet. Eksporter skrivebordet igjen og importer deretter skrivebordet på denne forekomsten.",
		admin_choose_file_to_import_label: "Velg fil for import:",
		admin_download_imported_log: "Last ned rapport",
		admin_desktop_import_summary: "Sammendrag av skrivebordsimport",
		admin_reason_import_summary: "Sammendrag av import av retusjeringsårsak",
		admin_rba_import_summary: "Sammendrag av import av administrasjonsrolle",
		admin_import_open_tabs_checking: "Før du kan importere skrivebord, må du lukke alle andre flipper enn flippen <bold>Skrivebord</bold> i administrasjonsverktøyet.",
		admin_import_no_conflict: "Følgende elementer vil bli importert:",
		admin_desktop_invalid: "Ugyldig skrivebord",
		admin_desktop_warning: "Skrivebordet ble lagret med advarsler.",
		admin_repos_warning: "Datalageret ble lagret med advarsler.",
		admin_config_type_icon: "Ikon for konfigurasjonselementtype",

		admin_approval_workflow: "Arbeidsflyt for godkjenninger",
		admin_approval_workflow_hover: "Tillater brukere å starte en forhåndsdefinert arbeidsflyt for godkjenninger. Du kan deaktivere arbeidsflyten for godkjenninger for å gjøre det mulig for brukerne å starte en tilpasset arbeidsflyt for godkjenninger som er definert av et abonnement. Som standard er arbeidsflyten for godkjenninger aktivert.<br><br><b>Viktig:</b> Hvis du aktiverer arbeidsflyten for godkjenninger, må du også sørge for at den ene eller begge de forhåndsdefinerte arbeidsflytdefinisjonene (ICNParallelDocumentApproval.pep og ICNSequentialDocumentApproval.pep) blir lagt til i datalageret og overført til Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Du kan ikke oppgi brukerne og gruppene som har tilgang til dette skrivebordet.",
		admin_cannot_add_desktop_members_error_explanation: "Du har ikke de nødvendige tillatelsene til å hente bruker- og gruppeinformasjon.",
		admin_cannot_add_desktop_members_error_userResponse: "Logg deg på med et annet brukernavn eller be IBM Content Manager-systemadministratoren om å gi deg UserACLOwner-rettigheten, som kreves for å hente bruker- og gruppeinformasjon.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Du kan ikke velge brukere og grupper.",
		admin_cannot_select_users_groups_error_explanation: "Du har ikke de nødvendige tillatelsene til å hente bruker- og gruppeinformasjon.",
		admin_cannot_select_users_groups_error_userResponse: "Logg deg på med et annet brukernavn eller be IBM Content Manager-systemadministratoren om å gi deg UserACLOwner-rettigheten, som kreves for å hente bruker- og gruppeinformasjon.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2-klienten ble ikke funnet.",
		oauth_client_not_found_error_explanation: "OAuth2-klient-IDen ${0} ble ikke funnet.",
		oauth_client_not_found_error_userResponse: "Kontakt systemadministratoren og gi beskjed om at OAuth2-klient-IDen ikke ble funnet.",
		oauth_client_not_found_error_adminResponse: "Se gjennom datalagerkonfigurasjon og kontroller at den inneholder riktig OAuth2-klient-ID.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Pålogging til datalager mislyktes.",
		oauth_login_failed_error_explanation: "Et forsøk på å logge seg på datalageret ${0} mislyktes.",
		oauth_login_failed_error_userResponse: "Kontroller at bruker-IDen og passordet er riktig, og prøv å logge deg på igjen.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Det oppstod en feil ved forsøk på å logge seg på ${0}.",
		oauth_error_return_error_explanation: "Autoriseringsforsøket for ${0} mislyktes.",
		oauth_error_return_error_userResponse: "Ta kontakt med systemadministratoren med følgende informasjon:  Autoriseringsforsøket for ${0} mislyktes og returnerte følgende feilmelding: <br>${1}<br><b>feil:</b> ${2}.<br><b>beskrivelse:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Du finner mer informasjon om feilen i loggfilene for webapplikasjonsserveren.  Du finner mer informasjon om loggfilene i &quot;IBM Content Navigator log files&quot; i IBM Knowledge Center. Bruk informasjonen om autoriseringsforsøket for ${0} for å prøve å løse problemet, og kontroller at OAuth2 er aktivert.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth-målapplikasjon",
		oauth_error_return_error_1: "feilmelding",
		oauth_error_return_error_2: "feil",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Ukjent OAuth-feilmelding.",

		delete_share_permission_error: "Delingen ble ikke slettet.",
		delete_share_permission_error_explanation: "Du har ikke tillatelse til å slette delingen.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Du kan ikke dele dette elementet.",
		class_not_support_share_error_explanation: "Klassen ${0} er ikke konfigurert for å støtte deling.",
		class_not_support_share_error_0: "klassenavn",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Du kan ikke dele dette elementet.",
		rbr_not_support_share_error_explanation: "Sensitivt innhold er lagt til i elementet.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Enheten som brukeren prøver å logge seg på fra, er ikke autorisert for tilgang til brukerkontoen.",
		box_oauth_error_invalid_request: "Forespørselen mangler en nødvendig parameter, inneholder en ugyldig parameterverdi, inneholder en parameter mer enn en gang, eller har feil format på andre måter.",
		box_oauth_error_unsupported_response_type: "Autorisasjonsserveren støtter ikke henting av autorisasjonskode ved hjelp av denne metoden.  Kontroller verdien for kodeparameteren i forespørselen.",
		box_oauth_error_access_denied: "Ressurseieren eller autorisasjonsserveren avviste forespørselen.",
		box_oauth_error_temporarily_unavailable: "Enheten din er nå kvotebegrenset. Du må enten redusere hyppigheten på autorisasjonsforespørslene dine eller vente en stund.",
		box_oauth_error_unknown: "Ukjent Box-feilmelding.",

		admin_default_search_type: "Standard søketype",
		admin_default_search_type_hover: "Oppgi hvilket alternativ som velges som standard i feltet <b>Søk etter</b> på menyen <b>Søkealternativer</b>.",
		admin_default_search_type_documents: "Dokumenter",
		admin_default_search_type_folders: "Mapper",
		admin_default_search_type_folders_and_documents: "Dokumenter og mapper",

		admin_restricted_search_type: "Tillat søk i",
		admin_restricted_search_type_hover: "Som standard kan brukerne søke i både dokumenter og mapper. Hvis du vil skjule alternativet Søk i og begrense søk til bare dokumenter, velger du Dokumenter og opphever valget av Mapper.</br>,</br> Hvis du vil tillate søk i både dokumenter og mapper, velger du standardalternativet som skal vises når søkeruten blir åpnet.",
		admin_restricted_search_type_documents: "Dokumenter",
		admin_restricted_search_type_folders: "Mapper",
		admin_restricted_search_type_folders_and_documents: "Dokumenter og mapper",

		admin_default_search_version: "Standard søkeversjon",
		admin_default_search_version_hover: "Oppgi hvilket alternativ som velges som standard i feltet <b>Versjon</b> på menyen <b>Søkealternativer</b>.",

		admin_all_classes_search: "Søk i alle klasser",
		admin_all_classes_search_hover: "Angi om brukere skal kunne søke i alle klasser, og i så fall hva som skal inkluderes i dokumentsøk.",
		admin_all_classes_search_removed_hover: "Alternativene for å søke i alle klasser er ikke tilgjengelige fordi context-param allPseudoClassHidden-parameteren i Navigator-applikasjonens web.xml er satt til true.",
		admin_all_classes_search_hide: "Fjern valget for å søke i alle klasser",
		admin_all_classes_search_documents_only_documents: "Et dokumentsøk inkluderer bare dokumenter, lagrede søk og oppføringsmaler",
		admin_all_classes_search_documents_non_folders: "Et dokumentsøk inkluderer alle elementer som ikke er mapper",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Trevisning:",
		admin_feature_config_tree_view_hoverhelp: "Oppgi om brukerne kan få tilgang til listen over mapper i datalageret gjennom ruten Bla gjennom. Hvis du skjuler ruten Bla gjennom, må brukerne bruke innholdslisten når de skal navigere til mapper i datalageret.",
		admin_feature_config_selected_repositories_label: "Datalagre:",
		admin_feature_config_selected_repositories_hoverhelp: "Velg datalagrene som brukerne kan få tilgang til i denne funksjonen.",
		admin_feature_config_selected_repositories_select_state_hdr: "Velg datalager",
		admin_feature_config_selected_repositories_name_hdr: "Datalagernavn",
		admin_feature_config_selected_repositories_show_hdr: "Vis",
		admin_feature_config_invalid_icon_title: "Funksjonen mangler noen nødvendige innstillinger",
		admin_feature_config_view_select_hdr: "Velg visning",
		admin_feature_config_view_hdr: "Vis",
		admin_feature_config_view: "Vis",
		admin_feature_config_views: "Visninger:",
		admin_feature_config_views_hoverhelp: "Oppgi hvilke visninger brukerne kan benytte på innholdslisten. Visningene blir vist i den rekkefølgen de er oppført. Den første valgte visningen er standardvisningen for funksjonen.<br><br><b>Viktig:</b> Hvis du aktiverer visningen Filmstripe, må du konfigurere visningsprogrammet for HTML-konvertering for å få se forhåndsvisning av dokumenter.",

		admin_custom_dialog_name: "Navn:",
		admin_custom_dialog_value: "Verdi:",
		admin_custom_setting_name_hover: "Skriv navnet på Daeja ViewONE-innstillingen du vil legge til i konfigurasjonen. Daeja ViewONE-dokumentasjonen inneholder mer informasjon om konfigurasjonsinnstillinger.",
		admin_custom_setting_value_hover: "Oppgi verdien du vil bruke for Daeja ViewONE-konfigurasjonsinnstillingen. Daeja ViewONE-dokumentasjonen inneholder mer informasjon om gyldige verdier forkonfigurasjonsinnstillingen.",

		entry_template_name_required_message: "Navnefeltet i oppføringsmalinnstillingene må fylles ut.",
		entry_template_name_invalid_message: "Navnefeltet i oppføringsmalinnstillingene kan ikke inneholde følgende tegn: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Når bestemte brukere og grupper blir valgt for feltet Del med i oppføringsmalinnstillingene, må du oppgi minst en bruker eller gruppe.",
		entry_template_no_permission_to_save_to_teamspace_message: "Du har ikke tillatelse til å legge til oppføringsmaler i grupperommet (${0}) som ble valgt fra Lagre i i oppføringsmalinnstillingene.",
		entry_template_save_in_destination_required_message: "Du må oppgi et standard lagringssted i seksjonen <b>Definer lagerplassering for elementer</b>.",
		entry_template_save_in_destination_must_select_folder: "Hvis du skjuler feltet <b>Lagre i</b> og krever at brukerne må legge til nye elementer i en mappe, må du velge en mappe i feltet <b>Standard Lagre i-plassering</b> i seksjonen <b>Definer lagerplassering for elementer</b>.",
		entry_template_what_to_save_required_message: "Gjør minst ett valg for hva vil du lagre på Definer alternativer.",
		entry_template_custom_workflow_empty_message: "Hvis du velger <b>Tilpasset arbeidsflyt...</b>, må du søke etter og velge arbeidsflyten du vil bruke.",

		entry_template_new: "Ny oppføringsmal",
		entry_template_name_hover: "Navnet på oppføringsmalen kan ikke inneholde følgende tegn: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Navnet på oppføringsmalen kan ikke inneholde noen av følgende tegn: * \\ / : ? \" < > |",
		entry_template_description_hover: "Oppgi en beskrivelse som vil gjøre det mulig for brukerne å skille denne oppføringsmalen fra andre oppføringsmaler.",
		entry_tempalte_save_in_hover: "Oppgi hvor du vil lagre oppføringsmalen.<br><br><b>Begrensning:</b> Hvis du lagrer oppføringsmalen i et grupperom, kan du bare bruke oppføringsmalen i grupperommet.",
		entry_template_inherit_hover: "Hvis du velger dette alternativet, blir sikkerhetsinnstillingene for den overordnede mappen lagt til på listen med brukere og grupper som oppføringsmalen deles med.",
		entry_template_builder_aria_label: "Oppføringsmalbygger",
		entry_template_builder_layout_aria_label: "Egenskapsbygger for oppføringsmal",

		entry_template_settings_document: "Definer oppføringsmalen",
		entry_template_settings_folder: "Definer lagerplassering for element",
		entry_template_settings_folder_intro: "Oppgi hvor elementer som blir lagt til ved hjelp av oppføringsmalen, skal lagres.",
		entry_template_settings_properties: "Definer elementegenskaper",
		entry_template_settings_properties_intro: "Du kan oppgi standard eller forhåndsdefinerte verdier for elementene som blir lagt til ved hjelp av denne oppføringsmalen. I tillegg kan du endre layouten for egenskapene for å styre hvilke egenskaper som blir vist, og hvilken rekkefølge de blir vist i.",
		entry_template_settings_workflow: "Konfigurer en arbeidsflyt for elementet",
		entty_template_settings_workflow_intro: "Oppgi om en arbeidsflyt blir startet når elementer blir lagt til ved hjelp av oppføringsmalen.",
		entry_template_settings_security: "Definer elementsikkerhet",
		entry_template_settings_security_intro: "Du kan oppgi standard eller forhåndsdefinert sikkerhet for elementene som blir lagt til ved hjelp av denne oppføringsmalen. Brukere med nødvendige tillatelser kan kanskje endre sikkerheten for elementene etter at de er lagt til.",
		entry_template_settings_options: "Definer alternativer for elementet",
		entry_template_xt_warning: "Hvis du lagrer endringer for denne oppføringsmalen, blir den konvertert fra en IBM Workplace XT-oppføringsmal til en IBM Content Navigator-oppføringsmal. IBM Workplace XT støtter ikke IBM Content Navigator-oppføringsmaler.",

		entry_template_properties_edit_layout: "Rediger layout...",
		entry_template_properties_read_only: "Skrivebeskyttet",
		entry_template_properties_hidden: "Skjult",

		entry_template_destination_show: "Vis feltet <b>Lagre i</b>",
		entry_template_destination_show_hover: "Hvis du viser feltet <b>Lagre i</b>, kan brukerne endre hvor elementer blir lagret.",
		entry_template_destination_hide: "Skjul feltet <b>Lagre i</b>",
		entry_template_destination_hide_hover: "Hvis du skjuler feltet <b>Lagre i</b>, kan ikke brukerne endre hvor elementer blir lagret.",
		entry_template_folder_save_in_default: "Standard <b>Lagre i</b>-plassering:",
		entry_template_folder_save_in_default_hover: "Oppgi standardplasseringen der elementer blir lagt til ved bruk av denne oppføringsmalen.<br><br>Standardplasseringen du velger, gir begrensninger på virkemåten ved bruk av oppføringsmalen:<ul><li>Brukerne kan ikke velge et annet datalager.</li><li>Hvis standardplasseringen er et grupperom, kan ikke brukerne velge et annet grupperom.</li></ul>Hvis brukerne knytter denne oppføringsmalen til en mappe, kan imidlertid brukerne overstyrer lagerplasseringen som er konfigurert for denne oppføringsmalen.",
		entry_template_folder_restrict_choice: "Krev at brukerne legger til elementer i standardplasseringen eller en mappe under standardplasseringen",
		entry_template_folder_file_in_required: "Krev at brukerne legger til nye elementer i en mappe",
		entry_template_folder_file_in_required_hover: "Hvis du ikke velger dette alternativet, kan brukerne legge til elementer i rotmappen på datalageret.<br><br><b>Begrensning:</b> Skrivebordskonfigurasjonen krever kanskje at brukerne velger en mappe.",

		entry_template_document_type_show: "Vis feltet <b>Hva vil du lagre</b>",
		entry_template_document_type_show_hover: "Hvis du viser feltet <b>Hva vil du lagre</b>, blir elementene du velger, vist som alternativer i feltet <b>Hva vil du lagre</b>.",
		entry_template_document_type_hide: "Skjul feltet <b>Hva vil du lagre</b>",
		entry_template_document_type_hide_hover: "Hvis du skjuler feltet <b>Hva vil du lagre</b>, blir den typen dokument du velger, alltid brukt når brukerne legger til dokumenter ved hjelp av denne oppføringsmalen.",
		entry_template_document_type: "Denne oppføringsmalen kan brukes til å legge til følgende elementer:",
		entry_template_document_type_hover: "Hvis du viser feltet <b>Hva vil du lagre</b>, blir elementene du velger, vist som alternativer i feltet <b>Hva vil du lagre</b>.<br><br>Hvis du skjuler feltet <b>Hva vil du lagre</b>, blir den typen dokument du velger, alltid brukt når brukerne legger til dokumenter ved hjelp av denne oppføringsmalen.",

		entry_template_misc: "Ekstra alternativer:",
		entry_template_auto_classify_show: "Klassifiser innholdet i dokumentet automatisk",
		entry_template_auto_classify_show_hover: "Når et dokument blir klassifisert i FileNet Content Manager, blir innholdet i dokumentet undersøkt for å fastslå den riktige plassen og egenskapsverdiene for dokumentet.<br><br>Spør systemadministratoren om innholdsklassifisering er aktivert på Content Platform Engine.<br><br>Hvis du aktiverer dette alternativet, kan klassen og egenskapene for dokumentet bli endret når en bruker legger til dokumentet i datalageret.",
		entry_template_allow_duplicate_file_names: "Tillat dokumenter med duplikatfilnavn",
		entry_template_allow_duplicate_file_names_hover: "Som standard kan du legge til dokumenter med det samme navnet i en mappe i FileNet Content Manager. Du kan oppheve valget av dette alternativet hvis du vil at hver enkelt fil på den valgte lagerplasseringen skal ha et unikt navn.",
		entry_template_allow_compound_documents: "Tillat dette dokumentet å være overordnet for et sammensatt dokument",
		entry_template_version_show: "Vis versjonsalternativer for tilføyelse og innsjekking",
		entry_template_version_hide: "Skjul versjonsalternativer for tilføyelse og innsjekking",
		entry_template_version_to_add_as: "Standardversjon skal legges til som:",
		entry_template_version_default: "Standard versjonsalternativ:",
		entry_template_version_default_checked: "Hovedversjon",
		entry_template_version_default_unchecked: "Underversjon",
		entry_template_version_display: "Dokumentversjon:",
		entry_template_version_display_show: "Vis",
		entry_template_version_display_hide: "Skjul",
		entry_template_version_default_add: "Standardversjon skal legges til som:",

		entry_template_checkin_version_show: "Vis versjonsalternativer for innsjekking",
		entry_template_checkin_version_hide: "Skjul versjonsalternativer for innsjekking",

		entry_template_checkin_version_message_no_versions: "Versjonspolicyen for den valgte klassen hindrer at brukerne sjekker inn en ny versjon av dokumentet.",
		entry_template_checkin_version_message_always_version: "Versjonspolicyen for den valgte klassen hindrer at brukerne erstatter gjeldende versjon av dokumentet.",

		entry_template_applied: "Bruk denne oppføringsmalen når brukere gjør følgende:",
		entry_template_applied_add: "Legg til dokument (obligatorisk)",
		entry_template_applied_add_folder: "Opprett dokumenter (obligatorisk)",
		entry_template_applied_checkin: "Sjekk inn",
		entry_template_applied_properties_group: "Vis eller rediger egenskaper:",
		entry_template_applied_properties: "I vinduet Egenskaper",
		entry_template_applied_viewer: "I visningsappletten",
		entry_template_applied_docinfo: "I dokumentinformasjonsruten",
		entry_template_applied_no_class_support: "Denne oppføringsmalen kan brukes til å legge til elementer, men kan ikke brukes til å sjekke inn dokumenter eller vise og redigere egenskaper. Den valgte klassen må endres for å støtte disse situasjonene. Hvis du må bruke oppføringsmalen i disse tilfellene, må du be administratoren om å bruke administrasjonsverktøyet til å endre klassen slik at den kan lagre oppføringsmal-IDer.",
		entry_template_applied_no_child_component_support: "Den valgte klassen har underordnede komponenter, og det er definert en egenskapslayout. Egenskapslayouter støtter ikke underordnede komponenter. De underordnede komponentene vil ikke bli vist for brukeren.",
		entry_template_applied_child_component: "Den valgte klassen har underordnede komponenter. De vil bli vist for brukeren, men du kan ikke konfigurere de underordnede komponentene i denne oppføringsmalen.",

		entry_template_properties_show: "Vis seksjonen <b>Egenskaper</b>",
		entry_tempalte_properties_show_hover: "Hvis du viser seksjonen <b>Egenskaper</b>, kan brukerne endre alle egenskapsverdier som blir vist i oppføringsmalen, og som ikke er skrivebeskyttede egenskaper.",
		entry_template_properties_hide: "Skjul seksjonen <b>Egenskaper</b>",
		entry_template_properties_hide_hover: "Hvis du skjuler seksjonen <b>Egenskaper</b>, kan ikke brukerne endre noen egenskapsverdier. Oppføringsmalen må definere alle verdiene du vil bruke når elementer blir lagt til ved hjelp av denne oppføringsmalen.",

		entry_template_security_show: "Vis seksjonen <b>Sikkerhet</b>",
		entry_template_security_show_hover: "Hvis du viser seksjonen <b>Sikkerhet</b>, kan brukere med de nødvendige rettighetene endre sikkerheten for elementet.",
		entry_template_security_hide: "Skjul seksjonen <b>Sikkerhet</b>",
		entry_template_security_hide_hover: "Hvis du skjuler seksjonen <b>Sikkerhet</b>, kan ikke brukerne endre sikkerheten for elementer. Oppføringsmalen må definere alle sikkerhetsinnstillingene du vil bruke når elementer blir lagt til.",
		entry_template_security_policy: "Sikkerhetspolicy:",
		entry_template_security_policy_hover: "Avhengig av sikkerhetspolicyen du velger, kan sikkerhetspolicyen gjøre følgende:<br><ul><li>Overstyre tillatelsene som er oppgitt under <b>Definer elementsikkerhet</b>.</li><li>Legge til tillatelsene som er oppgitt under <b>Definer elementsikkerhet</b>.</li></ul>",
		entry_template_security_policy_none: "Ingen sikkerhetspolicy valgt",
		entry_template_security_inherit: "Arv sikkerhetsinnstillingene fra den overordnede mappen",
		entry_tempalte_save_in_hover: "Oppgi hvor du vil lagre oppføringsmalen.<br><br><b>Begrensning:</b> Hvis du lagrer oppføringsmalen i et grupperom, kan du bare bruke oppføringsmalen i grupperommet.",
		entry_template_security_inherit_item_security_hover: "Hvis du velger dette alternativet, blir sikkerhetsinnstillingene fra den overordnede mappen lagt til i sikkerhetsinnstillingene som er definert med en av følgende metoder:<ul><li>Klassen som er angitt i seksjonen <b>Definer elementegenskaper</b></li><li>Den tilpassede sikkerheten du oppgav i seksjonen <b>Definer elementsikkerhet</b></li></ul>",
		entry_template_security_change: "Overstyr sikkerheten som er definert av den valgte klassen",
		entry_template_security_change_hover: "Hvis du velger dette alternativet, blir sikkerhetsinnstillingene som er definert for klassen, vist som standard. Du kan deretter endre sikkerhetsinnstillingene for oppføringsmalen.<br><br>Hvis du viser seksjonen <b>Sikkerhet</b>, kan brukere med de nødvendige rettighetene endre sikkerheten for elementet.<br><br>Hvis du velger dette alternativet og velger å arve sikkerhetsinnstillingene fra den overordnede mappen, vil eventuelle arvelige tillatelser bli lagt til i sikkerheten du definerer.",
		entry_template_security_default_item_security: "Overstyr standard elementsikkerhet for brukeren som tilføyer elementet",
		entry_template_security_policy_message_override: "Den valgte sikkerhetspolicyen er konfigurert for å overstyre tillatelsene som er oppgitt under Definer sikkerhet.",
		entry_template_security_policy_message_add: "Den valgte sikkerhetspolicyen er konfigurert for å legge til tillatelsene som er oppgitt under Definer sikkerhet.",
		entry_template_security_policy_preserve_true_hover: "Bevarer direkte tillatelse",
		entry_template_security_policy_preserve_false_hover: "Bevarer ikke direkte tillatelse",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Spesifikke roller",
		entry_template_security_class_role_search_title: "Søk etter roller:",
		entry_template_secuirty_class_member_title: "Medlemsliste for ${0}",
		entry_template_secuirty_class_folder_only: "Disse tillatelsene gjelder bare for denne mappen",
		entry_template_secuirty_class_folder_and_immediate_children: "Disse tillatelsene gjelder for denne mappen og de direkte underordnede som er konfigurert for å arve sikkerhet fra denne mappen.",
		entry_template_secuirty_class_folder_and_all_children: "Disse tillatelsene gjelder for denne mappen og alle underordnede som er konfigurert for å arve sikkerhet fra denne mappen. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Disse tillatelsene gjelder for de direkte underordnede som er konfigurert for å arve sikkerhet fra denne mappen.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Disse tillatelsene gjelder for alle underordnede som er konfigurert for å arve sikkerhet fra denne mappen",

		entry_template_class_security_message_no_override: "Sikkerheten for den valgte klassen hindrer at brukerne overstyrer sikkerheten.",
		entry_template_class_security_required_privileges: "<b>Viktig:</b> Når du overstyre sikkerheten for den valgte klassen, må brukere som legger til elementer ved hjelp av denne oppføringsmalen, ha ItemSetACL- og UserACLOwner-rettigheter.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Arbeidsflyt med sekvensielt mønster",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Arbeidsflyt med parallelt mønster",
		entry_template_workflow_type_existing: "Tilpasset arbeidsflyt...",
		entry_template_workflow_launch_prompt: "Spør brukerne om arbeidsflyten skal startes",
		entry_template_workflow_launch_auto: "Start arbeidsflyten automatisk",
		entry_template_workflow_modify_launch: "Tillat brukerne å endre starttrinnet",
		entry_template_workflow_modify_launch_hover: "Velg dette alternativet hvis du vil tillate brukerne å endre hvordan arbeidsflyten blir startet.",

		entry_template_optionsButton_title: "Endre",
		entry_template_optionsButton_readonly_title: "Vis tilknytning",
		entry_template_optionsDialog_title: "Innstillinger for mappetilknytning",
		entry_template_removeButton_title: "Fjern",
		entry_template_addButton_title: "Legg til",
		entry_template_selected_entry_templates: "Valgte oppføringsmaler",
		entry_template_docs_added_to_template_destination: "Dokumenter blir lagt til i målet som er oppgitt i oppføringsmalen.",
		entry_template_docs_added_to_other_object_store: "Denne oppføringsmalen legger til elementer objektlageret ${0}.",
		entry_template_inherited_entry_templates_label: "Jeg vil: ",
		entry_template_inherited_entry_templates: "Arv oppføringsmaltilknytninger fra mappe: ",
		entry_template_inherited_entry_templates_not: "Opprett nye tilknytninger for denne mappen",
		entry_template_inherited_folder_path: "Oppføringsmalene på listen over valgte oppføringsmaler er knyttet til følgende mappe: ${0}. <br> Banen til mappen er ${1}.",
		entry_template_folder_associations_title: "Tilknytt oppføringsmaler",
		entry_template_folder_associations_intro: "Når du knytter en oppføringsmal til en mappe, må brukerne bruke oppføringsmalen til å legge til elementer i mappen. Hvis du knytter flere oppføringsmaler til en mappe, kan brukerne velge hvilken oppføringsmal de vil bruke.",
		entry_tempalte_folder_associations_entrytemplate: "Oppføringsmal: ",
		entry_template_avaliable_entry_templates: "Tilgjengelige oppføringsmaler",
		entry_template_fileTypes_intro_title: "Tillatte filtyper:",
		entry_template_fileTypes_intro: "Som standard kan en oppføringsmal brukes til å legge til en hvilken som helst type dokument til datalageret. Men hvis du velger en eller flere filtyper, er oppføringsmalene bare tilgjengelige når brukerne legger til dokumenter som samsvarer med en av de oppgitte filtypene.",
		entry_template_fileTypes: "Filtyper",
		entry_template_fileType_error: "Ugyldige filtyper er valgt for en eller flere oppføringsmaltilknytninger. Du må fjerne de ugyldige filtypene før disse oppføringsmaltilknytningene kan lagres.",
		entry_template_fileTypes_any_type_of_file: " Alle filtyper",
		entry_template_description_label: "Beskrivelse",
		entry_template_ItemInfoPrefix: "Tilknytt til: ",
		entry_template_TargetObjectStoreName: "Målobjektlager",
		entry_template_class: "Klasse",
		entry_template_current_folder_as_parent: "Bruk mappe som mål",
		entry_template_view_minetypes: "Vis MIME-typer",
		entry_template_avaliable_MIME_types: "Tilgjengelige filtyper",
		entry_template_selected_MIME_types: "Valgte filtyper",
		entry_template_MIME_type_column: "Navn på filtypekategori",
		entry_template_file_type_not_existing: "Fjern de ugyldig filtypene.",
		entry_template_MIME_types: "MIME-typer:",
		entry_template_MIME_types_info_dialog_title: "MIME-typer for",
		entry_template_destination_label: "Legg til dokumenter i: ",
		entry_template_destination_help: "Oppgi hvor dokumenter skal lagres i datalageret når brukere legger til dokumenter i denne mappen ved hjelp av den valgte oppføringsmalen.",
		entry_template_radioButton_folder_destination: "Valgt mappe",
		entry_template_radioButton_template_destination: "Mål oppgitt i oppføringsmalen",
		entry_tempalte_teamspace_default: "Standard oppføringsmal",
		entry_template_folder_associations_save_new: "Du har endret noen oppføringsmaltilknytninger. Vil du lukke dette vinduet uten å lagre endringene?",
		entry_template_mode_binding_label: "Egenskaper",
		entry_template_columns_className: "Klassenavn",
		entry_template_columns_type: "Maltype",
		entry_template_columns_workflow: "Arbeidsflytnavn",
		entry_template_columns_destination: "Mål",
		entry_template_association_less_than_record: "Det er ${0} oppføringsmaler som ikke er oppført på listen i Valgte oppføringsmaler. Du har ikke tillatelse til å se dem. De kan også være slettet. Kontakt systemadministratoren for å få mer informasjon.",
		/* Request */

		progress_message_general: "Arbeider...",
		cancel_message_general: "Handlingen ble avbrutt.",
		ie8_not_supported_browser: "IE8 er ikke en støttet nettleser.",
		progress_message_getDesktop: "Laster inn skrivebord...",
		progress_message_getActions: "Laster inn handlinger...",
		progress_message_getViewers: "Laster inn skrivebord...",
		progress_message_logon: "Logger på...",
		progress_message_logoff: "Logger av...",
		progress_message_getContentClasses: "Henter klasser...",
		progress_message_openContentClass: "Henter klassedetaljer...",
		progress_message_od_getCabinets: "Henter kabinettfiler...",
		progress_message_getSearchTemplates: "Henter søk...",
		progress_message_od_getTemplates: "Henter mapper...",
		progress_message_od_openCabinet: "Henter mapper...",
		progress_message_openSearchTemplate: "Åpner søk...",
		progress_message_od_openTemplate: "Åpner mapper...",

		progress_message_getWorklists: "Henter arbeidslister...",
		progress_message_getWorkItems: "Henter arbeidselementer...",
		progress_message_getNextWorkItems: "Henter arbeidselementer...",
		progress_message_getStepParameters: "Henter arbeidselementinformasjon...",
		progress_message_getStepAttachmentItems: "Henter vedleggsinformasjon...",
		progress_message_getDependentParameters: "Henter egenskapsinformasjon...",

		progress_message_p8_getProcessApplicationSpaces: "Henter applikasjonsområder...",
		progress_message_p8_getProcessRoles: "Henter prosessroller...",
		progress_message_p8_getProcessInbaskets: "Henter innkurver...",
		progress_message_p8_getProcessorInformation: "Henter prosessinformasjon...",
		progress_message_p8_getFilterCriteria: "Henter innkurvfilter...",
		progress_message_p8_getLaunchParameters: "Henter arbeidselementinformasjon...",
		progress_message_p8_getStepAttachments: "Henter arbeidselementvedlegg...",
		progress_message_p8_getSubscriptions: "Henter arbeidsflytabonnementer...",
		progress_message_p8_getTrackerParameters: "Henter arbeidselementinformasjon...",
		progress_message_p8_getTrackerHistory: "Henter aktivitetsposthistorikk ...",
		progress_message_p8_getTrackerMilestones: "Henter aktivitetspostmilepæler ...",
		progress_message_p8_completeStep: "Fullfører arbeidselement...",
		progress_message_p8_moveToInbox: "Flytter element til innkurv...",
		progress_message_p8_returnToSender: "Returnerer arbeidselement...",
		progress_message_p8_reassign: "Omtildeler arbeidselement...",
		progress_message_p8_launchWorkflow: "Starter arbeidsflyt...",
		progress_message_p8_getTransferedWorkflows: "Henter arbeidsflytinformasjon...",

		progress_message_cm_getProcesses: "Henter arbeidsflytinformasjon...",
		progress_message_cm_completeStep: "Fortsetter arbeidselement...",
		progress_message_cm_getItemProcessInformation: "Henter arbeidsflytinformasjon...",

		progress_message_search: "Søker...",
		cancel_message_search: "Søket ble avbrutt.",
		progress_message_getContentItems: "Henter elementinformasjon...",
		progress_message_openFolder: "Åpner mapper...",
		progress_message_addItem: "Oppretter element...",
		progress_message_checkIn: "Sjekker inn element...",
		progress_message_changePassword: "Endrer passord...",
		progress_message_getDefaultInstancePermissions: "Henter standardtillatelser...",
		progress_message_openItem: "Henter elementinformasjon...",
		progress_message_saveItem: "Lagrer elementinformasjon...",
		progress_message_getPermissions: "Henter tillatelser...",
		progress_message_getEntryTemplates: "Henter oppføringsmaler...",
		progress_message_openEntryTemplate: "Åpner oppføringsmal...",
		progress_message_getFavorites: "Henter favoritter...",
		progress_message_getFoldersFiledIn: "Henter mapper...",
		progress_message_getDocumentVersions: "Henter versjoner...",
		progress_message_getDependentAttributeInfo: "Henter attributtinformasjon...",
		progress_message_packageForDownload: "Pakker for nedlasting...",
		progress_message_convertDocument: "Konverterer innhold...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Henter innholdstype...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Legger til dokument...",

		progress_message_desktop_reload: "Klienten laster inn skrivebordet ditt på nytt.<br>Du blir kanskje bedt om å logge deg på igjen.",
		progress_message_email: "Sender e-post...",
		cancel_message_email: "E-posten ble avbrutt.",

		progress_message_p8_getOfficeOnlineTemplates: "Henter Office-maler...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Tre med favoritter",
		favorites_content_list_label: "Innholdsliste for favoritter",
		syncItems_tree_label: "Tre for Mine synkroniserte filer",
		syncItems_content_list_label: "Innholdsliste for Mine synkroniserte filer",
		my_checkouts_content_list_label: "Innholdsliste for Mine utsjekkinger",
		browse_tree_label: "Bla gjennom tre",
		browse_content_list_label: "Bla gjennom innholdsliste",
		repository_selector_label: "Datalagervelger",
		teamspaces_content_list_label: "Innholdsliste for grupperom",
		templates_content_list_label: "Innholdsliste for maler",
		work_content_list_label: "Bla gjennom arbeid",
		work_tree_label: "Arbeidstre",
		admin_tree_label: "Administrasjonstre",
		admin_tabs_label: "Administrasjonsflipper",
		search_tabs_label: "Søkeflipper",
		search_selector_label: "Søkevelger",
		teamspace_browse_content_list_label: "Bla gjennom innholdsliste for grupperom",
		teamspace_search_tabs_label: "Søkeflipper for grupperom",

		/* Desktop */
		undo_description: "Angre ${0}",
		redo_description: "Gjør om ${0}",

		/* Application Tabs */
		home: "Hjem",
		repository: "Datalager",
		repository_type: "Datalagertype:",
		repository_type_header: "Datalagertype",
		repository_type_any: "Alle datalagre",
		repository_type_contains_label: "Datalagertype inneholder",
		document_info: "Dokumentinformasjon",
		team: "Gruppe",
		administration: "Administrasjon",

		/* Home Page */
		recent_activity: "Nyeste aktivitet",
		repos_and_wrksp: "Datalagre og grupperom",
		workspaces: "Grupperom",
		repositories: "Datalagre",
		templates: "Maler",
		favorites: "Favoritter",
		my_checkouts: "Mine utsjekkinger",
		mySyncedFiles: "Mine synkroniserte filer",
		links: "Linker",
		name_label: "Navn",
		description_label: "Beskrivelse:",
		type_label: "Type:",
		type_heading: "Type",
		type_id_label: "Type-ID",
		server_type_icon: "Ikon for servertype",
		server_type_heading: "Servertype",
		server_type: "Servertype",
		port_heading: "Portnummer",
		port_label: "Portnummer:",
		server_name_heading: "Servernavn",
		server_label: "Servernavn:",
		server_url_label: "Server-URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Tilkoblet:",
		repository_label: "Datalager",
		modified_label: "Endret av:",
		modified_date_label: "Endret:",
		status_label: "Status:",
		last_modified_label: "Sist endret av:",

		modifier: "Endret av",
		modified_date: "Endret den",

		/* Favorites */
		new_favorite_label: "Legg til i favoritter",
		edit_favorite_label: "Endre navn på favoritt",
		remove_favorite_label: "Fjern fra favoritter",
		missing_alias_message: "Du må oppgi et navn.",
		sync_favorite_enable_hover: "Dette elementet er aktivert for synkronisering.",
		sync_favorite_disable_hover: "Dette elementet blir ikke synkronisert.",
		sync_favorite_sync_unavailable_hover: "Synkronisering er ikke tilgjengelig for denne objekttypen.",
		sync_enable_label: "Synkroniser dette elementet",
		sync_enable_label_hover: "Dette elementet blir synkronisert på dine enheter.",
		delete_favorite_confirmation_question: "Vil du fjerne dette elementet fra dine favoritter?",
		alias_label: "Navn:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Det valgte elementet finnes allerede i dine favoritter.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Dette elementet kan ikke legges til i listen over favoritter.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Du kan lagre bare ${0} favoritter.",
		add_favorite_max_reached_response: "Hvis du vil legge dette elementet til listen over favoritter, må du slette en eksisterende favoritt før du kan legge til dette elementet.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "De valgte dokumentene kan ikke konverteres til PDF.",
		download_as_pdf_max_content_error_explanation: "Du kan bare konvertere ${0} MB med data til PDF. De valgte dokumentene overskrider imidlertid ${0} MB.",
		download_as_pdf_max_content_error_response: "Velg færre dokumenter eller mindre dokumenter og last ned dokumentene som PDF-filer igjen.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "De valgte dokumentene kan ikke konverteres til en enkelt PDF-fil.",
		download_as_pdf_mimetype_check_error_explanation: "Hvis du vil konvertere et dokument med flere deler til en enkelt PDF-fil, må alle delene ha samme MIME-type.",
		download_as_pdf_mimetype_check_error_response: "Velg et annet dokument som skal konverteres til PDF.",

		/* Activity Stream */
		show_label: "Vis:",
		all_filter: "Alle",
		notifications_filter: "Varsler",
		workitems_filter: "Arbeidselementer",
		documentes_filter: "Dokumenter",
		all_favorites_filter: "Alle favoritter",
		folders_filter: "Mapper",
		searches_filter: "Søk",
		teamspaces_filter: "Grupperom",

		/* Repository */
		all_search_templates: "Alle søk",
		all_od_searches: "Alle søkemaler",
		recent_searches: "Nyeste søk",
		opened_searches: "Åpnede søk",

		all_worklists: "Alle innbokser",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "En liste over alle arbeidslister",

		/* Teamspace */
		all_workspaces: "Alle grupperom",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "En liste over alle grupperom",
		workspace_title: "Grupperom",
		workspace_icon: "Grupperomikon",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Tilgjengelig",
		workspace_stat_offline: "Utilgjengelig",
		workspace_stat_validate: "Krever validering",
		workspace_stat_pendingDelete: "Sletting venter",
		workspace_stat_deleteError: "Sletting mislyktes",

		undefined_value: "Ikke definert",
		undefined_reference_value: "Ingen referanse er definert.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Det er kanskje flere resultater tilgjengelig på serveren.",
		search_all_data: "Søk i alle data.",
		search_all_teamspaces: "Søk i alle grupperom.",
		teamspace_filter_results: "Viser ${0} resultater. ",
		displaying_filtered_results: "Viser filtrerte resultater. ",
		displaying_recent_results: "Viser bare grupperom som ble endret i løpet av de ${0} siste dagene. Hvis du vil finne andre grupperom, kan du filtrere listen over grupperom etter navn eller beskrivelse. ",
		clear_filter: "Tøm filter.",

		/* FolderTreeModel */
		move_item_task: "Flytt element",
		copy_item_task: "Kopier element",
		add_item_task: "Legg til element",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Finner ikke følgende mappe: ${0}. Den kan være slettet, eller mappen kan ikke åpnes fra denne visningen. Klikk på linken Mer fra trevisningen til å navigere til mappen. Hvis du ikke kan vise mappen, oppdaterer du innholdslistevisningen.",
		more_paging_link: "Mer ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Avbryt",

		/* ErrorDialog */
		error_dialog_title: "Feil",
		error_dialog_icon_tooltip: "Feil",
		error_dialog_stack_trace_title: "Stakksporing",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Bekreftelse",

		close_browser_msg: "Lukk nettleservinduet.",

		/* MessageDialog */
		message_dialog_title: "Informasjon",
		warning_dialog_title: "Advarsel",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Velkommen til ${0}",
		server: "Datalager:",
		username: "Brukernavn:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Et brukernavn er nødvendig ved pålogging til datalageret.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Et passord er nødvendig ved pålogging til datalageret",
		password: "Passord:",
		login: "Logg på",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Sesjonen har utløpt. Logg deg på igjen.",
		login_repository_connection_expired_message: "Din tilkobling til datalageret ${0} utløp. Logg deg på igjen.",
		login_site_connection_expired_message: "Din tilkobling til stedet utløp. Logg deg på igjen.",
		login_new_server_message: "Oppgi brukernavn og passord for ${0}.",
		login_error_more_information_message: "Mer informasjon",

		disconnect_box_account_user: "Koble fra Box-konto: ${0}",
		disconnect_box_account: "Koble fra Box-konto",
		disconnect_box_accounts: "Koble fra Box-kontoer",

		// OAuth2/Box Login
		login_ssl_connection_required: "Det kreves en SSL-tilkobling for tilgang til Box-datalager.",
		login_oauth_popup_blocked: "Tilleggsvinduet ble blokkert. Du må kanskje oppheve blokkeringen av tilleggsvinduer i nettleseren for å kunne logge deg på.",
		login_oauth_click_here: "Hvis du ikke blir omdirigert innen 5 sekunder, klikker du her.",
		login_oauth_title: "Logg på",
		login_oauth_grant_intro: "Gi autentisering for ${0}.",
		login_pane_oauth_click_here: "Klikk her for å logge deg på.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Vil du logge deg av webklienten?",
		logout_confirmation_button: "Logg av",

		/* ChangeLocaleDialog */
		change_locale: "Endre språk og språkmiljøinnstillinger",
		change_locale_use_browser_language: "Bruk språkinnstilling for nettleser (standard)",
		change_locale_use_browser_locale: "Bruk språkinnstilling for nettleser (standard)",
		change_locale_description: "Hvis du sletter informasjonskapslene (cookies) i nettleseren, må du tilbakestille språk og språkmiljøinnstillinger.",
		change_locale_language_locale: "Applikasjonsspråk:",
		change_locale_language_locale_hover: "Denne innstillingen endrer språket for teksten i webklienten, men endrer ikke språket for dokumenter i applikasjonen.<br><br>Standardinnstillingen bruker det språket som er oppgitt i konfigurasjonsalternativene for nettleseren.",
		change_locale_value_format_locale: "Applikasjonsspråkmiljø:",
		change_locale_value_format_locale_hover: "Språkmiljøet bestemmer formatet for datoer, klokkeslett og tall i webklienten.<br><br>Standardinnstillingen bruker formatene som er knyttet til det språket som er oppgitt i konfigurasjonsalternativene for nettleseren.",
		change_locale_for_office: "Innstillinger for toveistekst:",
		change_locale_bidi_support_flag: "Aktiver toveisstøtte",
		change_locale_bidi_support_flag_hover: "Når støtte for toveisspråk er aktivert, kan brukeren definere retningen for tekst som brukes i inndatafeltene.  Teksten som blir skrevet inn for elementer, for eksempel mapper, blir vist i samme retning som den ble skrevet inn.",
		change_locale_base_text_direction: "Basistekstretning for innhold:",
		change_locale_base_text_direction_hover: "Definer retningen for teksten som blir skrevet inn i inndatafeltene.  Dette styrer også visningsretningen for etiketter som er oppgitt av brukeren, for eksempel mappenavn.",
		change_locale_calendar_type: "Kalendertype:",
		change_locale_calendar_type_hover: "Velg hvilken type kalender som skal brukes for brukersesjonen.",
		change_locale_base_text_direction_default: "Standard",
		change_locale_base_text_direction_ltr: "Venstre til høyre",
		change_locale_base_text_direction_rtl: "Høyre til venstre",
		change_locale_base_text_direction_contextual: "Kontekstavhengig",
		change_locale_calendar_type_gregorian: "Gregoriansk",
		change_locale_calendar_type_hijri: " Hijri",
		change_locale_calendar_type_hebrew: "Hebraisk",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Endre passord",
		change_password_title: "Endre passord",
		change_password_expired_title: "Passord utløpt",
		change_password_message: "Oppgi et nytt passord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Passordet er utløpt. Oppgi et nytt passord.",
		change_password_password_rules: "Passordregler",
		change_password_old_password: "Gammelt passord:",
		change_password_new_password: "Nytt passord:",
		change_password_confirm_password: "Bekreft passord:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Du må oppgi det gamle passordet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Du må oppgi et nytt passord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Du må bekrefte det nye passordet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Passordene må stemme overens.",

		/* GlobalToolbar */
		actions: "Handlinger",
		actions_label: "Handlinger:",
		open_actions_label: "Åpne handlinger:",

		/* About Dialog */
		about_dialog_title: "Om",
		about_product_name_label: "Produktnavn: ",
		about_product_version_label: "Versjon: ",
		about_product_build_label: "Bygg: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM og IBM-logoen er registrerte varemerker for International Business Machine Corporation i USA og/eller andre land. Dette Programmet er lisensiert under betingelsene i lisensavtalen som følger med Programmet. Denne lisensavtalen ligger enten i programkatalogen eller biblioteket \"License\" eller \"Non_IBM_License\", hvis aktuelt, eller den blir levert i trykt form. Les denne avtalen nøye før du bruker Programmet. Ved å bruke Programmet aksepterer du disse betingelsene. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Vil du slette det valgte elementet?",
		delete_single_folder_confirmation_question: "Vil du slette mappen ${0}?",
		delete_multiple_confirmation_question: "Vil du slette de valgte elementene?<br>${0} elementer er valgt.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Slett",
		search_template_delete_confirmation_question: "Vil du slette søket ${0}?",
		search_template_opened_delete_confirmation_question: "Søket ${0} er åpent. Hvis du sletter søket, blir det lukket.<br>Vil du slette dette søket?",
		delete_multiple_opened_search_template_confirmation_question: "Følgende søk er åpne: ${0}.<br>Hvis du sletter søkene, blir de lukket. Vil du slette disse søkene?",
		delete_large_number_items_confirmation_question: "Du valgte ${0} elementer for sletting.<br/>Det kan ta lang tid å slette et stort antall elementer.<br/>Vil du fortsette?",
		delete_confirmation_entrytemplate: "Hvis du sletter denne oppføringsmalen, har det følgende påvirkning på dokumenter eller mapper som er tilknyttet oppføringsmalen:<ul><li>Elementene vil ikke lenger være tilknyttet oppføringsmalen, og brukerne får en advarsel når de oppdaterer et element.</li><li>Eventuelle egenskaper som var kontrollert av oppføringsmalen, for eksempel navnet eller rekkefølgen på egenskapene, vil ikke lenger gjelde for elementene som er tilknyttet oppføringsmalen.</li></ul>Vil du slette denne oppføringsmalen?",
		delete_confirmation_entrytempalte_with_multi_items: "Oppføringsmaler må slettes enkeltvis. Oppføringsmalene er fjernet fra listen over elementer som skal slettes. Hvis du vil slette oppføringsmalene, må du slette hver enkelt oppføringsmal for seg.",

		/* Create/Apply/Remove Hold */
		hold: "Sperring",
		createHold: "Ny sperring",
		applyHold: "Bruk sperring",
		removeHold: "Fjern sperring",
		showHolds_title: "Vis sperringer",
		applyHoldSelectText: "Velg sperringene som skal brukes på de valgte elementene.",
		availableHolds: "Tilgjengelige sperringer:",
		removeHoldSelectText: "Velg sperringene du vil fjerne fra de valgte elementene.",
		appliedHolds: "Brukte sperringer:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Opprett en ny sperring som skal brukes på valgte elementer.",
		holdName: "Navn på sperring:",
		holdDescription: "Beskrivelse:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Du må oppgi et navn på sperringen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Oppgitt navn på sperring finnes allerede.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Et navn på sperring kan ikke inneholde følgende tegn: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Sesjonen din utløper om ${0} minutter.",
		session_expire: "Sesjonen utløper",
		logoff: "Logg av",
		extend_session: "Forleng sesjon",
		admin_custom_settings: "Ekstra innstillinger:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning er en boolsk verdi som angir om advarselen for sesjonsutløp er aktivert. Standardverdien er true (sann). sessionExpireWarningTime er et heltall mellom 2 og 5 som angir tiden for advarsel om sesjonsutløp.",
		admin_custom_setting_dialog_title_new: "Ny innstilling",
		admin_custom_setting_dialog_title_edit: "Rediger innstilling",
		admin_custom_setting_dialog_hover_help: "Legg til andre parametere ved å oppgi parameternavnet og -verdien. Du kan for eksempel oppgi “enableSessionExpireWarning” og “true” hvis du vil aktivere advarsel for sesjonsutløp.",
		admin_custom_setting_dialog_field_hover_help: "Hvis du vil vite mer om parameternavn og -verdier, kan du slå opp i IBM Navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Denne verdien er obligatorisk. Verdien kan ikke inneholde blanktegn og kan ikke være et duplikat.",
		admin_custom_setting_dialog_bool_valueInvalid: "Denne verdien er obligatorisk. Verdien må være boolsk.",
		admin_custom_setting_dialog_int_valueInvalid: "Denne verdien er obligatorisk. Verdien må være et heltall.",
		/* Add Document Dialog */
		add_document_dialog_title: "Legg til dokument",
		add_documents_dialog_title: "Legg til dokumenter",
		add_document_general_label: "Generelt",
		add_document_properties_label: "Egenskaper",
		add_document_properties_with_ellipsis_label: "Egenskaper...",
		add_document_security_label: "Sikkerhet",
		add_document_location_label: "Lagre i:",
		add_document_type_label: "Hva vil du lagre?",
		add_document_localfile_label: "Lokalt dokument",
		add_document_metadata_label: "Informasjon om et dokument",
		add_document_external_label: "Link til et eksternt dokument",
		add_document_web_link_label: "Weblink",
		add_document_saved_content_label: "Bruk lagret fil:",
		add_document_saved_content_choice: "Lagret fil",
		add_document_file_name_label: "Filnavn:",
		add_document_entry_template_label: "Oppføringsmal:",
		add_document_delete_file_label: "Slett lokal fil",
		add_document_delete_file_disabled_label: "Filer som ikke er i filsporingskatalogen, vil ikke bli slettet.",
		add_document_major_version_label: "Hovedversjon",
		add_document_major_version_hover: "Setter dokumentstatusen til Utgitt. Dokumentet blir lagt til i datalageret som versjon 1.0. Hvis alternativet ikke er valgt, er dokumentet ikke klart for å utgis, og blir lagt til som underversjon 0.1 .",
		add_document_save_document_as_unfiled_label: "Ikke lagre dokumentet i en mappe",
		add_document_save_document_as_unfiled_hover: "Hvis du velger dette alternativet, kan du bare finne dette dokumentet ved å søke. Du kan ikke bla for å finne det.",
		add_document_create_new_version_label: "Opprett ny versjon",
		add_document_replace_existing_version_label: "Erstatt eksisterende versjon",
		add_document_start_workflow_label: "Start arbeidsflyt",
		add_document_auto_classify_label: "Klassifiser innhold automatisk",
		add_document_add_label: "Legg til",
		add_document_cancel_label: "Avbryt",
		add_document_document_type_label: "Klasse",
		add_document_context_info: "Verdiene du oppgir for dokumentegenskapene, kan brukes til å finne dokumentet senere.",
		add_documents_context_info: "Verdiene du oppgir for dokumentene, kan brukes til å finne dokumentene senere. Hvis du trenger å angi en annen egenskapsverdi for et dokument, må du gjøre det separat eller redigere egenskapene for dokumentet etter at du legger det til.",
		add_document_url_label: "URL:",
		add_document_template_description: "Malbeskrivelse:",
		add_document_select_entry_template: "Oppgi eller velg en oppføringsmal",
		add_document_no_permission_to_associations: "Du har ikke tillatelse til å bruke en oppføringsmal",
		add_document_no_entry_template_to_use: "Ingen oppføringsmal kan brukes for de valgte filene",
		add_document_no_entry_template_itemtype_permission: "Du kan ikke legge til elementer i denne mappen. En oppføringsmal må være valgt, og du du har ikke tilgang til noen av oppføringsmalene som er knyttet til denne mappen. Kontakt systemadministratoren og be om å få tilgang til oppføringsmalene som er knyttet til denne mappen.",
		add_document_appgroup_name_label: "Applikasjonsgruppenavn:",
		add_document_app_name_label: "Applikasjonsnavn:",
		create_folder_dialog_title: "Ny mappe",
		create_folder_context_info: "Verdiene du oppgir for mappegenskapene, kan brukes til å finne mappen senere.",
		create_folder_folder_name_label: "Mappenavn",
		create_folder_save_folder_as_unfiled_label: "Ikke lagre mappen i en annen mappe",
		create_folder_save_folder_as_unfiled_hover: "Hvis du velger dette alternativet, kan du bare finne denne mappen ved å søke. Du kan ikke bla for å finne det.",
		add_item_create_in_folder: "Opprett i mappe:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Et mappenavn kan ikke inneholde noen av følgende tegn: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Et mappenavn kan ikke inneholde noen av følgende tegn: \\ / og kan ikke være lik . eller ..",
		invalid_box_file_name_message: "Et filnavn kan ikke inneholde noen av følgende tegn: \\ / og kan ikke være lik . eller ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Et filnavn kan ikke inneholde noen av følgende tegn: \\ / : * ? \" < > |",
		external_document_placeholder: "Oppgi URLen for dokumentet",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Fargen må oppgis som et 3- eller 6-sifret heksadesimalt tall, for eksempel #000 eller #000000.",
		add_document_unfiled: "${0} uarkivert",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Legg til dokument ved hjelp av oppføringsmal",
		add_document_using_template_context_info: "Når du legger til et dokument ved hjelp av en oppføringsmal, er verdiene du oppgir for dokumentet, konsistente.",
		add_documents_using_template_dialog_title: "Legg til dokumenter ved hjelp av oppføringsmal",
		add_documents_document_name_is_file_name_hint: "Filnavnet brukes for denne egenskapen",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Ny mappe ved hjelp av oppføringsmal",
		create_folder_using_template_context_info: "Når du oppretter en mappe ved hjelp av en oppføringsmal, er verdiene du oppgir for mappen, konsistente.",

		add_documents_batch_results_dialog_title: "Dokumenter ikke lagt til i datalageret",
		add_documents_batch_results_dialog_context_info: "Følgende dokumenter ble ikke lagt til i datalageret. Velg et dokument og klikk på Detaljer for å få mer informasjon om hvorfor dokumentet ikke ble lagt til i datalageret.",
		add_documents_batch_results_dialog_filename_col_hdr: "Filnavn",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Melding",
		add_documents_batch_results_status_error: "Feil",
		add_documents_batch_results_status_cancelled: "Avbrutt",
		add_documents_batch_results_status_cancelled_msg: "Dokumentet ble ikke lagt til fordi forespørselen ble avbrutt.",

		add_documents_batch_status_title: "Legge til dokumenter",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Legger til fil ${0} av ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Feil: ${0}",
		add_documents_batch_status_completing_msg: "Prosessen vil stoppe etter at dette dokumentet er lagt til.",

		add_documents_status_uploading_msg: "Laster opp fil ${0} av ${1}...",
		add_documents_status_adding_msg: "Legger til fil ${0} av ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Oppføringsmalen er konfigurert i en annen applikasjon og er konfigurert for å alltid deklarere dokumenter som poster. Denne innstillingen blir imidlertid oversett, fordi webklienten ikke støtter deklarering av dokumenter som poster.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Oppføringsmalen er konfigurert i en annen applikasjon og er konfigurert for å la deg bestemme om et dokument skal deklareres som en post. Denne innstillingen blir imidlertid oversett, fordi webklienten ikke støtter deklarering av dokumenter som poster.",
		no_selection: "&lt;Velg&gt;",

		batch_results_dialog_details_label: "Detaljer",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Verdien er ikke gyldig. Verdien må være en globalt unik identifikator (GUID), for eksempel {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Verdien er ikke gyldig. Verdien må være et flytetall, for eksempel 1,2 eller 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Verdien er ikke gyldig. Verdien må ha formatet ${0}, for eksempel ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Verdien er ikke gyldig. Verdien må være en desimalverdi, for eksempel 1,2 eller 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Verdien er ikke gyldig. Verdien må være et heltall, for eksempel 5 eller 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Verdien er ikke gyldig. Verdien kan bare inneholde alfabetiske tegn, for eksempel a-z og A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Verdien er ikke gyldig. Verdien kan bare inneholde alfanumeriske tegn, for eksempel a-z, A-Z og 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Verdien er ikke gyldig. Verdien kan bare inneholde numeriske tegn, for eksempel 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Verdien er ikke gyldig. Verdien kan bare inneholde følgende tegn: a-z, A-Z, 0-9, [mellomrom] og `.,:;?\"/-_+%*=()|!#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Verdien er ikke gyldig. Verdien må være en dato med følgende format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Verdien er ikke gyldig. Verdien må være et klokkeslett med følgende format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Verdien er ikke gyldig. Velg en verdi fra rullegardinmenyen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Verdien er ikke gyldig.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Verdien er ikke gyldig. Verdien må ha følgende format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Denne verdien er obligatorisk.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Verdien er for lang. Egenskapen støtter en maksimal lengde på ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Verdien er for kort. Egenskapen støtter en minstelengde på ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Verdien er utenfor gyldig område. Verdien må være et flytetall mellom ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Verdien er utenfor gyldig område. Verdien må være en desimalverdi mellom ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Verdien er utenfor gyldig område. Verdien må være et heltall mellom ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Verdien må være en dato mellom ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Verdien er utenfor gyldig område. Verdien må være en dato mellom ${0} og ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Verdien er utenfor gyldig område. Verdien må være et klokkeslett mellom ${0} og ${1}.",
		property_and: "og",

		property_invalidValueOrRequired: "Følgende verdi er ugyldig eller obligatorisk: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Egenskaper",
		edit_properties_dialog_info: "Du kan vise eller redigere egenskapene for dette elementet. Hvis du har de nødvendige tillatelsene, kan du også endre sikkerheten for elementet. Du kan imidlertid ikke endre systemegenskapene.",
		edit_properties_od_dialog_info: "Du kan vise eller redigere egenskapene for dette elementet. Du kan imidlertid ikke endre systemegenskapene.",
		system_properties_title: "Systemegenskaper",
		custom_properties_title: "Egenskaper",
		/* Folder collaboration tab */
		box_permission_permission: "Tillatelse",
		box_permission_permissions: "Tillatelser",
		box_permission_editor: "Redigerer",
		box_permission_owner: "Eier",
		box_permission_co_owner: "Medeier",
		box_permission_viewer_uploader: "Visning opplasting",
		box_permission_previewer_uploader: "Forhåndsvisning opplasting",
		box_permission_viewer: "Visning",
		box_permission_previewer: "Forhåndsvisning",
		box_permission_uploader: "Opplasting",
		box_permission_add: "Legg til",
		box_permission_upload: "Last opp",
		box_permission_download: "Last ned",
		box_permission_preview: "Forhåndsvisning",
		box_permission_view: "Vis",
		box_permission_send_links: "Send linker bare for visning",
		box_permission_create_subfolders: "Opprett undermapper",
		box_permission_create_tasks: "Opprett oppgaver",
		box_permission_add_comments: "Legg til kommentarer",
		box_collaboration_invite_placeholder: "Oppgi navn, e-postadresse eller gruppe som skal inviteres",
		box_collaboration_invite_placeholder_non_admin: "Oppgi en e-postadresse du vil invitere",
		box_collaboration_invalid_email: "Oppgi en gyldig e-postadresse",
		box_collaboration_user_already_present: "Denne brukeren er allerede medarbeider på mappen",
		box_collaboration_user_name: "Navn",
		box_collaboration_email_address: "E-postadresse",
		box_collaboration_date_added: "Dato lagt til",
		box_collaboration_remove_collaboration: "Fjern",
		box_collaboration_remove_collaboration_title: "Slett",
		box_collaboration_no_collaborators: "Det er ingen medarbeidere",
		box_collaboration_change_owner_title: "Endre elementeier",
		box_collaboration_change_owner_prompt: "Hvis du gjør denne medarbeideren til Mappeeier, blir du Redigerer og ikke lenger eier av mappen. Eventuelle medarbeidere som er lagt til direkte for denne mappen, vil se den i sine rotmapper. Eventuelle medarbeidere som er lagt til på det overordnede mappenivået eller over, vil ikke lenger være medarbeidere. Vil du fortsette?",
		box_collaboration_remove_self_title: "Fjern meg selv",
		box_collaboration_remove_self_prompt: "Er du sikker på at du vil fjerne deg selv som medarbeider? Du vil ikke lenger ha tilgang til denne mappen.",
		box_collaboration_user: "Bruker",
		box_collaboration_group: "Gruppe",
		box_managing_users_not_configured: "Du kan ikke søke etter brukere og grupper, fordi Box-applikasjonen ikke er konfigurert på riktig måte. Hvis du vil bruke denne funksjonen, må du kontakte administratoren og be om at Box-applikasjonen blir konfigurert for administrasjon av brukere og grupper.",
		duplicate_value_error: "Hver enkelt verdi i denne egenskapen må være unik.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Eventuelle endringer du gjør i de følgende feltene, gjelder for alle de valgte elementene. Hvis du trenger å angi en annen egenskapsverdi for et bestemt element eller redigere sikkerheten for et element, må du redigere egenskapene for det elementet.",
		multi_edit_properties_class_label: "Klasse:",
		multi_edit_properties_items_label: "Elementnavn:",
		multi_edit_properties_properties_label: "Egenskaper:",
		multi_edit_batch_status_title: "Oppdaterer egenskaper",
		multi_edit_batch_status_adding_msg: "Oppdaterer element ${0} av ${1}...",
		multi_edit_batch_status_verifying_msg: "Verifiserer element ${0} av ${1}...",
		multi_edit_batch_status_completing_msg: "Prosessen vil stoppe etter at dette elementet er oppdatert.",
		multi_edit_batch_status_validation_completing_msg: "Prosessen vil stoppe etter at dette elementet er verifisert.",
		multi_edit_batch_results_status_error: "Feil",
		multi_edit_batch_results_status_cancelled: "Avbrutt",
		multi_edit_batch_results_status_cancelled_msg: "Elementet ble ikke oppdatert fordi forespørselen ble avbrutt.",
		multi_edit_batch_results_dialog_title: "Elementer ikke oppdatert",
		multi_edit_batch_results_dialog_context_info: "Følgende elementer ble ikke oppdatert. Velg et elementnavn og klikk på Detaljer for å få mer informasjon om hvorfor elementet ikke ble oppdatert.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Postnavn",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Melding",
		multi_edit_batch_status_errors_msg: "Feil: ${0}",
		multi_edit_batch_permission_error_text: "Endringene i egenskapene kan ikke lagres.",
		multi_edit_invalid_value_error: "Denne verdien er avhengig av en annen egenskapsverdi og er ikke gyldig for alle elementene du valgte.",
		multi_edit_batch_permission_error_explanation: "Du kan ikke endre egenskapene for dette elementet fordi du ikke har nok rettigheter.",
		multi_edit_no_modifiable_properties: "Egenskapene for de valgte elementene kan ikke endres. Dette kan skje hvis et element inkluderer skrivebeskyttede egenskaper eller hvis bare navnet eller tittelen på elementet er redigerbart. Hvis flere elementer er valgt, kan du ikke endre navnet eller tittelen på elementene.",
		multi_edit_mult_classes_dialog_info: "De valgte elementene ligger i andre datalagre eller tilhører andre klasser. Du kan bare redigere elementer som er i samme klasse eller samme datalager. Velg delsettet med elementer du vil redigere.",
		multi_edit_class_selector_class_heading: "Klasse",
		multi_edit_class_selector_entry_template_heading: "Oppføringsmal",
		multi_edit_class_selector_repository_heading: "Datalager",
		multi_edit_class_selector_items_heading: "Elementer",
		multi_edit_some_classes_not_displayed: "Noen av de valgte elementene er ikke inkludert på denne listen fordi elementene inneholder bare skrivebeskyttede egenskaper eller fordi elementene ligger i datalagre som ikke støtter redigering av egenskaper.",
		multi_edit_properties_invalid_msg: "Noen av egenskapsverdiene er ikke gyldige for alle de valgte elementene.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Denne egenskapen er skrivebeskyttet og kan ikke endres.",
		multi_edit_append_checkbox_label: "Føy til",
		multi_edit_append_checkbox_tooltip: "Velg dette alternativet hvis du vil føye de nye egenskapsverdiene til det eksisterende verdiene i stedet for å erstatte dem.",
		multi_edit_properties_invalid_childcomponent_msg: "Noen verdier i egenskapen ${0} for den underordnede komponenten ${1} er avhengige av andre egenskaper og er ikke lenger gyldige med de valgene du har gjort. Fjern verdiene i den underordnede komponenten ${1} eller endre egenskapene for elementene du valgte enkeltvis.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Eksporter egenskaper",
		export_properties_dialog_info: "Velg egenskapene du vil eksportere, og oppgi rekkefølgen de skal vises i.",
		export_properties_dialog_export_button_label: "Eksporter",
		export_properties_dialog_export_raw_values: "Eksporter råverdier",

		/* Properties */
		filter_clear_tooltip: "Tøm filteret",
		properties_new_row: "Ny",
		properties_requiredClass_document_tooltip: "Velg et dokument. Dokumentet må tilhøre klassen ${0}.",
		properties_requiredClass_folder_tooltip: "Velg en mappe. Mappen må tilhøre klassen ${0}.",
		properties_dataType_tooltip: "Datatype: ${0}",
		properties_maxLength_tooltip: "Maksimal lengde: ",
		properties_minLength_tooltip: "Minimumslengde: ",
		properties_minValue_tooltip: "Minimumsverdi: ",
		properties_maxValue_tooltip: "Maksimumsverdi: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Beskrivelse: ",

		properties_type_boolean_tooltip: "Boolsk",
		properties_type_date_tooltip: "Dato",
		properties_type_time_tooltip: "Tid",
		properties_type_timestamp_tooltip: "Tidsangivelse",
		properties_type_decimal_tooltip: "Desimalverdi",
		properties_type_double_tooltip: "Flytetall",
		properties_type_short_tooltip: "Heltall",
		properties_type_integer_tooltip: "Heltall",
		properties_type_long_tooltip: "Heltall",
		properties_type_string_tooltip: "Tekststreng",
		properties_type_string_alpha_tooltip: "Alfabetisk streng",
		properties_type_string_alphanum_tooltip: "Alfanumerisk streng",
		properties_type_string_ext_tooltip: "Utvidet alfanumerisk streng",
		properties_type_string_num_tooltip: "Numerisk streng",
		properties_type_binary_tooltip: "Binært",
		properties_type_object_tooltip: "Objekt",
		properties_type_reference_tooltip: "Denne egenskapen refererer til et annet element i datalageret.",
		properties_type_guid_tooltip: "Globalt unik identifikator",
		properties_type_group_tooltip: "Brukere og grupper",
		properties_type_user_tooltip: "Brukere",
		properties_type_childComponent_tooltip: "Underordnet komponent",

		properties_childComponent_minCardinalityOnly_tooltip: "Denne egenskapen må ha minst ${0} verdier.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Denne egenskapen kan ikke ha mer enn ${0} verdier.",
		properties_childComponent_minMaxCardinality_tooltip: "Denne egenskapen må ha minst ${0} verdier og ikke mer enn ${1} verdier.",
		properties_childComponent_noCardinality_tooltip: "Denne egenskapen kan ha et hvilket som helst antall verdier.",

		properties_type_guid_example_tooltip: ", for eksempel {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Velg en verdi fra listen.",
		properties_single_select_choice_tooltip: "Velg en verdi.",
		properties_multiple_select_typein_tooltip: "Oppgi en eller flere verdier.",
		properties_multiple_select_choice_tooltip: "Velg en eller flere verdier.",
		properties_not_selectable_tooltip: "Kategorien kan ikke velges.",
		properties_none: "Ingen",
		properties_none_tooltip: "Velg <i>Ingen</i> hvis du vil fjerne gjeldende verdi fra egenskapen.",
		properties_value_empty: "Ingen verdi",
		properties_value_read_only: "Skrivebeskyttet",
		properties_clear_label: "Tøm",
		properties_clear_tooltip: "Hvis du fjerner verdien i dette feltet, fjerner du verdien i datalageret når du klikker på <b>Lagre</b>.",
		properties_box_custom_properties: "Tilpassede egenskaper",
		properties_box_metadata_name_in_use: "Navnet er allerede brukt. Oppgi et annet navn for den tilpassede egenskapen.",

		properties_templates: "Maler",
		properties_add_template: "Legg til mal",
		properties_remove_template: "Fjern",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Sjekk inn",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Sjekk inn",
		checkin_cancel_label: "Avbryt",
		checkin_file_name_label: "Filnavn",
		checkin_document_status_title: "Sjekk inn dokument",
		checkin_document_status_uploading_msg: "Laster opp fil...",
		checkin_document_status_checkingin_msg: "Sjekker inn fil...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Velg retusjeringsmodus",
		viewer_redaction_new_document_confirmation_question: "Vil du lagre retusjeringen som et nytt dokument eller en lokal fil?",
		viewer_redaction_new_version_confirmation_question: "Vil du lagre retusjeringen som en ny versjon?",
		viewer_redaction_new_version_confirmation_question_never: "Vil du lagre retusjeringen som et nytt innhold?",		
		viewer_redaction_new_document_button: "Ja",
		viewer_redaction_new_document_cancel_button: "Nei",
		viewer_redaction_add_document_confirmation_question: "Vil du lagre retusjeringen som et nytt dokument, en ny versjon eller en lokal fil?",
		viewer_redaction_add_document_confirmation_question_version_never: "Vil du lagre retusjeringen som et nytt dokument, nytt innhold eller en lokal fil?",
		viewer_redaction_add_document_button: "Nytt dokument",
		viewer_redaction_add_new_version_button: "Ny versjon",
		viewer_redaction_add_new_version_button_version_never: "Nytt innhold",
		viewer_redaction_add_local_file_button: "Lokal fil",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Velg retusjeringsårsak",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Oppføringsmalen som ble brukt da dette dokumentet ble lagt til i datalageret, ble ikke funnet. Dokumentet blir sjekket inn i datalageret uten bruk av oppføringsmalen.",
		property_entry_template_not_retrieved_warning: "Oppføringsmalen som ble brukt da dette dokumentet ble lagt til i datalageret, ble ikke funnet. Dokumentegenskapene blir vist uten bruk av oppføringsmalen.",
		multi_edit_entry_template_not_found_name: "[Ikke funnet]",
		multi_edit_entry_template_not_retrieved_warning: "Oppføringsmalen som ble brukt da disse elementene ble lagt til i datalageret, ble ikke funnet. Elementegenskapene blir endret uten bruk av oppføringsmalen.",
		checkin_major_version_hover: "Øker dokumentversjonsnummeret med én og setter dokumentstatusen til Utgitt. Hvis alternativet ikke er valgt, er dokumentet ikke klart for å utgis, og blir sjekket inn som en underversjon.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokumentet kan ikke sjekkes inn fordi det ikke er sjekket ut.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Bruker-IDen eller passordet er ikke gyldig for serveren.",
		error_bad_userid_password_userResponse: "Kontroller at du har oppgitt riktig brukernavn og passord.",
		error_bad_userid_password_adminResponse: "Følgende feil ble returnert: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "feilmelding",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "En tilkobling til webklienten kan ikke opprettes ved hjelp av denne URLen: ${0}.",
		http_send_error_explanation: "Denne feilen kan skyldes et konfigurasjonsproblem på webapplikasjonsserveren eller et problem med webklientapplikasjonen.",
		http_send_error_userResponse: "Prøv å logge deg på igjen. Hvis problemet vedvarer, rapporterer du feilen til systemadministratoren.",
		http_send_error_adminResponse: "Følgende HTTP-feil ble returnert: ${1}.",
		http_send_error_0: "webklient-URL",
		http_send_error_1: "HTTP-feil",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "En tilkobling til webklienten kan ikke opprettes ved hjelp av denne URLen: ${0}.",
		http_error_explanation: "Du må kanskje autentiseres for en brannmur, eller så kjører ikke webapplikasjonsserveren eller kan ikke nås på grunn av nettverksproblemer.",
		http_error_userResponse: "Hvis du må autentiseres for en brannmur, autentiserer du og prøver å logge deg på igjen. Hvis problemet vedvarer, rapporterer du feilen til systemadministratoren.",
		http_error_adminResponse: "Følgende HTTP-feil ble returnert: ${1}.",
		http_error_0: "webklient-URL",
		http_error_1: "HTTP-feil",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "En tilkobling til webklienten kan ikke opprettes ved hjelp av denne URLen: ${0}.",
		http_response_bad_explanation: "Denne feilen kan skyldes et konfigurasjonsproblem på webapplikasjonsserveren eller et problem med webklienten.",
		http_response_bad_userResponse: "Prøv å logge deg på igjen. Hvis problemet vedvarer, rapporterer du feilen til systemadministratoren.",
		http_response_bad_adminResponse: "Følgende feil ble returnert: ${1}.",
		http_response_bad_0: "webklient-URL",
		http_response_bad_1: "HTTP-feil",
		http_response_bad_number: 2002,

		unititled_document_name: "Uten tittel",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "E-postappletten kan ikke startes.",
		email_applet_init_failed_explanation: "Dette problemet kan oppstå når e-postklienten er ikke installert og konfigurert på riktig måte, eller når en støttet versjon av Java Runtime Environment (JRE) ikke er installert på arbeidsstasjonen.",
		email_applet_init_failed_userResponse: "For å løse problemet:<ul><li>Kontroller at e-postapplikasjonen din er installert og konfigurert som standard e-postklient på arbeidsstasjonen.</li><li>Kontroller at en støttet versjon av JRE er installert på arbeidsstasjonen, ved å skrive denne kommandoen på en kommandolinje: java -version</li></ul><p>En liste over de støttede versjonene av JRE finner du i dokumentet Hardware and software prerequisites for IBM Content Navigator på IBM Support-nettstedet.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "E-postapplikasjonen kunne ikke startes fordi en nødvendig DLL-fil ikke kan lastes inn.",
		email_applet_JNI_LOAD_FAILED_explanation: "Den nødvendige filen WCEmailAppletJNI.dll kan ikke lastes inn fordi den midlertidige katalogen på arbeidsstasjonen kan være full.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Kontroller at det er nok plass i den midlertidige katalogen. Prøv deretter å sende dokumentet fra webklienten igjen. Som standard blir filen WCEmailAppletJNI.dll lastet inn i den midlertidige katalogen som er oppgitt i innstillingene for nettleseren.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "E-postapplikasjonen kunne ikke startes fordi e-postappletten ikke kan opprette en midlertidig fil.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Den midlertidige katalogen på arbeidsstasjonen kan være full.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Kontroller at det er nok plass i den midlertidige katalogen. Prøv deretter å sende dokumentet fra webklienten igjen.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "E-postapplikasjonen kan ikke startes fordi e-postappletten ikke får tilgang til den midlertidige katalogen.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Den midlertidige katalogen på arbeidsstasjonen kan være full, eller det er mulig du ikke har nødvendig tilgang for å skrive til den midlertidige katalogen.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Kontroller at det er nok plass i den midlertidige katalogen, og at du har skrivetillatelse til den midlertidige katalogen. Prøv deretter å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, må du kontakte systemadministratoren.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E-postappletten kan ikke slette en midlertidig fil.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Det er mulig at en annen applikasjon bruker filen, eller at filen ikke finnes på arbeidsstasjonen.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Hvis filen blir brukt av en annen applikasjon, lukker du applikasjonen. Hvis filen ligger på det lokale filsystemet, fjerner du følgende fil fra den midlertidige katalogen på arbeidsstasjonen: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Linken til dokumentet kan ikke opprettes.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Datalageret returnerte URLen med et ugyldig format.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Lukk nettleseren med alle flipper og sesjoner, og logg deg på igjen. Prøv å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, kontakter du IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E-postappletten kan ikke legge ved filen i en e-post.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Datalageret returnerte URLen til dokumentet med et ugyldig format.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Lukk nettleseren med alle flipper og sesjoner, og logg deg på igjen. Prøv å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, kontakter du IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Vedlegget kan ikke opprettes.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E-postappletten kan ikke lese URLen for dokumentet.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Lukk nettleseren med alle flipper og sesjoner, og logg deg på igjen. Prøv å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, kontakter du IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokumentet kunne ikke hentes fra datalageret.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Sesjonen er kanskje tidsavbrutt, datalager- eller webapplikasjonsserveren kjører kanskje ikke, eller det kan være et problem med databasekonfigurasjonen for webklienten.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Logg deg på, og prøv å sende dokumentet via e-post igjen. Hvis problemet vedvarer, kan du be systemadministratoren om å kontrollere feilloggene for datalageret.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Hvis du har konfigurert webklienten for å konvertere AFP-dokumenter til et annet format, for eksempel PDF, før du sender dokumenter som vedlegg, må du kontrollere at konverteringen er riktig konfigurert.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokumentet kunne ikke konverteres til PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Verktøyet som brukes til å transformere dokumenter til PDF, støtter ikke filtypen .",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Lukk denne siden og prøv å sende dokumentet med e-post igjen uten å konvertere det til PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-postmeldingen ble ikke opprettet.",
		email_applet_MAPI_USER_ABORT_explanation: "Åpne e-postapplikasjonen og kontroller at den fungerer slik den skal. Prøv deretter å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, kontakter du systemadministratoren for å kontrollere hendelsesloggene for operativsystemet.",
		email_applet_MAPI_USER_ABORT_userResponse: "Hvis du ønsket å lukke e-postapplikasjonen, trenger du ikke å gjøre noe. Når du vil sende e-posten, logger du deg på e-postapplikasjonen og prøver å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-postmeldingen kan ikke opprettes.",
		email_applet_MAPI_FAILURE_explanation: "E-postklienten er kanskje ikke åpen, eller du er kanskje ikke logget på.",
		email_applet_MAPI_FAILURE_userResponse: "Åpne e-postapplikasjonen og kontroller at den fungerer slik den skal. Prøv deretter å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, kontakter du systemadministratoren for å kontrollere hendelsesloggene for operativsystemet.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-postmeldingen kan ikke opprettes.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Du er ikke logget på e-postklienten. E-postklienten må være åpen og du må være logget på når du skal sende en melding fra webklienten.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Åpne e-postklienten og logg deg på. Prøv deretter å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-postmeldingen kan ikke opprettes fordi den midlertidige filen ikke kan opprettes på arbeidsstasjonen.",
		email_applet_MAPI_DISK_FULL_explanation: "Den midlertidige katalogen på arbeidsstasjonen kan være full.",
		email_applet_MAPI_DISK_FULL_userResponse: "Kontroller at det er nok plass i den midlertidige katalogen. Prøv deretter å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-postmeldingen kan ikke opprettes fordi det ikke er nok systemminne.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Du har kanskje for mange åpne applikasjoner.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Lukk alle ubrukte applikasjoner. Prøv deretter å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI-tilgang nektet.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "MAPI-tilgang (Messaging Application Programming Interface) er kanskje ikke aktivert eller støttet for din e-postapplikasjon. MAPI er meldingsformidlingsprotokollen som aktiverer kommunikasjon mellom webklienten og e-postapplikasjonen.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Kontakt systemadministratoren.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Kontroller at MAPI-tilgang er riktig konfigurert for e-postapplikasjonen. Hvis problemet vedvarer, kontakter du IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Vedlegget eller linken til elementet kan ikke opprettes.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Du har kanskje for mange åpne nettlesersesjoner.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Lukk alle ubrukte nettlesersesjoner. Prøv deretter å sende dokumentet fra webklienten igjen. Hvis problemet vedvarer, må du kontakte systemadministratoren.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-postmeldingen kan ikke sendes.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Du prøver kanskje å sende for mange vedlegg.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Velg færre filer. Prøv deretter å sende dokumentene fra webklienten igjen.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-postmeldingen kan ikke sendes.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Du sender kanskje e-postmeldingen til for mange mottakere.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Send e-postmeldingen til færre mottakere.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Vedlegget kan ikke opprettes.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Enkelte nødvendige midlertidige filer ble kanskje slettet før vedlegget kunne opprettes. Denne feilen kan oppstå hvis nettleserens hurtigbuffer blir tømt før e-postmeldingen er sendt.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Vedlegget kan ikke opprettes.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Enkelte nødvendige midlertidige filer ble kanskje slettet før vedlegget kunne opprettes. Denne feilen kan oppstå hvis nettleserens hurtigbuffer blir tømt før e-postmeldingen er sendt.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Vedlegget kan ikke opprettes av e-postapplikasjonen.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-postmeldingen kan ikke sendes til den oppgitte mottakeren.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Mottakeren finnes kanskje ikke i adresseboken.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Kontroller navnet på mottakeren og prøv å sende dokumentet igjen.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-postmeldingen kan ikke sendes til den oppgitte mottakeren.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-postadressen har kanskje ikke riktig format.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Kontroller at du har oppgitt riktig e-postadresse og prøv å sende dokumentet igjen.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_NO_MESSAGES_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-postmeldingen kan ikke sendes.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-postmeldingen er kanskje for lang.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Forkort teksten i e-postmeldingen og prøv å sende den igjen.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-postmeldingen kan ikke opprettes.",
		email_applet_MAPI_INVALID_SESSION_explanation: "E-postklienten mislyktes kanskje under forsøket på å opprette e-postmeldingen.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Start e-postklienten på nytt og prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-postmeldingen er kanskje ikke riktig utarbeidet.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-postmeldingen kan ikke sendes til den oppgitte mottakeren.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-postadressen har kanskje ikke riktig format.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Kontroller at du har oppgitt riktig e-postadresse og prøv å sende dokumentet igjen.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E-postklienten kan ikke utføre den forespurte handlingen.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E-postapplikasjonen returnerte en uventet feil.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Prøv å sende dokumentet fra webklienten igjen.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "En av egenskapene mangler nødvendig antall verdier.",
		error_property_cardinality_explanation: "Enkelte egenskaper har et minimums- og maksimumsantall verdier.",
		error_property_cardinality_userResponse: "Bruk pekehjelpen til å avgjøre hvilken egenskap som krever et minimumsantall av verdier. Oppgi deretter minimumsantallet av verdier og prøv igjen.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Det kreves et filnavn.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Oppgi et filnavn og prøv på nytt.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Plugin-modulen ${0} inneholder feil.",
		plugin_error_explanation: "Det oppstod en feil ved forsøk på å evaluere JavaScript for plugin-modulen ${0}. Hvis du fortsetter å bruke webklienten, kan det oppstå flere feil.",
		plugin_error_userResponse: "Kontakt systemadministratoren.",
		plugin_error_adminResponse: "Det er et problem med plugin-modulen som må løses av plugin-leverandøren. Det anbefales at du fjerner plugin-modulen fra webklientkonfigurasjonen til problemet med plugin-modulen er løst.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Oppføringsmalen kan ikke åpnes.",
		open_old_format_entry_template_error_explanation: "Oppføringsmalen bruker et eldre format enn det som støttes i webklienten.",
		open_old_format_entry_template_error_userResponse: "Be systemadministratoren om å oppdatere oppføringsmalen.",
		open_old_format_entry_template_error_adminResponse: "Bruk Application Engine eller Workplace XT Entry Template Designer og lagre en oppdatert versjon av oppføringsmalen.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Oppføringsmalen kan ikke åpnes.",
		open_custom_object_entry_template_error_explanation: "Webklienten støtter ikke følgende oppføringsmaltype: Oppføringsmal for tilpasset objekt.",
		open_custom_object_entry_template_error_userResponse: "Åpne en annen oppføringsmal.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "eForms-objektet kan ikke åpnes.",
		open_forms_object_error_explanation: "Webklienten støtter ikke følgende eForms-objekttyper: skjemamal, skjemadata, dokumentpolicy og arbeidsflytpolicy.",
		open_forms_object_error_userResponse: "Åpne et annet dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Du kan ikke bruke oppføringsmalen ${0}.",
		entry_template_folder_restricted_error_explanation: "Oppføringsmalen legger til elementer i mappen ${1}, og du har ikke de nødvendige tillatelsene til å legge til elementer i den mappen.",
		entry_template_folder_restricted_error_userResponse: "Velg en annen oppføringsmal eller be systemadministratoren om å gi deg de nødvendige tillatelsene for å legge til elementer i mappen ${1}.",
		entry_template_folder_restricted_error_0: "oppføringsmalnavn",
		entry_template_folder_restricted_error_1: "mappenavn",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Oppføringsmalen kan ikke åpnes.",
		open_records_entry_template_error_explanation: "Webklienten støtter ikke følgende oppføringsmaltype: Oppføringsmal for Deklarer som post.",
		open_records_entry_template_error_userResponse: "Åpne en annen oppføringsmal.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Arbeidsflyten kan ikke åpnes.",
		open_workflow_error_explanation: "Webklienten støtter ikke åpning av arbeidsflyter.",
		open_workflow_error_userResponse: "Åpne et annet dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokumentet kan ikke åpnes.",
		viewer_unable_to_view_error_explanation: "Det er ikke konfigurert noe visningsprogram for dokumenter av denne typen, eller det konfigurerte visningsprogrammet er ikke kompatibelt med systemet ditt.",
		viewer_unable_to_view_error_userResponse: "Be systemadministratoren om å konfigurere et visningsprogram for dokumenter av denne typen, og kontroller at det konfigurerte visningsprogrammet fungerer sammen med brukerens system.",
		viewer_unable_to_view_error_adminResponse: "Konfigurer et visningsprogram for denne dokumenttypen ved hjelp av administrasjonsverktøyet.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Søket kan ikke åpnes.",
		search_cannot_open_error_explanation: "Søkefunksjonen er ikke konfigurert for dette skrivebordet.",
		search_cannot_open_error_userResponse: "Be systemadministratoren om tilgang til et skrivebord som inneholder søkefunksjonen, eller spør om dette skrivebordet kan oppdateres slik at det inneholder søkefunksjonen.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokumentet ble ikke lastet inn.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional-visningsprogrammet kunne ikke åpne dokumentet.",
		viewer_document_load_failed_error_userResponse: "Du finner flere opplysninger i feilmeldingen i visningsprogrammet.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokumentet kan ikke vises.",
		viewer_session_expired_explanation: "Dokumentinnholdet kan ikke hentes.",
		viewer_session_expired_userResponse: "Prøv å logge deg på igjen. Hvis problemet vedvarer, kan det hende at applikasjonsserveren ikke kjører. Be systemadministratoren om å kontrollere IBM Content Navigator-feilloggene eller starte serveren på nytt.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokumentet kan ikke vises.",
		ajaxViewer_getPage_failed_explanation: "AJAX--visningsprogrammet mottok et feilsvar ved mottak av sideinnhold. Det kan hende at applikasjonsserveren ikke kjører.",
		ajaxViewer_getPage_failed_userResponse: "Lukk nettleseren og logg deg på igjen. Hvis problemet vedvarer, kan du be systemadministratoren om å kontrollere loggfilene for webapplikasjonsserveren eller starte serveren på nytt.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) ble ikke funnet på arbeidsstasjonen.",
		viewer_java_plugin_not_found_explanation: "Enten ble ikke plugin-modulen funnet, eller den riktige versjonen av JRE ikke er installert.",
		viewer_java_plugin_not_found_userResponse: "Kontroller om JRE er installert. Skriv for eksempel inn følgende kommando på en kommandolinje: Java -version. Hvis JRE ikke er installert eller feil versjonsnivå er installert, installerer du riktig versjon av JRE. En liste over de støttede versjonene finner du i dokumentet <i>Hardware and software prerequisites for IBM Content Navigator</i> på IBM Support-nettstedet.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokumentet kan ikke vises i nettleseren.",
		viewer_pdf_plugin_not_found_explanation: "Plugin-modulen som brukes til å vise PDF-dokumenter i nettleseren, ble ikke funnet.",
		viewer_pdf_plugin_not_found_userResponse: "PDF-filen blir lastet ned på arbeidsstasjonen din i stedet for å bli vist i visningsprogramvinduet.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Det følgende elementet kan ikke tilføyes til datalageret ${0}.",
		add_document_single_item_error_explanation: "Denne feilen kan oppstå på grunn av en av disse årsakene:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Du prøver å legge til et dokument som ble flyttet eller slettet.</li>" + "<li>Du prøver å legge til et dokument med endret navn.</li>" + "<li>Du prøver å legge til et dokument som er ødelagt.</li>" + "<li>Du prøver å legge til et dokument som er åpent i en annen applikasjon.</li>" + "<li>Du prøver å legge til en mappe i datalageret.</li>" + "<li>Du har ikke de nødvendige tillatelsene i operativsystemet for å få tilgang til dokumentet.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Treff egnede tiltak for å løse problemet:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Hvis dokumentet ble flyttet eller har fått nytt navn, finner du dokumentet i filsystemet og prøver å legge det til på nytt.</li>" + "<li>Hvis dokumentet er åpent i en annen applikasjon, må du lukke det og prøve å legge det til på nytt.</li>" + "</ul>" + "<br>Du kan ikke legge til dokumenter i datalageret.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "De følgende ${0} elementene kan ikke legges til i datalageret: ${1}",
		add_document_multiple_items_error_explanation: "Et problem med et av elementene forhindrer at alle elementene kan legges til i datalageret. Denne feilen kan oppstå på grunn av en av disse årsakene:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Du prøver å legge til et dokument som ble flyttet eller slettet.</li>" + "<li>Du prøver å legge til et dokument med endret navn.</li>" + "<li>Du prøver å legge til et dokument som er ødelagt.</li>" + "<li>Du prøver å legge til et dokument som er åpent i en annen applikasjon.</li>" + "<li>Du prøver å legge til en mappe i datalageret.</li>" + "<li>Du har ikke de nødvendige tillatelsene i operativsystemet for å få tilgang til dokumentet.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Treff egnede tiltak for å løse problemet:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Hvis et dokument er flyttet eller har fått nytt navn, finner du dokumentet i filsystemet og prøver å legge til elementene på nytt.</li>" + "<li>Hvis et dokument er åpent i en annen applikasjon, må du lukke det og prøve å legge til elementene på nytt.</li>" + "<li>Hvis et dokument er slettet eller er ødelagt, opphever du valget av elementet og forsøker å legge til resterende elementer på nytt.</li>" + "</ul>" + "<br>Du kan ikke legge til dokumenter i datalageret.",
		add_document_multiple_items_error_0: "antall_elementer",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Du kan ikke dra og slippe elementer fra dette stedet.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "eForms-objektet kan ikke åpnes.",
		open_forms_work_object_error_explanation: "Webklienten støtter ikke følgende eforms-objekttype: arbeidsflytpolicy.",
		open_forms_work_object_error_userResponse: "Åpne et annet dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokumentet kan ikke åpnes.",
		viewer_privilege_to_view_error_explanation: "Du har ikke de nødvendige rettighetene for å vise dokumentet.",
		viewer_privilege_to_view_error_userResponse: "Be eieren av dokumentet eller systemadministratoren om å gi deg de nødvendige tillatelsene til å vise dokumentet.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Elementene kan ikke legges til i datalageret.",
		add_document_too_many_items_error_explanation: "Du kan legge til opptil ${0} elementer om gangen. Du prøver å legge til ${1} elementer.",
		add_document_too_many_items_error_userResponse: "Fjern noen av elementene fra listen og prøv å legge til elementene igjen. Du kan også kontakte systemadministratoren for å øke det maksimale antall dokumenter du kan legge til på en gang på dette skrivebordet.",
		add_document_too_many_items_error_0: "største_antall_elementer",
		add_document_too_many_items_error_1: "antall_elementer",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "En tilkobling til webklienten kan ikke opprettes ved hjelp av denne URLen: ${0}.",
		http_ltpa_expired_explanation: "LTPA-nøkkelen som er knyttet til nettlesersesjonen, utløpte.",
		http_ltpa_expired_userResponse: "Start nettleseren på nytt og prøv å logge deg på igjen. Hvis problemet vedvarer, rapporterer du følgende feil til systemadministratoren: ${1}.",
		http_ltpa_expired_0: "webklient-URL",
		http_ltpa_expired_1: "HTTP-feil",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokumentet kan ikke legges til i mappen ${0}.",
		dnd_no_privilege_error_explanation: "Tillatelsene på mappen gjør at det ikke er mulig å legge til dokumenter i mappen.",
		dnd_no_privilege_error_userResponse: "Legg til dokumentet i en annen mappe.",
		dnd_no_privilege_error_0: "elementnavn",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Elementene kan ikke endres.",
		modify_document_too_many_items_error_explanation: "Du kan endre opptil ${0} elementer om gangen. Du prøver å endre ${1} elementer.",
		modify_document_too_many_items_error_userResponse: "Velg færre elementer og prøv å endre elementene igjen. Du kan også kontakte systemadministratoren for å øke det maksimale antall elementer du kan endre på en gang fra dette skrivebordet.",
		modify_document_too_many_items_error_0: "største_antall_elementer",
		modify_document_too_many_items_error_1: "antall_elementer",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Du kan ikke bruke klassen ${0}.",
		add_document_multiple_unique_values_error_explanation: "Klassen ${0} inneholder en eller flere egenskaper som krever en unik verdi for hvert dokument. Når du legger til flere dokumenter, bruker alle dokumentene de samme verdiene.",
		add_document_multiple_unique_values_error_userResponse: "Velg en annen klasse eller legg til dokumentene hver for seg.",
		add_document_multiple_unique_values_error_0: "klassevisningsnavn",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Du kan ikke bruke oppføringsmalen ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Oppføringsmalen ${0} krever at du legger til dokumenter i klassen ${1}. Klassen ${1} inneholder imidlertid en eller flere egenskaper som krever en unik verdi for hvert dokument. Når du legger til flere dokumenter, bruker alle dokumentene de samme verdiene.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Velg en annen oppføringsmal eller legg til dokumentene hver for seg.",
		add_document_multiple_unique_values_entry_template_error_0: "oppføringsmalnavn",
		add_document_multiple_unique_values_entry_template_error_1: "klassevisningsnavn",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Du kan ikke bruke oppføringsmalen ${0}.",
		entry_template_class_restricted_error_explanation: "Oppføringsmalen legger til elementer ved hjelp av klassen ${1}, og du har ikke de nødvendige tillatelsene for å legge til elementer ved hjelp av den klassen.",
		entry_template_class_restricted_error_userResponse: "Velg en annen oppføringsmal eller be systemadministratoren om å gi deg de nødvendige tillatelsene for å legge til elementer ved hjelp av klassen ${1}.",
		entry_template_class_restricted_error_0: "oppføringsmalnavn",
		entry_template_class_restricted_error_1: "klassevisningsnavn",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Arbeidselementet kan ikke tildeles på nytt til en annen bruker.",
		process_reassign_error_explanation: "Denne handlingen forhindres av arbeidsflyten.",
		process_reassign_error_userResponse: "Du kan åpne arbeidselementet og fullføre gjeldende trinn for arbeidselementet.  Hvis du vil ha informasjon om dette, må du be eieren av elementet om å bekrefte at arbeidselementet kan omtildeles.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Følgende tilpassede handling kunne ikke lastes inn: ${0}.",
		customaction_loadurl_error_explanation: "Den tilpassede handlingen er ikke på et tilgjengelig sted. Gjeldende URL for tilpasset handling er ${1}.",
		customaction_loadurl_error_userResponse: "Be administratoren om å flytte den tilpassede handlingen til et tilgjengelig sted.",
		customaction_loadurl_error_adminResponse: "JSP-filen som definerer den tilpassede handlingen, må leveres som en del av eClient-webapplikasjonen eller IBM Content Navigator-webapplikasjonen.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Følgende funksjon ble ikke funnet: ${0}.",
		feature_invalid_explanation: "Dette problemet kan oppstå hvis funksjonen ikke er tilgjengelig på det oppgitte skrivebordet, eller hvis funksjonsnavnet er feilstavet.",
		feature_invalid_userResponse: "Når du klikker på OK, blir du omdirigert til standardfunksjonen for dette skrivebordet. Kontakt systemadministratoren for å rapportere dette problemet.",
		feature_invalid_adminResponse: "Hvis funksjonen skal være tilgjengelig på skrivebordet, oppdaterer du skrivebordskonfigurasjonen i administrasjonsverktøyet. Hvis funksjonen ikke skal inkluderes på skrivebordet eller er feilstavet, må du be applikasjonsutvikleren som opprettet URLen for denne funksjonen om å oppdatere URLen.",
		feature_invalid_number: 2066,
		feature_invalid_0: "funksjonsnavn",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Søket ${0} kan ikke åpnes.",
		search_unsupportedTeamspaceSearch_error_explanation: "Du må være i et grupperom hvis du skal åpne dette søket.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Velg et annet søk.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Følgende fil kan ikke importeres: ${0}.",
		wrong_import_file_type_error_explanation: "Filen må være en egenskapsfil.",
		wrong_import_file_type_error_userResponse: "Velg egenskapsfilen du eksporterte fra administrasjonsverktøyet.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Datalageret ${0} ble ikke funnet på skrivebordet ${1}.",
		browse_repository_not_found_error_explanation: "Datalageret må finnes på skrivebordet og være aktivert for funksjonen for å bla gjennom når det er oppgitt i en URL-parameter.",
		browse_repository_not_found_error_userResponse: "Kontroller at datalager-IDen som er oppgitt i URLen er riktig, at datalageret er lagt til på skrivebordet ${1}, og at funksjonen for å bla gjennom er aktivert for datalageret.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Datalageret ${0} er ikke aktivert for funksjonen for å bla gjennom på skrivebordet ${1}.",
		browse_repository_not_enabled_error_explanation: "Datalageret må være aktivert for funksjonen for å bla gjennom når det er oppgitt i en URL-parameter.",
		browse_repository_not_enabled_error_userResponse: "Aktiver funksjonen for å bla gjennom for datalageret ${0} på skrivebordet ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Søket kan ikke fullføres fordi linken inneholder ugyldige kriterier.",
		invalid_xt_stored_search_criteria_error_explanation: "Følgende verdi er ikke gyldig: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Be systemadministratoren om å skaffe en oppdatert link.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Rediger riktig navn/verdi-par i URLen. Hvis du ikke vet hvilke verdier som er gyldige for egenskapen, åpner du det lagrede søket i FileNet Workplace XT Search Designer for å fastsette en gyldig verdi.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Flerdatalagersøket kan ikke åpnes.",
		unified_search_invalid_fixed_value_error_explanation: "Flerdatalagersøket inneholder ugyldige kriterier. Dette problemet kan oppstå når et kriterium har en fast verdi som ikke er kompatibel med de andre egenskapene i en tilordning. Dette problemet kan for eksempel oppstå hvis den faste verdien er en streng, men de andre egenskapene i tilordningen er heltall.",
		unified_search_invalid_fixed_value_error_userResponse: "Hvis du har de nødvendige tillatelsene for å redigere søket, fjerner du det ugyldige kriteriet og lagrer søket på nytt. Hvis du ikke har de nødvendige tillatelsene til å redigere søket, ber du eieren av søket eller systemadministratoren om å lagre søket på nytt.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Forespørselen kan ikke fullføres.",
		launch_action_invalid_json_error_explanation: "Dataene som ble sendt til webklienten, er ikke gyldige.",
		launch_action_invalid_json_error_userResponse: "Fortell systemadministratoren hvilken applikasjon du brukte da dette problemet oppstod.",
		launch_action_invalid_json_error_adminResponse: "Klientapplikasjonen sendte ikke et gyldig JSON-objekt til webklienten. Kontakt IBM Software Support hvis du trenger mer hjelp.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Forespørselen kan ikke fullføres.",
		launch_action_not_found_error_explanation: "Handlingen ${0} er ikke konfigurert for noen menyer på skrivebordet ${1}.",
		launch_action_not_found_error_userResponse: "Be systemadministratoren om å konfigurere skrivebordet ${1} slik at det bruker en meny som inneholder handlingen ${0}, eller om å tilordne deg til et skrivebord som inneholder handlingen ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Forespørselen kan ikke fullføres.",
		launch_action_repository_not_found_error_explanation: "Datalageret ${0} er ikke knyttet til skrivebordet ${1}.",
		launch_action_repository_not_found_error_userResponse: "Be systemadministratoren om å knytte datalageret ${0} til skrivebordet ${1} eller tilordne deg til et skrivebord som inneholder datalageret ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Grupperommet kan ikke åpnes.",
		teamspace_cannot_open_error_explanation: "Grupperomfunksjonen er ikke konfigurert for dette skrivebordet.",
		teamspace_cannot_open_error_userResponse: "Be systemadministratoren om tilgang til et skrivebord som inneholder grupperomfunksjonen, eller spør om dette skrivebordet kan oppdateres slik at det inneholder grupperomfunksjonen.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Det oppstod en feil ved innsjekking av retusjert innhold.",
		viewer_redaction_checkin_failed_explanation: "Visningsprogrammet mottok et feilsvar ved innsjekking av retusjert innhold.",
		viewer_redaction_checkin_failed_userResponse: "Be systemadministratoren om å se gjennom loggfilene for webapplikasjonsserveren.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Du kan ikke legge til dokumenter i dette datalageret.",
		add_document_odserver_odwek_version_od_error_explanation: "Gjeldende versjon av IBM Content Manager OnDemand Server eller ODWEK er ikke på minimumsnivået som kreves for å støtte tilføying av dokumenter i et Content Manager OnDemand-datalager.",
		add_document_odserver_odwek_version_od_error_userResponse: "Be administratoren om å kontrollere hvilke versjoner av Content Manager OnDemand Server og ODWEK som kreves for å støtte tilføying av dokumenter i Content Manager OnDemand-datalagre.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Elementene kan ikke legges til i datalageret.",
		add_document_too_many_items_od_error_explanation: "For IBM Content Manager OnDemand-datalagre kan du bare legge til ett element om gangen.",
		add_document_too_many_items_od_error_userResponse: "Fjern noen av elementene fra listen og prøv å legge til elementene igjen, ett element om gangen.",
		add_document_too_many_items_od_error_0: "største_antall_elementer",
		add_document_too_many_items_od_error_1: "antall_elementer",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Elementet kan ikke legges til i datalageret.",
		add_document_filesize_empty_od_error_explanation: "Du kan ikke legge til tomme filer i et IBM Content Manager OnDemand-datalager.",
		add_document_filesize_empty_od_error_userResponse: "Legg til innhold i filen og prøv å legge den til igjen, eller legg til et annet element.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Flerdatalagersøket kan ikke åpnes.",
		unified_search_repository_not_found_error_explanation: "Flerdatalagersøket inneholder ett eller flere ugyldige datalagre. Dette problemet kan oppstå hvis datalagre som er inkludert i søket, er slettet fra applikasjonen eller fjernet fra det gjeldende skrivebordet.",
		unified_search_repository_not_found_error_userResponse: "Hvis du har de nødvendige tillatelsene til å redigere søket, lagrer du søket på nytt. Når du lagrer søket, fjerner webklienten de ugyldige datalagrene fra søket. Hvis du ikke har de nødvendige tillatelsene til å redigere søket, ber du eieren av søket eller systemadministratoren om å lagre søket på nytt.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Et nytt dokument kan ikke opprettes.",
		edit_document_using_office_online_error: "Dokumentet kan ikke åpnes.",
		edit_document_using_office_online_error_explanation: "URLen til Microsoft Office Online Server er ikke konfigurert.",
		edit_document_using_office_online_error_userResponse: "Før du kan bruke Office Online, må administratoren aktivere Office Online Server på et datalager og oppgi URLen til Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokumentet kan ikke åpnes i Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Be administratoren om å oppdatere MS Office Online Server Integration.<br><br> Hvis brukeren trenger tilgang til dette dokumentet fra Microsoft Office Online, går du til siden Edit Integration for datalageret og oppdaterer MS Office Online Server Integration slik at det inkluderer klassen på listen over klasser som skal endres for Office Online-støtte. ",		
		browser_not_support_this_viewer: "Det konfigurerte visningsprogrammet er ikke kompatibelt med nettleseren din.",
		browser_not_support_this_viewer_explanation: "${0} støttes ikke av nettleseren.",
		browser_not_support_this_viewer_userResponse: "Bruk et annet visningsprogram til å åpne dokumentet. En liste over de støttede nettleserne finner du i dokumentet <i>Hardware and software prerequisites for IBM Content Navigator</i> på IBM Support-nettstedet.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informasjon om arbeidsprosess",
		process_information_info_text: "Det valgte elementet kjøres allerede på følgende arbeidsflyter.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Er lik",
		operator_NOTEQUAL: "Ikke lik",
		operator_LIKE: "Likner",
		operator_STARTSWITH: "Begynner med",
		operator_ENDSWITH: "Slutter med",
		operator_NOTLIKE: "Forskjellig",
		operator_NULL: "Er tom",
		operator_NOTNULL: "Er ikke tom",
		operator_LESS: "Mindre enn",
		operator_LESSOREQUAL: "Mindre enn eller lik",
		operator_GREATER: "Større enn",
		operator_GREATEROREQUAL: "Større enn eller lik",
		operator_BETWEEN: "Mellom",
		operator_NOTBETWEEN: "Ikke mellom",
		operator_IN: "Inkluder alle",
		operator_INANY: "Inkluder hvilke som helst",
		operator_NOTIN: "Ekskluder alle",
		operator_CONTAINS: "Inneholder",

		/* SearchForm widget */
		search_button_tooltip: "Søk etter dokumenter som samsvarer med kriteriene.",
		reset_button_tooltip: "Tilbakestiller søket til standardverdiene som er fastsatt av administratoren.",
		clear_button_tooltip: "Fjerner alle verdier du oppgav for søket.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Velg søk",
		append_to_search: "Tilføy til søk",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nytt søk",
		new_unified_search: "Nytt flerdatalagersøk",
		searh_name_contains: "Søkenavn inneholder",
		keep_search_criteria_expanded: "La søkekriteriene være åpne",
		showing_results: "Viser resultater for:",
		open_in_new_window: "Åpne i nytt vindu",
		open_in_new_tab: "Åpne på ny flipp",
		close_tab: "Lukk flipp",
		add_repository: "Legg til datalager",
		edit_repository: "Rediger datalager",
		remove_repository: "Fjern",
		search_scope: "Søkeomfang",
		search_class_template: "Klasse",
		object_type_version: "Objekttype og versjon",
		not_applicable: "Gjelder ikke",
		unified_search_including_subfolders: " (Inkludert undermapper)",
		unified_search_dialog_intro_text: "Velg datalageret og søket eller klassene du vil inkludere i søket.",
		unified_search_class_or_template: "Klasse eller mal",

		select_object_fieldset_legend: "Hvordan vil du søke etter elementer som skal legges ved:",
		select_object_create_new_search: "Nytt søk",
		select_object_search_template: "Eksisterende søk",

		search_criteria: "Søkekriterier:",
		search_criteria_no_colon: "Søkekriterier",
		search_in_multiple: "Søk i (${0}):",
		search_location_including_subfolders: "${0} inkludert undermapper",
		search_class: "Klasse:",
		search_class_multiple: "Klasse (${0}):",
		search_class_including_subclasses: "${0} inkludert subklasser",
		search_class_all_pseudo: "Alle",
		search_results: "Søkeresultater",
		select_operator: "Velg en operator",
		ending_value: "Sluttverdien for egenskapen ${0} er:",
		search_options: "Søkealternativer:",
		search_version: "Versjon:",
		search_released_version: "Utgitt versjon",
		search_current_version: "Gjeldende versjon",
		search_all_versions: "Alle versjoner",
		search_file_type_filter: "Filtypefilter:",
		search_one_file_type: "1 filtype",
		search_many_file_types: "${0} filtyper",
		search_action_filter: "Handlingsfilter:",
		search_action_filter_hover_help: "Begrens resultatene til å inkludere bare filer som brukere har utført en bestemt handling på.<br/>Du kan for eksempel søke bare etter dokumenter du har lagt til den 20. september 2012.",
		search_action_filter_enabled: "Handlingsfilter er aktivert",
		search_enable: "Aktiver",
		search_disable: "Deaktiver",
		search_by: "av",
		search_added: "Lagt til",
		search_modified: "Endret",
		search_checked_out: "Sjekket ut",
		search_date_operator_on: "På",
		search_date_operator_not_on: "Ikke på",
		search_date_operator_before: "Før",
		search_date_operator_after: "Etter",
		search_version_hover_help_p8: "En utgitt versjon er tilgjengelig for alle brukere. Et dokument som er en gjeldende versjon, betyr at én eller flere brukere redigerer dokumentet.",
		search_version_hover_help_cm: "En gjeldende versjon er den nyeste versjonen av elementet.",
		search_using: "Søk etter elementer som samsvarer med:",
		search_property_and_text_criteria: "Både egenskapsverdiene og tekstkriteriene",
		search_property_or_text_criteria: "Enten egenskapsverdiene eller tekstkriteriene",
		search_property_and_text: "Både egenskaps- og tekstkriterier",
		search_property_or_text: "Enten egenskaps- eller tekstkriterier",
		search_property_options: "Egenskapsalternativer:",
		search_property_option_match_all: "Alle egenskapene",
		search_property_option_match_any: "Hvilke som helst av egenskapene",
		search_property_option_match_all_summary: "Samsvar med alle",
		search_property_option_match_any_summary: "Samsvar med hvilke som helst",
		search_total_count_type_total: "Totalt",
		search_total_count_type_atleast: "Minst",
		search_content_size_filter: "Innholdsstørrelsesfilter:",
		search_content_size_filter_any: "Enhver innholdsstørrelse",

		/* Search work options */
		search_work_filter: "Arbeidselementfilter:",
		search_work_filter_hover_help: "Begrens resultatene til å inkludere bare elementer som er i en arbeidsflyt. Du kan for eksempel begrense resultatene til å inkludere bare arbeidselementer som er aktive.<br /><br />Dette alternativet gjelder ikke hvis du vil se alle versjoner av elementene som er returnert av søket.",
		search_work_filter_enabled: "Arbeidselementfilter er aktivert",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Trinn:",
		search_work_filter_owner: "Eier:",
		search_work_filter_status_all: "Alle elementer",
		search_work_filter_status_active: "Aktive poster",
		search_work_filter_status_suspended: "Utsatte poster",
		search_work_filter_process_all: "Alle arbeidsflyter",
		search_work_filter_step_all: "Alle trinn",
		search_work_filter_owner_all: "Alle brukere",
		search_work_filter_step_error: "Trinnavnet finnes ikke.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Søket kan ikke fullføres uten tilleggsinformasjon. Oppgi en verdi for minst én betingelse.",
		search_insufficient_input_box: "Søket kan ikke fullføres uten tilleggsinformasjon. Oppgi tekstsøkskriterier eller velg en metadatamal.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Søket kan ikke konfigureres til å kjøre når det åpnes, uten tilleggsinformasjon. Oppgi en verdi for minst én betingelse.",
		search_member_required: "Hvis du vil dele dette søket med bestemte brukere og grupper, må du velge minst en bruker eller gruppe du vil dele dette søket med.",
		search_criteria_layout_and: "OG",
		search_criteria_layout_or: "ELLER",
		search_prompt_close_without_save: "Vil du lukke uten å lagre endringene?",
		search_prompt_close_all_without_save: "Vil du lukke alle flipper uten å lagre endringene?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "En av de følgende typene søkekriterier er ikke gyldig for dette datalageret: ${0}. Hvis du vil kjøre søket i webklienten, må du fjerne de ugyldige kriteriene. Hvis du lagrer søket, vil de ugyldige kriteriene bli fjernet. Hvis du ikke vil endre søket, lukker du søket.",
		search_invalid_repository: "Ett eller flere datalagre",
		search_invalid_class: "En eller flere klasser",
		search_invalid_folder: "En eller flere mapper",
		search_invalid_file_type: "En eller flere filtyper",
		search_invalid_property: "En eller flere egenskaper",
		search_invalid_text_search: "Tekstsøkekriterier",
		search_invalid_work: "Filtreringskriterier for arbeidselementer",

		search_operator_pulldown_missing: "Det kreves en operator. Velg en operator fra rullegardinmenyen. Hvis du ikke ser noen operatorer, må du be systemadministratoren om å kontrollere flippen <b>Søk</b> i administrasjonsverktøyet for å se om alle operatorene er definert som skjult. Hvis dette er et flerdatalagersøk, inneholder rullegardinmenyen kanskje ikke noen operatorer hvis egenskapene som er tilordnet til hverandre, ikke har felles operatorer.",

		/*SearchBuilder */
		open_search_builder: "Nytt søk",
		document_type: "Klasse",
		show_all_properties: "Vis alle egenskaper",
		text_search_label: "Søk etter elementer med følgende ord:",
		text_search_place_holder: "Bruk en kombinasjon av uttrykk og operatorer: * ? eller \"uttrykk for nøyaktig samsvar\"",
		text_search_place_holder_box: "Bruk en kombinasjon av ord og operatorer: AND, OR, NOT og \"uttrykk for nøyaktig samsvar\"",
		text_search_place_holder_cascade_proximity: "Bruk en kombinasjon av ord og operatorer: * eller ?",
		text_search_place_holder_common: "Bruk en kombinasjon av uttrykk og \"uttrykk for nøyaktig samsvar\"",
		text_search_hover_help_p8: "Bruk en stjerne (*) eller spørsmålstegn (?) som jokertegn. Bruk doble anførselstegn (\"\") for nøyaktig samsvar.",
		text_search_hover_help_p8_only_crs: "Bruk en stjerne (*) eller spørsmålstegn (?) som jokertegn. Bruk doble anførselstegn (\"\") for nøyaktig samsvar. Når du oppgir flere søkeord, vil flerdatalagersøket returnere elementer som inneholder minst ett av ordene.",
		text_search_hover_help_cm: "Bruk en stjerne (*) eller spørsmålstegn (?) som jokertegn. Bruk doble anførselstegn (\"\") for nøyaktig samsvar. Bruk minustegn (-) foran ord som skal ekskluderes, og plusstegn (+) foran ord som skal inkluderes.",
		text_search_hover_help_box: "Bruk AND mellom ord for å søke etter alle ordene. Bruk OR mellom ord for å søke etter et hvilket som helst av ordene. Bruk doble anførselstegn (\"\") for nøyaktig samsvar. Sett NOT foran et ord for å utelukke det.",
		text_search_hover_help_common: "Bruk doble anførselstegn (\"\") for nøyaktig samsvar. Når du oppgir flere søkeord, vil flerdatalagersøket returnere elementer som inneholder alle ordene.",
		text_search_options: "Tekstalternativer:",
		text_search_options_hover_help: "Hvis du bruker andre operatorer enn jokertegn, velger du Avanserte operatorer.",
		text_search_option_any: "Hvilke som helst av ordene",
		text_search_option_all: "Alle ordene",
		text_search_option_proximity: "Nærhet:",
		text_search_option_none: "Avanserte operatorer",
		text_search_option_authoring: "Tekstsøk er:",
		text_search_option_authoring_hover_help: "Velg et alternativ som bestemmer hvordan du vil gjøre tekstsøkekriteriene tilgjengelige for brukere. Hvis du ikke vil inkludere noen tekstsøkekriterier i søket, skjuler du alternativet. Ellers kan du tillate at tekstsøkekriteriene kan redigeres eller være obligatoriske for brukere eller være skrivebeskyttet for brukere.",
		text_search_option_hide: "Skjul kriterier",
		text_search_option_hide_hover_help: "Velg dette alternativet hvis du ikke vil inkludere noen tekstsøkekriterier i søket eller tillate at andre brukere oppgir tekstsøkekriterier.",
		text_search_option_in: "I HTML/XML-koden ${0}",
		text_search_option_paragraph: "I samme avsnitt",
		text_search_option_sentence: "I samme setning",
		text_search_option_vql: "VQL-spørring",
		text_search_option_none_hover_help: "Bruk - foran ord du vil ekskludere.",
		text_search_option_cascade_proximity_hover_help: "Begrenser søkeresultatene til ord som forekommer innenfor et intervall av ord som ikke inkluderer nøyaktige uttrykk.",

		box_search_metadata: "Metadata:",
		box_search_select_template: "Velg mal",
		box_search_no_templates: "Ingen maler tilgjengelig",
		box_text_search_options_search_within: "Søkeomfang:",
		box_text_search_options_search_within_everything: "Alt",
		box_text_search_options_search_within_file_content: "Dokumentinnhold",
		box_text_search_options_search_within_tags: "Koder",
		box_text_search_options_limit_to: "Søk bare i:",

		add_property: "Legg til egenskap",
		edit_template: "Rediger søk",
		save_search: "Lagre søk",
		search_template_name: "Navn:",
		search_template_desc: "Beskrivelse:",
		auto_run: "Kjør søket når det åpnes",
		show_in_tree: "Vis søket i mappestrukturen",
		show_in_tree_hover_help: "Hvis et søk er lagret i en mappe, blir det bare vist på innholdslisten som standard. Hvis du velger dette alternativet, blir søket også vist i mappetreet i visningen Bla gjennom.  Søket blir imidlertid vist i mappetreet bare hvis du har lagret søket i en mappe.",
		share_search_with: "Del søk med:",
		remove_member: "Fjern ${0}",
		ok_button_label: "OK",
		save_template: "Lagre",
		save_template_title: "Hvis du ofte har behov for å søke etter bestemte elementer, kan du lagre søkekriteriene.",
		remove_criterion: "Fjern",
		apply_button_label: "Bruk",
		empty_search_results_pane: "Kjør et søk for å se resultater.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Hele datalageret",

		repository_already_selected: "Datalageret ${0} kan ikke legges til flerdatalagersøket fordi det allerede er inkludert i søket. <br/> Et datalager kan inkluderes i flerdatalagersøket bare en gang. <br/>Velg et annet datalager du vil inkludere i flerdatalagersøket.",

		repository_limit_reached: "Datalageret ${0} kan ikke legges til i flerdatalagersøket. Du kan legge til maksimalt ${1} datalagre i søket.",

		nomore_criteria_toappend: "Alle de tilordnede egenskapene er allerede inkludert i søkekriteriene. Ingen egenskaper ble lagt til i søkekriteriene.",
		nomore_criteria_toappend_regular: "Alle egenskapene er allerede inkludert i søkekriteriene. Ingen egenskaper ble lagt til i søkekriteriene.",

		/* OD Save Search dialog */
		reload_label: "Last inn på nytt",
		od_save_search_help_text: "Skriv et navn på søket eller velg et eksisterende søk du vil erstatte",
		public_access_label: "Tillat andre å bruke dette søket",
		od_delete_search_help_text: "Velg ett eller flere søk som skal slettes",
		delete_save_searches: "Slett lagrede søk",

		/* Unified Search */
		unified_search_enable_text_search: "Inkluder tekstsøkekriterier",
		unified_search_text_search_enabled: "Tekstsøk inkludert",
		unified_search_mapping: "Tilordning",
		unified_search_new_mapping: "Ny tilordning",
		unified_search_mapping_name: "Tilordningsnavn",
		unified_search_mapping_dialog_instructions: "Velg egenskapene du vil tilordne. Noen egenskaper kan tilordnes til egenskaper med en annen datatype. Du kan for eksempel tilordne en strengegenskap til en heltallsegenskap. Når du tilordner en egenskap til en annen egenskap, blir egenskapene behandlet som en enkelt egenskap i flerdatalagersøket.",
		unified_search_filter_available_properties: "Filtrer tilgjengelige egenskaper",
		unified_search_available_properties: "Tilgjengelige egenskaper",
		unified_search_mapped_properties: "Tilordnede egenskaper",
		unified_search_single_values: "enkeltverdier",
		unified_search_multiple_values: "flere verdier",
		unified_search_add_mapping: "Legg til tilordning",
		unified_search_warn_remove_repository: "Det valgte datalageret brukes i søkekriteriene.\nHvis du fjerner datalageret, vil eventuelle tilordninger og søkekriterier som inkluderer datalageret, bli slettet.\n\nVil du fjerne datalageret?",
		unified_search_warn_update_repository_mappings: "En endring i egenskapsvalget for dette datalageret påvirker søkekriteriene.\n\nSøkekriteriene omfatter en eller flere tilordninger som omfatter en eller flere egenskaper som du fjerner. Eventuelle tilordninger som omfatter egenskaper som du fjerner, må slettes. Eventuelle søkekriterier som omfatter disse tilordningene, må slettes for at søket skal kunne kjøres.\n\nVil du oppdatere datalageralternativene og slette tilordningene og søkekriteriene?",
		unified_search_warn_update_repository_mappings_reset: "Hvis du inkluderer tekstsøkekriteriene for dette datalageret, påvirkes søkekriterier på tvers av datalagre.\n\nEventuelle egenskapssøkekriterier som inkluderer en tilordning med egenskaper for dette datalageret, må fjernes for at søket skal kunne kjøres.\n\nVil du oppdatere datalageralternativene og fjerne søkekriteriene?",
		unified_search_warn_update_repository_text_criteria: "Fjerning av tekstsøkekriteriene for dette datalageret påvirker søkekriterier på tvers av datalagre.\n\nTekstsøkekriteriene må slettes fra søkekriteriene på tvers av datalagre for at søket skal kunne kjøres.\n\nVil du oppdatere datalageralternativet og slette tekstsøkekriteriene?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Fjerning av tekstsøkekriteriene og endring av egenskapsvalget for dette datalageret påvirker søkekriterier på tvers av datalagre.\n\nTekstsøkekriteriene må slettes fra søkekriteriene på tvers av datalagre for at søket skal kunne kjøres. Søkekriteriene omfatter også en eller flere tilordninger som omfatter en eller flere egenskaper som du fjerner. Eventuelle tilordninger som omfatter egenskaper som du fjerner, må slettes. Eventuelle egenskapssøkekriterier som omfatter disse tilordningene, må slettes for at søket skal kunne kjøres.\n\nVil du oppdatere datalageralternativene og slette tekstsøkekriteriene, tilordningene og egenskapssøkekriteriene?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Hvis du ekskluderer tekstsøkekriteriene for dette datalageret, påvirkes søkekriterier på tvers av datalagre.\n\nEventuelle egenskapssøkekriterier som inkluderer en tilordning med egenskaper for dette datalageret, må fjernes for at søket skal kunne kjøres. Tekstsøkekriteriene kan slettes fra søkekriteriene på tvers av datalagre for at søket skal kunne kjøres.\n\nVil du oppdatere datalageralternativet og slette søkekriteriene?",
		unified_search_warn_remove_mapping: "Fjerning av denne tilordningen påvirker søkekriteriene.\n\nSøkekriteriene som bruker tilordningen, må slettes for at søket skal kunne kjøres.\n\nVil du oppdatere tilordningen og slette søkekriteriene?",
		unified_search_warn_update_mapping: "Endringer i denne tilordningen påvirker søkekriteriene.\n\nSøkekriteriene som bruker tilordningen, må tømmes for å sikre at søket ikke inneholder ugyldige operatorer eller verdier.\n\nVil du oppdatere tilordningen og tømme søkekriteriene?",
		unified_search_warn_update_mapping_not_searchable: "Endringer i denne tilordningen påvirker søkekriteriene.\n\nNår alle de tilordnede egenskapene er bare for visning, kan du ikke bruke tilordningen i søkekriteriene. Søkekriteriene som bruker tilordningen, må slettes for at søket skal kunne kjøres.\n\nVil du oppdatere tilordningen og slette søkekriteriene?",
		unified_search_warn_update_mapping_box_searchable: "Endringer i denne tilordningen påvirker søkekriteriene.\n\nSøkekriteriene inneholder allerede denne tilordningen mer enn en gang, og hvis du legger til egenskapen ${0} fra datalageret ${1}, inneholder søkekriteriene egenskapen ${0} for mange ganger. Søkekriteriene som bruker tilordningen, må slettes for at søket skal kunne kjøres.\n\nVil du oppdatere tilordningen og slette søkekriteriene?",
		unified_search_details: "Detaljer for flerdatalagersøk",
		unified_search_fixed_value_property: "Egenskap for fast verdi",
		unified_search_required_property: "Obligatorisk egenskap",
		unified_search_display_only_property: "Egenskap bare for visning",
		unified_search_missing_required_properities: "Søket kan ikke lagres eller kjøres.<br/>Følgende egenskaper er obligatoriske:${0}Du må inkludere egenskapene i en tilordning og legge til egenskapene med verdier i søkekriteriene.",
		unified_search_property_repostory: "${0} (Datalager: ${1})",
		unified_search_builder_no_mappings: "Søket kan ikke kjøres.<br/>Du må opprette en egenskapstilordning og inkludere den i <b>Resultatvisning</b> slik at søket kan vise resultatene.",
		unified_search_builder_insufficient_criteria_to_run: "Søket kan ikke kjøres.<br/>Søkekriteriene inkluderer ikke tekstsøkekriterier eller egenskapsverdier for følgende datalagre:${0}For hvert datalager som er inkludert i søket, må du enten oppgi tekstsøkekriterier, eller opprette en egenskapstilordning, inkludere den i egenskapskriteriene og oppgi en egenskapsverdi.",
		unified_search_builder_insufficient_criteria_to_save: "Søket kan ikke lagres.<br/>Søket inkluderer ikke søkekriterier for følgende datalagre:${0}For hvert datalager som er inkludert i søket, må du gjøre ett av følgende:<ol><li>Opprett en egenskapstilordning og inkluder den i egenskapskriteriene.</li><li>Endre datalageret for å inkludere tekstsøkekriterier, og opprett en egenskapstilordning og inkludere den i <b>Resultatvisning</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Søket kan ikke kjøres.<br/>For hvert datalager som er inkludert i søket, må du oppgi minst en egenskapsverdi. Du kan for eksempel oppgi verdier for følgende egenskaper: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Søket kan ikke kjøres.<br/>Det kreves tekstsøkekriterier.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Søket kan ikke kjøres.<br/>For hvert datalager som er inkludert i søket, må du oppgi minst en egenskapsverdi eller skrive inn tekstsøkekriterier. Du kan for eksempel oppgi verdier for følgende egenskaper: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Søket kan ikke kjøres.<br/>Det kreves tekstsøkekriterier. For hvert datalager som er inkludert i søket, må du oppgi minst en egenskapsverdi eller skrive inn tekstsøkekriterier. Du kan for eksempel oppgi verdier for følgende egenskaper: ${0}",
		unified_search_invalid_criteria: "Søket inneholder ugyldige kriterier som hindrer at søket kan kjøres.<br/>De ugyldige kriteriene er fjernet. Du må imidlertid lagre endringene i søket før du kan utføre søket. Hvis du ikke vil lagre endringene, lukker du søket.<br/><br/>Følgende elementer er fjernet eller endret:${0}",
		unified_search_invalid_fixed_values: "Søket kan ikke lagres eller kjøres.<br/>Følgende søkekriterier har faste verdier som ikke er gyldige:${0} Utfør en av følgende handlinger for å løse problemet:<ul><li>Fjern søkekriterier som inneholder ugyldige verdier</li><li>Rediger tilordningene som inneholder IBM Content Manager OnDemand-egenskapen med den faste verdien, for å fjerne egenskapen.</li><li>Rediger tilordningene som inneholder IBM Content Manager OnDemand-egenskapen med den faste verdien, for å gjøre alle egenskapene kompatible. For mer informasjon om hvilke egenskaper som kan tilordnes, kan du se linken Lær mer i introduksjonsteksten øverst i egenskapstilordningsvinduet.</li></ul>",
		unified_search_cannot_add_properties: "Du kan ikke legge til egenskaper for dette søket.<br/>Alle dine tilgjengelige tilordnede egenskaper finnes allerede i søkekriteriene, og hver egenskap kan bare legges til en gang i søket.",
		unified_search_mapping_not_viewable: "Box-malegenskapene kan ikke vises i søkeresultatene. Hvis du vil legge til denne tilordningen som en kolonne, må du tilordne minst en egenskap som ikke er en Box-malegenskap. Du kan for eksempel velge en egenskap fra et annet datalager.",

		unified_search_returned_more: "Minst ett datalager overskred det største tillatte antall resultater.",
		unified_search_partial_failure: "Det oppstod en feil på minst ett datalager.",
		unified_search_partial_failure_and_returned_more: "Det oppstod en feil på minst ett datalager, og minst ett datalager overskred det største tillatte antall resultater.",
		unified_search_see_analysis: "Se resultatanalysen.",
		unified_search_analysis_intro_returned_more: "For hvert datalager som overskred det største antall tillatte resultater, må du prøve å avgrense søkekriteriene slik at de returnerer færre resultater. Du kan også kjøre søk på ett enkelt datalager for å returnere flere resultater enn det som er tillatt for et søk på flere datalagre.",
		unified_search_analysis_intro_partial_failure: "Se gjennom feilinformasjonen som ble returnert av datalageret eller datalagrene. Rett eventuelle feil og kjør flerdatalagersøket på nytt.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "For hvert datalager der det oppstod en feil, må du prøve å løse problemet og kjøre søket på nytt.<br/><br/>For hvert datalager som overskred det største antall tillatte resultater, må du prøve å avgrense søkekriteriene slik at de returnerer færre resultater. Du kan også kjøre søk på ett enkelt datalager for å returnere flere resultater enn det som er tillatt for et søk på flere datalagre.",
		unified_search_results_found: "Resultater funnet",
		unified_search_maximum_allowed: "Maksimum tillatt",
		unified_search_maximum_exceeded: "Maksimum overskredet",

		unified_search_mapping_rule_box: "Denne egenskapen kan ikke legges til i tilordningen.<p>Egenskapen ${0} fra datalageret ${1} finnes allerede i en annen tilordning, og søkbare egenskaper fra dette datalageret kan bare inkluderes i en enkelt tilordning per søk.<br/>Velg en annen egenskap som skal legges til i tilordningen.</p>",
		unified_search_mapping_rule_repository: "Egenskapen kan ikke legges til i tilordningen.<br/>Tilordningen inneholder allerede en egenskap fra datalageret ${0}. En tilordning kan bare inneholde en enkelt egenskap fra et datalager.<br/>Velg et annet datalager du vil legge til en egenskap fra, eller opprett en ny tilordning for den valgte egenskapen.",
		unified_search_mapping_rule_data_type: "Egenskapen kan ikke legges til i tilordningen.<br/>En ${0}-egenskap kan ikke tilordnes til en ${1}-egenskap. Velg en annen egenskap du vil tilordne, eller opprett en ny tilordning for den valgte egenskapen.<br/>For mer informasjon om hvilke egenskaper som kan tilordnes, kan du se linken Lær mer i introduksjonsteksten øverst i dette vinduet.",
		unified_search_mapping_rule_cardinality: "Egenskapen kan ikke legges til i tilordningen.<br/>Alle egenskapene i tilordningen må støtte enten enkeltverdier eller flere verdier. Den valgte egenskapen støtter ${0}, og egenskapene i tilordningen støtter ${1}.<br/>Velg en annen egenskap du vil legge til i tilordningen, eller opprett en ny tilordning for den valgte egenskapen.",
		unified_search_mapping_rule_fixed_value: "Egenskapen kan ikke legges til i tilordningen.<br/>Tilordningen inneholder allerede en egenskap med en fast verdi. En tilordning kan bare inneholde en enkelt egenskap med en fast verdi.<br/>Velg en annen egenskap du vil legge til i tilordningen, eller opprett en ny tilordning for den valgte egenskapen.",
		unified_search_mapping_rule_child_component: "Egenskapen kan ikke legges til i tilordningen.<br/>En egenskap med en underordnet komponent kan ikke tilordnes til andre egenskaper. Hvis du ønsker å kunne søke på denne egenskapen, må du opprette en ny tilordning for den valgte egenskapen.",
		unified_search_mapping_rule_operator_intersection: "Egenskapen kan ikke legges til i tilordningen.<br/>Alle egenskapene i tilordningen må ha en eller flere operatorer til felles. Egenskapen ${0} har imidlertid ingen operatorer til felles med de andre egenskapene i tilordningen.<br/>Velg eventuelt en annen egenskap. Hvis du må inkludere den valgte egenskapen, må du be systemadministratoren om å redigere operatorene som er knyttet til egenskapen.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Avanserte innstillinger",
		advanced_search_options_intro: "Angi avanserte kriteriumsalternativer.",
		advanced_search_options_editable: "Redigerbar",
		advanced_search_options_readonly: "Skrivebeskyttet",
		advanced_search_options_required: "Obligatorisk",
		advanced_search_options_hidden: "Skjult",
		advanced_search_options_property_editable:"Egenskap er:",
		advanced_search_options_operators:"Operatorer:",
		advanced_search_options_use_all:"Bruk alle",
		advanced_search_options_use_selected:"Bruk valgte",
		advanced_search_options_operators_filtered: "Filtrert med operatorer",
		// Data types in lowercase
		data_type_boolean: "boolsk",
		data_type_date: "dato",
		data_type_time: "klokkeslett",
		data_type_timestamp: "tidsstempel",
		data_type_decimal: "desimalverdi",
		data_type_double: "flytetall",
		data_type_short: "heltall",
		data_type_integer: "heltall",
		data_type_long: "heltall",
		data_type_string: "tekststreng",
		data_type_string_alpha: "alfabetisk streng",
		data_type_string_alphanum: "alfanumerisk streng",
		data_type_string_ext: "utvidet alfanumerisk streng",
		data_type_string_num: "numerisk streng",
		data_type_binary: "binær",
		data_type_object: "objekt",
		data_type_guid: "globalt unik identifikator",
		data_type_user: "brukere",
		data_type_child_component: "underordnet komponent",

		/* Print Dialog */
		print_title: "Skriv ut",
		print_message: "Skriver ut: ${0}",
		print_print_button: "Skriv ut",
		print_clean_margins_button: "Sett alle til 0",
		print_type: "Skrivertype:",
		print_printer_server_options: "Serverutskriftsalternativer",
		print_printer_properties: "Skriveregenskaper",
		print_printer_fax_properties: "Faksegenskaper",
		print_printer_name: "Skrivernavn:",
		print_fax_recipient: "Mottaker",
		print_fax_sender: "Avsender",
		print_copies: "Kopier:",
		print_local_orientation: "Orientering",
		print_local_orientation_landscape: "Liggende",
		print_local_orientation_portrait: "Stående",
		print_local_margins: "Marger",
		print_local_margins_top: "Topp",
		print_local_margins_bottom: "Bunn",
		print_local_margins_left: "Venstre",
		print_local_margins_right: "Høyre",
		print_printer_server: "Server",
		print_printer_local: "Lokal",
		print_property_class: "Klasse:",
		print_property_routing: "Ruting:",
		print_property_pagedef: "Sidedefinisjon:",
		print_property_node: "Node:",
		print_property_writer: "Skriveprogram:",
		print_property_formdef: "Skjemadefinisjon:",
		print_property_printerid: "Mål:",
		print_property_forms: "Skjemaer:",
		print_property_faxnotes: "Merknader:",
		print_property_faxcompany: "Firma:",
		print_property_faxnumber: "Faksnummer:",
		print_property_faxname: "Navn:",
		print_property_faxsendertelnumber: "Telefonnummer:",
		print_property_faxcoverpage: "Forside:",
		print_property_faxsubject: "Emne:",
		print_saveoptions: "Lagre utskriftsalternativer",
		print_property_bannerpage: "Bruk bannerside",
		print_print_with_info_fields: "Skriv ut med infofelt",
		print_field_from: "Fra",
		print_field_to: "Til",
		print_invalid_value_class: "Gyldige tegn er A-Z og 0-9",
		print_invalid_value_pagedef: "Gyldige tegn er alfabetiske eller numeriske tegn og tegnene @, # og $",
		print_invalid_value_writer: "Gyldige tegn er alfabetiske eller numeriske tegn og tegnene @, # og $",
		print_invalid_value_formdef: "Gyldige tegn er alfabetiske eller numeriske tegn og tegnene @, # og $",
		print_invalid_value_forms: "Gyldige tegn er alfabetiske eller numeriske tegn og tegnene @, # og $",
		print_invalid_value_margin: "Gyldige tall er mellom ${0} og ${1}",
		print_status_message: "${0} dokumenter ble sendt til skriveren ${1}.",

		print_applet_init_error: "Utskriftsappletten kan ikke startes.",
		print_applet_init_error_explanation: "Dette problemet kan oppstå av følgende årsaker: <br/><br/><ul><li>Java Runtime Environment (JRE) er ikke installert på arbeidsstasjonen.</li><li>Java-pluginmodulen er ikke aktivert i nettleseren.</li><li>JRE-versjonen på arbeidsstasjonen din er ikke kompatibel med IBM Content Navigator-versjonen.</li><li>Nettleseren ble tidsavbrutt mens den ventet på at utskriftsappletten skulle starte.</li></ul>",
		print_applet_init_error_userResponse: "Du kan gjøre følgende for å løse JRE-problemet:<br/><br/><ol><li>Kontroller at JRE er installert på arbeidsstasjonen din.</li><li>Kontroller at Java-pluginmodulen er aktivert i nettleseren.</li><li>Kontroller at JRE-versjonen på arbeidsstasjonen er kompatibel med IBM Content Navigator, og prøv igjen. En liste over de støttede versjonene finner du i dokumentet <i>Hardware and software prerequisites for IBM Content Navigator</i> på IBM Support-nettstedet.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Forside",
		daeja_print_selected_documents_title: "Valgte dokumenter",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Samsvar med alle søkekriteriene",
		match_any_criteria: "Samsvar med hvilke som helst av søkekriteriene",
		include_subfolders_summary: "${0} (inkluder undermapper)",
		browse_button: "Bla gjennom&hellip;",
		search_for: "Søk etter:",
		object_type_documents: "Dokumenter",
		object_type_folders: "Mapper",
		object_type_documents_folders: "Dokumenter og mapper",
		object_type_web_links: "Weblinker",
		object_type_documents_folders_web_links: "Dokumenter, mapper og weblinker",

		/* SelectSearchFolderDialog */
		search_in: "Søk i:",
		include_subfolders: "Inkluder undermapper",

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
		locked_item_icon_title: "Låst av ${0}",
		checked_out_icon_title: "Sjekket ut av ${0}",
		major_minor_version_icon_title: "Hovedversjon med underversjoner",
		suspended_icon_title: "Arbeidsflyten er stoppet midlertidig",
		on_hold_icon_title: "Sperret",
		has_notes_icon_title: "Har merknader",
		record_icon_title: "Deklarer som en post",
		compound_document_icon_title: "Sammensatt dokument",
		validateTemplate_icon_title: "Grupperommal trenger validering",
		offlineTemplate_icon_title: "Grupperommal er frakoblet",
		offlineTeamspace_icon_title: "Grupperommet er frakoblet",
		pending_delete_icon_title: "Grupperom venter på sletting",
		delete_error_icon_title: "Grupperommet kunne ikke slettes",
		defaultTemplate_icon_title: "Standard grupperommal",
		teamspace_icon_title: "Grupperom",
		teamspace_template_icon_title: "Grupperommal",
		has_bookmark_icon_title: "Har et bokmerke",
		read_only_icon_title: "Skrivebeskyttet",
		no_results_were_found: "Ingen resultater ble funnet.",
		folder_is_empty: "Mappen er tom.",
		no_checked_out_items: "Du har ingen elementer som er sjekket ut av deg.",
		inbasket_is_empty: "Innkurven er tom.",
		worklist_is_empty: "Arbeidslisten er tom.",
		tracker_milestone_completed: "Fullført",
		stepprocessor_attachments_title: "Innhold",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Lås elementer",
		unlock_items: "Lås opp elementer",
		checkin_item: "Sjekk inn element",

		/* Help */
		learn_more: "Les mer",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Åpne grupperom",
		repository_tab_createWorkspace: "Nytt grupperom",
		repository_tab_createWorkspaceTemplate: "Ny grupperommal",
		repository_tab_DefaultTemplate: "Standard",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Denne oppgaven kopierer dokumenter.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Du har ikke redigeringsrettigheter for den valgte grupperommalen.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Er du sikker på at du vil slette grupperommet ${0}? <br><br>Bare dokumenter som er lagret i andre mapper på datalageret, blir liggende på datalageret. Eventuelle dokumenter som bare er lagret i grupperommet, vil bli slettet.",
		teamspaceDecommissionLabel: "Slett:",
		teamspaceDecommissionDescription: "Hvis du sletter grupperommet, blir dette grupperommet fjernet fra serveren: Velg hvordan grupperomartefaktene skal håndteres.",
		teamspaceDecommissionOptions: "Alternativer for sletting av grupperom",
		teamspaceDecommissionDeleteAll: "Slett alle grupperomartefakter",
		teamspaceDecommissionReFileAll: "Arkiver alle grupperomartefakter",
		teamspaceDecommissionReFileDestination: "Flytt til:",
		teamspaceDecommissionReFileIn: "Arkiver i",
		teamspaceDecommissionTaskName: "Oppgave for sletting av grupperom",
		teamspaceDecommissionTaskDescription: "Denne oppgaven sletter et grupperom fra datalageret",
		teamspaceDecommissionDeletionStarted: "Grupperommet er planlagt slettet",
		teamspaceDecommissionDeletionConnectionFailed: "Oppgaven med å slette et grupperom kunne ikke kjøres fordi den kunne ikke koble til datalageret. Kontroller at legitimasjonen til administratoren for datalageret er riktig.",

		teamspace_edit_properties_notsupported: "Du kan redigere egenskapene for grupperom bare fra Grupperom-visningen.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Grupperommet er frakoblet og kan bare åpnes av eiere av grupperommet",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Mappe:",
		workspace_validation_ets: "Følgende oppføringsmaler er ikke tilgjengelige i dette datalageret og ble fjernet fra listen over valgte oppføringsmaler:",
		workspace_validation_classes: "Følgende klasser er ikke tilgjengelige i dette datalageret og ble fjernet fra listen over valgte klasser:",
		workspace_validation_searches: "Følgende søk er ikke tilgjengelige i dette datalageret og ble fjernet fra listen over valgte søk:",
		workspace_validation_docs_folders: "Følgende dokumenter er ikke tilgjengelige i dette datalageret og ble fjernet fra listen over valgte dokumenter:",
		workspace_change_template_confirmation_question: "Hvis du velger en annen mal, mister du alle endringene. Vil du fortsette?\n",
		workspace_delete_item_confirmation_question: "Vil du fjerne elementet ${0}?\n",
		workspace_delete_role_confirmation_question: "Vil du fjerne rollen ${0}?\n",
		workspace_delete_confirmation_question: "Hvis du sletter et grupperom, blir bare grupperomcontaineren slettet. Mappene og dokumentene i grupperommet blir liggende på datalageret, og du kan finne dem ved å utføre et søk. Hvis du vil slette innholdet i grupperommet, må du slette elementene i grupperommet først og deretter slette grupperommet.<br><br>Vil du slette grupperommet ${0}?",
		workspacebuilder_instance_template_name_header: "Navn på grupperommal",
		workspacebuilder_instance_template_description_header: "Beskrivelse",

		workspacebuilder_template_tooltip_name: "Malnavnet kan ikke inneholde noen av følgende tegn: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Grupperomnavnet kan ikke inneholde noen av følgende tegn: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Oppgi en beskrivelse som vil gjøre det mulig for brukerne å velge riktig mal fra listen over maler. Du kan for eksempel ta med informasjon om målbrukere eller bruksområder for malen.",
		workspacebuilder_instance_tooltip_description: "Oppgi en beskrivelse som vil gjøre det mulig for brukerne å skille dette grupperommet fra andre grupperom.",

		workspacebuilder_template_edit_properties_pane: "Rediger grupperommal",
		workspacebuilder_instance_properties_pane: "Definer grupperom",
		workspacebuilder_template_properties_pane: "Definer grupperommal",

		workspacebuilder_instance_security_pane: "Definer grupperomsikkerhet",
		workspacebuilder_template_security_pane: "Definer malsikkerhet",

		workspacebuilder_layout_pane: "Velg layout",
		workspacebuilder_search_templates_pane: "Velg søk",
		workspacebuilder_document_folders_pane: "Inkluder mapper og dokumenter",
		workspacebuilder_doctypes_entryTemplates_pane: "Velg klasser eller oppføringsmaler",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Velg klasser",
		workspacebuilder_security: "Grupperomsikkerhet",

		workspacebuilder_roles_pane: "Velg roller",
		workspacebuilder_security: "Sikkerhet",

		workspacebuilder_properties_templates: "Tilgjengelige maler:",
		workspacebuilder_available_templates: "Tilgjengelige søk:",
		workspacebuilder_selected_templates: "Valgte søk:",
		workspacebuilder_templates_name: "Søkenavn",

		workspacebuilder_available_entryTemplates: "Tilgjengelige oppføringsmaler:",
		workspacebuilder_selected_entryTemplates: "Valgte oppføringsmaler:",

		workspacebuilder_item_classes: "Tilgjengelige klasser:",
		workspacebuilder_item_classes_selected: "Valgte klasser:",
		workspacebuilder_properties_select_template: "Velg mal som skal brukes for dette grupperommet.",
		workspacebuilder_template_properties: "Definer grupperommal",
		workspacebuilder_instance_properties: "Definer grupperom",
		workspacebuilder_template_introText: "Oppgi de felleskomponentene du vil inkludere i alle grupperom som blir opprettet fra denne malen, ved å bruke valgene i navigeringen. Når du er ferdig, klikker du på Fullfør for å gjøre malen tilgjengelig for andre brukere, som kan bruke den til å opprette nye grupperom.",
		workspacebuilder_instance_introText: "Grupper bruker grupperom til å dele og arbeide med bestemte sett med dokumenter. Oppgi et meningsfylt navn og en beskrivelse for dette grupperommet slik at brukerne kan skille dette grupperommet fra andre grupperom. Du kan tilpasse grupperommet ved å legge til flere søk, klasser eller oppføringsmaler, dokumenter og mapper.",

		workspacebuilder_template_search_template_introText: "Velg standardsøkene du vil inkludere i alle grupperom som blir opprettet fra denne malen. Hvis ingen søk er valgt, ser grupperombrukerne alle søk de har tillatelse til å bruke. Hvis brukerne har de nødvendige tillatelsene, kan de dele og legge til søk i grupperommet.",
		workspacebuilder_instance_search_template_introText: "Inkluder søk som gjør det mulig for grupperombrukere å fullføre oppgaver mer effektivt. Hvis ingen søk er inkludert, ser grupperombrukerne alle søk de har tillatelse til å bruke. Brukerne kan også legge til delte søk i grupperommet hvis de har nødvendige tillatelser.",

		workspacebuilder_template_roles_introText: "Grupperombrukere blir tilordnet roller. Roller oppgir hvilke oppgaver brukerne har tillatelse til å utføre. Klikk på ikonet ved siden av hver rolle hvis du vil se de tillatte oppgavene. Velg rollene som passer for grupperommet.",
		workspacebuilder_template_roles_modify_introText: "Du kan endre tillatelsene som er tilknyttet de enkelte rollene i dette grupperommet. Du bør varsle grupperommedlemmer når tillatelsene deres blir endret.",

		workspacebuilder_template_roles_header_name: "Rollenavn",

		workspacebuilder_template_folders_introText: "Velg standarddokumenter og -mapper som skal inkluderes i alle grupperom som blir opprettet fra denne malen. Du kan sende dokumenter som linker eller kopier. Bruk linker hvis du vil peke til dokumenter du ikke vil ha flere kopier av, som policyer og prosedyrer. Opprett kopier av dokumenter som brukerne kan endre, som maler og skjemaer.",
		workspacebuilder_instance_folders_introText: "Velg standarddokumenter og -mapper som skal inkluderes i grupperommet. Du kan sende dokumenter som linker eller kopier. Bruk linker hvis du vil peke til dokumenter du ikke vil ha flere kopier av, som policyer og prosedyrer. Opprett kopier av dokumenter som brukerne kan endre, som maler og skjemaer.",

		workspacebuilder_template_roles_introText: "Oppgi rollene som skal inkluderes i alle grupperom som blir opprettet fra denne malen. Du kan også opprette nye roller som du kan bruke når du oppretter andre grupperommaler.",
		workspacebuilder_instance_users_introText: "I et grupperom blir hver bruker tildelt én eller flere roller som oppgir hvilke oppgaver brukeren kan utføre. Legg til brukere i grupperommet, og tildel roller til brukerne.",

		workspacebuilder_instance_navigation_pane_title: "Grupperombygger",
		workspacebuilder_template_navigation_pane_title: "Grupperommalbygger",

		workspacebuilder_roles_roles_nopermissions: "Det er ikke valgt noen tillatelser for rollen {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Valgte roller:",
		workspacebuilder_roles_available_roles: "Tilgjengelige roller:",
		workspacebuilder_roles_privilege_header: "Tillatelse",
		workspacebuilder_roles_select_role: "Velg rolle",
		workspacebuilder_roles_select_permission: "Velg tillatelse",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Rollen {0} finnes allerede. Du må oppgi et unikt navn på rollen. ",
		workspacebuilder_roles_edit_dialog_role_name: "Rollenavn:",
		workspacebuilder_roles_edit_dialog_role_description: "Rollebeskrivelse:",
		workspacebuilder_roles_edit_dialog_title_new: "Ny rolle",
		workspacebuilder_roles_edit_dialog_title_edit: "Rediger rolle",

		workspacebuilder_roles_privileges_header: "Tillatelser for rollen {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dokumenttillatelser:",
		workspacebuilder_roles_priv_group_folder: "Mappetillatelser:",
		workspacebuilder_roles_priv_group_teamspace: "Grupperomtillatelser:",
		workspacebuilder_roles_priv_group_item: "Dokument- og mappetillatelser:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Administrer tillatelser",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Brukere med denne tillatelsen kan administrere tilgang til dokumenter og mapper i grupperommet. Denne tillatelsen omfatter å tillate at andre brukere sletter, redigerer egenskaper og oppretter undermapper.",

		workspacebuilder_roles_priv_deleteItems: "Slett",
		workspacebuilder_roles_plbl_deleteItems: "Brukere med denne tillatelsen kan slette dokumenter og mapper i grupperommet.",

		workspacebuilder_roles_priv_createItems: "Opprett",
		workspacebuilder_roles_plbl_createItems: "Brukere med denne tillatelsen kan opprette dokumenter og mapper i grupperommet.",

		workspacebuilder_roles_priv_viewItemProperties: "Vis egenskaper",
		workspacebuilder_roles_plbl_viewItemProperties: "Brukere med denne tillatelsen kan vise egenskapene for dokumentene og mappene i grupperommet, som inkluderer systemegenskapene.",

		workspacebuilder_roles_priv_modifyItemProperties: "Rediger egenskaper",
		workspacebuilder_roles_plbl_modifyItemProperties: "Brukere med denne tillatelsen kan redigere egenskapene for dokumenter og mapper i grupperommet.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Administrer mappetillatelser",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Brukere med denne tillatelsen kan administrere tilgang til mapper i grupperommet. Denne tillatelsen omfatter å tillate at andre brukere sletter mapper, redigerer mappeegenskaper, oppretter undermapper osv.",

		workspacebuilder_roles_priv_deleteFolders: "Slett mapper",
		workspacebuilder_roles_plbl_deleteFolders: "Brukere med denne tillatelsen kan slette mapper i grupperommet.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Rediger mappeegenskaper",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Brukere med denne tillatelsen kan redigere egenskapene for mapper i grupperommet.",

		workspacebuilder_roles_priv_createSubfolders: "Opprett undermapper",
		workspacebuilder_roles_plbl_createSubfolders: "Brukere med denne tillatelsen kan opprette mapper i grupperommet.",

		workspacebuilder_roles_priv_fileInFolders: "Legg til i mapper",
		workspacebuilder_roles_plbl_fileInFolders: "Brukere med denne tillatelsen kan legge til en link fra mapper i grupperommet i dokumenter.",

		workspacebuilder_roles_priv_viewFolderProperties: "Vis mappeegenskaper",
		workspacebuilder_roles_plbl_viewFolderProperties: "Brukere med denne tillatelsen kan vise egenskapene for mappene i grupperommet, som inkluderer systemegenskapene.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Administrer dokumenttillatelser",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Brukere med denne tillatelsen kan administrere tilgang til dokumenter i grupperommet. Denne tillatelsen omfatter å tillate at andre brukere sletter dokumenter, redigerer dokumentegenskaper osv.",

		workspacebuilder_roles_priv_deleteDocuments: "Slett dokumenter",
		workspacebuilder_roles_plbl_deleteDocuments: "Brukere med denne tillatelsen kan slette dokumenter i grupperommet.",

		workspacebuilder_roles_priv_promoteVersions: "Oppgrader versjoner",
		workspacebuilder_roles_plbl_promoteVersions: "Brukere med denne tillatelsen kan tildele et nytt versjonsnummer til dokumenter i grupperommet.",

		workspacebuilder_roles_priv_modifyContent: "Rediger dokumenter",
		workspacebuilder_roles_plbl_modifyContent: "Brukere med denne tillatelsen kan redigere innholdet i dokumenter i grupperommet.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Rediger dokumentegenskaper",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Brukere med denne tillatelsen kan redigere egenskapene for dokumenter i grupperommet.",

		workspacebuilder_roles_priv_viewContent: "Vis dokumenter",
		workspacebuilder_roles_plbl_viewContent: "Brukere med denne tillatelsen kan vise dokumenter i grupperommet.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Vis dokumentegenskaper",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Brukere med denne tillatelsen kan vise egenskapene for dokumentene i grupperommet, som inkluderer systemegenskapene.",

		workspacebuilder_roles_priv_addNewSearches: "Legg til søk",
		workspacebuilder_roles_plbl_addNewSearches: "Brukere med denne tillatelsen kan legge til søk i grupperommet. Som standard er søk ikke tilgjengelig for andre brukere.",

		workspacebuilder_roles_priv_createNewSearches: "Opprett søk",
		workspacebuilder_roles_plbl_createNewSearches: "Brukere med denne tillatelsen kan opprette nye søk, men kan ikke lagre søkene. Hvis brukere ikke har denne tillatelsen, kan de ikke legge dokumenter som allerede finnes i datalageret, inn i grupperommet.",

		workspacebuilder_roles_priv_shareSearches: "Del søk",
		workspacebuilder_roles_plbl_shareSearches: "Brukere med denne tillatelsen kan dele søk de oppretter, med andre brukere i grupperommet.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Administrer klasser eller oppføringsmaler",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Brukere med denne tillatelsen kan legge til og fjerne klasser eller oppføringsmaler fra grupperommet.",

		workspacebuilder_roles_priv_addRemoveClasses: "Administrer klasser",
		workspacebuilder_roles_plbl_addRemoveClasses: "Brukere med denne tillatelsen kan legge til og fjerne klasser fra grupperommet.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Administrer grupperombrukere",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Brukere med denne tillatelsen kan legge til og fjerne brukere og grupper fra grupperommet. De kan dessuten administrere hvilke roller brukerne tildeles.",

		workspacebuilder_roles_priv_modifyRoles: "Endre roller",
		workspacebuilder_roles_plbl_modifyRoles: "Eiere med denne tillatelsen kan endre rolletillatelser for grupperommet. Denne tillatelsen er bare tilgjengelig for eiere.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Velg brukere",
		workspacebuilder_users_add_users_and_groups_button: "Legg til brukere og grupper...",
		workspacebuilder_users_users_or_group_header: "Bruker og gruppe",
		workspacebuilder_users_roles_header: "Roller",

		workspacebuilder_users_role_header: "Rolle",
		workspacebuilder_users_role_no_permissions: "Denne rollen har ingen tillatelser",
		workspacebuilder_users_available_roles_label: "Tilgjengelige roller:",
		workspacebuilder_users_selected_users_and_groups_label: "Valgte brukere og grupper:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Grupperommet kan ikke lagres. Du må oppgi minst en eier for dette grupperommet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Grupperommet kan ikke lagres. Alle brukere må tildeles en rolle.",
		// end of select users

		workspacebuilder_search_templates: "Velg søk",
		workspacebuilder_search_add: "Legg til søk",
		workspacebuilder_properties_workspaceName: "Grupperomnavn:",
		workspacebuilder_properties_templateName: "Malnavn:",
		workspacebuilder_properties_workspaceDescription: "Grupperombeskrivelse:",
		workspacebuilder_properties_templateDescription: "Malbeskrivelse:",
		workspacebuilder_properties_workspaceTemplate: "Valgt mal:",
		workspacebuilder_properties_security: "Del mal med:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Flytt fra grupperom:",
		moveTeamspaceDocuments_security: "Del dokument med:",
		moveTeamspaceDocuments_security_change: "Oppgi tilpasset sikkerhet for de valgte elementene",
		moveTeamspaceDocuments_item_type_level: "Du kan ikke velge å overstyre sikkerheten for de valgte elementene fordi klassen for det valgte elementet er konfigurert for å bruke bare sikkerhet på klassenivå",
		moveTeamspaceDocuments_security_inherit: "Arv sikkerhet fra målmappe",
		moveTeamspaceDocuments_file_info_text: "Du kan flytte elementer fra ett grupperom til et annet eller til en mappe.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Du har ikke de nødvendige tillatelsene til å flytte elementene til den valgte mappen.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Du har ikke de nødvendige tillatelsene til å flytte elementene fra grupperommet.",
		moveTeamspaceDocuments_move_mixed_items: "Du kan ikke overstyre sikkerheten for de valgte elementene. Noen av elementene er ikke styrt av grupperommet. Du kan overstyre sikkerheten bare for elementer som styres av grupperommet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Du må oppgi et navn på grupperommet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Du må oppgi et navn på grupperommalen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Grupperomnavnet kan ikke inneholde noen av følgende tegn: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Malnavnet kan ikke inneholde noen av følgende tegn: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link til dokument",
		workspacebuilder_folders_makeDocCopy: "Kopier dokument",
		workspacebuilder_folders_newfolder: "Ny mappe",
		workspacebuilder_folders_local_drive: "Fra lokal katalog",
		workspacebuilder_folders_from_repo: "Fra datalager",
		workspacebuilder_folders_add_doc: "Legg til dokument",
		workspacebuilder_folders_grid_name: "Navn",
		workspacebuilder_folders_props: "Egenskaper",
		workspacebuilder_folders_remove: "Fjern",
		workspacebuilder_folders_delete: "Slett",
		workspacebuilder_folders_adddoc_local: "Legg til dokument fra lokal stasjon",
		workspacebuilder_folders_adddoc_repo: "Legg til dokument fra datalager",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Det oppgitte mappenavnet på sperring finnes allerede. Oppgi et annet mappenavn.",

		workspacebuilder_classes_title: "Velg klasser eller oppføringsmaler",
		workspacebuilder_classes_title_cm: "Velg klasser",
		workspacebuilder_classes_template_introText: "Oppgi om grupperommene som opprettes fra denne malen, skal bruke klasser eller oppføringsmaler for å legge til dokumenter i datalageret. Hvis ingen klasser er valgt, ser grupperom alle klasser de har tillatelse til å bruke.  Brukerne kan endre listen over klasser eller oppføringsmaler i grupperommet hvis de har de nødvendige tillatelsene.",
		workspacebuilder_classes_template_introText_cm: "Velg klassene som brukerne kan bruke når de legger til dokumenter i datalageret. Hvis ingen klasser er valgt, ser grupperombrukerne alle klasser som de har tilgang til. Brukerne kan endre listen over klasser i grupperommet hvis de har de nødvendige tillatelsene.",
		workspacebuilder_classes_instance_introText: "Velg klassene eller oppføringsmalene som brukerne kan bruke når de legger til dokumenter i datalageret. Hvis ingen klasser er valgt, ser grupperombrukerne alle klasser de har tillatelse til å bruke. Brukerne kan endre listen over klasser eller oppføringsmaler i grupperommet hvis de har de nødvendige tillatelsene.",
		workspacebuilder_classes_instance_introText_cm: "Velg klassene som brukerne kan bruke når de legger til dokumenter i datalageret. Hvis ingen klasser er valgt, ser grupperombrukerne alle klasser de har tillatelse til å bruke. Brukerne kan endre listen over klasser i grupperommet hvis de har de nødvendige tillatelsene.",
		workspacebuilder_classes_selection: "Velg klasser:",
		workspacebuilder_classes_list: "Tilgjengelige klasser:",
		workspacebuilder_classes_columns_default: "Standard",
		workspacebuilder_classes_columns_className: "Klassenavn",
		workspacebuilder_classes_type_classes: "Legg til dokumenter ved hjelp av klasser",
		workspacebuilder_classes_type_classes_tooltip: "Klasser inkluderer tilknyttede egenskaper slik at dokumenter kan finnes igjen for senere bruk.",
		workspacebuilder_classes_type_entryTemplates: "Legg til dokumenter ved hjelp av oppføringsmaler",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Oppføringsmaler sikrer at informasjonen som blir oppgitt for hvert dokument, er ensartet og bruker forhåndsdefinerte verdier.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Navn på oppføringsmal",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Beskrivelse",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Du må legge til minst en oppføringsmal i grupperommet.",

		workspacebuilder_classes_new: "Ny klasse",
		workspacebuilder_classes_add: "Legg til klasse",
		workspacebuilder_entryTemplate_add: "Legg til oppføringsmal",
		workspacebuilder_add_list: "Legg til",
		workspacebuilder_makeDefault_list: "Gjør til standard",
		workspacebuilder_removeDefault_list: "Fjern standard",

		workspacebuilder_roles_title: "Velg roller",
		workspacebuilder_roles_title_modify: "Endre roller",

		workspacebuilder_selection_moveup: "Flytt opp",
		workspacebuilder_selection_movedown: "Flytt ned",
		workspacebuilder_selection_remove: "Fjern",
		workspacebuilder_selection_add: "Legg til",
		workspacebuilder_selection_create_new_search: "Nytt søk...",
		workspacebuilder_selection_create_new_role: "Ny rolle...",
		workspacebuilder_selection_make_role_available: "Gjør tilgjengelig",
		workspacebuilder_selection_make_role_available_tooltip: "Deler den valgte rollen med andre maler. Du må tildele minst én tillatelse til rollen for å kunne dele den.",

		workspacebuilder_navigation_next: "Neste",
		workspacebuilder_navigation_finish: "Fullfør",
		workspacebuilder_navigation_validate: "Valider",
		workspacebuilder_navigation_previous: "Forrige",
		workspacebuilder_navigation_cancel: "Avbryt",
		workspacebuilder_navigation_customize: "Tilpass",

		workspacebuilder_search_dialog_title: "Søk",
		workspacebuilder_dialog_close: "Lukk",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Maltilgjengelighet:",
		workspace_properties_templateState_tooltip: "Gjør malen utilgjengelig for å forhindre at brukere oppretter grupperom som bruker denne malen.",
		workspace_properties_dialog_title: "Malegenskaper",
		workspace_properties_online_radio_option_label: "Gjør tilgjengelig",
		workspace_properties_offline_radio_option_label: "Gjør utilgjengelig",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Vil du avbryte uten å lagre endringene?",
		workspacebuilder_cancel_confirmation_button: "Ja",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Eventuelle ugyldige elementer vil bli fjernet fra malen, og malen blir gjort tilgjengelig for brukere.  Vil du validere denne grupperommalen?",
		workspacebuilder_validate_confirmation_button: "Ja",
		workspacebuilder_validate_confirmation_title: "Valider",

		/* Entry templates builder */
		entry_templates: "Oppføringsmalstyrer",
		no_entry_templates_were_found: "Det finnes ingen oppføringsmaler",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Roller:",

		/* User Group picker widget */
		directory_label: "Katalog:",
		scope_label: "Søk etter:",
		name_starts_with_label: "Navnet begynner med",
		name_contains_label: "Navnet inneholder",
		display_name_contains_label: "Visningsnavn inneholder",
		starts_with_label: "Begynner med:",
		available_label: "Tilgjengelig:",
		available_heading: "Tilgjengelig",
		selected_label: "Valgt:",
		selected_heading: "Valgt",
		available_repositories_label: "Tilgjengelige datalagre",
		selected_repositories_label: "Valgte datalagre",
		default_repository: "Standard datalager:",
		default_repository_placeholder: "Velg et datalager",
		default_role_placeholder: "Velg en rolle",
		menu_label_placeholder: "Velg eller oppgi en etikett",
		default_repository_hover: "Oppgi datalageret som er valgt som standard når brukerne logger seg på webklienten fra dette skrivebordet.<br><br><b>Viktig:</b> Du må legge til datalagre på listen over valgte datalagre for skrivebordet før du kan oppgi standard datalager.",
		default_repository_workflow_hover: "<b>Husk:</b> Du kan bare konfigurere applikasjonsområdene for datalagrene som er konfigurert for dette skrivebordet.",
		remove_label: "Fjern",
		users_label: "Brukere",
		groups_label: "Grupper",
		user_or_group_name_label: "Navn på bruker eller gruppe:",
		user_or_group_name_hover: "Oppgi navnet på en bruker eller gruppe som er gyldig på datalageret.  Navnet blir ikke validert.",
		user: "Bruker",
		group: "Gruppe",
		name: "Navn:",
		displayName: "Visningsnavn",
		display_name: "Visningsnavn:",
		shortName: "Kort navn:",
		distinguishedName: "Unikt navn:",
		search_tooltip: "Søk",
		add_tooltip: "Legg til",
		add_selected_tooltip: "Legg til på den valgte listen",
		remove_tooltip: "Fjern",
		remove_selected_tooltip: "Fjern fra den valgte listen",
		add_to_selected_tooltip: "Legg til",
		remove_from_selected_tooltip: "Fjern",
		move_up_selected_tooltip: "Flytt opp",
		move_down_selected_tooltip: "Flytt ned",
		advanced_search_options_tooltip: "Avanserte innstillinger",
		move_right_selected_tooltip: "Flytt til undermeny",
		move_left_selected_tooltip: "Flytt fra undermeny",
		add_separator: "Legg til skilletegn",
		menu_item_label: "Menypunktetikett:",
		add_menu_label: "Legg til undermeny",
		menu_label: "Undermenyetikett:",
		menu_label_info: "<b>Viktig:</b> du må legge til minst ett menypunkt på denne undermenyen før du kan lagre denne menyen.",
		menu_dropdown_label: "Etikett for valglisteknapp:",
		menu_dropdown_label_info: "<b>Viktig:</b> Du må legge til minst ett menypunkt for denne valglisteknappen før du kan lagre denne verktøylinjen.",
		no_item_found: "Ingen resultater ble funnet.",
		me: "Meg",
		anyone: "Hvem som helst",
		specific_users: "Bestemte brukere",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Søket returnerte mer enn {0} resultater. Endre kriteriene for å begrense søket.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Søkeresultatene inneholder elementer som allerede er valgt. Disse elementene vil ikke bli vist i søkeresultatene.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Mer enn {0} resultater ble returnert. Bruk filteret hvis du vil begrense resultatene",

		user_already_selected: "Den oppgitte brukeren er allerede valgt.  Oppgi en annen bruker.",
		group_already_selected: "Den oppgitte gruppen er allerede valgt.  Oppgi en annen gruppe.",
		user_cannot_select_self: "Du kan ikke legge til deg selv. Oppgi en annen bruker.",

		/* Select User Group dialog */
		select_user_group_add_label: "Legg til",
		select_user_group_cancel_label: "Avbryt",
		add_users_groups_label: "Legg til brukere og grupper",
		add_user_group_label: "Legg til bruker og gruppe",
		add_users_label: "Legg til brukere",
		add_user_label: "Legg til bruker",
		add_label: "Legg til:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Følgende dokumenter har ulagrede annotasjonsendringer:",
		viewer_confirm_to_proceed: "Vil du fortsette og miste endringene?",
		viewer_warn_has_changes: "Endringer som ikke er lagret, blir fjernet.",
		viewer_warn_is_printing: "Utskrift som pågår blir kanskje ikke fullført.",
		viewer_warn_confirm_exit: "Vil du avslutte?",
		viewer_prompt_save_changes: "Følgende dokument har ulagrede annotasjonsendringer som vil gå tapt:<br>${0}<br><br>Vil du lagre endringene?",
		viewer_prompt_mergesplit_changes: "Følgende dokumenter har ulagrede endringer:<br>${0}<br><br>Vil du fortsette og miste endringene?",
		viewer_prompt_mergesplit_tab_changes: "Følgende dokument har ulagrede endringer:<br>${0}<br><br>Vil du fortsette og miste endringene?",
		viewer_new_item_name: "Nytt dokument",
		viewer_top_frame: "Øvre ramme:",
		viewer_bottom_frame: "Nedre ramme:",
		viewer_left_frame: "Venstre ramme:",
		viewer_right_frame: "Høyre ramme:",
		viewer_viewer_frame: "Visningsramme:",
		viewer_properties_frame: "Egenskapsramme:",
		viewer_comment_frame: "Kommentarramme:",
		viewer_mergesplit_on: "Vis",
		viewer_mergesplit_off: "Slå sammen og del",
		viewer_mergesplit_context_menu_move: "Flytt",
		viewer_mergesplit_context_menu_rename: "Endre navn",
		viewer_mergesplit_context_menu_delete: "Slett",
		//move to new window
		viewer_move_to_new_window:"Flytt til nytt vindu",
		viewer_continue:"Fjern endringer",
		viewer_return_to_original_window:"Tilbake til opprinnelig vindu",
		viewer_switch_window:"Bytt vindu",
		viewer_prompt_lost_changes:"Dokumentet ${0} er i øyeblikket åpent i et annet vindu. Det dokumentet har endringer som ikke er lagret.<br><br>Vil du gå tilbake til det vinduet for å lagre endringene, eller vil du fjerne endringene og åpne det i dette vinduet?",
		viewer_mergesplit_fallback_info: "Du kan bare fullføre handlingen Slå sammen og del på dokumenter som ligger i samme datalager.",
		viewer_tabbed_layout: "Vis som flipper",
		viewer_tabbed_layout_highcontrast: "Flipper",
		viewer_split_vertical_layout: "Del ruter oppe og nede",
		viewer_split_vertical_layout_highcontrast: "Oppe og nede",
		viewer_split_horizontal_layout: "Del ruter venstre og høyre",
		viewer_split_horizontal_layout_highcontrast: "Venstre og høyre",
		viewer_add_vertical_layout: "Ny flipp nederst",
		viewer_add_vertical_layout_highcontrast: "Flipp nederst",
		viewer_add_horizontal_layout: "Ny flipp til høyre",
		viewer_add_horizontal_layout_highcontrast: "Flipp høyre",
		viewer_add_horizontal_layout_rtl: "Ny flipp til venstre",
		viewer_add_horizontal_layout_rtl_highcontrast: "Flipp venstre",
		viewer_split_properties_layout: "Egenskaper for utsnitt",
		viewer_split_comment_layout: "Vis kommentarer",
		viewer_split_notelog_layout: "Vis notatlogg",
		viewer_window_title: "${0} Visningsprogram",
		viewer_next_hit: "Vis neste dokument på listen",
		viewer_prev_hit: "Vis forrige dokument på listen",
		viewer_confrim_more_search_results: "Søkeresultatene inneholder ikke flere dokumenter som kan vises.  Vil du hente flere søkeresultater?",
		viewer_confirm_get_next_page: "Listen over resultater inneholder ikke flere elementer som kan vises.  Vil du hente flere søkeresultater?",
		viewer_confirm_get_next_item: "Listen over resultater inneholder flere elementer som kan vises.  Vil du vise det neste elementet?",
		viewer_fn_annotation_tooltip: " Opprettet av: ${0},  Opprettet: ${1}",
		viewer_box_note_limitation: "Du kan bare åpne og vise Box-notater i et eget vindu.",
		viewer_click_to_open_box_note: "Klikk her for å åpne Box-notatet.",
		viewer_box_view_expiring: "Du kan vise Box-dokumentet i opptil 60 minutter. Din gjeldende sesjon utløper om ${0} minutter. Hvis du vil fortsette å arbeide med dokumentet, må du laste det inn på nytt nå. Vil du laste inn dokumentet på nytt?",
		viewer_add_dialog_save_as_type: "Lagre som type:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Utsjekkingskonflikt",
		viewer_checkout_conflict: "Dokumentet er sjekket ut av en annen bruker.",
		viewer_checkout_confirm: "En nyere versjon av dokumentet er tilgjengelig. Vil du fortsette å sjekke ut dokumentet, eller vil du laste inn visningsprogrammet på nytt med den nyere versjonen? Hvis du velger å laste inn visningsprogrammet på nytt, mister du eventuelle ulagrede endringer.",
		viewer_checkout_continue: "Fortsett med utsjekkingen",
		viewer_checkout_reload: "Last inn på nytt",
		viewer_status_building: "Bygger dokument...",
		viewer_status_adding: "Legger til dokument...",
		viewer_status_checking_in: "Sjekker inn dokument...",

		/* Class Selector Widget */
		include_subclasses_label: "Inkluder subklasser",
		include_subclasses_label2: "Søk også i subklasser",
		include_subclasses_note: "(Inkludert subklasser)",
		available_classes_col_header: "Tilgjengelige klasser",
		single_class_label: "Søk i en enkelt klasse",
		multiple_classes_label: "Søk i flere klasser",
		multiple_classes_hover_help: "Velg dette alternativet for å søke i mer enn en klasse. Klassene kan være overordnede klasser eller subklasser. Hvis du velger dette alternativet, får du bare se egenskapene og verdiene som er felles for de valgte klassene.",
		selected_classes_col_header: "Valgte klasser",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Inkludert undermapper)",
		favorites_pseudo_node: "\\Favoritter\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Du må velge en mappe i datalageret som dokumentet skal legges til i.",
		no_permission_add_folder: "Du har ikke de nødvendige tillatelsene til å legge til mapper i denne mappen.",
		no_permission_add_document: "Du har ikke de nødvendige tillatelsene til å legge til dokumenter i denne mappen.",
		document_already_in_folder: "Dokumentet finnes allerede i denne mappen.",
		cant_move_folder_onto_parent: "Mappen finnes allerede i denne mappen.",
		cant_move_folder_onto_self: "Du kan ikke flytte en mappe til mappen selv eller til mappens undermapper.",

		/* Workflow Widgets */
		process_application_space: "Behandle applikasjonsområde",
		process_role: "Behandle rolle",
		process_inbasket: "Behandle innkurv",
		process_worklist: "Arbeidsliste",
		process_step_processor: "Behandle arbeidselement",
		process_tracker: "Spor arbeidselement",
		process_info_subject: "Emne",
		process_info_stepname: "Trinn",
		process_info_is_locked: "Låst",
		process_info_no_access: "Ingen tilgang",
		process_info_received_on: "Mottatt",
		process_info_overdue: "Forfalt",
		process_info_reminder_sent: "Påminnelse sendt",
		process_info_locked_by_user: "Låst av",
		process_work_object_number: "Arbeidsobjektnummer",
		process_deadline: "Forfallsdato:",
		process_launchedby: "Startet av:",
		process_receivedon: "Mottatt:",
		process_step: "Trinn:",
		process_properties: "Egenskaper",
		process_attachments: "Vedlegg",
		process_attachments_select: "Velg et vedlegg",
		process_finish_button_label: "Stopp sporing",
		process_tracker_history: "Historikk",
		process_tracker_milestones: "Milepæler",
		process_tracker_milestone: "Milepæl",
		process_tracker_milestone_level: "Nivå",
		process_tracker_milestones_empty: "Det er ingen flere milepæler å vise.",
		process_tracker_level_selector_label: "Vis milepælnivåer opp til:",
		process_tracker_map_selector_label: "Filtrer etter tilordning:",
		process_tracker_message: "Melding",
		process_tracker_datereached: "Dato nådd",
		process_tracker_stepname: "Trinn",
		process_tracker_cycle: "Syklus",
		process_tracker_review_cycle: "Korrektursyklus",
		process_tracker_participant: "Deltaker",
		process_tracker_completed: "Fullført",
		process_tracker_response: "Svar",
		process_tracker_comments: "Kommentarer",
		process_tracker_delete_confirmation: "Vil du stoppe sporing av følgende arbeidsflyt: ${0}?",
		process_tracker_history_allmaps: "Alle kart",
		process_tracker_history_workflow: "Arbeidsflyt",
		process_tracker_history_terminate: "Avslutt",
		process_tracker_history_malfunction: "Funksjonsfeilkart",
		process_filter_label: "Filter",
		process_no_filter_summary: "Ingen filtre brukt",
		process_filter_summary: "${0} brukt",
		process_filter_reset_tooltip: "Tilbakestilling tømmer filteret og oppdaterer innkurven.",
		process_attachments_add_folder: "Legg til mappe",
		process_attachments_add_doc: "Legg til dokument",
		process_complete_button_label: "Fullstendig",
		process_save_button_label: "Lagre",
		process_launch_button_label: "Start arbeidsflyt",
		process_open_button_label: "Åpne",
		process_movetoinbox_button_label: "Flytt til innkurv",
		process_return_button_label: "Tilbake",
		process_return_to_sender_tooltip: "Returner arbeidselementet til opprinnelig innkurv",
		process_move_to_inbasket_tooltip: "Flytt arbeidselementet til din personlige innkurv",
		process_reassign_tooltip: "Omtildel arbeidselementet til en annen eier",
		process_reassign_button_label: "Omtildel",
		process_preferences_button_label: "Innstillinger",
		process_manageroles_button_label: "Administrer roller",
		process_manageroles_no_members: "Det er ingen medlemmer.",
		process_responses_button_label: "Flere svar",
		process_morecustomaction_button_label: "Flere handlinger",
		process_show_instructions: "Vis instruksjoner",
		process_hide_instructions: "Skjul instruksjoner",
		process_remove_attachment: "Fjern",
		process_close_window: "Arbeidselementet ble behandlet.",
		process_delegate_flag: "Krev at gjeldende eier godkjenner arbeidselementet før det blir rutet til neste trinn i arbeidsflyten.",
		process_paticipant_voting: "Antall deltakere som kreves for stemmegodkjenning:",
		process_get_next_label: "Hent neste arbeidselement",
		process_no_more_items: "Det er ikke flere elementer å behandle i innkurven.",
		process_workflow_name: "Navn på arbeidsflyt:",
		process_pattern_process_name: "Gjennomgang for ${0}",
		process_instuctions: "Instruksjoner for godkjennere:",
		process_pattern_deadline: "Forfallsdato:",
		process_reviewers: "Godkjennere:",
		process_approvals_required: "Nødvendige godkjenninger:",
		process_on_reject: "Hvis arbeidselementet blir avvist:",
		process_return_to_originator: "Returner til meg",
		process_return_to_previous_reviewer: "Returner til forrige godkjenner",
		process_additional_settings: "Ekstra innstillinger:",
		process_allow_reassign: "Tillat godkjennere å omtildele denne gjennomgangen",
		process_complete_notification: "Varsle meg når gjennomgangen er fullført",
		process_workflow_name_hover_help: "Navnet du oppgir for arbeidselementet, bør gjøre det enkelt for godkjennerne å skille mellom dette arbeidselementet og andre arbeidselementer i innkurven deres.",
		process_approvals_required_hover_help: "Hvis arbeidselementet blir gjennomgått av flere personer samtidig, kan du oppgi hvor mange godkjennelser som kreves for at arbeidselementet skal være fullført.",
		process_approval_options: "Godkjenningsalternativer",
		process_all: "Alle",
		process_at_least: "Minst",
		process_at_least_by_count: "Minst ${0} godkjennere",
		process_at_least_by_percentage: "Minst ${0} % av godkjennere",
		process_comments: "Kommentarer:",
		process_review_step_comments_hover_help: "Hvis du avviser dette arbeidselementet, må du oppgi informasjon om hvorfor du avviste det. Denne informasjonen gjør det mulig for opphavspersonen for arbeidselementet eller den forrige godkjenneren å håndtere innsigelsene dine.",
		process_rework_step_comments_hover_help: "Du må oppgi informasjon om hvordan du håndterte kommentarene. Hvis du er uenig i kommentarene, må du gi en begrunnelse for beslutningen din.",
		process_rejection_reason: "Årsak til avvisning:",
		process_summary: "Sammendrag",
		process_sequential_review: "Sekvensiell gjennomgang",
		process_sequential_review_description: "Arbeidselementet vil bli gjennomgått av hver enkelt godkjenner i rekkefølge.",
		process_parallel_review: "Parallell gjennomgang",
		process_parallel_review_description: "Arbeidselementet vil bli gjennomgått av alle godkjennerne samtidig.",
		process_parallel_approvals_required_error: "Antall godkjennelser som kreves, er for høyt. Det er bare oppgitt ${0} godkjennere.",
		process_parallel_invalid_required_approvals_count: "Verdien er ikke gyldig. Verdien må være ${0}.",
		process_subject_prompt: "Oppgi emne",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Arbeidselement:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Vis egenskaper",
		view_permissions_level: "Vis tillatelser",
		view_content_level: "Vis dokument",
		link_level: "Link",
		modify_properties_level: "Rediger egenskaper",
		modify_content_level: "Rediger dokument",
		minor_version_level: "Rediger underversjon",
		major_version_level: "Rediger hovedversjon",
		create_instance_level: "Opprett forekomst",
		delete_document_level: "Slett dokument",
		delete_item_level: "Slett element",
		modify_document_permissions_level: "Administrer tillatelser",
		modify_folder_permissions_level: "Administrer tillatelser",
		modify_owner_level: "Endre eier",
		delete_folder_level: "Slett mappe",
		file_in_folder_level: "Legg til i mapper",
		create_subfolder_level: "Opprett undermapper",
		link_item_level: "Annoter dokument, Legg til i mappe", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Bare dokument: Legg til en annotasjon i dokumentet eller fjern en annotasjon fra dokumentet</li><li>Bare mappe: Legg til elementer i mappen eller fjern elementer fra mappen</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Slett",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Eier",
		/* previously \"Full control\" */
		edit_privilege: "Forfatter",
		/* previously \"Edit\" */
		read_only_privilege: "Leser",
		/* previously \"Read only\" */
		no_access_privilege: "Ingen tilgang",
		share_with_label: "Del med:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Bare meg",
		public_label: "Alle",
		members_label: "Bestemte brukere og grupper",
		select_members_label: "Velg...",
		select_user_group_label: "Velg brukere...",
		select_users_groups_label: "Velg brukere og grupper...",
		select_user_label: "Velg bruker...",
		propagation_label: "Spredning:",
		access_label: "Tillatelser:",
		add_permission_add_label: "Legg til",
		security_policy_label: "Sikkerhetspolicy:",
		includes_inherited_access: "Inkluderer arvet tilgang",
		customize_access_for_label: "Tilpass tilgang for:",
		customize: "Tilpass",
		direct: "Dette elementet",
		singleLevelInheritance: "Ett nivå",
		infiniteLevelInheritance: "Alle nivåer",
		inherited: "Arvet",
		direct_hover_help: "Sikkerhetsinnstillinger gjelder for det valgte elementet",
		singleLevelInheritance_hover_help: "Disse tillatelsene gjelder for dette elementet og de direkte underordnede som er konfigurert for å arve sikkerhet fra dette elementet.",
		infiniteLevelInheritance_hover_help: "Disse tillatelsene gjelder for dette elementet og alle underordnede som er konfigurert for å arve sikkerhet fra dette elementet.",
		inherited_hover_help: "Disse tillatelsene blir arvet fra den overordnede.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Disse tillatelsene for ${0} gjelder for dette elementet og de direkte underordnede som er konfigurert for å arve sikkerhet fra dette elementet.",
		infiniteLevelInheritance_member_hover_help: "Disse tillatelsene for ${0} gjelder for dette elementet og alle underordnede som er konfigurert for å arve sikkerhet fra dette elementet.",
		inherited_member_hover_help: "Disse tillatelsene for ${0} blir arvet fra den overordnede.",
		partial_hover_help: "Sikkerhetsinnstillinger for elementet ble endret av en bruker",
		allow: "Tillat",
		deny: "Avvis",
		basic: "Grunnleggende",
		advanced: "Avansert",
		permission_type: "Definer tilgang for:",
		share_with_hover_help: "Elementet er delt med følgende brukere og grupper.",
		direct_security_policy_hover_help: "Innstillingene for denne sikkerhetspolicyen tillater at du endrer sikkerheten for dette elementet.",
		security_policy_hover_help: "Sikkerheten til dette elementet er skrivebeskyttet fordi innstillingene for denne sikkerhetspolicyen forhindrer at du endrer sikkerheten for dette elementet.",
		security_remove: "Ingen tillatelser",
		pseudo_group_label: "Aliaskontoer",
		marking_hover_help: "Sikkerheten til dette elementet er kontrollert av et merkingssett, som kan påvirke sikkerheten til elementet.",
		note_label: "Viktig:",
		marking_text: "Dette elementet er merket som ${0}. Elementet kan ha ekstra sikkerhetsbegrensninger.",
		authenticated_users: "Autentiserte brukere",
		realm_users: "${0}-brukere",
		denyAll: "Avvis alle",
		allowAll: "Tillat alle",
		remove_direct_text: "Når du lagrer endringer, blir tillatelsene for dette medlemmet fjernet fra elementet.",
		remove_single_inheritance_text: "Når du lagrer endringer, blir tillatelsene for dette medlemmet fjernet fra elementet og fra <br>de direkte underordnede som er konfigurert for å arve sikkerhet fra elementet.<p>Vil du fortsette?",
		remove_infinite_inheritance_text: "Når du lagrer endringer, blir tillatelsene for dette medlemmet fjernet fra elementet og fra <br>alle underordnede som er konfigurert for å arve sikkerhet fra elementet.<p>Vil du fortsette?",
		remove_inheritance_text: "Når du lagrer endringer, blir tillatelsene for dette medlemmet fjernet fra elementet og fra <br>alle underordnede som er konfigurert for å arve sikkerhet fra elementet. Bare de tillatelsene som <br>er arvet av dette elementet vil bli beholdt.<p>Vil du fortsette?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Fjern disse tillatelsene for ${0}",

		security_proxy_text: "Sikkerheten til dette elementet er skrivebeskyttet.",
		security_proxy_declared_text: "Sikkerheten til dette elementet er skrivebeskyttet fordi det er definert av en sikkerhetsproxy.",
		security_proxy_hover_help: "Sikkerheten til dette elementet er kontrollert av sikkerheten som er definert for et annet objekt i datalageret.",
		add_permissions_label: "Legg til tillatelser",
		permission_propagation_direct: "Bare denne mappen",
		permission_propagation_onelevel: "Denne mappen og ett nivå under",
		permission_propagation_alllevels: "Denne mappen og alle nivåer under",
		document_propagation_label: "Definer tilgang for:",
		document_propagation_FOLDER: "Mappe",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Autentiseringskilde:",

		/* Versions Widget */
		object_versions_selector_label: "Versjoner:",
		object_versions_label: "Versjoner",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Mapper lagret i",
		folders_filed_in_folder_col_hdr: "Mappe",
		folders_filed_in_path_col_hdr: "Bane",
		folders_filed_in_containment_name_col_hdr: "Innesluttingsnavn",
		folders_filed_in_creator_col_hdr: "Opprettet av",
		folders_filed_in_date_created_col_hdr: "Opprettet den",

		/* Parent Documents */
		properties_parent_documents_label: "Overordnede dokumenter",

		/* Select object dialog */
		select_object_title: "Velg element",
		select_object_breadCrumb_version_prefix: "Versjoner for: ",
		show_versions_label: "Vis versjoner",
		use_current_version_label: "Bruk gjeldende versjon",
		use_released_version_label: "Bruk utgitt versjon",

		/* Select content class dialog */
		select_class: "Velg klasse",
		/* Select Search dialog */
		select_search: "Velg søk",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Vis link",
		show_hyperlink_intro: "Du kan kopiere og lime inn linken i e-postmeldinger, samtaler og websider. Hvis det finnes flere versjoner av elementet, oppgir du hvilken versjon du vil linke til.",
		show_hyperlink_intro_no_version_select: "Du kan kopiere og lime inn linken i e-postmeldinger, samtaler og websider.",
		show_text_label: "Versjon:",
		released_button_label: "Utgitt",
		current_button_label: "Gjeldende",
		select_button_label: "Bestemt versjon",
		show_hyperlink_no_released_version_msg: "Ingen utgitt versjon av dette dokumentet finnes.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Start arbeidsflyt",
		edit_workflow_title: "Egenskaper for arbeidselement",
		start_workflow_intro: "Start en arbeidsflyt for å behandle de valgte elementene. Hvis du vil tildele aktivitetsposter til en bestemt bruker, oppgir du en eier.",
		edit_workflow_intro: "Du kan redigere egenskapene for de valgte aktivitetspostene. Hvis du vil omtildele en aktivitetspost til en annen bruker, oppgir du en eier.",
		workflow_field_label: "Arbeidsflyt:",
		priority_field_label: "Prioritet:",
		owner_field_label: "Eier:",
		start_button_label: "Start",
		save_button_label: "Lagre",
		owner_value_hint: "Skriv inn en alfanumerisk streng med maksimalt 32 tegn. Strengen kan bare inneholde mellomrom eller følgende tegn: a-z, A-Z, 0-9 og ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Innholdselementer",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Verdien er ikke gyldig. Verdien kan bare inneholde mellomrom eller følgende tegn: a-z, A-Z, 0-9 og ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Oppgi en verdi fra 1 til 32000 for å angi hvor viktig arbeidselementet er.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Verdien er ikke gyldig. Prioriteten må være en verdi i området 1 til 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Arbeidsflytnavnet finnes ikke.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Stopp midlertidig i arbeidsflyt",
		suspend_workitems_intro: "Når du stopper et arbeidselement midlertidig i arbeidsflyten, kan ikke arbeidselementet behandles før det blir gjenopptatt",
		suspend_workitems_options_label: "Stopp valgte arbeidselementer midlertidig:",
		suspend_until_resume_label: "Til de gjenopptas manuelt",
		suspend_until_date_label: "Til",
		suspend_for_duration_label: "I",
		suspend_for_duration_hours: "Timer",
		suspend_for_duration_days: "Dager",
		suspend_for_duration_weeks: "Uker",
		suspend_for_duration_months: "Måneder",
		suspend_for_duration_years: "År",
		suspend_button_label: "Stopp midlertidig",
		suspend_duration_value_hint: "Oppgi en verdi i området 1 - 99 for varighet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Verdien er ikke gyldig. Verdien må være i området 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Fjern fra arbeidsflyt",
		remove_workflow_confirmation: "Vil du fjerne de valgte elementene fra arbeidsflyten?<br>${0} elementer er valgt.",
		remove_workflow_button_label: "Fjern",

		/* Unfile dialog */
		unfile_dialog_title: "Fjern fra mappe",
		unfile_dialog_remove_from_folder_label: "Fjern fra:",
		unfile_dialog_info_text: "Du kan fjerne elementer fra mapper. Men selv om du fjerner et element fra alle mappene, fjerner du ikke elementet fra datalageret. Du kan fortsatt hente elementet ved å utføre et søk. Bare mappene du har visningsrettigheter til, blir vist på denne listen.",
		unfile_dialog_select_all: "Velg alle",
		unfile_dialog_deselect_all: "Fjern alle",
		unfile_dialog_remove_button_label: "Fjern",
		unfile_dialog_select_folder_col_hdr: "Velg mappe",
		unfile_dialog_folder_col_hdr: "Mappe",
		unfile_dialog_path_col_hdr: "Bane",
		unfile_dialog_not_filed_msg: "Dette elementet finnes ikke i noen mappe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Du har ikke de nødvendige tillatelsene til å fjerne dette elementet fra noen av mappene som dette elementet finnes i.",
		unfile_dialog_folder_not_selectable_tooltip: "Du har ikke de nødvendige tillatelsene til å fjerne dette elementet fra denne mappen.",
		unfile_multi_prompt: "Vil du fjerne de valgte elementene fra mappen ${0}?",
		unfile_large_number_items_confirmation_question: "Du valgte ${0} elementer som skal fjernes fra mappen ${1}.<br/>Det kan ta lang tid å fjerne et stort antall elementer fra en mappe.<br/>Vil du fortsette?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Åpne",
		move_to_folder_title: "Flytt til mappe",
		move_to_folder_button_caption: "Flytt",
		move_to_folder_label: "Flytt til:",
		add_to_folder_title: "Legg til i mappe",
		add_to_folder_button_caption: "Legg til",
		add_to_folder_label: "Legg til i:",
		copy_to_folder_title: "Kopier til mappe",
		copy_to_folder_button_caption: "Kopier",
		copy_to_folder_label: "Kopier til:",
		copy_to_folder_delete_label: "Når kopieringen er ferdig, sletter du det eller de valgte elementene fra Box.",
		move_from_folder_label: "Flytt fra:",
		move_file_info_text: "Du kan flytte elementer fra en mappe til en annen.",
		move_folder_info_text: "Du kan flytte mapper fra en overordnet mappe til en annen.",
		add_doc_to_folder_info_text: "Du kan legge til elementer i én eller flere mapper. Hvis et element allerede finnes i en mappe, blir det beholdt i den mappen og blir lagt til i de andre mappene du oppgir.",
		copy_doc_to_folder_info_text: "Du kan kopiere elementer til en mappe.",
		box_copy: "Box-kopiering",
		box_copy__button_caption: "Kopier",
		box_copy_to_info_text: "Velg datalageret og mappen der du vil kopiere de valgte elementene fra Box.",
		box_copy_from_info_text: "Velg datalageret og mappen der du vil kopiere de valgte elementene fra Box.",
		box_copy_version_info_text: "Hvis du skal legge til et nytt dokument, velger du datalageret og mappen. Hvis du skal sjekke inn en ny versjon, velger du datalageret og dokumentet.",
		admin_box_copy: "Box-kopiering",
		admin_box_copy_hover: "Dette alternativet gjør det mulig for brukerne å kopiere dokumenter til Box.",

		no_permission_to_copy_version_msg: "Du kan ikke kopiere dokumentet fra Box som en ny versjon av det valgte dokumentet. Du har ikke de nødvendige tillatelsene til å redigere det valgte dokumentet, eller det valgte dokumentet er sjekket ut av en annen bruker.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Du har ikke de nødvendige tillatelsene til å fjerne dette elementet fra noen av mappene som dette elementet finnes i.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Du har ikke de nødvendige tillatelsene til å fjerne dette elementet fra denne mappen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Dette elementet kan ikke flyttes fordi det ikke er lagret i noen mappe. Velg et annet element.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Start arbeidsflyt",
		subscriptions_dialog_available_items_label: "Tilgjengelige elementer:",
		subscriptions_dialog_info_text: "Oppgi hvilken arbeidsflyt som skal startes.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Navn",
		subscriptions_dialog_desc_col_hdr: "Beskrivelse",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Administrer roller",
		manageroles_dialog_info_text: "Du kan endre listen over brukere for hver rolle som er tilknyttet dette prosessapplikasjonsområdet.",
		manageroles_dialog_members_label: "Medlemmer",
		manageroles_dialog_roles_label: "Roller",
		manageroles_dialog_add_button_label: "Legg til brukere og grupper",
		manageroles_dialog_remove_button_label: "Fjern",
		manageroles_dialog_save_button_label: "Lagre",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Ingen arbeidsflyter er knyttet til dette elementet.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Innstillinger for arbeidsflyt",
		workflow_pref_dialog_info_text: "Oppgi arbeidsflythendelsene som du ønsker å motta e-postvarsler for. Du kan også aktivere alternativet for å rute arbeidet ditt til en annen person ved å velge en bruker du vil delegere arbeid til.",

		workflow_pref_general: "Generelt",
		workflow_pref_email_address: "E-postadresse",
		workflow_pref_email_address_hover: "Oppgi e-postadressen der du vil motta arbeidsflytvarsling.",
		workflow_pref_preferred_locale: "Språk",
		workflow_pref_preferred_locale_hover: "Angir språket som e-postvarsler vises på.",

		workflow_pref_work_item_notice: "Varsler om arbeidselementer",
		workflow_pref_step_new_assignment: "Et nytt arbeidselement er tildelt til meg",
		workflow_pref_step_new_assignment_hover: "Varsle meg når jeg mottar et nytt arbeidselement.",
		workflow_pref_step_expired_deadline: "Tidsfrist for arbeidselement er passert",
		workflow_pref_step_expired_deadline_hover: "Varsle meg når jeg ikke holder tidsfristen for et arbeidselement.",
		workflow_pref_step_reminders: "Nær tidsfristen for et arbeidselement",
		workflow_pref_step_reminders_hover: "Minn meg på et arbeidselement når tidsfristen nærmer seg.",

		workflow_pref_originator_notice: "Varsler til opphavsperson",
		workflow_pref_milestone_reached: "Milepæl er nådd",
		workflow_pref_milestone_reached_hover: "Varsle meg når en milepæl er nådd i en arbeidsflyt som jeg startet.",

		workflow_pref_tracker_notice: "Varsler for arbeidsflytsporing",
		workflow_pref_tracker_new_assignment: "Et nytt sporingselement er tildelt til meg",
		workflow_pref_tracker_new_assignment_hover: "Varsle meg når en arbeidsflyt jeg sporer, blir startet.",
		workflow_pref_tracker_deadline_reminders: "Arbeidsflytfrist nær",
		workflow_pref_tracker_deadline_reminders_hover: "Minn meg på en arbeidsflyt når tidsfristen for arbeidsflyten nærmer seg.",
		workflow_pref_tracker_deadline_expired: "Tidsfrist for arbeidsflyt er passert",
		workflow_pref_tracker_deadline_expired_hover: "Varsle meg når en tidsfrist for arbeidsflyten er passert.",
		workflow_pref_tracker_exception: "Det oppstod en feil i arbeidsflyten",
		workflow_pref_tracker_exception_hover: "Varsle meg når det oppstår et unntak eller en feil i arbeidsflyten.",
		workflow_pref_tracker_expired_deadline: "Tidsfrist for trinn er passert",
		workflow_pref_tracker_expired_deadline_hover: "Varsle meg når en tidsfrist for et trinn er passert for en arbeidsflyt jeg sporer.",
		workflow_pref_tracker_milestone_reached: "Milepæl er nådd",
		workflow_pref_tracker_milestone_reached_hover: "Varsle meg når en milepæl er nådd i en arbeidsflyt jeg sporer.",

		workflow_pref_out_notice: "Ikke til stede",
		workflow_pref_proxy_user: "Deleger arbeid til",
		workflow_pref_proxy_user_hover: "Bruk dette alternativet til å rute arbeidet ditt automatisk til en annen bruker, for eksempel når du er på reise eller ferie.",
		workflow_pref_workflow: "Arbeidsflyt",
		workflow_pref_on: "På",
		workflow_pref_off: "Av",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Start arbeidsflyt",
		transfered_workflows_dialog_info_text: "Velg en arbeidsflyt som skal startes.",
		transfered_workflows_dialog_available_items_label: "Tilgjengelige elementer:",
		transfered_workflows_dialog_select_button_label: "Start",
		transfered_workflows_dialog_name_col_hdr: "Navn",
		transfered_workflows_dialog_no_item_found: "Fant ingen overførte arbeidsflyter.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Overfør arbeidsflyt",
		transfer_workflow_dialog_info_text: "Velg en arbeidsflyt som skal overføres til arbeidsflytsystemet.",
		transfer_workflow_dialog_use: "Bruk dette arbeidsflytnavnet",
		transfer_workflow_dialog_use_another: "Bruk et annet arbeidsflytnavn",
		transfer_workflow_dialog_in_use: "Arbeidsflytnavnet er: ",
		transfer_workflow_dialog_transfer_button_label: "Overfør",
		transfer_workflow_dialog_no_items_found: "Fant ingen overførte arbeidsflyter.",
		transfer_workflow_dialog_use_hover: "Oppgi det gjeldende arbeidsflytnavnet fra arbeidsflytdefinisjonen.",
		transfer_workflow_dialog_another_hover: "Oppgi et annet arbeidsflytnavn eller bruk om igjen et eksisterende overført arbeidsflytnavn.",

		/*Search In control*/
		search_in_title: "Søk i:",
		search_in_teamspaces: "Grupperom",
		search_in_repositories: "Datalagre",
		search_in_thisteamspaces: "Dette grupperommet",

		ajaxViewer_save: "Lagre merkinger",
		ajaxViewer_print: "Forhåndsvis",
		ajaxViewer_firstPage: "Første side",
		ajaxViewer_previousPage: "Forrige side",
		ajaxViewer_nextPage: "Neste side",
		ajaxViewer_lastPage: "Siste side",
		ajaxViewer_unknownPageCount: "1 av ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} av ${1}",
		ajaxViewer_zoomOut: "Zoom ut",
		ajaxViewer_zoomIn: "Zoom inn",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Tilpass bredde",
		ajaxViewer_fitHeight: "Tilpass høyde",
		ajaxViewer_fitPage: "Tilpass til side",
		ajaxViewer_rotate270: "Roter 270 grader",
		ajaxViewer_rotate90: "Roter 90 grader",
		ajaxViewer_rotate180: "Roter 180 grader",
		ajaxViewer_darken: "Mørkere",
		ajaxViewer_lighten: "Lysere",
		ajaxViewer_lessContrast: "Mindre kontrast",
		ajaxViewer_moreContrast: "Mer kontrast",
		ajaxViewer_invert: "Inverter",
		ajaxViewer_createHighlight: "Utheving",
		ajaxViewer_createNote: "Annoter",
		ajaxViewer_editAnnotation: "Rediger egenskaper for merking",
		ajaxViewer_deleteAnnotation: "Slett merking",
		ajaxViewer_editAnnotationTitle: "Rediger egenskaper for merking",
		printableView_print: "Skriv ut",
		printableView_close: "Lukk",

		search_results_dropdown_button: "Resultatvisning",
		search_results_columns_label: "Søkeresultatvisning",
		search_results_columns_description: "Velg egenskapene du vil vise i søkeresultatene.",
		search_results_sortby_label: "Sorter etter:",
		search_results_order_label: "Sorteringsrekkefølge:",
		search_results_accending_label: "Stigende",
		search_results_descending_label: "Synkende",
		search_results_available_properties: "Tilgjengelig",
		search_results_selected_properties: "Valgt",
		search_rank_property: "Rang (bare tekstsøk)",
		search_name_attribute: "Navn (${0})",
		search_results_summary_enabled_label: "Aktiver innholdssammendrag (bare tekstsøk)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Søk",
		manage_teamspace_classes_tab_title: "Klasser",
		manage_teamspace_entry_templates_tab_title: "Oppføringsmaler",
		manage_teamspace_team_tab_title: "Gruppe",
		manage_teamspace_roles_tab_title: "Roller",
		manage_teamspace_dialog_title: "Endre grupperom",
		manage_teamspace_button_label: "Endre grupperom",
		manage_teamspace_team_pane_heading: "Velg gruppe",
		manage_teamspace_classes_pane_heading: "Velg klasser",
		manage_teamspace_entry_templates_pane_heading: "Velg oppføringsmaler",
		manage_teamspace_no_rights_message: "Du har ikke de nødvendige tillatelsene til å endre dette grupperommet.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Grupperomegenskaper",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Oppgi hvilke egenskaper som skal vises for dokumenter og mapper på innholdslisten når brukerne blar i grupperommet. Du kan også oppgi hvilken rekkefølge egenskapene skal vises i.",
		teamspace_props_sel_cols_use_default_label: "Bruk innstillingene for <b>Bla gjennom</b> for dette datalageret",
		teamspace_props_sel_cols_use_default_tooltip: "Bruk innstillingene som er oppgitt på siden Bla gjennom, for dette datalageret i administrasjonsverktøyet.",
		teamspace_props_general_tab_label: "Generelt",
		teamspace_props_column_props_tab_label: "Viste egenskaper",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Velg fil for import",
		teamspace_import_template_instruction: "Du kan velge en eksportfil med en grupperommal du vil importere.",
		teamspace_import_template_button_label: "Importer",
		teamspace_import_template_dialog_label: "Importer grupperommal",

		/* Annotation Dialog */
		annotationDlg_title: "Annotasjoner",
		annotationDlg_description: "Det valgte dokumentet har følgende annotasjoner:",
		annotationDlg_msg_noAnnotations: "Det finnes ingen merkinger. Klikk på Legg til hvis du vil opprette en merking.",
		annotationDlg_pageLabel: "Side: ${pageNum}",
		annotationDlg_accLabel: "TILGANG: ${accType}",
		annotationDlg_accLabel_public: "Felles",
		annotationDlg_accLabel_private: "Privat",
		annotationDlg_accLabel_privateGroup: "Privat(${groupName})",
		annotationDlg_copiable: "Kan kopieres til en annen server",
		annotationDlg_cannotCopy: "Kan ikke kopieres til en annen server",
		annotationDlg_addButtonLabel: "Legg til",

		/* Share Dialog */
		is_shared: "Delt",
		is_share_pending: "Deling venter",
		share_title: "Box-deling",
		share_instructions_new: "Send e-post som inneholder en link for den delte filen. Alle med linken har tilgang til filen.",
		share_instructions_existing: "Send e-post som inneholder en link for den delte filen. Alle med linken har tilgang til filen. Andre personer har kanskje linken fordi noen andre allerede har delt denne filen.",
		share_instructions_another_version_shared: "Send e-post som inneholder linken for den delte filen. Alle med linken har tilgang til filen. Andre personer har kanskje linken fordi noen andre allerede har delt en annen versjon av denne filen.",
		share_buttonLabel_share: "Del",
		share_email_addresses: "Send til:",
		share_email_addresses_hover: "Når delingen er fullført, blir det sendt en link til disse e-postadressene. Hvis du ikke skriver noe, blir linken sendt til din egen e-postadresse.",
		share_email_addresses_reshare_hover: "Når delingen er fullført, blir det sendt en link til disse e-postadressene. Hvis du ikke skriver noe, blir det ikke sendt noen e-post.",
		share_password: "Definer passord:",
		share_password_placeholder: "Valgfri",
		share_comments: "Melding:",
		share_comments_default: "Jeg ønsker å dele filen min med deg i Box.",
		share_myEmail: "Send fra:",
		share_expiration: "Definer linkutløp:",
		share_expire: "Tilgang utløper:",
		share_expire_none: "Utløper aldri",
		share_allowDownload: "Tillat nedlasting",
		share_add: "Legg til",
		share_advanced_instructions: "Innstillingene for nedlasting, utløp og passord gjelder for den delte filen i Box.",
		share_advanced_existing_instructions: "Innstillingene for nedlasting, utløp og passord gjelder for den delte filen i Box.",
		share_options_edit_warning: "Viktig: Eventuelle endringer i disse innstillingene påvirker alle med linken, inkludert personer som allerede har linken.",
		share_link: "Link:",
		share_email_addresses_placeholder: "E-postadresser",
		share_email_address_placeholder: "E-postadresse",
		share_email_address_invalid: "Oppgi en gyldig e-postadresse.",
		share_cannot_share_with_self: "Du kan ikke dele filer med deg selv. Oppgi en annen bruker.",
		share_selected_version_with_minor_warning_hover: "Versjon ${0} av dokumentet er delt. Du valgte versjon ${1}.<br><br><b>Advarsel</b>: Hvis du deler versjon ${1}, kan ingen dele versjon ${2} uten at du sletter delingen for versjon ${1}.",
		share_selected_version_hover: "Versjon ${0} av dokumentet er delt. Du valgte versjon ${1}.",
		share_selected_version_message: "Viktig: Versjon ${0} av dokumentet er delt. Du valgte versjon ${1}.",
		share_different_version_message: "Viktig: Du valgte versjon ${1}, men versjon ${0} av dokumentet er allerede delt.  Du kan ikke dele versjon ${1} uten at du først sletter delingen, men du kan dele linken til versjon ${0} i stedet.",
		share_version_message: "Viktig: Versjon ${0} av dokumentet er delt. Velg hvilken versjon du vil dele.",
		share_version_new: "Del versjon ${0}",
		share_version_new_p8_hover: "Hvis du deler dette dokumentet, blir det opprettet en spesifikk versjonslink til den valgte versjonen.<br><br>Når et dokument allerede er delt:<ul><li>Du kan dele en nyere versjon, så omdirigerer linken til den nyeste versjonen.</li><li>Du kan ikke dele en tidligere versjon uten at du først sletter delingen.</li></ul>",
		share_version_new_cm_hover: "Hvis du deler dette dokumentet, blir det opprettet en spesifikk versjonslink til den valgte versjonen.<br><br>Når et dokument allerede er delt:<ul><li>Du kan dele en nyere versjon, så omdirigerer linken til den nyeste versjonen.</li><li>Du kan ikke dele en tidligere versjon.</li></ul>",
		share_version_update: "Del versjon ${0} (oppdater delingsalternativene).",
		share_version_update_p8_hover: "Hvis du deler dette dokumentet, vedlikeholdes bare linken til den bestemte versjonen.<br><br>Når et dokument allerede er delt:<ul><li>Du kan dele en nyere versjon, så omdirigerer linken til den nyeste versjonen.</li><li>Du kan ikke dele en tidligere versjon uten at du først sletter delingen.</li></ul>",
		share_version_update_cm_hover: "Hvis du deler dette dokumentet, vedlikeholdes bare linken til den bestemte versjonen.<br><br>Når et dokument allerede er delt:<ul><li>Du kan dele en nyere versjon, så omdirigerer linken til den nyeste versjonen.</li><li>Du kan ikke dele en tidligere versjon.</li></ul>",
		share_version_change_to_current: "Del versjon ${0} (Oppdater delingen med den valgte versjonen).",
		share_version_change_to_current_p8_hover: "Hvis du deler dette dokumentet, oppdateres linken slik at den bare peker til den valgte versjonen.<br><br>Når et dokument allerede er delt:<ul><li>Du kan dele en nyere versjon, så omdirigerer linken til den nyeste versjonen.</li><li>Du kan ikke dele en tidligere versjon uten at du først sletter delingen.</li></ul>",
		share_version_change_to_current_cm_hover: "Hvis du deler dette dokumentet, oppdateres linken slik at den bare peker til den valgte versjonen.<br><br>Når et dokument allerede er delt:<ul><li>Du kan dele en nyere versjon, så omdirigerer linken til den nyeste versjonen.</li><li>Du kan ikke dele en tidligere versjon.</li></ul>",
		share_repository: "Datalager for delte filer",
		share_repository_hover: "Hvis du ikke ser Box-datalageret du vil bruke, kan du legge til et nytt Box-datalager på siden Datalagre.",
		share_options: "Delingsalternativer",
		unshare_confirm: "Hvis du sletter delingen, blir alle delingslinker brutt, inkludert delingslinker som er sendt av andre brukere. Eventuelle andre brukere som ønsker å dele dokumentet, må velge det opprinnelige dokumentet og dele det igjen.<br><br>Er du sikker på at du vil slette delingen?",
		unshare_button: "Slett Box-deling",
		admin_share: "Box-delingstjenester:",
		admin_share_hover: "Tillat brukere å dele et dokument fra ethvert datalager der Box-deling er aktivert. Deling av et dokument består i å kopiere filen til Box, opprette en link og sende linken via e-post.",
		admin_my_email_modifiable: "Tillat brukerne å endre e-postadressen for Send fra",
		admin_my_email_modifiable_hover: "Standard for Box-deling er at brukerens e-postadresse er skrivebeskyttet og hentes fra en tilordning av brukere og e-postadresser som representerer Box-brukerkontoer.<br><br>Velg dette alternativet for å tillate brukerne å redigere e-postadressen sin når de deler. Det blir imidlertid ikke kontrollert om e-postadressen er gyldig.",
		admin_repos_admin_user: "Delingsadministrator:",
		admin_repos_admin_user_hover: "Definer delingsadministratoren hvis du har et skrivebord med Box-delingstjenester aktivert, og dette Box-datalageret er valgt som datalager for delte filer.<br><br>Klikk på Definer og logg deg på Box ved hjelp av en gyldig Box-administratorkonto.<br><br>Delingsadministratoren må være en Box-administratorbruker som er konfigurert til å ha ubegrenset lagring i Box.",
		admin_repos_admin_user_not_set_warning: "Box-administratoren er ikke konfigurert for det valgte datalageret.<br><br>Box-delingstjenester er deaktivert til du definerer Box-administratoren for det valgte datalageret eller velger et annet Box-datalager der Box-administratoren er konfigurert.<br><br>Du kan definere Box-administratoren i seksjonen for Box-delingstjenester på siden Generelt for datalageret.",
		admin_share_not_configured_warning: "Før du kan bruke Box-delingstjenester, må du legge til og velge et Box-datalager med serverautentisering.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online-konfigurasjon",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Oppgi om du vil at brukerne som benytter dette skrivebordet, skal kunne redigere Office-dokumentene sine ved hjelp av Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Tillat samarbeidsredigering",
		admin_office_online_allow_collaborative_editing_hover: "Tillat at mer enn en bruker arbeider med samme dokument. Opphev valget hvis du vil begrense redigering av dokumenter til en enkelt bruker.",
		admin_office_online_repository_not_set_warning: "Før du kan aktivere Office Online-tjenesten, må du aktivere tjenesten på et datalager og oppgi URLen til Microsoft Office Online Server. Klikk på <b>Datalagre</b>, velg et datalager og aktiver deretter tjenesten på flippen <b>Rediger integrasjon</b>. Klikk på <b>Innstillinger > Generelt</b> og oppgi URLen til Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Oppgi om du vil bruke Office Online Server for å arbeide med Office-dokumenter.",
		admin_office_online_server_url: "URL til Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Oppgi URLen som andre applikasjoner kan bruke til å kommunisere med Office Online Server. URLen har formatet http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Verifisert",
	    admin_office_online_server_Failed: "<b>Mislykket</b>",

		admin_repcfg_office_online_service_p8_hover: "For å få datalageret til å begynne å bruke Office Online Server, kan du legge til startmalfilen for hver enkelt Office-applikasjon. Hvis det ikke blir oppgitt noen mal, brukes standardmalen.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server-integrering",
		admin_repcfg_office_online_service_url_not_set_warning: "Før du kan aktivere Office Online Server, må du oppgi URLen til Microsoft Office Online Server. Klikk på Innstillinger > Generelt og oppgi URLen.",
		admin_repcfg_office_online_word_template_name: "Standard Word-mal",
		admin_repcfg_office_online_excel_template_name: "Standard Excel-mal",
		admin_repcfg_office_online_powerpoint_template_name: "Standard PowerPoint-mal",
		admin_repcfg_office_online_blank_template_description: "Dette er standardmalen som brukes hvis du ikke legger til din egen mal.",
		/* Edit Service settings */
		admin_icn_edit_title: "Rediger konfigurasjon",	
	    admin_icn_edit_files_cleanup_interval: "Oppryddingsintervall for midlertidige filer (i dager):",
	    admin_icn_edit_files_cleanup_interval_hover: "Du kan oppgi hvor lenge midlertidige filer skal beholdes i ICN Edit-klienten. Standard er 20 dager. Maksimumsverdien er 20 dager, og minimumsverdien er 1 dag.",
	    admin_icn_edit_service_integration: "Edit Service Integration",
	    admin_icn_edit_service_integration_intro: "Edit Service gjør det enkelt for brukere å legge til eller redigere filer i apper de har installert på datamaskinen sin.<br><br><b>Viktig:</b> Hvis du aktiverer Edit Service, må du lagre datalagerkonfigurasjonen før du kan redigere de forhåndsdefinerte kategoriene.",
		admin_icn_edit_service: "Edit Service:",
		admin_icn_edit_enable_hover: "For å bruke Edit Service må du gjøre følgende:<ul><li>Aktiver tjenesten på datalageret</li><li>Aktiver tjenesten på skrivebord i miljøet ditt</li><li>Installer IBM Content Navigator Edit-klienten på brukernes arbeidsstasjoner</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Aktiver",
		admin_icn_edit_disable: "Deaktiver",
		admin_icn_edit_create_new_category: "Ny kategori",
		admin_icn_edit_delete_category: "Slett kategori",
		admin_icn_edit_edit_category: "Rediger kategori",
		admin_icn_edit_disable_category: "Deaktiver kategori",
		admin_icn_edit_enable_category: "Aktiver kategori",
		admin_icn_edit_new_category_dialog_title: "Ny kategori",
		admin_icn_edit_edit_category_dialog_title:"Rediger kategori",
		admin_icn_edit_new_category_dialog_instructions: "En dokumentkategori gjør det mulig for deg å knytte maler til bestemte MIME-typer for Edit Service. Du kan for eksempel knytte et sett med maler til PDF-filer slik at brukerne kan bruke maler når de legger til eller redigerer filer fra IBM Content Navigator Edit-klienten. <br><br><b>Viktig:</b> Du må lagre datalagerkonfigurasjonen før du kan legge til maler i kategorien du oppretter. ",
		admin_icn_edit_edit_category_dialog_instructions: "Du må lagre datalagerkonfigurasjonen før du kan legge til maler i denne kategorien. ",
		admin_icn_edit_delete_category_dialog_instructions: "Vil du slette denne kategorien og eventuelle maler som er knyttet til kategorien?<br><br><b>Viktig:</b> Endringene dine vil ikke bli permanente før du lagrer endringene i datalageret. ",
		admin_icn_edit_category_label: "Kategori: ",
		admin_icn_edit_category_discription_label:"Beskrivelse: ",
		admin_icn_edit_template_column_head:"Malnavn",
		admin_icn_edit_category_duplicate_error_message: "Det finnes allerede en kategori med denne IDen. ",
		admin_icn_edit_word_category_description: "Denne kategorien definerer de tilgjengelige malene for Microsoft Word-dokumenter i Edit Service. ",
		admin_icn_edit_excel_category_description: "Denne kategorien definerer de tilgjengelige malene for Microsoft Excel-dokumenter i Edit Service. ",
		admin_icn_edit_powerpoint_category_description: "Denne kategorien definerer de tilgjengelige malene for Microsoft PowerPoint-dokumenter i Edit Service. ",

		icn_edit_add_template_dialog_title:"Legg til en ${0}-mal",
		icn_edit_add_template_only_one_file_error: "Du kan bare velge én fil.",
		icn_edit_add_template_file_type_error: "Du må oppgi en gyldig ${0}-malfil.<br><br>Det valgte dokumentet har MIME-type ${1}.<br><br>Gyldige MIME-typer: ${2}.",
		icn_edit_change_template_dialog_title: "Rediger ${0}-mal",
		icn_edit_action_in_new_menu_name:"${0}-dokument",
		icn_edit_action_in_new_menu_submenu_oo_name: "med Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "med skrivebordsapper",
		icn_edit_new_document_dialog_title: "Nytt ${0}-dokument",
		icn_edit_new_document_dialog_intro: "Opprett et nytt ${0}-dokument og legg det til i datalageret. Dokumentet vil bli opprettet med den valgte redigeringstjenestemalen.", 
		icn_edit_select_edit_service_template: "Velg en mal",
		icn_edit_edit_service_template: "Edit Service-mal:",
		icn_edit_new_document_category_no_templates_message:"Det er ingen maler i denne kategorien. Kontakt administratoren for å få lagt til maler i denne kategorien.",
		icn_edit_installer: "Installeringsprogram for IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Innstillinger for klasser og roller",
		admin_repcfg_classes_and_roles_warning: "For å oppgi klasser og brukere eller brukergrupper som har tillatelse til å opprette, redigere og bruke maler eller opprette utkast av dokumenter som fungerer med Office Online Service og Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "klikk her.",
		/* Edit Service settings END */
		share_no_my_email_error: "Det oppstod et problem med identifisering av e-postadressen som kreves for å dele dokumentet.",
		share_no_my_email_error_explanation: "Du logget deg på med bruker-IDen ${0}, men bruker-IDen er ikke tilordnet til en e-postadresse.",
		share_no_my_email_error_userResponse: "Prøv å logge deg på igjen, eller logg deg på med en annen bruker-ID. Hvis problemet vedvarer, rapporterer du feilen til systemadministratoren.",
		share_no_my_email_error_adminResponse: "Bruker-IDen ${0} er ikke tilordnet til en e-postadresse, og skrivebordet ${1} tillater ikke brukerne å redigere e-postadressen for Box-delingstjenestene.<br><br>Prøv en av følgende løsninger:<br>Kontroller at plugin-modulen Email Mapping er registrert.<br>Kontroller at filen emailMappingPlugin.json inneholder bruker-IDen ${0} og brukerens e-postadresse, og bygg, konfigurer og registrer deretter plugin-modulen Email Mapping.<br>Hvis du ikke vil bruke plugin-modulen Email Mapping eller FileNet P8-katalogen for e-postadresser, men i stedet ønsker å tillate brukerne å oppgi en e-postadresse selv når de deler et dokument, kan du endre skrivebordinnstillingene for Box-delingstjenestene slik at brukerne har tillatelse til å sende linken fra en annen e-postadresse.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "En senere versjon av dette dokumentet er delt, så du kan ikke dele den valgte versjonen av dette dokumentet.",
		share_later_version_shared_error_explanation: "Du kan ikke dele en tidligere versjon av et dokument som er delt fra før.",
		share_later_version_shared_error_userResponse: "Hvis du vil sende linken til den senere versjonen av dokumentet, må du først velge den senere versjonen og deretter bruke handlingen Del.<br><br>Hvis du vil dele den valgte versjonen av dokumentet, må du først slette delingen for den senere versjonen av dokumentet.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Ny melding",
		email_from: "Fra:",
		email_to: "Hvis du vil:",
		email_cc_link: "Kopi",
		email_bcc_link: "Bkopi",
		email_cc: "Kopi:",
		email_bcc: "Bkopi:",
		email_address_invalid: "Oppgi en gyldig e-postadresse.",
		email_subject: "Emne:",
		email_message: "Melding:",
		email_message_placeholder: "Legg til en melding",
		email_attachments: "Vedlegg:",
		email_links: "Linker:",
		email_send: "Send",
		email_dont_send: "Ikke send",
		email_subject_reminder: "Påminnelse om emne",
		email_subject_reminder_confirm: "Vil du sende denne meldingen uten noe emne?",
		email_missing_from_error: "Det oppstod et problem med identifisering av e-postadressen for Send fra som kreves for å sende e-posten.",
		email_missing_from_error_explanation: "Du logget deg på med bruker-IDen ${0}, men bruker-IDen er ikke tilordnet til en e-postadresse.",
		email_missing_from_error_userResponse: "Prøv å logge deg på igjen, eller logg deg på med en annen bruker-ID. Hvis problemet vedvarer, rapporterer du feilen til systemadministratoren.",
		email_missing_from_error_adminResponse: "Bruker-IDen ${0} er ikke tilordnet til en e-postadresse, og skrivebordet ${1} tillater ikke brukerne å redigere e-postadressen for Send fra.<br><br>Prøv en av følgende løsninger:<br>Kontroller at plugin-modulen Email Mapping er registrert.<br>Kontroller at filen emailMappingPlugin.json inneholder bruker-IDen ${0} og brukerens e-postadresse, og bygg, konfigurer og registrer deretter plugin-modulen Email Mapping.<br>Hvis du ikke vil bruke plugin-modulen Email Mapping eller FileNet P8-katalogen for e-postadresser, men i stedet ønsker å tillate brukerne å oppgi en e-postadresse selv når de sender en e-post, kan du endre e-postinnstillingene for skrivebord slik at brukerne har tillatelse til å endre Fra-adressen for e-post.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokumentet kan ikke åpnes.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator kan ikke koble seg til IBM Content Navigator Edit-klienten.",
		open_edit_document_with_native_application_error_userResponse: "Installer og start IBM Content Navigator-klienten på arbeidsstasjonen din. Prøv deretter å åpne dokumentet igjen.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokumentet kan ikke åpnes.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator kan ikke koble seg til IBM Content Navigator Edit-klienten.",
		connect_to_the_streamline_service_error_userResponse: "Installer og start IBM Content Navigator-klienten på arbeidsstasjonen din. Prøv deretter å åpne dokumentet igjen.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator er ikke konfigurert på riktig måte for å dele dokumenter.",
		share_not_configured_error_explanation: "Box-delingsfunksjonen må konfigureres på riktig måte før du kan dele dokumenter",
		share_not_configured_error_userResponse: "Kontakt administratoren og be om at Box-delingsfunksjonen blir konfigurert.",
		share_not_configured_error_adminResponse: "Følgende elementer må konfigureres før det er mulig å dele dokumenter:<ul><li>Oppgavestyrertjenesten må være aktivert i innstillingene for administrasjonsverktøyet.</li><li>Tilkoblings-IDen for oppgavestyreren må være konfigurert i datalageret.</li><li>Deling må være aktivert på datalageret.</li><li>Et Box-datalager må være valgt for deling på skrivebordet.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Egenskapsendringene ble ikke lagret for den nye versjonen",
		checkin_cors_save_attributes_error_explanation: "Versjonen ble opprettet, men egenskapsendringene ble ikke lagret. Dokumentet kan likevel sjekkes ut.",
		checkin_cors_save_attributes_error_userResponse: "Lås opp dokumentet og oppdater egenskapene ved hjelp av hurtigmenyvalget Egenskaper.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Egenskapsendringene ble ikke lagret for det nye dokumentet",
		add_cors_save_attributes_error_explanation: "Dokumentet ble opprettet, men egenskapsendringene ble ikke lagret.",
		add_cors_save_attributes_error_userResponse: "Oppdater egenskapene ved hjelp av hurtigmenyvalget Egenskaper.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokumentet kan ikke åpnes.",		
		edit_document_using_edit_service_error_explanation: "Dokumentet kan ikke åpnes i Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Be administratoren om å oppdatere Edit Service Integration.<br><br> Hvis brukeren trenger tilgang til dette dokumentet fra Edit Service, går du til siden Edit Integration for datalageret og oppdaterer Edit Service-integreringen slik at den inkluderer klassen på listen over klasser som skal endres for Edit Service-støtte.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokumentet kan ikke åpnes.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokumentet er i bruk av Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Du må lagre og lukke dokumentet i Office Online Service før du kan åpne det i Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Aktiver Cross-Origin Resource Sharing (CORS)-opplastinger",

		/* Email Settings */
		admin_email_settings: "E-postinnstillinger:",
		admin_email_settings_hover: "Oppgi hvilken type e-posttjeneste du vil at brukerne skal benytte. Når du aktiverer den HTML-baserte e-posttjenesten, har du mulighet til å tillate at brukerne endrer sin Fra-adresse for e-post. Hvis du vil aktivere den Java-baserte e-posttjenesten, må du ha en nettleser som støtter Java.",
		admin_email_use_service: "Bruk den HTML-baserte e-posttjenesten",
		admin_email_use_applet: "Bruk den Java-baserte e-posttjenesten",
		admin_email_can_modify_from: "Tillat brukerne å endre Fra-adressen for e-post",
		admin_email_can_modify_from_hover: "Som standard kan ikke Fra-adressen for e-post endres, og den hentes fra en tilordning av brukere og e-postadresser som representerer brukerkontoer.<br><br>Velg dette alternativet for å tillate brukerne å redigere e-postadressen sin når de sender en e-post. Det blir imidlertid ikke kontrollert om e-postadressen er gyldig.",
		admin_email_use_from_as_sender: "Bruk Fra-adressen for e-post som avsender av e-posten",
		admin_email_use_from_as_sender_hover: "Som standard brukes en gyldig Fra-adresse i e-posten for en bruker. Den e-postadressen blir definert av CNMailSession-postsesjonen på applikasjonsserveren. Velg dette alternativet for å oppgi at brukerens e-postadresse skal brukes i e-posten.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nye annotasjoner",
		addAnnotationDlg_labelContents: "Innhold:",
		addAnnotationDlg_labelAccess: "Tilgang:",
		addAnnotationDlg_labelPublic: "Felles",
		addAnnotationDlg_labelPrivate: "Privat",
		addAnnotationDlg_labelPrivateGroup: "Privat for gruppe",
		addAnnotationDlg_labelGroup: "Gruppe",
		addAnnotationDlg_labelCopiable: "Denne annotasjonen kan kopieres til en annen server.",
		addAnnotationDlg_buttonLabel_save: "Lagre",

		/* Skip navigation */
		skipNavigation_title_main: "Hopp til hovedinnhold",
		skipNavigation_title_menu: "Hopp til navigasjonsknapper",
		skipNavigation_label_main: "Hopp til hovedinnhold",
		skipNavigation_label_menu: "Hopp til navigasjonsknapper",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Administrer grupperom",
		manage_teamspace_pane_instance_hdr: "Grupperom",
		manage_teamspace_pane_template_hdr: "Maler",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Bla forover",
		scroll_back: "Bla bakover",

		breadcrumb_separator_open: "Åpne node",
		breadcrumb_separator_close: "Lukk node",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Ingen elementer er valgt.",

		/* eds */
		eds_url: "URL for ekstern datatjeneste:",
		eds_request_timeout: "Tidsavbrudd for tjenesteforespørsel (sekunder):",
		eds_is_required: "Hindre brukere i å utføre handlinger som endrer verdiene for egenskaper når EDS ikke er tilgjengelig",

		/* eforms */
		eform_signing_pane_welcome: "Signer skjemaet",
		eform_signing_button_label: "Signer",
		eform_signing_pane_delete: "Slett signaturen",
		eform_signing_button_label_delete: "Slett",

		xtplugin_server_label: "URL for IBM FileNet Workplace XT-server",
		xtplugin_server_hover: "Oppgi URLen for serveren der IBM FileNet Workplace XT er implementert, for eksempel http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL for IBM eClient-server",
		ecplugin_server_hover: "Oppgi URLen for serveren der IBM eClient er implementert, for eksempel http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Det kan ta lang tid å utføre handlinger for et stort antall elementer. Vil du fortsette?",
		large_number_actions_continue_button: "Fortsett",

		large_items_actions_confirmation_question: "Det kan ta lang tid å utføre handlinger på store elementer. Vil du fortsette?",

		viewer_editproperties_title: "Bekreftelse",
		viewer_editproperties_title_warning: "Advarsel",
		viewer_editproperties_save: "Lagre",
		viewer_editproperties_next: "Neste",
		viewer_editproperties_reset: "Tilbakestill",
		viewer_editproperties_reset_hover: "Alle ulagrede data blir tilbakestilt til tidligere lagrede verdier.",
		viewer_editproperties_saveandgetnext: "Lagre og hent deretter neste",
		viewer_editproperties_saveandgetnext_hover: "Hent neste dokument automatisk etter at jeg har lagret endringene mine",
		viewer_editproperties_prompt_save_changes: "Du endret egenskapene for følgende dokument<br>${0}<br><br>Vil du lagre endringene?",
		viewer_editproperties_prompt_discard_changes: "Du endret egenskapene for følgende dokument<br>${0}<br><br>En eller flere egenskaper har imidlertid en ugyldig verdi, så endringene kan ikke lagres. Du kan enten rette de ugyldige verdiene eller fjerne endringene.<br>Vil du rette de ugyldige verdiene som blir vist i egenskapsruten?",
		viewer_comments_prompt_discard_changes: "Du endret kommentarene. Vil du lagre endringene?",
		viewer_notelogs_prompt_discard_changes: "Du endret notatloggene. Vil du lagre endringene?",
		social_collaborated_version: "Versjon: ${0}",
		social_link_label: "Hvem...",

		// social comments
		comments: "Kommentarer",
		comments_add_hint: "Trykk på Enter for å legge til kommentarene.",
		comments_hint: "Skriv inn kommentarene dine.",
		comments_label: "Trykk på Enter eller tabulatortasten for å lagre kommentarene. Trykk på Esc for å avbryte.",
		comments_delete_confirmation: "Vil du slette den valgte kommentaren?",
		comments_number: "Kommentarer: ${0}",
		comments_save_new: "Du endret kommentarene. Vil du lukke vinduet uten å lagre endringene?",

		notelogs: "Notatlogger",
		notelogs_download: "Last ned",
		notelog_modify: "Lagre endringer",
		notelog_edit: "Rediger notatlogg",
		notelog_create_newVersion: "Opprett en ny notatloggversjon",
		notelog_add_hint: "Skriv inn kommentarene dine og trykk på Enter for å legge dem til.",
		notelog_hint: "Trykk på Skift+Enter for linjeskift",
		notelog_add_placeholder: "Trykk på Enter for å legge til kommentarer i notatloggen.",
		notelog_save_new: "Du endret notatloggen. Vil du lukke vinduet uten å lagre endringene?",

		// P8 markings related
		cannot_remove_markings: "Du har ikke tillatelse til å fjerne merkingsverdien(e): {0}",

		// download count
		downloadcount: "Nedlastinger: {0}",
		downloadcount_single: "1 nedlasting",
		downloadcount_multiple: "{0} nedlastinger",
		downloadcount_none: "Ingen har lastet ned denne ennå",

		// recommendations
		recommendations: "Liker: {0}",
		recommendations_recommend: "Liker",
		recommendations_unrecommend: "Liker ikke",
		recommendations_you: "Du liker dette",
		recommendations_you_and_another: "Du og 1 annen person liker dette",
		recommendations_you_and_others: "Du og {0} andre liker dette",
		recommendations_another: "1 person liker dette",
		recommendations_others: "{0} personer liker dette",
		recommendations_none: "Ingen har likt dette ennå",

		// tags
		tags: "Koder: ${0}",
		tags_delete: "Slett ${0}",
		tags_none: "Det er ingen koder å vise.",
		tags_add: "Legg til koder:",
		tags_hint: "Trykk på Enter for å legge til kodene.",
		tags_hover_help: "Oppgi en kode eller en liste med koder som kan brukes til å søke etter dokumenter med samme kode. Du kan bruke komma (,), semikolon (;) eller blanktegn til å skille kodene.",
		tags_hover_help_box: "Oppgi en kode eller en kommadelt liste med koder som kan brukes til å søke etter dokumenter med samme kode.",
		tags_no_access: "Du har ikke de nødvendige tillatelsene til å legge til koder.",

		//task scheduler pane
		taskPane_tooltip: "Åpne visningen Asynkrone oppgaver",
		taskPane_tree: "Navigeringstre for oppgaverute",
		taskPane_allTasks: "Alle oppgaver",
		taskPane_scheduledTasks: "Planlagte oppgaver",
		taskPane_recurringTasks: "Gjentakende oppgaver",
		taskPane_inProgressTasks: "Pågående oppgaver",
		taskPane_completedTasks: "Fullførte oppgaver",
		taskPane_failedTasks: "Mislykkede oppgaver",
		taskPane_disabledTasks: "Deaktiverte oppgaver",
		taskPane_statusScheduled: "Planlagt",
		taskPane_statusInProgress: "Pågår",
		taskPane_statusCompleted: "Fullført",
		taskPane_statusFailed: "Mislykket",
		taskPane_statusPaused: "Midlertidig stoppet",
		taskPane_noItemSelected: "Det er ikke valgt noe element",
		taskSchedulerPane_scheduleInformation: "Tidsplaninformasjon",
		taskSchedulerPane_loginInformation: "Påloggingsinformasjon",
		taskSchedulerPane_startImmediately: "Start umiddelbart",
		taskSchedulerPane_recurrence: "Gjentakelse",
		taskSchedulerPane_interval: "Intervall",
		taskSchedulerPane_scheduleReport: "Planleggingsrapport",
		taskSchedulerPane_nameHoverHelp: "Oppgi navnet på oppgaven.",
		taskSchedulerPane_descriptionHoverHelp: "Lag en beskrivelse for oppgaven. Beskrivelsen skal hjelpe deg med å skille mellom oppgavene.",
		taskSchedulerPane_startTimeHoverHelp: "Oppgi når du vil at oppgaven skal kjøres. Hvis du vil kjøre oppgaven nå, velger du Start umiddelbart.",
		taskSchedulerPane_recurrenceHoverHelp: "Du kan definere at oppgaven skal kjøres regelmessig.",
		taskSchedulerPane_endTimeHoverHelp: "Oppgi når du vil at kjøringen av oppgaven skal stoppe. Oppgaven kjøres fra det planlagte starttidspunktet til det planlagte sluttidspunktet.",
		taskSchedulerPane_usernameHoverHelp: "For regelmessige oppgaver må du oppgi et brukernavn slik at tjenesten kan autentisere når oppgaven kjøres.",
		taskSchedulerPane_passwordHoverHelp: "For regelmessige oppgaver må du oppgi et passord for den oppgitte brukeren slik at tjenesten kan autentisere når oppgaven kjøres.",
		taskSchedulerPane_notification: "Varsling",
		taskSchedulerPane_emailAddress: "E-postadresse",
		taskSchedulerPane_emailAddressHoverHelp: "Oppgi e-postadressen der du vil motta varsling om statusen for oppgaven.",
		taskSchedulerPane_intervalHoverHelp: "Oppgi hvor lenge den regelmessige oppgaven skal kjøres. Du kan definere intervallet i timer, dager, uker eller måneder.",
		taskSchedulerPane_scheduledStartTime: "Planlagt starttidspunkt",
		taskSchedulerPane_startTime: "Starttidspunkt",
		taskSchedulerPane_title: "Tidsplan",
		taskSchedulerPane_runNow: "Kjør nå",
		taskSchedulerPane_runOnce: "Kjør en gang",
		taskSchedulerPane_runAtSchedule: "Kjør etter en plan",
		taskSchedulerPane_repeats: "Gjentas",
		taskSchedulerPane_repeatsEvery: "Gjentas hver",
		taskSchedulerPane_hourly: "Time",
		taskSchedulerPane_daily: "Daglig",
		taskSchedulerPane_weekly: "Ukentlig",
		taskSchedulerPane_monthly: "Månedlig",
		taskSchedulerPane_yearly: "Årlig",
		taskSchedulerPane_sunday: "L",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "O",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "L",
		taskSchedulerPane_starting: "Startdato",
		taskSchedulerPane_after: "Etter",
		taskSchedulerPane_ending: "Sluttdato",
		taskSchedulerPane_times: "gang(er)",
		taskSchedulerPane_days: "dag(er)",
		taskSchedulerPane_hours: "time(r) i døgnet",
		taskSchedulerPane_interval: "Intervall",
		taskSchedulerPane_endingDays: "Slutt (i dager)",
		taskSchedulerPane_never: "Aldri",
		taskSchedulerPane_categorization: "Kategorisering",
		taskSchedulerPane_scheduleTask: "Planoppgave",
		taskInformationPane_details: "Detaljer",
		taskInformationPane_errors: "Feil",
		taskInformationPane_taskInstances: "Oppgaveforekomster",
		taskInformationPane_audits: "Revisjoner",
		taskInformationPane_results: "Resultater",
		asyncTasks: "Asynkrone oppgaver",

		//entry template pane
		search_all_entry_templates: "Søk i alle oppføringsmaler.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Vis hele stedet",
		mobilesite: "Vis mobilsted",
		profile: "Administrer profil",
		office_template: "Office-mal:",
		select_office_template: "Velg en Office-mal",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "De valgte dokumentene kan ikke åpnes i visningsprogrammet med handlingen Slå sammen og del.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Visningsprogrammet som er konfigurert for PDF- og TIFF-dokumenter, støtter ikke handlingen Slå sammen og del.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Be administratoren om å konfigurere et visningsprogram for PDF- og TIFF-dokumenter som støtter handlingen Slå sammen og del, for eksempel Daeja ViewONE Virtual Viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "De valgte PDF-dokumentene kan ikke åpnes i visningsprogrammet med handlingen Slå sammen og del.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Visningsprogrammet som er konfigurert for PDF-dokumenter, støtter ikke handlingen Slå sammen og del.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Be administratoren om å konfigurere et visningsprogram for PDF-dokumenter som støtter handlingen Slå sammen og del, for eksempel Daeja ViewONE Virtual Viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "De valgte TIFF-dokumentene kan ikke åpnes i visningsprogrammet med handlingen Slå sammen og del.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Visningsprogrammet som er konfigurert for TIFF-dokumenter, støtter ikke handlingen Slå sammen og del.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Be administratoren om å konfigurere et visningsprogram for TIFF-dokumenter som støtter handlingen Slå sammen og del, for eksempel Daeja ViewONE Virtual Viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "De valgte dokumentene kan ikke åpnes i visningsprogrammet med handlingen Slå sammen og del.",
		document_builder_unsupported_documents_error_explanation: "Handlingen Slå sammen og del virker bare sammen med PDF- og TIFF-dokumenter.",
		document_builder_unsupported_documents_error_userResponse: "Velg støttede dokumenter og prøv igjen.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Noen av de valgte dokumentene kan ikke åpnes i visningsprogrammet med handlingen Slå sammen og del.",
		document_builder_some_unsupported_documents_error_explanation: "Handlingen Slå sammen og del virker bare sammen med PDF- og TIFF-dokumenter som er åpnet fra det samme datalageret.",
		document_builder_some_unsupported_documents_error_userResponse: "De støttede dokumentene vil bli åpnet i visningsprogrammet.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Det oppstod en feil ved innsjekking av endret innhold.",
		document_builder_checkin_failed_explanation: "Visningsprogrammet mottok et feilsvar ved innsjekking av endret innhold.",
		document_builder_checkin_failed_userResponse: "Be systemadministratoren om å se gjennom loggfilene for webapplikasjonsserveren.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokumentet kan ikke åpnes.",
		no_viewer_to_view_error_explanation: "Systemadministratoren har blokkert visning for dette dokumentet. Hvis du trenger tilgang til dette dokumentet, kan du laste det ned.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Innholdet kunne ikke bygges.",
		document_build_failed_userResponse: "Be systemadministratoren om å se gjennom loggfilene for visningsprogrammet.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokumentet kunne ikke åpnes i modusen Slå sammen og del.",
		document_builder_open_failed_userResponse: "Be systemadministratoren om å se gjennom loggfilene for visningsprogrammet.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Systemet kunne ikke bytte til modusen Slå sammen og del.",
		document_builder_switch_failed_userResponse: "Be systemadministratoren om å se gjennom loggfilene for visningsprogrammet.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenter",
		print_service_page_setup_tab_title: "Sideoppsett",
		print_service_OD_print_tab_title: "Skriveralternativer",
		print_service_status_merging: "Slår sammen dokumenter...",
		print_service_status_converting: "Konverterer dokumenter...",
		print_service_status_formatting: "Formaterer dokument for utskrift...",
		admin_print_service_maximum_number_to_print: "Største antall dokumenter tillatt for utskrift:",
		admin_print_service_maximum_size_to_print: "Maksimal datamengde tillatt for utskrift (i MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Oppgi det største antall dokumenter som brukere kan skrive ut om gangen. Som standard er det 50. Hvis du ikke vil begrense utskrift ved hjelp av antall dokumenter, setter du denne grensen til 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Begrensning:</b> Denne innstillingen støttes ikke på IBM Content Manager OnDemand.<br/><br/>Oppgi den maksimale datamengden som kan skrives ut ved hjelp av IBM Daeja ViewONE-utskriftstjenesten.<br /><br />Den totale størrelsen på hvert valgte dokument kan ikke være over denne mengden.<br/><br/>Standardgrensen er 200 MB. Hvis grensen settes til over 200 MB, kan det påvirke systemytelsen. Hvis du ikke vil begrense utskrift ved hjelp av dokumentstørrelse, setter du denne grensen til 0",
		// error printing
		print_service_error_printing: "Det oppstod en feil ved utskrift.",
		print_service_error_printing_userResponse: "Be systemadministratoren om å se gjennom loggfilene for utskriftstjenesten.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "De valgte dokumentene er for store til å skrives ut",
		print_service_max_content_error_explanation: "De valgte dokumentene overskrider grensen på ${0} MB med data.",
		print_service_max_content_error_userResponse: "Velg færre dokumenter eller mindre dokumenter og skriv ut på nytt. Du kan også kontakte systemadministratoren for å øke den maksimale totalstørrelsen på elementer du kan skrive ut på en gang fra dette skrivebordet.",
		print_service_max_content_error_0: "maksimal_størrelse_på_elementer",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Elementene kan ikke skrives ut.",
		print_service_max_number_selected_error_explanation: "Du kan skrive ut opptil ${0} elementer om gangen. Du prøver å skrive ut ${1} elementer.",
		print_service_max_number_selected_error_userResponse: "Velg færre elementer og prøv å skrive ut elementene igjen. Du kan også kontakte systemadministratoren for å øke det maksimale antall elementer du kan skrive ut på en gang fra dette skrivebordet.",
		print_service_max_number_selected_error_0: "største_antall_elementer",
		print_service_max_number_selected_error_1: "antall_elementer",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


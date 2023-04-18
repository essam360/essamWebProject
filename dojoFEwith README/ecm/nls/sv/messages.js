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
		welcome_user: "Välkommen ",
		about: "Om",
		all: "Alla",
		help: "Hjälp",
		user_session: "Användarsession",
		user_session_for: "Användarsession för ${0}",
		user_session_for_with_container: "Användarsession för ${0} (${1})",
		tools: "Verktyg",
		login: "Logga in",
		logout: "Logga ut",
		search: "Sök",
		saved_searches: "Sparade sökningar",
		content_analytics: "Analysera innehåll",
		reset: "Återställ",
		reset_hover: "Alla osparade data på alla flikar kommer att återställas till tidigare sparade värden.",
		reset_default: "Rensa alla",
		reset_default_hover: "Rensar fältet Aktuell etikett på alla flikar.",
		locale: "Språk:",
		up: "Uppåt",
		down: "Nedåt",
		restore: "Återställ",
		maximize: "Maximera",
		values_label: "Värden",
		value_label: "Värde:",
		path_label: "Sökväg:",
		new_label: "Ny:",
		back_label: "Föregående",
		clear: "Rensa",
		set: "Ange...",
		browse: "Bläddra",
		work: "Arbete",
		connect: "Anslut",
		documents: "Dokument:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM och IBM-logotypen är varumärken som tillhör IBM Corporation registrerade i många jurisdiktioner världen över. Java och alla Java-baserade varumärken och logotyper är varumärken eller registrerade varumärken som tillhör Oracle och/eller närstående företag. Oracle Outside In Technology som ingår i programmet omfattas av en begränsad användningslicens och får endast användas tillsammans med programmet. Detta program licensieras i enlighet med villkoren i det licensavtal som medföljer programmet. Licensavtalet kan finnas som en fil med namnet \"License\" eller \"Non_IBM_License\" (om tillämpligt) i en programkatalog. I annat fall tillhandahålls licensavtalet utskrivet på papper. Läs noggrant igenom avtalet innan du börjar använda programmet. Du godkänner villkoren genom att använda programmet. ",
		edit: "Redigera",
		cancel: "Avbryt",
		close: "Stäng",
		close_all: "Stäng alla flikar",
		close_others: "Stäng andra flikar",
		ok: "OK",
		yes: "Ja",
		no: "Nej",
		open: "Öppna",
		refresh: "Uppdatera",
		refresh_cabinets: "Uppdatera alla skåp",
		delete_text: "Ta bort",
		export_config: "Exportera konfiguration",
		description: "Beskrivning",
		true_label: "Sant",
		false_label: "Falskt",
		error: "Fel",
		error_reference_hover: "Sök på www.ibm.com efter mer information om felet.",
		url_label: "URL",
		default_label: "Standard",
		ibm_label: "IBM",
		light_label: "Ljus",
		dark_label: "Mörk",
		save: "Spara",
		saveAs: "Spara som...",
		save_and_close: "Spara och stäng",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Inga",
		Name: "Namn",
		"${NAME}": "Namn",
		mime_type: "MIME-typ",
		mime_type_contains_label: "MIME-typen innehåller",
		mime_type_header: "MIME-typ",
		mime_type_icon: "MIME-typsikon",
		casesearch: "Ärende",
		item: "Objekt",
		no_mime_type: "Objektet saknar innehåll.",
		items_selected: "${0} objekt valda.",
		requestor: "Begärdes av",
		scheduledStartTime: "Schemalagd starttid",
		isRecurring: "Är återkommande",
		weeks: "Veckor",
		days: "Dagar",
		hours: "Timmar",
		endTime: "Sluttid",
		username: "Användarnamn",
		password: "Lösenord",
		serverURL: "Server-URL",
		enable: "Aktivera",
		disable: "Avaktivera",
		finish: "Slutför",
		previous: "Föregående",
		next: "Nästa",
		schedule: "Schemalägg",
		removeFromThisList: "Ta bort från listan",
		status: "Status",
		scheduledEndTime: "Schemalagd sluttid",
		type: "Typ",
		mode: "Läge",
		startTime: "Starttid",
		createdBy: "Skapades av",
		nextScheduledTime: "Nästa schemalagda tillfälle",
		id: "ID",
		duration: "Varaktighet",
		repeatCycle: "Frekvens",
		taskTypeName: "Uppgiftstyp",
		to: "till",
		filter: "Filtrera:",
		error_message: "Felmeddelande",

        file_type: "Dokumenttyp",
        word_template_name: "Word-mallens namn",
        excel_template_name: "Excel-mallens namn",
        powerpoint_template_name: "PowerPoint-mallens namn",
        template_description: "Mallbeskrivning",
        action_add_template: "Lägg till",
        action_change_template: "Redigera",      
        action_edit_template_properties: "Egenskaper",
        add_presentation_template: "Lägg till presentationsmall",
    	add_spreadsheet_template: "Lägg till kalkylarksmall",
    	add_doc_template: "Lägg till dokumentmall",    	
    	file_type_doc_hover: "Du måste ange en giltig dokumentmall.<br><br>Giltiga MIME-typer: ${0}",
    	file_type_doc_error: "Du måste ange en giltig dokumentmall.<br><br>Vald MIME-dokumenttyp: ${0}<br><br>Giltiga MIME-typer: ${1}",
    	file_type_presentation_hover: "Du måste ange en giltig presentationsmall.<br><br>Giltiga MIME-typer: ${0}",
    	file_type_presentation_error: "Du måste ange en giltig presentationsmall.<br><br>Vald MIME-dokumenttyp: ${0}<br><br>Giltiga MIME-typer: ${1}",
    	file_type_spreadsheet_hover: "Du måste ange en giltig kalkylarksmall.<br><br>Giltiga MIME-typer: ${0}",
    	file_type_spreadsheet_error: "Du måste ange en giltig kalkylarksmall.<br><br>Vald MIME-dokumenttyp: ${0}<br><br>Giltiga MIME-typer: ${1}",
    	office_online_only_one_template_error: "Du kan endast välja en fil.",
    	change_presentation_template: "Ändra presentationsmall",
    	change_spreadsheet_template: "Ändra kalkylarksmall",
    	change_doc_template: "Ändra dokumentmall",
    	change_button: "Redigera",
	    new_document_dialog_doc_title: "Nytt dokument",
	    new_document_dialog_presentation_title: "Ny presentation",
	    new_document_dialog_spreadsheet_title: "Nytt kalkylark",
	    new_document_dialog_title_label: "Titel:",
	    new_document_dialog_title_hover: "Ange en titel för dokumentet.",
	    new_document_dialog_title_missing_message: "Du måste ange en titel.",
	    office_online_save_before_adding_templates_title: "Spara ändringar i behållaren",
	    office_online_save_before_adding_templates_error: "Du kan inte lägga till Office-mallar förrän du sparat dina ändringar i behållaren. Klicka på <b>Spara och stäng</b>, och öppna sedan behållaren igen för att lägga till Office-mallarna.",
	    copy_to_OOS_dialog_doc_title: "Nytt dokument",
	    office_online_checkin_cancelcheckout_message: "Dokumentet håller på att redigeras i Microsoft Office Online. Du kan inte checka in dokumentet eller avbryta utcheckningen medan det är öppet i Microsoft Office Online.",
	    new_document_classification: "Klassificering:",
	    new_document_classification_help: "Återställer klassen, egenskaperna och den överordnade mappen, om en sådan finns, till källdokumentet. När ett dokument läggs till genom att använda en inmatningsmall, väljs källdokumentets inmatningsmall, om en sådan finns, automatiskt. Källdokumentets egenskaper används som standardvärden men mappen och klassen i inmatningsmallen bevaras.",
		new_document_classification_use_source_document: "Använd källdokument:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0}-typsikon",
		repository_name_and_type: "${0}-namn och typ",
		select_class_label: "Välj ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Visa detaljer",
		detail_view_button: "Detaljer",
		magazine_view_button_tooltip: "Magasinvy",
		magazine_view_button: "Magasin",
		filmstrip_view_button_tooltip: "Visa som bildspel",
		filmstrip_view_button: "Bildspel",

		magazine_view_show: "Visa i magasinvy",
		detail_view_show: "Visa i detaljvy",

		total_count_item: "objekt",
		total_count_items: "objekt",
		total_count_more_items: "Fler än ${0} objekt",

		extension_changed: "Det valda filtillägget matchar inte originalets. Välj en annan fil.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Det valda visningsprogrammet stöder inte alla filtyper. Om du sparar den här visningsprogramsmappningen kan du få problem när du visar dokument. Det rekommenderas att du väljer ett visningsprogram som stöder alla filtyper när alternativet Alla filtyper är valt.<br><br><b>Tips:</b> Följande visningsprogram stöder alla filtyper:<ul><li>Applet-visningsprogram</li><li>AJAX-visningsprogram</li><li>HTML-konvertering</li><li>PDF-konvertering</li><li>Webbläsare</li></ul>",
		file_type_any: "Alla filtyper",
		file_type_any_hover: "Välj det här alternativet om du vill använda det valda visningsprogrammet för att visa alla dokument, oberoende av filtyp. Alternativet stöds för följande visningsprogram:<br><br><ul><li>Applet-visningsprogram</li><li>AJAX-visningsprogram</li><li>HTML-konvertering</li><li>PDF-konvertering</li><li>Webbläsare</li></ul><br><br><b>Kom ihåg!</b> Om du för det mesta vill använda specifika visningsprogram ska du placera alla mappningar som har det här alternativet i slutet av visningsprogramsmappningen. ",
		file_type_input: "Ny filtyp:",

		mime_type_input: "Ny MIME-typ:",
		mime_type_input_invalid: "Den nya MIME-typen får inte innehålla något av följande tecken: ,",
		mime_type_available: "Tillgängliga MIME-typer",
		mime_type_selected: "Valda MIME-typer",
		file_type_input: "Ny filtyp:",
		file_type_input_invalid: "Den nya filtypen får inte innehålla något av följande tecken: ,",
		file_type_available: "Tillgängliga filtyper",
		file_type_selected: "Valda filtyper",
		file_type_header: "Filtyp",
		viewer: "Visningsprogram:",
		viewer_viewer: "Visningsprogram",
		viewer_view: "Visa",
		viewer_preview: "Förhandsvisa",
		viewer_merge_and_split: "Sammanfoga och dela",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Förhandsgranska endast",
		preview_only_label: "(förhandsgranskning)",
		preview_only_hover: "Visningsprogramsmappningen används endast när användaren klickar på <b>Förhandsgranska</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Behållaren har inga visningsfunktioner. Välj en annan behållare.",

		repository_community_teamspace_message: "En annan behållare är avsedd för gemenskapens biblioteksbehållare. Om du vill fortsätta att använda den befintliga behållaren som gemenskapens biblioteksbehållare väljer du <b>Nej</b> innan du sparar ändringarna för att förhindra att den befintliga behållaren ersätts med den här behållaren.",

		favorites_empty: "Du har inte några favoriter ännu.",
		syncItems_empty: "Du har inte synkroniserat några filer ännu.",

		root_folder_id: "Rotmapps-ID",
		unified_searches: "Flerbehållarsökningar:",
		max_results: "Antal resultat:",
		direct_retrieve_enabled: "Direkthämtning:",
		itemTypesToDisplay: "Objekttyper som visas:",
		allItemTypes: "Alla objekt",
		include_attr_group_name: "Attributgruppsbeskrivningar i attributvisningsnamn:",
		admin_repcfg_include_attr_group_name_hover: "Som standard ingår attributgruppsbeskrivningen i namnen på attributgruppsattribut. På det sättet kan användarna se vilken attributgrupp som ett attribut tillhör när de arbetar med attribut.<br>Exempel: Användare kan se följande namn för ett attributgruppsattribut: Document Settings.Document Type.<br><br>Om du avaktiverar det här alternativet används endast attributgruppsbeskrivningen som namn på attributet.<br>Exempel: Användarna ser namnet Document Type.<br><br>Utan attributgruppsbeskrivningen kan användarna inte se om Document Type är ett enkelt attribut eller ett attributgruppsattribut.",
		documentItemTypesOnly: "Endast dokumentmodellsobjekt",
		object_store: "Symboliskt namn för objektlager:",
		object_store_display_name: "Visningsnamn för objektlager:",
		teamspaceUpgradeMsg: "Grupprummen uppdateras när du sparar behållarkonfigurationen. Om du har många grupprum kan uppdateringen ta flera minuter.",
		synchUpgradeMsg: "Synkroniseringsmodulen i behållaren uppdateras när du sparar behållarkonfigurationen.",
		protocol: "Protokoll:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID för CMIS-behållare:",
		cmis_url: "URL till bindningstjänstdokumentet för CMIS AtomPub:",
		trace_level: "Spårningsnivå",
		trace_dir: "Spårningskatalog",
		temp_dir: "Temporär katalog",
		show_document_location: "Visa dokumentplats",
		max_folders: "Största antal mappar",
		afp_conversion: "AFP-konvertering",
		line_conversion: "Raddatakonvertering",
		max_hits: "Största antal träffar",
		folder_search_expresssion: "Mappsökuttryck",
		max_item_types: "Största antal objekttyper",
		max_worklists: "Största antal arbetslistor",
		update_storage_collection: "Uppdatera lagringssamling",
		include_mime_types_in_search_results: "Ta med i MIME-typer i sökresultaten",
		object_type: "Objekttyp",
		object_type_document: "Dokument",
		object_type_folder: "Mappar",
		file_label: "Fil:",
		plugin_jarfile_path_label: "JAR-filsökväg:",
		plugin_classfolder_path_label: "Klassfilsökväg:",
		plugin_classname_label: "Klassnamn:",
		plugin_id_label: "Insticksprogram-ID:",
		class_label: "Klass",
		configuration: "Konfiguration",
		connect_repository: "Anslut...",
		server_type: "Servertyp",
		timeout_in_seconds: "Tidsgräns (i sekunder):",
		default_search_template: "Standardsökning",
		search_filtered_properties: "Sökbara egenskaper",
		property_contains_label: "Egenskapen innehåller",
		class_contains_label: "Klassen innehåller",
		search_filtered_operators: "Sökoperatorer",
		default_search_results: "Sökresultat",
		data_type: "Datatyp",
		status_bar: "Statusfält",
		operators_for: "Operatorer för:",
		currentUser: "Nuvarande användare",
		nameContains: "Namnet innehåller",
		searchFor: "Sök efter",
		server_autentication: "Serverautentisering (OAuth 2.0 med JWT)",
		standard_authentication: "Standardautentisering (3-ledad OAuth2.0)",
		developer_authentication: "Utvecklarautentisering",
		enterprise_id: "Enterprise-ID:",
		public_key_id: "ID för allmän nyckel:",
		private_key_path: "Sökväg till privat nyckelfil:",
		server_user_email: "E-postadress till serveranvändare",

		filter_builder_tooltip: "Definiera filter",

		// Launch bar
		launchbar_home: "Öppna startsidan",
		launchbar_favorites: "Öppna Favoriter",
		launchbar_browse: "Öppna bläddringsvy",
		launchbar_browse_popup: "Öppna listan Bläddra",
		launchbar_search: "Öppna sökvy",
		launchbar_search_popup: "Öppna listan Sök",
		launchbar_teamspaces: "Öppna grupprumsvy",
		launchbar_teamspaces_popup: "Öppna listan Grupprum",
		launchbar_work: "Öppna arbetsvy",
		launchbar_work_popup: "Öppna listan Arbete",
		launchbar_entry_templates: "Öppna inmatningsmallsvy",
		launchbar_entry_templates_popup: "Öppna listan Inmatningsmallar",
		launchbar_admin: "Öppna administrationsvy",

		admin_sync_server: "Sync Services",
		admin_settings: "Inställningar",
		admin_interface_text: "Etiketter",
		admin_interface_text_desktop: "Skrivbord:",
		admin_desktops: "Skrivbord",
		admin_repositories: "Behållare",
		admin_mobile: "Mobil",
		admin_menus: "Menyer",
		admin_reason_codes: "Redigeringsorsaker",
		admin_plugins: "Insticksprogram",
		admin_plugins_state_enabled: "Insticksprogrammet är aktiverat",
		admin_plugins_state_disabled: "Insticksprogrammet är avaktiverat",
		admin_plugins_version: "Version:",
		admin_plugins_version_heading: "Version",
		admin_plugins_icon: "Insticksprogramikon",
		admin_viewer_mapping_icon: "Visningsprogrammappningsikon",
		admin_viewer_defs: "Visningsprogrammappningar",
		admin_viewer_dialog_title: "Mappning",
		admin_viewer_dialog_new_title: "Ny mappning",
		admin_viewer_dialog_instructions: "Med en mappning anger du vilket visningsprogram som ska användas för filerna i en behållare. Du kan skapa flera mappningar om du vill ange flera visningsprogram för olika typer av filer. Du kan använda en MIME-typ eller ett filtillägg när du definierar en mappning. Mappningar med filtillägg mappas till dokumentnamn. Exempel: En mappning med filtypen gif mappas till dokumentnamn som avslutas med filtillägget.gif",
		admin_desktop_viewer_defs: "Visningsprogramsmappning:",
		admin_desktop_viewer_defs_hover: "Med visningsprogrammappningen anger du vilket visningsprogram som ska användas till att öppna olika typer av dokument i behållaren.<br><br>Du kan skapa nya visningsprogramsmappningar i avsnittet <b>Visningsprogrammappningar</b> i administrationsverktyget.",
		admin_desktops_used: "Används på skrivbord",
		admin_desktop_additional_settings: "Fler inställningar:",
		admin_default_desktop: "Ange som standardskrivbord",
		admin_default_desktop_header: "Standardskrivbord",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Skrivbordsikon",

		// Themes
		admin_themes: "Teman",
		admin_theme_list_instructions: "Du kan skapa ett tema så att det blir lättare att anpassa webbklienten för organisationen. Det går att skapa flera teman om det behövs fler färger, teckensnitt eller logotyper för olika skrivbord i miljön.<br><br>När du har skapat ett tema kan du tillämpa det på ett skrivbord genom att konfigurera det på fliken <b>Utseende</b> på skrivbordet.",
		admin_theme_instructions: "Skapa ett tema som styr färger och teckensnitt som visas i webbklienten. Du kan även använda temat för att ändra logotypen, programnamnet och copyrighttexten som visas på inloggningssidan samt i banderollen.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nytt tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Vill du ta bort valda teman?\n${0} teman har markerats.",
		admin_theme_color: "Färg",
		admin_theme_text: "Text",
		admin_theme_solid: "Solitt",
		admin_theme_gradient: "Tonat",
		admin_theme_box: "Box",
		admin_theme_color_label: "Färg ${0}:",
		admin_theme_name_invalid: "Temanamnet får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Tema-IDt måste vara unikt och du kan inte ändra det efter att du har sparat temat.<br><br>IDt får endast bestå av alfanumeriska tecken.",
		admin_theme_name_hover: "Namnet får inte innehålla följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatiskt",
		admin_theme_logo_url_hover: "Ange URL-adressen till logotypfilen. Om logotypen finns på samma webbprogramserver som webbklienten anger du en relativ URL. Exempel: /mycustomizations/banner_logo.png<br><br>Vi rekommenderar att logotypen har en transparent bakgrund.",
		admin_theme_color_palette_title_heading: "Färgpalett",
		admin_theme_color_palette_help_text: "Skapa färgpaletten för ditt tema genom att använda hexvärdet eller färgväljaren. Du kan lägga till valfritt antal färger.",
		admin_theme_color_add_button_label: "Lägg till färg",
		admin_theme_color_remove_button_label: "Ta bort färg",
		admin_theme_global_title_heading: "Programövergripande element",
		admin_theme_global_font: "Teckenfamilj",
		admin_theme_global_font_hover: "Välj det teckensnitt som ska användas i webbklienten. Teckensnitt listas i förvald ordning. Nästa teckensnitt i listan används endast om föregående teckensnitt inte har installerats på klientdatorn.",
		admin_theme_global_framework_color_label: "Ramverksfärg:",
		admin_theme_global_framework_color_hover: "Välj den färg som ska användas för följande element:<ul><li>Namnlister i fönster</li><li>Markeringsfärg längst upp på vald flik</li><li>Vyikoner för innehållslistan (vyn Detaljer, Magasin, Bildspel)</li></ul><br>Den här färgen används inte för avgränsare mellan avsnitt i webbklienten. Om du vill byta färg på avgränsare måste du skapa ett insticksprogram som tillhandahåller en anpassad CSS-fil.",
		admin_theme_color_global_toolbar: "Färg på globalt verktygsfält:",
		admin_theme_color_global_toolbar_hover: "Om du inkluderar det globala verktygsfältet i webbklienten väljer du en färg för det.<br><br><b>Tips!</b> Verktygsfältet visas i banderollen längst upp i webbklienten vilket gör att verktygsfältets färg ska komplettera banderollfärgen.",
		admin_theme_global_selected_color: "Färg på valda objekt:",
		admin_theme_global_selected_color_hover: "Välj den färg som ska användas för valda objekt i bläddringsträdet, sökträdet och innehållslistan.<br><br>Pekfärgen (den färg som används när någon pekar på ett objekt) ärvs från den här färgen.",
		admin_theme_global_link_color: "Länkfärg:",
		admin_theme_global_link_color_hover: "Välj den färg som ska användas för alla klickbara URL-adresser i webbklienten. Exempel: Den här färgen används för Läs mer-länkar som förekommer på många ställen i webbklienten.",
		admin_theme_login_title_heading: "Element på inloggningssidan",
		admin_theme_page_background_label: "Bakgrundsfärg på inloggningssidan:",
		admin_theme_login_page_background_hover: "Välj den färg som ska visas bakom inloggningsrutan.",
		admin_theme_login_pane_background_label: "Bakgrundsfärg på inloggningsrutan:",
		admin_theme_login_pane_background_hover: "Välj en färg för inloggningsrutan. Färgen ska komplettera bakgrundsfärgen på inloggningssidan.",
		admin_theme_text_color: "Textfärg:",
		admin_theme_login_pane_text_color_hover: "Välj en färg för texten i inloggningsrutan. Färgen används för välkomsttexten och fältetiketterna. Den ska passa mot bakgrundsfärgen och färgen på inloggningsrutan.",
		admin_theme_copyright_text: "Copyrighttext:",
		admin_theme_copyright_text_hover: "Ange om copyrighttext ska visas på inloggningssidan.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Ingen copyrighttext",
		admin_theme_banner_title_heading: "Banderollelement",
		admin_theme_text_icons_color: "Text- och ikonfärg:",
		admin_theme_icon_color_label: "Ikonfärg:",
		admin_theme_shadow_label: "Skugga:",
		admin_theme_banner_text_icons_hover: "Välj en färg för texten och ikonerna i banderollen. Den ska passa mot bakgrundsfärgen och färgen på banderollen.",
		admin_theme_banner_product_name_label: "Produktnamn:",
		admin_theme_banner_product_name_hover: "När du skapar ett skrivbord kan du ange ett anpassat namn som ska visas för programmet. Om du inte gör det används IBM Content Navigator som produktnamn. Ange om programnamnet som har definierats för skrivbordet eller en ersättningsbild ska visas.",
		admin_theme_banner_product_name_desktop_defined_label: "Använd skrivbordsnamn",
		admin_theme_banner_product_name_image: "Använd anpassad logotyp (URL)",
		admin_theme_background_color_label: "Bakgrundsfärg:",
		admin_theme_style_label: "Format:",
		admin_theme_banner_color_hover: "Välj en färg för banderollen längst upp i programmet.<br><br><b>Tips</b>! Kontrollera att färgen på banderolltexten passar till bakgrundsfärgen.",
		admin_theme_buttons_title_heading: "Knappar",
		admin_theme_navigation_title_heading: "Navigeringselement",
		admin_theme_navigation_icon_selected_label: "Färg på vald ikon:",
		admin_theme_navigation_background_hover: "Välj en färg för bakgrunden på funktionsnavigeringsfältet.",
		admin_theme_navigation_icon_color_hover: "Välj en färg för ikonerna i funktionsnavigeringsfältet. När standardlayouten används för ett skrivbord ska den här färgen kontrastera mot funktionsmenyns bakgrund. När klassisk layout används för ett skrivbord ska den här färgen kontrastera mot funktionsnavigeringsfältets bakgrund.",
		admin_theme_navigation_icon_selected_hover: "Välj en färg för vald funktion i funktionsnavigeringsfältet. Färgen ska komplettera färgen på ikonerna och bakgrundsfärgen på funktionsnavigeringsfältet.<br><br>När klassisk layout används för ett skrivbord används den här färgen som pekfärg i funktionsnavigeringsfältet.",
		admin_theme_button_background_color_hover: "Välj en färg för bakgrunden på knappar.",
		admin_theme_button_style_hover: "Välj ett knappformat.",
		admin_theme_button_text_icon_color_hover: "Välj en färg för text och bilder på knappar.",
		admin_theme_no_logo_label: "Ingen logotyp",
		admin_theme_custom_logo_label: "Anpassad logotyp (URL)",
		admin_theme_banner_type: "Banderollfyllningsformat:",
		admin_theme_banner_type_hover: "Ange om banderollen ska ha en solid färg eller en tonad färg. Om du väljer en tonad banderoll blir den färg du väljer den mörkaste i banderollen.<br><br><b>Tips</b>! Kontrollera att färgen på banderolltexten passar till bakgrundsfärgen.",
		admin_theme_icon: "Temaikon",
		admin_theme_buttons_and_links_title_heading: "Knappar, fält och länkar",
		admin_theme_button_style_label: "Knappformat:",
		admin_theme_theme_style_label: "Temaformat:",
		admin_theme_theme_style_hover: "Välj formatet som temat ska baseras på. Du kan när som helst ändra formatet när du skapar eller redigerar ett tema. När du byter från ett format till ett annat, återställs standardvärdena.",
		admin_theme_accent_color_label: "Accentfärg:",
		admin_theme_accent_color_hover: "Välj färgen som ska användas för fältet överst i en dialogruta och för inläsningsrotationen.",
		admin_theme_global_toolbar_text_color_label: "Textfärg på globalt verktygsfält:",
		admin_theme_global_toolbar_text_color_hover: "Om du inkluderar det globala verktygsfältet i webbklienten väljer du en färg för texten i verktygsfältet.",
		admin_theme_banner_text_color_hover: "Välj den färg som ska användas för texten i banderollen.",
		admin_theme_banner_icon_color_hover: "Välj den färg som ska användas för ikonerna i banderollen.",
		admin_theme_button_color_label: "Färg:",
		admin_theme_button_color_hover: "Välj den färg som ska användas för följande element:<ul><li>Namnlister i fönster</li><li>Markeringsfärg längst upp på vald flik</li><li>Vyikoner för innehållslistan (vyn Detaljer, Magasin, Bildspel)</li><li>Knappar, fält och länkar</li></ul>Färgen som används när en användare pekar på en knapp ärvs från den här färgen. Färgen används inte för avgränsare mellan avsnitt i webbklienten. Om du vill byta färg på avgränsare måste du skapa ett insticksprogram som tillhandahåller en anpassad CSS-fil.",
		admin_theme_theme_style_col_header: "Temaformat",

		admin_syncserver_consistency_checker: "Konsekvenskontrollfunktion:",
		admin_syncserver_consistency_checker_hover: "Kör konsekvenskontrollfunktionen så att Sync Services-databasen har aktuell information om status för varje serverobjekt. Exempel: Kör konsekvenskontroller efter en Syn Services-avstängning för att hämta information om dokument som uppdaterades i behållaren under avstängningen.",
		admin_syncserver_consistency_checker_button: "Kör konsekvenskontroll",
		admin_syncserver_consistency_checker_started: "Startades:",
		admin_syncserver_consistency_checker_ended: "Avslutades:",
		admin_syncserver_consistency_checker_duration: "Varaktighet:",
		admin_syncserver_consistency_checker_items_processed: "Bearbetade synkroniseringsobjekt:",
		admin_syncserver_consistency_checker_items_processed_success: "Synkroniseringsobjekt utan bearbetningsfel:",
		admin_syncserver_consistency_checker_items_discovered: "Nya behållarobjekt:",
		admin_syncserver_consistency_checker_change_updates: "Totalt antal uppdateringar:",
		admin_syncserver_consistency_checker_state: "Läge:",
		admin_syncserver_consistency_checker_state_done: "Klart",
		admin_syncserver_consistency_checker_state_running: "Körs",
		admin_syncserver_consistency_checker_user: "Skickades av:",
		admin_syncserver_consistency_checker_scheduled: "Schemalades:",

		admin_syncserver_dbcleanup: "Databasrensning",
		admin_syncserver_dbcleanup_hover: "Kör databasrensningsverktyget för att ta bort oanvända enheter och objekt som inte längre synkroniseras från databasen.",
		admin_syncserver_dbcleanup_button: "Databasrensning",
		admin_syncserver_dbcleanup_state_done: "Klart",
		admin_syncserver_dbcleanup_state_running: "Körs",
		admin_syncserver_dbcleanup_started: "Startades:",
		admin_syncserver_dbcleanup_ended: "Avslutades:",
		admin_syncserver_dbcleanup_state: "Läge:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Borttagna behållare:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Borttagna synkroniserade objekt:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Borttagna enheter:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Enheter som har upphört att gälla:",

		admin_syncserver_publicSyncUrl: "Allmän Sync Services-URL:",
		admin_syncserver_publicSyncUrl_hover: "Ange URL-adressen för kommunikation mellan behållare och IBM Content Navigator Sync Services. Standardformatet för URL-adressen är http://allmän_synk-URL:portnummer/sync/notify.",

		admin_syncserver_managed: "Synkroniseringsklientinställningar:",
		admin_syncserver_managed_hover: "Användare kan inte ändra dessa inställningar i IBM Content Navigator-synkroniseringsklienten.",
		admin_syncserver_managed_subfolder: "Mappnivåer att synkronisera",
		admin_syncserver_managed_subfolder_hover: "Om en användare synkroniserar en mapp anges maximalt antal mappar som ska synkroniseras. Exempel: Om en användare anger 3 mappnivåer synkroniseras den mappen och 2 undermappar.<br><br>Kontrollera att miljön är anpassad för mängden synkronisering som skapas av den här inställningen.",
		admin_syncserver_managed_subfolder_all: "Alla undermappar",
		admin_syncserver_managed_subfolder_none: "Inga undermappar",
		admin_syncserver_managed_subfolder_no_more: "Begränsade nivåer",
		admin_syncserver_managed_subfolder_levels: "mappar",
		admin_syncserver_managed_schedule: "Synkroniseringsschema",
		admin_syncserver_managed_schedule_hover: "Kontrollera att miljön är anpassad för mängden synkronisering som skapas av synkroniseringsschemat.<br><br>Maximalt intervall är 24 timmar eller 1440 minuter.<br><br>Användare kan åsidosätta synkroniseringsschemat genom att klicka på <b>Synkronisera nu</b> i klienten.",
		admin_syncserver_managed_schedule_manual: "Synkronisera manuellt",
		admin_syncserver_managed_schedule_continuous: "Synkronisera löpande",
		admin_syncserver_managed_schedule_every: "Synkronisera vid angivna intervall",
		admin_syncserver_managed_schedule_minutes: "minuter",
		admin_syncserver_managed_schedule_hours: "Timmar",

		// redaction codes
		admin_new_reason_code: "Ny redigeringsorsak",		
		admin_reason_code_name_invalid: "Namnet på redigeringsorsaken får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Beskrivningen får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Beskrivningen får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Namnet får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Beskrivning:",
		admin_reason_code_applications_hover: "Listan över Datacap-program som refererar redigeringsorsaken.",
		admin_reason_code_applications: "Datacap-program",
		admin_delete_confirmation_reason_codes: "Vill du ta bort valda redigeringsorsaker?",
		admin_delete_confirmation_reason_code: "Vill du ta bort vald redigeringsorsak?",
		admin_reason_code_heading: "Redigeringsorsak: <b>${0}</b>",
		admin_reason_code_list_instructions: "Redigeringsorsaker indikerar varför känslig information skyddas genom att döljas från vyn. Varje orsak identifierar en typ av känslig information som döljs för vanliga användare.",
		admin_reason_code_instructions: "Du kan skapa en redigeringsorsak för varje typ av känslig information. Du kan sedan använda orsaken i en redigeringsprincip för att definiera vilka som kan se informationen och vilka som kan skapa och ändra redigeringar.",
		admin_reason_code_applications_label: "Datacap-program",
		admin_reason_code_repositories: "Behållare",
		admin_reason_code_repositories_label: "Behållare",
		admin_reason_code_repositories_hover: "Listan över ICN-behållare som refererar redigeringsorsaken.",
		admin_reason_code_repositories_default_value: "Inte angivet",
		admin_reason_code_description_label: "Beskrivning",
		admin_reason_code_applications_default_value: "Inte angivet",
		admin_redaction_reasons: "Redigeringsorsaker",
		admin_redactions: "Rollbaserad redigering",
		admin_redactions_policies_roles: "Principer och roller",
		admin_reasons: "Orsaker",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Det går inte att ändra ett ID,  men det går att kopiera det till Urklipp.",
		// Role based administration
		admin_rba: "Rollbaserad skrivbordsadministration",
		admin_rba_mobile_access_enabled: "Skrivbordet är aktiverat för mobil åtkomst.",
		admin_rba_mobile_access_disabled: "Skrivbordet är inte aktiverat för mobil åtkomst.",
		admin_rba_confirm_delete_multiple: "Vill du ta bort de valda skrivbordsrollerna?",
		admin_rba_confirm_delete_single: "Vill du ta bort den valda administrationsrollen?",
		admin_rba_delete_multi_role_desktop: "En eller flera av de roller som du valt är tilldelade till ett skrivbord. Du måste ta bort rollerna från skrivborden innan du kan ta bort dem.",
		admin_rba_delete_single_role_desktop: "Rollen som du valde är tilldelad till ${0}-skrivbord. Du måste ta bort rollen från skrivbordet innan du tar bort det.",
		admin_desktop: "Skrivbord",
		admin_rba_instructions: "Du kan skapa och hantera skrivbordsadministrationsroller, som associerar behörigheter som getts till skrivbordsadministratörer.",
		admin_rba_not_used: "${0} används inte för några skrivbord.",
		admin_rba_desktops: "<b>${0} används för följande skrivbord:</b>",
		admin_rba_new_role: "Ny roll",
		admin_rba_name_invalid: "Administrationsrollnamnet får inte innehålla följande tecken: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Beskrivningen får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Beskrivningen får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Namnet får inte innehålla något av följande tecken: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Beskrivning:</b> ${0}",
		admin_rba_membership: "Medlemskap",
		admin_rba_general_priv: "Allmänt",
		admin_rba_appearance_priv: "Utseende",
		admin_rba_desktop_config_priv: "Skrivbordskonfiguration",
		admin_rba_app_name_priv: "Programnamn",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Visningsprogramsmappning",
		admin_rba_merge_split_priv: "Sammanfoga och dela",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Menyer",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Verktygsfält",
		admin_rba_ctx_menus_priv: "Kontextmenyer",
		admin_rba_office_ribbon_priv: "MS Office - Banderollfältskommandon",
		admin_rba_office_menues_priv: "MS Office - Kontextmenyer",
		admin_rba_addl_settings_priv: "Ytterligare inställningar",
		admin_rba_mobile_priv: "Mobil",
		admin_rba_add_doc_dlg_priv: "Dialogrutan Lägg till dokument",
		admin_rba_doc_mgmt_priv: "Dokumenthantering",
		admin_rba_def_redaction_priv: "Standardredigeringsalternativ",
		admin_rba_add_photos_priv: "Lägga till foton från kameran och fotobiblioteket",
		admin_rba_time_stamp_priv: "Tidsstämpel",
		admin_rba_add_docs_folders_priv: "Lägga till dokument och skapa mappar i behållaren",
		admin_rba_open_docs_priv: "Öppna dokument i andra program",
		admin_rba_office_config_priv: "Office-konfiguration",
		admin_rba_tab_label_priv: "IBM ECM-fliketikett",
		admin_rba_feature_sel_priv: "Funktionsval",
		admin_rba_general_config_priv: "Allmän konfiguration",
		admin_rba_favorites_priv: "Favoriter",
		admin_rba_add_options_priv: "Tilläggsalternativ i gruppen Redigera",
		admin_rba_browse_priv: "Bläddra",
		admin_rba_outlook_int_priv: "Outlook-integrering",
		admin_rba_search_priv: "Sök",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Ärende",
		admin_rba_desktop_feat_priv: "Skrivbordsfunktioner",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Visade funktioner",
		admin_rba_branding_priv: "Varumärkning",
		admin_rba_home_priv: "Startsida",
		admin_rba_main_color_priv: "Huvudfärg",
		admin_rba_sec_color_priv: "Sekundär färg",
		admin_rba_teamspaces_priv: "Grupprum",
		admin_rba_rbr_priv: "Rollbaserad redigering",
		admin_rba_et_mgr_priv: "Hantera innehållsmallar",
		admin_rba_policies_roles_priv: "Hantera principer och roller",
		admin_rba_work_priv: "Arbete",
		admin_rba_reasons_priv: "Orsakskoder",
		admin_rba_tasks_priv: "Asynkrona uppgifter",
		admin_rba_auth_priv: "Autentisering",
		admin_rba_all_privs: "Alla behörigheter",
		admin_rba_some_privs: "Vissa behörigheter",
		admin_rba_no_privs: "Inga behörigheter",
		admin_add_users_groups_priv: "Lägg till användare och grupper",
		admin_url_features_priv: "Hantera URL-funktioner",
		admin_plugin_features_priv: "Hantera insticksfunktioner",
		admin_addl_components_priv: "Ytterligare komponenter",
		admin_global_toolbar_priv: "Globalt verktygsfält",
		admin_status_bar_priv: "statusfält",
		admin_refresh_message: "Du måste uppdatera webbläsaren om du ska använda uppdaterade data.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Du måste uppdatera webbläsaren om du vill använda det uppdaterade standardskrivbordet.",
		admin_desktop_refresh_message: "Du måste uppdatera webbläsaren om du ska använda det uppdaterade skrivbordet.",
		admin_action_open: "Öppna",
		admin_action_edit: "Redigera",
		admin_action_copy: "Kopiera",
		admin_action_delete: "Ta bort",
		admin_action_copy: "Kopiera",
		admin_action_new: "Skapa nytt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Det här IDt används redan. Du måste ange ett unikt ID.",

		admin_searchable_properties_for: "Sökbara egenskaper för:",
		admin_repository_new: "Ny behållare",
		admin_desktop_new: "Nytt skrivbord",
		admin_desktop_file_documents: "Kräv att användare ska spara nya dokument och mappar i en mapp.",
		admin_desktop_file_documents_hover: "Välj det här alternativet om du vill att användarna måste välja en mapp när de lägger till objekt i behållaren. Om du inte väljer det här alternativet kan användarna lägga till dokument (IBM FileNet P8) eller dokument och mappar (IBM Content Manager) utan att spara dem i en mapp.",
		admin_desktop_show_security_tab: "Visa säkerhetsinställningar under tilläggs- och incheckningsåtgärder",
		admin_desktop_show_security_hover: "<b>Endast IBM FileNet P8-användare.</b>  Välj det här alternativet om du vill att användarna ska kunna ändra behörigheten till dokument och mappar när de lägger till eller checkar in objekt på skrivbordet.",
		admin_desktop_configure_security_inheritance: "Tillåt användare att konfigurera behörighetsarv för mappar",
		admin_desktop_configure_security_inheritance_hover: "<b>Endast IBM FileNet P8-användare.</b>  Välj det här alternativet om du vill att användarna ska kunna anpassa åtkomsten till objekt i en mapp genom att ändra behörighetsarv för mappar. Om du väljer det här alternativet kan användarna ange om användare och grupper kan ärva behörighet från:<ul><li>en mapp</li><li>en mapp och direkt underordnad mappar</li><li>en mapp och alla underordnade mappar</li></ul>",
		admin_desktop_appearance: "Utseende",
		admin_desktop_appearance_instruction: "Du kan anpassa utseendet på skrivbordet genom att ändra inloggningssidan och banderollen som visas.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "Layouten anger vilka funktioner som kan visas i webbklienten och hur webbklientens innehåll ordnas.<br><br><b>Tips!</b> Du kan definiera anpassade layouter genom att skapa insticksprogram. Du måste registrera insticksprogrammet i administrationsverktyget innan du kan välja en anpassad layout.",
		admin_desktop_layout_default: "Standard",
		admin_desktop_layout_custom: "Anpassad",
		admin_desktop_enable_workflow_email: "Aktivera skrivbordet för e-postavisering för FileNet P8-arbetsflöde",
		admin_desktop_enable_workflow_email_hover: "Endast FileNet P8-användare. Välj det här alternativet om användare ska kunna öppna webbklienten från URLer som är inkluderade i e-postaviseringar som genereras av Process Engine.<br /><br />Om du inte aktiverar alternativet för alla skrivbord, kan användare inte logga in till webbklienten från URLer i aviseringar.<br /><br />Om du aktiverar det här alternativet på flera skrivbord och mer än ett skrivbord uppfyller de kriterier som anges i URL-adressen i aviseringen, använder webbklienten det första skrivbord som matchar kriterierna. ",
		admin_desktop_prevent_create_new_search: "Förhindra att användare skapar sökningar",
		admin_desktop_prevent_create_new_search_hover: "Alternativet begränsar användare till att använda endast befintliga sökningar. De kan inte skapa sökningar utan slut som kanske inte är optimerade. </br></br>Den här inställningen påverkar inte grupprum. Behörigheten att skapa sökningar i ett grupprum styrs av den roll som användaren har för grupprummet.",
		admin_desktop_prevent_create_new_unified_search: "Förhindra att användare skapar flerbehållarsökningar",
		admin_desktop_prevent_create_new_unified_search_hover: "Alternativet begränsar användare till att använda enbart befintliga flerbehållarsökningar. De kan inte skapa flerbehållarsökningar utan slut som inte kan optimeras.",
		admin_desktop_hide_entry_template_not_found_warning: "Dölj varningen som visas när inmatningsmallen inte hittas.",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Välj det här alternativet om du vill dölja varningsmeddelandet som visas när objektegenskaper redigeras och tillhörande inmatningsmall inte hittas.",
		admin_desktop_show_class_role_security_selection: "Tillåt användare att konfigurera rollbaserad säkerhet i inmatningsmallar",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Endast IBM FileNet P8-användare.</b> Välj det här alternativet om användarna ska kunna konfigurera inmatningsmallar för att använda rollbaserad säkerhet när de ställer in säkerhet i dokument och/eller mappar genom att använda inmatningsmallar. Om du väljer det här alternativet kan inmatningsmallsredigerare ange om rollsäkerhetsobjekt tillämpas på en inmatningsmallsdefinition.",
		admin_desktop_show_primary_multi_part: "Öppna endast det primära dokumentet i visningsprogram",
		admin_desktop_show_primary_multi_part_hover: "<b>Endast IBM FileNet P8-användare.</b> Välj det här alternativet om du vill att endast den primära dokumentfilen ska öppnas i visningsprogrammet. Dokument kan ha flera associerade filer. Det här alternativet öppnar endast den primära fil som är associerad med dokumentet.",
		admin_desktop_redaction_save_mode: "Standardredigeringsalternativ:",
		admin_desktop_redaction_save_mode_hover: "Välj standardredigeringssparläge för ViewONE Virtual-visningsprogrammet:</br>* Be alltid användaren att välja: Dialogrutan visas när redigeringsläget öppnas, för att fråga användaren om de vill checka in som en ny version, skapa ett nytt dokument eller hämta innehåll. </br>* Checka in som ny version: Sparar alltid det redigerade innehållet i en ny version av dokumentet.</br>* Spara som en helt nytt dokument: Sparar det redigerade innehållet som ett helt nytt dokument.</br>* Hämta och spara på klienten: Hämtar det redigerade innehållet till klientsystemet.",
		admin_desktop_redaction_save_mode_user_select: "Be alltid användaren att välja",
		admin_desktop_redaction_save_mode_new_version: "Checka in som ny version",
		admin_desktop_redaction_save_mode_new_document: "Spara som helt nytt dokument",
		admin_desktop_redaction_save_mode_local_content: "Hämta och spara på klienten",

		admin_desktop_document_add_mode: "Dialogrutan Lägg till dokument:",
		admin_desktop_document_add_mode_hover: "Ange den dialogruta som ska användas vid tillägg av dokument som skapats av IBM Content Navigator:<ul><li>Nytt permanent redigerat dokument</li><li>Nytt sammanfognings- och delningsdokument</li><li>Nytt Microsoft Office-dokument</li><li>Nytt Edit service-dokument</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Lägg till dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Lägg till dokument med en inmatningsmall",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Sammanfoga och dela:",
		admin_desktop_merge_and_split_enable_hover: "Ange om användare som använder skrivbordet ska kunna sammanfoga och dela dokument genom att använda ett visningsprogram som stöds.",

		admin_desktop_merge_and_split_show_checkin: "Be användare ange egenskapsvärden när de checkar in ändringar av ett dokument.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Om du väljer det här alternativet visas incheckningsdialogrutan när användare checkar in ändringar av ett dokument i läget Sammanfoga och dela.",

		admin_desktop_available_categories: "Tillgängliga funktioner",
		admin_desktop_selected_categories: "Valda funktioner",

		admin_layout_banner_title: "Banderoll och inloggningssida",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Programnamn:",
		admin_desktop_application_name_hover: "Ange programnamnet som ska visas i banderollen.<br><br>Tips! Definiera programnamnet för andra språk på fliken Etiketter/Skrivbordsetiketter.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Ange om IBM Content Navigator-standardtemat eller ett anpassat tema ska användas för skrivbordet. Om du vill anpassa ett tema måste du skapa det i avsnittet <b>Teman</b> i administrationsverktyget.",
		admin_desktop_login_logo: "Logotyp för inloggningssida:",
		admin_desktop_login_logo_hover: "Ange URL-adressen till en logotypfil om du vill ändra den logotyp som visas på inloggningssidan. Du bör dock använda ett anpassat tema om du vill ändra logotypen.",
		admin_desktop_login_logo_url_hover: "Ange URL-adressen till logotypfilen. Om logotypen finns på samma webbprogramserver som webbklienten anger du en relativ URL. Exempel: /mycustomizations/login_logo.png<br><br>Logotypen får inte vara större än 200 bildpunkter bred och 150 bildpunkter hög.<br><br>Vi rekommenderar att logotypen har en transparent bakgrund.",
		admin_desktop_banner_logo: "Banderollogotyp:",
		admin_desktop_banner_logo_hover: "Ange URL-adressen till en logotypfil om du vill ändra den logotyp som visas i banderollen. Du bör dock använda ett anpassat tema om du vill ändra logotypen.",
		admin_desktop_banner_logo_url_hover: "Ange URL-adressen till logotypfilen. Om logotypen finns på samma webbprogramserver som webbklienten anger du en relativ URL. Exempel: /mycustomizations/banner_logo.png<br><br>Logotypen får inte vara större än 72 bildpunkter bred och 36 bildpunkter hög.<br><br>Vi rekommenderar att logotypen har en transparent bakgrund.",
		admin_desktop_banner_background_color: "Bakgrundsfärg för banderollen:",
		admin_desktop_banner_background_color_hover: "Ange en anpassad färg om du vill ändra bakgrundsfärgen. Du bör dock använda ett anpassat tema om du vill ändra banderollfärgen.",
		admin_desktop_banner_background_color_custom_hover: "Ange ett hexadecimalt tal som definierar färgen på programbanderollen.",
		admin_desktop_banner_application_name_color: "Textfärg för programnamnet:",
		admin_desktop_banner_application_name_color_hover: "Ange en anpassad färg om du vill ändra färgen på programnamnet. Du bör dock använda ett anpassat tema om du vill ändra färgen på programnamnet.",
		admin_desktop_banner_application_name_color_custom_hover: "Ange ett hexadecimalt tal som definierar färgen på programnamnet.",
		admin_desktop_banner_menu_color: "Färg på banderollikonen:",
		admin_desktop_banner_menu_color_hover: "Om du ändrar bakgrundsfärgen på banderollen kan du behöva ändra färgschemat för ikonerna i banderollen så att de syns bättre. Ange om ljusa eller mörka banderollikoner ska visas.<br><br>Du bör dock använda ett anpassat tema om du vill ändra ikonfärgerna.",
		admin_desktop_login_page_content: "Inloggningssidans innehåll:",
		admin_desktop_login_page_content_hover: "Om du vill att mer information ska visas på inloggningssidan, t.ex. meddelanden om systemavbrott eller var användarna kan hitta hjälp om användarnamn eller lösenord, kan du ange URL-adressen till innehållet som ska visas.",
		admin_desktop_login_page_content_url_hover: "Ange URL-adressen till inloggningssidans innehåll. Om innehållet finns på samma programserver som webbklienten, anger du en relativ URL-adress. Exempel: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Lösenordsregler:",
		admin_desktop_password_rules_hover: "Om du vill ge användarna riktlinjer för lösenord, t.ex. förbjudna tecken eller minsta antal tecken, anger du URL-adressen till en sida som innehåller lösenordsreglerna.",
		admin_desktop_password_rules_url_hover: "Ange URL-adressen till lösenordsreglerna. Om de finns på samma webbprogramserver som webbklienten, anger du en relativ URL-adress. Exempel: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL-adress för användarhjälp:",
		admin_desktop_help_url_hover: "Du kan använda hjälpen som följde med IBM Content Navigator eller dirigera om användarna till ett anpassat hjälpinnehåll genom att göra något av följande:<br><br><ul><li>Dirigera till ett anpassat hjälpsystem</li><li>Lägg till hjälp för förekomsten av IBM Knowledge Center som är driftsatt med IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Ange URL-adressen till det anpassade hjälpsystemet. IBM Content Navigator utökar index.jsp?content=/com.ibm.usingeuc.doc/ genom att lägga till ett filnamn i slutet av den URL-adress som du anger. Om gränssnittslänkarna \"Läs mer\" ska fungera måste hjälpsystemet använda samma filnamn som den integrerade användarhjälpen. ",
		admin_desktop_deprecated_appearance_title: "Inaktuella inställningar",
		admin_desktop_deprecated_appearance_instructions: "Om du använder ett anpassat schema ersätts de här inställningarna av det anpassade schemat. Migrera inställningarna till ett anpassat schema som ger ett mer detaljerat format än inställningarna i det här avsnittet. Det går också att använda ett anpassat schema för flera skrivbord.",

		admin_desktop_plugins_title: "Aktivera eller avaktivera insticksprogram för skrivbordet.",
		admin_desktop_plugins_enable_all_plugins: "Aktivera alla driftsatta insticksprogram för användning med det här skrivbordet",
		admin_desktop_plugins_select_plugins: "Välj det driftsatta insticksprogram som ska aktiveras för användning med det här skrivbordet",
		admin_desktop_plugins_select_plugin: "Välj insticksprogram",

		admin_desktop_layout_features: "Visade funktioner:",
		admin_desktop_layout_features_hover: "Välj de funktioner som användarna ska kunna nå från skrivbordet. Funktionerna visas i den ordning de står i listan.<br><br>När du väljer en funktion kan du göra vissa anpassningar, t.ex. ange standardbehållare för funktionen.",
		admin_desktop_layout_default_repository: "Standardbehållare:",
		admin_desktop_layout_default_repository_layout_hover: "Ange vilken behållare som väljs som standard när användarna öppnar funktionen.",
		admin_desktop_layout_document_thumbnails: "Dokumentminiatyrer:",
		admin_desktop_layout_document_thumbnails_hover: "Ange om miniatyrer ska visas för dokumenten i dokumentinformationsrutan.<br><br>Visningen av miniatyrer kan försämra webbklientens prestanda.",
		admin_desktop_layout_show_filmstrip_view: "Bildspelsvy:",
		admin_desktop_layout_show_filmstrip_view_hover: "Välj om användarna får växla från innehållslistan till bildspelsvyn.<br><br>Bildspelsvyn genererar en förhandsgranskning av varje dokument som en användare väljer. Användningen av bildspelsvyn kan försämra webbklientens prestanda. Dessutom måste du konfigurera HTML-konverteringsvisningsprogrammet för dokumentförhandsgranskningar.",
		admin_enabled: "Aktivera",
		admin_disabled: "Avaktivera",
		admin_include: "Inkludera",
		admin_exclude: "Exkludera",
		admin_layout_teamspaces_default_repository: "Grupprum:",
		admin_layout_entry_templates_default_repository: "Inmatningsmallar:",
		admin_layout_other_features_default_repository: "Söka och bläddra:",
		admin_layout_work_default_repository: "Arbete:",
		admin_layout_default_feature: "Standardfunktion:",
		admin_default_category_placeholder: "Välj en funktion",
		admin_layout_default_feature_hover: "Välj vilken funktion som ska visas när användarna loggar in till skrivbordet.",
		admin_layout_default_feature_warning: "Om standardfunktionen ändras kan det påverka den tid som krävs för att läsa in programmet.",
		admin_layout_feature_list_header: "Funktion",
		admin_layout_show_statusbar: "Statusfält:",
		admin_layout_show_statusbar_hover: "Välj om statusfältet ska visas längst ned på skrivbordet.<br><br>Om du väljer att dölja statusfältet kan användarna inte se information om händelser utan fel, t.ex.:<ul><li>Dokumentet sparades i behållaren.</li><li>Sökningen returnerade 59 dokument.</li></ul>",
		admin_layout_show_magazineview: "Magasinvy:",
		admin_layout_show_magazineview_hover: "Välj om användarna får växla från innehållslistan till magasinvyn.<br><br>Magasinvyn ökar höjden på varje post i innehållslistan vilket minskar antalet objekt som samtidigt kan visas i innehållslistan.",
		admin_layout_show_detailsview: "Detaljvy:",
		admin_layout_show_detailsview_hover: "Ange om användarna ska kunna växla mellan innehållslistan och detaljvyn.<br><br>Detaljvyn maximerar antalet synliga rader i innehållslistan.",
		admin_feature_config_docinfopane_label: "Dokumentinformationsruta:",
		admin_feature_config_docinfopane_hoverhelp: "Välj om användarna kan nå dokumentinformationsrutan i den här funktionen.",
		admin_feature_config_docinfopane_default_label: "Standardbeteende:",
		admin_feature_config_docinfopane_expanded: "Expanderad",
		admin_feature_config_docinfopane_collapsed: "Komprimerad",
		admin_feature_config_docinfopane_expand_on_select: "Expandera när objekt väljs",
		admin_layout_features_title: "Skrivbordsfunktioner",
		admin_layout_features_instructions: "Välj vilka funktioner användarna kan nå från det här skrivbordet. Du kan även anpassa beteendet för varje funktion som ingår i skrivbordet.",
		admin_layout_components_title: "Fler skrivbordskomponenter",
		admin_layout_components_instructions: "Du kan avaktivera vissa skrivbordskomponenter om du vill ha ett mer strömlinjeformat gränssnitt eller om du vill förbättra prestanda för webbklienten.",
		admin_layout_featureconfig_instructions: "Välj en funktion att konfigurera",
		admin_layout_featureconfig_no_configuration: "Det finns ingen funktionskonfiguration tillgänglig.",
		admin_layout_featureconfig_label: "Konfiguration för funktionen ${0}",
		admin_layout_featureconfig_title: "Konfigurera funktion",
		admin_layout_featureconfig_taskManagerURL: "Om du ska använda den här funktionen måste du aktivera och konfigurera IBM Content Navigator för anslutning till Task Manager-tjänsten. Aktivera Task Manager-tjänsten i avsnittet <b>Inställningar</b> i administrationsverktyget.",
		admin_feature_config_show_my_checkouts_label: "Rutan Mina utcheckningar:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Rutan Mina utcheckningar gör att användarna kan söka efter alla objekt som de har checkat ut för en viss behållare. Ange om användarna kan nå Mina utcheckningar från startsidan.<br/><br/><b>Begränsning:</b> Den här funktionen kräver att det finns minst en IBM Content Manager-, IBM FileNet P8- eller OASIS CMIS-behållare som är associerad med skrivbordet.",

		admin_feature_config_default_repository_icon_text: "Standardbehållare",
		admin_show: "Visa",
		admin_hide: "Dölj",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Du kan inte ta bort administrationsfunktionen från administrationsskrivbordet",
		admin_warning_label: "Varning:",
		admin_layout_show_globaltoolbar: "Globalt verktygsfält:",
		admin_layout_show_globaltoolbar_hover: "Välj om verktygsfältet ska visas i banderollen längst upp på skrivbordet.<br><br>Det globala verktygsfältet innehåller åtgärder som gör att användarna kan lägga till dokument, mappar och hållstämplar för behållaren. Vilka åtgärder som är tillgängliga beror på den behållare som är ansluten.",
		admin_interface_text_name_label: "Etikettyp",

		admin_interface_text_label_description: "Du kan anpassa texten som visas i vissa områden av webbklienten. Det finns etiketter för alla behållare och skrivbord i konfigurationen. Skriv den text som du vill se i gränssnittet i fältet Aktuell etikett.<br><br><b>Viktigt!</b> Etikettändringar visas inte i administrationsverktyget.",
		admin_interface_text_label_action: "Åtgärdsetiketter",
		admin_interface_text_label_action_description: "Åtgärdsetiketter visas på knappar och i menyer i hela webbklienten. Du kan definiera olika åtgärdsknappar för varje typ av behållare.",
		admin_interface_text_label_application: "Programetiketter",
		admin_interface_text_label_application_description: "Programetiketter visas genomgående i webbklienten.",
		admin_interface_text_label_system: "Systemegenskapsetiketter",
		admin_interface_text_label_system_description: "De systemegenskapsetiketter som visas varierar efter behållare. Du kan anpassa etiketter för systemegenskaper som är associerade till dokument och mappar i dina behållare.",
		admin_interface_text_label_desktop: "Skrivbordsetiketter",
		admin_interface_text_label_desktop_description: "Om du anpassat namnet på ett program på skrivbordet kan du anpassa det namnet till andra språk än engelska. Du kan också anpassa namnet på IBM FileNet P8-programutrymmen på ett skrivbord.",

		admin_interface_text_system_label: "Systemetikett",
		admin_interface_text_current_label: "Aktuell etikett",
		admin_interface_text_default_label_heading: "Standardetikett",
		admin_interface_text_default_label: "Standardetikett:",
		admin_interface_text_displayed_in_label: "Visas för",
		admin_interface_text_displayed_in_document_folder: "Dokument och mappar",
		admin_interface_text_displayed_in_document: "Dokument",
		admin_interface_text_displayed_in_folder: "Mappar",
		admin_interface_text_displayed_in_admin_application_space: "Programutrymmesetikett",
		admin_interface_text_displayed_in_desktop: "Funktionsetikett för mobilt",
		admin_interface_text_displayed_in_admin_application_name: "Programnamn",

		admin_new_desktop: "Nytt skrivbord",
		admin_new_repository: "Ny behållare",
		admin_new_menu: "Ny meny",
		admin_new_viewer_mapping: "Ny visningsprogramsmappning",
		admin_new_mapping_label: "Ny mappning",
		admin_new_icon_mapping: "Ny ikonmappning",
		admin_viewer_mapping_list_instructions: "Du kan konfigurera vilka visningsprogram som webbklienten använder till att visa olika typer av innehåll. En visningsprogramsmappning definierar vilka MIME-typer som är associerade till varje visningsprogram som du vill använda. Du kan skapa flera visningsprogramsmappningar om du vill använda olika visningsprogram för olika skrivbord.",
		admin_viewer_mapping_instructions: "Ange de visningsprogram du vill använda till att öppna filer. Om du vill använda ett anpassat visningsprogram måste du först integrera det som ett visningsprogram innan du kan lägga till det i visningsprogramsmappningen.<br><br><b>Viktigt!</b> När en användare öppnar ett dokument söker webbklienten i listan över visningsprogramsmappningar för att hitta det första visningsprogrammet som dokumentet kan öppnas i, baserat på vilket operativsystem som används och vilken behållare som är ansluten. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nytt insticksprogram",
		admin_menu_list_instructions: "Du kan skapa anpassade verktygsfält och kontextmenyer för att styra vilka åtgärder som är tillgängliga för användare. Du kan inte ändra standardmenyerna men du kan skapa kopior av menyer om du vill begränsa vilka åtgärder som är tillgängliga eller lägga till anpassade åtgärder som är definierade i insticksprogrammen.<br><br>Om du vill skapa en ny typ av menyn måste du definiera menyn i ett insticksprogram.",
		admin_menu_id_hover: "ID måste vara unikt och du kan inte ändra IDt när du väl har sparat menyn.<br><br>IDt får endast innehålla alfanumeriska tecken och är skiftberoende.",
		admin_menu_id_disabled_hover: "Det går inte att ändra meny-IDt. Om du vill använda ett annat ID måste du skapa en ny meny.",
		admin_menu_default_instructions: "Du kan inte ändra den här menyn eftersom den är en standardmeny. Om du vill ändra menyn måste du skapa en kopia av den.",
		admin_menu_toolbar_instructions: "Du kan begränsa de åtgärder som är tillgängliga för verktygsfältet eller lägga till anpassade åtgärder som är definierade i ett insticksprogram. Du kan också ordna åtgärderna genom att lägga till avgränsare i verktygsfältet.",
		admin_menu_toolbar_custom_instructions: "Verktygsfältet är definierat av ett insticksprogram. Om du vill ändra verktygsfältet måste du uppdatera insticksprogrammet eller skapa en kopia av det.",
		admin_menu_context_menu_instructions: "Du kan begränsa de åtgärder som är tillgängliga för kontextmenyn eller lägga till anpassade åtgärder som är definierade i ett insticksprogram. Du kan också ordna åtgärderna genom att lägga till avgränsare och undermenyer i kontextmenyn.",
		admin_menu_context_menu_custom_instructions: "Kontextmenyn är definierad av ett insticksprogram. Om du vill ändra kontextmenyn måste du uppdatera insticksprogrammet eller skapa en kopia av den.",
		admin_desktop_list_instructions: "Du kan skapa flera skrivbord för att ge olika användare tillgång till det innehåll de behöver. Du kan till exempel skapa ett skrivbord som bara ger användarna möjlighet att söka efter innehåll eller ett skrivbord som ger användare åtkomst till en enda behållare. ",
		admin_plugin_updated: "Konfigurationen för insticksprogrammet har ändrats. Du måste uppdatera webbläsaren om ändringarna ska gälla.",
		admin_repository_ci_heading: "Content Integrator-behållare: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager-behållare: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager-behållare: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand-behållare: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS-behållare: <b>${0}</b>",
		admin_repository_box_heading: "Box-behållare: <b>${0}</b>",
		admin_repository_generic_heading: "Behållare: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Vill du ta bort de valda skrivborden?\n${0} skrivbord är valda.",
		admin_delete_confirmation_menus: "Vill du ta bort de valda menyerna?\n${0} menyer är valda.",
		admin_delete_confirmation_repositories: "Vill du ta bort de valda behållarna?\n${0} behållare är valda.",
		admin_delete_confirmation_viewer_mappings: "Vill du ta bort valda visningsprogramsmappningar?  ${0} kartor är valda.",
		admin_delete_confirmation_icon_mappings: "Vill du ta bort de valda ikonkonfigurationerna?\n${0} ikonkonfigurationer är valda.",
		admin_delete_confirmation_plugins: "Vill du ta bort de valda insticksprogrammen?\n${0} insticksprogram är valda.",
		admin_delete_confirmation: "Vill du ta bort de valda objekten?\n${0} objekt är valda.",

		admin_viewer_mapping_id_hover: "IDt måste vara unikt och du kan inte ändra det när du väl har sparat visningsprogramsmappningen.<br><br>IDt får endast innehålla alfanumeriska tecken och är skiftberoende.",
		admin_viewer_mapping_id_disabled_hover: "Visningsprograms-IDt kan inte ändras. Om du vill använda ett annat ID måste du skapa en ny visningsprogramkarta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Det går inte att ta bort standardskrivbordet.",

		admin_desktop_heading: "Skrivbord: <b>${0}</b>",
		admin_menu_toolbar_heading: "Verktygsfält: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Anpassat verktygsfält: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontextmenyn: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Anpassad kontextmeny: <b>${0}</b>",
		admin_plugin_heading: "Insticksprogram: <b>${0}</b>",
		admin_plugin_instructions: "Ett insticksprogram kan vara en JAR-fil eller en kompilerad klassfil.<br/><br/><b>Viktigt!</b> IBM Content Navigator-webbprogramservern måste kunna accessa insticksprogramfilen i det lokala filsystemet eller via en URL.",
		admin_plugin_list_instructions: "Du måste använda administrationsverktyget för att registrera insticksprogram för webbklienten. Om ett insticksprogram kräver ytterligare konfiguration visas konfigurationsparametrar efter att du har registrerat insticksprogrammet.<br /><br /><b>Viktigt!</b> Om du ändrar ett insticksprogram som refereras i ett annat område av administrationsverktyget, t.ex. en meny, kan det uppstå problem med insticksprogrammet. Insticksprogrammen anropas i den ordning de står i listan. Om ett instickprogram behöver köras före ett annat insticksprogram kontrollerar du att insticksprogrammen står i den ordningen de ska köras.",
		admin_plugin_cannot_delete: "Det går inte att ta bort insticksprogrammen eftersom vissa insticksprogram är beroende av dem.<br/>Valda insticksprogram: ${0}<br/>Beroende insticksprogram: ${1}",
		admin_plugin_cannot_disable: "Det går inte att avaktivera insticksprogrammen eftersom vissa insticksprogram är beroende av dem.<br/>Valda insticksprogram: ${0}<br/>Beroende insticksprogram: ${1}",
		admin_plugin_cannot_add: "Det går inte att aktivera insticksprogrammet eftersom vissa insticksprogram som det är beroende av saknas eller är avaktiverade. Saknade eller avaktiverade insticksprogram: ${0}",
		admin_plugin_cannot_enable: "Det går inte att aktivera insticksprogrammen eftersom vissa insticksprogram som de är beroende av saknas eller är avaktiverade.<br/>Valda insticksprogram: ${0}<br/>Saknade eller avaktiverade insticksprogram: ${1}",
		admin_plugin_save_order: "Spara ordning",
		admin_plugin_load: "Läs in",
		admin_plugin_load_hover: "Ange URL-adressen till insticksprogrammet",
		admin_plugin_file_hover: "Om insticksprogrammets JAR-fil finns i det lokala filsystemet kan du ange den fullständiga sökvägen eller URL-adressen till insticksprogramfilen. Om insticksprogrammets JAR-fil finns på en fjärrserver måste du ange URL-adressen till instickprogramfilen.",
		admin_plugin_classfolderpath_hover: "Den kompilerade klassfilen måste finnas på samma IBM Content Navigator-webbprogramserver.<br/><br/>Ange den fullständiga sökvägen till mappen där insticksfilsklasserna kompileras och genereras.<br/><br/>Sökvägen får inte innehålla insticksprogramklassens paketnamnet. Exempel: Standardsökvägen för exempelinsticksprogramklassen i Windows är C:\\Program (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Ange det fullständiga namnet på Java-klassen i den klassfil som ska läsas in och anropas som insticksprogramsklass.<br/>Exempel: Exempelinsticksprogrammets klassnamn är com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Insticksprogrammets JAR-fil hittades inte på angiven URL-adress. Kontrollera att JAR-filen finns på webbprogramservern och att URL-adressen och filnamnet är korrekt.",
		admin_plugin_for_repository_not_loaded: "Det går inte att ändra den här behållaren. Insticksprogrammet som har definierats för den här typen av behållare har inte lästs in. Gå till fliken Insticksprogram och kontrollera att insticksprogrammet har konfigurerats på rätt sätt och lästs in.",
		admin_plugin_repository_types: "Behållartyper:",
		admin_plugin_viewers: "Visningsprogram:",
		admin_plugin_features: "Funktioner:",
		admin_plugin_layouts: "Layouter:",
		admin_plugin_not_available: "Ej tillgängligt",
		admin_plugin_config_params: "Konfigurationsparametrar:",
		admin_viewer_def_heading: "Visningsprogramsmappning: <b>${0}</b>",
		admin_users_and_groups: "Användare och grupper",
		admin_general: "Allmänt",
		admin_logging: "Loggning",
		admin_authentication: "Autentisering",		
		admin_rolebase_role: "Roll:",
		admin_settings_logging_instructions: "Du kan använda loggning för felsökning av webbklienten. Du kan förfina loggningen om du vet att ett problem uppstår inom en specifik Java-klass eller för en viss användare. Felinformation lagras i webbprogramserverns loggfiler.",
		admin_settings_logging_instructions2: "<b>Inställningar för felsökningsloggning</b><br />Om du vet att ett problem inträffar för en viss klientvärddator eller användare kan du rikta felsökningsloggningen mot den datorn eller användaren. Du kan samla in felsökningsinformation i en produktionsmiljö utan att det påverkar systemets prestanda nämnvärt.<br /><br /><b>Viktigt!</b> Om du anger en klientvärddator eller en användare åsidosätter den här inställningen alla andra logginställningar. När du har samlat in den information som du behöver, ställer du in alternativet på <b>Inget</b> för att återgå till standardloggning i miljön.",
		admin_settings_export_config_hover: "Exportera den aktuella systemkonfigurationsinformationen till en fil för användning med IBM Support Assistant Data Collector. Filen sparas till en plats som definieras av Java-systemegenskapen user.home.",
		admin_logging_level: "Loggning på programnivå:",
		admin_logging_level_hover: "Loggningsnivåerna påverkar hur mycket information som lagras på servern. Med alternativet <b>Fel</b> samlas minst loggningsinformation in. Med alternativet <b>Felsökning</b> samlas mest information in.<br /><br />Ange inte <b>Felsökning</b> i en produktionsmiljö annat än om IBM Software Support har sagt att du ska göra det.",
		admin_logging_level_0: "Ingen loggning",
		admin_logging_level_1: "Fel",
		admin_logging_level_2: "Varning",
		admin_logging_level_3: "Information",
		admin_logging_level_4: "Felsökning",
		admin_logging_classes: "Loggning på Java-klassnivå:",
		admin_logging_classes_hover: "Som standard ingår alla Java-klasser och paket i webbprogramsserverns felloggar. Men du kan själv ange vilka klasser eller paket som ska inkluderas eller exkluderas. Använd webbprogramserverns felloggar när du bestämmer vilka klasser som ska tas med eller uteslutas.<br><br>Om du vet att ett problem uppstår i en viss klass kan du ta med den klassen i loggfiler. När du tar med en klass i fellogarna utesluts alla andra klasser från loggfilen.<br><br>Om du vet att ett problem inte uppstår i en klass och vill minska storleken på loggfilen kan du välja att utesluta den klassen från loggfilerna.",
		admin_logging_classes_include: "Inkludera",
		admin_logging_classes_include_all: "Alla klasser",
		admin_logging_classes_include_specified: "Specifika klasser",
		admin_logging_classes_include_specified_msg: "Ange vilka klasser som ska ingå.",
		admin_logging_classes_exclude: "Exkludera",
		admin_logging_classes_exclude_none: "Inga",
		admin_logging_classes_exclude_specified: "Specifika klasser",
		admin_logging_classes_exclude_specified_msg: "Ange vilka klasser som ska uteslutas.",
		admin_logging_debug: "Felsökningsloggning för:",
		admin_logging_debug_hover: "<b>Viktigt!</b> Granska webbprogramserverns loggfiler innan du anger en IP-adress till en klientvärddator eller användare. Det värde som du anger måste matcha det värde som visas i loggfilen.",
		admin_logging_debug_none: "Ingen (standard)",
		admin_logging_debug_host: "Klientvärddatorer (IP-adresser)",
		admin_logging_debug_host_msg: "Ange IP-adressen för en eller flera klientdatorer som du vill logga felsökningsinformation för. Avgränsa IP-adresserna med kommatecken.<br /><br /><b>Viktigt!</b> Granska webbprogramserverns loggfiler innan du anger en IP-adress. Det värde som du anger måste matcha det värde som visas i loggfilen.",
		admin_logging_debug_user: "Användare",
		admin_logging_debug_user_msg: "Ange användarnamnet för en eller flera användare som du vill logga felsökningsinformation för. Avgränsa användarnamnen med kommatecken.<br /><br /><b>Viktigt!</b> Granska webbprogramserverns loggfiler innan du anger ett användarnamn. Det värde som du anger måste matcha det värde som visas i loggfilen.",

		admin_office_settings_logging_instructions: "Du kan använda loggning för felsökning av IBM Content Navigator for Microsoft Office. Du kan förfina loggningen om du vet att ett problem uppstår inom en specifik klass eller för en viss användare. Felinformationen sparas i programmets loggfiler på IBM Content Navigator for Microsoft Office-klientvärddatorn. ",
		admin_office_settings_logging_instructions2: "<b>Inställningar för felsökningsloggning</b><br />Om du vet att ett problem uppstår för en viss klientvärddator eller IBM Content Navigator for Microsoft Office-användare kan du ange den datorn eller användaren som mål för felsökningen. Du kan samla in felsökningsinformation i en produktionsmiljö utan att det påverkar systemets prestanda nämnvärt. <br /><br /><b>Viktigt!</b> Om du anger en klientvärddator eller en användare åsidosätter den här inställningen alla andra logginställningar. När du har samlat in informationen som behövs sätter du värdet till <b>Ingen</b> för att återgå till standardloggning för IBM Content Navigator for Microsoft Office-miljön. ",
		admin_office_logging_debug_hover: "<b>Viktigt!</b> Granska klientdatorns loggfiler innan du anger en IP-adress till en klientvärddator eller användare. Det värde som du anger måste matcha det värde som visas i loggfilen. ",
		admin_office_logging: "Office-loggning",
		admin_office_logging_classes: "Loggning på klassnivå:",
		admin_office_logging_classes_hover: "Som standard ingår alla klasser och paket i IBM Content Navigator for Microsoft Office-felloggarna. Men du kan själv ange vilka klasser eller paket som ska inkluderas eller exkluderas. Använd klientdatorns loggfiler när du bestämmer vilka klasser som ska tas med eller uteslutas.<br /><br />Om du vet att ett problem uppstår i en viss klass kan du ta med den klassen i loggfiler. När du tar med en klass i felloggarna utesluts alla andra klasser från loggfilerna. <br /><br />Om du vet att ett problem inte uppstår i en klass och vill minska storleken på loggfilen kan du välja att utesluta den klassen från loggfilerna. ",
		admin_office_logging_debug_hover: "<b>Viktigt!</b> Granska klientdatorns loggfiler innan du anger en IP-adress till en klientvärddator eller användare. Det värde som du anger måste matcha det värde som visas i loggfilen.",
		admin_office_logging_additional_settings: "Fler inställningar:",
		admin_office_logging_additional_settings_hover: "Gör ytterligare inställningar",
		admin_office_logging_file_size: "Loggfilsstorlek",
		admin_office_logging_file_size_hover: "Ange vid vilken storlek IBM Content Navigator for Microsoft Office ska skapa en ny logg fil. När en loggfil når maximal storlek ändras den aktuella loggfilens namn genom att datumet läggs till (med formatet ÅÅÅÅMMDD) tillsammans med ett sekvensnummer (t.ex. ICNExcelAddin-20140515-4.log) och en ny loggfil skapas. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Visa stackspårning i dialogrutor",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Du kan välja att stackspårningsinformation ska visas i meddelanden och på det sättet förenkla problemlösning. Även om du inte aktiverar det här alternativet sparas alltid stackspårningsinformationen i IBM Content Navigator for Microsoft Office-loggarna. ",

		admin_icon_state_twisty: "Lägesikoner",
		admin_icon_state_icon: "Lägesikon",
		admin_icon_state: "Läge",
		state_contains_label: "Läget innehåller",
		admin_icon_state_instructions: "Du kan anpassa de ikoner som visas vid dokument, mappar och arbetsobjekt i behållarna.<br><br><b>Tips!</b> Du kan ange om lägesikoner ska visas för varje behållare i miljön.",
		admin_icon_state_dialog_title: "Lägesikonmappning",
		admin_icon_state_dialog_instructions: "Du kan mappa det valda läget till en fördefinierad webbklientikon eller en anpassad ikon.",

		admin_icon_mapping_twisty: "MIME-typsikoner",
		admin_icon_mapping_dialog_title: "Ikonmappning",
		admin_icon_mapping: "Ikonmappning",
		admin_icon_mapping_instructions: "Du kan mappa en lista över MIME-typer till en fördefinierad webbklientikon eller en anpassad ikon.",
		admin_icon_mapping_list_instructions: "Du kan anpassa ikonerna som visas för de olika MIME-typer som lagras i behållaren. Webbklienten använder ikonerna i den orden de är listade. Om en MIME-typ är listad fler än en gång används den första ikonen som är associerad med den MIME-typen.",
		admin_icon_mapping_icon_label: "Vilken ikon vill du använda?",
		admin_icon_mapping_file_name: "Anpassad ikon:",
		admin_icon_mapping_file_name_heading: "Anpassad ikon",
		admin_icon_mapping_file_name_placeholder: "Ange URL-adressen till ikonen",
		admin_icon_mapping_file_name_hover: "Ange URL-adressen till ikonen. Om ikonen finns på samma webbprogramserver som webbklienten anger du en relativ URL-adress. Exempel: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Fördefinierad ikon:",
		admin_icon_mapping_class_name_heading: "Fördefinierad ikon",
		admin_icon_mapping_class_name_hover: "Välj en ikon som ska ingå i webbklienten.",
		admin_icon_mapping_class_name_placeholder: "Välj en ikon",

		admin_p8_instructions: "Informationen delas av alla FileNet Content Manager-behållare som är konfigurerade för webbklienten.",
		admin_p8_collaboration_config: "Valfri FileNet Collaboration Services-konfiguration",
		admin_p8_collaboration_config_instructions: "Du kan konfigurera de här parametrarna om du vill anpassa FileNet Collaboration Services till IBM FileNet P8-miljön.",
		admin_p8_use_url_incoming: "Använd URL-adressen för inkommande begäran för att generera svars-URL:",
		admin_p8_use_url_incoming_hover: "Du kan använda URL-adressen för en inkommande begäran för att generera URL-adressen i ett svar i de flesta FileNet Collaboration Services-miljöer. Välj <b>Ja</b> såvida inte något av följande gäller:<ul><li>Klientprogrammen ska accessa FileNet Collaboration Services via en specifik URL.<li>Proxyserverinställningarna gör att FileNet Collaboration Services genererar ogiltiga URL-adresser.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services-URL:",
		admin_p8_use_url_incoming_http_hover: "Ange den URL-adress som klientprogrammet ska accessa FileNet Collaboration Services med (i formatet http://FNCSserver:portnummer).",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS-URL:",
		admin_p8_use_url_incoming_https_hover: "Om FileNet Collaboration Services har konfigurerats för SSL, anger du den HTTPS-URL som klientprogrammet ska accessa FileNet Collaboration Services med (i formatet https://FNCSserver:portnummer).",
		admin_p8_hide_email_addresses: "Dölj användarnas e-postadresser i serversvar:",
		admin_p8_hide_email_addresses_hover: "Du kan välja att användarnas adresser ska döljas i serversvaren om det behövs av sekretesskäl. Exempel: Användarnas e-postadresser kan döljas när servern returnerar en lista över dokument och information om vilka användare som skapade eller redigerade dokumenten.",

		admin_p8_mask_user_ids: "Maskera användar-IDn i loggfiler:",
		admin_p8_mask_user_ids_hover: "Du kan välja att användarnamn ska döljas i FileNet Collaboration Services-loggfiler om det behövs av sekretesskäl. När du aktiverar det här alternativet ersätts användarnamnen med hashvärden. Då kan du tillhandahålla loggfiler till externa företag, t.ex. IBM, för support utan att äventyra användarnas namn eller aktiviteter.",

		admin_p8_soft_delete: "Flytta borttagna filer till återställningsfacket:",
		admin_p8_soft_delete_hover: "Flytta de objekt som användare tar bort till ett återställningsfack i stället för att ta bort dem från behållaren. Objekten sparas i återställningsfacket till de tas bort. Värdet ignoreras om målbehållaren inte har funktioner för återställningsfack.<br><br><b>Begränsningar:</b> Återställningsfack hanteras av IBM FileNet P8 version 5.2 och senare och kräver tillägget Social Collaboration Base Extensions.",

		admin_p8_download: "Content Download HTTP Cache-konfiguration",
		admin_p8_download_instructions: "Om IBM FileNet Content Manager-behållarna innehåller många stora filer kan du konfigurera CDHC för FileNet Collaboration Services för att på ett säkert sätt dirigera om innehållsbegäran för stora filer till en dedicerad webbserver.<br/><br/>Funktionen kräver IBM HTTP Server. Du måste även uppdatera IBM HTTP Server httpd.conf-filen.",
		admin_p8_download_cache: "CDHC:",
		admin_p8_download_cache_hover: "Ange om du vill aktivera CDHC (Content Download HTTP Cache) för alla IBM FileNet Content Manager-behållare i miljön. Du kan ange en minsta filstorlek för när filer cachas.",
		admin_p8_download_cache_folder: "Fullständig cachekatalogsökväg:",
		admin_p8_download_cache_folder_hover: "Ange den fullständiga sökvägen till den katalog där cachade filer ska lagras. Katalogen kan finnas på valfritt operativsystem eller enhet, t.ex. en delad nätverksenhet, så länge katalogen visas som ett filsystem för FileNet Collaboration Services och IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias för cacheplatsen:",
		admin_p8_download_cache_url_hover: "Ange det alias som används för att peka på cachekatalogen från FileNet Collaboration Services-URL. Ange alias i formatet /alias, t.ex. /cdhc.<br/><br/>Om /cdhc inkluderas i en URL omdirigeras programmet till den fullständiga cachekatalogsökvägen.",
		admin_p8_download_cache_max_files: "Maximalt antal cachade filer:",
		admin_p8_download_cache_max_files_hover: "När det maximala antalet nås tas den äldsta filen bort från cache.<br><br>Om du anger maximalt antal cachefiler och maximal cachestorlek tas den äldsta filen bort från cache när det lägsta värdet av de två uppfylls.",
		admin_p8_download_cache_max_size: "Maximal cachestorlek (i GB):",
		admin_p8_download_cache_max_size_hover: "När den maximala cachestorleken nås tas den äldsta filen bort från cache.<br/><br/>Om du anger maximalt antal cachefiler och maximal cachestorlek tas den äldsta filen bort från cache när det lägsta värdet av de två uppfylls.",
		admin_p8_download_cache_cleanup_duration: "Längsta rensningstid (i sekunder):",
		admin_p8_download_cache_cleanup_duration_hover: "Ange maximal tidslängd för rensningsåtgärd. Standardvärdet är 5 sekunder.<br><br>Alla filer som ska tas bort men fortfarande är kvar i cache efter rensningen tas bort vid en senare rensning.",
		admin_p8_download_cache_cleanup_min: "Kortaste intervall mellan cacherensningsåtgärder (i sekunder):",
		admin_p8_download_cache_cleanup_min_hover: "Ange den kortaste tidslängden mellan cacherensningarna. Standardvärdet är 3600 sekunder (1 timme).<br><br>Cacherensningar inträffar endast när det finns en aktiv begäran att hämta innehåll från cache. Om det kommer en begäran i minuten sker rensningen varje timme. Om det däremot går tre timmar mellan hämtningsbegäran sker rensningen inte förrän nästa hämtningsbegäran tas emot.",
		admin_p8_download_cache_min_lifetime: "Kortaste tid i cache (i sekunder):",
		admin_p8_download_cache_min_lifetime_hover: "Ange den kortaste tiden en fil behålls i cacheminnet innan den kan tas bort. Standardvärdet är 3600 sekunder (1 timme).<br><br>Även om cache når maximal storlek eller innehåller maximalt antal filer går det inte att ta bort den äldsta filen förrän den har funnits i cache under angiven tid.",
		admin_p8_download_cache_size_threshold: "Minsta filstorlek för cache (i KB):",
		admin_p8_download_cache_size_threshold_hover: "Ange minsta storlek för när CDHC ska cachelagra filer. Om en fil är mindre än angiven storlek dirigeras den via den webbprogramserver som FileNet Collaboration Services är driftsatt på. Standardvärdet är 1000 KB.",
		admin_p8_download_guard_header: "HTTP-header för grindvakt:",
		admin_p8_download_guard_header_hover: "Om ett klientprogram inte dirigerar en begäran via IBM HTTP Server kan det cachade innehållet inte hämtas. Du kan ange att endast inkommande begäran med en specifik HTTP-header (som läggs till begäran från IBM HTTP Server) kan accessa cachat innehåll för att förhindra hämtningsfel.<br><br>HTTP-header konfigureras i IBM HTTP Server och finns i alla inkommande begäran som dirigeras via IBM HTTP Server. Om en begäran saknar HTTP-header, dirigeras innehållet via webbprogramservern i stället för IBM HTTP Server.",
		admin_p8_download_generate_config: "Generera konfiguration",
		admin_p8_download_generate_config_label: "IBM HTTP Server-konfiguration:",
		admin_p8_download_generate_config_label_hover: "Om CHDC-konfigurationen ska fungera måste du uppdatera IBM HTTP Server httpd.conf-filen. Klicka på Generera konfiguration så skapas satserna som måste läggas till i httpd.conf-filen.",

		admin_logging_viewone_pro: "ViewONE Professional-loggning:",
		admin_logging_viewone_virtual: "ViewONE Virtual-loggning:",
		admin_logging_viewone_streamer: "Document Streaming Server Module-loggning:",
		admin_logging_viewone_streamer_hover: "Document Streaming Server Module-loggningsalternativen är endast tillämpliga om du har aktiverat strömning för PDF- eller TIFF-filer i avsnittet <b>Daeja ViewONE</b> i administrationsverktyget.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module-loggning:",
		admin_logging_viewone_redaction_hover: "Permanent Redaction Server Module-loggningsalternativen är endast tillämpliga om du har behörighet att använda Redaction-modulen i Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Strömma PDF-filer:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Om det finns stora PDF-dokument i behållaren kan du aktivera visningsprogrammet att strömma dokumentinnehåll så att det går fortare att visa det för användarna. Om strömning inte fungerar i miljön kan du avaktivera det.",
		admin_daeja_viewonepro_stream_tiff_documents: "Strömma TIFF-filer:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Om det finns stora TIFF-dokument i behållaren kan du aktivera visningsprogrammet att strömma dokumentinnehåll så att det går fortare att visa det för användarna. Om strömning inte fungerar i miljön kan du avaktivera det.",
		admin_daeja_viewonepro_show_file_buttons: "Arkivknappar",
		admin_daeja_viewonepro_show_file_menus: "Arkivmenyer",
		admin_daeja_viewonepro_enable_file_keys: "Arkivsnabbtangenter",
		admin_daeja_viewonepro_file_keys_hover_help: "Ange om användarna ska kunna använda snabbtangenter när de arbetar med filer, t.ex. för att öppna och spara en fil. Mer information om snabbtangenterna finns i beskrivningen av parametern FileKeys i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Utskriftsknappar",
		admin_daeja_viewonepro_show_print_menus: "Utskriftsmenyer",
		admin_daeja_viewonepro_enable_print_keys: "Utskriftssnabbtangenter",
		admin_daeja_viewonepro_print_keys_hover_help: "Ange om användarna ska kunna använda snabbtangenter när de skriver ut filer, t.ex. för att skriva ut en sida eller ett dokument. Mer information om snabbtangenterna finns i beskrivningen av parametern PrintKeys i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Invertera knappar",
		admin_daeja_viewonepro_annotation_tooltip: "Standardverktygstips för anpassad kommentar:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Ange den text som ska visas om inget verktygstips har angetts för en anpassad kommentar. Texten kan inkludera ersättningsbara token. Exempel: &quot;&lt;creator&gt; skapade kommentaren &lt;createdateonly&gt;.&quot; Mer information om ersättningsbara token finns i beskrivningen av parametern customAnnotationsToolTip i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Använd fördefinierat, anpassat verktygstips",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Använd systemdefinierat, anpassat verktygstips som visas i textrutan nedan",
		admin_daeja_viewonepro_help_url: "Hjälp-URL:",
		admin_daeja_viewonepro_help_url_hover_help: "Ange URL-adressen till den webbsida som innehåller hjälpdokumentation om visningsprogrammet. Hjälpknappen i verktygsfältet och hjälpmenyalternativet öppnar webbsidan. Om du inte anger någon URL visas inte hjälpknappen eller hjälpmenyalternativen.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Bildstämpelresurskontext:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Dirigera ohanterat innehåll till webbläsaren:",
		admin_daeja_viewonepro_route_docs_hover_help: "Användarna kan se bildfiler som inte hanteras genom att dirigera dem till webbläsaren som öppnar lämpligt program för visning av filen. Exempel: Microsoft Word-visningsprogrammet används för att öppna Microsoft Word-dokument.",
		admin_daeja_viewonepro_scale: "Autoanpassa bild:",
		admin_daeja_viewonepro_scale_best: "Anpassa",
		admin_daeja_viewonepro_scale_ftow: "Anpassa till bredd",
		admin_daeja_viewonepro_scale_ftoh: "Anpassa till höjd",
		admin_daeja_viewonepro_enable_hotkeys: "Aktivera snabbtangenter:",
		admin_daeja_viewonepro_show_features: "Visa knappar och menyer:",
		admin_daeja_custom_settings: "Fler inställningar:",
		admin_daeja_custom_settings_hover_help: "Du kan lägga till andra parametrar genom att ange parametrarnas namn och värden. Exempel: Du kan ange &quot;scrollbars&quot; och &quot;true&quot; om du vill att bläddringslister ska visas när bildstorleken ändras så att den inte får plats på visningsytan. Mer information om namn och värden för parametrar finns i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Standardverktygstips för anpassad kommentar:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Ange den text som ska visas om inget verktygstips har angetts för en anpassad kommentar. Texten kan inkludera ersättningsbara token. Exempel: &quot;&lt;creator&gt; skapade kommentaren &lt;createdateonly&gt;.&quot; Mer information om ersättningsbara token finns i beskrivningen av parametern customAnnotationsToolTip i IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Använd fördefinierat, anpassat verktygstips",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Använd systemdefinierat, anpassat verktygstips som visas i textrutan nedan",
		admin_daeja_virtual_image_stamp_resource_context: "Bildstämpelresurskontext:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Licensfilsökväg:",
		admin_daeja_virtual_license_path_hover_help:"Ange den fullständiga sökvägen till katalogen som innehåller licensfilerna lic-server-virtual.v1 och lic-server.v1.",
		admin_default_license_path:"Använd standardsökvägen till licensfilerna",
		admin_license_path_specified:"Använd anpassad sökväg till licensfilerna",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Cachekatalog:",
		admin_daeja_streamer_cache_root_hover_help: "Ange den fullständiga sökvägen till den katalog där cachade filer ska lagras för snabbare åtkomst. Katalogen kan finnas på valfritt operativsystem eller enhet, t.ex. i en nätverkskatalog, om den visas som ett filsystem för IBM Content Navigator och IBM HTTP Server.Använd en lokal katalog för att förbättra prestanda.",
		admin_daeja_streamer_settings: "Fler inställningar:",
		admin_daeja_streamer_settings_hover_help: "Du kan lägga till andra parametrar genom att ange parametrarnas namn och värden. Exempel: Du kan ange cookieAllowedDomainList och en kommaseparerad lista över värdservrar. Mer information om namn och värden för parametrar finns i IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent redigering",
		admin_daeja_redaction_settings: "Inställningar:",
		admin_daeja_redaction_settings_hover_help: "Du kan lägga till andra parametrar genom att ange parametrarnas namn och värden. Exempel: Du kan ange burnIncrementalAnnotations och true. Mer information om namn och värden för parametrar finns i IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Ny inställning",
		admin_daeja_setting_dialog_title_edit: "Ändra inställning",
		admin_daeja_setting_dialog_hover_help: "Lägg till andra parametrar genom att ange parametrarnas namn och värde. Exempel: Du kan ange scrollbars och true om du vill att bläddringslister ska visas när bildstorleken ändras så att den inte får plats på visningsytan.",
		admin_daeja_setting_dialog_field_hover_help: "Mer information om namn och värden för parametrar finns i Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Daeja ViewONE-loggning",
		admin_daeja_logging_trace: "Aktivera spårningsloggning",
		admin_daeja_logging_trace_net: "Aktivera nätverksloggning",
		admin_daeja_logging_trace_annotations: "Aktivera kommentarsloggning",
		admin_daeja_logging_log_file: "Loggfil:",
		admin_daeja_logging_instructions: "Du kan använda loggning för felsökning av Daeja ViewONE Professional och Daeja ViewONE Virtual. Om du vet att ett problem inträffar för en viss funktion kan du rikta loggningen mot den funktionen.",

		admin_v1pro_logging_trace_hover: "Felsöka allmänna problem med visningsprogrammet.<br><br>Loggningsinformationen skrivs till Java-konsolen på klientdatorn. Du kan öppna operativsystemets Java-konsol från Kontrollpanelen (Windows) eller System Preferences (Mac).",
		admin_v1pro_logging_trace_net_hover: "Felsöka följande problem:<ul><li>Problem med serveranslutningen</li><li>Problem med MIME-typer</li><li>Problem med för långa filer</li></ul>Du kan också använda nätverksloggning för att bestämma var fördröjningar sker när Daeja ViewONE Professional används.<br><br>Loggningsinformationen skrivs till Java-konsolen på klientdatorn. Du kan öppna operativsystemets Java-konsol från Kontrollpanelen (Windows) eller System Preferences (Mac).",
		admin_v1pro_logging_trace_annotations_hover: "Felsöka problem med att skapa, spara eller läsa in kommentarer.<br><br>Loggningsinformationen skrivs till Java-konsolen på klientdatorn. Du kan öppna operativsystemets Java-konsol från Kontrollpanelen (Windows) eller System Preferences (Mac).",

		admin_virtual_logging_trace_hover: "Felsöka allmänna problem med visningsprogrammet.<br><br>Som standard sparas loggningsinformationen i den virtuella loggfilen i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_virtual_logging_trace_net_hover: "Felsöka följande problem:<ul><li>Problem med serveranslutningen</li><li>Problem med MIME-typer</li><li>Problem med för långa filer</li></ul>Du kan också använda nätverksloggning för att bestämma var fördröjningar sker när Daeja ViewONE Virtual används.<br><br>Som standard sparas loggningsinformationen i den virtuella loggfilen i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_virtual_logging_trace_annotations_hover: "Felsöka problem med att skapa, spara eller läsa in kommentarer.<br><br>Som standard sparas loggningsinformationen i den virtuella loggfilen i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_virtual_logging_log_file_hover: "Om du aktiverar loggning måste du ange den fullständiga sökvägen till och namnet på loggfilen där loggningsinformationen ska sparas. Loggfilen bör ha namnet virtual.log.",

		admin_streamer_logging_trace_hover: "Felsöka allmänna problem med Document Streaming Server Module.<br><br>Som standard skrivs loggningsinformationen till strömningsloggfilen som finns i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_streamer_logging_trace_net_hover: "Felsöka följande problem:<ul><li>Problem med serveranslutningen</li><li>Problem med specifika MIME-typer.</li><li>Problem med för långa filer</li></ul>Du kan också använda nätverksloggning för att bestämma var fördröjningar sker när Document Streaming Server Module används.<br><br>Som standard skrivs loggningsinformationen till strömningsloggfilen som finns i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_streamer_logging_log_file_hover: "Om du aktiverar loggning måste du ange den fullständiga sökvägen till och namnet på loggfilen där loggningsinformationen ska sparas. Loggfilen bör ha namnet streamer.log.",

		admin_redaction_logging_trace_hover: "Felsöka allmänna problem med Permanent Redaction Server Module.<br><br>Som standard sparas loggningsinformationen i filen redacttofile.log i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_redaction_logging_trace_net_hover: "Felsöka följande problem:<ul><li>Problem med serveranslutningen</li><li>Problem med specifika MIME-typer.</li><li>Problem med för långa filer</li></ul>Du kan också använda nätverksloggning för att bestämma var fördröjning sker när Permanent Redaction Server Module används.<br><br>Som standard sparas loggningsinformationen i filen redacttofile.log i underkatalogen config i IBM Content Navigator-installationskatalogen.",
		admin_redaction_logging_log_file_hover: "Om du aktiverar loggning måste du ange den fullständiga sökvägen till och namnet på loggfilen där loggningsinformationen ska sparas. Loggfilen bör ha namnet redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfigurera funktioner för visningsprogram och tjänster.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Om du använder webbklienten för att ansluta till en eller fler Content Manager OnDemand-behållare måste du ange information som OnDemand Web Enablement Kit kräver för att fungera på rätt sätt. Informationen delas av alla Content Manager OnDemand-behållare som har konfigurerats för webbklienten.",
		admin_ondemand_language: "Språk:",
		admin_ondemand_tempdir: "Temporär ODWEK-katalog:",
		admin_ondemand_tracegrp: "ODWEK-spårning",
		admin_ondemand_tracedir: "Spårningskatalog:",
		admin_ondemand_tracelevel: "Spårningsnivå:",
		admin_ondemand_tracelevel_0: "0 - Ingen loggning",
		admin_ondemand_tracelevel_1: "1 - Loggning av felmeddelanden",
		admin_ondemand_tracelevel_2: "2 - Loggning av fel- och varningsmeddelanden",
		admin_ondemand_tracelevel_3: "3 - Loggning av fel-, varnings- och informationsmeddelanden",
		admin_ondemand_tracelevel_4: "4 - Alla meddelanden samlas in, inklusive funktionsspårning",
		admin_ondemand_max_trace_filesize: "Maximal spårningsfilstorlek:",
		admin_ondemand_max_trace_filesize_unlimited: "Obegränsad",
		admin_ondemand_max_trace_filesize_limited: "Begränsad (rekommenderas)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Värdet är utanför intervallet. Tillåtet intervall: 1-1000000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF-installationskatalog:",
		admin_ondemand_language_hover: "Ange på vilket språk ODWEK ska visa meddelanden.",
		admin_ondemand_tempdir_hover: "Ange den katalog där OnDemand Web Enablement Kit lagrar temporära filer under bearbetningen. Du måste ange den fullständiga sökvägen till en befintlig katalog på webbprogramservern.",
		admin_ondemand_tracedir_hover: "Ange den katalog där du vill lagra ODWEK-spårningsfilen arswww.trace. Du måste ange den fullständiga sökvägen till en befintlig katalog på webbprogramservern.",
		admin_ondemand_tracelevel_hover: "Ange den loggningsinformationsnivå som skrivs till filen arswww.trace. <b>Felmeddelandeloggning</b> loggar minst mängd information. <b>Alla meddelanden loggas, inklusive funktionsspårning</b> loggar mest information.<br /><br />Välj inte <b>Alla meddelanden loggas, inklusive funktionsspårning</b> i en produktionsmiljö såvida du inte får instruktioner från IBM Software Support att göra det.",
		admin_ondemand_max_trace_filesize_hover: "Ange om ODWEK-spårningsfilen ska få växa till obegränsad storlek eller om webbklienten ska skapa nya loggfiler när loggfilen når en viss storlek. Standardinställningen är att låta spårningsloggfilen växa tills webbprogrammet stoppas på webbprogramservern.",
		admin_ondemand_max_trace_unlimited_hover: "Välj det här alternativet om ODWEK-spårningsinformationen ska skrivas till en enda loggfil. Om du väljer alternativet kan du få en loggfil som är för stor för att öppna i ett vanligt filvisningsprogram.",
		admin_ondemand_max_trace_limited_hover: "Välj det här alternativet om ODWEK-spårningsinformationen ska skrivas till mindre loggfiler. När en loggfil når maximal storlek ändras den aktuella loggfilens namn genom att datumet läggs till (t.ex. arswww.trace.YYYYMMDD.HHMMSS) och en ny loggfil skapas.",
		admin_ondemand_afp2pdf_installdir_hover: "Om du vill använda verktyget AFP2PDF Transform för konvertering av AFP-dokument till PDF-dokument för visning och utskrift, anger du den katalog där AFP2PDF Transform är installerat på webbprogramservern. Exempel: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administratörer",
		admin_adminusers_heading_text_multi: "Du måste ange vilka användare som har administrationsbehörigheter i webbklienten. Endast administratörer kan logga in till administrationsskrivbordet.<br /><br /><b>Viktigt!</b> Användar-IDna för IBM Content Navigator-administratörerna måste matcha:<ul><li>Användar-IDn som finns på webbprogramservern. Användar-IDna behöver inte vara administratörer på webbprogramservern.</li><li>Användar-IDn som finns i den standardbehållare som har konfigurerats för varje skrivbord som har administrationsfunktionen.</li></ul>",
		admin_adminusers_heading_text_single: "Du måste ange vilka användare som har administrationsbehörigheter i webbklienten. Endast administratörer kan logga in till administrationsskrivbordet.<br /><br /><b>Viktigt!</b> Användar-IDna för IBM Content Navigator-administratörerna måste matcha de användar-IDn som finns på webbprogramservern. Användar-IDna behöver inte vara administratörer på webbprogramservern.",
		admin_adminusers_newuser: "Ny administratör:",
		admin_adminusers_add: "Lägg till",
		admin_adminusers_remove: "Ta bort",
		admin_adminusers_listheading: "Administratörer",
		admin_adminusers_nameInvalid: "Värdet får inte vara en dubblett.",

		admin_sync_server_instructions: "<b>Endast FileNet P8-användare:</b> Om du ska aktivera Sync Services för en eller fler behållare måste du konfigurera webbklienten för Sync Services. Sync Services-konfigurationen delas av alla behållare i miljön.",
		admin_settings_instructions: "De värden som du anger på fliken Inställningar gäller för alla skrivbord i konfigurationen.",
		admin_autocomplete: "Fyll i användarnamn automatiskt:",
		admin_autocomplete_hover: "Ange om webbklienten ska spara användarnamnen i cookies så att webbläsaren automatiskt fyller i användarnamnen i webbklienten vid inloggningen.<br><br>Om du aktiverar alternativet lagras användarnamnet för den senast inloggade användaren i webbklienten i webbläsarcookies och visas automatiskt på inloggningssidan när en användare öppnar webbklienten.<br><br>Avaktivera alternativet om programmet startas från en delad dator, eller om du ogärna lagrar användarnamn i webbläsarcookies.<br /><br />Det här alternativet gäller inte mobila eller anpassade program.",
		admin_autocomplete_enable: "Aktivera",
		admin_autocomplete_disable: "Avaktivera",
		admin_cultural_collation: "Använd språkspecifik sortering:",
		admin_cultural_collation_hover: "Om du aktiverar språkspecifik sortering, utförs sorteringen på behållarservern. Det kan försämra webbklientens prestanda.<br><br>Avaktivera språkspecifik sortering kan förbättra webbklientens prestanda.",
		admin_cultural_collation_enable: "Aktivera",
		admin_cultural_collation_disable: "Avaktivera",
		admin_base_ui_style: "Temaformat",
		admin_base_ui_style_hover: "Ange formatet för standardtemat som används i webbklienten. Formatet används endast på skrivbord som använder temat <b>Standard</b> (anges på fliken <b>Utseende</b> i skrivbordskonfigurationen).<br/></br><b>Begränsning:</b> Om skrivbordskonfigurationerna använder anpassade teman, baseras dessa på det klassiska formatet oavsett vilket format du väljer.",
		admin_base_ui_style_classic: "Klassisk",
		admin_access_control_access: "Begränsa åtkomsten till vissa användare och grupper",
		admin_access_control_access_show: "Visa åtkomstkontrolldata",
		admin_access_control_access_enable: "Ja",
		admin_access_control_access_disable: "Nej",
		admin_mobile_access: "Tillåt åtkomst från mobilprogram",
		admin_mobile_access_hover: "Som standard kan användare accessa webbklienten från IBM Content Navigator iOS-program.<br /><br /><b>Viktigt!</b> Om du förhindrar användare att accessa webbklienten från iOS-programmet, kan användare fortfarande accessa webbklienten från webbläsare i sina mobilenheter och från alla anpassade program som skrivs genom att använda IBM Content Navigator APIer och som fungerar på mobila enheter.",
		admin_mobile_access_enable: "Ja",
		admin_mobile_access_disable: "Nej",
		admin_error: "Felmeddelandeinformation:",
		admin_error_custom: "Sök i anpassat supportinnehåll",
		admin_error_default: "Sök i IBM Support-innehåll <BDO DIR='LTR'>(</BDO>standard<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Ange var användarna kan få mer information när de får ett felmeddelande. Du kan hänvisa dem till den information om felmeddelandet som finns på IBM Support Portal eller till en extern resurs, t.ex. en helpdesk.",
		admin_error_URL: "URL-prefix:",
		admin_error_URL_hover: "Ange URL-adressen till den resurs som du vill hänvisa användarna till när de får ett felmeddelande, t.ex. till en helpdesk. Exempel: http://lokalvärd:portnummer. Webbklienten lägger till meddelandenumret i URL-adressen.",
		admin_prompt_close_without_save: "Vill du stänga utan att spara ändringarna?",
		admin_object_expiration_time: "Cacheuppdateringsintervall (i minuter):",
		admin_object_expiration_time_hover: "Du kan förlänga den tid som konfigurationsobjekten, t.ex. skrivbord, behålls i cache för att förbättra webbklientens prestanda. Standardtiden är 10 minuter. Den maximala tiden är 1440 minuter (1 dag).<br /><br />Du måste starta om webbprogrammet för att ändringarna ska börja gälla.<br /><br />Om IBM Content Navigator är driftsatt i en högtillgänglig klustrad miljö, sprids inte eventuella ändringar av konfigurationsobjekten till noderna i klustret förrän cache uppdateras.",
		admin_temp_file_cleanup_interval: "Skanningsintervall för rensning av visningsprogramcache (timmar):",
		admin_temp_file_cleanup_interval_hover: "Schemalägg hur ofta den temporära katalogen skannas för att hitta och ta bort inaktuella temporära filer. Standardvärdet är var sjätte timme. Du kan ange 6-48 timmar.",
		admin_temp_file_expiration_interval: "Gör visningsprogramcache inaktuellt (timmar):",
		admin_temp_file_expiration_interval_hover: "Ange hur länge temporära filer relaterade till aktiviteter i visningsprogrammet ska sparas i webbläsarcache. Som standard blir de temporära filerna inaktuella efter 24 timmar. Du kan ange 12-48 timmar.",
		admin_encryption_key_hover: "Nyckel för Navigator-krypteringsfunktioner.",
		admin_encryption_key: "Krypteringsnyckel:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Varumärkning",
		admin_mobile_branding_main_color: "Huvudfärg:",
		admin_mobile_branding_secondary_color: "Sekundär färg:",
		admin_mobile_device_title: "MaaS360-hantering",
		admin_mobile_device_enable_maas360: "Aktivera MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Hjälp om MaaS360-aktivering",
		admin_mobile_device_maas360_developer_id: "ID för MaaS360-utvecklare:",
		admin_mobile_device_maas360_license_key: "MaaS360-licensnyckel:",
		admin_mobile_settings_title: "Inställningar",
		admin_mobile_email_address_hover_help: "E-postadressen används i det mobila programmet när en användare klickar på Skicka felrapport.",
		admin_mobile_email_address: "E-postadress:",
		admin_invalid_email_address_message: "E-postadressen har inte rätt format. Ändra e-postadressen och försök igen.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Vissa data är ogiltiga.",
		admin_configuration_parameters: "Konfigurationsparametrar",
		admin_configuration_optional_features: "Fler funktioner",
		admin_configuration_optional_features_p8_instructions: "Välj funktioner för behållaren.<p><b>Viktigt!</b> Om du aktiverar en funktion som installerar ett tillägg för behållaren måste du vara ansluten till behållaren som Content Platform Engine- eller Content Engine-administratör.</p>",
		admin_configuration_optional_features_cm_instructions: "Välj funktioner för behållaren.<p><b>Viktigt!</b> De här funktionerna ändrar behållarens datamodell. Om du vill aktivera dem måste du vara ansluten till behållaren som en biblioteksserveradministratör.</p>",
		admin_system_properties: "Systemegenskaper",
		admin_system_properties_for: "Systemegenskaper för:",
		admin_available_properties: "Tillgängliga egenskaper",
		admin_displayed_properties: "Visade egenskaper",
		admin_selected_properties: "Valda egenskaper",
		admin_selected_filtered_properties: "Dolda egenskaper",
		admin_available_operators: "Visade operatorer",
		admin_selected_filtered_operators: "Dolda operatorer",
		admin_system_properties_shown: "Visade egenskaper",
		admin_system_properties_hidden: "Dolda egenskaper",
		admin_available_menu_items: "Tillgängliga åtgärder:",
		admin_selected_menu_items: "Valda åtgärder:",
		admin_menu_global: "Tillämpas när inga objekt är valda:",
		admin_menu_multiple_document: "Tillämpas när flera objekt är valda:",
		admin_menu_privileges: "Behörigheter som krävs:",
		admin_menu_plugin: "Insticksprogram:",
		admin_menu_repository_types: "Behållartyper:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Avgränsare",
		admin_browse: "Bläddra",
		admin_search: "Sök",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Rollbaserad redigering",
		admin_connections_library_enabled: "IBM Connections har aktiverats",
		admin_office_conf: "Redigeringsintegrering",
		admin_desktop_conf_label: "Skrivbordskonfiguration",
		admin_ms_office_conf_label: "Office-konfiguration",
		admin_workflows: "Arbetsflöden",
		admin_file_types: "Filtyper",
		admin_file_type_contains_label: "Filtypen innehåller",
		admin_name_propepty: "Namn",
		admin_cm_name_property_default: "Använd standardnamn",
		admin_cm_name_property_default_hover: "Som standard används ICM-hierarkinamnet (egenskapen ICM$NAME) som objektnamn, om egenskapen är definierad för objektet. Om ICM-hierarkinamnet (ICM$NAME) inte är tillgängligt används den första egenskapen som är flaggad som \"representerar\" som objektnamn.",
		admin_cm_name_property: "Ange objektnamnsegenskapen",
		admin_cm_name_property_hover: "Ange vilken egenskap som används som namn för dokument och mappar.",
		admin_name_property: "Namnegenskap:",
		admin_doc_name_property: "Dokumentnamnsegenskap:",
		admin_doc_name_property_hover: "Ange vilken egenskap som ska användas som dokumentnamn.",
		admin_folder_name_property: "Mappnamnsegenskap:",
		admin_folder_name_property_hover: "Ange vilken egenskap som ska användas som mappnamn.",
		admin_all_searches_label: "Hur många sökningar ska visas:",
		admin_unlimited: "Obegränsat",
		admin_limit: "Begränsat till",
		admin_repository: "Behållare:",
		admin_application_space: "Programutrymme",
		admin_available_application_spaces: "Tillgängliga programutrymmen:",
		admin_selected_application_spaces: "Valda programutrymmen:",
		admin_label: "Etikett",
		admin_repository_box_placeholder: "Välj en Box-behållare",
		admin_repository_placeholder: "Välj en behållare",
		admin_search_match: "Matcha:",
		admin_search_match_all: "Matcha alla sökvillkor",
		admin_search_match_any: "Matcha något av sökvillkoren",
		admin_search_match_hover: "Ange det alternativ som väljs som standard på menyn <b>Egenskapsalternativ</b>.",

		admin_repository_redactions_instructions: "Du kan konfigurera rollbaserad redigering för den här behållaren.",
		admin_repository_redaction_policies_description: "Du kan skapa och hantera redigeringsprinciper vilket associerar redigeringsorsaker med användare och grupper som kan läsa känslig information och redigera anteckningar som skyddar känslig information från visning.",
		admin_repository_redaction_roles_instruction: "Du kan skapa en redigeringsroll och associera den till vissa användare och grupper med behörighet att läsa känslig information eller redigera anteckningar som skyddar känslig information från visning. Redigeringsrollen måste vara associerad med en redigeringsorsak i en redigeringsprincip innan användarna och grupper kan läsa informationen eller ändra anteckningarna.",
		admin_repository_redaction_reasons_instruction: "Du kan konfigurera redigeringsorsaker för behållaren.",
		admin_repository_redaction_policies: "Konfigurera redigeringsprincip",
		admin_repository_redaction_roles: "Konfigurera redigeringsroller",
		admin_repository_redaction_reasons: "Konfigurera redigeringsorsaker",
		admin_repository_redaction_roles_type: "Typ",
		admin_repository_redaction_roles_type_hover: "En redigerare kan skapa, ändra och ta bort specifika typer av rollbaserad redigering medan en läsa kan se specifika typer av känslig information.",
		admin_repository_redaction_roles_type_editor: "Redigerare",
		admin_repository_redaction_roles_type_viewer: "Visningsprogram",
		admin_repository_redaction_roles_membership: "Medlemskap",
		admin_repository_redaction_roles_membership_hover: "Välj de redigerare som ska ha den här rollen.",
		admin_repository_redaction_roles_user_group_hover: "Sök efter användare och grupper, eller välj de redigerare som ska ha den här rollen.",
		admin_repository_redaction_roles_description: "Du kan skapa och hantera redigeringsroller som associerar användare och grupper som kan läsa känslig information och ändra anteckningar som skyddar känslig information från visning.",
		admin_repository_redaction_new: "Ny redigeringsroll",
		admin_repository_redaction_role_avail_editors: "Tillgängliga redigerare",
		admin_repository_redaction_role_avail_users: "Tillgängliga användare",
		admin_repository_redaction_role_avail_groups: "Tillgängliga grupper",
		admin_repository_redaction_role_selected_editors: "Valda redigerare",
		admin_repository_redaction_role_selected_users_groups: "Valda användare och grupper",
		admin_repository_redaction_role_add_editor: "Ny redigerare...",
		admin_repository_redaction_role_access_type: "Åtkomst",
		admin_repository_redaction_role_access_type_access: "Tillåt",
		admin_repository_redaction_role_access_type_no_access: "Neka",
		admin_repository_redaction_role_users: "Användare",
		admin_repository_redaction_role_groups: "Grupper",
		admin_repository_redaction_role_editors: "Redigerare",
		admin_delete_confirmation_redaction_roles: "Vill du ta bort vald redigeringsroll?",
		admin_repository_edit_redaction_role: "Redigeringsroll: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Standardåtkomst",
		// RBA
		desktop_user_group_acl: "Skrivbordsadministratörer",
		desktop_user_group_remove: "Ta bort",
		desktop_rba_membership: "Medlemskap:",
		desktop_rba_membership_list_label: "Namn",
		admin_repository_redaction_policy_hover: "Tillhandahåll en beskrivning som gör det möjligt för användarna att skilja mellan den här principen och andra principer.",
		admin_repository_new_redaction_policy: "Ny redigeringsprincip",
		admin_repository_policy_name: "Principnamn",
		admin_repository_reason_redactions: "Redigeringsorsaker:",
		admin_repository_role_editors: "Redigerare",
		admin_repository_role_viewers: "Visningsprogram",
		admin_repository_redaction_policy_instruction: "Du kan skapa en redigeringsprincip och associera valda redigeringsorsaker med både redigerare och läsare.",
		admin_repository_redaction_reasons_hover: "Välj en eller fler typer av känslig information som användare inte ska kunna se, t.ex. personlig identifierbar information, affärshemligheter och företagsegendom.",
		admin_repository_readaction_available_reasons: "Tillgängliga orsaker",
		admin_repository_readaction_selected_reasons: "Valda orsaker",
		admin_repository_readaction_new_reason: "Ny orsak...",
		admin_repository_redeaction_reasons: "Redigeringsorsaker:",
		admin_repository_readaction_editor_permmission: "Redigerare:",
		admin_repository_redaction_editors_hover: "Välj de roller som kan skapa och ändra redigering för valda orsaker.",
		admin_repository_readaction_new_editor_role: "Ny redigerarroll...",
		admin_repository_readaction_available_editors: "Tillgängliga redigerarroller",
		admin_repository_readaction_selected_editors: "Valda redigerarroller",
		admin_repository_readaction_viewer_permmission: "Redigeringsvisningsprogram:",
		admin_repository_redaction_viewers_hover: "Välj de roller som kan se känslig information för valda orsaker. Redigeringen tillämpas inte för användare och grupper som har de här rollerna.",
		admin_repository_readaction_new_viewer_role: "Ny visningsroll...",
		admin_repository_readaction_available_viewers: "Tillgängliga visningsroller",
		admin_repository_readaction_selected_viewers: "Valda visningsroller",
		admin_repository_reason_redactions_header: "Redigeringsorsaker",
		admin_delete_confirmation_redaction_policy: "Vill du ta bort vald redigeringsprincip?",
		admin_role_type_repository: "Behållare",
		admin_role_type_administrator: "Administratör",
		admin_role_type_template: "Mall",
		admin_role_type_teamspace: "Grupprum",
		admin_role_type_author: "Redigerare",
		admin_role_type_user: "Visningsprogram",
		admin_collaboration_services_instructions: "Om du har IBM Connections och ett FileNet Collaboration Services-webbprogram kan du konfigurera gemenskapsgrupprum och aktivitetsströmmar för behållaren.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Gemenskapsbibliotekskonfiguration",
		admin_collaboration_community_instruction: "Du kan konfigurera en behållare i IBM FileNet P8-domänen där IBM Connections-gemenskapsbibliotek (även kallat grupprum) ska sparas. När användaren skapar ett gemenskapsbibliotek via IBM Connections lagras det i den behållare som är avsedd som gemenskapsbiblioteksbehållare.",
		admin_collaboration_community_teamspaces: "Använd behållaren för gemenskapsbibliotek:",
		admin_collaboration_community_teamspaces_hover: "Det går bara att använda en behållare i IBM FileNet P8-domänen för att lagra nya gemenskapsbibliotek. Om du aktiverar behållaren och det redan finns bibliotek avaktiveras den befintliga behållaren. Alla befintliga bibliotek behålls dock i den aktuella behållaren.",
		admin_collaboration_connections_anonymous: "Tillåt anonym access till allmänt innehåll:",
		admin_collaboration_connections_anonymous_hover: "Om IBM Connections-servern innehåller allmänna eller modererade gemenskaper kan du konfigurera FileNet Collaboration Services att tillåta användare att bläddra i och hämta innehåll från biblioteken i de gemenskaperna utan att behöva logga in.<br><br>Användare som accessa gemenskapsbibliotek anonymt får inte skapa, ändra eller ta bort innehåll.<br><br><b>Viktigt!</b> Du måste utse en IBM FileNet P8 LDAP-användare som anonym användare och konfigurera den användaren för rollen <b>Anonym</b> i WebSphere Application Server.",
		admin_collaboration_connections_url: "IBM Connections-URL:",
		admin_collaboration_connections_url_hover: "Ange URL-adressen till IBM Connections-servern i formatet http://IBMConnectionsServer:portnummer. Om IBM Connections har konfigurerats för IBM HTTP Server kan du utelämna portnumret i URL-adressen.<br><br>IBM Connections-användare måste kunna nå URL-adressen eftersom det är den länken som FileNet Collaboration Services använder för att skapa länkar till dokumentlandningssidor i IBM Connections.",
		admin_collaboration_connections_url_http_use: "Använd IBM Connections-URL",
		admin_collaboration_connections_url_https_use: "Använd IBM Connections HTTPS-URL",
		admin_collaboration_connections_url_specify: "Ange URL-adressen",
		admin_collaboration_connections_url_https: "IBM Connections HTTPS-URL:",
		admin_collaboration_connections_url_https_hover: "Om IBM Connections har konfigurerats för SSL anger du HTTPS-URL till IBM Connections-servern i formatet https://IBMConnectionsServer:portnummer. Om IBM Connections har konfigurerats för IBM HTTP Server kan du utelämna portnumret i URL-adressen.",

		admin_collaboration_connections_gadget_url: "IBM Connections gadget-URL:",
		admin_collaboration_connections_retrieval_url: "IBM Connections hämtnings-URL:",
		admin_collaboration_connections_security: "Gemenskapsadministratörer:",
		admin_collaboration_connections_security_hover: "Ange vilka användare och grupper som kan administrera innehållet i gemenskapsbiblioteken.<br><br>Globala administratören kan skapa, ändra, ta bort och ge access till gemenskapsbibliotek och innehåll i gemenskapsbibliotek. När du utser en användare till global administratör för användaren behörigheten ClbGlobalAdministrator i behållaren.<br><br>Globala granskningsadministratörer kan godkänna eller avvisa innehåll under granskning för publicering i ett gemenskapsbibliotek. När du utser en användare till global granskningsadministratör får användaren behörigheten ClbGloablReviewAdministrator i behållaren.",

		admin_collaboration_connections_admins: "Globala administratörer",
		admin_collaboration_connections_admins_review: "Globala granskningsadministratörer",
		admin_collaboration_connections_seedlist: "Indexera gemenskapsbiblioteksinnehåll.",
		admin_collaboration_connections_seedlist_hover: "Ange om du vill att IBM Connections skapa ett sökindex för gemenskapsbiblioteken i behållaren. Genereringen av ett index kan påverka behållarens prestanda.<br><br>Om Social Collaboration Search Indexing Extensions har installerats för behållaren är det här alternativet som standard aktiverat. Om Social Collaboration Search Indexing Extensions inte har installerats installeras tillägget för behållaren när du aktiverar alternativet.",
		admin_collaboration_activity_stream: "Konfigurera aktivitetsströmhändelse",
		admin_collaboration_activity_stream_label: "Skicka händelseinformation till IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Ange om du vill att händelseinformation, t.ex. dokumentgenerering, utcheckning, incheckning, kommentering, märkning och delning ska skickas till IBM Connections.<br><br><b>Viktigt!</b> Att skicka aviseringar till IBM Connections kan påverka behållarens prestanda.",

		admin_collaboration_activity_stream_instruction: "Du kan konfigurera behållaren att skicka händelseinformation, t.ex. kommentarer och dokumentgodkännanden, till IBM Connections. Händelser visas på sidan <b>Aktuella uppdateringar</b> i IBM Connections-gemenskaper. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorera händelseinformation för vissa användare och grupper:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Du kan ignorera händelser som genereras av vissa användare eller grupper, t.ex. administratörer eller systemkonton, för att minska antalet aviseringar som användarna ser. Exempel: Om du migrerar innehåll kan du välja att händelser som genereras av migreringskontot ska ignoreras.",
		admin_collaboration_activity_stream_userid: "IBM Connections-användarnamn:",
		admin_collaboration_activity_stream_userid_hover: "Ange det systemkonto som Content Platform Engine-ska använda för autentisering och händelseinformation till IBM Connections. Användaren måste ha rollen <b>trustedExternalApplication</b> i widgetbehållarprogrammet i IBM Connections.<br><br><b>Tips!</b> IBM Connections-administratören har som standard tillräcklig behörighet. Du kan använda administratörs-IDt som användarnamn.",
		admin_collaboration_activity_stream_password: "IBM Connections-användarlösenord:",

		admin_help_url: "URL-adress för användarhjälp:",
		admin_help_url_hover: "<b>Viktigt:</b> IBM Knowledge Center Customer Installed kommer inte att uppdateras från och med IBM Content Navigator Version 3.0.0. Kontakta kundsupport för mer information om att använda anpassad hjälp.<br><br>Från och med IBM Content Navigator version 3.0.0 går URL-adressen för användarhjälpen till IBM Knowledge Center. URL-adressen för IBM Knowledge Center är: http://www.ibm.com/support/knowledgecenter.<br><br>Om du vill fortsätta att använda en föregående version av IBM Knowledge Center Customer Installed, anger du URL-adressen till den förekomst av IBM Knowledge Center Customer Installed som driftsattes med konfigurations- och driftsättningsverktyget i IBM Content Navigator. Det måste gå att nå URL-adressen från klientdatorerna. URL-adressen har formatet http://servernamn:portnummer/kc.<br><br>Du kan hämta servernamnet och portnumret från filen console.log som finns i underkatalogen KnowledgeCenter/logs i IBM Content Navigator-installationskatalogen.",

		admin_help_default: "Använd standardhjälpen från IBM",
		admin_custom_help: "Använd ett anpassat hjälpsystem",
		admin_help_kc: "Använd anpassad hjälp i IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Viktigt:</b> IBM Knowledge Center Customer Installed kommer inte att uppdateras från och med IBM Content Navigator Version 3.0.0. Kontakta kundsupport för mer information om att använda anpassad hjälp.<br><br>Om du vill fortsätta att använda en föregående version av IBM Knowledge Center Customer Installed, väljer du detta alternativ för att fortsätta att lägga till innehåll till den förekomst av IBM Knowledge Center Customer Installed som för närvarande är driftsatt.",
		admin_help_taxonomy: "Taxonomikod:",
		admin_help_taxonomy_hover: "Ange taxonomikoden för den anpassade hjälpen.<br><br>Taxonomikoden för IBM Content Navigator är SSEUEX. Om du vill att hjälpen ska visas under ett annat produktnamn i IBM Knowledge Center Customer Installed måste du lägga till en unik taxonomikod i filen KC_taxonomy.ditamap i katalogen KnowledgeCenter/usr/taxonomy i IBM Content Navigator-installationskatalogen.",
		admin_help_context: "Hjälpkontext:",
		admin_help_context_hover: "Ange kontext för den anpassade hjälpen.<br><br>Hjälpen för IBM Content Navigator finns i katalogen KnowledgeCenter/usr/content/com.ibm.usingeuc.doc i IBM Content Navigator-installationskatalogen. Kontext för standardhjälpen är com.ibm.usingeuc.doc. Om du vill tillhandahålla anpassad hjälp lägger du till innehållet i en ny underkatalog i katalogen KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Landningssida:",
		admin_help_welcome_hover: "Ange namnet på det avsnitt som ska användas som landningssida när användarna öppnar hjälpen. Du måste skapa en egenskapsfil som beskriver landningssidans plats och lägga till egenskapsfilen i katalogen KnowledgeCenter/usr/conf i IBM Content Navigator-installationskatalogen.",

		admin_settings_mimetype_extensions_jsonfile: "JSON-fil för MIME-typtillägg:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verifiera JSON-filnamnet och den fullständiga sökvägen till filen. Filen kan vara en allmän fil från filsystemet eller en URL som pekar på JSON-filen. <br><br>JSON-filinnehållet är en matris med MIME-typdefinitioner. <br><br>En MIME-typdefinition inkluderar fyra nycklar \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". De två första nycklarna \"mimeTypes\", \"extensions\" krävs, och de kan vara strängmatriser separerade med \",\". De två sista nycklarna \"fileType\", \"iconName\" är valfria. <br><br>Exempel: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfigurera Task Manager",
		admin_taskmanager_service: "Task Manager-tjänst:",
		admin_taskmanager_service_hover: "Ange om du vill använda Task Manager-tjänsten för att skapa och köra synkrona uppgifter. <br><br>Om du ändrar inställningen måste du starta om IBM Content Navigator-webbprogrammet för att ändringarna ska gälla.",
		admin_taskmanager_url: "URL till Task Manager-tjänst:",
		admin_taskmanager_url_hover: "Ange URL-adressen för kommunikation mellan andra program och Task Manager-tjänsten. URL-adressen har formatet http://servernamn:portnummer/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Task Manager-loggkatalog:",
		admin_taskmanager_logdirectory_hover: "Som standard sparas loggfilerna för Task Manager-tjänsten i samma katalog som webbprogramserverns loggfiler. <br><br>Om du vill att loggningsinformationen ska sparas i någon annan katalog på IBM Content Navigator-servern anger du den fullständiga sökvägen till katalogen där loggfilerna som genereras av Task Manager-komponenten ska sparas. <br><br>Om du ändrar inställningen måste du starta om IBM Content Navigator-webbprogrammet för att ändringarna ska gälla.",
		admin_taskmanager_heartBeatMonitor: "Klusterhjärtslagsövervakning",
		admin_taskmanager_heartBeatMonitor_hover: "Endast klustermiljöer med hög tillgänglighet. Om du aktiverar det här alternativet dirigerar Task Manager-tjänsten om uppgifterna från noder som är nere till noder som är uppe och igång. <br><br>Om du ändrar inställningen måste du starta om IBM Content Navigator-webbprogrammet för att ändringarna ska gälla.",

		admin_syncserver_title: "Konfigurera Sync Server",
		admin_syncserver_enable: "Sync Services:",
		admin_syncserver_enable_hover: "Ange om du vill att användare som använder skrivbordet ska kunna synkronisera sina objekt mellan datorerna och de mobila enheterna.<br><br><b>Viktigt!</b> Om den här funktionen ska kunna användas måste du göra följande:<ul><li>Ange <b>Allmän Sync Services-URL</b> i avsnittet <b>Sync Services</b> i administrationsverktyget.</li><li>Lägg till en behållare som Sync Services har aktiverats för på skrivbordet.</li></ul>Om du avaktiverar det här alternativet men lägger till en behållare som Sync Services är aktiverat för ignoreras inställningen för den behållaren.",
		admin_mobileqr_enable: "Visa IBM Navigator QR-kod på inloggningssida:",
		admin_mobileqr_enable_hover: "Aktivera det här alternativet om QR-koden för IBM Navigator-mobilapplikationen ska visas på webbklientens inloggningssida. <br><br>När användare skannar QR-koden kommer de till lämpligt App Store för sin enhet, där de kan hämta IBM Navigator-mobilapplikationen.",

		admin_streamlineservice_enable: "Edit Service:",
		admin_streamlineservice_enable_hover: "Endast FileNet P8-användare. Aktivera det här alternativet om skrivbordsanvändarna lätt ska kunna lägga till och redigera dokument från applikationer på sina datorer. <br><br>För att använda den här inställningen måste du också: <ul><li>Aktivera Edit Service på en eller flera behållare som är associerade med det här skrivbordet</li><li>Installera IBM Content Navigator Edit-klienten på användarnas datorer</li></ul>",

		admin_repository_general_instructions: "Du måste ansluta till behållaren innan du kan konfigurera parametrar, systemegenskaper, mappar osv.",
		admin_repository_system_instructions: "Ange vilka systemegenskaper som visas för dokumenten och mapparna i behållaren.",

		admin_desktop_general_create_instructions: "Ett skrivbord bestämmer vad användarna kan se och göra när de loggar in till webbklienten. När du har skapat ett skrivbord kan du skicka URL-adressen till användare så att de får tillgång till skrivbordet.",
		admin_desktop_admin_instructions: "Administrationsskrivbordet tillhandahålls med webbklienten så att administratörer kan definiera webbklienten. Skrivbordet har åtkomst till alla behållare som är konfigurerade för webbklienten.",
		admin_desktop_repositories_instructions: "Ange vilka behållare användarna ska kunna nå från skrivbordet. Du måste konfigurera behållarna innan du kan lägga till dem på skrivbordet.<br><br><b>Tips!</b> Du kan begränsa vilka behållare som ska vara tillgängliga för varje funktion när du utformat skrivbordet.",
		admin_desktop_menus_instructions: "Ange vilka menyer användarna ska kunna nå från skrivbordet. Menyerna anger vilka åtgärder som är tillgängliga beroende på vad som väljs i gränssnittet.<br><br><b>Tips!</b> Du kan anpassa menyerna i avsnittet <b>Menyer</b> i administrationsverktyget eller skapa nya typer av menyer genom med hjälp av insticksprogram.",

		admin_desktop_no_repositories: "Inga behållare är konfigurerade.",

		admin_desktop_id_hover: "Skrivbords-IDt ingår i webbklientens URL-adress och anger vilket skrivbord som öppnas när en användare loggar in till webbklienten. IDt måste vara unikt och du kan inte ändra IDt när du väl har sparat skrivbordet.<br><br>IDt får endast innehålla alfanumeriska tecken och är skiftberoende.",
		admin_desktop_id_disabled_hover: "Skrivbords-IDt kan inte ändras. Om du vill använda ett annat ID måste du skapa ett nytt skrivbord.",
		admin_desktop_name_hover: "Skrivbordsnamnet får inte innehålla följande tecken: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Konfigurationen får endast innehålla ett standardskrivbord.",

		admin_repository_id_disabled_hover: "Det går inte att ändra behållar-IDt. Om du vill använda ett annat ID måste du skapa en ny behållaranslutning.",
		admin_printService_enable: "Skriv ut med IBM Daeja ViewONE-utskriftstjänst:",
		admin_printService_enable_hover: "Om du väljer att aktivera IBM Daeja ViewONE-utskriftstjänsten, konverteras dokument till PDF-format och utskrifter kan göras genom att använda valfri webbläsare.<br><br>Om du väljer att avaktivera utskriftstjänsten IBM Daeja ViewONE blir du begränsad till att skriva ut dokument enbart i webbläsare som stöder Java-applet. Vissa webbläsare stöder inte Java-applet, och stöder därför inte appletutskrifter.<br><br>I dokumentationen för webbläsare som stöds finns mer information.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Användarens startkatalog",
		admin_file_tracking_doc_directory_my_documents: "Användarens dokumentkatalog",
		admin_file_tracking_doc_directory_qp: "Fullständig sökväg",
		admin_file_tracking_section_tile: "Konfigurera filspårning",
		admin_file_tracking_home_path: "Startsökväg",
		admin_file_tracking_my_documents: "Mina dokument",
		admin_file_tracking_exact_path: "Fullständig sökväg:",
		admin_file_tracking_qp: "Fullständig sökväg",
		admin_file_tracking_ev: "Miljövariabel",
		admin_file_tracking_ev_us: "Anpassad miljövariabel ",
		admin_file_tracking_del_local_copy: "Ta bort lokal kopia:",
		admin_file_tracking_yes: "Ja",
		admin_file_tracking_no: "Nej",
		admin_file_tracking_del_local_copy_rt_state_editable: "Tillåt användare åsidosätta den här inställningen",
		admin_file_tracking_del_local_copy_rt_state1: "Ja",
		admin_file_tracking_del_local_copy_rt_state2: "Nej",
		admin_file_Tracking_label: "Filspårning:",
		admin_file_Tracking_disable: "Avaktivera",
		admin_file_Tracking_enable: "Aktivera",
		admin_file_tracking_label_hover_help: "Filspårning använder en applet för att checka ut och hämta dokument till en specifik katalog på användarens dator. Appleten gör även att IBM Content Navigator kan hitta dokument på användarens dator när användaren checkar in dokument.",
		admin_file_tracking_doc_directory: "Lagringsplats:",
		admin_file_tracking_open_file: "Öppna fil automatiskt",
		admin_file_Tracking_append_qualified_path: "Lägg till katalog",
		admin_file_Tracking_append_qualified_path_hover_help: "Du kan lägga till en katalog i slutet av miljövariabeln om du vill att dokument ska sparas i en specifik underkatalog. <br/><br/>Exempel: Du kan ange att dokument ska hämtas till katalogen <i>EnterpriseDocuments</i> under användarens startkatalog.",
		admin_file_Tracking_append_ev: "Lägg till miljövariabel",
		admin_file_Tracking_append_ev_hover_help: "Du kan lägga till en miljövariabel om du vill att dokument ska sparas i en dynamiskt specificerad katalog, t.ex. en användarkatalog.<br/><br/>Exempel: Du kan ange att dokument lagras i underkatalogen <i>user_name</i> i en delad nätverkskatalog. ",
		admin_file_tracking_doc_directory_hover_help: "Ange var dokument ska lagras när de checkas ut och hämtas.<br/><br/> <b>Tips!</b> Om du vill att dokument ska lagras i en användares startkatalog eller i standarddokumentkatalogen väljer du <b>Miljövariabel</b> vilket inkluderar fördefinierade variabler som pekar på de platserna.",
		admin_file_tracking_qualified_path_hover_help: "Använd lämplig katalogstruktur för Windows eller Mac och ange katalogen eller nätverkskatalogen där dokumenten ska lagras. <ul><li>Windows: Inkludera enhetsbokstaven, t.ex. C:\\Enterprise Documents.</li><li>Delad nätverkskatalog: Ange sökvägen i formatet \\\\servernamn\\katalog</li></ul><br/><b>Viktigt!</b> Om det här alternativet ska användas måste katalogstrukturen du anger kunna skapas på alla klientdatorer i miljön.",
		admin_file_tracking_environment_variable_path_hover_help: "Använd lämpliga miljövariabler för Windows eller Mac och ange katalogen eller nätverkskatalogen där dokumenten ska lagras. <br/><br/>Alternativet <b>Användarens startkatalog</b> lagrar dokument i följande katalog:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>Alternativet <b>Användarens dokumentkatalog</b> lagrar dokument i följande katalog:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Ange om den lokala kopian av ett dokument tas bort nr användare lägger till eller checkar in dokument i behållaren.<br/><br/>Om den lokala kopian tas bort kan du<br/><ul><li>Tvinga efterlevnad av IT-regler</li><li>Se till att användare arbetar med den senaste dokumentversionen</li></ul><br/><b>Begränsning:</b> Det här alternativet används inte när användare lägger till dokument genom att dra dem.<br/><br/>För IBM Content Navigator for Microsoft Office måste du först välja <b>Ta bort lokala filer när användare lägger till eller checkar in ett dokument eller avbryter en utcheckning</b> i avsnittet <b>Office-konfiguration</b> för skrivbordet.",
		admin_file_tracking_open_file_hover_help: "Den här inställningen åsidosätter alla dokumenthanteringsinställningar som har konfigurerats i användarens webbläsare. </br></br><b>Begränsning:</b> Används inte för IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Ersätt lokal kopia:",
		admin_file_tracking_over_write_file_hover_help: "Ange om den lokala kopian av ett dokument ska ersättas när användarna checkar ut dokument från behållaren. <br/><br/>Om den lokala kopia ersätts kan du<br/><ul><li>Se till att användare arbetar med den senaste dokumentversionen</li><li>Förhindra att användarna ser en prompt när det redan finns en lokal kopia</li></ul> </br></br><b>Begränsning:</b> Används inte av IBM Content Navigator for Microsoft Office om du väljer <b>Tillåt användare åsidosätta den här inställningen</b>.",
		admin_file_tracking_over_write_file_state_editable: "Tillåt användare åsidosätta den här inställningen",
		admin_file_tracking_inline_help: "Filspårning strömlinjeformar in- och utcheckningsprocessen för dokument till och från en behållare. Du kan även bestämma hur dokument lagras på användarnas datorer. <br/><br/>Med filspårning går det också att spåra dokument i flera IBM Content Navigator-komponenter, t.ex. webbklienten och IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Du måste aktivera standard- eller serverautentisering innan du ansluter till behållaren.",
		admin_box_use_oauth: "Autentiseringstyp:",
		admin_box_use_oauth_hover: "Välj standard- eller serverautentisering i en produktionsmiljö när du ger åtkomst till Box-dokument från IBM Content Navigator. Ange de värden för klient-ID och OAuth2-klienthemlighet som är associerade med den här driftsättningen av IBM Content Navigator. Du kan hämta värdena från Box när du har skapat Box-programmet för IBM Content Navigator-servern.<br/><br/>Välj utvecklarautentisering i en utvecklingsmiljö. Utvecklare kan logga in till Box genom att använda sina utvecklarkonton och generera en utvecklartoken som är giltig i 60 minuter. Med utvecklartoken kan utvecklare logga in till Box med utvecklartoken och lösenordet för valfritt användar-ID.",
		admin_box_oauth_client_id: "klient-ID:",
		admin_box_oauth_client_secret: "klienthemlighet:",
		admin_box_oauth_subdomain: "Underdomän för Box Enterprise-konto:",
		admin_box_share: "Anslutnings-ID för Task Manager:",
		admin_box_share_hover: "För Box-kopia eller Box-delning använder Task Manager ett administratörsanvändar-ID och lösenord för att köra bakgrundsuppgifter som ändrar behållaren.<br/><br/>Klicka på Ange och logga in till Box med ett giltigt Box-administratörskonto.<br/><br/>Om du konfigurerar ett skrivbord genom att välja den här Box-behållaren som behållare för delade filer måste du ange en Box-administratörsanvändare som har obegränsad lagring i Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Öppna fil automatiskt",
		file_tracking_runtime_overwrite_hover_help: "Om du inte markerar det här alternativet och det finns dokument i det lokala filsystemet med samma namn kommer dokumentet att checkas ut men inte att hämtas såvida du inte gör något av följande:<br/><ul><li> Hämta dokumentet till en underkatalog till standardkatalogen. Om du väljer en underkatalog kan dokumentplatsen spåras av webbprogrammet.</li><li>Byter namn på dokumentet du hämtar. Namnbyte förhindrar filnamnskonflikter.</li></ul>",
		open_file: "Öppna fil automatiskt",
		over_write_file: "Ersätt lokal kopia",
		checkout_and_download_file: "Checka ut och hämta dokument",
		download_to_local_directory: "Hämta till:",
		checkout_and_download_button_title: "Checka ut och hämta",
		checkout_without_java_confirmation_dialog: "Filen kan inte hämtas och spåras av filspårningsfunktionen.",
		browse_for_directory: "Bläddra",
		selected_documents: "Valda dokument",

		checkout_without_java_confirmation_text: "Problemet kan uppstå av följande orsaker:<br/><ul><li>JRE (Java Runtime Environment) har inte installerats på datorn.</li><li>Java-insticksprogrammet har inte aktiverats i webbläsaren.</li><li>Webbläsaren hanterar inte Java.</li></ul><br/><br/>Lös problemet med lämplig åtgärd:<br/><br/><ul><li>Om du vill fortsätta att hämta filen utan filspårning klickar du på OK.</li><li>Om du vill hämta filen med filspårning avbryter du hämtningen och kontrollerar att JRE har installerats och att Java-insticksprogrammet har aktiverats i webbläsaren.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokumentet checkades ut och hämtades men det går inte att öppna dokumentet.",
		runtime_file_tracking_open_error_explanation: "Datorns operativsystem saknar funktioner för filer av den här typen.",
		runtime_file_tracking_open_error_userResponse: "Lös problemet genom att göra något av följande:<br/><br/><ul><li>Om du behöver arbeta med dokumentet öppnar du webbklienten från en annan dator med ett annat operativsystem.</li><li>Om du endast behöver läsa dokumentet högerklickar du på det i webbklienten och väljer Öppna.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokumentet checkades ut men hämtades inte.",
		runtime_file_tracking_save_file_error_explanation: "Det finns redan ett dokument med samma namn i det lokala filsystemet men det dokumentet ersattes inte. ",
		runtime_file_tracking_save_file_error_userResponse: "Om du vill hämta filen från behållaren måste du ersätta den lokala kopian av dokumentet när du hämtar dokumentet från behållaren.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokumentet checkades ut men det går inte att hämta eller öppna det.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Det finns redan ett dokument med samma namn i det lokala filsystemet. Filen ersattes dock inte vilket gör att det inte går att hämta eller öppna dokumentet från behållaren.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Om du vill hämta filen från behållaren måste du ersätta den lokala kopian av dokumentet när du hämtar dokumentet från behållaren.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Det går inte att hämta dokumentet.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Miljövariabeln ${0}, som krävs för filspårning, har inte definierats på klientdatorn.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Så här löser du problemet:<br/><br/><ul><li>Lägg till miljövariabeln ${0} i operativsystemets miljövariabler.</li><li>Logga ut från webbklienten och stäng webbläsaren. Logga sedan in igen.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Dokumentet kan inte hämtas och spåras av filspårningsappleten. ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Katalogen ${0} som krävs för filspårning har inte definierats och kan inte skapas.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Lös problemet genom att vidta lämplig åtgärd:<br/><br/><ul><li>Klicka på Bläddra och välj en annan katalog på datorn. Om du markerar det här alternativet kommer filen inte att spåras.</li><li>Be systemadministratören ange en annan katalog för filspårning. Det kan behövas om angiven katalog gäller Windows och du använder Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Om skrivbordet öppnas från enheter med ett annat operativsystem kan du minska risken för liknande problem genom att göra något av följande:<br/><br/><ul><li>Använd miljövariabler för att ange lagringsplatsen på klientdatorer.</li><li>Skapa olika skrivbord för användare med olika enheter. Exempel: Skapa ett skrivbord för Windows-användare och ett annat för Mac OS-användare.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Det går inte att bearbeta begäran.",
		runtime_file_tracking_generic_error_explanation: "Fel i filspårningsappleten.",
		runtime_file_tracking_generic_error_userResponse: "Kontakta systemadministratören.",
		runtime_file_tracking_generic_error_adminResponse: "Öppna Java-konsolen och försök skicka begäran igen. Feldetaljerna visas i Java-konsolen.<br/><br/>Du kan öppna operativsystemets Java-konsol från Kontrollpanelen (Windows) eller System Preferences (Macintosh).",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Det går inte att bearbeta begäran",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Följande filer har lagts till i behållaren men har inte tagits bort från det lokala filsystemet: ${0}. Det inträffar vanligen när filerna är öppna eller används av ett annat program. Du kan ta bort filen manuellt om det behövs.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Det går inte att hämta dokumentet.",
		runtime_file_tracking_ioexception_error_explanation: "Det går inte att hämta dokumentet.",
		runtime_file_tracking_ioexception_userResponse: "Du kanske inte har behörighet att skriva till följande katalog: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Kontrollera att du har skrivbehörighet till angiven katalog. Kontakta systemadministratören om du saknar behörighet.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Det går inte att bearbeta begäran.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Det här felet kan inträffa av följande orsaker:<br/><br/><ul><li>Du använder Safari på Mac OS och Java körs i säkert läge.</li><li>Du saknar läs- eller skrivbehörighet för den katalog som är angiven i filspårningskonfigurationen för skrivbordet.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Du kan fortsätta att använda IBM Content Navigator utan filspårning eller slutföra följande steg för att lösa problemet:<br/><br/><ol><li>Aktivera ej säkert läge för Java i Safari.</li><li>Om du får frågan om du kan lita på IBM Content Navigator-webbplatsen klickar du på <b>Lita på</b> för att läsa in sidan och aktiverar sedan ej säkert läge för Java i Safari.</li></ol><br/><br/>Om Safari har konfigurerats på rätt sätt utför du följande steg för att lösa problemet:<br/><br/><ol><li>Se till att du har läs- eller skrivbehörighet för den katalog som är angiven i filspårningskonfigurationen för skrivbordet.</li><li>Om du inte har läs- eller skrivbehörighet för katalogen ändrar du katalogbehörigheterna.</li><li>Om du inte kan ändra katalogbehörigheterna måste administratören ändra den katalog som är konfigurerad för filspårning eller ge dig åtkomst till ett skrivbord med en annan filspårningskatalog.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Det går inte att bearbeta begäran.",
		runtime_file_tracking_java__notfound_error_explanation: "Problemet uppstår vanligen i följande situationer:<br/><br/><ul><li>JRE har inte installerats eller aktiverats på datorn.</li><li>Datorns JRE-version är inte kompatibel med IBM Content Navigator-versionen.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Du kan fortsätta att använda IBM Content Navigator utan filspårning eller slutföra följande steg för att lösa JRE-problemet:<br/><br/><ol><li>Kontrollera att JRE har installerats.</li><li>Kontrollera att JRE-versionen på datorn är kompatibel med IBM Content Navigator-versionen. I <i>Hardware and Software prerequisites for IBM Content Navigator-dokument</i> på webbplatsen för IBM Software Support finns en lista över hanterade versioner.</li><li>Kontrollera att JRE har aktiverats.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Det går inte att bearbeta begäran.",
		runtime_file_tracking_security_error_explanation: "Du saknar läs- eller skrivbehörighet för den katalog som är angiven i filspårningskonfigurationen för skrivbordet.",
		runtime_file_tracking_security_error_userResponse: "Du kan fortsätta använda IBM Content Navigator utan filspårning eller utföra följande steg i samarbete med administratören:<ol><li>Se till att du har läs- eller skrivbehörighet för den katalog som är angiven i filspårningskonfigurationen för skrivbordet. </li><li>Om du inte har läs- eller skrivbehörighet för katalogen ändrar du katalogbehörigheterna.</li><li>Om du inte kan ändra katalogbehörigheterna måste administratören ändra den katalog som är konfigurerad för filspårning eller ge dig åtkomst till ett skrivbord med en annan filspårningskatalog.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Följande dokument hämtades: ${0}.",

		admin_file_tracking_inline_help: "Filspårning strömlinjeformat tillägg av dokument samt in- och utcheckning av dokument i behållaren. Du kan också bestämma hur dokument lagras på användarnas datorer.<br/><br/>Med filspårning går det också att spåra dokument i flera IBM Content Navigator-komponenter, t.ex. webbklienten och IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Meny-IDt får inte börja med \"Default\". \"Default\" är ett reserverat prefix för meny-IDn.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "IDt får endast innehålla alfanumeriska tecken och är skiftberoende.",
		admin_repository_id_hover: "Behållar-IDt ingår i webbklientens URL-adresser, favoriter och e-postlänkar för att ange vilken behållare som ska loggas in till. ID måste vara unikt och du kan inte ändra IDt när du väl har sparat behållaren.<br><br>IDt får endast innehålla alfanumeriska tecken och är skiftberoende.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Namnet får inte innehålla något av följande tecken: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Skrivbords-IDt får inte innehålla blanktecken eller något av följande tecken: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Skrivbordnamnet får inte innehålla något av följande tecken: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Visningsnamnet får inte innehålla något av följande tecken: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Ange det behållarnamn som ska visas för användarna i webbklienten.<br><br>Namnet får inte innehålla följande tecken: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Ange värdnamnet eller IP-adressen till den Content Manager OnDemand-server du ska ansluta till, t.ex. server.id.com.",
		admin_server_p8_name_hover: "Ange URL-adressen till Content Engine- eller Content Platform Engine-servern. URL-adressen är skiftberoende och har följande format:<br><br><ul><li>På WebSphere Application Server: iiop://värdnamn:portnummer/FileNet/Engine. I basdriftsättningar är standardportnumret 2809.</li><li>På WebLogic Server: t3://värdnamn:portnummer/FileNet/Engine. Standardportnumret är 7001.</li></ul><br><br>För högtillgängliga konfigurationer av Content Engine och Content Platform Engine använder du den högtillgängliga EJB-transportadressen utan prefixet cemp. ",
		admin_server_p8_protocol_hover: "Ange det protokoll som ska användas för kommunikation med Content Engine.",
		admin_server_cm_name_hover: "Ange namnet på den lokala katalogen för Content Manager-databasen eller biblioteksserverns anslutningsnamn. Det här är det värde som angetts för ICMSERVER-variabeln.",
		admin_repository_cmis_hover: "Ange IDt för den behållare du ska ansluta till. IDt för varje behållare i CMIS-miljön listas i AtomPub-bindningstjänstdokumentet. <br/><br/><b>Tips!</b>Du kan också ange en asterisk (*) för att ansluta till den första eller enda behållaren som är definierad i Atompub-bindningstjänstdokumentet.",
		admin_url_cmis_hover: "Formatet för URL-adressen varierar beroende på tjänsteleverantör. Titta i CMIS-dokumentationen eller kontakta CMIS-serveradministratör om du behöver information om URL-adressen.",
		admin_repcfg_cmis_status_columns_hover: "Ange de objektläsarlägen som du vill se ikoner för. Lägesikoner visas vid dokumenten i innehållslistan.",
		admin_port_hover: "Ange TCP/IP-portnumret som Content Manager OnDemand-servern lyssnar på. Standardvärdet är 1445.",
		admin_unified_searches_hover: "Ange om användare ska kunna spara flerbehållarsökningar i behållaren.<br/><br/>Om du inte aktiverar det här alternativet kan användare fortfarande skapa flerbehållarsökningar som körs mot behållaren. Du kan förhindra att användare skapar flerbehållarsökningar på skrivbordsnivå.<br/><br/>Om du aktiverar flerbehållarsökningar skapar IBM Content Navigator datamodellen för flerbehållarsökning på behållaren.<br/><br/>För IBM FileNet Content Manager måste du ansluta till behållaren som en Content Engine-administratör innan du kan aktivera det här alternativet.",
		admin_unified_searches_cm_hover: "Ange om användare ska kunna spara flerbehållarsökningar i behållaren.<br/><br/>Om du inte aktiverar det här alternativet kan användare fortfarande skapa flerbehållarsökningar som körs mot behållaren. Du kan förhindra att användare skapar flerbehållarsökningar på skrivbordsnivå.<br/><br/>Om du aktiverar flerbehållarsökningar skapar IBM Content Navigator datamodellen för flerbehållarsökning på behållaren.",
		admin_max_results_hover: "Ange om resultaten som returneras från en sökning ska begränsas. Om du inte begränsar sökresultaten kan det bli prestandaproblem om en sökning returnerar ett stort antal resultat.",
		admin_timeout_hover: "Ange hur länge (i sekunder) en sökning får köras i behållaren. Om sökningen inte är klar efter den angivna tiden, avbryter webbklienten sökbegäran. Rekommenderad maximal tidsgräns är 60 sekunder.",
		admin_object_store_hover: "Ange det objektlager som du vill ansluta till på Content Engine-servern. Du kan hämta det symboliska namnet från FileNet Enterprise Manager-administrationskonsolen.",
		admin_object_store_display_name_hover: "Objektlagrets visningsnamn krävs om du ska använda IBM FileNet P8-arbetsflöden. Du kan hämta objektlagervisningsnamnet från FileNet Enterprise Manager-administrationskonsolen.",
		admin_all_searches_hover: "Ange om antalet sökningar som visas under <b>Alla sökningar</b> ska begränsas när användarna söker i behållaren. Om du inte begränsar antalet sökningar, kan det leda till prestandaproblem om behållaren innehåller ett stort antal sparade sökningar.",

		admin_text_desktop: "Skrivbord",
		admin_text_repository: "Behållare",
		admin_text_plugin: "Insticksprogram",
		admin_text_theme: "Tema",
		admin_text_menu: "Meny",
		admin_text_reason_code: "Redigeringsorsak",
		admin_text_redactions: "Redigeringar",
		admin_text_viewer_mapping: "Visningsmappning",
		admin_text_mobile_feature: "Mobil funktion",
		admin_test_interface_text: "Gränssnittstext",
		admin_text_interface_text_locale: "Översatt gränssnittstext",
		admin_text_icon_status: "Statusikon",
		admin_text_icon: "Ikon",
		admin_text_file_type: "Filtyp",
		admin_text_viewer: "Visningsprogram",
		admin_text_desktop_access: "Skrivbordsåtkomst",
		admin_text_mapped_properties_for_office: "Mappade egenskaper för Microsoft Office",
		admin_text_desktop_features: "Skrivbordsfunktioner",
		admin_text_unknown: "Okänd",
		admin_folder_instruction: "Ange de egenskaper som ska visas för dokument och mappar i innehållslistan när användarna bläddrar. Du kan också ange i vilken ordning egenskaperna ska visas.",
		admin_search_instruction: "Ange vilka alternativ som är valda som standard när användaren skapar en sökning.",
		admin_repository_office_conf_class_instruction: "Om IBM Content Navigator for Microsoft Office har installerats på klientdatorerna i miljön, kan du ange hur dokument hanteras när de läggs till i behållaren.",
		admin_repository_office_conf_instruction: "Mappa Microsoft Office-dokumentegenskaper till egenskaperna i behållaren.<br/><br/>När egenskapsmappning aktiveras för ett skrivbord som behållaren är kopplad till, används egenskaperna för Microsoft Office-dokument för behållaregenskaperna när användaren lägger till ett dokument från IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Egenskapsmappning",
		admin_repository_office_conf_prop_mapping_title1: "MS Office-integrering",
		admin_office_conf_instruction: "Du kan styra hur IBM Content Navigator integreras med Microsoft Office-program när IBM Content Navigator for Microsoft Office har installerats på klientdatorer<br /><br /><b>Viktigt!</b> Om du väljer <b>Mappa Office-egenskaper</b>, måste egenskapsmappningen för varje behållare vara associerad till det här skrivbordet. Du kan konfigurera egenskapsmappningarna på fliken <b>Office-egenskaper</b> för varje behållare i miljön.",
		admin_desktop_workflows_instruction: "<b>Endast för IBM FileNet P8-system:</b> Ange vilka programutrymmen som visas på skrivbordet. Ordningen mellan de valda programutrymmena bestämmer i vilken ordning programutrymmena visas i webbklienten.<br><br><b>Tips!</b> Du kan ändra visningsnamnet för programutrymmen genom att ange nya namn i avsnittet <b>Etiketter</b> i administrationsverktyget.",
		admin_search_filtered_properties_instruction: "Ange de egenskaper som användarna kan söka på. Du kan dölja egenskaper som användarna inte ska kunna söka på.",
		admin_search_filtered_operators_instruction: "Ange de operatorer som är tillgängliga när användarna söker på en viss datatyp, t.ex. ett datum eller ett heltal. Du kan dölja operatorer som användarna inte ska kunna välja.",
		admin_search_default_search_results_instruction: "Ange de egenskaper som visas för dokument och mappar i sökresultaten. Du kan dölja egenskaper som inte ska visas.",
		admin_search_default_search_results_p8_cmis_instruction: "Ange egenskaperna som visas för dokument i sökresultaten. Du kan dölja egenskaper som inte ska visas i resultaten.",

		admin_datetimeOp: "Datum/tid",
		admin_floatOp: "Flyttal",
		admin_integerOp: "Heltal",
		admin_stringOp: "Sträng",
		admin_binaryOp: "Binär",
		admin_objectOp: "Objekt",
		admin_idOp: "ID",
		admin_userOp: "Användare",
		admin_booleanOp: "Boolesk",

		admin_string: "Sträng",
		admin_long: "Lång",
		admin_date: "Datum",
		admin_double: "Dubbel",
		admin_object: "Objekt",
		admin_guid: "GUID",
		admin_boolean: "Boolesk",

		admin_repcfg_heading: "Du kan ersätta behållarens standardbeteende genom att ställa in konfigurationsparametrar.",
		admin_repcfg_heading_od: "Du kan ersätta behållarens standardbeteende genom att ställa in konfigurationsparametrar.<br /><br /><b>Viktigt!</b> Om webbklient ska kunna användas med Content Manager OnDemand, måste du även ange värden för parametrarna på fliken <b>Content Manager OnDemand</b> under <b>Inställningar</b>, som används för alla Content Manager OnDemand-behållare som du ansluter till.",
		admin_repcfg_teamspaces: "Grupprumshantering:",
		admin_repcfg_enable: "Aktivera",
		admin_repcfg_disable: "Avaktivera",

		admin_repcfg_deliver_redacted_pdf_files_as: "Redigerade PDF-filer levereras som:",
		admin_repcfg_burn_pdf_to_pdf: "PDF-filer",
		admin_repcfg_burn_pdf_to_tiff: "TIFF-filer",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "En PDF-fil som redigerats genom tillägg av rollbaserade redigeringar kan levereras till klienten i ett annat filformat. När filformatet ändras, ändras också filtillägget och MIME-typen.<br><br>Exempel: Om en PDF-fil levereras som en TIFF-fil ändras filtillägget till .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Tillåt att användare sammanfogar och delar sidor som har rollbaserade redigeringar",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Välj det här alternativet om du vill tillåta att användare sammanfogar och delar sidor som har rollbaserade redigeringar. Användare som inte har redigeringsredigerare kommer inte att kunna redigera rollbaserade redigeringar och ges inte åtkomst till känsliga data som är associerade med de rollbaserade redigeringarna även om det här alternativet är aktiverat.",
		admin_repcfg_modify_teamspace_roles: "Tillåt ägare ändra rollerna för befintliga grupprum",
		admin_repcfg_tm_delete_teamspace: "Tillåt ägare ta bort grupprum, inklusive innehåll",
		admin_repcfg_tm_delete_teamspace_id_missing: "Du måste ange användarnamnet på en behållaradministratör.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Du måste ange behållaradministratörens lösenord.",
		admin_repcfg_teamspace_display_Recent: "Visa endast nyligen ändrade grupprum ",
		admin_repcfg_teamspace_display_Recent_value: "Dagar sedan senaste ändring:",

		admin_repcfg_folder_selector: "Rotmapp:",
		admin_repcfg_enable_folder_selector: "Aktivera",
		admin_repcfg_disable_folder_selector: "Avaktivera",
		admin_repcfg_SSO: "Engångsinloggning:",
		admin_repcfg_teamspace_template_permission_text: "Tilldela behörighet att skapa grupprumsmallar:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Ange de grupper eller användare som kan skapa grupprumsmallar. Användarna och grupperna ges rätt behörighet för de klasser och mappar som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Läs mer</a><br/><br/><b>Rekommendation:</b> Använd grupper för att förenkla grupprumshanteringen.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Ange de grupper eller användare som kan skapa grupprumsmallar. Användarna läggs till i lämpliga accesslistor och ges de behörigheter som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Läs mer</a><br/><br/><b>Rekommendation:</b> Använd grupper för att förenkla grupprumshanteringen.",
		admin_repcfg_teamspace_permission_text: "Tilldela grupprumsroller:",
		admin_repcfg_teamspace_permission_hover_p8: "Ange de grupper eller användare som kan skapa och använda grupprum. Användarna ges lämplig behörighet för de klasser och mappar som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Läs mer</a><br/><br/><b>Rekommendation:</b> Använd grupper för att förenkla grupprumshanteringen.",
		admin_repcfg_teamspace_permission_hover_cm: "Ange de grupper eller användare som kan skapa och använda grupprum. Användarna läggs till i lämpliga accesslistor och ges de behörigheter som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Läs mer</a><br/><br/><b>Rekommendation:</b> Använd grupper för att förenkla grupprumshanteringen.",
		admin_repcfg_entry_template_permission_text: "Tilldela inmatningsmallsroller:",
		admin_repcfg_entry_template_permission_hover_p8: "Ange de grupper eller användare som kan skapa och använda inmatningsmallar. Användarna ges lämplig behörighet för dokumentklassen Inmatningsmall. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Läs mer</a><br/><br/><b>Rekommendation:</b> Använd grupper för att förenkla inmatningsmallshanteringen.",
		admin_repcfg_entry_template_permission_hover_cm: "Ange de grupper eller användare som kan skapa och använda inmatningsmallar. Användarna läggs till i lämpliga accesslistor och ges de behörigheter som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Läs mer</a><br /><br /><b>Rekommendation:</b> Använd grupper för att förenkla inmatningsmallshanteringen.",
		admin_repcfg_office_template_permission_text: "Tilldela mallroller:",
		admin_repcfg_office_template_permission_hover_cm: "Ange de grupper eller användare som får skapa, redigera och använda Microsoft Office Online- eller Edit Service-mallar. Användarna läggs till i lämpliga accesslistor och ges de behörigheter som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a><br /><br /><b>Rekommendation:</b> Använd grupper för att förenkla hanteringen av Microsoft Office Online- eller Edit Service-mallar.",
		admin_repcfg_draft_permission_text: "Tilldela utkastroller:",
		admin_repcfg_draft_permission_hover_cm: "Ange de grupper eller användare som får skapa utkast för Microsoft Office Online- eller Edit Service-dokument under samredigering. Alla användare som behöver samredigera dokument i Microsoft Office Online eller Edit Service måste ha lämpliga behörigheter för att skapa utkast. Användarna läggs till i lämpliga accesslistor och ges de behörigheter som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a><br /><br /><b>Rekommendation:</b> Använd grupper för att förenkla utkasthanteringen.",
		admin_repcfg_search_permission_text: "Tilldela sökroller:",
		admin_repcfg_search_permission_hover_p8: "Ange de användare och grupper som kan skapa och använda sparade sökningar och flerbehållarsökningar. Användarna ges lämplig behörighet för de klasser som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Läs mer</a><br /><br /><b>Rekommendation:</b> Använd grupper för att förenkla sökhanteringen.",
		admin_repcfg_search_permission_hover_cm: "Ange de användare och grupper som kan skapa, redigera eller ändra sparade sökningar och flerbehållarsökningar. Användarna läggs till i lämpliga accesslistor och ges de behörigheter som krävs. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Läs mer</a><br /><br /><b>Rekommendation:</b> Använd grupper för att förenkla sökhanteringen.",
		admin_repcfg_search_permission_title: "Sökroller",
		admin_repcfg_search_permission_intro_text: "Se till att användarna har åtkomst till ett skrivbord som hanterar deras roll. Exempel: Kontrollera att de som skapar sökningar har åtkomst till ett skrivbord där de kan skapa sökningar och flerbehållarsökningar.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Grupprumsmallsadministratörer är användare som har behörigheten <b>Full kontroll</b> för behållaren (objektlagret). Det går inte att ändra listan över grupprumsmallsadministratörer från administrationsverktyget. <p>Grupprumsmallsadministratörer kan ta bort och ända alla grupprumsmallar. Användaren som skapar en grupprumsmall behöver inte dela den med grupprumsmallsadministratörerna.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "När du utser en användare eller grupp till att skapa grupprumsmallar ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Läs mer</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Användare och grupper som har andra behörigheter än de som är associerade med administratörer och författare.<p>Du kan flytta dessa användare och grupper till rollen Grupprummsmallsförfattare från rollen Övriga och sedan tilldela den behörigheten.<p>Du kan granska behörigheterna för användarna och grupperna med hjälp av IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Grupprumsadministratörer är användare som har behörigheten <b>Full kontroll</b> för behållaren (objektlagret). Det går inte att ändra listan över grupprumsadministratörer från administrationsverktyget.<p>Grupprumsadministratörer kan ta bort och ända alla grupprum. Användaren som skapar ett grupprum behöver inte dela det med grupprumsadministratörerna.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "När du utser en användare eller grupp till att skapa grupprum ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Läs mer</a>",
		admin_repcfg_teamspace_user_hover_p8: "När du utser en användare eller grupp till grupprumsanvändare ges användaren eller gruppen rätt behörighet för behållaren. Användaren måste vara medlem i grupprummet för att kunna använda det. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Läs mer</a><p><b>Tips!</b> Om du vill att alla användare i miljön ska kunna se grupprummen kan du lägga till pseudokontot #AUTHENTICATED-USERS i grupprumsanvändarprofilen.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Användare och grupper som har andra behörigheter än de som är associerade med administratörer, författare och användare.<p>Du kan flytta dessa användare och grupper till fördefinierade roller genom att ta bort dem från rollen Övriga och sedan tilldela dem grupprumsroller.<p>Du kan granska behörigheterna för användarna och grupperna med hjälp av IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Inmatningsmallsadministratörer är användare som har behörigheten <b>Full kontroll</b> för behållaren (objektlagret). Det går inte att ändra listan över inmatningsmallsadministratörer från administrationsverktyget. <p>Inmatningsmallsadministratörer kan ta bort och ändra alla inmatningsmallar. Användaren som skapar en inmatningsmall behöver inte dela den med inmatningsmallsadministratörerna.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "När du utser en användare eller grupp till att skapa inmatningsmallar ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Läs mer</a>",
		admin_repcfg_entry_template_user_hover_p8: "När du utser en användare eller grupp till inmatningsmallsanvändare ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Läs mer</a><p><b>Tips!</b> Om du vill att alla användare i miljön ska kunna använda inmatningsmallar kan du lägga till pseudokontot #AUTHENTICATED-USERS i inmatningsmallsanvändarrollen.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Användare och grupper som har andra behörigheter än de som är associerade med administratörer, författare och användare.<p>Du kan flytta dessa användare och grupper till fördefinierade roller genom att ta bort dem från rollen Övriga och sedan tilldela dem inmatningsmallsroller.<p>Du kan granska behörigheterna för användarna och grupperna med hjälp av IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "När du utser en användare eller grupp till att skapa grupprumsmallar ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Läs mer</a>",
		admin_repcfg_teamspace_creators_hover_cm: "När du utser en användare eller grupp till att skapa grupprum ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Läs mer</a>",
		admin_repcfg_teamspace_user_hover_cm: "När du utser en användare eller grupp till grupprumsanvändare ges användaren eller gruppen rätt behörighet för behållaren. Användaren måste vara medlem i grupprummet för att kunna använda det. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Läs mer</a>",
		admin_repcfg_entry_template_creators_hover_cm: "När du utser en användare eller grupp att skapa inmatningsmallar ges användaren eller gruppen rätt behörighet för behållaren. <br/><br/>Behörigheterna för en specifik inmatningsmall bestämmer dock vilka behörigheter användaren eller gruppen har. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Läs mer</a>",
		admin_repcfg_entry_template_editors_hover_cm: "När du utser en användare eller grupp till att skapa inmatningsmallar ges användaren eller gruppen rätt behörighet för behållaren. <br/><br/>Behörigheterna för en specifik inmatningsmall bestämmer dock vilka behörigheter användaren eller gruppen har. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Läs mer</a>",
		admin_repcfg_entry_user_hover_cm: "När du utser en användare eller grupp till inmatningsmallsanvändare ges användaren eller gruppen rätt behörighet för behållaren. <br/><br/>Behörigheterna för en specifik inmatningsmall bestämmer dock vilka behörigheter användaren eller gruppen har. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Läs mer</a>",
		admin_repcfg_office_template_creators_hover_cm: "När du utser en användare eller grupp till att skapa mallar för Microsoft Office Online eller Edit Service får användaren eller gruppen rätt behörighet för behållaren. <br/><br/>Behörigheterna för en specifik mallfil bestämmer dock de behörigheter som användaren eller gruppen har på mallen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a>",
		admin_repcfg_office_template_editors_hover_cm: "När du utser en användare eller grupp till att redigera mallar för Microsoft Office Online eller Edit Service får användaren eller gruppen rätt behörighet för behållaren. <br/><br/>Behörigheterna för en specifik mallfil bestämmer dock de behörigheter som användaren eller gruppen har på mallen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a>",
		admin_repcfg_office_template_user_hover_cm: "När du utser en användare eller grupp till att använda mallar för Microsoft Office Online eller Edit Service får användaren eller gruppen rätt behörighet för behållaren. <br/><br/>Behörigheterna för en specifik mallfil bestämmer dock de behörigheter som användaren eller gruppen har på mallen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a>",
		admin_repcfg_draft_creators_hover_cm: "Alla användare som behöver samredigera dokument i Microsoft Office Online eller Edit Service måste tilldelas den här rollen. Tilldela inte användare till redigerar- eller användarroller. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a>",
		admin_repcfg_draft_editors_hover_cm: "Alla användare som behöver samredigera dokument i Microsoft Office Online eller Edit Service måste tilldelas rollen <b>skapare</b>. Om användare tilldelas redigerarrollen kan de inte skapa utkast, vilket krävs för samredigering. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a>",
		admin_repcfg_draft_user_hover_cm: "Alla användare som behöver samredigera dokument i Microsoft Office Online eller Edit Service måste tilldelas rollen <b>skapare</b>. Om användare tilldelas användarrollen kan de inte skapa utkast, vilket krävs för samredigering. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Läs mer</a>",		
		admin_repcfg_search_others_hover_p8: "Användare och grupper som har andra behörigheter än de som är associerade med administratörer, författare och användare.<p>Du kan flytta dessa användare och grupper till fördefinierade roller genom att ta bort dem från rollen Övriga och sedan tilldela dem sökroller.<p>Du kan granska behörigheterna för användarna och grupperna med hjälp av IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Sökadministratörer är användare som har behörigheten <b>Full kontroll</b> för behållaren (objektlagret). Det går inte att ändra listan över sökadministratörer från administrationsverktyget. <br /><br />Sökadministratörer kan ta bort och ändra alla sökningar. Användaren som skapar en sökning behöver inte dela den med grupprumsadministratörerna.",
		admin_repcfg_search_creators_hover_p8: "När du utser en användare eller grupp till att skapa sökningar ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Läs mer</a>",
		admin_repcfg_search_user_hover_p8: "När du utser en användare eller grupp till sökanvändare ges användaren eller grupp rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Läs mer</a><br /><br /><b>Tips!</b> Om du vill att alla användare i miljön ska kunna använda sökningar kan du lägga till pseudokontot #AUTHENTICATED-USERS i sökanvändarrollen.<br/><br />En sökanvändare kan som standard skapa sökningar och flerbehållarsökningar men inte spara dem. Du kan förhindra att sökanvändare skapar sökningar genom att tvinga dem att använda ett skrivbord med följande alternativ:<ul><li><b>Förhindra att användare skapar sökningar</b></li><li><b>Förhindra att användare skapar flerbehållarsökningar</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "När du utser en användare eller grupp till att skapa sökningar ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Läs mer</a><br /><br /><b>Viktigt!</b> Se till att de som skapar sökningar använder ett skrivbord där följande alternativ inte är valda:<ul><li><b>Förhindra att användare skapar sökningar</b></li><li><b>Förhindra att användare skapar flerbehållarsökningar</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "När du utser en användare eller grupp till sökredigerare ge användare eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Läs mer</a><br /><br /><b>Tips!</b> En sökredigerare kan som standard skapa sökningar och flerbehållarsökningar men inte spara dem. Du kan förhindra att sökredigerare skapar sökningar genom att tvinga dem att använda ett skrivbord med följande alternativ:<ul><li><b>Förhindra att användare skapar sökningar</b></li><li><b>Förhindra att användare skapar flerbehållarsökningar</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "När du utser en användare eller grupp till sökanvändare ges användaren eller gruppen rätt behörighet för behållaren. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Läs mer</a><br /><br /><b>Tips!</b> En sökanvändare kan som standard skapa sökningar och flerbehållarsökningar men inte spara dem. Du kan förhindra att sökanvändare skapar sökningar genom att tvinga dem att använda ett skrivbord med följande alternativ:<ul><li><b>Förhindra att användare skapar sökningar</b></li><li><b>Förhindra att användare skapar flerbehållarsökningar</b></li></ul>",
		admin_repcfg_db_encoding: "Serverdatabasens teckenkodning:",
		admin_repcfg_db_encoding_hover: "Standardteckenkodningen för en IBM Content Manager-databas är UTF-8.",
		admin_repcfg_db_encoding_specify: "Ange databasens teckenkodning",
		admin_repcfg_db_encoding_utf8: "UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Välj det här alternativet om UTF-8-databaser används. IBM Content Navigator använder UTF-8 för att kontrollera längden på objektets egenskapsvärdesträng.",
		admin_repcfg_db_encoding_other: "Annan",
		admin_repcfg_db_encoding_other_hover: "Välj det här alternativet om databasen har en annan kodning än UTF-8. IBM Content Navigator använder antal tecken för att kontrollera längden på objektets egenskapsvärdesträng.",
		admin_repcfg_language_codes: "Serverspråkkoder:",
		admin_repcfg_language_codes_avail: "Tillgänglig",
		admin_repcfg_language_codes_sel: "Valda",
		admin_repcfg_pdf_conversion: "MIME-typer som ska konverteras till PDF-dokument i bilagor:",
		admin_repcfg_pdf_conversion_avail: "Tillgänglig",
		admin_repcfg_pdf_conversion_sel: "Valda",

		admin_repcfg_box_share_enable_classes_label: "Klasser att ändra för Box-delningssupport:",
		admin_repcfg_box_share_enable_classes_hover: "Du kan ändra klassen så att den lagrar IDt för filen i Box när objektet delas.",
		admin_repcfg_box_share_enable_classes_warning: "Viktigt! Alla klasser du anger ändras så att de hanterar Box-delning. När du sparar ändringarna går det inte att ta bort klassändringarna.<br><br>Du måste ansluta till behållaren som biblioteksserveradministratör om du ska kunna ändra klasser.",
		admin_repcfg_box_share_enable_classes_available: "Tillgängliga klasser",
		admin_repcfg_box_share_enable_classes_selected: "Valda klasser",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Lagra Box-delnings-ID",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Klassen har redan ändrats att lagra Box-delnings-ID. Du kan inte ta bort det här alternativet.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Ändra klassen så att den lagrar IDt för filen i Box när objektet delas.",

		admin_repcfg_redaction: "Rollbaserad redigering:",
		admin_repcfg_enable_redaction_hover: "Ange om rollbaserad redigering ska tillämpas på dokument i behållaren.<br/><br/>Rollbaserad redigering tillämpas när ett dokument hämtas, skrivs ut, återges i ett visningsprogram eller visas som en miniatyrbild. Vad användare ser när de öppnar ett dokument beror på vilken roll de har och vilken redigeringsprincip som tillämpas.",

		admin_repcfg_redaction_policy_permission_text: "Tilldela principredigerare:",
		admin_repcfg_redaction_policy_editors_hover: "Välj de användare och grupper som ska skapa, ändra och ta bort redigeringsprinciper och redigeringsroller.",
		admin_repcfg_redaction_policy_editors_select_hover: "Redigeringsprincipsredigerare kan skapa, ändra och ta bort redigeringsprinciper och redigeringsroller.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Redigeringsprincipsadministratörer kan tilldela redigeringsprincipsredigerare.<br/><br/>Du kan ändra listan över redigeringsprincipsadministratörer i IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Redigeringsprincipsadministratörer kan tilldela redigeringsprincipsredigerare.<br/><br/>Du kan ändra listan över redigeringsprincipsadministratörer i IBM Content Manager-systemadministrationsklienten.",

		admin_repcfg_redaction_permission_text: "Tilldela redigeringsredigerare:",
		admin_repcfg_redaction_editors_hover: "Välj de användare och grupper som ska skapa, ändra och ta bort rollbaserade redigeringar. När du har valt användare och grupper måste du ge dem rollen redigerare i redigeringsprinciper innan de kan ändra rollbaserade redigeringar.",
   		admin_repcfg_redaction_editors_select_hover: "Redigerare kan skapa, ändra och ta bort rollbaserade redigeringarna om de har angetts som redigerare i redigeringsprinciperna.",
   		admin_repcfg_redaction_administrators_hover_p8: "Redigeringsadministratörer kan tilldela redigeringsredigerare.<br/><br/>Du kan ändra listan över redigeringsadministratörer i IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Redigeringsadministratörer kan tilldela redigeringsredigerare.<br/><br/>Du kan ändra listan över redigeringsprincipsadministratörer i IBM Content Manager-systemadministrationsklienten.",
		admin_repcfg_entry_template: "Hantera inmatningsmallar:",
		admin_repcfg_entry_template_enable_classes_label: "Klasser att ändra för hantering av inmatningsmallar:",
		admin_repcfg_oos_reference_attribute_label: "Referensattribut för Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Viktigt! De klasser du anger ändringar så att de hanterar inmatningsmallar. När du sparar ändringarna går det inte att ta bort klassändringarna.<br><br>Du kan ändra klassen för en eller båda av följande ändamål:<br><ul><li>Lagra IDt för den inmatningsmall som användes för att lägga till ett objekt så att inmatningsmallens inställningar tillämpas när objektet ändras.</li><li>Endast hierarkiska mappklasser: Funktioner för associering av inmatningsmallsmappar</li></ul>Du måste ansluta till behållaren som biblioteksserveradministratör om du ska kunna ändra klasser.",
		admin_repcfg_entry_template_enable_classes_warning: "Viktigt! De klasser du anger ändringar så att de hanterar inmatningsmallar. När du sparar ändringarna går det inte att ta bort klassändringarna.<br><br>Du måste ansluta till behållaren som biblioteksserveradministratör om du ska kunna ändra klasser.",
		admin_repcfg_entry_template_enable_classes_available: "Tillgängliga klasser",
		admin_repcfg_entry_template_enable_classes_selected: "Valda klasser",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Lagra inmatningsmalls-ID",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Ändra klassen och lagra IDt för den inmatningsmall som användes för att lägga till ett objekt så att inmatningsmallens inställningar tillämpas när objektet ändras.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Lagra mappassociationer",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Ändra klassen så att den hanterar mappassociationer för inmatningsmallar. Det här alternativet är endast tillgängligt för hierarkiska mappklasser.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Klassen har redan ändrats att lagra inmatningsmalls-ID. Du kan inte ta bort det här alternativet.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Klassen har redan ändrats att lagra mappassociationer. Du kan inte ta bort det här alternativet.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Endast hierarkiska mappklasser och icke-hierarkiska klasser kan användas för att lagra mappassociationer.",
		admin_repcfg_entry_template_root_folder_association_title: "Inmatningsmallar associerade med rotmappen:",
		admin_repcfg_entry_template_root_folder_association_hover: "Ange vilka inmatningsmallar som ska associeras med rotmappen i IBM Content Manager-behållaren.<br /><br />Om du associerar inmatningsmallar med rotmappen och användare lägger till objekt i en hierarkisk mapp, används alltid en inmatningsmall för att lägga till objekt.",
		admin_repcfg_entry_template_root_folder_association_button: "Definiera associationer",
		admin_repcfg_oos_enable_classes_label: "Klasser att andra för Office Online- och Edit Service-support:",
		admin_repcfg_oos_enable_classes_warning: "Viktigt! Alla klasser du anger ändras så att de fungerar med Microsoft Office Online eller Edit Service. När du sparat ändringarna kan det referensattribut som läggs till automatiskt i varje klass inte tas bort.<br><br>Du måste ansluta till behållaren som biblioteksserveradministratör om du ska kunna ändra klasser.",
		admin_repcfg_oos_enable_classes_available: "Tillgängliga klasser",
		admin_repcfg_oos_enable_classes_selected: "Valda klasser",
		admin_repcfg_oos_enable_classes_note: "Viktigt!",
		admin_repcfg_oos_enable_classes_selected_not_support: "Den här klassen stöds inte med Microsoft Office Online eller Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Versionsprincipen för klassen är inställd på Alltid version, vilket Microsoft Office Online eller Edit Service inte stöder. Välj en annan klass.",
		admin_repcfg_download_recording: "Spåra hämtningar:",
		admin_repcfg_download_recording_hover: "Hämtningar spåras som standard när tillägget Social Collaboration Base Extensions har installerats i behållaren. Om du avaktiverar det här alternativet kan behållarens prestanda förbättras.<br><br>Om du avaktiverar alternativet ser användaren antalet hämtningar som gjordes innan alternativet avaktiverades.",
		admin_repcfg_sync_service: "Sync Services:",
		admin_repcfg_download_ignored: "Ignorera hämtningar för specifika användare:",
		admin_repcfg_download_ignored_hover: "Du kan ignorera hämtningar som begärs av specifika användare, t.ex. administratörer eller systemkonton för att få en mer korrekt siffra på antalet användare som har hämtat ett dokument. Om du har ett visst konto som används för att hämta innehåll för en månadsrapport kan du välja att ignorera hämtningar för det kontot.<br><br><b>Begränsning:</b> Du kan inte ange grupper.",

		admin_repcfg_add_as_major_version: "Lägg till som huvudversion:",
		admin_repcfg_enable_add_as_major_version: "Ja",
		admin_repcfg_disable_add_as_major_version: "Nej",
		admin_repcfg_checkin_as_major_version: "Checka in som huvudversion:",
		admin_repcfg_enable_checkin_as_major_version: "Ja",
		admin_repcfg_disable_checkin_as_major_version: "Nej",
		admin_repcfg_annotation_security: "Kommentarsbehörighet:",
		admin_repcfg_inherit_annotation_security: "Duplicera behörigheten för innehållsdokument",
		admin_repcfg_default_annotation_security: "Använd standardbehörighet för kommentarer",
		admin_repcfg_connection_point: "Arbetsflödesanslutningspunkt:",
		admin_repcfg_include_workflow_definition: "Visa arbetsflödesdefinitionsklass:",
		admin_repcfg_include_form_template: "Visa formulärmallsklass:",
		admin_repcfg_enable_include_workflow_definition: "Ja",
		admin_repcfg_disable_include_workflow_definition: "Nej",

		admin_repcfg_status_columns: "Lägesikoner:",
		admin_repcfg_status_columns_hover: "Ange de lägen som du vill se ikoner för. Lägesikoner visas bredvid dokument, mappar och arbetsobjekt i innehållslistan.",
		admin_repcfg_status_columns_documents_or_folders: "Visa en ikon när dokument eller mappar:",
		admin_repcfg_status_columns_documents: "Visa en ikon när dokument:",
		admin_repcfg_status_columns_documents_checked_out: "Är utcheckade",
		admin_repcfg_status_columns_documents_declared_records: "Är deklarerade som poster",
		admin_repcfg_status_columns_documents_minor_versions: "Har delversioner",
		admin_repcfg_status_columns_documents_compound_document: "Är sammansatta dokument",
		admin_repcfg_status_columns_documents_bookmarks: "Har bokmärken",
		admin_repcfg_status_columns_documents_hold: "Har hållstämpel",
		admin_repcfg_status_columns_documents_notes: "Har anteckningar",
		admin_repcfg_status_columns_work_items: "Visa en ikon när arbetsobjekt:",
		admin_repcfg_status_columns_work_items_locked: "Är låsta",
		admin_repcfg_status_columns_work_items_checked_out: "Är utcheckade",
		admin_repcfg_status_columns_work_items_deadline: "Har en tidsgräns",
		admin_repcfg_status_columns_work_items_suspended: "Har senarelagts",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF-konfigurationsfil:",
		admin_repcfg_transform_xml_file: "Anpassad omvandlingsfil:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Aktivera",
		admin_repcfg_disable_ssl: "Avaktivera",
		admin_repcfg_keyringdb_file: "Databasfil för nyckelring:",
		admin_repcfg_keyringstash_file: "Stash-fil för nyckelring:",
		admin_repcfg_od_sso: "Engångsinloggning",
		admin_repcfg_od_enable_sso: "Aktivera",
		admin_repcfg_od_disable_sso: "Avaktivera",
		admin_repcfg_od_sso_password: "Lösenord",
		admin_repcfg_advanced_label: "Avancerad",
		admin_repcfg_custom_properties_label: "Anpassade egenskaper:",
		admin_repcfg_new_button_label: "Ny",
		admin_repcfg_edit_button_label: "Redigera",
		admin_repcfg_delete_button_label: "Ta bort",
		admin_repcfg_custom_head1: "Namn",
		admin_repcfg_custom_head2: "Värde",
		admin_repcfg_ecpdialog_title_new: "Ny anpassad egenskap",
		admin_repcfg_ecpdialog_title_edit: "Ändra anpassad egenskap",
		admin_repcfg_ecpdialog_name: "Namn:",
		admin_repcfg_ecpdialog_value: "Värde:",
		admin_repcfg_ecpdialog_save: "Spara",
		admin_repcfg_ecpdialog_create: "Skapa",
		admin_repcfg_ecpdialog_cancel: "Avbryt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Värdet är obligatoriskt. Värdet får inte innehålla blanktecken och får inte vara en dubblett.",

		admin_repcfg_cmis_use_gzip_encoding: "Använd GZIP-kodning:",

		admin_repcfg_task_mgr_proxy: "Anslutnings-ID för Task Manager:",
		admin_repcfg_task_mgr_proxy_hover: "För Box-delning och grupprumsborttagning använder Task Manager ett administratörs-ID och lösenord för att köra bakgrundsuppgifter som ändrar behållaren.<br><br>Klicka på Ange och logga in till behållaren med ett giltigt behållaradministratörs-ID och lösenord.",
		admin_task_manager_not_enabled_warning: "Alternativet kräver Task Manager-tjänsten men Task Manager-tjänsten är inte aktiverad. Du kan aktivera tjänsten för alla skrivbord. Det gör du på sidan Allmänt för inställningarna.",
		admin_task_manager_not_enabled_and_user_warning: "Alternativet kräver Task Manager-tjänsten men Task Manager-tjänsten är inte aktiverad. Ange anslutnings-ID till Task Manager på den här sidan och aktivera tjänsten för alla skrivbord på sidan Allmänt i inställningarna.",
		admin_task_manager_user_id_pw_not_set_warning: "Alternativet kräver Task Manager-tjänsten samt ett administratörs-ID och lösenord. Ange anslutnings-ID för Task Manager på den här sidan.",
		admin_repcfg_teamspaces_delete_task_id: "Behållaradministratör:",
		admin_repcfg_teamspaces_delete_task_password: "Lösenord:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Du måste ange en biblioteksserveradministratör för att aktivera Task Manager-tjänsten att ta bort ett grupprum från behållaren.",
		admin_repcfg_teamspaces_delete_task_hover: "När en användare tar bort ett grupprum döljs det. Alla mappar och dokument i grupprummet finns kvar i behållaren. <br /> <br />När du aktiverar det här alternativet behålls endast de dokument som har sparats i andra mappar i behållaren.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Om det finns många grupprum kan det ta lång tid innan alla visas på fliken <b>Grupprum</b>. Du kan välja det här alternativet för att korta tiden det tar att fylla listan.<br /><br />Om en användare behöver arbeta med ett grupprum utanför angivet intervall kan han eller hon använda fältet <b>Filter</b> för att hitta grupprummet.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Om du väljer det här alternativet, kan användare som har ägarrollen för ett grupprum ändra roller som är associerade till grupprum som skapats före IBM Content Navigator version 2.0.2.<br /><br />Alternativet påverkar inte grupprum som skapats med IBM Content Navigator version 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Ange om användare ska kunna skapa grupprum och grupprumsmallar i den här behållaren.<br /><br /><b>Viktigt!</b> Behållaren måste hantera hierarkiska mappar.<br /><br />Om du aktiverar grupprum skapar IBM Content Navigator grupprumsdatamodellen i behållaren. Datamodellen innehåller ACL-objekt, behörigheter, behörighetsprofiler och två nya objekttyper.",
		admin_repcfg_folder_selector_hover: "Välj den mapp som ska användas som rotmapp när användarna bläddrar efter dokument. Om hierarkiska mappar inte är konfigurerade i behållaren, anger den här inställningen en rotmapp som gör det möjligt att bläddra. Om hierarkiska mappar är konfigurerade i behållaren, ersätter den här inställningen den rotmapp som är konfigurerad i behållaren.",
		admin_repcfg_cm_use_sso_hover: "Ange om engångsinloggning är tillåtet för användare med behörigheten Trusted Logon.<br /><br /><b>Viktigt!</b> Ange om engångsinloggning måste vara aktiverad på Content Manager-servern och WebSphere Application Server måste vara konfigurerad för LTPA för att konfigurationsparametern ska fungera.",
		admin_repcfg_cm_direct_retrieve_hover: "Direkthämtning är aktiverad som standard eftersom det gör att webbklienten snabbt kan hämta innehåll från resurshanteraren. <br /><br />Du kan avaktivera alternativet om du inte vill att klientprogrammet ska ha åtkomst till resurshanteraren direkt eller om det finns en brandvägg eller proxyserver som förhindrar att webbklienten får åtkomst till resurshanteraren via URL-adresser. Exempel: En brandvägg kan förhindra att användare visar dokument i Applet-visningsprogram när direkthämtning är aktiverad.",
		admin_repcfg_cmItemTypesToDisplay: "Om användare inte ska kunna se resursobjekttyper och objekttyper på IBM Content Manager-servern kan du välja Endast dokumentmodellsobjekt. Objekttyper visas när användare skapar sökningar, lägger till dokument och skapar mappar.",
		admin_repcfg_cm_language_codes_hover: "Ange de språk som data ska returneras i från Content Manager-servern. Listan över tillgängliga språk styrs av listan över språkdefinitioner på servern.<br /><br /><b>Kom ihåg:</b> Data i webbklienten visas på det språk som är inställt i användarens webbläsare.",
		admin_repcfg_cm_pdf_conversion_hover: "Ange vilka typer av dokument som ska konverteras till PDF när en användare skickar ett dokument i flera delar som e-postbilaga. Alla delar kombineras till ett enda PDF-dokument.",
		admin_repcfg_use_teamspaces_p8_hover: "Ange om användare ska kunna skapa grupprum och grupprumsmallar i den här behållaren.<br /><br />Om du aktiverar grupprum skapar IBM Content Navigator grupprumsdatamodellen i behållaren. Datamodellen innehåller egenskapsmallar, anpassade objekt, ett mappobjekt och flera mappar.",
		admin_repcfg_use_entry_template_p8_hover: "Ange om användare ska kunna skapa och hantera inmatningsmallar för behållaren från IBM Content Navigator. Om du inte aktiverar den här funktionen kan användare söka efter och använda inmatningsmallar som redan finns för behållaren.<br /><br />Om du aktiverar inmatningsmallshantering uppdaterar IBM Content Navigator inmatningsmallens datamodell för behållaren. Uppdateringen inkluderar nya egenskaper. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Läs mer</a>",
		admin_repcfg_use_entry_template_cm_hover: "Ange om användare ska kunna skapa och hantera inmatningsmallar för behållaren från IBM Content Navigator.<br /><br />Om du aktiverar inmatningsmallshantering skapar IBM Content Navigator inmatningsmallens datamodell för behållaren. Datamodellen inkluderar ett nytt ACL-objekt, nya egenskaper och en ny objekttyp. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Läs mer</a>",
		admin_repcfg_sync_service_p8_hover: "Ange om användare ska kunna synkronisera favoritobjekt mellan datorer och mobila enheter.<br><br><b>Viktigt!</b> Om den här funktionen ska kunna användas måste du göra följande:<br><ul><li>Ange <b>Allmän Sync Services-URL</b> i avsnittet <b>Sync Services</b> i administrationsverktyget.</li><li>Lägg till behållaren på ett skrivbord som Sync Services har aktiverats för.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Ange om alternativet huvudversion är valt som standard när användare lägger till dokument till behållaren.<br /><br />Användarna kan avmarkera alternativet om de vill lägga till dokument som en delversion.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Ange om alternativet huvudversion är valt som standard när användare checkar in dokument till behållaren.<br /><br />Användarna kan avmarkera alternativet om de vill checka in dokumentet som en delversion.",
		admin_repcfg_p8_annotation_security_hover: "Ange vilken typ av säkerhet som ska tillämpas för kommentarer.<br /><br />Användarna kan ändra säkerheten för kommentarerna.",
		admin_repcfg_p8_connection_point_hover: "Välj en Process Engine-anslutningspunkt om du ska använda IBM FileNet P8-arbetsflöden. Den anslutningspunkt som du väljer bestämmer vilka arbetsflöden som är tillgängliga för användare som har åtkomst till behållaren.",
		admin_repcfg_p8_include_workflow_definition_hover: "Om IBM FileNet P8-arbetsflödesdefinitionsdokumentklassen visas i webbklienten kan användare söka efter och lägga till arbetsflödesdefinitioner i behållaren.",
		admin_repcfg_p8_include_form_template_hover: "Om IBM FileNet P8-formulärmalldokumentklassen visas i webbklienten kan användare söka efter och lägga till formulärmallar i behållaren.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Ange den fullständiga sökvägen till AFP2PDF-konfigurationsfilen för behållaren på webbprogramservern. AFP2PDF Transform måste kunna visa och skriva ut AFP-data.<br /><br /><b>Kom ihåg:</b> AFP2PDF Transform måste vara installerat om du ska använda parametern.",
		admin_repcfg_od_transform_xml_file_hover: " Om du vill använda en anpassad omvandling för konverteringen av Content Manager OnDemand-innehåll anger du den fullständiga sökvägen till XML-filen som definierar omvandlingen. XML-filen måste finnas på webbprogramservern.",
		admin_repcfg_od_ssl_hover: "Ange om SSL ska användas för kryptering av kommunikation mellan IBM Content Navigator-programservern och Content Manager OnDemand-biblioteksservern och objektservrar.<br /><br /><b>Viktigt!</b> När du aktiverar SSL för Content Manager OnDemand, inkluderas inte kommunikationen mellan IBM Content Navigator-programservern, webbservern eller användarnas datorer.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Ange den fullständiga sökvägen till behållarens nyckelringsdatabasfil på webbprogramservern. Exempel: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Nyckelringsdatabasfilen innehåller betrodda rotcertifikat. Du bör använda starkt filsystemskydd för att förhindra obehörig åtkomst till filen.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Ange den fullständiga sökvägen till behållarens nyckelringsstash-fil på webbprogramservern. Exempel: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Nyckelringens stash-fil innehåller lösenordet för nyckelringsfilen. Du bör använda starkt filsystemskydd för att förhindra obehörig åtkomst till filen.",
		admin_repcfg_od_sso_password_hover: "Ange vilket lösenord som ska användas för engångsinloggning till OnDemand-servern.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API hanterar anpassade egenskaper. Om du vill använda anpassade egenskaper vid anslutning till behållaren via webbklienten, anger du namn och värden för de anpassade egenskaperna.<br /><br />Mer information om anpassade egenskaper finns i ODWEK Java API Javadocs, som finns i underkatalogen /api i ODWEK-installationskatalogen.",
		admin_repcfg_od_custom_properties_name_hover: "Ange egenskapsnamnet.",
		admin_repcfg_od_custom_properties_value_hover: "Ange egenskapsvärdet.",
		admin_repcfg_od_use_sso_hover: "Ange om engångsinloggning är tillåtet för användare.<br /><br /><b>Viktigt!</b> Engångsinloggning måste vara aktiverat på Content Manager OnDemand-servern om den här konfigurationsparametern ska fungera.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Använd GZIP-kodning för CMIS-källan.",
		admin_repcfg_cm_use_part_file_name: "Filnamnet som ska användas vid hämtning av dokument:",
		admin_repcfg_cm_use_part_file_name_help: "Ange hur dokumentens filnamn ska bestämmas när användare hämtar dokument.",
		admin_repcfg_cm_use_part_file_name_enable: "Använd filnamnet",
		admin_repcfg_cm_use_part_file_name_disable: "Använd namnet objektet har i behållaren",
		admin_repcfg_add_doc_name: "Standardnamn för tillagt dokument:",
		admin_repcfg_add_doc_name_hover: "Användare kan ändra namnet innan de lägger till ett dokument.",
		admin_repcfg_add_doc_name_empty: "Inget (tomt)",
		admin_repcfg_add_doc_name_file_name: "Filnamnet på det valda dokumentet",

		admin_repcfg_compound_documents: "Funktioner för sammansatta dokument:",
		admin_repcfg_compound_documents_hover: "Aktivera funktioner för sammansatta P8-dokument, t.ex. navigering.",
		admin_repcfg_cm_action_list_config_enabled: "Arbetsobjektåtgärdslista:",
		admin_repcfg_cm_action_list_config_hover: "När du konfigurerar dokumentdirigering i systemadministrationsklienten för Content Manager kan du ange en lista över åtgärder som en användare kan utföra på arbetsobjekt.<br /><br />Aktivera det här alternativet om du vill använda åtgärdslistan från Content Manager-servern. Dessa inställningar används i kontextmenyn och i fönstret Ändra egenskaper.<br /><br /><b>Viktigt:</b> Inställningarna i åtgärdslistan åsidosätter eventuella anpassade menyer som du konfigurerar i administrationsverktyget för Content Navigator. Om det inte finns några inställningar i åtgärdslistan kan användaren inte vidta några åtgärder på arbetsobjekt.",

		admin_repcfg_box_share: "Box-delning",
		admin_repcfg_box_share_p8_hover: "Användare kan dela ett dokument från den här behållaren. Delning av dokument inkluderar kopiering av filen till Box, generering av en länk samt sändning av länken i e-post.<br /><br />Om du aktiverar Box-delning skapar IBM Content Navigator Box-delningsdatamodellen för behållaren. Om du ska installera IBM Content Navigator Box-delningstillägget måste du ansluta till behållaren som biblioteksserveradministratör.",

		admin_menu_type_icon: "Menytypsikon",
		admin_menu_toolbar_hover: "Verktygsfält",
		admin_menu_toolbar_custom_hover: "Anpassat verktygsfält",
		admin_menu_contextMenu_hover: "Kontextmeny",
		admin_menu_contextMenu_custom_hover: "Anpassad kontextmeny",

		admin_menu_contextMenu_custom_empty: "Inga anpassade kontextmenyer är definierade i de konfigurerade insticksprogrammen.",
		admin_menu_toolbar_custom_empty: "Inga anpassade verktygsfält är definierade i de konfigurerade insticksprogrammen.",

		admin_file_type_category_filters: "Filtypsfilter:",
		admin_file_type_category_filters_hover_help: "Ange listan över filtyper som kan användas i följande situationer:<ul><li>Begränsa listan över resultat vid sökning eller bläddring i IBM Content Navigator for Microsoft Office<li>Begränsa listan över resultat vid sökning i en IBM FileNet P8-behållare i webbklienten<li>Begränsa filtyperna som kan läggas till i behållaren med en inmatningsmall</ul>",
		admin_file_type_only_use_in_et_folder_association: "Visa endast i mappassociationer för inmatningsmallar",
		admin_office_config_properties_label: "Office-egenskaper",
		admin_office_config_type_label: "Datatyp",
		admin_office_config_mapped_property_label: "Behållaregenskap",
		admin_office_config_properties_hover_help: "Ange och lägg sedan till namnet på varje Microsoft Office-egenskap som du ska mappa till en behållaregenskap. Datatypen måste matcha för alla egenskaper",
		admin_office_config_mapped_property_hover_help: "Om du ska mappa Office-egenskaper till mer än en behållaregenskap måste du skapa en ny egenskapsmappning",
		admin_new_property_mapping_title: "Ny egenskapsmappning",
		admin_property_mapping_title: "Ändra egenskapsmappning",
		admin_property_mapping_instruction: "Ange vilka Microsoft Office-egenskaper som du ska mappa till en egenskap i behållaren. Datatypen för Office-egenskaperna måste matcha datatypen för egenskapen i behållaren. <br /><br />Om ett Office-dokument har fler mappade egenskaper, använder IBM Content Navigator den första egenskapen i listan för behållaren.",
		admin_ms_general_settings: "Allmän konfiguration:",
		admin_ms_delete_local_settings: "Ta bort lokala filer när användare:",
		admin_ms_outlook_options: "Outlook-integrering:",
		admin_ms_enable_props_mapping: "Mappa Office-egenskaper till behållaregenskaper när användare:",
		admin_ms_open_doc_when_checkout: "Checka automatiskt ut ett dokument när det öppnas",
		admin_ms_open_doc_when_checkout_hover_help: "Alternativet förhindrar att användaren skriver över filen i behållaren med en äldre version av filen.",
		admin_ms_prompt_close_office: "Be användare checka in dokument när de stänger Office-program",
		admin_ms_prompt_close_office_hover_help: "Alternativet förhindrar att användare glömmer att checka in sitt arbete.",
		admin_ms_add_with_entry_template_only: "Visa endast åtgärden Lägg till med mall",
		admin_ms_delete_local_on_add: "Ta bort lokala filer när användare lägger till dokument",
		admin_ms_delete_local_on_checkin: "Ta bort lokala filer när användare checkar in dokument eller avbryter utcheckning",
		admin_ms_delete_local_on_add_hover_help: "När en användare lägger till ett dokument i IBM Content Navigator for Microsoft Office läggs dokumentet till i behållaren och den lokala dokumentkopian behålls öppen så att användare direkt kan checka ut dokumentet och göra ändringar.<br /><br />Välj det här alternativet om den lokala dokumentkopian automatiskt ska stängas och tas bort när dokumentet har lagts till i behållaren.",
		admin_ms_delete_local_on_checkin_hover_help: "När en användare checkar in ett dokument till IBM Content Navigator for Microsoft Office checkas dokumentet in till behållaren och den lokala dokumentkopian behålls öppen så att användare direkt kan checka ut dokumentet och göra ändringar. När utcheckningen avbryts behålls den lokala dokumentkopian öppen. På det sättet kan användare direkt checka ut dokumentet igen och ändra det.<br /><br />Välj det här alternativet om den lokala dokumentkopian automatiskt ska stängas och tas bort när dokumentet har checkats in eller en utcheckning har avbrutits.",
		admin_ms_delete_local_on_save: "Spara ett dokument",
		admin_ms_prompt_for_props_on_add: "Be användare ange egenskapsvärden när de lägger till e-postmeddelanden i behållaren",
		admin_ms_prompt_for_props_on_add_hover_help: "Om du inte väljer det här alternativet, används den Outlook-egenskapsmappning som är definierad för behållaren.<br /><br />Om det inte finns några inmatningsmallar kopplade till den mapp där e-postmeddelanden läggs till, kanske användaren inte blir tillfrågad om några egenskaper.",
		admin_ms_delete_email_on_add: "Ta bort e-postmeddelandet från servern när det läggs till i behållaren",
		admin_ms_send_email_as_link_only: "Förhindra att användare skickar dokument som bilagor",
		admin_ms_send_email_as_link_only_hover_help: "Om du väljer det här alternativet kan användare endast skicka dokument som länkar från Outlook. Det säkerställer att endast användare som har rätt behörighet till behållaren kan visa dokument.",
		admin_ms_enable_prop_mapping_for_add: "Mappa Office-egenskaper till behållaregenskaper när användare lägger till eller checkar in dokument",
		admin_ms_checkout_document_after_add: "Checka ut dokument automatiskt när de har lagts till i behållaren",
		admin_no_default_document_type_filtering: "Returnera alla objekttyper som standard när användare kör sökningar",
		admin_no_default_document_type_filtering_hover_help: "I IBM Content Navigator for Microsoft Office är standardbeteendet att användare endast ser dokumenttypen för aktuellt program när de kör sökningar. Exempel: Word-dokumenttypen är som standard vald när användarna söker från Microsoft Word.<br/><br/>Om du väljer det här alternativet avmarkeras kryssrutorna för dokumenttyper så att användarna ser alla dokument som returneras av en sökning. Användarna kan åsidosätta den här inställningen genom att välja en eller fler dokumenttyper före sökningen.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Ange om dokumentegenskaper som är definierade för Microsoft Office-dokument ska mappas till egenskaper som är definierade i behållaren.<br /></br /><b>Viktigt!</b> Om du aktiverar den här funktionen måste du konfigurera Office-egenskaper för varje behållare i miljön. Om du inte mappar Office-egenskaper till behållaregenskaper fungerar inte den här funktionen.<br /><br />Inställningen tillämpas inte på Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Välj det här alternativet för att minska antalet steg användare behöver utföra för att arbeta med dokument efter att de har lagts till i behållaren.<br /></br /><b>Tips!</b> Välj <b>Be användare checka in dokument när de stänger Office-program</b> så att användarna checkar in filerna i behållaren när de är klara.",
		admin_ms_show_details_recently_used: "Visa detaljer för <b>Senast använda objekt</b>",
		admin_ms_show_details_recently_used_hover_help: "Som standard döljs detaljerna för objekten när du öppnar listan över senast använda objekt. När du väljer det här alternativet visas detaljerna för det första dokumentet som standard i detaljrutan.",
		admin_ms_show_no_permissions_warning: "Visa varningar när användare ändrar egenskaperna eller checkar in ett dokument vars inmatningsmall de inte har behörighet för.",
		admin_ms_show_no_permissions_warning_hover_help: "Om ett dokument i behållaren skapades med en inmatningsmall som användaren inte har behörighet för hämtas inte inmatningsmallen.<br /><br/>När användaren ändrar dokumentegenskaperna visas egenskaperna utan inmatningsmall. När användaren checkar in dokumentet görs det utan att inmatningsmallen används.<br /><br />De här åtgärderna utförs utan att användaren får någon information om att inmatningsmallen inte används. En varning loggas i loggfilen.<br /><br />Välj det här alternativet om du vill att varningar om att inmatningsmallen inte används ska visas för användaren.",
		admin_ms_hide_search_actions: "Komprimera sökfilteravsnitt",
		admin_ms_hide_search_actions_hover_help: "Användare kan tillämpa ett åtgärdsfiler för att ange en åtgärd, en användare eller användargrupp samt välja ett datum eller ett datumintervall när åtgärden vidtogs. Det går till exempel att söka efter dokument som har lagts till den senaste månaden.<br /><br />Välj det här alternativet om användarna inte ska kunna tillämpa åtgärdsfilter. Åtgärdsfilteravsnittet döljs och färre antal fält visas vid definition av sökvillkor.",
		admin_ms_hide_save_document: "Dölj alternativet <b>Spara</b> i banderollen.",
		admin_ms_hide_save_document_hover_help: "Med alternativet <b>Spara</b> kan användarna spara dokumentändringar i behållaren utan att checka in dokumentet.",
		admin_ms_indicate_managed_email_on_add: "Indikera om ett e-postmeddelande redan har lagts till i behållaren.",
		admin_ms_indicate_managed_email_on_add_hover_help: "Om du väljer det här alternativet vet användarna att det finns ett e-postmeddelande i behållaren, vilket kan minska antalet gånger ett e-postmeddelande läggs till i behållaren. När det här alternativet väljs skapas en ny färgkategori med namnet IBM ECM i Microsoft Outlook. Alla e-postmeddelanden som läggs till i behållaren läggs automatiskt till i kategorin Hanteras i IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Tilläggsalternativ i gruppen Redigera:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Ange vilka <b>Lägg till</b>-alternativ som är tillgängliga från gruppen <b>Redigera</b> i banderollfältet.<ul><li>Välj <b>Visa alla tilläggsalternativ</b> så visas knappen Lägg till och alla tilläggsalternativ som är tillgängliga från gruppen Redigera.</li><li>Välj <b>Dölj alla tilläggsalternativ</b> för att förhindra att användare lägger till dokument i behållaren eller om du vill att användare endast ska lägga till dokument från ett grupprum.</li><li>Välj <b>Dölj åtgärden Lägg till med mall</b> om du vill tvinga mappassociationer med inmatningsmallar och förhindra att användar väljer en annan inmatningsmall.</li><li>Välj <b>Visa endast åtgärden Lägg till med mall</b> om användarna måste lägga till dokument med hjälp av inmatningsmallar.</li></ul>",
		admin_ms_show_edit_group_add_button: "Visa alla tilläggsalternativ (standard)",
		admin_ms_hide_edit_group_add_button: "Dölj alla tilläggsalternativ",
		admin_ms_hide_add_with_entry_template: "Dölj åtgärden Lägg till med mall",
		admin_ms_managed_in_ecm: "Hanteras i IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Om användare tittar på kategorier i Microsoft Outlook, visas den här etiketten för e-post som har lagts till i en IBM Content Manager- eller IBM FileNet Content Manager-behållare.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Kategorinamnet Hanteras i IBM ECM får inte innehålla kommatecken (,) eller semikolon (;).",
		admin_delete_open_docs_after_close: "Ta automatiskt bort öppna dokument när användare stänger dokument",
		admin_admin_delete_open_docs_after_close_hover_help: "När en användare öppnar ett dokument i IBM Content Navigator for Microsoft Office hämtas dokumentet till användarens dokumentkatalog eller till den plats som har angetts i skrivbordets filspårningsinställningar.<br><br>Välj det här alternativet om öppna filer som inte har checkats ut ska tas bort när användarna stänger dokumenten. Om du väljer det här alternativet kan du<ul><li>Tvinga efterlevnad av IT-regler</li><li>Se till att användare arbetar med den senaste dokumentversionen</li><li>Minska mängden diskutrymme som används för dokumentlagring</li><ul>",
		admin_ms_custom_command_configuration: "Anpassade kommandon:",
		admin_ms_custom_command_configuration_hover_help: "Du kan lägga till upp till fyra kommandon i IBM Content Navigator for Microsoft Office-verktygsfältet i Microsoft Office-program. Kommandona kan användas för att öppna URL-adresser. Exempel: Du kan lägga till ett kommando som öppnar en tjänst som kan användas för att söka efter användare och grupper.",
		admin_ms_custom_command_dialog_title: "Redigera anpassat kommando",
		admin_ms_custom_command_dialog_intro_text: "Definiera ett kommando som kan användas för att öppna en URL-adress från IBM Content Navigator for Microsoft Office-verktygsfältet i Microsoft Office-program.",
		admin_ms_custom_command_id: "Kommando ${0}",
		admin_ms_custom_command_available_label: "Tillgänglig",
		admin_ms_custom_command_available_hover_help: "Om URL-adressen som har definierats för ett kommando måste tas offline för underhåll kan du avmarkera kryssrutan för det kommandot så att det inte visas i Microsoft Office.<br/><br/><b>Viktigt!</b> Användarna måste logga ut från skrivbordet om ändringarna ska visas i IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "Kommando-ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etikett",
		admin_ms_custom_command_label_hover_help: "Ange den etikett som ska visas för kommandot i Microsoft Office.",
		admin_ms_custom_command_description_label: "Beskrivning",
		admin_ms_custom_command_description_hover_help: "Ange den beskrivning som ska visas för kommandot i Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Ange den fullständiga URL-adressen som ska öppnas från Microsoft Office. URL-adressen kan vara en webbsida eller en tjänst.",
		admin_ms_custom_command_icon_label: "Ikon",
		admin_ms_custom_command_icon_hover_help: "Ange filnamnet på den ikon som ska visas, t.ex. CommandIcon.png.<br/><br/><b>Viktigt!</b> Du måste lägga till ikonfilen i underkatalogen Plugins i IBM Content Navigator for Microsoft Office-installationskatalogen på varje klientdator.<br/><br/>Om ikonfilen inte finns i katalogen Plugins eller om du inte anger någon ikonfil visas standardikonen customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Gruppetikett:",
		admin_ms_custom_command_group_name_hover_help: "Du kan ange en gruppetikett som visas nedanför de anpassade kommandona i banderollfältet.<br/><br/>Om du inte anger någon etikett är gruppetiketten <b>Anpassade kommandon</b>.",
		admin_ms_ribbon_tab_label: "IBM ECM-fliketikett:",
		admin_ms_ribbon_tab_hover_help: "Skriv det namn som ska visas för IBM Content Navigator for Microsoft Office-fliken i Microsoft Office-banderollfältet. Om du inte anger något namn får fliken namnet IBM ECM.",
		admin_ms_close_task_pane_on_open: "Stäng uppgiftsrutan när användare öppnar dokument",
		admin_ms_close_task_pane_on_open_hover_help: "Välj det här alternativet om du vill maximera det utrymme som användare kan se dokument på i Microsoft Office.<br/><br/>Microsoft Office 2010-användare: Se till att uppgiftsrutan stängs för alla dokument genom att aktivera flerdokumentsläge. Välj <b>Alternativ</b> &gt; <b>Avancerat</b> och avmarkera alternativet <b>Visa alla fönster i aktivitetsfältet</b>.",
		admin_ms_open_document_options: "Dokumentöppningsalternativ:",
		admin_ms_delete_local_file_options: "Alternativ för borttagning av lokal fil:",
		admin_ms_add_and_checkin_options: "Alternativ för tillägg och incheckning:",
		admin_ms_search_options: "Sökalternativ:",
		admin_ms_display_options: "Visningsalternativ:",
		admin_ms_bidirection_enable_label: "Aktivera funktioner för text i två riktningar",
		admin_ms_bidirection_enable_hover_help: "Välj det här alternativet om du vill att användarna ska kunna skriva eller läsa text i IBM Content Navigator for Microsoft Office i någon annan riktning är vänster till höger.",
		admin_ms_text_direction_label: "Bastextriktning för innehåll:",
		admin_ms_text_direction_hover_help: "Ange riktningen för text i indatafälten i IBM Content Navigator for Microsoft Office. Den här inställningen styr hur objekt, t.ex. mappnamn och egenskapsvärden visas.",
		admin_ms_control_threshold_label: "Minsta antal objekt aktivering av sök framåt:",
		admin_ms_control_threshold_hover_help: "Som standard är sökning framåt aktiverat när antalet objekt är större än eller lika med 50, för sökning eller angivande av egenskaper som har fördefinierade värden i en listruta. Du kan ändra minimivärdet.",

		admin_ms_default_email_class: "Klass att använda när e-post läggs till",
		admin_ms_default_email_class_hover_help: "Alla e-postmeddelanden som läggs till i behållaren från Microsoft Outlook läggs till i den klass som du anger. Användare kan inte ändra klassen.",
		admin_ms_default_folder_class: "Klass att använda när mappar skapas",
		admin_ms_default_folder_class_hover_help: "Alla mappar som skapas i behållaren från ett Microsoft Office-program kommer att lagras i den klass som du anger. Användare kan inte ändra klassen.",
		admin_ms_default_folder_warn_title: "Du kan inte använda klassen ${0} som klass för att skapa mappar.",
		admin_ms_default_folder_warn_name_prop_invalid: "Klassens namnegenskap är inte en sträng, och mappnamnet måste vara en sträng.<br />Välj en annan klass att använda när mappar skapas eller be IBM Content Manager-administratören ändra namnegenskapen för klassen till en sträng.",
		admin_ms_default_folder_warn_req_props: "Klassen innehåller nödvändiga egenskaper som saknar värden. Användarna kan dock inte ange värden för de nödvändiga egenskaperna när de skapar mappar från IBM Content Navigator for Microsoft Office.<br />Välj en annan klass att använda när mappar skapas eller be IBM Content Manager-administratören göra de nödvändiga egenskaperna valfria, eller förifyll ett värde för de nödvändiga egenskaperna.",
		admin_ms_delimiter_for_office_properties: "Avgränsare för flervärdessträngegenskaper.",
		admin_ms_delimiter_for_office_properties_hover_help: "Ange det tecken som ska användas som avgränsare för strängegenskaper som mappas till flervärdesegenskaper. Som standard kan du tilldela en uppsättning värden till en flervärdessträngegenskap genom att använda semikolon (;) som avgränsare för värdena. Om strängvärdet innehåller ett semikolon går det inte att lägga till det strängvärdet om inte avgränsningstecknet ändras till ett annat tecken. Exempel: Du kan ändra avgränsaren till ett kommatecken (,).",
		admin_ms_outlookPropertyRemembrance : "Kom ihåg inställningar när meddelanden och bilagor läggs till",
		admin_ms_outlookPropertyRemembrance_hover_help : "Systemet kommer ihåg egenskapsvärden, plats, klassval och behörighet som är tilldelade till meddelanden och bilagor så att de kan användas som standardinställningar när objekt läggs till senare.",

		admin_file_type_name_hover_help: "Bubbelhjälp för Namn",
		admin_file_type_description_hover_help: "Bubbelhjälp för Beskrivning",
		admin_file_type_dialog_title: "Redigera filtypsfilter",
		admin_new_file_type_dialog_title: "Nytt filtypsfilter",
		admin_mobile_feature_dialog_title: "Funktion",
		admin_mobile_feature_dialog_new_title: "Ny funktion",
		admin_file_type_instructions: "Skapa ett filter som användare kan använda till att begränsa sökresultatlistan. Du kan mappa flera MIME-typer till filtret.",
		admin_file_type_filter_place_holder: "Filtrera MIME-typer",
		admin_new_button_label: "Ny",
		admin_edit_button_label: "Redigera",
		admin_delete_button_label: "Ta bort",
		admin_copy_button_label: "Kopiera",
		admin_verify_button_label: "Verifiera",
		admin_availabe_filters_label: "Tillgängliga filter",
		admin_selected_filters_label: "Valda filter",

		admin_mobile_access: "Mobilprogramåtkomst:",
		admin_mobile_access_hover_help: "Om IBM Content Navigator ska användas från en mobil enhet bör du ge användare åtkomst till skrivbordet från mobilprogrammet.<br /><br />Om du avaktiverar åtkomsten till skrivbordet från mobilprogrammet kan användare ändå komma åt webbklienten från mobilens webbläsare. Webbklienten är dock inte utformad för att användas från mobila enheter.",

		admin_mobile_access_allow_label: "Användare får göra följande:",
		admin_mobile_allow_add_photos: "Lägga till foton från kameran och fotobiblioteket",
		admin_mobile_allow_add_docs: "Lägga till dokument och skapa mappar i behållaren",
		admin_mobile_allow_open_docs: "Öppna dokument i andra program",
		admin_mobile_allow_add_docs_hover_help: "Användare kan skapa mappar eller lägga till dokument från andra mobilprogram, t.ex. ett dokument som bifogats med ett e-postmeddelande.",
		admin_mobile_allow_open_docs_hover_help: "Användare blir tillfrågade om vilket program som ska användas till att visa det valda dokumentet. Om bara ett program är tillgängligt används det.",
		admin_mobile_features: "Funktioner:",
		admin_mobile_features_hover_help: "Ange vilka skrivbordsfunktioner som ska visas i IBM Content Navigator-mobilprogrammet.",
		admin_mobile_new_feature_button_label: "Ny funktion",
		admin_mobile_move_up_button_label: "Flytta upp",
		admin_mobile_move_down_button_label: "Flytta ned",
		admin_desktop_mobile_instructions: "Anvisningar för mobila inställningar placeras här",
		admin_desktop_max_number_of_docs_to_add: "Maximalt antal dokument som kan läggas till:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Ange en gräns för hur många dokument användare kan lägga till åt gången. Standardvärdet är 50. Du kan dock ange ett maximalt antal på upp till 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maximalt antal objekt att ändra:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Ange maximalt antal objekt som användare kan ändra åt gången. Standardvärdet är 50. Du kan dock ange ett maximalt antal på upp till 300.",
		admin_desktop_max_conversion_size: "Maximal datamängd för PDF-konverteringar (i MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Begränsning:</b> Används inte för IBM Content Manager OnDemand.<br/><br/>Ange hur stor mängd data som maximalt kan konverteras till PDF. Gränsen gäller när användare hämtar objekt som PDF-filer eller skickar objekt som PDF-filer via e-post.<br /><br />Även om det inte går att bestämma storleken på varje dokument konverteras de till PDF.<br/><br/>Standardgränsen är 200 MB. Om gränsen sätts till mer än 200 MB kan det försämra systemprestanda.",
		admin_desktop_timeProperties: "Tidsstämpel:",
		admin_desktop_time_properties_hover_help: "<b>Endast IBM FileNet P8-användare:</b> Gäller anpassade egenskaper men inte systemegenskaper. Exempel: Egenskapen Ändrades av visar fortfarande tidsdelen av tidsstämpeln om du väljer <b>Visa endast datumdelen av tidsstämpeln</b>.<br/><br/>Värdet ändrar inte tidsstämpeln i behållaren.",
		admin_desktop_disable_time_stamp: "Visa fullständig tidsstämpel",
		admin_desktop_enable_time_stamp: "Visa endast datumdelen av tidsstämpeln",
		admin_desktop_timezone: "Tidszon:",
		admin_desktop_timezone_localuser: "Visa användarens lokala tidszon",
		admin_desktop_timezone_alluser: "Visa samma tidszon för alla användare",
		admin_desktop_timezone_hover_help: "Du kan välja om användarna ska se den lokala tidzonen eller om samma tidsstämpel ska visas för alla användare.<br/><br/>Värdet ändrar inte tidsstämpeln i behållaren. Det du väljer bestämmer vilken tidszon som används för tidsstämplar i behållaren när användare lägger till och ändrar objekt.",
		admin_desktop_mobile_feature_display_label: "Visa",
		admin_desktop_mobile_feature_icon_file_label: "Ikonfil",
		admin_mobile_feature_dialog_icon_file_label: "Ikonfil:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Namn",
		admin_desktop_mobile_select_feature_label: "Välj funktion",
		admin_desktop_mobile_feature_icon_label: "Funktionsikon",
		admin_desktop_share_admin_none: "Ingen administratör har angetts.",
		admin_desktop_share_admin_edit_label: "Ange administratör.",
		admin_browse_icon: "Bläddra",
		admin_search_icon: "Sök",
		admin_favorites_icon: "Favoriter",
		admin_casesearch_icon: "Ärende",
		admin_datacap_icon: "Datacap",
		admin_system_defined: "Systemdefinierad",
		admin_icon_file_placeholder_text: "Filplats (t.ex. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Rot",
		admin_folder_default: "Standard",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Verktygsfält",
		admin_menu_context_menus: "Kontextmenyer",
		admin_menu_office_toolbars: "Microsoft Office - Banderollfältskommandon",
		admin_menu_office_menus: "Microsoft Office - Kontextmenyer",

		admin_file_name_label: "Filnamn:",
		admin_exportconfiguration_security_label: "Inkludera användare och grupper som är behöriga att använda skrivbordet",
		admin_exportconfiguration_instruction: "Du kan exportera skrivborden samt konfigurationerna för behållare och insticksprogram, till en fil som du kan importera till en annan förekomst av IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportera skrivbord",
		admin_exportconfiguration_button_label: "Exportera",
		admin_dialog_select_all: "Markera alla",
		admin_dialog_deselect_all: "Rensa alla",

		admin_importconfiguration_instruction: "Objekten i den valda konfigurationsfilen kommer att importeras till systemet. Om det redan finns ett objekt med samma ID måste du bestämma om det ska bevaras eller skrivas över.",
		admin_importconfiguration_dialog_label: "Importera skrivbord",
		admin_importconfiguration_reason_dialog_label: "Importera redigeringsorsaker",
		admin_importconfiguration_button_label: "Importera",
		admin_to_be_imported: "Konfigurationsobjekt att importera",
		admin_on_target_system: "Befintligt objekt i målsystem",
		admin_import_short_warning_message: "Följande objekt finns redan i systemet. Välj de objekt som ska ersättas:",
		admin_import_warning_message: "Följande konfigurationsobjekt har samma IDn som objekt som finns i målsystemet. Välj endast sådana objekt som importeras och skrivas över i målsystemet.<br /><br />Om du inte vill skriva över ett konfigurationsobjekt skapar du en kopia av objektet i den förekomst som du exporterat skrivbordet från. Sedan ger du det ett annat ID och associerar det till skrivbordet. Exportera skrivbordet igen och importera sedan skrivbordet på den förekomsten.",
		admin_choose_file_to_import_label: "Välj importfil:",
		admin_download_imported_log: "Hämta rapport",
		admin_desktop_import_summary: "Importera skrivbord - Sammanfattning",
		admin_reason_import_summary: "Redigeringsorsaker - Importera sammanfattning",
		admin_rba_import_summary: "Administrationsroll - Importera sammanfattning",
		admin_import_open_tabs_checking: "Innan du kan importera skrivbord måste du stänga alla flikar utom fliken <bold>Skrivbord</bold> i administrationsverktyget.",
		admin_import_no_conflict: "Följande objekt kommer att importeras:",
		admin_desktop_invalid: "Ogiltigt skrivbord",
		admin_desktop_warning: "Skrivbordet sparades med varningar.",
		admin_repos_warning: "Behållaren sparades med varningar.",
		admin_config_type_icon: "Konfigurationsobjektikon",

		admin_approval_workflow: "Godkännandearbetsflöde",
		admin_approval_workflow_hover: "Användare kan starta ett fördefinierat godkännandearbetsflöde. Du kan avaktivera godkännandearbetsflöde så att användarna kan starta ett anpassat godkännandearbetsflöde som definieras av en prenumeration. Godkännandearbetsflöde är som standard aktiverat.<br><br><b>Viktigt</b>! Om du aktiverar godkännandearbetsflöde måste du se till att en eller båda fördefinierade arbetsflödesdefinitionerna (ICNParallelDocumentApproval.pep och ICNSequentialDocumentApproval.pep) läggs till i behållaren och överförs till Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Du kan inte ange användare och grupper som har åtkomst till det här skrivbordet.",
		admin_cannot_add_desktop_members_error_explanation: "Du har inte behörighet att hämta användar- och gruppinformation.",
		admin_cannot_add_desktop_members_error_userResponse: "Logga in med ett annat användarnamn eller be IBM Content Manager-systemadministratören att ge dig behörigheten UserACLOwner, som krävs för att hämta användar- och gruppinformation.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Du kan inte välja användare och grupper.",
		admin_cannot_select_users_groups_error_explanation: "Du har inte behörighet att hämta användar- och gruppinformation.",
		admin_cannot_select_users_groups_error_userResponse: "Logga in med ett annat användarnamn eller be IBM Content Manager-systemadministratören att ge dig behörigheten UserACLOwner, som krävs för att hämta användar- och gruppinformation.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2-klienten hittades inte.",
		oauth_client_not_found_error_explanation: "OAuth2-klienten med ID ${0} hittades inte.",
		oauth_client_not_found_error_userResponse: "Informera systemadministratören om att OAuth2-klienten inte hittades.",
		oauth_client_not_found_error_adminResponse: "Granska behållarkonfigurationen och verifiera att den innehåller rätt OAuth2-klient-ID.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "klient-ID",

		oauth_login_failed_error: "Inloggningen till behållaren misslyckades.",
		oauth_login_failed_error_explanation: "Ett försök att logga in till behållaren ${0} misslyckades.",
		oauth_login_failed_error_userResponse: "Kontrollera användar-ID och lösenord och försök logga in igen.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "behållar-ID",

		oauth_error_return_error: "Fel vid försök att logga in till ${0}.",
		oauth_error_return_error_explanation: "${0}-autentiseringsförsöket misslyckades.",
		oauth_error_return_error_userResponse: "Be systemadministratören följande information: ${0}-autentiseringsförsöket misslyckades och följande fel returnerades: <br>${1}<br><b>Fel:</b> ${2}.<br><b>Beskrivning:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Det finns mer information om felet i webbprogramserverns loggfiler. Mer information om loggfilerna finns i &quot;IBM Content Navigator log files&quot; i IBM Knowledge Center. Försök rätta problemet med hjälp av informationen om ${0}-autentiseringsförsöket och kontrollera att OAuth2 är aktiverat.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth-målprogram",
		oauth_error_return_error_1: "felmeddelande",
		oauth_error_return_error_2: "fel",
		oauth_error_return_error_3: "felbeskrivning",

		oauth_error_unknown: "Okänt OAuth-felmeddelande.",

		delete_share_permission_error: "Delningen togs inte bort.",
		delete_share_permission_error_explanation: "Du har inte behörighet att ta bort delningen.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Det går inte att dela det här objektet.",
		class_not_support_share_error_explanation: "Klassen ${0} har inte konfigurerats för delning.",
		class_not_support_share_error_0: "klassnamn",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Det går inte att dela det här objektet.",
		rbr_not_support_share_error_explanation: "Känslig information har lagts till till objektet.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Enheten som användaren försöker logga in från har inte access till användarens konto.",
		box_oauth_error_invalid_request: "Begäran saknar en obligatorisk parameter, innehåller en parameter fler än en gång eller har ett annat formatfel.",
		box_oauth_error_unsupported_response_type: "Behörighetsservern hanterar inte hämtning av behörighetskoder med den här metoden. Kontrollera värdet för code-parametern i begäran.",
		box_oauth_error_access_denied: "Resursägaren eller behörighetsservern avslog begäran.",
		box_oauth_error_temporarily_unavailable: "Enheten har begränsad hastighet. Du måste öka hastigheten för behörighetsbegäran eller vänta en stund.",
		box_oauth_error_unknown: "Okänt Box-felmeddelande.",

		admin_default_search_type: "Standardsöktyp",
		admin_default_search_type_hover: "Ange vilket alternativ som är valt som standard i fältet <b>Sök efter</b> på menyn <b>Sökalternativ</b>.",
		admin_default_search_type_documents: "Dokument",
		admin_default_search_type_folders: "Mappar",
		admin_default_search_type_folders_and_documents: "Dokument och mappar",

		admin_restricted_search_type: "Tillåt sökning efter",
		admin_restricted_search_type_hover: "Användare kan som standard söka efter både dokument och mappar. Om du vill dölja Sökning efter, och begränsa sökning till endast dokument, markerar du Dokument och avmarkerar Mappar.</br></br>Om du tillåter sökning efter både dokument och mappar markerar du standardalternativet som visas när sökrutan öppnas.",
		admin_restricted_search_type_documents: "Dokument",
		admin_restricted_search_type_folders: "Mappar",
		admin_restricted_search_type_folders_and_documents: "Dokument och mappar",

		admin_default_search_version: "Standardsökversion",
		admin_default_search_version_hover: "Ange vilket alternativ som är valt som standard i fältet <b>Version</b> på menyn <b>Sökalternativ</b>.",

		admin_all_classes_search: "Sök i alla klasser.",
		admin_all_classes_search_hover: "Ange om användare tillåts att söka i alla klasser och vad som ska ingå i dokumentsökningar.",
		admin_all_classes_search_removed_hover: "Alternativen för att söka i alla klasser är inte tillgängliga eftersom parametern context-paramallPseudoClassHidden i Navigator-programmet web.xml har värdet true.",
		admin_all_classes_search_hide: "Ta bort valet att söka i alla klasser.",
		admin_all_classes_search_documents_only_documents: "En dokumentsökning inkluderar endast dokument, sparade sökningar och inmatningsmallar",
		admin_all_classes_search_documents_non_folders: "En dokumentsökning inkluderar alla objekt som inte är mappar",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Trädvy:",
		admin_feature_config_tree_view_hoverhelp: "Ange om användarna kan accessa lista över mappar i behållaren via rutan Bläddra Om du döljer rutan Bläddra måste användare navigera till mappar i behållaren via innehållslistan.",
		admin_feature_config_selected_repositories_label: "Behållare:",
		admin_feature_config_selected_repositories_hoverhelp: "Välj de behållare som användarna kan öppna i den här funktionen.",
		admin_feature_config_selected_repositories_select_state_hdr: "Välj behållare",
		admin_feature_config_selected_repositories_name_hdr: "Behållarens namn",
		admin_feature_config_selected_repositories_show_hdr: "Visa",
		admin_feature_config_invalid_icon_title: "Funktionen saknar vissa obligatoriska inställningar",
		admin_feature_config_view_select_hdr: "Välj vy",
		admin_feature_config_view_hdr: "Visa",
		admin_feature_config_view: "Visa",
		admin_feature_config_views: "Vyer:",
		admin_feature_config_views_hoverhelp: "Ange vilka vyer som kan tillämpas på innehållslistan. Vyerna visas i den ordning de står i listan. Den först valda vyn är standardvyn för funktionen.<br><br><b>Viktigt!</b> Om du aktiverar bildspelsvyn måste du konfigurera HTML-konvertering för att kunna förhandsgranska dokument.",

		admin_custom_dialog_name: "Namn:",
		admin_custom_dialog_value: "Värde:",
		admin_custom_setting_name_hover: "Ange namnet på den Daeja ViewONE-inställning som ska läggas till i konfigurationen. Mer information om konfigurering finns i Daeja ViewONE-dokumentationen.",
		admin_custom_setting_value_hover: "Ange det värde som ska användas för Daeja ViewONE-konfigurationen. Mer information om giltiga konfigurationsvärden finns i Daeja ViewONE-dokumentationen.",

		entry_template_name_required_message: "Namnfältet i inmatningsmallsinställningarna måste fyllas i.",
		entry_template_name_invalid_message: "Namnfältet i inmatningsmallinställningarna får inte innehålla följande tecken: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "När vissa användare och grupper väljs för fältet Dela med i inmatningsfältsinställningarna måste du ange minst en användare eller grupp.",
		entry_template_no_permission_to_save_to_teamspace_message: "Du har inte behörighet att lägga till inmatningsmallar i grupprummet (${0}) som valdes från Spara i inmatningsmallsinställningarna.",
		entry_template_save_in_destination_required_message: "Du måste ange en standardlagringsplats i avsnittet <b>Ange objektlagringsplats</b>.",
		entry_template_save_in_destination_must_select_folder: "Om du döljer fältet <b>Spara i</b> och kräver att användarna ska lägga till nya objekt i en mapp måste du välja en mapp i fältet <b>Spara i</b> i avsnittet <b>Ange objektlagringsplats</b>.",
		entry_template_what_to_save_required_message: "Välj minst ett alternativ för vad som ska sparas.",
		entry_template_custom_workflow_empty_message: "Om du väljer <b>Anpassa arbetsflöde</b> måste du söka efter och välja det arbetsflöde som ska användas.",

		entry_template_new: "Ny inmatningsmall",
		entry_template_name_hover: "Namnet på inmatningsmallen får inte innehålla följande tecken: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Namnet på inmatningsmallen får inte innehålla något av följande tecken: * \\ / : ? \" < > |",
		entry_template_description_hover: "Ge en beskrivning som gör det möjligt för användarna att skilja mellan den här inmatningsmallen och andra inmatningsmallar.",
		entry_tempalte_save_in_hover: "Ange var inmatningsmallen ska sparas.<br><br><b>Begränsning:</b> Om du sparar inmatningsmallen i ett grupprum kan du endast använda den i det grupprummet.",
		entry_template_inherit_hover: "Om du väljer det här alternativet läggs säkerhetsinställningarna för den överordnade mappen till i listan över användare och grupper som delar inmatningsmallen.",
		entry_template_builder_aria_label: "Skapa inmatningsmall",
		entry_template_builder_layout_aria_label: "Skapa innehållsmallsegenskaper",

		entry_template_settings_document: "Definiera inmatningsmallen",
		entry_template_settings_folder: "Ange objektlagringsplats",
		entry_template_settings_folder_intro: "Ange var objekt som läggs till med inmatningsmallen ska sparas.",
		entry_template_settings_properties: "Ange objektegenskaper",
		entry_template_settings_properties_intro: "Du kan ange standardvärden eller fördefinierade värden för de objekt som läggs till med inmatningsmallen. Du kan även ändra egenskapslayouten för att styra vilka egenskaper som ska visas och i vilken ordning.",
		entry_template_settings_workflow: "Konfigurera ett objektarbetsflöde",
		entty_template_settings_workflow_intro: "Du kan ange om ett arbetsflöde startas när objekt läggs till med inmatningsmallen.",
		entry_template_settings_security: "Ange objektbehörighet",
		entry_template_settings_security_intro: "Du kan ange standardbehörighet eller fördefinierad behörighet för de objekt som läggs till med inmatningsmallen. Användare med rätt behörighet kanske kan ändra behörigheten till ett objekt när det har lagts till.",
		entry_template_settings_options: "Ange objektalternativ",
		entry_template_xt_warning: "Om du sparar inmatningsmallsändringarna konverteras den från en IBM Workplace XT-inmatningsmall till en IBM Content Navigator-inmatningsmall. IBM Workplace XT hanterar inte IBM Content Navigator-inmatningsmallar.",

		entry_template_properties_edit_layout: "Ändra layout...",
		entry_template_properties_read_only: "Skrivskyddat",
		entry_template_properties_hidden: "Dold",

		entry_template_destination_show: "Visa fältet <b>Spara i</b>",
		entry_template_destination_show_hover: "Om fältet <b>Spara i</b> visas kan användarna ändra var objekt lagras.",
		entry_template_destination_hide: "Dölj fältet <b>Spara i</b>",
		entry_template_destination_hide_hover: "Om fältet <b>Spara i</b> döljs kan användarna inte ändra var objekt lagras.",
		entry_template_folder_save_in_default: "Standardplats för <b>Spara i</b>:",
		entry_template_folder_save_in_default_hover: "Ange standardplatsen där objekt läggs till med den här inmatningsmallen.<br><br>Standardplatsen du väljer innebär begränsningar för inmatningsmallens körningsbeteende.<ul><li>Användarna kan inte välja en annan behållare.</li><li>Om standardplatsen är ett grupprum kan användarna inte välja ett annat grupprum.</li></ul>Om användarna däremot associerar inmatningsmallen med en mapp kan de åsidosätta lagringsplatsen som har definierats för inmatningsmallen.",
		entry_template_folder_restrict_choice: "Kräv att användare ska lägga till objekt på standardplatsen eller i en underordnad mapp till standardplatsen",
		entry_template_folder_file_in_required: "Kräv att användare ska lägga till nya objekt i en mapp",
		entry_template_folder_file_in_required_hover: "Om du inte väljer det här alternativet kan användarna lägga till objekt i behållarens rotmapp.<br><br><b>Begränsning:</b> Skrivbordskonfigurationen kan kräva att användarna väljer en mapp.",

		entry_template_document_type_show: "Visa fältet <b>Vad vill du spara?</b>",
		entry_template_document_type_show_hover: "Om fältet <b>Vad vill du spara?</b> visas, visas de objekt du väljer som alternativ i fältet.",
		entry_template_document_type_hide: "Dölj fältet <b>Vad vill du spara?</b>",
		entry_template_document_type_hide_hover: "Om fältet <b>Vad vill du spara?</b> döljs används alltid den dokumenttyp du väljer när användare lägger till dokument med inmatningsmallen.",
		entry_template_document_type: "Inmatningsmallen kan användas för att lägga till följande objekt:",
		entry_template_document_type_hover: "Om fältet <b>Vad vill du spara?</b> visas, visas de objekt du väljer som alternativ i fältet.<br><br>Om fältet <b>Vad vill du spara?</b> döljs används alltid den dokumenttyp du väljer när användare lägger till dokument med inmatningsmallen.",

		entry_template_misc: "Ytterligare alternativ:",
		entry_template_auto_classify_show: "Klassificera dokumentinnehållet automatiskt",
		entry_template_auto_classify_show_hover: "När ett FileNet Content Manager-dokument klassificeras undersöks dokumentinnehållet för att bestämma lämpliga klass- och egenskapsvärden för dokumentet.<br><br>Fråga systemadministratören om innehållsklassificering är aktiverat för Content Platform Engine.<br><br>Om du aktiverar det här alternativet kan klassen och egenskaperna för dokumentet ändras när en användare lägger till dokumentet i behållaren.",
		entry_template_allow_duplicate_file_names: "Tillåt dokument med samma filnamn",
		entry_template_allow_duplicate_file_names_hover: "Det går som standard att lägga till dokument med samma namn i FileNet Content Manager-mapp. Avmarkera det här alternativet om du vill att alla filer på lagringsplatsen ska ha unika namn.",
		entry_template_allow_compound_documents: "Tillåt att dokumentet är överordnat ett sammansatt dokument",
		entry_template_version_show: "Visa versionsalternativ för tillägg och incheckning",
		entry_template_version_hide: "Dölj versionsalternativ för tillägg och incheckning",
		entry_template_version_to_add_as: "Lägg till version som:",
		entry_template_version_default: "Versionsstandardalternativ:",
		entry_template_version_default_checked: "Huvudversion",
		entry_template_version_default_unchecked: "Delversion",
		entry_template_version_display: "Dokumentversion",
		entry_template_version_display_show: "Visa",
		entry_template_version_display_hide: "Dölj",
		entry_template_version_default_add: "Lägg till version som:",

		entry_template_checkin_version_show: "Visa versionsalternativ för incheckning",
		entry_template_checkin_version_hide: "Dölj versionsalternativ för incheckning",

		entry_template_checkin_version_message_no_versions: "Versionsprincipen för vald klass förhindrar att användare checkar in en ny version av dokumentet.",
		entry_template_checkin_version_message_always_version: "Versionsprincipen för vald klass förhindrar att användare ersätter aktuell version av dokumentet.",

		entry_template_applied: "Använd den här inmatningsmallen när användare:",
		entry_template_applied_add: "Lägger till dokument (krävs)",
		entry_template_applied_add_folder: "Skapa mappar (krävs)",
		entry_template_applied_checkin: "Checka in",
		entry_template_applied_properties_group: "Visa eller ändra egenskaper:",
		entry_template_applied_properties: "I egenskapsfönstret",
		entry_template_applied_viewer: "I appletvisningsprogrammet",
		entry_template_applied_docinfo: "I dokumentinformationsrutan",
		entry_template_applied_no_class_support: "Inmatningsmallen kan användas för att lägga till objekt men inte för att checka in dokument eller visa och ändra egenskaper. Den valda klassen måste ändras för att hantera dessa situationer. Om du behöver använda inmatningsmallen för sådan ändamål ber du administratören ändra klassen i administrationsverktyget så att klassen kan lagra inmatningsmalls-IDn.",
		entry_template_applied_no_child_component_support: "Vald klass har underordnade komponenter och en egenskapslayout har definierats. Egenskapslayouter hanterar inte underordnade komponenter. De underordnade komponenterna visas inte för användaren.",
		entry_template_applied_child_component: "Vald klass har underordnade komponenter. De visas för användaren men det går inte att konfigurera de underordnade komponenterna i den här inmatningsmallen.",

		entry_template_properties_show: "Visa avsnittet <b>Egenskaper</b>",
		entry_tempalte_properties_show_hover: "Om avsnittet <b>Egenskaper</b> visas kan användarna ändra alla egenskapsvärden som visas i inmatningsmallen och som inte är skrivskyddade.",
		entry_template_properties_hide: "Dölj avsnittet <b>Egenskaper</b>",
		entry_template_properties_hide_hover: "Om avsnittet <b>Egenskaper</b> inte visas kan användarna inte ändra något egenskapsvärde. Inmatningsmallen måste definiera alla värden som ska användas när objekt läggs till med inmatningsmallen.",

		entry_template_security_show: "Visa avsnittet <b>Säkerhet</b>",
		entry_template_security_show_hover: "Om avsnittet <b>Säkerhet</b> visas kan användare som har rätt behörighet ändra behörigheten till objektet.",
		entry_template_security_hide: "Dölj avsnittet <b>Säkerhet</b>",
		entry_template_security_hide_hover: "Om avsnittet <b>Säkerhet</b> döljs kan användarna inte ändra behörigheten till objekten. Inmatningsmallen måste definiera alla säkerhetsinställningar som ska användas när objekt läggs till eller ändras.",
		entry_template_security_policy: "Säkerhetsprincip:",
		entry_template_security_policy_hover: "Beroende på vilken säkerhetsprincip du väljer kan den:<br><ul><li>åsidosätta behörigheter som har angetts under <b>Ange objektbehörighet</b>.</li><li>lägga till behörigheter som anges under <b>Ange objektbehörighet</b>.</li></ul>",
		entry_template_security_policy_none: "Ingen säkerhetsprincip vald",
		entry_template_security_inherit: "Ärv säkerhetsinställningarna från överordnad mapp",
		entry_tempalte_save_in_hover: "Ange var inmatningsmallen ska sparas.<br><br><b>Begränsning:</b> Om du sparar inmatningsmallen i ett grupprum kan du endast använda den i det grupprummet.",
		entry_template_security_inherit_item_security_hover: "Om du väljer det här alternativet läggs säkerhetsinställningarna för den överordnade mappen till i de säkerhetsinställningar som definieras av följande objekt:<ul><li>den klass om anges i avsnitt <b>Ange objektbehörighet</b></li><li>den anpassade behörigheten som anges i avsnittet <b>Ange objektbehörighet</b></li></ul>",
		entry_template_security_change: "Åsidosätt säkerheten för vald klass",
		entry_template_security_change_hover: "Om du väljer det här alternativet visas de säkerhetsinställningar som har definierats för klassen. Sedan kan du ändra säkerhetsinställningarna för inmatningsmallen.<br><br>Om avsnittet <b>Säkerhet</b> visas kan användare som har rätt behörighet ändra behörigheten till objektet.<br><br>Om du väljer det här alternativet och väljer att säkerhetsinställningarna från överordnad mapp ska ärvas läggs alla behörigheter som kan ärvas till i den säkerhet du anger.",
		entry_template_security_default_item_security: "Åsidosätt standardobjektsäkerheten för användaren som lägger till objektet",
		entry_template_security_policy_message_override: "Vald säkerhetsprincip har konfigurerats att åsidosätta behörigheterna som definierats under Ange säkerhet.",
		entry_template_security_policy_message_add: "Vald säkerhetsprincip har konfigurerats att lägga till behörigheterna som definierats under Ange säkerhet.",
		entry_template_security_policy_preserve_true_hover: "Behåller dirigeringsbehörighet",
		entry_template_security_policy_preserve_false_hover: "Behåller inte dirigeringsbehörighet",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specifika roller",
		entry_template_security_class_role_search_title: "Sök efter roller:",
		entry_template_secuirty_class_member_title: "Medlemslista för ${0}",
		entry_template_secuirty_class_folder_only: "Dessa behörigheter tillämpas endast på den här mappen",
		entry_template_secuirty_class_folder_and_immediate_children: "Behörigheterna tillämpas på mappen och direkt underordnade objekt som ärver mappen säkerhetsinställningar.",
		entry_template_secuirty_class_folder_and_all_children: "Behörigheterna tillämpas på mappen och alla efterträdare som ärver mappens säkerhetsinställningar.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Behörigheterna tillämpas på direkt underordnade objekt som ärver mappens säkerhetsinställningar.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Behörigheterna tillämpas på alla efterträdare som ärver mappens säkerhetsinställningar.",

		entry_template_class_security_message_no_override: "Säkerheten för vald klass förhindrar att användare åsidosätter säkerheten.",
		entry_template_class_security_required_privileges: "<b>Viktigt!</b> Om du åsidosätter säkerheten för vald klass måste användare som lägger till objekt med inmatningsmallen ha behörigheterna ItemSetACL och UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Sekventiellt mönsterarbetsflöde",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Parallellt mönsterarbetsflöde",
		entry_template_workflow_type_existing: "Anpassat arbetsflöde...",
		entry_template_workflow_launch_prompt: "Fråga användarna om arbetsflödet ska startas",
		entry_template_workflow_launch_auto: "Starta arbetsflödet automatiskt",
		entry_template_workflow_modify_launch: "Tillåt att användare ändrar startsteget",
		entry_template_workflow_modify_launch_hover: "Välj det här alternativet om användarna ska kunna välja hur arbetsflödet ska startas.",

		entry_template_optionsButton_title: "Ändra",
		entry_template_optionsButton_readonly_title: "Visa association",
		entry_template_optionsDialog_title: "Mappassociationsinställningar",
		entry_template_removeButton_title: "Ta bort",
		entry_template_addButton_title: "Lägg till",
		entry_template_selected_entry_templates: "Valda inmatningsmallar",
		entry_template_docs_added_to_template_destination: "Dokument läggs till i det mål som anges i inmatningsmallen.",
		entry_template_docs_added_to_other_object_store: "Den här inmatningsmallen lägger till objekt i objektlagret ${0}.",
		entry_template_inherited_entry_templates_label: "Jag vill: ",
		entry_template_inherited_entry_templates: "Ärv inmatningsmallsassociationer från mapp: ",
		entry_template_inherited_entry_templates_not: "Skapa nya associationer för mappen",
		entry_template_inherited_folder_path: "Inmatningsmallarna i listan över valda inmatningsmallar associeras med följande mapp: ${0}. <br> Sökvägen till mappen är ${1}.",
		entry_template_folder_associations_title: "Associera inmatningsmallar",
		entry_template_folder_associations_intro: "När du associerar en inmatningsmall med en mapp måste användarna lägga till objekt i mappen med den inmatningsmallen. Om du associerar flera inmatningsmallar med en mapp kan användarna välja vilken av mallarna som ska användas.",
		entry_tempalte_folder_associations_entrytemplate: "Inmatningsmall: ",
		entry_template_avaliable_entry_templates: "Tillgängliga inmatningsmallar",
		entry_template_fileTypes_intro_title: "Tillåtna filtyper:",
		entry_template_fileTypes_intro: "En inmatningsmall kan som standard användas för att lägga till alla typer av dokument i behållaren. Om du väljer en eller flera filtyper är inmatningsmallarna endast tillgängliga när användarna lägger till dokument som har en av de angivna filtyperna.",
		entry_template_fileTypes: "Filtyper",
		entry_template_fileType_error: "Ogiltiga filtyper har valts för en eller fler inmatningsmallsassociationer. Du måste ta bort de ogiltiga filtyperna innan inmatningsmallsassociationerna kan sparas.",
		entry_template_fileTypes_any_type_of_file: " Alla filtyper",
		entry_template_description_label: "Beskrivning",
		entry_template_ItemInfoPrefix: "Associera med: ",
		entry_template_TargetObjectStoreName: "Målobjektlager",
		entry_template_class: "Klass",
		entry_template_current_folder_as_parent: "Använd mapp som mål",
		entry_template_view_minetypes: "Visa MIME-typer",
		entry_template_avaliable_MIME_types: "Tillgängliga filtyper",
		entry_template_selected_MIME_types: "Valda filtyper",
		entry_template_MIME_type_column: "filtypskategorinamn",
		entry_template_file_type_not_existing: "Ta bort ogiltiga filtyper.",
		entry_template_MIME_types: "MIME-typer:",
		entry_template_MIME_types_info_dialog_title: "MIME-typerna för",
		entry_template_destination_label: "Lägg till dokument i: ",
		entry_template_destination_help: "Ange var i behållaren dokumenten sparas när användarna lägger till dokument i mappen med vald inmatningsmall.",
		entry_template_radioButton_folder_destination: "Vald mapp",
		entry_template_radioButton_template_destination: "Mål i inmatningsmallen",
		entry_tempalte_teamspace_default: "Standardinmatningsmall",
		entry_template_folder_associations_save_new: "Du har ändrat vissa inmatningsmallsassociationer. Vill du stänga fönstret utan att spara ändringarna?",
		entry_template_mode_binding_label: "Egenskaper",
		entry_template_columns_className: "Klassnamn",
		entry_template_columns_type: "Malltyp",
		entry_template_columns_workflow: "Arbetsflödesnamn",
		entry_template_columns_destination: "Mål",
		entry_template_association_less_than_record: "Det finns ${0} inmatningsmallar som inte listas i Valda inmatningsmallar. Du har inte behörighet att se dem. Eller också har de tagits bort. Kontakta systemadministratören om du behöver mer information.",
		/* Request */

		progress_message_general: "Arbetar...",
		cancel_message_general: "Åtgärden avbröts.",
		ie8_not_supported_browser: "Det finns inga funktioner för IE8.",
		progress_message_getDesktop: "Läser in skrivbord...",
		progress_message_getActions: "Läser in åtgärder...",
		progress_message_getViewers: "Läser in skrivbord...",
		progress_message_logon: "Loggar in...",
		progress_message_logoff: "Loggar ut...",
		progress_message_getContentClasses: "Hämtar klasser...",
		progress_message_openContentClass: "Hämtar klassdetaljer...",
		progress_message_od_getCabinets: "Hämtar skåp...",
		progress_message_getSearchTemplates: "Hämtar sökningar...",
		progress_message_od_getTemplates: "Hämtar mappar...",
		progress_message_od_openCabinet: "Hämtar mappar...",
		progress_message_openSearchTemplate: "Öppnar sökning...",
		progress_message_od_openTemplate: "Öppnar mapp...",

		progress_message_getWorklists: "Hämtar arbetslistor...",
		progress_message_getWorkItems: "Hämtar arbetsobjekt...",
		progress_message_getNextWorkItems: "Hämtar arbetsobjekt...",
		progress_message_getStepParameters: "Hämtar arbetsobjektsinformation...",
		progress_message_getStepAttachmentItems: "Hämtar bilageinformation...",
		progress_message_getDependentParameters: "Hämtar egenskapsinformation...",

		progress_message_p8_getProcessApplicationSpaces: "Hämtar programutrymmen...",
		progress_message_p8_getProcessRoles: "Hämtar processroller...",
		progress_message_p8_getProcessInbaskets: "Hämtar inkorgar...",
		progress_message_p8_getProcessorInformation: "Hämtar processinformation...",
		progress_message_p8_getFilterCriteria: "Hämtar inkorgsfilter...",
		progress_message_p8_getLaunchParameters: "Hämtar arbetsobjektsinformation...",
		progress_message_p8_getStepAttachments: "Hämtar arbetsobjektsbilagor...",
		progress_message_p8_getSubscriptions: "Hämtar arbetsflödesprenumerationer...",
		progress_message_p8_getTrackerParameters: "Hämtar arbetsobjektsinformation...",
		progress_message_p8_getTrackerHistory: "Hämtar arbetsobjektshistorik...",
		progress_message_p8_getTrackerMilestones: "Hämtar arbetsobjektsmilstolpar...",
		progress_message_p8_completeStep: "Slutför arbetsobjekt...",
		progress_message_p8_moveToInbox: "Flyttar objekt till inkorgen...",
		progress_message_p8_returnToSender: "Returnerar arbetsobjektet...",
		progress_message_p8_reassign: "Omtilldelar arbetsobjektet...",
		progress_message_p8_launchWorkflow: "Startar arbetsflödet...",
		progress_message_p8_getTransferedWorkflows: "Hämtar arbetsflödesinformation...",

		progress_message_cm_getProcesses: "Hämtar arbetsflödesinformation...",
		progress_message_cm_completeStep: "Fortsätter arbetsobjekt...",
		progress_message_cm_getItemProcessInformation: "Hämtar arbetsflödesinformation...",

		progress_message_search: "Söker...",
		cancel_message_search: "Sökningen avbröts.",
		progress_message_getContentItems: "Hämtar objektinformation...",
		progress_message_openFolder: "Öppnar mapp...",
		progress_message_addItem: "Skapar objekt...",
		progress_message_checkIn: "Checkar in objekt...",
		progress_message_changePassword: "Ändrar lösenord...",
		progress_message_getDefaultInstancePermissions: "Hämtar standardbehörigheter...",
		progress_message_openItem: "Hämtar objektinformation...",
		progress_message_saveItem: "Sparar objektinformation...",
		progress_message_getPermissions: "Hämtar behörigheter...",
		progress_message_getEntryTemplates: "Hämtar inmatningsmallar...",
		progress_message_openEntryTemplate: "Öppnar inmatningsmall...",
		progress_message_getFavorites: "Hämtar favoriter...",
		progress_message_getFoldersFiledIn: "Hämtar mappar...",
		progress_message_getDocumentVersions: "Hämtar versioner...",
		progress_message_getDependentAttributeInfo: "Hämtar attributinformation...",
		progress_message_packageForDownload: "Paketerar för hämtning...",
		progress_message_convertDocument: "Konverterar innehåll...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Hämtar innehållstyp...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Lägger till dokument...",

		progress_message_desktop_reload: "Klienten läser in skrivbordet igen.<br>Du kanske behöver logga in igen.",
		progress_message_email: "Skickar e-post...",
		cancel_message_email: "Sändningen av e-post avbröts.",

		progress_message_p8_getOfficeOnlineTemplates: "Hämtar Office-mallar...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Favoriter - Träd",
		favorites_content_list_label: "Favoriter - Innehållslista",
		syncItems_tree_label: "Mina synkroniserade filer - Träd",
		syncItems_content_list_label: "Mina synkroniserade filer - Innehållslista",
		my_checkouts_content_list_label: "Mina utcheckningar -Innehållslista",
		browse_tree_label: "Sök i träd",
		browse_content_list_label: "Sök i innehållslista",
		repository_selector_label: "Behållarväljare",
		teamspaces_content_list_label: "Grupprum - Innehållslista",
		templates_content_list_label: "Mallar - Innehållslista",
		work_content_list_label: "Arbete - Innehållslista",
		work_tree_label: "Arbetsträd",
		admin_tree_label: "Administrationsträd",
		admin_tabs_label: "Administrationsflikar",
		search_tabs_label: "Sökflikar",
		search_selector_label: "Sökningsväljare",
		teamspace_browse_content_list_label: "Bläddra i grupprumsinnehållslista",
		teamspace_search_tabs_label: "Grupprumssökflikar",

		/* Desktop */
		undo_description: "Ångra ${0}",
		redo_description: "Gör om ${0}",

		/* Application Tabs */
		home: "Startsida",
		repository: "Behållare",
		repository_type: "Behållartyp:",
		repository_type_header: "Behållartyp",
		repository_type_any: "Alla behållare",
		repository_type_contains_label: "Behållartypen innehåller",
		document_info: "Dokumentinformation",
		team: "Grupp",
		administration: "Administration",

		/* Home Page */
		recent_activity: "Senaste aktivitet",
		repos_and_wrksp: "Behållare och grupprum",
		workspaces: "Grupprum",
		repositories: "Behållare",
		templates: "Mallar",
		favorites: "Favoriter",
		my_checkouts: "Mina utcheckningar",
		mySyncedFiles: "Mina synkroniserade filer",
		links: "Länkar",
		name_label: "Namn",
		description_label: "Beskrivning:",
		type_label: "Typ:",
		type_heading: "Typ",
		type_id_label: "Typ-ID",
		server_type_icon: "Servertypsikon",
		server_type_heading: "Servertyp",
		server_type: "Servertyp",
		port_heading: "Portnummer",
		port_label: "Portnummer:",
		server_name_heading: "Servernamn",
		server_label: "Servernamn:",
		server_url_label: "Server-URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Ansluten:",
		repository_label: "Behållare",
		modified_label: "Ändrades av:",
		modified_date_label: "Ändrades:",
		status_label: "Status:",
		last_modified_label: "Ändrades senast av:",

		modifier: "Ändrades av",
		modified_date: "Ändrades",

		/* Favorites */
		new_favorite_label: "Lägg till i Favoriter",
		edit_favorite_label: "Byt namn på favorit",
		remove_favorite_label: "Ta bort från Favoriter",
		missing_alias_message: "Du måste ange ett namn.",
		sync_favorite_enable_hover: "Objektet har aktiverats för synkronisering.",
		sync_favorite_disable_hover: "Objektet synkroniseras inte.",
		sync_favorite_sync_unavailable_hover: "Synkronisering är inte tillgängligt för den här objekttypen.",
		sync_enable_label: "Synkronisera objektet",
		sync_enable_label_hover: "Objektet synkroniseras till enheterna.",
		delete_favorite_confirmation_question: "Vill du ta bort objektet från dina favoriter?",
		alias_label: "Namn:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Det valda objektet finns redan i dina favoriter.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Det går inte att lägga till objektet i Favoriter.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Du kan bara lagra ${0} favoriter.",
		add_favorite_max_reached_response: "Om du vill lägga till objektet i favoritlistan måste du först ta bort en befintlig favorit.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Det går inte att konvertera valda dokument till PDF.",
		download_as_pdf_max_content_error_explanation: "Det går endast att konvertera ${0} MB data till PDF. Valda objekt överskrider ${0} MB.",
		download_as_pdf_max_content_error_response: "Välj färre objekt eller mindre dokument och hämta dokumenten som PDF-filer igen.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Det går inte att konvertera valda dokument till en enda PDF-fil.",
		download_as_pdf_mimetype_check_error_explanation: "Om du vill konvertera ett dokument som består av flera delar till en enda PDF-fil måste varje del ha samma MIME-typ.",
		download_as_pdf_mimetype_check_error_response: "Välj ett annat dokument att konvertera till PDF.",

		/* Activity Stream */
		show_label: "Visa:",
		all_filter: "Alla",
		notifications_filter: "Aviseringar",
		workitems_filter: "Arbetsobjekt",
		documentes_filter: "Dokument",
		all_favorites_filter: "Alla favoriter",
		folders_filter: "Mappar",
		searches_filter: "Sökningar",
		teamspaces_filter: "Grupprum",

		/* Repository */
		all_search_templates: "Alla sökningar",
		all_od_searches: "Alla sökmallar",
		recent_searches: "Senaste sökningar",
		opened_searches: "Öppnade sökningar",

		all_worklists: "Alla inkorgar",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "En lista över alla arbetslistor",

		/* Teamspace */
		all_workspaces: "Alla grupprum",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "En lista över alla grupprum",
		workspace_title: "Grupprum",
		workspace_icon: "Grupprumsikon",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Tillgänglig",
		workspace_stat_offline: "Ej tillgänglig",
		workspace_stat_validate: "Kräver validering",
		workspace_stat_pendingDelete: "Väntande borttagning",
		workspace_stat_deleteError: "Borttagningen misslyckades",

		undefined_value: "Ej definierad",
		undefined_reference_value: "Ingen referens är definierad.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Fler resultat kan vara tillgängliga på servern.",
		search_all_data: "Sök i alla data.",
		search_all_teamspaces: "Sök i alla grupprum.",
		teamspace_filter_results: "Visar ${0} resultat. ",
		displaying_filtered_results: "Visar filtrerade resultat. ",
		displaying_recent_results: "Visar endast grupprum som har ändrats de senaste ${0} dagarna. Om du vill hitta andra grupprum filtrerar du listan över grupprum efter namn eller beskrivning. ",
		clear_filter: "Rensa filter.",

		/* FolderTreeModel */
		move_item_task: "Flytta objekt",
		copy_item_task: "Kopiera objekt",
		add_item_task: "Lägg till objekt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Följande mapp hittades inte: ${0}. Den kan ha tagits bort eller så kan den inte öppnas från den här vyn. Klicka på länken Mer i trädvyn för att navigera till mappen. Uppdatera listvyn om du inte kan visa mappen.",
		more_paging_link: "fler",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Avbryt",

		/* ErrorDialog */
		error_dialog_title: "Fel",
		error_dialog_icon_tooltip: "Fel",
		error_dialog_stack_trace_title: "Stackspårning",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Bekräftelse",

		close_browser_msg: "Stäng webbläsaren.",

		/* MessageDialog */
		message_dialog_title: "Information",
		warning_dialog_title: "Varning",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Välkommen till ${0}",
		server: "Behållare:",
		username: "Användarnamn:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Ett användarnamn krävs för att logga in till behållaren",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Ett lösenord krävs för att logga in till behållaren",
		password: "Lösenord:",
		login: "Logga in",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Sessionen har upphört. Logga in igen.",
		login_repository_connection_expired_message: "Anslutningstiden till behållaren ${0} gick ut. Logga in igen.",
		login_site_connection_expired_message: "Anslutningen till platsen har brutits. Logga in igen.",
		login_new_server_message: "Ange ett användarnamn och lösenord för ${0}.",
		login_error_more_information_message: "Mer information",

		disconnect_box_account_user: "Koppla ned Box-konto: ${0}",
		disconnect_box_account: "Koppla ned Box-konto",
		disconnect_box_accounts: "Koppla ned Box-konton",

		// OAuth2/Box Login
		login_ssl_connection_required: "SSL-anslutning krävs för Box-behållaråtkomst.",
		login_oauth_popup_blocked: "Popup-fönstret blockerades. Du måste kanske låsa upp popup-fönster i din webbläsare för att logga in.",
		login_oauth_click_here: "Klicka här om du inte dirigeras om inom 5 sekunder.",
		login_oauth_title: "Logga in",
		login_oauth_grant_intro: "Godkänn autentisering för ${0}.",
		login_pane_oauth_click_here: "Klicka här för att logga in.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Vill du logga ut från webbklienten?",
		logout_confirmation_button: "Logga ut",

		/* ChangeLocaleDialog */
		change_locale: "Ändra språk- och språkmiljöinställningar",
		change_locale_use_browser_language: "Använd webbläsarens språkinställning (standard)",
		change_locale_use_browser_locale: "Använd webbläsarens språkinställning (standard)",
		change_locale_description: "Om du tar bort webbläsarens cookies måste du återställa språk- och språkmiljöinställningar.",
		change_locale_language_locale: "Programspråk:",
		change_locale_language_locale_hover: "Inställningen ändrar textspråket i webbklienten men ändrar inte språket på dokument i programmet.<br><br>Standardinställningen är att använda det språk som angetts i webbläsarens konfigurationsinställningar.",
		change_locale_value_format_locale: "Programspråkmiljö:",
		change_locale_value_format_locale_hover: "Språkmiljön bestämmer formatet för datum, klockslag och tal i webbklienten.<br><br>Standardinställningen är att använda de format som är associerade till det språk som angetts i webbläsarens konfigurationsinställningar.",
		change_locale_for_office: "Inställningar för text i två riktningar:",
		change_locale_bidi_support_flag: "Aktivera BIDI-funktioner",
		change_locale_bidi_support_flag_hover: "När BIDI-funktionerna har aktiverats kan användarna ange textriktningen för text i indatafält. Text för objekt, t.ex. mappar, visas i samma riktning den skrivs.",
		change_locale_base_text_direction: "Bastextriktning för innehåll:",
		change_locale_base_text_direction_hover: "Ange textriktningen för indatafält. Det här styr även visningsriktningen för etiketter, t.ex. för mappnamn.",
		change_locale_calendar_type: "Kalendertyp:",
		change_locale_calendar_type_hover: "Välj den typ av kalender som ska användas för användarsessionerna.",
		change_locale_base_text_direction_default: "Standard",
		change_locale_base_text_direction_ltr: "Vänster till höger",
		change_locale_base_text_direction_rtl: "Höger till vänster",
		change_locale_base_text_direction_contextual: "Kontextuell",
		change_locale_calendar_type_gregorian: "Gregoriansk",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebreisk",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Ändra lösenord",
		change_password_title: "Ändra lösenord",
		change_password_expired_title: "Lösenordet gäller inte längre",
		change_password_message: "Ange ett nytt lösenord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Lösenordet gäller inte längre. Ange ett nytt lösenord.",
		change_password_password_rules: "Lösenordsregler",
		change_password_old_password: "Gammalt lösenord:",
		change_password_new_password: "Nytt lösenord:",
		change_password_confirm_password: "Bekräfta lösenord:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Du måste ange ditt gamla lösenord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Du måste ange ett nytt lösenord.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Du måste bekräfta det nya lösenordet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Lösenorden måste matcha.",

		/* GlobalToolbar */
		actions: "Åtgärder",
		actions_label: "Åtgärder:",
		open_actions_label: "Öppna åtgärder:",

		/* About Dialog */
		about_dialog_title: "Om",
		about_product_name_label: "Produktnamn: ",
		about_product_version_label: "Version: ",
		about_product_build_label: "Bygge: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. US Government Users Restricted Rights. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM och IBM-logotypen är registrerade varumärken som tillhör International Business Machine Corporation i USA och/eller andra länder. Detta program licensieras i enlighet med villkoren i det licensavtal som medföljer programmet. Licensavtalet kan finnas som en fil med namnet \"License\" eller \"Non_IBM_License\" (om tillämpligt) i en programkatalog. I annat fall tillhandahålls licensavtalet utskrivet på papper. Läs noggrant igenom avtalet innan du börjar använda programmet. Du godkänner villkoren genom att använda programmet. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Vill du ta bort det valda objektet?",
		delete_single_folder_confirmation_question: "Vill du ta bort mappen ${0}?",
		delete_multiple_confirmation_question: "Vill du ta bort de valda objekten?<br>${0} objekt är valda.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Ta bort",
		search_template_delete_confirmation_question: "Vill du ta bort sökningen ${0}?",
		search_template_opened_delete_confirmation_question: "Sökningen ${0} är öppen. Om du tar bort sökningen stängs den.<br>Vill du ta bort sökningen?",
		delete_multiple_opened_search_template_confirmation_question: "Följande sökning är öppen: ${0}.<br>Om du tar bort sökningarna stängs de. Vill du ta bort de här sökningarna?",
		delete_large_number_items_confirmation_question: "Du har valt ${0} objekt att ta bort.<br/>Om du tar bort ett stort antal objekt kan det ta lång tid.<br/>Vill du fortsätta?",
		delete_confirmation_entrytemplate: "Om du tar bort inmatningsmallen får det följande resultat för dokument och mappar som är associerade med inmatningsmallen:<ul><li>Objektet kommer inte längre att vara associerade med inmatningsmallen och användare kan få ett varningsmeddelande när du uppdaterar ett objekt.</li><li>Alla egenskaper som kontrollerades av inmatningsmallen, t.ex. namnet eller egenskapsordningen, kommer inte längre att gälla de objekt som är associerade med inmatningsmallen.</li></ul>Vill du ta bort inmatningsmallen?",
		delete_confirmation_entrytempalte_with_multi_items: "Inmatningsmallar måste tas bort individuellt. Inmatningsmallarna har tagits bort från listan över objekt att ta bort. Om du vill ta bort inmatningsmallarna måste du ta bort dem var för sig.",

		/* Create/Apply/Remove Hold */
		hold: "Hållstämpel",
		createHold: "Ny hållstämpel",
		applyHold: "Tillämpa hållstämpel",
		removeHold: "Ta bort hållstämpel",
		showHolds_title: "Visa hållstämplar",
		applyHoldSelectText: "Välj de hållstämplar som du ska tillämpa på de valda objekten.",
		availableHolds: "Tillgängliga hållstämplar:",
		removeHoldSelectText: "Välj de hållstämplar du ska ta bort från de valda objekten.",
		appliedHolds: "Tillämpade hållstämplar:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Skapa en ny hållstämpel för valda objekt.",
		holdName: "Hållstämpelns namn:",
		holdDescription: "Beskrivning:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Du måste ange ett namn för hållstämpeln.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Det angivna hållstämpelnamnet finns redan.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Namnet får inte innehålla följande tecken: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Din session upphör om ${0} minuter.",
		session_expire: "Session upphör",
		logoff: "Logga ut",
		extend_session: "Förläng session",
		admin_custom_settings: "Fler inställningar:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning är ett booleskt värde som anger om varningen när sessionen upphör är aktiverad. Standardvärdet är true. sessionExpireWarningTime är ett heltal 2-5 som anger varningstiden när sessionen upphör.",
		admin_custom_setting_dialog_title_new: "Ny inställning",
		admin_custom_setting_dialog_title_edit: "Ändra inställning",
		admin_custom_setting_dialog_hover_help: "Lägg till andra parametrar genom att ange parametrarnas namn och värde. Exempel: Du kan ange enableSessionExpireWarning och true om du vill aktivera varningen om att sessionen upphör.",
		admin_custom_setting_dialog_field_hover_help: "Mer information om namn och värden för parametrar finns i IBM navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Värdet är obligatoriskt. Värdet får inte innehålla blanktecken och får inte vara en dubblett.",
		admin_custom_setting_dialog_bool_valueInvalid: "Värdet är obligatoriskt. Det måste vara ett booleskt värde.",
		admin_custom_setting_dialog_int_valueInvalid: "Värdet är obligatoriskt. Det måste vara ett heltal.",
		/* Add Document Dialog */
		add_document_dialog_title: "Lägg till dokument",
		add_documents_dialog_title: "Lägg till dokument",
		add_document_general_label: "Allmänt",
		add_document_properties_label: "Egenskaper",
		add_document_properties_with_ellipsis_label: "Egenskaper...",
		add_document_security_label: "Säkerhet",
		add_document_location_label: "Spara i:",
		add_document_type_label: "Vad vill du spara?",
		add_document_localfile_label: "Lokalt dokument",
		add_document_metadata_label: "Information om ett dokument",
		add_document_external_label: "Länk till ett externt dokument",
		add_document_web_link_label: "Webblänk",
		add_document_saved_content_label: "Använd sparad fil:",
		add_document_saved_content_choice: "Sparad fil",
		add_document_file_name_label: "Filnamn:",
		add_document_entry_template_label: "Inmatningsmall:",
		add_document_delete_file_label: "Ta bort lokal fil",
		add_document_delete_file_disabled_label: "Filer som inte finns i filspårningskatalogen tas inte bort.",
		add_document_major_version_label: "Huvudversion",
		add_document_major_version_hover: "Sätter dokumentstatus till Utgivet. Dokumentet läggs till i behållaren som version 1.0. Om alternativet inte väljs är dokumentet inte klart att ges ut och läggs till som delversion 0.1.",
		add_document_save_document_as_unfiled_label: "Spara inte dokumentet i en mapp",
		add_document_save_document_as_unfiled_hover: "Om du väljer det här alternativet kan du bara hitta dokumentet genom sökning. Du kan inte bläddra efter det.",
		add_document_create_new_version_label: "Skapa ny version",
		add_document_replace_existing_version_label: "Ersätt befintlig version",
		add_document_start_workflow_label: "Starta arbetsflöde",
		add_document_auto_classify_label: "Klassificera innehåll automatiskt",
		add_document_add_label: "Lägg till",
		add_document_cancel_label: "Avbryt",
		add_document_document_type_label: "Klass",
		add_document_context_info: "De värden som du anger för dokumentegenskaperna kan användas till att hitta dokumentet senare.",
		add_documents_context_info: "De värden som du anger för dokument kan användas till att söka efter dokument senare. Om du vill ange ett annat egenskapsvärde för ett dokument, måste du lägga till det separat eller ändra egenskaperna för dokumentet efter att du har lagt till det.",
		add_document_url_label: "URL:",
		add_document_template_description: "Mallbeskrivning:",
		add_document_select_entry_template: "Ange eller välj en inmatningsmall",
		add_document_no_permission_to_associations: "Du har inte behörighet att använda inmatningsmallar",
		add_document_no_entry_template_to_use: "Ingen inmatningsmall kan användas för valda filer",
		add_document_no_entry_template_itemtype_permission: "Du kan inte lägga till objekt i mappen. Du måste välja en inmatningsmall men du har inte åtkomst till någon av inmatningsmallarna som är associerad med den här mappen. Kontakta systemadministratören och be om åtkomst till inmatningsmallen.",
		add_document_appgroup_name_label: "Programgruppsnamn:",
		add_document_app_name_label: "Programnamn:",
		create_folder_dialog_title: "Ny mapp",
		create_folder_context_info: "De värden som du anger för mappegenskaperna kan användas till att hitta mappen senare.",
		create_folder_folder_name_label: "Mappnamn",
		create_folder_save_folder_as_unfiled_label: "Spara inte mappen i en annan mapp",
		create_folder_save_folder_as_unfiled_hover: "Om du väljer det här alternativet kan du bara hitta mappen genom sökning. Du kan inte bläddra till den.",
		add_item_create_in_folder: "Skapa i mapp:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Mappnamnet får inte innehålla något av följande tecken: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Ett mappnamn får inte innehålla något av följande tecken: \\ / och får inte vara samma som . eller ..",
		invalid_box_file_name_message: "Ett filnamn får inte innehålla något av följande tecken: \\ / och får inte vara samma som . eller ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Filnamnet får inte innehålla något av följande tecken: \\ / : * ? \" < > |",
		external_document_placeholder: "Ange URL-adressen till dokumentet",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Färg måste anges som ett 3- eller 6-siffrigt hexadecimalt tal. Exempel: #000 eller #000000.",
		add_document_unfiled: "${0} har avarkiverats",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Lägg till dokument med hjälp av inmatningsmall",
		add_document_using_template_context_info: "När du lägger till ett dokument genom att använda en inmatningsmall blir värdena för dokumentet konsekventa.",
		add_documents_using_template_dialog_title: "Lägg till dokument med hjälp av inmatningsmall",
		add_documents_document_name_is_file_name_hint: "Filnamnet används för den här egenskapen",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Ny mapp med hjälp av inmatningsmall",
		create_folder_using_template_context_info: "När du skapar en mapp genom att använda en inmatningsmall blir värdena för mappen konsekventa.",

		add_documents_batch_results_dialog_title: "Dokument ej tillagda i behållaren",
		add_documents_batch_results_dialog_context_info: "Följande dokument lades inte till i behållaren. Markera ett dokument och klicka på Detaljer om du vill ha mer information om varför dokumentet inte lagts till i behållaren.",
		add_documents_batch_results_dialog_filename_col_hdr: "Filnamn",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Meddelande",
		add_documents_batch_results_status_error: "Fel",
		add_documents_batch_results_status_cancelled: "Avbröts",
		add_documents_batch_results_status_cancelled_msg: "Dokumentet lades inte till eftersom begäran avbröts.",

		add_documents_batch_status_title: "Lägger till dokument",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Lägger till fil ${0} av ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Fel: ${0}",
		add_documents_batch_status_completing_msg: "Bearbetningen stoppas när dokumentet har lagts till.",

		add_documents_status_uploading_msg: "Överför fil ${0} av ${1}...",
		add_documents_status_adding_msg: "Lägger till fil ${0} av ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Inmatningsmallen har konfigurerats i ett annat program för dokument som alltid deklareras som poster. Inställningen ignoreras dock eftersom webbklienten inte hanterar att dokument deklareras som poster.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Inmatningsmallen har konfigurerats i ett annat program och ger dig möjlighet att bestämma om dokumentet ska deklareras som en post. Inställningen ignoreras dock eftersom webbklienten inte hanterar att dokument deklareras som poster.",
		no_selection: "&lt;Välj&gt;",

		batch_results_dialog_details_label: "Detaljer",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Värdet är ogiltigt. Värdet måste vara ett GUID (Globally Unique Identifier). Exempel: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Värdet är ogiltigt. Värdet måste vara ett flyttal. Exempel: 1.2 eller 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Värdet är ogiltigt. Värdet måste vara i formatet ${0}. Exempel: ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Värdet är ogiltigt. Värdet måste vara ett decimaltal. Exempel: 1,2 eller 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Värdet är ogiltigt. Värdet måste vara ett heltal. Exempel: 5 eller 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Värdet är ogiltigt. Värdet får endast alfabetiska tecken. Exempel: a-z och A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Värdet är ogiltigt. Värdet får endast innehålla alfanumeriska tecken. Exempel: a-z, A-Z och 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Värdet är ogiltigt. Värdet får bara innehålla numeriska tecken. Exempel: 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Värdet är ogiltigt. Värdet får endast innehålla följande tecken: a-z, A-Z, 0-9, [blanktecken] och `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Värdet är ogiltigt. Värdet måste vara ett datum i följande format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Värdet är ogiltigt. Värdet måste vara ett klockslag i följande format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Värdet är ogiltigt. Välj ett värde i listrutan.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Värdet är ogiltigt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Värdet är ogiltigt. Värdet måste ha följande format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Värdet är obligatoriskt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Värdet är för långt. Egenskapens värde får bestå av maximalt ${0} tecken.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Värdet är för kort. Egenskapen måste minst ha längden ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Värdet ligger utanför intervallet. Värdet måste vara ett flyttal från ${0} till ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Värdet ligger utanför intervallet. Värdet måste vara ett decimaltal från ${0} till ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Värdet ligger utanför intervallet. Värdet måste vara ett heltal från ${0} till ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Värdet måste vara ett datum från ${0} till ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Värdet ligger utanför intervallet. Värdet måste vara ett datum från ${0} till ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Värdet ligger utanför intervallet. Värdet måste vara ett klockslag från ${0} till ${1}.",
		property_and: "och",

		property_invalidValueOrRequired: "Följande värde är ogiltigt eller krävs: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Egenskaper",
		edit_properties_dialog_info: "Du kan se och ändra egenskaperna för objektet. Om du har tillräcklig behörighet kan du även ändra objektets säkerhet. Du kan dock inte ändra systemegenskaperna.",
		edit_properties_od_dialog_info: "Du kan se och ändra egenskaperna för objektet. Du kan dock inte ändra systemegenskaperna.",
		system_properties_title: "Systemegenskaper",
		custom_properties_title: "Egenskaper",
		/* Folder collaboration tab */
		box_permission_permission: "Behörighet",
		box_permission_permissions: "Behörigheter",
		box_permission_editor: "Redigerare",
		box_permission_owner: "Ägare",
		box_permission_co_owner: "Medägare",
		box_permission_viewer_uploader: "Visning, överföring",
		box_permission_previewer_uploader: "Förhandsvisning, överföring",
		box_permission_viewer: "Visningsprogram",
		box_permission_previewer: "Förhandsvisning",
		box_permission_uploader: "Överföring",
		box_permission_add: "Lägg till",
		box_permission_upload: "Överför",
		box_permission_download: "Hämta",
		box_permission_preview: "Förhandsvisa",
		box_permission_view: "Visa",
		box_permission_send_links: "Skicka länkar enbart för visning",
		box_permission_create_subfolders: "Skapa undermappar",
		box_permission_create_tasks: "Skapa uppgifter",
		box_permission_add_comments: "Lägga till kommentarer",
		box_collaboration_invite_placeholder: "Ange namn, e-postadress eller grupp som ska inbjudas",
		box_collaboration_invite_placeholder_non_admin: "Ange en e-postadress för inbjudan",
		box_collaboration_invalid_email: "Ange en giltig e-postadress",
		box_collaboration_user_already_present: "Användaren är redan medarbetare i mappen",
		box_collaboration_user_name: "Namn",
		box_collaboration_email_address: "E-postadress",
		box_collaboration_date_added: "Tilläggsdatum",
		box_collaboration_remove_collaboration: "Ta bort",
		box_collaboration_remove_collaboration_title: "Ta bort",
		box_collaboration_no_collaborators: "Det finns inga medarbetare",
		box_collaboration_change_owner_title: "Ändra objektägare",
		box_collaboration_change_owner_prompt: "Genom att göra den här medarbetaren till mappägare blir du redigerare och äger inte längre mappen. Alla medarbetare som har lagts till direkt till den här mappen kommer att se den i sina rotmappar. Alla medarbetare som har lagts till på den överordnade mappnivån eller högre kommer inte längre att vara medarbetare. Vill du fortsätta?",
		box_collaboration_remove_self_title: "Ta bort mig",
		box_collaboration_remove_self_prompt: "Vill du ta bort dig själv som medarbetare? Du kommer inte längre att ha åtkomst till den här mappen.",
		box_collaboration_user: "Användare",
		box_collaboration_group: "Grupp",
		box_managing_users_not_configured: "Du kan inte söka efter användare och grupper eftersom Box-programmet inte är konfigurerat korrekt. Kontakta administratören om funktionen ska användas och begär att Box-programmet konfigureras för att hantera användare och grupper.",
		duplicate_value_error: "Varje egenskapsvärde måste vara unikt.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Ändringar som du gör i följande fält tillämpas på alla valda objekt. Om du behöver ange ett annat egenskapsvärde för ett visst objekt eller ändra säkerheten för ett objekt måste du ändra egenskaperna för varje objekt för sig.",
		multi_edit_properties_class_label: "Klass:",
		multi_edit_properties_items_label: "Objektnamn:",
		multi_edit_properties_properties_label: "Egenskaper:",
		multi_edit_batch_status_title: "Uppdatera egenskaper",
		multi_edit_batch_status_adding_msg: "Uppdaterar objekt ${0} av ${1}...",
		multi_edit_batch_status_verifying_msg: "Verifierar objekt ${0} av ${1}...",
		multi_edit_batch_status_completing_msg: "Processen stoppar när objektet har uppdaterats.",
		multi_edit_batch_status_validation_completing_msg: "Processen stoppas när objektet har verifierats.",
		multi_edit_batch_results_status_error: "Fel",
		multi_edit_batch_results_status_cancelled: "Avbröts",
		multi_edit_batch_results_status_cancelled_msg: "Objektet uppdaterades inte eftersom begäran avbröts.",
		multi_edit_batch_results_dialog_title: "Objekten uppdaterades inte",
		multi_edit_batch_results_dialog_context_info: "Följande objekt har inte uppdaterats. Markera ett objektnamn och klicka på Detaljer om du vill ha mer information om varför objektet inte uppdaterades.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Objektnamn",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Meddelande",
		multi_edit_batch_status_errors_msg: "Fel: ${0}",
		multi_edit_batch_permission_error_text: "Det går inte att spara ändringarna av egenskaperna.",
		multi_edit_invalid_value_error: "Värdet är beroende av ett annat egenskapsvärde och är inte giltigt för alla objekt som du valt.",
		multi_edit_batch_permission_error_explanation: "Du kan inte ändra objektets egenskaper eftersom du inte har tillräcklig behörighet.",
		multi_edit_no_modifiable_properties: "Det går inte att ändra egenskaperna för valda objekt. Det kan bero på att ett objekt endast innehåller skrivskyddade egenskaper eller att endast objektnamnet är ändringsbart. Om du väljer flera objekt går det inte att ändra objektnamnet.",
		multi_edit_mult_classes_dialog_info: "De valda objekten finns i olika behållare eller tillhör olika klasser. Du kan bara ändra objekt som finns i samma klass eller i samma behållare. Välj den delmängd av objekten som du vill ändra.",
		multi_edit_class_selector_class_heading: "Klass",
		multi_edit_class_selector_entry_template_heading: "Inmatningsmall",
		multi_edit_class_selector_repository_heading: "Behållare",
		multi_edit_class_selector_items_heading: "Objekt",
		multi_edit_some_classes_not_displayed: "Vissa av de valda objekten ingår inte i listan eftersom de innehåller skrivskyddade egenskaper eller de finns i en behållare som inte tillåter att egenskaper ändras.",
		multi_edit_properties_invalid_msg: "Vissa egenskapsvärden är ogiltiga för de valda objekten.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Den här egenskapen är skrivskyddad och kan inte ändras.",
		multi_edit_append_checkbox_label: "Infoga",
		multi_edit_append_checkbox_tooltip: "Välj alternativet om du vill lägga till nya egenskapsvärden till befintliga i stället för att ersätta dem.",
		multi_edit_properties_invalid_childcomponent_msg: "Vissa värden i egenskapen ${0} för den underordnade komponenten ${1} är beroende av andra egenskaper och är inte längre giltiga med de val du gjort. Ändra värdena för den underordnade komponenten ${1} eller ändra egenskaperna för objekten individuellt.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exportera egenskaper",
		export_properties_dialog_info: "Välj de egenskaper som du ska exportera och ange i vilken ordning de ska visas.",
		export_properties_dialog_export_button_label: "Exportera",
		export_properties_dialog_export_raw_values: "Exportera råa värden",

		/* Properties */
		filter_clear_tooltip: "Rensa filtret",
		properties_new_row: "Ny",
		properties_requiredClass_document_tooltip: "Välj ett dokument. Dokumentet måste tillhöra klassen ${0}.",
		properties_requiredClass_folder_tooltip: "Välj en mapp. Mappen måste tillhöra klassen ${0}.",
		properties_dataType_tooltip: "Datatyp: ${0}",
		properties_maxLength_tooltip: "Maximilängd: ",
		properties_minLength_tooltip: "Minimilängd: ",
		properties_minValue_tooltip: "Minimivärde: ",
		properties_maxValue_tooltip: "Maximivärde: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Beskrivning: ",

		properties_type_boolean_tooltip: "Boolesk",
		properties_type_date_tooltip: "Datum",
		properties_type_time_tooltip: "Tid",
		properties_type_timestamp_tooltip: "Tidsstämpel",
		properties_type_decimal_tooltip: "Decimalvärde",
		properties_type_double_tooltip: "Flyttal",
		properties_type_short_tooltip: "Heltal",
		properties_type_integer_tooltip: "Heltal",
		properties_type_long_tooltip: "Heltal",
		properties_type_string_tooltip: "Textsträng",
		properties_type_string_alpha_tooltip: "Alfabetisk sträng",
		properties_type_string_alphanum_tooltip: "Alfanumerisk sträng",
		properties_type_string_ext_tooltip: "Utökad alfanumerisk sträng",
		properties_type_string_num_tooltip: "Numerisk sträng",
		properties_type_binary_tooltip: "Binär",
		properties_type_object_tooltip: "Objekt",
		properties_type_reference_tooltip: "Egenskapen refererar till ett annat objekt i behållaren.",
		properties_type_guid_tooltip: "Global unik identifierare",
		properties_type_group_tooltip: "Användare och grupper",
		properties_type_user_tooltip: "Användare",
		properties_type_childComponent_tooltip: "Underordnad komponent",

		properties_childComponent_minCardinalityOnly_tooltip: "Egenskapen måste ha minst ${0} värden.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Egenskapen får inte ha fler än ${0} värden.",
		properties_childComponent_minMaxCardinality_tooltip: "Egenskapen måste ha minst ${0} och högst ${1} värden.",
		properties_childComponent_noCardinality_tooltip: "Egenskapen kan ha valfritt antal värden.",

		properties_type_guid_example_tooltip: ", t.ex. {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Välj ett värde från listan.",
		properties_single_select_choice_tooltip: "Välj ett värde.",
		properties_multiple_select_typein_tooltip: "Ange ett eller flera värden.",
		properties_multiple_select_choice_tooltip: "Välj ett eller flera värden.",
		properties_not_selectable_tooltip: "Kategorin kan inte väljas.",
		properties_none: "Inga",
		properties_none_tooltip: "Välj <i>Inget</i> om du vill rensa det aktuella värdet för egenskapen.",
		properties_value_empty: "Inget värde",
		properties_value_read_only: "Skrivskyddat",
		properties_clear_label: "Rensa",
		properties_clear_tooltip: "Rensar värdet i fältet i behållaren när du har klickat på <b>Spara</b>.",
		properties_box_custom_properties: "Anpassa egenskaper",
		properties_box_metadata_name_in_use: "Namnet används redan. Ange ett annat namn för den anpassade egenskapen.",

		properties_templates: "Mallar",
		properties_add_template: "Lägg till mall",
		properties_remove_template: "Ta bort",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Checka in",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Checka in",
		checkin_cancel_label: "Avbryt",
		checkin_file_name_label: "Filnamn",
		checkin_document_status_title: "Checka in dokument",
		checkin_document_status_uploading_msg: "Överför fil...",
		checkin_document_status_checkingin_msg: "Checkar in fil...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Välj redigeringsläge",
		viewer_redaction_new_document_confirmation_question: "Vill du spara redigeringen som ett nytt dokument eller en lokal fil?",
		viewer_redaction_new_version_confirmation_question: "Vill du spara redigeringen som en ny version?",
		viewer_redaction_new_version_confirmation_question_never: "Vill du spara redigeringen som ett nytt innehåll?",		
		viewer_redaction_new_document_button: "Ja",
		viewer_redaction_new_document_cancel_button: "Nej",
		viewer_redaction_add_document_confirmation_question: "Vill du spara redigeringen som ett nytt dokument, en ny version eller en lokal fil?",
		viewer_redaction_add_document_confirmation_question_version_never: "Vill du spara redigeringen som ett nytt dokument, ett nytt innehåll eller en lokal fil?",
		viewer_redaction_add_document_button: "Nytt dokument",
		viewer_redaction_add_new_version_button: "Ny version",
		viewer_redaction_add_new_version_button_version_never: "Nytt innehåll",
		viewer_redaction_add_local_file_button: "Lokal fil",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Välj redigeringsorsak",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Det går inte att hitta den inmatningsmall som användes när dokumentet lades till. Dokumenten checkas in i behållaren utan att använda inmatningsmallen.",
		property_entry_template_not_retrieved_warning: "Det går inte att hitta den inmatningsmall som användes när dokumentet lades till. Dokumentegenskaperna visas utan att inmatningsmallen används.",
		multi_edit_entry_template_not_found_name: "[Hittades inte]",
		multi_edit_entry_template_not_retrieved_warning: "Det går inte att hitta den inmatningsmall som användes när objekten lades till. Objektegenskaperna ändras utan att inmatningsmallen används.",
		checkin_major_version_hover: "Räknar upp dokumentversionsnumret med ett och sätter dokumentstatus till Utgivet. Om du inte väljer det här alternativet är dokumentet inte klart för att släppas och checkas in som en delversion.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokumentet kan inte checkas in eftersom det inte är utcheckat.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Användar-IDt eller lösenordet är inte giltigt för servern.",
		error_bad_userid_password_userResponse: "Kontrollera att du angett ditt användar-ID och lösenord korrekt.",
		error_bad_userid_password_adminResponse: "Följande fel returnerades: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "felmeddelande",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Det går inte att ansluta till webbklienten med följande URL-adress: ${0}",
		http_send_error_explanation: "Felet kan orsakas av ett konfigurationsproblem på webbprogramservern eller av ett problem med webbklientprogrammet.",
		http_send_error_userResponse: "Försök logga in igen. Rapportera felet till systemadministratören om det kvarstår.",
		http_send_error_adminResponse: "Följande HTTP-fel returnerades: ${1}.",
		http_send_error_0: "webbklient-URL",
		http_send_error_1: "HTTP-fel",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Det går inte att ansluta till webbklienten med följande URL-adress: ${0}",
		http_error_explanation: "Du kanske behöver autentisera brandväggen. Felet kan också bero på att webbprogramservern inte är igång eller inte kan nås på grund av nätverksproblem.",
		http_error_userResponse: "Om du behöver autentisera en brandvägg gör du det och försöker sedan logga in igen. Rapportera felet till systemadministratören om det kvarstår.",
		http_error_adminResponse: "Följande HTTP-fel returnerades: ${1}.",
		http_error_0: "webbklient-URL",
		http_error_1: "HTTP-fel",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Det går inte att ansluta till webbklienten med följande URL-adress: ${0}",
		http_response_bad_explanation: "Felet kan orsakas av ett konfigurationsproblem på webbprogramservern eller av ett problem med webbklienten.",
		http_response_bad_userResponse: "Försök logga in igen. Rapportera felet till systemadministratören om det kvarstår.",
		http_response_bad_adminResponse: "Följande fel returnerades: ${1}.",
		http_response_bad_0: "webbklient-URL",
		http_response_bad_1: "HTTP-fel",
		http_response_bad_number: 2002,

		unititled_document_name: "Namnlös",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Det går inte att starta e-postappleten.",
		email_applet_init_failed_explanation: "Det här problemet kan inträffa om e-postklienten inte är korrekt installerad och konfigurerad eller när en hanterad version av Java Runtime Environment (JRE) inte är installerad på datorn.",
		email_applet_init_failed_userResponse: "Så här löser du problemet:<ul><li>Kontrollera att e-programmet är installerat och konfigurerat som standardklient för e-post på datorn.</li><li>Kontrollera att en hanterad version av JRE är installerad på datorn genom att ange följande kommando i en kommandoprompt: java -version</li></ul><p>I <i>Hardware and Software prerequisites for IBM Content Navigator-dokument</i> på webbplatsen för IBM Software Support finns en lista över hanterade JRE-versioner.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Det gick inte att starta e-postprogrammet därför att en nödvändig DLL-fil inte kunde läsas in.",
		email_applet_JNI_LOAD_FAILED_explanation: "Det går inte att läsa in den nödvändiga filen WCEmailAppletJNI.dll eftersom den temporära katalogen på datorn kanske är full.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Se till att det finns tillräckligt med utrymme i den temporära katalogen. Gör sedan ett nytt försök att skicka dokumentet från webbklienten. Filen WCEmailAppletJNI.dll läses som standard in i den temporära katalog som anges i webbläsarinställningarna.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Det gick inte att starta e-postprogrammet eftersom e-postappleten inte kan skapa en temporär fil.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Den temporära katalogen på datorn kanske är full.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Se till att det finns tillräckligt med utrymme i den temporära katalogen. Gör sedan ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Det går inte att starta e-postprogrammet eftersom e-postappleten inte kommer åt den temporära katalogen.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Den temporära katalogen på datorn kanske är full eller så har du inte behörighet att skriva till den.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Se till att det finns tillräckligt med utrymme i den temporära katalogen och att du har skrivbehörighet till den. Gör sedan ett nytt försök att skicka dokumentet från webbklienten. Kontakta systemadministratören om problemet kvarstår.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E-postappleten kan inte ta bort en temporär fil.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Ett annat program kanske använder filen eller så kanske den inte finns på datorn.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Om filen används av ett annat program avslutar du programmet. Om filen finns i det lokala filsystemet tar du bort följande fil från den temporära katalogen på datorn: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Det går inte att skapa länken till dokumentet.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Behållaren returnerade URL-adressen i ogiltigt format.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Stäng webbläsaren, inklusive alla flikar och sessioner, och logga in igen. Gör ett nytt försök att skicka dokumentet från webbklienten. Kontakta IBM Software Support om problemet kvarstår.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E-postappleten kan inte bifoga filen till ett e-postmeddelande.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Behållaren returnerade URL-adressen till dokumentet i ett ogiltigt format.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Stäng webbläsaren, inklusive alla flikar och sessioner, och logga in igen. Gör ett nytt försök att skicka dokumentet från webbklienten. Kontakta IBM Software Support om problemet kvarstår.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Det gick inte att skapa bilagan.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E-postappleten kan inte läsa URL-adressen till dokumentet.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Stäng webbläsaren, inklusive alla flikar och sessioner, och logga in igen. Gör ett nytt försök att skicka dokumentet från webbklienten. Kontakta IBM Software Support om problemet kvarstår.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Det gick inte att hämta dokumentet från behållaren.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Sessionen kanske har nått en tidsgräns, behållaren eller webbprogramservern kanske inte är igång eller så är det problem med webbklientkonfigurationen.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Logga in och försök sedan att skicka dokumentet med e-post igen. Be systemadministratören kontrollera behållarens felloggar om problemet kvarstår.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Om du har konfigurerat webbklienten att konvertera AFP-dokument till annat format, t.ex. PDF, innan dokumenten skickas som bilagor kontrollerar du att konverteringen är korrekt konfigurerad.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Det gick inte att konvertera dokumentet till PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Verktyget som används till att omvandla dokument till PDF hanterar inte filtypen.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Stäng sidan och försök skicka dokumentet igen utan att konvertera det till PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Det gick inte att skapa e-postmeddelandet.",
		email_applet_MAPI_USER_ABORT_explanation: "Öppna e-postprogrammet och kontrollera att det fungerar på rätt sätt. Gör sedan ett nytt försök att skicka dokumentet från webbklienten. Be systemadministratören granska operativsystemets händelseloggar om problemet kvarstår.",
		email_applet_MAPI_USER_ABORT_userResponse: "Om du tänkte stänga e-postprogrammet behöver du inte göra något mer. Om du vill skicka e-post, loggar du in till e-postprogrammet och gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Det gick inte att skapa e-postmeddelandet.",
		email_applet_MAPI_FAILURE_explanation: "E-postklienten kanske inte är öppen eller så är du inte inloggad.",
		email_applet_MAPI_FAILURE_userResponse: "Öppna e-postprogrammet och kontrollera att det fungerar på rätt sätt. Gör sedan ett nytt försök att skicka dokumentet från webbklienten. Be systemadministratören granska operativsystemets händelseloggar om problemet kvarstår.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Det gick inte att skapa e-postmeddelandet.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Du är inte inloggad på e-postklienten. E-postklienten måste vara öppen och du måste vara inloggad för att kunna skicka ett meddelande från webbklienten.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Öppna e-postklienten och logga in. Gör sedan ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Det går inte att skapa e-post eftersom den temporära filen inte kan skapas på datorn.",
		email_applet_MAPI_DISK_FULL_explanation: "Den temporära katalogen på datorn kanske är full.",
		email_applet_MAPI_DISK_FULL_userResponse: "Se till att det finns tillräckligt med utrymme i den temporära katalogen. Gör sedan ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Det går inte att skapa e-postmeddelandet eftersom det inte finns tillräckligt med systemminne.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Du kanske har för många program öppna.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Stäng alla program som du inte använder och gör sedan ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI-åtkomst nekades.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Åtkomsten till MAPI (Messaging Application Programming Interface) kanske inte är aktiverad eller hanteras för ditt e-postprogram. MAPI är det meddelandeprotokoll som används till att aktivera kommunikation mellan webbklienten och ditt e-postprogram.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Kontakta systemadministratören.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Kontrollera att e-postprogrammet har MAPI-åtkomst och är rätt konfigurerat. Kontakta IBM Software Support om du problemet kvarstår.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Det går inte att skapa bilagan eller länken till objektet.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Du kanske har för många webbläsarsessioner öppna.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Stäng alla oanvända sessioner i webbläsaren. Gör sedan ett nytt försök att skicka dokumentet från webbklienten. Kontakta systemadministratören om problemet kvarstår.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Det går inte att skicka e-postmeddelandet.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Du kanske försöker skicka för många bilagor.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Välj färre filer. Gör sedan ett nytt försök att skicka dokumenten från webbklienten.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Det går inte att skicka e-postmeddelandet.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Du kanske skickar e-postmeddelandet till för många mottagare.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Skicka e-postmeddelandet till färre mottagare.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Det gick inte att skapa bilagan.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Vissa nödvändiga temporära filer kan ha tagits bort innan bilagan kunde skapas. Det felet kan uppstå om webbläsarens cache rensas innan e-postmeddelandet har skickats.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Det gick inte att skapa bilagan.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Vissa nödvändiga temporära filer kan ha tagits bort innan bilagan kunde skapas. Det felet kan uppstå om webbläsarens cache rensas innan e-postmeddelandet har skickats.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "E-postprogrammet kan inte skapa bilagan.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Det går inte att skicka e-postmeddelandet till angiven mottagare.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Mottagaren kanske inte finns i adressboken.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Kontrollera mottagarens namn och gör sedan ett nytt försök att skicka dokumentet.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Det går inte att skicka e-postmeddelandet till angiven mottagare.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-postadressen kan ha fel format.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Kontrollera att du ha angett en giltig e-postadress och gör sedan ett nytt försök att skicka dokumentet.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_NO_MESSAGES_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Det går inte att skicka e-postmeddelandet.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-postmeddelandet kan vara för långt.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Korta ner texten i e-postmeddelandet och gör sedan ett nytt försök att skicka e-postmeddelandet.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Det gick inte att skapa e-postmeddelandet.",
		email_applet_MAPI_INVALID_SESSION_explanation: "E-postklienten kan ha misslyckats att skapa e-postmeddelandet.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Start om e-postklienten och gör sedan ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-postmeddelandet är kanske inte korrekt utformat.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Det går inte att skicka e-postmeddelandet till angiven mottagare.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-postadressen kan ha fel format.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Kontrollera att du har angett en giltig e-postadress och skicka dokumentet igen.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E-postprogrammet kan inte utföra den begärda åtgärden.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E-postprogrammet returnerade ett oväntat fel.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Gör ett nytt försök att skicka dokumentet från webbklienten.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "En av egenskaperna har inte rätt antal värden.",
		error_property_cardinality_explanation: "Vissa egenskaper har minimi- och maximivärden.",
		error_property_cardinality_userResponse: "Använd bubbelhjälpen till att avgöra vilken egenskap som kräver ett minimiantal värden. Ange sedan minimiantalet värden och gör ett nytt försök.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Det krävs ett filnamn.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Ange ett filnamn och försök sedan igen.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Insticksprogrammet ${0} innehåller fel.",
		plugin_error_explanation: "Ett fel inträffade vid utvärdering av JavaScript för insticksprogrammet ${0}. Om du fortsätter att använda insticksprogrammet kan det inträffa fler fel.",
		plugin_error_userResponse: "Kontakta systemadministratören.",
		plugin_error_adminResponse: "Det är problem med insticksprogrammet som inte kan lösas av insticksprogramsleverantören. Du bör ta bort insticksprogrammet från webbklienten tills problemet med insticksprogrammet är löst.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Det går inte att öppna inmatningsmallen.",
		open_old_format_entry_template_error_explanation: "Inmatningsmallen använder ett gammalt format som inte hanteras i webbklienten.",
		open_old_format_entry_template_error_userResponse: "Be systemadministratören uppdatera inmatningsmallen.",
		open_old_format_entry_template_error_adminResponse: "Använd Application Engine eller Workplace XT Entry Template Designer om du vill spara en uppdaterad version av inmatningsmallen.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Det går inte att öppna inmatningsmallen.",
		open_custom_object_entry_template_error_explanation: "Webbklienten hanterar inte följande typ av inmatningsmall: Anpassade objektinmatningsmallar.",
		open_custom_object_entry_template_error_userResponse: "Öppna en annan inmatningsmall.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Det går inte att öppna e-formulärobjektet.",
		open_forms_object_error_explanation: "Webbklienten hanterar inte e-formulärobjekt av följande typer: formulärmall, formulärdata, dokumentprincip och arbetsflödesprincip.",
		open_forms_object_error_userResponse: "Öppna ett annat dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Du kan inte använda inmatningsmallen ${0}.",
		entry_template_folder_restricted_error_explanation: "Inmatningsmallen lägger till objekt i mappen ${1} och du har inte behörighet att lägga till objekt i den mappen.",
		entry_template_folder_restricted_error_userResponse: "Välj en annan inmatningsmall eller be systemadministratören ge dig rätt behörigheter för att lägga till objekt i mappen ${1}.",
		entry_template_folder_restricted_error_0: "inmatningsmallnamn",
		entry_template_folder_restricted_error_1: "mappnamn",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Det går inte att öppna inmatningsmallen.",
		open_records_entry_template_error_explanation: "Webbklienten hanterar inte följande inmatningsmalltyp: Deklarera som postinmatningsmallar.",
		open_records_entry_template_error_userResponse: "Öppna en annan inmatningsmall.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Det går inte att öppna arbetsflödet.",
		open_workflow_error_explanation: "Webbklienten har inga funktioner för att öppna arbetsflöden.",
		open_workflow_error_userResponse: "Öppna ett annat dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Det går inte att öppna dokumentet.",
		viewer_unable_to_view_error_explanation: "Ingen visningsprogram är konfigurerat för dokument av den här typen eller så är visningsprogrammet inte kompatibelt med systemet.",
		viewer_unable_to_view_error_userResponse: "Be systemadministratören konfigurera ett visningsprogram för dokument av den här typen och kontrollera att det fungerar med användarens system.",
		viewer_unable_to_view_error_adminResponse: "Konfigurera ett visningsprogram för dokument av den här typen med hjälp av administrationsverktyget.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Det går inte att öppna sökningen.",
		search_cannot_open_error_explanation: "Sökfunktionen är inte konfigurerad för det här skrivbordet.",
		search_cannot_open_error_userResponse: "Be systemadministratören att få tillgång till ett skrivbord som innehåller sökfunktionen eller att uppdatera det här skrivbordet så att det innehåller sökfunktionen.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokumentet lästes inte in.",
		viewer_document_load_failed_error_explanation: "Det gick inte att öppna dokumentet i Daeja ViewONE Professional-visningsprogrammet.",
		viewer_document_load_failed_error_userResponse: "Mer information finns i det felmeddelande som visas i visningsprogrammet.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokumentet kan inte visas.",
		viewer_session_expired_explanation: "Det går inte att hämta dokumentinnehållet.",
		viewer_session_expired_userResponse: "Försök logga in igen. Om problemet kvarstår kan det bero på att programservern inte är igång. Be systemadministratören kontrollera loggarna för IBM Content Navigator eller starta om servern.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokumentet kan inte visas.",
		ajaxViewer_getPage_failed_explanation: "AJAX-visningsprogram tog emot ett felsvar under hämtning av sidinnehållet. Programservern kanske inte är igång.",
		ajaxViewer_getPage_failed_userResponse: "Stäng webbläsaren och logga in igen. Be systemadministratören granska webbprogramserverns loggfiler eller starta om servern om problemet kvarstår.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "JRE (Java Runtime Environment) hittades inte på datorn.",
		viewer_java_plugin_not_found_explanation: "Insticksprogrammet hittades inte eller så är inte rätt version av JRE installerad.",
		viewer_java_plugin_not_found_userResponse: "Kontrollera om JRE är installerat. Du kan t.ex. ange följande kommando i en kommandoprompt: Java -version. Om JRE inte är installerat, eller om insticksprogrammet är på fel versionsnivå, installerar du rätt version av JRE. I <i>Hardware and Software prerequisites for IBM Content Navigator-dokument</i> på webbplatsen för IBM Software Support finns en lista över hanterade versioner.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Det går inte att visa dokumentet i webbläsaren.",
		viewer_pdf_plugin_not_found_explanation: "Insticksprogrammet som används till att visa PDF-dokument i webbläsaren hittades inte.",
		viewer_pdf_plugin_not_found_userResponse: "PDF-filen hämtas till din dator i stället för att visas i visningsprogramsfönstret.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Följande objekt kan inte läggas till i behållaren: ${0}.",
		add_document_single_item_error_explanation: "Det här felet kan inträffa av följande orsaker:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Du försöker lägga till ett dokument som har flyttats eller tagits bort.</li>" + "<li>Du försöker lägga till ett dokument vars namn har ändrats.</li>" + "<li>Du försöker lägga till ett dokument som är skadat.</li>" + "<li>Du försöker lägga till ett dokument som är öppet i ett annat program.</li>" + "<li>Du försöker lägga till en mapp i behållaren.</li>" + "<li>Du har inte åtkomstbehörighet till dokumentet i operativsystemet.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Vidta lämplig åtgärd för att lösa problemet:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Om dokumentet flyttats eller om namnet ändrats kan du söka efter det i filsystemet och sedan försöka lägga till det igen.</li>" + "<li>Om dokumentet är öppet i ett annat program stänger du det och gör sedan ett nytt försök att lägga till dokumentet.</li>" + "</ul>" + "<br>Du kan inte lägga till mappar i behållaren.",
		add_document_single_item_error_0: "misslyckat_objekt",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Följande ${0} objekt kan inte läggas till i behållaren: ${1}.",
		add_document_multiple_items_error_explanation: "Ett problem med ett av objekten gör att inga dokument kan läggas till i behållaren. Det här felet kan inträffa av följande orsaker:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Du försöker lägga till ett dokument som har flyttats eller tagits bort.</li>" + "<li>Du försöker lägga till ett dokument vars namn har ändrats.</li>" + "<li>Du försöker lägga till ett dokument som är skadat.</li>" + "<li>Du försöker lägga till ett dokument som är öppet i ett annat program.</li>" + "<li>Du försöker lägga till en mapp i behållaren.</li>" + "<li>Du har inte åtkomstbehörighet till dokumentet i operativsystemet.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Vidta lämplig åtgärd för att lösa problemet:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Om ett dokument flyttats eller om namnet ändrats kan du söka efter det i filsystemet och sedan försöka lägga till objekten igen.</li>" + "<li>Om ett dokument är öppet i ett annat program stänger du det och gör sedan ett nytt försök att lägga till objekten.</li>" + "<li>Om ett dokument har tagits bort eller är skadat avmarkerar du objektet och försöker sedan lägga till de övriga objekten igen.</li>" + "</ul>" + "<br>Du kan inte lägga till mappar i behållaren.",
		add_document_multiple_items_error_0: "antal_objekt",
		add_document_multiple_items_error_1: "misslyckade_objekt",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Det går inte att dra objekt från den här platsen.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Det går inte att öppna e-formulärobjektet.",
		open_forms_work_object_error_explanation: "Webbklienten hanterar inte följande typ av e-formulärobjekt: arbetsflödesprincip.",
		open_forms_work_object_error_userResponse: "Öppna ett annat dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Det går inte att öppna dokumentet.",
		viewer_privilege_to_view_error_explanation: "Du har inte behörighet att visa dokumentet.",
		viewer_privilege_to_view_error_userResponse: "Be dokumentets ägare eller systemadministratören om behörighet att visa dokumentet.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Det går inte att lägga till objekten i behållaren.",
		add_document_too_many_items_error_explanation: "Du kan lägga till ${0} objekt åt gången. Du försöker lägga till ${1} objekt.",
		add_document_too_many_items_error_userResponse: "Ta bort några av objekten från listan och gör sedan ett nytt försök att lägga till objekten. Du kan också be administratören öka det maximala antalet dokument som du kan lägga till åt gången på det här skrivbordet.",
		add_document_too_many_items_error_0: "maximalt_antal_objekt",
		add_document_too_many_items_error_1: "antal_objekt",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Det går inte att ansluta till webbklienten med följande URL-adress: ${0}",
		http_ltpa_expired_explanation: "LTPA-nyckeln för webbläsarsessionen har gått ut.",
		http_ltpa_expired_userResponse: "Starta om webbläsaren och försök logga in igen. Rapportera följande fel till systemadministratören om problemet kvarstår: ${1}.",
		http_ltpa_expired_0: "webbklient-URL",
		http_ltpa_expired_1: "HTTP-fel",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Det går inte att lägga till dokumentet i mappen ${0}.",
		dnd_no_privilege_error_explanation: "Mappbehörigheterna förhindrar att dokument läggs till i mappen.",
		dnd_no_privilege_error_userResponse: "Lägg till dokumentet i en annan mapp.",
		dnd_no_privilege_error_0: "objektnamn",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Objekten kan inte ändras.",
		modify_document_too_many_items_error_explanation: "Du kan ändra ${0} objekt åt gången. Du försöker ändra ${1} objekt.",
		modify_document_too_many_items_error_userResponse: "Välj färre objekt och gör ett nytt försök att ändra objekten. Du kan också be administratören öka det maximala antalet objekt som du kan ändra åt gången från det här skrivbordet.",
		modify_document_too_many_items_error_0: "maximalt_antal_objekt",
		modify_document_too_many_items_error_1: "antal_objekt",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Du kan inte använda klassen ${0}.",
		add_document_multiple_unique_values_error_explanation: "Klassen ${0} innehåller en eller flera egenskaper som kräver ett unikt värde för varje dokument. När du lägger till flera dokument använder alla dokument samma värden.",
		add_document_multiple_unique_values_error_userResponse: "Välj en annan klass eller lägg till dokumenten separat.",
		add_document_multiple_unique_values_error_0: "klassvisningsnamn",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Du kan inte använda inmatningsmallen ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Inmatningsmallen ${0} kräver att du lägger till dokument till klassen ${1}. Klassen ${1} innehåller en eller flera egenskaper som kräver ett unikt värde för varje dokument. När du lägger till flera dokument använder alla dokument samma värden.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Välj en annan inmatningsmall eller lägg till dokumenten separat.",
		add_document_multiple_unique_values_entry_template_error_0: "inmatningsmallnamn",
		add_document_multiple_unique_values_entry_template_error_1: "klassvisningsnamn",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Du kan inte använda inmatningsmallen ${0}.",
		entry_template_class_restricted_error_explanation: "Inmatningsmallen lägger till objekt genom att använda klassen ${1} och du har inte behörighet att lägga till objekt med den klassen.",
		entry_template_class_restricted_error_userResponse: "Välj en annan inmatningsmall eller be systemadministratören om behörighet att lägga till objekt med klassen ${1}.",
		entry_template_class_restricted_error_0: "inmatningsmallnamn",
		entry_template_class_restricted_error_1: "klassvisningsnamn",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Det gick inte att omtilldela arbetsobjektet till en annan användare.",
		process_reassign_error_explanation: "Åtgärden är inte tillåten i arbetsflödet.",
		process_reassign_error_userResponse: "Du kan öppna arbetsobjektet eller slutföra det aktuella steget i arbetsobjektet. Om du behöver mer information om frågan ber du den som äger objektet att verifiera att arbetsobjektet omtilldelats.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Det går inte att läsa in följande anpassade åtgärd: ${0}.",
		customaction_loadurl_error_explanation: "Den anpassade åtgärden finns inte på en tillgänglig plats. Aktuell URL till den anpassade åtgärden: ${1}.",
		customaction_loadurl_error_userResponse: "Be administratören flytta den anpassade åtgärden till en plats som är tillgänglig.",
		customaction_loadurl_error_adminResponse: "JSP-filen som definierar den anpassade åtgärden måste tillhandahållas som en del av eClient-webbprogrammet eller IBM Content Navigator-webbprogrammet.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Följande funktion hittades inte: ${0}.",
		feature_invalid_explanation: "Problemet kan inträffa om funktionen inte är tillgänglig på det angivna skrivbordet eller om funktionsnamnet är korrekt stavat.",
		feature_invalid_userResponse: "När du klickar på OK dirigeras du om till standardfunktionen för skrivbordet. Kontakta systemadministratören för att rapportera problemet.",
		feature_invalid_adminResponse: "Om funktionen ska tillgänglig på skrivbordet uppdaterar du skrivbordskonfigurationen i administrationsverktyget. Om funktionen inte ska ingå i skrivbordet eller är felstavat, kontakta du programutvecklaren som skapat URL-adressen för funktionen och ber att få URL-adressen uppdaterad.",
		feature_invalid_number: 2066,
		feature_invalid_0: "funktionsnamn",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Det går inte att öppna sökningen ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "Du måste vara i ett grupprum när du ska öppna sökningen.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Välj en annan sökning.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Det går inte att importera följande fil: ${0}.",
		wrong_import_file_type_error_explanation: "Filen måste vara en egenskapsfil.",
		wrong_import_file_type_error_userResponse: "Välj den egenskapsfil som du exporterat från administrationsverktyget.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Det gick inte att hitta behållaren ${0} på skrivbordet ${1}.",
		browse_repository_not_found_error_explanation: "Behållaren måste finnas på skrivbordet och vara aktiverad för bläddringsfunktionen när den anges i en URL-parameter.",
		browse_repository_not_found_error_userResponse: "Se till att behållar-IDt i URL-adressen är korrekt, att behållaren har lagts till på skrivbordet ${1} och att bläddringsfunktionen har aktiverats för behållaren.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Behållaren ${0} är inte aktiverad för bläddringsfunktionen på skrivbordet ${1}.",
		browse_repository_not_enabled_error_explanation: "Behållaren måste vara aktiverad för bläddringsfunktionen när den anges i en URL-parameter.",
		browse_repository_not_enabled_error_userResponse: "Aktivera bläddringsfunktionen för behållaren ${0} på skrivbordet ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Det går inte att slutföra sökningen eftersom länken inkluderar ogiltiga villkor.",
		invalid_xt_stored_search_criteria_error_explanation: "Följande värde är inte giltigt: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Be systemadministratören uppdatera länken.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Ändra lämpligt namn-värde-par i URL-adressen. Om du inte vet vilka värden som är giltiga för egenskapen öppnar du den lagrade sökningen i FileNet Workplace XT Search Designer.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Det går inte att öppna flerbehållarsökningen.",
		unified_search_invalid_fixed_value_error_explanation: "Flerbehållarsökningen inkluderar ogiltiga villkor. Problemet kan uppstå om ett villkor har ett fast värde som inte är kompatibelt med andra egenskaper i en mappning. Exempel: Om det fasta värdet är en sträng men de andra egenskaperna i mappningen är heltal.",
		unified_search_invalid_fixed_value_error_userResponse: "Om du har behörighet att ändra sökningen tar du bort de ogiltiga villkoren och spara sökningen igen. Be den som äger sökningen eller systemadministratören spara sökningen igen, om du inte har behörighet.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Det går inte att slutföra begäran.",
		launch_action_invalid_json_error_explanation: "Data som skickades till webbklienten är inte giltiga.",
		launch_action_invalid_json_error_userResponse: "Tala om för systemadministratören vilket program du använde när problemet uppstod.",
		launch_action_invalid_json_error_adminResponse: "Klientprogrammet skickade inte något giltigt JSON-objekt till webbklienten. Kontakta IBM Software Support för ytterligare hjälp.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Det går inte att slutföra begäran.",
		launch_action_not_found_error_explanation: "Åtgärden ${0} har inte konfigurerats för några menyer på skrivbordet ${1}.",
		launch_action_not_found_error_userResponse: "Be systemadministratören konfigurera skrivbordet ${1} med en meny som innehåller åtgärden ${0} eller att tilldela dig ett skrivbord som innehåller åtgärden ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Det går inte att slutföra begäran.",
		launch_action_repository_not_found_error_explanation: "Behållaren ${0} är inte associerad till skrivbordet ${1}.",
		launch_action_repository_not_found_error_userResponse: "Be systemadministratören associera behållaren ${0} till skrivbordet ${1} eller tilldela dig ett skrivbord som innehåller behållaren ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Det går inte att öppna grupprummet.",
		teamspace_cannot_open_error_explanation: "Grupprumsfunktionen är inte konfigurerad för det här skrivbordet.",
		teamspace_cannot_open_error_userResponse: "Be systemadministratören att få tillgång till ett skrivbord som innehåller grupprumsfunktionen eller att uppdatera det här skrivbordet så att det innehåller grupprumsfunktionen.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Fel vid incheckning av redigerat innehåll.",
		viewer_redaction_checkin_failed_explanation: "Visningsprogrammet tog emot ett felsvar vid incheckning av redigerat innehåll.",
		viewer_redaction_checkin_failed_userResponse: "Be systemadministratören granska programserverns loggfiler.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Det går inte att lägga till dokument i den här behållaren.",
		add_document_odserver_odwek_version_od_error_explanation: "Den aktuella versionen av IBM Content Manager OnDemand-servern eller ODWEK har inte den miniminivå som krävs för att lägga till dokument i en Content Manager OnDemand-behållare.",
		add_document_odserver_odwek_version_od_error_userResponse: "Be administratören kontrollera vilka versioner av Content Manager OnDemand Server och ODWEK som krävs för tillägg av dokument i Content Manager OnDemand-behållare.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Det går inte att lägga till objekten i behållaren.",
		add_document_too_many_items_od_error_explanation: "Det går endast att lägga till ett objekt i taget i IBM Content Manager OnDemand-behållare.",
		add_document_too_many_items_od_error_userResponse: "Ta bort några av objekten i listan och försök lägga till dem igen vid ett senare tillfälle.",
		add_document_too_many_items_od_error_0: "maximalt_antal_objekt",
		add_document_too_many_items_od_error_1: "antal_objekt",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Objektet kan inte läggas till i behållaren.",
		add_document_filesize_empty_od_error_explanation: "Det går inte att lägga till tomma filer i en IBM Content Manager OnDemand-behållare.",
		add_document_filesize_empty_od_error_userResponse: "Lägg till innehåll i filen och försök igen eller lägg till en annan fil.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Det går inte att öppna flerbehållarsökningen.",
		unified_search_repository_not_found_error_explanation: "Flerbehållarsökningen inkluderar en eller flera ogiltiga behållare. Problemet kan uppstå när behållare som ingår i sökningen har tagits bort från programmet eller från aktuellt skrivbord.",
		unified_search_repository_not_found_error_userResponse: "Spara sökningen igen om du har behörighet att ändra den. När du sparar sökningen tas ogiltiga lager bort. Be den som äger sökningen eller systemadministratören spara sökningen igen, om du inte har behörighet.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Det går inte att skapa ett nytt dokument.",
		edit_document_using_office_online_error: "Det går inte att öppna dokumentet.",
		edit_document_using_office_online_error_explanation: "URL för Microsoft Office Online Server är inte konfigurerad.",
		edit_document_using_office_online_error_userResponse: "Innan du an använda Office Online måste administratören aktivera Office Online Server för en behållare och ange URL-adressen till Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokumentet kan inte öppnas i Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Be administratören uppdatera MS Office Online Server Integration.<br><br> Om användaren behöver åtkomst till det här dokumentet från Microsoft Office Online, går du till sidan Redigeringsintegrering för behållaren och uppdaterar MS Office Online Server Integration så att klassen inkluderas i listan över klasser som ska ändras för Office Online-support. ",		
		browser_not_support_this_viewer: "Det konfigurerade visningsprogrammet är inte kompatibelt med din webbläsare.",
		browser_not_support_this_viewer_explanation: "${0} stöds inte av webbläsaren.",
		browser_not_support_this_viewer_userResponse: "Öppna dokumentet i ett annat visningsprogram. I <i>Hardware and Software prerequisites for IBM Content Navigator-dokument</i> på webbplatsen för IBM Software Support finns en lista över hanterade webbläsare.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Arbetsflödesinformation",
		process_information_info_text: "Det valda objektet körs för närvarande i följande arbetsflöden.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "lika med",
		operator_NOTEQUAL: "inte lika med",
		operator_LIKE: "liknar",
		operator_STARTSWITH: "börjar med",
		operator_ENDSWITH: "slutar med",
		operator_NOTLIKE: "liknar inte",
		operator_NULL: "är tom",
		operator_NOTNULL: "är inte tom",
		operator_LESS: "mindre än",
		operator_LESSOREQUAL: "mindre än eller lika med",
		operator_GREATER: "större än",
		operator_GREATEROREQUAL: "större än eller lika med",
		operator_BETWEEN: "mellan",
		operator_NOTBETWEEN: "inte mellan",
		operator_IN: "inkludera alla",
		operator_INANY: "inkludera någon",
		operator_NOTIN: "exkludera alla",
		operator_CONTAINS: "innehåller",

		/* SearchForm widget */
		search_button_tooltip: "Sök efter dokument som matchar sökvillkoren.",
		reset_button_tooltip: "Återställer sökningen till de standardvärden som administratören har bestämt.",
		clear_button_tooltip: "Tar bort alla värden som du har angett för sökningen.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Välj sökning",
		append_to_search: "Lägg till i sökningen",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Ny sökning",
		new_unified_search: "Ny flerbehållarsökning",
		searh_name_contains: "Söknamn innehåller",
		keep_search_criteria_expanded: "Behåll sökvillkoren öppna",
		showing_results: "Visar resultat för:",
		open_in_new_window: "Öppna i nytt fönster",
		open_in_new_tab: "Öppna på en ny flik",
		close_tab: "Stäng flik",
		add_repository: "Lägg till behållare",
		edit_repository: "Ändra behållare",
		remove_repository: "Ta bort",
		search_scope: "Sökomfång",
		search_class_template: "Klass",
		object_type_version: "Objekttyp och version",
		not_applicable: "Ej tillämplig",
		unified_search_including_subfolders: " (inklusive undermappar)",
		unified_search_dialog_intro_text: "Välj behållaren och sökningen eller de klasser som ska ingå i sökningen.",
		unified_search_class_or_template: "Klass eller mall",

		select_object_fieldset_legend: "Hur vill du söka efter dokument som ska bifogas?",
		select_object_create_new_search: "Ny sökning",
		select_object_search_template: "Befintlig sökning",

		search_criteria: "Sökvillkor:",
		search_criteria_no_colon: "Sökvillkor",
		search_in_multiple: "Sök i (${0}):",
		search_location_including_subfolders: "${0} inklusive undermappar",
		search_class: "Klass:",
		search_class_multiple: "Klass (${0}):",
		search_class_including_subclasses: "${0} inklusive underklasser",
		search_class_all_pseudo: "Alla",
		search_results: "Sökresultat",
		select_operator: "Välj en operator",
		ending_value: "Sista värdet för egenskapen ${0} är:",
		search_options: "Sökalternativ:",
		search_version: "Version:",
		search_released_version: "Utgiven version",
		search_current_version: "Aktuell version",
		search_all_versions: "Alla versioner",
		search_file_type_filter: "Filtypsfilter:",
		search_one_file_type: "1 filtyp",
		search_many_file_types: "${0} filtyper",
		search_action_filter: "Åtgärdsfilter:",
		search_action_filter_hover_help: "Begränsa resultaten så att de bara innehåller filer som användare har vidtagit en åtgärd för.<br/>Du kan till exempel söka efter enbart dokument som du lade till den 20 september 2012.",
		search_action_filter_enabled: "Åtgärdsfiltret är aktiverat",
		search_enable: "Aktivera",
		search_disable: "Avaktivera",
		search_by: "av",
		search_added: "Lades till",
		search_modified: "Ändrades",
		search_checked_out: "Checkades ut",
		search_date_operator_on: "den",
		search_date_operator_not_on: "inte den",
		search_date_operator_before: "före",
		search_date_operator_after: "efter",
		search_version_hover_help_p8: "En utgiven version är redan tillgänglig för alla användare. Ett dokument som är en aktuell version innebär att en eller flera användare ändrar dokumentet.",
		search_version_hover_help_cm: "En aktuell version är den senaste versionen av objektet.",
		search_using: "Sök efter objekt som matchar:",
		search_property_and_text_criteria: "Både egenskapsvärden och textvillkor",
		search_property_or_text_criteria: "Antingen egenskapsvärden eller textvillkor",
		search_property_and_text: "Både egenskap och textvillkor",
		search_property_or_text: "Antingen egenskap eller textvillkor",
		search_property_options: "Egenskapsalternativ:",
		search_property_option_match_all: "Alla egenskaperna",
		search_property_option_match_any: "Någon av egenskaperna",
		search_property_option_match_all_summary: "Matcha alla",
		search_property_option_match_any_summary: "Matcha någon",
		search_total_count_type_total: "Totalt",
		search_total_count_type_atleast: "Minst",
		search_content_size_filter: "Innehållsstorleksfiler:",
		search_content_size_filter_any: "Alla innehållsstorlekar",

		/* Search work options */
		search_work_filter: "Arbetsobjektfilter:",
		search_work_filter_hover_help: "Begränsa resultatet till objekt som finns i ett arbetsflöde. Exempel: Du kan begränsa sökresultatet så att endast aktiva arbetsobjekt visas.<br /><br />Det här alternativet gäller inte om du vill se alla versioner av objektet som returneras av sökningen.",
		search_work_filter_enabled: "Arbetsobjektfilter är aktiverat",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Steg:",
		search_work_filter_owner: "Ägare:",
		search_work_filter_status_all: "Alla objekt",
		search_work_filter_status_active: "Aktiva objekt",
		search_work_filter_status_suspended: "Senarelagda objekt",
		search_work_filter_process_all: "Alla arbetsflöden",
		search_work_filter_step_all: "Alla steg",
		search_work_filter_owner_all: "Alla användare",
		search_work_filter_step_error: "Stegnamnet finns inte.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Sökningen kan inte utföras utan ytterligare information. Ange ett värde för minst ett villkor.",
		search_insufficient_input_box: "Sökningen kan inte utföras utan ytterligare information. Ange textsökningsvillor eller välj en metadatamall.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Sökningen kan inte konfigureras att köra om den öppnas utan ytterligare information. Ange ett värde för minst ett villkor.",
		search_member_required: "Om du vill dela sökningen med vissa användare och grupper väljer du minst en användare eller grupp att dela sökningen med.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Vill du stänga utan att spara ändringarna?",
		search_prompt_close_all_without_save: "Vill du stänga alla flikar utan att spara ändringarna?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Någon av följande typer av sökvillkor är ogiltiga för behållaren: ${0}. Du måste ta bort de ogiltiga villkoren annars kan sökningen inte köras i webbklienten. Om du sparar sökningen tas ogiltiga villkor bort. Stäng sökningen om du inte vill ändra den.",
		search_invalid_repository: "En eller flera behållare.",
		search_invalid_class: "En eller flera klasser.",
		search_invalid_folder: "En eller flera mappar.",
		search_invalid_file_type: "En eller flera filtyper.",
		search_invalid_property: "En eller flera egenskaper.",
		search_invalid_text_search: "Textsökningsvillkor",
		search_invalid_work: "Arbetsobjektfiltervillkor",

		search_operator_pulldown_missing: "Det krävs en operator. Välj en operator från listrutan. Om du inte ser några operatorer ber du systemadministratören att kontrollera fliken <b>Sökning</b> i administrationsverktyget och se om alla operatorer är dolda. Om det är en flerbehållarsökning kanske listrutan inte innehåller några operatorer om egenskaperna som är mappade till varandra inte har gemensamma operatorer.",

		/*SearchBuilder */
		open_search_builder: "Ny sökning",
		document_type: "Klass",
		show_all_properties: "Visa alla egenskaper",
		text_search_label: "Sök efter objekt med följande söktermer:",
		text_search_place_holder: "Använd en kombination av söktermer och operatorer: * ? eller \"exakt matchningsfras\"",
		text_search_place_holder_box: "Använd en kombination av söktermer och operatorer: AND, OR, NOT och \"exakt matchningsfras\"",
		text_search_place_holder_cascade_proximity: "Använd en kombination av söktermer och operatorer: * eller ?",
		text_search_place_holder_common: "Använd en kombination av söktermer och \"exakt matchningsfras\"",
		text_search_hover_help_p8: "Använd asterisk (*) eller frågetecken (?) som jokertecken. Använd citattecken (\"\") för exakta matchningar.",
		text_search_hover_help_p8_only_crs: "Använd asterisk (*) eller frågetecken (?) som jokertecken. Använd citattecken (\"\") för exakta matchningar. När du anger flera söktermer returnerar en flerbehållarsökning objekt som innehåller någon av söktermerna.",
		text_search_hover_help_cm: "Använd asterisk (*) eller frågetecken (?) som jokertecken. Använd citattecken (\"\") för exakta matchningar. Använd minustecken (-) före termer som ska uteslutas och plustecken (+) före termer som ska inkluderas.",
		text_search_hover_help_box: "Använd AND mellan termer för att matcha alla söktermer. Använd OR mellan termer för att matcha någon av termerna. Använd citattecken (\"\") för exakta matchningar. Ange NOT framför en term för att utesluta den.",
		text_search_hover_help_common: "Använd citattecken (\"\") för exakta matchningar. När du anger flera söktermer returnerar en flerbehållarsökning objekt som innehåller alla söktermer.",
		text_search_options: "Textalternativ:",
		text_search_options_hover_help: "Välj Avancerade operatorer om du använder andra operatorer än jokertecken.",
		text_search_option_any: "Någon av termerna",
		text_search_option_all: "Alla termer",
		text_search_option_proximity: "Inom en ordnärhet av:",
		text_search_option_none: "Avancerade operatorer",
		text_search_option_authoring: "Textsökning är:",
		text_search_option_authoring_hover_help: "Välj ett alternativ som avgör hur du vill göra textsökningsvillkor tillgängliga för användare. Dölj alternativet om du inte vill inkludera några textsökningsvillkor i sökningen. Du kan även tillåta att textsökningsvillkoren kan redigeras, krävas av användare eller göras skrivskyddade för användare.",
		text_search_option_hide: "Dölj villkor",
		text_search_option_hide_hover_help: "Välj det här alternativet om du inte vill ta med några textsökningsvillkor i sökningen eller tillåta andra användare att ange textsökningsvillkor.",
		text_search_option_in: "I HTML/XML-koden ${0}",
		text_search_option_paragraph: "I samma stycke",
		text_search_option_sentence: "I samma mening",
		text_search_option_vql: "VQL-fråga",
		text_search_option_none_hover_help: "Använd minustecken (-) framför termer som ska uteslutas.",
		text_search_option_cascade_proximity_hover_help: "Begränsar sökresultaten till termer som står inom ett ordintervall som inte innehåller exakta fraser.",

		box_search_metadata: "Metadata:",
		box_search_select_template: "Välj mall",
		box_search_no_templates: "Inga mallar är tillgängliga",
		box_text_search_options_search_within: "Sökomfång:",
		box_text_search_options_search_within_everything: "Allt",
		box_text_search_options_search_within_file_content: "Dokumentinnehåll",
		box_text_search_options_search_within_tags: "Etiketter",
		box_text_search_options_limit_to: "Sök endast efter:",

		add_property: "Lägg till egenskap",
		edit_template: "Ändra sökning",
		save_search: "Spara sökning",
		search_template_name: "Namn:",
		search_template_desc: "Beskrivning:",
		auto_run: "Kör sökningen när den öppnas",
		show_in_tree: "Visa sökningen i mappstrukturen",
		show_in_tree_hover_help: "Om en sökning sparas i en mapp visas den endast i innehållslistan som standard. Om du väljer det här alternativet visas sökningen även i mappträdet i bläddringsvyn. Sökningen visas dock bara i mappträdet om du har sparat den i en mapp.",
		share_search_with: "Dela sökning med:",
		remove_member: "Ta bort ${0}",
		ok_button_label: "OK",
		save_template: "Spara",
		save_template_title: "Om du ofta behöver söka efter vissa objekt kan du spara sökvillkoren.",
		remove_criterion: "Ta bort",
		apply_button_label: "Tillämpa",
		empty_search_results_pane: "Kör en sökning för att se resultaten.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Hela behållaren",

		repository_already_selected: "Det går inte att lägga till behållaren ${0} till flerbehållarsökningen eftersom den redan ingår i sökningen. <br/> En behållare kan bara ingå i flerbehållarsökningen en gång. <br/>Välj en annan behållare.",

		repository_limit_reached: "Det går inte att lägga till behållaren ${0} i flerbehållarsökningen. En sökning får innehålla högst ${1} behållare.",

		nomore_criteria_toappend: "Alla mappade egenskaper ingår redan i sökvillkoren. Inga egenskaper har lagts till i sökvillkoren.",
		nomore_criteria_toappend_regular: "Alla egenskaper ingår redan i sökvillkoren. Inga egenskaper har lagts till i sökvillkoren.",

		/* OD Save Search dialog */
		reload_label: "Läs in på nytt",
		od_save_search_help_text: "Skriv ett namn för sökningen eller välj en befintlig sökning som du vill ersätta",
		public_access_label: "Tillåt andra att använda den här sökningen",
		od_delete_search_help_text: "Välj en eller flera sökningar att ta bort",
		delete_save_searches: "Ta bort sparade sökningar",

		/* Unified Search */
		unified_search_enable_text_search: "Inkludera textsökningsvillkor",
		unified_search_text_search_enabled: "Textsökning inkluderad",
		unified_search_mapping: "Mappning",
		unified_search_new_mapping: "Ny mappning",
		unified_search_mapping_name: "Mappningsnamn",
		unified_search_mapping_dialog_instructions: "Välj de egenskaper som ska mappas. Vissa egenskaper kan mappas till egenskaper av en annan datatyp. Du kan exempelvis mappa en sträng till ett heltal. När du mappar en egenskap till en annan egenskap behandlas de som en enda egenskap i flerbehållarsökningen.",
		unified_search_filter_available_properties: "Filtrera tillgängliga egenskaper",
		unified_search_available_properties: "Tillgängliga egenskaper",
		unified_search_mapped_properties: "Mappade egenskaper",
		unified_search_single_values: "enkla värden",
		unified_search_multiple_values: "flervärden",
		unified_search_add_mapping: "Lägg till mappning",
		unified_search_warn_remove_repository: "Den valda behållaren används i sökvillkor.\nOm du tar bort behållaren tas alla mappningar och sökvillkor som ingår i behållaren bort.\n\nVill du ta bort behållaren?",
		unified_search_warn_update_repository_mappings: "Om egenskapsvalet för behållaren ändras påverkas sökvillkoren.\n\nSökvillkoren inkluderar en eller fler mappningar som inkluderar en eller fler egenskaper du tar bort. Alla mappningar som inkluderar egenskaper du tar bort måste tas bort. Alla sökvillkor som inkluderar mappningarna måste tas bort om det ska gå att köra sökningen.\n\nVill du uppdatera behållaralternativen och ta bort mappningarna och sökvillkoren?",
		unified_search_warn_update_repository_mappings_reset: "Om du inkluderar textsökningsvillkoret för den här behållaren påverkar det villkoren för flerbehållarsökning.\n\nAlla egenskapssökkriterier som inkluderar en mappning med egenskaper för den här behållaren måste tas bort om sökningen ska kunna utföras.\n\nVill du uppdatera alternativen för behållaren och ta bort sökvillkoren?",
		unified_search_warn_update_repository_text_criteria: "Om textsökningsvillkoren för behållaren tas bort påverkas sökvillkoren för flerbehållarsökning.\n\nTextsökningsvillkoren måste tas bort om det ska gå att söka.\n\nVill du uppdatera behållaralternativen och ta bort textsökningsvillkoren?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Om textsökningsvillkoren tas bort och egenskapsvalet för behållaren ändras påverkas sökvillkoren för flerbehållarsökning.\n\nTextsökningsvillkoren måste tas bort om det ska gå att söka. Egenskapssökningsvillkoren inkluderar en eller fler mappningar som inkluderar en eller fler egenskaper du tar bort. Alla mappningar som inkluderar egenskaper du tar bort måste tas bort. Alla egenskapssökningsvillkor som inkluderar mappningarna måste tas bort om det ska gå att köra sökningen.\n\nVill du uppdatera behållaralternativen och ta bort textsökningsvillkoren, mappningarna och egenskapssökningsvillkoren?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Om du exkluderar textsökningsvillkoret för den här behållaren påverkar det villkoren för flerbehållarsökning.\n\nAlla egenskapssökkriterier som inkluderar en mappning med egenskaper för den här behållaren måste tas bort om sökningen ska kunna utföras. Textsökningsvillkoren kan ha tagits bort från flerbehållarsökningsvillkoren för att det ska gå att utföra sökningen. \n\nVill du uppdatera alternativen för behållaren och ta bort sökvillkoren?",
		unified_search_warn_remove_mapping: "Om du tar bort den här mappningen påverkar det sökvillkoren.\n\nSökvillkoren som använder mappningen måste tas bort som det ska gå att söka.\n\nVill du uppdatera mappningen och ta bort sökvillkoren?",
		unified_search_warn_update_mapping: "Om du ändrar den här mappningen påverkar det sökvillkoren.\n\nSökvillkoren som använder mappningen måste rensas så att sökningen inte inkluderar ogiltiga operatorer eller ogiltiga värden.\n\nVill du uppdatera mappningen och rensa sökvillkoren?",
		unified_search_warn_update_mapping_not_searchable: "Om mappningen ändras påverkas sökvillkoren.\n\nNär de mappade egenskaperna endast visas kan du inte använda mappningen i sökvillkoret. Sökvillkor som använder mappningen måste tas bort om det ska gå att söka.\n\nVill du uppdatera mappningen och ta bort sökvillkoren?",
		unified_search_warn_update_mapping_box_searchable: "Om mappningen ändras påverkas sökvillkoren.\n\nSökvillkoren inkluderar redan mappningen fler än en gång och om du lägger till egenskapen ${0} från behållaren ${1} inkluderar sökvillkoren egenskapen ${0} för många gånger. Sökvillkor som använder mappningen måste tas bort om det ska gå att söka.\n\nVill du uppdatera mappningen och ta bort sökvillkoren?",
		unified_search_details: "Detaljer för flerbehållarsökning",
		unified_search_fixed_value_property: "Egenskap med fast värde",
		unified_search_required_property: "Nödvändig egenskap",
		unified_search_display_only_property: "Endast visning",
		unified_search_missing_required_properities: "Sökningen kan inte sparas eller köras.<br/>Följande egenskaper är nödvändiga:${0}Du måste ta med egenskaperna i en mappning och lägga till dem med värden i sökvillkoren.",
		unified_search_property_repostory: "${0} (Behållare: ${1})",
		unified_search_builder_no_mappings: "Det går inte att köra sökningen.<br/>Du måste skapa en egenskapsmappning och inkludera den i <b>Resultatvisning</b> så att resultatet visas av sökningen.",
		unified_search_builder_insufficient_criteria_to_run: "Det går inte att köra sökningen.<br/>Sökvillkoren inkluderar inte textsökningsvillkor eller egenskapsvärden för följande behållare: ${0}. För varje behållare som ingår i sökningen måste du ange textsökningsvillkor eller skapa en egenskapsmappning, inkludera den i egenskapsvillkoren och ange ett egenskapsvärde.",
		unified_search_builder_insufficient_criteria_to_save: "Det går inte att spara sökningen.<br/>Sökningen inkluderar inte sökvillkor för följande behållare: ${0}. För varje behållare som ingår i sökningen måste du göra något av följande:<ol><li>Skapa en egenskapsmappning och inkludera den i egenskapsvillkoren.</li><li>Ändra behållaren så att den inkluderar textsökningsvillkoren samt skapa en egenskapsmappning och inkludera den i <b>Resultatvisning</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Det går inte att köra sökningen.<br/>Du måste ange minst ett egenskapsvärde för varje behållare som ingår i sökningen. Exempel: Du kan ange värden för följande egenskaper: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Det går inte att köra sökningen.<br/>Textsökningsvillkor krävs.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Det går inte att köra sökningen.<br/>Du måste ange minst ett egenskapsvärde för varje behållare som ingår i sökningen eller ange textsökningsvillkor. Exempel: Du kan ange värden för följande egenskaper: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Det går inte att köra sökningen.<br/>Textsökningsvillkor krävs. Du måste ange minst ett egenskapsvärde för varje behållare som ingår i sökningen eller ange textsökningsvillkor. Exempel: Du kan ange värden för följande egenskaper: ${0}",
		unified_search_invalid_criteria: "Sökningen innehåller ogiltiga villkor som förhindrar att sökningen körs.<br/>De ogiltiga villkoren har tagits bort. Du måste spara ändringarna av sökningen innan du kan köra sökningen igen. Stäng sökningen om du inte vill spara den.<br/><br/>Följande objekt har tagits bort eller ändrats:${0}",
		unified_search_invalid_fixed_values: "Sökningen kan inte sparas eller köras.<br/>Följande sökvillkor har fasta värden som inte är giltiga: ${0}. Lös problemet genom att göra något av följande:<ul><li>Ta bort sökvillkoren som innehåller ogiltiga värden.</li><li>Ändra mappningarna som innehåller IBM Content Manager OnDemand-egenskapen med det fasta värdet för att ta bort egenskapen.</li><li>Ändra mappningarna som innehåller IBM Content Manager OnDemand-egenskapen med det fasta värdet så att alla egenskaper blir kompatibla. Mer information om vilka egenskaper som kan mappas finns under länken Läs mer i inledningstexten längst upp i egenskapsmappningsfönstret.</li></ul>",
		unified_search_cannot_add_properties: "Det går inte att lägga till egenskaper i sökningen.<br/>Alla tillgängliga mappade egenskaper finns redan i sökvillkoren och varje egenskap kan bara läggas till en gång.",
		unified_search_mapping_not_viewable: "Box-mallsegenskaper kan inte visas i sökresultaten. Om du vill lägga till den här mappningen som en kolumn måste du mappa minst en egenskap som inte är en Box-mallegenskap. Du kan t.ex. välja en egenskap från en annan behållare.",

		unified_search_returned_more: "Minst en behållare överskred maximalt antal resultat.",
		unified_search_partial_failure: "Ett fel uppstod för minst en behållare.",
		unified_search_partial_failure_and_returned_more: "Fel för minst en behållare och minst en behållare överskred maximalt antal resultat.",
		unified_search_see_analysis: "Se resultatanalysen.",
		unified_search_analysis_intro_returned_more: "Begränsa antalet sökresultat för varje behållare som överskred maximalt antal resultat. Du kan köra en enskild behållarsökning för att returnera fler resultat än maximalt tillåtet värde för en flerbehållarsökning.",
		unified_search_analysis_intro_partial_failure: "Granska felinformationen som returnerades av behållarna. Korrigera felen och kör flerbehållarsökningen igen.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Försök lösa problemet och kör sökningen igen för varje behållare där felet inträffade.<br/><br/>Begränsa antalet sökresultat för varje behållare som överskred maximalt antal resultat. Du kan köra en enskild behållarsökning för att returnera fler resultat än maximalt tillåtet värde för en flerbehållarsökning.",
		unified_search_results_found: "Resultat hittades",
		unified_search_maximum_allowed: "Maximalt tillåtet",
		unified_search_maximum_exceeded: "Maximalt antal överskreds",

		unified_search_mapping_rule_box: "Det går inte att lägga till egenskapen till mappningen.<p>Egenskapen ${0} från behållaren ${1} finns redan i en annan mappning. Det går bara att inkludera en mappning per sökning för sökbara egenskaper från den här behållaren.<br/>Välj en annan egenskap att lägga till i mappningen.</p>",
		unified_search_mapping_rule_repository: "Det går inte att lägga till egenskapen i mappningen.<br/>Mappningen innehåller en egenskap från behållaren ${0}. En mappning kan bara innehålla en egenskap från en behållare.<br/>Välj en annan behållare att lägga till en egenskap från eller en ny mappning för den valda egenskapen.",
		unified_search_mapping_rule_data_type: "Det går inte att lägga till egenskapen i mappningen.<br/>En ${0}-egenskap kan inte mappas till ${1}-egenskap. Välj en annan egenskap att mappa eller skapa en ny mappning för vald egenskap.<br/>Mer information om vilka egenskaper som kan mappas finns under länken Läs mer i inledningstexten längst upp i fönstret.",
		unified_search_mapping_rule_cardinality: "Det går inte att lägga till egenskapen i mappningen.<br/>Alla egenskaper i mappningen måste vara enkla värden eller flervärden. Den valda egenskapen stöder ${0} och egenskaper i mappningsfunktionen ${1}.<br/>Välj en annan egenskap att lägga till i mappningen eller skapa en ny mappning för den valda egenskapen.",
		unified_search_mapping_rule_fixed_value: "Det går inte att lägga till egenskapen i mappningen.<br/>Mappningen inkluderar en egenskap med ett fast värde. En mappning kan bara innehålla en med ett fast värde.<br/>Välj en annan egenskap att lägga till i mappningen eller skapa en ny mappning för den valda egenskapen.",
		unified_search_mapping_rule_child_component: "Det går inte att lägga till egenskapen i mappningen.<br/>En egenskap med en underordnad komponent kan inte mappas till andra egenskaper. Om du vill kunna söka på egenskapen skapar du på ny mappningen för den valda egenskapen.",
		unified_search_mapping_rule_operator_intersection: "Det går inte att lägga till egenskapen i mappningen.<br/>Alla egenskaper i mappningen måste ha en eller operatorer gemensamma. Egenskapen ${0} har inte några operatorer gemensamt i mappningen.<br/>Välj en annan egenskap. Om du måste ta med den valda egenskapen ber du administratören ändra operatorer som är associerade med egenskapen.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Avancerade inställningar",
		advanced_search_options_intro: "Ange avancerade villkorsalternativ.",
		advanced_search_options_editable: "Redigerbar",
		advanced_search_options_readonly: "Skrivskyddat",
		advanced_search_options_required: "Krävs",
		advanced_search_options_hidden: "Dold",
		advanced_search_options_property_editable:"Egenskapen är:",
		advanced_search_options_operators:"Operatorer:",
		advanced_search_options_use_all:"Använd alla",
		advanced_search_options_use_selected:"Använd vald",
		advanced_search_options_operators_filtered: "Operatorer filtrerade",
		// Data types in lowercase
		data_type_boolean: "boolesk",
		data_type_date: "datum",
		data_type_time: "klockslag",
		data_type_timestamp: "tidsstämpel",
		data_type_decimal: "decimalvärde",
		data_type_double: "flyttal",
		data_type_short: "heltal",
		data_type_integer: "heltal",
		data_type_long: "heltal",
		data_type_string: "textsträng",
		data_type_string_alpha: "alfabetisk sträng",
		data_type_string_alphanum: "alfanumerisk sträng",
		data_type_string_ext: "utökad alfanumerisk sträng",
		data_type_string_num: "numerisk sträng",
		data_type_binary: "binär",
		data_type_object: "objekt",
		data_type_guid: "globalt unik identifierare",
		data_type_user: "användare",
		data_type_child_component: "underordnad komponent",

		/* Print Dialog */
		print_title: "Skriv ut",
		print_message: "Skriver ut ${0}",
		print_print_button: "Skriv ut",
		print_clean_margins_button: "Sätt alla till 0",
		print_type: "Skrivartyp:",
		print_printer_server_options: "Serverutskriftsalternativ",
		print_printer_properties: "Skrivaregenskaper",
		print_printer_fax_properties: "Faxegenskaperna",
		print_printer_name: "Skrivarnamn:",
		print_fax_recipient: "Mottagare",
		print_fax_sender: "Avsändare",
		print_copies: "Kopior:",
		print_local_orientation: "Riktning",
		print_local_orientation_landscape: "Liggande",
		print_local_orientation_portrait: "Stående",
		print_local_margins: "Marginaler",
		print_local_margins_top: "Övre",
		print_local_margins_bottom: "Nedre",
		print_local_margins_left: "Vänster",
		print_local_margins_right: "Höger",
		print_printer_server: "Server",
		print_printer_local: "Lokal",
		print_property_class: "Klass:",
		print_property_routing: "Dirigering:",
		print_property_pagedef: "Siddefinition:",
		print_property_node: "Nod:",
		print_property_writer: "Skrivare:",
		print_property_formdef: "Formatdefinition:",
		print_property_printerid: "Mål:",
		print_property_forms: "Formulär:",
		print_property_faxnotes: "Anteckningar:",
		print_property_faxcompany: "Företag:",
		print_property_faxnumber: "Faxnummer:",
		print_property_faxname: "Namn:",
		print_property_faxsendertelnumber: "Telefonnummer:",
		print_property_faxcoverpage: "Försättsblad:",
		print_property_faxsubject: "Ämne:",
		print_saveoptions: "Spara utskriftsalternativ",
		print_property_bannerpage: "Använd banderollsidan",
		print_print_with_info_fields: "Skriv ut med infofält",
		print_field_from: "Från",
		print_field_to: "Till",
		print_invalid_value_class: "Giltiga tecken: A-Z eller 0-9",
		print_invalid_value_pagedef: "Giltiga tecken är bokstäver i det engelska alfabetet, siffror och tecknen @, # eller $",
		print_invalid_value_writer: "Giltiga tecken är bokstäver i det engelska alfabetet, siffror och tecknen @, # eller $",
		print_invalid_value_formdef: "Giltiga tecken är bokstäver i det engelska alfabetet, siffror och tecknen @, # eller $",
		print_invalid_value_forms: "Giltiga tecken är bokstäver i det engelska alfabetet, siffror och tecknen @, # eller $",
		print_invalid_value_margin: "Giltiga siffror: ${0}-${1}",
		print_status_message: "${0} dokument har skickats till skrivaren ${1}.",

		print_applet_init_error: "Det går inte att starta utskriftsappleten.",
		print_applet_init_error_explanation: "Problemet kan uppstå av följande orsaker: <br/><br/><ul><li>JRE (Java Runtime Environment) har inte installerats på datorn.</li><li>Java-insticksprogrammet har inte aktiverats i webbläsaren.</li><li>Datorns JRE-version är inte kompatibel med IBM Content Navigator-versionen.</li><li>Tidsgränsen för webbläsaren uppnåddes i väntan på att utskriftsappleten skulle starta.</li></ul>",
		print_applet_init_error_userResponse: "Du kan slutföra följande steg för att lösa JRE-problemet:<br/><br/><ol><li>Kontrollera att JRE har installerats.</li><li>Kontrollera att Java-insticksprogrammet är aktiverat i webbläsaren.</li><li>Kontrollera att datorns JRE-version är kompatibel med IBM Content Navigator och försök igen. I <i>Hardware and Software prerequisites for IBM Content Navigator-dokument</i> på webbplatsen för IBM Software Support finns en lista över hanterade versioner.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Försättsblad",
		daeja_print_selected_documents_title: "Valda dokument",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Matcha alla sökvillkor",
		match_any_criteria: "Matcha något av sökvillkoren",
		include_subfolders_summary: "${0} (ta med undermappar)",
		browse_button: "Bläddra&hellip;",
		search_for: "Sök efter:",
		object_type_documents: "Dokument",
		object_type_folders: "Mappar",
		object_type_documents_folders: "Dokument och mappar",
		object_type_web_links: "Webblänkar",
		object_type_documents_folders_web_links: "Dokument, mappar och webblänkar",

		/* SelectSearchFolderDialog */
		search_in: "Sök i:",
		include_subfolders: "Inkludera undermappar",

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
		locked_item_icon_title: "Låstes av ${0}",
		checked_out_icon_title: "Checkades ut av ${0}",
		major_minor_version_icon_title: "Huvudversion med delversioner",
		suspended_icon_title: "Arbetsflödet har avbrutits",
		on_hold_icon_title: "Hålls",
		has_notes_icon_title: "Har anteckningar",
		record_icon_title: "Deklarerat som post",
		compound_document_icon_title: "Sammansatt dokument",
		validateTemplate_icon_title: "Grupprumsmallen behöver validering",
		offlineTemplate_icon_title: "Grupprumsmallen är offline",
		offlineTeamspace_icon_title: "Grupprummet är offline",
		pending_delete_icon_title: "Grupprummet väntar på borttagning",
		delete_error_icon_title: "Det gick inte att ta bort grupprummet",
		defaultTemplate_icon_title: "Standardgrupprumsmall",
		teamspace_icon_title: "Grupprum",
		teamspace_template_icon_title: "Grupprumsmall",
		has_bookmark_icon_title: "Har bokmärke",
		read_only_icon_title: "Skrivskyddat",
		no_results_were_found: "Inga resultat hittades.",
		folder_is_empty: "Mappen är tom.",
		no_checked_out_items: "Du har inte checkat ut några objekt.",
		inbasket_is_empty: "Inkorgen är tom.",
		worklist_is_empty: "Arbetslistan är tom.",
		tracker_milestone_completed: "Slutförd",
		stepprocessor_attachments_title: "Innehåll",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Lås objekt",
		unlock_items: "Lås upp objekt",
		checkin_item: "Checka in objekt",

		/* Help */
		learn_more: "Läs mer",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Öppna grupprum",
		repository_tab_createWorkspace: "Nytt grupprum",
		repository_tab_createWorkspaceTemplate: "Ny grupprumsmall",
		repository_tab_DefaultTemplate: "Standard",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Kopierar dokument.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Du har inte behörighet att redigera den valda grupprumsmallen.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Vill du ta bort grupprummet ${0}? <br><br>Det är endast dokument som har sparats i andra mappar i behållaren som behålls i behållaren. Dokument som endast har sparats i grupprummet tas bort.",
		teamspaceDecommissionLabel: "Ta bort:",
		teamspaceDecommissionDescription: "Om du tar bort grupprummet tas det bor från server. Ange hur grupprumsartefakterna ska hanteras.",
		teamspaceDecommissionOptions: "Borttagningsalternativ för grupprum",
		teamspaceDecommissionDeleteAll: "Ta bort alla grupprumsartefakter",
		teamspaceDecommissionReFileAll: "Arkivera alla grupprumsartefakter",
		teamspaceDecommissionReFileDestination: "Flytta till:",
		teamspaceDecommissionReFileIn: "Arkivera i",
		teamspaceDecommissionTaskName: "Borttagningsåtgärder för grupprum",
		teamspaceDecommissionTaskDescription: "Uppgiften tar bort ett grupprum från behållaren.",
		teamspaceDecommissionDeletionStarted: "Grupprummet har schemalagts för borttagning",
		teamspaceDecommissionDeletionConnectionFailed: "Det gick inte att ta bort grupprummet eftersom det inte gick att ansluta till behållaren. Kontrollera att kreditiven för behållaradministratören är korrekta.",

		teamspace_edit_properties_notsupported: "Det går endast att ändra egenskaperna för grupprum från vyn Grupprum.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Grupprummet är offline och kan endast öppnas grupprummets ägare",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Mapp:",
		workspace_validation_ets: "Följande postmallar finns inte i behållaren och togs bort från listan över postmallar.",
		workspace_validation_classes: "Följande klasser och är inte tillgängliga i den här behållaren och togs bort från listan över valda klasser:",
		workspace_validation_searches: "Följande sökningar och är inte tillgängliga i den här behållaren och togs bort från listan över valda sökningar:",
		workspace_validation_docs_folders: "Följande dokument och mappar är inte tillgängliga i den här behållaren och togs bort från listan över inkluderade objekt:",
		workspace_change_template_confirmation_question: "Om du väljer en annan mall tas alla ändringar bort. Vill du fortsätta?\n",
		workspace_delete_item_confirmation_question: "Vill du ta bort objektet ${0}?\n",
		workspace_delete_role_confirmation_question: "Vill du ta bort rollen ${0}?\n",
		workspace_delete_confirmation_question: "Om du tar bort ett grupprum tas endast grupprumsbehållaren bort. Mappar och dokument i grupprummet finns kvar och du kan hitta dem genom att söka. Om du vill ta bort objekt i grupprummet tar du först bort objekten och sedan grupprummet.<br><br>Vill du ta bort grupprummet ${0}?",
		workspacebuilder_instance_template_name_header: "Grupprumsmallsnamn",
		workspacebuilder_instance_template_description_header: "Beskrivning",

		workspacebuilder_template_tooltip_name: "Mallnamnet får inte innehålla något av följande tecken: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Grupprumsnamnet får inte innehålla något av följande tecken: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Ange en beskrivning som gör det möjligt för användarna att göra rätt val från mallistan. Du kan till exempel ta med information om vilka mallen är avsedd för och för vilka ändamål.",
		workspacebuilder_instance_tooltip_description: "Ange en beskrivning som gör det möjligt för användarna att skilja mellan det här grupprummet och andra grupprum.",

		workspacebuilder_template_edit_properties_pane: "Ändra grupprumsmall",
		workspacebuilder_instance_properties_pane: "Definiera grupprum",
		workspacebuilder_template_properties_pane: "Definiera grupprumsmall",

		workspacebuilder_instance_security_pane: "Ange grupprumsbehörighet",
		workspacebuilder_template_security_pane: "Ange mallbehörighet",

		workspacebuilder_layout_pane: "Välj layout",
		workspacebuilder_search_templates_pane: "Välj sökningar",
		workspacebuilder_document_folders_pane: "Ta med mappar och dokument",
		workspacebuilder_doctypes_entryTemplates_pane: "Välj klasser eller inmatningsmallar",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Välj klasser",
		workspacebuilder_security: "Grupprumsbehörighet",

		workspacebuilder_roles_pane: "Välj roller",
		workspacebuilder_security: "Säkerhet",

		workspacebuilder_properties_templates: "Tillgängliga mallar:",
		workspacebuilder_available_templates: "Tillgängliga sökningar:",
		workspacebuilder_selected_templates: "Valda sökningar:",
		workspacebuilder_templates_name: "Söknamn",

		workspacebuilder_available_entryTemplates: "Tillgängliga inmatningsmallar:",
		workspacebuilder_selected_entryTemplates: "Valda inmatningsmallar:",

		workspacebuilder_item_classes: "Tillgängliga klasser:",
		workspacebuilder_item_classes_selected: "Valda klasser:",
		workspacebuilder_properties_select_template: "Välj en mall att använda för grupprummet.",
		workspacebuilder_template_properties: "Definiera grupprumsmall",
		workspacebuilder_instance_properties: "Definiera grupprum",
		workspacebuilder_template_introText: "Ange gemensamma komponenter som du vill ta med i varje grupprum som skapas från mallen genom att använda urval i navigeringen. Klicka på <b>Slutför</b> när du är klar så blir mallen tillgänglig för andra användare som kan använda den till att skapa nya grupprum.",
		workspacebuilder_instance_introText: "Grupper använder grupprum till att dela och arbeta med specifika dokumentuppsättningar. Ange ett meningsfullt namn och beskrivning för grupprummet så att användarna kan skilja grupprummet från andra grupprum. Du kan anpassa grupprummet genom att lägga till fler sökningar, klasser eller inmatningsmallar, dokument och mappar.",

		workspacebuilder_template_search_template_introText: "Välj de standardsökningar som du vill ta med i varje grupprum som skapas från mallen. Om inga sökningar är valda ser grupprumsanvändaren alla sökningar som de har tillgång till. Med rätt behörighet kan användarna dela och lägga till sökningar i grupprummet.",
		workspacebuilder_instance_search_template_introText: "Inkludera sökningar som gör att grupprumsanvändarna kan slutföra uppgifter mer effektivt. Om inga sökningar inkluderas ser grupprumsanvändarna alla sökningar de har behörighet för. Användarna kan även lägga till och dela sökningar i grupprummet om de har rätt behörighet.",

		workspacebuilder_template_roles_introText: "Grupprumsanvändare tilldelas till roller. Rollerna anger de uppgifter som användarna får lov att utföra. Klicka på ikonerna vid varje roll så ser du vilka uppgifter som är tillåtna. Välj sedan de roller som är lämpliga för grupprummet.",
		workspacebuilder_template_roles_modify_introText: "Du kan ändra behörigheter som är associerade till varje roll i grupprummet. Du bör informera grupprumsmedlemmarna om deras behörigheter ändras.",

		workspacebuilder_template_roles_header_name: "Rollnamn",

		workspacebuilder_template_folders_introText: "Välj standarddokument och mappar som ska ingå i varje grupprum som skapas från mallen. Du kan lägga till dokument som länkar eller kopior. Använd länkar som pekar på dokument som du inte vill ha flera kopior av, t.ex. principer eller procedurer. Skapa kopior av dokument som användarna kommer att ändra, t.ex. mallar och formulär.",
		workspacebuilder_instance_folders_introText: "Välj standarddokument och mappar som ska ingå i grupprummet. Du kan lägga till dokument som länkar eller kopior. Använd länkar som pekar på dokument som du inte vill ha flera kopior av, t.ex. principer eller procedurer. Skapa kopior av dokument som användarna kommer att ändra, t.ex. mallar och formulär.",

		workspacebuilder_template_roles_introText: "Ange de roller som ska ingå i varje grupprum som skapas från mallen. Du kan också skapa nya roller, som du kan använda när du skapar andra grupprumsmallar.",
		workspacebuilder_instance_users_introText: "I ett grupprum tilldelas varje användare en eller flera roller som anger de uppgifter som användaren kan slutföra. Lägg till användare till grupprummet och tilldela roller till användarna.",

		workspacebuilder_instance_navigation_pane_title: "Skapa grupprum",
		workspacebuilder_template_navigation_pane_title: "Skapa grupprumsmall",

		workspacebuilder_roles_roles_nopermissions: "Inga behörigheter är valda för rollen {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Valda roller:",
		workspacebuilder_roles_available_roles: "Tillgängliga roller:",
		workspacebuilder_roles_privilege_header: "Behörighet",
		workspacebuilder_roles_select_role: "Välj roll",
		workspacebuilder_roles_select_permission: "Välj behörighet",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Det finns redan en roll med namnet {0}. Du måste ange ett unikt namn för rollen. ",
		workspacebuilder_roles_edit_dialog_role_name: "Rollnamn:",
		workspacebuilder_roles_edit_dialog_role_description: "Rollbeskrivning:",
		workspacebuilder_roles_edit_dialog_title_new: "Ny roll",
		workspacebuilder_roles_edit_dialog_title_edit: "Ändra roll",

		workspacebuilder_roles_privileges_header: "Behörigheter för {0}-rollen:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dokumentbehörigheter:",
		workspacebuilder_roles_priv_group_folder: "Mappbehörigheter:",
		workspacebuilder_roles_priv_group_teamspace: "Grupprumsbehörigheter:",
		workspacebuilder_roles_priv_group_item: "Dokument- och mappbehörigheter:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Hantera behörigheter",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Användare med den här behörigheten får hantera åtkomst till dokument och mappar i grupprummet. I behörigheten ingår att ge andra användare tillåtelse att ta bort, ändra egenskaper, skapa undermappar osv.",

		workspacebuilder_roles_priv_deleteItems: "Ta bort",
		workspacebuilder_roles_plbl_deleteItems: "Användare med den här behörigheten får ta bort dokument och mappar i grupprummet.",

		workspacebuilder_roles_priv_createItems: "Skapa",
		workspacebuilder_roles_plbl_createItems: "Användare med den här behörigheten får skapa dokument och mappar i grupprummet.",

		workspacebuilder_roles_priv_viewItemProperties: "Visa egenskaper",
		workspacebuilder_roles_plbl_viewItemProperties: "Användare med den här behörigheten kan se egenskaperna för dokument och mappar i grupprummet, inklusive systemegenskaperna.",

		workspacebuilder_roles_priv_modifyItemProperties: "Ändra egenskaper",
		workspacebuilder_roles_plbl_modifyItemProperties: "Användare med den här behörigheten får ändra egenskaperna för dokument och mappar i grupprummet.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Hantera mappbehörigheter",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Användare med den här behörigheten får hantera åtkomst till mappar i grupprummet. I behörigheten ingår att ge andra användare tillåtelse att ta bort mappar, ändra mappegenskaper, skapa undermappar osv.",

		workspacebuilder_roles_priv_deleteFolders: "Ta bort mappar",
		workspacebuilder_roles_plbl_deleteFolders: "Användare med den här behörigheten får ta bort mappar i grupprummet.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Ändra mappegenskaper",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Användare med den här behörigheten får ändra egenskaperna för mappar i grupprummet.",

		workspacebuilder_roles_priv_createSubfolders: "Skapa undermappar",
		workspacebuilder_roles_plbl_createSubfolders: "Användare med den här behörigheten får skapa mappar i grupprummet.",

		workspacebuilder_roles_priv_fileInFolders: "Lägg till i mappar",
		workspacebuilder_roles_plbl_fileInFolders: "Användare med den här behörigheten får lägga till en länk från mappar i grupprummet till dokument.",

		workspacebuilder_roles_priv_viewFolderProperties: "Visa mappegenskaper",
		workspacebuilder_roles_plbl_viewFolderProperties: "Användare med den här behörigheten får visa egenskaperna för mappar i grupprummet, inklusive systemegenskaperna.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Hantera dokumentbehörigheter",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Användare med den här behörigheten får hantera åtkomst till dokument i grupprummet. I den här behörigheten ingår att ge andra använda tillåtelse att ta bort dokument, ändra dokumentegenskaper osv.",

		workspacebuilder_roles_priv_deleteDocuments: "Ta bort dokument",
		workspacebuilder_roles_plbl_deleteDocuments: "Användare med den här behörigheten får ta bort dokument i grupprummet.",

		workspacebuilder_roles_priv_promoteVersions: "Uppgradera versioner",
		workspacebuilder_roles_plbl_promoteVersions: "Användare med den här behörigheten kan tilldela ett nytt versionsnummer till dokument i grupprummet.",

		workspacebuilder_roles_priv_modifyContent: "Ändra dokument",
		workspacebuilder_roles_plbl_modifyContent: "Användare med den här behörigheten får ändra innehållet i dokument i grupprummet.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Ändra dokumentegenskaper",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Användare med den här behörigheten får ändra egenskaperna för dokument i grupprummet.",

		workspacebuilder_roles_priv_viewContent: "Visa dokument",
		workspacebuilder_roles_plbl_viewContent: "Användare med den här behörigheten får visa dokument i grupprummet.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Visa dokumentegenskaper",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Användare med den här behörigheten får visa egenskaperna för dokument i grupprummet, inklusive systemegenskaperna.",

		workspacebuilder_roles_priv_addNewSearches: "Lägg till sökningar",
		workspacebuilder_roles_plbl_addNewSearches: "Användare med den här behörigheten får lägga till sökningar till grupprummet. Som standard är sökningen inte tillgänglig för andra användare.",

		workspacebuilder_roles_priv_createNewSearches: "Skapa sökningar",
		workspacebuilder_roles_plbl_createNewSearches: "Användare med behörigheten med nya sökningar men kan inte spara sökningar. Om användare inte har behörighet kan de inte lägga till dokument som redan finns i behållaren i grupprummet.",

		workspacebuilder_roles_priv_shareSearches: "Dela sökningar",
		workspacebuilder_roles_plbl_shareSearches: "Användare med den här behörigheten kan dela sökningar som de skapar med andra användare i grupprummet.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Hantera klasser eller inmatningsmallar",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Användare med den här behörigheten får lägga till och ta bort klasser eller inmatningsmallar från grupprummet.",

		workspacebuilder_roles_priv_addRemoveClasses: "Hantera klasser",
		workspacebuilder_roles_plbl_addRemoveClasses: "Användare med den här behörigheten får lägga till och ta bort klasser från grupprummet.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Hantera grupprumsanvändare",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Användare med den här behörigheten får lägga till och ta bort användare och grupper från grupprummet. Dessutom får de hantera vilka roller användare tilldelas till.",

		workspacebuilder_roles_priv_modifyRoles: "Ändra roller",
		workspacebuilder_roles_plbl_modifyRoles: "Ägare med behörighet kan ändra rollbehörigheter för grupprummet. Behörigheten är endast tillgängliga för ägare.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Välj användare",
		workspacebuilder_users_add_users_and_groups_button: "Lägg till användare och grupper...",
		workspacebuilder_users_users_or_group_header: "Användare och grupp",
		workspacebuilder_users_roles_header: "Roller",

		workspacebuilder_users_role_header: "Roll",
		workspacebuilder_users_role_no_permissions: "Rollen har inga behörigheter",
		workspacebuilder_users_available_roles_label: "Tillgängliga roller:",
		workspacebuilder_users_selected_users_and_groups_label: "Valda användare och grupper:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Det går inte att spara grupprummet. Du måste ange minst en ägare av grupprummet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Det går inte att spara grupprummet. Alla användare måste tilldelas en roll.",
		// end of select users

		workspacebuilder_search_templates: "Välj sökningar",
		workspacebuilder_search_add: "Lägg till sökning",
		workspacebuilder_properties_workspaceName: "Grupprumsnamn:",
		workspacebuilder_properties_templateName: "Mallnamn:",
		workspacebuilder_properties_workspaceDescription: "Grupprumsbeskrivning:",
		workspacebuilder_properties_templateDescription: "Mallbeskrivning:",
		workspacebuilder_properties_workspaceTemplate: "Vald mall:",
		workspacebuilder_properties_security: "Dela mall med:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Flytta från grupprum:",
		moveTeamspaceDocuments_security: "Dela dokument med:",
		moveTeamspaceDocuments_security_change: "Ange anpassad säkerhet för valda objekt",
		moveTeamspaceDocuments_item_type_level: "Du kan inte välja Åsidosätt säkerheten för valda objekt eftersom klassen för objektet har konfigurerats för säkerhet på klassnivå.",
		moveTeamspaceDocuments_security_inherit: "Ärv säkerhet från målmapp",
		moveTeamspaceDocuments_file_info_text: "Du kan flytta objekt från ett grupprum till ett annat grupprum eller mapp.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Du har inte behörighet att flytta objekten till vald mapp.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Du har inte behörighet att flytta objekt från grupprummet.",
		moveTeamspaceDocuments_move_mixed_items: "Du har inte behörighet att åsidosätta säkerheten för valda objekt. Vissa objekt hanteras inte av grupprummet. Du kan endast åsidosätta objektbehörigheten för objekt som hanteras av grupprummet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Du måste ange ett namn för grupprummet.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Du måste ange ett namn för grupprumsmallen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Grupprumsnamnet får inte innehålla något av följande tecken: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Mallnamnet får inte innehålla något av följande tecken: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Länk till dokument",
		workspacebuilder_folders_makeDocCopy: "Kopiera dokument",
		workspacebuilder_folders_newfolder: "Ny mapp",
		workspacebuilder_folders_local_drive: "Från lokal katalog",
		workspacebuilder_folders_from_repo: "Från behållare",
		workspacebuilder_folders_add_doc: "Lägg till dokument",
		workspacebuilder_folders_grid_name: "Namn",
		workspacebuilder_folders_props: "Egenskaper",
		workspacebuilder_folders_remove: "Ta bort",
		workspacebuilder_folders_delete: "Ta bort",
		workspacebuilder_folders_adddoc_local: "Lägg till dokument från lokal enhet",
		workspacebuilder_folders_adddoc_repo: "Lägg till dokument från behållare",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Den angivna mappen finns redan. Ange ett annat mappnamn.",

		workspacebuilder_classes_title: "Välj klasser eller inmatningsmallar",
		workspacebuilder_classes_title_cm: "Välj klasser",
		workspacebuilder_classes_template_introText: "Ange om klasser eller inmatningsmallar ska användas för tillägg av dokument i behållaren för de grupprum som skapas från mallen. Som standard används klasser för mallen. Om inga klasser är valda ser grupprumsanvändarna alla klasser som de har åtkomst till. Användarna kan ändra klasslistan eller inmatningsmallistan i grupprummet om de har rätt behörighet.",
		workspacebuilder_classes_template_introText_cm: "Välj de klasser som användare får använda när de lägger till dokument i behållaren. Om inga klasser har valts ser grupprumsanvändarna alla klasser som de har behörighet för. Användarna kan ändra listan över klasser om de har rätt behörighet.",
		workspacebuilder_classes_instance_introText: "Välj de klasser eller inmatningsmallar som användare får använda när de lägger till dokument i behållaren. Om inga klasser är valda ser grupprumsanvändarna alla klasser som de har behörighet för. Användarna kan ändra listan över klasser eller inmatningsmallar om de har rätt behörighet.",
		workspacebuilder_classes_instance_introText_cm: "Välj de klasser som användare får använda när de lägger till dokument i behållaren. Om inga klasser är valda ser grupprumsanvändarna alla klasser som de har behörighet för. Användarna kan ändra listan över klasser om de har rätt behörighet.",
		workspacebuilder_classes_selection: "Välj klasser:",
		workspacebuilder_classes_list: "Tillgängliga klasser:",
		workspacebuilder_classes_columns_default: "Standard",
		workspacebuilder_classes_columns_className: "Klassnamn",
		workspacebuilder_classes_type_classes: "Använd klasser vid tillägg av dokument",
		workspacebuilder_classes_type_classes_tooltip: "Klasser har egenskaper som gör det möjligt att hitta dokumenten vid senare användning.",
		workspacebuilder_classes_type_entryTemplates: "Använd inmatningsmallar vid tillägg av dokument",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Inmatningsmallar säkerställer att informationen som tillhandahålls för varje dokument är konsekvent och att fördefinierade värden används.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Inmatningsmallens namn",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Beskrivning",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Du måste lägga till minst en inmatningsmall i grupprummet.",

		workspacebuilder_classes_new: "Ny klass",
		workspacebuilder_classes_add: "Lägg till klass",
		workspacebuilder_entryTemplate_add: "Lägg till inmatningsmall",
		workspacebuilder_add_list: "Lägg till",
		workspacebuilder_makeDefault_list: "Gör till standard",
		workspacebuilder_removeDefault_list: "Ta bort standard",

		workspacebuilder_roles_title: "Välj roller",
		workspacebuilder_roles_title_modify: "Ändra roller",

		workspacebuilder_selection_moveup: "Flytta upp",
		workspacebuilder_selection_movedown: "Flytta ned",
		workspacebuilder_selection_remove: "Ta bort",
		workspacebuilder_selection_add: "Lägg till",
		workspacebuilder_selection_create_new_search: "Ny sökning...",
		workspacebuilder_selection_create_new_role: "Ny roll...",
		workspacebuilder_selection_make_role_available: "Gör tillgänglig",
		workspacebuilder_selection_make_role_available_tooltip: "Delar den valda rollen med andra mallar. Du måste tilldela en behörighet till rollen för att dela den.",

		workspacebuilder_navigation_next: "Nästa",
		workspacebuilder_navigation_finish: "Slutför",
		workspacebuilder_navigation_validate: "Validera",
		workspacebuilder_navigation_previous: "Föregående",
		workspacebuilder_navigation_cancel: "Avbryt",
		workspacebuilder_navigation_customize: "Anpassa",

		workspacebuilder_search_dialog_title: "Sök",
		workspacebuilder_dialog_close: "Stäng",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Malltillgänglighet:",
		workspace_properties_templateState_tooltip: "Gör mallen otillgänglig om du vill förhindra att användare skapar grupprum som använder mallen.",
		workspace_properties_dialog_title: "Mallegenskaper",
		workspace_properties_online_radio_option_label: "Gör tillgänglig",
		workspace_properties_offline_radio_option_label: "Gör otillgänglig",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Vill du avbryta utan att spara ändringarna?",
		workspacebuilder_cancel_confirmation_button: "Ja",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Alla ogiltiga objekt kommer att tas bort objekt tas bort från mallen och mallen görs tillgängliga användare. Vill du validera grupprumsmallen?",
		workspacebuilder_validate_confirmation_button: "Ja",
		workspacebuilder_validate_confirmation_title: "Validera",

		/* Entry templates builder */
		entry_templates: "Hantera innehållsmallar",
		no_entry_templates_were_found: "Det finns inga inmatningsmallar",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Roller:",

		/* User Group picker widget */
		directory_label: "Katalog:",
		scope_label: "Sök efter:",
		name_starts_with_label: "Namnet börjar med",
		name_contains_label: "Namnet innehåller",
		display_name_contains_label: "Visningsnamnet innehåller",
		starts_with_label: "Börjar med:",
		available_label: "Tillgängliga:",
		available_heading: "Tillgänglig",
		selected_label: "Valda:",
		selected_heading: "Valda",
		available_repositories_label: "Tillgängliga behållare",
		selected_repositories_label: "Valda behållare",
		default_repository: "Standardbehållare:",
		default_repository_placeholder: "Välj en behållare",
		default_role_placeholder: "Välj en roll",
		menu_label_placeholder: "Välj eller ange en etikett",
		default_repository_hover: "Ange den behållare som är vald som standard när användare loggar in till webbklienten från skrivbordet.<br><br><b>Viktigt!</b> Du måste lägga till behållare till den valda behållarlistans skrivbord innan du kan ange standardbehållaren.",
		default_repository_workflow_hover: "<b>Kom ihåg:</b> Du kan endast konfigurera programutrymmen för de behållare som har konfigurerats för skrivbordet.",
		remove_label: "Ta bort",
		users_label: "Användare",
		groups_label: "Grupper",
		user_or_group_name_label: "Användar- eller gruppnamn:",
		user_or_group_name_hover: "Ange namnet på en användare eller grupp som är giltig i behållaren. Namnet valideras inte.",
		user: "Användare",
		group: "Grupp",
		name: "Namn:",
		displayName: "Visningsnamn",
		display_name: "Visningsnamn:",
		shortName: "Kortnamn:",
		distinguishedName: "DN-namn:",
		search_tooltip: "Sök",
		add_tooltip: "Lägg till",
		add_selected_tooltip: "Lägg till i vald lista",
		remove_tooltip: "Ta bort",
		remove_selected_tooltip: "Ta bort från vald lista",
		add_to_selected_tooltip: "Lägg till",
		remove_from_selected_tooltip: "Ta bort",
		move_up_selected_tooltip: "Flytta upp",
		move_down_selected_tooltip: "Flytta ned",
		advanced_search_options_tooltip: "Avancerade inställningar",
		move_right_selected_tooltip: "Flytta till undermeny",
		move_left_selected_tooltip: "Flytta från undermeny",
		add_separator: "Lägg till avgränsare",
		menu_item_label: "Menyalternativetikett:",
		add_menu_label: "Lägg till undermeny",
		menu_label: "Undermenyetikett:",
		menu_label_info: "<b>Viktigt!</b> Du måste lägga till minst ett menyalternativ till undermenyn innan du kan spara menyn.",
		menu_dropdown_label: "Listruteetikett:",
		menu_dropdown_label_info: "<b>Viktigt!</b> Du måste lägga till minst ett menyalternativ i listrutan innan du kan spara verktygsfältet.",
		no_item_found: "Inga resultat hittades.",
		me: "Mig",
		anyone: "Vem som helst",
		specific_users: "Vissa användare",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Sökningen returnerade fler än {0} resultat. Begränsa sökresultaten genom att ändra villkoren.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Sökresultaten innehåller objekt som redan är valda. Dessa objekt visas inte i sökresultaten.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Fler än {0} resultat returnerades. Använd filter om du vill begränsa resultaten",

		user_already_selected: "Den angivna användaren är redan vald. Välj en annan användare.",
		group_already_selected: "Den angivna gruppen är redan vald. Välj en annan grupp.",
		user_cannot_select_self: "Du kan inte lägga till dig själv. Välj en annan användare.",

		/* Select User Group dialog */
		select_user_group_add_label: "Lägg till",
		select_user_group_cancel_label: "Avbryt",
		add_users_groups_label: "Lägg till användare och grupper",
		add_user_group_label: "Lägg till användare och grupp",
		add_users_label: "Lägg till användare",
		add_user_label: "Lägg till användare",
		add_label: "Lägg till:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Följande dokument har osparade kommentarsändringar:",
		viewer_confirm_to_proceed: "Vill du fortsätta och förlora ändringarna?",
		viewer_warn_has_changes: "Ändringar som inte har sparats tas bort.",
		viewer_warn_is_printing: "Den pågående utskriften kanske inte kan slutföras.",
		viewer_warn_confirm_exit: "Vill du avsluta?",
		viewer_prompt_save_changes: "Följande dokument har osparade kommentarsändringar som kommer att tas bort:<br>${0}<br><br>Vill du spara ändringarna?",
		viewer_prompt_mergesplit_changes: "Följande dokument har osparade ändringar:<br>${0}<br><br>Vill du fortsätta och förlora ändringarna?",
		viewer_prompt_mergesplit_tab_changes: "Följande dokument har osparade ändringar:<br>${0}<br><br>Vill du fortsätta och förlora ändringarna?",
		viewer_new_item_name: "Nytt dokument",
		viewer_top_frame: "Övre ram:",
		viewer_bottom_frame: "Nedre ram:",
		viewer_left_frame: "Vänster ram:",
		viewer_right_frame: "Höger ram:",
		viewer_viewer_frame: "Visningsprogramram:",
		viewer_properties_frame: "Egenskapsram:",
		viewer_comment_frame: "Kommentarsram:",
		viewer_mergesplit_on: "Visa",
		viewer_mergesplit_off: "Sammanfoga och dela",
		viewer_mergesplit_context_menu_move: "Flytta",
		viewer_mergesplit_context_menu_rename: "Byt namn",
		viewer_mergesplit_context_menu_delete: "Ta bort",
		//move to new window
		viewer_move_to_new_window:"Flytta till nytt fönster",
		viewer_continue:"Ta bort ändringar",
		viewer_return_to_original_window:"Återgå till ursprungsfönstret",
		viewer_switch_window:"Växla fönster",
		viewer_prompt_lost_changes:"Dokumentet ${0} är för närvarande öppet i ett annat fönster. Det här dokumentet har osparade ändringar.<br><br>Vill du växla till det fönstret för att spara eller ta bort ändringarna och öppna dokumentet i det här fönstret?",
		viewer_mergesplit_fallback_info: "Du kan endast utföra åtgärden Sammanfoga och dela på dokument som finns i samma behållare.",
		viewer_tabbed_layout: "Visa som flikar",
		viewer_tabbed_layout_highcontrast: "Flikar",
		viewer_split_vertical_layout: "Dela rutor överst och nederst",
		viewer_split_vertical_layout_highcontrast: "Överst och nederst",
		viewer_split_horizontal_layout: "Dela rutor åt vänster och höger",
		viewer_split_horizontal_layout_highcontrast: "Vänster och höger",
		viewer_add_vertical_layout: "Ny flik nederst",
		viewer_add_vertical_layout_highcontrast: "Flik nederst",
		viewer_add_horizontal_layout: "Ny flik till höger",
		viewer_add_horizontal_layout_highcontrast: "Flik till höger",
		viewer_add_horizontal_layout_rtl: "Ny flik till vänster",
		viewer_add_horizontal_layout_rtl_highcontrast: "Flik till vänster",
		viewer_split_properties_layout: "Visa egenskaper",
		viewer_split_comment_layout: "Visa kommentarer",
		viewer_split_notelog_layout: "Visa kommentarlogg",
		viewer_window_title: "${0} Viewer",
		viewer_next_hit: "Visa nästa dokument i listan",
		viewer_prev_hit: "Visa föregående dokument i listan",
		viewer_confrim_more_search_results: "Sökresultaten innehåller inga fler visningsbara dokument. Vill du hämta fler sökresultat?",
		viewer_confirm_get_next_page: "Resultatlistan innehåller fler visningsbara objekt. Vill du hämta fler sökresultat?",
		viewer_confirm_get_next_item: "Resultatlistan innehåller fler visningsbara objekt. Vill du visa nästa objekt?",
		viewer_fn_annotation_tooltip: " Skapades av ${0},  ${1}",
		viewer_box_note_limitation: "Du kan endast öppna och visa Box-anteckningar i ett separat fönster.",
		viewer_click_to_open_box_note: "Klicka här och öppna Box-anteckningen.",
		viewer_box_view_expiring: "Du kan visa Box-dokumentet i 60 minuter. Din session upphör om ${0} minuter. Om du vill fortsätta att arbeta med dokumentet måste du läsa in det på nytt nu. Vill du läsa in dokumentet på nytt?",
		viewer_add_dialog_save_as_type: "Spara som typ:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Utcheckningskonflikt",
		viewer_checkout_conflict: "Dokumentet är utcheckat av en annan användare.",
		viewer_checkout_confirm: "En nyare version av dokumentet är tillgängligt. Vill du fortsätta att checka ut dokumentet eller vill du läsa in den nyare versionen i visningsprogrammet? Om du väljer att läsa in på nytt tas alla osparade ändringar bort.",
		viewer_checkout_continue: "Fortsätt med utcheckningen",
		viewer_checkout_reload: "Läs in på nytt",
		viewer_status_building: "Bygger dokument...",
		viewer_status_adding: "Lägger till dokument...",
		viewer_status_checking_in: "Checkar in dokument...",

		/* Class Selector Widget */
		include_subclasses_label: "Inkludera underklasser",
		include_subclasses_label2: "Sök även i underklasser",
		include_subclasses_note: "(inklusive underklasser)",
		available_classes_col_header: "Tillgängliga klasser",
		single_class_label: "Sök i en enda klass",
		multiple_classes_label: "Sök i flera klasser",
		multiple_classes_hover_help: "Välj alternativet om du vill söka i mer än en klass. Klasserna kan vara överordnade klasser eller underklasser. Om du väljer det här alternativet ser du bara egenskaper och värden som är gemensamma för de valda klasserna.",
		selected_classes_col_header: "Valda klasser",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(inklusive undermappar)",
		favorites_pseudo_node: "\\Favoriter\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Du måste välja en mapp i behållaren där dokumentet ska läggas till.",
		no_permission_add_folder: "Du har inte behörighet att lägga till mappar i den här mappen.",
		no_permission_add_document: "Du har inte behörighet att lägga till dokument i den här mappen.",
		document_already_in_folder: "Dokumentet finns redan i den här mappen.",
		cant_move_folder_onto_parent: "Mappen finns redan i den här mappen.",
		cant_move_folder_onto_self: "Det går inte att flytta en mapp till sig själv eller dess undermappar.",

		/* Workflow Widgets */
		process_application_space: "Processprogramutrymme",
		process_role: "Roll",
		process_inbasket: "Inkorg",
		process_worklist: "Arbetslista",
		process_step_processor: "Arbetsobjekt",
		process_tracker: "Spåra arbetsobjekt",
		process_info_subject: "Ärende",
		process_info_stepname: "Steg",
		process_info_is_locked: "Låst",
		process_info_no_access: "Ingen åtkomst",
		process_info_received_on: "Mottagen",
		process_info_overdue: "Försenat",
		process_info_reminder_sent: "Påminnelse skickad",
		process_info_locked_by_user: "Låstes av",
		process_work_object_number: "Arbetsobjektnummer",
		process_deadline: "Förfallodatum:",
		process_launchedby: "Startades av:",
		process_receivedon: "Togs emot:",
		process_step: "Steg:",
		process_properties: "Egenskaper",
		process_attachments: "Bilagor",
		process_attachments_select: "Välj en bilaga",
		process_finish_button_label: "Stoppa spårning",
		process_tracker_history: "Historik",
		process_tracker_milestones: "Milstolpar",
		process_tracker_milestone: "Milstolpe",
		process_tracker_milestone_level: "Nivå",
		process_tracker_milestones_empty: "Det finns inga milstolpar att visa.",
		process_tracker_level_selector_label: "Visa milstolpsnivåer upp till:",
		process_tracker_map_selector_label: "Filtrera efter mappning:",
		process_tracker_message: "Meddelande",
		process_tracker_datereached: "Datum uppnått",
		process_tracker_stepname: "Steg",
		process_tracker_cycle: "Cykel",
		process_tracker_review_cycle: "Granskningscykel",
		process_tracker_participant: "Deltagare",
		process_tracker_completed: "Slutförd",
		process_tracker_response: "Svar",
		process_tracker_comments: "Kommentarer",
		process_tracker_delete_confirmation: "Vill du stoppa spårning av följande arbetsflöde: ${0}?",
		process_tracker_history_allmaps: "Alla översikter",
		process_tracker_history_workflow: "Arbetsflöde",
		process_tracker_history_terminate: "Avsluta",
		process_tracker_history_malfunction: "Felfunktion",
		process_filter_label: "Filter",
		process_no_filter_summary: "Inga filter är tillämpade",
		process_filter_summary: "${0} tillämpade",
		process_filter_reset_tooltip: "Återställningen rensar filtret och uppdaterar inkorgen.",
		process_attachments_add_folder: "Lägg till mapp",
		process_attachments_add_doc: "Lägg till dokument",
		process_complete_button_label: "Slutför",
		process_save_button_label: "Spara",
		process_launch_button_label: "Starta arbetsflöde",
		process_open_button_label: "Öppna",
		process_movetoinbox_button_label: "Flytta till inkorg",
		process_return_button_label: "Returnera",
		process_return_to_sender_tooltip: "Returnera arbetsobjektet till den inkorg det kom från",
		process_move_to_inbasket_tooltip: "Flytta arbetsobjektet till din egen inkorg",
		process_reassign_tooltip: "Omtilldela arbetsobjekt till en annan ägare",
		process_reassign_button_label: "Tilldela på nytt",
		process_preferences_button_label: "Inställningar",
		process_manageroles_button_label: "Hantera roller",
		process_manageroles_no_members: "Det finns inga medlemmar.",
		process_responses_button_label: "Fler svar",
		process_morecustomaction_button_label: "Fler åtgärder",
		process_show_instructions: "Visa instruktioner",
		process_hide_instructions: "Dölj instruktioner",
		process_remove_attachment: "Ta bort",
		process_close_window: "Arbetsobjektet har bearbetats.",
		process_delegate_flag: "Kräv att den aktuella ägaren godkänner arbetsobjektet innan det dirigeras till nästa steg i arbetsflödet.",
		process_paticipant_voting: "Antal deltagare som krävs för röstningsgodkännande:",
		process_get_next_label: "Hämta nästa arbetsobjekt",
		process_no_more_items: "Det finns inga fler objekt att bearbeta i inkorgen.",
		process_workflow_name: "Arbetsflödesnamn:",
		process_pattern_process_name: "Granskning för ${0}",
		process_instuctions: "Instruktioner för granskare:",
		process_pattern_deadline: "Förfallodatum:",
		process_reviewers: "Granskare:",
		process_approvals_required: "Godkännande krävs:",
		process_on_reject: "Om arbetsobjektet avvisats:",
		process_return_to_originator: "Returnera till mig",
		process_return_to_previous_reviewer: "Returnera till föregående granskare",
		process_additional_settings: "Fler inställningar:",
		process_allow_reassign: "Tillåt granskare att omtilldela granskningen",
		process_complete_notification: "Meddela mig när granskningen är klar",
		process_workflow_name_hover_help: "Namnet som du anger för arbetet bör göra det enkelt för granskare att skilja mellan arbetsobjekt och i sin inkorg.",
		process_approvals_required_hover_help: "Om arbetsobjektet granskas av flera personer samtidigt kan du ange hur många godkännanden som behövs för att arbetsobjektet ska kunna slutföras.",
		process_approval_options: "Godkännandealternativ",
		process_all: "Alla",
		process_at_least: "Minst",
		process_at_least_by_count: "Minsta ${0} granskningsantal",
		process_at_least_by_percentage: "Minst ${0}% granskare",
		process_comments: "Kommentarer:",
		process_review_step_comments_hover_help: "Om du avvisar arbetsobjekt måste du ange information om varför du avvisat det. Informationen gör att den som skapade arbetsobjektet eller föregående granskare kan ta itu med problemen.",
		process_rework_step_comments_hover_help: "Du måste lämna information om hur du tagit itu med kommentarerna. Om du inte instämmer i kommentaren ska du förklara varför.",
		process_rejection_reason: "Skäl för avslag:",
		process_summary: "Sammanfattning",
		process_sequential_review: "Sekventiell granskning",
		process_sequential_review_description: "Arbetsobjektet granskas av varje granskare i tur och ordning.",
		process_parallel_review: "Parallell granskning",
		process_parallel_review_description: "Arbetsobjektet granskas av varje granskare samtidigt.",
		process_parallel_approvals_required_error: "Antalet nödvändiga godkännanden är för högt. Endast ${0} granskare är angivna.",
		process_parallel_invalid_required_approvals_count: "Värdet är ogiltigt. Värdet måste vara ${0}.",
		process_subject_prompt: "Ange ämnet",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Arbetsobjekt:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Visa egenskaper",
		view_permissions_level: "Visa behörigheter",
		view_content_level: "Visa dokument",
		link_level: "Länk",
		modify_properties_level: "Ändra egenskaper",
		modify_content_level: "Redigera dokument",
		minor_version_level: "Redigera delversion",
		major_version_level: "Redigera huvudversion",
		create_instance_level: "Skapa förekomst",
		delete_document_level: "Ta bort dokument",
		delete_item_level: "Ta bort objekt",
		modify_document_permissions_level: "Hantera behörigheter",
		modify_folder_permissions_level: "Hantera behörigheter",
		modify_owner_level: "Ändra ägare",
		delete_folder_level: "Ta bort mapp",
		file_in_folder_level: "Lägg till i mappar",
		create_subfolder_level: "Skapa undermappar",
		link_item_level: "Kommentera dokument, lägg till i mapp", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Endast dokument: Lägg till en kommentar i dokumentet eller ta bort en kommentar från dokumentet.</li><li>Endast mappar: Lägg till objekt i mappen eller ta bort objekt från mappen.</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Ta bort",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Ägare",
		/* previously \"Full control\" */
		edit_privilege: "Författare",
		/* previously \"Edit\" */
		read_only_privilege: "Läsare",
		/* previously \"Read only\" */
		no_access_privilege: "Ingen åtkomst",
		share_with_label: "Delas med:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Bara mig själv",
		public_label: "Alla",
		members_label: "Vissa användare och grupper",
		select_members_label: "Välj...",
		select_user_group_label: "Välj användare...",
		select_users_groups_label: "Välj användare och grupper...",
		select_user_label: "Välj användare...",
		propagation_label: "Spridning:",
		access_label: "Behörigheter:",
		add_permission_add_label: "Lägg till",
		security_policy_label: "Säkerhetsprincip:",
		includes_inherited_access: "Inkluderar ärvd åtkomst",
		customize_access_for_label: "Anpassa åtkomst för:",
		customize: "Anpassa",
		direct: "Det här objektet",
		singleLevelInheritance: "En nivå",
		infiniteLevelInheritance: "Alla nivåer",
		inherited: "Ärvd",
		direct_hover_help: "Säkerhetsinställningar tillämpas på det valda objektet",
		singleLevelInheritance_hover_help: "Behörigheterna tillämpas på objektet och direkt underordnade objekt som ärver objektets säkerhetsinställningar.",
		infiniteLevelInheritance_hover_help: "Behörigheterna tillämpas på objektet och alla efterträdare som ärver objektets säkerhetsinställningar.",
		inherited_hover_help: "Behörigheterna ärvs från överordnat objekt.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Behörigheterna för ${0} tillämpas på objektet och de direkt underordnade objekt som ärver objektets säkerhetsinställningar.",
		infiniteLevelInheritance_member_hover_help: "Behörigheterna för ${0} tillämpas på objektet och alla efterträdare som ärver objektets säkerhetsinställningar.",
		inherited_member_hover_help: "Behörigheterna för ${0} ärvs från överordnat objekt.",
		partial_hover_help: "Objektsäkerhetsinställningarna har ändrats av en användare",
		allow: "Tillåt",
		deny: "Neka",
		basic: "Enkel",
		advanced: "Avancerad",
		permission_type: "Ange åtkomst för:",
		share_with_hover_help: "Objektet delas med följande användare och grupper.",
		direct_security_policy_hover_help: "Inställningarna för den här säkerhetsprincipen tillåter inte att du ändrar säkerheten för objektet.",
		security_policy_hover_help: "Säkerheten för objektet är skrivskyddad eftersom inställningarna i säkerhetsprincipen förhindrar att du ändrar säkerheten för objektet.",
		security_remove: "Inga behörigheter",
		pseudo_group_label: "Aliaskonton",
		marking_hover_help: "Säkerheten för objektet styrs av en märkuppsättning, som kan påverka säkerheten för objektet.",
		note_label: "Viktigt!",
		marking_text: "Objektet är markerat som: ${0}. Objektet kan ha ytterligare säkerhetsbegränsningar.",
		authenticated_users: "Autentiserade användare",
		realm_users: "${0} användare",
		denyAll: "Neka alla",
		allowAll: "Tillåt alla",
		remove_direct_text: "När du sparar ändringarna tas behörigheterna för den här medlemmen bort från objektet.",
		remove_single_inheritance_text: "När du sparar ändringarna tas behörigheterna för den här medlemmen bort från objektet och <br>de direkt underordnade objekten som ärver objektets säkerhetsinställningar.<p>Vill du fortsätta?",
		remove_infinite_inheritance_text: "När du sparar ändringarna tas behörigheterna för den här medlemmen bort från objektet och <br>alla efterträdare som ärver objektets säkerhetsinställningar.<p>Vill du fortsätta?",
		remove_inheritance_text: "När du sparar ändringarna tas behörigheterna för den här medlemmen bort från objektet och <br>alla efterträdare som ärver objektets säkerhetsinställningar. Endast de behörigheter som <br>ärvs av det här objektet behålls.<p>Vill du fortsätta?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Ta bort behörigheter för ${0}",

		security_proxy_text: "Säkerheten för objektet är skrivskyddad.",
		security_proxy_declared_text: "Objektet är skrivskyddat eftersom det är definierat av en säkerhetsproxy.",
		security_proxy_hover_help: "Säkerheten för objektet styrs av den säkerhet som är angiven för ett annat objekt i behållaren.",
		add_permissions_label: "Lägg till behörigheter",
		permission_propagation_direct: "Endast denna mapp",
		permission_propagation_onelevel: "Den här mappen och en underordnad nivå",
		permission_propagation_alllevels: "Den här mappen och alla underordnade nivåer",
		document_propagation_label: "Ange åtkomst för:",
		document_propagation_FOLDER: "Mapp",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Autentiseringskälla:",

		/* Versions Widget */
		object_versions_selector_label: "Versioner:",
		object_versions_label: "Versioner",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Mappar arkiverade i",
		folders_filed_in_folder_col_hdr: "Mapp",
		folders_filed_in_path_col_hdr: "Sökväg",
		folders_filed_in_containment_name_col_hdr: "Innehållsnamn",
		folders_filed_in_creator_col_hdr: "Skapades av",
		folders_filed_in_date_created_col_hdr: "Skapades",

		/* Parent Documents */
		properties_parent_documents_label: "Överordnade dokument",

		/* Select object dialog */
		select_object_title: "Välj objekt",
		select_object_breadCrumb_version_prefix: "Versioner för: ",
		show_versions_label: "Visa versioner",
		use_current_version_label: "Använd aktuell version",
		use_released_version_label: "Använd utgiven version",

		/* Select content class dialog */
		select_class: "Välj klass",
		/* Select Search dialog */
		select_search: "Välj sökning",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Visa länk",
		show_hyperlink_intro: "Du kan kopiera och klistra in länken i e-postmeddelanden, chattar och webbsidor. Ange vilken version du vill länka till om det finns flera objektversioner.",
		show_hyperlink_intro_no_version_select: "Du kan kopiera och klistra in länken i e-postmeddelanden, chattar och webbsidor.",
		show_text_label: "Version:",
		released_button_label: "Utgiven",
		current_button_label: "Aktuell",
		select_button_label: "Viss version",
		show_hyperlink_no_released_version_msg: "Det finns ingen utgiven version av dokumentet.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Starta arbetsflöde",
		edit_workflow_title: "Arbetsobjektegenskaper",
		start_workflow_intro: "Starta ett arbetsflöde som bearbetar de valda objekten. Ange en ägare om du vill tilldela arbetsobjekten till en viss användare.",
		edit_workflow_intro: "Du kan ändra egenskaperna för de valda arbetsobjekten. Om du vill omtilldela arbetsobjektet till en annan användare ska du ange en ägare.",
		workflow_field_label: "Arbetsflöde:",
		priority_field_label: "Prioritet:",
		owner_field_label: "Ägare:",
		start_button_label: "Starta",
		save_button_label: "Spara",
		owner_value_hint: "Skriv en alfanumerisk sträng med maximalt 32 tecken. Strängen får endast innehålla blanktecken och följande tecken: a-z, A-Z, 0-9 och ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Innehållselement",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Värdet är ogiltigt. Värdet får bara innehålla blanktecken och följande tecken: a-z, A-Z, 0-9 och ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Ange ett värde från 1 till 32000 som bestämmer arbetsobjektets vikt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Värdet är ogiltigt. Prioritet måste vara ett värde från 1 till 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Arbetsflödesnamnet finns inte.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Senarelägg i arbetsflöde",
		suspend_workitems_intro: "När du senarelägger ett arbetsobjekt i arbetsflödet, kan det arbetsobjektet inte bearbetas förrän det återupptas.",
		suspend_workitems_options_label: "Senarelägg valda arbetsobjekt:",
		suspend_until_resume_label: "Tills de återupptas manuellt",
		suspend_until_date_label: "Tills",
		suspend_for_duration_label: "Under",
		suspend_for_duration_hours: "Timmar",
		suspend_for_duration_days: "Dagar",
		suspend_for_duration_weeks: "Veckor",
		suspend_for_duration_months: "Månader",
		suspend_for_duration_years: "År",
		suspend_button_label: "Senarelägg",
		suspend_duration_value_hint: "Ange tidslängden med ett värde i intervallet 1-99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Värdet är ogiltigt. Värdet måste vara i intervallet 1-99.",

		/* Remove from workflow */
		remove_workflow_title: "Ta bort från arbetsflöde",
		remove_workflow_confirmation: "Vill du ta bort de valda objekten från arbetsflödet?<br>${0} objekt är valda.",
		remove_workflow_button_label: "Ta bort",

		/* Unfile dialog */
		unfile_dialog_title: "Ta bort från mapp",
		unfile_dialog_remove_from_folder_label: "Ta bort från:",
		unfile_dialog_info_text: "Du kan ta bort objekt från mappar. Om du tar bort ett objekt från alla mappar tas det dock inte bort från behållaren. Du kan fortfarande hämta objektet genom att köra en sökning. Endast de mappar som du har visningsbehörigheter för visas i listan.",
		unfile_dialog_select_all: "Markera alla",
		unfile_dialog_deselect_all: "Rensa alla",
		unfile_dialog_remove_button_label: "Ta bort",
		unfile_dialog_select_folder_col_hdr: "Välj mapp",
		unfile_dialog_folder_col_hdr: "Mapp",
		unfile_dialog_path_col_hdr: "Sökväg",
		unfile_dialog_not_filed_msg: "Objektet finns inte i någon mapp.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Du har inte behörighet att ta bort det här objektet från någon av de mappar som objektet finns i.",
		unfile_dialog_folder_not_selectable_tooltip: "Du har inte behörighet att ta bort objektet från den här mappen.",
		unfile_multi_prompt: "Vill du ta bort de valda objekten från mappen ${0}?",
		unfile_large_number_items_confirmation_question: "Du har valt ${0} objekt att ta bort från mappen ${1}.<br/>Det kan ta lång tid om det är många objekt som ska tas bort.<br/>Vill du fortsätta?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Öppna",
		move_to_folder_title: "Flytta till mapp",
		move_to_folder_button_caption: "Flytta",
		move_to_folder_label: "Flytta till:",
		add_to_folder_title: "Lägg till i mapp",
		add_to_folder_button_caption: "Lägg till",
		add_to_folder_label: "Lägg till i:",
		copy_to_folder_title: "Kopiera till mapp",
		copy_to_folder_button_caption: "Kopiera",
		copy_to_folder_label: "Kopiera till:",
		copy_to_folder_delete_label: "Ta bort valda dokument från Box när kopieringen är klar.",
		move_from_folder_label: "Flytta från:",
		move_file_info_text: "Du kan flytta objekt från en mapp till en annan mapp.",
		move_folder_info_text: "Du kan flytta mappar från en överordnad mapp till en annan.",
		add_doc_to_folder_info_text: "Du kan lägga till objekt i en eller fler mappar. Om ett objekt redan finns i mappen behålls det i den mappen och läggs till i övriga mappar du anger.",
		copy_doc_to_folder_info_text: "Du kan kopiera objekt till en mapp.",
		box_copy: "Box-kopia",
		box_copy__button_caption: "Kopiera",
		box_copy_to_info_text: "Välj behållare och mapp där du vill spara valda objekt.",
		box_copy_from_info_text: "Välj behållare och mapp där du vill spara valda objekt.",
		box_copy_version_info_text: "Välj behållare och mapp för att lägga till ett nytt dokument. Välj behållare och dokument för att checka in en ny version.",
		admin_box_copy: "Box-kopia",
		admin_box_copy_hover: "Kopiera dokument till Box.",

		no_permission_to_copy_version_msg: "Det går inte att kopiera dokumentet från Box som en ny version av det valda dokumentet. Dokumentet kan ha checkats ut av en annan användare eller så saknar du behörighet att redigera dokumentet.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Du har inte behörighet att ta bort det här objektet från någon av de mappar som objektet finns i.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Du har inte behörighet att ta bort objektet från den här mappen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Det går inte att flytta objektet eftersom det inte har arkiverats i någon mapp. Välj ett annat objekt.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Starta arbetsflöde",
		subscriptions_dialog_available_items_label: "Tillgängliga objekt:",
		subscriptions_dialog_info_text: "Ange vilket arbetsflöde som ska skapas.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Namn",
		subscriptions_dialog_desc_col_hdr: "Beskrivning",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Hantera roller",
		manageroles_dialog_info_text: "Du kan ändra användarlistan för varje roll som är associerad till det här processprogramutrymmet.",
		manageroles_dialog_members_label: "Medlemmar",
		manageroles_dialog_roles_label: "Roller",
		manageroles_dialog_add_button_label: "Lägg till användare och grupper",
		manageroles_dialog_remove_button_label: "Ta bort",
		manageroles_dialog_save_button_label: "Spara",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Inga arbetsflöden är associerade till objektet.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Inställningar för arbetsflöde",
		workflow_pref_dialog_info_text: "Ange arbetsflödeshändelser som du vill få e-postaviseringar om. Du kan också aktivera alternativet att dirigera arbete till en annan person genom att välja en person att delegera arbete till.",

		workflow_pref_general: "Allmänt",
		workflow_pref_email_address: "E-postadress",
		workflow_pref_email_address_hover: "Ange den e-postadress som du vill få e-postaviseringar till.",
		workflow_pref_preferred_locale: "Språk",
		workflow_pref_preferred_locale_hover: "Anger språket som e-postaviseringarna ska visas på.",

		workflow_pref_work_item_notice: "Arbetsobjektsaviseringar",
		workflow_pref_step_new_assignment: "Ett nytt arbetsobjekt har tilldelats till mig",
		workflow_pref_step_new_assignment_hover: "Avisera mig när jag får ett nytt arbetsobjekt.",
		workflow_pref_step_expired_deadline: "Tidsgränsen för ett arbetsobjekt har överskridits",
		workflow_pref_step_expired_deadline_hover: "Avisera mig om jag missar tidsgränsen för ett arbetsobjekt.",
		workflow_pref_step_reminders: "Tidsgränsen för ett arbetsobjekt närmar sig",
		workflow_pref_step_reminders_hover: "Påminn mig om ett arbetsobjekt när tidsgränsen närmar sig.",

		workflow_pref_originator_notice: "Aviseringar till initieraren",
		workflow_pref_milestone_reached: "En milstolpe har uppnåtts",
		workflow_pref_milestone_reached_hover: "Avisera mig när en milstolpe uppnåtts för ett arbetsflöde som jag startat.",

		workflow_pref_tracker_notice: "Aviseringar för arbetsflödesspårning",
		workflow_pref_tracker_new_assignment: "Ett nytt spårningsobjekt har tilldelats till mig",
		workflow_pref_tracker_new_assignment_hover: "Avisera mig när ett arbetsflöde som jag spårar startas.",
		workflow_pref_tracker_deadline_reminders: "Tidsgränsen för ett arbetsflöde närmar sig",
		workflow_pref_tracker_deadline_reminders_hover: "Påminn mig om ett arbetsflöde när det närmar sig tidsgränsen.",
		workflow_pref_tracker_deadline_expired: "Tidsgränsen för ett arbetsflöde har överskridits",
		workflow_pref_tracker_deadline_expired_hover: "Avisera mig när tidsgränsen för ett arbetsflöde har överskridits.",
		workflow_pref_tracker_exception: "Arbetsflödesfel",
		workflow_pref_tracker_exception_hover: "Avisera mig när ett undantag eller fel inträffar i ett arbetsflöde.",
		workflow_pref_tracker_expired_deadline: "Tidsgränsen för steget har överskridits",
		workflow_pref_tracker_expired_deadline_hover: "Avisera mig när en stegtidsgräns har överskridits i ett arbetsflöde som jag spårar.",
		workflow_pref_tracker_milestone_reached: "En milstolpe har uppnåtts",
		workflow_pref_tracker_milestone_reached_hover: "Avisera mig när en milstolpe uppnåtts för ett arbetsflöde som jag spårar.",

		workflow_pref_out_notice: "Borta från kontoret",
		workflow_pref_proxy_user: "Delegera arbete till",
		workflow_pref_proxy_user_hover: "Använd det här alternativet till att automatiskt dirigera ditt arbete till en annan användare, t.ex. när du är borta från kontoret eller har semester.",
		workflow_pref_workflow: "Arbetsflöde",
		workflow_pref_on: "den",
		workflow_pref_off: "Av",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Starta arbetsflöde",
		transfered_workflows_dialog_info_text: "Välj ett arbetsflöde att starta.",
		transfered_workflows_dialog_available_items_label: "Tillgängliga objekt:",
		transfered_workflows_dialog_select_button_label: "Starta",
		transfered_workflows_dialog_name_col_hdr: "Namn",
		transfered_workflows_dialog_no_item_found: "Inga överförda arbetsflöden hittades.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Överför arbetsflöde",
		transfer_workflow_dialog_info_text: "Välj ett arbetsflöde att överföra till arbetsflödessystemet.",
		transfer_workflow_dialog_use: "Använd det här arbetsflödesnamnet",
		transfer_workflow_dialog_use_another: "Använd ett annat arbetsflödesnamn",
		transfer_workflow_dialog_in_use: "Arbetsflödesnamn: ",
		transfer_workflow_dialog_transfer_button_label: "Överför",
		transfer_workflow_dialog_no_items_found: "Inga överförda arbetsflöden hittades.",
		transfer_workflow_dialog_use_hover: "Ange aktuellt arbetsflödesnamn från arbetsflödesdefinitionen.",
		transfer_workflow_dialog_another_hover: "Ange ett annat arbetsflödesnamn eller återanvänd ett befintligt överfört arbetsflödesnamn.",

		/*Search In control*/
		search_in_title: "Sök i:",
		search_in_teamspaces: "Grupprum",
		search_in_repositories: "Behållare",
		search_in_thisteamspaces: "Det här grupprummet",

		ajaxViewer_save: "Spara kommentarer",
		ajaxViewer_print: "Förhandsgranskning",
		ajaxViewer_firstPage: "Första sidan",
		ajaxViewer_previousPage: "Föregående sida",
		ajaxViewer_nextPage: "Nästa sida",
		ajaxViewer_lastPage: "Sista sidan",
		ajaxViewer_unknownPageCount: "1 av ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} av ${1}",
		ajaxViewer_zoomOut: "Zooma ut",
		ajaxViewer_zoomIn: "Zooma in",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "Anpassa bredd",
		ajaxViewer_fitHeight: "Anpassa höjd",
		ajaxViewer_fitPage: "Anpassa till sida",
		ajaxViewer_rotate270: "Rotera 270 grader",
		ajaxViewer_rotate90: "Rotera 90 grader",
		ajaxViewer_rotate180: "Rotera 180 grader",
		ajaxViewer_darken: "Mörkare",
		ajaxViewer_lighten: "Ljusare",
		ajaxViewer_lessContrast: "Mindre kontrast",
		ajaxViewer_moreContrast: "Mer kontrast",
		ajaxViewer_invert: "Invertera",
		ajaxViewer_createHighlight: "Framhäv",
		ajaxViewer_createNote: "Kommentera",
		ajaxViewer_editAnnotation: "Ändra kommentarsegenskaper",
		ajaxViewer_deleteAnnotation: "Ta bort kommentar",
		ajaxViewer_editAnnotationTitle: "Ändra kommentarsegenskaper",
		printableView_print: "Skriv ut",
		printableView_close: "Stäng",

		search_results_dropdown_button: "Resultatvisning",
		search_results_columns_label: "Sökresultatvisning",
		search_results_columns_description: "Välj de egenskaper som ska visas i sökresultaten.",
		search_results_sortby_label: "Sortera efter:",
		search_results_order_label: "Sorteringsordning:",
		search_results_accending_label: "Stigande",
		search_results_descending_label: "Fallande",
		search_results_available_properties: "Tillgänglig",
		search_results_selected_properties: "Valda",
		search_rank_property: "Rang (enbart textsökning)",
		search_name_attribute: "Namn (${0})",
		search_results_summary_enabled_label: "Aktivera innehållssammanfattningar (endast textsökning)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Sökningar",
		manage_teamspace_classes_tab_title: "Klasser",
		manage_teamspace_entry_templates_tab_title: "Inmatningsmallar",
		manage_teamspace_team_tab_title: "Grupp",
		manage_teamspace_roles_tab_title: "Roller",
		manage_teamspace_dialog_title: "Ändra grupprum",
		manage_teamspace_button_label: "Ändra grupprum",
		manage_teamspace_team_pane_heading: "Välj grupp",
		manage_teamspace_classes_pane_heading: "Välj klasser",
		manage_teamspace_entry_templates_pane_heading: "Välj inmatningsmall",
		manage_teamspace_no_rights_message: "Du har inte behörighet att ändra det här grupprummet.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Grupprumsegenskaper",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Ange de egenskaper som visas för dokument och mappar i innehållslistan när användare bläddrar i grupprummet. Du kan också ange i vilken ordning egenskaperna ska visas.",
		teamspace_props_sel_cols_use_default_label: "Använd <b>bläddringsinställningar</b> för den här behållaren",
		teamspace_props_sel_cols_use_default_tooltip: "Använd de inställningar som har angetts för behållaren på sidan Bläddring i administrationsverktyget.",
		teamspace_props_general_tab_label: "Allmänt",
		teamspace_props_column_props_tab_label: "Visade egenskaper",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Välj importfil",
		teamspace_import_template_instruction: "Välj en exportfil för grupprumsmall som ska importeras.",
		teamspace_import_template_button_label: "Importera",
		teamspace_import_template_dialog_label: "Importera grupprumsmall",

		/* Annotation Dialog */
		annotationDlg_title: "Kommentarer",
		annotationDlg_description: "De valda dokumenten har följande kommentarer:",
		annotationDlg_msg_noAnnotations: "Det finns inga kommentarer. Klicka på Lägg till om du vill skriva en kommentar.",
		annotationDlg_pageLabel: "Sida: ${pageNum}",
		annotationDlg_accLabel: "Access: ${accType}",
		annotationDlg_accLabel_public: "Gemensam",
		annotationDlg_accLabel_private: "Privat",
		annotationDlg_accLabel_privateGroup: "Privat (${groupName})",
		annotationDlg_copiable: "Kan kopieras till en annan server",
		annotationDlg_cannotCopy: "Kan inte kopieras till en annan server",
		annotationDlg_addButtonLabel: "Lägg till",

		/* Share Dialog */
		is_shared: "Delas",
		is_share_pending: "Väntande delning",
		share_title: "Box-delning",
		share_instructions_new: "Skicka e-post som innehåller en länk för den delade filen. Alla som har länken kan nå filen.",
		share_instructions_existing: "Skicka e-post som innehåller en länk för den delade filen. Alla som har länken kan nå filen. Andra personer kan ha länken om någon redan delat filen med dem.",
		share_instructions_another_version_shared: "Skicka e-post som innehåller en länk för den delade filen. Alla som har länken kan nå filen. Andra personer kan ha länken om någon redan delat en annan version av filen med dem.",
		share_buttonLabel_share: "Dela",
		share_email_addresses: "Skicka till:",
		share_email_addresses_hover: "När delningen är klar skickas länken till dessa e-postadresser. Om du inte fyller i något skickas länken till din egen e-postadress.",
		share_email_addresses_reshare_hover: "När delningen är klar skickas länken till dessa e-postadresser. Om du inte fyller i något skickas ingen e-post.",
		share_password: "Ange lösenord:",
		share_password_placeholder: "Valfritt",
		share_comments: "Meddelande:",
		share_comments_default: "Jag vill dela min fil med dig i Box.",
		share_myEmail: "Skicka från:",
		share_expiration: "Ange länkgiltighetstid:",
		share_expire: "Åtkomsten gäller till:",
		share_expire_none: "Upphör aldrig",
		share_allowDownload: "Tillåt hämtning",
		share_add: "Lägg till",
		share_advanced_instructions: "Inställningarna för hämtning, giltighetstid och lösenord gäller den delade filen i Box.",
		share_advanced_existing_instructions: "Inställningarna för hämtning, giltighetstid och lösenord gäller den delade filen i Box.",
		share_options_edit_warning: "Viktigt! Om inställningarna ändras påverkar det alla personer som har länken.",
		share_link: "Länk:",
		share_email_addresses_placeholder: "E-postadresser",
		share_email_address_placeholder: "E-postadress",
		share_email_address_invalid: "Ange en giltig e-postadress.",
		share_cannot_share_with_self: "Du kan inte dela filer med dig själv. Välj en annan användare.",
		share_selected_version_with_minor_warning_hover: "Version ${0} av dokumentet delas. Du valde version ${1}.<br><br><b>Varning</b>! Om du delar version ${1} kan ingen dela version ${2} om du inte tar bort delningen för version ${1}.",
		share_selected_version_hover: "Version ${0} av dokumentet delas. Du valde version ${1}.",
		share_selected_version_message: "Viktigt! Version ${0} av dokumentet delas. Du valde version ${1}.",
		share_different_version_message: "Viktigt! Du valde version ${1}, men version ${0} av dokumentet delas redan. Det går inte att dela version ${1} om du inte först tar bort delningen, men du kan dela länken till version ${0} i stället.",
		share_version_message: "Viktigt! Version ${0} av dokumentet delas. Välj vilken version du vill dela.",
		share_version_new: "Dela version ${0}",
		share_version_new_p8_hover: "Om du delar dokumentet skapas en versionslänk till vald version.<br><br>Följande gäller om ett dokument redan delas:<ul><li>Du kan dela en senare version och länken dirigerar om användaren till den senare versionen.</li><li>Det går inte att dela en tidigare version om du inte tar bort delningen först.</li></ul>",
		share_version_new_cm_hover: "Om du delar dokumentet skapas en versionslänk till vald version.<br><br>Följande gäller om ett dokument redan delas:<ul><li>Du kan dela en senare version och länken dirigerar om användaren till den senare versionen.</li><li>Det går inte att dela en tidigare version.</li></ul>",
		share_version_update: "Dela version ${0} (uppdatera delningsalternativ).",
		share_version_update_p8_hover: "Om du delar dokumentet behålls länken endast till den versionen.<br><br>Följande gäller om ett dokument redan delas:<ul><li>Du kan dela en senare version och länken dirigerar om användaren till den senare versionen.</li><li>Det går inte att dela en tidigare version om du inte tar bort delningen först.</li></ul>",
		share_version_update_cm_hover: "Om du delar dokumentet behålls länken endast till den versionen.<br><br>Följande gäller om ett dokument redan delas:<ul><li>Du kan dela en senare version och länken dirigerar om användaren till den senare versionen.</li><li>Det går inte att dela en tidigare version.</li></ul>",
		share_version_change_to_current: "Dela version ${0} (uppdatera delningen med vald version).",
		share_version_change_to_current_p8_hover: "Om du delar dokumentet uppdateras länken så att den endast pekar på vald version.<br><br>Följande gäller om ett dokument redan delas:<ul><li>Du kan dela en senare version och länken dirigerar om användaren till den senare versionen.</li><li>Det går inte att dela en tidigare version om du inte tar bort delningen först.</li></ul>",
		share_version_change_to_current_cm_hover: "Om du delar dokumentet uppdateras länken så att den endast pekar på vald version.<br><br>Följande gäller om ett dokument redan delas:<ul><li>Du kan dela en senare version och länken dirigerar om användaren till den senare versionen.</li><li>Det går inte att dela en tidigare version.</li></ul>",
		share_repository: "Behållare för delade filer",
		share_repository_hover: "Om du inte ser den Box-behållare du vill använda kan du lägga till en ny på sidan Behållare.",
		share_options: "Delningsalternativ",
		unshare_confirm: "Om du tar bort delningen fungerar ingen av delningslänkarna längre, inte heller de som andra användare har skickat. En användare som vill dela dokumentet måste välja det ursprungliga dokumentet och dela det igen.<br><br>Vill du ta bort delningen?",
		unshare_button: "Ta bort Box-delning",
		admin_share: "Box-delningstjänster:",
		admin_share_hover: "Användare kan dela ett dokument från valfri behållare som har Box-delning aktiverat. Delning av dokument inkluderar kopiering av filen till Box, generering av en länk samt sändning av länken i e-post.",
		admin_my_email_modifiable: "Användare kan ändra e-postadressen för Sänd från",
		admin_my_email_modifiable_hover: "Med Box-delning är användarens e-postadress som standard skrivskyddad och hämtas från en mappning av användare och adresser som motsvarar Box-användarkonton.<br><br>Välj det här alternativet om användare ska kunna ändra sina e-postadresser när de delar. E-postadressernas giltighet verifieras inte.",
		admin_repos_admin_user: "Delningsadministratör:",
		admin_repos_admin_user_hover: "Ange delningsadministratör om du har ett skrivbord med Box-delning aktiverat och har aktiverat den här Box-behållaren som behållare för delade filer.<br><br>Klicka på Ange och logga in till Box med ett giltigt Box-administratörskonto.<br><br>Delningsadministratören måste vara Box-administratör som är konfigurerad för obegränsad lagring i Box.",
		admin_repos_admin_user_not_set_warning: "Box-administratören är inte konfigurerad för den valda behållaren.<br><br>Box-delningstjänsterna är avaktiverade tills du anger Box-administratör för vald behållare eller väljer en annan Box-behållare som har en angiven Box-administratör.<br><br>Du kan ange Box-administratören i avsnittet Box-delningstjänster på sidan Allmänt för behållaren.",
		admin_share_not_configured_warning: "Innan du använder Box-delningstjänster måste du först lägga till och välja en Box-behållare med serverautentisering.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online-konfiguration",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Ange om användare som använder skrivbordet ska kunna redigera sina Office-dokument genom att använda Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Tillåt samredigering",
		admin_office_online_allow_collaborative_editing_hover: "Tillåt att mer än en användare arbetar på samma dokument. Avmarkera alternativet om du vill begränsa redigering av dokument till en användare.",
		admin_office_online_repository_not_set_warning: "Innan du aktiverar Office Online-tjänsten måste du först aktivera tjänsten för en behållare och ange URL för Microsoft Office Online Server. Klicka på <b>Behållare</b>, välj en behållare och aktivera sedan tjänsten genom att klicka på fliken <b>Redigeringsintegrering</b>. Klicka på <b>Inställningar > Allmänt</b> och ange URL för Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Ange om Office Online Server ska användas för att arbeta med Office-dokument.",
		admin_office_online_server_url: "URL för Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Ange URL-adressen för kommunikation mellan andra program och Office Online Server. URL-adressen har formatet http://servernamn:portnummer/hosting/discovery.",
		admin_office_online_server_Verified: "Verifierat",
	    admin_office_online_server_Failed: "<b>Fel</b>",

		admin_repcfg_office_online_service_p8_hover: "Om du vill initiera behållaren för att använda Office Online Server kan du lägga till den initiala mallfilen för varje Office-program. Om ingen mall anges används standardmallen.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server-integrering",
		admin_repcfg_office_online_service_url_not_set_warning: "Innan du kan aktivera Office Online Server måste du först ange URL för Microsoft Office Online Server. Klicka på Inställningar > Allmänt och ange URL-adressen",
		admin_repcfg_office_online_word_template_name: "Word-standardmall",
		admin_repcfg_office_online_excel_template_name: "Excel-standardmall",
		admin_repcfg_office_online_powerpoint_template_name: "PowerPoint-standardmall",
		admin_repcfg_office_online_blank_template_description: "Det här är den standardmall som används om du inte lägger till din egen mall.",
		/* Edit Service settings */
		admin_icn_edit_title: "Redigera konfiguration",	
	    admin_icn_edit_files_cleanup_interval: "Rensningsintervall för temporära filer (i dagar):",
	    admin_icn_edit_files_cleanup_interval_hover: "Du kan ange hur länge som temporära filer ska behållas i ICN Edit-klienten. Standardtiden är 20 dagar. Maxtiden är 20 dagar. Minimitiden är 1 dag.",
	    admin_icn_edit_service_integration: "Edit Service-integrering",
	    admin_icn_edit_service_integration_intro: "Edit Service gör det möjligt för användarna att enkelt lägga till eller redigera filer i applikationer som är installerade på deras datorer.<br><br><b>Viktigt:</b> Om du aktiverar Edit Service måste du spara behållarkonfigurationen innan du kan redigera de fördefinierade kategorierna.",
		admin_icn_edit_service: "Edit Service:",
		admin_icn_edit_enable_hover: "För att använda Edit Service måste du:<ul><li>Aktivera tjänsten på behållaren</li><li>Aktivera tjänsten på datorerna i miljön</li><li>Installera IBM Content Navigator Edit-klienten på användarnas datorer</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Aktivera",
		admin_icn_edit_disable: "Avaktivera",
		admin_icn_edit_create_new_category: "Ny kategori",
		admin_icn_edit_delete_category: "Ta bort kategori",
		admin_icn_edit_edit_category: "Redigera kategori",
		admin_icn_edit_disable_category: "Avaktivera kategori",
		admin_icn_edit_enable_category: "Aktivera kategori",
		admin_icn_edit_new_category_dialog_title: "Ny kategori",
		admin_icn_edit_edit_category_dialog_title:"Redigera kategori",
		admin_icn_edit_new_category_dialog_instructions: "Med en dokumentkategori kan du associera mallar till specifika MIME-typer för Edit Service. Exempel: Du kan associera en uppsättning mallar med PDF-filer så att användarna kan tillämpa mallar när de lägger till eller redigerar filer från IBM Content Navigator Edit-klienten. <br><br><b>Viktigt:</b> Du måste spara behållarkonfigurationen innan du kan lägga till mallar i den kategori du skapar. ",
		admin_icn_edit_edit_category_dialog_instructions: "Du måste spara behållarkonfigurationen innan du kan lägga till mallar i den här kategorin. ",
		admin_icn_edit_delete_category_dialog_instructions: "Vill du ta bort kategorin och eventuella mallar som är associerade med kategorin?<br><br><b>Viktigt:</b> Dina ändringar blir inte permanenta förrän du har sparat dem i behållaren. ",
		admin_icn_edit_category_label: "Kategori: ",
		admin_icn_edit_category_discription_label:"Beskrivning: ",
		admin_icn_edit_template_column_head:"Mallnamn",
		admin_icn_edit_category_duplicate_error_message: "Det finns redan en kategori med det här IDt. ",
		admin_icn_edit_word_category_description: "Kategorin definierar tillgängliga mallar för Microsoft Word-dokument i Edit Service. ",
		admin_icn_edit_excel_category_description: "Kategorin definierar tillgängliga mallar för Microsoft Excel-dokument i Edit Service. ",
		admin_icn_edit_powerpoint_category_description: "Kategorin definierar tillgängliga mallar för Microsoft PowerPoint-dokument i Edit Service. ",

		icn_edit_add_template_dialog_title:"Lägg till en ${0}-mall",
		icn_edit_add_template_only_one_file_error: "Du kan endast välja en fil.",
		icn_edit_add_template_file_type_error: "Du måste ange en giltig ${0}-mallfil.<br><br>Det valda dokumentet har MIME-typen ${1}.<br><br>Giltiga MIME-typer: ${2}.",
		icn_edit_change_template_dialog_title: "Redigera ${0}-mall",
		icn_edit_action_in_new_menu_name:"${0}-dokument",
		icn_edit_action_in_new_menu_submenu_oo_name: "med Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "med skrivbordsappar",
		icn_edit_new_document_dialog_title: "Nytt ${0}-dokument",
		icn_edit_new_document_dialog_intro: "Skapa ett nytt ${0}-dokument och lägg till det i behållaren. Dokumentet skapas med den valda Edit Service-mallen.", 
		icn_edit_select_edit_service_template: "Välj en mall",
		icn_edit_edit_service_template: "Edit Service-mall",
		icn_edit_new_document_category_no_templates_message:"Det finns inga mallar i den här kategorin. Kontakta administratören för att få mallar tillagda i kategorin.",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "Klass- och rollinställningar",
		admin_repcfg_classes_and_roles_warning: "För att ange klasser och användare eller användargrupper som har behörighet att skapa, redigera och använda mallar eller skapa utkast för dokument som fungerar med Office Online Service och Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "klicka här.",
		/* Edit Service settings END */
		share_no_my_email_error: "Det gick inte att identifiera den e-postadress som krävs för att dela dokumentet.",
		share_no_my_email_error_explanation: "Du loggade in med användar-IDt ${0} men det användar-IDt är inte mappat till någon e-postadress.",
		share_no_my_email_error_userResponse: "Försök logga in igen eller logga in med ett annat användar-ID. Rapportera felet till systemadministratören om det kvarstår.",
		share_no_my_email_error_adminResponse: "Användar-IDt ${0} är inte mappat till någon e-postadress och skrivbordet ${1} tillåter inte användare att ändra e-postadressen för Box-delningstjänster.<br><br>Gör något av följande:<br>Kontrollera att Email Mapping-insticksprogrammet är registrerat.<br>Kontrollera att filen emailMappingPlugin.json inkluderar användar-IDt ${0} och användarens e-postadress. Bygg, konfigurera och registrera sedan Email Mapping-insticksprogrammet.<br>Om du inte vill använda Email Mapping-insticksprogrammet eller FileNet P8-adresskatalogen men tillåta att användare anger sin egen e-postadress när de delar ett dokument, kan du ändra skrivbordsinställningarna för Box-delningstjänster så att användare kan skicka länken från en annan e-postadress.",
		share_no_my_email_error_0: "användar-ID",
		share_no_my_email_error_1: "skrivbordsnamn",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "En senare version av det här dokumentet delas så det går inte att dela vald version.",
		share_later_version_shared_error_explanation: "Du kan inte dela en tidigare version av ett dokument som har delats.",
		share_later_version_shared_error_userResponse: "Om du vill skicka länken till den senare versionen av dokumentet måste du först välja den versionen och sedan välja åtgärden Dela.<br><br>Om du vill dela vald version av dokumentet måste du först ta bort delningen för den senare versionen.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nytt meddelande",
		email_from: "Från:",
		email_to: "Till:",
		email_cc_link: "Kopia",
		email_bcc_link: "Dold kopia",
		email_cc: "Kopia:",
		email_bcc: "Dold kopia:",
		email_address_invalid: "Ange en giltig e-postadress.",
		email_subject: "Ämne:",
		email_message: "Meddelande:",
		email_message_placeholder: "Lägg till ett meddelande",
		email_attachments: "Bilagor:",
		email_links: "Länkar:",
		email_send: "Skicka",
		email_dont_send: "Skicka inte",
		email_subject_reminder: "Ärendepåminnelse",
		email_subject_reminder_confirm: "Vill du skicka meddelandet utan ärende?",
		email_missing_from_error: "Det gick inte att identifiera avsändaradressen som krävs för att sända e-post.",
		email_missing_from_error_explanation: "Du loggade in med användar-IDt ${0} men det användar-IDt är inte mappat till någon e-postadress.",
		email_missing_from_error_userResponse: "Försök logga in igen eller logga in med ett annat användar-ID. Rapportera felet till systemadministratören om det kvarstår.",
		email_missing_from_error_adminResponse: "Användar-IDt ${0} är inte mappat till en e-postadress och skrivbordet ${1} tillåter inte användare att ändra avsändaradressen.<br><br>Gör något av följande:<br>Kontrollera att Email Mapping-insticksprogrammet är registrerat.<br>Kontrollera att filen emailMappingPlugin.json inkluderar användar-IDt ${0} och användarens e-postadress. Bygg, konfigurera och registrera sedan Email Mapping-insticksprogrammet.<br>Om du inte vill använda Email Mapping-insticksprogrammet eller FileNet P8-adresskatalogen men tillåta att användare anger sin egen e-postadress när de sänder ett e-postmeddelande, kan du ändra skrivbordsinställningarna för e-post så att användare kan ändra avsändaradressen.",
		email_missing_from_error_0: "användar-ID",
		email_missing_from_error_1: "skrivbordsnamn",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Det går inte att öppna dokumentet.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator kan inte ansluta till IBM Content Navigator Edit-klienten.",
		open_edit_document_with_native_application_error_userResponse: "Installera och starta IBM Content Navigator Edit-klienten på din dator. Försök sedan att öppna dokumentet igen.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Det går inte att öppna dokumentet.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator kan inte ansluta till IBM Content Navigator Edit-klienten.",
		connect_to_the_streamline_service_error_userResponse: "Installera och starta IBM Content Navigator Edit-klienten på din dator. Försök sedan att öppna dokumentet igen.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator är inte korrekt konfigurerad för dokumentdelning.",
		share_not_configured_error_explanation: "Box-delningsfunktionen måste konfigureras korrekt innan du kan dela dokument.",
		share_not_configured_error_userResponse: "Kontakta administratören och begär att funktionen Box-delning konfigureras.",
		share_not_configured_error_adminResponse: "Följande objekt måste konfigureras innan dokument kan delas:<ul><li>Aktivitetshanterartjänsten måste vara aktiverad i inställningarna för administrationsverktyg.</li><li>Anslutnings-IDt för aktivitetshanteraren måste vara konfigurerad i behållaren.</li><li>Delning måste vara aktiverad i behållaren.</li><li>En Box-behållare måste vara vald för delning på skrivbordet.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Egenskapsändringarna sparades inte för den nya versionen",
		checkin_cors_save_attributes_error_explanation: "Versionen skapades men egenskapsändringarna sparades inte. Dokumentet kanske fortfarande är utcheckat.",
		checkin_cors_save_attributes_error_userResponse: "Lås upp dokumentet och uppdatera egenskaperna genom att använda alternativet Egenskaper på kontextmenyn.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Egenskapsändringarna sparades inte för det nya dokumentet",
		add_cors_save_attributes_error_explanation: "Dokumentet skapades men egenskapsändringarna sparades inte.",
		add_cors_save_attributes_error_userResponse: "Uppdatera egenskaperna genom att använda alternativet Egenskaper på kontextmenyn.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Det går inte att öppna dokumentet.",		
		edit_document_using_edit_service_error_explanation: "Dokumentet kan inte öppnas i Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Be administratören uppdatera Edit Service Integration.<br><br> Om användaren behöver åtkomst till det här dokumentet från Edit Service, går du till sidan Redigeringsintegrering för behållaren och uppdaterar Edit Service Integration så att klassen inkluderas i listan över klasser som ska ändras för Edit Service-support.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Det går inte att öppna dokumentet.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokumentet används av Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Du måste spara och stänga dokumentet i Office Online Service innan du kan öppna det i Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Aktivera CORS-överföringar (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "E-postinställningar",
		admin_email_settings_hover: "Ange typ av e-posttjänst för användarna. När du aktiverar HTML-baserad e-post kan du välja att användarna ska kunna ändra sin avsändaradress. Om du vill aktivera Java-baserad e-post måste du har en webbläsare som hanterar Java.",
		admin_email_use_service: "Använd HTML-baserad e-post",
		admin_email_use_applet: "Använd Java-baserad e-post",
		admin_email_can_modify_from: "Tillåt användare att ändra avsändaradressen",
		admin_email_can_modify_from_hover: "Som standard kan avsändaradressen inte ändras. Adressen hämtas från mappningen av användare och e-postadresser för användarkonton.<br><br>Välj det här alternativet om användarna ska kunna ändra sin e-postadress när de skickar e-post. E-postadressens giltighet verifieras inte.",
		admin_email_use_from_as_sender: "Använd Från-adressen som avsändaradress",
		admin_email_use_from_as_sender_hover: "Som standard används en giltig Från-adress i användarens e-postmeddelande. Den e-postadressen definieras i CNMailSession-delen på applikationsservern. Välj det här alternativet för att ange att användarens e-postadress ska användas.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nya kommentarer",
		addAnnotationDlg_labelContents: "Innehåll:",
		addAnnotationDlg_labelAccess: "Access:",
		addAnnotationDlg_labelPublic: "Gemensam",
		addAnnotationDlg_labelPrivate: "Privat",
		addAnnotationDlg_labelPrivateGroup: "Privat för grupp",
		addAnnotationDlg_labelGroup: "Grupp",
		addAnnotationDlg_labelCopiable: "Kommentaren kan kopieras till annan server.",
		addAnnotationDlg_buttonLabel_save: "Spara",

		/* Skip navigation */
		skipNavigation_title_main: "Gå direkt till huvudinnehåll",
		skipNavigation_title_menu: "Gå direkt till navigeringsknappar",
		skipNavigation_label_main: "Gå direkt till huvudinnehåll",
		skipNavigation_label_menu: "Gå direkt till navigeringsknappar",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Hantera grupprum",
		manage_teamspace_pane_instance_hdr: "Grupprum",
		manage_teamspace_pane_template_hdr: "Mallar",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Bläddra framåt",
		scroll_back: "Bläddra bakåt",

		breadcrumb_separator_open: "Öppna nod",
		breadcrumb_separator_close: "Stäng nod",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Inget objekt är valt.",

		/* eds */
		eds_url: "URL till extern datatjänst:",
		eds_request_timeout: "Tidsgräns för tjänstebegäran (sekunder):",
		eds_is_required: "Förhindra att användar utför åtgärder som ändrar egenskapsvärdena när EDS inte är tillgängligt.",

		/* eforms */
		eform_signing_pane_welcome: "Signera formuläret",
		eform_signing_button_label: "Signera",
		eform_signing_pane_delete: "Ta bort signatur",
		eform_signing_button_label_delete: "Ta bort",

		xtplugin_server_label: "URL till IBM FileNet Workplace XT-servern",
		xtplugin_server_hover: "Ange URL-adressen till servern där IBM FileNet Workplace XT är driftsatt, t.ex. http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL till IBM eClient-servern",
		ecplugin_server_hover: "Ange URL-adressen till servern där IBM eClient är driftsatt, t.ex. http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Åtgärder på ett stort antal objekt kan ta lång tid. Vill du fortsätta?",
		large_number_actions_continue_button: "Fortsätt",

		large_items_actions_confirmation_question: "Åtgärder för stora objekt kan ta lång tid. Vill du fortsätta?",

		viewer_editproperties_title: "Bekräftelse",
		viewer_editproperties_title_warning: "Varning",
		viewer_editproperties_save: "Spara",
		viewer_editproperties_next: "Nästa",
		viewer_editproperties_reset: "Återställ",
		viewer_editproperties_reset_hover: "Alla osparade data kommer att återställas till tidigare sparade värden.",
		viewer_editproperties_saveandgetnext: "Spara och hämta sedan nästa",
		viewer_editproperties_saveandgetnext_hover: "Hämtar automatiskt nästa dokument när jag har sparat mina ändringar",
		viewer_editproperties_prompt_save_changes: "Du har ändrat egenskaperna för följande dokument<br>${0}<br><br>Vill du spara ändringarna?",
		viewer_editproperties_prompt_discard_changes: "Du har ändrat egenskaperna för följande dokument<br>${0}<br><br>En eller fler egenskaper har ett ogiltigt värde vilket gör att ändringarna inte kan sparas. Du kan korrigera de ogiltiga värdena eller ta bort ändringarna.<br>Vill du korrigera de ogiltiga värdena som visas i egenskapsrutan?",
		viewer_comments_prompt_discard_changes: "Du har ändrat kommentarerna. Vill du spara ändringarna?",
		viewer_notelogs_prompt_discard_changes: "Du har ändrat kommentarloggarna. Vill du spara ändringarna?",
		social_collaborated_version: "Version: ${0}",
		social_link_label: "Vem...",

		// social comments
		comments: "Kommentarer",
		comments_add_hint: "Tryck på Enter om du vill lägga till kommentarer.",
		comments_hint: "Skriv kommentarerna.",
		comments_label: "Tryck på Enter eller tabb för att spara kommentarerna. Tryck på Esc för att avbryta.",
		comments_delete_confirmation: "Vill du ta bort det bort den valda kommentaren?",
		comments_number: "Kommentarer: ${0}",
		comments_save_new: "Du har ändrat kommentarerna. Vill du stänga fönstret utan att spara ändringarna?",

		notelogs: "Kommentarloggar",
		notelogs_download: "Hämta",
		notelog_modify: "Spara ändringar",
		notelog_edit: "Ändra kommentarlogg",
		notelog_create_newVersion: "Skapa en ny kommentarloggversion",
		notelog_add_hint: "Skriv dina kommentarer och tryck på Enter så läggs de till.",
		notelog_hint: "Tryck på skift+Enter för radmatning",
		notelog_add_placeholder: "Tryck på Enter för att lägga till kommentaren i kommentarloggen.",
		notelog_save_new: "Du har ändrat kommentarloggen. Vill du stänga fönstret utan att spara ändringarna?",

		// P8 markings related
		cannot_remove_markings: "Du har inte behörighet att ta bort märkningsvärdena: {0}",

		// download count
		downloadcount: "Hämtningar: {0}",
		downloadcount_single: "1 hämtning",
		downloadcount_multiple: "{0} hämtningar",
		downloadcount_none: "Ingen har hämtat det här ännu",

		// recommendations
		recommendations: "Rekommendationer: {0}",
		recommendations_recommend: "Rekommendera",
		recommendations_unrecommend: "Rekommendera inte",
		recommendations_you: "Du rekommenderade det här",
		recommendations_you_and_another: "Du och 1 annan person rekommenderar det här",
		recommendations_you_and_others: "Du och {0} andra rekommenderar det här",
		recommendations_another: "1 person rekommenderar det här",
		recommendations_others: "{0} personer rekommenderar det här",
		recommendations_none: "Ingen har rekommenderat det här ännu",

		// tags
		tags: "Etiketter: ${0}",
		tags_delete: "Ta bort ${0}",
		tags_none: "Det finns inga etiketter att visa.",
		tags_add: "Lägg till etiketter:",
		tags_hint: "Tryck på Enter för att lägga till etiketterna.",
		tags_hover_help: "Ange en etikett eller etikettlista som kan användas för sökning efter dokument med samma etikett. Använd kommatecken (,), semikolon (;) eller blanktecken för att separera etiketterna.",
		tags_hover_help_box: "Ange en etikett eller en kommaseparerad etikettlista som kan användas för sökning efter dokument med samma etikett.",
		tags_no_access: "Du har inte behörighet att lägga till etiketter.",

		//task scheduler pane
		taskPane_tooltip: "Öppna vyn Asynkrona uppgifter",
		taskPane_tree: "Uppgiftsnavigeringsträd",
		taskPane_allTasks: "Alla uppgifter",
		taskPane_scheduledTasks: "Schemalagda uppgifter",
		taskPane_recurringTasks: "Återkommande uppgifter",
		taskPane_inProgressTasks: "Pågående uppgifter",
		taskPane_completedTasks: "Slutförda uppgifter",
		taskPane_failedTasks: "Ej slutförda uppgifter",
		taskPane_disabledTasks: "Avaktiverade uppgifter",
		taskPane_statusScheduled: "Schemalagd",
		taskPane_statusInProgress: "Pågår",
		taskPane_statusCompleted: "Slutförd",
		taskPane_statusFailed: "Fel",
		taskPane_statusPaused: "Pausad",
		taskPane_noItemSelected: "Inga objekt har valts",
		taskSchedulerPane_scheduleInformation: "Schemaläggningsinformation",
		taskSchedulerPane_loginInformation: "Inloggningsinformation",
		taskSchedulerPane_startImmediately: "Starta direkt",
		taskSchedulerPane_recurrence: "Upprepas",
		taskSchedulerPane_interval: "Intervall",
		taskSchedulerPane_scheduleReport: "Schemarapport",
		taskSchedulerPane_nameHoverHelp: "Skriv namnet på uppgiften.",
		taskSchedulerPane_descriptionHoverHelp: "Fyll i en beskrivning av uppgiften. Beskrivningen är till för att lättare kunna särskilja uppgifter.",
		taskSchedulerPane_startTimeHoverHelp: "Ange när du vill köra uppgiften. Kör uppgiften nu genom att välja Starta direkt.",
		taskSchedulerPane_recurrenceHoverHelp: "Du kan schemalägga uppgiften att köras återkommande gånger.",
		taskSchedulerPane_endTimeHoverHelp: "Ange när du vill att uppgiften ska stoppas. Uppgiften körs från den schemalagda starttiden till den schemalagda sluttiden.",
		taskSchedulerPane_usernameHoverHelp: "För återkommande uppgifter måste du ange ett användarnamn så att tjänsten kan autentiseras när uppgiften körs.",
		taskSchedulerPane_passwordHoverHelp: "För återkommande uppgifter måste du ange lösenordet för den angivna användaren så att tjänsten kan autentiseras när uppgiften körs.",
		taskSchedulerPane_notification: "Avisering",
		taskSchedulerPane_emailAddress: "E-postadress",
		taskSchedulerPane_emailAddressHoverHelp: "Ange den e-postadress du vill använda för att ta emot aviseringar om uppgiftsstatus.",
		taskSchedulerPane_intervalHoverHelp: "Ange under hur lång tid den återkommande uppgiften ska köras. Du kan ange intervallet i timmar, dagar, veckor eller månader.",
		taskSchedulerPane_scheduledStartTime: "Schemalagd starttid",
		taskSchedulerPane_startTime: "Starttid",
		taskSchedulerPane_title: "Schemalägg",
		taskSchedulerPane_runNow: "Kör nu",
		taskSchedulerPane_runOnce: "Kör en gång",
		taskSchedulerPane_runAtSchedule: "Kör enligt schema",
		taskSchedulerPane_repeats: "Upprepas",
		taskSchedulerPane_repeatsEvery: "Upprepas varje",
		taskSchedulerPane_hourly: "timme",
		taskSchedulerPane_daily: "dag",
		taskSchedulerPane_weekly: "vecka",
		taskSchedulerPane_monthly: "månad",
		taskSchedulerPane_yearly: "år",
		taskSchedulerPane_sunday: "L",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "O",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "L",
		taskSchedulerPane_starting: "Startdatum",
		taskSchedulerPane_after: "efter",
		taskSchedulerPane_ending: "Slutdatum",
		taskSchedulerPane_times: "gånger",
		taskSchedulerPane_days: "dagar",
		taskSchedulerPane_hours: "timmar på dagen",
		taskSchedulerPane_interval: "Intervall",
		taskSchedulerPane_endingDays: "Slutar (dagar)",
		taskSchedulerPane_never: "Aldrig",
		taskSchedulerPane_categorization: "Kategorisering",
		taskSchedulerPane_scheduleTask: "Schemalägg uppgift",
		taskInformationPane_details: "Detaljer",
		taskInformationPane_errors: "Fel",
		taskInformationPane_taskInstances: "Uppgiftsförekomst",
		taskInformationPane_audits: "Granskningar",
		taskInformationPane_results: "Resultat",
		asyncTasks: "Asynkrona uppgifter",

		//entry template pane
		search_all_entry_templates: "Sök i alla inmatningsmallar.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Visa hela platsen",
		mobilesite: "Visa mobil plats",
		profile: "Hantera profil",
		office_template: "Office-mall:",
		select_office_template: "Välj en Office-mall",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "De valda dokumenten kan inte öppnas i visningsprogrammet med åtgärden Sammanfoga och dela.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Det visningsprogram som är konfigurerat för PDF- och TIFF-dokument stöder inte åtgärden Sammanfoga och dela.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Be administratören konfigurera ett visningsprogram för PDF- och TIFF-dokument som stöder åtgärden Sammanfoga och dela, till exempel visningsprogrammet Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "De valda PDF-dokumenten kan inte öppnas i visningsprogrammet med åtgärden Sammanfoga och dela.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Det visningsprogram som är konfigurerat för PDF-dokument stöder inte åtgärden Sammanfoga och dela.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Be administratören konfigurera ett visningsprogram för PDF-dokument som stöder åtgärden Sammanfoga och dela, till exempel visningsprogrammet Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "De valda TIFF-dokumenten kan inte öppnas i visningsprogrammet med åtgärden Sammanfoga och dela.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Det visningsprogram som är konfigurerat för TIFF-dokument stöder inte åtgärden Sammanfoga och dela.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Be administratören konfigurera ett visningsprogram för TIFF-dokument som stöder åtgärden Sammanfoga och dela, till exempel visningsprogrammet Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "De valda dokumenten kan inte öppnas i visningsprogrammet med åtgärden Sammanfoga och dela.",
		document_builder_unsupported_documents_error_explanation: "Åtgärden Sammanfoga och dela fungerar endast med PDF- och TIFF-dokument.",
		document_builder_unsupported_documents_error_userResponse: "Välj dokument som stöds och försök igen.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Vissa av de valda dokumenten kan inte öppnas i visningsprogrammet med åtgärden Sammanfoga och dela.",
		document_builder_some_unsupported_documents_error_explanation: "Åtgärden Sammanfoga och dela fungerar endast med PDF- och TIFF-dokument som öppnas från samma behållare.",
		document_builder_some_unsupported_documents_error_userResponse: "Det valda dokumenten öppnas i visningsprogrammet.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Fel vid incheckning av ändrat innehåll.",
		document_builder_checkin_failed_explanation: "Visningsprogrammet tog emot ett felsvar vid incheckningen av ändrat innehåll.",
		document_builder_checkin_failed_userResponse: "Be systemadministratören granska programserverns loggfiler.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Det går inte att öppna dokumentet.",
		no_viewer_to_view_error_explanation: "Systemadministratören har blockerat visningen av det här dokumentet. Om du behöver komma åt dokumentet kan du hämta det.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Det gick inte att bygga innehållet.",
		document_build_failed_userResponse: "Be systemadministratören granska visningsprogrammets loggfiler.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Det gick inte att öppna dokumentet i Sammanfognings- och delningsläge.",
		document_builder_open_failed_userResponse: "Be systemadministratören granska visningsprogrammets loggfiler.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Systemet kunde inte växla till sammanfognings- och delningsläge.",
		document_builder_switch_failed_userResponse: "Be systemadministratören granska visningsprogrammets loggfiler.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokument",
		print_service_page_setup_tab_title: "Utskriftsformat",
		print_service_OD_print_tab_title: "Skrivaralternativ",
		print_service_status_merging: "Sammanfogar dokument...",
		print_service_status_converting: "Konverterar dokument...",
		print_service_status_formatting: "Formaterar dokument för utskrift...",
		admin_print_service_maximum_number_to_print: "Maximalt antal dokument som kan skrivas ut:",
		admin_print_service_maximum_size_to_print: "Maximal datamängd för utskrift (i MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Ange en gräns för hur många dokument användare kan skriva ut åt gången. Standardvärdet är 50. Om du inte vill begränsa antalet dokument som kan skrivas ut ställer du in gränsen på 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Begränsning:</b> Används inte för IBM Content Manager OnDemand.<br/><br/>Ange hur stor mängd data som maximalt kan skrivas ut med utskriftstjänsten IBM Daeja ViewONE.<br /><br />Varje valt dokuments totala storlek får inte överstinga denna mängd.<br/><br/>Standardgränsen är 200 MB. Om gränsen sätts till mer än 200 MB kan det försämra systemprestanda. Om du inte vill begränsa dokumentstorleken som kan skrivas ut ställer du in gränsen på 0",
		// error printing
		print_service_error_printing: "Fel vid utskrift.",
		print_service_error_printing_userResponse: "Be systemadministratören granska utskriftstjänstens loggfiler.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "De valda dokumenten är för stora för att skrivas ut",
		print_service_max_content_error_explanation: "De valda dokumenten överskrider gränsen på ${0} MB data.",
		print_service_max_content_error_userResponse: "Välj färre dokument eller välj mindre dokument och skriv ut igen. Du kan även kontakta din systemadministratör för att öka den maximala totalstorleken för objekt som du kan skriva ut åt gången från det här skrivbordet.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Objekten kan inte skrivas ut.",
		print_service_max_number_selected_error_explanation: "Du kan skriva ut upp till ${0} objekt åt gången. Du försöker skriva ut ${1} objekt.",
		print_service_max_number_selected_error_userResponse: "Välj färre objekt och försök skriva ut objekten igen. Du kan också be administratören öka det maximala antalet objekt som du kan skriva ut åt gången från det här skrivbordet.",
		print_service_max_number_selected_error_0: "maximalt_antal_objekt",
		print_service_max_number_selected_error_1: "antal_objekt",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


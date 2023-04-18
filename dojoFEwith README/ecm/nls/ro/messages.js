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
		welcome_user: "Bine aţi venit, ",
		about: "Despre",
		all: "Toate",
		help: "Ajutor",
		user_session: "Sesiune utilizator",
		user_session_for: "Sesiune utilizator pentru ${0}",
		user_session_for_with_container: "Sesiune utilizator pentru ${0} (${1})",
		tools: "Unelte",
		login: "Logare",
		logout: "Delogare",
		search: "Căutare",
		saved_searches: "Căutări salvate",
		content_analytics: "Analiză conţinut",
		reset: "Resetare",
		reset_hover: "Toate datele nesalvate din toate filele vor fi resetate la valorile salvate anterior.",
		reset_default: "Curăţare toate",
		reset_default_hover: "Curăţă câmpul Etichetă curentă pe toate filele.",
		locale: "Locale:",
		up: "Sus",
		down: "Jos",
		restore: "Restaurare",
		maximize: "Maximizare",
		values_label: "Valori",
		value_label: "Valoare:",
		path_label: "Cale:",
		new_label: "Nou:",
		back_label: "Înapoi",
		clear: "Curăţare",
		set: "Setare...",
		browse: "Răsfoire",
		work: "Lucru",
		connect: "Conectare",
		documents: "Documente:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM şi emblema IBM sunt mărci comerciale ale IBM Corporation, înregistrate în multe jurisdicţii din toată lumea. Java şi toate mărcile comerciale şi emblemele bazate pe Java sunt mărci comerciale sau mărci comerciale înregistrate deţinute de Oracle şi/sau ale afiliatele sale. Oracle Outside In Technology, inclusă aici, este subiect al unei licenţe de utilizare restricţionată şi poate fi utilizată numai împreună cu această aplicaţie. Acest Program este licenţiat în termenii acordului de licenţă ce însoţeşte Programul.  Acest acord de licenţă se poate afla într-un folder sau o bibliotecă din directorul Programului, identificat ca \"License\" sau \"Non_IBM_License\", dacă este aplicabil, sau poate fi furnizat ca acord de licenţă tipărit. Vă rugăm să citiţi cu atenţie acest acord înainte de a utiliza Programul. Dacă utilizaţi Programul, sunteţi de acord cu aceşti termeni. ",
		edit: "Editare",
		cancel: "Anulare",
		close: "Închidere",
		close_all: "Închide toate filele",
		close_others: "Închide alte file",
		ok: "OK",
		yes: "Da",
		no: "Nu",
		open: "Deschidere",
		refresh: "Reîmprospătare",
		refresh_cabinets: "Reîmprospătaţi toate Cabinetele",
		delete_text: "Ştergere",
		export_config: "Export configuraţie",
		description: "Descriere",
		true_label: "Adevărat",
		false_label: "Fals",
		error: "Eroare",
		error_reference_hover: "Căutaţi în www.ibm.com pentru informaţii suplimentare despre această eroare.",
		url_label: "URL",
		default_label: "Implicit",
		ibm_label: "IBM",
		light_label: "Luminos",
		dark_label: "Întunecat",
		save: "Salvare",
		saveAs: "Salvare ca...",
		save_and_close: "Salvare şi închidere",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Fără",
		Name: "Nume",
		"${NAME}": "Nume",
		mime_type: "Tip MIME",
		mime_type_contains_label: "Tipul MIME conţine",
		mime_type_header: "Tip MIME",
		mime_type_icon: "Pictogramă tip MIME",
		casesearch: "Caz",
		item: "Articol",
		no_mime_type: "Acest articol nu are conţinut.",
		items_selected: "${0} articole selectate.",
		requestor: "Cerut de",
		scheduledStartTime: "Oră de început planificată",
		isRecurring: "Este recurent",
		weeks: "Săptămâni",
		days: "Zile",
		hours: "Ore",
		endTime: "Oră de sfârşit",
		username: "Nume utilizator",
		password: "Parolă",
		serverURL: "URL server",
		enable: "Activare",
		disable: "Dezactivare",
		finish: "Sfârşit",
		previous: "Anterior",
		next: "Următor",
		schedule: "Planificare",
		removeFromThisList: "Înlăturare din această listă",
		status: "Stare",
		scheduledEndTime: "Ora de sfârşit planificată",
		type: "Tip",
		mode: "Mod",
		startTime: "Oră de început",
		createdBy: "Creat de",
		nextScheduledTime: "Următorul timp planificat",
		id: "ID",
		duration: "Durată",
		repeatCycle: "Frecvenţă",
		taskTypeName: "Tip task",
		to: "până la",
		filter: "Filtru:",
		error_message: "Mesaj de eroare",

        file_type: "Tip de document",
        word_template_name: "Nume de şablon Word",
        excel_template_name: "Nume de şablon Excel",
        powerpoint_template_name: "Nume de şablon PowerPoint",
        template_description: "Descriere şablon",
        action_add_template: "Adăugare",
        action_change_template: "Editare",      
        action_edit_template_properties: "Proprietăţi",
        add_presentation_template: "Adăugare şablon de prezentare",
    	add_spreadsheet_template: "Adăugare şablon de foi de calcul tabelar",
    	add_doc_template: "Adăugare şablon de document",    	
    	file_type_doc_hover: "Trebuie să specificaţi un fişier valid de şablon de document de procesare cuvinte.<br><br>Tipuri valide MIME: ${0}",
    	file_type_doc_error: "Trebuie să specificaţi un fişier valid de şablon de document de procesare cuvinte.<br><br>Tipul MIME de document selectat: ${0}<br><br>Tipuri valide MIME: ${1}",
    	file_type_presentation_hover: "Trebuie să specificaţi un fişier valid de şablon de prezentare.<br><br>Tipuri valide MIME: ${0}",
    	file_type_presentation_error: "Trebuie să specificaţi un fişier valid de şablon de prezentare.<br><br>Tipul MIME de document selectat: ${0}<br><br>Tipuri valide MIME: ${1}",
    	file_type_spreadsheet_hover: "Trebuie să specificaţi un fişier valid de şablon de foaie de calcul tabelar.<br><br>Tipuri valide MIME: ${0}",
    	file_type_spreadsheet_error: "Trebuie să specificaţi un fişier valid de şablon de foaie de calcul tabelar.<br><br>Tipul MIME de document selectat: ${0}<br><br>Tipuri valide MIME: ${1}",
    	office_online_only_one_template_error: "Puteţi selecta doar un fişier.",
    	change_presentation_template: "Editare şablon de prezentare",
    	change_spreadsheet_template: "Editare şablon de foaie de calcul tabelar",
    	change_doc_template: "Editare şablon de document",
    	change_button: "Editare",
	    new_document_dialog_doc_title: "Document nou",
	    new_document_dialog_presentation_title: "Prezentare nouă",
	    new_document_dialog_spreadsheet_title: "Foaie nouă de calcul tabelar",
	    new_document_dialog_title_label: "Titlu:",
	    new_document_dialog_title_hover: "Introduceţi un titlu pentru acest document.",
	    new_document_dialog_title_missing_message: "Trebuie să specificaţi un titlu.",
	    office_online_save_before_adding_templates_title: "Salvare modificări la magazie",
	    office_online_save_before_adding_templates_error: "Nu puteţi adăuga şabloane Office până nu salvaţi modificările pe care le-aţi făcut la magazie. Faceţi clic pe <b>Salvare şi închidere</b>, apoi redeschideţi magazia pentru a adăuga şabloanele Office.",
	    copy_to_OOS_dialog_doc_title: "Document nou",
	    office_online_checkin_cancelcheckout_message: "Acest document este editat în Microsoft Office Online. Nu puteţi să înregistraţi la intrare documentul sau să-i anulaţi înregistrarea la ieşire în timp ce este deschis în Microsoft Office Online.",
	    new_document_classification: "Clasificare:",
	    new_document_classification_help: "Resetează clasa, proprietăţile şi folderul părinte, dacă există, ale documentului sursă. La adăugarea unui document folosind un şablon de intrare, şablonul de intrare al documentului sursă va fi selectat automat dacă acesta există. Proprietăţile documentului sursă sunt utilizate ca valori implicite dar sunt păstrate folderul şi clasa specificate în şablonul de intrare.",
		new_document_classification_use_source_document: "Utilizare document sursă:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Pictogramă tip ${0}",
		repository_name_and_type: "Nume şi tip ${0}",
		select_class_label: "Selectare ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Vizualizare Detalii",
		detail_view_button: "Detalii",
		magazine_view_button_tooltip: "Vizualizare Revistă",
		magazine_view_button: "Revistă",
		filmstrip_view_button_tooltip: "Vizualizare Diafilm",
		filmstrip_view_button: "Diafilm",

		magazine_view_show: "Afişare în vizualizarea Revistă",
		detail_view_show: "Afişare în vizualizarea Detalii",

		total_count_item: "articol",
		total_count_items: "articole",
		total_count_more_items: "Mai mult de ${0} articole",

		extension_changed: "Extensia fişierului selectat nu se potriveşte cu cea a originalului.  Selectaţi un alt fişier.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Vizualizatorul selectat nu suportă toate tipurile de fişiere. Dacă salvaţi această mapare de vizualizator, aţi putea întâlni probleme la vizualizarea documentelor. Este recomandat să selectaţi un vizualizator care suportă toate tipurile de fişiere când este selectată opţiunea Toate tipurile de fişiere.<br><br><b>Sugestie:</b> Următorii vizualizatori suportă toate tipurile de fişiere:<ul><li>Vizualizator aplet</li><li>Vizualizator AJAX</li><li>Conversie HTML</li><li>Conversie PDF</li><li>Browser Web</li></ul>",
		file_type_any: "Toate tipurile de fişiere",
		file_type_any_hover: "Selectaţi această opţiune dacă doriţi să utilizaţi vizualizatorul selectat pentru a vizualiza toate documentele, indiferent de tipul de fişier. Această opţiune este suportată pentru următoarele vizualizatoare:<br><br><ul><li>Vizualizator aplet</li><li>Vizualizator AJAX</li><li>Conversie HTML</li><li>Conversie PDF</li><li>Browser Web</li></ul><br><br><b>Reţineţi:</b> Dacă vreţi să folosiţi anumite vizualizatoare în majoritatea timpului, toate mapările pe care le creaţi ce folosesc această opţiune ar trebui mutate la sfârşitul mapării dumneavoastră de vizualizator. ",
		file_type_input: "Tip nou de fişier:",

		mime_type_input: "Tip MIME nou:",
		mime_type_input_invalid: "Noul tip MIME nu poate conţine niciunul din următoarele caractere: ,",
		mime_type_available: "Tipuri MIME disponibile",
		mime_type_selected: "Tipuri MIME selectate",
		file_type_input: "Tip nou de fişier:",
		file_type_input_invalid: "Tipul nou de fişier nu poate conţine niciunul dintre caracterele următoare: ,",
		file_type_available: "Tipurile disponibile de fişiere",
		file_type_selected: "Tipuri de fişiere selectate",
		file_type_header: "Tip de fişier",
		viewer: "Vizualizator:",
		viewer_viewer: "Vizualizator",
		viewer_view: "Vizualizare",
		viewer_preview: "Previzualizare",
		viewer_merge_and_split: "Combinare şi divizare",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Numai previzualizare",
		preview_only_label: "(previzualizare)",
		preview_only_hover: "Această mapare de vizualizare va fi folosită doar când un utilizator face clic pe <b>Previzualizare</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Această magazie nu suportă răsfoirea. Selectaţi altă magazie.",

		repository_community_teamspace_message: "O altă magazie este deja desemnată ca şi magazie a bibliotecii de comunitate. Dacă doriţi să continuaţi să utilizaţi magazia existentă ca şi magazie a bibliotecii de comunitate, selectaţi <b>Nu</b> înainte de a vă salva modificările pentru a preveni înlocuirea magaziei existente cu această magazie.",

		favorites_empty: "Nu aveţi încă nicio preferinţă.",
		syncItems_empty: "Nu aveţi încă niciun fişier sincronizat.",

		root_folder_id: "ID folder rădăcină",
		unified_searches: "Căutări în mai multe magazii:",
		max_results: "Număr de rezultate:",
		direct_retrieve_enabled: "Extragere directă:",
		itemTypesToDisplay: "Tipurile de articol de afişat:",
		allItemTypes: "Toate tipurile de articole",
		include_attr_group_name: "Descrierile grupului de atribute în numele de afişare a atributelor:",
		admin_repcfg_include_attr_group_name_hover: "Implicit, descrierea grupului de atribute este inclusă în numele pentru atributele grupului de atribute. Aceast lucru ajută utilizatorii să vadă cărui grup de atribute îi aparţine un atribut când aceştia lucrează cu atributele.<br>De exemplu, utilizatorii ar putea vedea următorul nume pentru un atribut dintr-un grup de atribute: Setări document.Tip de document.<br><br>Dacă dezactivaţi această opţiune, este utilizată numai descrierea atributelor pentru numele atributului din grupul de atribute.<br>De exemplu, utilizatorii vor vedea acest nume: Tip de document.<br><br>Fără descrierea grupului de atribute, utilizatorii ar putea spune dacă Tipul de document este atributul simplu sau un atribut dintr-un grup de atribute.",
		documentItemTypesOnly: "Doar tipuri de articole model de document",
		object_store: "Nume simbolic depozit de obiecte:",
		object_store_display_name: "Nume afişare depozit de obiecte:",
		teamspaceUpgradeMsg: "Spaţiile dumneavoastră de echipă va fi actualizat când vă salvaţi configuraţia de magazie. Dacă aveţi mai multe spaţii de echipă, actualizarea ar putea dura câteva minute.",
		synchUpgradeMsg: "Modulul de sincronizare al acestei magazii va fi actualizat când vă salvaţi configuraţia de magazie.",
		protocol: "Protocol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID magazie CMIS:",
		cmis_url: "URL document serviciu de legare CMIS AtomPub:",
		trace_level: "Nivel urmărire",
		trace_dir: "Director urmărire",
		temp_dir: "Director temporar",
		show_document_location: "Afişare locaţie document",
		max_folders: "Foldere maxime",
		afp_conversion: "Conversie AFP",
		line_conversion: "Conversie date linie",
		max_hits: "Potriviri maxime",
		folder_search_expresssion: "Expresie de căutare folder",
		max_item_types: "Maxim Tipuri de articole",
		max_worklists: "Maxim liste de lucru",
		update_storage_collection: "Actualizare colecţie de stocare",
		include_mime_types_in_search_results: "Includere tipuri MIME în rezultatele căutării",
		object_type: "Tip obiect",
		object_type_document: "Documente",
		object_type_folder: "Foldere",
		file_label: "Fişier:",
		plugin_jarfile_path_label: "Calea fişierului JAR:",
		plugin_classfolder_path_label: "Cale fişier de tip clasă",
		plugin_classname_label: "Nume clasă:",
		plugin_id_label: "ID plug-in:",
		class_label: "Clasă",
		configuration: "Configuraţie",
		connect_repository: "Conectare...",
		server_type: "Tip server",
		timeout_in_seconds: "Timeout (în secunde):",
		default_search_template: "Căutare implicită",
		search_filtered_properties: "Proprietăţi căutabile",
		property_contains_label: "Proprietatea conţine",
		class_contains_label: "Clasa conţine",
		search_filtered_operators: "Operatori căutare",
		default_search_results: "Rezultatele căutării",
		data_type: "Tip de date",
		status_bar: "Bară de stare",
		operators_for: "Operatori pentru:",
		currentUser: "Utilizator curent",
		nameContains: "Numele conţine",
		searchFor: "Căutare pentru",
		server_autentication: "Autentificare server (OAuth 2.0 cu JWT)",
		standard_authentication: "Autentificare standard (3-legged OAuth2.0)",
		developer_authentication: "Autentificare dezvoltator",
		enterprise_id: "ID întreprindere:",
		public_key_id: "ID cheie publică:",
		private_key_path: "Cale fişier de chei private:",
		server_user_email: "E-mail utilizator de server",

		filter_builder_tooltip: "Definire filtru",

		// Launch bar
		launchbar_home: "Deschidere Acasă",
		launchbar_favorites: "Deschidere Favorite",
		launchbar_browse: "Deschidere vizualizare Răsfoire",
		launchbar_browse_popup: "Deschidere listă pop-up Răsfoire",
		launchbar_search: "Deschidere vizualizare Căutare",
		launchbar_search_popup: "Deschidere listă pop-up Căutare",
		launchbar_teamspaces: "Deschidere vizualizare Spaţii de echipă",
		launchbar_teamspaces_popup: "Deschidere listă pop-up Spaţii de echipă",
		launchbar_work: "Deschidere vizualizare Lucru",
		launchbar_work_popup: "Deschidere listă pop-up Lucru",
		launchbar_entry_templates: "Deschidere vizualizare Şabloane de intrare",
		launchbar_entry_templates_popup: "Deschidere Listă pop-up de şabloane de intrare",
		launchbar_admin: "Deschidere vizualizare Administrare",

		admin_sync_server: "Servicii sincronizare",
		admin_settings: "Setări",
		admin_interface_text: "Etichete",
		admin_interface_text_desktop: "Desktop:",
		admin_desktops: "Desktop-uri",
		admin_repositories: "Magazii",
		admin_mobile: "Mobile",
		admin_menus: "Meniuri",
		admin_reason_codes: "Motive de redactare",
		admin_plugins: "Plug-in-uri",
		admin_plugins_state_enabled: "Plug-in-ul este activat",
		admin_plugins_state_disabled: "Plug-in-ul este dezactivat",
		admin_plugins_version: "Versiune:",
		admin_plugins_version_heading: "Versiune",
		admin_plugins_icon: "Pictogramă plug-in",
		admin_viewer_mapping_icon: "Pictogramă Mapare vizualizator",
		admin_viewer_defs: "Mapări vizualizator",
		admin_viewer_dialog_title: "Mapare",
		admin_viewer_dialog_new_title: "Mapare nouă",
		admin_viewer_dialog_instructions: "O mapare specifică ce vizualizator să se folosească pentru fişierele dintr-o magazie. Puteţi crea mai multe mapări pentru a specifica vizualizatoare diferite pentru tipuri diferite de fişiere. Puteţi utiliza fie un tip MIME, fie o extensie de fişier pentru a defini o mapare. Mapările cu extensii de fişiere vor fi mapate la numele de documente. De exemplu, o mapare cu tipul de fişier setat la GIF va fi mapată la numele documentelor care se termină cu extensia .gif",
		admin_desktop_viewer_defs: "Mapare vizualizator:",
		admin_desktop_viewer_defs_hover: "Maparea de vizualizator specifică ce vizualizator este folosit pentru a deschide diferite tipuri de documente din magazie.<br><br>Puteţi crea noi mapări de vizualizator în secţiunea <b>Mapări vizualizator</b> a uneltei de administrare.",
		admin_desktops_used: "Folosit în desktop-uri",
		admin_desktop_additional_settings: "Setări suplimentare:",
		admin_default_desktop: "Setare ca desktop implicit",
		admin_default_desktop_header: "Desktop implicit",
		admin_layout_tab_title: "Dispunere",
		admin_desktop_icon: "Pictogramă desktop",

		// Themes
		admin_themes: "Teme",
		admin_theme_list_instructions: "Puteţi crea o temă pentru a face mai uşoară personalizarea clientului web pentru organizaţia dumneavoastră. Puteţi crea teme multiple pentru a utiliza culori, fonturi sau embleme diferite pentru diferite desktop-uri din mediul dumneavoastră.<br><br>După ce creeaţi o temă, o puteţi aplica pentru un desktop prin configurarea temei în fila <b>Aspect</b> a desktop-ului.",
		admin_theme_instructions: "Creaţi o temă pentru a controla aceste culori şi fonturi ce sunt afişate în clientul web. Suplimentar, puteţi utiliza tema pentru a modifica emblema, numele aplicaţiei şi textul copyright ce este afişat în pagina de logare şi în banner.",
		admin_theme_heading: "Temă: <b>${0}</b>",
		admin_new_theme: "Temă nouă",
		admin_text_theme: "Temă",
		admin_delete_confirmation_themes: "Doriţi să ştergeţi temele selectate\n${0} teme sunt selectate.",
		admin_theme_color: "Culoare",
		admin_theme_text: "Text",
		admin_theme_solid: "Compact",
		admin_theme_gradient: "Gradient",
		admin_theme_box: "Box",
		admin_theme_color_label: "Culoare ${0}:",
		admin_theme_name_invalid: "Numele temei nu poate conţine niciunul dintre următoarele caractere: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID-ul temei trebuie să fie unic şi nu puteţi modifica ID-ul după ce salvaţi tema.<br><br>ID-ul poate conţine numai caractere alfanumerice.",
		admin_theme_name_hover: "Numele nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automat",
		admin_theme_logo_url_hover: "Introduceţi URL-ul fişierului emblemă. Dacă emblema este pe acelaşi server de aplicaţii web ca şi clientul web, introduceţi un URL relativ, de exemplu: /mycustomizations/banner_logo.png<br><br>Se recomandă ca emblema să aibă un fundal transparent.",
		admin_theme_color_palette_title_heading: "Paletă de culori",
		admin_theme_color_palette_help_text: "Creaţi paleta de culori pentru tema dumneavoastră, folosind valoarea hexazecimală din selectorul de culori. Puteţi adăuga câte culori doriţi.",
		admin_theme_color_add_button_label: "Adăugare culoare",
		admin_theme_color_remove_button_label: "Înlăturare culoare",
		admin_theme_global_title_heading: "Elemente pentru toată aplicaţia",
		admin_theme_global_font: "Familie de fonturi:",
		admin_theme_global_font_hover: "Selectaţi fontul de utilizat în clientul web. Fonturile sunt listate în ordinea precedenţei;următorul font din listă este utilizat numai dacă fontul precedent nu este instalat pe maşina client.",
		admin_theme_global_framework_color_label: "Culoare cadru de lucru:",
		admin_theme_global_framework_color_hover: "Selectaţi o culoare de utilizat pentru următoarele elemente:<ul><li>Barele de titlu ale casetelor de dialog</li><li>Culoarea evidenţiată din vârful filei selectate</li><li>Pictogramele de vizualizare ale listelor de conţinut (vizualizare Detalii, vizualizare Revistă, vizualizare Diafilm)</li></ul><br>Această culoare nu este utilizată pentru separatoarele dintre secţiunile clientului web. Dacă doriţi să modificaţi culoarea separatoarelor, trebuie să creaţi un plug-in pentru a furniza un fişier CSS personalizat.",
		admin_theme_color_global_toolbar: "Culoare bară de unelte globală:",
		admin_theme_color_global_toolbar_hover: "Dacă includeţi bara de unelte globală în clientul web, selectaţi culoarea barei de unelte.<br><br><b>Sugestie:</b> Bara de unelte este afişată în banner în vârful clientului web, astfel încât bara de unelte ar trebui să fie complementară culorii banner-ului.",
		admin_theme_global_selected_color: "Culoare articol selectat:",
		admin_theme_global_selected_color_hover: "Selectaţi culoarea de utilizat atunci când articolele sunt selectate în arborele de răsfoire, arborele de căutare şi lista de conţinut.<br><br>Culoare de trecere peste (culoarea utilizată atunci când un utilizator trece peste un articol) este derivată din această culoare.",
		admin_theme_global_link_color: "Culoare legătură:",
		admin_theme_global_link_color_hover: "Selectaţi culoarea de utilizat pentru toate URL-urile pe care se poate face clic în clientul web. De exemplu, această culoare este utilizată în legăturile Aflaţi mai multe ce sunt afişate prin clientul web.",
		admin_theme_login_title_heading: "Elemente ale paginii de logare",
		admin_theme_page_background_label: "Culoare de fundal a paginii de logare:",
		admin_theme_login_page_background_hover: "Selectaţi culoarea de afişat în spatele panoului de logare.",
		admin_theme_login_pane_background_label: "Culoare de fundal a panoului de logare:",
		admin_theme_login_pane_background_hover: "Selectaţi o culoare de afişat pentru panoul de logare. Culoarea ar trebui să fie complementară cu culoarea fundalului paginii de logare.",
		admin_theme_text_color: "Culoare text:",
		admin_theme_login_pane_text_color_hover: "Selectaţi o culoare de utilizat pentru textul din panoul de logare. Această culoare este utilizată pentru textul de Bine aţi venit şi etichetele câmpului. Această culoare ar trebui să fie lizibilă faţă de culoarea de fundal a panoului de logare.",
		admin_theme_copyright_text: "Text copyright:",
		admin_theme_copyright_text_hover: "Specificaţi dacă să afişaţi textul copyright în pagina de logare.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Fără text copyright",
		admin_theme_banner_title_heading: "Elemente de banner",
		admin_theme_text_icons_color: "Culoare pictogramă şi text:",
		admin_theme_icon_color_label: "Culoare pictogramă:",
		admin_theme_shadow_label: "Umbră:",
		admin_theme_banner_text_icons_hover: "Selectaţi o culoare de utilizat pentru textul şi pictogramele din banner. Această culoare ar trebui să fie lizibilă faţă de culoarea de fundal a banner-ului.",
		admin_theme_banner_product_name_label: "Nume produs:",
		admin_theme_banner_product_name_hover: "Atunci când creaţi un desktop, puteţi specifica un nume personalizat de afişat pentru aplicaţie. Dacă nu specificaţi un nume personalizat, IBM Content Navigator este utilizat ca şi nume de produs. Specificaţi dacă să utilizaţi numele aplicaţiei ce este definit în desktop sau o imagine în loc de un nume.",
		admin_theme_banner_product_name_desktop_defined_label: "Utilizare Nume din desktop",
		admin_theme_banner_product_name_image: "Utilizare emblemă personalizată (URL)",
		admin_theme_background_color_label: "Culoare de fundal:",
		admin_theme_style_label: "Stil:",
		admin_theme_banner_color_hover: "Selectaţi o culoare de utilizat pentru banner-ul din vârful aplicaţiei.<br><br><b>Sugestie:</b>Asiguraţi-vă că este lizibilă culoarea textului de pe banner pe culoarea de fundal a banner-ului.",
		admin_theme_buttons_title_heading: "Butoane",
		admin_theme_navigation_title_heading: "Elemente de navigare",
		admin_theme_navigation_icon_selected_label: "Culoare pictogramă selectată:",
		admin_theme_navigation_background_hover: "Selectaţi o culoare de utilizat pentru fundalul barei de navigare a caracteristicii.",
		admin_theme_navigation_icon_color_hover: "Selectaţi o culoare de utilizat pentru pictogramele din bara de navigare a caracteristicii. Când se foloseşte dispunerea implicită pe un desktop, această culoare trebuie să fie în contrast cu fundalul meniului derulant al caracteristicii. Când se foloseşte dispunerea clasică pe un desktop, această culoare trebuie să fie în contrast cu fundalul barei de navigare a caracteristicii. ",
		admin_theme_navigation_icon_selected_hover: "Selectaţi o culoare de utilizat pentru caracteristica selectată în bara de navigare a caracteristicii. Culoarea ar trebui să fie complementară cu culoarea pictogramelor şi culoarea de fundal a barei de navigare a caracteristicii.<br><br>Când se foloseşte dispunerea clasică pe un desktop, această culoare este folosită de culoare la trecerea peste în bara de navigare a caracteristicii. ",
		admin_theme_button_background_color_hover: "Selectaţi o culoare de utilizat pentru fundalurile butoanelor.",
		admin_theme_button_style_hover: "Selectaţi un stil de buton.",
		admin_theme_button_text_icon_color_hover: "Selectaţi o culoare de utilizat pentru textul şi imaginile de pe butoane.",
		admin_theme_no_logo_label: "Fără emblemă",
		admin_theme_custom_logo_label: "Emblemă personalizată (URL)",
		admin_theme_banner_type: "Stil umplere banner:",
		admin_theme_banner_type_hover: "Specificaţi dacă banner-ul ar trebui să fie o culoare compactă sau gradient. Dacă specificaţi un banner gradient, culoarea pe care o specificaţi pentru culoarea banner-ului este cea mai închisă culoare din banner.<br><br><b>Sugestie:</b>Asiguraţi-vă că este lizibilă culoarea textului de pe banner pe culoarea de fundal a banner-ului.",
		admin_theme_icon: "Pictogramă temă",
		admin_theme_buttons_and_links_title_heading: "Butoane, câmpuri şi legături",
		admin_theme_button_style_label: "Stil buton:",
		admin_theme_theme_style_label: "Stil temă:",
		admin_theme_theme_style_hover: "Selectaţi stilul pe care se bazează tema. Puteţi modifica stilul în orice moment când creaţi sau editaţi o temă. Când schimbaţi de la o temă la alta, setările de temă sunt resetate la valorile implicite.",
		admin_theme_accent_color_label: "Culoare accentuare:",
		admin_theme_accent_color_hover: "Selectaţi culoarea de folosit pentru bara superioară a dialogului şi pentru spinerul de încărcare.",
		admin_theme_global_toolbar_text_color_label: "Culoare text bară de unelte globală:",
		admin_theme_global_toolbar_text_color_hover: "Dacă includeţi bara de unelte globală în clientul web, selectaţi culoarea de folosit pentru textul din bara de unelte.",
		admin_theme_banner_text_color_hover: "Selectaţi culoarea de folosit pentru textul din banner.",
		admin_theme_banner_icon_color_hover: "Selectaţi culoarea de folosit pentru pictogramele din banner.",
		admin_theme_button_color_label: "Culoare:",
		admin_theme_button_color_hover: "Selectaţi o culoare de utilizat pentru următoarele elemente:<ul><li>Barele de titlu ale casetelor de dialog</li><li>Culoarea evidenţiată din vârful filei selectate</li><li>Pictogramele de vizualizare ale listelor de conţinut (vizualizare Detalii, vizualizare Revistă, vizualizare Diafilm)</li><li>Butoane, câmpuri şi legături</li></ul>Culoarea folosită când utilizatorul trece cu mouse-ul peste buton este derivată din această culoare. Această culoare nu este utilizată pentru separatoarele dintre secţiunile clientului web. Dacă doriţi să modificaţi culoarea separatoarelor, trebuie să creaţi un plug-in pentru a furniza un fişier CSS personalizat.",
		admin_theme_theme_style_col_header: "Stil temă",

		admin_syncserver_consistency_checker: "Verificator de consistenţă:",
		admin_syncserver_consistency_checker_hover: "Rulaţi verificatorul de consistenţă pentru a vă asigura că bazele de date ale serviciului de sincronizare au informaţii curente despre starea fiecărui articol care este pe server. De exemplu, rulaţi verificatorul de consistenţă după o întrerupere a bazei de date a serviciilor de sincronizare pentru a obţine informaţii despre documentele care au fost actualizate pe magazie în timpul întreruperii.",
		admin_syncserver_consistency_checker_button: "Rulare verificator de consistenţă",
		admin_syncserver_consistency_checker_started: "Pornit:",
		admin_syncserver_consistency_checker_ended: "Oprit:",
		admin_syncserver_consistency_checker_duration: "Durată:",
		admin_syncserver_consistency_checker_items_processed: "Sincronizarea articolelor procesate:",
		admin_syncserver_consistency_checker_items_processed_success: "Sincronizarea articolelor procesate cu succes:",
		admin_syncserver_consistency_checker_items_discovered: "Articole noi de magazie descoperite:",
		admin_syncserver_consistency_checker_change_updates: "Total actualizări:",
		admin_syncserver_consistency_checker_state: "Stare:",
		admin_syncserver_consistency_checker_state_done: "Gata",
		admin_syncserver_consistency_checker_state_running: "Rulare",
		admin_syncserver_consistency_checker_user: "Transmis de:",
		admin_syncserver_consistency_checker_scheduled: "Planificat:",

		admin_syncserver_dbcleanup: "Curăţare bază de date",
		admin_syncserver_dbcleanup_hover: "Rulaţi unealta de curăţare a bazei de date pentru a înlătura toate dispozitivele nefolosite şi articolele care nu mai sunt sincronizate din baza de date.",
		admin_syncserver_dbcleanup_button: "Curăţare bază de date",
		admin_syncserver_dbcleanup_state_done: "Gata",
		admin_syncserver_dbcleanup_state_running: "Rulare",
		admin_syncserver_dbcleanup_started: "Pornit:",
		admin_syncserver_dbcleanup_ended: "Oprit:",
		admin_syncserver_dbcleanup_state: "Stare:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Magazii şterse:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Articol sincronizat şters:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Dispozitive şterse:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Dispozitive expirate:",

		admin_syncserver_publicSyncUrl: "URL public de servicii de sincronizare:",
		admin_syncserver_publicSyncUrl_hover: "Specificaţi URL-ul prin care alte aplicaţii pot comunica cu serviciile de sincronizare IBM Content Navigator. Formatul implicit pentru URL este http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Setări client pentru sincronizare:",
		admin_syncserver_managed_hover: "Utilizatorii nu pot modifica aceste setări în clientul IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Niveluri de folder de sincronizat",
		admin_syncserver_managed_subfolder_hover: "Dacă un utilizator sincronizează un folder, specificaţi numărul maxim de foldere care vor fi sincronizate. De exemplu, dacă un utilizator specifică 3 niveluri de folder, folderul pe care îl sincronizează utilizatorul şi 2 niveluri de subfoldere sunt sincronizate.<br><br>Asiguraţi-vă că mediul dumneavoastră este scalat pentru a susţine traficul de sincronizare creat de această setare.",
		admin_syncserver_managed_subfolder_all: "Toate subfolderele",
		admin_syncserver_managed_subfolder_none: "Niciun subfolder",
		admin_syncserver_managed_subfolder_no_more: "Niveluri limitate",
		admin_syncserver_managed_subfolder_levels: "foldere",
		admin_syncserver_managed_schedule: "Planificare sincronizare",
		admin_syncserver_managed_schedule_hover: "Asiguraţi-vă că mediul dumneavoastră este scalat pentru a susţine traficul de sincronizare creat de planificarea de sincronizare.<br><br>Intervalul maxim este de 24 de ore, sau 1440 de minute.<br><br>Utilizatorii pot ignora planificarea de sincronizare făcând clic pe <b>Sincronizare acum</b> în client.",
		admin_syncserver_managed_schedule_manual: "Sincronizare manuală",
		admin_syncserver_managed_schedule_continuous: "Sincronizare continuă",
		admin_syncserver_managed_schedule_every: "Sincronizare la intervale specificate",
		admin_syncserver_managed_schedule_minutes: "Minute",
		admin_syncserver_managed_schedule_hours: "Ore",

		// redaction codes
		admin_new_reason_code: "Motiv de redactare nou",		
		admin_reason_code_name_invalid: "Numele motivului de redactare nu poate conţine niciunul dintre caracterele următoare: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Descrierea nu poate conţine niciunul dintre caracterele următoare: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Descrierea nu poate conţine niciunul dintre caracterele următoare: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Numele nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Descriere:",
		admin_reason_code_applications_hover: "Lista de aplicaţii Datacap care fac referire la acest motiv de redactare.",
		admin_reason_code_applications: "Aplicaţii Datacap",
		admin_delete_confirmation_reason_codes: "Vreţi să ştergeţi motivele de redactare selectate?",
		admin_delete_confirmation_reason_code: "Vreţi să ştergeţi motivul de redactare selectat?",
		admin_reason_code_heading: "Motiv de redactare: <b>${0}</b>",
		admin_reason_code_list_instructions: "Motiv de redactare indică de ce datele sensibile sunt protejate prin ascunderea lor din vizualizare. Fiecare motiv indică un tip de date sensibile care sunt ascunse utilizatorilor generali.",
		admin_reason_code_instructions: "Puteţi să creaţi un motiv de redactare pentru fiecare tip de date sensibile. Puteţi apoi să utilizaţi acel motiv în politica de redactare pentru a defini cine vede acele date şi cine poate crea sau modifica redactările.",
		admin_reason_code_applications_label: "Aplicaţii Datacap",
		admin_reason_code_repositories: "Magazii",
		admin_reason_code_repositories_label: "Magazii",
		admin_reason_code_repositories_hover: "Lista magaziilor ICN care fac referire la acest motiv de redactare.",
		admin_reason_code_repositories_default_value: "Nesetat",
		admin_reason_code_description_label: "Descriere",
		admin_reason_code_applications_default_value: "Nesetat",
		admin_redaction_reasons: "Motive de redactare",
		admin_redactions: "Redactări bazate pe rol",
		admin_redactions_policies_roles: "Politici şi roluri",
		admin_reasons: "Motive",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID-ul nu poate fi editat.  El poate fi copiat în clipboard",
		// Role based administration
		admin_rba: "Administrare desktop bazată pe rol",
		admin_rba_mobile_access_enabled: "Acest desktop este activat pentru accesul de la dispozitive mobile.",
		admin_rba_mobile_access_disabled: "Acest desktop nu este activat pentru accesul de la dispozitive mobile.",
		admin_rba_confirm_delete_multiple: "Doriţi să ştergeţi rolurile de administrare selectate?",
		admin_rba_confirm_delete_single: "Doriţi să ştergeţi rolul de administrare selectat?",
		admin_rba_delete_multi_role_desktop: "Unul sau mai multe roluri pe care le-aţi selectat sunt alocate la un desktop. Trebuie să înlăturaţi rolurile de la desktopuri înainte de a le şterge.",
		admin_rba_delete_single_role_desktop: "Rolul pe care l-aţi selectat este alocat la desktop-ul ${0}. Trebuie să înlăturaţi rolul de la desktop înainte de a-l şterge.",
		admin_desktop: "Desktop",
		admin_rba_instructions: "Puteţi crea şi gestiona rolurile de administrare, care asociază privilegiile acordate la administratorii de desktop.",
		admin_rba_not_used: "${0} nu este utilizat în niciun desktop.",
		admin_rba_desktops: "<b>${0} este folosit în următoarele desktop-uri:</b>",
		admin_rba_new_role: "Rol nou",
		admin_rba_name_invalid: "Numele rolului de administrare nu poate conţine niciunul dintre caracterele următoare: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Descrierea nu poate conţine niciunul dintre caracterele următoare: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Descrierea nu poate conţine niciunul dintre caracterele următoare: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Numele nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Descriere:</b> ${0}",
		admin_rba_membership: "Apartenenţă:",
		admin_rba_general_priv: "General",
		admin_rba_appearance_priv: "Aspect",
		admin_rba_desktop_config_priv: "Configuraţie Desktop",
		admin_rba_app_name_priv: "Nume aplicaţie",
		admin_rba_theme_priv: "Temă",
		admin_rba_viewer_map_priv: "Mapare vizualizator",
		admin_rba_merge_split_priv: "Combinare şi divizare",
		admin_rba_sync_svc_priv: "Servicii sincronizare",
		admin_rba_menus_priv: "Meniuri",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Bare de unelte",
		admin_rba_ctx_menus_priv: "Meniuri contextuale",
		admin_rba_office_ribbon_priv: "Comenzi bară panglică MS Office",
		admin_rba_office_menues_priv: "Meniuri de context MS Office",
		admin_rba_addl_settings_priv: "Setări suplimentare",
		admin_rba_mobile_priv: "Mobile",
		admin_rba_add_doc_dlg_priv: "Dialog Adăugare document",
		admin_rba_doc_mgmt_priv: "Gestionare documente",
		admin_rba_def_redaction_priv: "Opţiune redactare implicită",
		admin_rba_add_photos_priv: "Adauge fotografii din biblioteca de fotografii şi din camera foto",
		admin_rba_time_stamp_priv: "Amprentă de timp",
		admin_rba_add_docs_folders_priv: "Adauge documente şi să creeze foldere în magazie",
		admin_rba_open_docs_priv: "Deschidă documente în alte aplicaţii",
		admin_rba_office_config_priv: "Configuraţie Office",
		admin_rba_tab_label_priv: "Etichetă filă IBM ECM",
		admin_rba_feature_sel_priv: "Selectare caracteristică",
		admin_rba_general_config_priv: "Configuraţie generală",
		admin_rba_favorites_priv: "Favorite",
		admin_rba_add_options_priv: "Adăugare opţiuni în Grupul de editare",
		admin_rba_browse_priv: "Răsfoire",
		admin_rba_outlook_int_priv: "Integrare Outlook",
		admin_rba_search_priv: "Căutare",
		admin_rba_layout_priv: "Dispunere",
		admin_rba_case_priv: "Caz",
		admin_rba_desktop_feat_priv: "Caracteristici de desktop",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Caracteristici afişate",
		admin_rba_branding_priv: "Branding",
		admin_rba_home_priv: "Acasă",
		admin_rba_main_color_priv: "Culoare principală",
		admin_rba_sec_color_priv: "Culoare secundară",
		admin_rba_teamspaces_priv: "Spaţii de echipă",
		admin_rba_rbr_priv: "Redactare bazată pe rol",
		admin_rba_et_mgr_priv: "Manager şabloane de intrare",
		admin_rba_policies_roles_priv: "Gestionare politici şi roluri",
		admin_rba_work_priv: "Lucru",
		admin_rba_reasons_priv: "Coduri motiv",
		admin_rba_tasks_priv: "Taskuri asincrone",
		admin_rba_auth_priv: "Autentificare",
		admin_rba_all_privs: "Toate privilegiile",
		admin_rba_some_privs: "Anumite privilegii",
		admin_rba_no_privs: "Fără privilegii",
		admin_add_users_groups_priv: "Adăugare utilizatori şi grupuri",
		admin_url_features_priv: "Gestionare caracteristici URL",
		admin_plugin_features_priv: "Gestionare caracteristici plug-in",
		admin_addl_components_priv: "Componente adiţionale",
		admin_global_toolbar_priv: "Bară de unelte globală",
		admin_status_bar_priv: "Bară de stare",
		admin_refresh_message: "Trebuie să vă reîmprospătaţi browser-ul pentru a folosi datele actualizate.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Trebuie să vă reîmprospătaţi browser-ul pentru a folosi desktopul implicit actualizat.",
		admin_desktop_refresh_message: "Trebuie să vă reîmprospătaţi browser-ul pentru a folosi desktopul actualizat.",
		admin_action_open: "Deschidere",
		admin_action_edit: "Editare",
		admin_action_copy: "Copiere",
		admin_action_delete: "Ştergere",
		admin_action_copy: "Copiere",
		admin_action_new: "Creare nou",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Acest ID este deja în uz. Trebuie să specificaţi un ID unic.",

		admin_searchable_properties_for: "Proprietăţi ce pot fi căutate pentru:",
		admin_repository_new: "Magazie nouă",
		admin_desktop_new: "Desktop nou",
		admin_desktop_file_documents: "Cere utilizatorilor să salveze foldere şi documente noi şi într-un folder",
		admin_desktop_file_documents_hover: "Selectaţi această opţiune dacă vreţi ca utilizatorii să trebuiască să selecteze un folder când adaugă articole în magazie. Dacă nu selectaţi această opţiune, utilizatorii pot adăuga documente (IBM FileNet P8) sau documente şi foldere (IBM Content Manager) fără a le îndosaria într-un folder.",
		admin_desktop_show_security_tab: "Afişare setări de securitate în timpul acţiunilor de adăugare şi înregistrare la intrare",
		admin_desktop_show_security_hover: "<b>Doar utilizatorii IBM FileNet P8.</b>  Selectaţi această opţiune dacă vreţi să permiteţi utilizatorilor să editeze securitatea documentelor şi a folderelor când adaugă sau înregistrează la intrare articole pe acest desktop.",
		admin_desktop_configure_security_inheritance: "Se permite utilizatorilor să configureze moştenirea de securitate a folderelor",
		admin_desktop_configure_security_inheritance_hover: "<b>Doar utilizatorii IBM FileNet P8.</b>  Selectaţi această opţiune dacă doriţi ca utilizatorii să poată personaliza accesul la articolele dintr-un folder prin controlul moştenirii securităţii folderelor. Dacă selectaţi această opţiune, utilizatorii pot specifica dacă utilizatorii sau grupurile pot moşteni securitatea de la:<ul><li>Un folder</li><li>Un folder şi subfolderele lui imediate</li><li>Un folder şi toate subfolderele sale</li></ul>",
		admin_desktop_appearance: "Aspect",
		admin_desktop_appearance_instruction: "Puteţi personaliza aspectul desktop-ului prin modificarea paginii de logare şi a banner-ului ce sunt afişate pentru desktop.",
		admin_desktop_layout: "Dispunere:",
		admin_desktop_layout_hover: "Dispunerea specifică ce caracteristici pot fi afişate în clientul web şi cum este aranjat conţinutul clientului web.<br><br><b>Sugestie:</b> Puteţi defini dispuneri personalizate creând plug-in-uri. Trebuie să înregistraţi plug-in-ul în unealta de administrare înainte de a putea selecta o dispunere personalizată.",
		admin_desktop_layout_default: "Implicit",
		admin_desktop_layout_custom: "Personalizat",
		admin_desktop_enable_workflow_email: "Activare acest desktop pentru notificarea e-mail a fluxului de lucru FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Doar utilizatorii FileNet P8. Selectaţi această opţiune dacă vreţi să permiteţi utilizatorilor să deschidă clientul web din URL-urile incluse în notificările e-mail generate de Process Engine.<br /><br />Dacă nu activaţi această opţiune pentru niciun desktop, utilizatorii nu se pot înregistra în clientul web din URL-urile din notificări.<br /><br />Dacă activaţi această opţiune pe mai multe desktop-uri şi mai mult de un desktop îndeplineşte criteriile specificate în URL-ul din notificare, clientul web foloseşte primul desktop care se potriveşte criteriilor. ",
		admin_desktop_prevent_create_new_search: "Împiedicare utilizatori să creeze căutări",
		admin_desktop_prevent_create_new_search_hover: "Această opţiune restricţionează utilizatorii să utilizeze numai căutări existente şi să nu creeze o căutare terminată deschis care ar putea să nu fie optimizată.</br></br>Această setare nu are impact asupra spaţiilor de echipă. Dreptul de a crea căutări într-un spaţiu de echipă este controlat de rolul pe care îl are un utilizator pe un spaţiu de echipă dat.",
		admin_desktop_prevent_create_new_unified_search: "Împiedicarea utilizatorilor să creeze căutări în mai multe magazii",
		admin_desktop_prevent_create_new_unified_search_hover: "Această opţiune restricţionează utilizatorii astfel încât aceştia să poată utiliza doar căutările pe mai multe magazii existente şi să nu poată crea căutări pe mai multe magazii care au o durată nedefinită care ar putea să nu fie optimizate.",
		admin_desktop_hide_entry_template_not_found_warning: "Ascundeţi avertismentul care este afişat când nu este găsit şablonul de intrare asociat",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Selectaţi această opţiune dacă vreţi să ascundeţi mesajul de avertizare care este afişat când sunt editate proprietăţile şi nu este găsit şablonul de intrare asociat cu articolul.",
		admin_desktop_show_class_role_security_selection: "Se permite utilizatorilor să configureze securitatea bazată pe rol în şabloanele de intrare",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Doar utilizatorii IBM FileNet P8.</b> Selectaţi această opţiune dacă doriţi ca utilizatorii să poată configura şabloanele de intrare să folosească securitatea bazată pe rol când setează securitatea pe documente şi/sau foldere folosind şabloane de intrare. Dacă selectaţi această opţiune, editorii de şabloane de intrare pot specifica dacă obiectele de securitate rol se aplică la o definiţie de şablon de intrare. ",
		admin_desktop_show_primary_multi_part: "Se deschide doar documentul primar în vizualizator",
		admin_desktop_show_primary_multi_part_hover: "<b>Doar utilizatorii IBM FileNet P8.</b> Selectaţi această opţiune dacă doriţi să se deschidă în vizualizator doar documentul primar. Documentele pot avea mai multe fişiere asociate cu ele. Această opţiune va deschide doar fişierul primar asociat cu acest document. ",
		admin_desktop_redaction_save_mode: "Opţiune implicită de redactare:",
		admin_desktop_redaction_save_mode_hover: "Selectaţi modul implicit de salvare pentru redactarea în vizualizatorul ViewONE Virtual:</br>* Întotdeauna să i se ceară utilizatorului să aleagă: va cauza afişarea dialogului la intrarea în modul redactare, pentru a-i întreba pe utilizatori dacă vor să facă înregistrarea la intrare ca versiune nouă, să creeze un document nou sau să descarce conţinut.</br>* Înregistrare la intrare ca versiune nouă: conţinutul redactat va fi întotdeauna salvat într-o versiune nouă a documentului existent.</br>* Salvare ca document complet nou: conţinutul redactat va fi întotdeauna salvat ca un document complet nou.</br>* Descărcare şi salvare pe client: conţinutul redactat va fi descărcat pe sistemul client.",
		admin_desktop_redaction_save_mode_user_select: "Întotdeauna să i se ceară utilizatorului să aleagă",
		admin_desktop_redaction_save_mode_new_version: "Înregistrare la intrare ca versiune nouă:",
		admin_desktop_redaction_save_mode_new_document: "Salvare ca document complet nou",
		admin_desktop_redaction_save_mode_local_content: "Descărcare şi salvare pe client",

		admin_desktop_document_add_mode: "Adăugare dialog de document:",
		admin_desktop_document_add_mode_hover: "Specificaţi dialogul de adăugare pentru a-l utiliza la adăugarea documentelor care sunt create de IBM Content Navigator:<ul><li>Document nou redactat permanent</li><li>Document nou combinat şi divizat</li><li>Document nou Microsoft Office</li><li>Document nou de serviciu de editare</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Adăugare document",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Adăugare document utilizând şablon de intrare",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Combinare şi divizare",
		admin_desktop_merge_and_split_enable_hover: "Specificaţi dacă doriţi ca utilizatorii care accesează acest desktop să poată combina sau diviza documente utilizând un vizualizator pentru suport.",

		admin_desktop_merge_and_split_show_checkin: "Afişare prompt utilizatorilor pentru a furniza valori de proprietăţi când înregistrează la intrare modificările la un document.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Dacă selectaţi această opţiune, este afişat dialogul de înregistrare la intrare când utilizatorii înregistrează la intrare modificările la un document în modul Compinare şi divizare.",

		admin_desktop_available_categories: "Caracteristici disponibile",
		admin_desktop_selected_categories: "Caracteristici selectate",

		admin_layout_banner_title: "Banner şi pagină de logare",
		admin_layout_title: "Dispunere",

		admin_desktop_application_name: "Nume aplicaţie:",
		admin_desktop_application_name_hover: "Specificaţi numele aplicaţiei pentru afişarea în banner.<br><br>Sugestie: Definiţi numele aplicaţiei pentru alte limbi din fila Etichete / Etichete Desktop.",
		admin_desktop_theme: "Temă:",
		admin_desktop_theme_hover: "Specificaţi dacă să utilizaţi tema IBM Content Navigator sau să utilizaţi o temă personalizată pentru acest desktop. Pentru a utiliza o temă personalizată, trebuie să creaţi o temă în secţiunea <b>Teme</b> a uneltei de administrare.",
		admin_desktop_login_logo: "Emblemă pagină de logare:",
		admin_desktop_login_logo_hover: "Dacă vreţi să modificaţi emblema care este afişată pe pagina de logare, puteţi specifica URL-ul unui fişier emblemă. Totuşi, este recomandat să utilizaţi o temă personalizată pentru a modifica emblema.",
		admin_desktop_login_logo_url_hover: "Introduceţi URL-ul fişierului emblemă. Dacă emblema este pe acelaşi server de aplicaţii web ca şi clientul web, introduceţi un URL relativ, de exemplu: /mycustomizations/login_logo.png<br><br>Emblema nu trebuie să fie mai mare de 200 de pixeli lăţime şi 150 de pixeli înălţime.<br><br>Se recomandă ca emblema să aibă un fundal transparent.",
		admin_desktop_banner_logo: "Emblemă banner:",
		admin_desktop_banner_logo_hover: "Dacă vreţi să modificaţi emblema care este afişată pe banner, puteţi specifica URL-ul unui fişier emblemă. Totuşi, este recomandat să utilizaţi o temă personalizată pentru a modifica emblema.",
		admin_desktop_banner_logo_url_hover: "Introduceţi URL-ul fişierului emblemă. Dacă emblema este pe acelaşi server de aplicaţii web ca şi clientul web, introduceţi un URL relativ, de exemplu: /mycustomizations/banner_logo.png<br><br>Emblema nu trebuie să fie mai mare de 72 de pixeli lăţime şi 36 de pixeli înălţime.<br><br>Se recomandă ca emblema să aibă un fundal transparent.",
		admin_desktop_banner_background_color: "Culoare fundal banner:",
		admin_desktop_banner_background_color_hover: "Dacă vreţi să modificaţi culoarea de fundal a banner-ului, puteţi specifica o culoare personalizată. Totuşi, este recomandat să utilizaţi o temă personalizată pentru a modifica culoarea banner-ului.",
		admin_desktop_banner_background_color_custom_hover: "Specificaţi culoarea banner-ului aplicaţiei drept culoare hexazecimală.",
		admin_desktop_banner_application_name_color: "Culoare text nume aplicaţie:",
		admin_desktop_banner_application_name_color_hover: "Dacă vreţi să modificaţi culoarea numelui aplicaţiei, puteţi specifica o culoare personalizată. Totuşi, este recomandat să utilizaţi o temă personalizată pentru a modifica culoarea numelui aplicaţiei.",
		admin_desktop_banner_application_name_color_custom_hover: "Specificaţi culoarea numelui aplicaţiei drept culoare hexazecimală.",
		admin_desktop_banner_menu_color: "Culoare pictogramă banner:",
		admin_desktop_banner_menu_color_hover: "Dacă modificaţi culoarea de fundal a banner-ului, ar putea fi nevoie să modificaţi şi schema de culori a pictogramelor de pe banner pentru a le face mai vizibile. Specificaţi dacă să se afişeze o versiune mai luminoasă sau mai întunecată a pictogramelor banner-ului.<br><br>Totuşi, este recomandat să utilizaţi o temă personalizată pentru a modifica culoarea pictogramelor.",
		admin_desktop_login_page_content: "Conţinut pagină de logare:",
		admin_desktop_login_page_content_hover: "Dacă vreţi să afişaţi informaţii suplimentare pe pagina de logare, cum ar fi anunţuri despre întreruperile sistemului sau unde pot obţine ajutor utilizatorii cu nume de utilizator şi parole, puteţi specifica URL-ul conţinutului pe care vreţi să-l afişaţi.",
		admin_desktop_login_page_content_url_hover: "Introduceţi URL-ul conţinutului paginii de logare. În cazul în care conţinutul este pe acelaşi server de aplicaţii web ca şi clientul web, introduceţi un URL relativ, de exemplu: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Reguli parolă:",
		admin_desktop_password_rules_hover: "Dacă vreţi să furnizaţi utilizatorilor indicaţii pentru crearea parolelor, cum ar fi caracterele restricţionate sau numărul minim de caractere, puteţi specifica URL-ul unei pagini care vă conţine regulile parolelor.",
		admin_desktop_password_rules_url_hover: "Introduceţi URL-ul conţinutului regulilor de parole. În cazul în care conţinutul este pe acelaşi server de aplicaţii web ca şi clientul web, introduceţi un URL relativ, de exemplu: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL ajutor pentru utilizator final:",
		admin_desktop_help_url_hover: "Puteţi utiliza ajutorul care este livrat cu IBM Content Navigator sau puteţi redirecta utilizatorii la conţinutul de ajutor personalizat, efectuând una din următoarele acţiuni:<br><br><ul><li>Direcţionarea către un sistem de ajutor personalizat</li><li>Adăugarea de ajutor la instanţa IBM Knowledge Center care este implementată cu IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Introduceţi URL-ul sistemului de ajutor personalizat. IBM Content Navigator adaugă index.jsp?content=/com.ibm.usingeuc.doc/ şi un nume de fişier la sfârşitul URL-ului specificat.  Pentru ca legăturile \"Aflaţi mai multe\" din interfaţă să funcţioneze, sistemul de ajutor trebuie să folosească aceleaşi nume de fişiere ca şi ajutorul integrat pentru utilizator. ",
		admin_desktop_deprecated_appearance_title: "Setarea depreciată",
		admin_desktop_deprecated_appearance_instructions: "Dacă folosiţi o temă personalizată, aceste setări sunt înlocuite de tema personalizată. Va trebui să migraţi aceste setări la o temă personalizată, care furnizează mai multă stilizare detaliată decât setările din această secţiune. În plus, o temă personalizată poate fi folosită de mai multe desktop-uri.",

		admin_desktop_plugins_title: "Activaţi sau dezactivaţi plug-in-urile pentru acest desktop.",
		admin_desktop_plugins_enable_all_plugins: "Activare toate plug-in-urile pentru utilizarea cu acest desktop",
		admin_desktop_plugins_select_plugins: "Selectare plug-in-urile implementate pentru activare pentru utilizarea cu acest desktop",
		admin_desktop_plugins_select_plugin: "Selectare plug-in",

		admin_desktop_layout_features: "Caracteristici afişate:",
		admin_desktop_layout_features_hover: "Selectaţi caracteristicile la care doriţi ca utilizatorii să aibă acces din acest desktop. Caracteristicile sunt afişate în ordinea în care sunt listate.<br><br>Atunci când selectaţi o caracteristică, puteţi personaliza unele comportamente ale caracteristicii din desktop, cum ar fi magazia implicită ce este selectată pentru caracteristică.",
		admin_desktop_layout_default_repository: "Magazie implicită:",
		admin_desktop_layout_default_repository_layout_hover: "Specificaţi ce magazie este selectată implicit atunci când utilizatorii deschid această caracteristică.",
		admin_desktop_layout_document_thumbnails: "Miniaturi documente:",
		admin_desktop_layout_document_thumbnails_hover: "Specificaţi dacă să se afişeze miniaturi pentru documente în panoul Informaţii document.<br><br>Afişarea miniaturilor poate încetini performanţa clientului web.",
		admin_desktop_layout_show_filmstrip_view: "Vizualizare Diafilm:",
		admin_desktop_layout_show_filmstrip_view_hover: "Specificaţi dacă permiteţi utilizatorilor să comute afişarea listei de conţinut cu vizualizarea Diafilm.<br><br>Vizualizarea Diafilm generează o previzualizare pentru fiecare document selectat de un utilizator. Totuşi, utilizând vizualizarea Diafilm poate duce la încetinirea performanţei clientului web. Suplimentar, trebuie să configuraţi mai întâi vizualizatorul de conversie HTML pentru a vedea previzualizările documentului.",
		admin_enabled: "Activare",
		admin_disabled: "Dezactivare",
		admin_include: "Includere",
		admin_exclude: "Excludere",
		admin_layout_teamspaces_default_repository: "Spaţii de echipă:",
		admin_layout_entry_templates_default_repository: "Şabloane de intrare:",
		admin_layout_other_features_default_repository: "Căutare şi răsfoire:",
		admin_layout_work_default_repository: "Lucru:",
		admin_layout_default_feature: "Caracteristică implicită:",
		admin_default_category_placeholder: "Selectaţi o caracteristică",
		admin_layout_default_feature_hover: "Specificaţi ce caracteristică este afişată atunci când utilizatorii de înregistrează la intrare în acest desktop.",
		admin_layout_default_feature_warning: "Modificarea caracteristicii principale poate afecta timpul necesar pentru a încărca aplicaţia.",
		admin_layout_feature_list_header: "Caracteristică",
		admin_layout_show_statusbar: "Bara de stare:",
		admin_layout_show_statusbar_hover: "Specificaţi dacă să fie afişată bara de stare în partea de jos a desktop-ului.<br><br>Dacă ascundeţi bara de stare, utilizatorii nu pot vizualiza informaţiile despre evenimentele fără eroare, cum ar fi:<ul><li>Documentul a fost adăugat în magazie.</li><li>Căutarea a returnat 59 de documente.</li></ul>",
		admin_layout_show_magazineview: "Vizualizare Revistă",
		admin_layout_show_magazineview_hover: "Specificaţi dacă să le fie permis utilizatorilor să comute afişarea listei de conţinut în vizualizarea Revistă.<br><br>Vizualizarea revistă măreşte înălţimea fiecărei intrări din lista conţinut, ceea ce reduce numărul de articole ce pot fi afişate în lista conţinut în acelaşi timp.",
		admin_layout_show_detailsview: "Vizualizare detalii:",
		admin_layout_show_detailsview_hover: "Specificaţi dacă să se permită utilizatorilor să comute afişarea listei de conţinut la vizualizarea detaliilor.<br><br>Vizualizarea detaliilor maximizează numărul de linii vizibile în lista de conţinut.",
		admin_feature_config_docinfopane_label: "Panou de informaţii document:",
		admin_feature_config_docinfopane_hoverhelp: "Specifică dacă utilizatorii pot accesa panoul cu informaţii document în această caracteristică.",
		admin_feature_config_docinfopane_default_label: "Comportament implicit:",
		admin_feature_config_docinfopane_expanded: "Expandat",
		admin_feature_config_docinfopane_collapsed: "Restrâns",
		admin_feature_config_docinfopane_expand_on_select: "Expandare atunci când articolul este selectat",
		admin_layout_features_title: "Caracteristici de desktop",
		admin_layout_features_instructions: "Specificaţi ce caracteristici pot accesa utilizatorii din acest desktop.  Suplimentar, puteţi personaliza comportamentul fiecărei caracteristici ce este inclusă în desktop.",
		admin_layout_components_title: "Componente suplimentare de desktop",
		admin_layout_components_instructions: "Puteţi dezactiva unele dintre componentele desktop-ului dacă doriţi o interfaţă mai simplificată sau dacă doriţi să îmbunătăţiţi performanţa clientului web.",
		admin_layout_featureconfig_instructions: "Selectaţi o caracteristică de configurat",
		admin_layout_featureconfig_no_configuration: "Nu este disponibilă configurarea caracteristicilor.",
		admin_layout_featureconfig_label: "Configurare pentru caracteristica ${0}",
		admin_layout_featureconfig_title: "Configurare caracteristică",
		admin_layout_featureconfig_taskManagerURL: "Pentru a utiliza această caracteristică, trebuie să activaţi şi să configuraţi IBM Content Navigator pentru conectarea la serviciul de manager de taskuri. Activaţi serviciul managerului de taskuri în secţiunea <b>Setări</b> a acestei unelte de administrare.",
		admin_feature_config_show_my_checkouts_label: "Panoul Înregistrările mele la ieşire",
		admin_feature_config_show_my_checkouts_hoverhelp: "Panoul Înregistrările mele la ieşire le permite utilizatorilor să ruleze o căutare pentru toate articolele pe care le-au înregistrat la ieşire pe o anumită magazie. Specificaţi dacă utilizatorii pot accesa panoul Înregistrările mele la ieşire din caracteristica Acasă.<br/><br/><b>Restricţie:</b> Această caracteristică necesită să aveţi cel puţin o magazie IBM Content Manager, IBM FileNet P8 sau OASIS CMIS asociată cu acest desktop.",

		admin_feature_config_default_repository_icon_text: "Magazie implicită",
		admin_show: "Afişare",
		admin_hide: "Ascundere",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Nu puteţi înlătura caracteristica Administrare din Admin Desktop",
		admin_warning_label: "Avertisment:",
		admin_layout_show_globaltoolbar: "Bară de unelte globală:",
		admin_layout_show_globaltoolbar_hover: "Specificaţi dacă să afişaţi bara de unelte în banner-ul din partea de sus a desktop-ului.<br><br>Bara de unelte globală include acţiuni ce permit utilizatorilor să adauge documente, foldere şi reţineri în magazie. Acţiunile disponibile depind de magazia la care este conectat utilizatorul.",
		admin_interface_text_name_label: "Tip etichetă",

		admin_interface_text_label_description: "Puteţi personaliza textul care este afişat în anumite zone ale clientului web. Etichetele sunt afişate pentru toate magaziile şi desktop-urile din configuraţia dumneavoastră. Introduceţi textul pe care vreţi să-l vedeţi în interfaţă în câmpul Etichetă curentă.<br><br><b>Important:</b> Nici o modificare pe care o faceţi asupra etichetelor nu se va afişa în unealta de administrare.",
		admin_interface_text_label_action: "Etichete acţiune",
		admin_interface_text_label_action_description: "Etichetele de acţiuni sunt afişate pe butoane şi în meniuri prin tot clientul web. Puteţi defini etichete de acţiune diferite pentru fiecare tip de magazie.",
		admin_interface_text_label_application: "Etichete aplicaţie",
		admin_interface_text_label_application_description: "Etichetele de aplicaţie sunt afişate prin tot clientul web.",
		admin_interface_text_label_system: "Etichete proprietate sistem",
		admin_interface_text_label_system_description: "Proprietăţile de sistem care sunt afişate variază în funcţie de magazie. Puteţi personaliza etichetele care sunt afişate pentru proprietăţile sistemului care sunt asociate cu documentele şi folderele din magaziile dumneavoastră.",
		admin_interface_text_label_desktop: "Etichete desktop",
		admin_interface_text_label_desktop_description: "Dacă aţi personalizat numele aplicaţiei într-un desktop, puteţi personaliza acel nume în alte limbi decât engleza. De asemenea, puteţi personaliza numele spaţiilor de aplicaţii IBM FileNet P8 într-un desktop.",

		admin_interface_text_system_label: "Etichetă sistem",
		admin_interface_text_current_label: "Etichetă curentă",
		admin_interface_text_default_label_heading: "Etichetă implicită",
		admin_interface_text_default_label: "Etichetă implicită:",
		admin_interface_text_displayed_in_label: "Afişată pentru",
		admin_interface_text_displayed_in_document_folder: "Documente şi foldere",
		admin_interface_text_displayed_in_document: "Documente",
		admin_interface_text_displayed_in_folder: "Foldere",
		admin_interface_text_displayed_in_admin_application_space: "Etichetă a spaţiului de aplicaţii",
		admin_interface_text_displayed_in_desktop: "Etichetă a caracteristicii pentru mobil",
		admin_interface_text_displayed_in_admin_application_name: "Nume aplicaţie",

		admin_new_desktop: "Desktop nou",
		admin_new_repository: "Magazie nouă",
		admin_new_menu: "Meniu nou",
		admin_new_viewer_mapping: "Mapare vizualizator nouă",
		admin_new_mapping_label: "Mapare nouă",
		admin_new_icon_mapping: "Mapare pictogramă nouă",
		admin_viewer_mapping_list_instructions: "Puteţi configura ce vizualizatoare foloseşte clientul web pentru a afişa diferite tipuri de conţinut. O mapare vizualizator defineşte ce tipuri MIME sunt asociate cu fiecare vizualizator pe care vreţi să-l folosiţi. Puteţi crea mai multe mapări de vizualizator dacă vreţi să folosiţi vizualizatoare diferite pentru desktop-uri diferite.",
		admin_viewer_mapping_instructions: "Specificaţi vizualizatoarele pe care vreţi să le folosiţi pentru a deschide fişiere. Dacă vreţi să folosiţi un vizualizator personalizat, trebuie să integraţi vizualizatorul ca plug-in înainte de a-l putea adăuga în maparea vizualizatorului.<br><br><b>Important:</b> Când un utilizator deschide un document, clientul web caută în lista de mapări a vizualizatorului pentru a găsi primul vizualizator ce poate deschide documentul pe baza sistemului de operare rulat de utilizator şi magazia la care este conectat utilizatorul. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Plug-in nou",
		admin_menu_list_instructions: "Puteţi crea bare de unelte personalizate şi meniuri contextuale pentru a controla ce acţiuni sunt disponibile utilizatorilor. Nu  puteţi edita meniurile implicite, dar puteţi crea copii ale meniurilor existente pentru a restricţiona acţiunile care sunt disponibile sau pentru a adăuga acţiuni personalizate care sunt definite în plug-in-uri.<br><br>Dacă vreţi să creaţi un nou tip de meniu, trebuie să definiţi meniul într-un plug-in.",
		admin_menu_id_hover: "ID-ul trebuie să fie unic şi nu puteţi modifica ID-ul după ce salvaţi meniul.<br><br>ID-ul poate conţine doar caractere alfanumerice şi este sensibil la majuscule.",
		admin_menu_id_disabled_hover: "ID-ul meniului nu poate fi modificat. Dacă vreţi să folosiţi un alt ID, trebuie să creaţi un meniu nou.",
		admin_menu_default_instructions: "Nu puteţi edita acest meniu pentru că este un meniu implicit. Dacă vreţi să editaţi acest meniu, trebuie să creaţi o copie a meniului.",
		admin_menu_toolbar_instructions: "Puteţi restricţiona acţiunile care sunt disponibile pentru această bară de unelte sau puteţi adăuga acţiuni personalizate care sunt definite într-un plug-in. De asemenea, puteţi organiza acţiunile, adăugând separatoare în bara de unelte.",
		admin_menu_toolbar_custom_instructions: "Această bară de unelte este definită de un plug-in. Dacă vreţi să editaţi această bară de unelte, trebuie să actualizaţi plug-in-ul sau să creaţi o copie a barei de unelte.",
		admin_menu_context_menu_instructions: "Puteţi restricţionat acţiunile care sunt disponibile pentru acest meniu contextual sau puteţi adăuga acţiuni personalizate care sunt definite într-un plug-in. De asemenea, puteţi organiza acţiunile, adăugând separatoare şi submeniuri în meniul contextual.",
		admin_menu_context_menu_custom_instructions: "Acest meniu contextual este definit de un plug-in. Dacă vreţi să editaţi acest meniu contextual, trebuie să actualizaţi plug-in-ul sau să creaţi o copie a meniului contextual.",
		admin_desktop_list_instructions: "Puteţi crea mai multe desktop-uri pentru a oferi acces diferit utilizatorişor la conţinutul de care au nevoie. De exemplu, puteţi crea un desktop care permite utilizatorilor doar să caute conţinut sau un desktop care oferă acces utilizatorilor la o singură magazie. ",
		admin_plugin_updated: "Configuraţia plug-in-ului selectat s-a modificat. Trebuie să vă reîmprospătaţi browser-ul pentru ca modificările dumneavoastră să aibă efect.",
		admin_repository_ci_heading: "Magazie integrator conţinut: <b>${0}</b>",
		admin_repository_p8_heading: "Magazie FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Magazie Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Magazie Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Magazie Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Magazie Box: <b>${0}</b>",
		admin_repository_generic_heading: "Magazie: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Vreţi să ştergeţi desktop-urile selectate?\n${0} desktop-uri sunt selectate.",
		admin_delete_confirmation_menus: "Vreţi să ştergeţi meniurile selectate?\n${0} meniuri sunt selectate.",
		admin_delete_confirmation_repositories: "Vreţi să ştergeţi magaziile selectate?\n${0} magazii sunt selectate.",
		admin_delete_confirmation_viewer_mappings: "Vreţi să ştergeţi mapările de vizualizator selectate?  ${0} mapări sunt selectate.",
		admin_delete_confirmation_icon_mappings: "Vreţi să ştergeţi configuraţiile de pictograme selectate?\n${0} configuraţii de pictograme sunt selectate.",
		admin_delete_confirmation_plugins: "Vreţi să ştergeţi plug-in-urile selectate?\n${0} plug-in-uri sunt selectate.",
		admin_delete_confirmation: "Vreţi să ştergeţi articolele selectate?\n${0} articole sunt selectate.",

		admin_viewer_mapping_id_hover: "ID-ul trebuie să fie unic şi nu puteţi modifica ID-ul după ce salvaţi maparea vizualizatorului.<br><br>ID-ul poate conţine doar caractere alfanumerice şi este sensibil la majuscule.",
		admin_viewer_mapping_id_disabled_hover: "ID-ul mapării de vizualizator nu poate fi modificat. Dacă vreţi să folosiţi un alt ID, trebuie să creaţi o nouă mapare de vizualizator.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Desktop-ul implicit nu poate fi şters.",

		admin_desktop_heading: "Desktop: <b>${0}</b>",
		admin_menu_toolbar_heading: "Bară de unelte: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Bară de unelte personalizată: <b>${0}</b>",
		admin_menu_context_menu_heading: "Meniu contextual: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Meniu contextual personalizat: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Un plug-in poate să fie fie un fişier jar, fie un fişier clasă compilat.<br/><br/><b>Important:</b> Serverul pentru  aplicaţii Web IBM Content Navigator trebuie să poată accesa fişierul plug-in din sistemul de fişiere local printr-un URL.",
		admin_plugin_list_instructions: "Trebuie să folosiţi unealta de administrare pentru a înregistra plug-in-uri pentru clientul web. Dacă un plug-in necesită configurare suplimentară, parametrii de configurare sunt afişaţi după ce înregistraţi plug-in-ul.<br /><br /><b>Important:</b> Dacă editaţi un plug-in la care se face referire în altă zonă a uneltei de administrare, cum ar fi un meniu, aţi putea întâlni probleme cu comportamentul plug-in-ului. În plus, plug-in-urile sunt invocate în ordinea în care sunt menţionate. Dacă un plug-in trebuie rulat înaintea altui plug-in, asiguraţi-vă că plug-in-urile sunt menţionate în ordinea în care trebuie rulate.",
		admin_plugin_cannot_delete: "Plug-in-urile selectate nu pot fi şterse, deoarece unele plug-in-uri depind de ele.<br/>Plug-in-uri selectate: ${0}<br/>Plug-in-uri dependente: ${1}",
		admin_plugin_cannot_disable: "Plug-in-urile selectate nu pot fi dezactivate, deoarece unele plug-in-uri depind de ele.<br/>Plug-in-uri selectate: ${0}<br/>Plug-in-uri dependente: ${1}",
		admin_plugin_cannot_add: "Plug-in-ul nu poate fi adăugat, deoarece unele plug-in-uri de care depinde lipsesc sau sunt dezactivate. Plug-in-uri lipsă sau dezactivate: ${0}",
		admin_plugin_cannot_enable: "Plug-in-urile selectate nu pot fi activate, deoarece unele plug-in-uri de care depind lipsesc sau sunt dezactivate.<br/>Plug-in-uri selectate: ${0}<br/>Plug-in-uri lipsă sau dezactivate: ${1}",
		admin_plugin_save_order: "Salvare ordine",
		admin_plugin_load: "Încărcare",
		admin_plugin_load_hover: "Specificaţi URL-ul plug-in-ului",
		admin_plugin_file_hover: "Dacă fişierul jar plug-in se află pe sistemul de fişiere local, puteţi introduce calea complet calificată sau URL-ul fişierului plug-in. Dacă fişierul jar plug-in se află pe un server la distanţă, trebuie să introduceţi URL-ul fişierului plug-in.",
		admin_plugin_classfolderpath_hover: "Fişierul de clasă compilat trebuie să fie pe serverul de aplicaţii web IBM Content Navigator.<br/><br/>Introduceţi calea complet calificată a  folderului unde clasele pentru plug-in sunt compilate şi generate.<br/><br/>Calea nu trebuie să conţină numele pachetului din care face parte clasa plug-in. De exemplu, calea implicită pentru clasa plug-in dată exemplu în Windows este C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Introduceţi numele complet al clasei Java în fişierul clasei care ar trebui să fie încărcat şi numit la fel ca clasa plug-in.<br/>De exemplu, numele clasei pentru plug-in-ul dat exemplu este com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Fişierul JAR plug-in nu a fost găsit la URL-ul specificat. Asiguraţi-vă că fişierul JAR este pe serverul de aplicaţii web şi că URL-ul şi numele fişierului sunt corecte.",
		admin_plugin_for_repository_not_loaded: "Nu puteţi edita această magazie. Plug-in-ul ce defineşte şi suportă acest tip de magazie nu este încărcat. În fila Plug-in-uri, editaţi plug-in-ul pentru a verifica dacă este configurat corect şi dacă este încărcat.",
		admin_plugin_repository_types: "Tipuri de magazii:",
		admin_plugin_viewers: "Vizualizatoare:",
		admin_plugin_features: "Caracteristici:",
		admin_plugin_layouts: "Dispuneri:",
		admin_plugin_not_available: "Indisponibil",
		admin_plugin_config_params: "Parametri de configurare:",
		admin_viewer_def_heading: "Mapare vizualizator: <b>${0}</b>",
		admin_users_and_groups: "Utilizatori şi grupuri",
		admin_general: "General",
		admin_logging: "Jurnalizare",
		admin_authentication: "Autentificare",		
		admin_rolebase_role: "Rol:",
		admin_settings_logging_instructions: "Puteţi folosi jurnalizarea pentru a depana problemele cu clientul web. Puteţi rafina jurnalizarea dacă ştiţi că o problemă apare într-o clasă Java specifică sau pentru un anumit utilizator. Informaţiile erorii sunt scrise în fişierele jurnal de erori ale serverului dumneavoastră de aplicaţii web.",
		admin_settings_logging_instructions2: "<b>Setări jurnalizare de depanare</b><br />Dacă ştiţi că o problemă apare pentru un anumit utilizator sau maşină gazdă client, vă puteţi ţinti jurnalizarea de depanare spre acel utilizator sau maşină. Puteţi captura informaţiile de depanare într-un mediu de producţie fără a avea un impact semnificativ asupra performanţei sistemului dumneavoastră.<br /><br /><b>Important:</b> Dacă specificaţi un utilizator sau o maşină gazdă client, această setare suprascrie toate celelalte setări de jurnalizare. După ce capturaţi informaţiile de care aveţi nevoie, setaţi această opţiune la <b>Fără</b> pentru a continua jurnalizarea standard pentru mediul dumneavoastră.",
		admin_settings_export_config_hover: "Exportaţi informaţiile de configurare sistem curente într-un fişier de folosit cu IBM Support Assistant Data Collector. Fişierul este salvat în locaţia care este definită de proprietatea de sistem Java user.home.",
		admin_logging_level: "Jurnalizare la nivelul aplicaţiei:",
		admin_logging_level_hover: "Nivelurile de jurnalizare afectează cantitatea de informaţii care este memorată pe serverul dumneavoastră. Selecţia <b>Eroare</b> capturează cea mai mică cantitate de informaţii de jurnalizare. Selecţia <b>Depanare</b> capturează cele mai multe informaţii.<br /><br />Nu specificaţi <b>Depanare</b> într-un mediu de producţie decât dacă sunteţi instruiţi să faceţi asta de către Suportul software IBM.",
		admin_logging_level_0: "Fără jurnalizare",
		admin_logging_level_1: "Eroare",
		admin_logging_level_2: "Avertisment",
		admin_logging_level_3: "Informaţii",
		admin_logging_level_4: "Depanare",
		admin_logging_classes: "Jurnalizare la nivel de clasă Java:",
		admin_logging_classes_hover: "Implicit, toate clasele şi pachetele Java sunt incluse în istoricele de eroare ale serverului de aplicaţii web. Totuşi, puteţi specifica ce clase sau pachete să fie incluse sau excluse din înregistrarea dumneavoastră în istoric. Puteţi folosi istoricele de erori ale serverului de aplicaţii web pentru a determina ce clase să includeţi sau să excludeţi.<br><br>Dacă ştiţi că o problemă apare într-o anumită clasă, puteţi include anume acea clasă în fişierele istorice. Când includeţi o clasă în istoricele de erori, toate celelalte clase sunt excluse din fişierul istoric.<br><br>Dacă ştiţi că o problemă nu apare într-o clasă şi vreţi să reduceţi dimensiunea fişierului istoric, puteţi exclude acea clasă din fişierele istoric.",
		admin_logging_classes_include: "Includere",
		admin_logging_classes_include_all: "Toate clasele",
		admin_logging_classes_include_specified: "Anumite clase",
		admin_logging_classes_include_specified_msg: "Specificaţi ce clase să se includă.",
		admin_logging_classes_exclude: "Excludere",
		admin_logging_classes_exclude_none: "Fără",
		admin_logging_classes_exclude_specified: "Anumite clase",
		admin_logging_classes_exclude_specified_msg: "Specificaţi ce clase să se excludă.",
		admin_logging_debug: "Jurnalizare de depanare pentru:",
		admin_logging_debug_hover: "<b>Important:</b> Examinaţi fişierele istoric ale serverului de aplicaţii înainte de a specifica fie o adresă IP a maşinii gazdă a clientului, fie un utilizator. Valoarea pe care o furnizaţi trebuie să se potrivească valorii care este afişată în fişierul istoric.",
		admin_logging_debug_none: "Fără (implicit)",
		admin_logging_debug_host: "Maşini gazdă ale clientului (adrese IP)",
		admin_logging_debug_host_msg: "Specificaţi adresa IP a unei sau a mai multor maşini client pentru care vreţi să jurnalizaţi informaţiile de depanare. Folosiţi o virgulă pentru a separa adresele IP.<br /><br /><b>Important:</b> Examinaţi fişierele istorice ale serverului de aplicaţii web înainte de a specifica o adresă IP. Valoarea pe care o furnizaţi trebuie să se potrivească valorii care este afişată în fişierul istoric.",
		admin_logging_debug_user: "Utilizatori",
		admin_logging_debug_user_msg: "Specificaţi numele de utilizator al unuia sau al mai multor utilizatori pentru care vreţi să jurnalizaţi informaţiile de depanare. Folosiţi o virgulă pentru a separa numele de utilizator.<br /><br /><b>Important:</b> Examinaţi fişierele istorice ale serverului de aplicaţii web înainte de a specifica un nume de utilizator. Valoarea pe care o furnizaţi trebuie să se potrivească valorii care este afişată în fişierul istoric.",

		admin_office_settings_logging_instructions: "Puteţi utiliza jurnalizarea pentru a depana problemele cu IBM Content Navigator for Microsoft Office. Vă puteţi rafina jurnalizarea dacă ştiţi că o problemă apare într-o anumită clasă sau pentru un anumit utilizator. Informaţiile de eroare sunt scrise în fişierele istoric ale aplicaţiei în IBM Content Navigator pentru maşinile gazdă ale clientului Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Setări jurnalizare de depanare</b><br />Dacă ştiţi că o problemă apare pentru o anumită maşină gazdă a unui client sau IBM Content Navigator pentru utilizatorul Microsoft Office, vă puteţi direcţiona jurnalizarea de depanare către acea maşină sau utilizator. Puteţi captura informaţiile de depanare într-un mediu de producţie fără a avea un impact semnificativ asupra performanţei sistemului dumneavoastră. <br /><br /><b>Important:</b> Dacă specificaţi un utilizator sau o maşină gazdă client, această setare suprascrie toate celelalte setări de jurnalizare. După ce capturaţi informaţiile de care aveţi nevoie, setaţi această opţiune pe <b>Fără</b> pentru a relua jurnalizarea standard pentru mediul IBM Content Navigator pentru Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Important:</b> Examinaţi fişierele istoric ale maşinii client înainte de a specifica fie o adresă IP a maşinii gazdă a clientului, fie un utilizator. Valoarea pe care o furnizaţi trebuie să se potrivească valorii care este afişată în fişierul istoric. ",
		admin_office_logging: "Jurnalizare în Office",
		admin_office_logging_classes: "Jurnalizare la nivelul clasei:",
		admin_office_logging_classes_hover: "Implicit, toate clasele şi pachetele Java sunt incluse în istoricele de eroare ale serverului de aplicaţii IBM. Totuşi, puteţi specifica ce clase sau pachete să fie incluse sau excluse din înregistrarea dumneavoastră în istoric. Puteţi utiliza logurile maşinii client pentru a determina ce clase să includeţi sau să excludeţi.<br /><br />Dacă ştiţi că o problemă apare într-o anumită clasă, puteţi include anume acea clasă în fişierele istorice. Atunci când includeţi o clasă din logurile dumneavoastră de eroare, toate celelalte clase sunt excluse din fişierele istoric. <br /><br />Dacă ştiţi că o problemă nu apare într-o clasă şi vreţi să reduceţi dimensiunea fişierului istoric, puteţi exclude acea clasă din fişierele istoric. ",
		admin_office_logging_debug_hover: "<b>Important:</b> Examinaţi fişierele istoric ale maşinii client înainte de a specifica fie o adresă IP a maşinii gazdă a clientului, fie un utilizator. Valoarea pe care o furnizaţi trebuie să se potrivească valorii care este afişată în fişierul istoric.",
		admin_office_logging_additional_settings: "Setări suplimentare:",
		admin_office_logging_additional_settings_hover: "Specificaţi setările suplimentare",
		admin_office_logging_file_size: "Dimensiunea fişierului istoric",
		admin_office_logging_file_size_hover: "Specificaţi dimensiunea la care IBM Content Navigator for Microsoft Office creează un nou fişier istoric. Atunci când un fişier istoric atinge dimensiunea maximă, logul curent este redenumit pentru a include data (cu formatul AAAALLZZ) şi un număr de incrementare fişier (de exemplu, ICNExcelAddin-20121116-5.log) şi este creat noul fişier istoric. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Afişarea stivei de urmărire în dialoguri",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Puteţi afişa opţional informaţii despre stiva de urmărire în dialogurile dumneavoastră de mesaje pentru a facilita rezoluţia problemei. Chiar dacă nu activaţi această opţiune, informaţii detaliate despre stiva de urmărire sunt incluse întotdeauna în logurile de eroare ale IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Pictograme stare",
		admin_icon_state_icon: "Pictogramă stare",
		admin_icon_state: "Stare",
		state_contains_label: "Starea conţine",
		admin_icon_state_instructions: "Puteţi personaliza pictogramele care sunt afişate lângă documente, foldere şi articole de lucru în magaziile dumneavoastră.<br><br><b>Sugestie:</b> Puteţi specifica dacă să se afişeze pictograme de stare pentru fiecare magazie din mediul dumneavoastră.",
		admin_icon_state_dialog_title: "Mapare pictograme stare",
		admin_icon_state_dialog_instructions: "Puteţi mapa starea selectată la o pictogramă predefinită care este furnizată cu clientul web sau la o pictogramă personalizată.",

		admin_icon_mapping_twisty: "Pictograme tip MIME",
		admin_icon_mapping_dialog_title: "Mapare pictograme",
		admin_icon_mapping: "Mapare pictograme",
		admin_icon_mapping_instructions: "Puteţi mapa o listă de tipuri MIME la o pictogramă predefinită care este furnizată cu clientul web sau la o pictogramă personalizată.",
		admin_icon_mapping_list_instructions: "Puteţi personaliza pictogramele care sunt afişate pentru diferitele tipuri MIME care sunt memorate în magazia dumneavoastră. Clientul web foloseşte pictogramele în ordinea în care sunt menţionate. Dacă un tip MIME este menţionat mai mult de o dată, se foloseşte prima pictogramă care este asociată cu acel tip MIME.",
		admin_icon_mapping_icon_label: "Ce pictogramă vreţi să folosiţi?",
		admin_icon_mapping_file_name: "Pictogramă personalizată:",
		admin_icon_mapping_file_name_heading: "Pictogramă personalizată",
		admin_icon_mapping_file_name_placeholder: "Specificaţi URL-ul pictogramei",
		admin_icon_mapping_file_name_hover: "Introduceţi URL-ul pictogramei. Dacă pictograma este pe acelaşi server de aplicaţii web ca şi clientul web, introduceţi un URL relativ. De exemplu: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Pictogramă predefinită:",
		admin_icon_mapping_class_name_heading: "Pictogramă predefinită",
		admin_icon_mapping_class_name_hover: "Selectaţi o pictogramă care este furnizată cu clientul web.",
		admin_icon_mapping_class_name_placeholder: "Selectaţi o pictogramă",

		admin_p8_instructions: "Aceste informaţii sunt partajate de toate magaziile FileNet Content Manager ce sunt configurate pentru clientul web.",
		admin_p8_collaboration_config: "Configuraţie opţională FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Puteţi configura aceşti parametrii dacă doriţi să ajustaţi FileNet Collaboration Services pentru mediul dumneavoastră IBM FileNet P8.",
		admin_p8_use_url_incoming: "Utilizaţi URL-ul pentru cererile primite pentru a genera URL-uri de răspuns:",
		admin_p8_use_url_incoming_hover: "În majoritatea mediilor FileNet Collaboration Services, puteţi utiliza URL-ul unei cereri de intrare pentru a genera URL-ul într-un răspuns. Selectaţi <b>Da</b> dacă nu se aplică una dintre următoarele situaţii pentru mediul dumneavoastră:<ul><li>Doriţi să forţaţi aplicaţiile client să acceseze FileNet Collaboration Services printr-un anumit URL.<li>Setările dumneavoastră pentru serverul proxy pot cauza producerea de către FileNet Collaboration Services de URL-uri invalide.</ul>",

		admin_p8_use_url_incoming_http: "URL FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Specificaţi URL-ul prin care aplicaţiile client pot accesa FileNet Collaboration Services sub forma http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "URL HTTPS FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Dacă FileNet Collaboration Services este configurat să utilizeze SSL, specificaţi URL-ul HTTPS prin care aplicaţiile client pot accesa FileNet Collaboration Services de forma https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Ascundeţi adresele de e-mail ale utilizatorilor în răspunsurile de server:",
		admin_p8_hide_email_addresses_hover: "Puteţi ascunde adresele de e-mail ale utilizatorilor în răspunsurile de server dacă trebuie să vă conformaţi cu politicile de confidenţialitate. De exemplu, puteţi ascunde lista de adrese de e-mail ale utilizatorilor atunci când serverul returnează o listă de documente şi informaţii despre utilizatorii ce au creat sau editat documentele.",

		admin_p8_mask_user_ids: "Marcaţi ID-urile utilizatorilor în fişierele istoric:",
		admin_p8_mask_user_ids_hover: "Puteţi ascunde numele de utilizator din fişierele istoric ale FileNet Collaboration Services dacă trebuie să vă conformaţi cu politicile de confidenţialitate. Atunci când activaţi această opţiune, numele de utilizatori sunt înlocuite cu valori hash. Acest lucru vă permite să furnizaţi fişiere istoric pentru companii externe, cum ar fi IBM, în scop de suport, fără a vă compromite numele dumneavoastră de utilizatori sau înregistrările de activitate.",

		admin_p8_soft_delete: "Mutaţi fişierele şterse în containerul de recuperare:",
		admin_p8_soft_delete_hover: "Atunci când utilizatorii şterg articole, mutaţi articolele într-un container de recuperare mai degrabă decât să le ştergeţi din magazie. Articolele rămân în containerul de recuperare până când sunt epurate. Această setare este ignorată dacă magazia ţintă nu suportă containere de recuperare.<br><br><b>Restricţii:</b> Containerele de recuperare sunt suportate în IBM FileNet P8 Version 5.2 sau ulterioară, şi necesită add-on-ul Social Collaboration Base Extensions.",

		admin_p8_download: "Configurarea cache-ului HTTP de descărcare conţinut",
		admin_p8_download_instructions: "Dacă magaziile dumneavoastră IBM FileNet Content Manager conţin multe fişiere mari, puteţi configura Content Download HTTP Cache (CDHC) pentru a permite FileNet Collaboration Services să redirecţioneze securizat cererile pentru fişiere mari către un server web dedicat.<br/><br/>Această caracteristică necesită IBM HTTP Server. Suplimentar, trebuie să actualizaţi fişierul IBM HTTP Server httpd.conf.",
		admin_p8_download_cache: "Cache HTTP de descărcare conţinut:",
		admin_p8_download_cache_hover: "Specificaţi dacă doriţi să activaţi Content Download HTTP Cache (CDHC) pentru toate magaziile IBM FileNet Content Manager din mediul dumneavoastră. Puteţi specifica o dimensiune minimă de fişier la care fişierele sunt memorate în cache.",
		admin_p8_download_cache_folder: "Director cache complet calificat:",
		admin_p8_download_cache_folder_hover: "Specificaţi calea complet calificată a directorului unde doriţi să stocaţi fişierele memorate în cache. Directorul poate fi în orice sistem de operare sau pe orice dispozitiv, cum ar fi un director de reţea partajat,atâta timp cât este vizibil ca şi sistem de fişiere pentru FileNet Collaboration Services şi IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias pentru locaţia de memorare în cache:",
		admin_p8_download_cache_url_hover: "Specificaţi aliasul utilizat pentru a indica directorul de memorare în cache din FileNet Collaboration Services URL. Specificaţi aliasul cu formatul /alias, de exemplu, /cdhc.<br/><br/>Atunci când /cdhc este inclus într-un URL, aplicaţia este redirecţionată către directorul de memorare în cache complet calificat.",
		admin_p8_download_cache_max_files: "Numărul maxim de fişiere memorate în cache:",
		admin_p8_download_cache_max_files_hover: "Atunci când este atins numărul maxim de fişiere, cel mai vechi fişier este înlăturat din cache.<br><br>Dacă specificaţi numărul maxim de fişiere de memorat în cache şi dimensiunea maximă a cache-ului, cel mai vechi fişier este înlăturat din cache atunci când este îndeplinită prima dintre cele două condiţii.",
		admin_p8_download_cache_max_size: "Dimensiunea maximă a cache (în GB):",
		admin_p8_download_cache_max_size_hover: "Atunci când este atinsă dimensiunea maximă a cahce-ului, cel mai vechi fişier este înlăturat dincache.<br/><br/>Dacă specificaţi numărul maxim de fişiere de memorat în cache şi dimensiunea maximă a cache-ului, cel mai vechi fişier este înlăturat din cache atunci când este îndeplinită prima dintre cele două condiţii.",
		admin_p8_download_cache_cleanup_duration: "Durata maximă de curăţare (în secunde):",
		admin_p8_download_cache_cleanup_duration_hover: "Specificaţi durata maximă de timp a operaţiunii de curăţare. Durata implicită este de 5 secunde.<br><br>Orice fişiere ce sunt supuse ştergerii, dar care rămân în cache după operaţia de curăţare, va fi înlăturat în timpul viitoarelor operaţii de curăţare.",
		admin_p8_download_cache_cleanup_min: "Intervalul minim dintre operaţiile de curăţare a cache-ului (în secunde):",
		admin_p8_download_cache_cleanup_min_hover: "Specificaţi durata minimă de timp ce ar trebui să treacă între operaţiile de curăţare a cache-ului. Durata implicită este 3.600 de secunde (o oră).<br><br>Operaţiile de curăţare a cache-ului survin numai atunci când există o cerere activă de descărcare de conţinut din cache. Dacă cererile sunt primite în fiecare minut, operaţia de curăţare va avea loc la fiecare oră. Totuşi, dacă trec trei ore între cererile de descărcare, operaţiile de curăţare nu vor avea loc până când nu se primeşte următoarea cerere de descărcare.",
		admin_p8_download_cache_min_lifetime: "Durata minimă în cache (în secunde):",
		admin_p8_download_cache_min_lifetime_hover: "Specificaţi durata minimă de timp cât este păstrat un fişier în cache înainte să fie înlăturat. Durata implicită este 3.600 de secunde (o oră).<br><br>Chiar dacă cache-ul ajunge la dimensiunea maximă sau conţine numărul maxim de fişiere, cel mai vechi fişier din cache nu poate fi şters până când fişierul nu a fost în cache pentru durata de timp specificată.",
		admin_p8_download_cache_size_threshold: "Dimensiunea minimă de fişier în cache (în KB):",
		admin_p8_download_cache_size_threshold_hover: "Specificaţi dimensiunea minimă la care CDHC ar trebui utilizat pentru memorarea fişierelor în cache. Dacă un fişier este mai mic decât dimensiunea specificată, fişierul este direcţionat prin serverul de aplicaţii web în care este implementat FileNet Collaboration Services. Dimensiunea implicită este 1.000 KB.",
		admin_p8_download_guard_header: "Antet HTTP pentru gatekeeping:",
		admin_p8_download_guard_header_hover: "Dacă o aplicaţie client nu rutează o cerere prin IBM HTTP Server, conţinutul memorat în cache nu poate fi descărcat. Puteţi specifica faptul că numai cererile de intrare cu un anumit antet HTTP(ce este adăugat la cerere din IBM HTTP Server) pot accesa conţinutul memorat în cache pentru a împiedica eşuările de descărcare.<br><br>Antetul HTTP este configurat în IBM HTTP Server şi este prezent în toate cererile de intrare ce sunt rutate prin IBM HTTP Server. Dacă o cerere nu are un antet HTTP, conţinutul este rutat mai degrabă prin serverul de aplicaţiidecât printr-un IBM HTTP server.",
		admin_p8_download_generate_config: "Generare configuraţie",
		admin_p8_download_generate_config_label: "Configuraţie IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Pentru a funcţiona configurarea CHDC, trebuie să actualizaţi fişierul IBM HTTP Server httpd.conf. Faceţi clic pe Generare configuraţie pentru a genera declaraţiile ce trebuiesc adăugate în fişierul httpd.conf.",

		admin_logging_viewone_pro: "Jurnalizare ViewONE Professional:",
		admin_logging_viewone_virtual: "Jurnalizare ViewONE Virtual:",
		admin_logging_viewone_streamer: "Jurnalizare Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "Opţiunile de jurnalizare Document Streaming Server Module sunt aplicabile numai dacă aţi activat fluxul (streaming) pentru fişiere PDF sau TIFF în secţiunea <b>Daeja ViewONE</b> a uneltei de administrare.",
		admin_logging_viewone_redaction: "Jurnalizare Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "Opţiunile de jurnalizare Permanent Redaction Server Module sunt aplicabile numai dacă sunteţi îndreptăţit să folosiţi modulul Redaction al Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Profesional",
		admin_daeja_viewonepro_stream_pdf_documents: "Punere în flux a fişierelor PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Dacă aveţi documente mari PDF în magazia dumneavoastră, puteţi permite vizualizatorului să pună în flux conţinutul documentelor pentru a face mai rapidă vizualizarea acestor documente de către utilizatori. Totuşi, dacă punerea în flux (streaming) nu funcţionează în mediul dumneavoastră, puteţi să o dezactivaţi pentru a evita problemele.",
		admin_daeja_viewonepro_stream_tiff_documents: "Punere în flux a fişierelor TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Dacă aveţi documente mari TIFF în magazia dumneavoastră, puteţi permite vizualizatorului să pună în flux conţinutul documentelor pentru a face mai rapidă vizualizarea acestor documente de către utilizatori. Totuşi, dacă punerea în flux (streaming) nu funcţionează în mediul dumneavoastră, puteţi să o dezactivaţi pentru a evita problemele.",
		admin_daeja_viewonepro_show_file_buttons: "Butoane fişiere",
		admin_daeja_viewonepro_show_file_menus: "Meniuri fişiere",
		admin_daeja_viewonepro_enable_file_keys: "Taste de acces rapid la fişiere",
		admin_daeja_viewonepro_file_keys_hover_help: "Specificaţi dacă doriţi ca utilizatorii să utilizeze scurtături de tastatură pentru a lucra cu fişierele, de exemplu, pentru a deschide sau salva un fişier. Pentru informaţii suplimentare despre taste de acces rapid specifice, vedeţi descrierea parametrilor FileKeys în Manualul de referinţe parametri IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Butoane de tipărire",
		admin_daeja_viewonepro_show_print_menus: "Meniuri de tipărire",
		admin_daeja_viewonepro_enable_print_keys: "Taste de acces rapid de tipărire",
		admin_daeja_viewonepro_print_keys_hover_help: "Specificaţi dacă doriţi ca utilizatorii să utilizeze scurtături de tastatură pentru a tipări fişiere, de exemplu, tipărire pagină sau tipărire document. Pentru informaţii suplimentare despre taste de acces rapid specifice, vedeţi descrierea parametrilor PrintKeys în Manualul de referinţe parametri IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Inversare butoane",
		admin_daeja_viewonepro_annotation_tooltip: "Tooltip de adnotări personalizate implicite:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Introduceţi textul de afişat când nu este specificat niciun tooltip pentru o adnotare personalizată. Textul poate include jetoane înlocuibile. De exemplu, &quot;&lt;creator&gt; a creat această adnotare pe &lt;createdateonly&gt;.&quot; Pentru mai multe informaţii despre jetoanele înlocuibile, vedeţi parametrul CustomAnnotationsToolTip din manualul de referinţe parametri IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Utilizare tooltip personalizat predefinit",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Utilizare tooltip personalizat predefinit de sistem afişat în caseta de text de mai jos",
		admin_daeja_viewonepro_help_url: "URL ajutor:",
		admin_daeja_viewonepro_help_url_hover_help: "Specificaţi URL-ul paginii web care conţine documentaţia de ajutor pentru vizualizator. Butonul de ajutor de pe bara de unelte a vizualizatorului şi acţiunea de meniu Ajutor deschid pagina web. Dacă nu specificaţi un URL, nu sunt afişate butonul de ajutor şi acţionarea meniului.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Context de resursă amprentă de imagine:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "De făcut",
		admin_daeja_viewonepro_route_docs: "Rutare conţinut nesuportat la browser:",
		admin_daeja_viewonepro_route_docs_hover_help: "Utilizatorii pot vizualiza fişiere nesuportate de imagini prin rutarea lor către browser, care deschide aplicaţia corespunzătoare pentru vizualizarea fişierului. De exemplu, pentru a deschide un document Microsoft Word, browser-ul utilizează Microsoft Word viewer.",
		admin_daeja_viewonepro_scale: "Autoîncadrare imagine:",
		admin_daeja_viewonepro_scale_best: "Cea mai bună încadrare",
		admin_daeja_viewonepro_scale_ftow: "Încadrare pe lăţime",
		admin_daeja_viewonepro_scale_ftoh: "Încadrare pe înălţime",
		admin_daeja_viewonepro_enable_hotkeys: "Activare taste de acces rapid:",
		admin_daeja_viewonepro_show_features: "Afişare butoane şi meniuri:",
		admin_daeja_custom_settings: "Setări suplimentare:",
		admin_daeja_custom_settings_hover_help: "Puteţi adăuga alţi parametri prin specificarea numelui şi valorii parametrului. De exemplu, puteţi specifica &quot;scrollbars&quot; şi &quot;true&quot; dacă vreţi ca barele de defilare să fie afişate când imaginea este scalată la o scală mai mare decât zona de afişare. Pentru informaţii suplimentare despre numele şi valorile parametrilor, vedeţi Manualul de referinţe parametri IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Tooltip de adnotări personalizate implicite:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Introduceţi textul de afişat când nu este specificat niciun tooltip pentru o adnotare personalizată. Textul poate include jetoane înlocuibile. De exemplu, &quot;&lt;creator&gt; a creat această adnotare pe &lt;createdateonly&gt;.&quot; Pentru mai multe informaţii despre jetoanele înlocuibile, vedeţi parametrul CustomAnnotationsToolTip din manualul de referinţe parametri IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Utilizare tooltip personalizat predefinit",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Utilizare tooltip personalizat predefinit de sistem afişat în caseta de text de mai jos",
		admin_daeja_virtual_image_stamp_resource_context: "Context de resursă amprentă de imagine:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "De făcut",
		admin_daeja_virtual_license_path:"Cale fişiere de licenţă:",
		admin_daeja_virtual_license_path_hover_help:"Specificaţi calea complet calificată a directorului care conţine fişierele de licenţă lic-server-virtual.v1 şi lic-server.v1.",
		admin_default_license_path:"Utilizare cale de fişiere de licenţă implicită",
		admin_license_path_specified:"Utilizare cale de fişiere de licenţă personalizată",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Director cache:",
		admin_daeja_streamer_cache_root_hover_help: "Specificaţi calea complet calificată a directorului unde doriţi să stocaţi fişierele memorate în cache pentru acces mai rapid. Directorul poate fi în orice sistem de operare sau pe orice dispozitiv, cum ar fi directorul de reţea, atâta timp cât este vizibil ca sistem de fişiere pentru IBM Content Navigator şi IBM HTTP Server. Utilizaţi un director local pentru a îmbunătăţi performanţa.",
		admin_daeja_streamer_settings: "Setări suplimentare:",
		admin_daeja_streamer_settings_hover_help: "Puteţi adăuga alţi parametri prin specificarea numelui şi valorii parametrului. De exemplu, puteţi specifica “cookieAllowedDomainList”  şi o listă setarată prin virgule a serverelor gazdă.  Pentru informaţii suplimentare despre numele şi valorile parametrilor, vedeţi Manualul de referinţe parametri IBM Daeja ViewONE.",

		admin_daeja_redaction: "Redactare permanentă",
		admin_daeja_redaction_settings: "Setări:",
		admin_daeja_redaction_settings_hover_help: "Puteţi adăuga alţi parametri prin specificarea numelui şi valorii parametrului. De exemplu, puteţi specifica “burnIncrementalAnnotations” şi ”true”. Pentru informaţii suplimentare despre numele şi valorile parametrilor, vedeţi Manualul de referinţe parametri IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Setare nouă",
		admin_daeja_setting_dialog_title_edit: "Editare setare",
		admin_daeja_setting_dialog_hover_help: "Adăugaţi alţi parametri prin specificarea numelui şi valorii parametrului. De exemplu, puteţi specifica  “scrollbars” şi “true” dacă doriţi să fie afişate barele de defilare când imaginea este scalată la o dimensiune mai mare decât zona de afişare.",
		admin_daeja_setting_dialog_field_hover_help: "Pentru informaţii suplimentare despre numele şi valorile parametrilor, vedeţi Manualul de referinţe parametri Daeja ViewONE.",

		admin_daeja_logging: "Jurnalizare Daeja ViewONE",
		admin_daeja_logging_trace: "Activare jurnalizare urmărire",
		admin_daeja_logging_trace_net: "Activare jurnalizare reţea",
		admin_daeja_logging_trace_annotations: "Activare jurnalizare adnotări",
		admin_daeja_logging_log_file: "Fişier istoric:",
		admin_daeja_logging_instructions: "Puteţi folosi jurnalizarea pentru a depana probleme cu Daeja ViewONE Professional şi Daeja ViewONE Virtual. Dacă ştiţi că apare o problemă pentru o anumită caracteristică, vă puteţi ţinti înregistrarea în istoric la acea caracteristică.",

		admin_v1pro_logging_trace_hover: "Folosiţi această setare pentru a depana probleme generale cu vizualizatorul.<br><br>Informaţiile de înregistrare în istoric sunt scrise în consola Java pe maşina client. Puteţi accesa consola Java din Control Panel (Windows) sau System Preferences (Mac) pentru sistemul dumneavoastră de operare.",
		admin_v1pro_logging_trace_net_hover: "Folosiţi această setare pentru a depana următoarele probleme:<ul><li>Probleme cu conexiunea serverului dumneavoastră</li><li>Probleme cu tipurile MIME</li><li>Probleme cu fişierele care sunt prea lungi</li></ul>În plus, puteţi folosi înregistrarea în istoric a urmelor de reţea pentru a determina unde apar întârzieri când folosiţi Daeja ViewONE Professional.<br><br>Informaţiile de înregistrare în istoric sunt scrise în consola Java pe maşina client. Puteţi accesa consola Java din Control Panel (Windows) sau System Preferences (Mac) pentru sistemul dumneavoastră de operare.",
		admin_v1pro_logging_trace_annotations_hover: "Folosiţi această setare pentru a depana problemele cu crearea, salvarea sau încărcarea adnotărilor.<br><br>Informaţiile de înregistrare în istoric sunt scrise în consola Java pe maşina client. Puteţi accesa consola Java din Control Panel (Windows) sau System Preferences (Mac) pentru sistemul dumneavoastră de operare.",

		admin_virtual_logging_trace_hover: "Folosiţi această setare pentru a depana probleme generale cu vizualizatorul.<br><br>Implicit, informaţiile de jurnalizare sunt scrise în fişierul virtual.log din subdirectorul directorului de instalare IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Folosiţi această setare pentru a depana următoarele probleme:<ul><li>Probleme cu conexiunea serverului dumneavoastră</li><li>Probleme cu tipurile MIME</li><li>Probleme cu fişierele care sunt prea lungi</li></ul>În plus, puteţi folosi înregistrarea în istoric a urmelor de reţea pentru a determina unde apar întârzieri când folosiţi Daeja ViewONE Virtual.<br><br>Implicit, informaţiile de jurnalizare sunt scrise în fişierul virtual.log din subdirectorul directorului de instalare IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Folosiţi această setare pentru a depana problemele cu crearea, salvarea sau încărcarea adnotărilor.<br><br>Implicit, informaţiile de jurnalizare sunt scrise în fişierul virtual.log din subdirectorul directorului de instalare IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Dacă activaţi jurnalizarea pentru vizualizator, trebuie să specificaţi calea complet calificată şi numele fişierului istoric unde vreţi să stocaţi informaţiile de jurnalizare.  Este recomandat să numiţi fişierul istoric virtual.log.",

		admin_streamer_logging_trace_hover: "Folosiţi această setare pentru a depana probleme generale cu Document Streaming Server Module.<br><br>Implicit, informaţiile de înregistrare în istoric sunt scrise în fişierul streamer.log care este în subdirectorul config al directorului de instalare IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Folosiţi această setare pentru a depana următoarele probleme:<ul><li>Probleme cu conexiunea serverului dumneavoastră</li><li>Probleme cu anumite tipuri MIME</li><li>Probleme cu fişierele care sunt prea lungi</li></ul>În plus, puteţi folosi înregistrarea în istoric a urmelor de reţea pentru a determina unde apar întârzieri când folosiţi Document Streaming Server Module.<br><br>Implicit, informaţiile de înregistrare în istoric sunt scrise în fişierul streamer.log care este în subdirectorul config al directorului de instalare IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Dacă activaţi jurnalizarea pentru Document Streaming Server Module, trebuie să specificaţi calea complet calificată şi numele fişierului istoric unde vreţi să stocaţi informaţiile de jurnalizare.  Este recomandat să numiţi fişierul istoric streamer.log.",

		admin_redaction_logging_trace_hover: "Folosiţi această setare pentru a depana probleme generale cu Permanent Redaction Server Module.<br><br>Implicit, informaţiile de înregistrare în istoric sunt scrise în fişierul redacttofile.log care este în subdirectorul config al directorului de instalare IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Folosiţi această setare pentru a depana următoarele probleme:<ul><li>Probleme cu conexiunea serverului dumneavoastră</li><li>Probleme cu anumite tipuri MIME</li><li>Probleme cu fişierele care sunt prea lungi</li></ul>În plus, puteţi folosi înregistrarea în istoric a urmelor de reţea pentru a determina unde apar întârzieri când folosiţi Permanent Redaction Server Module.<br><br>Implicit, informaţiile de înregistrare în istoric sunt scrise în fişierul redacttofile.log care este în subdirectorul config al directorului de instalare IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Dacă activaţi jurnalizarea pentru Permanent Redaction Server Module, trebuie să specificaţi calea complet calificată şi numele fişierului istoric unde vreţi să stocaţi informaţiile de jurnalizare.  Este recomandat să numiţi fişierul istoric redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configurarea caracteristicilor pentru vizualizatorii şi serviciile dumneavoastră.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Dacă folosiţi clientul web pentru a vă conecta la una sau mai multe magazii Content Manager OnDemand, trebuie să specificaţi informaţii de care are nevoie OnDemand Web Enablement Kit pentru a funcţiona corect. Aceste informaţii sunt împărţite de toate magaziile Content Manager OnDemand care sunt configurate pentru clientul web.",
		admin_ondemand_language: "Limbă:",
		admin_ondemand_tempdir: "Director temporar ODWEK:",
		admin_ondemand_tracegrp: "Urmărire ODWEK",
		admin_ondemand_tracedir: "Director urmărire:",
		admin_ondemand_tracelevel: "Nivel urmărire:",
		admin_ondemand_tracelevel_0: "0 - Fără jurnalizare",
		admin_ondemand_tracelevel_1: "1 - Jurnalizarea mesajelor de eroare",
		admin_ondemand_tracelevel_2: "2 - Jurnalizarea mesajelor de avertisment şi eroare",
		admin_ondemand_tracelevel_3: "3 - Jurnalizarea mesajelor informaţionale, de avertisment şi eroare",
		admin_ondemand_tracelevel_4: "4 - Toate mesajele sunt capturate, inclusiv funcţia de urmărire",
		admin_ondemand_max_trace_filesize: "Dimensiune maximă fişier de urmărire:",
		admin_ondemand_max_trace_filesize_unlimited: "Nelimitat",
		admin_ondemand_max_trace_filesize_limited: "Limitat (Recomandat)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Această valoare este în afara intervalului. Valoarea trebuie să fie un întreg între 1 şi 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Director de instalare AFP2PDF:",
		admin_ondemand_language_hover: "Specificaţi limba în care ODWEK returnează mesaje.",
		admin_ondemand_tempdir_hover: "Introduceţi directorul unde stochează OnDemand Web Enablement Kit fişierele temporare în timpul procesării. Trebuie să introduceţi calea complet calificată a unui director existent pe serverul de aplicaţii web.",
		admin_ondemand_tracedir_hover: "Introduceţi directorul unde vreţi să stocaţi fişierul de urmărire ODWEK arswww.trace. Trebuie să introduceţi calea complet calificată a unui director existent pe serverul de aplicaţii web.",
		admin_ondemand_tracelevel_hover: "Specificaţi nivelul de jurnalizare a informaţiilor care sunt scrise în fişierul arswww.trace. <b>Jurnalizarea mesajelor de eroare</b> capturează cea mai mică cantitate de informaţii de jurnalizare. <b>Toate mesajele sunt capturate, inclusiv funcţia de urmărire</b> capturează cele mai multe informaţii.<br /><br />Nu specificaţi <b>Toate mesajele sunt capturate, inclusiv funcţia de urmărire</b> într-un mediu de producţie, decât dacă sunteţi instruit să faceţi asta de către Suportul software IBM.",
		admin_ondemand_max_trace_filesize_hover: "Specificaţi dacă vreţi să permiteţi fişierului de urmărire ODWEK să crească la o dimensiune nelimitată sau dacă vreţi ca clientul web să creeze noi fişiere istorice când fişierul istoric atinge o anumită dimensiune. Valoarea implicită este să permiteţi fişierului istoric de urmărire să crească până când aplicaţia web este oprită pe serverul de aplicaţii web.",
		admin_ondemand_max_trace_unlimited_hover: "Selectaţi această opţiune dacă vreţi ca informaţiile de urmărire ODWEK să fie scrise într-un singur fişier istoric. Dacă selectaţi această opţiune, aţi putea avea un fişier istoric care este prea mare pentru a fi deschis cu un vizualizator de fişiere standard.",
		admin_ondemand_max_trace_limited_hover: "Selectaţi această opţiune dacă vreţi ca informaţiile de urmărire ODWEK să fie scrise în fişiere istorice mai mici. Când un fişier istoric atinge dimensiunea maximă, istoricul curent este redenumit pentru a include data (arswww.trace.AAAALLZZ.HHMMSS) şi se creează un nou fişier istoric.",
		admin_ondemand_afp2pdf_installdir_hover: "Dacă vreţi să folosiţi utilitarul AFP2PDF Transform pentru a converti documente AFP în documente PDF pentru vizualizare şi tipărire, specificaţi directorul unde este instalat utilitarul AFP2PDF Transform pe serverul de aplicaţii web. De exemplu: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administratori",
		admin_adminusers_heading_text_multi: "Trebuie să specificaţi ce utilizatori au privilegii administrative în clientul web. Numai administratorii se pot loga pe desktop-ul de administrare.<br /><br /><b>Important:</b> ID-urile de utilizator ale administratorilor IBM Content Navigator trebuie să se potrivească cu:<ul><li>ID-urile de utilizator care există pe serverul dumneavoastră de aplicaţii web. ID-urile de utilizator nu e nevoie să fie administratori pe serverul de aplicaţii web.</li><li>ID-urile de utilizator există în magazia implicită care este configurată pentru fiecare desktop ce include caracteristica Administrare.</li></ul>",
		admin_adminusers_heading_text_single: "Trebuie să specificaţi ce utilizatori au privilegii administrative în clientul web. Numai administratorii se pot loga pe desktop-ul de administrare.<br /><br /><b>Important:</b> ID-urile de utilizator ale administratorilor IBM Content Navigator trebuie să se potrivească cu ID-urile de utilizator care există pe serverul dumneavoastră de aplicaţii web. ID-urile de utilizator nu e nevoie să fie administratori pe serverul de aplicaţii web.",
		admin_adminusers_newuser: "Administrator nou:",
		admin_adminusers_add: "Adăugare",
		admin_adminusers_remove: "Înlăturare",
		admin_adminusers_listheading: "Administratori",
		admin_adminusers_nameInvalid: "Valoarea nu poate fi duplicată.",

		admin_sync_server_instructions: "<b>Numai pentru utilizatori FileNet P8:</b> Dacă planificaţi să activaţi serviciile de sincronizare pentru un a sau mai multe magazii, trebuie să configuraţi clientul web pentru a utiliza serviciile de sincronizare. Configuraţia serviciilor de sincronizare este partajată de toate magaziile din mediul dumneavoastră.",
		admin_settings_instructions: "Valorile pe care le specificaţi în fila Setări se aplică tuturor desktop-urilor din configuraţia dumneavoastră.",
		admin_autocomplete: "Populare automată cu nume de utilizator:",
		admin_autocomplete_hover: "Specificaţi dacă vreţi ca clientul web să memoreze numele de utilizator în cookie-uri de browser pentru a permite browser-ului să populeze automat numele de utilizator în clientul web în timpul logării.<br><br>Dacă activaţi această opţiune, numele de utilizator al ultimului utilizator care se loghează în clientul web este memorat în cookie-urile browser-ului şi este afişat automat pe pagina de logare când un utilizator deschide clientul web.<br><br>Ar trebui să dezactivaţi această opţiune dacă aplicaţia este accesată de pe staţii de lucru partajate sau dacă sunteţi îngrijorat de memorarea numelor de utilizator în cookie-urile browser-ului.<br /><br />Această opţiune nu se aplică pentru aplicaţii personalizate sau mobile.",
		admin_autocomplete_enable: "Activare",
		admin_autocomplete_disable: "Dezactivare",
		admin_cultural_collation: "Folosire sortare specifică pentru Locale:",
		admin_cultural_collation_hover: "Dacă activaţi sortarea specifică pentru Locale, sortarea se face pe serverul magazie. Aceasta poate scădea performanţa clientului web.<br><br>Dezactivarea sortării specifice pentru Locale poate îmbunătăţi performanţa clientului web.",
		admin_cultural_collation_enable: "Activare",
		admin_cultural_collation_disable: "Dezactivare",
		admin_base_ui_style: "Stil temă",
		admin_base_ui_style_hover: "Specificaţi stilul temei implicite care este folosită în clientul web. Acest stil este folosit doar pe desktopurile care folosesc tema <b>Implicită</b> (aşa cum este specificat pe fila <b>Aspect</b> a configuraţiei desktopului.<br/></br><b>Restricţie:</b> Dacă configuraţiile desktopului dumneavoastră folosesc teme personalizate, temele personalizate se bazează pe stilul clasic, indiferent de ce stil alegeţi.",
		admin_base_ui_style_classic: "Clasic",
		admin_access_control_access: "Acces limitat pentru anumiţi utilizatori şi anumite grupuri",
		admin_access_control_access_show: "Afişare date control acces",
		admin_access_control_access_enable: "Da",
		admin_access_control_access_disable: "Nu",
		admin_mobile_access: "Se permite acces de la aplicaţii mobile",
		admin_mobile_access_hover: "Implicit, utilizatorii pot accesa clientul web din aplicaţia iOS IBM Content Navigator.<br /><br /><b>Important:</b> Dacă împiedicaţi utilizatorii să acceseze clientul web din aplicaţia iOS, utilizatorii încă pot accesa clientul web din browser-ele web de pe dispozitivele lor mobile şi din orice aplicaţie personalizată care este scrisă folosind API-urile IBM Content Navigator şi care funcţionează pe dispozitive mobile.",
		admin_mobile_access_enable: "Da",
		admin_mobile_access_disable: "Nu",
		admin_error: "Informaţii mesaj de eroare:",
		admin_error_custom: "Căutare conţinut de suport personalizat",
		admin_error_default: "Căutare conţinut de IBM Support <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Specificaţi unde vreţi să direcţionaţi utilizatorii pentru informaţii suplimentare când întâlnesc un mesaj de eroare. Puteţi direcţiona utilizatorii pentru informaţii către IBM Support Portal, sau puteţi direcţiona utilizatorii către o resursă internă, cum ar fi un birou de informaţii.",
		admin_error_URL: "Prefix URL:",
		admin_error_URL_hover: "Introduceţi URL-ul resursei la care vreţi să redirecţionaţi utilizatorii când întâlnesc o eroare, cum ar fi un birou de informaţii. De exemplu: http://localhost:port_number. Clientul web adaugă la sfîrşitul URL-ului numărul mesajului.",
		admin_prompt_close_without_save: "Vreţi să închideţi fără a vă salva modificările?",
		admin_object_expiration_time: "Interval reîmprospătare cache (în minute):",
		admin_object_expiration_time_hover: "Puteţi creşte durata de timp în care obiectele de configurare, precum desktop-urile, sunt păstrate în cache pentru a îmbunătăţi performanţa clientului web.  Timpul implicit este de 10 minute. Timpul maxim este de 1440 minute (1 zi).<br /><br />Trebuie să reporniţi aplicaţia web pentru ca modificările dumneavoastră să aibă efect.<br /><br />Dacă IBM Content Navigator este implementat într-un mediu  cluster cu disponibilitate bună, orice modificare efectuate asupra obiectelor de configurare nu va fi propagată către nodurile din cluster până când cache-ul nu este reîmprospătat.",
		admin_temp_file_cleanup_interval: "Interval de scanare pentru curăţare cache vizualizator (în ore):",
		admin_temp_file_cleanup_interval_hover: "Planificaţi cât de des este scanat directorul temporar pentru a fi găsite şi şterse fişierele temporare expirate. Implicit, directorul temporar este scanat la fiecare şase ore. Puteţi să specificaţi 6-48 ore.",
		admin_temp_file_expiration_interval: "Expirare cache vizualizator (în ore):",
		admin_temp_file_expiration_interval_hover: "Specificaţi cât timp rămân în cache-ul browser-ului fişierele temporare legate de activităţile din vizualizator. Implicit, aceste fişierele temporare expiră după 24 de ore. Puteţi să specificaţi 12-48 ore.",
		admin_encryption_key_hover: "Tastă folosită pentru funcţiile de criptare Navigator.",
		admin_encryption_key: "Cheie de criptare:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Branding",
		admin_mobile_branding_main_color: "Culoare principală:",
		admin_mobile_branding_secondary_color: "Culoare secundară:",
		admin_mobile_device_title: "Gestionare MaaS360",
		admin_mobile_device_enable_maas360: "Activare MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Activarea ajutorului la trecerea peste MaaS360 merge aici",
		admin_mobile_device_maas360_developer_id: "ID dezvoltator MaaS360:",
		admin_mobile_device_maas360_license_key: "Cheia de licenţă MaaS360:",
		admin_mobile_settings_title: "Setări",
		admin_mobile_email_address_hover_help: "Adresa de e-mail este utilizată în aplicaţia mobilă când un utilizator face clic pe \"Trimitere raport de erori.\"",
		admin_mobile_email_address: "Adresă de e-mail:",
		admin_invalid_email_address_message: "Adresa de e-mail pe care aţi introdus-o nu este în formatul corect. Introduceţi adresa corectă şi încercaţi din nou.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Unele date nu sunt valide.",
		admin_configuration_parameters: "Parametri de configurare",
		admin_configuration_optional_features: "Caracteristici opţionale",
		admin_configuration_optional_features_p8_instructions: "Selectaţi caracteristicile pe care vreţi să le activaţi pe această magazie.<p><b>Important:</b> Dacă activaţi o caracteristică ce instalează un add-on în magazie, trebuie să fiţi conectat la magazie ca administrator Content Platform Engine sau Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Selectaţi caracteristicile pe care vreţi să le activaţi pe această magazie.<p><b>Important:</b> Aceste caracteristici modifică modelul de date de pe magazia dumneeavoastră. Pentru a le activa, trebuie să fiţi conectat la magazie ca administrator de server de bibliotecă.</p>",
		admin_system_properties: "Proprietăţi sistem",
		admin_system_properties_for: "Proprietăţile sistemului pentru:",
		admin_available_properties: "Proprietăţi disponibile",
		admin_displayed_properties: "Proprietăţi afişate",
		admin_selected_properties: "Proprietăţi selectate",
		admin_selected_filtered_properties: "Proprietăţi ascunse",
		admin_available_operators: "Operatori afişaţi",
		admin_selected_filtered_operators: "Operatori ascunşi",
		admin_system_properties_shown: "Proprietăţi afişate",
		admin_system_properties_hidden: "Proprietăţi ascunse",
		admin_available_menu_items: "Acţiuni disponibile:",
		admin_selected_menu_items: "Acţiuni selectate:",
		admin_menu_global: "Se aplică atunci când nu e selectat niciun articol:",
		admin_menu_multiple_document: "Se aplică atunci când sunt selectate mai multe articole:",
		admin_menu_privileges: "Privilegii necesare:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Tipuri de magazii:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separator",
		admin_browse: "Răsfoire",
		admin_search: "Căutare",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redactare bazată pe rol",
		admin_connections_library_enabled: "IBM Connections activat",
		admin_office_conf: "Editare integrare",
		admin_desktop_conf_label: "Configuraţie Desktop",
		admin_ms_office_conf_label: "Configuraţie Office",
		admin_workflows: "Fluxuri de lucru",
		admin_file_types: "Tipuri de fişiere",
		admin_file_type_contains_label: "Tipul de fişiere conţine",
		admin_name_propepty: "Nume",
		admin_cm_name_property_default: "Utilizare nume implicit",
		admin_cm_name_property_default_hover: "Implicit, proprietatea (ICM$NAME) pentru numele ierarhic ICM este utilizată pentru numele articolului, dacă proprietatea este definită pentru articol.  Dacă proprietatea (ICM$NAME) pentru numele ierarhic ICM nu este disponibilă, prima proprietate care este marcată ca \"represents\" este folosită ca numele articolului.",
		admin_cm_name_property: "Specificare proprietate Nume pentru articol",
		admin_cm_name_property_hover: "Specificaţi ce proprietate este utilizată ca nume pentru documente şi foldere.",
		admin_name_property: "Proprietate de nume:",
		admin_doc_name_property: "Proprietate Nume document:",
		admin_doc_name_property_hover: "Specificaţi ce proprietate este folosită ca nume al documentului.",
		admin_folder_name_property: "Proprietate Nume folder:",
		admin_folder_name_property_hover: "Specificaţi ce proprietate este folosită ca nume al folderului.",
		admin_all_searches_label: "Număr de căutări de afişat:",
		admin_unlimited: "Fără limită",
		admin_limit: "Limită la",
		admin_repository: "Magazie:",
		admin_application_space: "Spaţiu aplicaţie",
		admin_available_application_spaces: "Spaţii de aplicaţie disponibile:",
		admin_selected_application_spaces: "Spaţii de aplicaţie selectate:",
		admin_label: "Etichetă",
		admin_repository_box_placeholder: "Selectaţi o magazie Box",
		admin_repository_placeholder: "Selectaţi o magazie",
		admin_search_match: "Potrivire cu:",
		admin_search_match_all: "Potrivire cu toate criteriile căutării",
		admin_search_match_any: "Potrivire cu oricare din criteriile căutării",
		admin_search_match_hover: "Specificaţi ce opţiune este selectată implicit în meniul <b>Opţiuni proprietate</b>.",

		admin_repository_redactions_instructions: "Puteţi să configuraţi redactări bazate pe rol pentru această magazie.",
		admin_repository_redaction_policies_description: "Puteţi să creaţi şi să gestionaţi politici de redactare care asociază motive de redactare cu utilizatori şi grupuri care pot citi date sensibile şi pot edita adnotări care protejează datele sensibile pentru a nu fi vizualizate.",
		admin_repository_redaction_roles_instruction: "Puteţi crea un rol de redactare pentru a asocia utilizatori şi grupuri specificaţi fie cu abilitatea de a citi date sensibile sau cu abilitatea de a edita adnotări care protejează datele sensibile pentru a nu fi vizualizate. Rolul de redactare trebuie să fie asociat cu un motiv de redactare dintr-o politică de redactare înainte ca acei utilizatori şi grupuri să poată citi datele sau să editeze adnotările.",
		admin_repository_redaction_reasons_instruction: "Puteţi să configuraţi motive de redactare pentru magazia dumneavoastră.",
		admin_repository_redaction_policies: "Configuraţie Politică de redactare",
		admin_repository_redaction_roles: "Configuraţie Roluri de redactare",
		admin_repository_redaction_reasons: "Configuraţie Motive de redactare",
		admin_repository_redaction_roles_type: "Tip",
		admin_repository_redaction_roles_type_hover: "Un editor poate crea, modifica sau şterge anumite tipuri de redactări bazate pe rol în timp ce un vizualizator poate vizualiza anumite tipuri de date sensibile.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Vizualizator",
		admin_repository_redaction_roles_membership: "Apartenenţă:",
		admin_repository_redaction_roles_membership_hover: "Selectaţi editorii care vreţi să aibă acest rol.",
		admin_repository_redaction_roles_user_group_hover: "Căutaţi utilizatorii şi grupurile sau selectaţi editorii care vreţi să aibă acest rol.",
		admin_repository_redaction_roles_description: "Puteţi să creaţi şi să gestionaţi rolurile de redactare care asociază utilizatori şi grupuri cu abilitatea de a citi date sensibile şi a edita adnotări care protejează datele sensibile pentru a nu fi vizualizate.",
		admin_repository_redaction_new: "Rol de redactare nou",
		admin_repository_redaction_role_avail_editors: "Editori de redactare disponibili",
		admin_repository_redaction_role_avail_users: "Utilizatori disponibili",
		admin_repository_redaction_role_avail_groups: "Grupuri disponibile",
		admin_repository_redaction_role_selected_editors: "Editori de redactare selectaţi",
		admin_repository_redaction_role_selected_users_groups: "Utilizatori şi grupuri selectate",
		admin_repository_redaction_role_add_editor: "Editori noi...",
		admin_repository_redaction_role_access_type: "Acces",
		admin_repository_redaction_role_access_type_access: "Se permite",
		admin_repository_redaction_role_access_type_no_access: "Se refuză",
		admin_repository_redaction_role_users: "Utilizatori",
		admin_repository_redaction_role_groups: "Grupuri",
		admin_repository_redaction_role_editors: "Editori",
		admin_delete_confirmation_redaction_roles: "Vreţi să ştergeţi rolul de redactare selectat?",
		admin_repository_edit_redaction_role: "Rol de redactare: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Acces implicit",
		// RBA
		desktop_user_group_acl: "Administratori desktop",
		desktop_user_group_remove: "Înlăturare",
		desktop_rba_membership: "Apartenenţă:",
		desktop_rba_membership_list_label: "Nume",
		admin_repository_redaction_policy_hover: "Furnizaţi o descriere care va permite utilizatorilor să distingă între această politică şi alte politici.",
		admin_repository_new_redaction_policy: "Politică de redactare nouă",
		admin_repository_policy_name: "Nume politică",
		admin_repository_reason_redactions: "Motive de redactare:",
		admin_repository_role_editors: "Editori",
		admin_repository_role_viewers: "Vizualizatori",
		admin_repository_redaction_policy_instruction: "Puteţi crea o politică de redactare pentru a asocia motivele de redactare selectate cu editorii de redactare şi vizualizatorii de redactare.",
		admin_repository_redaction_reasons_hover: "Selectaţi unul sau mai multe tipuri de date sensibile pe care nu doriţi ca majoritatea utilizatori să le poată vedea, de exemplu, informaţii identificabile personale, secrete comerciale sau informaţii care sunt confidenţiale sau sunt proprietatea companiei dumneavoastră.",
		admin_repository_readaction_available_reasons: "Motive disponibile",
		admin_repository_readaction_selected_reasons: "Motive selectate",
		admin_repository_readaction_new_reason: "Motiv nou...",
		admin_repository_redeaction_reasons: "Motive de redactare:",
		admin_repository_readaction_editor_permmission: "Editori de redactare:",
		admin_repository_redaction_editors_hover: "Selectaţi rolurile care pot crea şi modifica redactarea pentru motivele selectate.",
		admin_repository_readaction_new_editor_role: "Rol editor nou...",
		admin_repository_readaction_available_editors: "Roluri de editor disponibile",
		admin_repository_readaction_selected_editors: "Roluri de editor selectate",
		admin_repository_readaction_viewer_permmission: "Vizualizatori de redactare:",
		admin_repository_redaction_viewers_hover: "Selectaţi rolurile care pot vizualiza datele sensibile pentru motivele selectate. Redactarea nu se aplică pentru utilizatorii şi grupurile cu aceste roluri",
		admin_repository_readaction_new_viewer_role: "Rol vizualizator nou...",
		admin_repository_readaction_available_viewers: "Roluri de vizualizator disponibile",
		admin_repository_readaction_selected_viewers: "Roluri de vizualizator selectate",
		admin_repository_reason_redactions_header: "Motive de redactare",
		admin_delete_confirmation_redaction_policy: "Vreţi să ştergeţi politica de redactare selectată?",
		admin_role_type_repository: "Magazie",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Sablon",
		admin_role_type_teamspace: "Spaţiu de echipă",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Vizualizator",
		admin_collaboration_services_instructions: "Dacă aveţi IBM Connections şi o aplicaţie web FileNet Collaboration Services, puteţi configura spaţiile de echipă de comunitate şi fluxurile de activitate pentru magazie.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configurarea bibliotecii de comunitate",
		admin_collaboration_community_instruction: "Puteţi configura o magazie din domeniul dumneavoastră IBM FileNet P8 pentru a stoca bibliotecile de comunitate IBM Connections (numite de asemenea spaţii de echipă). Atunci când utilizatorii creează o bibliotecă de comunitate prin IBM Connections, este stocată în magazia proiectată ca şi magazie de bibliotecă de comunitate.",
		admin_collaboration_community_teamspaces: "Utilizaţi această magazie pentru bibliotecile de comunitate:",
		admin_collaboration_community_teamspaces_hover: "Puteţi utiliza numai o magazie în domeniul dumneavoastră IBM FileNet P8 pentru a stoca noile biblioteci de comunitate. Dacă activaţi această magazie şi aveţi o magazie existentă, magazia existentă va fi dezactivată. Totuşi, orice bibliotecă existentă va rămâne în magazia curentă.",
		admin_collaboration_connections_anonymous: "Permiteţi accesul anonim la conţinutul public:",
		admin_collaboration_connections_anonymous_hover: "Dacă serverul dumneavoastră IBM Connections conţine comunităţi publice sau moderate, puteţi configura FileNet Collaboration Services pentru a permite utilizatorilor să răsfoiască şi să descarce conţinut din bibliotecile din acele comunităţi fără să trebuiască să se logheze mai întâi.<br><br>Utilizatorii ce accesează anonim bibliotecile de comunitate, nu pot crea, modifica sau şterge conţinut.<br><br><b>Important:</b> Trebuie să desemnaţi un utilizator LDAP IBM FileNet P8 ca utilizator anonim şi să configuraţi acel utilizator cu rolul <b>Anonim</b> în WebSphere Application Server.",
		admin_collaboration_connections_url: "URL IBM Connections:",
		admin_collaboration_connections_url_hover: "Specificaţi URL-ul pentru IBM Connections server al dumneavoastră cu formatul http://IBMConnectionsServer:port_number.  Dacă IBM Connections este configurat să utilizeze IBM HTTP Server, puteţi omite numărul portului din URL.<br><br>URL-ul trebuie să fie accesibil pentru utilizatorii IBM Connections deoarece aceasta este legătura pe care o utilizează FileNet Collaboration Services pentru a crea legături către paginile de aterizare din IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilizare URL IBM Connections",
		admin_collaboration_connections_url_https_use: "Utilizare URL HTTPS IBM Connections",
		admin_collaboration_connections_url_specify: "Specificaţi URL-ul",
		admin_collaboration_connections_url_https: "URL HTTPS IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Dacă IBM Connections este configurat pentru a utiliza SSL, specificaţi URL HTTPS pentru serverul dumneavoastră IBM Connections cu formatul https://IBMConnectionsServer:port_number.  Dacă IBM Connections este configurat să utilizeze IBM HTTP Server, puteţi omite numărul portului din URL.",

		admin_collaboration_connections_gadget_url: "URL gadget IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL-ul de extragere IBM Connections:",
		admin_collaboration_connections_security: "Administratori comunitate:",
		admin_collaboration_connections_security_hover: "Specifică utilizatorii şi grupurile ce pot administra conţinut în bibliotecile de comunitate.<br><br>Administratorii globali pot crea, modifica, şterge şi acorda acces la bibliotecile de comunitate şi la conţinutul bibliotecilor de comunitate. Atunci când specificaţi un utilizator ca şi administrator global, utilizatorului i se acordă privilegii ClbGlobalAdministrator în magazie.<br><br>Administratorii de examinare globală pot aproba şi respinge conţinutul ce este sub examinare pentru publicarea într-o bibliotecă de comunitate. Atunci când specificaţi un utilizator ca şi administrator de examinare globală, utilizatorului i se acordă privilegii ClbGloablReviewAdministrator la magazie.",

		admin_collaboration_connections_admins: "Administratori globali",
		admin_collaboration_connections_admins_review: "Administratori de examinare globală",
		admin_collaboration_connections_seedlist: "Indexarea conţinuturilor bibliotecii de comunitate:",
		admin_collaboration_connections_seedlist_hover: "Specificaţi dacă doriţi IBM Connections să facă crawl pentru bibliotecile de comunitate din această magazie pentru a crea un index de căutare. Crearea unui index poate afecta performanţa magaziei.<br><br>Dacă Social Collaboration Search Indexing Extensions sunt instalate în magazie, această opţiune este activată implicit. Dacă Social Collaboration Search Indexing Extensions nu sunt instalate în magazie, add-on-ul este instalat în magazie atunci când activaţi această opţiune",
		admin_collaboration_activity_stream: "Configurarea evenimentelor de punere în flux activităţi",
		admin_collaboration_activity_stream_label: "Împingeţi informaţiile de eveniment în IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Specificaţi dacă doriţi să împingeţi informaţiile de eveniment, cum ar fi crearea documentului,înregistrările la ieşire, înregistrările la intrare, comentariile, tagurile şi partajările în IBM Connections.<br><br><b>Important:</b> Publicarea notificărilor în IBM Connections poate afecta performanţa magaziei.",

		admin_collaboration_activity_stream_instruction: "Puteţi configura această magazie pentru a împinge informaţii de eveniment, cum ar fi comentarii şi aprobări de documente la IBM Connections. Evenimentele sunt afişate în pagina <b>Actualizări recente</b> în comunităţile IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignoraţi informaţiile de eveniment pentru anumiţi utilizatori sau grupuri:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Puteţi ignora evenimentele ce sunt generate de anumiţi utilizatori sau grupuri, cum ar fi administratori sau conturi de sistem, pentru a reduce numărul de notificări pe care le văd utilizatorii. De exemplu, dacă migraţi conţinut, este posibil să doriţi să specificaţi faptul că sunt ignorate evenimentele sunt generate de contul utilizat pentru migrare.",
		admin_collaboration_activity_stream_userid: "Nume de utilizator IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Specificaţi contul de sistem pe care îl va utiliza Content Platform Engine pentru autentificarea şi transmiterea informaţiilor de eveniment către IBM Connections. Utilizatorul trebuie să fie în rolul <b>trustedExternalApplication</b> în aplicaţia Widget Container din IBM Connections.<br><br><b>Sugestie:</b> Implicit, administratorul IBM Connections are drepturile corespunzătoare. Puteţi utiliza ID-ul de administrator ca şi nume de utilizator",
		admin_collaboration_activity_stream_password: "Parola utilizatorului IBM Connections:",

		admin_help_url: "URL ajutor pentru utilizator final:",
		admin_help_url_hover: "<b>Notă importantă:</b> IBM Knowledge Center instalat personalizat nu va fi actualizat începând cu IBM Content Navigator Version 3.0.0. Contactaţi service-ul pentru clienţi pentru mai multe informaţii despre utilizarea ajutorului personalizat.<br><br>Începând cu IBM Content Navigator Version 3.0.0, URL-ul de ajutor pentru utilizatorii finali duce la IBM Knowledge Center. URL-ul pentru IBM Knowledge Center este: http://www.ibm.com/support/knowledgecenter.<br><br>Dacă doriţi să continuaţi să utilizaţi o versiune anterioară de IBM Knowledge Center instalat personalizat, specificaţi URL-ul instanţei de IBM Knowledge Center instalat personalizat care a fost implementat de IBM Content Navigator Configuration and Deployment Tool. URL-ul trebuie să fie accesibil pentru maşinile client. URL-ul are formatul  http://server_name:port_number/kc.<br><br>Puteţi obţine numele de server şi numărul de port din fişierul console.log din subdirectorul KnowledgeCenter/logs al directorului de instalare IBM Content Navigator.",

		admin_help_default: "Utilizaţi ajutorul implicit furnizat de IBM",
		admin_custom_help: "Utilizaţi un sistem de ajutorul personalizat",
		admin_help_kc: "Utilizare ajutor personalizat din IBM Knowledge Center instalat personalizat",
		admin_help_kc_hover: "<b>Notă importantă:</b> IBM Knowledge Center instalat personalizat nu va fi actualizat începând cu IBM Content Navigator Version 3.0.0. Contactaţi service-ul pentru clienţi pentru mai multe informaţii despre utilizarea ajutorului personalizat.<br><br>Dacă doriţi să continuaţi să utilizaţi o versiune anterioară de IBM Knowledge Center instalat personalizat, specificaţi această opţiune pentru a continua să adăugaţi conţinut la instanţa IBM Knowledge Center instalat personalizat pe care aţi implementat-o anterior.",
		admin_help_taxonomy: "Cod taxonomie:",
		admin_help_taxonomy_hover: "Specificaţi codul de taxonomie pentru ajutorul personalizat.<br><br>Codul de taxonomie pentru IBM Content Navigator este SSEUEX. Dacă doriţi să afişaţi ajutorul dumneavoastră sub un nume diferit de produs în IBM Knowledge Center instalat personalizat, trebuie să adăugaţi un cod de taxonomie unic la fişierul KC_taxonomy.ditamap în directorul KnowledgeCenter/usr/taxonomy al directorului de instalare IBM Content Navigator.",
		admin_help_context: "Context de ajutor:",
		admin_help_context_hover: "Specificaţi contextul de ajutor pentru ajutorul personalizat.<br><br>Ajutorul pentru IBM Content Navigator este în directorul KnowledgeCenter/usr/content/com.ibm.usingeuc.doc al directorului de instalare IBM Content Navigator. Contextul ajutorului personalizat este com.ibm.usingeuc.doc. Dacă doriţi să asiguraţi ajutor personalizat, adăugaţi conţinutul la un nou subdirector din directorul KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Pagină de aterizare:",
		admin_help_welcome_hover: "Specificaţi numele subiectul pe care doriţi să-l utilizaţi ca pagină de aterizare când utilizatorii accesează ajutorul. Trebuie să creaţi un fişier de proprietăţi care specifică locaţia paginii de aterizare şi să adăugaţi fişierul de proprietăţi la directorul KnowledgeCenter/usr/conf al directorului de instalare IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Fişier JSON extensii tip Mime:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verificaţi numele fişierului JSON şi calea completă la fişier. Fişierul poate fi un fişier generat din sistemul de fişiere sau un URL care indică la fişierul JSON.  <br><br>Conţinutul fişierului JSON este o matrice pentru definiţiile de tip Mime. <br><br>O definiţie de tip Mime include patru chei \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Primele două chei \"mimeTypes\", \"extensions\"  sunt necesare, şi ele pot fi matrice de şiruri care sunt separate de \",\". Ultimele două chei \"fileType\", \"iconName\" sunt opţionale. <br><br>De exemplu: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuraţie Manager de taskuri",
		admin_taskmanager_service: "Serviciu Manager de taskuri:",
		admin_taskmanager_service_hover: "Specificaţi dacă vreţi să folosiţi serviciul Manager de taskuri pentru a crea şi rula taskuri asincrone. <br><br>Dacă modificaţi această setare, trebuie să reporniţi aplicaţia web IBM Content Navigator pentru ca modificările să aibă efect.",
		admin_taskmanager_url: "URL serviciu Manager de taskuri:",
		admin_taskmanager_url_hover: "Specificaţi URL-ul prin care alte aplicaţii pot comunica cu serviciul Manager de taskuri. URL-ul are formatul http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Director istoric Manager de taskuri:",
		admin_taskmanager_logdirectory_hover: "Implicit, fişierele istoric pentru serviciul Manager de taskuri sunt scrise în acelaşi director ca fişierele istoric ale serverului de aplicaţii web. <br><br>Dacă vreţi ca informaţiile de jurnalizare să fie scrise în alt director pe serverul IBM Content Navigator, specificaţi calea complet calificată a directorului unde vreţi să stocaţi fişierele istoric care sunt generate de componenta Manager de taskuri. <br><br>Dacă modificaţi această setare, trebuie să reporniţi aplicaţia web IBM Content Navigator pentru ca modificările să aibă efect.",
		admin_taskmanager_heartBeatMonitor: "Monitorizare puls cluster",
		admin_taskmanager_heartBeatMonitor_hover: "Doar medii de cluster cu disponibilitate înaltă. Dacă activaţi această opţiune, serviciul Manager de taskuri rerutează taskuri de la noduri care sunt momentan picate la noduri care rulează momentan. <br><br>Dacă modificaţi această setare, trebuie să reporniţi aplicaţia web IBM Content Navigator pentru ca modificările să aibă efect.",

		admin_syncserver_title: "Configurarea serverului de sincronizare",
		admin_syncserver_enable: "Servicii sincronizare:",
		admin_syncserver_enable_hover: "Specificaţi dacă doriţi ca utilizatorii care accesează acest desktop să-şi poată sincroniza articolele pe staţiile lor de lucru şi pe dispozitivele mobile.<br><br><b>Important:</b> Pentru a utiliza această caracteristică, trebuie să finalizaţi şi taskurile următoare:<ul><li>Specificaţi <b>URL public servicii de sincronizare</b> în secţiunea <b>Servicii de sincronizare</b> din unealta de administrare.</li><li>Adăugaţi  o magazie pentru care serviciile de sincronizare sunt activate la acest desktop.</li></ul>Dacă dezactivaţi această opţiune dar adăugaţi o magazie pentru care este activată sincronizarea serviciilor la acest desktop, este ignorată setarea pe magazie.",
		admin_mobileqr_enable: "Afişarea codului QR IBM Navigator pe pagina de logare:",
		admin_mobileqr_enable_hover: "Activaţi această opţiune dacă doriţi să afişaţi codul QR pentru aplicaţia pentru dispozitive mobile IBM Navigator de pe pagina de logare a clientului web. <br><br>Când un utilizator scanează codul QR, acesta este dus la depozitul corespunzător de aplicaţii pentru dispozitivul lui, de unde poate descărca aplicaţia pentru dispozitive mobile IBM Navigator.",

		admin_streamlineservice_enable: "Serviciu de editare:",
		admin_streamlineservice_enable_hover: "Doar utilizatorii FileNet P8. Activaţi această opţiune dacă doriţi ca utilizatorii de desktop să poată adăuga şi edita cu uşurinţă documente din aplicaţii native pe staţiile lor de lucru. <br><br>Pentru a utiliza această setare, trebuie de asemenea să: <ul><li>Activaţi serviciul de editare pe una sau mai multe magazii care sunt asociate cu acest desktop</li><li>Instalaţi clientul IBM Content Navigator Edit pe staţiile de lucru de utilizator</li></ul>",

		admin_repository_general_instructions: "Trebuie să vă conectaţi la magazie înainte de a configura parametrii, proprietăţile sistemului, folderele, şi aşa mai departe.",
		admin_repository_system_instructions: "Specificaţi ce proprietăţi de sistem sunt afişate pentru documentele şi folderele din această magazie.",

		admin_desktop_general_create_instructions: "Un desktop determină ce poate vedea utilizatorul când se loghează în clientul web. După ce creaţi un desktop, puteţi trimite URL-ul desktop-ului la utilizatori pentru ca ei să poată accesa desktop-ul.",
		admin_desktop_admin_instructions: "Desktop-ul de administrare este furnizat cu clientul web pentru a permite utilizatorilor administrativi să seteze clientul web. Acest desktop are acces la toate magaziile care sunt configurate pentru clientul web.",
		admin_desktop_repositories_instructions: "Specificaţi la ce magazii vreţi să aibă acces utilizatorii de pe acest desktop. Trebuie să vă configuraţi magaziile înainte de a le putea adăuga la desktop.<br><br><b>Sugestie:</b> Puteţi limita ce magazii sunt disponibile pentru fiecare caracteristică atunci când configuraţi dispunerea desktop-ului.",
		admin_desktop_menus_instructions: "Specificaţi la ce meniuri vreţi să aibă acces utilizatorii de pe acest desktop. Meniurile specifică ce acţiuni sunt disponibile în funcţie de ce este selectat în interfaţă.<br><br><b>Sugestie:</b> Puteţi personaliza conţinutul meniurilor în secţiunea <b>Meniuri</b> a uneltei de administrare sau puteţi crea noi tipuri de meniuri, creând plug-in-uri.",

		admin_desktop_no_repositories: "Nu există magazii configurate.",

		admin_desktop_id_hover: "ID-ul desktop-ului este inclus în URL-ul clientului web şi specifică ce desktop este deschis când se loghează un utilizator în clientul web. ID-ul trebuie să fie unic şi nu-l puteţi modifica după ce salvaţi desktop-ul.<br><br>ID-ul poate conţine doar caractere alfanumerice şi este sensibil la majuscule.",
		admin_desktop_id_disabled_hover: "ID-ul desktop-ului nu poate fi modificat. Dacă vreţi să folosiţi un alt ID, trebuie să creaţi un nou desktop.",
		admin_desktop_name_hover: "Numele desktop-ului nu poate conţine următoarele caractere: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Configuraţia dumneavoastră poate conţine un singur desktop implicit.",

		admin_repository_id_disabled_hover: "ID-ul magaziei nu poate fi modificat. Dacă vreţi să folosiţi un alt ID, trebuie să creaţi o nouă conexiune de magazie.",
		admin_printService_enable: "Tipărire cu serviciul de tipărire IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Dacă alegeţi să activaţi serviciul de tipărire IBM Daeja ViewONE, documentele sunt convertite la formatul PDF şi tipărirea poate fi realizată folosind orice browser de web.<br><br>Dacă alegeţi să dezactivaţi serviciul de tipărire IBM Daeja ViewONE, sunteţi limitat la tipărirea documentelor doar în browser-ele de web care suportă apleturi Java.  Unele browser-e web nu suportă apleturi Java, şi prin urmare nu suportă tipărirea de apleturi.<br><br>Vedeţi documentaţia pentru browser-ele suportate.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Directorul home al utilizatorului",
		admin_file_tracking_doc_directory_my_documents: "Directorul de documente al utilizatorului",
		admin_file_tracking_doc_directory_qp: "Calea calificată",
		admin_file_tracking_section_tile: "Configurarea urmăririi fişierului",
		admin_file_tracking_home_path: "Calea Acasă",
		admin_file_tracking_my_documents: "Documentele mele",
		admin_file_tracking_exact_path: "Calea complet calificată:",
		admin_file_tracking_qp: "Calea calificată",
		admin_file_tracking_ev: "Variabilă de mediu",
		admin_file_tracking_ev_us: "Variabilă personalizată de mediu ",
		admin_file_tracking_del_local_copy: "Ştergere copie locală:",
		admin_file_tracking_yes: "Da",
		admin_file_tracking_no: "Nu",
		admin_file_tracking_del_local_copy_rt_state_editable: "Permite utilizatorilor să înlocuiască această setare",
		admin_file_tracking_del_local_copy_rt_state1: "Da",
		admin_file_tracking_del_local_copy_rt_state2: "Nu",
		admin_file_Tracking_label: "Urmărirea fişierului:",
		admin_file_Tracking_disable: "Dezactivare",
		admin_file_Tracking_enable: "Activare",
		admin_file_tracking_label_hover_help: "Urmărirea fişierului utilizează un aplet pentru a verifica şi descărca documente într-un director specific de pe maşinile utilizatorilor. Apletul activează de asemenea IBM Content Navigator pentru a găsi documente pe maşinile utilizatorilor atunci când utilizatorii înregistrează documente la intrare.",
		admin_file_tracking_doc_directory: "Locaţie de depozitare:",
		admin_file_tracking_open_file: "Deschiderea automată a fişierelor",
		admin_file_Tracking_append_qualified_path: "Adăugarea directorului la sfârşit",
		admin_file_Tracking_append_qualified_path_hover_help: "Puteţi adăuga un director la sfârşitul variabilei de mediu dacă doriţi ca documentele să fie salvate într-un anumit director. <br/><br/>De exemplu, puteţi specifica faptul că documentele sunt descărcate într-un director <i>EnterpriseDocuments</i> din directorul home al utilizatorului.",
		admin_file_Tracking_append_ev: "Adăugare variabilă de mediu la sfârşit",
		admin_file_Tracking_append_ev_hover_help: "Puteţi adăuga la sfârşit o variabilă de mediu dacă doriţi ca documentele să fie salvate într-un director specificat dinamic, cum ar fi un director de utilizator.<br/><br/>De exemplu, puteţi specifica faptul că documentele sunt stocate într-un sub-director <i>nume_utilizator</i> dintr-un director partajat în reţea. ",
		admin_file_tracking_doc_directory_hover_help: "Specificaţi unde ar trebui stocate documentele atunci când sunt verificate şi descărcate.<br/><br/> <b>Sugestie</b>: Dacă doriţi să depozitaţi documente în directorul home al utilizatorului sau în directorul de documente implicit,selectaţi <b>Variabilă de mediu</b>, ce include variabile predefinite ce indică înspre acele locaţii.",
		admin_file_tracking_qualified_path_hover_help: "Folosiţi structura de director corespunzătoare pentru sistemul dumneavoastră de operare Windows sau Mac pentru a specifica directorul sau directorul de reţea în care vreţi să stocaţi documente. <ul><li>Pentru Windows, includeţi o literă a drive-ului în cale, cum ar fiC:\\Documente întreprindere.</li><li>Pentru un director de reţea partajat, introduceţi calea cu formatul \\\\numeserver\\director</li></ul><br/><b>Important:</b> Pentru a folosi această opţiune, structura de director pe care o specificaţi trebuie să poată fi creată pe toate staţiile de lucru client în mediul dumneavoastră.",
		admin_file_tracking_environment_variable_path_hover_help: "Folosiţi variabilele de mediu corespunzătoare pentru sistemul dumneavoastră de operare Windows sau Mac pentru a specifica directorul sau directorul de reţea în care vreţi să stocaţi documente. <br/><br/>Opţiunea <b>Director home alutilizatorului</b> stochează documentele în următorul director:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>Opţiunea <b>Director de documenteal utilizatorului</b> stochează documentele în următorul director:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Specificaţi dacă copia locală a unui document este ştearsă când utilizatorii adaugă sau înregistrează documente la intrarea în magazie.<br/><br/>Ştergerea copiei locale vă permite să:<br/><ul><li>Impuneţi compatibilitatea cu politicile IT</li><li>Vă asiguraţi că utilizatorii lucrează cu cea mai recentă versiune a documentelor</li></ul><br/><b>Restricţie:</b> Această setare nu este folosită când utilizatorii adaugă documente prin tragere şi plasare.<br/><br/>Pentru IBM Content Navigator for Microsoft Office, trebuie să selectaţi <b>Şterge fişierele locale când utilizatorii adaugă sau înregistrează la intrare un document sau anulează o înregistrare la ieşire</b> în secţiunea <b>Configuraţie Office</b> a desktop-ului.",
		admin_file_tracking_open_file_hover_help: "Această setare înlocuieşte orice preferinţe de gestionare a documentelor ce sunt configurate în browser-ul web al utilizatorului. </br></br><b>Restricţie:</b> Această setare nu este folosită de IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Suprascrierea copiei locale:",
		admin_file_tracking_over_write_file_hover_help: "Specificaţi dacă să fie suprascrisă copia locală a documentului atunci când utilizatorii înregistrează documentele la ieşirea din magazie. <br/><br/>Suprascrierea copiei locale vă permite să:<br/><ul><li>Vă asiguraţi că utilizatorii lucrează cu cea mai recentă versiune a documentelor</li><li>Împiedicaţi utilizatorii să vadă un prompt atunci când există o copie locală</li></ul> </br></br><b>Restricţie:</b> Această setare nu este folosită de IBM Content Navigator for Microsoft Office dacă selectaţi <b>Permite utilizatorilor să înlocuiască această setare</b>.",
		admin_file_tracking_over_write_file_state_editable: "Permite utilizatorilor să înlocuiască această setare",
		admin_file_tracking_inline_help: "Urmărirea fişierului pune în linia de flux procesul de înregistrare a documentelor la ieşirea şi la intrarea din/în magazie. Vă dă posibilitatea să gestionaţi modul în care documentele sunt stocate pe maşinile utilizatorilor. <br/><br/>Suplimentar, urmărirea fişierelor permite ca documentele să fie urmărite în componente multiple ale IBM Content Navigator,cum ar fi clientul web şi IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Trebuie să activaţi autentificarea Standard sau Server înainte de a vă conecta la magazie.",
		admin_box_use_oauth: "Tip de autentificare",
		admin_box_use_oauth_hover: "Selectaţi autentificarea Standard sau Server într-un mediu de producţie când oferiţi acces la documente Box din IBM Content Navigator. Specificaţi valorile client_id şi OAuth2 client_secret care sunt asociate cu această implementare de IBM Content Navigator. Puteţi obţine aceste valori din Box după ce creaţi aplicaţia Box pentru serverul dumneavoastră IBM Content Navigator.<br/><br/>Selectaţi autentificarea Dezvoltator într-un mediu de dezvoltare. Dezvoltatorii se pot loga la Box folosindu-şi contul de dezvoltator şi pot genera un jeton de dezvoltator care este valid 60 de minute. Jetoanele de dezvoltator le permit acestora să se logheze la Box folosind jetonul de dezvoltator ca parolă pentru orice ID de utilizator.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdomeniu cont de întreprindere Box:",
		admin_box_share: "ID conexiune manager de taskuri:",
		admin_box_share_hover: "Pentru copiere Box sau partajare Box, managerul de taskuri foloseşte un ID de utilizator administrator şi o parolă pentru a rula taskuri de fundal care modifica magazia.<br/><br/>Faceţi clic pe Setare şi logaţi-vă la Box folosind un cont valid de administrator Box.<br/><br/>Dacă configuraţi un desktop selectând această magazie Box ca magazie pentru fişiere partajate, trebuie să specificaţi un utilizator administrator Box care are spaţiu de stocare nelimitat în Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Deschiderea automată a fişierelor",
		file_tracking_runtime_overwrite_hover_help: "Dacă nu selectaţi această opţiune şi aveţi un document pe sistemul dumneavoastră de fişiere local cu acelaşi nume, documentul va fi înregistrat la ieşire, dar nu şi descărcat decât dacă faceţi una din următoarele acţiuni:<br/><ul><li> Descărcaţi documentul într-un subdirector al directorului implicit. Dacă selectaţi un subdirector, locaţia documentului poate fi urmărită de aplicaţia web.</li><li>Redenumiţi documentul pe care îl descărcaţi. Redenumirea documentului împiedică un conflict al numelui de fişier.</li></ul>",
		open_file: "Deschiderea automată a fişierelor",
		over_write_file: "Ignorarea copiei locale",
		checkout_and_download_file: "Înregistrare la ieşire şi Descărcare documente",
		download_to_local_directory: "Descărcare în :",
		checkout_and_download_button_title: "Înregistrare la ieşire şi descărcare",
		checkout_without_java_confirmation_dialog: "Fişierul nu poate fi descărcat şi urmărit de caracteristica de urmărire fişiere.",
		browse_for_directory: "Răsfoire",
		selected_documents: "Selectare documente",

		checkout_without_java_confirmation_text: "Această problemă apare din următoarele motive:<br/><ul><li>Java Runtime Environment (JRE) nu este instalat pe staţia dumneavoastră de lucru.</li><li>Plug-in-ul Java nu este activat în browser-ul dumneavoastră web.</li><li>Browser-ul dumneavoastră web nu suportă Java.</li></ul><br/><br/>Pentru a rezolva această problemă, efectuaţi acţiunea corespunzătoare:<br/><br/><ul><li>Dacă doriţi să continuaţi să descărcaţi fişierul fără să fie activată urmărirea fişierelor, faceţi clic pe OK.</li><li>Dacă soriţi să descărcaţi fişierul cu urmărirea fişierelor activată, anulaţi descărcarea şi asiguraţi-vă că JRE este instalat pe staţia dumneavoastră de lucru şi că este activat plug-in-ul Java în browser-ul dumneavoastră web.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Documentul a fost înregistrat la ieşire şi descărcat, dar documentul nu poate fi deschis.",
		runtime_file_tracking_open_error_explanation: "Sistemul de operare care este instalat pe staţia dumneavoastră de lucru nu suportă fişiere de acest tip.",
		runtime_file_tracking_open_error_userResponse: "Pentru a rezolva problema, efectuaţi una dintre următoarele acţiuni:<br/><br/><ul><li>Dacă trebuie să lucraţi cu documentul, deschideţi clientul web dintr-o altă staţie de lucru ce are un sistem de operare diferit.</li><li>Dacă aveţi nevoie doar să vizualizaţi documentul, faceţi clic dreapta pe document în clientul web şi faceţi clic pe Deschide.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Documentul a fost înregistrat la ieşire dar nu a fost descărcat.",
		runtime_file_tracking_save_file_error_explanation: "Un document cu acelaşi nume există în sistemul dumneavoastră de fişiere locale, dar nu a fost suprascris. ",
		runtime_file_tracking_save_file_error_userResponse: "Dacă doriţi să descărcaţi fişierul din magazie, trebuie să înlocuiţi copia locală a documentului atunci când descărcaţi documentul din magazie.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Documentul a fost înregistrat la ieşire, dar documentul nu poate fi descărcat sau deschis.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Un document cu acelaşi nume există în sistemul dumneavoastră local de fişiere. Totuşi, fişierul nu a fost suprascris, ceea ce împiedică documentul din magazie de la a fi descărcat şi deschis.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Dacă doriţi să descărcaţi fişierul din magazie, trebuie să înlocuiţi copia locală a documentului atunci când descărcaţi documentul din magazie.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Documentul nu poate fi descărcat.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Variabila de mediu ${0}, ce este necesară pentru urmărirea fişierului, nu este definită în această maşină client.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Pentru a rezolva problema:<br/><br/><ul><li>Adăugaţi variabila de mediu ${0} la variabilele de mediu ale sistemului de operare.</li><li>Delogaţi-vă din clientul web şi închideţi browser-ul dumneavoastră web. Apoi, logaţi-vă înapoi.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Fişierul nu poate fi descărcat şi urmărit de apletul de urmărire fişiere.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Directorul ${0} directory, ce este necesar pentru urmărirea fişierului, nu este definit în această maşină.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Pentru a rezolva această problemă, faceţi acţiunea corespunzătoare:<br/><br/><ul><li>Faceţi clic pe Răsfoire şi selectaţi un alt director din maşina client. Dacă selectaţi această opţiune, fişierul nu va fi urmărit.</li><li>Contactaţi administratorul dumneavoastră local de sistem şi cereţi-i să specifice un alt director de utilizat pentru urmărirea fişierelor. De exemplu, acest lucru poate fi necesar dacă directorul specificat este pentru un sistem de operare Windows, dar dumneavoastră rulaţi un Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Dacă acest desktop este accesat de pe dispozitive cu alte sisteme de operare, puteţi reduce probabilitatea problemelor făcând una din următoarele acţiuni:<br/><br/><ul><li>Utilizaţi variabile de mediu pentru a specifica locaţia de depozitare din maşinile client.</li><li>Creaţi diferite desktop-uri pentru utilizatorii fiecărui tip de dispozitiv. De exemplu, creaţi un desktop pentru utilizatorii cu un sistem de operare Windows şi un desktop pentru utilizatorii cu Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Cererea dumneavoastră nu poate fi procesată.",
		runtime_file_tracking_generic_error_explanation: "A survenit o eroare în apletul de urmărire al fişierului.",
		runtime_file_tracking_generic_error_userResponse: "Contactaţi administratorul dumneavoastră de sistem pentru asistenţă.",
		runtime_file_tracking_generic_error_adminResponse: "Deschideţi consola Java şi încercaţi să trimiteţi din nou cererea dumneavoastră. Detaliile erorii sunt afişate în consola Java.<br/><br/>Puteţi accesa consola Java din Control Panel (Windows) sau System Preferences (Macintosh) pentru sistemul dumneavoastră de operare.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Cererea dumneavoastră nu poate fi procesată",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Următoarele fişiere au fost adăugate în magazie, dar nu au fost şterse de pe sistemul dumneavoastră de fişiere local: ${0}. Asta se întâmplă de obicei când fişierele sunt deschise sau în curs de utilizare de altă aplicaţie. Dacă e nevoie, puteţi şterge manual fişierele.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Documentul nu poate fi descărcat.",
		runtime_file_tracking_ioexception_error_explanation: "Documentul nu poate fi descărcat.",
		runtime_file_tracking_ioexception_userResponse: "Este posibil să nu aveţi drepturile corespunzătoare pentru a scrie în următorul director: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Asiguraţi-vă că aveţi drepturi de scriere în directorul specificat. Dacă nu aveţi drepturi de scriere în directorul specificat, contactaţi administratorul dumneavoastră de sistem.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Cererea dumneavoastră nu poate fi procesată.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Această eroare poate să apară dintr-unul din următoarele motive:<br/><br/><ul><li>Utilizaţi Safari pe Mac OS şi Java rulează în modul sigur.</li><li>Nu aveţi permisiuni de citire/scriere pentru directorul care este specificat în configuraţia de urmărire fişiere pentru desktopul dumneavoastră.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Puteţi continua să folosiţi IBM Content Navigator fără urmărirea fişierelor, sau puteţi parcurge paşii următori pentru a rezolva problema:<br/><br/><ol><li>Activaţi modul fără siguranţă Java în Safari.</li><li>Dacă sunteţi promptat dacă doriţi să aveţi încredere în site-ul web IBM Content Navigator, faceţi clic pe <b>Am încredere</b> pentru a încărca pagina şi apoi activaţi modul de nesiguranţă Java în Safari.</li></ol><br/><br/>Dacă Safari este configurat corect, parcurgeţi paşii următori pentru a rezolva problema<br/><br/><ol><li>Asiguraţi-vă că aveţi permisiuni de citire/scriere pentru directorul care este specificat în configuraţia de urmărire fişiere pentru desktopul dumneavoastră.</li><li>Dacă nu aveţi permisiuni de citire/scriere pe director, editaţi permisiunile pe director.</li><li>Dacă nu vă puteţi edita permisiunile pe director, administratorul dumneavoastră trebuie să modifice directorul care este configurat pentru urmărirea fişierelor sau să vă dea acces la un desktop care are configurat un director diferit de urmărire fişiere.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Cererea dumneavoastră nu poate fi procesată.",
		runtime_file_tracking_java__notfound_error_explanation: "Această eroare de problemă apare uzual în următoarele situaţii:<br/><br/><ul><li>Java Runtime Environment (JRE) nu este prezent sau activat pe staţia dumneavoastră de lucru.</li><li>Versiunea JRE de pe staţia dumneavoastră de lucru nu este compatibilă cu versiunea de IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Puteţi continua să folosiţi IBM Content Navigator fără urmărirea fişierelor sau puteţi finaliza paşii următori pentru a rezolva problema cu JRE-ul:<br/><br/><ol><li>Asiguraţi-vă că JRE-ul este instalat pe staţia dumneavoastră de lucru.</li><li>Asiguraţi-vă că versiunea de JRE de pe staţia dumneavoastră de lucru este compatibilă cu IBM Content Navigator. O listă a versiunilor suportate este inclusă în documentul <i>Cerinţele preliminare hardware şi software pentru IBM Content Navigator</i> de pe site-ul de Suport software IBM.</li><li>Asiguraţi-vă că JRE-ul este activat pe staţia dumneavoastră de lucru.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Cererea dumneavoastră nu poate fi procesată.",
		runtime_file_tracking_security_error_explanation: "Nu aveţi permisiuni de citire/scriere pentru directorul care este specificat în configuraţia de urmărire fişiere pentru desktopul dumneavoastră.",
		runtime_file_tracking_security_error_userResponse: "Puteţi continua să folosiţi IBM Content Navigator fără urmărirea fişierelor, sau puteţi lucra cu administratorul dumneavoastră de sistem pentru a parcurge paşii următori:<ol><li>Asiguraţi-vă că aveţi permisiuni de citire/scriere pentru directorul care este specificat în configuraţia de urmărire fişiere pentru desktopul dumneavoastră. </li><li>Dacă nu aveţi permisiuni de citire/scriere pe director, editaţi permisiunile pe director.</li><li>Dacă nu vă puteţi edita permisiunile pe director, administratorul dumneavoastră trebuie să modifice directorul care este configurat pentru urmărirea fişierelor sau să vă dea acces la un desktop care are configurat un director diferit de urmărire fişiere.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Următoarele documente au fost descărcate: ${0}.",

		admin_file_tracking_inline_help: "Urmărirea fişierelor fluidizează procesul de adăugare a documentelor şi de înregistrare a documentelor la ieşirea şi la intrarea într-o magazie. De asemenea, vă permite să gestionaţi cum sunt stocate documentele pe maşinile utilizatorilor.<br/><br/>Suplimentar, urmărirea fişierelor permite ca documentele să fie urmărite în componente multiple ale IBM Content Navigator,cum ar fi clientul web şi IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID-ul meniului nu poate începe cu \"Default\".  \"Default\" este un prefix rezervat pentru ID-urile de meniu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID-ul poate conţine doar caractere alfanumerice şi este sensibil la majuscule.",
		admin_repository_id_hover: "ID-ul magaziei este inclus în URL-urile clientului web, favorite şi legături e-mail pentru a specifica la ce magazie se face logarea. ID-ul trebuie să fie unic şi nu-l puteţi modifica după ce vă salvaţi magazia.<br><br>ID-ul poate conţine doar caractere alfanumerice şi este sensibil la majuscule.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Numele nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID-ul desktop-ului nu poate conţine spaţii şi niciunul din următoarele caractere: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Numele desktop-ului nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Numele de afişare nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Specificaţi numele magaziei de afişat utilizatorilor în clientul web.<br><br>Numele nu poate conţine niciunul din următoarele caractere: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Specificaţi numele gazdă sau adresa IP a serverului Content Manager OnDemand la care vreţi să vă conectaţi, de exemplu, server.id.com.",
		admin_server_p8_name_hover: "Specificaţi URL-ul serverului Content Engine sau Content Platform Engine. URL-ul este sensibil la majuscule şi are următorul format:<br><br><ul><li>Pe s erverul de aplicaţii WebSphere, iiop://host_name:port_number/FileNet/Engine. Pe implementările de bază, numărul de port implicit este 2809.</li><li>Pe serverul WebLogic, t3://host_name:port_number/FileNet/Engine. Numărul de port implicit este 7001.</li></ul><br><br>Pentru configuraţiile de înaltă disponibilitate ale Content Engine şi Content Platform Engine, utilizaţi URL-ul de transport EJB de înaltă disponibilitate fără prefixul cemp:. ",
		admin_server_p8_protocol_hover: "Specificaţi protocolul de utilizat pentru a comunica cu Content Engine.",
		admin_server_cm_name_hover: "Specificaţi numele de catalog local al bazei de date Content Manager sau numele conexiunii serverului de bibliotecă. Acest nume este valoarea care este specificată pentru variabila ICMSERVER.",
		admin_repository_cmis_hover: "Specificaţi ID-ul magaziei la care vreţi să vă conectaţi.  ID-ul fiecărei magazii din mediul dumneavoastră CMIS este menţionat în documentul serviciului de legare AtomPub.  <br/><br/><b>Sugestie:</b>De asemenea, puteţi introduce un asterisc (*) pentru a vă conecta la prima sau singura magazie definită în documentul serviciului de legare Atompub.",
		admin_url_cmis_hover: "Formatul URL-ului variază în funcţie de furnizorul de servicii. Consultaţi-vă documentaţia CMIS sau contactaţi-vă administratorul serverului CMIS pentru URL.",
		admin_repcfg_cmis_status_columns_hover: "Specificaţi stările articolelor pentru care vreţi să vedeţi pictograme. Pictogramele de stare sunt afişate lângă documente în lista de conţinut.",
		admin_port_hover: "Specificaţi numărul de port TCP/IP la care ascultă serverul Content Manager OnDemand. Valoarea implicită este 1445.",
		admin_unified_searches_hover: "Specificaţi dacă doriţi ca utilizatorii să fie în măsură de a salva căutările în mai multe magazii în această magazie.<br/><br/>Dacă nu activaţi această opţiune, utilizatorii pot crea în continuare căutări în mai multe magazii care rulează pentru această magazie. Puteţi împiedica utilizatorii să creeze căutări în mai multe magazii la nivel de desktop.<br/><br/>Dacă activaţi căutările unificate, IBM Content Navigator creează modelul de căutare de date în mai multe magazii în magazie.<br/><br/>Pentru IBM FileNet Content Manager, trebuie să vă conectaţi la magazie ca şi administrator Content Engine înainte de a activa această opţiune.",
		admin_unified_searches_cm_hover: "Specificaţi dacă doriţi ca utilizatorii să fie în măsură de a salva căutările în mai multe magazii în această magazie.<br/><br/>Dacă nu activaţi această opţiune, utilizatorii pot crea în continuare căutări în mai multe magazii care rulează pentru această magazie. Puteţi împiedica utilizatorii să creeze căutări în mai multe magazii la nivel de desktop.<br/><br/>Dacă activaţi căutările unificate, IBM Content Navigator creează modelul de căutare de date în mai multe magazii în magazie.",
		admin_max_results_hover: "Specificaţi dacă să se limiteze numărul rezultatelor care sunt returnate de o căutare. Dacă nu limitaţi numărul rezultatelor căutării, aţi putea întâmpina probleme de performanţă dacă o căutare returnează un număr mare de rezultate.",
		admin_timeout_hover: "Specificaţi cât de mult, în secunde, poate rula o căutare pe magazie. În cazul în care căutarea nu se finalizează în timpul specificat, clientul web anulează cererea. Timeout-ul maxim recomandat este de 60 de secunde.",
		admin_object_store_hover: "Specificaţi depozitul de obiecte la care vreţi să vă conectaţi pe serverul Content Engine. Puteţi obţine numele simbolic din consola de administrare Content Platform Engine.",
		admin_object_store_display_name_hover: "Numele de afişare al depozitului de obiecte este necesar dacă vreţi să folosiţi fluxurile de lucru IBM FileNet P8. Puteţi obţine numele afişat al depozitului de obiecte din consola de administrare Content Platform Engine.",
		admin_all_searches_hover: "Specificaţi dacă să se limiteze numărul căutărilor care sunt afişate sub <b>Toate căutările</b> când utilizatorii caută în magazie. Dacă nu limitaţi numărul căutărilor, aţi putea întâlni probleme de performanţă dacă magazia include un număr mare de căutări salvate.",

		admin_text_desktop: "Desktop",
		admin_text_repository: "Magazie",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Temă",
		admin_text_menu: "Meniu",
		admin_text_reason_code: "Motiv de redactare",
		admin_text_redactions: "Redactări",
		admin_text_viewer_mapping: "Mapare vizualizator",
		admin_text_mobile_feature: "Caracteristica Mobile",
		admin_test_interface_text: "Text interfaţă",
		admin_text_interface_text_locale: "Text interfaţă localizat",
		admin_text_icon_status: "Pictogramă de stare",
		admin_text_icon: "Pictogramă",
		admin_text_file_type: "Tip fişier",
		admin_text_viewer: "Vizualizator",
		admin_text_desktop_access: "Acces la desktop",
		admin_text_mapped_properties_for_office: "Proprietăţi mapate pentru Microsoft Office",
		admin_text_desktop_features: "Caracteristici de desktop",
		admin_text_unknown: "Necunoscut",
		admin_folder_instruction: "Specificaţi proprietăţile ce sunt afişate pentru documente şi foldere în lista de conţinut atunci când utilizatorii răsfoiesc. De asemenea, puteţi specifica ordinea în care sunt afişate proprietăţile.",
		admin_search_instruction: "Specificaţi ce opţiuni sunt selectate implicit când utilizatorii creează o căutare.",
		admin_repository_office_conf_class_instruction: "Dacă aveţi instalat IBM Content Navigator for Microsoft Office pe maşinile client din mediul dumneavoastră, puteţi specifica modul în care sunt manevrate documentele atunci când sunt adăugate sau înregistrate la intrare în această magazie.",
		admin_repository_office_conf_instruction: "Mapaţi proprietăţile documentelor Microsoft Office la proprietăţile care sunt definite în această magazie.<br/><br/>Când este activată maparea proprietăţilor pentru un desktop cu care este asociată această magazie, proprietăţile care sunt setate pe documentele Microsoft Office sunt folosite pentru a popula proprietăţile din magazia unde utilizatorul adaugă un document din IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mapare proprietate",
		admin_repository_office_conf_prop_mapping_title1: "Integrare MS Office",
		admin_office_conf_instruction: "Puteţi controla cum se integrează IBM Content Navigator cu aplicaţiile Microsoft Office când este instalat IBM Content Navigator for Microsoft Office pe maşinile client<br /><br /><b>Important:</b> Dacă selectaţi <b>Mapare proprietăţi Office…</b>, trebuie să configuraţi de asemenea maparea proprietăţilor pentru fiecare magazie care este asociată cu acest desktop. Puteţi configura mapările proprietăţilor în fila <b>Proprietăţi Office</b> pentru fiecare magazie din mediul dumneavoastră.",
		admin_desktop_workflows_instruction: "<b>Doar sisteme IBM FileNet P8:</b> Specificaţi ce spaţii de aplicaţie se afişează pe acest desktop. Ordinea spaţiilor de aplicaţie selectate determină ordinea în care sunt afişate spaţiile de aplicaţie în clientul web.<br><br><b>Sugestie:</b> Puteţi modifica numele de afişare al spaţiilor de aplicaţie specificând noi nume în secţiunea <b>Etichete</b> a uneltei de administrare.",
		admin_search_filtered_properties_instruction: "Specificaţi proprietăţile pe care pot căuta utilizatorii. Puteţi ascunde orice proprietate pe care nu vreţi să caute utilizatorii.",
		admin_search_filtered_operators_instruction: "Specificaţi operatorii care sunt disponibili când utilizatorii caută un anumit tip de date, cum ar fi o dată sau un întreg. Puteţi ascunde orice operator pe care nu vreţi să-l selecteze utilizatorii.",
		admin_search_default_search_results_instruction: "Specificaţi proprietăţile care sunt afişate pentru documente şi foldere în rezultatele returnate la căutare. Puteţi ascunde orice proprietate care nu vreţi să apară în rezultatele căutării.",
		admin_search_default_search_results_p8_cmis_instruction: "Specificaţi proprietăţile care sunt afişate pentru documente în rezultatele returnate la căutare. Puteţi ascunde orice proprietate care nu vreţi să apară printre rezultate.",

		admin_datetimeOp: "Dată-oră",
		admin_floatOp: "Număr cu virgulă mobilă",
		admin_integerOp: "Întreg",
		admin_stringOp: "Şir",
		admin_binaryOp: "Binar",
		admin_objectOp: "Obiect",
		admin_idOp: "ID",
		admin_userOp: "Utilizator",
		admin_booleanOp: "Boolean",

		admin_string: "Şir",
		admin_long: "Long",
		admin_date: "Dată",
		admin_double: "Double",
		admin_object: "Obiect",
		admin_guid: "GUID",
		admin_boolean: "Boolean",

		admin_repcfg_heading: "Puteţi înlocui comportamentul implicit al acestei magazii, setând parametrii de configurare.",
		admin_repcfg_heading_od: "Puteţi înlocui comportamentul implicit al acestei magazii, setând parametrii de configurare.<br /><br /><b>Important:</b> Pentru a folosi clientul web cu Content Manager OnDemand, trebuie să specificaţi valori pentru parametrii care sunt incluşi în fila <b>Content Manager OnDemand</b> de sub <b>Setări</b>, care se aplică tuturor magaziilor Content Manager OnDemand la care vă conectaţi.",
		admin_repcfg_teamspaces: "Gestionare spaţiu echipă:",
		admin_repcfg_enable: "Activare",
		admin_repcfg_disable: "Dezactivare",

		admin_repcfg_deliver_redacted_pdf_files_as: "Fişierele PDF redactate vor fi livrate ca:",
		admin_repcfg_burn_pdf_to_pdf: "Fişiere PDF",
		admin_repcfg_burn_pdf_to_tiff: "Fişiere TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Un fişier PDF care este redactat prin aplicarea redactărilor bazate pe rol poate fi livrat clientului într-un format de fişier diferit. Când formatul de fişier se modifică, se modifică şi extensia de fişier şi tipul MIME.<br><br>De exemplu, când un fişier PDF este livrat ca un fişier TIFF, extensia de fişier se modifică la .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Se permite utilizatorilor să combine sau să despartă paginile care au redactările bazate pe rol",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Alegeţi această opţiune pentru a permite utilizatorilor să combine sau să despartă paginile care au redactările bazate pe rol. Utilizatorii care nu sunt editori de redactare nu vor putea să editeze redactările bazate pe rol şi nu li se acordă acces la datele sensibile asociate cu redactările bazate pe rol, chiar dacă această opţiune este activată.",
		admin_repcfg_modify_teamspace_roles: "Permite proprietarilor să modifice rolurile spaţiilor de echipă existente.",
		admin_repcfg_tm_delete_teamspace: "Permite proprietarilor să şteargă spaţiul de echipă, inclusiv conţinut",
		admin_repcfg_tm_delete_teamspace_id_missing: "Trebuie să specificaţi numele de utilizator al unui administrator de magazie.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Trebuie să specificaţi parola administratorului de magazie.",
		admin_repcfg_teamspace_display_Recent: "Afişare numai spaţii de echipă modificate recent ",
		admin_repcfg_teamspace_display_Recent_value: "Zile de la ultima modificare:",

		admin_repcfg_folder_selector: "Folder rădăcină:",
		admin_repcfg_enable_folder_selector: "Activare",
		admin_repcfg_disable_folder_selector: "Dezactivare",
		admin_repcfg_SSO: "Semnare unică:",
		admin_repcfg_teamspace_template_permission_text: "Alocaţi creatorii de şabloane de spaţiu de echipă:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Specificaţi grupurile sau utilizatorii care pot crea şabloane de spaţiu de echipă. Utilizatorilor şi grupurilor le sunt date setările de securitate corespunzătoare pe folderele şi clasele necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Aflaţi mai multe</a><br/><br/><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea spaţiului de echipă.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Specificaţi grupurile sau utilizatorii care pot crea şabloane de spaţiu de echipă. Utilizatorii sunt adăugaţi la ACL-urile corespunzătoare şi le sunt date privilegiile necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Aflaţi mai multe</a><br/><br/><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea spaţiului de echipă.",
		admin_repcfg_teamspace_permission_text: "Alocare roluri spaţiu de echipă:",
		admin_repcfg_teamspace_permission_hover_p8: "Specificaţi grupurile sau utilizatorii care pot crea spaţii de echipă şi pot folosi spaţii de echipă. Utilizatorilor le sunt date setările de securitate corespunzătoare pe folderele şi clasele necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Aflaţi mai multe</a><br/><br/><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea spaţiului de echipă.",
		admin_repcfg_teamspace_permission_hover_cm: "Specificaţi grupurile sau utilizatorii care pot crea spaţii de echipă şi pot folosi spaţii de echipă. Utilizatorii sunt adăugaţi la ACL-urile corespunzătoare şi le sunt date privilegiile necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Aflaţi mai multe</a><br/><br/><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea spaţiului de echipă.",
		admin_repcfg_entry_template_permission_text: "Alocare roluri şablon de intrare:",
		admin_repcfg_entry_template_permission_hover_p8: "Specificaţi grupurile sau utilizatorii care pot crea şabloane de intrare şi pot folosi şabloane de intrare. Utilizatorilor le sunt date setările de securitate corespunzătoare pe clasa de documente Şablon de intrare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Aflaţi mai multe</a><br/><br/><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea şabloanelor de intrare.",
		admin_repcfg_entry_template_permission_hover_cm: "Specificaţi grupurile sau utilizatorii care pot crea şabloane de intrare şi pot folosi şabloane de intrare. Utilizatorii sunt adăugaţi la ACL-urile corespunzătoare şi le sunt date privilegiile necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Aflaţi mai multe</a><br /><br /><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea şabloanelor de intrare.",
		admin_repcfg_office_template_permission_text: "Alocare roluri şablon:",
		admin_repcfg_office_template_permission_hover_cm: "Specificaţi grupurile sau utilizatorii care pot crea, edita şi folosi şabloane Microsoft Office Online sau Edit Service. Utilizatorii sunt adăugaţi la ACL-urile corespunzătoare şi le sunt date privilegiile necesare.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a><br /><br /><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea şabloanelor Microsoft Office Online sau Edit Service.",
		admin_repcfg_draft_permission_text: "Alocare roluri de ciornă:",
		admin_repcfg_draft_permission_hover_cm: "Specificaţi grupurile sau utilizatorii care pot crea ciorne de documente Microsoft Office Online sau Edit Service în timpul editării colaborative. Orice utilizator care trebuie să editeze în colaborare documente în Microsoft Office Online sau Edit Service trebuie să aibă privilegiile corespunzătoare pentru a crea ciorne. Utilizatorii sunt adăugaţi la ACL-urile corespunzătoare şi le sunt date privilegiile necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a><br /><br /><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea ciornelor.",
		admin_repcfg_search_permission_text: "Alocare roluri căutare:",
		admin_repcfg_search_permission_hover_p8: "Specificaţi grupurile sau utilizatorii care pot crea sau folosi căutări salvate şi căutări pe mai multe magazii. Utilizatorilor le sunt date setările de securitate corespunzătoare pe clasele necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Aflaţi mai multe</a><br /><br /><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea căutării.",
		admin_repcfg_search_permission_hover_cm: "Specificaţi grupurile sau utilizatorii care pot crea, edita sau folosi căutări salvate şi căutări pe mai multe magazii. Utilizatorii sunt adăugaţi la ACL-urile corespunzătoare şi le sunt date privilegiile necesare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Aflaţi mai multe</a><br /><br /><b>Recomandare:</b> Folosiţi grupuri pentru a simplifica gestionarea căutării.",
		admin_repcfg_search_permission_title: "Roluri căutare",
		admin_repcfg_search_permission_intro_text: "Asiguraţi-vă că utilizatorii au acces la un desktop care le suportă rolul. De exemplu, asiguraţi-vă că creatorii căutării au acces la un desktop care le permite să creeze căutări şi căutări pe mai multe magazii.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administratorii şablonului de spaţiu de echipă sunt utilizatori care au permisiuni de <b>Control complet</b> pe magazie (depozit de obiecte). Nu puteţi modifica lista de administratori de şabloane de spaţiu de echipă din unealta de administrare. <p>Administratorii de şabloane de spaţiu de echipă pot şterge sau modifica orice şablon de spaţiu de echipă. Utilizatorul care creează un şablon de spaţiu de echipă nu e nevoie să partajeze şablonul cu administratorii de şabloane de spaţiu de echipă.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Când desemnaţi un utilizator sau grup ca creator de şablon de spaţiu de echipă, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a crea şabloane de spaţiu de echipă. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Aflaţi mai multe</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Utilizatori şi grupuri care sunt alocate cu alte privilegii decât privilegiile asociate cu Administratori şi Creatori.<p>Puteţi să mutaţi aceşti utilizatori şi grupuri la rolul creatorilor de şablon de spaţiu de echipă, înlăturând-le din rolul Altele şi apoi alocându-le drept creatori de şablon de spaţiu de echipă.<p>Puteţi să examinaţi privilegiile acordate curent acestor utilizatori şi grupuri, utilizând IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Administratorii spaţiului de echipă sunt utilizatori care au permisiuni de <b>Control complet</b> pe magazie (depozit de obiecte). Nu puteţi modifica lista de administratori de spaţiu de echipă din unealta de administrare.<p>Administratorii de spaţii de echipă pot şterge sau modifica orice spaţiu de echipă. Utilizatorul care creează un spaţiu de echipă nu e nevoie să partajeze spaţiul de echipă cu administratorii de spaţii de echipă.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Când desemnaţi un utilizator sau grup ca creator de spaţiu de echipă, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a crea spaţii de echipă. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Aflaţi mai multe</a>",
		admin_repcfg_teamspace_user_hover_p8: "Când desemnaţi un utilizator sau grup ca utilizator de spaţiu de echipă, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a folosi spaţii de echipă. Totuşi, un utilizator trebuie să fie membru al unui spaţiu de echipă pentru a accesa spaţiul de echipă. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Aflaţi mai multe</a><p><b>Sugestie:</b> Dacă vreţi ca toţi utilizatorii din mediul dumneavoastră să poată vedea spaţii de echipă, puteţi adăuga pseudo-contul #AUTHENTICATED-USERS la rolul de utilizator de spaţiu de echipă.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Utilizatori şi grupuri care sunt alocate cu alte privilegii decât privilegiile asociate cu Administratori, Creatori şi Utilizatori.<p>Puteţi să mutaţi aceşti utilizatori şi grupuri în roluri predefinite, înlăturând-le din rolul Altele şi apoi alocându-le roluri de spaţiu de echipă.<p>Puteţi să examinaţi privilegiile acordate curent acestor utilizatori şi grupuri, utilizând IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administratorii şablonului de intrare sunt utilizatori care au permisiuni de <b>Control complet</b> pe magazie (depozit de obiecte). Nu puteţi modifica lista de administratori de şabloane de intrare din unealta de administrare. <p>Administratorii de şabloane de intrare pot şterge sau modifica orice şablon de intrare. Utilizatorul care creează un şablon de intrare nu e nevoie să partajeze şablonul cu administratorii de şabloane de intrare.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Când desemnaţi un utilizator sau grup ca creator de şablon de intrare, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a crea şabloane de intrare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Aflaţi mai multe</a>",
		admin_repcfg_entry_template_user_hover_p8: "Când desemnaţi un utilizator sau grup ca utilizator de şablon de intrare, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a folosi şabloane de intrare. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Aflaţi mai multe</a><p><b>Sugestie:</b> Dacă vreţi ca toţi utilizatorii din mediul dumneavoastră să poată folosi şabloane de intrare, puteţi adăuga pseudo-contul #AUTHENTICATED-USERS la rolul de utilizator de şablon de intrare.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Utilizatori şi grupuri care sunt alocate cu alte privilegii decât privilegiile asociate cu Administratori, Creatori şi Utilizatori.<p>Puteţi să mutaţi aceşti utilizatori şi grupuri în roluri predefinite, înlăturând-le din rolul Altele şi apoi alocându-le roluri de şablon de intrare.<p>Puteţi să examinaţi privilegiile acordate curent acestor utilizatori şi grupuri, utilizând IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Când desemnaţi un utilizator sau grup ca creator de şablon de spaţiu de echipă, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a crea şabloane de spaţiu de echipă pe magazie. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Aflaţi mai multe</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Când desemnaţi un utilizator sau grup ca creator de spaţiu de echipă, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a crea spaţii de echipă pe magazie. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Aflaţi mai multe</a>",
		admin_repcfg_teamspace_user_hover_cm: "Când desemnaţi un utilizator sau grup ca utilizator de spaţiu de echipă, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a folosi spaţii de echipă pe magazie. Totuşi, un utilizator trebuie să fie membru al unui spaţiu de echipă pentru a accesa spaţiul de echipă. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Aflaţi mai multe</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Când desemnaţi un utilizator sau grup ca creator de şablon de intrare, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a crea şabloane de intrare pe magazie. <br/><br/>Totuşi, setările de securitate pentru un anumit şablon de intrare determină privilegiile pe care le are utilizatorul sau grupul pe şablonul de intrare . <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Aflaţi mai multe</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Când desemnaţi un utilizator sau grup ca editor de şablon de intrare, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a modifica şabloane de intrare pe magazie. <br/><br/>Totuşi, setările de securitate pentru un anumit şablon de intrare determină privilegiile pe care le are utilizatorul sau grupul pe şablonul de intrare . <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Aflaţi mai multe</a>",
		admin_repcfg_entry_user_hover_cm: "Când desemnaţi un utilizator sau grup ca utilizator de şablon de intrare, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a folosi şabloane de intrare pe magazie. <br/><br/>Totuşi, setările de securitate pentru un anumit şablon de intrare determină privilegiile pe care le are utilizatorul sau grupul pe şablonul de intrare . <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Aflaţi mai multe</a>",
		admin_repcfg_office_template_creators_hover_cm: "Când desemnaţi un utilizator sau grup ca creator de şabloane Microsoft Office Online sau Edit Service, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a crea fişiere de şabloane pe magazie. <br/><br/>Totuşi, setările de securitate pentru un anumit fişier de şabloane determină privilegiile pe care le are utilizatorul sau grupul pe şablon. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a>",
		admin_repcfg_office_template_editors_hover_cm: "Când desemnaţi un utilizator sau grup ca editor de şabloane Microsoft Office Online sau Edit Service, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a edita fişiere de şabloane pe magazie.  <br/><br/>Totuşi, setările de securitate pentru un anumit fişier de şabloane determină privilegiile pe care le are utilizatorul sau grupul pe şablon. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a>",
		admin_repcfg_office_template_user_hover_cm: "Când desemnaţi un utilizator sau grup ca utilizator de şabloane Microsoft Office Online sau Edit Service, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a aplica un şablon când creează un nou document Office Online sau Edit Service din clientul web.  <br/><br/>Totuşi, setările de securitate pentru un anumit fişier de şabloane determină privilegiile pe care le are utilizatorul sau grupul pe şablon.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a>",
		admin_repcfg_draft_creators_hover_cm: "Oricărui utilizator care trebuie să editeze în colaborare documente în Microsoft Office Online sau Edit Service trebuie să i se aloce acest rol. Nu asignaţi utilizatori la roluri de editor sau de utilizator. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a>",
		admin_repcfg_draft_editors_hover_cm: "Orice utilizator care trebuie să editeze în colaborare documente în Microsoft Office Online sau Edit Service trebuie să fie asignat la rolul de <b>creator</b>. Dacă unui utilizator îi este alocat rolul de editor, acesta nu poate crea ciorne, care sunt necesare pentru editarea colaborativă.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a>",
		admin_repcfg_draft_user_hover_cm: "Orice utilizator care trebuie să editeze în colaborare documente în Microsoft Office Online sau Edit Service trebuie să fie asignat la rolul de <b>creator</b>. Dacă unui utilizator îi este alocat rolul de utilizator, acesta nu poate crea ciornele care sunt necesare pentru editarea colaborativă.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Aflaţi mai multe</a>",		
		admin_repcfg_search_others_hover_p8: "Utilizatori şi grupuri care sunt alocate cu alte privilegii decât privilegiile asociate cu Administratori, Creatori şi Utilizatori.<p>Puteţi să mutaţi aceşti utilizatori şi grupuri în roluri predefinite, înlăturând-le din rolul Altele şi apoi alocându-le roluri de căutare.<p>Puteţi să examinaţi privilegiile acordate curent acestor utilizatori şi grupuri, utilizând IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Administratorii căutării sunt utilizatori care au permisiuni de <b>Control complet</b> pe magazie (depozit de obiecte). Nu puteţi modifica lista de administratori de căutare din unealta de administrare. <br /><br />Administratorii căutării pot şterge sau modifica orice căutare. Utilizatorul care creează o căutare nu e nevoie să partajeze căutarea cu administratorii căutării.",
		admin_repcfg_search_creators_hover_p8: "Când desemnaţi un utilizator sau grup ca creator de căutare, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a crea căutări. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Aflaţi mai multe</a>",
		admin_repcfg_search_user_hover_p8: "Când desemnaţi un utilizator sau grup ca utilizator de căutare, utilizatorului sau grupului îi este dată securitatea corespunzătoare pe magazie pentru a folosi căutări <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Află mai multe</a>.<br /><br /><b>Sugestie:</b> Dacă vreţi ca toţi utilizatorii din mediul dumneavoastră să poată folosi căutări, puteţi adăuga pseudo-contul #AUTHENTICATED-USERS la rolul de utilizator de căutare.<br/><br />Implicit, un utilizator de căutare poate crea căutări şi căutări pe mai multe magazii, dar nu poate salva căutările. Puteţi împiedica utilizatorii căutării să creeze căutări punându-i să folosească un desktop pentru care sunt selectate următoarele opţiuni:<ul><li><b>Împiedică utilizatorii să creeze căutări</b></li><li><b>Împiedicare utilizatori să creeze căutări în mai multe magazii</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Când desemnaţi un utilizator sau grup ca creator de căutare, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a crea şi salva căutări şi căutări pe mai multe magazii. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Aflaţi mai multe</a><br /><br /><b>Important:</b> Asiguraţi-vă că creatorii căutării folosesc un desktop pentru care nu sunt selectate următoarele opţiuni:<ul><li><b>Împiedică utilizatorii să creeze căutări</b></li><li><b>Împiedicare utilizatori să creeze căutări în mai multe magazii</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Când desemnaţi un utilizator sau grup ca editor de căutare, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a modifica căutări şi căutări pe mai multe magazii existente. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Aflaţi mai multe</a><br /><br /><b>Sugestie:</b> Implicit, un editor de căutare poate crea căutări şi căutări pe mai multe magazii, dar nu poate salva căutările. Puteţi împiedica editorii căutării să creeze căutări punându-i să folosească un desktop pentru care sunt selectate următoarele opţiuni:<ul><li><b>Împiedică utilizatorii să creeze căutări</b></li><li><b>Împiedicare utilizatori să creeze căutări în mai multe magazii</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Când desemnaţi un utilizator sau grup ca utilizator de căutare, utilizatorului sau grupului îi sunt date privilegiile corespunzătoare pentru a deschide şi rula căutări salvate şi căutări pe mai multe magazii. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Aflaţi mai multe</a><br /><br /><b>Sugestie:</b> Implicit, un utilizator de căutare poate crea căutări şi căutări pe mai multe magazii, dar nu poate salva căutările. Puteţi împiedica utilizatorii căutării să creeze căutări punându-i să folosească un desktop pentru care sunt selectate următoarele opţiuni:<ul><li><b>Împiedică utilizatorii să creeze căutări</b></li><li><b>Împiedicare utilizatori să creeze căutări în mai multe magazii</b></li></ul>",
		admin_repcfg_db_encoding: "Codare caractere în baza de date server:",
		admin_repcfg_db_encoding_hover: "Codarea implicită a caracterelor pentru o bază de date IBM Content Manager este UTF-8.",
		admin_repcfg_db_encoding_specify: "Specificare codare caractere din baza de date",
		admin_repcfg_db_encoding_utf8: "Codare UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Specificaţi această opţiune dacă utilizaţi o bază de date codată UTF-8. IBM Content Navigator va utiliza codarea UTF-8 pentru a verifica lungimea şirurilor de valori ale proprietăţii articolului.",
		admin_repcfg_db_encoding_other: "Alte codări",
		admin_repcfg_db_encoding_other_hover: "Specificaţi această opţiune dacă utilizaţi o bază de date cu o bază de date cu o codare care nu este UTF-8. IBM Content Navigator va utiliza contorul de caractere pentru a verifica lungimea şirurilor de valori ale proprietăţii articolului.",
		admin_repcfg_language_codes: "Coduri de limbă server:",
		admin_repcfg_language_codes_avail: "Disponibil",
		admin_repcfg_language_codes_sel: "Selectat",
		admin_repcfg_pdf_conversion: "Tipuri MIME de convertit la documente PDF în ataşamente:",
		admin_repcfg_pdf_conversion_avail: "Disponibil",
		admin_repcfg_pdf_conversion_sel: "Selectat",

		admin_repcfg_box_share_enable_classes_label: "Clasele de modificat pentru suport de partajare Box:",
		admin_repcfg_box_share_enable_classes_hover: "Puteţi modifica această clasă astfel încât să stocheze ID-ul fişierului în Box când este partajat articolul.",
		admin_repcfg_box_share_enable_classes_warning: "Important: Toate clasele pe care le specificaţi vor fi modificate pentru a suporta partajarea Box. După ce vă salvaţi modificările, modificările nu pot fi înlăturate din clase.<br><br>Trebuie să fiţi conectat la magazie ca administrator de server de bibliotecă pentru a modifica clase.",
		admin_repcfg_box_share_enable_classes_available: "Clase disponibile",
		admin_repcfg_box_share_enable_classes_selected: "Clase selectate",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "ID partajare depozit Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Această clasă a fost deja modificată pentru a stoca ID-ul de partajare Box. Nu puteţi înlătura această opţiune.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modificaţi această clasă astfel încât să stocheze ID-ul fişierului în Box când este partajat articolul.",

		admin_repcfg_redaction: "Redactări bazate pe rol:",
		admin_repcfg_enable_redaction_hover: "Specificaţi dacă vreţi să utilizaţi redactări bazate pe rol pe documentele din această magazie.<br/><br/>Redactările bazate pe rol sunt aplicate atunci când un document este descărcat, tipărit, randat de un vizualizator, sau afişat ca o miniatură. Ce văd utilizatorii atunci când ei vizualizează documentul este dependent de rolul lor şi de politicile de redactare aplicate.",

		admin_repcfg_redaction_policy_permission_text: "Alocaţi editori de politică:",
		admin_repcfg_redaction_policy_editors_hover: "Selectaţi utilizatorii şi grupurile care vor crea, modifica şi şterge politici de redactare şi roluri de redactare.",
		admin_repcfg_redaction_policy_editors_select_hover: "Editorii de politici de redactare pot crea, modifica şi şterge politici de redactare şi roluri de redactare.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Administratorii politicii de redactare pot aloca editorii politicii de redactare.<br/><br/>Puteţi să modificaţi lista de administratori ai politicilor de redactare folosind IBM Administration Console pentru Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Administratorii politicii de redactare pot aloca editorii politicii de redactare.<br/><br/>Puteţi să modificaţi lista de administratori ai politicilor de redactare folosind clientul sistemului de administrare IBM Administration Console.",

		admin_repcfg_redaction_permission_text: "Alocaţi editori de redactare:",
		admin_repcfg_redaction_editors_hover: "Selectaţi utilizatorii şi grupurile care vor crea, modifica şi şterge redactări bazate pe rol. După selectaţi utilizatori şi grupuri ca editori, trebuie să îi specificaţi ca editori în politicile de redactare înainte de ei să poată edita redactările bazate pe rol.",
   		admin_repcfg_redaction_editors_select_hover: "Editorii de redactare pot crea, modifica şi şterge redactări bazate pe rol când sunt, de asemenea, specificaţi ca editori în politicile de redactare.",
   		admin_repcfg_redaction_administrators_hover_p8: "Administratorii redactare pot aloca editorii redactare.<br/><br/>Puteţi să modificaţi lista de administratori de redactare folosind IBM Administration Console pentru Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Administratorii redactare pot aloca editorii redactare.<br/><br/>Puteţi să modificaţi lista de administratori de redactare folosind clientul sistemului de administrare IBM Administration Console.",
		admin_repcfg_entry_template: "Gestionare şablon de intrare:",
		admin_repcfg_entry_template_enable_classes_label: "Clase de modificat pentru suportul şabloanelor de intrare:",
		admin_repcfg_oos_reference_attribute_label: "Atribute de referinţă pentru Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Important: Toate clasele pe care le specificaţi vor fi modificate pentru a suporta şabloanele de intrare. După ce vă salvaţi modificările, modificările nu pot fi înlăturate din clase.<br><br>Puteţi modifica clasa pentru unul sau amândouă dintre următoarele scopuri:<br><ul><li>Pentru a stoca ID-ul şablonului de intrare ce a fost utilizat pentru a adăuga un articol, astfel încât setările şablonului de intrare să fie aplicate atunci când articolul este modificat</li><li>Numai pentru clasele de foldere ierarhice: Pentru a suporta asocierile fişierelor cu şabloane de intrare</li></ul>Trebuie să fiţi conectat la magazie ca administrator de server de bibliotecă pentru a modifica clase.",
		admin_repcfg_entry_template_enable_classes_warning: "Important: Toate clasele pe care le specificaţi vor fi modificate pentru a suporta şabloanele de intrare. După ce vă salvaţi modificările, modificările nu pot fi înlăturate din clase.<br><br>Trebuie să fiţi conectat la magazie ca administrator de server de bibliotecă pentru a modifica clase.",
		admin_repcfg_entry_template_enable_classes_available: "Clase disponibile",
		admin_repcfg_entry_template_enable_classes_selected: "Clase selectate",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Stocare ID-uri ale şabloanelor de intrare",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modificaţi această clasă astfel încât să stocheze ID-ul şablonului de intrare ce a fost utilizat pentru a adăuga un articol, astfel încât setările şablonului de intrare sunt aplicate atunci când articolul este modificat.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Stocare asocieri de fişiere",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modificaţi această clasă astfel încât să suporte asocierile folderelor cu şabloane de intrare. Această opţiune este disponibilă numai pentru clasele de foldere ierarhice.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Această clasă a fost deja modificată pentru a stoca ID-ul şablonului de intrare. Nu puteţi înlătura această opţiune.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Această clasă a fost deja modificată pentru a stoca asocierile de foldere. Nu puteţi înlătura această opţiune.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Numele de foldere ierarhice şi clasele non-ierarhice pot fi utilizate pentru a stoca asocierile de foldere.",
		admin_repcfg_entry_template_root_folder_association_title: "Şabloanele de intrare asociate cu folderul rădăcină:",
		admin_repcfg_entry_template_root_folder_association_hover: "Specificaţi ce şablon de intrare vreţi să asociaţi cu folderul rădăcină pe magazia dumneavoastră IBM Content Manager.<br /><br />Dacă asociaţi şabloane de intrare cu folderul rădăcină, iar utilizatorii adaugă articole la un folder ierarhic, un şablon de intrare va fi întotdeauna folosit pentru adăugarea articolelor.",
		admin_repcfg_entry_template_root_folder_association_button: "Setare asocieri",
		admin_repcfg_oos_enable_classes_label: "Clasele de modificat pentru suportul Office Online şi Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "Important: Toate clasele pe care le specificaţi vor fi modificate pentru a lucra cu Microsoft Office Online sau Edit Service. După ce vă salvaţi modificările, atributul de referinţă care este automat adăugat în fiecare clasă nu poate fi înlăturat.<br><br>Trebuie să fiţi conectat la magazie ca administrator de server de bibliotecă pentru a modifica clase.",
		admin_repcfg_oos_enable_classes_available: "Clase disponibile",
		admin_repcfg_oos_enable_classes_selected: "Clase selectate",
		admin_repcfg_oos_enable_classes_note: "Important:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Această clasă nu este suportată cu Microsoft Office Online sau Edit Service.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Politica versiunii pentru clasă este setată la versiune întotdeauna, ceea ce Microsoft Office Online sau Edit Service nu suportă. Selectaţi o clasă diferită.",
		admin_repcfg_download_recording: "Urmărire descărcări:",
		admin_repcfg_download_recording_hover: "Descărcările sunt urmărite implicit atunci când add-on-ul Social Collaboration Base Extensions este instalat în magazie. Totuşi, dezactivarea acestei opţiuni poate îmbunătăţii performanţa magaziei.<br><br>Dacă dezactivaţi această opţiune, utilizatorii vor vedea o contorizarea a descărcărilor survenite înainte ca această opţiune să fi fost dezactivată.",
		admin_repcfg_sync_service: "Servicii sincronizare:",
		admin_repcfg_download_ignored: "Ignoraţi descărcările pentru anumiţi utilizatori:",
		admin_repcfg_download_ignored_hover: "Puteţi ignora descărcările solicitate de anumiţi utilizatori, cum ar fi administratori sau conturi de sistem, pentru a reflecta mai exact numărul de utilizatori ce au descărcat un document. De exemplu, dacă aveţi un anumit cont ce este utilizat pentru descărcarea conţinutului pentru a genera un raport lunar, puteţi ignora descărcările solicitate de acel cont.<br><br><b>Restricţii:</b> Nu puteţi specifica grupuri.",

		admin_repcfg_add_as_major_version: "Adăugare ca versiune majoră:",
		admin_repcfg_enable_add_as_major_version: "Da",
		admin_repcfg_disable_add_as_major_version: "Nu",
		admin_repcfg_checkin_as_major_version: "Înregistrare la intrare ca versiune majoră:",
		admin_repcfg_enable_checkin_as_major_version: "Da",
		admin_repcfg_disable_checkin_as_major_version: "Nu",
		admin_repcfg_annotation_security: "Securitate adnotare:",
		admin_repcfg_inherit_annotation_security: "Duplicare securitate a documentului conţinut",
		admin_repcfg_default_annotation_security: "Utilizare securitate de adnotare implicită",
		admin_repcfg_connection_point: "Punct conexiune flux de lucru:",
		admin_repcfg_include_workflow_definition: "Afişare clase pentru definiţia fluxului de lucru:",
		admin_repcfg_include_form_template: "Afişare din clase şablon:",
		admin_repcfg_enable_include_workflow_definition: "Da",
		admin_repcfg_disable_include_workflow_definition: "Nu",

		admin_repcfg_status_columns: "Pictograme stare:",
		admin_repcfg_status_columns_hover: "Specificaţi stările pentru care vreţi să vedeţi pictograme. Pictogramele de stare sunt afişate lângă documente, foldere şi articole de lucru în lista de conţinut.",
		admin_repcfg_status_columns_documents_or_folders: "Afişaţi o pictogramă când documentele sau folderele:",
		admin_repcfg_status_columns_documents: "Afişaţi o pictogramă când documentele:",
		admin_repcfg_status_columns_documents_checked_out: "Sunt înregistrate la ieşire",
		admin_repcfg_status_columns_documents_declared_records: "Sunt declarate ca înregistrări",
		admin_repcfg_status_columns_documents_minor_versions: "Au versiuni minore",
		admin_repcfg_status_columns_documents_compound_document: "Sunt documente compuse",
		admin_repcfg_status_columns_documents_bookmarks: "Au semne de carte",
		admin_repcfg_status_columns_documents_hold: "Sunt în aşteptare",
		admin_repcfg_status_columns_documents_notes: "Au note",
		admin_repcfg_status_columns_work_items: "Afişaţi o pictogramă când articolele de lucru:",
		admin_repcfg_status_columns_work_items_locked: "Sunt blocate",
		admin_repcfg_status_columns_work_items_checked_out: "Sunt înregistrate la ieşire",
		admin_repcfg_status_columns_work_items_deadline: "Au un termen limită",
		admin_repcfg_status_columns_work_items_suspended: "Sunt suspendate din procesare",

		admin_repcfg_afp2pdf_config_file: "Fişier configuraţie AFP2PDF:",
		admin_repcfg_transform_xml_file: "Fişier transformare personalizată:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Activare",
		admin_repcfg_disable_ssl: "Dezactivare",
		admin_repcfg_keyringdb_file: "Fişier bază de date inel de chei:",
		admin_repcfg_keyringstash_file: "Fişier stash inel de chei:",
		admin_repcfg_od_sso: "Semnare unică",
		admin_repcfg_od_enable_sso: "Activare",
		admin_repcfg_od_disable_sso: "Dezactivare",
		admin_repcfg_od_sso_password: "Parolă",
		admin_repcfg_advanced_label: "Avansat",
		admin_repcfg_custom_properties_label: "Proprietăţi personalizate:",
		admin_repcfg_new_button_label: "Nou",
		admin_repcfg_edit_button_label: "Editare",
		admin_repcfg_delete_button_label: "Ştergere",
		admin_repcfg_custom_head1: "Nume",
		admin_repcfg_custom_head2: "Valoare",
		admin_repcfg_ecpdialog_title_new: "Proprietate personalizată nouă",
		admin_repcfg_ecpdialog_title_edit: "Editare proprietate personalizată",
		admin_repcfg_ecpdialog_name: "Nume:",
		admin_repcfg_ecpdialog_value: "Valoare:",
		admin_repcfg_ecpdialog_save: "Salvare",
		admin_repcfg_ecpdialog_create: "Creare",
		admin_repcfg_ecpdialog_cancel: "Anulare",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Această valoare este necesară. Valoarea nu poate conţine blancuri şi nu poate fi duplicată.",

		admin_repcfg_cmis_use_gzip_encoding: "Folosiţi codare GZIP:",

		admin_repcfg_task_mgr_proxy: "ID conexiune manager de taskuri:",
		admin_repcfg_task_mgr_proxy_hover: "Pentru partajarea Box sau ştergerea spaţiului de echipă, managerul de taskuri utilizează un ID de utilizator administrator user ID şi parola aferentă pentru a rula în fundal taskuri care modifică magazia.<br><br>Faceţi clic pe Setare şi logaţi-vă la magazie folosind un ID de utilizator administrator de magazie valid şi o parolă.",
		admin_task_manager_not_enabled_warning: "Această opţiune necesită serviciul manager de taskuri, dar serviciul manager de taskuri nu este activat.  Puteţi activa serviciul manager de taskuri pentru toate desktop-urile de pe pagina General pentru Setări.",
		admin_task_manager_not_enabled_and_user_warning: "Această opţiune necesită serviciul manager de taskuri, dar serviciul manager de taskuri nu este activat. Pe această pagină, setaţi ID-ul de conexiune manager de taskuri şi apoi pe pagina General pentru Setări, activaţi serviciul manager de taskuri pentru toate desktop-urile.",
		admin_task_manager_user_id_pw_not_set_warning: "Această opţiune necesită serviciul manager de taskuri şi un ID de utilizator administrator şi o parolă. Pe această pagină, setaţi ID-ul de conexiune manager de taskuri.",
		admin_repcfg_teamspaces_delete_task_id: "Administrator magazie:",
		admin_repcfg_teamspaces_delete_task_password: "Parolă:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Trebuie să specificaţi un administrator de server de bibliotecă pentru a permite serviciului manager de taskuri să şteargă un spaţiu de echipă din magazie.",
		admin_repcfg_teamspaces_delete_task_hover: "Implicit, când un utilizator şterge un spaţiu de echipă, spaţiul de echipă este ascuns. Toate folderele şi documentele din spaţiul de echipă rămân în magazie. <br /> <br />Când activaţi această opţiune, numai documentele care sunt îndosariate în alte foldere în magazie rămân în magazie.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Dacă aveţi un număr mare de spaţii de echipă în mediul dumneavoastră, poate dura mult timp afişarea tuturor spaţiilor de echipă în fila <b>Spaţii de echipă</b>. Puteţi selecta această opţiune pentru a reduce timpul necesar pentru popularea listei.<br /><br />Dacă un utilizator trebuie să lucreze cu un spaţiu de echipă ce se află înafara intervalului pe care îl specificaţi, utilizatorul poate utiliza câmpul <b>Filtru</b> pentru a găsi spaţiul de echipă.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Dacă selectaţi această opţiune, utilizatorii care au rolul de proprietar pe un spaţiu de echipă pot modifica rolurile care sunt asociate cu spaţiile de echipă care au fost create înainte de IBM Content Navigator, Versiunea 2.0.2.<br /><br />Această opţiune nu afectează spaţiile de echipă care sunt create cu IBM Content Navigator, Versiunea 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Specificaţi dacă vreţi ca utilizatorii să poată crea spaţii de echipă şi şabloane de spaţii de echipă în această magazie.<br /><br /><b>Important:</b> Magazia trebuie să suporte foldere ierarhice.<br /><br />Dacă activaţi spaţiile de echipă, IBM Content Navigator creează modelul de date de spaţiu de echipă în magazie. Modelul de date include obiecte ACL, privilegii, seturi de privilegii şi două noi tipuri de articole.",
		admin_repcfg_folder_selector_hover: "Selectaţi folderul pe care vreţi să-l folosiţi ca folder rădăcină când utilizatorii răsfoiesc documente. Dacă nu aveţi folderele ierarhice configurate în magazia dumneavoastră, această setare vă permite să suportaţi răsfoirea definind un folder rădăcină. Dacă aveţi configurate foldere ierarhice în magazia dumneavoastră, această setare înlocuieşte folderul rădăcină care este configurat în magazie.",
		admin_repcfg_cm_use_sso_hover: "Specificaţi dacă să permiteţi semnarea unică pentru utilizatori cu setul de privilegii Trusted Logon (Logare de încredere).<br /><br /><b>Important:</b> Semnarea unică trebuie activată pe serverul Content Manager şi Sererul de aplicaţii WebSphere trebuie configurat pentru LTPA pentru ca acest parametru de configurare să funcţioneze.",
		admin_repcfg_cm_direct_retrieve_hover: "Extragerea directă este activată implicit, pentru că permite clientului web să extragă rapid conţinut din managerul de resurse. <br /><br />Puteţi dezactiva această opţiune dacă nu vreţi ca aplicaţia clientului să acceseze direct managerul de resurse sau dacă aveţi un server proxy sau firewall care împiedică clientul web să acceseze managerul de resurse prin URL-uri. De exemplu, un firewall poate împiedica utilizatorii să vizualizeze documente în vizualizatorul de aplet când este activată extragerea directă.",
		admin_repcfg_cmItemTypesToDisplay: "Dacă nu doriţi ca utilizatorii să vadă tipurile de articole resursă şi tipurile de articol articol pe serverul IBM Content Manager, puteţi afişa doar tipurile de articol model de document. Tipurile de articol sunt afişate când utilizatorii creează căutări, adaugă documente şi când creează foldere.",
		admin_repcfg_cm_language_codes_hover: "Specificaţi limbile în care să se returneze date de la serverul Content Manager. Lista de limbi disponibile este controlată de lista de definiţii de limbă de pe server.<br /><br /><b>Reţineţi:</b> Datele din clientul web sunt afişate în limba care este setată în browser-ul Web al utilizatorului.",
		admin_repcfg_cm_pdf_conversion_hover: "Specificaţi tipurile de documente de convertit la PDF când un utilizator trimite un document cu mai multe părţi componente ca ataşament de e-mail. Toate părţile componente sunt combinate într-un singur document PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Specificaţi dacă vreţi ca utilizatorii să poată crea spaţii de echipă şi şabloane de spaţii de echipă în această magazie.<br /><br />Dacă activaţi spaţiile de echipă, IBM Content Navigator creează modelul de date de spaţiu de echipă în magazie. Modelul de date include şabloane de proprietăţi, obiecte personalizate, un obiect de folder şi mai multe foldere.",
		admin_repcfg_use_entry_template_p8_hover: "Specificaţi dacă doriţi ca utilizatorii să poată crea şi gestiona şabloanele de intrare din această magazie din IBM Content Navigator. Dacă nu activaţi această caracteristică, utilizatorii pot căuta şi utiliza şabloane de intrare ce sunt deja în magazie.<br /><br />Dacă activaţi gestionarea şablonului de intrare, IBM Content Navigator actualizează modelul de date al şablonului de intrare din magazie. Actualizarea include proprietăţi noi. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Aflaţi mai multe</a>",
		admin_repcfg_use_entry_template_cm_hover: "Specificaţi dacă doriţi ca utilizatorii să poată crea şi gestiona şabloanele de intrare în această magazie din IBM Content Navigator.<br /><br />Dacă activaţi gestionarea şablonului de intrare, IBM Content Navigator actualizează modelul de date al şablonului de intrare din magazie. Modelul de date include un nou obiect ACL, proprietăţi noi şi un nou tip de articol. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Aflaţi mai multe</a>",
		admin_repcfg_sync_service_p8_hover: "Specificaţi dacă vreţi ca utilizatorii să-şi poată sincroniza articolele preferate pe staţiile lor de lucru şi dispozitivele mobile.<br><br><b>Important:</b> Pentru a utiliza această caracteristică, trebuie să finalizaţi şi taskurile următoare:<br><ul><li>Specificaţi <b>URL public servicii de sincronizare</b> în secţiunea <b>Servicii de sincronizare</b> din unealta de administrare.</li><li>Adăugaţi această magazie la un desktop pentru care serviciile de sincronizare sunt activate.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Specificaţi dacă opţiunea de versiune majoră este selectată implicit când utilizatorii adaugă documente în magazie.<br /><br />Utilizatorii au opţiunea de a curăţa această opţiune dacă vor să adauge documentul ca versiune minoră.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Specificaţi dacă opţiunea de versiune majoră este selectată implicit când utilizatorii înregistrează documente la intrare în magazie.<br /><br />Utilizatorii au opţiunea de a curăţa această opţiune dacă vor să înregistreze documentul ca versiune minoră.",
		admin_repcfg_p8_annotation_security_hover: "Specificaţi ce tip de securitate să se aplice implicit adnotărilor.<br /><br />Utilizatorii au opţiunea de a modifica securitatea adnotărilor.",
		admin_repcfg_p8_connection_point_hover: "Dacă vreţi să folosiţi fluxurile de lucru IBM FileNet P8, selectaţi un punct de conexiune Process Engine. Punctul de conexiune pe care-l selectaţi determină ce fluxuri de lucru sunt disponibile utilizatorilor care accesează magazia.",
		admin_repcfg_p8_include_workflow_definition_hover: "Dacă afişaţi clasa de document definiţie flux de lucru IBM FileNet P8 în clientul web, utilizatorii pot căuta şi adăuga definiţii pentru fluxul de lucru în magazie.",
		admin_repcfg_p8_include_form_template_hover: "Dacă afişaţi clasa de document şablon de formular IBM FileNet P8 în clientul web, utilizatorii pot adăuga şabloane de formular în magazie.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Specificaţi calea complet calificată a fişierului de configurare AFP2PDF pentru această magazie pe serverul de aplicaţii web. AFP2PDF Transform este necesar pentru a vizualiza şi a tipări date AFP.<br /><br /><b>Reţineţi:</b> AFP2PDF Transform trebuie să fie instalat pentru a folosi acest parametru.",
		admin_repcfg_od_transform_xml_file_hover: " Dacă vreţi să folosiţi o transformare personalizată pentru a converti conţinutul Content Manager OnDemand, specificaţi calea complet calificată a fişierului XML care este folosit pentru a defini transformarea. Fişierul XML trebuie să se afle pe serverul de aplicaţii web.",
		admin_repcfg_od_ssl_hover: "Specificaţi dacă să se folosească SSL pentru criptarea comunicaţiei între serverul de aplicaţii IBM Content Navigator şi serverul de bibliotecă Content Manager OnDemand şi serverele de obiecte.<br /><br /><b>Important:</b> Când activaţi SSL pentru Content Manager OnDemand, nu include comunicaţia dintre serverul de aplicaţii IBM Content Navigator, serverul web sau staţiile de lucru ale utilizatorilor.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Specificaţi calea complet calificată a fişierului de bază de date inel de chei pentru această magazie pe serverul de aplicaţii web. De exemplu, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Fişierul de bază de date inel de chei vă conţine certificatele rădăcină de încredere. Ar trebui să folosiţi o protecţie puternică a sistemului de fişiere pentru a împiedica accesul neautorizat la acest fişier.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Specificaţi calea complet calificată a fişierului stash inel de chei pentru această magazie pe serverul de aplicaţii web. De exemplu, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Fişierul stash inel de chei conţine parola pentru fişierul de bază de date inel de chei. Ar trebui să folosiţi o protecţie puternică a sistemului de fişiere pentru a împiedica accesul neautorizat la acest fişier.",
		admin_repcfg_od_sso_password_hover: "Specificaţi parola de folosit pentru semnarea unică cu serverul OnDemand.",
		admin_repcfg_od_custom_properties_hover: "API-ul Java ODWEK suportă proprietăţi personalizate. Dacă vreţi să folosiţi orice proprietate personalizată când vă conectaţi la magazie prin clientul web, specificaţi numele şi valorile proprietăţilor personalizate.<br /><br />Pentru informaţii suplimentare despre proprietăţile personalizate suportate, consultaţi ODWEK Java API Javadocs, care se află în subdirectorul /api al directorului de instalare ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Introduceţi numele proprietăţii.",
		admin_repcfg_od_custom_properties_value_hover: "Introduceţi valoarea proprietăţii.",
		admin_repcfg_od_use_sso_hover: "Specificaţi dacă să permiteţi semnarea unică pentru utilizatori.<br /><br /><b>Important:</b> Semnătura singulară trebuie să fie activată în serverul Content Manager OnDemand pentru ca acest parametru de configurare să funcţioneze.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Folosiţi cifrarea GZIP pentru această sursă CMIS.",
		admin_repcfg_cm_use_part_file_name: "Numele de fişier de utilizat când se descarcă documente:",
		admin_repcfg_cm_use_part_file_name_help: "Specificaţi cum sunt determinate numele de fişier ale documentelor când utilizatorii descarcă documente.",
		admin_repcfg_cm_use_part_file_name_enable: "Utilizare nume fişier",
		admin_repcfg_cm_use_part_file_name_disable: "Utilizare nume articol din magazie",
		admin_repcfg_add_doc_name: "Numele implicit pentru un document adăugat:",
		admin_repcfg_add_doc_name_hover: "Utilizatorii pot schimba numele înainte de a adăuga documentul.",
		admin_repcfg_add_doc_name_empty: "Fără (blanc)",
		admin_repcfg_add_doc_name_file_name: "Numele fişierului documentului selectat",

		admin_repcfg_compound_documents: "Caracteristici ale documentului compus:",
		admin_repcfg_compound_documents_hover: "Activaţi caracteristicile documentului compus P8, cum ar fi navigarea.",
		admin_repcfg_cm_action_list_config_enabled: "Listă de acţiuni articol de lucru:",
		admin_repcfg_cm_action_list_config_hover: "Când configuraţi rutarea documentelor în clientul de administrare sistem Content Manager, puteţi specifica o listă de acţiuni pe care le poate realiza utilizatorul pe un articol de lucru.<br /><br />Activaţi această opţiune dacă vreţi să folosiţi Lista de acţiuni de la serverul Content Manager. Aceste setări sunt folosite în meniul de context şi în fereastra Proprietăţi editare pentru articolul de lucru.<br /><br /><b>Important:</b> Setările din Listă de acţiuni înlocuiesc orice meniuri personalizate configurate de dumneavoastră în unealta de administrare Content Navigator. Dacă nu există nicio setare în Listă de acţiuni, utilizatorul nu va putea să facă nicio acţiune pe articolele de lucru.",

		admin_repcfg_box_share: "Partajare Box",
		admin_repcfg_box_share_p8_hover: "Permite utilizatorilor să partajeze un document din această magazie. Partajarea unui document include copierea fişierului la Box, crearea unei legături şi trimiterea legăturii prin e-mail.<br /><br />Dacă activaţi partajarea Box, IBM Content Navigator creează modelul de date de partajare Box în magazie. Pentru a instala add-on-ul de partajare Box IBM Content Navigator, trebuie să fiţi conectat la magazie ca administrator de server de bibliotecă.",

		admin_menu_type_icon: "Pictogramă tip de meniu",
		admin_menu_toolbar_hover: "Bară de unelte",
		admin_menu_toolbar_custom_hover: "Bară de unelte personalizată",
		admin_menu_contextMenu_hover: "Meniu contextual",
		admin_menu_contextMenu_custom_hover: "Meniu contextual personalizat",

		admin_menu_contextMenu_custom_empty: "Nu este definit niciun meniu contextual în plug-in-urile configurate.",
		admin_menu_toolbar_custom_empty: "Nu este definită nicio bară de unelte în plug-in-urile configurate.",

		admin_file_type_category_filters: "Filtre tip de fişier:",
		admin_file_type_category_filters_hover_help: "Specificaţi lista de tipuri de fişiere pe care utilizatorii le pot utiliza în următoarele situaţii:<ul><li>Pentru a restrânge lista de rezultate la căutarea sau răsfoirea în IBM Content Navigator for Microsoft Office<li>Pentru a restrânge lista de rezultate atunci când căutaţi o magazie IBM FileNet P8 în clientul web<li>Pentru a restricţiona tipurile de fişiere pe care utilizatorii le pot adăuga în magazie la utilizarea unui şablon de intrare</ul>",
		admin_file_type_only_use_in_et_folder_association: "Afişaţi numai în Asocierile folderului cu şabloane de intrare",
		admin_office_config_properties_label: "Proprietăţi Office",
		admin_office_config_type_label: "Tip de date",
		admin_office_config_mapped_property_label: "Proprietate magazie",
		admin_office_config_properties_hover_help: "Introduceţi şi apoi adăugaţi numele fiecărei proprietăţi Microsoft Office pe care vreţi s-o mapaţi la o proprietate de magazie. Tipul de date al tuturor proprietăţilor trebuie să se potrivească",
		admin_office_config_mapped_property_hover_help: "Dacă vreţi să mapaţi Proprietăţile Office la mai mult de o proprietate de magazie, trebuie să creaţi o nouă mapare de proprietăţi",
		admin_new_property_mapping_title: "Mapare de proprietăţi nouă",
		admin_property_mapping_title: "Editare mapare de proprietăţi",
		admin_property_mapping_instruction: "Specificaţi ce proprietăţi Microsoft Office vreţi să mapaţi la o proprietate din magazie. Tipul de date al proprietăţilor Office trebuie să se potrivească tipului de date al proprietăţii din magazie. <br /><br />Dacă un document Office are mai mult de o proprietate din mapare, IBM Content Navigator foloseşte prima proprietate din listă pentru a popula proprietatea în magazie.",
		admin_ms_general_settings: "Configuraţie generală:",
		admin_ms_delete_local_settings: "Ştergere fişiere locale când utilizatorii:",
		admin_ms_outlook_options: "Integrare Outlook:",
		admin_ms_enable_props_mapping: "Mapare proprietăţi Office la proprietăţile magaziei când utilizatorii:",
		admin_ms_open_doc_when_checkout: "Înregistrare automată la ieşire a unui document când este deschis",
		admin_ms_open_doc_when_checkout_hover_help: "Selectarea acestei opţiuni împiedică utilizatorul să suprascrie fişierul în magazie cu o versiune mai veche a fişierului.",
		admin_ms_prompt_close_office: "Prompt pentru utilizatori pentru înregistrare la intrare documente atunci când închid aplicaţiile Office",
		admin_ms_prompt_close_office_hover_help: "Selectarea acestei opţiuni împiedică utilizatorii să uite să-şi înregistreze la intrare lucrul.",
		admin_ms_add_with_entry_template_only: "Afişarea doar a acţiunii Adăugare cu şablon",
		admin_ms_delete_local_on_add: "Ştergere fişiere locale când utilizatorii adaugă documente",
		admin_ms_delete_local_on_checkin: "Ştergere fişiere locale când utilizatorii se înregistrează la intrare în documente sau când anulează înregistrarea la ieşire",
		admin_ms_delete_local_on_add_hover_help: "Atunci când un utilizator adaugă un document în IBM Content Navigator for Microsoft Office, documentul este adăugat în magazie şi copia locală a documentului rămâne deschisă astfel încât utilizatorii pot înregistra la ieşire imediat documentul pentru a face modificări.<br /><br />Selectaţi această opţiune pentru a închide automat şi a şterge copia locală a documentului după adăugarea documentului la magazie.",
		admin_ms_delete_local_on_checkin_hover_help: "Când un utilizator înregistrează la intrare un document în IBM Content Navigator for Microsoft Office, documentul este înregistrat la intrare în magazie şi copia locală a documentului rămâne deschisă. De asemenea, după utilizarea acţiunii de anulare înregistrare la ieşire, copia locală a documentului rămâne deschisă. Cu copia locală deschisă, utilizatorii pot înregistra la ieşire imediat documentul din nou pentru a face modificări.<br /><br />Selectaţi această opţiune pentru a închide automat şi a şterge copia locală a documentului fie după înregistrarea la intrare a documentului, fie după utilizarea acţiunii de anulare înregistrare la ieşire.",
		admin_ms_delete_local_on_save: "Salvare document",
		admin_ms_prompt_for_props_on_add: "Prompt pentru utilizatori să furnizeze valori de proprietăţi când adaugă e-mail-uri în magazie",
		admin_ms_prompt_for_props_on_add_hover_help: "Dacă nu selectaţi această opţiune, clientul web foloseşte maparea proprietăţii Outlook definită pentru magazie.<br /><br />Dacă aveţi şabloane de intrare asociate cu folderul în care sunt adăugate e-mail-urile, utilizatorul s-ar putea să nu fie promptat pentru nicio proprietate.",
		admin_ms_delete_email_on_add: "Ştergere e-mail de pe serverul de poştă când acel e-mail este adăugat în magazie",
		admin_ms_send_email_as_link_only: "Împiedicare utilizatori să trimită documente ca ataşamente",
		admin_ms_send_email_as_link_only_hover_help: "Dacă selectaţi această opţiune, utilizatorii pot trimite documente doar ca legături din Outlook. Această opţiune asigură faptul că numai utilizatorii care au privilegii corespunzătoare în magazie pot vizualiza documente.",
		admin_ms_enable_prop_mapping_for_add: "Mapare proprietăţi aplicaţii Office la proprietăţile magaziei atunci când utilizatorii adaugă sau înregistrează la intrare documente",
		admin_ms_checkout_document_after_add: "Înregistrarea automată la ieşire a documentelor după ce sunt adăugate în magazie",
		admin_no_default_document_type_filtering: "Returnare implicită a tuturor tipurilor de document atunci când utilizatorii rulează căutări",
		admin_no_default_document_type_filtering_hover_help: "În IBM Content Navigator for Microsoft Office, comportamentul implicit este acela că utilizatorii văd numai tipul de document pentru aplicaţia curentă atunci când rulează căutări. De exemplu, tipul de document Word este selectat implicit atunci când căutările sunt efectuate dinMicrosoft Word.<br/><br/>Totuşi, selectarea acestei opţiuni curăţă casetele de bifare ale tipurilor de documente astfel încât utilizatorii să vadă toate tipurile de documente ce sunt returnare de o căutare. Utilizatorii pot ignora această setare selectând unul sau mai multe tipuri de documente înainte de a rula căutarea.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Specificaţi dacă să se mapeze proprietăţile de document definite pentru documentele Microsoft Office la proprietăţile definite în magazie.<br /></br /><b>Important:</b> Dacă activaţi această caracteristică, trebuie să configuraţi proprietăţile Office pentru fiecare magazie din mediul dumneavoastră. Dacă nu mapaţi proprietăţile Office la proprietăţile magaziei dumneavoastră, această caracteristică nu va funcţiona.<br /><br />Această setare nu se aplică pentru Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Selectaţi această opţiune pentru a reduce numărul de paşi de care au nevoie utilizatorii pentru a lucra cu documentele după ce acestea sunt adăugate la magazie.<br /></br /><b>Sugestie:</b> Pentru a vă asigura că utilizatorii înregistrează la intrare fişierele înapoi în magazie, selectaţi <b>Promptarea utilizatorilor să înregistreze la intrare documentele când închid aplicaţiile Office</b>.",
		admin_ms_show_details_recently_used: "Afişarea detaliilor articolului <b>Utilizat recent</b>",
		admin_ms_show_details_recently_used_hover_help: "Implicit, când vizualizaţi lista de articole Utilizate recent, detaliile articolelor sunt ascunse, pentru a permite afişarea mai multor articole. Când selectaţi această opţiune, lista de articole Utilizate recent, detaliile sunt afişate implicit pentru primul document din panoul de detalii.",
		admin_ms_show_no_permissions_warning: "Afişarea avertismentelor când utilizatorii editează proprietăţi sau înregistrează la intrare un document dar nu au permisiunea de a vizualiza şablonul de intrare al documentului",
		admin_ms_show_no_permissions_warning_hover_help: "Dacă un document din magazie a fost creat folosind un şablon de intrare, dar utilizatorul nu are permisiunea de a vizualiza şablonul de intrare al documentului, atunci şablonul de intrare nu este extras.<br /><br/>Deci, când utilizatorul editează proprietăţile documentului, proprietăţile sunt afişate fără folosirea şablonului de intrare. Şi, când utilizatorul înregistrează la intrare documentul, documentul este înregistrat la intrare fără folosirea şablonului de intrare.<br /><br />Implicit, aceste acţiuni apar fără a informa utilizatorul ce şablon de intrare nu este utilizat. Un avertisment este logat numai în fişierul istoric.<br /><br />Selectaţi această opţiune dacă doriţi să afişaţi avertismente care informează imediat utilizatorul când şablonul de intrare nu este utilizat.",
		admin_ms_hide_search_actions: "Restrângerea secţiunii de filtre de căutare",
		admin_ms_hide_search_actions_hover_help: "Implicit, utilizatorii pot aplica un filtru de acţiuni pentru a specifica o acţiune, un utilizator sau grup de utilizatori şi a selecta o dată sau interval de date când a apărut o acţiune. De exemplu, puteţi căuta doar documentele pe care le-aţi adăugat în timpul ultimei luni.<br /><br />Dacă nu doriţi să permiteţi utilizatorilor să aplice filtre de acţiuni, selectaţi această opţiune pentru a ascunde filtrele de acţiuni şi a reduce numărul de câmpuri care sunt afişate la definirea criteriilor de afişare.",
		admin_ms_hide_save_document: "Ascundere opţiunea <b>Salvare</b> în bara de panglică",
		admin_ms_hide_save_document_hover_help: "Utilizând opţiunea <b>Salvare</b>, utilizatorii pot salva modificările de documente în magazie fără a înregistra la intrare documentul.",
		admin_ms_indicate_managed_email_on_add: "Indicare dacă un e-mail a fost deja adăugat în magazie",
		admin_ms_indicate_managed_email_on_add_hover_help: "Selectarea acestei opţiuni îi înştiinţează pe utilizatori că un e-mail este deja în magazie, ceea ce poate reduce numărul de adăugări ale unui e-mail în magazie.  Atunci când această opţiune este selectată, o nouă categorie de culoare numită IBM ECM este creată în Microsoft Outlook. Orice e-mail ce este adăugat în magazie, este adăugat automat la Gestionate în categoria IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Opţiuni de adăugare în grupul Editare:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Specificaţi ce opţiuni de <b>Adăugare</b> sunt disponibile din grupul <b>Editare</b> din bara panglică:<ul><li>Selectaţi <b>Afişare toate opţiunile de adăugare</b> pentru a afişa butonul Adăugare şi toate acţiunile Adăugare ce sunt disponibile din grupul Editare.</li><li>Selectaţi <b>Ascundere toate opţiunile de adăugare</b> pentru a împiedica utilizatorii să adauge documente în magazie sau dacă doriţi ca utilizatorii să adauge documentele numai dintr-un spaţiu de echipă.</li><li>Selectaţi <b>Ascundere acţiune Adăugare cu şablon</b> dacă doriţi să impuneţi asocierile folderelor cu şabloane de intrare şi să împiedicaţi utilizatorii să selecteze un şablon de intrare diferit.</li><li>Selectaţi <b>Afişare numai acţiunea Adăugare cu şablon</b> dacă doriţi să solicitaţi utilizatorilor să adauge documente utilizând şabloane de intrare.</li></ul>",
		admin_ms_show_edit_group_add_button: "Afişare toate opţiunile de adăugare (implicit)",
		admin_ms_hide_edit_group_add_button: "Ascundere toate opţiunile de adăugare",
		admin_ms_hide_add_with_entry_template: "Ascundere acţiune Adăugare cu şablon",
		admin_ms_managed_in_ecm: "Gestionat în IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Dacă utilizatorii afişează categorii în Microsoft Outlook, această etichetă este afişată pentru e-mail care a fost adăugat la o magazie IBM Content Manager sau IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Numele categoriei Gestionat în IBM ECM nu poate conţine o virgulă (,) sau punct şi virgulă (;).",
		admin_delete_open_docs_after_close: "Ştergere automată a documentelor atunci când utilizatorii închid documentele",
		admin_admin_delete_open_docs_after_close_hover_help: "Atunci când un utilizator deschide un document în IBM Content Navigator for Microsoft Office, documentul este descărcat în directorul de documente al utilizatorului sau în locaţia specificată de setările de urmărire fişier pentru desktop.<br><br>Selectaţi această opţiune pentru a şterge fişierele ce sunt deschise, dar nu sunt înregistrate la ieşire atunci când utilizatorii închid documentele. Selectarea acestei opţiuni vă dă posibilitatea să:<ul><li>Impuneţi compatibilitatea cu politicile IT</li><li>Vă asiguraţi că utilizatorii lucrează cu cea mai recentă versiune a documentelor</li><li>Reduceţi cantitatea de spaţiu pe disc ce este utilizată pentru a stoca documentele</li><ul>",
		admin_ms_custom_command_configuration: "Comenzi personalizate:",
		admin_ms_custom_command_configuration_hover_help: "Puteţi adăuga până la patru comenzi în bara de unelte a IBM Content Navigator for Microsoft Office în aplicaţiile Microsoft Office. Comenzile pot fi utilizate pentru a deschide URL-uri. De exemplu, puteţi adăuga o comandă pentru a deschide un serviciu ce poate fi utilizat la căutarea utilizatorilor şi grupurilor.",
		admin_ms_custom_command_dialog_title: "Editare comandă personalizată",
		admin_ms_custom_command_dialog_intro_text: "Definiţi o comandă ce poate fi utilizată pentru a deschide un URL din bara de unelte IBM Content Navigator for Microsoft Office în aplicaţiile Microsoft Office.",
		admin_ms_custom_command_id: "Comandă ${0}",
		admin_ms_custom_command_available_label: "Disponibil",
		admin_ms_custom_command_available_hover_help: "Dacă URL-ul definit pentru o comandă trebuie trecut pe offline pentru întreţinere, puteţi curăţa caseta de bifare pentru comandă astfel încât comanda să nu fie afişată în Microsoft Office.<br/><br/><b>Important:</b> Utilizatorii trebuie să se delogheze din desktop pentru ca modificările să fie reflectate în IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID comandă",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etichetă",
		admin_ms_custom_command_label_hover_help: "Specificaţi eticheta de afişat pentru comandă în Microsoft Office.",
		admin_ms_custom_command_description_label: "Descriere",
		admin_ms_custom_command_description_hover_help: "Specificaţi descrierea de afişat pentru comandă în Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Specificaţi URL-ul complet calificat de deschis din Microsoft Office. URL-ul poate fi o pagină web sau un serviciu.",
		admin_ms_custom_command_icon_label: "Pictogramă",
		admin_ms_custom_command_icon_hover_help: "Specificaţi numele de fişier al pictogramei de afişat, de exemplu CommandIcon.png.<br/><br/><b>Important:</b> Trebuie să adăugaţi fişierul pictogramă în subdirectorul Plug-in-uri al directorului de instalare IBM Content Navigator for Microsoft Office în fiecare maşină client.<br/><br/>Fişierul pictogramă nu este în directorul Plug-in-uri, sau dacă nu doriţi să specificaţi o pictogramă, este afişată pictograma implicită customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Etichetă grup:",
		admin_ms_custom_command_group_name_hover_help: "Puteţi specifica o etichetă de grup de afişat sub comenzile personalizate în bara panglică.<br/><br/>Dacă nu specificaţi o etichetă, eticheta de grup este <b>Comenzi personalizate</b>.",
		admin_ms_ribbon_tab_label: "Etichetă filă IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Introduceţi numele pe care doriţi să-l afişaţi pentru fila IBM Content Navigator for Microsoft Office din bara panglică Microsoft Office. Dacă nu specificaţi un nume, fila este numită \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Închidere panou de task atunci când utilizatorii deschid documente",
		admin_ms_close_task_pane_on_open_hover_help: "Selectaţi această opţiune dacă doriţi să maximizaţi spaţiul în care utilizatorii pot vizualiza documente Microsoft Office.<br/><br/>Utilizatori Microsoft Office 2010: Pentru a vă asigura că panoul de taskuri este închis pentru toate documentele, activaţi modul Interfaţă documente multiple (MDI) făcând clic pe <b>Opţiuni</b> &gt; <b>Avansat</b> şi curăţând opţiunea <b>Afişare toate ferestrele în bara de taskuri</b>.",
		admin_ms_open_document_options: "Opţiuni de deschidere document:",
		admin_ms_delete_local_file_options: "Opţiuni de ştergere fişiere locale:",
		admin_ms_add_and_checkin_options: "Opţiuni de adăugare şi înregistrare la intrare:",
		admin_ms_search_options: "Opţiuni de căutare:",
		admin_ms_display_options: "Afişare opţiuni:",
		admin_ms_bidirection_enable_label: "Activare suport pentru text bidirecţional",
		admin_ms_bidirection_enable_hover_help: "Selectaţi această opţiune dacă vreţi să permiteţi utilizatorilor să introducă sau să vizualizeze text în IBM Content Navigator for Microsoft Office într-o direcţie alta decât de la stânga la dreapta.",
		admin_ms_text_direction_label: "Direcţia de bază a textului pentru conţinut:",
		admin_ms_text_direction_hover_help: "Specificaţi direcţia în care este introdus textul în câmpurile de intrare în IBM Content Navigator for Microsoft Office. Această setare controlează şi modul în care sunt afişate articolele, cum ar fi numele de foldere sau valorile de proprietăţi.",
		admin_ms_control_threshold_label: "Numărul minim de articole pentru a activa privirea în viitor:",
		admin_ms_control_threshold_hover_help: "Implicit, privirea în viitor este activată când numărul de articole este mai mare decât sau egal cu 50, pentru căutarea sau setarea proprietăţilor care au valori pre-definite într-o listă derulantă. Puteţi modifica valoarea minimă.",

		admin_ms_default_email_class: "Clasă utilizată atunci când adăugaţi un e-mail",
		admin_ms_default_email_class_hover_help: "Orice e-mail care se adaugă în această magazie din Microsoft Outlook va fi adăugat în clasa pe care o specificaţi. Utilizatorii nu pot modifica clasa.",
		admin_ms_default_folder_class: "Clasă utilizată atunci când creaţi foldere",
		admin_ms_default_folder_class_hover_help: "Orice folder care este creat în această magazie dintr-o aplicaţie Microsoft Office va fi adăugat în clasa pe care o specificaţi.  Utilizatorii nu pot modifica clasa.",
		admin_ms_default_folder_warn_title: "Nu puteţi utiliza clasa ${0} drept clasă de utilizat la crearea folderelor.",
		admin_ms_default_folder_warn_name_prop_invalid: "Proprietatea numelui clasei nu este un şir, iar numele folderului trebuie să fie un şir.<br />Selectaţi altă clasă de utilizat la crearea folderelor sau colaboraţi cu administratorul IBM Content Manager pentru a schimba într-un şir proprietatea numelui clasei.",
		admin_ms_default_folder_warn_req_props: "Clasa include proprietăţi necesare care nu au valori. Însă utilizatorii nu pot specifica valori pentru proprietăţile necesare când creează foldere din IBM Content Navigator for Microsoft Office.<br />Selectaţi altă clasă de utilizat la crearea folderelor sau colaboraţi cu administratorul IBM Content Manager pentru a face opţionale proprietăţile necesare sau pentru a precompleta cu o valoare proprietăţile necesare.",
		admin_ms_delimiter_for_office_properties: "Delimitator pentru proprietăţi şir cu valori multiple",
		admin_ms_delimiter_for_office_properties_hover_help: "Specificaţi caracterul de utilizat ca delimitator pentru proprietăţile şir pe care le mapaţi la proprietăţi şir cu valoare multiplă. Puteţi aloca un set de valori la o proprietate şir cu valori multiple folosind punct şi virgulă(;) ca delimitator pentru a separa valorile. Totuşi, dacă una din valorile dumneavoastră şir include un punct şi virgulă, nu puteţi adăuga care valoarea şir decât dacă delimitatorul este schimbat cu alt caracter. De exemplu, puteţi schimba la virgulă (,)",
		admin_ms_outlookPropertyRemembrance : "Se ţin minte setările la adăugarea mesajelor şi ataşamentelor",
		admin_ms_outlookPropertyRemembrance_hover_help : "Valorile de proprietăţi, locaţia, selecţia clasei şi securitatea care sunt alocate la mesaje şi ataşamente sunt memorate şi vor fi utilizate ca setări implicite când sunt adăugate articole viitoare.",

		admin_file_type_name_hover_help: "Ajutor la trecerea peste nume",
		admin_file_type_description_hover_help: "Ajutor la trecerea peste descriere",
		admin_file_type_dialog_title: "Editare filtru tip de fişier",
		admin_new_file_type_dialog_title: "Filtru tip de fişier nou",
		admin_mobile_feature_dialog_title: "Caracteristică",
		admin_mobile_feature_dialog_new_title: "Caracteristică nouă",
		admin_file_type_instructions: "Creaţi un filtru pe care utilizatorii îl pot folosi pentru a-şi reduce lista de rezultate ale căutării. Puteţi mapa mai multe tipuri MIME la filtru.",
		admin_file_type_filter_place_holder: "Filtrare tipuri MIME",
		admin_new_button_label: "Nou",
		admin_edit_button_label: "Editare",
		admin_delete_button_label: "Ştergere",
		admin_copy_button_label: "Copiere",
		admin_verify_button_label: "Verificare",
		admin_availabe_filters_label: "Filtre disponibile",
		admin_selected_filters_label: "Filtre selectate",

		admin_mobile_access: "Acces aplicaţii mobile:",
		admin_mobile_access_hover_help: "Dacă vreţi să folosiţi IBM Content Navigator de pe un dispozitiv mobil, se recomandă să permiteţi utilizatorilor să acceseze acest desktop din aplicaţia de pe dispozitivul mobil.<br /><br />Dacă dezactivaţi accesul la acest desktop din aplicaţia mobilă, utilizatorii încă pot accesa clientul web din browser-ele lor mobile. Totuşi, clientul web nu este proiectat să fie accesat de pe dispozitive mobile.",

		admin_mobile_access_allow_label: "Permiteţi utilizatorilor să:",
		admin_mobile_allow_add_photos: "Adauge fotografii din biblioteca de fotografii şi din camera foto",
		admin_mobile_allow_add_docs: "Adauge documente şi să creeze foldere în magazie",
		admin_mobile_allow_open_docs: "Deschidă documente în alte aplicaţii",
		admin_mobile_allow_add_docs_hover_help: "Utilizatorii pot crea foldere sau pot adăuga documente din alte aplicaţii mobile, cum ar fi un document care este ataşat la un e-mail.",
		admin_mobile_allow_open_docs_hover_help: "Utilizatorii sunt promptaţi să selecteze aplicaţia de folosit pentru a vizualiza documentul selectat. Dacă este disponibilă o singură aplicaţie, se foloseşte acea aplicaţie.",
		admin_mobile_features: "Caracteristici:",
		admin_mobile_features_hover_help: "Specificaţi ce caracteristici ale acestui desktop sunt afişate în aplicaţia mobilă IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Caracteristică nouă",
		admin_mobile_move_up_button_label: "Mutare în sus",
		admin_mobile_move_down_button_label: "Mutare în jos",
		admin_desktop_mobile_instructions: "Instrucţiunea setărilor mobile vine aici",
		admin_desktop_max_number_of_docs_to_add: "Numărul maxim de documente de adăugat:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Specificaţi numărul maxim de documente pe care utilizatorii îl pot adăuga odată. Valoarea maximă implicită este 50. Totuşi, puteţi seta maximul până la 300.",
		admin_desktop_max_number_of_docs_to_modify: "Numărul maxim de articole de modificat:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Specificaţi numărul maxim de articole pe care utilizatorii le pot modifica la un moment dat. Valoarea maximă implicită este 50. Totuşi, puteţi seta maximul până la 300.",
		admin_desktop_max_conversion_size: "Cantitatea maximă de date pentru conversii PDF (în MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Restricţie:</b> Această setare nu este suportată pe IBM Content Manager OnDemand.<br/><br/>Specificaţi cantitatea maximă de date ce poate fi convertită la PDF. Această limită se aplică atunci când utilizatorii descarcă articole ca fişiere PDF sau trimit articole prin e-mail ca fişiere PDF.<br /><br />Dacă dimensiunea fiecărui document nu poate fi determinată, documentele tot sunt convertite la PDF.<br/><br/>Limita implicită este de 200 MB. Setarea limitei peste 200 MB ar putea afecta perfomanţa sistemului.",
		admin_desktop_timeProperties: "Amprentă de timp:",
		admin_desktop_time_properties_hover_help: "<b>Doar utilizatori IBM FileNet P8:</b> Această setare se aplică la proprietăţi personalizate şi nu se aplică la proprietăţi de sistem. De exemplu, proprietatea Modificat de va afişa încă porţiunea de oră a amprentei de timp dacă selectaţi <b>Afişare numai porţiunea de dată a amprentei de timp</b>.<br/><br/>Această setare nu modifică amprenta de timp în magazie.",
		admin_desktop_disable_time_stamp: "Afişare amprentă de timp completă",
		admin_desktop_enable_time_stamp: "Afişare numai porţiunea de dată a amprentei de timp",
		admin_desktop_timezone: "Fus orar:",
		admin_desktop_timezone_localuser: "Afişare fus orar local al utilizatorului",
		admin_desktop_timezone_alluser: "Afişare acelaşi fus orar pentru toţi utilizatorii",
		admin_desktop_timezone_hover_help: "Puteţi specifica dacă utilizatorii văd o amprentă de timp care este bazată pe fusul lor local sau dacă toţi utilizatorii văd aceeaşi amprentă de timp.<br/><br/>Această setare nu modifică amprenta de timp în magazie. Totuşi, setarea pe care o selectaţi determină amprenta de timp care este folosită pentru a crea amprenta de timp în magazie când utilizatorii adaugă sau modifică articole.",
		admin_desktop_mobile_feature_display_label: "Afişare",
		admin_desktop_mobile_feature_icon_file_label: "Fişier pictogramă",
		admin_mobile_feature_dialog_icon_file_label: "Fişier pictogramă:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nume",
		admin_desktop_mobile_select_feature_label: "Selectare caracteristică",
		admin_desktop_mobile_feature_icon_label: "Pictogramă caracteristică",
		admin_desktop_share_admin_none: "Administratorul nu este setat.",
		admin_desktop_share_admin_edit_label: "Setare Administrator...",
		admin_browse_icon: "Pictogramă Răsfoire",
		admin_search_icon: "Pictogramă Căutare",
		admin_favorites_icon: "Pictogramă Favorite",
		admin_casesearch_icon: "Pictogramă Caz",
		admin_datacap_icon: "Pictogramă Datacap",
		admin_system_defined: "Definit de sistem",
		admin_icon_file_placeholder_text: "Locaţie fişier (de ex. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Rădăcină",
		admin_folder_default: "Implicit",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Bare de unelte",
		admin_menu_context_menus: "Meniuri contextuale",
		admin_menu_office_toolbars: "Comenzi bară panglică Microsoft Office",
		admin_menu_office_menus: "Meniuri contextuale Microsoft Office",

		admin_file_name_label: "Nume fişier:",
		admin_exportconfiguration_security_label: "Includere utilizatori şi grupuri care sunt autorizaţi să folosească acest desktop",
		admin_exportconfiguration_instruction: "Puteţi exporta desktopurile dumneavoastră, inclusiv configuraţiile de magazii şi de plug-in-uri care sunt asociate cu desktopurile selectate, la un fişier pe care îl puteţi importa într-o altă instanţă de IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportare Desktop",
		admin_exportconfiguration_button_label: "Export",
		admin_dialog_select_all: "Selectare toate",
		admin_dialog_deselect_all: "Curăţare toate",

		admin_importconfiguration_instruction: "Articolele din fişierul de configuraţie selectat vor fi importate în acest sistem. Dar, dacă un articol cu acelaşi ID există deja pe sistem, trebuie să decideţi dacă suprascrieţi sau păstraţi articolul.",
		admin_importconfiguration_dialog_label: "Import Desktop",
		admin_importconfiguration_reason_dialog_label: "Import Motive de redactare",
		admin_importconfiguration_button_label: "Import",
		admin_to_be_imported: "Articol de configurare de importat",
		admin_on_target_system: "Articol existent în sistemul ţintă",
		admin_import_short_warning_message: "Următoarele articole există deja pe sistem. Selectaţi articolele pe care vreţi să le înlocuiţi pe sistem.",
		admin_import_warning_message: "Următoarele articole de configurare au aceleaşi ID-uri ca şi articolele care există în sistemul ţintă. Selectaţi doar acele articole pe care doriţi să le importaţi şi suprascrie în sistemul ţintă.<br /><br />Dacă nu doriţi să suprascrieţi un articol de configurare, creaţi o copie a articolului în instanţa din care aţi exportat desktopul, daţi-i un ID diferit şi asociaţi-l cu desktop-ul. Exportaţi din nou desktop-ul, iar apoi importaţu desktop-ul în această instanţă.",
		admin_choose_file_to_import_label: "Alegeţi fişierul pentru import",
		admin_download_imported_log: "Descărcare raport",
		admin_desktop_import_summary: "Sumar import desktop",
		admin_reason_import_summary: "Sumar import Motive de redactare",
		admin_rba_import_summary: "Sumar import roluri de administrare",
		admin_import_open_tabs_checking: "Înainte de a putea importa desktop-uri, trebuie să închideţi toate filele altele decât fila<bold>Desktop-uri</bold> din unealta de administrare.",
		admin_import_no_conflict: "Următoarele articole vor fi importate:",
		admin_desktop_invalid: "Desktop invalid",
		admin_desktop_warning: "Desktop-ul a fost salvat cu avertismente.",
		admin_repos_warning: "Magazia a fost salvată cu avertismente.",
		admin_config_type_icon: "Pictogramă tip de articol configuraţie",

		admin_approval_workflow: "Flux de lucru de aprobare",
		admin_approval_workflow_hover: "Le permite utilizatorilor să lanseze un flux de lucru de aprobare predefinit. Puteţi să dezactivaţi fluxul de lucru de aprobare pentru a le permite utilizatorilor să lanseze un flux de lucru de aprobare personalizat, care este definit de un abonament. Implicit, fluxul de lucru de aprobare este activat.<br><br><b>Important:</b> Dacă activaţi fluxul de lucru de aprobare, trebuie de asemenea să vă asiguraţi că una sau ambele definiţii de flux de lucru de aprobare predefinit (ICNParallelDocumentApproval.pep şi ICNSequentialDocumentApproval.pep) sunt adăugate în magazie şi transferate în Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Nu puteţi specifica utilizatorii şi grupurile care au acces la acest desktop.",
		admin_cannot_add_desktop_members_error_explanation: "Nu aveţi permisiunile corespunzătoare pentru a extrage informaţiile de utilizator şi grup.",
		admin_cannot_add_desktop_members_error_userResponse: "Logaţi-vă cu alt nume de utilizator sau cereţi administratorului de sistem IBM Content Manager să vă acorde privilegiul UserACLOwner, care este necesar pentru a extrage informaţiile de utilizator şi grup.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Puteţi selecta utilizatori şi grupuri.",
		admin_cannot_select_users_groups_error_explanation: "Nu aveţi permisiunile corespunzătoare pentru a extrage informaţiile de utilizator şi grup.",
		admin_cannot_select_users_groups_error_userResponse: "Logaţi-vă cu alt nume de utilizator sau cereţi administratorului de sistem IBM Content Manager să vă acorde privilegiul UserACLOwner, care este necesar pentru a extrage informaţiile de utilizator şi grup.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Clientul OAuth2 nu a fost găsit.",
		oauth_client_not_found_error_explanation: "ID-ul de client OAuth2 ${0} nu a fost găsit.",
		oauth_client_not_found_error_userResponse: "Contactaţi administratorul dumneavoastră de sistem şi informaţi-l că nu a fost găsit ID-ul de client OAuth2.",
		oauth_client_not_found_error_adminResponse: "Examinaţi configuraţia magaziei şi verificaţi că aceasta conţine ID-ul de client OAuth2 client ID corect.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "A eşuat logarea la magazie.",
		oauth_login_failed_error_explanation: "A eşuat o încercare de logare la magazia ${0}.",
		oauth_login_failed_error_userResponse: "Verificaţi că ID utilizator şi parola sunt corecte şi încercaţi logarea din nou.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "A apărut o eroare la încercarea de logare în ${0}.",
		oauth_error_return_error_explanation: "A eşuat încercarea de autorizare ${0}.",
		oauth_error_return_error_userResponse: "Contactaţi administratorul dumneavoastră de sistem cu informaţiile următoare: A eşuat încercarea de autorizare ${0} şi s-a returnat următorul mesaj de eroare: <br>${1}<br><b>eroare:</b> ${2}.<br><b>descriere:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Informaţii suplimentare despre eroare se găsesc în fişierele istoric ale serverului de aplicaţii.  Pentru informaţii suplimentare despre fişierele istoric, vedeţi &quot;Fişierele istoric IBM Content Navigator&quot; în IBM Knowledge Center. Folosind informaţiile despre încercarea de autentificare ${0}, încercaţi să corectaţi problema şi verificaţi că este activat OAuth2.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Aplicaţia ţintă OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "eroare",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Mesaj de eroare OAuth nerecunoscut.",

		delete_share_permission_error: "Partajarea nu a fost ştearsă.",
		delete_share_permission_error_explanation: "Nu aveţi permisiunile corespunzătoare pentru a şterge partajarea.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Nu puteţi partaja acest articol.",
		class_not_support_share_error_explanation: "Clasa ${0} nu a fost setată pentru a suporta partajarea.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Nu puteţi partaja acest articol.",
		rbr_not_support_share_error_explanation: "A fost adăugat conţinut sensibil la articol.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Dispozitivul din care utilizatorul încearcă să se logheze nu este autorizat să acceseze contul utilizatorului.",
		box_oauth_error_invalid_request: "Cererii îi lipseşte un parametru necesar, include o valoare invalidă de parametru, include un parametru mai mult decât o dată sau este formatat greşit.",
		box_oauth_error_unsupported_response_type: "Serverul de autorizare nu suportă obţinerea unui cod de autorizare folosind această metodă.  Verificaţi valoarea parametrului cod în cererea dumneavoastră.",
		box_oauth_error_access_denied: "Proprietarul resursei sau serverul de autorizare au refuzat cererea.",
		box_oauth_error_temporarily_unavailable: "Dispozitivul dumneavoastră este limitat din punct de vedere al aratei, trebuie să micşoraţi rata cererilor de autorizare sau să aşteptaţi puţin.",
		box_oauth_error_unknown: "Mesaj de eroare Box nerecunoscută.",

		admin_default_search_type: "Tip de căutare implicit",
		admin_default_search_type_hover: "Specificaţi ce opţiune este selectată implicit în câmpul <b>Căutare după</b> în meniul <b>Opţiuni căutare</b>.",
		admin_default_search_type_documents: "Documente",
		admin_default_search_type_folders: "Foldere",
		admin_default_search_type_folders_and_documents: "Documente şi foldere",

		admin_restricted_search_type: "Se permite căutarea",
		admin_restricted_search_type_hover: "Implicit, utilizatorii pot căuta atât documente, cât şi foldere. Dacă vreţi să ascundeţi opţiunea Căutare şi să restricţionaţi căutările numai la documente, selectaţi Documente şi deselectaţi Foldere.</br>,</br> Dacă vreţi să permiteţi căutarea atât pentru documente, cât şi pentru foldere, selectaţi opţiunea implicită de afişare când se deschide panoul de căutare.",
		admin_restricted_search_type_documents: "Documente",
		admin_restricted_search_type_folders: "Foldere",
		admin_restricted_search_type_folders_and_documents: "Documente şi foldere",

		admin_default_search_version: "Versiune implicită de căutare",
		admin_default_search_version_hover: "Specificaţi ce opţiune este selectată implicit în câmpul <b>Versiune</b> în meniul <b>Opţiuni căutare</b>.",

		admin_all_classes_search: "Căutare toate clasele",
		admin_all_classes_search_hover: "Specificaţi dacă li se permite utilizatorilor să caute în toate clasele, şi dacă da, ce va fi inclus în căutările de documente.",
		admin_all_classes_search_removed_hover: "Opţiunile de căutare în toate clasele nu este disponibilă pentru că parametrul context-param allPseudoClassHidden din web.xml al aplicaţiei Navigator este setat la true.",
		admin_all_classes_search_hide: "Înlăturare opţiune de căutare în toate clasele",
		admin_all_classes_search_documents_only_documents: "O căutare de documente include doar documente, căutări salvate şi şabloane de intrare.",
		admin_all_classes_search_documents_non_folders: "O căutare de documente include orice articol care nu este folder.",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Vizualizare arbore:",
		admin_feature_config_tree_view_hoverhelp: "Specificaţi dacă utilizatorii pot accesa lista de foldere din magazie prin panoul Răsfoire. Dacă ascundeţi panoul Răsfoire, utilizatorii trebuie să folosească lista de conţinut pentru a naviga la folderele din magazie.",
		admin_feature_config_selected_repositories_label: "Magazii:",
		admin_feature_config_selected_repositories_hoverhelp: "Selectaţi magaziile pe care utilizatorii le pot accesa în această caracteristică.",
		admin_feature_config_selected_repositories_select_state_hdr: "Selectare magazie",
		admin_feature_config_selected_repositories_name_hdr: "Nume magazie",
		admin_feature_config_selected_repositories_show_hdr: "Afişare",
		admin_feature_config_invalid_icon_title: "Caracteristicii îi lipsesc unele setări necesare",
		admin_feature_config_view_select_hdr: "Selectare vizualizare",
		admin_feature_config_view_hdr: "Vizualizare",
		admin_feature_config_view: "Vizualizare",
		admin_feature_config_views: "Vizualizări:",
		admin_feature_config_views_hoverhelp: "Specificaţi ce vizualizări pot aplica utilizatorii la lista de conţinut. Vizualizările sunt afişate în ordinea în care sunt listate. Prima vizualizare selectată este vizualizarea implicită pentru caracteristică.<br><br><b>Important:</b> Dacă activaţi vizualizarea Diafilm, trebuie să configuraţi vizualizatorul de conversie HTML pentru a vedea previzualzările documentului.",

		admin_custom_dialog_name: "Nume:",
		admin_custom_dialog_value: "Valoare:",
		admin_custom_setting_name_hover: "Introduceţi numele setării Daeja ViewONE pe care vreţi s-o adăugaţi la configuraţia dumneavoastră. Vedeţi documentaţia Daeja ViewONE pentru informaţii suplimentare despre setările de configurare.",
		admin_custom_setting_value_hover: "Introduceţi valoarea pe care vreţi s-o folosiţi pentru setarea de configurare Daeja ViewONE. Vedeţi documentaţia Daeja ViewONE pentru informaţii suplimentare despre valorile valide pentru setarea de configurare.",

		entry_template_name_required_message: "Câmpul nume din Setări şablon de intrare este necesar.",
		entry_template_name_invalid_message: "Câmpul nume din Setări şablon de intrare nu poate conţine următoarele caractere: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Atunci când sunt selectaţi anumiţi utilizatori sau grupuri pentru Partajare cu câmp din Setări şablon de intrare, atunci trebuie să specificaţi cel puţin un utilizator sau un grup.",
		entry_template_no_permission_to_save_to_teamspace_message: "Nu aveţi permisiunea să adăugaţi şabloanele de intrare în spaţiile de echipă (${0}) care au fost selectate din Salvare din Setări şablon de intrare.",
		entry_template_save_in_destination_required_message: "Trebuie să specificaţi o locaţie implicită de salvare în secţiunea <b>Setează locaţia de stocare a articolului</b>.",
		entry_template_save_in_destination_must_select_folder: "Dacă ascundeţi câmpul <b>Salvare în</b> şi cereţi utilizatorilor să adauge articole noi într-un folder, trebuie să selectaţi un folder în câmpul <b>Locaţie implicită de salvare</b> în secţiunea <b>Setează locaţia de stocare a articolului</b>.",
		entry_template_what_to_save_required_message: "Selectaţi cel puţin o opţiune pentru ce doriţi să salvaţi din Setare opţiuni.",
		entry_template_custom_workflow_empty_message: "Dacă selectaţi <b>Flux de lucru personalizat...</b>, trebuie să căutaţi şi să selectaţi fluxul de lucru pe care doriţi să-l utilizaţi.",

		entry_template_new: "Şablon de intrare nou",
		entry_template_name_hover: "Numele şablonului de intrare nu poate conţine următoarele caractere: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Numele şablonului de intrare nu poate conţine niciunul dintre următoarele caractere : * \\ / : ? \" < > |",
		entry_template_description_hover: "Furnizaţi o descriere care va permite utilizatorilor să distingă între acest şablon de intrare şi alte şabloane de intrare.",
		entry_tempalte_save_in_hover: "Specificaţi unde salvaţi şablonul de intrare.<br><br><b>Restricţie:</b> Dacă salvaţi şablonul de intrare într-un spaţiu de echipă, puteţi utiliza şablonul de intrare numai în spaţiul de echipă.",
		entry_template_inherit_hover: "Dacă selectaţi această opţiune, setările de securitate pentru folderul părinte sunt adăugate la lista de utilizatori şi de grupuri cu care este partajată lista de întrări.",
		entry_template_builder_aria_label: "Builder de şablon de intrare",
		entry_template_builder_layout_aria_label: "Builder de proprietăţi ale şablonului de intrare",

		entry_template_settings_document: "Definire şablon de intrare",
		entry_template_settings_folder: "Setare locaţie de depozitare articol",
		entry_template_settings_folder_intro: "Specificaţi unde sunt stocate articolele care sunt adăugate prin utilizarea acestui şablon de intrare.",
		entry_template_settings_properties: "Setare proprietăţi articol",
		entry_template_settings_properties_intro: "Puteţi specifica valorile implicite sau predefinite pentru articolele care sunt adăugate prin utilizarea acestui şablon de intrare. În plus, puteţi modifica dispunerea proprietăţilor pentru a controla ce proprietăţi sunt afişate şi ordinea în care sunt afişate.",
		entry_template_settings_workflow: "Configurare un flux de lucru pentru articol",
		entty_template_settings_workflow_intro: "Puteţi specifica dacă este lansat un flux de lucru când sunt adăugate articole prin utilizarea şablonului de intrare.",
		entry_template_settings_security: "Setare securitate articol",
		entry_template_settings_security_intro: "Puteţi specifica valorile implicite sau predefinite pentru articolele care sunt adăugate prin utilizarea acestui şablon de intrare. Utilizatorii cu permisiuni corespunzătoare ar putea modifica securitatea articolului după ce este adăugat.",
		entry_template_settings_options: "Setare opţiuni pentru articol",
		entry_template_xt_warning: "Salvarea modificărilor pentru acest şablon de intrare îl va converti dintr-un şablon de intrare IBM Workplace XT într-un şablon de intrare IBM Content Navigator. IBM Workplace XT  nu suportă şabloanele de intrare IBM Content Navigator.",

		entry_template_properties_edit_layout: "Editare dispunere...",
		entry_template_properties_read_only: "Numai citire",
		entry_template_properties_hidden: "Ascuns",

		entry_template_destination_show: "Afişare câmp <b>Salvare în</b>",
		entry_template_destination_show_hover: "Dacă afişaţi câmpul <b>Salvare în</b>, utilizatorii pot modifica unde sunt stocate articolele.",
		entry_template_destination_hide: "Ascundere câmp <b>Salvare în</b>",
		entry_template_destination_hide_hover: "Dacă ascundeţi câmpul <b>Salvare în</b>, utilizatorii nu pot modifica unde sunt stocate articolele.",
		entry_template_folder_save_in_default: "Locaţie implicită <b>Salvare în</b>:",
		entry_template_folder_save_in_default_hover: "Specificaţi locaţia implicită unde articolele sunt adăugate prin folosirea acestui şablon.<br><br>Locaţia implicită pe care o selectaţi impune restricţii pentru comportamentul de runtime al şablonului de intrare:<ul><li>Utilizatorii nu pot selecta o magazie diferită.</li><li>Dacă locaţia implicită este un spaţiu de echipă, utilizatorii nu pot selecta un spaţiu de echipă diferit.</li></ul>Totuşi, dacă utilizatorii asociază acest şablon de intrare cu un folder, utilizatorii pot înlocui locaţia de stocare care este configurată pentru acest şablon de intrare.",
		entry_template_folder_restrict_choice: "Cereţi utilizatorilor să adauge articole la locaţia implicită sau la un folder copil al locaţiei implicite",
		entry_template_folder_file_in_required: "Cereţi utilizatorilor să adauge articolele noi într-un folder",
		entry_template_folder_file_in_required_hover: "Dacă nu selectaţi această opţiune, utilizatorii pot adăuga articole la folderul rădăcină al magaziei.<br><br><b>Restricţie:</b> Configuraţia desktop poate cere ca utilizatorii să selecteze un folder.",

		entry_template_document_type_show: "Afişare câmp <b>Ce doriţi să salvaţi</b>",
		entry_template_document_type_show_hover: "Dacă afişaţi câmpul <b>Ce doriţi să salvaţi</b>, articolele pe care le selectaţi sunt afişate ca opţiuni în câmpul <b>Ce doriţi să salvaţi</b>.",
		entry_template_document_type_hide: "Ascundere câmp <b>Ce doriţi să salvaţi</b>",
		entry_template_document_type_hide_hover: "Dacă ascundeţi câmpul <b>Ce doriţi să salvaţi</b>, tipul de document pe care îl selectaţi este întotdeauna utilizat când utilizatorii adaugă documente prin utilizarea acestui şablon de intrare.",
		entry_template_document_type: "Acest şablon de intrare poate fi utilizat pentru adăugarea următoarelor articole:",
		entry_template_document_type_hover: "Dacă afişaţi câmpul <b>Ce doriţi să salvaţi</b>, articolele pe care le selectaţi sunt afişate ca opţiuni în câmpul <b>Ce doriţi să salvaţi</b>.<br><br>Dacă ascundeţi câmpul <b>Ce doriţi să salvaţi</b>, tipul de document pe care îl selectaţi este întotdeauna utilizat când utilizatorii adaugă documente prin utilizarea acestui şablon de intrare.",

		entry_template_misc: "Opţiuni suplimentare:",
		entry_template_auto_classify_show: "Clasificare automată cuprins document",
		entry_template_auto_classify_show_hover: "Când este clasificat un document pe FileNet Content Manager, este examinat cuprinsul documentului pentru a determina clasa corespunzătoare şi valorile proprietăţilor pentru document.<br><br>Vorbiţi cu administratorul dumneavoastră de sistem pentru a determina dacă este activată clasificarea conţinutului pe Content Platform Engine.<br><br>Dacă activaţi această opţiune, clasa şi proprietăţile documentului pot fi modificate cînd un utilizator adaugă documentul la magazie.",
		entry_template_allow_duplicate_file_names: "Se permit documente cu nume duplicate de fişiere",
		entry_template_allow_duplicate_file_names_hover: "Implicit, puteţi adăuga documente cu acelaşi nume la un folder în FileNet Content Manager. Puteţi curăţa această opţiune dacă doriţi ca fiecare fişier din locaţia de depozitare selectată să aibă un nume unic.",
		entry_template_allow_compound_documents: "Se permite ca acest document să fie părintele unui document compus",
		entry_template_version_show: "Afişare opţiuni de versiune pentru adăugare şi înregistrare la intrare",
		entry_template_version_hide: "Ascundere opţiuni de versiune pentru adăugare şi înregistrare la intrare",
		entry_template_version_to_add_as: "Versiune implicită de adăugat ca:",
		entry_template_version_default: "Opţiune de versiune implicită:",
		entry_template_version_default_checked: "Versiune majoră",
		entry_template_version_default_unchecked: "Versiune minoră",
		entry_template_version_display: "Versiune document:",
		entry_template_version_display_show: "Afişare",
		entry_template_version_display_hide: "Ascundere",
		entry_template_version_default_add: "Versiune implicită de adăugat ca:",

		entry_template_checkin_version_show: "Afişare opţiuni de versiune pentru înregistrare la intrare",
		entry_template_checkin_version_hide: "Ascundere opţiuni de versiune pentru înregistrare la intrare",

		entry_template_checkin_version_message_no_versions: "Politica de versionare a clasei selectate împiedică utilizatorii să facă înregistrarea la intrare a unei noi versiuni a documentului.",
		entry_template_checkin_version_message_always_version: "Politica de versionare a clasei selectate împiedică utilizatorii să înlocuiască versiunea curentă a documentului.",

		entry_template_applied: "Utilizare acest şablon de intrare când utilizatorii:",
		entry_template_applied_add: "Adaugă documente (necesar)",
		entry_template_applied_add_folder: "Creează foldere (necesar)",
		entry_template_applied_checkin: "Înregistrare la intrare",
		entry_template_applied_properties_group: "Vizualizare sau editare proprietăţi:",
		entry_template_applied_properties: "În fereastra Proprietăţi",
		entry_template_applied_viewer: "În vizualizatorul de aplet",
		entry_template_applied_docinfo: "În panoul de informaţii documente",
		entry_template_applied_no_class_support: "Acest şablon de intrare poate fi folosit pentru a adăuga articole, dar nu poate fi folosit pentru a înregistra la intrare documente sau pentru a vizualiza şi edita proprietăţi. Clasa selectată trebuie modificată pentru a suporta aceste situaţii. Dacă trebuie să folosiţi şablonul de intrare în aceste situaţii, cereţi-i administratorului dumneavoastră să folosească unealta de administrare pentru a modifica clasa, astfel încât să poată stoca ID-uri de şablon de intrare.",
		entry_template_applied_no_child_component_support: "Clasa selectată are componente copil şi este definită o dispunere de proprietăţi. Dispunerile de proprietăţi nu suportă componente copil. Componentele copil nu vor fi afişate utilizatorului.",
		entry_template_applied_child_component: "Clasa selectată are componente copil. Ele vor fi afişate utilizatorului, dar nu puteţi configura componentele copil în acest şablon de intrare.",

		entry_template_properties_show: "Afişare secţiune <b>Proprietăţi</b>",
		entry_tempalte_properties_show_hover: "Dacă afişaţi secţiunea <b>Proprietăţi</b>, utilizatorii pot modifica orice valoare de proprietate care este afişată în şablonul de intrare şi care nu este numai-citire.",
		entry_template_properties_hide: "Ascundere secţiune <b>Proprietăţi</b>",
		entry_template_properties_hide_hover: "Dacă ascundeţi secţiunea <b>Proprietăţi</b>, utilizatorii nu pot modifica nicio valoare de proprietate. Şablonul de intrare trebuie să definească toate valorile pe care doriţi să le utilizaţi când sunt adăugate articole prin utilizarea acestui şablon de  intrare.",

		entry_template_security_show: "Afişare secţiune <b>Securitate</b>",
		entry_template_security_show_hover: "Dacă afişaţi secţiunea <b>Securitate</b>, utilizatorii care au permisiunile corespunzătoare pot modifica securitatea articolului.",
		entry_template_security_hide: "Ascundere secţiune <b>Securitate</b>",
		entry_template_security_hide_hover: "Dacă ascundeţi secţiunea <b>Securitate</b>, utilizatorii nu pot modifica securitatea articolelor. Şablonul de intrare trebuie să definească toate setările de securitate pe care doriţi să le utilizaţi când sunt adăugate sau editate articole.",
		entry_template_security_policy: "Politică de securitate:",
		entry_template_security_policy_hover: "Funcţie de politica de securitate pe care o selectaţi, politica de securitate poate:<br><ul><li>Ignora permisiunile care sunt specificate sub <b>Setare securitate articol</b>.</li><li>Adăuga permisiunile care sunt specificate sub <b>Setare securitate articol</b>.</li></ul>",
		entry_template_security_policy_none: "Nicio politică de securitate selectată",
		entry_template_security_inherit: "Moştenire setări de securitate din folderul părinte",
		entry_tempalte_save_in_hover: "Specificaţi unde salvaţi şablonul de intrare.<br><br><b>Restricţie:</b> Dacă salvaţi şablonul de intrare într-un spaţiu de echipă, puteţi utiliza şablonul de intrare numai în spaţiul de echipă.",
		entry_template_security_inherit_item_security_hover: "Dacă selectaţi această opţiune, setările de securitate pentru folderul părinte sunt adăugate la setările de securitate care sunt definite de unul din articolele următoare:<ul><li>Clasa care este specificată în secţiunea <b>Setarea proprietăţilor articolelor</b></li><li>Securitatea personalizată pe care aţi specificat-o în secţiunea <b>Setarea proprietăţilor articolelor</b></li></ul>",
		entry_template_security_change: "Înlocuire securitate definită de clasa selectată",
		entry_template_security_change_hover: "Dacă selectaţi această opţiune, setările de securitate care sunt definite pentru clasă sunt afişate implicit. Puteţi apoi modifica setările de securitate pentru şablonul de intrare.<br><br>Dacă afişaţi secţiunea <b>Securitate</b>, utilizatorii care au permisiunile corespunzătoare pot modifica securitatea articolului.<br><br>Dacă selectaţi această opţiune şi alegeţi să moşteniţi setările de securitate de la folderul părinte, toate permisiunile care pot fi moştenite vor fi adăugate la securitatea pe care o specificaţi.",
		entry_template_security_default_item_security: "Înlocuire securitate articol implicit a utilizatorului ce adaugă articolul",
		entry_template_security_policy_message_override: "Politica de securitate selectată este configurată pentru a ignora permisiunile ce sunt specificate sub Setare securitate.",
		entry_template_security_policy_message_add: "Politica de securitate selectată este configurată pentru a adăuga permisiuni ce sunt specificate sub Setare securitate.",
		entry_template_security_policy_preserve_true_hover: "Păstrează permisiunea directă",
		entry_template_security_policy_preserve_false_hover: "Nu păstrează permisiunea directă",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Roluri specifice",
		entry_template_security_class_role_search_title: "Căutare pentru roluri:",
		entry_template_secuirty_class_member_title: "Listă de membri pentru ${0}",
		entry_template_secuirty_class_folder_only: "Aceste permisiuni se aplică doar la acest folder",
		entry_template_secuirty_class_folder_and_immediate_children: "Aceste permisiuni se aplică acestui folder şi copiilor imediaţi care sunt configuraţi pentru a moşteni securitatea de la acest folder.",
		entry_template_secuirty_class_folder_and_all_children: "Aceste permisiuni se aplică acestui articol şi tuturor descendenţilor care sunt configuraţi pentru a moşteni securitatea de la acest folder.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Aceste permisiuni se aplică copiilor imediaţi care sunt configuraţi pentru a moşteni securitatea de la acest folder.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Aceste permisiuni se aplică tuturor descendenţilor care sunt configuraţi pentru a moşteni securitatea de la acest folder.",

		entry_template_class_security_message_no_override: "Securitatea clasei selectate împiedică utilizatării să ignore securitatea.",
		entry_template_class_security_required_privileges: "<b>Important</b>: Atunci când ignoraţi securitatea clasei selectate, utilizatorii ce adaugă articole utilizând acest şablon de intrare, trebuie să aibă drepturile ItemSetACL şi UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Flux de lucru cu tipar secvenţial",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Flux de lucru cu tipar paralel",
		entry_template_workflow_type_existing: "Flux de lucru personalizat...",
		entry_template_workflow_launch_prompt: "Cereţi utilizatorilor să lanseze fluxul de lucru",
		entry_template_workflow_launch_auto: "Lansare automată flux de lucru",
		entry_template_workflow_modify_launch: "Se permite utilizatorilor să modifice pasul de lansare",
		entry_template_workflow_modify_launch_hover: "Selectaţi această opţiune dacă doriţi să permiteţi utilizatorilor să modifice modul în care este lansat fluxul de lucru.",

		entry_template_optionsButton_title: "Modificare",
		entry_template_optionsButton_readonly_title: "Vizualizare asociere",
		entry_template_optionsDialog_title: "Setări de asociere folder",
		entry_template_removeButton_title: "Înlăturare",
		entry_template_addButton_title: "Adăugare",
		entry_template_selected_entry_templates: "Şabloane de intrare selectate",
		entry_template_docs_added_to_template_destination: "Documentele sunt adăugate la destinaţia specificată în şabloanele de intrare.",
		entry_template_docs_added_to_other_object_store: "Acest şablon de intrare adaugă articole în depozitul de obiecte ${0}.",
		entry_template_inherited_entry_templates_label: "Doresc să: ",
		entry_template_inherited_entry_templates: "Moştenire asocieri ale şablonului de intrare din folder: ",
		entry_template_inherited_entry_templates_not: "Creare asocieri noi pentru acest folder",
		entry_template_inherited_folder_path: "Şabloanele de intrare din lista de şabloane de intrare selectate sunt asociate cu următorul folder: ${0}. <br> Calea către folder este ${1}.",
		entry_template_folder_associations_title: "Asociere şabloane de intrare",
		entry_template_folder_associations_intro: "Atunci când asociaţi un şablon de intrare cu un folder, trebuie să utilizaţi şablonul de intrare pentru a adăuga articole în folder. Dacă asociaţi şabloane de intrare multiple cu un folder, utilizatorii pot selecta ce şablon de intrare să utilizeze.",
		entry_tempalte_folder_associations_entrytemplate: "Şablon de intrare: ",
		entry_template_avaliable_entry_templates: "Şabloane de intrare disponibile",
		entry_template_fileTypes_intro_title: "Tipuri de fişier permise:",
		entry_template_fileTypes_intro: "Implicit, orice şablon de intrare poate fi utilizat pentru adăugarea  oricărui tip de document în magazie. Totuşi, dacă selectaţi unul sau mai multe tipuri de fişiere, şabloanele de intrare sunt disponibile numai atunci când utilizatorii adaugă documente ce se potrivesc cu unul sau mai multe tipuri de fişiere specificate.",
		entry_template_fileTypes: "Tipuri de fişiere",
		entry_template_fileType_error: "Tipurile de fişiere invalide sunt selectate pentru unul sau mai multe asocieri ale şabloanelor de intrare. Trebuie să înlăturaţi tipurile de fişiere invalide înainte ca aceste asocieri ale şabloanelor de intrare să poată fi salvate.",
		entry_template_fileTypes_any_type_of_file: " Orice tip de fişiere",
		entry_template_description_label: "Descriere",
		entry_template_ItemInfoPrefix: "Asociere cu: ",
		entry_template_TargetObjectStoreName: "Depozit de obiecte ţintă",
		entry_template_class: "Clasă",
		entry_template_current_folder_as_parent: "Utilizare folder ca destinaţie",
		entry_template_view_minetypes: "Vizualizare tipuri MIME",
		entry_template_avaliable_MIME_types: "Tipuri de fişiere disponibile",
		entry_template_selected_MIME_types: "Tipuri de fişiere selectate",
		entry_template_MIME_type_column: "Nume de categorii ale tipurilor de fişiere",
		entry_template_file_type_not_existing: "Vă rugăm să înlăturaţi tipurile de fişiere invalide.",
		entry_template_MIME_types: "Tipuri MIME:",
		entry_template_MIME_types_info_dialog_title: "Tipurile MIME pentru",
		entry_template_destination_label: "Adăugare documente în: ",
		entry_template_destination_help: "Specificaţi unde sunt stocate documentele în magazie atunci când utilizatorii adaugă documente în acest folder utilizând şablonul de intrare selectat.",
		entry_template_radioButton_folder_destination: "Folder selectat",
		entry_template_radioButton_template_destination: "Destinaţie specificată în şablonul de intrare",
		entry_tempalte_teamspace_default: "Şablon de intrare implicit",
		entry_template_folder_associations_save_new: "Aţi modificat câteva asocieri de şablon de intrare. Vreţi să închideţi această fereastră fără a vă salva modificările?",
		entry_template_mode_binding_label: "Proprietăţi",
		entry_template_columns_className: "Nume clasă",
		entry_template_columns_type: "Tip de şablon",
		entry_template_columns_workflow: "Nume flux de lucru",
		entry_template_columns_destination: "Destinaţie",
		entry_template_association_less_than_record: "Există ${0} şabloane de intrare nelistate în Şabloane de intrare selectate. Nu aveţi nicio permisiune să le vedeţi. Sau sunt şterse. Contactaţi administratorului dumneavoastră de sistem pentru a obţine informaţii suplimentare.",
		/* Request */

		progress_message_general: "Se lucrează...",
		cancel_message_general: "Acţiunea a fost anulată.",
		ie8_not_supported_browser: "IE8 nu este un browser suportat.",
		progress_message_getDesktop: "Se încarcă desktop-ul...",
		progress_message_getActions: "Se încarcă acţiunile...",
		progress_message_getViewers: "Se încarcă desktop-ul...",
		progress_message_logon: "Se loghează...",
		progress_message_logoff: "Se deloghează...",
		progress_message_getContentClasses: "Se extrag clasele...",
		progress_message_openContentClass: "Se extrag detaliile clasei...",
		progress_message_od_getCabinets: "Se extrag cabinetele...",
		progress_message_getSearchTemplates: "Se extrag căutările...",
		progress_message_od_getTemplates: "Se extrag folderele...",
		progress_message_od_openCabinet: "Se extrag folderele...",
		progress_message_openSearchTemplate: "Se deschide căutarea...",
		progress_message_od_openTemplate: "Se deschide folderul...",

		progress_message_getWorklists: "Se extrag listele de lucru...",
		progress_message_getWorkItems: "Se extrag articolele de lucru...",
		progress_message_getNextWorkItems: "Se extrag articolele de lucru...",
		progress_message_getStepParameters: "Se extrag informaţiile articolului de lucru...",
		progress_message_getStepAttachmentItems: "Se extrag informaţiile ataşamentului...",
		progress_message_getDependentParameters: "Extragerea informaţiilor de proprietate...",

		progress_message_p8_getProcessApplicationSpaces: "Se extrag spaţiile de aplicaţie...",
		progress_message_p8_getProcessRoles: "Se extrag rolurile de proces...",
		progress_message_p8_getProcessInbaskets: "Se extrag in-basket-urile...",
		progress_message_p8_getProcessorInformation: "Se extrag informaţiile de proces...",
		progress_message_p8_getFilterCriteria: "Se extrage filtrul in-basket...",
		progress_message_p8_getLaunchParameters: "Se extrag informaţiile articolului de lucru...",
		progress_message_p8_getStepAttachments: "Se extrag ataşamentele articolului de lucru...",
		progress_message_p8_getSubscriptions: "Se extrag abonamentele fluxului de lucru...",
		progress_message_p8_getTrackerParameters: "Se extrag informaţiile articolului de lucru...",
		progress_message_p8_getTrackerHistory: "Se extrage istoricul articolului de lucru...",
		progress_message_p8_getTrackerMilestones: "Se extrag jaloanele articolului de lucru...",
		progress_message_p8_completeStep: "Se finalizează articolul de lucru...",
		progress_message_p8_moveToInbox: "Se mută articolul la in-basket...",
		progress_message_p8_returnToSender: "Se returnează articolul de lucru...",
		progress_message_p8_reassign: "Se realocă articolul de lucru...",
		progress_message_p8_launchWorkflow: "Se lansează fluxul de lucru...",
		progress_message_p8_getTransferedWorkflows: "Extragerea informaţiilor legate de fluxul de lucru...",

		progress_message_cm_getProcesses: "Extragerea informaţiilor legate de fluxul de lucru...",
		progress_message_cm_completeStep: "Continuarea articolului de lucru...",
		progress_message_cm_getItemProcessInformation: "Extragerea informaţiilor legate de fluxul de lucru...",

		progress_message_search: "Se caută...",
		cancel_message_search: "Căutarea a fost anulată.",
		progress_message_getContentItems: "Se extrag informaţiile articolului...",
		progress_message_openFolder: "Se deschide folderul...",
		progress_message_addItem: "Se creează articolul...",
		progress_message_checkIn: "Se înregistrează articolul la intrare...",
		progress_message_changePassword: "Se modifică parola...",
		progress_message_getDefaultInstancePermissions: "Se extrag permisiunile implicite...",
		progress_message_openItem: "Se extrag informaţiile articolului...",
		progress_message_saveItem: "Se salvează informaţiile articolului...",
		progress_message_getPermissions: "Se extrag permisiunile...",
		progress_message_getEntryTemplates: "Se extrag şabloanele de intrare...",
		progress_message_openEntryTemplate: "Se deschide şablonul de intrare...",
		progress_message_getFavorites: "Se extrag favoritele...",
		progress_message_getFoldersFiledIn: "Se extrag folderele...",
		progress_message_getDocumentVersions: "Se extrag versiunile...",
		progress_message_getDependentAttributeInfo: "Se extrag informaţiile atributului...",
		progress_message_packageForDownload: "Împachetare pentru descărcare...",
		progress_message_convertDocument: "Convertire conţinut...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Extragerea tipului de conţinut...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Adăugare document...",

		progress_message_desktop_reload: "Clientul reîncarcă desktopul dumneavoastră.<br>S-ar putea să vi se ceară să vă logaţi din nou.",
		progress_message_email: "Trimitere e-mail...",
		cancel_message_email: "E-mail-ul a fost anulat.",

		progress_message_p8_getOfficeOnlineTemplates: "Se extrag şabloanele Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Arbore Preferinţe",
		favorites_content_list_label: "Listă conţinut Preferinţe",
		syncItems_tree_label: "Arborele meu de fişiere sincronizate",
		syncItems_content_list_label: "Lista de conţinut a fişierelor mele sincronizate",
		my_checkouts_content_list_label: "Lista de conţinut Înregistrările mele la ieşire",
		browse_tree_label: "Răsfoire arbore",
		browse_content_list_label: "Răsfoire listă conţinut",
		repository_selector_label: "Selector magazie",
		teamspaces_content_list_label: "Listă de conţinut Spaţiu de echipă",
		templates_content_list_label: "Listă de conţinut Şabloane",
		work_content_list_label: "Listă de conţinut Lucru",
		work_tree_label: "Arbore Lucru",
		admin_tree_label: "Arbore Administrare",
		admin_tabs_label: "File Administrare",
		search_tabs_label: "File Căutare",
		search_selector_label: "Selector căutare",
		teamspace_browse_content_list_label: "Listă conţinut Răsfoire spaţiu de echipă",
		teamspace_search_tabs_label: "File Căutare spaţiu de echipă",

		/* Desktop */
		undo_description: "Anulare ${0}",
		redo_description: "Refacere ${0}",

		/* Application Tabs */
		home: "Acasă",
		repository: "Magazie",
		repository_type: "Tip magazie:",
		repository_type_header: "Tip magazie",
		repository_type_any: "Toate magaziile",
		repository_type_contains_label: "Tipul magaziei conţine",
		document_info: "Informaţii document",
		team: "Echipă",
		administration: "Administrare",

		/* Home Page */
		recent_activity: "Activitate recentă",
		repos_and_wrksp: "Magazii şi spaţii de echipă",
		workspaces: "Spaţii de echipă",
		repositories: "Magazii",
		templates: "Şabloane",
		favorites: "Favorite",
		my_checkouts: "Înregistrările mele la ieşire",
		mySyncedFiles: "Fişierele mele sincronizate",
		links: "Legături",
		name_label: "Nume",
		description_label: "Descriere:",
		type_label: "Tip:",
		type_heading: "Tip",
		type_id_label: "ID tip",
		server_type_icon: "Pictogramă tip server",
		server_type_heading: "Tip server",
		server_type: "Tip server",
		port_heading: "Număr port",
		port_label: "Număr port:",
		server_name_heading: "Nume server",
		server_label: "Nume server:",
		server_url_label: "URL server:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Conectat:",
		repository_label: "Magazie",
		modified_label: "Modificat de:",
		modified_date_label: "Modificat la:",
		status_label: "Stare:",
		last_modified_label: "Modificat ultima dată de:",

		modifier: "Modificat de",
		modified_date: "Modificat la",

		/* Favorites */
		new_favorite_label: "Adăugare la Favorite",
		edit_favorite_label: "Redenumire favorit",
		remove_favorite_label: "Înlăturare din Favorite",
		missing_alias_message: "Trebuie să specificaţi un nume.",
		sync_favorite_enable_hover: "Acest articol este activat pentru sincronizare.",
		sync_favorite_disable_hover: "Acest articol nu este sincronizat.",
		sync_favorite_sync_unavailable_hover: "Sincronizarea nu este disponibilă pentru acest tip de obiect.",
		sync_enable_label: "Sincronizaţi acest articol",
		sync_enable_label_hover: "Acest articol va fi sincronizat cu dispozitivele dumneavoastră.",
		delete_favorite_confirmation_question: "Vreţi să înlăturaţi acest articol din favoritele dumneavoastră?",
		alias_label: "Nume:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Articolul selectat este deja în favoritele dumneavoastră.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Acest articol nu poate fi adăugat în lista dumneavoastră de favorite.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Puteţi memora numai ${0} favorite.",
		add_favorite_max_reached_response: "Dacă vreţi să adăugaţi acest articol în lista dumneavoastră de favorite, trebuie să ştergeţi un articol favorit existent înainte de a putea adăuga acest articol.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Documentele selectate nu pot fi convertite la PDF.",
		download_as_pdf_max_content_error_explanation: "Puteţi converti numai ${0} MB de date la PDF. Însă documentele selectate depăşesc ${0} MB.",
		download_as_pdf_max_content_error_response: "Selectaţi mai puţine documente sau selectaţi documente mai mici şi descărcaţi din nou documentele ca fişiere PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Documentele selectate nu pot fi convertite la un singur fişier PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Pentru a converti un document cu mai multe părţi la un singur fişier PDF, fiecare parte trebuie să aibă acelaşi tip MIME.",
		download_as_pdf_mimetype_check_error_response: "Selectaţi un document diferit pentru convertire la PDF.",

		/* Activity Stream */
		show_label: "Afişare:",
		all_filter: "Toate",
		notifications_filter: "Notificări",
		workitems_filter: "Articole de lucru",
		documentes_filter: "Documente",
		all_favorites_filter: "Toate favoritele",
		folders_filter: "Foldere",
		searches_filter: "Căutări",
		teamspaces_filter: "Spaţii de echipă",

		/* Repository */
		all_search_templates: "Toate căutările",
		all_od_searches: "Toate şabloanele de căutare",
		recent_searches: "Căutări recente",
		opened_searches: "Căutări deschise",

		all_worklists: "Toate inbox-urile",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "O listă a tuturor listelor de lucru",

		/* Teamspace */
		all_workspaces: "Toate spaţiile de echipă",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "O listă a tuturor spaţiilor de echipă",
		workspace_title: "Spaţiu de echipă",
		workspace_icon: "Pictogramă spaţiu de echipă",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponibil",
		workspace_stat_offline: "Indisponibil",
		workspace_stat_validate: "Necesită validare",
		workspace_stat_pendingDelete: "Ştergere în aşteptare",
		workspace_stat_deleteError: "Ştergere eşuată",

		undefined_value: "Nedefinit",
		undefined_reference_value: "Nu este definită nicio referinţă.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Mai multe rezultate ar putea fi disponibile pe server.",
		search_all_data: "Căutarea tuturor datelor.",
		search_all_teamspaces: "Căutaţi în toate spaţiile de echipă.",
		teamspace_filter_results: "Afişare ${0} rezultate. ",
		displaying_filtered_results: "Afişarea rezultatelor filtrului. ",
		displaying_recent_results: "Afişarea numai a spaţiilor de echipă ce au fost modificate în ultimele ${0} zile. Pentru a găsi alte spaţii de echipă, filtraţi lista de spaţii de echipă după nume sau descriere. ",
		clear_filter: "Curăţare filtre.",

		/* FolderTreeModel */
		move_item_task: "Mutare articol",
		copy_item_task: "Copiere articol",
		add_item_task: "Adăugare articol",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Următorul folder nu a putut fi găsit: ${0}. Se poate să fi fost şters sau folderul nu poate fi deschis din această vizualizare. Faceţi clic pe legătura Mai multe din vizualizarea arbore pentru a naviga la folder. Dacă nu puteţi vizualiza folderul, reîmprospătaţi vizualizarea listei de conţinut.",
		more_paging_link: "mai multe ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Stare",
		status_dialog_cancel_label: "Anulare",

		/* ErrorDialog */
		error_dialog_title: "Eroare",
		error_dialog_icon_tooltip: "Eroare",
		error_dialog_stack_trace_title: "Urmărire stivă",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Confirmare",

		close_browser_msg: "Închideţi fereastra de browser.",

		/* MessageDialog */
		message_dialog_title: "Informaţii",
		warning_dialog_title: "Avertisment",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Bine aţi venit la ${0}",
		server: "Magazie:",
		username: "Nume utilizator:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Este necesar un nume de utilizator pentru logarea în magazie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Este necesară o parolă pentru logarea în magazie",
		password: "Parolă:",
		login: "Logare",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Sesiunea dumneavoastră a expirat. Logaţi-vă din nou.",
		login_repository_connection_expired_message: "Conexiunea dumneavoastră către magazia ${0} a expirat. Logaţi-vă din nou.",
		login_site_connection_expired_message: "Conexiunea dumneavoastră la site a expirat. Logaţi-vă din nou.",
		login_new_server_message: "Introduceţi un nume de utilizator şi parola pentru ${0}.",
		login_error_more_information_message: "Informaţii suplimentare",

		disconnect_box_account_user: "Deconectare cont Box: ${0}",
		disconnect_box_account: "Deconectare cont Box",
		disconnect_box_accounts: "Deconectare conturi Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Este necesară o conexiune SSL pentru accesul la magazia Box.",
		login_oauth_popup_blocked: "Fereastra pop-up a fost blocată. Poate fi nevoie să deblocaţi pop-up-urile în browser pentru a vă loga.",
		login_oauth_click_here: "Dacă nu sunteţi redirecţionat în 5 secunde, faceţi clic aici.",
		login_oauth_title: "Logare",
		login_oauth_grant_intro: "Acordarea autentificării pentru ${0}.",
		login_pane_oauth_click_here: "Faceţi clic aici pentru a vă loga.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Vreţi să vă delogaţi din clientul web?",
		logout_confirmation_button: "Delogare",

		/* ChangeLocaleDialog */
		change_locale: "Modificare setări de limbă şi de Locale",
		change_locale_use_browser_language: "Utilizare setarea de limbă a browser-ului (Implicit)",
		change_locale_use_browser_locale: "Utilizare setarea de limbă a browser-ului (Implicit)",
		change_locale_description: "Dacă ştergeţi cookie-urile din browser-ul dumneavoastră, trebuie să resetaţi setările de limbă şi locale.",
		change_locale_language_locale: "Limbă aplicaţie",
		change_locale_language_locale_hover: "Această setare modifică limba textului în clientul Web, dar nu modifică limba documentelor în aplicaţie.<br><br>Setarea implicită foloseşte limba specificată în opţiunile de configurare din browser-ul web.",
		change_locale_value_format_locale: "Locale aplicaţie:",
		change_locale_value_format_locale_hover: "Locale-ul determină formatul datelor, orelor şi numerelor din clientul Web.<br><br>Setarea implicită foloseşte formatele asociate cu limba specificată în opţiunile de configurare din browser-ul web.",
		change_locale_for_office: "Setări text bidirecţional:",
		change_locale_bidi_support_flag: "Activare suport bidirecţional",
		change_locale_bidi_support_flag_hover: "Atunci când este activat suportul bidirecţional, utilizatorul poate seta direcţia textului utilizat în câmpurile de intrare.  Textul introdus pentru articole cum ar fi foldere, de exemplu, ar fi afişat în aceaşi direcţie cum a fost introdus.",
		change_locale_base_text_direction: "Direcţia de bază a textului pentru conţinut:",
		change_locale_base_text_direction_hover: "Setaţi direcţia textului ce este introdus în câmpurile de intrare.  Acesta controlează de asemenea direcţia de afişare a etichetelor ce au fost introduse de utilizator cum ar fi nume de foldere.",
		change_locale_calendar_type: "Tip de calendar:",
		change_locale_calendar_type_hover: "Selectaţi tipul de calendar ce va fi utilizat pentru sesiunea de utilizator.",
		change_locale_base_text_direction_default: "Implicit",
		change_locale_base_text_direction_ltr: "De la stânga la dreapta",
		change_locale_base_text_direction_rtl: "De la dreapta la stânga",
		change_locale_base_text_direction_contextual: "Contextual",
		change_locale_calendar_type_gregorian: "Gregorian",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebrew",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Modificare parolă",
		change_password_title: "Modificare parolă",
		change_password_expired_title: "Parolă expirată",
		change_password_message: "Introduceţi o parolă nouă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Parola dumneavoastră a expirat. Introduceţi o parolă nouă.",
		change_password_password_rules: "Reguli parolă",
		change_password_old_password: "Parolă veche:",
		change_password_new_password: "Parolă nouă:",
		change_password_confirm_password: "Confirmare parolă:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Trebuie să vă introduceţi parola veche.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Trebuie să introduceţi o parolă nouă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Trebuie să vă confirmaţi parola nouă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Parolele trebuie să se potrivească.",

		/* GlobalToolbar */
		actions: "Acţiuni",
		actions_label: "Acţiuni:",
		open_actions_label: "Acţiuni deschise:",

		/* About Dialog */
		about_dialog_title: "Despre",
		about_product_name_label: "Nume produs: ",
		about_product_version_label: "Versiune: ",
		about_product_build_label: "Build: ",
		about_product_license: "Materiale licenţiate - Proprietatea IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Toate drepturile rezervate. Drepturi restricţionate pentru utilizatorii guvernamentali S.U.A. Utilizarea, duplicarea şi dezvăluirea sunt restricţionate de Contractul-Anexă GSA ADP cu IBM Corporation. IBM şi emblema IBM sunt mărci comerciale înregistrate ale International Business Machine Corporation în Statele Unite, în alte ţări sau ambele. Acest Program este licenţiat în termenii acordului de licenţă ce însoţeşte Programul. Acest acord de licenţă se poate afla într-un folder sau o bibliotecă din directorul Programului, identificat ca \"License\" sau \"Non_IBM_License\", dacă este aplicabil, sau poate fi furnizat ca acord de licenţă tipărit. Vă rugăm să citiţi cu atenţie acest acord înainte de a utiliza Programul. Dacă utilizaţi Programul, sunteţi de acord cu aceşti termeni. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Vreţi să ştergeţi articolul selectat?",
		delete_single_folder_confirmation_question: "Vreţi să ştergeţi folderul ${0}?",
		delete_multiple_confirmation_question: "Vreţi să ştergeţi articolele selectate?<br>${0} articole sunt selectate.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Ştergere",
		search_template_delete_confirmation_question: "Vreţi să ştergeţi căutarea ${0}?",
		search_template_opened_delete_confirmation_question: "Căutarea ${0} este deschisă. Dacă ştergeţi căutarea, se va închide.<br>Vreţi să ştergeţi această căutare?",
		delete_multiple_opened_search_template_confirmation_question: "Sunt deschise următoarele căutări: ${0}.<br>Dacă ştergeţi căutările, se vor închide. Vreţi să ştergeţi aceste căutări?",
		delete_large_number_items_confirmation_question: "Aţi selectat ${0} articole de şters.<br/>Ştergerea unui număr mare de articole ar putea dura mult.<br/>Doriţi să continuaţi?",
		delete_confirmation_entrytemplate: "Dacă ştergeţi acest şablon de intrare, va avea următorul impact asupra documentelor sau folderelor care sunt asociate cu şablonul de intrare:<ul><li>Articolele nu vor mai fi asociate cu şablonul de intrare şi utilizatorii ar putea vedea un avertisment când actualizează un articol.</li><li>Nicio proprietate care era controlată de şablonul de intrare, cum ar fi numele sau ordinea proprietăţilor, nu se va mai aplica la articolele care sunt asociate cu şablonul de intrare.</li></ul>Vreţi să ştergeţi acest şablon de intrare?",
		delete_confirmation_entrytempalte_with_multi_items: "Şabloanele de intrare trebuie şterse individual. Şabloanele de intrare au fost înlăturate din lista de articole de şters. Dacă vreţi să ştergeţi şabloanele de intrare, trebuie să ştergeţi fiecare şablon de intrare separat.",

		/* Create/Apply/Remove Hold */
		hold: "Reţinere",
		createHold: "Reţinere nouă",
		applyHold: "Aplicare reţinere",
		removeHold: "Înlăturare reţinere",
		showHolds_title: "Afişare reţineri",
		applyHoldSelectText: "Selectaţi reţinerile pe care vreţi să le aplicaţi la articolele selectate.",
		availableHolds: "Reţineri disponibile:",
		removeHoldSelectText: "Selectaţi reţinerile pe care vreţi să le înlăturaţi de la articolele selectate.",
		appliedHolds: "Reţineri aplicate:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Creaţi o nouă reţinere de aplicat la articolele selectate.",
		holdName: "Nume reţinere:",
		holdDescription: "Descriere:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Trebuie să specificaţi un nume pentru reţinere.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Numele de reţinere specificat există deja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Un nume de reţinere nu poate conţine niciunul din următoarele caractere : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Sesiunea dumneavoastră va expira în ${0} minute.",
		session_expire: "Sesiunea expiră",
		logoff: "Delogare",
		extend_session: "Extindere sesiune",
		admin_custom_settings: "Setări suplimentare:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning este o valoare booleană care indică dacă este activat avertismentul de expirarea a sesiunii, valoarea implicită este true. sessionExpireWarningTime este un număr întreg între 2 la 5 pentru a specifica durata avertismentului de expirare sesiune.",
		admin_custom_setting_dialog_title_new: "Setare nouă",
		admin_custom_setting_dialog_title_edit: "Editare setare",
		admin_custom_setting_dialog_hover_help: "Adăugaţi alţi parametri prin specificarea numelui şi valorii parametrului. De exemplu, puteţi specifica “enableSessionExpireWarning” şi “true” dacă doriţi să activaţi avertismentul de expirarea a sesiunii.",
		admin_custom_setting_dialog_field_hover_help: "Pentru informaţii suplimentare despre numele şi valorile parametrilor, vedeţi Manualul de referinţe parametri IBM Navigator.",
		admin_custom_setting_dialog_nameInvalid: "Această valoare este necesară. Valoarea nu poate conţine blancuri şi nu poate fi duplicată.",
		admin_custom_setting_dialog_bool_valueInvalid: "Această valoare este necesară. Valoarea trebuie să fie booleană.",
		admin_custom_setting_dialog_int_valueInvalid: "Această valoare este necesară. Valoarea trebuie să fie un număr întreg.",
		/* Add Document Dialog */
		add_document_dialog_title: "Adăugare document",
		add_documents_dialog_title: "Adăugare documente",
		add_document_general_label: "General",
		add_document_properties_label: "Proprietăţi",
		add_document_properties_with_ellipsis_label: "Proprietăţi...",
		add_document_security_label: "Securitate",
		add_document_location_label: "Salvare în:",
		add_document_type_label: "Ce vreţi să salvaţi?",
		add_document_localfile_label: "Document local",
		add_document_metadata_label: "Informaţii despre un document",
		add_document_external_label: "Legătură la un document extern",
		add_document_web_link_label: "Legătură web",
		add_document_saved_content_label: "Utilizare fişier salvat:",
		add_document_saved_content_choice: "Fişier salvat",
		add_document_file_name_label: "Nume fişier:",
		add_document_entry_template_label: "Şablon intrare:",
		add_document_delete_file_label: "Ştergere fişier local",
		add_document_delete_file_disabled_label: "Fişierele care nu sunt în directorul de urmărire al fişierului nu vor fi şterse.",
		add_document_major_version_label: "Versiune majoră",
		add_document_major_version_hover: "Setează starea documentului la Eliberat. Documentul este adăugat în magazie ca versiunea 1.0. Dacă opţiunea nu este selectată, documentul nu este gata să fie eliberat şi este adăugat ca versiune minoră 0.1.",
		add_document_save_document_as_unfiled_label: "Nu salvaţi documentul într-un folder",
		add_document_save_document_as_unfiled_hover: "Dacă selectaţi această opţiune, puteţi găsi acest document doar prin căutare. Nu puteţi răsfoi după el.",
		add_document_create_new_version_label: "Creare versiune nouă",
		add_document_replace_existing_version_label: "Înlocuire versiune existentă",
		add_document_start_workflow_label: "Lansare flux de lucru",
		add_document_auto_classify_label: "Clasificare automată conţinut",
		add_document_add_label: "Adăugare",
		add_document_cancel_label: "Anulare",
		add_document_document_type_label: "Clasă",
		add_document_context_info: "Valorile pe care le introduceţi pentru proprietăţile documentului pot fi folosite pentru a găsi mai târziu documentul.",
		add_documents_context_info: "Valorile pe care le introduceţi pentru documente pot fi folosite pentru a găsi mai târziu documentele. Dacă trebuie să introduceţi o altă valoare de proprietate pentru un document, trebuie să o adăugaţi separat sau să editaţi proprietăţile documentului după ce adăugaţi.",
		add_document_url_label: "URL:",
		add_document_template_description: "Descriere şablon:",
		add_document_select_entry_template: "Introduceţi sau selectaţi un şablon de intrare",
		add_document_no_permission_to_associations: "Nu aveţi permisiunea de a utiliza un şablon de intrare",
		add_document_no_entry_template_to_use: "Nu pot fi utilizate şabloane de intrare pentru fişierele selectate",
		add_document_no_entry_template_itemtype_permission: "Nu puteţi adăuga articole la acest folder. Trebuie să fie selectat un şablon de intrare şi nu aveţi access la niciun şablon de intrare asociat cu acest folder. Contactaţi administratorul dumneavoastră de sistem şi cereţi-i să vă acorde acces la şabloanele de intrare asociate cu acest folder.",
		add_document_appgroup_name_label: "Nume grup de aplicaţii:",
		add_document_app_name_label: "Nume aplicaţie:",
		create_folder_dialog_title: "Folder nou",
		create_folder_context_info: "Valorile pe care le introduceţi pentru proprietăţile folderului pot fi folosite pentru a găsi mai târziu folderul.",
		create_folder_folder_name_label: "Nume folder",
		create_folder_save_folder_as_unfiled_label: "Nu salvaţi folderul într-un alt folder",
		create_folder_save_folder_as_unfiled_hover: "Dacă selectaţi această opţiune, puteţi găsi acest folder doar prin căutare. Nu puteţi răsfoi după el.",
		add_item_create_in_folder: "Creare în folder:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Un nume de folder nu poate conţine niciunul din următoarele caractere: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Un nume de folder nu poate conţine niciunul din următoarele caractere: \\ / şi nu poate egala . sau ..",
		invalid_box_file_name_message: "Un nume de file nu poate conţine niciunul din următoarele caractere: \\ / şi nu poate egala . sau ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Un nume de fişier nu poate conţine niciunul din următoarele caractere: \\ / : * ? \" < > |",
		external_document_placeholder: "Introduceţi URL-ul documentului",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Culoarea trebuie introdusă ca număr hexazecimal de 3 sau 6 cifre, de exemplu, #000 sau #000000.",
		add_document_unfiled: "${0} neîndosariat",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Adăugare document utilizând şablonul de intrare",
		add_document_using_template_context_info: "Când adăugaţi un document utilizând un şablon de intrare, valorile pe care le introduceţi pentru document sunt consecvente.",
		add_documents_using_template_dialog_title: "Adăugare documente utilizând şablon de intrare",
		add_documents_document_name_is_file_name_hint: "Numele fişierului va fi folosit pentru această proprietate",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Folder nou utilizând şablon de intrare",
		create_folder_using_template_context_info: "Când creaţi un folder utilizând un şablon de intrare, valorile pe care le introduceţi pentru folder sunt consecvente.",

		add_documents_batch_results_dialog_title: "Documente neadăugate în magazie",
		add_documents_batch_results_dialog_context_info: "Următoarele documente nu au fost adăugate în magazie. Selectaţi un document şi faceţi clic pe Detalii pentru informaţii suplimentare despre motivul pentru care documentul nu a fost adăugat în magazie.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nume fişier",
		add_documents_batch_results_dialog_status_col_hdr: "Stare",
		add_documents_batch_results_dialog_message_col_hdr: "Mesaj",
		add_documents_batch_results_status_error: "Eroare",
		add_documents_batch_results_status_cancelled: "Anulat",
		add_documents_batch_results_status_cancelled_msg: "Documentul nu a fost adăugat pentru că cererea a fost anulată.",

		add_documents_batch_status_title: "Se adaugă documente",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Se adaugă fişierul ${0} din ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Erori: ${0}",
		add_documents_batch_status_completing_msg: "Procesul se va opri după ce este adăugat acest document.",

		add_documents_status_uploading_msg: "Încărcarea a ${0} fişiere din ${1}...",
		add_documents_status_adding_msg: "Se adaugă fişierul ${0} din ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Şablonul de intrare a fost configurat în altă aplicaţie şi este configurat să declare întotdeauna documentele ca înregistrări. Totuşi, această setare este ignorată pentru că clientul web nu suportă declararea documentelor ca înregistrări.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Şablonul de intrare a fost configurat în altă aplicaţie şi este configurat să vă lase să decideţi dacă să declaraţi acest document ca înregistrare. Totuşi, această setare este ignorată pentru că clientul web nu suportă declararea documentelor ca înregistrări.",
		no_selection: "&lt;Selectare&gt;",

		batch_results_dialog_details_label: "Detalii",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Valoarea nu este validă. Valoarea trebuie să fie un Identificator unic global (GUID), de exemplu, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Valoarea nu este validă. Valoarea trebuie să fie un număr cu virgulă mobilă, de exemplu, 1.2 sau 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Valoarea nu este validă. Valoarea trebuie să fie în formatul ${0}, de exemplu, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Valoarea nu este validă. Valoarea trebuie să fie o valoare zecimală, de exemplu, 1.2 sau 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Valoarea nu este validă. Valoarea trebuie să fie un întreg, de exemplu 5 sau 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Valoarea nu este validă. Valoarea poate conţine numai caractere alfabetice, de exemplu, a-z şi A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Valoarea nu este validă. Valoarea poate conţine numai caractere alfanumerice, de exemplu, a-z, A-Z şi 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Valoarea nu este validă. Valoarea poate conţine numai caractere numerice, de exemplu, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Valoarea nu este validă. Valoarea poate conţine numai următoarele caractere: a-z, A-Z, 0-9, [spaţiu] şi `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Valoarea nu este validă. Valoarea trebuie să fie o dată cu următorul format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Valoarea nu este validă. Valoarea trebuie să fie o oră cu următorul format: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Valoarea nu este validă. Selectaţi o valoare din meniul derulant.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Valoarea nu este validă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Valoarea nu este validă. Valoarea trebuie să aibă următorul format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Această valoare este necesară.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Valoarea este prea lungă. Proprietatea suportă o lungime maximă de ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Valoarea este prea scurtă. Proprietatea suportă o lungime minimă de ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Valoarea este în afara intervalului. Valoarea trebuie să fie un număr cu virgulă mobilă între ${0} şi ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Valoarea este în afara intervalului. Valoarea trebuie să fie o valoare zecimală între ${0} şi ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Valoarea este în afara intervalului. Valoarea trebuie să fie un întreg între ${0} şi ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Valoarea trebuie să fie o dată între ${0} şi ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Valoarea este în afara intervalului. Valoarea trebuie să fie o dată între ${0} şi ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Valoarea este în afara intervalului. Valoarea trebuie să fie o oră între ${0} şi ${1}.",
		property_and: "şi",

		property_invalidValueOrRequired: "Următoarea valoare este invalidă sau este necesară: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Proprietăţi",
		edit_properties_dialog_info: "Puteţi vizualiza sau edita proprietăţile acestui articol. Dacă aveţi permisiunile corespunzătoare, puteţi modifica securitatea articolului. Totuşi, nu puteţi modifica proprietăţile sistemului.",
		edit_properties_od_dialog_info: "Puteţi vizualiza sau edita proprietăţile acestui articol. Totuşi, nu puteţi modifica proprietăţile sistemului.",
		system_properties_title: "Proprietăţi sistem",
		custom_properties_title: "Proprietăţi",
		/* Folder collaboration tab */
		box_permission_permission: "Permisiune",
		box_permission_permissions: "Permisiuni",
		box_permission_editor: "Editor",
		box_permission_owner: "Proprietar",
		box_permission_co_owner: "Co-proprietar",
		box_permission_viewer_uploader: "Încărcător vizualizator",
		box_permission_previewer_uploader: "Încărcător previzualizator",
		box_permission_viewer: "Vizualizator",
		box_permission_previewer: "Previzualizator",
		box_permission_uploader: "Încărcător",
		box_permission_add: "Adăugare",
		box_permission_upload: "Încărcare",
		box_permission_download: "Descărcare",
		box_permission_preview: "Previzualizare",
		box_permission_view: "Vizualizare",
		box_permission_send_links: "Trimitere legături numai-vizualizare",
		box_permission_create_subfolders: "Creare subfoldere",
		box_permission_create_tasks: "Creare taskuri",
		box_permission_add_comments: "Adăugare comentarii",
		box_collaboration_invite_placeholder: "Introduceţi un nume, e-mail sau grup pentru invitare",
		box_collaboration_invite_placeholder_non_admin: "Introduceţi un e-mail pentru invitare",
		box_collaboration_invalid_email: "Introduceţi o adresă de e-mail validă",
		box_collaboration_user_already_present: "Acest utilizator este deja un colaborator la folder",
		box_collaboration_user_name: "Nume",
		box_collaboration_email_address: "Adresă e-mail",
		box_collaboration_date_added: "Data adăugării",
		box_collaboration_remove_collaboration: "Înlăturare",
		box_collaboration_remove_collaboration_title: "Ştergere",
		box_collaboration_no_collaborators: "Nu există colaboratori",
		box_collaboration_change_owner_title: "Modificare proprietar articol",
		box_collaboration_change_owner_prompt: "Făcând acest colaborator Proprietarul folderului deveniţi un Editor şi nu mai deţineţi folderul. Toţi colaboratorii care au fost adăugaţi direct la acest folder îl vor vedea în folderele lor rădăcină. Toţi colaboratorii care au fost adăugaţi la nivelul folderului părinte sau mai sus nu vor mai fi colaboratori. Doriţi să continuaţi?",
		box_collaboration_remove_self_title: "Înlăturaţi-vă",
		box_collaboration_remove_self_prompt: "Sunteţi sigur că doriţi să vă înlăturaţi ca şi colaborator? Nu veţi mai avea acces la acest folder.",
		box_collaboration_user: "Utilizator",
		box_collaboration_group: "Grup",
		box_managing_users_not_configured: "Nu puteţi căuta pentru utilizatori şi grupuri pentru că aplicaţia Box nu este configurată corect. Ca să folosiţi această caracteristică, contactaţi administratorul şi cereţi ca aplicaţia Box să fie configurată pentru gestionarea utilizatorilor şi grupurilor.",
		duplicate_value_error: "Fiecare valoare din această proprietate trebuie să fie unică.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Orice modificări pe care le faceţi în următoarele câmpuri se aplică pentru toate articolele selectate. Dacă aveţi nevoie să introduceţi o valoare diferită pentru proprietate pentru un anumit articol sau să edidaţi securitatea unui articol, trebuie să editaţi individual fiecare proprietate a articolului.",
		multi_edit_properties_class_label: "Clasă:",
		multi_edit_properties_items_label: "Nume articol:",
		multi_edit_properties_properties_label: "Proprietăţi",
		multi_edit_batch_status_title: "Actualizarea proprietăţilor",
		multi_edit_batch_status_adding_msg: "Actualizarea articolului ${0} din ${1}...",
		multi_edit_batch_status_verifying_msg: "Verificarea articolului ${0} din ${1}...",
		multi_edit_batch_status_completing_msg: "Procesul se va opri după ce acest articol este actualizat.",
		multi_edit_batch_status_validation_completing_msg: "Procesul se va opri după ce acest articol este verificat.",
		multi_edit_batch_results_status_error: "Eroare",
		multi_edit_batch_results_status_cancelled: "Anulat",
		multi_edit_batch_results_status_cancelled_msg: "Articolul nu a fost actualizat deoarece cererea a fost anulată.",
		multi_edit_batch_results_dialog_title: "Articole nu sunt actualizate",
		multi_edit_batch_results_dialog_context_info: "Următoarele articole nu au fost actualizate. Selectaţi un nume de articol şi faceţi clic pe Detalii pentru informaţii suplimentare despre motivul pentru care articolul nu a fost actualizat.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nume articol",
		multi_edit_batch_results_dialog_status_col_hdr: "Stare",
		multi_edit_batch_results_dialog_message_col_hdr: "Mesaj",
		multi_edit_batch_status_errors_msg: "Erori: ${0}",
		multi_edit_batch_permission_error_text: "Modificările la proprietăţi nu pot fi salvate.",
		multi_edit_invalid_value_error: "Această valoare este dependentă de valoarea altei proprietăţi şi nu este validă pentru toate articolele selectate de dumneavoastră.",
		multi_edit_batch_permission_error_explanation: "Nu puteţi modifica proprietăţile acestui articol deoarece nu aveţi privilegii suficiente.",
		multi_edit_no_modifiable_properties: "Proprietăţile articolelor selectate nu pot fi modificate. Acest lucru poate surveni atunci când un articol include doar proprietăţi numai citire, sau când numai numele sau titlul articolului sunt editabile. Atunci când sunt selectate mai multe articole, nu puteţi modifica numele sau titlul acestor articole.",
		multi_edit_mult_classes_dialog_info: "Articolele selectate sunt în magazii diferite sau fac parte din clase diferite. Puteţi edita doar articolele care sunt în aceeaşi clasă sau în  acelaşi depozit. Selectaţi subsetul de articole pe care doriţi să le editaţi.",
		multi_edit_class_selector_class_heading: "Clasă",
		multi_edit_class_selector_entry_template_heading: "Şablon de intrare",
		multi_edit_class_selector_repository_heading: "Magazie",
		multi_edit_class_selector_items_heading: "Articole",
		multi_edit_some_classes_not_displayed: "Unele dintre articolele selectate nu sunt incluse în această listă deoarece articolele conţine doar proprietăţi ce pot fi doar citite sau pentru că articolele sunt în magazii care nu acceptă editarea proprietăţilor.",
		multi_edit_properties_invalid_msg: "Unele dintre valorile proprietăţii nu sunt valide pentru toate articolele selectate.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Această proprietate poate fi doar citită şi nu poate fi modificată.",
		multi_edit_append_checkbox_label: "Adăugare la sfârşit",
		multi_edit_append_checkbox_tooltip: "Selectaţi această opţiune dacă doriţi să adăugaţi la sfârşit noi valori pentru proprietate la valorile existente, în loc să le înlocuiţi.",
		multi_edit_properties_invalid_childcomponent_msg: "Unele valori din proprietatea ${0} a componentei copil ${1} sunt dependente de alte proprietăţi şi nu mai sunt valide cu selecţiile pe care le-aţi făcut. Curăţaţi valorile din componenta copil ${1} sau faceţi modificările de proprietăţi la articolele pe care le-aţi selectat individual.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Export proprietăţi",
		export_properties_dialog_info: "Selectaţi proprietăţile pe care vreţi să le exportaţi şi specificaţi ordinea în care vor fi afişate.",
		export_properties_dialog_export_button_label: "Export",
		export_properties_dialog_export_raw_values: "Export valori brute",

		/* Properties */
		filter_clear_tooltip: "Curăţaţi filtrul",
		properties_new_row: "Nou",
		properties_requiredClass_document_tooltip: "Selectaţi un document. Documentul trebuie să aparţină clasei ${0}.",
		properties_requiredClass_folder_tooltip: "Selectaţi un folder. Folderul trebuie să aparţină clasei ${0}.",
		properties_dataType_tooltip: "Tip de date: ${0}",
		properties_maxLength_tooltip: "Lungime maximă: ",
		properties_minLength_tooltip: "Lungime minimă: ",
		properties_minValue_tooltip: "Valoare minimă: ",
		properties_maxValue_tooltip: "Valoare maximă: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Descriere: ",

		properties_type_boolean_tooltip: "Boolean",
		properties_type_date_tooltip: "Dată",
		properties_type_time_tooltip: "Oră",
		properties_type_timestamp_tooltip: "Amprentă de timp",
		properties_type_decimal_tooltip: "Valoare zecimală",
		properties_type_double_tooltip: "Număr cu virgulă mobilă",
		properties_type_short_tooltip: "Întreg",
		properties_type_integer_tooltip: "Întreg",
		properties_type_long_tooltip: "Întreg",
		properties_type_string_tooltip: "Şir text",
		properties_type_string_alpha_tooltip: "Şir alfabetic",
		properties_type_string_alphanum_tooltip: "Şir alfanumeric",
		properties_type_string_ext_tooltip: "Şir alfanumeric extins",
		properties_type_string_num_tooltip: "Şir numeric",
		properties_type_binary_tooltip: "Binar",
		properties_type_object_tooltip: "Obiect",
		properties_type_reference_tooltip: "Această proprietate face referire la alt articol din magazie.",
		properties_type_guid_tooltip: "Identificator unic global",
		properties_type_group_tooltip: "Utilizatori şi grupuri",
		properties_type_user_tooltip: "Utilizatori",
		properties_type_childComponent_tooltip: "Componentă copil",

		properties_childComponent_minCardinalityOnly_tooltip: "Această proprietate trebuie să aibă cel puţin ${0} valori.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Această proprietate nu poate avea mai mult de ${0} valori.",
		properties_childComponent_minMaxCardinality_tooltip: "Această proprietate trebuie să aibă cel puţin ${0} valori şi nu mai mult de ${1} valori.",
		properties_childComponent_noCardinality_tooltip: "Această proprietate poate avea orice număr de valori.",

		properties_type_guid_example_tooltip: ", de exemplu {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Selectaţi o valoare din listă.",
		properties_single_select_choice_tooltip: "Selectaţi o valoare.",
		properties_multiple_select_typein_tooltip: "Introduceţi una sau mai multe valori.",
		properties_multiple_select_choice_tooltip: "Selectaţi una sau mai multe valori.",
		properties_not_selectable_tooltip: "Categoria nu poate fi selectată.",
		properties_none: "Fără",
		properties_none_tooltip: "Selectaţi <i>Fără</i> pentru a curăţa valoarea curentă pentru această proprietate.",
		properties_value_empty: "Fără valoare",
		properties_value_read_only: "Numai citire",
		properties_clear_label: "Curăţare",
		properties_clear_tooltip: "Curăţarea valorii din acest câmp şterge valoarea din  magazie după ce faceţi clic pe <b>Salvare</b>.",
		properties_box_custom_properties: "Proprietăţi personalizate",
		properties_box_metadata_name_in_use: "Acest nume este deja utilizat. Introduceţi alt nume pentru proprietatea personalizată.",

		properties_templates: "Şabloane",
		properties_add_template: "Adăugare şablon",
		properties_remove_template: "Înlăturare",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Înregistrare la intrare",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Înregistrare la intrare",
		checkin_cancel_label: "Anulare",
		checkin_file_name_label: "Nume fişier",
		checkin_document_status_title: "Înregistrare la intrare document",
		checkin_document_status_uploading_msg: "Se încarcă fişierul...",
		checkin_document_status_checkingin_msg: "Se înregistrează fişierul la intrare...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Selectare mod de redactare",
		viewer_redaction_new_document_confirmation_question: "Doriţi să salvaţi redactarea ca un document nou sau într-un fişier local?",
		viewer_redaction_new_version_confirmation_question: "Doriţi să salvaţi redactarea ca o versiune nouă?",
		viewer_redaction_new_version_confirmation_question_never: "Doriţi să salvaţi redactarea ca un conţinut nou.",		
		viewer_redaction_new_document_button: "Da",
		viewer_redaction_new_document_cancel_button: "Nu",
		viewer_redaction_add_document_confirmation_question: "Doriţi să salvaţi redactarea ca un document nou, o nouă versiune sau într-un fişier local?",
		viewer_redaction_add_document_confirmation_question_version_never: "Doriţi să salvaţi redactarea ca un document nou, un nou conţinut sau într-un fişier local?",
		viewer_redaction_add_document_button: "Document nou",
		viewer_redaction_add_new_version_button: "Versiune nouă",
		viewer_redaction_add_new_version_button_version_never: "Conţinut nou",
		viewer_redaction_add_local_file_button: "Fişier local",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Selectare motiv de redactare",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Şablonul de intrare care a fost folosit pentru a adăuga acest document în magazie nu poate fi găsit. Documentul va fi înregistrat la intrarea în magazie fără a folosi un şablon de intrare.",
		property_entry_template_not_retrieved_warning: "Şablonul de intrare care a fost folosit pentru a adăuga acest document în magazie nu poate fi găsit. Proprietăţile documentului vor fi afişate fără utilizarea şablonului de intrare.",
		multi_edit_entry_template_not_found_name: "[Negăsit]",
		multi_edit_entry_template_not_retrieved_warning: "Şablonul de intrare care a fost utilizat pentru a adăuga aceste articole în magazie nu poate fi găsit. Proprietăţile articolului vor fi modificate fără utilizarea şablonului de intrare.",
		checkin_major_version_hover: "Incrementează numărul de versiune al documentului cu unu şi setează starea documentului la Eliberat. Dacă opţiunea nu este selectată, documentul nu este gata să fie eliberat şi este înregistrat la intrare ca versiune minoră.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Documentul nu poate fi înregistrat la intrare deoarece nu este înregistrat la ieşire.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID-ul de utilizator sau parola nu este validă pentru server.",
		error_bad_userid_password_userResponse: "Asiguraţi-vă că aţi introdus ID-ul de utilizator şi parola dumneavoastră în mod corect.",
		error_bad_userid_password_adminResponse: "S-a returnat următoarea eroare: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Nu se poate stabili o conexiune la clientul web folosind următorul URL: ${0}.",
		http_send_error_explanation: "Această eroare poate fi cauzată de o problemă de configurare pe serverul de aplicaţii web sau de o problemă cu aplicaţia clientului web.",
		http_send_error_userResponse: "Încercaţi din nou să vă logaţi. Dacă problema persistă, raportaţi această eroare administratorului de sistem.",
		http_send_error_adminResponse: "S-a returnat următoarea eroare HTTP: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Nu se poate stabili o conexiune la clientul web folosind următorul URL: ${0}.",
		http_error_explanation: "Ar putea fi nevoie să vă autentificaţi la un firewall sau s-ar putea ca serverul de aplicaţii web să nu ruleze sau nu se poate ajunge la el din cauza unor probleme de reţea.",
		http_error_userResponse: "Dacă trebuie să vă autentificaţi la un firewall, autentificaţi-vă şi încercaţi din nou logarea. Dacă problema persistă, raportaţi această eroare administratorului de sistem.",
		http_error_adminResponse: "S-a returnat următoarea eroare HTTP: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Nu se poate stabili o conexiune la clientul web folosind următorul URL: ${0}.",
		http_response_bad_explanation: "Această eroare poate fi cauzată de o problemă de configurare pe serverul de aplicaţii web sau de o problemă cu clientul web.",
		http_response_bad_userResponse: "Încercaţi din nou să vă logaţi. Dacă problema persistă, raportaţi această eroare administratorului de sistem.",
		http_response_bad_adminResponse: "S-a returnat următoarea eroare: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Fără titlu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Apletul e-mail nu poate fi pornit.",
		email_applet_init_failed_explanation: "Această problemă poate apărea când clientul dumneavoastră e-mail nu este instalat şi configurat corespunzător sau când nu este instalată o versiune suportată de Java Runtime Environment (JRE) pe staţia dumneavoastră de lucru.",
		email_applet_init_failed_userResponse: "Pentru a rezolva problema:<ul><li>Asiguraţi-vă că aplicaţia dumneavoastră e-mail este instalată şi este setată ca client e-mail implicit pe staţia dumneavoastră de lucru.</li><li>Verificaţi că este instalată o versiune suportată de JRE pe staţia dumneavoastră de lucru introducând următoarea comandă într-un prompt de comandă: java -version</li></ul><p>O listă a versiunilor suportate de JRE este inclusă în documentul <i>Cerinţele preliminare hardware şi software pentru IBM Content Navigator</i> de pe site-ul de Suport software IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Aplicaţia e-mai nu a putut fi pornită pentru că nu s-a putut încărca un fişier DLL necesar.",
		email_applet_JNI_LOAD_FAILED_explanation: "Fişierul WCEmailAppletJNI.dll necesar nu poate fi încărcat pentru că directorul temporar de pe staţia dumneavoastră de lucru ar putea fi plin.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Asiguraţi-vă că directorul temporar are suficient spaţiu. Apoi, încercaţi să trimiteţi documentul din nou din clientul web. Implicit, fişierul WCEmailAppletJNI.dll se încarcă în directorul temporar care este specificat în setările browser-ului dumneavoastră web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Aplicaţia e-mail nu a putut fi pornită pentru că apletul e-mail nu poate crea un fişier temporar.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Directorul temporar de pe staţia dumneavoastră de lucru s-ar putea să fie plin.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Asiguraţi-vă că directorul temporar are suficient spaţiu. Apoi, încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Aplicaţia e-mail nu poate fi pornită pentru că apletul e-mail nu poate accesa directorul temporar.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Directorul temporar de pe staţia dumneavoastră de lucru s-ar putea să fie plin sau nu aveţi accesul corespunzător pentru a scrie în directorul temporar.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Asiguraţi-vă că directorul temporar are suficient spaţiu, iar dumneavoastră aveţi permisiuni de scriere în directorul temporar. Apoi, încercaţi să trimiteţi documentul din nou din clientul web. Dacă problema persistă, contactaţi administratorul de sistem.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Apletul e-mail nu poate şterge un fişier temporar.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Se poate ca altă aplicaţie să folosească fişierul sau fişierul nu există pe staţia dumneavoastră de lucru.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Dacă fişierul este folosit de altă aplicaţie, închideţi aplicaţia. Dacă fişierul este pe sistemul dumneavoastră de fişiere local, înlăturaţi următorul fişier din directorul temporar de pe staţia dumneavoastră de lucru: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Legătura spre document nu poate fi creată.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Magazia a returnat URL-ul într-un format invalid.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Închideţi-vă browser-ul Web inclusiv toate filele şi sesiunile, şi logaţi-vă din nou. Încercaţi să trimiteţi documentul din nou din clientul web. Dacă această problemă persistă, contactaţi Suportul software IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Apletul e-mail nu poate ataşa fişierul la un e-mail.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Magazia a returnat URL-ul spre document într-un format invalid.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Închideţi-vă browser-ul Web inclusiv toate filele şi sesiunile, şi logaţi-vă din nou. Încercaţi să trimiteţi documentul din nou din clientul web. Dacă această problemă persistă, contactaţi Suportul software IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Ataşamentul nu poate fi creat.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Apletul e-mail nu poate citi URL-ul spre document.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Închideţi-vă browser-ul Web inclusiv toate filele şi sesiunile, şi logaţi-vă din nou. Încercaţi să trimiteţi documentul din nou din clientul web. Dacă această problemă persistă, contactaţi Suportul software IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Documentul nu a putut fi extras din magazie.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Se poate ca sesiunea dumneavoastră să fi expirat, magazia sau serverul de aplicaţii web s-ar putea să nu ruleze sau ar putea fi o problemă cu configuraţia clientului web.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Logaţi-vă şi încercaţi din nou să trimiteţi documentul prin e-mail. Dacă problema persistă, cereţi-i administratorului dumneavoastră de sistem să verifice jurnalele de erori ale magaziei.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Dacă aţi configurat clientul web pentru a converti documente AFP în alt format, cum ar fi PDF, înainte de a trimite documentele ca ataşamente, asiguraţi-vă că este configurată corect conversia.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Documentul nu a putut fi convertit în PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Unealta utilizată la transformarea documentelor în PDF nu suportă tipul de fişier.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Închideţi această pagină şi încercaţi să trimiteţi prin e-mail din nou acest document fără să îl convertiţi în PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-mail-ul nu a fost creat.",
		email_applet_MAPI_USER_ABORT_explanation: "Deschideţi-vă aplicaţia e-mail şi asiguraţi-vă că funcţionează corespunzător. Apoi, încercaţi să trimiteţi documentul din nou din clientul web. Dacă problema persistă, contactaţi-vă administratorul de sistem să examineze istoricele de evenimente ale sistemului dumneavoastră de operare.",
		email_applet_MAPI_USER_ABORT_userResponse: "Dacă aţi intenţionat să închideţi aplicaţia e-mail, nu este necesară Fişier mai departe. Pentru a trimite e-mail-ul, logaţi-vă în aplicaţia e-mail şi încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-mail-ul nu poate fi creat.",
		email_applet_MAPI_FAILURE_explanation: "Clientul dumneavoastră e-mail s-ar putea să nu fie deschis sau s-ar putea să nu fiţi logat.",
		email_applet_MAPI_FAILURE_userResponse: "Deschideţi-vă aplicaţia e-mail şi asiguraţi-vă că funcţionează corespunzător. Apoi, încercaţi să trimiteţi documentul din nou din clientul web. Dacă problema persistă, contactaţi-vă administratorul de sistem să examineze istoricele de evenimente ale sistemului dumneavoastră de operare.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-mail-ul nu poate fi creat.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Nu sunteţi logat în clientul dumneavoastră e-mail. Clientul dumneavoastră e-mail trebuie să fie deschis şi trebuie să fiţi logat pentru a trimite un mesaj din clientul web.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Deschideţi-vă clientul e-mail şi logaţi-vă. Apoi, încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-mail-ul nu poate fi creat pentru că fişierul temporar nu poate fi creat pe staţia dumnevoastră de lucru.",
		email_applet_MAPI_DISK_FULL_explanation: "Directorul temporar de pe staţia dumneavoastră de lucru s-ar putea să fie plin.",
		email_applet_MAPI_DISK_FULL_userResponse: "Asiguraţi-vă că directorul temporar are suficient spaţiu. Apoi, încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-mail-ul nu poate fi creat pentru că nu este suficientă memorie de sistem.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "S-ar putea să aveţi deschise prea multe aplicaţii.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Închideţi toate aplicaţiile nefolosite şi apoi, încercaţi să trimiteţi din nou documentul din clientul web.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Accesul MAPI este refuzat.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Accesul Interfeţei de programare a aplicaţiei de mesagerie (MAPI) s-ar putea să nu fie activat sau suportat pentru aplicaţia dumneavoastră e-mail. MAPI este protocolul de mesagerie care este folosit pentru a permite comunicaţia între clientul web şi aplicaţia dumneavoastră e-mail.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Contactaţi-vă administratorul de sistem.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Asiguraţi-vă că aplicaţia e-mail are acces MAPI setat şi configuraţia este corectă. Dacă problema persistă, contactaţi Suportul software IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Ataşamentul sau legătura spre articol nu poate fi creată.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "S-ar putea să aveţi deschise prea multe sesiuni de browser Web.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Închideţi toate sesiunile de browser Web nefolosite. Apoi, încercaţi să trimiteţi documentul din nou din clientul web. Dacă problema persistă, contactaţi-vă administratorul de sistem.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-mail-ul nu poate fi trimis.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "S-ar putea să încercaţi să trimiteţi prea multe ataşamente.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Selectaţi mai puţine fişiere. Apoi, încercaţi să trimiteţi documentele din nou din clientul web.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-mail-ul nu poate fi trimis.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "S-ar putea să trimiteţi e-mail-ul la prea mulţi destinatari.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Trimiteţi e-mail-ul la mai puţini destinatari.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Ataşamentul nu poate fi creat.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Se poate ca unele fişiere temporare necesare să fi fost şterse înainte ca ataşamentul să poată fi creat. Această eroare poate apărea dacă memoria cache a browser-ului este curăţată înainte să se trimită e-mail-ul.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Ataşamentul nu poate fi creat.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Se poate ca unele fişiere temporare necesare să fi fost şterse înainte ca ataşamentul să poată fi creat. Această eroare poate apărea dacă memoria cache a browser-ului este curăţată înainte să se trimită e-mail-ul.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Ataşamentul nu poate fi creat de aplicaţia e-mail.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-mail-ul nu poate fi trimis la destinatarul specificat.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Destinatarul s-ar putea să nu existe în agenda de adrese.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Verificaţi numele destinatarului şi încercaţi să trimiteţi din nou documentul.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-mail-ul nu poate fi trimis la destinatarul specificat.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Adresa e-mail s-ar putea să fie formatată incorect.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Asiguraţi-vă că aţi introdus o adresă e-mail validă şi încercaţi din nou să trimiteţi documentul.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-mail-ul nu poate fi trimis.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-mail-ul s-ar putea să fie prea lung.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Scurtaţi textul e-mail-ului şi încercaţi din nou să-l trimiteţi.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-mail-ul nu poate fi creat.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Clientul e-mail se poate să fi eşuat când a încercat crearea e-mail-ului.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Reporniţi-vă clientul e-mail şi încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-mail-ul s-ar putea să nu fie compus corect.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-mail-ul nu poate fi trimis la destinatarul specificat.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Adresa e-mail s-ar putea să fie formatată incorect.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Asiguraţi-vă că aţi introdus o adresă e-mail validă şi trimiteţi din nou documentul.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Clientul e-mail nu poate realiza acţiunea cerută.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Aplicaţia e-mail a returnat o eroare neaşteptată.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Încercaţi să trimiteţi documentul din nou din clientul web.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Uneia dintre proprietăţi îi lipseşte numărul necesar de valori.",
		error_property_cardinality_explanation: "Unele proprietăţi au un număr minim şi maxim de valori.",
		error_property_cardinality_userResponse: "Utilizaţi ajutorul la trecere peste pentru a determina ce proprietate necesită un număr minim de valori. Apoi, specificaţi numărul minim de valori şi încercaţi din nou.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Este necesar un nume de fişier.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Specificaţi un nume de fişier şi încercaţi din nou.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Plug-in-ul ${0} conţine erori.",
		plugin_error_explanation: "A apărut o eroare la evaluarea JavaScript pentru plug-in-ul ${0}. Dacă veţi continua să folosiţi clientul web, aţi putea întâlni erori suplimentare.",
		plugin_error_userResponse: "Contactaţi-vă administratorul de sistem.",
		plugin_error_adminResponse: "Este o problemă cu plug-in-ul care trebuie rezolvată de furnizorul plug-in-ului. Se recomandă să înlăturaţi plug-in-ul din configuraţia clientului dumneavoastră web până când se rezolvă problema cu plug-in-ul.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Şablonul de intrare nu poate fi deschis.",
		open_old_format_entry_template_error_explanation: "Şablonul de intrare foloseşte un format mai vechi care nu este suportat în clientul web.",
		open_old_format_entry_template_error_userResponse: "Cereţi-i administratorului dumneavoastră de sistem să actualizeze şablonul de intrare.",
		open_old_format_entry_template_error_adminResponse: "Folosiţi Application Engine sau Workplace XT Entry Template Designer pentru a salva o versiune actualizată a şablonului de intrare.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Şablonul de intrare nu poate fi deschis.",
		open_custom_object_entry_template_error_explanation: "Clientul web nu suportă următorul tip de şablon de intrare: Şabloane de intrare Obiect personalizat.",
		open_custom_object_entry_template_error_userResponse: "Deschideţi un şablon de intrare diferit.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Obiectul eforms nu poate fi deschis.",
		open_forms_object_error_explanation: "Clientul web nu suportă următoarele tipuri de obiecte eforms: şablon de formular, date de formular, politică de document ş politică de flux de lucru.",
		open_forms_object_error_userResponse: "Deschideţi un altfel de document.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Nu puteţi folosi şablonul de intrare ${0}.",
		entry_template_folder_restricted_error_explanation: "Şablonul de intrare adaugă articole în folderul ${1} şi nu este nevoie să aveţi permisiunile corespunzătoare pentru a adăuga articole în acel folder.",
		entry_template_folder_restricted_error_userResponse: "Selectaţi un şablon de intrare diferit sau cereţi-i administratorului de sistem să vă acorde permisiunile corespunzătoare pentru a adăuga articole în folderul ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Şablonul de intrare nu poate fi deschis.",
		open_records_entry_template_error_explanation: "Clientul web nu suportă următorul tip de şablon de intrare: Şabloane de intrare Declarare ca înregistrare.",
		open_records_entry_template_error_userResponse: "Deschideţi un şablon de intrare diferit.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Fluxul de lucru nu poate fi deschis.",
		open_workflow_error_explanation: "Clientul web nu suportă deschiderea fluxurilor de lucru.",
		open_workflow_error_userResponse: "Deschideţi un altfel de document.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Documentul nu poate fi deschis.",
		viewer_unable_to_view_error_explanation: "Nu este configurat niciun vizualizator pentru documentele de acest tip sau vizualizatorul configurat nu este compatibil cu sistemul dumneavoastră.",
		viewer_unable_to_view_error_userResponse: "Cereţi-i administratorului de sistem să configureze un vizualizator pentru documentele de acest tip şi asiguraţi-vă că vizualizatorul configurat funcţionează cu sistemul utilizatorului.",
		viewer_unable_to_view_error_adminResponse: "Folosiţi unealta de administrare pentru a configura un vizualizator pentru acest tip de document.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Căutarea nu poate fi deschisă.",
		search_cannot_open_error_explanation: "Caracteristica de căutare nu este configurată pentru acest desktop.",
		search_cannot_open_error_userResponse: "Întrebaţi-l pe administratorul dumneavoastră de sistem dacă puteţi avea acces la un desktop ce include caracteristica de căutare sau dacă acest desktop poate fi actualizat pentru a include caracteristica de căutare.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Documentul nu a fost încărcat.",
		viewer_document_load_failed_error_explanation: "Vizualizatorul Daeja ViewONE Professional nu a putut deschide documentul.",
		viewer_document_load_failed_error_userResponse: "Pentru mai multe informaţii, vedeţi mesajul de eroare afişat în vizualizator.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Documentul nu poate fi vizualizat.",
		viewer_session_expired_explanation: "Conţinutul documentului nu poate fi extras.",
		viewer_session_expired_userResponse: "Încercaţi din nou să vă logaţi. Dacă problema persistă, serverul de aplicaţii s-ar putea să nu ruleze. Cereţi-i administratorului de sistem să verifice jurnalele de erori IBM Content Navigator sau să repornească serverul.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Documentul nu poate fi vizualizat.",
		ajaxViewer_getPage_failed_explanation: "Vizualizatorul AJAX a primit un răspuns de eroare la extragerea conţinutului paginii. Serverul de aplicaţii s-ar putea să nu ruleze.",
		ajaxViewer_getPage_failed_userResponse: "Închideţi-vă browser-ul Web şi logaţi-vă din nou. Dacă problema persistă, cereţi-i administratorului de sistem să examineze fişierele istorice ale serverului de aplicaţii web sau să repornească serverul.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Nu s-a găsit Java Runtime Environment (JRE) pe staţia dumneavoastră de lucru.",
		viewer_java_plugin_not_found_explanation: "Fie nu s-a găsit plug-in-ul, fie nu este instalată versiunea corectă de JRE.",
		viewer_java_plugin_not_found_userResponse: "Verificaţi dacă JRE-ul este instalat. De exemplu, într-un prompt de comandă, introduceţi următoarea comandă: Java -version. Dacă JRE nu este instalat sau este instalat la nivelul de versiune greşit, instalaţi versiunea corespunzătoare de JRE. O listă a versiunilor suportate este inclusă în documentul <i>Cerinţele preliminare hardware şi software pentru IBM Content Navigator</i> de pe site-ul de Suport software IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Documentul nu poate fi afişat în browser-ul dumneavoastră.",
		viewer_pdf_plugin_not_found_explanation: "Nu a fost găsit plug-in-ul care este folosit pentru afişarea documentelor PDF în browser-ul web.",
		viewer_pdf_plugin_not_found_userResponse: "Fişierul PDF va fi descărcat pe staţia de lucru, în loc să fie afişat în fereastra vizualizatorului.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Următorul articol nu poate fi adăugat în magazie: ${0}.",
		add_document_single_item_error_explanation: "Această eroare poate să apară dintr-unul din următoarele motive:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Încercaţi să adăugaţi un document care a fost mutat sau şters.</li>" + "<li>Încercaţi să adăugaţi un document care a fost redenumit.</li>" + "<li>Încercaţi să adăugaţi un document care este corupt.</li>" + "<li>Încercaţi să adăugaţi un document care este deschis într-o altă aplicaţie.</li>" + "<li>Încercaţi să adăugaţi un folder în magazie.</li>" + "<li>Nu aveţi permisiunile corespunzătoare pe sistemul de operare pentru a accesa documentul.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Faceţi acţiunea corespunzătoare pentru a rezolva problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Dacă documentul a fost mutat sau redenumit, găsiţi documentul pe sistemul dumneavoastră de fişiere şi încercaţi din nou să-l adăugaţi.</li>" + "<li>Dacă documentul este deschis în altă aplicaţie, închideţi-o şi încercaţi să-l adăugaţi din nou.</li>" + "</ul>" + "<br>Nu puteţi adăuga foldere în magazie.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Următoarele articole ${0} nu pot fi adăugate în magazie: ${1}",
		add_document_multiple_items_error_explanation: "O problemă cu unul dintre articole împiedică toate articolele din a fi adăugate în magazie. Această eroare poate să apară dintr-unul din următoarele motive:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Încercaţi să adăugaţi un document care a fost mutat sau şters.</li>" + "<li>Încercaţi să adăugaţi un document care a fost redenumit.</li>" + "<li>Încercaţi să adăugaţi un document care este corupt.</li>" + "<li>Încercaţi să adăugaţi un document care este deschis într-o altă aplicaţie.</li>" + "<li>Încercaţi să adăugaţi un folder în magazie.</li>" + "<li>Nu aveţi permisiunile corespunzătoare pe sistemul de operare pentru a accesa documentul.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Faceţi acţiunea corespunzătoare pentru a rezolva problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Dacă un document a fost mutat sau redenumit, găsiţi documentul pe sistemul dumneavoastră de fişiere şi încercaţi din nou să adăugaţi articolele.</li>" + "<li>Dacă un document este deschis în altă aplicaţie, închideţi-o şi încercaţi să adăugaţi din nou articolele.</li>" + "<li>Dacă un document a fost şters sau este corupt, deselctaţi articolul şi încercaţi din nou să adăugaţi articolele rămase.</li>" + "</ul>" + "<br>Nu puteţi adăuga foldere în magazie.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Nu puteţi trage şi plasa articole din această locaţie.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Obiectul eforms nu poate fi deschis.",
		open_forms_work_object_error_explanation: "Clientul web nu suportă următorul tip de obiect eforms: politică de flux de lucru.",
		open_forms_work_object_error_userResponse: "Deschideţi un altfel de document.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Documentul nu poate fi deschis.",
		viewer_privilege_to_view_error_explanation: "Nu aveţi permisiunile corespunzătoare pentru a vizualiza documentul.",
		viewer_privilege_to_view_error_userResponse: "Cereţi-i proprietarului documentului sau administratorului de sistem să vă ofere permisiunile corespunzătoare pentru a vizualiza documentul.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Articolele nu pot fi adăugate în magazie.",
		add_document_too_many_items_error_explanation: "Puteţi adăuga până la ${0} articole odată. Încercaţi să adăugaţi ${1} articole.",
		add_document_too_many_items_error_userResponse: "Înlăturaţi o parte din articole din lista dumneavoastră şi încercaţi din nou să adăugaţi articolele. De asemenea, vă puteţi contacta administratorul de sistem pentru a creşte numărul maxim de documente pe care le puteţi adăuga odată pe acest desktop.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Nu se poate stabili o conexiune la clientul web folosind următorul URL: ${0}.",
		http_ltpa_expired_explanation: "Cheia LTPA care este asociată cu sesiunea dumneavoastră de răsfoire a expirat.",
		http_ltpa_expired_userResponse: "Reporniţi browser-ul şi încercaţi să vă logaţi din nou. Dacă problema persistă, raportaţi următoarea eroare administratorului de sistem: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Documentul nu poate fi adăugat la folderul ${0}.",
		dnd_no_privilege_error_explanation: "Permisiunile la folder împiedică adăugarea oricărui document la folder.",
		dnd_no_privilege_error_userResponse: "Adăugaţi documentul la un alt folder.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Articolele nu pot fi modificate.",
		modify_document_too_many_items_error_explanation: "Puteţi modifica până la ${0} articole la un moment dat. Acum încercaţi să modificaţi ${1} articole.",
		modify_document_too_many_items_error_userResponse: "Selectaţi mai puţine articole şi încercaţi din nou să le modificaţi. De asemenea, puteţi contacta administratorul de sistem pentru a creşte numărul maxim de articole pe care le puteţi modifica la un moment dat de pe acest desktop.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Nu puteţi utiliza clasa ${0}.",
		add_document_multiple_unique_values_error_explanation: "Clasa ${0} conţine una sau mai multe proprietăţi care au nevoie de o valoare unică pentru fiecare document. Când adăugaţi mai multe documente, toate documentele folosesc aceleaşi valori.",
		add_document_multiple_unique_values_error_userResponse: "Selectaţi o clasă diferită sau adăugaţi documentele separat.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Nu puteţi folosi şablonul de intrare ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Şablonul de intrare ${0} are nevoie să adăugaţi documente în această clasă ${1}. Totuşi, cala ${1} conţine una sau mai multe proprietăţi care au nevoie de o valoare unică pentru fiecare document. Când adăugaţi mai multe documente, toate documentele folosesc aceleaşi valori.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Selectaţi un şablon de intrare diferit sau adăugaţi documentele separat.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Nu puteţi folosi şablonul de intrare ${0}.",
		entry_template_class_restricted_error_explanation: "Şablonul de intrare adaugă articole folosind clasa ${1} şi nu aveţi permisiunile corespunzătoare pentru a adăuga articole folosind această clasă.",
		entry_template_class_restricted_error_userResponse: "Selectaţi un şablon de intrare diferit sau cereţi-i administratorului de sistem să vă acorde permisiunile corespunzătoare pentru a adăuga articole folosind clasa ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Articolul de lucru nu poate fi realocat unui alt utilizator.",
		process_reassign_error_explanation: "Această acţiune este interzisă de fluxul de lucru.",
		process_reassign_error_userResponse: "Puteţi deschide articolul de lucru şi finaliza etapa actuală din articolul de lucru.  Pentru informaţii suplimentare legate de această problemă, rugaţi-l pe posesorul articolului să verifice dacă articolul de lucru poate fi realocat.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Următoarea acţiune personalizată nu poate fi încărcată: ${0}.",
		customaction_loadurl_error_explanation: "Acţiunea personalizată nu se află într-o locaţie accesibilă. URL-ul curent al acţiunii personalizate este ${1}.",
		customaction_loadurl_error_userResponse: "Cereţi administratorului să mute acţiunea personalizată într-o locaţie accesibilă.",
		customaction_loadurl_error_adminResponse: "Fişierul JSP care defineşte acţiunea personalizată trebuie să fie furnizat ca parte a aplicaţiei web eClient sau IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Următoarea caracteristică nu poate fi găsită: ${0}.",
		feature_invalid_explanation: "Această problemă poate apărea în cazul în care caracteristica nu este disponibilă în desktopul specificat sau numele caracteristicii este scris incorect.",
		feature_invalid_userResponse: "Când faceţi clic pe OK veţi fi redirecţionat la caracteristica implicită pentru acest desktop. Contactaţi administratorul de sistem pentru a raporta această problemă.",
		feature_invalid_adminResponse: "În cazul în care funcţia trebuie să fie disponibilă pe desktop, actualizaţi configuraţia desktopului în unealta de administrare. Dacă caracteristica nu ar trebui să fie inclusă în desktop sau este scrisă incorect, lucraţi cu dezvoltatorul de aplicaţii care a creat URL-ul pentru această caracteristică pentru a-l actualiza.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Căutarea ${0} nu poate fi deschisă.",
		search_unsupportedTeamspaceSearch_error_explanation: "Trebuie să fiţi într-un spaţiu de echipă pentru a deschide această căutare.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Selectaţi o altă căutare.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Următorul fişier nu poate fi importat: ${0}.",
		wrong_import_file_type_error_explanation: "Fişierul trebuie să fie un fişier de proprietăţi.",
		wrong_import_file_type_error_userResponse: "Selectaţi fişierul de proprietăţi pe care l-aţi exportat din unealta de administrare.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Magazia ${0} nu a putut fi găsită în desktopul ${1}.",
		browse_repository_not_found_error_explanation: "Magazia trebuie să fie prezentă în desktop şi activată pentru caracteristica de browser atunci când este specificată într-un parametru URL.",
		browse_repository_not_found_error_userResponse: "Asiguraţi-vă că ID-ul magaziei specificat în URL este corect, magazia a fost adăugată în desktopul ${1} şi caracteristica de browser este activată pentru magazie.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Magazia ${0} nu este activată pentru caracteristica de browser din desktopul ${1}.",
		browse_repository_not_enabled_error_explanation: "Magazia trebuie activată pentru caracteristica de browser atunci când este specificată într-un parametru de URL.",
		browse_repository_not_enabled_error_userResponse: "Activaţi caracteristica de browser pentru magazia ${0} din desktop-ul ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Căutarea nu poate fi finalizată deoarece legătura include criterii invalide.",
		invalid_xt_stored_search_criteria_error_explanation: "Următoarea valoare nu este validă: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Cereţi-i administratorului dumneavoastră de sistem să furnizeze o legătură de actualizare.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Editaţi perechea corespunzătoare de nume-valoare din URL. Dacă nu ştiţi ce valori sunt valide pentru proprietate, dechideţi căutarea stocată în proiectantul de căutare FileNet Workplace XT pentru a determina o valoare validă.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Căutarea în mai multe magazii nu poate fi deschisă.",
		unified_search_invalid_fixed_value_error_explanation: "Căutarea peste magazii include criterii invalide. Această problemă poate surveni atunci când un criteriu are o valoare fixă ce nu este compatibilă cu celelalte proprietăţi dintr-o mapare. De exemplu, această problemă survine dacă valoarea fixă este un şir, dar celelalte proprietăţi din mapare au valori întregi.",
		unified_search_invalid_fixed_value_error_userResponse: "Dacă aveţi drepturile corespunzătoare pentru a edita căutarea, înlăturaţi criteriul invalid şi salvaţi din nou căutarea. Dacă nu aveţi permisiunile corespunzătoare pentru a edita căutarea, cereţi proprietarului căutării sau administratorului dumneavoastră de sistem să salveze căutarea din nou.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Cererea dumneavoastră nu poate fi finalizată.",
		launch_action_invalid_json_error_explanation: "Datele care au fost transmise clientului web nu sunt valide.",
		launch_action_invalid_json_error_userResponse: "Spuneţi administratorului dumneavoastră de sistem ce aplicaţie foloseaţi când a apărut această problemă.",
		launch_action_invalid_json_error_adminResponse: "Aplicaţia client nu a trimis un obiect valid JSON către clientul web. Contactaţi IBM Software Support pentru asistenţă suplimentară.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Cererea dumneavoastră nu poate fi finalizată.",
		launch_action_not_found_error_explanation: "Acţiunea ${0} nu este configurată pentru niciun meniu pe desktopul ${1}.",
		launch_action_not_found_error_userResponse: "Cereţi administratorului dumneavoastră de sistem să configureze desktopul ${1} pentru a utiliza un meniu care conţine acţiunea ${0} sau pentru a vă asigna la un desktop care include acţiunea ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Cererea dumneavoastră nu poate fi finalizată.",
		launch_action_repository_not_found_error_explanation: "Magazia ${0} nu este asociată cu desktopul ${1}.",
		launch_action_repository_not_found_error_userResponse: "Cereţi administratorului dumneavoastră de sistem să asocieze magazia ${0} cu desktopul ${1} sau vă asigneze la un desktop care include magazia ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Spaţiul de echipă nu poate fi deschis.",
		teamspace_cannot_open_error_explanation: "Caracteristica de spaţiu de echipă nu este configurată pentru acest desktop.",
		teamspace_cannot_open_error_userResponse: "Întrebaţi-l pe administratorul dumneavoastră de sistem dacă puteţi avea acces la un desktop care include caracteristica de spaţiu de echipă sau dacă acest desktop poate fi actualizat pentru a include caracteristica de spaţiu de echipă.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "A apărut o eroare la verificarea conţinutului redactat.",
		viewer_redaction_checkin_failed_explanation: "Vizualizatorul a primit un răspuns de eroare la înregistrarea la intrare a conţinutului redactat.",
		viewer_redaction_checkin_failed_userResponse: "Cereţi administratorului dumneavoastră de sistem să examineze fişierele istoric ale serverului de aplicaţii web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Nu puteţi adăuga documente în această magazie.",
		add_document_odserver_odwek_version_od_error_explanation: "Versiunea curentă IBM Content Manager OnDemand Server sau ODWEK nu este la nivelul minim necesar pentru a suporta adăugarea documentelor într-o magazie Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Cereţi-i administratorului să verifice ce versiuni de Content Manager OnDemand Server şi ODWEK sunt necesare pentru a suporta adăugarea documentelor în magaziile Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Articolele nu pot fi adăugate în magazie.",
		add_document_too_many_items_od_error_explanation: "Pentru magaziile IBM Content Manager OnDemand, puteţi adăuga numai câte un articol la un moment dat.",
		add_document_too_many_items_od_error_userResponse: "Înlăturaţi unele sau toate articolele din lista dumneavoastră şi încercaţi să adăugaţi din nou articolele, câte un articol la un moment dat.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Articolul nu poate fi adăugat la magazie.",
		add_document_filesize_empty_od_error_explanation: "Nu puteţi să adăugaţi fişiere goale într-o magazie IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Adăugaţi conţinut în fişier şi încercaţi să adăugaţi din nou fişierul sau adăugaţi alt articol.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Căutarea în mai multe magazii nu poate fi deschisă.",
		unified_search_repository_not_found_error_explanation: "Căutarea în mai multe magazii include una sau mai multe magazii invalide. Această problemă poate surveni atunci când magaziile ce sunt incluse în căutare sunt şterse din aplicaţie sau înlăturate din desktop-ul curent.",
		unified_search_repository_not_found_error_userResponse: "Dacă aveţi permisiunile corespunzătoare pentru a edita căutarea, salvaţi căutarea din nou. Atunci când salvaţi căutarea, clientul web înlătură magaziile invalide din căutare. Dacă nu aveţi permisiunile corespunzătoare pentru a edita căutarea, cereţi proprietarului căutării sau administratorului dumneavoastră de sistem să salveze căutarea din nou.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Nu poate fi creat un nou document.",
		edit_document_using_office_online_error: "Documentul nu poate fi deschis.",
		edit_document_using_office_online_error_explanation: "URL-ul de server Microsoft Office Online nu este configurat.",
		edit_document_using_office_online_error_userResponse: "Înainte de a putea utiliza Office Online, administratorul dumneavoastră trebuie mai întâi să activeze serverul Office Online pe o magazie şi să specifice URL-ul de server Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Documentul nu poate fi deschis în Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Cereţi-i administratorului dumneavoastră să actualizeze MS Office Online Server Integration.<br><br> Dacă utilizatorul trebuie să acceseze acest document din Microsoft Office Online, deplasaţi-vă la pagina Editare integrare pentru magazie şi actualizaţi MS Office Online Server Integration pentru a include clasa în lista de clase de modificat pentru suport Office Online. ",		
		browser_not_support_this_viewer: "Vizualizatorul configurat nu este compatibil cu browser-ul dumneavoastră.",
		browser_not_support_this_viewer_explanation: "${0} nu este suportat de browser.",
		browser_not_support_this_viewer_userResponse: "Utilizaţi alt vizualizator pentru a deschide documentul. O listă cu browser-ele suportate este inclusă în documentul <i>Hardware and software prerequisites for IBM Content Navigator</i> pe site-ul IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informaţii de flux de lucru",
		process_information_info_text: "Articolul selectat rulează în acest moment pe următoarele fluxuri de lucru.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Egal cu",
		operator_NOTEQUAL: "Nu e egal cu",
		operator_LIKE: "Ca",
		operator_STARTSWITH: "Începe cu",
		operator_ENDSWITH: "Se termină cu",
		operator_NOTLIKE: "Nu este ca",
		operator_NULL: "Este gol",
		operator_NOTNULL: "Nu este gol",
		operator_LESS: "Mai mic ca",
		operator_LESSOREQUAL: "Mai mic sau egal cu",
		operator_GREATER: "Mai mare ca",
		operator_GREATEROREQUAL: "Mai mare sau egal cu",
		operator_BETWEEN: "Între",
		operator_NOTBETWEEN: "Nu este între",
		operator_IN: "Includere toate",
		operator_INANY: "Includere oricare",
		operator_NOTIN: "Excludere toate",
		operator_CONTAINS: "Conţine",

		/* SearchForm widget */
		search_button_tooltip: "Căutaţi documente care se potrivesc criteriilor dumneavoastră.",
		reset_button_tooltip: "Resetează căutarea la valorile implicite setate de administratorul dumneavoastră.",
		clear_button_tooltip: "Înlătură toate valorile pe care le-aţi introdus pentru căutare.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Selectare căutare",
		append_to_search: "Adăugare la sfârşitul căutării",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Căutare nouă",
		new_unified_search: "Căutare pe mai multe magazii nouă",
		searh_name_contains: "Numele de căutare conţine",
		keep_search_criteria_expanded: "Păstrează criteriile de căutare deschise",
		showing_results: "Se afişează rezultate pentru:",
		open_in_new_window: "Deschidere în fereastră nouă",
		open_in_new_tab: "Deschidere în filă nouă",
		close_tab: "Închidere filă",
		add_repository: "Adăugare magazie",
		edit_repository: "Editare magazie",
		remove_repository: "Înlăturare",
		search_scope: "Domeniu de căutare",
		search_class_template: "Clasă",
		object_type_version: "Tip şi versiune obiect",
		not_applicable: "Neaplicabil",
		unified_search_including_subfolders: " (inclusiv subfoldere)",
		unified_search_dialog_intro_text: "Selectaţi magazia şi căutarea sau clasele pe care doriţi să le includeţi în căutare.",
		unified_search_class_or_template: "Clasă sau şablon",

		select_object_fieldset_legend: "Cum vreţi să găsiţi articole de ataşat:",
		select_object_create_new_search: "Căutare nouă",
		select_object_search_template: "Căutare existentă",

		search_criteria: "Criterii căutare:",
		search_criteria_no_colon: "Criterii căutare",
		search_in_multiple: "Căutare în (${0}):",
		search_location_including_subfolders: "${0} inclusiv subfoldere",
		search_class: "Clasă:",
		search_class_multiple: "Clasa (${0}):",
		search_class_including_subclasses: "${0} inclusiv subclase",
		search_class_all_pseudo: "Toate",
		search_results: "Rezultatele căutării",
		select_operator: "Selectaţi un operator",
		ending_value: "Valoarea de final pentru proprietatea ${0} este:",
		search_options: "Opţiuni de căutare:",
		search_version: "Versiune:",
		search_released_version: "Versiune eliberată",
		search_current_version: "Versiune curentă",
		search_all_versions: "Toate versiunile",
		search_file_type_filter: "Filtru tip de fişier:",
		search_one_file_type: "1 tip de fişier",
		search_many_file_types: "${0} tipuri de fişier",
		search_action_filter: "Filtru acţiune:",
		search_action_filter_hover_help: "Reduceţi rezultatele pentru a include numai fişierele pe care utilizatorii au realizat o anumită acţiune.<br/>De exemplu, puteţi căuta doar documentele pe care le-aţi adăugat pe 20 septembrie 2012.",
		search_action_filter_enabled: "Filtrul de acţiune este activat",
		search_enable: "Activare",
		search_disable: "Dezactivare",
		search_by: "după",
		search_added: "Adăugat",
		search_modified: "Modificat",
		search_checked_out: "Înregistrat la ieşire",
		search_date_operator_on: "Pe",
		search_date_operator_not_on: "Nu este pe",
		search_date_operator_before: "Înainte de",
		search_date_operator_after: "După",
		search_version_hover_help_p8: "O versiune eliberată este disponibilă tuturor utilizatorilor. Un document care este o versiune curentă înseamnă că unul sau mai mulţi utilizatori editează acel document.",
		search_version_hover_help_cm: "O versiune curentă este cea mai recentă versiune a articolului.",
		search_using: "Căutaţi articole care se potrivesc:",
		search_property_and_text_criteria: "Atât cu valorile proprietăţilor, cât şi cu criteriile text",
		search_property_or_text_criteria: "Fie cu valorile proprietăţilor, fie cu criteriile text",
		search_property_and_text: "Atât cu criteriile text, cât şi proprietate",
		search_property_or_text: "Fie cu criteriile text, fie proprietate",
		search_property_options: "Opţiuni proprietate:",
		search_property_option_match_all: "Toate proprietăţile",
		search_property_option_match_any: "Oricare dintre proprietăţi",
		search_property_option_match_all_summary: "Potrivire toate",
		search_property_option_match_any_summary: "Potrivire oricare",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Cel puţin",
		search_content_size_filter: "Filtru de dimensiune conţinut:",
		search_content_size_filter_any: "Orice dimensiune de conţinut",

		/* Search work options */
		search_work_filter: "Filtrare articole de lucru:",
		search_work_filter_hover_help: "Restrângeţi rezultatele pentru a include numai articolele ce sunt în fluxul de lucru. De exemplu, puteţi restrânge rezultatele pentru a include numai articolele de lucru ce sunt active.<br /><br />Această opţiune nu se aplică dacă doriţi să vedeţi toate versiunile articolelor ce sunt returnate de căutare.",
		search_work_filter_enabled: "Filtrul pentru articole de lucru este activat",
		search_work_filter_status: "Stare:",
		search_work_filter_step: "Pas:",
		search_work_filter_owner: "Proprietar:",
		search_work_filter_status_all: "Toate articolele",
		search_work_filter_status_active: "Articole active",
		search_work_filter_status_suspended: "Articole suspendate",
		search_work_filter_process_all: "Toate fluxurile de lucru",
		search_work_filter_step_all: "Toţi paşii",
		search_work_filter_owner_all: "Toţi utilizatorii",
		search_work_filter_step_error: "Numele pasului nu există.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Căutarea nu poate fi finalizată fără informaţii suplimentare. Introduceţi o valoare pentru cel puţin o condiţie.",
		search_insufficient_input_box: "Căutarea nu poate fi finalizată fără informaţii suplimentare. Introduceţi criterii de căutare text sau selectaţi un şablon de metadate.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Căutarea nu poate fi configurată să ruleze când e deschisă fără informaţii suplimentare. Introduceţi o valoare pentru cel puţin o condiţie.",
		search_member_required: "Pentru a partaja această căutare cu utilizatori sau grupuri specifice, selectaţi cel puţin un utilizator sau grup cu care să partajaţi această căutare.",
		search_criteria_layout_and: "ŞI",
		search_criteria_layout_or: "SAU",
		search_prompt_close_without_save: "Vreţi să închideţi fără a vă salva modificările?",
		search_prompt_close_all_without_save: "Vreţi să închideţi toate filele fără a vă salva modificările?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Unul dintre următoarele criterii de căutare nu este valid pentru această magazie: ${0}. Pentru a rula căutarea în clientul Web, criteriile invalide trebuie să fie eliminate. Dacă salvaţi căutarea, criteriile invalide vor fi eliminate. Dacă nu doriţi să modificaţi  căutarea, închideţi căutarea.",
		search_invalid_repository: "Unul sau mai multe magazii",
		search_invalid_class: "Una sau mai multe clase",
		search_invalid_folder: "Unul sau mai multe foldere",
		search_invalid_file_type: "Una sau mai multe tipuri de clase",
		search_invalid_property: "Una sau mai multe proprietăţi",
		search_invalid_text_search: "Criterii de căutare a textului",
		search_invalid_work: "Criteriul de filtrare a articolelor de lucru",

		search_operator_pulldown_missing: "Este necesar un operator. Selectaţi un operator din meniul derulant. Dacă nu vedeţi operaţii, cereţi-i administratorului dumneavoastră de sistem să verifice fila <b>Căutare</b> din unealta de administrare pentru a vedea dacă toţi operatorii sunt ascunşi. Dacă aceasta este o căutare peste magazii, meniul derulant poate să nu conţină operatori dacă proprietăţile mapate între ele nu au operatori comuni.",

		/*SearchBuilder */
		open_search_builder: "Căutare nouă",
		document_type: "Clasă",
		show_all_properties: "Afişare toate proprietăţile",
		text_search_label: "Găsire articole cu următorii termeni:",
		text_search_place_holder: "Folosiţi o combinaţie de termeni şi operatori: * ? sau \"fraze de potrivire exactă\"",
		text_search_place_holder_box: "Folosiţi o combinaţie de termeni şi operatori: AND, OR, NOT şi \"fraze de potrivire exactă\"",
		text_search_place_holder_cascade_proximity: "Folosiţi o combinaţie de termeni şi operatori: * sau ?",
		text_search_place_holder_common: "Folosiţi o combinaţie de termeni şi \"fraze de potrivire exactă\"",
		text_search_hover_help_p8: "Folosiţi asteriscul (*) sau semnul întrebării (?) ca metacaracter. Folosiţi ghilimele duble (\"\") pentru potriviri exacte.",
		text_search_hover_help_p8_only_crs: "Folosiţi asteriscul (*) sau semnul întrebării (?) ca metacaracter. Folosiţi ghilimele duble (\"\") pentru potriviri exacte. Când specificaţi mai mulţi termeni, o căutare în magazii multiple returnează articolele care conţin oricare dintre aceşti termeni.",
		text_search_hover_help_cm: "Folosiţi asteriscul (*) sau semnul întrebării (?) ca metacaracter. Folosiţi ghilimele duble (\"\") pentru potriviri exacte. Folosiţi semnul minus (-) pentru a precede termenii de exclus şi semnul plus (+) pentru a precede termenii de inclus.",
		text_search_hover_help_box: "Utilizaţi AND între termeni pentru a se potrivi toţi termenii. Utilizaţi OR între termeni pentru a se potrivi oricare din termeni. Folosiţi ghilimele duble (\"\") pentru potriviri exacte. Puneţi în faţa unui termen NOT pentru a-l exclude.",
		text_search_hover_help_common: "Folosiţi ghilimele duble (\"\") pentru potriviri exacte. Când specificaţi mai mulţi termeni, o căutare în magazii multiple returnează articolele care conţin toţi termenii.",
		text_search_options: "Opţiuni text:",
		text_search_options_hover_help: "Dacă folosiţi orice alt operator în afară de metacaractere, selectaţi Operatori avansaţi.",
		text_search_option_any: "Oricare din termeni",
		text_search_option_all: "Toţi termenii",
		text_search_option_proximity: "În apropierea cuvintelor:",
		text_search_option_none: "Operatori avansaţi",
		text_search_option_authoring: "Căutarea de text este:",
		text_search_option_authoring_hover_help: "Alegeţi o opţiune care determină cum doriţi să faceţi criteriile de căutare disponibile utilizatorilor. Dacă nu vreţi să includeţi niciun criteriu de căutare text în căutare, ascundeţi opţiunea. Altfel, puteţi permite ca criteriile de căutare să fie editate sau cerute de utilizatori sau să le faceţi doar-citire pentru utilizatori.",
		text_search_option_hide: "Ascundere criterii",
		text_search_option_hide_hover_help: "Selectaţi această opţiune dacă nu vreţi să includeţi niciun criteriu de căutare text în căutare sau să permiteţi altor utilizatori să specifice criterii de căutare text.",
		text_search_option_in: "În tagul HTML/XML ${0}",
		text_search_option_paragraph: "În acelaşi paragraf",
		text_search_option_sentence: "În aceeaşi propoziţie",
		text_search_option_vql: "Interogare VQL",
		text_search_option_none_hover_help: "Folosiţi - pentru a precede termenii de exclus.",
		text_search_option_cascade_proximity_hover_help: "Restricţionează rezultatele căutării la termenii care apar într-un interval de cuvinte ce nu includ fraze exacte.",

		box_search_metadata: "Metadate:",
		box_search_select_template: "Selectare şablon",
		box_search_no_templates: "Nu este disponibil niciun şablon",
		box_text_search_options_search_within: "Domeniu de căutare:",
		box_text_search_options_search_within_everything: "Orice",
		box_text_search_options_search_within_file_content: "Conţinut de document",
		box_text_search_options_search_within_tags: "Taguri",
		box_text_search_options_limit_to: "Numai căutare:",

		add_property: "Adăugare proprietate",
		edit_template: "Editare căutare",
		save_search: "Salvare căutare",
		search_template_name: "Nume:",
		search_template_desc: "Descriere:",
		auto_run: "Rulează căutarea când se deschide",
		show_in_tree: "Afişează căutarea în structura folderului",
		show_in_tree_hover_help: "Dacă o căutare este salvată într-un folder, aceasta este afişată implicit numai în lista de conţinut. Dacă selectaţi această opţiune, căutarea este de asemenea afişată în arborele de foldere în vizualizarea Răsfoire.  Totuşi, căutarea este afişată în arborele de foldere doar dacă salvaţi căutarea într-un folder.",
		share_search_with: "Partajare căutare cu:",
		remove_member: "Înlăturare ${0}",
		ok_button_label: "OK",
		save_template: "Salvare",
		save_template_title: "Dacă aveţi nevoie des să căutaţi anumite articole, salvaţi-vă criteriile căutării.",
		remove_criterion: "Înlăturare",
		apply_button_label: "Aplicare",
		empty_search_results_pane: "Rulaţi o căutare pentru a vedea rezultatele.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Întreaga magazie",

		repository_already_selected: "Magazia ${0} nu poate fi adăugată în căutarea în mai multe magazii deoarece este deja inclusă în căutare. <br/> O magazie poate fi inclusă în căutarea în mai multe magazii doar o singură dată. <br/>Selectaţi o magazie diferită pentru a o include în căutarea în mai multe magazii.",

		repository_limit_reached: "Magazia ${0} nu poate fi adăugată în căutarea peste magazii. Puteţi adăuga maximum ${1} magazii în căutare.",

		nomore_criteria_toappend: "Toate proprietăţile mapate sunt deja incluse în criteriile de căutare. Nu au fost adăugate proprietăţi criteriilor de căutare.",
		nomore_criteria_toappend_regular: "Toate proprietăţile sunt deja incluse în criteriile de căutare. Nu au fost adăugate proprietăţi criteriilor de căutare.",

		/* OD Save Search dialog */
		reload_label: "Reîncărcare",
		od_save_search_help_text: "Tastaţi un nume pentru căutare sau selectaţi o căutare există de înlocuit",
		public_access_label: "Permite altora să folosească această căutare",
		od_delete_search_help_text: "Selectaţi una sau mai multe căutări de şters",
		delete_save_searches: "Ştergere căutări salvate",

		/* Unified Search */
		unified_search_enable_text_search: "Includere criterii de căutare text",
		unified_search_text_search_enabled: "Căutare text inclusă",
		unified_search_mapping: "Mapare",
		unified_search_new_mapping: "Mapare nouă",
		unified_search_mapping_name: "Maparea numelor",
		unified_search_mapping_dialog_instructions: "Selectaţi proprietăţile pe care doriţi să le mapaţi. Unele proprietăţi pot fi mapate la proprietăţi cu un tip diferit de date. De exemplu, puteţi mapa o proprietate şir la o proprietate întreg. Când mapaţi o proprietate la alta proprietate, proprietăţile sunt tratate ca o singură proprietate în căutarea în mai multe magazii.",
		unified_search_filter_available_properties: "Filtrare proprietăţi disponibile",
		unified_search_available_properties: "Proprietăţi disponibile",
		unified_search_mapped_properties: "Proprietăţi mapate",
		unified_search_single_values: "valori singulare",
		unified_search_multiple_values: "mai multe valori",
		unified_search_add_mapping: "Adăugare mapare",
		unified_search_warn_remove_repository: "Magazia selectată este utilizat în criteriile de căutare.\nDacă înlăturaţi magazia, orice mapare şi criteriu de căutare care include magazia va fi ştearsă.\n\nDoriţi să eliminaţi magazia?",
		unified_search_warn_update_repository_mappings: "Modificarea selecţiei proprietăţii pentru această magazie afectează criteriile de căutare.\n\nCriteriile de căutare includ una sau mai multe mapări care includ una sau mai multe proprietăţi pe care le înlăturaţi. Toate mapările care includ proprietăţi pe care le înlăturaţi trebuie şterse. Toate criteriile de căutare care includ aceste mapări trebuie şterse pentru ca căutarea să ruleze.\n\nDoriţi să actualizaţi opţiunile de magazie şi şă ştergeţi mapările şi criteriile de căutare?",
		unified_search_warn_update_repository_mappings_reset: "Includerea criteriilor de căutare text pentru această magazie afectează criteriile de căutare în magazii multiple.\n\nOrice criterii de căutare care includ o mapare cu proprietăţi pentru această magazie trebuie şterse pentru ca să ruleze căutarea.\n\nDoriţi să actualizaţi opţiunile de magazie şi să ştergeţi criteriile de căutare text?",
		unified_search_warn_update_repository_text_criteria: "Înlăturarea criteriilor de căutare text pentru această magazie afectează criteriile de căutare în magazii multiple.\n\nCriteriile de căutare trebuie şterse din criteriile de căutare în magazii multiple pentru ca să ruleze căutarea.\n\nDoriţi să actualizaţi opţiunile de magazie şi să ştergeţi criteriile de căutare text?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Înlăturarea criteriilor de căutare text şi modificarea selecţiei de proprietăţi pentru această magazie afectează criteriile de căutare în magazii multiple.\n\nCriteriile de căutare trebuie şterse din criteriile de căutare în magazii multiple pentru ca să ruleze căutarea. De asemenea, criteriile de căutare proprietăţi includ una sau mai multe mapări care includ una sau mai multe proprietăţi pe care le înlăturaţi. Toate mapările care includ proprietăţi pe care le înlăturaţi trebuie şterse. Toate criteriile de căutare proprietate care includ aceste mapări trebuie şterse pentru ca căutarea să ruleze.\n\nDoriţi să actualizaţi opţiunile de magazie şi şă ştergeţi criteriile de căutare, mapările şi criteriile de căutare proprietate?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Excluderea criteriilor de căutare text pentru această magazie afectează criteriile de căutare în magazii multiple.\n\nOrice criterii de căutare care includ o mapare cu proprietăţi pentru această magazie trebuie şterse pentru ca să ruleze căutarea. Criteriile de căutare trebuie şterse din criteriile de căutare pe mai multe magazii pentru ca să ruleze căutarea. \n\nDoriţi să actualizaţi opţiunile de magazie şi să ştergeţi criteriile de căutare?",
		unified_search_warn_remove_mapping: "Înlăturarea acestei mapări afectează criteriile de căutare.\n\nCriteriile de căutare care folosesc această mapare trebuie şterse pentru ca să ruleze căutarea.\n\nDoriţi să actualizaţi maparea şi să ştergeţi criteriile de căutare?",
		unified_search_warn_update_mapping: "Modificările la această mapare afectează criteriile de căutare.\n\nCriteriile de căutare care folosesc această mapare trebuie curăţate pentru a vă asigura că sunt incluse în căutare operatori sau valori invalide.\n\nDoriţi să actualizaţi maparea şi să curăţaţi criteriile de căutare?",
		unified_search_warn_update_mapping_not_searchable: "Modificările la această mapare afectează criteriile de căutare.\n\nCând proprietăţile mapate sunt toate numai-afişare, nu puteţi folosi maparea în criteriile de căutare. Criteriile de căutare care includ această mapare trebuie şterse pentru ca  să ruleze căutarea. \n\nDoriţi să actualizaţi maparea şi să ştergeţi criteriile de căutare?",
		unified_search_warn_update_mapping_box_searchable: "Modificările la această mapare afectează criteriile de căutare.\n\nCriteriile de căutare includ deja această mapare mai mult decât o dată şi dacă adăugaţi proprietatea ${0} din magazia ${1}, criteriile de căutare includ proprietatea ${0} de prea multe ori. Criteriile de căutare care includ această mapare trebuie şterse pentru ca  să ruleze căutarea. \n\nDoriţi să actualizaţi maparea şi să ştergeţi criteriile de căutare?",
		unified_search_details: "Detalii căutare în mai multe magazii",
		unified_search_fixed_value_property: "Proprietate valoare fixă",
		unified_search_required_property: "Proprietate necesară",
		unified_search_display_only_property: "Proprietate numai-afişare",
		unified_search_missing_required_properities: "Căutarea nu poate fi salvată sau rulată.<br/>Următoarele proprietăţi sunt proprietăţi necesare: ${0}. Trebuie să includeţi proprietăţile într-o mapare şi să adăugaţi proprietăţile cu valori în criteriile de căutare.",
		unified_search_property_repostory: "${0} (Magazie: ${1})",
		unified_search_builder_no_mappings: "Căutarea nu poate fi rulată.<br/>Trebuie să creaţi o mapare de proprietate şi să o includeţi în <b>Afişare rezultate</b> pentru ca să poată afişa căutarea rezultatele dumneavoastră.",
		unified_search_builder_insufficient_criteria_to_run: "Căutarea nu poate fi rulată.<br/>Criteriile de căutare nu includ criteriile de căutare text sau valorile de proprietăţi pentru următoarele magazii:${0}Pentru fiecare magazie inclusă în căutare, fie trebuie să introduceţi criteriile de căutare text, fie să creaţi o mapare de proprietate, să o includeţi în criteriile de proprietăţi, şi să specificaţi o valoare a proprietăţii.",
		unified_search_builder_insufficient_criteria_to_save: "Căutarea nu poate fi salvată.<br/>Căutarea nu include criteriile de căutare pentru următoarele magazii:${0}Pentru fiecare magazie inclusă în căutare, trebuie să faceţi una din următoarele opţiuni:<ol><li>Creaţi o mapare de proprietate şi includeţi-o în criteriile de proprietăţi.</li><li>Modificaţi magazia pentru a include criteriile de căutare text şi creaţi o mapare de proprietate şi includeţi-o în <b>Afişare rezultate</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Căutarea nu poate fi rulată.<br/>Pentru fiecare magazie care este inclusă în căutare, trebuie să specificaţi cel puţin o valoare de proprietate. De exemplu, puteţi specifica valori pentru următoarele proprietăţi: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Căutarea nu poate fi rulată.<br/>Criteriile de căutare text sunt necesare.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Căutarea nu poate fi rulată.<br/>Pentru fiecare magazie care este inclusă în căutare, trebuie să specificaţi cel puţin o valoare de proprietate sau să introduceţi criterii de căutare text. De exemplu, puteţi specifica valori pentru următoarele proprietăţi: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Căutarea nu poate fi rulată.<br/>Criteriile de căutare text sunt necesare. Pentru fiecare magazie care este inclusă în căutare, trebuie să specificaţi cel puţin o valoare de proprietate sau să introduceţi criterii de căutare text. De exemplu, puteţi specifica valori pentru următoarele proprietăţi: ${0}",
		unified_search_invalid_criteria: "Căutarea conţine criterii invalide care împiedică rularea căutării.<br/>Criteriile invalide au fost înlăturate. Dar, trebuie să salvaţi modificările căutării înainte de a putea rula căutarea. Dacă nu doriţi să salvaţi modificările, închideţi căutarea.<br/><br/>Următoarele articole au fost înlăturate sau modificate:${0}",
		unified_search_invalid_fixed_values: "Căutarea nu poate fi salvată sau rulată.<br/>Următoarele criterii de căutare au valori fixe ce nu sunt valide:${0}Efectuaţi una dintre următoarele acţiuni pentru a rezolva această problemă:<ul><li>Înlăturaţi criteriile de căutare ce conţin valori invalide</li><li>Editaţi mapările ce includ proprietatea IBM Content Manager OnDemand cu valoare fixă pentru a înlătura această proprietate.</li><li>Editaţi mapările ce includ proprietatea IBM Content Manager OnDemand cu valoarea fixă pentru a face compatibile toate proprietăţile. Pentru informaţii suplimentare despre ce proprietăţi pot fi mapate, vedeţi legătura Aflaţi mai multe din textul introductiv din partea de sus a ferestrei de mapare proprietăţi.</li></ul>",
		unified_search_cannot_add_properties: "Nu puteţi adăuga proprietăţi la această căutare.<br/>Toate proprietăţile mapate disponibile sunt deja în criteriile de căutare, şi fiecare proprietate poate fi adăugată o singură dată.",
		unified_search_mapping_not_viewable: "Proprietăţile şablonului Box nu pot fi afişate în rezultatele căutării. Dacă vreţi să adăugaţi această mapare ca coloană, trebuie să mapaţi cel puţin o proprietate care nu este o proprietate de şablon Box. De exemplu, puteţi selecta o proprietate din altă magazie.",

		unified_search_returned_more: "Cel puţin o magazie a depăşit numărul maxim de rezultate permis.",
		unified_search_partial_failure: "A apărut o eroare pe cel puţin o magazie.",
		unified_search_partial_failure_and_returned_more: "A apărut o eroare pe cel puţin o magazie şi cel puţin o magazie a depăşit numărul maxim de rezultate permis.",
		unified_search_see_analysis: "Vedeţi analiza rezultatelor.",
		unified_search_analysis_intro_returned_more: "Pentru fiecare magazie care a depăşit numărul maxim de rezultate permis rafinaţi criteriile de căutare pentru a returna mai puţine rezultate. Sau, puteţi rula căutarea pe o singură magazie pentru a returna mai multe rezultate decât maximul admis pentru o căutare pe magazii multiple.",
		unified_search_analysis_intro_partial_failure: "Examinaţi informaţiile erorii returnate de magazie sau magazii. Dacă este cazul, rezolvaţi erorile şi rulaţi din nou căutarea pe mai multe magazii.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Pentru fiecare magazie unde a apărut eroarea, încercaţi să rezolvaţi problema şi rulaţi căutarea din nou.<br/><br/>Pentru fiecare magazie care a depăşit numărul maxim de rezultate permis rafinaţi criteriile de căutare pentru a returna mai puţine rezultate. Sau, puteţi rula căutarea pe o singură magazie pentru a returna mai multe rezultate decât maximul admis pentru o căutare pe magazii multiple.",
		unified_search_results_found: "Rezultate găsite",
		unified_search_maximum_allowed: "Maximum permis",
		unified_search_maximum_exceeded: "A fost depăşit maximul",

		unified_search_mapping_rule_box: "Această proprietate nu poate fi adăugată la mapare.<p>Proprietatea ${0} din magazia ${1} este deja în altă mapare, iar proprietăţile care pot fi căutate din această magazie pot fi incluse într-o singură mapare pe căutare.<br/>Selectaţi o altă proprietate pentru a o adăuga la mapare.</p>",
		unified_search_mapping_rule_repository: "Proprietatea nu poate fi adăugată la mapare.<br/>Maparea include deja o proprietate din magazia ${0}. O mapare poate include o singură proprietate dintr-o magazie.<br/>Selectaţi o magazie diferită din care să adpugaţi o proprietate sau creaţi o mapare nouă pentru proprietatea selectată.",
		unified_search_mapping_rule_data_type: "Proprietatea nu poate fi adăugată la mapare.<br/>O proprietate ${0} nu poate fi mapată la o proprietate ${1}. Selectaţi o proprietate diferită de mapat, sau creaţi o nouă mapare pentru proprietatea selectată.<br/>Pentru informaţii suplimentare despre ce proprietate poate fi mapată, vedeţi legătura Aflaţi mai multe din textul introductiv din partea de sus a acestei ferestre.",
		unified_search_mapping_rule_cardinality: "Proprietatea nu poate fi adăugată la mapare.<br/>Toate proprietăţile din mapare trebuie să suporte fie valori unice, fie valorile multiple. Proprietatea selectată suportă ${0}, iar proprietăţile din mapare suportă ${1}.<br/>Selectaţi o proprietate diferită pentru a o adăuga în mapare sau creaţi o nouă mapare pentru proprietatea selectată.",
		unified_search_mapping_rule_fixed_value: "Proprietatea nu poate fi adăugată la mapare.<br/>Maparea include deja o proprietate cu valoare fixă. O mapare poate include doar o singură proprietate cu o valoare fixă.<br/>Selectaţi o proprietate diferită pentru a o adăuga în mapare sau creaţi o nouă mapare pentru proprietatea selectată.",
		unified_search_mapping_rule_child_component: "Proprietatea nu poate fi adăugată la mapare.<br/>O proprietate cu o componentă copil nu poate fi mapată cu alte proprietăţi. Dacă doriţi să fiţi în măsură de a căuta această proprietate, creaţi o nouă mapare pentru proprietatea selectată.",
		unified_search_mapping_rule_operator_intersection: "Proprietatea nu poate fi adăugată la mapare.<br/>Toate proprietăţile din mapare trebuie să aibă în comun unul sau mai mulţi operatori. Totuşi, proprietatea ${0} nu are niciun operator în comun cu celelalte proprietăţi din mapare.<br/>Dacă este cazul, selectaţi o proprietate diferită. Dacă trebuie să includeţi proprietatea selectată, lucraţi împreună cu administratorul de sistem pentru a edita operatorii care sunt asociaţi cu proprietatea.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Setări avansate",
		advanced_search_options_intro: "Setaţi opţiunile criteriului avansat.",
		advanced_search_options_editable: "Editabilă",
		advanced_search_options_readonly: "Numai citire",
		advanced_search_options_required: "Necesară",
		advanced_search_options_hidden: "Ascuns",
		advanced_search_options_property_editable:"Proprietatea este:",
		advanced_search_options_operators:"Operatori:",
		advanced_search_options_use_all:"Utilizare toţi",
		advanced_search_options_use_selected:"Utilizare selectaţi",
		advanced_search_options_operators_filtered: "Operatori filtraţi",
		// Data types in lowercase
		data_type_boolean: "boolean",
		data_type_date: "dată",
		data_type_time: "oră",
		data_type_timestamp: "amprentă de timp",
		data_type_decimal: "valoare zecimală",
		data_type_double: "număr cu virgulă mobilă",
		data_type_short: "întreg",
		data_type_integer: "întreg",
		data_type_long: "întreg",
		data_type_string: "şir de text",
		data_type_string_alpha: "şir alfabetic",
		data_type_string_alphanum: "şir alfanumeric",
		data_type_string_ext: "şir alfanumeric extins",
		data_type_string_num: "şir numeric",
		data_type_binary: "binar",
		data_type_object: "obiect",
		data_type_guid: "identificator unic global",
		data_type_user: "utilizatori",
		data_type_child_component: "componentă copil",

		/* Print Dialog */
		print_title: "Tipărire",
		print_message: "Tipărire: ${0}",
		print_print_button: "Tipărire",
		print_clean_margins_button: "Setare toate la 0",
		print_type: "Tip imprimantă:",
		print_printer_server_options: "Opţiuni tipărire server",
		print_printer_properties: "Proprietăţi imprimantă",
		print_printer_fax_properties: "Proprietăţi fax",
		print_printer_name: "Nume imprimantă:",
		print_fax_recipient: "Destinatar",
		print_fax_sender: "Expeditor",
		print_copies: "Copii:",
		print_local_orientation: "Orientare",
		print_local_orientation_landscape: "Peisaj",
		print_local_orientation_portrait: "Portret",
		print_local_margins: "Margini",
		print_local_margins_top: "Sus",
		print_local_margins_bottom: "Jos",
		print_local_margins_left: "Stânga",
		print_local_margins_right: "Dreapta",
		print_printer_server: "Server",
		print_printer_local: "Local",
		print_property_class: "Clasă:",
		print_property_routing: "Rutare:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Nod:",
		print_property_writer: "Scriitor:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Dest:",
		print_property_forms: "Formulare:",
		print_property_faxnotes: "Note:",
		print_property_faxcompany: "Companie:",
		print_property_faxnumber: "Număr fax:",
		print_property_faxname: "Nume:",
		print_property_faxsendertelnumber: "Număr de telefon:",
		print_property_faxcoverpage: "Copertă:",
		print_property_faxsubject: "Subiect:",
		print_saveoptions: "Salvare opţiuni tipărire",
		print_property_bannerpage: "Utilizare pagină banner",
		print_print_with_info_fields: "Tipărire cu câmpuri info",
		print_field_from: "De la",
		print_field_to: "Către",
		print_invalid_value_class: "Caracterele valide sunt A-Z sau 0-9",
		print_invalid_value_pagedef: "Caracterele valide sunt caractere alfabetice sau numerice, sau caracterele @, # sau $",
		print_invalid_value_writer: "Caracterele valide sunt caractere alfabetice sau numerice, sau caracterele @, # sau $",
		print_invalid_value_formdef: "Caracterele valide sunt caractere alfabetice sau numerice, sau caracterele @, # sau $",
		print_invalid_value_forms: "Caracterele valide sunt caractere alfabetice sau numerice, sau caracterele @, # sau $",
		print_invalid_value_margin: "Numerele valide sunt între ${0} şi ${1}",
		print_status_message: "${0} documente au fost trimise la imprimanta ${1}.",

		print_applet_init_error: "Apletul de tipărire nu poate fi pornit.",
		print_applet_init_error_explanation: "Această problemă apare din următoarele motive: <br/><br/><ul><li>Java Runtime Environment (JRE) nu este instalat pe staţia dumneavoastră de lucru.</li><li>Plug-in-ul Java nu este activat în browser-ul dumneavoastră web.</li><li>Versiunea JRE de pe staţia dumneavoastră de lucru nu este compatibilă cu versiunea de IBM Content Navigator.</li><li>Browser-ul a dat timeout aşteptând ca apletul de tipărire să pornească.</li></ul>",
		print_applet_init_error_userResponse: "Puteţi finaliza următorii paşi pentru a rezolva problema cu JRE:<br/><br/><ol><li>Asiguraţi-vă că JRE-ul este instalat pe staţia dumneavoastră de lucru.</li><li>Asiguraţi-vă că plug-in-ul Java este activat în browser-ul dumneavoastră web.</li><li>Asiguraţi-vă că versiunea de JRE de pe staţia dumneavoastră de lucru este compatibilă cu IBM Content Navigator şi încercaţi din nou. O listă a versiunilor suportate este inclusă în documentul <i>Cerinţele preliminare hardware şi software pentru IBM Content Navigator</i> de pe site-ul de Suport software IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Pagina copertă",
		daeja_print_selected_documents_title: "Selectare documente",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Potrivire cu toate criteriile căutării",
		match_any_criteria: "Potrivire cu oricare din criteriile căutării",
		include_subfolders_summary: "${0} (include subfoldere)",
		browse_button: "Răsfoire&hellip;",
		search_for: "Căutare după:",
		object_type_documents: "Documente",
		object_type_folders: "Foldere",
		object_type_documents_folders: "Documente şi foldere",
		object_type_web_links: "Legături web",
		object_type_documents_folders_web_links: "Documente, foldere şi legături Web",

		/* SelectSearchFolderDialog */
		search_in: "Căutare în:",
		include_subfolders: "Includere subfoldere",

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
		locked_item_icon_title: "Blocat de ${0}",
		checked_out_icon_title: "Înregistrat la ieşire de ${0}",
		major_minor_version_icon_title: "Versiune majoră cu versiuni minore",
		suspended_icon_title: "Fluxul de lucru este suspendat",
		on_hold_icon_title: "În aşteptare",
		has_notes_icon_title: "Are note",
		record_icon_title: "Declarat ca înregistrare",
		compound_document_icon_title: "Document compus",
		validateTemplate_icon_title: "Şablonul de spaţiu de echipă are nevoie de validare",
		offlineTemplate_icon_title: "Şablonul de spaţiu de echipă este offline",
		offlineTeamspace_icon_title: "Spaţiul de echipă este offline",
		pending_delete_icon_title: "Spaţiul de echipă aşteaptă ştergerea",
		delete_error_icon_title: "Spaţiul de echipă nu a putut fi şters",
		defaultTemplate_icon_title: "Şablon de spaţiu de echipă implicit",
		teamspace_icon_title: "Spaţiu de echipă",
		teamspace_template_icon_title: "Şablon de spaţiu de echipă",
		has_bookmark_icon_title: "Are un semn de carte",
		read_only_icon_title: "Numai citire",
		no_results_were_found: "Nu s-a găsit niciun rezultat.",
		folder_is_empty: "Folderul este gol.",
		no_checked_out_items: "Nu aveţi niciun articol înregistrat la ieşire.",
		inbasket_is_empty: "In-basket este gol.",
		worklist_is_empty: "Lista de lucru este goală.",
		tracker_milestone_completed: "Finalizat",
		stepprocessor_attachments_title: "Cuprins",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Blocare articole",
		unlock_items: "Deblocare articole",
		checkin_item: "Înregistrare articol la intrare",

		/* Help */
		learn_more: "Aflaţi mai multe",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Deschidere spaţiu echipă",
		repository_tab_createWorkspace: "Spaţiu de echipă nou",
		repository_tab_createWorkspaceTemplate: "Şablon spaţiu echipă nou",
		repository_tab_DefaultTemplate: "Implicit",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Acest task copiată documente.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Nu aveţi privilegii de editare pentru şablonul de spaţiu echipă selectat.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Sunteţi sigur că doriţi să ştergeţi spaţiul de echipă ${0}? <br><br>Numai documentele care sunt îndosariate în alte foldere în magazie rămân în magazie. Toate documentele care sunt îndosariate doar în spaţiul de echipă vor fi şterse.",
		teamspaceDecommissionLabel: "Ştergere:",
		teamspaceDecommissionDescription: "Ştergerea spaţiului de echipă va înlătura acest spaţiu de echipă din server: Indicaţi cum sunt gestionate artefactele spaţiului de echipă.",
		teamspaceDecommissionOptions: "Ştergeţi opţiunile spaţiului de echipă",
		teamspaceDecommissionDeleteAll: "Ştergeţi toate artefactele spaţiului de echipă",
		teamspaceDecommissionReFileAll: "Completaţi toate artefactele spaţiului de echipă",
		teamspaceDecommissionReFileDestination: "Mutare la:",
		teamspaceDecommissionReFileIn: "Completare în",
		teamspaceDecommissionTaskName: "Taskul de ştergere a spaţiului de echipă",
		teamspaceDecommissionTaskDescription: "Acest task şterge un spaţiu de echipă din magazie.",
		teamspaceDecommissionDeletionStarted: "Spaţiul de echipă a fost planificat pentru ştergere",
		teamspaceDecommissionDeletionConnectionFailed: "Taskul de a şterge un spaţiu de echipă nu a putut fi rulat pentru că nu s-a putut conecta la magazie. Asiguraţi-vă că acreditările administratorului magaziei sunt corecte.",

		teamspace_edit_properties_notsupported: "Puteţi edita proprietăţile spaţiilor de echipă din vizualizarea Spaţii de echipă.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Spaţiul de echipă este offline şi poate fi deschis numai de proprietarii spaţiului de echipă",

		/* Teamspace Builder widget */
		workspace_validation_document: "Document:",
		workspace_validation_folder: "Folder:",
		workspace_validation_ets: "Următoarele şabloane de intrare nu sunt disponibile în această magazie şi au fost înlăturate din lista cu şabloanele de intrare selectate:",
		workspace_validation_classes: "Următoarele clase nu sunt disponibile în această magazie şi au fost înlăturate din lista cu clasele selectate:",
		workspace_validation_searches: "Următoarele căutări nu sunt disponibile în această magazie şi au fost înlăturate din lista cu căutările selectate:",
		workspace_validation_docs_folders: "Următoarele documente şi foldere nu sunt disponibile în această magazie şi au fost înlăturate din lista cu articolele incluse:",
		workspace_change_template_confirmation_question: "Dacă selectaţi un şablon diferit, toate modificările dumneavoastră se vor pierde. Vreţi să continuaţi?\n",
		workspace_delete_item_confirmation_question: "Vreţi să înlăturaţi articolul ${0}?\n",
		workspace_delete_role_confirmation_question: "Vreţi să înlăturaţi rolul ${0}?\n",
		workspace_delete_confirmation_question: "Dacă ştergeţi un spaţiu de echipă, va fi şters doar containerul pentru spaţiu de echipă. Folderele şi documentele din spaţiul de echipă rămân în magazie, şi le puteţi găsi prin efectuarea unei căutări. Pentru a şterge conţinutul spaţiului de echipă, ştergeţi mai întâi articolele din spaţiul de echipă, iar apoi ştergeţi spaţiul de echipă.<br><br>Doriţi să ştergeţi spaţiul de echipă ${0}?",
		workspacebuilder_instance_template_name_header: "Nume şablon spaţiu de echipă",
		workspacebuilder_instance_template_description_header: "Descriere",

		workspacebuilder_template_tooltip_name: "Numele şablonului nu poate conţine niciunul din următoarele caractere: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Numele spaţiului de echipă nu poate conţine niciunul din următoarele caractere: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Furnizaţi o descriere care va permite utilizatorilor să facă selecţia corectă din lista de şabloane. De exemplu, aţi putea include informaţii despre utilizarea sau utilizatorii intenţionaţi ai şablonului.",
		workspacebuilder_instance_tooltip_description: "Furnizaţi o descriere care va permite utilizatorilor să distingă între acest spaţiu de echipă şi alte spaţii de echipă.",

		workspacebuilder_template_edit_properties_pane: "Editare şablon spaţiu echipă",
		workspacebuilder_instance_properties_pane: "Definire spaţiu echipă",
		workspacebuilder_template_properties_pane: "Definire şablon spaţiu echipă",

		workspacebuilder_instance_security_pane: "Setare securitate spaţiu echipă",
		workspacebuilder_template_security_pane: "Setare securitate şablon",

		workspacebuilder_layout_pane: "Selectare dispunere",
		workspacebuilder_search_templates_pane: "Selectare căutări",
		workspacebuilder_document_folders_pane: "Includere foldere şi documente",
		workspacebuilder_doctypes_entryTemplates_pane: "Selectare clase sau şabloane de intrare",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Selectare clase",
		workspacebuilder_security: "Securitate spaţiu echipă",

		workspacebuilder_roles_pane: "Selectare roluri",
		workspacebuilder_security: "Securitate",

		workspacebuilder_properties_templates: "Şabloane disponibile:",
		workspacebuilder_available_templates: "Căutări disponibile:",
		workspacebuilder_selected_templates: "Căutări selectate:",
		workspacebuilder_templates_name: "Nume căutare",

		workspacebuilder_available_entryTemplates: "Şabloane de intrare disponibile:",
		workspacebuilder_selected_entryTemplates: "Şabloane de intrare selectate:",

		workspacebuilder_item_classes: "Clase disponibile:",
		workspacebuilder_item_classes_selected: "Clase selectate:",
		workspacebuilder_properties_select_template: "Selectaţi un şablon de folosit pentru acest spaţiu de echipă.",
		workspacebuilder_template_properties: "Definire şablon spaţiu echipă",
		workspacebuilder_instance_properties: "Definire spaţiu echipă",
		workspacebuilder_template_introText: "Specificaţi componentele comune pe care vreţi să le includeţi în fiecare spaţiu de echipă care este creat din acest şablon folosind selecţiile din navigare. Când sunteţi gata, faceţi clic pe <b>Sfârşit</b> pentru a face şablonul disponbil altor utilizatori, care-l pot folosi pentru a crea noi spaţii de echipă.",
		workspacebuilder_instance_introText: "Echipele folosesc spaţii de echipă pentru a partaja şi a lucra cu anumite seturi de documente. Furnizaţi un nume şi o descriere cu sens pentru acest spaţiu de echipă, pentru a permite utilizatorilor să distingă acest spaţiu de echipă de celelalte. Puteţi personaliza spaţiul de echipă incluzând căutări suplimentare, clase sau şabloane de intrare, documente şi foldere.",

		workspacebuilder_template_search_template_introText: "Selectaţi căutările implicite pe care vreţi să le includeţi în fiecare spaţiu de echipă care este creat din acest şablon. Dacă nu este selectată nicio căutare, utilizatorul spaţiului de echipă vede toate căutările la care are acces. Cu permisiunea corespunzătoare, utilizatorii pot partaja şi adăuga căutări în spaţiul de echipă.",
		workspacebuilder_instance_search_template_introText: "Includeţi căutări care vor permite utilizatorilor spaţiului de echipă să finalizeze mai eficient taskuri. Dacă nu este inclusă nicio căutare, utilizatorii spaţiului de echipă vor vedea toate căutările la care au permisiune. De asemenea, utilizatorii pot adăuga şi partaja căutări în spaţiul de echipă cu permisiunile corespunzătoare.",

		workspacebuilder_template_roles_introText: "Utilizatorii spaţiului de echipă sunt alocaţi la roluri. Rolurile specifică taskurile pe care utilizatorii le pot realiza. Faceţi clic pe pictogramele de lângă fiecare rol pentru a vedea taskurile permise. Alegeţi rolurile care sunt corespunzătoare pentru spaţiul de echipă.",
		workspacebuilder_template_roles_modify_introText: "Aveţi posibilitatea să modificaţi permisiunile care sunt asociate cu fiecare rol din acest spaţiu de echipă. Ar trebui să informaţi membrii spaţiului de echipă când permisiunile acestora sunt modificate.",

		workspacebuilder_template_roles_header_name: "Nume rol",

		workspacebuilder_template_folders_introText: "Selectaţi folderele şi documentele implicite de inclus în fiecare spaţiu de echipă care este creat din acest şablon. Puteţi adăuga documente fie ca legături sau copii. Folosiţi legături pentru a indica spre documente din care nu doriţi mai multe copii, cum ar fi politicile sau procedurile. Creaţi copii ale documentelor pe care utilizatorii le vor modifica, cum ar fi şabloanele şi formularele.",
		workspacebuilder_instance_folders_introText: "Selectaţi folderele şi documentele implicite de inclus în spaţiul de echipă. Puteţi adăuga documente fie ca legături sau copii. Folosiţi legături pentru a indica spre documente din care nu doriţi mai multe copii, cum ar fi politicile sau procedurile. Creaţi copii ale documentelor pe care utilizatorii le vor modifica, cum ar fi şabloanele şi formularele.",

		workspacebuilder_template_roles_introText: "Selectaţi rolurile care vor fi incluse în fiecare spaţiu de echipă care este creat din acest şablon. De asemenea, puteţi crea noi roluri, pe care le puteţi folosi când creaţi alte şabloane de spaţiu de echipă.",
		workspacebuilder_instance_users_introText: "Într-un spaţiu de echipă, fiecare utilizator este alocat la unul sau mai multe roluri care specifică taskurile pe care utilizatorul le poate finaliza. Adăugaţi utilizatori în spaţiul de echipă şi alocaţi roluri utilizatorilor.",

		workspacebuilder_instance_navigation_pane_title: "Constructor spaţiu echipă",
		workspacebuilder_template_navigation_pane_title: "Constructor şablon spaţiu echipă",

		workspacebuilder_roles_roles_nopermissions: "Nu este selectată nicio permisiune pentru rolul {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Roluri selectate:",
		workspacebuilder_roles_available_roles: "Roluri disponibile:",
		workspacebuilder_roles_privilege_header: "Permisiune",
		workspacebuilder_roles_select_role: "Selectare rol",
		workspacebuilder_roles_select_permission: "Selectare permisiune",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Un rol cu numele {0} există deja. Trebuie să specificaţi un nume unic pentru rol. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nume rol:",
		workspacebuilder_roles_edit_dialog_role_description: "Descriere rol:",
		workspacebuilder_roles_edit_dialog_title_new: "Rol nou",
		workspacebuilder_roles_edit_dialog_title_edit: "Editare rol",

		workspacebuilder_roles_privileges_header: "Permisiuni pentru rolul {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Permisiuni document:",
		workspacebuilder_roles_priv_group_folder: "Permisiuni folder:",
		workspacebuilder_roles_priv_group_teamspace: "Permisiuni spaţiu echipă",
		workspacebuilder_roles_priv_group_item: "Permisiuni document şi folder:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Permisiuni de gestionare",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Utilizatorii cu această permisiune pot gestiona accesul la documentele şi folderele din spaţiul de echipă. Această permisiune include permiterea utilizatorilor să şteargă, să editeze proprietăţi, să creeze subfoldere, şi altele.",

		workspacebuilder_roles_priv_deleteItems: "Ştergere",
		workspacebuilder_roles_plbl_deleteItems: "Utilizatorii cu această permisiune pot şterge documente şi foldere din spaţiul de echipă.",

		workspacebuilder_roles_priv_createItems: "Creare",
		workspacebuilder_roles_plbl_createItems: "Utilizatorii cu această permisiune pot crea documente şi foldere în spaţiul de echipă.",

		workspacebuilder_roles_priv_viewItemProperties: "Vizualizare proprietăţi",
		workspacebuilder_roles_plbl_viewItemProperties: "Utilizatorii cu această permisiune pot vizualiza proprietăţile documentelor şi folderelor în spaţiul de echipă, care includ proprietăţile sistemului.",

		workspacebuilder_roles_priv_modifyItemProperties: "Editare proprietăţi",
		workspacebuilder_roles_plbl_modifyItemProperties: "Utilizatorii cu această permisiune pot edita proprietăţile documentelor şi folderelor în spaţiul de echipă.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gestionare permisiuni folder",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Utilizatorii cu această permisiune pot gestiona accesul la folderele din spaţiul de echipă. Această permisiune include permiterea altor utilizatori să şteargă foldere, să editeze proprietăţi de foldere, să creeze subfoldere, şi altele.",

		workspacebuilder_roles_priv_deleteFolders: "Ştergere foldere",
		workspacebuilder_roles_plbl_deleteFolders: "Utilizatorii cu această permisiune pot şterge foldere din spaţiul de echipă.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Editare proprietăţi folder",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Utilizatorii cu acestă permisiune pot edita proprietăţile folderelor în spaţiul de echipă.",

		workspacebuilder_roles_priv_createSubfolders: "Creare subfoldere",
		workspacebuilder_roles_plbl_createSubfolders: "Utilizatorii cu această permisiune pot crea foldere în spaţiul de echipă.",

		workspacebuilder_roles_priv_fileInFolders: "Adăugare în foldere",
		workspacebuilder_roles_plbl_fileInFolders: "Utilizatorii cu această permisiune pot adăuga o legătură din folderele din spaţiul de echipă la documente.",

		workspacebuilder_roles_priv_viewFolderProperties: "Vizualizare proprietăţi folder",
		workspacebuilder_roles_plbl_viewFolderProperties: "Utilizatorii cu această permisiune pot vizualiza proprietăţile folderelor din spaţiul de echipă, care includ proprietăţile sistemului.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gestionare permisiuni document",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Utilizatorii cu această permisiune pot gestiona accesul la documentele din spaţiul de echipă. Această permisiune include permiterea altor utilizatori să şteargă documente, să editeze proprietăţi de document, şi altele.",

		workspacebuilder_roles_priv_deleteDocuments: "Ştergere documente",
		workspacebuilder_roles_plbl_deleteDocuments: "Utilizatorii cu această permisiune pot şterge documente din spaţiul de echipă.",

		workspacebuilder_roles_priv_promoteVersions: "Promovare versiuni",
		workspacebuilder_roles_plbl_promoteVersions: "Utilizatorii cu această permisiune pot aloca un număr de versiune documentelor din spaţiul de echipă.",

		workspacebuilder_roles_priv_modifyContent: "Editare documente",
		workspacebuilder_roles_plbl_modifyContent: "Utilizatorii cu acestă permisiune pot edita proprietăţile documentelor din spaţiul de echipă.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Editare proprietăţi document",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Utilizatorii cu acestă permisiune pot edita proprietăţile documentelor din spaţiul de echipă.",

		workspacebuilder_roles_priv_viewContent: "Vizualizare documente",
		workspacebuilder_roles_plbl_viewContent: "Utilizatorii cu această permisiune pot vizualiza documente în spaţiul de echipă.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Vizualizare proprietăţi document",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Utilizatorii cu această permisiune pot vizualiza proprietăţile documentelor din spaţiul de echipă, inclusiv proprietăţile sistemului.",

		workspacebuilder_roles_priv_addNewSearches: "Adăugare căutări",
		workspacebuilder_roles_plbl_addNewSearches: "Utilizatorii cu această permisiune pot adăuga căutări în spaţiul de echipă. Implicit, căutarea nu este disponibilă altor utilizatori.",

		workspacebuilder_roles_priv_createNewSearches: "Creare căutări",
		workspacebuilder_roles_plbl_createNewSearches: "Utilizatorii cu această permisiune pot crea căutări noi, dar nu pot salva căutările. Dacă utilizatorii nu au această permisiune nu pot adăuga documente care sunt deja în magazie în spaţiul de echipă.",

		workspacebuilder_roles_priv_shareSearches: "Partajare căutări",
		workspacebuilder_roles_plbl_shareSearches: "Utilizatorii cu această permisiune pot partaja căutări pe care le creează cu alţi utilizatori ai spaţiului de echipă.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gestiune clase sau şabloane de intrare",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Utilizatorii cu această permisiune pot adăuga sau înlătura clase sau şabloane de intrare din spaţiul de echipă.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gestiune clase",
		workspacebuilder_roles_plbl_addRemoveClasses: "Utilizatorii cu această permisiune pot adăuga şi înlătura clase din spaţiul de echipă.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gestiune utilizatori spaţiu de echipă",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Utilizatorii cu această permisiune pot adăuga şi înlătura utilizatori şi grupuri din spaţiul de echipă. În plus, pot gestiona la ce roluri sunt alocaţi utilizatorii.",

		workspacebuilder_roles_priv_modifyRoles: "Modificare roluri",
		workspacebuilder_roles_plbl_modifyRoles: "Posesorii cu această permisiune pot modifica permisiunile rolului pentru spaţiul de echipă. Această permisiune este disponibilă doar pentru posesori.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Selectare utilizatori",
		workspacebuilder_users_add_users_and_groups_button: "Adăugare utilizatori şi grupuri...",
		workspacebuilder_users_users_or_group_header: "Utilizator şi grup",
		workspacebuilder_users_roles_header: "Roluri",

		workspacebuilder_users_role_header: "Rol",
		workspacebuilder_users_role_no_permissions: "Acest rol nu are permisiuni",
		workspacebuilder_users_available_roles_label: "Roluri disponibile:",
		workspacebuilder_users_selected_users_and_groups_label: "Utilizatori şi grupuri selectate:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Spaţiul de echipă nu poate fi salvat. Trebuie să specificaţi cel puţin un proprietar pentru acest spaţiu de echipă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Spaţiul de echipă nu poate fi salvat. Tuturor utilizatorilor le trebuie alocat un rol.",
		// end of select users

		workspacebuilder_search_templates: "Selectare căutări",
		workspacebuilder_search_add: "Adăugare căutare",
		workspacebuilder_properties_workspaceName: "Nume spaţiu de echipă:",
		workspacebuilder_properties_templateName: "Nume şablon:",
		workspacebuilder_properties_workspaceDescription: "Descriere spaţiu de echipă:",
		workspacebuilder_properties_templateDescription: "Descriere şablon:",
		workspacebuilder_properties_workspaceTemplate: "Şablon selectat:",
		workspacebuilder_properties_security: "Partajare şablon cu:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Mutare din spaţiu de echipă:",
		moveTeamspaceDocuments_security: "Partajare document cu:",
		moveTeamspaceDocuments_security_change: "Specificare securitate personalizată pentru articolele selectate",
		moveTeamspaceDocuments_item_type_level: "Nu puteţi selecta Ignorare securitate a articolelor selectate deoarece clasa articolului selectat este configurată pentru a utiliza numai securitate la nivel de clasă",
		moveTeamspaceDocuments_security_inherit: "Moştenire securitate din folderul de destinaţie",
		moveTeamspaceDocuments_file_info_text: "Puteţi muta aceste articole dintr-un spaţiu de echipă în altul sau într-un folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Nu aveţi drepturile corespunzătoare pentru a muta articolele în folderul selectat.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Nu aveţi drepturile necesare pentru a muta articolele din spaţiul de echipă.",
		moveTeamspaceDocuments_move_mixed_items: "Nu puteţi ignora securitatea articolelor selectate. Unele dintre articole nu sunt gestionate de spaţiul de echipă. Puteţi înlocui doar securitatea articolelor care sunt gestionate de spaţiul de echipă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Trebuie să specificaţi un nume pentru spaţiul de echipă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Trebuie să specificaţi un nume pentru şablonul spaţiului de echipă.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Numele spaţiului de echipă nu poate conţine niciunul din următoarele caractere: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Numele şablonului nu poate conţine niciunul din următoarele caractere: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Legătură la document",
		workspacebuilder_folders_makeDocCopy: "Copiere document",
		workspacebuilder_folders_newfolder: "Folder nou",
		workspacebuilder_folders_local_drive: "Din director local",
		workspacebuilder_folders_from_repo: "Din magazie",
		workspacebuilder_folders_add_doc: "Adăugare document",
		workspacebuilder_folders_grid_name: "Nume",
		workspacebuilder_folders_props: "Proprietăţi",
		workspacebuilder_folders_remove: "Înlăturare",
		workspacebuilder_folders_delete: "Ştergere",
		workspacebuilder_folders_adddoc_local: "Adăugare document de pe unitate locală",
		workspacebuilder_folders_adddoc_repo: "Adăugare document din magazie",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Numele de folder specificat există deja. Specificaţi un alt nume de folder.",

		workspacebuilder_classes_title: "Selectare clase sau şabloane de intrare",
		workspacebuilder_classes_title_cm: "Selectare clase",
		workspacebuilder_classes_template_introText: "Specificaţi dacă spaţiile de echipă care sunt create din acest şablon vor folosi clase şabloane de intrare pentru a adăuga documente în magazie. Dacă nu este selectată nicioclasă, spaţiile de echipă vir vedea toate clasele la care au acces.  Utilizatorul poate modifica lista de clase sau şabloane de intrare din spaţiul de echipă dacă are permisiunea corespunzătoare.",
		workspacebuilder_classes_template_introText_cm: "Selectaţi clasele pe care utilizatorii le pot folosi pentru a adăuga documente în magazie. Dacă nu este selectată nicioclasă, utilizatorii spaţiului de echipă vor vedea toate clasele la care au acces. Utilizatorii pot modifica lista de clase din spaţiul de echipă dacă au permisiunile corespunzătoare.",
		workspacebuilder_classes_instance_introText: "Selectaţi clasele sau şabloanele de intrare pe care utilizatorii le pot folosi pentru a adăuga documente în magazie. Când nu este selectată nicioclasă, utilizatorii spaţiului de echipă vor vedea toate clasele la care au permisiune. Utilizatorii pot modifica lista de clase sau şabloane de intrare din spaţiul de echipă dacă au permisiunile corespunzătoare.",
		workspacebuilder_classes_instance_introText_cm: "Selectaţi clasele pe care utilizatorii le pot folosi pentru a adăuga documente în magazie. Când nu este selectată nicioclasă, utilizatorii spaţiului de echipă vor vedea toate clasele la care au permisiune. Utilizatorii pot modifica lista de clase din spaţiul de echipă dacă au permisiunile corespunzătoare.",
		workspacebuilder_classes_selection: "Selectare clase:",
		workspacebuilder_classes_list: "Clase disponibile:",
		workspacebuilder_classes_columns_default: "Implicit",
		workspacebuilder_classes_columns_className: "Nume clasă",
		workspacebuilder_classes_type_classes: "Folosire clase pentru adăugarea documentelor",
		workspacebuilder_classes_type_classes_tooltip: "Clasele includ proprietăţi asociate pentru ca documentele să poată fi localizate pentru utilizare viitoare.",
		workspacebuilder_classes_type_entryTemplates: "Folosire şabloane de intrare pentru adăugarea documentelor",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Şabloanele de intrare asigură faptul că informaţiile care sunt furnizate pentru fiecare document sunt consecvente şi folosesc valori predefinite.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nume şablon de intrare",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Descriere",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Trebuie să adăugaţi cel puţin un şablon de intrare în spaţiul de echipă.",

		workspacebuilder_classes_new: "Clasă nouă",
		workspacebuilder_classes_add: "Adăugare clasă",
		workspacebuilder_entryTemplate_add: "Adăugare şablon de intrare",
		workspacebuilder_add_list: "Adăugare",
		workspacebuilder_makeDefault_list: "Faceţi valoare implicită",
		workspacebuilder_removeDefault_list: "Înlăturare valoare implicită",

		workspacebuilder_roles_title: "Selectare roluri",
		workspacebuilder_roles_title_modify: "Modificare roluri",

		workspacebuilder_selection_moveup: "Mutare în sus",
		workspacebuilder_selection_movedown: "Mutare în jos",
		workspacebuilder_selection_remove: "Înlăturare",
		workspacebuilder_selection_add: "Adăugare",
		workspacebuilder_selection_create_new_search: "Căutare nouă...",
		workspacebuilder_selection_create_new_role: "Rol nou...",
		workspacebuilder_selection_make_role_available: "Faceţi disponibil",
		workspacebuilder_selection_make_role_available_tooltip: "Împarte rolul selectat cu alte şabloane. Trebuie să alocaţi cel puţin o permisiune la rol pentru a-l partaja.",

		workspacebuilder_navigation_next: "Următor",
		workspacebuilder_navigation_finish: "Sfârşit",
		workspacebuilder_navigation_validate: "Validare",
		workspacebuilder_navigation_previous: "Anterior",
		workspacebuilder_navigation_cancel: "Anulare",
		workspacebuilder_navigation_customize: "Personalizare",

		workspacebuilder_search_dialog_title: "Căutare",
		workspacebuilder_dialog_close: "Închidere",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilitate şablon:",
		workspace_properties_templateState_tooltip: "Faceţi şablonul indisponibil pentru a împiedica utilizatorii să creeze spaţii de echipă ce folosesc acest şablon.",
		workspace_properties_dialog_title: "Proprietăţi şablon",
		workspace_properties_online_radio_option_label: "Faceţi disponibil",
		workspace_properties_offline_radio_option_label: "Faceţi indisponibil",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Vreţi să anulaţi fără a vă salva modificările?",
		workspacebuilder_cancel_confirmation_button: "Da",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Toate articolele invalide vor fi eliminate din şablon, iar şablonul este pus la dispoziţia utilizatorilor.  Doriţi să validaţi acest şablon pentru spaţiu de echipă?",
		workspacebuilder_validate_confirmation_button: "Da",
		workspacebuilder_validate_confirmation_title: "Validare",

		/* Entry templates builder */
		entry_templates: "Manager şabloane de intrare",
		no_entry_templates_were_found: "Nu există spaţii de echipă de intrare",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtru",

		/* Roleselector widget */
		role_selector_name: "Roluri:",

		/* User Group picker widget */
		directory_label: "Director:",
		scope_label: "Căutare după:",
		name_starts_with_label: "Numele începe cu",
		name_contains_label: "Numele conţine",
		display_name_contains_label: "Numele de afişare conţine",
		starts_with_label: "Începe cu:",
		available_label: "Disponibil:",
		available_heading: "Disponibil",
		selected_label: "Selectat:",
		selected_heading: "Selectat",
		available_repositories_label: "Magazii disponibile",
		selected_repositories_label: "Magazii selectate",
		default_repository: "Magazie implicită:",
		default_repository_placeholder: "Selectaţi o magazie",
		default_role_placeholder: "Selectaţi un rol",
		menu_label_placeholder: "Selectaţi sau introduceţi o etichetă",
		default_repository_hover: "Specificaţi magazia care este selectată implicit când utilizatorii se loghează în clientul web de pe acest desktop.<br><br><b>Important:</b> Trebuie să adăugaţi magazii în desktop-ul listei de magazii selectate înainte de a putea specifica magazia implicită.",
		default_repository_workflow_hover: "<b>Reţineţi:</b> Puteţi configura spaţiile de aplicaţie numai pentru magaziile care sunt configurate pentru acest desktop.",
		remove_label: "Înlăturare",
		users_label: "Utilizatori",
		groups_label: "Grupuri",
		user_or_group_name_label: "Nume utilizator sau grup",
		user_or_group_name_hover: "Introduceţi numele unui utilizator sau grup care este valid în magazie.  Numele nu este validat.",
		user: "Utilizator",
		group: "Grup",
		name: "Nume:",
		displayName: "Nume afişare",
		display_name: "Nume de afişare:",
		shortName: "Nume scurt:",
		distinguishedName: "Nume distinctiv:",
		search_tooltip: "Căutare",
		add_tooltip: "Adăugare",
		add_selected_tooltip: "Adăugare în lista selectată",
		remove_tooltip: "Înlăturare",
		remove_selected_tooltip: "Înlăturare din lista selectată",
		add_to_selected_tooltip: "Adăugare",
		remove_from_selected_tooltip: "Înlăturare",
		move_up_selected_tooltip: "Mutare în sus",
		move_down_selected_tooltip: "Mutare în jos",
		advanced_search_options_tooltip: "Setări avansate",
		move_right_selected_tooltip: "Mutare în submeniu",
		move_left_selected_tooltip: "Mutare din submeniu",
		add_separator: "Adăugare separator",
		menu_item_label: "Etichetă articol de meniu:",
		add_menu_label: "Adăugare submeniu",
		menu_label: "Etichetă submeniu:",
		menu_label_info: "<b>Important:</b> Trebuie să adăugaţi cel puţin un articol de meniu în acest submeniu înainte de a putea salva acest meniu.",
		menu_dropdown_label: "Eticheta butonului derulant:",
		menu_dropdown_label_info: "<b>Important:</b> Trebuie să adăugaţi cel puţin un articol de meniu pentru acest buton derulant înainte de a salva această bară de unelte.",
		no_item_found: "Nu s-a găsit niciun rezultat.",
		me: "Mine",
		anyone: "Oricine",
		specific_users: "Utilizatori specifici",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Căutarea a returnat mai mult de {0} rezultate. Modificaţi-vă criteriile pentru a vă restrânge căutarea.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Rezultatele căutării conţin articole care au fost deja selectate. Acele articole nu se vor afişa în rezultatele căutării.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "S-au returnat mai mult de {0} rezultate. Folosiţi filtrul pentru a restrânge rezultatele",

		user_already_selected: "Utilizatorul specificat este deja selectat.  Specificaţi alt utilizator.",
		group_already_selected: "Grupul specificat este deja selectat.  Specificaţi alt grup.",
		user_cannot_select_self: "Nu vă puteţi adăuga pe dumneavoastră. Specificaţi alt utilizator.",

		/* Select User Group dialog */
		select_user_group_add_label: "Adăugare",
		select_user_group_cancel_label: "Anulare",
		add_users_groups_label: "Adăugare utilizatori şi grupuri",
		add_user_group_label: "Adăugare utilizator şi grup",
		add_users_label: "Adăugare utilizatori",
		add_user_label: "Adăugare utilizator",
		add_label: "Adăugare:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Documentele următoare au modificări de adnotări nesalvate:",
		viewer_confirm_to_proceed: "Doriţi să continuaţi şi să pierdeţi modificările?",
		viewer_warn_has_changes: "Modificările dumneavoastră nesalvate vor fi ignorate.",
		viewer_warn_is_printing: "Tipărirea care este în curs s-ar putea să nu se finalizeze.",
		viewer_warn_confirm_exit: "Vreţi să ieşiţi?",
		viewer_prompt_save_changes: "Documentul următor are modificări de adnotări nesalvate, care vor fi pierdute:<br>${0}<br><br>Vreţi să salvaţi modificările?",
		viewer_prompt_mergesplit_changes: "Documentele următoare au modificări nesalvate:<br>${0}<br><br>Doriţi să continuaţi şi să pierdeţi modificările?",
		viewer_prompt_mergesplit_tab_changes: "Documentul următor are modificări nesalvate:<br>${0}<br><br>Doriţi să continuaţi şi să pierdeţi modificările?",
		viewer_new_item_name: "Document nou",
		viewer_top_frame: "Cadru sus:",
		viewer_bottom_frame: "Cadru jos:",
		viewer_left_frame: "Cadru stânga:",
		viewer_right_frame: "Cadru dreapta:",
		viewer_viewer_frame: "Cadru Vizualizator:",
		viewer_properties_frame: "Cadru Proprietăţi",
		viewer_comment_frame: "Cadru Comentariu:",
		viewer_mergesplit_on: "Vizualizare",
		viewer_mergesplit_off: "Combinare şi divizare",
		viewer_mergesplit_context_menu_move: "Mutare",
		viewer_mergesplit_context_menu_rename: "Redenumire",
		viewer_mergesplit_context_menu_delete: "Ştergere",
		//move to new window
		viewer_move_to_new_window:"Mutare la fereastră nouă",
		viewer_continue:"Renunţare la modificări",
		viewer_return_to_original_window:"Întoarcere la fereastra originală",
		viewer_switch_window:"Comutare fereastră",
		viewer_prompt_lost_changes:"Documentul ${0} este deschis curent în altă fereastră. Acel document are modificări nesalvate.<br><br>Vreţi să comutaţi la acea fereastră ca să salvaţi modificările sau renunţaţi la modificări şi îl deschideţi în această fereastră?",
		viewer_mergesplit_fallback_info: "Puteţi doar finaliza acţiunea Combinare şi divizare pe documentele care sunt în aceeaşi magazie.",
		viewer_tabbed_layout: "Vizualizare ca file",
		viewer_tabbed_layout_highcontrast: "File",
		viewer_split_vertical_layout: "Divizare panouri în partea de sus şi în partea de jos",
		viewer_split_vertical_layout_highcontrast: "Sus şi jos",
		viewer_split_horizontal_layout: "Divizare panouri în partea din stânga şi din dreapta",
		viewer_split_horizontal_layout_highcontrast: "Stânga şi dreapta",
		viewer_add_vertical_layout: "Filă nouă în partea de jos",
		viewer_add_vertical_layout_highcontrast: "Fila de jos",
		viewer_add_horizontal_layout: "Filă nouă la dreapta",
		viewer_add_horizontal_layout_highcontrast: "Filă la dreapta",
		viewer_add_horizontal_layout_rtl: "Filă nouă la stânga",
		viewer_add_horizontal_layout_rtl_highcontrast: "Filă la stânga",
		viewer_split_properties_layout: "Vizualizare proprietăţi",
		viewer_split_comment_layout: "Vizualizare comentarii",
		viewer_split_notelog_layout: "Vizualizare Notelog",
		viewer_window_title: "Vizualizator ${0}",
		viewer_next_hit: "Vizualizaţi următorul document din listă",
		viewer_prev_hit: "Vizualizaţi documentul anterior din listă",
		viewer_confrim_more_search_results: "Rezultatele căutării nu mai conţin documente vizualizabile.  Vreţi să extrageţi mai multe rezultate ale căutării?",
		viewer_confirm_get_next_page: "Lista rezultatelor nu mai conţine articole vizualizabile.  Vreţi să extrageţi mai multe rezultate ale căutării?",
		viewer_confirm_get_next_item: "Lista rezultatelor conţine mai multe articole vizualizabile.  Vreţi să vizualizaţi următorul articol?",
		viewer_fn_annotation_tooltip: " Creat de: ${0},  Creat la: ${1}",
		viewer_box_note_limitation: "Puteţi deschide şi vizualiza o notele Box doar într-o fereastră separată.",
		viewer_click_to_open_box_note: "Faceţi clic aici pentru a deschide nota Box.",
		viewer_box_view_expiring: "Timpul maxim cât puteţi vizualiza documentul dumneavoastră Box este 60 de minute. Sesiunea dumneavoastră va expira în ${0} minute. Dacă vreţi să mai lucraţi pe document, trebuie să-l reîncărcaţi acum. Doriţi să reîncărcaţi documentul?",
		viewer_add_dialog_save_as_type: "Salvare ca tip:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflict de înregistrare la ieşire",
		viewer_checkout_conflict: "Documentul este înregistrat la ieşire de alt utilizator.",
		viewer_checkout_confirm: "Este disponibilă o versiune mai nouă a documentului. Doriţi să continuaţi să înregistraţi la ieşire documentul sau doriţi să reîncărcaţi vizualizatorul cu versiunea mai nouă? Dacă alegeţi să reîncărcaţi vizualizatorul, vor fi pierdute toate modificările nesalvate.",
		viewer_checkout_continue: "Continuare înregistrare la ieşire",
		viewer_checkout_reload: "Reîncărcare",
		viewer_status_building: "Construire document...",
		viewer_status_adding: "Adăugare document...",
		viewer_status_checking_in: "Înregistrare la intrare document...",

		/* Class Selector Widget */
		include_subclasses_label: "Includere subclase",
		include_subclasses_label2: "Căutare şi în subclase",
		include_subclasses_note: "(Includere subclase)",
		available_classes_col_header: "Clase disponibile",
		single_class_label: "Căutare într-o singură clasă",
		multiple_classes_label: "Căutare în mai multe clase",
		multiple_classes_hover_help: "Selectaţi această opţiune pentru a căuta în mai mult de o clasă. Clasele pot fă clase părinte sau subclase. Dacă selectaţi această opţiune, veţi vedea numai proprietăţile şi valorile care sunt comune pentru clasele selectate.",
		selected_classes_col_header: "Clase selectate",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Includere subfoldere)",
		favorites_pseudo_node: "\\Favorite\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Trebuie să selectaţi un folder din magazie la care să se adauge documentul.",
		no_permission_add_folder: "Nu aveţi permisiunile corespunzătoare pentru a adăuga foldere în acest folder.",
		no_permission_add_document: "Nu aveţi permisiunile corespunzătoare pentru a adăuga documente în acest folder.",
		document_already_in_folder: "Documentul este deja în acest folder.",
		cant_move_folder_onto_parent: "Folderul este deja în acest folder.",
		cant_move_folder_onto_self: "Nu puteţi muta un folder în el însuşi sau în subfolderele sale.",

		/* Workflow Widgets */
		process_application_space: "Procesare spaţiu de aplicaţie",
		process_role: "Procesare rol",
		process_inbasket: "Procesare in-basket",
		process_worklist: "Listă de lucru",
		process_step_processor: "Procesare articol de lucru",
		process_tracker: "Urmărire articol de lucru",
		process_info_subject: "Subiect",
		process_info_stepname: "Pas",
		process_info_is_locked: "Blocat",
		process_info_no_access: "Fără acces",
		process_info_received_on: "Primit la",
		process_info_overdue: "Depăşit",
		process_info_reminder_sent: "Memento trimis",
		process_info_locked_by_user: "Blocat de",
		process_work_object_number: "Număr obiect de lucru",
		process_deadline: "Data scadenţei:",
		process_launchedby: "Pornit de:",
		process_receivedon: "Primit la:",
		process_step: "Pas:",
		process_properties: "Proprietăţi",
		process_attachments: "Ataşamente",
		process_attachments_select: "Selectaţi un ataşament",
		process_finish_button_label: "Oprire urmărire",
		process_tracker_history: "Istorie",
		process_tracker_milestones: "Jaloane",
		process_tracker_milestone: "Jalon",
		process_tracker_milestone_level: "Nivel",
		process_tracker_milestones_empty: "Nu există jaloane de afişat.",
		process_tracker_level_selector_label: "Se afişează nivelurile jaloanelor până la:",
		process_tracker_map_selector_label: "Filtru după mapare:",
		process_tracker_message: "Mesaj",
		process_tracker_datereached: "Dată atins",
		process_tracker_stepname: "Pas",
		process_tracker_cycle: "Ciclu",
		process_tracker_review_cycle: "Examinare ciclu",
		process_tracker_participant: "Participant",
		process_tracker_completed: "Finalizat",
		process_tracker_response: "Răspuns",
		process_tracker_comments: "Comentarii",
		process_tracker_delete_confirmation: "Vreţi să opriţi urmărirea următorului flux de lucru: ${0}?",
		process_tracker_history_allmaps: "Toate mapările",
		process_tracker_history_workflow: "Flux de lucru",
		process_tracker_history_terminate: "Terminare",
		process_tracker_history_malfunction: "Defecţiune",
		process_filter_label: "Filtru",
		process_no_filter_summary: "Niciun filtru aplicat",
		process_filter_summary: "${0} aplicat",
		process_filter_reset_tooltip: "Resetare curăţă filtrul şi reîmprospătează in-basket-ul.",
		process_attachments_add_folder: "Adăugare folder",
		process_attachments_add_doc: "Adăugare document",
		process_complete_button_label: "Finalizare",
		process_save_button_label: "Salvare",
		process_launch_button_label: "Lansare flux de lucru",
		process_open_button_label: "Deschidere",
		process_movetoinbox_button_label: "Mutare în In-basket",
		process_return_button_label: "Returnare",
		process_return_to_sender_tooltip: "Returnaţi articolul de lucru la in-basket-ul de origine",
		process_move_to_inbasket_tooltip: "Mutaţi articolul de lucru în in-basket-ul dumneavoastră personal",
		process_reassign_tooltip: "Realocaţi articolul de lucru unui alt posesor",
		process_reassign_button_label: "Realocare",
		process_preferences_button_label: "Preferinţe",
		process_manageroles_button_label: "Gestionare roluri",
		process_manageroles_no_members: "Nu există membri.",
		process_responses_button_label: "Mai multe răspunsuri",
		process_morecustomaction_button_label: "Mai multe acţiuni",
		process_show_instructions: "Vizualizare instrucţiuni",
		process_hide_instructions: "Ascundere instrucţiuni",
		process_remove_attachment: "Înlăturare",
		process_close_window: "Articolul de lucru a fost procesat.",
		process_delegate_flag: "Cereţi-i proprietarului actual să aprobe articolul de lucru înainte de-l ruta la următorul pas din fluxul de lucru.",
		process_paticipant_voting: "Număr de participanţi necesari pentru votarea aprobării:",
		process_get_next_label: "Obţinerea următorului articol de lucru",
		process_no_more_items: "Nu mai există articole în in-basket pentru procesare.",
		process_workflow_name: "Nume flux de lucru:",
		process_pattern_process_name: "Examinare pentru ${0}",
		process_instuctions: "Instrucţiuni pentru examinatori:",
		process_pattern_deadline: "Data scadenţei:",
		process_reviewers: "Examinatori:",
		process_approvals_required: "Aprobări necesare:",
		process_on_reject: "Dacă articolul de lucru este respins:",
		process_return_to_originator: "Returnaţi-l către mine",
		process_return_to_previous_reviewer: "Returnaţi-l către examinatorul anterior",
		process_additional_settings: "Setări suplimentare:",
		process_allow_reassign: "Permiteţi examinatorilor să realoce această recenzie.",
		process_complete_notification: "Anunţaţi-mă atunci când revizuirea este completă",
		process_workflow_name_hover_help: "Numele pe care îl specificaţi pentru articolul de lucru ar trebui să uşureze pentru examinatori distingerea între acest articol de lucru şi un altul în in-basket-ul lor.",
		process_approvals_required_hover_help: "În cazul în care articolul de lucru este revizuit de mai multe persoane concomitent, aveţi posibilitatea de a specifica câte aprobări sunt necesare pentru ca articolul de lucru să fie finalizat cu succes.",
		process_approval_options: "Opţiuni aprobare",
		process_all: "Toate",
		process_at_least: "Cel puţin",
		process_at_least_by_count: "Cel puţin ${0} examinatori",
		process_at_least_by_percentage: "Cel puţin ${0}% din examinatori",
		process_comments: "Comentarii:",
		process_review_step_comments_hover_help: "Dacă respingeţi articolul de lucru, trebuie să furnizaţi informaţii cu privire la motivul pentru care aţi făcut acest lucru. Această informaţie permite iniţiatorului articolului de lucru sau examinatorului anterior să răspundă preocupărilor dumneavoastră.",
		process_rework_step_comments_hover_help: "Trebuie să furnizaţi informaţii cu privire la modul în care aţi adresat comentariile. Dacă nu sunteţi de acord cu comentariile, furnizaţi motivaţia pentru decizia dumneavoastră.",
		process_rejection_reason: "Motiv pentru respingere:",
		process_summary: "Sumar",
		process_sequential_review: "Examinare secvenţială",
		process_sequential_review_description: "Articolul de lucru va fi examinat de fiecare examinator în parte.",
		process_parallel_review: "Examinare paralelă",
		process_parallel_review_description: "Articolul de lucru va fi examinat de toţi examinatorii în acelaşi timp.",
		process_parallel_approvals_required_error: "Numărul de aprobări este mai mare decât era aşteptat. Au fost specificaţi doar ${0} examinatori.",
		process_parallel_invalid_required_approvals_count: "Valoarea nu este validă. Valoarea trebuie să fie ${0}.",
		process_subject_prompt: "Introduceţi subiectul",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Articol de lucru:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Vizualizare proprietăţi",
		view_permissions_level: "Vizualizare permisiuni",
		view_content_level: "Vizualizare document",
		link_level: "Legătură",
		modify_properties_level: "Editare proprietăţi",
		modify_content_level: "Editare document",
		minor_version_level: "Editare versiune minoră",
		major_version_level: "Editare versiune majoră",
		create_instance_level: "Creare instanţă",
		delete_document_level: "Ştergere document",
		delete_item_level: "Ştergere articol",
		modify_document_permissions_level: "Permisiuni de gestionare",
		modify_folder_permissions_level: "Permisiuni de gestionare",
		modify_owner_level: "Modificare proprietar",
		delete_folder_level: "Ştergere folder",
		file_in_folder_level: "Adăugare în foldere",
		create_subfolder_level: "Creare subfoldere",
		link_item_level: "Adnotare document, Adăugare la folder", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Numai documente: Adăugaţi o adnotare la documentul sau înlăturaţi o adnotare din document</li><li>Numai foldere: Adăugaţi articole la folder sau înlăturaţi articole din folder</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Ştergere",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Proprietar",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Cititor",
		/* previously \"Read only\" */
		no_access_privilege: "Fără acces",
		share_with_label: "Partajare cu:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Doar eu",
		public_label: "Toţi",
		members_label: "Utilizatori şi grupuri specifice",
		select_members_label: "Selectare...",
		select_user_group_label: "Selectare utilizatori...",
		select_users_groups_label: "Selectare utilizatori şi grupuri...",
		select_user_label: "Selectare utilizator...",
		propagation_label: "Propagare:",
		access_label: "Permisiuni:",
		add_permission_add_label: "Adăugare",
		security_policy_label: "Politică de securitate:",
		includes_inherited_access: "Include acces moştenit",
		customize_access_for_label: "Personalizare acces pentru:",
		customize: "Personalizare",
		direct: "Acest articol",
		singleLevelInheritance: "Un nivel",
		infiniteLevelInheritance: "Toate nivelurile",
		inherited: "Moştenit",
		direct_hover_help: "Setările de securitate se aplică articolului selectat",
		singleLevelInheritance_hover_help: "Aceste permisiuni se aplică acestui articol şi copiilor imediaţi care sunt configuraţi pentru a moşteni securitatea de la acest articol.",
		infiniteLevelInheritance_hover_help: "Aceste permisiuni se aplică acestui articol şi tuturor descendenţilor care sunt configuraţi pentru a moşteni securitatea de la acest articol.",
		inherited_hover_help: "Aceste permisiuni sunt moştenite de la părinte.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Permisiunile pentru ${0} se aplică acestui articol şi copiilor imediaţi care sunt configuraţi pentru a moşteni securitatea de la acest articol.",
		infiniteLevelInheritance_member_hover_help: "Permisiunile pentru ${0} se aplică acestui articol şi tuturor descendenţilor care sunt configuraţi pentru a moşteni securitatea de la acest articol.",
		inherited_member_hover_help: "Aceste permisiuni pentru ${0} sunt moştenite de la părinte.",
		partial_hover_help: "Setările de securitate ale articolului au fost modificate de un utilizator",
		allow: "Se permite",
		deny: "Se refuză",
		basic: "De bază",
		advanced: "Avansat",
		permission_type: "Setare acces pentru:",
		share_with_hover_help: "Articolul este partajat curent cu următorii utilizatori şi grupuri.",
		direct_security_policy_hover_help: "Setările acestei politici de securitate vă permit să modificaţi securitatea acestui articol.",
		security_policy_hover_help: "Securitatea acestui articol este numai-citire pentru că setările acestei politici de securitate vă împiedică să modificaţi securitatea acestui articol.",
		security_remove: "Fără permisiuni",
		pseudo_group_label: "Conturi alias",
		marking_hover_help: "Securitatea acestui articol este controlată de un set de marcare, ceea ce poate afecta securitatea articolului.",
		note_label: "Important:",
		marking_text: "Acest articol este marcat ca: ${0}. Articolul ar putea avea restricţii de securitate suplimentare.",
		authenticated_users: "Utilizatori autentificaţi",
		realm_users: "${0} utilizatori",
		denyAll: "Refuzare tot",
		allowAll: "Permitere tot",
		remove_direct_text: "Când salvaţi modificările, permisiunile pentru acest membru vor fi înlăturate de la articol.",
		remove_single_inheritance_text: "Când salvaţi modificările, permisiunile pentru acest membru vor fi înlăturate de la articol şi de la <br>copii imediaţi care sunt configuraţi pentru a moşteni securitatea de la articol.<p>Doriţi să continuaţi?",
		remove_infinite_inheritance_text: "Când salvaţi modificările, permisiunile pentru acest membru vor fi înlăturate de la articol şi de la <br>toţi descendenţii care sunt configuraţi pentru a moşteni securitatea de la articol.<p>Doriţi să continuaţi?",
		remove_inheritance_text: "Când salvaţi modificările, permisiunile pentru acest membru vor fi înlăturate de la articol şi de la <br>toţi descendenţii care sunt configuraţi pentru a moşteni securitatea de la articol. Numai permisiunile care <br>sunt moştenit de acest articol vor rămâne.<p>Doriţi să continuaţi?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Înlăturare aceste permisiuni pentru ${0}",

		security_proxy_text: "Securitatea acestui articol este numai-citire.",
		security_proxy_declared_text: "Securitatea acestui articol poate fi doar citită deoarece este definită de un proxy de securitate.",
		security_proxy_hover_help: "Securitatea acestui articol este controlată de securitatea care este setată pe alt obiect din magazie.",
		add_permissions_label: "Adăugare permisiuni",
		permission_propagation_direct: "Doar acest folder",
		permission_propagation_onelevel: "Acest folder şi un nivel mai jos",
		permission_propagation_alllevels: "Acest folder şi toate nivelurile de mai jos",
		document_propagation_label: "Setare acces pentru:",
		document_propagation_FOLDER: "Folder",
		document_propagation_DOCUMENT: "Document",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Sursă de autentificare",

		/* Versions Widget */
		object_versions_selector_label: "Versiuni:",
		object_versions_label: "Versiuni",
		object_type_document_label: "Document:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Foldere unde este îndosariat",
		folders_filed_in_folder_col_hdr: "Folder",
		folders_filed_in_path_col_hdr: "Cale",
		folders_filed_in_containment_name_col_hdr: "Nume recipient",
		folders_filed_in_creator_col_hdr: "Creat de",
		folders_filed_in_date_created_col_hdr: "Creat la",

		/* Parent Documents */
		properties_parent_documents_label: "Documente părinte",

		/* Select object dialog */
		select_object_title: "Selectare articol",
		select_object_breadCrumb_version_prefix: "Versiuni pentru: ",
		show_versions_label: "Afişare versiuni",
		use_current_version_label: "Folosire versiune curentă",
		use_released_version_label: "Folosire versiune eliberată",

		/* Select content class dialog */
		select_class: "Selectare clasă",
		/* Select Search dialog */
		select_search: "Selectare căutare",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Vizualizare legătură",
		show_hyperlink_intro: "Puteţi copia şi lipi legătura în e-mail-uri, chat-uri şi pagini web. Dacă sunt mai multe versiuni ale articolului, specificaţi la ce versiune vreţi să se facă legătura.",
		show_hyperlink_intro_no_version_select: "Puteţi copia şi lipi legătura în e-mail-uri, chat-uri şi pagini web.",
		show_text_label: "Versiune:",
		released_button_label: "Eliberat",
		current_button_label: "Curente",
		select_button_label: "Versiune specifică",
		show_hyperlink_no_released_version_msg: "Nu există nicioversiune eliberată a acestui document.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Lansare flux de lucru",
		edit_workflow_title: "Proprietăţi articol de lucru",
		start_workflow_intro: "Lansaţi un flux de lucru pentru a procesa articolele selectate. Dacă vreţi să alocaţi articolele de lucru unui anumit utilizator, specificaţi un proprietar.",
		edit_workflow_intro: "Puteţi edita proprietăţile articolelor de lucru selectate. Dacă vreţi să realocaţi articolul de lucru unui alt utilizator, specificaţi un proprietar.",
		workflow_field_label: "Flux de lucru:",
		priority_field_label: "Prioritate:",
		owner_field_label: "Proprietar:",
		start_button_label: "Pornire",
		save_button_label: "Salvare",
		owner_value_hint: "Introduceţi un şir alfanumeric cu un maxim de 32 de caractere. Şirul poate conţine numai spaţii sau următoarele caractere: a-z, A-Z, 0-9 şi ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elemente de conţinut",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Valoarea nu este validă. Valoarea poate conţine numai spaţii sau următoarele caractere: a-z, A-Z, 0-9 şi ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Introduceţi o valoare de la 1 la 32000 pentru a indica importanţa articolului de lucru.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Valoarea nu este validă. Prioritatea trebuie să fie o valoare de la 1 la 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Numele fluxului de lucru nu există.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Suspendare din fluxul de lucru",
		suspend_workitems_intro: "Când suspendaţi un articol de lucru din fluxul de lucru, articolul de lucru nu poate fi procedat până nu este continuat",
		suspend_workitems_options_label: "Suspendaţi articolele de lucru selectate:",
		suspend_until_resume_label: "Până la continuarea manuală",
		suspend_until_date_label: "Până la",
		suspend_for_duration_label: "Timp de",
		suspend_for_duration_hours: "Ore",
		suspend_for_duration_days: "Zile",
		suspend_for_duration_weeks: "Săptămâni",
		suspend_for_duration_months: "Luni",
		suspend_for_duration_years: "Ani",
		suspend_button_label: "Suspendare",
		suspend_duration_value_hint: "Introduceţi o valoare din intervalul 1 - 99 pentru durată.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Valoarea nu este validă. Valoarea trebuie să fie în intervalul 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Înlăturare din fluxul de lucru",
		remove_workflow_confirmation: "Vreţi să înlăturaţi articolele selectate din fluxul de lucru?<br>${0} articole sunt selectate.",
		remove_workflow_button_label: "Înlăturare",

		/* Unfile dialog */
		unfile_dialog_title: "Înlăturare din Folder",
		unfile_dialog_remove_from_folder_label: "Înlăturare din:",
		unfile_dialog_info_text: "Puteţi înlătura articole din foldere. Totuşi, înlăturarea unui articol din toate folderele nu înlătură articolul din magazie. Puteţi în continuare extrage articolul rulând o căutare. Numai folderele pentru care aveţi privilegii sunt afişate în această listă.",
		unfile_dialog_select_all: "Selectare toate",
		unfile_dialog_deselect_all: "Curăţare toate",
		unfile_dialog_remove_button_label: "Înlăturare",
		unfile_dialog_select_folder_col_hdr: "Selectare folder",
		unfile_dialog_folder_col_hdr: "Folder",
		unfile_dialog_path_col_hdr: "Cale",
		unfile_dialog_not_filed_msg: "Acest articol nu este în niciun folder.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nu aveţi permisiunile corespunzătoare pentru a înlătura acest articol din niciun folder în care se află acest articol.",
		unfile_dialog_folder_not_selectable_tooltip: "Nu aveţi permisiunile corespunzătoare pentru a înlătura acest articol din acest folder.",
		unfile_multi_prompt: "Vreţi să înlăturaţi articolele selectate din folderul ${0}?",
		unfile_large_number_items_confirmation_question: "Aţi selectat ${0} articole de înlăturat din folderul ${1}.<br/>Înlăturarea unui număr mare de articole dintr-un folder ar putea dura mult.<br/>Doriţi să continuaţi?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Deschidere",
		move_to_folder_title: "Mutare în folder",
		move_to_folder_button_caption: "Mutare",
		move_to_folder_label: "Mutare la:",
		add_to_folder_title: "Adăugare în folder",
		add_to_folder_button_caption: "Adăugare",
		add_to_folder_label: "Adăugare la:",
		copy_to_folder_title: "Copiere la folder",
		copy_to_folder_button_caption: "Copiere",
		copy_to_folder_label: "Copiere la:",
		copy_to_folder_delete_label: "După ce copierea s-a finalizat, ştergeţi articolele selectate din Box.",
		move_from_folder_label: "Mutare de la:",
		move_file_info_text: "Puteţi muta articole dintr-un folder în altul.",
		move_folder_info_text: "Puteţi muta foldere de la un folder părinte la altul.",
		add_doc_to_folder_info_text: "Puteţi adăuga articole într-unul sau mai multe foldere. Dacă un articol este deja într-un folder, rămâne în acel folder şi este adăugat în toate folderele suplimentare pe care le specificaţi.",
		copy_doc_to_folder_info_text: "Puteţi copia articole la un folder.",
		box_copy: "Copie Box",
		box_copy__button_caption: "Copiere",
		box_copy_to_info_text: "Selectaţi magazia şi folderul unde vreţi să copiaţi articolele selectate din Box.",
		box_copy_from_info_text: "Selectaţi magazia şi folderul unde vreţi să copiaţi articolele selectate din Box.",
		box_copy_version_info_text: "Pentru a adăuga un document nou, selectaţi magazia şi folderul. Pentru a înregistra la intrare o nouă versiune, selectaţi magazia şi documentul.",
		admin_box_copy: "Copie Box",
		admin_box_copy_hover: "Această opţiune le permite utilizatorilor să copieze documente în Box.",

		no_permission_to_copy_version_msg: "Nu puteţi copia documentul din Box ca o nouă versiune a documentului selectat. Fie nu aveţi permisiunile corespunzătoare pentru a edita documentul selectat, fie documentul selectat este înregistrat la ieşire de altcineva.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nu aveţi permisiunile corespunzătoare pentru a înlătura acest articol din niciun folder în care se află acest articol.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nu aveţi permisiunile corespunzătoare pentru a înlătura acest articol din acest folder.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Acest articol nu poate fi mutat pentru că nu este îndosariat în niciun folder. Alegeţi alt articol.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Lansare flux de lucru",
		subscriptions_dialog_available_items_label: "Articole disponibile:",
		subscriptions_dialog_info_text: "Specificaţi ce flux de lucru să se lanseze.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nume",
		subscriptions_dialog_desc_col_hdr: "Descriere",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gestionare roluri",
		manageroles_dialog_info_text: "Puteţi modifica lista de utilizatori pentru fiecare rol care este asociat cu acest spaţiu de aplicaţie a procesului.",
		manageroles_dialog_members_label: "Membri",
		manageroles_dialog_roles_label: "Roluri",
		manageroles_dialog_add_button_label: "Adăugare utilizatori şi grupuri",
		manageroles_dialog_remove_button_label: "Înlăturare",
		manageroles_dialog_save_button_label: "Salvare",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Nu este niciun flux de lucru asociat cu acest articol.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferinţe flux de lucru",
		workflow_pref_dialog_info_text: "Specificaţi evenimentele de flux de lucru pentru care vreţi să primiţi notificări e-mail. De asemenea, puteţi activa opţiunea de rutare a lucrului dumneavoastră la altă persoană, selectând un utilizator la care să se delege lucru.",

		workflow_pref_general: "General",
		workflow_pref_email_address: "Adresă e-mail",
		workflow_pref_email_address_hover: "Specificaţi adresa e-mail unde vreţi să primiţi notificările fluxului de lucru.",
		workflow_pref_preferred_locale: "Limbă",
		workflow_pref_preferred_locale_hover: "Specifică limba în care sunt afişate notificările e-mail.",

		workflow_pref_work_item_notice: "Notificări articol de lucru",
		workflow_pref_step_new_assignment: "Un nou articol de lucru îmi este alocat mie",
		workflow_pref_step_new_assignment_hover: "Să fiu notificat când primesc un articol de lucru nou.",
		workflow_pref_step_expired_deadline: "A fost depăşit termenul limită al unui articol de lucru",
		workflow_pref_step_expired_deadline_hover: "Să fiu notificat când depăşesc termenul limită al unui articol de lucru.",
		workflow_pref_step_reminders: "Aproape de termenul limită al unui articol de lucru",
		workflow_pref_step_reminders_hover: "Să mi se reamintească despre un articol de lucru care se apropie de termenul limită.",

		workflow_pref_originator_notice: "Notificări iniţiator",
		workflow_pref_milestone_reached: "Se atinge jalonul",
		workflow_pref_milestone_reached_hover: "Să fiu notificat când se atinge un jalon pe un flux de lucru pe care l-am pornit eu.",

		workflow_pref_tracker_notice: "Notificări urmăritor flux de lucru",
		workflow_pref_tracker_new_assignment: "Un nou articol de urmăritor îmi este alocat mie",
		workflow_pref_tracker_new_assignment_hover: "Să fiu notificat când este lansat un flux de lucru pe care-l urmăresc.",
		workflow_pref_tracker_deadline_reminders: "Termenul limită al fluxului de lucru este aproape",
		workflow_pref_tracker_deadline_reminders_hover: "Să mi se reamintească despre un flux de lucru care se apropie de termenul limită.",
		workflow_pref_tracker_deadline_expired: "A fost depăşit termenul limită al fluxului de lucru",
		workflow_pref_tracker_deadline_expired_hover: "Să fiu notificat când a trecut termenul limită al unui flux de lucru.",
		workflow_pref_tracker_exception: "A apărut o eroare a fluxului de lucru",
		workflow_pref_tracker_exception_hover: "Să fiu notificat când apare o excepţie sau o eroare a fluxului de lucru.",
		workflow_pref_tracker_expired_deadline: "A fost depăşit termenul limită al pasului",
		workflow_pref_tracker_expired_deadline_hover: "Să fiu notificat când a trecut termenul limită al unui pas pe un flux de lucru pe care-l urmăresc.",
		workflow_pref_tracker_milestone_reached: "Se atinge jalonul",
		workflow_pref_tracker_milestone_reached_hover: "Să fiu notificat când se atinge un jalon pe un flux de lucru pe care-l urmăresc.",

		workflow_pref_out_notice: "Afară din birou",
		workflow_pref_proxy_user: "Delegare lucru la",
		workflow_pref_proxy_user_hover: "Folosiţi această opţiune pentru a vă ruta automat lucrul la alt utilizator, de exemplu, când sunteţi plecat din birou sau în concediu.",
		workflow_pref_workflow: "Flux de lucru",
		workflow_pref_on: "Pe",
		workflow_pref_off: "Oprit",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Lansare flux de lucru",
		transfered_workflows_dialog_info_text: "Selectaţi un flux de lucru de lansat.",
		transfered_workflows_dialog_available_items_label: "Articole disponibile:",
		transfered_workflows_dialog_select_button_label: "Lansare",
		transfered_workflows_dialog_name_col_hdr: "Nume",
		transfered_workflows_dialog_no_item_found: "Nu au fost găsite fluxuri de lucru transferate.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transfer flux de lucru",
		transfer_workflow_dialog_info_text: "Selectaţi un flux de lucru de transferat în sistemul fluxului de lucru.",
		transfer_workflow_dialog_use: "Utilizaţi acest nume de flux de lucru",
		transfer_workflow_dialog_use_another: "Utilizaţi un alt nume de flux de lucru",
		transfer_workflow_dialog_in_use: "Numele fluxului de lucru este: ",
		transfer_workflow_dialog_transfer_button_label: "Transfer",
		transfer_workflow_dialog_no_items_found: "Nu au fost găsite fluxuri de lucru transferate.",
		transfer_workflow_dialog_use_hover: "Specificaţi numele fluxului de lucru curent din definiţia fluxului de lucru.",
		transfer_workflow_dialog_another_hover: "Specificaţi un nume diferit al fluxului de lucru sau reutilizaţi un nume de flux de lucru existent, transferat.",

		/*Search In control*/
		search_in_title: "Căutare în:",
		search_in_teamspaces: "Spaţii de echipă",
		search_in_repositories: "Magazii",
		search_in_thisteamspaces: "Acest spaţiu de echipă",

		ajaxViewer_save: "Salvare adnotări",
		ajaxViewer_print: "Previzualizare tipărire",
		ajaxViewer_firstPage: "Prima pagină",
		ajaxViewer_previousPage: "Pagina anterioară",
		ajaxViewer_nextPage: "Pagina următoare",
		ajaxViewer_lastPage: "Ultima pagină",
		ajaxViewer_unknownPageCount: "1 din ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} din ${1}",
		ajaxViewer_zoomOut: "Micşorare",
		ajaxViewer_zoomIn: "Mărire",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Potrivire pe lăţime",
		ajaxViewer_fitHeight: "Potrivire pe înălţime",
		ajaxViewer_fitPage: "Potrivire pagină",
		ajaxViewer_rotate270: "Rotire 270 de grade",
		ajaxViewer_rotate90: "Rotire 90 de grade",
		ajaxViewer_rotate180: "Rotire 180 de grade",
		ajaxViewer_darken: "Întunecat",
		ajaxViewer_lighten: "Luminat",
		ajaxViewer_lessContrast: "Mai puţin contrast",
		ajaxViewer_moreContrast: "Mai mult contrast",
		ajaxViewer_invert: "Inversare",
		ajaxViewer_createHighlight: "Evidenţiere",
		ajaxViewer_createNote: "Adnotare",
		ajaxViewer_editAnnotation: "Editare proprietăţi adnotare",
		ajaxViewer_deleteAnnotation: "Ştergere adnotare",
		ajaxViewer_editAnnotationTitle: "Editare proprietăţi adnotare",
		printableView_print: "Tipărire",
		printableView_close: "Închidere",

		search_results_dropdown_button: "Afişare rezultate",
		search_results_columns_label: "Afişare rezultate căutare",
		search_results_columns_description: "Selectaţi proprietăţile pe care le vreţi afişate în rezultatele căutării.",
		search_results_sortby_label: "Sortare după:",
		search_results_order_label: "Ordine sortare:",
		search_results_accending_label: "Crescător",
		search_results_descending_label: "Descrescător",
		search_results_available_properties: "Disponibil",
		search_results_selected_properties: "Selectat",
		search_rank_property: "Rang (Doar căutare text)",
		search_name_attribute: "Nume (${0})",
		search_results_summary_enabled_label: "Activaţi sumarul de conţinut (Numai căutare text)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Căutări",
		manage_teamspace_classes_tab_title: "Clase",
		manage_teamspace_entry_templates_tab_title: "Şabloane de intrare",
		manage_teamspace_team_tab_title: "Echipă",
		manage_teamspace_roles_tab_title: "Roluri",
		manage_teamspace_dialog_title: "Modificare spaţiu echipă",
		manage_teamspace_button_label: "Modificare spaţiu echipă",
		manage_teamspace_team_pane_heading: "Selectare echipă",
		manage_teamspace_classes_pane_heading: "Selectare clase",
		manage_teamspace_entry_templates_pane_heading: "Selectare şabloane de intrare",
		manage_teamspace_no_rights_message: "Nu aveţi permisiunile corespunzătoare pentru a modifica acest spaţiu de echipă.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Proprietăţi spaţiu echipă",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Specificaţi proprietăţile care sunt afişate pentru documente şi foldere în lista de conţinut când utilizatorii răsfoiesc în spaţiul de echipă. De asemenea, puteţi specifica ordinea în care sunt afişate proprietăţile.",
		teamspace_props_sel_cols_use_default_label: "Folosiţi setările de <b>Răsfoire</b> pentru această magazie",
		teamspace_props_sel_cols_use_default_tooltip: "Folosiţi setările care sunt specificate pe pagina Răsfoire pentru această magazie în unealta de administrare.",
		teamspace_props_general_tab_label: "General",
		teamspace_props_column_props_tab_label: "Proprietăţi afişate",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Alegeţi fişier pentru import",
		teamspace_import_template_instruction: "Puteţi selecta un fişier de export pentru şablonul de spaţiu de echipă pentru import.",
		teamspace_import_template_button_label: "Import",
		teamspace_import_template_dialog_label: "Import şablon spaţiu de echipă",

		/* Annotation Dialog */
		annotationDlg_title: "Adnotări",
		annotationDlg_description: "Documentul selectat are următoarele adnotări:",
		annotationDlg_msg_noAnnotations: "Nu există nicioadnotare. Faceţi clic pe Adăugare pentru a crea o adnotare.",
		annotationDlg_pageLabel: "Pagina: ${pageNum}",
		annotationDlg_accLabel: "ACCES: ${accType}",
		annotationDlg_accLabel_public: "Public",
		annotationDlg_accLabel_private: "Privat",
		annotationDlg_accLabel_privateGroup: "Privat(${groupName})",
		annotationDlg_copiable: "Se poate copia la alt server",
		annotationDlg_cannotCopy: "Nu se poate copia la alt server",
		annotationDlg_addButtonLabel: "Adăugare",

		/* Share Dialog */
		is_shared: "Partajate",
		is_share_pending: "Partajare în curs",
		share_title: "Partajare Box",
		share_instructions_new: "Trimiteţi un e-mail care include o legătură pentru fişierul partajat. Cei care au legătura pot accesa fişierul.",
		share_instructions_existing: "Trimiteţi un e-mail care include o legătură pentru fişierul partajat. Cei care au legătura pot accesa fişierul. Este posibil ca şi alte persoane să aibă legătura, dacă cineva deja a partajat acest fişier.",
		share_instructions_another_version_shared: "Trimiteţi un e-mail care include legătura pentru fişierul partajat. Cei care au legătura pot accesa fişierul. Este posibil ca şi alte persoane să aibă legătura, dacă cineva deja a partajat altă versiune a acestui fişier.",
		share_buttonLabel_share: "Partajare",
		share_email_addresses: "Trimitere la:",
		share_email_addresses_hover: "Când partajarea se finalizează, este trimisă o legătură la aceste adrese de e-mail. Dacă nu introduceţi nimic, legătura este trimisă la adresa dumneavoastră de e-mail.",
		share_email_addresses_reshare_hover: "Când partajarea se finalizează, este trimisă o legătură la aceste adrese de e-mail. Dacă nu introduceţi nimic, nu este trimis niciun e-mail.",
		share_password: "Setaţi parola:",
		share_password_placeholder: "Opţional",
		share_comments: "Mesaj:",
		share_comments_default: "Aş dori să-mi partajez fişierul cu dumneavoastră în Box.",
		share_myEmail: "Trimis din:",
		share_expiration: "Setaţi expirarea legăturii:",
		share_expire: "Accesul expiră:",
		share_expire_none: "Nu expiră niciodată",
		share_allowDownload: "Se permite descărcarea",
		share_add: "Adăugare",
		share_advanced_instructions: "Setările pentru descărcare, expirare şi parolă sunt aplicate fişierului partajat în Box.",
		share_advanced_existing_instructions: "Setările pentru descărcare, expirare şi parolă sunt aplicate fişierului partajat în Box.",
		share_options_edit_warning: "Important: orice modificări ale acestor setări afectează pe toţi cei care au legătura, inclusiv pe cei care deja o aveau.",
		share_link: "Legătură:",
		share_email_addresses_placeholder: "Adrese de e-mail",
		share_email_address_placeholder: "Adresă e-mail",
		share_email_address_invalid: "Introduceţi o adresă de e-mail validă.",
		share_cannot_share_with_self: "Nu puteţi partaja fişiere cu dumneavoastră. Specificaţi alt utilizator.",
		share_selected_version_with_minor_warning_hover: "Versiunea ${0} a documentului este partajată. Aţi selectat versiunea ${1}.<br><br><b>Avertisment</b>: Dacă partajaţi versiunea ${1}, nimeni nu poate partaja versiunea ${2} dacă nu ştergeţi partajarea pentru versiunea ${1}.",
		share_selected_version_hover: "Versiunea ${0} a documentului este partajată. Aţi selectat versiunea ${1}.",
		share_selected_version_message: "Important: Versiunea ${0} a documentul este partajată. Aţi selectat versiunea ${1}.",
		share_different_version_message: "Important: Aţi selectat versiunea ${1}, dar versiunea ${0} a documentului este deja partajată.  Nu puteţi partaja versiunea ${1} decât dacă ştergeţi partajarea mai întâi, dar puteţi în schimb partaja legătura la versiunea ${0}.",
		share_version_message: "Important: Versiunea ${0} a documentul este partajată. Selectaţi ce versiune vreţi să partajaţi.",
		share_version_new: "Partajare versiunea ${0}",
		share_version_new_p8_hover: "Partajarea acestui document creează o o legătură de versiune anume doar la versiunea selectată.<br><br>Când un document este deja partajat:<ul><li>Puteţi partaja o versiune ulterioară, iar legătura redirectează la versiunea ulterioară.</li><li>Nu puteţi partaja o versiune anterioară, decât dacă ştergeţi mai întâi partajarea.</li></ul>",
		share_version_new_cm_hover: "Partajarea acestui document creează o o legătură de versiune anume doar la versiunea selectată.<br><br>Când un document este deja partajat:<ul><li>Puteţi partaja o versiune ulterioară, iar legătura redirectează la versiunea ulterioară.</li><li>Nu puteţi partaja o versiune anterioară.</li></ul>",
		share_version_update: "Partajare versiune ${0} (Actualizaţi opţiunile de partajare).",
		share_version_update_p8_hover: "Partajarea acestui document păstrează legătura doar la versiunea specifică.<br><br>Când un document este deja partajat:<ul><li>Puteţi partaja o versiune ulterioară, iar legătura redirectează la versiunea ulterioară.</li><li>Nu puteţi partaja o versiune anterioară, decât dacă ştergeţi mai întâi partajarea.</li></ul>",
		share_version_update_cm_hover: "Partajarea acestui document păstrează legătura doar la versiunea specifică.<br><br>Când un document este deja partajat:<ul><li>Puteţi partaja o versiune ulterioară, iar legătura redirectează la versiunea ulterioară.</li><li>Nu puteţi partaja o versiune anterioară.</li></ul>",
		share_version_change_to_current: "Partajare versiune ${0} (Actualizaţi partajarea cu versiunea selectată).",
		share_version_change_to_current_p8_hover: "Partajarea acestui document actualizează legătura pentru a indica doar la versiunea selectată.<br><br>Când un document este deja partajat:<ul><li>Puteţi partaja o versiune ulterioară, iar legătura redirectează la versiunea ulterioară.</li><li>Nu puteţi partaja o versiune anterioară, decât dacă ştergeţi mai întâi partajarea.</li></ul>",
		share_version_change_to_current_cm_hover: "Partajarea acestui document actualizează legătura pentru a indica doar la versiunea selectată.<br><br>Când un document este deja partajat:<ul><li>Puteţi partaja o versiune ulterioară, iar legătura redirectează la versiunea ulterioară.</li><li>Nu puteţi partaja o versiune anterioară.</li></ul>",
		share_repository: "Magazie pentru fişiere partajate",
		share_repository_hover: "Dacă nu vedeţi magazia Box pe care vreţi să o utilizaţi, puteţi să adăugaţi o magazie Box nouă în pagina Magazii.",
		share_options: "Opţiuni partajare",
		unshare_confirm: "Dacă ştergeţi partajarea, sunt întrerupte toate legăturile partajate, inclusiv legăturile partajate trimise anterior de alţi utilizatori. Orice alţi utilizatori care doresc să partajeze documentul trebuie să selecteze documentul original şi să-l partajeze din nou.<br><br>Sunteţi sigur că doriţi să ştergeţi partajarea?",
		unshare_button: "Ştergere partajare Box",
		admin_share: "Servicii de partajare Box:",
		admin_share_hover: "Le permiteţi utilizatorilor să partajeze un document dintr-o magazie pentru care a fost activată partajare Box. Partajarea unui document include copierea fişierului la Box, crearea unei legături şi trimiterea legăturii prin e-mail.",
		admin_my_email_modifiable: "Se permite utilizatorilor să modifice adresa de e-mail Trimis din",
		admin_my_email_modifiable_hover: "Implicit, pentru partajarea Box, adresa de e-mail a utilizatorului este numai-citire şi este obţinută dintr-o mapare de utilizatori şi adrese de e-mail care reprezintă conturile de utilizator Box.<br><br>Selectaţi această opţiune pentru a le permite utilizatorilor să-şi editeze adresa de e-mail când partajează; însă validitatea adresei de e-mail nu este verificată.",
		admin_repos_admin_user: "Administrator partajare:",
		admin_repos_admin_user_hover: "Setaţi administratorul de partajare dacă aveţi un desktop cu servicii de partajare Box activate şi această magazie Box selectată ca magazie pentru fişierele partajate.<br><br>Faceţi clic pe Setare şi logaţi-vă la Box folosind un cont valid de administrator Box.<br><br>Administratorul partajării trebuie să fie un administrator Box care este configurat pentru a avea spaţiu de stocare nelimitat în Box.",
		admin_repos_admin_user_not_set_warning: "Administratorul Box nu este selectat pentru magazia selectată.<br><br>Serviciile de partajare Box sunt dezactivate până când setaţi administratorul Box pentru magazia selectată sau selectaţi altă magazie Box, pentru care este configurat administratorul Box.<br><br>Puteţi să setaţi administratorul Box în secţiunea serviciilor de partajare Box, de pe pagina General pentru magazie.",
		admin_share_not_configured_warning: "Înainte de a putea folosi serviciile de partajare Box, trebuie mai întâi să adăugaţi şi să selectaţi o magazie Box cu autentificare de server.",
		/* Office Online Server settings */
		admin_office_online_title: "Configuraţie Office Online",
		admin_office_online_server_enable: "Server Office Online:",
		admin_office_online_server_enable_hover: "Specificaţi dacă doriţi ca utilizatorii care accesează acest desktop să-şi poată edita documentele Office utilizând serverul Office Online.",		
		admin_office_online_allow_collaborative_editing: "Se permite editare colaborativă",
		admin_office_online_allow_collaborative_editing_hover: "Permiteţi ca mai mult de un utilizator să lucreze pe acelaşi document. Curăţaţi opţiunea dacă doriţi să restricţionaţi editarea documentelor la un utilizator.",
		admin_office_online_repository_not_set_warning: "Înainte de a putea activa serviciul Office Online, trebuie mai întâi să activaţi serviciul pe o magazie şi să specificaţi URL-ul serverului Microsoft Office Online. Faceţi clic pe <b>Magazii</b>, select a repository, selectaţi o magazie şi apoi, în fila <b>Editare integrare</b>, activaţi serviciul. Faceţi clic pe <b>Setări > General</b> şi introduceţi URL-ul serverului Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Specificaţi dacă vreţi să utilizaţi serverul Office Online pentru a lucra cu documente Office.",
		admin_office_online_server_url: "URL server Microsoft Office Online",
		admin_office_online_server_url_hover: "Specificaţi URL-ul prin care alte aplicaţii pot comunica cu serverul Office Online. URL-ul are formatul http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Verificat",
	    admin_office_online_server_Failed: "<b>Eşuat</b>",

		admin_repcfg_office_online_service_p8_hover: "Pentru a iniţializa magazia să utilizeze serverul Office Online, puteţi adăuga fişierul iniţial de şablon pentru fiecare aplicaţie Office. Dacă nu este specificat un şablon, va fi utilizat şablonul implicit.",	
		admin_repcfg_office_online_server_integration: "Integrare server MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Înainte de a putea activa serverul Office Online, trebuie mai întâi să specificaţi URL-ul de server Microsoft Office Online. Faceţi clic pe Setări > General şi introduceţi URL-ul",
		admin_repcfg_office_online_word_template_name: "Şablon implicit Word",
		admin_repcfg_office_online_excel_template_name: "Şablon implicit Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Şablon implicit PowerPoint",
		admin_repcfg_office_online_blank_template_description: "Acesta este şablonul implicit care este utilizat dacă nu vă adăugaţi propriul şablon.",
		/* Edit Service settings */
		admin_icn_edit_title: "Editare configuraţie",	
	    admin_icn_edit_files_cleanup_interval: "Interval de curăţare fişiere temporare (în zile):",
	    admin_icn_edit_files_cleanup_interval_hover: "Puteţi seta perioada de timp cât sunt păstrate fişierele temporare în clientul Editare ICN.  Valoarea implicită este 20 de zile. Perioada maximă este 20 de zile. Perioada minimă este 1 zi.",
	    admin_icn_edit_service_integration: "Integrare serviciu de editare",
	    admin_icn_edit_service_integration_intro: "Serviciul de editare permite utilizatorilor să adauge sau să editeze cu uşurinţă fişiere în aplicaţiile native instalate pe computerele lor.<br><br><b>Important:</b> Dacă activaţi serviciul de editare, trebuie să vă salvaţi configuraţia magaziei înainte de a putea edita categorii predefinite.",
		admin_icn_edit_service: "Serviciu de editare:",
		admin_icn_edit_enable_hover: "Pentru a utiliza serviciul de editare, trebuie să:<ul><li>Activaţi serviciul pe magazie</li><li>Activaţi serviciul pe desktopurile din mediul dumneavoastră</li><li>Instalaţi clientul IBM Content Navigator Edit pe staţiile de lucru de utilizator</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Activare",
		admin_icn_edit_disable: "Dezactivare",
		admin_icn_edit_create_new_category: "Categorie nouă",
		admin_icn_edit_delete_category: "Ştergere categorie",
		admin_icn_edit_edit_category: "Editare categorie",
		admin_icn_edit_disable_category: "Dezactivare categorie",
		admin_icn_edit_enable_category: "Activare categorie",
		admin_icn_edit_new_category_dialog_title: "Categorie nouă",
		admin_icn_edit_edit_category_dialog_title:"Editare categorie",
		admin_icn_edit_new_category_dialog_instructions: "O categorie de documente vă permite să asociaţi şabloane cu anumite tipuri MIME pentru serviciul de editare. De exemplu, puteţi asocia un set de şabloane cu fişiere PDF pentru ca utilizatorii să poată aplica şabloane când adaugă sau editează fişiere din clientul IBM Content Navigator Edit. <br><br><b>Important:</b> Trebuie să vă salvaţi configuraţia de magazie înainte să puteţi adăuga şabloane la categoria pe care o creaţi. ",
		admin_icn_edit_edit_category_dialog_instructions: "Trebuie să vă salvaţi configuraţia de magazie înainte să puteţi adăuga şabloane la această categorie. ",
		admin_icn_edit_delete_category_dialog_instructions: "Doriţi să ştergeţi această categorie şi toate şabloanele care sunt asociate cu categoria?<br><br><b>Important:</b> Modificările dumneavoastră nu vor fi permanente până când nu vă salvaţi modificările la magazie. ",
		admin_icn_edit_category_label: "Categorie: ",
		admin_icn_edit_category_discription_label:"Descriere: ",
		admin_icn_edit_template_column_head:"Nume şablon",
		admin_icn_edit_category_duplicate_error_message: "Există deja o categorie cu acest ID. ",
		admin_icn_edit_word_category_description: "Această categorie defineşte şabloanele disponibile pentru documentele Microsoft Word în serviciul de editare. ",
		admin_icn_edit_excel_category_description: "Această categorie defineşte şabloanele disponibile pentru documentele Microsoft Excel în serviciul de editare. ",
		admin_icn_edit_powerpoint_category_description: "Această categorie defineşte şabloanele disponibile pentru documentele Microsoft PowerPoint în serviciul de editare. ",

		icn_edit_add_template_dialog_title:"Adăugare şablon ${0}",
		icn_edit_add_template_only_one_file_error: "Puteţi selecta doar un fişier.",
		icn_edit_add_template_file_type_error: "Trebuie să specificaţi un fişier de şablon ${0} valid.<br><br>Documentul selectat are un tip MIME de ${1}.<br><br>Tipuri MIME valide: ${2}.",
		icn_edit_change_template_dialog_title: "Editare şablon ${0}",
		icn_edit_action_in_new_menu_name:"Document ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "cu Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "cu aplicaţii Desktop",
		icn_edit_new_document_dialog_title: "Document ${0} nou",
		icn_edit_new_document_dialog_intro: "Creaţi un nou document ${0} şi îl adăugaţi la magazie. Documentul va fi creat cu şablonul de serviciu de editare selectat.", 
		icn_edit_select_edit_service_template: "Selectaţi un şablon",
		icn_edit_edit_service_template: "Editare Şablon de serviciu de editare:",
		icn_edit_new_document_category_no_templates_message:"Nu există niciun şablon în această categorie. Vă rugăm să vă contactaţi administratorul pentru a adăuga şabloane în această categorie.",
		icn_edit_installer: "IBM Content Navigator Edit Installer",
		admin_icn_cm_classes_and_roles_settings: "Setări clasă şi rol",
		admin_repcfg_classes_and_roles_warning: "Pentru a specifica clase şi utilizatori sau grupuri de utilizatori care au permisiunea de a crea, edita şi folosi şabloane sau crea ciorne de document care lucrează cu Microsoft Office Online sau Edit Service.",
		admin_repcfg_classes_and_roles_click_warning: "faceţi clic aici.",
		/* Edit Service settings END */
		share_no_my_email_error: "A apărut o problemă la identificarea adresei de e-mail necesare pentru a partaja documentul.",
		share_no_my_email_error_explanation: "Sunteţi logat cu ID-ul de utilizator ${0}, dar ID-ul de utilizator nu este mapat la o adresă de e-mail.",
		share_no_my_email_error_userResponse: "Încercaţi să vă logaţi din nou sau logaţi-vă utilizând alt ID de utilizator. Dacă problema persistă, raportaţi această eroare administratorului de sistem.",
		share_no_my_email_error_adminResponse: "ID-ul de utilizator ${0} nu este mapat la o adresă de e-mail şi desktopul ${1} nu permite ca utilizatorii să editeze adresa de e-mail pentru serviciile de partajate Box.<br><br>Încercaţi una dintre soluţiile următoare:<br>Asiguraţi-vă că este înregistrat plug-in-ul de mapare e-mail.<br>Asiguraţi-vă că fişierul emailMappingPlugin.json include ID-ul de utilizator ${0} şi adresa de e-mail de utilizator, apoi construiţi, configuraţi şi înregistraţi plug-in-ul de mapare e-mail.<br>Dacă nu vreţi să utilizaţi plug-in-ul de mapare e-mail sau directorul de adrese de e-mail FileNet P8 şi, în schimb, vreţi să le permiteţi utilizatorilor să-şi introducă prpria adresă de e-mail când partajează un document, puteţi să modificaţi setările de desktop pentru serviciile de partajate Box, pentru a le permite utilizatorilor să trimită legătura din altă adresă de e-mail.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Este partajată o versiune mai veche a acestui document, aşa că nu puteţi partaja versiunea selectată pentru acest document.",
		share_later_version_shared_error_explanation: "Nu puteţi să partajaţi o versiune anterioară a documentului care a fost deja partajată.",
		share_later_version_shared_error_userResponse: "Pentru a trimite legătura la versiunea ulterioară a documentului, mai întâi trebuie să selectaţi versiunea ulterioară, apoi să utilizaţi acţiunea Partajare.<br><br>Pentru a partaja versiunea selectată a documentului, mai întâi trebuie să ştergeţi partajarea pentru versiunea ulterioară a documentului.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Mesaj nou",
		email_from: "De la:",
		email_to: "La:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Introduceţi o adresă de e-mail validă.",
		email_subject: "Subiect:",
		email_message: "Mesaj:",
		email_message_placeholder: "Adăugaţi un mesaj",
		email_attachments: "Ataşamente:",
		email_links: "Legături:",
		email_send: "Trimitere",
		email_dont_send: "Nu trimite",
		email_subject_reminder: "Memento subiect",
		email_subject_reminder_confirm: "Vreţi să ştergeţi trimiteţi acest mesaj fără un subiect?",
		email_missing_from_error: "A apărut o problemă la identificarea adresei de e-mail De la, care este necesară pentru a trimite mesajul e-mail.",
		email_missing_from_error_explanation: "Sunteţi logat cu ID-ul de utilizator ${0}, dar ID-ul de utilizator nu este mapat la o adresă de e-mail.",
		email_missing_from_error_userResponse: "Încercaţi să vă logaţi din nou sau logaţi-vă utilizând alt ID de utilizator. Dacă problema persistă, raportaţi această eroare administratorului de sistem.",
		email_missing_from_error_adminResponse: "ID-ul de utilizator ${0} nu este mapat la o adresă de e-mail şi desktopul ${1} nu permite ca utilizatorii să editeze adresa de e-mail De la.<br><br>Încercaţi una dintre soluţiile următoare:<br>Asiguraţi-vă că este înregistrat plug-in-ul de mapare e-mail.<br>Asiguraţi-vă că fişierul emailMappingPlugin.json include ID-ul de utilizator ${0} şi adresa de e-mail de utilizator, apoi construiţi, configuraţi şi înregistraţi plug-in-ul de mapare e-mail.<br>Dacă nu vreţi să utilizaţi plug-in-ul Email Mapping sau directorul de adrese de e-mail FileNet P8 şi, în schimb, vreţi să le permiteţi utilizatorilor să-şi introducă prpria adresă de e-mail când trimit un e-mail, puteţi să modificaţi setările de e-mail pentru desktopuri, pentru a le permite utilizatorilor să modifice adresa de e-mail De la.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Documentul nu poate fi deschis.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator nu se poate conecta la clientul IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Instalaţi şi porniţi clientul IBM Content Navigator Edit pe staţia dumneavoastră de lucru. Apoi încercaţi să deschideţi documentul din nou.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Documentul nu poate fi deschis.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator nu se poate conecta la clientul IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Instalaţi şi porniţi clientul IBM Content Navigator Edit pe staţia dumneavoastră de lucru. Apoi încercaţi să deschideţi documentul din nou.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator nu este configurat corect pentru partajarea documentelor.",
		share_not_configured_error_explanation: "Caracteristica de partajare Box trebuie configurată corespunzător înainte de a putea partaja documente.",
		share_not_configured_error_userResponse: "Contactaţi administratorul şi cereţi-i să configureze caracteristica de partajare Box.",
		share_not_configured_error_adminResponse: "Următoarele articole trebuie să fie configurate înainte de a partaja documente:<ul><li>Serviciul de manager de taskuri trebuie activat în setările uneltei de administrare.</li><li>ID-ul de conexiune manager de taskuri trebuie configurat în magazie.</li><li>Partajarea trebuie să fie activată în magazie.</li><li>Trebuie să fie selectată o magazie Box pentru partajarea în desktop.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Nu au fost salvate modificările proprietăţilor pentru versiunea nouă",
		checkin_cors_save_attributes_error_explanation: "Versiunea a fost creată dar modificările proprietăţilor nu au fost salvate. Documentul încă poate fi înregistrat la ieşire.",
		checkin_cors_save_attributes_error_userResponse: "Deblocaţi documentul şi actualizaţi proprietăţile folosind articolul de meniu contextual Proprietăţi.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Nu au fost salvate modificările proprietăţilor pentru noul document",
		add_cors_save_attributes_error_explanation: "Documentul a fost creat dar modificările proprietăţilor nu au fost salvate.",
		add_cors_save_attributes_error_userResponse: "Actualizaţi proprietăţile folosind articolul de meniu contextual Proprietăţi.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Documentul nu poate fi deschis.",		
		edit_document_using_edit_service_error_explanation: "Documentul nu poate fi deschis în Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Cereţi-i administratorului dumneavoastră să actualizeze Integrarea Edit Service.<br><br> Dacă utilizatorul trebuie să acceseze acest document din Edit Service Online, deplasaţi-vă la pagina Editare integrare pentru magazie şi actualizaţi Integrarea Edit Service pentru a include clasa în lista de clase de modificat pentru suportul Edit Service.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Documentul nu poate fi deschis.",		
		edit_document_is_editing_by_oos_error_explanation: "Documentul este folosit de serviciul Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Trebuie să salvaţi ţi să închideţi documentul în serviciul Office Online înainte de a-l putea deschide în Edit Service.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Activarea încărcărilor Cross-Origin Resource Sharing (CORS)",

		/* Email Settings */
		admin_email_settings: "Setări e-mail:",
		admin_email_settings_hover: "Specificaţi tipul serviciului de e-mail pe care vreţi să-l folosească utilizatorii. Când activaţi serviciul de e-mail bazat pe HTML, aveţi opţiunea de a le permite utilizatorilor să-şi modifice adresa de e-mail De la. Dacă vreţi să activaţi serviciul de e-mail bazat pe Java, trebuie să aveţi un browser care suportă Java.",
		admin_email_use_service: "Utilizare serviciu de e-mail bazat pe HTML",
		admin_email_use_applet: "Utilizare serviciu de e-mail bazat pe Java",
		admin_email_can_modify_from: "Se permite utilizatorilor să modifice adresa de e-mail De la",
		admin_email_can_modify_from_hover: "Implicit, adresa de e-mail De la nu poate fi modificată şi este obţinută dintr-o mapare de utilizatori şi adrese de e-mail care reprezintă conturile de utilizator.<br><br>Selectaţi această pentru a le permite utilizatorilor să-şi editeze adresa de e-mail când trimit un e-mail; însă validitatea adresei de e-mail nu este verificată.",
		admin_email_use_from_as_sender: "Utilizaţi adresa de e-mail De la ca expeditor al mesajului e-mail",
		admin_email_use_from_as_sender_hover: "Implicit, este utilizată o adresă de e-mail De la validă în mesajul e-mail al unui utilizator. Această adresă de e-mail este definită de sesiunea de poştă CNMailSession pe serverul de aplicaţii. Selectare această opţiune pentru a specifica utilizarea în e-mail a adresei de e-mail a utilizatorului.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Adnotări noi",
		addAnnotationDlg_labelContents: "Conţinut:",
		addAnnotationDlg_labelAccess: "Acces:",
		addAnnotationDlg_labelPublic: "Public",
		addAnnotationDlg_labelPrivate: "Privat",
		addAnnotationDlg_labelPrivateGroup: "Privat pentru grup",
		addAnnotationDlg_labelGroup: "Grup",
		addAnnotationDlg_labelCopiable: "Această adnotare poate fi copiată la alt server.",
		addAnnotationDlg_buttonLabel_save: "Salvare",

		/* Skip navigation */
		skipNavigation_title_main: "Salt la conţinut principal",
		skipNavigation_title_menu: "Salt la butoane de navigare",
		skipNavigation_label_main: "Salt la conţinut principal",
		skipNavigation_label_menu: "Salt la butoane de navigare",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gestiune spaţii echipă",
		manage_teamspace_pane_instance_hdr: "Spaţii de echipă",
		manage_teamspace_pane_template_hdr: "Şabloane",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Defilare înainte",
		scroll_back: "Defilare înapoi",

		breadcrumb_separator_open: "Deschidere nod",
		breadcrumb_separator_close: "Închidere nod",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nu este selectat niciun articol.",

		/* eds */
		eds_url: "URL serviciu de date extern:",
		eds_request_timeout: "Timeout cerere serviciu (în secunde):",
		eds_is_required: "Împiedicaţi utilizatorii să facă acţiuni care modifică valorile proprietăţilor când EDS nu este disponibil.",

		/* eforms */
		eform_signing_pane_welcome: "Semnarea formularului",
		eform_signing_button_label: "Semnare",
		eform_signing_pane_delete: "Ştergere semnătură",
		eform_signing_button_label_delete: "Ştergere",

		xtplugin_server_label: "URL server IBM FileNet Workplace XT",
		xtplugin_server_hover: "Introduceţi URL-ul serverului unde este implementat IBM FileNet Workplace XT, de exemplu, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL server IBM eClient",
		ecplugin_server_hover: "Introduceţi URL-ul serverului unde este implementat IBM eClient, de exemplu, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Acţiunile pe un număr mare de articole pot dura mult. Doriţi să continuaţi?",
		large_number_actions_continue_button: "Continuare",

		large_items_actions_confirmation_question: "Acţiunile pe articole mari pot dura mult. Doriţi să continuaţi?",

		viewer_editproperties_title: "Confirmare",
		viewer_editproperties_title_warning: "Avertisment",
		viewer_editproperties_save: "Salvare",
		viewer_editproperties_next: "Următor",
		viewer_editproperties_reset: "Resetare",
		viewer_editproperties_reset_hover: "Toate datele nesalvate vor fi resetate la valorile salvate anterior",
		viewer_editproperties_saveandgetnext: "Salvare şi obţinere următor",
		viewer_editproperties_saveandgetnext_hover: "Obţin imediat următorul document după ce-mi salvez modificările.",
		viewer_editproperties_prompt_save_changes: "Aţi modificat proprietăţile următorului document<br>${0}<br><br>Vreţi să vă salvaţi modificările?",
		viewer_editproperties_prompt_discard_changes: "Aţi modificat proprietăţile următorului document<br>${0}<br><br>Totuşi, una sau mai multe proprietăţi au o valoare invalidă, deci modificările nu pot fi salvate. Puteţi fie să corectaţi valorile invalide, fie să vă anulaţi modificările.<br>Doriţi să corectaţi valorile nevalide afişate în panoul de proprietăţi?",
		viewer_comments_prompt_discard_changes: "Aţi modificat comentariile. Vreţi să vă salvaţi modificările?",
		viewer_notelogs_prompt_discard_changes: "Aţi modificat istoricele de note. Vreţi să vă salvaţi modificările?",
		social_collaborated_version: "Versiune: ${0}",
		social_link_label: "Cine...",

		// social comments
		comments: "Comentarii",
		comments_add_hint: "Apăsaţi Enter pentru a adăuga comentariile.",
		comments_hint: "Introduceţi comentariile dumneavoastră.",
		comments_label: "Apăsaţi Enter sau Tab pentru a vă salva comentariile. Apăsaţi Esc pentru a anula.",
		comments_delete_confirmation: "Doriţi să ştergeţi comentariul selectat?",
		comments_number: "Comentarii: ${0}",
		comments_save_new: "Aţi modificat comentariile. Vreţi să închideţi fereastra fără a vă salva modificările?",

		notelogs: "Istoric note",
		notelogs_download: "Descărcare",
		notelog_modify: "Salvare modificări",
		notelog_edit: "Editare istoric note",
		notelog_create_newVersion: "Creaţi o nouă versiune pentru istoricul de note",
		notelog_add_hint: "Introduceţi comentariile dumneavoastră şi apăsaţi Enter pentru a le adăuga.",
		notelog_hint: "Apăsaţi Shift+Enter pentru linie nouă",
		notelog_add_placeholder: "Apăsaţi Enter pentru a adăuga comentariul la istoricul de note (notelog).",
		notelog_save_new: "Aţi modificat istoricul de note (notelog). Vreţi să închideţi fereastra fără a vă salva modificările?",

		// P8 markings related
		cannot_remove_markings: "Nu aveţi permisiunea de a elimina valoarea (valorile) de marcare: {0}",

		// download count
		downloadcount: "Descărcări: {0}",
		downloadcount_single: "1 descărcare",
		downloadcount_multiple: "{0} descărcări",
		downloadcount_none: "Nimeni nu a descărcat încă aceasta",

		// recommendations
		recommendations: "Aprecieri: {0}",
		recommendations_recommend: "Apreciază aceasta",
		recommendations_unrecommend: "Nu apreciază aceasta",
		recommendations_you: "Apreciaţi aceasta",
		recommendations_you_and_another: "Dumneavoastră şi încă o persoană apreciaţi aceasta",
		recommendations_you_and_others: "Dumneavoastră şi alte {0} persoane apreciază aceasta",
		recommendations_another: "o persoană apreciază aceasta",
		recommendations_others: "{0} persoane apreciază aceasta",
		recommendations_none: "Nimeni nu apreciază aceasta încă",

		// tags
		tags: "Taguri: ${0}",
		tags_delete: "Şterge ${0}",
		tags_none: "Nu sunt taguri de afişat.",
		tags_add: "Adăugare taguri:",
		tags_hint: "Apăsaţi Enter pentru a vă adăuga tagurile.",
		tags_hover_help: "Specificaţi un tag sau o listă de taguri care poate fi utilizată pentru a căuta documente cu acelaşi tag. Puteţi utiliza o virgulă (,), un punct şi virgulă (;), sau un spaţiu pentru a separa tagurile.",
		tags_hover_help_box: "Specificaţi un tag sau o listă de taguri separate prin virgule care poate fi utilizată pentru a căuta documente cu acelaşi tag.",
		tags_no_access: "Nu aveţi permisiunile corespunzătoare pentru a adăuga taguri.",

		//task scheduler pane
		taskPane_tooltip: "Deschidere vizualizare taskuri asincrone",
		taskPane_tree: "Arbore de navigare al panoului de task",
		taskPane_allTasks: "Toate taskurile",
		taskPane_scheduledTasks: "Taskuri planificate",
		taskPane_recurringTasks: "Tascuri recurente",
		taskPane_inProgressTasks: "Taskuri în progres",
		taskPane_completedTasks: "Taskuri finalizate",
		taskPane_failedTasks: "Taskuri eşuate",
		taskPane_disabledTasks: "Taskuri dezactivate",
		taskPane_statusScheduled: "Planificat",
		taskPane_statusInProgress: "În progres",
		taskPane_statusCompleted: "Finalizat",
		taskPane_statusFailed: "Eşuat",
		taskPane_statusPaused: "Întrerupt",
		taskPane_noItemSelected: "Nici un articol selectat",
		taskSchedulerPane_scheduleInformation: "Informaţii de planificare",
		taskSchedulerPane_loginInformation: "Informaţii de logare",
		taskSchedulerPane_startImmediately: "Pornire imediată",
		taskSchedulerPane_recurrence: "Repetare",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Planificare raport",
		taskSchedulerPane_nameHoverHelp: "Introduceţi numele taskului.",
		taskSchedulerPane_descriptionHoverHelp: "Introduceţi o descriere pentru task. Descrierea v-ar putea ajuta să distingeţi taskurile.",
		taskSchedulerPane_startTimeHoverHelp: "Specificaţi când vreţi să ruleze taskul. Pentru a rula taskul acum, selectaţi Pornire imediată.",
		taskSchedulerPane_recurrenceHoverHelp: "Puteţi planifica rularea taskului pe o bază de recurenţă.",
		taskSchedulerPane_endTimeHoverHelp: "Specificaţi când vreţi să se oprească taskul. Taskul rulează de la ora de început planificată până la ora de sfârşit planificată.",
		taskSchedulerPane_usernameHoverHelp: "Pentru taskuri recurente, trebuie să introduceţi un nume de utilizator care să permită serviciului să se autentifice când rulează taskul.",
		taskSchedulerPane_passwordHoverHelp: "Pentru taskuri recurente, trebuie să introduceţi parola utilizatorului specificat care să permită serviciului să se autentifice când rulează taskul.",
		taskSchedulerPane_notification: "Notificare",
		taskSchedulerPane_emailAddress: "Adresă e-mail",
		taskSchedulerPane_emailAddressHoverHelp: "Introduceţi o adresă de e-mail unde doriţi să primiţi notificări despre starea taskului.",
		taskSchedulerPane_intervalHoverHelp: "Specificaţi intervalul de timp în care va rula taskul recurent. Puteţi seta intervalul în ore, zile, săptămâni sau luni.",
		taskSchedulerPane_scheduledStartTime: "Oră de început planificată",
		taskSchedulerPane_startTime: "Oră de început",
		taskSchedulerPane_title: "Planificare",
		taskSchedulerPane_runNow: "Rulaţi acum",
		taskSchedulerPane_runOnce: "Rulaţi o dată",
		taskSchedulerPane_runAtSchedule: "Rulaţi pe o planificare",
		taskSchedulerPane_repeats: "Repetă",
		taskSchedulerPane_repeatsEvery: "Repetare la fiecare",
		taskSchedulerPane_hourly: "Oră",
		taskSchedulerPane_daily: "Zilnic",
		taskSchedulerPane_weekly: "Săptămânal",
		taskSchedulerPane_monthly: "Lunar",
		taskSchedulerPane_yearly: "Anual",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "D",
		taskSchedulerPane_tuesday: "M",
		taskSchedulerPane_wednesday: "M",
		taskSchedulerPane_thursday: "M",
		taskSchedulerPane_friday: "V",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Dată de început",
		taskSchedulerPane_after: "După",
		taskSchedulerPane_ending: "Dată de sfârşit",
		taskSchedulerPane_times: "dată(dăţi)",
		taskSchedulerPane_days: "zi(le)",
		taskSchedulerPane_hours: "oră(ore) în zi",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Finalizare (în zile)",
		taskSchedulerPane_never: "Nici o dată",
		taskSchedulerPane_categorization: "Împărţire pe categorii",
		taskSchedulerPane_scheduleTask: "Task planificat",
		taskInformationPane_details: "Detalii",
		taskInformationPane_errors: "Erori",
		taskInformationPane_taskInstances: "Instanţe de task",
		taskInformationPane_audits: "Audituri",
		taskInformationPane_results: "Rezultate",
		asyncTasks: "Taskuri asincrone",

		//entry template pane
		search_all_entry_templates: "Căutaţi toate şabloanele de intrare.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Vizualizare site complet",
		mobilesite: "Vizualizare site Mobile",
		profile: "Gestionare profil",
		office_template: "Şablon Office:",
		select_office_template: "Selectaţi un şablon Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Documentele selectate nu pot fi deschise în vizualizator cu acţiunea Combinare şi divizare.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Vizualizatorul configurat pentru documente PDF şi TIFF nu suportă acţiunea Combinare şi divizare.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Cereţi administratorului dumneavoastră să configureze un vizualizator pentru documentele PDF şi TIFF care suportă acţiunea Combinare şi divizare, cum ar fi vizualizatorul Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Documentele PDF selectate nu pot fi deschise în vizualizator cu acţiunea Combinare şi divizare.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Vizualizatorul configurat pentru documente PDF nu suportă acţiunea Combinare şi divizare.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Cereţi administratorului dumneavoastră să configureze un vizualizator pentru documentele PDF care suportă acţiunea Combinare şi divizare, cum ar fi vizualizatorul Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Documentele TIFF selectate nu pot fi deschise în vizualizator cu acţiunea Combinare şi divizare.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Vizualizatorul configurat pentru documente TIFF nu suportă acţiunea Combinare şi divizare.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Cereţi administratorului dumneavoastră să configureze un vizualizator pentru documentele TIFF care suportă acţiunea Combinare şi divizare, cum ar fi vizualizatorul Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Documentele selectate nu pot fi deschise în vizualizator cu acţiunea Combinare şi divizare.",
		document_builder_unsupported_documents_error_explanation: "Acţiunea Combinare şi divizare funcţionează numai cu documente PDF şi TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Selectaţi documente suportate şi încercaţi din nou.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Unele documente selectate nu pot fi deschise în vizualizator cu acţiunea Combinare şi divizare.",
		document_builder_some_unsupported_documents_error_explanation: "Acţiunea Combinare şi divizare funcţionează numai cu documente PDF şi TIFF deschise din aceeaşi magazie.",
		document_builder_some_unsupported_documents_error_userResponse: "Documentele selectate vor fi deschise în vizualizator.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "A apărut o eroare la verificarea conţinutului modificat.",
		document_builder_checkin_failed_explanation: "Vizualizatorul a primit un răspuns de eroare la înregistrarea la intrare a conţinutului modificat.",
		document_builder_checkin_failed_userResponse: "Cereţi administratorului dumneavoastră de sistem să examineze fişierele istoric ale serverului de aplicaţii web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Documentul nu poate fi deschis.",
		no_viewer_to_view_error_explanation: "Administratorul sistemului a blocat vizualizarea pentru acest document. Dacă vreţi să accesaţi acest document, puteţi să-l descărcaţi.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Conţinutul nu a putut fi construit.",
		document_build_failed_userResponse: "Rugaţi administratorul de sistem să examineze fişierele de istoric ale vizualizatorului.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Documentul nu a putut fi deschis în modul Combinare şi divizare.",
		document_builder_open_failed_userResponse: "Rugaţi administratorul de sistem să examineze fişierele de istoric ale vizualizatorului.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Sistemul nu a putut comuta la modul Combinare şi divizare.",
		document_builder_switch_failed_userResponse: "Rugaţi administratorul de sistem să examineze fişierele de istoric ale vizualizatorului.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documente",
		print_service_page_setup_tab_title: "Setare pagină",
		print_service_OD_print_tab_title: "Opţiuni tipărire",
		print_service_status_merging: "Combinare documente...",
		print_service_status_converting: "Convertire documente...",
		print_service_status_formatting: "Formatare document pentru tipărire...",
		admin_print_service_maximum_number_to_print: "Număr maxim de documente permis pentru tipărire:",
		admin_print_service_maximum_size_to_print: "Cantitate de date maximă permisă pentru tipărire (în MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Specificaţi numărul maxim de documente pe care utilizatorii le pot tipări la un moment dat. Valoarea maximă implicită este 50. Dacă nu vreţi să limitaţi tipărirea prin numărul de documente, setaţi această limită la 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Restricţie:</b> Această setare nu este suportată pe IBM Content Manager OnDemand.<br/><br/>Specificaţi cantitatea maximă de date ce poate fi tipărită folosind serviciul de tipărire IBM Daeja ViewONE.<br /><br />Dimensiunea totală a fiecărui document selectat nu poate fi mai mare decât această cantitate. <br/><br/>Limita implicită este de 200 MB. Setarea limitei peste 200 MB ar putea afecta perfomanţa sistemului. Dacă nu vreţi să limitaţi tipărirea prin mărimea documentului, setaţi această limită la 0",
		// error printing
		print_service_error_printing: "A avut loc o eroare în timpul tipăririi.",
		print_service_error_printing_userResponse: "Rugaţi administratorul de sistem să examineze fişierele de istoric ale serviciului de tipărire.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Documentele selectate sunt prea mari pentru tipărire",
		print_service_max_content_error_explanation: "Documentele selectate depăşesc limita de ${0} MB de date.",
		print_service_max_content_error_userResponse: "Selectaţi mai puţine documente sau selectaţi documente mai mici şi tipăriţi din nou. De asemenea, puteţi contacta administratorul de sistem pentru a creşte dimensiunea totală maximă a articolelor pe care le puteţi tipări la un moment dat de pe acest desktop.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Articolele nu pot fi tipărite. ",
		print_service_max_number_selected_error_explanation: "Puteţi tipări până la ${0} articole la un moment dat. Încercaţi să tipăriţi ${1} articole. ",
		print_service_max_number_selected_error_userResponse: "Selectaţi mai puţine articole şi încercaţi din nou să le tipăriţi. De asemenea, puteţi contacta administratorul de sistem pentru a creşte numărul maxim de articole pe care le puteţi tipări la un moment dat de pe acest desktop.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


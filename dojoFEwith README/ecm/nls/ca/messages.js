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
		welcome_user: "Benvinguts, ",
		about: "Quant a",
		all: "Tots",
		help: "Ajuda",
		user_session: "Sessió d'usuari",
		user_session_for: "Sessió d'usuari per ${0}",
		user_session_for_with_container: "Sessió d'usuari per ${0} (${1})",
		tools: "Eines",
		login: "Inicia la sessió",
		logout: "Finalitza la sessió",
		search: "Cerca",
		saved_searches: "Cerques desades",
		content_analytics: "Analitza el contingut",
		reset: "Restableix",
		reset_hover: "Qualsevol dada que hi hagi a les pestanyes es restablirà al valor desat anteriorment.",
		reset_default: "Esborra-ho tot",
		reset_default_hover: "Esborra el camp Etiqueta actual a totes les pestanyes.",
		locale: "Entorn local:",
		up: "Amunt",
		down: "Avall",
		restore: "Restaura",
		maximize: "Maximitza",
		values_label: "Valors",
		value_label: "Valor:",
		path_label: "Camí d'accés:",
		new_label: "Nou:",
		back_label: "Enrere",
		clear: "Esborra",
		set: "Defineix...",
		browse: "Navega",
		work: "Dades laborals",
		connect: "Connexió",
		documents: "Documents:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM y el logotip d'IBM són marques registrades d'IBM Corporation, registrades a moltes jurisdiccions de tot el món. Java i totes les marques registrades i logotips basats en Java són marques registrades o marques registrades d'Oracle i/o els seus afiliats. L'Oracle Outside In Technology que s'inclou aquí és subjecte a una llicència d'ús restringit i només es pot utilitzar conjuntament amb aquesta aplicació. La utilització d'aquest Programa s'autoritza amb les condicions de l'acord de llicència que acompanya el Programa.  Aquest acord de llicència pot estar en una carpeta de directori de programa o a la biblioteca identificat com a \"License\" o \"Non_IBM_License\", si és aplicable, o bé es pot proporcionar com a un acord de llicència imprès. Llegiu amb atenció aquest acord de llicència abans d'utilitzar el Programa. L'ús del Programa implica l'acceptació d'aquests termes. ",
		edit: "Edita",
		cancel: "Cancel·la",
		close: "Tanca",
		close_all: "Tanca totes les pestanyes",
		close_others: "Tanca les altres pestanyes",
		ok: "D'acord",
		yes: "Sí",
		no: "No",
		open: "Obre",
		refresh: "Renova",
		refresh_cabinets: "Actualitza tots els arxivadors",
		delete_text: "Suprimeix",
		export_config: "Exporta la configuració",
		description: "Descripció",
		true_label: "Cert",
		false_label: "Fals",
		error: "Error",
		error_reference_hover: "Cerqueu a www.ibm.com més informació sobre aquest error.",
		url_label: "URL",
		default_label: "Per defecte",
		ibm_label: "IBM",
		light_label: "Clar",
		dark_label: "Fosc",
		save: "Desa",
		saveAs: "Anomena i desa...",
		save_and_close: "Desa i tanca",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Cap",
		Name: "Nom",
		"${NAME}": "Nom",
		mime_type: "Tipus MIME",
		mime_type_contains_label: "El tipus MIME conté",
		mime_type_header: "Tipus MIME",
		mime_type_icon: "Icona de tipus MIME",
		casesearch: "Cas",
		item: "Element",
		no_mime_type: "Aquest element no té contingut.",
		items_selected: "S'han seleccionat ${0} elements.",
		requestor: "Sol·licitat per",
		scheduledStartTime: "Hora d'inici planificada",
		isRecurring: "És recurrent",
		weeks: "Setmanes",
		days: "Dies",
		hours: "Hores",
		endTime: "Hora de finalització",
		username: "Nom d'usuari",
		password: "Contrasenya",
		serverURL: "URL de servidor",
		enable: "Habilita",
		disable: "Inhabilita",
		finish: "Finalitza",
		previous: "Anterior",
		next: "Següent",
		schedule: "Planificació",
		removeFromThisList: "Suprimeix de la llista",
		status: "Estat",
		scheduledEndTime: "Hora de finalització planificada",
		type: "Tipus",
		mode: "Mode",
		startTime: "Hora d'inici",
		createdBy: "Creat per",
		nextScheduledTime: "Següent hora planificada",
		id: "ID",
		duration: "Durada",
		repeatCycle: "Freqüència",
		taskTypeName: "Tipus de tasca",
		to: "a",
		filter: "Filtre:",
		error_message: "Missatge d'error",

        file_type: "Tipus de document",
        word_template_name: "Nom de la plantilla del Word",
        excel_template_name: "Nom de la plantilla de l'Excel",
        powerpoint_template_name: "Nom de la plantilla del PowerPoint",
        template_description: "Descripció de la plantilla",
        action_add_template: "Afegeix",
        action_change_template: "Edita",      
        action_edit_template_properties: "Propietats",
        add_presentation_template: "Afegeix plantilla de presentació",
    	add_spreadsheet_template: "Afegeix plantilla de full de càlcul",
    	add_doc_template: "Afegeix plantilla de document",    	
    	file_type_doc_hover: "Heu d'especificar un fitxer vàlid de plantilla de document de tractament de textos.<br><br>Tipus MIME vàlids: ${0}",
    	file_type_doc_error: "Heu d'especificar un fitxer vàlid de plantilla de document de tractament de textos.<br><br>Tipus MIME del document seleccionat: ${0}<br><br>Tipus MIME vàlids: ${1}",
    	file_type_presentation_hover: "Heu d'especificar un fitxer de plantilla de presentació vàlid.<br><br>Tipus MIME vàlids: ${0}",
    	file_type_presentation_error: "Heu d'especificar un fitxer de plantilla de presentació vàlid.<br><br>Tipus MIME del document seleccionat: ${0}<br><br>Tipus MIME vàlids: ${1}",
    	file_type_spreadsheet_hover: "Heu d'especificar un fitxer de plantilla de full de càlcul vàlid.<br><br>Tipus MIME vàlids: ${0}",
    	file_type_spreadsheet_error: "Heu d'especificar un fitxer de plantilla de full de càlcul vàlid.<br><br>Tipus MIME del document seleccionat: ${0}<br><br>Tipus MIME vàlids: ${1}",
    	office_online_only_one_template_error: "Només podeu seleccionar un fitxer.",
    	change_presentation_template: "Edita plantilla de presentació",
    	change_spreadsheet_template: "Edita plantilla de full de càlcul",
    	change_doc_template: "Edita plantilla de document",
    	change_button: "Edita",
	    new_document_dialog_doc_title: "Document nou",
	    new_document_dialog_presentation_title: "Presentació nova",
	    new_document_dialog_spreadsheet_title: "Full de càlcul nou",
	    new_document_dialog_title_label: "Títol:",
	    new_document_dialog_title_hover: "Introduïu un títol per a aquest document.",
	    new_document_dialog_title_missing_message: "Heu d'especificar un títol.",
	    office_online_save_before_adding_templates_title: "Desa els canvis al dipòsit",
	    office_online_save_before_adding_templates_error: "No podeu afegir plantilles de l'Office fins que no deseu els canvis que heu fet al dipòsit. Feu clic a <b>Desa i tanca</b> i, a continuació, torneu a obrir el dipòsit per afegir les plantilles de l'Office.",
	    copy_to_OOS_dialog_doc_title: "Document nou",
	    office_online_checkin_cancelcheckout_message: "Aquest document s'està editant al Microsoft Office Online. No es pot incorporar el document ni cancel·lar-ne la extracció mentre estigui obert al Microsoft Office Online.",
	    new_document_classification: "Classificació:",
	    new_document_classification_help: "Restableix la classe, les propietats i la carpeta pare, si existeix, del document d'origen. Quan s'afegeix un document mitjançant una plantilla d'entrada, la plantilla d'entrada del document d'origen, si n'hi ha, se seleccionarà de manera automàtica. Les propietats del document d'origen s'utilitzaran com a valors per defecte, però es conservaran la carpeta i la classe especificades a la plantilla d'entrada.",
		new_document_classification_use_source_document: "Utilitzeu el document d'origen:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} Icona de tipus",
		repository_name_and_type: "${0} Nom i tipus",
		select_class_label: "Selecciona ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Visualització de detalls",
		detail_view_button: "Detalls",
		magazine_view_button_tooltip: "Visualització de revista",
		magazine_view_button: "Revista",
		filmstrip_view_button_tooltip: "Visualització de sèrie de diapositives",
		filmstrip_view_button: "Sèrie de diapositives",

		magazine_view_show: "Mostra la visualització de la revista",
		detail_view_show: "Mostra la visualització detallada",

		total_count_item: "element",
		total_count_items: "elements",
		total_count_more_items: "Més de ${0} elements",

		extension_changed: "L'extensió del fitxer seleccionat no coincideix amb la del original.  Seleccioneu un fitxer diferent.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "El visualitzador seleccionat no admet tots els tipus de fitxer. Si deseu la correlació del visualitzador, podríeu trobar problemes quan es visualitzin documents. Es recomana que seleccioneu un visualitzador que admeti tots els tipus de fitxer quan se seleccioni l'opció Tots els tipus de fitxer.<br><br><b>Consell:</b> els següents visualitzadors admeten tots els tipus de fitxers:<ul><li>Visualitzador de la miniaplicació</li><li>Visualitzador d'AJAX</li><li>Conversió d'HTML</li><li>Conversió de PDF</li><li>Navegador web</li></ul>",
		file_type_any: "Tots els tipus de fitxers",
		file_type_any_hover: "Seleccioneu aquesta opció si voleu utilitzar el visualitzador per veure tots els documents, independentment del tipus de fitxer. Aquesta opció es pot utilitzar als visualitzadors següents:<br><br><ul><li>Visualitzador de la miniaplicació</li><li>Visualitzador d'AJAX</li><li>Conversió d'HTML</li><li>Conversió de PDF</li><li>Navegador web</li></ul><br><br><b>Recordeu:</b> si voleu utilitzar determinats visualitzadors durant la major part del temps, qualsevol mapatge que creeu i que utilitzi aquesta opció s'haurà de moure al final del mapatge de visualitzador. ",
		file_type_input: "Nou tipus de fitxer:",

		mime_type_input: "Nou tipus MIME:",
		mime_type_input_invalid: "El nou tipus MIME no pot contenir cap dels caràcters següents: ,",
		mime_type_available: "Tipus MIME disponibles",
		mime_type_selected: "Tipus MIME seleccionats",
		file_type_input: "Nou tipus de fitxer:",
		file_type_input_invalid: "El nou tipus de fitxer no pot contenir cap dels caràcters següents: ,",
		file_type_available: "Tipus de fitxers disponibles",
		file_type_selected: "Tipus de fitxers seleccionats",
		file_type_header: "Tipus de fitxer",
		viewer: "Visualitzador:",
		viewer_viewer: "Visualitzador",
		viewer_view: "Visualització",
		viewer_preview: "Visualització prèvia",
		viewer_merge_and_split: "Combina i divideix",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Només visualització prèvia",
		preview_only_label: "(visualització prèvia)",
		preview_only_hover: "Aquest mapatge de visualitzador s'utilitzarà només quan l'usuari faci clic a <b>Visualització prèvia</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "El dipòsit no dóna suport a la navegació. Seleccioneu un altre dipòsit.",

		repository_community_teamspace_message: "Ja s'ha designat un altre dipòsit com el dipòsit de biblioteca de comunitat. Si voleu continuar utilitzant el dipòsit existent com el dipòsit de la biblioteca de comunitat, seleccioneu <b>No</b> abans de desar els canvis per evitar que el dipòsit existent se substitueixi amb aquest altre dipòsit.",

		favorites_empty: "Encara no teniu cap preferit.",
		syncItems_empty: "Encara no teniu fitxers sincronitzats.",

		root_folder_id: "ID de la carpeta arrel",
		unified_searches: "Cerca de dipòsit creuat:",
		max_results: "Nombre de resultats:",
		direct_retrieve_enabled: "Recuperació directa:",
		itemTypesToDisplay: "Tipus d'elements per visualitzar:",
		allItemTypes: "Tots els tipus d'elements",
		include_attr_group_name: "Descripcions del grup d'atributs en els noms de visualització dels atributs:",
		admin_repcfg_include_attr_group_name_hover: "Per defecte, la descripció del grup d'atributs s'inclou als noms dels atributs del grup d'atributs. Això ajuda als usuaris a veure quin grup d'atributs té un atribut de grup d'atributs pertany a qui quan treballen amb els atributs.<br>Per exemple, els usuaris poden veure el següent nom per a un atribut d'un grup d'atributs: Configuració de document.Tipus de document.<br><br>Si inhabiliteu aquesta opció, només s'utilitza la descripció del atribut per al nom de l'atribut del grup d'atributs.<br>Per exemple, els usuaris veuran aquest nom: Tipus de document.<br><br>Sense la descripció del grup d'atributs, els usuaris podrien no saber si Tipus de document és l'atribut simple o un grup d'atributs.",
		documentItemTypesOnly: "Només els tipus d'element de model de document",
		object_store: "Nom simbòlic del magatzem d'objectes:",
		object_store_display_name: "Nom de visualització del magatzem d'objectes:",
		teamspaceUpgradeMsg: "Els espais d'equip s'actualitzaran quan deseu la configuració del dipòsit. Si teniu molts espais d'equip, l'actualització pot trigar uns quants minuts.",
		synchUpgradeMsg: "El mòdul de sincronització d'aquest dipòsit s'actualitzarà quan deseu la configuració del dipòsit.",
		protocol: "Protocol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID del dipòsit de CMIS:",
		cmis_url: "URL del document del servei de vinculació d'AtomPub de CMIS:",
		trace_level: "Nivell de traça",
		trace_dir: "Directori de traça",
		temp_dir: "Directori temporal",
		show_document_location: "Mostra la ubicació del document",
		max_folders: "Quantitat màxima de carpetes",
		afp_conversion: "Conversió d'AFP",
		line_conversion: "Conversió de dades de línia",
		max_hits: "Quantitat màxima de resultats",
		folder_search_expresssion: "Expressió de cerca de la carpeta",
		max_item_types: "Tipus d'elements màxims",
		max_worklists: "Llistes de treball màximes",
		update_storage_collection: "Actualitza la col·lecció d'emmagatzematge",
		include_mime_types_in_search_results: "Inclou tipus MIME als resultats de cerca",
		object_type: "Tipus d'objecte",
		object_type_document: "Documents",
		object_type_folder: "Carpetes",
		file_label: "Fitxer:",
		plugin_jarfile_path_label: "Camí d'accés del fitxer JAR:",
		plugin_classfolder_path_label: "Camí d'accés del fitxer de classe:",
		plugin_classname_label: "Nom de la classe:",
		plugin_id_label: "Identificador del connector:",
		class_label: "Classe",
		configuration: "Configuració",
		connect_repository: "Connecta...",
		server_type: "Tipus de servidor",
		timeout_in_seconds: "Temps d'espera (en segons):",
		default_search_template: "Cerca per defecte",
		search_filtered_properties: "Propietats que es poden cercar",
		property_contains_label: "La propietat conté",
		class_contains_label: "La classe conté",
		search_filtered_operators: "Operadors de cerca",
		default_search_results: "Resultats de la cerca",
		data_type: "Tipus de dades",
		status_bar: "Barra d'estat",
		operators_for: "Operadors per a:",
		currentUser: "Usuari actual",
		nameContains: "El nom conté",
		searchFor: "Cerca",
		server_autentication: "Autenticació de servidor (OAuth 2.0 amb JWT)",
		standard_authentication: "Autenticació estàndard (3-legged OAuth2.0)",
		developer_authentication: "Autenticació de desenvolupador",
		enterprise_id: "ID d'empresa:",
		public_key_id: "ID de clau pública:",
		private_key_path: "Camí d'accés de fitxer de clau privada:",
		server_user_email: "Correu electrònic d'usuari de servidor",

		filter_builder_tooltip: "Defineix filtre",

		// Launch bar
		launchbar_home: "Obre Inici",
		launchbar_favorites: "Obre Preferits",
		launchbar_browse: "Obre la visualització de navegació",
		launchbar_browse_popup: "Obre la llista emergent de navegació",
		launchbar_search: "Obre la visualització de cerca",
		launchbar_search_popup: "Obre la llista emergent de cerca",
		launchbar_teamspaces: "Obre la vista d'espais d'equip",
		launchbar_teamspaces_popup: "Obre la llista emergent d'espais d'equip",
		launchbar_work: "Obre la visualització de treball",
		launchbar_work_popup: "Obre la llista emergent de treball",
		launchbar_entry_templates: "Obre la visualització de plantilles d'entrada",
		launchbar_entry_templates_popup: "Obre la llista emergent de plantilles d'entrada",
		launchbar_admin: "Obre la visualització d'administració",

		admin_sync_server: "Serveis de sincronització",
		admin_settings: "Configuració",
		admin_interface_text: "Etiquetes",
		admin_interface_text_desktop: "Escriptori:",
		admin_desktops: "Escriptoris",
		admin_repositories: "Dipòsits",
		admin_mobile: "Dispositiu mòbil",
		admin_menus: "Menús",
		admin_reason_codes: "Motius de la redacció",
		admin_plugins: "Connectors",
		admin_plugins_state_enabled: "El connector és habilitat",
		admin_plugins_state_disabled: "El connector és inhabilitat",
		admin_plugins_version: "Versió:",
		admin_plugins_version_heading: "Versió",
		admin_plugins_icon: "Icona de connector",
		admin_viewer_mapping_icon: "Icona de mapatge de visualitzador",
		admin_viewer_defs: "Mapatges del visualitzador",
		admin_viewer_dialog_title: "Mapatge",
		admin_viewer_dialog_new_title: "Nou mapatge",
		admin_viewer_dialog_instructions: "Un mapatge especifica quin visualitzador s'ha d'utilitzar per als fitxers d'un dipòsit. Podeu crear diversos mapatges per especificar diferents visualitzadors per a diferents tipus de fitxers. Podeu utilitzar un tipus MIME o bé una extensió de fitxer per definir un mapatge. Els mapatges amb extensions de fitxer es maparan a noms de document. Per exemple, un mapatge amb el tipus de fitxer establert en gif es maparà als noms de document que acabin amb l'extensió .gif.",
		admin_desktop_viewer_defs: "Mapatge de visualitzador:",
		admin_desktop_viewer_defs_hover: "El mapatge de visualitzador especifica quin visualitzador s'utilitza per obrir diferents tipus de documents al dipòsit.<br><br>Podeu crear nous mapatges de visualitzador a la secció <b>Mapatges de visualitzador</b> de l'eina d'administració.",
		admin_desktops_used: "S'utilitza en escriptoris",
		admin_desktop_additional_settings: "Paràmetres addicionals:",
		admin_default_desktop: "Defineix com a l'escriptori per defecte",
		admin_default_desktop_header: "Escriptori per defecte",
		admin_layout_tab_title: "Disseny",
		admin_desktop_icon: "Icona d'escriptori",

		// Themes
		admin_themes: "Temes",
		admin_theme_list_instructions: "Podeu crear un tema per facilitar la personalització del client web de l'organització. Podeu crear diversos temes si us cal utilitzar diferents colors, tipus de lletra o logotips per a diferents escriptoris del vostre entorn.<br><br>Després de crear un tema, podeu aplicar-lo a un escriptori mitjançant la configuració del tema a la pestanya <b>Aspecte</b> de l'escriptori.",
		admin_theme_instructions: "Creeu un tema per controlar els colors i els tipus de lletra que es mostren al client web. A més a més, podeu utilitzar el tema per canviar el logotip, el nom d'aplicació i el text del copyright que es visualitza a la pàgina d'inici de sessió i al bàner.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Tema nou",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Voleu suprimir els temes seleccionats?\n${0} temes s'han seleccionat.",
		admin_theme_color: "Color",
		admin_theme_text: "Text",
		admin_theme_solid: "Sòlid",
		admin_theme_gradient: "Degradat",
		admin_theme_box: "Box",
		admin_theme_color_label: "Color ${0}:",
		admin_theme_name_invalid: "El nom del tema no pot contenir cap dels caràcters següents: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "L'ID del tema ha de ser únic i no es pot canviar l'ID després de desar l'escriptori.<br><br>L'ID només pot contenir caràcters alfanumèrics.",
		admin_theme_name_hover: "El nom no pot contenir els següents caràcters: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automàtic",
		admin_theme_logo_url_hover: "Escriviu l'URL del fitxer de logotip. Si el logotip és al mateix servidor d'aplicació web com el client web, escriviu un URL relatiu, per exemple: /lesmevespersonalitzacions/baner_logotip.png<br><br>Es recomana que el logotip tingui un fons transparent.",
		admin_theme_color_palette_title_heading: "Paleta de colors",
		admin_theme_color_palette_help_text: "Creeu la paleta de colors per al tema utilitzant el valor hexadecimal o el selector de color. Podeu afegir tants colors com vulgueu.",
		admin_theme_color_add_button_label: "Afegeix un color",
		admin_theme_color_remove_button_label: "Elimina el color",
		admin_theme_global_title_heading: "Elements per a tota l'aplicació",
		admin_theme_global_font: "Família de tipus de lletra:",
		admin_theme_global_font_hover: "Seleccioneu el tipus de lletra que cal utilitzar al client web. Els tipus de lletra es llisten per ordre de prioritat, i el següent tipus de lletra de la llista només s'utilitza si l'anterior no està instal·lat a la màquina client.",
		admin_theme_global_framework_color_label: "Color de l'estructura:",
		admin_theme_global_framework_color_hover: "Seleccioneu el color que s'utilitzarà per als elements següents:<ul><li>Barres de títol a quadres de diàleg</li><li>El color del ressaltat a la part superior de la pestanya seleccionada</li><li>Les icones de visualització de llista de contingut (Visualització de detalls, Visualització de revista, Visualització de sèrie de diapositives)</li></ul><br>Aquest color no s'utilitza per als separadors entre les seccions del client web. Si voleu canviar el color dels separadors, heu de crear un connector per proporcionar un fitxer CSS personalitzat.",
		admin_theme_color_global_toolbar: "Color de la barra d'eines global:",
		admin_theme_color_global_toolbar_hover: "Si incloeu la barra d'eines global al client web, seleccioneu el color de la barra d'eines.<br><br><b>Consell:</b> La barra d'eines es mostra al bàner a la part superior del client web, de manera que el color de la barra d'eines hauria de combinar amb el color del bàner.",
		admin_theme_global_selected_color: "Color de l'element seleccionat:",
		admin_theme_global_selected_color_hover: "Seleccioneu el color que s'utilitzarà quan se seleccionin elements a l'arbre de navegació, l'arbre de cerca i la llista de contingut.<br><br>El color contextual (el color que s'utilitza quan l'usuari passa el ratolí per sobre de l'element) es deriva d'aquest color.",
		admin_theme_global_link_color: "Color dels enllaços:",
		admin_theme_global_link_color_hover: "Seleccioneu el color que s'utilitzarà per a tots els URL clicables del client web. Per exemple, aquest color s'utilitza als enllaços 'Més informació' que es mostren pertot en el client web.",
		admin_theme_login_title_heading: "Elements de la pàgina d'inici de sessió",
		admin_theme_page_background_label: "Color de fons de la pàgina d'inici de sessió:",
		admin_theme_login_page_background_hover: "Seleccioneu el color que es mostrarà darrera el panell d'inici de sessió.",
		admin_theme_login_pane_background_label: "Color de fons del panell d'inici de sessió:",
		admin_theme_login_pane_background_hover: "Seleccioneu el color que es mostrarà al panell d'inici de sessió. Aquest color hauria de combinar amb el color de fons de la pàgina d'inici de sessió.",
		admin_theme_text_color: "Color del text:",
		admin_theme_login_pane_text_color_hover: "Seleccioneu el color que s'utilitzarà per al text del panell d'inici de sessió. Aquest color s'utilitza per al text de benvinguda i les etiquetes de camp. Aquest color ha de ser llegible contra el color de fons del panell d'inici de sessió.",
		admin_theme_copyright_text: "Text del copyright:",
		admin_theme_copyright_text_hover: "Especifiqueu si voleu visualitzar el text de copyright a la pàgina d'inici de sessió.",
		admin_theme_copyright_selection_IBM: "Copyright d'IBM",
		admin_theme_copyright_selection_none: "No hi ha cap text de copyright",
		admin_theme_banner_title_heading: "Elements del bàner",
		admin_theme_text_icons_color: "Color del text i de les icones:",
		admin_theme_icon_color_label: "Color de la icona:",
		admin_theme_shadow_label: "Ombra:",
		admin_theme_banner_text_icons_hover: "Seleccioneu el color que voleu utilitzar per al text i les icones del bàner. Aquest color ha de ser llegible contra el color de fons del bàner.",
		admin_theme_banner_product_name_label: "Nom del producte:",
		admin_theme_banner_product_name_hover: "Quan creeu un escriptori, podeu escriptori un nom personalitzat que es mostrarà per a l'aplicació. Si no especifiqueu un nom personalitzat, s'utilitzarà IBM Content Navigator com a nom de producte. Especifiqueu si voleu utilitzar el nom de l'aplicació que es defineix a l'escriptori o una imatge en comptes d'un nom.",
		admin_theme_banner_product_name_desktop_defined_label: "Utilitza el nom de l'escriptori",
		admin_theme_banner_product_name_image: "Logotip d'usuari personalitzat (URL)",
		admin_theme_background_color_label: "Color de fons:",
		admin_theme_style_label: "Estil:",
		admin_theme_banner_color_hover: "Seleccioneu el color que s'utilitzarà al bàner en la part superior de l'aplicació.<br><br><b>Consell:</b> assegureu-vos que el color del text del bàner es pugui llegir per sobre del color del bàner.",
		admin_theme_buttons_title_heading: "Botons",
		admin_theme_navigation_title_heading: "Elements de navegació",
		admin_theme_navigation_icon_selected_label: "Color de la icona seleccionada:",
		admin_theme_navigation_background_hover: "Seleccioneu el color que s'utilitzarà per al fons de la barra de navegació de funcions.",
		admin_theme_navigation_icon_color_hover: "Seleccioneu el color que s'utilitzarà per a les icones de la barra de navegació de funcions. Si s'utilitza el disseny per defecte en un escriptori, aquest color hauria de contrastar amb el color de fons del menú desplegable de funcions. Si s'utilitza el disseny clàssic en un escriptori, aquest color hauria de contrastar amb el color de fons de la barra de navegació de funcions. ",
		admin_theme_navigation_icon_selected_hover: "Seleccioneu el color que s'utilitzarà per a la característica seleccionada a la barra de navegació de funcions. El color hauria de combinar amb el color de les icones i el color de fons de la barra de navegació de funcions.<br><br>Si s'utilitza el disseny clàssic en un escriptori, aquest color s'utilitza com a color contextual a la barra de navegació de característiques.",
		admin_theme_button_background_color_hover: "Seleccioneu el color que s'utilitzarà als fons dels botons.",
		admin_theme_button_style_hover: "Seleccioneu un estil de botó.",
		admin_theme_button_text_icon_color_hover: "Seleccioneu el color que s'utilitzarà al text i a les imatges dels botons.",
		admin_theme_no_logo_label: "No hi ha cap logotip",
		admin_theme_custom_logo_label: "Logotip personalitzat (URL)",
		admin_theme_banner_type: "Estil d'emplenament del bàner:",
		admin_theme_banner_type_hover: "Especifiqueu si el bàner ha de ser d'un color sòlid o degradat. Si especifiqueu un bàner de color degradat, el color que especifiqueu per al color del bàner serà el color més fosc del bàner.<br><br><b>Consell:</b> assegureu-vos que el color del text del bàner es pugui llegir per sobre del color del bàner.",
		admin_theme_icon: "Icona de tema",
		admin_theme_buttons_and_links_title_heading: "Botons, camps i enllaços",
		admin_theme_button_style_label: "Estil dels botons",
		admin_theme_theme_style_label: "Estil del tema:",
		admin_theme_theme_style_hover: "Seleccioneu l'estil en què vulgueu basar el tema. Podeu canviar l'estil en qualsevol moment quan creeu o editeu un tema. Quan canvieu d'un estil a un altre, els paràmetres del tema es restabliran als valors per defecte.",
		admin_theme_accent_color_label: "Color de l'accent:",
		admin_theme_accent_color_hover: "Seleccioneu el color que s'utilitzarà a la barra situada a la part superior d'un diàleg o al selector cíclic de càrrega.",
		admin_theme_global_toolbar_text_color_label: "Color del text de la barra d'eines global:",
		admin_theme_global_toolbar_text_color_hover: "Si incloeu la barra d'eines global al client web, seleccioneu el color que s'utilitzarà per al text de la barra d'eines.",
		admin_theme_banner_text_color_hover: "Seleccioneu el color que s'utilitzarà per al text del bàner.",
		admin_theme_banner_icon_color_hover: "Seleccioneu el color que s'utilitzarà per a les icones del bàner.",
		admin_theme_button_color_label: "Color:",
		admin_theme_button_color_hover: "Seleccioneu el color que s'utilitzarà per als elements següents:<ul><li>Barres de títol a quadres de diàleg</li><li>El color del ressaltat a la part superior de la pestanya seleccionada</li><li>Les icones de visualització de llista de contingut (Visualització de detalls, Visualització de revista, Visualització de sèrie de diapositives)</li><li>Botons, camps i enllaços</li></ul>El color que s'utilitza quan un usuari passa el cursor per damunt d'un botó es deriva d'aquest color. Aquest color no s'utilitza per als separadors entre les seccions del client web. Si voleu canviar el color dels separadors, heu de crear un connector per proporcionar un fitxer CSS personalitzat.",
		admin_theme_theme_style_col_header: "Estil de tema",

		admin_syncserver_consistency_checker: "Comprovador de coherència:",
		admin_syncserver_consistency_checker_hover: "Executeu el comprovador de coherència per tal d'assegurar que la base de dades del servei de sincronització té la informació actual sobre l'estat de cada element que és al servidor. Per exemple, executeu el comprovador de coherència després d'una aturada de la base de dades del servei de sincronització per obtenir informació sobre els documents que s'han actualitzat al dipòsit durant la interrupció.",
		admin_syncserver_consistency_checker_button: "Executa el comprovador de coherència",
		admin_syncserver_consistency_checker_started: "Iniciat:",
		admin_syncserver_consistency_checker_ended: "Finalitzat:",
		admin_syncserver_consistency_checker_duration: "Durada:",
		admin_syncserver_consistency_checker_items_processed: "Elements de sincronització processats:",
		admin_syncserver_consistency_checker_items_processed_success: "Elements de sincronització processats correctament:",
		admin_syncserver_consistency_checker_items_discovered: "S'han descobert nous elements de dipòsit:",
		admin_syncserver_consistency_checker_change_updates: "Actualitzacions totals:",
		admin_syncserver_consistency_checker_state: "Estat:",
		admin_syncserver_consistency_checker_state_done: "Fet",
		admin_syncserver_consistency_checker_state_running: "En execució",
		admin_syncserver_consistency_checker_user: "Enviat per:",
		admin_syncserver_consistency_checker_scheduled: "Planificat:",

		admin_syncserver_dbcleanup: "Neteja de la base de dades",
		admin_syncserver_dbcleanup_hover: "Executeu l'eina de neteja de la base de dades per eliminar de la base de dades els dispositius i elements no utilitzats que ja no estiguin sincronitzats.",
		admin_syncserver_dbcleanup_button: "Neteja de la base de dades",
		admin_syncserver_dbcleanup_state_done: "Fet",
		admin_syncserver_dbcleanup_state_running: "En execució",
		admin_syncserver_dbcleanup_started: "Iniciat:",
		admin_syncserver_dbcleanup_ended: "Finalitzat:",
		admin_syncserver_dbcleanup_state: "Estat:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Dipòsits eliminats:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Element sincronitzat eliminat:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Dispositius eliminats:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Dispositius caducats:",

		admin_syncserver_publicSyncUrl: "URL públic dels serveis de sincronització:",
		admin_syncserver_publicSyncUrl_hover: "Especifiqueu l'URL mitjançant el qual els dipòsits es poden comunicar amb els serveis de sincronització de l'IBM Content Navigator. El format per defecte de l'URL és http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Sincronitza paràmetres de client:",
		admin_syncserver_managed_hover: "Els usuaris no poden canviar aquests paràmetres al client IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Nivells de carpetes a sincronitzar",
		admin_syncserver_managed_subfolder_hover: "Si un usuari sincronitza una carpeta, ha d'especificar el número màxim de carpetes que es sincronitzaran. Per exemple, si un usuari especifica 3 nivells de carpeta, es sincronitzaran la carpeta que l'usuari sincronitza i 2 nivells de subcarpetes.<br><br>Assegureu-vos que l'entorn estigui adaptat per admetre la quantitat de trànsit sincronitzat creat per aquest paràmetre.",
		admin_syncserver_managed_subfolder_all: "Totes les subcarpetes",
		admin_syncserver_managed_subfolder_none: "Cap subcarpeta",
		admin_syncserver_managed_subfolder_no_more: "Nivells limitats",
		admin_syncserver_managed_subfolder_levels: "carpetes",
		admin_syncserver_managed_schedule: "Planificació de la sincronització",
		admin_syncserver_managed_schedule_hover: "Assegureu-vos que l'entorn estigui adaptat per admetre la quantitat de trànsit sincronitzat creat per la planificació de la sincronització.<br><br>L'interval màxim és de 24 hores o de 1440 minuts.<br><br>Els usuaris poden sobreescriure la planificació de sincronització fent clic a <b>Sincronitza ara</b> al client.",
		admin_syncserver_managed_schedule_manual: "Sincronitza manualment",
		admin_syncserver_managed_schedule_continuous: "Sincronitza de manera continuada",
		admin_syncserver_managed_schedule_every: "Sincronitza en els intervals especificats",
		admin_syncserver_managed_schedule_minutes: "Minuts",
		admin_syncserver_managed_schedule_hours: "Hores",

		// redaction codes
		admin_new_reason_code: "Nou motiu de redacció",		
		admin_reason_code_name_invalid: "El nom del motiu de la redacció no pot incloure cap dels següents caràcters: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "La descripció no pot incloure cap dels següents caràcters: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "La descripció no pot incloure cap dels següents caràcters: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "El nom no pot contenir cap dels caràcters següents: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Descripció",
		admin_reason_code_applications_hover: "La llista de les aplicacions de Datacap que fan referència a aquest motiu de redacció.",
		admin_reason_code_applications: "Aplicacions de Datacap",
		admin_delete_confirmation_reason_codes: "Voleu suprimir els motius de redacció seleccionats?",
		admin_delete_confirmation_reason_code: "Voleu suprimir el motiu de redacció seleccionat?",
		admin_reason_code_heading: "Motiu de redacció: <b>${0}</b>",
		admin_reason_code_list_instructions: "Els motius de la redacció indiquen perquè les dades confidencials estan protegides ocultant-les de la vista. Cada motiu identifica un tipus de dades confidencials que s'oculten als usuaris generals.",
		admin_reason_code_instructions: "Podeu crear un motiu de redacció per a cada tipus de dades confidencials. A continuació, podeu utilitzar aquest motiu en una política de redacció per definir qui pot veure les dades i qui pot crear o modificar redaccions.",
		admin_reason_code_applications_label: "Aplicacions de Datacap",
		admin_reason_code_repositories: "Dipòsits",
		admin_reason_code_repositories_label: "Dipòsits",
		admin_reason_code_repositories_hover: "La llista de dipòsits de l'ICN que fan referència a aquest motiu de redacció.",
		admin_reason_code_repositories_default_value: "Sense establir",
		admin_reason_code_description_label: "Descripció",
		admin_reason_code_applications_default_value: "Sense establir",
		admin_redaction_reasons: "Motius de la redacció",
		admin_redactions: "Redaccions basades en rol",
		admin_redactions_policies_roles: "Polítiques i rols",
		admin_reasons: "Motius",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "L'identificador no es pot editar.  Es pot copiar en el porta-retalls",
		// Role based administration
		admin_rba: "Administració d'escriptori basada en rol",
		admin_rba_mobile_access_enabled: "Aquest escriptori està habilitat per l'accés mòbil.",
		admin_rba_mobile_access_disabled: "Aquest escriptori no està habilitat per l'accés mòbil.",
		admin_rba_confirm_delete_multiple: "Voleu suprimir els rols d'administració seleccionats?",
		admin_rba_confirm_delete_single: "Voleu suprimir el rol d'administració seleccionat?",
		admin_rba_delete_multi_role_desktop: "Un o més dels rols que heu seleccionat estan assignats a un escriptori. Heu d'eliminar els rols dels escriptoris per poder suprimir-los.",
		admin_rba_delete_single_role_desktop: "El rol que heu seleccionat està assignat a l'escriptori ${0}. Heu d'eliminar el rol de l'escriptori per poder suprimir-lo.",
		admin_desktop: "Escriptori",
		admin_rba_instructions: "Podeu crear i gestionar rols d'administració d'escriptori, que associen privilegis atorgats als administradors d'escriptori.",
		admin_rba_not_used: "${0} no s'utilitza a cap escriptori.",
		admin_rba_desktops: "<b>${0} s'utilitza als escriptoris següents:</b>",
		admin_rba_new_role: "Rol nou",
		admin_rba_name_invalid: "El nom de rol d'administració no pot contenir cap dels caràcters següents: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "La descripció no pot incloure cap dels següents caràcters: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "La descripció no pot incloure cap dels següents caràcters: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "El nom no pot contenir cap dels caràcters següents: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Descripció</b> ${0}",
		admin_rba_membership: "Pertinença",
		admin_rba_general_priv: "General",
		admin_rba_appearance_priv: "Aspecte",
		admin_rba_desktop_config_priv: "Configuració de l'escriptori",
		admin_rba_app_name_priv: "Nom d'aplicació",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Mapatge de visualitzador",
		admin_rba_merge_split_priv: "Combina i divideix",
		admin_rba_sync_svc_priv: "Serveis de sincronització",
		admin_rba_menus_priv: "Menús",
		admin_rba_edit_svc_priv: "Serveis d'edició",
		admin_rba_toolbars_priv: "Barres d'eines",
		admin_rba_ctx_menus_priv: "Menús contextuals",
		admin_rba_office_ribbon_priv: "Ordres de la barra de cinta del MS Office",
		admin_rba_office_menues_priv: "Menús contextuals del MS Office",
		admin_rba_addl_settings_priv: "Paràmetres addicionals",
		admin_rba_mobile_priv: "Dispositiu mòbil",
		admin_rba_add_doc_dlg_priv: "Diàleg Afegeix document",
		admin_rba_doc_mgmt_priv: "Gestió de documents",
		admin_rba_def_redaction_priv: "Opció de redacció per defecte",
		admin_rba_add_photos_priv: "Afegeiu fotografies des de la càmera i des de la biblioteca de fotografies",
		admin_rba_time_stamp_priv: "Marca horària",
		admin_rba_add_docs_folders_priv: "Afegiu documents i creeu carpetes al dipòsit",
		admin_rba_open_docs_priv: "Obriu documents a altres aplicacions",
		admin_rba_office_config_priv: "Configuració de l'Office",
		admin_rba_tab_label_priv: "Etiqueta de pestanya d'IBM ECM",
		admin_rba_feature_sel_priv: "Selecció de característiques",
		admin_rba_general_config_priv: "Configuració general",
		admin_rba_favorites_priv: "Preferits",
		admin_rba_add_options_priv: "Afegeix opcions al grup Edita",
		admin_rba_browse_priv: "Navega",
		admin_rba_outlook_int_priv: "Integració de l'Outlook",
		admin_rba_search_priv: "Cerca",
		admin_rba_layout_priv: "Disseny",
		admin_rba_case_priv: "Cas",
		admin_rba_desktop_feat_priv: "Característiques de l'escriptori",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Característiques que es mostren",
		admin_rba_branding_priv: "Personalització de marca",
		admin_rba_home_priv: "Inici",
		admin_rba_main_color_priv: "Color principal",
		admin_rba_sec_color_priv: "Color secundari",
		admin_rba_teamspaces_priv: "Espais d'equip",
		admin_rba_rbr_priv: "Redacció basada en rol",
		admin_rba_et_mgr_priv: "Gestor de plantilles d'entrada",
		admin_rba_policies_roles_priv: "Gestiona polítiques i rols",
		admin_rba_work_priv: "Dades laborals",
		admin_rba_reasons_priv: "Codis de motiu",
		admin_rba_tasks_priv: "Tasques asíncrones",
		admin_rba_auth_priv: "Autenticació",
		admin_rba_all_privs: "Tots els privilegis",
		admin_rba_some_privs: "Alguns privilegis",
		admin_rba_no_privs: "Cap privilegi",
		admin_add_users_groups_priv: "Afegeix usuaris i grups",
		admin_url_features_priv: "Gestiona característiques d'URL",
		admin_plugin_features_priv: "Gestiona característiques de connector",
		admin_addl_components_priv: "Components addicionals",
		admin_global_toolbar_priv: "Barra d'eines global",
		admin_status_bar_priv: "Barra d'estat",
		admin_refresh_message: "Cal renovar el navegador per utilitzar les dades actualitzades.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Heu d'actualitzar el navegador per utilitzar l'escriptori per defecte actualitzat.",
		admin_desktop_refresh_message: "Heu d'actualitzar el navegador per utilitzar l'escriptori actualitzat.",
		admin_action_open: "Obre",
		admin_action_edit: "Edita",
		admin_action_copy: "Copia",
		admin_action_delete: "Suprimeix",
		admin_action_copy: "Copia",
		admin_action_new: "Crea'n un de nou",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Ja s'utilitza aquest ID. Heu d'especificar un ID únic.",

		admin_searchable_properties_for: "Propietats que es poden cercar per:",
		admin_repository_new: "Dipòsit nou",
		admin_desktop_new: "Escriptori nou",
		admin_desktop_file_documents: "Els usuaris han de desar documents nous i carpetes noves en una carpeta",
		admin_desktop_file_documents_hover: "Seleccioneu aquesta opció si voleu demanar als usuaris que seleccionin una carpeta quan afegeixin elements al dipòsit. Si no seleccioneu aquesta opció, els usuaris podran afegir documents (IBM FileNet P8) o documents i carpetes (IBM Content Manager) sense arxivar-los a cap carpeta.",
		admin_desktop_show_security_tab: "Mostra la configuració de seguretat durant l'addició d'accions i la incorporació",
		admin_desktop_show_security_hover: "<b>Només usuaris d'IBM FileNet P8</b>.  Seleccioneu aquesta opció si voleu permetre als usuaris que editin la seguretat de documents i de carpetes quan s'afegeixin o quan s'incorporin en els elements a l'escriptori.",
		admin_desktop_configure_security_inheritance: "Permet que els usuaris configurin l'herència de seguretat de les carpetes.",
		admin_desktop_configure_security_inheritance_hover: "<b>Només usuaris d'IBM FileNet P8</b>.  Seleccioneu aquesta opció si voleu que els usuaris puguin personalitzar l'accés als elements en una carpeta controlant l'herència de seguretat de carpetes. Si seleccioneu aquesta opció, els usuaris poden especificar si els usuaris o grups poden heretar la seguretat de:<ul><li>Una carpeta</li><li>Una carpeta i les subcarpetes immediates</li><li>Una carpeta i totes les seves subcarpetes</li></ul>",
		admin_desktop_appearance: "Aspecte",
		admin_desktop_appearance_instruction: "Podeu personalitzar l'aspecte de l'escriptori si canvieu la pàgina d'inici de sessió i el bàner que es mostren a l'escriptori.",
		admin_desktop_layout: "Disseny:",
		admin_desktop_layout_hover: "El disseny especifica quines funcions es poden visualitzar en el client web i com s'organitzen els continguts del client web.<br><br><b>Consell:</b> podeu definir dissenys personalitzats amb la creació de connectors. Heu de registrar el connector a l'eina d'administració abans de seleccionar un disseny personalitzat.",
		admin_desktop_layout_default: "Per defecte",
		admin_desktop_layout_custom: "Personalitzat",
		admin_desktop_enable_workflow_email: "Habiliteu l'escriptori de la notificació per correu electrònic del flux de treball de FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Només usuaris de FileNet P8. Seleccioneu aquesta opció si voleu permetre que els usuaris obrin el client web des dels URL que s'inclouen a les notificacions per correu electrònic generades mitjançant el Process Engine.<br /><br />Si no habiliteu aquesta opció per a cap escriptori, els usuaris no podran iniciar sessió al client web des dels URL a les notificacions.<br /><br />Si habiliteu aquesta opció en diversos escriptoris i més d'un escriptori compleix amb els criteris que s'especifiquen a l'URL a la notificació, el client web utilitzarà el primer escriptori que coincideixi amb els criteris. ",
		admin_desktop_prevent_create_new_search: "Evita que els usuaris creïn les cerques",
		admin_desktop_prevent_create_new_search_hover: "Aquesta opció limita els usuaris a utilitzar només les cerques existents i impedeix que creïn cerques de final obert que no es puguin optimitzar.</br></br>Aquesta configuració no afecta als espais d'equip. El dret a crear cerques en un espai d'equip es controla mitjançant el rol que té l'usuari en un espai d'equip donat.",
		admin_desktop_prevent_create_new_unified_search: "Evita que els usuaris creïn cerques als dipòsits",
		admin_desktop_prevent_create_new_unified_search_hover: "Aquesta opció evita que els usuaris només utilitzin les cerques als dipòsits existents i que creïn cerques als dipòsits finalitzades obertes que podrien ser que no millorin.",
		admin_desktop_hide_entry_template_not_found_warning: "Oculta l'advertiment que es visualitza quan no es troba la plantilla d'entrada associada",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Seleccioneu aquesta opció si voleu ocultar el missatge d'advertiment que es visualitza quan s'editen les propietats de l'element i no es troba la plantilla d'entrada associada a l'element.",
		admin_desktop_show_class_role_security_selection: "Permet que els usuaris configurin la seguretat basada en rols en les plantilles d'entrada",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Només usuaris d'IBM FileNet P8</b>. Seleccioneu aquesta opció si voleu que els usuaris configurin seguretat basada en rols en definir la seguretat en els documents i/o carpetes que utilitzen plantilles d'entrada. Si seleccioneu aquesta opció, els editors de plantilles d'entrada poden especificar si s'apliquen objectes de seguretat basada en rols a una definició de plantilla d'entrada.",
		admin_desktop_show_primary_multi_part: "Obre només el document principal al visualitzador",
		admin_desktop_show_primary_multi_part_hover: "<b>Només usuaris d'IBM FileNet P8</b>. Seleccioneu aquesta opció si voleu que només s'obri el fitxerprincipal del document en el visualitzador. Els documents poden tenir diversos fitxers associats. Amb aquesta opció només s'obre el fitxer principal associat al document.",
		admin_desktop_redaction_save_mode: "Opció de redacció per defecte:",
		admin_desktop_redaction_save_mode_hover: "Seleccioneu el mode de desar redacció del visualitzador virtual del ViewONE per defecte:</br>* Demana sempre a l'usuari que esculli: farà que es mostri el diàleg quan s'entri en mode de redacció, per demanar a l'usuari si vol incorporar una nova versió, crear un document nou o descarregar contingut.</br>* Incorporar nova versió: sempre desarà el contingut redactat en una nova versió del document existent.</br>* Desar un document totalment nou: sempre desarà el contingut redactat com un document completament nou.</br>* Descarregar i desar en el client: descarregarà el contingut redactat en el sistema del client.",
		admin_desktop_redaction_save_mode_user_select: "Demanar sempre a l'usuari que esculli",
		admin_desktop_redaction_save_mode_new_version: "Incorporar una versió nova",
		admin_desktop_redaction_save_mode_new_document: "Desar un document completament nou",
		admin_desktop_redaction_save_mode_local_content: "Descarregar i desar en el client",

		admin_desktop_document_add_mode: "Diàleg d'addició de documents:",
		admin_desktop_document_add_mode_hover: "Especifiqueu el diàleg d'addició que cal utilitzar en afegir documents creats per l'IBM Content Navigator:<ul><li>Nou document redactat de manera permanent</li><li>Nou document Combina i divideix</li><li>Nou document del Microsoft Office</li><li>Nou document de servei d'edició</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Afegeix un document",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Afegeix un document amb la plantilla d'entrada",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Combina i divideix:",
		admin_desktop_merge_and_split_enable_hover: "Especifiqueu si voleu que els usuaris amb accés a aquest escriptori puguin combinar i dividir documents utilitzant un visualitzador de suport.",

		admin_desktop_merge_and_split_show_checkin: "Sol·licita als usuaris que proporcionin valors de propietat quan incorporin canvis a un document.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Si seleccioneu aquesta opció, es visualitzarà el diàleg d'incorporació quan els usuaris incorporin canvis a un document en mode Fusiona i divideix.",

		admin_desktop_available_categories: "Característiques disponibles",
		admin_desktop_selected_categories: "Característiques seleccionades",

		admin_layout_banner_title: "Pàgina d'inici de sessió i bàner",
		admin_layout_title: "Disseny",

		admin_desktop_application_name: "Nom de l'aplicació:",
		admin_desktop_application_name_hover: "Especifiqueu el nom de l'aplicació que cal visualitzar en el bàner.<br><br>Consell: definiu el nom de l'aplicació per a altres idiomes en la pestanya Etiquetes / Etiquetes d'escriptori.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Especifiqueu si s'utilitzarà el tema per defecte de l'IBM Content Navigator o si 'utilitzarà un tema personalitzat per a aquest escriptori. Per utilitzar un tema personalitzat, heu de crear un tema a la secció <b>Temes</b> de l'eina d'administració.",
		admin_desktop_login_logo: "Logotip de la pàgina d'inici de sessió:",
		admin_desktop_login_logo_hover: "Si voleu canviar el logotip que es mostra a la pàgina d'inici de sessió, podeu especificar l'URL d'un fitxer de logotip. No obstant això, es recomana fer servir un tema personalitzat per canviar el logotip.",
		admin_desktop_login_logo_url_hover: "Escriviu l'URL del fitxer de logotip. Si el logotip és al mateix servidor d'aplicacions web com ara el client web, escriviu un URL relatiu, per exemple: /lesmevespersonalitzacions/logotip_inicisessio.png<br><br>El logotip ha de ser més gran que 200 píxels d'amplada i 150 píxels d'altura.<br><br>Es recomana que el logotip tingui un fons transparent.",
		admin_desktop_banner_logo: "Logotip del bàner:",
		admin_desktop_banner_logo_hover: "Si voleu canviar el logotip que es mostra al bàner, podeu especificar l'URL d'un fitxer de logotip. No obstant això, es recomana fer servir un tema personalitzat per canviar el logotip.",
		admin_desktop_banner_logo_url_hover: "Escriviu l'URL del fitxer de logotip. Si el logotip és al mateix servidor d'aplicació web com el client web, escriviu un URL relatiu, per exemple: /lesmevespersonalitzacions/baner_logotip.png<br><br>El logotip ha de ser més gran que 72 píxels d'amplada i 36 píxels d'altura.<br><br>Es recomana que el logotip tingui un fons transparent.",
		admin_desktop_banner_background_color: "Color de fons del bàner:",
		admin_desktop_banner_background_color_hover: "Si voleu canviar el color de fons del bàner, podeu especificar un color personalitzat. No obstant això, es recomana que feu servir un tema personalitzat per canviar el color del bàner.",
		admin_desktop_banner_background_color_custom_hover: "Especifiqueu el color del bàner de l'aplicació com un color hexadecimal.",
		admin_desktop_banner_application_name_color: "Color del text del nom d'aplicació:",
		admin_desktop_banner_application_name_color_hover: "Si voleu canviar el color del nom de l'aplicació, podeu especificar un color personalitzat. No obstant això, es recomana fer servir un tema personalitzat per canviar el color del nom de l'aplicació.",
		admin_desktop_banner_application_name_color_custom_hover: "Especifiqueu el color del nom de l'aplicació com un color hexadecimal.",
		admin_desktop_banner_menu_color: "Color de la icona del bàner:",
		admin_desktop_banner_menu_color_hover: "Si canvieu el color de fons del bàner, heu de canviar l'esquema de color de les icones del bàner per fer-les més visibles. Especifiqueu si visualitzar la versió clara o la fosca de les icones del bàner.<br><br>No obstant això, es recomana fer servir un tema personalitzat per canviar el color de les icones.",
		admin_desktop_login_page_content: "Contingut de la pàgina d'inici de sessió:",
		admin_desktop_login_page_content_hover: "Si voleu visualitzar informació addicional a la pàgina d'inici de sessió, com ara d'anuncis sobre les aturades del sistema o on els usuaris poden obtenir ajuda amb els noms d'usuari i les contrasenyes, podeu especificar l'URL del contingut que voleu visualitzar.",
		admin_desktop_login_page_content_url_hover: "Escriviu l'URL del contingut de pàgina d'inici de sessió. Si el contingut és al mateix servidor d'aplicacions web com el client web, escriviu un URL relatiu, per exemple: /lesmevespersonalitzacions/logotip_avisos.html",
		admin_desktop_password_rules: "Regles de contrasenya:",
		admin_desktop_password_rules_hover: "Si voleu proporcionar als usuaris les directrius per crear contrasenyes, com ara caràcters restringits o el nombre mínim de caràcters, podeu especificar l'URL d'una pàgina que conté les regles de contrasenya.",
		admin_desktop_password_rules_url_hover: "Escriviu l'URL del contingut de regles de contrasenya. Si el contingut és al mateix servidor d'aplicacions web com el client web, escriviu un URL relatiu, per exemple: /lesmevespersonalitzacions/contrasenyes.html",
		admin_desktop_help_url: "URL d'ajuda de l'usuari final:",
		admin_desktop_help_url_hover: "Podeu utilitzar l'ajuda inclosa a l'IBM Content Navigator, o podeu redirigir els usuaris a un contingut d'ajuda personalitzada realitzant una de les següents accions:<br><br><ul><li>Direccionar a un sistema d'ajuda personalitzada</li><li>Afegir ajuda per a la instància de l'IBM Knowledge Center que es desplega amb l'IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Especifiqueu l'URL del sistema d'ajuda personalitzat. L'IBM Content Navigator adjunta index.jsp?content=/com.ibm.usingeuc.doc/ i un nom del fitxer al final de l'URL que heu especificat.  Per enllaços \"Més informació\" que hi ha la interfície i que funcionin, el sistema d'ajuda utilitza els mateixos noms de fitxer que la integrada ajuda d'usuari final. ",
		admin_desktop_deprecated_appearance_title: "Valors en desús",
		admin_desktop_deprecated_appearance_instructions: "Si utilitzeu un tema personalitzat, aquests valors són substituïts per el tema personalitzat. Heu de migrar aquests valors a un tema personalitzat, que proporciona un estil més detallat que els valors en aquesta secció. A més, diversos escriptoris poden utilitzar el tema personalitzat.",

		admin_desktop_plugins_title: "Habilita o inhabilita els connectors d'aquest escriptori.",
		admin_desktop_plugins_enable_all_plugins: "Habilita tots els connectors desplegats que s'utilitzen en aquest escriptori",
		admin_desktop_plugins_select_plugins: "Seleccioneu els connectors desplegats per habilitar el seu ús en aquest escriptori",
		admin_desktop_plugins_select_plugin: "Selecciona connector",

		admin_desktop_layout_features: "Característiques que es mostren:",
		admin_desktop_layout_features_hover: "Seleccioneu les característiques a les quals voleu que els usuaris tinguin accés des d'aquest escriptori. Les característiques que es mostren amb l'ordre en el qual estan llistades.<br><br>Quan seleccioneu una característica, podeu personalitzar alguns dels comportaments de la funció a l'escriptori, com ara el dipòsit per defecte que s'ha seleccionat per la característica.",
		admin_desktop_layout_default_repository: "Dipòsit per defecte:",
		admin_desktop_layout_default_repository_layout_hover: "Especifiqueu quin dipòsit està seleccionat per defecte quan els usuaris obrin la característica.",
		admin_desktop_layout_document_thumbnails: "Miniatures del document:",
		admin_desktop_layout_document_thumbnails_hover: "Especifiqueu si es mostren les miniatures dels documents al panell Informació del document.<br><br>Si es mostren les miniatures, es reduirà el rendiment del client web.",
		admin_desktop_layout_show_filmstrip_view: "Vista de la sèrie de diapositives:",
		admin_desktop_layout_show_filmstrip_view_hover: "Especifiqueu si voleu permetre que els usuaris canviïn la llista de contingut a la vista de la sèrie de diapositives.<br><br>La vista de sèrie de diapositives genera una visualització prèvia de cada document que selecciona un usuari. Tot i això, si s'utilitza la vista de sèrie de diapositives, reduirà el rendiment del client web. A més, heu de configurar el visualitzador de conversió HTML per veure visualitzacions prèvies del document.",
		admin_enabled: "Habilita",
		admin_disabled: "Inhabilita",
		admin_include: "Inclou",
		admin_exclude: "Exclou",
		admin_layout_teamspaces_default_repository: "Espais d'equip:",
		admin_layout_entry_templates_default_repository: "Plantilles d'entrada:",
		admin_layout_other_features_default_repository: "Cerca i navega:",
		admin_layout_work_default_repository: "Feina:",
		admin_layout_default_feature: "Característica per defecte:",
		admin_default_category_placeholder: "Seleccioneu una característica",
		admin_layout_default_feature_hover: "Especifiqueu quina característica es mostra quan els usuaris inicien sessió a l'escriptori.",
		admin_layout_default_feature_warning: "Si es canvia la característica per defecte, pot afectar al temps que es necessita per carregar l'aplicació.",
		admin_layout_feature_list_header: "Característica",
		admin_layout_show_statusbar: "Barra d'estat:",
		admin_layout_show_statusbar_hover: "Especifiqueu si voleu visualitzar la barra d'estat a la part inferior de l'escriptori.<br><br>Si oculteu la barra d'estat, els usuaris no podran veure informació sobre les incidències sense cap error:<ul><li>El document s'ha afegit al dipòsit.</li><li>La cerca ha retornat 59 documents.</li></ul>",
		admin_layout_show_magazineview: "Visualització de revista:",
		admin_layout_show_magazineview_hover: "Especifiqueu si voleu permetre que els usuaris canviïn la llista de contingut a la vista de revista.<br><br>La vista de revista augmenta l'alçada de cada entrada a la llista de contingut, amb la qual cosa es redueix el nombre d'elements que es mostren a la llista de contingut a la vegada.",
		admin_layout_show_detailsview: "Visualització de detalls:",
		admin_layout_show_detailsview_hover: "Especifiqueu si voleu permetre que els usuaris canviïn la llista de contingut a la visualització de detalls.<br><br>La visualització de detalls maximitza el nombre de files visibles a la llista de contingut.",
		admin_feature_config_docinfopane_label: "Panell d'informació de document:",
		admin_feature_config_docinfopane_hoverhelp: "Especifiqueu si els usuaris poden accedir al panell d'informació del document en aquesta característica.",
		admin_feature_config_docinfopane_default_label: "Comportament per defecte:",
		admin_feature_config_docinfopane_expanded: "Ampliat",
		admin_feature_config_docinfopane_collapsed: "Reduït",
		admin_feature_config_docinfopane_expand_on_select: "Amplia quan se seleccioni l'element",
		admin_layout_features_title: "Característiques de l'escriptori",
		admin_layout_features_instructions: "Especifiqueu quines característiques poden accedir-hi els usuaris des d'aquesta escriptori.  A més a més, podeu personalitzar el comportament de cada característica que s'inclou a l'escriptori.",
		admin_layout_components_title: "Components addicionals de l'escriptori",
		admin_layout_components_instructions: "Podeu inhabilitar alguns dels components de l'escriptori si voleu una interfície més profitosa o si voleu millorar el rendiment del client web.",
		admin_layout_featureconfig_instructions: "Selecciona una característica que s'ha de configurar",
		admin_layout_featureconfig_no_configuration: "No hi ha cap configuració de la característica disponible.",
		admin_layout_featureconfig_label: "Configuració de la característica ${0}",
		admin_layout_featureconfig_title: "Configuració de la característica",
		admin_layout_featureconfig_taskManagerURL: "Per utilitzar aquesta característica, heu d'habilitar i configurar l'IBM Content Navigator per connectar al servei de gestor de tasques. Habiliteu el servei de gestor de tasques a la secció <b>Paràmetres</b> d'aquesta eina d'administració.",
		admin_feature_config_show_my_checkouts_label: "Panell Les meves extraccions:",
		admin_feature_config_show_my_checkouts_hoverhelp: "El panell Les meves extraccions permet els usuaris executar una cerca de tots els elements que han extret en un dipòsit específic. Especifiqueu si els usuaris poden accedir al panell Les meves extraccions des de la característica Inici.<br/><br/><b>Restricció:</b> per a aquesta característica, heu de tenir com a mínim un dipòsit IBM Content Manager, IBM FileNet P8 o OASIS CMIS associat amb aquest escriptori.",

		admin_feature_config_default_repository_icon_text: "Dipòsit per defecte",
		admin_show: "Mostra",
		admin_hide: "Oculta",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "No podeu eliminar la característica Administració de l'escriptori Administració",
		admin_warning_label: "Advertiment:",
		admin_layout_show_globaltoolbar: "Barra d'eines global:",
		admin_layout_show_globaltoolbar_hover: "Especifiqueu si voleu visualitzar la barra d'eines en el bàner de la part superior de l'escriptori.<br><br>La barra d'eines global inclou accions que permeten als usuaris afegir documents, carpetes i retencions al dipòsit. Les accions disponibles depenen del dipòsit al qual està connectat l'usuari.",
		admin_interface_text_name_label: "Tipus d'etiqueta",

		admin_interface_text_label_description: "Podeu personalitzar el text que es mostra en algunes àrees del client web. Les etiquetes es mostren a tots els dipòsits i escriptoris a la configuració. Introduïu el text que voleu veure a la interfície en el camp Etiqueta actual.<br><br><b>Important:</b> qualsevol canvi que feu a les etiquetes no es mostrarà a l'eina d'administració.",
		admin_interface_text_label_action: "Etiquetes d'acció",
		admin_interface_text_label_action_description: "Es mostren etiquetes d'acció a botons i menús a tot el client web. Podeu definir diferents etiquetes d'acció per cada tipus de dipòsit.",
		admin_interface_text_label_application: "Etiquetes d'aplicacions",
		admin_interface_text_label_application_description: "Es mostren etiquetes d'aplicacions en tots els clients web.",
		admin_interface_text_label_system: "Etiquetes de propietat del sistema",
		admin_interface_text_label_system_description: "Les propietats del sistema que es mostren varien en funció del dipòsit. Podeu personalitzar les etiquetes que es mostraran per les propietats de sistema que estan associades amb els documents i amb les carpetes dels dipòsits.",
		admin_interface_text_label_desktop: "Etiquetes d'escriptori",
		admin_interface_text_label_desktop_description: "Si heu personalitzat el nom de l'aplicació a un escriptori, podeu personalitzar aquest nom en idiomes que no siguin l'anglès. També podeu personalitzar els noms dels espais d'aplicacions de l'IBM FileNet P8 en un escriptori.",

		admin_interface_text_system_label: "Etiqueta del sistema",
		admin_interface_text_current_label: "Etiqueta actual",
		admin_interface_text_default_label_heading: "Etiqueta per defecte",
		admin_interface_text_default_label: "Etiqueta per defecte:",
		admin_interface_text_displayed_in_label: "Visualitzat per",
		admin_interface_text_displayed_in_document_folder: "Documents i carpetes",
		admin_interface_text_displayed_in_document: "Documents",
		admin_interface_text_displayed_in_folder: "Carpetes",
		admin_interface_text_displayed_in_admin_application_space: "Etiqueta d'espai d'aplicació",
		admin_interface_text_displayed_in_desktop: "Etiqueta de característica per a dispositiu mòbil",
		admin_interface_text_displayed_in_admin_application_name: "Nom de l'aplicació",

		admin_new_desktop: "Escriptori nou",
		admin_new_repository: "Dipòsit nou",
		admin_new_menu: "Menú nou",
		admin_new_viewer_mapping: "Nou mapatge de visualitzador",
		admin_new_mapping_label: "Nou mapatge",
		admin_new_icon_mapping: "Nou mapatge d'icona",
		admin_viewer_mapping_list_instructions: "Podeu configurar quins visualitzadors utilitza el client web per veure diferents tipus de contingut. Un mapatge de visualitzador defineix quins tipus MIME estan associats amb el visualitzador que voleu utilitzar. Podeu crear diversos mapatges de visualitzador si voleu utilitzar diferents visualitzadors per escriptoris diferents.",
		admin_viewer_mapping_instructions: "Especifiqueu els visualitzadors que voleu utilitzar per obrir fitxers. Si voleu utilitzar un visualitzador personalitzat, heu d'integrar el visualitzador com a un connector abans d'afegir-lo al mapatge de visualitzador.<br><br><b>Important:</b> quan un usuari obre un document, el client web cerca la llista de mapatges del visualitzador per trobar el primer visualitzador que pugui obrir el document segons el sistema operatiu que està executant l'usuari i al dipòsit al qual està connectat l'usuari. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Connector nou",
		admin_menu_list_instructions: "Podeu crear barres d'eines i menús de context personalitzats per controlar quines accions estan disponibles pels usuaris. No podeu editar els menús per defecte però podeu crear còpies dels menús existents per restringir les accions que hi ha disponibles o per afegir les accions personalitzades que s'han definit als connectors.<br><br>Si voleu crear un nou tipus de menú, heu de definir la menú a un connector.",
		admin_menu_id_hover: "L'ID ha de ser únic i no es pot canviar l'ID després de desar el menú.<br><br>L'ID només pot contenir caràcters alfanumèrics i distingeix entre majúscules i minúscules.",
		admin_menu_id_disabled_hover: "No es pot canviar l'ID de menú. Si voleu utilitzar un ID diferent, heu de crear un menú nou.",
		admin_menu_default_instructions: "No podeu editar aquest menú perquè és un menú per defecte. Si voleu editar aquest menú, heu de crear una còpia del menú.",
		admin_menu_toolbar_instructions: "Podeu restringir les accions disponibles d'aquesta barra d'eines o podeu afegir accions personalitzades que estiguin definides en un connector. També podeu organitzar les accions afegint separadors a la barra d'eines.",
		admin_menu_toolbar_custom_instructions: "Aquesta barra d'eines es defineix mitjançant un connector. Si voleu editar aquesta barra d'eines, heu d'actualitzar el connector o crear una còpia de la barra d'eines.",
		admin_menu_context_menu_instructions: "Podeu restringir les accions disponibles d'aquest menú de context o podeu afegir accions personalitzades que estiguin definides en un connector. També podeu organitzar les accions afegint separadors i submenús al menú contextual.",
		admin_menu_context_menu_custom_instructions: "Aquest menú contextual es defineix mitjançant un connector. Si voleu editar aquest menú contextual, heu d'actualitzar el connector o crear una còpia del menú contextual.",
		admin_desktop_list_instructions: "Podeu crear diversos escriptoris per donar accés a diferents usuaris al contingut que necessiten. Per exemple, podeu crear un escriptori que només permet als usuaris cercar contingut o crear un escriptori que proporciona als usuaris accedir a un sol dipòsit. ",
		admin_plugin_updated: "La configuració del connector seleccionat ha canviat. Heu d'actualitzar el navegador perquè els canvis siguin efectius.",
		admin_repository_ci_heading: "Dipòsit del Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Dipòsit del FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Dipòsit del Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Dipòsit del Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Dipòsit del Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Dipòsit del Box: <b>${0}</b>",
		admin_repository_generic_heading: "Dipòsit: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Voleu suprimir els escriptoris seleccionats?\n${0} escriptoris s'han seleccionat.",
		admin_delete_confirmation_menus: "Voleu suprimir els menús seleccionats?\n${0} menús s'han seleccionat.",
		admin_delete_confirmation_repositories: "Voleu suprimir els dipòsits seleccionats?\n${0} dipòsits s'han seleccionat.",
		admin_delete_confirmation_viewer_mappings: "Voleu suprimir els mapatges de visualitzador seleccionats?  S'han seleccionat ${0} mapes.",
		admin_delete_confirmation_icon_mappings: "Voleu suprimir les configuracions d'icona seleccionades?\n${0} configuracions s'han seleccionat.",
		admin_delete_confirmation_plugins: "Voleu suprimir els connectors seleccionats?\n${0} connectors s'han seleccionat.",
		admin_delete_confirmation: "Voleu suprimir els elements seleccionats?\n${0} elements s'han seleccionat.",

		admin_viewer_mapping_id_hover: "L'ID ha de ser únic i no es pot canviar l'ID després de desar el mapar visualitzador.<br><br>L'ID només pot contenir caràcters alfanumèrics i distingeix entre majúscules i minúscules.",
		admin_viewer_mapping_id_disabled_hover: "No es pot canviar l'ID del mapatge de visualitzador. Si voleu utilitzar un ID diferent, heu de crear un mapatge de visualitzador nou.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "L'escriptori per defecte no es pot suprimir.",

		admin_desktop_heading: "Escriptori: <b>${0}</b>",
		admin_menu_toolbar_heading: "Barra d'eines: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Barra d'eines personalitzada: <b>${0}</b>",
		admin_menu_context_menu_heading: "Menú contextual: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Menú contextual personalitzat: <b>${0}</b>",
		admin_plugin_heading: "Connector: <b>${0}</b>",
		admin_plugin_instructions: "El connector pot ser un fitxer JAR o un fitxer de classes compilat.<br/><br/><b>Important:</b> el servidor d'aplicacions web de l'IBM Content Navigator ha de tenir accés al fitxer del connector mitjançant el sistema de fitxers local o un URL.",
		admin_plugin_list_instructions: "Heu d'utilitzar l'eina d'administració per registrar connectors del client web. Si un connector necessita configuració addicional, els paràmetres de configuració es mostraran un cop s'hagi registrat el connector.<br /><br /><b>Important:</b> Si editeu un connector al qual se'n fa referència en una altra àrea de l'eina d'administració, com ara un menú, pot ser que detecteu problemes amb el comportament del connector. A més, els connectors s'invoquen en l'ordre en què apareixen a la llista. Si un connector s'ha d'executar abans que un altre, assegureu-vos que els connectors apareguin a la llista en l'ordre en el qual s'han d'executar.",
		admin_plugin_cannot_delete: "El connector seleccionat no es pot eliminar perquè hi ha altres connectors que en depenen.<br/>Connectors seleccionats: ${0}<br/>Connectors dependents: ${1}",
		admin_plugin_cannot_disable: "El connector seleccionat no es pot inhabilitar perquè hi ha altres connectors que en depenen.<br/>Connectors seleccionats: ${0}<br/>Connectors dependents: ${1}",
		admin_plugin_cannot_add: "El connector no es pot afegir perquè falten alguns dels connectors de què depenen o estan inhabilitats. Connectors que falten o que estan inhabilitats: ${0}",
		admin_plugin_cannot_enable: "Els connectors seleccionats no es poden habilitar perquè falten alguns dels connectors de què depenen o estan inhabilitats.<br/>Connectors seleccionats: ${0}<br/>Connectors que falten o que estan inhabilitats: ${1}",
		admin_plugin_save_order: "Desa l'ordre",
		admin_plugin_load: "Carrega",
		admin_plugin_load_hover: "Especifica l'URL del connector",
		admin_plugin_file_hover: "Si el fitxer JAR del connector és al vostre sistema de fitxers local, podeu escriure el camí d'accés complet o l'URL del fitxer del connector. Si el fitxer JAR del connector és en un servidor remot, heu d'escriure l'URL del fitxer del connector.",
		admin_plugin_classfolderpath_hover: "El fitxer de classe compilat ha de ser al servidor d'aplicacions web de l'IBM Content Navigator.<br/><br/>Introduïu el camí d'accés complet de la carpeta on es compilin i generin les classes del connector.<br/><br/>El camí d'accés no pot contenir el nom de paquet de la classe del connector. Per exemple, el camí d'accés per defecte de la classe del connector d'exemple al Windows és C:\\Fitxers de programa (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Introduïu el nom complet de la classe Java dins el fitxer de classe que s'ha de carregar i que s'anomena classe del connector.<br/>Per exemple, el nom de classe del connector d'exemple és com.ibm.ecm.extension.sample.<br/>Connector d'exemple.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "No s'ha trobat el fitxer JAR del connector a l'URL especificat. Assegureu-vos que el fitxer JAR es troba al servidor d'aplicacions web i que l'URL i el nom de fitxer són correctes.",
		admin_plugin_for_repository_not_loaded: "No podeu editar aquest dipòsit. No s'ha carregat el connector que defineix i admet aquest tipus de dipòsit. A la pestanya Connectors, editeu el connector per comprovar que s'ha configurat correctament i que s'ha carregat.",
		admin_plugin_repository_types: "Tipus de dipòsits:",
		admin_plugin_viewers: "Visualitzadors:",
		admin_plugin_features: "Característiques:",
		admin_plugin_layouts: "Formats:",
		admin_plugin_not_available: "No està disponible",
		admin_plugin_config_params: "Paràmetres de configuració:",
		admin_viewer_def_heading: "Mapatge de visualitzador: <b>${0}</b>",
		admin_users_and_groups: "Usuaris i grups",
		admin_general: "General",
		admin_logging: "Registre",
		admin_authentication: "Autenticació",		
		admin_rolebase_role: "Rol:",
		admin_settings_logging_instructions: "Podeu registrar-vos per solucionar problemes relacionats amb el client web. Podeu refinar el registre si sabeu que es produeix un problema en una determinada classe de Java o a un usuari en concret. S'ha escrit informació d'error als fitxers de registre d'error del servidor d'aplicacions web.",
		admin_settings_logging_instructions2: "<b>Paràmetres de registre de depuració</b><br />Si sabeu que es produeix un problema a un usuari o a una màquina d'amfitrió de client específics, podeu portar el registre de depuració a la màquina o a l'usuari. Podeu capturar informació de depuració en un entorn de producció sense que això afecti significativament al rendiment del sistema.<br /><br /><b>Important:</b> si especifiqueu un usuari o una màquina d'amfitrió de client, aquest valor alterarà temporalment els altres paràmetres de registre. Després de capturar la informació que necessiteu, configureu aquesta opció a <b>Cap</b> per reprendre el registre estàndard de l'entorn.",
		admin_settings_export_config_hover: "Exporteu la informació de configuració del sistema actual a un fitxer per utilitzar-lo amb l'IBM Support Assistant Data Collector. El fitxer es desa a la ubicació que es defineix mitjançant la propietat del sistema Java user.home.",
		admin_logging_level: "Registre de nivell d'aplicacions:",
		admin_logging_level_hover: "Els nivells de registre afecten la quantitat d'informació que està emmagatzemada al servidor. Si se selecciona <b>error</b>, es capturarà el mínim d'informació de registre. Si se selecciona <b>depuració</b>, es capturarà més informació.<br /><br />No especifiqueu <b>depuració</b> en un entorn de producció, tret que us ho demani l'IBM Software Support.",
		admin_logging_level_0: "No hi ha cap registre",
		admin_logging_level_1: "Error",
		admin_logging_level_2: "Advertiment",
		admin_logging_level_3: "Informació",
		admin_logging_level_4: "Depuració",
		admin_logging_classes: "Registre de nivell de classe:",
		admin_logging_classes_hover: "Per defecte, totes les classes Java i els paquets s'inclouen als registres d'errors del servidor d'aplicacions web. No obstant això, podeu especificar quines classes o quins paquets voleu incloure o excloure del registre. Podeu utilitzar els registres d'error del servidor d'aplicacions web per determinar quines classes s'han d'incloure o d'excloure.<br><br>Si sabeu que es produeix un problema en una classe específica, podeu incloure aquesta classe en els fitxers de registre. Quan incloeu una classe als registres d'error, totes les altres classes s'exclouran del fitxer de registre.<br><br>Si sabeu que un problema no es produeix en una classe i voleu reduir la grandària del fitxer de registre, podeu excloure aquesta classe dels fitxers de registre.",
		admin_logging_classes_include: "Inclou",
		admin_logging_classes_include_all: "Totes les classes",
		admin_logging_classes_include_specified: "Classes específiques",
		admin_logging_classes_include_specified_msg: "Especifiqueu quines classes s'han d'incloure.",
		admin_logging_classes_exclude: "Exclou",
		admin_logging_classes_exclude_none: "Cap",
		admin_logging_classes_exclude_specified: "Classes específiques",
		admin_logging_classes_exclude_specified_msg: "Especifiqueu quines classes s'han d'excloure.",
		admin_logging_debug: "Registre de depuració per:",
		admin_logging_debug_hover: "<b>Important:</b> reviseu els fitxers de registre del servidor d'aplicacions web abans d'especificar una adreça IP de màquina d'amfitrió de client o un usuari. El valor que especifiqueu ha de coincidir amb el valor que es mostra en el fitxer de registre.",
		admin_logging_debug_none: "Cap (valor per defecte)",
		admin_logging_debug_host: "Màquines d'amfitrió del client (adreces IP)",
		admin_logging_debug_host_msg: "Especifiqueu l'adreça IP d'una màquina de client o més màquines de les quals en voleu registrar la informació de depuració. Utilitzeu una coma per separar adreces IP.<br /><br /><b>Important:</b> reviseu els fitxers de registre del servidor d'aplicacions web abans d'especificar una adreça IP. El valor que especifiqueu ha de coincidir amb el valor que es mostra en el fitxer de registre.",
		admin_logging_debug_user: "Usuaris",
		admin_logging_debug_user_msg: "Especifiqueu el nom d'usuari d'una màquina o més usuaris a qui voleu registrar la informació de depuració. Utilitzeu una coma per separar els noms d'usuari.<br /><br /><b>Important:</b> reviseu els fitxers de registre del servidor d'aplicacions web abans d'especificar un nom d'usuari. El valor que especifiqueu ha de coincidir amb el valor que es mostra en el fitxer de registre.",

		admin_office_settings_logging_instructions: "Podeu registrar-vos per solucionar problemes relacionats amb l'IBM Content Navigator for Microsoft Office. Podeu refinar el registre si sabeu que es produeix un problema en una determinada classe o a un usuari en concret. S'ha escrit informació d'errors als fitxers de registre d'aplicació a màquines d'amfitrió de client de l'IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Paràmetres de registre de depuració</b><br />Si sabeu que es produeix un problema a un usuari de l'IBM Content Navigator for Microsoft Office o a una màquina d'amfitrió de client específics, podeu portar el registre de depuració a la màquina o a l'usuari. Podeu capturar informació de depuració en un entorn de producció sense que això afecti significativament al rendiment del sistema. <br /><br /><b>Important:</b> si especifiqueu un usuari o una màquina d'amfitrió de client, aquest valor alterarà temporalment els altres paràmetres de registre. Després de capturar la informació que necessiteu, configureu aquesta opció a <b>Cap</b> per reprendre el registre estàndard de l'entorn de l'IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Important:</b> reviseu els fitxers de registre de la màquina del client abans d'especificar una adreça IP de màquina d'amfitrió de client o un usuari. El valor que especifiqueu ha de coincidir amb el valor que es mostra en el fitxer de registre. ",
		admin_office_logging: "Registre de l'Office",
		admin_office_logging_classes: "Registre de nivell de classes:",
		admin_office_logging_classes_hover: "Per defecte, totes les classes i paquets s'inclouen als registres d'errors de l'IBM Content Navigator for Microsoft Office. No obstant això, podeu especificar quines classes o quins paquets voleu incloure o excloure del registre. Podeu utilitzar els registres de la màquina del client per determinar quines classes s'han d'incloure o d'excloure.<br /><br />Si sabeu que es produeix un problema en una classe específica, podeu incloure aquesta classe en els fitxers de registre. Quan incloeu una classe als registres d'error, totes les altres classes s'exclouran dels fitxers de registre. <br /><br />Si sabeu que un problema no es produeix en una classe i voleu reduir la grandària del fitxer de registre, podeu excloure aquesta classe dels fitxers de registre. ",
		admin_office_logging_debug_hover: "<b>Important:</b> reviseu els fitxers de registre de la màquina del client abans d'especificar una adreça IP de màquina d'amfitrió de client o un usuari. El valor que especifiqueu ha de coincidir amb el valor que es mostra en el fitxer de registre.",
		admin_office_logging_additional_settings: "Paràmetres addicionals:",
		admin_office_logging_additional_settings_hover: "Especifica els paràmetres addicionals",
		admin_office_logging_file_size: "Mida del fitxer de registre",
		admin_office_logging_file_size_hover: "Especifiqueu la mida amb la qual l'IBM Content Navigator for Microsoft Office crea un nou fitxer de registre. Quan un fitxer de registre arriba a la mida màxima, el registre actual es reanomena per incloure la data (amb el format aaaaMMdd) i un número d'increment de fitxer (per exemple, ICNExcelAddin-20121116-5.log) i es crearà un nou fitxer de registre. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Mostra la traça de pila als diàlegs",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "De forma opcional, podeu mostrar informació de traça de pila als diàlegs de missatge per facilitar la resolució de problemes. Fins i tot si no habiliteu aquesta opció, la informació de traça de pila detallada sempre s'inclourà als registres d'errors de l'IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Icones d'estat",
		admin_icon_state_icon: "Icona d'estat",
		admin_icon_state: "Estat",
		state_contains_label: "L'estat conté",
		admin_icon_state_instructions: "Podeu personalitzar les icones que es mostren al costat dels documents, de les carpetes i dels elements de treball als dipòsits.<br><br><b>Consell:</b> podeu especificar si cal mostrar les icones d'estat per cada dipòsit a l'entorn.",
		admin_icon_state_dialog_title: "Mapatge d'icones d'estat",
		admin_icon_state_dialog_instructions: "Podeu mapar l'estat seleccionat a una icona predefinida que es proporciona amb el client web o amb una icona personalitzada.",

		admin_icon_mapping_twisty: "Icones de tipus MIME",
		admin_icon_mapping_dialog_title: "Mapatge d'icones",
		admin_icon_mapping: "Mapatge d'icones",
		admin_icon_mapping_instructions: "Podeu mapar una llista de tipus MIME a una icona predefinida que es proporciona amb el client web o amb una icona personalitzada.",
		admin_icon_mapping_list_instructions: "Podeu personalitzar les icones que es mostren pels diferents tipus MIME que s'emmagatzemen al dipòsit. El client web utilitza les icones amb l'ordre en el qual estan llistades. Si un tipus MIME apareix a la llista més d'una vegada, s'utilitzarà la primera icona associada amb aquell tipus MIME.",
		admin_icon_mapping_icon_label: "Quina icona voleu utilitzar?",
		admin_icon_mapping_file_name: "Icona personalitzada:",
		admin_icon_mapping_file_name_heading: "Icona personalitzada",
		admin_icon_mapping_file_name_placeholder: "Especifica l'URL de la icona",
		admin_icon_mapping_file_name_hover: "Introduïu l'URL de la icona. Si el contingut és al mateix servidor d'aplicacions web com el client web, escriviu un URL relatiu. Per exemple: /lesmevespersonalitzacions/icona.png",
		admin_icon_mapping_class_name: "Icona predefinida:",
		admin_icon_mapping_class_name_heading: "Icona predefinida",
		admin_icon_mapping_class_name_hover: "Seleccioneu una icona que es proporciona amb el client web.",
		admin_icon_mapping_class_name_placeholder: "Selecciona una icona",

		admin_p8_instructions: "Aquesta informació es comparteix amb tots els dipòsits FileNet Content Manager que s'han configurat pel client web.",
		admin_p8_collaboration_config: "Configuració opcional de FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Podeu configurar aquests paràmetres si voleu ajustar FileNet Collaboration Services a l'entorn de l'IBM FileNet P8.",
		admin_p8_use_url_incoming: "Utilitzeu l'URL a les sol·licituds entrants per generar URL de resposta:",
		admin_p8_use_url_incoming_hover: "En la majoria d'entorns del FileNet Collaboration Services, podeu utilitzar l'URL d'una sol·licitud entrant per generar l'URL en una resposta. Seleccioneu <b>Sí</b> tret que s'apliqui una de les situacions següents a l'entorn:<ul><li>Vulgueu forçar a les aplicacions de client que accedeixin al FileNet Collaboration Services a través d'un URL específic.<li>Els paràmetres del servidor intermediari fan que FileNet Collaboration Services generi URL no vàlids.</ul>",

		admin_p8_use_url_incoming_http: "URL dels serveis de col·laboració de FileNet:",
		admin_p8_use_url_incoming_http_hover: "Especifiqueu l'URL des d'on les aplicacions del client podran accedir a FileNet Collaboration Services amb aquest format http://servidorFNC:numero_port.",
		admin_p8_use_url_incoming_https: "URL HTTPS de FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Si FileNet Collaboration Services s'ha configurat per utilitzar SSL, especifiqueu l'URL HTTPS des d'on les aplicacions del client podran accedir a FileNet Collaboration Services amb aquest format https://servidorFNC:numero_port.",
		admin_p8_hide_email_addresses: "Oculta les adreces de correu electrònic de l'usuari a les respostes del servidor:",
		admin_p8_hide_email_addresses_hover: "Podeu ocultar les adreces de correu electrònic de l'usuari a les respostes del servidor si han de ser compatibles amb les polítiques de privadesa. Per exemple, podeu ocultar la llista de les adreces de correu electrònic dels usuaris quan el servidor torni una llista de documents i informació sobre els usuaris que han creat el document o l'han editat.",

		admin_p8_mask_user_ids: "ID d'usuaris de màscara a fitxers de registre:",
		admin_p8_mask_user_ids_hover: "Podeu ocultar noms d'usuari als fitxers de registre de FileNet Collaboration Services si han de ser compatibles amb les polítiques de privadesa. Quan habiliteu aquesta opció, els noms d'usuari es reemplacen per valors hash. Això us permet proporcionar fitxers de registre per empreses externes, com ara IBM, per finalitats d'ajuda sense afectar els noms d'usuaris o els registres d'activitats.",

		admin_p8_soft_delete: "Com moure els fitxers suprimits al cubell de recuperació:",
		admin_p8_soft_delete_hover: "Quan els usuaris suprimeixen elements, moveu els elements a un cubell de recuperació, en comptes de suprimir-los del dipòsit. Els elements romandran al cubell de recuperació fins que es depurin. S'ignorarà aquest valor si el dipòsit de destinació no admet els cubells de recuperació.<br><br><b>Restricció:</b> els cubells de recuperació s'admeten a l'IBM FileNet P8 versió 5.2 o posteriors i necessiten complements del Social Collaboration Base Extensions.",

		admin_p8_download: "Configuració del Content Download HTTP Cache",
		admin_p8_download_instructions: "Si els dipòsits de l'IBM FileNet Content Manager contenen molts fitxers grans, podeu configurar el CDHC (Content Download HTTP Cache) per habilitar FileNet Collaboration Services per redirigir de manera segura les sol·licituds de contingut per fitxers grans a un servidor web.<br/><br/>La característica necessita l'IBM HTTP Server. A més a més, heu d'actualitzar el fitxer de l'IBM HTTP Server httpd.conf.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Especifiqueu si voleu habilitar el CDHC per tots els dipòsits de l'IBM FileNet Content Manager de l'entorn. Podeu especificar una mida mínima del fitxer amb la qual s'emmagatzemen els fitxers a la memòria cau.",
		admin_p8_download_cache_folder: "Directori complet de la memòria cau:",
		admin_p8_download_cache_folder_hover: "Especifiqueu el camí d'accés complet del directori on voleu emmagatzemar fitxers de la memòria cau. El directori pot ser a qualsevol sistema operatiu o dispositiu, com ara un directori de xarxa compartit, sempre que sigui visible com un sistema de fitxers al FileNet Collaboration Services i l'IBM HTTP Server.",
		admin_p8_download_cache_url: "Àlies de la ubicació de memòria cau:",
		admin_p8_download_cache_url_hover: "Especifiqueu l'àlies que s'utilitza per apuntar al directori de memòria cau des de l'URL del FileNet Collaboration Services. Especifiqueu l'àlies amb el format /alies, per exemple, /cdhc.<br/><br/>Quan s'inclou /cdhc en un URL, l'aplicació es redirigeix al directori de memòria cau complet.",
		admin_p8_download_cache_max_files: "Nombre màxim de fitxers de la memòria cau:",
		admin_p8_download_cache_max_files_hover: "Quan s'arriba al nombre màxim de fitxers, el fitxer més antic s'eliminarà de la memòria cau.<br><br>Si especifiqueu el nombre màxim de fitxers a la memòria cau i la mida màxima de la memòria cau, el fitxer més antic s'eliminarà de la memòria cau quan el fitxer més baix compleix les dues condicions.",
		admin_p8_download_cache_max_size: "Mida màxima de la memòria cau (en GB):",
		admin_p8_download_cache_max_size_hover: "Quan s'arriba a la mida màxima de memòria cau, el fitxer més antic s'eliminarà de la memòria cau.<br/><br/>Si especifiqueu el nombre màxim de fitxers a la memòria cau i la mida màxima de la memòria cau, el fitxer més antic s'eliminarà de la memòria cau quan el fitxer més baix compleix les dues condicions.",
		admin_p8_download_cache_cleanup_duration: "Durada màxima de la neteja (en segons):",
		admin_p8_download_cache_cleanup_duration_hover: "Especifiqueu la quantitat màxima de temps que podrà trigar la neteja. La durada per defecte és 5 segons.<br><br>Els fitxers que estan subjectes a la supressió però que queden a la memòria cau després de l'operació de neteja s'eliminaran durant una futura operació de neteja.",
		admin_p8_download_cache_cleanup_min: "Interval mínim entre les operacions de neteja de la memòria cau (en segons):",
		admin_p8_download_cache_cleanup_min_hover: "Especifiqueu la quantitat mínima de temps que ha de transcórrer entre les operacions de neteja de la memòria cau. El temps per defecte és 3.600 segons (1 hora).<br><br>Les operacions de neteja de la memòria cau només es produeixen quan hi ha una sol·licitud activa per baixar contingut des de la memòria cau. Si es produeixen sol·licituds cada minut, l'operació de neteja es produirà cada hora. Tanmateix, si passen tres hores entre les sol·licituds de baixada, l'operació de neteja no es produirà dins que es rebi la següent sol·licitud.",
		admin_p8_download_cache_min_lifetime: "Temps mínim a la memòria cau (en segons):",
		admin_p8_download_cache_min_lifetime_hover: "Especifiqueu la quantitat mínima de temps que un fitxer es manté a la memòria cau perquè es pugui eliminar. El temps per defecte és 3.600 segons (1 hora).<br><br>Fins i tot si la memòria cau arriba a la mida màxima o conté el número màxim de fitxers, el fitxer més antic a la memòria cau no es pot suprimir fins que el fitxer estigui a la memòria cau durant la quantitat de temps especificada.",
		admin_p8_download_cache_size_threshold: "Mida mínima del fitxer a la memòria cau (en KB):",
		admin_p8_download_cache_size_threshold_hover: "Especifiqueu la mida mínima amb què s'ha de fer servir CDHC per emmagatzemar els fitxers a la memòria cau. Si un fitxer és més petit que la mida especificada, el fitxer es redirigeix a través del servidor d'aplicacions web on es desplega FileNet Collaboration Services. La mida per defecte és 1.000 KB.",
		admin_p8_download_guard_header: "Capçalera HTTP per poder desar:",
		admin_p8_download_guard_header_hover: "Si una aplicació de client no encamina una sol·licitud per mitjà de l'IBM HTTP Server, el contingut de la memòria cau no es podrà baixar. Podeu especificar que només les sol·licituds d'entrada amb una determinada capçalera HTTP (que s'afegeix a sol·licituds de l'IBM HTTP Server) poden accedir al contingut de la memòria cau per evitar baixar anomalies.<br><br>La capçalera HTTP està configurada a l'IBM HTTP Server i està present a totes les sol·licituds d'entrada que s'encaminen mitjançant l'IBM HTTP Server. Si una sol·licitud no té la capçalera HTTP, el contingut s'encaminarà a través del servidor de l'aplicació web en comptes de l'IBM HTTP Server.",
		admin_p8_download_generate_config: "Genera configuració",
		admin_p8_download_generate_config_label: "Configuració de l'IBM HTTP Server",
		admin_p8_download_generate_config_label_hover: "Per tal que la configuració CHDC funcioni, heu d'actualitzar el fitxer de l'IBM HTTP Server httpd.conf. Feu clic a Genera configuració per generar les sentències que s'ha d'afegir al fitxer httpd.conf.",

		admin_logging_viewone_pro: "Registre professional de ViewONE:",
		admin_logging_viewone_virtual: "Registre virtual de ViewONE:",
		admin_logging_viewone_streamer: "Registre del Mòdul Document Streaming Server:",
		admin_logging_viewone_streamer_hover: "Les opcions de registre del mòdul Document Streaming Server només es poden aplicar si heu habilitat la reproducció en temps real dels fitxers PDF o TIFF a la secció <b>Daeja ViewONE</b> de l'eina d'administració.",
		admin_logging_viewone_redaction: "Registre del mòdul Permanent Redaction Server:",
		admin_logging_viewone_redaction_hover: "Les opcions de registre del mòdul Permanent Redaction Server només s'apliquen si esteu autoritzat per utilitzar el mòdul de redacció de Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Seqüència fitxers en PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Si teniu documents PDF molt grans al dipòsit, podeu habilitar el visualitzador per seqüenciar el contingut del document per tal que els usuaris puguin visualitzar més ràpidament aquests documents. No obstant això, si la seqüència no funciona a l'entorn, podeu inhabilitar la reproducció en temps real.",
		admin_daeja_viewonepro_stream_tiff_documents: "Seqüència fitxers en TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Si teniu documents TIFF molt grans al dipòsit, podeu habilitar el visualitzador per seqüenciar el contingut del document per tal que els usuaris puguin visualitzar més ràpidament aquests documents. No obstant això, si la seqüència no funciona a l'entorn, podeu inhabilitar la reproducció en temps real.",
		admin_daeja_viewonepro_show_file_buttons: "Botons de Fitxer",
		admin_daeja_viewonepro_show_file_menus: "Menús de Fitxer",
		admin_daeja_viewonepro_enable_file_keys: "Dreceres de teclat de Fitxer",
		admin_daeja_viewonepro_file_keys_hover_help: "Especifiqueu si voleu que els usuaris utilitzin dreceres de teclat per treballar amb fitxers, per exemple per obrir o desar un fitxer. Per obtenir més informació sobre dreceres de teclat específiques, consulteu la descripció del paràmetre FileKeys al manual de referència de paràmetres IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Botons d'Imprimeix",
		admin_daeja_viewonepro_show_print_menus: "Menús d'Imprimeix",
		admin_daeja_viewonepro_enable_print_keys: "Dreceres de teclat d'Imprimeix",
		admin_daeja_viewonepro_print_keys_hover_help: "Especifiqueu si voleu que els usuaris utilitzin dreceres de teclat per imprimir fitxers, per exemple imprimir una pàgina o un document. Per obtenir més informació sobre dreceres de teclat específiques, consulteu la descripció del paràmetre PrintKeys al manual de referència de paràmetres IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Botons d'inversió",
		admin_daeja_viewonepro_annotation_tooltip: "Ajuda contextual d'anotació personalitzada per defecte",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Escriviu el text que es visualitzarà quan no s'especifiqui cap ajuda contextual per a una anotació personalitzada. El text pot incloure testimonis substituïbles. Per exemple, &quot;&lt;creator&gt; ha creat aquesta anotació a &lt;createdateonly&gt;.&quot; Per obtenir més informació sobre testimonis substituïbles, consulteu el paràmetre customAnnotationsToolTip al manual de referència de paràmetres de l'IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Utilitza l'ajuda contextual personalitzada predefinida",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Utilitza l'ajuda contextual mostrada definida pel sistema en el següent quadre de text",
		admin_daeja_viewonepro_help_url: "URL d'ajuda:",
		admin_daeja_viewonepro_help_url_hover_help: "Especifiqueu l'URL de la pàgina web que conté la documentació d'ajuda per al visualitzador. El botó d'ajuda de la barra d'eines del visualitzador i l'acció del menú d'ajuda s'obren a la pàgina web. Si no especifiqueu cap URL, el botó d'ajuda i l'acció de menú no es visualitzaran.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Context del recurs de segell d'imatge:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "pendent",
		admin_daeja_viewonepro_route_docs: "Encamina contingut no admès al navegador:",
		admin_daeja_viewonepro_route_docs_hover_help: "Els usuaris poden visualitzar fitxers d'imatge no admesos dirigint-los al navegador, que obre l'aplicació adequada per visualitzar el fitxer. Per exemple, per obrir un document de Microsoft Word, el navegador utilitza el visualitzador de Microsoft Word.",
		admin_daeja_viewonepro_scale: "Ajusta la imatge automàticament:",
		admin_daeja_viewonepro_scale_best: "Millor ajustament",
		admin_daeja_viewonepro_scale_ftow: "Ajusta a l'amplada",
		admin_daeja_viewonepro_scale_ftoh: "Ajusta a l'alçada",
		admin_daeja_viewonepro_enable_hotkeys: "Habilita les dreceres de teclat:",
		admin_daeja_viewonepro_show_features: "Mostra botons i menús:",
		admin_daeja_custom_settings: "Paràmetres addicionals:",
		admin_daeja_custom_settings_hover_help: "Podeu afegir altres paràmetres especificant el nom i el valor del paràmetre. Per exemple, podeu especificar &quot;scrollbars&quot; i &quot;true&quot; si voleu que es mostrin barres de desplaçament quan l'imatge s'escali a una mida més gran que l'àrea de visualització. Per obtenir més informació sobre els noms i valors de paràmetres, consulteu el manual de referència de paràmetres de l'IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Ajuda contextual d'anotació personalitzada per defecte",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Escriviu el text que es visualitzarà quan no s'especifiqui cap ajuda contextual per a una anotació personalitzada. El text pot incloure testimonis substituïbles. Per exemple, &quot;&lt;creator&gt; ha creat aquesta anotació a &lt;createdateonly&gt;.&quot; Per obtenir més informació sobre testimonis substituïbles, consulteu el paràmetre customAnnotationsToolTip al manual de referència de paràmetres de l'IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Utilitza l'ajuda contextual personalitzada predefinida",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Utilitza l'ajuda contextual mostrada definida pel sistema en el següent quadre de text",
		admin_daeja_virtual_image_stamp_resource_context: "Context del recurs de segell d'imatge:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "pendent",
		admin_daeja_virtual_license_path:"Camí d'accés dels fitxers de llicència",
		admin_daeja_virtual_license_path_hover_help:"Especifiqueu el camí d'accés complet del directori que conté els fitxers de llicència lic-server-virtual.v1 i lic-server.v1. ",
		admin_default_license_path:"Utilitza el camí d'accés dels fitxers de llicència per defecte",
		admin_license_path_specified:"Utilitza el camí d'accés dels fitxers de llicència personalitzat",

		admin_daeja_streamer: "Servidor",
		admin_daeja_streamer_cache_root: "Directori de memòria cau:",
		admin_daeja_streamer_cache_root_hover_help: "Especifiqueu el camí d'accés complet del directori on voleu emmagatzemar fitxers de la memòria cau per a tenir-hi més ràpid accés. El directori pot estar a qualsevol sistema operatiu o dispositiu, com ara un directori de xarxa, si és visible com a un sistema de fitxers a l'IBM Content Navigator i l'IBM HTTP Server. Utilitzeu un directori local per millorar el rendiment.",
		admin_daeja_streamer_settings: "Paràmetres addicionals:",
		admin_daeja_streamer_settings_hover_help: "Podeu afegir altres paràmetres especificant el nom i el valor del paràmetre. Per exemple, podeu especificar “cookieAllowedDomainList”  i una llista separada per comes de servidors d'amfitrió.  Per obtenir més informació sobre els noms i valors de paràmetres, consulteu el manual de referència de paràmetres de l'IBM Daeja ViewONE.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Paràmetres:",
		admin_daeja_redaction_settings_hover_help: "Podeu afegir altres paràmetres especificant el nom i el valor del paràmetre. Per exemple, podeu especificar , “burnIncrementalAnnotations” i ”true”. Per obtenir més informació sobre els noms i valors de paràmetres, consulteu el manual de referència de paràmetres de l'IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Paràmetre nou",
		admin_daeja_setting_dialog_title_edit: "Edita paràmetre",
		admin_daeja_setting_dialog_hover_help: "Afegiu altres paràmetres especificant el nom i el valor del paràmetre. Per exemple, podeu especificar “scrollbars” i “true” si voleu que es mostrin barres de desplaçament quan l'imatge s'escali a una mida més gran que l'àrea de visualització.",
		admin_daeja_setting_dialog_field_hover_help: "Per obtenir més informació sobre els noms i valors de paràmetres, consulteu el manual de referència de paràmetres del Daeja ViewONE.",

		admin_daeja_logging: "Registre de Daeja ViewONE",
		admin_daeja_logging_trace: "Habilita el registre de traça",
		admin_daeja_logging_trace_net: "Habilita el registre de xarxa:",
		admin_daeja_logging_trace_annotations: "Habilita el registre d'anotacions",
		admin_daeja_logging_log_file: "Fitxer de registre:",
		admin_daeja_logging_instructions: "Podeu utilitzar el registre per solucionar problemes amb Daeja ViewONE Professional i Daeja ViewONE Virtual. Si sabeu que es produeix un problema per a una característica determinada, podeu enfocar el registre a aquesta característica.",

		admin_v1pro_logging_trace_hover: "Utilitzeu aquest paràmetre per solucionar problemes generals amb el visualitzador.<br><br>La informació de registre s'escriu a la consola Java de la màquina client. Podeu accedir a la consola Java des del Panell de control (Windows) o les Preferències del sistema (Mac) per al vostre sistema operatiu.",
		admin_v1pro_logging_trace_net_hover: "Utilitzeu aquest paràmetre per solucionar els problemes següents:<ul><li>Problemes amb al connexió al servidor</li><li>Problemes amb els tipus MIME</li><li>Problemes amb fitxers que són massa llargs</li></ul>A més, podeu utilitzar el registre de traça de xarxa per determinar o es produeixen els retards quan utilitzeu Daeja ViewONE Professional.<br><br>La informació de registre s'escriu a la consola Java de la màquina client. Podeu accedir a la consola Java des del Panell de control (Windows) o les Preferències del sistema (Mac) per al vostre sistema operatiu.",
		admin_v1pro_logging_trace_annotations_hover: "Utilitzeu aquest paràmetre per solucionar problemes amb la creació, l'emmagatzematge o la càrrega d'anotacions.<br><br>La informació de registre s'escriu a la consola Java de la màquina client. Podeu accedir a la consola Java des del Panell de control (Windows) o les Preferències del sistema (Mac) per al vostre sistema operatiu.",

		admin_virtual_logging_trace_hover: "Utilitzeu aquest paràmetre per solucionar problemes generals amb el visualitzador.<br><br>Per defecte, la informació de registre s'escriu al fitxer virtual.log del subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Utilitzeu aquest paràmetre per solucionar els problemes següents:<ul><li>Problemes amb al connexió al servidor</li><li>Problemes amb els tipus MIME</li><li>Problemes amb fitxers que són massa llargs</li></ul>A més, podeu utilitzar el registre de traça de xarxa per determinar o es produeixen els retards quan utilitzeu Daeja ViewONE Virtual.<br><br>Per defecte, la informació de registre s'escriu al fitxer virtual.log del subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Utilitzeu aquest paràmetre per solucionar problemes amb la creació, l'emmagatzematge o la càrrega d'anotacions.<br><br>Per defecte, la informació de registre s'escriu al fitxer virtual.log del subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Si habiliteu la informació de registre per al visualitzador, heu d'especificar el nom i el camí d'accés complets del fitxer de registre on voleu emmagatzemar la informació de registre.  Es recomana que anomeneu el fitxer de registre de la manera següent: virtual.log.",

		admin_streamer_logging_trace_hover: "Utilitzeu aquest paràmetre per solucionar problemes generals amb el mòdul Document Streaming Server.<br><br>Per defecte, la informació de registre s'escriu al fitxer streamer.log, que és al subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Utilitzeu aquest paràmetre per solucionar els problemes següents:<ul><li>Problemes amb al connexió al servidor</li><li>Problemes amb els tipus MIME específics</li><li>Problemes amb fitxers que són massa llargs</li></ul>A més, podeu utilitzar el registre de traça de xarxa per determinar o es produeixen els retards quan utilitzeu el mòdul Document Streaming Server.<br><br>Per defecte, la informació de registre s'escriu al fitxer streamer.log, que és al subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Si habiliteu la informació de registre per Document Streaming Server Module, heu d'especificar el nom i el camí d'accés complets del fitxer de registre on voleu emmagatzemar la informació de registre.  Es recomana que anomeneu el fitxer de registre de la manera següent: streamer.log.",

		admin_redaction_logging_trace_hover: "Utilitzeu aquest paràmetre per solucionar problemes generals amb el mòdul Permanent Redaction Server.<br><br>Per defecte, la informació de registre s'escriu al fitxer redacttofile.log, que és al subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Utilitzeu aquest paràmetre per solucionar els problemes següents:<ul><li>Problemes amb al connexió al servidor</li><li>Problemes amb els tipus MIME específics</li><li>Problemes amb fitxers que són massa llargs</li></ul>A més, podeu utilitzar el registre de traça de xarxa per determinar o es produeixen els retards quan utilitzeu el mòdul Permanent Redaction Server.<br><br>Per defecte, la informació de registre s'escriu al fitxer redacttofile.log, que és al subdirectori config del directori d'instal·lació de l'IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Si habiliteu la informació de registre per Permanent Redaction Server Module, heu d'especificar el nom i el camí d'accés complets del fitxer de registre on voleu emmagatzemar la informació de registre.  Es recomana que anomeneu el fitxer de registre de la manera següent: redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configureu les característiques per als visualitzadors i serveis.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Si utilitzeu el client web per connectar-vos a un dipòsit Content Manager OnDemand o més, heu d'especificar informació per tal que OnDemand Web Enablement Kit funcioni correctament. Aquesta informació es comparteix amb tots els dipòsits Content Manager OnDemand que s'han configurat pel client web.",
		admin_ondemand_language: "Idioma:",
		admin_ondemand_tempdir: "Directori temporal ODWEK:",
		admin_ondemand_tracegrp: "Traça ODWEK",
		admin_ondemand_tracedir: "Directori de traça:",
		admin_ondemand_tracelevel: "Nivell de traça:",
		admin_ondemand_tracelevel_0: "0 - No hi ha cap registre",
		admin_ondemand_tracelevel_1: "1 - Registre del missatge d'error",
		admin_ondemand_tracelevel_2: "2 - Registre del missatge d'advertiment i d'error",
		admin_ondemand_tracelevel_3: "3 - Registre del missatge d'advertiment, d'error i amb informació",
		admin_ondemand_tracelevel_4: "4 - Tots els missatges es capturen, incloent-hi la funció de traça",
		admin_ondemand_max_trace_filesize: "Mida màxima del fitxer de traça:",
		admin_ondemand_max_trace_filesize_unlimited: "Il·limitat",
		admin_ondemand_max_trace_filesize_limited: "Limitat (recomanat)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Aquest valor és fora de l'interval. El valor ha de ser un enter entre 1 i 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Directori d'instal·lació AFP2PDF:",
		admin_ondemand_language_hover: "Especifiqueu l'idioma en què ODWEK torna missatges.",
		admin_ondemand_tempdir_hover: "Especifiqueu el directori on l'OnDemand Web Enablement Kit emmagatzema fitxers temporals durant el processament. Heu d'introduir un camí d'accés complet d'un directori existent en el servidor d'aplicacions web.",
		admin_ondemand_tracedir_hover: "Especifiqueu el directori on voleu emmagatzemar el fitxer de traça ODWEK arswww.trace. Heu d'introduir un camí d'accés complet d'un directori existent en el servidor d'aplicacions web.",
		admin_ondemand_tracelevel_hover: "Especifiqueu el nivell d'informació de registre que s'escriu al fitxer rswww.trace. El <b>Registre del missatge d'error</b> captura el mínim d'informació de registre. <b>Tots els missatges es capturen, incloent-hi la funció de traça</b> captura la majoria d'informació.<br /><br />No especifiqueu <b>Tots els missatges es capturen, incloent-hi la funció de traça</b> en un entorn de producció, tret que us ho demani l'IBM Software Support.",
		admin_ondemand_max_trace_filesize_hover: "Especifiqueu si voleu permetre que el fitxer de traça ODWEK creixi fins a una mida il·limitada o si voleu que el client web creï nous fitxers de registre quan el fitxer de registre arribi a una determinat grandària. El valor per defecte és permetre que el fitxer de registre de traça creixi fins que l'aplicació web s'aturi al servidor web d'aplicacions.",
		admin_ondemand_max_trace_unlimited_hover: "Seleccioneu aquesta opció si voleu que la informació de traça ODWEK s'escrigui en un sol fitxer de registre. Si seleccioneu aquesta opció, tindreu un fitxer de registre que serà massa gran per obrir-lo amb un visualitzador de fitxers estàndard.",
		admin_ondemand_max_trace_limited_hover: "Seleccioneu aquesta opció si voleu que la informació de traça ODWEK s'escrigui en diversos fitxers de registre. Quan un fitxer de registre arriba a la mida màxima, el registre actual es reanomena per incloure la data (arswww.trace.YYYYMMDD.HHMMSS) i es crearà un nou fitxer de registre.",
		admin_ondemand_afp2pdf_installdir_hover: "Si voleu utilitzar el programa d'utilitat AFP2PDF Transform per convertir documents AFP en documents PDF per poder-los visualitzar i imprimir, especifiqueu el directori en el qual el programa AFP2PDF està instal·lat en el servidor d'aplicacions web. Per exemple: C:\\Fitxers de programa\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administradors",
		admin_adminusers_heading_text_multi: "Heu d'especificar quins usuaris tenen privilegis administratius al client web. Només els administradors poden iniciar sessió a l'escriptori d'administració.<br /><br /><b>Important:</b> els ID d'usuari dels administradors de l'IBM Content Navigator han de coincidir amb:<ul><li>Els ID d'usuari que hi ha al servidor d'aplicacions web. Els ID d'usuari no han de ser administradors al servidor d'aplicacions web.</li><li>Els ID d'usuari que hi ha al dipòsit per defecte i que està configurat en cada escriptori que inclou la funció d'Administració.</li></ul>",
		admin_adminusers_heading_text_single: "Heu d'especificar quins usuaris tenen privilegis administratius al client web. Només els administradors poden iniciar sessió a l'escriptori d'administració.<br /><br /><b>Important:</b> els ID d'usuari dels administradors de l'IBM Content Navigator han de coincidir amb els ID d'usuari que hi ha al servidor d'aplicacions web. Els ID d'usuari no han de ser administradors al servidor d'aplicacions web.",
		admin_adminusers_newuser: "Administrador nou:",
		admin_adminusers_add: "Afegeix",
		admin_adminusers_remove: "Elimina",
		admin_adminusers_listheading: "Administradors",
		admin_adminusers_nameInvalid: "El valor no pot ser un duplicat.",

		admin_sync_server_instructions: "<b>Només usuaris de FileNet P8:</b> si teniu previst habilitar els serveis de sincronització per a un o més dipòsits, cal que configureu el client web per utilitzar serveis de sincronització. La configuració de serveis de sincronització es comparteix a tots els dipòsits del vostre entorn.",
		admin_settings_instructions: "Els valors que especifiqueu a la pestanya Paràmetres s'apliquen a tots els escriptoris de la configuració.",
		admin_autocomplete: "Emplena automàticament els noms d'usuari:",
		admin_autocomplete_hover: "Especifiqueu si voleu que el client web emmagatzemi noms d'usuari a les galetes del navegador i d'aquesta manera habilitar el navegador que omplir automàticament noms d'usuari al client web durant l'inici de sessió.<br><br>Si habiliteu aquesta opció, el nom d'usuari del darrer usuari iniciarà sessió al client web emmagatzemat a les galetes del navegador i es mostrarà automàticament a la pàgina d'inici de sessió quan un usuari obri el client web.<br><br>Heu d'inhabilitar l'opció si s'accedeix a l'aplicació des de les estacions de treball compartides o si us preocupa emmagatzemar noms d'usuari a les galetes del navegador.<br /><br />Aquesta opció no s'aplica a les aplicacions personalitzades o a les de mòbil.",
		admin_autocomplete_enable: "Habilita",
		admin_autocomplete_disable: "Inhabilita",
		admin_cultural_collation: "Ús de l'ordenació específica i local:",
		admin_cultural_collation_hover: "Si habiliteu l'ordenació específica i local, es farà al servidor de dipòsit. Això pot reduir el rendiment del client web.<br><br>La inhabilitació d'aquesta ordenació podria millorar el rendiment del client web.",
		admin_cultural_collation_enable: "Habilita",
		admin_cultural_collation_disable: "Inhabilita",
		admin_base_ui_style: "Estil de tema",
		admin_base_ui_style_hover: "Especifiqueu l'estil del tema per defecte que s'utilitza al client web. Aquest estil s'utilitza només als escriptoris que fan servir el tema <b>Per defecte</b> (segons s'especifica a la pestanya <b>Aspecte</b> de la configuració de l'escriptori).<br/></br><b>Restricció:</b> si les vostres configuracions de l'escriptori utilitzen temes personalitzats, aquests temes es basen en l'estil clàssic, independentment de l'estil que seleccioneu.",
		admin_base_ui_style_classic: "Clàssic",
		admin_access_control_access: "Limita accés a usuaris i a grups específics",
		admin_access_control_access_show: "Mostra les dades de control d'accés",
		admin_access_control_access_enable: "Sí",
		admin_access_control_access_disable: "No",
		admin_mobile_access: "Permet l'accés d'aplicacions mòbils",
		admin_mobile_access_hover: "Per defecte, els usuaris poden accedir al client web des l'aplicació IBM Content Navigator iOS.<br /><br /><b>Important:</b> si voleu evitar que els usuaris accedeixin al client web des de l'aplicació iOS, els usuaris encara hi podran accedir des els navegadors web als seus dispositius mòbils i des de qualsevol aplicació personalitzada que estigui escrita mitjançant les API de l'IBM Content Navigator i que funcionen en dispositius mòbils.",
		admin_mobile_access_enable: "Sí",
		admin_mobile_access_disable: "No",
		admin_error: "Informació del missatge d'error:",
		admin_error_custom: "Cerca contingut de suport personalitzat",
		admin_error_default: "Cerca contingut de l'IBM Support <BDO DIR='LTR'>(</BDO>per defecte<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Especifiqueu on voleu redirigir els usuaris per què obtinguin més informació quan aparegui un missatge d'error. Podeu dirigir-los a l'IBM Support Portal o podeu a un recurs intern, com ara un servei d'assistència.",
		admin_error_URL: "Prefix d'URL:",
		admin_error_URL_hover: "Especifiqueu l'URL del recurs on dirigir als usuaris quan trobin un error, com ara un servei d'assistència. Per exemple: http://sistemaprincipallocal:numero_port. El client web afegeix el número del missatge a l'URL.",
		admin_prompt_close_without_save: "Voleu tancar-ho sense desar els canvis?",
		admin_object_expiration_time: "Interval d'actualització de la memòria cau (en minuts):",
		admin_object_expiration_time_hover: "Podeu incrementar la quantitat de temps que els objectes de configuració, com ara escriptoris, es mantenen a la memòria cau per millorar el rendiment del client web. El temps per defecte és de 10 minuts. El temps màxim és 1440 minuts (1 dia).<br /><br />Heu de reiniciar l'aplicació web perquè els canvis entrin en vigor.<br /><br />Si l'IBM Content Navigator es desplega en un entorn altament disponible en clúster, qualsevol canvi als objectes de configuració no es propagaran en els nodes al clúster fins que la memòria cau es renovi.",
		admin_temp_file_cleanup_interval: "Interval d'exploració per netejar la memòria cau del visualitzador (en hores):",
		admin_temp_file_cleanup_interval_hover: "Planifiqueu la freqüència amb la qual s'explorarà el directori temporal per trobar i suprimir fitxers temporals vençuts. Per defecte, el directori temporal s'explora cada sis hores. Podeu especificar entre 6 i 48 hores.",
		admin_temp_file_expiration_interval: "Caduca la memòria cau del visualitzador (en hores):",
		admin_temp_file_expiration_interval_hover: "Especifiqueu el temps durant el qual els fitxers temporals relacionats amb les activitats del visualitzador romandran a la memòria cau del navegador. Per defecte, aquests fitxers temporals caduquen a les 24 hores. Podeu especificar entre 12 i 48 hores.",
		admin_encryption_key_hover: "Clau utilitzada per a funcions de xifratge del Navigator.",
		admin_encryption_key: "Clau de xifratge:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Personalització de marca",
		admin_mobile_branding_main_color: "Color principal:",
		admin_mobile_branding_secondary_color: "Color secundari:",
		admin_mobile_device_title: "Gestió de MaaS360",
		admin_mobile_device_enable_maas360: "Habilita MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "L'ajuda contextual d'Habilita MaaS360 va aquí",
		admin_mobile_device_maas360_developer_id: "ID del desenvolupador de MaaS360:",
		admin_mobile_device_maas360_license_key: "Clau de llicència de MaaS360:",
		admin_mobile_settings_title: "Configuració",
		admin_mobile_email_address_hover_help: "Aquesta adreça de correu electrònic s'utilitza a l'aplicació mòbil quan l'usuari clica \"Envia informe d'error.\"",
		admin_mobile_email_address: "Adreça de correu electrònic:",
		admin_invalid_email_address_message: "L'adreça de correu electrònic que heu introduït no té el format correcte. Escriviu l'adreça corregida i torneu-ho a provar.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Algunes dades no són vàlides.",
		admin_configuration_parameters: "Paràmetres de configuració",
		admin_configuration_optional_features: "Característiques opcionals",
		admin_configuration_optional_features_p8_instructions: "Seleccioneu les característiques que voleu habilitar en aquest dipòsit.<p><b>Important:</b> si habiliteu una característica que instal·la un complement al dipòsit, heu d'estar connectats al dipòsit com a administrador del motor de la plataforma de contingut o administrador del motor de contingut.</p>",
		admin_configuration_optional_features_cm_instructions: "Seleccioneu les característiques que voleu habilitar en aquest dipòsit.<p><b>Important:</b> aquestes característiques modifiquen el model de dades del dipòsit. Per habilitar-les, heu d'estar connectats al dipòsit com a administrador del servidor de biblioteques.</p>",
		admin_system_properties: "Propietats del sistema",
		admin_system_properties_for: "Propietats del sistema per:",
		admin_available_properties: "Propietats disponibles",
		admin_displayed_properties: "Propietats de visualització",
		admin_selected_properties: "Propietats seleccionades",
		admin_selected_filtered_properties: "Propietats ocultes",
		admin_available_operators: "Operadors mostrats",
		admin_selected_filtered_operators: "Operadors ocults",
		admin_system_properties_shown: "Propietats mostrades",
		admin_system_properties_hidden: "Propietats ocultes",
		admin_available_menu_items: "Accions disponibles:",
		admin_selected_menu_items: "Accions seleccionades:",
		admin_menu_global: "S'aplica quan no hi ha cap element seleccionat:",
		admin_menu_multiple_document: "S'aplica quan hi ha diversos elements seleccionats:",
		admin_menu_privileges: "Privilegis necessaris:",
		admin_menu_plugin: "Connector:",
		admin_menu_repository_types: "Tipus de dipòsits:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separador",
		admin_browse: "Navega",
		admin_search: "Cerca",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redacció basada en rol",
		admin_connections_library_enabled: "IBM Connections habilitat",
		admin_office_conf: "Edita integració",
		admin_desktop_conf_label: "Configuració de l'escriptori",
		admin_ms_office_conf_label: "Configuració de l'Office",
		admin_workflows: "Fluxos de treball",
		admin_file_types: "Tipus de fitxers",
		admin_file_type_contains_label: "El tipus de fitxer conté",
		admin_name_propepty: "Nom",
		admin_cm_name_property_default: "Utilitza el nom per defecte",
		admin_cm_name_property_default_hover: "Per defecte, s'utilitza la propietat (ICM$NAME) del nom jeràrquic ICM com el nom de l'element, si la propietat es defineix a l'element.  Si la propietat (ICM$NAME) del nom jeràrquic ICM no està disponible, la primera propietat senyalada com \"representa\" s'utilitzarà com el nom de l'element.",
		admin_cm_name_property: "Especifica la propietat del nom de l'element",
		admin_cm_name_property_hover: "Especifiqueu la propietat que s'utilitza com a nom als documents i a les carpetes.",
		admin_name_property: "Propietat Nom:",
		admin_doc_name_property: "Propietat de nom del document:",
		admin_doc_name_property_hover: "Especifiqueu la propietat que s'utilitza com el nom del document.",
		admin_folder_name_property: "Propietat del nom de la carpeta:",
		admin_folder_name_property_hover: "Especifiqueu la propietat que s'utilitza com el nom de la carpeta.",
		admin_all_searches_label: "Nombre de cerques que s'han de mostrar:",
		admin_unlimited: "Sense límit",
		admin_limit: "Limita a",
		admin_repository: "Dipòsit:",
		admin_application_space: "Espai d'aplicació",
		admin_available_application_spaces: "Espais disponibles d'aplicació:",
		admin_selected_application_spaces: "Espais d'aplicació seleccionats:",
		admin_label: "Etiqueta",
		admin_repository_box_placeholder: "Seleccioneu un dipòsit del Box",
		admin_repository_placeholder: "Selecciona un dipòsit",
		admin_search_match: "Coincidència:",
		admin_search_match_all: "Coincideix amb tots els criteris de cerca",
		admin_search_match_any: "Coincideix amb alguns criteris de cerca",
		admin_search_match_hover: "Especifiqueu quina opció se selecciona per defecte al menú <b>Opcions de propietat</b>.",

		admin_repository_redactions_instructions: "Podeu configurar redaccions basades en rol per a aquest dipòsit.",
		admin_repository_redaction_policies_description: "Podeu crear i gestionar polítiques de redacció, que associen motius de redacció amb usuaris i grups que poden llegir dades confidencials i poden editar anotacions que protegeixen aquestes dades confidencials de la vista.",
		admin_repository_redaction_roles_instruction: "Podeu crear un rol de redacció per associar-lo als usuaris i grups especificats amb la capacitat de llegir dades confidencials o la capacitat d'editar anotacions que protegeixin dades confidencials de la vista. El rol de redacció ha d'estar associat amb un motiu de redacció en una política de redacció abans que els usuaris i els grups puguin llegir les dades o editar les anotacions.",
		admin_repository_redaction_reasons_instruction: "Podeu configurar motius de redacció per al vostre dipòsit.",
		admin_repository_redaction_policies: "Configuració de política de redacció",
		admin_repository_redaction_roles: "Configuració de rols de redacció",
		admin_repository_redaction_reasons: "Configuració de motius de redacció",
		admin_repository_redaction_roles_type: "Tipus",
		admin_repository_redaction_roles_type_hover: "Un editor pot crear, modificar o suprimir tipus específics de redaccions basades en rol mentre que un visualitzador pot veure tipus específics de dades confidencials.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Visualitzador",
		admin_repository_redaction_roles_membership: "Pertinença",
		admin_repository_redaction_roles_membership_hover: "Seleccioneu els editors que voleu que tinguin aquest rol.",
		admin_repository_redaction_roles_user_group_hover: "Busqueu els usuaris i grups, o seleccioneu els editors que voleu que tinguin aquest rol.",
		admin_repository_redaction_roles_description: "Podeu crear i gestionar rols de redacció, que associen usuaris i grups amb la capacitat de llegir dades confidencials i editar anotacions que protegeixen dades confidencials de la vista.",
		admin_repository_redaction_new: "Nou rol de redacció",
		admin_repository_redaction_role_avail_editors: "Editors de redacció disponibles",
		admin_repository_redaction_role_avail_users: "Usuaris disponibles",
		admin_repository_redaction_role_avail_groups: "Grups disponibles",
		admin_repository_redaction_role_selected_editors: "Editors de redacció seleccionats",
		admin_repository_redaction_role_selected_users_groups: "Usuaris i grups seleccionats",
		admin_repository_redaction_role_add_editor: "Editors nous...",
		admin_repository_redaction_role_access_type: "Accés",
		admin_repository_redaction_role_access_type_access: "Permet",
		admin_repository_redaction_role_access_type_no_access: "Denega",
		admin_repository_redaction_role_users: "Usuaris",
		admin_repository_redaction_role_groups: "Grups",
		admin_repository_redaction_role_editors: "Editors",
		admin_delete_confirmation_redaction_roles: "Voleu suprimir el rol de redacció seleccionat?",
		admin_repository_edit_redaction_role: "Rol de redacció: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Accés per defecte",
		// RBA
		desktop_user_group_acl: "Administradors d'escriptori",
		desktop_user_group_remove: "Elimina",
		desktop_rba_membership: "Pertinença:",
		desktop_rba_membership_list_label: "Nom",
		admin_repository_redaction_policy_hover: "Proporcioneu una descripció que permeti als usuaris distingir entre aquesta política i la resta de polítiques.",
		admin_repository_new_redaction_policy: "Nova política de redacció",
		admin_repository_policy_name: "Nom de política",
		admin_repository_reason_redactions: "Motius de redacció:",
		admin_repository_role_editors: "Editors",
		admin_repository_role_viewers: "Visualitzadors",
		admin_repository_redaction_policy_instruction: "Podeu crear una política de redacció per associar els motius de redacció seleccionats amb els editors de redacció i els visualitzadors de redacció.",
		admin_repository_redaction_reasons_hover: "Seleccioneu un o més tipus de dades confidencials que no voleu que vegin la majoria d'usuaris, per exemple, informació d'identificació personal, secrets comercials o informació confidencial o propietat de la seva empresa.",
		admin_repository_readaction_available_reasons: "Motius disponibles",
		admin_repository_readaction_selected_reasons: "Motius seleccionats",
		admin_repository_readaction_new_reason: "Motiu nou...",
		admin_repository_redeaction_reasons: "Motius de redacció:",
		admin_repository_readaction_editor_permmission: "Editors de redacció:",
		admin_repository_redaction_editors_hover: "Seleccioneu els rols que puguin crear i modificar la redacció dels motius seleccionats.",
		admin_repository_readaction_new_editor_role: "Nou rol d'editor...",
		admin_repository_readaction_available_editors: "Rols d'editor disponibles",
		admin_repository_readaction_selected_editors: "Rols d'editor seleccionats",
		admin_repository_readaction_viewer_permmission: "Visualitzadors de redacció:",
		admin_repository_redaction_viewers_hover: "Seleccioneu els rols que puguin visualitzar dades confidencials per als motius seleccionats. La redacció no s'aplica als usuaris i grups amb aquests rols.",
		admin_repository_readaction_new_viewer_role: "Nou rol de visualitzador...",
		admin_repository_readaction_available_viewers: "Rols de visualitzador disponibles",
		admin_repository_readaction_selected_viewers: "Rols de visualitzador seleccionats",
		admin_repository_reason_redactions_header: "Motius de la redacció",
		admin_delete_confirmation_redaction_policy: "Voleu suprimir la política de redacció seleccionada?",
		admin_role_type_repository: "Dipòsit",
		admin_role_type_administrator: "Administrador",
		admin_role_type_template: "Plantilla",
		admin_role_type_teamspace: "Espai d'equip",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Visualitzador",
		admin_collaboration_services_instructions: "Si teniu una aplicació web de FileNet Collaboration Services i una de l'IBM Connections podeu configurar espais d'equip de comunitat i seqüències d'activitat pel dipòsit.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configuració de la biblioteca de la comunitat",
		admin_collaboration_community_instruction: "Podeu configurar un dipòsit al domini IBM FileNet P8 per emmagatzemar les biblioteques de la comunitat de l'IBM Connections (també s'anomena espais d'equip). Quan els usuaris creen una biblioteca de la comunitat a través de l'IBM Connections, s'emmagatzemarà al dipòsit que es designi com a dipòsit de la biblioteca de la comunitat.",
		admin_collaboration_community_teamspaces: "Utilitzeu aquest dipòsit per les biblioteques de la comunitat:",
		admin_collaboration_community_teamspaces_hover: "Només podeu utilitzar un dipòsit al domini IBM FileNet P8 per emmagatzemar les noves biblioteques de la comunitat. Si habiliteu aquest dipòsit i ja teniu un dipòsit, l'existent s'inhabilitarà. No obstant això, les biblioteques existents romandran al dipòsit actual.",
		admin_collaboration_connections_anonymous: "Permet l'accés anònim al contingut públic:",
		admin_collaboration_connections_anonymous_hover: "Si l'IBM Connections servidor conté comunitats públiques o moderades, podeu configurar FileNet Collaboration Services per permetre que els usuaris naveguin i baixin contingut des de les biblioteques a les comunitats sense haver d'iniciar sessió.<br><br>Els usuaris que tenen accés a les biblioteques de la comunitat de forma anònima no podrà crear, ni modificar, ni suprimir contingut.<br><br><b>Important:</b> heu de designar un usuari IBM FileNet P8 LDAP com a usuari anònim i configurar-lo amb el rol <b>Anònim</b> al WebSphere Application Server.",
		admin_collaboration_connections_url: "URL de l'IBM Connections:",
		admin_collaboration_connections_url_hover: "Especifiqueu l'URL del servidor de l'IBM Connections amb el format http://servidorIBMConnections:numero_port.  Si l'IBM Connections està configurat per utilitzar l'IBM HTTP Server, podeu ometre el número de port des l'URL.<br><br>Els usuaris de l'IBM Connections han de poden accedir a l'URL perquè és l'enllaç que FileNet Collaboration Services utilitza per crear enllaços a les pàgines de document d'entrada a l'IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilitza l'URL de l'IBM Connections",
		admin_collaboration_connections_url_https_use: "Utilitza l'URL de l'IBM Connections HTTPS",
		admin_collaboration_connections_url_specify: "Especifica l'URL",
		admin_collaboration_connections_url_https: "URL HTTPS de l'IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Si es configura l'IBM Connections perquè utilitzi SSL, especifiqueu l'URL HTTPS del servidor de l'IBM Connections amb el format https://servidorIBMConnections:numero_port.  Si l'IBM Connections està configurat per utilitzar l'IBM HTTP Server, podeu ometre el número de port des l'URL.",

		admin_collaboration_connections_gadget_url: "URL de la miniaplicació d'IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL de recuperació de l'IBM Connections:",
		admin_collaboration_connections_security: "Administradors de la comunitat:",
		admin_collaboration_connections_security_hover: "Especifiqueu els usuaris i grups que poden administrar les biblioteques de contingut a la comunitat.<br><br>Els administradors globals poden crear, modificar, suprimir i proporcionen accés a les biblioteques de la comunitat i als continguts de les biblioteques de la comunitat. Quan especifiqueu un usuari com a administrador global, l'usuari tindrà privilegis de ClbGlobalAdministrator al dipòsit.<br><br>Els administradors de revisió globals poden aprovar i rebutjar el contingut que és en fase de revisió de la publicació en una biblioteca de comunitat. Quan especifiqueu un usuari com a administrador de revisió global, l'usuari tindrà privilegis de ClbGloablReviewAdministrator al dipòsit.",

		admin_collaboration_connections_admins: "Administradors globals",
		admin_collaboration_connections_admins_review: "Administradors de revisió globals",
		admin_collaboration_connections_seedlist: "Índex del contingut de la biblioteca de la comunitat:",
		admin_collaboration_connections_seedlist_hover: "Especifiqueu si voleu que l'IBM Connections rastregi biblioteques de la comunitat en el dipòsit per crear un índex de cerca. La creació d'un índex pot afectar el rendiment del dipòsit.<br><br>Si Social Collaboration Search Indexing Extensions estan instal·lades en el dipòsit, aquesta opció estarà habilitada per defecte. Si Social Collaboration Search Indexing Extensions no estan instal·lades en el dipòsit, s'instal·larà el component al dipòsit quan habiliteu l'opció.",
		admin_collaboration_activity_stream: "Configuració de la incidència de seqüència de l'activitat",
		admin_collaboration_activity_stream_label: "Informació de la incidència push a l'IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Especifiqueu si voleu introduir informació de la incidència push, com ara la creació de documents, extraccions, incorporacions, comentaris, etiquetes i comparticions, a l'IBM Connections.<br><br><b>Important:</b> si es trameten per Push notificacions a l'IBM Connections, podria afectar el rendiment del dipòsit.",

		admin_collaboration_activity_stream_instruction: "Podeu configurar el dipòsit per introduir informació d'incidència, com ara comentaris i aprovacions de documents, a l'IBM Connections. Les incidències es mostren a la pàgina <b>Actualitzacions recents</b> de les comunitats de l'IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignora informació d'incidències d'usuaris i de grups específics:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Podeu ignorar les incidències generades per usuaris o per grups específics, com administradors o comptes de sistema, per reduir el nombre de notificacions que els usuaris veuen. Per exemple, si feu la migració de contingut, és possible que vulgueu especificar que les incidències que genera el compte que s'utilitza a la migració es passen per alt.",
		admin_collaboration_activity_stream_userid: "Nom d'usuari de l'IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Especifiqueu el compte del sistema que utilitzarà Content Platform Engine per autenticar-se i per enviar la informació de la incidència a l'IBM Connections. L'usuari ha de ser al rol <b>trustedExternalApplication</b> a l'aplicació Widget Container a l'IBM Connections.<br><br><b>Consell:</b> per defecte, l'administrador de l'IBM Connections té els privilegis adequats. Podeu utilitzar l'ID d'administrador com el nom d'usuari",
		admin_collaboration_activity_stream_password: "Contrasenya d'usuari de l'IBM Connections:",

		admin_help_url: "URL d'ajuda de l'usuari final:",
		admin_help_url_hover: "<b>Nota important:</b> IBM Knowledge Center Customer Installed no s'actualitzarà com a IBM Content Navigator Version 3.0.0. Contacteu amb el servei al client per més informació sobre la utilització de l'ajuda personalitzada.<br><br>Com al IBM Content Navigator Version 3.0.0, l'URL de l'ajuda per l'usuari porta a l'IBM Knowledge Center. L'URL per a l'IBM Knowledge Center és: http://www.ibm.com/support/knowledgecenter.<br><br>Si voleu continuar utilitzant una versió anterior de l'IBM Knowledge Center Customer Installed, especifiqueu l'URL de la instància de l'IBM Knowledge Center Customer Installed que es va desplegar amb l'Eina de configuració i desplegament de l'IBM Content Navigator. L'URL ha de ser accessible a màquines client. L'URL té el format http://server_name:port_number/kc.<br><br>Podeu obtenir el nom de servidor i número de port del fitxer console.log al subdirectori KnowledgeCenter/logs del directori d'instal·lació de l'IBM Content Navigator.",

		admin_help_default: "Utilitza l'ajuda per defecte proporcionada per IBM",
		admin_custom_help: "Utilitza un sistema d'ajuda personalitzada",
		admin_help_kc: "Utilitza l'ajuda personalitza a l'IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Nota important:</b> IBM Knowledge Center Customer Installed no s'actualitzarà com a IBM Content Navigator Version 3.0.0. Contacteu amb el servei al client per més informació sobre la utilització de l'ajuda personalitzada.<br><br>Si voleu continuar utilitzant una versió anterior de l'IBM Knowledge Center Customer Installed, seleccioneu aquesta opció per continuar afegint contingut a la instància de l'IBM Knowledge Center Customer Installed que que ha desplegat anteriorment.",
		admin_help_taxonomy: "Codi de taxonomia:",
		admin_help_taxonomy_hover: "Especifiqueu el codi de taxonomia per a l'ajuda personalitzada.<br><br>El codi de taxonomia per a l'IBM Content Navigator és SSEUEX. Si voleu visualitzar l'ajuda sota un nom de producte diferent a l'IBM Knowledge Center Customer Installed, he d'afegir un codi de taxonomia exclusiu al fitxer KC_taxonomy.ditamap al directori KnowledgeCenter/usr/taxonomy del directori d'instal·lació de l'IBM Content Navigator.",
		admin_help_context: "Context d'ajuda:",
		admin_help_context_hover: "Especifiqueu el context per a l'ajuda personalitzada.<br><br>L'ajuda per a l'IBM Content Navigator està al directori KnowledgeCenter/usr/content/com.ibm.usingeuc.doc del directori de l'instal·lació de l'IBM Content Navigator. El context de l'ajuda per defecte és com.ibm.usingeuc.doc. Si voleu proporcionar ajuda personalitzada, afegiu el contingut a un nou subdirectori al directori KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Pàgina de destí:",
		admin_help_welcome_hover: "Especifiqueu el nom del tema que voleu utilitzar com a pàgina de destí quan els usuaris accedeixen a l'ajuda. Heu de crear un fitxer de propietats que especifica la ubicació de la pàgina de destí i afegeix el fitxer de propietats al directori KnowledgeCenter/usr/conf del directori d'instal·lació de l'IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Fitxer JSON d'extensions de tipus MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Comproveu el nom del fitxer JSON i el seu camí d'accés complet. El fitxer pot ser general del sistema de fitxers o un URL que apunti al fitxer JSON.  <br><br>El contingut del fitxer JSON és una matriu de definicions de tipus MIME. <br><br>Una definició de tipus MIME conté quatre claus: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Les dues primeres claus, \"mimeTypes\" i \"extensions\", són obligatòries, i poden ser matrius de sèrie separades per \",\". Les dues últimes claus, \"fileType\" i \"iconName\", són opcionals. <br><br>Per exemple: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuració de gestor de tasques",
		admin_taskmanager_service: "Servei del gestor de tasques:",
		admin_taskmanager_service_hover: "Especifiqueu si voleu utilitzar el servei de gestor de tasques per crear i executar tasques asíncrones. <br><br>Si canvieu aquest valor, heu de reiniciar l'aplicació web IBM Content Navigator perquè els canvis siguin efectius.",
		admin_taskmanager_url: "URL del servei de gestor de tasques:",
		admin_taskmanager_url_hover: "Especifiqueu l'URL mitjançant el qual altres aplicacions es poden comunicar amb el servei de gestor de tasques. L'URL té aquest format: http://nom_servidor:número_port/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Directori de registre del gestor de tasques:",
		admin_taskmanager_logdirectory_hover: "Per defecte, els fitxers de registre per al servei de gestor de tasques s'escriuen al mateix directori que els fitxers de registre del servidor d'aplicacions web. <br><br>Si voleu que la informació de registre s'escrigui en un altre directori del servidor IBM Content Navigator, especifiqueu el camí d'accés complet del directori en el qual voleu emmagatzemar els fitxers de registre que es generen mitjançant el component de gestor de tasques. <br><br>Si canvieu aquest valor, heu de reiniciar l'aplicació web IBM Content Navigator perquè els canvis siguin efectius.",
		admin_taskmanager_heartBeatMonitor: "Supervisió del batec del clúster",
		admin_taskmanager_heartBeatMonitor_hover: "Només entorns de clúster altament disponibles. Si habiliteu aquesta opció, el servei de gestor de tasques redirecciona les tasques dels nodes que estan inactius als nodes que estan en execució. <br><br>Si canvieu aquest valor, heu de reiniciar l'aplicació web IBM Content Navigator perquè els canvis siguin efectius.",

		admin_syncserver_title: "Configuració de servidor de sincronització",
		admin_syncserver_enable: "Serveis de sincronització:",
		admin_syncserver_enable_hover: "Especifiqueu si voleu que els usuaris amb accés a aquest escriptori puguin sincronitzar els seus elements a les seves estacions de treball i dispositius mòbils.<br><br><b>Important:</b> per utilitzar aquesta característica també heu de completar les tasques següents:<ul><li>Especifiqueu l'<b>URL públic de serveis de sincronització</b> a la secció <b>Serveis de sincronització</b> de l'eina d'administració.</li><li>Afegiu un dipòsit per al qual s'habiliten els serveis de sincronització a aquest escriptori.</li></ul>Si inhabiliteu aquesta opció però afegiu un dipòsit per al qual s'habiliten els serveis de sincronització a aquest escriptori, el valor del dipòsit s'ignora.",
		admin_mobileqr_enable: "Mostra el codi QR de l'IBM Navigator a la pàgina d'inici de sessió:",
		admin_mobileqr_enable_hover: "Habiliteu aquesta opció si voleu visualitzar el codi QR de l'aplicació mòbil de l'IBM Navigator a la pàgina d'inici de sessió del client web.<br><br>Quan un usuari escanegi el codi QR, se'l direccionarà a la botiga d'aplicacions corresponent segons el seu dispositiu des d'on podrà baixar l'aplicació mòbil de l'IBM Navigator.",

		admin_streamlineservice_enable: "Servei d'edició:",
		admin_streamlineservice_enable_hover: "Només usuaris de FileNet P8. Habiliteu aquesta opció si voleu que els usuaris d'escriptori puguin afegir i editar fàcilment documents d'aplicacions natives a les seves estacions de treball. <br><br>Per utilitzar aquest paràmetre, també s'han de dur a terme les següents accions: <ul><li>Habilitar el servei d'edició a un o diversos dipòsits associats amb l'escriptori en qüestió</li><li>Instal·lar el client d'edició de l'IBM Content Navigator a les estacions de treball de l'usuari</li></ul>",

		admin_repository_general_instructions: "Heu de connectar-vos al dipòsit abans de configurar els paràmetres, propietats del sistema, carpetes, etc.",
		admin_repository_system_instructions: "Especifiqueu quines propietats del sistema es mostren pels documents i carpetes en el dipòsit.",

		admin_desktop_general_create_instructions: "Un escriptori determina què pot veure i fer l'usuari en iniciar la sessió al client web. Després de crear un escriptori, podeu enviar l'URL d'escriptori als usuaris de manera que puguin accedir a l'escriptori.",
		admin_desktop_admin_instructions: "L'escriptori d'administració es proporciona amb el client web per habilitar els usuaris administratius per configurar el client web. Aquest escriptori té accés a tots els dels dipòsits que estan configurats al client web.",
		admin_desktop_repositories_instructions: "Especifiqueu quins dipòsits voleu que els usuaris tinguin accés des d'aquest escriptori. Heu de configurar els vostres dipòsits abans d'afegir-los a l'escriptori.<br><br><b>Consell:</b> podeu limitar quins dipòsits estan disponibles per cada característica quan configureu el disseny d'escriptori.",
		admin_desktop_menus_instructions: "Especifiqueu quins menús voleu que els usuaris tinguin accés des d'aquest escriptori. Els menús especifiquen quines accions estan disponibles en funció de què s'hagi seleccionat a la interfície.<br><br><b>Consell:</b> podeu personalitzar el contingut de menús a la secció <b>Menús</b> de l'eina d'administració o podeu crear tipus nous de menús mitjançant la creació de connectors.",

		admin_desktop_no_repositories: "No hi ha cap dipòsit configurat.",

		admin_desktop_id_hover: "L'ID d'escriptori s'inclou a l'URL de client web i especifica quin escriptori s'obre quan un usuari inicia sessió al client web. L'ID ha de ser únic i no es pot canviar l'ID després de desar l'escriptori.<br><br>L'ID només pot contenir caràcters alfanumèrics i distingeix entre majúscules i minúscules.",
		admin_desktop_id_disabled_hover: "No es pot canviar l'ID d'escriptori. Si voleu utilitzar un ID diferent, heu de crear un escriptori nou.",
		admin_desktop_name_hover: "El nom de l'escriptori no pot contenir els següents caràcters: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "La configuració només pot contenir un escriptori per defecte.",

		admin_repository_id_disabled_hover: "No es pot canviar l'ID de menú. Si voleu utilitzar un ID diferent, heu de crear una connexió de dipòsit nova.",
		admin_printService_enable: "Imprimeix utilitzant el servei d'impressió de l'IBM Daeja ViewONE",
		admin_printService_enable_hover: "Si decidiu habilitar el servei d'impressió de l'IBM Daeja ViewONE, els documents es convertiran a format PDF i la impressió es podrà completar utilitzant qualsevol navegador web.<br><br>Si decidiu inhabilitar el servei d'impressió de l'IBM Daeja ViewONE, només podreu imprimir documents a navegadors web que suportin miniaplicacions de Java.  Alguns navegadors web no suporten miniaplicacions de Java i, per tant, no suporten la impressió des de miniaplicació.<br><br>Consulteu la documentació per saber quins navegadors estan suportats.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Directori d'inici de l'usuari",
		admin_file_tracking_doc_directory_my_documents: "Directori de document de l'usuari",
		admin_file_tracking_doc_directory_qp: "Camí d'accés qualificat",
		admin_file_tracking_section_tile: "Configuració de rastreig de fitxers",
		admin_file_tracking_home_path: "Camí d'accés a la pàgina inicial",
		admin_file_tracking_my_documents: "Els meus documents",
		admin_file_tracking_exact_path: "Camí d'accés complet:",
		admin_file_tracking_qp: "Camí d'accés qualificat",
		admin_file_tracking_ev: "Variable d'entorn",
		admin_file_tracking_ev_us: "Variable de l'entorn personalitzada ",
		admin_file_tracking_del_local_copy: "Suprimeix la còpia local:",
		admin_file_tracking_yes: "Sí",
		admin_file_tracking_no: "No",
		admin_file_tracking_del_local_copy_rt_state_editable: "Permet als usuaris que alterin temporalment aquest valor",
		admin_file_tracking_del_local_copy_rt_state1: "Sí",
		admin_file_tracking_del_local_copy_rt_state2: "No",
		admin_file_Tracking_label: "Seguiment de fitxers:",
		admin_file_Tracking_disable: "Inhabilita",
		admin_file_Tracking_enable: "Habilita",
		admin_file_tracking_label_hover_help: "El rastreig de fitxers utilitza una miniaplicació per extreure i baixar documents un directori específic a les màquines d'usuaris. La miniaplicació també permet a l'IBM Content Navigator cerqueu documents a les màquines d'usuari quan els usuaris incorporen documents.",
		admin_file_tracking_doc_directory: "Ubicació d'emmagatzematge:",
		admin_file_tracking_open_file: "Obre automàticament el fitxer",
		admin_file_Tracking_append_qualified_path: "Adjunta directori",
		admin_file_Tracking_append_qualified_path_hover_help: "Podeu adjuntar un directori al final de la variable d'entorn si voleu que els documents es desin en un subdirectori específic. <br/><br/>Per exemple, podeu especificar que els documents es baixin a un directori <i>EnterpriseDocuments</i> dins el directori inicial d'usuari.",
		admin_file_Tracking_append_ev: "Afegeix variable d'entorn",
		admin_file_Tracking_append_ev_hover_help: "Podeu adjuntar una variable d'entorn si voleu que els documents que es desin en un directori especificat de forma dinàmica, com ara un directori d'usuari.<br/><br/>Per exemple, podeu especificar que els documents s'emmagatzemin en una subdirectori <i>nom_usuari</i> en un directori de xarxa compartit. ",
		admin_file_tracking_doc_directory_hover_help: "Especifiqueu on s'han d'extreure documents quan s'extreguin i es baixin.<br/><br/> <b>Consell</b>: si voleu emmagatzemar documents en un directori inicial d'usuari o un directori de documents per defecte, seleccioneu <b>Variable d'entorn</b>, que inclou variables predefinides que apunten a aquestes ubicacions.",
		admin_file_tracking_qualified_path_hover_help: "Utilitzeu l'estructura del directori adient pel vostre sistema operatiu Windows o Mac per especificar el directori o directori de xarxa en el qual voleu emmagatzemar documents. <ul><li>Al Windows, inclou una lletra d'unitat al camí d'accés, com ara C:\\Enterprise Documents.</li><li>Per un directori de xarxa compartit, especifiqueu el camí d'accés amb el format \\\\nomservidor\\directori</li></ul><br/><b>Important:</b> per utilitzar aquesta opció, l'estructura de directoris que especifiqueu s'ha de poder crear a totes les estacions de treball client de l'entorn.",
		admin_file_tracking_environment_variable_path_hover_help: "Utilitzeu les variables d'entorn adequades per al vostre sistema operatiu Windows o Mac per especificar el directori o directori de xarxa en el qual voleu emmagatzemar els documents. <br/><br/>L'opció <b>Directori inicial de l'usuari</b> emmagatzema documents al directori següent:<br/><ul><li>Windows: C:\\Usuaris\\nom_usuari</li><li>Mac: /Users/nom_usuari</li></ul><br/>L'opció <b>Directori de documents d'usuari</b> emmagatzema documents al directori següent:<br/><ul><li>Windows: C:\\Usuaris\\nom_usuari\\Documents</li><li>Mac: /Users/nom_usuari/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Especifiqueu si la còpia local d'un document se suprimeix quan els usuaris afegeixen o incorporen documents al dipòsit.<br/><br/>La supressió de la còpia local us permet:<br/><ul><li>Aplicar conformitat amb les polítiques de TI</li><li>Assegurar-vos que els usuaris treballen amb les versions més recents de documents</li></ul><br/><b>Restricció:</b> aquest paràmetre no s'utilitza quan els usuaris afegeixen documents arrossegant-los i deixant-los anar.<br/><br/>Per a l'IBM Content Navigator for Microsoft Office, heu de seleccionar l'opció <b>Suprimeix fitxers locals quan els usuaris afegeixen o incorporin un document o cancel·lin l'extracció</b> a la secció <b>Configuració de l'Office</b> de l'escriptori.",
		admin_file_tracking_open_file_hover_help: "El valor substitueix qualsevol preferència de gestió de document que es configura als navegadors web dels usuaris. </br></br><b>Restricció:</b> aquest paràmetre no s'utilitza a l'IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Sobreescriu còpia local:",
		admin_file_tracking_over_write_file_hover_help: "Especifiqueu si sobreescriure la còpia local d'un document quan els usuaris extreuen documents al dipòsit. <br/><br/>La sobreescriptura de la còpia local us permet:<br/><ul><li>Assegurar-vos que els usuaris treballen amb les versions més recents de documents</li><li>Evitar que els usuaris vegin un indicador quan hi hagi una còpia local</li></ul> </br></br><b>Restricció:</b> aquest paràmetre no s'utilitza a l'IBM Content Navigator for Microsoft Office si seleccioneu <b>Permet als usuaris que alterin temporalment aquest valor</b>.",
		admin_file_tracking_over_write_file_state_editable: "Permet als usuaris que alterin temporalment aquest valor",
		admin_file_tracking_inline_help: "El rastreig de fitxers racionalitza el procés d'extracció i incorporació al dipòsit. També us permet gestionar com s'emmagatzemen els documents a les màquines dels usuaris. <br/><br/>A més a més, el rastreig de fitxers permet que els documents es puguin rastrejar en diversos components de l'IBM Content Navigator, com ara el client web i l'IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Heu d'habilitar l'autenticació estàndard abans de connectar-vos al dipòsit.",
		admin_box_use_oauth: "Tipus d'autenticació:",
		admin_box_use_oauth_hover: "Seleccioneu l'autenticació estàndard o de servidor en un entorn de producció quan proporcioneu accés als documents de Box des de l'IBM Content Navigator. Especifiqueu els valor client_id i OAuth2 client_secret associats a aquest desplegament de l'IBM Content Navigator. Podeu obtenir aquests valors del Box després de crear l'aplicació Box per al servidor de l'IBM Content Navigator.<br/><br/>Seleccioneu l'autenticació de desenvolupador en un entorn de desenvolupament. Els desenvolupadors poden iniciar sessió al Box mitjançant els seus comptes de desenvolupador i generar un testimoni de desenvolupador que és vàlid durant 60 minuts. Els testimonis de desenvolupador els permeten iniciar sessió en el Box mitjançant el testimoni del desenvolupador com a contrasenya de qualsevol ID d'usuari.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdomini del compte d'empresa del Box:",
		admin_box_share: "ID de connexió del gestor de tasques:",
		admin_box_share_hover: "Per la còpia o compartició del Box, el gestor de tasques utilitza un ID d'usuari administrador i contrasenya que executen tasques en segon pla que modifiquen el dipòsit.<br/><br/>Feu clic a Defineix i inicieu sessió en el Box mitjançant un compte d'administrador vàlid del Box.<br/><br/>Si configureu un escriptori seleccionant aquest dipòsit Box com el dipòsit dels fitxers compartits, heu d'especificar un administrador administració Box que tingui emmagatzematge sense límits en el Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Obre automàticament el fitxer",
		file_tracking_runtime_overwrite_hover_help: "Si no seleccioneu aquesta opció i teniu un document al vostre sistema de fitxers local amb el mateix nom, el document s'extraurà però no es baixarà si no es du a terme una de les accions següents:<br/><ul><li> Baixeu el document en un subdirectori del directori per defecte. Si seleccioneu un subdirectori, l'aplicació web pot fer un seguiment de la ubicació del document.</li><li>Canvieu el nom del document que esteu baixant. El canvi de nom del document impedeix un conflicte amb el nom de fitxer.</li></ul>",
		open_file: "Obre automàticament el fitxer",
		over_write_file: "Sobreescriu la còpia local",
		checkout_and_download_file: "Extreu i baixa documents",
		download_to_local_directory: "Baixa a:",
		checkout_and_download_button_title: "Extreu i baixa",
		checkout_without_java_confirmation_dialog: "El fitxer no es pot baixar i rastrejar amb la funció de rastreig de fitxers.",
		browse_for_directory: "Navega",
		selected_documents: "Documents seleccionats",

		checkout_without_java_confirmation_text: "Aquest problema es pot produir pels motius següents:<br/><ul><li>El Java Runtime Environment (JRE) no està instal·lat a l'estació de treball.</li><li>El connector Java no està habilitat al vostre navegador web.</li><li>El vostre navegador web no admet Java.</li></ul><br/><br/>Per resoldre aquest problema, dueu a terme l'acció adequada:<br/><br/><ul><li>Si voleu continuar amb la baixada del fitxer sense habilitar el rastreig de fitxers, feu clic a D'acord.</li><li>Si voleu baixar el fitxer amb el rastreig de fitxers habilitat, cancel·leu la baixada i assegureu-vos que el JRE està instal·lat a l'estació de treball i que el connector de Java està habilitat al navegador web.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "El document s'ha extret i baixat, però no es pot obrir.",
		runtime_file_tracking_open_error_explanation: "El sistema operatiu que està instal·lat a l'estació de treball no admet els fitxers d'aquest tipus.",
		runtime_file_tracking_open_error_userResponse: "Per resoldre el problema, dueu a terme una de les accions següents:<br/><br/><ul><li>Si heu de treballar amb el document, obriu el client web des d'una altra estació de treball amb un sistema operatiu diferent.</li><li>Si només necessiteu visualitzar el document, feu clic amb el botó dret sobre el document al client web i feu clic a Obre.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "El document s'ha extret, però no s'ha baixat.",
		runtime_file_tracking_save_file_error_explanation: "Existeix un document amb el mateix nom al sistema de fitxers local, però no s'ha sobreescrit. ",
		runtime_file_tracking_save_file_error_userResponse: "Si voleu baixar el fitxer des del dipòsit, heu de sobreescriure la còpia local del document quan baixeu el document des del dipòsit.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "El s'ha extret, però no es pot baixar ni obrir.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Existeix un document amb el mateix nom al sistema de fitxers local. Tanmateix, el fitxer no s'ha sobreescrit, la qual cosa impedeix que el document al dipòsit es baixi i s'obri.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Si voleu baixar el fitxer des del dipòsit, heu de sobreescriure la còpia local del document quan baixeu el document des del dipòsit.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "El document no es pot baixar.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "La variable d'entorn ${0}, que es necessita per al rastreig de fitxers, no s'ha definit en aquesta màquina client.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Per resoldre el problema:<br/><br/><ul><li>Afegiu la variable d'entorn ${0} a les variables d'entorn del sistema operatiu.</li><li>Tanqueu la sessió del client web i tanqueu també el navegador web. Després, torneu a iniciar la sessió.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "El document no es pot baixar ni rastrejar amb la miniaplicació de rastreig de fitxers.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "El directori ${0}, que es necessita per al rastreig de fitxers, no s'ha definit i no es pot crear.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Per resoldre aquest problema, dueu a terme l'acció adequada:<br/><br/><ul><li>Feu clic a Navega i seleccioneu un altre directori a la màquina client. Si seleccioneu aquesta opció, el fitxer no es rastrejarà.</li><li>Poseu-vos en contacte amb l'administrador del sistema i demaneu-li que especifiqui un altre directori per fer el seguiment dels fitxers. Per exemple, pot ser necessari fer-ho si el directori especificat és per a un sistema operatiu Windows però esteu executant el Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Si s'accedeix a aquest escriptori des de dispositius amb diferents sistemes operatius, per reduir la possibilitat de problemes podeu dur a terme una de les accions següents:<br/><br/><ul><li>Utilitzeu les variables d'entorn per especificar la ubicació d'emmagatzematge en màquines client.</li><li>Creeu escriptoris diferents per als usuaris de cadascun dels tipus de dispositiu. Per exemple, creeu un escriptori per als usuaris amb un sistema operatiu Windows i un escriptori per als usuaris amb el Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "La vostra sol·licitud no es pot processar.",
		runtime_file_tracking_generic_error_explanation: "S'ha produït un error a la miniaplicació de rastreig de fitxers.",
		runtime_file_tracking_generic_error_userResponse: "Poseu-vos en contacte amb l'administrador del sistema per obtenir ajuda.",
		runtime_file_tracking_generic_error_adminResponse: "Obriu la consola Java i torneu a enviar la sol·licitud. Els detalls de l'error s'indiquen a la consola Java.<br/><br/>Podeu accedir a la consola Java des del Panell de control (Windows) o les Preferències del sistema (Macintosh) per al vostre sistema operatiu.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "La vostra sol·licitud no es pot processar",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Els fitxers següents s'han afegit al dipòsit però no s'han eliminat del sistema de fitxers local: ${0}. Això normalment passa quan els fitxers són oberts o estan essent utilitzats per un altre usuari. Si cal, podeu eliminar els fitxers manualment.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "El document no es pot baixar.",
		runtime_file_tracking_ioexception_error_explanation: "El document no es pot baixar.",
		runtime_file_tracking_ioexception_userResponse: "Pot ser que no tingueu els permisos adequats per escriure al directori següent: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Assegureu-vos que teniu permisos d'escriptura al directori especificat. Si no teniu permís d'escriptura per al directori especificat, poseu-vos en contacte amb l'administrador.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "La vostra sol·licitud no es pot processar.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Aquest error es pot produir pels motius següents:<br/><br/><ul><li>Esteu utilitzant el Safari a Mac OS i el Java s'executa en mode segur.</li><li>No teniu permisos de lectura/escriptura en el directori que s'ha especificat a la configuració de rastreig de fitxers del vostre escriptori.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Podeu continuar utilitzant l'IBM Content Navigator sense el rastreig de fitxers o podeu completar els següents passos per resoldre el problema:<br/><br/><ol><li>Habiliteu el mode no segur de Java a Safari.</li><li>Si us pregunta si voleu confiar en el lloc web de l'IBM Content Navigator, feu clic a <b>Confia</b> per carregar la pàgina i després habilitar el mode no segur de Java al Safari.</li></ol><br/><br/>Si el Safari s'ha configurat correctament, completeu els següents passos per resoldre el problema:<br/><br/><ol><li>Assegureu-vos que teniu permisos de lectura/escriptura en el directori que s'ha especificat a la configuració de rastreig de fitxers del vostre escriptori.</li><li>Si no teniu permisos de lectura/escriptura en el directori, editeu els permisos del directori.</li><li>Si no podeu editar els permisos del directori, el vostre administrador ha de canviar el directori configurat per al rastreig de fitxers o donar-vos accés a un escriptori que tingui configurat un directori de rastreig de fitxers diferent.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "La vostra sol·licitud no es pot processar.",
		runtime_file_tracking_java__notfound_error_explanation: "Aquest problema normalment es produeix en les següents situacions:<br/><br/><ul><li>El Java Runtime Environment (JRE) no és present o habilitat a l'estació de treball.</li><li>La versió JRE de la vostra estació de treball no és compatible amb la versió de l'IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Podeu continuar utilitzant l'IBM Content Navigator sense el rastreig de fitxers o podeu completar els següents passos per resoldre el problema amb el JRE:<br/><br/><ol><li>Assegureu-vos que el JRE està instal·lat a l'estació de treball.</li><li>Comproveu que la versió del JRE de la vostra estació de treball sigui compatible amb l'IBM Content Navigator. Una llista de les versions admeses s'inclou al document <i>Prerequisits de maquinari i programari d'IBM Content Navigator</i> al lloc de l'IBM Support.</li><li>Assegureu-vos que el JRE està habilitat a l'estació de treball.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "La vostra sol·licitud no es pot processar.",
		runtime_file_tracking_security_error_explanation: "No teniu permisos de lectura/escriptura en el directori que s'ha especificat a la configuració de rastreig de fitxers del vostre escriptori.",
		runtime_file_tracking_security_error_userResponse: "Podeu continuar utilitzant l'IBM Content Navigator sense el rastreig de fitxers o podeu demanar a l'administrador del sistema que us ajudi a completar els següents passos:<ol><li>Assegureu-vos que teniu permisos de lectura/escriptura en el directori que s'ha especificat a la configuració de rastreig de fitxers del vostre escriptori. </li><li>Si no teniu permisos de lectura/escriptura en el directori, editeu els permisos del directori.</li><li>Si no podeu editar els permisos del directori, el vostre administrador ha de canviar el directori configurat per al rastreig de fitxers o donar-vos accés a un escriptori que tingui configurat un directori de rastreig de fitxers diferent.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "S'han baixat els documents següents: ${0}.",

		admin_file_tracking_inline_help: "El rastreig de fitxers racionalitza el procés d'addició i d'extracció i incorporació al dipòsit. També us permet gestionar la manera com s'emmagatzemen els documents a les màquines dels usuaris.<br/><br/>A més a més, el rastreig de fitxers permet que els documents es puguin rastrejar en diversos components de l'IBM Content Navigator, com ara el client web i l'IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "L'ID de menú no pot començar per \"Per defecte\".  \"Per defecte\" és un prefix reservat pels ID de menú.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "L'ID només pot contenir caràcters alfanumèrics i distingeix entre majúscules i minúscules.",
		admin_repository_id_hover: "L'ID de dipòsit s'inclou als URL del client web, els preferits i els enllaços de correu per especificar a quins dipòsits s'inicien sessió. L'ID ha de ser únic i no es pot canviar l'ID després de desar el dipòsit.<br><br>L'ID només pot contenir caràcters alfanumèrics i distingeix entre majúscules i minúscules.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "El nom no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "L'ID d'escriptori no pot contenir espais ni cap dels caràcters següents: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "El nom de l'escriptori no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "El nom de visualització no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Especifiqueu el nom del dipòsit per mostrar els usuaris al client web.<br><br>El nom no pot contenir els següents caràcters: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Especifiqueu el nom d'amfitrió o l'adreça IP del servidor del Content Manager OnDemand al qual us voleu connectar, per exemple, id.servidor.com.",
		admin_server_p8_name_hover: "Especifiqueu l'URL del Content Engine o del servidor del Content Platform Engine. L'URL distingeix entre majúscules i minúscules i té el format següent:<br><br><ul><li>Al servidor del WebSphere Application, iiop://nom_host:numero_port/FileNet/Engine. Als desplegaments base, el número de port per defecte és 2809.</li><li>Al servidor del WebLogic, t3://nom_host:numero_port/FileNet/Engine. El número de port per defecte és 7001.</li></ul><br><br>Per configuracions altament disponibles del Content Engine i del Content Platform Engine, utilitzeu l'URL de transport EJB disponible sense el prefix cemp:. ",
		admin_server_p8_protocol_hover: "Especifiqueu el protocol que s'utilitzarà per comunicar-se amb el Content Engine.",
		admin_server_cm_name_hover: "Especifiqueu el nom del catàleg local de la base de dades del Content Manager o el nom de connexió del servidor de la biblioteca. Aquest nom és el valor especificat per la variable ICMSERVER.",
		admin_repository_cmis_hover: "Especifiqueu l'ID del dipòsit al qual us voleu connectar.  L'ID de cada dipòsit a l'entorn CMIS es llista al document del servei de vinculació AtomPub.  <br/><br/><b>Consell: </b>també podeu introduir un asterisc (*) per connectar-se al primer dipòsit o a l'únic que es defineix en el document del servei de vinculació Atompub.",
		admin_url_cmis_hover: "El format de l'URL varia segons el proveïdor del servei. Consulteu la documentació CMIS o poseu-vos en contacte amb l'administrador del servidor CMIS de l'URL.",
		admin_repcfg_cmis_status_columns_hover: "Especifiqueu els estats d'elements de les icones que voleu veure. Les icones d'estat es mostren al costat de documents a la llista de contingut.",
		admin_port_hover: "Especifiqueu el número de port de TCP/IP que detecta el servidor del Content Manager OnDemand. El valor per defecte és 1445.",
		admin_unified_searches_hover: "Especifiqueu si voleu que els usuaris puguin desar cerques entre dipòsits en aquest mateix dipòsit.<br/><br/>Si no habiliteu aquesta opció, els usuaris encara podran crear cerques entre dipòsits que s'executarà en aquest dipòsit. Podeu evitar que els usuaris creïn cerques entre dipòsits a nivell d'escriptori.<br/><br/>Si habiliteu cerques entre dipòsits, l'IBM Content Navigator crea un model de dades de cerques entre dipòsits al dipòsit.<br/><br/>Per l'IBM FileNet Content Manager, heu de connectar-vos al dipòsit com a administrador del Content Engine abans d'habilitar aquesta opció.",
		admin_unified_searches_cm_hover: "Especifiqueu si voleu que els usuaris puguin desar cerques entre dipòsits en aquest mateix dipòsit.<br/><br/>Si no habiliteu aquesta opció, els usuaris encara podran crear cerques entre dipòsits que s'executarà en aquest dipòsit. Podeu evitar que els usuaris creïn cerques entre dipòsits a nivell d'escriptori.<br/><br/>Si habiliteu cerques entre dipòsits, l'IBM Content Navigator crea un model de dades de cerques entre dipòsits al dipòsit.",
		admin_max_results_hover: "Especifiqueu si voleu limitar el nombre de resultats que es tornen per cerca. Si no limiteu el nombre de resultats de cerca, és possible que experimenteu problemes de rendiment si una cerca torna un gran nombre de resultats.",
		admin_timeout_hover: "Especifiqueu durant quant de temps en segons es pot executar una cerca en el dipòsit. Si la cerca no finalitza en el temps especificat, el client web cancel·larà la sol·licitud. El temps d'espera màxim és 60 segons.",
		admin_object_store_hover: "Especifiqueu el magatzem d'objectes al qual voleu connectar el servidor de Content Engine. Podeu obtenir el nom simbòlic des de la consola d'administració de la plataforma Content Platform Engine.",
		admin_object_store_display_name_hover: "El nom de visualització del magatzem d'objectes és necessari per utilitzar fluxos de treball de l'IBM FileNet P8. Podeu obtenir el nom de visualització del magatzem d'objectes des de la consola d'administració de la plataforma Content Platform Engine.",
		admin_all_searches_hover: "Especifiqueu si voleu limitar el nombre de cerques que es visualitzen a <b>Totes les cerques</b> quan els usuaris estan cercant al dipòsit. Si no limiteu el nombre de cerques, és possible que experimenteu problemes de rendiment si el dipòsit inclou un gran nombre de cerques desades.",

		admin_text_desktop: "Escriptori",
		admin_text_repository: "Dipòsit",
		admin_text_plugin: "Connector",
		admin_text_theme: "Tema",
		admin_text_menu: "Menú",
		admin_text_reason_code: "Motiu de redacció",
		admin_text_redactions: "Redaccions",
		admin_text_viewer_mapping: "Mapatge de visualitzador",
		admin_text_mobile_feature: "Característica del dispositiu mòbil",
		admin_test_interface_text: "Text de la interfície",
		admin_text_interface_text_locale: "Text de la interfície localitzada",
		admin_text_icon_status: "Icona d'estat",
		admin_text_icon: "Icona",
		admin_text_file_type: "Tipus de fitxer",
		admin_text_viewer: "Visualitzador",
		admin_text_desktop_access: "Accés d'escriptori",
		admin_text_mapped_properties_for_office: "Propietats mapades pel Microsoft Office",
		admin_text_desktop_features: "Característiques de l'escriptori",
		admin_text_unknown: "Desconegut",
		admin_folder_instruction: "Especifiqueu les propietats que es mostraran en documents i en carpetes de la llista de contingut quan els usuaris naveguin. També podeu especificar l'ordre en què les propietats es visualitzen.",
		admin_search_instruction: "Especifiqueu les opcions que se seleccionen per defecte quan els usuaris creen una cerca.",
		admin_repository_office_conf_class_instruction: "Si teniu l'IBM Content Navigator for Microsoft Office instal·lat en les màquines de client al vostre entorn, podeu especificar la manera com es gestionen els documents quan s'afegeixen en el dipòsit o s'hi incorporen.",
		admin_repository_office_conf_instruction: "Mapeu les propietats de document del Microsoft Office en les propietats definides en el dipòsit.<br/><br/>Quan el mapatge de propietats està habilitat en un escriptori amb el qual està associat el dipòsit, les propietats que es configuren als documents del Microsoft Office per emplenar les propietats al dipòsit quan l'usuari afegeix un document des de l'IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mapatge de propietats",
		admin_repository_office_conf_prop_mapping_title1: "Integració de l'MS Office",
		admin_office_conf_instruction: "Podeu controlar la manera en què l'IBM Content Navigator s'integra a les aplicacions del Microsoft Office quan l'IBM Content Navigator for Microsoft Office està instal·lat a les màquines de client<br /><br /><b>Important:</b> si seleccioneu <b>Mapa propietats de l'Office</b>, també haureu de configurar el mapatge de propietats de cada dipòsit que està associat a aquest escriptori. Podeu configurar els mapatges de propietats a la pestanya <b>Propietats de l'Office</b> de cada dipòsit a l'entorn.",
		admin_desktop_workflows_instruction: "<b>Només els sistemes de l'IBM FileNet P8:</b> especifiqueu quins espais d'aplicacions es mostraran a l'escriptori. L'ordre dels espais d'aplicacions seleccionats determina l'ordre en què els espais es mostren en el client web.<br><br><b>Consell:</b> podeu canviar el nom de visualització dels espais d'aplicacions amb l'especificació dels noms nous a la secció <b>Etiquetes</b> de l'eina d'administració.",
		admin_search_filtered_properties_instruction: "Especifiqueu les propietats on els usuaris hi poden fer cerques. Podeu ocultar qualsevol de les propietats que no voleu que els usuaris cerquin.",
		admin_search_filtered_operators_instruction: "Especifiqueu els operadors que hi ha disponibles quan els usuaris cerquen un tipus de dada determinat, com ara una data o un enter. Podeu ocultar qualsevol dels operadors que no voleu que els usuaris seleccionin.",
		admin_search_default_search_results_instruction: "Especifiqueu les propietats que es mostraran en documents i en carpetes als resultats de cerca. Podeu ocultar qualsevol de les propietats que no voleu que aparegui en els resultats de cerca.",
		admin_search_default_search_results_p8_cmis_instruction: "Especifiqueu les propietats que es mostraran en documents als resultats de cerca. Podeu ocultar qualsevol de les propietats que no voleu que aparegui en els resultats.",

		admin_datetimeOp: "Data i hora",
		admin_floatOp: "Número de coma flotant",
		admin_integerOp: "Enter",
		admin_stringOp: "Cadena",
		admin_binaryOp: "Binari",
		admin_objectOp: "Objecte",
		admin_idOp: "ID",
		admin_userOp: "Usuari",
		admin_booleanOp: "Booleà",

		admin_string: "Cadena",
		admin_long: "Llarga",
		admin_date: "Data",
		admin_double: "Doble",
		admin_object: "Objecte",
		admin_guid: "GUID",
		admin_boolean: "Booleà",

		admin_repcfg_heading: "Podeu alterar temporalment el comportament per defecte del dipòsit establint els paràmetres de configuració.",
		admin_repcfg_heading_od: "Podeu alterar temporalment el comportament per defecte del dipòsit establint els paràmetres de configuració.<br /><br /><b>Important:</b> per utilitzar el client web amb el Content Manager OnDemand, també haureu d'especificar valors dels paràmetres que s'inclouen a la pestanya <b>Content Manager OnDemand</b> sota <b>Paràmetres</b>, que s'apliquen a tots els dipòsits Content Manager OnDemand als quals us connecteu.",
		admin_repcfg_teamspaces: "Gestió de l'espai de treball:",
		admin_repcfg_enable: "Habilita",
		admin_repcfg_disable: "Inhabilita",

		admin_repcfg_deliver_redacted_pdf_files_as: "Els fitxers PDF redactats es lliuraran com a:",
		admin_repcfg_burn_pdf_to_pdf: "Fitxers PDF",
		admin_repcfg_burn_pdf_to_tiff: "Fitxers TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Un fitxer PDF redactat mitjançant l'aplicació de redaccions basades en rol es pot lliurar al client en un altre format de fitxer. Quan canvia el format de fitxer, l'extensió del fitxer y el tipus de MIME també canvien.<br><br>Per exemple, quan un fitxer PDF es lliura com a fitxer TIFF,  l'extensió del fitxer canvia a .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Permet als usuaris que combinin i divideixin les pàgines que tenen redaccions basades en rol",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Seleccioneu aquesta opció per permetre als usuaris que combinin i divideixin les pàgines que tenen redaccions basades en rol. Els usuaris que no siguin editors de redacció no podran editar les redaccions basades en rol i no tindran accés a les dades confidencials associades a aquestes redaccions, encara que aquesta opció estigui habilitada.",
		admin_repcfg_modify_teamspace_roles: "Permet als propietaris modificar els rols existents als espais d'equip",
		admin_repcfg_tm_delete_teamspace: "Permet als propietaris eliminar l'espai de treball, incloent-hi el contingut",
		admin_repcfg_tm_delete_teamspace_id_missing: "Heu d'especificar el nom d'usuari d'un administrador del dipòsit.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Heu d'especificar la contrasenya de l'administrador del dipòsit.",
		admin_repcfg_teamspace_display_Recent: "Mostra només els espais d'equip modificats recentment ",
		admin_repcfg_teamspace_display_Recent_value: "Dies des de la darrera modificació:",

		admin_repcfg_folder_selector: "Carpeta arrel:",
		admin_repcfg_enable_folder_selector: "Habilita",
		admin_repcfg_disable_folder_selector: "Inhabilita",
		admin_repcfg_SSO: "Inici de sessió individual:",
		admin_repcfg_teamspace_template_permission_text: "Assigna creadors de plantilla d'espai d'equip:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Especifiqueu els grups o usuaris que poden crear plantilles d'espai d'equip. Els usuaris i grups reben els paràmetres de seguretat adequats a les classes i carpetes necessàries. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Més informació</a><br/><br/><b>Recomanació:</b> utilitzeu grups per simplificar la gestió dels espais d'equip.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Especifiqueu els grups o usuaris que poden crear plantilles d'espai d'equip. Els usuaris s'afegeixen a les ACL adequades i reben els privilegis necessaris. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Més informació</a><br/><br/><b>Recomanació:</b> utilitzeu grups per simplificar la gestió dels espais d'equip.",
		admin_repcfg_teamspace_permission_text: "Assigna rols d'espai d'equip:",
		admin_repcfg_teamspace_permission_hover_p8: "Especifiqueu els grups o usuaris que poden crear i utilitzar espais d'equip. Els usuaris reben els paràmetres de seguretat adequats a les classes i carpetes necessàries. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Més informació</a><br/><br/><b>Recomanació:</b> utilitzeu grups per simplificar la gestió dels espais d'equip.",
		admin_repcfg_teamspace_permission_hover_cm: "Especifiqueu els grups o usuaris que poden crear i utilitzar espais d'equip. Els usuaris s'afegeixen a les ACL adequades i reben els privilegis necessaris. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Més informació</a><br/><br/><b>Recomanació:</b> utilitzeu grups per simplificar la gestió dels espais d'equip.",
		admin_repcfg_entry_template_permission_text: "Assigna rols de plantilla d'entrada:",
		admin_repcfg_entry_template_permission_hover_p8: "Especifiqueu els grups o usuaris que poden crear i utilitzar plantilles d'entrada. Els usuaris reben els paràmetres de seguretat adequats a la classe de document Plantilla d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Més informació</a><br/><br/><b>Recomanació:</b> utilitzeu grups per simplificar la gestió de les plantilles d'entrada.",
		admin_repcfg_entry_template_permission_hover_cm: "Especifiqueu els grups o usuaris que poden crear i utilitzar plantilles d'entrada. Els usuaris s'afegeixen a les ACL adequades i reben els privilegis necessaris. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Més informació</a><br /><br /><b>Recomanació:</b> utilitzeu grups per simplificar la gestió de les plantilles d'entrada.",
		admin_repcfg_office_template_permission_text: "Assigna rols de plantilla:",
		admin_repcfg_office_template_permission_hover_cm: "Especifiqueu els grups o usuaris que poden crear, editar i utilitzar les plantilles del Microsoft Office Online o del Servei d'edició. Els usuaris s'afegeixen a les ACL adequades i reben els privilegis necessaris.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a><br /><br /><b>Recomanació:</b> utilitzeu grups per simplificar la gestió de les plantilles del Microsoft Office Online o del Servei d'edició.",
		admin_repcfg_draft_permission_text: "Assigna rols d'esborrany:",
		admin_repcfg_draft_permission_hover_cm: "Especifiqueu els grups o usuaris que poden crear esborranys de documents del Microsoft Office Online o del Servei d'edició durant l'edició col·laborativa. Tots els usuaris que necessitin editar documents de manera col·laborativa al Microsoft Office Online o al Servei d'edició han de tenir els privilegis adients per crear esborranys. Els usuaris s'afegeixen a les ACL adequades i reben els privilegis necessaris. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a><br /><br /><b>Recomanació:</b> utilitzeu grups per simplificar la gestió d'esborranys.",
		admin_repcfg_search_permission_text: "Assigna rols de cerca:",
		admin_repcfg_search_permission_hover_p8: "Especifiqueu els grups o usuaris que poden crear o utilitzar cerques desades i cerques a diferents dipòsits. Els usuaris reben els paràmetres de seguretat adequats a les classes necessàries. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Més informació</a><br /><br /><b>Recomanació:</b> utilitzeu grups per simplificar la gestió de les cerques.",
		admin_repcfg_search_permission_hover_cm: "Especifiqueu els grups o usuaris que poden crear, editar o utilitzar cerques desades i cerques a diferents dipòsits. Els usuaris s'afegeixen a les ACL adequades i reben els privilegis necessaris. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Més informació</a><br /><br /><b>Recomanació:</b> utilitzeu grups per simplificar la gestió de les cerques.",
		admin_repcfg_search_permission_title: "Rols de cerca",
		admin_repcfg_search_permission_intro_text: "Assegureu-vos que els usuaris tenen accés a l'escriptori que admet el seu rol. Per exemple, assegureu-vos que els creadors de cerca tenen accés a un escriptori que els permet crear cerques i cerques a diferents dipòsits.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Els administradors de plantilles d'espai d'equip són usuaris que tenen permisos de <b>Control total</b> al dipòsit (magatzem d'objectes). No podeu canviar la llista d'administradors de plantilles d'espai d'equip des de l'eina d'administració. <p>Els administradors de plantilles d'espai d'equip poden eliminar o modificar qualsevol plantilla d'espai d'equip. L'usuari que crea una plantilla d'espai d'equip no cal que comparteixi la plantilla amb els administradors de plantilles de l'espai d'equip.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Quan designeu un usuari o grup com a creador de plantilles d'espai d'equip, l'usuari o grup rep la seguretat adequada al dipòsit per crear plantilles d'espai d'equip. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Més informació</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Usuaris i grups que tenen privilegis assignats que no són els privilegis associats amb Administradors i Creadors.<p>Podeu moure aquests usuaris i grups al rol de creadors de plantilles d'espai d'equip eliminant-los del rol Altres i tornant-los a assignar com a creadors de plantilles d'espai d'equip.<p>Podeu revisar els privilegis que s'atorguen actualment a aquests usuaris i grups utilitzant l'IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Els administradors d'espais d'equip són usuaris que tenen permisos de <b>Control total</b> al dipòsit (magatzem d'objectes). No podeu canviar la llista d'administradors d'espais d'equip des de l'eina d'administració.<p>Els administradors d'espais d'equip poden eliminar o modificar qualsevol espai d'equip. L'usuari que crea un espai d'equip no cal que comparteixi l'espai d'equip amb els administradors d'espais d'equip.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Quan designeu un usuari o grup com a creador d'espais d'equip, l'usuari o grup rep la seguretat adequada al dipòsit per crear espais d'equip. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Més informació</a>",
		admin_repcfg_teamspace_user_hover_p8: "Quan designeu un usuari o grup com a usuari d'espais d'equip, l'usuari o grup rep la seguretat adequada al dipòsit per utilitzar espais d'equip. Això no obstant, l'usuari ha de ser membre d'un espai d'equip per accedir a l'espai d'equip. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Més informació</a><p><b>Consell:</b> si voleu que tots els usuaris del vostre entorn puguin veure espais d'equip, podeu afegir el pseudo-compte #AUTHENTICATED-USERS al rol d'usuari d'espai d'equip.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Els usuaris i grups que tenen privilegis assignats que no són els privilegis associats amb Administradors, Creadors i Usuaris.<p>Podeu moure aquests usuaris i grups a rols predefinits eliminant-los del rol Altres i després assignant-los rols d'espai d'equip.<p>Podeu revisar els privilegis que s'atorguen actualment a aquests usuaris i grups utilitzant l'IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Els administradors de plantilles d'entrada són usuaris que tenen permisos de <b>Control total</b> al dipòsit (magatzem d'objectes). No podeu canviar la llista d'administradors de plantilles d'entrada des de l'eina d'administració. <p>Els administradors de plantilles d'entrada poden eliminar o modificar qualsevol plantilla d'entrada. L'usuari que crea una plantilla d'entrada no cal que comparteixi la plantilla d'entrada amb els administradors de plantilles d'entrada.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Quan designeu un usuari o grup com a creador de plantilles d'entrada, l'usuari o grup rep la seguretat adequada al dipòsit per crear plantilles d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Més informació</a>",
		admin_repcfg_entry_template_user_hover_p8: "Quan designeu un usuari o grup com a usuari de plantilles d'entrada, l'usuari o grup rep la seguretat adequada al dipòsit per utilitzar plantilles d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Més informació</a><p><b>Consell:</b> si voleu que tots els usuaris del vostre entorn puguin utilitzar plantilles d'entrada, podeu afegir el pseudo-compte #AUTHENTICATED-USERS al rol d'usuari de plantilla d'entrada.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Els usuaris i grups que tenen privilegis assignats que no són els privilegis associats amb Administradors, Creadors i Usuaris.<p>Podeu moure aquests usuaris i grups a rols predefinits eliminant-los del rol Altres i després assignant-los rols de plantilla d'entrada.<p>Podeu revisar els privilegis que s'atorguen actualment a aquests usuaris i grups utilitzant l'IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Quan designeu un usuari o grup com a creador de plantilles d'espai d'equip, l'usuari o grup rep els privilegis adequats per crear plantilles d'espai d'equip al dipòsit. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Més informació</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Quan designeu un usuari o grup com a creador d'espais d'equip, l'usuari o grup rep els privilegis adequats per crear espais d'equip al dipòsit. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Més informació</a>",
		admin_repcfg_teamspace_user_hover_cm: "Quan designeu un usuari o grup com a usuari d'espais d'equip, l'usuari o grup rep els privilegis adequats per utilitzar espais d'equip al dipòsit. Això no obstant, l'usuari ha de ser membre d'un espai d'equip per accedir a l'espai d'equip. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Més informació</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Quan designeu un usuari o grup com a creador de plantilles d'entrada, l'usuari o grup rep els privilegis adequats per crear plantilles d'entrada al dipòsit. <br/><br/>Això no obstant, els paràmetres per a una plantilla d'entrada específica determinen els privilegis que l'usuari o grup té sobre la plantilla d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Més informació</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Quan designeu un usuari o grup com a editor de plantilles d'entrada, l'usuari o grup rep els privilegis adequats per editar plantilles d'entrada al dipòsit. <br/><br/>Això no obstant, els paràmetres per a una plantilla d'entrada específica determinen els privilegis que l'usuari o grup té sobre la plantilla d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Més informació</a>",
		admin_repcfg_entry_user_hover_cm: "Quan designeu un usuari o grup com a usuari de plantilles d'entrada, l'usuari o grup rep els privilegis adequats per utilitzar plantilles d'entrada al dipòsit. <br/><br/>Això no obstant, els paràmetres per a una plantilla d'entrada específica determinen els privilegis que l'usuari o grup té sobre la plantilla d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Més informació</a>",
		admin_repcfg_office_template_creators_hover_cm: "Quan designeu un usuari o grup com a creador de plantilles del Microsoft Office Online o del Servei d'edició, l'usuari o grup rep els privilegis adequats per crear fitxers de plantilla al dipòsit. <br/><br/>Això no obstant, els paràmetres de seguretat per a un fitxer de plantilla específic determinen els privilegis que l'usuari o grup té sobre la plantilla d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a>",
		admin_repcfg_office_template_editors_hover_cm: "Quan designeu un usuari o grup com a editor de plantilles del Microsoft Office Online o del Servei d'edició, l'usuari o grup rep els privilegis adequats per modificar fitxers de plantilla al dipòsit.  <br/><br/>Això no obstant, els paràmetres de seguretat per a un fitxer de plantilla específic determinen els privilegis que l'usuari o grup té sobre la plantilla d'entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a>",
		admin_repcfg_office_template_user_hover_cm: "Quan designeu un usuari o grup com a usuari de plantilles del Microsoft Office Online o del Servei d'edició, l'usuari o grup rep els privilegis adequats per aplicar una plantilla en crear un document de l'Office Online o del Servei d'edició des del client web.  <br/><br/>Això no obstant, els paràmetres de seguretat per a un fitxer de plantilla específic determinen els privilegis que l'usuari o grup té sobre la plantilla d'entrada.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a>",
		admin_repcfg_draft_creators_hover_cm: "Tots els usuaris que necessitin editar documents de manera col·laborativa al Microsoft Office Online o al Servei d'edició han de tenir assignat aquest rol. No assigneu a usuaris el rol d'editor ni d'usuari. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a>",
		admin_repcfg_draft_editors_hover_cm: "Tots els usuaris que necessitin editar documents de manera col·laborativa al Microsoft Office Online o al Servei d'edició han de tenir assignat el rol de <b>creador</b>. Si un usuari té assignat el rol d'editor, no pot crear esborranys, necessaris per a l'edició col·laborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a>",
		admin_repcfg_draft_user_hover_cm: "Tots els usuaris que necessitin editar documents de manera col·laborativa al Microsoft Office Online o al Servei d'edició han de tenir assignat el rol de <b>creador</b>. Si un usuari té assignat el rol d'usuari, no pot crear esborranys, necessaris per a l'edició col·laborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Més informació</a>",		
		admin_repcfg_search_others_hover_p8: "Els usuaris i grups que tenen privilegis assignats que no són els privilegis associats amb Administradors, Creadors i Usuaris.<p>Podeu moure aquests usuaris i grups a rols predefinits eliminant-los del rol Altres i després assignant-los rols de cerca.<p>Podeu revisar els privilegis que s'atorguen actualment a aquests usuaris i grups utilitzant l'IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Els administradors de cerques són usuaris que tenen permisos de <b>Control total</b> al dipòsit (magatzem d'objectes). No podeu canviar la llista d'administradors de cerques des de l'eina d'administració. <br /><br />Els administradors de cerques poden eliminar o modificar qualsevol cerca. L'usuari que crea una cerca no cal que la comparteixi amb els administradors de cerques.",
		admin_repcfg_search_creators_hover_p8: "Quan designeu un usuari o grup com a creador de cerques, l'usuari o grup rep la seguretat adequada al dipòsit per crear cerques. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Més informació</a>",
		admin_repcfg_search_user_hover_p8: "Quan designeu un usuari o grup com a usuari de cerques, l'usuari o grup rep la seguretat adequada al dipòsit per utilitzar cerques. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Més informació</a><br /><br /><b>Consell:</b> si voleu que tots els usuaris del vostre entorn puguin utilitzar cerques, podeu afegir el pseudo-compte #AUTHENTICATED-USERS al rol d'usuari de cerques.<br/><br />Per defecte, un usuari de cerques pot crear cerques i cerques entre dipòsits, però no les pot desar. Podeu impedir que els usuaris de cerques creïn cerques si feu que utilitzin un escriptori per al qual estiguin seleccionades aquestes opcions:<ul><li><b>Evita que els usuaris creïn les cerques</b></li><li><b>Evita que els usuaris creïn cerques als dipòsits</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Quan designeu un usuari o grup com a creador de cerques, l'usuari o grup rep els privilegis adequats per crear cerques al dipòsit. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Més informació</a><br /><br /><b>Important:</b> assegureu-vos que els creadors de cerques utilitzen un escriptori per al qual no s'han seleccionat aquestes opcions:<ul><li><b>Evita que els usuaris creïn les cerques</b></li><li><b>Evita que els usuaris creïn cerques als dipòsits</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Quan designeu un usuari o grup com a editor de cerques, l'usuari o grup rep els privilegis adequats per modificar les cerques i les cerques entre dipòsits existents. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Més informació</a><br /><br /><b>Consell:</b> per defecte, un editor de cerques pot crear cerques i cerques entre dipòsits, però no les pot desar. Podeu impedir que els editors de cerques creïn cerques si feu que utilitzin un escriptori per al qual estiguin seleccionades aquestes opcions:<ul><li><b>Evita que els usuaris creïn les cerques</b></li><li><b>Evita que els usuaris creïn cerques als dipòsits</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Quan designeu un usuari o grup com a usuari de cerques, l'usuari o grup rep els privilegis adequats per obrir i executar les cerques i les cerques entre dipòsits desades. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Més informació</a><br /><br /><b>Consell:</b> per defecte, un usuari de cerques pot crear cerques i cerques entre dipòsits, però no les pot desar. Podeu impedir que els usuaris de cerques creïn cerques si feu que utilitzin un escriptori per al qual estiguin seleccionades aquestes opcions:<ul><li><b>Evita que els usuaris creïn les cerques</b></li><li><b>Evita que els usuaris creïn cerques als dipòsits</b></li></ul>",
		admin_repcfg_db_encoding: "Codificació de caràcters de la base de dades del servidor:",
		admin_repcfg_db_encoding_hover: "La codificació de caràcters per defecte per a una base de dades IBM Content Manager és UTF-8.",
		admin_repcfg_db_encoding_specify: "Especifiqueu la codificació de caràcters de la base de dades",
		admin_repcfg_db_encoding_utf8: "Codificació UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Especifiqueu aquesta opció si utilitzeu una base de dades codificada amb UTF-8. IBM Content Navigator utilitzarà la codificació UTF-8 per comprovar la longitud de les sèries de valors de la propietat de l'element.",
		admin_repcfg_db_encoding_other: "Altres codificacions",
		admin_repcfg_db_encoding_other_hover: "Especifiqueu aquesta opció si utilitzeu una base de dades amb una codificació que no és UTF-8. IBM Content Navigator utilitzarà el nombre de caràcters per comprovar la longitud de les sèries de valor de la propietat d'element.",
		admin_repcfg_language_codes: "Codis d'idioma de servidor:",
		admin_repcfg_language_codes_avail: "Disponible",
		admin_repcfg_language_codes_sel: "Seleccionada",
		admin_repcfg_pdf_conversion: "Tipus MIME que s'han de convertir a documents PDF en els fitxers adjunts:",
		admin_repcfg_pdf_conversion_avail: "Disponible",
		admin_repcfg_pdf_conversion_sel: "Seleccionada",

		admin_repcfg_box_share_enable_classes_label: "Classes que cal modificar per al suport de comparticions del Box:",
		admin_repcfg_box_share_enable_classes_hover: "Podeu modificar la classe per tal que emmagatzemi l'ID del fitxer al Box quan es comparteixi l'element.",
		admin_repcfg_box_share_enable_classes_warning: "Important: totes les classes que especifiqueu es modificaran per admetre comparticions del Box. Després de desar els canvis, ja no es podran eliminar de les classes.<br><br>Per modificar classes, heu de connectar-vos al dipòsit com a administrador del servidor de biblioteques.",
		admin_repcfg_box_share_enable_classes_available: "Classes disponibles",
		admin_repcfg_box_share_enable_classes_selected: "Classes seleccionades",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Emmagatzema l'ID de compartició del Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Aquesta classe ja s'ha modificat per emmagatzemar l'ID de compartició del Box. Aquesta opció no es pot eliminar.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modifiqueu aquesta classe per tal que emmagatzemi l'ID del fitxer del Box quan es comparteixi l'element.",

		admin_repcfg_redaction: "Redaccions basades en rol:",
		admin_repcfg_enable_redaction_hover: "Especifiqueu si voleu utilitzar redaccions basades rols en els documents d'aquest dipòsit.<br/><br/>Les restriccions basades en rol s'apliquen quan es baixa un document, s'imprimeix, es representat per un visualitzador o visualitzat com a miniatura. El que els usuaris puguin veure en visualitzar el document dependrà del seu rol i de les polítiques de redacció aplicables.",

		admin_repcfg_redaction_policy_permission_text: "Assigna editors de política:",
		admin_repcfg_redaction_policy_editors_hover: "Seleccioneu els usuaris i grups que crearan, modificaran i suprimiran polítiques de redacció i rols de redacció.",
		admin_repcfg_redaction_policy_editors_select_hover: "Els editors de política de redacció poden crear, modificar i suprimir polítiques de redacció i rols de redacció.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Els administradors de polítiques de redacció poden assignar editors de polítiques de redacció.<br/><br/>Podeu canviar la llista d'administradors de polítiques de redacció mitjançant l'IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Els administradors de polítiques de redacció poden assignar editors de polítiques de redacció.<br/><br/>Podeu canviar la llista d'administradors de polítiques de redacció mitjançant el client d'administració del sistema de l'IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Assigna editors de redacció:",
		admin_repcfg_redaction_editors_hover: "Seleccioneu els usuaris i grups que crearan, modificaran i suprimiran redaccions basades en rol. Després de seleccionar usuaris i grups com a editors, heu de definir-los com a editors en polítiques de redacció abans de que puguin editar redaccions basades en rol.",
   		admin_repcfg_redaction_editors_select_hover: "Els editors de redacció poden crear, modificar i suprimir redaccions basades en rol quan també es defineixen como a editors en polítiques de redacció.",
   		admin_repcfg_redaction_administrators_hover_p8: "Els administradors de redacció poden assignar editors de redacció.<br/><br/>Podeu canviar la llista d'administradors de redacció mitjançant l'IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Els administradors de redacció poden assignar editors de redacció.<br/><br/>Podeu canviar la llista d'administradors de redacció mitjançant el client d'administració del sistema de l'IBM Content Manager.",
		admin_repcfg_entry_template: "Gestió de plantilla d'entrada:",
		admin_repcfg_entry_template_enable_classes_label: "Classes que cal modificar per al suport de plantilles d'entrada:",
		admin_repcfg_oos_reference_attribute_label: "Atributs de referència de l'Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Important: totes les classes que especifiqueu es modificaran per donar suport a les plantilles d'entrada. Després de desar els canvis, ja no es podran eliminar de les classes.<br><br>Podeu modificar la classe per a una o les dues finalitats següents:<br><ul><li>Per emmagatzemar l'ID de la plantilla d'entrada que s'ha utilitzat per afegir un element, de manera que els paràmetres de la plantilla d'entrada s'aplicaran quan l'element es modifiqui</li><li>Només classes de carpeta jeràrquica: per donar suport a les associacions de carpeta de plantilla d'entrada</li></ul>Per modificar classes, heu de connectar-vos al dipòsit com a administrador del servidor de biblioteques.",
		admin_repcfg_entry_template_enable_classes_warning: "Important: totes les classes que especifiqueu es modificaran per donar suport a les plantilles d'entrada. Després de desar els canvis, ja no es podran eliminar de les classes.<br><br>Per modificar classes, heu de connectar-vos al dipòsit com a administrador del servidor de biblioteques.",
		admin_repcfg_entry_template_enable_classes_available: "Classes disponibles",
		admin_repcfg_entry_template_enable_classes_selected: "Classes seleccionades",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Emmagatzema l'ID de plantilla d'entrada",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modifiqueu aquesta classe de manera que emmagatzemi l'ID de la plantilla d'entrada que s'ha utilitzat per afegir un element, de manera que els paràmetres de la plantilla d'entrada s'aplicaran quan l'element es modifiqui.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Emmagatzema associacions de carpeta",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modifiqueu aquesta classe de manera que es pot donar suport a les associacions de la carpeta de plantilla d'entrada. Aquesta opció només està disponible per a les classes de carpeta jeràrquica.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Aquesta classe ja s'ha modificat per emmagatzemar l'ID de plantilla d'entrada. Aquesta opció no es pot eliminar.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Aquesta classe ja s'ha modificat per emmagatzemar les associacions de carpetes. Aquesta opció no es pot eliminar.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Per emmagatzemar les associacions de carpetes, només es poden utilitzar classes de carpetes jeràrquiques i classes no jeràrquiques.",
		admin_repcfg_entry_template_root_folder_association_title: "Les plantilles d'entrada associades a aquesta carpeta arrel:",
		admin_repcfg_entry_template_root_folder_association_hover: "Especifiqueu quines plantilles d'entrada voleu associar a la carpeta arrel al dipòsit de l'IBM Content Manager.<br /><br />Si associeu plantilles d'entrada amb la carpeta arrel i els usuaris afegeixen elements a una carpeta jeràrquica, sempre s'utilitzarà una plantilla d'entrada per afegir elements.",
		admin_repcfg_entry_template_root_folder_association_button: "Defineix associacions",
		admin_repcfg_oos_enable_classes_label: "Classes que cal modificar per al suport de l'Office Online i del Servei d'edició:",
		admin_repcfg_oos_enable_classes_warning: "Important: totes les classes que especifiqueu es modificaran per donar suport al Microsoft Office Online o al Servei d'edició. Un cop desats els canvis, l'atribut de referència que s'afegeix de manera automàtica a cada una de les classes i ja no es pot eliminar.<br><br>Per modificar classes, heu de connectar-vos al dipòsit com a administrador del servidor de biblioteques.",
		admin_repcfg_oos_enable_classes_available: "Classes disponibles",
		admin_repcfg_oos_enable_classes_selected: "Classes seleccionades",
		admin_repcfg_oos_enable_classes_note: "Important:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Aquesta classe no se suporta al Microsoft Office Online ni al Servei d'edició.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "La política de versió per a aquesta classe està establerta a 'versió sempre', que no està suportada pel Microsoft Office Online ni pel Servei d'edició. Seleccioneu una altra classe.",
		admin_repcfg_download_recording: "Rastreja baixades:",
		admin_repcfg_download_recording_hover: "Es rastregen les baixades per defecte quan el complement Collaboration Base Extensions s'instal·la al dipòsit. No obstant això, la inhabilitació d'aquesta opció pot millorar el rendiment del dipòsit.<br><br>Si inhabiliteu aquesta opció, els usuaris veuran un recompte de les baixades que s'han realitzat abans que l'opció s'inhabiliti.",
		admin_repcfg_sync_service: "Serveis de sincronització:",
		admin_repcfg_download_ignored: "Ignora baixades d'usuaris específics:",
		admin_repcfg_download_ignored_hover: "Podeu ignorar baixades que sol·liciten usuaris específics, com ara els administradors o els comptes del sistema per reflectir de manera més acurada el nombre d'usuaris que han baixat un document. Per exemple, si teniu un compte específic que s'utilitza per baixar contingut i per generar un informe mensual, podeu ignorar baixades que el compte ha sol·licitat.<br><br><b>Restricció:</b> no podeu especificar grups.",

		admin_repcfg_add_as_major_version: "Afegeix com a versió principal:",
		admin_repcfg_enable_add_as_major_version: "Sí",
		admin_repcfg_disable_add_as_major_version: "No",
		admin_repcfg_checkin_as_major_version: "Incorpora com a una versió principal:",
		admin_repcfg_enable_checkin_as_major_version: "Sí",
		admin_repcfg_disable_checkin_as_major_version: "No",
		admin_repcfg_annotation_security: "Seguretat d'anotació:",
		admin_repcfg_inherit_annotation_security: "Duplica la seguretat del document contenidor",
		admin_repcfg_default_annotation_security: "Utilitza la Seguretat d'anotació per defecte",
		admin_repcfg_connection_point: "Punt de connexió de flux de treball:",
		admin_repcfg_include_workflow_definition: "Mostra la classe de definició de flux de treball:",
		admin_repcfg_include_form_template: "Mostra classe de plantilla de formulari:",
		admin_repcfg_enable_include_workflow_definition: "Sí",
		admin_repcfg_disable_include_workflow_definition: "No",

		admin_repcfg_status_columns: "Icones d'estat:",
		admin_repcfg_status_columns_hover: "Especifiqueu els estats de les icones que voleu veure. Les icones d'estat es mostren al costat de documents, de carpetes i d'elements de treball a la llista de contingut.",
		admin_repcfg_status_columns_documents_or_folders: "Mostra una icona quan els documents o carpetes:",
		admin_repcfg_status_columns_documents: "Mostra una icona quan els documents:",
		admin_repcfg_status_columns_documents_checked_out: "Estan extrets",
		admin_repcfg_status_columns_documents_declared_records: "Són registres",
		admin_repcfg_status_columns_documents_minor_versions: "Tenen versions secundàries",
		admin_repcfg_status_columns_documents_compound_document: "Són documents compostos",
		admin_repcfg_status_columns_documents_bookmarks: "Tenen adreces d'interès",
		admin_repcfg_status_columns_documents_hold: "Estan reservats",
		admin_repcfg_status_columns_documents_notes: "Tenen notes",
		admin_repcfg_status_columns_work_items: "Mostra una icona quan els elements de treball:",
		admin_repcfg_status_columns_work_items_locked: "Estan bloquejats",
		admin_repcfg_status_columns_work_items_checked_out: "Estan extrets",
		admin_repcfg_status_columns_work_items_deadline: "Tenen una data límit",
		admin_repcfg_status_columns_work_items_suspended: "No es processen",

		admin_repcfg_afp2pdf_config_file: "Fitxer de configuració AFP2PDF:",
		admin_repcfg_transform_xml_file: "Fitxer de transformació personalitzat:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Habilita",
		admin_repcfg_disable_ssl: "Inhabilita",
		admin_repcfg_keyringdb_file: "Fitxer de base de dades del conjunt de claus:",
		admin_repcfg_keyringstash_file: "Fitxer de reserva del conjunt de claus:",
		admin_repcfg_od_sso: "Inici de sessió únic",
		admin_repcfg_od_enable_sso: "Habilita",
		admin_repcfg_od_disable_sso: "Inhabilita",
		admin_repcfg_od_sso_password: "Contrasenya",
		admin_repcfg_advanced_label: "Avançat",
		admin_repcfg_custom_properties_label: "Propietats personalitzades:",
		admin_repcfg_new_button_label: "Nou",
		admin_repcfg_edit_button_label: "Edita",
		admin_repcfg_delete_button_label: "Suprimeix",
		admin_repcfg_custom_head1: "Nom",
		admin_repcfg_custom_head2: "Valor",
		admin_repcfg_ecpdialog_title_new: "Propietat personalitzada nova",
		admin_repcfg_ecpdialog_title_edit: "Edita la propietat personalitzada",
		admin_repcfg_ecpdialog_name: "Nom:",
		admin_repcfg_ecpdialog_value: "Valor:",
		admin_repcfg_ecpdialog_save: "Desa",
		admin_repcfg_ecpdialog_create: "Crea",
		admin_repcfg_ecpdialog_cancel: "Cancel·la",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "El valor és obligatori. El valor no pot contenir espais en blanc ni pot ser un duplicat.",

		admin_repcfg_cmis_use_gzip_encoding: "Utilitza codificació GZIP:",

		admin_repcfg_task_mgr_proxy: "ID de connexió del gestor de tasques:",
		admin_repcfg_task_mgr_proxy_hover: "Per la compartició Box o la supressió Teamspace, el gestor de tasques utilitza un ID d'usuari administrador i contrasenya per executar tasques en segon pla que modifiquen el dipòsit.<br><br>Feu clic a Defineix i inicieu una sessió en el dipòsit mitjançant un ID d'usuari administrador i contrasenya vàlids del dipòsit.",
		admin_task_manager_not_enabled_warning: "Aquesta opció requereix el servei del gestor de tasques, però el servei del gestor de tasques no s'ha habilitat.  Podeu habilitar el servei del gestor de tasques per a tots els escriptoris a la pàgina General de la Configuració.",
		admin_task_manager_not_enabled_and_user_warning: "Aquesta opció requereix el servei del gestor de tasques, però el servei del gestor de tasques no s'ha habilitat. En aquesta pàgina, establiu l'ID de connexió del gestor de tasques i després, a la pàgina General de Configuració, habiliteu el servei del gestor de tasques per a tots els escriptoris.",
		admin_task_manager_user_id_pw_not_set_warning: "Aquesta opció requereix el servei del gestor de tasques, així com un ID d'usuari administrador i contrasenya. En aquesta pàgina, establiu l'ID de connexió del gestor de tasques.",
		admin_repcfg_teamspaces_delete_task_id: "Administrador de dipòsits:",
		admin_repcfg_teamspaces_delete_task_password: "Contrasenya:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Heu d'especificar un administrador del servidor de biblioteques per tal que el servei de gestor de tasques pugui suprimir un espai d'equip al dipòsit.",
		admin_repcfg_teamspaces_delete_task_hover: "Per defecte, quan un usuari suprimeix un espai d'equip, aquest espai d'equip s'oculta. Totes les carpetes i els documents de l'espai d'equip romanen en el dipòsit. <br /> <br />Quan habiliteu aquesta opció, només romanen al dipòsit els documents arxivats en altres carpetes.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Si hi ha un nombre gran d'espais d'equip al vostre entorn, pot trigar una mica per visualitzar tots els espais d'equip a la pestanya <b>Espais d'equip</b>. Podeu seleccionar aquesta opció per reduir la quantitat de temps que es triga en omplir la llista.<br /><br />Si un usuari necessita treballar amb un espai d'equip fora de l'abast que especifiqueu, l'usuari pot utilitzar el camp <b>Filtre</b> per buscar l'espai d'equip.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Si seleccioneu aquesta opció, els usuaris que tenen el rol de propietari en un espai d'equip poden modificar els rols que estan associats amb els espais d'equip que s'han creat abans que l'IBM Content Navigator, versió 2.0.2.<br /><br />Aquesta opció no afecta els espais d'equip que es creen amb l'IBM Content Navigator, versió 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Especifiqueu si voleu que els usuaris puguin crear plantilles i espai d'equip en el dipòsit.<br /><br /><b>Important:</b> el dipòsit ha d'admetre les carpetes jeràrquiques.<br /><br />Si habiliteu espais d'equip, l'IBM Content Navigator crearà el model de dades de l'espai d'equip al dipòsit. El model de dades inclou objectes ACL, privilegis, conjunts de privilegis i dos nous tipus d'elements.",
		admin_repcfg_folder_selector_hover: "Seleccioneu la carpeta que voleu utilitzar com a carpeta arrel en els documents quan els usuaris hi naveguin. Si no teniu les carpetes jeràrquiques configurades en el dipòsit, aquest paràmetre us permetrà navegar mitjançant la definició d'una carpeta arrel. Si teniu carpetes jeràrquiques configurades en el dipòsit, aquest valor sobreescriurà la carpeta arrel configurada al dipòsit.",
		admin_repcfg_cm_use_sso_hover: "Especifiqueu si voleu permetre que els usuaris tinguin l'inici de sessió individual amb el conjunt de privilegis d'inici de sessió de confiança.<br /><br /><b>Important:</b> l'inici de sessió individual ha d'estar habilitat al servidor Content Manager i WebSphere Application Server ha d'estar configurat en el LTPA per tal que funcioni el paràmetre de configuració.",
		admin_repcfg_cm_direct_retrieve_hover: "La recuperació directa està habilitada per defecte ja que permet que el client web recuperi ràpidament el contingut des del gestor de recursos. <br /><br />Podeu inhabilitar aquesta opció si no voleu que l'aplicació de client accedeixi directament al gestor de recursos o si teniu un tallafoc o un servidor intermediari que impedeix que el client web accedeixi al gestor de recursos mitjançant els URL. Per exemple, un tallafoc pot evitar que els usuaris no visualitzin documents en el visualitzador de la miniaplicació quan la recuperació directa està habilitada.",
		admin_repcfg_cmItemTypesToDisplay: "Si no voleu que els usuaris vegin els tipus d'elements de recurs ni les tipus d'elements al servidor de l'IBM Content Manager, podríeu mostrar només els tipus de models de document. Els tipus d'elements es mostren quan els usuaris fan cerques, afegeixen documents i creen carpetes.",
		admin_repcfg_cm_language_codes_hover: "Especifiqueu els idiomes en què s'han de tornar les dades des del servidor del Content Manager. La llista d'idiomes disponibles es controla mitjançant la llista de definicions d'idiomes al servidor.<br /><br /><b>Recordeu:</b> les dades en el client web es mostren en l'idioma que l'usuari ha configurat al navegador web.",
		admin_repcfg_cm_pdf_conversion_hover: "Especifiqueu els tipus de documents que s'han de convertir en PDF quan un usuari envia un document amb diverses parts com una adjunció de correu electrònic. Tots els components es combinen en un únic document PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Especifiqueu si voleu que els usuaris puguin crear plantilles i espai d'equip en el dipòsit.<br /><br />Si habiliteu espais d'equip, l'IBM Content Navigator crearà el model de dades de l'espai d'equip al dipòsit. El model de dades inclou les plantilles de propietats, els objectes personalitzats, l'objecte de carpeta i diverses carpetes.",
		admin_repcfg_use_entry_template_p8_hover: "Especifiqueu si voleu que els usuaris puguin crear i gestionar plantilles d'entrada en aquest dipòsit des de l'IBM Content Navigator. Si no habiliteu aquesta característica, els usuaris podran cercar i utilitzar plantilles d'entrada que ja es són al dipòsit.<br /><br />Si habiliteu la gestió de plantilles d'entrada, l'IBM Content Navigator actualitzarà el model de plantilla d'entrada de dades al dipòsit. L'actualització inclou noves propietats. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Més informació</a>",
		admin_repcfg_use_entry_template_cm_hover: "Especifiqueu si voleu que els usuaris puguin crear i gestionar plantilles d'entrada en aquest dipòsit des de l'IBM Content Navigator.<br /><br />Si habiliteu la gestió de plantilles d'entrada, l'IBM Content Navigator crearà el model de plantilla d'entrada de dades al dipòsit. El model de dades inclou un nou objecte d'ACL, propietats noves i un nou tipus d'element. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Més informació</a>",
		admin_repcfg_sync_service_p8_hover: "Especifiqueu si voleu que els usuaris puguin sincronitzar els seus elements preferits a les seves estacions de treball i dispositius mòbils.<br><br><b>Important:</b> per utilitzar aquesta característica també heu de completar les tasques següents:<br><ul><li>Especifiqueu l'<b>URL públic de serveis de sincronització</b> a la secció <b>Serveis de sincronització</b> de l'eina d'administració.</li><li>Afegiu aquest dipòsit a un escriptori per al qual s'habiliten els serveis de sincronització.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Especifiqueu si l'opció de la versió principal està seleccionada per defecte quan els usuaris afegeixen documents al dipòsit.<br /><br />Els usuaris poden esborrar aquesta opció si volen afegir el document com a versió secundària.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Especifiqueu si l'opció de la versió principal està seleccionada per defecte quan els usuaris comproven documents en el dipòsit.<br /><br />Els usuaris poden esborrar aquesta opció si volen comprovar el document en a versió secundària.",
		admin_repcfg_p8_annotation_security_hover: "Especifiqueu quin tipus de seguretat s'ha d'aplicar a les anotacions per defecte.<br /><br />Els usuaris tenen l'opció de canviar la seguretat de les anotacions.",
		admin_repcfg_p8_connection_point_hover: "Si voleu utilitzar els fluxos de treball de l'IBM FileNet P8, seleccioneu un punt de connexió del Process Engine. El punt de connexió que seleccionarà determina quins fluxos de treball estan disponibles pels usuaris que tenen accés al dipòsit.",
		admin_repcfg_p8_include_workflow_definition_hover: "Si visualitzeu la classe de document de definició de flux de treball de l'IBM FileNet P8 en el client web, els usuaris podran cercar i afegir les definicions de flux de treball al dipòsit.",
		admin_repcfg_p8_include_form_template_hover: "Si visualitzeu la classe de document de plantilla de formulari de l'IBM FileNet P8 en el client web, els usuaris podran cercar i afegir les plantilles de formulari al dipòsit.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Especifiqueu el nom de camí d'accés complet del fitxer de configuració AFP2PDF del dipòsit al servidor d'aplicacions web. AFP2PDF Transform és necessari per veure i imprimir dades d'AFP.<br /><br /><b>Recordeu:</b> l'AFP2PDF Transform ha d'estar instal·lat per poder utilitzar aquest paràmetre.",
		admin_repcfg_od_transform_xml_file_hover: " Si voleu utilitzar una transformació personalitzada per convertir contingut del Content Manager OnDemand, especifiqueu el nom del camí d'accés complet del fitxer XML que s'utilitza per definir la transformació. El fitxer XML ha de ser al servidor d'aplicacions web.",
		admin_repcfg_od_ssl_hover: "Especifiqueu si voleu utilitzar l'SSL per xifrar la comunicació entre el servidor d'aplicacions de l'IBM Content Navigator i el servidor de biblioteques de Content Manager OnDemand i els servidors d'objectes.<br /><br /><b>Important:</b> quan habiliteu l'SSL for Content Manager OnDemand, no inclou la comunicació entre el servidor d'aplicacions de l'IBM Content Navigator, el servidor web o les estacions de treball dels usuaris.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Especifiqueu el nom de camí d'accés complet del fitxer de base de dades del conjunt de claus en el dipòsit al servidor d'aplicacions web. Per exemple, C:\\Fitxers de programa\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />El fitxer de base de dades del conjunt de claus conté els vostres certificats arrel de confiança. Heu d'utilitzar la protecció del sistema de fitxers de màxima seguretat per evitar l'accés no autoritzat al fitxer.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Especifiqueu el nom de camí d'accés complet del fitxer de reserva del conjunt de claus en el dipòsit al servidor d'aplicacions web. Per exemple, C:\\Fitxers de programa\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />.El fitxer de reserva del conjunt de claus conté la contrasenya del fitxer. Heu d'utilitzar la protecció del sistema de fitxers de màxima seguretat per evitar l'accés no autoritzat al fitxer.",
		admin_repcfg_od_sso_password_hover: "Especifiqueu la contrasenya que s'ha d'utilitzar en l'inici de sessió únic amb el servidor OnDemand.",
		admin_repcfg_od_custom_properties_hover: "L'API Java ODWEK admet propietats personalitzades. Si voleu utilitzar les propietats personalitzades en connectar amb el dipòsit a través del client web, especifiqueu els noms i els valors de les propietats personalitzades.<br /><br />Si voleu obtenir més informació sobre les propietats personalitzades, consulteu els Javadocs de l'API Java ODWEK, que són al subdirectori /api del directori d'instal·lació ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Escriviu el nom de la propietat.",
		admin_repcfg_od_custom_properties_value_hover: "Escriviu el valor de la propietat.",
		admin_repcfg_od_use_sso_hover: "Especifiqueu si voleu permetre que els usuaris tinguin l'inici de sessió individual.<br /><br /><b>Important:</b> l'inici de sessió individual ha d'estar habilitat al servidor Content Manager OnDemand en el paràmetre de configuració perquè funcioni.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Utilitzeu codificació GZIP per l'origen CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nom del fitxer que s'utilitza quan es baixen documents:",
		admin_repcfg_cm_use_part_file_name_help: "Especifica com es determinen els noms de fitxer dels documents quan els usuaris baixen documents.",
		admin_repcfg_cm_use_part_file_name_enable: "Utilitza el nom de fitxer",
		admin_repcfg_cm_use_part_file_name_disable: "Utilitza el nom de l'element del dipòsit",
		admin_repcfg_add_doc_name: "Nom per defecte d'un document afegit:",
		admin_repcfg_add_doc_name_hover: "Els usuaris poden canviar el nom abans d'afegir el document.",
		admin_repcfg_add_doc_name_empty: "Cap (en blanc)",
		admin_repcfg_add_doc_name_file_name: "Nom de fitxer del document seleccionat",

		admin_repcfg_compound_documents: "Característiques del document compost:",
		admin_repcfg_compound_documents_hover: "Habiliteu les característiques del document compost P8, com ara la navegació.",
		admin_repcfg_cm_action_list_config_enabled: "Llista d'accions d'elements de treball:",
		admin_repcfg_cm_action_list_config_hover: "Quan configureu l'encaminament de documents al client d'administració del sistema del Content Manager, podeu especificar una llista de les accions que un usuari pot dur a terme amb un element de treball.<br /><br />Habiliteu aquesta opció si voleu utilitzar la llista d'accions des del servidor del Content Manager. Aquests paràmetres s'utilitzen al menú contextual i a la finestra Edita les propietats corresponent a l'element de treball.<br /><br /><b>Important:</b> els paràmetres de la llista d'accions alteren temporalment els menús personalitzats que configureu a l'eina d'administració del Content Navigator. Si no hi ha cap paràmetre a la llista d'accions, l'usuari no podrà executar cap acció amb els elements de treball.",

		admin_repcfg_box_share: "Compartició del Box",
		admin_repcfg_box_share_p8_hover: "Permet als usuaris compartir un document des d'aquest dipòsit. Compartir un document inclou copiar el fitxer en el Box, crear un enllaç i enviar l'enllaç per correu electrònic.<br /><br />Si habiliteu la compartició del Box, l'IBM Content Navigator crea el model de dades de compartició del Box en el dipòsit. Per instal·lar el complement de compartició del Box de l'IBM Content Navigator, heu d'estar connectats al dipòsit com a administrador del servidor de biblioteques",

		admin_menu_type_icon: "Icona de tipus de menú",
		admin_menu_toolbar_hover: "Barra d'eines",
		admin_menu_toolbar_custom_hover: "Barra d'eines personalitzada",
		admin_menu_contextMenu_hover: "Menú contextual",
		admin_menu_contextMenu_custom_hover: "Menú contextual personalitzat",

		admin_menu_contextMenu_custom_empty: "No hi ha cap menú contextual personalitzat definit als connectors configurats.",
		admin_menu_toolbar_custom_empty: "No hi ha cap barra d'eines personalitzada definida als connectors configurats.",

		admin_file_type_category_filters: "Filtres de tipus de fitxer:",
		admin_file_type_category_filters_hover_help: "Especifiqueu la llista de tipus de fitxer que els usuaris poden utilitzar en les situacions següents:<ul><li>Per delimitar la llista de resultats quan cerquin o naveguin a l'IBM Content Navigator for Microsoft Office<li>Per delimitar la llista de resultats quan cerquin en un dipòsit de l'IBM FileNet P8 al client web<li>Per restringir els tipus de fitxers que els usuaris poden afegir al dipòsit quan s'utilitza una plantilla d'entrada</ul>",
		admin_file_type_only_use_in_et_folder_association: "Mostra només les associacions de carpeta de la plantilla d'entrada",
		admin_office_config_properties_label: "Propietats de l'Office",
		admin_office_config_type_label: "Tipus de dades",
		admin_office_config_mapped_property_label: "Propietat del dipòsit",
		admin_office_config_properties_hover_help: "Afegiu el nom de cada propietat de Microsoft Office que voleu mapar amb una propietat de dipòsit. El tipus de dades de totes les propietats ha de coincidir",
		admin_office_config_mapped_property_hover_help: "Si voleu mapar les propietats d'Office en més d'una propietat del dipòsit, heu de crear un nou mapatge de propietats",
		admin_new_property_mapping_title: "Mapatge de propietats nou",
		admin_property_mapping_title: "Edita el mapatge de propietats",
		admin_property_mapping_instruction: "Especifiqueu quines propietats del Microsoft Office voleu mapar en una propietat al dipòsit. El tipus de dades de les propietats de l'Office ha de coincidir amb el tipus de dades de la propietat al dipòsit. <br /><br />Si un document de l'Office té més d'una propietat del mapatge, l'IBM Content Navigator utilitza la primera propietat a la llista per omplir la propietat al dipòsit.",
		admin_ms_general_settings: "Configuració general:",
		admin_ms_delete_local_settings: "Suprimeix fitxers locals quan els usuaris:",
		admin_ms_outlook_options: "Integració amb l'Outlook:",
		admin_ms_enable_props_mapping: "Mapa les propietats de l'Office a les propietats del dipòsit quan els usuaris:",
		admin_ms_open_doc_when_checkout: "Extreuen un document de forma automàtica quan s'obre",
		admin_ms_open_doc_when_checkout_hover_help: "Si seleccioneu l'opció evitarà que l'usuari sobreescrigui el fitxer al dipòsit amb una versió anterior del fitxer.",
		admin_ms_prompt_close_office: "Sol·licita als usuaris que incorporin documents quan tanquin les aplicacions de l'Office",
		admin_ms_prompt_close_office_hover_help: "La selecció d'aquesta opció evitarà que els usuaris oblidin la incorporació de la seva feina.",
		admin_ms_add_with_entry_template_only: "Mostra només l'acció Afegeix amb plantilla",
		admin_ms_delete_local_on_add: "Suprimeix fitxers locals quan els usuaris afegeixin documents",
		admin_ms_delete_local_on_checkin: "Suprimeix fitxers locals quan els usuaris incorporin documents o cancel·lin l'extracció",
		admin_ms_delete_local_on_add_hover_help: "Quan un usuari afegeix un document a l'IBM Content Navigator for Microsoft Office, el document s'afegeix al dipòsit i la còpia local del document segueix oberta per tal que els usuaris puguin extreure immediatament el document per fer canvis.<br /><br />Seleccioneu aquesta opció per tancar i suprimir automàticament la còpia local del document un cop s'hagi afegit el document al dipòsit.",
		admin_ms_delete_local_on_checkin_hover_help: "Quan un usuari incorpora un document a l'IBM Content Navigator for Microsoft Office, el document s'incorpora al dipòsit i la còpia local del document resta oberta. A més, un cop s'hagi utilitzat l'acció de cancel·lació d'extracció, la còpia local del document resta oberta. Amb la còpia local oberta, els usuaris poden tornar a extreure immediatament el document per fer canvis.<br /><br />Seleccioneu aquesta opció per tancar i suprimir automàticament la còpia local del document un cop s'hagi incorporat el document o s'hagi utilitzat l'acció de cancel·lació de l'extracció.",
		admin_ms_delete_local_on_save: "Desa un document",
		admin_ms_prompt_for_props_on_add: "Sol·licita als usuaris que proporcionin valors de propietat quan afegeixin correus electrònics al dipòsit",
		admin_ms_prompt_for_props_on_add_hover_help: "Si no seleccioneu aquesta opció, el client web utilitzarà el mapatge de propietats de l'Outlook que s'ha definit pel dipòsit.<br /><br />Si teniu plantilles d'entrada associades amb la carpeta on s'afegeixen els correus electrònics, és possible que l'usuari no us sol·liciti cap de les propietats.",
		admin_ms_delete_email_on_add: "Suprimeix el correu electrònic des del servidor de correu electrònic quan el correu electrònic s'afegeixi al dipòsit",
		admin_ms_send_email_as_link_only: "No permeteu que els usuaris enviïn els documents com a fitxers adjunts.",
		admin_ms_send_email_as_link_only_hover_help: "Si seleccioneu aquesta opció, els usuaris només podran enviar documents com a enllaços des de l'Outlook. Aquesta opció assegura que només els usuaris que tenen els privilegis adequats al dipòsit poden visualitzar documents.",
		admin_ms_enable_prop_mapping_for_add: "Mapa les propietats de l'Office a les propietats del dipòsit quan els usuaris afegeixin documents o els incorporin",
		admin_ms_checkout_document_after_add: "Extreu automàticament els documents un cop s'hagin afegit al dipòsit",
		admin_no_default_document_type_filtering: "Retorna tots els tipus de document per defecte quan els usuaris executin cerques",
		admin_no_default_document_type_filtering_hover_help: "A l'IBM Content Navigator for Microsoft Office, el comportament per defecte és que els usuaris només veuen el tipus de document de l'aplicació actual en executar cerques. Per exemple, el document del Word se selecciona per defecte quan cerquen des del Microsoft Word.<br/><br/>No obstant això, si seleccioneu aquesta opció es desseleccionaran les caselles de selecció dels tipus de document per tal que els usuaris vegin tots els documents que una cerca retorna. Els usuaris poden substituir aquest valor seleccionant un o més tipus de document abans d'executar cerques.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Especifiqueu si cal mapar les propietats del document definides als documents del Microsoft Office o a les propietats definides al dipòsit.<br /></br /><b>Important:</b> si habiliteu aquesta característica, heu de configurar l'Office a les propietats de cada dipòsit a l'entorn. Si no mapeu les propietats de l'Office en les propietats del dipòsit, aquesta característica no funcionarà.<br /><br />Aquest paràmetre no s'apliqui al Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Seleccioneu aquesta opció per reduir el número de passos que els usuaris han de seguir per treballar amb documents, un cop els documents s'hagin afegit al dipòsit.<br /></br /><b>Consell:</b> Per assegurar-se de que els usuaris tornin a incorporar els fitxers al dipòsit, seleccioneu <b>Sol·licita als usuaris que incorporin els documents quan tanquin aplicacions Office</b>.",
		admin_ms_show_details_recently_used: "Mostra detalls de l'element <b>Utilitzat recentment</b>",
		admin_ms_show_details_recently_used_hover_help: "Per defecte, quan es visualitza la llista d'elements Utilitzats recentment, els detalls dels elements s'oculten permetent que es mostrin més elements. Quan seleccioneu aquesta opció, a la llista d'elements Utilitzats recentment, es mostren els detalls del primer document al panell Detalls per defecte.",
		admin_ms_show_no_permissions_warning: "Mostra advertiments quan els usuaris editin propietats o incorporin un document però no tinguin permís per visualitzar la plantilla d'entrada del document.",
		admin_ms_show_no_permissions_warning_hover_help: "Si un document del dipòsit s'ha creat utilitzant una plantilla d'entrada però l'usuari no té permís per visualitzar la plantilla d'entrada del document, no es recuperarà la plantilla d'entrada.<br /><br/>Per tant, quan l'usuari editi les propietats del document, les propietats es visualitzen sense utilitzar la plantilla d'entrada. A més, quan l'usuari incorpori el document, s'incorporarà sense utilitzar la plantilla d'entrada.<br /><br />Per defecte, aquestes accions es produeixen sense informar a l'usuari que no s'utilitza la plantilla d'entrada. Només es registra un advertiment en el fitxer de registre.<br /><br />Seleccioneu aquesta opció si voleu visualitzar advertiments que informin immediatament a l'usuari que no s'està utilitzant la plantilla d'entrada.",
		admin_ms_hide_search_actions: "Redueix la secció de filtres de cerca",
		admin_ms_hide_search_actions_hover_help: "Per defecte, els usuaris poden aplicar un filtre d'acció per especificar una acció, un usuari o un grup d'usuaris i seleccionar una data o un interval de dates quan l'acció va tenir lloc. Per exemple, podeu cercar documents que només heu afegir aquest mes.<br /><br />Si no voleu permetre que els usuaris apliquin filtres d'accions, seleccioneu aquesta opció per ocultar els filtres d'accions i reduir el número de camps que es visualitzen quan es defineixen criteris de cerca.",
		admin_ms_hide_save_document: "Oculta l'opció <b>Desa</b> a la barra de cinta",
		admin_ms_hide_save_document_hover_help: "Utilitzant l'opció <b>Desa</b>, els usuaris poden desar els canvis de document al dipòsit sense necessitat d'incorporar el document.",
		admin_ms_indicate_managed_email_on_add: "Indiqueu si un missatge de correu electrònic ja s'ha afegit al dipòsit",
		admin_ms_indicate_managed_email_on_add_hover_help: "Si seleccioneu aquesta opció permetrà als usuaris saber que un missatge de correu electrònic ja és al dipòsit, cosa que podria reduir el nombre de vegades que un missatge de correu electrònic s'afegeix al dipòsit.  Quan se selecciona aquesta opció, una nova categoria de color anomenada IBM ECM es crea al Microsoft Outlook. Qualsevol correu electrònic que s'afegeix al dipòsit s'agrega automàticament a Gestionats a la categoria IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Afegeix opcions al grup Edita:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Especifiqueu quines opcions d'<b>Afegeix</b> estan disponibles al grup <b>Edita</b> de la barra de franja:<ul><li>Seleccioneu <b>Mostra totes les opcions d'agregació</b> per tal que es mostri el botó Afegeix i totes les accions d'Afegeix que estan disponibles al grup Edita.</li><li>Seleccioneu <b>Oculta totes les opcions d'agregació</b> per impedir que els usuaris afegeixin documents al dipòsit o si voleu que els usuaris només afegeixin documents des de dins d'un espai d'equip.</li><li>Seleccioneu <b>Oculta l'acció Afegeix amb plantilla</b> si voleu que s'apliquin les associacions de la carpeta de la plantilla d'entrada i impedir que els usuaris seleccionin una plantilla d'entrada diferent.</li><li>Seleccioneu <b>Mostra només l'acció Afegeix amb plantilla</b> si voleu que els usuaris afegeixin els documents mitjançant plantilles d'entrada.</li></ul>",
		admin_ms_show_edit_group_add_button: "Mostra totes les opcions d'agregació (per defecte)",
		admin_ms_hide_edit_group_add_button: "Oculta totes les opcions d'agregació",
		admin_ms_hide_add_with_entry_template: "Oculta l'acció Afegeix amb plantilla",
		admin_ms_managed_in_ecm: "Gestionat a l'IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Si els usuaris mostren categories al Microsoft Outlook, aquesta etiqueta es mostra per a correu electrònic afegit a un dipòsit IBM Content Manager o IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "El nom de la categoria Gestionat a l'IBM ECM no pot contenir cap coma (,) ni punt i coma (;).",
		admin_delete_open_docs_after_close: "Suprimir automàticament els documents oberts quan els usuaris tanquen els documents",
		admin_admin_delete_open_docs_after_close_hover_help: "Quan un usuari obre un document a l'IBM Content Navigator for Microsoft Office, el document es baixa al directori de documents de l'usuari o a la ubicació especificada pels paràmetres de rastreig de fitxers per a l'escriptori.<br><br>Seleccioneu aquesta opció per suprimir els fitxers que hi ha oberts però que no s'han extret quan els usuaris tanquin els documents. La selecció d'aquesta opció permet:<ul><li>Aplicar conformitat amb les polítiques de TI</li><li>Assegurar-vos que els usuaris treballen amb les versions més recents de documents</li><li>Reduir la quantitat d'espai de disc que s'utilitza per emmagatzemar els documents</li><ul>",
		admin_ms_custom_command_configuration: "Ordres personalitzades:",
		admin_ms_custom_command_configuration_hover_help: "Podeu afegir fins a quatre ordres a la barra d'eines de l'IBM Content Navigator for Microsoft Office en les aplicacions del Microsoft Office. Les ordres es poden utilitzar per obrir els URL. Per exemple, podeu afegir una ordre per obrir un servei que es pot utilitzar per cercar usuaris i grups.",
		admin_ms_custom_command_dialog_title: "Edita l'ordre personalitzada",
		admin_ms_custom_command_dialog_intro_text: "Definiu una ordre que es pot utilitzar per obrir un URL des de la barra d'eines de l'IBM Content Navigator for Microsoft Office en les aplicacions del Microsoft Office.",
		admin_ms_custom_command_id: "Ordre ${0}",
		admin_ms_custom_command_available_label: "Disponible",
		admin_ms_custom_command_available_hover_help: "Si l'URL que està definit per a una ordre s'ha de posar fora de línia per al manteniment, podeu desmarcar el quadre de selecció de l'ordre per tal que no es mostri a Microsoft Office.<br/><br/><b>Important:</b> Els usuaris han de finalitzar la sessió de l'escriptori perquè els canvis es reflecteixin a l'IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID de l'ordre",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etiqueta",
		admin_ms_custom_command_label_hover_help: "Especifiqueu l'etiqueta que es mostrarà per a l'ordre a Microsoft Office.",
		admin_ms_custom_command_description_label: "Descripció",
		admin_ms_custom_command_description_hover_help: "Especifiqueu la descripció que es mostrarà per a l'ordre a Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Especifiqueu l'URL complet que s'obrirà des del Microsoft Office. L'URL pot ser una pàgina web o un servei web.",
		admin_ms_custom_command_icon_label: "Icona",
		admin_ms_custom_command_icon_hover_help: "Especifiqueu el nom del fitxer o la icona per visualitzar, per exemple, CommandIcon.png.<br/><br/><b>Important:</b> Heu d'afegir el fitxer de la icona al subdirectori Connectors del directori d'instal·lació de l'IBM Content Navigator for Microsoft Office de cada màquina client.<br/><br/>Si el fitxer de la icona no es troba al directori Connectors, o si no especifiqueu una icona, es mostrarà la icona per defecte, customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Etiqueta de grup:",
		admin_ms_custom_command_group_name_hover_help: "Podeu especificar una etiqueta de grup que es visualitzi sota les ordres personalitzades a la barra de franja.<br/><br/>Si no n'especifiqueu cap, l'etiqueta de grup és <b>Ordres personalitzades</b>.",
		admin_ms_ribbon_tab_label: "Etiqueta de pestanya d'IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Escriviu el nom que voleu visualitzar per a la pestanya de l'IBM Content Navigator for Microsoft Office a la barra de franja del Microsoft Office. Si no n'especifiqueu cap, el nom de la pestanya és \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Tanca el panell de tasques quan l'usuari obri documents",
		admin_ms_close_task_pane_on_open_hover_help: "Seleccioneu aquesta opció si voleu maximitzar l'espai on els usuaris poden veure documents al Microsoft Office.<br/><br/>Usuaris del Microsoft Office 2010: Per assegurar-vos que el panell de tasques es tanca per a tots els documents, habiliteu el mode d'interfície de diversos documents (MDI) fent clic a <b>Opcions</b> &gt; <b>Avançat</b> i desmarqueu l'opció  <b>Mostra totes les finestres a la barra de tasques</b>.",
		admin_ms_open_document_options: "Obre les opcions de document:",
		admin_ms_delete_local_file_options: "Suprimeix les opcions de fitxer local:",
		admin_ms_add_and_checkin_options: "Opcions d'addició i d'incorporació:",
		admin_ms_search_options: "Opcions de cerca:",
		admin_ms_display_options: "Opcions de visualització:",
		admin_ms_bidirection_enable_label: "Habilita el suport per a text bidireccional",
		admin_ms_bidirection_enable_hover_help: "Seleccioneu aquesta opció si voleu permetre que els usuaris escriguin o visualitzin text a l'IBM Content Navigator for Microsoft Office en una direcció que no sigui d'esquerra a dreta.",
		admin_ms_text_direction_label: "Direcció del text base per al contingut:",
		admin_ms_text_direction_hover_help: "Especifiqueu la direcció en la que s'escriurà el text als camps d'entrada de l'IBM Content Navigator for Microsoft Office. Aquest valor controla com es visualitzen els elements, com ara els noms de carpetes o els valors de propietats.",
		admin_ms_control_threshold_label: "Número mínim d'elements que es permet en la cerca anticipada:",
		admin_ms_control_threshold_hover_help: "Per defecte, la cerca anticipada s'habilita quan el número d'elements és més gran o igual que 50, per cercar o establir propietats que tenen valors predefinits en una llista desplegable. Podeu canviar el valor mínim.",

		admin_ms_default_email_class: "Classe que cal utilitzar per afegir el correu electrònic",
		admin_ms_default_email_class_hover_help: "Qualsevol correu electrònic que s'afegeix al dipòsit des del Microsoft Outlook s'afegirà a la classe que heu especificat. Els usuaris no poden canviar la classe.",
		admin_ms_default_folder_class: "Classe que cal utilitzar durant la creació de carpetes",
		admin_ms_default_folder_class_hover_help: "Qualsevol carpeta que es crea al dipòsit des d'una aplicació del Microsoft Office s'afegirà a la classe que hàgiu especificat.  Els usuaris no poden canviar la classe.",
		admin_ms_default_folder_warn_title: "No es pot utilitzar la classe ${0} com la que s'ha d'utilitzar per crear carpetes.",
		admin_ms_default_folder_warn_name_prop_invalid: "La propietat de nom de la classe no és una sèrie i el nom de la carpeta ho ha de ser.<br />Seleccioneu una altra classe que s'ha d'utilitzar per crear carpetes o per treballar amb l'administrador de l'IBM Content Manager per canviar la propietat de nom de classe en una sèrie.",
		admin_ms_default_folder_warn_req_props: "La classe inclou propietats necessàries que no tenen valors. No obstant això, els usuaris no poden especificar valors per les propietats necessàries quan creïn carpetes des de l'IBM Content Navigator for Microsoft Office.<br />Seleccioneu una altra classe que s'ha d'utilitzar per crear carpetes o per treballar amb l'administrador de l'IBM Content Manager per fer les propietats obligatòries siguin opcionals o per emplenar prèviament les propietats necessàries amb un valor.",
		admin_ms_delimiter_for_office_properties: "Delimitador per propietats de cadena de diversos valors",
		admin_ms_delimiter_for_office_properties_hover_help: "Especifiqueu el caràcter que s'utilitzarà com a delimitador de les propietats de cadena que es mapin amb propietats de cadena de diversos valors. Per defecte, podeu assignar un conjunt de valors a una propietat de cadena de diversos valors mitjançant un punt i coma (;) com a delimitador per separar els valors. Tanmateix, si un dels valors de la cadena inclou un punt i coma, no podeu afegir aquest valor de cadena a no ser que es canviï el delimitador per un caràcter diferent. Per exemple, podeu canviar el delimitador per una coma (,)",
		admin_ms_outlookPropertyRemembrance : "Recorda els paràmetres en afegir missatges i fitxers adjunts",
		admin_ms_outlookPropertyRemembrance_hover_help : "Els valors de propietat, ubicació, selecció de classe i seguretat assignats als missatges i fitxers adjunts es recordaran i s'utilitzaran com a paràmetres per defecte quan s'afegeixin elements més endavant.",

		admin_file_type_name_hover_help: "Ajuda contextual del nom",
		admin_file_type_description_hover_help: "Ajuda contextual de la descripció",
		admin_file_type_dialog_title: "Edita el filtre de tipus de fitxer",
		admin_new_file_type_dialog_title: "Nou filtre de tipus de fitxer",
		admin_mobile_feature_dialog_title: "Característica",
		admin_mobile_feature_dialog_new_title: "Nova característica",
		admin_file_type_instructions: "Creeu un filtre que els usuaris poden utilitzar per limitar la llista de resultats de cerca. Podeu mapar diversos tipus MIME al filtre.",
		admin_file_type_filter_place_holder: "Tipus MIME de filtre",
		admin_new_button_label: "Nou",
		admin_edit_button_label: "Edita",
		admin_delete_button_label: "Suprimeix",
		admin_copy_button_label: "Copia",
		admin_verify_button_label: "Verifica",
		admin_availabe_filters_label: "Filtres disponibles",
		admin_selected_filters_label: "Filtres seleccionats",

		admin_mobile_access: "Accés a l'aplicació mòbil:",
		admin_mobile_access_hover_help: "Si voleu utilitzar l'IBM Content Navigator des d'un mòbil, es recomana que habiliteu els usuaris perquè puguin accedir a l'escriptori des de l'aplicació mòbil.<br /><br />Si inhabiliteu l'accés a l'escriptori des de l'aplicació mòbil, els usuaris encara podran accedir al client web des de navegadors mòbils. No obstant això, el client web no està dissenyat per poder-hi accedir des de dispositius mòbils.",

		admin_mobile_access_allow_label: "Permet que els usuaris:",
		admin_mobile_allow_add_photos: "Afegeixin fotografies des de la càmera i des de la biblioteca de fotografies",
		admin_mobile_allow_add_docs: "Afegeixin documents i creïn carpetes al dipòsit",
		admin_mobile_allow_open_docs: "Obrin documents a altres aplicacions",
		admin_mobile_allow_add_docs_hover_help: "Els usuaris poden crear carpetes o afegir documents des d'altres aplicacions mòbils, com ara un document que està adjunt a un correu electrònic.",
		admin_mobile_allow_open_docs_hover_help: "Se sol·licita als usuaris que triïn l'aplicació que volen utilitzar per veure el document seleccionat. Si només està disponible una aplicació, s'utilitzarà l'aplicació.",
		admin_mobile_features: "Característiques:",
		admin_mobile_features_hover_help: "Especifiqueu quines característiques de l'escriptori es mostraran a l'aplicació mòbil de l'IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nova característica",
		admin_mobile_move_up_button_label: "Puja",
		admin_mobile_move_down_button_label: "Baixa",
		admin_desktop_mobile_instructions: "Les instruccions del dispositiu mòbil van aquí",
		admin_desktop_max_number_of_docs_to_add: "Nombre màxim de documents per afegir:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Especifiqueu el nombre màxim de documents que els usuaris poden afegir a la vegada. El valor màxim per defecte és 50. No obstant això, es pot establir el màxim fins a 300.",
		admin_desktop_max_number_of_docs_to_modify: "Nombre màxim d'elements per modificar:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Especifiqueu el nombre màxim d'elements que els usuaris poden afegir a la vegada. El valor màxim per defecte és 50. No obstant això, es pot establir el màxim fins a 300.",
		admin_desktop_max_conversion_size: "Volum màxim de dades per a conversions PDF (en MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Restricció:</b> aquest paràmetre no s'admet a l'IBM Content Manager OnDemand.<br/><br/>Especifiqueu el volum màxim de dades que es poden convertir a PDF. Aquest límit s'aplica quan els usuaris baixen elements com a fitxers PDF o envien elements a través del correu electrònic com a fitxers PDF.<br /><br />Si no es pot determinar la mida de cada document, els documents es converteixen igualment a PDF.<br/><br/>El límit per defecte és 200 MB. Si definiu el paràmetre amb un valor superior a 200 MB, pot ser que això afecti el rendiment del sistema.",
		admin_desktop_timeProperties: "Marca horària:",
		admin_desktop_time_properties_hover_help: "<b>Només usuaris de l'IBM FileNet P8:</b> aquest paràmetre s'aplica a propietats personalitzades i no s'aplica a les propietats del sistema. Per exemple, la propietat Modificat per seguirà mostrant la part de l'hora de la marca horària si seleccioneu <b>Mostra només la part de data de la marca horària</b>.<br/><br/>Aquest paràmetre no canvia la marca horària al dipòsit.",
		admin_desktop_disable_time_stamp: "Mostra tota la marca horària",
		admin_desktop_enable_time_stamp: "Mostra només la part de data de la marca horària",
		admin_desktop_timezone: "Fus horari:",
		admin_desktop_timezone_localuser: "Mostra el fus horari local de l'usuari",
		admin_desktop_timezone_alluser: "Mostra el mateix fus horari per a tots els usuaris",
		admin_desktop_timezone_hover_help: "Podeu especificar si els usuaris veuen una marca horària basada en el seu fus horari o si tots els usuaris veuen la mateixa marca horària.<br/><br/>Aquest paràmetre no canvia la marca horària al dipòsit. Això no obstant, el paràmetre que seleccioneu determina el fus horari que s'utilitza per crear la marca horària al dipòsit quan els usuaris afegeixen o modifiquen elements.",
		admin_desktop_mobile_feature_display_label: "Mostra",
		admin_desktop_mobile_feature_icon_file_label: "Fitxer d'icona",
		admin_mobile_feature_dialog_icon_file_label: "Fitxer d'icona:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nom",
		admin_desktop_mobile_select_feature_label: "Seleccioneu característica",
		admin_desktop_mobile_feature_icon_label: "Icona de característica",
		admin_desktop_share_admin_none: "No s'ha configurat cap administrador.",
		admin_desktop_share_admin_edit_label: "Defineix administrador...",
		admin_browse_icon: "Icona Navega",
		admin_search_icon: "Icona Cerca",
		admin_favorites_icon: "Icona Preferits",
		admin_casesearch_icon: "Icona de cas",
		admin_datacap_icon: "Icona Datacap",
		admin_system_defined: "Definida pel sistema",
		admin_icon_file_placeholder_text: "Ubicació del fitxer (i.e. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Arrel",
		admin_folder_default: "Per defecte",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Barres d'eines",
		admin_menu_context_menus: "Menús contextuals",
		admin_menu_office_toolbars: "Ordres de la barra de cinta del Microsoft Office",
		admin_menu_office_menus: "Menús contextuals del Microsoft Office",

		admin_file_name_label: "Nom del fitxer:",
		admin_exportconfiguration_security_label: "Inclou usuaris i grups que tenen autorització per utilitzar aquest escriptori",
		admin_exportconfiguration_instruction: "Podeu exportar els escriptoris, incloent les configuracions del dipòsit i del connector que estan associades a escriptoris seleccionats, a un fitxer que podeu importar a una altra instància de l'IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exporta escriptori",
		admin_exportconfiguration_button_label: "Exporta",
		admin_dialog_select_all: "Selecciona-ho tot",
		admin_dialog_deselect_all: "Esborra-ho tot",

		admin_importconfiguration_instruction: "Els elements al fitxer de configuració seleccionat s'importaran al sistema. No obstant això, si ja existeix un element amb el mateix ID al sistema, heu de decidir si mantenir-lo o sobreescriure'l.",
		admin_importconfiguration_dialog_label: "Importa escriptori",
		admin_importconfiguration_reason_dialog_label: "Importa motius de redacció",
		admin_importconfiguration_button_label: "Importa",
		admin_to_be_imported: "Elements de configuració que s'ha d'importar",
		admin_on_target_system: "Element ja existent al sistema de destinació",
		admin_import_short_warning_message: "Els elements següents ja existeixen al sistema. Seleccioneu els elements que voleu substituir en el sistema:",
		admin_import_warning_message: "Elements de configuració següents tenen els mateixos ID que els elements existents al sistema de destinació. Seleccioneu només els elements que voleu importar i sobreescriure al sistema de destinació.<br /><br />Si no voleu sobreescriure un element de configuració, creeu una còpia de l'element a la instància des de la qual heu exportat l'escriptori, doneu-li un ID diferent i exporteu-lo amb l'escriptori. Exporteu l'escriptori una altra vegada, i, a continuació, importeu-lo en la instància.",
		admin_choose_file_to_import_label: "Selecciona el fitxer que s'ha d'importar:",
		admin_download_imported_log: "Baixa informe",
		admin_desktop_import_summary: "Resum d'importació de l'escriptori",
		admin_reason_import_summary: "Resum d'importació de motiu de redacció",
		admin_rba_import_summary: "Resum d'importació de rols d'administració",
		admin_import_open_tabs_checking: "Abans d'importar els escriptoris, heu de tancar totes de les pestanyes que no siguin la pestanya <bold>Escriptori</bold> a l'eina d'administració.",
		admin_import_no_conflict: "Els elements següents s'importaran:",
		admin_desktop_invalid: "Escriptori no vàlid",
		admin_desktop_warning: "L'escriptori s'ha desat amb advertiments.",
		admin_repos_warning: "El dipòsit s'ha desat amb advertiments.",
		admin_config_type_icon: "Icona de tipus d'element de configuració",

		admin_approval_workflow: "Flux de treball d'aprovació",
		admin_approval_workflow_hover: "Permet als usuaris iniciar un flux de treball d'aprovació predefinit. Podeu inhabilitar el flux de treball d'aprovació per permetre que els usuaris iniciïn un flux de treball d'aprovació personalitzat definit mitjançant una subscripció. Per defecte, el flux de treball d'aprovació s'habilita.<br><br><b>Important:</b> Si habiliteu el flux de treball d'aprovació, també heu d'assegurar-vos que una o les dues definicions de flux de treball predefinit (ICNParallelDocumentApproval.pep i ICNSequentialDocumentApproval.pep) s'afegeixin al dipòsit i es transfereixin al Content Process Engine.",

		admin_cannot_add_desktop_members_error: "No podeu pas especificar ni els usuaris ni grups que tenen accés a aquest escriptori.",
		admin_cannot_add_desktop_members_error_explanation: "No teniu el permís apropiat per recuperar la informació d'usuaris i de grups.",
		admin_cannot_add_desktop_members_error_userResponse: "Inicieu sessió amb un nom d'usuari diferent o demaneu a l'administrador del sistema IBM Content Manager que us atorgui els privilegis UserACLOwner, que són necessaris per recuperar la informació d'usuaris i de grups.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "No podeu seleccionar ni els usuaris ni els grups.",
		admin_cannot_select_users_groups_error_explanation: "No teniu el permís apropiat per recuperar la informació d'usuaris i de grups.",
		admin_cannot_select_users_groups_error_userResponse: "Inicieu sessió amb un nom d'usuari diferent o demaneu a l'administrador del sistema IBM Content Manager que us atorgui els privilegis UserACLOwner, que són necessaris per recuperar la informació d'usuaris i de grups.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "No s'ha trobat el client OAuth2.",
		oauth_client_not_found_error_explanation: "No s'ha trobat l'ID de client OAuth2 ${0}.",
		oauth_client_not_found_error_userResponse: "Poseu-vos en contacte amb l'administrador del sistema i informeu-lo que no s'ha trobat l'ID del client OAuth2.",
		oauth_client_not_found_error_adminResponse: "Reviseu la configuració del dipòsit i verifiqueu que conté l'ID de client OAuth2 correcte.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "No s'ha pogut iniciar sessió en el dipòsit.",
		oauth_login_failed_error_explanation: "Un intent d'iniciar sessió en el dipòsit ${0} ha fallat.",
		oauth_login_failed_error_userResponse: "Verifiqueu que l'ID d'usuari i contrasenya són correctes i torneu a provar l'inici de sessió.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "S'ha produït un error quan es provava d'iniciar sessió a ${0}.",
		oauth_error_return_error_explanation: "L'intent autorització ${0} ha fallat.",
		oauth_error_return_error_userResponse: "Poseu-vos en contacte amb l'administrador del sistema amb la informació següent: l'intent d'autorització ${0} ha fallat i ha retornat el següent missatge d'error: <br>${1}<br><b>error:</b> ${2}.<br><b>descripció:</b> ${3}.",
		oauth_error_return_error_adminResponse: "La informació addicional sobre l'error apareix als fitxers de registre del servidor de l'aplicació web.  Per obtenir més informació sobre els fitxers de registre, consulteu &quot;Fitxers de registre de l'IBM Content Navigator&quot; a l'IBM Knowledge Center. Mitjançant la informació sobre l'intent d'autorització ${0}, proveu de corregir el problema i verifiqueu que s'ha habilitat l'OAuth2.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Aplicació de destí de l'OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "error",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Missatge d'error no reconegut.",

		delete_share_permission_error: "La compartició no s'ha suprimit.",
		delete_share_permission_error_explanation: "No teniu els permisos adequats per suprimir la compartició.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "No podeu compartir aquest element.",
		class_not_support_share_error_explanation: "La clase ${0} no s'ha configurat per a admetre el compartiment.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "No podeu compartir aquest element.",
		rbr_not_support_share_error_explanation: "S'ha afegit contingut sensible a l'element.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "El dispositiu des del qual l'usuari prova d'iniciar una sessió  no està autoritzat per accedir al compte d'usuari.",
		box_oauth_error_invalid_request: "En la sol·licitud hi falta un paràmetre necessari, inclou un valor de paràmetre no vàlid, inclou un paràmetre més d'un cop o no té un format vàlid.",
		box_oauth_error_unsupported_response_type: "El servidor d'autorització no admet l'obtenció d'un codi d'autorització utilitzant aquest mètode.  Comproveu el valor del paràmetre de codi de la sol·licitud.",
		box_oauth_error_access_denied: "El propietari de recurs o el servidor d'autoritzacions ha denegat la sol·licitud.",
		box_oauth_error_temporarily_unavailable: "El dispositiu té una velocitat limitada, heu de disminuir la velocitat de les sol·licituds d'autorització o esperar una mica.",
		box_oauth_error_unknown: "Missatge d'error del Box no reconegut.",

		admin_default_search_type: "Tipus de cerca per defecte",
		admin_default_search_type_hover: "Especifiqueu quina opció se selecciona per defecte al camp <b>Cerca</b> del menú <b>Opcions de cerca</b>.",
		admin_default_search_type_documents: "Documents",
		admin_default_search_type_folders: "Carpetes",
		admin_default_search_type_folders_and_documents: "Documents i carpetes",

		admin_restricted_search_type: "Permet la cerca a",
		admin_restricted_search_type_hover: "Per defecte, els usuaris poden cercar tant en documents com en carpetes. Si voleu ocultar l'opció Cerca a i restringir les cerques només als documents, seleccioneu Documents i deseleccioneu Carpetes.</br>,</br> Si permeteu cerques en documents i carpetes, seleccioneu l'opció per defecte perquè es mostri quan s'obri el panell de cerca.",
		admin_restricted_search_type_documents: "Documents",
		admin_restricted_search_type_folders: "Carpetes",
		admin_restricted_search_type_folders_and_documents: "Documents i carpetes",

		admin_default_search_version: "Versió de cerca per defecte",
		admin_default_search_version_hover: "Especifiqueu quina opció se selecciona per defecte al camp <b>Versió</b> del menú <b>Opcions de cerca</b>.",

		admin_all_classes_search: "Cerca totes les classes.",
		admin_all_classes_search_hover: "Especifiqueu si el usuaris poden fer cerques en totes les classes, i si és així, què s'ha d'incloure en les cerques de documents.",
		admin_all_classes_search_removed_hover: "L'opció de cercar en totes les classes no està disponible perquè el paràmetre context-param allPseudoClassHidden en l'aplicació Navigator web.xml s'ha definit en true.",
		admin_all_classes_search_hide: "Elimineu l'opció de cercar en totes les classes",
		admin_all_classes_search_documents_only_documents: "Una cerca de documents inclou només documents, cerques desades i plantilles d'entrada",
		admin_all_classes_search_documents_non_folders: "Una cerca de documents inclou elements que no són carpetes",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Visualització d'arbre:",
		admin_feature_config_tree_view_hoverhelp: "Especifiqueu si els usuaris poden accedir a la llista de carpetes al dipòsit a través del panell Navega. Si oculteu el panell Navega, els usuaris hauran d'utilitzar la llista de contingut per navegar per les carpetes al dipòsit.",
		admin_feature_config_selected_repositories_label: "Dipòsits:",
		admin_feature_config_selected_repositories_hoverhelp: "Seleccioneu els dipòsits que els usuaris poden accedir en aquest dispositiu.",
		admin_feature_config_selected_repositories_select_state_hdr: "Seleccioneu dipòsit",
		admin_feature_config_selected_repositories_name_hdr: "Nom de dipòsit",
		admin_feature_config_selected_repositories_show_hdr: "Mostra",
		admin_feature_config_invalid_icon_title: "A la funció, li falten alguns paràmetres necessaris",
		admin_feature_config_view_select_hdr: "Seleccioneu visualització",
		admin_feature_config_view_hdr: "Visualització",
		admin_feature_config_view: "Visualització",
		admin_feature_config_views: "Visualitzacions:",
		admin_feature_config_views_hoverhelp: "Especifiqueu quines vistes poden aplicar els usuaris a la llista de contingut. Les vistes es mostren amb l'ordre en el qual estan llistades. La primera vista seleccionada és la vista per defecte per a aquesta característica.<br><br><b>Important:</b> Si habiliteu la vista Filmstrip, heu de configurar el visualitzador de conversió HTML per veure visualitzacions prèvies del document.",

		admin_custom_dialog_name: "Nom:",
		admin_custom_dialog_value: "Valor:",
		admin_custom_setting_name_hover: "Introduïu el nom del paràmetre de Daeja ViewONE que voleu afegir a la configuració. Consulteu la documentació de Daeja ViewONE per obtenir més informació sobre els paràmetres de configuració.",
		admin_custom_setting_value_hover: "Introduïu el valor que voleu utilitzar per al paràmetre de configuració del Daeja ViewONE. Consulteu la documentació del Daeja ViewONE per obtenir més informació sobre els valors vàlids per al valor de configuració.",

		entry_template_name_required_message: "El camp de nom a Paràmetres de plantilla d'entrada és obligatori.",
		entry_template_name_invalid_message: "El camp de nom a Paràmetres de plantilla d'entrada no pot contenir els següents caràcters: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Quan se seleccionen usuaris i grups específics a Comparteix amb el camp Paràmetres de plantilla d'entrada, a continuació, especifiqueu com a mínim un usuari o un grup.",
		entry_template_no_permission_to_save_to_teamspace_message: "No teniu permís per afegir plantilles d'entrada a l'espai d'equip (${0}) que s'ha seleccionat des de Desa a als paràmetres de plantilla d'entrada.",
		entry_template_save_in_destination_required_message: "Heu d'especificar una ubicació d'emmagatzematge per defecte a la secció <b>Defineix la ubicació d'emmagatzematge d'elements</b>.",
		entry_template_save_in_destination_must_select_folder: "Si oculteu el camp <b>Desa a</b> i demaneu que els usuaris afegeixin elements nous en una carpeta, heu de seleccionar la carpeta al camp <b>Ubicació d'emmagatzematge per defecte</b> de la secció <b>Defineix la ubicació d'emmagatzematge d'elements</b>.",
		entry_template_what_to_save_required_message: "Seleccioneu com a mínim una opció que voleu desar a Configura opcions.",
		entry_template_custom_workflow_empty_message: "Si seleccioneu <b>Flux de treball personalitzat...</b>, heu de cercar i seleccionar el flux de treball que voleu utilitzar.",

		entry_template_new: "Plantilla d'entrada nova",
		entry_template_name_hover: "El nom de la plantilla d'entrada no pot contenir els següents caràcters: * \\ / : ? \" < > |",
		entry_template_name_invalid: "El nom de visualització no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",
		entry_template_description_hover: "Proporcioneu una descripció que permeti als usuaris distingir entre aquesta plantilla d'entrada i la resta de plantilles d'entrada.",
		entry_tempalte_save_in_hover: "Especifiqueu on desar la plantilla d'entrada.<br><br><b>Restricció:</b> si deseu la plantilla d'entrada a un espai d'equip, podeu utilitzar-la només a dins de l'espai d'equip.",
		entry_template_inherit_hover: "Si seleccioneu aquesta opció, els paràmetres de seguretat per a la carpeta principal s'afegeixen a la llista d'usuaris i grups amb qui es comparteix la plantilla d'entrada.",
		entry_template_builder_aria_label: "Creador de la plantilla d'entrada",
		entry_template_builder_layout_aria_label: "Creador de propietats de la plantilla d'entrada",

		entry_template_settings_document: "Defineix la plantilla d'entrada",
		entry_template_settings_folder: "Defineix la ubicació d'emmagatzematge de l'element",
		entry_template_settings_folder_intro: "Especifiqueu on es desen els elements afegits utilitzant aquesta plantilla d'entrada.",
		entry_template_settings_properties: "Defineix les propietats de l'element",
		entry_template_settings_properties_intro: "Podeu especificar valors per defecte o predefinits per als elements afegits utilitzant aquesta plantilla d'entrada. A més, podeu canviar el disseny de les propietats per controlar quines es mostren i amb quin ordre.",
		entry_template_settings_workflow: "Configura un flux de treball per a l'element",
		entty_template_settings_workflow_intro: "Podeu especificar si un flux de treball s'inicia quan els elements s'afegeixen utilitzant la plantilla d'entrada.",
		entry_template_settings_security: "Defineix la seguretat de l'element",
		entry_template_settings_security_intro: "Podeu especificar seguretat per defecte o predefinida per als elements afegits utilitzant aquesta plantilla d'entrada. Els usuaris amb els permisos adequats poden canviar la seguretat de l'element després d'afegir-se.",
		entry_template_settings_options: "Defineix les opcions de l'element",
		entry_template_xt_warning: "Si es desen els canvis en aquesta plantilla d'entrada passarà d'una plantilla d'entrada d'IBM Workplace XT a una de l'IBM Content Navigator. IBM Workplace XT no dóna suport a les plantilles d'entrada de l'IBM Content Navigator.",

		entry_template_properties_edit_layout: "Edita el disseny...",
		entry_template_properties_read_only: "Només de lectura",
		entry_template_properties_hidden: "Ocult",

		entry_template_destination_show: "Mostra el camp <b>Desa a</b>",
		entry_template_destination_show_hover: "Si mostra el camp <b>Desa a</b>, els usuaris podran canviar el lloc on s'emmagatzemen els elements.",
		entry_template_destination_hide: "Oculta el camp <b>Desa a</b>",
		entry_template_destination_hide_hover: "Si oculteu el camp <b>Desa a</b>, els usuaris no podran canviar el lloc on s'emmagatzemen els elements.",
		entry_template_folder_save_in_default: "Ubicació <b>Desa a</b> per defecte:",
		entry_template_folder_save_in_default_hover: "Especifiqueu la ubicació per defecte on s'afegeixen els elements utilitzant aquesta plantilla d'entrada.<br><br>La ubicació per defecte que seleccioneu imposa restriccions al comportament del temps d'execució de la plantilla d'entrada:<ul><li>Els usuaris no poden seleccionar un dipòsit diferent.</li><li>La ubicació per defecte és un espai d'equip, els usuaris no poden seleccionar un espai d'equip diferent.</li></ul>No obstant això, si els usuaris associen aquesta plantilla d'entrada amb una carpeta, podran substituir la ubicació d'emmagatzematge configurada per a aquesta plantilla d'entrada.",
		entry_template_folder_restrict_choice: "Demana que els usuaris afegeixin elements a la ubicació per defecte o a una carpeta secundària de la ubicació per defecte",
		entry_template_folder_file_in_required: "Demana que els usuaris afegeixin elements nous en una carpeta",
		entry_template_folder_file_in_required_hover: "Si no seleccioneu aquesta opció, els usuaris poden afegir elements a la carpeta arrel del dipòsit.<br><br><b>Restricció:</b> és possible que la configuració de l'escriptori demani als usuaris que seleccionin una carpeta.",

		entry_template_document_type_show: "Mostra el camp <b>Què voleu desar?</b>",
		entry_template_document_type_show_hover: "Si mostreu el camp <b>Què voleu desar</b>, els elements que seleccioneu es mostraran  com a opcions al camp <b>Què voleu desar</b>.",
		entry_template_document_type_hide: "Oculta el camp <b>Què voleu desar?</b>",
		entry_template_document_type_hide_hover: "Si oculteu el camp <b>Què voleu desar</b>, el tipus de document que heu seleccionat sempre s'utilitzarà quan els usuaris afegeixin documents mitjançant la plantilla d'entrada.",
		entry_template_document_type: "Aquesta plantilla d'entrada es pot utilitzar per afegir els elements següents:",
		entry_template_document_type_hover: "Si mostreu el camp <b>Què voleu desar</b>, els elements que seleccioneu es mostraran  com a opcions al camp <b>Què voleu desar</b>.<br><br>Si oculteu el camp <b>Què voleu desar</b>, el tipus de document que heu seleccionat sempre s'utilitzarà quan els usuaris afegeixin documents mitjançant la plantilla d'entrada.",

		entry_template_misc: "Opcions addicionals:",
		entry_template_auto_classify_show: "Classifica automàticament el contingut del document",
		entry_template_auto_classify_show_hover: "Quan un document es classifica al FileNet Content Manager, s'examina el contingut del document per determinar la classe i els valors de propietats adequats per al document.<br><br>Parleu amb el vostre administrador del sistema per determinar si s'habilita la classificació de contingut al Content Platform Engine.<br><br>Si habiliteu aquesta opció, la classe i les propietats del document poden canviar quan un usuari afegeix el document al dipòsit.",
		entry_template_allow_duplicate_file_names: "Permet els documents amb noms de fitxer duplicats",
		entry_template_allow_duplicate_file_names_hover: "Per defecte, podeu afegir documents amb el mateix nom a una carpeta del FileNet Content Manager. Podeu esborrar aquesta opció si voleu que cada fitxer de la ubicació d'emmagatzematge seleccionada tingui un nom exclusiu.",
		entry_template_allow_compound_documents: "Permet que aquest document sigui el principal d'un document compost",
		entry_template_version_show: "Mostra les opcions de versió per afegir i incorporar",
		entry_template_version_hide: "Oculta les opcions de versió per afegir i incorporar",
		entry_template_version_to_add_as: "Versió per defecte per afegir com a:",
		entry_template_version_default: "Opció de versió per defecte:",
		entry_template_version_default_checked: "Versió principal",
		entry_template_version_default_unchecked: "Versió secundària",
		entry_template_version_display: "Versió del document:",
		entry_template_version_display_show: "Mostra",
		entry_template_version_display_hide: "Oculta",
		entry_template_version_default_add: "Versió per defecte per afegir com a:",

		entry_template_checkin_version_show: "Mostra les opcions de versió per incorporar",
		entry_template_checkin_version_hide: "Oculta les opcions de versió per incorporar",

		entry_template_checkin_version_message_no_versions: "La política de versions de la classe seleccionada impedeix que els usuaris incorporin una nova versió del document.",
		entry_template_checkin_version_message_always_version: "La política de versions de la classe seleccionada impedeix que els usuaris substitueixen la versió actual del document.",

		entry_template_applied: "Utilitza aquesta plantilla d'entrada quan els usuaris vulguin:",
		entry_template_applied_add: "Afegir documents (necessari)",
		entry_template_applied_add_folder: "Crear carpetes (necessari)",
		entry_template_applied_checkin: "Incorpora",
		entry_template_applied_properties_group: "Veure o editar propietats",
		entry_template_applied_properties: "A la finestra Propietats",
		entry_template_applied_viewer: "Al visualitzador de miniaplicacions",
		entry_template_applied_docinfo: "Al panell d'informació del document",
		entry_template_applied_no_class_support: "Aquesta plantilla d'entrada es pot utilitzar per afegir elements, però no per incorporar documents ni visualitzar i editar propietats. La classe seleccionada s'ha de modificar per admetre aquestes situacions. Si heu d'utilitzar la plantilla d'entrada en aquestes situacions, demaneu a l'administrador que utilitzi l'eina d'administració per modificar la classe de manera que pugui emmagatzemar els ID de les plantilles d'entrada.",
		entry_template_applied_no_child_component_support: "La classe seleccionada té components fill i es defineix un format de propietat. Els formats de propietat no admeten components fill. L'usuari no visualitzarà els components fill.",
		entry_template_applied_child_component: "La classe seleccionada té components fill. L'usuari els visualitzarà, però no podrà configurar components fill en aquesta plantilla d'entrada.",

		entry_template_properties_show: "Mostra la secció <b>Propietats</b>",
		entry_tempalte_properties_show_hover: "Si mostreu la secció <b>Propietats</b>, els usuaris poden modificar qualsevol valor de propietats que es mostri a la plantilla d'entrada i que no siguin propietats de només lectura.",
		entry_template_properties_hide: "Oculta la secció <b>Propietats</b>",
		entry_template_properties_hide_hover: "Si oculteu la secció <b>Propietats</b>, els usuaris no poden modificar cap valor de propietat. La plantilla d'entrada ha de definir tots els valors que voleu utilitzar quan s'afegeixin els documents utilitzant aquesta plantilla d'entrada.",

		entry_template_security_show: "Mostra la secció <b>Seguretat</b>",
		entry_template_security_show_hover: "Si mostreu la secció <b>Seguretat</b>, els usuaris amb els permisos adequats poden modificar la seguretat de l'element.",
		entry_template_security_hide: "Oculta la secció <b>Seguretat</b>",
		entry_template_security_hide_hover: "Si oculteu la secció <b>Seguretat</b>, els usuaris no poden modificar la seguretat dels elements. La plantilla d'entrada ha de definir tots els paràmetres de seguretat que voleu utilitzar quan s'afegeixen o editen elements.",
		entry_template_security_policy: "Política de seguretat:",
		entry_template_security_policy_hover: "En funció de la política de seguretat que seleccioneu, la política de seguretat podrà:<br><ul><li>Substituir els permisos que s'especifiquen a <b>Defineix la seguretat de l'element</b>.</li><li>Afegir als permisos que s'especifiquen a <b>Defineix la seguretat de l'element</b>.</li></ul>",
		entry_template_security_policy_none: "No hi ha cap política de seguretat seleccionada",
		entry_template_security_inherit: "Hereta els paràmetres de seguretat de la carpeta principal",
		entry_tempalte_save_in_hover: "Especifiqueu on desar la plantilla d'entrada.<br><br><b>Restricció:</b> si deseu la plantilla d'entrada a un espai d'equip, podeu utilitzar-la només a dins de l'espai d'equip.",
		entry_template_security_inherit_item_security_hover: "Si seleccioneu aquesta opció, els paràmetres de seguretat per a la carpeta principal s'afegeixen als paràmetres de seguretat definits per un dels següents elements:<ul><li>La classe que s'especifica a la secció <b>Defineix les propietats de l'element</b></li><li>La seguretat personalitzada que heu especificat a la secció <b>Defineix la seguretat de l'element</b></li></ul>",
		entry_template_security_change: "Sobreescriu la seguretat que ha definit la classe seleccionada",
		entry_template_security_change_hover: "Si seleccioneu aquesta opció, els paràmetres de seguretat definits per a la classe es mostraran per defecte. Podeu modificar els paràmetres de seguretat per a la plantilla d'entrada.<br><br>Si mostreu la secció <b>Seguretat</b>, els usuaris amb els permisos adequats poden modificar la seguretat de l'element.<br><br>Si seleccioneu aquesta opció i escolliu heretar els paràmetres de seguretat de la carpeta principal, qualsevol permís heretable s'afegirà a la seguretat que especifiqueu.",
		entry_template_security_default_item_security: "Sobreescriu la seguretat de l'element per defecte de l'usuari que afegeix l'element",
		entry_template_security_policy_message_override: "La política de seguretat seleccionada està configurada per substituir els permisos que estan especificats a Configura seguretat.",
		entry_template_security_policy_message_add: "La política de seguretat seleccionada està configurada per afegir els permisos que estan especificats a Configura seguretat.",
		entry_template_security_policy_preserve_true_hover: "Conserva el permís directe",
		entry_template_security_policy_preserve_false_hover: "No conservis el permís directe",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Rols específics",
		entry_template_security_class_role_search_title: "Cerca rols:",
		entry_template_secuirty_class_member_title: "Llista de membres de ${0}",
		entry_template_secuirty_class_folder_only: "Aquests permisos només s'apliquen a aquesta carpeta",
		entry_template_secuirty_class_folder_and_immediate_children: "Els permisos s'apliquen a aquesta carpeta i als fills immediats que s'han configurat per heretar la seguretat d'aquesta carpeta.",
		entry_template_secuirty_class_folder_and_all_children: "Els permisos s'apliquen a aquesta carpeta i a tots els descendents que s'han configurat per heretar la seguretat d'aquesta carpeta.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Els permisos s'apliquen als fills immediats que s'han configurat per heretar la seguretat d'aquesta carpeta.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Els permisos s'apliquen a tots els descendents que s'han configurat per heretar la seguretat d'aquesta carpeta.",

		entry_template_class_security_message_no_override: "La seguretat de la classe seleccionada impedeix que els usuaris sobreescriguin la seguretat.",
		entry_template_class_security_required_privileges: "<b>Important</b>: Si sobreescriviu la seguretat de la classe seleccionada, els usuaris que afegeixin elements mitjançant aquesta plantilla d'entrada hauran de tenir privilegis ItemSetACL i UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Flux de treball de patró seqüencial",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Flux de treball de patró en paral·lel",
		entry_template_workflow_type_existing: "Flux de treball personalitzat...",
		entry_template_workflow_launch_prompt: "Sol·licita a l'usuari que iniciï el flux de treball",
		entry_template_workflow_launch_auto: "Inicia automàticament el flux de treball",
		entry_template_workflow_modify_launch: "Permet als usuaris modificar el pas d'inici",
		entry_template_workflow_modify_launch_hover: "Seleccioneu aquesta opció si voleu permetre que els usuaris canviïn la forma en que s'inicia el flux de treball.",

		entry_template_optionsButton_title: "Modifica",
		entry_template_optionsButton_readonly_title: "Visualitza l'associació",
		entry_template_optionsDialog_title: "Configuració d'associació de carpetes",
		entry_template_removeButton_title: "Elimina",
		entry_template_addButton_title: "Afegeix",
		entry_template_selected_entry_templates: "Plantilles d'entrada seleccionades",
		entry_template_docs_added_to_template_destination: "Els documents s'afegeixen a la destinació especificada a la plantilla d'entrada.",
		entry_template_docs_added_to_other_object_store: "Aquesta plantilla d'entrada afegeix elements al magatzem d'objectes ${0}.",
		entry_template_inherited_entry_templates_label: "Vull: ",
		entry_template_inherited_entry_templates: "Heretar associacions de plantilla d'entrada des de la carpeta: ",
		entry_template_inherited_entry_templates_not: "Crear associacions noves per la carpeta",
		entry_template_inherited_folder_path: "Les plantilles d'entrada a la llista de plantilles d'entrada seleccionades estan associades amb la carpeta següent: ${0}. <br> El camí d'accés a la carpeta és ${1}.",
		entry_template_folder_associations_title: "Associa plantilles d'entrada",
		entry_template_folder_associations_intro: "Quan associeu una plantilla d'entrada amb una carpeta, els usuaris han d'utilitzar la plantilla d'entrada per afegir elements a la carpeta. Si associeu diverses plantilles d'entrada a una carpeta, els usuaris podran seleccionar quina plantilla d'entrada voleu utilitzar.",
		entry_tempalte_folder_associations_entrytemplate: "Plantilla d'entrada: ",
		entry_template_avaliable_entry_templates: "Plantilles d'entrada disponibles",
		entry_template_fileTypes_intro_title: "Tipus de fitxers permesos:",
		entry_template_fileTypes_intro: "Per defecte, una plantilla d'entrada es pot utilitzar per afegir qualsevol tipus de document al dipòsit. No obstant això, si seleccioneu un o més tipus de fitxers, les plantilles d'entrada només estaran disponibles quan els usuaris afegeixin documents que coincideixin amb un dels tipus de fitxers especificats.",
		entry_template_fileTypes: "Tipus de fitxers",
		entry_template_fileType_error: "S'han seleccionat tipus de fitxer no vàlids en una o més associacions de plantilla d'entrada. Cal que elimineu el tipus de fitxer no vàlid abans que es desin les associacions de plantilla d'entrada.",
		entry_template_fileTypes_any_type_of_file: " Qualsevol tipus de fitxer",
		entry_template_description_label: "Descripció",
		entry_template_ItemInfoPrefix: "Associa amb: ",
		entry_template_TargetObjectStoreName: "Magatzem d'objectes de destinació",
		entry_template_class: "Classe",
		entry_template_current_folder_as_parent: "Utilitza carpeta com a destinació",
		entry_template_view_minetypes: "Visualitza tipus MIME",
		entry_template_avaliable_MIME_types: "Tipus de fitxers disponibles",
		entry_template_selected_MIME_types: "Tipus de fitxers seleccionats",
		entry_template_MIME_type_column: "Nom de categoria de tipus de fitxer",
		entry_template_file_type_not_existing: "Elimineu el tipus de fitxer no vàlid.",
		entry_template_MIME_types: "Tipus MIME:",
		entry_template_MIME_types_info_dialog_title: "Tipus MIME per",
		entry_template_destination_label: "Afegeix documents a: ",
		entry_template_destination_help: "Especifiqueu on s'emmagatzemen els documents al dipòsit quan els usuaris afegeixen documents en aquesta carpeta utilitzant la plantilla d'entrada seleccionada.",
		entry_template_radioButton_folder_destination: "Carpeta seleccionada",
		entry_template_radioButton_template_destination: "Destinació especificada a la plantilla d'entrada",
		entry_tempalte_teamspace_default: "Plantilla d'entrada per defecte",
		entry_template_folder_associations_save_new: "Heu modificat algunes associacions de plantilla d'entrada. Voleu tancar aquesta finestra sense desar els canvis?",
		entry_template_mode_binding_label: "Propietats",
		entry_template_columns_className: "Nom de la classe",
		entry_template_columns_type: "Tipus de plantilla",
		entry_template_columns_workflow: "Nom del flux de treball",
		entry_template_columns_destination: "Destinació",
		entry_template_association_less_than_record: "Hi ha ${0} plantilles d'entrada que no estan llistades a Plantilles d'entrada seleccionades. No teniu permís per veure-les. O s'han suprimit. Poseu-vos en contacte amb l'administrador per obtenir més informació.",
		/* Request */

		progress_message_general: "S'està treballant...",
		cancel_message_general: "L'acció s'ha cancel·lat.",
		ie8_not_supported_browser: "IE8 no és un navegador admès.",
		progress_message_getDesktop: "S'està carregant l'escriptori...",
		progress_message_getActions: "S'estan carregant accions...",
		progress_message_getViewers: "S'està carregant l'escriptori...",
		progress_message_logon: "S'està iniciant la sessió a...",
		progress_message_logoff: "S'està tancant la sessió...",
		progress_message_getContentClasses: "S'estan recuperant les classes...",
		progress_message_openContentClass: "S'està obtenint més informació detallada de les classes...",
		progress_message_od_getCabinets: "S'estan recuperant els arxivadors...",
		progress_message_getSearchTemplates: "S'estan recuperant les cerques...",
		progress_message_od_getTemplates: "S'estan recuperant carpetes...",
		progress_message_od_openCabinet: "S'estan recuperant carpetes...",
		progress_message_openSearchTemplate: "S'està obrint la cerca...",
		progress_message_od_openTemplate: "S'està obrint la carpeta...",

		progress_message_getWorklists: "S'estan recuperant les llistes de treball...",
		progress_message_getWorkItems: "S'estan recuperant els elements de treball...",
		progress_message_getNextWorkItems: "S'estan recuperant els elements de treball...",
		progress_message_getStepParameters: "S'està recuperant informació d'elements de treball...",
		progress_message_getStepAttachmentItems: "S'està recuperant informació d'adjuncions...",
		progress_message_getDependentParameters: "S'està recuperant la informació de propietats...",

		progress_message_p8_getProcessApplicationSpaces: "S'estan recuperant espais d'aplicacions...",
		progress_message_p8_getProcessRoles: "S'estan recuperant rols de processos...",
		progress_message_p8_getProcessInbaskets: "S'estan recuperant safates d'entrada...",
		progress_message_p8_getProcessorInformation: "S'està recuperant informació de processos...",
		progress_message_p8_getFilterCriteria: "S'està recuperant el filtre de la safata d'entrada...",
		progress_message_p8_getLaunchParameters: "S'està recuperant informació d'elements de treball...",
		progress_message_p8_getStepAttachments: "S'estan recuperant fitxers adjunt d'elements de treball...",
		progress_message_p8_getSubscriptions: "S'estan recuperant subscripcions de flux de treball...",
		progress_message_p8_getTrackerParameters: "S'està recuperant informació d'elements de treball...",
		progress_message_p8_getTrackerHistory: "S'està recuperant l'historial d'elements de treball...",
		progress_message_p8_getTrackerMilestones: "S'estan recuperant fites d'elements de treball...",
		progress_message_p8_completeStep: "S'està completant l'element de treball...",
		progress_message_p8_moveToInbox: "S'està movent l'element a la safata d'entrada...",
		progress_message_p8_returnToSender: "S'està retornant l'element de treball...",
		progress_message_p8_reassign: "S'està reassignant l'element de treball...",
		progress_message_p8_launchWorkflow: "S'està iniciant el flux de treball...",
		progress_message_p8_getTransferedWorkflows: "S'està recuperant la informació de flux de treball...",

		progress_message_cm_getProcesses: "S'està recuperant la informació de flux de treball...",
		progress_message_cm_completeStep: "S'està continuant amb l'element de treball...",
		progress_message_cm_getItemProcessInformation: "S'està recuperant la informació de flux de treball...",

		progress_message_search: "S'està cercant...",
		cancel_message_search: "La cerca s'ha anul·lat.",
		progress_message_getContentItems: "S'està recuperant informació d'elements...",
		progress_message_openFolder: "S'està obrint la carpeta...",
		progress_message_addItem: "S'està creant l'element...",
		progress_message_checkIn: "S'està incorporant l'element...",
		progress_message_changePassword: "S'està canviant la contrasenya...",
		progress_message_getDefaultInstancePermissions: "S'estan recuperant els permisos per defecte...",
		progress_message_openItem: "S'està recuperant informació d'elements...",
		progress_message_saveItem: "S'està desant informació d'elements...",
		progress_message_getPermissions: "S'estan recuperant permisos...",
		progress_message_getEntryTemplates: "S'estan recuperant plantilles d'entrada...",
		progress_message_openEntryTemplate: "S'està obrint la plantilla d'entrada...",
		progress_message_getFavorites: "S'estan recuperant els preferits...",
		progress_message_getFoldersFiledIn: "S'estan recuperant carpetes...",
		progress_message_getDocumentVersions: "S'estan recuperant les versions...",
		progress_message_getDependentAttributeInfo: "S'està recuperant la informació d'atribut...",
		progress_message_packageForDownload: "S'està empaquetant per a la baixada...",
		progress_message_convertDocument: "S'està convertint el contingut...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "S'està recuperant tipus de contingut...",
		progress_message_SharePointPlugin_SharePointAddDocument: "S'està afegint el document...",

		progress_message_desktop_reload: "El client torna a carregar l'escriptori.<br>Potser se us demanarà que torneu a iniciar sessió.",
		progress_message_email: "S'està enviant el correu electrònic...",
		cancel_message_email: "El correu electrònic s'ha cancel·lat.",

		progress_message_p8_getOfficeOnlineTemplates: "S'estan recuperant plantilles de l'Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Arbre de Preferits",
		favorites_content_list_label: "Llista de contingut de Preferits",
		syncItems_tree_label: "Arbre dels meus fitxers sincronitzats",
		syncItems_content_list_label: "Llista de contingut dels meus fitxers sincronitzats",
		my_checkouts_content_list_label: "Llista de contingut de les meves extraccions",
		browse_tree_label: "Arbre Examina",
		browse_content_list_label: "Llista de contingut de navegació",
		repository_selector_label: "Selector del dipòsit",
		teamspaces_content_list_label: "Llista de contingut d'espai d'equip",
		templates_content_list_label: "Llista de contingut de Plantilles",
		work_content_list_label: "Llista de contingut de Treball",
		work_tree_label: "Arbre de Treball",
		admin_tree_label: "Arbre d'Administració",
		admin_tabs_label: "Pestanyes d'Administració",
		search_tabs_label: "Pestanyes de Cerca",
		search_selector_label: "Selector de Cerca",
		teamspace_browse_content_list_label: "Llista de contingut de navegació d'espai d'equip",
		teamspace_search_tabs_label: "Pestanyes de cerca d'espai d'equip",

		/* Desktop */
		undo_description: "Desfés ${0}",
		redo_description: "Refés ${0}",

		/* Application Tabs */
		home: "Inici",
		repository: "Dipòsit",
		repository_type: "Tipus de dipòsit:",
		repository_type_header: "Tipus de dipòsit",
		repository_type_any: "Tots els dipòsits",
		repository_type_contains_label: "El tipus de tipus de dipòsit conté",
		document_info: "Informació de documents",
		team: "Equip",
		administration: "Administració",

		/* Home Page */
		recent_activity: "Activitat recent",
		repos_and_wrksp: "Dipòsits i espais d'equip",
		workspaces: "Espais d'equip",
		repositories: "Dipòsits",
		templates: "Plantilles",
		favorites: "Preferits",
		my_checkouts: "Les meves extraccions",
		mySyncedFiles: "Els meus fitxers sincronitzats",
		links: "Enllaços",
		name_label: "Nom",
		description_label: "Descripció",
		type_label: "Tipus",
		type_heading: "Tipus",
		type_id_label: "ID de tipus",
		server_type_icon: "Icona de tipus de servidor",
		server_type_heading: "Tipus de servidor",
		server_type: "Tipus de servidor",
		port_heading: "Número de port",
		port_label: "Número de port",
		server_name_heading: "Nom del servidor",
		server_label: "Nom del servidor:",
		server_url_label: "URL del servidor",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Connectat:",
		repository_label: "Dipòsit",
		modified_label: "Modificat per:",
		modified_date_label: "Modificat el:",
		status_label: "Estat:",
		last_modified_label: "Darrera modificació de:",

		modifier: "Modificat per",
		modified_date: "Modificat el",

		/* Favorites */
		new_favorite_label: "Afegeix a Preferits",
		edit_favorite_label: "Reanomena Preferit",
		remove_favorite_label: "Elimina de Preferits",
		missing_alias_message: "Heu d'especificar un nom.",
		sync_favorite_enable_hover: "L'element s'ha habilitat per realitzar sincronització.",
		sync_favorite_disable_hover: "L'element no s'ha sincronitzat.",
		sync_favorite_sync_unavailable_hover: "La sincronització no està disponible per l'objecte.",
		sync_enable_label: "Sincronitza aquest element",
		sync_enable_label_hover: "Aquest element se sincronitzarà amb els vostres dispositius.",
		delete_favorite_confirmation_question: "Voleu eliminar aquest element de Preferits?",
		alias_label: "Nom:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "L'element seleccionat ja és a la llista de preferits.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Aquest element no es pot afegir a la llista de preferits.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Només podeu emmagatzemar ${0} preferits.",
		add_favorite_max_reached_response: "Si voleu afegir aquest element a la llista de preferits, heu de suprimir un preferit abans de poder-lo afegir.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Els documents seleccionats no es poden convertir a PDF.",
		download_as_pdf_max_content_error_explanation: "Podeu convertir només ${0} MB de dades a PDF. No obstant això, els documents seleccionats sobrepassen els ${0} MB.",
		download_as_pdf_max_content_error_response: "Seleccioneu menys documents o seleccioneu documents més petits i torneu a baixar els documents com a PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Els documents seleccionats no es poden convertir en un únic fitxer PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Per convertir un document amb diverses parts en un únic fitxer PDF, cada part ha de tenir el mateix tipus MINE.",
		download_as_pdf_mimetype_check_error_response: "Seleccioneu un document diferent per convertir a PDF.",

		/* Activity Stream */
		show_label: "Mostra:",
		all_filter: "Tots",
		notifications_filter: "Notificacions",
		workitems_filter: "Elements de treball",
		documentes_filter: "Documents",
		all_favorites_filter: "Tots els preferits",
		folders_filter: "Carpetes",
		searches_filter: "Cerques",
		teamspaces_filter: "Espais d'equip",

		/* Repository */
		all_search_templates: "Totes les cerques",
		all_od_searches: "Totes les plantilles de cerca",
		recent_searches: "Cerques recents",
		opened_searches: "Cerques obertes",

		all_worklists: "Totes les safates d'entrada",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Una llista de cada llista de treball",

		/* Teamspace */
		all_workspaces: "Tots els espais d'equip",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Una llista de cada espai d'equip",
		workspace_title: "Espai d'equip",
		workspace_icon: "Icona d'espai d'equip",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponible",
		workspace_stat_offline: "No disponible",
		workspace_stat_validate: "Necessita la validació",
		workspace_stat_pendingDelete: "Supressió pendent",
		workspace_stat_deleteError: "Error de supressió",

		undefined_value: "Sense definir",
		undefined_reference_value: "No hi ha cap referència definida.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Hi ha més resultats disponibles al servidor.",
		search_all_data: "Cerca totes les dades.",
		search_all_teamspaces: "Cerca tots els espais d'equip.",
		teamspace_filter_results: "S'estan mostrant ${0} resultats. ",
		displaying_filtered_results: "S'estan mostrant resultats filtrats. ",
		displaying_recent_results: "Es mostren només els espais d'equip que s'han modificat en els darrers ${0} dies. Per trobar altres espais d'equip, filtreu la llista d'espais d'equip pel nom o la descripció. ",
		clear_filter: "Esborreu el filtre.",

		/* FolderTreeModel */
		move_item_task: "Desplaça l'element",
		copy_item_task: "Copia l'element",
		add_item_task: "Afegeix l'element",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "La carpeta següent no s'ha trobat: ${0}. Pot ser que s'hagi suprimit o que la carpeta no es pugui obrir des d'aquesta vista. Feu clic a l'enllaç Més de la vista en arbre per anar fins a la carpeta. Si no podeu visualitzar la carpeta, actualitzar la vista de llista de contingut.",
		more_paging_link: "més ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Estat",
		status_dialog_cancel_label: "Cancel·la",

		/* ErrorDialog */
		error_dialog_title: "Error",
		error_dialog_icon_tooltip: "Error",
		error_dialog_stack_trace_title: "Traça de pila",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Confirmació",

		close_browser_msg: "Tanqueu la finestra de navegador.",

		/* MessageDialog */
		message_dialog_title: "Informació",
		warning_dialog_title: "Advertiment",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Benvinguts a ${0}",
		server: "Dipòsit:",
		username: "Nom d'usuari:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Un nom d'usuari és necessari per iniciar sessió al dipòsit.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Una contrasenya és necessària per iniciar sessió al dipòsit.",
		password: "Contrasenya:",
		login: "Inicia la sessió",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "La sessió ha caducat. Inicieu sessió una altra vegada.",
		login_repository_connection_expired_message: "La vostra connexió amb el dipòsit ${0} ha caducat. Inicieu sessió una altra vegada.",
		login_site_connection_expired_message: "La connexió al lloc ha caducat. Inicieu sessió una altra vegada.",
		login_new_server_message: "Introduïu un nom d'usuari i una contrasenya per a ${0}.",
		login_error_more_information_message: "Informació addicional",

		disconnect_box_account_user: "Desconnecta compte de Box: ${0}",
		disconnect_box_account: "Desconnecta compte de Box",
		disconnect_box_accounts: "Desconnecta comptes de Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Es necessita una connexió SSL per accedir al dipòsit Box.",
		login_oauth_popup_blocked: "S'ha blocat la finestra emergent. Heu de desbloquejar les finestres emergents en el navegador per iniciar sessió.",
		login_oauth_click_here: "Si no se us redirigeix en 5 segons, feu clic aquí.",
		login_oauth_title: "Inicia la sessió",
		login_oauth_grant_intro: "Atorga autenticació per ${0}.",
		login_pane_oauth_click_here: "Feu clic aquí per iniciar sessió.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Voleu tancar la sessió des el client web?",
		logout_confirmation_button: "Finalitza la sessió",

		/* ChangeLocaleDialog */
		change_locale: "Canvia l'idioma i els valors d'entorn local",
		change_locale_use_browser_language: "Utilitza la configuració de l'idioma del navegador (per defecte)",
		change_locale_use_browser_locale: "Utilitza la configuració de l'idioma del navegador (per defecte)",
		change_locale_description: "Si suprimiu les galetes del navegador, heu de restablir els paràmetres d'idioma i d'entorn local.",
		change_locale_language_locale: "Idioma de l'aplicació:",
		change_locale_language_locale_hover: "Aquest valor canvia l'idioma del text al client web però no canvia l'idioma dels documents a l'aplicació.<br><br>El valor per defecte utilitza l'idioma que s'especifica en les opcions de configuració del navegador web.",
		change_locale_value_format_locale: "Entorn local de l'aplicació:",
		change_locale_value_format_locale_hover: "L'entorn local determina el format de les dates, hores i números al client web.<br><br>El valor per defecte utilitza els formats que estan associats amb l'idioma que s'especifica en les opcions de configuració del navegador web.",
		change_locale_for_office: "Paràmetres de text bidireccional:",
		change_locale_bidi_support_flag: "Habilita el suport bidireccional",
		change_locale_bidi_support_flag_hover: "Quan s'habiliti el suport bidireccional, l'usuari podrà definir la direcció del text que s'utilitza en els camps d'entrada.  El text introduït en elements com ara carpetes, per exemple, es mostrarà en la mateixa direcció en què s'hagi introduït.",
		change_locale_base_text_direction: "Direcció del text base per al contingut:",
		change_locale_base_text_direction_hover: "Definiu la direcció del text que s'ha introduït en els camps d'entrada.  També controla quina és la direcció de les etiquetes que l'usuari ha introduït, com ara els noms de les carpetes.",
		change_locale_calendar_type: "Tipus de calendari:",
		change_locale_calendar_type_hover: "Seleccioneu el tipus de calendari que s'utilitzarà en la sessió de l'usuari.",
		change_locale_base_text_direction_default: "Per defecte",
		change_locale_base_text_direction_ltr: "D'esquerra a dreta",
		change_locale_base_text_direction_rtl: "De dreta a esquerra",
		change_locale_base_text_direction_contextual: "Contextual",
		change_locale_calendar_type_gregorian: "Gregorià",
		change_locale_calendar_type_hijri: "Musulmà",
		change_locale_calendar_type_hebrew: "Hebreu",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Canvia la contrasenya",
		change_password_title: "Canvia la contrasenya",
		change_password_expired_title: "La contrasenya ha caducat",
		change_password_message: "Escriviu una nova contrasenya.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "La contrasenya ha caducat. Escriviu una nova contrasenya.",
		change_password_password_rules: "Regles de contrasenya",
		change_password_old_password: "Contrasenya anterior:",
		change_password_new_password: "Contrasenya nova:",
		change_password_confirm_password: "Confirma la contrasenya:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Heu d'introduir la contrasenya antiga.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Heu d'introduir la contrasenya nova.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Heu de confirmar la contrasenya nova.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Les contrasenyes han de coincidir.",

		/* GlobalToolbar */
		actions: "Accions",
		actions_label: "Accions:",
		open_actions_label: "Obre accions:",

		/* About Dialog */
		about_dialog_title: "Quant a",
		about_product_name_label: "Nom del producte: ",
		about_product_version_label: "Versió: ",
		about_product_build_label: "Compilació: ",
		about_product_license: "Materials amb llicència - Propietat d'IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Tots els drets reservats. US Government Users Restricted Rights. Ús, duplicació i divulgació restringits pel GSA ADP Schedule Contract amb IBM Corporation. IBM i el logotip d'IBM són marques registrades d'International Business Machine Corporation als Estats Units i/o a altres països. La utilització d'aquest Programa s'autoritza amb les condicions de l'acord de llicència que acompanya el Programa. Aquest acord de llicència pot estar en una carpeta de directori de programa o a la biblioteca identificat com a \"License\" o \"Non_IBM_License\", si és aplicable, o bé es pot proporcionar com a un acord de llicència imprès. Llegiu amb atenció aquest acord de llicència abans d'utilitzar el Programa. L'ús del Programa implica l'acceptació d'aquests termes. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Voleu suprimir l'element seleccionat?",
		delete_single_folder_confirmation_question: "Voleu suprimir la carpeta ${0}?",
		delete_multiple_confirmation_question: "Voleu suprimir els elements seleccionats?<br>S'han seleccionat ${0} elements.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Suprimeix",
		search_template_delete_confirmation_question: "Voleu suprimir la cerca de ${0}?",
		search_template_opened_delete_confirmation_question: "La cerca ${0} està oberta. Si suprimiu la cerca, es tancarà.<br>Voleu suprimir la cerca?",
		delete_multiple_opened_search_template_confirmation_question: "Les cerques següents estan obertes: ${0}.<br>Si suprimiu les cerques, es tancaran. Les voleu suprimir?",
		delete_large_number_items_confirmation_question: "Heu seleccionat ${0} elements que s'han de suprimir.<br/>La supressió d'una gran quantitat d'elements pot trigar una mica més.<br/>Voleu continuar?",
		delete_confirmation_entrytemplate: "Si suprimiu aquesta plantilla d'entrada, afectarà de la manera següent als documents o carpetes associats amb la plantilla d'entrada:<ul><li>Els elements ja no s'associaran a la plantilla d'entrada, i pot ser que els usuaris vegin un advertiment quan actualitzin un element.</li><li>Les propietats que es controlaven mitjançant la plantilla d'entrada, com ara el nom i l'ordre de les propietats, ja no s'aplicaran als elements que estan associats amb la plantilla d'entrada.</li></ul>Voleu eliminar aquesta plantilla d'entrada?",
		delete_confirmation_entrytempalte_with_multi_items: "Les plantilles d'entrada s'han d'eliminar individualment. Les plantilles d'entrada s'han eliminat de la llista d'elements que cal suprimir. Si voleu eliminar les plantilles d'entrada, heu d'eliminar-les una per una.",

		/* Create/Apply/Remove Hold */
		hold: "Retenció",
		createHold: "Nova retenció",
		applyHold: "Aplica retenció",
		removeHold: "Elimina retenció",
		showHolds_title: "Mostra les retencions",
		applyHoldSelectText: "Seleccioneu la retenció que voleu aplicar als elements seleccionats.",
		availableHolds: "Retencions disponibles:",
		removeHoldSelectText: "Seleccioneu la retenció que voleu eliminar dels elements seleccionats.",
		appliedHolds: "Retencions aplicades:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Creeu una retenció nova que s'ha d'aplicar als elements seleccionats.",
		holdName: "Nom de retenció:",
		holdDescription: "Descripció",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Heu d'especificar un nom per la retenció.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "El nom de la retenció ja existeix.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "El nom de la retenció no pot contenir cap dels caràcters següents: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "La sessió caducarà d'aquí a ${0} minuts.",
		session_expire: "La sessió està a punt de caducar",
		logoff: "Finalitza la sessió",
		extend_session: "Amplia la sessió",
		admin_custom_settings: "Paràmetres addicionals:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning és un valor booleà que indica si s'ha habilitat un advertiment de caducitat de sessió, el valor per defecte és true. sessionExpireWarningTime és un enter entre 2 i 5 que especifica el temps de l'advertiment de caducitat de sessió.",
		admin_custom_setting_dialog_title_new: "Paràmetre nou",
		admin_custom_setting_dialog_title_edit: "Edita paràmetre",
		admin_custom_setting_dialog_hover_help: "Afegiu altres paràmetres especificant el nom i el valor del paràmetre. Per exemple, podeu especificar “enableSessionExpireWarning” i “true” si voleu habilitar l'advertiment de caducitat de sessió.",
		admin_custom_setting_dialog_field_hover_help: "Per obtenir més informació sobre els noms i valors de paràmetres, consulteu el manual de referència de paràmetres de l'IBM Navigator.",
		admin_custom_setting_dialog_nameInvalid: "El valor és obligatori. El valor no pot contenir espais en blanc ni pot ser un duplicat.",
		admin_custom_setting_dialog_bool_valueInvalid: "El valor és obligatori. El valor ha de ser un booleà.",
		admin_custom_setting_dialog_int_valueInvalid: "El valor és obligatori. El valor ha de ser un enter.",
		/* Add Document Dialog */
		add_document_dialog_title: "Afegeix un document",
		add_documents_dialog_title: "Afegeix documents",
		add_document_general_label: "General",
		add_document_properties_label: "Propietats",
		add_document_properties_with_ellipsis_label: "Propietats...",
		add_document_security_label: "Seguretat",
		add_document_location_label: "Desa a:",
		add_document_type_label: "Què voleu desar?",
		add_document_localfile_label: "Document local",
		add_document_metadata_label: "Informació sobre el document",
		add_document_external_label: "Enllaç a un document extern",
		add_document_web_link_label: "Enllaç web",
		add_document_saved_content_label: "Utilitzeu el fitxer desat:",
		add_document_saved_content_choice: "Fitxer desat",
		add_document_file_name_label: "Nom del fitxer:",
		add_document_entry_template_label: "Plantilla d'entrada:",
		add_document_delete_file_label: "Suprimeix el fitxer local",
		add_document_delete_file_disabled_label: "Els fitxers que no estiguin en el directori de rastreig de fitxers no se suprimiran.",
		add_document_major_version_label: "Versió principal",
		add_document_major_version_hover: "Estableix l'estat del document a Publicat. El document s'afegeix al dipòsit com a versió 1.0. Si no seleccioneu l'opció, el document no estarà preparat per publicar-lo i s'afegirà com a versió secundària 0.1.",
		add_document_save_document_as_unfiled_label: "No deseu el document en una carpeta",
		add_document_save_document_as_unfiled_hover: "Si seleccioneu aquesta opció, podreu trobar aquest document cercant-lo. No hi podeu navegar.",
		add_document_create_new_version_label: "Crea una nova versió",
		add_document_replace_existing_version_label: "Substitueix la versió existent",
		add_document_start_workflow_label: "Inicia el flux de treball",
		add_document_auto_classify_label: "Classifica el contingut de forma automàtica",
		add_document_add_label: "Afegeix",
		add_document_cancel_label: "Cancel·la",
		add_document_document_type_label: "Classe",
		add_document_context_info: "Els valors que especifiqueu en les propietats de document es poden utilitzar per trobar el document més tard.",
		add_documents_context_info: "Els valors que especifiqueu en els documents es poden utilitzar per trobar els documents més tard. Si heu d'introduir un valor de propietat diferent en un document, haureu d'afegir-lo per separat o editar les propietats del document després d'afegir-lo.",
		add_document_url_label: "URL:",
		add_document_template_description: "Descripció de la plantilla:",
		add_document_select_entry_template: "Introduïu o seleccioneu una plantilla d'entrada",
		add_document_no_permission_to_associations: "No disposeu de permisos per utilitzar una plantilla d'entrada",
		add_document_no_entry_template_to_use: "No hi ha cap plantilla d'entrada que es pugui utilitzar en els fitxers seleccionats",
		add_document_no_entry_template_itemtype_permission: "No podeu afegir elements a aquesta carpeta. Cal seleccionar una plantilla d'entrada i no teniu accés a cap de les plantilles d'entrada associades a aquesta carpeta. Poseu-vos en contacte amb l'administrador del sistema i demaneu-li que us doni accés a les plantilles d'entrada associades a aquesta carpeta.",
		add_document_appgroup_name_label: "Nom de grup d'aplicació:",
		add_document_app_name_label: "Nom de l'aplicació:",
		create_folder_dialog_title: "Carpeta nova",
		create_folder_context_info: "Els valors que introduïu per a les propietats de carpeta es poden utilitzar per trobar la carpeta més tard.",
		create_folder_folder_name_label: "Nom de carpeta",
		create_folder_save_folder_as_unfiled_label: "No deseu la carpeta en una altra carpeta",
		create_folder_save_folder_as_unfiled_hover: "Si seleccioneu aquesta opció, podreu trobar aquesta carpeta cercant-la. No hi podeu navegar.",
		add_item_create_in_folder: "Crea a la carpeta:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "El nom de la carpeta no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",

		invalid_box_folder_name_message: "El nom de la carpeta no pot contenir cap dels caràcters següents: \\ / i no pot ser igual a . o ..",
		invalid_box_file_name_message: "El nom del fitxer no pot contenir cap dels caràcters següents: \\ / i no pot ser igual a . o ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "El nom del fitxer no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",
		external_document_placeholder: "Introduïu l'URL del document",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "El color ha de ser un número hexadecimal de 3 o de 6 dígits, per exemple, #000 o #000000.",
		add_document_unfiled: "${0} no arxivats",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Afegeix un document mitjançant la plantilla d'entrada",
		add_document_using_template_context_info: "Quan s'afegeix un document utilitzant una plantilla d'entrada, els valors que introduïu al document han de ser coherents.",
		add_documents_using_template_dialog_title: "Afegeix documents mitjançant la plantilla d'entrada",
		add_documents_document_name_is_file_name_hint: "El nom del fitxer es pot utilitzar per a aquesta propietat",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Carpeta nova utilitzant la plantilla d'entrada",
		create_folder_using_template_context_info: "Quan es crea una carpeta utilitzant una plantilla d'entrada, els valors que introduïu a la carpeta han de ser coherents.",

		add_documents_batch_results_dialog_title: "Documents no afegits al dipòsit",
		add_documents_batch_results_dialog_context_info: "Els documents següents no s'han afegit al dipòsit. Seleccioneu un document i feu clic a Detalls per obtenir més informació sobre el motiu pel qual el document no s'ha afegit al dipòsit.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nom del fitxer",
		add_documents_batch_results_dialog_status_col_hdr: "Estat",
		add_documents_batch_results_dialog_message_col_hdr: "Missatge",
		add_documents_batch_results_status_error: "Error",
		add_documents_batch_results_status_cancelled: "Cancel·lat",
		add_documents_batch_results_status_cancelled_msg: "No s'ha afegit el document perquè la sol·licitud s'ha cancel·lat.",

		add_documents_batch_status_title: "S'estan afegint documents",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "S'està afegint el fitxer ${0} de ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Errors: ${0}",
		add_documents_batch_status_completing_msg: "El procés s'aturarà després que s'hagi afegit el document.",

		add_documents_status_uploading_msg: "S'està carregant el fitxer ${0} de ${1}...",
		add_documents_status_adding_msg: "S'està afegint el fitxer ${0} de ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "S'ha configurat la plantilla d'entrada en una altra aplicació i està configurada per declarar sempre els documents com a registres. No obstant això, aquest paràmetre s'ignora perquè el client web no admet la declaració de documents com a de registres.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "S'ha configurat La plantilla d'entrada en una altra aplicació i està configurada per què decidiu si declarar el document com un registre. No obstant això, aquest paràmetre s'ignora perquè el client web no admet la declaració de documents com a de registres.",
		no_selection: "&lt;Selecciona&gt;",

		batch_results_dialog_details_label: "Detalls",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "El valor no és vàlid. El valor ha de ser un GUID, per exemple, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "El valor no és vàlid. El valor ha de ser un número flotant, per exemple, 1,2 o 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "El valor no és vàlid. El valor ha de tenir el format ${0}, per exemple, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "El valor no és vàlid. El valor ha de ser un valor decimal, per exemple, 1,2 o 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "El valor no és vàlid. El valor ha de ser un enter, per exemple, 5 o 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "El valor no és vàlid. El valor només pot contenir caràcters alfabètics, per exemple, a-z i A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "El valor no és vàlid. El valor només pot contenir caràcters alfanumèrics, per exemple, a-z, A-Z i 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "El valor no és vàlid. El valor només pot contenir caràcters numèrics, per exemple, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "El valor no és vàlid. El valor només pot contenir els següents caràcters: a-z, A-Z, 0-9, [espai] i `.,:; ?\"/-_ &amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "El valor no és vàlid. El valor ha de ser una data amb el format següent: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "El valor no és vàlid. El valor ha de ser una hora amb el format següent: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "El valor no és vàlid. Seleccioneu un valor del menú desplegable.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "El valor no és vàlid.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "El valor no és vàlid. El valor ha de tenir el format següent: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Aquest valor és necessari.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "El valor és massa llarg. La propietat admet una longitud màxima de ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "El valor és massa curt. La propietat admet una longitud mínima de ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "El valor és fora de l'interval. El valor ha de ser un número de coma flotant entre ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "El valor és fora de l'interval. El valor ha de ser un valor decimal entre ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "El valor és fora de l'interval. El valor ha de ser un enter entre ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "El valor ha de ser una data entre ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "El valor és fora de l'interval. El valor ha de ser una data entre ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "El valor és fora de l'interval. El valor ha de ser una hora entre ${0} i ${1}.",
		property_and: "i",

		property_invalidValueOrRequired: "El valor següent no és vàlid o és necessari: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Propietats",
		edit_properties_dialog_info: "Podeu veure o editar les propietats d'aquest element. Si teniu els permisos adequats, també podeu modificar la seguretat de l'element. Tanmateix, no podeu canviar les propietats del sistema.",
		edit_properties_od_dialog_info: "Podeu veure o editar les propietats d'aquest element. Tanmateix, no podeu canviar les propietats del sistema.",
		system_properties_title: "Propietats del sistema",
		custom_properties_title: "Propietats",
		/* Folder collaboration tab */
		box_permission_permission: "Permís",
		box_permission_permissions: "Permisos",
		box_permission_editor: "Editor",
		box_permission_owner: "Propietari",
		box_permission_co_owner: "Copropietari",
		box_permission_viewer_uploader: "Carregador de visualitzador",
		box_permission_previewer_uploader: "Carregador de previsualitzador",
		box_permission_viewer: "Visualitzador",
		box_permission_previewer: "Previsualitzador",
		box_permission_uploader: "Carregador",
		box_permission_add: "Afegeix",
		box_permission_upload: "Carrega",
		box_permission_download: "Baixa",
		box_permission_preview: "Visualització prèvia",
		box_permission_view: "Visualització",
		box_permission_send_links: "Envia enllaços de només visualització",
		box_permission_create_subfolders: "Crea subcarpetes",
		box_permission_create_tasks: "Crea tasques",
		box_permission_add_comments: "Afegeix comentaris",
		box_collaboration_invite_placeholder: "Introduïu un nom, correu electrònic o grup per convidar",
		box_collaboration_invite_placeholder_non_admin: "Introduïu un correu electrònic per convidar",
		box_collaboration_invalid_email: "Introduïu una adreça de correu electrònic vàlida",
		box_collaboration_user_already_present: "Aquest usuari ja és un col·laborador de la carpeta",
		box_collaboration_user_name: "Nom",
		box_collaboration_email_address: "Adreça de correu electrònic",
		box_collaboration_date_added: "Data de l'addició",
		box_collaboration_remove_collaboration: "Elimina",
		box_collaboration_remove_collaboration_title: "Suprimeix",
		box_collaboration_no_collaborators: "No hi ha cap col·laborador",
		box_collaboration_change_owner_title: "Canvia el propietari de l'element",
		box_collaboration_change_owner_prompt: "Al fer que aquest col·laborador sigui el propietari de la carpeta, us convertireu en editor i deixareu de ser propietari de la carpeta. Els col·laboradors que hagin estat afegits directament a aquesta carpeta la veuran a les seves carpetes arrel. Els col·laboradors que hagin estat afegits al nivell de carpeta pare o superior deixaran de ser col·laboradors. Voleu continuar?",
		box_collaboration_remove_self_title: "Elimina'm",
		box_collaboration_remove_self_prompt: "Esteu segur que voleu eliminar-vos com a col·laborador? Deixareu de tenir accés a aquesta carpeta.",
		box_collaboration_user: "Usuari",
		box_collaboration_group: "Grup",
		box_managing_users_not_configured: "No podeu cercar usuaris i grups perquè l'aplicació Box no s'ha configurat correctament. Per utilitzar aquesta funció, poseu-vos en contacte amb l'administrador i sol·liciteu la configuració de l'aplicació Box per gestionar usuaris i grups.",
		duplicate_value_error: "Cadascun dels valors d'aquesta propietat ha de ser únic.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Qualsevol canvi que feu en els camps següents s'aplicaran a tots els camps dels elements seleccionats. Si heu d'introduir un valor diferent de propietat per a un element concret o editar la seguretat d'un element, heu d'editar les propietats de l'element de forma individual.",
		multi_edit_properties_class_label: "Classe:",
		multi_edit_properties_items_label: "Noms d'elements:",
		multi_edit_properties_properties_label: "Propietats:",
		multi_edit_batch_status_title: "Actualització de propietats",
		multi_edit_batch_status_adding_msg: "S'està actualitzant l'element ${0} de ${1}...",
		multi_edit_batch_status_verifying_msg: "S'està comprovant l'element ${0} de ${1}...",
		multi_edit_batch_status_completing_msg: "El procés s'aturarà després que s'hagi actualitzat l'element.",
		multi_edit_batch_status_validation_completing_msg: "El procés s'aturarà després que s'hagi comprovat l'element.",
		multi_edit_batch_results_status_error: "Error",
		multi_edit_batch_results_status_cancelled: "Cancel·lat",
		multi_edit_batch_results_status_cancelled_msg: "No s'ha actualitzat l'element perquè la sol·licitud s'ha cancel·lat.",
		multi_edit_batch_results_dialog_title: "Elements no actualitzats",
		multi_edit_batch_results_dialog_context_info: "Els elements següents no s'han actualitzat. Seleccioneu un element i feu clic a Detalls per obtenir més informació sobre el motiu pel qual l'element no s'ha actualitzat.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nom de l'element",
		multi_edit_batch_results_dialog_status_col_hdr: "Estat",
		multi_edit_batch_results_dialog_message_col_hdr: "Missatge",
		multi_edit_batch_status_errors_msg: "Errors: ${0}",
		multi_edit_batch_permission_error_text: "Els canvis a les propietats no es poden desar.",
		multi_edit_invalid_value_error: "El valor depèn d'un altre valor de propietat i no és vàlid en tots els elements que heu seleccionat.",
		multi_edit_batch_permission_error_explanation: "No podeu modificar les propietats d'element perquè no teniu prou privilegis.",
		multi_edit_no_modifiable_properties: "Les propietats dels elements seleccionats no es poden modificar. Això pot passar quan un element inclou propietats de només de lectura o quan només el nom o el títol de l'element es poden editar. Quan diversos elements estan seleccionats, no podreu modificar el nom ni el títol dels elements.",
		multi_edit_mult_classes_dialog_info: "Els elements seleccionats es troben a diferents dipòsits o pertanyen a classes diferents. Podeu editar només els elements que estan a la mateixa classe o al mateix dipòsit. Seleccioneu el subconjunt dels elements que voleu editar.",
		multi_edit_class_selector_class_heading: "Classe",
		multi_edit_class_selector_entry_template_heading: "Plantilla d'entrada",
		multi_edit_class_selector_repository_heading: "Dipòsit",
		multi_edit_class_selector_items_heading: "Elements",
		multi_edit_some_classes_not_displayed: "Alguns dels elements seleccionats no s'inclouen en aquesta llista perquè els elements contenen propietats de només de lectura o perquè els elements estan activats en dipòsits que no admeten l'edició de les propietats.",
		multi_edit_properties_invalid_msg: "Alguns dels valors de propietats no són vàlids en tots els elements seleccionats.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Aquesta propietat és de només lectura i no es pot modificar.",
		multi_edit_append_checkbox_label: "Afegeix",
		multi_edit_append_checkbox_tooltip: "Seleccioneu aquesta opció si voleu afegir valors de propietat nous als valors existents en comptes de substituir-los.",
		multi_edit_properties_invalid_childcomponent_msg: "Alguns valors de la propietat ${0} del component fill ${1} depenen d'altres propietats i ja no són vàlides amb les seleccions que heu fet. Esborreu els valors del component fill ${1} o feu canvis a les propietats dels elements que heu seleccionat individualment.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exporta propietats",
		export_properties_dialog_info: "Seleccioneu les propietats que voleu exportar i especifiqueu l'ordre en què es mostraran.",
		export_properties_dialog_export_button_label: "Exporta",
		export_properties_dialog_export_raw_values: "Exporta valors sense format",

		/* Properties */
		filter_clear_tooltip: "Esborra el filtre",
		properties_new_row: "Nou",
		properties_requiredClass_document_tooltip: "Seleccioneu un document. El document ha de pertànyer a la classe ${0}.",
		properties_requiredClass_folder_tooltip: "Seleccioneu una carpeta. La carpeta ha de pertànyer a la classe ${0}.",
		properties_dataType_tooltip: "Tipus de dades: ${0}",
		properties_maxLength_tooltip: "Llargada màxima: ",
		properties_minLength_tooltip: "Longitud mínima: ",
		properties_minValue_tooltip: "Valor mínim: ",
		properties_maxValue_tooltip: "Valor màxim: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Descripció: ",

		properties_type_boolean_tooltip: "Booleà",
		properties_type_date_tooltip: "Data",
		properties_type_time_tooltip: "Hora",
		properties_type_timestamp_tooltip: "Marca horària",
		properties_type_decimal_tooltip: "Valor Decimal",
		properties_type_double_tooltip: "Número de coma flotant",
		properties_type_short_tooltip: "Enter",
		properties_type_integer_tooltip: "Enter",
		properties_type_long_tooltip: "Enter",
		properties_type_string_tooltip: "Cadena de text",
		properties_type_string_alpha_tooltip: "Cadena alfabètica",
		properties_type_string_alphanum_tooltip: "Cadena alfanumèrica",
		properties_type_string_ext_tooltip: "Cadena alfanumèrica ampliada",
		properties_type_string_num_tooltip: "Cadena numèrica",
		properties_type_binary_tooltip: "Binari",
		properties_type_object_tooltip: "Objecte",
		properties_type_reference_tooltip: "Aquesta propietat fa referència a un altre element del dipòsit.",
		properties_type_guid_tooltip: "Identificador exclusiu globalment",
		properties_type_group_tooltip: "Usuaris i grups",
		properties_type_user_tooltip: "Usuaris",
		properties_type_childComponent_tooltip: "Component secundari",

		properties_childComponent_minCardinalityOnly_tooltip: "Aquesta propietat ha de tenir com a mínim ${0} valors.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Aquesta propietat no pot tenir més de ${0} valors.",
		properties_childComponent_minMaxCardinality_tooltip: "Aquesta propietat ha de tenir com a mínim ${0} valors i no més de ${1} valors.",
		properties_childComponent_noCardinality_tooltip: "Aquesta propietat pot tenir qualsevol nombre de valors.",

		properties_type_guid_example_tooltip: ", per exemple {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Seleccioneu un valor de la llista.",
		properties_single_select_choice_tooltip: "Seleccioneu un valor.",
		properties_multiple_select_typein_tooltip: "Escriviu un o més valors.",
		properties_multiple_select_choice_tooltip: "Seleccioneu un o més valors.",
		properties_not_selectable_tooltip: "La categoria no es pot seleccionar.",
		properties_none: "Cap",
		properties_none_tooltip: "Seleccioneu <i>Cap</i> per esborrar el valor actual d'aquesta propietat.",
		properties_value_empty: "Sense valor",
		properties_value_read_only: "Només de lectura",
		properties_clear_label: "Esborra",
		properties_clear_tooltip: "Si s'esborra el valor al camp, s'esborrarà el valor al dipòsit després de fer clic a <b>Desa</b>.",
		properties_box_custom_properties: "Propietats personalitzades",
		properties_box_metadata_name_in_use: "Aquest nom ja s'està utilitzant. Introduïu un altre nom per a la propietat personalitzada.",

		properties_templates: "Plantilles",
		properties_add_template: "Afegeix plantilla",
		properties_remove_template: "Elimina",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Incorpora",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Incorpora",
		checkin_cancel_label: "Cancel·la",
		checkin_file_name_label: "Nom del fitxer",
		checkin_document_status_title: "Incorpora document",
		checkin_document_status_uploading_msg: "S'està carregant el fitxer...",
		checkin_document_status_checkingin_msg: "S'està incorporant el fitxer...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Selecciona mode de redacció",
		viewer_redaction_new_document_confirmation_question: "Voleu desar la redacció com un document nou o com un fitxer local?",
		viewer_redaction_new_version_confirmation_question: "Voleu desar la redacció com una nova versió?",
		viewer_redaction_new_version_confirmation_question_never: "Voleu desar la redacció com un contingut nou?",		
		viewer_redaction_new_document_button: "Sí",
		viewer_redaction_new_document_cancel_button: "No",
		viewer_redaction_add_document_confirmation_question: "Voleu desar la redacció com un document nou, com una nova versió o com un fitxer local?",
		viewer_redaction_add_document_confirmation_question_version_never: "Voleu desar la redacció com un document nou, com un contingut nou o com un fitxer local?",
		viewer_redaction_add_document_button: "Document nou",
		viewer_redaction_add_new_version_button: "Versió nova",
		viewer_redaction_add_new_version_button_version_never: "Contingut nou",
		viewer_redaction_add_local_file_button: "Fitxer local",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Seleccioneu el motiu de redacció",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "La plantilla d'entrada que s'ha utilitzat per afegir el document al dipòsit no es troba. Es comprovarà el document al dipòsit sense utilitzar la plantilla d'entrada.",
		property_entry_template_not_retrieved_warning: "La plantilla d'entrada que s'ha utilitzat per afegir el document al dipòsit no es troba. Les propietats del document es mostraran sense utilitzar la plantilla d'entrada.",
		multi_edit_entry_template_not_found_name: "[No trobat]",
		multi_edit_entry_template_not_retrieved_warning: "La plantilla d'entrada que s'ha utilitzat per afegir els elements al dipòsit no es troba. Les propietats de l'element es modificaran sense utilitzar la plantilla d'entrada.",
		checkin_major_version_hover: "Incrementa el número de versió del document d'un en un i configura l'estat en Publicat. Si no seleccioneu l'opció, el document no estarà preparat per publicar-lo i s'incorporarà com una versió anterior.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "El document no s'ha incorporat perquè no està extret.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "L'ID d'usuari o la contrasenya no són vàlids al servidor.",
		error_bad_userid_password_userResponse: "Assegureu-vos que heu introduït l'ID d'usuari i la contrasenya correctament.",
		error_bad_userid_password_adminResponse: "S'ha retornat l'error següent: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Una connexió al client web no es pot establir utilitzant el següent URL: ${0}.",
		http_send_error_explanation: "L'error pot ser provocat per un problema de configuració en el servidor d'aplicacions web o un problema amb l'aplicació de client web.",
		http_send_error_userResponse: "Proveu de tornar a iniciar la sessió. Si el problema continua, informeu d'aquest error a l'administrador del sistema.",
		http_send_error_adminResponse: "S'ha retornat l'error HTTP següent: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Una connexió al client web no es pot establir utilitzant el següent URL: ${0}.",
		http_error_explanation: "Heu d'autenticar-ho en un tallafoc o el servidor d'aplicacions web o no s'està executant o hi accedeix a causa de problemes amb la xarxa.",
		http_error_userResponse: "Si heu d'autenticar-ho en un tallafoc, autentiqueu-lo i torneu a iniciar sessió de nou. Si el problema continua, informeu d'aquest error a l'administrador del sistema.",
		http_error_adminResponse: "S'ha retornat l'error HTTP següent: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Una connexió al client web no es pot establir utilitzant el següent URL: ${0}.",
		http_response_bad_explanation: "L'error pot ser provocat per un problema de configuració en el servidor d'aplicacions web o un problema amb el client web.",
		http_response_bad_userResponse: "Proveu de tornar a iniciar la sessió. Si el problema continua, informeu d'aquest error a l'administrador del sistema.",
		http_response_bad_adminResponse: "S'ha retornat l'error següent: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Sense títol",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "La miniaplicació de correu electrònic no es pot iniciar.",
		email_applet_init_failed_explanation: "Aquest problema es pot produir quan el client de correu electrònic no està ben instal·lat ni configurat o quan una versió suportada del Java Runtime Environment (JRE) no està instal·lada a l'estació de treball.",
		email_applet_init_failed_userResponse: "Per resoldre el problema:<ul><li>Assegureu-vos que l'aplicació de correu electrònic està instal·lada i configurada com a client de correu electrònic per defecte a l'estació de treball.</li><li>Comproveu que hi ha instal·lada una versió suportada del JRE a l'estació de treball especificant l'ordre següent en un indicador d'ordres: java-version</li></ul><p>Una llista de les versions admeses del JRE s'inclou al document <i>Prerequisits de maquinari i programari d'IBM Content Navigator</i> al lloc de l'IBM Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "L'aplicació de correu electrònic no s'ha pogut iniciar perquè un fitxer DLL necessari no s'ha pogut carregar.",
		email_applet_JNI_LOAD_FAILED_explanation: "El fitxer necessari WCEmailAppletJNI.dll no s'ha pogut carregar perquè el directori temporal a l'estació de treball està ple.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Assegureu-vos que el directori temporal té prou espai. Després, torneu a enviar el document des del client web. Per defecte, el fitxer WCEmailAppletJNI.dll es carrega al directori temporal especificat als paràmetres del navegador web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "L'aplicació de correu electrònic no s'ha pogut iniciar perquè la miniaplicació de correu electrònic no pot crear un fitxer temporal.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "El directori temporal a la vostra estació de treball deu estar ple.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Assegureu-vos que el directori temporal té prou espai. Després, torneu a enviar el document des del client web.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "L'aplicació de correu electrònic no s'ha pogut iniciar perquè la miniaplicació de correu electrònic no pot accedir al directori temporal.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "El directori temporal a la vostra estació de treball deu estar ple o pot ser que no tingueu l'accés adequat per escriure en el directori temporal.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Assegureu-vos que el directori temporal té prou espai i assegureu-vos que teniu permisos d'escriptura al directori temporal. Després, torneu a enviar el document des del client web. Si el problema continua, poseu-vos en contacte amb l'administrador del sistema.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "La miniaplicació de correu electrònic no pot suprimir un fitxer temporal.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Una altra aplicació deu estar utilitzant el fitxer o que no existeixi a l'estació de treball.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Si s'està utilitzant el fitxer en una altra aplicació, tanqueu l'aplicació. Si el fitxer és al vostre sistema de fitxers local, elimineu el fitxer següent del directori temporal a l'estació de treball: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "No es pot crear l'enllaç al document.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "El dipòsit ha tornat l'URL en un format no vàlid.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Tanqueu el navegador web, incloent-hi totes les pestanyes i sessions, i torneu a iniciar sessió. Torneu a enviar el document des del client web. Si el problema continua, poseu-vos en contacte amb l'IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "La miniaplicació de correu electrònic no pot adjuntar el fitxer a un correu electrònic.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "El dipòsit ha tornat l'URL al document en un format no vàlid.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Tanqueu el navegador web, incloent-hi totes les pestanyes i sessions, i torneu a iniciar sessió. Torneu a enviar el document des del client web. Si el problema continua, poseu-vos en contacte amb l'IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "El fitxer adjunt no s'ha pogut crear.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "La miniaplicació de correu electrònic no pot llegir l'URL del document.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Tanqueu el navegador web, incloent-hi totes les pestanyes i sessions, i torneu a iniciar sessió. Torneu a enviar el document des del client web. Si el problema continua, poseu-vos en contacte amb l'IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "El document no s'ha pogut recuperar del dipòsit.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "La vostra sessió ha excedit el temps d'espera, el dipòsit o el servidor d'aplicacions web no s'està executant o hi ha un problema amb la configuració del client web.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Inicieu sessió i torneu a enviar el document per correu electrònic. Si el problema persisteix, demaneu a l'administrador del sistema que comprovi els registres d'errors del dipòsit.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Si heu configurat el client web per convertir documents AFP a un altre format, com ara PDF, abans d'enviar els documents com a fitxers adjunts, assegureu-vos que la conversió està configurada correctament.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "El document no s'ha pogut convertir a PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "L'eina que s'utilitza en la transformació de documents a PDF no admet aquest tipus de fitxer.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Tanqueu aquesta pàgina i torneu a enviar el document de correu electrònic sense convertir-lo a PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "No s'ha creat de correu electrònic.",
		email_applet_MAPI_USER_ABORT_explanation: "Obriu l'aplicació de correu electrònic i assegureu-vos que funciona correctament. Després, torneu a enviar el document des del client web. Si el problema continua, poseu-vos en contacte amb l'administrador per què revisi els registres d'incidències del sistema operatiu.",
		email_applet_MAPI_USER_ABORT_userResponse: "Si voleu tancar l'aplicació de correu electrònic, no caldrà cap altra acció. Per enviar el correu electrònic, inicieu sessió a l'aplicació de correu electrònic i torneu a enviar el document a partir del client web.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "No es pot crear el correu electrònic.",
		email_applet_MAPI_FAILURE_explanation: "El client de correu electrònic no es pot obrir o no heu iniciat sessió.",
		email_applet_MAPI_FAILURE_userResponse: "Obriu l'aplicació de correu electrònic i assegureu-vos que funciona correctament. Després, torneu a enviar el document des del client web. Si el problema continua, poseu-vos en contacte amb l'administrador per què revisi els registres d'incidències del sistema operatiu.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "No es pot crear el correu electrònic.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "No heu iniciat sessió al client de correu electrònic. El client de correu electrònic ha d'estar obert i heu d'iniciar sessió per enviar un missatge des del client web.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Obriu el client de correu electrònic i inicieu sessió. Després, torneu a enviar el document des del client web.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "No es pot crear el correu electrònic perquè el fitxer temporal no s'ha creat a l'estació de treball.",
		email_applet_MAPI_DISK_FULL_explanation: "El directori temporal a la vostra estació de treball deu estar ple.",
		email_applet_MAPI_DISK_FULL_userResponse: "Assegureu-vos que el directori temporal té prou espai. Després, torneu a enviar el document des del client web.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "El correu electrònic no es pot crear perquè no hi ha prou memòria del sistema.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Teniu massa aplicacions obertes.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Tanqueu les aplicacions que no utilitzeu i torneu a enviar el document des del client web.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "S'ha denegat l'accés MAPI.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "L'accés MAPI (Messaging Application Programming Interface) no està habilitat o no s'admet en l'aplicació de correu electrònic. MAPI és el protocol de missatgeria que s'utilitza per habilitar la comunicació entre el client web i l'aplicació de correu electrònic.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Poseu-vos en contacte amb l'administrador del sistema.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Assegureu-vos que l'aplicació de correu electrònic té l'accés MAPI configurat i s'ha realitzat correctament. Si el problema continua, poseu-vos en contacte amb l'IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "No es poden crear ni el fitxer adjunt ni l'enllaç a l'element.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Teniu massa sessions de navegador web obertes.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Tanqueu les sessions de navegador web sense utilitzar. Després, torneu a enviar el document des del client web. Si el problema persisteix, poseu-vos en contacte amb l'administrador del sistema.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "No es pot enviar el correu electrònic.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Esteu intentant enviar massa fitxers adjunts.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Seleccioneu menys fitxers. Després, torneu a enviar els documents des del client web.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "No es pot enviar el correu electrònic.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Esteu enviant el correu electrònic amb massa destinataris.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Envieu el correu electrònic a menys destinataris.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "El fitxer adjunt no s'ha pogut crear.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "S'han eliminat alguns fitxers temporals abans de crear el fitxer adjunt. Es produirà un error si la memòria cau s'esborra abans d'enviar el correu electrònic.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "El fitxer adjunt no s'ha pogut crear.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "S'han eliminat alguns fitxers temporals abans de crear el fitxer adjunt. Es produirà un error si la memòria cau s'esborra abans d'enviar el correu electrònic.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "L'aplicació de correu electrònic no ha pogut crear el fitxer adjunt.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "El correu electrònic no es pot enviar al destinatari especificat.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "El destinatari no existeix a la llibreta d'adreces.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Comproveu el nom del destinatari i torneu a enviar el document.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "El correu electrònic no es pot enviar al destinatari especificat.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "L'adreça de correu electrònic té un format incorrecte.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Assegureu-vos que heu introduït una adreça de correu electrònic vàlida i torneu a enviar el document.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_NO_MESSAGES_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "No es pot enviar el correu electrònic.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "El correu electrònic és massa llarg.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Escurceu el text del correu electrònic i torneu a enviar el correu electrònic.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "No es pot crear el correu electrònic.",
		email_applet_MAPI_INVALID_SESSION_explanation: "No ha funcionat el client de correu electrònic quan ha intentat crear un correu electrònic.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Reinicieu el client de correu electrònic i torneu a enviar el document des del client web.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "El correu electrònic no s'ha creat correctament.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "El correu electrònic no es pot enviar al destinatari especificat.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "L'adreça de correu electrònic té un format incorrecte.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Assegureu-vos que heu introduït una adreça de correu electrònic vàlida i torneu a enviar el document.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "El client de correu electrònic no pot dur a terme l'acció sol·licitada.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "L'aplicació de correu electrònic ha tornat un error inesperat.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Torneu a enviar el document des del client web.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "A una de les propietats, li falta una quantitat de valors necessaris.",
		error_property_cardinality_explanation: "Algunes propietats tenen un nombre mínim i màxim de valors.",
		error_property_cardinality_userResponse: "Utilitzeu l'ajuda contextual per ajudar a determinar la propietat que necessita un nombre mínim de valors. Després, especifiqueu el nombre mínim de valors i torneu-ho a provar.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "És obligatori un nom de fitxer.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Especifiqueu un nom de fitxer i torneu-ho a provar.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "El connector ${0} conté errors.",
		plugin_error_explanation: "S'ha produït un error en avaluar el JavaScript del connector ${0}. Si continueu utilitzant el client web, és possible que hi trobeu errors addicionals.",
		plugin_error_userResponse: "Poseu-vos en contacte amb l'administrador del sistema.",
		plugin_error_adminResponse: "Hi ha un problema amb el connector que necessita resoldre mitjançant el proveïdor de connectors. Es recomana que elimineu el connector de la configuració del client web fins que el problema amb el connector es resolgui.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "La plantilla d'entrada no es pot obrir.",
		open_old_format_entry_template_error_explanation: "La plantilla d'entrada utilitza un format anterior que no s'admet al client web.",
		open_old_format_entry_template_error_userResponse: "Demaneu a l'administrador del sistema que actualitzi la plantilla d'entrada.",
		open_old_format_entry_template_error_adminResponse: "Utilitzeu Application Engine o Workplace XT Entry Template Designer per desar una versió actualitzada de la plantilla d'entrada.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "La plantilla d'entrada no es pot obrir.",
		open_custom_object_entry_template_error_explanation: "El client web no admet el tipus de plantilla d'entrada d'objecte personalitzat.",
		open_custom_object_entry_template_error_userResponse: "Obriu una plantilla d'entrada diferent.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "L'objecte eforms no es pot obrir.",
		open_forms_object_error_explanation: "El client web no admet els següents tipus d'objectes eforms: plantilla de formulari, dades de formulari, política de documents i política de flux de treball.",
		open_forms_object_error_userResponse: "Obriu un document diferent.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "No podeu utilitzar la plantilla d'entrada ${0}.",
		entry_template_folder_restricted_error_explanation: "La plantilla d'entrada afegeix elements a la carpeta ${1} però no teniu els permisos adequats per afegir elements a la carpeta.",
		entry_template_folder_restricted_error_userResponse: "Seleccioneu una altra plantilla d'entrada o demaneu a l'administrador del sistema que us doni els permisos adequats per afegir elements a la carpeta ${1}.",
		entry_template_folder_restricted_error_0: "nom_plantilla_entrada",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "La plantilla d'entrada no es pot obrir.",
		open_records_entry_template_error_explanation: "El client web no admet el tipus de plantilla d'entrada Declara com a registre.",
		open_records_entry_template_error_userResponse: "Obriu una plantilla d'entrada diferent.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "El flux de treball no es pot obrir.",
		open_workflow_error_explanation: "El client web no permet obrir fluxos de treball.",
		open_workflow_error_userResponse: "Obriu un document diferent.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "No es pot obrir el document.",
		viewer_unable_to_view_error_explanation: "No s'ha configurat cap visualitzador per als documents d'aquest tipus o el visualitzador configurat no és compatible amb el sistema.",
		viewer_unable_to_view_error_userResponse: "Demaneu a l'administrador del sistema que configuri un visualitzador als documents d'aquest tipus i assegureu-vos que el visualitzador configurat funciona en el sistema de l'usuari.",
		viewer_unable_to_view_error_adminResponse: "Utilitzeu l'eina d'administració per configurar un visualitzador en aquest tipus de document.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "La cerca no es pot obrir.",
		search_cannot_open_error_explanation: "La funció de cerca no està configurada en aquest escriptori.",
		search_cannot_open_error_userResponse: "Demaneu a l'administrador del sistema si podeu tenir accés a un escriptori que inclogui la funció de cerca o si es pot actualitzar l'escriptori per incloure la funció de cerca.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "El document no s'ha carregat.",
		viewer_document_load_failed_error_explanation: "El visualitzador Daeja ViewONE Professional no ha pogut obrir el document.",
		viewer_document_load_failed_error_userResponse: "Per obtenir més informació, consulteu el missatge d'error que es mostra al visualitzador.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "El document no es pot visualitzar.",
		viewer_session_expired_explanation: "El contingut del document no es pot recuperar.",
		viewer_session_expired_userResponse: "Torneu a provar d'iniciar la sessió. Si el problema continua, el servidor d'aplicacions no s'està executant. Demaneu a l'administrador del sistema que comprovi els registres d'errors de l'IBM Content Navigator o que reiniciï el servidor.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "El document no es pot visualitzar.",
		ajaxViewer_getPage_failed_explanation: "El visualitzador AJAX ha rebut una resposta d'error en recuperar el contingut de la pàgina. El servidor d'aplicacions no s'està executant.",
		ajaxViewer_getPage_failed_userResponse: "Tanqueu el navegador web i torneu a iniciar sessió. Si el problema persisteix, demaneu a l'administrador del sistema que revisi els fitxers de registre del servidor de l'aplicació web o que reiniciï el servidor.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "No es troba el JRE a l'estació de treball.",
		viewer_java_plugin_not_found_explanation: "Tampoc es troba el connector o no s'ha instal·lat la versió correcta del JRE.",
		viewer_java_plugin_not_found_userResponse: "Comproveu si el JRE s'ha instal·lat. Per exemple, en un indicador d'ordres, introduïu l'ordre següent: Java -version. Si el JRE no està instal·lat o està instal·lat al nivell de versió incorrecte, instal·leu la versió adequada del JRE. Una llista de les versions admeses s'inclou al document <i>Prerequisits de maquinari i programari d'IBM Content Navigator</i> al lloc de l'IBM Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "El document no es pot visualitzar al navegador web.",
		viewer_pdf_plugin_not_found_explanation: "No s'ha trobat el connector que s'utilitza per visualitzar documents PDF al navegador web.",
		viewer_pdf_plugin_not_found_userResponse: "El fitxer PDF es baixarà a la vostra estació de treball en comptes de mostrar-lo a la finestra del visualitzador.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "L'element següent no es pot afegir al dipòsit: ${0}.",
		add_document_single_item_error_explanation: "Aquest error es produeix per un dels motius següents:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Esteu intentant afegir un document que s'ha mogut o suprimit.</li>" + "<li>Esteu intentant afegir un document al qual se li ha canviat el nom.</li>" + "<li>Esteu intentant afegir un document que està malmès.</li>" + "<li>Esteu intentant afegir un document que està obert en una altra aplicació.</li>" + "<li>Esteu intentant afegir una carpeta al dipòsit.</li>" + "<li>No disposeu dels permisos adequats en el sistema operatiu per poder accedir al document.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Realitzeu l'acció apropiada per resoldre el problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si el document s'ha mogut o reanomenat, cerqueu el document al sistema de fitxers i proveu d'afegir-lo una altra vegada.</li>" + "<li>Si el document està obert en una altra aplicació, tanqueu-lo i torneu-lo a afegir.</li>" + "</ul>" + "<br>No podeu afegir carpetes al dipòsit.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Els ${0} elements següents no es poden afegir al dipòsit: ${1}",
		add_document_multiple_items_error_explanation: "Un problema amb un dels elements impedeix que els elements s'afegeixin al dipòsit. Aquest error es produeix per un dels motius següents:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Esteu intentant afegir un document que s'ha mogut o suprimit.</li>" + "<li>Esteu intentant afegir un document al qual se li ha canviat el nom.</li>" + "<li>Esteu intentant afegir un document que està malmès.</li>" + "<li>Esteu intentant afegir un document que està obert en una altra aplicació.</li>" + "<li>Esteu intentant afegir una carpeta al dipòsit.</li>" + "<li>No disposeu dels permisos adequats en el sistema operatiu per poder accedir al document.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Realitzeu l'acció apropiada per resoldre el problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si el document s'ha mogut o reanomenat, cerqueu el document al sistema de fitxers i proveu d'afegir els elements una altra vegada.</li>" + "<li>Si el document està obert en una altra aplicació, tanqueu-lo i torneu a afegir els elements.</li>" + "<li>Si un document s'ha suprimit o s'ha malmès, desseleccioneu l'element i torneu a afegir els elements restants una altra vegada.</li>" + "</ul>" + "<br>No podeu afegir carpetes al dipòsit.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "No podeu arrossegar i deixar anar elements des d'aquesta ubicació.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "L'objecte eforms no es pot obrir.",
		open_forms_work_object_error_explanation: "El client web no admet el tipus de plantilla d'entrada de política de flux de treball.",
		open_forms_work_object_error_userResponse: "Obriu un document diferent.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "No es pot obrir el document.",
		viewer_privilege_to_view_error_explanation: "No teniu els privilegis adequats per visualitzar el document.",
		viewer_privilege_to_view_error_userResponse: "Demaneu al propietari del document o a l'administrador del sistema que us donin els permisos adequats per visualitzar el document.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Els elements no es poden afegir al dipòsit.",
		add_document_too_many_items_error_explanation: "Podeu afegir fins a ${0} elements alhora. Esteu intentant afegir ${1} elements.",
		add_document_too_many_items_error_userResponse: "Elimineu alguns dels elements de la llista i proveu d'afegir els elements de nou. També us podeu posar en contacte amb l'administrador del sistema per tal que augmenti el nombre màxim de documents que podeu afegir a la vegada en l'escriptori.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Una connexió al client web no es pot establir utilitzant el següent URL: ${0}.",
		http_ltpa_expired_explanation: "La clau LTPA que està associada amb la sessió de navegació està caducada.",
		http_ltpa_expired_userResponse: "Reinicieu el navegador web i torneu a iniciar sessió. Si el problema persisteix, informeu de l'error següent a l'administrador del sistema: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "No s'ha afegit el document a la carpeta ${0}.",
		dnd_no_privilege_error_explanation: "Els permisos a la carpeta eviten que els documents s'afegeixin a la carpeta.",
		dnd_no_privilege_error_userResponse: "Afegiu el document a una carpeta diferent.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Els elements no es poden modificar.",
		modify_document_too_many_items_error_explanation: "Podeu modificar fins a ${0} elements alhora. Esteu intentant modificar ${1} elements.",
		modify_document_too_many_items_error_userResponse: "Seleccioneu menys elements i torneu a modificar els elements. També us podeu posar en contacte amb l'administrador del sistema per tal que augmenti el nombre màxim d'elements que podeu modificar a la vegada en l'escriptori.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "No podeu utilitzar la classe ${0}.",
		add_document_multiple_unique_values_error_explanation: "La classe ${0} conté una o més propietats que necessiten un valor exclusiu en cada document. Quan afegiu diversos documents, tots els documents utilitzaran els mateixos valors.",
		add_document_multiple_unique_values_error_userResponse: "Seleccioneu una altra classe o afegiu els documents de forma separada.",
		add_document_multiple_unique_values_error_0: "nom_visualització_classe",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "No podeu utilitzar la plantilla d'entrada ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "La plantilla d'entrada ${0} necessita que afegiu documents a la classe ${1}. No obstant això, la classe ${1} conté una o més propietats que necessiten un valor exclusiu en cada document. Quan afegiu diversos documents, tots els documents utilitzaran els mateixos valors.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Seleccioneu una plantilla d'entrada diferent o afegiu els documents de forma separada.",
		add_document_multiple_unique_values_entry_template_error_0: "nom_plantilla_entrada",
		add_document_multiple_unique_values_entry_template_error_1: "nom_visualització_classe",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "No podeu utilitzar la plantilla d'entrada ${0}.",
		entry_template_class_restricted_error_explanation: "La plantilla d'entrada afegeix elements utilitzant la classe ${1}, però no teniu els permisos adequats per afegir elements elements mitjançant aquesta classe.",
		entry_template_class_restricted_error_userResponse: "Seleccioneu una altra plantilla d'entrada o demaneu a l'administrador del sistema que us doni els permisos adequats per afegir elements utilitzant la clase ${1}.",
		entry_template_class_restricted_error_0: "nom_plantilla_entrada",
		entry_template_class_restricted_error_1: "nom_visualització_classe",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "L'element de treball s'ha reassignat a un altre usuari.",
		process_reassign_error_explanation: "El flux de treball ha prohibit aquesta acció.",
		process_reassign_error_userResponse: "Obriu l'element de treball i completeu el pas actual a l'element de treball.  Per obtenir més informació sobre aquest problema, demaneu al propietari de l'element per comprovar que l'element de treball es pot tornar a assignar.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "L'acció personalitzada següent no es pot carregar: ${0}.",
		customaction_loadurl_error_explanation: "L'acció personalitzada no està en una ubicació accessible. L'URL actual de l'acció personalitzada és ${1}.",
		customaction_loadurl_error_userResponse: "Demaneu a l'administrador que mogui l'acció personalitzada a una ubicació accessible.",
		customaction_loadurl_error_adminResponse: "El fitxer JSP que defineix l'acció personalitzada l'ha de proporcionar com a part de l'aplicació web eClient o l'aplicació web de l'IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "La característica següent no es pot trobar: ${0}.",
		feature_invalid_explanation: "El problema es pot produir si la característica no està disponible a l'escriptori especificat o el nom de la característica s'ha escrit incorrectament.",
		feature_invalid_userResponse: "Quan feu clic a D'acord, se us redirigirà al valor per defecte en aquest escriptori. Poseu-vos en contacte amb l'administrador del sistema per informar d'aquest problema.",
		feature_invalid_adminResponse: "Si la característica ha d'estar disponible a l'escriptori, actualitzeu la configuració de l'escriptori a l'eina d'administració. Si la característica no s'inclou a l'escriptori o s'ha escrit incorrectament, treballeu amb el desenvolupador d'aplicacions que ha creat l'URL per actualitzar a l'URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "La cerca ${0} no es pot obrir.",
		search_unsupportedTeamspaceSearch_error_explanation: "Heu de ser en un espai d'equip per obrir la cerca.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Seleccioneu una altra cerca.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "El fitxer següent no es pot importar: ${0}.",
		wrong_import_file_type_error_explanation: "El fitxer ha de ser un fitxer de propietats.",
		wrong_import_file_type_error_userResponse: "Seleccioneu el fitxer de propietats que heu exportat des de l'eina d'administració.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "El dipòsit ${0} no es troba a l'escriptori ${1}.",
		browse_repository_not_found_error_explanation: "El dipòsit ha d'estar a l'escriptori i habilitat a la característica de navegació quan s'especifica en un paràmetre d'URL.",
		browse_repository_not_found_error_userResponse: "Assegureu-vos que l'ID de dipòsit especificat a l'URL és correcte, el dipòsit s'ha afegit a l'escriptori ${1} i la característica de navegació està habilitada al dipòsit.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "El dipòsit ${0} no està habilitat a la característica de navegació a l'escriptori ${1}.",
		browse_repository_not_enabled_error_explanation: "El dipòsit ha d'estar habilitat a la característica de navegació quan s'especifica en un paràmetre d'URL.",
		browse_repository_not_enabled_error_userResponse: "Habiliteu la característica de navegació al dipòsit ${0} a l'escriptori ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "La cerca no es pot completar perquè l'enllaç inclou els criteris no vàlids.",
		invalid_xt_stored_search_criteria_error_explanation: "El valor següent no és vàlid: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Demaneu a l'administrador del sistema que proporcioni un enllaç actualitzat.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Editeu el parell de valor-nom apropiat a l'URL. Si no sabeu quins valors són vàlids a la propietat, obriu la cerca emmagatzemada al dissenyador de cerques de FileNet Workplace XT per determinar un valor vàlid.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "La cerca entre dipòsits no es pot obrir.",
		unified_search_invalid_fixed_value_error_explanation: "La cerca entre dipòsits inclou criteris no vàlids. Aquest problema es pot produir quan un criteri té un valor fix que no és compatible amb les altres propietats en un mapatge. Per exemple, aquest problema es pot produir si el valor fix és una sèrie però la resta de propietats del mapatge són números enters.",
		unified_search_invalid_fixed_value_error_userResponse: "Si teniu els permisos adequats per editar la cerca, elimineu els criteris no vàlids i deseu la cerca una altra vegada. Si no teniu els permisos adequats per editar la cerca, demaneu al propietari de la cerca o a l'administrador que desin la cerca una altra vegada.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "La vostra sol·licitud no es pot completar.",
		launch_action_invalid_json_error_explanation: "Les dades passades al client web no són vàlides.",
		launch_action_invalid_json_error_userResponse: "Dieu a l'administrador del sistema quina aplicació fèieu servir quan s'ha produït aquest problema.",
		launch_action_invalid_json_error_adminResponse: "L'aplicació de client no ha enviat un objecte JSON vàlid al client web. Poseu-vos en contacte amb l'IBM Software Support per obtenir ajuda addicional.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "La vostra sol·licitud no es pot completar.",
		launch_action_not_found_error_explanation: "L'acció ${0} no s'ha configurat per cap menú de l'escriptori ${1}.",
		launch_action_not_found_error_userResponse: "Demaneu a l'administrador del sistema que configuri l'escriptori ${1} per tal que utilitzi un menú que contingui l'acció ${0} o que us assigni un escriptori que inclogui l'acció ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "La vostra sol·licitud no es pot completar.",
		launch_action_repository_not_found_error_explanation: "El dipòsit ${0} no s'ha associat a l'escriptori ${1}.",
		launch_action_repository_not_found_error_userResponse: "Demaneu a l'administrador del sistema que associï el dipòsit ${0} a l'escriptori ${1} o que us assigni a un escriptori que inclogui el dipòsit ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "L'espai d'equip no es pot obrir.",
		teamspace_cannot_open_error_explanation: "La funció d'espai d'equip no està configurada en aquest escriptori.",
		teamspace_cannot_open_error_userResponse: "Demaneu a l'administrador del sistema si podeu tenir accés a un escriptori que inclogui la funció d'espai d'equip o si es pot actualitzar l'escriptori per incloure la funció d'espai d'equip.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "S'ha produït un error en incorporar el contingut redactat.",
		viewer_redaction_checkin_failed_explanation: "El visualitzador ha rebut una resposta d'error en incorporar contingut redactat.",
		viewer_redaction_checkin_failed_userResponse: "Demaneu a l'administrador del sistema que revisi els fitxers de registre del servidor d'aplicacions web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "No podeu afegir documents a aquest dipòsit.",
		add_document_odserver_odwek_version_od_error_explanation: "La versió actual del servidor IBM Content Manager OnDemand o ODWEK no té el nivell mínim necessari per admetre la funció d'afegir documents a un dipòsit del Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Demaneu a l'administrador que comprovi les versions del Content Manager OnDemand Server i de l'ODWEK que són necessàries per admetre la funció d'afegir documents a dipòsits del Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Els elements no es poden afegir al dipòsit.",
		add_document_too_many_items_od_error_explanation: "Per als dipòsits de l'IBM Content Manager OnDemand, només podeu afegir un element cada vegada.",
		add_document_too_many_items_od_error_userResponse: "Elimineu alguns dels elements de la llista i torneu a provar d'afegir els elements d'un en un.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "L'element no es pot afegir al dipòsit.",
		add_document_filesize_empty_od_error_explanation: "No podeu afegir fitxers buits a un dipòsit de l'IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Afegiu contingut al fitxer i torneu a provar d'afegir el fitxer o afegiu un element diferent.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "La cerca entre dipòsits no es pot obrir.",
		unified_search_repository_not_found_error_explanation: "La cerca entre dipòsits inclou un o més dipòsits no vàlids. Aquest problema es pot produir quan els dipòsits s'inclouen a la cerca se suprimeixen de l'aplicació o s'eliminen de l'escriptori actual.",
		unified_search_repository_not_found_error_userResponse: "Si teniu els permisos adequats per editar la cerca, torneu a desar la cerca. Quan deseu la cerca, el client web elimina els dipòsits no vàlids des de la cerca. Si no teniu els permisos adequats per editar la cerca, demaneu al propietari de la cerca o a l'administrador que desin la cerca una altra vegada.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "No es pot crear un document.",
		edit_document_using_office_online_error: "No es pot obrir el document.",
		edit_document_using_office_online_error_explanation: "No s'ha configurat l'URL del servidor del Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse: "Per poder utilitzar l'Office Online, l'administrador primer ha d'habilitar el servidor de l'Office Online Server en un dipòsit i especificar l'URL del servidor del Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "El document no es pot obrir al Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Demaneu a l'administrador que actualitzi la integració del servidor de l'MS Office Online.<br><br> Si l'usuari necessita accedir a aquest document des del Microsoft Office Online, aneu a la pàgina Edita integració del dipòsit i actualitzeu la integració del servidor de l'MS Office Online per incloure la classe a la llista de classes que pot modificar el suport de l'Office Online. ",		
		browser_not_support_this_viewer: "El visualitzador configurat no és compatible amb el vostre navegador.",
		browser_not_support_this_viewer_explanation: "${0} no està suportat al navegador.",
		browser_not_support_this_viewer_userResponse: "Utilitzeu un altre visualitzador per obrir el document. Trobareu una llista dels navegadors suportats al document <i>Prerequisits de maquinari i programari de l'IBM Content Navigator</i> al lloc de suport de l'IBM Software.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informació del flux de treball",
		process_information_info_text: "L'element seleccionat s'està executant actualment en els fluxos de treball següents.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Igual",
		operator_NOTEQUAL: "No igual",
		operator_LIKE: "Semblant",
		operator_STARTSWITH: "Comença per",
		operator_ENDSWITH: "Acaba per",
		operator_NOTLIKE: "No semblant",
		operator_NULL: "Està buit",
		operator_NOTNULL: "No està buit",
		operator_LESS: "Més petit que",
		operator_LESSOREQUAL: "Més petit o igual",
		operator_GREATER: "Més gran que",
		operator_GREATEROREQUAL: "Més gran o igual",
		operator_BETWEEN: "Entre",
		operator_NOTBETWEEN: "No entre",
		operator_IN: "Inclou tots els",
		operator_INANY: "Inclou qualsevol",
		operator_NOTIN: "Exclou tot",
		operator_CONTAINS: "Conté",

		/* SearchForm widget */
		search_button_tooltip: "Cerqueu documents que coincideixen amb els criteris.",
		reset_button_tooltip: "Restabliu la cerca als valors per defecte que ha definit l'administrador.",
		clear_button_tooltip: "Elimina tots els valors que heu especificat a la cerca.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Selecciona la cerca",
		append_to_search: "Afegeix a Cerca",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Cerca nova",
		new_unified_search: "Cerca entre dipòsits",
		searh_name_contains: "El nom de cerca conté",
		keep_search_criteria_expanded: "Manté oberts els criteris de cerca",
		showing_results: "S'estan mostrant els resultats de:",
		open_in_new_window: "Obre en una finestra nova",
		open_in_new_tab: "Obre en una pestanya nova",
		close_tab: "Tanca pestanya",
		add_repository: "Afegeix dipòsit",
		edit_repository: "Edita dipòsit",
		remove_repository: "Elimina",
		search_scope: "Abast de la cerca",
		search_class_template: "Classe",
		object_type_version: "Tipus d'objecte i versió",
		not_applicable: "No és aplicable",
		unified_search_including_subfolders: " (inclou subcarpetes)",
		unified_search_dialog_intro_text: "Seleccioneu el dipòsit i la cerca o les classes que voleu incloure a la cerca.",
		unified_search_class_or_template: "Classe o plantilla",

		select_object_fieldset_legend: "Com voleu cercar els elements que cal adjuntar:",
		select_object_create_new_search: "Cerca nova",
		select_object_search_template: "Cerca existent",

		search_criteria: "Criteris de cerca:",
		search_criteria_no_colon: "Criteris de cerca",
		search_in_multiple: "Cerca a (${0}):",
		search_location_including_subfolders: "${0} incloent-hi subcarpetes",
		search_class: "Classe:",
		search_class_multiple: "Classe (${0}):",
		search_class_including_subclasses: "${0} incloent-hi subclasses",
		search_class_all_pseudo: "Tots",
		search_results: "Resultats de la cerca",
		select_operator: "Selecciona un operador",
		ending_value: "El valor final de la propietat ${0} és:",
		search_options: "Opcions de cerca:",
		search_version: "Versió:",
		search_released_version: "Versió publicada",
		search_current_version: "Versió actual",
		search_all_versions: "Totes les versions",
		search_file_type_filter: "Filtre de tipus de fitxer:",
		search_one_file_type: "1 tipus de fitxer",
		search_many_file_types: "${0} tipus de fitxers",
		search_action_filter: "Filtre d'accions:",
		search_action_filter_hover_help: "Delimiteu els resultats per incloure només fitxers que els usuaris han dut a terme una acció específica.<br/>Per exemple, podeu cercar només els documents que heu afegit el 20 de setembre de 2012.",
		search_action_filter_enabled: "S'ha habilitat el filtre d'accions",
		search_enable: "Habilita",
		search_disable: "Inhabilita",
		search_by: "per",
		search_added: "Afegit",
		search_modified: "Modificat",
		search_checked_out: "Extret",
		search_date_operator_on: "Activat",
		search_date_operator_not_on: "Desactivat",
		search_date_operator_before: "Abans de",
		search_date_operator_after: "Després de",
		search_version_hover_help_p8: "Una versió està disponible en tots els usuaris. Un document que té una versió actual vol dir que un o més usuaris estan editant el document.",
		search_version_hover_help_cm: "Una versió actual és la versió més recent de l'element.",
		search_using: "Cerca els elements que coincideixen:",
		search_property_and_text_criteria: "Els valors de propietat i els criteris de text",
		search_property_or_text_criteria: "Els valors de propietat o els criteris de text",
		search_property_and_text: "La propietat i els criteris de text",
		search_property_or_text: "La propietat o els criteris de text",
		search_property_options: "Opcions de propietats:",
		search_property_option_match_all: "Totes les propietats",
		search_property_option_match_any: "Qualsevol de les propietats",
		search_property_option_match_all_summary: "Coincideix amb totes",
		search_property_option_match_any_summary: "Coincideix amb qualsevol",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Com a mínim, calen",
		search_content_size_filter: "Filtre de mida del contingut:",
		search_content_size_filter_any: "Qualsevol mida del contingut",

		/* Search work options */
		search_work_filter: "Filtre de l'element de treball:",
		search_work_filter_hover_help: "Delimiteu els resultats per incloure només els elements que estan en un flux de treball. Per exemple, podeu delimitar els resultats per incloure només els elements de treball que estan actius.<br /><br />Aquesta opció no s'aplica si voleu veure totes les versions dels elements que torna la cerca.",
		search_work_filter_enabled: "El filtre d'elements de treball està habilitat",
		search_work_filter_status: "Estat:",
		search_work_filter_step: "Pas:",
		search_work_filter_owner: "Propietari:",
		search_work_filter_status_all: "Tots els elements",
		search_work_filter_status_active: "Activa elements",
		search_work_filter_status_suspended: "Elements suspesos",
		search_work_filter_process_all: "Tots els fluxos de treball",
		search_work_filter_step_all: "Tots els passos",
		search_work_filter_owner_all: "Tots els usuaris",
		search_work_filter_step_error: "El nom del pas no existeix.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "No es pot completar la cerca sense obtenir-ne més informació. Introduïu un valor per com a mínim una condició.",
		search_insufficient_input_box: "No es pot completar la cerca sense obtenir-ne més informació. Introduïu els criteris de cerca o seleccioneu una plantilla de metadades.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "La cerca no es pot configurar perquè s'executi quan s'obra sense informació addicional. Introduïu un valor per com a mínim una condició.",
		search_member_required: "Per compartir la cerca amb usuaris i amb grups específics, seleccioneu com a mínim un usuari o un grup amb qui compartir la cerca.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Voleu tancar-ho sense desar els canvis?",
		search_prompt_close_all_without_save: "Voleu tancar totes les pestanyes sense desar els canvis?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Un dels tipus següents de criteris de cerca no són vàlids al dipòsit: ${0}. Per executar la cerca al client web, els criteris no vàlids s'han d'eliminar. Si deseu la cerca, els criteris no vàlids s'eliminaran. Si no voleu canviar la cerca, tanqueu-la.",
		search_invalid_repository: "Un o més dipòsits",
		search_invalid_class: "Una o més classes",
		search_invalid_folder: "Una o més carpetes",
		search_invalid_file_type: "Un o més tipus de fitxer",
		search_invalid_property: "Una o més propietats",
		search_invalid_text_search: "Criteris de cerca del text",
		search_invalid_work: "Criteris de filtre de l'element de treball",

		search_operator_pulldown_missing: "Cal un operador. Seleccioneu un operador del menú desplegable. Si no veieu cap operador, demaneu a l'administrador del sistema que comprovi la pestanya <b>Cerca</b> a l'eina d'administració per veure si tots els operadors estan ocults. Si és una cerca entre dipòsits, el menú desplegable no tindrà cap operador si les propietats que es correlacionen l'una amb l'altra no tenen cap operador en comú.",

		/*SearchBuilder */
		open_search_builder: "Cerca nova",
		document_type: "Classe",
		show_all_properties: "Mostra totes les propietats",
		text_search_label: "Cerca elements amb els termes següents:",
		text_search_place_holder: "Utilitzeu una combinació de termes i operadors: * ? o \"frases amb coincidències exactes\"",
		text_search_place_holder_box: "Utilitzeu una combinació de termes i operadors: AND, OR, NOT i \"frases amb coincidències exactes\"",
		text_search_place_holder_cascade_proximity: "Utilitzeu una combinació de termes i operadors: * o ?",
		text_search_place_holder_common: "Utilitzeu una combinació de termes i \"frases amb coincidències exactes\"",
		text_search_hover_help_p8: "Utilitzeu l'asterisc (*) o el signe d'interrogació (?) com a caràcter comodí. Utilitzeu cometes dobles (\"\") a les coincidències exactes.",
		text_search_hover_help_p8_only_crs: "Utilitzeu l'asterisc (*) o el signe d'interrogació (?) com a caràcter comodí. Utilitzeu cometes dobles (\"\") a les coincidències exactes. En especificar diversos termes, una cerca als dipòsits retorna elements que contenen alguns dels termes.",
		text_search_hover_help_cm: "Utilitzeu l'asterisc (*) o el signe d'interrogació (?) com a caràcter comodí. Utilitzeu cometes dobles (\"\") a les coincidències exactes. Utilitzeu el signe menys (-) per precedir termes que s'han d'excloure i el signe més (+) per precedir termes que s'han d'incloure.",
		text_search_hover_help_box: "Utilitzeu AND entre termes per tenir coincidències exactes en tots els termes. Utilitzeu OR entre termes per tenir una coincidència en algun dels termes. Utilitzeu cometes dobles (\"\") a les coincidències exactes. Precediu un terme amb NOT per excloure'l.",
		text_search_hover_help_common: "Utilitzeu cometes dobles (\"\") a les coincidències exactes. En especificar diversos termes, una cerca als dipòsits retorna elements que contenen tots els termes.",
		text_search_options: "Opcions de text:",
		text_search_options_hover_help: "Si utilitzeu qualsevol operador que no sigui cap caràcter comodí, seleccioneu operadors avançats.",
		text_search_option_any: "Qualsevol terme",
		text_search_option_all: "Tots els termes",
		text_search_option_proximity: "Dins la proximitat de paraules:",
		text_search_option_none: "Operadors avançats",
		text_search_option_authoring: "La cerca de text és:",
		text_search_option_authoring_hover_help: "Trieu una opció que determini com voleu que es posin a disposició dels usuaris els criteris de cerca de text. Si no voleu incloure cap criteri de cerca de text, oculteu l'opció. En cas contrari, podeu permetre que els criteris de cerca s'editin, siguin configurats pels usuaris o siguin només de lectura per als usuaris.",
		text_search_option_hide: "Oculta els criteris",
		text_search_option_hide_hover_help: "Seleccioneu aquesta opció si no voleu incloure qualsevol criteri de cerca de text a la cerca o permeteu que altres usuaris especifiquin criteris de cerca de text.",
		text_search_option_in: "A l'etiqueta HTML/XML ${0}",
		text_search_option_paragraph: "Al mateix paràgraf",
		text_search_option_sentence: "A la mateixa frase",
		text_search_option_vql: "Consulta VQL",
		text_search_option_none_hover_help: "Utilitzeu - per precedir termes que s'han d'excloure.",
		text_search_option_cascade_proximity_hover_help: "Restringeix els resultats de cerca en termes que apareixen en un abast de paraules que no inclouen frases exactes.",

		box_search_metadata: "Metadades:",
		box_search_select_template: "Selecciona plantilla",
		box_search_no_templates: "No hi ha plantilles disponibles",
		box_text_search_options_search_within: "Àmbit de cerca:",
		box_text_search_options_search_within_everything: "Tot",
		box_text_search_options_search_within_file_content: "Contingut del document",
		box_text_search_options_search_within_tags: "Etiquetes",
		box_text_search_options_limit_to: "Només cerca:",

		add_property: "Afegeix una propietat",
		edit_template: "Edita la Cerca",
		save_search: "Desa la cerca",
		search_template_name: "Nom:",
		search_template_desc: "Descripció",
		auto_run: "Executeu la cerca quan s'obri",
		show_in_tree: "Mostra la cerca a l'estructura de carpetes",
		show_in_tree_hover_help: "Si es desa una cerca a una carpeta, per defecte només es visualitza a la llista de continguts. Si seleccioneu aquesta opció, la cerca també es visualitza a l'arbre de carpetes a la visualització Navega.  Tanmateix, la cerca només es mostra a l'arbre de carpetes si deseu la cerca en una carpeta.",
		share_search_with: "Comparteix la cerca amb:",
		remove_member: "Elimina ${0}",
		ok_button_label: "D'acord",
		save_template: "Desa",
		save_template_title: "Si heu de cerca elements determinats sovint, deseu els criteris de cerca.",
		remove_criterion: "Elimina",
		apply_button_label: "Aplica",
		empty_search_results_pane: "Realitzeu una cerca per veure resultats.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Tot el dipòsit",

		repository_already_selected: "El dipòsit ${0} no es pot afegir a la cerca entre dipòsits perquè ja s'inclou a la cerca. <br/> No es pot incloure cap dipòsit a la cerca entre dipòsits. <br/>Seleccioneu un dipòsit diferent que s'ha d'incloure a la cerca entre dipòsits.",

		repository_limit_reached: "El dipòsit ${0} no es pot afegir a la cerca entre dipòsits. Podeu afegir un màxim de ${1} dipòsits a la cerca.",

		nomore_criteria_toappend: "Totes les propietats assignades ja s'inclouen als criteris de cerca. No s'ha afegit cap propietat als criteris de cerca.",
		nomore_criteria_toappend_regular: "Totes les propietats ja s'inclouen als criteris de cerca. No s'ha afegit cap propietat als criteris de cerca.",

		/* OD Save Search dialog */
		reload_label: "Torna a carregar",
		od_save_search_help_text: "Escriu un nom per la cerca o bé seleccioneu una cerca per substituir-la",
		public_access_label: "Permet que altres persones utilitzin la cerca",
		od_delete_search_help_text: "Selecciona les cerques que s'han de suprimir",
		delete_save_searches: "Suprimeix les cerques desades",

		/* Unified Search */
		unified_search_enable_text_search: "Inclou criteris de cerca de text",
		unified_search_text_search_enabled: "Cerca de text inclosa",
		unified_search_mapping: "Mapatge",
		unified_search_new_mapping: "Nou mapatge",
		unified_search_mapping_name: "Nom del mapatge",
		unified_search_mapping_dialog_instructions: "Seleccioneu les propietats que voleu mapar. Algunes propietats es poden mapar a propietats amb un tipus de dades diferent. Per exemple, podeu mapar una propietat de cadena en una propietat d'enters. Quan mapeu una propietat en una altra propietat, les propietats es tracten com una propietat única a la cerca entre dipòsits.",
		unified_search_filter_available_properties: "Filtra propietats disponibles",
		unified_search_available_properties: "Propietats disponibles",
		unified_search_mapped_properties: "Propietats mapades",
		unified_search_single_values: "Valors únics",
		unified_search_multiple_values: "Diversos valors",
		unified_search_add_mapping: "Afegeix mapatge",
		unified_search_warn_remove_repository: "El dipòsit seleccionat s'utilitza en els criteris de cerca.\nSi elimineu el dipòsit, els mapatges i els criteris de cerca que inclouen el dipòsit se suprimiran.\n\nVoleu eliminar el dipòsit?",
		unified_search_warn_update_repository_mappings: "El canvi de selecció de propietat d'aquest dipòsit afecta als criteris de cerca.\n\nEls criteris de cerca  inclouen un o més mapatges que inclouen una o més propietats que esteu eliminant. Cal suprimir tots els mapatges que incloguin propietats que estigueu eliminant. Tots els criteris de cerca que incloguin aquests mapatges s'han de suprimir per poder executar la cerca.\n\nVoleu actualitzar les opcions del dipòsit i suprimir els mapatges i els criteris de cerca?",
		unified_search_warn_update_repository_mappings_reset: "Incloure criteris de cerca de text d'aquest dipòsit afecta als criteris de cerca entre dipòsits.\n\nEls criteris de cerca de propietat que inclouen un mapatge amb propietats per a aquest dipòsit s'han d'esborrar per poder executar la cerca.\n\nVoleu actualitzar les opcions del dipòsit i esborrar els criteris de cerca?",
		unified_search_warn_update_repository_text_criteria: "L'eliminació dels criteris de cerca de text d'aquest dipòsit afecten als criteris de cerca entre dipòsits.\n\nEls criteris de cerca de text s'han de suprimir dels criteris de cerca de text entre dipòsits per poder executar la cerca.\n\nVoleu actualitzar l'opció del dipòsit i suprimir els criteris de cerca de text?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "L'eliminació dels criteris de cerca de text i el canvi de la selecció de propietats d'aquest dipòsit afecten als criteris de cerca entre dipòsits.\n\nEls criteris de cerca de text s'han de suprimir dels criteris de cerca entre dipòsits per poder executar la cerca. A més a més, els criteris de cerca de propietat, inclouen un o més mapatges que inclouen una o més propietats que esteu eliminant. Cal suprimir tots els mapatges que incloguin propietats que estigueu eliminant. Tots els criteris de cerca que incloguin aquests mapatges s'han de suprimir per poder executar la cerca.\n\nVoleu  actualitzar les opcions del dipòsit i suprimir els criteris de cerca de text, mapatges i criteris de cerca de propietats?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Excloure criteris de cerca de text d'aquest dipòsit afecta als criteris de cerca entre dipòsits.\n\nEls criteris de cerca de propietat que inclouen un mapatge amb propietats per a aquest dipòsit s'han d'esborrar per poder executar la cerca. Els criteris de cerca de text es poden suprimir dels criteris de cerca entre dipòsits per poder executar la cerca.\n\nVoleu actualitzar les opcions del dipòsit i esborrar els criteris de cerca?",
		unified_search_warn_remove_mapping: "L'eliminació d'aquest mapatge afecta als criteris de cerca.\n\nEls criteris de cerca que utilitzen el mapatge s'han de suprimir per poder executar la cerca.\n\nVoleu actualitzar el mapatge i suprimir els criteris de cerca?",
		unified_search_warn_update_mapping: "Els canvis en aquest mapatge afecten als criteris de cerca.\n\nEls criteris de cerca que utilitzen el mapatge s'han d'esborrar per a què la cerca no inclogui operadors no vàlids o valors no vàlids.\n\nVoleu actualitzar el mapatge i esborrar els criteris de cerca?",
		unified_search_warn_update_mapping_not_searchable: "Els canvis en aquest mapatge afecten als criteris de cerca.\n\nQuan les propietats mapades són només de visualització, no podeu utilitzar el mapatge en els criteris de cerca. Els criteris de cerca que utilitzen el mapatge s'han de suprimir per poder executar la cerca.\n\nVoleu actualitzar el mapatge i suprimir els criteris de cerca?",
		unified_search_warn_update_mapping_box_searchable: "Els canvis en aquest mapatge afecten als criteris de cerca.\n\nEls criteris de cerca ja inclouen aquest mapatge més d'una vegada i si afegiu la propietat ${0} del dipòsit ${1}, els criteris de cerca inclouen la propietat ${0} massa vegades. Els criteris de cerca que utilitzen el mapatge s'han de suprimir per poder executar la cerca.\n\nVoleu actualitzar el mapatge i suprimir els criteris de cerca?",
		unified_search_details: "Informació detallada de la cerca entre dipòsits",
		unified_search_fixed_value_property: "Propietat de valor fix",
		unified_search_required_property: "Propietat necessària",
		unified_search_display_only_property: "Propietat només de visualització",
		unified_search_missing_required_properities: "La cerca no es pot desar ni executar.<br/>Les propietats següents són les propietats necessàries:${0}Heu d'incloure les propietats en un mapatge i afegiu les propietats amb valors als criteris de cerca.",
		unified_search_property_repostory: "${0} (Dipòsit: ${1})",
		unified_search_builder_no_mappings: "La cerca no es pot executar.<br/>Heu de crear una assignació de propietats i incloure-la en la <b>Visualització de resultats</b> per a què la cerca pugui visualitzar els vostres resultats.",
		unified_search_builder_insufficient_criteria_to_run: "La cerca no es pot executar.<br/>Els criteris de cerca no inclouen els criteris de cerca de text ni valors de propietat per als següents dipòsits:${0}Per a cada dipòsit que s'inclogui en la cerca, heu d'introduir criteris de cerca de text, o crear una assignació de propietats, incloure'ls en els criteris de propietat i especificar un valor de propietat.",
		unified_search_builder_insufficient_criteria_to_save: "No s'ha pogut desar cap cerca.<br/>La cerca no inclou criteris de cerca per als següents dipòsits: ${0}Per a cada dipòsit que s'inclou en la cerca, heu d'efectuar una de les següents opcions:<ol><li>heu de crear una assignació de propietats i incloure-la en els criteris de propietat.</li><li>Modifiqueu el dipòsit per a que inclogui els criteris de cerca de text i creeu una assignació de propietats per a incloure-la en la <b>Visualització de resultats</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "La cerca no es pot executar.<br/>Per cada dipòsit que s'inclogui a la cerca, heu d'especificar com a mínim un valor de propietat. Per exemple, podeu especificar valors per a les propietats següents: ${0}",
		unified_search_runtime_insufficient_criteria_text: "La cerca no es pot executar.<br/>Es necessiten criteris de cerca de text.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "La cerca no es pot executar.<br/>Per cada dipòsit que s'inclogui a la cerca, heu d'especificar com a mínim un valor de propietat o introduir criteris de cerca de text. Per exemple, podeu especificar valors per a les propietats següents: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "La cerca no es pot executar.<br/>Es necessiten criteris de cerca de text. Per cada dipòsit que s'inclogui a la cerca, heu d'especificar com a mínim un valor de propietat o introduir criteris de cerca de text. Per exemple, podeu especificar valors per a les propietats següents: ${0}",
		unified_search_invalid_criteria: "La cerca conté criteris no vàlids que eviten que els criteris de cerca s'executin.<br/>S'han eliminat els criteris que no són vàlids. No obstant això, heu de desar els canvis a la cerca abans de poder-la executar. Si no voleu desar els canvis, tanqueu-la.<br/><br/>Els elements següents s'han extret o modificat: ${0}",
		unified_search_invalid_fixed_values: "La cerca no es pot desar ni executar.<br/>Els criteris de cerca següents tenen valors fixos que no són vàlids:${0}Realitzeu una de les accions següents per resoldre el problema:<ul><li>Elimineu els criteris de cerca que contenen valors no vàlids</li><li>Editeu els mapatges que inclouen la propietat de l'IBM Content Manager l'OnDemand amb el valor fix per eliminar la propietat.</li><li>Editeu els mapatges que inclouen la propietat de l'IBM Content Manager l'OnDemand amb el valor fix per tal que totes les propietats siguin compatibles. Per obtenir més informació sobre quines propietats es poden mapar, consulteu l'enllaç Més informació en el text d'introducció a la part superior de la finestra de mapatge de propietats.</li></ul>",
		unified_search_cannot_add_properties: "No podeu afegir propietats a aquesta cerca.<br/>Totes les propietats mapades disponibles ja són als criteris de cerca i cada propietat només es pot afegir una vegada a la cerca.",
		unified_search_mapping_not_viewable: "Les propietats de la plantilla del Box no es poden mostrar als resultats de la cerca. Si voleu afegir aquest mapatge com a columna, heu de mapar almenys una propietat que no sigui una propietat de plantilla del Box. Per exemple, podeu seleccionar una propietat des d'un altre dipòsit.",

		unified_search_returned_more: "Com a mínim un dipòsit supera el màxim de resultats permès.",
		unified_search_partial_failure: "S'ha produït un error com a mínim a un dipòsit.",
		unified_search_partial_failure_and_returned_more: "S'ha produït un error com a mínim a un dipòsit i com a mínim un dipòsit ha superat el màxim de resultats permès.",
		unified_search_see_analysis: "Vegeu els resultats de l'anàlisi.",
		unified_search_analysis_intro_returned_more: "Per cada dipòsit que supera el màxim de resultats permès, proveu d'afinar els criteris de cerca per què tornin menys resultats. O podríeu executar una única cerca de dipòsit per retornar més resultats que el màxim permès per a una cerca entre dipòsits.",
		unified_search_analysis_intro_partial_failure: "Reviseu la informació de l'error retornat pel dipòsit o dipòsits. Si escau, resoleu els errors i executeu una altra vegada la cerca entre dipòsits.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Per cada dipòsit on s'ha produït un error, proveu de resoldre el problema i torneu a executar la cerca.<br/><br/>Per cada dipòsit que supera el màxim de resultats permès, proveu d'afinar els criteris de cerca per què tornin menys resultats. O podríeu executar una única cerca de dipòsit per retornar més resultats que el màxim permès per a una cerca entre dipòsits.",
		unified_search_results_found: "S'han trobat resultats",
		unified_search_maximum_allowed: "Màxim permès",
		unified_search_maximum_exceeded: "Màxim superat",

		unified_search_mapping_rule_box: "Aquesta propietat no es pot afegir al mapatge.<p>La propietat ${0} del dipòsit ${1} ja és en un altre mapatge i les propietats cercables d'aquest dipòsit només es poden afegir en un mapatge per cerca.<br/>Seleccioneu una propietat diferent per afegir-la al mapatge.</p>",
		unified_search_mapping_rule_repository: "La propietat no es pot afegir al mapatge.<br/>El mapatge ja inclou una propietat de dipòsit ${0}. Un mapatge només pot contenir una propietat des d'un dipòsit.<br/>Seleccioneu un altre dipòsit des del qual afegir una propietat o creeu un mapatge nou per la propietat seleccionada.",
		unified_search_mapping_rule_data_type: "La propietat no es pot afegir al mapatge.<br/>Una propietat ${0} no es pot assignar a una propietat ${1}. Seleccioneu una propietat diferent per assignar-la o creeu un mapatge nou per la propietat seleccionada.<br/>Per obtenir més informació sobre quines propietats es poden mapar, consulteu l'enllaç Més informació en el text d'introducció a la part superior de la finestra.",
		unified_search_mapping_rule_cardinality: "La propietat no es pot afegir al mapatge.<br/>Totes les propietats del mapatge han de donar suport a valors simples o a diversos valors. La propietat seleccionada admet ${0} i les propietats del mapatge admeten ${1}.<br/>Seleccioneu una propietat diferent per afegir-la al mapatge o creeu un mapatge nou per la propietat seleccionada.",
		unified_search_mapping_rule_fixed_value: "La propietat no es pot afegir al mapatge.<br/>El mapatge ja inclou una propietat amb un valor fix. Un mapatge només pot contenir una propietat amb un valor fix.<br/>Seleccioneu una propietat diferent per afegir-la al mapatge o creeu un mapatge nou per la propietat seleccionada.",
		unified_search_mapping_rule_child_component: "La propietat no es pot afegir al mapatge.<br/>Una propietat amb un component secundari no es pot mapar amb altres propietats. Si voleu cercar en aquesta propietat, creeu un mapatge nou per la propietat seleccionada.",
		unified_search_mapping_rule_operator_intersection: "La propietat no es pot afegir al mapatge.<br/>Totes les propietats del mapatge han de tenir un o més operadors en comú. No obstant això, la propietat ${0} no té cap operador en comú amb les altres propietats del mapatge.<br/>Si és convenient, seleccioneu un altre propietat. Si heu d'incloure la propietat seleccionada, treballeu amb el vostre administrador del sistema per editar els operadors que estan associats amb la propietat.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Paràmetres avançats",
		advanced_search_options_intro: "Definiu opcions de criteris avançats.",
		advanced_search_options_editable: "Editable",
		advanced_search_options_readonly: "Només de lectura",
		advanced_search_options_required: "Necessari",
		advanced_search_options_hidden: "Ocult",
		advanced_search_options_property_editable:"La propietat és:",
		advanced_search_options_operators:"Operadors:",
		advanced_search_options_use_all:"Utilitza'ls tots",
		advanced_search_options_use_selected:"Utilitza els seleccionats",
		advanced_search_options_operators_filtered: "S'han filtrat els operadors",
		// Data types in lowercase
		data_type_boolean: "booleà",
		data_type_date: "data",
		data_type_time: "hora",
		data_type_timestamp: "marca horària",
		data_type_decimal: "valor decimal",
		data_type_double: "número de coma flotant",
		data_type_short: "enter",
		data_type_integer: "enter",
		data_type_long: "enter",
		data_type_string: "cadena de text",
		data_type_string_alpha: "cadena alfabètica",
		data_type_string_alphanum: "cadena alfanumèrica",
		data_type_string_ext: "cadena alfanumèrica ampliada",
		data_type_string_num: "cadena numèrica",
		data_type_binary: "binari",
		data_type_object: "objecte",
		data_type_guid: "identificador exclusiu globalment",
		data_type_user: "usuaris",
		data_type_child_component: "component secundari",

		/* Print Dialog */
		print_title: "Imprimeix",
		print_message: "S'està imprimint: ${0}",
		print_print_button: "Imprimeix",
		print_clean_margins_button: "Estableix Tot en 0",
		print_type: "Tipus d'impressora:",
		print_printer_server_options: "Opcions d'impressió del servidor",
		print_printer_properties: "Propietats de la impressora",
		print_printer_fax_properties: "Propietats de fax",
		print_printer_name: "Nom de la impressora:",
		print_fax_recipient: "Destinatari",
		print_fax_sender: "Emissor",
		print_copies: "Còpies:",
		print_local_orientation: "Orientació",
		print_local_orientation_landscape: "Horitzontal",
		print_local_orientation_portrait: "Vertical",
		print_local_margins: "Marges",
		print_local_margins_top: "Principi",
		print_local_margins_bottom: "Final",
		print_local_margins_left: "Esquerra",
		print_local_margins_right: "Dreta",
		print_printer_server: "Servidor",
		print_printer_local: "Local",
		print_property_class: "Classe:",
		print_property_routing: "Encaminament:",
		print_property_pagedef: "Definició de la pàgina:",
		print_property_node: "Node:",
		print_property_writer: "Escriptor:",
		print_property_formdef: "Definició del formulari:",
		print_property_printerid: "Destinació:",
		print_property_forms: "Formularis:",
		print_property_faxnotes: "Notes:",
		print_property_faxcompany: "Empresa:",
		print_property_faxnumber: "Número de fax:",
		print_property_faxname: "Nom:",
		print_property_faxsendertelnumber: "Número de telèfon:",
		print_property_faxcoverpage: "Portada:",
		print_property_faxsubject: "Assumpte:",
		print_saveoptions: "Desa les opcions d'impressió",
		print_property_bannerpage: "Utilitza la pàgina de bàner",
		print_print_with_info_fields: "Imprimeix amb camps d'informació",
		print_field_from: "De",
		print_field_to: "A",
		print_invalid_value_class: "Els caràcters vàlids són A-Z o 0-9",
		print_invalid_value_pagedef: "Els caràcters vàlids són caràcters alfabètics o numèrics o els caràcters @,# o $",
		print_invalid_value_writer: "Els caràcters vàlids són caràcters alfabètics o numèrics o els caràcters @,# o $",
		print_invalid_value_formdef: "Els caràcters vàlids són caràcters alfabètics o numèrics o els caràcters @,# o $",
		print_invalid_value_forms: "Els caràcters vàlids són caràcters alfabètics o numèrics o els caràcters @,# o $",
		print_invalid_value_margin: "Els números vàlids són entre ${0} i ${1}",
		print_status_message: "S'han enviat ${0} documents a la impressora ${1}.",

		print_applet_init_error: "La miniaplicació d'impressió no es pot iniciar.",
		print_applet_init_error_explanation: "Aquest problema es pot produir pels motius següents: <br/><br/><ul><li>El Java Runtime Environment (JRE) no està instal·lat a l'estació de treball.</li><li>El connector Java no està habilitat al vostre navegador web.</li><li>La versió JRE de la vostra estació de treball no és compatible amb la versió de l'IBM Content Navigator.</li><li>El navegador ha superat el temps d'espera esperant que s'iniciï la miniaplicació d'impressió.</li></ul>",
		print_applet_init_error_userResponse: "Podeu realitzar els passos següents per resoldre el problema amb el JRE:<br/><br/><ol><li>Assegureu-vos que el JRE està instal·lat a l'estació de treball.</li><li>Assegureu-vos que el connector Java està habilitat en el navegador web.</li><li>Assegureu-vos que la versió del JRE de l'estació de treball és compatible amb l'IBM Content Navigator i torneu-ho a provar. Una llista de les versions admeses s'inclou al document <i>Prerequisits de maquinari i programari d'IBM Content Navigator</i> al lloc de l'IBM Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Portada",
		daeja_print_selected_documents_title: "Documents seleccionats",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Coincideix amb tots els criteris de cerca",
		match_any_criteria: "Coincideix amb alguns criteris de cerca",
		include_subfolders_summary: "${0} (inclou subcarpetes)",
		browse_button: "Examina &hellip;",
		search_for: "Cerca:",
		object_type_documents: "Documents",
		object_type_folders: "Carpetes",
		object_type_documents_folders: "Documents i carpetes",
		object_type_web_links: "Enllaços web",
		object_type_documents_folders_web_links: "Documents, carpetes i enllaços web",

		/* SelectSearchFolderDialog */
		search_in: "Cerca a:",
		include_subfolders: "Inclou les subcarpetes",

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
		locked_item_icon_title: "Bloquejat per ${0}",
		checked_out_icon_title: "Extret per ${0}",
		major_minor_version_icon_title: "Versió principal amb versions secundàries",
		suspended_icon_title: "El flux de treball s'ha suspès",
		on_hold_icon_title: "En espera",
		has_notes_icon_title: "Té notes",
		record_icon_title: "És un registre",
		compound_document_icon_title: "Document compost",
		validateTemplate_icon_title: "La plantilla de l'espai d'equip necessita la validació",
		offlineTemplate_icon_title: "La plantilla de l'espai d'equip és fora de línia",
		offlineTeamspace_icon_title: "L'espai d'equip és fora de línia",
		pending_delete_icon_title: "L'espai d'equip està pendent d'eliminació",
		delete_error_icon_title: "L'espai d'equip no s'ha pogut eliminar",
		defaultTemplate_icon_title: "Plantilla de l'espai d'equip per defecte",
		teamspace_icon_title: "Espai d'equip",
		teamspace_template_icon_title: "Plantilla de l'espai d'equip",
		has_bookmark_icon_title: "Té una adreça d'interès",
		read_only_icon_title: "Només de lectura",
		no_results_were_found: "No s'ha trobat cap resultat.",
		folder_is_empty: "La carpeta està buida.",
		no_checked_out_items: "No teniu cap element extret.",
		inbasket_is_empty: "La safata d'entrada és buida.",
		worklist_is_empty: "La llista de treball està buida.",
		tracker_milestone_completed: "Completat",
		stepprocessor_attachments_title: "Continguts",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Bloqueja elements",
		unlock_items: "Desbloqueja elements",
		checkin_item: "Incorpora l'element",

		/* Help */
		learn_more: "Més informació",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Obre l'espai d'equip",
		repository_tab_createWorkspace: "Espai d'equip nou",
		repository_tab_createWorkspaceTemplate: "Plantilla de l'espai d'equip nova",
		repository_tab_DefaultTemplate: "Per defecte",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Aquesta tasca copia documents.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "No teniu privilegis per editar la plantilla d'espai d'equip seleccionada.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Esteu segur que voleu suprimir l'espai d'equip ${0}? <br><br>Només es mantenen al dipòsit els document que s'han arxivat en altres carpetes del dipòsit. Els documents que només s'han arxivat a l'espai d'equip es suprimiran.",
		teamspaceDecommissionLabel: "Suprimeix:",
		teamspaceDecommissionDescription: "La supressió de l'espai d'equip l'eliminarà del servidor: indiqueu com es tramitaran els artefactes de l'espai d'equip.",
		teamspaceDecommissionOptions: "Opcions de supressió de l'espai d'equip",
		teamspaceDecommissionDeleteAll: "Suprimeix tots els artefactes de l'espai d'equip",
		teamspaceDecommissionReFileAll: "Torna a obrir tots els artefactes de l'espai d'equip",
		teamspaceDecommissionReFileDestination: "Mou a:",
		teamspaceDecommissionReFileIn: "Torna a obrir a",
		teamspaceDecommissionTaskName: "Tasca de supressió de l'espai d'equip",
		teamspaceDecommissionTaskDescription: "Aquesta tasca suprimeix un espai d'equip del dipòsit.",
		teamspaceDecommissionDeletionStarted: "L'espai d'equip està planificat per a la supressió",
		teamspaceDecommissionDeletionConnectionFailed: "La tasca per suprimir un espai d'equip no s'ha pogut executar perquè no s'ha pogut establir connexió amb el dipòsit. Asseureu-vos que les credencials de l'administrador del dipòsit són correctes.",

		teamspace_edit_properties_notsupported: "Podeu editar les propietats dels espais d'equip només des de la visualització Espais d'equip.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "L'espai d'equip és fora de línia i només el poden obrir els propietaris",

		/* Teamspace Builder widget */
		workspace_validation_document: "Document:",
		workspace_validation_folder: "Carpeta:",
		workspace_validation_ets: "Les plantilles d'entrada següents no estan disponibles en el dipòsit i s'han d'eliminar de la llista de plantilles d'entrada seleccionades:",
		workspace_validation_classes: "Les classes següents no estan disponibles en el dipòsit i s'han d'eliminar de la llista de classes seleccionades:",
		workspace_validation_searches: "Les cerques següents no estan disponibles en el dipòsit i s'han d'eliminar de la llista de cerques seleccionades:",
		workspace_validation_docs_folders: "Els documents següents no estan disponibles en el dipòsit i s'han d'eliminar de la llista dels elements seleccionats:",
		workspace_change_template_confirmation_question: "Si seleccioneu una plantilla diferent, tots els canvis es perdran. Voleu continuar?\n",
		workspace_delete_item_confirmation_question: "Voleu eliminar l'element ${0}?\n",
		workspace_delete_role_confirmation_question: "Voleu eliminar el rol ${0}?\n",
		workspace_delete_confirmation_question: "Si elimineu un espai d'equip, només se suprimirà el contenidor d'espai d'equip. Les carpetes i els documents a l'espai d'equip es mantenen en el dipòsit i podeu trobar-los a la cerca. Per suprimir el contingut de l'espai d'equip, primer heu d'eliminar els elements de l'espai d'equip i, a continuació, suprimiu l'espai d'equip.<br><br>Voleu suprimir l'espai d'equip ${0}?",
		workspacebuilder_instance_template_name_header: "Nom de la plantilla de l'espai d'equip",
		workspacebuilder_instance_template_description_header: "Descripció",

		workspacebuilder_template_tooltip_name: "El nom de la plantilla no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",
		workspacebuilder_instance_tooltip_name: "El nom de l'espai d'equip no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",

		workspacebuilder_template_tooltip_description: "Proporcioneu una descripció que permeti als usuaris fer la selecció correcta des de la llista de plantilles. Per exemple, podeu incloure informació sobre els usuaris desitjats o l'ús de la plantilla.",
		workspacebuilder_instance_tooltip_description: "Proporcioneu una descripció que permeti als usuaris distingir entre l'espai d'equip i la resta d'espais d'equip.",

		workspacebuilder_template_edit_properties_pane: "Edita la plantilla de l'espai d'equip",
		workspacebuilder_instance_properties_pane: "Defineix espai d'equip",
		workspacebuilder_template_properties_pane: "Defineix plantilla de l'espai d'equip",

		workspacebuilder_instance_security_pane: "Configura seguretat d'espai d'equip",
		workspacebuilder_template_security_pane: "Configura seguretat de plantilla",

		workspacebuilder_layout_pane: "Selecciona un disseny",
		workspacebuilder_search_templates_pane: "Selecciona cerques",
		workspacebuilder_document_folders_pane: "Inclou carpetes i documents",
		workspacebuilder_doctypes_entryTemplates_pane: "Selecciona classes o plantilles d'entrada",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Selecciona classes",
		workspacebuilder_security: "Seguretat d'espai d'equip",

		workspacebuilder_roles_pane: "Selecciona els rols",
		workspacebuilder_security: "Seguretat",

		workspacebuilder_properties_templates: "Plantilles disponibles:",
		workspacebuilder_available_templates: "Cerques disponibles:",
		workspacebuilder_selected_templates: "Cerques seleccionades:",
		workspacebuilder_templates_name: "Nom de la cerca",

		workspacebuilder_available_entryTemplates: "Plantilles d'entrada disponibles:",
		workspacebuilder_selected_entryTemplates: "Plantilles d'entrada seleccionades:",

		workspacebuilder_item_classes: "Classes disponibles:",
		workspacebuilder_item_classes_selected: "Classes seleccionades:",
		workspacebuilder_properties_select_template: "Seleccioneu una plantilla que s'utilitzarà en l'espai d'equip.",
		workspacebuilder_template_properties: "Defineix plantilla de l'espai d'equip",
		workspacebuilder_instance_properties: "Defineix espai d'equip",
		workspacebuilder_template_introText: "Especifiqueu els components comuns que voleu incloure a cada espai d'equip que es creen a partir de la plantilla mitjançant les seleccions a la navegació. Quan hàgiu acabat, feu clic a <b>Finalitza</b> per tal que la plantilla estigui disponible a altres usuaris, qui la podran utilitzar per crear espais d'equip nous.",
		workspacebuilder_instance_introText: "Els equips utilitzen els espais d'equip per compartir i per treballar amb conjunts específics de documents. Proporcioneu un nom significatiu i una descripció a l'espai d'equip per tal que els usuaris distingeixin l'espai de treball d'altres espais d'equip. Podeu personalitzar l'espai d'equip incloent-hi cerques addicionals, classes o plantilles d'entrada, documents i carpetes.",

		workspacebuilder_template_search_template_introText: "Seleccioneu les cerques per defecte que voleu incloure a cada espai d'equip que es crea a partir d'aquesta plantilla. Si no se selecciona cap cerca, l'usuari d'espai d'equip veurà totes les cerques a les quals té accés. Amb els permisos adequats, els usuaris poden compartir i afegir les cerques a l'espai d'equip.",
		workspacebuilder_instance_search_template_introText: "Inclogueu les cerques que habilitaran els usuaris d'espai d'equip per completar tasques de manera més eficient. Si no s'inclou cap cerca, els usuaris d'espai d'equip veurà totes les cerques a les quals té accés. Els usuaris també poden afegir i compartir les cerques a l'espai d'equip amb els permisos adequats.",

		workspacebuilder_template_roles_introText: "S'assignen rols als usuaris d'espai d'equip. Els rols especifiquen les tasques que els usuaris poden dur a terme. Feu clic a les icones que hi ha al costat de cada rol per veure les tasques permeses. Trieu els rols adequats per l'espai d'equip.",
		workspacebuilder_template_roles_modify_introText: "Podeu modificar els permisos que estan associats amb cada rol a l'espai d'equip. Heu de notificar als membres de l'espai d'equip quan els seus permisos canviïn.",

		workspacebuilder_template_roles_header_name: "Nom del rol",

		workspacebuilder_template_folders_introText: "Seleccioneu els documents i les cerques per defecte que voleu incloure a cada espai d'equip que es crea a partir d'aquesta plantilla. Podeu afegir documents com a enllaços o com a còpies. Utilitzeu enllaços que assenyalin quins documents no en voleu diverses còpies, com ara polítiques o procediments. Creeu còpies dels documents que els usuaris podran modificar, com ara plantilles i formularis.",
		workspacebuilder_instance_folders_introText: "Seleccioneu els documents i les cerques per defecte que voleu incloure a l'espai d'equip. Podeu afegir documents com a enllaços o com a còpies. Utilitzeu enllaços que assenyalin quins documents no en voleu diverses còpies, com ara polítiques o procediments. Creeu còpies dels documents que els usuaris podran modificar, com ara plantilles i formularis.",

		workspacebuilder_template_roles_introText: "Especifiqueu els rols que s'inclouran a cada espai d'equip que es creï a partir d'aquesta plantilla. També podeu crear rols nous, que podreu utilitzar quan creeu altres plantilles de l'espai d'equip.",
		workspacebuilder_instance_users_introText: "En un espai d'equip, cada usuari està assignat a una o més rols que especifiquen les tasques que l'usuari pot realitzar. Afegiu usuaris a l'espai d'equip i assigneu rols als usuaris.",

		workspacebuilder_instance_navigation_pane_title: "Generador d'espai d'equip",
		workspacebuilder_template_navigation_pane_title: "Generador de la plantilla d'espai d'equip",

		workspacebuilder_roles_roles_nopermissions: "No s'ha seleccionat cap permís per al rol {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Rols seleccionats:",
		workspacebuilder_roles_available_roles: "Rols disponibles:",
		workspacebuilder_roles_privilege_header: "Permís",
		workspacebuilder_roles_select_role: "Selecciona el rol",
		workspacebuilder_roles_select_permission: "Selecciona el permís",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Ja existeix un rol amb el nom {0}. Heu d'especificar un nom exclusiu pel rol. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nom del rol:",
		workspacebuilder_roles_edit_dialog_role_description: "Descripció del rol:",
		workspacebuilder_roles_edit_dialog_title_new: "Rol nou",
		workspacebuilder_roles_edit_dialog_title_edit: "Edita el rol",

		workspacebuilder_roles_privileges_header: "Permisos pel rol {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Permisos del document:",
		workspacebuilder_roles_priv_group_folder: "Permisos de la carpeta:",
		workspacebuilder_roles_priv_group_teamspace: "Permisos de l'espai d'equip:",
		workspacebuilder_roles_priv_group_item: "Permisos del document i de la carpeta:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Gestiona permisos",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Els usuaris amb aquests permisos poden gestionar l'accés a documents i a carpetes a l'espai d'equip. El permís inclou el permís als usuaris per suprimir, per editar propietats, per crear subcarpetes, etc.",

		workspacebuilder_roles_priv_deleteItems: "Suprimeix",
		workspacebuilder_roles_plbl_deleteItems: "Els usuaris amb aquests permisos poden suprimir documents i carpetes a l'espai d'equip.",

		workspacebuilder_roles_priv_createItems: "Crea",
		workspacebuilder_roles_plbl_createItems: "Els usuaris amb aquests permisos poden crear documents i carpetes a l'espai d'equip.",

		workspacebuilder_roles_priv_viewItemProperties: "Visualitza les propietats",
		workspacebuilder_roles_plbl_viewItemProperties: "Els usuaris amb aquests permisos poden veure documents i carpetes a l'espai d'equip, com ara les propietats del sistema.",

		workspacebuilder_roles_priv_modifyItemProperties: "Edita les propietats",
		workspacebuilder_roles_plbl_modifyItemProperties: "Els usuaris amb aquests permisos poden editar documents i carpetes a l'espai d'equip.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gestiona els permisos de la carpeta",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Els usuaris amb aquests permisos poden gestionar l'accés a documents i a carpetes a l'espai d'equip. El permís inclou el permís als usuaris per suprimir carpetes, per editar propietats de carpeta, per crear subcarpetes, etc.",

		workspacebuilder_roles_priv_deleteFolders: "Suprimeix carpetes",
		workspacebuilder_roles_plbl_deleteFolders: "Els usuaris amb aquests permisos poden suprimir carpetes a l'espai d'equip.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Edita les propietats de la carpeta",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Els usuaris amb aquests permisos poden editar les propietats de les carpetes a l'espai d'equip.",

		workspacebuilder_roles_priv_createSubfolders: "Crea subcarpetes",
		workspacebuilder_roles_plbl_createSubfolders: "Els usuaris amb aquests permisos poden crear carpetes a l'espai d'equip.",

		workspacebuilder_roles_priv_fileInFolders: "Afegeix a les carpetes",
		workspacebuilder_roles_plbl_fileInFolders: "Els usuaris amb aquests permisos poden afegir un enllaç des les carpetes als documents dins l'espai d'equip.",

		workspacebuilder_roles_priv_viewFolderProperties: "Visualitza les propietats de la carpeta",
		workspacebuilder_roles_plbl_viewFolderProperties: "Els usuaris amb aquests permisos poden veure les propietats de les carpetes a l'espai d'equip, com ara les propietats del sistema.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gestiona els permisos del document",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Els usuaris amb aquests permisos poden gestionar l'accés a documents a l'espai d'equip. El permís inclou el permís als usuaris per suprimir documents, per editar propietats del document, etc.",

		workspacebuilder_roles_priv_deleteDocuments: "Suprimeix els documents",
		workspacebuilder_roles_plbl_deleteDocuments: "Els usuaris amb aquests permisos poden suprimir documents a l'espai d'equip.",

		workspacebuilder_roles_priv_promoteVersions: "Augmenta de nivell les versions",
		workspacebuilder_roles_plbl_promoteVersions: "Els usuaris amb aquests permisos poden assignar un nou número de versió als documents a l'espai d'equip.",

		workspacebuilder_roles_priv_modifyContent: "Edita documents",
		workspacebuilder_roles_plbl_modifyContent: "Els usuaris amb aquests permisos poden editar el contingut dels documents a l'espai d'equip.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Edita les propietats d'un document",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Els usuaris amb aquests permisos poden editar les propietats dels documents a l'espai d'equip.",

		workspacebuilder_roles_priv_viewContent: "Visualitza documents",
		workspacebuilder_roles_plbl_viewContent: "Els usuaris amb aquests permisos poden veure documents a l'espai d'equip.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Visualitza les propietats d'un document",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Els usuaris amb aquests permisos poden veure les propietats dels documents a l'espai d'equip, com ara les propietats del sistema.",

		workspacebuilder_roles_priv_addNewSearches: "Afegeix cerques",
		workspacebuilder_roles_plbl_addNewSearches: "Els usuaris amb aquests permisos poden afegir cerques a l'espai d'equip. Per defecte, la cerca no està disponible per la resta d'usuaris.",

		workspacebuilder_roles_priv_createNewSearches: "Crea cerques",
		workspacebuilder_roles_plbl_createNewSearches: "Els usuaris amb aquests permisos poden crear cerques noves però no les poden desar. Si els usuaris no tenen aquest permís, no podran afegir documents que ja són al dipòsit a l'espai d'equip.",

		workspacebuilder_roles_priv_shareSearches: "Comparteix cerques",
		workspacebuilder_roles_plbl_shareSearches: "Els usuaris amb aquests permisos poden compartir les cerques que creïn amb altres usuaris a l'espai d'equip.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gestiona classes o plantilles d'entrada",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Els usuaris amb aquests permisos poden afegir i eliminar classes o plantilles d'entrada des l'espai d'equip.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gestiona classes",
		workspacebuilder_roles_plbl_addRemoveClasses: "Els usuaris amb aquests permisos poden afegir i eliminar classes des l'espai d'equip.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gestiona els usuaris de l'espai d'equip",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Els usuaris amb aquests permisos poden afegir i eliminar usuaris des l'espai d'equip. A més a més, poden gestionar quins rols se'ls assignen.",

		workspacebuilder_roles_priv_modifyRoles: "Modifica els rols",
		workspacebuilder_roles_plbl_modifyRoles: "Els propietaris poden modificar els permisos de rol de l'espai d'equip. Aquest permís només està disponible per propietaris.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Selecciona usuaris",
		workspacebuilder_users_add_users_and_groups_button: "Afegeix usuaris i grups...",
		workspacebuilder_users_users_or_group_header: "Usuaris i grups",
		workspacebuilder_users_roles_header: "Rols",

		workspacebuilder_users_role_header: "Rol",
		workspacebuilder_users_role_no_permissions: "Aquest rol no té cap permís",
		workspacebuilder_users_available_roles_label: "Rols disponibles:",
		workspacebuilder_users_selected_users_and_groups_label: "Usuaris i grups seleccionats:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "No s'ha pogut desar cap espai d'equip. Heu d'especificar com a mínim un propietari de l'espai d'equip.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "No s'ha pogut desar cap espai d'equip. S'ha d'assignar un rol a tots els usuaris.",
		// end of select users

		workspacebuilder_search_templates: "Selecciona cerques",
		workspacebuilder_search_add: "Afegeix cerca",
		workspacebuilder_properties_workspaceName: "Nom de l'espai d'equip:",
		workspacebuilder_properties_templateName: "Nom de la plantilla:",
		workspacebuilder_properties_workspaceDescription: "Descripció de l'espai d'equip:",
		workspacebuilder_properties_templateDescription: "Descripció de la plantilla:",
		workspacebuilder_properties_workspaceTemplate: "Plantilla seleccionada:",
		workspacebuilder_properties_security: "Comparteix plantilla amb:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Mou de l'espai d'equip:",
		moveTeamspaceDocuments_security: "Comparteix document amb:",
		moveTeamspaceDocuments_security_change: "Especifiqueu la seguretat personalitzada per als elements seleccionats",
		moveTeamspaceDocuments_item_type_level: "No podeu seleccionar que se sobreescrigui la seguretat dels elements seleccionats perquè la classe de l'element seleccionat està configurada per utilitzar només seguretat de nivell de classes",
		moveTeamspaceDocuments_security_inherit: "Hereta seguretat des de la carpeta de destinació",
		moveTeamspaceDocuments_file_info_text: "Podeu moure els elements d'un espai d'equip a un altre espai de treball o carpeta.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "No teniu permisos adequats per moure els elements a la carpeta seleccionada.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "No teniu permisos adequat per moure els elements des de l'espai d'equip.",
		moveTeamspaceDocuments_move_mixed_items: "No podeu sobreescriure la seguretat dels elements seleccionats. Alguns dels elements no estan gestionats per l'espai d'equip. Només podeu alterar la seguretat dels elements gestionats per l'espai d'equip.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Heu d'especificar un nom per l'espai d'equip.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Heu d'especificar un nom per la plantilla de l'espai d'equip.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "El nom de l'espai d'equip no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "El nom de la plantilla no pot contenir cap dels caràcters següents: * \\ / : ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Enllaça amb el document",
		workspacebuilder_folders_makeDocCopy: "Copia el document",
		workspacebuilder_folders_newfolder: "Carpeta nova",
		workspacebuilder_folders_local_drive: "Des el directori local",
		workspacebuilder_folders_from_repo: "Des del dipòsit",
		workspacebuilder_folders_add_doc: "Afegeix un document",
		workspacebuilder_folders_grid_name: "Nom",
		workspacebuilder_folders_props: "Propietats",
		workspacebuilder_folders_remove: "Elimina",
		workspacebuilder_folders_delete: "Suprimeix",
		workspacebuilder_folders_adddoc_local: "Afegeix document des la unitat local",
		workspacebuilder_folders_adddoc_repo: "Afegeix un document des el dipòsit",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "El nom de la carpeta especificat ja existeix. Especifiqueu un altre nom de carpeta.",

		workspacebuilder_classes_title: "Selecciona classes o plantilles d'entrada",
		workspacebuilder_classes_title_cm: "Selecciona classes",
		workspacebuilder_classes_template_introText: "Especifiqueu si els espais d'equip creats a partir d'aquesta plantilla utilitzaran classes o plantilles d'entrada per afegir documents al dipòsit. Si no hi ha cap classe seleccionada, els usuaris d'espai d'equip veuran totes les classes a les quals tenen accés.  L'usuari pot modificar la llista de classes o de plantilles d'entrada a l'espai d'equip si tenen el permís adequat.",
		workspacebuilder_classes_template_introText_cm: "Seleccioneu les classes que els usuaris poden utilitzar per afegir documents al dipòsit. Si no hi ha cap classe seleccionada, els usuaris d'espai d'equip veuran totes les classes a les quals tenen accés. Els usuaris poden modificar la llista de classes a l'espai d'equip si tenen els permisos adequats.",
		workspacebuilder_classes_instance_introText: "Seleccioneu les classes o les plantilles d'entrada que els usuaris poden utilitzar per afegir documents al dipòsit. Quan no hi hagi cap classe seleccionada, els usuaris d'espai d'equip veuran totes les classes a les quals tenen permís. Els usuaris poden modificar la llista de classes o de plantilles d'entrada a l'espai d'equip si tenen els permisos adequats.",
		workspacebuilder_classes_instance_introText_cm: "Seleccioneu les classes que els usuaris poden utilitzar per afegir documents al dipòsit. Quan no hi hagi cap classe seleccionada, els usuaris d'espai d'equip veuran totes les classes a les quals tenen permís. Els usuaris poden modificar la llista de classes a l'espai d'equip si tenen els permisos adequats.",
		workspacebuilder_classes_selection: "Selecciona classes:",
		workspacebuilder_classes_list: "Classes disponibles:",
		workspacebuilder_classes_columns_default: "Per defecte",
		workspacebuilder_classes_columns_className: "Nom de la classe",
		workspacebuilder_classes_type_classes: "Utilitza classes per afegir documents",
		workspacebuilder_classes_type_classes_tooltip: "Les classes inclouen propietats associades per tal que els documents es puguin localitzar per utilitzar-los més endavant.",
		workspacebuilder_classes_type_entryTemplates: "Utilitza plantilles d'entrada per afegir documents",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Les plantilles d'entrada s'asseguren que la informació que es proporciona a cada document és coherent i que s'utilitzen valors definits prèviament.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nom de la plantilla d'entrada",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Descripció",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Heu d'afegir com a mínim una plantilla d'entrada per l'espai d'equip.",

		workspacebuilder_classes_new: "Classe nova",
		workspacebuilder_classes_add: "Afegeix classe",
		workspacebuilder_entryTemplate_add: "Afegeix plantilla d'entrada",
		workspacebuilder_add_list: "Afegeix",
		workspacebuilder_makeDefault_list: "Converteix en l'opció per defecte",
		workspacebuilder_removeDefault_list: "Elimina en l'opció per defecte",

		workspacebuilder_roles_title: "Selecciona els rols",
		workspacebuilder_roles_title_modify: "Modifica els rols",

		workspacebuilder_selection_moveup: "Puja",
		workspacebuilder_selection_movedown: "Baixa",
		workspacebuilder_selection_remove: "Elimina",
		workspacebuilder_selection_add: "Afegeix",
		workspacebuilder_selection_create_new_search: "Cerca nova...",
		workspacebuilder_selection_create_new_role: "Rol nou...",
		workspacebuilder_selection_make_role_available: "Fes disponible",
		workspacebuilder_selection_make_role_available_tooltip: "Comparteix el rol seleccionat amb altres plantilles. Heu d'assignar com a mínim un permís al rol per poder-lo compartir.",

		workspacebuilder_navigation_next: "Següent",
		workspacebuilder_navigation_finish: "Finalitza",
		workspacebuilder_navigation_validate: "Valida",
		workspacebuilder_navigation_previous: "Anterior",
		workspacebuilder_navigation_cancel: "Cancel·la",
		workspacebuilder_navigation_customize: "Personalitza",

		workspacebuilder_search_dialog_title: "Cerca",
		workspacebuilder_dialog_close: "Tanca",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilitat de la plantilla:",
		workspace_properties_templateState_tooltip: "Feu que la plantilla no estigui disponible per evitar que els usuaris creïn espais d'equip que utilitzin aquesta plantilla.",
		workspace_properties_dialog_title: "Propietats de la plantilla",
		workspace_properties_online_radio_option_label: "Fes disponible",
		workspace_properties_offline_radio_option_label: "Fes no disponible",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Voleu cancel·lar-ho sense desar els canvis?",
		workspacebuilder_cancel_confirmation_button: "Sí",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Qualsevol element no vàlid s'eliminarà de la plantilla i els usuaris tindran disponible la plantilla.  Voleu validar la plantilla d'espai d'equip?",
		workspacebuilder_validate_confirmation_button: "Sí",
		workspacebuilder_validate_confirmation_title: "Valida",

		/* Entry templates builder */
		entry_templates: "Gestor de plantilles d'entrada",
		no_entry_templates_were_found: "No hi ha cap plantilla d'entrada",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtre",

		/* Roleselector widget */
		role_selector_name: "Rols:",

		/* User Group picker widget */
		directory_label: "Directori:",
		scope_label: "Cerca:",
		name_starts_with_label: "El nom comença per",
		name_contains_label: "El nom conté",
		display_name_contains_label: "El nom de visualització conté",
		starts_with_label: "Comença per:",
		available_label: "Disponible:",
		available_heading: "Disponible",
		selected_label: "Seleccionats:",
		selected_heading: "Seleccionada",
		available_repositories_label: "Dipòsits disponibles",
		selected_repositories_label: "Dipòsits seleccionats",
		default_repository: "Dipòsit per defecte:",
		default_repository_placeholder: "Selecciona un dipòsit",
		default_role_placeholder: "Selecciona un rol",
		menu_label_placeholder: "Selecciona o introdueix una etiqueta",
		default_repository_hover: "Especifiqueu el dipòsit que està seleccionat per defecte quan els usuaris inicien sessió al client web de l'escriptori.<br><br><b>Important:</b> heu d'afegir dipòsits a l'escriptori de la llista de dipòsits seleccionat abans d'especificar el dipòsit per defecte.",
		default_repository_workflow_hover: "<b>Recordeu:</b> només podeu configurar els espais d'aplicacions en els dipòsits que estan configurats per l'escriptori.",
		remove_label: "Elimina",
		users_label: "Usuaris",
		groups_label: "Grups",
		user_or_group_name_label: "Nom d'usuari o de grup:",
		user_or_group_name_hover: "Introduïu el nom d'un usuari o d'un grup vàlids al dipòsit.  No s'ha validat el nom.",
		user: "Usuari",
		group: "Grup",
		name: "Nom:",
		displayName: "Nom de visualització",
		display_name: "Nom de visualització:",
		shortName: "Nom curt:",
		distinguishedName: "Nom distingit:",
		search_tooltip: "Cerca",
		add_tooltip: "Afegeix",
		add_selected_tooltip: "Afegeix a la llista seleccionada",
		remove_tooltip: "Elimina",
		remove_selected_tooltip: "Elimina de la llista seleccionada",
		add_to_selected_tooltip: "Afegeix",
		remove_from_selected_tooltip: "Elimina",
		move_up_selected_tooltip: "Puja",
		move_down_selected_tooltip: "Baixa",
		advanced_search_options_tooltip: "Paràmetres avançats",
		move_right_selected_tooltip: "Mou al submenú",
		move_left_selected_tooltip: "Surt del submenú",
		add_separator: "Afegeix separador",
		menu_item_label: "Etiqueta de l'element del menú:",
		add_menu_label: "Afegeix submenú",
		menu_label: "Etiqueta del submenú:",
		menu_label_info: "<b>Important:</b> heu d'afegir com a mínim un element del menú al submenú abans de desar el menú.",
		menu_dropdown_label: "Etiqueta de botó desplegable:",
		menu_dropdown_label_info: "<b>Important:</b> Heu d'afegir com a mínim un element de menú a aquest botó desplegable abans de desar aquesta barra d'eines.",
		no_item_found: "No s'ha trobat cap resultat.",
		me: "Jo",
		anyone: "Qualsevol persona",
		specific_users: "Usuaris específics",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "La cerca ha retornat més de {0} resultats. Canvieu els vostres criteris per restringir la cerca.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Els resultats de la cerca contenen elements que ja s'han seleccionat. Aquests elements no es poden mostrar als resultats de la cerca.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "S'han tornat més de {0} resultats. Utilitzeu el filtre per limitar els resultats",

		user_already_selected: "Ja s'ha seleccionat l'usuari especificat.  Especifiqueu un altre usuari.",
		group_already_selected: "Ja s'ha seleccionat el grup especificat.  Especifiqueu un altre grup.",
		user_cannot_select_self: "No podeu afegir-vos vosaltres mateixos. Especifiqueu un altre usuari.",

		/* Select User Group dialog */
		select_user_group_add_label: "Afegeix",
		select_user_group_cancel_label: "Cancel·la",
		add_users_groups_label: "Afegeix usuaris i grups",
		add_user_group_label: "Afegeix un usuari i un grup",
		add_users_label: "Afegeix usuaris",
		add_user_label: "Afegeix usuari",
		add_label: "Afegeix:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Els documents següents tenen canvis d'anotacions sense desar:",
		viewer_confirm_to_proceed: "Voleu continuar i perdre els canvis?",
		viewer_warn_has_changes: "Els canvis que no hàgiu desat es perdran.",
		viewer_warn_is_printing: "La impressió en curs no s'ha completat.",
		viewer_warn_confirm_exit: "Voleu sortir?",
		viewer_prompt_save_changes: "El document següent té canvis d'anotacions sense desar que es perdran:<br>${0}<br><br>Voleu desar els canvis?",
		viewer_prompt_mergesplit_changes: "Els documents següents tenen canvis sense desar:<br>${0}<br><br>Voleu continuar i perdre els canvis?",
		viewer_prompt_mergesplit_tab_changes: "El document següent té canvis sense desar:<br>${0}<br><br>Voleu continuar i perdre els canvis?",
		viewer_new_item_name: "Document nou",
		viewer_top_frame: "Marc superior:",
		viewer_bottom_frame: "Marc inferior:",
		viewer_left_frame: "Marc esquerre:",
		viewer_right_frame: "Marc dret:",
		viewer_viewer_frame: "Marc de visualitzador:",
		viewer_properties_frame: "Marc de propietats:",
		viewer_comment_frame: "Marc de comentaris:",
		viewer_mergesplit_on: "Visualització",
		viewer_mergesplit_off: "Combina i divideix",
		viewer_mergesplit_context_menu_move: "Mou",
		viewer_mergesplit_context_menu_rename: "Canvia el nom",
		viewer_mergesplit_context_menu_delete: "Suprimeix",
		//move to new window
		viewer_move_to_new_window:"Mou a finestra nova",
		viewer_continue:"Descarta els canvis",
		viewer_return_to_original_window:"Torna a la finestra original",
		viewer_switch_window:"Commuta finestra",
		viewer_prompt_lost_changes:"El document ${0} està obert a una altra finestra en aquests moments. El document té canvis sense desar.<br><br>Voleu commutar a la finestra per desar els canvis, o preferiu descartar-los i obrir el document a la finestra actual?",
		viewer_mergesplit_fallback_info: "Només podeu completar l'acció Combina i divideix a documents del mateix dipòsit.",
		viewer_tabbed_layout: "Visualitza com a pestanyes",
		viewer_tabbed_layout_highcontrast: "Pestanyes",
		viewer_split_vertical_layout: "Divideix els panells superior i inferior",
		viewer_split_vertical_layout_highcontrast: "Part superior i part inferior",
		viewer_split_horizontal_layout: "Divideix els panells esquerre i dreta",
		viewer_split_horizontal_layout_highcontrast: "Esquerra i dreta",
		viewer_add_vertical_layout: "Nova pestanya a la part inferior",
		viewer_add_vertical_layout_highcontrast: "Pestanya inferior",
		viewer_add_horizontal_layout: "Nova pestanya a la dreta",
		viewer_add_horizontal_layout_highcontrast: "Pestanya dreta",
		viewer_add_horizontal_layout_rtl: "Nova pestanya a l'esquerra",
		viewer_add_horizontal_layout_rtl_highcontrast: "Pestanya esquerra",
		viewer_split_properties_layout: "Visualitza les propietats",
		viewer_split_comment_layout: "Visualitza comentaris",
		viewer_split_notelog_layout: "Visualitza el Notelog",
		viewer_window_title: "Visualitzador ${0}",
		viewer_next_hit: "Visualitza el següent document a la llista",
		viewer_prev_hit: "Visualitza el document anterior a la llista",
		viewer_confrim_more_search_results: "Els resultats de la cerca no contenen més documents visibles.  Voleu recuperar més resultats de la cerca?",
		viewer_confirm_get_next_page: "La llista de resultats no conté més elements visibles.  Voleu recuperar més resultats de la cerca?",
		viewer_confirm_get_next_item: "La llista de resultats conté més elements visibles.  Voleu visualitzar el següent element?",
		viewer_fn_annotation_tooltip: " Creat per: ${0},  creat el: ${1}",
		viewer_box_note_limitation: "Només podeu obrir i veure les notes del Box a una finestra independent.",
		viewer_click_to_open_box_note: "Feu clic aquí per obrir la nota del Box.",
		viewer_box_view_expiring: "La quantitat màxima de temps que podeu veure el document del Box és de 60 minuts. La sessió actual caducarà d'aquí a ${0} minuts. Si voleu continuar treballant en el document, l'heu de tornar a carregar ara. Voleu tornar a carregar el document?",
		viewer_add_dialog_save_as_type: "Desa com a tipus:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflicte d'extracció",
		viewer_checkout_conflict: "El document ha estat extret per un altre usuari.",
		viewer_checkout_confirm: "Hi ha disponible una versió més recent del document. Voleu continuar extraient el document o voleu tornar a carregar el visualitzador amb la versió més recent? Si trieu tornar a carregar el visualitzador, els canvis no desats es perdran.",
		viewer_checkout_continue: "Continua l'extracció",
		viewer_checkout_reload: "Torna a carregar",
		viewer_status_building: "S'està creant el document...",
		viewer_status_adding: "S'està afegint el document...",
		viewer_status_checking_in: "S'està incorporant el document...",

		/* Class Selector Widget */
		include_subclasses_label: "Inclou subclasses",
		include_subclasses_label2: "Cerca també a les subclasses",
		include_subclasses_note: "(Inclou subclasses)",
		available_classes_col_header: "Classes disponibles",
		single_class_label: "Cerca en una sola classe",
		multiple_classes_label: "Cerca a diverses classes",
		multiple_classes_hover_help: "Seleccioneu aquesta opció per cercar en més d'una classe. Les classes poden ser classes o subclasses. Si seleccioneu aquesta opció, només veureu les propietats i els valors que són comuns en les classes seleccionades.",
		selected_classes_col_header: "Classes seleccionades",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Inclou subcarpetes)",
		favorites_pseudo_node: "\\Preferits\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Heu de seleccionar una carpeta al dipòsit per afegir-hi el document.",
		no_permission_add_folder: "No teniu el permís correcte per afegir carpetes a la carpeta.",
		no_permission_add_document: "No teniu el permís correcte per afegir documents a la carpeta.",
		document_already_in_folder: "El document ja és a la carpeta.",
		cant_move_folder_onto_parent: "La carpeta ja és en aquesta carpeta.",
		cant_move_folder_onto_self: "No podeu moure una carpeta dins d'ella mateixa o dins de les seves subcarpetes.",

		/* Workflow Widgets */
		process_application_space: "Espai d'aplicació del procés",
		process_role: "Rol dels processos",
		process_inbasket: "Safata d'entrada del procés",
		process_worklist: "Llista de treball",
		process_step_processor: "Element de treball del procés",
		process_tracker: "Element de treball de la pista",
		process_info_subject: "Assumpte",
		process_info_stepname: "Pas",
		process_info_is_locked: "Bloquejat",
		process_info_no_access: "Sense accés",
		process_info_received_on: "Rebut el",
		process_info_overdue: "Vençut",
		process_info_reminder_sent: "Recordatori enviat",
		process_info_locked_by_user: "Bloquejat per",
		process_work_object_number: "Número d'objecte de treball",
		process_deadline: "Data de venciment:",
		process_launchedby: "Iniciat per:",
		process_receivedon: "Rebut el:",
		process_step: "Pas:",
		process_properties: "Propietats",
		process_attachments: "Fitxers adjunts",
		process_attachments_select: "Selecciona un fitxer adjunt",
		process_finish_button_label: "Atura el seguiment",
		process_tracker_history: "Historial",
		process_tracker_milestones: "Fites",
		process_tracker_milestone: "Fita",
		process_tracker_milestone_level: "Nivell",
		process_tracker_milestones_empty: "No hi ha cap fita per visualitzar.",
		process_tracker_level_selector_label: "Mostra els nivells de les fites fins a:",
		process_tracker_map_selector_label: "Filtra per mapa:",
		process_tracker_message: "Missatge",
		process_tracker_datereached: "Ha arribat la data",
		process_tracker_stepname: "Pas",
		process_tracker_cycle: "Cicle",
		process_tracker_review_cycle: "Cicle de revisió",
		process_tracker_participant: "Participant",
		process_tracker_completed: "Completat",
		process_tracker_response: "Resposta",
		process_tracker_comments: "Comentaris",
		process_tracker_delete_confirmation: "Voleu deixar de rastrejar el flux de treball següent: ${0}?",
		process_tracker_history_allmaps: "Tots els mapes",
		process_tracker_history_workflow: "Flux de treball",
		process_tracker_history_terminate: "Finalitza",
		process_tracker_history_malfunction: "Mal funcionament",
		process_filter_label: "Filtre",
		process_no_filter_summary: "No s'ha aplicat cap filtre",
		process_filter_summary: "S'ha aplicat ${0}",
		process_filter_reset_tooltip: "El restabliment esborra el filtre i actualitza la safata d'entrada.",
		process_attachments_add_folder: "Afegeix carpeta",
		process_attachments_add_doc: "Afegeix un document",
		process_complete_button_label: "Completa",
		process_save_button_label: "Desa",
		process_launch_button_label: "Inicia el flux de treball",
		process_open_button_label: "Obre",
		process_movetoinbox_button_label: "Mou a la safata d'entrada",
		process_return_button_label: "Torna",
		process_return_to_sender_tooltip: "Retorna l'element de treball a la safata d'entrada original",
		process_move_to_inbasket_tooltip: "Mou l'element de treball a la safata d'entrada personal",
		process_reassign_tooltip: "Reassigna l'element de treball a un altre propietari",
		process_reassign_button_label: "Torna a assignar",
		process_preferences_button_label: "Preferències",
		process_manageroles_button_label: "Gestiona els rols",
		process_manageroles_no_members: "No hi ha cap membre.",
		process_responses_button_label: "Més respostes",
		process_morecustomaction_button_label: "Més accions",
		process_show_instructions: "Visualitza instruccions",
		process_hide_instructions: "Oculta instruccions",
		process_remove_attachment: "Elimina",
		process_close_window: "L'element de treball s'ha processat.",
		process_delegate_flag: "El propietari actual ha d'aprovar l'element de treball abans de portar-lo al següent pas al flux de treball.",
		process_paticipant_voting: "Nombre de participants necessaris per l'aprovació de vots:",
		process_get_next_label: "Obtén elements de treball següents",
		process_no_more_items: "No hi ha més elements a la safata d'entrada que s'hagin de processar.",
		process_workflow_name: "Nom del flux de treball:",
		process_pattern_process_name: "Revisa per a ${0}",
		process_instuctions: "Instruccions per als revisors:",
		process_pattern_deadline: "Data de venciment:",
		process_reviewers: "Revisors:",
		process_approvals_required: "Aprovacions obligatòries:",
		process_on_reject: "Si l'element de treball s'ha rebutjat:",
		process_return_to_originator: "Per retornar-me'l",
		process_return_to_previous_reviewer: "Retorna'l al revisor anterior",
		process_additional_settings: "Paràmetres addicionals:",
		process_allow_reassign: "Permet als revisors reassignar aquesta revisió",
		process_complete_notification: "Avisa'm quan la revisió hagi finalitzat",
		process_workflow_name_hover_help: "El nom que especifiqueu per l'element de treball ha de facilitar als revisors la distinció entre aquest element de treball i la resta d'elements que hi ha a la safata d'entrada.",
		process_approvals_required_hover_help: "Si diverses persones revisen l'element de treball, podeu especificar quantes aprovacions es necessiten per què es completi correctament l'element de treball.",
		process_approval_options: "Opcions d'aprovació",
		process_all: "Tots",
		process_at_least: "Com a mínim, calen",
		process_at_least_by_count: "Com a mínim calen ${0} aprovadors",
		process_at_least_by_percentage: "Com a mínim calen ${0} revisors",
		process_comments: "Comentaris:",
		process_review_step_comments_hover_help: "Si rebutgeu l'element de treball, heu d'especificar el motiu pel qual l'heu rebutjat. La informació permet a l'originador de l'element de treball o al revisor anterior conèixer els vostres assumptes.",
		process_rework_step_comments_hover_help: "Heu de proporcionar informació sobre com s'adrecen els comentaris. Si no esteu d'acord amb els comentaris, proporcioneu el procediment de la vostra decisió.",
		process_rejection_reason: "Motiu del rebuig:",
		process_summary: "Resum",
		process_sequential_review: "Revisió seqüencial",
		process_sequential_review_description: "Cada revisor revisarà l'element de treball en ordre.",
		process_parallel_review: "Revisió en paral·lel",
		process_parallel_review_description: "Tots els revisors revisaran l'element de treball alhora.",
		process_parallel_approvals_required_error: "El nombre d'aprovacions necessari és massa alt. Només s'especifiquen ${0} revisors.",
		process_parallel_invalid_required_approvals_count: "El valor no és vàlid. El valor ha de ser ${0}.",
		process_subject_prompt: "Introduïu l'assumpte",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Element de treball:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Visualitza les propietats",
		view_permissions_level: "Visualitza permisos",
		view_content_level: "Visualitza el document",
		link_level: "Enllaç",
		modify_properties_level: "Edita les propietats",
		modify_content_level: "Edita el document",
		minor_version_level: "Edita la versió secundària",
		major_version_level: "Edita la versió principal",
		create_instance_level: "Crear instància",
		delete_document_level: "Suprimeix el document",
		delete_item_level: "Suprimeix l'element",
		modify_document_permissions_level: "Gestiona permisos",
		modify_folder_permissions_level: "Gestiona permisos",
		modify_owner_level: "Modifica el propietari",
		delete_folder_level: "Suprimeix la carpeta",
		file_in_folder_level: "Afegeix a les carpetes",
		create_subfolder_level: "Crea subcarpetes",
		link_item_level: "Anota el document, Afegeix a la carpeta", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Només per a documents: Afegiu una anotació al document o elimineu una anotació del document</li><li>Només per a carpetes: Afegiu elements a la carpeta o elimineu elements de la carpeta</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Suprimeix",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Propietari",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Lector",
		/* previously \"Read only\" */
		no_access_privilege: "Sense accés",
		share_with_label: "Comparteix amb:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Només jo",
		public_label: "Tothom",
		members_label: "Usuaris i grups específics",
		select_members_label: "Seleccioneu...",
		select_user_group_label: "Selecciona usuaris...",
		select_users_groups_label: "Selecciona usuaris i grups...",
		select_user_label: "Selecciona un usuari...",
		propagation_label: "Propagació:",
		access_label: "Permisos:",
		add_permission_add_label: "Afegeix",
		security_policy_label: "Política de seguretat:",
		includes_inherited_access: "Inclou accés heretat",
		customize_access_for_label: "Personalitza l'accés per a:",
		customize: "Personalitza",
		direct: "L'element",
		singleLevelInheritance: "Un nivell",
		infiniteLevelInheritance: "Tots els nivells",
		inherited: "Heretat",
		direct_hover_help: "Els paràmetres de seguretat s'apliquen l'element seleccionat",
		singleLevelInheritance_hover_help: "Els permisos s'apliquen a aquest element i als fills immediats que s'han configurat per heretar la seguretat d'aquest element.",
		infiniteLevelInheritance_hover_help: "Els permisos s'apliquen a aquest element i a tots els descendents que s'han configurat per heretar la seguretat d'aquest element.",
		inherited_hover_help: "Els permisos s'hereten del pare.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Els permisos per a ${0} s'apliquen a aquest element i als fills immediats que s'han configurat per heretar la seguretat d'aquest element.",
		infiniteLevelInheritance_member_hover_help: "Els permisos per a ${0} s'apliquen a aquest element i a tots els descendents que s'han configurat per heretar la seguretat d'aquest element.",
		inherited_member_hover_help: "Els permisos per a ${0} s'hereten del pare.",
		partial_hover_help: "Un usuari ha canviat els paràmetres de seguretat de l'element",
		allow: "Permet",
		deny: "Denega",
		basic: "Bàsic",
		advanced: "Avançat",
		permission_type: "Defineix accés per:",
		share_with_hover_help: "L'element actualment es comparteix amb els següents usuaris i grups.",
		direct_security_policy_hover_help: "Els paràmetres de la política de seguretat us permeten canviar la seguretat de l'element.",
		security_policy_hover_help: "La seguretat d'aquest element és de només de lectura ja que els paràmetres de la política de seguretat us impedeixen canviar la seguretat de l'element.",
		security_remove: "Cap permís",
		pseudo_group_label: "Comptes d'àlies",
		marking_hover_help: "La seguretat d'aquest element la controla un conjunt de marcació, que afecta la seguretat de l'element.",
		note_label: "Important:",
		marking_text: "L'element es marca com a: ${0}. L'element pot tenir restriccions de seguretat.",
		authenticated_users: "Usuaris autenticats",
		realm_users: "${0} usuaris",
		denyAll: "Denega-ho tot",
		allowAll: "Permet-ho tot",
		remove_direct_text: "Quan deseu els canvis, els permisos d'aquest membre s'eliminaran de l'element.",
		remove_single_inheritance_text: "Quan deseu els canvis, els permisos d'aquest membre s'eliminaran de l'element i de tots els <br>fills immediats que s'han configurat per heretar la seguretat de l'element.<p>Voleu continuar?",
		remove_infinite_inheritance_text: "Quan deseu els canvis, els permisos d'aquest membre s'eliminaran de l'element i de tots els <br>descendents que s'han configurat per heretar la seguretat de l'element.<p>Voleu continuar?",
		remove_inheritance_text: "Quan deseu els canvis, els permisos d'aquest membre s'eliminaran de l'element i de tots els <br>descendents que s'han configurat per heretar la seguretat de l'element. Només es conservaran els permisos que <br>hagi heretat aquest element.<p>Voleu continuar?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Elimineu els permisos per a ${0}",

		security_proxy_text: "La seguretat de l'element només és de lectura.",
		security_proxy_declared_text: "La seguretat de l'element només és de lectura perquè la defineix un servidor intermediari de seguretat.",
		security_proxy_hover_help: "La seguretat d'aquest element la controla la seguretat que s'ha configurat en un altre objecte al dipòsit.",
		add_permissions_label: "Afegeix permisos",
		permission_propagation_direct: "Aquesta carpeta només",
		permission_propagation_onelevel: "Aquesta carpeta i un nivell inferior",
		permission_propagation_alllevels: "Aquesta carpeta i tots els nivells inferiors",
		document_propagation_label: "Defineix accés per:",
		document_propagation_FOLDER: "Carpeta",
		document_propagation_DOCUMENT: "Document",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Origen de l'autenticació:",

		/* Versions Widget */
		object_versions_selector_label: "Versions:",
		object_versions_label: "Versions",
		object_type_document_label: "Document:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Carpetes arxivades a",
		folders_filed_in_folder_col_hdr: "Carpeta",
		folders_filed_in_path_col_hdr: "Camí d'accés",
		folders_filed_in_containment_name_col_hdr: "Nom de contenció",
		folders_filed_in_creator_col_hdr: "Creada per",
		folders_filed_in_date_created_col_hdr: "Creat el",

		/* Parent Documents */
		properties_parent_documents_label: "Documents pare",

		/* Select object dialog */
		select_object_title: "Seleccioneu un element",
		select_object_breadCrumb_version_prefix: "Versions per: ",
		show_versions_label: "Mostra versions",
		use_current_version_label: "Utilitza la versió actual",
		use_released_version_label: "Utilitza la versió de publicació",

		/* Select content class dialog */
		select_class: "Selecciona una classe",
		/* Select Search dialog */
		select_search: "Selecciona la cerca",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Visualitza l'enllaç",
		show_hyperlink_intro: "Podeu copiar i enganxar l'enllaç en missatges de correu electrònic, xats i pàgines web. Si hi ha diverses versions de l'element, especifiqueu a quina versió el voleu enllaçar.",
		show_hyperlink_intro_no_version_select: "Podeu copiar i enganxar l'enllaç en missatges de correu electrònic, xats i pàgines web.",
		show_text_label: "Versió:",
		released_button_label: "Publicat",
		current_button_label: "Actual",
		select_button_label: "Versió específica",
		show_hyperlink_no_released_version_msg: "No hi ha cap versió publicada d'aquest document.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Inicia el flux de treball",
		edit_workflow_title: "Propietats de l'element de treball",
		start_workflow_intro: "Inicieu un flux de treball per processar els elements seleccionats. Si voleu assignar els elements de treball a un usuari determinat, especifiqueu un propietari.",
		edit_workflow_intro: "Podeu editar les propietats dels elements de treball seleccionats. Si voleu tornar a assignar l'element de treball a un altre usuari, especifiqueu un propietari.",
		workflow_field_label: "Flux de treball:",
		priority_field_label: "Prioritat:",
		owner_field_label: "Propietari:",
		start_button_label: "Inicia",
		save_button_label: "Desa",
		owner_value_hint: "Especifiqueu una sèrie alfanumèrica amb un màxim de 32 caràcters. La sèrie pot contenir només espais o els caràcters següents: a-z, A-Z, 0-9 i ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elements de contingut",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "El valor no és vàlid. El valor només pot contenir espais o els caràcters següents: a-z, A-Z, 0-9, i ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Escriviu un valor entre 1 i 32.000 per indicar la importància de l'element de treball.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "El valor no és vàlid. La prioritat ha de ser un valor d'1 a 32.000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "El nom de flux de treball no existeix.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Suspèn del flux de treball",
		suspend_workitems_intro: "Quan suspeneu un element de treball del flux de treball, l'element de treball no es podrà processar fins que es reprengui.",
		suspend_workitems_options_label: "Suspèn els elements de treball seleccionats:",
		suspend_until_resume_label: "Fins que es reprengui manualment",
		suspend_until_date_label: "Fins",
		suspend_for_duration_label: "Durant",
		suspend_for_duration_hours: "Hores",
		suspend_for_duration_days: "Dies",
		suspend_for_duration_weeks: "Setmanes",
		suspend_for_duration_months: "Mesos",
		suspend_for_duration_years: "Anys",
		suspend_button_label: "Suspensió",
		suspend_duration_value_hint: "Especifiqueu un valor dins de l'interval 1-99 en la durada.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "El valor no és vàlid. El valor ha de ser entre 1-99.",

		/* Remove from workflow */
		remove_workflow_title: "Elimina del flux de treball",
		remove_workflow_confirmation: "Voleu eliminar els elements seleccionats del flux de treball?<br>S'han seleccionat ${0} elements.",
		remove_workflow_button_label: "Elimina",

		/* Unfile dialog */
		unfile_dialog_title: "Suprimeix de la carpeta",
		unfile_dialog_remove_from_folder_label: "Elimina de:",
		unfile_dialog_info_text: "Podeu eliminar elements de carpetes. Tanmateix, l'eliminació d'un element de totes les carpetes no elimina l'element del dipòsit. Encara podeu recuperar l'element executant una cerca. Només es mostren a la llista les carpetes de les quals en teniu privilegis.",
		unfile_dialog_select_all: "Selecciona-ho tot",
		unfile_dialog_deselect_all: "Esborra-ho tot",
		unfile_dialog_remove_button_label: "Elimina",
		unfile_dialog_select_folder_col_hdr: "Selecciona la carpeta",
		unfile_dialog_folder_col_hdr: "Carpeta",
		unfile_dialog_path_col_hdr: "Camí d'accés",
		unfile_dialog_not_filed_msg: "Aquest element no és en cap carpeta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "No teniu els permisos apropiats per eliminar l'element de qualsevol carpeta on hi hagi l'element.",
		unfile_dialog_folder_not_selectable_tooltip: "No teniu el permís apropiat per eliminar aquest element d'aquesta carpeta.",
		unfile_multi_prompt: "Voleu eliminar els elements seleccionats de la carpeta ${0}?",
		unfile_large_number_items_confirmation_question: "Heu seleccionat ${0} elements que voleu eliminar de la carpeta ${1}.<br/>La supressió d'una gran quantitat d'elements d'una carpeta pot trigar una mica més.<br/>Voleu continuar?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Obre",
		move_to_folder_title: "Mou a carpeta",
		move_to_folder_button_caption: "Mou",
		move_to_folder_label: "Mou a:",
		add_to_folder_title: "Afegeix a la carpeta",
		add_to_folder_button_caption: "Afegeix",
		add_to_folder_label: "Afegeix a:",
		copy_to_folder_title: "Copia a la carpeta",
		copy_to_folder_button_caption: "Copia",
		copy_to_folder_label: "Copia a:",
		copy_to_folder_delete_label: "Un cop hagi finalitzat la còpia, suprimiu els elements seleccionats del Box.",
		move_from_folder_label: "Mou des de:",
		move_file_info_text: "Podeu moure elements d'una carpeta a una altra.",
		move_folder_info_text: "Podeu moure carpetes d'una carpeta principal a una altra.",
		add_doc_to_folder_info_text: "Podeu afegir elements a una o més carpetes. Si un element ja és en una carpeta, es mantindrà a la carpeta i s'afegirà a les carpetes addicionals que especifiqueu.",
		copy_doc_to_folder_info_text: "Podeu copiar elements a una carpeta.",
		box_copy: "Còpia al Box",
		box_copy__button_caption: "Copia",
		box_copy_to_info_text: "Seleccioneu el dipòsit i la carpeta on voleu copiar els elements seleccionats del Box.",
		box_copy_from_info_text: "Seleccioneu el dipòsit i la carpeta on voleu copiar els elements seleccionats del Box.",
		box_copy_version_info_text: "Per afegir un document nou, seleccioneu el dipòsit i la carpeta. Per incorporar una versió nova, seleccioneu el dipòsit i el document.",
		admin_box_copy: "Còpia al Box",
		admin_box_copy_hover: "Aquesta opció permet als usuaris copiar documents al Box.",

		no_permission_to_copy_version_msg: "No podeu copiar el document del Box com a versió nova del document seleccionat. No teniu els permisos adients per editar el document seleccionat o algú altre ha extret el document seleccionat.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "No teniu els permisos apropiats per eliminar l'element de qualsevol carpeta on hi hagi l'element.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "No teniu el permís apropiat per eliminar aquest element d'aquesta carpeta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Aquest element no es pot moure perquè no s'ha arxivat a cap carpeta. Trieu un altre element.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Inicia el flux de treball",
		subscriptions_dialog_available_items_label: "Elements disponibles:",
		subscriptions_dialog_info_text: "Especifiqueu quin flux de treball s'ha d'iniciar.",
		subscriptions_dialog_select_button_label: "D'acord",
		subscriptions_dialog_name_col_hdr: "Nom",
		subscriptions_dialog_desc_col_hdr: "Descripció",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gestiona els rols",
		manageroles_dialog_info_text: "Podeu modificar la llista d'usuaris de cada rol que està associat amb l'espai d'aplicació de processos.",
		manageroles_dialog_members_label: "Membres",
		manageroles_dialog_roles_label: "Rols",
		manageroles_dialog_add_button_label: "Afegeix usuaris i grups",
		manageroles_dialog_remove_button_label: "Elimina",
		manageroles_dialog_save_button_label: "Desa",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "No hi ha cap flux de treball associat a aquest element.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferències de flux de treball",
		workflow_pref_dialog_info_text: "Especifiqueu les incidències de flux de treball de les quals en voleu rebre notificacions per correu electrònic. També podeu habilitar l'opció per encaminar la vostra feina a una altra persona seleccionant un usuari a qui delegar-li feina.",

		workflow_pref_general: "General",
		workflow_pref_email_address: "Adreça de correu electrònic",
		workflow_pref_email_address_hover: "Especifiqueu l'adreça de correu electrònica on voleu rebre notificacions de flux de treball.",
		workflow_pref_preferred_locale: "Idioma",
		workflow_pref_preferred_locale_hover: "Especifica l'idioma en què estan les notificacions per correu electrònic.",

		workflow_pref_work_item_notice: "Notificacions de l'element de treball",
		workflow_pref_step_new_assignment: "Se m'ha assignat un nou element de treball",
		workflow_pref_step_new_assignment_hover: "Avisa'm quan rebi un nou element de treball.",
		workflow_pref_step_expired_deadline: "S'ha passat la data límit de l'element de treball",
		workflow_pref_step_expired_deadline_hover: "Avisa'm quan m'oblidi d'una data límit de l'element de treball.",
		workflow_pref_step_reminders: "Falta poc per una data límit de l'element de treball",
		workflow_pref_step_reminders_hover: "Avisa'm quan falti poc per la data límit d'un element.",

		workflow_pref_originator_notice: "Notificacions de l'originador",
		workflow_pref_milestone_reached: "S'ha arribat a la fita",
		workflow_pref_milestone_reached_hover: "Avisa'm quan s'arribi a una fita en un flux de treball que he iniciat.",

		workflow_pref_tracker_notice: "Notificacions de rastrejador del flux de treball",
		workflow_pref_tracker_new_assignment: "Se m'ha assignat un nou element de rastrejador",
		workflow_pref_tracker_new_assignment_hover: "Avisa'm quan un flux de treball que estic rastrejant s'ha iniciat.",
		workflow_pref_tracker_deadline_reminders: "El flux de treball és a prop de la data límit",
		workflow_pref_tracker_deadline_reminders_hover: "Avisa'm quan falti poc per la data límit d'un flux de treball.",
		workflow_pref_tracker_deadline_expired: "S'ha passat la data límit del flux de treball",
		workflow_pref_tracker_deadline_expired_hover: "Avisa'm quan s'hagi passat la data límit d'un flux de treball.",
		workflow_pref_tracker_exception: "S'ha produït un error en el flux de treball",
		workflow_pref_tracker_exception_hover: "Avisa'm quan es produeixi un error o una excepció de flux de treball.",
		workflow_pref_tracker_expired_deadline: "S'ha passat la data límit de pas del pas",
		workflow_pref_tracker_expired_deadline_hover: "Avisa'm quan una data límit de pas ha passat en un flux de treball que estic rastrejant.",
		workflow_pref_tracker_milestone_reached: "S'ha arribat a la fita",
		workflow_pref_tracker_milestone_reached_hover: "Avisa'm quan s'arribi a una fita en un flux de treball que estic rastrejant.",

		workflow_pref_out_notice: "Fora de l'oficina",
		workflow_pref_proxy_user: "Delega feina a",
		workflow_pref_proxy_user_hover: "Utilitzeu aquesta opció per encaminar automàticament la feina a un altre usuari, per exemple, quan estigueu fora de l'oficina o de vacances.",
		workflow_pref_workflow: "Flux de treball",
		workflow_pref_on: "Activat",
		workflow_pref_off: "Desactivat",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Inicia el flux de treball",
		transfered_workflows_dialog_info_text: "Seleccioneu un flux de treball per iniciar-lo.",
		transfered_workflows_dialog_available_items_label: "Elements disponibles:",
		transfered_workflows_dialog_select_button_label: "Executa",
		transfered_workflows_dialog_name_col_hdr: "Nom",
		transfered_workflows_dialog_no_item_found: "No s'ha trobat cap flux de treball transferit.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transfereix el flux de treball",
		transfer_workflow_dialog_info_text: "Seleccioneu un flux de treball per transferir al sistema de flux de treball.",
		transfer_workflow_dialog_use: "Utilitza aquest nom de flux de treball",
		transfer_workflow_dialog_use_another: "Utilitza un altre nom de flux de treball",
		transfer_workflow_dialog_in_use: "El nom de flux de treball és: ",
		transfer_workflow_dialog_transfer_button_label: "Transfereix",
		transfer_workflow_dialog_no_items_found: "No s'ha trobat cap flux de treball transferit.",
		transfer_workflow_dialog_use_hover: "Especifiqueu el nom de flux de treball actual de la definició de flux de treball.",
		transfer_workflow_dialog_another_hover: "Especifiqueu un nom de flux de treball diferent o torneu a utilitzar un nom de flux de treball transferit i existent.",

		/*Search In control*/
		search_in_title: "Cerca a:",
		search_in_teamspaces: "Espais d'equip",
		search_in_repositories: "Dipòsits",
		search_in_thisteamspaces: "Aquest espai d'equip",

		ajaxViewer_save: "Desa anotacions",
		ajaxViewer_print: "Visualització prèvia d'impressió",
		ajaxViewer_firstPage: "Primera pàgina",
		ajaxViewer_previousPage: "Pàgina anterior",
		ajaxViewer_nextPage: "Pàgina següent",
		ajaxViewer_lastPage: "Darrera pàgina",
		ajaxViewer_unknownPageCount: "1 de ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} de ${1}",
		ajaxViewer_zoomOut: "Redueix el zoom",
		ajaxViewer_zoomIn: "Amplia el zoom",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Ajusta amplada",
		ajaxViewer_fitHeight: "Ajusta alçada",
		ajaxViewer_fitPage: "Ajusta pàgina",
		ajaxViewer_rotate270: "Gira 270 graus",
		ajaxViewer_rotate90: "Gira 90 graus",
		ajaxViewer_rotate180: "Gira 180 graus",
		ajaxViewer_darken: "Enfosqueix",
		ajaxViewer_lighten: "Il·lumina",
		ajaxViewer_lessContrast: "Menys contrast",
		ajaxViewer_moreContrast: "Més contrast",
		ajaxViewer_invert: "Inverteix",
		ajaxViewer_createHighlight: "Destaca",
		ajaxViewer_createNote: "Anota",
		ajaxViewer_editAnnotation: "Edita propietats de l'anotació",
		ajaxViewer_deleteAnnotation: "Suprimeix anotació",
		ajaxViewer_editAnnotationTitle: "Edita propietats de l'anotació",
		printableView_print: "Imprimeix",
		printableView_close: "Tanca",

		search_results_dropdown_button: "Visualització de resultats",
		search_results_columns_label: "Visualització de resultats de la cerca",
		search_results_columns_description: "Seleccioneu les propietats que voleu que es mostrin en els resultats de cerca.",
		search_results_sortby_label: "Ordena-ho per:",
		search_results_order_label: "Criteri d'ordenació:",
		search_results_accending_label: "Ascendent",
		search_results_descending_label: "Descendent",
		search_results_available_properties: "Disponible",
		search_results_selected_properties: "Seleccionada",
		search_rank_property: "Interval (només cerca de text)",
		search_name_attribute: "Nom (${0})",
		search_results_summary_enabled_label: "Habilita els resums de contingut (només cerca de text)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Cerques",
		manage_teamspace_classes_tab_title: "Classes",
		manage_teamspace_entry_templates_tab_title: "Plantilles d'entrada",
		manage_teamspace_team_tab_title: "Equip",
		manage_teamspace_roles_tab_title: "Rols",
		manage_teamspace_dialog_title: "Modifica l'espai d'equip",
		manage_teamspace_button_label: "Modifica l'espai d'equip",
		manage_teamspace_team_pane_heading: "Selecciona equip",
		manage_teamspace_classes_pane_heading: "Selecciona classes",
		manage_teamspace_entry_templates_pane_heading: "Selecciona plantilles d'entrada",
		manage_teamspace_no_rights_message: "No teniu els permisos apropiats per modificar l'espai d'equip.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Propietats d'espai d'equip",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Especifiqueu les propietats que es mostraran en documents i en carpetes de la llista de contingut quan els usuaris naveguin per l'espai d'equip. També podeu especificar l'ordre en què les propietats es visualitzen.",
		teamspace_props_sel_cols_use_default_label: "Utilitzeu els paràmetres de la pàgina <b>Navega</b> en el dipòsit",
		teamspace_props_sel_cols_use_default_tooltip: "Utilitzeu els paràmetres que s'especifiquen a la pàgina Navega del dipòsit a l'eina d'administració.",
		teamspace_props_general_tab_label: "General",
		teamspace_props_column_props_tab_label: "Propietats de visualització",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Selecciona el fitxer que s'ha d'importar",
		teamspace_import_template_instruction: "Podeu seleccionar un fitxer d'exportació de la plantilla de l'espai d'equip que s'ha d'importar.",
		teamspace_import_template_button_label: "Importa",
		teamspace_import_template_dialog_label: "Importa plantilla d'espai d'equip",

		/* Annotation Dialog */
		annotationDlg_title: "Anotacions",
		annotationDlg_description: "El document seleccionat té les següents anotacions:",
		annotationDlg_msg_noAnnotations: "No hi ha cap anotació. Feu clic a Afegeix per crear una anotació.",
		annotationDlg_pageLabel: "Pàgina: ${pageNum}",
		annotationDlg_accLabel: "ACCÉS: ${accType}",
		annotationDlg_accLabel_public: "Públic",
		annotationDlg_accLabel_private: "Privat",
		annotationDlg_accLabel_privateGroup: "Privat (${groupName})",
		annotationDlg_copiable: "Es pot copiar a un altre servidor",
		annotationDlg_cannotCopy: "No es pot copiar a un altre servidor",
		annotationDlg_addButtonLabel: "Afegeix",

		/* Share Dialog */
		is_shared: "Compartit",
		is_share_pending: "Compartició pendent",
		share_title: "Compartició del Box",
		share_instructions_new: "Envia un correu electrònic que inclou un enllaç del fitxer compartit. Tothom amb l'enllaç pot accedir al fitxer.",
		share_instructions_existing: "Envia un correu electrònic que inclou un enllaç del fitxer compartit. Tothom amb l'enllaç pot accedir al fitxer. Les demés persones poden tenir l'enllaç perquè algú altra ja ha compartit aquest fitxer.",
		share_instructions_another_version_shared: "Envia un correu electrònic que inclou un enllaç del fitxer compartit. Tothom amb l'enllaç pot accedir al fitxer. Les demés persones poden tenir l'enllaç perquè algú altra ja ha compartit una altra versió d'aquest fitxer.",
		share_buttonLabel_share: "Comparteix",
		share_email_addresses: "Envia a:",
		share_email_addresses_hover: "Quan finalitzi la compartició, s'envia un enllaç a aquestes adreces de correu electrònic. Si no introduïu res, l'enllaç s'envia a la vostra adreça de correu electrònic.",
		share_email_addresses_reshare_hover: "Quan finalitzi la compartició, s'envia un enllaç a aquestes adreces de correu electrònic. Si no introduïu res, no s'envia cap correu electrònic.",
		share_password: "Defineix contrasenya:",
		share_password_placeholder: "Opcional",
		share_comments: "Missatge:",
		share_comments_default: "M'agradaria compartir el meu fitxer amb vostè al Box.",
		share_myEmail: "Envia des de:",
		share_expiration: "Estableix data de caducitat:",
		share_expire: "L'accés venç:",
		share_expire_none: "Mai no venç",
		share_allowDownload: "Baixada permesa",
		share_add: "Afegeix",
		share_advanced_instructions: "La configuració de baixada, data de caducitat i contrasenya s'apliquen al fitxer compartit del Box.",
		share_advanced_existing_instructions: "La configuració de baixada, data de caducitat i contrasenya s'apliquen al fitxer compartit del Box.",
		share_options_edit_warning: "Important: tots els canvis en aquesta configuració afecten a tothom que tingui l'enllaç, incloses les persones que ja tinguin l'enllaç.",
		share_link: "Enllaç:",
		share_email_addresses_placeholder: "Adreces de correu electrònic",
		share_email_address_placeholder: "Adreça de correu electrònic",
		share_email_address_invalid: "Introduïu una adreça de correu electrònic vàlida.",
		share_cannot_share_with_self: "No podeu compartir fitxers amb vosaltres mateixos. Especifiqueu un altre usuari.",
		share_selected_version_with_minor_warning_hover: "La versió ${0} del document és compartida. Heu seleccionat la versió ${1}.<br><br><b>Advertiment</b>: Si compartiu la versió ${1}, ningú pot compartir la versió ${2} tret que suprimiu la compartició de la versió ${1}.",
		share_selected_version_hover: "La versió ${0} del document és compartida. Heu seleccionat la versió ${1}.",
		share_selected_version_message: "Important: la versió ${0} del document és compartida. Heu seleccionat la versió ${1}.",
		share_different_version_message: "Important: heu seleccionat la versió ${1}, però la versió ${0} del document ja és compartida.  No podeu compartir la versió ${1} si no és que primer suprimiu la compartició, però en el seu lloc podeu compartir l'enllaç a la versió ${0}.",
		share_version_message: "Important: la versió ${0} del document és compartida. Seleccioneu la versió que voleu compartir.",
		share_version_new: "Comparteix versió ${0}",
		share_version_new_p8_hover: "Al compartir aquest document es crea un enllaç específic només de la versió seleccionada.<br><br>Quan un document ja s'ha compartit:<ul><li>Podeu compartir una versió posterior i l'enllaç us redirigeix a la versió més recent.</li><li>No podeu compartir una versió anterior fins que primer no suprimiu la compartició.</li></ul>",
		share_version_new_cm_hover: "Al compartir aquest document es crea un enllaç específic només de la versió seleccionada.<br><br>Quan un document ja s'ha compartit:<ul><li>Podeu compartir una versió posterior i l'enllaç us redirigeix a la versió més recent.</li><li>No podeu compartir una versió anterior.</li></ul>",
		share_version_update: "Compartiu versió ${0} (actualitzeu les opcions de compartiment).",
		share_version_update_p8_hover: "La compartició d'aquest document manté l'enllaç només a la versió específica.<br><br>Quan un document ja s'ha compartit:<ul><li>Podeu compartir una versió posterior i l'enllaç us redirigeix a la versió més recent.</li><li>No podeu compartir una versió anterior fins que primer no suprimiu la compartició.</li></ul>",
		share_version_update_cm_hover: "La compartició d'aquest document manté l'enllaç només a la versió específica.<br><br>Quan un document ja s'ha compartit:<ul><li>Podeu compartir una versió posterior i l'enllaç us redirigeix a la versió més recent.</li><li>No podeu compartir una versió anterior.</li></ul>",
		share_version_change_to_current: "Compartiu versió ${0} (actualitzeu el compartiment amb la versió seleccionada).",
		share_version_change_to_current_p8_hover: "La compartició d'aquest document actualitza l'enllaç que apunta només a la versió seleccionada.<br><br>Quan un document ja s'ha compartit:<ul><li>Podeu compartir una versió posterior i l'enllaç us redirigeix a la versió més recent.</li><li>No podeu compartir una versió anterior fins que primer no suprimiu la compartició.</li></ul>",
		share_version_change_to_current_cm_hover: "La compartició d'aquest document actualitza l'enllaç que apunta només a la versió seleccionada.<br><br>Quan un document ja s'ha compartit:<ul><li>Podeu compartir una versió posterior i l'enllaç us redirigeix a la versió més recent.</li><li>No podeu compartir una versió anterior.</li></ul>",
		share_repository: "Dipòsit per fitxers compartits",
		share_repository_hover: "Si no veieu el dipòsit Box que voleu utilitzar, podeu afegir un nou dipòsit Box a la pàgina Dipòsits.",
		share_options: "Opcions de compartició",
		unshare_confirm: "Si suprimiu una compartició, es trenquen tots els enllaços de la compartició, inclosos els enllaços de la compartició enviats anteriorment per altres usuaris. Tots els altres usuaris que vulguin compartir el document han de seleccionar el document original i tornar a compartir-lo.<br><br>Esteu segur que voleu suprimir la compartició?",
		unshare_button: "Suprimeix compartició del Box",
		admin_share: "Serveis de compartició del Box:",
		admin_share_hover: "Permet als usuaris compartir un document des de qualsevol dipòsit que tingui habilitat la compartició del Box. Compartir un document inclou copiar el fitxer en el Box, crear un enllaç i enviar l'enllaç per correu electrònic.",
		admin_my_email_modifiable: "Permet als usuaris modificar l'adreça de correu electrònic d'Envia des de",
		admin_my_email_modifiable_hover: "Per defecte, per a la compartició Box, l'adreça de correu electrònic de l'usuari és només de lectura i s'obté d'un mapatge d'usuaris o adreces de correu electrònic que representen comptes d'usuari Box.<br><br>Seleccioneu aquesta opció per permetre als usuaris editar l'adreça de correu electrònic quan comparteixin; no obstant això, la validesa de l'adreça de correu electrònic no s'ha verificat.",
		admin_repos_admin_user: "Administrador de compartició:",
		admin_repos_admin_user_hover: "Definiu l'administrador de compartició si teniu un escriptori amb els serveis de compartició del Box activats i aquest dipòsit Box seleccionat com a dipòsit dels fitxers compartits.<br><br>Feu clic a Defineix i inicieu sessió en el Box mitjançant un compte d'administrador vàlid del Box.<br><br>L'administrador de compartició ha de ser un usuari administrador Box configurat per tenir emmagatzematge sense límit en el Box.",
		admin_repos_admin_user_not_set_warning: "L'administrador del Box no s'ha configurat per al dipòsit seleccionat.<br><br>Els serveis de compartició del Box estan inhabilitats fins que definiu l'administrador del Box del dipòsit seleccionat o seleccioneu un altre dipòsit Box on s'hagi configurat l'administrador del Box.<br><br>Podeu definir l'administrador Box a la secció de serveis de compartició del Box a la pàgina General del dipòsit.",
		admin_share_not_configured_warning: "Per poder utilitzar els serveis compartits del Box, primer heu d'afegir i seleccionar un dipòsit del Boc amb autenticació de servidor.",
		/* Office Online Server settings */
		admin_office_online_title: "Configuració de l'Office Online:",
		admin_office_online_server_enable: "Servidor de l'Office Online:",
		admin_office_online_server_enable_hover: "Especifiqueu si voleu que els usuaris amb accés a aquest escriptori puguin editar els seus documents de l'Office utilitzant el servidor de l'Office Online.",		
		admin_office_online_allow_collaborative_editing: "Permet edició col·laborativa",
		admin_office_online_allow_collaborative_editing_hover: "Permet que diversos usuaris treballin en el mateix document. Esborreu l'opció si voleu restringir l'edició de documents a un usuari.",
		admin_office_online_repository_not_set_warning: "Per poder utilitzar el servei de l'Office Online, primer heu d'habilitar el servei en un dipòsit i especificar l'URL del servidor del Microsoft Office Online. Feu clic a <b>Dipòsits</b>, seleccioneu un dipòsit i a la pestanya <b>Edita integració</b>, habiliteu el servei. Feu clic a <b>Paràmetres > General</b> i introduïu l'URL del servidor del Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Especifiqueu si voleu utilitzar el servidor de l'Office Online per treballar amb documents de l'Office.",
		admin_office_online_server_url: "URL del servidor del Microsoft Office Online",
		admin_office_online_server_url_hover: "Especifiqueu l'URL mitjançant el qual altres aplicacions es poden comunicar amb el servidor de l'Office Online. L'URL té el format http://nom_servidor:número_port/hosting/discovery.",
		admin_office_online_server_Verified: "Verificat",
	    admin_office_online_server_Failed: "<b>Ha fallat</b>",

		admin_repcfg_office_online_service_p8_hover: "Per inicialitzar el dipòsit i utilitzar el servidor de l'Office Online, podeu afegir el fitxer de plantilla inicial per a cada aplicació de l'Office. Si no s'especifica una plantilla, s'utilitzarà la plantilla per defecte.",	
		admin_repcfg_office_online_server_integration: "Integració del servidor de l'MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Per poder utilitzar el servidor de l'Office Online, primer heu d'especificar l'URL del servidor del Microsoft Office Online. Feu clic a Paràmetres > General i introduïu l'URL",
		admin_repcfg_office_online_word_template_name: "Plantilla del Word per defecte",
		admin_repcfg_office_online_excel_template_name: "Plantilla de l'Excel per defecte",
		admin_repcfg_office_online_powerpoint_template_name: "Plantilla del PowerPoint per defecte",
		admin_repcfg_office_online_blank_template_description: "Aquesta és la plantilla per defecte que s'utilitzarà si no s'afegeix una plantilla pròpia.",
		/* Edit Service settings */
		admin_icn_edit_title: "Edita configuració",	
	    admin_icn_edit_files_cleanup_interval: "Interval de neteja de fitxers temporals (en dies):",
	    admin_icn_edit_files_cleanup_interval_hover: "Podeu establir la quantitat de temps que es conserven els fitxers temporals al client d'edició de l'ICN. El temps per defecte és de 20 dies. El temps màxim és de 20 dies. El temps mínim és d'1 dia.",
	    admin_icn_edit_service_integration: "Integració de servei d'edició",
	    admin_icn_edit_service_integration_intro: "El servei d'edició permet que els usuaris afegeixin o editin fàcilment fitxers a les aplicacions natives instal·lades als seus ordinadors.<br><br><b>Important:</b> si habiliteu el servei d'edició, s'ha de desar la configuració del dipòsit per poder editar les categories predefinides.",
		admin_icn_edit_service: "Servei d'edició:",
		admin_icn_edit_enable_hover: "per utilitzar el servei d'edició, cal:<ul><li>Habilitar el servei al dipòsit</li><li>Habilitar el servei als escriptoris de l'entorn</li><li>Instal·lar el client d'edició de l'IBM Content Navigator a les estacions de treball de l'usuari</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Habilita",
		admin_icn_edit_disable: "Inhabilita",
		admin_icn_edit_create_new_category: "Nova categoria",
		admin_icn_edit_delete_category: "Suprimeix categoria",
		admin_icn_edit_edit_category: "Edita categoria",
		admin_icn_edit_disable_category: "Inhabilita categoria",
		admin_icn_edit_enable_category: "Habilita categoria",
		admin_icn_edit_new_category_dialog_title: "Nova categoria",
		admin_icn_edit_edit_category_dialog_title:"Edita categoria",
		admin_icn_edit_new_category_dialog_instructions: "Les categories de document permeten associar plantilles amb tipus MIME específics per al servei d'edició. Per exemple, podeu associar un conjunt de plantilles amb fitxers PDF perquè els usuaris puguin aplicar plantilles quan afegeixin o editin fitxers des del client d'edició de l'IBM Content Navigator. <br><br><b>Important:</b> heu de desar la configuració del dipòsit per poder afegir plantilles a la categoria que creeu. ",
		admin_icn_edit_edit_category_dialog_instructions: "Heu de desar la configuració del dipòsit per poder afegir plantilles a aquesta categoria. ",
		admin_icn_edit_delete_category_dialog_instructions: "Voleu suprimir aquesta categoria i les plantilles que té associades?<br><br><b>Important:</b> els canvis no seran permanents fins que deseu els canvis al dipòsit. ",
		admin_icn_edit_category_label: "Categoria: ",
		admin_icn_edit_category_discription_label:"Descripció: ",
		admin_icn_edit_template_column_head:"Nom de la plantilla",
		admin_icn_edit_category_duplicate_error_message: "Ja existeix una categoria amb aquest ID. ",
		admin_icn_edit_word_category_description: "Aquesta categoria defineix les plantilles disponibles per als documents del Microsoft Word al servei d'edició. ",
		admin_icn_edit_excel_category_description: "Aquesta categoria defineix les plantilles disponibles per als documents del Microsoft Excel al servei d'edició. ",
		admin_icn_edit_powerpoint_category_description: "Aquesta categoria defineix les plantilles disponibles per als documents del Microsoft PowerPoint al servei d'edició. ",

		icn_edit_add_template_dialog_title:"Afegeix una plantilla ${0}",
		icn_edit_add_template_only_one_file_error: "Només podeu seleccionar un fitxer.",
		icn_edit_add_template_file_type_error: "Heu d'especificar un fitxer de plantilla de ${0} vàlid.<br><br>El document seleccionat té un tipus MIME de ${1}.<br><br>Tipus MIME vàlids: ${2}.",
		icn_edit_change_template_dialog_title: "Edita plantilla de ${0}",
		icn_edit_action_in_new_menu_name:"Document ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "amb l'Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "amb aplicacions d'escriptori",
		icn_edit_new_document_dialog_title: "Nou document ${0}",
		icn_edit_new_document_dialog_intro: "Creeu un nou document ${0} i afegiu-lo al dipòsit. El document es crearà amb la plantilla de servei d'edició seleccionada.", 
		icn_edit_select_edit_service_template: "Seleccioneu una plantilla",
		icn_edit_edit_service_template: "Plantilla de servei d'edició:",
		icn_edit_new_document_category_no_templates_message:"No hi ha plantilles en aquesta categoria. Poseu-vos en contacte amb l'administrador per afegir plantilles a aquesta categoria.",
		icn_edit_installer: "Instal·lador del Servei d'edició de l'IBM Content Navigator",
		admin_icn_cm_classes_and_roles_settings: "Paràmetres de classe i rol",
		admin_repcfg_classes_and_roles_warning: "Per especificar classes i usuaris o grups d'usuaris que tinguin permís per crear, editar i utilitzar plantilles o per crear esborranys de documents que funcionin amb el servei Office Online o amb el Servei d'edició.",
		admin_repcfg_classes_and_roles_click_warning: "feu clic aquí.",
		/* Edit Service settings END */
		share_no_my_email_error: "Hi ha un problema en la identificació de l'adreça de correu electrònic necessària per compartir el document.",
		share_no_my_email_error_explanation: "Heu iniciat sessió amb l'ID d'usuari ${0}, però l'ID d'usuari no està mapat amb una adreça de correu electrònic.",
		share_no_my_email_error_userResponse: "Proveu de tornar a iniciar sessió o inicieu sessió mitjançant un ID d'usuari diferent. Si el problema continua, informeu d'aquest error a l'administrador del sistema.",
		share_no_my_email_error_adminResponse: "L'ID d'usuari ${0} no està mapat amb una adreça de correu electrònic i l'escriptori ${1} no permet que els usuaris editin l'adreça de correu electrònic per als serveis de compartició del Box.<br><br>Proveu una de les solucions següents:<br>Comproveu que s'hagi registrat el connector Email Mapping.<br>Comproveu que el fitxer emailMappingPlugin.json inclou l'ID d'usuari ${0} i l'adreça de correu electrònic de l'usuari i després munteu, configureu i registreu el connector Email Mapping.<br>Si no voleu utilitzar el connector Email Mapping o el directori de l'adreça de correu electrònic del FileNet P8, però voleu permetre que els usuaris puguin introduir l'adreça de correu electrònic quan comparteixin un document, podeu modificar la configuració de l'escriptori per als serveis de compartició del Box per tal que els usuaris puguin enviar l'enllaç des d'una altra adreça de correu electrònic.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Una versió posterior d'aquest document s'està compartint i no podeu compartir la versió seleccionada d'aquest document.",
		share_later_version_shared_error_explanation: "No podeu compartir una versió anterior d'un document que s'hagi compartit anteriorment.",
		share_later_version_shared_error_userResponse: "Per enviar l'enllaç a la versió posterior del document, primer heu de seleccionar la versió posterior i després utilitzar l'acció Comparteix.<br><br>Per compartir la versió seleccionada del document, primer heu de suprimir el fitxer compartit de la versió posterior del document.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Missatge nou",
		email_from: "Des de:",
		email_to: "A:",
		email_cc_link: "A/c",
		email_bcc_link: "C/o",
		email_cc: "A/c:",
		email_bcc: "C/o:",
		email_address_invalid: "Introduïu una adreça de correu electrònic vàlida.",
		email_subject: "Assumpte:",
		email_message: "Missatge:",
		email_message_placeholder: "Afegeix un missatge",
		email_attachments: "Fitxers adjunts:",
		email_links: "Enllaços:",
		email_send: "Envia",
		email_dont_send: "No ho enviïs",
		email_subject_reminder: "Recordatori de tema",
		email_subject_reminder_confirm: "Voleu enviar aquest missatge sense assumpte?",
		email_missing_from_error: "Hi ha un problema en la identificació de l'adreça de correu electrònic Envia des de necessària per enviar el correu electrònic.",
		email_missing_from_error_explanation: "Heu iniciat sessió amb l'ID d'usuari ${0}, però l'ID d'usuari no està mapat amb una adreça de correu electrònic.",
		email_missing_from_error_userResponse: "Proveu de tornar a iniciar sessió o inicieu sessió mitjançant un ID d'usuari diferent. Si el problema continua, informeu d'aquest error a l'administrador del sistema.",
		email_missing_from_error_adminResponse: "L'ID d'usuari ${0} no està mapat amb una adreça de correu electrònic i l'escriptori ${1} no permet que els usuaris editin l'adreça de correu electrònic Envia des de.<br><br>Proveu una de les solucions següents:<br>Comproveu que s'hagi registrat el connector Email Mapping.<br>Comproveu que el fitxer emailMappingPlugin.json inclou l'ID d'usuari ${0} i l'adreça de correu electrònic de l'usuari i després munteu, configureu i registreu el connector Email Mapping.<br>Si no voleu utilitzar el connector Email Mapping o el directori d'adreces de correu electrònic FileNet P8, sinó que voleu permetre que els usuaris puguin introduir les seves pròpies adreces quan envien un correu electrònic, podeu modificar la configuració de correu electrònic per permetre que els usuaris modifiquin l'adreça de correu electrònic Envia des de.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "No es pot obrir el document.",
		open_edit_document_with_native_application_error_explanation: "L'IBM Content Navigator no es pot connectar amb el client d'edició de l'IBM Content Navigator.",
		open_edit_document_with_native_application_error_userResponse: "Instal·leu i inicieu el client d'edició de l'IBM Content Navigator a l'estació de treball. Tot seguit, proveu de tornar a obrir el document.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "No es pot obrir el document.",
		connect_to_the_streamline_service_error_explanation: "L'IBM Content Navigator no es pot connectar amb el client d'edició de l'IBM Content Navigator.",
		connect_to_the_streamline_service_error_userResponse: "Instal·leu i inicieu el client d'edició de l'IBM Content Navigator a l'estació de treball. Tot seguit, proveu de tornar a obrir el document.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "L'IBM Content Navigator no està configurat correctament per compartir documents.",
		share_not_configured_error_explanation: "La característica de compartició del Box ha d'estar configurada correctament abans de compartir documents.",
		share_not_configured_error_userResponse: "Poseu-vos en contacte amb l'administrador i sol·liciteu la configuració de la característica de compartició del Box.",
		share_not_configured_error_adminResponse: "Els elements següents han d'estar configurats abans de compartir documents:<ul><li>El servei del gestor de tasques ha d'estar habilitat als valors de l'eina d'administració.</li><li>L'ID de connexió del gestor de tasques ha d'estar configurat al dipòsit.</li><li>L'ús compartit ha d'estar habilitat al dipòsit.</li><li>Un dipòsit del Box ha d'estar seleccionat per compartir a l'escriptori.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Els canvis de propietats no s'han desat per a la versió nova",
		checkin_cors_save_attributes_error_explanation: "La versió s'ha creat, però els canvis de propietats no s'han desat. El document es pot extreure igualment.",
		checkin_cors_save_attributes_error_userResponse: "Desbloquegeu el document i actualitzeu les propietats utilitzant l'element de menú contextual de les propietats.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Els canvis de propietats no s'han desat per al document nou",
		add_cors_save_attributes_error_explanation: "El document s'ha creat, però els canvis de propietats no s'han desat.",
		add_cors_save_attributes_error_userResponse: "Actualitzeu les propietats utilitzant l'element de menú contextual de les propietats.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "No es pot obrir el document.",		
		edit_document_using_edit_service_error_explanation: "No es pot obrir el document al Servei d'edició.",
		edit_document_using_edit_service_error_userResponse: "Demaneu a l'administrador que actualitzi la integració del Servei d'edició.<br><br> Si l'usuari ha d'accedir a aquest document des del Servei d'edició, aneu a la pàgina Edita integració del dipòsit i actualitzeu el Servei d'edició per incloure la classe a la llista de classes que cal modificar per al suport del Servei d'edició.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "No es pot obrir el document.",		
		edit_document_is_editing_by_oos_error_explanation: "El document l'està utilitzant el servei Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Heu de desar i tancar el document al servei Office Online per poder-lo obrir al Servei d'edició.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Habilita càrregues CORS (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Paràmetres de correu electrònic:",
		admin_email_settings_hover: "Especifiqueu el tipus de servei de correu electrònic que vulgueu que utilitzin els usuaris. Quan habiliteu el servei de correu electrònic basat en HTML, teniu l'opció de permetre que els usuaris modifiquin la seva adreça de correu electrònic Envia des de. Si voleu habilitar el servei de correu electrònic basat en Java, heu de tenir un navegador que admeti Java.",
		admin_email_use_service: "Utilitza el servei de correu electrònic basat en HTML",
		admin_email_use_applet: "Utilitzeu el servei de correu electrònic basat en Java",
		admin_email_can_modify_from: "Permet als usuaris modificar l'adreça de correu electrònic Envia des de",
		admin_email_can_modify_from_hover: "Per defecte, l'adreça de correu electrònic d'Envia des de, no es pot modificar i s'obté d'un mapatge d'usuaris i adreces de correu electrònic que representen comptes d'usuari.<br><br>Seleccioneu aquesta opció per permetre als usuaris editar l'adreça de correu electrònic quan enviïn un correu electrònic; no obstant això, la validesa de l'adreça de correu electrònic no s'ha verificat.",
		admin_email_use_from_as_sender: "Utilitzeu l'adreça de correu electrònic Envia des de com a remitent del correu electrònic",
		admin_email_use_from_as_sender_hover: "Per defecte, s'utilitza una adreça de correu electrònic Envia des de a missatges de correu electrònic de l'usuari. L'adreça de correu electrònic es defineix per la sessió de correu CNMailSession al servidor d'aplicacions. Seleccioneu aquesta opció per especificar que s'ha d'utilitzar l'adreça de correu electrònic de l'usuari al correu electrònic.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Anotacions noves",
		addAnnotationDlg_labelContents: "Contingut:",
		addAnnotationDlg_labelAccess: "Accés:",
		addAnnotationDlg_labelPublic: "Públic",
		addAnnotationDlg_labelPrivate: "Privat",
		addAnnotationDlg_labelPrivateGroup: "Privat pel grup",
		addAnnotationDlg_labelGroup: "Grup",
		addAnnotationDlg_labelCopiable: "L'anotació es pot copiar a un altre servidor.",
		addAnnotationDlg_buttonLabel_save: "Desa",

		/* Skip navigation */
		skipNavigation_title_main: "Vés al contingut principal",
		skipNavigation_title_menu: "Vés als botons de navegació",
		skipNavigation_label_main: "Vés al contingut principal",
		skipNavigation_label_menu: "Vés als botons de navegació",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gestiona espais d'equip",
		manage_teamspace_pane_instance_hdr: "Espais d'equip",
		manage_teamspace_pane_template_hdr: "Plantilles",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Desplaça cap avall",
		scroll_back: "Desplaça cap amunt",

		breadcrumb_separator_open: "Obre el node",
		breadcrumb_separator_close: "Tanca el node",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "No s'ha seleccionat cap element.",

		/* eds */
		eds_url: "URL de servei de dades externes:",
		eds_request_timeout: "Temps d'espera de sol·licitud del servei (segons):",
		eds_is_required: "Evita que els usuaris realitzin accions que canviïn els valors de les propietats quan EDS no està disponible.",

		/* eforms */
		eform_signing_pane_welcome: "Signa el formulari",
		eform_signing_button_label: "Signa",
		eform_signing_pane_delete: "Suprimeix la signatura",
		eform_signing_button_label_delete: "Suprimeix",

		xtplugin_server_label: "URL del servidor de l'IBM FileNet Workplace XT",
		xtplugin_server_hover: "Especifiqueu l'URL del servidor on l'IBM FileNet Workplace XT es desplega, per exemple, http://sistemaprincipal_local:8080/WorkplaceXT.",

		ecplugin_server_label: "URL del servidor de l'IBM eClient",
		ecplugin_server_hover: "Especifiqueu l'URL del servidor on l'IBM eClient es desplega, per exemple, http://sistemaprincipal_local:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Les accions en una gran quantitat d'elements pot trigar una mica més. Voleu continuar?",
		large_number_actions_continue_button: "Continua",

		large_items_actions_confirmation_question: "Les accions en elements grans poden trigar una mica més. Voleu continuar?",

		viewer_editproperties_title: "Confirmació",
		viewer_editproperties_title_warning: "Advertiment",
		viewer_editproperties_save: "Desa",
		viewer_editproperties_next: "Següent",
		viewer_editproperties_reset: "Restableix",
		viewer_editproperties_reset_hover: "Qualsevol dada sense desar es restablirà al valor desat anteriorment.",
		viewer_editproperties_saveandgetnext: "Desa i continua",
		viewer_editproperties_saveandgetnext_hover: "Obtén el document següent automàticament després de desar els meus canvis",
		viewer_editproperties_prompt_save_changes: "Heu canviat les propietats del document següent<br>${0}<br><br>Voleu desar els canvis?",
		viewer_editproperties_prompt_discard_changes: "Heu canviat les propietats del document següent<br>${0}<br><br>Tanmateix, una o diverses propietats tenen un valor no vàlid i per tant els canvis no es poden desar. Podeu corregir els valors no vàlids o descartar els canvis.<br>Voleu corregir els valors no vàlids que es mostren al panell de propietats?",
		viewer_comments_prompt_discard_changes: "Heu modificat els comentaris. Voleu desar els canvis?",
		viewer_notelogs_prompt_discard_changes: "Heu modificat els registres de notes. Voleu desar els canvis?",
		social_collaborated_version: "Versió: ${0}",
		social_link_label: "Qui...",

		// social comments
		comments: "Comentaris",
		comments_add_hint: "Premeu la tecla Retorn per afegir els comentaris.",
		comments_hint: "Introduïu els comentaris que vulgueu afegir.",
		comments_label: "Premeu la tecla Retorn o la tecla de tabulació per desar els comentaris. Premeu Esc per anul·lar.",
		comments_delete_confirmation: "Voleu suprimir el comentari seleccionat?",
		comments_number: "Comentaris: ${0}",
		comments_save_new: "Heu modificat els comentaris. Voleu tancar la finestra sense desar els canvis?",

		notelogs: "Registres de notes",
		notelogs_download: "Baixa",
		notelog_modify: "Desa els canvis",
		notelog_edit: "Edita el registre de notes",
		notelog_create_newVersion: "Crea una nova versió del registre de notes",
		notelog_add_hint: "Introduïu els comentaris i premeu la tecla Retorn per afegir.",
		notelog_hint: "Premeu Majús+Retorn pel salt de línia",
		notelog_add_placeholder: "Premeu la tecla Retorn per afegir comentaris al registre de notes.",
		notelog_save_new: "Heu modificat el registre de notes. Voleu tancar la finestra sense desar els canvis?",

		// P8 markings related
		cannot_remove_markings: "No teniu permís per eliminar els valors de marca: {0}",

		// download count
		downloadcount: "Baixades: {0}",
		downloadcount_single: "1 baixada",
		downloadcount_multiple: "{0} baixades",
		downloadcount_none: "Ningú s'ho ha baixat encara",

		// recommendations
		recommendations: "M'agrada: {0}",
		recommendations_recommend: "M'agrada",
		recommendations_unrecommend: "No m'agrada",
		recommendations_you: "Us agrada",
		recommendations_you_and_another: "A vostè i a una altra persona us agrada",
		recommendations_you_and_others: "A vostè i a {0} persones us agrada",
		recommendations_another: "A 1 persona li agrada això",
		recommendations_others: "A {0} persones els agrada això",
		recommendations_none: "A ningú no li agrada encara",

		// tags
		tags: "Etiquetes: ${0}",
		tags_delete: "Suprimeix ${0}",
		tags_none: "No hi ha etiquetes per mostrar.",
		tags_add: "Afegeix etiquetes:",
		tags_hint: "Premeu Retorn per afegir les vostres etiquetes.",
		tags_hover_help: "Especifiqueu una etiqueta o una llista d'etiquetes que es podran utilitzar per cercar documents amb la mateixa etiqueta. Podeu utilitzar una coma (,), un punt i coma (;) o un espai per separar les etiquetes.",
		tags_hover_help_box: "Especifiqueu una etiqueta o una llista separada per comes d'etiquetes que es podran utilitzar per cercar documents amb la mateixa etiqueta.",
		tags_no_access: "No teniu el permís correcte per afegir etiquetes.",

		//task scheduler pane
		taskPane_tooltip: "Obre la visualització de tasques asíncrones",
		taskPane_tree: "Arbre de navegació del panell de tasques",
		taskPane_allTasks: "Totes les tasques",
		taskPane_scheduledTasks: "Tasques planificades",
		taskPane_recurringTasks: "Tasques recurrents",
		taskPane_inProgressTasks: "Tasques en curs",
		taskPane_completedTasks: "Tasques completades",
		taskPane_failedTasks: "Tasques que han fallat",
		taskPane_disabledTasks: "Tasques inhabilitades",
		taskPane_statusScheduled: "Planificada",
		taskPane_statusInProgress: "En curs",
		taskPane_statusCompleted: "Completat",
		taskPane_statusFailed: "Ha fallat",
		taskPane_statusPaused: "En pausa",
		taskPane_noItemSelected: "No hi ha cap element seleccionat",
		taskSchedulerPane_scheduleInformation: "Informació de planificació",
		taskSchedulerPane_loginInformation: "Informació de connexió",
		taskSchedulerPane_startImmediately: "Inicia immediatament",
		taskSchedulerPane_recurrence: "Repetició",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Informe de planificació",
		taskSchedulerPane_nameHoverHelp: "Escriviu el nom de la tasca.",
		taskSchedulerPane_descriptionHoverHelp: "Introduïu una descripció per a la tasca. La descripció ha d'ajudar a distingir entre tasques.",
		taskSchedulerPane_startTimeHoverHelp: "Especifiqueu quan voleu executar la tasca. Per executar la tasca ara, trieu Inicia immediatament.",
		taskSchedulerPane_recurrenceHoverHelp: "Podeu planificar la tasca que cal executar de forma periòdica.",
		taskSchedulerPane_endTimeHoverHelp: "Especifiqueu quan voleu aturar la tasca. La tasca s'executa des l'hora d'inici prevista a l'hora de finalització planificada.",
		taskSchedulerPane_usernameHoverHelp: "Per tasques recurrents, heu d'introduir un nom d'usuari per tal que el servei es pugui autenticar quan s'executa la tasca.",
		taskSchedulerPane_passwordHoverHelp: "Per tasques recurrents, heu d'introduir una contrasenya de l'usuari especificat per tal que el servei es pugui autenticar quan s'executa la tasca.",
		taskSchedulerPane_notification: "Notificació",
		taskSchedulerPane_emailAddress: "Adreça de correu electrònic",
		taskSchedulerPane_emailAddressHoverHelp: "Escriviu l'adreça de correu electrònic on voleu rebre notificacions sobre l'estat de la tasca.",
		taskSchedulerPane_intervalHoverHelp: "Especifiqueu la quantitat de temps durant el qual la tasca recurrent s'executarà. Podeu definir l'interval en hores, dies, setmanes o mesos.",
		taskSchedulerPane_scheduledStartTime: "Hora d'inici planificada",
		taskSchedulerPane_startTime: "Hora d'inici",
		taskSchedulerPane_title: "Planificació",
		taskSchedulerPane_runNow: "Executa ara",
		taskSchedulerPane_runOnce: "Executa un cop",
		taskSchedulerPane_runAtSchedule: "Executa en una planificació",
		taskSchedulerPane_repeats: "Es repeteix",
		taskSchedulerPane_repeatsEvery: "Es repeteix cada",
		taskSchedulerPane_hourly: "Cada hora",
		taskSchedulerPane_daily: "Diàriament",
		taskSchedulerPane_weekly: "Setmanalment",
		taskSchedulerPane_monthly: "Mensualment",
		taskSchedulerPane_yearly: "Anualment",
		taskSchedulerPane_sunday: "Diu.",
		taskSchedulerPane_monday: "Dl.",
		taskSchedulerPane_tuesday: "Dm.",
		taskSchedulerPane_wednesday: "Dc.",
		taskSchedulerPane_thursday: "Dm.",
		taskSchedulerPane_friday: "Dv.",
		taskSchedulerPane_saturday: "Diu.",
		taskSchedulerPane_starting: "Data d'inici",
		taskSchedulerPane_after: "Després de",
		taskSchedulerPane_ending: "Data de finalització",
		taskSchedulerPane_times: "hores",
		taskSchedulerPane_days: "dies",
		taskSchedulerPane_hours: "hores en el dia",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Finalitza (en dies)",
		taskSchedulerPane_never: "Mai",
		taskSchedulerPane_categorization: "Categorització",
		taskSchedulerPane_scheduleTask: "Tasca de planificació",
		taskInformationPane_details: "Detalls",
		taskInformationPane_errors: "Errors",
		taskInformationPane_taskInstances: "Instàncies de tasca",
		taskInformationPane_audits: "Auditories",
		taskInformationPane_results: "Resultats",
		asyncTasks: "Tasques asíncrones",

		//entry template pane
		search_all_entry_templates: "Cerca en totes les plantilles d'entrada.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Visualitza el lloc complet",
		mobilesite: "Visualitza el lloc de dispositius mòbils",
		profile: "Gestiona el perfil",
		office_template: "Plantilla de l'Office:",
		select_office_template: "Selecciona una plantilla de l'Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Els documents seleccionats no es poden obrir al visualitzador amb l'acció Combina i divideix.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "El visualitzador configurat per a documents PDF i TIFF no admet l'acció Combina i divideix.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Demaneu a l'administrador del sistema que configuri un visualitzador per als documents PDF i TIFF que admeti l'acció Combina i divideix, com ara el visualitzador Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Els documents PDF seleccionats no es poden obrir al visualitzador amb l'acció Combina i divideix.",
		document_builder_pdf_unsupported_viewer_error_explanation: "El visualitzador configurat per a documents PDF no admet l'acció Combina i divideix.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Demaneu a l'administrador del sistema que configuri un visualitzador per als documents PDF que admeti l'acció Combina i divideix, com ara el visualitzador Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Els documents TIFF seleccionats no es poden obrir al visualitzador amb l'acció Combina i divideix.",
		document_builder_tiff_unsupported_viewer_error_explanation: "El visualitzador configurat per a documents TIFF no admet l'acció Combina i divideix.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Demaneu a l'administrador del sistema que configuri un visualitzador per als documents TIFF que admeti l'acció Combina i divideix, com ara el visualitzador Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Els documents seleccionats no es poden obrir al visualitzador amb l'acció Combina i divideix.",
		document_builder_unsupported_documents_error_explanation: "L'acció Combina i divideix només funciona amb documents PDF i TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Seleccioneu els documents suportats i torneu-ho a provar.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Alguns dels documents seleccionats no es poden obrir al visualitzador amb l'acció Combina i divideix.",
		document_builder_some_unsupported_documents_error_explanation: "L'acció Combina i divideix només funciona amb documents PDF i TIFF oberts des del mateix dipòsit.",
		document_builder_some_unsupported_documents_error_userResponse: "Els documents suportats s'obriran al visualitzador.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "S'ha produït un error en incorporar el contingut modificat.",
		document_builder_checkin_failed_explanation: "El visualitzador ha rebut una resposta d'error mentre incorporava el contingut modificat.",
		document_builder_checkin_failed_userResponse: "Demaneu a l'administrador del sistema que revisi els fitxers de registre del servidor d'aplicacions web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "No es pot obrir el document.",
		no_viewer_to_view_error_explanation: "L'administrador del sistema ha bloquejat la visualització d'aquest document. Si heu d'accedir a aquest document, podeu baixar-lo.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "No s'ha pogut generar el contingut.",
		document_build_failed_userResponse: "Demaneu a l'administrador del sistema que revisi els fitxers de registre del visualitzador.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "No s'ha pogut obrir el document en mode Fusiona i divideix.",
		document_builder_open_failed_userResponse: "Demaneu a l'administrador del sistema que revisi els fitxers de registre del visualitzador.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "El sistema no ha pogut commutar al mode Fusiona i divideix.",
		document_builder_switch_failed_userResponse: "Demaneu a l'administrador del sistema que revisi els fitxers de registre del visualitzador.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documents",
		print_service_page_setup_tab_title: "Configuració de la pàgina",
		print_service_OD_print_tab_title: "Opcions d'impressora",
		print_service_status_merging: "S'estan fusionant els documents...",
		print_service_status_converting: "S'estan convertint els documents...",
		print_service_status_formatting: "S'estan formatant els documents per imprimir-los...",
		admin_print_service_maximum_number_to_print: "Nombre màxim de documents per imprimir:",
		admin_print_service_maximum_size_to_print: "Nombre màxim de dades per imprimir (en MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Especifiqueu el nombre màxim de documents que els usuaris poden imprimir a la vegada. El valor màxim per defecte és 50. Si no voleu limitar la impressió per nombre de documents, definiu aquest límit amb el valor 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Restricció:</b> aquest paràmetre no s'admet a l'IBM Content Manager OnDemand.<br/><br/>Especifiqueu el volum màxim de dades que es poden imprimir utilitzant el servei IBM Daeja ViewONE. <br /><br />La mida total de cada document no pot superar aquesta quantitat.<br/><br/>El límit per defecte és 200 MB. Si definiu el paràmetre amb un valor superior a 200 MB, pot ser que això afecti el rendiment del sistema. Si no voleu limitar la impressió per la mida dels documents, definiu aquest límit amb el valor 0",
		// error printing
		print_service_error_printing: "S'ha produït un error durant la impressió.",
		print_service_error_printing_userResponse: "Demaneu a l'administrador del sistema que revisi els fitxers de registre del servei d'impressió.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Els documents seleccionats són massa grans per imprimir-los.",
		print_service_max_content_error_explanation: "Els documents seleccionats excedeixen el límit de ${0} MB de dades.",
		print_service_max_content_error_userResponse: "Seleccioneu menys documents o seleccioneu documents més petits i torneu a imprimir-los. També us podeu posar en contacte amb l'administrador del sistema per tal que augmenti la mida màxima dels elements que podeu imprimir a la vegada en l'escriptori.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Els elements no es poden imprimir.",
		print_service_max_number_selected_error_explanation: "Podeu imprimir fins a ${0} alhora. Esteu intentant imprimir ${1} elements.",
		print_service_max_number_selected_error_userResponse: "Seleccioneu menys elements i torneu a imprimir els elements. També us podeu posar en contacte amb l'administrador del sistema per tal que augmenti el nombre màxim d'elements que podeu imprimir a la vegada en l'escriptori.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


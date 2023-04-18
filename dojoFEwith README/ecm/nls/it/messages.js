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
		welcome_user: "Benvenuto, ",
		about: "Informazioni...",
		all: "Tutto",
		help: "Guida",
		user_session: "Sessione utente",
		user_session_for: "Sessione utente per ${0}",
		user_session_for_with_container: "Sessione utente per ${0} (${1})",
		tools: "Strumenti",
		login: "Accedi",
		logout: "Disconnetti",
		search: "Ricerca",
		saved_searches: "Ricerche salvate",
		content_analytics: "Analizza contenuto",
		reset: "Reimposta",
		reset_hover: "I dati non salvati in tutte le schede verranno reimpostati sui valori salvati precedentemente.",
		reset_default: "Elimina tutto",
		reset_default_hover: "Elimina i campi di etichetta corrente su tutte le schede.",
		locale: "Locale:",
		up: "Su",
		down: "Giù",
		restore: "Ripristina",
		maximize: "Massimizza",
		values_label: "Valori",
		value_label: "Valore:",
		path_label: "Percorso:",
		new_label: "Nuovo:",
		back_label: "Indietro",
		clear: "Cancella i dati",
		set: "Imposta...",
		browse: "Sfoglia",
		work: "Lavoro",
		connect: "Connetti",
		documents: "Documenti:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM e il logo IBM sono marchi di IBM Corporation, registrati in molte giurisdizioni nel mondo. Java e tutti i marchi e logo basati su Java sono marchi o marchi registrati di Oracle e/o società affiliate. Oracle Outside In Technology qui incluso è soggetto a una licenza d'uso soggetta a limitazioni e può essere utilizzato solo insieme alla presente applicazione. Questo programma è concesso in licenza in base alle clausole dell'accordo di licenza fornito con il Programma.  Tale accordo di licenza potrebbe trovarsi in una cartella o in una libreria della directory del Programma con la denominazione \"License\" o \"Non_IBM_License\", se applicabile, oppure fornito come accordo di licenza in formato cartaceo. Leggere attentamente questo contratto prima di utilizzare il programma. L'utilizzo del programma comporta l'accettazione dei termini in esso riportati. ",
		edit: "Modifica",
		cancel: "Annulla",
		close: "Chiudi",
		close_all: "Chiudi tutte le schede",
		close_others: "Chiude altre schede",
		ok: "OK",
		yes: "Sì",
		no: "No",
		open: "Apri",
		refresh: "Aggiorna",
		refresh_cabinets: "Aggiorna tutti i modelli",
		delete_text: "Elimina",
		export_config: "Esporta configurazione",
		description: "Descrizione",
		true_label: "Vero",
		false_label: "Falso",
		error: "Errore",
		error_reference_hover: "Consultare www.ibm.com per ulteriori informazioni su questo errore.",
		url_label: "URL",
		default_label: "Predefinito",
		ibm_label: "IBM",
		light_label: "Chiaro",
		dark_label: "Scuro",
		save: "Salva con nome",
		saveAs: "Salva con nome...",
		save_and_close: "Salva e chiudi",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Nessuno",
		Name: "Nome",
		"${NAME}": "Nome",
		mime_type: "Tipo MIME",
		mime_type_contains_label: "Il tipo MIME contiene",
		mime_type_header: "Tipo MIME",
		mime_type_icon: "Icona tipo MIME",
		casesearch: "Pratica",
		item: "Elemento",
		no_mime_type: "Questo elemento non ha contenuto.",
		items_selected: "${0} elementi selezionati.",
		requestor: "Richiesto da",
		scheduledStartTime: "Ora iniziale programmata",
		isRecurring: "È ricorrente",
		weeks: "Settimane",
		days: "Giorni",
		hours: "Ore",
		endTime: "Ora finale",
		username: "Nome utente",
		password: "Password",
		serverURL: "URL del server",
		enable: "Abilita",
		disable: "Disabilita",
		finish: "Fine",
		previous: "Precedente",
		next: "Avanti",
		schedule: "Pianifica",
		removeFromThisList: "Rimuovi da questo elenco",
		status: "Stato",
		scheduledEndTime: "Pianifica ora di fine",
		type: "Tipo",
		mode: "Modalità",
		startTime: "Ora di avvio",
		createdBy: "Creato da",
		nextScheduledTime: "Prossima ora pianificata",
		id: "ID",
		duration: "Durata",
		repeatCycle: "Frequenza",
		taskTypeName: "Tipo di attività",
		to: "a",
		filter: "Filtro:",
		error_message: "Messaggio di errore",

        file_type: "Tipo di documento",
        word_template_name: "Nome modello Word",
        excel_template_name: "Nome modello Excel",
        powerpoint_template_name: "Nome modello PowerPoint",
        template_description: "Descrizione modello",
        action_add_template: "Aggiungi",
        action_change_template: "Modifica",      
        action_edit_template_properties: "Proprietà",
        add_presentation_template: "Aggiungi modello presentazione",
    	add_spreadsheet_template: "Aggiungi modello foglio di lavoro",
    	add_doc_template: "Aggiungi modello documento",    	
    	file_type_doc_hover: "È necessario specificare un file di modello per il documento di elaborazione del testo.<br><br>Tipi MIME validi: ${0}",
    	file_type_doc_error: "È necessario specificare un file di modello per il documento di elaborazione del testo.<br><br>Il tipo mime del documento selezionato: ${0}<br><br>Tipi MIME validi: ${1}",
    	file_type_presentation_hover: "È necessario specificare un file di modello valido per la presentazione.<br><br>Tipi MIME validi: ${0}",
    	file_type_presentation_error: "È necessario specificare un file di modello valido per la presentazione.<br><br>Il tipo mime del documento selezionato: ${0}<br><br>Tipi MIME validi: ${1}",
    	file_type_spreadsheet_hover: "È necessario specificare un file di modello valido per il foglio di lavoro.<br><br>Tipi MIME validi: ${0}",
    	file_type_spreadsheet_error: "È necessario specificare un file di modello valido per il foglio di lavoro.<br><br>Il tipo mime del documento selezionato: ${0}<br><br>Tipi MIME validi: ${1}",
    	office_online_only_one_template_error: "È possibile selezionare solo un file.",
    	change_presentation_template: "Modifica modello presentazione",
    	change_spreadsheet_template: "Modifica modello foglio di lavoro",
    	change_doc_template: "Modifica modello documento",
    	change_button: "Modifica",
	    new_document_dialog_doc_title: "Nuovo documento",
	    new_document_dialog_presentation_title: "Nuova presentazione",
	    new_document_dialog_spreadsheet_title: "Nuovo foglio di lavoro",
	    new_document_dialog_title_label: "Titolo:",
	    new_document_dialog_title_hover: "Immettere un titolo per questo documento.",
	    new_document_dialog_title_missing_message: "È necessario specificare un titolo.",
	    office_online_save_before_adding_templates_title: "Salvare le modifiche nel repository",
	    office_online_save_before_adding_templates_error: "Non è possibile aggiungere modelli Office fino a quando non si salvano le modifiche effettuate nel repository. Fare clic su <b>Salva e chiudi</b> e quindi riaprire il repository per aggiungere i modelli Office.",
	    copy_to_OOS_dialog_doc_title: "Nuovo documento",
	    office_online_checkin_cancelcheckout_message: "Questo documento è in fase di modifica in Microsoft Office Online. Non è possibile effettuare il check-in del documento, o annullarne il check-out, mentre il documento è aperto in Microsoft Office Online.",
	    new_document_classification: "Classificazione:",
	    new_document_classification_help: "Reimpostata con la classe, le proprietà e la cartella padre, se esiste, del documento di origine. Quando l'aggiunta di un documento avviene utilizzando un modello di immissione, il modello di immissione del documento origine, se presente, verrà selezionato automaticamente. Le proprietà del documento origine verranno utilizzate come valori predefiniti, ma la cartella e la classe specificate nel modello di immissione verranno conservate.",
		new_document_classification_use_source_document: "Utilizza documento di origine:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Icona tipo ${0}",
		repository_name_and_type: "Nome e tipo ${0}",
		select_class_label: "Seleziona ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Vista Dettagli",
		detail_view_button: "Dettagli",
		magazine_view_button_tooltip: "Vista Magazine",
		magazine_view_button: "Rivista",
		filmstrip_view_button_tooltip: "Vista a sequenza",
		filmstrip_view_button: "Vista a sequenza",

		magazine_view_show: "Mostra in vista Rivista",
		detail_view_show: "Mostra in vista Dettagli",

		total_count_item: "elemento",
		total_count_items: "elementi",
		total_count_more_items: "Più di ${0} elementi",

		extension_changed: "L'estensione del file selezionato non corrisponde a quella del file originale.  Selezionare un altro file.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Il visualizzatore selezionato non supporta tutti i tipi di file. Se si salva questa associazione del visualizzatore, si potrebbero rilevare dei problemi quando si visualizzano i documenti. Si consiglia di selezionare un visualizzatore che supporti tutti i tipi di file quando è selezionata l'opzione Tutti i tipi di file.<br><br><b>Suggerimento:</b> i seguenti visualizzatore supportano tutti i tipi di file:<ul><li>visualizzatore applet</li><li>visualizzatore AJAX</li><li>Conversione HTML</li><li>Conversione PDF</li><li>Browser Web</li></ul>",
		file_type_any: "Tutti i tipi di file",
		file_type_any_hover: "Selezionare questa opzione se si desidera utilizzare il visualizzatore selezionato per visualizzare tutti i documenti, indipendentemente dal tipo di file. Questa opzione è supportata per i seguenti visualizzatore:<br><br><ul><li>visualizzatore applet</li><li>visualizzatore AJAX</li><li>Conversione HTML</li><li>Conversione PDF</li><li>Browser Web</li></ul><br><br><b>Attenzione:</b> se si desidera utilizzare prevalentemente visualizzatore specifici, qualsiasi associazione creata che utilizza questa opzione deve essere spostata alla fine dell'associazione visualizzatore. ",
		file_type_input: "Nuovo tipo di file",

		mime_type_input: "Nuovo tipo MIME:",
		mime_type_input_invalid: "Il nuovo tipo MIME non può contenere nessuno dei seguenti caratteri: ,",
		mime_type_available: "Tipi MIME disponibili",
		mime_type_selected: "Tipi MIME selezionati",
		file_type_input: "Nuovo tipo di file",
		file_type_input_invalid: "Il nuovo tipo di file non può contenere nessuno dei seguenti caratteri: ,",
		file_type_available: "Tipi di file disponibili",
		file_type_selected: "Tipi di file selezionati",
		file_type_header: "Tipo di file",
		viewer: "Visualizzatore:",
		viewer_viewer: "Visualizzatore",
		viewer_view: "Visualizza",
		viewer_preview: "Anteprima",
		viewer_merge_and_split: "Unisci e suddividi",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Solo anteprima",
		preview_only_label: "(anteprima)",
		preview_only_hover: "Questa associazione del visualizzatore verrà utilizzata solo quando l'utente fa clic su <b>Anteprima</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Questo repository non supporta l'esplorazione. Selezionare un altro repository.",

		repository_community_teamspace_message: "Un altro repository è già designato come repository della libreria della comunità. Se si desidera continuare ad utilizzare il repository esistente come repository della libreria di comunità, selezionare <b>No</b> prima di salvare le modifiche per evitare che il repository esistente venga sostituito il presente repository.",

		favorites_empty: "Non è stato ancora definito alcun favorito.",
		syncItems_empty: "Non vi sono ancora file sincronizzati.",

		root_folder_id: "ID cartella root",
		unified_searches: "Ricerche tra repository:",
		max_results: "Numero di risultati:",
		direct_retrieve_enabled: "Richiamo diretto:",
		itemTypesToDisplay: "Tipi di elemento da visualizzare:",
		allItemTypes: "Tutti i tipi di elemento",
		include_attr_group_name: "Descrizioni del gruppo di attributi nei nomi di visualizzazione dell'attributo:",
		admin_repcfg_include_attr_group_name_hover: "Per impostazione predefinita, la descrizione del gruppo di attributi è inclusa nei nomi degli attributi del gruppo di attributi. In questo modo, quando utilizzano gli attributi, gli utenti possono visualizzare il gruppo di attributi a cui appartiene l'attributo del gruppo di attributi.<br>Ad esempio, gli utenti potrebbero visualizzare il seguente nome per un attributo del gruppo di attributi: Document Settings.Document Type.<br><br>Se questa opzione viene disabilitata, per il nome dell'attributo del gruppo di attributi viene utilizzata solo la descrizione dell'attributo.<br>Ad esempio, gli utenti visualizzeranno il nome: Document Type.<br><br>Senza la descrizione del gruppo di attributi, gli utenti potrebbero non essere in grado di stabilire se Document Type è l'attributo semplice o un attributo del gruppo di attributi.",
		documentItemTypesOnly: "Solo tipi di elemento modello documento",
		object_store: "Nome simbolico archivio oggetti:",
		object_store_display_name: "Nome visualizzato archivio oggetti:",
		teamspaceUpgradeMsg: "Gli spazi team verranno aggiornati al salvataggio della configurazione del repository. Se si dispone di un numero elevato di spazi team, per l'aggiornamento potrebbero essere necessari diversi minuti.",
		synchUpgradeMsg: "Il modulo di sincronizzazione in questo repository verrà aggiornato al salvataggio della configurazione del repository.",
		protocol: "Protocollo:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID repository CMIS:",
		cmis_url: "URL documento servizio di binding AtomPub CMIS:",
		trace_level: "Livello di traccia",
		trace_dir: "Directory traccia",
		temp_dir: "Directory temporanea",
		show_document_location: "Mostra posizione del documento",
		max_folders: "Numero massimo di cartelle",
		afp_conversion: "Conversione AFP",
		line_conversion: "Conversione dati riga",
		max_hits: "Numero massimo di riscontri",
		folder_search_expresssion: "Espressione di ricerca cartella",
		max_item_types: "Numero massimo di tipi di elemento",
		max_worklists: "Numero massimo elenchi di lavoro",
		update_storage_collection: "Aggiorna raccolta di archiviazione",
		include_mime_types_in_search_results: "Includi i tipi MIME nei risultati della ricerca",
		object_type: "Tipo di oggetto",
		object_type_document: "Documenti",
		object_type_folder: "Cartelle",
		file_label: "File:",
		plugin_jarfile_path_label: "Percorso file JAR",
		plugin_classfolder_path_label: "Percorso file di classe:",
		plugin_classname_label: "Nome classe:",
		plugin_id_label: "ID del plug-in:",
		class_label: "Classe",
		configuration: "Configurazione",
		connect_repository: "Connetti...",
		server_type: "Tipo di server",
		timeout_in_seconds: "Timeout (in secondi):",
		default_search_template: "Ricerca predefinita",
		search_filtered_properties: "Proprietà ricercabili",
		property_contains_label: "La proprietà contiene",
		class_contains_label: "Contiene la classe",
		search_filtered_operators: "Operatori di ricerca",
		default_search_results: "Risultati della ricerca",
		data_type: "Tipo di dati",
		status_bar: "Barra di stato",
		operators_for: "Operatori per:",
		currentUser: "Utente corrente",
		nameContains: "Il nome contiene",
		searchFor: "Ricerca per",
		server_autentication: "Autenticazione server (OAuth 2.0 con JWT)",
		standard_authentication: "Autenticazione standard (3-legged OAuth2.0)",
		developer_authentication: "Autenticazione sviluppatore",
		enterprise_id: "ID Enterprise:",
		public_key_id: "ID chiave pubblica",
		private_key_path: "Percorso file chiave privata",
		server_user_email: "E-mail utente server",

		filter_builder_tooltip: "Definisci filtro",

		// Launch bar
		launchbar_home: "Apri Home",
		launchbar_favorites: "Apri preferiti",
		launchbar_browse: "Apri vista Sfoglia",
		launchbar_browse_popup: "Apri elenco a comparsa Sfoglia",
		launchbar_search: "Apri vista Ricerca",
		launchbar_search_popup: "Apri elenco a comparsa Ricerca",
		launchbar_teamspaces: "Apri vista Spazi team",
		launchbar_teamspaces_popup: "Apri elenco a comparsa Spazi team",
		launchbar_work: "Apri vista Lavoro",
		launchbar_work_popup: "Apri elenco a comparsa Lavoro",
		launchbar_entry_templates: "Apri vista Modelli di immissione",
		launchbar_entry_templates_popup: "Apri elenco a comparsa Modelli di immissione",
		launchbar_admin: "Apri vista Amministrazione",

		admin_sync_server: "Servizi di sincronizzazione",
		admin_settings: "Impostazioni",
		admin_interface_text: "Etichette",
		admin_interface_text_desktop: "Desktop:",
		admin_desktops: "Desktop",
		admin_repositories: "Repository",
		admin_mobile: "Dispositivo mobile",
		admin_menus: "Menu",
		admin_reason_codes: "Motivi della redazione",
		admin_plugins: "Plug-in",
		admin_plugins_state_enabled: "Plug-in abilitato",
		admin_plugins_state_disabled: "Plug-in disabilitato",
		admin_plugins_version: "Versione:",
		admin_plugins_version_heading: "Versione",
		admin_plugins_icon: "Icona plug-in",
		admin_viewer_mapping_icon: "Icona associazione visualizzatore",
		admin_viewer_defs: "Associazioni visualizzatore",
		admin_viewer_dialog_title: "Associazione",
		admin_viewer_dialog_new_title: "Nuova associazione",
		admin_viewer_dialog_instructions: "Un'associazione specifica quale visualizzatore utilizzare per i file su un repository. È possibile creare associazioni multiple per specificare visualizzatore differenti per tipi di file diversi. Per definire un'associazione è possibile utilizzare un tipo MIME o un'estensione file. Le associazioni con estensioni file verranno associate ai nomi documento. Ad esempio, un'associazione con il tipo file impostato su gif verrà associata ai nomi documento che terminano con l'estensione .gif.",
		admin_desktop_viewer_defs: "Associazione visualizzatore:",
		admin_desktop_viewer_defs_hover: "L'associazione del visualizzatore specifica quale visualizzatore viene utilizzato per aprire diversi tipi di documenti nel repository.<br><br>È possibile creare nuove associazioni del visualizzatore nella sezione <b>Associazioni visualizzatore</b> dello strumento di amministrazione.",
		admin_desktops_used: "Utilizzato nei desktop",
		admin_desktop_additional_settings: "Impostazioni aggiuntive:",
		admin_default_desktop: "Imposta come desktop predefinito",
		admin_default_desktop_header: "Desktop predefinito",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Icona desktop",

		// Themes
		admin_themes: "Temi",
		admin_theme_list_instructions: "È possibile creare un tema semplificare la personalizzazione del client Web per la propria organizzazione. È possibile creare diversi temi se è necessario utilizzare colori, caratteri o logo diversi per diversi desktop nel proprio ambiente.<br><br>Dopo aver creato un tema, è possibile applicarlo ad un desktop configurandolo nella scheda <b>Aspetto</b> del desktop.",
		admin_theme_instructions: "Creare un tema per controllare i colori ed i caratteri visualizzati nel client Web. Inoltre, è possibile utilizzare il tema per modificare il logo, il nome dell'applicazione, ed il testo del copyright visualizzato nella pagina di accesso e nel banner.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nuovo tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Si desidera eliminare i temi selezionati?\n${0} temi sono selezionati.",
		admin_theme_color: "Colore",
		admin_theme_text: "Testo",
		admin_theme_solid: "Tinta unita",
		admin_theme_gradient: "Sfumato",
		admin_theme_box: "Box",
		admin_theme_color_label: "Colore ${0}:",
		admin_theme_name_invalid: "Il nome del tema non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "L'ID del tema deve essere univoco e non è possibile modificarlo dopo aver salvato il tema.<br><br>L'ID può contenere solo caratteri alfanumerici.",
		admin_theme_name_hover: "Il nome non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatico",
		admin_theme_logo_url_hover: "Immettere l'URL del file di logo. Se il logo si trova sullo stesso server delle applicazioni Web del client Web, immettere un URL relativo, ad esempio: /mycustomizations/banner_logo.png<br><br>Si raccomanda di utilizzare uno sfondo trasparente per il logo.",
		admin_theme_color_palette_title_heading: "Tavolozza dei colori",
		admin_theme_color_palette_help_text: "Creare la tavolozza dei colori per il proprio tema, utilizzando il valore esadecimale o il selettore colori. È possibile aggiungere tutti i colori desiderati.",
		admin_theme_color_add_button_label: "Aggiungi colore",
		admin_theme_color_remove_button_label: "Rimuovi colore",
		admin_theme_global_title_heading: "Elementi dell'intera applicazione",
		admin_theme_global_font: "Famiglia di caratteri",
		admin_theme_global_font_hover: "Selezionare il font da utilizzare nel client Web. I caratteri vengono elencati nell'ordine di precedenza; il carattere successivo nell'elenco viene utilizzato solo se il carattere precedente non è installato sulla macchina client.",
		admin_theme_global_framework_color_label: "Colore framework:",
		admin_theme_global_framework_color_hover: "Selezionare il colore da utilizzare per i seguenti elementi:<ul><li>Barre del titolo sulle finestre di dialogo</li><li>Il colore di evidenziazione nella parte superiore della scheda selezionata</li><li>Le icone della vista elenco dei contenuti (vista Dettagli, vista rivista, vista a sequenza)</li></ul><br>Il colore non viene utilizzato per i separatori delle sezioni del client web. Se si desidera modificare il colore dei separatori, è necessario creare un plug-in per fornire un file CSS personalizzato.",
		admin_theme_color_global_toolbar: "Colore globale della barra degli strumenti:",
		admin_theme_color_global_toolbar_hover: "Se si include la barra degli strumenti globale nel client Web, selezionare il colore della barra degli strumenti.<br><br><b>Suggerimento:</b> La barra degli strumenti viene visualizzata nell'intestazione nella parte superiore del client Web, quindi il colore della barra degli strumenti dovrebbe integrarsi con il colore del banner.",
		admin_theme_global_selected_color: "Colore dell'elemento selezionato:",
		admin_theme_global_selected_color_hover: "Selezionare il colore da utilizzare quando si selezionano gli elementi nella struttura ad albero sfoglia, nella struttura ad albero cerca e nell'elenco contenuti.<br><br>Il colore della guida a comparsa (il colore utilizzato quando un utente passa su un elemento) deriva da questo colore.",
		admin_theme_global_link_color: "Colore link:",
		admin_theme_global_link_color_hover: "Selezionare il colore da utilizzare per tutti gli URL selezionabili nel client Web. Ad esempio, questo colore viene utilizzato nei link Ulteriori informazioni visualizzati nel client Web.",
		admin_theme_login_title_heading: "Elementi della pagina di accesso",
		admin_theme_page_background_label: "Colore di sfondo della pagina di accesso:",
		admin_theme_login_page_background_hover: "Selezionare il colore da visualizzare dietro il riquadro di accesso.",
		admin_theme_login_pane_background_label: "Colore di sfondo del riquadro di accesso:",
		admin_theme_login_pane_background_hover: "Selezionare il colore da visualizzare per il riquadro di accesso. Questo colore dovrebbe integrarsi con il colore di sfondo della pagina di login.",
		admin_theme_text_color: "Colore testo:",
		admin_theme_login_pane_text_color_hover: "Selezionare il colore da visualizzare per il testo del riquadro di accesso. Questo colore viene utilizzato per il testo di benvenuto e le etichette dei campi. Questo colore dovrebbe essere decifrabile rispetto al colore di sfondo della pagina di accesso.",
		admin_theme_copyright_text: "Testo Copyright:",
		admin_theme_copyright_text_hover: "Specificare se visualizzare il testo del copyright sulla pagina di accesso.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Nessun testo copyright",
		admin_theme_banner_title_heading: "Elementi del banner",
		admin_theme_text_icons_color: "Colore testo ed icona:",
		admin_theme_icon_color_label: "Colore icona:",
		admin_theme_shadow_label: "Ombreggiatura:",
		admin_theme_banner_text_icons_hover: "Selezionare un colore da utilizzare per il testo e le icone nel banner. Questo colore dovrebbe essere decifrabile rispetto al colore di sfondo del banner.",
		admin_theme_banner_product_name_label: "Nome prodotto:",
		admin_theme_banner_product_name_hover: "Quando si crea un desktop, è possibile specificare un nome personalizzato da visualizzare per l'applicazione. Se non si specifica un nome personalizzato, IBM Content Navigator viene utilizzato come il nome del prodotto. Specificare se utilizzare il nome dell'applicazione definito nel desktop oppure un'immagine da utilizzare in alternativa.",
		admin_theme_banner_product_name_desktop_defined_label: "Utilizza nome dal desktop",
		admin_theme_banner_product_name_image: "Utilizza logo personalizzato (URL)",
		admin_theme_background_color_label: "Colore di sfondo:",
		admin_theme_style_label: "Stile:",
		admin_theme_banner_color_hover: "Selezionare un colore da utilizzare per il banner nella parte superiore dell'applicazione.<br><br><b>Suggerimento:</b> assicurarsi che il colore del testo nel banner sia leggibile rispetto al colore di sfondo del banner.",
		admin_theme_buttons_title_heading: "Pulsanti",
		admin_theme_navigation_title_heading: "Elementi di navigazione",
		admin_theme_navigation_icon_selected_label: "Colore icona selezionata:",
		admin_theme_navigation_background_hover: "Consente di selezionare un colore da utilizzare per lo sfondo della barra di navigazione della funzione.",
		admin_theme_navigation_icon_color_hover: "Consente di selezionare un colore da utilizzare per le icone nella barra di navigazione della funzione. Quando viene utilizzato il layout predefinito su un desktop, questo colore deve essere in contrasto con lo sfondo del menu a discesa della funzione. Quando si utilizza il layout classico su un desktop, questo colore dee essere in contrasto con la barra di navigazione della funzione.",
		admin_theme_navigation_icon_selected_hover: "Selezionare un colore da utilizzare per la funzione selezionata nella barra di navigazione della funzione. Il colore dovrebbe integrarsi con il colore delle icone e il colore di sfondo della barra di navigazione della funzione.<br><br>Quando viene utilizzato il layout classico su un desktop, questo colore viene utilizzato come colore della guida a comparsa nella barra di navigazione della funzione.",
		admin_theme_button_background_color_hover: "Selezionare un colore da utilizzare per lo sfondo dei pulsanti.",
		admin_theme_button_style_hover: "Selezionare uno stile per i pulsanti.",
		admin_theme_button_text_icon_color_hover: "Selezionare un colore da utilizzare per il testo e le immagini sui pulsanti.",
		admin_theme_no_logo_label: "Nessun logo",
		admin_theme_custom_logo_label: "Logo personalizzato (URL)",
		admin_theme_banner_type: "Stile di riempimento del banner:",
		admin_theme_banner_type_hover: "Specificare se il banner deve essere un colore pieno o un colore sfumato. Se si specifica un banner con colore sfumato, il colore che si specifica per il banner è il colore più scuro nel banner.<br><br><b>Suggerimento:</b> assicurarsi che il colore del testo nel banner sia leggibile rispetto al colore di sfondo del banner.",
		admin_theme_icon: "Icona tema",
		admin_theme_buttons_and_links_title_heading: "Pulsanti, campi e link",
		admin_theme_button_style_label: "Stile del pulsante:",
		admin_theme_theme_style_label: "Stile del tema:",
		admin_theme_theme_style_hover: "Selezionare lo stile su cui basare il tema. È possibile modificare lo stile in qualsiasi momento durante la creazione o la modifica di un tema. Quando si passa da uno stile all'altro, le impostazioni del tema vengono reimpostate sui valori predefiniti.",
		admin_theme_accent_color_label: "Colore principale:",
		admin_theme_accent_color_hover: "Selezionare il colore da utilizzare per la barra nella parte superiore di una finestra di dialogo e per la selezione di caricamento.",
		admin_theme_global_toolbar_text_color_label: "Colore testo barra degli strumenti globale:",
		admin_theme_global_toolbar_text_color_hover: "Se nel client Web viene inclusa la barra degli strumenti globale, selezionare il colore da utilizzare per il testo nella barra degli strumenti.",
		admin_theme_banner_text_color_hover: "Selezionare il colore da utilizzare per il testo nel banner.",
		admin_theme_banner_icon_color_hover: "Selezionare il colore da utilizzare per le icone nel banner.",
		admin_theme_button_color_label: "Colore:",
		admin_theme_button_color_hover: "Selezionare il colore da utilizzare per i seguenti elementi:<ul><li>Barre del titolo sulle finestre di dialogo</li><li>Il colore di evidenziazione nella parte superiore della scheda selezionata</li><li>Le icone della vista elenco dei contenuti (vista Dettagli, vista rivista, vista a sequenza)</li><li>Pulsanti, campi e link</li></ul>Il colore utilizzato quando un utente passa su un pulsante deriva da questo colore. Il colore non viene utilizzato per i separatori delle sezioni del client web. Se si desidera modificare il colore dei separatori, è necessario creare un plug-in per fornire un file CSS personalizzato.",
		admin_theme_theme_style_col_header: "Stile tema",

		admin_syncserver_consistency_checker: "Programma di verifica della congruenza",
		admin_syncserver_consistency_checker_hover: "Eseguire il programma di verifica della congruenza per assicurarsi che i database del servizio di sincronizzazione contengano informazioni aggiornate relative allo stato di ogni elemento che è presente sul server. Ad esempio, eseguire il programma di verifica della congruenza dopo che il database dei servizi di sincronizzazione è stato inattivo per ottenere le informazioni relative ai documenti che sono stati aggiornati nel repository durante l'interruzione.",
		admin_syncserver_consistency_checker_button: "Esegui programma di verifica della congruenza",
		admin_syncserver_consistency_checker_started: "Avviato:",
		admin_syncserver_consistency_checker_ended: "Finito:",
		admin_syncserver_consistency_checker_duration: "Durata:",
		admin_syncserver_consistency_checker_items_processed: "elementi sincronizzati elaborati:",
		admin_syncserver_consistency_checker_items_processed_success: "elementi sincronizzati elaborati correttamente:",
		admin_syncserver_consistency_checker_items_discovered: "Rilevati nuovi elementi del repository:",
		admin_syncserver_consistency_checker_change_updates: "Aggiornamenti totali:",
		admin_syncserver_consistency_checker_state: "Stato:",
		admin_syncserver_consistency_checker_state_done: "Terminato",
		admin_syncserver_consistency_checker_state_running: "In corso",
		admin_syncserver_consistency_checker_user: "Inoltrato da:",
		admin_syncserver_consistency_checker_scheduled: "Pianificato:",

		admin_syncserver_dbcleanup: "Ripulitura database",
		admin_syncserver_dbcleanup_hover: "Eseguire lo strumento di ripulitura del database per rimuovere dal database i dispositivi non utilizzati e gli elementi che non sono più sincronizzati.",
		admin_syncserver_dbcleanup_button: "Ripulitura database",
		admin_syncserver_dbcleanup_state_done: "Terminato",
		admin_syncserver_dbcleanup_state_running: "In corso",
		admin_syncserver_dbcleanup_started: "Avviato:",
		admin_syncserver_dbcleanup_ended: "Finito:",
		admin_syncserver_dbcleanup_state: "Stato:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Repository eliminati",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Elemento sincronizzato eliminato:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Dispositivi eliminati:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Dispositivi scaduti:",

		admin_syncserver_publicSyncUrl: "URL pubblico servizi di sincronizzazione",
		admin_syncserver_publicSyncUrl_hover: "Specificare l'URL da cui i repository possono comunicare con i servizi di sincronizzazione IBM Content Navigator. Il formato predefinito dell'URL è http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Impostazioni client Sync:",
		admin_syncserver_managed_hover: "Gli utenti non possono modificare queste impostazioni nel client IBM Content Navigator Sync client.",
		admin_syncserver_managed_subfolder: "Livelli di cartella da sincronizzare",
		admin_syncserver_managed_subfolder_hover: "Se un utente sincronizza una cartella, specificare il numero massimo di cartelle che verranno sincronizzate. Ad esempio, se un utente specifica 3 livelli di cartella, vengono sincronizzate la cartella sincronizzata dall'utente e due livelli di sottocartelle.<br><br>Verificare che il proprio ambiente possa supportare la quantità di traffico di sincronizzazione generato da questa impostazione.",
		admin_syncserver_managed_subfolder_all: "Tutte le sottocartelle",
		admin_syncserver_managed_subfolder_none: "Nessuna sottocartella",
		admin_syncserver_managed_subfolder_no_more: "Livelli limitati",
		admin_syncserver_managed_subfolder_levels: "cartelle",
		admin_syncserver_managed_schedule: "Pianificazione della sincronizzazione",
		admin_syncserver_managed_schedule_hover: "Verificare che il proprio ambiente sia dimensionato in modo da supportare la quantità di traffico di sincronizzazione creato dalla pianificazione della sincronizzazione.<br><br>L'intervallo massimo è 24 ore o 1440 minuti.<br><br>Gli utenti possono sovrascrivere la pianificazione della sincronizzazione facendo clic su <b>Sincronizza adesso</b> nel client.",
		admin_syncserver_managed_schedule_manual: "Sincronizza manualmente",
		admin_syncserver_managed_schedule_continuous: "Sincronizza continuamente",
		admin_syncserver_managed_schedule_every: "Sincronizza a intervalli specificati",
		admin_syncserver_managed_schedule_minutes: "Minuti",
		admin_syncserver_managed_schedule_hours: "Ore",

		// redaction codes
		admin_new_reason_code: "Nuovo motivo redazione",		
		admin_reason_code_name_invalid: "Il nome motivo redazione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "La descrizione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "La descrizione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Il nome non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Descrizione:",
		admin_reason_code_applications_hover: "L'elenco di applicazioni Datacap che fanno riferimento a questo motivo di redazione.",
		admin_reason_code_applications: "Applicazioni Datacap",
		admin_delete_confirmation_reason_codes: "Si desidera eliminare i motivi di redazione selezionati?",
		admin_delete_confirmation_reason_code: "Si desidera eliminare il motivo di redazione selezionato?",
		admin_reason_code_heading: "Motivo redazione: <b>${0}</b>",
		admin_reason_code_list_instructions: "I motivi di redazione indicano perché i dati sensibili vengono protetti nascondendoli alla visualizzazione. Ogni motivo identifica un tipo di dato sensibile che viene nascosto agli utenti generali.",
		admin_reason_code_instructions: "È possibile creare un motivo di redazione per ogni tipo di dato sensibile. È possibile quindi utilizzare tale motivo in una politica di redazione per definire chi può visualizzare tali dati e chi può creare o modificare le redazioni.",
		admin_reason_code_applications_label: "Applicazioni Datacap",
		admin_reason_code_repositories: "Repository",
		admin_reason_code_repositories_label: "Repository",
		admin_reason_code_repositories_hover: "L'elenco dei repository ICN che fanno riferimento a questo motivo di redazione.",
		admin_reason_code_repositories_default_value: "Non impostato",
		admin_reason_code_description_label: "Descrizione",
		admin_reason_code_applications_default_value: "Non impostato",
		admin_redaction_reasons: "Motivi della redazione",
		admin_redactions: "Redazioni basate sul ruolo",
		admin_redactions_policies_roles: "Politiche e ruoli",
		admin_reasons: "Motivi",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Impossibile modificare l'ID.  Può essere copiato negli appunti.",
		// Role based administration
		admin_rba: "Amministrazione desktop basata sul ruolo",
		admin_rba_mobile_access_enabled: "Questo desktop è abilitato per l'accesso mobile.",
		admin_rba_mobile_access_disabled: "Questo desktop non è abilitato per l'accesso mobile.",
		admin_rba_confirm_delete_multiple: "Si desidera eliminare i ruoli di amministrazione selezionati?",
		admin_rba_confirm_delete_single: "Si desidera eliminare il ruolo di amministrazione selezionato?",
		admin_rba_delete_multi_role_desktop: "Uno o più dei ruoli selezionati sono assegnati ad un desktop. È necessario rimuovere i ruoli dai desktop prima di poterli eliminare.",
		admin_rba_delete_single_role_desktop: "Il ruolo selezionato è assegnato al desktop ${0}. È necessario rimuovere il ruolo dal desktop prima di poterlo eliminare.",
		admin_desktop: "Desktop",
		admin_rba_instructions: "È possibile creare e gestire i ruoli di amministrazione del desktop, che associano i privilegi concessi agli amministratori del desktop. ",
		admin_rba_not_used: "${0} non è utilizzato in alcun desktop.",
		admin_rba_desktops: "<b>${0} è utilizzato nei seguenti desktop: </b>",
		admin_rba_new_role: "Nuovo ruolo",
		admin_rba_name_invalid: "Il nome del ruolo di amministrazione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "La descrizione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "La descrizione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Il nome non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Descrizione:</b> ${0}",
		admin_rba_membership: "Appartenenza",
		admin_rba_general_priv: "Generale",
		admin_rba_appearance_priv: "Aspetto",
		admin_rba_desktop_config_priv: "Configurazione del Desktop",
		admin_rba_app_name_priv: "Nome applicazione",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Associazione viewer",
		admin_rba_merge_split_priv: "Unisci e suddividi",
		admin_rba_sync_svc_priv: "Servizi di sincronizzazione",
		admin_rba_menus_priv: "Menu",
		admin_rba_edit_svc_priv: "Servizi Edit",
		admin_rba_toolbars_priv: "Barre degli strumenti",
		admin_rba_ctx_menus_priv: "Menu di scelta rapida",
		admin_rba_office_ribbon_priv: "Comandi della barra multifunzione di MS Office",
		admin_rba_office_menues_priv: "Menu di contesto di MS Office",
		admin_rba_addl_settings_priv: "Ulteriori impostazioni",
		admin_rba_mobile_priv: "Dispositivo mobile",
		admin_rba_add_doc_dlg_priv: "Finestra di dialogo Aggiungi documento",
		admin_rba_doc_mgmt_priv: "Gestione documento",
		admin_rba_def_redaction_priv: "Opzione di redazione predefinita",
		admin_rba_add_photos_priv: "Aggiungere foto dalla macchina fotografica e dalla libreria di foto",
		admin_rba_time_stamp_priv: "Data/Ora",
		admin_rba_add_docs_folders_priv: "Aggiungere documenti e creare cartelle nel repository",
		admin_rba_open_docs_priv: "Aprire documenti in altre applicazioni",
		admin_rba_office_config_priv: "Configurazione di Office",
		admin_rba_tab_label_priv: "Etichetta scheda IBM ECM",
		admin_rba_feature_sel_priv: "Selezione funzione",
		admin_rba_general_config_priv: "Configurazione generale",
		admin_rba_favorites_priv: "Preferiti",
		admin_rba_add_options_priv: "Aggiungi opzioni nel gruppo Modifica",
		admin_rba_browse_priv: "Sfoglia",
		admin_rba_outlook_int_priv: "Integrazione Outlook",
		admin_rba_search_priv: "Ricerca",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Pratica",
		admin_rba_desktop_feat_priv: "Funzioni del desktop",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Funzioni visualizzate",
		admin_rba_branding_priv: "Etichettamento",
		admin_rba_home_priv: "Home",
		admin_rba_main_color_priv: "Colore principale",
		admin_rba_sec_color_priv: "Colore secondario",
		admin_rba_teamspaces_priv: "Spazi team",
		admin_rba_rbr_priv: "Redazione basata sul ruolo",
		admin_rba_et_mgr_priv: "Gestore modello di immissione",
		admin_rba_policies_roles_priv: "Gestisci politiche e ruoli",
		admin_rba_work_priv: "Lavoro",
		admin_rba_reasons_priv: "Codici motivo",
		admin_rba_tasks_priv: "Attività asincrone",
		admin_rba_auth_priv: "Autenticazione",
		admin_rba_all_privs: "Tutti i privilegi",
		admin_rba_some_privs: "Alcuni privilegi",
		admin_rba_no_privs: "Nessun privilegio",
		admin_add_users_groups_priv: "Aggiungi utenti e gruppi",
		admin_url_features_priv: "Gestisci funzioni URL",
		admin_plugin_features_priv: "Gestisci funzioni plugin",
		admin_addl_components_priv: "Componenti aggiuntivi",
		admin_global_toolbar_priv: "Barra degli strumenti globale",
		admin_status_bar_priv: "Barra di stato",
		admin_refresh_message: "È necessario aggiornare il browser per utilizzare i dati aggiornati.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "È necessario aggiornare il browser per utilizzare il desktop predefinito aggiornato.",
		admin_desktop_refresh_message: "È necessario aggiornare il browser per utilizzare il desktop aggiornato.",
		admin_action_open: "Apri",
		admin_action_edit: "Modifica",
		admin_action_copy: "Copia",
		admin_action_delete: "Elimina",
		admin_action_copy: "Copia",
		admin_action_new: "Crea nuovo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Questo ID è già utilizzato. È necessario specificare un ID univoco.",

		admin_searchable_properties_for: "Proprietà ricercabili per:",
		admin_repository_new: "Nuovo repository",
		admin_desktop_new: "Nuovo desktop",
		admin_desktop_file_documents: "Richiedere agli utenti di salvare i nuovi documenti e cartelle in una cartella",
		admin_desktop_file_documents_hover: "Selezionare questa opzione se si desidera richiedere agli utenti di selezionare una cartella quando aggiungono elementi al repository. Se non si seleziona questa opzione, gli utenti possono aggiungere i documenti (IBM FileNet P8) o i documenti e cartelle (IBM Content Manager) senza archiviarli in una cartella.",
		admin_desktop_show_security_tab: "Mostra impostazioni di protezione durante le azioni di aggiunta e check-in",
		admin_desktop_show_security_hover: "<b>Solo utenti IBM FileNet P8.</b>  Selezionare questa opzione se si desidera consentire agli utenti di modificare la sicurezza dei documenti e delle cartelle durante l'aggiunta o il check-in di elementi da questo desktop.",
		admin_desktop_configure_security_inheritance: "Consenti agli utenti di configurare l'ereditarietà delle impostazioni di sicurezza delle cartelle.",
		admin_desktop_configure_security_inheritance_hover: "<b>Solo utenti IBM FileNet P8.</b>  Selezionare questa opzione se si desidera che gli utenti siano in grado di accedere agli elementi in una cartella controllando l'ereditarietà di sicurezza delle cartelle. Se si seleziona questa opzione, gli utenti possono specificare se gli utenti o i gruppi possono ereditare la sicurezza da:<ul><li>Una cartella</li><li>Una cartella e le relative sottocartelle dirette</li><li>Una cartella e tutte le relative sottocartelle</li></ul>",
		admin_desktop_appearance: "Aspetto",
		admin_desktop_appearance_instruction: "È possibile personalizzare l'aspetto del desktop modificando la pagina di accesso ed il banner visualizzato del desktop.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "Il layout specifica le funzioni che possono essere visualizzate nel client Web e la disposizione del contenuto del client Web.<br><br><b>Suggerimento:</b> è possibile definire layout personalizzati creando plug-in. È necessario registrare il plug-in nello strumento di amministrazione prima di poter selezionare un layout personalizzato.",
		admin_desktop_layout_default: "Default",
		admin_desktop_layout_custom: "Personalizzato",
		admin_desktop_enable_workflow_email: "Abilita questo desktop per la notifica email del flusso di lavoro FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Solo per gli utenti di FileNet P8. Selezionare questa opzione se si desidera consentire agli utenti di aprire il client web dagli URL inclusi nelle notifiche via e-mail generate dal Process Engine.<br /><br />Se questa opzione non viene abilitata per alcun desktop, gli utenti non potranno accedere al client web dagli URL nelle notifiche.<br /><br />Se si abilita questa opzione su più desktop e più di un desktop soddisfa i criteri specificati nell'URL nella notifica, il client Web utilizza il primo desktop che soddisfa i criteri. ",
		admin_desktop_prevent_create_new_search: "Non consentire agli utenti di creare ricerche",
		admin_desktop_prevent_create_new_search_hover: "Questa opzione limita gli utenti ad utilizzare solo ricerche esistenti ed impedisce di creare ricerche aperte che potrebbero non essere ottimizzate.</br></br>Questa impostazione non ha effetto sugli spazi team. Il diritto di creare ricerche in uno spazio team è controllato dal ruolo di cui un utente dispone su un determinato spazio team.",
		admin_desktop_prevent_create_new_unified_search: "Impedisce agli utenti di creare ricerche tra repository",
		admin_desktop_prevent_create_new_unified_search_hover: "Questa opzione limita gli utenti ad utilizzare solo le ricerche tra repository esistenti ed impedisce di creare ricerche tra repository aperte che potrebbero non essere ottimizzate.",
		admin_desktop_hide_entry_template_not_found_warning: "Nascondi l'avviso visualizzato quando non si trova il modello di immissione associato.",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Selezionare questa opzione se si desidera nascondere il messaggio di avviso visualizzato quando le proprietà vengono modificate e non si trova il modello di immissione associato all'elemento.",
		admin_desktop_show_class_role_security_selection: "Consenti agli utenti di configurare la sicurezza basata sui ruoli nei modelli di immissione",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Solo utenti IBM FileNet P8.</b> Selezionare questa opzione se si desidera che gli utenti configurino i modelli di immissione in modo da utilizzare la sicurezza basata sui ruoli durante l'impostazione della sicurezza sui documenti e/o sulle cartelle utilizzando i i modelli di immissione. Se viene selezionata questa opzione, gli editor dei modelli di immissione possono specificare se gli oggetti di sicurezza del ruolo vengono applicati ad una definizione di modello di immissione.",
		admin_desktop_show_primary_multi_part: "Apri solo il documento primario nel visualizzatore",
		admin_desktop_show_primary_multi_part_hover: "<b>Solo utenti IBM FileNet P8.</b> Selezionare questa opzione se si desidera che il file del documento primario venga aperto nel visualizzatore. Ai documenti possono essere associati più file. Questa opzione aprirà solo il file primario associato al documento. ",
		admin_desktop_redaction_save_mode: "Opzione di redazione predefinita:",
		admin_desktop_redaction_save_mode_hover: "Selezionare la modalità di salvataggio redazione del viewer ViewONE Virtual predefinita:</br>* Richiedi sempre all'utente: la finestra di dialogo verrà visualizzata quando viene attivata la modalità di redazione, per richiedere all'utente se si desidera eseguire il check in come nuova versione, creare un nuovo documento o scaricare il contenuto.</br>* Esegui check in come nuova versione: il contenuto redatto verrà sempre salvato in una nuova versione del documento esistente.</br>* Salva come documento completamente nuovo: il contenuto redatto verrà sempre salvato come documento completamente nuovo.</br>* Scarica e salva sul client: il contenuto redatto verrà scaricato sul sistema client.",
		admin_desktop_redaction_save_mode_user_select: "Richiedi sempre all'utente",
		admin_desktop_redaction_save_mode_new_version: "Esegui check in come nuova versione",
		admin_desktop_redaction_save_mode_new_document: "Salva come documento completamente nuovo",
		admin_desktop_redaction_save_mode_local_content: "Scarica e salva sul client",

		admin_desktop_document_add_mode: "Finestra di dialogo Aggiungi documento:",
		admin_desktop_document_add_mode_hover: "Specificare la finestra Aggiungi da utilizzare quando si aggiungono documenti creati con IBM Content Navigator:<ul><li>Nuovo documento redatto permanentemente</li><li>Nuovo documento unito e suddiviso</li><li>Nuovo documento Microsoft Office</li><li>Nuovo documento Servizio Edit</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Aggiungi documento",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Aggiungi documento utilizzando il modello di immissione",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Unisci e suddividi:",
		admin_desktop_merge_and_split_enable_hover: "Specificare se si desidera che gli utenti che accedono a questo desktop siano in grado di unire e suddividere i documenti utilizzando un visualizzatore di supporto.",

		admin_desktop_merge_and_split_show_checkin: "Richiedi agli utenti di fornire i valori delle proprietà quando effettuano il check-in delle modifiche ad un documento.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Se si seleziona questa opzione, quando gli utenti effettuano il check-in delle modifiche ad un documento nella modalità Unisci e suddividi, viene visualizza la finestra di dialogo di dialogo di check-in.",

		admin_desktop_available_categories: "Funzioni disponibili",
		admin_desktop_selected_categories: "Funzioni selezionate",

		admin_layout_banner_title: "Pagina banner e login",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Nome applicazione:",
		admin_desktop_application_name_hover: "Specificare il nome applicazione da visualizzare nel banner.<br><br>Suggerimento: definire il nome applicazione per altre lingue nella scheda Etichette / Etichette desktop.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Specificare se utilizzare il tema predefinito di IBM Content Navigator o un tema personalizzato per questo desktop. Per utilizzare un tema personalizzato, è necessario creare un tema nella sezione <b>Temi</b> dello strumento di amministrazione.",
		admin_desktop_login_logo: "Logo pagina di accesso:",
		admin_desktop_login_logo_hover: "Se si desidera modificare il logo visualizzato sulla pagina di accesso, è possibile specificare l'URL di un file di logo. Tuttavia, si consiglia di utilizzare un tema personalizzato per modificare il logo.",
		admin_desktop_login_logo_url_hover: "Immettere l'URL del file di logo. Se il logo si trova sullo stesso server delle applicazioni Web del client Web, immettere un URL relativo, ad esempio: /mycustomizations/login_logo.png<br><br>Il logo non può avere una larghezza superiore a 200 pixel e un'altezza superiore a 150 pixel.<br><br>Si raccomanda di utilizzare uno sfondo trasparente per il logo.",
		admin_desktop_banner_logo: "Logo banner:",
		admin_desktop_banner_logo_hover: "Se si desidera modificare il logo visualizzato sul banner, è possibile specificare l'URL di un file di logo. Tuttavia, si consiglia di utilizzare un tema personalizzato per modificare il logo.",
		admin_desktop_banner_logo_url_hover: "Immettere l'URL del file di logo. Se il logo si trova sullo stesso server delle applicazioni Web del client Web, immettere un URL relativo, ad esempio: /mycustomizations/banner_logo.png<br><br>Il logo non può avere una larghezza superiore a 72 pixel e un'altezza superiore a 36 pixel.<br><br>Si raccomanda di utilizzare uno sfondo trasparente per il logo.",
		admin_desktop_banner_background_color: "Colore di sfondo del banner:",
		admin_desktop_banner_background_color_hover: "Se si desidera modificare il colore di sfondo del banner, è possibile specificare un colore personalizzato. Tuttavia, si consiglia di utilizzare un tema personalizzato per modificare il colore del banner.",
		admin_desktop_banner_background_color_custom_hover: "Specificare il colore del banner dell'applicazione come colore esadecimale.",
		admin_desktop_banner_application_name_color: "Colore testo nome applicazione",
		admin_desktop_banner_application_name_color_hover: "Se si desidera modificare il colore di sfondo del nome applicazione, è possibile specificare un colore personalizzato. Tuttavia, si consiglia di utilizzare un tema personalizzato per modificare il colore del nome dell'applicazione.",
		admin_desktop_banner_application_name_color_custom_hover: "Specificare il colore del nome dell'applicazione come colore esadecimale.",
		admin_desktop_banner_menu_color: "Colore icone del banner:",
		admin_desktop_banner_menu_color_hover: "Se si modifica il colore di sfondo del banner, può essere necessario modificare lo schema dei colori delle icone nel banner per renderle più visibili. Specificare se visualizzare la versione chiara o scura delle icone del banner.<br><br>Tuttavia, si consiglia di utilizzare un tema personalizzato per modificare il colore delle icone.",
		admin_desktop_login_page_content: "Contenuto pagina di accesso:",
		admin_desktop_login_page_content_hover: "Se si desidera visualizzare ulteriori informazioni sulla pagina di accesso, ad esempio annunci relativi a interruzioni di sistema o sulle ubicazioni in cui gli utenti possono acquisire assistenza per i nomi utenti e le password, è possibile specificare l'URL del contenuto da visualizzare.",
		admin_desktop_login_page_content_url_hover: "Immettere l'URL del contenuto della pagina di accesso. Se il contenuto si trova sullo stesso server delle applicazioni Web del client Web, immettere un URL relativo, ad esempio: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Regole delle password:",
		admin_desktop_password_rules_hover: "Se si desidera fornire linee guida agli utenti relative alla creazione delle password, ad esempio i caratteri non consentiti o il numero minimo di caratteri, è possibile specificare l'URL di una pagina che contiene le regole delle password.",
		admin_desktop_password_rules_url_hover: "Immettere l'URL del contenuto delle regole delle password. Se il contenuto si trova sul server delle applicazioni Web del client Web, immettere un URL relativo, ad esempio: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL della guida dell'utente finale:",
		admin_desktop_help_url_hover: "È possibile utilizzare la guida che è spedita con IBM Content Navigator o è possibile reindirizzare gli utenti a personalizzare il contenuto della guida compiendo una delle seguenti azioni:<br><br><ul><li>indirizzare ad una guida in linea personalizzata</li><li>Aggiungere la guida all'istanza di IBM Knowledge Center distribuito con IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Immettere l'URL del sistema della guida personalizzata. IBM Content Navigator inserisce index.jsp?content=/com.ibm.usingeuc.doc/ ed un nome file alla fine dell'URL specificato.  Affinché i link \"Ulteriori informazioni\" possano funzionare nell'interfaccia, il sistema della guida deve utilizzare gli stessi nomi file della guida dell'utente finale integrata. ",
		admin_desktop_deprecated_appearance_title: "Impostazioni obsolete",
		admin_desktop_deprecated_appearance_instructions: "Se si utilizza un tema personalizzato, queste impostazioni vengono sostituite con quelle del tema personalizzato. È necessario migrare queste impostazioni in un tema personalizzato, dove è possibile creare uno stile con maggiori dettagli, di quanto possibile con le impostazioni presenti in questa sezione. Inoltre, un tema personalizzato può essere utilizzato in più desktop.",

		admin_desktop_plugins_title: "Abilitare o disabilitare i plug-in per questo desktop.",
		admin_desktop_plugins_enable_all_plugins: "Abilita tutti i plug-in distribuiti per l'utilizzo con questo desktop",
		admin_desktop_plugins_select_plugins: "Selezionare i plug-in distribuiti per l'utilizzo con questo desktop",
		admin_desktop_plugins_select_plugin: "Seleziona plug-in",

		admin_desktop_layout_features: "Funzioni visualizzate:",
		admin_desktop_layout_features_hover: "Specificare le funzioni a cui gli utenti avranno accesso da questo desktop. Le funzioni vengono visualizzate nell'ordine in cui sono elencate.<br><br>Quando si seleziona un funzione, è possibile personalizzare alcuni aspetti della stessa all'interno del desktop, come ad esempio il repository predefinito selezionato.",
		admin_desktop_layout_default_repository: "Repository predefinito:",
		admin_desktop_layout_default_repository_layout_hover: "Specificare quale repository viene selezionato per impostazione predefinita quando gli utenti aprono questa funzione.",
		admin_desktop_layout_document_thumbnails: "Miniature documenti:",
		admin_desktop_layout_document_thumbnails_hover: "Specificare se visualizzare le miniature per i documenti nel pannello Informazioni sul documento.<br><br>La visualizzazione delle miniature può rallentare le prestazioni del client Web.",
		admin_desktop_layout_show_filmstrip_view: "Vista a sequenza:",
		admin_desktop_layout_show_filmstrip_view_hover: "Specifica se consentire agli utenti di passare dal pannello di elenco contenuti alla vista a sequenza.<br><br>La vista a sequenza genera un'anteprima di ciascun documento che un utente seleziona. Tuttavia, utilizzando la vista a sequenza si potrebbero peggiorare le prestazioni del client Web. Inoltre, è necessario configurare il visualizzatore di conversione HTML per visualizzare l'anteprima del documento.",
		admin_enabled: "Abilita",
		admin_disabled: "Disabilita",
		admin_include: "Includi",
		admin_exclude: "Escludi",
		admin_layout_teamspaces_default_repository: "Spazi team:",
		admin_layout_entry_templates_default_repository: "Modelli di immissione:",
		admin_layout_other_features_default_repository: "Cerca e sfoglia:",
		admin_layout_work_default_repository: "Lavoro:",
		admin_layout_default_feature: "Funzione predefinita:",
		admin_default_category_placeholder: "Seleziona una funzione",
		admin_layout_default_feature_hover: "Specificare quale funzione viene visualizzata quando gli utenti accedono a questo desktop.",
		admin_layout_default_feature_warning: "La modifica della funziona predefinita può avere effetto sul tempo necessario per caricare l'applicazione.",
		admin_layout_feature_list_header: "Funzione",
		admin_layout_show_statusbar: "Barra di stato:",
		admin_layout_show_statusbar_hover: "Specificare se visualizzare la barra di stato nella parte inferiore del desktop.<br><br>Se si nasconde la barra di stato, gli utenti non potranno visualizzare le informazioni sugli eventi non di errore,quali:<ul><li>Il documento è stato aggiunto al repository.</li><li>La ricerca ha restituito 59 documenti.</li></ul>",
		admin_layout_show_magazineview: "Vista Rivista:",
		admin_layout_show_magazineview_hover: "Specifica se consentire agli utenti di passare dal pannello di elenco contenuti alla vista rivista.<br><br>La vista rivista aumenta l'altezza di ciascuna voce nell'elenco del contenuto, il che riduce il numero di elementi che possono essere visualizzati contemporaneamente nell'elenco dei contenuti.",
		admin_layout_show_detailsview: "Vista Dettagli:",
		admin_layout_show_detailsview_hover: "Specificare se consentire agli utenti di passare dalla visualizzazione dell'elenco contenuti alla vista Dettagli.<br><br>La vista Dettagli rende massimo il numero di righe visibili nell'elenco contenuti.",
		admin_feature_config_docinfopane_label: "Riquadro informazioni documento:",
		admin_feature_config_docinfopane_hoverhelp: "Specificare se gli utenti possono accedere al pannello delle informazioni del documento in questa funzione.",
		admin_feature_config_docinfopane_default_label: "Comportamento predefinito:",
		admin_feature_config_docinfopane_expanded: "Espanso",
		admin_feature_config_docinfopane_collapsed: "Compresso",
		admin_feature_config_docinfopane_expand_on_select: "Espandi quando l'elemento viene selezionato",
		admin_layout_features_title: "Funzioni del desktop",
		admin_layout_features_instructions: "Specificare le funzioni a cui gli utenti possono accedere da questo desktop.  Inoltre, è possibile personalizzare il funzionamento di ciascuna funzione inclusa nel desktop.",
		admin_layout_components_title: "Componenti del desktop aggiuntivi",
		admin_layout_components_instructions: "È possibile disabilitare alcuni dei componenti del desktop se si desidera un'interfaccia più scorrevole o se si desidera migliorare le prestazioni del client Web.",
		admin_layout_featureconfig_instructions: "Selezionare una funzione da configurare",
		admin_layout_featureconfig_no_configuration: "Nessuna configurazione di funzione disponibile.",
		admin_layout_featureconfig_label: "configurazione della funzione ${0}",
		admin_layout_featureconfig_title: "Configurazione funzione",
		admin_layout_featureconfig_taskManagerURL: "Per utilizzare questa funzione, è necessario abilitare e configurare IBM Content Navigator affinché si colleghi al servizio di gestione attività. Abilitare il servizio di gestione attività nella sezione <b>Impostazioni</b> di questo strumento di amministrazione.",
		admin_feature_config_show_my_checkouts_label: "Riquadro I miei check out",
		admin_feature_config_show_my_checkouts_hoverhelp: "Il riquadro I miei check out consente agli utenti di eseguire una ricerca di tutti gli elementi che hanno sottoposto a check out in un repository specifico. Specificare se gli utenti possono accedere al riquadro I miei check out dalla funzione Home.<br/><br/><b>Limitazione:</b> questa funzione richiede che si disponga almeno di un repository IBM Content Manager, IBM FileNet P8 o OASIS CMIS associato a questo desktop.",

		admin_feature_config_default_repository_icon_text: "Repository predefinito",
		admin_show: "Mostra",
		admin_hide: "Nascondi",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Non è possibile rimuovere la funzione Amministrazione dal Desktop di amministrazione",
		admin_warning_label: "Avvertenza:",
		admin_layout_show_globaltoolbar: "Barra degli strumenti globale:",
		admin_layout_show_globaltoolbar_hover: "Specificare se visualizzare la barra degli strumenti nel banner nella parte superiore del desktop.<br><br>La barra degli strumenti globale include le azioni che consentono agli utenti di aggiungere documenti, cartelle o blocchi al repository. Le azioni disponibili dipendono dal repository a cui è connesso l'utente.",
		admin_interface_text_name_label: "Tipo etichetta",

		admin_interface_text_label_description: "È possibile personalizzare il testo visualizzato in alcune aree del client Web. Le etichette vengono visualizzate per tutti i repository e desktop nella configurazione. Immettere il testo che si desidera visualizzare nell'interfaccia nel campo Etichetta corrente.<br><br><b>Importante:</b> le modifiche apportate alle etichette non verranno visualizzate nello strumento di amministrazione.",
		admin_interface_text_label_action: "Etichette azione",
		admin_interface_text_label_action_description: "Le etichette Azione vengono visualizzate sui pulsanti e nei menu del client Web. È possibile definire etichette azione differenti per ciascun tipo di repository.",
		admin_interface_text_label_application: "Etichette applicazione",
		admin_interface_text_label_application_description: "Le etichette applicazione sono visualizzate nel client Web.",
		admin_interface_text_label_system: "Etichette proprietà di sistema",
		admin_interface_text_label_system_description: "Le proprietà di sistema che vengono visualizzate variano in base al repository. È possibile personalizzare le etichette visualizzate per le proprietà di sistema associate ai documenti e alle cartelle nei repository.",
		admin_interface_text_label_desktop: "Etichette desktop",
		admin_interface_text_label_desktop_description: "Se è stato personalizzato il nome dell'applicazione in un desktop, è possibile personalizzare il nome in lingue diverse dall'inglese. È inoltre possibile personalizzare i nomi degli spazi di applicazione IBM FileNet P8 in un desktop.",

		admin_interface_text_system_label: "Etichetta di sistema",
		admin_interface_text_current_label: "Etichetta corrente",
		admin_interface_text_default_label_heading: "Etichetta predefinita",
		admin_interface_text_default_label: "Etichetta predefinita:",
		admin_interface_text_displayed_in_label: "Visualizzato per",
		admin_interface_text_displayed_in_document_folder: "Documenti e cartelle",
		admin_interface_text_displayed_in_document: "Documenti",
		admin_interface_text_displayed_in_folder: "Cartelle",
		admin_interface_text_displayed_in_admin_application_space: "Etichetta dello spazio applicazione",
		admin_interface_text_displayed_in_desktop: "Etichetta funzione per mobile",
		admin_interface_text_displayed_in_admin_application_name: "Nome applicazione",

		admin_new_desktop: "Nuovo desktop",
		admin_new_repository: "Nuovo repository",
		admin_new_menu: "Nuovo menu",
		admin_new_viewer_mapping: "Nuova associazione visualizzatore",
		admin_new_mapping_label: "Nuova associazione",
		admin_new_icon_mapping: "Nuova associazione icone",
		admin_viewer_mapping_list_instructions: "È possibile configurare quali visualizzatore sono utilizzati dal client Web per visualizzare tipi differenti di contenuto. Un'associazione visualizzatore definisce quali tipi MIME sono associati a ciascun visualizzatore che si desidera utilizzare. È possibile creare più associazioni visualizzatore se si desidera utilizzare visualizzatore differenti per desktop differenti.",
		admin_viewer_mapping_instructions: "Specificare i visualizzatore che si desidera utilizzare per aprire i file. Se si desidera utilizzare un visualizzatore personalizzato, è necessario integrare il visualizzatore come plug-in prima di poterlo aggiungere all'associazione visualizzatore.<br><br><b>Importante:</b> quando un utente apre un documento, il client Web esegue una ricerca nell'elenco delle associazioni visualizzatore per individuare il primo visualizzatore in grado di aprire il documento in base al sistema operativo utilizzato dall'utente ed al repository a cui l'utente è collegato. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nuovo plugin",
		admin_menu_list_instructions: "È possibile creare barre degli strumenti e menu di scelta rapida personalizzati per controllare quali azioni sono disponibili per gli utenti. Non è possibile modificare i menu predefiniti, ma è possibile creare copie di menu esistenti per limitare le azioni disponibili o per aggiungere azioni personalizzate definite nei plug-in.<br><br>Se si desidera creare un nuovo tipo di menu, è necessario definire il menu in un plug-in.",
		admin_menu_id_hover: "L'ID deve essere univoco e non è possibile modificarlo dopo aver salvato il menu.<br><br>L'ID può contenere solo caratteri alfanumerici e viene fatta distinzione tra maiuscole/minuscole.",
		admin_menu_id_disabled_hover: "Non è possibile modificare l'ID menu. Se si desidera utilizzare un ID diverso, è necessario creare un nuovo menu.",
		admin_menu_default_instructions: "Non è possibile modificare questo menu poiché è un menu predefinito. Se si desidera modificare questo menu, è necessario crearne una copia.",
		admin_menu_toolbar_instructions: "È possibile limitare le azioni disponibili per questa barra degli strumenti oppure aggiungere azioni personalizzate definite in un plug-in. È inoltre possibile organizzare le azioni aggiungendo separatori alla barra degli strumenti.",
		admin_menu_toolbar_custom_instructions: "Questa barra degli strumenti è definita da un plug-in. Se si desidera modificare questa barra degli strumenti, è necessario aggiornare il plugin o creare una copia della barra degli strumenti.",
		admin_menu_context_menu_instructions: "È possibile limitare le azioni che sono disponibili per questo menu di scelta rapida oppure è possibile aggiungere azioni personalizzate definite in un plug-in. È inoltre possibile organizzare le azioni aggiungendo separatori e menu secondari al menu di scelta rapida.",
		admin_menu_context_menu_custom_instructions: "Questo menu di scelta rapida è definito da un plug-in. Se si desidera modificare questo menu di scelta rapida, è necessario aggiornare il plugin o creare una copia del menu di scelta rapida.",
		admin_desktop_list_instructions: "È possibile creare più desktop per fornire a utenti diversi l'accesso al contenuto desiderato. Ad esempio, è possibile creare un desktop che consente agli utenti solo di cercare il contenuto o un desktop che fornisce agli utenti l'accesso ad un singolo repository. ",
		admin_plugin_updated: "La configurazione del plug-in è stata modificata. È necessario aggiornare il browser perché le modifiche diventino effettive.",
		admin_repository_ci_heading: "Repository di Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Repository di FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Repository di Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Repository di Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Repository di CMIS (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Repository di Box: <b>${0}</b>",
		admin_repository_generic_heading: "Repository: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Si desidera eliminare i desktop selezionati?\n${0} desktop sono selezionati.",
		admin_delete_confirmation_menus: "Si desidera eliminare i menu selezionati?\n${0} menu sono selezionati.",
		admin_delete_confirmation_repositories: "Si desidera eliminare i repository selezionati?\n${0} repository sono selezionati.",
		admin_delete_confirmation_viewer_mappings: "Si desidera eliminare le associazioni visualizzatore selezionate? ${0} associazioni selezionate.",
		admin_delete_confirmation_icon_mappings: "Si desidera eliminare le configurazioni icone selezionate?\n${0} configurazioni icone sono selezionate.",
		admin_delete_confirmation_plugins: "Si desidera eliminare i plug-in selezionati?\n${0} plug-in sono selezionati.",
		admin_delete_confirmation: "Si desidera eliminare gli elementi selezionati?\n${0} elementi sono selezionati.",

		admin_viewer_mapping_id_hover: "L'ID deve essere univoco e non è possibile modificare l'ID dopo aver salvato l'associazione visualizzatore.<br><br>L'ID può contenere solo caratteri alfanumerici e viene fatta distinzione tra maiuscole/minuscole.",
		admin_viewer_mapping_id_disabled_hover: "Non è possibile modificare l'ID associazione visualizzatore. Se si desidera utilizzare un ID differente, è necessario creare una nuova associazione visualizzatore.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Non è possibile eliminare il desktop predefinito.",

		admin_desktop_heading: "Desktop: <b>${0}</b>",
		admin_menu_toolbar_heading: "Barra degli strumenti: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Barra degli strumenti personalizzata: <b>${0}</b>",
		admin_menu_context_menu_heading: "Menu di scelta rapida: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Menu di scelta rapida personalizzato: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Il plug-in può essere un file JAR o un file di classe compilato.<br/><br/><b>Importante:</b> il server delle applicazioni web di IBM Content Navigator deve poter accedere al file di plug-in sul file system locale o tramite un URL.",
		admin_plugin_list_instructions: "È necessario utilizzare lo strumento di amministrazione per registrare i plug-in per il client Web. Se un plug-in richiede una configurazione supplementare, vengono visualizzati i parametri di configurazione dopo aver registrato il plug-in.<br /><br /><b>Importante:</b> se si modifica un plug-in cui si fa riferimento in un'altra area dello strumento di amministrazione, ad esempio un menu, è possibile che si verifichino problemi con il comportamento del plug-in. Inoltre, i plug-in sono richiamati nell'ordine in cui sono elencati. Se è necessario eseguire un plug-in prima di un altro plug-in, assicurarsi che i plug-in siano elencati nell'ordine in cui devono essere eseguiti.",
		admin_plugin_cannot_delete: "I plug-in selezionati non possono essere eliminati perché alcuni plug-in dipendono da essi.<br/>Plug-in selezionati: ${0}<br/>Plug-in dipendenti:${1}",
		admin_plugin_cannot_disable: "I plug-in selezionati non possono essere disabilitati perché alcuni plug-in dipendono da essi.<br/>Plug-in selezionati: ${0}<br/>Plug-in dipendenti:${1}",
		admin_plugin_cannot_add: "Il plug-in non può essere aggiunto perché alcuni plug-in da cui esso dipende mancano o sono disabilitati. Plug-in mancanti o disabilitati: ${0}",
		admin_plugin_cannot_enable: "I plug-in selezionati non possono essere abilitati perché alcuni plug-in da cui essi dipendono mancano o sono disabilitati.<br/>Plug-in selezionati: ${0}<br/>Plug-in mancanti o disabilitati: ${1}",
		admin_plugin_save_order: "Salva ordine",
		admin_plugin_load: "Carica",
		admin_plugin_load_hover: "Specificare l'URL del plug-in",
		admin_plugin_file_hover: "Se il file JAR del plug-in si trova sul file system locale, è possibile immettere il percorso completo o l'URL del file di plug-in. Se il file JAR del plug-in si trova sul server remoto, è possibile immettere l'URL del file di plug-in.",
		admin_plugin_classfolderpath_hover: "Sul server delle applicazioni web IBM Content Navigator deve essere presente il file di classe compilato.<br/><br/>Immettere il percorso completo della cartella in cui vengono compilate e generate le classi di plug-in.<br/><br/>Il percorso non deve contenere il nome pacchetto della classe di plug-in. Ad esempio, il percorso predefinito per la classe di plug-in di esempio su Windows è C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Immettere il nome completo della classe Java all'interno del file di classe che deve essere caricato e chiamato come la classe di plug-in.<br/>Ad esempio, il nome classe per il plug-in di esempio è com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Il file JAR del plug-in non è stato trovato nell'URL specificato. Accertarsi che il file JAR si trovi sul server delle applicazioni Web e che l'URL e il nome file siano corretti.",
		admin_plugin_for_repository_not_loaded: "Non è possibile modificare questo repository. Il plugin che definisce e supporta questo tipo di repository non è caricato. Nella scheda Plug-in, modificare il plug-in per verificare che sia configurato correttamente e che sia caricato.",
		admin_plugin_repository_types: "Tipi di repository:",
		admin_plugin_viewers: "visualizzatore:",
		admin_plugin_features: "Funzioni:",
		admin_plugin_layouts: "Layout:",
		admin_plugin_not_available: "Non disponibile",
		admin_plugin_config_params: "Parametri di configurazione:",
		admin_viewer_def_heading: "Associazione visualizzatore: <b>${0}</b>",
		admin_users_and_groups: "Utenti e gruppi",
		admin_general: "Generale",
		admin_logging: "Registrazione",
		admin_authentication: "Autenticazione",		
		admin_rolebase_role: "Ruolo:",
		admin_settings_logging_instructions: "È possibile utilizzare la registrazione per risolvere i problemi con il client Web. È possibile perfezionare la registrazione se è noto che si verifica un problema all'interno di una classe Java specifica o per uno specifico utente. Le informazioni sull'errore sono scritte nei file di log degli errori del server delle applicazioni web.",
		admin_settings_logging_instructions2: "<b>Impostazione della registrazione di debug</b><br />Se si sa che si verifica un problema per una specifica macchina host o utente, è possibile destinare la registrazione di debug a tale macchina o utente. È possibile catturare le informazioni di debug in un ambiente di produzione senza influenzare significativamente le prestazioni del sistema.<br /><br /><b>Importante:</b> Se si specifica una macchina host del client o un utente, questa impostazione sostituisce tutte le altre impostazioni di registrazione. Una volta acquisite le informazioni necessarie, impostare questa opzione su <b>None</b> per riprendere la registrazione standard per il proprio ambiente.",
		admin_settings_export_config_hover: "Esportare le informazioni attuali di configurazione del sistema in un file da utilizzare con IBM Support Assistant Data Collector. Il file viene salvato nella posizione definita dalla proprietà di sistema user.home Java.",
		admin_logging_level: "Registrazione a livello dell'applicazione:",
		admin_logging_level_hover: "I livelli di registrazione influenzano la quantità di informazioni che vengono memorizzate sul server. La selezione di <b>Errore</b> cattura la quantità minima di informazioni di registrazione. La selezione di <b>Debug</b> raccoglie la quantità maggior di informazioni.<br /><br />Non  specificare <b>Debug</b> in un ambiente di produzione, se non quando richiesto dal supporto software IBM.",
		admin_logging_level_0: "Nessuna registrazione",
		admin_logging_level_1: "Errore",
		admin_logging_level_2: "Avvertenza",
		admin_logging_level_3: "Informazioni",
		admin_logging_level_4: "Debug",
		admin_logging_classes: "Registrazione a livello di classe Java:",
		admin_logging_classes_hover: "Per impostazione predefinita, tutte le classi Java ed i pacchetti sono inclusi nei log degli errori del server delle applicazioni Web. Tuttavia, è possibile specificare le classi o i package da includere o escludere dalla registrazione. È possibile utilizzare i log degli errori del server delle applicazioni web per determinare le classi da includere o escludere.<br><br>Se è noto che un problema si verifica in una classe specifica, è possibile includere specificamente tale classe nei file di log. Quando si include una classe nei log di errori, tutte le altre classi vengono escluse dal file di log.<br><br>Se è noto che un problema non si verifica in una classe e si desidera ridurre la dimensione del file di log, è possibile escludere tale classe dai file di log.",
		admin_logging_classes_include: "Includi",
		admin_logging_classes_include_all: "Tutte le classi",
		admin_logging_classes_include_specified: "Classi specifiche",
		admin_logging_classes_include_specified_msg: "Specificare le classi da includere.",
		admin_logging_classes_exclude: "Escludi",
		admin_logging_classes_exclude_none: "Nessuno",
		admin_logging_classes_exclude_specified: "Classi specifiche",
		admin_logging_classes_exclude_specified_msg: "Specificare le classi da escludere.",
		admin_logging_debug: "Registrazione di debug per:",
		admin_logging_debug_hover: "<b>Importante:</b> controllare i file di log del server delle applicazioni Web prima di specificare un indirizzo IP di una macchina host o un utente. Il valore fornito deve corrispondere al valore visualizzato nel file di log.",
		admin_logging_debug_none: "Nessuno (valore predefinito)",
		admin_logging_debug_host: "Macchine host del client (indirizzi IP)",
		admin_logging_debug_host_msg: "Specificare l'indirizzo IP di una o più macchine client per cui si desidera registrare le informazioni di debug. Utilizzare una virgola per separare gli indirizzi IP.<br /><br /><b>Importante:</b> esaminare i file di log del server delle applicazioni web prima di specificare un indirizzo IP. Il valore fornito deve corrispondere al valore visualizzato nel file di log.",
		admin_logging_debug_user: "Utenti",
		admin_logging_debug_user_msg: "Specificare il nome utente di uno o più utenti per cui si desidera registrare le informazioni di debug. Utilizzare una virgola per separare i nomi utente.<br /><br /><b>Importante:</b> esaminare i file di log del server delle applicazioni web prima di specificare un nome utente. Il valore fornito deve corrispondere al valore visualizzato nel file di log.",

		admin_office_settings_logging_instructions: "È possibile utilizzare la registrazione per risolvere i problemi in IBM Content Navigator for Microsoft Office. È possibile perfezionare la registrazione se è noto che si verifica un problema all'interno di una classe specifica o per uno specifico utente. Le informazioni sull'errore vengono scritte nei file di log delle applicazioni delle macchine host di IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Impostazione della registrazione di debug</b><br />Se è noto che un problema si verifica in una specifica macchina host del client o in un utente di IBM Content Navigator for Microsoft Office, è possibile indirizzare la registrazione di debug su tale macchina o utente. È possibile catturare le informazioni di debug in un ambiente di produzione senza influenzare significativamente le prestazioni del sistema. <br /><br /><b>Importante:</b> Se si specifica una macchina host del client o un utente, questa impostazione sostituisce tutte le altre impostazioni di registrazione. Dopo aver catturato le informazioni necessarie, impostare questa opzione su <b>None</b> per riprendere la registrazione standard del proprio ambiente IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> controllare i file di log della macchina client prima di specificare un indirizzo IP di una macchina host o un utente. Il valore fornito deve corrispondere al valore visualizzato nel file di log. ",
		admin_office_logging: "Registrazione Office",
		admin_office_logging_classes: "Registrazione a livello di classe:",
		admin_office_logging_classes_hover: "Per impostazione predefinita, nel log degli errori di IBM Content Navigator for Microsoft Office sono incluse tutte le classi ed i package. Tuttavia, è possibile specificare le classi o i package da includere o escludere dalla registrazione. È possibile utilizzare i log della macchina host per determinare le classi da includere o escludere.<br /><br />Se è noto che un problema si verifica in una classe specifica, è possibile includere specificamente tale classe nei file di log. Quando si include una classe nei log di errori, tutte le altre classi vengono escluse dai file di log. <br /><br />Se è noto che un problema non si verifica in una classe e si desidera ridurre la dimensione del file di log, è possibile escludere tale classe dai file di log. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> controllare i file di log della macchina client prima di specificare un indirizzo IP di una macchina host o un utente. Il valore fornito deve corrispondere al valore visualizzato nel file di log.",
		admin_office_logging_additional_settings: "Impostazioni aggiuntive:",
		admin_office_logging_additional_settings_hover: "Specifica ulteriori impostazioni",
		admin_office_logging_file_size: "Dimensione file di log",
		admin_office_logging_file_size_hover: "Specifica la dimensione con cui IBM Content Navigator for Microsoft Office crea il nuovo file di log. Quando un file di log raggiunge la dimensione massima, il log corrente viene ridenominato per includere la data (nel formato AAAAMMgg) e viene creato un file con numero incrementale (ad esempio, ICNExcelAddin-20121116-5.log) ed un nuovo file di log. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Mostra analisi dello stack nelle finestre di dialogo",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "È possibile visualizzare le informazioni di analisi dello stack nelle finestre di dialogo dei messaggi per facilitare la risoluzione dei problemi. Anche se non si abilita questa opzione, le informazioni dettagliate dell'analisi dello stack sono sempre incluse nel log degli errori di IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Icone di stato",
		admin_icon_state_icon: "Icona di stato",
		admin_icon_state: "Stato",
		state_contains_label: "Lo stato contiene",
		admin_icon_state_instructions: "È possibile personalizzare le icone visualizzate accanto ai documenti, le cartelle e gli elementi di lavoro nei repository.<br><br><b>Suggerimento:</b> è possibile specificare se visualizzare le icone di stato per ciascun repository nell'ambiente.",
		admin_icon_state_dialog_title: "Associazione icone di stato",
		admin_icon_state_dialog_instructions: "È possibile associare lo stato selezionato a un'icona predefinita fornita con il client Web o a un'icona personalizzata.",

		admin_icon_mapping_twisty: "Icone Tipo MIME",
		admin_icon_mapping_dialog_title: "Associazione icone",
		admin_icon_mapping: "Associazione icone",
		admin_icon_mapping_instructions: "È possibile associare un elenco di tipi MIME a un'icona predefinita fornita con il client Web o a un'icona personalizzata.",
		admin_icon_mapping_list_instructions: "È possibile personalizzare le icone visualizzate per i diversi tipi MIME memorizzati nel repository. Il client Web utilizza le icone nell'ordine in cui sono elencate. Se un tipo MIME è elencato più di una volta, viene utilizzata la prima icona associata a tale tipo MIME.",
		admin_icon_mapping_icon_label: "Specificare l'icona da utilizzare",
		admin_icon_mapping_file_name: "Icona personalizzata:",
		admin_icon_mapping_file_name_heading: "Icona personalizzata",
		admin_icon_mapping_file_name_placeholder: "Specificare l'URL dell'icona",
		admin_icon_mapping_file_name_hover: "Immettere l'URL dell'icona. Se l'icona è sullo stesso server delle applicazioni web del client web, immettere un URL relativo. Ad esempio: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Icona predefinita:",
		admin_icon_mapping_class_name_heading: "Icona predefinita",
		admin_icon_mapping_class_name_hover: "Selezionare un'icona fornita con il client Web.",
		admin_icon_mapping_class_name_placeholder: "Seleziona un'icona",

		admin_p8_instructions: "Queste informazioni sono condivise da tutti i repository di FileNet Content Manager configurati per il client Web.",
		admin_p8_collaboration_config: "Configurazione facoltativa di FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "È possibile configurare questi parametri se si desidera ottimizzare FileNet Collaboration Services per l'ambiente IBM FileNet P8.",
		admin_p8_use_url_incoming: "Utilizzare l'URL delle richieste in entrata per generare gli URL di risposta:",
		admin_p8_use_url_incoming_hover: "Nella maggior parte degli ambienti FileNet Collaboration Services, è possibile utilizzare l'URL di una richiesta in entrata per generare gli URL in una risposta. Selezionare <b>Sì</b> a meno che nel proprio ambiente non si applichi una delle seguenti situazioni:<ul><li>Si desidera forzare le applicazioni client ad accedere a FileNet Collaboration Services tramite un URL specifico.<li>Le impostazioni del server proxy determinano la creazione di URL non validi da parte di FileNet Collaboration Services.</ul>",

		admin_p8_use_url_incoming_http: "URL FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Specificare l'URL tramite cui le applicazioni client possono accedere a FileNet Collaboration Services nel formato http://FNCSserver:numero_porta.",
		admin_p8_use_url_incoming_https: "URL HTTPS FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Se FileNet Collaboration Services è configurato per utilizzare SSL, specificare l'URL HTTPS mediante il quale le applicazioni client possono accedere a FileNet Collaboration Services nel formato https://FNCSserver:numero_porta",
		admin_p8_hide_email_addresses: "Nascondi gli indirizzi email degli utenti nelle risposte del server:",
		admin_p8_hide_email_addresses_hover: "È possibile nascondere gli indirizzi email degli utenti nelle risposte del server se è necessario rispettare le politiche di riservatezza. Ad esempio, è possibile nascondere l'elenco degli indirizzi email degli utenti quando il server restituisce un elenco di documenti e informazioni relative agli utenti che ha creato o modificato i documenti.",

		admin_p8_mask_user_ids: "Maschera gli ID utente nel file di log:",
		admin_p8_mask_user_ids_hover: "È possibile nascondere i nomi utente nei file di log FileNet Collaboration Services se si devono soddisfare le politiche di riservatezza. Quando si abilita questa opzione, i nomi utente vengono sostituiti con i valori hash. Ciò consente di fornire i file di log ad aziende esterne, come IBM, per scopi di supporto senza compromettere i nomi o i record attività dei propri utenti.",

		admin_p8_soft_delete: "Sposta i file eliminati nel contenitore di recupero:",
		admin_p8_soft_delete_hover: "Quando gli utenti eliminano elementi, li spostano in un contenitore di recupero, anziché eliminarli dal repository. Gli elementi restano nel contenitore di recupero fino a quando non vengono eliminati. Questa impostazione viene ignorata se il repository di destinazione non supportano contenitori di recupero.<br><br><b>Limitazione:</b> I contenitori di recupero sono supportati in IBM FileNet P8 Versione 5.2 e nelle versioni successive e richiedono la presenza del componente aggiuntivo Social Collaboration Base Extensions.",

		admin_p8_download: "Configurazione di CDHC (Content Download HTTP Cache)",
		admin_p8_download_instructions: "Se il repository di IBM FileNet Content Manager contiene molti file di grandi dimensioni, è possibile configurare la CDHC (Content Download HTTP Cache) affinché FileNet Collaboration Services reindirizzi le richieste di contenuto per i file di grandi dimensioni ad un server Web.<br/><br/>Questa funzione richiede IBM HTTP Server. Inoltre, è necessario aggiornare il file httpd.conf di IBM HTTP Server.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Specificare se si desidera abilitare la CDHC (Content Download HTTP Cache) per tutti i repository di IBM FileNet Content Manager nel proprio ambiente. È possibile specificare la dimensione minima di memorizzazione in cache dei file.",
		admin_p8_download_cache_folder: "Directory cache completa:",
		admin_p8_download_cache_folder_hover: "Specificare il percorso completo della directory in cui si desidera archiviare i file memorizzati nella cache. La directory può trovarsi su qualsiasi sistema operativo o dispositivo, ad esempio una directory di rete condivisa, purché sia visibile come un file system a FileNet Collaboration Services ed a IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias dell'ubicazione della cache:",
		admin_p8_download_cache_url_hover: "Specificare l'alias utilizzato per puntare alla directory della cache dall'URL FileNet Collaboration Services. Specificare l'alias nel formato /alias, ad esempio, /cdhc.<br/><br/>Quando si include /cdhc in un URL, l'applicazione viene reindirizzata alla directory cache completa.",
		admin_p8_download_cache_max_files: "Numero massimo di file memorizzati in cache:",
		admin_p8_download_cache_max_files_hover: "Quando viene raggiunto il numero massimo di file, il file meno recente viene rimosso dalla cache.<br><br>Se si specifica il numero massimo di file da memorizzare nella cache e la dimensione massima della cache, il file meno recente viene rimosso dalla cache quando la più restrittiva tra le due condizioni è soddisfatta.",
		admin_p8_download_cache_max_size: "Dimensione massima della cache (in GB):",
		admin_p8_download_cache_max_size_hover: "Quando viene raggiunta la dimensione massima della cache, il file meno recente viene rimosso dalla cache.<br/><br/>Se si specifica il numero massimo di file da memorizzare nella cache e la dimensione massima della cache, il file meno recente viene rimosso dalla cache quando la più restrittiva tra le due condizioni è soddisfatta.",
		admin_p8_download_cache_cleanup_duration: "Durata massima della ripulitura (in secondi):",
		admin_p8_download_cache_cleanup_duration_hover: "Specifica la durata massima dell'operazione di ripulitura. La durata predefinita è 5 secondi.<br><br>Tutti i file sottoposti ad eliminazione, ma che restano nella cache dopo l'operazione di eliminazione saranno rimossi durante un'operazione di ripulitura successiva.",
		admin_p8_download_cache_cleanup_min: "Intervallo minimo tra le operazioni di ripulitura della cache (in secondi):",
		admin_p8_download_cache_cleanup_min_hover: "Specifica la quantità minima di tempo che deve trascorrere tra le operazioni di ripulitura della cache. La quantità di tempo predefinita è 3.600 secondi (1 ora).<br><br>Le operazioni di ripulitura della cache si verificano solo quando c'è una richiesta attiva per scaricare il contenuto dalla cache. Se le richieste arrivano ogni minuto, l'operazione di ripulitura verrà eseguita ogni ora. Tuttavia, se passano tre ore tra le richieste di download, l'operazione di ripulitura non verrà effettuata fino a che non verrà ricevuta la successivo richiesta di download.",
		admin_p8_download_cache_min_lifetime: "Permanenza minima in cache (in secondi):",
		admin_p8_download_cache_min_lifetime_hover: "Specificare la quantità minima di tempo nel quale un file è conservato nella cache prima di essere rimosso. La quantità di tempo predefinita è 3.600 secondi (1 ora).<br><br>Anche se la cache raggiunge la dimensione massima o contiene il massimo numero di file, i file più vecchi nella cache non possono essere eliminati fino a quando il file non è stato nella cache il tempo minimo specificato.",
		admin_p8_download_cache_size_threshold: "Dimensione minima del file in cache (in KB):",
		admin_p8_download_cache_size_threshold_hover: "Specifica la dimensione minima alla quale utilizzare CDHC per memorizzare i file nella cache. Se un file è più piccolo della dimensione specificata, il file viene indirizzato attraverso il server delle applicazioni Web su cui FileNet Collaboration Services è distribuito. La dimensione predefinita è 1.000 KB.",
		admin_p8_download_guard_header: "Intestazione HTTP per il gatekeeping:",
		admin_p8_download_guard_header_hover: "Se un'applicazione client non instrada una richiesta mediante IBM HTTP Server, il contenuto della cache non può essere scaricato. È possibile specificare che solo le richieste in entrata, con specificate un'intestazione HTTP (che viene aggiunta a richieste provenienti da IBM HTTP Server) possono accedere al accedere al contenuto memorizzato nella cache, per evitare errori di download.<br><br>L'intestazione HTTP viene configurata in IBM HTTP Server ed è presente su tutte le richieste in arrivo che vengono instradate tramite IBM HTTP Server. Se una richiesta non ha l'intestazione HTTP, il contenuto viene instradato attraverso il server delle applicazioni web piuttosto che IBM HTTP Server.",
		admin_p8_download_generate_config: "Genera configurazione",
		admin_p8_download_generate_config_label: "Configurazione IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Perché la configurazione CHDC funzioni, è necessario aggiornare il file httpd.conf di IBM HTTP Server. Fare clic su Genera configurazione per generare le istruzioni che devono essere aggiunte al file httpd.conf.",

		admin_logging_viewone_pro: "Registrazione ViewONE Professional:",
		admin_logging_viewone_virtual: "Registrazione ViewONE Virtual:",
		admin_logging_viewone_streamer: "Registrazione Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "Le opzioni di registrazione Document Streaming Server Module sono applicabili solo se si è abilitato lo streaming per i file PDF o TIFF nella sezione <b>Daeja ViewONE</b> dello strumento di amministrazione.",
		admin_logging_viewone_redaction: "Registrazione Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "Le opzioni di registrazione di Permanent Redaction Server Module sono applicabili solo se l'utente è autorizzato ad utilizzare il modulo Redaction di Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Esegui stream dei file PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Se nel proprio repository si hanno documenti PDF di notevoli dimensioni, è possibile consentire al visualizzatore di eseguire lo streaming del contenuto del documento per rendere più rapida agli utenti la visualizzazione dei documenti. Tuttavia, se lo streaming non funziona nel proprio ambiente, è possibile disabilitarlo.",
		admin_daeja_viewonepro_stream_tiff_documents: "Esegui stream dei file TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Se nel proprio repository si hanno documenti TIFF di notevoli dimensioni, è possibile consentire al visualizzatore di eseguire lo streaming del contenuto del documento per rendere più rapida agli utenti la visualizzazione dei documenti. Tuttavia, se lo streaming non funziona nel proprio ambiente, è possibile disabilitarlo.",
		admin_daeja_viewonepro_show_file_buttons: "Pulsanti di file",
		admin_daeja_viewonepro_show_file_menus: "Menu di file",
		admin_daeja_viewonepro_enable_file_keys: "Tasti di scelta rapida di file",
		admin_daeja_viewonepro_file_keys_hover_help: "Specificare se si desidera che gli utenti utilizzino tasti di scelta rapida della tastiera per lavorare con i file, ad esempio, per aprire o salvare un file. Per ulteriori informazioni relative a specifici tasti di scelta rapida, consultare la descrizione del parametro FileKeys nel manuale IBM Daeja ViewONE Parameters Reference.",
		admin_daeja_viewonepro_show_print_buttons: "Pulsanti di stampa",
		admin_daeja_viewonepro_show_print_menus: "Menu di stampa",
		admin_daeja_viewonepro_enable_print_keys: "Tasti di scelta rapida di stampa",
		admin_daeja_viewonepro_print_keys_hover_help: "Specificare se si desidera che gli utenti utilizzino tasti di scelta rapida della tastiera per stampare i file, ad esempio, stampare una pagina o un documento. Per ulteriori informazioni relative a specifici tasti di scelta rapida, consultare la descrizione del parametro PrintKeys nel manuale IBM Daeja ViewONE Parameters Reference.",
		admin_daeja_viewonepro_show_invert_buttons: "Inverti pulsanti",
		admin_daeja_viewonepro_annotation_tooltip: "Suggerimento annotazione personalizzata predefinita",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Immettere il testo da visualizzare quando non è specificato alcun suggerimento per un'annotazione personalizzata. Il testo può includere token sostituibili. Ad esempio, &quot;&lt;creator&gt; ha creato questa annotazione in &lt;createdateonly&gt;.&quot;. Per ulteriori informazioni relative ai token sostituibili, fare riferimento al parametro customAnnotationsToolTip nel manuale IBM Daeja ViewONE Parameters Reference.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Utilizza annotazione personalizzata predefinita",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Utilizza annotazione personalizzata predefinita di sistema nella casella di testo di seguito",
		admin_daeja_viewonepro_help_url: "URL della guida",
		admin_daeja_viewonepro_help_url_hover_help: "Specificare l'URL della pagina web che contiene la documentazione della guida per il visualizzatore. Il pulsante Guida nella barra degli strumenti del visualizzatore e il Menu Azioni della guida aprono la pagina web. Se non si specifica un URL, il pulsante Guida e il menu Azioni non sono visualizzati.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Contesto della risorsa dell'immagine:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Instrada i contenuti non supportati al browser:",
		admin_daeja_viewonepro_route_docs_hover_help: "Gli utenti possono visualizzare i file immagine non supportati instradandoli al browser che apre l'applicazione idonea a visualizzare il file. Ad esempio, per aprire un documento Microsoft Word, il browser utilizza il visualizzatore Microsoft Word.",
		admin_daeja_viewonepro_scale: "Adatta automaticamente l'immagine",
		admin_daeja_viewonepro_scale_best: "Miglior adattamento",
		admin_daeja_viewonepro_scale_ftow: "Adatta alla larghezza",
		admin_daeja_viewonepro_scale_ftoh: "Adatta all'altezza",
		admin_daeja_viewonepro_enable_hotkeys: "Abilita tasti di scelta rapida:",
		admin_daeja_viewonepro_show_features: "Mostra pulsanti e menu:",
		admin_daeja_custom_settings: "Impostazioni aggiuntive:",
		admin_daeja_custom_settings_hover_help: "È possibile aggiungere altri parametri specificando il nome ed il valore del parametro. Ad esempio, è possibile specificare &quot;scrollbars&quot; e &quot;true&quot; se si desidera che le barre di scorrimento siano visualizzate quando l'immagine è riportata in dimensioni maggiori rispetto all'area di visualizzazione. Per ulteriori informazioni relative ai nomi e valori del parametro, fare riferimento al manuale IBM Daeja ViewONE Parameters Reference.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Suggerimento annotazione personalizzata predefinita",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Immettere il testo da visualizzare quando non è specificato alcun suggerimento per un'annotazione personalizzata. Il testo può includere token sostituibili. Ad esempio, &quot;&lt;creator&gt; ha creato questa annotazione in &lt;createdateonly&gt;.&quot;. Per ulteriori informazioni relative ai token sostituibili, fare riferimento al parametro customAnnotationsToolTip nel manuale IBM Daeja ViewONE Parameters Reference.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Utilizza annotazione personalizzata predefinita",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Utilizza annotazione personalizzata predefinita di sistema nella casella di testo di seguito",
		admin_daeja_virtual_image_stamp_resource_context: "Contesto della risorsa dell'immagine:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Percorso file delle licenze:",
		admin_daeja_virtual_license_path_hover_help:"Specificare il percorso completo della directory che contiene i file lic-server-virtual.v1 e lic-server.v1. ",
		admin_default_license_path:"Utilizza percorso dei file delle licenze predefinito ",
		admin_license_path_specified:"Utilizza percorso dei file delle licenze personalizzato ",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Memorizza nella cache la directory:",
		admin_daeja_streamer_cache_root_hover_help: "Specificare il percorso completo della directory in cui si desidera archiviare i file memorizzati nella cache per un avvio più rapido. La directory può trovarsi su qualsiasi sistema operativo o dispositivo, ad esempio una directory di rete, purché sia visibile come un file system da IBM Content Navigator ed a IBM HTTP Server. Utilizzare una directory locale per migliorare le prestazioni.",
		admin_daeja_streamer_settings: "Impostazioni aggiuntive:",
		admin_daeja_streamer_settings_hover_help: "È possibile aggiungere altri parametri specificando il nome ed il valore del parametro. Ad esempio è possibile specificare “cookieAllowedDomainList” ed un elenco separato da virgole di server host.  Per ulteriori informazioni relative ai nomi e valori del parametro, fare riferimento al manuale IBM Daeja ViewONE Parameters Reference.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Impostazioni:",
		admin_daeja_redaction_settings_hover_help: "È possibile aggiungere altri parametri specificando il nome ed il valore del parametro. Ad esempio, specificare “burnIncrementalAnnotations” e ”true”. Per ulteriori informazioni relative ai nomi e valori del parametro, fare riferimento al manuale IBM Daeja ViewONE Parameters Reference.",

		admin_daeja_setting_dialog_title_new: "Nuova impostazione",
		admin_daeja_setting_dialog_title_edit: "Modifica impostazione",
		admin_daeja_setting_dialog_hover_help: "Aggiungere altri parametri specificando il nome ed il valore del parametro. Ad esempio, è possibile specificare “scrollbars” e “true” se si desidera che le barre di scorrimento siano visualizzate quando l'immagine è riportata in dimensioni maggiori rispetto all'area di visualizzazione.",
		admin_daeja_setting_dialog_field_hover_help: "Per ulteriori informazioni relative ai nomi e valori del parametro, fare riferimento al manuale the Daeja ViewONE Parameter Reference.",

		admin_daeja_logging: "Registrazione Daeja ViewONE",
		admin_daeja_logging_trace: "Abilita registrazione di traccia",
		admin_daeja_logging_trace_net: "Abilita registrazione di rete",
		admin_daeja_logging_trace_annotations: "Abilita registrazione delle annotazioni",
		admin_daeja_logging_log_file: "File di log:",
		admin_daeja_logging_instructions: "È possibile utilizzare la registrazione per la risoluzione dei problemi con Daeja ViewONE Professional e Daeja ViewONE Virtual. Se si sa che si verifica un problema per un errore specifico, è possibile destinare la registrazione a tale errore.",

		admin_v1pro_logging_trace_hover: "Utilizzare questa impostazione per risolvere i problemi generali con il visualizzatore.<br><br>Le informazioni della registrazione vengono scritte nella console Java della macchina client. È possibile accedere alla console Java dal Pannello di controllo (Windows) o dalle Preferenze del sistema (Mac) per il proprio sistema operativo.",
		admin_v1pro_logging_trace_net_hover: "Utilizzare questa impostazione per risolvere i seguenti problemi:<ul><li>Problemi con la connessione al server</li><li>Problemi con i tipi MIME</li><li>Problemi con i file troppo lunghi</li></ul>Inoltre, è possibile utilizzare la registrazione di traccia della rete per determinare dove si verificano i ritardi utilizzando Daeja ViewONE Professional.<br><br>Le informazioni della registrazione vengono scritte nella console Java della macchina client. È possibile accedere alla console Java dal Pannello di controllo (Windows) o dalle Preferenze del sistema (Mac) per il proprio sistema operativo.",
		admin_v1pro_logging_trace_annotations_hover: "Utilizzare questa impostazione per risolvere i problemi con la creazione, il salvataggio o il caricamento delle annotazioni.<br><br>Le informazioni della registrazione vengono scritte nella console Java della macchina client. È possibile accedere alla console Java dal Pannello di controllo (Windows) o dalle Preferenze del sistema (Mac) per il proprio sistema operativo.",

		admin_virtual_logging_trace_hover: "Utilizzare questa impostazione per risolvere i problemi generali con il visualizzatore.<br><br>Per impostazione predefinita, le informazioni della registrazione vengono scritte nel file virtual.log nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Utilizzare questa impostazione per risolvere i seguenti problemi:<ul><li>Problemi con la connessione al server</li><li>Problemi con i tipi MIME</li><li>Problemi con i file troppo lunghi</li></ul>Inoltre, è possibile utilizzare la registrazione di traccia della rete per determinare dove si verificano i ritardi utilizzando Daeja ViewONE Virtual.<br><br>Per impostazione predefinita, le informazioni della registrazione vengono scritte nel file virtual.log nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Utilizzare questa impostazione per risolvere i problemi con la creazione, il salvataggio o il caricamento delle annotazioni.<br><br>Per impostazione predefinita, le informazioni della registrazione vengono scritte nel file virtual.log nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Se si abilita la funzione di registrazione per il visualizzatore, è necessario specificare il percorso completo e il nome del file di log in cui si desidera memorizzare le informazioni di registrazione.  Si consiglia di denominare il file di log virtual.log.",

		admin_streamer_logging_trace_hover: "Utilizzare questa impostazione per risolvere i problemi con Document Streaming Server Module.<br><br>Per impostazione predefinita, le informazioni della registrazione vengono scritte nel file streamer.log che è presente nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Utilizzare questa impostazione per risolvere i seguenti problemi:<ul><li>Problemi con la connessione al server</li><li>Problemi con i tipi MIME specifici</li><li>Problemi con i file troppo lunghi</li></ul>Inoltre, è possibile utilizzare la registrazione di traccia della rete per determinare dove si verificano i ritardi utilizzando Document Streaming Server Miodule.<br><br>Per impostazione predefinita, le informazioni della registrazione vengono scritte nel file streamer.log che è presente nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Se si abilita la funzione di registrazione per Document Streaming Server Module, è necessario specificare il percorso completo e il nome del file di log in cui si desidera memorizzare le informazioni di registrazione.  Si consiglia di denominare il file di log streamer.log.",

		admin_redaction_logging_trace_hover: "Utilizzare questa impostazione per risolvere i problemi con Permanent Redaction Server Module.<br><br>Per impostazione predefinita le informazioni della registrazione vengono scritte nel file redacttofile.log che è presente nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Utilizzare questa impostazione per risolvere i seguenti problemi:<ul><li>Problemi con la connessione al server</li><li>Problemi con i tipi MIME specifici</li><li>Problemi con i file troppo lunghi</li></ul>Inoltre, è possibile utilizzare la registrazione di traccia della rete per determinare dove si verificano i ritardi utilizzando Permanent Redaction Server Miodule.<br><br>Per impostazione predefinita le informazioni della registrazione vengono scritte nel file redacttofile.log che è presente nella sottodirectory config della directory di installazione di IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Se si abilita la funzione di registrazione per Permanent Redaction Server Module, è necessario specificare il percorso completo e il nome del file di log in cui si desidera memorizzare le informazioni di registrazione.  Si consiglia di denominare il file di log redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configurare le funzioni per i visualizzatore e servizi.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Se si utilizza il client Web per connettersi a uno o più repository Content Manager OnDemand, è necessario specificare le informazioni richieste per il corretto funzionamento di OnDemand Web Enablement Kit. Queste informazioni sono condivise da tutti i repository Content Manager OnDemand configurati per il client Web.",
		admin_ondemand_language: "Lingua:",
		admin_ondemand_tempdir: "Directory temporanea ODWEK:",
		admin_ondemand_tracegrp: "Traccia ODWEK",
		admin_ondemand_tracedir: "Directory di traccia:",
		admin_ondemand_tracelevel: "Livello di traccia:",
		admin_ondemand_tracelevel_0: "0 - Nessuna registrazione",
		admin_ondemand_tracelevel_1: "1 - Registrazione messaggi di errore",
		admin_ondemand_tracelevel_2: "2 - Registrazione messaggi di errore e di avvertenza",
		admin_ondemand_tracelevel_3: "3 - Registrazione messaggi informativi, di errore e di avvertenza",
		admin_ondemand_tracelevel_4: "4 - Vengono catturati tutti i messaggi, inclusa la traccia delle funzioni",
		admin_ondemand_max_trace_filesize: "Dimensione massima file di traccia:",
		admin_ondemand_max_trace_filesize_unlimited: "Illimitata",
		admin_ondemand_max_trace_filesize_limited: "Limitata (Raccomandata)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Questo valore non è compreso nell'intervallo. Il valore deve essere un numero intero compreso tra 1 e 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Directory di installazione AFP2PDF:",
		admin_ondemand_language_hover: "Specificare la lingua in cui ODWEK restituisce i messaggi.",
		admin_ondemand_tempdir_hover: "Immettere la directory in cui OnDemand Web Enablement Kit memorizza i file temporanei durante l'elaborazione. È necessario immettere il percorso completo di una directory esistente sul server delle applicazioni Web.",
		admin_ondemand_tracedir_hover: "Immettere la directory in cui si desidera memorizzare il file di traccia ODWEK arswww.trace. È necessario immettere il percorso completo di una directory esistente sul server delle applicazioni Web.",
		admin_ondemand_tracelevel_hover: "Specificare il livello di registrazione delle informazioni scritte nel file arswww.trace. La <b>Registrazione messaggi di errore</b> cattura la quantità minima di informazioni di registrazione. <b>Sono catturati tutti i messaggi, compresa la traccia di funzione</b> rileva la maggior parte delle informazioni.<br /><br />Non specificare <b>Sono catturati tutti i messaggi, compresa la traccia di funzione</b> in un ambiente di produzione, a meno che non venga richiesto dal supporto software IBM.",
		admin_ondemand_max_trace_filesize_hover: "Specificare se si desidera che la dimensione del file di traccia ODWEK aumenti illimitatamente o che il client Web crei nuovi file di log quando il file di log raggiunge una determinata dimensione. L'impostazione predefinita è di consentire che la dimensione del file di log di traccia cresca fino a quando l'applicazione viene arrestata sul server delle applicazioni Web.",
		admin_ondemand_max_trace_unlimited_hover: "Selezionare questa opzione se si desidera che le informazioni di traccia ODWEK vengano scritte in un singolo file di log. Se si seleziona questa opzione, il file di log potrebbe essere troppo grande per l'apertura con un visualizzatore di file standard.",
		admin_ondemand_max_trace_limited_hover: "Selezionare questa opzione se si desidera che le informazioni di traccia ODWEK vengano scritte in file di log di dimensioni inferiori. Quando un file di log raggiunge la dimensione massima, il log corrente viene ridenominato per includere la data (arswww.trace.AAAAMMGG.HHMMSS) e viene creato un nuovo file di log.",
		admin_ondemand_afp2pdf_installdir_hover: "Se si desidera utilizzare il programma di utilità AFP2PDF Transform per convertire i documenti AFP in documenti PDF per la visualizzazione e la stampa, specificare la directory in cui è installato il programma di utilità AFP2PDF Transform sul server delle applicazioni Web. Ad esempio: C:\\Program Files\\IBM\\AFP2web\\afp2pdf",

		admin_adminusers: "Amministratori",
		admin_adminusers_heading_text_multi: "È necessario specificare quali utenti dispongono di privilegi amministrativi nel client Web. Solo gli amministratori possono accedere al desktop di gestione.<br /><br /><b>Importante:</b> gli ID utente degli amministratori di IBM Content Navigator devono corrispondere a quanto riportato di seguito:<ul><li>ID utente esistenti sul server delle applicazioni Web. Gli ID utente non devono essere amministratori sul server delle applicazioni Web.</li><li>ID utente esistenti sul repository predefinito configurato per ciascun desktop che include la funzione Amministrazione.</li></ul>",
		admin_adminusers_heading_text_single: "È necessario specificare quali utenti dispongono di privilegi amministrativi nel client Web. Solo gli amministratori possono accedere al desktop di gestione.<br /><br /><b>Importante:</b> gli ID utente degli amministratori di IBM Content Navigator devono corrispondere agli ID utente che esistono sul server delle applicazioni Web. Gli ID utente non devono essere amministratori sul server delle applicazioni Web.",
		admin_adminusers_newuser: "Nuovo amministratore:",
		admin_adminusers_add: "Aggiungi",
		admin_adminusers_remove: "Rimuovi",
		admin_adminusers_listheading: "Amministratori",
		admin_adminusers_nameInvalid: "Il valore non può essere un duplicato.",

		admin_sync_server_instructions: "<b>Solo utenti FileNet P8:</b> se si pianifica di abilitare i servizi di sincronizzazione per uno o più repository, è necessario configurare il client web per utilizzare i servizi di sincronizzazione. La configurazione dei servizi di sincronizzazione è condivisa da tutti i repository nell'ambiente.",
		admin_settings_instructions: "I valori specificati sulla scheda Impostazioni si applicano a tutti i desktop nella configurazione.",
		admin_autocomplete: "Inserire automaticamente i nomi utente:",
		admin_autocomplete_hover: "Specificare se si desidera che il client Web memorizzi i nomi utente nei cookie del browser per consentire al browser di inserire automaticamente i nomi utente nel client Web durante l'accesso.<br><br>Se si abilita questa opzione, il nome utente dell'ultimo utente che accede al client Web viene memorizzato nei cookie del browser e viene visualizzato automaticamente nella pagina di accesso quando un utente apre il client Web.<br><br>È necessario disabilitare questa opzione se si accede all'applicazione da workstation condivise oppure se si preferisce non memorizzare i nomi utente nei cookie del browser.<br /><br />Questa opzione non si applica alle applicazioni portatili o personalizzate.",
		admin_autocomplete_enable: "Abilita",
		admin_autocomplete_disable: "Disabilita",
		admin_cultural_collation: "Utilizzare ordinamento specifico della locale:",
		admin_cultural_collation_hover: "Se si abilita l'ordinamento specifico della locale, l'ordinamento viene effettuato sul server repository. Questo può diminuire le prestazioni del client Web.<br><br>La disabilitazione dell'ordinamento specifico della locale può migliorare le prestazioni del client Web.",
		admin_cultural_collation_enable: "Abilita",
		admin_cultural_collation_disable: "Disabilita",
		admin_base_ui_style: "Stile tema",
		admin_base_ui_style_hover: "Specifica lo stile del tema predefinito utilizzato sul client web. Questo stile viene utilizzato solo sui desktop che utilizzano il tema <b>Predefinito</b> (come specificato nella scheda <b>Aspetto</b> della configurazione del desktop).<br/></br><b>Limitazione:</b> se le configurazioni del desktop utilizzano temi personalizzati, i temi personalizzati si basano sullo stile classico indipendentemente dallo stile selezionato.",
		admin_base_ui_style_classic: "Classico",
		admin_access_control_access: "Limita l'accesso ad utenti e gruppi specifici",
		admin_access_control_access_show: "Mostra accesso ai dati di controllo",
		admin_access_control_access_enable: "Sì",
		admin_access_control_access_disable: "No",
		admin_mobile_access: "Consenti l'accesso dalle applicazioni portatili",
		admin_mobile_access_hover: "Per impostazione predefinita, gli utenti possono accedere al client Web dall'applicazione IBM Content Navigator iOS.<br /><br /><b>Importante:</b> se si impedisce agli utenti di accedere al client Web dall'applicazione iOS, gli utenti possono comunque accedere al client Web dai browser Web sui dispositivi portatili e da qualsiasi applicazione personalizzata scritta utilizzando le API di IBM Content Navigator e che funziona sui dispositivi portatili.",
		admin_mobile_access_enable: "Sì",
		admin_mobile_access_disable: "No",
		admin_error: "Informazioni sul messaggio di errore:",
		admin_error_custom: "Richiedi contenuti di supporto personalizzati",
		admin_error_default: "Richiedi contenuti al Supporto IBM <BDO DIR='LTR'>(</BDO>impostazione predefinita<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Specificare dove si desidera indirizzare gli utenti per ulteriori informazioni quando rilevano un messaggio di errore. È possibile indirizzare gli utenti alle informazioni presenti sul Portale di supporto IBM oppure è possibile indirizzarli a risorse interne, ad esempio un help desk.",
		admin_error_URL: "Prefisso URL:",
		admin_error_URL_hover: "Immettere l'URL della risorsa alla quale indirizzare gli utenti quando rilevano un errore, ad esempio un help desk. Ad esempio: http://localhost:numero_porta. Il client Web accoda il numero del messaggio all'URL.",
		admin_prompt_close_without_save: "Si desidera chiudere senza salvare le modifiche?",
		admin_object_expiration_time: "Intervallo di aggiornamento cache (in minuti):",
		admin_object_expiration_time_hover: "Per migliorare le prestazioni del client web è possibile incrementare il tempo di conservazione in cache degli oggetti di configurazione, come i desktop. Il tempo predefinito è 10 minuti. Il tempo massimo è 1440 minuti (1 giorno).<br /><br />È necessario riavviare l'applicazione web perché le modifiche abbiano effetto.<br /><br />Se IBM Content Navigator viene distribuito in un ambiente con cluster disponibile, tutte le modifiche agli oggetti di configurazione non verranno propagate ai nodi nel cluster fino a che la cache non viene aggiornata.",
		admin_temp_file_cleanup_interval: "Intervallo di scansione per ripulitura cache del visualizzatore (in ore):",
		admin_temp_file_cleanup_interval_hover: "Pianificare la frequenza con cui viene eseguita la scansione della directory temporanea per ricercare ed eliminare file temporanei scaduti. Per impostazione predefinita, la scansione della directory temporanea viene eseguita ogni sei ore. È possibile specificare 6-48 ore.",
		admin_temp_file_expiration_interval: "Scadenza cache visualizzatore (in ore):",
		admin_temp_file_expiration_interval_hover: "Specificare l'intervallo di tempo durante il quale i file temporanei correlati alle attività nel visualizzatore restano nella cache del browser. Per impostazione predefinita, tali file scadono dopo 24 ore. È possibile specificare 12-48 ore.",
		admin_encryption_key_hover: "La chiave utilizzata per le funzioni di crittografia Navigator.",
		admin_encryption_key: "Chiave di crittografia",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Etichettamento",
		admin_mobile_branding_main_color: "Colore principale:",
		admin_mobile_branding_secondary_color: "Colore secondario:",
		admin_mobile_device_title: "Gestione MaaS360",
		admin_mobile_device_enable_maas360: "Abilita MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "La guida a comparsa Abilita MaaS360 va qui",
		admin_mobile_device_maas360_developer_id: "ID sviluppatore MaaS360:",
		admin_mobile_device_maas360_license_key: "Chiave licenza MaaS360:",
		admin_mobile_settings_title: "Impostazioni",
		admin_mobile_email_address_hover_help: "Questo indirizzo e-mail viene utilizzato nell'applicazione mobile quando l'utente seleziona \"Invia report errori.\"",
		admin_mobile_email_address: "Indirizzo e-mail:",
		admin_invalid_email_address_message: "L'indirizzo e-mail immesso non è nel formato corretto. Immettere l'indirizzo corretto e riprovare.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Alcuni dati non sono validi.",
		admin_configuration_parameters: "Parametri di configurazione",
		admin_configuration_optional_features: "Funzioni facoltative",
		admin_configuration_optional_features_p8_instructions: "Selezionare le funzioni che si desidera abilitare in questo repository.<p><b>Importante:</b> se si abilita una funzione che installa un componente aggiuntivo nel repository, è necessario essere connessi al repository come amministratore Content Platform Engine o Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Selezionare le funzioni che si desidera abilitare in questo repository.<p><b>Importante</b> queste funzioni modificano il modello di dati nel repository. Per abilitarle, è necessario essere connessi al repository come amministratore del server della libreria.</p>",
		admin_system_properties: "Proprietà di sistema",
		admin_system_properties_for: "Proprietà di sistema per:",
		admin_available_properties: "Proprietà disponibili",
		admin_displayed_properties: "Proprietà visualizzate",
		admin_selected_properties: "Proprietà selezionate",
		admin_selected_filtered_properties: "Proprietà nascoste",
		admin_available_operators: "Operatori visualizzati",
		admin_selected_filtered_operators: "Operatori nascosti",
		admin_system_properties_shown: "Proprietà mostrate",
		admin_system_properties_hidden: "Proprietà nascoste",
		admin_available_menu_items: "Azioni disponibili:",
		admin_selected_menu_items: "Azioni selezionate:",
		admin_menu_global: "Si applica quando non è selezionato alcun elemento:",
		admin_menu_multiple_document: "Si applica quando sono selezionati più elementi:",
		admin_menu_privileges: "Privilegi richiesti:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Tipi di repository:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separatore",
		admin_browse: "Sfoglia",
		admin_search: "Ricerca",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redazione basata sul ruolo",
		admin_connections_library_enabled: "IBM Connections abilitato",
		admin_office_conf: "Integrazione Edit",
		admin_desktop_conf_label: "Configurazione del Desktop",
		admin_ms_office_conf_label: "Configurazione di Office",
		admin_workflows: "Flussi di lavoro",
		admin_file_types: "Tipi di file",
		admin_file_type_contains_label: "Il tipo di file contiene",
		admin_name_propepty: "Nome",
		admin_cm_name_property_default: "Usa nome predefinito",
		admin_cm_name_property_default_hover: "Per impostazione predefinita, come nome elemento viene utilizzata la proprietà del nome gerarchico (ICM$NAME), se per l'elemento è definita la proprietà.  Se la proprietà del nome gerarchico (ICM$NAME) non è disponibile, come nome elemento viene utilizzata la prima proprietà contrassegnata come \"represents\".",
		admin_cm_name_property: "Specificare la proprietà del nome elemento",
		admin_cm_name_property_hover: "Specificare quale proprietà viene utilizzata come nome per documenti e cartelle.",
		admin_name_property: "Proprietà nome:",
		admin_doc_name_property: "Proprietà nome documento:",
		admin_doc_name_property_hover: "Specificare quale proprietà viene utilizzata come nome documento.",
		admin_folder_name_property: "Proprietà nome cartella:",
		admin_folder_name_property_hover: "Specificare quale proprietà viene utilizzata come nome cartella.",
		admin_all_searches_label: "Numero di ricerche da visualizzare:",
		admin_unlimited: "Nessun limite",
		admin_limit: "Limita a",
		admin_repository: "Repository:",
		admin_application_space: "Spazio applicazione",
		admin_available_application_spaces: "Spazi applicazione disponibili:",
		admin_selected_application_spaces: "Spazi applicazione selezionati:",
		admin_label: "Etichetta",
		admin_repository_box_placeholder: "Selezionare un repository di Box",
		admin_repository_placeholder: "Seleziona un repository",
		admin_search_match: "Corrispondenza:",
		admin_search_match_all: "Corrisponde a tutto il criterio di ricerca",
		admin_search_match_any: "Corrisponde a parte del criterio di ricerca",
		admin_search_match_hover: "Specificare quale opzione è selezionata per impostazione predefinita nel menu <b>Opzioni proprietà</b>.",

		admin_repository_redactions_instructions: "È possibile configurare le redazioni basate su ruolo per questo repository.",
		admin_repository_redaction_policies_description: "È possibile creare e gestire le politiche di redazione che associano i motivi di redazione agli utenti e gruppi che possono leggere i dati sensibili e modificare le annotazioni che proteggono i dati sensibili evitandone la visualizzazione.",
		admin_repository_redaction_roles_instruction: "È possibile creare un ruolo redazione da associare ad utenti e gruppi specificati con la relativa possibilità di leggere i dati sensibili o modificare le annotazioni che proteggono i dati sensibili evitandone la visualizzazione. Il ruolo di redazione deve essere associato ad un motivo redazione in una politica di redazione prima che tali utenti e gruppi possano leggere i dati o modificare le annotazioni.",
		admin_repository_redaction_reasons_instruction: "È possibile configurare i motivi redazione per il repository.",
		admin_repository_redaction_policies: "Configurazione politica di redazione",
		admin_repository_redaction_roles: "Configurazione ruoli di redazione",
		admin_repository_redaction_reasons: "Configurazione motivi di redazione",
		admin_repository_redaction_roles_type: "Tipo",
		admin_repository_redaction_roles_type_hover: "Un editore può creare, modificare o eliminare specifici tipi di redazioni basate su ruolo mentre i visualizzatori possono visualizzare specifici tipi di dati sensibili.",
		admin_repository_redaction_roles_type_editor: "Editore",
		admin_repository_redaction_roles_type_viewer: "Visualizzatore",
		admin_repository_redaction_roles_membership: "Appartenenza",
		admin_repository_redaction_roles_membership_hover: "Selezionare gli editori a cui si desidera assegnare questo ruolo.",
		admin_repository_redaction_roles_user_group_hover: "Ricercare gli utenti e gruppi o selezionare gli editori a cui si desidera assegnare questo ruolo.",
		admin_repository_redaction_roles_description: "È possibile creare e gestire i ruoli di redazione che associano utenti e gruppi alla possibilità di leggere i dati sensibili e di modificare le annotazioni che proteggono i dati sensibili evitandone la visualizzazione.",
		admin_repository_redaction_new: "Nuovo ruolo di redazione",
		admin_repository_redaction_role_avail_editors: "Editori redazione disponibili",
		admin_repository_redaction_role_avail_users: "Utenti disponibili",
		admin_repository_redaction_role_avail_groups: "Gruppi disponibili",
		admin_repository_redaction_role_selected_editors: "Editori redazione selezionati",
		admin_repository_redaction_role_selected_users_groups: "Utenti e gruppi selezionati",
		admin_repository_redaction_role_add_editor: "Nuovi editori...",
		admin_repository_redaction_role_access_type: "Accesso",
		admin_repository_redaction_role_access_type_access: "Consenti",
		admin_repository_redaction_role_access_type_no_access: "Nega",
		admin_repository_redaction_role_users: "Utenti",
		admin_repository_redaction_role_groups: "Gruppi",
		admin_repository_redaction_role_editors: "Editori",
		admin_delete_confirmation_redaction_roles: "Si desidera eliminare il ruolo di redazione selezionato?",
		admin_repository_edit_redaction_role: "Ruolo di redazione: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Accesso predefinito",
		// RBA
		desktop_user_group_acl: "Amministratori desktop",
		desktop_user_group_remove: "Rimuovi",
		desktop_rba_membership: "Appartenenza:",
		desktop_rba_membership_list_label: "Nome",
		admin_repository_redaction_policy_hover: "Fornire una descrizione che consentirà agli utenti di distinguere questa politica dalle altre.",
		admin_repository_new_redaction_policy: "Nuova politica di redazione",
		admin_repository_policy_name: "Nome politica",
		admin_repository_reason_redactions: "Motivi redazione:",
		admin_repository_role_editors: "Editori",
		admin_repository_role_viewers: "Visualizzatori",
		admin_repository_redaction_policy_instruction: "È possibile creare una politica di redazione per associare i motivi di redazione selezionati ad entrambi gli editori e i visualizzatori di redazione.",
		admin_repository_redaction_reasons_hover: "Selezionare uno o più tipi di dati sensibili che non si desidera visualizzare alla maggior parte degli utenti, ad esempio informazioni personali, segreti commerciali, o informazioni riservate o di proprietà della propria società.",
		admin_repository_readaction_available_reasons: "Motivi disponibili",
		admin_repository_readaction_selected_reasons: "Motivi selezionati",
		admin_repository_readaction_new_reason: "Nuovo motivo...",
		admin_repository_redeaction_reasons: "Motivi redazione:",
		admin_repository_readaction_editor_permmission: "Editori redazione:",
		admin_repository_redaction_editors_hover: "Selezionare i ruoli che possono creare e modificare la redazione per i motivi selezionati.",
		admin_repository_readaction_new_editor_role: "Nuovo ruolo editore...",
		admin_repository_readaction_available_editors: "Ruoli editore disponibili",
		admin_repository_readaction_selected_editors: "Ruoli editore selezionati",
		admin_repository_readaction_viewer_permmission: "Visualizzatori redazione:",
		admin_repository_redaction_viewers_hover: "Selezionare i ruoli che possono visualizzare i dati sensibili per i motivi selezionati. La redazione non è applicata agli utenti e gruppi di questi ruoli.",
		admin_repository_readaction_new_viewer_role: "Nuovo ruolo visualizzatore...",
		admin_repository_readaction_available_viewers: "Ruoli visualizzatore disponibili",
		admin_repository_readaction_selected_viewers: "Ruoli visualizzatore selezionati",
		admin_repository_reason_redactions_header: "Motivi della redazione",
		admin_delete_confirmation_redaction_policy: "Si desidera eliminare la politica di redazione selezionata?",
		admin_role_type_repository: "Repository",
		admin_role_type_administrator: "Amministratore",
		admin_role_type_template: "Modello",
		admin_role_type_teamspace: "Spazio team",
		admin_role_type_author: "Editore",
		admin_role_type_user: "Visualizzatore",
		admin_collaboration_services_instructions: "In presenza di IBM Connections e di un'applicazione Web FileNet Collaboration Services, è possibile configurare gli spazi team della comunità ed i flussi di attività del repository.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configurazione libreria della comunità",
		admin_collaboration_community_instruction: "È possibile configurare un repository nel proprio dominio IBM FileNet P8 per memorizzare le librerie della comunità di IBM Connections (note anche come spazi team). Quando gli utenti creano un libreria della comunità mediante IBM Connections, questa viene memorizzata nel repository designato come repository della libreria della comunità.",
		admin_collaboration_community_teamspaces: "Utilizza questo repository per le librerie della comunità:",
		admin_collaboration_community_teamspaces_hover: "È possibile utilizzare solo un repository nel dominio IBM FileNet P8 per memorizzare le nuove librerie della comunità. Se si abilita questo repository e si dispone di un repository esistente, il repository esistente verrà disabilitato. Tuttavia, qualsiasi libreria esistente rimarrà nel repository corrente.",
		admin_collaboration_connections_anonymous: "Consenti l'accesso anonimo ai contenuti pubblici:",
		admin_collaboration_connections_anonymous_hover: "Se il server IBM Connections contiene le comunità pubbliche o moderate, è possibile configurare FileNet Collaboration Services in modo da consentire agli utenti di sfogliare e scaricare i contenuti dalle librerie in tali comunità senza dover accedere.<br><br>Gli utenti che accedono alle librerie della comunità in modo anonimo non potranno creare, modificare o eliminare i contenuti.<br><br><b>Importante:</b> è necessario designare un utente IBM FileNet P8 LDAP come utente anonimo e configurare tale utente con il ruolo <b>Anonymous</b> in WebSphere Application Server.",
		admin_collaboration_connections_url: "URL IBM Connections:",
		admin_collaboration_connections_url_hover: "Specifica l'URL del server IBM Connections nel formato http://IBMConnectionsServer:numero_porta.  Se IBM Connections è configurato per utilizzare IBM HTTP Server, è possibile omettere il numero porta dall'URL.<br><br>L'URL deve essere accessibile agli utenti IBM Connections perché questo è il link che FileNet Collaboration Services utilizza per creare link alle pagine dei documenti in IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilizza l'URL IBM Connections",
		admin_collaboration_connections_url_https_use: "Utilizza l'URL IBM Connections HTTPS",
		admin_collaboration_connections_url_specify: "Specifica l'URL",
		admin_collaboration_connections_url_https: "URL HTTPS di IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Se IBM Connections è configurato per utilizzare SSL, specificare l'URL HTTPS del server IBM Connections nel formato https://IBMConnectionsServer:numero_porta.  Se IBM Connections è configurato per utilizzare IBM HTTP Server, è possibile omettere il numero porta dall'URL.",

		admin_collaboration_connections_gadget_url: "URL del gadget IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL di recupero di IBM Connections:",
		admin_collaboration_connections_security: "Amministratori della comunità:",
		admin_collaboration_connections_security_hover: "Specifica gli utenti ed i gruppi che possono gestire il contenuto in più librerie della comunità.<br><br>Gli amministratori globali possono creare, modificare, eliminare e fornire accesso alle librerie della comunità ed al loro contenuto. Quando si specifica un utente come amministratore globale, all'utente vengono assegnati i privilegi di ClbGlobalAdministrator nel repository.<br><br>Gli amministratori di revisione globale possono approvare e rifiutare il contenuto in fase di revisione per la pubblicazione in una libreria della comunità. Quando si specifica un utente come amministratore di revisione globale, all'utente vengono assegnati i privilegi di ClbGloablReviewAdministrator nel repository.",

		admin_collaboration_connections_admins: "Amministratori globali",
		admin_collaboration_connections_admins_review: "Amministratori di revisione globali",
		admin_collaboration_connections_seedlist: "Indicizza i contenuti della libreria della comunità:",
		admin_collaboration_connections_seedlist_hover: "Specificare se si desidera che IBM Connections analizzi le librerie della comunità in questo repository per creare un indice di ricerca. La creazione di un indice può influenzare le prestazioni del repository.<br><br>Se nel repository sono installate le Social Collaboration Search Indexing Extension, questa opzione viene abilitata per impostazione predefinita. Se le Social Collaboration Search Indexing Extension non sono installate nel repository, il componente aggiuntivo viene installato nel repository quando si abilita questa opzione",
		admin_collaboration_activity_stream: "Configurazione dell'evento dello stream di attività",
		admin_collaboration_activity_stream_label: "Esegui il Push delle informazioni dell'evento in IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Specifica se si desidera eseguire il Push delle informazioni evento, come ad esempio la creazione di documenti, il check-out, il check-in, i commenti, i tag e le condivisioni in IBM Connections.<br><br><b>Importante:</b> Esecuzione del Push in IBM Connection può influenzare le prestazioni del repository.",

		admin_collaboration_activity_stream_instruction: "È possibile configurare questo repository affinché effettui il Push delle informazioni evento, quali i commenti e le approvazioni dei documenti, in IBM Connections. Gli eventi vengono visualizzati nella pagina <b>Aggiornamenti recenti</b> nelle comunità IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignora informazioni evento per specifici utenti e gruppi:",
		admin_collaboration_activity_stream_ignored_ids_hover: "È possibile ignorare gli eventi generati da utenti o gruppi specifici, ad esempio gli amministratori o gli account di sistema, per ridurre il numero di notifiche che gli utenti visualizzano. Ad esempio, se si sta migrando il contenuto, è possibile specificare che gli eventi generati dall'account utilizzato per la migrazione vengano ignorati.",
		admin_collaboration_activity_stream_userid: "Nome utente di IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Specificare l'account di sistema che Content Platform Engine utilizzerà per autenticarsi ed inviare informazioni evento su IBM Connections. L'utente deve essere nel ruolo <b>trustedExternalApplication</b> nell'applicazione Widget Container in IBM Connections.<br><br><b>Suggerimento:</b> Per impostazione predefinita, l'amministratore di IBM Connections dispone dei privilegi appropriati. È possibile utilizzare l'ID amministratore come il nome utente",
		admin_collaboration_activity_stream_password: "Password dell'utente di IBM Connections:",

		admin_help_url: "URL della guida dell'utente finale:",
		admin_help_url_hover: "<b>Nota importante:</b> IBM Knowledge Center Customer Installed non verrà aggiornato come parte di IBM Content Navigator Versione 3.0.0. Contattare il servizio clienti per ulteriori informazioni sull'utilizzo della guida personalizzata.<br><br>In IBM Content Navigator Versione 3.0.0, l'URL per la guida per l'utente finale fa riferimento all'IBM Knowledge Center. L'URL per IBM Knowledge Center è: http://www.ibm.com/support/knowledgecenter.<br><br>Se si desidera continuare a utilizzare una versione precedente di IBM Knowledge Center Customer Installed, specificare l'URL dell'istanza di IBM Knowledge Center Customer Installed distribuita da IBM Content Navigator Configuration and Deployment Tool. L'URL deve essere accessibile alle macchine client. L'URL ha il formato http://server_name:port_number/kc.<br><br>È possibile ottenere il nome server e il numero della porta dal file console.log nella sottodirectory KnowledgeCenter/logs della directory di installazione di IBM Content Navigator.",

		admin_help_default: "Utilizzare la guida predefinita fornita da IBM",
		admin_custom_help: "Utilizzare la guida in linea personalizzata",
		admin_help_kc: "Utilizzare la guida personalizzata in IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Nota importante:</b> IBM Knowledge Center Customer Installed non verrà aggiornato come parte di IBM Content Navigator Versione 3.0.0. Contattare il servizio clienti per ulteriori informazioni sull'utilizzo della guida personalizzata.<br><br>Se si desidera continuare a utilizzare una versione precedente di IBM Knowledge Center Customer Installed, selezionare questa opzione per continuare con l'aggiunta del contenuto all'istanza di IBM Knowledge Center Customer Installed distribuita in precedenza.",
		admin_help_taxonomy: "Codice tassonomia:",
		admin_help_taxonomy_hover: "Specificare il codice di tassonomia per la guida personalizzata.<br><br>Il codice di tassonomia per  IBM Content Navigator è SSEUEX. Se si desidera visualizzare la guida sotto un diverso nome prodotto in IBM Knowledge Center Customer Installed, è necessario aggiungere un codice di tassonomia univoco al file KC_taxonomy.ditamap nella directory KnowledgeCenter/usr/taxonomy della directory di installazione di IBM Content Navigator.",
		admin_help_context: "Contesto guida",
		admin_help_context_hover: "Specificare il contesto per la guida personalizzata.<br><br>La guida per IBM Content Navigator è presente nella directory KnowledgeCenter/usr/content/com.ibm.usingeuc.doc della directory di installazione di IBM Content Navigator. Il contesto della guida predefinita è com.ibm.usingeuc.doc. Se si desidera fornire la guida personalizzata, aggiungere il contenuto in una nuova sottodirectory nella directory KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Pagina di destinazione",
		admin_help_welcome_hover: "Specificare il nome dell'argomento che si desidera utilizzare come pagina di destinazione quando gli utenti accedono alla guida. È necessario creare un file delle proprietà che specifichi la posizione della pagina di destinazione e aggiungere il file delle proprietà alla directory KnowledgeCenter/usr/conf della directory di installazione di IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "File JSON estensioni di tipo Mime.",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verificare il nome file JSON e il percorso completo per il file. Il file può essere un file generale del file system o un URL che punta al file JSON.  <br><br>Il contenuto del file JSON è un array per le definizioni di tipo mime. <br><br>Una definizione di tipo mime include quattro chiavi \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Le prime due chiavi \"mimeTypes\", \"extensions\" sono obbligatorie e possono essere array di stringhe separate da \",\". Le ultime due chiavi \"fileType\", \"iconName\" sono facoltative. <br><br>Ad esempio: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configurazione della gestione attività",
		admin_taskmanager_service: "Servizio gestione attività",
		admin_taskmanager_service_hover: "Specificare se si desidera utilizzare il servizio di gestione attività per creare ed eseguire le attività asincrone. <br><br>Se si modifica questa impostazione, è necessario riavviare l'applicazione web IBM Content Navigator perché le modifiche diventino effettive.",
		admin_taskmanager_url: "URL servizio gestione attività",
		admin_taskmanager_url_hover: "Specificare l'URL da cui le altre applicazioni possono comunicare con il servizio gestione attività. L'URL ha il formato http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Directory del log della gestione attività",
		admin_taskmanager_logdirectory_hover: "Per impostazione predefinita, i file di log per il servizio di gestione attività vengono scritti nella stessa directory dei file di log del server delle applicazioni web. <br><br>Se si desidera che le informazioni della registrazione vengano scritte in una diversa directory sul server IBM Content Navigator, specificare il percorso completo della directory in cui si desidera siano memorizzati i file di log che sono stati generati dal componente della gestione attività. <br><br>Se si modifica questa impostazione, è necessario riavviare l'applicazione web IBM Content Navigator perché le modifiche diventino effettive.",
		admin_taskmanager_heartBeatMonitor: "Monitoraggio hearbeat del cluster",
		admin_taskmanager_heartBeatMonitor_hover: "Solo ambienti di cluster ad elevata disponibilità. Se si abilita questa opzione, il servizio di gestione attività indirizza le attività dai nodi che sono attualmente inattivi ai nodi che sono attualmente in esecuzione. <br><br>Se si modifica questa impostazione, è necessario riavviare l'applicazione web IBM Content Navigator perché le modifiche diventino effettive.",

		admin_syncserver_title: "Configurazione del server di sincronizzazione",
		admin_syncserver_enable: "Servizi di sincronizzazione",
		admin_syncserver_enable_hover: "Specificare se si desidera che gli utenti che accedono a questo desktop siano in grado di sincronizzare gli elementi tra le workstation e i dispositivi mobile.<br><br><b>Importante:</b> per utilizzare questa funzione è necessario anche completare le seguenti attività:<ul><li>Specificare <b>l'URL pubblico dei servizi di sincronizzazione</b> nella sezione <b>Servizi di sincronizzazione</b> dello strumento di amministrazione.</li><li>Aggiungere a questo desktop un repository per cui i servizi di sincronizzazione sono abilitati.</li></ul>Se si disabilita questa opzione, ma si aggiunge un repository per cui i servizi di sincronizzazione sono abilitati a questo desktop, l'impostazione sul repository viene ignorata.",
		admin_mobileqr_enable: "Mostra codice QR di IBM Navigator nella pagina di accesso:",
		admin_mobileqr_enable_hover: "Abilitare questa opzione se si desidera visualizzare il codice QR per l'applicazione mobile IBM Navigator, nella pagina di accesso del client web.<br><br>Quando un utente effettua la scansione del codice QR, accede automaticamente all'app store appropriato per il proprio dispositivo, da cui potrà scaricare l'applicazione mobile IBM Navigator.",

		admin_streamlineservice_enable: "Servizio Edit:",
		admin_streamlineservice_enable_hover: "Solo per gli utenti di FileNet P8. Abilitare questa opzione se si desidera che gli utenti del desktop possano aggiungere e modificare semplicemente i documenti delle applicazioni native sulla propria stazione di lavoro. <br><br>Per utilizzare questa impostazione, è inoltre necessario: <ul><li>Abilitare il servizio Edit su uno o più repository associati con questo desktop</li><li>Installare il client IBM Content Navigator Edit sulla stazione di lavoro dell'utente</li></ul>",

		admin_repository_general_instructions: "È necessario connettersi al repository prima di configurare i parametri, le proprietà di sistema, le cartelle e così via.",
		admin_repository_system_instructions: "Specificare quali proprietà di sistema visualizzare per i documenti e le cartelle in questo repository.",

		admin_desktop_general_create_instructions: "Un desktop determina ciò che l'utente può visualizzare e eseguire quando effettua l'accesso al client Web. Dopo aver creato un desktop, è possibile inviare l'URL del desktop agli utenti in modo che possano accedere al desktop.",
		admin_desktop_admin_instructions: "Il desktop di amministrazione viene fornito con il client Web per consentire agli utenti amministrativi di impostare il client Web. Questo desktop ha accesso a tutti i repository configurati per il client Web.",
		admin_desktop_repositories_instructions: "Specificare a quali repository gli utenti avranno accesso da questo desktop. È necessario configurare i repository prima di poterli aggiungere al desktop.<br><br><b>Suggerimento:</b> È possibile limitare i repository disponibili per ciascuna funzione quando si configura il layout del desktop.",
		admin_desktop_menus_instructions: "Specificare a quali menu potranno accedere gli utenti da questo desktop. I menu specificano le azioni disponibili a seconda di quanto viene selezionato nell'interfaccia.<br><br><b>Suggerimento:</b> è possibile personalizzare il contenuto dei menu nella sezione <b>Menu</b> dello strumento di amministrazione o è possibile creare nuovi tipi di menu mediante la creazione di plug-in.",

		admin_desktop_no_repositories: "Nessun repository configurato.",

		admin_desktop_id_hover: "L'ID del desktop è incluso nell'URL del client Web e specifica quale desktop è aperto quando un utente accede al client Web. L'ID deve essere univoco e non è possibile modificarlo dopo aver salvato il desktop.<br><br>L'ID può contenere solo caratteri alfanumerici e viene fatta distinzione tra maiuscole/minuscole.",
		admin_desktop_id_disabled_hover: "Non è possibile modificare l'ID del desktop. Se si desidera utilizzare un ID differente, è necessario creare un nuovo desktop.",
		admin_desktop_name_hover: "Il nome del desktop non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "La configurazione può contenere solo un desktop predefinito.",

		admin_repository_id_disabled_hover: "Non è possibile modificare l'ID del repository. Se si desidera utilizzare un ID differente, è necessario creare una nuova connessione di repository.",
		admin_printService_enable: "Stampa utilizzando il servizio di stampa IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Se si decide di abilitare il servizio di stampa IBM Daeja ViewONE, i documenti vengono convertiti in formato PDF e la stampa può essere completata utilizzando qualsiasi browser.<br><br>Se si decide di disabilitare il servizio di stampa IBM Daeja ViewONE, sarà possibile stampare documenti solo nei browser che supportano le applet Java.  Alcuni browser Web non supportano le applet Java e quindi non supportano la stampa applet.<br><br>Consultare la documentazione per i browser supportati.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Home directory dell'utente",
		admin_file_tracking_doc_directory_my_documents: "Directory documenti dell'utente",
		admin_file_tracking_doc_directory_qp: "Percorso completo",
		admin_file_tracking_section_tile: "Configurazione della traccia file",
		admin_file_tracking_home_path: "Percorso iniziale",
		admin_file_tracking_my_documents: "Documenti",
		admin_file_tracking_exact_path: "Percorso completo:",
		admin_file_tracking_qp: "Percorso completo",
		admin_file_tracking_ev: "Variabile d'ambiente",
		admin_file_tracking_ev_us: "Variabile d'ambiente personalizzata ",
		admin_file_tracking_del_local_copy: "Elimina copia locale:",
		admin_file_tracking_yes: "Sì",
		admin_file_tracking_no: "No",
		admin_file_tracking_del_local_copy_rt_state_editable: "Consenti agli utenti di sovrascrivere questa impostazione",
		admin_file_tracking_del_local_copy_rt_state1: "Sì",
		admin_file_tracking_del_local_copy_rt_state2: "No",
		admin_file_Tracking_label: "Traccia file",
		admin_file_Tracking_disable: "Disabilita",
		admin_file_Tracking_enable: "Abilita",
		admin_file_tracking_label_hover_help: "La traccia file utilizza un'applet per effettuare il check out e scaricare i documenti in una directory specifica sulla macchina degli utenti. L'applet consente inoltre ad IBM Content Navigator di trovare documenti sulle macchine degli utenti quando questi ne eseguono il check in.",
		admin_file_tracking_doc_directory: "Percorso di memorizzazione:",
		admin_file_tracking_open_file: "Apri file automaticamente:",
		admin_file_Tracking_append_qualified_path: "Aggiungi directory",
		admin_file_Tracking_append_qualified_path_hover_help: "È possibile aggiungere una directory alla fine della variabile di ambiente se si desidera che i documenti siano salvati in una sottodirectory specifica. <br/><br/>Ad esempio, è possibile specificare che i documenti siano scaricati in una directory <i>EnterpriseDocuments</i> all'interno della home directory dell'utente.",
		admin_file_Tracking_append_ev: "Variabile d'ambiente aggiunta",
		admin_file_Tracking_append_ev_hover_help: "È possibile aggiungere una variabile d'ambiente se si desidera che i documenti siano salvati in una directory specificata dinamicamente, come ad esempio una directory utente.<br/><br/>Ad esempio, è possibile specificare che i documenti siano memorizzati in una sottodirectory <i>User_name</i> in una directory di rete condivisa. ",
		admin_file_tracking_doc_directory_hover_help: "Specificare dove devono essere archiviati i documenti quando vengono sottoposti a check out e download.<br/><br/> <b>Suggerimento</b>: Se si desidera memorizzare i documenti in una home directory dell'utente o in una directory predefinita del documento, selezionare <b>Variabile d'ambiente</b>, che comprende le variabili predefinite che puntano a tali percorsi.",
		admin_file_tracking_qualified_path_hover_help: "Utilizzare la struttura di directory appropriata al sistema operativo Windows o Mac per specificare la directory o la directory di rete in cui si desidera archiviare i documenti. <ul><li>Per Windows, includere una lettera di unità nel percorso, come C:\\Enterprise Documents.</li><li>Per una directory di rete condivisa, immettere il percorso nel formato \\\\servername\\directory</li></ul><br/><b>Importante:</b> per utilizzare questa opzione, deve essere possibile creare la struttura della directory che si specifica su tutte le workstation del proprio ambiente.",
		admin_file_tracking_environment_variable_path_hover_help: "Utilizzare le variabili d'ambiente appropriate al sistema operativo Windows o Mac per specificare la directory o la directory di rete in cui si desidera archiviare i documenti. <br/><br/>L'opzione <b>Home Directory dell'utente</b> memorizza i documenti nella seguente directory:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>L'opzione <b>Directory del documento dell'utente</b> memorizza i documenti nella seguente directory:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Specificare se la copia locale di un documento è eliminata quando gli utenti aggiungono o sottopongono a check in i documenti nel repository.<br/><br/>L'eliminazione della copia locale consente all'utente di:<br/><ul><li>Applicare la compatibilità con le politiche IT</li><li>Accertarsi che gli utenti lavorino con le ultime versioni dei documenti</li></ul><br/><b>Limitazione:</b> questa impostazione non è utilizzata quando gli utenti aggiungono documenti mediante trascinamento e rilascio.<br/><br/>Per IBM Content Navigator for Microsoft Office, è necessario selezionare <b>Elimina file locali quando gli utenti aggiungono o sottopongono a check in un documento o annullano un'operazione di check out</b> nella sezione <b>Configurazione Office</b> del desktop.",
		admin_file_tracking_open_file_hover_help: "Questa impostazione sovrascrive qualsiasi preferenza di gestione dei documenti configurata nel browser web dell'utente. </br></br><b>Limitazione:</b> questa impostazione non viene utilizzata da IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Sovrascrivi copia locale:",
		admin_file_tracking_over_write_file_hover_help: "Specifica se sovrascrivere la copia locale di un documento quando gli utenti eseguono il check out dei documenti nel repository. <br/><br/>La sostituzione della copia locale consente all'utente di:<br/><ul><li>Accertarsi che gli utenti lavorino con le ultime versioni dei documenti</li><li>Impedisce agli utenti di visualizzare un messaggio quando esiste una copia locale</li></ul> </br></br><b>Limitazione:</b> questa impostazione non viene utilizzata da IBM Content Navigator for Microsoft Office se si seleziona <b>Consenti agli utenti di sovrascrivere questa impostazione</b>.",
		admin_file_tracking_over_write_file_state_editable: "Consenti agli utenti di sovrascrivere questa impostazione",
		admin_file_tracking_inline_help: "La traccia file rende scorrevole il processo di check out e check in dei documenti nel repository. Consente inoltre di gestire il modo in cui i documenti vengono memorizzati sulle macchine degli utenti. <br/><br/>Inoltre, la traccia file consente di tracciare i documenti in più componenti di IBM Content Navigator, come ad esempio il client Web e IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "È necessario abilitare l'autenticazione server o standard prima di connettersi al repository.",
		admin_box_use_oauth: "Tipo di autenticazione:",
		admin_box_use_oauth_hover: "Selezionare l'autenticazione standard o server nell'ambiente di produzione quando si fornisce accesso ai documenti Box da IBM Content Navigator. Specificare i valori client_id e OAuth2 client_secret associati con questa distribuzione di IBM Content Navigator. Questi valori possono essere ottenuti da Box una volta che è stata creata l'applicazione Box del server IBM Content Navigator.<br/><br/>Selezionare autenticazione sviluppatore in un ambiente di sviluppo. Gli sviluppatori possono accedere a Box utilizzando il proprio account sviluppatore e generare un token sviluppatore che è valido per 60 minuti. I token sviluppatore consentono agli sviluppatori di accedere a Box utilizzando il token sviluppatore come password di qualsiasi ID utente.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Dominio secondario dell'account enterprise Box:",
		admin_box_share: "ID di connessione del gestore attività:",
		admin_box_share_hover: "Per Copia Box e Condivisione Box il gestore attività utilizza un ID utente ed una password amministratore per eseguire attività in background che modificano il repository.<br/><br/>Fare clic su Imposta ed accedere a Box utilizzando un account amministratore di Box che sia valido.<br/><br/>Se si configura un desktop selezionando questo repository di Box come repository per i file condivisi, è necessario specificare un amministratore BOX con uno spazio di archiviazione illimitato in Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Apri file automaticamente:",
		file_tracking_runtime_overwrite_hover_help: "Se non si seleziona questa opzione e si ha un documento nel file system locale con lo stesso nome, il documento verrà sottoposto a check out, ma non verrà eseguito il download fino a quando l'utente non compie una delle seguenti azioni:<br/><ul><li> esegue il download del documento in una sottodirectory della directory predefinita. Se si seleziona una sottodirectory, l'applicazione web può tenere traccia della posizione del documento.</li><li>Rinominare il documento che si sta scaricando. La ridenominazione del documento evita il conflitto dei nomi file.</li></ul>",
		open_file: "Apri file automaticamente:",
		over_write_file: "Sovrascrivi copia locale",
		checkout_and_download_file: "Esegui check out e scarica i documenti",
		download_to_local_directory: "Scarica in :",
		checkout_and_download_button_title: "Esegui check out e download",
		checkout_without_java_confirmation_dialog: "Il file non può essere scaricato e tracciato dalla funzione Traccia file.",
		browse_for_directory: "Sfoglia",
		selected_documents: "Documenti selezionati",

		checkout_without_java_confirmation_text: "Questo problema può verificarsi per le seguenti ragioni:<br/><ul><li>Impossibile rilevare JRE (Java Runtime Environment) sulla stazione di lavoro in uso.</li><li>Il plug-in Java non è abilitato nel browser web dell'utente.</li><li>Il browser Web non supporta Java.</li></ul><br/><br/>Per risolvere questo problema, eseguire l'azione appropriata:<br/><br/><ul><li>Se si desidera continuare a scaricare il file senza l'abilitazione del file di traccia, fare clic su OK.</li><li>Se si desidera scaricare il file con l'abilitazione del file di traccia, annullare il download e verificare che sulla propria stazione di lavoro sia installato il JRE e che nel browser Web il plug-in sia abilitato Java.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Il documento è stato sottoposto a checkout e scaricato, ma non può essere aperto.",
		runtime_file_tracking_open_error_explanation: "Il sistema operativo installato sulla workstation non supporta file di questo tipo.",
		runtime_file_tracking_open_error_userResponse: "Per risolvere il problema, effettuare una delle seguenti azioni:<br/><br/><ul><li>Se è necessario utilizzare il documento, aprire il client Web da un'altra stazione di lavoro con un sistema operativo diverso.</li><li>Se si deve solo visualizzare il documento, selezionare il documento nel client Web e fare clic su Apri.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Il documento è stato sottoposto a check out ma non è stato scaricato.",
		runtime_file_tracking_save_file_error_explanation: "Un documento con lo stesso nome esiste già sul file system locale, ma non è stato sovrascritto. ",
		runtime_file_tracking_save_file_error_userResponse: "Se si desidera scaricare il file dal repository, è necessario sovrascrivere la copia locale del documento quando si scarica il documento dal repository.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Il documento è stato sottoposto a check out, ma non può essere scaricato o aperto.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Un documento con lo stesso nome esiste già sul file system locale. Tuttavia, il file non è stato sovrascritto, quindi non è possibile scaricare o aprire il documento nel repository.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Se si desidera scaricare il file dal repository, è necessario sovrascrivere la copia locale del documento quando si scarica il documento dal repository.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Impossibile scaricare il documento.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "La variabile di ambiente ${0}, che è richiesta per la traccia file, non è definita su questa macchina client.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Per correggere il problema:<br/><br/><ul><li>Aggiungere la variabile d'ambiente  ${0} alle variabili d'ambiente del sistema operativo.</li><li>Scollegarsi dal client Web e chiudere il browser Web. Quindi, collegarsi di nuovo.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Il documento non può essere scaricato e tracciato dall'applet Traccia file.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "La directory ${0}, che è richiesta per la traccia file, non è definita e non può essere creata.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Per risolvere questo problema, intraprendere l'azione opportuna:<br/><br/><ul><li>Fare clic su Sfoglia e selezionare un'altra directory sulla macchina client. Se si seleziona questa opzione, il file non verrà tracciato.</li><li>Contattare l'amministratore di sistema e chiedergli di specificare una directory diversa da utilizzare per i file di traccia. Ad esempio, questo potrebbe essere necessario se la directory specificata sia per un sistema operativo Windows, ma attualmente è in esecuzione Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Se si accede a questo desktop dai dispositivi con diversi sistemi operativi, è possibile ridurre le probabilità di problemi compiendo una delle seguenti azioni:<br/><br/><ul><li>Utilizzare le variabili d'ambiente per specificare il percorso di memorizzazione sulle macchine client.</li><li>Creare desktop differenti per gli utenti di ciascun tipo di dispositivo. Ad esempio, creare un desktop per gli utenti con un sistema operativo Windows e un desktop per gli utenti con Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Impossibile elaborare la richiesta eseguita.",
		runtime_file_tracking_generic_error_explanation: "Si è verificato un errore nell'applet del file di traccia.",
		runtime_file_tracking_generic_error_userResponse: "Rivolgersi all'amministratore del sistema per assistenza.",
		runtime_file_tracking_generic_error_adminResponse: "Aprire la console Java e inoltrare nuovamente la richiesta. I dettagli dell'errore sono visualizzati nella console Java.<br/><br/>È possibile accedere alla console Java dal Pannello di controllo (Windows) o dalle Preferenze di sistema (Macintosh) per il sistema operativo.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "La richiesta non può essere elaborata.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "I seguenti file sono stati aggiunti al repository, ma non sono stati eliminati dal file system locale: ${0}. Ciò generalmente si verifica quando i file sono aperti o sono utilizzati da un'altra applicazione. Se è necessario, è possibile eliminare i file manualmente.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Impossibile scaricare il documento.",
		runtime_file_tracking_ioexception_error_explanation: "Impossibile scaricare il documento.",
		runtime_file_tracking_ioexception_userResponse: "È possibile che non si disponga dei permessi appropriati per scrivere nella seguente directory: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Verificare di disporre delle autorizzazioni in scrittura nella directory specificata. Se non si dispone delle autorizzazioni in scrittura per la directory specificata, contattare l'amministratore di sistema.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Impossibile elaborare la richiesta eseguita.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Questo errore può verificarsi per i seguenti motivi:<br/><br/><ul><li>Viene utilizzato Safari su Mac OS e Java è in esecuzione in modalità sicura.</li><li>Non si dispone delle autorizzazioni di lettura/scrittura per la directory specificata nella configurazione della traccia file per il proprio desktop.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "È possibile continuare ad utilizzare IBM Content Navigator senza traccia file oppure è possibile effettuare le operazioni riportate di seguito per risolvere il problema:<br/><br/><ol><li>Abilitare la modalità non sicura di Java in Safari.</li><li>Se viene richiesto se si desidera considerare attendibile il sito Web IBM Content Navigator, fare clic su <b>Consenti</b> per caricare la pagina ed abilitare la modalità non sicura di Java in Safari.</li></ol><br/><br/>Se Safari è configurato correttamente, effettuare le operazioni riportate di seguito per risolvere il problema:<br/><br/><ol><li>Verificare di disporre delle autorizzazioni di lettura/scrittura per la directory specificata nella configurazione della traccia file per il proprio desktop.</li><li>Se non si dispone delle autorizzazioni di lettura/scrittura per la directory, modificare le autorizzazioni per la directory.</li><li>Se non è possibile modificare le autorizzazioni per la directory, l'amministratore deve modificare la directory configurata per la traccia file oppure fornire l'accesso ad un desktop per cui è configurata una directory di traccia file differente.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Impossibile elaborare la richiesta eseguita.",
		runtime_file_tracking_java__notfound_error_explanation: "Questo problema generalmente si verifica nelle seguenti situazioni:<br/><br/><ul><li>Impossibile rilevare JRE (Java Runtime Environment) sulla stazione di lavoro in uso.</li><li>La versione di JRE della propria stazione di lavoro non è compatibile con la versione di IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "È possibile continuare ad utilizzare IBM Content Navigator senza file tracking o è possibile completare i seguenti passi per risolvere il problema con il JRE:<br/><br/><ol><li>Accertarsi che JRE sia installato sulla workstation.</li><li>Accertarsi che la versione JRE installata sulla  workstation sia compatibile con IBM Content Navigator. Un elenco delle versioni supportate viene incluso nel documento <i>Hardware and software prerequisites for IBM Content Navigator</i> sul sito di supporto IBM.</li><li>Accertarsi che JRE sia abilitato sulla workstation.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Impossibile elaborare la richiesta eseguita.",
		runtime_file_tracking_security_error_explanation: "Non si dispone delle autorizzazioni di lettura/scrittura per la directory specificata nella configurazione della traccia file per il proprio desktop.",
		runtime_file_tracking_security_error_userResponse: "È possibile continuare ad utilizzare IBM Content Navigator senza traccia file oppure è possibile rivolgersi all'amministratore del sistema per completare le operazioni riportate di seguito:<ol><li>Verificare di disporre delle autorizzazioni di lettura/scrittura per la directory specificata nella configurazione della traccia file per il proprio desktop. </li><li>Se non si dispone delle autorizzazioni di lettura/scrittura per la directory, modificare le autorizzazioni per la directory.</li><li>Se non è possibile modificare le autorizzazioni per la directory, l'amministratore deve modificare la directory configurata per la traccia file oppure fornire l'accesso ad un desktop per cui è configurata una directory di traccia file differente.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "I seguenti documenti sono stati scaricati: ${0}",

		admin_file_tracking_inline_help: "La traccia del file semplifica il processo di aggiunta di documenti e di check in e check out dei documenti nel repository. Consente anche di gestire in che modo i documenti vengono archiviati sulle macchine utenti.<br/><br/>Inoltre, la traccia file consente di tracciare i documenti in più componenti di IBM Content Navigator, come ad esempio il client Web e IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "L'ID menu non può iniziare con \" Default \". \" Default \" è un prefisso riservato per gli ID di menu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "L'ID può contenere solo caratteri alfanumerici e viene fatta distinzione tra maiuscole/minuscole.",
		admin_repository_id_hover: "L'ID repository è incluso negli URL del client Web, nei preferiti e nei link di email per specificare il repository cui accedere. L'ID deve essere univoco e non può essere modificato dopo aver salvato il repository.<br><br>L'ID può contenere solo caratteri alfanumerici e viene fatta distinzione tra maiuscole/minuscole.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Il nome non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "L'ID desktop non può contenere spazi o uno dei seguenti caratteri: * \\ /:? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Il nome del desktop non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Il nome di visualizzazione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Specificare il nome del repository da visualizzare agli utenti nel client Web.<br><br>Il nome non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Specificare il nome host o l'indirizzo IP del server Content Manager OnDemand al quale si desidera connettersi, ad esempio, server.id.com.",
		admin_server_p8_name_hover: "Specificare l'URL del server Content Engine o Content Platform Engine. L'URL è sensibile al maiuscolo/minuscolo ed ha il seguente formato:<br><br><ul><li>Su WebSphere Application Server, iiop://nome_host:numero_porta/FileNet/Engine. Sulle distribuzioni di base, il numero di porta predefinito è 2809.</li><li>Su WebLogic Server, t3://nome_host:numero_porta/FileNet/Engine. Il numero di porta predefinito è 7001.</li></ul><br><br>Per configurazioni altamente disponibili di Content Engine e Content Platform Engine, utilizzare l'URL di trasporto altamente disponibile EJB senza il prefisso cemp: . ",
		admin_server_p8_protocol_hover: "Specificare il protocollo da utilizzare per comunicare con Content Engine.",
		admin_server_cm_name_hover: "Specificare il nome del catalogo locale del database Content Manager o il nome della connessione del server della libreria. Questo nome  è il valore specificato per la variabile ICMSERVER.",
		admin_repository_cmis_hover: "Specificare l'ID del repository a cui si desidera collegarsi.  L'ID di ciascun repository presente nell'ambiente CMIS viene elencato nel documento del servizio di bind AtomPub.  <br/><br/><b>Suggerimento:</b>È possibile immettere un asterisco (*) per collegarsi al primo o unico repository definito nel documento del servizio di bind Atompub.",
		admin_url_cmis_hover: "Il formato dell'URL varia a seconda del provider del servizio. Consultare la documentazione CMIS o contattare l'amministratore del server CMIS dell'URL.",
		admin_repcfg_cmis_status_columns_hover: "Specificare gli stati elemento per i quali si desidera visualizzare le icone. Le icone di stato sono visualizzate di fianco ai documenti nell'elenco del contenuto.",
		admin_port_hover: "Specifica il numero di porta TCP/IP su cui è in ascolto il server Content Manager OnDemand. Il valore predefinito è 1445.",
		admin_unified_searches_hover: "Specificare se si desidera che gli utenti possano salvare le ricerche tra repository su questo repository.<br/><br/>Se questa opzione non viene abilitata, gli utenti possono comunque creare ricerche tra repository che vengono eseguite su questo repository. È possibile impedire agli utenti di creare ricerche tra repository al livello desktop.<br/><br/>Se vengono abilitate le ricerche tra repository, IBM Content Navigator crea il modello di dati di ricerca tra repository sul repository.<br/><br/>Per IBM FileNet Content Manager, è necessario effettuare la connessione al repository come amministratore di Content Engine prima di abilitare questa opzione.",
		admin_unified_searches_cm_hover: "Specificare se si desidera che gli utenti possano salvare le ricerche tra repository su questo repository.<br/><br/>Se questa opzione non viene abilitata, gli utenti possono comunque creare ricerche tra repository che vengono eseguite su questo repository. È possibile impedire agli utenti di creare ricerche tra repository al livello desktop.<br/><br/>Se vengono abilitate le ricerche tra repository, IBM Content Navigator crea il modello di dati di ricerca tra repository sul repository.",
		admin_max_results_hover: "Specificare se limitare il numero di risultati che vengono restituiti da una ricerca. Se non si desidera limitare il numero di risultati della ricerca, è possibile che si verifichino problemi di prestazioni se una ricerca restituisce un numero elevato di risultati.",
		admin_timeout_hover: "Specificare per quanto tempo, in secondi, una ricerca può essere in esecuzione sul repository. Se la ricerca non viene completata nel tempo specificato, il client Web annulla la richiesta. Il timeout massimo consigliato è 60 secondi.",
		admin_object_store_hover: "Specificare l'archivio oggetti al quale si desidera connettersi sul server Content Engine. È possibile acquisire il nome simbolico dalla console di gestione di Content Platform Engine.",
		admin_object_store_display_name_hover: "Il nome di visualizzazione dell'archivio oggetti è obbligatorio se si desidera utilizzare i flussi di lavoro IBM FileNet P8. È possibile acquisire il nome di visualizzazione dell'archivio oggetti dalla console di gestione di Content Platform Engine.",
		admin_all_searches_hover: "Specificare se limitare il numero delle ricerche visualizzate in <b>Tutte le ricerche</b> quando gli utenti stanno effettuando una ricerca sul repository. Se non si limita il numero di ricerche, si possono verificare problemi di prestazioni se il repository include un numero elevato di ricerche salvate.",

		admin_text_desktop: "Desktop",
		admin_text_repository: "Repository",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Tema",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Motivo redazione",
		admin_text_redactions: "Redazioni",
		admin_text_viewer_mapping: "Associazione visualizzatore",
		admin_text_mobile_feature: "Funzione mobile",
		admin_test_interface_text: "Testo interfaccia",
		admin_text_interface_text_locale: "Testo interfaccia localizzato",
		admin_text_icon_status: "Icona di stato",
		admin_text_icon: "Icona",
		admin_text_file_type: "Tipo di file",
		admin_text_viewer: "Visualizzatore",
		admin_text_desktop_access: "Accesso desktop",
		admin_text_mapped_properties_for_office: "Proprietà associate per Microsoft Office",
		admin_text_desktop_features: "Funzioni del desktop",
		admin_text_unknown: "Sconosciuta",
		admin_folder_instruction: "Specificare le proprietà visualizzate per documenti e cartelle nell'elenco del contenuto quando gli utenti eseguono l'esplorazione. È anche possibile specificare l'ordine in cui le proprietà sono visualizzate.",
		admin_search_instruction: "Specificare quali opzioni sono selezionate per impostazione predefinita quando gli utenti creano una ricerca.",
		admin_repository_office_conf_class_instruction: "Se sulle macchine client nel proprio ambiente è installato IBM Content Navigator per Microsoft Office, è possibile specificare come i documenti vanno gestiti quando sono aggiunti o registrati in questo repository.",
		admin_repository_office_conf_instruction: "Associare le proprietà del documento Microsoft Office alle proprietà definite in questo repository.<br/><br/>Quando è abilitata l'associazione proprietà per un desktop a cui è associato questo repository, le proprietà impostate sul documento Microsoft Office vengono utilizzate per inserire le proprietà nel repository quando l'utente aggiunge un documento da IBM Content Navigator per Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Associazione proprietà",
		admin_repository_office_conf_prop_mapping_title1: "Integrazione MS Office",
		admin_office_conf_instruction: "Quando IBM Content Navigator for Microsoft Office è installato sulle macchine client è possibile controllare la modalità di integrazione di IBM Content Navigator con le applicazioni Microsoft Office.<br /><br /><b>Importante:</b> se si seleziona <b>Associa proprietà Office…</b>, è necessario configurare l'associazione delle proprietà anche per ogni repository associato a questo desktop. È possibile configurare le associazioni delle proprietà sulla scheda <b>Proprietà Office</b> per ogni repository nel proprio ambiente.",
		admin_desktop_workflows_instruction: "<b>Solo per i sistemi IBM FileNet P8:</b> specificare quali spazi applicazioni sono visualizzati in questo desktop. L'ordine degli spazi applicazioni selezionato determina l'ordine in cui gli spazi dell'applicazione vengono visualizzati nel client Web.<br><br><b>Suggerimento:</b> è possibile modificare il nome visualizzato degli spazi applicazione specificando i nuovi nomi nella sezione <b>Etichette</b> dello strumento di amministrazione.",
		admin_search_filtered_properties_instruction: "Specificare le proprietà che possono essere ricercate dagli utenti. È possibile nascondere qualsiasi proprietà che si desidera non venga ricercata dagli utenti.",
		admin_search_filtered_operators_instruction: "Specificare gli operatori che sono disponibili quando gli utenti utilizzano la ricerca di un determinato tipo di dati, ad esempio una data o un numero intero. È possibile nascondere qualsiasi operatore che si desidera non venga selezionato dagli utenti.",
		admin_search_default_search_results_instruction: "Specificare le proprietà visualizzate per i documenti e le cartelle nei risultati della ricerca. È possibile nascondere qualsiasi proprietà che si desidera non venga visualizzata nei risultati della ricerca.",
		admin_search_default_search_results_p8_cmis_instruction: "Specificare le proprietà visualizzate per i documenti nei risultati della ricerca. È possibile nascondere qualsiasi proprietà che si desidera non venga visualizzata nei risultati.",

		admin_datetimeOp: "Data/ora",
		admin_floatOp: "Numero a virgola mobile",
		admin_integerOp: "Intero",
		admin_stringOp: "Stringa",
		admin_binaryOp: "Binario",
		admin_objectOp: "Oggetto",
		admin_idOp: "ID",
		admin_userOp: "Utente",
		admin_booleanOp: "Booleano",

		admin_string: "Stringa",
		admin_long: "Lungo",
		admin_date: "Data",
		admin_double: "Doppio",
		admin_object: "Oggetto",
		admin_guid: "GUID",
		admin_boolean: "Booleano",

		admin_repcfg_heading: "È possibile sostituire il funzionamento predefinito di questo repository impostando i parametri di configurazione.",
		admin_repcfg_heading_od: "È possibile sostituire il funzionamento predefinito di questo repository impostando i parametri di configurazione.<br /><br /><b>Importante:</b> per utilizzare il client Web con Content Manager OnDemand, è necessario specificare anche i valori per i parametri inclusi sulla scheda <b>Content Manager OnDemand</b> in <b>Impostazioni</b>, che si applicano a tutti i repository Content Manager OnDemand ai quali si è connessi.",
		admin_repcfg_teamspaces: "Gestione spazio team",
		admin_repcfg_enable: "Abilita",
		admin_repcfg_disable: "Disabilita",

		admin_repcfg_deliver_redacted_pdf_files_as: "I file PDF redatti verranno forniti come:",
		admin_repcfg_burn_pdf_to_pdf: "File PDF",
		admin_repcfg_burn_pdf_to_tiff: "File TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Un file PDF redatto mediante l'applicazione di redazioni basate sul ruolo può essere fornito al client in un formato file differente. Quando il formato del file viene modificato, vengono modificati anche il tipo MIME e l'estensione del file.<br><br>Ad esempio, quando un file PDF viene fornito come file TIFF, l'estensione del file viene modificata in .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Consenti all'utente di unire o dividere le pagine che dispongono di redazioni basate su ruolo.",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Selezionare questa opzione per consentire agli utenti di unire e dividere le pagine che dispongono di redazioni basate su ruolo. Gli utenti che non hanno editori di redazione non saranno in grado di modificare le redazioni basate su ruolo e non gli verrà concesso l'accesso ai dati sensibili associati alle redazioni basate su ruolo anche se questa opzione è abilitata.",
		admin_repcfg_modify_teamspace_roles: "Consenti ai proprietari di modificare i ruoli degli spazi team esistenti",
		admin_repcfg_tm_delete_teamspace: "Abilita i proprietari ad eliminare lo spazio team incluso i contenuti.",
		admin_repcfg_tm_delete_teamspace_id_missing: "È necessario specificare il nome utente di un amministratore del repository.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "È necessario specificare la password dell'amministratore del repository.",
		admin_repcfg_teamspace_display_Recent: "Mostrare solo gli spazi team recentemente modificati ",
		admin_repcfg_teamspace_display_Recent_value: "Giorni trascorsi dall'ultima modifica:",

		admin_repcfg_folder_selector: "Root folder:",
		admin_repcfg_enable_folder_selector: "Abilita",
		admin_repcfg_disable_folder_selector: "Disabilita",
		admin_repcfg_SSO: "SSO (Single sign-on):",
		admin_repcfg_teamspace_template_permission_text: "Assegna creatori del modello spazio team:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Specificare i gruppi o utenti che possono creare modelli spazio team. Agli utenti e gruppi sono assegnate le impostazioni di sicurezza appropriate per le classi e cartelle richieste. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Ulteriori informazioni</a><br/><br/><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione dello spazio team.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Specificare i gruppi o utenti che possono creare modelli spazio team. Gli utenti sono aggiunti agli ACL opportuni e ad essi vengono assegnati i privilegi necessari. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Ulteriori informazioni</a><br/><br/><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione dello spazio team.",
		admin_repcfg_teamspace_permission_text: "Assegna i ruoli dello spazio team:",
		admin_repcfg_teamspace_permission_hover_p8: "Specificare i gruppi o utenti che possono creare gli spazi team ed utilizzarli. Agli utenti sono assegnate le impostazioni di sicurezza per le classi e cartelle richieste. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Ulteriori informazioni</a><br/><br/><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione dello spazio team.",
		admin_repcfg_teamspace_permission_hover_cm: "Specificare i gruppi o utenti che possono creare gli spazi team ed utilizzarli. Gli utenti sono aggiunti agli ACL opportuni e ad essi vengono assegnati i privilegi necessari. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Ulteriori informazioni</a><br/><br/><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione dello spazio team.",
		admin_repcfg_entry_template_permission_text: "Assegna i ruoli del modello di immissione:",
		admin_repcfg_entry_template_permission_hover_p8: "Specificare i gruppi o utenti che possono creare i modelli di immissione ed utilizzare i modelli di immissione. Agli utenti vengono fornite le impostazioni di sicurezza per la classe modello di immissione documento. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Ulteriori informazioni</a><br/><br/><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione del modello di immissione.",
		admin_repcfg_entry_template_permission_hover_cm: "Specificare i gruppi o utenti che possono creare i modelli di immissione ed utilizzare i modelli di immissione. Gli utenti sono aggiunti agli ACL opportuni e ad essi vengono assegnati i privilegi necessari. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Ulteriori informazioni</a><br /><br /><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione del modello di immissione.",
		admin_repcfg_office_template_permission_text: "Assegna ruoli del modello:",
		admin_repcfg_office_template_permission_hover_cm: "Specificare i gruppi o gli utenti che possono creare, modificare ed utilizzare i modelli Microsoft Office Online o del servizio Edit. Gli utenti sono aggiunti agli ACL opportuni e ad essi vengono assegnati i privilegi necessari.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a><br /><br /><b>Consiglio:</b> Utilizzare i gruppi per semplificare a gestione del modello Microsoft Office Online o del servizio Edit.",
		admin_repcfg_draft_permission_text: "Assegna i ruoli bozza",
		admin_repcfg_draft_permission_hover_cm: "Specificare i gruppi o gli utenti che possono creare bozze di documenti Microsoft Office Online o del servizio Edit durante la modifica in collaborazione. Qualsiasi utente che deve modificare in collaborazione i documenti in Microsoft Office Online o nel servizio Edit deve disporre dei privilegi appropriati per la creazione delle bozze. Gli utenti sono aggiunti agli ACL opportuni e ad essi vengono assegnati i privilegi necessari. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a><br /><br /><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione delle bozze.",
		admin_repcfg_search_permission_text: "Assegna i ruoli di ricerca:",
		admin_repcfg_search_permission_hover_p8: "Specificare i gruppi o utenti che possono creare o utilizzare le ricerche salvate e le ricerche tra repository. Agli utenti vengono fornite le impostazioni di sicurezza opportune per le classi richieste. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Ulteriori informazioni</a><br /><br /><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione della ricerca.",
		admin_repcfg_search_permission_hover_cm: "Specificare i gruppi o utenti che possono creare, modificare o utilizzare le ricerche salvate e le ricerche tra repository. Gli utenti sono aggiunti agli ACL opportuni e ad essi vengono assegnati i privilegi necessari. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Ulteriori informazioni</a><br /><br /><b>Consiglio:</b> utilizzare i gruppi per semplificare la gestione della ricerca.",
		admin_repcfg_search_permission_title: "Ricerca ruoli",
		admin_repcfg_search_permission_intro_text: "Assicurarsi che gli utenti abbiano accesso ad un desktop che supporti i relativi ruoli. Ad esempio, assicurarsi che i creatori della ricerca abbiano accesso ad un desktop che consente di creare ricerche e ricerche tra repository.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Gli amministratori del modello spazio team sono utenti che dispongono di autorizzazioni <b>Controllo completo</b> sul repository (archivio oggetti). Non è possibile modificare l'elenco di amministratori del modello spazio team dallo strumento di amministrazione. <p>Gli amministratori del modello spazio team possono eliminare o modificare qualsiasi modello spazio team. L'utente che crea un modello spazio team non necessita di condividere il modello con gli amministratori del modello spazio team.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Quando si designa un utente come creatore del modello spazio team, all'utente o gruppo è fornita l'opportuna protezione sul repository per creare modelli spazio team. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Ulteriori informazioni</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Utenti e gruppi a cui sono assegnati privilegi diversi dai privilegi associati ad Amministratori e Creatori.<p>È possibile spostare tali utenti e gruppi nel ruolo di creatori del modello spazio team rimuovendoli dal ruolo Altri ed assegnandoli come creatori del modello spazio team.<p>È possibile esaminare i privilegi attualmente assegnati a tali utenti e gruppi utilizzando IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Gli amministratori dello spazio team sono utenti che dispongono delle autorizzazioni <b>Controllo completo</b> sul repository (archivio oggetti). Non è possibile modificare l'elenco di amministratori dello spazio team dallo strumento di amministrazione.<p>Gli amministratori dello spazio team possono eliminare o modificare qualsiasi spazio team. L'utente che crea uno spazio team non necessita di condividere lo spazio team con gli amministratori dello spazio team.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Quando si designa un utente o gruppo come creatore dello spazio team, all'utente o gruppo è fornita la protezione opportuna sul repository per creare gli spazi team. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Ulteriori informazioni</a>",
		admin_repcfg_teamspace_user_hover_p8: "Quando si designa un utente o gruppo come utente dello spazio team, all'utente o gruppo è fornita la protezione opportuna sul repository per utilizzare gli spazi team. Tuttavia, l'utente deve essere membro di uno spazio team per accedervi. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Ulteriori informazioni</a><p><b>Suggerimento:</b> se si desidera che tutti gli utenti nel proprio ambiente siano in grado di visualizzare gli spazi team, è possibile aggiungere il pseudo-account #AUTHENTICATED-USERS al ruolo utente dello spazio team.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Utenti e gruppi a cui sono assegnati privilegi diversi dai privilegi associati ad Amministratori, Creatori ed Utenti.<p>È possibile spostare tali utenti e gruppi nei ruoli predefiniti rimuovendoli dal ruolo Altri ed assegnando loro i ruoli dello spazio team.<p>È possibile esaminare i privilegi attualmente assegnati a tali utenti e gruppi utilizzando IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Gli amministratori del modello di immissione sono utenti che dispongono delle autorizzazioni <b>Controllo completo</b> sul repository (archivio oggetti). Non è possibile modificare l'elenco di amministratori del modello di immissione dallo strumento di amministrazione. <p>Gli amministratori del modello di immissione possono eliminare o modificare qualsiasi modello di immissione. L'utente che crea un modello di immissione non ha la necessità di condividere il modello di immissione con gli amministratori del modello di immissione.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Quando si designa un utente o gruppo come creatore del modello di immissione, all'utente o gruppo viene fornita la protezione opportuna sul repository per creare i modelli di immissione. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Ulteriori informazioni</a>",
		admin_repcfg_entry_template_user_hover_p8: "Quando si designa un utente o gruppo come utente del modello di immissione, all'utente o gruppo è fornita l'opportuna protezione sul repository per utilizzare i modelli di immissione. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Ulteriori informazioni</a><p><b>Suggerimento:</b> se si desidera che tutti gli utenti nel proprio ambiente siano in grado di utilizzare i modelli di immissione, è possibile aggiungere il pseudo-account #AUTHENTICATED-USERS al ruolo utente del modello di immissione.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Utenti e gruppi a cui sono assegnati privilegi diversi dai privilegi associati ad Amministratori, Creatori ed Utenti.<p>È possibile spostare tali utenti e gruppi nei ruoli predefiniti rimuovendoli dal ruolo Altri ed assegnando loro i ruoli del modello di immissione.<p>È possibile esaminare i privilegi attualmente assegnati a tali utenti e gruppi utilizzando IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Quando si designa un utente o gruppo come creatore del modello spazio team, all'utente o gruppo sono forniti i privilegi opportuni per creare i modelli spazio team sul repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Ulteriori informazioni</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Quando si designa un utente o gruppo come creatore dello spazio team, all'utente o gruppo sono forniti i privilegi opportuni per creare gli spazi team sul repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Ulteriori informazioni</a>",
		admin_repcfg_teamspace_user_hover_cm: "Quando si designa un utente o gruppo come utente dello spazio team, all'utente o gruppo sono forniti i privilegi opportuni per utilizzare gli spazi team sul repository. Tuttavia, l'utente deve essere membro di uno spazio team per accedervi. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Ulteriori informazioni</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Quando si designa un utente o gruppo come creatore del modello di immissione, all'utente o gruppo sono forniti i privilegi opportuni per creare i modelli di immissione sul repository. <br/><br/>Tuttavia, le impostazioni di sicurezza per uno specifico modello di immissione determinano i privilegi di cui l'utente o gruppo dispongono sul modello di immissione. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Ulteriori informazioni</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Quando si designa un utente o gruppo come editore del modello di immissione, all'utente o gruppo sono forniti i privilegi opportuni per modificare i modelli di immissione sul repository. <br/><br/>Tuttavia, le impostazioni di sicurezza per uno specifico modello di immissione determinano i privilegi di cui l'utente o gruppo dispongono sul modello di immissione. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Ulteriori informazioni</a>",
		admin_repcfg_entry_user_hover_cm: "Quando si designa un utente o gruppo come utente del modello di immissione, all'utente o gruppo vengono forniti i privilegi opportuni per utilizzare i modelli di immissione sul repository. <br/><br/>Tuttavia, le impostazioni di sicurezza per uno specifico modello di immissione determinano i privilegi di cui l'utente o gruppo dispongono sul modello di immissione. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Ulteriori informazioni</a>",
		admin_repcfg_office_template_creators_hover_cm: "Quando si designa un utente o un gruppo come creatore di modelli Microsoft Office Online o del servizio Edit, all'utente o al gruppo vengono forniti i privilegi appropriati per creare i file di modello nel repository. <br/><br/>Tuttavia, le impostazioni di sicurezza per un file modello specifico determinano i privilegi di cui l'utente o il gruppo dispone sul modello. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a>",
		admin_repcfg_office_template_editors_hover_cm: "Quando si designa un utente o un gruppo come editor di modelli Microsoft Office Online o del servizio Edit, all'utente o al gruppo vengono forniti i privilegi appropriati per modificare i file di modello nel repository.  <br/><br/>Tuttavia, le impostazioni di sicurezza per un file modello specifico determinano i privilegi di cui l'utente o il gruppo dispone sul modello. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a>",
		admin_repcfg_office_template_user_hover_cm: "Quando si designa un utente o un gruppo come utente del modello Microsoft Office Online o del servizio Edit, all'utente o al gruppo vengono forniti i privilegi appropriati per applicare un modello durante la creazione di un nuovo documento Office Online o del servizio Edit dal client Web.  <br/><br/>Tuttavia, le impostazioni di sicurezza per un file modello specifico determinano i privilegi di cui l'utente o il gruppo dispone sul modello.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a>",
		admin_repcfg_draft_creators_hover_cm: "A qualsiasi utente che deve modificare in collaborazione i documenti in Microsoft Office Online o nel servizio Edit deve essere assegnato questo ruolo. Non assegnare utenti ai ruoli editor o utente. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a>",
		admin_repcfg_draft_editors_hover_cm: "A qualsiasi utente che deve modificare in collaborazione i documenti in Microsoft Office Online o nel servizio Edit deve essere assegnato il ruolo <b>creatore</b>. Se un utente viene assegnato al ruolo editor, non potrà creare bozze, che sono necessarie per la modifica in collaborazione.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a>",
		admin_repcfg_draft_user_hover_cm: "A qualsiasi utente che deve modificare in collaborazione i documenti in Microsoft Office Online o nel servizio Edit deve essere assegnato il ruolo <b>creatore</b>. Se un utente viene assegnato al ruolo utente, non potrà creare bozze, che sono necessarie per la modifica in collaborazione.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Ulteriori informazioni</a>",		
		admin_repcfg_search_others_hover_p8: "Utenti e gruppi a cui sono assegnati privilegi diversi dai privilegi associati ad Amministratori, Creatori ed Utenti.<p>aÈ possibile spostare tali utenti e gruppi nei ruoli predefiniti rimuovendoli dal ruolo Altri ed assegnando loro i ruoli di ricerca.<p>È possibile esaminare i privilegi attualmente assegnati a tali utenti e gruppi utilizzando IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Gli amministratori della ricerca sono utenti che dispongono delle autorizzazioni <b>Controllo completo</b> sul repository (archivio oggetti). Non è possibile modificare l'elenco degli amministratori della ricerca dallo strumento di amministrazione. <br /><br />Gli amministratori della ricerca possono eliminare o modificare qualsiasi ricerca. L'utente che crea una ricerca non ha la necessità di condividere la ricerca con gli amministratori della ricerca.",
		admin_repcfg_search_creators_hover_p8: "Quando si designa un utente o gruppo come creatore della ricerca, all'utente o gruppo viene fornita l'opportuna protezione sul repository per creare le ricerche. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Ulteriori informazioni</a>",
		admin_repcfg_search_user_hover_p8: "Quando si designa un utente o gruppo come utente di ricerca , all'utente o gruppo viene fornita la protezione sul repository per utilizzare le ricerche <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'><Per saperne di più</a><br /><br /><b>Suggerimento:</b> se si desidera che tutti gli utenti siano in grado di utilizzare le ricerche, è possibile aggiungere il pseudo-account #AUTHENTICATED-USERS al ruolo di utente di ricerca.<br/><br />Per impostazione predefinita, un utente di ricerca può creare ricerche e ricerche tra repository, ma non può salvare le ricerche. È possibile impedire agli utenti di ricerca la creazione di ricerche dovendo loro utilizzare un desktop per cui sono selezionate le seguenti opzioni:<ul><li><b>Non consentire agli utenti di creare ricerche</b></li><li><b>Impedisce agli utenti di creare ricerche tra repository</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Quando si designa un utente o gruppo come creatore di ricerca, all'utente o gruppo vengono forniti i privilegi opportuni per creare e salvare le ricerche e le ricerche tra repository sul repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Ulteriori informazioni</a><br /><br /><b>Importante:</b> assicurarsi che i creatori di ricerca utilizzino un desktop per cui non sono selezionate le seguenti opzioni:<ul><li><b>Non consentire agli utenti di creare ricerche</b></li><li><b>Impedisce agli utenti di creare ricerche tra repository</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Quando si designa un utente o gruppo come editore di ricerca, all'utente o gruppo sono forniti i privilegi opportuni per modificare le ricerche e le ricerche tra repository esistenti. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Ulteriori informazioni</a><br /><br /><b>Suggerimento:</b> per impostazione predefinita, un editore di ricerca può creare ricerche e ricerche tra repository, ma non può salvare le ricerche. È possibile impedire agli editori di ricerca di creare ricerche dovendo loro utilizzare un desktop per cui sono selezionate le seguenti opzioni:<ul><li><b>Non consentire agli utenti di creare ricerche</b></li><li><b>Impedisce agli utenti di creare ricerche tra repository</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Quando si designa un utente o gruppo come utente di ricerca, all'utente o gruppo vengono forniti i privilegi opportuni per aprire ed eseguire le ricerche salvate e le ricerche tra repository salvate. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Ulteriori informazioni</a><br /><br /><b>Suggerimento:</b> per impostazione predefinita, un utente di ricerca può creare ricerche e ricerche tra repository, ma non può salvare le ricerche. È possibile impedire agli utenti di ricerca la creazione di ricerche dovendo loro utilizzare un desktop per cui sono selezionate le seguenti opzioni:<ul><li><b>Non consentire agli utenti di creare ricerche</b></li><li><b>Impedisce agli utenti di creare ricerche tra repository</b></li></ul>",
		admin_repcfg_db_encoding: "Codifica caratteri del database del server:",
		admin_repcfg_db_encoding_hover: "La codifica caratteri predefinita di un database IBM Content Manager è UTF-8.",
		admin_repcfg_db_encoding_specify: "Specifica la codifica caratteri del database",
		admin_repcfg_db_encoding_utf8: "Codifica UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Specificare questa opzione se si utilizza un database codificato con UTF-8. IBM Content Navigator utilizzerà la codifica UTF-8 per controllare la lunghezza delle stringhe di valore della proprietà dell'elemento.",
		admin_repcfg_db_encoding_other: "Altre codifiche",
		admin_repcfg_db_encoding_other_hover: "Specificare questa opzione se si utilizza un database con una codifica diversa da UTF-8. IBM Content Navigator utilizzerà il conteggio del carattere per controllare la lunghezza delle stringhe di valore della proprietà dell'elemento.",
		admin_repcfg_language_codes: "Codici di lingua server:",
		admin_repcfg_language_codes_avail: "Disponibile",
		admin_repcfg_language_codes_sel: "Selezionato",
		admin_repcfg_pdf_conversion: "Tipi MIME da convertire in documenti PDF negli allegati:",
		admin_repcfg_pdf_conversion_avail: "Disponibile",
		admin_repcfg_pdf_conversion_sel: "Selezionato",

		admin_repcfg_box_share_enable_classes_label: "Classi da modificare per il supporto di Condivisione Box:",
		admin_repcfg_box_share_enable_classes_hover: "È possibile modificare questa classe affinché memorizzi l'ID del file in Box quando l'elemento viene condiviso.",
		admin_repcfg_box_share_enable_classes_warning: "Importante: Qualsiasi classe specificata verrà modificata per supportare Condivisione Box. Una volta salvate le modifiche, queste non possono essere rimosse dalle classi.<br><br>Per poter modificare le classi, è necessario essere connessi al repository come amministratore del server della libreria.",
		admin_repcfg_box_share_enable_classes_available: "Classi disponibili",
		admin_repcfg_box_share_enable_classes_selected: "Classi selezionate",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Archivia ID Condivisione Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Questa classe è stata già modificata per l'archiviazione dell'ID di Condivisione Box. Non è possibile rimuovere questa opzione.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modificare questa classe affinché memorizzi l'ID del file in Box quando l'elemento viene condiviso.",

		admin_repcfg_redaction: "Redazioni basate sul ruolo:",
		admin_repcfg_enable_redaction_hover: "Specificare se si desidera utilizzare le redazioni basate su ruolo nei documenti in questo repository.<br/><br/>Le redazioni basate su ruolo vengono applicate quando un documento viene scaricato, stampato, sottoposto a rendering da un visualizzatore o visualizzato come una miniatura. Ciò che gli utenti vedono quando visualizzano il documento dipende dal loro ruolo e dalle politiche di redazione applicabili.",

		admin_repcfg_redaction_policy_permission_text: "Assegna editori alla politica:",
		admin_repcfg_redaction_policy_editors_hover: "Selezionare gli utenti e gruppi che creeranno, modificheranno ed elimineranno le politiche di redazione e i ruoli di redazione.",
		admin_repcfg_redaction_policy_editors_select_hover: "Gli editori della politica di redazione possono creare, modificare ed eliminare le politiche di redazione e i ruoli di redazione.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Gli amministratori della politica di redazione possono assegnare editori della politica di redazione.<br/><br/>È possibile modificare l'elenco di amministratori della politica di redazione utilizzando IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Gli amministratori della politica di redazione possono assegnare editori della politica di redazione.<br/><br/>È possibile modificare l'elenco di amministratori della politica di redazione utilizzando il client di amministrazione del sistema IBM Content Manager",

		admin_repcfg_redaction_permission_text: "Assegna editori di redazione",
		admin_repcfg_redaction_editors_hover: "Selezionare gli utenti e gruppi che creeranno, modificheranno ed elimineranno le redazioni basate su ruolo. Una volta selezionati gli utenti e gruppi come editori, è necessario specificarli come editori nelle politiche di redazione prima che questi possano modificare le redazioni basate su ruolo.",
   		admin_repcfg_redaction_editors_select_hover: "Gli editori di redazione possono creare, modificare ed eliminare le redazioni basate su ruolo quando sono specificati anche come editori nelle politiche di redazione.",
   		admin_repcfg_redaction_administrators_hover_p8: "Gli amministratori di redazione possono assegnare editori di redazione.<br/><br/>È possibile modificare l'elenco di amministratori di redazione utilizzando IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Gli amministratori di redazione possono assegnare editori di redazione.<br/><br/>È possibile modificare l'elenco di amministratori di redazione utilizzando il client di amministrazione del sistema IBM Content Manager.",
		admin_repcfg_entry_template: "Gestione modello di immissione:",
		admin_repcfg_entry_template_enable_classes_label: "Classi da modificare per il supporto del modello di immissione:",
		admin_repcfg_oos_reference_attribute_label: "Attributi di riferimento per office online:",
		admin_repcfg_entry_template_enable_classes_hover: "Importante: Qualsiasi classe specificata verrà modificata per supportare i modelli di immissione. Una volta salvate le modifiche, queste non possono essere rimosse dalle classi.<br><br>È possibile modificare la classe per uno o entrambi i seguenti scopi:<br><ul><li>Memorizzare l'ID del modello di immissione che è stato utilizzato per aggiungere un elemento, in modo che le impostazioni del modello di immissione vengano applicate quando l'elemento viene modificato</li><li>Valido solo per le classi di cartella gerarchiche: Per supportare le associazioni della cartella del modello di immissione</li></ul>Per poter modificare le classi, è necessario essere connessi al repository come amministratore del server della libreria.",
		admin_repcfg_entry_template_enable_classes_warning: "Importante: Qualsiasi classe specificata verrà modificata per supportare i modelli di immissione. Una volta salvate le modifiche, queste non possono essere rimosse dalle classi.<br><br>Per poter modificare le classi, è necessario essere connessi al repository come amministratore del server della libreria.",
		admin_repcfg_entry_template_enable_classes_available: "Classi disponibili",
		admin_repcfg_entry_template_enable_classes_selected: "Classi selezionate",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Memorizza ID del modello di immissione",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modificare questa classe affinché memorizzi l'ID del modello di immissione che è stato utilizzato per aggiungere un elemento, in modo che le impostazioni del modello di immissione vengano applicate quando l'elemento viene modificato.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Memorizza associazioni cartella",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modificare questa classe in modo che possa supportare le associazioni cartella del modello di immissione. Questa opzione è disponibile solo per le classi di cartelle gerarchiche.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Questa classe è stata già modificata per l'archiviazione degli ID modello di immissione. Non è possibile rimuovere questa opzione.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Questa classe è già stata modificata per memorizzare le associazioni cartella. Non è possibile rimuovere questa opzione.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Per memorizzare le associazioni cartella possono essere utilizzate solo classi di cartelle gerarchiche e non gerarchiche.",
		admin_repcfg_entry_template_root_folder_association_title: "Modelli di immissione associati con la cartella principale:",
		admin_repcfg_entry_template_root_folder_association_hover: "Specificare il modelli di immissione che si desidera associare con la cartella principale nel repository IBM Content Manager.<br /><br />Se si associano dei modelli di immissione alla cartella principale e gli utenti aggiungono elementi alla cartella gerarchica, per l'aggiunta di tali elementi verrà sempre utilizzato un modello di immissione.",
		admin_repcfg_entry_template_root_folder_association_button: "Imposta associazioni",
		admin_repcfg_oos_enable_classes_label: "Classi da modificare per il supporto di Office Online e del servizio Edit:",
		admin_repcfg_oos_enable_classes_warning: "Importante: le classi specificate verranno modificate in modo da funzionare con Microsoft Office Online o con il servizio Edit. Una volta salvate le modifiche, l'attributo di riferimento, che viene automaticamente aggiunto a ciascuna classe, non può essere rimosso.<br><br>Per poter modificare le classi, è necessario essere connessi al repository come amministratore del server della libreria.",
		admin_repcfg_oos_enable_classes_available: "Classi disponibili",
		admin_repcfg_oos_enable_classes_selected: "Classi selezionate",
		admin_repcfg_oos_enable_classes_note: "Importante:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Questa classe non è supportata in Microsoft Office Online o nel servizio Edit.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "La politica della versione per la classe è impostata su always version, che non è supportata da Microsoft Office Online o dal servizio Edit. Selezionare una classe diversa.",
		admin_repcfg_download_recording: "Traccia download:",
		admin_repcfg_download_recording_hover: "I download sono tracciati per impostazione predefinita quando il componente aggiuntivo Social Collaboration Base Extensions viene installato sul repository. Tuttavia, disabilitando questa opzione è possibile migliorare le prestazioni del repository.<br><br>Se si disabilita questa opzione, gli utenti vedranno il numero di download che si sono verificati prima della disabilitazione dell'opzione.",
		admin_repcfg_sync_service: "Servizi di sincronizzazione",
		admin_repcfg_download_ignored: "Ignora download per utenti specifici:",
		admin_repcfg_download_ignored_hover: "È possibile ignorare i download richiesti da utenti specifici, come ad esempio gli amministratori o gli account di sistema, per riflettere in modo più accurato il numero di utenti che hanno scaricato un documento. Ad esempio, se si dispone di un account specifico che viene utilizzato per scaricare il contenuto per generare un report mensile, è possibile ignorare i download richiesti da quel account.<br><br><b>Limitazioni:</b> Non è possibile specificare gruppi.",

		admin_repcfg_add_as_major_version: "Aggiungi come versione principale:",
		admin_repcfg_enable_add_as_major_version: "Sì",
		admin_repcfg_disable_add_as_major_version: "No",
		admin_repcfg_checkin_as_major_version: "Esegui check-in come versione principale:",
		admin_repcfg_enable_checkin_as_major_version: "Sì",
		admin_repcfg_disable_checkin_as_major_version: "No",
		admin_repcfg_annotation_security: "Protezione annotazione:",
		admin_repcfg_inherit_annotation_security: "Duplicare la sicurezza del documento contenitore",
		admin_repcfg_default_annotation_security: "Utilizzare la protezione annotazione predefinita",
		admin_repcfg_connection_point: "Punto di connessione flusso di lavoro:",
		admin_repcfg_include_workflow_definition: "Visualizza classe di definizione del flusso di lavoro:",
		admin_repcfg_include_form_template: "Visualizza classe di modello del modulo:",
		admin_repcfg_enable_include_workflow_definition: "Sì",
		admin_repcfg_disable_include_workflow_definition: "No",

		admin_repcfg_status_columns: "Icone di stato:",
		admin_repcfg_status_columns_hover: "Specifica gli stati per i quali si desidera visualizzare le icone. Le icone di stato sono visualizzate accanto ai documenti, alle cartelle e agli elementi di lavoro nell'elenco del contenuto.",
		admin_repcfg_status_columns_documents_or_folders: "Visualizza un'icona quando i documenti o le cartelle:",
		admin_repcfg_status_columns_documents: "Visualizza un'icona quando i documenti:",
		admin_repcfg_status_columns_documents_checked_out: "Sono sottoposti a check-out",
		admin_repcfg_status_columns_documents_declared_records: "Vengono dichiarati come record",
		admin_repcfg_status_columns_documents_minor_versions: "Dispongono di una versione secondaria",
		admin_repcfg_status_columns_documents_compound_document: "Sono documenti composti",
		admin_repcfg_status_columns_documents_bookmarks: "Dispongono di segnalibri",
		admin_repcfg_status_columns_documents_hold: "Sono in attesa",
		admin_repcfg_status_columns_documents_notes: "Dispongono di note",
		admin_repcfg_status_columns_work_items: "Visualizza un'icona quando gli elementi di lavoro:",
		admin_repcfg_status_columns_work_items_locked: "Sono bloccati",
		admin_repcfg_status_columns_work_items_checked_out: "Sono sottoposti a check-out",
		admin_repcfg_status_columns_work_items_deadline: "Hanno una scadenza",
		admin_repcfg_status_columns_work_items_suspended: "Sono sospesi dall'elaborazione",

		admin_repcfg_afp2pdf_config_file: "File di configurazione AFP2PDF:",
		admin_repcfg_transform_xml_file: "File di trasformazione personalizzato:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Abilita",
		admin_repcfg_disable_ssl: "Disabilita",
		admin_repcfg_keyringdb_file: "File database keyring:",
		admin_repcfg_keyringstash_file: "File stash keyring:",
		admin_repcfg_od_sso: "SSO (Single Sign-On)",
		admin_repcfg_od_enable_sso: "Abilita",
		admin_repcfg_od_disable_sso: "Disabilita",
		admin_repcfg_od_sso_password: "Password",
		admin_repcfg_advanced_label: "Avanzato",
		admin_repcfg_custom_properties_label: "Proprietà personalizzate:",
		admin_repcfg_new_button_label: "Nuovo",
		admin_repcfg_edit_button_label: "Modifica",
		admin_repcfg_delete_button_label: "Elimina",
		admin_repcfg_custom_head1: "Nome",
		admin_repcfg_custom_head2: "Valore",
		admin_repcfg_ecpdialog_title_new: "Nuova proprietà personalizzata",
		admin_repcfg_ecpdialog_title_edit: "Modifica proprietà personalizzata",
		admin_repcfg_ecpdialog_name: "Nome:",
		admin_repcfg_ecpdialog_value: "Valore:",
		admin_repcfg_ecpdialog_save: "Salva con nome",
		admin_repcfg_ecpdialog_create: "Crea",
		admin_repcfg_ecpdialog_cancel: "Annulla",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Questo valore è obbligatorio. Il valore non può contenere spazi e non può essere un duplicato.",

		admin_repcfg_cmis_use_gzip_encoding: "Utilizza codifica GZIP:",

		admin_repcfg_task_mgr_proxy: "ID di connessione del gestore attività:",
		admin_repcfg_task_mgr_proxy_hover: "Per l'eliminazione di Condivisione Box e Spazio team, il gestore attività utilizza un ID utente ed una password amministratore per eseguire attività in background che modificano il repository.<br><br>Fare clic su Imposta ed accedere al repository utilizzando un ID utente ed una password amministratore del repository che siano validi.",
		admin_task_manager_not_enabled_warning: "Questa opzione richiede il servizio gestore attività, ma questo servizio non è abilitato.  È possibile abilitare il servizio gestore attività per tutti i desktop nella pagina Generale delle Impostazioni.",
		admin_task_manager_not_enabled_and_user_warning: "Questa opzione richiede il servizio gestore attività, ma questo servizio non è abilitato. In questa pagina, impostare l'ID di connessione del gestore attività, quindi, nella pagina Generale delle impostazioni, abilitare il servizio gestore attività per tutti i desktop.",
		admin_task_manager_user_id_pw_not_set_warning: "Questa opzione richiede il servizio gestore attività, ed un ID utente ed una password di amministratore. In questa pagina, impostare l'ID di connessione del gestore attività.",
		admin_repcfg_teamspaces_delete_task_id: "Amministratore del repository:",
		admin_repcfg_teamspaces_delete_task_password: "Password:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "È necessario specificare un amministratore server di librerie per consentire al servizio di gestione attività di eliminare uno spazio  team sul repository.",
		admin_repcfg_teamspaces_delete_task_hover: "Per impostazione predefinita, quando un utente elimina uno spazio team, lo spazio team è nascosto. Tutte le cartelle ed i documenti nello spazio team restano nel repository. <br /> <br />Quando si abilita questa opzione, solo i documenti inseriti in altre cartelle nel repository restano sul repository.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Se si ha un numero elevato di spazi team nel proprio ambiente, può occorrere molto tempo per visualizzare tutti gli spazi team nella scheda <b>Spazi team </b>. È possibile selezionare questa opzione per ridurre la quantità di tempo richiesta per riempire l'elenco.<br /><br />Se un utente deve utilizzare uno spazio team che non è compreso nell'intervallo specificato, può utilizzare il campo <b>Filtro</b> per trovare lo spazio team.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Se si seleziona questa opzione, gli utenti che hanno il ruolo di proprietario su uno spazio team possono modificare i ruoli associati agli spazi team creati prima di IBM Content Navigator, Versione 2.0.2.<br /><br />Questa opzione non influenza gli spazi team creati con IBM Content Navigator, Versione 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Specificare se si desidera che gli utenti siano in grado di creare spazi team e modelli di spazio team su questo repository.<br /><br /><b>Importante:</b> il repository deve supportare le cartelle gerarchiche.<br /><br />Se si abilitano gli spazi team, IBM Content Navigator crea il modello dati spazio team sul repository. Il modello dati include gli oggetti ACL, i privilegi, la serie di privilegi e due tipi di elementi nuovi.",
		admin_repcfg_folder_selector_hover: "Selezionare la cartella che si desidera utilizzare come cartella root quando gli utenti ricercano documenti. Se non vi sono cartelle gerarchiche configurate sul repository, questa impostazione consente di supportare la ricerca definendo una cartella root. Se vi sono cartelle gerarchiche configurate sul repository, questa impostazione sostituisce la cartella root configurata sul repository.",
		admin_repcfg_cm_use_sso_hover: "Specificare se consentire SSO per gli utenti che dispongono della serie di privilegi Trusted Logon.<br /><br /><b>Importante:</b> SSO deve essere abilitato sul server Content Manager e WebSphere Application Server deve essere configurato per LTPA, per consentire il funzionamento di questo parametro di configurazione.",
		admin_repcfg_cm_direct_retrieve_hover: "Il richiamo diretto è abilitato per impostazione predefinita poiché consente al client Web di richiamare rapidamente il contenuto dal gestore risorse. <br /><br />È possibile disabilitare questa opzione se non si desidera che l'applicazione client acceda direttamente al gestore risorse o se è presente un firewall o un server proxy che impedisce al client Web di accedere al gestore risorse mediante URL. Ad esempio, un firewall può impedire agli utenti di visualizzare documenti nel visualizzatore applet quando il richiamo diretto è abilitato.",
		admin_repcfg_cmItemTypesToDisplay: "Se non si desidera che gli utenti visualizzino i tipi di elemento risorsa e i tipi di elemento elemento sul server IBM Content Manager, è possibile visualizzare solo i tipi di elemento modello documento. I tipi di elemento vengono visualizzati quando gli utenti creano le ricerche, aggiungono documenti e creano cartelle.",
		admin_repcfg_cm_language_codes_hover: "Specificare le lingue in cui restituire i dati dal server Content Manager. L'elenco di lingue disponibili viene controllato dall'elenco delle definizioni di lingua sul server.<br /><br /><b>Nota:</b> i dati nel client Web sono visualizzati nella lingua impostata nel browser Web dell'utente.",
		admin_repcfg_cm_pdf_conversion_hover: "Specificare i tipi di documenti da convertire in PDF quando un utente invia un documento con più parti, ad esempio un allegato email. Tutte le parti sono combinate in un singolo documento PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Specificare se si desidera che gli utenti siano in grado di creare gli spazi team e i modelli di spazio team su questo repository.<br /><br />Se si abilitano gli spazi team, IBM Content Navigator crea il modello dati spazio team sul repository. Il modello dati include i modelli di proprietà, gli oggetti personalizzati, un oggetto cartella e diverse cartelle.",
		admin_repcfg_use_entry_template_p8_hover: "Specificare se si desidera che gli utenti siano in grado di creare e gestire i modelli di immissione in questo repository di IBM Content Navigator. Se non si abilita questa funzione, gli utenti possono ricercare ed utilizzare i modelli di immissione che sono già proprio repository.<br /><br />Se viene abilitata la gestione dei modelli di immissione, IBM Content Navigator aggiorna il modello dati del modello di immissione nel repository. L'aggiornamento include nuove proprietà. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Ulteriori informazioni</a>",
		admin_repcfg_use_entry_template_cm_hover: "Specificare se si desidera che gli utenti siano in grado di creare e gestire i modelli di immissione in questo repository di IBM Content Navigator.<br /><br />Se viene abilitata la gestione dei modelli di immissione, IBM Content Navigator crea il modello dati del modello di immissione nel repository. Il modello dati include un nuovo oggetto ACL, nuove proprietà, e un nuovo tipo di elemento. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Ulteriori informazioni</a>",
		admin_repcfg_sync_service_p8_hover: "Specificare se si desidera che gli utenti siano in grado di sincronizzare i loro elementi preferiti tra le workstation e i dispositivi mobile.<br><br><b>Importante:</b> per utilizzare questa funzione è necessario anche completare le seguenti attività:<br><ul><li>Specificare <b>l'URL pubblico dei servizi di sincronizzazione</b> nella sezione <b>Servizi di sincronizzazione</b> dello strumento di amministrazione.</li><li>Aggiungere questo repository ad un desktop per cui sono abilitati i servizi di sincronizzazione.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Specificare se l'opzione di versione principale è selezionata per impostazione predefinita quando gli utenti aggiungono documenti al repository.<br /><br />Gli utenti possono deselezionare questa opzione se desiderano aggiungere il documento come versione secondaria.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Specificare se l'opzione di versione principale è selezionata per impostazione predefinita quando gli utenti eseguono il check-in dei documenti nel repository.<br /><br />Gli utenti possono deselezionare questa opzione se desiderano eseguire il check-in del documento come versione secondaria.",
		admin_repcfg_p8_annotation_security_hover: "Specificare il tipo di protezione da applicare alle annotazioni per impostazione predefinita.<br /><br />Gli utenti possono modificare la protezione delle annotazioni.",
		admin_repcfg_p8_connection_point_hover: "Se si desidera utilizzare i flussi di lavoro IBM FileNet P8, selezionare un punto di connessione Process Engine. Il punto di connessione selezionato determina i flussi di lavoro che sono disponibili per gli utenti che accedono a questo repository.",
		admin_repcfg_p8_include_workflow_definition_hover: "Se nel client web si visualizza la classe documento di definizione del flusso di lavoro di IBM FileNet P8, gli utenti possono cercare ed aggiungere le definizioni del flusso di lavoro al repository.",
		admin_repcfg_p8_include_form_template_hover: "Se nel client web si visualizza la classe documento di modello di modulo di IBM FileNet P8, gli utenti possono cercare ed aggiungere i modelli di modulo al repository.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Specificare il percorso completo del file di configurazione AFP2PDF per questo repository sul server delle applicazioni Web. La trasformazione AFP2PDF è richiesta per visualizzare e stampare i dati AFP.<br /><br /><b>Nota:</b> per utilizzare questo parametro, è necessario che la trasformazione AFP2PDF sia installata.",
		admin_repcfg_od_transform_xml_file_hover: " Se si desidera utilizzare una trasformazione personalizzata per convertire il contenuto di Content Manager OnDemand, specificare il percorso completo del file XML utilizzato per definire la trasformazione. Il file XML deve trovarsi sul server delle applicazioni Web.",
		admin_repcfg_od_ssl_hover: "Specificare se utilizzare SSL per codificare le comunicazioni tra il server delle applicazioni di IBM Content Navigator, il server di libreria di Content Manager OnDemand e gli oggetti server.<br /><br /><b>Importante:</b> quando si abilita SSL per Content Manager OnDemand, non include la comunicazione tra il server delle applicazioni di IBM Content Navigator, il server Web o le stazioni di lavoro degli utenti.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Specificare il percorso completo del file di database keyring per questo repository sul server delle applicazioni Web. Ad esempio, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Il file database keyring contiene certificati root ritenuti attendibili. Per evitare un accesso non autorizzato a questo file si deve utilizzare una protezione elevata del file system.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Specificare il percorso completo del file stash keyring per questo repository sul server delle applicazioni Web. Ad esempio, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Il file stash keyring contiene la password per il file database keyring. Per evitare un accesso non autorizzato a questo file si deve utilizzare una protezione elevata del file system.",
		admin_repcfg_od_sso_password_hover: "Specificare la password da utilizzare per SSO con il server OnDemand.",
		admin_repcfg_od_custom_properties_hover: "L'API Java ODWEK supporta le proprietà personalizzate. Se si desidera utilizzare una qualsiasi proprietà personalizzata durante la connessione al repository mediante il client Web, specificare i nomi e i valori delle proprietà personalizzate.<br /><br />Per ulteriori informazioni sulle proprietà personalizzate supportate, consultare la documentazione Javadoc dell'API Java ODWEK, che si trova nella sottodirectory /api della directory di installazione di ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Immettere il nome della proprietà.",
		admin_repcfg_od_custom_properties_value_hover: "Immettere il valore della proprietà.",
		admin_repcfg_od_use_sso_hover: "Specificare se consentire il single sign-on per gli utenti.<br /><br /><b>Importante:</b> per il funzionamento di questo parametro di configurazione, è necessario che sul server Content Manager OnDemand sia abilitato SSO (Single sign-on).",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Utilizzare la codifica GZIP per questa origine CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nome file da utilizzare durante lo scaricamento dei documenti:",
		admin_repcfg_cm_use_part_file_name_help: "Specificare il modo in cui i nomi file dei documenti vengono determinati quando gli utenti scaricano i documenti.",
		admin_repcfg_cm_use_part_file_name_enable: "Utilizzare il nome file",
		admin_repcfg_cm_use_part_file_name_disable: "Utilizzare il nome dell'elemento nel repository",
		admin_repcfg_add_doc_name: "Nome predefinito di un documento aggiunto:",
		admin_repcfg_add_doc_name_hover: "Gli utenti possono cambiare il nome prima di aggiungere il documento.",
		admin_repcfg_add_doc_name_empty: "Nessuno (vuoto)",
		admin_repcfg_add_doc_name_file_name: "Il nome file del documento selezionato",

		admin_repcfg_compound_documents: "Funzioni del documento composte:",
		admin_repcfg_compound_documents_hover: "Abilita le funzioni composte del documento P8, quali la navigazione.",
		admin_repcfg_cm_action_list_config_enabled: "Elenco azioni dell'elemento di lavoro:",
		admin_repcfg_cm_action_list_config_hover: "Quando si configura l'instradamento di un documento nel client di gestione del sistema Content Manager, è possibile specificare un elenco di azioni che un utente può eseguire sull'elemento di lavoro.<br /><br />Abilitare questa opzione se si desidera utilizzare l'elenco delle azioni dal server Content Manager. Queste impostazioni vengono utilizzate nel menu di contesto e nella finestra Modifica proprietà per l'elemento di lavoro.<br /><br /><b>Importante:</b> le impostazioni nell'elenco delle azioni sovrascrivono i menu personalizzati che si configurano nello strumento di amministrazione Content Navigator. Se non esistono impostazioni nell'elenco delle azioni, l'utente non sarà in grado di compiere le azioni sugli elementi di lavoro.",

		admin_repcfg_box_share: "Condivisione Box",
		admin_repcfg_box_share_p8_hover: "Consente agli utenti di condividere un documento di questo repository. La condivisione di un documento prevede la copia del file in Box, la creazione di un link e l'invio del link in una email.<br /><br />Se si abilita Condivisione Box, IBM Content Navigator crea il modello di dati di Condivisione Box nel repository. Per installare l'add-on Condivisione Box di IBM Content Navigator, è necessario essere connessi al repository come amministratore del server della libreria.",

		admin_menu_type_icon: "Icona tipo di menu",
		admin_menu_toolbar_hover: "Barra degli strumenti",
		admin_menu_toolbar_custom_hover: "Barra degli strumenti personalizzata",
		admin_menu_contextMenu_hover: "Menu di scelta rapida",
		admin_menu_contextMenu_custom_hover: "Menu di scelta rapida personalizzato",

		admin_menu_contextMenu_custom_empty: "Non è stato definito alcun menu di scelta rapida personalizzato nei plug-in configurati.",
		admin_menu_toolbar_custom_empty: "Non è stata definita alcuna barra degli strumenti personalizzata nei plug-in configurati.",

		admin_file_type_category_filters: "Filtri per tipo di file:",
		admin_file_type_category_filters_hover_help: "Specifica l'elenco dei tipi di file che gli utenti possono utilizzare nelle seguenti situazioni:<ul><li>Restringere l'elenco dei risultati quando si effettua una ricerca o un'esplorazione in IBM Content Navigator for Microsoft Office<li>Restringere l'elenco di risultati quando si effettua una ricerca nel repository IBM FileNet P(nel client web<li>Restringere i tipi di file che gli utenti possono aggiungere al repository quando si utilizza un modello di immissione</ul>",
		admin_file_type_only_use_in_et_folder_association: "Mostra solo nella cartella Associazioni del modello di immissione",
		admin_office_config_properties_label: "Proprietà Office",
		admin_office_config_type_label: "Tipo di dati",
		admin_office_config_mapped_property_label: "Proprietà di repository",
		admin_office_config_properties_hover_help: "Immettere e quindi aggiungere il nome di ciascuna proprietà Microsoft Office che si desidera associare alla proprietà del repository. Il tipo di dati di tutte le proprietà deve corrispondere.",
		admin_office_config_mapped_property_hover_help: "Se si desidera associare le proprietà di Office a più di una proprietà del repository, è necessario creare una nuova associazione di proprietà.",
		admin_new_property_mapping_title: "Nuova associazione proprietà",
		admin_property_mapping_title: "Modifica associazione proprietà",
		admin_property_mapping_instruction: "Specificare le proprietà Microsoft Office che si desidera associare ad una proprietà nel repository. Il tipo di dati delle proprietà Office deve corrispondere al tipo di dati delle proprietà nel repository. <br /><br />Se un documento Office ha in associazione più di una proprietà, IBM Content Navigator utilizza la prima proprietà nell'elenco per popolare la proprietà nel repository.",
		admin_ms_general_settings: "Configurazione generale:",
		admin_ms_delete_local_settings: "Eliminare file locali quando un utente:",
		admin_ms_outlook_options: "Integrazione di Outlook:",
		admin_ms_enable_props_mapping: "Associa le proprietà Office alle proprietà del repository quando gli utenti:",
		admin_ms_open_doc_when_checkout: "Esegui automaticamente il check out di un documento quando viene aperto",
		admin_ms_open_doc_when_checkout_hover_help: "La selezione di questa opzione impedisce all'utente di sovrascrivere il file nel repository con una versione meno recente del file.",
		admin_ms_prompt_close_office: "Richiedi all'utente di registrare i documenti quando si chiudono le applicazioni Office",
		admin_ms_prompt_close_office_hover_help: "Selezionando questa opzione si evita che l'utente dimentichi di eseguire il check-in del proprio lavoro.",
		admin_ms_add_with_entry_template_only: "Visualizza solo l'azione Aggiungi con modello",
		admin_ms_delete_local_on_add: "Elimina file locali quando gli utenti aggiungono documenti",
		admin_ms_delete_local_on_checkin: "Elimina i file locali quando gli utenti eseguono il check in dei documenti o annullano il check out",
		admin_ms_delete_local_on_add_hover_help: "Quando un utente aggiunge un documento in IBM Content Navigator for Microsoft Office, questo viene aggiunto al repository e la copia locale del documento resta aperta in modo da consentire all'utente di eseguirne il check out per apportarvi le modifiche.<br /><br />Selezionare questa opzione per chiudere ed eliminare automaticamente la copia locale del documento dopo averlo aggiunto al repository.",
		admin_ms_delete_local_on_checkin_hover_help: "Quando un utente esegue il check in di un documento in IBM Content Navigator for Microsoft Office, questo viene inserito nel repository e la copia locale del documento resta aperta. Inoltre, una volta utilizzata l'azione annulla check-out, la copia locale del documento resta aperta. Con la copia locale del documento aperta, gli utenti possono eseguire immediatamente il check-out del documento ed apportarvi modifiche.<br /><br />Selezionare questa opzione per chiudere ed eliminare automaticamente la copia locale del documento dopo averne eseguito il check-in o utilizzato l'azione annulla check-out.",
		admin_ms_delete_local_on_save: "Salva un documento",
		admin_ms_prompt_for_props_on_add: "Richiedi agli utenti di fornire i valori delle proprietà quando aggiungono e-mail al repository",
		admin_ms_prompt_for_props_on_add_hover_help: "Se non si seleziona questa opzione, il client web utilizza l'associazione proprietà di Outlook definita per il repository.<br /><br />Se c'è un modello di immissione associato con la cartella a cui vengono aggiunte le e-mail, all'utente potrebbe non essere richiesta alcuna proprietà.",
		admin_ms_delete_email_on_add: "Elimina le e-mail dal server quando queste vengono aggiunte al repository",
		admin_ms_send_email_as_link_only: "Non consentire agli utenti di inviare documenti come allegati",
		admin_ms_send_email_as_link_only_hover_help: "Se si seleziona questa opzione, gli utenti potranno inviare i documenti come link da Outlook. Questa opzione assicura che solo gli utenti con le autorizzazioni appropriate sul repository potranno visualizzare i documenti.",
		admin_ms_enable_prop_mapping_for_add: "Associa le proprietà Office alle proprietà del repository quando gli utenti aggiungono o registrano documenti:",
		admin_ms_checkout_document_after_add: "Esegui il check out automatico dei documenti dopo che sono stati aggiunti al repository",
		admin_no_default_document_type_filtering: "Restituisce tutti i tipi di documento per impostazione predefinita quando gli utenti eseguono ricerche",
		admin_no_default_document_type_filtering_hover_help: "In IBM Content Navigator for Microsoft Office, la funzionalità predefinita prevede che gli utenti visualizzino solo il tipo di documento dell'applicazione corrente quando eseguono ricerche. Ad esempio, il tipo di documento Word viene selezionato per impostazione predefinita quando si effettua una ricerca da Microsoft Word.<br/><br/>Tuttavia, selezionando questa opzione di deselezionano le caselle di spunta dei tipi di documento in modo che gli utenti visualizzino tutti i documenti che vengono restituiti da una ricerca. Gli utenti possono sovrascrivere questa impostazione selezionando uno o più tipi di documento prima di eseguire le ricerche.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Specifica se associare le proprietà dei documenti definite per i documenti Microsoft Office alle proprietà definite sul repository.<br /></br /><b>Importante:</b> se si abilità questa funzione, è necessario configurare le proprietà di Office per ciascun repository nell'ambiente. Se non si associano le proprietà di Office alle proprietà del repository, questa funzione non funzionerà correttamente.<br /><br />Questa impostazione non è valida per Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Selezionare questa opzione per ridurre il numero di passi necessari all'utente per utilizzare i documenti dopo che sono stati aggiunti al repository.<br /></br /><b>Suggerimento:</b> Per assicurarsi che gli utenti effettuino il check in dei documenti nel repository, selezionare <b>Richiedi all'utente di registrare i documenti quando si chiudono le applicazioni Office</b>.",
		admin_ms_show_details_recently_used: "Mostra dettagli degli elementi <b>Usati di recente</b>",
		admin_ms_show_details_recently_used_hover_help: "Per impostazione predefinita, quando viene visualizzato l'elenco degli elementi Usati di recente, i dettagli degli elementi vengono nascosti, consentendo di visualizzare più elementi. Quando viene selezionata questa opzione, nell'elenco degli elementi Usati di recente, i dettagli vengono visualizzati per il primo documento nel riquadro dei dettagli per impostazione predefinita.",
		admin_ms_show_no_permissions_warning: "Mostra avvisi quando gli utenti modificano le proprietà o eseguono il check in di un documento ma non sono autorizzati a visualizzare il modello di immissione del documento.",
		admin_ms_show_no_permissions_warning_hover_help: "Se un documento nel repository è stato creato utilizzando un modello di immissione e l'utente non è autorizzato a visualizzare il modello di immissione del documento, quest'ultimo non viene richiamato.<br /><br/>Quindi, quando l'utente modifica le proprietà del documento, queste vengono visualizzate senza l'utilizzo del modello di immissione. Ed anche quando l'utente effettua il check in del documento questo viene effettuato senza l'utilizzo del modello di immissione.<br /><br />Per impostazione predefinita, tali azioni si verificano senza informare l'utente che il modello di immissione non viene utilizzato. Viene solo registrato un avviso nel file di log.<br /><br />Selezionare questa opzione se si desidera visualizzare gli avvisi che informano immediatamente l'utente quando il modello di immissione non viene utilizzato.",
		admin_ms_hide_search_actions: "Comprimi la sezione filtri di ricerca",
		admin_ms_hide_search_actions_hover_help: "Per impostazione predefinita gli utenti possono applicare un filtro azione per specificare un'azione, un utente o un gruppo di utenti e selezionare una data o un intervallo di date in cui si è verificata l'azione. Ad esempio, è possibile ricercare solo i documenti aggiunti nell'ultimo mese.<br /><br />Se non si desidera consentire agli utenti di applicare i filtri azione, selezionare questa opzione per nascondere i filtri azione e ridurre il numero di campi visualizzati nella definizione dei criteri di ricerca.",
		admin_ms_hide_save_document: "Nascondi l'opzione <b>Salva</b> nella barra multifunzione",
		admin_ms_hide_save_document_hover_help: "Utilizzando l'opzione <b>Salva</b>, è possibile salvare le modifiche del documento nel repository senza eseguire il check-in del documento.",
		admin_ms_indicate_managed_email_on_add: "Indica se una email è già stata aggiunta al repository",
		admin_ms_indicate_managed_email_on_add_hover_help: "La selezione di questa opzione consente agli utenti di sapere che una email è già nel repository, ricucendo quindi il numero di volte in cui una email viene aggiunta al repository.  Quando questa opzione è selezionata, viene creata una nuova categoria denominata IBM ECM in Microsoft Outlook. Ogni email che viene aggiunta al repository viene automaticamente aggiunta alla categoria Gestita in IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Opzioni Aggiungi nel gruppo Modifica:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Specifica le opzioni <b>Aggiungi</b> disponibili dal gruppo <b>Modifica</b> nella barra multifunzione:<ul><li>Selezionare <b>Mostra tutte le opzioni Aggiungi</b> per visualizzare il pulsante Aggiungi e tutte le azioni Aggiungi disponibili dal gruppo Modifica.</li><li>Selezionare <b>Nascondi tutte le opzioni Aggiungi</b> per impedire agli utenti di aggiungere documenti al repository o se si desidera che gli utenti aggiungano documenti solo dall'interno di uno spazio team.</li><li>Selezionare <b>Nascondi l'azione Aggiungi con modello</b> se si desidera applicare le associazioni della cartella modello di immissione e impedire agli utenti di selezionare un modello di immissione diverso.</li><li>Selezionare <b>Mostra solo l'azione Aggiungi con modello</b> se si desidera richiedere agli utenti di aggiungere documenti utilizzando modelli di immissione.</li></ul>",
		admin_ms_show_edit_group_add_button: "Mostra tutte le opzioni Aggiungi (impostazione predefinita)",
		admin_ms_hide_edit_group_add_button: "Nascondi tutte le opzioni Aggiungi",
		admin_ms_hide_add_with_entry_template: "Nascondi l'azione Aggiungi con modello",
		admin_ms_managed_in_ecm: "Gestito in IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Se gli utenti visualizzano le categorie in Microsoft Outlook, questa etichetta viene visualizzata per e-mail che è stata aggiunta a un repository IBM Content Manager o IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Il nome della categoria Gestiti in IBM ECM non può contenere una virgola (,) oppure un punto e virgola (;).",
		admin_delete_open_docs_after_close: "Elimina automaticamente i documenti aperti quando gli utenti chiudono i documenti",
		admin_admin_delete_open_docs_after_close_hover_help: "Quando un utente apre un documento in IBM Content Navigator for Microsoft Office, il documento viene scaricato nella directory dei documenti dell'utente o nell'ubicazione specificata dalle impostazioni di traccia file del desktop.<br><br>Selezionare questa opzione per eliminare i file che vengono aperti, ma non sottoposti a check out quando gli utenti li chiudono. La selezione di questa opzione consente di:<ul><li>Applicare la compatibilità con le politiche IT</li><li>Accertarsi che gli utenti lavorino con le ultime versioni dei documenti</li><li>Ridurre la quantità di spazio su disco che viene utilizzato per memorizzare i documenti</li><ul>",
		admin_ms_custom_command_configuration: "Comandi personalizzati:",
		admin_ms_custom_command_configuration_hover_help: "È possibile aggiungere alla barra degli strumenti di IBM Content Navigator for Microsoft Office nelle applicazioni Microsoft Office fino a quattro comandi. I comandi possono essere utilizzati per aprire gli URL. Ad esempio, è possibile aggiungere un comando per aprire un servizio che può essere utilizzato per effettuare la ricerca di utenti e gruppi.",
		admin_ms_custom_command_dialog_title: "Modifica del comando personalizzato",
		admin_ms_custom_command_dialog_intro_text: "Definire un comando che può essere utilizzato per aprire un URL dalla barra degli strumenti di IBM Content Navigator for Microsoft Office nelle applicazioni Microsoft Office.",
		admin_ms_custom_command_id: "Comando ${0}",
		admin_ms_custom_command_available_label: "Disponibile",
		admin_ms_custom_command_available_hover_help: "Se l'URL definito per un comando deve essere disattivato per manutenzione, è possibile deselezionare la casella di controllo del comando in modo che questo non venga visualizzato in Microsoft Office.<br/><br/><b>Importante:</b> gli utenti devono scollegarsi dal desktop per rendere effettive le modifiche in IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID comando",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etichetta",
		admin_ms_custom_command_label_hover_help: "Specificare l'etichetta da visualizzare per il comando in Microsoft Office.",
		admin_ms_custom_command_description_label: "Descrizione",
		admin_ms_custom_command_description_hover_help: "Specificare la descrizione da visualizzare per il comando in Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Specificare l'URL completo da aprire da Microsoft Office. L'URL può essere una pagina Web o un servizio.",
		admin_ms_custom_command_icon_label: "Icona",
		admin_ms_custom_command_icon_hover_help: "Specificare il nome file dell'icona da visualizzare, ad esempio, CommandIcon.png.<br/><br/><b>Importante:</b> È necessario aggiungere il file dell'icona dalla sottodirectory Plugins della directory di installazione di IBM Content Navigator per Microsoft Office su ogni macchina client.<br/><br/>Se il file dell'icona non si trova nella directory Plugins, o se non si specifica un'icona, viene visualizzata l'icona predefinita, customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Etichetta gruppo:",
		admin_ms_custom_command_group_name_hover_help: "È possibile specificare un'etichetta di gruppo da visualizzare al di sotto dei comandi personalizzati nella barra multifunzione.<br/><br/>Se non si specifica un'etichetta, l'etichetta del gruppo sarà <b>Comandi personalizzati</b>.",
		admin_ms_ribbon_tab_label: "Etichetta della scheda IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Immettere il nome che si desidera visualizzare per la scheda di IBM Content Navigator for Microsoft Office nella barra multifunzione di Microsoft Office. Se non si specifica un nome, la scheda sarà denominata \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Chiudere il riquadro attività quando gli utenti aprono i documenti",
		admin_ms_close_task_pane_on_open_hover_help: "Selezionare questa opzione se si desidera massimizzare lo spazio in cui gli utenti possono visualizzare i documenti in Microsoft Office.<br/><br/>Utenti Microsoft Office 2010: per garantire che il riquadro attività sia chiuso per tutti i documenti, abilitare la modalità MDI (Multiple Document Interface) selezionando <b>Opzioni</b> &gt; <b>Avanzate</b> e deselezionando l'opzione <b>Mostra tutte le finestre nella Barra delle applicazioni</b>.",
		admin_ms_open_document_options: "Opzioni di apertura del documento:",
		admin_ms_delete_local_file_options: "Opzioni di eliminazione del file locale:",
		admin_ms_add_and_checkin_options: "Opzioni di aggiunta e check-in:",
		admin_ms_search_options: "Opzioni di ricerca:",
		admin_ms_display_options: "Opzioni di visualizzazione:",
		admin_ms_bidirection_enable_label: "Abilita supporto per il testo bidirezionale",
		admin_ms_bidirection_enable_hover_help: "Selezionare questa opzione se si desidera consentire agli utenti di immettere o visualizzare testo in IBM Content Navigator for Microsoft Office in una direzione diversa da sinistra a destra.",
		admin_ms_text_direction_label: "Direzione di base del testo del contenuto:",
		admin_ms_text_direction_hover_help: "Specificare la direzione in cui il testo è immesso nei campi di input in IBM Content Navigator for Microsoft Office. Questa impostazione controlla anche in che modo vengono visualizzati elementi, come ad esempio, i nomi della cartella o i valori proprietà.",
		admin_ms_control_threshold_label: "Numero minimo di elementi necessari per abilitare la funzione look ahead:",
		admin_ms_control_threshold_hover_help: "Per impostazione predefinita, la funzione look ahead è abilitata quando il numero di elementi è maggiore o uguale a 50, per le proprietà di ricerca e di impostazione con valori predefiniti in un elenco a discesa. È possibile cambiare il valore minimo.",

		admin_ms_default_email_class: "Classe da utilizzare quando si aggiungono email",
		admin_ms_default_email_class_hover_help: "Ogni email aggiunta a questo repository da Microsoft Outlook verrà aggiunta alla classe specificata. Gli utenti non possono modificare la classe.",
		admin_ms_default_folder_class: "Classe da utilizzare quando si creano le cartelle",
		admin_ms_default_folder_class_hover_help: "Ogni cartella creata in questo repository da un'applicazione di Microsoft Office verrà aggiunta alla classe specificata.  Gli utenti non possono modificare la classe.",
		admin_ms_default_folder_warn_title: "Non è possibile utilizzare la classe ${0} come classe da utilizzare durante la creazione di cartelle.",
		admin_ms_default_folder_warn_name_prop_invalid: "La proprietà nome della classe non è una stringa, mentre il nome della cartella deve essere una stringa.<br />Selezionare una classe differente da utilizzare durante la creazione di cartelle oppure collaborare con il proprio amministratore IBM Content Manager per modificare la proprietà nome della classe in una stringa.",
		admin_ms_default_folder_warn_req_props: "La classe include le proprietà richieste che non hanno valori. Tuttavia, gli utenti non possono specificare i valori per le proprietà richieste quando creano cartelle da IBM Content Navigator for Microsoft Office.<br />Selezionare una classe differente da utilizzare durante la creazione di cartelle oppure collaborare con il proprio amministratore IBM Content Manager per rendere facoltative le proprietà richieste o per pre-compilare le proprietà richieste con un valore.",
		admin_ms_delimiter_for_office_properties: "Delimitatore per le proprietà stringa multi valore",
		admin_ms_delimiter_for_office_properties_hover_help: "Specificare il carattere da utilizzare come delimitatore delle proprietà stringa che si stanno associando alle proprietà stringa multi valore. Per impostazione predefinita, è possibile assegnare una serie di valori ad una proprietà stringa multi valore utilizzando il punto e virgola (;) come delimitatore per separare i valori. Tuttavia se uno dei valori stringa include un punto e virgola, non è possibile aggiungere tale valore stringa a meno che non si cambi il delimitatore in un carattere diverso. Ad esempio, è possibile cambiarlo in virgola (,)",
		admin_ms_outlookPropertyRemembrance : "Ricordare le impostazioni quando si aggiungono i messaggi e gli allegati.",
		admin_ms_outlookPropertyRemembrance_hover_help : "I valori proprietà, la posizione, la selezione della classe e la protezione assegnati ai messaggi ed allegati sono ricordati ed utilizzati come impostazioni predefinite quando vengono aggiunti elementi in futuro.",

		admin_file_type_name_hover_help: "Guida a comparsa Nome",
		admin_file_type_description_hover_help: "Guida a comparsa Descrizione",
		admin_file_type_dialog_title: "Modifica filtro tipo di file",
		admin_new_file_type_dialog_title: "Nuovo filtro tipo di file",
		admin_mobile_feature_dialog_title: "Funzione",
		admin_mobile_feature_dialog_new_title: "Nuova funzione",
		admin_file_type_instructions: "Creare un filtro utilizzabile dagli utenti per ridurre l'elenco di risultati della ricerca. È possibile associare più tipi MIME al filtro.",
		admin_file_type_filter_place_holder: "Filtra tipi MIME",
		admin_new_button_label: "Nuovo",
		admin_edit_button_label: "Modifica",
		admin_delete_button_label: "Elimina",
		admin_copy_button_label: "Copia",
		admin_verify_button_label: "Verifica",
		admin_availabe_filters_label: "Filtri disponibili",
		admin_selected_filters_label: "Filtri selezionati",

		admin_mobile_access: "Accesso applicazione mobile:",
		admin_mobile_access_hover_help: "Se si desidera utilizzare IBM Content Navigator da un dispositivo mobile, si consiglia di abilitare l'accesso degli utenti a questo desktop dall'applicazione mobile.<br /><br />Se si disabilita l'accesso a questo desktop da un'applicazione mobile, gli utenti potranno ancora accedere al client web dal proprio browser mobile. Tuttavia, il client Web non è progettato per essere acceduto da dispositivi mobili.",

		admin_mobile_access_allow_label: "Consenti agli utenti di:",
		admin_mobile_allow_add_photos: "Aggiungere foto dalla macchina fotografica e dalla libreria di foto",
		admin_mobile_allow_add_docs: "Aggiungere documenti e creare cartelle nel repository",
		admin_mobile_allow_open_docs: "Aprire documenti in altre applicazioni",
		admin_mobile_allow_add_docs_hover_help: "Gli utenti possono creare cartelle o aggiungere documenti da altre applicazioni mobili, come ad esempio un documento allegato ad una email.",
		admin_mobile_allow_open_docs_hover_help: "Agli utenti viene richiesto di selezionare l'applicazione da utilizzare per visualizzare il documento selezionato. Se è disponibile un'unica applicazione, tale applicazione verrà utilizzata.",
		admin_mobile_features: "Funzioni:",
		admin_mobile_features_hover_help: "Specificare le funzioni di questo desktop da visualizzare nell'applicazione mobile IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nuova funzione",
		admin_mobile_move_up_button_label: "Sposta su",
		admin_mobile_move_down_button_label: "Sposta giù",
		admin_desktop_mobile_instructions: "Inserire qui le istruzioni di impostazione dell'applicazione portatile",
		admin_desktop_max_number_of_docs_to_add: "Numero massimo di documenti da aggiungere:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Specificare il numero massimo di documenti che gli utenti possono aggiungere ogni volta. Il numero massimo predefinito è 50. Tuttavia, è possibile impostare il numero massimo fino a 300.",
		admin_desktop_max_number_of_docs_to_modify: "Numero massimo di elementi da modificare:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Specificare il numero massimo di elementi che gli utenti possono modificare ogni volta. Il numero massimo predefinito è 50. Tuttavia, è possibile impostare il numero massimo fino a 300.",
		admin_desktop_max_conversion_size: "Numero massimo di dati per le conversioni PDF (in MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Limitazione:</b> questa impostazione non è supportata in IBM Content Manager OnDemand.<br/><br/>Specificare la quantità massima di dati che può essere convertita in PDF. Questo limite si applica quando gli utenti eseguono il download di elementi come file PDF o inviano elementi mediante e-mail come file PDF.<br /><br />Se non è possibile determinare la dimensione di ogni documento, i documenti vengono ancora convertiti in PDF.<br/><br/>Il limite predefinito è 200 MB. L'impostazione del limite al di sopra di 200 MB potrebbe influire sulle prestazioni del sistema.",
		admin_desktop_timeProperties: "Data/ora:",
		admin_desktop_time_properties_hover_help: "<b>Solo utenti IBM FileNet P8:</b> questa impostazione si applica alle proprietà personalizzate e non si applica alle proprietà di sistema. Ad esempio, la proprietà Modificato da mostrerà ancora la porzione relativa all'ora della data/ora se si seleziona <b>Visualizza solo la porzione relativa alla data della data/ora</b>.<br/><br/>Questa impostazione non modifica la data/ora nel repository.",
		admin_desktop_disable_time_stamp: "Visualizza la data/ora completa",
		admin_desktop_enable_time_stamp: "Visualizza solo la porzione relativa alla data della data/ora.",
		admin_desktop_timezone: "Fuso orario:",
		admin_desktop_timezone_localuser: "Visualizza il fuso orario locale dell'utente",
		admin_desktop_timezone_alluser: "Visualizza lo stesso fuso orario per tutti gli utenti",
		admin_desktop_timezone_hover_help: "È possibile specificare se gli utenti vedono una data/ora basata sul fuso orario locale o se tutti gli utenti vedono la stessa data/ora.<br/><br/>Questa impostazione non modifica la data/ora nel repository. Tuttavia, l'impostazione che si seleziona determina il fuso orario che è utilizzato per creare la data/ora nel repository quando gli utenti aggiungono o modificano elementi.",
		admin_desktop_mobile_feature_display_label: "Visualizzazione",
		admin_desktop_mobile_feature_icon_file_label: "File icona",
		admin_mobile_feature_dialog_icon_file_label: "File icona:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nome",
		admin_desktop_mobile_select_feature_label: "Seleziona funzione",
		admin_desktop_mobile_feature_icon_label: "Icona funzione",
		admin_desktop_share_admin_none: "Amministratore non impostato.",
		admin_desktop_share_admin_edit_label: "Imposta amministratore...",
		admin_browse_icon: "Icona Sfoglia",
		admin_search_icon: "Icona Cerca",
		admin_favorites_icon: "Icona Favoriti",
		admin_casesearch_icon: "Icona maiuscole/minuscole",
		admin_datacap_icon: "Icona Datacap",
		admin_system_defined: "Definito dal sistema",
		admin_icon_file_placeholder_text: "Posizione file (ad esempio, http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Root",
		admin_folder_default: "Default",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Barre degli strumenti",
		admin_menu_context_menus: "Menu di scelta rapida",
		admin_menu_office_toolbars: "Comandi della barra multifunzione di Microsoft Office",
		admin_menu_office_menus: "Menu di scelta rapida di Microsoft Office",

		admin_file_name_label: "Nome file:",
		admin_exportconfiguration_security_label: "Includi utenti e gruppi autorizzati ad utilizzare questo desktop",
		admin_exportconfiguration_instruction: "È possibile esportare i desktop, incluse le configurazioni dei repository e dei plug-in associati ai desktop selezionati, in un file che è possibile importare su un'altra istanza di IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Esporta desktop",
		admin_exportconfiguration_button_label: "Esporta",
		admin_dialog_select_all: "Seleziona tutto",
		admin_dialog_deselect_all: "Elimina tutto",

		admin_importconfiguration_instruction: "Gli elementi nel file di configurazione selezionato verranno importati su questo sistema. Tuttavia, se sul sistema esiste già un elemento con lo stesso ID, è necessario decidere se conservare o sovrascrivere l'elemento.",
		admin_importconfiguration_dialog_label: "Importa desktop",
		admin_importconfiguration_reason_dialog_label: "Importa motivi di redazione",
		admin_importconfiguration_button_label: "Importa",
		admin_to_be_imported: "Elemento di configurazione da importare",
		admin_on_target_system: "Elementi esistenti sul sistema di destinazione",
		admin_import_short_warning_message: "I seguenti elementi esistono già su questo sistema. Selezionare gli elementi che si desidera sostituire su questo sistema:",
		admin_import_warning_message: "I seguenti elementi di configurazione hanno gli stessi ID degli elementi presenti sul sistema di destinazione. Selezionare solo quegli elementi che si desidera importare e sovrascrivere sul sistema di destinazione.<br /><br />Se non si desidera sovrascrivere un elemento di configurazione, creare una copia dell'elemento sull'istanza da cui il desktop è stato esportato, fornirgli un ID differente e associarlo al desktop. Esportare di nuovo il desktop ed importare poi il desktop su questa istanza.",
		admin_choose_file_to_import_label: "Scegli file per importazione:",
		admin_download_imported_log: "Scarica report",
		admin_desktop_import_summary: "Riepilogo di importazioni desktop",
		admin_reason_import_summary: "Riepilogo importazione motivo di redazione",
		admin_rba_import_summary: "Riepilogo importazione ruolo di amministrazione",
		admin_import_open_tabs_checking: "Prima di poter importare i desktop, è necessario chiudere nello strumento di amministrazione tutte le schede tranne la scheda <bold>Desktop</bold>.",
		admin_import_no_conflict: "I seguenti elementi verranno importati:",
		admin_desktop_invalid: "Desktop non valido",
		admin_desktop_warning: "Il desktop è stato salvato con avvisi.",
		admin_repos_warning: "Il repository è stato salvato con avvisi.",
		admin_config_type_icon: "Icona tipo di elemento di configurazione",

		admin_approval_workflow: "Flusso di lavoro di approvazione",
		admin_approval_workflow_hover: "Consente agli utenti di avviare un flusso di lavoro di approvazione predefinito. È possibile disabilitare il flusso di lavoro di approvazione per consentire agli utenti di avviare un flusso di lavoro di approvazione personalizzato definito mediante una sottoscrizione. Per impostazione predefinita, il flusso di lavoro di approvazione è abilitato.<br><br><b>Importante:</b> se si abilita il flusso di lavoro di approvazione, è necessario anche verificare che una o entrambe le definizioni del flusso di lavoro predefinite (ICNParallelDocumentApproval.pep e ICNSequentialDocumentApproval.pep) siano aggiunte al repository e trasferite in Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Non è possibile specificare gli utenti e i gruppi che dispongono dell'accesso a questo desktop.",
		admin_cannot_add_desktop_members_error_explanation: "Non si dispone dei permessi appropriati per richiamare le informazioni sull'utente e sul gruppo.",
		admin_cannot_add_desktop_members_error_userResponse: "Collegarsi con un nome utente differente oppure richiedere al proprio amministratore di sistema IBM Content Manager di concedere il privilegio UserACLOwner richiesto per richiamare le informazioni sull'utente e sul gruppo.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Non è possibile selezionare utenti e gruppi.",
		admin_cannot_select_users_groups_error_explanation: "Non si dispone dei permessi appropriati per richiamare le informazioni sull'utente e sul gruppo.",
		admin_cannot_select_users_groups_error_userResponse: "Collegarsi con un nome utente differente oppure richiedere al proprio amministratore di sistema IBM Content Manager di concedere il privilegio UserACLOwner richiesto per richiamare le informazioni sull'utente e sul gruppo.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Impossibile trovare il client OAuth2.",
		oauth_client_not_found_error_explanation: "Impossibile trovare l'ID client OAuth2 ${0}.",
		oauth_client_not_found_error_userResponse: "Contattare l'amministratore di sistema ed informarlo che non è stato trovato l'ID client OAuth2.",
		oauth_client_not_found_error_adminResponse: "Controllare la configurazione del repository e verificare che contenga l'ID client OAuth2 corretto.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Accesso al repository non riuscito.",
		oauth_login_failed_error_explanation: "Il tentativo di accedere al repository ${0} non è riuscito.",
		oauth_login_failed_error_userResponse: "Verificare che l'ID utente e la password specificati siano corretti, e tentare nuovamente l'accesso.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Si è verificato un errore nel tentativo di accedere in ${0}.",
		oauth_error_return_error_explanation: "Il tentativo di autorizzazione ${0} non è riuscito.",
		oauth_error_return_error_userResponse: "Contattare l'amministratore di sistema fornendo le seguenti informazioni: Il tentativo di autorizzazione ${0} non è riuscito ed ha restituito il seguente messaggio di errore: <br>${1}<br><b>errore:</b> ${2}.<br><b>descrizione:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Ulteriori informazioni sull'errore si trovano nei file di log del server delle applicazioni Web.  Per ulteriori informazioni sui file di log, consultare &quot;File di log di IBM Content Navigator&quot; in IBM Knowledge Center. Utilizzando le informazioni sul tentativo di autorizzazione ${0}, tentare di correggere il problema e verificare che OAuth2 sia abilitato.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Applicazione di destinazione OAuth",
		oauth_error_return_error_1: "messaggio_errore",
		oauth_error_return_error_2: "errore",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Messaggio di errore OAuth non riconosciuto.",

		delete_share_permission_error: "La condivisione non è stata eliminata.",
		delete_share_permission_error_explanation: "Non si dispone dei permessi appropriati per eliminare la condivisione.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Non è possibile condividere questo elemento.",
		class_not_support_share_error_explanation: "La classe ${0} non è stata impostata per supportare la condivisione.",
		class_not_support_share_error_0: "nome_classe",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Non è possibile condividere questo elemento.",
		rbr_not_support_share_error_explanation: "All'elemento è stato aggiunto del contenuto sensibile.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Il dispositivo da cui l'utente sta tentando di accedere non è autorizzato ad accedere all'account utente.",
		box_oauth_error_invalid_request: "Nella richiesta manca un parametro obbligatorio, è presente un valore di parametro non valido, è presente un parametro ripetuto oppure non è corretta per un altro motivo.",
		box_oauth_error_unsupported_response_type: "Il server di autorizzazione non consente di ottenere un codice di autorizzazione utilizzando questo metodo.  Controllare il valore del parametro codice nella richiesta.",
		box_oauth_error_access_denied: "Il proprietario della risorsa o il server di autorizzazione ha rifiutato la richiesta.",
		box_oauth_error_temporarily_unavailable: "Il dispositivo dell'utente viene limitato nella frequenza, è necessario diminuire la frequenza delle richieste di autorizzazione o attendere.",
		box_oauth_error_unknown: "Messaggio di errore Box non riconosciuto.",

		admin_default_search_type: "Tipo di ricerca predefinito",
		admin_default_search_type_hover: "Specificare quale opzione è selezionata per impostazione predefinita nel campo <b>Ricerca</b> nel menu <b>Opzioni di ricerca</b>.",
		admin_default_search_type_documents: "Documenti",
		admin_default_search_type_folders: "Cartelle",
		admin_default_search_type_folders_and_documents: "Documenti e cartelle",

		admin_restricted_search_type: "Consenti ricerca in",
		admin_restricted_search_type_hover: "Per impostazione predefinita gli utenti possono effettuare ricerche sia nei documenti che nelle cartelle. Se si desidera nascondere una opzione di ricerca e limitare le ricerche ai soli documenti, selezionare Documenti e deselezionare Cartelle.</br></br> Se si consentono le ricerche su documenti e cartelle, selezionare l'opzione predefinita quando viene aperto il riquadro della ricerca.",
		admin_restricted_search_type_documents: "Documenti",
		admin_restricted_search_type_folders: "Cartelle",
		admin_restricted_search_type_folders_and_documents: "Documenti e cartelle",

		admin_default_search_version: "Versione di ricerca predefinita",
		admin_default_search_version_hover: "Specificare quale opzione è selezionata per impostazione predefinita nel campo <b>Versione</b> nel menu <b>Opzioni di ricerca</b>.",

		admin_all_classes_search: "Cerca tutte le classi",
		admin_all_classes_search_hover: "Specifica che agli utenti è consentito effettuare ricerche in tutte le classi ed in tal caso cosa includere nelle ricerche nei documenti.",
		admin_all_classes_search_removed_hover: "Le opzioni per la ricerca in tutte le classi non sono disponibili perché il parametro context-param allPseudoClassHidden nel web.xml dell'applicazione Navigator è impostata su true.",
		admin_all_classes_search_hide: "Rimuovi l'opzione per la ricerca in tutte le classi",
		admin_all_classes_search_documents_only_documents: "Una ricerca nei documenti include solo documenti, le ricerche salvate ed i modelli di immissione",
		admin_all_classes_search_documents_non_folders: "Una ricerca nei documenti include qualsiasi elemento che non sia cartella",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Vista della struttura:",
		admin_feature_config_tree_view_hoverhelp: "Specifica se gli utenti possono accedere all'elenco di cartelle nel repository mediante il pannello Sfoglia. Se si nasconde il pannello Sfoglia, gli utenti devono utilizzare l'elenco del contenuto per spostarsi tra le cartelle nel repository.",
		admin_feature_config_selected_repositories_label: "Repository:",
		admin_feature_config_selected_repositories_hoverhelp: "Selezionare i repository a cui gli utenti possono accedere in questa funzione.",
		admin_feature_config_selected_repositories_select_state_hdr: "Seleziona repository",
		admin_feature_config_selected_repositories_name_hdr: "Nome repository",
		admin_feature_config_selected_repositories_show_hdr: "Mostra",
		admin_feature_config_invalid_icon_title: "La funzione non ha alcune impostazioni obbligatorie",
		admin_feature_config_view_select_hdr: "Seleziona vista",
		admin_feature_config_view_hdr: "Visualizza",
		admin_feature_config_view: "Visualizza",
		admin_feature_config_views: "Viste:",
		admin_feature_config_views_hoverhelp: "Specificare quali viste possono essere utilizzate dagli utenti per l'elenco contenuti. Le viste vengono visualizzate nell'ordine in cui vengono elencate. La prima vista selezionata è la vista predefinita per la funzione.<br><br><b>Importante:</b> se si abilita la vista a sequenza, è necessario configurare il visualizzatore di conversione HTML per visualizzare le anteprime del documento.",

		admin_custom_dialog_name: "Nome:",
		admin_custom_dialog_value: "Valore:",
		admin_custom_setting_name_hover: "Immettere il nome dell'impostazione Daeja ViewONE che si desidera aggiungere alla configurazione. Consultare la documentazione Daeja ViewONE per ulteriori informazioni relative alle impostazioni della configurazione.",
		admin_custom_setting_value_hover: "Immettere il valore che si desidera utilizzare per l'impostazione di configurazione Daeja ViewONE. Consultare la documentazione Daeja ViewONE per ulteriori informazioni relative ai valori validi per l'impostazione di configurazione.",

		entry_template_name_required_message: "Il campo nome nelle Impostazioni del modello di immissione è obbligatorio.",
		entry_template_name_invalid_message: "Il campo nome nelle Impostazioni del modello di immissione non può contenere i seguenti caratteri: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Quando determinati utenti e gruppi vengono selezionati per il campo 'Condividi con' nelle Impostazioni del modello di immissione, è necessario specificare almeno un utente o gruppo.",
		entry_template_no_permission_to_save_to_teamspace_message: "Non si dispone delle autorizzazioni per aggiungere i modelli di immissione allo spazio team (${0}) che è stato selezionato dal campo 'Salva in' nelle Impostazioni del modello di immissione.",
		entry_template_save_in_destination_required_message: "È necessario specificare una posizione predefinita Salva in nella sezione <b>Imposta percorso di memorizzazione elemento</b>.",
		entry_template_save_in_destination_must_select_folder: "Se si nasconde il campo <b>Salva in</b> e si richiede agli utenti di aggiungere nuovi elementi ad una cartella, è necessario selezionare una cartella nel campo <b>Posizione predefinita Salva in</b> nella sezione <b>Imposta percorso di memorizzazione elemento</b>.",
		entry_template_what_to_save_required_message: "Selezionare almeno un'opzione per 'Specificare l'elemento da salvare' in Imposta opzioni.",
		entry_template_custom_workflow_empty_message: "Se si seleziona <b>Personalizza flusso di lavoro...</b>, è necessario ricercare e selezionare il flusso di lavoro che si desidera utilizzare.",

		entry_template_new: "Nuovo modello di immissione",
		entry_template_name_hover: "Il nome del modello di immissione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Il nome del modello di immissione non può contenere nessuno dei seguenti caratteri: * \\ / : ? \" < > |",
		entry_template_description_hover: "Fornire una descrizione che consentirà agli utenti di distinguere questo modello di immissione dagli altri modelli di immissione.",
		entry_tempalte_save_in_hover: "Specificare dove salvare il modello di immissione.<br><br><b>Limitazione:</b> se si salva il modello di immissione in uno spazio team, è possibile utilizzare il modello di immissione solo all'interno dello spazio team.",
		entry_template_inherit_hover: "Se si seleziona questa opzione, le impostazioni di sicurezza per la cartella padre vengono aggiunte all'elenco di utenti e gruppi con cui è condiviso il modello di immissione.",
		entry_template_builder_aria_label: "Programma di creazione del Modello di immissione",
		entry_template_builder_layout_aria_label: "Programma di creazione delle proprietà del Modello di immissione",

		entry_template_settings_document: "Definire il modello di immissione",
		entry_template_settings_folder: "Imposta il percorso di memorizzazione dell'elemento",
		entry_template_settings_folder_intro: "Specificare dove vengono memorizzati gli elementi che vengono aggiunti utilizzando questo modello di immissione.",
		entry_template_settings_properties: "Imposta le proprietà dell'elemento",
		entry_template_settings_properties_intro: "È possibile specificare valori predefiniti per gli elementi che vengono aggiunti utilizzando questo modello di immissione. Inoltre, è possibile modificare il layout delle proprietà per controllare quali proprietà sono visualizzate e l'ordine in cui sono visualizzate.",
		entry_template_settings_workflow: "Configura un flusso di lavoro per l'elemento",
		entty_template_settings_workflow_intro: "È possibile specificare se viene avviato un flusso di lavoro quando vengono aggiunti gli elementi utilizzando il modello di immissione.",
		entry_template_settings_security: "Imposta la sicurezza dell'elemento",
		entry_template_settings_security_intro: "È possibile specificare la protezione predefinita per gli elementi che vengono aggiunti utilizzando questo modello di immissione. Gli utenti con le autorizzazioni appropriate potrebbero essere in grado di modificare la protezione dell'elemento una volta che questo è stato aggiunto.",
		entry_template_settings_options: "Imposta le opzioni dell'elemento",
		entry_template_xt_warning: "Salvando le modifiche in questo modello di immissione lo si convertirà da un modello di immissione IBM Workplace XT in un modello di immissione IBM Content Navigator. IBM Workplace XT non supporta i modelli di immissione IBM Content Navigator.",

		entry_template_properties_edit_layout: "Modifica Layout...",
		entry_template_properties_read_only: "Sola lettura",
		entry_template_properties_hidden: "Nascosta",

		entry_template_destination_show: "Mostra il campo <b>Salva in</b>",
		entry_template_destination_show_hover: "Se si visualizza il campo <b>Salva in </b>, gli utenti possono modificare dove memorizzare gli elementi.",
		entry_template_destination_hide: "Nascondi il campo <b>Salva in</b>",
		entry_template_destination_hide_hover: "Se si nasconde il campo <b>Salva in </b>, gli utenti non possono modificare dove memorizzare gli elementi.",
		entry_template_folder_save_in_default: "Posizione <b>Salva in</b> predefinita:",
		entry_template_folder_save_in_default_hover: "Specificare la posizione predefinita in cui vengono aggiunti gli elementi utilizzando questo modello di immissione.<br><br>La posizione predefinita che si seleziona impone limitazioni nel comportamento runtime del modello di immissione.<ul><li>Gli utenti non possono selezionare un diverso repository.</li><li>Se la posizione predefinita è uno spazio team, gli utenti non possono selezionare un diverso spazio team.</li></ul>Tuttavia, se gli utenti associano questo modello di immissione ad una cartella, gli utenti possono sovrascrivere il percorso di memorizzazione che è configurato per questo modello di immissione.",
		entry_template_folder_restrict_choice: "Richiedi agli utenti di aggiungere elementi alla posizione predefinita o una cartella secondaria della posizione predefinita",
		entry_template_folder_file_in_required: "Richiedi agli utenti di aggiungere nuovi elementi ad una cartella",
		entry_template_folder_file_in_required_hover: "Se non si seleziona questa opzione, gli utenti possono aggiungere elementi alla cartella principale del repository.<br><br><b>Limitazione:</b> la configurazione del desktop potrebbe richiedere agli utenti di selezionare una cartella.",

		entry_template_document_type_show: "Mostra il campo <b>Specificare l'elemento da salvare</b>",
		entry_template_document_type_show_hover: "Se si visualizza il campo <b>Cosa desideri salvare</b>, gli elementi che si selezionano vengono visualizzati come opzioni nel campo <b>Cosa desideri salvare</b>.",
		entry_template_document_type_hide: "Nascondi il campo <b>Specificare l'elemento da salvare</b>",
		entry_template_document_type_hide_hover: "Se si nasconde il campo <b>Cosa desideri salvare</b>, il tipo di documento che si seleziona è sempre utilizzato quando gli utenti aggiungono documenti utilizzando questo modello di immissione.",
		entry_template_document_type: "Questo modello di immissione può essere utilizzato per aggiungere i seguenti elementi:",
		entry_template_document_type_hover: "Se si visualizza il campo <b>Cosa desideri salvare</b>, gli elementi che si selezionano vengono visualizzati come opzioni nel campo <b>Cosa desideri salvare</b>.<br><br>Se si nasconde il campo <b>Cosa desideri salvare</b>, il tipo di documento che si seleziona è sempre utilizzato quando gli utenti aggiungono documenti utilizzando questo modello di immissione.",

		entry_template_misc: "Opzioni aggiuntive:",
		entry_template_auto_classify_show: "Classifica automaticamente i contenuti del documento",
		entry_template_auto_classify_show_hover: "Quando un documento viene classificato in FileNet Content Manager, i contenuti del documento vengono esaminati per determinare la classe appropriata e i valori proprietà per il documento.<br><br>Chiedere all'amministratore di sistema di determinare se la classificazione dei contenuti è abilitata in Content Platform Engine.<br><br>Se si abilita questa opzione, la classe e proprietà del documento potrebbe essere modificata quando l'utente aggiunge il documento al repository.",
		entry_template_allow_duplicate_file_names: "Consenti documenti con nomi file duplicati",
		entry_template_allow_duplicate_file_names_hover: "Per impostazione predefinita, è possibile aggiungere documenti con lo stesso nome ad una cartella in FileNet Content Manager. È possibile deselezionare questa opzione se si desidera che ciascun file nel percorso di memorizzazione selezionato abbia un nome univoco.",
		entry_template_allow_compound_documents: "Consenti a questo documento di essere il documento padre di un documento composto",
		entry_template_version_show: "Visualizza le opzioni di versione per l'aggiunta ed il check in",
		entry_template_version_hide: "Nascondi le opzioni di versione per l'aggiunta ed il check in",
		entry_template_version_to_add_as: "Versione predefinita da aggiungere come:",
		entry_template_version_default: "Opzione versione predefinita:",
		entry_template_version_default_checked: "Versione principale",
		entry_template_version_default_unchecked: "Versione secondaria",
		entry_template_version_display: "Versione documento:",
		entry_template_version_display_show: "Mostra",
		entry_template_version_display_hide: "Nascondi",
		entry_template_version_default_add: "Versione predefinita da aggiungere come:",

		entry_template_checkin_version_show: "Visualizza le opzioni di versione per check in",
		entry_template_checkin_version_hide: "Nascondi le opzioni di versione per check in",

		entry_template_checkin_version_message_no_versions: "La politica della versione della classe selezionata impedisce agli utenti di effettuare il check-in in una nuova versione del documento.",
		entry_template_checkin_version_message_always_version: "La politica della versione della classe selezionata impedisce agli utenti di sostituire la versione corrente del documento.",

		entry_template_applied: "Utilizza questo modello di immissione quando gli utenti:",
		entry_template_applied_add: "Aggiungi documenti (obbligatorio)",
		entry_template_applied_add_folder: "Crea cartelle (obbligatorio)",
		entry_template_applied_checkin: "Archivia",
		entry_template_applied_properties_group: "Visualizza o modifica proprietà:",
		entry_template_applied_properties: "Nella finestra Proprietà",
		entry_template_applied_viewer: "Nel visualizzatore dell'applet",
		entry_template_applied_docinfo: "Nel riquadro Informazioni documento",
		entry_template_applied_no_class_support: "Questo modello di immissione può essere utilizzato per aggiungere elementi, ma non può essere utilizzato per sottoporre i documenti a check in o visualizzare e modificare proprietà. La classe selezionata deve essere modificata per supportare queste situazioni. Se è necessario, in queste situazioni, utilizzare il modello di immissione, richiedere all'amministratore di utilizzare lo strumento di amministrazione per modificare la classe in modo che possa memorizzare gli ID del modello di immissione.",
		entry_template_applied_no_child_component_support: "La classe selezionata ha componenti secondari, mentre un layout delle proprietà è definito. I layout delle proprietà non supportano i componenti secondari. I componenti secondari non verranno visualizzati all'utente.",
		entry_template_applied_child_component: "La classe selezionata ha componenti secondari. Tali componenti verranno visualizzati all'utente, ma non è possibile configurare i componenti secondari in questo modello di immissione.",

		entry_template_properties_show: "Visualizza la sezione <b>Proprietà</b>",
		entry_tempalte_properties_show_hover: "Se si visualizza la sezione <b>Proprietà</b>, gli utenti possono modificare i valori proprietà che sono visualizzati nel modello di immissione e che non sono proprietà di sola lettura.",
		entry_template_properties_hide: "Nascondi la sezione <b>Proprietà</b>",
		entry_template_properties_hide_hover: "Se si nasconde la sezione  <b>Proprietà</b>, gli utenti non possono modificare i valori proprietà. Il modello di immissione deve definire tutti i valori che si desidera utilizzare quando vengono aggiunti gli elementi utilizzando questo modello di immissione.",

		entry_template_security_show: "Visualizza la sezione <b>Sicurezza</b>",
		entry_template_security_show_hover: "Se si visualizza la sezione <b>Sicurezza</b>, gli utenti che dispongono delle autorizzazioni appropriate possono modificare la protezione dell'elemento.",
		entry_template_security_hide: "Nascondi la sezione <b>Sicurezza</b>",
		entry_template_security_hide_hover: "Se si nasconde la sezione <b>Sicurezza</b>, gli utenti non possono modificare la protezione degli elementi. Il modello di immissione deve definire tutte le impostazioni di sicurezza che si desidera utilizzare quando vengono aggiunti o modificati gli elementi.",
		entry_template_security_policy: "Criterio di protezione:",
		entry_template_security_policy_hover: "A seconda del criterio di protezione che si seleziona, il criterio di protezione può:<br><ul><li>sovrascrivere le autorizzazioni che sono specificate in <b>Imposta protezione elemento</b>.</li><li>Aggiungere le autorizzazioni che sono specificate in <b>Imposta protezione elemento</b>.</li></ul>",
		entry_template_security_policy_none: "Nessun criterio di protezione selezionato",
		entry_template_security_inherit: "Eredita le impostazioni di sicurezza dalla cartella padre",
		entry_tempalte_save_in_hover: "Specificare dove salvare il modello di immissione.<br><br><b>Limitazione:</b> se si salva il modello di immissione in uno spazio team, è possibile utilizzare il modello di immissione solo all'interno dello spazio team.",
		entry_template_security_inherit_item_security_hover: "Se si seleziona questa opzione, le impostazioni di sicurezza per la cartella padre vengono aggiunte alle impostazioni di sicurezza che sono definite da uno dei seguenti elementi:<ul><li>la classe specificata nella sezione <b>Imposta proprietà elemento</b></li><li>La protezione personalizzata che si è specificata nella sezione <b>Imposta protezione elemento</b></li></ul>",
		entry_template_security_change: "Sovrascrivi la sicurezza definita dalla classe selezionata",
		entry_template_security_change_hover: "Se si seleziona questa opzione, le impostazioni di sicurezza che sono definite per la classe sono visualizzate per impostazione predefinita. È possibile, quindi, modificare le impostazioni di sicurezza per il modello di immissione.<br><br>Se si visualizza la sezione <b>Sicurezza</b>, gli utenti che dispongono delle autorizzazioni appropriate possono modificare la protezione dell'elemento.<br><br>Se si seleziona questa opzione e si sceglie di ereditare le impostazioni di sicurezza dalla cartella padre, qualsiasi autorizzazione ereditabile verrà aggiunta alla protezione che si specifica.",
		entry_template_security_default_item_security: "Sovrascrivi l'elemento predefinito di sicurezza dell'utente che aggiunge l'elemento",
		entry_template_security_policy_message_override: "La politica di sicurezza selezionata è stata configurata per sovrascrivere le autorizzazioni specificate in Imposta sicurezza.",
		entry_template_security_policy_message_add: "La politica di sicurezza selezionata è stata configurata per aggiungere autorizzazioni a quelle specificate in Imposta sicurezza.",
		entry_template_security_policy_preserve_true_hover: "Mantiene le autorizzazioni dirette",
		entry_template_security_policy_preserve_false_hover: "Non mantiene le autorizzazioni dirette",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Ruoli specifici",
		entry_template_security_class_role_search_title: "Cerca ruoli:",
		entry_template_secuirty_class_member_title: "Elenco membri per ${0}",
		entry_template_secuirty_class_folder_only: "Questa autorizzazione si applica solo a questa cartella",
		entry_template_secuirty_class_folder_and_immediate_children: "Queste autorizzazioni vengono applicate a questa cartella ed agli elementi figlio immediati configurati in modo da ereditare la sicurezza da questa cartella.",
		entry_template_secuirty_class_folder_and_all_children: "Queste autorizzazioni vengono applicate a questo cartella ed a tutti gli elementi discendenti configurati in modo da ereditare la sicurezza da questa cartella. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Queste autorizzazioni vengono applicate agli elementi figlio immediati configurati in modo da ereditare la sicurezza da questa cartella.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Queste autorizzazioni vengono applicate a tutti gli elementi discendenti configurati in modo da ereditare la sicurezza da questa cartella.",

		entry_template_class_security_message_no_override: "La sicurezza della classe selezionata impedisce agli utenti di sovrascrivere la sicurezza.",
		entry_template_class_security_required_privileges: "<b>Importante</b>: Quando si sovrascrive la protezione della classe selezionata, gli utenti che aggiungono elementi utilizzando questo modello di immissione devono avere i privilegi ItemSetACL e UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Flusso di lavoro del modello sequenziale",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Flusso di lavoro del modello parallelo",
		entry_template_workflow_type_existing: "Flusso di lavoro personalizzato...",
		entry_template_workflow_launch_prompt: "Richiedi agli utenti se avviare il flusso di lavoro",
		entry_template_workflow_launch_auto: "Avvia automaticamente il flusso di lavoro",
		entry_template_workflow_modify_launch: "Consenti agli utenti di modificare la fase iniziale",
		entry_template_workflow_modify_launch_hover: "Selezionare questa opzione se si desidera consentire agli utenti di modificare in che modo viene avviato il flusso di lavoro.",

		entry_template_optionsButton_title: "Modifica",
		entry_template_optionsButton_readonly_title: "Visualizza associazione",
		entry_template_optionsDialog_title: "Impostazioni di associazione della cartella",
		entry_template_removeButton_title: "Rimuovi",
		entry_template_addButton_title: "Aggiungi",
		entry_template_selected_entry_templates: "Modelli di immissione selezionati",
		entry_template_docs_added_to_template_destination: "I documenti vengono aggiunti alla destinazione specificata nel modello di immissione.",
		entry_template_docs_added_to_other_object_store: "Questo modello di immissione aggiunge elementi all'archivio oggetti ${0}.",
		entry_template_inherited_entry_templates_label: "Desidero: ",
		entry_template_inherited_entry_templates: "Ereditare le associazioni del modello di immissione dalla cartella: ",
		entry_template_inherited_entry_templates_not: "Creare nuove associazioni per questa cartella",
		entry_template_inherited_folder_path: "I modelli di immissione nell'elenco di modelli di immissione selezionati vengono selezionati con la seguente cartella: ${0}. <br> Il percorso della cartella è ${1}.",
		entry_template_folder_associations_title: "Associa modelli immissione",
		entry_template_folder_associations_intro: "Quando si associa un modello di immissione ad una cartella, gli utenti devono utilizzare il modello di immissione per aggiungere elementi alla cartella. Se si associano più modelli di immissione ad una cartella, gli utenti possono selezionare il modello di immissione da utilizzare.",
		entry_tempalte_folder_associations_entrytemplate: "Modello di immissione: ",
		entry_template_avaliable_entry_templates: "Modelli di immissione disponibili",
		entry_template_fileTypes_intro_title: "Tipi di file consentiti:",
		entry_template_fileTypes_intro: "Per impostazione predefinita un modello di immissione può essere utilizzato per aggiungere un qualsiasi tipo di documento al repository. Tuttavia, se si selezionano uno o più tipi di file, i modelli di immissione saranno disponibili solo quando gli utenti che aggiungeranno documenti corrispondenti ad uno dei tipi di file specificati.",
		entry_template_fileTypes: "Tipi di file",
		entry_template_fileType_error: "Sono stati selezionati dei tipi di file non validi per una o più associazioni di modelli di immissione. È necessario rimuovere i tipi di file non validi prima di poter salvare queste associazioni dei modelli di immissione.",
		entry_template_fileTypes_any_type_of_file: " Qualsiasi tipo di file",
		entry_template_description_label: "Descrizione",
		entry_template_ItemInfoPrefix: "Associa con: ",
		entry_template_TargetObjectStoreName: "Archivio oggetti di destinazione",
		entry_template_class: "Classe",
		entry_template_current_folder_as_parent: "Utilizza cartella come destinazione",
		entry_template_view_minetypes: "Visualizza tipi MIME",
		entry_template_avaliable_MIME_types: "Tipi di file disponibili",
		entry_template_selected_MIME_types: "Tipi di file selezionati",
		entry_template_MIME_type_column: "Nome categoria dei tipi di file",
		entry_template_file_type_not_existing: "Rimuovere i tipi di file non validi.",
		entry_template_MIME_types: "Tipi MIME:",
		entry_template_MIME_types_info_dialog_title: "Il tipo MIME per",
		entry_template_destination_label: "Aggiungi documenti a: ",
		entry_template_destination_help: "Specifica dove sono memorizzati i documenti nel repository quando gli utenti aggiungono documenti a questa cartella utilizzando il modello di immissione selezionato.",
		entry_template_radioButton_folder_destination: "Cartella selezionata",
		entry_template_radioButton_template_destination: "La destinazione specificata nel modello di immissione",
		entry_tempalte_teamspace_default: "Modello di immissione predefinito",
		entry_template_folder_associations_save_new: "Si sono modificate alcune associazioni del modello di immissione. Si desidera chiudere questa finestra senza salvare le modifiche?",
		entry_template_mode_binding_label: "Proprietà",
		entry_template_columns_className: "Nome classe",
		entry_template_columns_type: "Tipo di modello",
		entry_template_columns_workflow: "Nome flusso di lavoro",
		entry_template_columns_destination: "Destinazione",
		entry_template_association_less_than_record: "Esistono ${0} modelli di immissione non elencati nei modelli di immissione selezionati. L'utente non dispone dell'autorizzazione per visualizzarli. Oppure sono stati eliminati. Rivolgersi all'amministratore di sistema per ottenere ulteriori informazioni.",
		/* Request */

		progress_message_general: "Elaborazione in corso...",
		cancel_message_general: "L'azione è stata annullata.",
		ie8_not_supported_browser: "IE8 non è un browser supportato.",
		progress_message_getDesktop: "Caricamento del desktop...",
		progress_message_getActions: "Caricamento delle azioni...",
		progress_message_getViewers: "Caricamento del desktop...",
		progress_message_logon: "Accesso in corso...",
		progress_message_logoff: "Disconnessione in corso...",
		progress_message_getContentClasses: "Richiamo delle classi...",
		progress_message_openContentClass: "Richiamo dei dettagli di classe...",
		progress_message_od_getCabinets: "Richiamo dei cabinet...",
		progress_message_getSearchTemplates: "Richiamo delle ricerche...",
		progress_message_od_getTemplates: "Richiamo delle cartelle...",
		progress_message_od_openCabinet: "Richiamo delle cartelle...",
		progress_message_openSearchTemplate: "Apertura della ricerca...",
		progress_message_od_openTemplate: "Apertura della cartella...",

		progress_message_getWorklists: "Richiamo degli elenchi di lavoro...",
		progress_message_getWorkItems: "Richiamo degli elementi di lavoro...",
		progress_message_getNextWorkItems: "Richiamo degli elementi di lavoro...",
		progress_message_getStepParameters: "Richiamo delle informazioni elemento di lavoro...",
		progress_message_getStepAttachmentItems: "Richiamo delle informazioni allegato...",
		progress_message_getDependentParameters: "Richiamo delle informazioni della proprietà...",

		progress_message_p8_getProcessApplicationSpaces: "Richiamo degli spazi applicazione...",
		progress_message_p8_getProcessRoles: "Richiamo dei ruoli processo...",
		progress_message_p8_getProcessInbaskets: "Richiamo dei carrelli di immissione...",
		progress_message_p8_getProcessorInformation: "Richiamo delle informazioni sul processo...",
		progress_message_p8_getFilterCriteria: "Richiamo del filtro carrello di inserimento...",
		progress_message_p8_getLaunchParameters: "Richiamo delle informazioni elemento di lavoro...",
		progress_message_p8_getStepAttachments: "Richiamo degli allegati elemento di lavoro...",
		progress_message_p8_getSubscriptions: "Richiamo delle sottoscrizioni flusso di lavoro...",
		progress_message_p8_getTrackerParameters: "Richiamo delle informazioni elemento di lavoro...",
		progress_message_p8_getTrackerHistory: "Richiamo della cronologia dell'elemento di lavoro...",
		progress_message_p8_getTrackerMilestones: "Richiamo delle attività cardine dell'elemento di lavoro...",
		progress_message_p8_completeStep: "Completamento dell'elemento di lavoro...",
		progress_message_p8_moveToInbox: "Spostamento dell'elemento nel carrello di inserimento...",
		progress_message_p8_returnToSender: "Restituzione dell'elemento di lavoro...",
		progress_message_p8_reassign: "Riassegnazione dell'elemento di lavoro...",
		progress_message_p8_launchWorkflow: "Avvio del flusso di lavoro...",
		progress_message_p8_getTransferedWorkflows: "Recupero informazioni flusso di lavoro in corso...",

		progress_message_cm_getProcesses: "Recupero informazioni flusso di lavoro in corso...",
		progress_message_cm_completeStep: "Continuazione dell'elemento di lavoro...",
		progress_message_cm_getItemProcessInformation: "Recupero informazioni flusso di lavoro in corso...",

		progress_message_search: "Ricerca in corso...",
		cancel_message_search: "La ricerca è stata annullata.",
		progress_message_getContentItems: "Richiamo delle informazioni elemento...",
		progress_message_openFolder: "Apertura della cartella...",
		progress_message_addItem: "Creazione dell'elemento...",
		progress_message_checkIn: "Check-in dell'elemento...",
		progress_message_changePassword: "Modifica della password...",
		progress_message_getDefaultInstancePermissions: "Richiamo dei permessi predefiniti...",
		progress_message_openItem: "Richiamo delle informazioni elemento...",
		progress_message_saveItem: "Salvataggio informazioni elemento...",
		progress_message_getPermissions: "Richiamo dei permessi...",
		progress_message_getEntryTemplates: "Richiamo dei modelli di immissione...",
		progress_message_openEntryTemplate: "Apertura del modello di immissione...",
		progress_message_getFavorites: "Richiamo dei Preferiti...",
		progress_message_getFoldersFiledIn: "Richiamo delle cartelle...",
		progress_message_getDocumentVersions: "Richiamo delle versioni...",
		progress_message_getDependentAttributeInfo: "Richiamo delle informazioni di attributo...",
		progress_message_packageForDownload: "Impacchettamento per il download...",
		progress_message_convertDocument: "Conversione del contenuto...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Richiamo dei tipi di contenuto ...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Aggiunta documento...",

		progress_message_desktop_reload: "Il client sta ricaricando il desktop.<br>Potrebbe essere richiesto di eseguire nuovamente il login.",
		progress_message_email: "Invio email in corso...",
		cancel_message_email: "L'email è stata annullata.",

		progress_message_p8_getOfficeOnlineTemplates: "Richiamo dei modelli di Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Struttura ad albero Favoriti",
		favorites_content_list_label: "Elenco contenuti di Favoriti",
		syncItems_tree_label: "Struttura ad albero dei file sincronizzati personali",
		syncItems_content_list_label: "Elenco contenuti dei file sincronizzati personali",
		my_checkouts_content_list_label: "Elenco contenuti di I miei check out",
		browse_tree_label: "Struttura ad albero Sfoglia",
		browse_content_list_label: "Elenco contenuti di Sfoglia",
		repository_selector_label: "Selettore di repository",
		teamspaces_content_list_label: "Elenco contenuti di Spazio team",
		templates_content_list_label: "Elenco contenuti di Modelli",
		work_content_list_label: "Elenco contenuti di Lavoro",
		work_tree_label: "Struttura ad albero Lavoro",
		admin_tree_label: "Struttura ad albero Amministrazione",
		admin_tabs_label: "Schede di Amministrazione",
		search_tabs_label: "Schede di ricerca",
		search_selector_label: "Selettore di ricerca",
		teamspace_browse_content_list_label: "Elenco contenuti di Sfoglia spazio team",
		teamspace_search_tabs_label: "Schede di ricerca spazio team",

		/* Desktop */
		undo_description: "Annulla ${0}",
		redo_description: "Ripeti ${0}",

		/* Application Tabs */
		home: "Home",
		repository: "Repository",
		repository_type: "Tipo di repository:",
		repository_type_header: "Tipo di repository",
		repository_type_any: "Tutti i repository",
		repository_type_contains_label: "Il tipo di repository contiene",
		document_info: "Informazioni sul documento",
		team: "Team",
		administration: "Amministrazione",

		/* Home Page */
		recent_activity: "Attività recente",
		repos_and_wrksp: "Repository e spazi team",
		workspaces: "Spazi team",
		repositories: "Repository",
		templates: "Modelli",
		favorites: "Preferiti",
		my_checkouts: "I miei check out",
		mySyncedFiles: "File sincronizzati personali",
		links: "Link",
		name_label: "Nome",
		description_label: "Descrizione:",
		type_label: "Tipo:",
		type_heading: "Tipo",
		type_id_label: "ID tipo",
		server_type_icon: "Icona tipo di server",
		server_type_heading: "Tipo di server",
		server_type: "Tipo di server",
		port_heading: "Numero di porta",
		port_label: "Numero di porta:",
		server_name_heading: "Nome server",
		server_label: "Nome server:",
		server_url_label: "URL server:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Connesso:",
		repository_label: "Repository",
		modified_label: "Modificato da:",
		modified_date_label: "Modificato il:",
		status_label: "Stato:",
		last_modified_label: "Autore ultima modifica:",

		modifier: "Modificato da",
		modified_date: "Modificato il",

		/* Favorites */
		new_favorite_label: "Aggiungi ai Preferiti",
		edit_favorite_label: "Rinomina Preferito",
		remove_favorite_label: "Rimuovi dai Preferiti",
		missing_alias_message: "È necessario specificare un nome.",
		sync_favorite_enable_hover: "Questo elemento è abilitato per la sincronizzazione.",
		sync_favorite_disable_hover: "Questo elemento non viene sincronizzato.",
		sync_favorite_sync_unavailable_hover: "La sincronizzazione non è disponibile per questo tipo di oggetto.",
		sync_enable_label: "Sincronizza questo elemento",
		sync_enable_label_hover: "Questo elemento verrà sincronizzato con le unità dell'utente.",
		delete_favorite_confirmation_question: "Si desidera rimuovere questo elemento dai Preferiti?",
		alias_label: "Nome:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "L'elemento selezionato si trova già nei Preferiti.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Impossibile aggiungere questo elemento all'elenco dei preferiti.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "È possibile archiviare solo i preferiti ${0}.",
		add_favorite_max_reached_response: "Se si desidera aggiungere questo elemento all'elenco di preferiti, è necessario eliminare un elemento preferito esistente prima di poter aggiungere questo elemento.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "I documenti selezionati non possono essere convertiti in PDF.",
		download_as_pdf_max_content_error_explanation: "È possibile convertire solo ${0} MB di dati in PDF. Tuttavia, i documenti selezionati superano ${0} MB.",
		download_as_pdf_max_content_error_response: "Selezionare meno documenti o selezionare documenti più piccoli ed eseguire di nuovo il download dei documenti come file PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "I documenti selezionati non possono essere convertiti in un singolo file PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Per convertire un documento con più parti in un singolo file PDF, ciascuna parte deve avere lo stesso tipo MIME.",
		download_as_pdf_mimetype_check_error_response: "Selezionare un documento differente da convertire in PDF.",

		/* Activity Stream */
		show_label: "Mostra:",
		all_filter: "Tutto",
		notifications_filter: "Notifiche",
		workitems_filter: "Elementi di lavoro",
		documentes_filter: "Documenti",
		all_favorites_filter: "Tutti i preferiti",
		folders_filter: "Cartelle",
		searches_filter: "Ricerche",
		teamspaces_filter: "Spazi team",

		/* Repository */
		all_search_templates: "Tutte le ricerche",
		all_od_searches: "Tutti i modelli di ricerca",
		recent_searches: "Ricerche recenti",
		opened_searches: "Ricerche aperte",

		all_worklists: "Tutte le caselle di posta in arrivo",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Un elenco di ciascun elenco di lavoro",

		/* Teamspace */
		all_workspaces: "Tutti gli spazi team",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Un elenco di ciascuno spazio team",
		workspace_title: "Spazio team",
		workspace_icon: "Icona spazio team",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponibile",
		workspace_stat_offline: "Non disponibile",
		workspace_stat_validate: "Richiede convalida",
		workspace_stat_pendingDelete: "Eliminazione in sospeso",
		workspace_stat_deleteError: "Eliminazione non riuscita",

		undefined_value: "Non definito",
		undefined_reference_value: "Non è stato definito alcun riferimento.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Più risultati potrebbero essere disponibili sul server.",
		search_all_data: "Cerca in tutti i dati",
		search_all_teamspaces: "Cerca tutti gli spazi team.",
		teamspace_filter_results: "Visualizzazione di risultati ${0}. ",
		displaying_filtered_results: "Visualizzazione dei risultati filtrati. ",
		displaying_recent_results: "Visualizzazione degli spazi team modificati negli ultimi ${0} giorni. Per trovare altri spazi team, filtrare l'elenco di spazi team in base al nome o alla descrizione. ",
		clear_filter: "Pulisci filtro.",

		/* FolderTreeModel */
		move_item_task: "Sposta elemento",
		copy_item_task: "Copia elemento",
		add_item_task: "Aggiungi elemento",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Impossibile trovare la seguente cartella: ${0}. È possibile che sia stata eliminata o che la cartella non possa essere aperta da questa vista. Fare clic sul link dalla vista ad albero per passare alla cartella. Se è non è possibile visualizzare la cartella, aggiornare la vista dell'elenco contenuti.",
		more_paging_link: "altro ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Stato",
		status_dialog_cancel_label: "Annulla",

		/* ErrorDialog */
		error_dialog_title: "Errore",
		error_dialog_icon_tooltip: "Errore",
		error_dialog_stack_trace_title: "Traccia di stack",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Conferma",

		close_browser_msg: "Chiudere la finestra del browser.",

		/* MessageDialog */
		message_dialog_title: "Informazioni",
		warning_dialog_title: "Avvertenza",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Benvenuti in ${0}",
		server: "Repository:",
		username: "Nome utente:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Per accedere al repository è necessario un nome utente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Per accedere al repository è necessaria una password.",
		password: "Password:",
		login: "Accedi",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "La sessione è scaduta. Collegarsi di nuovo.",
		login_repository_connection_expired_message: "La connessione al repository ${0} è scaduta. Collegarsi di nuovo.",
		login_site_connection_expired_message: "La connessione al sito è scaduta. Collegarsi di nuovo.",
		login_new_server_message: "Immettere un nome utente e una password per ${0}.",
		login_error_more_information_message: "Ulteriori informazioni",

		disconnect_box_account_user: "Disconnetti account Box: ${0}",
		disconnect_box_account: "Disconnetti account Box",
		disconnect_box_accounts: "Disconnetti account Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Per accedere al repository di Box è necessaria una connessione SSL.",
		login_oauth_popup_blocked: "La finestra a comparsa è stata bloccata. È possibile che si debbano sbloccare le finestre a comparsa nel browser per poter accedere.",
		login_oauth_click_here: "Se non si viene reindirizzati entro 5 secondi, fare clic qui.",
		login_oauth_title: "Accedi",
		login_oauth_grant_intro: "Concedi autenticazione a ${0}.",
		login_pane_oauth_click_here: "Fare clic qui per accedere.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Si desidera disconnettersi dal client Web?",
		logout_confirmation_button: "Disconnetti",

		/* ChangeLocaleDialog */
		change_locale: "Cambia lingua e impostazioni di locale",
		change_locale_use_browser_language: "Usa impostazione di lingua del browser (valore predefinito)",
		change_locale_use_browser_locale: "Usa impostazione di lingua del browser (valore predefinito)",
		change_locale_description: "Se si eliminano i cookie del browser, è necessario riconfigurare le impostazioni di lingua e di locale.",
		change_locale_language_locale: "Lingua applicazione:",
		change_locale_language_locale_hover: "Questa impostazione modifica la lingua del testo nel client web ma non modifica la lingua dei documenti nell'applicazione.<br><br>L'impostazione predefinita utilizza la lingua specificata nelle opzioni di configurazione del browser web.",
		change_locale_value_format_locale: "Locale applicazione:",
		change_locale_value_format_locale_hover: "La locale determina il formato di data, ora e numeri nel client web.<br><br>L'impostazione predefinita utilizza i formati associati alla lingua specificata nelle opzioni di configurazione del browser web.",
		change_locale_for_office: "Impostazioni testo bidirezionale:",
		change_locale_bidi_support_flag: "Abilita il supporto bidirezionale",
		change_locale_bidi_support_flag_hover: "Quando il supporto bidirezionale è abilitato, l'utente può impostare la direzione del testo utilizzato nei campi di input.  Il testo immesso per elementi quali cartelle, potrebbe essere visualizzato nella stessa direzione in cui è stato immesso.",
		change_locale_base_text_direction: "Direzione di base del testo del contenuto:",
		change_locale_base_text_direction_hover: "Imposta la direzione del testo immesso nei campi di immissione.  Questa opzione controlla inoltre la direzione di visualizzazione delle etichette immesse dall'utente, come ad esempio i nomi delle cartelle.",
		change_locale_calendar_type: "Tipo di calendario:",
		change_locale_calendar_type_hover: "Selezionare il tipo di calendario che verrà utilizzato per la sessione utente.",
		change_locale_base_text_direction_default: "Default",
		change_locale_base_text_direction_ltr: "Sinistra-a-destra",
		change_locale_base_text_direction_rtl: "Destra-a-sinistra",
		change_locale_base_text_direction_contextual: "Contestuale",
		change_locale_calendar_type_gregorian: "Gregoriano",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Ebraico",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Modifica password",
		change_password_title: "Modifica password",
		change_password_expired_title: "Password scaduta",
		change_password_message: "Immettere una nuova password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "La password è scaduta. Immettere una nuova password.",
		change_password_password_rules: "Regole delle password",
		change_password_old_password: "Vecchia password",
		change_password_new_password: "Nuova password:",
		change_password_confirm_password: "Conferma password:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "È necessario immettere la vecchia password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "È necessario immettere nuovamente una nuova password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "È necessario confermare la nuova password.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Le password devono corrispondere.",

		/* GlobalToolbar */
		actions: "Azione",
		actions_label: "Azioni:",
		open_actions_label: "Azioni aperte:",

		/* About Dialog */
		about_dialog_title: "Informazioni...",
		about_product_name_label: "Nome prodotto: ",
		about_product_version_label: "Versione: ",
		about_product_build_label: "Build: ",
		about_product_license: "Materiali su licenza - Proprietà di IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Tutti i diritti riservati. Limitazioni per gli utenti appartenenti al governo degli Stati Uniti d'America. L'utilizzo, la duplicazione o la divulgazione sono limitati dal GSA ADP Schedule Contract con IBM Corporation. IBM ed il logo IBM sono marchi di International Business Machine Corporation negli Stati Uniti e/o in altri paesi. Questo programma è concesso in licenza in base alle clausole dell'accordo di licenza fornito con il Programma. Tale accordo di licenza potrebbe trovarsi in una cartella o in una libreria della directory del Programma con la denominazione \"License\" o \"Non_IBM_License\", se applicabile, oppure fornito come accordo di licenza in formato cartaceo. Leggere attentamente questo contratto prima di utilizzare il programma. L'utilizzo del programma comporta l'accettazione dei termini in esso riportati. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Se desidera eliminare l'elemento selezionato?",
		delete_single_folder_confirmation_question: "Si desidera eliminare la cartella ${0}?",
		delete_multiple_confirmation_question: "Se desidera eliminare gli elementi selezionati?<br>Sono selezionati ${0} elementi.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Elimina",
		search_template_delete_confirmation_question: "Si desidera eliminare la ricerca ${0}?",
		search_template_opened_delete_confirmation_question: "La ricerca ${0} è aperta. Se si elimina la ricerca, verrà chiusa.<br>Si desidera eliminare questa ricerca?",
		delete_multiple_opened_search_template_confirmation_question: "Le seguenti ricerche sono aperte: ${0}.<br>Se si eliminano le ricerche, esse verranno chiuse. Si desidera eliminare tali ricerche?",
		delete_large_number_items_confirmation_question: "Sono stati selezionati ${0} elementi da eliminare.<br/>L'eliminazione di un numero elevato di elementi potrebbe richiedere molto tempo.<br/>Si desidera continuare?",
		delete_confirmation_entrytemplate: "Se si elimina questo modello di immissione, ciò avrà degli impatti sui documenti o cartelle che sono associati al modello di immissione.<ul><li>Gli elementi non saranno più associati al modello di immissione e agli utenti potrebbe essere visualizzato un avviso quando aggiornano un elemento.</li><li>Qualsiasi proprietà che è stata controllata dal modello di immissione, come ad esempio, il nome o l'ordine delle proprietà, non verrà più applicata agli elementi che sono associati al modello di immissione.</li></ul>Si desidera eliminare questo modello di immissione?",
		delete_confirmation_entrytempalte_with_multi_items: "I modelli di immissione devono essere eliminati singolarmente. I modelli di immissione sono stati rimossi dall'elenco degli elementi da eliminare. Se si desidera eliminare i modelli di immissione, è necessario eliminare ogni modello di immissione separatamente.",

		/* Create/Apply/Remove Hold */
		hold: "Sospensione",
		createHold: "Nuova sospensione",
		applyHold: "Applica sospensione",
		removeHold: "Rimuovi sospensione",
		showHolds_title: "Visualizza sospensioni",
		applyHoldSelectText: "Selezionare le sospensioni da applicare agli elementi selezionati.",
		availableHolds: "Sospensioni disponibili:",
		removeHoldSelectText: "Selezionare le sospensioni che si desidera rimuovere dagli elementi selezionati.",
		appliedHolds: "Sospensioni applicate:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Creare una nuova sospensione da applicare agli elementi selezionati.",
		holdName: "Nome sospensione:",
		holdDescription: "Descrizione:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "È necessario specificare un nome per la sospensione.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Il nome sospensione specificato esiste già.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Un nome sospensione non può contenere nessuno dei seguenti caratteri: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "La sessione scadrà tra ${0} minuti.",
		session_expire: "Sessione in scadenza",
		logoff: "Scollega",
		extend_session: "Estendi sessione",
		admin_custom_settings: "Impostazioni aggiuntive:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning è un valore booleano che indica se è abilitata l'avvertenza di scadenza della sessione, il valore predefinito è true. sessionExpireWarningTime è un numero intero compreso tra 2 e 5 per specificare l'orario di avvertenza di scadenza della sessione.",
		admin_custom_setting_dialog_title_new: "Nuova impostazione",
		admin_custom_setting_dialog_title_edit: "Modifica impostazione",
		admin_custom_setting_dialog_hover_help: "Aggiungere altri parametri specificando il nome ed il valore del parametro. Ad esempio, è possibile specificare “enableSessionExpireWarning” e “true” se si desidera abilitare l'avvertenza di scadenza della sessione.",
		admin_custom_setting_dialog_field_hover_help: "Per ulteriori informazioni relative ai nomi e valori del parametro, consultare il manuale IBM navigator Parameter Reference.",
		admin_custom_setting_dialog_nameInvalid: "Questo valore è obbligatorio. Il valore non può contenere spazi e non può essere un duplicato.",
		admin_custom_setting_dialog_bool_valueInvalid: "Questo valore è obbligatorio. Il valore deve essere booleano.",
		admin_custom_setting_dialog_int_valueInvalid: "Questo valore è obbligatorio. Il valore deve essere un numero intero.",
		/* Add Document Dialog */
		add_document_dialog_title: "Aggiungi documento",
		add_documents_dialog_title: "Aggiungi documenti",
		add_document_general_label: "Generale",
		add_document_properties_label: "Proprietà",
		add_document_properties_with_ellipsis_label: "Proprietà...",
		add_document_security_label: "Sicurezza",
		add_document_location_label: "Salva in:",
		add_document_type_label: "Specificare l'elemento da salvare",
		add_document_localfile_label: "Documento locale",
		add_document_metadata_label: "Informazioni su un documento",
		add_document_external_label: "Link a un documento esterno",
		add_document_web_link_label: "Link Web",
		add_document_saved_content_label: "Utilizza file salvato:",
		add_document_saved_content_choice: "File salvato",
		add_document_file_name_label: "Nome file:",
		add_document_entry_template_label: "Modello di immissione:",
		add_document_delete_file_label: "Elimina file locale",
		add_document_delete_file_disabled_label: "I file che non sono presenti nella directory di traccia file non verranno eliminati.",
		add_document_major_version_label: "Versione principale",
		add_document_major_version_hover: "Imposta lo stato del documento su Rilasciato. Il documento viene aggiunto al repository come versione 1.0. Se l'opzione non è selezionata, il documento non è pronto per il rilascio e viene aggiunto come versione secondaria 0.1.",
		add_document_save_document_as_unfiled_label: "Non salvare il documento in una cartella",
		add_document_save_document_as_unfiled_hover: "Se si seleziona questa opzione, è possibile individuare questo documento solo mediante la ricerca. Non è possibile sfogliare per individuarlo.",
		add_document_create_new_version_label: "Crea nuova cartella",
		add_document_replace_existing_version_label: "Sostituisci versione esistente",
		add_document_start_workflow_label: "Avvia flusso di lavoro",
		add_document_auto_classify_label: "Classifica il contenuto automaticamente",
		add_document_add_label: "Aggiungi",
		add_document_cancel_label: "Annulla",
		add_document_document_type_label: "Classe",
		add_document_context_info: "I valori immessi per le proprietà del documento possono essere utilizzati per individuare il documento successivamente.",
		add_documents_context_info: "I valori immessi per i documenti possono essere utilizzati per individuare successivamente i documenti. Se è necessario immettere un valore proprietà differente per un documento, è necessario aggiungerlo separatamente o modificare le proprietà del documento dopo averlo aggiunto.",
		add_document_url_label: "URL:",
		add_document_template_description: "Descrizione modello:",
		add_document_select_entry_template: "Immettere o selezionare un modello di immissione",
		add_document_no_permission_to_associations: "Non si dispone delle autorizzazioni per utilizzare un modello di immissione",
		add_document_no_entry_template_to_use: "Nessun modello di immissione può essere utilizzato per i file selezionati",
		add_document_no_entry_template_itemtype_permission: "Impossibile aggiungere elementi a questa cartella. È necessario selezionare un modello di immissione e l'utente non dispone dell'accesso ai modelli di immissione associati a questa cartella. Rivolgersi all'amministratore di sistema e richiedere di concedere all'utente l'accesso ai modelli di immissione associati a questa cartella.",
		add_document_appgroup_name_label: "Nome gruppo dell'applicazione:",
		add_document_app_name_label: "Nome applicazione:",
		create_folder_dialog_title: "Nuova cartella",
		create_folder_context_info: "I valori immessi per le proprietà della cartella possono essere utilizzati per individuare la cartella successivamente.",
		create_folder_folder_name_label: "Nome cartella",
		create_folder_save_folder_as_unfiled_label: "Non salvare la cartella in un'altra cartella",
		create_folder_save_folder_as_unfiled_hover: "Se si seleziona questa opzione, è possibile individuare questa cartella solo mediante la ricerca. Non è possibile sfogliare per individuarla.",
		add_item_create_in_folder: "Crea nella cartella:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Un nome cartella non può contenere nessuno dei seguenti caratteri: \\ /: *? \" < > |",

		invalid_box_folder_name_message: "Un nome cartella non può contenere nessuno dei seguenti caratteri: \\ / e non può essere . o ..",
		invalid_box_file_name_message: "Un nome file non può contenere nessuno dei seguenti caratteri: \\ / e non può essere . o ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Un nome file non può contenere nessuno dei seguenti caratteri: \\ /: *? \" < > |",
		external_document_placeholder: "Immettere l'URL del documento.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Il colore deve essere immesso come un numero esadecimale a 3 o a 6 cifre, ad esempio #000 o #000000.",
		add_document_unfiled: "${0} non archiviato",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Aggiungi documento utilizzando il modello di immissione",
		add_document_using_template_context_info: "Quando si aggiunge un documento utilizzando un modello di immissione, i valori immessi per il documento sono congruenti.",
		add_documents_using_template_dialog_title: "Aggiungi documenti utilizzando il modello di immissione",
		add_documents_document_name_is_file_name_hint: "Il nome file verrà utilizzato per questa proprietà",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nuova cartella mediante modello di immissione",
		create_folder_using_template_context_info: "Quando si crea una cartella utilizzando un modello di immissione, i valori immessi per la cartella sono congruenti.",

		add_documents_batch_results_dialog_title: "Documenti non aggiunti al repository",
		add_documents_batch_results_dialog_context_info: "I seguenti documenti non sono stati aggiunti al repository. Selezionare un documento e fare clic su Dettagli per ricevere maggiori informazioni sul motivo per cui il documento non è stato aggiunto al repository.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nome file",
		add_documents_batch_results_dialog_status_col_hdr: "Stato",
		add_documents_batch_results_dialog_message_col_hdr: "Messaggio",
		add_documents_batch_results_status_error: "Errore",
		add_documents_batch_results_status_cancelled: "Annullato",
		add_documents_batch_results_status_cancelled_msg: "Il documento non è stato aggiunto perché la richiesta è stata annullata.",

		add_documents_batch_status_title: "Aggiunta di documenti",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Aggiunta del file ${0} di ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Errori: ${0}",
		add_documents_batch_status_completing_msg: "Il processo verrà arrestato dopo l'aggiunta di questo documento.",

		add_documents_status_uploading_msg: "Caricamento del file ${0} di ${1}...",
		add_documents_status_adding_msg: "Aggiunta del file ${0} di ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Il modello di immissione è stato configurato in un'altra applicazione ed è configurato per dichiarare sempre i documenti come record. Tuttavia, questa impostazione viene ignorata poiché il client Web non supporta la dichiarazione di documenti come record.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Il modello di immissione è stato configurato in un'altra applicazione ed è configurato per consentire di decidere se dichiarare questo documento come record. Tuttavia, questa impostazione viene ignorata poiché il client Web non supporta la dichiarazione di documenti come record.",
		no_selection: "&lt;Seleziona&gt;",

		batch_results_dialog_details_label: "Dettagli",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Il valore non è valido. Il valore deve essere un GUID (Globally Unique Identifier), ad esempio, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Il valore non è valido. Il valore deve essere un numero a virgola mobile, ad esempio 1,2 o 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Il valore non è valido. Il valore deve essere nel formato ${0}, ad esempio ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Il valore non è valido. Il valore deve essere un valore decimale, ad esempio 1,2 o 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Il valore non è valido. Il valore deve essere un numero intero, ad esempio 5 o 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Il valore non è valido. Il valore può contenere solo caratteri alfabetici, ad esempio, a-z e A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Il valore non è valido. Il valore può contenere solo caratteri alfanumerici, ad esempio, a-z, A-Z e 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Il valore non è valido. Il valore può contenere solo caratteri numerici, ad esempio, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Il valore non è valido. Il valore può contenere solo i seguenti caratteri: a-z, A-Z, 0-9, [spazio], e `.,:;?\"/-_&amp;+%*=<>()|!$#^@.@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Il valore non è valido. Il valore deve essere una data con il seguente formato: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Il valore non è valido. Il valore deve essere un'ora con il seguente formato: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Il valore non è valido. Selezionare un valore dal menu a discesa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Il valore non è valido.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Il valore non è valido. Il valore deve avere il seguente formato: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Questo valore è obbligatorio.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Il valore è troppo lungo. La proprietà supporta una lunghezza massima di ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Il valore è troppo breve. La proprietà supporta una lunghezza minima di ${0} caratteri.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Il valore è fuori intervallo. Il valore deve essere un numero a virgola mobile compreso tra ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Il valore è fuori intervallo. Il valore deve essere un valore decimale compreso tra ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Il valore è fuori intervallo. Il valore deve essere un numero intero compreso tra ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Il valore deve essere una data compresa tra ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Il valore è fuori intervallo. Il valore deve essere una data compresa tra ${0} e ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Il valore è fuori intervallo. Il valore deve essere un'ora compresa tra ${0} e ${1}.",
		property_and: "and",

		property_invalidValueOrRequired: "Il seguente valore non è valido o è obbligatorio: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Proprietà",
		edit_properties_dialog_info: "È possibile visualizzare o modificare le proprietà di questo elemento. Se si dispone dei permessi appropriati, è possibile anche modificare la protezione dell'elemento. Tuttavia, non è possibile modificare le proprietà del sistema.",
		edit_properties_od_dialog_info: "È possibile visualizzare o modificare le proprietà di questo elemento. Tuttavia, non è possibile modificare le proprietà del sistema.",
		system_properties_title: "Proprietà di sistema",
		custom_properties_title: "Proprietà",
		/* Folder collaboration tab */
		box_permission_permission: "Autorizzazione",
		box_permission_permissions: "Autorizzazioni",
		box_permission_editor: "Editore",
		box_permission_owner: "Proprietario",
		box_permission_co_owner: "Comproprietario",
		box_permission_viewer_uploader: "Visualizzazione e caricamento",
		box_permission_previewer_uploader: "Visualizzazione di anteprima e caricamento",
		box_permission_viewer: "Visualizzatore",
		box_permission_previewer: "Visualizzazione di anteprime",
		box_permission_uploader: "Caricamento",
		box_permission_add: "Aggiungi",
		box_permission_upload: "Carica",
		box_permission_download: "Scarica",
		box_permission_preview: "Anteprima",
		box_permission_view: "Visualizza",
		box_permission_send_links: "Invia link di sola visualizzazione",
		box_permission_create_subfolders: "Crea sottocartelle",
		box_permission_create_tasks: "Crea attività",
		box_permission_add_comments: "Aggiungi commenti",
		box_collaboration_invite_placeholder: "Immettere un nome, email o gruppo da invitare",
		box_collaboration_invite_placeholder_non_admin: "Immettere una e-mail per l'invito",
		box_collaboration_invalid_email: "Immettere un indirizzo e-mail valido",
		box_collaboration_user_already_present: "Questo utente è già un collaboratore in questa cartella",
		box_collaboration_user_name: "Nome",
		box_collaboration_email_address: "Indirizzo e-mail",
		box_collaboration_date_added: "Data di aggiunta",
		box_collaboration_remove_collaboration: "Rimuovi",
		box_collaboration_remove_collaboration_title: "Elimina",
		box_collaboration_no_collaborators: "Non sono presenti collaboratori",
		box_collaboration_change_owner_title: "Modifica proprietario elemento",
		box_collaboration_change_owner_prompt: "Rendendo questo collaboratore proprietario cartella si diviene editore e non si possiede più la cartella. I collaboratori che sono stati aggiunti direttamente a questa cartella la vedranno nelle rispettive cartelle principali. I collaboratori che sono stati aggiunti a livello di cartella padre o ad un livello superiore non saranno più collaboratori. Si desidera continuare?",
		box_collaboration_remove_self_title: "Rimuovere se stessi",
		box_collaboration_remove_self_prompt: "Si è sicuri di voler rimuovere se stessi come collaboratore? Non si avrà più accesso a questa cartella.",
		box_collaboration_user: "Utente",
		box_collaboration_group: "Gruppo",
		box_managing_users_not_configured: "Non è possibile ricercare utenti e gruppi perché l'applicazione Box non è configurata correttamente. Per utilizzare questa funzione, contattare l'amministratore e richiedere che l'applicazione Box sia configurata per la gestione di utenti e gruppi.",
		duplicate_value_error: "Ciascun valore in questa proprietà deve essere univoco.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Tutte le modifiche eseguite nei seguenti campi vengono applicate a tutti gli elementi selezionati. Se è necessario immettere un valore di proprietà differente per un particolare elemento o modificarne la protezione è necessario modificare le proprietà dell'elemento separatamente.",
		multi_edit_properties_class_label: "Classe:",
		multi_edit_properties_items_label: "Nomi di elemento:",
		multi_edit_properties_properties_label: "Proprietà:",
		multi_edit_batch_status_title: "Aggiornamento proprietà",
		multi_edit_batch_status_adding_msg: "Aggiornamento dell'elemento ${0} di ${1} in corso...",
		multi_edit_batch_status_verifying_msg: "Verifica dell'elemento ${0} di ${1} in corso...",
		multi_edit_batch_status_completing_msg: "Il processo verrà arrestato dopo l'aggiornamento di questo elemento.",
		multi_edit_batch_status_validation_completing_msg: "Il processo verrà arrestato dopo la verifica di questo elemento.",
		multi_edit_batch_results_status_error: "Errore",
		multi_edit_batch_results_status_cancelled: "Annullato",
		multi_edit_batch_results_status_cancelled_msg: "L'elemento non è stato aggiornato perché la richiesta è stata annullata.",
		multi_edit_batch_results_dialog_title: "Elementi non aggiornati",
		multi_edit_batch_results_dialog_context_info: "I seguenti elementi non sono stati aggiornati. Selezionare un nome elemento e fare clic su Dettagli per maggiori informazioni sul motivo per cui l'elemento non è stato aggiornato.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nome elemento",
		multi_edit_batch_results_dialog_status_col_hdr: "Stato",
		multi_edit_batch_results_dialog_message_col_hdr: "Messaggio",
		multi_edit_batch_status_errors_msg: "Errori: ${0}",
		multi_edit_batch_permission_error_text: "Non è possibile salvare le modifiche alle proprietà.",
		multi_edit_invalid_value_error: "Questo valore è dipendente da un altro valore di proprietà e non è valido per tutti gli elementi selezionati.",
		multi_edit_batch_permission_error_explanation: "Non è possibile modificare le proprietà di questo elemento perché non si dispone di privilegi sufficienti.",
		multi_edit_no_modifiable_properties: "Impossibile modificare le proprietà degli elementi selezionati. Questo problema può verificarsi quando un elemento include solo proprietà di sola lettura o quando è possibile modificare solo il nome o il titolo dell'elemento. Quando sono selezionati più elementi, non è possibile modificare il nome o il titolo degli elementi.",
		multi_edit_mult_classes_dialog_info: "Gli elementi selezionati sono su repository differenti o appartengono a classi differenti. È possibile modificare solo gli elementi che sono nella stessa classe o nello stesso repository. Selezionare la sottoserie degli elementi da modificare.",
		multi_edit_class_selector_class_heading: "Classe",
		multi_edit_class_selector_entry_template_heading: "Modello di immissione",
		multi_edit_class_selector_repository_heading: "Repository",
		multi_edit_class_selector_items_heading: "Elementi",
		multi_edit_some_classes_not_displayed: "Alcuni degli elementi selezionati non sono inclusi nell'elenco poiché gli elementi contengono solo proprietà di sola lettura o perché gli elementi sono su repository che non supportano le proprietà di modifica.",
		multi_edit_properties_invalid_msg: "Alcuni dei valori di proprietà non sono validi per tutti gli elementi selezionati.",
		multi_edit_properties_readonly_tooltip_text: "${0}: questa proprietà è di sola lettura e non può essere modificata.",
		multi_edit_append_checkbox_label: "Accoda",
		multi_edit_append_checkbox_tooltip: "Selezionare questa opzione se si desidera accodare nuovi valori di proprietà ai valori esistenti piuttosto che sostituirli.",
		multi_edit_properties_invalid_childcomponent_msg: "Alcuni valori nella proprietà ${0} del componente secondario ${1} dipendono da altre proprietà e non sono più validi in seguito alle selezioni effettuate. Annullare i valori nel componente secondario ${1} o apportare le modifiche della proprietà agli elementi selezionati singolarmente.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Esporta proprietà",
		export_properties_dialog_info: "Selezionare le proprietà che si desidera esportare e specificare l'ordine in cui verranno visualizzate.",
		export_properties_dialog_export_button_label: "Esporta",
		export_properties_dialog_export_raw_values: "Esporta valori non elaborati",

		/* Properties */
		filter_clear_tooltip: "Eliminare il filtro",
		properties_new_row: "Nuovo",
		properties_requiredClass_document_tooltip: "Selezionare un documento. Il documento deve appartenere alla classe ${0}.",
		properties_requiredClass_folder_tooltip: "Selezionare una cartella. La cartella deve appartenere alla classe ${0}.",
		properties_dataType_tooltip: "Tipo di dati: ${0}",
		properties_maxLength_tooltip: "Lunghezza massima: ",
		properties_minLength_tooltip: "Lunghezza min: ",
		properties_minValue_tooltip: "Valore minimo: ",
		properties_maxValue_tooltip: "Valore massimo: ",
		properties_format_tooltip: "Formato: ",
		properties_description_tooltip: "Descrizione: ",

		properties_type_boolean_tooltip: "Booleano",
		properties_type_date_tooltip: "Data",
		properties_type_time_tooltip: "Ora",
		properties_type_timestamp_tooltip: "Data/ora",
		properties_type_decimal_tooltip: "Valore decimale",
		properties_type_double_tooltip: "Numero a virgola mobile",
		properties_type_short_tooltip: "Intero",
		properties_type_integer_tooltip: "Intero",
		properties_type_long_tooltip: "Intero",
		properties_type_string_tooltip: "Stringa di testo",
		properties_type_string_alpha_tooltip: "Stringa alfabetica",
		properties_type_string_alphanum_tooltip: "Stringa alfanumerica",
		properties_type_string_ext_tooltip: "Stringa alfanumerica estesa",
		properties_type_string_num_tooltip: "Stringa numerica",
		properties_type_binary_tooltip: "Binario",
		properties_type_object_tooltip: "Oggetto",
		properties_type_reference_tooltip: "Questa proprietà fa riferimento a un altro elemento nel repository.",
		properties_type_guid_tooltip: "GUID (Globally Unique Identifier)",
		properties_type_group_tooltip: "Utenti e gruppi",
		properties_type_user_tooltip: "Utenti",
		properties_type_childComponent_tooltip: "Componente secondario",

		properties_childComponent_minCardinalityOnly_tooltip: "Questa proprietà deve avere almeno ${0} valori.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Questa proprietà non può avere più di ${0} valori.",
		properties_childComponent_minMaxCardinality_tooltip: "Questa proprietà deve avere almeno ${0} e non più di ${1} valori.",
		properties_childComponent_noCardinality_tooltip: "Questa proprietà può avere qualsiasi numero di valori.",

		properties_type_guid_example_tooltip: ", ad esempio {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Selezionare un valore dall'elenco.",
		properties_single_select_choice_tooltip: "Selezionare un valore.",
		properties_multiple_select_typein_tooltip: "Immettere uno o più valori.",
		properties_multiple_select_choice_tooltip: "Selezionare uno o più valori.",
		properties_not_selectable_tooltip: "Impossibile selezionare una categoria.",
		properties_none: "Nessuno",
		properties_none_tooltip: "Selezionare <i>Nessuno</i> per cancellare il valore corrente per questa proprietà.",
		properties_value_empty: "Nessun valore",
		properties_value_read_only: "Sola lettura",
		properties_clear_label: "Cancella i dati",
		properties_clear_tooltip: "L'azzeramento del valore in questo campo annulla il valore nel repository dopo aver fatto clic su <b>Salva</b>.",
		properties_box_custom_properties: "Proprietà personalizzate",
		properties_box_metadata_name_in_use: "Questo nome è già utilizzato. Immettere un altro nome per la proprietà personalizzata.",

		properties_templates: "Modelli",
		properties_add_template: "Aggiungi modello",
		properties_remove_template: "Rimuovi",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Check-in",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Check-in",
		checkin_cancel_label: "Annulla",
		checkin_file_name_label: "Nome file",
		checkin_document_status_title: "Checkin documento",
		checkin_document_status_uploading_msg: "Caricamento file...",
		checkin_document_status_checkingin_msg: "Check in del file...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Seleziona modalità di redazione",
		viewer_redaction_new_document_confirmation_question: "Si desidera salvare la redazione come nuovo documento o file locale?",
		viewer_redaction_new_version_confirmation_question: "Si desidera salvare la redazione come una nuova versione?",
		viewer_redaction_new_version_confirmation_question_never: "Si desidera salvare la redazione come un nuovo contenuto?",		
		viewer_redaction_new_document_button: "Sì",
		viewer_redaction_new_document_cancel_button: "No",
		viewer_redaction_add_document_confirmation_question: "Si desidera salvare la redazione come nuovo documento, nuova versione o file locale?",
		viewer_redaction_add_document_confirmation_question_version_never: "Si desidera salvare la redazione come nuovo documento, nuovo contenuto o file locale?",
		viewer_redaction_add_document_button: "Nuovo documento",
		viewer_redaction_add_new_version_button: "Nuova versione",
		viewer_redaction_add_new_version_button_version_never: "Nuovo contenuto",
		viewer_redaction_add_local_file_button: "File locale",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Seleziona motivo di redazione",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Non è stato possibile trovare il modello di immissione utilizzato per aggiungere questo documento al repository. Il documento verrà sottoposto a check in nel repository senza utilizzare il modello di immissione.",
		property_entry_template_not_retrieved_warning: "Non è stato possibile trovare il modello di immissione utilizzato per aggiungere questo documento al repository. Il documento verrà visualizzato senza utilizzare il modello di immissione.",
		multi_edit_entry_template_not_found_name: "[Non trovato]",
		multi_edit_entry_template_not_retrieved_warning: "Non è stato possibile trovare il modello di immissione utilizzato per aggiungere questi elementi al repository. Le proprietà dell'elemento verranno modificate senza utilizzare il modello di immissione.",
		checkin_major_version_hover: "Incrementa il numero di versione del documento di una unità e imposta lo stato del documento su Rilasciato. Se l'opzione non è selezionata, il documento non è pronto per il rilascio e ne viene eseguito il check-in come versione secondaria.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Non è possibile eseguire il check in del documento perché non è stato sottoposto a check out.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID utente o password non validi per il server.",
		error_bad_userid_password_userResponse: "Accertarsi di avere immesso l'ID utente e la password correttamente.",
		error_bad_userid_password_adminResponse: "È stato restituito il seguente errore: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "messaggio_errore",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Una connessione al client Web non può essere stabilita utilizzando il seguente URL: ${0}.",
		http_send_error_explanation: "Questo errore può essere causato da un problema di configurazione sul server delle applicazioni Web o da un problema con l'applicazione client Web.",
		http_send_error_userResponse: "Provare a rieseguire il login. Se il problema persiste, notificarlo all'amministratore di sistema.",
		http_send_error_adminResponse: "È stato restituito il seguente errore HTTP: ${1}.",
		http_send_error_0: "URL_client_web",
		http_send_error_1: "errore_HTTP",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Una connessione al client Web non può essere stabilita utilizzando il seguente URL: ${0}.",
		http_error_explanation: "Potrebbe essere necessario autenticarsi su un firewall oppure il server delle applicazioni Web potrebbe non essere in esecuzione o non può essere raggiunto a causa di problemi di rete.",
		http_error_userResponse: "Se è necessario eseguire l'autenticazione su un firewall, eseguire l'autenticazione e provare ad accedere di nuovo. Se il problema persiste, notificarlo all'amministratore di sistema.",
		http_error_adminResponse: "È stato restituito il seguente errore HTTP: ${1}.",
		http_error_0: "URL_client_web",
		http_error_1: "errore_HTTP",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Una connessione al client Web non può essere stabilita utilizzando il seguente URL: ${0}.",
		http_response_bad_explanation: "Questo errore può essere causato da un problema di configurazione sul server delle applicazioni Web o da un problema con il client Web.",
		http_response_bad_userResponse: "Provare a rieseguire il login. Se il problema persiste, notificarlo all'amministratore di sistema.",
		http_response_bad_adminResponse: "È stato restituito il seguente errore: ${1}.",
		http_response_bad_0: "URL_client_web",
		http_response_bad_1: "errore_HTTP",
		http_response_bad_number: 2002,

		unititled_document_name: "Senza titolo",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Impossibile avviare l'applet e-mail.",
		email_applet_init_failed_explanation: "Questo problema può verificarsi quando il client email non è correttamente installato e configurato o quando una versione supportata di JRE (Java Runtime Environment) non è installata sulla stazione di lavoro.",
		email_applet_init_failed_userResponse: "Per correggere il problema:<ul><li>Assicurarsi che l'applicazione e-mail sia installata e sia configurata come client e-mail predefinito sulla stazione di lavoro.</li><li>Verificare che una versione supportata di JRE sia installata sulla stazione di lavoro immettendo il seguente comando in un prompt di comandi: java -version</li></ul><p>Un elenco delle versioni supportate di JRE viene incluso nel documento <i>Hardware and software prerequisites for IBM Content Navigator</i> sul sito di supporto IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Non è stato possibile avviare l'applicazione e-mail poiché non è stato possibile caricare un file DLL richiesto.",
		email_applet_JNI_LOAD_FAILED_explanation: "Il file WCEmailAppletJNI.dll richiesto non può essere caricato poiché la directory temporanea sulla stazione di lavoro potrebbe essere piena.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Accertarsi che la directory temporanea disponga di spazio sufficiente. Provare di nuovo a inviare il documento dal client Web. Per impostazione predefinita, il file WCEmailAppletJNI.dll viene caricato nella directory temporanea specificata nelle impostazioni del browser Web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Impossibile avviare l'applicazione e-mail poiché l'applet e-mail non riesce a creare un file temporaneo.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "La directory temporanea sulla stazione di lavoro potrebbe essere piena.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Accertarsi che la directory temporanea disponga di spazio sufficiente. Provare di nuovo a inviare il documento dal client Web.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Impossibile avviare l'applicazione e-mail poiché l'applet e-mail è in grado di accedere alla directory temporanea.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "È possibile che la directory temporanea sulla stazione di lavoro sia piena o che non si disponga dell'accesso appropriato per la scrittura nella directory temporanea.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Accertarsi che la directory temporanea disponga di spazio sufficiente e che si disponga delle autorizzazioni in scrittura nella directory temporanea. Provare di nuovo a inviare il documento dal client Web. Se il problema persiste, rivolgersi all'amministratore di sistema.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "L'applet e-mail non è riuscito a eliminare un file temporaneo.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "È possibile che un'altra applicazione stia utilizzando il file o che il file non sia presente sulla stazione di lavoro.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Se il file è utilizzato da un'altra applicazione, chiudere l'applicazione. Se il file è presente sul file system locale, rimuovere il seguente file dalla directory temporanea sulla stazione di lavoro: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Impossibile creare il link al documento.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Il repository ha restituito l'URL in un formato non valido.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Chiudere il browser includendo tutte le schede e le sessioni e collegarsi di nuovo. Ritentare l'invio del documento dal client Web. Se questo problema persiste, contattare il supporto software IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "L'applet e-mail non è riuscito a allegare il file a un messaggio email.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Il repository ha restituito l'URL al documento in un formato non valido.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Chiudere il browser includendo tutte le schede e le sessioni e collegarsi di nuovo. Ritentare l'invio del documento dal client Web. Se questo problema persiste, contattare il supporto software IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Impossibile creare l'allegato.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "L'applet e-mail non è riuscito a leggere l'URL per il documento.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Chiudere il browser includendo tutte le schede e le sessioni e collegarsi di nuovo. Ritentare l'invio del documento dal client Web. Se questo problema persiste, contattare il supporto software IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Non è stato possibile richiamare il documento dal repository.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "È possibile che si sia verificato il timeout della sessione, che il repository o il server delle applicazioni Web non siano in esecuzione o che vi sia un problema di configurazione del client Web.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Accedere e tentare di inviare di nuovo il documento mediante email. Se il problema persiste, richiedere all'amministratore di verificare i log degli errori del repository.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Se il client Web è stato configurato per convertire documenti AFP in un altro formato, ad esempio PDF, accertarsi che la conversione sia stata configurata correttamente prima di inviare i documenti come allegati.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Il documento non può essere convertito in PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Lo strumento utilizzato per trasformare i documenti in PDF non supporta il tipo di file.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Chiudere la pagina e provare ad inviare il documento via e-mail senza convertirlo in PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "L'email non è stato creata.",
		email_applet_MAPI_USER_ABORT_explanation: "Aprire l'applicazione e-mail ed assicurarsi che funzioni correttamente. Provare di nuovo a inviare il documento dal client Web. Se il problema persiste, contattare l'amministratore di sistema per controllare i log degli eventi del sistema operativo.",
		email_applet_MAPI_USER_ABORT_userResponse: "Se si intendeva chiudere l'applicazione email, non è necessario eseguire nessuna ulteriore azione. Per inviare il messaggio email, accedere all'applicazione email e ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Non è stato possibile creare l'email.",
		email_applet_MAPI_FAILURE_explanation: "È possibile che il client email non sia aperto o che l'utente non abbia effettuato l'accesso a tale client email.",
		email_applet_MAPI_FAILURE_userResponse: "Aprire l'applicazione e-mail ed assicurarsi che funzioni correttamente. Provare di nuovo a inviare il documento dal client Web. Se il problema persiste, contattare l'amministratore di sistema per controllare i log degli eventi del sistema operativo.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Non è stato possibile creare l'email.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "L'utente non ha effettuato l'accesso al client email. Per inviare un messaggio dal client Web, è necessario che il client email sia aperto e che sia stato effettuato l'accesso.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Aprire il client email e effettuare l'accesso. Provare di nuovo a inviare il documento dal client Web.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Impossibile creare il messaggio email poiché non è stato possibile creare il file temporaneo sulla stazione di lavoro.",
		email_applet_MAPI_DISK_FULL_explanation: "La directory temporanea sulla stazione di lavoro potrebbe essere piena.",
		email_applet_MAPI_DISK_FULL_userResponse: "Accertarsi che la directory temporanea disponga di spazio sufficiente. Provare di nuovo a inviare il documento dal client Web.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Non è stato possibile creare l'email poiché non è disponibile sufficiente memoria di sistema.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "È possibile che vi sia un numero eccessivo di applicazioni aperte.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Chiudere tutte le applicazioni non utilizzate e ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Accesso MAPI negato.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "È possibile che l'accesso MAPI (Messaging Application Programming Interface) non sia abilitato o supportato per l'applicazione email. MAPI è un protocollo di messaggistica utilizzato per consentire le comunicazioni tra il client Web e l'applicazione email.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Contattare l'amministratore del sistema.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Accertarsi che l'applicazione email abbia l'accesso MAPI impostato e che sia configurato correttamente. Se il problema persiste, contattare il supporto software IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Impossibile creare l'allegato o il link all'elemento.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "È possibile che vi sia un numero eccessivo di sessioni di browser aperte.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Chiudere tutte le sessioni di browser non utilizzate. Provare di nuovo a inviare il documento dal client Web. Se il problema persiste, contattare l'amministratore di sistema.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Impossibile inviare l'email.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "È possibile che si stia tentando di inviare un numero eccessivo di allegati.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Selezionare un numero inferiore di file. Ritentare quindi l'invio del documento dal client Web.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Impossibile inviare l'email.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "È possibile che si stia tentando di inviare l'email ad un numero eccessivo di destinatari.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Inviare l'email ad un numero inferiore di destinatari.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Impossibile creare l'allegato.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "È possibile che alcuni dei file temporanei richiesti siano stati eliminati prima che sia stato possibile creare l'allegato. Questo errore si può verificare se i dati nella cache del browser vengono eliminati prima dell'invio dell'email.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Impossibile creare l'allegato.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "È possibile che alcuni dei file temporanei richiesti siano stati eliminati prima che sia stato possibile creare l'allegato. Questo errore si può verificare se i dati nella cache del browser vengono eliminati prima dell'invio dell'email.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "L'applicazione email non è riuscita a creare l'allegato.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Impossibile inviare l'email al destinatario specificato.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "È possibile che il destinatario non sia presente nella rubrica.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Verificare il nome del destinatario e tentare di inviare di nuovo il documento.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Impossibile inviare l'email al destinatario specificato.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "L'indirizzo email potrebbe avere un formato non corretto.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Assicurarsi di aver immesso un indirizzo email valido e provare a inviare di nuovo il documento.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_NO_MESSAGES_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Impossibile inviare l'email.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "È possibile che l'email abbia una lunghezza eccessiva.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Abbreviare il testo dell'email e provare a inviarlo di nuovo.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Non è stato possibile creare l'email.",
		email_applet_MAPI_INVALID_SESSION_explanation: "È possibile che si sia verificato un errore nel client email durante il tentativo di creazione del messaggio email.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Riavviare il client email e ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "È possibile che l'email non sia stato specificato correttamente.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Impossibile inviare l'email al destinatario specificato.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "L'indirizzo email potrebbe avere un formato non corretto.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Assicurarsi di aver immesso un indirizzo email valido e inviare di nuovo il documento.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Il client email non è riuscito ad eseguire l'azione richiesta.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "L'applicazione email ha restituito un errore non previsto.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Ritentare l'invio del documento dal client Web.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Una delle proprietà non dispone del numero di valori richiesto.",
		error_property_cardinality_explanation: "Alcune proprietà hanno un numero minimo e massimo di valori.",
		error_property_cardinality_userResponse: "Utilizzare la guida a comparsa per determinare quale proprietà richiede un numero minimo dei valori. Specificare quindi il numero minimo di valori e ritentare l'operazione.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "È obbligatorio un nome file.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Specificare un nome file e ritentare l'operazione.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Il plug-in ${0} contiene errori.",
		plugin_error_explanation: "Si è verificato un errore durante la valutazione di JavaScript per il plug-in ${0}. Se si continua ad utilizzare il client Web, è possibile che si verifichino ulteriori errori.",
		plugin_error_userResponse: "Contattare l'amministratore del sistema.",
		plugin_error_adminResponse: "Si è verificato un problema con il plug-in che deve essere risolto dal provider del plug-in. Si raccomanda di rimuovere il plug-in dalla configurazione del client Web fino a quando non viene risolto il problema con il plug-in.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Impossibile aprire il modello di immissione.",
		open_old_format_entry_template_error_explanation: "Il modello di immissione utilizza un formato precedente non supportato nel client Web.",
		open_old_format_entry_template_error_userResponse: "Richiedere all'amministratore di sistema di aggiornare il modello di immissione.",
		open_old_format_entry_template_error_adminResponse: "Utilizzare Application Engine o Workplace XT Entry Template Designer per salvare una versione aggiornata del modello di immissione.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Impossibile aprire il modello di immissione.",
		open_custom_object_entry_template_error_explanation: "Il client Web non supporta il seguente tipo di modello di immissione: modelli di immissione Oggetto personalizzato.",
		open_custom_object_entry_template_error_userResponse: "Aprire un modello di immissione diverso.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Impossibile aprire l'oggetto eforms.",
		open_forms_object_error_explanation: "Il client Web nono supporta i seguenti tipi di oggetto eforms: modello modulo, dati modulo, criterio documento e criterio flusso di lavoro.",
		open_forms_object_error_userResponse: "Aprire un documento diverso.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Non è possibile utilizzare il modello di immissione ${0}.",
		entry_template_folder_restricted_error_explanation: "Il modello di immissione aggiunge elementi nella cartella ${1} e l'utente non dispone dei permessi appropriati per l'aggiunta di elementi a tale cartella.",
		entry_template_folder_restricted_error_userResponse: "Selezionare un modello di immissione diverso o richiedere all'amministratore di sistema i permessi appropriati per l'aggiunta di elementi alla cartella ${1}.",
		entry_template_folder_restricted_error_0: "nome_modello_immissione",
		entry_template_folder_restricted_error_1: "nome_cartella",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Impossibile aprire il modello di immissione.",
		open_records_entry_template_error_explanation: "Il client Web non supporta il seguente tipo di modello di immissione: modelli di immissione Dichiara come record.",
		open_records_entry_template_error_userResponse: "Aprire un modello di immissione diverso.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Impossibile aprire il flusso di lavoro.",
		open_workflow_error_explanation: "Il client Web non supporta l'apertura dei flussi di lavoro.",
		open_workflow_error_userResponse: "Aprire un documento diverso.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Impossibile aprire il documento.",
		viewer_unable_to_view_error_explanation: "Nessun visualizzatore configurato per documenti di questo tipo oppure il visualizzatore configurato non è compatibile con il sistema.",
		viewer_unable_to_view_error_userResponse: "Richiedere all'amministratore di sistema di configurare un visualizzatore per i documenti di questo tipo e verificare che il visualizzatore configurato funzioni con il sistema dell'utente.",
		viewer_unable_to_view_error_adminResponse: "Utilizzare lo strumento di amministrazione per configurare un visualizzatore per questo tipo di documento.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Non è stato possibile aprire la ricerca.",
		search_cannot_open_error_explanation: "La funzione di ricerca non è configurata per questo desktop.",
		search_cannot_open_error_userResponse: "Richiedere all'amministratore se è possibile accedere a un desktop che includa la funzione di ricerca o se è possibile aggiornare questo desktop per includere la funzione di ricerca.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Il documento non è stato caricato.",
		viewer_document_load_failed_error_explanation: "Il visualizzatore Daeja ViewONE Professional non è in grado di aprire il documento.",
		viewer_document_load_failed_error_userResponse: "Per ulteriori informazioni, consultare il messaggio di errore visualizzato nel visualizzatore.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Il documento non può essere visualizzato.",
		viewer_session_expired_explanation: "Non è possibile richiamare il contenuto del documento.",
		viewer_session_expired_userResponse: "Provare a collegarsi di nuovo. Se il problema persiste, il server delle applicazioni potrebbe non essere in esecuzione. Richiedere all'amministratore di sistema di verificare i log degli errori di IBM Content Navigator o di riavviare il server.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Il documento non può essere visualizzato.",
		ajaxViewer_getPage_failed_explanation: "Il visualizzatore AJAX ha ricevuto una risposta di errore durante il richiamo del contenuto della pagina. Il server delle applicazioni potrebbe non essere in esecuzione.",
		ajaxViewer_getPage_failed_userResponse: "Chiudere il browser web e ricollegarsi. Se il problema persiste, chiedere all'amministratore di sistema di riesaminare i file di log del server delle applicazioni web o di riavviare il server.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Impossibile rilevare JRE (Java Runtime Environment) sulla stazione di lavoro in uso.",
		viewer_java_plugin_not_found_explanation: "Il plug-in non è stato trovato o la versione corretta di JRE non è installata.",
		viewer_java_plugin_not_found_userResponse: "Verificare che il JRE sia installato. Ad esempio, in un prompt dei comandi, immettere il seguente comando: Java -version. Se il JRE non è installato oppure è installato con la versione errata, installare la versione appropriata di JRE. Un elenco delle versioni supportate viene incluso nel documento <i>Hardware and software prerequisites for IBM Content Navigator</i> sul sito di supporto IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Il documento non può essere visualizzato nel browser web dell'utente.",
		viewer_pdf_plugin_not_found_explanation: "Il plug-in utilizzato per visualizzare i documenti PDF nel browser web non è stato trovato.",
		viewer_pdf_plugin_not_found_userResponse: "Il file PDF verrà scaricato nella stazione di lavoro invece di essere visualizzato nella finestra del visualizzatore.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Impossibile aggiungere il seguente elemento al repository: ${0}.",
		add_document_single_item_error_explanation: "Questo errore può verificarsi per una delle seguenti ragioni:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si sta cercando di aggiungere un documento che è stato spostato o eliminato.</li>" + "<li>Si sta cercando di aggiungere un documento che è stato ridenominato.</li>" + "<li>Si sta cercando di aggiungere un documento che è danneggiato.</li>" + "<li>Si sta cercando di aggiungere un documento che è aperto in un'altra applicazione.</li>" + "<li>Si sta cercando di aggiungere una cartella al repository.</li>" + "<li>L'utente non dispone delle autorizzazioni appropriate sul sistema operativo per accedere al documento.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Effettuare l'azione appropriata per risolvere il problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Se il documento è stato spostato o ridenominato, individuare il documento sul file system e provare ad aggiungerlo di nuovo.</li>" + "<li>Se il documento è aperto in un'altra applicazione, chiuderlo e provare di nuovo ad aggiungerlo.</li>" + "</ul>" + "<br>Non è possibile aggiungere cartelle al repository.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "I seguenti elementi ${0} non possono essere aggiunti al repository: ${1}",
		add_document_multiple_items_error_explanation: "Un problema con uno degli elementi impedisce a uno degli elementi di essere aggiunto al repository. Questo errore può verificarsi per una delle seguenti ragioni:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si sta cercando di aggiungere un documento che è stato spostato o eliminato.</li>" + "<li>Si sta cercando di aggiungere un documento che è stato ridenominato.</li>" + "<li>Si sta cercando di aggiungere un documento che è danneggiato.</li>" + "<li>Si sta cercando di aggiungere un documento che è aperto in un'altra applicazione.</li>" + "<li>Si sta cercando di aggiungere una cartella al repository.</li>" + "<li>L'utente non dispone delle autorizzazioni appropriate sul sistema operativo per accedere al documento.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Effettuare l'azione appropriata per risolvere il problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Se il documento è stato spostato o ridenominato, individuare il documento sul file system e provare ad aggiungere di nuovo gli elementi.</li>" + "<li>Se il documento è aperto in un'altra applicazione, chiuderlo e provare di nuovo ad aggiungere gli elementi.</li>" + "<li>Se un documento è stato eliminato o è danneggiato, deselezionare l'elemento e provare ad aggiungere di nuovo gli elementi rimanenti.</li>" + "</ul>" + "<br>Non è possibile aggiungere cartelle al repository.",
		add_document_multiple_items_error_0: "numero_di_elementi",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Non è possibile trascinare e rilasciare gli elementi da questa posizione.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Impossibile aprire l'oggetto eforms.",
		open_forms_work_object_error_explanation: "Il client web non supporta i seguenti tipi di oggetti eforms: criterio flusso di lavoro.",
		open_forms_work_object_error_userResponse: "Aprire un documento diverso.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Impossibile aprire il documento.",
		viewer_privilege_to_view_error_explanation: "Non si dispone dei privilegi appropriati per visualizzare il documento.",
		viewer_privilege_to_view_error_userResponse: "Richiedere al proprietario del documento o all'amministratore di sistema di fornire le autorizzazioni appropriate per visualizzare il documento.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Impossibile aggiungere questi elementi al repository.",
		add_document_too_many_items_error_explanation: "È possibile aggiungere fino a ${0} elementi per volta. Si sta provando ad aggiungere ${1} elementi.",
		add_document_too_many_items_error_userResponse: "Eliminare alcuni elementi dall'elenco e provare ad aggiungere di nuovo gli elementi. È inoltre possibile contattare l'amministratore di sistema per incrementare il numero massimo di documenti che è possibile aggiungere a questo desktop.",
		add_document_too_many_items_error_0: "numero_massimo_di_elementi",
		add_document_too_many_items_error_1: "numero_di_elementi",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Una connessione al client Web non può essere stabilita utilizzando il seguente URL: ${0}.",
		http_ltpa_expired_explanation: "La chiave LTPA associata alla propria sessione browser è scaduta.",
		http_ltpa_expired_userResponse: "Riavviare il browser Web e provare a collegarsi di nuovo. Se il problema persiste, notificare il seguente errore all'amministratore di sistema: ${1}.",
		http_ltpa_expired_0: "URL_client_web",
		http_ltpa_expired_1: "errore_HTTP",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Impossibile aggiungere il documento alla cartella ${0}.",
		dnd_no_privilege_error_explanation: "I permessi sulla cartella impediscono l'aggiunta di qualsiasi documento alla cartella.",
		dnd_no_privilege_error_userResponse: "Aggiungere il documento ad una cartella diversa.",
		dnd_no_privilege_error_0: "nome_elemento",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Gli elementi non possono essere modificati.",
		modify_document_too_many_items_error_explanation: "È possibile modificare fino a ${0} elementi per volta. Si sta provando a modificare ${1} elementi.",
		modify_document_too_many_items_error_userResponse: "Selezionare alcuni elementi e tentare di modificare di nuovo gli elementi. È inoltre possibile rivolgersi all'amministratore di sistema per incrementare il numero massimo di elementi che è possibile modificare contemporaneamente da questo desktop.",
		modify_document_too_many_items_error_0: "numero_massimo_di_elementi",
		modify_document_too_many_items_error_1: "numero_di_elementi",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Non è possibile utilizzare la classe ${0}.",
		add_document_multiple_unique_values_error_explanation: "La classe ${0} contiene una o più proprietà che richiede un valore univoco per ciascun documento. Quando si aggiungono più documenti, tutti i documenti utilizzano gli stessi valori.",
		add_document_multiple_unique_values_error_userResponse: "Selezionare una classe differente o aggiungere i documenti separatamente.",
		add_document_multiple_unique_values_error_0: "nome_visualizzato_classe",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Non è possibile utilizzare il modello di immissione ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Il modello di immissione ${0} richiede di aggiungere i documenti alla classe ${1}. Tuttavia la classe ${1} contiene una o più proprietà che richiedono un valore univoco per ciascun documento. Quando si aggiungono più documenti, tutti i documenti utilizzano gli stessi valori.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Selezionare un modello di immissione differente o aggiungere i documenti separatamente.",
		add_document_multiple_unique_values_entry_template_error_0: "nome_modello_immissione",
		add_document_multiple_unique_values_entry_template_error_1: "nome_visualizzato_classe",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Non è possibile utilizzare il modello di immissione ${0}.",
		entry_template_class_restricted_error_explanation: "Il modello di immissione aggiunge elementi utilizzando la classe ${1}, e l'utente non dispone delle autorizzazioni appropriate per aggiungere gli elementi utilizzando quella classe.",
		entry_template_class_restricted_error_userResponse: "Selezionare un modello di immissione diverso o richiedere all'amministratore di sistema le autorizzazioni appropriate per l'aggiunta di elementi utilizzando la classe ${1}.",
		entry_template_class_restricted_error_0: "nome_modello_immissione",
		entry_template_class_restricted_error_1: "nome_visualizzato_classe",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Non è stato possibile riassegnare l'elemento di lavoro a un altro utente.",
		process_reassign_error_explanation: "Questa azione non è consentita dal flusso di lavoro.",
		process_reassign_error_userResponse: "È possibile aprire l'elemento di lavoro e completare il passo corrente nell'elemento di lavoro.  Per ulteriori informazioni su questa questione, richiedere al proprietario dell'elemento di verificare che l'elemento di lavoro può essere riassegnato.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Impossibile caricare la seguente azione personalizzata: ${0}.",
		customaction_loadurl_error_explanation: "L'azione personalizzata non si trova in una posizione accessibile. L'URL corrente dell'azione personalizzata è ${1}.",
		customaction_loadurl_error_userResponse: "Richiedere al proprio amministratore di spostare l'azione personalizzata in una posizione accessibile.",
		customaction_loadurl_error_adminResponse: "Il file JSP che definisce l'azione personalizzata deve essere fornito come parte dell'applicazione Web  eClient o dell'applicazione Web IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Non è stata trovata la seguente funzione: ${0}.",
		feature_invalid_explanation: "Questo problema si può verificare se la funzione non è disponibile sul desktop specificato o il nome funzione contiene errori di ortografia.",
		feature_invalid_userResponse: "Quando si fa clic su OK, si viene reindirizzati alla funzione predefinita per questo desktop. Rivolgersi all'amministratore di sistema per riportare questo problema.",
		feature_invalid_adminResponse: "Se la funzione deve essere disponibile sul desktop, aggiornare la configurazione del desktop nello strumento di amministrazione. Se la funzione non dovesse essere inclusa nel desktop o contenesse errori di ortografia, consultare lo sviluppatore di applicazioni che ha creato l'URL per questa funzione in modo da aggiornare l'URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Impossibile aprire la ricerca ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "Per aprire questa ricerca è necessario trovarsi in uno spazio team.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Selezionare una ricerca diversa.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Il seguente file non può essere importato: ${0}.",
		wrong_import_file_type_error_explanation: "Il file deve essere un file delle proprietà.",
		wrong_import_file_type_error_userResponse: "Selezionare il file delle proprietà esportato dallo strumento di amministrazione.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Impossibile trovare il repository ${0} nel desktop ${1}.",
		browse_repository_not_found_error_explanation: "Il repository deve essere presente sul desktop ed abilitato alla funzione Sfoglia quando viene specificato in un parametro URL.",
		browse_repository_not_found_error_userResponse: "Accertarsi che l'ID del repository specificato nell'URL sia corretto, il repository è stato aggiunto al desktop ${1} e la funzione Sfoglia del repository è abilitata.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Il repository ${0} non è abilitato per la funzione Sfoglia nel desktop ${1}.",
		browse_repository_not_enabled_error_explanation: "Il repository deve essere abilitato alla funzione Sfoglia quando viene specificato in un parametro URL.",
		browse_repository_not_enabled_error_userResponse: "Abilitare la funzione Sfoglia per il repository ${0} nel desktop ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Impossibile completare la ricerca poiché il link contiene criteri non validi.",
		invalid_xt_stored_search_criteria_error_explanation: "Il seguente valore non è valido: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Chiedere all'amministratore di sistema di fornire un link aggiornato.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Modificare la coppia nome-valore corretta nell'URL. Se non si conoscono i valori validi per la proprietà, aprire la ricerca memorizzata in Workplace XT Search Designer per determinare un valore valido.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Impossibile aprire la ricerca tra repository.",
		unified_search_invalid_fixed_value_error_explanation: "La ricerca tra repository include criteri non validi. Questo problema può verificarsi quando un criterio ha un valore fisso che non è compatibile con le altre proprietà di un'associazione. Ad esempio, questo problema può verificarsi se il valore fisso è una stringa ma le altre proprietà nell'associazione sono numeri interi.",
		unified_search_invalid_fixed_value_error_userResponse: "Se si dispone dei permessi appropriati per modificare la ricerca, rimuovere i valori non corretti ed effettuare nuovamente la ricerca. Se no si dispone dei permessi appropriati per modificare la ricerca, richiedere al proprietario della ricerca o all'amministratore di sistema di salvare di nuovo la ricerca.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "La propria richiesta non può essere completata.",
		launch_action_invalid_json_error_explanation: "I dati trasmessi al client web non sono validi.",
		launch_action_invalid_json_error_userResponse: "Comunicare all'amministratore del sistema l'applicazione che si stava utilizzando quando si è verificato il problema.",
		launch_action_invalid_json_error_adminResponse: "L'applicazione del client non ha inviato un oggetto JSON valido al client web. Per ulteriore assistenza, contattare il Supporto software IBM.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "La propria richiesta non può essere completata.",
		launch_action_not_found_error_explanation: "L'azione ${0} non è configurata per alcun menu sul desktop ${1}.",
		launch_action_not_found_error_userResponse: "Chiedere all'amministratore del sistema di configurare il desktop ${1} in modo che utilizzi un menu che contenga l'azione ${0} o di assegnare l'utente ad un desktop che includa l'azione ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "La propria richiesta non può essere completata.",
		launch_action_repository_not_found_error_explanation: "Il repository ${0} non è associato con il desktop ${1}.",
		launch_action_repository_not_found_error_userResponse: "Chiedere all'amministratore del sistema di associare il repository ${0} con il desktop ${1} oppure di assegnare l'utente ad un desktop che includa il repository ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Non è stato possibile aprire lo spazio team.",
		teamspace_cannot_open_error_explanation: "La funzione spazio team non è configurata per questo desktop.",
		teamspace_cannot_open_error_userResponse: "Richiedere all'amministratore se è possibile accedere a un desktop che includa la funzione di ricerca o se è possibile aggiornare questo desktop per includere la funzione spazio team.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Si è verificato un errore durante l'esecuzione del check-in del contenuto redatto.",
		viewer_redaction_checkin_failed_explanation: "Il visualizzatore ha ricevuto una risposta di errore durante la verifica del contenuto revisionato.",
		viewer_redaction_checkin_failed_userResponse: "Richiedere all'amministratore di sistema di riesaminare i file di log del server delle applicazioni.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Non è possibile aggiungere documenti a questo repository.",
		add_document_odserver_odwek_version_od_error_explanation: "La versione corrente di server IBM Content Manager OnDemand o ODWEK non è al livello minimo richiesto per supportare l'aggiunta di documenti ad un repository Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Richiedere all'amministratore di controllare quali versioni di server Content Manager OnDemand ed ODWEK sono richieste per supportare l'aggiunta di documenti ai repository Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Impossibile aggiungere questi elementi al repository.",
		add_document_too_many_items_od_error_explanation: "Per i repository IBM Content Manager OnDemand, è possibile aggiungere un solo elemento alla volta.",
		add_document_too_many_items_od_error_userResponse: "Rimuovere alcuni elementi dall'elenco e provare ad aggiungerli nuovamente uno alla volta.",
		add_document_too_many_items_od_error_0: "numero_massimo_di_elementi",
		add_document_too_many_items_od_error_1: "numero_di_elementi",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Impossibile aggiungere l'elemento al repository.",
		add_document_filesize_empty_od_error_explanation: "Non è possibile aggiungere file vuoti ad un repository IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Aggiungere contenuto al file e provare ad aggiungere nuovamente il file oppure aggiungere un elemento differente.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Impossibile aprire la ricerca tra repository.",
		unified_search_repository_not_found_error_explanation: "La ricerca tra repository include uno o più repository non validi. Questo problema può verificarsi quando i repository inclusi nella ricerca vengono eliminati dall'applicazione o rimossi dal desktop corrente.",
		unified_search_repository_not_found_error_userResponse: "Se si dispone dei permessi appropriati per modificare la ricerca, salvare di nuovo la ricerca. Quando la ricerca viene salvata, il client Web rimuove i repository non validi dalla ricerca. Se no si dispone dei permessi appropriati per modificare la ricerca, richiedere al proprietario della ricerca o all'amministratore di sistema di salvare di nuovo la ricerca.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Impossibile creare un nuovo documento",
		edit_document_using_office_online_error: "Impossibile aprire il documento.",
		edit_document_using_office_online_error_explanation: "L'URL di Microsoft Office Online Server URL non è configurato.",
		edit_document_using_office_online_error_userResponse: "Prima di poter utilizzare Office Online, l'amministratore deve prima abilitare Office Online Server su un repository e specificare l'URL Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Il documento non può essere aperto in Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Richiedere all'amministratore di aggiornare l'Integrazione MS Office Online Server.<br><br> Se l'utente deve accedere a questo documento da Microsoft Office Online, accedere alla pagina Modifica integrazione del repository ed aggiornare l'integrazione di MS Office Online Server in modo da includere la classe nell'elenco delle classi da modificare per il supporto di office online. ",		
		browser_not_support_this_viewer: "Il visualizzatore configurato non è compatibile con il browser.",
		browser_not_support_this_viewer_explanation: "${0} non è supportato dal broswer.",
		browser_not_support_this_viewer_userResponse: "Utilizzare un altro visualizzatore per aprire il documento. Un elenco dei broswer supportati viene incluso nel documento <i>Hardware and software prerequisites for IBM Content Navigator</i> sul sito di supporto IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informazioni sul flusso di lavoro",
		process_information_info_text: "L'elemento selezionato attualmente è in esecuzione sui seguenti flussi di lavoro.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Uguale a",
		operator_NOTEQUAL: "Diverso da",
		operator_LIKE: "Simile a",
		operator_STARTSWITH: "Inizia con",
		operator_ENDSWITH: "Termina con",
		operator_NOTLIKE: "Diverso da",
		operator_NULL: "È vuoto",
		operator_NOTNULL: "Non è vuoto",
		operator_LESS: "Minore di",
		operator_LESSOREQUAL: "Minore o uguale a",
		operator_GREATER: "Maggiore di",
		operator_GREATEROREQUAL: "Maggiore o uguale a",
		operator_BETWEEN: "Compreso tra",
		operator_NOTBETWEEN: "Non compreso tra",
		operator_IN: "Includi tutto",
		operator_INANY: "Includi qualsiasi",
		operator_NOTIN: "Escludi tutto",
		operator_CONTAINS: "Contiene",

		/* SearchForm widget */
		search_button_tooltip: "Ricercare documenti che corrispondono al criterio.",
		reset_button_tooltip: "Reimpostare la ricerca sui valori predefiniti impostati dall'amministratore.",
		clear_button_tooltip: "Rimuove tutti i valori immessi per la ricerca.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Seleziona ricerca",
		append_to_search: "Accoda alla ricerca",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nuova ricerca",
		new_unified_search: "Nuova ricerca tra repository",
		searh_name_contains: "Il nome ricerca contiene",
		keep_search_criteria_expanded: "Mantenere aperto il criterio di ricerca",
		showing_results: "Visualizzazione dei risultati per:",
		open_in_new_window: "Apri in una nuova finestra",
		open_in_new_tab: "Apri in una nuova scheda",
		close_tab: "Chiudi scheda",
		add_repository: "Aggiungi repository",
		edit_repository: "Modifica repository",
		remove_repository: "Rimuovi",
		search_scope: "Ambito di ricerca",
		search_class_template: "Classe",
		object_type_version: "Tipo e versione oggetto",
		not_applicable: "Non applicabile",
		unified_search_including_subfolders: " (Incluse sottocartelle)",
		unified_search_dialog_intro_text: "Selezionare il repository e la ricerca o le classi che si desidera includere nella ricerca.",
		unified_search_class_or_template: "Classe o modello",

		select_object_fieldset_legend: "Come si desidera trovare gli elementi da allegare:",
		select_object_create_new_search: "Nuova ricerca",
		select_object_search_template: "Ricerca esistente",

		search_criteria: "Criterio di ricerca:",
		search_criteria_no_colon: "Criterio di ricerca",
		search_in_multiple: "Cerca in (${0}):",
		search_location_including_subfolders: "${0} incluse le sottocartelle",
		search_class: "Classe:",
		search_class_multiple: "Classe (${0}):",
		search_class_including_subclasses: "${0} incluse le sottoclassi",
		search_class_all_pseudo: "Tutto",
		search_results: "Risultati della ricerca",
		select_operator: "Seleziona un operatore",
		ending_value: "Il valore finale della proprietà ${0} è:",
		search_options: "Opzioni di ricerca:",
		search_version: "Versione:",
		search_released_version: "Versione rilasciata",
		search_current_version: "Versione corrente",
		search_all_versions: "Tutte le versioni",
		search_file_type_filter: "Filtro per tipo di file:",
		search_one_file_type: "1 tipo di file",
		search_many_file_types: "${0} tipi di file",
		search_action_filter: "Filtro azioni:",
		search_action_filter_hover_help: "Limitare i risultati per includere solo i file su cui gli utenti hanno intrapreso un'azione specifica.<br/>Ad esempio, è possibile ricercare solo documenti aggiunti il 20 settembre 2012.",
		search_action_filter_enabled: "Filtro azioni è abilitato",
		search_enable: "Abilita",
		search_disable: "Disabilita",
		search_by: "da",
		search_added: "Aggiunto",
		search_modified: "Modificato",
		search_checked_out: "Sottoposto a check out",
		search_date_operator_on: "Attivo",
		search_date_operator_not_on: "Non il",
		search_date_operator_before: "Prima di",
		search_date_operator_after: "Dopo",
		search_version_hover_help_p8: "Una versione rilasciata è disponibile per tutti gli utenti. Un documento che è una versione corrente indica che uno o più utenti stanno modificando tale documento.",
		search_version_hover_help_cm: "Una versione corrente è l'ultima versione di un elemento.",
		search_using: "Ricercare gli elementi che corrispondono a:",
		search_property_and_text_criteria: "Entrambi i valori della proprietà e i criteri del testo",
		search_property_or_text_criteria: "I valori della proprietà o i criteri di testo",
		search_property_and_text: "Entrambe la proprietà e i criteri di testo",
		search_property_or_text: "La proprietà o i criteri di testo",
		search_property_options: "Opzioni proprietà:",
		search_property_option_match_all: "Tutte le proprietà",
		search_property_option_match_any: "Una qualsiasi delle proprietà",
		search_property_option_match_all_summary: "Corrispondenza totale",
		search_property_option_match_any_summary: "Corrispondenza parziale",
		search_total_count_type_total: "Totale",
		search_total_count_type_atleast: "Almeno",
		search_content_size_filter: "Filtro dimensioni contenuto",
		search_content_size_filter_any: "Qualsiasi dimensioni contenuto",

		/* Search work options */
		search_work_filter: "Filtro degli elementi di lavoro:",
		search_work_filter_hover_help: "Restringe i risultati in modo da includere solo gli elementi che si trovano in un flusso di lavoro. Ad esempio, è possibile limitare i risultati in modo da includere solo gli elementi di lavoro attivi.<br /><br />Questa opzione non si applica se si desidera visualizzare tutte le versioni degli elementi restituiti dalla ricerca.",
		search_work_filter_enabled: "Filtro degli elementi di lavoro abilitato",
		search_work_filter_status: "Stato:",
		search_work_filter_step: "Passo:",
		search_work_filter_owner: "Proprietario:",
		search_work_filter_status_all: "Tutti gli elementi",
		search_work_filter_status_active: "Elementi attivi",
		search_work_filter_status_suspended: "Elementi in sospeso",
		search_work_filter_process_all: "Tutti i flussi di lavoro",
		search_work_filter_step_all: "Tutte le fasi",
		search_work_filter_owner_all: "Tutti gli utenti",
		search_work_filter_step_error: "Il nome della fase non esiste.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Non è possibile completare la ricerca senza informazioni aggiuntive. Immettere un valore per almeno una condizione.",
		search_insufficient_input_box: "Non è possibile completare la ricerca senza informazioni aggiuntive. Immettere i criteri di ricerca del testo o selezionare un modello di metadati.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "La ricerca non può essere configurata per essere eseguita quando viene aperta senza informazioni aggiuntive. Immettere un valore per almeno una condizione.",
		search_member_required: "Per condividere questa ricerca con utenti e gruppi specifici, selezionare almeno un utente o gruppo con cui condividere questa ricerca.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Si desidera chiudere senza salvare le modifiche?",
		search_prompt_close_all_without_save: "Si desidera chiudere tutte le schede senza salvare le modifiche?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Uno dei seguenti tipi di criteri di ricerca non è valido per questo repository: ${0}. Per eseguire la ricerca nel client web, è necessario rimuovere i criteri non validi. Se si salva la ricerca, verranno rimossi i criteri non validi. Se non si desidera modificare la ricerca, chiuderla.",
		search_invalid_repository: "Uno o più repository",
		search_invalid_class: "Una o più classi",
		search_invalid_folder: "Una o più cartelle",
		search_invalid_file_type: "Uno o più tipi file",
		search_invalid_property: "Una o più proprietà",
		search_invalid_text_search: "Criteri di ricerca di testo",
		search_invalid_work: "Criteri di filtro degli elementi di lavoro",

		search_operator_pulldown_missing: "Un operatore è obbligatorio. Selezionare un operatore dal menu a discesa. Se non viene visualizzato alcun operatore, richiedere all'amministratore di sistema di controllare la scheda <b>Ricerca</b> nello strumento di amministrazione per verificare se tutti gli operatori sono nascosti. Se questa ricerca è una ricerca tra repository, il menu a discesa potrebbe non contenere operatori se le proprietà associate non dispongono di operatori comuni.",

		/*SearchBuilder */
		open_search_builder: "Nuova ricerca",
		document_type: "Classe",
		show_all_properties: "Mostra tutte le proprietà",
		text_search_label: "Trova elementi con i seguenti termini:",
		text_search_place_holder: "Utilizzare una combinazione di termini e operatori: * ? o \"frasi con corrispondenza esatta\"",
		text_search_place_holder_box: "Utilizzare una combinazione di termini e operatori: AND, OR, NOT e \"frasi con corrispondenza esatta\"",
		text_search_place_holder_cascade_proximity: "Utilizzare una combinazione di termini e operatori: * o ?",
		text_search_place_holder_common: "Utilizzare una combinazione di termini e \"frasi con corrispondenza esatta\"",
		text_search_hover_help_p8: "Utilizzare l'asterisco (*) o il punto interrogativo (?) come carattere jolly. Utilizzare le virgolette (\"\") per le corrispondenze esatte.",
		text_search_hover_help_p8_only_crs: "Utilizzare l'asterisco (*) o il punto interrogativo (?) come carattere jolly. Utilizzare le virgolette (\"\") per le corrispondenze esatte. Quando vengono specificati più termini, una ricerca tra repository restituisce elementi che contengono uno qualsiasi dei termini.",
		text_search_hover_help_cm: "Utilizzare l'asterisco (*) o il punto interrogativo (?) come carattere jolly. Utilizzare le virgolette (\"\") per le corrispondenze esatte. Utilizzare il segno meno (-) da anteporre ai termini da escludere e il segno più (+) da posporre ai termini da includere.",
		text_search_hover_help_box: "Utilizzare AND tra i termini per mettere in corrispondenza tutti i termini. Utilizzare OR tra i termini per mettere in corrispondenza un qualsiasi termine. Utilizzare le virgolette (\"\") per le corrispondenze esatte. Anteporre NOT ad un termine per escluderlo.",
		text_search_hover_help_common: "Utilizzare le virgolette (\"\") per le corrispondenze esatte. Quando vengono specificati più termini, una ricerca tra repository restituisce elementi che contengono tutti i termini.",
		text_search_options: "Opzioni testo:",
		text_search_options_hover_help: "Se si utilizza qualsiasi operatore diverso dai caratteri jolly, selezionare Operatori avanzati.",
		text_search_option_any: "Uno qualsiasi dei termini",
		text_search_option_all: "Tutti i termini",
		text_search_option_proximity: "Nell'intervallo di parole:",
		text_search_option_none: "Operatori avanzati",
		text_search_option_authoring: "La ricerca del testo è:",
		text_search_option_authoring_hover_help: "Scegliere un'opzione che determina il modo in cui si desidera rendere i criteri di ricerca testo disponibili per gli utenti. Se non si desidera includere alcun criterio di ricerca testo nella ricerca, nascondere l'opzione. In caso contrario, è possibile consentire che i criteri di ricerca testo vengano modificati o richiesti dagli utenti o renderli di sola lettura.",
		text_search_option_hide: "Nascondi criterio",
		text_search_option_hide_hover_help: "Selezionare questa opzione se non si desidera includere alcun criterio di ricerca testo nella ricerca o non consentire a altri utenti di specificare il criterio di ricerca testo.",
		text_search_option_in: "Nella tag HTML/XML ${0}",
		text_search_option_paragraph: "Nello stesso paragrafo",
		text_search_option_sentence: "Nella stessa frase",
		text_search_option_vql: "Query VQL",
		text_search_option_none_hover_help: "Utilizzare - davanti ai termini da escludere.",
		text_search_option_cascade_proximity_hover_help: "Limita i risultati della ricerca ai termini che si trovano in un intervallo di parole che non include frasi esatte.",

		box_search_metadata: "Metadati:",
		box_search_select_template: "Seleziona modello",
		box_search_no_templates: "Nessun modello disponibile",
		box_text_search_options_search_within: "Ambito ricerca:",
		box_text_search_options_search_within_everything: "Tutto",
		box_text_search_options_search_within_file_content: "Contenuto del documento",
		box_text_search_options_search_within_tags: "Tag",
		box_text_search_options_limit_to: "Cerca solo:",

		add_property: "Aggiungi proprietà",
		edit_template: "Modifica ricerca",
		save_search: "Salva ricerca",
		search_template_name: "Nome:",
		search_template_desc: "Descrizione:",
		auto_run: "Esegui la ricerca quando viene aperta",
		show_in_tree: "Mostra la ricerca nella struttura cartelle",
		show_in_tree_hover_help: "Se si salva una ricerca in una cartella, per impostazione predefinita verrà visualizzata unicamente nell'elenco dei contenuti. Se si seleziona questa opzione, la ricerca viene visualizzata anche nella struttura ad albero delle cartelle nella vista Sfoglia.  Tuttavia la ricerca viene mostrata nella struttura ad albero delle cartelle solo se si salva la ricerca in una cartella.",
		share_search_with: "Condividi ricerca con:",
		remove_member: "Rimuovi ${0}",
		ok_button_label: "OK",
		save_template: "Salva con nome",
		save_template_title: "Se è necessario eseguire spesso la ricerca di elementi specifici, salvare il criterio di ricerca.",
		remove_criterion: "Rimuovi",
		apply_button_label: "Applica",
		empty_search_results_pane: "Eseguire una ricerca per visualizzare i risultati.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Tutto il repository",

		repository_already_selected: "Impossibile aggiungere il repository ${0} alla ricerca tra repository poiché già incluso nella ricerca. <br/> Un repository può essere incluso nella ricerca tra repository una sola volta. <br/>Selezionare un repository diverso da includere nella ricerca tra repository.",

		repository_limit_reached: "Impossibile aggiungere il repository ${0} alla ricerca tra repository. È possibile aggiungere alla ricerca fino a ${1} repository.",

		nomore_criteria_toappend: "Tutte le proprietà associate sono già incluse nei criteri di ricerca. Non sono state aggiunte proprietà ai criteri di ricerca.",
		nomore_criteria_toappend_regular: "Tutte le proprietà sono già incluse nel criterio di ricerca. Non sono state aggiunte proprietà ai criteri di ricerca.",

		/* OD Save Search dialog */
		reload_label: "Ricarica",
		od_save_search_help_text: "Immettere un nome per la ricerca o selezionare una ricerca esistente da sostituire",
		public_access_label: "Consenti ad altri di utilizzare questa ricerca",
		od_delete_search_help_text: "Selezionare una o più ricerche da eliminare",
		delete_save_searches: "Elimina ricerche salvate",

		/* Unified Search */
		unified_search_enable_text_search: "Includi criteri di ricerca di testo",
		unified_search_text_search_enabled: "Ricerca di testo inclusa",
		unified_search_mapping: "Associazione",
		unified_search_new_mapping: "Nuova associazione",
		unified_search_mapping_name: "Nome associazione",
		unified_search_mapping_dialog_instructions: "Selezionare il proprietà da associare. Alcune proprietà possono essere associate a proprietà con un tipo di dati diverso. Ad esempio, è possibile associare una proprietà stringa a una proprietà numero intero. Quando una proprietà viene associata ad un'altra, le proprietà vengono considerate come unica proprietà nella ricerca tra repository.",
		unified_search_filter_available_properties: "Proprietà disponibili di filtro",
		unified_search_available_properties: "Proprietà disponibili",
		unified_search_mapped_properties: "Proprietà associate",
		unified_search_single_values: "valori singoli",
		unified_search_multiple_values: "valori multipli",
		unified_search_add_mapping: "Aggiungi associazione",
		unified_search_warn_remove_repository: "Il repository selezionato è utilizzato nei criteri di ricerca.\nSe il repository viene eliminato, verranno eliminati tutte le associazioni e i criteri di ricerca che includono il repository.\n\nSi desidera eliminare il repository?",
		unified_search_warn_update_repository_mappings: "La modifica della selezione delle proprietà di questo repository influisce sui criteri di ricerca.\n\nIl criterio di ricerca contiene una o più associazioni che contengono una o più tra le proprietà che si stanno rimuovendo. Qualsiasi associazione contenente proprietà che si stanno rimuovendo deve essere eliminata. Qualsiasi criterio di ricerca che contiene tali associazioni deve essere eliminato per poter eseguire la ricerca.\n\nSi desidera aggiornare le opzioni del repository ed eliminare le associazioni ed il criterio di ricerca?",
		unified_search_warn_update_repository_mappings_reset: "L'inserimento del criterio di ricerca di questo repository influisce sul criterio di ricerca inter-repository\n\nQualsiasi criterio di ricerca delle proprietà che contiene un'associazione con le proprietà di questo repository deve essere cancellato per poter eseguire la ricerca.\n\nSi desidera aggiornare le opzioni del repository e cancellare il criterio di ricerca?",
		unified_search_warn_update_repository_text_criteria: "La rimozione del criterio di ricerca da questo repository influisce sul criterio di ricerca inter-repository\n\nIl criterio di ricerca del testo deve essere eliminato dal criterio di ricerca inter-repository per poter eseguire la ricerca.\n\nSi desidera aggiornare le opzioni del repository ed eliminare le associazioni ed il criterio di ricerca?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "La rimozione del criterio di ricerca e la modifica della selezione delle proprietà da questo repository influisce sul criterio di ricerca inter-repository.\n\nIl criterio di ricerca del testo deve essere eliminato dal criterio di ricerca inter-repository per poter eseguire la ricerca. Inoltre il criterio di ricerca delle proprietà contiene una o più associazioni che contengono una o più tra le proprietà che si stanno rimuovendo. Qualsiasi associazione contenente proprietà che si stanno rimuovendo deve essere eliminata. Qualsiasi criterio di ricerca delle proprietà che contiene tali associazioni deve essere eliminato per poter eseguire la ricerca.\n\nSi desidera aggiornare le opzioni del repository ed eliminare il criterio di ricerca del testo, le associazioni ed il criterio di ricerca delle proprietà?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "L'esclusione del criterio di ricerca di questo repository influisce sul criterio di ricerca tra repository\n\nQualsiasi criterio di ricerca delle proprietà che contiene un'associazione con le proprietà di questo repository deve essere cancellato per poter eseguire la ricerca. Il criterio di ricerca del testo deve essere eliminato dai criteri di ricerca tra repository per poter eseguire la ricerca.\n\nSi desidera aggiornare le opzioni del repository ed eliminare il criterio di ricerca?",
		unified_search_warn_remove_mapping: "La rimozione di questa associazione influisce sul criterio di ricerca.\n\nIl criterio di ricerca che utilizza l'associazione deve essere eliminato per poter eseguire la ricerca.\n\nSi desidera aggiornare l'associazione ed eliminare il criterio di ricerca?",
		unified_search_warn_update_mapping: "Le modifiche apportate a questa associazione influiscono sul criterio di ricerca.\n\nIl criterio di ricerca che utilizza l'associazione deve essere eliminato per assicurarsi che la ricerca non includa operatori o valori errati.\n\nSi desidera aggiornare l'associazione ed eliminare il criterio di ricerca?",
		unified_search_warn_update_mapping_not_searchable: "Le modifiche apportate a questa associazione influiscono sul criterio di ricerca.\n\nQuando le proprietà associate sono di sola visualizzazione, non è possibile utilizzare l'associazione nel criterio di ricerca. Il criterio di ricerca che utilizza le associazioni deve essere eliminato per poter eseguire la ricerca.\n\nSi desidera aggiornare l'associazione ed eliminare il criterio di ricerca?",
		unified_search_warn_update_mapping_box_searchable: "Le modifiche apportate a questa associazione influiscono sul criterio di ricerca.\n\nIl criterio di ricerca contiene già questa associazione più di una volta, e se si aggiunge la proprietà ${0} dal repository ${1}, il criterio di ricerca conterrà la proprietà ${0} troppe volte. Il criterio di ricerca che utilizza le associazioni deve essere eliminato per poter eseguire la ricerca.\n\nSi desidera aggiornare l'associazione ed eliminare il criterio di ricerca?",
		unified_search_details: "Dettagli della ricerca tra repository",
		unified_search_fixed_value_property: "Proprietà di valore fisso",
		unified_search_required_property: "Proprietà richiesta",
		unified_search_display_only_property: "Proprietà di sola visualizzazione",
		unified_search_missing_required_properities: "Impossibile salvare o eseguire la ricerca.<br/>Le seguenti proprietà sono obbligatorie:${0}È necessario includere le proprietà in un'associazione ed aggiungere le proprietà con i valori ai criteri di ricerca.",
		unified_search_property_repostory: "${0} (Repository: ${1})",
		unified_search_builder_no_mappings: "Impossibile eseguire la ricerca.<br/>È necessario creare un'associazione proprietà ed includerla nella <b>Visualizzazione dei risultati</b> in modo che la ricerca possa visualizzare i propri risultati.",
		unified_search_builder_insufficient_criteria_to_run: "Impossibile eseguire la ricerca.<br/>I criteri di ricerca non comprendono i criteri di ricerca del testo o i valori delle proprietà per i seguenti repository:${0}Per ciascun repository incluso nella ricerca, è necessario immettere i criteri di ricerca del testo oppure creare un'associazione proprietà, includerla nei criteri della proprietà e specificare un valore della proprietà.",
		unified_search_builder_insufficient_criteria_to_save: "Impossibile salvare la ricerca.<br/>La ricerca non comprende i criteri di ricerca per i seguenti repository:${0}Per ciascun repository incluso nella ricerca, è necessario effettuare una delle seguenti operazioni:<ol><li>Creare una proprietà associazione ed includerla nei criteri della proprietà.</li><li>Modificare il repository in modo da includere i criteri di ricerca del testo, creare un'associazione proprietà ed includerla nella <b>Visualizzazione dei risultati</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Impossibile eseguire la ricerca.<br/>È necessario specificare almeno un valore proprietà per ciascun repository contenuto nella ricerca. Ad esempio, è possibile specificare valori per le seguenti proprietà: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Impossibile eseguire la ricerca.<br/>Il criterio di ricerca del testo è obbligatorio.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Impossibile eseguire la ricerca.<br/>È necessario specificare almeno un valore proprietà per ciascun repository contenuto nella ricerca, oppure inserire il criterio di ricerca del testo. Ad esempio, è possibile specificare valori per le seguenti proprietà: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Impossibile eseguire la ricerca.<br/>Il criterio di ricerca del testo è obbligatorio. È necessario specificare almeno un valore proprietà per ciascun repository contenuto nella ricerca, oppure inserire il criterio di ricerca del testo. Ad esempio, è possibile specificare valori per le seguenti proprietà: ${0}",
		unified_search_invalid_criteria: "La ricerca contiene criteri non validi che impediscono l'esecuzione della ricerca.<br/>I criteri non validi sono stati rimossi. Tuttavia, è necessario salvare le modifiche nella ricerca prima di poterla eseguire. Se non si desidera salvare le modifiche, chiudere la ricerca.<br/><br/>I seguenti elementi sono stati rimossi o modificati:${0}",
		unified_search_invalid_fixed_values: "Impossibile salvare o eseguire la ricerca.<br/>I seguenti criteri di ricerca hanno valori fissi che non sono validi:${0}Effettuare una delle seguenti operazioni per risolvere il problema:<ul><li>Eliminare i criteri di ricerca che contengono valori non validi</li><li>Modificare le associazioni che includono la proprietà IBM Content Manager OnDemand con il valore fisso per rimuovere la proprietà.</li><li>Modificare le associazioni che includono la proprietà IBM Content Manager OnDemand con il valore fisso per rendere compatibili tutte le proprietà. Per ulteriori informazioni su quali proprietà possono essere associate, consultare il link Ulteriori informazioni nel testo introduttivo nella parte superiore della finestra di associazione delle proprietà.</li></ul>",
		unified_search_cannot_add_properties: "Non è possibile aggiungere proprietà a questa ricerca.<br/>Tutte le proprietà di associazione disponibili sono già incluse nel criterio di ricerca e ciascuna di esse può essere inserita nella ricerca una sola volta.",
		unified_search_mapping_not_viewable: "Impossibile visualizzare le proprietà del modello Box nei risultati della ricerca. Se si desidera aggiungere questa associazione come una colonna, è necessario associare al meno una proprietà che non sia una proprietà del modello Box. Ad esempio, è possibile selezionare una proprietà da un altro repository.",

		unified_search_returned_more: "Almeno un repository ha restituito più di risultati di quelli consentiti.",
		unified_search_partial_failure: "Si è verificato un errore in almeno un repository.",
		unified_search_partial_failure_and_returned_more: "Si è verificato un errore in almeno un repository e almeno un repository ha restituito più risultati di quelli consentiti.",
		unified_search_see_analysis: "Vedere l'analisi dei risultati.",
		unified_search_analysis_intro_returned_more: "Per ciascun repository che ha superato il numero massimo di risultati consentiti, provare ad affinare i criteri di ricerca in modo che vengano restituiti meno risultati. In alternativa è possibile eseguire una ricerca su un singolo repository per avere più risultati del massimo consentito in una ricerca inter-repository.",
		unified_search_analysis_intro_partial_failure: "Esaminare le informazioni relative all'errore restituito dal repository o dai repository. Se necessario, risolvere gli errori ed eseguire di nuovo una ricerca tra repository.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Per ciascun repository in cui si è verificato l'errore, cercare di risolvere l'errore ed eseguire nuovamente la ricerca.<br/><br/>Per ciascun repository che ha superato il numero massimo di risultati consentiti, provare ad affinare i criteri di ricerca in modo che vengano restituiti meno risultati. In alternativa è possibile eseguire una ricerca su un singolo repository per avere più risultati del massimo consentito in una ricerca inter-repository.",
		unified_search_results_found: "Risultati trovati",
		unified_search_maximum_allowed: "Massimo consentito",
		unified_search_maximum_exceeded: "Massimo superato",

		unified_search_mapping_rule_box: "Impossibile aggiungere questa proprietà all'associazione.<p>La proprietà ${0} dal repository ${1} è già presente in un'altra associazione, e le proprietà che è possibile cercare di questo repository possono essere inserite in una sola associazione per ricerca.<br/>Selezionare una proprietà differente da aggiungere all'associazione.</p>",
		unified_search_mapping_rule_repository: "Impossibile aggiungere la proprietà all'associazione.<br/>L'associazione include già una proprietà dal repository ${0}. Un'associazione può includere solo una proprietà di un repository.<br/>Selezionare un repository differente da cui aggiungere una proprietà o creare una nuova associazione per la proprietà selezionata.",
		unified_search_mapping_rule_data_type: "Impossibile aggiungere la proprietà all'associazione.<br/>Non è possibile associare una proprietà ${0} con una proprietà ${1}. Selezionare un proprietà differente da associare o creare una nuova associazione per la proprietà selezionata.<br/>Per ulteriori informazioni su quali proprietà possono essere associate, consultare il link Ulteriori informazioni nel testo introduttivo nella parte superiore di questa finestra.",
		unified_search_mapping_rule_cardinality: "Impossibile aggiungere la proprietà all'associazione.<br/>Tutte le proprietà dell'associazione supportano valori singoli o valori multipli. La proprietà selezionata è una proprietà ${0} e le proprietà nell'associazione supportano ${1}.<br/>Selezionare un proprietà differente da aggiungere all'associazione o creare una nuova associazione per la proprietà selezionata.",
		unified_search_mapping_rule_fixed_value: "Impossibile aggiungere la proprietà all'associazione.<br/>L'associazione include già una proprietà con valore fisso. Un'associazione può includere solo una proprietà con valore fisso.<br/>Selezionare un proprietà differente da aggiungere all'associazione o creare una nuova associazione per la proprietà selezionata.",
		unified_search_mapping_rule_child_component: "Impossibile aggiungere la proprietà all'associazione.<br/>Una proprietà con un componente secondario non può essere associata ad altre proprietà. Se si desidera poter eseguire la ricerca su questa proprietà, creare una nuova associazione per la proprietà selezionata.",
		unified_search_mapping_rule_operator_intersection: "Impossibile aggiungere la proprietà all'associazione.<br/>Tutte le proprietà dell'associazione devono avere uno o più operatori in comune. Tuttavia la proprietà ${0} non ha operatori in comune con altre proprietà dell'associazione.<br/>Se è necessario, selezionare una proprietà differente. Se è necessario includere la proprietà selezionata, rivolgersi all'amministratore del sistema per modificare gli operatori associati alla proprietà.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Impostazioni avanzate",
		advanced_search_options_intro: "Imposta opzioni criterio avanzato",
		advanced_search_options_editable: "Modificabile",
		advanced_search_options_readonly: "Sola lettura",
		advanced_search_options_required: "Richiesta",
		advanced_search_options_hidden: "Nascosta",
		advanced_search_options_property_editable:"La proprietà è:",
		advanced_search_options_operators:"Operatori:",
		advanced_search_options_use_all:"Utilizza tutto",
		advanced_search_options_use_selected:"Utilizza selezionati",
		advanced_search_options_operators_filtered: "Operatori filtrati",
		// Data types in lowercase
		data_type_boolean: "booleano",
		data_type_date: "data",
		data_type_time: "ora",
		data_type_timestamp: "Data/ora",
		data_type_decimal: "valore decimale",
		data_type_double: "numero a virgola mobile",
		data_type_short: "intero",
		data_type_integer: "intero",
		data_type_long: "intero",
		data_type_string: "stringa di testo",
		data_type_string_alpha: "stringa alfabetica",
		data_type_string_alphanum: "stringa alfanumerica",
		data_type_string_ext: "stringa alfanumerica estesa",
		data_type_string_num: "stringa numerica",
		data_type_binary: "binario",
		data_type_object: "oggetto",
		data_type_guid: "identificativo univoco globale",
		data_type_user: "utenti",
		data_type_child_component: "componente secondario",

		/* Print Dialog */
		print_title: "Stampa",
		print_message: "Stampa di: ${0}",
		print_print_button: "Stampa",
		print_clean_margins_button: "Imposta tutti a 0",
		print_type: "Tipo di stampante",
		print_printer_server_options: "Opzioni di stampa del server",
		print_printer_properties: "Proprietà stampante",
		print_printer_fax_properties: "Proprietà fax",
		print_printer_name: "Nome stampante:",
		print_fax_recipient: "Destinatario",
		print_fax_sender: "Mittente",
		print_copies: "Copie:",
		print_local_orientation: "Orientamento",
		print_local_orientation_landscape: "Orizzontale",
		print_local_orientation_portrait: "Verticale",
		print_local_margins: "Margini",
		print_local_margins_top: "In alto",
		print_local_margins_bottom: "In basso",
		print_local_margins_left: "Sinistra",
		print_local_margins_right: "Destra",
		print_printer_server: "Server",
		print_printer_local: "Locale",
		print_property_class: "Classe:",
		print_property_routing: "Instradamento:",
		print_property_pagedef: "DefPagina:",
		print_property_node: "Nodo:",
		print_property_writer: "Autore:",
		print_property_formdef: "DefForm:",
		print_property_printerid: "Destinazione:",
		print_property_forms: "Moduli:",
		print_property_faxnotes: "Note:",
		print_property_faxcompany: "Azienda:",
		print_property_faxnumber: "Numero di fax:",
		print_property_faxname: "Nome:",
		print_property_faxsendertelnumber: "Numero di telefono:",
		print_property_faxcoverpage: "Copertina:",
		print_property_faxsubject: "Oggetto:",
		print_saveoptions: "Salva opzioni di stampa",
		print_property_bannerpage: "Utilizza pagina intestazione",
		print_print_with_info_fields: "Stampa con campi informativi",
		print_field_from: "Da",
		print_field_to: "A",
		print_invalid_value_class: "I caratteri validi sono A-Z o 0-9",
		print_invalid_value_pagedef: "I caratteri validi sono caratteri alfabetici o numerici oppure i caratteri @, # o $",
		print_invalid_value_writer: "I caratteri validi sono caratteri alfabetici o numerici oppure i caratteri @, # o $",
		print_invalid_value_formdef: "I caratteri validi sono caratteri alfabetici o numerici oppure i caratteri @, # o $",
		print_invalid_value_forms: "I caratteri validi sono caratteri alfabetici o numerici oppure i caratteri @, # o $",
		print_invalid_value_margin: "I numeri validi sono compresi tra ${0} e ${1}",
		print_status_message: "${0} documenti sono stati inviati alla stampante ${1}.",

		print_applet_init_error: "Impossibile avviare l'applet di stampa.",
		print_applet_init_error_explanation: "Questo problema può verificarsi per le seguenti ragioni: <br/><br/><ul><li>Impossibile rilevare JRE (Java Runtime Environment) sulla stazione di lavoro in uso.</li><li>Il plug-in Java non è abilitato nel browser web dell'utente.</li><li>La versione di JRE della propria stazione di lavoro non è compatibile con la versione di IBM Content Navigator.</li><li>Il tempo di attesa del browser per l'avvio dell'applet di stampa è scaduto.</li></ul>",
		print_applet_init_error_userResponse: "È possibile procedere come segue per risolvere il problema con il JRE:<br/><br/><ol><li>Accertarsi che JRE sia installato sulla workstation.</li><li>Verificare che il plug-in Java sia abilitato nel browser web dell'utente.</li><li>Accertarsi che la versione JRE installata sulla stazione di lavoro sia compatibile con IBM Content Navigator e riprovare. Un elenco delle versioni supportate viene incluso nel documento <i>Hardware and software prerequisites for IBM Content Navigator</i> sul sito di supporto IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Frontespizio",
		daeja_print_selected_documents_title: "Documenti selezionati",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Corrisponde a tutto il criterio di ricerca",
		match_any_criteria: "Corrisponde a parte del criterio di ricerca",
		include_subfolders_summary: "${0} (includere le cartella secondarie)",
		browse_button: "Sfoglia&hellip;",
		search_for: "Cerca:",
		object_type_documents: "Documenti",
		object_type_folders: "Cartelle",
		object_type_documents_folders: "Documenti e cartelle",
		object_type_web_links: "Link Web",
		object_type_documents_folders_web_links: "Documenti, Cartelle e Link Web",

		/* SelectSearchFolderDialog */
		search_in: "Cerca in:",
		include_subfolders: "Includi cartelle secondarie",

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
		locked_item_icon_title: "Bloccato da ${0}",
		checked_out_icon_title: "Sottoposto a check-out da ${0}",
		major_minor_version_icon_title: "Versione principale con versioni secondarie",
		suspended_icon_title: "Il flusso di lavoro è sospeso",
		on_hold_icon_title: "In attesa",
		has_notes_icon_title: "Dispone di note",
		record_icon_title: "Dichiarato come record",
		compound_document_icon_title: "Documento composto",
		validateTemplate_icon_title: "Il modello di spazio team deve essere convalidato",
		offlineTemplate_icon_title: "Il modello di spazio team è fuori linea",
		offlineTeamspace_icon_title: "Lo spazio team è fuori linea",
		pending_delete_icon_title: "L'eliminazione dello spazio team è sospesa",
		delete_error_icon_title: "Impossibile eliminare lo spazio team",
		defaultTemplate_icon_title: "Modello di spazio team predefinito",
		teamspace_icon_title: "Spazio team",
		teamspace_template_icon_title: "Modello di spazio team",
		has_bookmark_icon_title: "Dispone di un preferito",
		read_only_icon_title: "Sola lettura",
		no_results_were_found: "Non è stato individuato alcun risultato.",
		folder_is_empty: "La cartella è vuota.",
		no_checked_out_items: "L'utente non dispone di elementi sottoposti a check out.",
		inbasket_is_empty: "Il carrello di inserimento è vuoto.",
		worklist_is_empty: "L'elenco di lavoro è vuoto.",
		tracker_milestone_completed: "Completato",
		stepprocessor_attachments_title: "Contenuto",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Blocca elementi",
		unlock_items: "Sblocca elementi",
		checkin_item: "Esegui check-in elemento",

		/* Help */
		learn_more: "Ulteriori informazioni",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Apri spazio team",
		repository_tab_createWorkspace: "Nuovo spazio team",
		repository_tab_createWorkspaceTemplate: "Modello Nuovo spazio team",
		repository_tab_DefaultTemplate: "Default",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Questa attività copia documenti.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "L'utente non dispone dei privilegi di modifica per il modello di spazio team selezionato.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Si è sicuri di voler eliminare lo spazio team ${0}?<br><br>Solo i documenti inseriti in altre cartelle nel repository restano sul repository. Tutti i documenti inseriti solo nello spazio team verranno eliminati.",
		teamspaceDecommissionLabel: "Elimina:",
		teamspaceDecommissionDescription: "L'eliminazione degli spazio team rimuoverà questo spazio dal server: indicare come le risorse utente dello spazio team vengono gestite.",
		teamspaceDecommissionOptions: "Elimina opzioni dello spazio team",
		teamspaceDecommissionDeleteAll: "Elimina tutte le risorse utente dello spazio team",
		teamspaceDecommissionReFileAll: "Riordina tutte le risorse utente dello spazio team",
		teamspaceDecommissionReFileDestination: "Sposta in:",
		teamspaceDecommissionReFileIn: "Riordina in",
		teamspaceDecommissionTaskName: "Attività di eliminazione dello spazio team",
		teamspaceDecommissionTaskDescription: "Questa attività elimina un spazio team dal repository.",
		teamspaceDecommissionDeletionStarted: "È stata pianificata l'eliminazione di questo spazio team",
		teamspaceDecommissionDeletionConnectionFailed: "Impossibile eseguire l'attività di eliminazione dello spazio team perché questo non è connesso al repository. Assicurarsi che le credenziali dell'amministratore di repository siano corrette.",

		teamspace_edit_properties_notsupported: "È possibile modificare le proprietà degli spazi team solo da una vista Spazi team.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Lo spazio team non è in linea e può essere aperto solo dai proprietari dello spazio team",

		/* Teamspace Builder widget */
		workspace_validation_document: "Documento:",
		workspace_validation_folder: "Cartella:",
		workspace_validation_ets: "I seguenti modelli di immissione non sono disponibili in questo repository e sono state rimosse dall'elenco dei modelli di immissione selezionati:",
		workspace_validation_classes: "Le seguenti classi non sono disponibili in questo repository e sono state rimosse dall'elenco delle classi selezionate:",
		workspace_validation_searches: "Le seguenti ricerche non sono disponibili in questo repository e sono state rimosse dall'elenco delle ricerche selezionate:",
		workspace_validation_docs_folders: "I seguenti documenti e cartelle non sono disponibili in questo repository e sono stati rimossi dall'elenco degli elementi selezionati:",
		workspace_change_template_confirmation_question: "Se si seleziona un modello diverso, tutte le modifiche andranno perdute. Si desidera proseguire?\n",
		workspace_delete_item_confirmation_question: "Si desidera rimuovere l'elemento ${0}?\n",
		workspace_delete_role_confirmation_question: "Si desidera rimuovere il ruolo ${0}?\n",
		workspace_delete_confirmation_question: "Se uno spazio team viene eliminato, viene eliminato solo il contenitore di spazio team. Le cartelle e i documenti nello spazio team rimangono sul repository ed è possibile ritrovarli eseguendo una ricerca. Per eliminare il contenuto dello spazio team, eliminare prima gli elementi nello spazio team e poi eliminare lo spazio team.<br><br>Si desidera eliminare lo spazio team ${0}?",
		workspacebuilder_instance_template_name_header: "Nome modello spazio team",
		workspacebuilder_instance_template_description_header: "Descrizione",

		workspacebuilder_template_tooltip_name: "Il nome modello non può contenere nessuno dei seguenti caratteri: \\ /: *? \" < > |",
		workspacebuilder_instance_tooltip_name: "Il nome spazio team non può contenere nessuno dei seguenti caratteri: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Fornire una descrizione che consenta agli utenti di effettuare la selezione corretta dall'elenco di modelli. Ad esempio, è possibile includere le informazioni sugli utenti previsti o sull'utilizzo del modello.",
		workspacebuilder_instance_tooltip_description: "Fornire una descrizione che consenta agli utenti di distinguere tra questo spazio team e altri.",

		workspacebuilder_template_edit_properties_pane: "Modifica modello spazio team",
		workspacebuilder_instance_properties_pane: "Definisci spazio team",
		workspacebuilder_template_properties_pane: "Definisci modello spazio team",

		workspacebuilder_instance_security_pane: "Imposta protezione spazio team",
		workspacebuilder_template_security_pane: "Imposta protezione modello",

		workspacebuilder_layout_pane: "Seleziona layout",
		workspacebuilder_search_templates_pane: "Seleziona ricerche",
		workspacebuilder_document_folders_pane: "Includi cartelle e documenti",
		workspacebuilder_doctypes_entryTemplates_pane: "Selezionare classi o modelli di immissione",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Seleziona classi",
		workspacebuilder_security: "Protezione spazio team",

		workspacebuilder_roles_pane: "Seleziona ruoli",
		workspacebuilder_security: "Sicurezza",

		workspacebuilder_properties_templates: "Modelli disponibili:",
		workspacebuilder_available_templates: "Ricerche disponibili:",
		workspacebuilder_selected_templates: "Ricerche selezionate:",
		workspacebuilder_templates_name: "Nome ricerca",

		workspacebuilder_available_entryTemplates: "Modelli di immissione disponibili:",
		workspacebuilder_selected_entryTemplates: "Modelli di immissione selezionati:",

		workspacebuilder_item_classes: "Classi disponibili:",
		workspacebuilder_item_classes_selected: "Classi selezionate:",
		workspacebuilder_properties_select_template: "Selezionare un modello da utilizzare per questo spazio team.",
		workspacebuilder_template_properties: "Definisci modello spazio team",
		workspacebuilder_instance_properties: "Definisci spazio team",
		workspacebuilder_template_introText: "Specificare i componenti comuni che si desidera includere in ciascuno spazio team creato da questo modello utilizzando le selezioni nella navigazione. Al termine, fare clic su <b>Fine</b> per rendere il modello disponibile per altri utenti, che possono utilizzarlo per creare nuovi spazi team.",
		workspacebuilder_instance_introText: "I team utilizzano gli spazi team per condividere e gestire specifiche serie di documenti. Fornire un nome significativo e una descrizione per questo spazio team per consentire agli utenti di distinguere questo spazio team da altri. È possibile personalizzare lo spazio team, includendo ulteriori ricerche, classi o modelli di immissione, documenti e cartelle.",

		workspacebuilder_template_search_template_introText: "Selezionare le ricerche predefinite che si desidera includere in ciascuno spazio team creato da questo modello. Se non si seleziona alcuna ricerca, l'utente dello spazio team può visualizzare tutte le ricerche alle quali ha accesso. Con i permessi appropriati, gli utenti possono condividere e aggiungere ricerche nello spazio team.",
		workspacebuilder_instance_search_template_introText: "Includere le ricerche che consentiranno agli utenti dello spazio team di completare le attività in modo più efficiente. Se non viene inclusa alcuna ricerca, gli utenti dello spazio team vedranno tutte le ricerche per le quali dispongono di permessi. Gli utenti possono anche aggiungere e condividere ricerche nello spazio team con i permessi appropriati.",

		workspacebuilder_template_roles_introText: "Gli utenti dello spazio team vengono assegnati ai ruoli. I ruoli specificano le attività che possono essere eseguire dagli utenti. Fare clic sulle icone acconto a ciascun ruolo per visualizzare le attività consentite. Scegliere i ruoli appropriati per lo spazio team.",
		workspacebuilder_template_roles_modify_introText: "È possibile modificare i permessi associati ad ogni ruolo in questo spazio team. È necessario notificare i membri dello spazio team quando vengono modificate le autorizzazioni.",

		workspacebuilder_template_roles_header_name: "Nome ruolo",

		workspacebuilder_template_folders_introText: "Selezionare i documenti e le cartelle predefiniti da includere in ciascuno spazio team creato da questo modello. È possibile aggiungere documenti come link o come copie. Utilizzare i link per puntare a documenti dei quali non si desidera creare più copie, ad esempio i criteri o le procedure. Creare copie dei documenti che gli utenti modificheranno, ad esempio modelli e moduli.",
		workspacebuilder_instance_folders_introText: "Selezionare i documenti e le cartelle predefiniti da includere nello spazio. È possibile aggiungere documenti come link o come copie. Utilizzare i link per puntare a documenti dei quali non si desidera creare più copie, ad esempio i criteri o le procedure. Creare copie dei documenti che gli utenti modificheranno, ad esempio modelli e moduli.",

		workspacebuilder_template_roles_introText: "Specificare i ruoli che verranno inclusi in ciascuno spazio team creato da questo modello. È inoltre possibile creare nuovi ruoli, che possono essere utilizzati in fase di creazione di altri modelli di spazio team.",
		workspacebuilder_instance_users_introText: "In uno spazio team, ciascun utente viene assegnato a uno o più ruoli che specificano le attività che può completare. Aggiungere gli utenti allo spazio team e assegnare i ruoli agli utenti.",

		workspacebuilder_instance_navigation_pane_title: "Programma di creazione spazi team",
		workspacebuilder_template_navigation_pane_title: "Programma di creazione modelli spazio team",

		workspacebuilder_roles_roles_nopermissions: "Non è selezionato alcun permesso per il ruolo {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Ruoli selezionati:",
		workspacebuilder_roles_available_roles: "Ruoli disponibili:",
		workspacebuilder_roles_privilege_header: "Autorizzazione",
		workspacebuilder_roles_select_role: "Seleziona ruolo",
		workspacebuilder_roles_select_permission: "Seleziona permesso",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Un ruolo chiamato {0} esiste già. È necessario specificare un nome univoco per il ruolo. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nome ruolo:",
		workspacebuilder_roles_edit_dialog_role_description: "Descrizione ruolo:",
		workspacebuilder_roles_edit_dialog_title_new: "Nuovo ruolo",
		workspacebuilder_roles_edit_dialog_title_edit: "Modifica ruolo",

		workspacebuilder_roles_privileges_header: "Permessi per il ruolo {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Permessi documento:",
		workspacebuilder_roles_priv_group_folder: "Permessi cartella:",
		workspacebuilder_roles_priv_group_teamspace: "Permessi spazio team:",
		workspacebuilder_roles_priv_group_item: "Permessi a documenti e cartelle:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Gestisci permessi",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Gli utenti con questa autorizzazione possono gestire l'accesso a documenti e cartelle nello spazio team. Questo permesso include la possibilità di consentire a altri utenti di eliminare e modificare proprietà, creare cartelle secondarie e così via.",

		workspacebuilder_roles_priv_deleteItems: "Elimina",
		workspacebuilder_roles_plbl_deleteItems: "Gli utenti con questo permesso possono eliminare i documenti e le cartelle nello spazio team.",

		workspacebuilder_roles_priv_createItems: "Crea",
		workspacebuilder_roles_plbl_createItems: "Gli utenti con questo permesso possono creare documenti e cartelle nello spazio team.",

		workspacebuilder_roles_priv_viewItemProperties: "Visualizzazione proprietà",
		workspacebuilder_roles_plbl_viewItemProperties: "Gli utenti con questo permesso possono visualizzare le proprietà dei documenti e delle cartelle nello spazio team, incluse le proprietà di sistema.",

		workspacebuilder_roles_priv_modifyItemProperties: "Modifica proprietà",
		workspacebuilder_roles_plbl_modifyItemProperties: "Gli utenti con questo permesso possono modificare le proprietà dei documenti e delle cartelle nello spazio team.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gestione permessi cartella",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Gli utenti con questo permesso possono gestire gli accessi alle cartelle nello spazio team. Questo permesso include la possibilità di consentire a altri utenti di eliminare cartelle, modificare le proprietà della cartella, creare cartelle secondari e così via.",

		workspacebuilder_roles_priv_deleteFolders: "Eliminazione cartelle",
		workspacebuilder_roles_plbl_deleteFolders: "Gli utenti con questo permesso possono eliminare le cartelle nello spazio team.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Modifica proprietà cartelle",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Gli utenti con questo permesso possono modificare le proprietà delle cartelle nello spazio team.",

		workspacebuilder_roles_priv_createSubfolders: "Creazione cartelle secondarie",
		workspacebuilder_roles_plbl_createSubfolders: "Gli utenti con questo permesso possono creare le cartelle nello spazio team.",

		workspacebuilder_roles_priv_fileInFolders: "Aggiunta alle cartelle",
		workspacebuilder_roles_plbl_fileInFolders: "Gli utenti con questo permesso possono aggiungere un link dalle cartelle nello spazio team ai documenti.",

		workspacebuilder_roles_priv_viewFolderProperties: "Visualizzazione proprietà cartelle",
		workspacebuilder_roles_plbl_viewFolderProperties: "Gli utenti con questo permesso possono visualizzare le proprietà delle cartelle nello spazio team, incluse le proprietà di sistema.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gestione permessi documenti",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Gli utenti con questo permesso possono gestire gli accessi ai documenti nello spazio team. Questo permesso consente inoltre a altri utenti di eliminare documenti, modificare le proprietà dei documenti e così via.",

		workspacebuilder_roles_priv_deleteDocuments: "Eliminazione documenti",
		workspacebuilder_roles_plbl_deleteDocuments: "Gli utenti con questo permesso possono eliminare i documenti nello spazio team.",

		workspacebuilder_roles_priv_promoteVersions: "Promozione versioni",
		workspacebuilder_roles_plbl_promoteVersions: "Gli utenti con questo permesso possono assegnare un nuovo numero di versione ai documenti nello spazio team.",

		workspacebuilder_roles_priv_modifyContent: "Modifica documenti",
		workspacebuilder_roles_plbl_modifyContent: "Gli utenti con questo permesso possono modificare il contenuto dei documenti nello spazio team.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Modifica proprietà documenti",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Gli utenti con questo permesso possono modificare le proprietà dei documenti nello spazio team.",

		workspacebuilder_roles_priv_viewContent: "Visualizzazione documenti",
		workspacebuilder_roles_plbl_viewContent: "Gli utenti con questo permesso possono visualizzare i documenti nello spazio team.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Visualizzazione proprietà documenti",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Gli utenti con questo permesso possono visualizzare le proprietà dei documenti nello spazio team, incluse le proprietà di sistema.",

		workspacebuilder_roles_priv_addNewSearches: "Aggiunta ricerche",
		workspacebuilder_roles_plbl_addNewSearches: "Gli utenti con questo permesso possono aggiungere ricerche allo spazio team. Per impostazione predefinita, la ricerca non è disponibile per altri utenti.",

		workspacebuilder_roles_priv_createNewSearches: "Crea ricerche",
		workspacebuilder_roles_plbl_createNewSearches: "Gli utenti con questa autorizzazione possono creare nuove ricerche ma non salvare le ricerche. Se gli utenti non dispongono di questa autorizzazione, essi non possono aggiungere documenti che sono già sul repository dello spazio team.",

		workspacebuilder_roles_priv_shareSearches: "Condivisione ricerche",
		workspacebuilder_roles_plbl_shareSearches: "Gli utenti con questo permesso possono condividere le ricerche che creano, con altri utenti dello spazio team.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gestione classi o modelli di immissione",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Gli utenti con questo permesso possono aggiungere o rimuovere classi o modelli di immissione dallo spazio team.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gestisci classi",
		workspacebuilder_roles_plbl_addRemoveClasses: "Gli utenti con questo permesso possono aggiungere e rimuovere classi dallo spazio team.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gestione utenti spazio team",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Gli utenti con questo permesso, possono aggiungere e rimuovere utenti e gruppi dallo spazio team. Inoltre, possono specificare a quali ruoli vengono assegnati gli utenti.",

		workspacebuilder_roles_priv_modifyRoles: "Modifica ruoli",
		workspacebuilder_roles_plbl_modifyRoles: "I proprietari con questa autorizzazione possono modificare le autorizzazioni per lo spazio team. Questa autorizzazione è disponibile solo per i proprietari.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Seleziona utenti",
		workspacebuilder_users_add_users_and_groups_button: "Aggiungi utenti e gruppi...",
		workspacebuilder_users_users_or_group_header: "Utente e gruppo",
		workspacebuilder_users_roles_header: "Ruoli",

		workspacebuilder_users_role_header: "Ruolo",
		workspacebuilder_users_role_no_permissions: "Questo ruolo non ha permessi",
		workspacebuilder_users_available_roles_label: "Ruoli disponibili:",
		workspacebuilder_users_selected_users_and_groups_label: "Utenti e gruppi selezionati:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Impossibile salvare lo spazio team. È necessario specificare almeno un proprietario per questo spazio team.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Impossibile salvare lo spazio team. A tutti gli utenti deve essere assegnato un ruolo.",
		// end of select users

		workspacebuilder_search_templates: "Seleziona ricerche",
		workspacebuilder_search_add: "Aggiungi ricerca",
		workspacebuilder_properties_workspaceName: "Nome spazio team:",
		workspacebuilder_properties_templateName: "Nome modello:",
		workspacebuilder_properties_workspaceDescription: "Descrizione spazio team:",
		workspacebuilder_properties_templateDescription: "Descrizione modello:",
		workspacebuilder_properties_workspaceTemplate: "Modello selezionato:",
		workspacebuilder_properties_security: "Condividi modello con:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Sposta dallo spazio team:",
		moveTeamspaceDocuments_security: "Condividi il documento con:",
		moveTeamspaceDocuments_security_change: "Specificare la sicurezza personalizzata per gli elementi selezionati",
		moveTeamspaceDocuments_item_type_level: "Non è possibile selezionare 'Sovrascrivi la sicurezza degli elementi selezionati' perché la classe degli elementi selezionati è configurata per utilizzare solo la sicurezza a livello di classe",
		moveTeamspaceDocuments_security_inherit: "Eredita sicurezza dalla cartella di destinazione",
		moveTeamspaceDocuments_file_info_text: "È possibile spostare gli elementi da uno spazio team ad un altro spazio team o ad una cartella.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "L'utente non dispone delle autorizzazioni appropriate per spostare elementi nella cartella selezionata.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "L'utente non dispone delle autorizzazioni appropriate per spostare elementi dallo spazio team.",
		moveTeamspaceDocuments_move_mixed_items: "Non è possibile sovrascrivere la sicurezza degli elementi selezionati. Alcuni degli elementi non sono gestiti dallo spazio team. È possibile sovrascrivere solo la sicurezza degli elementi gestiti dallo spazio team.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "È necessario specificare un nome per lo spazio team.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "È necessario specificare un nome per il modello di spazio team.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Il nome spazio team non può contenere nessuno dei seguenti caratteri: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Il nome modello non può contenere nessuno dei seguenti caratteri: \\ /: *? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link al documento",
		workspacebuilder_folders_makeDocCopy: "Copia documento",
		workspacebuilder_folders_newfolder: "Nuova cartella",
		workspacebuilder_folders_local_drive: "Dalla directory locale",
		workspacebuilder_folders_from_repo: "Dal repository",
		workspacebuilder_folders_add_doc: "Aggiungi documento",
		workspacebuilder_folders_grid_name: "Nome",
		workspacebuilder_folders_props: "Proprietà",
		workspacebuilder_folders_remove: "Rimuovi",
		workspacebuilder_folders_delete: "Elimina",
		workspacebuilder_folders_adddoc_local: "Aggiungi documento da unità locale",
		workspacebuilder_folders_adddoc_repo: "Aggiungi documento da repository",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "l nome della cartella specificato esiste già. Specificare un nome cartella diverso.",

		workspacebuilder_classes_title: "Selezionare classi o modelli di immissione",
		workspacebuilder_classes_title_cm: "Seleziona classi",
		workspacebuilder_classes_template_introText: "Specificare se gli spazi team creati da questo modello utilizzeranno le classi o i modelli di immissione per aggiungere documenti al repository. Se non viene selezionata alcuna classe, gli spazi team visualizzeranno tutte le classi alle quali hanno accesso. Gli utenti possono modificare l'elenco di classi o i modelli di immissione nello spazio team, se dispongono del permesso appropriato.",
		workspacebuilder_classes_template_introText_cm: "Selezionare le classi che gli utenti possono utilizzare per aggiungere documenti al repository. Se non è selezionata alcuna classe, gli utenti dello spazio team vedranno tutte le classi alle quali hanno accesso. Se gli utenti dispongono dei permessi appropriati, possono modificare l'elenco di classi nello spazio team.",
		workspacebuilder_classes_instance_introText: "Selezionare le classi o i modelli di immissione che gli utenti possono utilizzare per aggiungere documenti al repository. Quando non è selezionata alcuna classe, gli utenti dello spazio team vedranno tutte le classi per le quali dispongono di permessi. Se gli utenti dispongono dei permessi appropriati, possono modificare l'elenco di classi o modelli di immissione nello spazio team.",
		workspacebuilder_classes_instance_introText_cm: "Selezionare le classi che gli utenti possono utilizzare per aggiungere documenti al repository. Quando non è selezionata alcuna classe, gli utenti dello spazio team vedranno tutte le classi per le quali dispongono di permessi. Se gli utenti dispongono dei permessi appropriati, possono modificare l'elenco di classi nello spazio team.",
		workspacebuilder_classes_selection: "Selezionare le classi:",
		workspacebuilder_classes_list: "Classi disponibili:",
		workspacebuilder_classes_columns_default: "Default",
		workspacebuilder_classes_columns_className: "Nome classe",
		workspacebuilder_classes_type_classes: "Utilizza classi per aggiungere documenti",
		workspacebuilder_classes_type_classes_tooltip: "Le classi includono le proprietà associate in modo che i documenti possano essere individuati per utilizzi successivi.",
		workspacebuilder_classes_type_entryTemplates: "Utilizza modelli di immissione per aggiungere documenti",
		workspacebuilder_classes_type_entryTemplates_tooltip: "I modelli di immissione garantiscono che le informazioni fornite per ciascun documento siano congruenti e che utilizzino valori predefiniti.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nome modello di immissione",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Descrizione",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "È necessario aggiungere almeno un modello di immissione allo spazio team.",

		workspacebuilder_classes_new: "Nuova classe",
		workspacebuilder_classes_add: "Aggiungi classe",
		workspacebuilder_entryTemplate_add: "Aggiungi modello di immissione",
		workspacebuilder_add_list: "Aggiungi",
		workspacebuilder_makeDefault_list: "Rendi predefinito",
		workspacebuilder_removeDefault_list: "Rimuovi predefinito",

		workspacebuilder_roles_title: "Seleziona ruoli",
		workspacebuilder_roles_title_modify: "Modifica ruoli",

		workspacebuilder_selection_moveup: "Sposta su",
		workspacebuilder_selection_movedown: "Sposta giù",
		workspacebuilder_selection_remove: "Rimuovi",
		workspacebuilder_selection_add: "Aggiungi",
		workspacebuilder_selection_create_new_search: "Nuova ricerca...",
		workspacebuilder_selection_create_new_role: "Nuovo ruolo...",
		workspacebuilder_selection_make_role_available: "Rendi disponibile",
		workspacebuilder_selection_make_role_available_tooltip: "Condivide il ruolo selezionato con altri modelli. È necessario assegnare almeno un permesso al ruolo per condividerlo.",

		workspacebuilder_navigation_next: "Avanti",
		workspacebuilder_navigation_finish: "Fine",
		workspacebuilder_navigation_validate: "Convalida",
		workspacebuilder_navigation_previous: "Precedente",
		workspacebuilder_navigation_cancel: "Annulla",
		workspacebuilder_navigation_customize: "Personalizza",

		workspacebuilder_search_dialog_title: "Ricerca",
		workspacebuilder_dialog_close: "Chiudi",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilità modello:",
		workspace_properties_templateState_tooltip: "Rendere questo modello non disponibile per impedire agli utenti di creare spazi team che utilizzano questo modello.",
		workspace_properties_dialog_title: "Proprietà modello",
		workspace_properties_online_radio_option_label: "Rendi disponibile",
		workspace_properties_offline_radio_option_label: "Rendi non disponibile",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Si desidera annullare senza salvare le modifiche?",
		workspacebuilder_cancel_confirmation_button: "Sì",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Tutti gli elementi non validi saranno rimossi dal modello e il modello viene reso disponibile agli utenti.  Si desidera convalidare questo modello di spazio team?",
		workspacebuilder_validate_confirmation_button: "Sì",
		workspacebuilder_validate_confirmation_title: "Convalida",

		/* Entry templates builder */
		entry_templates: "Gestore modello di immissione",
		no_entry_templates_were_found: "Non sono presenti modelli di immissione",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtra",

		/* Roleselector widget */
		role_selector_name: "Ruoli:",

		/* User Group picker widget */
		directory_label: "Directory:",
		scope_label: "Cerca:",
		name_starts_with_label: "Il nome inizia con",
		name_contains_label: "Il nome contiene",
		display_name_contains_label: "Il nome visualizzato contiene",
		starts_with_label: "Inizia con:",
		available_label: "Disponibile:",
		available_heading: "Disponibile",
		selected_label: "Selezionato:",
		selected_heading: "Selezionato",
		available_repositories_label: "Repository disponibili",
		selected_repositories_label: "Repository selezionati",
		default_repository: "Repository predefinito:",
		default_repository_placeholder: "Seleziona un repository",
		default_role_placeholder: "Selezionare un ruolo",
		menu_label_placeholder: "Selezionare o immettere un'etichetta",
		default_repository_hover: "Specificare il repository che viene selezionato per impostazione predefinita quando gli utenti accedono al client Web da questo desktop.<br><br><b>Importante:</b> è necessario aggiungere i repository al desktop dell'elenco repository selezionato prima di poter specificare il repository predefinito.",
		default_repository_workflow_hover: "<b>Nota:</b> è possibile configurare gli spazi delle applicazioni solo per i repository configurati per questo desktop.",
		remove_label: "Rimuovi",
		users_label: "Utenti",
		groups_label: "Gruppi",
		user_or_group_name_label: "Nome utente o gruppo:",
		user_or_group_name_hover: "Immettere il nome di un utente o di un gruppo che sia valido nel repository.  Il nome non viene convalidato.",
		user: "Utente",
		group: "Gruppo",
		name: "Nome:",
		displayName: "Nome visualizzato",
		display_name: "Nome di visualizzazione:",
		shortName: "Nome breve:",
		distinguishedName: "DN (Distinguished Name):",
		search_tooltip: "Ricerca",
		add_tooltip: "Aggiungi",
		add_selected_tooltip: "Aggiungi all'elenco selezionato",
		remove_tooltip: "Rimuovi",
		remove_selected_tooltip: "Rimuovi dall'elenco selezionato",
		add_to_selected_tooltip: "Aggiungi",
		remove_from_selected_tooltip: "Rimuovi",
		move_up_selected_tooltip: "Sposta su",
		move_down_selected_tooltip: "Sposta giù",
		advanced_search_options_tooltip: "Impostazioni avanzate",
		move_right_selected_tooltip: "Sposta nel sottomenu",
		move_left_selected_tooltip: "Sposta dal sottomenu",
		add_separator: "Aggiungi separatore",
		menu_item_label: "Etichetta elemento del menu:",
		add_menu_label: "Aggiungi sottomenu",
		menu_label: "Etichetta sottomenu:",
		menu_label_info: "<b>Importante:</b> è necessario aggiungere almeno un elemento di menu al sottomenu prima di salvare questo menu.",
		menu_dropdown_label: "Etichetta del pulsante a discesa:",
		menu_dropdown_label_info: "<b>Importante:</b> è necessario aggiungere almeno un elemento di menu al pulsante a discesa prima di salvare questa barra degli strumenti.",
		no_item_found: "Non è stato individuato alcun risultato.",
		me: "Io",
		anyone: "Tutti",
		specific_users: "Utenti specifici",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "La ricerca ha restituito più di {0} risultati. Modificare i criteri per limitare la ricerca.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "I risultati della ricerca contengono elementi che sono stati già selezionati. Questi elementi non verranno visualizzati nei risultati della ricerca.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Sono stati restituiti più di {0}. Utilizzare il filtro per limitare i risultati.",

		user_already_selected: "L'utente specificato è già selezionato.  Specificare un utente differente.",
		group_already_selected: "Il gruppo specificato è già selezionato.  Specificare un gruppo differente.",
		user_cannot_select_self: "Non è possibile aggiungere se stessi. Specificare un utente differente.",

		/* Select User Group dialog */
		select_user_group_add_label: "Aggiungi",
		select_user_group_cancel_label: "Annulla",
		add_users_groups_label: "Aggiungi utenti e gruppi",
		add_user_group_label: "Aggiungi utente e gruppo",
		add_users_label: "Aggiungi utenti",
		add_user_label: "Aggiunge utente",
		add_label: "Aggiungi:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "I seguenti documenti contengono modifiche all'annotazione non salvate:",
		viewer_confirm_to_proceed: "Si desidera continuare e perdere le modifiche?",
		viewer_warn_has_changes: "Le modifiche non salvate verranno eliminate.",
		viewer_warn_is_printing: "È possibile che la stampa in corso non venga completata.",
		viewer_warn_confirm_exit: "Si desidera uscire dall'applicazione corrente?",
		viewer_prompt_save_changes: "Il documento riportato di seguito ha delle modifiche di annotazione non salvate che andranno perse:<br>${0}<br><br>Si desidera salvare le modifiche?",
		viewer_prompt_mergesplit_changes: "I seguenti documenti contengono modifiche non salvate:<br>${0}<br><br>Si desidera continuare e perdere le modifiche?",
		viewer_prompt_mergesplit_tab_changes: "Il seguente documento contiene modifiche non salvate:<br>${0}<br><br>Si desidera continuare e perdere le modifiche?",
		viewer_new_item_name: "Nuovo documento",
		viewer_top_frame: "Frame superiore:",
		viewer_bottom_frame: "Frame inferiore:",
		viewer_left_frame: "Frame sinistro:",
		viewer_right_frame: "Frame destro:",
		viewer_viewer_frame: "Frame visualizzatore:",
		viewer_properties_frame: "Frame proprietà:",
		viewer_comment_frame: "Frame commento:",
		viewer_mergesplit_on: "Visualizza",
		viewer_mergesplit_off: "Unisci e suddividi",
		viewer_mergesplit_context_menu_move: "Sposta",
		viewer_mergesplit_context_menu_rename: "Rinomina",
		viewer_mergesplit_context_menu_delete: "Elimina",
		//move to new window
		viewer_move_to_new_window:"Passa alla finestra successiva",
		viewer_continue:"Ignora modifiche",
		viewer_return_to_original_window:"Torna alla finestra di origine",
		viewer_switch_window:"Scambia finestre",
		viewer_prompt_lost_changes:"Il documento ${0} è già attualmente aperto in un'altra finestra. Tale documento contiene modifiche non salvate.<br><br>Si desidera passare a tale finestra per salvare le modifiche, o si desidera eliminare le modifiche ed aprire il documento in questa finestra?",
		viewer_mergesplit_fallback_info: "L'azione Unisci e suddividi può essere completata solo su documenti che si trovano nello stesso repository.",
		viewer_tabbed_layout: "Visualizza come schede",
		viewer_tabbed_layout_highcontrast: "Separatori",
		viewer_split_vertical_layout: "Separa i riquadri in alto ed in basso",
		viewer_split_vertical_layout_highcontrast: "In alto e in basso",
		viewer_split_horizontal_layout: "Separa i riquadri a destra e sinistra",
		viewer_split_horizontal_layout_highcontrast: "Sinistra e destra",
		viewer_add_vertical_layout: "Nuova scheda nella parte inferiore",
		viewer_add_vertical_layout_highcontrast: "Scheda in basso",
		viewer_add_horizontal_layout: "Nuova scheda a destra",
		viewer_add_horizontal_layout_highcontrast: "Scheda a destra",
		viewer_add_horizontal_layout_rtl: "Nuova scheda a sinistra",
		viewer_add_horizontal_layout_rtl_highcontrast: "Scheda a sinistra",
		viewer_split_properties_layout: "Visualizza proprietà",
		viewer_split_comment_layout: "Visualizza commenti",
		viewer_split_notelog_layout: "Visualizza notelog",
		viewer_window_title: "visualizzatore ${0}",
		viewer_next_hit: "Visualizza il documento successivo nell'elenco",
		viewer_prev_hit: "Visualizza il documento precedente nell'elenco",
		viewer_confrim_more_search_results: "I risultati della ricerca non contengono ulteriori documenti visualizzati. Si desidera richiamare ulteriori risultati della ricerca?",
		viewer_confirm_get_next_page: "L'elenco dei risultati non contiene ulteriori elementi visualizzabili. Si desidera richiamare ulteriori risultati di ricerca?",
		viewer_confirm_get_next_item: "L'elenco dei risultati contiene ulteriori elementi visualizzabili. Si desidera visualizzare l'elemento successivo?",
		viewer_fn_annotation_tooltip: " Creato da: ${0},  Creato il: ${1}",
		viewer_box_note_limitation: "È possibile solo aprire e visualizzare Box Notes in una finestra separata.",
		viewer_click_to_open_box_note: "Fare clic qui per aprire Box Note.",
		viewer_box_view_expiring: "Il tempo massimo di visualizzazione di un documento Box è 60 minuti. La sessione corrente scadrà tra ${0} minuti. Se si desidera continuare a lavorare sul documento, è necessario ricaricarlo. Si desidera ricaricare il documento?",
		viewer_add_dialog_save_as_type: "Salva come tipo:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflitto di check-out",
		viewer_checkout_conflict: "Il check-out del documento è stato effettuato da un altro utente.",
		viewer_checkout_confirm: "È disponibile un versione più recente del documento. Si desidera proseguire il check-out del documento o si desidera ricaricare il visualizzatore con la versione più recente? Se si decide di ricaricare il visualizzatore, qualsiasi modifica non salvata andrà perduta.",
		viewer_checkout_continue: "Proseguire con il check-out",
		viewer_checkout_reload: "Ricarica",
		viewer_status_building: "Creazione documento ...",
		viewer_status_adding: "Aggiunta documento...",
		viewer_status_checking_in: "Check-in documento...",

		/* Class Selector Widget */
		include_subclasses_label: "Includi sottoclassi",
		include_subclasses_label2: "Eseguire la ricerca anche nelle sottoclassi",
		include_subclasses_note: "(Inclusione delle sottoclassi)",
		available_classes_col_header: "Classi disponibili",
		single_class_label: "Cerca nella classe singola",
		multiple_classes_label: "Cerca in classi multiple",
		multiple_classes_hover_help: "Selezionare questa opzione per eseguire la ricerca in più di una classe. Le classi possono essere classi padre o sottoclassi. Se si seleziona questa opzione, si visualizzeranno solo le proprietà ed i valori comuni alle classi selezionate.",
		selected_classes_col_header: "Classi selezionate",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Inclusione cartelle secondarie)",
		favorites_pseudo_node: "\\Preferiti\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "È necessario selezionare una cartella nel repository alla quale aggiungere il documento.",
		no_permission_add_folder: "Non si dispone dei permessi appropriati per l'aggiunta di cartelle a questa cartella.",
		no_permission_add_document: "Non si dispone dei permessi appropriati per l'aggiunta di documenti a questa cartella.",
		document_already_in_folder: "Il documento è già presente in questa cartella.",
		cant_move_folder_onto_parent: "La cartella è già presente in questa cartella.",
		cant_move_folder_onto_self: "Non è possibile spostare una cartella su sé stessa o sulle relative cartelle secondarie.",

		/* Workflow Widgets */
		process_application_space: "Spazio applicazione processo",
		process_role: "Ruolo processo",
		process_inbasket: "Carrello di inserimento processo",
		process_worklist: "Elenco di lavoro",
		process_step_processor: "Elemento di lavoro processo",
		process_tracker: "Traccia elemento di lavoro",
		process_info_subject: "Oggetto",
		process_info_stepname: "Passo",
		process_info_is_locked: "Bloccato",
		process_info_no_access: "Nessun accesso",
		process_info_received_on: "Ricevuto il",
		process_info_overdue: "Scaduto",
		process_info_reminder_sent: "Promemoria inviato",
		process_info_locked_by_user: "Bloccato da",
		process_work_object_number: "Numero oggetto di lavoro",
		process_deadline: "Data di scadenza:",
		process_launchedby: "Avviato da:",
		process_receivedon: "Ricevuto il:",
		process_step: "Passo:",
		process_properties: "Proprietà",
		process_attachments: "Allegati",
		process_attachments_select: "Seleziona un allegato",
		process_finish_button_label: "Arresta traccia",
		process_tracker_history: "Cronologia",
		process_tracker_milestones: "Attività cardini",
		process_tracker_milestone: "Attività cardine",
		process_tracker_milestone_level: "Livello",
		process_tracker_milestones_empty: "Non vi sono attività cardine da visualizzare.",
		process_tracker_level_selector_label: "Mostra livelli attività cardine fino a:",
		process_tracker_map_selector_label: "Filtra per associazione:",
		process_tracker_message: "Messaggio",
		process_tracker_datereached: "Data raggiunta",
		process_tracker_stepname: "Passo",
		process_tracker_cycle: "Ciclo",
		process_tracker_review_cycle: "Esamina il ciclo",
		process_tracker_participant: "Partecipante",
		process_tracker_completed: "Completato",
		process_tracker_response: "Risposta",
		process_tracker_comments: "Commenti",
		process_tracker_delete_confirmation: "Si desidera arrestare la traccia del seguente flusso di lavoro: ${0}?",
		process_tracker_history_allmaps: "Tutte le mappe",
		process_tracker_history_workflow: "Flusso di lavoro",
		process_tracker_history_terminate: "Termina",
		process_tracker_history_malfunction: "Malfunzionamento",
		process_filter_label: "Filtra",
		process_no_filter_summary: "Nessun filtro applicato",
		process_filter_summary: "${0} applicati",
		process_filter_reset_tooltip: "La reimpostazione elimina i filtri e aggiorna il carrello di inserimento.",
		process_attachments_add_folder: "Aggiungi cartella",
		process_attachments_add_doc: "Aggiungi documento",
		process_complete_button_label: "Completa",
		process_save_button_label: "Salva con nome",
		process_launch_button_label: "Avvia flusso di lavoro",
		process_open_button_label: "Apri",
		process_movetoinbox_button_label: "Sposta nel carrello di inserimento",
		process_return_button_label: "Restituisci",
		process_return_to_sender_tooltip: "Restituisci l'elemento di lavoro al carrello di inserimento di origine",
		process_move_to_inbasket_tooltip: "Sposta l'elemento di lavoro nel carrello di inserimento personale",
		process_reassign_tooltip: "Riassegnare l'elemento di lavoro ad un altro proprietario",
		process_reassign_button_label: "Riassegna",
		process_preferences_button_label: "Preferenze",
		process_manageroles_button_label: "Gestisci ruoli",
		process_manageroles_no_members: "Nessun membro disponibile.",
		process_responses_button_label: "Più risposte",
		process_morecustomaction_button_label: "Altre azioni",
		process_show_instructions: "Visualizza istruzioni",
		process_hide_instructions: "Nascondi istruzioni",
		process_remove_attachment: "Rimuovi",
		process_close_window: "L'elemento di lavoro è stato elaborato.",
		process_delegate_flag: "Richiede che il proprietario corrente approvi l'elemento di lavoro prima di instradarlo al passo successivo nel flusso di lavoro.",
		process_paticipant_voting: "Numero di partecipanti richiesto per l'approvazione della votazione:",
		process_get_next_label: "Ottieni prossimo elemento di lavoro",
		process_no_more_items: "Non vi sono più elementi nel carrello da elaborare.",
		process_workflow_name: "Nome flusso di lavoro:",
		process_pattern_process_name: "Revisione per ${0}",
		process_instuctions: "Istruzioni per i recensori:",
		process_pattern_deadline: "Data di scadenza:",
		process_reviewers: "Recensori:",
		process_approvals_required: "Approvazioni richieste:",
		process_on_reject: "Se l'elemento di lavoro viene rifiutato:",
		process_return_to_originator: "Ritorna",
		process_return_to_previous_reviewer: "Ritorna a revisore precedente",
		process_additional_settings: "Impostazioni aggiuntive:",
		process_allow_reassign: "Consenti ai recensori di riassegnare questa revisione",
		process_complete_notification: "Informa quando la revisione è completata.",
		process_workflow_name_hover_help: "Il nome specificato per l'elemento di lavoro deve facilitare i recensori a distinguere tra questo elemento di lavoro e gli altri elementi di lavoro contenuti nel carrello.",
		process_approvals_required_hover_help: "Se l'elemento di lavoro viene revisionato da più persone contemporaneamente, è possibile specificare quante approvazioni sono necessarie per completare correttamente l'elemento di lavoro.",
		process_approval_options: "Opzioni di approvazione",
		process_all: "Tutto",
		process_at_least: "Almeno",
		process_at_least_by_count: "Almeno un numero di ${0} revisori",
		process_at_least_by_percentage: "Almeno il ${0}% dei revisori",
		process_comments: "Commenti:",
		process_review_step_comments_hover_help: "Se l'elemento di lavoro viene rifiutato, è necessario fornire le informazioni sul perché è stato respinto. Queste informazioni consentono all'originatore dell'elemento di lavoro o al precedente recensore di indirizzare meglio i propri interessi.",
		process_rework_step_comments_hover_help: "È necessario fornire informazioni su come sono stati indirizzati i commenti. Se non si è d'accordo con i commenti, fornire il perché del proprio parere.",
		process_rejection_reason: "Motivo per il rifiuto:",
		process_summary: "Riepilogo",
		process_sequential_review: "Revisione sequenziale",
		process_sequential_review_description: "L'elemento di lavoro verrà revisionato nell'ordine da ogni recensore.",
		process_parallel_review: "Revisione parallela",
		process_parallel_review_description: "L'elemento di lavoro verrà revisionato contemporaneamente da tutti i recensori.",
		process_parallel_approvals_required_error: "Il numero di approvazioni richieste è troppo elevato. Sono specificati solo ${0} revisori.",
		process_parallel_invalid_required_approvals_count: "Il valore non è valido. Il valore deve essere ${0}.",
		process_subject_prompt: "Immettere l'oggetto",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Elemento di lavoro:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Visualizzazione proprietà",
		view_permissions_level: "Visualizza autorizzazioni",
		view_content_level: "Visualizzazione documento",
		link_level: "Link",
		modify_properties_level: "Modifica proprietà",
		modify_content_level: "Modifica documento",
		minor_version_level: "Modifica versione secondaria",
		major_version_level: "Modifica versione principale",
		create_instance_level: "Crea istanza",
		delete_document_level: "Eliminazione documento",
		delete_item_level: "Elimina voce",
		modify_document_permissions_level: "Gestisci permessi",
		modify_folder_permissions_level: "Gestisci permessi",
		modify_owner_level: "Modifica proprietario",
		delete_folder_level: "Eliminazione cartella",
		file_in_folder_level: "Aggiunta alle cartelle",
		create_subfolder_level: "Creazione cartelle secondarie",
		link_item_level: "Annota documento, Aggiungi alla cartella", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Solo documento: aggiunge un'annotazione al documento o rimuove un'annotazione dal documento</li><li>Solo cartella: aggiunge gli elementi alla cartella o rimuove gli elementi dalla cartella</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Elimina",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Proprietario",
		/* previously \"Full control\" */
		edit_privilege: "Autore",
		/* previously \"Edit\" */
		read_only_privilege: "Lettore",
		/* previously \"Read only\" */
		no_access_privilege: "Nessun accesso",
		share_with_label: "Condividi con:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Solo io",
		public_label: "Tutti",
		members_label: "Utenti e gruppi specifici",
		select_members_label: "Seleziona...",
		select_user_group_label: "Selezione utenti in corso...",
		select_users_groups_label: "Seleziona utenti e gruppi...",
		select_user_label: "Seleziona utente...",
		propagation_label: "Propagazione:",
		access_label: "Permessi:",
		add_permission_add_label: "Aggiungi",
		security_policy_label: "Criterio di protezione:",
		includes_inherited_access: "Include accesso ereditato",
		customize_access_for_label: "Personalizzare l'accesso per:",
		customize: "Personalizza",
		direct: "Questo elemento",
		singleLevelInheritance: "Un livello",
		infiniteLevelInheritance: "Tutti i livelli",
		inherited: "Ereditato",
		direct_hover_help: "All'elemento selezionato vengono applicate le impostazioni di protezione",
		singleLevelInheritance_hover_help: "Queste autorizzazioni vengono applicate a questo elemento ed agli elementi figlio immediati configurati in modo da ereditare la sicurezza da questo elemento.",
		infiniteLevelInheritance_hover_help: "Queste autorizzazioni vengono applicate a questo elemento ed a tutti gli elementi discendenti configurati in modo da ereditare la sicurezza da questo elemento.",
		inherited_hover_help: "Queste autorizzazioni sono ereditate dall'elemento padre.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Queste autorizzazioni per ${0} vengono applicate a questo elemento ed agli elementi figlio immediati configurati in modo da ereditare la sicurezza da questo elemento.",
		infiniteLevelInheritance_member_hover_help: "Queste autorizzazioni per ${0} vengono applicate a questo elemento ed a tutti gli elementi discendenti configurati in modo da ereditare la sicurezza da questo elemento.",
		inherited_member_hover_help: "Queste autorizzazioni per ${0} vengono ereditate dall'elemento padre.",
		partial_hover_help: "Le impostazioni di protezione dell'elemento sono state modificate da un utente",
		allow: "Consenti",
		deny: "Nega",
		basic: "Di base",
		advanced: "Avanzato",
		permission_type: "Impostare l'accesso per:",
		share_with_hover_help: "Questo elemento è correntemente condiviso con i seguenti utenti e gruppi.",
		direct_security_policy_hover_help: "Le impostazioni di questo criterio di protezione consentono di modificare la protezione di questo elemento.",
		security_policy_hover_help: "La sicurezza di questo elemento è di sola lettura poiché le impostazioni di questo criterio di protezione impediscono la modifica della protezione di questo elemento.",
		security_remove: "Nessuna autorizzazione",
		pseudo_group_label: "Account alias",
		marking_hover_help: "La protezione di questo elemento è controllata da una serie di contrassegni, che può influire sulla protezione dell'elemento.",
		note_label: "Importante:",
		marking_text: "Questo elemento è contrassegnato come: ${0}. È possibile che l'elemento abbia ulteriori restrizioni di protezione.",
		authenticated_users: "Utenti autenticati",
		realm_users: "Utenti di ${0}",
		denyAll: "Nega tutto",
		allowAll: "Consenti tutto",
		remove_direct_text: "Quando vengono salvate le modifiche, le autorizzazioni per questo membro verranno rimosse dall'elemento.",
		remove_single_inheritance_text: "Quando vengono salvate le modifiche, le autorizzazioni per questo membro verranno rimosse dall'elemento e da <br>quegli elementi figlio immediati configurati in modo da ereditare la sicurezza dall'elemento.<p>Si desidera continuare?",
		remove_infinite_inheritance_text: "Quando vengono salvate le modifiche, le autorizzazioni per questo membro verranno rimosse dall'elemento e da <br>tutti i discendenti configurati in modo da ereditare la sicurezza dall'elemento.<p>Si desidera continuare?",
		remove_inheritance_text: "Quando vengono salvate le modifiche, le autorizzazioni per questo membro verranno rimosse dall'elemento e da <br>tutti i discendenti configurati in modo da ereditare la sicurezza dall'elemento. Solo le autorizzazioni <br>ereditate da questo elemento resteranno attive.<p>Si desidera continuare?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Rimuovi queste autorizzazioni per ${0}",

		security_proxy_text: "La protezione di questo elemento è sola lettura.",
		security_proxy_declared_text: "La protezione di questo elemento è sola lettura poiché definito da un proxy della sicurezza.",
		security_proxy_hover_help: "La protezione di questo elemento è controllata dalla protezione impostata su un altro oggetto nel repository.",
		add_permissions_label: "Aggiungi permessi",
		permission_propagation_direct: "Solo questa cartella",
		permission_propagation_onelevel: "Questa cartella e un livello sottostante",
		permission_propagation_alllevels: "Questa cartella e tutti i livelli sottostanti",
		document_propagation_label: "Impostare l'accesso per:",
		document_propagation_FOLDER: "Cartella",
		document_propagation_DOCUMENT: "Document",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Origine di autenticazione:",

		/* Versions Widget */
		object_versions_selector_label: "Versioni:",
		object_versions_label: "Versioni",
		object_type_document_label: "Documento:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Archiviato nelle cartelle",
		folders_filed_in_folder_col_hdr: "Cartella",
		folders_filed_in_path_col_hdr: "Percorso",
		folders_filed_in_containment_name_col_hdr: "Nome contenimento",
		folders_filed_in_creator_col_hdr: "Creato da",
		folders_filed_in_date_created_col_hdr: "Creato il",

		/* Parent Documents */
		properties_parent_documents_label: "Documenti padre",

		/* Select object dialog */
		select_object_title: "Seleziona elemento",
		select_object_breadCrumb_version_prefix: "Versioni per: ",
		show_versions_label: "Mostra versioni",
		use_current_version_label: "Utilizza versione corrente",
		use_released_version_label: "Utilizza versione rilasciata",

		/* Select content class dialog */
		select_class: "Seleziona classe",
		/* Select Search dialog */
		select_search: "Seleziona ricerca",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Visualizza link",
		show_hyperlink_intro: "È possibile copiare e incollare il link in email, chat e pagine Web. Se ci sono più versioni dell'elemento, specificare a quale versione si desidera stabilire il collegamento.",
		show_hyperlink_intro_no_version_select: "È possibile copiare e incollare il link in email, chat e pagine Web.",
		show_text_label: "Versione:",
		released_button_label: "Rilasciato",
		current_button_label: "Corrente",
		select_button_label: "Specifica versione",
		show_hyperlink_no_released_version_msg: "Non esiste alcuna versione rilasciata di questo documento.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Avvia flusso di lavoro",
		edit_workflow_title: "Proprietà elemento di lavoro",
		start_workflow_intro: "Avviare un flusso di lavoro per elaborare gli elementi selezionati. Se si desidera assegnare elementi di lavoro a uno specifico utente, specificare un proprietario.",
		edit_workflow_intro: "È possibile modificare le proprietà degli elementi di lavoro selezionati. Se si desidera riassegnare l'elemento di lavoro a un altro utente, specificare un proprietario.",
		workflow_field_label: "Flusso di lavoro:",
		priority_field_label: "Priorità:",
		owner_field_label: "Proprietario:",
		start_button_label: "Avvia",
		save_button_label: "Salva con nome",
		owner_value_hint: "Immettere una stringa alfanumerica con 32 caratteri al massimo. La stringa può contenere solo spazi o i seguenti caratteri: a-z, A-Z, 0-9 e ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elementi contenuto",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Il valore non è valido. Il valore può contenere solo spazi o i seguenti caratteri: a-z, A-Z, 0-9 e ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Immettere un valore compreso tra 1 e 32000 per indicare l'importanza dell'elemento di lavoro.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Il valore non è valido. La priorità deve essere un valore compreso tra 1 e 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Nome flusso di lavoro inesistente.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Sospendi dal flusso di lavoro",
		suspend_workitems_intro: "Quando si sospende un elemento di lavoro dal flusso di lavoro, l'elemento di lavoro non può essere elaborato finché non viene ripreso.",
		suspend_workitems_options_label: "Sospendere gli elementi di lavoro selezionati:",
		suspend_until_resume_label: "Fino alla ripresa manuale",
		suspend_until_date_label: "Fino",
		suspend_for_duration_label: "Per",
		suspend_for_duration_hours: "Ore",
		suspend_for_duration_days: "Giorni",
		suspend_for_duration_weeks: "Settimane",
		suspend_for_duration_months: "Mesi",
		suspend_for_duration_years: "Anni",
		suspend_button_label: "Sospendi",
		suspend_duration_value_hint: "Immettere un valore per la durata compreso nell'intervallo 1-99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Il valore non è valido. Il valore deve essere compreso nell'intervallo 1-99.",

		/* Remove from workflow */
		remove_workflow_title: "Rimuovi dal flusso di lavoro",
		remove_workflow_confirmation: "Si desidera rimuovere gli elementi selezionati dal flusso di lavoro?<br>Sono selezionati ${0} elementi.",
		remove_workflow_button_label: "Rimuovi",

		/* Unfile dialog */
		unfile_dialog_title: "Rimuovi dalla cartella",
		unfile_dialog_remove_from_folder_label: "Rimuovi da:",
		unfile_dialog_info_text: "È possibile rimuovere gli elementi dalle cartelle. Tuttavia, la rimozione di un elemento da tutte le cartelle non rimuove l'elemento dal repository. È possibile ancora richiamare l'elemento eseguendo una ricerca. In questo elenco vengono mostrate solo le cartelle per cui l'utente dispone dei privilegi per la visualizzazione.",
		unfile_dialog_select_all: "Seleziona tutto",
		unfile_dialog_deselect_all: "Elimina tutto",
		unfile_dialog_remove_button_label: "Rimuovi",
		unfile_dialog_select_folder_col_hdr: "Seleziona cartella",
		unfile_dialog_folder_col_hdr: "Cartella",
		unfile_dialog_path_col_hdr: "Percorso",
		unfile_dialog_not_filed_msg: "Questo elemento non è presente in alcuna cartella.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "L'utente non dispone dei permessi appropriati per rimuovere questo elemento da nessuna delle cartelle in cui è presente.",
		unfile_dialog_folder_not_selectable_tooltip: "L'utente non dispone dei permessi appropriati per rimuovere questo elemento dalla cartella.",
		unfile_multi_prompt: "Si desidera rimuovere gli elementi selezionati dalla cartella ${0}?",
		unfile_large_number_items_confirmation_question: "Sono stati selezionati ${0} elementi da rimuovere dalla cartella ${1}.<br/>La rimozione di un numero elevato di elementi da una cartella potrebbe richiedere molto tempo.<br/>Si desidera continuare?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Apri",
		move_to_folder_title: "Sposta nella cartella",
		move_to_folder_button_caption: "Sposta",
		move_to_folder_label: "Sposta in:",
		add_to_folder_title: "Aggiungi alla cartella",
		add_to_folder_button_caption: "Aggiungi",
		add_to_folder_label: "Aggiungi a:",
		copy_to_folder_title: "Copia nella cartella",
		copy_to_folder_button_caption: "Copia",
		copy_to_folder_label: "Copia in:",
		copy_to_folder_delete_label: "Una volta completata la copia, eliminare gli elementi selezionati da Box.",
		move_from_folder_label: "Sposta da:",
		move_file_info_text: "È possibile spostare gli elementi da una cartella a un'altra.",
		move_folder_info_text: "È possibile spostare le cartelle da una cartella padre a un'altra cartella.",
		add_doc_to_folder_info_text: "È possibile aggiungere elementi a una o più cartelle. Se un elemento è già presente in una cartella, resta in tale cartella e viene aggiunto a tutte le altre cartelle specificate.",
		copy_doc_to_folder_info_text: "È possibile copiare elementi in una cartella.",
		box_copy: "Copia Box",
		box_copy__button_caption: "Copia",
		box_copy_to_info_text: "Selezionare il repository e la cartella in cui si desidera copiare gli elementi selezionati da Box.",
		box_copy_from_info_text: "Selezionare il repository e la cartella in cui si desidera copiare gli elementi selezionati da Box.",
		box_copy_version_info_text: "Per aggiungere un nuovo documento, selezionare il repository e la cartella. Per eseguire il check-in di una nuova versione, selezionare il repository ed il documento.",
		admin_box_copy: "Copia Box",
		admin_box_copy_hover: "Questa opzione consente agli utenti di copiare i documenti in Box.",

		no_permission_to_copy_version_msg: "Non è possibile copiare il documento da Box come una nuova versione del documento selezionato. L'utente non dispone dei permessi appropriati per modificare il documento selezionato oppure il documento selezionato è sottoposto a check-out da un altro utente.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "L'utente non dispone dei permessi appropriati per rimuovere questo elemento da nessuna delle cartelle in cui è presente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "L'utente non dispone dei permessi appropriati per rimuovere questo elemento dalla cartella.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Questo elemento non può essere spostato perché non è archiviato in alcuna cartella. Scegliere un altro elemento.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Avvia flusso di lavoro",
		subscriptions_dialog_available_items_label: "Elementi disponibili:",
		subscriptions_dialog_info_text: "Specificare il flusso di lavoro da avviare.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nome",
		subscriptions_dialog_desc_col_hdr: "Descrizione",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gestisci ruoli",
		manageroles_dialog_info_text: "È possibile modificare l'elenco degli utenti per ciascun ruolo associato a questo spazio di applicazione di processo.",
		manageroles_dialog_members_label: "Membri",
		manageroles_dialog_roles_label: "Ruoli",
		manageroles_dialog_add_button_label: "Aggiungi utenti e gruppi",
		manageroles_dialog_remove_button_label: "Rimuovi",
		manageroles_dialog_save_button_label: "Salva con nome",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "A questo elemento non è associato alcun flusso di lavoro.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferenze del flusso di lavoro",
		workflow_pref_dialog_info_text: "Specificare gli eventi del flusso di lavoro di cui si desidera ricevere le notifiche via e-mail. È inoltre possibile abilitare l'opzione per passare il proprio lavoro ad un'altra persona selezionando un utente a cui delegare il lavoro.",

		workflow_pref_general: "Generale",
		workflow_pref_email_address: "Indirizzo e-mail",
		workflow_pref_email_address_hover: "Specificare l'indirizzo e-mail dove si desidera ricevere le notifiche del flusso di lavoro.",
		workflow_pref_preferred_locale: "Lingua",
		workflow_pref_preferred_locale_hover: "Specificare la lingua in cui vengono visualizzate le notifiche e-mail.",

		workflow_pref_work_item_notice: "Notifiche elemento di lavoro",
		workflow_pref_step_new_assignment: "Assegnato nuovo elemento di lavoro",
		workflow_pref_step_new_assignment_hover: "Informa quando viene ricevuto un nuovo elemento di lavoro.",
		workflow_pref_step_expired_deadline: "Superata la scadenza dell'elemento di lavoro",
		workflow_pref_step_expired_deadline_hover: "Informa quando viene superata la scadenza di un elemento di lavoro.",
		workflow_pref_step_reminders: "Scadenza dell'elemento di lavoro prossima",
		workflow_pref_step_reminders_hover: "Segnala quando un elemento di lavoro si approssima alla scadenza.",

		workflow_pref_originator_notice: "Notifiche originatore",
		workflow_pref_milestone_reached: "Raggiunta attività cardine",
		workflow_pref_milestone_reached_hover: "Notifica quando viene raggiunta un'attività cardine su un flusso di lavoro avviato.",

		workflow_pref_tracker_notice: "Notifica tracker flusso di lavoro",
		workflow_pref_tracker_new_assignment: "Assegnato nuovo elemento tracker",
		workflow_pref_tracker_new_assignment_hover: "Notifica quando viene avviato un flusso di lavoro che si sta tracciando.",
		workflow_pref_tracker_deadline_reminders: "Scadenza flusso di lavoro prossima",
		workflow_pref_tracker_deadline_reminders_hover: "Segnala quando un flusso di lavoro si approssima alla scadenza.",
		workflow_pref_tracker_deadline_expired: "Superata la scadenza del flusso di lavoro",
		workflow_pref_tracker_deadline_expired_hover: "Informa quando viene superata la scadenza di un flusso di lavoro.",
		workflow_pref_tracker_exception: "Verificato errore del flusso di lavoro",
		workflow_pref_tracker_exception_hover: "Notifica quando si verifica un'eccezione o un errore del flusso di lavoro.",
		workflow_pref_tracker_expired_deadline: "Superata la scadenza della fase",
		workflow_pref_tracker_expired_deadline_hover: "Notifica il superamento di una scadenza fase che si sta tracciando.",
		workflow_pref_tracker_milestone_reached: "Raggiunta attività cardine",
		workflow_pref_tracker_milestone_reached_hover: "Notifica quando viene raggiunta un'attività cardine su un flusso di lavoro tracciato.",

		workflow_pref_out_notice: "Fuori ufficio",
		workflow_pref_proxy_user: "Delega lavoro a",
		workflow_pref_proxy_user_hover: "Utilizzare questa opzione per trasferire automaticamente il proprio lavoro ad un altro utente, ad esempio, quando si è assenti per ferie.",
		workflow_pref_workflow: "Flusso di lavoro",
		workflow_pref_on: "Attivo",
		workflow_pref_off: "Disattivo",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Avvia flusso di lavoro",
		transfered_workflows_dialog_info_text: "Selezionare un flusso di lavoro da avviare.",
		transfered_workflows_dialog_available_items_label: "Elementi disponibili:",
		transfered_workflows_dialog_select_button_label: "Avvia",
		transfered_workflows_dialog_name_col_hdr: "Nome",
		transfered_workflows_dialog_no_item_found: "Non è stato trovato alcun flusso di lavoro trasferito.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Trasferisci flusso di lavoro",
		transfer_workflow_dialog_info_text: "Selezionare un flusso di lavoro da trasferire nel sistema del flusso di lavoro.",
		transfer_workflow_dialog_use: "Usa questo nome di flusso di lavoro",
		transfer_workflow_dialog_use_another: "Usa altro nome di flusso di lavoro",
		transfer_workflow_dialog_in_use: "Il nome di flusso di lavoro è: ",
		transfer_workflow_dialog_transfer_button_label: "Trasferisci",
		transfer_workflow_dialog_no_items_found: "Non è stato trovato alcun flusso di lavoro trasferito.",
		transfer_workflow_dialog_use_hover: "Specificare il nome del flusso di lavoro corrente dalla definizione del flusso di lavoro.",
		transfer_workflow_dialog_another_hover: "Specificare un nome flusso di lavoro differente o riutilizzare un nome del flusso di lavoro trasferito esistente.",

		/*Search In control*/
		search_in_title: "Cerca in:",
		search_in_teamspaces: "Spazi team",
		search_in_repositories: "Repository",
		search_in_thisteamspaces: "Questo spazio team",

		ajaxViewer_save: "Salva annotazioni",
		ajaxViewer_print: "Anteprima di stampa",
		ajaxViewer_firstPage: "Prima pagina",
		ajaxViewer_previousPage: "Pagina precedente",
		ajaxViewer_nextPage: "Pagina successiva",
		ajaxViewer_lastPage: "Ultima pagina",
		ajaxViewer_unknownPageCount: "1 di ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} di ${1}",
		ajaxViewer_zoomOut: "Zoom indietro",
		ajaxViewer_zoomIn: "Zoom avanti",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Adatta larghezza",
		ajaxViewer_fitHeight: "Adatta altezza",
		ajaxViewer_fitPage: "Adatta pagina",
		ajaxViewer_rotate270: "Ruota di 270 gradi",
		ajaxViewer_rotate90: "Ruota di 90",
		ajaxViewer_rotate180: "Ruota di 180 gradi",
		ajaxViewer_darken: "Scurisci",
		ajaxViewer_lighten: "Schiarisci",
		ajaxViewer_lessContrast: "Meno contrasto",
		ajaxViewer_moreContrast: "Più contrasto",
		ajaxViewer_invert: "Inverti",
		ajaxViewer_createHighlight: "Evidenzia",
		ajaxViewer_createNote: "Annota",
		ajaxViewer_editAnnotation: "Modifica proprietà annotazione",
		ajaxViewer_deleteAnnotation: "Cancella annotazione",
		ajaxViewer_editAnnotationTitle: "Modifica proprietà annotazione",
		printableView_print: "Stampa",
		printableView_close: "Chiudi",

		search_results_dropdown_button: "Visualizzazione dei risultati",
		search_results_columns_label: "Visualizzazione risultati della ricerca",
		search_results_columns_description: "Selezionare le proprietà che si desidera visualizzare nei risultati della ricerca.",
		search_results_sortby_label: "Ordina per:",
		search_results_order_label: "Ordinamento:",
		search_results_accending_label: "Crescente",
		search_results_descending_label: "Decrescente",
		search_results_available_properties: "Disponibile",
		search_results_selected_properties: "Selezionato",
		search_rank_property: "Classificazione (solo ricerca di testo)",
		search_name_attribute: "Nome (${0})",
		search_results_summary_enabled_label: "Abilita i riepiloghi del contenuto (solo testo di ricerca)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Ricerche",
		manage_teamspace_classes_tab_title: "Classi",
		manage_teamspace_entry_templates_tab_title: "Modelli di immissione",
		manage_teamspace_team_tab_title: "Team",
		manage_teamspace_roles_tab_title: "Ruoli",
		manage_teamspace_dialog_title: "Modifica spazio team",
		manage_teamspace_button_label: "Modifica spazio team",
		manage_teamspace_team_pane_heading: "Seleziona team",
		manage_teamspace_classes_pane_heading: "Seleziona classi",
		manage_teamspace_entry_templates_pane_heading: "Seleziona modelli di immissione",
		manage_teamspace_no_rights_message: "Non si dispone dei permessi appropriati per modificare questo spazio team.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Proprietà spazio team",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Specificare le proprietà visualizzate per documenti e cartelle nell'elenco del contenuto quando gli utenti eseguono l'esplorazione nello spazio team. È anche possibile specificare l'ordine in cui le proprietà sono visualizzate.",
		teamspace_props_sel_cols_use_default_label: "Utilizzare le impostazioni della pagina <b>Sfoglia</b> per questo repository",
		teamspace_props_sel_cols_use_default_tooltip: "Utilizzare le impostazioni specificate nella pagina Sfoglia per questo repository nello strumento di amministrazione.",
		teamspace_props_general_tab_label: "Generale",
		teamspace_props_column_props_tab_label: "Proprietà visualizzate",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Scegli file per importazione:",
		teamspace_import_template_instruction: "È possibile selezionare un file di esportazione di modello di spazio team da importare.",
		teamspace_import_template_button_label: "Importa",
		teamspace_import_template_dialog_label: "Importa modello di spazio team",

		/* Annotation Dialog */
		annotationDlg_title: "Annotazioni",
		annotationDlg_description: "Il documento selezionato contiene le seguenti annotazioni:",
		annotationDlg_msg_noAnnotations: "Non esiste alcuna annotazione. Fare clic su Aggiungi per creare un'annotazione.",
		annotationDlg_pageLabel: "Pagina: ${pageNum}",
		annotationDlg_accLabel: "ACCESSO: ${accType}",
		annotationDlg_accLabel_public: "Pubblico",
		annotationDlg_accLabel_private: "Privato",
		annotationDlg_accLabel_privateGroup: "Privato (${groupName})",
		annotationDlg_copiable: "È possibile eseguirne la copia su un altro server",
		annotationDlg_cannotCopy: "Non è possibile eseguirne la copia su un altro server",
		annotationDlg_addButtonLabel: "Aggiungi",

		/* Share Dialog */
		is_shared: "Condiviso",
		is_share_pending: "Condivisione in sospeso",
		share_title: "Condivisione Box",
		share_instructions_new: "Inviare una email che contiene un link per il file condiviso. Chiunque disponga del link può accedere al file.",
		share_instructions_existing: "Inviare una email che contiene un link per il file condiviso. Chiunque disponga del link può accedere al file. Altre persone potrebbero avere il link perché qualcun altro ha già condiviso questo file.",
		share_instructions_another_version_shared: "Inviare una email che contiene il link per il file condiviso. Chiunque disponga del link può accedere al file. Altre persone potrebbero avere il link perché qualcun altro ha già condiviso un'altra versione di questo file.",
		share_buttonLabel_share: "Condividi",
		share_email_addresses: "Invia a:",
		share_email_addresses_hover: "Una volta completata la condivisione, viene inviato un link a questi indirizzi email. Se non viene immesso alcun indirizzo, il link viene inviato al proprio indirizzo email.",
		share_email_addresses_reshare_hover: "Una volta completata la condivisione, viene inviato un link a questi indirizzi email. Se non viene immesso alcun indirizzo, non viene inviata alcuna email.",
		share_password: "Imposta password:",
		share_password_placeholder: "Facoltativo",
		share_comments: "Messaggio:",
		share_comments_default: "Desidero condividere il mio file su Box.",
		share_myEmail: "Invia da:",
		share_expiration: "Imposta scadenza link:",
		share_expire: "L'accesso scade:",
		share_expire_none: "Non scade mai",
		share_allowDownload: "Consenti download",
		share_add: "Aggiungi",
		share_advanced_instructions: "Le impostazioni relative al download, alla scadenza ed alla password vengono applicate al file condiviso in Box.",
		share_advanced_existing_instructions: "Le impostazioni relative al download, alla scadenza ed alla password vengono applicate al file condiviso in Box.",
		share_options_edit_warning: "Importante: qualsiasi modifica a queste impostazioni ha effetto su qualsiasi utente con il link, incluse le persone che già dispongono del link.",
		share_link: "Link:",
		share_email_addresses_placeholder: "Indirizzi email",
		share_email_address_placeholder: "Indirizzo e-mail",
		share_email_address_invalid: "Immettere un indirizzo email valido.",
		share_cannot_share_with_self: "Non è possibile condividere i file con se stessi. Specificare un utente differente.",
		share_selected_version_with_minor_warning_hover: "La versione ${0} del documento è condivisa. È stata selezionata la versione ${1}.<br><br><b>Avvertenza</b>: Se si condivide la versione ${1}, nessuno può condividere la versione ${2} a meno che non si annulli la condivisione della versione ${1}.",
		share_selected_version_hover: "La versione ${0} del documento è condivisa. È stata selezionata la versione ${1}.",
		share_selected_version_message: "Importante: la versione ${0} del documento è condivisa. È stata selezionata la versione ${1}.",
		share_different_version_message: "Importante: è stata selezionata la versione ${1}, ma la versione ${0} del documento è già condivisa.  Non è possibile condividere la versione ${1} fino a quando non viene eliminata la condivisione, ma è possibile condividere il link alla versione ${0}.",
		share_version_message: "Importante: la versione ${0} del documento è condivisa. Selezionare quale versione si desidera condividere.",
		share_version_new: "Condividi versione ${0}",
		share_version_new_p8_hover: "La condivisione di questo documento crea un link specifico solo per la versione selezionata.<br><br>Quando un documento è già condiviso:<ul><li>È possibile condividere una versione successiva ed il link esegue il reindirizzamento alla versione più recente.</li><li>Non è possibile condividere una versione precedente se non viene prima eliminata la condivisione.</li></ul>",
		share_version_new_cm_hover: "La condivisione di questo documento crea un link specifico solo per la versione selezionata.<br><br>Quando un documento è già condiviso:<ul><li>È possibile condividere una versione successiva ed il link esegue il reindirizzamento alla versione più recente.</li><li>Non è possibile condividere una versione precedente.</li></ul>",
		share_version_update: "Condividi versione ${0} (Aggiornare le opzioni di condivisione).",
		share_version_update_p8_hover: "La condivisione di questo documento mantiene il link solo alla versione specifica.<br><br>Quando un documento è già condiviso:<ul><li>È possibile condividere una versione successiva ed il link esegue il reindirizzamento alla versione più recente.</li><li>Non è possibile condividere una versione precedente se non viene prima eliminata la condivisione.</li></ul>",
		share_version_update_cm_hover: "La condivisione di questo documento mantiene il link solo alla versione specifica.<br><br>Quando un documento è già condiviso:<ul><li>È possibile condividere una versione successiva ed il link esegue il reindirizzamento alla versione più recente.</li><li>Non è possibile condividere una versione precedente.</li></ul>",
		share_version_change_to_current: "Condividi versione ${0} (Aggiornare la condivisione con la versione selezionata).",
		share_version_change_to_current_p8_hover: "La condivisione di questo documento aggiorna il link in modo da puntare solo alla versione selezionata.<br><br>Quando un documento è già condiviso:<ul><li>È possibile condividere una versione successiva ed il link esegue il reindirizzamento alla versione più recente.</li><li>Non è possibile condividere una versione precedente se non viene prima eliminata la condivisione.</li></ul>",
		share_version_change_to_current_cm_hover: "La condivisione di questo documento aggiorna il link in modo da puntare solo alla versione selezionata.<br><br>Quando un documento è già condiviso:<ul><li>È possibile condividere una versione successiva ed il link esegue il reindirizzamento alla versione più recente.</li><li>Non è possibile condividere una versione precedente.</li></ul>",
		share_repository: "Repository per i file condivisi",
		share_repository_hover: "Se il repository di Box che si desidera utilizzare non viene visualizzato, è possibile aggiungere un nuovo repository di Box nella pagina Repository.",
		share_options: "Opzioni di condivisione",
		unshare_confirm: "Se la condivisione viene eliminata, tutti i link di condivisione vengono interrotti, inclusi i link di condivisione precedentemente inviati da altri utenti. Qualsiasi altro utente che desidera condividere il documento deve selezionare il documento originale e condividerlo nuovamente.<br><br>Si è sicuri di voler eliminare la condivisione?",
		unshare_button: "Elimina Condivisione Box",
		admin_share: "Servizi Condivisione Box:",
		admin_share_hover: "Consente agli utenti di condividere un documento da qualsiasi repository con Condivisione Box abilitata. La condivisione di un documento prevede la copia del file in Box, la creazione di un link e l'invio del link in una email.",
		admin_my_email_modifiable: "Consenti agli utenti di modificare l'indirizzo email Invia da",
		admin_my_email_modifiable_hover: "Per impostazione predefinita, per Condivisione Box, l'indirizzo email dell'utente è di sola lettura e viene ottenuto da un'associazione di utenti ed indirizzi email che rappresentano gli account utente Box.<br><br>Selezionare questa opzione per consentire agli utenti di modificare il proprio indirizzo email durante la condivisione; tuttavia, la validità dell'indirizzo email non viene verificata.",
		admin_repos_admin_user: "Amministratore di condivisione:",
		admin_repos_admin_user_hover: "Impostare l'amministratore di condivisione se si dispone di un desktop con servizi Condivisione Box abilitati e questo repository di Box selezionato come repository per i file condivisi.<br><br>Fare clic su Imposta ed accedere a Box utilizzando un account amministratore di Box che sia valido.<br><br>L'amministratore di condivisione deve essere un utente amministratore di Box configurato in modo da disporre di spazio di archiviazione illimitato in Box.",
		admin_repos_admin_user_not_set_warning: "L'amministratore di Box non è configurato per il repository selezionato.<br><br>I servizi Condivisione Box sono disabilitati fino a quando non viene impostato l'amministratore di Box per il repository selezionato oppure viene selezionato un altro repository di Box in cui è configurato l'amministratore di Box.<br><br>È possibile impostare l'amministratore di Box nei servizi Condivisione Box nella pagina Generale per il repository.",
		admin_share_not_configured_warning: "Prima di poter utilizzare i servizi di condivisione Box, è necessario prima aggiungere e selezionare un repository Box con l'autenticazione server.",
		/* Office Online Server settings */
		admin_office_online_title: "Configurazione Office Online",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Specificare se si desidera che gli utenti che accedono a questo desktop siano in grado di modificare i propri documenti Office utilizzando Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Consenti modifica in collaborazione",
		admin_office_online_allow_collaborative_editing_hover: "Consentire che più di un utente lavori sullo stesso documento. Annullare questa opzione se si desidera limitare la modifica dei documenti ad un utente.",
		admin_office_online_repository_not_set_warning: "Prima di poter abilitare il servizio Office Online, è necessario prima abilitare il servizio su un repository e specificare l'URL Microsoft Office Online Server. Fare clic su <b>Repository</b>, selezionare un repository e quindi sulla scheda <b>Integrazione Edit</b>, abilitare il servizio. Fare clic su <b>Impostazioni > Generale</b> e quindi immettere l'URL  Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Specificare se si desidera utilizzare Office Online Server per lavorare con i documenti Office.",
		admin_office_online_server_url: "URL Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Specificare l'URL tramite cui altre applicazioni possono comunicare con Office Online Server. L'URL ha il formato http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Verificato",
	    admin_office_online_server_Failed: "<b>Non riuscito</b>",

		admin_repcfg_office_online_service_p8_hover: "Per inizializzare il repository per utilizzare Office Online Server, è possibile aggiungere il file modello iniziale per ogni applicazione Office. Se non viene specificato un modello, verrà utilizzato il modello predefinito.",	
		admin_repcfg_office_online_server_integration: "Integrazione MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Prima di poter abilitare Office Online Server, è necessario prima specificare l'URL Microsoft Office Online Server. Fare clic su Impostazioni > Generale e immettere l'URL",
		admin_repcfg_office_online_word_template_name: "Modello Word predefinito",
		admin_repcfg_office_online_excel_template_name: "Modello Excel predefinito",
		admin_repcfg_office_online_powerpoint_template_name: "Modello PowerPoint predefinito",
		admin_repcfg_office_online_blank_template_description: "Questo è il modello predefinito utilizzato se non si aggiunge un proprio modello.",
		/* Edit Service settings */
		admin_icn_edit_title: "Modifica configurazione",	
	    admin_icn_edit_files_cleanup_interval: "Intervallo di ripulitura dei file temporanei (in giorni):",
	    admin_icn_edit_files_cleanup_interval_hover: "È possibile impostare la quantità di tempo per cui vengono conservati i file temporanei nel client Edit ICN. Il valore predefinito è 20 giorni. Il tempo massimo è 20 giorni. Il tempo minimo è 1 giorno.",
	    admin_icn_edit_service_integration: "Integrazione servizio Edit",
	    admin_icn_edit_service_integration_intro: "Il servizio Edit consente agli utenti di aggiungere o modificare semplicemente i file nelle app native installate sui propri computer.<br><br><b>Importante:</b> Se si abilita il servizio edit, è necessario salvare la configurazione del proprio repository prima di poter modificare le categorie predefinite.",
		admin_icn_edit_service: "Servizio Edit:",
		admin_icn_edit_enable_hover: "Per utilizzare il servizio Edit, è inoltre necessario:<ul><li>Abilitare il servizio sul repository</li><li>Abilitare il servizio sul desktop del proprio ambiente</li><li>Installare il client IBM Content Navigator Edit sulla stazione di lavoro dell'utente</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Abilita",
		admin_icn_edit_disable: "Disabilita",
		admin_icn_edit_create_new_category: "Nuova categoria",
		admin_icn_edit_delete_category: "Elimina categoria",
		admin_icn_edit_edit_category: "Modifica categoria",
		admin_icn_edit_disable_category: "Disabilita categoria",
		admin_icn_edit_enable_category: "Abilita categoria",
		admin_icn_edit_new_category_dialog_title: "Nuova categoria",
		admin_icn_edit_edit_category_dialog_title:"Modifica categoria",
		admin_icn_edit_new_category_dialog_instructions: "Una categoria di documento consente all'utente di associare modelli a tipi MIME specifici per il servizio edit. Ad esempio è possibile associare una serie di modelli con i file PDF, in modo da consentire agli utenti di applicare i modelli quando aggiungono o modificano i file del client IBM Content Navigator Edit. <br><br><b>Importante:</b> È necessario salvare la configurazione del proprio repository prima di poter aggiungere i modelli alla categoria che si crea. ",
		admin_icn_edit_edit_category_dialog_instructions: "È necessario salvare la configurazione del proprio repository prima di poter aggiungere i modelli a questa categoria. ",
		admin_icn_edit_delete_category_dialog_instructions: "Si desidera eliminare questa categoria e qualsiasi modello associato ad essa?<br><br><b>Importante:</b> Le modifiche non saranno definitive finché non le si salva nel repository. ",
		admin_icn_edit_category_label: "Categoria: ",
		admin_icn_edit_category_discription_label:"Descrizione: ",
		admin_icn_edit_template_column_head:"Nome modello",
		admin_icn_edit_category_duplicate_error_message: "Una categoria con questo ID esiste già. ",
		admin_icn_edit_word_category_description: "Questa categoria definisce i modelli disponibili per i documenti Microsoft Word nel servizio edit. ",
		admin_icn_edit_excel_category_description: "Questa categoria definisce i modelli disponibili per i documenti Microsoft Excel nel servizio edit. ",
		admin_icn_edit_powerpoint_category_description: "Questa categoria definisce i modelli disponibili per i documenti Microsoft PowerPoint nel servizio edit. ",

		icn_edit_add_template_dialog_title:"Aggiungi un modello ${0}",
		icn_edit_add_template_only_one_file_error: "È possibile selezionare solo un file.",
		icn_edit_add_template_file_type_error: "È necessario specificare un file modello ${0} valido.<br><br>Il documento selezionato ha un tipo MIME ${1}.<br><br>I tipi MIME validi sono: ${2}.",
		icn_edit_change_template_dialog_title: "Modifica il modello ${0}",
		icn_edit_action_in_new_menu_name:"Documento ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "con Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "con app del desktop",
		icn_edit_new_document_dialog_title: "Nuovo documento ${0}",
		icn_edit_new_document_dialog_intro: "Creare un nuovo documento ${0} ed aggiungerlo al repository. Il documento verrà creato con il modello servizio Edit.", 
		icn_edit_select_edit_service_template: "Selezionare un modello",
		icn_edit_edit_service_template: "Modello servizio Edit:",
		icn_edit_new_document_category_no_templates_message:"Non vi sono modelli in questa categoria. Rivolgersi all'amministratore per aggiungere modelli a questa categoria.",
		icn_edit_installer: "Programma di installazione di IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Impostazioni classe e ruolo",
		admin_repcfg_classes_and_roles_warning: "Per specificare classi e utenti o gruppi di utenti autorizzati a creare, modificare ed utilizzare i modelli o creare bozze dei documenti che funzionano con il servizio Office Online e Edit.",
		admin_repcfg_classes_and_roles_click_warning: "fare clic in questo punto.",
		/* Edit Service settings END */
		share_no_my_email_error: "Si è verificato un problema durante l'identificazione dell'indirizzo email richiesto per condividere il documento.",
		share_no_my_email_error_explanation: "È stato eseguito l'accesso con l'ID utente ${0}, ma l'ID utente non è associato ad un indirizzo email.",
		share_no_my_email_error_userResponse: "Provare ad eseguire nuovamente l'accesso oppure accedere utilizzando un ID utente differente. Se il problema persiste, notificarlo all'amministratore di sistema.",
		share_no_my_email_error_adminResponse: "L'ID utente ${0} non è associato ad un indirizzo email ed il desktop ${1} non consente agli utenti di modificare l'indirizzo email per i servizi Condivisione Box.<br><br>Provare una delle seguenti soluzioni:<br>Verificare che il plug-in di associazione email sia registrato.<br>Verificare che il file emailMappingPlugin.json contenga l'ID utente ${0} e l'indirizzo email dell'utente, quindi creare, configurare e registrare il plug-in di associazione email.<br>Se non si desidera utilizzare il plug-in di condivisione email o la directory degli indirizzi email FileNet P8, ma si desidera consentire agli utenti di immettere il proprio indirizzo email quando viene condiviso un documento, è possibile modificare le impostazioni del desktop per i servizi Condivisione Box in modo da consentire agli utenti di inviare il link da un altro indirizzo email.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "È condivisa una versione successiva di questo documento, per cui non è possibile condividere la versione selezionata di questo documento.",
		share_later_version_shared_error_explanation: "Non è possibile condividere una versione precedente di un documento precedentemente condiviso.",
		share_later_version_shared_error_userResponse: "Per inviare il link alla versione successiva del documento, è necessario prima selezionare la versione successiva, quindi utilizzare l'azione Condividi.<br><br>Per condividere la versione selezionata del documento, è necessario prima eliminare la condivisione per la versione successiva del documento.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nuovo messaggio",
		email_from: "Da:",
		email_to: "A:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Immettere un indirizzo email valido.",
		email_subject: "Oggetto:",
		email_message: "Messaggio:",
		email_message_placeholder: "Aggiungi un messaggio",
		email_attachments: "Allegati:",
		email_links: "Link:",
		email_send: "Invia",
		email_dont_send: "Non inviare",
		email_subject_reminder: "Promemoria oggetto",
		email_subject_reminder_confirm: "Si desidera inviare questo messaggio senza un oggetto?",
		email_missing_from_error: "Si è verificato un problema durante l'identificazione dell'indirizzo email Da richiesto per inviare l'email.",
		email_missing_from_error_explanation: "È stato eseguito l'accesso con l'ID utente ${0}, ma l'ID utente non è associato ad un indirizzo email.",
		email_missing_from_error_userResponse: "Provare ad eseguire nuovamente l'accesso oppure accedere utilizzando un ID utente differente. Se il problema persiste, notificarlo all'amministratore di sistema.",
		email_missing_from_error_adminResponse: "L'ID utente ${0} non è associato ad un indirizzo email, ed il desktop ${1} non consente agli utenti di modificare l'indirizzo email Da.<br><br>Provare una delle seguenti soluzioni:<br>Verificare che il plug-in di associazione email sia registrato.<br>Verificare che il file emailMappingPlugin.json contenga l'ID utente ${0} e l'indirizzo email dell'utente, quindi creare, configurare e registrare il plug-in di associazione email.<br>Se non si desidera utilizzare il plug-in di associazione email o la directory degli indirizzi email FileNet P8, ma si desidera consentire agli utenti di immettere il proprio indirizzo email quando viene inviata un'email, è possibile modificare le impostazioni email per i desktop in modo da consentire agli utenti di modificare l'indirizzo email Da.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Impossibile aprire il documento.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator non è in grado di connettersi al client di IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Installare ed avviare il client di IBM Content Navigator Edit sulla stazione di lavoro. Quindi provare ad aprire di nuovo il documento.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Impossibile aprire il documento.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator non è in grado di connettersi al client di IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Installare ed avviare il client di IBM Content Navigator Edit sulla stazione di lavoro. Quindi provare ad aprire di nuovo il documento.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator non è configurato correttamente per la condivisione dei documenti.",
		share_not_configured_error_explanation: "Prima di poter condividere i documenti è necessario che sia configurata correttamente la funzione di condivisione Box.",
		share_not_configured_error_userResponse: "Rivolgersi all'amministratore e richiedere che configuri la funzione di condivisione Box.",
		share_not_configured_error_adminResponse: "Prima di condividere i documenti devono essere configurati i seguenti elementi:<ul><li>Il servizio di gestione attività deve essere abilitato nelle impostazioni dello strumento di amministrazione.</li><li>L'ID di connessione del gestore attività deve essere configurato nel repository.</li><li>La condivisione deve essere abilitata nel reposiory.</li><li>Per la condivisione nel desktop deve essere selezionato un repository Box.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Le modifiche alla proprietà non sono state salvate per la nuova versione",
		checkin_cors_save_attributes_error_explanation: "La versione è stata creata, ma le modifiche alla proprietà non sono state salvate. Il documento può essere ancora sottoposto a check out.",
		checkin_cors_save_attributes_error_userResponse: "Sbloccare il documento ed aggiornare le proprietà utilizzando la voce del menu di scelta rapida Proprietà.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Le modifiche alla proprietà non sono state salvate per il nuovo documento.",
		add_cors_save_attributes_error_explanation: "Il documento è stato creato, ma le modifiche alla proprietà non sono state salvate.",
		add_cors_save_attributes_error_userResponse: "Aggiornare le proprietà utilizzando la voce del menu di scelta rapida Proprietà.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Impossibile aprire il documento.",		
		edit_document_using_edit_service_error_explanation: "Impossibile aprire il documento nel servizio Edit.",
		edit_document_using_edit_service_error_userResponse: "Richiedere all'amministratore di aggiornare l'Integrazione servizio Edit.<br><br> Se l'utente deve accedere a questo documento dal servizio Edit, passare alla pagina Integrazione Edit per il repository ed aggiornare l'Integrazione servizio Edit in modo da includere la classe nell'elenco delle classi da modificare per il supporto del servizio Edit.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Impossibile aprire il documento.",		
		edit_document_is_editing_by_oos_error_explanation: "Il documento è utilizzato dal servizio Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "È necessario salvare e chiudere il documento nel servizio Office Online prima di poterlo aprire nel servizio Edit.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Abilita caricamenti CORS (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Impostazioni email:",
		admin_email_settings_hover: "Specificare il tipo di servizio email che si desidera venga utilizzato dagli utenti. Quando viene abilitato il servizio email basato su HTML, è possibile consentire agli utenti di modificare il proprio indirizzo email Da. Se si desidera abilitare il servizio email basato su Java, è necessario disporre di un browser che supporti Java.",
		admin_email_use_service: "Utilizza il servizio email basato su HTML",
		admin_email_use_applet: "Utilizza il servizio email basato su Java",
		admin_email_can_modify_from: "Consenti agli utenti di modificare l'indirizzo email Da",
		admin_email_can_modify_from_hover: "Per impostazione predefinita, l'indirizzo email Da non può essere modificato e viene ottenuto da un'associazione di utenti ed indirizzi email che rappresentano gli account utente.<br><br>Selezionare questa opzione per consentire agli utenti di modificare il proprio indirizzo email quando viene inviata un'email; tuttavia, la validità dell'indirizzo email non viene verificata.",
		admin_email_use_from_as_sender: "Utilizza l'indirizzo email Da come mittente dell'email",
		admin_email_use_from_as_sender_hover: "Per impostazione predefinita, nell'email dell'utente viene utilizzato un indirizzo email Da valido. Tale indirizzo email è definito dalla sessione di posta CNMailSession sul server delle applicazioni. Selezionare questa opzione per specificare che nell'email deve essere utilizzato l'indirizzo email dell'utente.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nuove annotazioni",
		addAnnotationDlg_labelContents: "Contenuti:",
		addAnnotationDlg_labelAccess: "Accesso:",
		addAnnotationDlg_labelPublic: "Pubblico",
		addAnnotationDlg_labelPrivate: "Privato",
		addAnnotationDlg_labelPrivateGroup: "Privato per gruppo",
		addAnnotationDlg_labelGroup: "Gruppo",
		addAnnotationDlg_labelCopiable: "È possibile copiare questa annotazione su un altro server.",
		addAnnotationDlg_buttonLabel_save: "Salva con nome",

		/* Skip navigation */
		skipNavigation_title_main: "Passa a contenuto principale",
		skipNavigation_title_menu: "Passa ai pulsanti di navigazione",
		skipNavigation_label_main: "Passa a contenuto principale",
		skipNavigation_label_menu: "Passa ai pulsanti di navigazione",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gestisci spazi team",
		manage_teamspace_pane_instance_hdr: "Spazi team",
		manage_teamspace_pane_template_hdr: "Modelli",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Scorrere in avanti",
		scroll_back: "Scorrere all'indietro",

		breadcrumb_separator_open: "Apri nodo",
		breadcrumb_separator_close: "Chiudi nodo",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Non è stato selezionato alcun elemento.",

		/* eds */
		eds_url: "URL servizio dati esterno:",
		eds_request_timeout: "Timeout richiesta di assistenza (in secondi)",
		eds_is_required: "Non consente agli utenti di effettuare operazioni che modificano i valori delle proprietà quando l'EDS non è disponibile",

		/* eforms */
		eform_signing_pane_welcome: "Firma il modulo",
		eform_signing_button_label: "Firma",
		eform_signing_pane_delete: "Elimina la firma",
		eform_signing_button_label_delete: "Elimina",

		xtplugin_server_label: "URL del server IBM FileNet Workplace XT",
		xtplugin_server_hover: "Immettere l'URL del server in cui viene distribuito IBM FileNet Workplace XT, ad esempio, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL del server IBM eClient",
		ecplugin_server_hover: "Immettere l'URL del server in cui viene distribuito IBM eClient, ad esempio, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Le azioni su un numero elevato di elementi potrebbero richiedere molto tempo. Si desidera continuare?",
		large_number_actions_continue_button: "Continua",

		large_items_actions_confirmation_question: "Le azioni su gli elementi di grandi dimensioni potrebbero richiedere molto tempo. Si desidera continuare?",

		viewer_editproperties_title: "Conferma",
		viewer_editproperties_title_warning: "Avvertenza",
		viewer_editproperties_save: "Salva con nome",
		viewer_editproperties_next: "Avanti",
		viewer_editproperties_reset: "Reimposta",
		viewer_editproperties_reset_hover: "I dati non salvati verranno reimpostati sui valori salvati precedentemente",
		viewer_editproperties_saveandgetnext: "Salva e ottieni successivo",
		viewer_editproperties_saveandgetnext_hover: "Ottiene automaticamente il documento successivo dopo il salvataggio delle modifiche",
		viewer_editproperties_prompt_save_changes: "Sono state modificate le proprietà del seguente documento<br>${0}<br><br>Salvare le modifiche?",
		viewer_editproperties_prompt_discard_changes: "Sono state modificate le proprietà del seguente documento<br>${0}<br><br>Tuttavia, una o più delle proprietà ha un valore non valido, quindi le modifiche non possono essere salvate. È possibile correggere i valori non validi o cancellare le proprie modifiche.<br>Si desidera correggere i valori non validi mostrati nel riquadro delle proprietà?",
		viewer_comments_prompt_discard_changes: "Si sono modificati i commenti. Salvare le modifiche?",
		viewer_notelogs_prompt_discard_changes: "I notelog sono stati modificati. Salvare le modifiche?",
		social_collaborated_version: "Versione: ${0}",
		social_link_label: "Chi...",

		// social comments
		comments: "Commenti",
		comments_add_hint: "Premere Invio per aggiungere i propri commenti.",
		comments_hint: "Immettere i propri commenti.",
		comments_label: "Premere Invio o Tabulatore per salvare i propri commenti. Premere Esc per annullare.",
		comments_delete_confirmation: "Se desidera eliminare il commento selezionato?",
		comments_number: "Commenti: ${0}",
		comments_save_new: "Si sono modificati i commenti. Si desidera chiudere la finestra senza salvare le modifiche?",

		notelogs: "Notelog",
		notelogs_download: "Scarica",
		notelog_modify: "Salva modifiche",
		notelog_edit: "Modifica notelog",
		notelog_create_newVersion: "Crea una nuova versione del notelog",
		notelog_add_hint: "Immettere i commenti e premere Invio per aggiungere.",
		notelog_hint: "Premere tasto shift+invio per l'avanzamento riga",
		notelog_add_placeholder: "Premere Invio per aggiungere il commento al notelog.",
		notelog_save_new: "Si è modificato il notelog. Si desidera chiudere la finestra senza salvare le modifiche?",

		// P8 markings related
		cannot_remove_markings: "Non si dispone dell'autorizzazione per rimuovere i valori di contrassegno: {0}",

		// download count
		downloadcount: "Download: {0}",
		downloadcount_single: "1 download",
		downloadcount_multiple: "{0} download",
		downloadcount_none: "Nessuno lo ha ancora scaricato",

		// recommendations
		recommendations: "Piace: {0}",
		recommendations_recommend: "Piace",
		recommendations_unrecommend: "Non piace",
		recommendations_you: "Ti piace",
		recommendations_you_and_another: "Piace a te e ad 1 altre persona",
		recommendations_you_and_others: "Piace a te e ad altri {0}",
		recommendations_another: "Piace ad 1 persona",
		recommendations_others: "Piace a {0} persone",
		recommendations_none: "A nessuno piace",

		// tags
		tags: "Tag: ${0}",
		tags_delete: "Elimina ${0}",
		tags_none: "Non sono presenti tag da visualizzare",
		tags_add: "Aggiungi tag",
		tags_hint: "Premere Invio per aggiungere i tag",
		tags_hover_help: "Specificare un tag oppure un elenco di tag che è possibile utilizzate per cercare documenti con lo stesso nome. È possibile utilizzare la virgola (,), il punto e virgola (;), oppure uno spazio per separare i tag.",
		tags_hover_help_box: "Specificare un tag oppure un elenco separato da virgole di tag che è possibile utilizzate per cercare documenti con lo stesso nome.",
		tags_no_access: "L'utente non dispone delle autorizzazioni appropriate per aggiungere tag.",

		//task scheduler pane
		taskPane_tooltip: "Apri vista Attività asincrone",
		taskPane_tree: "Struttura ad albero del riquadro attività",
		taskPane_allTasks: "Tutte le attività",
		taskPane_scheduledTasks: "Attività pianificate",
		taskPane_recurringTasks: "Attività ricorrenti",
		taskPane_inProgressTasks: "Attività in corso",
		taskPane_completedTasks: "Attività completate",
		taskPane_failedTasks: "Attività non riuscite",
		taskPane_disabledTasks: "Attività disabilitate",
		taskPane_statusScheduled: "Pianificato",
		taskPane_statusInProgress: "In corso",
		taskPane_statusCompleted: "Completato",
		taskPane_statusFailed: "Non riuscito",
		taskPane_statusPaused: "In pausa",
		taskPane_noItemSelected: "Nessun elemento selezionato",
		taskSchedulerPane_scheduleInformation: "Informazioni di pianificazione",
		taskSchedulerPane_loginInformation: "Informazioni di accesso",
		taskSchedulerPane_startImmediately: "Avvia immediatamente",
		taskSchedulerPane_recurrence: "Ricorrenza",
		taskSchedulerPane_interval: "Intervallo",
		taskSchedulerPane_scheduleReport: "Pianifica prospetto",
		taskSchedulerPane_nameHoverHelp: "Immettere il nome dell'attività.",
		taskSchedulerPane_descriptionHoverHelp: "Immettere una descrizione per l'attività. La descrizione dovrebbe aiutare a distinguere le attività.",
		taskSchedulerPane_startTimeHoverHelp: "Specificare quando si desidera che venga eseguita l'attività. Per eseguire ora l'attività, selezionare Avvia immediatamente.",
		taskSchedulerPane_recurrenceHoverHelp: "È possibile pianificare l'attività da eseguire su base ricorrente.",
		taskSchedulerPane_endTimeHoverHelp: "Specificare quando si desidera che venga arrestata l'esecuzione dell'attività. L'attività viene eseguita dall'ora di inizio programmata all'ora di termine programmata.",
		taskSchedulerPane_usernameHoverHelp: "Per le attività ricorrenti, è necessario immettere un nome utente per consentire al servizio di effettuare l'autenticazione quando l'attività viene eseguita.",
		taskSchedulerPane_passwordHoverHelp: "Per le attività ricorrenti, è necessario immettere la password dell'utente specificato per consentire al servizio di effettuare l'autenticazione quando l'attività viene eseguita.",
		taskSchedulerPane_notification: "Notifica",
		taskSchedulerPane_emailAddress: "Indirizzo e-mail",
		taskSchedulerPane_emailAddressHoverHelp: "Immettere l'indirizzo e-mail a cui si desidera ricevere le notifiche relative allo stato dell'attività.",
		taskSchedulerPane_intervalHoverHelp: "Specificare il periodo di tempo durante il quale l'attività ricorrente verrà eseguita. È possibile impostare l'intervallo in ore, giorni, settimane, o mesi.",
		taskSchedulerPane_scheduledStartTime: "Ora iniziale programmata",
		taskSchedulerPane_startTime: "Ora di avvio",
		taskSchedulerPane_title: "Pianifica",
		taskSchedulerPane_runNow: "Esegui ora",
		taskSchedulerPane_runOnce: "Esegui solo una volta",
		taskSchedulerPane_runAtSchedule: "Esegui secondo la pianificazione",
		taskSchedulerPane_repeats: "Ripetizioni",
		taskSchedulerPane_repeatsEvery: "Ripeti ogni",
		taskSchedulerPane_hourly: "Ogni ora",
		taskSchedulerPane_daily: "Quotidianamente",
		taskSchedulerPane_weekly: "Settimanalmente",
		taskSchedulerPane_monthly: "Mensilmente",
		taskSchedulerPane_yearly: "Annualmente",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "L",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "Me",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Data iniziale",
		taskSchedulerPane_after: "Dopo",
		taskSchedulerPane_ending: "Data finale",
		taskSchedulerPane_times: "volte",
		taskSchedulerPane_days: "giorno/i",
		taskSchedulerPane_hours: "ore nel giorno",
		taskSchedulerPane_interval: "Intervallo",
		taskSchedulerPane_endingDays: "Finisce tra (in giorni)",
		taskSchedulerPane_never: "Mai",
		taskSchedulerPane_categorization: "Categorizzazione",
		taskSchedulerPane_scheduleTask: "Pianifica attività",
		taskInformationPane_details: "Dettagli",
		taskInformationPane_errors: "Errori",
		taskInformationPane_taskInstances: "Istanze dell'attività",
		taskInformationPane_audits: "Controlli",
		taskInformationPane_results: "Risultati",
		asyncTasks: "Attività asincrone",

		//entry template pane
		search_all_entry_templates: "Cerca in tutti i modelli di immissione.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Visualizza il sito completo",
		mobilesite: "Visualizza il sito mobile",
		profile: "Gestisci profilo",
		office_template: "Modello Office:",
		select_office_template: "Selezionare un modello Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "I documenti selezionati non possono essere aperti nel visualizzatore con l'azione Unisci e Suddividi.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Il visualizzatore configurato per i documenti PDF e TIFF non supporta l'azione Unisci e Suddividi.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Rivolgersi all'amministratore per configurare un visualizzatore per i documenti PDF e TIFF che supporti l'azione Unisci e Suddividi come ad esempio il visualizzatore Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "I documenti PDF selezionati non possono essere aperti nel visualizzatore con l'azione Unisci e Suddividi.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Il visualizzatore configurato per i documenti PDF non supporta l'azione Unisci e Suddividi.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Rivolgersi all'amministratore per configurare un visualizzatore per i documenti PDF che supporti l'azione Unisci e Suddividi come ad esempio il visualizzatore Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "I documenti TIFF selezionati non possono essere aperti nel visualizzatore con l'azione Unisci e Suddividi.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Il visualizzatore configurato per i documenti TIFF non supporta l'azione Unisci e Suddividi.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Rivolgersi all'amministratore per configurare un visualizzatore per i documenti TIFF che supporti l'azione Unisci e Suddividi come ad esempio il visualizzatore Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "I documenti selezionati non possono essere aperti nel visualizzatore con l'azione Unisci e Suddividi.",
		document_builder_unsupported_documents_error_explanation: "L'azione Unisci e Suddividi funziona solo con i documenti PDF e TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Selezionare i documenti supportati e ritentare.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Alcuni documenti selezionati non possono essere aperti nel visualizzatore con l'azione Unisci e Suddividi.",
		document_builder_some_unsupported_documents_error_explanation: "L'azione Unisci e Suddividi funziona solo con i documenti PDF e TIFF aperti dallo stesso repository",
		document_builder_some_unsupported_documents_error_userResponse: "I documenti supportati verranno aperti nel visualizzatore.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Si è verificato un errore durante l'esecuzione del check in nel contenuto modificato.",
		document_builder_checkin_failed_explanation: "Il visualizzatore ha ricevuto una risposta di errore durante la verifica del contenuto modificato.",
		document_builder_checkin_failed_userResponse: "Richiedere all'amministratore di sistema di riesaminare i file di log del server delle applicazioni.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Impossibile aprire il documento.",
		no_viewer_to_view_error_explanation: "L'amministratore di sistema ha bloccato la visualizzazione di questo documento. Se è necessario accedere a questo documento, è possibile scaricarlo.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Impossibile creare il contenuto.",
		document_build_failed_userResponse: "Chiedere all'amministratore di esaminare i file di log del visualizzatore.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Impossibile aprire il documento in modalità Unisci e suddividi.",
		document_builder_open_failed_userResponse: "Chiedere all'amministratore di esaminare i file di log del visualizzatore.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Il sistema non può passare alla modalità Unisci e suddividi.",
		document_builder_switch_failed_userResponse: "Chiedere all'amministratore di esaminare i file di log del visualizzatore.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documenti",
		print_service_page_setup_tab_title: "Imposta pagina",
		print_service_OD_print_tab_title: "Opzioni delle stampante",
		print_service_status_merging: "Unione dei documenti...",
		print_service_status_converting: "Conversione dei documenti...",
		print_service_status_formatting: "Formattazione del documento per la stampa...",
		admin_print_service_maximum_number_to_print: "Numero massimo di documenti consentiti per la stampa:",
		admin_print_service_maximum_size_to_print: "Quantità massima di dati consentiti per la stampa (in MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Specificare il numero massimo di documenti che gli utenti possono stampare ogni volta. Il numero massimo predefinito è 50. Se non si desidera limitare la stampa in base al numero di documenti, impostare questo limite a 0. ",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Limitazione:</b> questa impostazione non è supportata in IBM Content Manager OnDemand.<br/><br/>Specificare la quantità massima di dati che può essere stampata utilizzando il servizio di stampa IBM Daeja ViewONE.<br /><br />La dimensione totale di ciascun documento selezionato non potrà superare questa quantità.<br/><br/>Il limite predefinito è 200 MB. L'impostazione del limite al di sopra di 200 MB potrebbe influire sulle prestazioni del sistema. Se non si desidera limitare la stampa in base alla dimensione del documento, impostare questo limite a 0.",
		// error printing
		print_service_error_printing: "Si è verificato un errore durante la stampa.",
		print_service_error_printing_userResponse: "Chiedere all'amministratore di esaminare i file di log del servizio di stampa.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "I documenti selezionati sono troppo grandi per essere stampati.",
		print_service_max_content_error_explanation: "I documenti selezionati superano il limite di ${0} MB di dati.",
		print_service_max_content_error_userResponse: "Selezionare un numero minore di documenti o selezionare documenti più piccoli ed eseguire di nuovo la stampa. È inoltre possibile rivolgersi all'amministratore di sistema per incrementare la dimensione totale massima degli elementi che è possibile stampare contemporaneamente da questo desktop.",
		print_service_max_content_error_0: "dimensione_massima_degli_elementi",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Impossibile stampare gli elementi.",
		print_service_max_number_selected_error_explanation: "È possibile stampare fino a ${0} elementi per volta. Si sta provando a stampare ${1} elementi.",
		print_service_max_number_selected_error_userResponse: "Selezionare un numero minore di elementi e tentare di stampare di nuovo gli elementi. È inoltre possibile rivolgersi all'amministratore di sistema per incrementare il numero massimo di elementi che è possibile stampare contemporaneamente da questo desktop.",
		print_service_max_number_selected_error_0: "numero_massimo_di_elementi",
		print_service_max_number_selected_error_1: "numero_di_elementi",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


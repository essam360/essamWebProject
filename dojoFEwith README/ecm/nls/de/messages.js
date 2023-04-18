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
		welcome_user: "Herzlich willkommen, ",
		about: "Informationen zu",
		all: "Alle",
		help: "Hilfe",
		user_session: "Benutzersitzung",
		user_session_for: "Benutzersitzung für ${0}",
		user_session_for_with_container: "Benutzersitzung für ${0} (${1})",
		tools: "Extras",
		login: "Anmelden",
		logout: "Abmelden",
		search: "Suchen",
		saved_searches: "Gespeicherte Suchen",
		content_analytics: "Inhalt analysieren",
		reset: "Zurücksetzen",
		reset_hover: "Nicht gespeicherte Daten in allen Registerkarten werden auf die zuvor gespeicherten Werte zurückgesetzt.",
		reset_default: "Alles löschen",
		reset_default_hover: "Löscht den Inhalt des Felds 'Aktuelle Bezeichnung' in allen Registerkarten.",
		locale: "Ländereinstellung:",
		up: "Nach oben",
		down: "Nach unten",
		restore: "Wiederherstellen",
		maximize: "Maximieren",
		values_label: "Werte",
		value_label: "Wert:",
		path_label: "Pfad:",
		new_label: "Neu:",
		back_label: "Zurück",
		clear: "Löschen",
		set: "Festlegen...",
		browse: "Durchsuchen",
		work: "Arbeit",
		connect: "Verbinden",
		documents: "Dokumente:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM und das IBM Logo sind eingetragene Marken der IBM Corporation in den USA und/oder anderen Ländern. Java und alle auf Java basierenden Marken und Logos sind Marken oder eingetragene Marken der Oracle Corporation und/oder ihrer verbundenen Unternehmen. Die integrierte Outside In Technology von Oracle unterliegt einer eingeschränkten Lizenz und darf nur mit dieser Anwendung verwendet werden. Dieses Programm unterliegt den Bedingungen der Lizenzvereinbarung, die mit dem Programm ausgeliefert wird.  Diese Lizenzvereinbarung kann in einem Programmverzeichnisordner oder in einer Bibliothek namens \"License\" oder \"Non_IBM_License\" gespeichert sein oder in gedruckter Form bereitgestellt werden. Lesen Sie diese Lizenzvereinbarung bitte sorgfältig durch, bevor Sie das Programm verwenden. Wenn Sie das Programm verwenden, stimmen Sie diesen Bedingungen zu. ",
		edit: "Bearbeiten",
		cancel: "Abbrechen",
		close: "Schließen",
		close_all: "Alle Registerkarten schließen",
		close_others: "Andere Registerkarten schließen",
		ok: "OK",
		yes: "Ja",
		no: "Nein",
		open: "Öffnen",
		refresh: "Aktualisieren",
		refresh_cabinets: "Alle Aktenschränke aktualisieren",
		delete_text: "Löschen",
		export_config: "Konfiguration exportieren",
		description: "Beschreibung",
		true_label: "Wahr",
		false_label: "Falsch",
		error: "Fehler",
		error_reference_hover: "Unter www.ibm.com finden Sie weitere Informationen zu diesem Fehler.",
		url_label: "URL",
		default_label: "Standard",
		ibm_label: "IBM",
		light_label: "Hell",
		dark_label: "Dunkel",
		save: "Speichern",
		saveAs: "Speichern unter...",
		save_and_close: "Speichern und schließen",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ohne",
		Name: "Name",
		"${NAME}": "Name",
		mime_type: "MIME-Typ",
		mime_type_contains_label: "MIME-Typ enthält",
		mime_type_header: "MIME-Typ",
		mime_type_icon: "Symbol für MIME-Typ",
		casesearch: "Fall",
		item: "Element",
		no_mime_type: "Dieses Element enthält keinen Inhalt.",
		items_selected: "${0} Elemente ausgewählt.",
		requestor: "Angefordert von",
		scheduledStartTime: "Geplante Startzeit",
		isRecurring: "Tritt wiederholt auf",
		weeks: "Wochen",
		days: "Tage",
		hours: "Stunden",
		endTime: "Endzeit",
		username: "Benutzername",
		password: "Kennwort",
		serverURL: "Server-URL",
		enable: "Aktivieren",
		disable: "Inaktivieren",
		finish: "Fertigstellen",
		previous: "Zurück",
		next: "Weiter",
		schedule: "Planen",
		removeFromThisList: "Aus dieser Liste entfernen",
		status: "Status",
		scheduledEndTime: "Geplante Endzeit",
		type: "Typ",
		mode: "Modus",
		startTime: "Startzeit",
		createdBy: "Erstellt von",
		nextScheduledTime: "Nächster geplanter Zeitpunkt",
		id: "ID",
		duration: "Dauer",
		repeatCycle: "Häufigkeit",
		taskTypeName: "Tasktyp",
		to: "bis",
		filter: "Filter:",
		error_message: "Fehlernachricht",

        file_type: "Dokumenttyp",
        word_template_name: "Name der Word-Vorlage",
        excel_template_name: "Name der Excel-Vorlage",
        powerpoint_template_name: "Name der PPT-Schablone",
        template_description: "Beschreibung der Vorlage",
        action_add_template: "Hinzufügen",
        action_change_template: "Bearbeiten",      
        action_edit_template_properties: "Eigenschaften",
        add_presentation_template: "Präsentationsvorlage hinzufügen",
    	add_spreadsheet_template: "Arbeitsblattvorlage hinzufügen",
    	add_doc_template: "Dokumentvorlage hinzufügen",    	
    	file_type_doc_hover: "Sie müssen eine gültige Vorlagendatei für Textverarbeitungsdokumente angeben.<br><br>Gültige MIME-Typen: ${0}",
    	file_type_doc_error: "Sie müssen eine gültige Vorlagendatei für Textverarbeitungsdokumente angeben.<br><br>Ausgewählter Dokument-MIME-Typ: ${0}<br><br>Gültige MIME-Typen: ${1}",
    	file_type_presentation_hover: "Sie müssen eine gültige Vorlagendatei für Präsentationen angeben.<br><br>Gültige MIME-Typen: ${0}",
    	file_type_presentation_error: "Sie müssen eine gültige Vorlagendatei für Präsentationen angeben.<br><br>Ausgewählter Dokument-MIME-Typ: ${0}<br><br>Gültige MIME-Typen: ${1}",
    	file_type_spreadsheet_hover: "Sie müssen eine gültige Vorlagendatei für die Tabellenkalkulation angeben.<br><br>Gültige MIME-Typen: ${0}",
    	file_type_spreadsheet_error: "Sie müssen eine gültige Vorlagendatei für die Tabellenkalkulation angeben.<br><br>Ausgewählter Dokument-MIME-Typ: ${0}<br><br>Gültige MIME-Typen: ${1}",
    	office_online_only_one_template_error: "Sie können nur eine Datei auswählen.",
    	change_presentation_template: "Präsentationsvorlage bearbeiten",
    	change_spreadsheet_template: "Arbeitsblattvorlage bearbeiten",
    	change_doc_template: "Dokumentvorlage bearbeiten",
    	change_button: "Bearbeiten",
	    new_document_dialog_doc_title: "Neues Dokument",
	    new_document_dialog_presentation_title: "Neue Präsentation",
	    new_document_dialog_spreadsheet_title: "Neues Arbeitsblatt",
	    new_document_dialog_title_label: "Titel:",
	    new_document_dialog_title_hover: "Geben Sie einen Titel für dieses Dokument ein.",
	    new_document_dialog_title_missing_message: "Sie müssen einen Titel angeben.",
	    office_online_save_before_adding_templates_title: "Änderungen am Repository speichern",
	    office_online_save_before_adding_templates_error: "Sie können Office-Vorlagen erst hinzufügen, nachdem Sie die vorgenommenen Änderungen am Repository gespeichert haben. Klicken Sie auf <b>Speichern und schließen</b> und öffnen Sie das Repository dann erneut, um Office-Vorlagen hinzuzufügen.",
	    copy_to_OOS_dialog_doc_title: "Neues Dokument",
	    office_online_checkin_cancelcheckout_message: "Dieses Dokument wird in Microsoft Office Online bearbeitet. Sie können das Dokument weder einchecken noch das Auschecken abbrechen, solange das Dokument in Microsoft Office Online geöffnet ist.",
	    new_document_classification: "Klassifizierung:",
	    new_document_classification_help: "Setzt die Klasse, die Eigenschaften und den übergeordneten Ordner, sofern vorhanden, des Quellendokuments zurück. Die Erfassungsvorlage, falls vorhanden, des Quellendokuments wird beim Hinzufügen eines Dokuments über eine Erfassungsvorlage automatisch ausgewählt. Die Eigenschaften des Quellendokuments werden als Standardwerte verwendet, der in der Erfassungsvorlage angegebene Ordner und die angegebene Klasse werden jedoch beibehalten.",
		new_document_classification_use_source_document: "Quellendokument verwenden:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Symbol für ${0}-Typ",
		repository_name_and_type: "Name und Typ für ${0}",
		select_class_label: "${0} auswählen",

		// View toggle buttons
		detail_view_button_tooltip: "Detailansicht",
		detail_view_button: "Details",
		magazine_view_button_tooltip: "Magazinansicht",
		magazine_view_button: "Magazin",
		filmstrip_view_button_tooltip: "Filmstreifenansicht",
		filmstrip_view_button: "Filmstreifen",

		magazine_view_show: "In Magazinansicht anzeigen",
		detail_view_show: "In Detailansicht anzeigen",

		total_count_item: "Element",
		total_count_items: "Elemente",
		total_count_more_items: "Mehr als ${0} Elemente",

		extension_changed: "Die Erweiterung der ausgewählten Datei entspricht nicht der Erweiterung der Originaldatei.  Wählen Sie eine andere Datei aus.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Der ausgewählte Viewer unterstützt nicht alle Dateitypen. Wenn Sie diese Viewerzuordnung speichern, können Probleme beim Anzeigen von Dokumenten auftreten. Es wird empfohlen, dass Sie einen Viewer auswählen, der alle Dateitypen unterstützt, wenn die Option für alle Dateitypen ausgewählt ist.<br><br><b>Tipp:</b> Folgende Viewer unterstützen alle Dateitypen:<ul><li>Applet-Viewer</li><li>AJAX-Viewer</li><li>HTML-Konvertierung</li><li>PDF-Konvertierung</li><li>Web-Browser</li></ul>",
		file_type_any: "Alle Dateitypen",
		file_type_any_hover: "Wählen Sie diese Option aus, wenn Sie mit dem ausgewählten Viewer alle Dokumente unabhängig vom Dateityp anzeigen wollen. Diese Option wird für folgende Viewer unterstützt:<br><br><ul><li>Applet-Viewer</li><li>AJAX-Viewer</li><li>HTML-Konvertierung</li><li>PDF-Konvertierung</li><li>Web-Browser</li></ul><br><br><b>Achtung:</b> Wenn Sie bestimmte Viewer häufig verwenden wollen, sollten alle von Ihnen erstellten Zuordnungen, die diese Option verwenden, an das Ende Ihrer Viewerzuordnungsliste verschoben werden. ",
		file_type_input: "Neuer Dateityp:",

		mime_type_input: "Neuer MIME-Type:",
		mime_type_input_invalid: "Der neue MIME-Typ darf keines der folgenden Zeichen enthalten: ,",
		mime_type_available: "Verfügbare MIME-Typen",
		mime_type_selected: "Ausgewählte MIME-Typen",
		file_type_input: "Neuer Dateityp:",
		file_type_input_invalid: "Der neue Dateityp darf keines der folgenden Zeichen enthalten: ,",
		file_type_available: "Verfügbare Dateitypen",
		file_type_selected: "Ausgewählte Dateitypen",
		file_type_header: "Dateityp",
		viewer: "Viewer:",
		viewer_viewer: "Viewer",
		viewer_view: "Ansicht",
		viewer_preview: "Vorschau",
		viewer_merge_and_split: "Zusammenführen und teilen",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Nur Vorschau",
		preview_only_label: "(Vorschau)",
		preview_only_hover: "Diese Viewerzuordnung wird nur verwendet, wenn der Benutzer auf <b>Vorschau</b> klickt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Das Durchsuchen wird von diesem Repository nicht unterstützt. Wählen Sie ein anderes Repository aus.",

		repository_community_teamspace_message: "Ein anderes Repository ist bereits als Bibliotheksrepository der Community definiert. Wenn Sie das vorhandene Repository weiter als Bibliotheksrepository der Community verwenden möchten, wählen Sie <b>Nein</b> aus, bevor Sie die Änderungen speichern. So wird verhindert, dass das vorhandene Repository durch dieses Repository ersetzt wird.",

		favorites_empty: "Sie haben noch keine Favoriten.",
		syncItems_empty: "Sie haben noch keine synchronisierten Dateien.",

		root_folder_id: "Stammordner-ID",
		unified_searches: "Repository-übergreifende Suchen:",
		max_results: "Anzahl Ergebnisse:",
		direct_retrieve_enabled: "Direkter Abruf:",
		itemTypesToDisplay: "Anzuzeigende Elementtypen:",
		allItemTypes: "Alle Elementtypen",
		include_attr_group_name: "Attributgruppenbeschreibungen in angezeigten Attributnamen:",
		admin_repcfg_include_attr_group_name_hover: "Standardmäßig ist die Beschreibung der Attributgruppe in den Namen der Attributgruppenattribute enthalten. Hierdurch können Benutzer beim Arbeiten mit Attributen leichter erkennen, zu welcher Attributgruppe ein Attributgruppenattribut gehört.<br>Den Benutzern wird zum Beispiel der folgende Name für ein Attributgruppenattribut angezeigt: Dokumenteinstellung.Dokumenttyp.<br><br>Wenn Sie diese Option inaktivieren, wird für den Namen des Attributgruppenattributs nur die Attributbeschreibung verwendet.<br>Den Benutzern wird zum Beispiel dieser Name angezeigt: Dokumenttyp.<br><br>Ohne die Attributgruppenbeschreibung können die Benutzer möglicherweise nicht erkennen, ob es sich bei 'Dokumenttyp' um ein einfaches Attribut oder um ein Attributgruppenattribut handelt.",
		documentItemTypesOnly: "Nur Elementtypen von Dokumentmodellen",
		object_store: "Symbolischer Name für Objektspeicher:",
		object_store_display_name: "Anzeigename für Objektspeicher:",
		teamspaceUpgradeMsg: "Ihre Teamarbeitsbereiche werden aktualisiert, wenn Sie Ihre Repository-Konfiguration speichern. Bei einer großen Anzahl von Teamarbeitsbereichen kann dies mehrere Minuten dauern.",
		synchUpgradeMsg: "Das Synchronisierungsmodul für dieses Repository wird aktualisiert, wenn Sie Ihre Repository-Konfiguration speichern.",
		protocol: "Protokoll:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS-Repository-ID:",
		cmis_url: "Dokument-URL für CMIS-AtomPub-Bindeservice:",
		trace_level: "Tracestufe",
		trace_dir: "Traceverzeichnis",
		temp_dir: "Temporäres Verzeichnis",
		show_document_location: "Dokumentposition anzeigen",
		max_folders: "Maximale Anzahl Ordner",
		afp_conversion: "AFP-Konvertierung",
		line_conversion: "Zeilendatenkonvertierung",
		max_hits: "Maximale Anzahl Treffer",
		folder_search_expresssion: "Suchausdruck für Ordner",
		max_item_types: "Maximale Anzahl Elementtypen",
		max_worklists: "Maximale Anzahl Vorgangslisten",
		update_storage_collection: "Speicherobjektgruppe aktualisieren",
		include_mime_types_in_search_results: "MIME-Typen in Suchergebnisse einschließen",
		object_type: "Objekttyp",
		object_type_document: "Dokumente",
		object_type_folder: "Ordner",
		file_label: "Akte:",
		plugin_jarfile_path_label: "JAR-Dateipfad:",
		plugin_classfolder_path_label: "Klassendateipfad:",
		plugin_classname_label: "Klassenname:",
		plugin_id_label: "Plug-in-ID:",
		class_label: "Klasse",
		configuration: "Konfiguration",
		connect_repository: "Verbinden...",
		server_type: "Servertyp",
		timeout_in_seconds: "Zeitlimit (in Sekunden):",
		default_search_template: "Standardsuche",
		search_filtered_properties: "Suchbare Eigenschaften",
		property_contains_label: "Eigenschaft enthält",
		class_contains_label: "Klasse enthält",
		search_filtered_operators: "Suchoperatoren",
		default_search_results: "Suchergebnisse",
		data_type: "Datentyp",
		status_bar: "Statusleiste",
		operators_for: "Operatoren für:",
		currentUser: "Aktueller Benutzer",
		nameContains: "Name enthält",
		searchFor: "Suchen nach",
		server_autentication: "Serverauthentifizierung (OAuth 2.0 mit JWT)",
		standard_authentication: "Standardauthentifizierung (Dreibeiniges OAuth 2.0)",
		developer_authentication: "Entwicklerauthentifizierung",
		enterprise_id: "Enterprise-ID:",
		public_key_id: "ID für öffentlichen Schlüssel:",
		private_key_path: "Pfad der Datei mit privatem Schlüssel:",
		server_user_email: "Serverbenutzer-E-Mail",

		filter_builder_tooltip: "Filter definieren",

		// Launch bar
		launchbar_home: "Home öffnen",
		launchbar_favorites: "Favoriten öffnen",
		launchbar_browse: "Ansicht 'Durchsuchen' öffnen",
		launchbar_browse_popup: "Popup-Liste 'Durchsuchen' öffnen",
		launchbar_search: "Ansicht 'Suche' öffnen",
		launchbar_search_popup: "Popup-Liste 'Suche' öffnen",
		launchbar_teamspaces: "Ansicht 'Teamarbeitsbereiche' öffnen",
		launchbar_teamspaces_popup: "Popup-Liste 'Teamarbeitsbereiche' öffnen",
		launchbar_work: "Ansicht 'Arbeit' öffnen",
		launchbar_work_popup: "Popup-Liste 'Arbeit' öffnen",
		launchbar_entry_templates: "Erfassungsvorlagenansicht öffnen",
		launchbar_entry_templates_popup: "Popup-Liste mit Erfassungsvorlagen öffnen",
		launchbar_admin: "Ansicht 'Verwaltung' öffnen",

		admin_sync_server: "Sync Services",
		admin_settings: "Einstellungen",
		admin_interface_text: "Bezeichnungen",
		admin_interface_text_desktop: "Desktop:",
		admin_desktops: "Desktops",
		admin_repositories: "Repositorys",
		admin_mobile: "Mobile Einheit",
		admin_menus: "Menüs",
		admin_reason_codes: "Schwärzungsgründe",
		admin_plugins: "Plug-ins",
		admin_plugins_state_enabled: "Plug-in ist aktiviert",
		admin_plugins_state_disabled: "Plug-in ist inaktiviert",
		admin_plugins_version: "Version:",
		admin_plugins_version_heading: "Version",
		admin_plugins_icon: "Plug-in-Symbol",
		admin_viewer_mapping_icon: "Symbol für Viewerzuordnung",
		admin_viewer_defs: "Viewerzuordnungen",
		admin_viewer_dialog_title: "Zuordnung",
		admin_viewer_dialog_new_title: "Neue Zuordnung",
		admin_viewer_dialog_instructions: "Eine Zuordnung gibt an, welcher Viewer für die Dateien in einem Repository verwendet werden soll. Sie können mehrere Zuordnungen erstellen, um verschiedene Viewer für verschiedene Typen von Dateien anzugeben. Sie können entweder einen MIME-Typ oder eine Dateierweiterung zum Definieren einer Zuordnung verwenden. Zuordnungen mit Dateierweiterungen werden den Dokumentnamen zugeordnet. Eine Zuordnung, bei der der Dateityp auf gif gesetzt ist, wird für Dokumentnamen ausgeführt, die mit der Erweiterung .gif enden",
		admin_desktop_viewer_defs: "Viewerzuordnung:",
		admin_desktop_viewer_defs_hover: "Die Viewerzuordnung gibt an, welcher Viewer zum Öffnen verschiedener Dokumenttypen im Repository verwendet wird.<br><br>Sie können im Abschnitt <b>Viewerzuordnungen</b> des Verwaltungstools neue Viewerzuordnungen erstellen.",
		admin_desktops_used: "In Desktops verwendet",
		admin_desktop_additional_settings: "Weitere Einstellungen:",
		admin_default_desktop: "Als Standarddesktop festlegen",
		admin_default_desktop_header: "Standarddesktop",
		admin_layout_tab_title: "Layout",
		admin_desktop_icon: "Desktopsymbol",

		// Themes
		admin_themes: "Motive",
		admin_theme_list_instructions: "Sie können ein Motiv erstellen, damit Sie den Web-Client einfacher für Ihre Organisation anpassen können. Sie können mehrere Motive erstellen, wenn Sie unterschiedliche Farben, Schriftarten oder Logos für unterschiedliche Desktops in Ihrer Umgebung verwenden müssen.<br><br>Nach Erstellen eines Motivs können Sie es auf einen Desktop anwenden, indem Sie es auf der Registerkarte <b>Darstellung</b> des Desktops konfigurieren.",
		admin_theme_instructions: "Erstellen Sie ein Motiv, um die im Web-Client angezeigten Farben und Schriftarten zu steuern. Weiterhin können Sie über ein Motiv das Logo, den Anwendungsnamen und den Copyrighttext ändern, die auf der Anmeldeseite und im Banner angezeigt werden.",
		admin_theme_heading: "Motiv: <b>${0}</b>",
		admin_new_theme: "Neues Motiv",
		admin_text_theme: "Motiv",
		admin_delete_confirmation_themes: "Wollen Sie die ausgewählten Motive löschen?\n${0} Motive sind ausgewählt.",
		admin_theme_color: "Farbe",
		admin_theme_text: "Text",
		admin_theme_solid: "Einfarbig",
		admin_theme_gradient: "Verlauf",
		admin_theme_box: "Box",
		admin_theme_color_label: "Farbe ${0}:",
		admin_theme_name_invalid: "Der Motivname darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Die Motiv-ID muss eindeutig sein. Sie können sie nach der Speicherung des Motivs nicht mehr ändern.<br><br>Die ID darf nur alphanumerische Zeichen enthalten.",
		admin_theme_name_hover: "Der Name darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatisch",
		admin_theme_logo_url_hover: "Geben Sie die URL für die Logodatei an. Befindet sich das Logo auf demselben Webanwendungsserver wie der Web-Client, geben Sie eine relative URL ein. Beispiel: /MeineAnpassungen/Bannerlogo.png<br><br>Es wird empfohlen, für das Logo einen transparenten Hintergrund zu verwenden.",
		admin_theme_color_palette_title_heading: "Farbpalette",
		admin_theme_color_palette_help_text: "Erstellen Sie die Farbpalette für Ihr Motiv. Verwenden Sie dazu den Hexadezimalwert oder den Farbwähler. Sie können beliebig viele Farben hinzufügen.",
		admin_theme_color_add_button_label: "Farbe hinzufügen",
		admin_theme_color_remove_button_label: "Farbe entfernen",
		admin_theme_global_title_heading: "Anwendungsweite Elemente",
		admin_theme_global_font: "Schriftartengruppe:",
		admin_theme_global_font_hover: "Wählen Sie die Schriftart zur Verwendung im Web-Client aus. Die Schriftarten werden der Reihenfolge nach aufgelistet. Die nächste Schriftart in der Liste wird nur verwendet, wenn die vorherige Schriftart nicht auf dem Clientsystem installiert ist.",
		admin_theme_global_framework_color_label: "Frameworkfarbe:",
		admin_theme_global_framework_color_hover: "Wählen Sie die für die folgenden Elemente zu verwendende Farbe aus:<ul><li>Titelleisten in Dialogfeldern</li><li>Die Hervorhebungsfarbe oben in der ausgewählten Registerkarte</li><li>Die Symbole der Inhaltslistenansicht (Detailansicht, Magazinansicht, Filmstreifenansicht)</li></ul><br>Diese Farbe wird nicht für die Trennlinien zwischen Abschnitten des Web-Clients verwendet. Wenn Sie die Farbe der Trennlinien ändern wollen, müssen Sie ein Plug-in erstellen, das eine angepasste CSS-Datei bereitstellt.",
		admin_theme_color_global_toolbar: "Farbe für globale Symbolleiste:",
		admin_theme_color_global_toolbar_hover: "Wenn Sie die globale Symbolleiste in den Web-Client einbeziehen, wählen Sie die Farbe der Symbolleiste aus.<br><br><b>Tipp:</b> Die Symbolleiste wird im Banner oben im Web-Client angezeigt, daher sollte die Farbe der Symbolleiste zur Farbe des Banners passen.",
		admin_theme_global_selected_color: "Farbe für ausgewählte Elemente:",
		admin_theme_global_selected_color_hover: "Wählen Sie die Farbe aus, die verwendet werden soll, wenn Elemente in der Baumstruktur zum Blättern, der Suchbaumstruktur und der Inhaltsliste ausgewählt sind.<br><br>Die Kurzinfofarbe (die Farbe, die beim Bewegen über ein Element angezeigt wird) wird von dieser Farbe abgeleitet.",
		admin_theme_global_link_color: "Farbe für Links:",
		admin_theme_global_link_color_hover: "Wählen Sie die für alle anklickbaren URLs im Web-Client zu verwendende Farbe aus. Diese Farbe wird beispielsweise in den Links 'Weitere Informationen' verwendet, die überall im Web-Client angezeigt werden.",
		admin_theme_login_title_heading: "Elemente der Anmeldeseite",
		admin_theme_page_background_label: "Hintergrundfarbe der Anmeldeseite:",
		admin_theme_login_page_background_hover: "Wählen Sie die Farbe aus, die im Hintergrund der Anmeldeseite angezeigt werden soll.",
		admin_theme_login_pane_background_label: "Hintergrundfarbe des Anmeldefensters:",
		admin_theme_login_pane_background_hover: "Wählen Sie die Farbe aus, die im Hintergrund des Anmeldefensters angezeigt werden soll. Diese Farbe sollte zur Hintergrundfarbe der Anmeldeseite passen.",
		admin_theme_text_color: "Textfarbe:",
		admin_theme_login_pane_text_color_hover: "Wählen Sie die Farbe aus, die für den Text des Anmeldefensters verwendet werden soll. Diese Farbe wird für den Begrüßungstext und für Feldbeschriftungen verwendet. Diese Farbe sollte auf der Hintergrundfarbe des Anmeldefensters lesbar sein.",
		admin_theme_copyright_text: "Copyrighttext:",
		admin_theme_copyright_text_hover: "Geben Sie an, ob Copyrighttext auf der Anmeldeseite angezeigt werden soll.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Kein Copyrighttext",
		admin_theme_banner_title_heading: "Bannerelemente",
		admin_theme_text_icons_color: "Text- und Symbolfarbe:",
		admin_theme_icon_color_label: "Symbolfarbe:",
		admin_theme_shadow_label: "Schattierung:",
		admin_theme_banner_text_icons_hover: "Wählen Sie die Farbe aus, die für den Text und die Symbole im Banner verwendet werden soll. Diese Farbe sollte auf der Hintergrundfarbe des Banners lesbar sein.",
		admin_theme_banner_product_name_label: "Produktname:",
		admin_theme_banner_product_name_hover: "Wenn Sie einen Desktop erstellen, können Sie einen angepassten Namen angeben, der für die Anwendung angezeigt werden soll. Geben Sie keinen solchen Namen an, wird IBM Content Navigator als Produktname verwendet. Geben Sie an, ob der im Desktop definierte Anwendungsname oder ob ein Bild anstelle eines Namens verwendet werden soll.",
		admin_theme_banner_product_name_desktop_defined_label: "Namen aus Desktop verwenden",
		admin_theme_banner_product_name_image: "Benutzerdefiniertes Logo (URL) verwenden",
		admin_theme_background_color_label: "Hintergrundfarbe:",
		admin_theme_style_label: "Stil:",
		admin_theme_banner_color_hover: "Wählen Sie die Farbe aus, die für das Banner oben in der Anwendung verwendet werden soll.<br><br><b>Tipp:</b> Stellen Sie sicher, dass die Farbe des Texts im Banner auf der Hintergrundfarbe des Banners lesbar ist.",
		admin_theme_buttons_title_heading: "Schaltflächen",
		admin_theme_navigation_title_heading: "Navigationselemente",
		admin_theme_navigation_icon_selected_label: "Ausgewählte Symbolfarbe:",
		admin_theme_navigation_background_hover: "Wählen Sie die Farbe aus, die für den Hintergrund der Featurenavigationsleiste verwendet werden soll.",
		admin_theme_navigation_icon_color_hover: "Wählen Sie die Farbe aus, die für die Symbole der Featurenavigationsleiste verwendet werden soll. Bei Verwendung des Standardlayouts auf einem Desktop sollte diese Farbe einen Kontrast zum Hintergrund des Dropdown-Menüs für das Feature bilden. Bei Verwendung des klassischen Layouts sollte diese Farbe einen Kontrast zum Hintergrund der Featurenavigationsleiste bilden. ",
		admin_theme_navigation_icon_selected_hover: "Wählen Sie die Farbe aus, die für das ausgewählte Feature der Featurenavigationsleiste verwendet werden soll. Die Farbe sollte zur Farbe der Symbole und zur Hintergrundfarbe der Featurenavigationsleiste passen.<br><br>Bei Verwendung des klassischen Layouts auf einem Desktop wird diese Farbe als Kurzinfofarbe in der Featurenavigationsleiste verwendet. ",
		admin_theme_button_background_color_hover: "Wählen Sie die Farbe für den Schaltflächenhintergrund aus.",
		admin_theme_button_style_hover: "Wählen Sie einen Schaltflächenstil aus.",
		admin_theme_button_text_icon_color_hover: "Wählen Sie die Farbe aus, die für Text und Symbole auf Schaltflächen verwendet werden soll.",
		admin_theme_no_logo_label: "Kein Logo",
		admin_theme_custom_logo_label: "Benutzerdefiniertes Logo (URL)",
		admin_theme_banner_type: "Bannerfüllstil:",
		admin_theme_banner_type_hover: "Geben Sie an, ob das Banner mit einer durchgängigen Farbe oder einem Farbverlauf dargestellt werden soll. Wenn Sie ein Banner mit Farbverlauf angeben, ist die als Bannerfarbe angegebene Farbe die dunkelste Farbe im Banner.<br><br><b>Tipp:</b> Stellen Sie sicher, dass die Farbe des Texts im Banner auf der Hintergrundfarbe des Banners lesbar ist.",
		admin_theme_icon: "Motivsymbol",
		admin_theme_buttons_and_links_title_heading: "Schaltflächen, Felder und Links",
		admin_theme_button_style_label: "Schaltflächenstil:",
		admin_theme_theme_style_label: "Motivstil:",
		admin_theme_theme_style_hover: "Wählen Sie den Stil aus, auf dem das Motiv basieren soll. Beim Erstellen oder Bearbeiten eines Motivs können Sie den Stil jederzeit ändern. Wenn Sie zu einem anderen Stil wechseln, werden die Motiveinstellungen auf die Standardwerte zurückgesetzt.",
		admin_theme_accent_color_label: "Akzentfarbe:",
		admin_theme_accent_color_hover: "Wählen Sie die Farbe aus, die für die Leiste oben im Dialog und für das Ladedrehfeld verwendet werden soll.",
		admin_theme_global_toolbar_text_color_label: "Textfarbe für globale Symbolleiste:",
		admin_theme_global_toolbar_text_color_hover: "Wenn Sie die globale Symbolleiste in den Web-Client einbeziehen, wählen Sie die Farbe für den Text in der Symbolleiste aus.",
		admin_theme_banner_text_color_hover: "Wählen Sie die Farbe aus, die für den Text im Banner verwendet werden soll.",
		admin_theme_banner_icon_color_hover: "Wählen Sie die Farbe aus, die für die Symbole im Banner verwendet werden soll.",
		admin_theme_button_color_label: "Farbe:",
		admin_theme_button_color_hover: "Wählen Sie die für die folgenden Elemente zu verwendende Farbe aus:<ul><li>Titelleisten in Dialogfeldern</li><li>Die Hervorhebungsfarbe oben in der ausgewählten Registerkarte</li><li>Die Symbole der Inhaltslistenansicht (Detailansicht, Magazinansicht, Filmstreifenansicht)</li><li>Schaltflächen, Felder und Links</li></ul>Aus dieser Farbe wird die Farbe abgeleitet, die verwendet wird, wenn ein Benutzer den Mauszeiger über eine Schaltfläche bewegt. Diese Farbe wird nicht für die Trennlinien zwischen Abschnitten des Web-Clients verwendet. Wenn Sie die Farbe der Trennlinien ändern wollen, müssen Sie ein Plug-in erstellen, das eine angepasste CSS-Datei bereitstellt.",
		admin_theme_theme_style_col_header: "Motivstil",

		admin_syncserver_consistency_checker: "Konsistenzprüfprogramm:",
		admin_syncserver_consistency_checker_hover: "Führen Sie das Konsistenzprüfprogramm aus, um sicherzustellen, dass die Sync Services-Datenbank die aktuellen Informationen zum Status der einzelnen Elemente auf dem Server hat. Beispiel: Führen Sie das Konsistenzprüfprogramm nach einem Ausfall der Sync Services-Datenbank aus, um Informationen zu den während des Ausfalls im Repository aktualisierten Dokumenten zu erhalten.",
		admin_syncserver_consistency_checker_button: "Konsistenzprüfprogramm ausführen",
		admin_syncserver_consistency_checker_started: "Gestartet:",
		admin_syncserver_consistency_checker_ended: "Beendet:",
		admin_syncserver_consistency_checker_duration: "Dauer:",
		admin_syncserver_consistency_checker_items_processed: "Verarbeitete Synchronisierungselemente:",
		admin_syncserver_consistency_checker_items_processed_success: "Erfolgreich verarbeitete Synchronisierungselemente:",
		admin_syncserver_consistency_checker_items_discovered: "Neu erkannte Repository-Elemente:",
		admin_syncserver_consistency_checker_change_updates: "Aktualisierungen gesamt:",
		admin_syncserver_consistency_checker_state: "Status:",
		admin_syncserver_consistency_checker_state_done: "Fertig",
		admin_syncserver_consistency_checker_state_running: "Aktiv",
		admin_syncserver_consistency_checker_user: "Übergeben von:",
		admin_syncserver_consistency_checker_scheduled: "Geplant:",

		admin_syncserver_dbcleanup: "Datenbankbereinigung",
		admin_syncserver_dbcleanup_hover: "Führen Sie das Tool zur Datenbankbereinigung aus, um nicht verwendete Einheiten sowie nicht länger mit der Datenbank synchronisierte Elemente zu entfernen.",
		admin_syncserver_dbcleanup_button: "Datenbankbereinigung",
		admin_syncserver_dbcleanup_state_done: "Fertig",
		admin_syncserver_dbcleanup_state_running: "Aktiv",
		admin_syncserver_dbcleanup_started: "Gestartet:",
		admin_syncserver_dbcleanup_ended: "Beendet:",
		admin_syncserver_dbcleanup_state: "Status:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Gelöschte Repositorys:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Gelöschte synchronisierte Elemente",
		admin_syncserver_dbcleanup_devicedeleted_count: "Gelöschte Einheiten:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Abgelaufene Einheiten:",

		admin_syncserver_publicSyncUrl: "Öffentliche URL für Sync Services:",
		admin_syncserver_publicSyncUrl_hover: "Geben Sie die URL an, über die Repositorys mit den Sync Services von IBM Content Navigator kommunizieren können. Das Standardformat der URL ist http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Sync-Client-Einstellungen:",
		admin_syncserver_managed_hover: "Diese Einstellungen im IBM Content Navigator Sync-Client können vom Benutzer nicht geändert werden.",
		admin_syncserver_managed_subfolder: "Zu synchronisierende Ordnerebenen",
		admin_syncserver_managed_subfolder_hover: "Wenn ein Benutzer einen Ordner synchronisiert, geben Sie die maximale Anzahl Ordner an, die synchronisiert werden sollen. Gibt ein Benutzer zum Beispiel drei Ordnerebenen an, werden der vom Benutzer synchronisierte Ordner sowie zwei Unterordnerebenen synchronisiert.<br><br>Stellen Sie sicher, dass die Umgebung so skaliert ist, dass sie den durch diese Synchronisierungseinstellung verursachten Umfang des Datenverkehrs unterstützt.",
		admin_syncserver_managed_subfolder_all: "Alle Unterordner",
		admin_syncserver_managed_subfolder_none: "Keine Unterordner",
		admin_syncserver_managed_subfolder_no_more: "Begrenzte Ebenen",
		admin_syncserver_managed_subfolder_levels: "Ordner",
		admin_syncserver_managed_schedule: "Synchronisierungszeitplan",
		admin_syncserver_managed_schedule_hover: "Stellen Sie sicher, dass die Umgebung so skaliert ist, dass sie den durch diesen Synchronisierungszeitplan verursachten Umfang des Datenverkehrs unterstützt.<br><br>Das maximale Intervall liegt bei 24 Stunden oder 1440 Minuten.<br><br>Benutzer können den Synchronisierungszeitplan überschreiben, indem Sie auf <b>Jetzt synchronisieren</b> klicken.",
		admin_syncserver_managed_schedule_manual: "Manuell synchronisieren",
		admin_syncserver_managed_schedule_continuous: "Kontinuierlich synchronisieren",
		admin_syncserver_managed_schedule_every: "In angegebenen Intervallen synchronisieren",
		admin_syncserver_managed_schedule_minutes: "Minuten",
		admin_syncserver_managed_schedule_hours: "Stunden",

		// redaction codes
		admin_new_reason_code: "Neuer Schwärzungsgrund",		
		admin_reason_code_name_invalid: "Der Name für den Schwärzungsgrund darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Die Beschreibung darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Die Beschreibung darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Der Name darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Beschreibung:",
		admin_reason_code_applications_hover: "Liste der Datacap-Anwendungen, die diesen Schwärzungsgrund referenzieren.",
		admin_reason_code_applications: "Datacap-Anwendungen",
		admin_delete_confirmation_reason_codes: "Sollen die ausgewählten Schwärzungsgründe gelöscht werden?",
		admin_delete_confirmation_reason_code: "Soll der ausgewählte Schwärzungsgrund gelöscht werden?",
		admin_reason_code_heading: "Schwärzungsgrund: <b>${0}</b>",
		admin_reason_code_list_instructions: "Schwärzungsgründe geben an, warum sensible Daten unkenntlich gemacht werden. Jeder Grund bezeichnet einen Typ sensibler Daten, die für Endbenutzer nicht zu erkennen sind.",
		admin_reason_code_instructions: "Sie können für jeden Typ sensibler Daten einen Schwärzungsgrund angeben. Anschließend können Sie diesen Grund in einer Schwärzungsrichtlinie verwenden, um zu definieren, wem diese Daten angezeigt werden und wer Schwärzungen erstellen oder ändern darf.",
		admin_reason_code_applications_label: "Datacap-Anwendungen",
		admin_reason_code_repositories: "Repositorys",
		admin_reason_code_repositories_label: "Repositorys",
		admin_reason_code_repositories_hover: "Die Liste der ICN-Repositorys, die diesen Schwärzungsgrund referenzieren.",
		admin_reason_code_repositories_default_value: "Nicht festgelegt",
		admin_reason_code_description_label: "Beschreibung",
		admin_reason_code_applications_default_value: "Nicht festgelegt",
		admin_redaction_reasons: "Schwärzungsgründe",
		admin_redactions: "Rollenbasierte Schwärzungen",
		admin_redactions_policies_roles: "Richtlinien und Rollen",
		admin_reasons: "Gründe",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Die ID kann nicht bearbeitet werden. Sie kann in die Zwischenablage kopiert werden.",
		// Role based administration
		admin_rba: "Rollenbasierte Desktopverwaltung",
		admin_rba_mobile_access_enabled: "Dieser Desktop ist für den mobilen Zugriff aktiviert.",
		admin_rba_mobile_access_disabled: "Dieser Desktop ist nicht für den mobilen Zugriff aktiviert.",
		admin_rba_confirm_delete_multiple: "Sollen die ausgewählten Verwaltungsrollen gelöscht werden?",
		admin_rba_confirm_delete_single: "Soll die ausgewählte Verwaltungsrolle gelöscht werden?",
		admin_rba_delete_multi_role_desktop: "Mindestens eine der von Ihnen ausgewählten Rollen ist einem Desktop zugewiesen. Sie müssen Rollen aus den Desktops entfernen, bevor Sie sie löschen können.",
		admin_rba_delete_single_role_desktop: "Die von Ihnen ausgewählte Rolle ist dem Desktop ${0} zugewiesen. Sie müssen die Rolle aus dem Desktop entfernen, bevor Sie sie löschen können.",
		admin_desktop: "Desktop",
		admin_rba_instructions: "Sie können Desktopverwaltungsrollen erstellen und verwalten, die den Desktopadministratoren Zugriffsrechte zuordnen. ",
		admin_rba_not_used: "${0} wird in keinem Desktop verwendet.",
		admin_rba_desktops: "<b>${0} wird in den folgenden Desktops verwendet:</b>",
		admin_rba_new_role: "Neue Rolle",
		admin_rba_name_invalid: "Der Name der Verwaltungsrolle darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Die Beschreibung darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Die Beschreibung darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Der Name darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Beschreibung:</b> ${0}",
		admin_rba_membership: "Zugehörigkeit",
		admin_rba_general_priv: "Allgemein",
		admin_rba_appearance_priv: "Aussehen",
		admin_rba_desktop_config_priv: "Desktopkonfiguration",
		admin_rba_app_name_priv: "Anwendungsname",
		admin_rba_theme_priv: "Motiv",
		admin_rba_viewer_map_priv: "Viewerzuordnung",
		admin_rba_merge_split_priv: "Zusammenführen und teilen",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Menüs",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Symbolleisten",
		admin_rba_ctx_menus_priv: "Kontextmenüs",
		admin_rba_office_ribbon_priv: "Symbolleistenbefehle von MS Office",
		admin_rba_office_menues_priv: "Kontextmenüs von MS Office",
		admin_rba_addl_settings_priv: "Weitere Einstellungen",
		admin_rba_mobile_priv: "Mobile Einheit",
		admin_rba_add_doc_dlg_priv: "Dialog 'Dokument hinzufügen'",
		admin_rba_doc_mgmt_priv: "Dokumentmanagement",
		admin_rba_def_redaction_priv: "Standardoption für Schwärzung",
		admin_rba_add_photos_priv: "Fotos aus Kamera und Fotoarchiv hinzufügen",
		admin_rba_time_stamp_priv: "Zeitmarke",
		admin_rba_add_docs_folders_priv: "Dokumente hinzufügen und Ordner im Repository erstellen",
		admin_rba_open_docs_priv: "Dokumente in anderen Anwendungen öffnen",
		admin_rba_office_config_priv: "Office-Konfiguration",
		admin_rba_tab_label_priv: "IBM ECM-Registerkartenbeschriftung",
		admin_rba_feature_sel_priv: "Featureauswahl",
		admin_rba_general_config_priv: "Allgemeine Konfiguration",
		admin_rba_favorites_priv: "Favoriten",
		admin_rba_add_options_priv: "Hinzufügungsoptionen in Bearbeitungsgruppe",
		admin_rba_browse_priv: "Durchsuchen",
		admin_rba_outlook_int_priv: "Outlook-Integration",
		admin_rba_search_priv: "Suchen",
		admin_rba_layout_priv: "Layout",
		admin_rba_case_priv: "Fall",
		admin_rba_desktop_feat_priv: "Desktop-Features",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Angezeigte Features",
		admin_rba_branding_priv: "Branding",
		admin_rba_home_priv: "Home",
		admin_rba_main_color_priv: "Hauptfarbe",
		admin_rba_sec_color_priv: "Sekundärfarbe",
		admin_rba_teamspaces_priv: "Teamarbeitsbereiche",
		admin_rba_rbr_priv: "Rollenbasierte Schwärzung",
		admin_rba_et_mgr_priv: "Erfassungsvorlagenmanager",
		admin_rba_policies_roles_priv: "Richtlinien und Rollen verwalten",
		admin_rba_work_priv: "Arbeit",
		admin_rba_reasons_priv: "Ursachencodes",
		admin_rba_tasks_priv: "Asynchrone Tasks",
		admin_rba_auth_priv: "Authentifizierung",
		admin_rba_all_privs: "Alle Berechtigungen",
		admin_rba_some_privs: "Einige Berechtigungen",
		admin_rba_no_privs: "Keine Berechtigungen",
		admin_add_users_groups_priv: "Benutzer und Gruppen hinzufügen",
		admin_url_features_priv: "URL-Features verwalten",
		admin_plugin_features_priv: "Plug-in-Features verwalten",
		admin_addl_components_priv: "Zusätzliche Komponenten",
		admin_global_toolbar_priv: "Globale Symbolleiste",
		admin_status_bar_priv: "Statusleiste",
		admin_refresh_message: "Sie müssen die Browseranzeige aktualisieren, damit die aktualisierten Daten verwendet werden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Sie müssen die Browseranzeige aktualisieren, damit der aktualisierte Standarddesktop verwendet wird.",
		admin_desktop_refresh_message: "Sie müssen die Browseranzeige aktualisieren, damit der aktualisierte Desktop verwendet wird.",
		admin_action_open: "Öffnen",
		admin_action_edit: "Bearbeiten",
		admin_action_copy: "Kopieren",
		admin_action_delete: "Löschen",
		admin_action_copy: "Kopieren",
		admin_action_new: "Neu erstellen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Diese ID wird bereits verwendet. Sie müssen eine eindeutige ID angeben.",

		admin_searchable_properties_for: "Suchbare Eigenschaften für:",
		admin_repository_new: "Neues Repository",
		admin_desktop_new: "Neuer Desktop",
		admin_desktop_file_documents: "Benutzer müssen neue Dokumente und Ordner in einem Ordner speichern",
		admin_desktop_file_documents_hover: "Wählen Sie diese Option aus, wenn Benutzer einen Ordner auswählen müssen sollen, wenn sie dem Repository Elemente hinzufügen. Wird diese Option nicht ausgewählt, können die Benutzer Dokumente (IBM FileNet P8) oder Dokumente und Ordner (IBM Content Manager) hinzufügen, ohne sie in einem Ordner abzulegen.",
		admin_desktop_show_security_tab: "Sicherheitseinstellungen beim Hinzufügen und Einchecken anzeigen",
		admin_desktop_show_security_hover: "<b>Nur IBM FileNet P8-Benutzer.</b>  Wählen Sie diese Option aus, wenn Sie es Benutzern ermöglichen wollen, die Sicherheit von Dokumenten und Ordnern beim Hinzufügen oder Einchecken von Elementen in diesem Desktop zu bearbeiten.",
		admin_desktop_configure_security_inheritance: "Benutzern erlauben, die Vererbung von Zugriffsberechtigungen zu konfigurieren",
		admin_desktop_configure_security_inheritance_hover: "<b>Nur IBM FileNet P8-Benutzer.</b>  Wählen Sie diese Option aus, wenn Sie Benutzern erlauben wollen, den Zugriff auf Elemente in einem Ordner anzupassen, indem sie die Vererbung von Zugriffsberechtigungen von Ordnern steuern. Wenn Sie diese Option auswählen, können Benutzer angeben, ob Benutzer oder Gruppen die Sicherheit von folgenden Elementen übernehmen können:<ul><li>Einem Ordner</li><li>Einem Ordner und der ersten Ebene von Unterordnern</li><li>Einem Ordner und allen Unterordnern</li></ul>",
		admin_desktop_appearance: "Aussehen",
		admin_desktop_appearance_instruction: "Sie können das Aussehen des Desktops anpassen, indem Sie die zugehörige Anmeldeseite und das zugehörige Banner ändern.",
		admin_desktop_layout: "Layout:",
		admin_desktop_layout_hover: "Das Layout gibt an, welche Features im Web-Client angezeigt werden können und wie der Inhalt des Web-Clients angeordnet ist.<br><br><b>Tipp:</b> Sie können benutzerdefinierte Layouts durch Erstellen von Plug-ins definieren. Sie müssen das Plug-in im Verwaltungstool registrieren, bevor Sie ein benutzerdefiniertes Layout auswählen können.",
		admin_desktop_layout_default: "Standard",
		admin_desktop_layout_custom: "Benutzerdefiniert",
		admin_desktop_enable_workflow_email: "Diesen Desktop für E-Mail-Benachrichtigung für FileNet P8-Workflows aktivieren",
		admin_desktop_enable_workflow_email_hover: "Nur FileNet P8-Benutzer. Wählen Sie diese Option aus, wenn Sie Benutzern die Möglichkeit zum Öffnen des Web-Clients über die URLs geben wollen, die in den von Process Engine generierten E-Mail-Benachrichtigungen enthalten sind.<br /><br />Wenn Sie diese Option für keinen Desktop aktivieren, können sich Benutzer nicht über die URLs in den Benachrichtigungen beim Web-Client anmelden.<br /><br />Wenn Sie diese Option auf mehreren Desktops aktivieren und mehrere Desktops die Kriterien erfüllen, die in der URL der Benachrichtigung angegeben sind, verwendet der Web-Client den ersten Desktop, der die Kriterien erfüllt. ",
		admin_desktop_prevent_create_new_search: "Verhindern, dass Benutzer Suchen erstellen",
		admin_desktop_prevent_create_new_search_hover: "Durch diese Option werden Benutzer auf die Verwendung vorhandener Suchen beschränkt und daran gehindert, offene Suchen zu erstellen, die möglicherweise nicht optimiert sind.</br></br>Diese Einstellung hat keine Auswirkungen auf Teamarbeitsbereiche. Das Recht zum Erstellen von Suchen in einem Teamarbeitsbereich wird durch die Rolle gesteuert, die ein Benutzer für den jeweiligen Teamarbeitsbereich hat.",
		admin_desktop_prevent_create_new_unified_search: "Verhindern, dass Benutzer Repository-übergreifende Suchen erstellen",
		admin_desktop_prevent_create_new_unified_search_hover: "Durch diese Option werden Benutzer auf die Verwendung vorhandener Repository-übergreifender Suchen beschränkt und daran gehindert, offene Repository-übergreifende Suchen zu erstellen, die möglicherweise nicht optimiert sind.",
		admin_desktop_hide_entry_template_not_found_warning: "Die Warnung ausblenden, die angezeigt wird, wenn die entsprechende Erfassungsvorlage nicht gefunden wird",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Wählen Sie diese Option aus, wenn die Warnung ausgeblendet werden soll, die angezeigt wird, wenn Elementeigenschaften bearbeitet werden und die entsprechende Erfassungsvorlage für das Element nicht gefunden wird.",
		admin_desktop_show_class_role_security_selection: "Benutzern erlauben, rollenbasierte Sicherheit in Erfassungsvorlagen zu konfigurieren",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Nur IBM FileNet P8-Benutzer.</b> Wählen Sie diese Option aus, wenn Sie Benutzern erlauben wollen, Erfassungsvorlagen für die Verwendung von rollenbasierter Sicherheit zu konfigurieren, wenn Sicherheit für Dokumente oder Ordner mithilfe von Erfassungsvorlagen eingerichtet wird. Wenn Sie diese Option auswählen, können Bearbeiter von Erfassungsvorlagen angeben, ob Rollensicherheitsobjekte auf eine Erfassungsvorlagendefinition angewendet werden. ",
		admin_desktop_show_primary_multi_part: "Nur das primäre Dokument in Viewer öffnen",
		admin_desktop_show_primary_multi_part_hover: "<b>Nur IBM FileNet P8-Benutzer.</b> Wählen Sie diese Option aus, wenn nur die primäre Dokumentdatei im Viewer geöffnet werden soll. Dokumenten können mehrere Dateien zugeordnet sein. Bei Auswahl dieser Option wird nur die primäre Datei geöffnet, die dem Dokument zugeordnet ist.",
		admin_desktop_redaction_save_mode: "Standardoption für Schwärzung:",
		admin_desktop_redaction_save_mode_hover: "Wählen Sie den Standardspeichermodus für Neubearbeitung des ViewONE Virtual-Viewers aus:</br>* Immer den Benutzer fragen: Hiermit wird das Dialogfeld beim Aufrufen des Neubearbeitungsmodus angezeigt, um die Benutzer zu fragen, ob die Neubearbeitung als neue Version eingecheckt, ein neues Dokument erstellt oder Inhalt heruntergeladen werden soll.</br>* Als neue Version einchecken: Hiermit wird der neu bearbeitete Inhalt immer wieder als neue Version des vorhandenen Dokuments gespeichert.</br>* Als komplett neues Dokument speichern: Hiermit wird der neu bearbeitete Inhalt immer wieder als komplett neues Dokument gespeichert.</br>* Herunterladen und auf dem Client speichern: Hiermit wird der neu bearbeitete Inhalt auf dem Client-System gespeichert.",
		admin_desktop_redaction_save_mode_user_select: "Immer den Benutzer fragen",
		admin_desktop_redaction_save_mode_new_version: "Als neue Version einchecken",
		admin_desktop_redaction_save_mode_new_document: "Als komplett neues Dokument speichern",
		admin_desktop_redaction_save_mode_local_content: "Herunterladen und auf dem Client speichern",

		admin_desktop_document_add_mode: "Dialog für das Hinzufügen von Dokumenten:",
		admin_desktop_document_add_mode_hover: "Geben Sie den Hinzufügedialog an, der verwendet werden soll, um von IBM Content Navigator erstellte Dokumente hinzuzufügen:<ul><li>Neues permanent geschwärztes Dokument</li><li>Neues zusammengeführtes und aufgeteiltes Dokument</li><li>Neues Microsoft Office-Dokument</li><li>Neues Edit Service-Dokument</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Dokument hinzufügen",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Dokument über Erfassungsvorlage hinzufügen",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Zusammenführen und teilen:",
		admin_desktop_merge_and_split_enable_hover: "Geben Sie an, ob Benutzer, die auf diesen Desktop zugreifen, die Möglichkeit erhalten sollen, Dokumente mithilfe eines unterstützten Viewers zusammenzuführen und zu teilen.",

		admin_desktop_merge_and_split_show_checkin: "Benutzer auffordern, Eigenschaftswerte bereitzustellen, wenn sie Änderungen eines Dokuments einchecken",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Wenn Sie diese Option auswählen, wird der Eincheckdialog angezeigt, sobald Benutzer im Modus 'Zusammenführen und teilen' an einem Dokument vorgenommene Änderungen einchecken.",

		admin_desktop_available_categories: "Verfügbare Features",
		admin_desktop_selected_categories: "Ausgewählte Features",

		admin_layout_banner_title: "Banner- und Anmeldeseite",
		admin_layout_title: "Layout",

		admin_desktop_application_name: "Anwendungsname:",
		admin_desktop_application_name_hover: "Geben Sie den Anwendungsnamen an, der im Banner angezeigt werden soll.<br><br>Tipp: Definieren Sie den Anwendungsnamen für andere Sprachen auf der Registerkarte 'Bezeichnungen / Desktopbezeichnungen'.",
		admin_desktop_theme: "Motiv:",
		admin_desktop_theme_hover: "Geben Sie an, ob das IBM Content Navigator-Standardmotiv oder ein angepasstes Motiv für diesen Desktop verwendet werden soll. Zur Verwendung eines angepassten Motivs müssen Sie ein Motiv im Abschnitt <b>Motive</b> des Verwaltungstools erstellen.",
		admin_desktop_login_logo: "Logo der Anmeldeseite:",
		admin_desktop_login_logo_hover: "Wenn Sie das Logo ändern wollen, das auf der Anmeldeseite angezeigt wird, können Sie die URL für eine Logodatei angeben. Es empfiehlt sich jedoch, ein angepasstes Motiv zum Ändern des Logos zu verwenden.",
		admin_desktop_login_logo_url_hover: "Geben Sie die URL für die Logodatei an. Befindet sich das Logo auf demselben Webanwendungsserver wie der Web-Client, geben Sie eine relative URL ein. Beispiel: /MeineAnpassungen/Anmeldelogo.png<br><br>Das Logo sollte maximal 200 Pixel breit und 150 Pixel hoch sein.<br><br>Es wird empfohlen, für das Logo einen transparenten Hintergrund zu verwenden.",
		admin_desktop_banner_logo: "Bannerlogo:",
		admin_desktop_banner_logo_hover: "Wenn Sie das Logo ändern wollen, das auf dem Banner angezeigt wird, können Sie die URL für eine Logodatei angeben. Es empfiehlt sich jedoch, ein angepasstes Motiv zum Ändern des Logos zu verwenden.",
		admin_desktop_banner_logo_url_hover: "Geben Sie die URL für die Logodatei an. Befindet sich das Logo auf demselben Webanwendungsserver wie der Web-Client, geben Sie eine relative URL ein. Beispiel: /MeineAnpassungen/Bannerlogo.png<br><br>Das Logo sollte maximal 72 Pixel breit und 36 Pixel hoch sein.<br><br>Es wird empfohlen, für das Logo einen transparenten Hintergrund zu verwenden.",
		admin_desktop_banner_background_color: "Hintergrundfarbe des Banners",
		admin_desktop_banner_background_color_hover: "Wenn Sie die Hintergrundfarbe des Banners ändern wollen, können Sie eine benutzerdefinierte Farbe angeben. Es empfiehlt sich jedoch, ein angepasstes Motiv zum Ändern der Bannerfarbe zu verwenden.",
		admin_desktop_banner_background_color_custom_hover: "Geben Sie die Farbe des Anwendungsbanners als Hexadezimalfarbe an.",
		admin_desktop_banner_application_name_color: "Farbe für Anwendungsnamentext:",
		admin_desktop_banner_application_name_color_hover: "Wenn Sie die die Farbe des Anwendungsnamens ändern wollen, können Sie eine benutzerdefinierte Farbe angeben. Es empfiehlt sich jedoch, ein angepasstes Motiv zum Ändern der Bannerfarbe zu verwenden.",
		admin_desktop_banner_application_name_color_custom_hover: "Geben Sie die Farbe des Anwendungsnamens als Hexadezimalfarbe an.",
		admin_desktop_banner_menu_color: "Farbe des Bannersymbols:",
		admin_desktop_banner_menu_color_hover: "Wenn Sie die Hintergrundfarbe des Banners ändern, müssen Sie möglicherweise das Farbschema der Symbole im Banner ändern, um diese besser sichtbar zu machen. Geben Sie an, ob die helle oder dunkle Version der Bannersymbole angezeigt werden soll.<br><br>Es empfiehlt sich jedoch, ein angepasstes Motiv zum Ändern der Symbolfarbe zu verwenden.",
		admin_desktop_login_page_content: "Inhalt der Anmeldeseite:",
		admin_desktop_login_page_content_hover: "Wenn Sie auf der Anmeldeseite weitere Informationen anzeigen wollen, beispielsweise Ankündigungen von Systemausfällen oder Informationen dazu, wo Benutzer Hilfe zu Benutzernamen und Kennwörtern erhalten können, können Sie die URL des Inhalts angeben, der angezeigt werden soll.",
		admin_desktop_login_page_content_url_hover: "Geben Sie die URL für den Inhalt der Anmeldeseite an. Befindet sich der Inhalt auf demselben Webanwendungsserver wie der Web-Client, geben Sie eine relative URL ein. Beispiel: /MeineAnpassungen/Anmeldehinweise.html",
		admin_desktop_password_rules: "Kennwortregeln:",
		admin_desktop_password_rules_hover: "Wenn Sie Benutzern Richtlinien zum Erstellen von Kennwörtern bereitstellen wollen, beispielsweise Informationen zu nicht zulässigen Zeichen oder zur Mindestanzahl Zeichen, können Sie die URL einer Seite angeben, die Ihre Kennwortregeln enthält.",
		admin_desktop_password_rules_url_hover: "Geben Sie die URL des Inhalts für die Kennwortregeln ein. Befindet sich der Inhalt auf demselben Webanwendungsserver wie der Web-Client, geben Sie eine relative URL ein. Beispiel: /MeineAnpassungen/kennwort.html",
		admin_desktop_help_url: "URL der Endbenutzerhilfe:",
		admin_desktop_help_url_hover: "Sie können die Hilfe verwenden, die mit IBM Content Navigator geliefert wird, oder Sie können Benutzer mithilfe einer der folgenden Aktionen zu einem angepassten Hilfesystem umleiten:<br><br><ul><li>Zu einem angepassten Hilfesystem leiten</li><li>Der mit IBM Content Navigator implementierten Instanz des IBM Knowledge Centers Hilfe hinzufügen.</li></ul>",
		admin_desktop_help_url_url_hover: "Geben Sie die URL Ihres angepassten Hilfesystems ein. IBM Content Navigator hängt 'index.jsp?content=/com.ibm.usingeuc.doc/' und einen Dateinamen an das Ende der von Ihnen angegebenen URL an.  Damit Links des Typs \"Weitere Informationen\" in der Schnittstelle funktionieren, muss das Hilfesystem dieselben Dateinamen verwenden wie die integrierte Endbenutzerhilfe. ",
		admin_desktop_deprecated_appearance_title: "Nicht weiter unterstützte Einstellungen",
		admin_desktop_deprecated_appearance_instructions: "Wenn Sie ein angepasstes Motiv verwenden, werden diese Einstellungen durch das angepasste Motiv überschrieben. Sie sollten diese Einstellungen in ein angepasstes Motiv migrieren, das detailliertere Stile als die Einstellungen in diesem Abschnitt bereitstellt. Ein angepasstes Motiv kann zudem von mehreren Desktops verwendet werden.",

		admin_desktop_plugins_title: "Plug-ins für diesen Desktop aktivieren/inaktivieren.",
		admin_desktop_plugins_enable_all_plugins: "Alle bereitgestellten Plug-ins zur Verwendung mit diesem Desktop aktivieren",
		admin_desktop_plugins_select_plugins: "Aktivieren der bereitgestellten Plug-ins zur Verwendung mit diesem Desktop auswählen",
		admin_desktop_plugins_select_plugin: "Plug-in auswählen",

		admin_desktop_layout_features: "Angezeigte Features:",
		admin_desktop_layout_features_hover: "Wählen Sie die Features aus, auf die Benutzer von diesem Desktop aus Zugriff haben sollen. Die Features werden in der Reihenfolge angezeigt, in der sie aufgelistet sind.<br><br>Wenn Sie ein Feature auswählen, können Sie einige Verhaltensweisen des Features auf dem Desktop anpassen, etwa das für das Feature ausgewählte Standardrepository.",
		admin_desktop_layout_default_repository: "Standardrepository:",
		admin_desktop_layout_default_repository_layout_hover: "Geben Sie an, welches Repository standardmäßig ausgewählt ist, wenn die Benutzer dieses Feature öffnen.",
		admin_desktop_layout_document_thumbnails: "Dokumentpiktogramme:",
		admin_desktop_layout_document_thumbnails_hover: "Geben Sie an, ob Piktogramme für Dokumente im Teilfenster 'Dokumentinformationen' angezeigt werden sollen.<br><br>Durch das Anzeigen von Piktogrammen wird möglicherweise die Leistung des Web-Clients verringert.",
		admin_desktop_layout_show_filmstrip_view: "Filmstreifenansicht:",
		admin_desktop_layout_show_filmstrip_view_hover: "Angeben, ob allen Benutzern erlaubt werden soll, von der Inhaltslistenanzeige zur Filmstreifenansicht zu wechseln.<br><br>Die Filmstreifenansicht generiert eine Vorschau jedes Dokuments, das von einem Benutzer ausgewählt wird. Durch Verwenden der Filmstreifenansicht wird möglicherweise die Leistung des Web-Clients verringert. Weiterhin müssen Sie den Viewer mit HTML-Konvertierung konfigurieren, um Dokumentvorschauen anzuzeigen.",
		admin_enabled: "Aktivieren",
		admin_disabled: "Inaktivieren",
		admin_include: "Einschließen",
		admin_exclude: "Ausschließen",
		admin_layout_teamspaces_default_repository: "Teamarbeitsbereiche:",
		admin_layout_entry_templates_default_repository: "Erfassungsvorlagen:",
		admin_layout_other_features_default_repository: "Suchen und durchsuchen:",
		admin_layout_work_default_repository: "Arbeit:",
		admin_layout_default_feature: "Standardfeature:",
		admin_default_category_placeholder: "Feature auswählen",
		admin_layout_default_feature_hover: "Geben Sie an, welches Feature angezeigt wird, wenn die Benutzer sich bei diesem Desktop anmelden.",
		admin_layout_default_feature_warning: "Eine Änderung des Standardfeatures kann sich auf die Zeit auswirken, die zum Laden der Anwendung erforderlich ist.",
		admin_layout_feature_list_header: "Feature",
		admin_layout_show_statusbar: "Statusleiste:",
		admin_layout_show_statusbar_hover: "Geben Sie an, ob die Statusleiste unten auf dem Desktop angezeigt werden soll.<br><br>Wenn Sie die Statusleiste ausblenden, können die Benutzer keine Informationen zu Ereignissen anzeigen, die keinen Fehler darstellen. Dazu zählt Folgendes:<ul><li>Das Dokument wurde zum Repository hinzugefügt.</li><li>Die Suche hat 59 Dokumente zurückgegeben.</li></ul>",
		admin_layout_show_magazineview: "Magazinansicht:",
		admin_layout_show_magazineview_hover: "Geben Sie an, ob allen Benutzern erlaubt werden soll, von der Inhaltslistenanzeige zur Magazinansicht zu wechseln.<br><br>Bei der Magazinansicht wird die Höhe der Einträge in der Inhaltsliste vergrößert, sodass weniger Elemente gleichzeitig in der Inhaltsliste angezeigt werden können.",
		admin_layout_show_detailsview: "Detailansicht:",
		admin_layout_show_detailsview_hover: "Geben Sie an, ob allen Benutzern erlaubt werden soll, von der Inhaltslistenanzeige zur Detailansicht zu wechseln.<br><br>In der Detailansicht wird die Anzahl sichtbarer Zeilen in der Inhaltsliste maximiert.",
		admin_feature_config_docinfopane_label: "Dokumentinformationsfenster:",
		admin_feature_config_docinfopane_hoverhelp: "Geben Sie an, ob die Benutzer bei diesem Feature auf das Dokumentinformationsfenster zugreifen können.",
		admin_feature_config_docinfopane_default_label: "Standardverhalten:",
		admin_feature_config_docinfopane_expanded: "Eingeblendet",
		admin_feature_config_docinfopane_collapsed: "Ausgeblendet",
		admin_feature_config_docinfopane_expand_on_select: "Einblenden, wenn Element ausgewählt wird",
		admin_layout_features_title: "Desktop-Features",
		admin_layout_features_instructions: "Geben Sie an, auf welche Features die Benutzer von diesem Desktop aus Zugriff haben sollen.  Sie können weiterhin das Verhalten der im Desktop enthaltenen Features anpassen.",
		admin_layout_components_title: "Zusätzliche Desktopkomponenten",
		admin_layout_components_instructions: "Sie können einige der Komponenten des Desktops inaktivieren, wenn Sie die Schnittstelle optimieren oder die Leistung des Web-Clients verbessern möchten.",
		admin_layout_featureconfig_instructions: "Zu konfigurierendes Feature auswählen",
		admin_layout_featureconfig_no_configuration: "Keine Featurekonfiguration verfügbar.",
		admin_layout_featureconfig_label: "Konfiguration für Feature ${0}",
		admin_layout_featureconfig_title: "Featurekonfiguration",
		admin_layout_featureconfig_taskManagerURL: "Zur Verwendung dieses Features müssen Sie IBM Content Navigator zum Herstellen der Verbindung zum Task-Manager-Service aktivieren und konfigurieren. Aktivieren Sie den Task-Manager-Service im Abschnitt <b>Einstellungen</b> dieses Verwaltungstools.",
		admin_feature_config_show_my_checkouts_label: "Teilfenster 'Eigene Auscheckvorgänge':",
		admin_feature_config_show_my_checkouts_hoverhelp: "Das Teilfenster 'Eigene Auscheckvorgänge' ermöglicht den Benutzern, eine Suche nach allen Elementen auszuführen, die sie aus einem bestimmten Repository ausgecheckt haben. Geben Sie an, ob die Benutzer beim Home-Feature auf das Teilfenster 'Eigene Auscheckvorgänge' zugreifen können.<br/><br/><b>Einschränkung:</b> Dieses Feature erfordert, dass diesem Desktop mindestens ein IBM Content Manager-, IBM FileNet P8- oder OASIS CMIS-Repository zugeordnet ist.",

		admin_feature_config_default_repository_icon_text: "Standardrepository",
		admin_show: "Anzeigen",
		admin_hide: "Ausblenden",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Sie können das Feature 'Verwaltung' nicht aus dem Verwaltungsdesktop entfernen",
		admin_warning_label: "Warnung:",
		admin_layout_show_globaltoolbar: "Globale Symbolleiste:",
		admin_layout_show_globaltoolbar_hover: "Geben Sie an, ob die Statusleiste im Banner oben auf dem Desktop angezeigt werden soll.<br><br>Die globale Symbolleiste enthält die Aktionen, über die die Benutzer dem Repository Dokumente, Ordner oder temporäre Sperren hinzufügen kann. Die verfügbaren Aktionen hängen vom Repository ab, mit dem der Benutzer verbunden ist.",
		admin_interface_text_name_label: "Bezeichnungstyp",

		admin_interface_text_label_description: "Sie können den Text anpassen, der in bestimmten Bereichen des Web-Clients angezeigt wird. Die Bezeichnungen werden für alle Repositorys und Desktops in Ihrer Konfiguration angezeigt. Geben Sie den auf der Schnittstelle anzuzeigenden Text in das Feld <b>Aktuelle Bezeichnung</b> ein.<br><br><b>Wichtig:</b> An den Bezeichnungen vorgenommene Änderungen werden nicht im Verwaltungstool angezeigt.",
		admin_interface_text_label_action: "Aktionsbezeichnungen",
		admin_interface_text_label_action_description: "Aktionsbezeichnungen werden auf Schaltflächen und in Menüs im gesamten Web-Client angezeigt. Sie können verschiedene Aktionsbezeichnungen für jeden Typ von Repository definieren.",
		admin_interface_text_label_application: "Anwendungsbezeichnungen",
		admin_interface_text_label_application_description: "Anwendungsbezeichnungen werden im gesamten Web-Client angezeigt.",
		admin_interface_text_label_system: "Bezeichnungen für Systemeigenschaften",
		admin_interface_text_label_system_description: "Die angezeigten Systemeigenschaften sind je nach Repository unterschiedlich. Sie können die Bezeichnungen, die für die den Dokumenten und Ordnern in Ihren Repositorys zugeordneten Systemeigenschaften angezeigt werden, anpassen.",
		admin_interface_text_label_desktop: "Desktopbezeichnungen",
		admin_interface_text_label_desktop_description: "Wenn Sie den Namen der Anwendung auf einem Desktop angepasst haben, können Sie diesen Namen in anderen Sprachen als Englisch anpassen. Sie können außerdem die Namen der IBM FileNet P8-Anwendungsbereiche auf einem Desktop anpassen.",

		admin_interface_text_system_label: "Systembezeichnung",
		admin_interface_text_current_label: "Aktuelle Bezeichnung",
		admin_interface_text_default_label_heading: "Standardbezeichnung",
		admin_interface_text_default_label: "Standardbezeichnung:",
		admin_interface_text_displayed_in_label: "Angezeigt für",
		admin_interface_text_displayed_in_document_folder: "Dokumente und Ordner",
		admin_interface_text_displayed_in_document: "Dokumente",
		admin_interface_text_displayed_in_folder: "Ordner",
		admin_interface_text_displayed_in_admin_application_space: "Bezeichnung für Anwendungsspeicherbereich",
		admin_interface_text_displayed_in_desktop: "Featurebezeichnung für mobilen Client",
		admin_interface_text_displayed_in_admin_application_name: "Anwendungsname",

		admin_new_desktop: "Neuer Desktop",
		admin_new_repository: "Neues Repository",
		admin_new_menu: "Neues Menü",
		admin_new_viewer_mapping: "Neue Viewerzuordnung",
		admin_new_mapping_label: "Neue Zuordnung",
		admin_new_icon_mapping: "Neue Symbolzuordnung",
		admin_viewer_mapping_list_instructions: "Sie können konfigurieren, welche Viewer der Web-Client verwendet, um verschiedene Typen von Inhalten anzuzeigen. Eine Viewerzuordnung definiert, welche MIME-Typen welchem Viewer, den Sie verwenden wollen, zugeordnet sind. Sie können mehrere Viewerzuordnungen erstellen, wenn Sie verschiedene Viewer für verschiedene Desktops verwenden wollen.",
		admin_viewer_mapping_instructions: "Geben Sie die Viewer an, mit denen Sie die Dateien öffnen wollen. Wenn Sie einen benutzerdefinierten Viewer verwenden wollen, müssen Sie diesen als Plug-in integrieren, bevor Sie ihn der Viewerzuordnung hinzufügen können.<br><br><b>Wichtig:</b> Wenn ein Benutzer ein Dokument öffnet, durchsucht der Web-Client die Liste der Viewerzuordnungen, bis der erste Viewer gefunden wird, der entsprechend dem vom Benutzer verwendeten Betriebssystem und dem Repository, mit dem der Benutzer verbunden ist, zum Öffnen des Dokuments verwendet werden kann. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Neues Plug-in",
		admin_menu_list_instructions: "Sie können benutzerdefinierte Symbolleisten und Kontextmenüs erstellen, um zu steuern, welche Aktionen für Benutzer verfügbar sind. Sie können die Standardmenüs nicht bearbeiten, aber Sie können Kopien vorhandener Menüs erstellen, um die verfügbaren Aktionen zu beschränken oder benutzerdefinierte Aktionen hinzuzufügen, die in Plug-ins definiert sind.<br><br>Wenn Sie einen neuen Menütyp erstellen wollen, müssen Sie das Menü in einem Plug-in definieren.",
		admin_menu_id_hover: "Die ID muss eindeutig sein und Sie können sie nach der Speicherung des Menüs nicht mehr ändern.<br><br>Die ID darf nur alphanumerische Zeichen enthalten und die Groß-/Kleinschreibung muss beachtet werden.",
		admin_menu_id_disabled_hover: "Die Menü-ID kann nicht geändert werden. Wenn Sie eine andere ID verwenden wollen, müssen Sie ein neues Menü erstellen.",
		admin_menu_default_instructions: "Sie können dieses Menü nicht bearbeiten, weil es ein Standardmenü ist. Wenn Sie dieses Menü bearbeiten wollen, müssen Sie eine Kopie davon erstellen.",
		admin_menu_toolbar_instructions: "Sie können die Aktionen beschränken, die für diese Symbolleiste verfügbar sind, oder Sie können benutzerdefinierte Aktionen hinzufügen, die in einem Plug-in definiert sind. Sie können auch die Aktionen durch Hinzufügen von Trennlinien zur Symbolleiste organisieren.",
		admin_menu_toolbar_custom_instructions: "Diese Symbolleiste wird durch ein Plug-in definiert. Wenn Sie diese Symbolleiste bearbeiten wollen, müssen Sie das Plug-in aktualisieren oder eine Kopie der Symbolleiste erstellen.",
		admin_menu_context_menu_instructions: "Sie können die Aktionen beschränken, die für dieses Kontextmenü verfügbar sind, oder Sie können benutzerdefinierte Aktionen hinzufügen, die in einem Plug-in definiert sind. Sie können auch die Aktionen durch Hinzufügen von Trennlinien und Untermenüs zum Kontextmenü organisieren.",
		admin_menu_context_menu_custom_instructions: "Dieses Kontextmenü wird durch ein Plug-in definiert. Wenn Sie dieses Kontextmenü bearbeiten wollen, müssen Sie das Plug-in aktualisieren oder eine Kopie des Kontextmenüs erstellen.",
		admin_desktop_list_instructions: "Sie können mehrere Desktops erstellen, um verschiedenen Benutzern Zugriff auf den von ihnen benötigten Inhalt zu ermöglichen. Es ist z. B. möglich, einen Desktop zu erstellen, mit dem Benutzer nur nach Inhalt suchen können, oder einen Desktop, der Benutzern Zugriff auf ein einzelnes Repository bietet. ",
		admin_plugin_updated: "Die Konfiguration des ausgewählten Plug-ins wurde geändert. Sie müssen die Browseranzeige aktualisieren, damit die Änderungen wirksam werden.",
		admin_repository_ci_heading: "Content Integrator-Repository: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager-Repository: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager-Repository: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand-Repository: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS-Repository (Content Management Interoperability Services): <b>${0}</b>",
		admin_repository_box_heading: "Box-Repository: <b>${0}</b>",
		admin_repository_generic_heading: "Repository: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Wollen Sie die ausgewählten Desktops löschen?\n${0} Desktops sind ausgewählt.",
		admin_delete_confirmation_menus: "Wollen Sie die ausgewählten Menüs löschen?\n${0} Menüs sind ausgewählt.",
		admin_delete_confirmation_repositories: "Wollen Sie die ausgewählten Repositorys löschen?\n${0} Repositorys sind ausgewählt.",
		admin_delete_confirmation_viewer_mappings: "Wollen Sie die ausgewählten Viewerzuordnungen löschen? ${0} Zuordnungen sind ausgewählt.",
		admin_delete_confirmation_icon_mappings: "Wollen Sie die ausgewählten Symbolkonfigurationen löschen?\n${0} Symbolkonfigurationen sind ausgewählt.",
		admin_delete_confirmation_plugins: "Wollen Sie die ausgewählten Plug-ins löschen?\n${0} Plug-ins sind ausgewählt.",
		admin_delete_confirmation: "Wollen Sie die ausgewählten Elemente löschen?\n${0} Elemente sind ausgewählt.",

		admin_viewer_mapping_id_hover: "Die ID muss eindeutig sein und Sie können sie nach der Speicherung der Viewerzuordnung nicht mehr ändern..<br><br>Die ID darf nur alphanumerische Zeichen enthalten und die Groß-/Kleinschreibung muss beachtet werden.",
		admin_viewer_mapping_id_disabled_hover: "Die ID der Viewerzuordnung kann nicht geändert werden. Wenn Sie eine andere ID verwenden wollen, müssen Sie eine neue Viewerzuordnung erstellen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Der Standarddesktop kann nicht gelöscht werden.",

		admin_desktop_heading: "Desktop: <b>${0}</b>",
		admin_menu_toolbar_heading: "Symbolleiste: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Benutzerdefinierte Symbolleiste: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontextmenü: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Benutzerdefiniertes Kontextmenü: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Ein Plug-in kann eine JAR-Datei oder eine kompilierte Klassendatei sein.<br/><br/><b>Wichtig:</b> Der Webanwendungsserver von IBM Content Navigator muss über Zugriff auf die Plug-in-Datei auf dem lokalen Dateisystem verfügen oder über eine URL auf sie zugreifen können.",
		admin_plugin_list_instructions: "Sie müssen mit dem Verwaltungstool Plug-ins für den Web-Client registrieren. Wenn für ein Plug-in eine zusätzliche Konfiguration erforderlich ist, werden die Konfigurationsparameter angezeigt, nachdem Sie das Plug-in registriert haben.<br /><br /><b>Wichtig:</b> Wenn Sie ein Plug-in bearbeiten, das in einem anderen Bereich des Verwaltungstools, beispielsweise einem Menü referenziert wird, treten möglicherweise Probleme beim Verhalten des Plug-ins auf. Darüber hinaus werden die Plug-ins in der Reihenfolge aufgerufen, in der sie aufgelistet sind. Wenn ein Plug-in vor einem anderen Plug-in ausgeführt werden muss, stellen Sie sicher, dass die Plug-ins in der richtigen Reihenfolge aufgelistet sind.",
		admin_plugin_cannot_delete: "Die ausgewählten Plug-ins können nicht gelöscht werden, weil einige Plug-ins von ihnen abhängig sind.<br/>Ausgewählte Plug-ins: ${0}<br/>Abhängige Plug-ins: ${1}",
		admin_plugin_cannot_disable: "Die ausgewählten Plug-ins können nicht inaktiviert werden, weil einige Plug-ins von ihnen abhängig sind.<br/>Ausgewählte Plug-ins: ${0}<br/>Abhängige Plug-ins: ${1}",
		admin_plugin_cannot_add: "Das Plug-in kann nicht hinzugefügt werden, weil einige hiervon abhängige Plug-ins fehlen oder inaktiviert sind. Fehlende oder inaktivierte Plug-ins: ${0}",
		admin_plugin_cannot_enable: "Die ausgewählten Plug-ins können nicht aktiviert werden, weil einige von diesen abhängige Plug-ins fehlen oder inaktiviert sind.<br/>Ausgewählte Plug-ins: ${0}<br/>Fehlende oder inaktivierte Plug-ins: ${1}",
		admin_plugin_save_order: "Sicherungsreihenfolge",
		admin_plugin_load: "Laden",
		admin_plugin_load_hover: "Geben Sie die URL des Plug-ins an",
		admin_plugin_file_hover: "Wenn sich die Plug-in-JAR-Datei auf Ihrem lokalen Dateisystem befindet, können Sie den vollständig qualifizierten Pfad oder die URL der Plug-in-Datei eingeben. Wenn sich die Plug-in-JAR-Datei auf einem fernen Server befindet, müssen Sie die URL der Plug-in-Datei eingeben.",
		admin_plugin_classfolderpath_hover: "Die kompilierte Klassendatei muss sich auf dem IBM Content Navigator-Webanwendungsserver befinden.<br/><br/>Geben Sie den vollständig qualifizierten Pfad des Ordners ein, in dem die Plug-in-Klassen kompiliert und generiert werden.<br/><br/>Der Pfad darf nicht den Paketnamen der Plug-in-Klasse enthalten. Der Standardpfad für die Beispiel-Plug-in-Klasse unter Windows lautet beispielsweise C:\\Programme (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Geben Sie den vollständigen Namen der Java-Klasse innerhalb der Klassendatei an, die als Plug-in-Klasse geladen und aufgerufen werden soll.<br/>Der Klassenname für das Beispiel-Plug-in könnte beispielsweise wie folgt lauten: com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Die JAR-Datei für das Plug-in wurde nicht unter der angegebenen URL gefunden. Stellen Sie sicher, dass die JAR-Datei sich auf dem Webanwendungsserver befindet und dass die URL und der Dateiname richtig sind.",
		admin_plugin_for_repository_not_loaded: "Sie können dieses Repository nicht bearbeiten. Das Plug-in, das diesen Typ von Repository definiert und unterstützt, ist nicht geladen. Bearbeiten Sie auf der Registerkarte 'Plug-ins' das Plug-in, um sicherzustellen, dass es ordnungsgemäß konfiguriert und geladen ist.",
		admin_plugin_repository_types: "Repository-Typen:",
		admin_plugin_viewers: "Viewer:",
		admin_plugin_features: "Features:",
		admin_plugin_layouts: "Layouts:",
		admin_plugin_not_available: "Nicht verfügbar",
		admin_plugin_config_params: "Konfigurationsparameter:",
		admin_viewer_def_heading: "Viewerzuordnung: <b>${0}</b>",
		admin_users_and_groups: "Benutzer und Gruppen",
		admin_general: "Allgemein",
		admin_logging: "Protokollierung",
		admin_authentication: "Authentifizierung",		
		admin_rolebase_role: "Rolle:",
		admin_settings_logging_instructions: "Sie können die Protokollierung zum Beheben von Problemen mit dem Web-Client verwenden. Sie können Ihre Protokollierung optimieren, wenn Sie wissen, dass ein Problem in einer bestimmten Java-Klasse oder für einen bestimmten Benutzer auftritt. Die Fehlerinformationen werden in die Fehlerprotokolldateien des Webanwendungsservers geschrieben.",
		admin_settings_logging_instructions2: "<b>Einstellungen für Debugprotokollierung</b><br />Wenn Sie wissen, dass ein Problem bei einem bestimmten Client-Host-System oder Benutzer auftritt, können Sie die Debugprotokollierung gezielt auf dieses System bzw. diesen Benutzer anwenden. Sie können Debuginformationen in einer Produktionsumgebung aufzeichnen, ohne dass sich dies signifikant auf die Leistung des Systems auswirkt.<br /><br /><b>Wichtig:</b> Wenn Sie ein Client-Host-System oder -Benutzer angeben, überschreibt diese Einstellung alle anderen Protokollierungseinstellungen. Nach Aufzeichnung der erforderlichen Informationen setzen Sie diese Option auf <b>Ohne</b>, um zur Standardprotokollierung für Ihre Umgebung zurückzukehren.",
		admin_settings_export_config_hover: "Exportieren Sie die aktuellen Systemkonfigurationsinformationen in eine Datei für die Verwendung mit IBM Support Assistant Data Collector. Die Datei wird an einer von der Java-Systemeigenschaft user.home definierten Position gespeichert.",
		admin_logging_level: "Protokollierung auf Anwendungsebene:",
		admin_logging_level_hover: "Protokollebenen haben Einfluss darauf, wie viele Informationen auf Ihrem Server gespeichert werden. Durch Auswahl von <b>Fehler</b> wird die geringste Menge von Protokollierungsinformationen erfasst. Durch Auswahl von <b>Fehlerbehebung</b> werden die meisten Informationen erfasst.<br /><br />Geben Sie <b>Fehlerbehebung</b> in einer Produktionsumgebung nur an, wenn Sie vom IBM Software Support hierzu aufgefordert werden.",
		admin_logging_level_0: "Keine Protokollierung",
		admin_logging_level_1: "Fehler",
		admin_logging_level_2: "Warnung",
		admin_logging_level_3: "Information",
		admin_logging_level_4: "Fehlerbehebung",
		admin_logging_classes: "Protokollierung auf Java-Klassenebene:",
		admin_logging_classes_hover: "Standardmäßig werden alle Java-Klassen und -Pakete in die Fehlerprotokolle des Webanwendungsservers eingeschlossen. Sie können jedoch angeben, welche Klassen bei der Protokollierung ein- oder ausgeschlossen werden sollen. Sie können anhand der Fehlerprotokolle des Webanwendungsservers bestimmen, welche Klassen ein- oder ausgeschlossen werden sollen.<br><br>Wenn Sie wissen, dass ein Problem in einer bestimmten Klasse auftritt, können Sie diese bestimmte Klasse in die Protokolldateien einschließen. Wenn Sie eine Klasse in die Fehlerprotokolle einschließen, werden alle anderen Klassen aus der Protokolldatei ausgeschlossen.<br><br>Wenn Sie wissen, dass ein Problem in einer Klasse nicht auftritt und die Größe der Protokolldatei verringern möchten, können Sie diese Klasse von den Protokolldateien ausschließen.",
		admin_logging_classes_include: "Einschließen",
		admin_logging_classes_include_all: "Alle Klassen",
		admin_logging_classes_include_specified: "Bestimmte Klassen",
		admin_logging_classes_include_specified_msg: "Geben Sie an, welche Klassen eingeschlossen werden sollen.",
		admin_logging_classes_exclude: "Ausschließen",
		admin_logging_classes_exclude_none: "Ohne",
		admin_logging_classes_exclude_specified: "Bestimmte Klassen",
		admin_logging_classes_exclude_specified_msg: "Geben Sie an, welche Klassen ausgeschlossen werden sollen.",
		admin_logging_debug: "Debugprotokollierung für:",
		admin_logging_debug_hover: "<b>Wichtig:</b> Prüfen Sie die Protokolldateien des Webanwendungsservers, bevor Sie die IP-Adresse eines Client-Host-Systems oder einen Benutzer angeben. Der Wert, den Sie bereitstellen, muss mit dem Wert übereinstimmen, der in der Protokolldatei angezeigt wird.",
		admin_logging_debug_none: "Ohne (Standardwert)",
		admin_logging_debug_host: "Client-Host-Systeme (IP-Adressen)",
		admin_logging_debug_host_msg: "Geben Sie die IP-Adresse mindestens eines Clientsystems an, für das Sie Debuginformationen protokollieren wollen. Trennen Sie die IP-Adressen durch Kommas.<br /><br /><b>Wichtig:</b> Prüfen Sie die Protokolldateien des Webanwendungsservers, bevor Sie eine IP-Adresse angeben. Der Wert, den Sie bereitstellen, muss mit dem Wert übereinstimmen, der in der Protokolldatei angezeigt wird.",
		admin_logging_debug_user: "Benutzer",
		admin_logging_debug_user_msg: "Geben Sie den Benutzernamen mindestens eines Benutzers an, für den Sie Debuginformationen protokollieren wollen. Trennen Sie die Benutzernamen durch Kommas.<br /><br /><b>Wichtig:</b> Prüfen Sie die Protokolldateien des Webanwendungsservers, bevor Sie einen Benutzernamen angeben. Der Wert, den Sie bereitstellen, muss mit dem Wert übereinstimmen, der in der Protokolldatei angezeigt wird.",

		admin_office_settings_logging_instructions: "Sie können die Protokollierung zum Beheben von Problemen mit IBM Content Navigator for Microsoft Office verwenden. Sie können Ihre Protokollierung optimieren, wenn Sie wissen, dass ein Problem in einer bestimmten Klasse oder für einen bestimmten Benutzer auftritt. Fehlerinformationen werden in die Anwendungsprotokolldateien auf den Client-Host-Systemen mit IBM Content Navigator for Microsoft Office geschrieben. ",
		admin_office_settings_logging_instructions2: "<b>Einstellungen für Debugprotokollierung</b><br />Wenn Sie wissen, dass ein Problem bei einem bestimmten Client-Host-System oder Benutzer von IBM Content Navigator for Microsoft auftritt, können Sie die Debugprotokollierung gezielt auf dieses System bzw. diesen Benutzer anwenden. Sie können Debuginformationen in einer Produktionsumgebung aufzeichnen, ohne dass sich dies signifikant auf die Leistung des Systems auswirkt. <br /><br /><b>Wichtig:</b> Wenn Sie ein Client-Host-System oder -Benutzer angeben, überschreibt diese Einstellung alle anderen Protokollierungseinstellungen. Nach Aufzeichnung der erforderlichen Informationen setzen Sie diese Option auf <b>Ohne</b>, um zur Standardprotokollierung für Ihre IBM Content Navigator for Microsoft Office-Umgebung zurückzukehren. ",
		admin_office_logging_debug_hover: "<b>Wichtig:</b> Prüfen Sie die Protokolldateien des Clientsystems, bevor Sie die IP-Adresse eines Client-Host-Systems oder einen Benutzer angeben. Der Wert, den Sie bereitstellen, muss mit dem Wert übereinstimmen, der in der Protokolldatei angezeigt wird. ",
		admin_office_logging: "Office-Protokollierung",
		admin_office_logging_classes: "Protokollierung auf Klassenebene:",
		admin_office_logging_classes_hover: "Standardmäßig werden alle Klassen und Pakete in die Fehlerprotokolle von IBM Content Navigator for Microsoft Office eingeschlossen. Sie können jedoch angeben, welche Klassen bei der Protokollierung ein- oder ausgeschlossen werden sollen. Sie können anhand der Protokolle des Clientsystems bestimmen, welche Klassen ein- oder ausgeschlossen werden sollen.<br /><br />Wenn Sie wissen, dass ein Problem in einer bestimmten Klasse auftritt, können Sie diese bestimmte Klasse in die Protokolldateien einschließen. Wenn Sie eine Klasse in die Fehlerprotokolle einschließen, werden alle anderen Klassen aus den Protokolldateien ausgeschlossen. <br /><br />Wenn Sie wissen, dass ein Problem in einer Klasse nicht auftritt und die Größe der Protokolldatei verringern möchten, können Sie diese Klasse aus den Protokolldateien ausschließen. ",
		admin_office_logging_debug_hover: "<b>Wichtig:</b> Prüfen Sie die Protokolldateien des Clientsystems, bevor Sie die IP-Adresse eines Client-Host-Systems oder einen Benutzer angeben. Der Wert, den Sie bereitstellen, muss mit dem Wert übereinstimmen, der in der Protokolldatei angezeigt wird.",
		admin_office_logging_additional_settings: "Weitere Einstellungen:",
		admin_office_logging_additional_settings_hover: "Geben Sie zusätzliche Einstellungen an.",
		admin_office_logging_file_size: "Protokolldateigröße",
		admin_office_logging_file_size_hover: "Geben Sie die Größe an, mit der IBM Content Navigator for Microsoft Office eine neue Protokolldatei erstellen soll. Wenn eine Protokolldatei die maximale Größe erreicht hat, wird das aktuelle Protokoll umbenannt und eine neue Protokolldatei erstellt. Beim Umbenennen werden das Datum (im Format JJJJMMTT) und eine Inkrementzahl (z. B. ICNExcelAddin-20121116-5.log) an den Dateinamen angehängt. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Stack-Trace in Dialogen anzeigen",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Sie können optional Stack-Trace-Informationen in Nachrichtendialogen anzeigen, um die Fehlerbehebung zu erleichtern. Auch, wenn Sie diese Option nicht aktivieren, werden immer detaillierte Stack-Trace-Informationen in die Fehlerprotokolle von IBM Content Navigator for Microsoft Office einbezogen. ",

		admin_icon_state_twisty: "Statussymbole",
		admin_icon_state_icon: "Statussymbol",
		admin_icon_state: "Status",
		state_contains_label: "Der Status enthält",
		admin_icon_state_instructions: "Sie können die Symbole anpassen, die neben den Dokumenten, Ordnern und Arbeitselementen in Ihren Repositorys angezeigt werden.<br><br><b>Tipp:</b> Sie können angeben, ob Statussymbole für jedes Repository in Ihrer Umgebung angezeigt werden sollen.",
		admin_icon_state_dialog_title: "Statussymbolzuordnung",
		admin_icon_state_dialog_instructions: "Sie können den ausgewählten Status einem vordefinierten Symbol, das mit dem Web-Client bereitgestellt wird, oder einem benutzerdefinierten Symbol zuordnen.",

		admin_icon_mapping_twisty: "Symbole für MIME-Typen",
		admin_icon_mapping_dialog_title: "Symbolzuordnung",
		admin_icon_mapping: "Symbolzuordnung",
		admin_icon_mapping_instructions: "Sie können eine Liste der MIME-Typen einem vordefinierten Symbol, das mit dem Web-Client bereitgestellt wird, oder einem benutzerdefinierten Symbol zuordnen.",
		admin_icon_mapping_list_instructions: "Sie können die Symbole anpassen, die für die in Ihrem Repository gespeicherten MIME-Typen angezeigt werden. Der Web-Client verwendet die Symbole in der Reihenfolge, in der sie aufgelistet werden. Wenn ein MIME-Typ mehrmals aufgelistet ist, wird das erste Symbol, das diesem MIME-Typ zugewiesen ist, verwendet.",
		admin_icon_mapping_icon_label: "Welches Symbol wollen Sie verwenden?",
		admin_icon_mapping_file_name: "Benutzerdefiniertes Symbol:",
		admin_icon_mapping_file_name_heading: "Benutzerdefiniertes Symbol",
		admin_icon_mapping_file_name_placeholder: "Geben Sie die URL des Symbols an",
		admin_icon_mapping_file_name_hover: "Geben Sie die URL für das Symbol ein. Befindet sich das Symbol auf demselben Webanwendungsserver wie der Web-Client, geben Sie eine relative URL ein. Beispiel: /MeineAnpassungen/Symbol.png",
		admin_icon_mapping_class_name: "Vordefiniertes Symbol:",
		admin_icon_mapping_class_name_heading: "Vordefiniertes Symbol",
		admin_icon_mapping_class_name_hover: "Wählen Sie ein Symbol aus, das mit dem Web-Client bereitgestellt wird.",
		admin_icon_mapping_class_name_placeholder: "Wählen Sie ein Symbol aus",

		admin_p8_instructions: "Diese Informationen werden von allen FileNet Content Manager-Repositorys gemeinsam genutzt, die für den Web-Client konfiguriert sind.",
		admin_p8_collaboration_config: "Optionale FileNet Collaboration Services-Konfiguration",
		admin_p8_collaboration_config_instructions: "Sie können diese Parameter konfigurieren, wenn Sie FileNet Collaboration Services für Ihre IBM FileNet P8-Umgebung optimieren möchten.",
		admin_p8_use_url_incoming: "URL in eingehenden Anforderungen zum Generieren von Antwort-URLs verwenden:",
		admin_p8_use_url_incoming_hover: "In den meisten FileNet Collaboration Services-Umgebungen können Sie die URL einer eingehenden Anforderung zum Generieren der URL in einer Antwort verwenden. Wählen Sie <b>Ja</b> aus, sofern nicht eine der folgenden Situationen auf Ihre Umgebung zutrifft:<ul><li>Sie möchten die Clientanwendungen zwingen, auf FileNet Collaboration Services über eine bestimmte URL zuzugreifen.<li>Ihre Proxy-Server-Einstellungen bewirken, dass FileNet Collaboration Services ungültige URLs erzeugt.</ul>",

		admin_p8_use_url_incoming_http: "URL für FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Geben Sie die URL an, unter der Clientanwendungen auf FileNet Collaboration Services zugreifen können, und zwar im Format http://FNCS-Server:Portnummer.",
		admin_p8_use_url_incoming_https: "HTTPS-URL für FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Falls FileNet Collaboration Services zur Verwendung von SSL konfiguriert ist, geben Sie die HTTPS-URL an, unter der Clientanwendungen auf FileNet Collaboration Services zugreifen können, und zwar im Format https://FNCS-Server:Portnummer.",
		admin_p8_hide_email_addresses: "E-Mail-Adressen der Benutzer in Serverantworten ausblenden:",
		admin_p8_hide_email_addresses_hover: "Sie können die E-Mail-Adressen der Benutzer in Serverantworten ausblenden, wenn Sie Datenschutzrichtlinien einhalten müssen. Sie können beispielsweise die Liste der E-Mail-Adressen der Benutzer ausblenden, wenn der Server eine Liste mit Dokumenten und Informationen zu den Benutzern, die die Dokumente erstellt oder bearbeitet haben, zurückgibt.",

		admin_p8_mask_user_ids: "Benutzer-IDs in Protokolldateien maskieren:",
		admin_p8_mask_user_ids_hover: "Sie können Benutzernamen in FileNet Collaboration Services-Protokolldateien ausblenden, wenn Sie Datenschutzrichtlinien einhalten müssen. Wenn Sie diese Option aktivieren, werden die Benutzernamen durch Hashwerte ersetzt. Dies ermöglicht Ihnen, Protokolldateien externen Unternehmen wie IBM für Supportzwecke zur Verfügung zu stellen, ohne die Namen oder Aktivitäten Ihrer Benutzer preiszugeben.",

		admin_p8_soft_delete: "Gelöschte Dateien in Wiederherstellungsbin verschieben:",
		admin_p8_soft_delete_hover: "Wenn die Benutzer Elemente löschen, werden die Elemente in ein Wiederherstellungsbin verschoben, statt sie aus dem Repository zu löschen. Die Elemente bleiben im Wiederherstellungsbin, bis sie gelöscht werden. Diese Einstellung wird ignoriert, wenn das Zielrepository Wiederherstellungsbins nicht unterstützt.<br><br><b>Einschränkung:</b> Wiederherstellungsbins werden unter IBM FileNet P8 Version 5.2 oder neuer unterstützt und erfordern das Add-on 'Social Collaboration Base Extensions'.",

		admin_p8_download: "Content Download HTTP Cache-Konfiguration",
		admin_p8_download_instructions: "Wenn Ihre IBM FileNet Content Manager-Repositorys viele große Dateien enthalten, können Sie Content Download HTTP Cache (CDHC) so konfigurieren, dass FileNet Collaboration Services Anforderungen großer Dateien sicher auf einen dedizierten Webserver umleiten können.<br/><br/>Dieses Feature erfordert einen HTTP-Server. Weiterhin müssen Sie die IBM HTTP Server-Datei httpd.conf aktualisieren.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Geben Sie an, ob Sie Content Download HTTP Cache (CDHC) für alle IBM FileNet Content Manager-Repositorys in Ihrer Umgebung aktivieren möchten. Sie können eine Mindestdateigröße für die Zwischenspeicherung von Dateien angeben.",
		admin_p8_download_cache_folder: "Vollständig qualifiziertes Cacheverzeichnis:",
		admin_p8_download_cache_folder_hover: "Geben Sie den vollständig qualifizierten Pfad des Verzeichnisses ein, in dem die Cachedateien gespeichert werden sollen. Das Verzeichnis kann sich auf einem beliebigen Betriebssystem oder Gerät befinden, etwa einem freigegebenen Netzverzeichnis, sofern es als Dateisystem für FileNet Collaboration Services und IBM HTTP Server sichtbar ist.",
		admin_p8_download_cache_url: "Alias für die Cacheposition:",
		admin_p8_download_cache_url_hover: "Geben Sie das Alias an, das in der URL für FileNet Collaboration Services auf das Cacheverzeichnis verweist. Geben Sie das Alias im Format /alias an, z. B. /cdhc.<br/><br/>Wenn /cdhc in eine URL eingeschlossen wird, wird die Anwendung zum vollständig qualifizierten Cacheverzeichnis umgeleitet.",
		admin_p8_download_cache_max_files: "Maximale Anzahl für zwischengespeicherte Dateien:",
		admin_p8_download_cache_max_files_hover: "Wenn die maximale Anzahl der Dateien erreicht wird, wird die älteste Datei aus dem Cache entfernt.<br><br>Wenn Sie die maximale Anzahl für zwischengespeicherte Dateien und die maximale Größe des Caches angeben, wird die älteste Datei aus dem Cache entfernt, sobald der jeweils niedrigere Wert der beiden Bedingungen erreicht wird.",
		admin_p8_download_cache_max_size: "Maximale Cachegröße (in GB):",
		admin_p8_download_cache_max_size_hover: "Wenn die maximale Cachegröße erreicht wird, wird die älteste Datei aus dem Cache entfernt.<br/><br/>Wenn Sie die maximale Anzahl für zwischengespeicherte Dateien und die maximale Größe des Caches angeben, wird die älteste Datei aus dem Cache entfernt, sobald der jeweils niedrigere Wert der beiden Bedingungen erreicht wird.",
		admin_p8_download_cache_cleanup_duration: "Maximale Löschdauer (in Sekunden):",
		admin_p8_download_cache_cleanup_duration_hover: "Geben Sie die Höchstdauer der Löschoperation an. Die Standarddauer ist 5 Sekunden.<br><br>Dateien, die gelöscht werden sollen, aber nach der Löschoperation im Cache verbleiben, werden bei einer späteren Löschoperation entfernt.",
		admin_p8_download_cache_cleanup_min: "Minimales Intervall zwischen Cachelöschoperationen (in Sekunden):",
		admin_p8_download_cache_cleanup_min_hover: "Geben Sie die Mindestdauer an, die zwischen Löschoperationen im Cache verstreichen soll. Die Standardzeit ist 3.600 Sekunden (1 Stunde).<br><br>Löschvorgänge im Cache treten nur auf, wenn eine aktive Anforderung zum Übertragen von Inhalt aus dem Cache besteht. Gehen Anforderungen minütlich ein, tritt die Löschoperation jede Stunde auf. Verstreichen aber drei Stunden zwischen Übertragungsanforderungen, tritt die Löschoperation erst auf, wenn die nächste Übertragungsanforderung empfangen wird.",
		admin_p8_download_cache_min_lifetime: "Mindestzeit im Cache (in Sekunden):",
		admin_p8_download_cache_min_lifetime_hover: "Geben Sie die Mindestdauer an, die eine Datei im Cache verbleibt, bevor sie entfernt werden kann. Die Standardzeit ist 3.600 Sekunden (1 Stunde).<br><br>Auch wenn die maximale Cachegröße oder die maximale Anzahl der Dateien im Cache erreicht wird, kann die älteste Datei im Cache nicht gelöscht werden, solange sie sich nicht die angegebene Zeitdauer im Cache befunden hat.",
		admin_p8_download_cache_size_threshold: "Mindestdateigröße für Cache (in KB):",
		admin_p8_download_cache_size_threshold_hover: "Geben Sie die Mindestgröße für Dateien an, für die CDHC verwendet werden soll. Ist eine Datei kleiner als die angegebene Größe, wird sie über den Webanwendungsserver übertragen, auf dem FileNet Collaboration Services implementiert ist. Die Standardgröße ist 1.000 KB.",
		admin_p8_download_guard_header: "HTTP-Header für Gatekeeping:",
		admin_p8_download_guard_header_hover: "Wenn eine Clientanwendung eine Anforderung nicht über einen IBM HTTP Server weiterleitet, kann der zwischengespeicherte Inhalt nicht heruntergeladen werden. Sie können angeben, dass nur eingehende Anforderungen mit einem bestimmten HTTP-Header (der Anforderungen von IBM HTTP Server hinzugefügt wird) auf den zwischengespeicherten Inhalt zugreifen können, um Fehler beim Herunterladen zu vermeiden.<br><br>Der HTTP-Header wird in IBM HTTP Server konfiguriert und ist in allen eingehenden Anforderungen vorhanden, die über IBM HTTP Server weitergeleitet werden. Wenn eine Anforderung den HTTP-Header nicht enthält, wird der Inhalt über den Webanwendungsserver und nicht über IBM HTTP Server weitergeleitet.",
		admin_p8_download_generate_config: "Konfiguration generieren",
		admin_p8_download_generate_config_label: "IBM HTTP Server-Konfiguration:",
		admin_p8_download_generate_config_label_hover: "Damit die CHDC-Konfiguration funktioniert, müssen Sie die IBM HTTP Server-Datei httpd.conf aktualisieren. Klicken Sie auf 'Konfiguration generieren', um die Anweisungen zu generieren, die der Datei httpd.conf hinzugefügt werden müssen.",

		admin_logging_viewone_pro: "ViewONE Professional-Protokollierung:",
		admin_logging_viewone_virtual: "ViewONE Virtual-Protokollierung:",
		admin_logging_viewone_streamer: "Protokollierung für Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "Die Protokollierungsoptionen für Document Streaming Server Module sind nur anwendbar, wenn Sie Streaming für PDF- oder TIFF-Dateien im Abschnitt <b>Daeja ViewONE</b> des Verwaltungstools aktiviert haben.",
		admin_logging_viewone_redaction: "Protokollierung für Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "Die Protokollierungsoptionen für Permanent Redaction Server Module sind nur anwendbar, wenn Sie zur Verwendung des Redaction-Moduls von Daeja ViewONE Professional berechtigt sind.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Streaming für PDF-Dateien:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Wenn Sie große PDF-Dokumente in Ihrem Repository haben, können Sie im Viewer das Streaming von Inhalt ermöglichen, damit die Benutzer diese Dokumente schneller anzeigen können. Wenn das Streaming in Ihrer Umgebung allerdings nicht funktioniert, können Sie es inaktivieren.",
		admin_daeja_viewonepro_stream_tiff_documents: "Streaming für TIFF-Dateien:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Wenn Sie große TIFF-Dokumente in Ihrem Repository haben, können Sie im Viewer das Streaming von Inhalt ermöglichen, damit die Benutzer diese Dokumente schneller anzeigen können. Wenn das Streaming in Ihrer Umgebung allerdings nicht funktioniert, können Sie es inaktivieren.",
		admin_daeja_viewonepro_show_file_buttons: "Schaltflächen für Dateien",
		admin_daeja_viewonepro_show_file_menus: "Dateimenüs",
		admin_daeja_viewonepro_enable_file_keys: "Direktaufrufe für Dateien",
		admin_daeja_viewonepro_file_keys_hover_help: "Geben Sie an, ob die Benutzer Direktaufrufe zum Arbeiten mit Dateien verwenden dürfen, etwa zum Öffnen oder Speichern. Weitere Informationen zu bestimmten Direktaufrufen finden Sie bei der Beschreibung des Parameters FileKeys in 'IBM Daeja ViewONE Parameters Reference Manual'.",
		admin_daeja_viewonepro_show_print_buttons: "Schaltflächen für Drucken",
		admin_daeja_viewonepro_show_print_menus: "Druckmenüs",
		admin_daeja_viewonepro_enable_print_keys: "Direktaufrufe für Drucken",
		admin_daeja_viewonepro_print_keys_hover_help: "Geben Sie an, ob die Benutzer Direktaufrufe zum Drucken von Dateien verwenden dürfen, etwa zum Drucken der Seite oder des Dokuments. Weitere Informationen zu bestimmten Direktaufrufen finden Sie bei der Beschreibung des Parameters PrintKeys in 'IBM Daeja ViewONE Parameters Reference Manual'.",
		admin_daeja_viewonepro_show_invert_buttons: "Schaltflächen für Invertieren",
		admin_daeja_viewonepro_annotation_tooltip: "Standard-QuickInfo für benutzerdefinierte Anmerkungen:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Geben Sie den Text ein, der angezeigt wird, wenn keine QuickInfo für eine benutzerdefinierte Anmerkung angegeben ist. Der Text kann ersetzbare Token enthalten. Beispiel: &quot;Diese Anmerkung wurde von &lt;creator&gt; am &lt;createdateonly&gt; erstellt.&quot; Weitere Informationen zu ersetzbaren Token finden Sie bei der Beschreibung des Parameters customAnnotationsToolTip in 'IBM Daeja ViewONE Parameters Reference Manual'.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Vordefinierte QuickInfo verwenden",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Verwenden Sie die im Textfeld unten angezeigte systemdefinierte QuickInfo",
		admin_daeja_viewonepro_help_url: "URL für Hilfe:",
		admin_daeja_viewonepro_help_url_hover_help: "Geben Sie die URL der Webseite an, die Hilfedokumentation für den Viewer enthält. Diese Webseite wird über die Hilfeschaltfläche in der Viewer-Symbolleiste und die Hilfemenüaktion geöffnet. Wenn Sie keine URL angeben, werden die Hilfeschaltfläche und die Menüaktion nicht angezeigt.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Ressourcenkontext für Bildstempel:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "Aufgabe",
		admin_daeja_viewonepro_route_docs: "Nicht unterstützten Inhalt an den Browser weiterleiten:",
		admin_daeja_viewonepro_route_docs_hover_help: "Benutzer können nicht unterstützte Bilddateien anzeigen, indem sie sie an den Browser weiterleiten. Dadurch wird die zugehörige Anwendung zum Anzeigen der Datei geöffnet. Beispiel: Zum Öffnen eines Microsoft Word-Dokuments verwendet der Browser den Microsoft Word-Viewer.",
		admin_daeja_viewonepro_scale: "Bild automatisch anpassen:",
		admin_daeja_viewonepro_scale_best: "Beste Anpassung",
		admin_daeja_viewonepro_scale_ftow: "An Breite anpassen",
		admin_daeja_viewonepro_scale_ftoh: "An Höhe anpassen",
		admin_daeja_viewonepro_enable_hotkeys: "Direktaufrufe aktivieren:",
		admin_daeja_viewonepro_show_features: "Schaltflächen und Menüs anzeigen:",
		admin_daeja_custom_settings: "Weitere Einstellungen:",
		admin_daeja_custom_settings_hover_help: "Sie können weitere Parameter hinzufügen, indem Sie den Parameternamen und -wert angeben. Beispiel: Sie können &quot;scrollbars&quot; und &quot;true&quot; angeben, wenn Sie Bildlaufleisten anzeigen wollen, wenn das Bild größer als der Anzeigebereich ist. Weitere Informationen zu Parameternamen und -werten finden Sie in 'IBM Daeja ViewONE Parameters Reference Manual'.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Standard-QuickInfo für benutzerdefinierte Anmerkungen:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Geben Sie den Text ein, der angezeigt wird, wenn keine QuickInfo für eine benutzerdefinierte Anmerkung angegeben ist. Der Text kann ersetzbare Token enthalten. Beispiel: &quot;Diese Anmerkung wurde von &lt;creator&gt; am &lt;createdateonly&gt; erstellt.&quot; Weitere Informationen zu ersetzbaren Token finden Sie bei der Beschreibung des Parameters customAnnotationsToolTip in 'IBM Daeja ViewONE Parameters Reference Manual'.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Vordefinierte QuickInfo verwenden",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Verwenden Sie die im Textfeld unten angezeigte systemdefinierte QuickInfo",
		admin_daeja_virtual_image_stamp_resource_context: "Ressourcenkontext für Bildstempel:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "Aufgabe",
		admin_daeja_virtual_license_path:"Lizenzdateipfad:",
		admin_daeja_virtual_license_path_hover_help:"Geben Sie den vollständig qualifizierten Pfad des Verzeichnisses an, das die Lizenzdateien lic-server-virtual.v1 und lic-server.v1 enthält.",
		admin_default_license_path:"Standardlizenzdateipfad verwenden",
		admin_license_path_specified:"Benutzerdefinierten Lizenzdateipfad verwenden",

		admin_daeja_streamer: "Server",
		admin_daeja_streamer_cache_root: "Cacheverzeichnis:",
		admin_daeja_streamer_cache_root_hover_help: "Geben Sie den vollständig qualifizierten Pfad des Verzeichnisses an, in dem die Cachedateien für schnelleren Zugriff gespeichert werden sollen. Das Verzeichnis kann sich auf einem beliebigen Betriebssystem oder Gerät befinden, etwa einem Netzverzeichnis, sofern es als Dateisystem für IBM Content Navigator und IBM HTTP Server sichtbar ist. Ein lokales Verzeichnis bietet jedoch eine höhere Leistung.",
		admin_daeja_streamer_settings: "Weitere Einstellungen:",
		admin_daeja_streamer_settings_hover_help: "Sie können weitere Parameter hinzufügen, indem Sie den Parameternamen und -wert angeben. Sie können beispielsweise 'cookieAllowedDomainList' und eine durch Kommas getrennte Liste von Host-Servern angeben.  Weitere Informationen zu Parameternamen und -werten finden Sie in 'IBM Daeja ViewONE Parameters Reference Manual'.",

		admin_daeja_redaction: "Permanente Schwärzung",
		admin_daeja_redaction_settings: "Einstellungen:",
		admin_daeja_redaction_settings_hover_help: "Sie können weitere Parameter hinzufügen, indem Sie den Parameternamen und -wert angeben. Sie können beispielsweise 'burnIncrementalAnnotations' und 'true' angeben. Weitere Informationen zu Parameternamen und -werten finden Sie in 'IBM Daeja ViewONE Parameters Reference Manual'.",

		admin_daeja_setting_dialog_title_new: "Neue Einstellung",
		admin_daeja_setting_dialog_title_edit: "Einstellung bearbeiten",
		admin_daeja_setting_dialog_hover_help: "Fügen Sie weitere Parameter hinzu, indem Sie den Parameternamen und -wert angeben. Beispiel: Sie können 'scrollbars' und 'true' angeben, wenn Sie Bildlaufleisten anzeigen wollen, wenn das Bild größer als der Anzeigebereich ist.",
		admin_daeja_setting_dialog_field_hover_help: "Weitere Informationen zu Parameternamen und -werten finden Sie in 'Daeja ViewONE Parameter Reference Manual'.",

		admin_daeja_logging: "Daeja ViewONE-Protokollierung",
		admin_daeja_logging_trace: "Traceprotokollierung aktivieren",
		admin_daeja_logging_trace_net: "Netzwerkprotokollierung aktivieren",
		admin_daeja_logging_trace_annotations: "Anmerkungsprotokollierung aktivieren",
		admin_daeja_logging_log_file: "Protokolldatei:",
		admin_daeja_logging_instructions: "Sie können die Protokollierung zum Beheben von Problemen mit Daeja ViewONE Professional und Daeja ViewONE Virtual verwenden. Wenn Sie wissen, dass ein Problem bei einem bestimmten Feature auftritt, können Sie die Protokollierung gezielt auf dieses Feature anwenden.",

		admin_v1pro_logging_trace_hover: "Verwenden Sie diese Einstellung zur Behebung allgemeiner Probleme mit dem Viewer.<br><br>Die Protokollinformationen werden auf der Java-Konsole des Clientsystems ausgegeben. Sie können auf die Java-Konsole über die Systemsteuerung (Windows) bzw. Systemeinstellungen (Mac) des Betriebssystems zugreifen.",
		admin_v1pro_logging_trace_net_hover: "Verwenden Sie diese Einstellung zur Behebung folgender Probleme:<ul><li>Probleme mit der Serververbindung</li><li>Probleme mit MIME-Typen</li><li>Probleme mit zu langen Dateien</li></ul>Zusätzlich können Sie die Netzwerktraceprotokollierung verwenden, um zu ermitteln, wo bei der Verwendung von Daeja ViewONE Professional Verzögerungen auftreten.<br><br>Die Protokollinformationen werden auf der Java-Konsole des Clientsystems ausgegeben. Sie können auf die Java-Konsole über die Systemsteuerung (Windows) bzw. Systemeinstellungen (Mac) des Betriebssystems zugreifen.",
		admin_v1pro_logging_trace_annotations_hover: "Verwenden Sie diese Einstellung zur Behebung von Problemen beim Erstellen, Speichern oder Laden von Anmerkungen.<br><br>Die Protokollinformationen werden auf der Java-Konsole des Clientsystems ausgegeben. Sie können auf die Java-Konsole über die Systemsteuerung (Windows) bzw. Systemeinstellungen (Mac) des Betriebssystems zugreifen.",

		admin_virtual_logging_trace_hover: "Verwenden Sie diese Einstellung zur Behebung allgemeiner Probleme mit dem Viewer.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'virtual.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_virtual_logging_trace_net_hover: "Verwenden Sie diese Einstellung zur Behebung folgender Probleme:<ul><li>Probleme mit der Serververbindung</li><li>Probleme mit MIME-Typen</li><li>Probleme mit zu langen Dateien</li></ul>Zusätzlich können Sie die Netzwerktraceprotokollierung verwenden, um zu ermitteln, wo bei der Verwendung von Daeja ViewONE Virtual Verzögerungen auftreten.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'virtual.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_virtual_logging_trace_annotations_hover: "Verwenden Sie diese Einstellung zur Behebung von Problemen beim Erstellen, Speichern oder Laden von Anmerkungen.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'virtual.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_virtual_logging_log_file_hover: "Wenn Sie die Protokollierung für den Viewer aktivieren, müssen Sie den vollständig qualifizierten Pfad und den Namen der Protokolldatei angeben, in der die Protokollinformationen gespeichert werden sollen.  Es empfiehlt sich, der Protokolldatei den Namen 'virtual.log' zuzuweisen.",

		admin_streamer_logging_trace_hover: "Verwenden Sie diese Einstellung zur Behebung allgemeiner Probleme mit Document Streaming Server Module.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'streamer.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_streamer_logging_trace_net_hover: "Verwenden Sie diese Einstellung zur Behebung folgender Probleme:<ul><li>Probleme mit der Serververbindung</li><li>Probleme mit bestimmten MIME-Typen</li><li>Probleme mit zu langen Dateien</li></ul>Zusätzlich können Sie die Netzwerktraceprotokollierung verwenden, um zu ermitteln, wo bei der Verwendung von Document Streaming Server Module Verzögerungen auftreten.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'streamer.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_streamer_logging_log_file_hover: "Wenn Sie die Protokollierung für Document Streaming Server Module aktivieren, müssen Sie den vollständig qualifizierten Pfad und den Namen der Protokolldatei angeben, in der die Protokollinformationen gespeichert werden sollen.  Es empfiehlt sich, der Protokolldatei den Namen 'streamer.log' zuzuweisen.",

		admin_redaction_logging_trace_hover: "Verwenden Sie diese Einstellung zur Behebung allgemeiner Probleme mit Permanent Redaction Server Module.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'redacttofile.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_redaction_logging_trace_net_hover: "Verwenden Sie diese Einstellung zur Behebung folgender Probleme:<ul><li>Probleme mit der Serververbindung</li><li>Probleme mit bestimmten MIME-Typen</li><li>Probleme mit zu langen Dateien</li></ul>Zusätzlich können Sie die Netzwerktraceprotokollierung verwenden, um zu ermitteln, wo bei der Verwendung von Permanent Redaction Server Module Verzögerungen auftreten.<br><br>Standardmäßig werden die Protokollinformationen in die Datei 'redacttofile.log' im Unterverzeichnis 'config' des IBM Content Navigator-Installationsverzeichnisses geschrieben.",
		admin_redaction_logging_log_file_hover: "Wenn Sie die Protokollierung für Permanent Redaction Server Module aktivieren, müssen Sie den vollständig qualifizierten Pfad und den Namen der Protokolldatei angeben, in der die Protokollinformationen gespeichert werden sollen.  Es empfiehlt sich, der Protokolldatei den Namen 'redacttofile.log' zuzuweisen.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfigurieren Sie Features für Ihre Viewer und Services.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Wenn Sie mit dem Web-Client die Verbindung zu mindestens einem Content Manager OnDemand-Repository herstellen, müssen Sie Informationen angeben, die OnDemand Web Enablement Kit (ODWEK) für ein ordnungsgemäßes Funktionieren benötigt. Diese Informationen werden von allen Content Manager OnDemand-Repositorys gemeinsam genutzt, die für den Web-Client konfiguriert sind.",
		admin_ondemand_language: "Sprache:",
		admin_ondemand_tempdir: "Temporäres ODWEK-Verzeichnis:",
		admin_ondemand_tracegrp: "ODWEK-Traceverarbeitung",
		admin_ondemand_tracedir: "Traceverzeichnis:",
		admin_ondemand_tracelevel: "Tracestufe:",
		admin_ondemand_tracelevel_0: "0 - Keine Protokollierung",
		admin_ondemand_tracelevel_1: "1 - Protokollierung von Fehlernachrichten",
		admin_ondemand_tracelevel_2: "2 - Protokollierung von Fehlernachrichten und Warnungen",
		admin_ondemand_tracelevel_3: "3 - Protokollierung von Fehlernachrichten, Warnungen und Informationsnachrichten",
		admin_ondemand_tracelevel_4: "4 - Erfassung aller Nachrichten einschließlich Funktionstrace",
		admin_ondemand_max_trace_filesize: "Maximale Größe der Tracedatei:",
		admin_ondemand_max_trace_filesize_unlimited: "Unbegrenzt",
		admin_ondemand_max_trace_filesize_limited: "Begrenzt (empfohlen)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Dieser Wert liegt außerhalb des gültigen Bereichs. Der Wert muss eine Ganzzahl zwischen 1 und 1.000.000 sein.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF-Installationsverzeichnis:",
		admin_ondemand_language_hover: "Geben Sie die Sprache an, in der ODWEK Nachrichten zurückgibt.",
		admin_ondemand_tempdir_hover: "Geben Sie das Verzeichnis ein, in dem OnDemand Web Enablement Kit temporäre Dateien während der Verarbeitung speichert.  Sie müssen den vollständig qualifizierten Pfad eines vorhandenen Verzeichnisses auf dem Webanwendungsserver eingeben.",
		admin_ondemand_tracedir_hover: "Geben Sie das Verzeichnis ein, in dem die ODWEK-Tracedatei arswww.trace gespeichert werden soll. Sie müssen den vollständig qualifizierten Pfad eines vorhandenen Verzeichnisses auf dem Webanwendungsserver eingeben.",
		admin_ondemand_tracelevel_hover: "Geben Sie die Stufe der Protokolldaten an, die in die Datei arswww.trace geschrieben werden. <b>Protokollierung von Fehlernachrichten</b> erfasst die geringste Menge von Protokollierungsinformationen. <b>Erfassung aller Nachrichten einschließlich Funktionstrace</b> erfasst die meisten Informationen.<br /><br />Geben Sie <b>Erfassung aller Nachrichten einschließlich Funktionstraces</b> in einer Produktionsumgebung nur an, wenn Sie vom IBM Software Support hierzu aufgefordert werden.",
		admin_ondemand_max_trace_filesize_hover: "Geben Sie an, ob Sie ermöglichen wollen, dass die ODWEK-Tracedatei unbegrenzt wachsen kann, oder ob der Web-Client neue Protokolldateien erstellen soll, wenn die Protokolldatei eine bestimmte Größe erreicht. Standardmäßig darf die Traceprotokolldatei wachsen, bis die Webanwendung auf dem Webanwendungsserver gestoppt wird.",
		admin_ondemand_max_trace_unlimited_hover: "Wählen Sie diese Option aus, wenn die ODWEK-Traceinformationen in eine einzige Protokolldatei geschrieben werden sollen. Wenn Sie diese Option auswählen, haben Sie möglicherweise eine Protokolldatei, die zu groß ist, um sie mit einem Standarddateiviewer zu öffnen.",
		admin_ondemand_max_trace_limited_hover: "Wählen Sie diese Option aus, wenn die ODWEK-Traceinformationen in kleinere Protokolldateien geschrieben werden sollen. Wenn eine Protokolldatei die maximale Größe erreicht, wird das aktuelle Protokoll umbenannt, sodass das Datum im Namen enthalten ist (arswww.trace.JJJJMMTT.HHMMSS), und es wird eine neue Protokolldatei erstellt.",
		admin_ondemand_afp2pdf_installdir_hover: "Wenn Sie das Dienstprogramm für die AFP2PDF-Umsetzung verwenden wollen, um AFP-Dokumente für die Anzeige und das Drucken in PDF-Dokumente zu konvertieren, geben Sie das Verzeichnis an, in dem das Dienstprogramm auf dem Webanwendungsserver installiert ist. Beispiel: C:\\Programme\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administratoren",
		admin_adminusers_heading_text_multi: "Sie müssen angeben, welche Benutzer Administratorberechtigungen beim Web-Client haben. Nur Administratoren können sich am Verwaltungsdesktop anmelden.<br /><br /><b>Wichtig:</b> Die Benutzer-IDs der IBM Content Navigator-Administratoren müssen übereinstimmen mit:<ul><li>Benutzer-IDs, die auf Ihrem Webanwendungsserver vorhanden sind. Die Benutzer-IDs müssen keine Administratoren auf dem Webanwendungsserver sein.</li><li>Benutzer-IDs Im Standardrepository, das für jeden Desktop konfiguriert ist, der das Feature 'Verwaltung' enthält.</li></ul>",
		admin_adminusers_heading_text_single: "Sie müssen angeben, welche Benutzer über Administratorberechtigungen auf dem Web-Client verfügen. Nur Administratoren können sich am Verwaltungsdesktop anmelden.<br /><br /><b>Wichtig:</b> Die Benutzer-IDs der IBM Content Navigator-Administratoren müssen mit Benutzer-IDs auf Ihrem Webanwendungsserver übereinstimmen. Die Benutzer-IDs müssen keine Administratoren auf dem Webanwendungsserver sein.",
		admin_adminusers_newuser: "Neuer Administrator:",
		admin_adminusers_add: "Hinzufügen",
		admin_adminusers_remove: "Entfernen",
		admin_adminusers_listheading: "Administratoren",
		admin_adminusers_nameInvalid: "Der Wert darf nicht mehrfach vorkommen.",

		admin_sync_server_instructions: "<b>Nur FileNet P8-Benutzer:</b> Wenn Sie Sync Services für mindestens ein Repository verwenden wollen, müssen Sie den Web-Client zur Verwendung von Sync Services konfigurieren. Die Sync Services-Konfiguration wird von allen Repositorys in Ihrer Umgebung gemeinsam genutzt.",
		admin_settings_instructions: "Die Werte, die Sie auf der Registerkarte 'Einstellungen' angeben, gelten für alle Desktops in Ihrer Konfiguration.",
		admin_autocomplete: "Benutzernamen automatisch auffüllen:",
		admin_autocomplete_hover: "Geben Sie an, ob der Web-Client Benutzernamen in Browser-Cookies speichern soll, damit der Browser Benutzernamen im Web-Client bei der Anmeldung automatisch ausfüllen kann.<br><br>Wenn Sie diese Option aktivieren, wird der Benutzername des letzten Benutzers, der sich am Web-Client angemeldet hat, in den Browser-Cookies gespeichert und automatisch auf der Seite 'Anmeldung' angezeigt, wenn ein Benutzer den Web-Client öffnet.<br><br>Sie sollten diese Option inaktivieren, wenn von freigegebenen Workstations auf die Anwendung zugegriffen wird oder wenn Sie Sicherheitsbedenken bezüglich der Speicherung von Benutzernamen in Browser-Cookies haben.<br /><br />Diese Option gilt nicht für mobile oder benutzerdefinierte Anwendungen.",
		admin_autocomplete_enable: "Aktivieren",
		admin_autocomplete_disable: "Inaktivieren",
		admin_cultural_collation: "Länderspezifische Sortierung verwenden:",
		admin_cultural_collation_hover: "Wenn Sie die länderspezifische Sortierung aktivieren, erfolgt die Sortierung auf dem Repository-Server. Hierdurch kann die Leistung des Web-Clients sich verringern.<br><br>Durch die Inaktivierung der länderspezifischen Sortierung kann die Leistung des Web-Clients gesteigert werden.",
		admin_cultural_collation_enable: "Aktivieren",
		admin_cultural_collation_disable: "Inaktivieren",
		admin_base_ui_style: "Motivstil",
		admin_base_ui_style_hover: "Geben Sie den Stil des Standardmotivs an, das im Web-Client verwendet wird. Dieser Stil wird nur auf Desktops verwendet, die das <b>Standardmotiv</b> einsetzen (wie auf der Registerkarte <b>Aussehen</b> der Desktopkonfiguration angegeben).<br/></br><b>Einschränkung:</b> Wenn Ihre Desktopkonfigurationen angepasste Motive verwenden, basieren diese unabhängig von dem von Ihnen ausgewählten Stil auf dem Stil 'Klassisch'.",
		admin_base_ui_style_classic: "Klassisch",
		admin_access_control_access: "Zugriff auf bestimmte Benutzer und Gruppen beschränken",
		admin_access_control_access_show: "Zugriffssteuerungsdaten anzeigen",
		admin_access_control_access_enable: "Ja",
		admin_access_control_access_disable: "Nein",
		admin_mobile_access: "Zugriff über mobile Anwendungen ermöglichen",
		admin_mobile_access_hover: "Standardmäßig können Benutzer über die iOS-Anwendung von IBM Content Navigator auf den Web-Client zugreifen.<br /><br /><b>Wichtig:</b> Wenn Sie Benutzer daran hindern, über die iOS-Anwendung auf den Web-Client zuzugreifen, können sie immer noch über die Web-Browser auf ihren mobilen Einheiten und über benutzerdefinierte Anwendungen, die mit den APIs von IBM Content Navigator geschrieben wurden und auf mobilen Einheiten ausgeführt werden können, auf den Web-Client zugreifen.",
		admin_mobile_access_enable: "Ja",
		admin_mobile_access_disable: "Nein",
		admin_error: "Informationen zu Fehlernachrichten:",
		admin_error_custom: "Angepassten Supportinhalt durchsuchen",
		admin_error_default: "IBM Support-Inhalt durchsuchen <BDO DIR='LTR'>(</BDO>Standard<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Geben Sie an, wohin Benutzer bei Fehlernachrichten für weitere Informationen geleitet werden sollen. Sie können Benutzer zu den Informationen auf dem IBM Support Portal leiten oder sie auf interne Ressourcen wie ein Help-Desk verweisen.",
		admin_error_URL: "URL-Präfix:",
		admin_error_URL_hover: "Geben Sie die URL der Ressource ein, an die Sie Benutzer umleiten wollen, wenn diese auf einen Fehler stoßen, beispielsweise ein Help-Desk. Beispiel: http://localhost:Portnummer. Der Web-Client hängt die Nummer der Nachricht an die URL an.",
		admin_prompt_close_without_save: "Wollen Sie ohne Speichern der Änderungen schließen?",
		admin_object_expiration_time: "Aktualisierungsintervall für Cache (in Minuten):",
		admin_object_expiration_time_hover: "Sie können Konfigurationsobjekte (beispielsweise Desktops) länger im Cache halten, um die Leistung des Web-Clients zu verbessern. Der Standardwert ist 10 Minuten. Das Maximum ist 1440 Minuten (1 Tag).<br /><br />Sie müssen die Webanwendung erneut starten, damit Ihre Änderungen wirksam werden.<br /><br />Wenn IBM Content Navigator in einer Hochverfügbarkeitsclusterumgebung implementiert ist, werden alle an den Konfigurationsobjekten vorgenommenen Änderungen erst an die Knoten im Cluster weitergegeben, wenn der Cache aktualisiert wird.",
		admin_temp_file_cleanup_interval: "Suchintervall zur Bereinigung des Viewer-Cache (in Stunden):",
		admin_temp_file_cleanup_interval_hover: "Planen Sie, wie oft das temporäre Verzeichnis nach abgelaufenen, temporären Dateien durchsucht und diese gelöscht werden sollen. Standardmäßig wird das temporäre Verzeichnis alle 6 Stunden durchsucht. Sie können 6 bis 48 Stunden angeben.",
		admin_temp_file_expiration_interval: "Ablauf des Viewer-Cache (in Stunden):",
		admin_temp_file_expiration_interval_hover: "Geben Sie an, wie lange temporäre Dateien zu im Viewer ausgeführten Aktivitäten im Browser-Cache verbleiben sollen. Standardmäßig laufen diese temporären Dateien nach 24 Stunden ab. Sie können 12 bis 48 Stunden angeben.",
		admin_encryption_key_hover: "Für Navigator-Verschlüsselungsfunktionen verwendeter Schlüssel.",
		admin_encryption_key: "Chiffrierschlüssel:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Branding",
		admin_mobile_branding_main_color: "Hauptfarbe:",
		admin_mobile_branding_secondary_color: "Sekundärfarbe:",
		admin_mobile_device_title: "MaaS360-Management",
		admin_mobile_device_enable_maas360: "MaaS360 aktivieren:",
		admin_mobile_device_enable_maas360_hover_help: "MaaS360-Kurzinfo hier aktivieren",
		admin_mobile_device_maas360_developer_id: "MaaS360-Entwickler-ID:",
		admin_mobile_device_maas360_license_key: "MaaS360-Lizenzschlüssel:",
		admin_mobile_settings_title: "Einstellungen",
		admin_mobile_email_address_hover_help: "Die E-Mail-Adresse wird in der mobilen Anwendung verwendet, wenn ein Benutzer auf \"Fehlerbericht senden\" klickt.",
		admin_mobile_email_address: "E-Mail-Adresse:",
		admin_invalid_email_address_message: "Das Format der von Ihnen eingegebenen E-Mail-Adresse ist nicht korrekt. Geben Sie die korrekte Adresse ein und versuchen Sie es erneut.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Einige Daten sind ungültig.",
		admin_configuration_parameters: "Konfigurationsparameter",
		admin_configuration_optional_features: "Optionale Features",
		admin_configuration_optional_features_p8_instructions: "Wählen Sie die Features aus, die Sie in diesem Repository aktivieren wollen.<p><b>Wichtig:</b> Wenn Sie ein Feature aktivieren, von dem ein Add-on im Repository installiert wird, muss eine Verbindung zum Repository als Content Platform Engine- oder Content Engine-Administrator bestehen.</p>",
		admin_configuration_optional_features_cm_instructions: "Wählen Sie die Features aus, die Sie in diesem Repository aktivieren wollen.<p><b>Wichtig:</b> Durch diese Features wird das Datenmodell im Repository geändert. Wollen Sie sie aktivieren, muss eine Verbindung zum Repository als Bibliotheksserveradministrator bestehen.</p>",
		admin_system_properties: "Systemeigenschaften",
		admin_system_properties_for: "Systemeigenschaften für:",
		admin_available_properties: "Verfügbare Eigenschaften",
		admin_displayed_properties: "Angezeigte Eigenschaften",
		admin_selected_properties: "Ausgewählte Eigenschaften",
		admin_selected_filtered_properties: "Ausgeblendete Eigenschaften",
		admin_available_operators: "Angezeigte Operatoren",
		admin_selected_filtered_operators: "Ausgeblendete Operatoren",
		admin_system_properties_shown: "Angezeigte Eigenschaften",
		admin_system_properties_hidden: "Ausgeblendete Eigenschaften",
		admin_available_menu_items: "Verfügbare Aktionen:",
		admin_selected_menu_items: "Ausgewählte Aktionen:",
		admin_menu_global: "Gilt, wenn keine Elemente ausgewählt sind:",
		admin_menu_multiple_document: "Gilt, wenn mehrere Elemente ausgewählt sind:",
		admin_menu_privileges: "Erforderliche Berechtigungen:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Repository-Typen:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Trennzeichen",
		admin_browse: "Durchsuchen",
		admin_search: "Suchen",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Rollenbasierte Schwärzung",
		admin_connections_library_enabled: "IBM Connections aktiviert",
		admin_office_conf: "Edit-Integration",
		admin_desktop_conf_label: "Desktopkonfiguration",
		admin_ms_office_conf_label: "Office-Konfiguration",
		admin_workflows: "Workflows",
		admin_file_types: "Dateitypen",
		admin_file_type_contains_label: "Dateityp enthält",
		admin_name_propepty: "Name",
		admin_cm_name_property_default: "Standardnamen verwenden",
		admin_cm_name_property_default_hover: "Standardmäßig wird die Eigenschaft für den hierarchischen ICM-Namen (ICM$NAME) als Elementname verwendet, wenn die Eigenschaft für das Element definiert ist.  Wenn die Eigenschaft für den hierarchischen ICM-Namen (ICM$NAME) nicht verfügbar ist, wird die erste Eigenschaft, die mit \"represents\" markiert ist, als Elementname verwendet.",
		admin_cm_name_property: "Elementnamenseigenschaft angeben",
		admin_cm_name_property_hover: "Geben Sie an, welche Eigenschaft als Name für Dokumente und Ordner verwendet wird.",
		admin_name_property: "Namenseigenschaft:",
		admin_doc_name_property: "Dokumentnamenseigenschaft:",
		admin_doc_name_property_hover: "Geben Sie an, welche Eigenschaft als Dokumentname verwendet wird.",
		admin_folder_name_property: "Ordnernamenseigenschaft:",
		admin_folder_name_property_hover: "Geben Sie an, welche Eigenschaft als Ordnername verwendet wird.",
		admin_all_searches_label: "Anzahl anzuzeigender Suchen:",
		admin_unlimited: "Keine Begrenzung",
		admin_limit: "Begrenzung auf",
		admin_repository: "Repository:",
		admin_application_space: "Anwendungsspeicherbereich",
		admin_available_application_spaces: "Verfügbare Anwendungsspeicherbereiche:",
		admin_selected_application_spaces: "Ausgewählte Anwendungsspeicherbereiche:",
		admin_label: "Bezeichnung",
		admin_repository_box_placeholder: "Box-Repository auswählen",
		admin_repository_placeholder: "Repository auswählen",
		admin_search_match: "Übereinstimmung mit:",
		admin_search_match_all: "Übereinstimmung mit allen Suchkriterien",
		admin_search_match_any: "Übereinstimmung mit beliebigen Suchkriterien",
		admin_search_match_hover: "Geben Sie an, welche Option im Menü <b>Eigenschaftsoptionen</b> standardmäßig ausgewählt ist.",

		admin_repository_redactions_instructions: "Sie können rollenbasierte Schwärzungen für dieses Repository konfigurieren.",
		admin_repository_redaction_policies_description: "Sie können Schwärzungsrichtlinien erstellen und verwalten, die Schwärzungsgründe den Benutzern und Gruppen zuordnen, die sensible Daten lesen können und Anmerkungen, die das Anzeigen dieser sensiblen Daten verhindern, bearbeiten können.",
		admin_repository_redaction_roles_instruction: "Sie können eine Schwärzungsrolle erstellen, um den angegebenen Benutzern und Gruppen die Möglichkeit zum Lesen sensibler Daten oder die Möglichkeit zum Bearbeiten von Anmerkungen zuzuordnen, durch die das Anzeigen dieser sensiblen Daten verhindert wird. Die Schwärzungsrolle muss einem Schwärzungsgrund in einer Schwärzungsrichtlinie zugeordnet sein, bevor die entsprechenden Benutzer und Gruppen die Daten lesen oder die Anmerkungen bearbeiten können.",
		admin_repository_redaction_reasons_instruction: "Sie können Schwärzungsgründe für Ihr Repository konfigurieren.",
		admin_repository_redaction_policies: "Konfiguration von Schwärzungsrichtlinien",
		admin_repository_redaction_roles: "Konfiguration von Schwärzungsrollen",
		admin_repository_redaction_reasons: "Konfiguration von Schwärzungsgründen",
		admin_repository_redaction_roles_type: "Typ",
		admin_repository_redaction_roles_type_hover: "Ein Bearbeiter kann bestimmte Typen von rollenbasierten Schwärzungen erstellen, ändern oder löschen, während ein Anzeigeberechtigter sich bestimmte Typen sensibler Daten ansehen kann.",
		admin_repository_redaction_roles_type_editor: "Bearbeiter",
		admin_repository_redaction_roles_type_viewer: "Viewer",
		admin_repository_redaction_roles_membership: "Zugehörigkeit",
		admin_repository_redaction_roles_membership_hover: "Wählen Sie die Bearbeiter aus, denen Sie diese Rolle zuweisen wollen.",
		admin_repository_redaction_roles_user_group_hover: "Suchen Sie nach den Benutzern und Gruppen oder wählen Sie die Bearbeiter aus, denen Sie diese Rolle zuweisen wollen.",
		admin_repository_redaction_roles_description: "Sie können Schwärzungsrollen erstellen und verwalten, die Benutzern und Gruppen die Möglichkeit zum Lesen sensibler Daten und zum Bearbeiten von Anmerkungen zuordnen, die das Anzeigen sensibler Daten verhindern.",
		admin_repository_redaction_new: "Neue Schwärzungsrolle",
		admin_repository_redaction_role_avail_editors: "Verfügbare Bearbeiter für Schwärzungen",
		admin_repository_redaction_role_avail_users: "Verfügbare Benutzer",
		admin_repository_redaction_role_avail_groups: "Verfügbare Gruppen",
		admin_repository_redaction_role_selected_editors: "Ausgewählte Bearbeiter für Schwärzungen",
		admin_repository_redaction_role_selected_users_groups: "Ausgewählte Benutzer und Gruppen",
		admin_repository_redaction_role_add_editor: "Neue Bearbeiter...",
		admin_repository_redaction_role_access_type: "Zugriff",
		admin_repository_redaction_role_access_type_access: "Zulassen",
		admin_repository_redaction_role_access_type_no_access: "Verweigern",
		admin_repository_redaction_role_users: "Benutzer",
		admin_repository_redaction_role_groups: "Gruppen",
		admin_repository_redaction_role_editors: "Bearbeiter",
		admin_delete_confirmation_redaction_roles: "Soll die ausgewählte Schwärzungsrolle gelöscht werden?",
		admin_repository_edit_redaction_role: "Schwärzungsrolle: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Standardzugriff",
		// RBA
		desktop_user_group_acl: "Desktopadministratoren",
		desktop_user_group_remove: "Entfernen",
		desktop_rba_membership: "Zugehörigkeit:",
		desktop_rba_membership_list_label: "Name",
		admin_repository_redaction_policy_hover: "Stellen Sie eine Beschreibung bereit, die die Benutzer in die Lage versetzt, zwischen dieser Richtlinie und den anderen Richtlinien zu unterscheiden.",
		admin_repository_new_redaction_policy: "Neue Schwärzungsrichtlinie",
		admin_repository_policy_name: "Richtlinienname",
		admin_repository_reason_redactions: "Schwärzungsgründe:",
		admin_repository_role_editors: "Bearbeiter",
		admin_repository_role_viewers: "Anzeigeberechtigte",
		admin_repository_redaction_policy_instruction: "Sie können eine Schwärzungsrichtlinie erstellen, um die ausgewählten Gründe für die Schwärzung sowohl den Bearbeitern als auch den Anzeigeberechtigten für Schwärzungen zuzuordnen.",
		admin_repository_redaction_reasons_hover: "Wählen Sie einen der Typen sensibler Daten aus, die den meisten Benutzern nicht angezeigt werden sollen, wie zum Beispiel personenbezogene Daten, Geschäftsgeheimnisse oder vertrauliche bzw. urheberrechtlich geschützte Informationen Ihres Unternehmens.",
		admin_repository_readaction_available_reasons: "Verfügbare Gründe",
		admin_repository_readaction_selected_reasons: "Ausgewählte Gründe",
		admin_repository_readaction_new_reason: "Neuer Grund...",
		admin_repository_redeaction_reasons: "Schwärzungsgründe:",
		admin_repository_readaction_editor_permmission: "Bearbeiter für Schwärzungen:",
		admin_repository_redaction_editors_hover: "Wählen Sie die Rollen aus, mit denen die Schwärzung aus den angegebenen Gründen erstellt oder geändert werden kann.",
		admin_repository_readaction_new_editor_role: "Neue Bearbeiterrolle...",
		admin_repository_readaction_available_editors: "Verfügbare Bearbeiterrollen",
		admin_repository_readaction_selected_editors: "Ausgewählte Bearbeiterrollen",
		admin_repository_readaction_viewer_permmission: "Anzeigeberechtigte für Schwärzungen:",
		admin_repository_redaction_viewers_hover: "Wählen Sie die Rollen aus, mit denen die sensiblen Daten aus den angegebenen Gründen angezeigt werden können. Die Schwärzung wird nicht bei Benutzern und Gruppen mit diesen Rollen angewendet.",
		admin_repository_readaction_new_viewer_role: "Neue Rolle für Anzeigeberechtigte...",
		admin_repository_readaction_available_viewers: "Verfügbare Rollen für Anzeigeberechtigte",
		admin_repository_readaction_selected_viewers: "Ausgewählte Rollen für Anzeigeberechtigte",
		admin_repository_reason_redactions_header: "Schwärzungsgründe",
		admin_delete_confirmation_redaction_policy: "Soll die ausgewählte Schwärzungsrichtlinie gelöscht werden?",
		admin_role_type_repository: "Repository",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Vorlage",
		admin_role_type_teamspace: "Teamarbeitsbereich",
		admin_role_type_author: "Bearbeiter",
		admin_role_type_user: "Viewer",
		admin_collaboration_services_instructions: "Wenn Sie IBM Connections und eine FileNet Collaboration Services-Webanwendung haben, können Sie Community-Teamarbeitsbereiche und Aktivitätsströme für das Repository konfigurieren.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Community-Bibliothekskonfiguration",
		admin_collaboration_community_instruction: "Sie können ein Repository in der IBM FileNet P8-Domäne zum Speichern der Community-Bibliotheken von IBM Connections (auch als Teamarbeitsbereiche bezeichnet) verwenden. Wenn Benutzer eine Community-Bibliothek über IBM Connections erstellen, wird sie in dem Repository gespeichert, das als Repository für die Community-Bibliothek definiert ist.",
		admin_collaboration_community_teamspaces: "Folgendes Repository für Community-Bibliotheken verwenden:",
		admin_collaboration_community_teamspaces_hover: "Sie können nur ein Repository in der IBM FileNet P8-Domäne zum Speichern neuer Community-Bibliotheken verwenden. Wenn Sie dieses Repository aktivieren und bereits ein Repository vorhanden ist, wird das vorhandene Repository inaktiviert. Vorhandene Bibliotheken verbleiben jedoch im aktuellen Repository.",
		admin_collaboration_connections_anonymous: "Anonymen Zugriff auf öffentlichen Inhalt ermöglichen:",
		admin_collaboration_connections_anonymous_hover: "Wenn Ihr IBM Connections-Server öffentliche oder moderierte Communitys enthält, können Sie FileNet Collaboration Services so konfigurieren, dass die Benutzer die Bibliotheken in diesen Communitys durchsuchen und Inhalt daraus herunterladen können, ohne sich zuvor anmelden zu müssen.<br><br>Benutzer, die auf Community-Bibliotheken zugreifen, können keinen Inhalt erstellen, ändern oder löschen.<br><br><b>Wichtig:</b> Sie müssen einen IBM FileNet P8-LDAP-Benutzer als anonymen Benutzer festlegen und diesen mit der Rolle <b>Anonym</b> im WebSphere Application Server konfigurieren.",
		admin_collaboration_connections_url: "URL für IBM Connections:",
		admin_collaboration_connections_url_hover: "Geben Sie die URL für Ihren IBM Connections-Server im Format http://IBMConnectionsServer:Portnummer an.  Falls IBM Connections zur Verwendung von IBM HTTP Server konfiguriert ist, können Sie die Portnummer in der URL weglassen.<br><br>Die URL muss für IBM Connections-Benutzer zugänglich sein, weil dieser Link von FileNet Collaboration Services verwendet wird, um Links zu Dokument-Landing-Pages in IBM Connections zu erstellen.",
		admin_collaboration_connections_url_http_use: "URL für IBM Connections verwenden",
		admin_collaboration_connections_url_https_use: "HTTPS-URL für IBM Connections verwenden",
		admin_collaboration_connections_url_specify: "URL angeben",
		admin_collaboration_connections_url_https: "HTTPS-URL für IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Falls IBM Connections zur Verwendung von SSL konfiguriert ist, geben Sie die HTTPS-URL zum IBM Connections-Server im Format https://IBMConnectionsServer:Portnummer an.  Falls IBM Connections zur Verwendung von IBM HTTP Server konfiguriert ist, können Sie die Portnummer in der URL weglassen.",

		admin_collaboration_connections_gadget_url: "Gadget-URL für IBM Connections:",
		admin_collaboration_connections_retrieval_url: "Abfrage-URL für IBM Connections:",
		admin_collaboration_connections_security: "Community-Administratoren:",
		admin_collaboration_connections_security_hover: "Geben Sie die Benutzer und Gruppen, die Inhalt in Community-Bibliotheken verwalten können.<br><br>Globale Administratoren können Community-Bibliotheken und deren Inhalte erstellen, ändern, löschen und Zugriff darauf erteilen. Wenn Sie einen Benutzer als globalen Administrator angeben, erhält dieser ClbGlobalAdministrator-Berechtigungen im Repository.<br><br>Globale Prüfadministratoren können Inhalt genehmigen und ablehnen, der zur Veröffentlichung in einer Community-Bibliothek in Prüfung ist. Wenn Sie einen Benutzer als globalen Prüfadministrator angeben, erhält dieser ClbGloablReviewAdministrator-Berechtigungen im Repository.",

		admin_collaboration_connections_admins: "Globale Administratoren",
		admin_collaboration_connections_admins_review: "Globale Prüfadministratoren",
		admin_collaboration_connections_seedlist: "Inhalte der Community-Bibliothek indizieren:",
		admin_collaboration_connections_seedlist_hover: "Geben Sie an, ob IBM Connections die Community-Bibliotheken in diesem Repository durchsuchen soll, um einen Suchindex zu erstellen. Die Erstellung eines Indexes kann sich auf die Leistung des Repositorys auswirken.<br><br>Falls das Add-on-Feature 'Social Collaboration Search Indexing Extensions' im Repository installiert ist, ist diese Option standardmäßig aktiviert. Falls 'Social Collaboration Search Indexing Extensions' nicht im Repository installiert ist, wird das Add-on-Feature im Repository installiert, wenn Sie diese Option aktivieren.",
		admin_collaboration_activity_stream: "Ereigniskonfiguration für Aktivitätsdatenströme",
		admin_collaboration_activity_stream_label: "Ereignisdaten mit Push-Operation an IBM Connections übertragen:",
		admin_collaboration_activity_stream_label_hover: "Geben Sie an, ob Sie Ereignisdaten wie Dokumenterstellung, Auschecken, Einchecken, Kommentare, Tags und Freigaben mit Push-Operation an IBM Connections übertragen möchten.<br><br><b>Wichtig:</b> Die Übertragung von Benachrichtigungen an IBM Connections mit Push-Operation kann sich auf die Leistung des Repositorys auswirken.",

		admin_collaboration_activity_stream_instruction: "Sie können dieses Repository zum Übertragen von Ereignisdaten wie Kommentare und Dokumentgenehmigungen an IBM Connections mit Push-Operation konfigurieren. Ereignisse werden auf der Seite für neue Aktualisierungen<b></b> in IBM Connections-Communitys angezeigt. ",
		admin_collaboration_activity_stream_ignored_ids: "Ereignisdaten für bestimmte Benutzer und Gruppen ignorieren:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Sie können Ereignisse ignorieren, die von bestimmten Benutzern oder Gruppen wie Administratoren oder Systemaccounts generiert werden, um die Anzahl der Benachrichtigungen zu verringern, die Benutzer sehen. Beispiel: Wenn Sie Inhalt migrieren, können Sie angeben, dass die von dem für die Migration verwendeten Account generierten Ereignisse ignoriert werden.",
		admin_collaboration_activity_stream_userid: "IBM Connections-Benutzername:",
		admin_collaboration_activity_stream_userid_hover: "Geben Sie den Systemaccount an, der von Content Platform Engine für die Authentifizierung und zum Senden von Ereignisdaten an IBM Connections verwendet wird. Der Benutzer muss die Rolle <b>trustedExternalApplication</b> in der Widget Container-Anwendung in IBM Connections haben.<br><br><b>Tipp:</b> Standardmäßig verfügt der IBM Connections-Administrator über entsprechende Berechtigungen. Sie können die Administrator-ID als Benutzernamen verwenden.",
		admin_collaboration_activity_stream_password: "IBM Connections-Benutzerkennwort:",

		admin_help_url: "URL der Endbenutzerhilfe:",
		admin_help_url_hover: "<b>Wichtiger Hinweis:</b> Das vom Kunden installierte IBM Knowledge Center wird ab IBM Content Navigator Version 3.0.0 nicht mehr aktualisiert. Weitere Informationen zur Verwendung der angepassten Hilfe erhalten Sie beim Kundenservice.<br><br>Ab IBM Content Navigator Version 3.0.0 wird über die URL für die Benutzerhilfe das IBM Knowledge Center aufgerufen. Die URL für das IBM Knowledge Center ist: http://www.ibm.com/support/knowledgecenter.<br><br>Falls Sie die Vorgängerversion des vom Kunden installierten IBM Knowledge Center weiter verwenden wollen, geben Sie die URL für die vom Kunden installierte Instanz des IBM Knowledge Center an, die mit IBM Content Navigator Configuration and Deployment Tool implementiert wurde. Die URL muss für Clientsysteme zugänglich sein. Die URL hat das Format http://Servername:Portnummer/kc.<br><br>Den Servernamen und -port finden Sie in der Datei console.log im Unterverzeichnis KnowledgeCenter/logs des IBM Content Navigator-Installationsverzeichnisses.",

		admin_help_default: "Von IBM bereitgestellte Standardhilfe verwenden",
		admin_custom_help: "Angepasstes Hilfesystem verwenden",
		admin_help_kc: "Angepasste Hilfe im vom Kunden installierten IBM Knowledge Center verwenden",
		admin_help_kc_hover: "<b>Wichtiger Hinweis:</b> Das vom Kunden installierte IBM Knowledge Center wird ab IBM Content Navigator Version 3.0.0 nicht mehr aktualisiert. Weitere Informationen zur Verwendung der angepassten Hilfe erhalten Sie beim Kundenservice.<br><br>Falls Sie die Vorgängerversion des vom Kunden installierten IBM Knowledge Center weiter verwenden wollen, wählen Sie diese Option aus, um der von Ihnen zuvor implementierten Version des vom Kunden installierten IBM Knowledge Center Inhalt hinzuzufügen.",
		admin_help_taxonomy: "Taxonomiecode:",
		admin_help_taxonomy_hover: "Geben Sie den Taxonomiecode für die angepasste Hilfe an.<br><br>Der Taxonomiecode für IBM Content Navigator ist SSEUEX. Wenn Sie die Hilfe unter einem anderen Produktnamen im vom Kunden installierten IBM Knowledge Center anzeigen wollen, müssen Sie der Datei KC_taxonomy.ditamap im Verzeichnis KnowledgeCenter/usr/taxonomy des IBM Content Navigator-Installationsverzeichnisses einen eindeutigen Taxonomiecode hinzufügen.",
		admin_help_context: "Hilfekontext:",
		admin_help_context_hover: "Geben Sie den Kontext für die angepasste Hilfe an.<br><br>Die Hilfe für IBM Content Navigator befindet sich im Verzeichnis KnowledgeCenter/usr/content/com.ibm.usingeuc.doc des IBM Content Navigator-Installationsverzeichnisses. Der Kontext der Standardhilfe ist com.ibm.usingeuc.doc. Wenn Sie angepasste Hilfe bereitstellen wollen, fügen Sie den Inhalt einem neuen Unterverzeichnis im Verzeichnis KnowledgeCenter/usr/content/ hinzu.",
		admin_help_welcome: "Landing-Page:",
		admin_help_welcome_hover: "Geben Sie den Namen des Themas an, das Sie als Landing-Page verwenden wollen, wenn Benutzer die Hilfe aufrufen. Sie müssen eine Eigenschaftendatei erstellen, in der die Position der Landing-Page angegeben ist, und die Eigenschaftendatei dem Verzeichnis KnowledgeCenter/usr/conf des IBM Content Navigator-Installationsverzeichnisses hinzufügen.",

		admin_settings_mimetype_extensions_jsonfile: "JSON-Datei für MIME-Typ-Erweiterungen:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Überprüfen Sie den Namen der JSON-Datei und den vollständigen Pfad zu dieser Datei. Bei dieser Datei kann es sich um eine allgemeine Datei aus dem Dateisystem oder um eine URL handeln, die auf die JSON-Datei verweist.  <br><br>Der Inhalt der JSON-Datei ist ein Array für MIME-Typ-Definitionen. <br><br>Eine MIME-Typ-Definition enthält die vier Schlüssel \"mimeTypes\", \"extensions\", \"fileType\" und \"iconName\". Die ersten beiden Schlüssel, \"mimeTypes\" und \"extensions\", sind erforderlich und können durch \",\" getrennte Zeichenfolgenarrays sein. Die letzten beiden Schlüsse, \"fileType\" und \"iconName\", sind optional. <br><br>Beispiel: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Task-Manager-Konfiguration",
		admin_taskmanager_service: "Task-Manager-Service:",
		admin_taskmanager_service_hover: "Geben Sie an, ob Sie den Task-Manager-Service zum Erstellen und Ausführen asynchroner Tasks verwenden wollen. <br><br>Wenn Sie diese Einstellung ändern, müssen Sie die IBM Content Navigator-Webanwendung erneut starten, damit die Änderungen wirksam werden.",
		admin_taskmanager_url: "URL für Task-Manager-Service:",
		admin_taskmanager_url_hover: "Geben Sie die URL an, über die andere Anwendungen mit dem Task-Manager-Service kommunizieren können. Die URL hat das Format http://Servername:Portnummer/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Task-Manager-Protokollverzeichnis:",
		admin_taskmanager_logdirectory_hover: "Standardmäßig werden die Protokolldateien für den Task-Manager-Service in das gleiche Verzeichnis geschrieben wie die Protokolldateien für den Webanwendungsserver. <br><br>Sollen die Protokollinformationen in ein anderes Verzeichnis auf dem IBM Content Navigator-Server geschrieben werden, geben Sie den vollständig qualifizierten Pfad des Verzeichnisses an, in dem Sie die Protokolldateien speichern wollen, die von der Task-Manager-Komponente generiert werden. <br><br>Wenn Sie diese Einstellung ändern, müssen Sie die IBM Content Navigator-Webanwendung erneut starten, damit die Änderungen wirksam werden.",
		admin_taskmanager_heartBeatMonitor: "Cluster-Heartbeat-Monitoring",
		admin_taskmanager_heartBeatMonitor_hover: "Nur Clusterumgebung mit hoher Verfügbarkeit. Wenn Sie diese Option aktivieren, leitet der Task-Manager-Service Tasks von derzeit inaktiven Knoten zu derzeit aktiven Knoten um. <br><br>Wenn Sie diese Einstellung ändern, müssen Sie die IBM Content Navigator-Webanwendung erneut starten, damit die Änderungen wirksam werden.",

		admin_syncserver_title: "Synchronisationsserverkonfiguration",
		admin_syncserver_enable: "Sync Services:",
		admin_syncserver_enable_hover: "Geben Sie an, ob Benutzer, die auf diesen Desktop zugreifen, ihre Elemente auf ihren Workstations und mobilen Geräten synchronisieren dürfen.<br><br><b>Wichtig:</b> Zur Verwendung dieses Features müssen Sie auch die folgenden Aufgaben ausführen:<ul><li>Geben Sie die <b>Öffentliche URL für Sync Services</b> im Abschnitt <b>Sync Services</b> des Verwaltungstools an.</li><li>Fügen Sie diesem Desktop ein Repository hinzu, für das die Sync Services aktiviert sind.</li></ul>Wenn Sie diese Option inaktivieren, aber diesem Desktop ein Repository hinzufügen, für das die Sync Services aktiviert sind, wird die Einstellung für das Repository ignoriert.",
		admin_mobileqr_enable: "IBM Navigator-QR-Code auf Anmeldeseite anzeigen:",
		admin_mobileqr_enable_hover: "Aktivieren Sie diese Option, wenn der QR-Code für IBM Navigator Mobile auf der Anmeldeseite des Web-Clients angezeigt werden soll.<br><br>Wenn ein Benutzer den QR-Code scannt, wird der App Store für ihr Gerät aufgerufen, aus dem sie IBM Navigator Mobile herunterladen können.",

		admin_streamlineservice_enable: "Edit Service:",
		admin_streamlineservice_enable_hover: "Nur FileNet P8-Benutzer. Aktivieren Sie diese Option, wenn Sie Benutzern das einfache Hinzufügen und Bearbeiten von Dokumenten über native Anwendungen ihrer Workstations erlauben wollen. <br><br>Damit diese Einstellung verwendet werden kann, ist außerdem Folgendes erforderlich: <ul><li>Aktivieren Sie Edit Service in mindestens einem Repository, das diesem Desktop zugeordnet ist.</li><li>Installieren Sie den IBM Content Navigator Edit-Client auf Benutzerworkstations.</li></ul>",

		admin_repository_general_instructions: "Sie müssen eine Verbindung zum Repository herstellen, bevor Sie Parameter, Systemeigenschaften, Ordner usw. konfigurieren.",
		admin_repository_system_instructions: "Geben Sie an, welche Systemeigenschaften für die Dokumente und Ordner in diesem Repository angezeigt werden.",

		admin_desktop_general_create_instructions: "Ein Desktop legt fest, was der Benutzer anzeigen und ausführen kann, wenn er sich am Web-Client anmeldet. Nachdem Sie einen Desktop erstellt haben, können Sie seine URL an Benutzer senden, damit sie Zugriff auf ihn haben.",
		admin_desktop_admin_instructions: "Der Verwaltungsdesktop wird mit dem Web-Client bereitgestellt, damit Benutzer mit Verwaltungsaufgaben den Web-Client einrichten können. Dieser Desktop hat Zugriff auf alle Repositorys, die für den Web-Client konfiguriert sind.",
		admin_desktop_repositories_instructions: "Geben Sie an, auf welche Repositorys Benutzer über diesen Desktop Zugriff haben sollen. Sie müssen Ihre Repositorys konfigurieren, bevor Sie sie dem Desktop hinzufügen können.<br><br><b>Tipp:</b> Sie können einschränken, welche Repositorys für welches Feature verfügbar sind, wenn Sie das Desktoplayout konfigurieren.",
		admin_desktop_menus_instructions: "Geben Sie an, auf welche Menüs Benutzer über diesen Desktop Zugriff haben sollen. Die Menüs geben je nach in der Schnittstelle ausgewählten Optionen an, welche Aktionen verfügbar sind.<br><br><b>Tipp:</b> Sie können den Inhalt von Menüs im Abschnitt <b>Menüs</b> des Verwaltungstools anpassen oder Sie können neue Typen von Menüs durch Erzeugen von Plug-ins erstellen.",

		admin_desktop_no_repositories: "Es sind keine Repositorys konfiguriert.",

		admin_desktop_id_hover: "Die Desktop-ID ist in der Web-Client-URL enthalten und gibt an, welcher Desktop geöffnet wird, wenn ein Benutzer sich am Web-Client anmeldet. Die ID muss eindeutig sein und Sie können sie nicht ändern, nachdem Sie den Desktop gespeichert haben.<br><br>Die ID darf nur alphanumerische Zeichen enthalten und die Groß-/Kleinschreibung muss beachtet werden.",
		admin_desktop_id_disabled_hover: "Die Desktop-ID kann nicht geändert werden. Wenn Sie eine andere ID verwenden wollen, müssen Sie einen neuen Desktop erstellen.",
		admin_desktop_name_hover: "Der Desktopname darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Ihre Konfiguration kann nur einen einzigen Standarddesktop enthalten.",

		admin_repository_id_disabled_hover: "Die Repository-ID kann nicht geändert werden. Wenn Sie eine andere ID verwenden wollen, müssen Sie eine neue Repository-Verbindung erstellen.",
		admin_printService_enable: "Mit IBM Daeja ViewONE-Druckservice drucken:",
		admin_printService_enable_hover: "Wenn Sie den IBM Daeja ViewONE-Druckservice aktivieren, werden die Dokumente in das PDF-Format konvertiert und können dann über einen beliebigen Web-Browser gedruckt werden.<br><br>Falls Sie den IBM Daeja ViewONE-Druckservice inaktivieren, können Sie die Dokumente nur in Web-Browsern drucken, die Java-Applets unterstützen.  Einige Web-Browser unterstützen keine Java-Applets und unterstützen daher auch nicht das Drucken über Applets.<br><br>Informationen zu den unterstützten Browsern finden Sie in der Dokumentation.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Ausgangsverzeichnis für Benutzer",
		admin_file_tracking_doc_directory_my_documents: "Dokumentverzeichnis für Benutzer",
		admin_file_tracking_doc_directory_qp: "Qualifizierter Pfad",
		admin_file_tracking_section_tile: "Dateiverfolgungskonfiguration",
		admin_file_tracking_home_path: "Startpfad",
		admin_file_tracking_my_documents: "Eigene Dokumente",
		admin_file_tracking_exact_path: "Vollständig qualifizierter Pfad:",
		admin_file_tracking_qp: "Qualifizierter Pfad",
		admin_file_tracking_ev: "Umgebungsvariable",
		admin_file_tracking_ev_us: "Angepasste Umgebungsvariable ",
		admin_file_tracking_del_local_copy: "Lokale Kopie löschen:",
		admin_file_tracking_yes: "Ja",
		admin_file_tracking_no: "Nein",
		admin_file_tracking_del_local_copy_rt_state_editable: "Benutzern erlauben, diese Einstellung zu überschreiben",
		admin_file_tracking_del_local_copy_rt_state1: "Ja",
		admin_file_tracking_del_local_copy_rt_state2: "Nein",
		admin_file_Tracking_label: "Dateiverfolgung:",
		admin_file_Tracking_disable: "Inaktivieren",
		admin_file_Tracking_enable: "Aktivieren",
		admin_file_tracking_label_hover_help: "Bei der Dateiverfolgung wird ein Applet verwendet, um Dokumente auszuchecken und in ein bestimmtes Verzeichnis auf den Systemen der Benutzer herunterzuladen. Das Applet ermöglicht außerdem IBM Content Navigator, Dokumente auf den Systemen der Benutzer zu finden, wenn diese Dokumente einchecken.",
		admin_file_tracking_doc_directory: "Speicherort:",
		admin_file_tracking_open_file: "Datei automatisch öffnen",
		admin_file_Tracking_append_qualified_path: "Verzeichnis anhängen",
		admin_file_Tracking_append_qualified_path_hover_help: "Sie können ein Verzeichnis am Ende der Umgebungsvariablen anhängen, wenn Dokumente in einem bestimmten Unterverzeichnis gespeichert werden sollen. <br/><br/>Sie können z. B. angeben, dass Dokumente in das Verzeichnis <i>EnterpriseDocuments</i> im Ausgangsverzeichnis des Benutzers herunterladen werden.",
		admin_file_Tracking_append_ev: "Umgebungsvariable anhängen",
		admin_file_Tracking_append_ev_hover_help: "Sie können eine Umgebungsvariable anhängen, wenn Dokumente in einem dynamisch angegebenen Verzeichnis wie einem Benutzerverzeichnis gespeichert werden sollen.<br/><br/>Sie können z. B. angeben, dass Dokumente im Unterverzeichnis <i>Benutzername</i> auf einem freigegebenen Netzverzeichnis gespeichert werden. ",
		admin_file_tracking_doc_directory_hover_help: "Geben Sie an, wo Dokumente gespeichert werden sollen, wenn sie ausgecheckt und heruntergeladen werden.<br/><br/> <b>Tipp</b>: Wenn Sie Dokumente im Ausgangsverzeichnis des Benutzers oder in einem Standarddokumentverzeichnis speichern möchten, wählen Sie <b>Umgebungsvariable</b> aus. Diese Option enthält vordefinierte Variablen, die auf diese Positionen verweisen.",
		admin_file_tracking_qualified_path_hover_help: "Verwenden Sie die entsprechende Verzeichnisstruktur für Ihr Windows- oder Mac-Betriebssystem, um das Verzeichnis oder Netzverzeichnis anzugeben, in dem Dokumente gespeichert werden sollen. <ul><li>Geben Sie für Windows einen Laufwerkbuchstaben im Pfad an, etwa C:\\Enterprise Documents.</li><li>Geben Sie für ein freigegebenes Netzverzeichnis den Pfad im Format \\\\Servername\\Verzeichnis an.</li></ul><br/><b>Wichtig:</b> Damit Sie diese Option verwenden können, muss die angegebene Verzeichnisstruktur auf allen Client-Workstations in Ihrer Umgebung erstellt werden können.",
		admin_file_tracking_environment_variable_path_hover_help: "Verwenden Sie die entsprechenden Umgebungsvariablen für Ihr Windows- oder Mac-Betriebssystem, um das Verzeichnis oder Netzverzeichnis anzugeben, in dem Dokumente gespeichert werden sollen. <br/><br/>Mit der Option <b>Ausgangsverzeichnis für Benutzer</b> werden Dokumente im folgenden Verzeichnis gespeichert:<br/><ul><li>Windows: C:\\Benutzer\\Benutzername</li><li>Mac: /Users/Benutzername</li></ul><br/>Mit der Option <b>Dokumentverzeichnis für Benutzer</b> werden Dokumente im folgenden Verzeichnis gespeichert:<br/><ul><li>Windows: C:\\Benutzer\\Benutzername\\Dokumente</li><li>Mac: /Users/Benutzername/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Geben Sie an, ob die lokale Kopie eines Dokuments gelöscht wird, wenn Benutzer Dokumente im Repository hinzufügen oder einchecken.<br/><br/>Das Löschen der lokalen Kopie ermöglicht Ihnen Folgendes:<br/><ul><li>Durchsetzen der Einhaltung von IT-Richtlinien</li><li>Sicherstellen, dass Benutzer mit den aktuellen Versionen von Dokumenten arbeiten</li></ul><br/><b>Einschränkung:</b> Diese Einstellung wird nicht verwendet, wenn die Benutzer Dokumente per Drag-and-drop hinzufügen.<br/><br/>Für IBM Content Navigator for Microsoft Office müssen Sie <b>Lokale Dateien löschen, wenn Benutzer ein Dokument hinzufügen oder einchecken oder das Auschecken abbrechen</b> im Abschnitt <b>Office-Konfiguration</b> des Desktops auswählen.",
		admin_file_tracking_open_file_hover_help: "Diese Einstellung überschreibt alle Vorgaben zur Dokumentverwaltung, die in den Web-Browsern der Benutzer konfiguriert sind. <b>Einschränkung:</b> Diese Einstellung wird von IBM Content Navigator for Microsoft Office nicht verwendet.",
		admin_file_tracking_over_write_file: "Lokale Kopie überschreiben:",
		admin_file_tracking_over_write_file_hover_help: "Geben Sie an, ob die lokale Kopie eines Dokuments überschrieben wird, wenn Benutzer Dokumente aus dem Repository auschecken. <br/><br/>Das Überschreiben der lokalen Kopie ermöglicht Ihnen Folgendes:<br/><ul><li>Sicherstellen, dass Benutzer mit den aktuellen Versionen von Dokumenten arbeiten</li><li>Verhindern, dass Benutzer eine Systemanfrage erhalten, wenn eine lokale Kopie vorhanden ist</li></ul> </br></br><b>Einschränkung:</b> Diese Einstellung wird von IBM Content Navigator for Microsoft Office nicht verwendet, wenn Sie <b>Benutzern erlauben, diese Einstellung zu überschreiben</b> auswählen.",
		admin_file_tracking_over_write_file_state_editable: "Benutzern erlauben, diese Einstellung zu überschreiben",
		admin_file_tracking_inline_help: "Die Dateiverfolgung optimiert das Ein- und Auschecken von Dokumenten im Repository. Sie ermöglicht Ihnen auch, festzulegen, wie Dokumente auf den Benutzersystemen gespeichert werden. <br/><br/>Weiterhin ermöglicht es die Dateiverfolgung, Dokumente in mehreren IBM Content Navigator-Komponenten wie dem Web-Client und IBM Content Navigator for Microsoft Office zu verfolgen.",

		// Box repository admin...
		admin_box_instructions: "Vor der Verbindung zum Repository müssen Sie die Standard- oder die Serverauthentifizierung aktivieren.",
		admin_box_use_oauth: "Authentifizierungstyp:",
		admin_box_use_oauth_hover: "Wählen Sie in einer Produktionsumgebung die Standard- oder die Serverauthentifizierung aus, wenn Sie von IBM Content Navigator aus Zugriff auf Box-Dokumente bereitstellen. Geben Sie die OAuth2-Werte für 'Client-ID' und 'Geheimer Clientschlüssel' an, die dieser Bereitstellung von IBM Content Navigator zugeordnet sind. Sie können diese Werte aus Box abrufen, nachdem Sie die Box-Anwendung für Ihren IBM Content Navigator-Server erstellt haben.<br/><br/>Wählen Sie in einer Entwicklungsumgebung die Entwicklerauthentifizierung aus. Entwickler können sich mit Ihrem Entwickleraccount bei Box anmelden und ein Entwicklertoken generieren, das 60 Minuten lang gültig ist. Entwicklertoken ermöglichen es Entwicklern, sich bei Box anzumelden, indem Sie das Entwicklertoken als Kennwort für jede Benutzer-ID verwenden.",
		admin_box_oauth_client_id: "Client-ID:",
		admin_box_oauth_client_secret: "Geheimer Clientschlüssel:",
		admin_box_oauth_subdomain: "Unterdomäne für Box-Unternehmensaccount:",
		admin_box_share: "Task-Manager-Verbindungs-ID:",
		admin_box_share_hover: "Für Box-Kopie oder Box-Freigabe verwendet Task-Manager eine Administrator-ID und ein Administratorkennwort, um Hintergrundtasks auszuführen, die das Repository modifizieren.<br/><br/>Klicken Sie auf 'Festlegen' und melden Sie sich mit einem gültigen Box-Administratoraccount bei Box an.<br/><br/>Wenn Sie einen Desktop durch Auswahl dieses Box-Repositorys als Repository für die Dateifreigabe konfigurieren, müssen Sie einen Box-Benutzer mit Administratorberechtigung angeben, der in Box über unbegrenzten Speicherplatz verfügt.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Datei automatisch öffnen",
		file_tracking_runtime_overwrite_hover_help: "Wenn Sie diese Option nicht auswählen und ein Dokument mit dem gleichen Namen im lokalen Dateisystem haben, wird das Dokument ausgecheckt, aber nicht heruntergeladen, sofern Sie nicht eine der folgenden Aktionen ausführen:<br/><ul><li> Dokument in ein Unterverzeichnis des Standardverzeichnisses herunterladen. Wenn Sie ein Unterverzeichnis auswählen, kann der Speicherort des Dokuments von der Webanwendung überwacht werden.</li><li>Benennen Sie das heruntergeladene Dokument um. Durch Umbenennen des Dokuments wird ein Dateinamenskonflikt vermieden.</li></ul>",
		open_file: "Datei automatisch öffnen",
		over_write_file: "Lokale Kopie überschreiben",
		checkout_and_download_file: "Dokumente auschecken und herunterladen",
		download_to_local_directory: "Herunterladen in:",
		checkout_and_download_button_title: "Auschecken und herunterladen",
		checkout_without_java_confirmation_dialog: "Die Datei kann nicht heruntergeladen und vom Feature für die Dateiverfolgung verfolgt werden.",
		browse_for_directory: "Durchsuchen",
		selected_documents: "Ausgewählte Dokumente",

		checkout_without_java_confirmation_text: "Dieses Problem kann die folgenden Ursachen haben:<br/><ul><li>Die JRE (Java Runtime Environment) ist auf Ihrer Workstation nicht installiert.</li><li>Das Java-Plug-in ist im Web-Browser nicht aktiviert.</li><li>Ihr Web-Browser unterstützt Java nicht.</li></ul><br/><br/>Führen Sie die entsprechende Aktion aus, um dieses Problem zu beheben:<br/><br/><ul><li>Wenn Sie die Datei ohne aktivierte Verfolgung herunterladen möchten, klicken Sie auf 'OK'.</li><li>Wenn Sie die Datei mit aktivierter Dateiverfolgung herunterladen möchten, brechen Sie den Download ab und stellen Sie sicher, dass die JRE auf Ihrer Workstation installiert und das Java-Plug-in in Ihrem Web-Browser aktiviert ist.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Das Dokument wurde ausgecheckt und heruntergeladen, kann aber nicht geöffnet werden.",
		runtime_file_tracking_open_error_explanation: "Das auf Ihrer Workstation installierte Betriebssystem unterstützt keine Dateien dieses Typs.",
		runtime_file_tracking_open_error_userResponse: "Führen Sie eine der folgenden Aktionen aus, um das Problem zu beheben:<br/><br/><ul><li>Wenn Sie mit dem Dokument arbeiten müssen, öffnen Sie den Web-Client auf einer anderen Workstation mit einem anderen Betriebssystem.</li><li>Wenn Sie das Dokument nur anzeigen müssen, klicken Sie im Web-Client mit der rechten Maustaste darauf und anschließend auf 'Öffnen'.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Das Dokument wurde ausgecheckt, aber nicht heruntergeladen.",
		runtime_file_tracking_save_file_error_explanation: "Ein Dokument mit dem gleichen Namen ist im lokalen Dateisystem vorhanden, wurde aber nicht überschrieben. ",
		runtime_file_tracking_save_file_error_userResponse: "Falls Sie die Datei aus dem Repository herunterladen möchten, müssen Sie dazu beim Download die lokale Kopie des Dokuments überschreiben lassen.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Das Dokument wurde ausgecheckt, kann aber nicht heruntergeladen und geöffnet werden.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Ein Dokument mit dem gleichen Namen ist im lokalen Dateisystem vorhanden. Die Datei wurde aber nicht überschrieben, sodass das Dokument im Repository nicht heruntergeladen und geöffnet werden kann.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Falls Sie die Datei aus dem Repository herunterladen möchten, müssen Sie dazu beim Download die lokale Kopie des Dokuments überschreiben lassen.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Das Dokument kann nicht heruntergeladen werden.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Die für die Dateiverfolgung erforderliche Umgebungsvariable ${0} ist auf diesem Clientsystem nicht definiert.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "So beheben Sie das Problem:<br/><br/><ul><li>Fügen Sie die Umgebungsvariable ${0} zu den Umgebungsvariablen der Betriebssystemumgebung hinzu.</li><li>Melden Sie sich am Web-Client ab und schließen Sie den Web-Browser. Melden Sie sich danach wieder an.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Das Dokument kann nicht heruntergeladen und vom Applet für die Dateiverfolgung verfolgt werden.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Das für die Dateiverfolgung erforderliche Verzeichnis ${0} ist nicht definiert und kann nicht erstellt werden.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Führen Sie die entsprechende Aktion aus, um dieses Problem zu beheben:<br/><br/><ul><li>Klicken Sie auf 'Durchsuchen' und wählen Sie ein anderes Verzeichnis auf dem Clientsystem aus. Wenn Sie diese Option auswählen, wird die Datei nicht verfolgt.</li><li>Wenden Sie sich an den Systemadministrator und bitten Sie ihn, ein anderes Verzeichnis für die Dateiverfolgung anzugeben. Dies kann beispielsweise erforderlich sein, wenn das angegebene Verzeichnis für ein Windows-Betriebssystem bestimmt ist, Sie aber Mac OS ausführen. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Wenn auf diesen Desktop von Einheiten mit unterschiedlichen Betriebssystemen zugegriffen wird, können Sie die Wahrscheinlichkeit von Problemen verringern, indem Sie eine der folgenden Aktionen ausführen:<br/><br/><ul><li>Verwenden Sie Umgebungsvariablen, um den Speicherort auf Clientsystemen anzugeben.</li><li>Erstellen Sie unterschiedliche Desktops für Benutzer der einzelnen Einheitentypen. Erstellen Sie beispielsweise einen Desktop für Benutzer mit einem Windows-Betriebssystem und einen Desktop für Benutzer mit Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Die Anforderung kann nicht verarbeitet werden.",
		runtime_file_tracking_generic_error_explanation: "Im Applet zur Dateiverfolgung ist ein Fehler aufgetreten.",
		runtime_file_tracking_generic_error_userResponse: "Wenden Sie sich an Ihren Systemadministrator.",
		runtime_file_tracking_generic_error_adminResponse: "Öffnen Sie die Java-Konsole und versuchen Sie, Ihre Anforderung erneut abzuschicken. Die Details des Fehlers werden in der Java-Konsole angezeigt.<br/><br/>Sie können auf die Java-Konsole über die Systemsteuerung (Windows) bzw. Systemeinstellungen (Mac) des Betriebssystems zugreifen.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Die Anforderung kann nicht verarbeitet werden.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Die folgenden Dateien wurden dem Repository hinzugefügt, aber nicht aus dem lokalen Dateisystem gelöscht: ${0}. Dazu kommt es normalerweise, wenn die Dateien geöffnet sind oder von einer anderen Anwendung verwendet werden. Falls erforderlich, können Sie die Dateien manuell löschen.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Das Dokument kann nicht heruntergeladen werden.",
		runtime_file_tracking_ioexception_error_explanation: "Das Dokument kann nicht heruntergeladen werden.",
		runtime_file_tracking_ioexception_userResponse: "Möglicherweise haben Sie nicht die erforderlichen Berechtigungen zum Schreiben in das folgende Verzeichnis: ${0}",
		runtime_file_tracking_ioexception_adminResponse: "Stellen Sie sicher, dass Sie über die Berechtigung zum Schreiben in das angegebene Verzeichnis verfügen. Wenden Sie sich an Ihren Systemadministrator, wenn Sie keine Schreibberechtigung für das angegebene Verzeichnis haben.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Die Anforderung kann nicht verarbeitet werden.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Dieser Fehler kann die folgenden Ursachen haben:<br/><br/><ul><li>Sie verwenden Safari unter Mac OS und Java wird im abgesicherter Modus ausgeführt.</li><li>Sie verfügen nicht über Schreib-/Leseberechtigungen für das Verzeichnis, das in der Konfiguration zur Dateiverfolgung für Ihren Desktop angegeben ist.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Sie können IBM Content Navigator ohne Dateiverfolgung weiterhin verwenden oder die folgenden Schritte zum Beheben des Problems ausführen:<br/><br/><ol><li>Aktivieren Sie den ungesicherten Java-Modus in Safari.</li><li>Wenn Sie gefragt werden, ob Sie der IBM Content Navigator-Website vertrauen, klicken Sie auf <b>Vertrauen</b>, um die Seite zu laden, und aktivieren Sie dann den ungesicherten Java-Modus in Safari.</li></ol><br/><br/>Wenn Safari ordnungsgemäß konfiguriert ist, führen Sie die folgenden Schritte zum Beheben des Problems aus:<br/><br/><ol><li>Stellen Sie sicher, dass Sie Schreib-/Leseberechtigungen für das Verzeichnis haben, das in der Konfiguration zur Dateiverfolgung für Ihren Desktop angegeben ist.</li><li>Verfügen Sie nicht über die Schreib-/Leseberechtigungen für dieses Verzeichnis, bearbeiten Sie die Berechtigungen für dieses Verzeichnis entsprechend.</li><li>Können Sie Ihre Berechtigungen für das Verzeichnis nicht bearbeiten, muss Ihr Administrator entweder das für die Dateiverfolgung konfigurierte Verzeichnis ändern oder Ihnen Zugriff auf einen Desktop geben, für den ein anderes Verzeichnis zur Dateiverfolgung konfiguriert ist.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Die Anforderung kann nicht verarbeitet werden.",
		runtime_file_tracking_java__notfound_error_explanation: "Dieses Problem tritt für gewöhnlich in den folgenden Situationen auf:<br/><br/><ul><li>Die JRE (Java Runtime Environment) ist auf Ihrer Workstation nicht vorhanden oder nicht aktiviert.</li><li>Die JRE-Version auf Ihrer Workstation ist nicht mit der IBM Content Navigator-Version kompatibel.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Sie können IBM Content Navigator ohne Dateiverfolgung weiterhin verwenden oder die folgenden Schritte zum Beheben des Problems mit der JRE ausführen:<br/><br/><ol><li>Stellen Sie sicher, dass die JRE auf Ihrer Workstation installiert ist.</li><li>Stellen Sie sicher, dass die JRE-Version auf Ihrer Workstation mit IBM Content Navigator kompatibel ist. Eine Liste der unterstützten Versionen finden Sie im Dokument zu den Hardware- und Softwarevoraussetzungen für IBM Content Navigator auf der Site des IBM Software Support.</li><li>Stellen Sie sicher, dass die JRE auf Ihrer Workstation aktiviert ist.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Die Anforderung kann nicht verarbeitet werden.",
		runtime_file_tracking_security_error_explanation: "Sie verfügen nicht über Schreib-/Leseberechtigungen für das Verzeichnis, das in der Konfiguration zur Dateiverfolgung für Ihren Desktop angegeben ist.",
		runtime_file_tracking_security_error_userResponse: "Sie können IBM Content Navigator ohne Dateiverfolgung weiterhin verwenden oder zusammen mit Ihrem Systemadministrator die folgenden Schritte ausführen:<ol><li>Stellen Sie sicher, dass Sie Schreib-/Leseberechtigungen für das Verzeichnis haben, das in der Konfiguration zur Dateiverfolgung für Ihren Desktop angegeben ist. </li><li>Verfügen Sie nicht über die Schreib-/Leseberechtigungen für dieses Verzeichnis, bearbeiten Sie die Berechtigungen für dieses Verzeichnis entsprechend.</li><li>Können Sie Ihre Berechtigungen für das Verzeichnis nicht bearbeiten, muss Ihr Administrator entweder das für die Dateiverfolgung konfigurierte Verzeichnis ändern oder Ihnen Zugriff auf einen Desktop geben, für den ein anderes Verzeichnis zur Dateiverfolgung konfiguriert ist.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Die folgenden Dokumente wurden heruntergeladen: ${0}.",

		admin_file_tracking_inline_help: "Die Dateiverfolgung optimiert das Hinzufügen sowie Ein- und Auschecken von Dokumenten im Repository. Sie ermöglicht Ihnen auch, festzulegen, wie Dokumente auf den Benutzersystemen gespeichert werden.<br/><br/>Weiterhin ermöglicht es die Dateiverfolgung, Dokumente in mehreren IBM Content Navigator-Komponenten wie dem Web-Client und IBM Content Navigator for Microsoft Office zu verfolgen.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Die Menü-ID darf nicht mit \"Default\" beginnen. \"Default\" ist ein reserviertes Präfix für Menü-IDs.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Die ID darf nur alphanumerische Zeichen enthalten und die Groß-/Kleinschreibung muss beachtet werden.",
		admin_repository_id_hover: "Die Repository-ID ist in den Web-Client-URLs, Favoriten und E-Mail-Links enthalten und gibt an, an welchem Repository die Anmeldung erfolgen soll. Die ID muss eindeutig sein und Sie können sie nicht ändern, nachdem Sie das Repository gespeichert haben.<br><br>Die ID darf nur alphanumerische Zeichen enthalten und die Groß-/Kleinschreibung muss beachtet werden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Der Name darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Die Desktop-ID darf Leerzeichen und die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Der Desktopname darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Der Anzeigename darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Geben Sie den Repository-Namen an, der Benutzern im Web-Client angezeigt werden soll.<br><br>Der Name darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Geben Sie den Hostnamen oder die IP-Adresse des Content Manager OnDemand-Servers an, zu dem eine Verbindung hergestellt werden soll, z. B. server.id.com.",
		admin_server_p8_name_hover: "Geben Sie die URL des Content Engine- oder Content Platform Engine-Servers an. Die URL hat das folgende Format, bei dem Groß-/Kleinschreibung beachtet werden muss:<br><br><ul><li>Für WebSphere Application Server lautet das Format iiop://Hostname:Portnummer/FileNet/Engine. Die Standardportnummer bei Basisimplementierungen ist 2809.</li><li>Für WebLogic Server lautet das Format t3://Hostname:Portnummer/FileNet/Engine. Die Standardportnummer ist 7001.</li></ul><br><br>Verwenden Sie für Content Engine- und Content Platform Engine-Konfigurationen mit hoher Verfügbarkeit die hoch verfügbare EJB-Transport-URL ohne das Präfix 'cemp:'. ",
		admin_server_p8_protocol_hover: "Geben Sie das Protokoll an, das für die Kommunikation mit Content Engine verwendet werden soll.",
		admin_server_cm_name_hover: "Geben Sie den Namen des lokalen Katalogs der Content Manager-Datenbank oder den Bibliotheksserververbindungsnamen an. Dieser Name ist der Wert, der für die Variable ICMSERVER angegeben wurde.",
		admin_repository_cmis_hover: "Geben Sie die ID des Repositorys an, zu dem Sie eine Verbindung herstellen wollen.  Die IDs der einzelnen Repositorys in Ihrer CMIS-Umgebung sind im AtomPub-Bindeservicedokument aufgelistet.  <br/><br/><b>Tipp:</b>Sie können auch einen Stern (*) eingeben, um die Verbindung zum ersten oder einzigen Repository herzustellen, das im Dokument des AtomPub- Bindeservice definiert ist.",
		admin_url_cmis_hover: "Das Format der URL ist vom Serviceanbieter abhängig. Sie finden die URL in Ihrer CMIS-Dokumentation oder erhalten sie von Ihrem CMIS-Serveradministrator.",
		admin_repcfg_cmis_status_columns_hover: "Geben Sie die Elementstatus an, für die Symbole angezeigt werden sollen. Die Statussymbole werden neben den Dokumenten in der Inhaltsliste angezeigt.",
		admin_port_hover: "Geben Sie die TCP/IP-Portnummer an, die vom Content Manager OnDemand-Server überwacht wird. Der Standardwert ist 1445.",
		admin_unified_searches_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, Repository-übergreifende Suchen für dieses Repository zu speichern.<br/><br/>Wenn Sie diese Option nicht aktivieren, können Benutzer weiterhin Repository-übergreifende Suchen erstellen, die für dieses Repository ausgeführt werden. Sie können verhindern, dass Benutzer Repository-übergreifende Suchen auf Desktopebene erstellen.<br/><br/>Wenn Sie Repository-übergreifende Suchen ermöglichen, erstellt IBM Content Navigator das Datenmodell für Repository-übergreifende Suchen im Repository.<br/><br/>Für IBM FileNet Content Manager müssen Sie die Verbindung zum Repository als Content Engine-Administrator herstellen, bevor Sie diese Option aktivieren.",
		admin_unified_searches_cm_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, Repository-übergreifende Suchen für dieses Repository zu speichern.<br/><br/>Wenn Sie diese Option nicht aktivieren, können Benutzer weiterhin Repository-übergreifende Suchen erstellen, die für dieses Repository ausgeführt werden. Sie können verhindern, dass Benutzer Repository-übergreifende Suchen auf Desktopebene erstellen.<br/><br/>Wenn Sie Repository-übergreifende Suchen ermöglichen, erstellt IBM Content Navigator das Datenmodell für Repository-übergreifende Suchen im Repository.",
		admin_max_results_hover: "Geben Sie an, ob die Anzahl der von einer Suche übergebenen Ergebnisse begrenzt werden soll. Wenn Sie die Anzahl der Suchergebnisse nicht begrenzen, kommt es möglicherweise zu Leistungsproblemen, wenn eine Suche eine große Anzahl von Ergebnissen zurückgibt.",
		admin_timeout_hover: "Geben Sie an, wie lang (in Sekunden) eine Suche für das Repository ausgeführt werden kann. Wenn die Suche nicht in der angegebenen Zeit ausgeführt wird, bricht der Web-Client die Anforderung ab. Das empfohlene maximale Zeitlimit beträgt 180 Sekunden.",
		admin_object_store_hover: "Geben Sie den Objektspeicher an, zu dem Sie eine Verbindung auf dem Content Engine-Server herstellen wollen. Sie können den symbolischen Namen von der Administrationskonsole von Content Platform Engine abrufen.",
		admin_object_store_display_name_hover: "Der Anzeigename des Objektspeichers ist erforderlich, wenn Sie IBM FileNet P8-Workflows verwenden wollen. Sie können den Anzeigenamen des Objektspeichers von der Administrationskonsole von Content Platform Engine abrufen.",
		admin_all_searches_hover: "Geben Sie an, ob die Anzahl der Suchen begrenzt werden soll, die unter <b>Alle Suchen</b> angezeigt werden, wenn Benutzer im Repository suchen. Wenn Sie die Anzahl der Suchen nicht begrenzen, können Leistungsprobleme auftreten, wenn das Repository eine große Menge gespeicherter Suchen enthält.",

		admin_text_desktop: "Desktop",
		admin_text_repository: "Repository",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Motiv",
		admin_text_menu: "Menü",
		admin_text_reason_code: "Schwärzungsgrund",
		admin_text_redactions: "Schwärzungen",
		admin_text_viewer_mapping: "Viewerzuordnung",
		admin_text_mobile_feature: "Mobiles Feature",
		admin_test_interface_text: "Schnittstellentext",
		admin_text_interface_text_locale: "Lokalisierter Schnittstellentext",
		admin_text_icon_status: "Statussymbol",
		admin_text_icon: "Symbol",
		admin_text_file_type: "Dateityp",
		admin_text_viewer: "Viewer",
		admin_text_desktop_access: "Desktopzugriff",
		admin_text_mapped_properties_for_office: "Zugeordnete Eigenschaften für Microsoft Office",
		admin_text_desktop_features: "Desktop-Features",
		admin_text_unknown: "Unbekannt",
		admin_folder_instruction: "Geben Sie die Eigenschaften an, die für Dokumente und Ordner in der Inhaltsliste angezeigt werden, wenn Benutzer diese anzeigen. Sie können auch die Reihenfolge angeben, in der die Eigenschaften angezeigt werden.",
		admin_search_instruction: "Geben Sie an, welche Optionen standardmäßig ausgewählt sind, wenn die Benutzer eine Suche erstellen.",
		admin_repository_office_conf_class_instruction: "Wenn Sie IBM Content Navigator for Microsoft Office auf den Clientsystemen in Ihrer Umgebung installiert haben, können Sie angeben, wie Dokumente gehandhabt werden sollen, wenn sie diesem Repository hinzugefügt oder in das Repository eingecheckt werden.",
		admin_repository_office_conf_instruction: "Ordnen Sie Microsoft Office-Dokumenteigenschaften den Eigenschaften zu, die für dieses Repository definiert sind.<br/><br/>Wenn die Eigenschaftszuordnung für einen Desktop aktiviert ist, dem dieses Repository zugeordnet ist, werden die für die Microsoft Office-Dokumente festgelegten Eigenschaften für die Eigenschaften des Repository übernommen, wenn der Benutzer ein Dokument über IBM Content Navigator for Microsoft Office hinzufügt.",
		admin_repository_office_conf_prop_mapping_title: "Eigenschaftszuordnung",
		admin_repository_office_conf_prop_mapping_title1: "MS Office-Integration",
		admin_office_conf_instruction: "Wenn IBM Content Navigator for Microsoft Office auf dem Clientsystem installiert ist, können Sie steuern, wie IBM Content Navigator in Microsoft Office-Anwendungen integriert wird.<br /><br /><b>Wichtig:</b> Wenn Sie <b>Office-Eigenschaften zuordnen</b> auswählen, müssen Sie auch die Eigenschaftszuordnung für jedes Repository konfigurieren, das diesem Desktop zugeordnet ist. Sie können die Eigenschaftszuordnungen auf der Registerkarte <b>MS Office-Eigenschaften</b> für jedes Repository in Ihrer Umgebung konfigurieren.",
		admin_desktop_workflows_instruction: "<b>Nur IBM FileNet P8-Systeme:</b> Geben Sie an, welche Anwendungsspeicherbereiche auf diesem Desktop angezeigt werden. Die Reihenfolge der ausgewählten Anwendungsspeicherbereiche bestimmt die Reihenfolge, in der die Anwendungsspeicherbereiche im Web-Client angezeigt werden.<br><br><b>Tipp:</b> Sie können die Anzeigenamen der Anwendungsspeicherbereiche ändern, indem Sie die neuen Namen im Abschnitt <b>Bezeichnungen</b> des Verwaltungstools ändern.",
		admin_search_filtered_properties_instruction: "Geben Sie die Eigenschaften an, nach denen die Benutzer suchen können. Sie können Eigenschaften ausblenden, damit Benutzer nicht nach ihnen suchen können.",
		admin_search_filtered_operators_instruction: "Geben Sie die Operatoren an, die verfügbar sind, wenn Benutzer einen bestimmten Datentyp wie Datum oder Ganzzahl suchen. Sie können Operatoren ausblenden, damit Benutzer diese nicht auswählen können.",
		admin_search_default_search_results_instruction: "Geben Sie die Eigenschaften an, die für Dokumente und Ordner in den Suchergebnissen angezeigt werden. Sie können alle Eigenschaften ausblenden, die nicht in den Suchergebnissen angezeigt werden sollen.",
		admin_search_default_search_results_p8_cmis_instruction: "Geben Sie die Eigenschaften an, die für Dokumente in den Suchergebnissen angezeigt werden. Sie können alle Eigenschaften ausblenden, die nicht in den Ergebnissen angezeigt werden sollen.",

		admin_datetimeOp: "Datum/Uhrzeit",
		admin_floatOp: "Gleitkommazahl",
		admin_integerOp: "Ganzzahl",
		admin_stringOp: "Zeichenfolge",
		admin_binaryOp: "Binär",
		admin_objectOp: "Objekt",
		admin_idOp: "ID",
		admin_userOp: "Benutzer",
		admin_booleanOp: "Boolesch",

		admin_string: "Zeichenfolge",
		admin_long: "Lang",
		admin_date: "Datum",
		admin_double: "Doppelt",
		admin_object: "Objekt",
		admin_guid: "GUID",
		admin_boolean: "Boolesch",

		admin_repcfg_heading: "Sie können das Standardverhalten dieses Repositorys überschreiben, indem Sie die Konfigurationsparameter festlegen.",
		admin_repcfg_heading_od: "Sie können das Standardverhalten dieses Repositorys überschreiben, indem Sie die Konfigurationsparameter festlegen.<br /><br /><b>Wichtig:</b> Damit Sie den Web-Client mit Content Manager OnDemand verwenden können, müssen Sie auch Werte für die Parameter angeben, die auf der Registerkarte <b>Content Manager OnDemand</b> unter <b>Einstellungen</b> enthalten sind. Diese Werte gelten für alle Content Manager OnDemand-Repositorys, zu denen Sie eine Verbindung herstellen.",
		admin_repcfg_teamspaces: "Verwaltung des Teamarbeitsbereichs:",
		admin_repcfg_enable: "Aktivieren",
		admin_repcfg_disable: "Inaktivieren",

		admin_repcfg_deliver_redacted_pdf_files_as: "Geschwärzte PDF-Dateien werden übermittelt als:",
		admin_repcfg_burn_pdf_to_pdf: "PDF-Dateien",
		admin_repcfg_burn_pdf_to_tiff: "TIFF-Dateien",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Eine PDF-Datei, die durch das Anwenden rollenbasierter Schwärzungen geschwärzt wird, kann an den Kunden in einem anderen Dateiformat übermittelt werden. Wenn sich das Dateiformat ändert, ändern sich auch die Dateierweiterung und der MIME-Typ.<br><br>Wenn eine PDF-Datei z.&nbsp;B. als TIFF-Datei übermittelt wird, ändert sich die Dateierweiterung in .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Benutzern das Zusammenführen und Teilen von Seiten mit rollenbasierten Schwärzungen ermöglichen",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Wählen Sie diese Option aus, um Benutzern das Zusammenführen und Teilen von Seiten zu ermöglichen, die rollenbasierte Schwärzungen haben. Benutzer, die keine Bearbeiter für Schwärzungen sind, können rollenbasierte Schwärzungen nicht bearbeiten. Sie erhalten selbst wenn diese Option ausgewählt ist keinen Zugriff auf die sensiblen Daten, die den rollenbasierten Schwärzungen zugeordnet sind.",
		admin_repcfg_modify_teamspace_roles: "Eignern das Ändern der Rollen von vorhandenen Teamarbeitsbereichen ermöglichen",
		admin_repcfg_tm_delete_teamspace: "Ermöglicht Eignern, den Teamarbeitsbereich samt Inhalt zu löschen",
		admin_repcfg_tm_delete_teamspace_id_missing: "Sie müssen den Benutzernamen eines Repository-Administrators angeben.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Sie müssen das Kennwort des Repository-Administrators angeben.",
		admin_repcfg_teamspace_display_Recent: "Nur zuletzt geänderte Teamarbeitsbereiche anzeigen ",
		admin_repcfg_teamspace_display_Recent_value: "Tage seit der letzten Änderung:",

		admin_repcfg_folder_selector: "Stammordner:",
		admin_repcfg_enable_folder_selector: "Aktivieren",
		admin_repcfg_disable_folder_selector: "Inaktivieren",
		admin_repcfg_SSO: "Single Sign-on",
		admin_repcfg_teamspace_template_permission_text: "Ersteller für Teamarbeitsbereichsvorlagen zuweisen:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Geben Sie die Gruppen bzw. Benutzer an, die Teamarbeitsbereichsvorlagen erstellen können. Die Benutzer und Gruppen erhalten die entsprechenden Sicherheitsberechtigungen für die erforderlichen Klassen und Ordner. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Weitere Informationen</a><br/><br/><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Teamarbeitsbereiche zu vereinfachen.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Geben Sie die Gruppen bzw. Benutzer an, die Teamarbeitsbereichsvorlagen erstellen können. Die Benutzer werden den entsprechenden ACLs hinzugefügt und erhalten die erforderlichen Berechtigungen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Weitere Informationen</a><br/><br/><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Teamarbeitsbereiche zu vereinfachen.",
		admin_repcfg_teamspace_permission_text: "Rollen für Teamarbeitsbereiche zuweisen:",
		admin_repcfg_teamspace_permission_hover_p8: "Geben Sie die Gruppen bzw. Benutzer an, die Teamarbeitsbereiche erstellen und verwenden können. Die Benutzer erhalten die entsprechenden Sicherheitsberechtigungen für die erforderlichen Klassen und Ordner. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Weitere Informationen</a><br/><br/><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Teamarbeitsbereiche zu vereinfachen.",
		admin_repcfg_teamspace_permission_hover_cm: "Geben Sie die Gruppen bzw. Benutzer an, die Teamarbeitsbereiche erstellen und verwenden können. Die Benutzer werden den entsprechenden ACLs hinzugefügt und erhalten die erforderlichen Berechtigungen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Weitere Informationen</a><br/><br/><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Teamarbeitsbereiche zu vereinfachen.",
		admin_repcfg_entry_template_permission_text: "Rollen für Erfassungsvorlagen zuweisen:",
		admin_repcfg_entry_template_permission_hover_p8: "Geben Sie die Gruppen bzw. Benutzer an, die Erfassungsvorlagen erstellen und verwenden können. Die Benutzer erhalten die entsprechenden Sicherheitsberechtigungen für die Dokumentklasse 'Erfassungsvorlage'. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Weitere Informationen</a><br/><br/><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Erfassungsvorlagen zu vereinfachen.",
		admin_repcfg_entry_template_permission_hover_cm: "Geben Sie die Gruppen bzw. Benutzer an, die Erfassungsvorlagen erstellen und verwenden können. Die Benutzer werden den entsprechenden ACLs hinzugefügt und erhalten die erforderlichen Berechtigungen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Weitere Informationen</a><br /><br /><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Erfassungsvorlagen zu vereinfachen.",
		admin_repcfg_office_template_permission_text: "Rollen für Vorlagen zuweisen:",
		admin_repcfg_office_template_permission_hover_cm: "Geben Sie die Benutzer oder Gruppen an, die Microsoft Office Online- oder Edit Service-Vorlagen erstellen, bearbeiten und verwenden können. Die Benutzer werden den entsprechenden ACLs hinzugefügt und erhalten die erforderlichen Berechtigungen.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a><br /><br /><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Microsoft Office Online- oder Edit Service-Vorlagen zu vereinfachen.",
		admin_repcfg_draft_permission_text: "Rollen für Entwürfe zuweisen:",
		admin_repcfg_draft_permission_hover_cm: "Geben Sie die Benutzer oder Gruppen an, die während der bereichsübergreifenden Bearbeitung Entwürfe von Microsoft Office Online- oder Edit Service-Dokumenten erstellen können. Alle Benutzer, die Dokumente in Microsoft Office Online oder Edit Service bereichsübergreifend bearbeiten müssen, benötigen die entsprechenden Berechtigungen, um Entwürfe erstellen zu können. Die Benutzer werden den entsprechenden ACLs hinzugefügt und erhalten die erforderlichen Berechtigungen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a><br /><br /><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Verwaltung der Entwürfe zu vereinfachen.",
		admin_repcfg_search_permission_text: "Suchrollen zuweisen:",
		admin_repcfg_search_permission_hover_p8: "Geben Sie die Gruppen bzw. Benutzer an, die gespeicherte Suchen und Repository-übergreifende Suchen erstellen und verwenden können. Die Benutzer erhalten die entsprechenden Sicherheitsberechtigungen für die erforderlichen Klassen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Weitere Informationen</a><br /><br /><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Suchverwaltung zu vereinfachen.",
		admin_repcfg_search_permission_hover_cm: "Geben Sie die Gruppen bzw. Benutzer an, die gespeicherte Suchen und Repository-übergreifende Suchen erstellen, bearbeiten und verwenden können. Die Benutzer werden den entsprechenden ACLs hinzugefügt und erhalten die erforderlichen Berechtigungen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Weitere Informationen</a><br /><br /><b>Empfehlung:</b> Verwenden Sie Gruppen, um die Suchverwaltung zu vereinfachen.",
		admin_repcfg_search_permission_title: "Suchrollen",
		admin_repcfg_search_permission_intro_text: "Stellen Sie sicher, dass die Benutzer Zugriff auf einen Desktop haben, der ihre Rolle unterstützt. Stellen Sie beispielsweise sicher, dass Ersteller von Suchen Zugriff auf einen Desktop haben, der Ihnen die Erstellung von Suchen und Repository-übergreifenden Suchen erlaubt.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administratoren von Teamarbeitsbereichsvorlagen sind Benutzer mit den Berechtigungen <b>Uneingeschränkter Zugriff</b> für das Repository (Objektspeicher). Sie können die Liste der Administratoren von Teamarbeitsbereichsvorlagen nicht im Verwaltungstool ändern. <p>Administratoren von Teamarbeitsbereichsvorlagen können beliebige Teamarbeitsbereichsvorlagen löschen oder ändern. Der Benutzer, der eine Teamarbeitsbereichsvorlage erstellt, muss diese nicht für Administratoren von Teamarbeitsbereichsvorlagen freigeben.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Teamarbeitsbereichsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Erstellen von Teamarbeitsbereichsvorlagen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Weitere Informationen</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Benutzer und Gruppen, denen andere Berechtigungen zugewiesen sind, als die für Administratoren und Ersteller zugeordneten Berechtigungen.<p>Sie können diese Benutzer und Gruppen zur Rolle für Ersteller von Teamarbeitsbereichsvorlagen versetzen, indem Sie sie aus der Rolle 'Andere' entfernen und dann als Ersteller von Teamarbeitsbereichsvorlagen zuweisen.<p>Mit IBM Administration Console for Content Engine können Sie die Berechtigungen prüfen, die diesen Benutzern und Gruppen aktuell zugewiesen sind.",
		admin_repcfg_teamspace_administrators_hover_p8: "Administratoren von Teamarbeitsbereichen sind Benutzer mit den Berechtigungen <b>Uneingeschränkter Zugriff</b> für das Repository (Objektspeicher). Sie können die Liste der Administratoren von Teamarbeitsbereichen nicht im Verwaltungstool ändern.<p>Administrator von Teamarbeitsbereichen können beliebige Teamarbeitsbereiche löschen oder ändern. Der Benutzer, der einen Teamarbeitsbereich erstellt, muss diesen nicht für Teamarbeitsbereichsadministratoren freigeben.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Teamarbeitsbereichen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Erstellen von Teamarbeitsbereichen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Weitere Informationen</a>",
		admin_repcfg_teamspace_user_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Teamarbeitsbereichen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Verwenden von Teamarbeitsbereichen. Ein Benutzer muss allerdings Mitglied eines Teamarbeitsbereichs sein, damit er darauf zugreifen kann. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Weitere Informationen</a><p><b>Tipp:</b> Sollen alle Benutzer Ihrer Umgebung Teamarbeitsbereiche sehen können, können Sie den Pseudoaccount #AUTHENTICATED-USERS der Benutzerrolle für Teamarbeitsbereiche hinzufügen.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Benutzer und Gruppen, denen andere Berechtigungen zugewiesen sind, als die für Administratoren, Ersteller und Benutzer zugeordneten Berechtigungen.<p>Sie können diese Benutzer und Gruppen in vordefinierte Rollen versetzen, indem Sie sie aus der Rolle 'Andere' entfernen und ihnen dann Teamarbeitsbereichsrollen zuweisen.<p>Mit IBM Administration Console for Content Engine können Sie die Berechtigungen prüfen, die diesen Benutzern und Gruppen aktuell zugewiesen sind.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administratoren von Erfassungsvorlagen sind Benutzer mit den Berechtigungen <b>Uneingeschränkter Zugriff</b> für das Repository (Objektspeicher). Sie können die Liste der Administratoren von Erfassungsvorlagen nicht im Verwaltungstool ändern. <p>Administratoren von Erfassungsvorlagen können beliebige Erfassungsvorlagen löschen oder ändern. Der Benutzer, der eine Erfassungsvorlage erstellt, muss diese nicht für Administratoren von Erfassungsvorlagen freigeben.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Erfassungsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Erstellen von Erfassungsvorlagen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Weitere Informationen</a>",
		admin_repcfg_entry_template_user_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Erfassungsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Verwenden von Erfassungsvorlagen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Weitere Informationen</a><p><b>Tipp:</b> Sollen alle Benutzer Ihrer Umgebung Erfassungsvorlagen verwenden können, können Sie den Pseudoaccount #AUTHENTICATED-USERS der Benutzerrolle für Erfassungsvorlagen hinzufügen.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Benutzer und Gruppen, denen andere Berechtigungen zugewiesen sind, als die für Administratoren, Ersteller und Benutzer zugeordneten Berechtigungen.<p>Sie können diese Benutzer und Gruppen in vordefinierte Rollen versetzen, indem Sie sie aus der Rolle 'Andere' entfernen und ihnen dann Rollen für Erfassungsvorlagen zuweisen.<p>Mit IBM Administration Console for Content Engine können Sie die Berechtigungen prüfen, die diesen Benutzern und Gruppen aktuell zugewiesen sind.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Teamarbeitsbereichsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Erstellen von Teamarbeitsbereichsvorlagen im Repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Weitere Informationen</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Teamarbeitsbereichen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Erstellen von Teamarbeitsbereichen im Repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Weitere Informationen</a>",
		admin_repcfg_teamspace_user_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Teamarbeitsbereichen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Verwenden von Teamarbeitsbereichen im Repository. Ein Benutzer muss allerdings Mitglied eines Teamarbeitsbereichs sein, damit er darauf zugreifen kann. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Weitere Informationen</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Erfassungsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Erstellen von Erfassungsvorlagen im Repository. <br/><br/>Die Sicherheitseinstellungen für eine bestimmte Erfassungsvorlage bestimmen jedoch, welche Berechtigungen der Benutzer bzw. die Gruppe für die Erfassungsvorlage hat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Weitere Informationen</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Bearbeiter von Erfassungsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Ändern von Erfassungsvorlagen im Repository. <br/><br/>Die Sicherheitseinstellungen für eine bestimmte Erfassungsvorlage bestimmen jedoch, welche Berechtigungen der Benutzer bzw. die Gruppe für die Erfassungsvorlage hat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Weitere Informationen</a>",
		admin_repcfg_entry_user_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Erfassungsvorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Verwenden von Erfassungsvorlagen im Repository. <br/><br/>Die Sicherheitseinstellungen für eine bestimmte Erfassungsvorlage bestimmen jedoch, welche Berechtigungen der Benutzer bzw. die Gruppe für die Erfassungsvorlage hat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Weitere Informationen</a>",
		admin_repcfg_office_template_creators_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Microsoft Office Online- oder Edit Service-Vorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Erstellen von Vorlagendateien im Repository. <br/><br/>Die Sicherheitseinstellungen für eine bestimmte Vorlagendatei bestimmen jedoch, welche Berechtigungen der Benutzer bzw. die Gruppe für die Vorlage hat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a>",
		admin_repcfg_office_template_editors_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Bearbeiter von Microsoft Office Online- oder Edit Service-Vorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Bearbeiten von Vorlagendateien im Repository.  <br/><br/>Die Sicherheitseinstellungen für eine bestimmte Vorlagendatei bestimmen jedoch, welche Berechtigungen der Benutzer bzw. die Gruppe für die Vorlage hat. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a>",
		admin_repcfg_office_template_user_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Microsoft Office Online- oder Edit Service-Vorlagen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Anwenden einer Vorlage, wenn er bzw. sie über den Web-Client ein neues Office Online- oder Edit Service-Dokument erstellt.  <br/><br/>Die Sicherheitseinstellungen für eine bestimmte Vorlagendatei bestimmen jedoch, welche Berechtigungen der Benutzer bzw. die Gruppe für die Vorlage hat.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a>",
		admin_repcfg_draft_creators_hover_cm: "Allen Benutzern, die Dokumente in Microsoft Office Online oder Edit Service bereichsübergreifend bearbeiten müssen, muss diese Rolle zugewiesen werden. Weisen Sie Benutzern nicht die Bearbeiter- oder Benutzerrolle zu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a>",
		admin_repcfg_draft_editors_hover_cm: "Allen Benutzern, die Dokumente in Microsoft Office Online oder Edit Service bereichsübergreifend bearbeiten müssen, muss die Rolle <b>Ersteller</b> zugewiesen werden. Wenn einem Benutzer die Bearbeiterrolle zugewiesen ist, kann er keine Entwürfe erstellen, was für die bereichsübergreifende Bearbeitung erforderlich ist.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a>",
		admin_repcfg_draft_user_hover_cm: "Allen Benutzern, die Dokumente in Microsoft Office Online oder Edit Service bereichsübergreifend bearbeiten müssen, muss die Rolle <b>Ersteller</b> zugewiesen werden. Wenn einem Benutzer die Benutzerrolle zugewiesen ist, kann er keine Entwürfe erstellen, was für die bereichsübergreifende Bearbeitung erforderlich ist.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Weitere Informationen</a>",		
		admin_repcfg_search_others_hover_p8: "Benutzer und Gruppen, denen andere Berechtigungen zugewiesen sind, als die für Administratoren, Ersteller und Benutzer zugeordneten Berechtigungen.<p>Sie können diese Benutzer und Gruppen in vordefinierte Rollen versetzen, indem Sie sie aus der Rolle 'Andere' entfernen und ihnen dann Suchrollen zuweisen.<p>Mit IBM Administration Console for Content Engine können Sie die Berechtigungen prüfen, die diesen Benutzern und Gruppen aktuell zugewiesen sind.",		
		admin_repcfg_search_admins_hover_p8: "Suchadministratoren sind Benutzer mit den Berechtigungen <b>Uneingeschränkter Zugriff</b> für das Repository (Objektspeicher). Sie können die Liste der Suchadministratoren nicht im Verwaltungstool ändern. <br /><br />Suchadministratoren können beliebige Suchen löschen oder ändern. Der Benutzer, der eine Suche erstellt, muss diese nicht für Suchadministratoren freigeben.",
		admin_repcfg_search_creators_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Suchen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Erstellen von Suchen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Weitere Informationen</a>",
		admin_repcfg_search_user_hover_p8: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Suchen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Sicherheitsberechtigungen für das Repository zum Verwenden von Suchen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Weitere Informationen</a><br /><br /><b>Tipp:</b> Sollen alle Benutzer Ihrer Umgebung Suchen verwenden können, können Sie den Pseudoaccount #AUTHENTICATED-USERS der Benutzerrolle für Suchen hinzufügen.<br/><br />Standardmäßig können Suchbenutzer Suchen und Repository-übergreifende Suchen erstellen, aber die Suchen nicht speichern. Sie können Suchbenutzer am Erstellen von Suchen hindern, indem Sie sie einen Desktop verwenden lassen, für den die folgenden Optionen ausgewählt sind:<ul><li><b>Verhindern, dass Benutzer Suchen erstellen</b></li><li><b>Verhindern, dass Benutzer Repository-übergreifende Suchen erstellen</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Ersteller von Suchen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Erstellen und Speichern von Suchen und Repository-übergreifenden Suchen im Repository. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Weitere Informationen</a><br /><br /><b>wichtig:</b> Stellen Sie sicher, dass Ersteller von Suchen einen Desktop verwenden, für den die folgenden Optionen nicht ausgewählt sind:<ul><li><b>Verhindern, dass Benutzer Suchen erstellen</b></li><li><b>Verhindern, dass Benutzer Repository-übergreifende Suchen erstellen</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Bearbeiter von Suchen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Ändern von vorhandenen Suchen und Repository-übergreifenden Suchen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Weitere Informationen</a><br /><br /><b>Tipp:</b> Standardmäßig können Suchbearbeiter Suchen und Repository-übergreifende Suchen erstellen, aber die Suchen nicht speichern. Sie können Suchbearbeiter am Erstellen von Suchen hindern, indem Sie sie einen Desktop verwenden lassen, für den die folgenden Optionen ausgewählt sind:<ul><li><b>Verhindern, dass Benutzer Suchen erstellen</b></li><li><b>Verhindern, dass Benutzer Repository-übergreifende Suchen erstellen</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Wenn Sie einen Benutzer oder eine Gruppe als Benutzer von Suchen definieren, erhält der Benutzer bzw. die Gruppe die entsprechenden Berechtigungen zum Öffnen und Ausführen von gespeicherten Suchen und Repository-übergreifenden Suchen. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Weitere Informationen</a><br /><br /><b>Tipp:</b> Standardmäßig können Suchbenutzer Suchen und Repository-übergreifende Suchen erstellen, aber die Suchen nicht speichern. Sie können Suchbenutzer am Erstellen von Suchen hindern, indem Sie sie einen Desktop verwenden lassen, für den die folgenden Optionen ausgewählt sind:<ul><li><b>Verhindern, dass Benutzer Suchen erstellen</b></li><li><b>Verhindern, dass Benutzer Repository-übergreifende Suchen erstellen</b></li></ul>",
		admin_repcfg_db_encoding: "Zeichencodierung für Serverdatenbank:",
		admin_repcfg_db_encoding_hover: "Die Standardzeichencodierung für eine IBM Content Manager-Datenbank ist UTF-8.",
		admin_repcfg_db_encoding_specify: "Datenbankzeichencodierung angeben",
		admin_repcfg_db_encoding_utf8: "UTF-8-Codierung",
		admin_repcfg_db_encoding_utf8_hover: "Geben Sie diese Option an, wenn Sie eine in UTF-8 codierte Datenbank haben. IBM Content Navigator verwendet die UTF-8-Codierung zum Prüfen der Länge von Zeichenfolgen mit Elementeigenschaftswerten.",
		admin_repcfg_db_encoding_other: "Andere Codierung",
		admin_repcfg_db_encoding_other_hover: "Geben Sie diese Option an, wenn Sie eine nicht in UTF-8 codierte Datenbank haben. IBM Content Navigator verwendet den Zeichenzähler zum Prüfen der Länge von Zeichenfolgen mit Elementeigenschaftswerten.",
		admin_repcfg_language_codes: "Sprachencodes für Server:",
		admin_repcfg_language_codes_avail: "Verfügbar",
		admin_repcfg_language_codes_sel: "Ausgewählt",
		admin_repcfg_pdf_conversion: "MIME-Typen, die in Anhängen in PDF-Dokumente konvertiert werden sollen:",
		admin_repcfg_pdf_conversion_avail: "Verfügbar",
		admin_repcfg_pdf_conversion_sel: "Ausgewählt",

		admin_repcfg_box_share_enable_classes_label: "Modifizierbare Klassen für Box-Freigabeunterstützung:",
		admin_repcfg_box_share_enable_classes_hover: "Sie können die Klasse modifizieren, um die ID der Datei in Box zu speichern, wenn die Datei freigegeben wird.",
		admin_repcfg_box_share_enable_classes_warning: "Wichtig: Jede von Ihnen angegebene Klasse wird modifiziert, sodass Sie die Box-Freigabe unterstützt. Nachdem die Änderungen gespeichert wurden, können sie nicht mehr aus den Klassen entfernt werden.<br><br>Zum Ändern von Klassen muss eine Verbindung zum Repository als Bibliotheksserveradministrator bestehen.",
		admin_repcfg_box_share_enable_classes_available: "Verfügbare Klassen",
		admin_repcfg_box_share_enable_classes_selected: "Ausgewählte Klassen",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Box-Freigabe-ID speichern",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Diese Klasse wurde bereits modifiziert, um die Box-Freigabe-ID zu speichern. Sie können diese Option nicht entfernen.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modifizieren Sie diese Klasse so, dass sie die ID der Datei in Box speichert, wenn das Element freigegeben wird.",

		admin_repcfg_redaction: "Rollenbasierte Schwärzungen:",
		admin_repcfg_enable_redaction_hover: "Geben Sie an, ob Sie rollenbasierte Schwärzungen für Dokumente in diesem Repository verwenden wollen.<br/><br/>Rollenbasierte Schwärzungen werden angewendet, wenn ein Dokument heruntergeladen, gedruckt, von einem Anzeigeberechtigten wiedergegeben oder als Piktogramm angezeigt wird. Was die Benutzer beim Anzeigen des Dokuments sehen, hängt von ihrer Rolle und den entsprechenden Schwärzungsrichtlinien ab.",

		admin_repcfg_redaction_policy_permission_text: "Richtlinienbearbeiter zuweisen:",
		admin_repcfg_redaction_policy_editors_hover: "Wählen Sie die Benutzer und Gruppen aus, die Schwärzungsrichtlinien und -rollen erstellen, ändern und löschen.",
		admin_repcfg_redaction_policy_editors_select_hover: "Bearbeiter für Schwärzungsrichtlinien können Schwärzungsrichtlinien und -rollen erstellen, ändern und löschen.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Administratoren für Schwärzungsrichtlinien können Bearbeiter für Schwärzungsrichtlinien zuweisen.<br/><br/>Mit IBM Administration Console for Content Engine können Sie die Liste der Administratoren für Schwärzungsrichtlinien ändern.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Administratoren für Schwärzungsrichtlinien können Bearbeiter für Schwärzungsrichtlinien zuweisen.<br/><br/>Mit dem IBM Content Manager-Systemverwaltungsclient können Sie die Liste der Administratoren für Schwärzungsrichtlinien ändern.",

		admin_repcfg_redaction_permission_text: "Bearbeiter für Schwärzungen zuweisen:",
		admin_repcfg_redaction_editors_hover: "Wählen Sie die Benutzer und Gruppen aus, die rollenbasierte Schwärzungen erstellen, ändern und löschen. Nachdem Sie Benutzer und Gruppen als Bearbeiter ausgewählt haben, müssen Sie diese zunächst als Bearbeiter in den Schwärzungsrichtlinien angeben, bevor sie rollenbasierte Schwärzungen bearbeiten können.",
   		admin_repcfg_redaction_editors_select_hover: "Bearbeiter für Schwärzungen können rollenbasierte Schwärzungen erstellen, ändern und löschen, wenn sie auch als Bearbeiter in Schwärzungsrichtlinien angegeben sind.",
   		admin_repcfg_redaction_administrators_hover_p8: "Administratoren für Schwärzungen können Bearbeiter für Schwärzungen zuweisen.<br/><br/>Mit IBM Administration Console for Content Engine können Sie die Liste der Administratoren für Schwärzungen ändern.",
   		admin_repcfg_redaction_administrators_hover_cm: "Administratoren für Schwärzungen können Bearbeiter für Schwärzungen zuweisen.<br/><br/>Mit dem IBM Content Manager-Systemverwaltungsclient können Sie die Liste der Administratoren für Schwärzungen ändern.",
		admin_repcfg_entry_template: "Verwaltung von Erfassungsvorlagen:",
		admin_repcfg_entry_template_enable_classes_label: "Für Erfassungsvorlagenunterstützung zu ändernde Klassen:",
		admin_repcfg_oos_reference_attribute_label: "Referenzattribute für Offlice Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Wichtig: Alle angegebenen Klassen werden geändert, um Erfassungsvorlagen zu unterstützen. Nachdem die Änderungen gespeichert wurden, können sie nicht mehr aus den Klassen entfernt werden.<br><br>Sie können eine Klasse für einen oder beide der folgenden Zwecke ändern:<br><ul><li>Zum Speichern der ID der Erfassungsvorlage, die zum Hinzufügen eines Elements verwendet wurde, sodass die Einstellungen der Erfassungsvorlage angewendet werden, wenn das Element geändert wird</li><li>Nur hierarchische Ordnerklassen: Zum Unterstützen von Ordnerzuordnungen für Erfassungsvorlagen</li></ul>Zum Ändern von Klassen muss eine Verbindung zum Repository als Bibliotheksserveradministrator bestehen.",
		admin_repcfg_entry_template_enable_classes_warning: "Wichtig: Alle angegebenen Klassen werden geändert, um Erfassungsvorlagen zu unterstützen. Nachdem die Änderungen gespeichert wurden, können sie nicht mehr aus den Klassen entfernt werden.<br><br>Zum Ändern von Klassen muss eine Verbindung zum Repository als Bibliotheksserveradministrator bestehen.",
		admin_repcfg_entry_template_enable_classes_available: "Verfügbare Klassen",
		admin_repcfg_entry_template_enable_classes_selected: "Ausgewählte Klassen",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Erfassungsvorlagen-ID speichern",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Ändern Sie diese Klasse so, dass die ID der Erfassungsvorlage gespeichert wird, die zum Hinzufügen eines Elements verwendet wurde, und die Einstellungen der Erfassungsvorlage beim Ändern des Elements angewendet werden.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Ordnerzuordnungen speichern",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Ändern Sie diese Klasse so, dass sie Ordnerzuordnungen für Erfassungsvorlagen unterstützt. Diese Option ist nur für hierarchische Ordnerklassen verfügbar.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Diese Klasse wurde bereits geändert, um die Erfassungsvorlagen-ID zu speichern. Sie können diese Option nicht entfernen.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Diese Klasse wurde bereits geändert, um Ordnerzuordnungen zu speichern. Sie können diese Option nicht entfernen.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Nur hierarchische Ordnerklassen und nicht hierarchische Klassen können zum Speichern von Ordnerzuordnungen verwendet werden.",
		admin_repcfg_entry_template_root_folder_association_title: "Dem Stammordner zugeordnete Erfassungsvorlagen:",
		admin_repcfg_entry_template_root_folder_association_hover: "Geben Sie an, welche Erfassungsvorlagen Sie dem Stammordner in Ihrem IBM Content Manager-Repository zuordnen wollen.<br /><br />Wenn Sie dem Stammordner Erfassungsvorlagen zuordnen und Benutzer einem hierarchischen Ordner Elemente hinzufügen, wird immer eine Erfassungsvorlage zum Hinzufügen des Elements verwendet.",
		admin_repcfg_entry_template_root_folder_association_button: "Zuordnungen festlegen",
		admin_repcfg_oos_enable_classes_label: "Für Office Online- und Edit Service-Unterstützung zu ändernde Klassen:",
		admin_repcfg_oos_enable_classes_warning: "Wichtig: Alle angegebenen Klassen werden geändert, um mit Microsoft Office Online oder Edit Service zu arbeiten. Nachdem die Änderungen gespeichert wurden, kann das Referenzattribut, das jeder Klasse automatisch hinzugefügt wird, nicht entfernt werden.<br><br>Zum Ändern von Klassen muss eine Verbindung zum Repository als Bibliotheksserveradministrator bestehen.",
		admin_repcfg_oos_enable_classes_available: "Verfügbare Klassen",
		admin_repcfg_oos_enable_classes_selected: "Ausgewählte Klassen",
		admin_repcfg_oos_enable_classes_note: "Wichtig:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Diese Klasse wird mit Microsoft Office Online oder Edit Service nicht unterstützt.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Die Versionsrichtlinie für die Klasse ist auf die Version 'immer' (always) gesetzt, was von Microsoft Office Online oder Edit Service nicht unterstützt wird. Wählen Sie eine andere Klasse aus.",
		admin_repcfg_download_recording: "Downloads verfolgen:",
		admin_repcfg_download_recording_hover: "Downloads werden standardmäßig verfolgt, wenn das Add-on-Feature 'Social Collaboration Base Extensions' im Repository installiert ist. Allerdings kann sich durch Inaktivieren dieser Option die Leistung des Repositorys verbessern.<br><br>Wenn Sie diese Option inaktivieren, sehen die Benutzer einen Zähler der Downloads, die vor der Inaktivierung der Option erfolgt sind.",
		admin_repcfg_sync_service: "Sync Services:",
		admin_repcfg_download_ignored: "Downloads für bestimmte Benutzer ignorieren:",
		admin_repcfg_download_ignored_hover: "Sie können Downloads, die von bestimmten Benutzern wie etwa Administratoren oder Systemaccounts angefordert wurden, ignorieren, um genauere Zahlen der Benutzer zu erhalten, die ein Dokument heruntergeladen haben. Wenn Sie beispielsweise einen bestimmten Account für das Herunterladen von Inhalt zum Generieren eines Monatsberichts haben, können Sie von diesem Account angeforderte Downloads ignorieren.<br><br><b>Beschränkung:</b> Sie können keine Gruppen angeben.",

		admin_repcfg_add_as_major_version: "Als Hauptversion hinzufügen:",
		admin_repcfg_enable_add_as_major_version: "Ja",
		admin_repcfg_disable_add_as_major_version: "Nein",
		admin_repcfg_checkin_as_major_version: "Als Hauptversion einchecken:",
		admin_repcfg_enable_checkin_as_major_version: "Ja",
		admin_repcfg_disable_checkin_as_major_version: "Nein",
		admin_repcfg_annotation_security: "Anmerkungssicherheit:",
		admin_repcfg_inherit_annotation_security: "Sicherheit des entsprechenden Dokuments duplizieren",
		admin_repcfg_default_annotation_security: "Die Standardanmerkungssicherheit verwenden",
		admin_repcfg_connection_point: "Workflowverbindungspunkt:",
		admin_repcfg_include_workflow_definition: "Workflowdefinitionsklasse anzeigen:",
		admin_repcfg_include_form_template: "Formularvorlagenklasse anzeigen:",
		admin_repcfg_enable_include_workflow_definition: "Ja",
		admin_repcfg_disable_include_workflow_definition: "Nein",

		admin_repcfg_status_columns: "Statussymbole:",
		admin_repcfg_status_columns_hover: "Geben Sie die Status an, für die Symbole angezeigt werden sollen. Die Statussymbole werden neben den Dokumenten, Ordnern und Arbeitselementen in der Inhaltsliste angezeigt.",
		admin_repcfg_status_columns_documents_or_folders: "Ein Symbol anzeigen, wenn Dokumente oder Ordner",
		admin_repcfg_status_columns_documents: "Ein Symbol anzeigen, wenn Dokumente",
		admin_repcfg_status_columns_documents_checked_out: "ausgecheckt sind",
		admin_repcfg_status_columns_documents_declared_records: "als Schriftstücke deklariert sind",
		admin_repcfg_status_columns_documents_minor_versions: "Nebenversionen haben",
		admin_repcfg_status_columns_documents_compound_document: "Mischdokumente sind",
		admin_repcfg_status_columns_documents_bookmarks: "Lesezeichen haben",
		admin_repcfg_status_columns_documents_hold: "temporär gesperrt sind",
		admin_repcfg_status_columns_documents_notes: "über Notizen verfügen",
		admin_repcfg_status_columns_work_items: "Ein Symbol anzeigen, wenn Arbeitselemente",
		admin_repcfg_status_columns_work_items_locked: "gesperrt sind",
		admin_repcfg_status_columns_work_items_checked_out: "ausgecheckt sind",
		admin_repcfg_status_columns_work_items_deadline: "einen Termin haben",
		admin_repcfg_status_columns_work_items_suspended: "von der Verarbeitung ausgesetzt sind",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF-Konfigurationsdatei:",
		admin_repcfg_transform_xml_file: "Benutzerdefinierte Umsetzungsdatei:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Aktivieren",
		admin_repcfg_disable_ssl: "Inaktivieren",
		admin_repcfg_keyringdb_file: "Schlüsselringdatenbankdatei:",
		admin_repcfg_keyringstash_file: "Schlüsselringstashdatei:",
		admin_repcfg_od_sso: "Single Sign-on",
		admin_repcfg_od_enable_sso: "Aktivieren",
		admin_repcfg_od_disable_sso: "Inaktivieren",
		admin_repcfg_od_sso_password: "Kennwort",
		admin_repcfg_advanced_label: "Erweitert",
		admin_repcfg_custom_properties_label: "Benutzerdefinierte Eigenschaften:",
		admin_repcfg_new_button_label: "Neu",
		admin_repcfg_edit_button_label: "Bearbeiten",
		admin_repcfg_delete_button_label: "Löschen",
		admin_repcfg_custom_head1: "Name",
		admin_repcfg_custom_head2: "Wert",
		admin_repcfg_ecpdialog_title_new: "Neue benutzerdefinierte Eigenschaft",
		admin_repcfg_ecpdialog_title_edit: "Benutzerdefinierte Eigenschaft bearbeiten",
		admin_repcfg_ecpdialog_name: "Name:",
		admin_repcfg_ecpdialog_value: "Wert:",
		admin_repcfg_ecpdialog_save: "Speichern",
		admin_repcfg_ecpdialog_create: "Erstellen",
		admin_repcfg_ecpdialog_cancel: "Abbrechen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Dieser Wert ist erforderlich. Er darf keine Leerzeichen enthalten und darf nur einmal vorkommen.",

		admin_repcfg_cmis_use_gzip_encoding: "GZIP-Codierung verwenden:",

		admin_repcfg_task_mgr_proxy: "Task-Manager-Verbindungs-ID:",
		admin_repcfg_task_mgr_proxy_hover: "Bei Box-Freigabe oder Löschung eines Teamarbeitsbereichs verwendet Task-Manager eine Administrator-ID und ein Administratorkennwort zum Ausführen von Hintergrundtasks, die das Repository modifizieren.<br><br>Klicken Sie auf 'Festlegen' und melden Sie sich am Repository mit einem gültigen Repository-Administratoraccount und Kennwort an.",
		admin_task_manager_not_enabled_warning: "Diese Option erfordert den Task-Manager-Service, dieser Service ist jedoch nicht aktiviert.  Sie können den Task-Manager-Service für alle Desktops auf der Seite 'Allgemein' für 'Einstellungen' aktivieren.",
		admin_task_manager_not_enabled_and_user_warning: "Diese Option erfordert den Task-Manager-Service, dieser Service ist jedoch nicht aktiviert. Legen Sie auf dieser Seite die Verbindungs-ID für den Task-Manager fest und aktivieren Sie den Task-Manager-Service dann auf der Seite 'Allgemein' für 'Einstellungen' für alle Desktops.",
		admin_task_manager_user_id_pw_not_set_warning: "Diese Option erfordert den Task-Manager-Service, dieser Service ist jedoch nicht aktiviert. Legen Sie auf dieser Seite die Verbindungs-ID für den Task-Manager fest.",
		admin_repcfg_teamspaces_delete_task_id: "Repository-Administrator:",
		admin_repcfg_teamspaces_delete_task_password: "Kennwort:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Sie müssen einen Administrator für Bibliotheksserver angeben, damit der Task-Manager-Service einen Teamarbeitsbereich im Repository löschen kann.",
		admin_repcfg_teamspaces_delete_task_hover: "Wenn ein Benutzer einen Teamarbeitsbereich löscht, wird dieser standardmäßig ausgeblendet. Alle Ordner und Dokumente im Teamarbeitsbereich verbleiben im Repository. <br /> <br />Wenn Sie diese Option aktivieren, verbleiben nur die in anderen Ordnern im Repository abgelegten Dokumente im Repository.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Bei einer großen Anzahl von Teamarbeitsbereichen in Ihrer Umgebung kann es lange dauern, bis diese alle auf der Registerkarte <b>Teamarbeitsbereiche</b> angezeigt werden. Sie können diese Option auswählen, um die Zeit zu verringern, die zum Füllen der Liste erforderlich ist.<br /><br />Wenn ein Benutzer mit einem Teamarbeitsbereich arbeiten muss, der außerhalb des angegebenen Bereichs liegt, kann er ihn mithilfe des Felds <b>Filter</b> suchen.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Bei Auswahl dieser Option können Benutzer, die über die Eignerrolle für einen Teamarbeitsbereich verfügen, die Rollen ändern, die zu Teamarbeitsbereichen gehören, die vor der IBM Content Navigator-Version 2.0.2 erstellt wurden.<br /><br />Diese Option hat keine Auswirkungen auf Teamarbeitsbereiche, die mit IBM Content Navigator Version 2.0.2 erstellt werden.",
		admin_repcfg_use_teamspaces_cm_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, Teamarbeitsbereiche und Vorlagen für Teamarbeitsbereiche für dieses Repository zu erstellen.<br /><br /><b>Wichtig:</b> Das Repository muss hierarchische Ordner unterstützen.<br /><br />Wenn Sie Teamarbeitsbereiche ermöglichen, erstellt IBM Content Navigator das Datenmodell für Teamarbeitsbereiche für dieses Repository. Das Datenmodell enthält ACL-Objekte, Berechtigungen, Berechtigungsgruppen und zwei neue Elementtypen.",
		admin_repcfg_folder_selector_hover: "Wählen Sie den Ordner aus, den Sie als Stammordner verwenden wollen, wenn Benutzer nach Dokumenten suchen. Wenn keine hierarchischen Ordner in Ihrem Repository konfiguriert sind, ermöglicht diese Einstellung es Ihnen, die Anzeige durch Definieren eines Stammordners zu unterstützen. Wenn hierarchische Ordner in Ihrem Repository konfiguriert sind, überschreibt diese Einstellung den Stammordner, der im Repository konfiguriert ist.",
		admin_repcfg_cm_use_sso_hover: "Geben Sie an, ob Single Sign-on für Benutzer erlaubt sein soll, die über die Berechtigungsgruppe für vertrauenswürdige Anmeldung verfügen.<br /><br /><b>Wichtig:</b> Single Sign-on muss im Content Manager-Server aktiviert werden und WebSphere Application Server muss für LTPA konfiguriert sein, damit dieser Konfigurationsparameter funktioniert.",
		admin_repcfg_cm_direct_retrieve_hover: "Der direkte Abruf ist standardmäßig aktiviert, weil er es dem Web-Client ermöglicht, Inhalt schnell aus dem Ressourcenmanager abzurufen. <br /><br />Sie können diese Option inaktivieren, wenn Sie nicht wollen, dass die Clientanwendung direkt auf den Ressourcenmanager zugreift, oder wenn Sie über eine Firewall oder einen Proxy-Server verfügen, die oder der den Web-Client am Zugriff auf den Ressourcenmanager über URLs hindert. Eine Firewall kann Benutzer z.&nbsp;B. daran hindern, Dokumente im Applet-Viewer anzuzeigen, wenn der direkte Abruf aktiviert ist.",
		admin_repcfg_cmItemTypesToDisplay: "Wenn Sie nicht möchten, dass Benutzer die Elementtypen von Ressourcen und Elementen auf Ihrem IBM Content Manager-Server sehen, können Sie nur die Elementtypen von Dokumentmodellen anzeigen. Die Elementtypen werden angezeigt, wenn Benutzer Suchen erstellen, Dokumente hinzufügen und Ordner erstellen.",
		admin_repcfg_cm_language_codes_hover: "Geben Sie die Sprachen an, in denen die Daten vom Content Manager-Server zurückgegeben werden sollen. Die Liste verfügbarer Sprachen wird durch die Liste der Sprachdefinitionen auf dem Server gesteuert.<br /><br /><b>Achtung:</b> Daten im Web-Client werden in der Sprache angezeigt, die im Web-Browser des Benutzers festgelegt ist.",
		admin_repcfg_cm_pdf_conversion_hover: "Geben Sie die Dokumenttypen an, die in das PDF-Format konvertiert werden sollen, wenn ein Benutzer ein Dokument mit mehreren Teilen als E-Mail-Anhang sendet. Alle Teile werden zu einem einzigen PDF-Dokument kombiniert.",
		admin_repcfg_use_teamspaces_p8_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, Teamarbeitsbereiche und Vorlagen für Teamarbeitsbereiche für dieses Repository zu erstellen.<br /><br />Wenn Sie Teamarbeitsbereiche ermöglichen, erstellt IBM Content Navigator das Datenmodell für Teamarbeitsbereiche für dieses Repository. Das Datenmodell enthält Eigenschaftsvorlagen, angepasste Objekte, ein Ordnerobjekt und mehrere Ordner.",
		admin_repcfg_use_entry_template_p8_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, Erfassungsvorlagen in diesem Repository über IBM Content Manager zu erstellen und zu verwalten. Wenn Sie diese Option nicht aktivieren, können Benutzer Erfassungsvorlagen suchen und verwenden, die sich bereits im Repository befinden.<br /><br />Wenn Sie die Verwaltung von Erfassungsvorlagen aktivieren, aktualisiert IBM Content Navigator das Datenmodell für Erfassungsvorlagen im Repository. Die Aktualisierung enthält neue Eigenschaften. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Weitere Informationen</a>",
		admin_repcfg_use_entry_template_cm_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, Erfassungsvorlagen in diesem Repository über IBM Content Manager zu erstellen und zu verwalten.<br /><br />Wenn Sie die Verwaltung von Erfassungsvorlagen aktivieren, erstellt IBM Content Navigator das Datenmodell für Erfassungsvorlagen im Repository. Das Datenmodell enthält ein neues ACL-Objekt, neue Eigenschaften und einen neuen Elementtyp. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Weitere Informationen</a>",
		admin_repcfg_sync_service_p8_hover: "Geben Sie an, ob Benutzer die Möglichkeit erhalten sollen, ihre bevorzugten Elemente auf ihren Workstations und mobilen Geräten zu synchronisieren.<br><br><b>Wichtig:</b> Zur Verwendung dieses Features müssen Sie auch die folgenden Aufgaben ausführen:<br><ul><li>Geben Sie die <b>Öffentliche URL für Sync Services</b> im Abschnitt <b>Sync Services</b> des Verwaltungstools an.</li><li>Fügen Sie dieses Repository einem Desktop hinzu, für den Sync Services aktiviert sind.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Geben Sie an, ob die Option für die Hauptversion standardmäßig ausgewählt ist, wenn Benutzer dem Repository Dokumente hinzufügen.<br /><br />Benutzer können diese Option abwählen, wenn sie das Dokument als Nebenversion hinzufügen wollen.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Geben Sie an, ob die Option für die Hauptversion standardmäßig ausgewählt ist, wenn Benutzer Dokumente im Repository einchecken.<br /><br />Benutzer können diese Option abwählen, wenn sie das Dokument als Nebenversion einchecken wollen.",
		admin_repcfg_p8_annotation_security_hover: "Geben Sie an, welcher Sicherheitstyp standardmäßig auf Anmerkungen angewendet werden soll.<br /><br />Benutzer können die Sicherheit der Anmerkungen ändern.",
		admin_repcfg_p8_connection_point_hover: "Wenn Sie IBM FileNet P8-Workflows verwenden wollen, wählen Sie einen Process Engine-Verbindungspunkt aus. Der Verbindungspunkt, den Sie auswählen, legt fest, welche Workflows für die Benutzer verfügbar sind, die auf dieses Repository zugreifen.",
		admin_repcfg_p8_include_workflow_definition_hover: "Wenn Sie die Dokumentklasse für IBM FileNet P8-Workflowdefinitionen im Web-Client anzeigen, können Benutzer nach Workflowdefinitionen suchen und dem Repository Workflowdefinitionen hinzufügen.",
		admin_repcfg_p8_include_form_template_hover: "Wenn Sie die Dokumentklasse für IBM FileNet P8-Formularvorlagen im Web-Client anzeigen, können Benutzer nach Formularvorlagen suchen und dem Repository Formularvorlagen hinzufügen.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Geben Sie den vollständig qualifizierten Pfad der AFP2PDF-Konfigurationsdatei für dieses Repository auf dem Webanwendungsserver an. Das Dienstprogramm für die AFP2PDF-Umsetzung ist zum Anzeigen und Drucken von AFP-Daten erforderlich.<br /><br /><b>Achtung:</b> Das Dienstprogramm für die AFP2PDF-Umsetzung muss installiert sein, damit dieser Parameter verwendet werden kann.",
		admin_repcfg_od_transform_xml_file_hover: "  Wenn Sie mit einer benutzerdefinierten Umsetzung Content Manager OnDemand-Inhalt konvertieren wollen, geben Sie den vollständig qualifizierten Pfad der XML-Datei an, mit der die Umsetzung definiert wird. Die XML-Datei muss sich auf dem Webanwendungsserver befinden.",
		admin_repcfg_od_ssl_hover: "Geben Sie an, ob SSL zum Verschlüsseln der Kommunikation zwischen dem IBM Content Navigator-Anwendungsserver und dem Bibliotheksserver und den Objektservern von Content Manager OnDemand verwendet werden soll.<br /><br /><b>Wichtig:</b> Wenn Sie SSL für Content Manager OnDemand aktivieren, ist die Kommunikation zwischen dem Anwendungsserver und dem Web-Server von IBM Content Navigator oder den Workstations der Benutzer nicht eingeschlossen.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Geben Sie den vollständig qualifizierten Pfad für die Schlüsselringdatenbankdatei für dieses Repository auf dem Webanwendungsserver an. Beispiel: C:\\Programme\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Die Schlüsselringdatenbankdatei enthält Ihre Trusted-Root-Zertifikate. Verwenden Sie strikten Dateisystemschutz, um unbefugten Zugriff auf diese Datei zu verhindern.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Geben Sie den vollständig qualifizierten Pfad für die Schlüsselringstashdatei für dieses Repository auf dem Webanwendungsserver an. Beispiel: C:\\Programme\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Die Schlüsselringstashdatei enthält das Kennwort für die Schlüsselringdatenbankdatei. Verwenden Sie strikten Dateisystemschutz, um unbefugten Zugriff auf diese Datei zu verhindern.",
		admin_repcfg_od_sso_password_hover: "Geben Sie das für Single Sign-on mit dem OnDemand-Server zu verwendende Kennwort an.",
		admin_repcfg_od_custom_properties_hover: "Die ODWEK-Java-API unterstützt benutzerdefinierte Eigenschaften. Falls Sie benutzerdefinierte Eigenschaften verwenden wollen, wenn Sie eine Verbindung zum Repository über den Web-Client herstellen, geben Sie die Namen und Werte dieser Eigenschaften an.<br /><br />Weitere Informationen zu unterstützten benutzerdefinierten Eigenschaften finden Sie in der Dokumentation zur Java-API ODWEK, die im Unterverzeichnis /api des ODWEK-Installationsverzeichnisses gespeichert ist.",
		admin_repcfg_od_custom_properties_name_hover: "Geben Sie den Eigenschaftsnamen ein.",
		admin_repcfg_od_custom_properties_value_hover: "Geben Sie den Eigenschaftswert ein.",
		admin_repcfg_od_use_sso_hover: "Geben Sie an, ob Single Sign-on für Benutzer ermöglicht werden soll.<br /><br /><b>Wichtig:</b> Single Sign-on muss auf dem Content Manager OnDemand-Server aktiviert sein, damit dieser Konfigurationsparameter funktioniert.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Verwenden Sie GZIP-Codierung für diese CMIS-Quelle.",
		admin_repcfg_cm_use_part_file_name: "Beim Download von Dokumenten zu verwendender Dateiname:",
		admin_repcfg_cm_use_part_file_name_help: "Geben Sie an, wie die Dateinamen der Dokumente festgelegt werden, wenn Benutzer Dokumente herunterladen.",
		admin_repcfg_cm_use_part_file_name_enable: "Den Dateinamen verwenden",
		admin_repcfg_cm_use_part_file_name_disable: "Den Namen des Elements im Repository verwenden",
		admin_repcfg_add_doc_name: "Standardname für ein hinzugefügtes Dokument:",
		admin_repcfg_add_doc_name_hover: "Benutzer können den Namen ändern, bevor sie das Dokument hinzufügen.",
		admin_repcfg_add_doc_name_empty: "Ohne (leer)",
		admin_repcfg_add_doc_name_file_name: "Der Dateiname des ausgewählten Dokuments",

		admin_repcfg_compound_documents: "Mischdokumentfeatures:",
		admin_repcfg_compound_documents_hover: "Aktivieren Sie P8-Mischdokumentfeatures wie Navigation.",
		admin_repcfg_cm_action_list_config_enabled: "Liste der Arbeitselementaktionen:",
		admin_repcfg_cm_action_list_config_hover: "Wenn Sie die Dokumentweiterleitung im Content Manager-Systemverwaltungsclient konfigurieren, können Sie eine Liste mit Aktionen angeben, die ein Benutzer für ein Arbeitselement ausführen kann.<br /><br />Aktivieren Sie diese Option, wenn Sie die Aktionsliste über den Content Manager-Server verwenden wollen. Diese Einstellungen werden im Kontextmenü und im Fenster 'Eigenschaften bearbeiten' für das Arbeitselement verwendet.<br /><br /><b>Wichtig:</b> Die Einstellungen in der Aktionsliste überschreiben alle angepassten Menüs, die Sie im Content Navigator-Verwaltungstool konfigurieren. Enthält die Aktionsliste keine Einstellungen, kann der Benutzer keine Aktionen für Arbeitselemente ausführen.",

		admin_repcfg_box_share: "Box-Freigabe",
		admin_repcfg_box_share_p8_hover: "Benutzern das Freigeben eines Dokuments aus diesem Repository ermöglichen. Zur Freigabe eines Dokuments gehört das Kopieren der Datei in Box, das Erstellen eines Links und das Senden des Links in einer E-Mail.<br /><br />Wenn Sie die Box-Freigabe ermöglichen, erstellt IBM Content Navigator das Datenmodell für die Box-Freigabe im Repository. Zum Installieren des Add-ons von IBM Content Navigator für die Box-Freigabe müssen Sie eine Verbindung zum Repository als Bibliotheksserveradministrator haben.",

		admin_menu_type_icon: "Symbol für Menütyp",
		admin_menu_toolbar_hover: "Symbolleiste",
		admin_menu_toolbar_custom_hover: "Benutzerdefinierte Symbolleiste",
		admin_menu_contextMenu_hover: "Kontextmenü",
		admin_menu_contextMenu_custom_hover: "Benutzerdefiniertes Kontextmenü",

		admin_menu_contextMenu_custom_empty: "In den konfigurierten Plug-ins sind keine benutzerdefinierten Kontextmenüs definiert.",
		admin_menu_toolbar_custom_empty: "In den konfigurierten Plug-ins sind keine benutzerdefinierten Symbolleisten definiert.",

		admin_file_type_category_filters: "Dateitypfilter",
		admin_file_type_category_filters_hover_help: "Geben Sie eine Liste der Dateitypen an, die Benutzer in folgenden Situationen verwenden können:<ul><li>Zum Eingrenzen der Liste der Ergebnisse, wenn Sie in IBM Content Navigator for Microsoft Office suchen<li>Zum Eingrenzen der Liste der Ergebnisse, wenn Sie ein IBM FileNet P8-Repository im Web-Client durchsuchen<li>Zum Eingrenzen der Dateitypen, die Benutzer mithilfe einer Erfassungsvorlage zum Repository hinzufügen können</ul>",
		admin_file_type_only_use_in_et_folder_association: "Nur in Erfassungsvorlagenzuordnungen für Ordner anzeigen",
		admin_office_config_properties_label: "Office-Eigenschaften",
		admin_office_config_type_label: "Datentyp",
		admin_office_config_mapped_property_label: "Repository-Eigenschaft",
		admin_office_config_properties_hover_help: "Geben Sie den Namen jeder Microsoft Office-Eigenschaft an, die Sie einer Repository-Eigenschaft zuordnen wollen und fügen Sie sie anschließend hinzu. Die Datentypen aller Eigenschaften müssen übereinstimmen.",
		admin_office_config_mapped_property_hover_help: "Wenn Sie die Office-Eigenschaften mehreren Repository-Eigenschaften zuordnen wollen, müssen Sie eine neue Eigenschaftszuordnung erstellen.",
		admin_new_property_mapping_title: "Neue Eigenschaftszuordnung",
		admin_property_mapping_title: "Eigenschaftszuordnung bearbeiten",
		admin_property_mapping_instruction: "Geben Sie an, welche Microsoft Office-Eigenschaften Sie einer Eigenschaft im Repository zuordnen wollen. Der Datentyp der Office-Eigenschaften muss mit dem Datentyp der Eigenschaft im Repository übereinstimmen. <br /><br />Wenn ein Office-Dokument über mindestens eine Eigenschaft aus der Zuordnung verfügt, verwendet IBM Content Navigator die erste Eigenschaft in der Liste, um die Eigenschaft im Repository zu füllen.",
		admin_ms_general_settings: "Allgemeine Konfiguration:",
		admin_ms_delete_local_settings: "Lokale Dateien löschen, wenn Benutzer Folgendes ausführt:",
		admin_ms_outlook_options: "Outlook-Integration:",
		admin_ms_enable_props_mapping: "In folgenden Situationen Office-Eigenschaften Repository-Eigenschaften zuordnen:",
		admin_ms_open_doc_when_checkout: "Dokument beim Öffnen automatisch auschecken",
		admin_ms_open_doc_when_checkout_hover_help: "Die Auswahl dieser Option verhindert, dass der Benutzer die Datei im Repository mit einer älteren Version der Datei überschreibt.",
		admin_ms_prompt_close_office: "Benutzer auffordern, beim Schließen von Office-Anwendungen Dokumente einzuchecken",
		admin_ms_prompt_close_office_hover_help: "Die Auswahl dieser Option verhindert, dass Benutzer vergessen, Ihre Arbeit einzuchecken.",
		admin_ms_add_with_entry_template_only: "Nur die Aktion 'Mit Vorlage hinzufügen' anzeigen",
		admin_ms_delete_local_on_add: "Lokale Dateien löschen, wenn Benutzer Dokumente hinzufügen",
		admin_ms_delete_local_on_checkin: "Lokale Dateien löschen, wenn Benutzer Dokumente einchecken oder das Auschecken abbrechen.",
		admin_ms_delete_local_on_add_hover_help: "Wenn ein Benutzer ein Dokument in IBM Content Navigator for Microsoft Office hinzufügt, wird das Dokument dem Repository hinzugefügt. Dabei bleibt die lokale Kopie des Dokuments geöffnet, sodass Benutzer das Dokument unverzüglich auschecken können, um Änderungen vorzunehmen.<br /><br />Wählen Sie diese Option aus, um die lokale Kopie des Dokuments automatisch zu schließen und zu löschen, nachdem es dem Repository hinzugefügt wurde.",
		admin_ms_delete_local_on_checkin_hover_help: "Wenn ein Benutzer ein Dokument in IBM Content Navigator for Microsoft Office eincheckt, wird das Dokument in das Repository eingecheckt und die lokale Kopie des Dokuments bleibt geöffnet. Nach Verwendung der Aktion zum Abbrechen des Auscheckvorgangs bleibt die lokale Kopie des Dokuments ebenfalls geöffnet. Bei geöffneter lokaler Kopie können Benutzer das Dokument unverzüglich wieder auschecken, um erneut Änderungen vorzunehmen.<br /><br />Wählen Sie diese Option aus, um die lokale Kopie des Dokuments automatisch zu schließen und zu löschen, nachdem ein Dokument entweder eingecheckt wurde oder die Aktion zum Abbrechen des Auscheckvorgangs verwendet wurde.",
		admin_ms_delete_local_on_save: "Dokument speichern",
		admin_ms_prompt_for_props_on_add: "Benutzer auffordern, Eigenschaftswerte bereitzustellen, wenn sie dem Repository E-Mails hinzufügen",
		admin_ms_prompt_for_props_on_add_hover_help: "Wenn Sie diese Option nicht auswählen, verwendet der Web-Client die für das Repository definierte Outlook-Eigenschaftszuordnung.<br /><br />Wenn Sie dem Ordner, dem die E-Mails hinzugefügt werden, Erfassungsvorlagen zugeordnet haben, wird der Benutzer möglicherweise nicht aufgefordert, Eigenschaften anzugeben.",
		admin_ms_delete_email_on_add: "E-Mail vom E-Mail-Server löschen, wenn sie dem Repository hinzugefügt wird",
		admin_ms_send_email_as_link_only: "Verhindern, dass Benutzer Dokumente als Anhang senden",
		admin_ms_send_email_as_link_only_hover_help: "Wenn Sie diese Option auswählen, können Benutzer Dokumente nur als Link über Outlook senden. Diese Option stellt sicher, dass nur Benutzer mit den entsprechenden Berechtigungen für das Repository Dokumente anzeigen können.",
		admin_ms_enable_prop_mapping_for_add: "Office-Eigenschaften Repository-Eigenschaften zuordnen, wenn Benutzer Dokumente hinzufügen oder einchecken",
		admin_ms_checkout_document_after_add: "Dokumente automatisch auschecken, nachdem sie dem Repository hinzugefügt wurden",
		admin_no_default_document_type_filtering: "Standardmäßig alle Dokumenttypen zurückgeben, wenn Benutzer Suchen ausführen",
		admin_no_default_document_type_filtering_hover_help: "In IBM Content Navigator for Microsoft Office ist das Standardverhalten, dass Benutzer nur den Dokumenttyp der aktuellen Anwendung sehen, wenn sie Suchen ausführen. Beim Suchen in Microsoft Word ist beispielsweise standardmäßig der Dokumenttyp Word ausgewählt.<br/><br/>Durch Auswählen dieser Option werden jedoch die Kontrollkästchen der Dokumenttypen inaktiviert, sodass die Benutzer alle von einer Suche zurückgegebenen Dokumente sehen. Die Benutzer können diese Einstellung überschreiben, indem Sie vor dem Ausführen einer Suche mindestens einen Dokumenttyp auswählen.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Geben Sie an, ob die für Microsoft Office-Dokumente definierten Dokumenteigenschaften den für das Repository definierten Eigenschaften zugeordnet werden sollen.<br /></br /><b>Wichtig:</b> Wenn Sie dieses Feature aktivieren, müssen Sie die Office-Eigenschaften für jedes Repository in Ihrer Umgebung konfigurieren. Wenn Sie die Office-Eigenschaften nicht Ihren Repository-Eigenschaften zuordnen, funktioniert das Feature nicht.<br /><br />Diese Einstellung gilt nicht für Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Wählen Sie diese Option aus, um die Anzahl der Schritte zu verringern, die die Benutzer ausführen müssen, um mit Dokumenten zu arbeiten, nachdem die Dokumente dem Repository hinzugefügt wurden.<br /></br /><b>Tipp:</b> Wählen Sie <b>Benutzer auffordern, beim Schließen von Office-Anwendungen Dokumente einzuchecken</b> aus, um sicherzustellen, dass die Benutzer die Dateien wieder in das Repository einchecken.",
		admin_ms_show_details_recently_used: "Details des zuletzt verwendeten Elements anzeigen",
		admin_ms_show_details_recently_used_hover_help: "Wenn Sie die Liste der zuletzt verwendeten Elemente anzeigen, werden die Details zu den Elementen ausgeblendet, sodass mehr Elemente angezeigt werden können. Bei Auswahl dieser Option werden in der Liste der zuletzt verwendeten Elemente standardmäßig die Details zum ersten Dokument im Detailteilfenster angezeigt.",
		admin_ms_show_no_permissions_warning: "Warnungen anzeigen, wenn Benutzer Eigenschaften bearbeiten oder ein Dokument einchecken, aber nicht die Berechtigung zum Anzeigen der Erfassungsvorlage des Dokuments haben",
		admin_ms_show_no_permissions_warning_hover_help: "Wenn ein Dokument im Repository mithilfe einer Erfassungsvorlage erstellt wurde, aber der Benutzer nicht die Berechtigung zum Anzeigen der Erfassungsvorlage des Dokuments hat, wird die Erfassungsvorlage nicht abgerufen.<br /><br/>Wenn der Benutzer die Dokumenteigenschaften bearbeitet, werden daher die Eigenschaften ohne Verwendung der Erfassungsvorlage angezeigt. Wenn der Benutzer das Dokument eincheckt, wird das Dokument ohne Verwendung der Erfassungsvorlage eingecheckt.<br /><br />Standardmäßig werden diese Aktionen ausgeführt, ohne dass der Benutzer darüber informiert wird, dass die Erfassungsvorlage nicht verwendet wird. Es wird lediglich eine Warnung in der Protokolldatei protokolliert.<br /><br />Wählen Sie diese Option aus, wenn Warnungen angezeigt werden sollen, die den Benutzer unverzüglich informieren, wenn die Erfassungsvorlage nicht verwendet wird.",
		admin_ms_hide_search_actions: "Abschnitt mit Suchfiltern ausblenden",
		admin_ms_hide_search_actions_hover_help: "Standardmäßig können Benutzer einen Aktionsfilter anwenden, um eine Aktion, einen Benutzer oder eine Benutzergruppe anzugeben, und ein Datum oder einen Datumsbereich auswählen, an bzw. in dem die Aktion aufgetreten ist. Sie können beispielsweise nur nach Dokumenten suchen, die Sie im letzten Monat hinzugefügt haben.<br /><br />Wenn Sie anderen Benutzern die Anwendung von Aktionsfiltern nicht ermöglichen wollen, wählen Sie diese Option aus, um die Aktionsfilter auszublenden und die Anzahl der Felder zu verringern, die beim Definieren von Suchkriterien angezeigt werden.",
		admin_ms_hide_save_document: "Option <b>Speichern</b> in der Symbolleiste ausblenden",
		admin_ms_hide_save_document_hover_help: "Mit der Option <b>Speichern</b> können Benutzer die Änderungen am Repository speichern, ohne das Dokument einzuchecken.",
		admin_ms_indicate_managed_email_on_add: "Angeben, ob bereits eine E-Mail zum Repository hinzugefügt wurde",
		admin_ms_indicate_managed_email_on_add_hover_help: "Durch Auswahl dieser Option informieren Sie die Benutzer, dass sich bereits eine E-Mail im Repository befindet, was die Häufigkeit verringern kann, mit der eine E-Mail zum Repository hinzugefügt wird.  Wenn diese Option ausgewählt wird, wird eine neue Farbkategorie mit Namen 'IBM ECM' in Microsoft Outlook erstellt. Alle dem Repository hinzugefügten E-Mails werden automatisch zur Kategorie 'In IBM ECM verwaltet' hinzugefügt.",
		admin_ms_edit_group_add_command_configuration: "Hinzufügungsoptionen in Bearbeitungsgruppe:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Geben Sie an, welche Optionen zum <b>Hinzufügen</b> in der Gruppe <b>Bearbeiten</b> in der Multifunktionsleiste verfügbar sind:<ul><li>Wählen Sie <b>Alle Hinzufügungsoptionen anzeigen</b> aus, um die Schaltfläche 'Hinzufügen' und alle Hinzufügungsaktionen anzuzeigen, die in der Bearbeitungsgruppe verfügbar sind.</li><li>Wählen Sie <b>Alle Hinzufügungsoptionen ausblenden</b> aus, damit die Benutzer keine Dokumente zum Repository hinzufügen können oder wenn Benutzer nur aus einem Teamarbeitsbereich heraus Dokumente hinzufügen sollen.</li><li>Wählen Sie <b>Aktion 'Mit Vorlage hinzufügen' ausblenden</b> aus, wenn Sie Ordnerzuordnungen für Erfassungsvorlagen durchsetzen und die Benutzer an der Auswahl einer anderen Erfassungsvorlage hindern möchten.</li><li>Wählen Sie <b>Nur die Aktion 'Mit Vorlage hinzufügen' anzeigen</b> aus, wenn die Benutzer Dokumente nur über Erfassungsvorlagen hinzuzufügen sollen.</li></ul>",
		admin_ms_show_edit_group_add_button: "Alle Hinzufügungsoptionen anzeigen (Standard)",
		admin_ms_hide_edit_group_add_button: "Alle Hinzufügungsoptionen ausblenden",
		admin_ms_hide_add_with_entry_template: "Aktion 'Mit Vorlage hinzufügen' ausblenden",
		admin_ms_managed_in_ecm: "In IBM ECM verwaltet",
		admin_ms_managed_in_ecm_hover_help: "Wenn die Benutzer Kategorien in Microsoft Outlook anzeigen, wird diese Bezeichnung für E-Mails angezeigt, die einem IBM Content Manager- oder IBM FileNet Content Manager-Repository hinzugefügt wurden.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Der Kategoriename 'In IBM ECM verwaltet' darf keine Kommas (,) oder Strichpunkte (;) enthalten.",
		admin_delete_open_docs_after_close: "Geöffnete Dokumente automatisch löschen, wenn die Benutzer sie schließen",
		admin_admin_delete_open_docs_after_close_hover_help: "Wenn ein Benutzer ein Dokument in IBM Content Navigator for Microsoft Office öffnet, wird es in das Dokumentverzeichnis des Benutzers oder an die durch die Dateiverfolgungseinstellungen für den Desktop angegebene Position heruntergeladen.<br><br>Wählen Sie diese Option aus, um Dateien zu löschen, die geöffnet, aber nicht ausgecheckt sind, wenn Benutzer die Dokumente schließen. Die Auswahl dieser Option ermöglicht Ihnen Folgendes:<ul><li>Durchsetzen der Einhaltung von IT-Richtlinien</li><li>Sicherstellen, dass Benutzer mit den aktuellen Versionen von Dokumenten arbeiten</li><li>Verringern des Plattenspeichers, der zum Speichern von Dokumenten verwendet wird</li><ul>",
		admin_ms_custom_command_configuration: "Angepasste Befehle:",
		admin_ms_custom_command_configuration_hover_help: "Sie können bis zu vier Befehle zur Symbolleiste 'IBM Content Navigator for Microsoft Office' in Microsoft Office-Anwendungen hinzufügen. Die Befehle können zum Öffnen von URLs verwendet werden. Sie können z. B. einen Befehl zum Öffnen eines Services hinzufügen, mit dem Benutzer und Gruppen gesucht werden können.",
		admin_ms_custom_command_dialog_title: "Angepassten Befehl bearbeiten",
		admin_ms_custom_command_dialog_intro_text: "Definieren Sie einen Befehl zum Öffnen einer URL über die Symbolleiste 'IBM Content Navigator for Microsoft Office' in Microsoft Office-Anwendungen.",
		admin_ms_custom_command_id: "Befehl ${0}",
		admin_ms_custom_command_available_label: "Verfügbar",
		admin_ms_custom_command_available_hover_help: "Wenn die für einen Befehl definierte URL zur Wartung offline genommen werden muss, können Sie das Kontrollkästchen für den Befehl inaktivieren, sodass der Befehl in Microsoft Office nicht angezeigt wird.<br/><br/><b>Wichtig:</b> Die Benutzer müssen sich beim Desktop abmelden, damit die Änderungen in IBM Content Navigator for Microsoft Office sichtbar werden.",
		admin_ms_custom_command_command_id_label: "Befehls-ID",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Bezeichnung",
		admin_ms_custom_command_label_hover_help: "Geben Sie die Bezeichnung für den Befehl in Microsoft Office an.",
		admin_ms_custom_command_description_label: "Beschreibung",
		admin_ms_custom_command_description_hover_help: "Geben Sie die Beschreibung für den Befehl in Microsoft Office an.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Geben Sie die vollständig qualifizierte URL an, die in Microsoft Office geöffnet werden soll. Die URL kann eine Webseite oder ein Service sein.",
		admin_ms_custom_command_icon_label: "Symbol",
		admin_ms_custom_command_icon_hover_help: "Geben Sie den Dateinamen des anzuzeigenden Symbols an, z. B. CommandIcon.png.<br/><br/><b>Wichtig:</b> Sie müssen die Symboldatei im Unterverzeichnis 'Plugins' des Installationsverzeichnisses von IBM Content Navigator for Microsoft Office auf dem Clientsystem hinzufügen.<br/><br/>Wenn sich die Symboldatei nicht im Verzeichnis 'Plugins' befindet oder wenn Sie kein Symbol angeben, wird das Standardsymbol, customButtonIcon_38.gif, angezeigt.",
		admin_ms_custom_command_group_name: "Gruppenbezeichnung:",
		admin_ms_custom_command_group_name_hover_help: "Sie können eine Gruppenbezeichnung angeben, die unter den angepassten Befehlen in der Multifunktionsleiste angezeigt wird.<br/><br/>Wenn Sie keine Bezeichnung angeben, lautet die Gruppenbezeichnung <b>Angepasste Befehle</b>.",
		admin_ms_ribbon_tab_label: "IBM ECM-Registerkartenbeschriftung:",
		admin_ms_ribbon_tab_hover_help: "Geben Sie den Namen für die Registerkarte 'IBM Content Navigator for Microsoft Office' in der Microsoft Office-Multifunktionsleiste ein. Wenn Sie keinen Namen angeben, erhält die Registerkarte den Namen \"IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Taskfenster schließen, wenn Benutzer Dokumente öffnen",
		admin_ms_close_task_pane_on_open_hover_help: "Wählen Sie diese Option aus, wenn Sie den Platz maximieren möchten, an dem die Benutzer Dokumente in Microsoft Office sehen.<br/><br/>Microsoft Office 2010-Benutzer: Sie stellen sicher, dass das Taskfenster für alle Dokumente geschlossen wird, indem Sie den MDI-Modus (Multiple Document Interface) aktivieren. Klicken Sie dazu auf <b>Optionen</b> &gt; <b>Erweitert</b> und inaktivieren Sie die Option <b>Alle Fenster in Taskleiste anzeigen</b>.",
		admin_ms_open_document_options: "Optionen für geöffnete Dokumente:",
		admin_ms_delete_local_file_options: "Optionen zum Löschen lokaler Dateien:",
		admin_ms_add_and_checkin_options: "Optionen zum Hinzufügen und Einchecken:",
		admin_ms_search_options: "Suchoptionen:",
		admin_ms_display_options: "Anzeigeoptionen:",
		admin_ms_bidirection_enable_label: "Unterstützung für bidirektionalen Text aktivieren",
		admin_ms_bidirection_enable_hover_help: "Wählen Sie diese Option aus, wenn die Benutzer Text in IBM Content Navigator for Microsoft Office in einer anderen Richtung als von links nach rechts eingeben oder anzeigen.",
		admin_ms_text_direction_label: "Basistextrichtung für Inhalt:",
		admin_ms_text_direction_hover_help: "Geben Sie die Richtung an, in der Text in Eingabefelder in IBM Content Navigator for Microsoft Office eingegeben wird. Diese Einstellung steuert auch, wie Elemente wie Ordnernamen oder Eigenschaftswerte angezeigt werden.",
		admin_ms_control_threshold_label: "Mindestanzahl Elemente für die Lookahead-Aktivierung:",
		admin_ms_control_threshold_hover_help: "Standardmäßig wird Lookahead für das Suchen oder Festlegen von Eigenschaften aktiviert, die in einer Dropdown-Liste vordefiniert wurden, wenn die Anzahl der Elemente größer-gleich 50 ist. Sie können den Mindestwert ändern.",

		admin_ms_default_email_class: "Beim Hinzufügen von E-Mail zu verwendende Klasse",
		admin_ms_default_email_class_hover_help: "Alle diesem Repository aus Microsoft Outlook hinzugefügten E-Mails werden der von Ihnen angegebenen Klasse hinzugefügt. Benutzer können die Klasse nicht ändern.",
		admin_ms_default_folder_class: "Beim Erstellen von Ordnern zu verwendende Klasse",
		admin_ms_default_folder_class_hover_help: "Jeder in diesem Repository von einer Microsoft Office-Anwendung erstellte Ordner wird der von Ihnen angegebenen Klasse hinzugefügt.  Benutzer können die Klasse nicht ändern.",
		admin_ms_default_folder_warn_title: "Sie können die Klasse ${0} nicht als die beim Erstellen von Ordnern zu verwendende Klasse verwenden.",
		admin_ms_default_folder_warn_name_prop_invalid: "Die Namenseigenschaft der Klasse ist keine Zeichenfolge. Der Name des Ordners muss eine Zeichenfolge sein.<br />Wählen Sie eine andere Klasse aus, die beim Erstellen von Ordnern verwendet werden soll, oder ändern Sie zusammen mit dem IBM Content Manager-Administrator die Namenseigenschaft der Klasse in eine Zeichenfolge.",
		admin_ms_default_folder_warn_req_props: "Die Klasse enthält erforderliche Eigenschaften, die keine Werte haben. Benutzer können beim Erstellen von Ordnern über IBM Content Navigator for Microsoft Office jedoch keine Werte für erforderliche Eigenschaften angeben.<br />Wählen Sie eine andere Klasse aus, die beim Erstellen von Ordnern verwendet werden soll, definieren Sie die erforderlichen Eigenschaften zusammen mit dem IBM Content Manager-Aministrator als optional oder füllen Sie die erforderlichen Eigenschaften vorab mit einem Wert.",
		admin_ms_delimiter_for_office_properties: "Begrenzer für mehrwertige Zeichenfolgeeigenschaften",
		admin_ms_delimiter_for_office_properties_hover_help: "Geben Sie das Zeichen an, das als Begrenzer für Zeichenfolgeeigenschaften verwendet werden soll, die mehrwertigen Zeichenfolgeeigenschaften zugeordnet werden. Standardmäßig können Sie eine Gruppe aus Werten einer mehrwertigen Zeichenfolgeeigenschaft zuweisen, indem Sie ein Semikolon (;) als Begrenzer zum Trennen der einzelnen Werte verwenden. Wenn allerdings einer Ihrer Zeichenfolgewerte ein Semikolon enthält, können Sie diesen Wert nur dann hinzufügen, wenn Sie als Begrenzer ein anderes Zeichen verwenden. Sie können als Begrenzungszeichen zum Beispiel ein Komma (,) angeben",
		admin_ms_outlookPropertyRemembrance : "Einstellungen beim Hinzufügen von Nachrichten und Anhänge speichern",
		admin_ms_outlookPropertyRemembrance_hover_help : "Eigenschaftswerte, Position, Klassenauswahl und Sicherheit, die den von Ihnen hinzugefügten Nachrichten und Anhängen zugeordnet sind, werden gespeichert und als Standardeinstellungen verwendet, wenn später neue Elemente hinzugefügt werden.",

		admin_file_type_name_hover_help: "Name - Kurzinfo",
		admin_file_type_description_hover_help: "Beschreibung - Kurzinfo",
		admin_file_type_dialog_title: "Dateitypfilter bearbeiten",
		admin_new_file_type_dialog_title: "Neuer Dateitypfilter",
		admin_mobile_feature_dialog_title: "Feature",
		admin_mobile_feature_dialog_new_title: "Neues Feature",
		admin_file_type_instructions: "Filter erstellen, mit dem Benutzer ihre Liste mit Suchergebnissen eingrenzen können. Sie können dem Filter mehrere MIME-Typen zuordnen.",
		admin_file_type_filter_place_holder: "MIME-Typen filtern",
		admin_new_button_label: "Neu",
		admin_edit_button_label: "Bearbeiten",
		admin_delete_button_label: "Löschen",
		admin_copy_button_label: "Kopieren",
		admin_verify_button_label: "Prüfen",
		admin_availabe_filters_label: "Verfügbare Filter",
		admin_selected_filters_label: "Ausgewählte Filter",

		admin_mobile_access: "Mobiler Anwendungszugriff:",
		admin_mobile_access_hover_help: "Wenn Sie IBM Content Navigator über eine mobile Einheit verwenden wollen, ist es empfehlenswert, Benutzer zu aktivieren, damit sie über die mobile Anwendung auf das Desktop zugreifen können.<br /><br />Wenn Sie den Zugriff über die mobile Anwendung auf den Desktop inaktivieren, können die Benutzer trotzdem über ihre mobilen Browser auf den Web-Client zugreifen. Der Web-Client ist jedoch nicht für den Zugriff über mobile Einheiten konzipiert.",

		admin_mobile_access_allow_label: "Benutzern Folgendes erlauben:",
		admin_mobile_allow_add_photos: "Fotos aus Kamera und Fotoarchiv hinzufügen",
		admin_mobile_allow_add_docs: "Dokumente hinzufügen und Ordner im Repository erstellen",
		admin_mobile_allow_open_docs: "Dokumente in anderen Anwendungen öffnen",
		admin_mobile_allow_add_docs_hover_help: "Benutzer können Ordner erstellen oder Dokumente aus anderen mobilen Anwendungen hinzufügen, beispielsweise ein an eine E-Mail angehängtes Dokument.",
		admin_mobile_allow_open_docs_hover_help: "Benutzer werden aufgefordert, die Anwendung auszuwählen, mit der sie das ausgewählte Dokument anzeigen wollen. Wenn nur eine Anwendung verfügbar ist, wird diese verwendet.",
		admin_mobile_features: "Features:",
		admin_mobile_features_hover_help: "Geben Sie an, welche Features dieses Desktops in der mobilen Anwendung von IBM Content Navigator angezeigt werden.",
		admin_mobile_new_feature_button_label: "Neues Feature",
		admin_mobile_move_up_button_label: "Nach oben",
		admin_mobile_move_down_button_label: "Nach unten",
		admin_desktop_mobile_instructions: "Anweisungen für Einstellungen der mobilen Einheit hier anzeigen",
		admin_desktop_max_number_of_docs_to_add: "Maximale Anzahl hinzuzufügender Dokumente:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Geben Sie die maximale Anzahl Dokumente an, die Benutzer gleichzeitig hinzufügen können. Der Standardwert für die maximal Anzahl ist 50. Sie können den maximalen Wert auf 300 hochsetzen.",
		admin_desktop_max_number_of_docs_to_modify: "Maximale Anzahl zu ändernder Elemente:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Geben Sie die maximale Anzahl Elemente an, die Benutzer gleichzeitig ändern können. Der Standardwert für die maximal Anzahl ist 50. Sie können den maximalen Wert auf 300 hochsetzen.",
		admin_desktop_max_conversion_size: "Maximale Datenmenge für PDF-Konvertierungen (in MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Einschränkung:</b> Diese Einstellung wird von IBM Content Manager OnDemand nicht unterstützt.<br/><br/>Geben Sie die maximale Datenmenge an, die in das PDF-Format konvertiert werden kann. Dieser Grenzwert gilt, wenn Benutzer Elemente als PDF-Dateien herunterladen oder per E-Mail als PDF-Dateien senden.<br /><br />Wenn die Größe jedes Dokuments nicht ermittelt werden kann, werden die Dokumente dennoch in das PDF-Format konvertiert.<br/><br/>Der Standardgrenzwert ist 200 MB. Wird ein Grenzwert über 200 MB festgelegt, kann sich dies auf die Systemleistung auswirken.",
		admin_desktop_timeProperties: "Zeitmarke:",
		admin_desktop_time_properties_hover_help: "<b>Nur IBM FileNet P8-Benutzer:</b> Diese Einstellung gilt für benutzerdefinierte Eigenschaften und nicht für die Systemeigenschaften. Beispiel: Die Eigenschaft 'Geändert von' zeigt weiterhin den Zeitteil der Zeitmarke, wenn Sie <b>Nur Datumsteil der Zeitmarke anzeigen</b> auswählen.<br/><br/>Diese Einstellung ändert nicht die Zeitmarke im Repository.",
		admin_desktop_disable_time_stamp: "Vollständige Zeitmarke anzeigen",
		admin_desktop_enable_time_stamp: "Nur Datumsteil der Zeitmarke anzeigen",
		admin_desktop_timezone: "Zeitzone:",
		admin_desktop_timezone_localuser: "Ortszeitzone des Benutzers anzeigen",
		admin_desktop_timezone_alluser: "Gleiche Zeitzone für alle Benutzer anzeigen",
		admin_desktop_timezone_hover_help: "Sie können angeben, ob ein Benutzer eine Zeitmarke auf Basis der Ortszeitzone sieht oder ob alle Benutzer die gleiche Zeitmarke sehen.<br/><br/>Diese Einstellung ändert nicht die Zeitmarke im Repository. Die gewählte Einstellung bestimmt allerdings die Zeitzone, die zum Erstellen der Zeitmarke im Repository verwendet wird, wenn die Benutzer Elemente hinzufügen oder Ändern.",
		admin_desktop_mobile_feature_display_label: "Anzeigen",
		admin_desktop_mobile_feature_icon_file_label: "Symboldatei",
		admin_mobile_feature_dialog_icon_file_label: "Symboldatei:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Name",
		admin_desktop_mobile_select_feature_label: "Feature auswählen",
		admin_desktop_mobile_feature_icon_label: "Featuresymbol",
		admin_desktop_share_admin_none: "Administrator ist nicht festgelegt.",
		admin_desktop_share_admin_edit_label: "Administrator festlegen...",
		admin_browse_icon: "Symbol für Durchsuchen",
		admin_search_icon: "Symbol für Suche",
		admin_favorites_icon: "Favoritensymbol",
		admin_casesearch_icon: "Fallsymbol",
		admin_datacap_icon: "Datacap-Symbol",
		admin_system_defined: "Systemdefiniert",
		admin_icon_file_placeholder_text: "Dateiposition (z. B. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Root",
		admin_folder_default: "Standard",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Symbolleisten",
		admin_menu_context_menus: "Kontextmenüs",
		admin_menu_office_toolbars: "Symbolleistenbefehle von Microsoft Office",
		admin_menu_office_menus: "Kontextmenüs von Microsoft Office",

		admin_file_name_label: "Dateiname:",
		admin_exportconfiguration_security_label: "Benutzer und Gruppen einschließen, die für die Verwendung dieses Desktops autorisiert sind",
		admin_exportconfiguration_instruction: "Sie können Ihre Desktops, einschließlich der Repository-Konfigurationen und der Plug-in-Konfigurationen, die zu den ausgewählten Desktops gehören, in eine Datei exportieren, die Sie in eine andere Instanz von IBM Content Navigator importieren können.",
		admin_exportconfiguration_dialog_label: "Desktop exportieren",
		admin_exportconfiguration_button_label: "Exportieren",
		admin_dialog_select_all: "Alles auswählen",
		admin_dialog_deselect_all: "Alles löschen",

		admin_importconfiguration_instruction: "Die Elemente in der ausgewählten Konfigurationsdatei werden in dieses System importiert. Wenn jedoch bereits ein Element mit derselben ID auf dem System vorhanden ist, müssen Sie entscheiden, ob das Element beibehalten oder überschrieben werden soll.",
		admin_importconfiguration_dialog_label: "Desktop importieren",
		admin_importconfiguration_reason_dialog_label: "Schwärzungsgründe importieren",
		admin_importconfiguration_button_label: "Importieren",
		admin_to_be_imported: "Zu importierendes Konfigurationselement",
		admin_on_target_system: "Auf dem Zielsystem vorhandenes Element",
		admin_import_short_warning_message: "Die folgenden Elemente sind bereits auf diesem System vorhanden. Wählen Sie die Elemente aus, die auf diesem System ersetzt werden sollen:",
		admin_import_warning_message: "Die folgenden Konfigurationselemente weisen dieselben IDs wie auf dem Zielsystem vorhandene Elemente auf. Wählen Sie nur die Elemente aus, die Sie importieren und auf dem Zielsystem überschreiben wollen.<br /><br />Wenn ein Konfigurationselement nicht überschrieben werden soll, erstellen Sie eine Kopie des Elements auf der Instanz, aus der Sie den Desktop exportiert haben, weisen Sie ihm eine andere ID zu und ordnen Sie es dem Desktop zu. Exportieren Sie den Desktop erneut und importieren Sie anschließend den Desktop auf dieser Instanz.",
		admin_choose_file_to_import_label: "Zu importierende Datei auswählen:",
		admin_download_imported_log: "Downloadbericht",
		admin_desktop_import_summary: "Zusammenfassung des Desktopimports",
		admin_reason_import_summary: "Zusammenfassung des Imports von Schwärzungsgründen",
		admin_rba_import_summary: "Zusammenfassung des Verwaltungsrollenimports",
		admin_import_open_tabs_checking: "Sie müssen alle Registerkarten mit Ausnahme der Registerkarte <bold>Desktops</bold> im Verwaltungstool schließen, bevor Sie Desktops importieren können.",
		admin_import_no_conflict: "Die folgenden Elemente werden importiert:",
		admin_desktop_invalid: "Ungültiger Desktop",
		admin_desktop_warning: "Der Desktop wurde mit Warnungen gespeichert.",
		admin_repos_warning: "Das Repository wurde mit Warnungen gespeichert.",
		admin_config_type_icon: "Symbol für Konfigurationselementtyp",

		admin_approval_workflow: "Genehmigungsworkflow",
		admin_approval_workflow_hover: "Ermöglicht den Benutzern das Starten eines vordefinierten Genehmigungsworkflows. Sie können den Genehmigungsworkflow inaktivieren, um den Benutzern das Starten eines angepassten Genehmigungsworkflows zu ermöglichen, der durch eine Subskription definiert wird. Standardmäßig ist der Genehmigungsworkflow aktiviert.<br><br><b>Wichtig:</b> Wenn Sie den Genehmigungsworkflow aktivieren, müssen Sie auch sicherstellen, dass die vordefinierten Workflowdefinitionen (ICNParallelDocumentApproval.pep und/oder ICNSequentialDocumentApproval.pep) dem Repository hinzugefügt und an Content Process Engine übertragen werden.",

		admin_cannot_add_desktop_members_error: "Sie können die Benutzer und Gruppen, die Zugriff auf diesen Desktop haben, nicht angeben.",
		admin_cannot_add_desktop_members_error_explanation: "Sie verfügen nicht über die Berechtigungen zum Abrufen von Benutzer- und Gruppeninformationen.",
		admin_cannot_add_desktop_members_error_userResponse: "Melden Sie sich mit einem anderen Benutzernamen an oder bitten Sie den IBM Content Manager-Systemadministrator, Ihnen das Zugriffsrecht UserACLOwner zu erteilen, das zum Abrufen der Benutzer- und Gruppeninformationen erforderlich ist.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Sie dürfen keine Benutzer und Gruppen auswählen.",
		admin_cannot_select_users_groups_error_explanation: "Sie verfügen nicht über die Berechtigungen zum Abrufen von Benutzer- und Gruppeninformationen.",
		admin_cannot_select_users_groups_error_userResponse: "Melden Sie sich mit einem anderen Benutzernamen an oder bitten Sie den IBM Content Manager-Systemadministrator, Ihnen das Zugriffsrecht UserACLOwner zu erteilen, das zum Abrufen der Benutzer- und Gruppeninformationen erforderlich ist.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Der OAuth2-Client wurde nicht gefunden.",
		oauth_client_not_found_error_explanation: "Die OAuth2-Client-ID ${0} wurde nicht gefunden.",
		oauth_client_not_found_error_userResponse: "Wenden Sie sich an Ihren Systemadministrator und teilen Sie ihm mit, dass die OAuth2-Client-ID nicht gefunden wurde.",
		oauth_client_not_found_error_adminResponse: "Prüfen Sie die Repository-Konfiguration und verifizieren Sie, dass sie die richtige OAuth2-Client-ID enthält.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "Client-ID",

		oauth_login_failed_error: "Die Repository-Anmeldung ist fehlgeschlagen.",
		oauth_login_failed_error_explanation: "Ein Versuch, sich am Repository ${0} anzumelden, ist fehlgeschlagen.",
		oauth_login_failed_error_userResponse: "Prüfen Sie, ob die Benutzer-ID und das Kennwort richtig sind, und wiederholen Sie den Anmeldeversuch.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "Repository-ID",

		oauth_error_return_error: "Beim Versuch, sich an ${0} anzumelden, ist ein Fehler aufgetreten.",
		oauth_error_return_error_explanation: "Der ${0}-Autorisierungsversuch ist fehlgeschlagen.",
		oauth_error_return_error_userResponse: "Wenden Sie sich mit den folgenden Informationen an den Systemadministrator: Der ${0}-Autorisierungsversuch ist fehlgeschlagen und hat folgende Fehlernachricht zurückgegeben: <br>${1}<br><b>Fehler:</b> ${2}.<br><b>Beschreibung:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Weitere Informationen zum Fehler finden Sie in den Protokolldateien des Webanwendungsservers.  Weitere Informationen zu den Protokolldateien finden Sie im IBM Knowledge Center im Thema zu IBM Content Navigator-Protokolldateien. Versuchen Sie das Problem anhand der Informationen zum ${0}-Autorisierungsversuch zu beheben und prüfen Sie, ob OAuth2 aktiviert ist.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth-Zielanwendung",
		oauth_error_return_error_1: "Fehlernachricht",
		oauth_error_return_error_2: "Fehler",
		oauth_error_return_error_3: "Fehlerbeschreibung",

		oauth_error_unknown: "Unbekannte OAuth-Fehlernachricht.",

		delete_share_permission_error: "Die Freigabe wurde nicht gelöscht.",
		delete_share_permission_error_explanation: "Sie haben nicht die entsprechenden Berechtigungen zum Löschen der Freigabe.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Sie können dieses Element nicht freigeben.",
		class_not_support_share_error_explanation: "Die Klasse ${0} wurde nicht zur Unterstützung für das Freigeben eingerichtet",
		class_not_support_share_error_0: "Klassenname",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Sie können dieses Element nicht freigeben.",
		rbr_not_support_share_error_explanation: "Dem Element wurde sensibler Inhalt hinzugefügt.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Das Gerät, über das sich der Benutzer anmelden will, ist nicht für den Zugriff auf den Account des Benutzers autorisiert.",
		box_oauth_error_invalid_request: "Für die Anforderung fehlt ein erforderlicher Parameter, sie enthält einen ungültigen Parameter, sie enthält einen Parameter mehrmals oder ist auf andere Weise fehlerhaft.",
		box_oauth_error_unsupported_response_type: "Der Autorisierungsserver unterstützt nicht das Abrufen eines Autorisierungscodes mit dieser Methode.  Prüfen Sie den Wert der Codeparameter in Ihrer Anforderung.",
		box_oauth_error_access_denied: "Der Ressourceneigner oder der Autorisierungsserver hat die Anforderung verweigert.",
		box_oauth_error_temporarily_unavailable: "Die Rate Ihres Geräts wird eingeschränkt. Sie müssen entweder die Rate der Autorisierungsanforderungen herabsetzen oder eine Weile warten.",
		box_oauth_error_unknown: "Unbekannte Box-Fehlernachricht.",

		admin_default_search_type: "Standardsuchtyp",
		admin_default_search_type_hover: "Geben Sie an, welche Option im Feld <b>Suchen nach</b> im Menü <b>Suchoptionen</b> standardmäßig ausgewählt ist.",
		admin_default_search_type_documents: "Dokumente",
		admin_default_search_type_folders: "Ordner",
		admin_default_search_type_folders_and_documents: "Dokumente und Ordner",

		admin_restricted_search_type: "Suche zulassen für",
		admin_restricted_search_type_hover: "Standardmäßig können Benutzer Dokumente und Ordner durchsuchen. Wenn Sie die Suchoption ausblenden und nur die Suche in Dokumenten zulassen wollen, wählen Sie 'Dokumente' aus und 'Ordner' ab.</br></br> Wenn Sie die Suche in Dokumenten und Ordnern zulassen wollen, wählen Sie die Standardoption aus, die angezeigt werden soll, wenn das Suchfenster geöffnet wird.",
		admin_restricted_search_type_documents: "Dokumente",
		admin_restricted_search_type_folders: "Ordner",
		admin_restricted_search_type_folders_and_documents: "Dokumente und Ordner",

		admin_default_search_version: "Standardsuchversion",
		admin_default_search_version_hover: "Geben Sie an, welche Option im Feld <b>Version</b> im Menü <b>Suchoptionen</b> standardmäßig ausgewählt ist.",

		admin_all_classes_search: "Alle Klassen durchsuchen",
		admin_all_classes_search_hover: "Geben Sie an, ob Benutzer alle Klassen durchsuchen dürfen, und wenn ja, was in den Dokumentsuchen eingeschlossen werden soll.",
		admin_all_classes_search_removed_hover: "Die Optionen zum Durchsuchen aller Klassen sind nicht verfügbar, da der Parameter 'context-param allPseudoClassHidden' in der Datei web.xml der Navigator-Anwendung auf wahr (true) gesetzt ist.",
		admin_all_classes_search_hide: "Auswahl zum Durchsuchen aller Klassen entfernen",
		admin_all_classes_search_documents_only_documents: "In einer Dokumentsuche werden nur Dokumente, gespeicherte Suchen und Erfassungsvorlagen eingeschlossen",
		admin_all_classes_search_documents_non_folders: "In einer Dokumentsuche werden alle Elemente außer Ordner eingeschlossen",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Baumstrukturansicht:",
		admin_feature_config_tree_view_hoverhelp: "Geben Sie an, ob Benutzer die Ordnerliste im Repository über das Teilfenster 'Durchsuchen' aufrufen können. Wenn Sie das Teilfenster 'Durchsuchen' ausblenden, müssen die Benutzer die Inhaltsliste zum Navigieren zu Ordnern im Repository verwenden.",
		admin_feature_config_selected_repositories_label: "Repositorys:",
		admin_feature_config_selected_repositories_hoverhelp: "Wählen Sie die Repositorys aus, auf die die Benutzer in diesem Feature zugreifen können.",
		admin_feature_config_selected_repositories_select_state_hdr: "Repository auswählen",
		admin_feature_config_selected_repositories_name_hdr: "Repository-Name",
		admin_feature_config_selected_repositories_show_hdr: "Anzeigen",
		admin_feature_config_invalid_icon_title: "Bei dem Feature fehlen einige erforderliche Einstellungen",
		admin_feature_config_view_select_hdr: "Ansicht auswählen",
		admin_feature_config_view_hdr: "Ansicht",
		admin_feature_config_view: "Ansicht",
		admin_feature_config_views: "Ansichten:",
		admin_feature_config_views_hoverhelp: "Geben Sie an, welche Ansichten die Benutzer auf die Inhaltsliste anwenden dürfen. Die Ansichten werden in der Reihenfolge angezeigt, in der sie aufgelistet sind. Die erste ausgewählte Ansicht ist die Standardansicht für das Feature.<br><br><b>Wichtig:</b> Wenn Sie die Filmstreifenansicht aktivieren, müssen Sie den Viewer mit HTML-Konvertierung konfigurieren, um Dokumentvorschauen anzuzeigen.",

		admin_custom_dialog_name: "Name:",
		admin_custom_dialog_value: "Wert:",
		admin_custom_setting_name_hover: "Geben Sie den Namen der Daeja ViewONE-Einstellung ein, die Sie Ihrer Konfiguration hinzufügen wollen. Weitere Informationen zu den Konfigurationseinstellungen finden Sie in der Dokumentation zu Daeja ViewONE.",
		admin_custom_setting_value_hover: "Geben Sie den Wert ein, den Sie für die Daeja ViewONE-Konfigurationseinstellung verwenden wollen. Weitere Informationen zu den gültigen Werten für die Konfigurationseinstellung finden Sie in der Dokumentation zu Daeja ViewONE.",

		entry_template_name_required_message: "Das Namensfeld in den Erfassungsvorlageneinstellungen ist erforderlich.",
		entry_template_name_invalid_message: "Das Namensfeld in den Erfassungsvorlageneinstellungen darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Wenn bestimmte Benutzer und Gruppen für das Feld 'Freigeben für' in den Erfassungsvorlageneinstellungen ausgewählt sind, müssen Sie mindestens einen Benutzer bzw. eine Gruppe angeben.",
		entry_template_no_permission_to_save_to_teamspace_message: "Sie sind nicht berechtigt, Erfassungsvorlagen zum Teamarbeitsbereich (${0}) hinzuzufügen, der in 'Speichern in' in den Erfassungsvorlageneinstellungen ausgewählt wurde.",
		entry_template_save_in_destination_required_message: "Sie müssen einen Standardspeicherort im Abschnitt <b>Elementspeicherposition festlegen</b> angeben.",
		entry_template_save_in_destination_must_select_folder: "Wenn Sie das Feld <b>Speichern in</b> ausblenden und Benutzer einem Ordner neue Elemente hinzufügen müssen, müssen Sie einen Ordner im Feld <b>Standardspeicherort</b> im Abschnitt <b>Elementspeicherposition festlegen</b> auswählen.",
		entry_template_what_to_save_required_message: "Wählen Sie mindestens eine Option für 'Was wollen Sie speichern?' unter 'Optionen festlegen' aus.",
		entry_template_custom_workflow_empty_message: "Wenn Sie <b>Angepasster Workflow...</b> auswählen, müssen Sie den gewünschten Workflow suchen und auswählen.",

		entry_template_new: "Neue Erfassungsvorlage",
		entry_template_name_hover: "Der Name der Erfassungsvorlage darf die folgenden Zeichen nicht enthalten: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Der Name der Erfassungsvorlage darf keine der folgenden Zeichen enthalten: * \\ / : ? \" < > |",
		entry_template_description_hover: "Stellen Sie eine Beschreibung bereit, die die Benutzer in die Lage versetzt, zwischen dieser Erfassungsvorlage und den anderen Erfassungsvorlagen zu unterscheiden.",
		entry_tempalte_save_in_hover: "Geben Sie an, wo die Erfassungsvorlage gespeichert werden soll.<br><br><b>Einschränkung:</b> Wenn Sie die Erfassungsvorlage in einem Teamarbeitsbereich speichern, kann sie nur innerhalb dieses Teamarbeitsbereichs verwendet werden.",
		entry_template_inherit_hover: "Wenn Sie diese Option auswählen, werden die Sicherheitseinstellungen für den Stammordner der Liste der Benutzer und Gruppen hinzugefügt, für die die Erfassungsvorlage freigegeben ist.",
		entry_template_builder_aria_label: "Builder für Erfassungsvorlagen",
		entry_template_builder_layout_aria_label: "Builder für Erfassungsvorlageneigenschaften",

		entry_template_settings_document: "Erfassungsvorlage definieren",
		entry_template_settings_folder: "Elementspeicherposition festlegen",
		entry_template_settings_folder_intro: "Geben Sie an, wo mithilfe dieser Erfassungsvorlage hinzugefügte Elemente gespeichert werden sollen.",
		entry_template_settings_properties: "Elementeigenschaften festlegen",
		entry_template_settings_properties_intro: "Sie können für die mithilfe dieser Erfassungsvorlage hinzugefügten Elemente Standardwerte bzw. vordefinierte Werte angeben. Sie können auch das Layout der Eigenschaften ändern, um zu steuern, welche Eigenschaften und in welcher Reihenfolge sie angezeigt werden.",
		entry_template_settings_workflow: "Workflow für das Element konfigurieren",
		entty_template_settings_workflow_intro: "Sie können angeben, ob ein Workflow gestartet werden soll, wenn Elemente über diese Erfassungsvorlage hinzugefügt werden.",
		entry_template_settings_security: "Elementsicherheit festlegen",
		entry_template_settings_security_intro: "Sie können für die mithilfe dieser Erfassungsvorlage hinzugefügten Elemente Standard- bzw. vordefinierte Sicherheitseinstellungen angeben. Benutzer mit den entsprechenden Berechtigungen können möglicherweise die Sicherheit des Elements ändern, nachdem es hinzugefügt wurde.",
		entry_template_settings_options: "Optionen für das Element festlegen",
		entry_template_xt_warning: "Beim Speichern der Änderungen an dieser Erfassungsvorlage wird sie von einer Workplace XT- in eine Navigator-Erfassungsvorlage konvertiert. IBM Workplace XT unterstützt keine IBM Content Navigator-Erfassungsvorlagen.",

		entry_template_properties_edit_layout: "Layout bearbeiten...",
		entry_template_properties_read_only: "Schreibgeschützt",
		entry_template_properties_hidden: "Ausgeblendet",

		entry_template_destination_show: "Feld <b>Speichern in</b> anzeigen",
		entry_template_destination_show_hover: "Wenn Sie das Feld <b>Speichern in</b> anzeigen, können die Benutzer ändern, wo Elemente gespeichert werden.",
		entry_template_destination_hide: "Feld <b>Speichern in</b> ausblenden",
		entry_template_destination_hide_hover: "Wenn Sie das Feld <b>Speichern in</b> ausblenden, können die Benutzer nicht ändern, wo Elemente gespeichert werden.",
		entry_template_folder_save_in_default: "Standardposition für <b>Speichern in</b>:",
		entry_template_folder_save_in_default_hover: "Geben Sie die Standardposition an, an der Elemente mithilfe dieser Erfassungsvorlage hinzugefügt werden.<br><br>Die von Ihnen ausgewählte Standardposition führt zu Einschränkungen im Laufzeitverhalten der Erfassungsvorlage:<ul><li>Benutzer können kein anderes Repository auswählen.</li><li>Handelt es sich bei der Standardposition um einen Teamarbeitsbereich, können Benutzer keinen anderen Teamarbeitsbereich auswählen.</li></ul>Falls die Benutzer diese Erfassungsvorlage allerdings einem Ordner zuordnen, können sie die Speicherposition überschreiben, die für diese Erfassungsvorlage konfiguriert ist.",
		entry_template_folder_restrict_choice: "Benutzer müssen Elemente der Standardposition oder einem der Standardposition untergeordneten Ordner hinzufügen",
		entry_template_folder_file_in_required: "Benutzer müssen einem Ordner neue Elemente hinzufügen",
		entry_template_folder_file_in_required_hover: "Wenn Sie diese Option nicht auswählen, können Benutzer Elemente dem Stammordner des Repositorys hinzufügen.<br><br><b>Einschränkung:</b> Die Desktopkonfiguration kann erfordern, dass die Benutzer einen Ordner auswählen.",

		entry_template_document_type_show: "Feld <b>Was wollen Sie speichern?</b> anzeigen",
		entry_template_document_type_show_hover: "Wenn Sie das Feld <b>Was wollen Sie speichern?</b> anzeigen, werden die von Ihnen ausgewählten Elemente als Optionen in diesem Feld angezeigt.",
		entry_template_document_type_hide: "Feld <b>Was wollen Sie speichern?</b> ausblenden",
		entry_template_document_type_hide_hover: "Wenn Sie das Feld <b>Was wollen Sie speichern?</b> ausblenden, wird der von Ihnen ausgewählte Dokumenttyp immer verwendet, wenn Benutzer Dokumente mithilfe dieser Erfassungsvorlage hinzufügen.",
		entry_template_document_type: "Diese Erfassungsvorlage kann zum Hinzufügen der folgenden Elemente verwendet werden:",
		entry_template_document_type_hover: "Wenn Sie das Feld <b>Was wollen Sie speichern?</b> anzeigen, werden die von Ihnen ausgewählten Elemente als Optionen in diesem Feld angezeigt.<br><br>Wenn Sie das Feld <b>Was wollen Sie speichern?</b> ausblenden, wird der von Ihnen ausgewählte Dokumenttyp immer verwendet, wenn Benutzer Dokumente mithilfe dieser Erfassungsvorlage hinzufügen.",

		entry_template_misc: "Zusätzliche Optionen:",
		entry_template_auto_classify_show: "Inhalt des Dokuments automatisch klassifizieren",
		entry_template_auto_classify_show_hover: "Wenn ein Dokument für FileNet Content Manager klassifiziert wird, wird der Inhalt des Dokuments untersucht, um die passenden Klassen- und Eigenschaftswerte für das Dokument zu ermitteln.<br><br>Wenden Sie sich an den Systemadministrator, um festzustellen, ob die Inhaltsklassifizierung für Content Platform Engine aktiviert ist.<br><br>Wenn Sie diese Option aktivieren, können die Klasse und die Eigenschaften des Dokuments geändert werden, wenn ein Benutzer das Dokument dem Repository hinzufügt.",
		entry_template_allow_duplicate_file_names: "Dokumente mit doppelt vorhandenen Dateinamen zulassen",
		entry_template_allow_duplicate_file_names_hover: "standardmäßig können Sie Dokumente mit demselben Namen einem Ordner in FileNet Content Manager hinzufügen. Sie können diese Option abwählen, wenn jede Datei an der ausgewählten Speicherposition einen eindeutigen Namen haben soll.",
		entry_template_allow_compound_documents: "Dieses Dokument darf einem Mischdokument übergeordnet sein",
		entry_template_version_show: "Versionsoptionen für Hinzufügen und Einchecken anzeigen",
		entry_template_version_hide: "Versionsoptionen für Hinzufügen und Einchecken ausblenden",
		entry_template_version_to_add_as: "Als Standardversion hinzufügen:",
		entry_template_version_default: "Standardversionsoption",
		entry_template_version_default_checked: "Hauptversion",
		entry_template_version_default_unchecked: "Nebenversion",
		entry_template_version_display: "Dokumentversion:",
		entry_template_version_display_show: "Anzeigen",
		entry_template_version_display_hide: "Ausblenden",
		entry_template_version_default_add: "Als Standardversion hinzufügen:",

		entry_template_checkin_version_show: "Versionsoptionen für Einchecken anzeigen",
		entry_template_checkin_version_hide: "Versionsoptionen für Einchecken ausblenden",

		entry_template_checkin_version_message_no_versions: "Die Versionsrichtlinie der ausgewählten Klasse hindert die Benutzer am Einchecken einer neuen Version des Dokuments.",
		entry_template_checkin_version_message_always_version: "Die Versionsrichtlinie der ausgewählten Klasse hindert die Benutzer am Ersetzen der aktuellen Version des Dokuments.",

		entry_template_applied: "Diese Erfassungsvorlage verwenden, wenn Benutzer:",
		entry_template_applied_add: "Dokumente hinzufügen (erforderlich)",
		entry_template_applied_add_folder: "Ordner erstellen (erforderlich)",
		entry_template_applied_checkin: "Einchecken",
		entry_template_applied_properties_group: "Eigenschaften anzeigen oder bearbeiten:",
		entry_template_applied_properties: "Im Fenster 'Eigenschaften'",
		entry_template_applied_viewer: "Im Applet Viewer",
		entry_template_applied_docinfo: "Im Fenster 'Dokumentinformationen'",
		entry_template_applied_no_class_support: "Diese Erfassungsvorlage kann zum Hinzufügen von Elementen, aber nicht zum Einchecken von Dokumenten oder Anzeigen und Bearbeiten von Eigenschaften verwendet werden. Die ausgewählte Klasse muss geändert werden, damit sie diese Situationen unterstützt. Wenn Sie eine Erfassungsvorlage in diesen Situationen verwenden müssen, bitten Sie den Administrator, die Klasse im Verwaltungstool zu ändern, sodass darin Erfassungsvorlage-IDs gespeichert werden können.",
		entry_template_applied_no_child_component_support: "Die ausgewählte Klasse hat untergeordnete Komponenten und es ist ein Eigenschaftslayout definiert. Eigenschaftslayouts unterstützen untergeordnete Komponenten nicht. Die untergeordneten Komponenten werden dem Benutzer nicht angezeigt.",
		entry_template_applied_child_component: "Die ausgewählte Klasse hat untergeordnete Komponenten. Die untergeordneten Komponenten werden dem Benutzer angezeigt, Sie können sie aber nicht in dieser Erfassungsvorlage konfigurieren.",

		entry_template_properties_show: "Abschnitt <b>Eigenschaften</b> anzeigen",
		entry_tempalte_properties_show_hover: "Wenn Sie den Abschnitt <b>Eigenschaften</b> anzeigen, können die Benutzer Eigenschaftswerte ändern, die in der Erfassungsvorlage angezeigt werden und die keine schreibgeschützten Eigenschaften sind.",
		entry_template_properties_hide: "Abschnitt <b>Eigenschaften</b> ausblenden",
		entry_template_properties_hide_hover: "Wenn Sie den Abschnitt <b>Eigenschaften</b> ausblenden, können die Benutzer keine Eigenschaftswerte ändern. In der Erfassungsvorlage müssen alle Werte definiert sein, die Sie verwenden wollen, wenn Elemente mithilfe dieser Erfassungsvorlage hinzugefügt werden.",

		entry_template_security_show: "Abschnitt <b>Sicherheit</b> anzeigen",
		entry_template_security_show_hover: "Wenn Sie den Abschnitt <b>Sicherheit</b> anzeigen, können Benutzer mit den entsprechenden Berechtigungen die Sicherheit des Elements ändern.",
		entry_template_security_hide: "Abschnitt <b>Sicherheit</b> ausblenden",
		entry_template_security_hide_hover: "Wenn Sie den Abschnitt <b>Eigenschaften</b> ausblenden, können die Benutzer die Sicherheit der Elemente nicht ändern. Alle Sicherheitseinstellungen, die Sie beim Hinzufügen oder Bearbeiten von Elementen verwenden wollen, müssen in der Erfassungsvorlage definiert sein.",
		entry_template_security_policy: "Sicherheitsrichtlinie:",
		entry_template_security_policy_hover: "Abhängig von der ausgewählten Sicherheitsrichtlinie ermöglicht die Richtlinie Folgendes:<br><ul><li>Überschreiben der Berechtigungen, die unter <b>Elementsicherheit festlegen</b> angegeben sind</li><li>Hinzufügen zu den Berechtigungen, die unter <b>Elementsicherheit festlegen</b> angegeben sind</li></ul>",
		entry_template_security_policy_none: "Keine Sicherheitsrichtlinie ausgewählt",
		entry_template_security_inherit: "Sicherheitseinstellungen aus Stammordner übernehmen",
		entry_tempalte_save_in_hover: "Geben Sie an, wo die Erfassungsvorlage gespeichert werden soll.<br><br><b>Einschränkung:</b> Wenn Sie die Erfassungsvorlage in einem Teamarbeitsbereich speichern, kann sie nur innerhalb dieses Teamarbeitsbereichs verwendet werden.",
		entry_template_security_inherit_item_security_hover: "Wenn Sie diese Option auswählen, werden die Sicherheitseinstellungen aus dem Stammordner den Sicherheitseinstellungen hinzugefügt, die durch einen der folgenden Punkte definiert sind:<ul><li>Die Klasse, die im Abschnitt <b>Elementeigenschaften festlegen</b> angegeben ist</li><li>Die angepasste Sicherheit, die Sie im Abschnitt <b>Elementsicherheit festlegen</b> angegeben haben</li></ul>",
		entry_template_security_change: "Von der ausgewählten Klasse definierte Sicherheit überschreiben",
		entry_template_security_change_hover: "Wenn Sie diese Option auswählen, werden die für die Klasse definierten Sicherheitseinstellungen standardmäßig angezeigt. Sie können dann die Sicherheitseinstellungen für die Erfassungsvorlage ändern.<br><br>Wenn Sie den Abschnitt <b>Sicherheit</b> anzeigen, können Benutzer mit den entsprechenden Berechtigungen die Sicherheit des Elements ändern.<br><br>Wenn Sie diese Option auswählen und angeben, dass die Sicherheitseinstellungen aus dem Stammordner übernommen werden sollen, werden alle übernehmbaren Berechtigungen der von Ihnen angegebenen Sicherheit hinzugefügt.",
		entry_template_security_default_item_security: "Standardelementsicherheit des Benutzers, der das Element hinzufügt, überschreiben",
		entry_template_security_policy_message_override: "Die ausgewählte Sicherheitsrichtlinie ist zum Überschreiben der unter 'Sicherheit festlegen' angegebenen Berechtigungen konfiguriert.",
		entry_template_security_policy_message_add: "Die ausgewählte Sicherheitsrichtlinie ist zum Hinzufügen der unter 'Sicherheit festlegen' angegebenen Berechtigungen konfiguriert.",
		entry_template_security_policy_preserve_true_hover: "Behält direkte Berechtigung bei",
		entry_template_security_policy_preserve_false_hover: "Behält direkte Berechtigung nicht bei",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Spezifische Rollen",
		entry_template_security_class_role_search_title: "Nach Rollen suchen:",
		entry_template_secuirty_class_member_title: "Mitgliedsliste für ${0}",
		entry_template_secuirty_class_folder_only: "Diese Berechtigungen gelten nur für diesen Ordner",
		entry_template_secuirty_class_folder_and_immediate_children: "Diese Berechtigungen gelten für diesen Ordner und für alle direkt untergeordneten Ordner, die zur Vererbung von Zugriffsberechtigungen von diesem Ordner konfiguriert sind.",
		entry_template_secuirty_class_folder_and_all_children: "Diese Berechtigungen gelten für diesen Ordner und für alle Nachkommen, die zur Vererbung von Zugriffsberechtigungen von diesem Ordner konfiguriert sind. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Diese Berechtigungen gelten für alle direkt untergeordneten Ordner, die zur Vererbung von Zugriffsberechtigungen von diesem Ordner konfiguriert sind.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Diese Berechtigungen gelten für alle Nachkommen, die zur Vererbung von Zugriffsberechtigungen von diesem Ordner konfiguriert sind.",

		entry_template_class_security_message_no_override: "Die Sicherheit der ausgewählten Klasse hindert Benutzer am Überschreiben der Sicherheit.",
		entry_template_class_security_required_privileges: "<b>Wichtig</b>: Wenn Sie die Sicherheit der ausgewählten Klasse überschreiben, müssen Benutzer, die Elemente mithilfe dieser Erfassungsvorlage hinzufügen, die Berechtigungen ItemSetACL und UserACLOwner haben.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Workflow mit sequenziellem Muster",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Workflow mit parallelem Muster",
		entry_template_workflow_type_existing: "Angepasster Workflow...",
		entry_template_workflow_launch_prompt: "Benutzer fragen, ob der Workflow gestartet werden soll",
		entry_template_workflow_launch_auto: "Workflow automatisch starten",
		entry_template_workflow_modify_launch: "Benutzern erlauben, den Startschritt zu ändern",
		entry_template_workflow_modify_launch_hover: "Wählen Sie diese Option aus, wenn Sie den Benutzern erlauben wollen, zu ändern, wie der Workflow gestartet wird.",

		entry_template_optionsButton_title: "Ändern",
		entry_template_optionsButton_readonly_title: "Zuordnung anzeigen",
		entry_template_optionsDialog_title: "Ordnerzuordnungseinstellungen",
		entry_template_removeButton_title: "Entfernen",
		entry_template_addButton_title: "Hinzufügen",
		entry_template_selected_entry_templates: "Ausgewählte Erfassungsvorlagen",
		entry_template_docs_added_to_template_destination: "Dokumente werden dem in der Erfassungsvorlage angegebenen Ziel hinzugefügt.",
		entry_template_docs_added_to_other_object_store: "Diese Erfassungsvorlage fügt dem Objektspeicher ${0} Elemente hinzu.",
		entry_template_inherited_entry_templates_label: "Gewünschte Aktion: ",
		entry_template_inherited_entry_templates: "Erfassungsvorlagenzuordnungen aus Ordner übernehmen: ",
		entry_template_inherited_entry_templates_not: "Neue Zuordnungen für diesen Ordner erstellen",
		entry_template_inherited_folder_path: "Die Erfassungsvorlagen in der Liste der ausgewählten Erfassungsvorlagen werden dem folgenden Ordner zugeordnet: ${0}. <br> Der Pfad zum Ordner ist ${1}.",
		entry_template_folder_associations_title: "Erfassungsvorlagen zuordnen",
		entry_template_folder_associations_intro: "Wenn Sie eine Erfassungsvorlage einem Ordner zuordnen, müssen die Benutzer die Erfassungsvorlage verwenden, um Elementen zu einem Ordner hinzuzufügen. Wenn Sie mehrere Erfassungsvorlagen einem Ordner zuordnen, können die Benutzer die zu verwendende Erfassungsvorlage auswählen.",
		entry_tempalte_folder_associations_entrytemplate: "Erfassungsvorlage: ",
		entry_template_avaliable_entry_templates: "Verfügbare Erfassungsvorlagen",
		entry_template_fileTypes_intro_title: "Zulässige Dateitypen:",
		entry_template_fileTypes_intro: "Standardmäßig kann eine Erfassungsvorlage verwendet werden, um beliebige Dokumenttypen dem Repository hinzuzufügen. Wenn Sie jedoch mindestens einen Dateityp auswählen, ist die Erfassungsvorlage nur verfügbar, wenn die Benutzer Dokumente hinzufügen, die einem der angegebenen Dateitypen entsprechen.",
		entry_template_fileTypes: "Dateitypen",
		entry_template_fileType_error: "Ungültige Dateitypen sind für mindestens eine Erfassungsvorlagenzuordnung ausgewählt. Sie müssen die ungültigen Dateitypen entfernen, bevor diese Erfassungsvorlagenzuordnungen gespeichert werden können.",
		entry_template_fileTypes_any_type_of_file: " Beliebiger Dateityp",
		entry_template_description_label: "Beschreibung",
		entry_template_ItemInfoPrefix: "Zuordnen zu: ",
		entry_template_TargetObjectStoreName: "Zielobjektspeicher",
		entry_template_class: "Klasse",
		entry_template_current_folder_as_parent: "Ordner als Ziel verwenden",
		entry_template_view_minetypes: "MIME-Typen anzeigen",
		entry_template_avaliable_MIME_types: "Verfügbare Dateitypen",
		entry_template_selected_MIME_types: "Ausgewählte Dateitypen",
		entry_template_MIME_type_column: "Name der Dateitypkategorie",
		entry_template_file_type_not_existing: "Entfernen Sie die ungültigen Dateitypen.",
		entry_template_MIME_types: "MIME-Typen:",
		entry_template_MIME_types_info_dialog_title: "Die MIME-Typen für",
		entry_template_destination_label: "Dokumente hinzufügen zu: ",
		entry_template_destination_help: "Geben Sie an, wo Dokumente im Repository gespeichert werden, wenn Benutzer Dokumente mithilfe der ausgewählten Erfassungsvorlage zu diesem Ordner hinzufügen.",
		entry_template_radioButton_folder_destination: "Ausgewählter Ordner",
		entry_template_radioButton_template_destination: "In der Erfassungsvorlage angegebenes Ziel",
		entry_tempalte_teamspace_default: "Standarderfassungsvorlage",
		entry_template_folder_associations_save_new: "Sie haben einige Erfassungsvorlagenzuordnungen geändert. Wollen Sie dieses Fenster ohne Speichern der Änderungen schließen?",
		entry_template_mode_binding_label: "Eigenschaften",
		entry_template_columns_className: "Klassenname",
		entry_template_columns_type: "Vorlagentyp",
		entry_template_columns_workflow: "Workflowname",
		entry_template_columns_destination: "Ziel",
		entry_template_association_less_than_record: "${0} Erfassungsvorlagen werden nicht unter 'Ausgewählte Erfassungsvorlagen' aufgelistet. Sie sind nicht berechtigt, sie anzuzeigen. Oder sie wurden gelöscht. Wenden Sie sich für weitere Informationen an den Systemadministrator.",
		/* Request */

		progress_message_general: "Ausführung...",
		cancel_message_general: "Die Aktion wurde abgebrochen.",
		ie8_not_supported_browser: "IE8 ist kein unterstützter Browser.",
		progress_message_getDesktop: "Desktop wird geladen...",
		progress_message_getActions: "Aktionen werden geladen...",
		progress_message_getViewers: "Desktop wird geladen...",
		progress_message_logon: "Anmelden...",
		progress_message_logoff: "Abmelden...",
		progress_message_getContentClasses: "Klassen werden abgerufen...",
		progress_message_openContentClass: "Klassendetails werden abgerufen...",
		progress_message_od_getCabinets: "Aktenschränke werden abgerufen...",
		progress_message_getSearchTemplates: "Suchen werden abgerufen...",
		progress_message_od_getTemplates: "Ordner werden abgerufen...",
		progress_message_od_openCabinet: "Ordner werden abgerufen...",
		progress_message_openSearchTemplate: "Suche wird geöffnet...",
		progress_message_od_openTemplate: "Ordner wird geöffnet...",

		progress_message_getWorklists: "Vorgangslisten werden abgerufen...",
		progress_message_getWorkItems: "Arbeitselemente werden abgerufen...",
		progress_message_getNextWorkItems: "Arbeitselemente werden abgerufen...",
		progress_message_getStepParameters: "Arbeitselementinformationen werden abgerufen...",
		progress_message_getStepAttachmentItems: "Anhanginformationen werden abgerufen...",
		progress_message_getDependentParameters: "Eigenschaftsinformationen werden abgerufen...",

		progress_message_p8_getProcessApplicationSpaces: "Anwendungsspeicherbereiche werden abgerufen...",
		progress_message_p8_getProcessRoles: "Prozessrollen werden abgerufen...",
		progress_message_p8_getProcessInbaskets: "Posteingänge werden abgerufen...",
		progress_message_p8_getProcessorInformation: "Prozessinformationen werden abgerufen...",
		progress_message_p8_getFilterCriteria: "Posteingangsfilter werden abgerufen...",
		progress_message_p8_getLaunchParameters: "Arbeitselementinformationen werden abgerufen...",
		progress_message_p8_getStepAttachments: "Arbeitselementanhänge werden abgerufen...",
		progress_message_p8_getSubscriptions: "Workflowsubskriptionen werden abgerufen...",
		progress_message_p8_getTrackerParameters: "Arbeitselementinformationen werden abgerufen...",
		progress_message_p8_getTrackerHistory: "Arbeitselementverlauf wird abgerufen...",
		progress_message_p8_getTrackerMilestones: "Meilensteine für Arbeitselement werden abgerufen...",
		progress_message_p8_completeStep: "Arbeitselement wird abgeschlossen...",
		progress_message_p8_moveToInbox: "Element wird in den Posteingang verschoben...",
		progress_message_p8_returnToSender: "Arbeitselement wird zurückgegeben...",
		progress_message_p8_reassign: "Arbeitselement wird erneut zugeordnet...",
		progress_message_p8_launchWorkflow: "Workflow wird gestartet...",
		progress_message_p8_getTransferedWorkflows: "Workflowinformationen werden abgerufen...",

		progress_message_cm_getProcesses: "Workflowinformationen werden abgerufen...",
		progress_message_cm_completeStep: "Arbeitselement wird fortgesetzt...",
		progress_message_cm_getItemProcessInformation: "Workflowinformationen werden abgerufen...",

		progress_message_search: "Suche wird ausgeführt...",
		cancel_message_search: "Die Suche wurde abgebrochen.",
		progress_message_getContentItems: "Elementinformationen werden abgerufen...",
		progress_message_openFolder: "Ordner wird geöffnet...",
		progress_message_addItem: "Element wird erstellt...",
		progress_message_checkIn: "Element wird eingecheckt...",
		progress_message_changePassword: "Kennwort wird geändert...",
		progress_message_getDefaultInstancePermissions: "Standardberechtigungen werden abgerufen...",
		progress_message_openItem: "Elementinformationen werden abgerufen...",
		progress_message_saveItem: "Elementinformationen werden gespeichert...",
		progress_message_getPermissions: "Berechtigungen werden abgerufen...",
		progress_message_getEntryTemplates: "Erfassungsvorlagen werden abgerufen...",
		progress_message_openEntryTemplate: "Erfassungsvorlage wird geöffnet...",
		progress_message_getFavorites: "Favoriten werden abgerufen...",
		progress_message_getFoldersFiledIn: "Ordner werden abgerufen...",
		progress_message_getDocumentVersions: "Versionen werden abgerufen...",
		progress_message_getDependentAttributeInfo: "Attributinformationen werden abgerufen...",
		progress_message_packageForDownload: "Packen für Download...",
		progress_message_convertDocument: "Inhalt wird konvertiert...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Inhaltstyp wird abgerufen...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Dokument wird hinzugefügt...",

		progress_message_desktop_reload: "Der Client lädt Ihren Desktop neu.<br>Möglicherweise werden Sie aufgefordert, sich erneut anzumelden.",
		progress_message_email: "E-Mail wird gesendet...",
		cancel_message_email: "Die E-Mail wurde abgebrochen.",

		progress_message_p8_getOfficeOnlineTemplates: "Office-Vorlagen werden abgerufen...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Favoritenbaumstruktur",
		favorites_content_list_label: "Inhaltsliste für Favoriten",
		syncItems_tree_label: "Baumstruktur für eigene synchronisierte Dateien",
		syncItems_content_list_label: "Inhaltsliste für eigene synchronisierte Dateien",
		my_checkouts_content_list_label: "Inhaltsliste 'Eigene Auscheckvorgänge'",
		browse_tree_label: "Baumstruktur für Durchsuchen",
		browse_content_list_label: "Inhaltsliste für Durchsuchen",
		repository_selector_label: "Repository-Selektor",
		teamspaces_content_list_label: "Inhaltsliste für Teamarbeitsbereich",
		templates_content_list_label: "Inhalte für Vorlagen",
		work_content_list_label: "Arbeitsinhaltsliste",
		work_tree_label: "Arbeitbaumstruktur",
		admin_tree_label: "Verwaltungsbaumstruktur",
		admin_tabs_label: "Verwaltungsregisterkarten",
		search_tabs_label: "Suchregisterkarten",
		search_selector_label: "Suchselektor",
		teamspace_browse_content_list_label: "Inhaltsliste für Durchsuchen für Teamarbeitsbereich",
		teamspace_search_tabs_label: "Suchregisterkarten für Teamarbeitsbereich",

		/* Desktop */
		undo_description: "${0} rückgängig machen",
		redo_description: "${0} wiederholen",

		/* Application Tabs */
		home: "Home",
		repository: "Repository",
		repository_type: "Repository-Typ:",
		repository_type_header: "Repository-Typ",
		repository_type_any: "Alle Repositorys",
		repository_type_contains_label: "Repository-Typ enthält",
		document_info: "Dokumentinformationen",
		team: "Team",
		administration: "Verwaltung",

		/* Home Page */
		recent_activity: "Letzte Aktivität",
		repos_and_wrksp: "Repositorys und Teamarbeitsbereiche",
		workspaces: "Teamarbeitsbereiche",
		repositories: "Repositorys",
		templates: "Vorlagen",
		favorites: "Favoriten",
		my_checkouts: "Eigene Auscheckvorgänge",
		mySyncedFiles: "Eigene synchronisierte Dateien",
		links: "Links",
		name_label: "Name",
		description_label: "Beschreibung:",
		type_label: "Typ:",
		type_heading: "Typ",
		type_id_label: "Typ-ID",
		server_type_icon: "Symbol für Servertyp",
		server_type_heading: "Servertyp",
		server_type: "Servertyp",
		port_heading: "Portnummer",
		port_label: "Portnummer:",
		server_name_heading: "Servername",
		server_label: "Servername:",
		server_url_label: "Server-URL:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Verbunden:",
		repository_label: "Repository",
		modified_label: "Geändert von:",
		modified_date_label: "Geändert am:",
		status_label: "Status:",
		last_modified_label: "Zuletzt geändert von:",

		modifier: "Geändert von",
		modified_date: "Änderungsdatum",

		/* Favorites */
		new_favorite_label: "Zu Favoriten hinzufügen",
		edit_favorite_label: "Favoriten umbenennen",
		remove_favorite_label: "Aus Favoriten entfernen",
		missing_alias_message: "Sie müssen einen Namen angeben.",
		sync_favorite_enable_hover: "Dieses Element ist zur Synchronisierung aktiviert.",
		sync_favorite_disable_hover: "Dieses Element wird nicht synchronisiert.",
		sync_favorite_sync_unavailable_hover: "Synchronisierung ist für diesen Objekttyp nicht verfügbar.",
		sync_enable_label: "Dieses Element synchronisieren",
		sync_enable_label_hover: "Dieses Element wird mit Ihren Einheiten synchronisiert.",
		delete_favorite_confirmation_question: "Wollen Sie dieses Element in Ihren Favoriten löschen?",
		alias_label: "Name:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Das ausgewählte Element ist bereits in Ihren Favoriten enthalten.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Dieses Element kann Ihrer Favoritenliste nicht hinzugefügt werden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Sie können nur ${0} Favoriten speichern.",
		add_favorite_max_reached_response: "Wenn Sie dieses Element Ihrer Favoritenliste hinzufügen wollen, müssen Sie einen vorhandenen Favoriten löschen, bevor Sie dieses Element hinzufügen können.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Die ausgewählten Dokumente können nicht in das PDF-Format konvertiert werden.",
		download_as_pdf_max_content_error_explanation: "Sie können nur ${0} MB in das PDF-Format konvertieren. Die ausgewählten Dokumente überschreiten jedoch ${0} MB.",
		download_as_pdf_max_content_error_response: "Wählen Sie weniger Dokumente aus oder wählen Sie kleinere Dokumente aus und laden Sie die Dokumente erneut als PDF-Dateien herunter.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Die ausgewählten Dokumente können nicht in eine einzige PDF-Datei konvertiert werden.",
		download_as_pdf_mimetype_check_error_explanation: "Wenn ein Dokument mit mehreren Teilen in eine einzige PDF-Datei konvertiert werden soll, muss jeder Teil denselben MIME-Typ aufweisen.",
		download_as_pdf_mimetype_check_error_response: "Wählen Sie ein anderes Dokument aus, das in das PDF-Format konvertiert werden soll.",

		/* Activity Stream */
		show_label: "Anzeigen:",
		all_filter: "Alle",
		notifications_filter: "Benachrichtigungen",
		workitems_filter: "Arbeitselemente",
		documentes_filter: "Dokumente",
		all_favorites_filter: "Alle Favoriten",
		folders_filter: "Ordner",
		searches_filter: "Suchen",
		teamspaces_filter: "Teamarbeitsbereiche",

		/* Repository */
		all_search_templates: "Alle Suchen",
		all_od_searches: "Alle Suchvorlagen",
		recent_searches: "Letzte Suchen",
		opened_searches: "Geöffnete Suchen",

		all_worklists: "Alle Posteingänge",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Eine Liste aller Vorgangslisten",

		/* Teamspace */
		all_workspaces: "Alle Teamarbeitsbereiche",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Eine Liste aller Teamarbeitsbereiche",
		workspace_title: "Teamarbeitsbereich",
		workspace_icon: "Symbol für Teamarbeitsbereich",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Verfügbar",
		workspace_stat_offline: "Nicht verfügbar",
		workspace_stat_validate: "Validierung erforderlich",
		workspace_stat_pendingDelete: "Anstehender Löschvorgang",
		workspace_stat_deleteError: "Löschvorgang fehlgeschlagen",

		undefined_value: "Nicht definiert",
		undefined_reference_value: "Es ist kein Verweis definiert.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Auf dem Server sind möglicherweise mehr Ergebnisse verfügbar.",
		search_all_data: "Alle Daten durchsuchen.",
		search_all_teamspaces: "Alle Teamarbeitsbereiche durchsuchen.",
		teamspace_filter_results: "${0} Ergebnisse werden angezeigt. ",
		displaying_filtered_results: "Gefilterte Ergebnisse werden angezeigt. ",
		displaying_recent_results: "Es werden nur Teamarbeitsbereiche angezeigt, die in den letzten ${0} Tagen geändert wurden. Filtern Sie die Liste der Teamarbeitsbereiche nach Name oder Beschreibung, um andere Teamarbeitsbereiche zu finden. ",
		clear_filter: "Filter löschen.",

		/* FolderTreeModel */
		move_item_task: "Element verschieben",
		copy_item_task: "Element kopieren",
		add_item_task: "Element hinzufügen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Der folgende Ordner konnte nicht gefunden werden: ${0}. Möglicherweise wurde der Ordner gelöscht oder er kann aus dieser Ansicht nicht geöffnet werden. Klicken Sie in der Baumstrukturansicht auf den Link 'Mehr', um zu dem Ordner zu navigieren. Wenn der Ordner nicht angezeigt wird, aktualisieren Sie die Inhaltslistenansicht.",
		more_paging_link: "Weiter ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Abbrechen",

		/* ErrorDialog */
		error_dialog_title: "Fehler",
		error_dialog_icon_tooltip: "Fehler",
		error_dialog_stack_trace_title: "Stack-Trace",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Bestätigung",

		close_browser_msg: "Schließen Sie das Browserfenster.",

		/* MessageDialog */
		message_dialog_title: "Information",
		warning_dialog_title: "Warnung",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Willkommen bei ${0}",
		server: "Repository:",
		username: "Benutzername:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Für die Anmeldung am Repository ist ein Benutzername erforderlich.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Für die Anmeldung am Repository ist ein Kennwort erforderlich",
		password: "Kennwort:",
		login: "Anmelden",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Ihre Sitzung ist abgelaufen. Melden Sie sich erneut an.",
		login_repository_connection_expired_message: "Ihre Verbindung zum Repository ${0} ist abgelaufen. Melden Sie sich erneut an.",
		login_site_connection_expired_message: "Ihre Verbindung zur Site ist abgelaufen. Melden Sie sich erneut an.",
		login_new_server_message: "Geben Sie einen Benutzernamen und ein Kennwort für ${0} ein.",
		login_error_more_information_message: "Weitere Informationen",

		disconnect_box_account_user: "Verbindung zu Box-Account trennen: ${0}",
		disconnect_box_account: "Verbindung zu Box-Account trennen",
		disconnect_box_accounts: "Verbindung zu Box-Accounts trennen",

		// OAuth2/Box Login
		login_ssl_connection_required: "Für den Zugriff auf das Box-Repository ist eine SSL-Verbindung erforderlich.",
		login_oauth_popup_blocked: "Das Popup-Fenster wurde geblockt. Möglicherweise müssen Sie zum Anmelden die Blockierung von Fenstern in Ihrem Browser aufheben.",
		login_oauth_click_here: "Wenn Sie nicht innerhalb von 5 Sekunden umgeleitet werden, klicken Sie hier.",
		login_oauth_title: "Anmelden",
		login_oauth_grant_intro: "Authentifizierung für ${0} erteilen.",
		login_pane_oauth_click_here: "Klicken Sie hier zum Anmelden.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Wollen Sie sich am Web-Client abmelden?",
		logout_confirmation_button: "Abmelden",

		/* ChangeLocaleDialog */
		change_locale: "Sprach- und Ländereinstellungen ändern",
		change_locale_use_browser_language: "Spracheinstellung des Browsers verwenden (Standard)",
		change_locale_use_browser_locale: "Spracheinstellung des Browsers verwenden (Standard)",
		change_locale_description: "Wenn Sie Ihre Browser-Cookies löschen, müssen Sie Ihre Sprach- und Ländereinstellungen zurücksetzen.",
		change_locale_language_locale: "Anwendungssprache:",
		change_locale_language_locale_hover: "Durch diese Einstellung wird die Sprache für den Text im Web-Client geändert, nicht jedoch die Sprache von Dokumenten in der Anwendung.<br><br>Die Standardeinstellung verwendet die Sprache, die in den Konfigurationsoptionen Ihres Web-Browsers angegeben ist.",
		change_locale_value_format_locale: "Länderspezifische Angaben für Anwendung:",
		change_locale_value_format_locale_hover: "Die Ländereinstellung legt das Format für Datums-, Zeit- und Zahlenangaben im Web-Client fest.<br><br>Die Standardeinstellung verwendet die Formate, die der in den Konfigurationsoptionen Ihres Web-Browsers angegebenen Sprache zugeordnet sind.",
		change_locale_for_office: "Einstellungen für bidirektionalen Text:",
		change_locale_bidi_support_flag: "Bidirektionale Unterstützung aktivieren",
		change_locale_bidi_support_flag_hover: "Wenn die bidirektionale Unterstützung aktiviert ist, kann der Benutzer die in Eingabefeldern verwendete Textrichtung festlegen.  Der für Elemente wie Ordner eingegebene Text würde so in der gleichen Richtung angezeigt, in der er eingegeben wurde.",
		change_locale_base_text_direction: "Basistextrichtung für Inhalt:",
		change_locale_base_text_direction_hover: "Legen Sie die Richtung des in Eingabefeldern eingegebenen Texts fest.  Dies steuert auch die Anzeigerichtung von Bezeichnungen, die vom Benutzer eingegeben wurden, etwa Ordnernamen.",
		change_locale_calendar_type: "Kalendertyp:",
		change_locale_calendar_type_hover: "Wählen Sie den Kalendertyp aus, der für die Benutzersitzung verwendet wird.",
		change_locale_base_text_direction_default: "Standard",
		change_locale_base_text_direction_ltr: "Links-nach-rechts",
		change_locale_base_text_direction_rtl: "Rechts-nach-links",
		change_locale_base_text_direction_contextual: "Kontextabhängig",
		change_locale_calendar_type_gregorian: "Gregorianisch",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebräisch",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Kennwort ändern",
		change_password_title: "Kennwort ändern",
		change_password_expired_title: "Kennwort ist abgelaufen",
		change_password_message: "Geben Sie ein neues Kennwort ein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Ihr Kennwort ist abgelaufen. Geben Sie ein neues Kennwort ein.",
		change_password_password_rules: "Kennwortregeln",
		change_password_old_password: "Altes Kennwort:",
		change_password_new_password: "Neues Kennwort:",
		change_password_confirm_password: "Bestätigungskennwort:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Sie müssen Ihr altes Kennwort eingeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Sie müssen ein neues Kennwort eingeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Sie müssen Ihr neues Kennwort zur Bestätigung erneut eingeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Die Kennwörter müssen übereinstimmen.",

		/* GlobalToolbar */
		actions: "Aktionen",
		actions_label: "Aktionen:",
		open_actions_label: "Offene Aktionen:",

		/* About Dialog */
		about_dialog_title: "Produktinfo",
		about_product_name_label: "Produktname: ",
		about_product_version_label: "Version: ",
		about_product_build_label: "Build: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. All Rights Reserved. IBM und das IBM Logo sind eingetragene Marken der IBM Corporation in den USA und/oder anderen Ländern. Dieses Programm unterliegt den Bedingungen der Lizenzvereinbarung, die mit dem Programm ausgeliefert wird. Diese Lizenzvereinbarung kann in einem Programmverzeichnisordner oder in einer Bibliothek namens \"License\" oder \"Non_IBM_License\" gespeichert sein oder in gedruckter Form bereitgestellt werden. Lesen Sie diese Lizenzvereinbarung bitte sorgfältig durch, bevor Sie das Programm verwenden. Wenn Sie das Programm verwenden, stimmen Sie diesen Bedingungen zu. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Soll das ausgewählte Element gelöscht werden?",
		delete_single_folder_confirmation_question: "Soll der Ordner ${0} gelöscht werden?",
		delete_multiple_confirmation_question: "Sollen die ausgewählten Elemente gelöscht werden?<br>${0} Elemente sind ausgewählt.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Löschen",
		search_template_delete_confirmation_question: "Soll die Suche ${0} gelöscht werden?",
		search_template_opened_delete_confirmation_question: "Die Suche ${0} ist geöffnet. Wenn Sie die Suche löschen, wird sie geschlossen.<br>Soll diese Suche gelöscht werden?",
		delete_multiple_opened_search_template_confirmation_question: "Folgende Suchen sind offen: ${0}.<br>Wenn Sie die Suchen löschen, werden sie geschlossen. Wollen Sie diese Suchen löschen?",
		delete_large_number_items_confirmation_question: "Sie haben ${0} Elemente zum Löschen ausgewählt.<br/>Das Löschen einer großen Anzahl von Elementen kann lange dauern.<br/>Möchten Sie fortfahren?",
		delete_confirmation_entrytemplate: "Wenn Sie diese Erfassungsvorlage löschen, hat dies die folgenden Auswirkungen auf die Dokumente oder Ordner, die der Erfassungsvorlage zugeordnet sind:<ul><li>Die Elemente sind der Erfassungsvorlage nicht mehr zugeordnet und die Benutzer erhalten beim Aktualisieren eines Elements möglicherweise eine Warnung.</li><li>Alle durch die Erfassungsvorlage gesteuerten Eigenschaften, etwa der Name oder die Reihenfolge von Eigenschaften, gelten nicht mehr für die der Erfassungsvorlage zugeordneten Elemente.</li></ul>Soll diese Erfassungsvorlage gelöscht werden?",
		delete_confirmation_entrytempalte_with_multi_items: "Erfassungsvorlagen müssen einzeln gelöscht werden. Die Erfassungsvorlagen wurden aus der Liste zu löschender Elemente entfernt. Wenn Sie die Erfassungsvorlagen löschen möchten, müssen Sie jede Erfassungsvorlage gesondert löschen.",

		/* Create/Apply/Remove Hold */
		hold: "Temporäre Sperre",
		createHold: "Neue temporäre Sperre",
		applyHold: "Temporäre Sperre anwenden",
		removeHold: "Temporäre Sperre entfernen",
		showHolds_title: "Temporäre Sperren anzeigen",
		applyHoldSelectText: "Wählen Sie die temporären Sperren aus, die auf die ausgewählten Elemente angewendet werden sollen.",
		availableHolds: "Verfügbare temporäre Sperren:",
		removeHoldSelectText: "Wählen Sie die temporären Sperren aus, die Sie in den ausgewählten Elementen entfernen wollen.",
		appliedHolds: "Angewendete temporäre Sperren:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Erstellen Sie eine neue temporäre Sperre, die auf ausgewählte Elemente angewendet werden soll.",
		holdName: "Name der temporären Sperre:",
		holdDescription: "Beschreibung:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Sie müssen einen Namen für die temporäre Sperre angeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Der angegebene Name für eine temporäre Sperre ist bereits vorhanden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Der Name einer temporären Sperre darf die folgenden Zeichen nicht enthalten: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Ihre Sitzung läuft in ${0} Minuten ab.",
		session_expire: "Sitzung läuft ab",
		logoff: "Abmelden",
		extend_session: "Sitzung verlängern",
		admin_custom_settings: "Weitere Einstellungen:",
		admin_custom_settings_hover_help: "'enableSessionExpireWarning' ist ein boolescher Wert, der angibt, ob die Warnung über den Ablauf der Sitzung aktiviert ist. Der Standardwert ist 'true'. 'sessionExpireWarningTime' ist eine Ganzzahl zwischen 2 und 5, die die Vorwarnzeit für den Ablauf der Sitzung angibt.",
		admin_custom_setting_dialog_title_new: "Neue Einstellung",
		admin_custom_setting_dialog_title_edit: "Einstellung bearbeiten",
		admin_custom_setting_dialog_hover_help: "Fügen Sie weitere Parameter hinzu, indem Sie den Parameternamen und -wert angeben. Beispiel: Sie können 'enableSessionExpireWarning' und 'true' angeben, wenn Sie die Warnung über den Ablauf der Sitzung aktivieren wollen.",
		admin_custom_setting_dialog_field_hover_help: "Weitere Informationen zu Parameternamen und -werten finden Sie im Referenzhandbuch zu IBM Navigator-Parametern.",
		admin_custom_setting_dialog_nameInvalid: "Dieser Wert ist erforderlich. Er darf keine Leerzeichen enthalten und darf nur einmal vorkommen.",
		admin_custom_setting_dialog_bool_valueInvalid: "Dieser Wert ist erforderlich. Der Wert muss ein boolescher Wert sein.",
		admin_custom_setting_dialog_int_valueInvalid: "Dieser Wert ist erforderlich. Der Wert muss eine Ganzzahl sein.",
		/* Add Document Dialog */
		add_document_dialog_title: "Dokument hinzufügen",
		add_documents_dialog_title: "Dokumente hinzufügen",
		add_document_general_label: "Allgemein",
		add_document_properties_label: "Eigenschaften",
		add_document_properties_with_ellipsis_label: "Eigenschaften...",
		add_document_security_label: "Sicherheit",
		add_document_location_label: "Speichern in:",
		add_document_type_label: "Was wollen Sie speichern?",
		add_document_localfile_label: "Lokales Dokument",
		add_document_metadata_label: "Informationen zu einem Dokument",
		add_document_external_label: "Link zu einem externen Dokument",
		add_document_web_link_label: "Web-Link",
		add_document_saved_content_label: "Gespeicherte Datei verwenden:",
		add_document_saved_content_choice: "Gespeicherte Datei",
		add_document_file_name_label: "Dateiname:",
		add_document_entry_template_label: "Erfassungsvorlage:",
		add_document_delete_file_label: "Lokale Datei löschen",
		add_document_delete_file_disabled_label: "Dateien, die sich nicht im Dateiverfolgungsverzeichnis befinden, werden nicht gelöscht.",
		add_document_major_version_label: "Hauptversion",
		add_document_major_version_hover: "Setzt den Dokumentstatus auf 'Freigegeben'. Das Dokument wird dem Repository als Version 1.0 hinzugefügt. Wenn die Option nicht ausgewählt wird, ist das Dokument nicht für die Freigabe bereit und wird als Nebenversion 0.1 hinzugefügt.",
		add_document_save_document_as_unfiled_label: "Dokument nicht in einem Ordner speichern",
		add_document_save_document_as_unfiled_hover: "Wenn Sie diese Option auswählen, können Sie dieses Dokument nur über die Suchfunktion finden. Sie können das Dateisystem nicht nach ihm durchsuchen.",
		add_document_create_new_version_label: "Neue Version erstellen",
		add_document_replace_existing_version_label: "Vorhandene Version ersetzen",
		add_document_start_workflow_label: "Workflow starten",
		add_document_auto_classify_label: "Den Inhalt automatisch klassifizieren",
		add_document_add_label: "Hinzufügen",
		add_document_cancel_label: "Abbrechen",
		add_document_document_type_label: "Klasse",
		add_document_context_info: "Die Werte, die Sie für die Dokumenteigenschaften eingeben, können später verwendet werden, um das Dokument zu suchen.",
		add_documents_context_info: "Die Werte, die Sie für die Dokumente eingeben, können später verwendet werden, um die Dokumente zu suchen. Wenn Sie einen anderen Eigenschaftswert für ein Dokument eingeben müssen, müssen Sie diesen separat hinzufügen oder die Eigenschaften des Dokuments nach dem Hinzufügen bearbeiten.",
		add_document_url_label: "URL:",
		add_document_template_description: "Beschreibung der Vorlage:",
		add_document_select_entry_template: "Namen einer Erfassungsvorlage eingeben oder auswählen",
		add_document_no_permission_to_associations: "Sie haben keine Berechtigungen zur Verwendung einer Erfassungsvorlage",
		add_document_no_entry_template_to_use: "Für ausgewählte Dateien kann keine Erfassungsvorlage verwendet werden",
		add_document_no_entry_template_itemtype_permission: "Sie können diesem Ordner keine Elemente hinzufügen. Es muss eine Erfassungsvorlage ausgewählt werden, aber Sie haben keinen Zugriff auf die diesem Ordner zugeordneten Erfassungsvorlagen. Wenden Sie sich an den Systemadministrator und bitten Sie ihn, Ihnen Zugriff auf die diesem Ordner zugeordneten Erfassungsvorlagen zu erteilen.",
		add_document_appgroup_name_label: "Anwendungsgruppenname:",
		add_document_app_name_label: "Anwendungsname:",
		create_folder_dialog_title: "Neuer Ordner",
		create_folder_context_info: "Die Werte, die Sie für die Ordnereigenschaften eingeben, können später verwendet werden, um den Ordner zu suchen.",
		create_folder_folder_name_label: "Ordnername",
		create_folder_save_folder_as_unfiled_label: "Ordner nicht in einem anderen Ordner speichern",
		create_folder_save_folder_as_unfiled_hover: "Wenn Sie diese Option auswählen, können Sie diesen Ordner nur über die Suchfunktion finden. Sie können das Dateisystem nicht nach ihm durchsuchen.",
		add_item_create_in_folder: "In Ordner erstellen:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Ein Ordnername darf die folgenden Zeichen nicht enthalten: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Ein Ordnername darf die folgenden Zeichen nicht enthalten: \\ / und darf nicht . oder .. sein",
		invalid_box_file_name_message: "Ein Dateiname darf die folgenden Zeichen nicht enthalten: \\ / und darf nicht . oder .. sein",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Ein Dateiname darf die folgenden Zeichen nicht enthalten: \\ / : * ? \" < > |",
		external_document_placeholder: "URL des Dokuments eingeben",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Die Farbe muss als drei- oder sechsstellige Hexadezimalzahl eingegeben werden, z. B. #000 oder #000000.",
		add_document_unfiled: "${0} nicht abgelegt",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Dokument über Erfassungsvorlage hinzufügen",
		add_document_using_template_context_info: "Wenn Sie ein Dokument über eine Erfassungsvorlage hinzufügen, sind die Werte, die Sie für das Dokument hinzufügen, konsistent.",
		add_documents_using_template_dialog_title: "Dokumente über Erfassungsvorlage hinzufügen",
		add_documents_document_name_is_file_name_hint: "Der Dateiname wird für diese Eigenschaft verwendet",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Neuer Ordner über Erfassungsvorlage",
		create_folder_using_template_context_info: "Wenn Sie einen Ordner über eine Erfassungsvorlage erstellen, sind die Werte, die Sie für den Ordner hinzufügen, konsistent.",

		add_documents_batch_results_dialog_title: "Dokumente, die nicht dem Repository hinzugefügt wurden",
		add_documents_batch_results_dialog_context_info: "Die folgenden Dokumente wurden dem Repository nicht hinzugefügt. Wählen Sie ein Dokument aus und klicken Sie auf 'Details', um weitere Informationen dazu anzuzeigen, warum das Dokument nicht dem Repository hinzugefügt wurde.",
		add_documents_batch_results_dialog_filename_col_hdr: "Dateiname",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Nachricht",
		add_documents_batch_results_status_error: "Fehler",
		add_documents_batch_results_status_cancelled: "Abgebrochen",
		add_documents_batch_results_status_cancelled_msg: "Das Dokument wurde nicht hinzugefügt, weil die Anforderung abgebrochen wurde.",

		add_documents_batch_status_title: "Dokumente werden hinzugefügt",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Datei ${0} von ${1} wird hinzugefügt...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Fehler: ${0}",
		add_documents_batch_status_completing_msg: "Der Prozess wird gestoppt, nachdem dieses Dokument hinzugefügt wurde.",

		add_documents_status_uploading_msg: "Datei ${0} von ${1} wird hochgeladen...",
		add_documents_status_adding_msg: "Datei ${0} von ${1} wird hinzugefügt...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Die Erfassungsvorlage wurde in einer anderen Anwendung so konfiguriert, dass Dokumente immer als Schriftstück deklariert werden. Diese Einstellung wird jedoch ignoriert, weil der Web-Client das Deklarieren von Dokumenten als Schriftstücke nicht unterstützt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Die Erfassungsvorlage wurde in einer anderen Anwendung so konfiguriert, dass Sie entscheiden können, ob Sie dieses Dokument als Schriftstück deklarieren wollen. Diese Einstellung wird jedoch ignoriert, weil der Web-Client das Deklarieren von Dokumenten als Schriftstücke nicht unterstützt.",
		no_selection: "&lt;Auswählen&gt;",

		batch_results_dialog_details_label: "Details",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Der Wert ist ungültig. Der Wert muss eine global eindeutige ID (GUID - Globally Unique Identifier) sein, z. B. {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Der Wert ist ungültig. Der Wert muss eine Gleitkommazahl sein, z. B. 1,2 oder 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Der Wert ist ungültig. Der Wert muss im Format ${0} angegeben werden, z. B. ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Der Wert ist ungültig. Der Wert muss ein Dezimalwert sein, z. B. 1,2 oder 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Der Wert ist ungültig. Der Wert muss eine Ganzzahl sein, z. B. 5 oder 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Der Wert ist ungültig. Der Wert darf nur alphabetische Zeichen enthalten, z. B. a-z und A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Der Wert ist ungültig. Der Wert darf nur alphanumerische Zeichen enthalten, z. B. a-z, A-Z und 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Der Wert ist ungültig. Der Wert darf nur numerische Zeichen enthalten, z. B. 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Der Wert ist ungültig. Der Wert darf nur die folgenden Zeichen enthalten: a-z, A-Z, 0-9, [Leerzeichen] und `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Der Wert ist ungültig. Der Wert muss ein Datum mit dem folgenden Format sein: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Der Wert ist ungültig. Der Wert muss eine Zeitangabe mit dem folgenden Format sein: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Der Wert ist ungültig. Wählen Sie einen Wert aus der Dropdown-Liste aus.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Der Wert ist ungültig.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Der Wert ist ungültig. Der Wert muss das folgende Format haben: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Dieser Wert ist erforderlich.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Der Wert ist zu lang. Die Eigenschaft unterstützt eine maximale Länge von ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Der Wert ist zu kurz. Die Eigenschaft unterstützt eine Mindestlänge von ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Der Wert liegt außerhalb des gültigen Bereichs. Der Wert muss eine Gleitkommazahl zwischen ${0} und ${1} sein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Der Wert liegt außerhalb des gültigen Bereichs. Der Wert muss ein Dezimalwert zwischen ${0} und ${1} sein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Der Wert liegt außerhalb des gültigen Bereichs. Der Wert muss eine Ganzzahl zwischen ${0} und ${1} sein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Der Wert muss ein Datum zwischen ${0} und ${1} sein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Der Wert liegt außerhalb des gültigen Bereichs. Der Wert muss ein Datum zwischen ${0} und ${1} sein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Der Wert liegt außerhalb des gültigen Bereichs. Der Wert muss eine Uhrzeit zwischen ${0} und ${1} sein.",
		property_and: "und",

		property_invalidValueOrRequired: "Der folgende Wert ist ungültig oder erforderlich: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Eigenschaften",
		edit_properties_dialog_info: "Sie können die Eigenschaften dieses Elements anzeigen oder bearbeiten. Wenn Sie über die entsprechenden Berechtigungen verfügen, können Sie auch die Sicherheit des Elements ändern. Sie können allerdings nicht die Systemeigenschaften ändern.",
		edit_properties_od_dialog_info: "Sie können die Eigenschaften dieses Elements anzeigen oder bearbeiten. Sie können die Systemeigenschaften jedoch nicht ändern.",
		system_properties_title: "Systemeigenschaften",
		custom_properties_title: "Eigenschaften",
		/* Folder collaboration tab */
		box_permission_permission: "Berechtigung",
		box_permission_permissions: "Berechtigungen",
		box_permission_editor: "Bearbeiter",
		box_permission_owner: "Eigner",
		box_permission_co_owner: "Miteigner",
		box_permission_viewer_uploader: "Anzeige- und Uploadberechtigter",
		box_permission_previewer_uploader: "Vorschau- und Uploadberechtigter",
		box_permission_viewer: "Viewer",
		box_permission_previewer: "Vorschauberechtigter",
		box_permission_uploader: "Uploadberechtigter",
		box_permission_add: "Hinzufügen",
		box_permission_upload: "Hochladen",
		box_permission_download: "Herunterladen",
		box_permission_preview: "Vorschau",
		box_permission_view: "Ansicht",
		box_permission_send_links: "Reine Anzeigelinks senden",
		box_permission_create_subfolders: "Unterordner erstellen",
		box_permission_create_tasks: "Aufgaben erstellen",
		box_permission_add_comments: "Kommentar hinzufügen",
		box_collaboration_invite_placeholder: "Name, E-Mail oder Gruppe eingeben",
		box_collaboration_invite_placeholder_non_admin: "E-Mail zum Einladen eingeben",
		box_collaboration_invalid_email: "Gültige E-Mail-Adresse eingeben",
		box_collaboration_user_already_present: "Dieser Benutzer ist bereits ein Mitbearbeiter des Ordners",
		box_collaboration_user_name: "Name",
		box_collaboration_email_address: "E-Mail-Adresse",
		box_collaboration_date_added: "Hinzufügedatum",
		box_collaboration_remove_collaboration: "Entfernen",
		box_collaboration_remove_collaboration_title: "Löschen",
		box_collaboration_no_collaborators: "Keine Mitbearbeiter vorhanden",
		box_collaboration_change_owner_title: "Elementeigner ändern",
		box_collaboration_change_owner_prompt: "Wenn Sie diesen Mitbearbeiter zum Ordnereigner machen, werden Sie zum Bearbeiter und sind nicht mehr Eigner des Ordners. Alle Mitbearbeiter, die direkt zu diesem Ordner hinzugefügt wurden, können den Ordner in ihren Stammordnern sehen. Alle Mitbearbeiter, die auf der übergeordneten Ordnerebene oder darüber hinzugefügt wurden, sind dann keine Mitbearbeiter mehr. Möchten Sie fortfahren?",
		box_collaboration_remove_self_title: "Sich selbst entfernen",
		box_collaboration_remove_self_prompt: "Wollen Sie sich selbst als ein Mitbearbeiter wirklich entfernen? Sie haben dann keinen Zugriff mehr auf diesen Ordner.",
		box_collaboration_user: "Benutzer",
		box_collaboration_group: "Gruppe",
		box_managing_users_not_configured: "Sie können nicht nach Benutzern und Gruppen suchen, weil die Box-Anwendung nicht ordnungsgemäß konfiguriert ist. Wenn Sie dieses Feature verwenden wollen, bitten Sie Ihren Administrator, die Box-Anwendung für die Verwaltung von Benutzern und Gruppen zu konfigurieren.",
		duplicate_value_error: "Jeder Wert in dieser Eigenschaft muss eindeutig sein.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Alle in den folgenden Feldern von Ihnen vorgenommenen Änderungen werden auf alle ausgewählten Elemente angewendet. Muss für ein bestimmtes Element ein anderer Eigenschaftswert eingegeben oder die Sicherheit eines Elements bearbeitet werden, müssen Sie die Eigenschaften des Elements einzeln bearbeiten.",
		multi_edit_properties_class_label: "Klasse:",
		multi_edit_properties_items_label: "Elementnamen:",
		multi_edit_properties_properties_label: "Eigenschaften:",
		multi_edit_batch_status_title: "Eigenschaften werden aktualisiert",
		multi_edit_batch_status_adding_msg: "Element ${0} von ${1} wird aktualisiert...",
		multi_edit_batch_status_verifying_msg: "Element ${0} von ${1} wird geprüft...",
		multi_edit_batch_status_completing_msg: "Der Prozess wird gestoppt, nachdem dieses Element aktualisiert wurde.",
		multi_edit_batch_status_validation_completing_msg: "Der Prozess wird gestoppt, nachdem dieses Element geprüft wurde.",
		multi_edit_batch_results_status_error: "Fehler",
		multi_edit_batch_results_status_cancelled: "Abgebrochen",
		multi_edit_batch_results_status_cancelled_msg: "Das Element wurde nicht aktualisiert, weil die Anforderung abgebrochen wurde.",
		multi_edit_batch_results_dialog_title: "Nicht aktualisierte Elemente",
		multi_edit_batch_results_dialog_context_info: "Die folgenden Elemente wurden nicht aktualisiert. Wählen Sie einen Elementnamen aus und klicken Sie auf 'Details', um weitere Informationen dazu anzuzeigen, warum das Element nicht aktualisiert wurde.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Elementname",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Nachricht",
		multi_edit_batch_status_errors_msg: "Fehler: ${0}",
		multi_edit_batch_permission_error_text: "Die Änderungen der Eigenschaften können nicht gespeichert werden.",
		multi_edit_invalid_value_error: "Dieser Wert ist von einem anderen Eigenschaftswert abhängig und ist für alle von Ihnen ausgewählten Elemente nicht gültig.",
		multi_edit_batch_permission_error_explanation: "Sie können die Eigenschaften dieses Elements nicht ändern, weil Ihre Berechtigungen nicht ausreichen.",
		multi_edit_no_modifiable_properties: "Die Eigenschaften der ausgewählten Elemente können nicht geändert werden. Dies kann auftreten, wenn ein Element nur schreibgeschützte Eigenschaften enthält oder wenn nur der Name oder Titel des Elements bearbeitet werden kann. Bei Auswahl mehrerer Elemente können Sie den Namen oder Titel der Elemente nicht ändern.",
		multi_edit_mult_classes_dialog_info: "Die ausgewählten Elemente befinden sich in unterschiedlichen Repositorys oder sie gehören zu unterschiedlichen Klassen. Sie können nur Elemente bearbeiten, die zu derselben Klasse gehören oder sich in demselben Repository befinden. Wählen Sie die Untermenge von Elementen aus, die Sie bearbeiten wollen.",
		multi_edit_class_selector_class_heading: "Klasse",
		multi_edit_class_selector_entry_template_heading: "Erfassungsvorlage",
		multi_edit_class_selector_repository_heading: "Repository",
		multi_edit_class_selector_items_heading: "Elemente",
		multi_edit_some_classes_not_displayed: "Einige der ausgewählten Elemente sind nicht in diese Liste eingeschlossen, weil die Elemente nur schreibgeschützte Eigenschaften enthalten oder weil sich die Elemente in Repositorys befinden, die das Bearbeiten von Eigenschaften nicht unterstützen.",
		multi_edit_properties_invalid_msg: "Einige der Eigenschaftswerte sind nicht für alle ausgewählten Elemente gültig.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Diese Eigenschaft ist schreibgeschützt und kann nicht geändert werden.",
		multi_edit_append_checkbox_label: "Anhängen",
		multi_edit_append_checkbox_tooltip: "Wählen Sie diese Option aus, wenn Sie neue Eigenschaftswerte an die vorhandenen Werte anhängen wollen, anstatt die Werte zu ersetzen.",
		multi_edit_properties_invalid_childcomponent_msg: "Manche Werte in der Eigenschaft ${0} der untergeordneten Komponente ${1} hängen von anderen Eigenschaften ab und sind in der getroffenen Auswahl nicht mehr gültig. Löschen Sie Werte in der untergeordneten Komponente ${1} oder nehmen Sie an den ausgewählten Elementen einzeln Eigenschaftsänderungen vor.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Eigenschaften exportieren",
		export_properties_dialog_info: "Wählen Sie die Eigenschaften aus, die Sie exportieren wollen, und geben Sie die Reihenfolge an, in der sie angezeigt werden.",
		export_properties_dialog_export_button_label: "Exportieren",
		export_properties_dialog_export_raw_values: "Unformatierte Werte exportieren",

		/* Properties */
		filter_clear_tooltip: "Inhalt des Filters löschen",
		properties_new_row: "Neu",
		properties_requiredClass_document_tooltip: "Wählen Sie ein Dokument aus. Das Dokument muss zur Klasse ${0} gehören.",
		properties_requiredClass_folder_tooltip: "Wählen Sie einen Ordner aus. Der Ordner muss zur Klasse ${0} gehören.",
		properties_dataType_tooltip: "Datentyp: ${0}",
		properties_maxLength_tooltip: "Maximallänge: ",
		properties_minLength_tooltip: "Mindestlänge: ",
		properties_minValue_tooltip: "Mindestwert: ",
		properties_maxValue_tooltip: "Maximalwert: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Beschreibung: ",

		properties_type_boolean_tooltip: "Boolesch",
		properties_type_date_tooltip: "Datum",
		properties_type_time_tooltip: "Uhrzeit",
		properties_type_timestamp_tooltip: "Zeitmarke",
		properties_type_decimal_tooltip: "Dezimalwert",
		properties_type_double_tooltip: "Gleitkommazahl",
		properties_type_short_tooltip: "Ganzzahl",
		properties_type_integer_tooltip: "Ganzzahl",
		properties_type_long_tooltip: "Ganzzahl",
		properties_type_string_tooltip: "Textzeichenfolge",
		properties_type_string_alpha_tooltip: "Alphabetische Zeichenfolge",
		properties_type_string_alphanum_tooltip: "Alphanumerische Zeichenfolge",
		properties_type_string_ext_tooltip: "Erweiterte alphanumerische Zeichenfolge",
		properties_type_string_num_tooltip: "Numerische Zeichenfolge",
		properties_type_binary_tooltip: "Binär",
		properties_type_object_tooltip: "Objekt",
		properties_type_reference_tooltip: "Diese Eigenschaft verweist auf ein anderes Element im Repository.",
		properties_type_guid_tooltip: "Global eindeutige ID",
		properties_type_group_tooltip: "Benutzer und Gruppen",
		properties_type_user_tooltip: "Benutzer",
		properties_type_childComponent_tooltip: "Untergeordnete Komponente",

		properties_childComponent_minCardinalityOnly_tooltip: "Diese Eigenschaft muss über mindestens ${0} Werte verfügen.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Diese Eigenschaft kann über nicht mehr als ${0} Werte verfügen.",
		properties_childComponent_minMaxCardinality_tooltip: "Diese Eigenschaft muss über mindestens ${0} und nicht mehr als ${1} Werte verfügen.",
		properties_childComponent_noCardinality_tooltip: "Diese Eigenschaft kann über eine beliebige Anzahl Werte verfügen.",

		properties_type_guid_example_tooltip: ", Beispiel: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Wählen Sie einen Wert aus der Liste aus.",
		properties_single_select_choice_tooltip: "Wählen Sie einen Wert aus.",
		properties_multiple_select_typein_tooltip: "Geben Sie mindestens einen Wert ein.",
		properties_multiple_select_choice_tooltip: "Wählen Sie mindestens einen Wert aus.",
		properties_not_selectable_tooltip: "Die Kategorie kann nicht ausgewählt werden.",
		properties_none: "Ohne",
		properties_none_tooltip: "Wählen Sie <i>Ohne</i> aus, um den aktuellen Wert für diese Eigenschaft zu löschen.",
		properties_value_empty: "Kein Wert",
		properties_value_read_only: "Schreibgeschützt",
		properties_clear_label: "Löschen",
		properties_clear_tooltip: "Durch Löschen des Werts in diesem Feld wird der Wert im Repository gelöscht, sobald Sie auf <b>Speichern</b> klicken.",
		properties_box_custom_properties: "Benutzerdefinierte Eigenschaften",
		properties_box_metadata_name_in_use: "Dieser Name wird bereits verwendet. Geben Sie einen anderen Namen für die benutzerdefinierte Eigenschaft an.",

		properties_templates: "Vorlagen",
		properties_add_template: "Vorlage hinzufügen",
		properties_remove_template: "Entfernen",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Einchecken",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Einchecken",
		checkin_cancel_label: "Abbrechen",
		checkin_file_name_label: "Dateiname",
		checkin_document_status_title: "Dokument einchecken",
		checkin_document_status_uploading_msg: "Datei wird hochgeladen...",
		checkin_document_status_checkingin_msg: "Datei wird eingecheckt...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Schwärzungsmodus auswählen",
		viewer_redaction_new_document_confirmation_question: "Soll die Schwärzung als neues Dokument oder als lokale Datei gespeichert werden?",
		viewer_redaction_new_version_confirmation_question: "Soll die Schwärzung als neue Version gespeichert werden?",
		viewer_redaction_new_version_confirmation_question_never: "Soll die Schwärzung als neuer Inhalt gespeichert werden?",		
		viewer_redaction_new_document_button: "Ja",
		viewer_redaction_new_document_cancel_button: "Nein",
		viewer_redaction_add_document_confirmation_question: "Soll die Schwärzung als neues Dokument, als neue Version oder als lokale Datei gespeichert werden?",
		viewer_redaction_add_document_confirmation_question_version_never: "Soll die Schwärzung als neues Dokument, als neuer Inhalt oder als lokale Datei gespeichert werden?",
		viewer_redaction_add_document_button: "Neues Dokument",
		viewer_redaction_add_new_version_button: "Neue Version",
		viewer_redaction_add_new_version_button_version_never: "Neuer Inhalt",
		viewer_redaction_add_local_file_button: "Lokale Datei",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Schwärzungsgrund auswählen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Die Erfassungsvorlage, mit der dieses Dokument dem Repository hinzugefügt wurde, kann nicht gefunden werden. Das Dokument wird ohne Verwendung der Erfassungsvorlage in das Repository eingecheckt.",
		property_entry_template_not_retrieved_warning: "Die Erfassungsvorlage, mit der dieses Dokument dem Repository hinzugefügt wurde, kann nicht gefunden werden. Die Dokumenteigenschaften werden ohne Verwendung der Erfassungsvorlage angezeigt.",
		multi_edit_entry_template_not_found_name: "[Nicht gefunden]",
		multi_edit_entry_template_not_retrieved_warning: "Die Erfassungsvorlage, mit der diese Elemente dem Repository hinzugefügt wurden, kann nicht gefunden werden. Die Elementeigenschaften werden ohne Verwendung der Erfassungsvorlage geändert.",
		checkin_major_version_hover: "Erhöht die Dokumentversionsnummer um 1 und setzt den Dokumentstatus auf 'Freigegeben'. Wird die Option nicht ausgewählt, ist das Dokument nicht für die Freigabe bereit und wird als eine Nebenversion eingecheckt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Das Dokument kann nicht eingecheckt werden, da es nicht ausgecheckt wurde.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Die Benutzer-ID oder das Kennwort ist für den Server ungültig.",
		error_bad_userid_password_userResponse: "Stellen Sie sicher, dass Sie Ihre Benutzer-ID und Ihr Kennwort richtig eingegeben haben.",
		error_bad_userid_password_adminResponse: "Der folgende Fehler wurde zurückgegeben: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "Fehlernachricht",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Über die folgende URL kann keine Verbindung zum Web-Client eingerichtet werden: ${0}.",
		http_send_error_explanation: "Dieser Fehler kann durch ein Konfigurationsproblem auf dem Webanwendungsserver oder durch ein Problem mit der Web-Client-Anwendung verursacht werden.",
		http_send_error_userResponse: "Versuchen Sie erneut, sich anzumelden. Wenn das Problem bestehen bleibt, melden Sie diesen Fehler dem Systemadministrator.",
		http_send_error_adminResponse: "Der folgende HTTP-Fehler wurde zurückgegeben: ${1}.",
		http_send_error_0: "Web-Client-URL",
		http_send_error_1: "HTTP-Fehler",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Über die folgende URL kann keine Verbindung zum Web-Client eingerichtet werden: ${0}.",
		http_error_explanation: "Möglicherweise müssen Sie sich gegenüber einer Firewall authentifizieren oder der Webanwendungsserver ist nicht aktiv oder es kann wegen Netzproblemen nicht auf ihn zugegriffen werden.",
		http_error_userResponse: "Wenn Sie sich gegenüber einer Firewall authentifizieren müssen, führen Sie die Authentifizierung durch und unternehmen Sie einen erneuten Anmeldeversuch. Wenn das Problem bestehen bleibt, melden Sie diesen Fehler dem Systemadministrator.",
		http_error_adminResponse: "Der folgende HTTP-Fehler wurde zurückgegeben: ${1}.",
		http_error_0: "Web-Client-URL",
		http_error_1: "HTTP-Fehler",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Über die folgende URL kann keine Verbindung zum Web-Client eingerichtet werden: ${0}.",
		http_response_bad_explanation: "Dieser Fehler kann durch ein Konfigurationsproblem auf dem Webanwendungsserver oder durch ein Problem mit dem Web-Client verursacht werden.",
		http_response_bad_userResponse: "Versuchen Sie erneut, sich anzumelden. Wenn das Problem bestehen bleibt, melden Sie diesen Fehler dem Systemadministrator.",
		http_response_bad_adminResponse: "Der folgende Fehler wurde zurückgegeben: ${1}.",
		http_response_bad_0: "Web-Client-URL",
		http_response_bad_1: "HTTP-Fehler",
		http_response_bad_number: 2002,

		unititled_document_name: "Unbenannt",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Das E-Mail-Applet kann nicht gestartet werden.",
		email_applet_init_failed_explanation: "Dieses Problem kann auftreten, wenn Ihr E-Mail-Client nicht ordnungsgemäß installiert und konfiguriert ist oder keine unterstützte JRE-Version auf Ihrer Workstation installiert ist.",
		email_applet_init_failed_userResponse: "So beheben Sie das Problem:<ul><li>Stellen Sie sicher, dass Ihre E-Mail-Anwendung installiert und als Standard-E-Mail-Client auf Ihrer Workstation eingerichtet ist.</li><li>Prüfen Sie, ob eine unterstützte JRE-Version auf Ihrer Workstation installiert ist, indem Sie den folgenden Befehl an einer Eingabeaufforderung eingeben: java -version</li></ul><p>Eine Liste der unterstützten JRE-Versionen finden Sie im Dokument zu den Hardware- und Softwarevoraussetzungen für IBM Content Navigator auf der Site des IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Die E-Mail-Anwendung konnte nicht gestartet werden, weil eine erforderliche DLL-Datei nicht geladen werden kann.",
		email_applet_JNI_LOAD_FAILED_explanation: "Die erforderliche Datei WCEmailAppletJNI.dll kann nicht geladen werden, weil das temporäre Verzeichnis auf Ihrer Workstation möglicherweise voll ist.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Stellen Sie sicher, dass das temporäre Verzeichnis über genügend Speicherbereich verfügt. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden. Standardmäßig wird die Datei WCEmailAppletJNI.dll in das temporäre Verzeichnis geladen, das in den Einstellungen Ihres Web-Browsers angegeben ist.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Die E-Mail-Anwendung konnte nicht gestartet werden, weil das E-Mail-Applet keine temporäre Datei erstellen kann.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Möglicherweise ist das temporäre Verzeichnis auf Ihrer Workstation voll.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Stellen Sie sicher, dass das temporäre Verzeichnis über genügend Speicherbereich verfügt. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Die E-Mail-Anwendung kann nicht gestartet werden, weil das E-Mail-Applet nicht auf das temporäre Verzeichnis zugreifen kann.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Das temporäre Verzeichnis auf Ihrer Workstation ist möglicherweise voll oder Sie verfügen nicht über die Berechtigung zum Schreiben in dieses Verzeichnis.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Stellen Sie sicher, dass das temporäre Verzeichnis über genügend Speicherbereich verfügt, und stellen Sie sicher, dass Sie über die Berechtigung zum Schreiben in dieses Verzeichnis verfügen. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden. Wenn das Problem bestehen bleibt, wenden Sie sich an den Systemadministrator.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Das E-Mail-Applet kann eine temporäre Datei nicht löschen.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Möglicherweise wird die Datei von einer anderen Anwendung verwendet oder sie ist nicht auf der Workstation vorhanden.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Wenn die Datei von einer anderen Anwendung verwendet wird, schließen Sie diese Anwendung. Wenn sich die Datei in Ihrem lokalen Dateisystem befindet, entfernen Sie die folgende Datei aus dem temporären Verzeichnis auf Ihrer Workstation: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Der Link zum Dokument kann nicht erstellt werden.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Das Repository hat die URL mit einem ungültigen Format zurückgegeben.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Schließen Sie Ihren Web-Browser einschließlich aller Registerkarten und Sitzungen und melden Sie sich erneut an. Versuchen Sie erneut, das Dokument über den Web-Client zu senden. Bleibt das Problem bestehen, wenden Sie sich an den IBM Software Support.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Das E-Mail-Applet kann die Datei nicht an eine E-Mail anhängen.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Das Repository hat eine URL zum Dokument in einem ungültigen Format zurückgegeben.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Schließen Sie Ihren Web-Browser einschließlich aller Registerkarten und Sitzungen und melden Sie sich erneut an. Versuchen Sie erneut, das Dokument über den Web-Client zu senden. Bleibt das Problem bestehen, wenden Sie sich an den IBM Software Support.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Der Anhang kann nicht erstellt werden.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Das E-Mail-Applet kann die URL zum Dokument nicht lesen.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Schließen Sie Ihren Web-Browser einschließlich aller Registerkarten und Sitzungen und melden Sie sich erneut an. Versuchen Sie erneut, das Dokument über den Web-Client zu senden. Bleibt das Problem bestehen, wenden Sie sich an den IBM Software Support.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Das Dokument konnte nicht aus dem Repository abgerufen werden.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Möglicherweise hat Ihre Sitzung das zulässige Zeitlimit überschritten, das Repository oder der Webanwendungsserver ist nicht aktiv oder es gibt ein Problem mit der Web-Client-Konfiguration.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Melden Sie sich an und versuchen Sie, das Dokument erneut als E-Mail zu senden. Wenn das Problem bestehen bleibt, bitten Sie den Systemadministrator, die Fehlerprotokolle des Repositorys zu prüfen.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Wenn Sie den Web-Client so konfiguriert haben, dass AFP-Dokumente vor dem Versenden als Anhang in ein anderes Format konvertiert werden, beispielsweise PDF, stellen Sie sicher, dass die Konvertierung korrekt konfiguriert ist.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Das Dokument konnte nicht in das PDF-Format konvertiert werden.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Das Tool, das zum Umsetzen von Dokumenten in das PDF-Format verwendet wird, unterstützt den Dateityp nicht.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Schließen Sie diese Seite und versuchen Sie, das Dokument erneut als E-Mail zu senden, ohne es in das PDF-Format zu konvertieren.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Die E-Mail wurde nicht erstellt.",
		email_applet_MAPI_USER_ABORT_explanation: "Öffnen Sie Ihre E-Mail-Anwendung und stellen Sie sicher, dass sie ordnungsgemäß funktioniert. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden. Wenn das Problem bestehen bleibt, bitten Sie den Systemadministrator, die Fehlerprotokolle des Betriebssystems zu prüfen.",
		email_applet_MAPI_USER_ABORT_userResponse: "Wenn Sie die E-Mail-Anwendung schließen wollten, ist keine weitere Maßnahme erforderlich. Wenn Sie die E-Mail senden wollen, melden Sie sich an Ihrer E-Mail-Anwendung an und versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Die E-Mail kann nicht erstellt werden.",
		email_applet_MAPI_FAILURE_explanation: "Ihr E-Mail-Client ist möglicherweise nicht geöffnet oder Sie sind nicht angemeldet.",
		email_applet_MAPI_FAILURE_userResponse: "Öffnen Sie Ihre E-Mail-Anwendung und stellen Sie sicher, dass sie ordnungsgemäß funktioniert. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden. Wenn das Problem bestehen bleibt, bitten Sie den Systemadministrator, die Fehlerprotokolle des Betriebssystems zu prüfen.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Die E-Mail kann nicht erstellt werden.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Sie sind nicht an Ihrem E-Mail-Client angemeldet. Ihr E-Mail-Client muss geöffnet sein und Sie müssen angemeldet sein, damit Sie eine Nachricht über den Web-Client senden können.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Öffnen Sie Ihren E-Mail-Client und melden Sie sich an. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Die E-Mail kann nicht erstellt werden, weil die temporäre Datei nicht auf Ihrer Workstation erstellt werden kann.",
		email_applet_MAPI_DISK_FULL_explanation: "Möglicherweise ist das temporäre Verzeichnis auf Ihrer Workstation voll.",
		email_applet_MAPI_DISK_FULL_userResponse: "Stellen Sie sicher, dass das temporäre Verzeichnis über genügend Speicherbereich verfügt. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Die E-Mail kann nicht erstellt werden, weil nicht genügend Systemspeicher zur Verfügung steht.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Möglicherweise sind zu viele Anwendungen geöffnet.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Schließen Sie nicht verwendete Anwendungen und versuchen Sie dann erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI-Zugriff wird verweigert.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Möglicherweise ist der MAPI-Zugriff (MAPI - Messaging Application Programming Interface) nicht aktiviert oder er wird für Ihre E-Mail-Anwendung nicht unterstützt. MAPI ist das Messaging-Protokoll, das die Kommunikation zwischen dem Web-Client und Ihrer E-Mail-Anwendung ermöglicht.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Wenden Sie sich an den Systemadministrator.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Stellen Sie sicher, dass bei der E-Mail-Anwendung der MAPI-Zugriff eingerichtet und ordnungsgemäß konfiguriert ist. Wenn das Problem bestehen bleibt, wenden Sie sich an den IBM Software Support.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Der Anhang oder der Link zum Element kann nicht erstellt werden.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Möglicherweise sind zu viele Browsersitzungen geöffnet.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Schließen Sie alle nicht verwendeten Browsersitzungen. Versuchen Sie dann erneut, das Dokument über den Web-Client zu senden. Wenn das Problem bestehen bleibt, wenden Sie sich an den Systemadministrator.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Die E-Mail kann nicht gesendet werden.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Möglicherweise versuchen Sie, zu viele Anhänge zu senden.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Wählen Sie weniger Dateien aus. Versuchen Sie dann erneut, die Dokumente über den Web-Client zu senden.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Die E-Mail kann nicht gesendet werden.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Möglicherweise versuchen Sie, die E-Mail an zu viele Empfänger zu senden.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Senden Sie die E-Mail an weniger Empfänger.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Der Anhang kann nicht erstellt werden.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Einige erforderliche temporäre Dateien wurden möglicherweise gelöscht, bevor der Anhang erstellt werden konnte. Dieser Fehler kann auftreten, wenn der Inhalt des Browser-Caches vor dem Senden der E-Mail gelöscht wird.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Der Anhang kann nicht erstellt werden.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Einige erforderliche temporäre Dateien wurden möglicherweise gelöscht, bevor der Anhang erstellt werden konnte. Dieser Fehler kann auftreten, wenn der Inhalt des Browser-Caches vor dem Senden der E-Mail gelöscht wird.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Der Anhang kann nicht von der E-Mail-Anwendung erstellt werden.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Die E-Mail kann nicht an den angegebenen Empfänger gesendet werden.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Der Empfänger ist möglicherweise im Adressbuch nicht vorhanden.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Prüfen Sie den Namen des Empfängers und versuchen Sie erneut, das Dokument zu senden.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Die E-Mail kann nicht an den angegebenen Empfänger gesendet werden.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Die E-Mail-Adresse ist möglicherweise nicht ordnungsgemäß formatiert.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Stellen Sie sicher, dass Sie eine gültige E-Mail-Adresse eingegeben haben, und versuchen Sie erneut, das Dokument zu senden.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Die E-Mail kann nicht gesendet werden.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Möglicherweise ist die E-Mail zu lang.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Kürzen Sie den Text der E-Mail und versuchen Sie erneut, sie zu senden.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Die E-Mail kann nicht erstellt werden.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Möglicherweise ist beim E-Mail-Client ein Fehler aufgetreten, als er versuchte, die E-Mail zu erstellen.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Starten Sie den E-Mail-Client neu und versuchen Sie dann erneut, das Dokument über ihn zu senden.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Möglicherweise wurde die E-Mail nicht ordnungsgemäß zusammengesetzt.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Die E-Mail kann nicht an den angegebenen Empfänger gesendet werden.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Die E-Mail-Adresse ist möglicherweise nicht ordnungsgemäß formatiert.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Stellen Sie sicher, dass Sie eine gültige E-Mail-Adresse eingegeben haben, und versuchen Sie erneut, das Dokument zu senden.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Der E-Mail-Client kann die angeforderte Aktion nicht ausführen.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Die E-Mail-Anwendung gab einen unerwarteten Fehler zurück.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Versuchen Sie erneut, das Dokument über den Web-Client zu senden.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "In einer der Eigenschaften fehlt die erforderliche Anzahl Werte.",
		error_property_cardinality_explanation: "Einige Eigenschaften haben eine minimale und maximale Anzahl Werte.",
		error_property_cardinality_userResponse: "Mit der Kurzinfo können Sie ermitteln, für welche Eigenschaft eine minimale Anzahl Werte erforderlich ist. Geben Sie dann die minimale Anzahl Werte an und versuchen Sie es erneut.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Es ist ein Dateiname erforderlich.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Geben Sie einen Dateinamen an und versuchen Sie es erneut.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Das Plug-in ${0} enthält Fehler.",
		plugin_error_explanation: "Beim Auswerten des JavaScript-Codes für das Plug-in ${0} ist ein Fehler aufgetreten. Wenn Sie mit der Verwendung des Web-Clients fortfahren, treten möglicherweise weitere Fehler auf.",
		plugin_error_userResponse: "Wenden Sie sich an den Systemadministrator.",
		plugin_error_adminResponse: "Es gibt ein Problem mit dem Plug-in, das vom Plug-in-Anbieter behoben werden muss. Es wird empfohlen, das Plug-in aus der Web-Client-Konfiguration zu entfernen, bis das Problem mit dem Plug-in behoben wurde.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Die Erfassungsvorlage kann nicht geöffnet werden.",
		open_old_format_entry_template_error_explanation: "Die Erfassungsvorlage verwendet ein älteres Format, das im Web-Client nicht unterstützt wird.",
		open_old_format_entry_template_error_userResponse: "Bitten Sie den Systemadministrator, die Erfassungsvorlage zu aktualisieren.",
		open_old_format_entry_template_error_adminResponse: "Speichern Sie mit Application Engine oder Workplace XT Entry Template Designer eine aktualisierte Version der Erfassungsvorlage.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Die Erfassungsvorlage kann nicht geöffnet werden.",
		open_custom_object_entry_template_error_explanation: "Der Web-Client unterstützt Erfassungsvorlagen für benutzerdefinierte Objekte nicht.",
		open_custom_object_entry_template_error_userResponse: "Öffnen Sie eine andere Erfassungsvorlage.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Das eForms-Objekt kann nicht geöffnet werden.",
		open_forms_object_error_explanation: "Der Web-Client unterstützt die folgenden Typen von eForms-Objekten nicht: Formularvorlage, Formulardaten, Dokumentrichtlinie und Workflowrichtlinie.",
		open_forms_object_error_userResponse: "Öffnen Sie ein anderes Dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Sie können die Erfassungsvorlage ${0} nicht verwenden.",
		entry_template_folder_restricted_error_explanation: "Die Erfassungsvorlage fügt dem Ordner ${1} Elemente hinzu, Sie verfügen jedoch nicht über die Berechtigung, diesem Ordner Elemente hinzuzufügen.",
		entry_template_folder_restricted_error_userResponse: "Wählen Sie eine andere Erfassungsvorlage aus oder bitten Sie den Systemadministrator um die Berechtigungen zum Hinzufügen von Elementen zum Ordner ${1}.",
		entry_template_folder_restricted_error_0: "Name_der_Erfassungsvorlage",
		entry_template_folder_restricted_error_1: "Ordnername",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Die Erfassungsvorlage kann nicht geöffnet werden.",
		open_records_entry_template_error_explanation: "Der Web-Client unterstützt Erfassungsvorlagen für Schriftstückdeklaration nicht.",
		open_records_entry_template_error_userResponse: "Öffnen Sie eine andere Erfassungsvorlage.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Der Workflow kann nicht geöffnet werden.",
		open_workflow_error_explanation: "Der Web-Client unterstützt das Öffnen von Workflows nicht.",
		open_workflow_error_userResponse: "Öffnen Sie ein anderes Dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Das Dokument kann nicht geöffnet werden.",
		viewer_unable_to_view_error_explanation: "Für Dokumente dieses Typs ist kein Viewer konfiguriert oder der konfigurierte Viewer ist mit dem System nicht kompatibel.",
		viewer_unable_to_view_error_userResponse: "Bitten Sie den Systemadministrator, einen Viewer für Dokumente dieses Typs zu konfigurieren und stellen Sie sicher, dass der konfigurierte Viewer mit dem System des Benutzers verwendet werden kann.",
		viewer_unable_to_view_error_adminResponse: "Konfigurieren Sie mithilfe des Verwaltungstools einen Viewer für diesen Dokumenttyp.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Die Suche kann nicht geöffnet werden.",
		search_cannot_open_error_explanation: "Die Suchfunktion ist für diesen Desktop nicht konfiguriert.",
		search_cannot_open_error_userResponse: "Fragen Sie den Systemadministrator, ob Sie Zugriff auf einen Desktop erhalten können, der die Suchfunktion einschließt, oder ob dieser Desktop so aktualisiert werden kann, dass er die Suchfunktion einschließt.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Das Dokument wurde nicht geladen.",
		viewer_document_load_failed_error_explanation: "Der Daeja ViewONE Professional-Viewer konnte das Dokument nicht öffnen.",
		viewer_document_load_failed_error_userResponse: "Weitere Informationen finden Sie in den im Viewer angezeigten Fehlernachrichten.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Das Dokument kann nicht angezeigt werden.",
		viewer_session_expired_explanation: "Der Dokumentinhalt kann nicht abgerufen werden.",
		viewer_session_expired_userResponse: "Versuchen Sie, sich erneut anzumelden. Wenn das Problem bestehen bleibt, ist der Anwendungsserver möglicherweise nicht aktiv. Bitten Sie den Systemadministrator, die Protokolle von IBM Content Navigator zu überprüfen oder den Server neu zu starten.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Das Dokument kann nicht angezeigt werden.",
		ajaxViewer_getPage_failed_explanation: "Der AJAX-Viewer hat beim Abrufen von Seiteninhalt einen Fehler empfangen. Möglicherweise ist der Anwendungsserver nicht aktiv.",
		ajaxViewer_getPage_failed_userResponse: "Schließen Sie den Web-Browser und melden Sie sich erneut an. Wenn das Problem bestehen bleibt, bitten Sie den Systemadministrator, die Protokolldateien des Webanwendungsservers zu prüfen oder den Server neu zu starten.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Die JRE (Java Runtime Environment) wurde auf Ihrer Workstation nicht gefunden.",
		viewer_java_plugin_not_found_explanation: "Entweder wurde das Plug-in nicht gefunden oder es ist nicht die richtige JRE-Version installiert.",
		viewer_java_plugin_not_found_userResponse: "Prüfen Sie, ob die JRE installiert ist. Geben Sie dazu in einer Eingabeaufforderung zum Beispiel folgenden Befehl ein: Java -version. Wenn die JRE nicht oder mit dem falschen Versionsstand installiert ist, installieren Sie die erforderliche JRE-Version. Eine Liste der unterstützten Versionen finden Sie im Dokument zu den Hardware- und Softwarevoraussetzungen für IBM Content Navigator auf der Site des IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Das Dokument kann nicht in Ihrem Web-Browser angezeigt werden.",
		viewer_pdf_plugin_not_found_explanation: "Das zum Anzeigen von PDF-Dokumenten im Web-Browser verwendete Plug-in wurde nicht gefunden.",
		viewer_pdf_plugin_not_found_userResponse: "Die PDF-Datei wird nicht im Viewerfenster angezeigt, sondern auf Ihre Workstation heruntergeladen.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Das folgende Element kann dem Repository nicht hinzugefügt werden: ${0}.",
		add_document_single_item_error_explanation: "Dieser Fehler kann aus einem der folgenden Gründe auftreten:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das versetzt oder gelöscht wurde.</li>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das umbenannt wurde.</li>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das beschädigt ist.</li>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das in einer anderen Anwendung geöffnet ist.</li>" + "<li>Sie versuchen, dem Repository einen Ordner hinzuzufügen.</li>" + "<li>Sie haben nicht die entsprechenden Betriebssystemberechtigungen zum Zugriff auf das Dokument.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Ergreifen Sie die zur Behebung des Problems erforderliche Lösung:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Wenn das Dokument versetzt oder umbenannt wurde, suchen Sie das Dokument in Ihrem Dateisystem und versuchen Sie erneut, es hinzuzufügen.</li>" + "<li>Wenn das Dokument in einer anderen Anwendung geöffnet ist, schließen Sie es und versuchen Sie es erneut.</li>" + "</ul>" + "<br>Sie können dem Repository keine Ordner hinzufügen.",
		add_document_single_item_error_0: "fehlgeschlagenes_Element",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Die folgenden ${0} Elemente können dem Repository nicht hinzugefügt werden: ${1}.",
		add_document_multiple_items_error_explanation: "Ein Problem im Zusammenhang mit einem der Elemente verhindert, dass eines der Elemente dem Repository hinzugefügt werden kann. Dieser Fehler kann aus einem der folgenden Gründe auftreten:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das versetzt oder gelöscht wurde.</li>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das umbenannt wurde.</li>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das beschädigt ist.</li>" + "<li>Sie versuchen, ein Dokument hinzuzufügen, das in einer anderen Anwendung geöffnet ist.</li>" + "<li>Sie versuchen, dem Repository einen Ordner hinzuzufügen.</li>" + "<li>Sie haben nicht die entsprechenden Betriebssystemberechtigungen zum Zugriff auf das Dokument.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Ergreifen Sie die zur Behebung des Problems erforderliche Lösung:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Wenn ein Dokument versetzt oder umbenannt wurde, suchen Sie das Dokument in Ihrem Dateisystem und versuchen Sie erneut, die Elemente hinzuzufügen.</li>" + "<li>Wenn ein Dokument in einer anderen Anwendung geöffnet ist, schließen Sie es und versuchen Sie erneut, die Elemente hinzuzufügen.</li>" + "<li>Wenn ein Dokument gelöscht oder beschädigt wurde, wählen Sie das Dokument ab und versuchen Sie erneut, die verbleibenden Elemente hinzuzufügen.</li>" + "</ul>" + "<br>Sie können dem Repository keine Ordner hinzufügen.",
		add_document_multiple_items_error_0: "Anzahl_Elemente",
		add_document_multiple_items_error_1: "fehlgeschlagene_Elemente",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Sie können keine Elemente aus dieser Position ziehen und ablegen.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Das eForms-Objekt kann nicht geöffnet werden.",
		open_forms_work_object_error_explanation: "Der Web-Client unterstützt den folgenden eForms-Objekttyp nicht: Workflowrichtlinie.",
		open_forms_work_object_error_userResponse: "Öffnen Sie ein anderes Dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Das Dokument kann nicht geöffnet werden.",
		viewer_privilege_to_view_error_explanation: "Sie haben nicht die entsprechenden Berechtigungen zum Anzeigen des Dokuments.",
		viewer_privilege_to_view_error_userResponse: "Bitten Sie den Eigentümer des Dokuments oder den Systemadministrator, Ihnen die entsprechenden Berechtigungen zum Anzeigen des Dokuments zu erteilen.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Die Elemente können dem Repository nicht hinzugefügt werden.",
		add_document_too_many_items_error_explanation: "Sie können bis zu ${0} Elemente gleichzeitig hinzufügen. Sie versuchen, ${1} Elemente hinzuzufügen.",
		add_document_too_many_items_error_userResponse: "Entfernen Sie einige Elemente aus der Liste und versuchen Sie erneut, die Elemente hinzuzufügen. Sie können sich auch an den Systemadministrator wenden und ihn bitten die maximale Anzahl der Dokumente, die gleichzeitig hinzugefügt werden können, für den Desktop zu erhöhen.",
		add_document_too_many_items_error_0: "Maximale_Anzahl_Elemente",
		add_document_too_many_items_error_1: "Anzahl_Elemente",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Über die folgende URL kann keine Verbindung zum Web-Client eingerichtet werden: ${0}.",
		http_ltpa_expired_explanation: "Der Ihrer Browsersitzung zugeordnete LTPA-Schlüssel ist abgelaufen.",
		http_ltpa_expired_userResponse: "Starten Sie den Web-Browser erneut und versuchen Sie erneut, sich anzumelden. Wenn das Problem bestehen bleibt, melden Sie dem Systemadministrator folgenden Fehler: ${1}.",
		http_ltpa_expired_0: "Web-Client-URL",
		http_ltpa_expired_1: "HTTP-Fehler",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Das Dokument kann dem Ordner ${0} nicht hinzugefügt werden.",
		dnd_no_privilege_error_explanation: "Die Berechtigungen für den Ordner verhindern, dass dem Ordner Dokumente hinzugefügt werden.",
		dnd_no_privilege_error_userResponse: "Fügen Sie das Dokument einem anderen Ordner hinzu.",
		dnd_no_privilege_error_0: "Elementname",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Die Elemente können nicht geändert werden.",
		modify_document_too_many_items_error_explanation: "Sie können bis zu ${0} Elemente gleichzeitig ändern. Sie versuchen, ${1} Elemente zu ändern.",
		modify_document_too_many_items_error_userResponse: "Wählen Sie weniger Elemente aus und versuchen Sie erneut, die Elemente zu ändern. Sie können auch den Systemadministrator bitten, die maximale Anzahl der Elemente zu erhöhen, die gleichzeitig über den Desktop geändert werden können.",
		modify_document_too_many_items_error_0: "Maximale_Anzahl_Elemente",
		modify_document_too_many_items_error_1: "Anzahl_Elemente",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Sie können die Klasse ${0} nicht verwenden.",
		add_document_multiple_unique_values_error_explanation: "Die Klasse ${0} enthält mindestens eine Eigenschaft, die einen eindeutigen Wert für jedes Dokument erfordert. Wenn Sie mehrere Dokumente hinzufügen, verwenden diese Dokumente dieselben Werte.",
		add_document_multiple_unique_values_error_userResponse: "Wählen Sie eine andere Klasse aus oder fügen Sie die Dokumente separat hinzu.",
		add_document_multiple_unique_values_error_0: "Klassenanzeigename",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Sie können die Erfassungsvorlage ${0} nicht verwenden.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Die Erfassungsvorlage ${0} erfordert es, dass Sie Dokumente der Klasse ${1} hinzufügen. Die Klasse ${1} enthält jedoch mindestens eine Eigenschaft, die einen eindeutigen Wert für jedes Dokument erfordert. Wenn Sie mehrere Dokumente hinzufügen, verwenden diese Dokumente dieselben Werte.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Wählen Sie eine andere Erfassungsvorlage aus oder fügen Sie die Dokumente separat hinzu.",
		add_document_multiple_unique_values_entry_template_error_0: "Name_der_Erfassungsvorlage",
		add_document_multiple_unique_values_entry_template_error_1: "Klassenanzeigename",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Sie können die Erfassungsvorlage ${0} nicht verwenden.",
		entry_template_class_restricted_error_explanation: "Die Erfassungsvorlage fügt mithilfe der Klasse ${1} Elemente hinzu, Sie verfügen jedoch nicht über die Berechtigung, Elemente mithilfe dieser Klasse hinzuzufügen.",
		entry_template_class_restricted_error_userResponse: "Wählen Sie eine andere Erfassungsvorlage aus oder bitten Sie den Systemadministrator um die Berechtigungen zum Hinzufügen von Elementen mithilfe der Klasse ${1}.",
		entry_template_class_restricted_error_0: "Name_der_Erfassungsvorlage",
		entry_template_class_restricted_error_1: "Klassenanzeigename",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Das Arbeitselement kann keinem anderen Benutzer zuordnet werden.",
		process_reassign_error_explanation: "Diese Aktion wird durch den Workflow verhindert.",
		process_reassign_error_userResponse: "Sie können das Arbeitselement öffnen und den aktuellen Schritt im Arbeitselement vollständig ausführen.  Versuchen Sie, weitere Informationen zu diesem Problem zu erhalten, indem Sie den Eigner bitten, sicherzustellen, dass das Arbeitselement erneut zugeordnet werden kann.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Die folgende angepasste Aktion kann nicht geladen werden: ${0}.",
		customaction_loadurl_error_explanation: "Die angepasste Aktion befindet sich nicht an einer zugänglichen Position. Die aktuelle URL der angepassten Aktion ist ${1}.",
		customaction_loadurl_error_userResponse: "Bitten Sie den Administrator, die angepasste Aktion an eine zugänglichen Position zu verschieben.",
		customaction_loadurl_error_adminResponse: "Die JSP-Datei, die die angepasste Aktion definiert, muss als Teil der eClient-Webanwendung oder der IBM Content Navigator-Webanwendung bereitgestellt werden.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Das folgende Feature wurde nicht gefunden: ${0}.",
		feature_invalid_explanation: "Dieses Problem kann auftreten, wenn das Feature nicht auf dem angegebenen Desktop verfügbar ist oder der Featurename falsch geschrieben wurde.",
		feature_invalid_userResponse: "Wenn Sie auf 'OK' klicken, werden Sie zum Standardfeature für diesen Desktop umgeleitet. Melden Sie dieses Problem dem Systemadministrator.",
		feature_invalid_adminResponse: "Wenn das Feature auf dem Desktop verfügbar sein muss, aktualisieren Sie die Desktopkonfiguration im Verwaltungstool. Wenn das Feature nicht auf diesem Desktop enthalten sein soll oder der Name falsch geschrieben ist, müssen Sie den Anwendungsentwickler, der die URL zu diesem Feature erstellt hat, um die Aktualisierung der URL bitten.",
		feature_invalid_number: 2066,
		feature_invalid_0: "Featurename",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Die Suche ${0} kann nicht geöffnet werden.",
		search_unsupportedTeamspaceSearch_error_explanation: "Sie müssen sich in einem Teamarbeitsbereich befinden, um diese Suche öffnen zu können.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Wählen Sie eine andere Suche aus.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Die folgende Datei kann nicht importiert werden: ${0}.",
		wrong_import_file_type_error_explanation: "Die Datei muss eine Eigenschaftendatei sein.",
		wrong_import_file_type_error_userResponse: "Wählen Sie die Eigenschaftendatei aus, die Sie aus dem Verwaltungstool exportiert haben.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Das Repository ${0} wurde auf dem Desktop ${1} nicht gefunden.",
		browse_repository_not_found_error_explanation: "Das Repository muss auf dem Desktop vorhanden und für das Feature 'Durchsuchen' aktiviert sein, wenn es in einem URL-Parameter angegeben wird.",
		browse_repository_not_found_error_userResponse: "Stellen Sie sicher, dass die in der URL angegeben Repository-ID stimmt, dass das Repository zum Desktop ${1} hinzugefügt wurde und dass das Feature 'Durchsuchen' für das Repository aktiviert ist.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Für das Repository ${0} ist das Feature 'Durchsuchen' auf dem Desktop ${1} nicht aktiviert.",
		browse_repository_not_enabled_error_explanation: "Für das Repository muss das Feature 'Durchsuchen' aktiviert sein, wenn es in einem URL-Parameter angegeben wird.",
		browse_repository_not_enabled_error_userResponse: "Aktivieren Sie das Feature 'Durchsuchen' für das Repository ${0} auf dem Desktop ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Die Suche kann nicht abgeschlossen werden, weil der Link ungültige Kriterien enthält.",
		invalid_xt_stored_search_criteria_error_explanation: "Der folgende Wert ist ungültig: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Bitten Sie den Systemadministrator, einen aktualisierten Link bereitzustellen.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Bearbeiten Sie das entsprechende Name/Wert-Paar in der URL. Wenn Sie nicht wissen, welche Werte für die Eigenschaft gültig sind, öffnen Sie die gespeicherte Suche im Search Designer von FileNet Workplace XT, um einen gültigen Wert zu ermitteln.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Die Repository-übergreifende Suche kann nicht geöffnet werden.",
		unified_search_invalid_fixed_value_error_explanation: "Die Repository-übergreifende Suche enthält ungültige Kriterien. Dieses Problem kann auftreten, wenn ein Kriterium einen festen Wert hat, der zu den übrigen Eigenschaften in einer Zuordnung nicht kompatibel ist. Dieses Problem kann beispielsweise auftreten, wenn ein fester Wert eine Zeichenfolge ist, die anderen Eigenschaften der Zuordnung aber Ganzzahlen sind.",
		unified_search_invalid_fixed_value_error_userResponse: "Wenn Sie über die entsprechenden Berechtigungen zum Bearbeiten der Suche verfügen, entfernen Sie die ungültigen Kriterien und speichern Sie die Suche erneut. Wenn Sie nicht über die entsprechenden Berechtigungen zum Bearbeiten der Suche verfügen, bitten Sie den Eigner der Suche oder den Systemadministrator, die Suche erneut zu speichern.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Die Anforderung kann nicht abgeschlossen werden.",
		launch_action_invalid_json_error_explanation: "Die an den Web-Client übergebenen Daten sind nicht gültig.",
		launch_action_invalid_json_error_userResponse: "Teilen Sie dem Systemadministrator mit, welche Anwendung Sie beim Auftreten des Problems verwendet haben.",
		launch_action_invalid_json_error_adminResponse: "Die Clientanwendung hat kein gültiges JSON-Objekt an den Web-Client gesendet. Wenden Sie sich zur weiteren Unterstützung an den IBM Software Support.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Die Anforderung kann nicht abgeschlossen werden.",
		launch_action_not_found_error_explanation: "Die Aktion ${0} ist für keines der Menüs auf dem Desktop ${1} konfiguriert.",
		launch_action_not_found_error_userResponse: "Bitten Sie den Administrator, den Desktop ${1} für die Verwendung eines Menüs zu konfigurieren, das die Aktion ${0} enthält, oder Ihnen einen Desktop zuzuweisen, auf dem die Aktion ${0} verfügbar ist.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Die Anforderung kann nicht abgeschlossen werden.",
		launch_action_repository_not_found_error_explanation: "Das Repository ${0} ist dem Desktop ${1} nicht zugeordnet.",
		launch_action_repository_not_found_error_userResponse: "Bitten Sie den Administrator, das Repository ${0} dem Desktop ${1} zuzuordnen, oder Ihnen einen Desktop zuzuweisen, auf dem das Repository ${0} verfügbar ist.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Der Teamarbeitsbereich kann nicht geöffnet werden.",
		teamspace_cannot_open_error_explanation: "Die Teamarbeitsbereichsfunktion ist für diesen Desktop nicht konfiguriert.",
		teamspace_cannot_open_error_userResponse: "Fragen Sie den Systemadministrator, ob Sie Zugriff auf einen Desktop erhalten können, der die Suchfunktion einschließt, oder ob dieser Desktop so aktualisiert werden kann, dass er die Teamarbeitsbereichsfunktion einschließt.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Beim Einchecken des neu bearbeiteten Inhalts ist ein Fehler aufgetreten.",
		viewer_redaction_checkin_failed_explanation: "Der Viewer hat beim Einchecken des neu bearbeiteten Inhalts einen Fehler empfangen.",
		viewer_redaction_checkin_failed_userResponse: "Bitten Sie den Systemadministrator, die Protokolldateien des Webanwendungsservers zu prüfen.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Sie können diesem Ordner keine Dokumente hinzufügen.",
		add_document_odserver_odwek_version_od_error_explanation: "Die aktuelle Version von IBM Content Manager OnDemand Server oder ODWEK weist nicht die Mindeststufe auf, die zur Unterstützung für das Hinzufügen von Dokumenten zu einem Content Manager OnDemand-Repository erforderlich ist.",
		add_document_odserver_odwek_version_od_error_userResponse: "Bitten Sie den Systemadministrator, die Versionen von Content Manager OnDemand Server und ODWEK zu prüfen, die zur Unterstützung für das Hinzufügen von Dokumenten zu Content Manager OnDemand-Repositorys erforderlich ist.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Die Elemente können dem Repository nicht hinzugefügt werden.",
		add_document_too_many_items_od_error_explanation: "Für IBM Content Manager OnDemand-Repositorys können Sie nur jeweils ein Element gleichzeitig hinzufügen.",
		add_document_too_many_items_od_error_userResponse: "Entfernen Sie einige Elemente in Ihrer Liste und versuchen Sie erneut, die Elemente nacheinander hinzuzufügen.",
		add_document_too_many_items_od_error_0: "Maximale_Anzahl_Elemente",
		add_document_too_many_items_od_error_1: "Anzahl_Elemente",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Das Element kann dem Repository nicht hinzugefügt werden.",
		add_document_filesize_empty_od_error_explanation: "Sie können keine leeren Dateien einem IBM Content Manager OnDemand-Repository hinzufügen.",
		add_document_filesize_empty_od_error_userResponse: "Füllen Sie die Datei mit Inhalt und versuchen Sie dann, die Datei erneut dem Repository hinzuzufügen, oder fügen Sie ein anderes Element hinzu.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Die Repository-übergreifende Suche kann nicht geöffnet werden.",
		unified_search_repository_not_found_error_explanation: "Die Repository-übergreifende Suche schließt mindestens ein ungültiges Repository ein. Dieses Problem kann auftreten, wenn in die Suche eingeschlossene Repositorys aus der Anwendung gelöscht oder vom aktuellen Desktop entfernt wurden.",
		unified_search_repository_not_found_error_userResponse: "Wenn Sie über die entsprechenden Berechtigungen zum Bearbeiten der Suche verfügen, speichern Sie die Suche erneut. Wenn Sie die Suche speichern, entfernt der Web-Client die ungültigen Repositorys aus der Suche. Wenn Sie nicht über die entsprechenden Berechtigungen zum Bearbeiten der Suche verfügen, bitten Sie den Eigner der Suche oder den Systemadministrator, die Suche erneut zu speichern.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Es kann kein neues Dokument erstellt werden.",
		edit_document_using_office_online_error: "Das Dokument kann nicht geöffnet werden.",
		edit_document_using_office_online_error_explanation: "Die URL für Microsoft Office Online Server ist nicht konfiguriert.",
		edit_document_using_office_online_error_userResponse: "Bevor Sie Office Online verwenden können, muss Ihr Administrator zunächst Office Online Server auf einem Repository aktivieren und die URL für Microsoft Office Online Server angeben.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Das Dokument kann in Microsoft Office Online nicht geöffnet werden.",
		edit_document_using_office_online_error_userResponse1: "Bitten Sie Ihren Administrator, die MS Office Online Server-Integration zu aktualisieren.<br><br> Wenn der Benutzer über Microsoft Office Online auf dieses Dokument zugreifen muss, rufen Sie die Seite 'Edit-Integration' für das Repository auf und aktualisieren Sie die MS Office Online Server-Integration so, dass die Klasse in der Liste der Klassen für das Ändern der Office Online-Unterstützung enthalten ist. ",		
		browser_not_support_this_viewer: "Der konfigurierte Viewer ist mit Ihrem Browser nicht kompatibel.",
		browser_not_support_this_viewer_explanation: "${0} wird vom Browser nicht unterstützt.",
		browser_not_support_this_viewer_userResponse: "Verwenden Sie einen anderen Viewer zum Öffnen dieses Dokuments. Eine Liste der unterstützten Browser finden Sie im Dokument zu den Hardware- und Softwarevoraussetzungen für IBM Content Navigator auf der Site des IBM Software Support.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Workflow-Informationen",
		process_information_info_text: "Das ausgewählte Element wird momentan in den folgenden Workflows ausgeführt.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Entspricht",
		operator_NOTEQUAL: "Ungleich",
		operator_LIKE: "Ähnelt",
		operator_STARTSWITH: "Startet mit",
		operator_ENDSWITH: "Endet mit",
		operator_NOTLIKE: "Ähnelt nicht",
		operator_NULL: "Ist leer",
		operator_NOTNULL: "Ist nicht leer",
		operator_LESS: "Kleiner als",
		operator_LESSOREQUAL: "Kleiner-gleich",
		operator_GREATER: "Größer als",
		operator_GREATEROREQUAL: "Größer-gleich",
		operator_BETWEEN: "Zwischen",
		operator_NOTBETWEEN: "Nicht zwischen",
		operator_IN: "Alle einschließen",
		operator_INANY: "Beliebige einschließen",
		operator_NOTIN: "Alle ausschließen",
		operator_CONTAINS: "Enthält",

		/* SearchForm widget */
		search_button_tooltip: "Nach Dokumenten suchen, die Ihren Kriterien entsprechen.",
		reset_button_tooltip: "Setzt die Suche auf die von Ihrem Administrator festgelegten Standardwerte zurück.",
		clear_button_tooltip: "Entfernt alle Werte, die Sie für die Suche eingegeben haben.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Suche auswählen",
		append_to_search: "An Suche anhängen",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Neue Suche",
		new_unified_search: "Neue Repository-übergreifende Suche",
		searh_name_contains: "Suchname enthält",
		keep_search_criteria_expanded: "Suchkriterien geöffnet lassen",
		showing_results: "Ergebnisse für:",
		open_in_new_window: "In neuem Fenster öffnen",
		open_in_new_tab: "In neuer Registerkarte öffnen",
		close_tab: "Registerkarte schließen",
		add_repository: "Repository hinzufügen",
		edit_repository: "Repository bearbeiten",
		remove_repository: "Entfernen",
		search_scope: "Suchbereich",
		search_class_template: "Klasse",
		object_type_version: "Objekttyp und Version",
		not_applicable: "Nicht zutreffend",
		unified_search_including_subfolders: " (Mit Unterordnern)",
		unified_search_dialog_intro_text: "Wählen Sie das Repository und die Suche bzw. Klassen aus, das bzw. die Sie in die Suche einschließen wollen.",
		unified_search_class_or_template: "Klasse oder Vorlage",

		select_object_fieldset_legend: "Wie möchten Sie anzuhängende Elemente finden:",
		select_object_create_new_search: "Neue Suche",
		select_object_search_template: "Vorhandene Suche",

		search_criteria: "Suchkriterien:",
		search_criteria_no_colon: "Suchkriterien",
		search_in_multiple: "Suchen in (${0}):",
		search_location_including_subfolders: "${0} einschließlich Unterordnern",
		search_class: "Klasse:",
		search_class_multiple: "Klasse (${0}):",
		search_class_including_subclasses: "${0} einschließlich Unterklassen",
		search_class_all_pseudo: "Alle",
		search_results: "Suchergebnisse",
		select_operator: "Operator auswählen",
		ending_value: "Endwert für die Eigenschaft ${0}:",
		search_options: "Suchoptionen:",
		search_version: "Version:",
		search_released_version: "Freigegebene Version",
		search_current_version: "Aktuelle Version",
		search_all_versions: "Alle Versionen",
		search_file_type_filter: "Dateitypfilter:",
		search_one_file_type: "1 Dateityp",
		search_many_file_types: "${0} Dateitypen",
		search_action_filter: "Aktionsfilter:",
		search_action_filter_hover_help: "Grenzen Sie die Ergebnisse ein, um nur die Dateien einzuschließen, für die Benutzer eine bestimmte Aktion ausgeführt haben.<br/>Sie können beispielsweise nur nach Dokumenten suchen, die Sie am 20. September 2012 hinzugefügt haben.",
		search_action_filter_enabled: "Aktionsfilter ist aktiviert",
		search_enable: "Aktivieren",
		search_disable: "Inaktivieren",
		search_by: "nach",
		search_added: "Hinzugefügt",
		search_modified: "Geändert",
		search_checked_out: "Ausgecheckt",
		search_date_operator_on: "Ein",
		search_date_operator_not_on: "Nicht am",
		search_date_operator_before: "Vor",
		search_date_operator_after: "Nach",
		search_version_hover_help_p8: "Eine freigegebene Version ist für alle Benutzer verfügbar. Ein Dokument, das eine aktuelle Version ist, bedeutet, dass mindestens ein Benutzer das Dokument bearbeitet.",
		search_version_hover_help_cm: "Eine aktuelle Version ist die neueste Version des Elements.",
		search_using: "Nach Elementen suchen, die mit Folgendem übereinstimmen:",
		search_property_and_text_criteria: "Mit den Eigenschaftswerten und den Textkriterien",
		search_property_or_text_criteria: "Mit den Eigenschaftswerten oder den Textkriterien",
		search_property_and_text: "Mit den Eigenschafts- und den Textkriterien",
		search_property_or_text: "Mit den Eigenschafts- oder den Textkriterien",
		search_property_options: "Eigenschaftsoptionen:",
		search_property_option_match_all: "Alle Eigenschaften",
		search_property_option_match_any: "Beliebige Eigenschaften",
		search_property_option_match_all_summary: "Mit allen übereinstimmen",
		search_property_option_match_any_summary: "Mit beliebigen übereinstimmen",
		search_total_count_type_total: "Gesamt",
		search_total_count_type_atleast: "Mindestens",
		search_content_size_filter: "Filter für Inhaltsgröße:",
		search_content_size_filter_any: "Beliebige Inhaltsgröße",

		/* Search work options */
		search_work_filter: "Arbeitselementfilter:",
		search_work_filter_hover_help: "Schränken Sie die Ergebnisse ein, um nur Elemente einzuschließen, die sich in einem Workflow befinden. Sie können beispielsweise die Ergebnisse einschränken, sodass sie nur aktive Arbeitselemente enthalten.<br /><br />Diese Option ist nicht anwendbar, wenn Sie alle Versionen der Elemente sehen möchten, die von der Suche zurückgegeben werden.",
		search_work_filter_enabled: "Arbeitselementfilter ist aktiviert",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Schritt:",
		search_work_filter_owner: "Eigner:",
		search_work_filter_status_all: "Alle Elemente",
		search_work_filter_status_active: "Aktive Elemente",
		search_work_filter_status_suspended: "Ausgesetzte Elemente",
		search_work_filter_process_all: "Alle Workflows",
		search_work_filter_step_all: "Alle Schritte",
		search_work_filter_owner_all: "Alle Benutzer",
		search_work_filter_step_error: "Der Schrittname ist nicht vorhanden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Die Suche kann ohne weitere Informationen nicht abgeschlossen werden. Geben Sie einen Wert für mindestens eine Bedingung ein.",
		search_insufficient_input_box: "Die Suche kann ohne weitere Informationen nicht abgeschlossen werden. Geben Sie Textsuchkriterien ein oder wählen Sie eine Metadatenvorlage aus.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Die Suche kann nicht für die Ausführung konfiguriert werden, wenn sie ohne weitere Informationen geöffnet wurde. Geben Sie einen Wert für mindestens eine Bedingung ein.",
		search_member_required: "Wenn Sie diese Suche für bestimme Benutzer oder Gruppen freigeben wollen, wählen Sie mindestens einen Benutzer oder eine Gruppe aus, für den/die die Suche freigegeben werden soll.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Wollen Sie ohne Speichern der Änderungen schließen?",
		search_prompt_close_all_without_save: "Wollen Sie alle Registerkarten ohne Speichern der Änderungen schließen?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Einer der folgenden Suchkriterientypen ist für das folgende Repository nicht gültig: ${0}. Die ungültigen Kriterien müssen entfernt werden, um die Suche im Web-Client ausführen zu können. Wenn Sie die Suche speichern, werden die ungültigen Kriterien entfernt. Wenn Sie die Suche nicht ändern wollen, schließen Sie die Suche.",
		search_invalid_repository: "Mindestens ein Repository",
		search_invalid_class: "Mindestens eine Klasse",
		search_invalid_folder: "Mindestens ein Ordner",
		search_invalid_file_type: "Mindestens ein Dateityp",
		search_invalid_property: "Mindestens eine Eigenschaft",
		search_invalid_text_search: "Textsuchkriterien",
		search_invalid_work: "Kriterien für Arbeitselementfilter",

		search_operator_pulldown_missing: "Ein Operator ist erforderlich. Wählen Sie einen Operator aus der Dropdown-Liste aus. Wenn kein Operator angezeigt wird, bitten Sie den Systemadministrator, auf der Registerkarte <b>Suchen</b> im Verwaltungstool zu prüfen, ob für alle Operatoren festgelegt wurde, dass sie ausgeblendet werden. Bei einer Repository-übergreifenden Suche enthält das Dropdown-Menü möglicherweise keinen Operator, wenn die einander zugeordneten Eigenschaften keinen gemeinsamen Operator aufweisen.",

		/*SearchBuilder */
		open_search_builder: "Neue Suche",
		document_type: "Klasse",
		show_all_properties: "Alle Eigenschaften anzeigen",
		text_search_label: "Elemente mit den folgenden Begriffen finden:",
		text_search_place_holder: "Eine Kombination aus Begriffen und Operatoren verwenden: * ? oder \"exakt übereinstimmende Ausdrücke\"",
		text_search_place_holder_box: "Eine Kombination aus Begriffen und Operatoren verwenden: AND, OR, NOT und \"exakt übereinstimmende Ausdrücke\"",
		text_search_place_holder_cascade_proximity: "Eine Kombination aus Begriffen und Operatoren verwenden: * oder ?",
		text_search_place_holder_common: "Eine Kombination aus Begriffen und \"exakt übereinstimmende Ausdrücke\" verwenden",
		text_search_hover_help_p8: "Verwenden Sie den Stern (*) oder das Fragezeichen (?) als Platzhalterzeichen. Verwenden Sie Anführungszeichen (\"\") für exakte Übereinstimmungen.",
		text_search_hover_help_p8_only_crs: "Verwenden Sie den Stern (*) oder das Fragezeichen (?) als Platzhalterzeichen. Verwenden Sie Anführungszeichen (\"\") für exakte Übereinstimmungen. Wenn Sie mehrere Begriffe angeben, gibt eine Repository-übergreifende Suche Elemente zurück, die einen dieser Begriffe enthalten.",
		text_search_hover_help_cm: "Verwenden Sie den Stern (*) oder das Fragezeichen (?) als Platzhalterzeichen. Verwenden Sie Anführungszeichen (\"\") für exakte Übereinstimmungen. Verwenden Sie das Minuszeichen (-) vor auszuschließenden Begriffen und das Pluszeichen (+) vor einzuschließenden Begriffen.",
		text_search_hover_help_box: "Verwenden Sie AND zwischen Begriffen für Übereinstimmungen aller Begriffe. Verwenden Sie OR zwischen Begriffen für Übereinstimmungen eines der Begriffe. Verwenden Sie Anführungszeichen (\"\") für exakte Übereinstimmungen. Geben Sie vor einem auszuschließenden Begriff NOT an.",
		text_search_hover_help_common: "Verwenden Sie Anführungszeichen (\"\") für exakte Übereinstimmungen. Wenn Sie mehrere Begriffe angeben, gibt eine Repository-übergreifende Suche Elemente zurück, die alle diese Begriffe enthalten.",
		text_search_options: "Textoptionen:",
		text_search_options_hover_help: "Wenn Sie anstelle der Platzhalterzeichen andere Operatoren verwenden, wählen Sie 'Erweiterte Operatoren' aus.",
		text_search_option_any: "Einer dieser Begriffe",
		text_search_option_all: "Alle Begriffe",
		text_search_option_proximity: "In der Nähe der Wörter:",
		text_search_option_none: "Erweiterte Operatoren",
		text_search_option_authoring: "Textsuche ist:",
		text_search_option_authoring_hover_help: "Wählen Sie eine Option, die festlegt, wie die Textsuchkriterien für Benutzer verfügbar gemacht werden sollen. Wenn Sie keine Textsuchkriterien in die Suche einschließen wollen, blenden Sie diese Option aus. Andernfalls können Sie zulassen, dass die Textsuchkriterien bearbeitet werden, für Benutzer erforderlich sind oder von Benutzern nur gelesen werden können.",
		text_search_option_hide: "Kriterien ausblenden",
		text_search_option_hide_hover_help: "Wählen Sie diese Option aus, wenn Sie weder Textsuchkriterien in die Suche einschließen noch anderen Benutzern die Angabe von Textsuchkriterien erlauben wollen.",
		text_search_option_in: "Im HTML-/XML-Tag ${0}",
		text_search_option_paragraph: "In demselben Absatz",
		text_search_option_sentence: "In demselben Satz",
		text_search_option_vql: "VQL-Abfrage",
		text_search_option_none_hover_help: "Geben Sie '-' vor auszuschließenden Begriffen an.",
		text_search_option_cascade_proximity_hover_help: "Beschränkt die Suchergebnisse auf Begriffe, die in einem Bereich von Wörtern auftreten, die keine genauen Ausdrücke enthalten.",

		box_search_metadata: "Metadaten:",
		box_search_select_template: "Vorlage auswählen",
		box_search_no_templates: "Keine Vorlagen verfügbar",
		box_text_search_options_search_within: "Suchbereich:",
		box_text_search_options_search_within_everything: "Alles",
		box_text_search_options_search_within_file_content: "Dokumentinhalt",
		box_text_search_options_search_within_tags: "Tags",
		box_text_search_options_limit_to: "Suche einschränken auf:",

		add_property: "Eigenschaft hinzufügen",
		edit_template: "Suche bearbeiten",
		save_search: "Suche speichern",
		search_template_name: "Name:",
		search_template_desc: "Beschreibung:",
		auto_run: "Nach dem Öffnen die Suche ausführen",
		show_in_tree: "Suche in der Ordnerstruktur anzeigen",
		show_in_tree_hover_help: "Wird eine Suche in einem Ordner gespeichert, wird sie standardmäßig nur in der Inhaltsliste angezeigt. Wenn Sie diese Option auswählen, wird die Suche auch in der Ordnerbaumstruktur in der Ansicht 'Durchsuchen' angezeigt.  Die Suche wird jedoch nur in der Ordnerbaumstruktur angezeigt, wenn Sie sie in einem Ordner speichern.",
		share_search_with: "Suche freigeben für:",
		remove_member: "${0} entfernen",
		ok_button_label: "OK",
		save_template: "Speichern",
		save_template_title: "Speichern Sie Ihre Suchkriterien, wenn Sie häufig bestimmte Elemente suchen müssen.",
		remove_criterion: "Entfernen",
		apply_button_label: "Anwenden",
		empty_search_results_pane: "Führen Sie eine Suche aus, damit Ergebnisse angezeigt werden.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Gesamtes Repository",

		repository_already_selected: "Das Repository ${0} kann der Repository-übergreifenden Suche nicht hinzugefügt werden, weil es bereits in die Suche eingeschlossen ist. <br/> Ein Repository kann nur ein einziges Mal in die Repository-übergreifende Suche eingeschlossen werden. <br/>Wählen Sie ein anderes Repository aus, das in die Repository-übergreifende Suche eingeschlossen werden soll.",

		repository_limit_reached: "Das Repository ${0} kann der Repository-übergreifenden Suche nicht hinzugefügt werden. Sie können der Suche maximal ${1} Repositorys hinzufügen.",

		nomore_criteria_toappend: "Alle zugeordneten Eigenschaften sind bereits in den Suchkriterien enthalten. Den Suchkriterien wurden keine Eigenschaften hinzugefügt.",
		nomore_criteria_toappend_regular: "Alle Eigenschaften sind bereits in den Suchkriterien enthalten. Den Suchkriterien wurden keine Eigenschaften hinzugefügt.",

		/* OD Save Search dialog */
		reload_label: "Neu laden",
		od_save_search_help_text: "Geben Sie einen Namen für die Suche ein oder wählen Sie eine vorhandene Suche zur Ersetzung aus.",
		public_access_label: "Anderen Benutzern die Verwendung dieser Suche ermöglichen",
		od_delete_search_help_text: "Mindestens eine Suche auswählen, die gelöscht werden soll",
		delete_save_searches: "Gespeicherte Suchen löschen",

		/* Unified Search */
		unified_search_enable_text_search: "Textsuchkriterien einschließen",
		unified_search_text_search_enabled: "Textsuche eingeschlossen",
		unified_search_mapping: "Zuordnung",
		unified_search_new_mapping: "Neue Zuordnung",
		unified_search_mapping_name: "Zuordnungsname",
		unified_search_mapping_dialog_instructions: "Wählen Sie die Eigenschaften aus, die zugeordnet werden sollen. Manche Eigenschaften können Eigenschaften mit einem anderen Datentyp zugeordnet werden. Sie können z. B. eine Zeichenfolgeeigenschaft einer Ganzzahleigenschaft zuordnen. Wenn Sie eine Eigenschaft einer anderen Eigenschaft zuordnen, werden die Eigenschaften in der Repository-übergreifenden Suche als einzelne Eigenschaft behandelt.",
		unified_search_filter_available_properties: "Verfügbare Eigenschaften filtern",
		unified_search_available_properties: "Verfügbare Eigenschaften",
		unified_search_mapped_properties: "Zugeordnete Eigenschaften",
		unified_search_single_values: "einzelne Werte",
		unified_search_multiple_values: "mehrere Werte",
		unified_search_add_mapping: "Zuordnung hinzufügen",
		unified_search_warn_remove_repository: "Das ausgewählte Repository wird in den Suchkriterien verwendet.\nWenn Sie das Repository entfernen, werden alle Zuordnungen und Suchkriterien, die das Repository einschließen, gelöscht.\n\nSoll das Repository entfernt werden?",
		unified_search_warn_update_repository_mappings: "Das Ändern der Eigenschaftenauswahl für dieses Repository wirkt sich auf die Suchkriterien aus.\n\nDie Suchkriterien schließen mindestens eine Zuordnung ein, die mindestens eine Eigenschaft enthält, die Sie entfernen wollen. Alle Zuordnungen mit Eigenschaften, die Sie entfernen wollen, müssen gelöscht werden. Alle Suchkriterien mit diesen Zuordnungen müssen gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Repository-Optionen aktualisieren und die Zuordnungen und Suchkriterien löschen?",
		unified_search_warn_update_repository_mappings_reset: "Das Einschließen der Textsuchkriterien für dieses Rrepository wirkt sich auf die Repository-übergreifende Suche aus.\n\nAlle Suchkriterien für Eigenschaften mit diesen Zuordnungen müssen gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Repository-Optionen aktualisieren und die Suchkriterien löschen?",
		unified_search_warn_update_repository_text_criteria: "Das Entfernen der Textsuchkriterien für dieses Rrepository wirkt sich auf die Repository-übergreifende Suche aus.\n\nDie Textsuchkriterien müssen aus den Kriterien für die Repository-übergreifende Suche gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Repository-Optionen aktualisieren und die Textsuchkriterien löschen?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Das Entfernen der Textsuchkriterien und Ändern der Eigenschaftenauswahl für dieses Rrepository wirkt sich auf die Suchkriterien für die Repository-übergreifende Suche aus.\n\nDie Textsuchkriterien müssen aus den Kriterien für die Repository-übergreifende Suche gelöscht werden, damit die Suche ausgeführt werden kann. Außerdem schließen die Suchkriterien für Eigenschaften mindestens eine Zuordnung ein, die mindestens eine Eigenschaft enthält, die Sie entfernen wollen. Alle Zuordnungen mit Eigenschaften, die Sie entfernen wollen, müssen gelöscht werden. Alle Suchkriterien für Eigenschaften mit diesen Zuordnungen müssen gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Repository-Optionen aktualisieren und die Textsuchkriterien, die Zuordnungen und die Suchkriterien für Eigenschaften löschen?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Das Ausschließen der Textsuchkriterien für dieses Rrepository wirkt sich auf die Repository-übergreifende Suche aus.\n\nAlle Suchkriterien für Eigenschaften mit diesen Zuordnungen müssen gelöscht werden, damit die Suche ausgeführt werden kann. Die Textsuchkriterien werden möglicherweise aus den Kriterien für die Repository-übergreifende Suche gelöscht, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Repository-Optionen aktualisieren und die Suchkriterien löschen?",
		unified_search_warn_remove_mapping: "Das Entfernen dieser Zuordnung wirkt sich auf die Suchkriterien aus.\n\nDie Suchkriterien, die die Zuordnung verwenden, müssen gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Zuordnung aktualisieren und die Suchkriterien löschen?",
		unified_search_warn_update_mapping: "Änderungen an dieser Zuordnung wirken sich auf die Suchkriterien aus.\n\nDie Suchkriterien, die die Zuordnung verwenden, müssen gelöscht werden, um sicherzustellen, dass in der Suche keine ungültigen Operatoren oder ungültigen Werte eingeschlossen sind.\n\nWollen Sie die Zuordnung aktualisieren und die Suchkriterien löschen?",
		unified_search_warn_update_mapping_not_searchable: "Änderungen an dieser Zuordnung wirken sich auf die Suchkriterien aus.\n\nWenn für alle zugeordneten Eigenschaften 'nur zur Anzeige' gilt, können Sie die Zuordnung in den Suchkriterien nicht verwenden. Die Suchkriterien, die die Zuordnung verwenden, müssen gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Zuordnung aktualisieren und die Suchkriterien löschen?",
		unified_search_warn_update_mapping_box_searchable: "Änderungen an dieser Zuordnung wirken sich auf die Suchkriterien aus.\n\nIn den Suchkriterien ist diese Zuordnung bereits mehrmals eingeschlossen und wenn Sie die ${0}-Eigenschaft aus dem ${1}-Repository hinzufügen, ist die ${0}-Eigenschaft in den Suchkriterien zu oft enthalten. Die Suchkriterien, die die Zuordnung verwenden, müssen gelöscht werden, damit die Suche ausgeführt werden kann.\n\nWollen Sie die Zuordnung aktualisieren und die Suchkriterien löschen?",
		unified_search_details: "Suchkriterien für Repository-übergreifende Suche",
		unified_search_fixed_value_property: "Eigenschaft mit festem Wert",
		unified_search_required_property: "Erforderliche Eigenschaft",
		unified_search_display_only_property: "Nur-Anzeige-Eigenschaft",
		unified_search_missing_required_properities: "Die Suche kann nicht gespeichert oder ausgeführt werden.<br/>Die folgenden Eigenschaften sind erforderliche Eigenschaften: ${0}. Sie müssen die Eigenschaften in eine Zuordnung einschließen und die Eigenschaften mit Werten den Suchkriterien hinzufügen.",
		unified_search_property_repostory: "${0} (Repository: ${1})",
		unified_search_builder_no_mappings: "Die Suche kann nicht ausgeführt werden.<br/>Sie müssen eine Eigenschaftszuordnung erstellen und sie in die <b>Ergebnisanzeige</b> einschließen, sodass die Suche Ihre Ergebnisse anzeigen kann.",
		unified_search_builder_insufficient_criteria_to_run: "Die Suche kann nicht ausgeführt werden.<br/>Die Suchkriterien enthalten keine Textsuchkriterien oder Eigenschaftswerte für die folgenden Repositorys:${0}Sie müssen für jedes in der Suche eingeschlossene Repository Textsuchkriterien eingeben oder eine Eigenschaftszuordnung erstellen, diese in die Eigenschaftskriterien aufnehmen und einen Eigenschaftswert angeben.",
		unified_search_builder_insufficient_criteria_to_save: "Die Suche kann nicht gespeichert werden.<br/>Die Suche enthält keine Suchkriterien für die folgenden Repositorys:${0}Sie müssen für jedes in der Suche eingeschlossene Repository eine der folgenden Optionen ausführen:<ol><li>Eine Eigenschaftszuordnung erstellen und in die Eigenschaftskriterien aufnehmen.</li><li>Ändern Sie das Repository so, dass Textsuchkriterien eingeschlossen sind, erstellen Sie eine Eigenschaftszuordnung und nehmen Sie diese in die <b>Ergebnisanzeige</b> auf.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Die Suche kann nicht ausgeführt werden.<br/>Sie müssen für jedes in der Suche eingeschlossenes Repository mindestens einen Eigenschaftswert angeben. Sie können zum Beispiel Werte für die folgenden Eigenschaften angeben: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Die Suche kann nicht ausgeführt werden.<br/>Textsuchkriterien sind erforderlich.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Die Suche kann nicht ausgeführt werden.<br/>Sie müssen für jedes in der Suche eingeschlossenes Repository mindestens einen Eigenschaftswert angeben oder Textsuchkriterien eingeben. Sie können zum Beispiel Werte für die folgenden Eigenschaften angeben: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Die Suche kann nicht ausgeführt werden.<br/>Textsuchkriterien sind erforderlich. Sie müssen für jedes in der Suche eingeschlossenes Repository mindestens einen Eigenschaftswert angeben oder Textsuchkriterien eingeben. Sie können zum Beispiel Werte für die folgenden Eigenschaften angeben: ${0}",
		unified_search_invalid_criteria: "Die Suche enthält ungültige Kriterien, die die Ausführung der Suche verhindern.<br/>Die ungültigen Kriterien wurden entfernt. Sie müssen die Änderungen an der Suche jedoch speichern, bevor Sie die Suche ausführen können. Wenn Sie die Änderungen nicht speichern wollen, schließen Sie die Suche.<br/><br/>Die folgenden Elemente wurden entfernt oder geändert: ${0}",
		unified_search_invalid_fixed_values: "Die Suche kann nicht gespeichert oder ausgeführt werden.<br/>Die folgenden Suchkriterien haben feste Werte, die nicht gültig sind:${0}Ergreifen Sie zur Lösung des Problems eine der folgenden Maßnahmen:<ul><li>Entfernen Sie die Suchkriterien mit den ungültigen Werten.</li><li>Bearbeiten Sie die Zuordnungen, die die IBM Content Manager OnDemand-Eigenschaft mit dem festen Wert enthalten, um die Eigenschaft zu entfernen.</li><li>Bearbeiten Sie die Zuordnungen, die die IBM Content Manager OnDemand-Eigenschaft mit dem festen Wert enthalten, um alle Eigenschaften kompatibel zu machen. Weitere Informationen dazu, welche Eigenschaften zugeordnet werden können, bietet der Link 'Weitere Informationen' im Einführungstext oben im Eigenschaftszuordnungsfenster.</li></ul>",
		unified_search_cannot_add_properties: "Sie können dieser Suche keine Eigenschaften hinzufügen.<br/>Alle Ihre verfügbaren zugeordneten Eigenschaften sind in den Suchkriterien bereits enthalten, und jede Eigenschaft kann der Suche nur einmal hinzugefügt werden.",
		unified_search_mapping_not_viewable: "Box-Vorlageneigenschaften können in den Suchergebnissen nicht angezeigt werden. Falls Sie diese Zuordnung als eine Spalte hinzufügen wollen, müssen Sie mindestens eine Eigenschaft zuordnen, die keine Box-Vorlageneigenschaft ist. Sie können zum Beispiel eine Eigenschaft aus einem anderen Repository auswählen.",

		unified_search_returned_more: "Mindestens für ein Repository wird die Anzahl der maximal zulässigen Ergebnisse überschritten.",
		unified_search_partial_failure: "In mindestens einem Repository ist ein Fehler aufgetreten.",
		unified_search_partial_failure_and_returned_more: "Bei mindestens einem Repository ist ein Fehler aufgetreten und für mindestens ein Repository wird die Anzahl der maximal zulässigen Ergebnisse überschritten.",
		unified_search_see_analysis: "Lesen Sie die Ergebnisanalyse.",
		unified_search_analysis_intro_returned_more: "Versuchen Sie die Suchkriterien für jedes Repository einzugrenzen, bei dem die Anzahl der maximal zulässigen Ergebnisse überschritten wurde, damit weniger Ergebnisse zurückgegeben werden. Alternativ können Sie die Suche nur für ein einzelnes Repository ausführen, damit mehr Ergebnisse zurückgegeben werden können, als für eine Repository-übergreifende Suche zulässig sind.",
		unified_search_analysis_intro_partial_failure: "Prüfen Sie die Fehlerinformationen, die von dem bzw. den Repository(s) zurückgegeben wurden. Beheben Sie ggf. die Fehler und führen Sie die Repository-übergreifende Suche erneut aus.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Versuchen Sie das Problem für jedes Repository zu beheben, bei dem ein Fehler aufgetreten ist, und führen Sie die Suche erneut aus.<br/><br/>Versuchen Sie die Suchkriterien für jedes Repository einzugrenzen, bei dem die Anzahl der maximal zulässigen Ergebnisse überschritten wurde, damit weniger Ergebnisse zurückgegeben werden. Alternativ können Sie die Suche nur für ein einzelnes Repository ausführen, damit mehr Ergebnisse zurückgegeben werden können, als für eine Repository-übergreifende Suche zulässig sind.",
		unified_search_results_found: "Gefundene Ergebnisse",
		unified_search_maximum_allowed: "Maximal zulässig",
		unified_search_maximum_exceeded: "Maximum überschritten",

		unified_search_mapping_rule_box: "Diese Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<p>Die ${0}-Eigenschaft aus dem ${1}-Repository liegt bereits in einer anderen Zuordnung vor und durchsuchbare Eigenschaften aus diesem Repository können nur in eine Zuordnung pro Suche eingeschlossen werden.<br/>Wählen Sie eine andere Eigenschaft aus, um Sie der Zuordnung hinzuzufügen.</p>",
		unified_search_mapping_rule_repository: "Die Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<br/>Die Zuordnung schließt bereits eine Eigenschaft aus dem Repository ${0} ein. Eine Zuordnung kann nur eine einzige Eigenschaft aus einem Repository einschließen.<br/>Wählen Sie ein anderes Repository aus, aus dem eine Eigenschaft hinzugefügt werden soll, oder erstellen Sie für die ausgewählte Eigenschaft eine neue Zuordnung.",
		unified_search_mapping_rule_data_type: "Die Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<br/>Eine Eigenschaft ${0} kann keiner Eigenschaft ${1} zugeordnet werden. Wählen Sie eine andere Eigenschaft zur Zuordnung aus oder erstellen Sie für die ausgewählte Eigenschaft eine neue Zuordnung.<br/>Weitere Informationen dazu, welche Eigenschaften zugeordnet werden können, bietet der Link 'Weitere Informationen' im Einführungstext oben in diesem Fenster.",
		unified_search_mapping_rule_cardinality: "Die Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<br/>Alle Eigenschaften in der Zuordnung müssen entweder einzelne Werte oder mehrere Werte unterstützen. Die ausgewählte Eigenschaft unterstützt ${0} und die Eigenschaften in der Zuordnung unterstützen ${1}.<br/>Wählen Sie eine andere Eigenschaft zum Hinzufügen zur Zuordnung aus oder erstellen Sie für die ausgewählte Eigenschaft eine neue Zuordnung.",
		unified_search_mapping_rule_fixed_value: "Die Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<br/>Die Zuordnung schließt bereits eine Eigenschaft mit einem festen Wert ein. Eine Zuordnung kann nur eine einzige Eigenschaft mit einem festen Wert einschließen.<br/>Wählen Sie eine andere Eigenschaft zum Hinzufügen zur Zuordnung aus oder erstellen Sie für die ausgewählte Eigenschaft eine neue Zuordnung.",
		unified_search_mapping_rule_child_component: "Die Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<br/>Eine Eigenschaft mit einer untergeordneten Komponente kann nicht anderen Eigenschaften zugeordnet werden. Wenn Sie die Suche für diese Eigenschaft ermöglichen wollen, müssen Sie eine neue Zuordnung für die ausgewählte Eigenschaft erstellen.",
		unified_search_mapping_rule_operator_intersection: "Die Eigenschaft kann der Zuordnung nicht hinzugefügt werden.<br/>Alle Eigenschaften in der Zuordnung müssen mindestens einen gemeinsamen Operator aufweisen. Die Eigenschaft ${0} weist jedoch keinen gemeinsamen Operator mit den anderen Eigenschaften in der Zuordnung auf.<br/>Wählen Sie, falls zutreffend, eine andere Eigenschaft aus. Wenn Sie die ausgewählte Eigenschaft einschließen müssen, bitten Sie den Systemadministrator, die zur Eigenschaft gehörigen Operatoren zu bearbeiten.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Erweiterte Einstellungen",
		advanced_search_options_intro: "Optionen für erweitertes Kriterium festlegen.",
		advanced_search_options_editable: "Bearbeitbar",
		advanced_search_options_readonly: "Schreibgeschützt",
		advanced_search_options_required: "Erforderlich",
		advanced_search_options_hidden: "Ausgeblendet",
		advanced_search_options_property_editable:"Eigenschaft ist:",
		advanced_search_options_operators:"Operatoren:",
		advanced_search_options_use_all:"Alle verwenden",
		advanced_search_options_use_selected:"Ausgewählte verwenden",
		advanced_search_options_operators_filtered: "Gefilterte Operatoren",
		// Data types in lowercase
		data_type_boolean: "boolesch",
		data_type_date: "Datum",
		data_type_time: "Uhrzeit",
		data_type_timestamp: "Zeitmarke",
		data_type_decimal: "Dezimalwert",
		data_type_double: "Gleitkommazahl",
		data_type_short: "Ganzzahl",
		data_type_integer: "Ganzzahl",
		data_type_long: "Ganzzahl",
		data_type_string: "Textzeichenfolge",
		data_type_string_alpha: "alphabetische Zeichenfolge",
		data_type_string_alphanum: "alphanumerische Zeichenfolge",
		data_type_string_ext: "erweiterte alphanumerische Zeichenfolge",
		data_type_string_num: "numerische Zeichenfolge",
		data_type_binary: "binär",
		data_type_object: "Objekt",
		data_type_guid: "global eindeutige ID",
		data_type_user: "Benutzer",
		data_type_child_component: "untergeordnete Komponente",

		/* Print Dialog */
		print_title: "Drucken",
		print_message: "Gedruckt wird: ${0}",
		print_print_button: "Drucken",
		print_clean_margins_button: "Alle auf 0 setzen",
		print_type: "Druckertyp:",
		print_printer_server_options: "Serverdruckoptionen",
		print_printer_properties: "Druckereigenschaften",
		print_printer_fax_properties: "Faxeigenschaften",
		print_printer_name: "Druckername:",
		print_fax_recipient: "Empfänger",
		print_fax_sender: "Absender",
		print_copies: "Kopien:",
		print_local_orientation: "Ausrichtung",
		print_local_orientation_landscape: "Querformat",
		print_local_orientation_portrait: "Hochformat",
		print_local_margins: "Randeinstellungen",
		print_local_margins_top: "Oben",
		print_local_margins_bottom: "Unten",
		print_local_margins_left: "Links",
		print_local_margins_right: "Rechts",
		print_printer_server: "Server",
		print_printer_local: "Lokal",
		print_property_class: "Klasse:",
		print_property_routing: "Routing:",
		print_property_pagedef: "Seitendefinition:",
		print_property_node: "Knoten:",
		print_property_writer: "Autor:",
		print_property_formdef: "Formulardefinition:",
		print_property_printerid: "Ziel:",
		print_property_forms: "Formulare:",
		print_property_faxnotes: "Notizen:",
		print_property_faxcompany: "Firma:",
		print_property_faxnumber: "Faxnummer:",
		print_property_faxname: "Name:",
		print_property_faxsendertelnumber: "Telefonnummer:",
		print_property_faxcoverpage: "Deckblatt:",
		print_property_faxsubject: "Betreff:",
		print_saveoptions: "Druckoptionen speichern",
		print_property_bannerpage: "Bannerseite verwenden",
		print_print_with_info_fields: "Mit Informationsfeldern drucken",
		print_field_from: "Von",
		print_field_to: "An",
		print_invalid_value_class: "Gültige Zeichen sind A-Z oder 0-9",
		print_invalid_value_pagedef: "Alphabetische oder numerische Zeichen oder die Zeichen @, # oder $ sind gültig.",
		print_invalid_value_writer: "Alphabetische oder numerische Zeichen oder die Zeichen @, # oder $ sind gültig.",
		print_invalid_value_formdef: "Alphabetische oder numerische Zeichen oder die Zeichen @, # oder $ sind gültig.",
		print_invalid_value_forms: "Alphabetische oder numerische Zeichen oder die Zeichen @, # oder $ sind gültig.",
		print_invalid_value_margin: "Gültige Zahlen liegen zwischen ${0} und ${1}",
		print_status_message: "${0} Dokumente wurden an den Drucker ${1} gesendet.",

		print_applet_init_error: "Das Druck-Applet kann nicht gestartet werden.",
		print_applet_init_error_explanation: "Dieses Problem kann die folgenden Ursachen haben: <br/><br/><ul><li>Die JRE (Java Runtime Environment) ist auf Ihrer Workstation nicht installiert.</li><li>Das Java-Plug-in ist im Web-Browser nicht aktiviert.</li><li>Die JRE-Version auf Ihrer Workstation ist nicht mit der IBM Content Navigator-Version kompatibel.</li><li>Das zulässige Zeitlimit wurde überschritten während der Browser auf das Starten des Druck-Applets gewartet hat.</li></ul>",
		print_applet_init_error_userResponse: "Sie können die folgenden Schritte zum Beheben des Problems mit der JRE ausführen:<br/><br/><ol><li>Stellen Sie sicher, dass die JRE auf Ihrer Workstation installiert ist.</li><li>Stellen Sie sicher, dass das Java-Plug-in im Web-Browser aktiviert ist.</li><li>Stellen Sie sicher, dass die JRE-Version auf Ihrer Workstation mit IBM Content Navigator kompatibel ist, und versuchen Sie es erneut. Eine Liste der unterstützten Versionen finden Sie im Dokument zu den Hardware- und Softwarevoraussetzungen für IBM Content Navigator auf der Site des IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Deckblatt",
		daeja_print_selected_documents_title: "Ausgewählte Dokumente",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Übereinstimmung mit allen Suchkriterien",
		match_any_criteria: "Übereinstimmung mit beliebigen Suchkriterien",
		include_subfolders_summary: "${0} (Unterordner einbeziehen)",
		browse_button: "Durchsuchen&hellip;",
		search_for: "Suchen nach:",
		object_type_documents: "Dokumente",
		object_type_folders: "Ordner",
		object_type_documents_folders: "Dokumente und Ordner",
		object_type_web_links: "Web-Links",
		object_type_documents_folders_web_links: "Dokumente, Ordner und Web-Links",

		/* SelectSearchFolderDialog */
		search_in: "Suchen in:",
		include_subfolders: "Unterordner einbeziehen",

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
		locked_item_icon_title: "Gesperrt von ${0}",
		checked_out_icon_title: "Ausgecheckt von ${0}",
		major_minor_version_icon_title: "Hauptversion mit Nebenversionen",
		suspended_icon_title: "Der Workflow ist ausgesetzt",
		on_hold_icon_title: "Inaktiv",
		has_notes_icon_title: "Verfügt über Notizen",
		record_icon_title: "Als Schriftstück deklariert",
		compound_document_icon_title: "Mischdokument",
		validateTemplate_icon_title: "Vorlage für Teamarbeitsbereich muss validiert werden",
		offlineTemplate_icon_title: "Vorlage für Teamarbeitsbereich ist offline",
		offlineTeamspace_icon_title: "Teamarbeitsbereich ist offline",
		pending_delete_icon_title: "Löschvorgang des Teamarbeitsbereichs anstehend",
		delete_error_icon_title: "Der Teamarbeitsbereich konnte nicht gelöscht werden",
		defaultTemplate_icon_title: "Standardvorlage für Teamarbeitsbereiche",
		teamspace_icon_title: "Teamarbeitsbereich",
		teamspace_template_icon_title: "Vorlage für Teamarbeitsbereich",
		has_bookmark_icon_title: "Verfügt über ein Lesezeichen",
		read_only_icon_title: "Schreibgeschützt",
		no_results_were_found: "Es wurden keine Ergebnisse gefunden.",
		folder_is_empty: "Der Ordner ist leer.",
		no_checked_out_items: "Sie haben keine Elemente ausgecheckt.",
		inbasket_is_empty: "Der Posteingang ist leer.",
		worklist_is_empty: "Die Vorgangsliste ist leer.",
		tracker_milestone_completed: "Abgeschlossen",
		stepprocessor_attachments_title: "Inhalt",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Elemente sperren",
		unlock_items: "Elemente entsperren",
		checkin_item: "Element einchecken",

		/* Help */
		learn_more: "Weitere Informationen",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Teamarbeitsbereich öffnen",
		repository_tab_createWorkspace: "Neuer Teamarbeitsbereich",
		repository_tab_createWorkspaceTemplate: "Neue Vorlage für Teamarbeitsbereich",
		repository_tab_DefaultTemplate: "Standard",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Diese Task kopiert Dokumente.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Sie haben keine Bearbeitungsberechtigungen für die ausgewählte Vorlage für Teamarbeitsbereiche.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Wollen Sie den Teamarbeitsbereich ${0} wirklich löschen? <br><br>Nur die in anderen Ordnern im Repository abgelegten Dokumente verbleiben im Repository. Alle Dokumente, die nur im Teamarbeitsbereich abgelegt wurden, werden gelöscht.",
		teamspaceDecommissionLabel: "Löschen:",
		teamspaceDecommissionDescription: "Durch Löschen wird der Teamarbeitsbereich vom Server entfernt: Geben Sie an, wie Artefakte des Teamarbeitsbereichs behandelt werden sollen.",
		teamspaceDecommissionOptions: "Löschoptionen für Teamarbeitsbereiche",
		teamspaceDecommissionDeleteAll: "Alle Artefakte von Teamarbeitsbereichen löschen",
		teamspaceDecommissionReFileAll: "Alle Artefakte von Teamarbeitsbereichen neu ablegen",
		teamspaceDecommissionReFileDestination: "Verschieben in:",
		teamspaceDecommissionReFileIn: "Neu ablegen in",
		teamspaceDecommissionTaskName: "Löschtask für Teamarbeitsbereiche",
		teamspaceDecommissionTaskDescription: "Diese Task löscht einen Teamarbeitsbereich aus dem Repository.",
		teamspaceDecommissionDeletionStarted: "Der Teamarbeitsbereich wurde zur Löschung eingeplant.",
		teamspaceDecommissionDeletionConnectionFailed: "Die Task zum Löschen eines Teamarbeitsbereichs konnte nicht ausgeführt werden, weil keine Verbindung zum Repository möglich war. Stellen Sie sicher, dass die Berechtigungsnachweise des Repository-Administrators korrekt sind.",

		teamspace_edit_properties_notsupported: "Sie können die Eigenschaften von Teamarbeitsbereichen nur in der Ansicht 'Teamarbeitsbereiche' bearbeiten.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Der Teamarbeitsbereich ist offline und kann nur von Eignern geöffnet werden.",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Ordner:",
		workspace_validation_ets: "Die folgenden Erfassungsvorlagen sind in diesem Repository nicht verfügbar und wurden aus der Liste der ausgewählten Erfassungsvorlagen entfernt:",
		workspace_validation_classes: "Die folgenden Klassen sind in diesem Repository nicht verfügbar und wurden aus der Liste der ausgewählten Klassen entfernt:",
		workspace_validation_searches: "Die folgenden Suchen sind in diesem Repository nicht verfügbar und wurden aus der Liste der ausgewählten Suchen entfernt:",
		workspace_validation_docs_folders: "Die folgenden Dokumente und Ordner sind in diesem Repository nicht verfügbar und wurden aus der Liste der eingeschlossenen Elemente entfernt:",
		workspace_change_template_confirmation_question: "Wenn Sie eine andere Vorlage auswählen, gehen alle Änderungen verloren. Wollen Sie fortfahren?\n",
		workspace_delete_item_confirmation_question: "Soll das Element ${0} entfernt werden?\n",
		workspace_delete_role_confirmation_question: "Soll die Rolle ${0} entfernt werden?\n",
		workspace_delete_confirmation_question: "Wenn Sie einen Teamarbeitsbereich löschen, wird nur der Teamarbeitsbereichscontainer gelöscht. Die Ordner und Dokumente im Teamarbeitsbereich verbleiben im Repository und Sie können nach ihnen suchen. Wenn der Inhalt des Teamarbeitsbereichs gelöscht werden soll, müssen Sie zuerst die Elemente im Teamarbeitsbereich und anschließend den Teamarbeitsbereich löschen.<br><br>Soll der Teamarbeitsbereich ${0} gelöscht werden?",
		workspacebuilder_instance_template_name_header: "Name der Vorlage für den Teamarbeitsbereich",
		workspacebuilder_instance_template_description_header: "Beschreibung",

		workspacebuilder_template_tooltip_name: "Der Vorlagenname darf keines der folgenden Zeichen enthalten: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Der Teamarbeitsbereichsname darf keines der folgenden Zeichen enthalten: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Stellen Sie eine Beschreibung bereit, die die Benutzer in die Lage versetzt, die richtige Vorlage aus der Liste auszuwählen. Beispielsweise könnten Sie Informationen zu den beabsichtigten Benutzern oder zum Zweck der Vorlage angeben.",
		workspacebuilder_instance_tooltip_description: "Stellen Sie eine Beschreibung bereit, die die Benutzer in die Lage versetzt, zwischen diesem Teamarbeitsbereich und den anderen Teamarbeitsbereichen zu unterscheiden.",

		workspacebuilder_template_edit_properties_pane: "Vorlage für Teamarbeitsbereich bearbeiten",
		workspacebuilder_instance_properties_pane: "Teamarbeitsbereich definieren",
		workspacebuilder_template_properties_pane: "Vorlage für Teamarbeitsbereich definieren",

		workspacebuilder_instance_security_pane: "Sicherheit für Teamarbeitsbereich festlegen",
		workspacebuilder_template_security_pane: "Sicherheit für Vorlage festlegen",

		workspacebuilder_layout_pane: "Layout auswählen",
		workspacebuilder_search_templates_pane: "Suchen auswählen",
		workspacebuilder_document_folders_pane: "Ordner und Dokumente einbeziehen",
		workspacebuilder_doctypes_entryTemplates_pane: "Klassen oder Erfassungsvorlagen auswählen",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Klassen auswählen",
		workspacebuilder_security: "Sicherheit für Teamarbeitsbereich",

		workspacebuilder_roles_pane: "Rollen auswählen",
		workspacebuilder_security: "Sicherheit",

		workspacebuilder_properties_templates: "Verfügbare Vorlagen",
		workspacebuilder_available_templates: "Verfügbare Suchen:",
		workspacebuilder_selected_templates: "Ausgewählte Suchen:",
		workspacebuilder_templates_name: "Name der Suche",

		workspacebuilder_available_entryTemplates: "Verfügbare Erfassungsvorlagen:",
		workspacebuilder_selected_entryTemplates: "Ausgewählte Erfassungsvorlagen:",

		workspacebuilder_item_classes: "Verfügbare Klassen:",
		workspacebuilder_item_classes_selected: "Ausgewählte Klassen:",
		workspacebuilder_properties_select_template: "Wählen Sie eine für diesen Teamarbeitsbereich zu verwendende Vorlage aus.",
		workspacebuilder_template_properties: "Vorlage für Teamarbeitsbereich definieren",
		workspacebuilder_instance_properties: "Teamarbeitsbereich definieren",
		workspacebuilder_template_introText: "Geben Sie die gemeinsamen Komponenten ein, die in jeden Teamarbeitsbereich aufgenommen werden sollen, der über die Auswahlmöglichkeiten in der Navigation aus dieser Vorlage erstellt wird. Wenn Sie fertig sind, klicken Sie auf <b>Fertigstellen</b>, um die Vorlage für andere Benutzer verfügbar zu machen, die mit ihr neue Teamarbeitsbereiche erstellen können.",
		workspacebuilder_instance_introText: "Teams verwenden Teamarbeitsbereiche, um mit bestimmten Dokumentgruppen zu arbeiten und diese zur gemeinsamen Nutzung freizugeben. Geben Sie dem Teamarbeitsbereich einen aussagekräftigen Namen und eine Beschreibung, damit die Benutzer diesen Teamarbeitsbereich von anderen unterscheiden kann. Sie können den Teamarbeitsbereich durch Einbeziehen zusätzlicher Suchen, Klassen oder Erfassungsvorlagen, Dokumente und Ordner anpassen.",

		workspacebuilder_template_search_template_introText: "Wählen Sie die Standardsuchen aus, die in jeden Teamarbeitsbereich aufgenommen werden sollen, der über diese Vorlage erstellt wird. Wenn keine Suchen ausgewählt werden, sehen die Teamarbeitsbereichsbenutzer alle Suchen, auf die sie Zugriff haben. Mit den entsprechenden Berechtigungen können Benutzer Suchen im Teamarbeitsbereich freigeben und hinzufügen.",
		workspacebuilder_instance_search_template_introText: "Beziehen Sie Suchen ein, mit denen Teamarbeitsbereichsbenutzer Tasks effizienter ausführen können. Wenn keine Suchen einbezogen werden, sehen die Teamarbeitsbereichsbenutzer alle Suchen, für die Sie die Berechtigung haben. Mit den entsprechenden Berechtigungen können Benutzer Suchen im Teamarbeitsbereich auch hinzufügen und freigeben.",

		workspacebuilder_template_roles_introText: "Teamarbeitsbereichsbenutzern werden Rollen zugeordnet. Rollen geben die Tasks an, die Benutzer ausführen können. Klicken Sie auf die Symbole neben jeder Rolle, um die zulässigen Tasks anzuzeigen. Wählen Sie die Rollen aus, die für den Teamarbeitsbereich geeignet sind.",
		workspacebuilder_template_roles_modify_introText: "Sie können die Berechtigungen ändern, die zu jeder Rolle in diesem Teamarbeitsbereich gehören. Sie sollten die Mitglieder des Teamarbeitsbereichs darüber informieren, wenn sich ihre Berechtigungen ändern.",

		workspacebuilder_template_roles_header_name: "Rollenname",

		workspacebuilder_template_folders_introText: "Wählen Sie die Standarddokumente und -ordner aus, die in jeden Teamarbeitsbereich aufgenommen werden sollen, der über diese Vorlage erstellt wird. Sie können Dokumente als Links oder Kopien hinzufügen. Mit Links verweisen Sie auf Dokumente, von denen Sie nicht mehrere Kopien wünschen, wie Richtlinien oder Verfahren. Kopien erstellen Sie von Dokumenten, die die Benutzer ändern, wie Vorlagen und Formulare.",
		workspacebuilder_instance_folders_introText: "Wählen Sie die in den Teamarbeitsbereich aufzunehmenden Standarddokumente und -ordner aus. Sie können Dokumente als Links oder Kopien hinzufügen. Mit Links verweisen Sie auf Dokumente, von denen Sie nicht mehrere Kopien wünschen, wie Richtlinien oder Verfahren. Kopien erstellen Sie von Dokumenten, die die Benutzer ändern, wie Vorlagen und Formulare.",

		workspacebuilder_template_roles_introText: "Geben Sie die Rollen an, die in jeden Teamarbeitsbereich aufgenommen werden sollen, der über diese Vorlage erstellt wird. Sie können auch neue Rollen erstellen, die Sie beim Erstellen anderer Vorlagen für Teamarbeitsbereiche verwenden können.",
		workspacebuilder_instance_users_introText: "In einem Teamarbeitsbereich wird jeder Benutzer mindestens einer Rolle zugewiesen, die die Tasks angibt, die der Benutzer ausführen kann. Fügen Sie dem Teamarbeitsbereich Benutzer hinzu und weisen Sie den Benutzern Rollen zu.",

		workspacebuilder_instance_navigation_pane_title: "Builder für Teamarbeitsbereiche",
		workspacebuilder_template_navigation_pane_title: "Builder für Vorlagen für den Teamarbeitsbereich",

		workspacebuilder_roles_roles_nopermissions: "Es sind keine Berechtigungen für die Rolle {0} ausgewählt.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Ausgewählte Rollen:",
		workspacebuilder_roles_available_roles: "Verfügbare Rollen:",
		workspacebuilder_roles_privilege_header: "Berechtigung",
		workspacebuilder_roles_select_role: "Rolle auswählen",
		workspacebuilder_roles_select_permission: "Berechtigung auswählen",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Es ist bereits eine Rolle mit dem Namen {0} vorhanden. Sie müssen einen eindeutigen Namen für die Rolle angeben. ",
		workspacebuilder_roles_edit_dialog_role_name: "Rollenname:",
		workspacebuilder_roles_edit_dialog_role_description: "Rollenbeschreibung:",
		workspacebuilder_roles_edit_dialog_title_new: "Neue Rolle",
		workspacebuilder_roles_edit_dialog_title_edit: "Rolle bearbeiten",

		workspacebuilder_roles_privileges_header: "Berechtigungen für die Rolle {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dokumentberechtigungen:",
		workspacebuilder_roles_priv_group_folder: "Ordnerberechtigungen:",
		workspacebuilder_roles_priv_group_teamspace: "Berechtigungen für Teamarbeitsbereich:",
		workspacebuilder_roles_priv_group_item: "Dokument- und Ordnerberechtigungen:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Verwaltungsberechtigungen",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Benutzer mit dieser Berechtigung können den Zugriff auf Dokumente und Ordner im Teamarbeitsbereich verwalten. Mit dieser Berechtigung kann anderen Benutzern z. B. auch erlaubt werden, Dokumente und Ordner zu löschen, Eigenschaften zu bearbeiten oder Unterordner zu erstellen.",

		workspacebuilder_roles_priv_deleteItems: "Löschen",
		workspacebuilder_roles_plbl_deleteItems: "Benutzer mit dieser Berechtigung können Dokumente und Ordner im Teamarbeitsbereich löschen.",

		workspacebuilder_roles_priv_createItems: "Erstellen",
		workspacebuilder_roles_plbl_createItems: "Benutzer mit dieser Berechtigung können Dokumente und Ordner im Teamarbeitsbereich erstellen.",

		workspacebuilder_roles_priv_viewItemProperties: "Eigenschaften anzeigen",
		workspacebuilder_roles_plbl_viewItemProperties: "Benutzer mit dieser Berechtigung können die Eigenschaften der Dokumente und Ordner im Teamarbeitsbereich einschließlich der Systemeigenschaften anzeigen.",

		workspacebuilder_roles_priv_modifyItemProperties: "Eigenschaften bearbeiten",
		workspacebuilder_roles_plbl_modifyItemProperties: "Benutzer mit dieser Berechtigung können die Eigenschaften von Dokumenten und Ordnern im Teamarbeitsbereich bearbeiten.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Ordnerberechtigungen verwalten",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Benutzer mit dieser Berechtigung können den Zugriff auf Ordner im Teamarbeitsbereich verwalten. Mit dieser Berechtigung kann anderen Benutzern z. B. auch erlaubt werden, Ordner zu löschen, Ordnereigenschaften zu bearbeiten und Unterordner zu erstellen.",

		workspacebuilder_roles_priv_deleteFolders: "Ordner löschen",
		workspacebuilder_roles_plbl_deleteFolders: "Benutzer mit dieser Berechtigung können Ordner im Teamarbeitsbereich löschen.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Ordnereigenschaften bearbeiten",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Benutzer mit dieser Berechtigung können die Eigenschaften von Ordnern im Teamarbeitsbereich bearbeiten.",

		workspacebuilder_roles_priv_createSubfolders: "Unterordner erstellen",
		workspacebuilder_roles_plbl_createSubfolders: "Benutzer mit dieser Berechtigung können Ordner im Teamarbeitsbereich erstellen.",

		workspacebuilder_roles_priv_fileInFolders: "Zu Ordnern hinzufügen",
		workspacebuilder_roles_plbl_fileInFolders: "Benutzer mit dieser Berechtigung können einen Link aus Ordnern auf Dokumente im Teamarbeitsbereich hinzufügen.",

		workspacebuilder_roles_priv_viewFolderProperties: "Ordnereigenschaften anzeigen",
		workspacebuilder_roles_plbl_viewFolderProperties: "Benutzer mit dieser Berechtigung können die Eigenschaften der Ordner im Teamarbeitsbereich einschließlich der Systemeigenschaften anzeigen.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Dokumentberechtigungen verwalten",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Benutzer mit dieser Berechtigung können den Zugriff auf Dokumente im Teamarbeitsbereich verwalten. Hierzu zählt auch, dass sie anderen Benutzern z. B. erlauben können, Dokumente zu löschen oder Dokumenteigenschaften zu bearbeiten.",

		workspacebuilder_roles_priv_deleteDocuments: "Dokumente löschen",
		workspacebuilder_roles_plbl_deleteDocuments: "Benutzer mit dieser Berechtigung können Dokumente im Teamarbeitsbereich löschen.",

		workspacebuilder_roles_priv_promoteVersions: "Versionen hochstufen",
		workspacebuilder_roles_plbl_promoteVersions: "Benutzer mit dieser Berechtigung können Dokumenten im Teamarbeitsbereich eine neue Versionsnummer zuweisen.",

		workspacebuilder_roles_priv_modifyContent: "Dokumente bearbeiten",
		workspacebuilder_roles_plbl_modifyContent: "Benutzer mit dieser Berechtigung können den Inhalt von Dokumenten im Teamarbeitsbereich bearbeiten.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Dokumenteigenschaften bearbeiten",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Benutzer mit dieser Berechtigung können die Eigenschaften von Dokumenten im Teamarbeitsbereich bearbeiten.",

		workspacebuilder_roles_priv_viewContent: "Dokumente anzeigen",
		workspacebuilder_roles_plbl_viewContent: "Benutzer mit dieser Berechtigung können Dokumente im Teamarbeitsbereich anzeigen.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Dokumenteigenschaften anzeigen",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Benutzer mit dieser Berechtigung können die Eigenschaften der Dokumente im Teamarbeitsbereich einschließlich der Systemeigenschaften anzeigen.",

		workspacebuilder_roles_priv_addNewSearches: "Suchen hinzufügen",
		workspacebuilder_roles_plbl_addNewSearches: "Benutzer mit dieser Berechtigung können dem Teamarbeitsbereich Suchen hinzufügen. Standardmäßig ist die Suche für andere Benutzer nicht verfügbar.",

		workspacebuilder_roles_priv_createNewSearches: "Suchen erstellen",
		workspacebuilder_roles_plbl_createNewSearches: "Benutzer mit dieser Berechtigung können neue Suchen erstellen, aber die Suchen nicht speichern. Wenn Benutzer nicht über diese Berechtigung verfügen, können sie dem Teamarbeitsbereich keine Dokumente hinzufügen, die sich bereits im Repository befinden.",

		workspacebuilder_roles_priv_shareSearches: "Suchen freigeben",
		workspacebuilder_roles_plbl_shareSearches: "Benutzer mit dieser Berechtigung können Suchen freigeben, die sie mit anderen Benutzern des Teamarbeitsbereichs erstellen.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Klassen oder Erfassungsvorlagen verwalten",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Benutzer mit dieser Berechtigung können Klassen oder Erfassungsvorlagen im Teamarbeitsbereich hinzufügen und entfernen.",

		workspacebuilder_roles_priv_addRemoveClasses: "Klassen verwalten",
		workspacebuilder_roles_plbl_addRemoveClasses: "Benutzer mit dieser Berechtigung können Klassen im Teamarbeitsbereich hinzufügen und entfernen.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Teamarbeitsbereichsbenutzer verwalten",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Benutzer mit dieser Berechtigung können Benutzer und Gruppen im Teamarbeitsbereich hinzufügen und entfernen. Außerdem können sie steuern, welchen Rollen Benutzer zugeordnet werden.",

		workspacebuilder_roles_priv_modifyRoles: "Rollen ändern",
		workspacebuilder_roles_plbl_modifyRoles: "Eigner mit dieser Berechtigung können Rollenberechtigungen für den Teamarbeitsbereich ändern. Diese Berechtigung steht nur für Eigner zur Verfügung.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Benutzer auswählen",
		workspacebuilder_users_add_users_and_groups_button: "Benutzer und Gruppen hinzufügen...",
		workspacebuilder_users_users_or_group_header: "Benutzer und Gruppe",
		workspacebuilder_users_roles_header: "Rollen",

		workspacebuilder_users_role_header: "Rolle",
		workspacebuilder_users_role_no_permissions: "Diese Rolle hat keine Berechtigungen",
		workspacebuilder_users_available_roles_label: "Verfügbare Rollen:",
		workspacebuilder_users_selected_users_and_groups_label: "Ausgewählte Benutzer und Gruppen:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Der Teamarbeitsbereich können nicht gespeichert werden. Sie müssen mindestens einen Eigner für diesen Teamarbeitsbereich angeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Der Teamarbeitsbereich können nicht gespeichert werden. Allen Benutzern muss eine Rolle zugeordnet werden.",
		// end of select users

		workspacebuilder_search_templates: "Suchen auswählen",
		workspacebuilder_search_add: "Suche hinzufügen",
		workspacebuilder_properties_workspaceName: "Name des Teamarbeitsbereichs:",
		workspacebuilder_properties_templateName: "Vorlagenname:",
		workspacebuilder_properties_workspaceDescription: "Beschreibung des Teamarbeitsbereichs:",
		workspacebuilder_properties_templateDescription: "Beschreibung der Vorlage:",
		workspacebuilder_properties_workspaceTemplate: "Ausgewählte Vorlage:",
		workspacebuilder_properties_security: "Vorlage freigeben für:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Aus Teamarbeitsbereich verschieben:",
		moveTeamspaceDocuments_security: "Dokument freigeben für:",
		moveTeamspaceDocuments_security_change: "Angepasste Sicherheit für die ausgewählten Elemente angeben",
		moveTeamspaceDocuments_item_type_level: "Sie können die Sicherheit ausgewählter Elemente nicht überschreiben, weil die Klasse des ausgewählten Elements nur für Sicherheit auf Klassenebene konfiguriert ist.",
		moveTeamspaceDocuments_security_inherit: "Sicherheit aus Zielordner übernehmen",
		moveTeamspaceDocuments_file_info_text: "Sie können Elemente aus einem Teamarbeitsbereich in einen anderen Teamarbeitsbereich oder Ordner verschieben.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Sie haben nicht die entsprechenden Berechtigungen zum Verschieben von Elementen in den ausgewählten Ordner.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Sie haben nicht die entsprechenden Berechtigungen zum Verschieben von Elementen aus dem Teamarbeitsbereich.",
		moveTeamspaceDocuments_move_mixed_items: "Sie können die Sicherheit der ausgewählten Elemente nicht überschreiben. Einige Elemente werden nicht vom Teamarbeitsbereich verwaltet. Sie können nur die Sicherheit der Elemente überschreiben, die vom Teamarbeitsbereich verwaltet werden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Sie müssen einen Namen für den Teamarbeitsbereich angeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Sie müssen einen Namen für die Vorlage für Teamarbeitsbereiche angeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Der Teamarbeitsbereichsname darf keines der folgenden Zeichen enthalten: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Der Vorlagenname darf keines der folgenden Zeichen enthalten: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Link zu Dokument",
		workspacebuilder_folders_makeDocCopy: "Dokument kopieren",
		workspacebuilder_folders_newfolder: "Neuer Ordner",
		workspacebuilder_folders_local_drive: "Aus lokalem Verzeichnis",
		workspacebuilder_folders_from_repo: "Aus Repository",
		workspacebuilder_folders_add_doc: "Dokument hinzufügen",
		workspacebuilder_folders_grid_name: "Name",
		workspacebuilder_folders_props: "Eigenschaften",
		workspacebuilder_folders_remove: "Entfernen",
		workspacebuilder_folders_delete: "Löschen",
		workspacebuilder_folders_adddoc_local: "Dokument aus lokalem Laufwerk hinzufügen",
		workspacebuilder_folders_adddoc_repo: "Dokument aus Repository hinzufügen",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Der angegebene Ordnername ist bereits vorhanden. Geben Sie einen anderen Ordnernamen an.",

		workspacebuilder_classes_title: "Klassen oder Erfassungsvorlagen auswählen",
		workspacebuilder_classes_title_cm: "Klassen auswählen",
		workspacebuilder_classes_template_introText: "Geben Sie an, ob die Teamarbeitsbereiche, die aus dieser Vorlage erstellt werden, Klassen oder Erfassungsvorlagen zum Hinzufügen von Dokumenten zum Repository verwenden sollen. Wenn keine Klassen ausgewählt sind, werden in Teamarbeitsbereichen alle Klassen angezeigt, auf die sie Zugriff haben. Benutzer können die Liste der Klassen oder Erfassungsvorlagen im Teamarbeitsbereich ändern, wenn sie über die entsprechende Berechtigung verfügen.",
		workspacebuilder_classes_template_introText_cm: "Wählen Sie die Klassen aus, die Benutzer zum Hinzufügen von Dokumenten zum Repository verwenden können. Wenn keine Klassen ausgewählt sind, sehen die Teamarbeitsbereichsbenutzer alle Klassen, auf die Sie Zugriff haben. Benutzer können die Liste der Klassen im Teamarbeitsbereich ändern, wenn sie über die entsprechenden Berechtigungen verfügen.",
		workspacebuilder_classes_instance_introText: "Wählen Sie die Klassen oder Erfassungsvorlagen aus, die Benutzer zum Hinzufügen von Dokumenten zum Repository verwenden können. Wenn keine Klassen ausgewählt sind, sehen die Teamarbeitsbereichsbenutzer alle Klassen, für die Sie die Berechtigung haben. Benutzer können die Liste der Klassen oder Erfassungsvorlagen im Teamarbeitsbereich ändern, wenn sie über die entsprechenden Berechtigungen verfügen.",
		workspacebuilder_classes_instance_introText_cm: "Wählen Sie die Klassen aus, die Benutzer zum Hinzufügen von Dokumenten zum Repository verwenden können. Wenn keine Klassen ausgewählt sind, sehen die Teamarbeitsbereichsbenutzer alle Klassen, für die Sie die Berechtigung haben. Benutzer können die Liste der Klassen im Teamarbeitsbereich ändern, wenn sie über die entsprechenden Berechtigungen verfügen.",
		workspacebuilder_classes_selection: "Klassen auswählen:",
		workspacebuilder_classes_list: "Verfügbare Klassen:",
		workspacebuilder_classes_columns_default: "Standard",
		workspacebuilder_classes_columns_className: "Klassenname",
		workspacebuilder_classes_type_classes: "Klassen zum Hinzufügen von Dokumenten verwenden",
		workspacebuilder_classes_type_classes_tooltip: "Klassen enthalten zugeordnete Eigenschaften, sodass Dokumente für die spätere Verwendung gesucht werden können.",
		workspacebuilder_classes_type_entryTemplates: "Erfassungsvorlagen zum Hinzufügen von Dokumenten verwenden",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Erfassungsvorlagen stellen sicher, dass die für die einzelnen Dokumente bereitgestellten Informationen konsistent sind und vordefinierte Werte verwenden.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Name der Erfassungsvorlage",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Beschreibung",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Sie müssen dem Teamarbeitsbereich mindestens eine Erfassungsvorlage hinzufügen.",

		workspacebuilder_classes_new: "Neue Klasse",
		workspacebuilder_classes_add: "Klasse hinzufügen",
		workspacebuilder_entryTemplate_add: "Erfassungsvorlage hinzufügen",
		workspacebuilder_add_list: "Hinzufügen",
		workspacebuilder_makeDefault_list: "Standardwert festlegen",
		workspacebuilder_removeDefault_list: "Standardwert entfernen",

		workspacebuilder_roles_title: "Rollen auswählen",
		workspacebuilder_roles_title_modify: "Rollen ändern",

		workspacebuilder_selection_moveup: "Nach oben",
		workspacebuilder_selection_movedown: "Nach unten",
		workspacebuilder_selection_remove: "Entfernen",
		workspacebuilder_selection_add: "Hinzufügen",
		workspacebuilder_selection_create_new_search: "Neue Suche...",
		workspacebuilder_selection_create_new_role: "Neue Rolle...",
		workspacebuilder_selection_make_role_available: "Verfügbar machen",
		workspacebuilder_selection_make_role_available_tooltip: "Gibt die ausgewählte Rolle für andere Vorlagen frei. Sie müssen der Rolle mindestens eine Berechtigung zuweisen, damit sie freigegeben werden kann.",

		workspacebuilder_navigation_next: "Weiter",
		workspacebuilder_navigation_finish: "Fertigstellen",
		workspacebuilder_navigation_validate: "Validieren",
		workspacebuilder_navigation_previous: "Zurück",
		workspacebuilder_navigation_cancel: "Abbrechen",
		workspacebuilder_navigation_customize: "Anpassen",

		workspacebuilder_search_dialog_title: "Suchen",
		workspacebuilder_dialog_close: "Schließen",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Vorlagenverfügbarkeit:",
		workspace_properties_templateState_tooltip: "Die Vorlage nicht verfügbar machen, um Benutzer daran zu hindern, Teamarbeitsbereiche zu erstellen, die diese Vorlage verwenden.",
		workspace_properties_dialog_title: "Vorlageneigenschaften",
		workspace_properties_online_radio_option_label: "Verfügbar machen",
		workspace_properties_offline_radio_option_label: "Nicht verfügbar",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Wollen Sie ohne Speichern der Änderungen abbrechen?",
		workspacebuilder_cancel_confirmation_button: "Ja",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Alle ungültigen Elemente werden aus der Vorlage entfernt und die Vorlage wird Benutzern zur Verfügung gestellt.  Möchten Sie diese Teamarbeitsbereichsvorlage validieren?",
		workspacebuilder_validate_confirmation_button: "Ja",
		workspacebuilder_validate_confirmation_title: "Validieren",

		/* Entry templates builder */
		entry_templates: "Erfassungsvorlagenmanager",
		no_entry_templates_were_found: "Es sind keine Erfassungsvorlagen vorhanden.",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Rollen:",

		/* User Group picker widget */
		directory_label: "Verzeichnis:",
		scope_label: "Suchen nach:",
		name_starts_with_label: "Name beginnt mit",
		name_contains_label: "Name enthält",
		display_name_contains_label: "Anzeigename enthält",
		starts_with_label: "Beginnt mit:",
		available_label: "Verfügbar:",
		available_heading: "Verfügbar",
		selected_label: "Ausgewählt:",
		selected_heading: "Ausgewählt",
		available_repositories_label: "Verfügbare Repositorys",
		selected_repositories_label: "Ausgewählte Repositorys",
		default_repository: "Standardrepository:",
		default_repository_placeholder: "Repository auswählen",
		default_role_placeholder: "Rolle auswählen",
		menu_label_placeholder: "Wählen Sie eine Bezeichnung oder geben Sie eine ein",
		default_repository_hover: "Geben Sie das Repository an, das standardmäßig ausgewählt ist, wenn Benutzer sich über diesen Desktop am Web-Client anmelden.<br><br><b>Wichtig:</b> Sie müssen Repositorys der Liste der ausgewählten Repositorys zuweisen, bevor Sie das Standardrepository angeben können.",
		default_repository_workflow_hover: "<b>Achtung:</b> Sie können die Anwendungsspeicherbereiche nur für die Repositorys konfigurieren, die für diesen Desktop konfiguriert sind.",
		remove_label: "Entfernen",
		users_label: "Benutzer",
		groups_label: "Gruppen",
		user_or_group_name_label: "Benutzer- oder Gruppenname:",
		user_or_group_name_hover: "Geben Sie einen im Repository gültigen Benutzer- oder Gruppennamen an.  Der Name wird nicht geprüft.",
		user: "Benutzer",
		group: "Gruppe",
		name: "Name:",
		displayName: "Anzeigename",
		display_name: "Anzeigename:",
		shortName: "Kurzname:",
		distinguishedName: "Distinguished Name:",
		search_tooltip: "Suchen",
		add_tooltip: "Hinzufügen",
		add_selected_tooltip: "Der ausgewählten Liste hinzufügen",
		remove_tooltip: "Entfernen",
		remove_selected_tooltip: "In der ausgewählten Liste entfernen",
		add_to_selected_tooltip: "Hinzufügen",
		remove_from_selected_tooltip: "Entfernen",
		move_up_selected_tooltip: "Nach oben",
		move_down_selected_tooltip: "Nach unten",
		advanced_search_options_tooltip: "Erweiterte Einstellungen",
		move_right_selected_tooltip: "In Untermenü verschieben",
		move_left_selected_tooltip: "Aus Untermenü verschieben",
		add_separator: "Trennzeichen hinzufügen",
		menu_item_label: "Menüpunktbezeichnung:",
		add_menu_label: "Untermenü hinzufügen",
		menu_label: "Untermenübezeichnung:",
		menu_label_info: "<b>Wichtig:</b> Sie müssen diesem Untermenü mindestens einen Menüpunkt hinzufügen, bevor Sie dieses Menü speichern können.",
		menu_dropdown_label: "Dropdown-Schaltflächenbeschriftung:",
		menu_dropdown_label_info: "<b>Wichtig:</b> Sie müssen dieser Dropdown-Schaltfläche mindestens einen Menüpunkt hinzufügen, bevor Sie diese Symbolleiste speichern können.",
		no_item_found: "Es wurden keine Ergebnisse gefunden.",
		me: "Ich",
		anyone: "Jeder",
		specific_users: "Bestimmte Benutzer",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Die Suche hat mehr als {0} Ergebnisse zurückgegeben. Ändern Sie Ihre Kriterien, um die Suche einzugrenzen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Die Suchergebnisse enthalten bereits ausgewählte Elemente. Diese Elemente werden nicht in den Suchergebnissen angezeigt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Es wurden mehr als {0} Ergebnisse zurückgegeben. Mit dem Filter können Sie die Ergebnisse eingrenzen.",

		user_already_selected: "Der angegebene Benutzer ist bereits ausgewählt.  Geben Sie einen anderen Benutzer an.",
		group_already_selected: "Die angegebene Gruppe ist bereits ausgewählt.  Geben Sie eine andere Gruppe an.",
		user_cannot_select_self: "Sie können nicht sich selbst hinzufügen. Geben Sie einen anderen Benutzer an.",

		/* Select User Group dialog */
		select_user_group_add_label: "Hinzufügen",
		select_user_group_cancel_label: "Abbrechen",
		add_users_groups_label: "Benutzer und Gruppen hinzufügen",
		add_user_group_label: "Benutzer und Gruppe hinzufügen",
		add_users_label: "Benutzer hinzufügen",
		add_user_label: "Benutzer hinzufügen",
		add_label: "Hinzufügen:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Bei folgenden Dokumenten liegen nicht gespeicherte Änderungen an den Anmerkungen vor:",
		viewer_confirm_to_proceed: "Wollen Sie fortfahren und die Änderungen verlieren?",
		viewer_warn_has_changes: "Ihre nicht gespeicherten Änderungen werden verworfen.",
		viewer_warn_is_printing: "Druckvorgänge, die in Bearbeitung sind, sind möglicherweise noch nicht abgeschlossen.",
		viewer_warn_confirm_exit: "Wollen Sie beenden?",
		viewer_prompt_save_changes: "Bei folgendem Dokument liegen nicht gespeicherte Änderungen an den Anmerkungen vor, die verloren gehen:<br>${0}<br><br>Wollen Sie die Änderungen speichern?",
		viewer_prompt_mergesplit_changes: "Bei folgenden Dokumenten liegen nicht gespeicherte Änderungen vor:<br>${0}<br><br>Wollen Sie fortfahren und die Änderungen verlieren?",
		viewer_prompt_mergesplit_tab_changes: "Bei folgendem Dokument liegen nicht gespeicherte Änderungen vor:<br>${0}<br><br>Wollen Sie fortfahren und die Änderungen verlieren?",
		viewer_new_item_name: "Neues Dokument",
		viewer_top_frame: "Oberer Frame:",
		viewer_bottom_frame: "Unterer Frame:",
		viewer_left_frame: "Linker Frame:",
		viewer_right_frame: "Rechter Frame:",
		viewer_viewer_frame: "Viewer-Frame:",
		viewer_properties_frame: "Eigenschaftenframe:",
		viewer_comment_frame: "Kommentarframe:",
		viewer_mergesplit_on: "Ansicht",
		viewer_mergesplit_off: "Zusammenführen und teilen",
		viewer_mergesplit_context_menu_move: "Verschieben",
		viewer_mergesplit_context_menu_rename: "Umbenennen",
		viewer_mergesplit_context_menu_delete: "Löschen",
		//move to new window
		viewer_move_to_new_window:"In neues Fenster verschieben",
		viewer_continue:"Änderungen verwerfen",
		viewer_return_to_original_window:"Zurück zum Ausgangsfenster",
		viewer_switch_window:"Fenster wechseln",
		viewer_prompt_lost_changes:"Das Dokument ${0} ist derzeit in einem anderen Fenster geöffnet. Das Dokument enthält nicht gespeicherte Änderungen.<br><br>Möchten Sie zum Ausgangsfenster wechseln, um die Änderungen zu speichern, oder möchten Sie die Änderungen verwerfen und das Dokument in diesem Fenster öffnen?",
		viewer_mergesplit_fallback_info: "Sie können die Aktion 'Zusammenführen und teilen' nur für Dokumente ausführen, die sich in demselben Repository befinden.",
		viewer_tabbed_layout: "Als Registerkarten anzeigen",
		viewer_tabbed_layout_highcontrast: "Registerkarten",
		viewer_split_vertical_layout: "Fenster vertikal teilen",
		viewer_split_vertical_layout_highcontrast: "Vertikal",
		viewer_split_horizontal_layout: "Fenster horizontal teilen",
		viewer_split_horizontal_layout_highcontrast: "Horizontal",
		viewer_add_vertical_layout: "Neue Registerkarte unten",
		viewer_add_vertical_layout_highcontrast: "Registerkarte unten",
		viewer_add_horizontal_layout: "Neue Registerkarte rechts",
		viewer_add_horizontal_layout_highcontrast: "Registerkarte rechts",
		viewer_add_horizontal_layout_rtl: "Neue Registerkarte links",
		viewer_add_horizontal_layout_rtl_highcontrast: "Registerkarte links",
		viewer_split_properties_layout: "Eigenschaften anzeigen",
		viewer_split_comment_layout: "Kommentar anzeigen",
		viewer_split_notelog_layout: "Notizprotokoll anzeigen",
		viewer_window_title: "${0}-Viewer",
		viewer_next_hit: "Nächstes Dokument in der Liste anzeigen",
		viewer_prev_hit: "Vorheriges Dokument in der Liste anzeigen",
		viewer_confrim_more_search_results: "Die Suchergebnisse enthalten keine weiteren anzeigbaren Dokumente. Wollen Sie weitere Suchergebnisse abrufen?",
		viewer_confirm_get_next_page: "Die Liste der Ergebnisse enthält keine anzeigbaren Elemente mehr. Wollen Sie weitere Suchergebnisse abrufen?",
		viewer_confirm_get_next_item: "Die Liste der Ergebnisse enthält weitere anzeigbare Elemente. Wollen Sie das nächste Element anzeigen?",
		viewer_fn_annotation_tooltip: " Erstellt von: ${0},  erstellt am: ${1}",
		viewer_box_note_limitation: "Sie können Box Notes nur in einem separaten Fenster öffnen und anzeigen.",
		viewer_click_to_open_box_note: "Klicken Sie hier, um Box Notes anzuzeigen.",
		viewer_box_view_expiring: "Die Höchstdauer für das Anzeigen Ihres Box-Dokuments beträgt 60 Minuten. Die aktuelle Sitzung läuft in ${0} Minuten ab. Wenn Sie die Arbeit an Ihrem Dokument fortsetzen wollen, müssen Sie es jetzt erneut laden. Möchten Sie das Dokument erneut laden?",
		viewer_add_dialog_save_as_type: "Dateityp:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Auscheckkonflikt",
		viewer_checkout_conflict: "Das Dokument wurde von einem anderen Benutzer ausgecheckt.",
		viewer_checkout_confirm: "Eine neuere Version des Dokuments ist verfügbar. Wollen Sie das Auschecken des Dokuments fortsetzen oder wollen Sie den Viewer mit der neueren Version neu laden? Wenn Sie den Viewer neu laden, gehen alle nicht gespeicherten Änderungen verloren.",
		viewer_checkout_continue: "Auschecken fortsetzen",
		viewer_checkout_reload: "Neu laden",
		viewer_status_building: "Dokument wird erstellt...",
		viewer_status_adding: "Dokument wird hinzugefügt...",
		viewer_status_checking_in: "Dokument wird eingecheckt...",

		/* Class Selector Widget */
		include_subclasses_label: "Unterklassen einschließen",
		include_subclasses_label2: "Unterklassen ebenfalls durchsuchen",
		include_subclasses_note: "(Mit Unterklassen)",
		available_classes_col_header: "Verfügbare Klassen",
		single_class_label: "Einzelne Klasse durchsuchen",
		multiple_classes_label: "Mehrere Klassen durchsuchen",
		multiple_classes_hover_help: "Wählen Sie diese Option aus, um mehr als eine Klasse zu durchsuchen. Bei den Klassen kann es sich um übergeordnete Klassen oder Unterklassen handeln. Wenn Sie diese Option auswählen, werden nur die Eigenschaften und Werte angezeigt, die allen ausgewählten Klassen gemeinsam sind.",
		selected_classes_col_header: "Ausgewählte Klassen",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Mit Unterordnern)",
		favorites_pseudo_node: "\\Favoriten\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Sie müssen einen Ordner im Repository auswählen, dem das Dokument hinzugefügt werden soll.",
		no_permission_add_folder: "Sie verfügen nicht über die Berechtigungen, diesem Ordner andere Ordner hinzuzufügen.",
		no_permission_add_document: "Sie verfügen nicht über die Berechtigungen, diesem Ordner Dokumente hinzuzufügen.",
		document_already_in_folder: "Das Dokument befindet sich bereits in diesem Ordner.",
		cant_move_folder_onto_parent: "Der Ordner befindet sich bereits in diesem Ordner.",
		cant_move_folder_onto_self: "Sie können einen Ordner nicht in sich selbst oder seine Unterordner verschieben.",

		/* Workflow Widgets */
		process_application_space: "Prozessanwendungsbereich",
		process_role: "Rolle verarbeiten",
		process_inbasket: "Posteingang verarbeiten",
		process_worklist: "Vorgangsliste",
		process_step_processor: "Arbeitselement verarbeiten",
		process_tracker: "Arbeitselement verfolgen",
		process_info_subject: "Betreff",
		process_info_stepname: "Schritt",
		process_info_is_locked: "Gesperrt",
		process_info_no_access: "Kein Zugriff",
		process_info_received_on: "Empfangen am",
		process_info_overdue: "Überfällig",
		process_info_reminder_sent: "Erinnerung gesendet",
		process_info_locked_by_user: "Gesperrt von",
		process_work_object_number: "Arbeitsobjektnummer",
		process_deadline: "Fälligkeitsdatum:",
		process_launchedby: "Gestartet von:",
		process_receivedon: "Empfangen am/um:",
		process_step: "Schritt:",
		process_properties: "Eigenschaften",
		process_attachments: "Anhänge",
		process_attachments_select: "Anhang auswählen",
		process_finish_button_label: "Überwachung stoppen",
		process_tracker_history: "Verlauf",
		process_tracker_milestones: "Meilensteine",
		process_tracker_milestone: "Meilenstein",
		process_tracker_milestone_level: "Version",
		process_tracker_milestones_empty: "Es sind keine anzuzeigenden Meilensteine verfügbar.",
		process_tracker_level_selector_label: "Meilensteinstufen anzeigen bis zu:",
		process_tracker_map_selector_label: "Filtern nach Zuordnung:",
		process_tracker_message: "Nachricht",
		process_tracker_datereached: "Datum erreicht",
		process_tracker_stepname: "Schritt",
		process_tracker_cycle: "Zyklus",
		process_tracker_review_cycle: "Überarbeitungszyklus",
		process_tracker_participant: "Teilnehmer",
		process_tracker_completed: "Abgeschlossen",
		process_tracker_response: "Antwort",
		process_tracker_comments: "Kommentare",
		process_tracker_delete_confirmation: "Wollen Sie die Verfolgung des Workflows ${0} beenden?",
		process_tracker_history_allmaps: "Alle Zuordnungen",
		process_tracker_history_workflow: "Workflow",
		process_tracker_history_terminate: "Beenden",
		process_tracker_history_malfunction: "Störung",
		process_filter_label: "Filter",
		process_no_filter_summary: "Keine Filter angewendet",
		process_filter_summary: "${0} angewendet",
		process_filter_reset_tooltip: "Durch das Zurücksetzen werden die Filter gelöscht und der Posteingang aktualisiert.",
		process_attachments_add_folder: "Ordner hinzufügen",
		process_attachments_add_doc: "Dokument hinzufügen",
		process_complete_button_label: "Abgeschlossen",
		process_save_button_label: "Speichern",
		process_launch_button_label: "Workflow starten",
		process_open_button_label: "Öffnen",
		process_movetoinbox_button_label: "In Posteingang verschieben",
		process_return_button_label: "Zurückgeben",
		process_return_to_sender_tooltip: "Das Arbeitselement in den Ursprungsposteingang zurückgeben",
		process_move_to_inbasket_tooltip: "Das Arbeitselement in Ihren persönlichen Posteingang verschieben",
		process_reassign_tooltip: "Das Arbeitselement einem anderen Eigner erneut zuordnen",
		process_reassign_button_label: "Erneut zuordnen",
		process_preferences_button_label: "Vorgaben",
		process_manageroles_button_label: "Rollen verwalten",
		process_manageroles_no_members: "Es sind keine Mitglieder vorhanden.",
		process_responses_button_label: "Weitere Antworten",
		process_morecustomaction_button_label: "Weitere Aktionen",
		process_show_instructions: "Anweisungen anzeigen",
		process_hide_instructions: "Anweisungen ausblenden",
		process_remove_attachment: "Entfernen",
		process_close_window: "Das Arbeitselement wurde verarbeitet.",
		process_delegate_flag: "Erzwingen, dass der aktuelle Eigner das Arbeitselement freigibt, bevor es zum nächsten Schritt im Workflow weitergeleitet wird.",
		process_paticipant_voting: "Erforderliche Teilnehmeranzahl für Abstimmungsgenehmigung:",
		process_get_next_label: "Nächstes Arbeitselement abrufen",
		process_no_more_items: "Es sind keine weiteren Elemente zur Verarbeitung im Posteingang.",
		process_workflow_name: "Workflowname:",
		process_pattern_process_name: "Überprüfung für ${0}",
		process_instuctions: "Anweisungen für Prüfer:",
		process_pattern_deadline: "Fälligkeitsdatum:",
		process_reviewers: "Prüfer:",
		process_approvals_required: "Erforderliche Freigaben:",
		process_on_reject: "Wenn das Arbeitselement zurückgewiesen wird:",
		process_return_to_originator: "Zurück an mich",
		process_return_to_previous_reviewer: "Zurück an den vorherigen Prüfer",
		process_additional_settings: "Weitere Einstellungen:",
		process_allow_reassign: "Prüfern die erneute Zuordnung dieser Überprüfung erlauben",
		process_complete_notification: "Ich möchte benachrichtigt werden, wenn die Überprüfung abgeschlossen ist.",
		process_workflow_name_hover_help: "Anhand des von Ihnen für das Arbeitselement angegebenen Namens sollten Prüfer dieses Arbeitselement leicht von anderen Arbeitselementen in ihrem Posteingang unterscheiden können.",
		process_approvals_required_hover_help: "Wenn das Arbeitselement von mehreren Personen gleichzeitig geprüft wird, können Sie angeben, wie viele Freigaben erforderlich sind, damit das Arbeitselement erfolgreich abgeschlossen wird.",
		process_approval_options: "Freigabeoptionen",
		process_all: "Alle",
		process_at_least: "Mindestens",
		process_at_least_by_count: "Mindestens ${0} Prüfer",
		process_at_least_by_percentage: "Mindestens ${0} % der Prüfer",
		process_comments: "Kommentare:",
		process_review_step_comments_hover_help: "Wenn Sie das Arbeitselement zurückweisen, müssen Sie die Gründe für die Zurückweisung angeben. Diese Angaben ermöglichen dem Ersteller des Arbeitselements oder dem vorherigen Prüfer, sich mit Ihren Bedenken auseinanderzusetzen.",
		process_rework_step_comments_hover_help: "Sie müssen angeben, wie Sie auf die Kommentare reagiert haben. Wenn Sie den Kommentaren nicht zustimmen, müssen Sie Ihre Entscheidung begründen.",
		process_rejection_reason: "Grund für Zurückweisung:",
		process_summary: "Zusammenfassung",
		process_sequential_review: "Sequenzielle Überprüfung",
		process_sequential_review_description: "Das Arbeitselement wird nacheinander von den Prüfern geprüft.",
		process_parallel_review: "Parallele Überprüfung",
		process_parallel_review_description: "Das Arbeitselement wird von allen Prüfern gleichzeitig geprüft.",
		process_parallel_approvals_required_error: "Die Anzahl der erforderlichen Freigaben ist zu hoch. Es sind nur ${0} Prüfer angegeben.",
		process_parallel_invalid_required_approvals_count: "Der Wert ist ungültig. Der Wert muss ${0} sein.",
		process_subject_prompt: "Betreff eingeben",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Arbeitselement:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Eigenschaften anzeigen",
		view_permissions_level: "Berechtigungen anzeigen",
		view_content_level: "Dokument anzeigen",
		link_level: "Link",
		modify_properties_level: "Eigenschaften bearbeiten",
		modify_content_level: "Dokument bearbeiten",
		minor_version_level: "Nebenversion bearbeiten",
		major_version_level: "Hauptversion bearbeiten",
		create_instance_level: "Instanz erstellen",
		delete_document_level: "Dokument löschen",
		delete_item_level: "Element löschen",
		modify_document_permissions_level: "Verwaltungsberechtigungen",
		modify_folder_permissions_level: "Verwaltungsberechtigungen",
		modify_owner_level: "Eigner ändern",
		delete_folder_level: "Ordner löschen",
		file_in_folder_level: "Zu Ordnern hinzufügen",
		create_subfolder_level: "Unterordner erstellen",
		link_item_level: "Dokument mit Anmerkungen versehen, Zu Ordner hinzufügen", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Nur für Dokument: Fügen Sie dem Dokument eine Anmerkung hinzu oder entfernen Sie eine Anmerkung aus dem Dokument</li><li>Nur für Ordner: Fügen Sie dem Ordner Elemente hinzu oder entfernen Sie Elemente aus dem Ordner</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Löschen",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Eigner",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Leser",
		/* previously \"Read only\" */
		no_access_privilege: "Kein Zugriff",
		share_with_label: "Freigeben für:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Nur für mich",
		public_label: "Für alle",
		members_label: "Bestimmte Benutzer und Gruppen",
		select_members_label: "Auswählen...",
		select_user_group_label: "Benutzer auswählen...",
		select_users_groups_label: "Benutzer und Gruppen auswählen...",
		select_user_label: "Benutzer auswählen...",
		propagation_label: "Weitergabe:",
		access_label: "Berechtigungen:",
		add_permission_add_label: "Hinzufügen",
		security_policy_label: "Sicherheitsrichtlinie:",
		includes_inherited_access: "Schließt übernommenen Zugriff ein",
		customize_access_for_label: "Zugriff anpassen für:",
		customize: "Anpassen",
		direct: "Dieses Element",
		singleLevelInheritance: "Einzelne Ebene",
		infiniteLevelInheritance: "Alle Ebenen",
		inherited: "Übernommen",
		direct_hover_help: "Sicherheitseinstellungen gelten für das ausgewählte Element",
		singleLevelInheritance_hover_help: "Diese Berechtigungen gelten für dieses Element und für alle direkt untergeordneten Elemente, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind.",
		infiniteLevelInheritance_hover_help: "Diese Berechtigungen gelten für dieses Element und für alle Nachkommen, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind.",
		inherited_hover_help: "Diese Berechtigungen werden vom übergeordneten Element übernommen.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Die Berechtigungen für ${0} gelten für dieses Element und für alle direkt untergeordneten Elemente, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind.",
		infiniteLevelInheritance_member_hover_help: "Die Berechtigungen für ${0} gelten für dieses Element und für alle Nachkommen, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind.",
		inherited_member_hover_help: "Diese Berechtigungen für ${0} werden aus dem übergeordneten Element übernommen.",
		partial_hover_help: "Elementsicherheitseinstellungen wurden von einem Benutzer geändert",
		allow: "Zulassen",
		deny: "Verweigern",
		basic: "Basis",
		advanced: "Erweitert",
		permission_type: "Zugriff festlegen für:",
		share_with_hover_help: "Das Element ist zurzeit für die folgenden Benutzer und Gruppen freigegeben.",
		direct_security_policy_hover_help: "Die Einstellungen dieser Sicherheitsrichtlinie ermöglichen Ihnen das Ändern der Sicherheit dieses Elements.",
		security_policy_hover_help: "Die Sicherheit dieses Elements ist schreibgeschützt, weil die Einstellungen dieser Sicherheitsrichtlinie Ihnen das Ändern der Sicherheit dieses Elements untersagen.",
		security_remove: "Keine Berechtigungen",
		pseudo_group_label: "Aliasaccounts",
		marking_hover_help: "Die Sicherheit dieses Elements wird durch eine Markierungsgruppe gesteuert, was die Sicherheit des Elements beeinträchtigen kann.",
		note_label: "Wichtig:",
		marking_text: "Dieses Element ist als ${0} markiert. Das Element verfügt möglicherweise über zusätzliche Sicherheitsbeschränkungen.",
		authenticated_users: "Authentifizierte Benutzer",
		realm_users: "${0} Benutzer",
		denyAll: "Alle verweigern",
		allowAll: "Alle zulassen",
		remove_direct_text: "Wenn Sie Ihre Änderungen speichern, werden die Berechtigungen für dieses Mitglied aus dem Element entfernt.",
		remove_single_inheritance_text: "Wenn Sie Ihre Änderungen speichern, werden die Berechtigungen für dieses Mitglied aus dem Element und aus <br>allen direkt untergeordneten Elementen entfernt, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind.<p>Möchten Sie fortfahren?",
		remove_infinite_inheritance_text: "Wenn Sie Ihre Änderungen speichern, werden die Berechtigungen für dieses Mitglied aus dem Element und aus <br>allen Nachkommen entfernt, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind.<p>Möchten Sie fortfahren?",
		remove_inheritance_text: "Wenn Sie Ihre Änderungen speichern, werden die Berechtigungen für dieses Mitglied aus dem Element und aus <br>allen Nachkommen entfernt, die zur Vererbung von Zugriffsberechtigungen von diesem Element konfiguriert sind. Nur die Berechtigungen, die <br>von diesem Element übernommen werden, bleiben erhalten.<p>Möchten Sie fortfahren?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Diese Berechtigungen für ${0} entfernen",

		security_proxy_text: "Die Sicherheit dieses Elements ist schreibgeschützt.",
		security_proxy_declared_text: "Die Sicherheit dieses Elements ist schreibgeschützt, weil sie von einem Sicherheitsproxy definiert wird.",
		security_proxy_hover_help: "Die Sicherheit dieses Elements wird durch die Sicherheit gesteuert, die in einem anderen Objekt im Repository festgelegt ist.",
		add_permissions_label: "Berechtigungen hinzufügen",
		permission_propagation_direct: "Nur dieser Ordner",
		permission_propagation_onelevel: "Dieser Ordner und eine Ebene darunter",
		permission_propagation_alllevels: "Dieser Ordner und alle Ebenen darunter",
		document_propagation_label: "Zugriff festlegen für:",
		document_propagation_FOLDER: "Ordner",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Authentifizierungsquelle:",

		/* Versions Widget */
		object_versions_selector_label: "Versionen:",
		object_versions_label: "Versionen",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Ordner abgelegt in",
		folders_filed_in_folder_col_hdr: "Ordner",
		folders_filed_in_path_col_hdr: "Pfad",
		folders_filed_in_containment_name_col_hdr: "Einschlussname",
		folders_filed_in_creator_col_hdr: "Erstellt von",
		folders_filed_in_date_created_col_hdr: "Erstellungsdatum",

		/* Parent Documents */
		properties_parent_documents_label: "Übergeordnete Dokumente",

		/* Select object dialog */
		select_object_title: "Element auswählen",
		select_object_breadCrumb_version_prefix: "Versionen für: ",
		show_versions_label: "Versionen anzeigen",
		use_current_version_label: "Aktuelle Version verwenden",
		use_released_version_label: "Freigegebene Version verwenden",

		/* Select content class dialog */
		select_class: "Klasse auswählen",
		/* Select Search dialog */
		select_search: "Suche auswählen",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Link anzeigen",
		show_hyperlink_intro: "Sie können den Link kopieren und in E-Mails, Chats und Webseiten einfügen. Wenn mehrere Versionen des Elements vorhanden sind, geben Sie an, auf welche Version Sie mit dem Link verweisen wollen.",
		show_hyperlink_intro_no_version_select: "Sie können den Link kopieren und in E-Mails, Chats und Webseiten einfügen.",
		show_text_label: "Version:",
		released_button_label: "Freigegeben",
		current_button_label: "Aktuell",
		select_button_label: "Bestimmte Version",
		show_hyperlink_no_released_version_msg: "Es ist keine freigegebene Version dieses Dokuments vorhanden.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Workflow starten",
		edit_workflow_title: "Eigenschaften von Arbeitselementen",
		start_workflow_intro: "Starten Sie einen Workflow zum Verarbeiten der ausgewählten Elemente. Wenn Sie die Arbeitselemente einem bestimmten Benutzer zuweisen wollen, geben Sie einen Eigner an.",
		edit_workflow_intro: "Sie können die Eigenschaften der ausgewählten Arbeitselemente bearbeiten. Wenn Sie das Arbeitselement einem anderen Benutzer erneut zuordnen wollen, geben Sie einen Eigner an.",
		workflow_field_label: "Workflow:",
		priority_field_label: "Priorität:",
		owner_field_label: "Eigner:",
		start_button_label: "Starten",
		save_button_label: "Speichern",
		owner_value_hint: "Geben Sie eine alphanumerische Zeichenfolge mit maximal 32 Zeichen ein. Die Zeichenfolge darf nur Leerzeichen oder die folgenden Zeichen enthalten: a-z, A-Z, 0-9 und ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Inhaltselemente",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Der Wert ist ungültig. Der Wert darf nur Leerzeichen oder die folgenden Zeichen enthalten: a-z, A-Z, 0-9 und ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Geben Sie einen Wert von 1 bis 32000 ein, um den Stellenwert des Arbeitselements anzugeben.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Der Wert ist ungültig. Die Priorität muss ein Wert zwischen 1 und 32000 einschließlich sein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Der Workflowname ist nicht vorhanden.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "In Workflow aussetzen",
		suspend_workitems_intro: "Wenn Sie ein Arbeitselement im Workflow aussetzen, kann das Arbeitselement erst verarbeitet werden, nachdem es wieder aufgenommen wurde",
		suspend_workitems_options_label: "Die ausgewählten Arbeitselemente aussetzen:",
		suspend_until_resume_label: "Bis sie manuell wieder aufgenommen werden",
		suspend_until_date_label: "Bis",
		suspend_for_duration_label: "Für",
		suspend_for_duration_hours: "Stunden",
		suspend_for_duration_days: "Tage",
		suspend_for_duration_weeks: "Wochen",
		suspend_for_duration_months: "Monate",
		suspend_for_duration_years: "Jahre",
		suspend_button_label: "Aussetzen",
		suspend_duration_value_hint: "Geben Sie einen Wert im Bereich 1 - 99 für die Dauer ein.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Der Wert ist ungültig. Der Wert muss im Bereich 1 - 99 liegen.",

		/* Remove from workflow */
		remove_workflow_title: "Aus Workflow entfernen",
		remove_workflow_confirmation: "Wollen Sie die ausgewählten Elemente aus dem Workflow entfernen?<br>${0} Elemente sind ausgewählt.",
		remove_workflow_button_label: "Entfernen",

		/* Unfile dialog */
		unfile_dialog_title: "Aus Ordner entfernen",
		unfile_dialog_remove_from_folder_label: "Entfernen aus:",
		unfile_dialog_info_text: "Sie können Elemente aus Ordnern entfernen. Wird ein Element aus allen Ordnern entfernt, bedeutet das aber nicht, dass es auch aus dem Repository entfernt wird. Sie können das Element über eine Suche weiterhin abrufen. In dieser Liste werden nur die Ordner angezeigt, zur deren Ansicht Sie berechtigt sind.",
		unfile_dialog_select_all: "Alles auswählen",
		unfile_dialog_deselect_all: "Alles löschen",
		unfile_dialog_remove_button_label: "Entfernen",
		unfile_dialog_select_folder_col_hdr: "Ordner auswählen",
		unfile_dialog_folder_col_hdr: "Ordner",
		unfile_dialog_path_col_hdr: "Pfad",
		unfile_dialog_not_filed_msg: "Dieses Element ist nicht in irgendwelchen Ordnern vorhanden.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Sie verfügen nicht über die entsprechenden Berechtigungen zum Entfernen dieses Elements aus den Ordnern, in denen es enthalten ist.",
		unfile_dialog_folder_not_selectable_tooltip: "Sie verfügen nicht über die entsprechenden Berechtigungen zum Entfernen dieses Elements aus diesem Ordner.",
		unfile_multi_prompt: "Wollen Sie die ausgewählten Elemente aus dem Ordner ${0} entfernen?",
		unfile_large_number_items_confirmation_question: "Sie haben ${0} Elemente ausgewählt, die aus dem Ordner ${1} entfernt werden sollen.<br/>Das Entfernen einer großen Anzahl von Elementen aus einem Ordner kann lange dauern.<br/>Möchten Sie fortfahren?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Öffnen",
		move_to_folder_title: "In Ordner verschieben",
		move_to_folder_button_caption: "Verschieben",
		move_to_folder_label: "Verschieben in:",
		add_to_folder_title: "Zu Ordner hinzufügen",
		add_to_folder_button_caption: "Hinzufügen",
		add_to_folder_label: "Hinzufügen zu:",
		copy_to_folder_title: "In Ordner kopieren",
		copy_to_folder_button_caption: "Kopieren",
		copy_to_folder_label: "Kopieren in:",
		copy_to_folder_delete_label: "Ausgewählte Elemente nach dem Kopieren in Box löschen.",
		move_from_folder_label: "Verschieben aus:",
		move_file_info_text: "Sie können Elemente von einem Ordner in einen anderen verschieben.",
		move_folder_info_text: "Sie können Ordner von einem übergeordneten Ordner in einen anderen verschieben.",
		add_doc_to_folder_info_text: "Sie können Elemente mindestens einem Ordner hinzufügen. Wenn ein Element sich bereits in einem Ordner befindet, bleibt es darin und wird allen weiteren Ordnern hinzugefügt, die Sie angeben.",
		copy_doc_to_folder_info_text: "Sie können Elemente in einen Ordner kopieren.",
		box_copy: "Box-Kopie",
		box_copy__button_caption: "Kopieren",
		box_copy_to_info_text: "Wählen Sie das Repository und den Ordner aus, in das/den Sie Ihre aus Box ausgewählten Elemente kopieren wollen.",
		box_copy_from_info_text: "Wählen Sie das Repository und den Ordner aus, in das/den Sie Ihre aus Box ausgewählten Elemente kopieren wollen.",
		box_copy_version_info_text: "Wählen Sie zum Hinzufügen eines neuen Dokuments das Repository und den Ordner aus. Wählen Sie zum Einchecken einer neuen Version das Repository und das Dokument aus.",
		admin_box_copy: "Box-Kopie",
		admin_box_copy_hover: "Mit dieser Option können Benutzer Dokumente in Box kopieren.",

		no_permission_to_copy_version_msg: "Sie können das Dokument in Box nicht als eine neue Version des ausgewählten Dokuments kopieren. Entweder verfügen Sie nicht über die entsprechenden Berechtigungen zum Bearbeiten des ausgewählten Dokuments oder das ausgewählte Dokument wurde von einer anderen Person ausgecheckt.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Sie verfügen nicht über die entsprechenden Berechtigungen zum Entfernen dieses Elements aus den Ordnern, in denen es enthalten ist.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Sie verfügen nicht über die entsprechenden Berechtigungen zum Entfernen dieses Elements aus diesem Ordner.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Dieses Element kann nicht verschoben werden, da es in keinem Ordner abgelegt ist. Wählen Sie ein anderes Element aus.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Workflow starten",
		subscriptions_dialog_available_items_label: "Verfügbare Elemente:",
		subscriptions_dialog_info_text: "Geben Sie an, welcher Workflow gestartet werden soll.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Name",
		subscriptions_dialog_desc_col_hdr: "Beschreibung",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Rollen verwalten",
		manageroles_dialog_info_text: "Sie können die Liste mit den Benutzern für jede Rolle ändern, die zu diesem Prozessanwendungsbereich gehört.",
		manageroles_dialog_members_label: "Mitglieder",
		manageroles_dialog_roles_label: "Rollen",
		manageroles_dialog_add_button_label: "Benutzer und Gruppen hinzufügen",
		manageroles_dialog_remove_button_label: "Entfernen",
		manageroles_dialog_save_button_label: "Speichern",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Diesem Element sind keine Workflows zugeordnet.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Vorgaben für Workflows",
		workflow_pref_dialog_info_text: "Geben Sie die Workflowereignisse an, für die Sie E-Mail-Benachrichtigungen erhalten möchten. Sie können auch die Option aktivieren, Ihre Arbeit an eine andere Person weiterzuleiten, indem Sie einen Benutzer auswählen, an den Ihre Arbeit delegiert wird.",

		workflow_pref_general: "Allgemein",
		workflow_pref_email_address: "E-Mail-Adresse",
		workflow_pref_email_address_hover: "Geben Sie die E-Mail-Adresse an, über die Sie Workflowbenachrichtigungen erhalten möchten.",
		workflow_pref_preferred_locale: "Sprache",
		workflow_pref_preferred_locale_hover: "Gibt die Sprache an, in der die E-Mail-Benachrichtigungen angezeigt werden.",

		workflow_pref_work_item_notice: "Benachrichtigung zu Arbeitselement",
		workflow_pref_step_new_assignment: "Mir wurde ein neues Arbeitselement zugeordnet",
		workflow_pref_step_new_assignment_hover: "Ich möchte benachrichtigt werden, wenn ich ein neues Arbeitselement erhalte.",
		workflow_pref_step_expired_deadline: "Endtermin für Arbeitselement wurde überschritten",
		workflow_pref_step_expired_deadline_hover: "Ich möchte benachrichtigt werden, wenn ich den Endtermin eines Arbeitselements verpasse.",
		workflow_pref_step_reminders: "Endtermin für Arbeitselement steht bevor",
		workflow_pref_step_reminders_hover: "Ich möchte daran erinnert werden, dass der Endtermin eines Arbeitselements bevorsteht.",

		workflow_pref_originator_notice: "Benachrichtigung des Erstellers",
		workflow_pref_milestone_reached: "Meilenstein wurde erreicht",
		workflow_pref_milestone_reached_hover: "Ich möchte benachrichtigt werden, wenn in einem von mir gestarteten Workflow ein Meilenstein erreicht wurde.",

		workflow_pref_tracker_notice: "Benachrichtigung zu Workflow-Tracker",
		workflow_pref_tracker_new_assignment: "Mir wurde ein neues Trackerelement zugeordnet",
		workflow_pref_tracker_new_assignment_hover: "Ich möchte benachrichtigt werden, wenn ein von mir überwachter Workflow gestartet wird.",
		workflow_pref_tracker_deadline_reminders: "Endtermin für Workflow steht bevor",
		workflow_pref_tracker_deadline_reminders_hover: "Ich möchte an einen Workflow erinnert werden, dessen Endtermin bevorsteht.",
		workflow_pref_tracker_deadline_expired: "Endtermin für Workflow wurde überschritten",
		workflow_pref_tracker_deadline_expired_hover: "Ich möchte benachrichtigt werden, wenn der Endtermin eines Workflows überschritten wurde.",
		workflow_pref_tracker_exception: "Workflowfehler aufgetreten",
		workflow_pref_tracker_exception_hover: "Ich möchte benachrichtigt werden, wenn eine Workflowausnahmebedingung oder ein Fehler auftritt.",
		workflow_pref_tracker_expired_deadline: "Schrittzeitlimit wurde überschritten",
		workflow_pref_tracker_expired_deadline_hover: "Ich möchte benachrichtigt werden, wenn das Zeitlimit eines von mir überwachten Schritts überschritten wird.",
		workflow_pref_tracker_milestone_reached: "Meilenstein wurde erreicht",
		workflow_pref_tracker_milestone_reached_hover: "Ich möchte benachrichtigt werden, wenn in einem von mir überwachten Workflow ein Meilenstein erreicht wurde.",

		workflow_pref_out_notice: "Abwesend",
		workflow_pref_proxy_user: "Arbeit delegieren an",
		workflow_pref_proxy_user_hover: "Verwenden Sie diese Option, um Ihre Arbeit automatisch an einen anderen Benutzer weiterzuleiten, beispielsweise wenn Sie abwesend sind oder Urlaub haben.",
		workflow_pref_workflow: "Workflow",
		workflow_pref_on: "Ein",
		workflow_pref_off: "Aus",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Workflow starten",
		transfered_workflows_dialog_info_text: "Wählen Sie einen zu startenden Workflow aus.",
		transfered_workflows_dialog_available_items_label: "Verfügbare Elemente:",
		transfered_workflows_dialog_select_button_label: "Starten",
		transfered_workflows_dialog_name_col_hdr: "Name",
		transfered_workflows_dialog_no_item_found: "Es wurden keine übertragenen Workflows gefunden.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Workflow übertragen",
		transfer_workflow_dialog_info_text: "Wählen Sie einen Workflow aus, der in das Workflowsystem übertragen werden soll.",
		transfer_workflow_dialog_use: "Diesen Workflownamen verwenden",
		transfer_workflow_dialog_use_another: "Anderen Workflownamen verwenden",
		transfer_workflow_dialog_in_use: "Der Workflowname lautet: ",
		transfer_workflow_dialog_transfer_button_label: "Übertragen",
		transfer_workflow_dialog_no_items_found: "Es wurden keine übertragenen Workflows gefunden.",
		transfer_workflow_dialog_use_hover: "Geben Sie den aktuellen Workflownamen aus der Workflowdefinition an.",
		transfer_workflow_dialog_another_hover: "Geben Sie einen anderen Workflownamen an oder verwenden Sie einen vorhandenen übertragenen Workflownamen wieder.",

		/*Search In control*/
		search_in_title: "Suchen in:",
		search_in_teamspaces: "Teamarbeitsbereiche",
		search_in_repositories: "Repositorys",
		search_in_thisteamspaces: "Dieser Teamarbeitsbereich",

		ajaxViewer_save: "Anmerkungen speichern",
		ajaxViewer_print: "Druckvorschau",
		ajaxViewer_firstPage: "Erste Seite",
		ajaxViewer_previousPage: "Vorherige Seite",
		ajaxViewer_nextPage: "Nächste Seite",
		ajaxViewer_lastPage: "Letzte Seite",
		ajaxViewer_unknownPageCount: "1 von ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} von ${1}",
		ajaxViewer_zoomOut: "Verkleinern",
		ajaxViewer_zoomIn: "Vergrößern",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "An Breite anpassen",
		ajaxViewer_fitHeight: "An Höhe anpassen",
		ajaxViewer_fitPage: "An Seite anpassen",
		ajaxViewer_rotate270: "Um 270 Grad drehen",
		ajaxViewer_rotate90: "Um 90 Grad drehen",
		ajaxViewer_rotate180: "Um 180 Grad drehen",
		ajaxViewer_darken: "Dunkler",
		ajaxViewer_lighten: "Heller",
		ajaxViewer_lessContrast: "Weniger Kontrast",
		ajaxViewer_moreContrast: "Mehr Kontrast",
		ajaxViewer_invert: "Umkehren",
		ajaxViewer_createHighlight: "Hervorheben",
		ajaxViewer_createNote: "Anmerkungen eingeben",
		ajaxViewer_editAnnotation: "Anmerkungseigenschaften bearbeiten",
		ajaxViewer_deleteAnnotation: "Anmerkung löschen",
		ajaxViewer_editAnnotationTitle: "Anmerkungseigenschaften bearbeiten",
		printableView_print: "Drucken",
		printableView_close: "Schließen",

		search_results_dropdown_button: "Ergebnisanzeige",
		search_results_columns_label: "Anzeige der Suchergebnisse",
		search_results_columns_description: "Wählen Sie die Eigenschaften aus, die in den Suchergebnissen angezeigt werden sollen.",
		search_results_sortby_label: "Sortieren nach:",
		search_results_order_label: "Sortierreihenfolge:",
		search_results_accending_label: "Aufsteigend",
		search_results_descending_label: "Absteigend",
		search_results_available_properties: "Verfügbar",
		search_results_selected_properties: "Ausgewählt",
		search_rank_property: "Einstufung (nur Textsuche)",
		search_name_attribute: "Name (${0})",
		search_results_summary_enabled_label: "Inhaltszusammenfassungen aktivieren (nur Textsuche)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Suchen",
		manage_teamspace_classes_tab_title: "Klassen",
		manage_teamspace_entry_templates_tab_title: "Erfassungsvorlagen",
		manage_teamspace_team_tab_title: "Team",
		manage_teamspace_roles_tab_title: "Rollen",
		manage_teamspace_dialog_title: "Teamarbeitsbereich ändern",
		manage_teamspace_button_label: "Teamarbeitsbereich ändern",
		manage_teamspace_team_pane_heading: "Team auswählen",
		manage_teamspace_classes_pane_heading: "Klassen auswählen",
		manage_teamspace_entry_templates_pane_heading: "Erfassungsvorlagen auswählen",
		manage_teamspace_no_rights_message: "Sie verfügen nicht über die Berechtigungen zum Ändern dieses Teamarbeitsbereichs.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Eigenschaften des Teamarbeitsbereichs",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Geben Sie die Eigenschaften an, die für Ordner und Dokumente in der Inhaltsliste angezeigt werden, wenn Benutzer den Teamarbeitsbereich durchsuchen. Sie können auch die Reihenfolge angeben, in der die Eigenschaften angezeigt werden.",
		teamspace_props_sel_cols_use_default_label: "Einstellungen für <b>Durchsuchen</b> für dieses Repository verwenden",
		teamspace_props_sel_cols_use_default_tooltip: "Verwenden Sie die Einstellungen, die im Verwaltungstool auf der Seite 'Durchsuchen' für dieses Repository angegeben wurden.",
		teamspace_props_general_tab_label: "Allgemein",
		teamspace_props_column_props_tab_label: "Angezeigte Eigenschaften",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Zu importierende Datei auswählen",
		teamspace_import_template_instruction: "Sie können die Exportdatei einer Teamarbeitsbereichsvorlage für den Import auswählen.",
		teamspace_import_template_button_label: "Importieren",
		teamspace_import_template_dialog_label: "Vorlage für Teamarbeitsbereich importieren",

		/* Annotation Dialog */
		annotationDlg_title: "Anmerkungen",
		annotationDlg_description: "Das ausgewählte Dokument verfügt über folgende Anmerkungen:",
		annotationDlg_msg_noAnnotations: "Es sind keine Anmerkungen vorhanden. Klicken Sie auf 'Hinzufügen', um eine Anmerkung zu erstellen.",
		annotationDlg_pageLabel: "Seite: ${pageNum}",
		annotationDlg_accLabel: "Zugriffstyp: ${accType}",
		annotationDlg_accLabel_public: "Öffentlich",
		annotationDlg_accLabel_private: "Privat",
		annotationDlg_accLabel_privateGroup: "Privat (${groupName})",
		annotationDlg_copiable: "Kann auf einen anderen Server kopiert werden",
		annotationDlg_cannotCopy: "Kann nicht auf einen anderen Server kopiert werden",
		annotationDlg_addButtonLabel: "Hinzufügen",

		/* Share Dialog */
		is_shared: "Freigegeben",
		is_share_pending: "Freigabe anstehend",
		share_title: "Box-Freigabe",
		share_instructions_new: "E-Mail mit einem Link für die Dateifreigabe senden. Jeder, der über diesen Link verfügt, kann auf die Datei zugreifen.",
		share_instructions_existing: "E-Mail mit einem Link für die Dateifreigabe senden. Jeder, der über diesen Link verfügt, kann auf die Datei zugreifen. Andere Personen können schon über diesen Link verfügen, wenn diese Datei bereits von jemand anderem freigegeben wurde.",
		share_instructions_another_version_shared: "E-Mail mit dem Link für die Dateifreigabe senden. Jeder, der über diesen Link verfügt, kann auf die Datei zugreifen. Andere Personen können schon über diesen Link verfügen, wenn eine andere Version der Datei bereits von jemand anderem freigegeben wurde.",
		share_buttonLabel_share: "Freigeben",
		share_email_addresses: "Senden an:",
		share_email_addresses_hover: "Wenn die Freigabe abgeschlossen ist, wird ein Link an diese E-Mail-Adressen gesendet. Wenn Sie hier nichts eingeben, wird der Link an Ihre eigene E-Mail-Adresse gesendet.",
		share_email_addresses_reshare_hover: "Wenn die Freigabe abgeschlossen ist, wird ein Link an diese E-Mail-Adressen gesendet. Wenn Sie hier nichts eingeben, wird keine E-Mail gesendet.",
		share_password: "Kennwort festlegen:",
		share_password_placeholder: "Optional",
		share_comments: "Nachricht:",
		share_comments_default: "Ich möchte meine Datei für Sie in Box freigeben.",
		share_myEmail: "Gesendet von:",
		share_expiration: "Ablauf für den Link festlegen:",
		share_expire: "Zugriff läuft ab:",
		share_expire_none: "Läuft nie ab",
		share_allowDownload: "Download zulassen",
		share_add: "Hinzufügen",
		share_advanced_instructions: "Die Einstellungen für Download, Ablauf und Kennwort gelten für die Dateifreigabe in Box.",
		share_advanced_existing_instructions: "Die Einstellungen für Download, Ablauf und Kennwort gelten für die Dateifreigabe in Box.",
		share_options_edit_warning: "Wichtig: Alle Änderungen an diesen Einstellungen wirken sich auf jeden aus, der über diesen Link verfügt, auch auf Personen, die den Link bereits haben.",
		share_link: "Link:",
		share_email_addresses_placeholder: "E-Mail-Adressen",
		share_email_address_placeholder: "E-Mail-Adresse",
		share_email_address_invalid: "Geben Sie eine gültige E-Mail-Adresse ein.",
		share_cannot_share_with_self: "Sie können Dateien nicht für sich selbst freigeben. Geben Sie einen anderen Benutzer an.",
		share_selected_version_with_minor_warning_hover: "Version ${0} des Dokuments ist freigegeben. Sie haben Version ${1} ausgewählt.<br><br><b>Warnung</b>: Wenn Sie Version ${1} freigeben, kann niemand Version ${2} freigeben, außer Sie löschen die Freigabe für Version ${1}.",
		share_selected_version_hover: "Version ${0} des Dokuments ist freigegeben. Sie haben Version ${1} ausgewählt.",
		share_selected_version_message: "Wichtig: Version ${0} des Dokuments ist freigegeben. Sie haben Version ${1} ausgewählt.",
		share_different_version_message: "Wichtig: Sie haben Version ${1} ausgewählt, Version ${0} des Dokuments ist jedoch bereits freigegeben.  Sie können Version ${1} nur dann freigeben, wenn Sie zuerst die vorhandene Freigabe löschen. Sie können stattdessen aber auch den Link zur Version ${0} freigeben.",
		share_version_message: "Wichtig: Version ${0} des Dokuments ist freigegeben. Wählen Sie aus, welche Version Sie freigeben wollen.",
		share_version_new: "Version ${0} freigeben",
		share_version_new_p8_hover: "Bei Freigabe dieses Dokuments wird ein bestimmter Versionslink nur zur ausgewählten Version erstellt.<br><br>Wenn ein Dokument bereits freigegeben ist, gilt:<ul><li>Sie können eine neuere Version freigeben und der Link leitet dann zu dieser neueren Version weiter.</li><li>Sie können eine frühere Version nur dann freigeben, wenn Sie zuerst die vorhandene Freigabe löschen.</li></ul>",
		share_version_new_cm_hover: "Bei Freigabe dieses Dokuments wird ein bestimmter Versionslink nur zur ausgewählten Version erstellt.<br><br>Wenn ein Dokument bereits freigegeben ist, gilt:<ul><li>Sie können eine neuere Version freigeben und der Link leitet dann zu dieser neueren Version weiter.</li><li>Sie können keine frühere Version freigeben.</li></ul>",
		share_version_update: "Version ${0} freigeben (Freigabeoptionen aktualisieren).",
		share_version_update_p8_hover: "Bei Freigabe dieses Dokuments wird der Link nur zu der bestimmten Version beibehalten.<br><br>Wenn ein Dokument bereits freigegeben ist, gilt:<ul><li>Sie können eine neuere Version freigeben und der Link leitet dann zu dieser neueren Version weiter.</li><li>Sie können eine frühere Version nur dann freigeben, wenn Sie zuerst die vorhandene Freigabe löschen.</li></ul>",
		share_version_update_cm_hover: "Bei Freigabe dieses Dokuments wird der Link nur zu der bestimmten Version beibehalten.<br><br>Wenn ein Dokument bereits freigegeben ist, gilt:<ul><li>Sie können eine neuere Version freigeben und der Link leitet dann zu dieser neueren Version weiter.</li><li>Sie können keine frühere Version freigeben.</li></ul>",
		share_version_change_to_current: "Version ${0} freigeben (Freigabe mit der ausgewählten Version aktualisieren).",
		share_version_change_to_current_p8_hover: "Bei Freigabe dieses Dokuments wird der Link aktualisiert, sodass er nur auf die ausgewählte Version verweist.<br><br>Wenn ein Dokument bereits freigegeben ist, gilt:<ul><li>Sie können eine neuere Version freigeben und der Link leitet dann zu dieser neueren Version weiter.</li><li>Sie können eine frühere Version nur dann freigeben, wenn Sie zuerst die vorhandene Freigabe löschen.</li></ul>",
		share_version_change_to_current_cm_hover: "Bei Freigabe dieses Dokuments wird der Link aktualisiert, sodass er nur auf die ausgewählte Version verweist.<br><br>Wenn ein Dokument bereits freigegeben ist, gilt:<ul><li>Sie können eine neuere Version freigeben und der Link leitet dann zu dieser neueren Version weiter.</li><li>Sie können keine frühere Version freigeben.</li></ul>",
		share_repository: "Repository für Dateifreigaben",
		share_repository_hover: "Wenn das gewünschte Box-Repository nicht angezeigt wird, können Sie ein neues Box-Repository auf der Seite 'Repositorys' hinzufügen.",
		share_options: "Freigabeoptionen",
		unshare_confirm: "Wenn Sie die Freigabe löschen, werden alle Freigabelinks unterbrochen, auch die Freigabelinks, die bereits vorher von anderen Benutzern gesendet wurden. Alle anderen Benutzer, die das Dokument freigeben wollen, müssen das Originaldokument auswählen und es erneut freigeben.<br><br>Wollen Sie die Freigabe wirklich löschen?",
		unshare_button: "Box-Freigabe löschen",
		admin_share: "Box-Freigabeservices:",
		admin_share_hover: "Benutzern das Freigeben eines Dokuments aus jedem Repository ermöglichen, für das die Box-Freigabe aktiviert ist. Zur Freigabe eines Dokuments gehört das Kopieren der Datei in Box, das Erstellen eines Links und das Senden des Links in einer E-Mail.",
		admin_my_email_modifiable: "Benutzern ermöglichen, die Absender-E-Mail-Adresse zu ändern",
		admin_my_email_modifiable_hover: "Für die Box-Freigabe ist die E-Mail-Adresse des Benutzers standardmäßig schreibgeschützt und wird aus einer Zuordnung von Benutzern und E-Mail-Adressen bezogen, die Box-Benutzeraccounts darstellen.<br><br>Wählen Sie diese Option aus, um Benutzern beim Freigeben das Bearbeiten ihrer E-Mail-Adresse zu ermöglichen. Hierbei wird die Gültigkeit der E-Mail-Adresse allerdings nicht überprüft.",
		admin_repos_admin_user: "Freigabeadministrator:",
		admin_repos_admin_user_hover: "Legen Sie den Freigabeadministrator fest, wenn auf Ihrem Desktop Box-Freigabeservices aktiviert sind und dieses Box-Repository als das Repository für Dateifreigaben ausgewählt ist.<br><br>Klicken Sie auf 'Festlegen' und melden Sie sich mit einem gültigen Box-Administratoraccount bei Box an.<br><br>Der Freigabeadministrator muss ein Box-Benutzer mit Administratorberechtigung sein, für den unbegrenzter Speicherplatz in Box konfiguriert ist.",
		admin_repos_admin_user_not_set_warning: "Der Box-Administrator ist für das ausgewählte Repository nicht konfiguriert.<br><br>Box-Freigabeservices bleiben so lange inaktiviert, bis Sie den Box-Administrator für das ausgewählte Repository festgelegt haben, oder ein anderes Box-Repository auswählen, für das der Box-Administrator konfiguriert ist.<br><br>Sie können den Box-Administrator im Abschnitt für die Box-Freigabeservices auf der Seite 'Allgemein' für das Repository festlegen.",
		admin_share_not_configured_warning: "Bevor Sie Box-Freigabeservices verwenden können, müssen Sie zuerst ein Box-Repository mit Serverauthentifizierung hinzufügen und auswählen.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online-Konfiguration",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Geben Sie an, ob Benutzer, die auf diesen Desktop zugreifen, die Möglichkeit erhalten sollen, ihre Office-Dokumente mithilfe von Office Online Server zu bearbeiten.",		
		admin_office_online_allow_collaborative_editing: "Bereichsübergreifende Bearbeitung zulassen",
		admin_office_online_allow_collaborative_editing_hover: "Zulassen, dass mehrere Benutzer am selben Dokument arbeiten. Wählen Sie diese Option ab, wenn Sie die Bearbeitung von Dokumenten auf einen Benutzer beschränken wollen.",
		admin_office_online_repository_not_set_warning: "Bevor Sie den Office Online-Service aktivieren können, müssen Sie zunächst den Service auf einem Repository aktivieren und die URL für Microsoft Office Online Server angeben. Klicken Sie auf <b>Repositorys</b>, wählen Sie ein Repository aus und aktivieren Sie dann den Service auf der Registerkarte <b>Edit-Integration</b>. Klicken Sie auf <b>Einstellungen > Allgemein</b> und geben Sie die URL für Microsoft Office Online Server ein.",
		admin_settings_office_online_server_enable_hover: "Geben Sie an, ob Sie Office Online Server zum Arbeiten mit Office-Dokumenten verwenden wollen.",
		admin_office_online_server_url: "URL für Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Geben Sie die URL an, über die andere Anwendungen mit Office Online Server kommunizieren können. Die URL hat das Format http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Geprüft",
	    admin_office_online_server_Failed: "<b>Fehlgeschlagen</b>",

		admin_repcfg_office_online_service_p8_hover: "Zum Initialisieren des Repositorys für die Verwendung von Office Online Server können Sie die ursprüngliche Vorlagendatei für jede Office-Anwendung hinzufügen. Wenn keine Vorlage angegeben ist, wird die Standardvorlage verwendet.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server-Integration",
		admin_repcfg_office_online_service_url_not_set_warning: "Bevor Sie Office Online Server aktivieren können, müssen Sie zunächst die URL für Microsoft Office Online Server angeben. Klicken Sie auf <b>Einstellungen > Allgemein</b> und geben Sie die URL ein.",
		admin_repcfg_office_online_word_template_name: "Word-Standardvorlage",
		admin_repcfg_office_online_excel_template_name: "Excel-Standardvorlage",
		admin_repcfg_office_online_powerpoint_template_name: "PowerPoint-Standardvorlage",
		admin_repcfg_office_online_blank_template_description: "Dies ist die Standardvorlage, die verwendet wird, wenn Sie keine eigene Vorlage hinzufügen.",
		/* Edit Service settings */
		admin_icn_edit_title: "Konfiguration bearbeiten",	
	    admin_icn_edit_files_cleanup_interval: "Bereinigungsintervall für temporäre Dateien (in Tagen):",
	    admin_icn_edit_files_cleanup_interval_hover: "Sie können festlegen, wie lange temporäre Dateien auf dem ICN Edit-Client beibehalten werden.  Die Standardzeit ist 20 Tage. Das Maximum ist 20 Tage. Die Mindestzeit ist 1 Tag.",
	    admin_icn_edit_service_integration: "Edit Service-Integration",
	    admin_icn_edit_service_integration_intro: "Edit Service ermöglicht Benutzern das einfache Hinzufügen oder Bearbeiten von Dateien in den auf ihren Computern installierten nativen Apps.<br><br><b>Wichtig:</b> Wenn Sie Edit Service aktivieren, müssen Sie Ihre Repository-Konfiguration speichern, bevor Sie die vordefinierten Kategorien bearbeiten können.",
		admin_icn_edit_service: "Edit Service:",
		admin_icn_edit_enable_hover: "Damit Edit Service verwendet werden kann, ist Folgendes erforderlich:<ul><li>Aktivieren Sie den Service im Repository</li><li>Aktivieren Sie den Service auf den Desktops in Ihrer Umgebung</li><li>Installieren Sie den IBM Content Navigator Edit-Client auf Benutzerworkstations.</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Aktivieren",
		admin_icn_edit_disable: "Inaktivieren",
		admin_icn_edit_create_new_category: "Neue Kategorie",
		admin_icn_edit_delete_category: "Kategorie löschen",
		admin_icn_edit_edit_category: "Kategorie bearbeiten",
		admin_icn_edit_disable_category: "Kategorie inaktivieren",
		admin_icn_edit_enable_category: "Kategorie aktivieren",
		admin_icn_edit_new_category_dialog_title: "Neue Kategorie",
		admin_icn_edit_edit_category_dialog_title:"Kategorie bearbeiten",
		admin_icn_edit_new_category_dialog_instructions: "Mithilfe einer Dokumentkategorie können Sie Vorlagen bestimmten MIME-Typen für Edit Service zuweisen. Sie können beispielsweise einer Gruppe von Vorlagen PDF-Dateien zuweisen, sodass Benutzer Vorlagen anwenden können, wenn sie Dateien über den IBM Content Navigator Edit-Client hinzufügen oder bearbeiten. <br><br><b>Wichtig:</b> Sie müssen Ihre Repository-Konfiguration speichern, bevor Sie der von Ihnen erstellten Kategorie Vorlagen hinzufügen können. ",
		admin_icn_edit_edit_category_dialog_instructions: "Sie müssen Ihre Repository-Konfiguration speichern, bevor Sie dieser Kategorie Vorlagen zuweisen können. ",
		admin_icn_edit_delete_category_dialog_instructions: "Wollen Sie diese Kategorie und alle ihr zugewiesenen Vorlagen löschen?<br><br><b>Wichtig:</b> Ihre Änderungen werden erst permanent, wenn Sie die Änderungen im Repository gespeichert haben. ",
		admin_icn_edit_category_label: "Kategorie: ",
		admin_icn_edit_category_discription_label:"Beschreibung: ",
		admin_icn_edit_template_column_head:"Vorlagenname",
		admin_icn_edit_category_duplicate_error_message: "Eine Kategorie mit dieser ID ist bereits vorhanden. ",
		admin_icn_edit_word_category_description: "Diese Kategorie definiert die für Microsoft Word-Dokumente in Edit Service verfügbaren Vorlagen. ",
		admin_icn_edit_excel_category_description: "Diese Kategorie definiert die für Microsoft Excel-Dokumente in Edit Service verfügbaren Vorlagen. ",
		admin_icn_edit_powerpoint_category_description: "Diese Kategorie definiert die für Microsoft PowerPoint-Dokumente in Edit Service verfügbaren Vorlagen. ",

		icn_edit_add_template_dialog_title:"Vorlage für ${0} hinzufügen",
		icn_edit_add_template_only_one_file_error: "Sie können nur eine Datei auswählen.",
		icn_edit_add_template_file_type_error: "Sie müssen eine gültige Vorlagendatei für ${0} angeben.<br><br>Das ausgewählte Dokument hat den MIME-Typ ${1}.<br><br>Gültige MIME-Typen: ${2}.",
		icn_edit_change_template_dialog_title: "${0}-Vorlage bearbeiten",
		icn_edit_action_in_new_menu_name:"${0}-Dokument",
		icn_edit_action_in_new_menu_submenu_oo_name: "mit Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "mit Desktop-Apps",
		icn_edit_new_document_dialog_title: "Neues Dokument: ${0}",
		icn_edit_new_document_dialog_intro: "Erstellen Sie ein neues ${0}-Dokument und fügen Sie es dem Repository hinzu. Das Dokument wird mit der ausgewählten Edit Service-Vorlage erstellt.", 
		icn_edit_select_edit_service_template: "Vorlage auswählen",
		icn_edit_edit_service_template: "Edit Service-Vorlage:",
		icn_edit_new_document_category_no_templates_message:"In dieser Kategorie gibt es keine Vorlagen. Bitten Sie Ihren Administrator, dieser Kategorie Vorlagen hinzuzufügen.",
		icn_edit_installer: "IBM Content Navigator Edit - Installationsprogramm",
		admin_icn_cm_classes_and_roles_settings: "Klassen- und Rolleneinstellungen",
		admin_repcfg_classes_and_roles_warning: "Zum Angeben von Klassen und Benutzern oder Benutzergruppen mit der Berechtigung zum Erstellen, Bearbeiten und Verwenden von Vorlagen oder zum Erstellen von Entwürfen von Dokumenten, die mit Office Online Service und Edit Service verwendet werden können.",
		admin_repcfg_classes_and_roles_click_warning: "Klicken Sie hier.",
		/* Edit Service settings END */
		share_no_my_email_error: "Bei der Identifizierung der für das Freigeben des Dokuments erforderlichen E-Mail-Adresse ist ein Problem aufgetreten.",
		share_no_my_email_error_explanation: "Sie haben sich mit der Benutzer-ID ${0} angemeldet, die Benutzer-ID ist jedoch keiner E-Mail-Adresse zugeordnet.",
		share_no_my_email_error_userResponse: "Wiederholen Sie den Anmeldeversuch oder melden Sie sich mit einer anderen Benutzer-ID an. Wenn das Problem bestehen bleibt, melden Sie diesen Fehler dem Systemadministrator.",
		share_no_my_email_error_adminResponse: "Die Benutzer-ID ${0} ist keiner E-Mail-Adresse zugeordnet und der Desktop ${1} erlaubt Benutzern nicht, die E-Mail-Adresse für den Box-Freigabeservice zu bearbeiten.<br><br>Probieren Sie eine der folgenden Lösungen:<br>Stellen Sie sicher, dass das Plug-in für die E-Mail-Zuordnung registriert ist.<br>Stellen Sie sicher, dass die Datei emailMappingPlugin.json die Benutzer-ID ${0} und die E-Mail-Adresse des Benutzers enthält, und erstellen, konfigurieren und registrieren Sie anschließend das Plug-in für die E-Mail-Zuordnung.<br>Wenn Sie das Plug-in für die E-Mail-Zuordnung oder das FileNet P8-E-Mail-Adressenverzeichnis nicht verwenden und stattdessen den Benutzern die Möglichkeit geben wollen, ihre eigene E-Mail-Adresse beim Freigeben eines Dokuments einzugeben, können Sie die Desktopeinstellungen für die Box-Freigabeservices so modifizieren, dass Benutzer den Link über eine andere E-Mail-Adresse senden können.",
		share_no_my_email_error_0: "Benutzer-ID",
		share_no_my_email_error_1: "Desktopname",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Eine neuere Version dieses Dokuments ist bereits freigegeben, sodass Sie die ausgewählte Version dieses Dokuments nicht freigeben können.",
		share_later_version_shared_error_explanation: "Sie können keine frühere Version eines bereits freigegebenen Dokuments freigeben.",
		share_later_version_shared_error_userResponse: "Wenn Sie den Link für eine neuere Version des Dokument senden wollen, müssen Sie die neuere Version zuerst auswählen und dann die Aktion 'Freigeben' verwenden.<br><br>Zum Freigeben der ausgewählten Version des Dokuments müssen Sie die Freigabe der neueren Version des Dokuments zuerst löschen.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Neue Nachricht",
		email_from: "Von:",
		email_to: "An:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Geben Sie eine gültige E-Mail-Adresse ein.",
		email_subject: "Betreff:",
		email_message: "Nachricht:",
		email_message_placeholder: "Nachricht hinzufügen",
		email_attachments: "Anhänge:",
		email_links: "Links:",
		email_send: "Senden",
		email_dont_send: "Nicht senden",
		email_subject_reminder: "Betrefferinnerung",
		email_subject_reminder_confirm: "Wollen Sie diese Nachricht ohne Betreffangabe senden?",
		email_missing_from_error: "Bei der Identifizierung der für das Senden der E-Mail erforderlichen Absender-E-Mail-Adresse ist ein Problem aufgetreten.",
		email_missing_from_error_explanation: "Sie haben sich mit der Benutzer-ID ${0} angemeldet, die Benutzer-ID ist jedoch keiner E-Mail-Adresse zugeordnet.",
		email_missing_from_error_userResponse: "Wiederholen Sie den Anmeldeversuch oder melden Sie sich mit einer anderen Benutzer-ID an. Wenn das Problem bestehen bleibt, melden Sie diesen Fehler dem Systemadministrator.",
		email_missing_from_error_adminResponse: "Die Benutzer-ID ${0} ist keiner E-Mail-Adresse zugeordnet und der Desktop ${1} erlaubt Benutzern nicht, die Absender-E-Mail-Adresse zu bearbeiten.<br><br>Probieren Sie eine der folgenden Lösungen:<br>Stellen Sie sicher, dass das Plug-in für die E-Mail-Zuordnung registriert ist.<br>Stellen Sie sicher, dass die Datei emailMappingPlugin.json die Benutzer-ID ${0} und die E-Mail-Adresse des Benutzers enthält, und erstellen, konfigurieren und registrieren Sie anschließend das Plug-in für die E-Mail-Zuordnung.<br>Wenn Sie das Plug-in für die E-Mail-Zuordnung oder das FileNet P8-E-Mail-Adressenverzeichnis nicht verwenden und stattdessen den Benutzern die Möglichkeit geben wollen, ihre eigene E-Mail-Adresse beim Senden einer E-Mail einzugeben, können Sie die E-Mail-Einstellungen für Desktops so modifizieren, dass Benutzer die Absender-E-Mail-Adresse ändern können.",
		email_missing_from_error_0: "Benutzer-ID",
		email_missing_from_error_1: "Desktopname",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Das Dokument kann nicht geöffnet werden.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator kann keine Verbindung zum IBM Content Navigator Edit-Client herstellen.",
		open_edit_document_with_native_application_error_userResponse: "Installieren und starten Sie den IBM Content Navigator Edit-Client auf Ihrer Workstation. Versuchen Sie anschließend erneut, das Dokument zu öffnen.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Das Dokument kann nicht geöffnet werden.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator kann keine Verbindung zum IBM Content Navigator Edit-Client herstellen.",
		connect_to_the_streamline_service_error_userResponse: "Installieren und starten Sie den IBM Content Navigator Edit-Client auf Ihrer Workstation. Versuchen Sie anschließend erneut, das Dokument zu öffnen.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator ist nicht ordnungsgemäß für das Freigeben von Dokumenten konfiguriert.",
		share_not_configured_error_explanation: "Das Box-Freigabefeature muss ordnungsgemäß konfiguriert werden, bevor Sie Dokumente freigeben können.",
		share_not_configured_error_userResponse: "Bitten Sie Ihren Administrator, das Box-Freigabefeature zu konfigurieren.",
		share_not_configured_error_adminResponse: "Die folgenden Elemente müssen vor dem Freigeben von Dokumenten konfiguriert werden:<ul><li>Der Task-Manager-Service muss in den Einstellungen des Verwaltungstools aktiviert sein.</li><li>Die Task-Manager-Verbindungs-ID muss im Repository konfiguriert sein.</li><li>Die Freigabe muss im Repository aktiviert sein.</li><li>Ein Box-Repository muss zur Freigabe im Desktop ausgewählt sein.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Die Eigenschaftsänderungen wurden nicht für die neue Version gespeichert",
		checkin_cors_save_attributes_error_explanation: "Die Version wurde erstellt, aber die Eigenschaftsänderungen wurden nicht gespeichert. Das Dokument ist möglicherweise bereits ausgecheckt.",
		checkin_cors_save_attributes_error_userResponse: "Entsperren Sie das Dokument und aktualisieren Sie die Eigenschaften über den Kontextmenüpunkt 'Eigenschaften'.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Die Eigenschaftsänderungen wurden nicht für das neue Dokument gespeichert",
		add_cors_save_attributes_error_explanation: "Das Dokument wurde erstellt, aber die Eigenschaftsänderungen wurden nicht gespeichert.",
		add_cors_save_attributes_error_userResponse: "Aktualisieren Sie die Eigenschaften über den Kontextmenüpunkt 'Eigenschaften'.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Das Dokument kann nicht geöffnet werden.",		
		edit_document_using_edit_service_error_explanation: "Das Dokument kann in Edit Service nicht geöffnet werden.",
		edit_document_using_edit_service_error_userResponse: "Bitten Sie Ihren Administrator, die Edit Service-Integration zu aktualisieren.<br><br> Wenn der Benutzer über Edit Service auf dieses Dokument zugreifen muss, rufen Sie die Seite 'Edit-Integration' für das Repository auf und aktualisieren Sie die Edit Service-Integration so, dass die Klasse in der Liste der Klassen für das Ändern der Edit Service-Unterstützung enthalten ist.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Das Dokument kann nicht geöffnet werden.",		
		edit_document_is_editing_by_oos_error_explanation: "Das Dokument wird vom Office Online-Service verwendet.",
		edit_document_is_editing_by_oos_error_userResponse: "Sie müssen das Dokument im Office Online-Service speichern und schließen, bevor Sie es in Edit Service öffnen können.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "CORS-Uploads (Cross-Origin Resource Sharing) aktivieren",

		/* Email Settings */
		admin_email_settings: "E-Mail-Einstellungen:",
		admin_email_settings_hover: "Geben Sie den Typ des E-Mail-Service an, den die Benutzer verwenden sollen. Wenn Sie den HTML-basierten E-Mail-Service aktivieren, können Sie den Benutzern die Möglichkeit geben, ihre Absender-E-Mail-Adresse zu ändern. Wenn Sie den Java-basierten E-Mail-Service verwenden wollen, muss Ihr Browser Java unterstützen.",
		admin_email_use_service: "HTML-basierten E-Mail-Service verwenden",
		admin_email_use_applet: "Java-basierten E-Mail-Service verwenden",
		admin_email_can_modify_from: "Benutzern ermöglichen, die Absender-E-Mail-Adresse zu ändern",
		admin_email_can_modify_from_hover: "Standardmäßig kann die Absender-E-Mail-Adresse nicht geändert werden und wird aus einer Zuordnung von Benutzern und E-Mail-Adressen bezogen, die Benutzeraccounts darstellen.<br><br>Wählen Sie diese Option aus, um Benutzern beim Senden einer E-Mail das Bearbeiten ihrer E-Mail-Adresse zu ermöglichen. Hierbei wird die Gültigkeit der E-Mail-Adresse allerdings nicht überprüft.",
		admin_email_use_from_as_sender: "Absender-E-Mail-Adresse als Absender der E-Mail verwenden",
		admin_email_use_from_as_sender_hover: "Standardmäßig wird eine gültige Absender-E-Mail-Adresse in der E-Mail eines Benutzers verwendet. Diese E-Mail-Adresse wird von der Mailsitzung CNMailSession auf dem Anwendungsserver definiert. Wählen Sie diese Option aus, um anzugeben, dass die E-Mail-Adresse des Benutzers in der E-Mail verwendet werden soll.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Neue Anmerkungen",
		addAnnotationDlg_labelContents: "Inhalt:",
		addAnnotationDlg_labelAccess: "Zugriff:",
		addAnnotationDlg_labelPublic: "Öffentlich",
		addAnnotationDlg_labelPrivate: "Privat",
		addAnnotationDlg_labelPrivateGroup: "Privat für Gruppe",
		addAnnotationDlg_labelGroup: "Gruppe",
		addAnnotationDlg_labelCopiable: "Diese Anmerkung kann auf einen anderen Server kopiert werden.",
		addAnnotationDlg_buttonLabel_save: "Speichern",

		/* Skip navigation */
		skipNavigation_title_main: "Zum Hauptinhalt springen",
		skipNavigation_title_menu: "Zu Navigationsschaltflächen springen",
		skipNavigation_label_main: "Zum Hauptinhalt springen",
		skipNavigation_label_menu: "Zu Navigationsschaltflächen springen",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Teamarbeitsbereiche verwalten",
		manage_teamspace_pane_instance_hdr: "Teamarbeitsbereiche",
		manage_teamspace_pane_template_hdr: "Vorlagen",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Vorwärts blättern",
		scroll_back: "Rückwärts blättern",

		breadcrumb_separator_open: "Knoten öffnen",
		breadcrumb_separator_close: "Knoten schließen",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Es wurde kein Element ausgewählt.",

		/* eds */
		eds_url: "URL des externen Datenservice:",
		eds_request_timeout: "Zeitlimit für Serviceanforderung (Sekunden):",
		eds_is_required: "Verhindern, dass Benutzer Aktionen ausführen, durch die die Werte der Eigenschaften geändert werden, falls EDS nicht verfügbar ist",

		/* eforms */
		eform_signing_pane_welcome: "Formular unterzeichnen",
		eform_signing_button_label: "Unterzeichnen",
		eform_signing_pane_delete: "Signatur löschen",
		eform_signing_button_label_delete: "Löschen",

		xtplugin_server_label: "Server-URL von IBM FileNet Workplace XT",
		xtplugin_server_hover: "Geben Sie die URL des Servers ein, auf dem IBM FileNet Workplace XT implementiert ist, beispielsweise http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "Server-URL von IBM eClient",
		ecplugin_server_hover: "Geben Sie die URL des Servers ein, auf dem IBM eClient implementiert ist, beispielsweise http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Aktionen, die für eine große Anzahl von Elementen ausgeführt werden, können lange dauern. Möchten Sie fortfahren?",
		large_number_actions_continue_button: "Fortsetzen",

		large_items_actions_confirmation_question: "Aktionen, die für große Elemente ausgeführt werden, können lange dauern. Möchten Sie fortfahren?",

		viewer_editproperties_title: "Bestätigung",
		viewer_editproperties_title_warning: "Warnung",
		viewer_editproperties_save: "Speichern",
		viewer_editproperties_next: "Weiter",
		viewer_editproperties_reset: "Zurücksetzen",
		viewer_editproperties_reset_hover: "Nicht gespeicherte Daten werden auf die zuvor gespeicherten Werte zurückgesetzt.",
		viewer_editproperties_saveandgetnext: "Speichern und nächstes Dokument abrufen",
		viewer_editproperties_saveandgetnext_hover: "Das nächste Dokument wird automatisch abgerufen, nachdem die Änderungen gespeichert wurden.",
		viewer_editproperties_prompt_save_changes: "Sie haben die Eigenschaften des folgenden Dokuments geändert<br>${0}<br><br>Wollen Sie die Änderungen speichern?",
		viewer_editproperties_prompt_discard_changes: "Sie haben die Eigenschaften des folgenden Dokuments geändert<br>${0}<br><br>Mindestens eine der Eigenschaften hat jedoch einen ungültigen Wert, sodass die Änderungen nicht gespeichert werden können. Sie können entweder die ungültigen Werte korrigieren oder Ihre Änderungen verwerfen.<br>Wollen Sie die im Eigenschaftsfenster angezeigten ungültigen Werte korrigieren?",
		viewer_comments_prompt_discard_changes: "Sie haben die Kommentare geändert. Wollen Sie die Änderungen speichern?",
		viewer_notelogs_prompt_discard_changes: "Sie haben die Notizprotokolle geändert. Wollen Sie die Änderungen speichern?",
		social_collaborated_version: "Version: ${0}",
		social_link_label: "Wer...",

		// social comments
		comments: "Kommentare",
		comments_add_hint: "Drücken Sie die Eingabetaste, um Ihre Kommentare hinzuzufügen.",
		comments_hint: "Geben Sie Ihre Kommentare ein.",
		comments_label: "Zum Speichern Ihrer Kommentare die Eingabe- oder Tabulatortaste drücken. Durch Drücken der Taste Esc wird der Vorgang abgebrochen.",
		comments_delete_confirmation: "Soll der ausgewählte Kommentar gelöscht werden?",
		comments_number: "Kommentare: ${0}",
		comments_save_new: "Sie haben die Kommentare geändert. Wollen Sie das Fenster ohne Speichern der Änderungen schließen?",

		notelogs: "Notizprotokolle",
		notelogs_download: "Herunterladen",
		notelog_modify: "Änderungen speichern",
		notelog_edit: "Notizprotokoll bearbeiten",
		notelog_create_newVersion: "Neue Notizprotokollversion erstellen",
		notelog_add_hint: "Geben Sie Ihre Kommentare ein und drücken Sie die Eingabetaste, um sie hinzuzufügen.",
		notelog_hint: "Drücken Sie 'Umschalttaste+Eingabetaste' für einen Zeilenvorschub.",
		notelog_add_placeholder: "Drücken Sie die Eingabetaste, um dem Notizprotokoll einen Kommentar hinzuzufügen.",
		notelog_save_new: "Sie haben das Notizprotokoll geändert. Wollen Sie das Fenster ohne Speichern der Änderungen schließen?",

		// P8 markings related
		cannot_remove_markings: "Sie haben nicht die Berechtigung zum Entfernen der Markierungswerte: {0}",

		// download count
		downloadcount: "Downloads: {0}",
		downloadcount_single: "1 Download",
		downloadcount_multiple: "{0} Downloads",
		downloadcount_none: "Wurde noch nicht heruntergeladen",

		// recommendations
		recommendations: "Empfehlungen: {0}",
		recommendations_recommend: "Empfehlen",
		recommendations_unrecommend: "Nicht empfehlen",
		recommendations_you: "Sie empfehlen das",
		recommendations_you_and_another: "Sie und 1 weitere Person empfehlen das",
		recommendations_you_and_others: "Sie und {0} andere empfehlen das",
		recommendations_another: "1 Person empfiehlt das",
		recommendations_others: "{0} Personen empfehlen das",
		recommendations_none: "Wurde noch nicht empfohlen",

		// tags
		tags: "Tags: ${0}",
		tags_delete: "${0} löschen",
		tags_none: "Es gibt keine anzuzeigenden Tags.",
		tags_add: "Tags hinzufügen:",
		tags_hint: "Drücken Sie die Eingabetaste, um Ihre Tags hinzuzufügen.",
		tags_hover_help: "Geben Sie einen Tag oder eine Liste der Tags an, der/die für die Suche nach Dokumenten mit demselben Tag verwendet werden können. Sie können die Tags mit einem Komma (,), Semikolon (;) oder Leerzeichen trennen.",
		tags_hover_help_box: "Geben Sie einen Tag oder eine durch Kommas getrennte Liste der Tags an, der/die für die Suche nach Dokumenten mit demselben Tag verwendet werden können.",
		tags_no_access: "Sie haben nicht die entsprechenden Berechtigungen zum Hinzufügen von Tags.",

		//task scheduler pane
		taskPane_tooltip: "Ansicht 'Asynchrone Tasks' öffnen",
		taskPane_tree: "Navigationsstruktur des Taskfensters",
		taskPane_allTasks: "Alle Tasks",
		taskPane_scheduledTasks: "Geplante Tasks",
		taskPane_recurringTasks: "Wiederholt auftretende Tasks",
		taskPane_inProgressTasks: "In Bearbeitung befindliche Tasks",
		taskPane_completedTasks: "Abgeschlossene Tasks",
		taskPane_failedTasks: "Fehlgeschlagene Tasks",
		taskPane_disabledTasks: "Inaktivierte Tasks",
		taskPane_statusScheduled: "Geplant",
		taskPane_statusInProgress: "In Bearbeitung",
		taskPane_statusCompleted: "Abgeschlossen",
		taskPane_statusFailed: "Fehlgeschlagen",
		taskPane_statusPaused: "Angehalten",
		taskPane_noItemSelected: "Kein Element ausgewählt",
		taskSchedulerPane_scheduleInformation: "Planinformationen",
		taskSchedulerPane_loginInformation: "Anmeldeinformationen",
		taskSchedulerPane_startImmediately: "Unverzüglich starten",
		taskSchedulerPane_recurrence: "Wiederholung",
		taskSchedulerPane_interval: "Intervall",
		taskSchedulerPane_scheduleReport: "Bericht planen",
		taskSchedulerPane_nameHoverHelp: "Geben Sie den Namen der Task ein.",
		taskSchedulerPane_descriptionHoverHelp: "Geben Sie die Beschreibung für die Task ein. Die Beschreibung hilft Ihnen bei der Unterscheidung der Tasks.",
		taskSchedulerPane_startTimeHoverHelp: "Geben Sie an, wann die Task ausgeführt werden soll. Wenn die Task jetzt ausgeführt werden soll, wählen Sie 'Unverzüglich starten' aus.",
		taskSchedulerPane_recurrenceHoverHelp: "Sie können die Task so planen, dass sie periodisch wiederholt wird.",
		taskSchedulerPane_endTimeHoverHelp: "Geben Sie an, wann die Ausführung der Task gestoppt werden soll. Die Task wird von der geplanten Startzeit bis zur geplanten Endzeit ausgeführt.",
		taskSchedulerPane_usernameHoverHelp: "Bei sich wiederholenden Tasks müssen Sie einen Benutzernamen eingeben, um den Service für die Authentifizierung zu aktivieren, wenn die Task ausgeführt wird.",
		taskSchedulerPane_passwordHoverHelp: "Bei sich wiederholenden Tasks müssen Sie das Kennwort des angegebenen Benutzers eingeben, um den Service für die Authentifizierung zu aktivieren, wenn die Task ausgeführt wird.",
		taskSchedulerPane_notification: "Benachrichtigung",
		taskSchedulerPane_emailAddress: "E-Mail-Adresse",
		taskSchedulerPane_emailAddressHoverHelp: "Geben Sie die E-Mail-Adresse ein, unter der Sie Benachrichtigungen über den Status der Task empfangen wollen.",
		taskSchedulerPane_intervalHoverHelp: "Geben Sie das Intervall an, in dem die sich wiederholende Task ausgeführt wird. Sie können das Intervall in Stunden, Tagen, Wochen oder Monaten festlegen.",
		taskSchedulerPane_scheduledStartTime: "Geplante Startzeit",
		taskSchedulerPane_startTime: "Startzeit",
		taskSchedulerPane_title: "Planen",
		taskSchedulerPane_runNow: "Jetzt ausführen",
		taskSchedulerPane_runOnce: "Einmal ausführen",
		taskSchedulerPane_runAtSchedule: "Nach Zeitplan ausführen",
		taskSchedulerPane_repeats: "Wiederholungen",
		taskSchedulerPane_repeatsEvery: "Wiederholung alle",
		taskSchedulerPane_hourly: "Stündlich",
		taskSchedulerPane_daily: "Täglich",
		taskSchedulerPane_weekly: "Wöchentlich",
		taskSchedulerPane_monthly: "Monatlich",
		taskSchedulerPane_yearly: "Jährlich",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "D",
		taskSchedulerPane_wednesday: "M",
		taskSchedulerPane_thursday: "D",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Startdatum",
		taskSchedulerPane_after: "Nach",
		taskSchedulerPane_ending: "Enddatum",
		taskSchedulerPane_times: "Mal",
		taskSchedulerPane_days: "Tag(e)",
		taskSchedulerPane_hours: "Stunde(n) am Tag",
		taskSchedulerPane_interval: "Intervall",
		taskSchedulerPane_endingDays: "Wird beendet (in Tagen)",
		taskSchedulerPane_never: "Nie",
		taskSchedulerPane_categorization: "Kategorisierung",
		taskSchedulerPane_scheduleTask: "Task planen",
		taskInformationPane_details: "Details",
		taskInformationPane_errors: "Fehler",
		taskInformationPane_taskInstances: "Taskinstanzen",
		taskInformationPane_audits: "Prüfungen",
		taskInformationPane_results: "Ergebnisse",
		asyncTasks: "Asynchrone Tasks",

		//entry template pane
		search_all_entry_templates: "Alle Erfassungsvorlagen durchsuchen.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Gesamte Site anzeigen",
		mobilesite: "Mobile-Site anzeigen",
		profile: "Profil verwalten",
		office_template: "Office-Vorlage:",
		select_office_template: "Office-Vorlage auswählen",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Die ausgewählten Dokumente können nicht mit der Aktion 'Zusammenführen und teilen' im Viewer geöffnet werden.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Der für PDF- und TIFF-Dokumente konfigurierte Viewer unterstützt die Aktion 'Zusammenführen und teilen' nicht.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Bitten Sie den Administrator, einen Viewer für PDF- und TIFF-Dokumente zu konfigurieren, der die Aktion 'Zusammenführen und teilen' unterstützt, beispielsweise den Daeja ViewONE Virtual-Viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Die ausgewählten PDF-Dokumente können nicht mit der Aktion 'Zusammenführen und teilen' im Viewer geöffnet werden.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Der für PDF-Dokumente konfigurierte Viewer unterstützt die Aktion 'Zusammenführen und teilen' nicht.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Bitten Sie den Administrator, einen Viewer für PDF-Dokumente zu konfigurieren, der die Aktion 'Zusammenführen und teilen' unterstützt, beispielsweise den Daeja ViewONE Virtual-Viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Die ausgewählten TIFF-Dokumente können nicht mit der Aktion 'Zusammenführen und teilen' im Viewer geöffnet werden.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Der für TIFF-Dokumente konfigurierte Viewer unterstützt die Aktion 'Zusammenführen und teilen' nicht.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Bitten Sie den Administrator, einen Viewer für TIFF-Dokumente zu konfigurieren, der die Aktion 'Zusammenführen und teilen' unterstützt, beispielsweise den Daeja ViewONE Virtual-Viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Die ausgewählten Dokumente können nicht mit der Aktion 'Zusammenführen und teilen' im Viewer geöffnet werden.",
		document_builder_unsupported_documents_error_explanation: "Die Aktion 'Zusammenführen und teilen' kann nur mit PDF- und TIFF-Dokumenten verwendet werden.",
		document_builder_unsupported_documents_error_userResponse: "Wählen Sie unterstützte Dokumente aus und versuchen Sie es erneut.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Einige der ausgewählten Dokumente können nicht mit der Aktion 'Zusammenführen und teilen' im Viewer geöffnet werden.",
		document_builder_some_unsupported_documents_error_explanation: "Die Aktion 'Zusammenführen und teilen' kann nur mit PDF- und TIFF-Dokumenten verwendet werden, die aus demselben Repository geöffnet wurden.",
		document_builder_some_unsupported_documents_error_userResponse: "Die unterstützten Dokumente werden im Viewer geöffnet.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Beim Einchecken des geänderten Inhalts ist ein Fehler aufgetreten.",
		document_builder_checkin_failed_explanation: "Der Viewer hat beim Einchecken des geänderten Inhalts einen Fehler empfangen.",
		document_builder_checkin_failed_userResponse: "Bitten Sie den Systemadministrator, die Protokolldateien des Webanwendungsservers zu prüfen.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Das Dokument kann nicht geöffnet werden.",
		no_viewer_to_view_error_explanation: "Der Systemadministrator hat die Anzeige dieses Dokuments blockiert. Wenn Sie auf dieses Dokument zugreifen müssen, können Sie es herunterladen.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Der Inhalt konnte nicht erstellt werden.",
		document_build_failed_userResponse: "Bitten Sie den Systemadministrator, die Protokolldateien des Viewers zu prüfen.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Das Dokument konnte nicht im Modus 'Zusammenführen und teilen' geöffnet werden.",
		document_builder_open_failed_userResponse: "Bitten Sie den Systemadministrator, die Protokolldateien des Viewers zu prüfen.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Das System konnte nicht in den Modus 'Zusammenführen und teilen' wechseln.",
		document_builder_switch_failed_userResponse: "Bitten Sie den Systemadministrator, die Protokolldateien des Viewers zu prüfen.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumente",
		print_service_page_setup_tab_title: "Seite einrichten",
		print_service_OD_print_tab_title: "Druckeroptionen",
		print_service_status_merging: "Dokumente werden zusammengeführt...",
		print_service_status_converting: "Dokumente werden konvertiert...",
		print_service_status_formatting: "Dokument wird für den Druck formatiert...",
		admin_print_service_maximum_number_to_print: "Maximal Anzahl zum Drucken zulässiger Dokumente:",
		admin_print_service_maximum_size_to_print: "Maximales zum Drucken zulässiges Datenvolumen (in MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Geben Sie die maximale Anzahl Dokumente an, die Benutzer gleichzeitig drucken können. Der Standardwert für die maximal Anzahl ist 50. Wenn Sie die Anzahl der Druckdokumente nicht begrenzen wollen, setzen Sie diesen Grenzwert auf 0.",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Einschränkung:</b> Diese Einstellung wird von IBM Content Manager OnDemand nicht unterstützt.<br/><br/>Geben Sie das maximale Datenvolumen an, das mit dem IBM Daeja ViewONE-Druckservice gedruckt werden kann.<br /><br />Die Gesamtgröße der einzelnen ausgewählten Dokumente darf diesen Wert nicht überschreiten. <br/><br/>Der Standardgrenzwert ist 200 MB. Wird ein Grenzwert über 200 MB festgelegt, kann sich dies auf die Systemleistung auswirken. Wenn Sie die Gesamtgröße der Druckdokumente nicht begrenzen wollen, setzen Sie diesen Grenzwert auf 0. ",
		// error printing
		print_service_error_printing: "Beim Drucken ist ein Fehler aufgetreten.",
		print_service_error_printing_userResponse: "Bitten Sie den Systemadministrator, die Protokolldatei des Druckservice zu prüfen.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Die ausgewählten Dokumente sind zu groß, um gedruckt zu werden",
		print_service_max_content_error_explanation: "Die ausgewählten Dokumente überschreiten den Grenzwert von ${0} MB Daten. ",
		print_service_max_content_error_userResponse: "Wählen Sie weniger oder kleinere Dokumente aus und wiederholen Sie den Druckvorgang. Sie können auch den Systemadministrator bitten, die maximale Gesamtgröße der Elemente zu erhöhen, die gleichzeitig über den Desktop gedruckt werden können.",
		print_service_max_content_error_0: "Maximale_Elementgröße",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Die Elemente können nicht gedruckt werden.",
		print_service_max_number_selected_error_explanation: "Sie können bis zu ${0} Elemente gleichzeitig drucken. Sie versuchen, ${1} Elemente zu drucken. ",
		print_service_max_number_selected_error_userResponse: "Wählen Sie weniger Elemente aus und versuchen Sie erneut, die Elemente zu drucken. Sie können auch den Systemadministrator bitten, die maximale Anzahl der Elemente zu erhöhen, die gleichzeitig über den Desktop gedruckt werden können.",
		print_service_max_number_selected_error_0: "Maximale_Anzahl_Elemente",
		print_service_max_number_selected_error_1: "Anzahl_Elemente",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


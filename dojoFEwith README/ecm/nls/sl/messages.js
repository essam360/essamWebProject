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
		welcome_user: "Dobrodošli, ",
		about: "O programu",
		all: "Vse",
		help: "Pomoč",
		user_session: "Uporabniška seja",
		user_session_for: "Uporabniška seja za ${0}",
		user_session_for_with_container: "Uporabniška seja za ${0} (${1})",
		tools: "Orodja",
		login: "Prijava",
		logout: "Odjava",
		search: "Išči",
		saved_searches: "Shranjena iskanja",
		content_analytics: "Analiza vsebine",
		reset: "Ponastavi",
		reset_hover: "Morebitni neshranjeni podatki na vseh zavihkih bodo ponastavljeni na predhodno shranjene vrednosti.",
		reset_default: "Počisti vse",
		reset_default_hover: "Počisti polje Trenutna oznaka na vseh zavihkih.",
		locale: "Področne nastavitve:",
		up: "Gor",
		down: "Dol",
		restore: "Obnovi",
		maximize: "Maksimiraj",
		values_label: "Vrednosti",
		value_label: "Vrednost:",
		path_label: "Pot:",
		new_label: "Novo:",
		back_label: "Nazaj",
		clear: "Počisti",
		set: "Nastavi ...",
		browse: "Prebrskaj",
		work: "Delo",
		connect: "Poveži",
		documents: "Dokumenti:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM in IBM-ov logotip sta blagovni znamki družbe IBM Corporation, registrirani v številnih sodnih pristojnostih. Java in vse blagovne znamke ter logotipi na njeni podlagi so blagovne znamke ali registrirane blagovne znamke družbe Oracle in/ali njenih povezanih družb. Tehnologija Oracle Outside In Technology, vključena tukaj, je predmet licence za omejeno uporabo in jo je mogoče uporabljati samo v povezavi s to aplikacijo. Licenca za ta program je izdana v skladu z določbami licenčne pogodbe, ki jo dobite s programom.  Licenčno pogodbo najdete v mapi programskega imenika ali v knjižnici, ki je določena kot \"License\" ali \"Non_IBM_License\", ali pa je na voljo v tiskani obliki. Prosimo, da pred uporabo programa natančno preberete to pogodbo. Z uporabo programa se šteje, da soglašate s pogoji v pogodbi. ",
		edit: "Uredi",
		cancel: "Prekliči",
		close: "Zapri",
		close_all: "Zapri vse zavihke",
		close_others: "Zapri druge zavihke",
		ok: "V redu",
		yes: "Da",
		no: "Ne",
		open: "Odpri",
		refresh: "Osveži",
		refresh_cabinets: "Osveži vse predalnike",
		delete_text: "Izbriši",
		export_config: "Izvozi konfiguracijo",
		description: "Opis",
		true_label: "Resnično",
		false_label: "Neresnično",
		error: "Napaka",
		error_reference_hover: "Za več informacij o tej napaki glejte spletno mesto www.ibm.com.",
		url_label: "URL",
		default_label: "Privzeto",
		ibm_label: "IBM",
		light_label: "Svetlo",
		dark_label: "Temno",
		save: "Shrani",
		saveAs: "Shrani kot ...",
		save_and_close: "Shrani in zapri",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Brez",
		Name: "Ime",
		"${NAME}": "Ime",
		mime_type: "Tip MIME",
		mime_type_contains_label: "Tip MIME vsebuje",
		mime_type_header: "Tip MIME",
		mime_type_icon: "Ikona tipa MIME",
		casesearch: "Primer",
		item: "Postavka",
		no_mime_type: "Ta postavka ne vsebuje ničesar.",
		items_selected: "Izbranih je ${0} postavk.",
		requestor: "Zahteval",
		scheduledStartTime: "Načrtovani čas začetka",
		isRecurring: "Se ponavlja",
		weeks: "tednov",
		days: "dni",
		hours: "ur",
		endTime: "Čas konca",
		username: "Uporabniško ime",
		password: "Geslo",
		serverURL: "URL strežnika",
		enable: "Omogoči",
		disable: "Onemogoči",
		finish: "Dokončaj",
		previous: "Prejšnji",
		next: "Naslednji",
		schedule: "Razpored",
		removeFromThisList: "Odstrani s tega seznama",
		status: "Status",
		scheduledEndTime: "Terminirani čas konca",
		type: "Tip",
		mode: "Način",
		startTime: "Čas začetka",
		createdBy: "Ustvaril",
		nextScheduledTime: "Naslednji terminirani čas",
		id: "ID",
		duration: "Trajanje",
		repeatCycle: "Pogostost",
		taskTypeName: "Vrsta opravila",
		to: "do",
		filter: "Filter:",
		error_message: "Sporočilo o napaki",

        file_type: "Vrsta dokumenta",
        word_template_name: "Ime predloge Word",
        excel_template_name: "Ime predloge Excel",
        powerpoint_template_name: "Ime predloge PowerPoint",
        template_description: "Opis predloge",
        action_add_template: "Dodaj",
        action_change_template: "Uredi",      
        action_edit_template_properties: "Lastnosti",
        add_presentation_template: "Dodaj predstavitveno predlogo",
    	add_spreadsheet_template: "Dodaj predlogo za preglednice",
    	add_doc_template: "Dodaj predlogo dokumenta",    	
    	file_type_doc_hover: "Podati morate veljavno datoteko predloge dokumenta za urejanje besedila.<br><br>Veljavni tipi MIME: ${0}",
    	file_type_doc_error: "Podati morate veljavno datoteko predloge dokumenta za urejanje besedila.<br><br>Izbrani tip MIME dokumenta: ${0}<br><br>Veljavni tipi MIME: ${1}",
    	file_type_presentation_hover: "Podati morate veljavno datoteko predstavitvene predloge.<br><br>Veljavni tipi MIME: ${0}",
    	file_type_presentation_error: "Podati morate veljavno datoteko predstavitvene predloge.<br><br>Izbrani tip MIME dokumenta: ${0}<br><br>Veljavni tipi MIME: ${1}",
    	file_type_spreadsheet_hover: "Podati morate veljavno datoteko predloge za preglednice.<br><br>Veljavni tipi MIME: ${0}",
    	file_type_spreadsheet_error: "Podati morate veljavno datoteko predloge za preglednice.<br><br>Izbrani tip MIME dokumenta: ${0}<br><br>Veljavni tipi MIME: ${1}",
    	office_online_only_one_template_error: "Izberete lahko le eno datoteko.",
    	change_presentation_template: "Uredi predlogo predstavitve",
    	change_spreadsheet_template: "Uredi predlogo preglednice",
    	change_doc_template: "Uredi predlogo dokumenta",
    	change_button: "Uredi",
	    new_document_dialog_doc_title: "Nov dokument",
	    new_document_dialog_presentation_title: "Nova predstavitev",
	    new_document_dialog_spreadsheet_title: "Nova preglednica",
	    new_document_dialog_title_label: "Naslov:",
	    new_document_dialog_title_hover: "Vnesite naslov tega dokumenta.",
	    new_document_dialog_title_missing_message: "Podati morate naslov.",
	    office_online_save_before_adding_templates_title: "Shrani spremembe v repozitoriju",
	    office_online_save_before_adding_templates_error: "Predlog zbirke Office ne morete dodati, dokler ne shranite izvedenih sprememb v repozitoriju. Kliknite <b>Shrani in zapri</b>, nato pa ponovno odprite repozitorij in dodajte predloge zbirke Office.",
	    copy_to_OOS_dialog_doc_title: "Nov dokument",
	    office_online_checkin_cancelcheckout_message: "Ta dokument se ureja v Microsoft Office Online. Ne morete prijaviti dokumenta ali preklicati odjave, ko je odprt v Microsoft Office Online.",
	    new_document_classification: "Klasifikacija:",
	    new_document_classification_help: "Ponastavi razred, lastnosti in nadrejeno mapo, če obstaja, izvirnega dokumenta. Ko dodajate dokument s pomočjo predloge vnosa, bo samodejno izbrana predloga vnosa izvirnega dokumenta, če obstaja. Lastnosti izvirnega dokumenta se uporabljajo kot privzete vrednosti, mapa in razred, ki sta podana za predlogo vnosa, pa se ohranita.",
		new_document_classification_use_source_document: "Uporabi izvirni dokument programa:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Ikona tipa ${0}",
		repository_name_and_type: "Ime in tip ${0}",
		select_class_label: "Izberi ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Pogled podrobnosti",
		detail_view_button: "Podrobnosti",
		magazine_view_button_tooltip: "Pogled skladišča",
		magazine_view_button: "Skladišče",
		filmstrip_view_button_tooltip: "Pogled filmskega traku",
		filmstrip_view_button: "Filmski trak",

		magazine_view_show: "Pokaži v pogledu skladišča",
		detail_view_show: "Pokaži v pogledu podrobnosti",

		total_count_item: "postavka",
		total_count_items: "postavk",
		total_count_more_items: "Več kot ${0} postavk",

		extension_changed: "Pripona datoteke, ki ste jo izbrali, se ne ujema z izvirnikom.  Izberite drugo datoteko.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Izbrani prikazovalnik ne podpira vseh vrst datotek. Če shranite to preslikavo prikazovalnika, boste morda pri ogledu dokumentov naleteli na težave. Priporočamo, da izberete prikazovalnik, ki podpira vse vrste datotek, ko je izbrana možnost Vse vrste datotek.<br><br><b>Namig:</b> naslednji prikazovalniki podpirajo vse vrste datotek:<ul><li>Prikazovalnik aplikacijskih programčkov</li><li>Prikazovalnik AJAX</li><li>Pretvorba HTML</li><li>Pretvorba PDF</li><li>Spletni brskalnik</li></ul>",
		file_type_any: "Vse vrste datotek",
		file_type_any_hover: "To možnost izberite, če si želite z izbranim prikazovalnikom ogledati vse dokumente, ne glede na vrsto datoteke. To možnost podpirajo naslednji prikazovalniki:<br><br><ul><li>Prikazovalnik aplikacijskih programčkov</li><li>Prikazovalnik AJAX</li><li>Pretvorba HTML</li><li>Pretvorba PDF</li><li>Spletni brskalnik</li></ul><br><br><b>Pomnite:</b> če želite večino časa uporabljati določene prikazovalnike, morate morebitne preslikave, ki jih ustvarite in ki uporabljajo to možnost, premakniti na konec preslikave prikazovalnika. ",
		file_type_input: "Nova vrsta datoteke:",

		mime_type_input: "Nov tip MIME:",
		mime_type_input_invalid: "Nov tip MIME ne sme vsebovati naslednjih znakov: ,",
		mime_type_available: "Razpoložljivi tipi MIME",
		mime_type_selected: "Izbrani tipi MIME",
		file_type_input: "Nova vrsta datoteke:",
		file_type_input_invalid: "Nova vrsta datoteke ne sme vsebovati naslednjih znakov: ,",
		file_type_available: "Razpoložljive vrste datotek",
		file_type_selected: "Izbrane vrste datotek",
		file_type_header: "Vrsta datoteke",
		viewer: "Prikazovalnik:",
		viewer_viewer: "Prikazovalnik",
		viewer_view: "Ogled",
		viewer_preview: "Predogled",
		viewer_merge_and_split: "Spajanje in razdelitev",
		viewer_heading: "${0}-${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Samo predogled",
		preview_only_label: "(predogled)",
		preview_only_hover: "Ta preslikava prikazovalnika se uporabi samo, ko uporabnik klikne <b>Predogled</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Ta repozitorij ne podpira brskanja. Izberite drug repozitorij.",

		repository_community_teamspace_message: "Drug repozitorij je že določen kot repozitorij knjižnice skupnosti. Če želite še naprej uporabljati obstoječi repozitorij kot repozitorij knjižnice skupnosti, označite <b>Ne</b>, preden shranite spremembe, da preprečite, da obstoječega repozitorija ne bo zamenjal ta repozitorij.",

		favorites_empty: "Nimate še nobenih priljubljenih.",
		syncItems_empty: "Nimate še nobenih sinhroniziranih datotek",

		root_folder_id: "ID korenske mape",
		unified_searches: "Hkratno iskanje v več repozitorijih",
		max_results: "Število rezultatov:",
		direct_retrieve_enabled: "Neposredna pridobitev:",
		itemTypesToDisplay: "Vrste postavk za prikaz",
		allItemTypes: "Vse vrste postavk",
		include_attr_group_name: "Opisi skupin atributov v imenih za prikaz atributov:",
		admin_repcfg_include_attr_group_name_hover: "Opis skupine atributov je privzeto vključen v imenih za atribute skupine atributov. Tako lahko uporabniki pri delu z atributi vidijo, kateri skupini atributov pripada določen atribut skupine atributov.<br>Uporabniki lahko na primer za nek atribut skupine atributov vidijo naslednje ime: Nastavitve dokumenta.Vrsta dokumenta.<br><br>Če to možnost onemogočite, se za ime atributa skupine atributov uporabi samo opis atributa.<br>Uporabniki bodo na primer videli to ime: Vrsta dokumenta.<br><br>Brez opisa skupine atributov uporabniki morda ne bodo mogli ugotoviti, ali je Vrsta dokumenta enostaven atribut ali atribut skupine atributov.",
		documentItemTypesOnly: "Samo vrste postavk dokumentnega modela",
		object_store: "Simbolično ime shrambe predmetov:",
		object_store_display_name: "Ime za prikaz shrambe predmetov:",
		teamspaceUpgradeMsg: "Vaši timski prostori bodo posodobljeni, ko shranite konfiguracijo repozitorija. Če imate več timskih prostorov, lahko posodobitev traja več minut.",
		synchUpgradeMsg: "Sinhronizacijski modul za ta repozitorij bo posodobljen, ko boste shranili konfiguracijo repozitorija.",
		protocol: "Protokol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID repozitorija CMIS:",
		cmis_url: "URL dokumenta vezne storitve CMIS AtomPub:",
		trace_level: "Raven sledenja",
		trace_dir: "Imenik sledenja",
		temp_dir: "Začasni imenik",
		show_document_location: "Pokaži lokacijo dokumenta",
		max_folders: "Največje število map",
		afp_conversion: "Pretvorba AFP",
		line_conversion: "Pretvorba vrstičnih podatkov",
		max_hits: "Največje število zadetkov",
		folder_search_expresssion: "Iskalni izraz mape",
		max_item_types: "Največje število tipov postavk",
		max_worklists: "Največje število delovnih seznamov",
		update_storage_collection: "Posodobi zbirko shrambe",
		include_mime_types_in_search_results: "Vključi tipe MIME v rezultate iskanja",
		object_type: "Vrsta predmeta",
		object_type_document: "Dokumenti",
		object_type_folder: "Mape",
		file_label: "Datoteka:",
		plugin_jarfile_path_label: "Pot datoteke JAR:",
		plugin_classfolder_path_label: "Pot razredne datoteke:",
		plugin_classname_label: "Ime razreda:",
		plugin_id_label: "ID vtičnika:",
		class_label: "Razred",
		configuration: "Konfiguracija",
		connect_repository: "Poveži ...",
		server_type: "Tip strežnika",
		timeout_in_seconds: "Časovna omejitev (v sekundah):",
		default_search_template: "Privzeto iskanje",
		search_filtered_properties: "Lastnosti, ki omogočajo iskanje",
		property_contains_label: "Lastnost vsebuje",
		class_contains_label: "Razred vsebuje",
		search_filtered_operators: "Operatorji iskanja",
		default_search_results: "Rezultati iskanja",
		data_type: "Vrsta podatkov",
		status_bar: "Vrstica stanja",
		operators_for: "Operatorji za:",
		currentUser: "Trenutni uporabnik",
		nameContains: "Ime vsebuje",
		searchFor: "Poišči",
		server_autentication: "Preverjanje pristnosti strežnika (OAuth 2.0 z JWT)",
		standard_authentication: "Standardno preverjanje pristnosti (OAuth2.0, 3-koračno)",
		developer_authentication: "Preverjanje pristnosti razvijalca",
		enterprise_id: "ID podjetja:",
		public_key_id: "ID javnega ključa:",
		private_key_path: "Pot datoteke zasebnega ključa:",
		server_user_email: "E-poštni naslov uporabnika strežnika",

		filter_builder_tooltip: "Določite filter",

		// Launch bar
		launchbar_home: "Odpri začetno stran",
		launchbar_favorites: "Odpri priljubljene",
		launchbar_browse: "Odpri pogled brskanja",
		launchbar_browse_popup: "Odpri pojavni seznam brskanja",
		launchbar_search: "Odpri pogled iskanja",
		launchbar_search_popup: "Odpri pojavni seznam iskanja",
		launchbar_teamspaces: "Odpri pogled timskih prostorov",
		launchbar_teamspaces_popup: "Odpri pojavni seznam timskih prostorov",
		launchbar_work: "Odpri pogled dela",
		launchbar_work_popup: "Odpri pojavni seznam dela",
		launchbar_entry_templates: "Odpri pogled predlog vnosa",
		launchbar_entry_templates_popup: "Odpri pojavni seznam predlog vnosa",
		launchbar_admin: "Odpri skrbniški pogled",

		admin_sync_server: "Sinhronizacijske storitve",
		admin_settings: "Nastavitve",
		admin_interface_text: "Oznake",
		admin_interface_text_desktop: "Namizje:",
		admin_desktops: "Namizja",
		admin_repositories: "Repozitoriji",
		admin_mobile: "Mobilno",
		admin_menus: "Meniji",
		admin_reason_codes: "Razlogi redakcij",
		admin_plugins: "Vtičniki",
		admin_plugins_state_enabled: "Vtičnik je omogočen",
		admin_plugins_state_disabled: "Vtičnik je onemogočen",
		admin_plugins_version: "Različica:",
		admin_plugins_version_heading: "Različica",
		admin_plugins_icon: "Ikona vtičnika",
		admin_viewer_mapping_icon: "Ikona preslikave prikazovalnika",
		admin_viewer_defs: "Preslikave prikazovalnikov",
		admin_viewer_dialog_title: "Preslikava",
		admin_viewer_dialog_new_title: "Nova preslikava",
		admin_viewer_dialog_instructions: "Preslikava podaja, kateri prikazovalnik se uporablja za datoteke v repozitoriju. Ustvarite lahko več preslikav in podate različne prikazovalnike za različne vrste datotek. Za definiranje preslikave lahko uporabite vrsto MIME ali pripono datoteke. Preslikave s priponami datotek se bodo preslikale na imena datotek. Preslikava, ki ima vrsto datoteke nastavljeno na gif, bo na primer preslikana na imena datotek s pripono .gif",
		admin_desktop_viewer_defs: "Preslikava prikazovalnika:",
		admin_desktop_viewer_defs_hover: "Preslikava prikazovalnika podaja, kateri prikazovalnik se uporablja za odpiranje različnih vrst dokumentov v repozitoriju.<br><br>V razdelku <b>Preslikave prikazovalnika</b> skrbniškega orodja lahko ustvarite nove preslikave prikazovalnika.",
		admin_desktops_used: "Uporabljeno na namizjih",
		admin_desktop_additional_settings: "Dodatne nastavitve:",
		admin_default_desktop: "Nastavi kot privzeto namizje",
		admin_default_desktop_header: "Privzeto namizje",
		admin_layout_tab_title: "Postavitev",
		admin_desktop_icon: "Ikona namizja",

		// Themes
		admin_themes: "Teme",
		admin_theme_list_instructions: "Ustvarite lahko temo, da lažje prilagodite spletni odjemalec za organizacijo. Če morate uporabiti različne barve, pisave ali logotipe za različna namizja v vašem okolju, lahko ustvarite več tem.<br><br>Ko ustvarite temo, jo uveljavite za namizje tako, da konfigurirate temo na zavihku <b>Videz</b> namizja.",
		admin_theme_instructions: "Ustvarite temo za nadzor barv in pisav, prikazanih v spletnem odjemalcu. Poleg tega lahko uporabite temo, da spremenite logotip, ime aplikacije in besedilo, zaščiteno z avtorskimi pravicami, ki je prikazano na strani za prijavo in v pasici.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nova tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Ali želite izbrisati izbrane teme?\n${0} tem je izbranih.",
		admin_theme_color: "Barva",
		admin_theme_text: "Besedilo",
		admin_theme_solid: "Enobarvno",
		admin_theme_gradient: "Preliv",
		admin_theme_box: "Box",
		admin_theme_color_label: "Barva ${0}:",
		admin_theme_name_invalid: "Ime teme ne sme vsebovati nobenega od teh znakov: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID teme mora biti unikaten in ga ne morete spremeniti, ko temo shranite.<br><br>ID lahko vsebuje samo črkovno-številčne znake.",
		admin_theme_name_hover: "Ime ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Samodejen",
		admin_theme_logo_url_hover: "Vnesite URL datoteke logotipa. Če je logotip v istem spletnem aplikacijskem strežniku kot spletni odjemalec, vnesite relativni URL, na primer: /mycustomizations/banner_logo.png<br><br>Priporočljivo je, da ima logotip prosojno ozadje.",
		admin_theme_color_palette_title_heading: "Barvna paleta",
		admin_theme_color_palette_help_text: "Ustvarite barvno paleto za temo z uporabo šestnajstiške vrednosti ali izbirnika barve. Dodate lahko toliko barv, kot želite.",
		admin_theme_color_add_button_label: "Dodaj barvo",
		admin_theme_color_remove_button_label: "Odstrani barvo",
		admin_theme_global_title_heading: "Elementi celotne aplikacije",
		admin_theme_global_font: "Družina pisav:",
		admin_theme_global_font_hover: "Označite pisavo za uporabo v spletnem odjemalcu. Pisave so navedene v prednostnem vrstnem redu; naslednja pisava na seznamu se uporabi samo, če prejšnja pisava ni nameščena v odjemalskem računalniku.",
		admin_theme_global_framework_color_label: "Barva ogrodja:",
		admin_theme_global_framework_color_hover: "Izberite barvo za naslednje elemente:<ul><li>Naslovne vrstice v pogovornih oknih</li><li>Barva za označevanje na vrhu izbranega zavihka</li><li>Ikone pogleda seznama vsebine (pogled podrobnosti, pogled skladišča, pogled filmskega traku)</li></ul><br>Ta barva se ne uporablja za ločila med razdelki spletnega odjemalca. Če želite spremeniti barvo ločevalnih črt, ustvarite vtičnik, da omogočite datoteko CSS po meri.",
		admin_theme_color_global_toolbar: "Barva globalne orodne vrstice:",
		admin_theme_color_global_toolbar_hover: "Če vključite globalno orodno vrstico v spletni odjemalec, izberite barvo orodne vrstice.<br><br><b>Nasvet:</b> Orodna vrstica je prikazana v pasici na vrhu spletnega odjemalca, tako da naj barva orodne vrstice dopolnjuje barvo pasice.",
		admin_theme_global_selected_color: "Izberite barvo postavke:",
		admin_theme_global_selected_color_hover: "Izberite barvo za uporabo pri označenih postavkah v drevesu brskanja, v drevesu iskanja in seznamu vsebine.<br><br>Barva lebdenja (barva je uporabljena, ko uporabniki zadržijo kazalec nad postavko) izhaja iz te barve.",
		admin_theme_global_link_color: "Barva povezave:",
		admin_theme_global_link_color_hover: "Izberite barvo za uporabo vseh URL-jev, ki jih je mogoče klikniti, v spletnem odjemalcu. Ta barva se na primer uporablja v povezavah 'preberite več', ki se prikazujejo skozi spletnega odjemalca.",
		admin_theme_login_title_heading: "Elementi prijavne strani",
		admin_theme_page_background_label: "Barva ozadja prijavne strani:",
		admin_theme_login_page_background_hover: "Izberite barvo za prikaz za podoknom prijave.",
		admin_theme_login_pane_background_label: "Barva ozadja podokna prijave:",
		admin_theme_login_pane_background_hover: "Izberite prikazno barvo za podokno prijave. Ta barva naj dopolnjuje barvo ozadja prijavne strani.",
		admin_theme_text_color: "Barva besedila:",
		admin_theme_login_pane_text_color_hover: "Izberite barvo za besedilo podokna prijave. Ta barva se uporabi za pozdravno besedilo in oznake polja. Ta barva bo jasnejša v primerjavi z barvo ozadja podokna prijave.",
		admin_theme_copyright_text: "Besedilo, zaščiteno z avtorskimi pravicami:",
		admin_theme_copyright_text_hover: "Podajte, ali želite prikazati besedilo, zaščiteno z avtorskimi pravicami, na prijavni strani.",
		admin_theme_copyright_selection_IBM: "Avtorske pravice IBM",
		admin_theme_copyright_selection_none: "Brez besedila, zaščitenega z avtorskimi pravicami",
		admin_theme_banner_title_heading: "Elementi pasice",
		admin_theme_text_icons_color: "Barva besedila in ikon:",
		admin_theme_icon_color_label: "Barva ikon:",
		admin_theme_shadow_label: "Osenčeno:",
		admin_theme_banner_text_icons_hover: "Izberite barvo za besedilo in ikone v pasici. Ta barva bo jasnejša v primerjavi z barvo ozadja pasice.",
		admin_theme_banner_product_name_label: "Ime izdelka:",
		admin_theme_banner_product_name_hover: "Ko ustvarite namizje, lahko podate ime po meri, ki bo prikazano za aplikacijo. Če imena po meri ne podate, bo za ime izdelka uporabljen IBM Content Navigator. Podajte, ali želite uporabiti ime aplikacije, določeno na namizju, ali sliko na mestu imena.",
		admin_theme_banner_product_name_desktop_defined_label: "Uporabi ime z namizja",
		admin_theme_banner_product_name_image: "Uporabi logotip po meri (URL)",
		admin_theme_background_color_label: "Barva ozadja:",
		admin_theme_style_label: "Slog:",
		admin_theme_banner_color_hover: "Izberite barvo, ki jo želite uporabiti za pasico na vrhu aplikacije.<br><br><b>Nasvet: </b>prepričajte se, ali je barva besedila na pasici čitljiva na barvi pasice v ozadju.",
		admin_theme_buttons_title_heading: "Gumbi",
		admin_theme_navigation_title_heading: "Elementi krmarjenja",
		admin_theme_navigation_icon_selected_label: "Izbrana barva ikone:",
		admin_theme_navigation_background_hover: "Izberite barvo, ki jo želite uporabiti za barvo ozadja vrstice za krmarjenje po funkcijah.",
		admin_theme_navigation_icon_color_hover: "Izberite barvo, ki jo želite uporabiti za ikone vrstice za krmarjenje po funkcijah. Če uporabljate privzeto postavitev na namizju, se mora ta barva razlikovati od ozadja spustnega menija funkcij. Če uporabljate klasično postavitev na namizju, se mora ta barva razlikovati od ozadja vrstice za krmarjenje po funkcijah.",
		admin_theme_navigation_icon_selected_hover: "Izberite barvo, ki jo želite uporabiti za izbrano funkcijo v vrstici za krmarjenje po funkcijah. Ta barva naj dopolnjuje barvo ikon in barvo vrstice za krmarjenje po funkcijah.<br><br>Če uporabljate klasično postavitev na namizju, se ta barva uporablja kot barva, s katero se obarva element, ko nad njega premaknete kazalec miške v vrstici za krmarjenje po funkcijah.",
		admin_theme_button_background_color_hover: "Izberite barvo, ki jo želite uporabiti za ozadje gumbov.",
		admin_theme_button_style_hover: "Izberite slog gumba.",
		admin_theme_button_text_icon_color_hover: "Izberite barvo, ki jo želite uporabiti za besedilo in slike na gumbih.",
		admin_theme_no_logo_label: "Brez logotipa",
		admin_theme_custom_logo_label: "Logotip po meri (URL)",
		admin_theme_banner_type: "Slog polnila pasice:",
		admin_theme_banner_type_hover: "Podajte, ali naj bo pasica enobarvna ali naj se barva preliva. Če podate pasico s prelivanjem barve, je barva, ki jo izberete kot barvo pasice, najtemnejša barva v pasici.<br><br><b>Nasvet: </b>prepričajte se, ali je barva besedila na pasici čitljiva na barvi pasice v ozadju.",
		admin_theme_icon: "Ikona teme",
		admin_theme_buttons_and_links_title_heading: "Gumbi, polja in povezave",
		admin_theme_button_style_label: "Slog gumbov:",
		admin_theme_theme_style_label: "Slog teme:",
		admin_theme_theme_style_hover: "Izberite slog, na katerem bo temeljila tema. Slog lahko med ustvarjanjem in urejanjem teme kadar koli spremenite. Ko izvedete spremembo z enega sloga na drugega, se nastavitve teme ponastavijo na privzete vrednosti.",
		admin_theme_accent_color_label: "Barva poudarkov:",
		admin_theme_accent_color_hover: "Izberite barvo, ki jo želite uporabiti za vrstico na vrhu pogovornega okna in za vrtljivi gumb za nalaganje.",
		admin_theme_global_toolbar_text_color_label: "Barva besedila globalne orodne vrstice:",
		admin_theme_global_toolbar_text_color_hover: "Če vključite globalno orodno vrstico v spletni odjemalec, izberite barvo, ki bo uporabljena za besedilo v orodni vrstici.",
		admin_theme_banner_text_color_hover: "Izberite barvo za besedilo v pasici.",
		admin_theme_banner_icon_color_hover: "Izberite barvo za ikone v pasici.",
		admin_theme_button_color_label: "Barva:",
		admin_theme_button_color_hover: "Izberite barvo za naslednje elemente:<ul><li>Naslovne vrstice v pogovornih oknih</li><li>Barva za označevanje na vrhu izbranega zavihka</li><li>Ikone pogleda seznama vsebine (pogled podrobnosti, pogled skladišča, pogled filmskega traku)</li><li>Gumbi, polja in povezave</li></ul>Barva, ki se uporablja, ko uporabnik premakne kazalec miške nad gumb, temelji na tej barvi. Ta barva se ne uporablja za ločila med razdelki spletnega odjemalca. Če želite spremeniti barvo ločevalnih črt, ustvarite vtičnik, da omogočite datoteko CSS po meri.",
		admin_theme_theme_style_col_header: "Slog teme",

		admin_syncserver_consistency_checker: "Preverjevalnik skladnosti:",
		admin_syncserver_consistency_checker_hover: "Zaženite preverjevalnik skladnosti in zagotovite, da baze podatkov sinhronizacijske storitve vsebujejo trenutne informacije o statusu vsake postavke v strežniku. Tako na primer zaženite preverjevalnik skladnosti po izpadu baze podatkov sinhronizacijske storitve, da pridobite informacije o dokumentih, ki so bili med izpadom posodobljeni v repozitoriju.",
		admin_syncserver_consistency_checker_button: "Zaženi preverjevalnik skladnosti",
		admin_syncserver_consistency_checker_started: "Zagnano:",
		admin_syncserver_consistency_checker_ended: "Končano:",
		admin_syncserver_consistency_checker_duration: "Trajanje:",
		admin_syncserver_consistency_checker_items_processed: "Postavke sinhronizacije v obdelavi:",
		admin_syncserver_consistency_checker_items_processed_success: "Obdelane postavke sinhronizacije:",
		admin_syncserver_consistency_checker_items_discovered: "Odkrite nove postavke repozitorija:",
		admin_syncserver_consistency_checker_change_updates: "Skupne posodobitve:",
		admin_syncserver_consistency_checker_state: "Stanje:",
		admin_syncserver_consistency_checker_state_done: "Zaključeno",
		admin_syncserver_consistency_checker_state_running: "V teku",
		admin_syncserver_consistency_checker_user: "Predložil v obdelavo:",
		admin_syncserver_consistency_checker_scheduled: "Načrtovano:",

		admin_syncserver_dbcleanup: "Čiščenje baze podatkov",
		admin_syncserver_dbcleanup_hover: "Zaženite orodje za čiščenje baze podatkov, da odstranite neuporabljene naprave in postavke, ki se več ne sinhronizirajo iz baze podatkov.",
		admin_syncserver_dbcleanup_button: "Čiščenje baze podatkov",
		admin_syncserver_dbcleanup_state_done: "Zaključeno",
		admin_syncserver_dbcleanup_state_running: "V teku",
		admin_syncserver_dbcleanup_started: "Zagnano:",
		admin_syncserver_dbcleanup_ended: "Končano:",
		admin_syncserver_dbcleanup_state: "Stanje:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Izbrisani repozitoriji:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Izbrisane sinhronizirane postavke:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Izbrisane naprave:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Pretečene naprave:",

		admin_syncserver_publicSyncUrl: "Javni URL sinhronizacijskih storitev:",
		admin_syncserver_publicSyncUrl_hover: "Podajte URL, prek katerega lahko repozitoriji komunicirajo s sinhronizacijskimi storitvami IBM Content Navigator. Privzeta oblika zapisa naslova URL je http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Nastavitve odjemalca za sinhronizacijo:",
		admin_syncserver_managed_hover: "Uporabniki ne morejo spreminjati teh nastavitev v odjemalcu IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Ravni map, ki jih želite sinhronizirati",
		admin_syncserver_managed_subfolder_hover: "Če uporabnik sinhronizira mapo, podajte največje število map, ki bodo sinhronizirane. Če na primer uporabnik poda 3 ravni map, se bo sinhronizirala mapa, ki jo uporabnik sinhronizira, in 2 ravni podmap.<br><br>Zagotovite, da je vaše okolje pripravljeno podpirati količino prometa sinhronizacij, ki jo ustvari ta nastavitev.",
		admin_syncserver_managed_subfolder_all: "Vse podmape",
		admin_syncserver_managed_subfolder_none: "Brez podmap",
		admin_syncserver_managed_subfolder_no_more: "Omejene ravni",
		admin_syncserver_managed_subfolder_levels: "mape",
		admin_syncserver_managed_schedule: "Urnik sinhronizacije",
		admin_syncserver_managed_schedule_hover: "Zagotovite, da je vaše okolje pripravljeno podpirati količino prometa sinhronizacij, ki jo ustvari razpored sinhronizacije.<br><br>Največji interval je 24 ur ali 1440 minut.<br><br>Uporabniki lahko preglasijo razpored sinhronizacije tako, da v odjemalcu kliknejo <b>Sinhroniziraj zdaj</b>.",
		admin_syncserver_managed_schedule_manual: "Ročna sinhronizacija",
		admin_syncserver_managed_schedule_continuous: "Neprekinjena sinhronizacija",
		admin_syncserver_managed_schedule_every: "Sinhronizacija v določenih časovnih intervalih",
		admin_syncserver_managed_schedule_minutes: "Minute",
		admin_syncserver_managed_schedule_hours: "ur",

		// redaction codes
		admin_new_reason_code: "Nov razlog redakcije",		
		admin_reason_code_name_invalid: "Ime razloga redakcije ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Opis ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Opis ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Ime ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Opis:",
		admin_reason_code_applications_hover: "Seznam aplikacij Datacap, ki se sklicujejo na ta razlog redakcije.",
		admin_reason_code_applications: "Aplikacije Datacap",
		admin_delete_confirmation_reason_codes: "Ali želite izbrisati izbrane razloge redakcij?",
		admin_delete_confirmation_reason_code: "Ali želite izbrisati izbrani razlog redakcije?",
		admin_reason_code_heading: "Razlog redakcije: <b>${0}</b>",
		admin_reason_code_list_instructions: "Razlogi redakcije nakazujejo razlog za zaščito občutljivih podatkov in jih zakrijejo. Vsak razlog določa vrsto občutljivih podatkov, ki so zakriti pred splošnimi uporabniki.",
		admin_reason_code_instructions: "Razlog redakcije lahko ustvarite za vsako vrsto občutljivih podatkov. Ta razlog lahko nato uporabite v pravilniku redakcije, da določite, kdo si lahko ogleduje podatke in kdo lahko ustvarja ali spreminja redakcije.",
		admin_reason_code_applications_label: "Aplikacije Datacap",
		admin_reason_code_repositories: "Repozitoriji",
		admin_reason_code_repositories_label: "Repozitoriji",
		admin_reason_code_repositories_hover: "Seznam repozitorijev ICN, ki se sklicujejo na ta razlog redakcije.",
		admin_reason_code_repositories_default_value: "Ni nastavljeno",
		admin_reason_code_description_label: "Opis",
		admin_reason_code_applications_default_value: "Ni nastavljeno",
		admin_redaction_reasons: "Razlogi redakcij",
		admin_redactions: "Redakcije na podlagi vlog",
		admin_redactions_policies_roles: "Pravilniki in vloge",
		admin_reasons: "Razlogi",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID-ja ni mogoče urejati.  Mogoče ga je kopirati v odložišče",
		// Role based administration
		admin_rba: "Skrbništvo namizja na podlagi vloge",
		admin_rba_mobile_access_enabled: "To namizje je omogočeno za mobilni dostop.",
		admin_rba_mobile_access_disabled: "To namizje ni omogočeno za mobilni dostop.",
		admin_rba_confirm_delete_multiple: "Ali želite izbrisati izbrani skrbniške vloge?",
		admin_rba_confirm_delete_single: "Ali želite izbrisati izbrano skrbniško vlogo?",
		admin_rba_delete_multi_role_desktop: "Ena ali več vlog, ki ste jih izbrali, je dodeljena namizju. Vloge morate odstraniti z namizja, preden jih lahko izbrišete.",
		admin_rba_delete_single_role_desktop: "Vloga, ki ste jo izbrali, je dodeljena namizju ${0}. Preden lahko vlogo izbrišete, jo morate odstraniti z namizja.",
		admin_desktop: "Namizje",
		admin_rba_instructions: "Ustvarite in upravljate lahko skrbniške vloge za namizje, ki določajo katere pravice so dodeljene skrbnikom namizja.",
		admin_rba_not_used: "${0} se ne uporablja na nobenem namizju.",
		admin_rba_desktops: "<b>${0} se uporablja na naslednjih namizjih:</b>",
		admin_rba_new_role: "Nova vloga",
		admin_rba_name_invalid: "Ime skrbniške vloge ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Opis ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Opis ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Ime ne sme vsebovati naslednjih znakov: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Opis: </b> ${0}",
		admin_rba_membership: "Članstvo",
		admin_rba_general_priv: "Splošno",
		admin_rba_appearance_priv: "Videz",
		admin_rba_desktop_config_priv: "Konfiguracija namizja",
		admin_rba_app_name_priv: "Ime aplikacije",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Zemljevid prikazovalnika",
		admin_rba_merge_split_priv: "Spajanje in razdelitev",
		admin_rba_sync_svc_priv: "Sinhronizacijske storitve",
		admin_rba_menus_priv: "Meniji",
		admin_rba_edit_svc_priv: "Storitev urejanja",
		admin_rba_toolbars_priv: "Orodne vrstice",
		admin_rba_ctx_menus_priv: "Kontekstni meniji",
		admin_rba_office_ribbon_priv: "Ukazi na vrstici s trakom MS Office",
		admin_rba_office_menues_priv: "Kontekstni meniji MS Office",
		admin_rba_addl_settings_priv: "Dodatne nastavitve",
		admin_rba_mobile_priv: "Mobilno",
		admin_rba_add_doc_dlg_priv: "Dodajanje pogovornega okna dokumenta",
		admin_rba_doc_mgmt_priv: "Upravljanje dokumentov",
		admin_rba_def_redaction_priv: "Privzeta možnost redakcije",
		admin_rba_add_photos_priv: "Dodajanje fotografij iz fotoaparata in knjižnice s fotografijami",
		admin_rba_time_stamp_priv: "Časovni žig",
		admin_rba_add_docs_folders_priv: "Dodajanje dokumentov in ustvarjanje map v repozitoriju",
		admin_rba_open_docs_priv: "Odpiranje dokumentov v drugih aplikacijah",
		admin_rba_office_config_priv: "Konfiguracija zbirke Office",
		admin_rba_tab_label_priv: "Oznaka zavihka IBM ECM",
		admin_rba_feature_sel_priv: "Izbira funkcije",
		admin_rba_general_config_priv: "Splošna konfiguracija",
		admin_rba_favorites_priv: "Priljubljene",
		admin_rba_add_options_priv: "Dodajanje možnosti v Uredi skupino",
		admin_rba_browse_priv: "Prebrskaj",
		admin_rba_outlook_int_priv: "Integracija z Outlook-om",
		admin_rba_search_priv: "Išči",
		admin_rba_layout_priv: "Postavitev",
		admin_rba_case_priv: "Primer",
		admin_rba_desktop_feat_priv: "Funkcije namizja",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Prikazane funkcije",
		admin_rba_branding_priv: "Znamka",
		admin_rba_home_priv: "Začetna stran",
		admin_rba_main_color_priv: "Glavna barva",
		admin_rba_sec_color_priv: "Sekundarna barva",
		admin_rba_teamspaces_priv: "Timski prostori",
		admin_rba_rbr_priv: "Redakcije na podlagi vlog",
		admin_rba_et_mgr_priv: "Upravitelj predlog vnosa",
		admin_rba_policies_roles_priv: "Upravljanje pravilnikov in vlog",
		admin_rba_work_priv: "Delo",
		admin_rba_reasons_priv: "Vzročne kode",
		admin_rba_tasks_priv: "Asinhrona opravila",
		admin_rba_auth_priv: "Preverjanje pristnosti",
		admin_rba_all_privs: "Vsa pooblastila",
		admin_rba_some_privs: "Nekatera pooblastila",
		admin_rba_no_privs: "Brez pooblastil",
		admin_add_users_groups_priv: "Dodajanje uporabnikov in skupin",
		admin_url_features_priv: "Upravljanje funkcij URL",
		admin_plugin_features_priv: "Upravljanje funkcij vtičnikov",
		admin_addl_components_priv: "Dodatne komponente",
		admin_global_toolbar_priv: "Globalna orodna vrstica",
		admin_status_bar_priv: "Vrstica stanja",
		admin_refresh_message: "Če želite uporabiti posodobljene podatke, morate osvežiti brskalnik.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Za uporabo posodobljenega privzetega namizja morate osvežiti svoj brskalnik.",
		admin_desktop_refresh_message: "Če želite uporabiti posodobljeno namizje, morate osvežiti brskalnik.",
		admin_action_open: "Odpri",
		admin_action_edit: "Uredi",
		admin_action_copy: "Kopiraj",
		admin_action_delete: "Izbriši",
		admin_action_copy: "Kopiraj",
		admin_action_new: "Ustvari novo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Ta ID je že v uporabi. Podati morate unikaten ID.",

		admin_searchable_properties_for: "Lastnosti, ki omogočajo iskanje, za:",
		admin_repository_new: "Nov repozitorij",
		admin_desktop_new: "Novo namizje",
		admin_desktop_file_documents: "Od uporabnikov zahtevaj, da shranijo nove dokumente in mape v mapo",
		admin_desktop_file_documents_hover: "To možnost izberite, če želite od uporabnikov zahtevati, da pri dodajanju postavk v repozitorij izberejo mapo. Če te možnosti ne izberete, lahko uporabniki dodajajo dokumente (IBM FileNet P8) ali dokumente in mape (IBM Content Manager), vendar jim jih ni treba vnesti v mapo.",
		admin_desktop_show_security_tab: "Pokaži nastavitve zaščite med dodajanjem in prijavljanjem",
		admin_desktop_show_security_hover: "<b>Samo za uporabnike programske opreme IBM FileNet P8.</b>  To možnost izberite, če želite uporabnikom omogočiti urejanje zaščite dokumentov in map, ko dodajajo ali prijavljajo postavke v to namizje.",
		admin_desktop_configure_security_inheritance: "Dovoli uporabnikom, da konfigurirajo dedovanje zaščite map",
		admin_desktop_configure_security_inheritance_hover: "<b>Samo za uporabnike programske opreme IBM FileNet P8.</b>  To možnost izberite, če želite, da bodo lahko uporabniki prilagajali dostop do elementov v mapi z nadzorom dedovanja zaščite map. Če izberete to možnost, lahko uporabniki podajo, ali uporabniki oziroma skupine lahko dedujejo zaščito od:<ul><li>mape,</li><li>mape in njenih neposrednih podmap,</li><li>mape in vseh njenih podmap.</li></ul>",
		admin_desktop_appearance: "Videz",
		admin_desktop_appearance_instruction: "Prilagodite lahko videz namizja s spremembo prijavne in naslovne strani, ki sta prikazani za namizje.",
		admin_desktop_layout: "Postavitev:",
		admin_desktop_layout_hover: "Postavitev določa, katere funkcije so lahko prikazane v spletnem odjemalcu ter način razporeditve vsebine v spletnem odjemalcu.<br><br><b>Namig:</b> določite lahko postavitve po meri, tako da ustvarite vtičnike. Preden lahko izberete postavitev po meri, morate registrirati vtičnik v skrbniškem orodju.",
		admin_desktop_layout_default: "Privzeto",
		admin_desktop_layout_custom: "Po meri",
		admin_desktop_enable_workflow_email: "Omogoči to namizje za elektronsko obvestilo delovnega toka FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Samo za uporabnike sistema FileNet P8. Izberite to možnost, če želite uporabnikom omogočiti odpiranje spletnega odjemalca prek URL-jev iz elektronskih obvestil, ki jih ustvari Process Engine.<br /><br />Če te možnosti ne omogočite za nobeno namizje, se uporabniki ne bodo mogli prijavljati v spletnega odjemalca prek URL-jev v obvestilih.<br /><br />Če to možnost omogočite na več namizjih in več kot eno namizje izpolnjuje kriterije, določene v URL-ju v obvestilu, bo spletni odjemalec uporabil prvo namizje, ki se ujema s kriteriji. ",
		admin_desktop_prevent_create_new_search: "Uporabnikom prepreči ustvarjanje iskanj",
		admin_desktop_prevent_create_new_search_hover: "Ta možnost omeji uporabniške zmožnosti samo na uporabo obstoječih iskanj in uporabnikom onemogoča ustvarjanje odprtih iskanj, ki jih morda ni mogoče optimizirati.</br></br>Ta nastavitev ne vpliva na timske prostore. Pravico za ustvarjanje iskanj v timskem prostoru določa vloga, ki jo ima uporabnik v danem timskem prostoru.",
		admin_desktop_prevent_create_new_unified_search: "Prepreči uporabo hkratnih iskanj v več repozitorijih",
		admin_desktop_prevent_create_new_unified_search_hover: "Ta možnost omeji uporabniške zmožnosti samo na uporabo obstoječih hkratnih iskanj v več repozitorijih in uporabnikom onemogoča ustvarjanje odprtih hkratnih iskanj v več repozitorijih, ki jih morda ni mogoče optimizirati.",
		admin_desktop_hide_entry_template_not_found_warning: "Skrij opozorilo, ki se prikaže, kadar povezane vnosne predloge ni bilo mogoče najti",
		admin_desktop_hide_entry_template_not_found_warning_hover: "To možnost izberite, če želite skriti opozorilno sporočilo, ki se prikaže, kadar uredite lastnosti postavke in vnosne predloge, povezane s postavko, ni bilo mogoče najti.",
		admin_desktop_show_class_role_security_selection: "Dovoli uporabnikom, da konfigurirajo varnost na osnovi vlog v vnosnih predlogah",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Samo za uporabnike programske opreme IBM FileNet P8.</b> Izberite to možnost, če želite, da uporabniki vnosne predloge konfigurirajo tako, da uporabljajo varnost na osnovi vlog, ko določajo varnost dokumentov in/ali map z vnosnimi predlogami.  Če izberete to možnost, lahko urejevalci vnosnih predlog določijo, ali se bodo za definicijo vnosne predloge uporabljali predmeti zaščite vlog.",
		admin_desktop_show_primary_multi_part: "V prikazovalniku odpri samo primarni dokument",
		admin_desktop_show_primary_multi_part_hover: "<b>Samo za uporabnike programske opreme IBM FileNet P8.</b> Izberite to možnost, če želite, da se v prikazovalniku odpre samo primarna datoteka dokumenta.  Z dokumenti je lahko povezanih več datotek.  Ta možnost bo odprla samo primarno datoteko, ki je povezana z dokumentom.",
		admin_desktop_redaction_save_mode: "Privzeta možnost redakcije:",
		admin_desktop_redaction_save_mode_hover: "Izberite privzeti način za shranjevanje v prikazovalniku ViewONE Virtual:</br>* Vedno prosi uporabnika, da izbere: ob vstopu v način redakcije se bo prikazalo pogovorno okno, ki bo uporabnika vprašalo, ali želi prijaviti vsebino kot novo različico, ustvariti nov dokument ali prenesti vsebino.</br>* Prijavi kot novo različico: revidirana vsebina bo vedno shranjena nazaj kot nova različica obstoječega dokumenta.</br>* Shrani kot popolnoma nov dokument: revidirana vsebina bo vedno shranjena nazaj kot popolnoma nov dokument.</br>* Prenesi in shrani v odjemalcu: revidirana vsebina bo prenesena v sistem odjemalca.",
		admin_desktop_redaction_save_mode_user_select: "Vedno prosi uporabnika, da izbere",
		admin_desktop_redaction_save_mode_new_version: "Prijavi kot novo različico",
		admin_desktop_redaction_save_mode_new_document: "Shrani kot popolnoma nov dokument",
		admin_desktop_redaction_save_mode_local_content: "Prenesi in shrani v odjemalcu",

		admin_desktop_document_add_mode: "Dodajanje pogovornega okna za dokument:",
		admin_desktop_document_add_mode_hover: "Podajte pogovorno okno za dodajanje, ki ga želite uporabiti pri dodajanju dokumentov, ki ste jih izdelali s programom IBM Content Navigator:<ul><li>Nov trajno revidiran dokument</li><li>Nov spojen in razdeljen dokument</li><li>Nov dokument Microsoft Office</li><li>Nov dokument za urejanje storitve</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Dodaj dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Dodajanje dokumenta s predlogo vnosa",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Spajanje in razdelitev:",
		admin_desktop_merge_and_split_enable_hover: "Podajte, ali želite uporabnikom z dostopom do tega namizja omogočiti spajanje in razdelitev dokumentov s podpornim prikazovalnikom.",

		admin_desktop_merge_and_split_show_checkin: "Pozovi uporabnike, naj podajo vrednosti lastnosti, ko prijavijo spremembe dokumenta.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Če izberete to možnost, se prikaže pogovorno okno prijave, ko uporabniki prijavijo spremembe dokumenta v načinu Spoji in razdeli.",

		admin_desktop_available_categories: "Razpoložljive funkcije",
		admin_desktop_selected_categories: "Izbrane funkcije",

		admin_layout_banner_title: "Pasica in prijavna stran",
		admin_layout_title: "Postavitev",

		admin_desktop_application_name: "Ime aplikacije:",
		admin_desktop_application_name_hover: "Podajte ime aplikacije za prikaz v pasici.<br><br>Namig: določite ime aplikacije za druge jezike v zavihku Oznake namizja / Oznake.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Podajte, ali želite uporabiti privzeto temo IBM Content Navigator ali temo po meri za to namizje. Če želite uporabiti temo po meri, ustvarite temo v razdelku <b>Teme</b> skrbniškega orodja.",
		admin_desktop_login_logo: "Logotip prijavne strani:",
		admin_desktop_login_logo_hover: "Če želite spremeniti logotip, ki je prikazan na prijavni strani, lahko navedete URL datoteke logotipa. Vseeno pa je priporočljivo, da za spremembo logotipa uporabite temo po meri.",
		admin_desktop_login_logo_url_hover: "Vnesite URL datoteke logotipa. Če je logotip v istem spletnem aplikacijskem strežniku kot spletni odjemalec, vnesite relativni URL, na primer: /mycustomizations/login_logo.png<br><br>Logotip ne sme biti širši od 200 slikovnih pik in višji od 150 slikovnih pik.<br><br>Priporočljivo je, da ima logotip prosojno ozadje.",
		admin_desktop_banner_logo: "Logotip pasice:",
		admin_desktop_banner_logo_hover: "Če želite spremeniti logotip, ki je prikazan na pasici, lahko navedete URL datoteke logotipa. Vseeno pa je priporočljivo, da za spremembo logotipa uporabite temo po meri.",
		admin_desktop_banner_logo_url_hover: "Vnesite URL datoteke logotipa. Če je logotip v istem spletnem aplikacijskem strežniku kot spletni odjemalec, vnesite relativni URL, na primer: /mycustomizations/banner_logo.png<br><br>Logotip ne sme biti širši od 72 slikovnih pik in višji od 36 slikovnih pik.<br><br>Priporočljivo je, da ima logotip prosojno ozadje.",
		admin_desktop_banner_background_color: "Barva ozadja pasice:",
		admin_desktop_banner_background_color_hover: "Če želite spremeniti barvo ozadja pasice, lahko podate barvo po meri. Vseeno pa je priporočljivo, da za spremembo barve naslovne strani uporabite temo po meri.",
		admin_desktop_banner_background_color_custom_hover: "Podajte barvo za pasico aplikacije kot šestnajstiško barvo.",
		admin_desktop_banner_application_name_color: "Barva besedila imena aplikacije:",
		admin_desktop_banner_application_name_color_hover: "Če želite spremeniti barvo imena aplikacije, lahko podate barvo po meri. Vseeno pa je priporočljivo, da za spremembo barve imena aplikacije uporabite temo po meri.",
		admin_desktop_banner_application_name_color_custom_hover: "Podajte barvo za ime aplikacije kot šestnajstiško barvo.",
		admin_desktop_banner_menu_color: "Barva ikone pasice:",
		admin_desktop_banner_menu_color_hover: "Če spremenite barvo ozadja pasice, boste morda morali spremeniti barvno shemo ikon v pasici, da bodo bolje vidne. Podajte, ali želite prikazati svetlo ali temno različico ikon pasice.<br><br>Vseeno pa je priporočljivo, da za spremembo barve ikon uporabite temo po meri.",
		admin_desktop_login_page_content: "Vsebina prijavne strani:",
		admin_desktop_login_page_content_hover: "Če želite na prijavni strani prikazati dodatne informacije, kot so obvestila o sistemskih izpadih ali kje lahko uporabniki dobijo pomoč v zvezi z uporabniškimi imeni in gesli, lahko podate URL vsebine, ki jo želite prikazati.",
		admin_desktop_login_page_content_url_hover: "Vnesite URL vsebine prijavne strani. Če je vsebina v istem spletnem aplikacijskem strežniku kot spletni odjemalec, vnesite relativni URL, na primer: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Pravila za gesla:",
		admin_desktop_password_rules_hover: "Če želite uporabnikom omogočiti navodila za ustvarjanje gesel, kot so omejeni znaki ali najmanjše število znakov, lahko podate URL strani, ki vsebuje pravila za gesla.",
		admin_desktop_password_rules_url_hover: "Vnesite URL vsebine pravil za gesla. Če je vsebina v istem spletnem aplikacijskem strežniku kot spletni odjemalec, vnesite relativni URL, na primer: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL za pomoč končnim uporabnikom:",
		admin_desktop_help_url_hover: "Uporabljate lahko pomoč, ki je na voljo v okviru programske opreme IBM Content Navigator, ali preusmerite uporabnike do vsebine pomoči po meri, kar storite z enim od naslednjih dejanj:<br><br><ul><li>preusmeritev v sistem pomoči po meri,</li><li>Dodajanje pomoči v primerek središča IBM Knowledge Center, ki je razmeščen s programom IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Vnesite URL sistema pomoči po meri. IBM Content Navigator na konec podanega URL-ja doda index.jsp?content=/com.ibm.usingeuc.doc/ in ime datoteke.  Da lahko povezave \"Več informacij\" v vmesniku delujejo, mora sistem pomoči uporabljati enaka imena datotek kot integrirana pomoč za končne uporabnike. ",
		admin_desktop_deprecated_appearance_title: "Opuščene nastavitve",
		admin_desktop_deprecated_appearance_instructions: "Če uporabljate temo po meri, nastavitve teme po meri preglasijo te nastavitve. Te nastavitve preselite v temo po meri, ki v primerjavi z nastavitvami v tem razdelku omogoča podrobnejše oblikovanje. Poleg tega lahko temo po meri uporablja več namizij.",

		admin_desktop_plugins_title: "Omogočite ali onemogočite vtičnike za to omizje.",
		admin_desktop_plugins_enable_all_plugins: "Omogočite vse razmeščene vtičnike za uporabo na tem omizju",
		admin_desktop_plugins_select_plugins: "Izberite razmeščene vtičnike, ki jih želite omogočiti za uporabo na tem omizju",
		admin_desktop_plugins_select_plugin: "Izberite vtičnik",

		admin_desktop_layout_features: "Prikazane funkcije:",
		admin_desktop_layout_features_hover: "Izberite funkcije, do katerih bodo imeli uporabniki dostop s tega namizja. Funkcije so prikazane v enakem vrstnem redu, kot so navedene.<br><br>Pri izbiri funkcije lahko prilagodite nekaj načinov vedenja funkcije na namizju, kot je privzeti repozitorij, ki je izbran za funkcijo.",
		admin_desktop_layout_default_repository: "Privzeti repozitorij:",
		admin_desktop_layout_default_repository_layout_hover: "Podajte, kateri repozitorij je privzeto izbran, ko uporabniki odprejo to funkcijo.",
		admin_desktop_layout_document_thumbnails: "Sličice za dokumente:",
		admin_desktop_layout_document_thumbnails_hover: "Podajte, ali želite prikazati sličice za dokumente v podoknu Informacije o dokumentu.<br><br>Prikaz sličic lahko upočasni delovanje spletnega odjemalca.",
		admin_desktop_layout_show_filmstrip_view: "Pogled filmskega traku:",
		admin_desktop_layout_show_filmstrip_view_hover: "Podajte, ali želite uporabnikom omogočiti, da lahko preklopijo prikaz seznama vsebine v pogled filmskega traku.<br><br>Pogled filmskega traku ustvari predogled vsakega dokumenta, ki ga uporabnik izbere, vendar lahko upočasni delovanje spletnega odjemalca. Poleg tega konfigurirajte prikazovalnik pretvorb HTML, da omogočite predoglede dokumenta.",
		admin_enabled: "Omogoči",
		admin_disabled: "Onemogoči",
		admin_include: "Vključi",
		admin_exclude: "Izključi",
		admin_layout_teamspaces_default_repository: "Timski prostori:",
		admin_layout_entry_templates_default_repository: "Predloge vnosa:",
		admin_layout_other_features_default_repository: "Iskanje in brskanje:",
		admin_layout_work_default_repository: "Delo:",
		admin_layout_default_feature: "Privzeta funkcija:",
		admin_default_category_placeholder: "Izberi funkcijo",
		admin_layout_default_feature_hover: "Podajte, katera funkcija se prikaže, ko se uporabniki prijavijo za dostop do tega namizja.",
		admin_layout_default_feature_warning: "Spreminjanje privzete funkcije lahko vpliva na čas, potreben za nalaganje aplikacije.",
		admin_layout_feature_list_header: "Funkcija",
		admin_layout_show_statusbar: "Vrstica stanja:",
		admin_layout_show_statusbar_hover: "Podajte, ali bo na dnu namizja prikazana vrstica stanja.<br><br>Če skrijete vrstico stanja, uporabniki ne morejo videti informacij o dogodkih brez napake, kot je:<ul><li>Dokument je bil dodan v repozitorij.</li><li>Iskanje je vrnilo 59 dokumentov.</li></ul>",
		admin_layout_show_magazineview: "Pogled skladišča:",
		admin_layout_show_magazineview_hover: "Podajte, ali želite uporabnikom omogočiti preklop prikaza seznama vsebine na pogled skladišča.<br><br>Pogled skladišča poveča višino posameznega vnosa na seznamu vsebine, s čimer se zmanjša število postavk, ki se lahko hkrati prikažejo na seznamu vsebine.",
		admin_layout_show_detailsview: "Pogled podrobnosti:",
		admin_layout_show_detailsview_hover: "Podajte, ali želite uporabnikom omogočiti, da lahko preklopijo prikaz seznama vsebine v pogled podrobnosti.<br><br>Pogled podrobnosti maksimalno poveča število vrstic, vidnih na seznamu vsebine.",
		admin_feature_config_docinfopane_label: "Podokno informacij o dokumentu:",
		admin_feature_config_docinfopane_hoverhelp: "Podajte, ali lahko uporabniki v tej funkciji dostopajo do podokna informacij o dokumentu.",
		admin_feature_config_docinfopane_default_label: "Privzeto vedenje:",
		admin_feature_config_docinfopane_expanded: "Razširjeno",
		admin_feature_config_docinfopane_collapsed: "Skrčeno",
		admin_feature_config_docinfopane_expand_on_select: "Razširi, ko je postavka izbrana",
		admin_layout_features_title: "Funkcije namizja",
		admin_layout_features_instructions: "Podajte, do katerih funkcij imajo uporabniki dostop z namizja.  Poleg tega lahko prilagodite vedenje vsake funkcije, ki jo vključuje namizje.",
		admin_layout_components_title: "Dodatne komponente namizja",
		admin_layout_components_instructions: "Če želite povečati učinkovitost vmesnika ali izboljšati delovanje spletnega odjemalca, lahko onemogočite nekatere komponente namizja.",
		admin_layout_featureconfig_instructions: "Izberite funkcijo, ki jo želite konfigurirati",
		admin_layout_featureconfig_no_configuration: "Na voljo ni nobene konfiguracije funkcije.",
		admin_layout_featureconfig_label: "Konfiguracija za funkcijo ${0}",
		admin_layout_featureconfig_title: "Konfiguracija funkcije",
		admin_layout_featureconfig_taskManagerURL: "Če želite uporabljati to funkcijo, morate IBM Content Navigator omogočiti in konfigurirati za povezavo s storitvijo upravitelja opravil. Storitev upravitelja opravil lahko omogočite v razdelku <b>Nastavitve</b> skrbniškega okolja.",
		admin_feature_config_show_my_checkouts_label: "Podokno Moje odjave:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Podokno Moje odjave uporabnikom omogoča, da izvajajo iskanje za vse postavke, ki so jih odjavili v določenem repozitoriju. Podajte, ali lahko uporabniki dostopajo do podokna Moje odjave iz funkcije Začetna stran.<br/><br/><b>Omejitev:</b> ta funkcija zahteva, da je s tem namizjem povezan vsaj en repozitorij IBM Content Manager, IBM FileNet P8 ali OASIS CMIS.",

		admin_feature_config_default_repository_icon_text: "Privzeti repozitorij",
		admin_show: "Pokaži",
		admin_hide: "Skrij",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Skrbniške funkcije ne morete odstraniti z namizja skrbnika",
		admin_warning_label: "Opozorilo:",
		admin_layout_show_globaltoolbar: "Globalna orodna vrstica:",
		admin_layout_show_globaltoolbar_hover: "Podajte, ali bo prikazana orodna vrstica na naslovni strani na vrhu namizja.<br><br>Globalna orodna vrstica vključuje dejanja, ki uporabnikom omogočajo dodajanje dokumentov, map in zadržanj v repozitorij. Razpoložljiva dejanja so odvisna od repozitorija, s katerim je povezan uporabnik.",
		admin_interface_text_name_label: "Vrsta oznake",

		admin_interface_text_label_description: "Prilagodite lahko besedilo, ki je prikazano v nekaterih območjih spletnega odjemalca. Oznake so prikazane za vse repozitorije in namizja v vaši konfiguraciji. Vnesite besedilo, ki ga želite videti v vmesniku v polju Trenutna oznaka.<br><br><b>Pomembno:</b> morebitne spremembe oznak ne bodo prikazane v skrbniškem orodju.",
		admin_interface_text_label_action: "Oznake dejanj",
		admin_interface_text_label_action_description: "Oznake dejanj so prikazane na gumbih in v menijih v spletnem odjemalcu. Za vsako vrsto repozitorija lahko definirate različne oznake dejanj.",
		admin_interface_text_label_application: "Oznake aplikacij",
		admin_interface_text_label_application_description: "Oznake aplikacij so prikazane v spletnem odjemalcu.",
		admin_interface_text_label_system: "Oznake sistemskih lastnosti",
		admin_interface_text_label_system_description: "Oznake sistemskih lastnosti, ki so prikazane, se razlikujejo glede na repozitorij. Prilagodite lahko oznake, ki so prikazane za sistemske lastnosti, povezane z dokumenti in mapami v repozitorijih.",
		admin_interface_text_label_desktop: "Oznake namizja",
		admin_interface_text_label_desktop_description: "Če ste prilagodili ime aplikacije na namizju, lahko to ime prilagodite v drugih jezikih (ne v angleščini). Prav tako lahko prilagodite imena prostorov aplikacije IBM FileNet P8 na namizju.",

		admin_interface_text_system_label: "Oznaka sistema",
		admin_interface_text_current_label: "Trenutna oznaka",
		admin_interface_text_default_label_heading: "Privzeta oznaka",
		admin_interface_text_default_label: "Privzeta oznaka:",
		admin_interface_text_displayed_in_label: "Prikazano za",
		admin_interface_text_displayed_in_document_folder: "Dokumenti in mape",
		admin_interface_text_displayed_in_document: "Dokumenti",
		admin_interface_text_displayed_in_folder: "Mape",
		admin_interface_text_displayed_in_admin_application_space: "Oznaka prostora aplikacije",
		admin_interface_text_displayed_in_desktop: "Oznaka funkcije za mobilno napravo",
		admin_interface_text_displayed_in_admin_application_name: "Ime aplikacije",

		admin_new_desktop: "Novo namizje",
		admin_new_repository: "Nov repozitorij",
		admin_new_menu: "Nov meni",
		admin_new_viewer_mapping: "Nova preslikava prikazovalnika",
		admin_new_mapping_label: "Nova preslikava",
		admin_new_icon_mapping: "Nova preslikava ikone",
		admin_viewer_mapping_list_instructions: "Konfigurirate lahko, katere prikazovalnike uporablja spletni odjemalec za prikazovanje različnih vrst vsebine. Preslikava prikazovalnika določa, kateri tipi MIME so povezani s posameznim prikazovalnikom, ki ga želite uporabiti. Če želite uporabiti različne prikazovalnike za različna namizja, lahko ustvarite več preslikav prikazovalnikov.",
		admin_viewer_mapping_instructions: "Podajte prikazovalnike, s katerimi želite odpirati datoteke. Če želite uporabiti prikazovalnik po meri, morate prikazovalnik integrirati kot vtičnik, preden ga lahko dodate v preslikavo prikazovalnika.<br><br><b>Pomembno:</b> ko uporabnik odpre dokument, spletni odjemalec na seznamu preslikav prikazovalnika poišče prvi prikazovalnik, ki lahko odpre dokument glede na operacijski sistem, ki ga izvaja uporabnik, in repozitorij, s katerim je uporabnik povezan. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nov vtičnik",
		admin_menu_list_instructions: "Če želite nadzorovati, katera dejanja so na voljo uporabnikom, lahko ustvarite orodne vrstice in kontekstne menije po meri. Privzetih menijev ne morete urejati, lahko pa ustvarite kopije obstoječih menijev in omejite razpoložljiva dejanja ali dodate dejanja po meri, definirana v vtičnikih.<br><br>Če želite ustvariti novo vrsto menija, morate definirati meni v vtičniku.",
		admin_menu_id_hover: "ID mora biti unikaten in ga ne morete spremeniti, ko shranite meni.<br><br>ID lahko vsebuje samo črkovno-številske znake in ločuje velikost črk.",
		admin_menu_id_disabled_hover: "ID-ja menija ni mogoče spremeniti. Če želite uporabiti drug ID, ustvarite nov meni.",
		admin_menu_default_instructions: "Tega menija ni mogoče urediti, ker je privzeti meni. Če ga želite urediti, ustvarite kopijo menija.",
		admin_menu_toolbar_instructions: "Omejite lahko dejanja, ki so na voljo za to orodno vrstico, oziroma dodate dejanja po meri, definirana v vtičniku. Dejanja lahko tudi organizirate, tako da v orodno vrstico dodate ločila.",
		admin_menu_toolbar_custom_instructions: "To orodno vrstico določa vtičnik. Če želite urediti to orodno vrstico, morate posodobiti vtičnik ali ustvariti kopijo orodne vrstice.",
		admin_menu_context_menu_instructions: "Omejite lahko dejanja, ki so na voljo za ta kontekstni meni, oziroma dodate dejanja po meri, definirana v vtičniku. Dejanja lahko tudi organizirate, tako da v kontekstni meni dodate ločila in podmenije.",
		admin_menu_context_menu_custom_instructions: "Ta kontekstni meni določa vtičnik. Če želite urediti ta kontekstni meni, morate posodobiti vtičnik ali ustvariti kopijo kontekstnega menija.",
		admin_desktop_list_instructions: "Ustvarite lahko več namizij in različnim uporabnikom omogočite dostop do vsebine, ki jo potrebujejo. Ustvarite lahko na primer namizje, v katerem lahko uporabniki samo iščejo vsebino, ali namizje, ki omogoča uporabnikom dostop po posameznega repozitorija. ",
		admin_plugin_updated: "Konfiguracija izbranega dodatka je bila spremenjena. Osvežite brskalnik, da uveljavite spremembe.",
		admin_repository_ci_heading: "Repozitorij Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Repozitorij FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Repozitorij Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Repozitorij Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Repozitorij Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Repozitorij Box: <b>${0}</b>",
		admin_repository_generic_heading: "Repozitorij: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Ali želite izbrisati izbrana namizja?\n${0} namizij je izbranih.",
		admin_delete_confirmation_menus: "Ali želite izbrisati izbrane menije\n${0} menijev je izbranih.",
		admin_delete_confirmation_repositories: "Ali želite izbrisati izbrane repozitorije?\n${0} repozitorijev je izbranih.",
		admin_delete_confirmation_viewer_mappings: "Ali želite izbrisati izbrane preslikave prikazovalnikov? Izbranih je ${0} preslikav.",
		admin_delete_confirmation_icon_mappings: "Ali želite izbrisati izbrane konfiguracije ikone\n${0} konfiguracij ikon je izbranih.",
		admin_delete_confirmation_plugins: "Ali želite izbrisati izbrane vtičnike\n${0} vtičnikov je izbranih.",
		admin_delete_confirmation: "Ali želite izbrisati izbrane elemente?\n${0} elementov je izbranih.",

		admin_viewer_mapping_id_hover: "ID mora biti unikaten in ga ne morete spremeniti, ko shranite preslikavo prikazovalnika.<br><br>ID lahko vsebuje samo črkovno-številske znake in ločuje velikost črk.",
		admin_viewer_mapping_id_disabled_hover: "ID-ja preslikave prikazovalnika ni mogoče spremeniti. Če želite uporabiti drug ID, ustvarite novo preslikavo prikazovalnika.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Privzetega namizja ni mogoče izbrisati.",

		admin_desktop_heading: "Namizje: <b>${0}</b>",
		admin_menu_toolbar_heading: "Orodna vrstica: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Orodna vrstica po meri: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontekstni meni: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Kontekstni meni po meri: <b>${0}</b>",
		admin_plugin_heading: "Vtičnik: <b>${0}</b>",
		admin_plugin_instructions: "Vtičnik je lahko datoteka JAR ali prevedena razredna datoteka.<br/><br/><b>Pomembno:</b> spletni aplikacijski strežnik IBM Content Navigator mora imeti dostop do datoteke vtičnika v lokalnem datotečnem sistemu ali prek URL-ja.",
		admin_plugin_list_instructions: "S skrbniškim orodjem registrirajte vtičnike za spletnega odjemalca. Če vtičnik zahteva dodatno konfiguracijo, so konfiguracijski parametri prikazani po registraciji vtičnika.<br /><br /><b>Pomembno:</b> če uredite vtičnik, ki ima sklic v drugem območju skrbniškega orodja, kot je na primer meni, lahko pride do težav v vedenju vtičnika. Poleg tega se dodatki pokličejo v enakem vrstnem redu, kot so navedeni na seznamu. Če je nek dodatek treba zagnati pred drugim dodatkom, zagotovite, da so na seznamu navedeni v takšnem vrstnem redu, kot se morajo zagnati.",
		admin_plugin_cannot_delete: "Izbranih dodatkov ni mogoče izbrisati, ker so nekateri dodatki od njih odvisni.<br/>Izbrani dodatki: ${0}<br/>Odvisni dodatki: ${1}",
		admin_plugin_cannot_disable: "Izbranih dodatkov ni mogoče onemogočiti, ker so nekateri dodatki od njih odvisni.<br/>Izbrani dodatki: ${0}<br/>Odvisni dodatki: ${1}",
		admin_plugin_cannot_add: "Vtičnika ni mogoče dodati, ker nekateri vtičniki, od katerih je odvisen, manjkajo ali so onemogočeni. Manjkajoči ali onemogočeni vtičniki: ${0}",
		admin_plugin_cannot_enable: "Izbranih vtičnikov ni mogoče omogočiti, ker nekateri vtičniki, od katerih so odvisni, manjkajo ali so onemogočeni.<br/>Izbrani dodatki: ${0}<br/>Manjkajoči ali onemogočeni vtičniki: ${1}",
		admin_plugin_save_order: "Shrani vrstni red",
		admin_plugin_load: "Naloži",
		admin_plugin_load_hover: "Podajte URL vtičnika",
		admin_plugin_file_hover: "Če je datoteka JAR vtičnika v lokalnem datotečnem sistemu, lahko vnesete popolnoma kvalificirano pot ali URL datoteke vtičnika. Če je datoteka JAR vtičnika v oddaljenem strežniku, vnesite URL datoteke vtičnika.",
		admin_plugin_classfolderpath_hover: "Prevedena datoteka razredov mora biti v spletnem aplikacijskem strežniku aplikacije IBM Content Navigator.<br/><br/>Vnesite popolnoma kvalificirano pot mape, v kateri so prevedeni in ustvarjeni razredi vtičnika.<br/><br/>Pot ne sme vsebovati imena paketa razreda vtičnika. Privzeta pot za vzorčni razred vtičnika v sistemu Windows je C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Vnesite polno ime razreda Java v razredni datoteki, ki mora biti naložen in priklican kot razred vtičnika.<br/>Ime razreda za vzorčni vtičnik je na primer com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Datoteka JAR vtičnika ni bil najdena na podanem naslovu URL. Poskrbite, da bo datoteka JAR na aplikacijskem strežniku in da sta URL ter ime datoteke pravilna.",
		admin_plugin_for_repository_not_loaded: "Tega repozitorija ni mogoče urejati. Vtičnik, ki definira in podpira to vrsto repozitorija, ni naložen. Na zavihku Vtičniki uredite vtičnik in preverite, ali je pravilno konfiguriran in naložen.",
		admin_plugin_repository_types: "Vrste repozitorija:",
		admin_plugin_viewers: "Prikazovalniki:",
		admin_plugin_features: "Funkcije:",
		admin_plugin_layouts: "Postavitve:",
		admin_plugin_not_available: "Ni na voljo",
		admin_plugin_config_params: "Konfiguracijski parametri:",
		admin_viewer_def_heading: "Preslikava prikazovalnika: <b>${0}</b>",
		admin_users_and_groups: "Uporabniki in skupine",
		admin_general: "Splošno",
		admin_logging: "Beleženje",
		admin_authentication: "Preverjanje pristnosti",		
		admin_rolebase_role: "Vloga:",
		admin_settings_logging_instructions: "Beleženje lahko uporabite za odpravljanje težav s spletnim odjemalcem. Beleženje lahko natančneje določite, če veste, da do težave prihaja v določenem Java razredu ali za določenega uporabnika. Informacije o napaki so zapisane v dnevniško datoteko napak vašega spletnega aplikacijskega strežnika.",
		admin_settings_logging_instructions2: "<b>Nastavitve beleženja razhroščevanja</b><br />Če veste, da do težave prihaja za določen gostiteljski računalnik odjemalca ali uporabnika, lahko ciljno usmerite beleženje razhroščevanja na ta računalnik ali uporabnika. Informacije o razhroščevanju lahko zajamete v produkcijskem okolju brez bistvenega vpliva na delovanje sistema.<br /><br /><b>Pomembno:</b> Če podate računalnik gostitelja sistema ali uporabnika, ta nastavitev preglasi druge nastavitve beleženja. Ko zajamete potrebne informacije, nastavite to možnost na <b>Brez</b>, da nadaljujete s standardnim beleženjem za vaše okolje.",
		admin_settings_export_config_hover: "Izvozite informacije o konfiguraciji sistema v datoteko, ki bo uporabljena s programom IBM Support Assistant Data Collector. Datoteka je shranjena na lokacijo, ki je definirana z javansko sistemsko lastnostjo user.home.",
		admin_logging_level: "Beleženje na ravni aplikacije:",
		admin_logging_level_hover: "Ravni beleženja vplivajo na količino shranjenih informacij v strežniku. Če izberete <b>Napaka</b>, je zajeta najmanjša količina informacij beleženja. Če izberete <b>Iskanje napak</b>, je zajeta večina informacij.<br /><br />Ne podajte možnosti <b>Iskanje napak</b> v produkcijskem okolju, če vam tega ne naroči IBM-ova podpora za programsko opremo.",
		admin_logging_level_0: "Brez beleženja",
		admin_logging_level_1: "Napaka",
		admin_logging_level_2: "Opozorilo",
		admin_logging_level_3: "Informacije",
		admin_logging_level_4: "Iskanje napak",
		admin_logging_classes: "Beleženje na ravni razreda Java:",
		admin_logging_classes_hover: "Privzeto so vsi razredi in paketi Java vključeni v dnevnike napak spletnega aplikacijskega strežnika. Vseeno pa lahko podate, katere razrede ali pakete želite vključiti ali izključiti iz beleženja. Razrede, ki jih želite vključiti oz. izključiti, lahko določite v dnevnikih napak spletnega aplikacijskega strežnika.<br><br>Če do težave prihaja v določenem razredu, lahko ta razred posebej vključite v datoteke dnevnika. Če vključite razred v dnevnike napak, so vsi ostali razredi izključeni iz datoteke dnevnika.<br><br>Če do težave ne prihaja v razredu in želite zmanjšati velikost datoteke dnevnika, lahko izključite ta razred iz dnevniških datotek.",
		admin_logging_classes_include: "Vključi",
		admin_logging_classes_include_all: "Vsi razredi",
		admin_logging_classes_include_specified: "Določeni razredi",
		admin_logging_classes_include_specified_msg: "Podajte, katere razrede želite vključiti.",
		admin_logging_classes_exclude: "Izključi",
		admin_logging_classes_exclude_none: "Brez",
		admin_logging_classes_exclude_specified: "Določeni razredi",
		admin_logging_classes_exclude_specified_msg: "Podajte, katere razrede želite izključiti.",
		admin_logging_debug: "Beleženje iskanja napak za:",
		admin_logging_debug_hover: "<b>Pomembno:</b> preglejte datoteke dnevnika spletnega aplikacijskega strežnika, preden podate IP-naslov ali uporabnika gostiteljskega računalnika odjemalca. Podana vrednost se mora ujemati z vrednostjo, prikazano v dnevniški datoteki.",
		admin_logging_debug_none: "Brez (privzeto)",
		admin_logging_debug_host: "Gostiteljski računalniki odjemalca (IP-naslovi)",
		admin_logging_debug_host_msg: "Podajte IP-naslov enega ali več računalnikov odjemalca, za katerega želite beležiti informacije o razhroščevanju. IP-naslove ločite z vejico.<br /><br /><b>Pomembno:</b> preglejte datoteke dnevnika spletnega aplikacijskega strežnika, preden podate IP-naslov. Podana vrednost se mora ujemati z vrednostjo, prikazano v dnevniški datoteki.",
		admin_logging_debug_user: "Uporabniki",
		admin_logging_debug_user_msg: "Podajte uporabniško ime enega ali več uporabnikov, za katerega želite beležiti informacije o razhroščevanju. Uporabniška imena ločite z vejico.<br /><br /><b>Pomembno:</b> preglejte datoteke dnevnika spletnega aplikacijskega strežnika, preden podate uporabniško ime. Podana vrednost se mora ujemati z vrednostjo, prikazano v dnevniški datoteki.",

		admin_office_settings_logging_instructions: "Beleženje lahko uporabite za odpravljanje težav z orodjem IBM Content Navigator for Microsoft Office. Beleženje lahko natančneje določite, če veste, da do težave prihaja v določenem razredu ali za določenega uporabnika. Informacije o napaki se zapišejo v datoteke dnevnika aplikacije v gostiteljskih računalnikih odjemalca IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Nastavitve beleženja razhroščevanja</b><br />Če veste, da do težave prihaja za določen gostiteljski računalnik odjemalca ali uporabnika izdelka IBM Content Navigator for Microsoft Office, lahko ciljno usmerite beleženje razhroščevanja na ta računalnik ali uporabnika. Informacije o razhroščevanju lahko zajamete v produkcijskem okolju brez bistvenega vpliva na delovanje sistema. <br /><br /><b>Pomembno:</b> Če podate računalnik gostitelja sistema ali uporabnika, ta nastavitev preglasi druge nastavitve beleženja. Ko zajamete potrebne informacije, nastavite to možnost na <b>Brez</b>, da nadaljujete s standardnim beleženjem orodja IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Pomembno:</b> preden določite IP-naslov gostiteljskega računalnika odjemalca ali uporabnika, preglejte datoteke dnevnika računalnika odjemalca. Podana vrednost se mora ujemati z vrednostjo, prikazano v dnevniški datoteki. ",
		admin_office_logging: "Beleženje za Office",
		admin_office_logging_classes: "Beleženje na ravni razreda",
		admin_office_logging_classes_hover: "Privzeto so vsi razredi in paketi vključeni v dnevnike napak IBM Content Navigator for Microsoft Office. Vseeno pa lahko podate, katere razrede ali pakete želite vključiti ali izključiti iz beleženja. Razrede, ki jih želite vključiti oz. izključiti, lahko določite v dnevnikih odjemalskega računalnika.<br /><br />Če do težave prihaja v določenem razredu, lahko ta razred posebej vključite v datoteke dnevnika. Če vključite razred v dnevnike napak, so vsi ostali razredi izključeni iz dnevniških datotek. <br /><br />Če do težave ne prihaja v razredu in želite zmanjšati velikost datoteke dnevnika, lahko izključite ta razred iz dnevniških datotek. ",
		admin_office_logging_debug_hover: "<b>Pomembno:</b> preden določite IP-naslov gostiteljskega računalnika odjemalca ali uporabnika, preglejte datoteke dnevnika računalnika odjemalca. Podana vrednost se mora ujemati z vrednostjo, prikazano v dnevniški datoteki.",
		admin_office_logging_additional_settings: "Dodatne nastavitve:",
		admin_office_logging_additional_settings_hover: "Podajte dodatne nastavitve",
		admin_office_logging_file_size: "Velikost datoteke dnevnika",
		admin_office_logging_file_size_hover: "Podajte velikost, pri kateri IBM Content Navigator for Microsoft Office ustvari novo dnevniško datoteko. Ko dnevniška datoteka doseže največjo velikost, je trenutni dnevnik preimenovan, da vključuje datum (v obliki LLLLMMdd) ter povečano številko datoteke (na primer ICNExcelAddin-20121116-5.log), in ustvari se nova dnevniška datoteka. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Prikaži sled sklada v pogovornih oknih",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Izbirno lahko prikažete informacije o sledi sklada v pogovornih oknih za lažje odpravljanje težav. Če ta možnost ni omogočena, so podrobne informacije o sledi sklada vedno vključene v dnevnike napak IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Ikone stanja",
		admin_icon_state_icon: "Ikona stanja",
		admin_icon_state: "Stanje",
		state_contains_label: "Stanje vsebuje",
		admin_icon_state_instructions: "Prilagodite lahko ikone, prikazane poleg dokumentov, map in delovnih postavk v repozitoriju.<br><br><b>Namig:</b> podate lahko, ali želite prikazati ikone stanja za vsak repozitorij v okolju.",
		admin_icon_state_dialog_title: "Preslikava ikone stanja",
		admin_icon_state_dialog_instructions: "Izbrano stanje lahko preslikate v vnaprej določeno ikono, na voljo s spletnim odjemalcem, ali v ikono po meri.",

		admin_icon_mapping_twisty: "Ikone tipa MIME",
		admin_icon_mapping_dialog_title: "Preslikava ikone",
		admin_icon_mapping: "Preslikava ikone",
		admin_icon_mapping_instructions: "Seznam tipov MIME lahko preslikate v vnaprej določeno ikono, na voljo s spletnim odjemalcem, ali v ikono po meri.",
		admin_icon_mapping_list_instructions: "Prilagodite lahko ikone, prikazane za različne tipe MIME, ki so shranjeni v repozitoriju. Spletni odjemalec uporablja ikone v vrstnem redu, v katerem so navedene. Če je tip MIME naveden večkrat, se uporabi prva ikona, povezana s tipom MIME.",
		admin_icon_mapping_icon_label: "Kakšno ikono želite uporabiti?",
		admin_icon_mapping_file_name: "Ikona po meri:",
		admin_icon_mapping_file_name_heading: "Ikona po meri",
		admin_icon_mapping_file_name_placeholder: "Podaj URL ikone",
		admin_icon_mapping_file_name_hover: "Vnesite URL ikone. Če je ikona na istem spletnem aplikacijskem strežniku kot spletni odjemalec, vnesite zadevni URL. Na primer: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Vnaprej določena ikona:",
		admin_icon_mapping_class_name_heading: "Vnaprej določena ikona",
		admin_icon_mapping_class_name_hover: "Izberite ikono, ki je na voljo s spletnim odjemalcem.",
		admin_icon_mapping_class_name_placeholder: "Izberi ikono",

		admin_p8_instructions: "Te informacije souporabljajo vsi repozitoriji FileNet Content Manager, ki so konfigurirani za spletnega odjemalca.",
		admin_p8_collaboration_config: "Izbirna konfiguracija za FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Te parametre lahko konfigurirate, če želite FileNet Collaboration Services prilagoditi okolju IBM FileNet P8.",
		admin_p8_use_url_incoming: "Uporabite URL pri vhodnih zahtevah za generiranje odzivnih URL-jev:",
		admin_p8_use_url_incoming_hover: "Pri večini okolij FileNet Collaboration Services lahko za generiranje URL-ja v odzivu uporabite URL vhodne zahteve. Izberite <b>Da</b>, razen če v vašem okolju velja ena od naslednjih situacij:<ul><li>želite. da odjemalske aplikacije dostopajo do FileNet Collaboration Services prek določenega URL-ja,<li>nastavitve strežnika proxy povzročijo, da FileNet Collaboration Services generira neveljavne URL-je.</ul>",

		admin_p8_use_url_incoming_http: "URL FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Podajte URL, s katerim lahko odjemalske aplikacije dostopajo do FileNet Collaboration Services, v obliki http://FNCSserver:številka_vrat.",
		admin_p8_use_url_incoming_https: "URL HTTPS FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Če je sistem FileNet Collaboration Services konfiguriran za uporabo protokola SSL, podajte URL HTTPS, s katerim lahko odjemalske aplikacije dostopajo do sistema FileNet Collaboration Services, v obliki https://FNCSserver:številka_vrat",
		admin_p8_hide_email_addresses: "Skrij e-poštne naslove v odgovorih strežnika:",
		admin_p8_hide_email_addresses_hover: "Če tako zahtevajo pravilniki o zasebnosti, lahko v odgovorih strežnika skrijete e-poštne naslove uporabnikov. Seznam e-poštnih naslovov lahko na primer skrijete, ko strežnik vrne seznam dokumentov in informacij o uporabnikih, ki so ustvarili ali uredili dokumente.",

		admin_p8_mask_user_ids: "Maskiranje uporabniških ID-jev v dnevniških datotekah:",
		admin_p8_mask_user_ids_hover: "Če tako zahtevajo pravilniki o zasebnosti, lahko v dnevniških datotekah FileNet Collaboration Services skrijete uporabniška imena. Če omogočite to možnost, se uporabniška imena zamenjajo z vrednostmi razpršitve. Tako lahko priskrbite datoteke dnevnika za zunanja podjetja, kot je IBM, za namene podpore brez razkrivanja uporabniških imen ali zapisov dejavnosti.",

		admin_p8_soft_delete: "Premikanje izbrisanih datotek v koš za obnovitev:",
		admin_p8_soft_delete_hover: "Ko uporabniki izbrišejo postavke, se te prestavijo v koš za obnovitev in se ne izbrišejo iz repozitorija. Postavke ostanejo v košu za obnovitev, dokler se ne izbrišejo iz pomnilnika. Ta nastavitev se prezre, če ciljni repozitorij ne podpira košev za obnovitev.<br><br><b>Omejitev:</b> koši za obnovitev so podprti v okolju IBM FileNet P8 različice 5.2 ali novejše različice in zahtevajo dodatek Social Collaboration Base Extensions.",

		admin_p8_download: "Konfiguriranje predpomnilnika Content Download HTTP Cache",
		admin_p8_download_instructions: "Če repozitoriji IBM FileNet Content Manager vsebujejo številne velike datoteke, lahko Content Download HTTP Cache (CDHC) konfigurirate tako, da storitvam FileNet Collaboration Services omogoča varno preusmeritev zahtev vsebine za velike datoteke v namenski spletni strežnik.<br/><br/>Ta funkcija zahteva strežnik IBM HTTP Server. Poleg tega morate posodobiti datoteko httpd.conf strežnika IBM HTTP Server.",
		admin_p8_download_cache: "Predpomnilnik Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Podajte, ali želite omogočiti predpomnilnik Content Download HTTP Cache (CDHC) za vse repozitorije IBM FileNet Content Manager v okolju. Podate lahko najmanjšo velikost datoteke, pri kateri se datoteke shranijo v predpomnilnik.",
		admin_p8_download_cache_folder: "Popolnoma kvalificiran imenik predpomnilnika:",
		admin_p8_download_cache_folder_hover: "Podajte popolnoma kvalificirano pot imenika, kamor želite shraniti predpomnjene datoteke. Imenik je lahko v katerem koli delujočem operacijskem sistemu ali napravi, kot je imenik omrežja v skupni rabi, če je storitvam FileNet Collaboration Services in strežniku IBM HTTP Server viden kot datotečni sistem.",
		admin_p8_download_cache_url: "Vzdevek za lokacijo predpomnilnika:",
		admin_p8_download_cache_url_hover: "Podajte vzdevek, ki se uporablja za usmerjanje v imenik predpomnilnika z URL-ja storitev FileNet Collaboration Services. Podajte vzdevek v obliki /vzdevek, na primer /cdhc.<br/><br/>Če URL vključuje /cdhc, se aplikacija preusmeri v popolnoma kvalificirani imenik predpomnilnika.",
		admin_p8_download_cache_max_files: "Največje število predpomnjenih datotek:",
		admin_p8_download_cache_max_files_hover: "Ko je doseženo največje število datotek, se najstarejša datoteka odstrani iz predpomnilnika.<br><br>Če določite največje število datotek za predpomnjenje in največjo velikost predpomnilnika, se najstarejša datoteka odstrani iz predpomnilnika, ko sta izpolnjena spodnja dva pogoja.",
		admin_p8_download_cache_max_size: "Največja velikost predpomnilnika (v GB):",
		admin_p8_download_cache_max_size_hover: "Ko je dosežena največja velikost predpomnilnika, se najstarejša datoteka odstrani iz predpomnilnika.<br/><br/>Če določite največje število datotek za predpomnjenje in največjo velikost predpomnilnika, se najstarejša datoteka odstrani iz predpomnilnika, ko sta izpolnjena spodnja dva pogoja.",
		admin_p8_download_cache_cleanup_duration: "Najdaljše trajanje čiščenja (v sekundah):",
		admin_p8_download_cache_cleanup_duration_hover: "Podajte največjo količino časa, kolikor lahko traja postopek čiščenja. Privzeto trajanje je 5 sekund.<br><br>Vse datoteke, ki so predmet brisanja, vendar po postopku čiščenja ostanejo v predpomnilniku, se odstranijo pri naslednjem postopku čiščenja.",
		admin_p8_download_cache_cleanup_min: "Najkrajši interval med postopki čiščenja predpomnilnika:",
		admin_p8_download_cache_cleanup_min_hover: "Podajte najmanjšo količino časa, ki preteče med postopki čiščenja predpomnilnika. Privzeti čas je 3600 sekund (1 ura).<br><br>Postopki čiščenja predpomnilnika se izvajajo samo, kadar obstaja aktivna zahteva za prenos vsebine iz predpomnilnika. Če se zahteva poda vsako minuto, se postopek čiščenja izvede vsako uro. Če med zahtevami za prenos pretečejo tri ure, se postopek čiščenja ne izvede do prejema naslednje zahteve za prenos.",
		admin_p8_download_cache_min_lifetime: "Najkrajši čas v predpomnilniku (v sekundah):",
		admin_p8_download_cache_min_lifetime_hover: "Podajte najmanjšo količino časa, v katerem se datoteka hrani v predpomnilniku, preden se lahko odstrani. Privzeti čas je 3600 sekund (1 ura).<br><br>Najstarejše datoteke v predpomnilniku ni mogoče izbrisati, dokler ni bila v predpomnilniku določeno količino časa, tudi če predpomnilnik doseže maksimalno velikost ali vsebuje maksimalno število datotek.",
		admin_p8_download_cache_size_threshold: "Najmanjša velikost predpomnilnika (v kB):",
		admin_p8_download_cache_size_threshold_hover: "Podajte najmanjšo velikost, pri kateri se CDHC uporabi za predpomnjenje datotek. Če je datoteka manjša od določene velikosti, se preusmeri prek spletnega aplikacijskega strežnika, v katerem so razmeščene storitve FileNet Collaboration Services. Privzeta velikost je 1000 kB.",
		admin_p8_download_guard_header: "Glava HTTP v funkciji vratarja:",
		admin_p8_download_guard_header_hover: "Če odjemalska aplikacija ne usmeri zahteve prek strežnika IBM HTTP Server, predpomnjene vsebine ni mogoče prenesti. Podate lahko, da lahko samo vhodne zahteve z določeno glavo HTTP (ki se doda zahtevam iz strežnika IBM HTTP Server) dostopajo do predpomnjene vsebine, da se preprečijo neuspeli prenosi.<br><br>Glava HTTP je konfigurirana v strežniku IBM HTTP Server in je prisotna v vseh vhodnih zahtevah, ki so usmerjene prek strežnika IBM HTTP Server. Če zahteva nima glave HTTP, se vsebina usmeri prek spletnega aplikacijskega strežnika namesto strežnika IBM HTTP.",
		admin_p8_download_generate_config: "Ustvarjanje konfiguracije",
		admin_p8_download_generate_config_label: "Konfiguracija strežnika IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Da bo konfiguracija CHDC delovala, morate posodobiti datoteko httpd.conf strežnika IBM HTTP Server. Kliknite Ustvari konfiguracijo, da ustvarite izjave, ki jih je treba dodati v datoteko httpd.conf.",

		admin_logging_viewone_pro: "Beleženje ViewONE Professional:",
		admin_logging_viewone_virtual: "Beleženje ViewONE Virtual:",
		admin_logging_viewone_streamer: "Beleženje Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "Možnosti beleženja Document Streaming Server Module se lahko uporabljajo le, če ste omogočili pretakanje za datoteke PDF ali TIFF v razdelku <b>Daeja ViewONE</b> v skrbniškem orodju.",
		admin_logging_viewone_redaction: "Beleženje Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "Možnosti beleženja Permanent Redaction Server Module se lahko uporabljajo le, če ste pooblaščeni za uporabo modula Redaction orodja Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Pretok datotek PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Če imate v repozitoriju velike dokumente PDF, lahko prikazovalnik omogočite za pretok vsebine dokumentov, kar uporabnikom omogoči hitrejše ogledovanje dokumentov. Če pretakanje v vašem okolju ne deluje, ga lahko onemogočite.",
		admin_daeja_viewonepro_stream_tiff_documents: "Pretok datotek TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Če imate v repozitoriju velike dokumente TIFF, lahko prikazovalnik omogočite za pretok vsebine dokumentov, kar uporabnikom omogoči hitrejše ogledovanje dokumentov. Če pretakanje v vašem okolju ne deluje, ga lahko onemogočite.",
		admin_daeja_viewonepro_show_file_buttons: "Gumbi datoteke",
		admin_daeja_viewonepro_show_file_menus: "Meniji datoteke",
		admin_daeja_viewonepro_enable_file_keys: "Bližnjične tipke datoteke",
		admin_daeja_viewonepro_file_keys_hover_help: "Podajte, ali želite uporabnikom omogočiti uporabo bližnjičnih tipk pri delu z datotekami, npr. da datoteko odprejo ali shranijo. Za informacije o posameznih bližnjičnih tipkah glejte opis parametra FileKeys v referenčnem priročniku za parametre IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Gumbi tiskanja",
		admin_daeja_viewonepro_show_print_menus: "Meniji tiskanja",
		admin_daeja_viewonepro_enable_print_keys: "Bližnjične tipke tiskanja",
		admin_daeja_viewonepro_print_keys_hover_help: "Podajte, ali želite uporabnikom omogočiti uporabo bližnjičnih tipk za tiskanje datotek, npr. da natisnejo stran ali natisnejo dokument. Za informacije o posameznih bližnjičnih tipkah glejte opis parametra PrintKeys v referenčnem priročniku za parametre IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Gumbi negativa",
		admin_daeja_viewonepro_annotation_tooltip: "Privzeti namig za orodje za pripombo po meri:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Vnesite besedilo, ki bo prikazano, če za pripombo po meri ni podanega namiga za orodje. Besedilo lahko vsebuje nadomestitvene člene. Primer: &quot;&lt;creator&gt; je to pripombo ustvaril &lt;createdateonly&gt;.&quot; Za več informacij o nadomestitvenih členih glejte parameter customAnnotationsToolTip v referenčnem priročniku za parametre IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Uporabite vnaprej določeni namig za orodje po meri",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Uporabite sistemsko določeni namig za orodje po meri iz polja z besedilom spodaj",
		admin_daeja_viewonepro_help_url: "URL pomoči:",
		admin_daeja_viewonepro_help_url_hover_help: "Podajte URL spletne strani, ki vsebuje dokumentacijo pomoči za prikazovalnik. Spletno stran odprete z gumbom pomoči v orodni vrstici prikazovalnika in dejanjem menija pomoči. Če URL ni podan, gumb pomoči in dejanje menija nista prikazana.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kontekst vira žiga slike:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Usmeri nepodprto vsebino v brskalnik:",
		admin_daeja_viewonepro_route_docs_hover_help: "Uporabniki si lahko nepodprte slikovne datoteke ogledajo tako, da jih preusmerijo v brskalnik, ki odpre ustrezno aplikacijo za prikaz datoteke. Če želite na primer odpreti dokument programa Microsoft Word, brskalnik uporabi prikazovalnik za Microsoft Word.",
		admin_daeja_viewonepro_scale: "Samodejno prilagodi sliko:",
		admin_daeja_viewonepro_scale_best: "Najboljša prilagoditev",
		admin_daeja_viewonepro_scale_ftow: "Prilagodi širini",
		admin_daeja_viewonepro_scale_ftoh: "Prilagodi višini",
		admin_daeja_viewonepro_enable_hotkeys: "Omogoči bližnjične tipke:",
		admin_daeja_viewonepro_show_features: "Prikaži gumbe in menije:",
		admin_daeja_custom_settings: "Dodatne nastavitve:",
		admin_daeja_custom_settings_hover_help: "Druge parametre lahko dodate tako, da podate ime in vrednost parametra. Podate lahko na primer &quot;scrollbars&quot; in &quot;resnično&quot;, če želite, da se prikažejo drsni trakovi, kadar je slika zaradi povečave večja od območja za prikaz. Za informacije o imenih in vrednostih parametrov glejte referenčni priročnik za parametre IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Privzeti namig za orodje za pripombo po meri:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Vnesite besedilo, ki bo prikazano, če za pripombo po meri ni podanega namiga za orodje. Besedilo lahko vsebuje nadomestitvene člene. Primer: &quot;&lt;creator&gt; je to pripombo ustvaril &lt;createdateonly&gt;.&quot; Za več informacij o nadomestitvenih členih glejte parameter customAnnotationsToolTip v referenčnem priročniku za parametre IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Uporabite vnaprej določeni namig za orodje po meri",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Uporabite sistemsko določeni namig za orodje po meri iz polja z besedilom spodaj",
		admin_daeja_virtual_image_stamp_resource_context: "Kontekst vira žiga slike:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Pot datotek z licenco:",
		admin_daeja_virtual_license_path_hover_help:"Podajte popolnoma kvalificirano pot imenika, ki vsebuje datoteki z licenco lic-server-virtual.v1 in lic-server.v1.",
		admin_default_license_path:"Uporabi privzeto pot datotek z licenco",
		admin_license_path_specified:"Uporabi prilagojeno pot datotek z licenco",

		admin_daeja_streamer: "Strežnik",
		admin_daeja_streamer_cache_root: "Imenik predpomnilnika:",
		admin_daeja_streamer_cache_root_hover_help: "Podajte popolnoma kvalificirano pot imenika, kamor želite shraniti datoteke predpomnilnika za hitrejši dostop.Imenik je lahko v poljubnem operacijskem sistemu ali napravi (npr. omrežni imenik), če ga IBM Content Navigator in IBM HTTP Server vidita kot datotečni sistem. Zaradi boljše zmogljivosti uporabljajte lokalni imenik.",
		admin_daeja_streamer_settings: "Dodatne nastavitve:",
		admin_daeja_streamer_settings_hover_help: "Druge parametre lahko dodate tako, da podate ime in vrednost parametra. Podate lahko na primer “cookieAllowedDomainList” in seznam gostiteljskih strežnikov, razmejen z vejicami.  Za informacije o imenih in vrednostih parametrov glejte referenčni priročnik za parametre IBM Daeja ViewONE.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Nastavitve:",
		admin_daeja_redaction_settings_hover_help: "Druge parametre lahko dodate tako, da podate ime in vrednost parametra. Podate lahko na primer “burnIncrementalAnnotations” in ”resnično”. Za informacije o imenih in vrednostih parametrov glejte referenčni priročnik za parametre IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Nova nastavitev",
		admin_daeja_setting_dialog_title_edit: "Urejanje nastavitve",
		admin_daeja_setting_dialog_hover_help: "Druge parametre dodajte tako, da podate ime in vrednost parametra. Podate lahko na primer “scrollbars” in “resnično”, če želite, da se prikažejo drsni trakovi, kadar je slika zaradi povečave večja od območja za prikaz.",
		admin_daeja_setting_dialog_field_hover_help: "Za informacije o imenih in vrednostih parametrov glejte referenčni priročnik za parametre Daeja ViewONE.",

		admin_daeja_logging: "Beleženje Daeja ViewONE",
		admin_daeja_logging_trace: "Omogoči beleženje sledenja",
		admin_daeja_logging_trace_net: "Omogoči beleženje omrežja",
		admin_daeja_logging_trace_annotations: "Omogoči beleženje pripomb",
		admin_daeja_logging_log_file: "Dnevniška datoteka:",
		admin_daeja_logging_instructions: "Beleženje lahko uporabite za odpravljanje težav z orodjem Daeja ViewONE Professional in Daeja ViewONE Virtual. Če veste, da do težave prihaja za določeno funkcijo, lahko ciljno usmerite beleženje na to funkcijo.",

		admin_v1pro_logging_trace_hover: "To nastavitev uporabite za odpravljanje splošnih težav s prikazovalnikom.<br><br>Informacije beleženja so zapisane v konzolo Java v računalniku odjemalca. Do konzole Java lahko dostopate iz nadzorne plošče (Windows) ali aplikacije System Preferences (Mac) glede na vaš operacijski sistem.",
		admin_v1pro_logging_trace_net_hover: "S to nastavitvijo odpravite naslednje težave:<ul><li>Težave s strežniško povezavo</li><li>Težave s tipi MIME</li><li>Težave s predolgimi datotekami</li></ul>Poleg tega lahko uporabite beleženje sledenja omrežja, ko nastanejo zakasnitve pri uporabi orodja Daeja ViewONE Professional.<br><br>Informacije beleženja so zapisane v konzolo Java v računalniku odjemalca. Do konzole Java lahko dostopate iz nadzorne plošče (Windows) ali aplikacije System Preferences (Mac) glede na vaš operacijski sistem.",
		admin_v1pro_logging_trace_annotations_hover: "To nastavitev uporabite za odpravljanje težav pri ustvarjanju, shranjevanju ali nalaganju pripomb.<br><br>Informacije beleženja so zapisane v konzolo Java v računalniku odjemalca. Do konzole Java lahko dostopate iz nadzorne plošče (Windows) ali aplikacije System Preferences (Mac) glede na vaš operacijski sistem.",

		admin_virtual_logging_trace_hover: "To nastavitev uporabite za odpravljanje splošnih težav s prikazovalnikom.<br><br>Privzeto so informacije beleženja zapisane v datoteko virtual.log v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "S to nastavitvijo odpravite naslednje težave:<ul><li>Težave s strežniško povezavo</li><li>Težave s tipi MIME</li><li>Težave s predolgimi datotekami</li></ul>Poleg tega lahko uporabite beleženje sledenja omrežja, da ugotovite, kje nastanejo zakasnitve pri uporabi orodja Daeja ViewONE Virtual.<br><br>Privzeto so informacije beleženja zapisane v datoteko virtual.log v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "To nastavitev uporabite za odpravljanje težav pri ustvarjanju, shranjevanju ali nalaganju pripomb.<br><br>Privzeto so informacije beleženja zapisane v datoteko virtual.log v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Če za prikazovalnik omogočite beleženje, morate podati popolnoma kvalificirano pot in ime datoteke dnevnika, v kateri želite shraniti informacije beleženja.  Priporočljivo je, da datoteko dnevnika poimenujete virtual.log.",

		admin_streamer_logging_trace_hover: "To nastavitev uporabite za odpravljanje splošnih težav z modulom Document Streaming Server Module.<br><br>Privzeto so informacije beleženja zapisane v datoteko streamer.log v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "S to nastavitvijo odpravite naslednje težave:<ul><li>Težave s strežniško povezavo</li><li>Težave z določenimi tipi MIME</li><li>Težave s predolgimi datotekami</li></ul>Poleg tega lahko uporabite beleženje sledenja omrežja, da ugotovite, kje nastanejo zakasnitve pri uporabi modula Document Streaming Server Module.<br><br>Privzeto so informacije beleženja zapisane v datoteko streamer.log v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Če za Document Streaming Server Module omogočite beleženje, morate podati popolnoma kvalificirano pot in ime datoteke dnevnika, v kateri želite shraniti informacije beleženja.  Priporočljivo je, da datoteko dnevnika poimenujete streamer.log.",

		admin_redaction_logging_trace_hover: "To nastavitev uporabite za odpravljanje splošnih težav z modulom Permanent Redaction Server Module.<br><br>Privzeto so informacije beleženja zapisane v datoteko redacttofile.log, ki je v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "S to nastavitvijo odpravite naslednje težave:<ul><li>Težave s strežniško povezavo</li><li>Težave z določenimi tipi MIME</li><li>Težave s predolgimi datotekami</li></ul>Poleg tega lahko uporabite beleženje sledenja omrežja, da ugotovite, kje nastanejo zakasnitve pri uporabi modula Permanent Redaction Server Module.<br><br>Privzeto so informacije beleženja zapisane v datoteko redacttofile.log, ki je v konfiguracijskem podimeniku namestitvenega imenika IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Če za Permanent Redaction Server Module omogočite beleženje, morate podati popolnoma kvalificirano pot in ime datoteke dnevnika, v kateri želite shraniti informacije beleženja.  Priporočljivo je, da datoteko dnevnika poimenujete redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfigurirajte funkcije za prikazovalnike in storitve.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Če se s spletnim odjemalcem povezujete z enim ali več repozitoriji Content Manager OnDemand, morate podati informacije, ki jih OnDemand Web Enablement Kit zahteva za pravilno delovanje. Te informacije souporabljajo vsi repozitoriji Content Manager OnDemand, ki so konfigurirani za spletnega odjemalca.",
		admin_ondemand_language: "Jezik:",
		admin_ondemand_tempdir: "Začasni imenik ODWEK:",
		admin_ondemand_tracegrp: "Sledenje ODWEK",
		admin_ondemand_tracedir: "Imenik sledenja:",
		admin_ondemand_tracelevel: "Raven sledenja:",
		admin_ondemand_tracelevel_0: "0 - Brez beleženja",
		admin_ondemand_tracelevel_1: "1 - Beleženje sporočil o napaki",
		admin_ondemand_tracelevel_2: "2 - Beleženje sporočil o napaki in opozorilnih sporočil",
		admin_ondemand_tracelevel_3: "3 - Beleženje sporočil o napaki, opozorilnih sporočil in informacijskih sporočil",
		admin_ondemand_tracelevel_4: "4 - Zajeta so vsa sporočila, vključno s funkcijskim sledenjem",
		admin_ondemand_max_trace_filesize: "Največja velikost datoteke sledenja:",
		admin_ondemand_max_trace_filesize_unlimited: "Neomejeno",
		admin_ondemand_max_trace_filesize_limited: "Omejeno (priporočeno)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Ta vrednost je zunaj obsega. Vrednost mora biti celo število med 1 in 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Namestitveni imenik AFP2PDF:",
		admin_ondemand_language_hover: "Podajte jezik, v katerem ODWEK vrne sporočilo.",
		admin_ondemand_tempdir_hover: "Vnesite imenik, kamor OnDemand Web Enablement Kit med obdelavo shranjuje začasne datoteke. Vnesti morate popolnoma kvalificirano pot obstoječega imenika v spletnem aplikacijskem strežniku.",
		admin_ondemand_tracedir_hover: "Vnesite imenik, kamor želite shraniti datoteko sledenja ODWEK arswww.trace. Vnesti morate popolnoma kvalificirano pot obstoječega imenika v spletnem aplikacijskem strežniku.",
		admin_ondemand_tracelevel_hover: "Podajte raven beleženja informacij, ki so zapisane v datoteko arswww.trace. <b>Beleženje sporočil o napaki</b> zajame najmanjšo količino informacij beleženja. <b>Zajeta so vsa sporočila, tudi sledenje funkcijam</b> zajame največ informacij.<br /><br />V produkcijskem okolju ne navedite <b>Vsa sporočila so zajeta, tudi sledenje funkcijam</b>, razen če vam tako naroči IBM-ova podpora za programsko opremo.",
		admin_ondemand_max_trace_filesize_hover: "Podajte, ali želite datoteki sledenja ODWEK omogočiti, da doseže neomejeno velikost ali želite, da spletni odjemalec ustvari nove datoteke dnevnika, ko dnevniška datoteka doseže določeno velikost. Privzeto je omogočeno, da se velikost datoteke dnevnika sledenja povečuje, dokler spletna aplikacija v spletnem aplikacijskem strežniku ni ustavljena.",
		admin_ondemand_max_trace_unlimited_hover: "To možnost izberite, če želite, da se informacije o sledenju ODWEK zapišejo v eno samo datoteko dnevnika. Če izberete to možnost, se lahko zgodi, da bo dnevniška datoteka prevelika in je s standardnim prikazovalnikom datotek ne bo mogoče odpreti.",
		admin_ondemand_max_trace_limited_hover: "To možnost izberite, če želite, da se informacije o sledenju ODWEK zapišejo v manjše datoteke dnevnika. Ko dnevniška datoteka doseže največjo velikost, je trenutni dnevnik preimenovan, da vključuje datum (arswww.trace.YYYYMMDD.HHMMSS) in ustvari se nova dnevniška datoteka.",
		admin_ondemand_afp2pdf_installdir_hover: "Če želite uporabiti pripomoček za pretvarjanje AFP2PDF za pretvorbo dokumentov AFP v dokumente PDF za ogled in tiskanje, podajte imenik, v katerem je pripomoček za pretvarjanje AFP2PDF nameščen v spletnem aplikacijskem strežniku. Na primer: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Skrbniki",
		admin_adminusers_heading_text_multi: "Podati morate, kateri uporabniki imajo skrbniške pravice v spletnem odjemalcu. V skrbniško namizje se lahko prijavijo samo skrbniki.<br /><br /><b>Pomembno:</b> ID-ji uporabnika skrbnikov IBM Content Navigator se morajo ujemati z:<ul><li>ID-ji uporabnika v spletnem aplikacijskem strežniku. Ni potrebno, da so ID-ji uporabnika skrbniki v spletnem aplikacijskem strežniku.</li><li>ID-ji uporabnika v privzetem repozitoriju, konfiguriranem za vsako namizje, ki vključuje funkcijo skrbništva.</li></ul>",
		admin_adminusers_heading_text_single: "Podati morate, kateri uporabniki imajo skrbniške pravice v spletnem odjemalcu. V skrbniško namizje se lahko prijavijo samo skrbniki.<br /><br /><b>Pomembno:</b> ID-ji uporabnika skrbnikov IBM Content Navigator se morajo ujemati z ID-ji uporabnika v spletnem aplikacijskem strežniku. Ni potrebno, da so ID-ji uporabnika skrbniki v spletnem aplikacijskem strežniku.",
		admin_adminusers_newuser: "Nov skrbnik:",
		admin_adminusers_add: "Dodaj",
		admin_adminusers_remove: "Odstrani",
		admin_adminusers_listheading: "Skrbniki",
		admin_adminusers_nameInvalid: "Vrednost ne sme biti podvojena.",

		admin_sync_server_instructions: "<b>Samo za uporabnike programske opreme FileNet P8.</b> Če nameravate sinhronizacijske storitve omogočiti za enega ali več repozitorijev, morate spletnega odjemalca konfigurirati tako, da uporablja sinhronizacijske storitve. Konfiguracijo sinhronizacijskih storitev souporabljajo vsi repozitoriji v okolju.",
		admin_settings_instructions: "Podane vrednosti na zavihku Nastavitve veljajo za vsa namizja v konfiguraciji.",
		admin_autocomplete: "Samodejno poseljevanje uporabniških imen:",
		admin_autocomplete_hover: "Podajte, ali želite, da spletni odjemalec shrani uporabniška imena v piškotkih brskalnika in omogoči brskalniku samodejno poseljevanje uporabniških imen v spletnem odjemalcu med prijavo.<br><br>Če omogočite to možnost, se uporabniško ime zadnjega uporabnika, ki se prijavi v spletnega odjemalca, shrani v piškotkih brskalnika in se samodejno prikaže na prijavni strani, ko uporabnik odpre spletnega odjemalca.<br><br>To možnost morate onemogočiti, če do aplikacije dostopate iz delovnih postaj v skupni rabi oziroma imate pomisleke glede shranjevanja uporabniških imen v piškotkih brskalnika.<br /><br />Ta možnost ne velja za mobilne ali prilagojene aplikacije.",
		admin_autocomplete_enable: "Omogoči",
		admin_autocomplete_disable: "Onemogoči",
		admin_cultural_collation: "Uporabi lokalno določeno razvrščanje:",
		admin_cultural_collation_hover: "Če omogočite lokalno določeno razvrščanje, razvrščanje poteka v strežniku repozitorija. To lahko poslabša delovanje spletnega odjemalca.<br><br>Če onemogočite lokalno določeno razvrščanje, lahko izboljšate delovanje spletnega odjemalca.",
		admin_cultural_collation_enable: "Omogoči",
		admin_cultural_collation_disable: "Onemogoči",
		admin_base_ui_style: "Slog teme",
		admin_base_ui_style_hover: "Podajte slog privzete teme, uporabljene v spletnem odjemalcu. Ta slog se uporablja samo za namizja, ki uporabljajo temo <b>Privzeto</b> (kot je podana na zavihku <b>Videz</b> konfiguracije namizja).<br/></br><b>Omejitev:</b> če vaše konfiguracije namizja uporabljajo teme po meri, te teme temeljijo na klasičnem slogu, ne glede na to, kateri slog izberete.",
		admin_base_ui_style_classic: "Klasičen",
		admin_access_control_access: "Omeji dostop do določenih uporabnikov in skupin",
		admin_access_control_access_show: "Pokaži podatke o nadzoru dostopa",
		admin_access_control_access_enable: "Da",
		admin_access_control_access_disable: "Ne",
		admin_mobile_access: "Dovoli dostop iz mobilnih aplikacij",
		admin_mobile_access_hover: "Uporabniki lahko do spletnega odjemalca privzeto dostopajo iz aplikacije IBM Content Navigator iOS.<br /><br /><b>Pomembno:</b> če uporabnikom preprečite dostop do spletnega odjemalca iz aplikacije iOS, lahko do spletnega odjemalca še vedno dostopajo iz spletnih brskalnikov na mobilnih napravah ter iz katerih koli aplikacij po meri, ki so zapisane z uporabo API-jev programa IBM Content Navigator in delujejo na mobilnih napravah.",
		admin_mobile_access_enable: "Da",
		admin_mobile_access_disable: "Ne",
		admin_error: "Informacije o sporočilih o napaki:",
		admin_error_custom: "Vsebina podpore iskanja po meri",
		admin_error_default: "Vsebina podpore IBM za iskanje <BDO DIR='LTR'>(</BDO>privzeto<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Podajte, kam želite usmeriti uporabnike za več informacij, ko naletijo na sporočilo o napaki. Uporabnike lahko usmerite k informacijam na IBM-ovem portalu za podporo ali k notranjemu viru, kot je služba za pomoč uporabnikom.",
		admin_error_URL: "Predpona URL:",
		admin_error_URL_hover: "Vnesite URL sredstva, kamor želite usmeriti uporabnike (kot je služba za pomoč uporabnikom), ko naletijo na napako. Primer: http://localhost:port_number. Spletni odjemalec pripne številko sporočila URL-ju.",
		admin_prompt_close_without_save: "Ali želite zapreti ne da bi shranili spremembe?",
		admin_object_expiration_time: "Interval osveževanja predpomnilnika (v minutah):",
		admin_object_expiration_time_hover: "Če želite izboljšati delovanje spletnega odjemalca, lahko povečate količino časa hranjenja konfiguracijskih predmetov, kot so namizja, v predpomnilniku. Privzeti čas je 10 minut. Najdaljši čas je 1440 minut (1 dan).<br /><br />Znova zaženite spletno aplikacijo, da uveljavite spremembe.<br /><br />Če je IBM Content Navigator razmeščen v visoko razpoložljivem okolju z gručami, morebitne spremembe konfiguracijskih predmetov ne bodo razširjene na vozlišča v gruči, dokler ne osvežite predpomnilnika.",
		admin_temp_file_cleanup_interval: "Interval pregleda za čiščenje predpomnilnika prikazovalnika (v urah):",
		admin_temp_file_cleanup_interval_hover: "Ustvarite razpored pregledovanja začasnega imenika za iskanje in brisanje poteklih začasnih datotek. Začasni imenik se privzeto pregleda vsakih šest ur. Določite lahko 6-48 ur.",
		admin_temp_file_expiration_interval: "Pretečenost predpomnilnika prikazovalnika (v urah):",
		admin_temp_file_expiration_interval_hover: "Določite časovno obdobje za hranjenje začasnih datotek, povezanih z dejavnostmi v prikazovalniku, v predpomnilniku brskalnika. Začasne datoteke privzeto potečejo po 24 urah. Določite lahko 12-48 ur.",
		admin_encryption_key_hover: "Ključ, ki se uporablja za funkcije šifriranja za Navigator.",
		admin_encryption_key: "Ključ za šifriranje:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Znamka",
		admin_mobile_branding_main_color: "Glavna barva:",
		admin_mobile_branding_secondary_color: "Sekundarna barva:",
		admin_mobile_device_title: "Upravljanje MaaS360",
		admin_mobile_device_enable_maas360: "Omogoči MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Tukaj bo lebdeča pomoč za funkcijo Omogoči MaaS360",
		admin_mobile_device_maas360_developer_id: "ID razvijalca MaaS360:",
		admin_mobile_device_maas360_license_key: "Licenčni ključ za MaaS360:",
		admin_mobile_settings_title: "Nastavitve",
		admin_mobile_email_address_hover_help: "E-poštni naslov je uporabljen v mobilni aplikaciji, ko uporabnik klikne \"Pošlji sporočilo o napaki.\"",
		admin_mobile_email_address: "E-poštni naslov:",
		admin_invalid_email_address_message: "E-poštni naslov, ki ste ga vnesli, ni v pravilni obliki zapisa. Vnesite pravilni naslov in poskusite znova.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Nekateri podatki niso veljavni.",
		admin_configuration_parameters: "Konfiguracijski parametri",
		admin_configuration_optional_features: "Izbirne funkcije",
		admin_configuration_optional_features_p8_instructions: "Izberite funkcije, ki jih želite omogočiti v tem repozitoriju.<p><b>Pomembno:</b> če omogočite funkcijo, ki v repozitorij namesti dodatek, morate biti povezani z repozitorijem kot skrbnik Content Platform Engine ali Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Izberite funkcije, ki jih želite omogočiti v tem repozitoriju.<p><b>Pomembno:</b> te funkcije spremenijo podatkovni model v vašem repozitoriju. Če jih želite omogočiti, morate biti povezani z repozitorijem kot skrbnik strežnika knjižnic.</p>",
		admin_system_properties: "Sistemske lastnosti",
		admin_system_properties_for: "Sistemske lastnosti za:",
		admin_available_properties: "Razpoložljive lastnosti",
		admin_displayed_properties: "Prikazane lastnosti",
		admin_selected_properties: "Izbrane lastnosti",
		admin_selected_filtered_properties: "Skrite lastnosti",
		admin_available_operators: "Prikazani operatorji",
		admin_selected_filtered_operators: "Skriti operatorji",
		admin_system_properties_shown: "Prikazane lastnosti",
		admin_system_properties_hidden: "Skrite lastnosti",
		admin_available_menu_items: "Razpoložljiva dejanja:",
		admin_selected_menu_items: "Izbrana dejanja:",
		admin_menu_global: "Velja, kadar ni izbrana nobena postavka:",
		admin_menu_multiple_document: "Velja, kadar je izbranih več postavk:",
		admin_menu_privileges: "Potrebna pooblastila:",
		admin_menu_plugin: "Vtičnik:",
		admin_menu_repository_types: "Vrste repozitorija:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Ločilo",
		admin_browse: "Prebrskaj",
		admin_search: "Išči",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redakcije na podlagi vlog",
		admin_connections_library_enabled: "IBM Connections – omogočeno",
		admin_office_conf: "Urejanje integracije",
		admin_desktop_conf_label: "Konfiguracija namizja",
		admin_ms_office_conf_label: "Konfiguracija zbirke Office",
		admin_workflows: "Delovni toki",
		admin_file_types: "Vrste datotek",
		admin_file_type_contains_label: "Vrsta datoteke vsebuje",
		admin_name_propepty: "Ime",
		admin_cm_name_property_default: "Uporabi privzeto ime",
		admin_cm_name_property_default_hover: "Lastnost hierarhičnega imena ICM (ICM$NAME) je privzeto uporabljena kot ime postavke, če je lastnost določena za postavko.  Če lastnost hierarhičnega imena ICM (ICM$NAME) ni na voljo, se kot ime postavke uporabi prva lastnost z oznako \"represents\".",
		admin_cm_name_property: "Podaj lastnost imena postavke",
		admin_cm_name_property_hover: "Podajte, katera lastnost je uporabljena kot ime za dokumente in mape.",
		admin_name_property: "Lastnost imena:",
		admin_doc_name_property: "Lastnost Ime dokumenta:",
		admin_doc_name_property_hover: "Podajte, katera lastnost je uporabljena kot ime dokumenta.",
		admin_folder_name_property: "Lastnost Ime mape:",
		admin_folder_name_property_hover: "Podajte, katera lastnost je uporabljena kot ime mape.",
		admin_all_searches_label: "Število iskanj za prikaz:",
		admin_unlimited: "Brez omejitev",
		admin_limit: "Omeji na",
		admin_repository: "Repozitorij:",
		admin_application_space: "Prostor aplikacije",
		admin_available_application_spaces: "Razpoložljivi prostori aplikacije:",
		admin_selected_application_spaces: "Izbrani prostori aplikacije:",
		admin_label: "Oznaka",
		admin_repository_box_placeholder: "Izberi repozitorij storitve Box",
		admin_repository_placeholder: "Izberi repozitorij",
		admin_search_match: "Ujemanje:",
		admin_search_match_all: "Ujemanje z vsemi kriteriji iskanja",
		admin_search_match_any: "Ujemanje s katerimkoli kriterijem iskanja",
		admin_search_match_hover: "Podajte, katera možnost je privzeto izbrana v meniju <b>Možnosti lastnosti</b>.",

		admin_repository_redactions_instructions: "Za ta repozitorij lahko konfigurirate redakcije na podlagi vlog.",
		admin_repository_redaction_policies_description: "Urejate in upravljate lahko pravilnike redakcij, ki razloge redakcij povezujejo z uporabniki in skupinami, ki lahko berejo občutljive podatke in urejajo pripombe, ki zakrivajo te občutljive podatke.",
		admin_repository_redaction_roles_instruction: "Ustvarite lahko vlogo za redakcijo, da povežete določene uporabnike in skupine z možnostjo branja občutljivih podatkov ali možnostjo urejanja pripomb, ki zakrivajo občutljive podatke. Vloga za redakcijo mora biti povezana z razlogom redakcije v pravilniku redakcij, preden lahko določeni uporabniki in skupine berejo podatke ali urejajo pripombe.",
		admin_repository_redaction_reasons_instruction: "Razloge redakcije lahko konfigurirate za svoj repozitorij.",
		admin_repository_redaction_policies: "Konfiguracija pravilnikov redakcij",
		admin_repository_redaction_roles: "Konfiguracija vlog za redakcije",
		admin_repository_redaction_reasons: "Konfiguracija razlogov redakcije",
		admin_repository_redaction_roles_type: "Tip",
		admin_repository_redaction_roles_type_hover: "Urednik lahko ustvarja, spreminja ali briše določene vrste redakcij na podlagi vlog, gledalec pa si lahko ogleduje določene vrste občutljivih podatkov.",
		admin_repository_redaction_roles_type_editor: "Urednik",
		admin_repository_redaction_roles_type_viewer: "Prikazovalnik",
		admin_repository_redaction_roles_membership: "Članstvo",
		admin_repository_redaction_roles_membership_hover: "Izberite urednike, ki jim želite dodeliti to vlogo.",
		admin_repository_redaction_roles_user_group_hover: "Poiščite uporabnike ali skupine, ali pa izberite urednike, ki jim želite dodeliti to vlogo.",
		admin_repository_redaction_roles_description: "Urejate in upravljate lahko vloge za redakcije, ki uporabnike in skupine povezujejo z možnostjo branja občutljivih podatkov in urejanja pripomb, ki zakrivajo občutljive podatke.",
		admin_repository_redaction_new: "Nova vloga za redakcijo",
		admin_repository_redaction_role_avail_editors: "Uredniki redakcije, ki so na voljo",
		admin_repository_redaction_role_avail_users: "Uporabniki, ki so na voljo",
		admin_repository_redaction_role_avail_groups: "Skupine, ki so na voljo",
		admin_repository_redaction_role_selected_editors: "Izbrani uredniki redakcije",
		admin_repository_redaction_role_selected_users_groups: "Izbrani uporabniki in skupine",
		admin_repository_redaction_role_add_editor: "Novi uredniki ...",
		admin_repository_redaction_role_access_type: "Dostop",
		admin_repository_redaction_role_access_type_access: "Dopusti",
		admin_repository_redaction_role_access_type_no_access: "Zavrni",
		admin_repository_redaction_role_users: "Uporabniki",
		admin_repository_redaction_role_groups: "Skupine",
		admin_repository_redaction_role_editors: "Uredniki",
		admin_delete_confirmation_redaction_roles: "Ali želite izbrisati izbrano vlogo za redakcijo?",
		admin_repository_edit_redaction_role: "Vloga za redakcijo: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Privzeti dostop",
		// RBA
		desktop_user_group_acl: "Skrbniki namizja",
		desktop_user_group_remove: "Odstrani",
		desktop_rba_membership: "Članstvo:",
		desktop_rba_membership_list_label: "Ime",
		admin_repository_redaction_policy_hover: "Podajte opis, ki bo uporabnikom omogočal razlikovanje med tem pravilnikom in drugimi pravilniki.",
		admin_repository_new_redaction_policy: "Nov pravilnik redakcije",
		admin_repository_policy_name: "Ime pravilnika",
		admin_repository_reason_redactions: "Razlogi redakcij:",
		admin_repository_role_editors: "Uredniki",
		admin_repository_role_viewers: "Gledalci",
		admin_repository_redaction_policy_instruction: "Ustvarite lahko pravilnik redakcije, da povežete izbrane razloge redakcije z uredniki redakcije in gledalci redakcije.",
		admin_repository_redaction_reasons_hover: "Izberite eno ali več vrst občutljivih podatkov, za katere ne želite, da si jih lahko ogleduje večina uporabnikov, na primer osebni podatki, poslovne skrivnosti ali informacije, ki so zaupne ali v lasti vašega podjetja.",
		admin_repository_readaction_available_reasons: "Razlogi, ki so na voljo",
		admin_repository_readaction_selected_reasons: "Izbrani razlogi",
		admin_repository_readaction_new_reason: "Nov razlog ...",
		admin_repository_redeaction_reasons: "Razlogi redakcij:",
		admin_repository_readaction_editor_permmission: "Uredniki redakcije:",
		admin_repository_redaction_editors_hover: "Izberite vloge, v katerih lahko uporabniki ustvarjajo in spreminjajo redakcijo za izbrane razloge.",
		admin_repository_readaction_new_editor_role: "Nova vloga urednika ...",
		admin_repository_readaction_available_editors: "Vloge urednika, ki so na voljo",
		admin_repository_readaction_selected_editors: "Izbrane vloge urednika",
		admin_repository_readaction_viewer_permmission: "Gledalci redakcije:",
		admin_repository_redaction_viewers_hover: "Izberite vloge, v katerih si lahko uporabniki ogledujejo občutljive podatke za izbrane razloge. Redakcija ne velja za uporabnike in skupine s temi vlogami.",
		admin_repository_readaction_new_viewer_role: "Nova vloga gledalca ...",
		admin_repository_readaction_available_viewers: "Vloge gledalca, ki so na voljo",
		admin_repository_readaction_selected_viewers: "Izbrane vloge gledalca",
		admin_repository_reason_redactions_header: "Razlogi redakcij",
		admin_delete_confirmation_redaction_policy: "Ali želite izbrisati izbran pravilnik redakcije?",
		admin_role_type_repository: "Repozitorij",
		admin_role_type_administrator: "Skrbnik",
		admin_role_type_template: "Predloga",
		admin_role_type_teamspace: "Timski prostor",
		admin_role_type_author: "Urednik",
		admin_role_type_user: "Prikazovalnik",
		admin_collaboration_services_instructions: "Če imate IBM Connections in spletno aplikacijo FileNet Collaboration Services, lahko konfigurirate skupne timske prostore in pretoke dejavnosti za repozitorij.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfiguracija knjižnic skupnosti",
		admin_collaboration_community_instruction: "Konfigurirate lahko en repozitorij v domeni IBM FileNet P8 za shranjevanje knjižnic skupnosti IBM Connections (imenovanih tudi timski prostori). Ko uporabniki ustvarijo knjižnico skupnosti v strežniku IBM Connections, se knjižnica shrani v repozitorij, ki je določen kot repozitorij knjižnic skupnosti.",
		admin_collaboration_community_teamspaces: "Uporabite ta repozitorij za knjižnice skupnosti:",
		admin_collaboration_community_teamspaces_hover: "V domeni IBM FileNet P8 lahko uporabite samo en repozitorij za shranjevanje novih knjižnic skupnosti. Če omogočite ta repozitorij in imate obstoječi repozitorij, se obstoječi repozitorij onemogoči. Vendar vse obstoječe knjižnice ostanejo v trenutnem repozitoriju.",
		admin_collaboration_connections_anonymous: "Dovoljenje za anonimni dostop do javne vsebine:",
		admin_collaboration_connections_anonymous_hover: "Če strežnik IBM Connections vsebuje javne ali vodene skupnosti, lahko FileNet Collaboration Services konfigurirate tako, da bo uporabnikom omogočeno brskanje in prenašanje vsebine iz knjižnic v teh skupnostih, ne da bi se morali pred tem vpisati.<br><br>Uporabniki, ki do knjižnic skupnosti dostopajo anonimno, ne morejo ustvarjati, spreminjati ali brisati vsebine.<br><br><b>Pomembno:</b> uporabnika registra LDAP okolja IBM FileNet P8 morate določiti kot anonimnega uporabnika in ga v strežniku WebSphere Application Server konfigurirati z vlogo <b>Anonymous</b>.",
		admin_collaboration_connections_url: "URL IBM Connections:",
		admin_collaboration_connections_url_hover: "Podajte URL do strežnika IBM Connections v obliki http://IBMConnectionsServer:številka_vrat.  Če je strežnik IBM Connections konfiguriran za uporabo strežnika IBM HTTP, lahko v URL-ju izpustite številko vrat.<br><br>Uporabniki okolja IBM Connections morajo imeti možnost dostopa do URL-ja, ker je to povezava, ki jo okolje FileNet Collaboration Services uporablja za ustvarjanje povezav do pristajalnih strani za dokumente v okolju IBM Connections.",
		admin_collaboration_connections_url_http_use: "Uporabite URL IBM Connections",
		admin_collaboration_connections_url_https_use: "Uporabite HTTPS URL IBM Connections",
		admin_collaboration_connections_url_specify: "Podajte URL",
		admin_collaboration_connections_url_https: "HTTPS URL IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Če je strežnik IBM Connections konfiguriran za uporabo protokola SSL, podajte HTTPS URL za strežnik IBM Connections v obliki https://IBMConnectionsServer:številka_vrat.  Če je strežnik IBM Connections konfiguriran za uporabo strežnika IBM HTTP, lahko v URL-ju izpustite številko vrat.",

		admin_collaboration_connections_gadget_url: "URL priprave IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL sprejema IBM Connections:",
		admin_collaboration_connections_security: "Skrbniki skupnosti:",
		admin_collaboration_connections_security_hover: "Podajte uporabnike in skupine, ki lahko opravljajo skrbništvo v knjižnicah skupnosti.<br><br>Globalni skrbniki lahko ustvarjajo, spreminjajo, brišejo in nudijo dostop do knjižnic skupnosti in njihove vsebine. Če določite uporabnika kot globalnega skrbnika, se mu posredujejo pooblastila ClbGlobalAdministrator v repozitoriju.<br><br>Globalni skrbniki pregleda lahko odobrijo in zavrnejo vsebino, ki se pregleduje za objavo v knjižnici skupnosti. Ko določite uporabnika kot globalnega skrbnika pregleda, se mu posredujejo pooblastila ClbGloablReviewAdministrator v repozitoriju.",

		admin_collaboration_connections_admins: "Globalni skrbniki",
		admin_collaboration_connections_admins_review: "Globalni skrbniki pregleda",
		admin_collaboration_connections_seedlist: "Izdelava kazala vsebine knjižnice skupnosti:",
		admin_collaboration_connections_seedlist_hover: "Podajte, ali želite, da IBM Connections pajka knjižnice skupnosti v tem repozitoriju za izdelavo iskalnega kazala. Izdelava kazala lahko vpliva na zmogljivost repozitorija.<br><br>Če je v repozitoriju nameščen dodatek Social Collaboration Search Indexing Extensions, se ta možnost privzeto omogoči. Če dodatek Social Collaboration Search Indexing Extensions ni nameščen v repozitoriju, se dodatek namesti v repozitorij, ko omogočite to možnost",
		admin_collaboration_activity_stream: "Konfiguriranje dogodka pretoka dejavnosti",
		admin_collaboration_activity_stream_label: "Potiskanje informacij o dogodku v strežnik IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Podajte, ali želite omogočiti potiskanje informacij o dogodkih, kot so ustvarjanje, odjave, prijave, komentarji, oznake in skupna raba dokumentov, v strežnik IBM Connections.<br><br><b>Pomembno:</b> potiskanje obvestil v strežnik IBM Connections lahko vpliva na zmogljivost repozitorija.",

		admin_collaboration_activity_stream_instruction: "Ta repozitorij lahko konfigurirate za potiskanje informacij o dogodkih, kot so komentarji in odobritve dokumentov v strežnik IBM Connections. Dogodki so prikazani na strani <b>Nedavne posodobitve</b> v skupnostih IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Preziranje informacij o dogodkih za določene uporabnike in skupine:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Prezrete lahko dogodke, ki jih generirajo določeni uporabniki ali skupine, kot so skrbniki ali računi sistema, da se zmanjša število obvestil, ki jih vidijo uporabniki. Če na primer selite vsebino, morda želite podati, da se prezrejo dogodki, generirani s strani računa, ki se uporablja za preselitev.",
		admin_collaboration_activity_stream_userid: "Uporabniško ime IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Podajte račun sistema, ki ga Content Platform Engine uporabi za preverjanje pristnosti in pošiljanje informacij o dogodkih orodju IBM Connections. Uporabnik mora biti v vlogi <b>trustedExternalApplication</b> v aplikaciji Widget Container v okolju IBM Connections.<br><br><b>Nasvet:</b> Privzeto ima skrbnik IBM Connections ustrezna pooblastila. Kot uporabniško ime lahko uporabite skrbniški ID",
		admin_collaboration_activity_stream_password: "Uporabniško geslo IBM Connections:",

		admin_help_url: "URL za pomoč končnim uporabnikom:",
		admin_help_url_hover: "<b>Pomembno obvestilo:</b> program IBM Knowledge Center Customer Installed ne bo več posodobljen od različice 3.0.0 programa IBM Content Navigator. Za več informacij o uporabi pomoči po meri se obrnite na podporo za stranke.<br><br>Od različice 3.0.0 programa IBM Content Navigator bo URL za pomoč končnim uporabnikom preusmerjen na središče znanja IBM Knowledge Center. URL za središče znanja IBM Knowledge Center je: http://www.ibm.com/support/knowledgecenter.<br><br>Če želite še naprej uporabljati prejšnjo različico programa IBM Knowledge Center Customer Installed, podajte URL primerka programa IBM Knowledge Center Customer Installed, ki je bil razmeščen z orodjem IBM Content Navigator Configuration and Deployment Tool. Odjemalski računalniki morajo imeti možnost dostopa do URL-ja. URL je oblike http://server_name:port_number/kc.<br><br>Ime strežnika in številko vrat lahko najdete v datoteki console.log v podimeniku KnowledgeCenter/logs namestitvenega imenika izdelka IBM Content Navigator.",

		admin_help_default: "Uporabi privzeto pomoč, ki jo zagotavlja IBM",
		admin_custom_help: "Uporabi sistem pomoči po meri",
		admin_help_kc: "Uporabi pomoč po meri v programu IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Pomembno obvestilo:</b> program IBM Knowledge Center Customer Installed ne bo več posodobljen od različice 3.0.0 programa IBM Content Navigator. Za več informacij o uporabi pomoči po meri se obrnite na podporo za stranke.<br><br>Če želite še naprej uporabljati prejšnjo različico programa IBM Knowledge Center Customer Installed, izberite to možnost in še naprej dodajajte vsebino v primerek programa IBM Knowledge Center Customer Installed, ki ste ga predhodno razmestili.",
		admin_help_taxonomy: "Koda taksonomije:",
		admin_help_taxonomy_hover: "Podajte kodo taksonomije za pomoč po meri.<br><br>Za IBM Content Navigator je koda taksonomije SSEUEX. Če želite v uporabniško nameščenem središču IBM Knowledge Center prikazati pomoč pod drugačnim imenom izdelka, morate v datoteko KC_taxonomy.ditamap v imeniku KnowledgeCenter/usr/taxonomy namestitvenega imenika izdelka IBM Content Navigator dodati unikatno kodo taksonomije.",
		admin_help_context: "Kontekst pomoči:",
		admin_help_context_hover: "Podajte kontekst za pomoč po meri.<br><br>Pomoč za IBM Content Navigator je v imeniku KnowledgeCenter/usr/content/com.ibm.usingeuc.doc namestitvenega imenika izdelka IBM Content Navigator. Kontekst privzete pomoči je com.ibm.usingeuc.doc. Če želite zagotoviti pomoč po meri, dodajte vsebino v nov podimenik imenika KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Pristajalna stran:",
		admin_help_welcome_hover: "Podajte ime teme, ki jo želite uporabiti kot pristajalno stran, ko uporabniki dostopajo do pomoči. Ustvariti morate datoteko lastnosti, ki podaja lokacijo pristajalne strani, in datoteko lastnosti dodati v imenik KnowledgeCenter/usr/conf namestitvenega imenika izdelka IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Pripone tipa MIME datoteke JSON:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Preverite ime datoteke JSON in celotno pot do datoteke. Datoteka je lahko splošna datoteka iz datotečnega sistema ali URL, ki usmerja na datoteko JSON.  <br><br>Vsebina datoteke JSON je matrika za definicije tipa mime. <br><br>Definicija tipa mime vključuje štiri ključe: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Prva dva ključa, \"mimeTypes\" in \"extensions\", sta obvezna in sta lahko matrika nizov, ločenih z \",\". Zadnja dva ključa, \"fileType\" in \"iconName\", sta izbirna. <br><br>Na primer: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfiguracija upravitelja opravil",
		admin_taskmanager_service: "Storitev upravitelja opravil:",
		admin_taskmanager_service_hover: "Podajte, ali želite uporabiti storitev upravitelja opravil, da ustvarite in izvajate asinhrona opravila. <br><br>Če spremenite to nastavitev, morate znova zagnati spletno aplikacijo IBM Content Navigator, da uveljavite spremembe.",
		admin_taskmanager_url: "URL storitve upravitelja opravil:",
		admin_taskmanager_url_hover: "Podajte URL, s katerim lahko druge aplikacije komunicirajo s storitvijo upravitelja opravil. URL je oblike http://ime_stežnika:številka_vrat/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Imenik dnevnika upravitelja opravil:",
		admin_taskmanager_logdirectory_hover: "Dnevniške datoteke za storitev upravitelja opravil se privzeto zapisujejo v isti imenik kot datoteke dnevnika spletnega aplikacijskega strežnika. <br><br>Če želite, da se informacije beleženja zapišejo v drug imenik v strežniku IBM Content Navigator, podajte popolnoma kvalificirano pot imenika, kjer želite shraniti datoteke dnevnika, ki jih ustvari komponenta upravitelja opravil. <br><br>Če spremenite to nastavitev, morate znova zagnati spletno aplikacijo IBM Content Navigator, da uveljavite spremembe.",
		admin_taskmanager_heartBeatMonitor: "Spremljanje srčnega utripa gruče",
		admin_taskmanager_heartBeatMonitor_hover: "Samo visoko razpoložljiva okolja z gručami. Če omogočite to možnost, upravitelj opravil preusmeri opravila iz vozlišč, ki trenutno ne delujejo, na vozlišča, ki se trenutno izvajajo. <br><br>Če spremenite to nastavitev, morate znova zagnati spletno aplikacijo IBM Content Navigator, da uveljavite spremembe.",

		admin_syncserver_title: "Konfiguracija sinhronizacijskega strežnika",
		admin_syncserver_enable: "Sinhronizacijske storitve:",
		admin_syncserver_enable_hover: "Podajte, ali želite, da lahko uporabniki, ki dostopajo do tega namizja, sinhronizirajo svoje postavke v več delovnih postajah in mobilnih napravah.<br><br><b>Pomembno:</b> če želite uporabiti to funkcijo, morate dokončati tudi naslednje naloge:<ul><li>V razdelku <b>Sinhronizacijske storitve</b> skrbniškega orodja podajte <b>Javni URL sinhronizacijskih storitev</b>.</li><li>Repozitorij, za katerega so omogočene sinhronizacijske storitve, dodajte temu namizju.</li></ul>Če to možnost onemogočite, vendar temu namizju dodate repozitorij, za katerega so omogočene sinhronizacijske storitve, bo nastavitev v repozitoriju prezrta.",
		admin_mobileqr_enable: "Pokaži kodo QR za IBM Navigator na prijavni strani:",
		admin_mobileqr_enable_hover: "To možnost omogočite, če želite prikazati kodo QR za mobilno aplikacijo IBM Navigator na prijavni strani spletnega odjemalca. <br><br>Ko uporabnik pregleduje kodo QR, se pomakne v ustrezno trgovino z aplikacijami za njegovo napravo, od koder lahko prenese mobilno aplikacijo IBM Navigator.",

		admin_streamlineservice_enable: "Storitev urejanja:",
		admin_streamlineservice_enable_hover: "Samo za uporabnike sistema FileNet P8. To možnost omogočite, če želite, da bodo lahko uporabniki namizja zlahka dodajali in urejali dokumente iz izvirne aplikacije na svojih delovnih postajah. <br><br>Če želite uporabiti to nastavitev, morate tudi: <ul><li>Omogočiti storitev urejanja v enem ali več repozitorijih, ki so povezani s tem namizjem</li><li>Namestiti odjemalca IBM Content Navigator Edit na delovnih postajah uporabnikov</li></ul>",

		admin_repository_general_instructions: "Preden konfigurirate parametre, sistemske lastnosti, mape itd. se morate povezati z repozitorijem.",
		admin_repository_system_instructions: "Podajte, katere sistemske lastnosti so prikazane za dokumente in mape v tem repozitoriju.",

		admin_desktop_general_create_instructions: "Namizje določa, kaj lahko uporabnik vidi in naredi, ko se prijavi v spletni odjemalec. Ko ustvarite namizje, lahko URL namizja pošljete uporabnikom, ki imajo potem dostop do namizja.",
		admin_desktop_admin_instructions: "Skrbniško namizje je na voljo s spletnim odjemalcem in skrbniškim uporabnikom omogoča nastavitev spletnega odjemalca. To namizje ima dostop do vseh repozitorijev, ki so konfigurirani za spletnega odjemalca.",
		admin_desktop_repositories_instructions: "Podajte repozitorije, za katere želite, da lahko uporabniki do njih dostopajo s tega namizja. Repozitorije morate konfigurirati, preden jih dodate na namizje.<br><br><b>Nasvet:</b> Omejite lahko repozitorije, ki so na voljo za posamezno funkcijo, ko konfigurirate postavitev namizja.",
		admin_desktop_menus_instructions: "Podajte menije, za katere želite, da lahko uporabniki do njih dostopajo s tega namizja. Meniji podajajo, katera dejanja so na voljo glede na izbiro v vmesniku.<br><br><b>Namig:</b> vsebino menijev lahko prilagodite v razdelku <b>Meniji</b> skrbniškega orodja ali pa s pomočjo vtičnikov ustvarite nove vrste menijev.",

		admin_desktop_no_repositories: "Konfiguriran ni noben repozitorij.",

		admin_desktop_id_hover: "ID namizja je vključen v URL spletnega odjemalca in podaja, katero namizje se odpre, ko se uporabnik prijavi v spletni odjemalec. ID mora biti unikaten in ga ne morete spremeniti, ko shranite namizje.<br><br>ID lahko vsebuje samo črkovno-številske znake in ločuje velikost črk.",
		admin_desktop_id_disabled_hover: "ID-ja namizja ni mogoče spremeniti. Če želite uporabiti drug ID, ustvarite novo namizje.",
		admin_desktop_name_hover: "Ime namizja ne sme vsebovati naslednjih znakov: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Konfiguracija lahko vsebuje samo eno privzeto namizje.",

		admin_repository_id_disabled_hover: "ID-ja repozitorija ni mogoče spremeniti. Če želite uporabiti drug ID, ustvarite novo povezavo z repozitorijem.",
		admin_printService_enable: "Tiskanje s storitvijo tiskanja IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Če omogočite storitev tiskanja IBM Daeja ViewONE, se dokumenti pretvorijo v obliko PDF in tiskanje je mogoče izvesti s katerim koli spletnim brskalnikom.<br><br>Če se odločite, da boste onemogočili storitev tiskanja IBM Daeja ViewONE, boste tiskanje dokumentov omejili samo na tiste spletne brskalnike, ki podpirajo javanske programčke.  Nekateri spletni brskalniki ne podpirajo javanskih programčkov in tako ne podpirajo tiskanja s programčki.<br><br>Podprte brskalnike si oglejte v dokumentaciji.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Domači imenik uporabnika",
		admin_file_tracking_doc_directory_my_documents: "Imenik dokumenta uporabnika",
		admin_file_tracking_doc_directory_qp: "Kvalificirana pot",
		admin_file_tracking_section_tile: "Konfiguracija sledenja datotek",
		admin_file_tracking_home_path: "Domača pot",
		admin_file_tracking_my_documents: "Moji dokumenti",
		admin_file_tracking_exact_path: "Popolnoma kvalificirana pot:",
		admin_file_tracking_qp: "Kvalificirana pot",
		admin_file_tracking_ev: "Spremenljivka okolja",
		admin_file_tracking_ev_us: "Spremenljivka okolja po meri ",
		admin_file_tracking_del_local_copy: "Brisanje lokalne kopije:",
		admin_file_tracking_yes: "Da",
		admin_file_tracking_no: "Ne",
		admin_file_tracking_del_local_copy_rt_state_editable: "Dovoli uporabnikom, da preglasijo to nastavitev",
		admin_file_tracking_del_local_copy_rt_state1: "Da",
		admin_file_tracking_del_local_copy_rt_state2: "Ne",
		admin_file_Tracking_label: "sledenje datotek:",
		admin_file_Tracking_disable: "Onemogoči",
		admin_file_Tracking_enable: "Omogoči",
		admin_file_tracking_label_hover_help: "sledenje datotek uporablja programček za odjavo in prenos dokumentov v določen imenik v računalnikih uporabnikov. S programčkom lahko tudi orodje IBM Content Navigator najde dokumente v računalnikih uporabnika, ko uporabniki prijavljajo dokumente.",
		admin_file_tracking_doc_directory: "Shramba:",
		admin_file_tracking_open_file: "Samodejno odpiranje datoteke",
		admin_file_Tracking_append_qualified_path: "Pripni imenik",
		admin_file_Tracking_append_qualified_path_hover_help: "Imenik lahko pripnete na konec spremenljivke okolja, če želite dokumente shraniti v določen podimenik. <br/><br/>Podate lahko na primer, da se dokumenti prenesejo v imenik <i>EnterpriseDocuments</i> znotraj domačega imenika uporabnika.",
		admin_file_Tracking_append_ev: "Pripni spremenljivko okolja",
		admin_file_Tracking_append_ev_hover_help: "Spremenljivko okolja lahko pripnete, če želite, da se dokumenti shranijo v dinamično določen imenik, kot je uporabniški imenik.<br/><br/>Podate lahko na primer, da se dokumenti shranijo v podimenik <i>uporabniško_ime</i> na imeniku omrežja v skupni rabi. ",
		admin_file_tracking_doc_directory_hover_help: "Podajte, kam naj se shranijo dokumenti, ko jih odjavite in prenesete.<br/><br/> <b>Nasvet</b>: če želite shraniti dokumente v domači imenik uporabnika ali privzeti imenik dokumenta, izberite <b>Spremenljivka okolja</b>, ki vključuje vnaprej določene spremenljivke, ki kažejo k tem lokacijam.",
		admin_file_tracking_qualified_path_hover_help: "Uporabite ustrezno strukturo imenika za vaš operacijski sistem Windows ali Mac, da podate imenik ali imenik omrežja, kjer želite shraniti dokumente. <ul><li>Za operacijski sistem Windows v pot vključite črko pogona, kot na primer C:\\Enterprise Documents.</li><li>Za imenik omrežja v skupni rabi vnesite pot v obliki \\\\ime strežnika\\imenik</li></ul><br/><b>Pomembno:</b> če želite uporabiti to možnost, mora biti podano strukturo imenika mogoče ustvariti na vseh delovnih postajah odjemalca v vašem okolju.",
		admin_file_tracking_environment_variable_path_hover_help: "Uporabite ustrezne spremenljivke okolja za vaš operacijski sistem Windows ali Mac, da podate imenik ali imenik omrežja, kjer želite shraniti dokumente. <br/><br/>Možnost <b>Domači imenik uporabnika</b> shrani dokumente v naslednji imenik:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>Možnost <b>Imenik dokumenta uporabnika</b> shrani dokumente v naslednji imenik:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Podajte, ali naj se lokalna kopija dokumenta izbriše, ko uporabnik doda ali prijavi dokumente v repozitorij.<br/><br/>Če izbrišete lokalno kopijo, lahko:<br/><ul><li>uveljavite upoštevanje pravilnikov IT;</li><li>zagotovite, da uporabniki delajo z najnovejšimi različicami dokumentov.</li></ul><br/><b>Omejitev:</b> ta nastavitev se ne uporablja, ko uporabniki dodajajo dokumente tako, da jih povlečejo in spustijo.<br/><br/>Za IBM Content Navigator za Microsoft Office morate izbrati <b>Izbriši lokalne datoteke, ko uporabniki dodajo ali prijavijo dokument oz. prekličejo odjavo</b> v razdelku <b>Konfiguracija za Office</b> na namizju.",
		admin_file_tracking_open_file_hover_help: "Ta nastavitev preglasi vse preference obdelave dokumentov, ki so konfigurirane v spletnih brskalnikih uporabnikov. </br></br><b>Omejitev:</b> IBM Content Navigator za Microsoft Office ne uporablja te storitve.",
		admin_file_tracking_over_write_file: "Prepis lokalne kopije:",
		admin_file_tracking_over_write_file_hover_help: "Podajte, ali se lokalna kopija dokumenta prepiše, ko uporabniki odjavijo dokumente iz repozitorija. <br/><br/>Če prepišete lokalno kopijo, lahko:<br/><ul><li>zagotovite, da uporabniki delajo z najnovejšimi različicami dokumentov.</li><li>preprečite, da uporabniki vidijo poziv, ko obstaja lokalna kopija.</li></ul> </br></br><b>Omejitev:</b> IBM Content Navigator za Microsoft Office ne uporablja te nastavitve, če izberete <b>Dovoli uporabnikom, da preglasijo to nastavitev</b>.",
		admin_file_tracking_over_write_file_state_editable: "Dovoli uporabnikom, da preglasijo to nastavitev",
		admin_file_tracking_inline_help: "S sledenjem datotek je postopek odjave iz repozitorija in prijave vanj učinkovitejši. Omogoči vam tudi upravljanje načina shranjevanja dokumentov v računalnike uporabnikov. <br/><br/>Poleg tega se lahko s sledenjem datotek sledijo dokumenti v več komponentah IBM Content Navigator, kot sta spletni odjemalec in IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Preden se povežete z repozitorijem, morate omogočiti standardno preverjanje pristnosti ali preverjanje pristnosti strežnika.",
		admin_box_use_oauth: "Vrsta preverjanja pristnosti:",
		admin_box_use_oauth_hover: "Pri zagotavljanju dostopa do dokumentov Box v programu IBM Content Navigator izberite standardno preverjanje pristnosti ali preverjanje pristnosti strežnika v produkcijskem okolju. Določite vrednosti client_id in OAuth2 client_secret, ki sta povezani s to namestitvijo programa IBM Content Navigator. Te vrednosti lahko dobite iz storitve Box, ko ustvarite aplikacijo storitve Box za svoj strežnik IBM Content Navigator.<br/><br/>Izberite preverjanje pristnosti razvijalca v razvojnem okolju. Razvijalci se lahko v Box prijavijo z računom za razvijalce in generirajo žeton za razvijalce, ki je veljaven 60 minut. Žeton za razvijalce omogoča razvijalcem, da se v storitev Box prijavijo z žetonom za razvijalce kot geslom za kateri koli ID uporabnika.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Poddomena računa za storitev Box za podjetja:",
		admin_box_share: "ID povezave za upravitelja opravil:",
		admin_box_share_hover: "Za kopiranje v storitvi Box ali za skupno rabo v storitvi Box upravitelj opravil uporabi ID skrbniškega uporabnika in geslo, da lahko izvaja naloge, ki se izvajajo v ozadju, ki spreminjajo repozitorij.<br/><br/>Kliknite Nastavi in se prijavite v storitev Box z veljavnim skrbniškim računom za storitev Box.<br/><br/>Če namizje konfigurirate tako, da izberete ta repozitorij storitve Box kot repozitorij za datoteke v skupni rabi, morate podati skrbniškega uporabnika za storitev Box, ki ima neomejeno shrambo v storitvi Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Samodejno odpiranje datoteke",
		file_tracking_runtime_overwrite_hover_help: "Če ne izberete te možnosti in imate v lokalnem datotečnem sistemu dokument z enakim imenom, bo dokument odjavljen, vendar ne bo prenesen, če ne izvedete enega od naslednjih dejanj:<br/><ul><li> Prenesite dokument v podimenik privzetega imenika. Če izberete podimenik, lahko spletna aplikacija sledi lokaciji dokumenta.</li><li>Preimenujte dokument, ki ga prenašate. Preimenovanje dokumenta prepreči spor v imenu datoteke.</li></ul>",
		open_file: "Samodejno odpiranje datoteke",
		over_write_file: "Prepis lokalne kopije",
		checkout_and_download_file: "Odjavi in prenesi dokumente",
		download_to_local_directory: "Prenesi v:",
		checkout_and_download_button_title: "Odjavi in prenesi",
		checkout_without_java_confirmation_dialog: "Funkcija sledenja datotek ne more prenesti in slediti datoteke.",
		browse_for_directory: "Prebrskaj",
		selected_documents: "Izbrani dokumenti",

		checkout_without_java_confirmation_text: "Ta težava se lahko pojavi zaradi naslednjih razlogov:<br/><ul><li>Izvajalno okolje Java (JRE) ni nameščeno v delovni postaji.</li><li>Vtičnik Java ni omogočen v vašem spletnem brskalniku.</li><li>Vaš spletni brskalnik ne podpira Jave.</li></ul><br/><br/>Za odpravo te težave izvedite ustrezno dejanje:<br/><br/><ul><li>Če želite nadaljevati s prenašanjem datoteke brez omogočenega sledenja datotek, kliknite V redu.</li><li>Če želite prenesti datoteko z omogočenim sledenjem datotek, prekličite prenos in zagotovite, da je okolje JRE nameščeno v delovni postaji in da je vtičnik Java omogočen v vašem spletnem brskalniku.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokument je bil odjavljen in prenesen, vendar ga ni mogoče odpreti.",
		runtime_file_tracking_open_error_explanation: "Operacijski sistem, nameščen v vaši delovni postaji, ne podpira datotek te vrste.",
		runtime_file_tracking_open_error_userResponse: "Za odpravo te težave izvedite eno od naslednjih dejanj:<br/><br/><ul><li>Če želite delati z dokumentom, odprite spletnega odjemalca iz druge delovne postaje, ki ima drug operacijski sistem.</li><li>Če si želite dokument samo ogledati, z desno tipko miške kliknite dokument v spletnem odjemalcu in kliknite Odpri.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokument je bil odjavljen, vendar ni bil prenesen.",
		runtime_file_tracking_save_file_error_explanation: "V lokalnem datotečnem sistemu obstaja dokument z istim imenom vendar ni bil prepisan. ",
		runtime_file_tracking_save_file_error_userResponse: "Če želite prenesti datoteko iz repozitorija, morate prepisati lokalno kopijo dokumenta, ko ga prenesete iz repozitorija.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokument je bil odjavljen, vendar ga ni mogoče prenesti ali odpreti.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "V lokalnem datotečnem sistemu obstaja dokument z istim imenom. Vendar datoteka ni bila prepisana, zato dokumenta v repozitoriju ni mogoče prenesti in odpreti.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Če želite prenesti datoteko iz repozitorija, morate prepisati lokalno kopijo dokumenta, ko ga prenesete iz repozitorija.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokumenta ni mogoče prenesti.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Spremenljivka okolja ${0}, ki je potrebna za slednje datotek, ni definirana v tem odjemalskem računalniku.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Da bi odpravili to težavo:<br/><br/><ul><li>Dodajte spremenljivko okolja ${0} v spremenljivke okolja operacijskega sistema.</li><li>Odjavite se iz spletnega odjemalca in zaprite spletni brskalnik. Nato se znova prijavite.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Programček za sledenje datotek ne more prenesti in slediti dokumenta.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Imenik ${0}, ki je potreben za slednje datotek, ni definiran in ga ni mogoče ustvariti.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Za odpravo te težave izvedite ustrezno dejanje:<br/><br/><ul><li>Kliknite Prebrskaj in izberite drug imenik v odjemalskem računalniku. Če izberete to možnost, se datoteka ne bo sledila.</li><li>Obrnite se na skrbnika sistema, da poda drug imenik za sledenje datotek. To je na primer potrebno, če je podan imenik namenjen operacijskemu sistemu Windows, vi pa uporabljate Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Če dostop do tega namizja poteka iz naprav z različnimi operacijskimi sistemi, lahko zmanjšate verjetnost nastanka težav tako, da izvedete eno od naslednjih dejanj:<br/><br/><ul><li>Uporabite spremenljivke okolja, da podate pomnilniško mesto v odjemalskih računalnikih.</li><li>Ustvarite različna namizja za vse vrste naprav uporabnikov. Ustvarite na primer namizje za uporabnike z operacijskim sistemom Windows in namizje za uporabnike z Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Vaše zahteve ni mogoče obdelati.",
		runtime_file_tracking_generic_error_explanation: "V programčku za sledenje datotek je prišlo do napake.",
		runtime_file_tracking_generic_error_userResponse: "Za pomoč se obrnite na skrbnika sistema.",
		runtime_file_tracking_generic_error_adminResponse: "Odprite ukazno okno Java in ponovno poskusite predložiti zahtevo. Podrobnosti o napaki so prikazane v ukaznem oknu Java.<br/><br/>Do konzole Java lahko dostopate iz nadzorne plošče (Windows) ali aplikacije System Preferences (Macintosh) glede na vaš operacijski sistem.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Vaše zahteve ni mogoče obdelati",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Naslednje datoteke so bile dodane v repozitorij, vendar niso bile izbrisane iz lokalnega datotečnega sistema: ${0}. To se običajno zgodi, ko so datoteke odprte ali jih uporablja druga aplikacija. Če je potrebno, lahko ročno izbrišete datoteke.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokumenta ni mogoče prenesti.",
		runtime_file_tracking_ioexception_error_explanation: "Dokumenta ni mogoče prenesti.",
		runtime_file_tracking_ioexception_userResponse: "Morda nimate ustreznih dovoljenj za pisanje v naslednji imenik: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Prepričajte se, da imate dovoljenja za pisanje v podani imenik. Če nimate dovoljenj za pisanje v podani imenik, se obrnite na skrbnika sistema.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Vaše zahteve ni mogoče obdelati.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Ta napaka se lahko pojavi zaradi naslednjih razlogov:<br/><br/><ul><li>Uporabljate Safari v OS Mac in Java je zagnana v varnem načinu.</li><li>Za imenik, ki je podan v konfiguraciji sledenja datotek za vaše namizje, nimate dovoljenj za branje/pisanje.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Lahko nadaljujete z uporabo IBM Content Navigator brez sledenja datotek ali pa izvedete naslednje korake za odpravo težave:<br/><br/><ol><li>V brskalniku Safari omogočite nezaščiteni način za Javo.</li><li>Na poziv, ali želite zaupati spletnemu mestu IBM Content Navigator, kliknite <b>Zaupaj</b>, da se naloži stran, in nato v brskalniku Safari omogočite nezaščiteni način za Javo.</li></ol><br/><br/>Če je Safari pravilno konfiguriran, izvedite naslednje korake za odpravo težave:<br/><br/><ol><li>Poskrbite, da imate pravice za branje/pisanje za imenik, ki je podan v konfiguraciji sledenja datotek za vaše namizje.</li><li>Če za imenik nimate pravic za branje/pisanje, uredite pravice za ta imenik.</li><li>Če ne morete urejati pravic za imenik, mora vaš skrbnik spremeniti imenik, ki je konfiguriran za sledenje datotek, ali pa vam omogočiti dostop do namizja, ki ima konfiguriran drug imenik za sledenje datotek.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Vaše zahteve ni mogoče obdelati.",
		runtime_file_tracking_java__notfound_error_explanation: "Ta težava se običajno pojavi zaradi naslednjih razlogov:<br/><br/><ul><li>Izvajalno okolje Java (JRE) ni prisotno ali omogočeno v vaši delovni postaji.</li><li>Različica JRE v vaši delovni postaji ni združljiva z različico IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Lahko nadaljujete z uporabo IBM Content Navigator brez sledenja datotek ali pa izvedete naslednje korake za odpravo težave z JRE:<br/><br/><ol><li>Zagotovite, da je JRE nameščen v vaši delovni postaji.</li><li>Zagotovite, da je različica JRE v vaši delovni postaji združljiva s programom IBM Content Navigator. Seznam podprtih različic je vključen v dokumentu <i>Predpogoji za strojno in programsko opremo za IBM Content Navigator</i> na IBM-ovem spletnem mestu podpore za programsko opremo.</li><li>Zagotovite, da je JRE omogočen v vaši delovni postaji.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Vaše zahteve ni mogoče obdelati.",
		runtime_file_tracking_security_error_explanation: "Za imenik, ki je podan v konfiguraciji sledenja datotek za vaše namizje, nimate dovoljenj za branje/pisanje.",
		runtime_file_tracking_security_error_userResponse: "Lahko nadaljujete z uporabo IBM Content Navigator brez sledenja datotek ali se obrnite na svojega skrbnika sistema, da izvede naslednje korake za odpravo težave:<ol><li>Poskrbite, da imate pravice za branje/pisanje za imenik, ki je podan v konfiguraciji sledenja datotek za vaše namizje. </li><li>Če za imenik nimate pravic za branje/pisanje, uredite pravice za ta imenik.</li><li>Če ne morete urejati pravic za imenik, mora vaš skrbnik spremeniti imenik, ki je konfiguriran za sledenje datotek, ali pa vam omogočiti dostop do namizja, ki ima konfiguriran drug imenik za sledenje datotek.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Preneseni so bili naslednji dokumenti: ${0}.",

		admin_file_tracking_inline_help: "S sledenjem datotek je postopek dodajanja dokumentov v repozitorij ter odjave iz repozitorija in prijave vanj učinkovitejši. Omogoči vam tudi upravljanje načina shranjevanja dokumentov v računalnike uporabnikov.<br/><br/>Poleg tega se lahko s sledenjem datotek sledijo dokumenti v več komponentah IBM Content Navigator, kot sta spletni odjemalec in IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID menija se ne sme začeti z oznako \"Privzeto\". Oznaka \"Privzeto\" je rezervirana predpona za ID-je menija.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID lahko vsebuje samo črkovno-številske znake in ločuje velikost črk.",
		admin_repository_id_hover: "ID repozitorija je vključen v URL-je spletnega odjemalca, priljubljene in povezave e-pošte, pri čemer podaja, v kateri repozitorij se prijavljate. ID mora biti unikaten in ga ne morete spremeniti, ko shranite repozitorij.<br><br>ID lahko vsebuje samo črkovno-številske znake in ločuje velikost črk.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Ime ne sme vsebovati naslednjih znakov: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID namizja ne sme vsebovati presledkov ali naslednjih znakov: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Ime namizja ne sme vsebovati naslednjih znakov : * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Ime za prikaz ne sme vsebovati naslednjih znakov: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Podajte ime repozitorija, ki bo prikazano uporabnikom v spletnem odjemalcu.<br><br>Ime ne sme vsebovati naslednjih znakov: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Podajte ime gostitelja ali naslov IP strežnika Content Manager OnDemand, s katerim želite vzpostaviti povezavo, na primer server.id.com.",
		admin_server_p8_name_hover: "Navedite URL strežnika Content Engine ali Content Platform Engine. URL razlikuje med velikimi in malimi črkami ter ima naslednjo obliko:<br><br><ul><li>V strežniku WebSphere Application Server, iiop://ime_gostitelja:številka_vrat/FileNet/Engine. V osnovnih razmestitvah je privzeta številka vrat 2809.</li><li>V strežniku WebLogic Server, t3://ime_gostitelja:številka_vrat/FileNet/Engine. Privzeta številka vrat je 7001.</li></ul><br><br>Za visoko razpoložljive konfiguracije strežnikov Content Engine in Content Platform Engine uporabite visoko razpoložljiv URL za prenos EJB brez predpone cemp:. ",
		admin_server_p8_protocol_hover: "Podajte protokol, ki bo uporabljen za komunikacijo s Content Engine.",
		admin_server_cm_name_hover: "Podajte ime lokalnega kataloga baze podatkov Content Manager ali ime povezave strežnika knjižnic. To ime je vrednost, ki je podana za spremenljivko ICMSERVER.",
		admin_repository_cmis_hover: "Podajte ID repozitorija, s katerim želite vzpostaviti povezavo.  ID posameznega repozitorija v okolju CMIS je naveden v dokumentu vezne storitve AtomPub.  <br/><br/><b>Namig:</b>vnesete lahko tudi zvezdico (*), če se želite povezati s prvim ali edinim repozitorijem, ki je definiran v dokumentu vezne storitve AtomPub.",
		admin_url_cmis_hover: "Oblika URL-ja se razlikuje med ponudniki storitev. Za URL glejte dokumentacijo CMIS ali se obrnite na skrbnika strežnika CMIS.",
		admin_repcfg_cmis_status_columns_hover: "Navedite stanja postavk, katerih ikone si želite ogledati. Ikone stanja so prikazane poleg dokumentov na seznamu vsebine.",
		admin_port_hover: "Podajte številko vrat TCP/IP, ki jih posluša strežnik Content Manager OnDemand. Privzeta vrednost je 1445.",
		admin_unified_searches_hover: "Navedite, ali želite za ta repozitorij uporabnikom omogočiti shranjevanje hkratnih iskanj v več repozitorijih.<br/><br/>Če ne omogočite te možnosti, lahko uporabniki še vedno ustvarjajo hkratna iskanja v več repozitorijih, ki se izvajajo v povezavi s tem repozitorijem. Uporabnikom lahko preprečite ustvarjanje hkratnih iskanj v več repozitorijih na ravni namizja.<br/><br/>Če omogočite hkratna iskanja v več repozitorijih, IBM Content Navigator v repozitoriju ustvari podatkovni model za hkratno iskanje v več repozitorijih.<br/><br/>Za IBM FileNet Content Manager se morate povezati z repozitorijem kot skrbnik Content Engine, preden omogočite to možnost.",
		admin_unified_searches_cm_hover: "Navedite, ali želite za ta repozitorij uporabnikom omogočiti shranjevanje hkratnih iskanj v več repozitorijih.<br/><br/>Če ne omogočite te možnosti, lahko uporabniki še vedno ustvarjajo hkratna iskanja v več repozitorijih, ki se izvajajo v povezavi s tem repozitorijem. Uporabnikom lahko preprečite ustvarjanje hkratnih iskanj v več repozitorijih na ravni namizja.<br/><br/>Če omogočite hkratna iskanja v več repozitorijih, IBM Content Navigator v repozitoriju ustvari podatkovni model za hkratno iskanje v več repozitorijih.",
		admin_max_results_hover: "Podajte, ali želite omejiti število rezultatov, ki jih vrne iskanje. Če ne omejite števila rezultatov iskanja, boste morda imeli težave z delovanjem, če iskanje vrne veliko število rezultatov.",
		admin_timeout_hover: "V sekundah podajte, koliko časa se lahko izvaja iskanje v repozitoriju. Če se iskanje ne dokonča v podanem času, spletni odjemalec zahtevo prekliče. Največja priporočena časovna omejitev je 60 sekund.",
		admin_object_store_hover: "Podajte shrambo predmetov, ki jo želite povezati s strežnikom Content Engine. Simbolično ime lahko dobite v skrbniški konzoli Content Platform Engine.",
		admin_object_store_display_name_hover: "Ime za prikaz shrambe predmetov je potrebno, če želite uporabljati delovne tokove IBM FileNet P8. Ime za prikaz shrambe predmetov lahko dobite v skrbniški konzoli Content Platform Engine.",
		admin_all_searches_hover: "Podajte, ali želite omejiti število iskanj, prikazano pod možnostjo <b>Vsa iskanja</b>, ko uporabniki preiskujejo repozitorij. Če števila iskanj ne omejite, lahko pride do težav v zmogljivosti, če repozitorij vključuje veliko število shranjenih iskanj.",

		admin_text_desktop: "Namizje",
		admin_text_repository: "Repozitorij",
		admin_text_plugin: "Vtičnik",
		admin_text_theme: "Tema",
		admin_text_menu: "Meni",
		admin_text_reason_code: "Razlog redakcije",
		admin_text_redactions: "Redakcije",
		admin_text_viewer_mapping: "Preslikava prikazovalnika",
		admin_text_mobile_feature: "Mobilna funkcija",
		admin_test_interface_text: "Besedilo vmesnika",
		admin_text_interface_text_locale: "Lokalizirano besedilo vmesnika",
		admin_text_icon_status: "Ikona stanja",
		admin_text_icon: "Ikona",
		admin_text_file_type: "Vrsta datoteke",
		admin_text_viewer: "Prikazovalnik",
		admin_text_desktop_access: "Dostop do namizja",
		admin_text_mapped_properties_for_office: "Preslikane lastnosti za Microsoft Office",
		admin_text_desktop_features: "Funkcije namizja",
		admin_text_unknown: "Neznan",
		admin_folder_instruction: "Podajte lastnosti, ki so prikazane za dokumente in mape na seznamu vsebine, ko uporabniki brskajo. Podate lahko tudi vrstni red, v katerem so prikazane lastnosti.",
		admin_search_instruction: "Podajte, katere možnosti so privzeto izbrane, ko uporabniki ustvarijo iskanje.",
		admin_repository_office_conf_class_instruction: "Če je IBM Content Navigator for Microsoft Office nameščen v odjemalskih računalnikih v vašem okolju, lahko podate, kako so dokumenti obravnavani, ko jih uporabniki dodajo ali prijavijo v ta repozitorij.",
		admin_repository_office_conf_instruction: "Preslikajte lastnosti dokumenta Microsoft Office v lastnosti, ki so določene v tem repozitoriju.<br/><br/>Ko je za namizje, s katerim je povezan ta repozitorij, omogočena preslikava lastnosti, se lastnosti, določene za dokumente Microsoft Office, uporabijo za poselitev lastnosti v repozitoriju, ko uporabnik doda dokument iz orodja IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Preslikava lastnosti",
		admin_repository_office_conf_prop_mapping_title1: "Integracija zbirke MS Office",
		admin_office_conf_instruction: "Nadzirate lahko, kako se IBM Content Navigator integrira z aplikacijami Microsoft Office, ko je v odjemalskih računalnikih nameščeno orodje IBM Content Navigator for Microsoft Office<br /><br /><b>Pomembno:</b> če izberete možnost <b>Preslikaj lastnosti Office ...</b>, je treba konfigurirati preslikavo lastnosti za vsak repozitorij, ki je povezan s tem namizjem. Preslikave lastnosti lahko konfigurirate na zavihku <b>Lastnosti za Office</b>, in sicer za vsak repozitorij v vašem okolju.",
		admin_desktop_workflows_instruction: "<b>Samo sistemi IBM FileNet P8.</b> Podajte, kateri prostori aplikacij so prikazani na tem namizju. Vrstni red izbranih prostorov aplikacije določa vrstni red, v katerem so prostori aplikacije prikazani v spletnem odjemalcu.<br><br><b>Namig:</b> Ime za prikaz prostorov aplikacije lahko spremenite tako, da podate nova imena v razdelku <b>Oznake</b> skrbniškega orodja.",
		admin_search_filtered_properties_instruction: "Podajte lastnosti, v katerih lahko uporabniki iščejo. Skrijete lahko katere koli lastnosti, za katere ne želite, da uporabniki iščejo v njih.",
		admin_search_filtered_operators_instruction: "Podajte operatorje, ki so na voljo, ko uporabniki iščejo v določeni vrsti podatkov, kot je datum ali celo število. Skrijete lahko katere koli operatorje, za katere ne želite, da jih uporabniki izberejo.",
		admin_search_default_search_results_instruction: "Podajte lastnosti, ki so prikazane za dokumente in mape v rezultatih iskanja. Skrijete lahko katere koli lastnosti, za katere ne želite, da so prikazane v rezultatih iskanja.",
		admin_search_default_search_results_p8_cmis_instruction: "Podajte lastnosti, ki so prikazane za dokumente v rezultatih iskanja. Skrijete lahko katere koli lastnosti, za katere ne želite, da so prikazane v rezultatih.",

		admin_datetimeOp: "Datum in čas",
		admin_floatOp: "Številka, podana v zapisu s plavajočo vejico",
		admin_integerOp: "Celo število",
		admin_stringOp: "Niz",
		admin_binaryOp: "Dvojiško",
		admin_objectOp: "predmet",
		admin_idOp: "ID",
		admin_userOp: "Uporabnik",
		admin_booleanOp: "Logična vrednost",

		admin_string: "Niz",
		admin_long: "Dolg",
		admin_date: "Datum",
		admin_double: "Dvojni",
		admin_object: "predmet",
		admin_guid: "GUID",
		admin_boolean: "Logična vrednost",

		admin_repcfg_heading: "Preglasite lahko privzeto vedenje tega repozitorija, tako da nastavite konfiguracijske parametre.",
		admin_repcfg_heading_od: "Preglasite lahko privzeto vedenje tega repozitorija, tako da nastavite konfiguracijske parametre.<br /><br /><b>Pomembno:</b> za uporabo spletnega odjemalca skupaj s programom Content Manager OnDemand morate podati tudi vrednosti za parametre, ki so vključeni na zavihku <b>Content Manager OnDemand</b> pod možnostjo <b>Nastavitve</b> in so uporabljeni za vse repozitorije programa Content Manager OnDemand, s katerimi se povežete.",
		admin_repcfg_teamspaces: "Upravljanje timskega prostora:",
		admin_repcfg_enable: "Omogoči",
		admin_repcfg_disable: "Onemogoči",

		admin_repcfg_deliver_redacted_pdf_files_as: "Revidirane datoteke PDF bodo zagotovljene kot:",
		admin_repcfg_burn_pdf_to_pdf: "Datoteke PDF",
		admin_repcfg_burn_pdf_to_tiff: "Datoteke TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Datoteko PDF, ki je revidirana z uporabo redakcij na podlagi vloge, je mogoče stranki zagotoviti v drugi obliki zapisa. Če se spremeni oblika zapisa datoteke, se spremenita tudi pripona datoteke in vrsta MIME.<br><br>Če je na primer datoteka PDF zagotovljena kot datoteka TIFF, se pripona datoteke spremeni v .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Dovoli uporabnikom združevanje in ločevanje strani z redakcijami na podlagi vlog",
		admin_repcfg_redaction_allow_merge_and_split_hover: "To možnost izberite, če želite uporabnikom dovoliti združevanje in ločevanje strani z redakcijami na podlagi vlog. Uporabniki, ki niso uredniki redakcij, ne bodo mogli urejati redakcij na podlagi vlog in jim ne bo odobren dostop do občutljivih podatkov, povezanih z redakcijami na podlagi vlog, tudi če je ta možnost omogočena.",
		admin_repcfg_modify_teamspace_roles: "Lastnikom omogoči spreminjanje vlog obstoječih timskih prostorov",
		admin_repcfg_tm_delete_teamspace: "Lastnikom omogoči brisanje timskega prostora, vključno z vsebino",
		admin_repcfg_tm_delete_teamspace_id_missing: "Podati morate uporabniško ime skrbnika repozitorija.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Podati morate geslo skrbnika repozitorija.",
		admin_repcfg_teamspace_display_Recent: "Prikaži samo nedavno spremenjene timske prostore ",
		admin_repcfg_teamspace_display_Recent_value: "Dnevi od zadnje spremembe:",

		admin_repcfg_folder_selector: "Korenska mapa:",
		admin_repcfg_enable_folder_selector: "Omogoči",
		admin_repcfg_disable_folder_selector: "Onemogoči",
		admin_repcfg_SSO: "Enotna prijava:",
		admin_repcfg_teamspace_template_permission_text: "Dodelite ustvarjalca predloge timskega prostora:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Podajte skupine ali uporabnike, ki lahko ustvarijo predloge timskega prostora. Uporabniki in skupine dobijo ustrezne varnostne nastavitve za zahtevane razrede in mape. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Več informacij</a><br/><br/><b>Priporočilo:</b> za poenostavitev upravljanja timskega prostora uporabljajte skupine.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Podajte skupine ali uporabnike, ki lahko ustvarijo predloge timskega prostora. Uporabniki so dodani v ustrezne ACL-je in dobijo potrebna pooblastila. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Več informacij</a><br/><br/><b>Priporočilo:</b> za poenostavitev upravljanja timskega prostora uporabljajte skupine.",
		admin_repcfg_teamspace_permission_text: "Dodelite vloge timskega prostora:",
		admin_repcfg_teamspace_permission_hover_p8: "Podajte skupine ali uporabnike, ki lahko ustvarijo timske prostore in jih uporabljajo. Uporabniki dobijo ustrezne varnostne nastavitve za zahtevane razrede in mape. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Več informacij</a><br/><br/><b>Priporočilo:</b> za poenostavitev upravljanja timskega prostora uporabljajte skupine.",
		admin_repcfg_teamspace_permission_hover_cm: "Podajte skupine ali uporabnike, ki lahko ustvarijo timske prostore in jih uporabljajo. Uporabniki so dodani v ustrezne ACL-je in dobijo potrebna pooblastila. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Več informacij</a><br/><br/><b>Priporočilo:</b> za poenostavitev upravljanja timskega prostora uporabljajte skupine.",
		admin_repcfg_entry_template_permission_text: "Dodelite vloge predloge vnosa:",
		admin_repcfg_entry_template_permission_hover_p8: "Podajte skupine ali uporabnike, ki lahko ustvarijo predloge vnosa in jih uporabljajo. Uporabniki dobijo ustrezne varnostne nastavitve za razred dokumenta predloge vnosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Več informacij</a><br/><br/><b>Priporočilo:</b> za poenostavitev upravljanja predlog vnosa uporabljajte skupine.",
		admin_repcfg_entry_template_permission_hover_cm: "Podajte skupine ali uporabnike, ki lahko ustvarijo predloge vnosa in jih uporabljajo. Uporabniki so dodani v ustrezne ACL-je in dobijo potrebna pooblastila. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Več informacij</a><br /><br /><b>Priporočilo:</b> za poenostavitev upravljanja predlog vnosa uporabljajte skupine.",
		admin_repcfg_office_template_permission_text: "Dodelite vloge predloge:",
		admin_repcfg_office_template_permission_hover_cm: "Podajte skupine ali uporabnike, ki lahko ustvarijo predloge Microsoft Office Online ali Edit Service in jih uporabljajo. Uporabniki so dodani v ustrezne ACL-je in dobijo potrebna pooblastila.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a><br /><br /><b>Priporočilo:</b> za poenostavitev upravljanja predlog Microsoft Office Online ali Edit Service uporabljajte skupine.",
		admin_repcfg_draft_permission_text: "Dodelite vloge osnutka:",
		admin_repcfg_draft_permission_hover_cm: "Podajte skupine ali uporabnike, ki lahko ustvarijo osnutke dokumentov Microsoft Office Online ali Edit Service med sodelovalnim urejanjem. Vsak uporabnik, ki mora sodelovalno urejati dokumente v storitvah Microsoft Office Online ali Edit Service, mora imeti ustrezna pooblastila za ustvarjanje osnutkov. Uporabniki so dodani v ustrezne ACL-je in dobijo potrebna pooblastila. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a><br /><br /><b>Priporočilo:</b> za poenostavitev upravljanja osnutkov uporabljajte skupine.",
		admin_repcfg_search_permission_text: "Dodelite vloge iskanja:",
		admin_repcfg_search_permission_hover_p8: "Podajte skupine ali uporabnike, ki lahko ustvarijo ali uporabljajo shranjena iskanja in iskanja v več repozitorijih. Uporabniki dobijo ustrezne varnostne nastavitve za zahtevane razrede. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Več informacij</a><br /><br /><b>Priporočilo:</b> za poenostavitev upravljanja iskanja uporabljajte skupine.",
		admin_repcfg_search_permission_hover_cm: "Podajte skupine ali uporabnike, ki lahko ustvarijo, urejajo ali uporabljajo shranjena iskanja in iskanja v več repozitorijih. Uporabniki so dodani v ustrezne ACL-je in dobijo potrebna pooblastila. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Več informacij</a><br /><br /><b>Priporočilo:</b> za poenostavitev upravljanja iskanja uporabljajte skupine.",
		admin_repcfg_search_permission_title: "Vloge iskanja",
		admin_repcfg_search_permission_intro_text: "Zagotovite, da imajo uporabniki dostop do namizja, ki podpira njihovo vlogo. Zagotovite na primer, da imajo ustvarjalci iskanja dostop do namizja, ki jim omogoča ustvarjanje iskanj in iskanj v več repozitorijih.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Skrbniki predlog timskega prostora so uporabniki, ki imajo dovoljenja <b>Popoln nadzor</b> v repozitoriju (shramba predmetov). Seznama skrbnikov predlog timskega prostora ne morete spremeniti iz skrbniškega orodja. <p>Skrbniki predlog timskega prostora lahko izbrišejo ali spremenijo katero koli predlogo timskega prostora. Ni potrebno, da uporabnik, ki ustvari predlogo timskega prostora, to deli s skrbniki predlog timskega prostora.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Ko določite uporabnika ali skupino kot ustvarjalca predloge timskega prostora, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za ustvarjanje predlog timskega prostora. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Več informacij</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Uporabniki in skupine, ki so jim podeljene druge pravice, kot pravice, povezane s skrbniki in ustvarjalci.<p>Te uporabnike in skupine lahko premaknete v vlogo ustvarjalcev predloge timskega prostora, tako da jih odstranite iz vloge Drugi in jim nato dodelite vlogo ustvarjalcev predloge timskega prostora.<p>Pravice, ki so trenutno podeljene tem uporabnikom in skupinam, si lahko ogledate z uporabo IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Skrbniki timskega prostora so uporabniki, ki imajo dovoljenja <b>Popoln nadzor</b> v repozitoriju (shramba predmetov). Seznama skrbnikov timskega prostora ne morete spremeniti iz skrbniškega orodja.<p>Skrbniki timskega prostora lahko izbrišejo ali spremenijo kateri koli timski prostor. Ni potrebno, da uporabnik, ki ustvari timski prostor, tega deli s skrbniki timskega prostora.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Ko določite uporabnika ali skupino kot ustvarjalca timskega prostora, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za ustvarjanje timskih prostorov. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Več informacij</a>",
		admin_repcfg_teamspace_user_hover_p8: "Ko določite uporabnika ali skupino kot uporabnika timskega prostora, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za uporabo timskih prostorov. Vendar mora biti uporabnik član timskega prostora, če želi dostopati do njega. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Več informacij</a><p><b>Nasvet:</b> Če želite, da lahko vsi uporabniki v vašem okolju vidijo timske prostore, lahko vlogi uporabnika timskega prostora dodate psevdo-račun #AUTHENTICATED-USERS.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Uporabniki in skupine, ki so jim podeljene pravice, povezane s skrbniki, ustvarjalci in uporabniki.<p>Te uporabnike in skupine lahko premaknete v vnaprej določene vloge, tako da jih odstranite iz vloge Drugi in jim nato dodelite vloge timskega prostora.<p>Pravice, ki so trenutno podeljene tem uporabnikom in skupinam, si lahko ogledate z uporabo IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Skrbniki predlog vnosa so uporabniki, ki imajo dovoljenja <b>Popoln nadzor</b> v repozitoriju (shramba predmetov). Seznama skrbnikov predlog vnosa ne morete spremeniti iz skrbniškega orodja. <p>Skrbniki predlog vnosa lahko izbrišejo ali spremenijo katero koli predlogo vnosa. Ni potrebno, da uporabnik, ki ustvari predlogo vnosa, to deli s skrbniki predlog vnosa.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Ko določite uporabnika ali skupino kot ustvarjalca predloge vnosa, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za ustvarjanje predlog vnosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Več informacij</a>",
		admin_repcfg_entry_template_user_hover_p8: "Ko določite uporabnika ali skupino kot uporabnika predloge vnosa, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za uporabo predlog vnosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Več informacij</a><p><b>Nasvet:</b> Če želite, da lahko vsi uporabniki v vašem okolju uporabljajo predloge vnosa, lahko vlogi uporabnika predloge vnosa dodate psevdo-račun #AUTHENTICATED-USERS.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Uporabniki in skupine, ki so jim podeljene pravice, povezane s skrbniki, ustvarjalci in uporabniki.<p>Te uporabnike in skupine lahko premaknete v vnaprej določene vloge, tako da jih odstranite iz vloge Drugi in jim nato dodelite vloge predlog vnosov.<p>Pravice, ki so trenutno podeljene tem uporabnikom in skupinam, si lahko ogledate z uporabo IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca predloge timskega prostora, uporabnik ali skupina dobi ustrezna pooblastila za ustvarjanje predlog timskega prostora v repozitoriju. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Več informacij</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca timskega prostora, uporabnik ali skupina dobi ustrezna pooblastila za ustvarjanje timskih prostorov v repozitoriju. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Več informacij</a>",
		admin_repcfg_teamspace_user_hover_cm: "Ko določite uporabnika ali skupino kot uporabnika timskega prostora, uporabnik ali skupina dobi ustrezna pooblastila za uporabo timskih prostorov v repozitoriju. Vendar mora biti uporabnik član timskega prostora, če želi dostopati do njega. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Več informacij</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca predloge vnosa, uporabnik ali skupina dobi ustrezna pooblastila za ustvarjanje predlog vnosa v repozitoriju. <br/><br/>Vendar varnostne nastavitve za določeno predlogo vnosa določajo pooblastila, ki jih ima uporabnik ali skupina za predlogo vnosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Več informacij</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Ko določite uporabnika ali skupino kot urednika predloge vnosa, uporabnik ali skupina dobi ustrezna pooblastila za spreminjanje predlog vnosa v repozitoriju. <br/><br/>Vendar varnostne nastavitve za določeno predlogo vnosa določajo pooblastila, ki jih ima uporabnik ali skupina za predlogo vnosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Več informacij</a>",
		admin_repcfg_entry_user_hover_cm: "Ko določite uporabnika ali skupino kot uporabnika predloge vnosa, uporabnik ali skupina dobi ustrezna pooblastila za uporabo predlog vnosa v repozitoriju. <br/><br/>Vendar varnostne nastavitve za določeno predlogo vnosa določajo pooblastila, ki jih ima uporabnik ali skupina za predlogo vnosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Več informacij</a>",
		admin_repcfg_office_template_creators_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca predloge Microsoft Office Online ali Edit Service, uporabnik ali skupina dobi ustrezna pooblastila za ustvarjanje datotek predloge v repozitoriju. <br/><br/>Vendar varnostne nastavitve za določeno datoteko predloge določajo pooblastila, ki jih ima uporabnik ali skupina za predlogo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a>",
		admin_repcfg_office_template_editors_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca predloge Microsoft Office Online ali Edit Service, uporabnik ali skupina dobi ustrezna pooblastila za spreminjanje datotek predloge v repozitoriju.  <br/><br/>Vendar varnostne nastavitve za določeno datoteko predloge določajo pooblastila, ki jih ima uporabnik ali skupina za predlogo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a>",
		admin_repcfg_office_template_user_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca predloge Microsoft Office Online ali Edit Service, uporabnik ali skupina dobi ustrezna pooblastila za uporabo predloge, ko ustvarijo nov dokument Office Online ali Edit Service prek spletnega odjemalca.  <br/><br/>Vendar varnostne nastavitve za določeno datoteko predloge določajo pooblastila, ki jih ima uporabnik ali skupina za predlogo.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a>",
		admin_repcfg_draft_creators_hover_cm: "To vlogo je treba dodeliti vsem uporabnikom, ki morajo dokumente sodelovalno urejati v Microsoft Office Online ali v storitvi urejanja. Ne dodelite uporabnikov v urejevalnik ali uporabniške vloge. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a>",
		admin_repcfg_draft_editors_hover_cm: "Vsem uporabnikom, ki morajo dokumente sodelovalno urejati v Microsoft Office Online ali v storitvi urejanja, je treba dodeliti vlogo <b>avtorja</b>. Če je uporabniku dodeljena vloga urednika, ne more ustvariti osnutkov, ki so zahtevani za sodelovalno urejanje.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a>",
		admin_repcfg_draft_user_hover_cm: "Vsem uporabnikom, ki morajo dokumente sodelovalno urejati v Microsoft Office Online ali v storitvi urejanja, je treba dodeliti vlogo <b>avtorja</b>. Če je uporabniku dodeljena vloga uporabnika, ne more ustvariti osnutkov, ki so zahtevani za sodelovalno urejanje.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Več informacij</a>",		
		admin_repcfg_search_others_hover_p8: "Uporabniki in skupine, ki so jim podeljene pravice, povezane s skrbniki, ustvarjalci in uporabniki.<p>Te uporabnike in skupine lahko premaknete v vnaprej določene vloge, tako da jih odstranite iz vloge Drugi in jim nato dodelite vloge iskanja.<p>Pravice, ki so trenutno podeljene tem uporabnikom in skupinam, si lahko ogledate z uporabo IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Skrbniki iskanja so uporabniki, ki imajo dovoljenja <b>Popoln nadzor</b> v repozitoriju (shramba predmetov). Seznama skrbnikov iskanja ne morete spremeniti iz skrbniškega orodja. <br /><br />Skrbniki iskanja lahko izbrišejo ali spremenijo katero koli iskanje. Ni potrebno, da uporabnik, ki ustvari iskanje, to deli s skrbniki iskanja.",
		admin_repcfg_search_creators_hover_p8: "Ko določite uporabnika ali skupino kot ustvarjalca iskanja, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za ustvarjanje iskanj. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Več informacij</a>",
		admin_repcfg_search_user_hover_p8: "Ko določite uporabnika ali skupino kot uporabnika iskanja, uporabnik ali skupina dobi ustrezno zaščito v repozitoriju za uporabo iskanj <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Več informacij</a><br /><br /><b>Nasvet:</b> Če želite, da lahko vsi uporabniki v vašem okolju uporabljajo iskanja, lahko vlogi uporabnika iskanja dodate psevdo-račun #AUTHENTICATED-USERS.<br/><br />Uporabnik iskanja lahko privzeto ustvarja iskanja in iskanja v več repozitorijih, vendar jih ne more shraniti. Uporabnikom iskanja lahko preprečite ustvarjanje iskanj, tako da uporabljajo namizje, za katero so izbrane naslednje možnosti:<ul><li><b>Uporabnikom prepreči ustvarjanje iskanj</b></li><li><b>Prepreči uporabo hkratnih iskanj v več repozitorijih</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Ko določite uporabnika ali skupino kot ustvarjalca iskanja, uporabnik ali skupina dobi ustrezna pooblastila za ustvarjanje in shranjevanje iskanj ter iskanj v več repozitorijih v repozitoriju. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Več informacij</a><br /><br /><b>Pomembno:</b> zagotovite, da ustvarjalci iskanja uporabljajo namizje, za katero niso izbrane naslednje možnosti:<ul><li><b>Uporabnikom prepreči ustvarjanje iskanj</b></li><li><b>Prepreči uporabo hkratnih iskanj v več repozitorijih</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Ko določite uporabnika ali skupino kot urednika iskanja, uporabnik ali skupina dobi ustrezna pooblastila za spreminjanje obstoječih iskanj in iskanj v več repozitorijih. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Več informacij</a><br /><br /><b>Nasvet:</b> urednik iskanja lahko privzeto ustvarja iskanja in iskanja v več repozitorijih, vendar jih ne more shraniti. Urednikom iskanja lahko preprečite ustvarjanje iskanj, tako da uporabljajo namizje, za katero so izbrane naslednje možnosti:<ul><li><b>Uporabnikom prepreči ustvarjanje iskanj</b></li><li><b>Prepreči uporabo hkratnih iskanj v več repozitorijih</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Ko določite uporabnika ali skupino kot uporabnika iskanja, uporabnik ali skupina dobi ustrezna pooblastila za odpiranje in izvajanje shranjenih iskanj ter iskanj v več repozitorijih. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Več informacij</a><br /><br /><b>Nasvet:</b> uporabnik iskanja lahko privzeto ustvarja iskanja in iskanja v več repozitorijih, vendar jih ne more shraniti. Uporabnikom iskanja lahko preprečite ustvarjanje iskanj, tako da uporabljajo namizje, za katero so izbrane naslednje možnosti:<ul><li><b>Uporabnikom prepreči ustvarjanje iskanj</b></li><li><b>Prepreči uporabo hkratnih iskanj v več repozitorijih</b></li></ul>",
		admin_repcfg_db_encoding: "Kodiranje znaka strežniške baze podatkov:",
		admin_repcfg_db_encoding_hover: "Privzeto kodiranje znaka za bazo podatkov IBM Content Manager je UTF-8.",
		admin_repcfg_db_encoding_specify: "Podajte kodiranje znaka baze podatkov",
		admin_repcfg_db_encoding_utf8: "Kodiranje UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Podajte to možnost, če uporabljate bazo podatkov, kodirano z UTF-8. IBM Content Navigator uporabi kodiranje UTF-8 za preverjanje dolžine nizov vrednosti lastnosti postavke.",
		admin_repcfg_db_encoding_other: "Druga kodiranja",
		admin_repcfg_db_encoding_other_hover: "Podajte to možnost, če uporabljate bazo podatkov z drugim kodiranjem kot UTF-8. IBM Content Navigator uporabi štetje znakov za preverjanje dolžine nizov vrednosti lastnosti postavke.",
		admin_repcfg_language_codes: "Jezikovne kode strežnika:",
		admin_repcfg_language_codes_avail: "Na voljo",
		admin_repcfg_language_codes_sel: "Izbrano",
		admin_repcfg_pdf_conversion: "Tipi MIME za pretvorbo dokumentov PDF v prilogah:",
		admin_repcfg_pdf_conversion_avail: "Na voljo",
		admin_repcfg_pdf_conversion_sel: "Izbrano",

		admin_repcfg_box_share_enable_classes_label: "Razredi za spreminjanje podpore za skupno rabo v storitvi Box:",
		admin_repcfg_box_share_enable_classes_hover: "Razred lahko spremenite tako, da shrani ID datoteke v storitvi Box, ko je postavka dana v skupno rabo.",
		admin_repcfg_box_share_enable_classes_warning: "Pomembno: Vsi razredi, ki jih podate, se spremenijo tako, da podpirajo skupno rabo v storitvi Box. Ko shranite spremembe, jih ni mogoče odstraniti iz razredov.<br><br>Če želite spremeniti razrede, morate biti povezani z repozitorijem kot skrbnik strežnika knjižnic.",
		admin_repcfg_box_share_enable_classes_available: "Razpoložljivi razredi",
		admin_repcfg_box_share_enable_classes_selected: "Izbrani razredi",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Shrani ID skupne rabe za storitev Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Ta razred je že bil spremenjen, da shrani ID skupne rabe za storitev Box. Te možnosti ni mogoče odstraniti.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Spremenite ta razred, da shrani ID datoteke v storitvi Box, ko je postavka dana v skupno rabo.",

		admin_repcfg_redaction: "Redakcije na podlagi vlog:",
		admin_repcfg_enable_redaction_hover: "Določite, ali želite pri dokumentih v tem repozitoriju uporabiti redakcije na podlagi vlog.<br/><br/>Redakcije na podlagi vlog veljajo, ko je dokument prenesen, natisnjen, ko ga gledalec upodobi ali ko je prikazan v obliki sličice. Kaj si uporabniki lahko ogledajo pri ogledu dokumenta, je odvisno od njihove vloge in ustreznih pravilnikov redakcije.",

		admin_repcfg_redaction_policy_permission_text: "Dodeljevanje urednikov pravilnikov:",
		admin_repcfg_redaction_policy_editors_hover: "Izberite uporabnike in skupine, ki bodo lahko ustvarjali, spreminjali in brisali pravilnike redakcij in vloge za redakcije.",
		admin_repcfg_redaction_policy_editors_select_hover: "Uredniki pravilnikov redakcij lahko ustvarjajo, spreminjajo in brišejo pravilnike redakcij in vloge za redakcije.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Skrbniki pravilnikov redakcij lahko dodelijo urednike pravilnikov redakcij.<br/><br/>Seznam skrbnikov pravilnikov redakcij lahko spremenite z uporabo orodja IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Skrbniki pravilnikov redakcij lahko dodelijo urednike pravilnikov redakcij.<br/><br/>Seznam skrbnikov pravilnikov redakcije lahko spremenite z uporabo odjemalca za skrbništvo nad sistemom IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Dodeljevanje urednikov pravilnikov:",
		admin_repcfg_redaction_editors_hover: "Izberite uporabnike in skupine, ki bodo lahko ustvarjali, spreminjali in brisali redakcije na podlagi vlog. Ko za vloge urednikov izberete uporabnike in skupine, jih morate kot urednike določiti v pravilnikih redakcij, preden lahko urejajo redakcije na podlagi vlog.",
   		admin_repcfg_redaction_editors_select_hover: "Uredniki redakcij lahko ustvarjajo, spreminjajo in brišejo redakcije na podlagi vlog, ko so kot uredniki določeni tudi v pravilnikih redakcij.",
   		admin_repcfg_redaction_administrators_hover_p8: "Skrbniki redakcij lahko dodelijo urednike redakcij.<br/><br/>Seznam skrbnikov redakcij lahko spremenite z uporabo orodja IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Skrbniki redakcij lahko dodelijo urednike redakcij.<br/><br/>Seznam skrbnikov redakcij lahko spremenite z uporabo odjemalca za skrbništvo nad sistemom IBM Content Manager.",
		admin_repcfg_entry_template: "Upravljanje predloge vnosa:",
		admin_repcfg_entry_template_enable_classes_label: "Razredi za spreminjanje za podporo predloge vnosa:",
		admin_repcfg_oos_reference_attribute_label: "Referenčni atributi za Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Pomembno: Vsi razredi, ki jih podate, se spremenijo tako, da podpirajo predloge vnosa. Ko shranite spremembe, jih ni mogoče odstraniti iz razredov.<br><br>Razred lahko spremenite za enega ali oba od naslednjih namenov:<br><ul><li>Za shranjevanje ID-ja predloge vnosa, ki je bil uporabljen za dodajanje postavke, da se uveljavijo nastavitve predloge vnosa, ko se postavka spremeni</li><li>Samo za razrede hierarhične mape: v podporo povezav mape predloge vnosa</li></ul>Če želite spremeniti razrede, morate biti povezani z repozitorijem kot skrbnik strežnika knjižnic.",
		admin_repcfg_entry_template_enable_classes_warning: "Pomembno: Vsi razredi, ki jih podate, se spremenijo tako, da podpirajo predloge vnosa. Ko shranite spremembe, jih ni mogoče odstraniti iz razredov.<br><br>Če želite spremeniti razrede, morate biti povezani z repozitorijem kot skrbnik strežnika knjižnic.",
		admin_repcfg_entry_template_enable_classes_available: "Razpoložljivi razredi",
		admin_repcfg_entry_template_enable_classes_selected: "Izbrani razredi",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Shrani ID predloge vnosa",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Spremenite ta razred, da shrani ID predloge vnosa, ki je bil uporabljen za dodajanje postavke, da se uveljavijo nastavitve predloge vnosa, ko se postavka spremeni.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Shrani povezave mape",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Spremenite ta razred tako, da lahko podpira povezave mape predloge vnosa. Ta možnost je na voljo samo za razrede hierarhične mape.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Ta razred je že bil spremenjen tako, da shrani ID predloge vnosa. Te možnosti ni mogoče odstraniti.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Ta razred je že bil spremenjen tako, da shrani povezave map. Te možnosti ni mogoče odstraniti.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Za shranjevanje povezav map se lahko uporabijo samo razredi hierarhične mape in nehierarhični razredi.",
		admin_repcfg_entry_template_root_folder_association_title: "Predloge vnosa, povezane s korensko mapo:",
		admin_repcfg_entry_template_root_folder_association_hover: "Podajte, katere predloge vnosa želite povezati s korensko mapo v repozitoriju IBM Content Manager.<br /><br />Če predloge vnosa povežete s korensko mapo in uporabniki v hierarhično mapo dodajajo postavke, se postavke vedno dodajo s predloga vnosa.",
		admin_repcfg_entry_template_root_folder_association_button: "Nastavi povezave",
		admin_repcfg_oos_enable_classes_label: "Razredi za spreminjanje za podporo v storitvah Office Online in Edit Service:",
		admin_repcfg_oos_enable_classes_warning: "Pomembno: Vsi razredi, ki jih podate, se spremenijo tako, da delujejo s storitvama Microsoft Office Online ali Edit Service. Ko shranite spremembe, referenčnega atributa, ki je samodejno dodan v vsak razred, ni mogoče odstraniti.<br><br>Če želite spremeniti razrede, morate biti povezani z repozitorijem kot skrbnik strežnika knjižnic.",
		admin_repcfg_oos_enable_classes_available: "Razpoložljivi razredi",
		admin_repcfg_oos_enable_classes_selected: "Izbrani razredi",
		admin_repcfg_oos_enable_classes_note: "Pomembno:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Ta razred v storitvah Microsoft Office Online ali Edit Service ni podprt.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Pravilnik o različici za ta razred je nastavljen na vedno ustvari različico, česar Microsoft Office Online ali Edit Service ne podpirata. Izberite drug razred.",
		admin_repcfg_download_recording: "Sledi prenosom:",
		admin_repcfg_download_recording_hover: "Prenosi se privzeto sledijo, ko je v repozitoriju nameščen dodatek Social Collaboration Base Extensions. Če onemogočite to možnost, se izboljša zmogljivost repozitorija.<br><br>Če onemogočite to možnost, uporabniki vidijo število prenosov, preden je bila možnost onemogočena.",
		admin_repcfg_sync_service: "Sinhronizacijske storitve:",
		admin_repcfg_download_ignored: "Prezri prenose za določene uporabnike:",
		admin_repcfg_download_ignored_hover: "Prezrete lahko zahteve prenosov določenih uporabnikov, kot so skrbniki ali računi sistema, da bo številka uporabnikov, ki so prenesli dokument, natančnejša. Če imate na primer določen račun, ki ga uporabljate za prenos vsebine za izdelavo mesečnega poročila, lahko prezrete prenose, ki jih zahteva ta račun.<br><br><b>Omejitev:</b> Skupin ni mogoče podati.",

		admin_repcfg_add_as_major_version: "Dodaj kot glavno različico:",
		admin_repcfg_enable_add_as_major_version: "Da",
		admin_repcfg_disable_add_as_major_version: "Ne",
		admin_repcfg_checkin_as_major_version: "Prijavi kot glavno različico:",
		admin_repcfg_enable_checkin_as_major_version: "Da",
		admin_repcfg_disable_checkin_as_major_version: "Ne",
		admin_repcfg_annotation_security: "Zaščita pripombe:",
		admin_repcfg_inherit_annotation_security: "Podvoji zaščito vsebujočega dokumenta",
		admin_repcfg_default_annotation_security: "Uporabi privzeto zaščito pripomb",
		admin_repcfg_connection_point: "Povezovalna točka delovnega toka:",
		admin_repcfg_include_workflow_definition: "Prikaži razred definicije delovnega toka:",
		admin_repcfg_include_form_template: "Prikaži razred predloge obrazca:",
		admin_repcfg_enable_include_workflow_definition: "Da",
		admin_repcfg_disable_include_workflow_definition: "Ne",

		admin_repcfg_status_columns: "Ikone stanja:",
		admin_repcfg_status_columns_hover: "Podajte stanja, za katera želite prikazati ikone. Ikone stanja so prikazane poleg dokumentov, map in delovnih postavk na seznamu vsebine.",
		admin_repcfg_status_columns_documents_or_folders: "Prikaži ikono, ko (so) dokumenti ali mape:",
		admin_repcfg_status_columns_documents: "Prikaži ikono, ko (so) dokumenti:",
		admin_repcfg_status_columns_documents_checked_out: "Odjavljeni",
		admin_repcfg_status_columns_documents_declared_records: "Deklarirani kot dokumentarno gradivo",
		admin_repcfg_status_columns_documents_minor_versions: "Imajo podrazličice",
		admin_repcfg_status_columns_documents_compound_document: "So sestavljeni dokumenti",
		admin_repcfg_status_columns_documents_bookmarks: "Imajo zaznamke",
		admin_repcfg_status_columns_documents_hold: "So zadržani",
		admin_repcfg_status_columns_documents_notes: "Imajo opombe",
		admin_repcfg_status_columns_work_items: "Prikaži ikono, ko (so) delovne postavke:",
		admin_repcfg_status_columns_work_items_locked: "Zaklenjene",
		admin_repcfg_status_columns_work_items_checked_out: "Odjavljeni",
		admin_repcfg_status_columns_work_items_deadline: "Imajo rok",
		admin_repcfg_status_columns_work_items_suspended: "Začasno ustavljene iz obdelave",

		admin_repcfg_afp2pdf_config_file: "Konfiguracijska datoteka AFP2PDF:",
		admin_repcfg_transform_xml_file: "Pretvorbena datoteka po meri:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Omogoči",
		admin_repcfg_disable_ssl: "Onemogoči",
		admin_repcfg_keyringdb_file: "Datoteka baze podatkov z obročkom za ključe:",
		admin_repcfg_keyringstash_file: "Skrita datoteka z obročkom za ključe:",
		admin_repcfg_od_sso: "Enotna prijava",
		admin_repcfg_od_enable_sso: "Omogoči",
		admin_repcfg_od_disable_sso: "Onemogoči",
		admin_repcfg_od_sso_password: "Geslo",
		admin_repcfg_advanced_label: "Napredno",
		admin_repcfg_custom_properties_label: "Lastnosti po meri:",
		admin_repcfg_new_button_label: "Nov",
		admin_repcfg_edit_button_label: "Uredi",
		admin_repcfg_delete_button_label: "Izbriši",
		admin_repcfg_custom_head1: "Ime",
		admin_repcfg_custom_head2: "Vrednost",
		admin_repcfg_ecpdialog_title_new: "Nova lastnost po meri",
		admin_repcfg_ecpdialog_title_edit: "Uredi lastnost po meri",
		admin_repcfg_ecpdialog_name: "Ime:",
		admin_repcfg_ecpdialog_value: "Vrednost:",
		admin_repcfg_ecpdialog_save: "Shrani",
		admin_repcfg_ecpdialog_create: "Ustvari",
		admin_repcfg_ecpdialog_cancel: "Prekliči",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Zahtevana je vrednost. Vrednost ne sme vsebovati praznih mest in ne sme biti podvojena.",

		admin_repcfg_cmis_use_gzip_encoding: "Uporabi kodiranje GZIP:",

		admin_repcfg_task_mgr_proxy: "ID povezave za upravitelja opravil:",
		admin_repcfg_task_mgr_proxy_hover: "Za skupno rabo storitve Box ali izbris timskega prostora mora upravitelj opravila uporabiti ID in geslo skrbniškega uporabnika, da lahko izvede opravila v ozadju, ki spremenijo repozitorij.<br><br>Kliknite Nastavi in se prijavite v repozitorij z veljavnim ID-jem za skrbniškega uporabnika repozitorija.",
		admin_task_manager_not_enabled_warning: "Ta možnost zahteva storitev upravitelja opravil, vendar storitev upravitelja opravil ni omogočena.  Storitev upravitelja opravil lahko omogočite za vsa namizja na strani Splošno za nastavitve.",
		admin_task_manager_not_enabled_and_user_warning: "Ta možnost zahteva storitev upravitelja opravil, vendar storitev upravitelja opravil ni omogočena. Na tej strani nastavite ID povezave za upravitelja opravil in nato na strani Splošno za nastavitve omogočite storitev upravitelja opravil za vsa namizja.",
		admin_task_manager_user_id_pw_not_set_warning: "Ta možnost zahteva storitev upravitelja opravil in ID skrbniškega uporabnika ter geslo. Na tej strani nastavite ID povezave za upravitelja opravil.",
		admin_repcfg_teamspaces_delete_task_id: "Skrbnik repozitorija:",
		admin_repcfg_teamspaces_delete_task_password: "Geslo:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Podati morate skrbnika strežnika knjižnic, da storitvi upravitelja opravil omogočite brisanje timskega prostora v repozitoriju.",
		admin_repcfg_teamspaces_delete_task_hover: "Če uporabnik izbriše timski prostor, je timski prostor privzeto skrit. Vse mape in dokumenti v timskem prostoru ostanejo v repozitoriju. <br /> <br />Če omogočite to možnost, ostanejo v repozitoriju samo dokumenti, vloženi v drugih mapah v repozitoriju.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Če imate v okolju veliko število timskih prostorov, lahko dolgo traja, da se vsi timski prostori prikažejo na zavihku <b>Timski prostori</b>. To možnost lahko izberete, da skrajšate čas, potreben za poseljevanje seznama.<br /><br />Če mora uporabnik delati s timskim prostorom, ki je zunaj podanega območja, lahko uporabnik uporabi polje <b>Filter</b>, da najde timski prostor.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Če izberete to možnost, lahko uporabniki z vlogo lastnika v timskem prostoru spreminjajo vloge, ki so povezane s timskimi prostori, ustvarjenimi pred uporabo programske opreme IBM Content Navigator različice 2.0.2.<br /><br />Ta možnost ne vpliva na timske prostore, ustvarjene s programsko opremo IBM Content Navigator različice 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Podajte, ali želite uporabnikom omogočiti ustvarjanje timskih prostorov in predlog timskega prostora v tem repozitoriju. <br /><br /><b>Pomembno:</b> repozitorij mora podpirati hierarhične mape. <br /><br />Če omogočite timske prostore, IBM Content Navigator ustvari podatkovni model timskega prostora v repozitoriju. Podatkovni model vključuje predmete ACL, privilegije, nabore privilegijev in dve novi vrsti postavke.",
		admin_repcfg_folder_selector_hover: "Izberite mapo, ki jo želite uporabiti kot korensko mapo, ko uporabniki brskajo po dokumentih. Če v vašem repozitoriju hierarhične mape niso konfigurirane, vam ta nastavitev omogoča podporo za brskanje z definiranjem korenske mape. Če so v vašem repozitoriju konfigurirane hierarhične mape, ta nastavitev preglasi korensko mapo, ki je konfigurirana v repozitoriju.",
		admin_repcfg_cm_use_sso_hover: "Podajte, ali želite omogočiti enotno prijavo za uporabnike z naborom privilegijev zaupne prijave.<br /><br /><b>Pomembno:</b> v strežniku Content Manager mora biti omogočena enotna prijava in strežnik WebSphere Application Server mora biti konfiguriran za LTPA, da ta konfiguracijski parameter deluje.",
		admin_repcfg_cm_direct_retrieve_hover: "Neposredna pridobitev je privzeto omogočena, ker spletnemu odjemalcu omogoča hitro pridobivanje vsebine iz upravljalnika virov. <br /><br />To možnost lahko onemogočite, če ne želite, da aplikacija odjemalca neposredno dostopa do upravljalnika virov ali če imate požarni zid ali strežnik proxy, ki spletnemu odjemalcu preprečuje dostop do upravljalnika virov prek URL-jev. Požarni zid lahko uporabnikom na primer preprečuje ogled dokumentov v prikazovalniku aplikacijskih programčkov, ko je omogočena neposredna pridobitev.",
		admin_repcfg_cmItemTypesToDisplay: "Če želite uporabnikom skriti podatke o vrstah postavk virov in vrstah drugih postavk v strežniku IBM Content Manager, lahko omogočite samo prikaz vrst postavk dokumentnega modela. Vrste postavk se prikažejo, ko uporabniki ustvarjajo iskanja, dodajajo dokumente in ustvarjajo mape.",
		admin_repcfg_cm_language_codes_hover: "Podajte jezike, v katerih so vrnjeni podatki iz strežnika Content Manager. Seznam razpoložljivih jezikov nadzoruje seznam definicij jezika v strežniku.<br /><br /><b>Pomnite:</b> podatki v spletnem odjemalcu so prikazani v jeziku, ki je nastavljen v spletnem brskalniku uporabnika.",
		admin_repcfg_cm_pdf_conversion_hover: "Podajte vrste dokumentov, ki bodo pretvorjeni v PDF, ko uporabnik pošlje dokument z več deli kot prilogo e-pošte. Vsi deli so združeni v en dokument PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Podajte, ali želite uporabnikom omogočiti ustvarjanje timskih prostorov in predlog timskega prostora v tem repozitoriju.<br /><br />Če omogočite timske prostore, IBM Content Navigator ustvari podatkovni model timskega prostora v repozitoriju. Podatkovni model vključuje predloge lastnosti, predmete po meri, predmet mape in različne mape.",
		admin_repcfg_use_entry_template_p8_hover: "Podajte, ali želite, da lahko uporabniki ustvarjajo in upravljajo predloge vnosov v tem repozitoriju iz IBM Content Navigator. Če ne omogočite te možnosti, lahko uporabniki iščejo in uporabljajo predloge vnosa, ki so že v repozitoriju.<br /><br />Če omogočite upravljanje predloge vnosa, IBM Content Navigator posodobi podatkovni model predloge vnosa v repozitoriju. Posodobitev vključuje nove lastnosti. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Več informacij</a>",
		admin_repcfg_use_entry_template_cm_hover: "Podajte, ali želite, da lahko uporabniki ustvarjajo in upravljajo predloge vnosov v tem repozitoriju iz IBM Content Navigator.<br /><br />Če omogočite upravljanje predloge vnosa, IBM Content Navigator ustvari podatkovni model predloge vnosa v repozitoriju. Podatkovni model vključuje nov predmet ACL, nove lastnosti in nov tip postavke. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Več informacij</a>",
		admin_repcfg_sync_service_p8_hover: "Podajte, ali želite, da lahko uporabniki sinhronizirajo priljubljene postavke v več delovnih postajah in mobilnih napravah.<br><br><b>Pomembno:</b> če želite uporabiti to funkcijo, morate dokončati tudi naslednje naloge:<br><ul><li>V razdelku <b>Sinhronizacijske storitve</b> skrbniškega orodja podajte <b>Javni URL sinhronizacijskih storitev</b>.</li><li>Ta repozitorij dodajte namizju, za katerega so omogočene sinhronizacijske storitve.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Podajte, ali je možnost glavne različice izbrana privzeto, ko uporabniki dodajajo dokumente v repozitorij.<br /><br />Uporabniki lahko počistijo to možnost, če želijo dodati dokument kot podrazličico.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Podajte, ali je možnost glavne različice izbrana privzeto, ko uporabniki prijavljajo dokumente v repozitorij.<br /><br />Uporabniki lahko počistijo to možnost, če želijo prijaviti dokument kot podrazličico.",
		admin_repcfg_p8_annotation_security_hover: "Podajte, katera vrsta zaščite privzeto velja za pripombe.<br /><br />Uporabniki lahko spremenijo zaščito pripomb.",
		admin_repcfg_p8_connection_point_hover: "Če želite uporabljati delovne tokove IBM FileNet P8, izberite povezovalno točko za Process Engine. Izbrana povezovalna točka določa, kateri delovni tokovi so na voljo uporabnikom, ki dostopajo do tega repozitorija.",
		admin_repcfg_p8_include_workflow_definition_hover: "Če prikažete dokumentni razred za definicije delovnih tokov IBM FileNet P8 v spletnem odjemalcu, lahko uporabniki poiščejo in dodajo definicije delovnih tokov v repozitorij.",
		admin_repcfg_p8_include_form_template_hover: "Če prikažete dokumentni razred za predloge obrazcev IBM FileNet P8 v spletnem odjemalcu, lahko uporabniki poiščejo in dodajo predloge obrazcev v repozitorij.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Podajte popolnoma kvalificirano pot konfiguracijske datoteke AFP2PDF za ta repozitorij v spletnem aplikacijskem strežniku. Od pretvorbe AFP2PDF se zahteva ogled in tiskanje podatkov AFP.<br /><br /><b>Pomnite:</b> za uporabo tega parametra je potrebna namestitev pretvorbe AFP2PDF.",
		admin_repcfg_od_transform_xml_file_hover: " Če želite uporabiti pretvorbo po meri za pretvarjanje vsebine Content Manager OnDemand, podajte popolnoma kvalificirano pot datoteke XML, ki se uporablja za definicijo pretvorbe. Datoteka XML mora biti v spletnem aplikacijskem strežniku.",
		admin_repcfg_od_ssl_hover: "Podajte, ali naj se uporabi SSL za šifriranje komunikacije med aplikacijskim strežnikom IBM Content Navigator in strežnikom knjižnic Content Manager OnDemand ter predmetnimi strežniki.<br /><br /><b>Pomembno:</b> ko omogočite SSL za Content Manager OnDemand, ta ne vključuje komunikacije med aplikacijskim strežnikom IBM Content Navigator, spletnim strežnikom ali delovnimi postajami uporabnikov.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Podajte popolnoma kvalificirano pot datoteke baze podatkov s ključi za ta repozitorij v spletnem aplikacijskem strežniku. Na primer, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Datoteka baze podatkov obroča ključev vsebuje vaše zaupanja vredna korenska digitalna potrdila. Za preprečevanje nepooblaščenega dostopa do te datoteke uporabite močno zaščito datotečnega sistema.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Podajte popolnoma kvalificirano pot skrite datoteke s ključi za ta repozitorij v spletnem aplikacijskem strežniku. Na primer, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Skrita datoteka obroča ključev vsebuje geslo za datoteko baze podatkov obroča ključev. Za preprečevanje nepooblaščenega dostopa do te datoteke uporabite močno zaščito datotečnega sistema.",
		admin_repcfg_od_sso_password_hover: "Podajte geslo za enotno prijavo v strežnik OnDemand.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API podpira lastnosti po meri. Če želite lastnosti po meri uporabljati med vzpostavljanjem povezave z repozitorijem prek spletnega odjemalca, podajte imena in vrednosti lastnosti po meri.<br /><br />Za več informacij o podprtih lastnostih po meri glejte dokumente Java (Javadocs) za ODWEK Java API, ki jih najdete v podimeniku /api namestitvenega imenika ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Vnesite ime lastnosti.",
		admin_repcfg_od_custom_properties_value_hover: "Vnesite vrednost lastnosti.",
		admin_repcfg_od_use_sso_hover: "Navedite, ali želite za uporabnike omogočiti enotno prijavo.<br /><br /><b>Pomembno:</b> Enotna prijava v strežnik Content Manager OnDemand mora biti omogočena, da bo ta konfiguracijski parameter deloval.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Za ta izvor CMIS uporabite kodiranje GZIP.",
		admin_repcfg_cm_use_part_file_name: "Ime datoteke, ki bo uporabljeno pri prenosu dokumentov:",
		admin_repcfg_cm_use_part_file_name_help: "Podajte, kako naj se določijo imena dokumentov, kadar uporabniki prenašajo dokumente.",
		admin_repcfg_cm_use_part_file_name_enable: "Uporabi ime datoteke",
		admin_repcfg_cm_use_part_file_name_disable: "Uporabi ime postavke v repozitoriju",
		admin_repcfg_add_doc_name: "Privzeto ime za dodani dokument:",
		admin_repcfg_add_doc_name_hover: "Uporabniki lahko spremenijo ime, preden dodajo dokument.",
		admin_repcfg_add_doc_name_empty: "Brez (prazno)",
		admin_repcfg_add_doc_name_file_name: "Ime datoteke izbranega dokumenta",

		admin_repcfg_compound_documents: "Funkcije sestavljenega dokumenta:",
		admin_repcfg_compound_documents_hover: "Omogočite funkcije sestavljenega dokumenta P8, kot je navigacija.",
		admin_repcfg_cm_action_list_config_enabled: "Seznam akcij delovne postavke:",
		admin_repcfg_cm_action_list_config_hover: "Ko konfigurirate usmerjanje dokumenta v odjemalcu za skrbništvo nad sistemom Content Manager, lahko podate seznam dejanj, ki jih lahko uporabnik izvede za delovno postavko.<br /><br />To možnost omogočite, če želite uporabljati seznam akcij iz strežnika Content Manager. Te nastavitve se uporabljajo v kontekstnem meniju in v oknu Urejanje lastnosti za delovno postavko.<br /><br /><b>Pomembno:</b> Nastavitve na seznamu akcij preglasijo morebitne prilagojene menije, ki jih konfigurirate v skrbniškem orodju Content Navigator. Če na seznamu akcij ni nastavitev, uporabnik na delovnih postavkah ne bo mogel izvesti nobenega dejanja.",

		admin_repcfg_box_share: "Skupna raba v storitvi Box",
		admin_repcfg_box_share_p8_hover: "Uporabnikom omogoča, da dajo dokument iz tega repozitorija v skupno rabo. Skupna raba dokumenta vključuje kopiranje datoteke v storitev Box, ustvarjanje povezave in pošiljanje povezave v e-pošti.<br /><br />Če omogočite skupno rabo v storitvi Box, bo izdelek IBM Content Navigator v repozitoriju ustvaril podatkovni model za skupno rabo v storitvi Box. Če želite namestiti dodatek za skupno rabo v storitvi Box v izdelek IBM Content Navigator, morate biti povezani z repozitorijem kot skrbnik strežnika knjižnic.",

		admin_menu_type_icon: "Ikona vrste menija",
		admin_menu_toolbar_hover: "Orodjarna",
		admin_menu_toolbar_custom_hover: "Orodna vrstica po meri",
		admin_menu_contextMenu_hover: "Kontekstni meni",
		admin_menu_contextMenu_custom_hover: "Kontekstni meni po meri",

		admin_menu_contextMenu_custom_empty: "V konfiguriranih vtičnikih ni določen noben kontekstni meni po meri.",
		admin_menu_toolbar_custom_empty: "V konfiguriranih vtičnikih ni določena nobena orodna vrstica po meri.",

		admin_file_type_category_filters: "Filtri vrst datotek:",
		admin_file_type_category_filters_hover_help: "Podajte seznam vrst datotek, ki jih lahko uporabniki uporabljajo v naslednjih situacijah:<ul><li>Za zoženje seznama rezultatov pri iskanju v ali brskanju po IBM Content Navigator for Microsoft Office<li>Za zoženje seznama rezultatov pri iskanju v repozitoriju IBM FileNet P8 v spletnem odjemalcu<li>Za omejitev vrst datotek, ki jih lahko uporabniki dodajo v repozitorij pri uporabi predloge</ul>",
		admin_file_type_only_use_in_et_folder_association: "Prikaži samo v povezavah mape predloge vnosa",
		admin_office_config_properties_label: "Lastnosti za Office",
		admin_office_config_type_label: "Vrsta podatkov",
		admin_office_config_mapped_property_label: "Lastnost repozitorija",
		admin_office_config_properties_hover_help: "Vnesite in nato dodajte ime vsake lastnosti Microsoft Office, ki jo želite preslikati v lastnost repozitorija. Vrsta podatkov vseh lastnosti se mora ujemati",
		admin_office_config_mapped_property_hover_help: "Če želite preslikati lastnosti za Office v več lastnosti repozitorija, ustvarite novo preslikavo lastnosti",
		admin_new_property_mapping_title: "Preslikava nove lastnosti",
		admin_property_mapping_title: "Uredi preslikavo lastnosti",
		admin_property_mapping_instruction: "Podajte, katere lastnosti Microsoft Office želite preslikati v lastnost repozitorija. Vrsta podatkov lastnosti za Office se mora ujemati z vrsto podatkov lastnosti v repozitoriju. <br /><br />Če ima dokument zbirke Office več lastnosti iz preslikave, IBM Content Navigator s prvo lastnostjo na seznamu poseli lastnost v repozitoriju.",
		admin_ms_general_settings: "Splošna konfiguracija:",
		admin_ms_delete_local_settings: "Izbriši lokalne datoteke, ko uporabniki:",
		admin_ms_outlook_options: "Integracija Outlooka:",
		admin_ms_enable_props_mapping: "Preslikaj lastnosti za Office v lastnosti repozitorija, ko uporabniki:",
		admin_ms_open_doc_when_checkout: "Samodejno odjavi dokument, ko se odpre",
		admin_ms_open_doc_when_checkout_hover_help: "Izbira te možnosti prepreči uporabnikom, da bi prepisali datoteko v repozitoriju s starejšo različico datoteke.",
		admin_ms_prompt_close_office: "Pozovi uporabnike, naj prijavijo dokumente, ko zaprejo aplikacije zbirke Office",
		admin_ms_prompt_close_office_hover_help: "Izbira te možnosti preprečuje uporabnikom, da bi pozabili prijaviti svoje delo.",
		admin_ms_add_with_entry_template_only: "Prikaži samo dejanje Dodaj s šablono",
		admin_ms_delete_local_on_add: "Izbriši lokalne datoteke, ko uporabniki dodajo dokumente",
		admin_ms_delete_local_on_checkin: "Izbriši lokalne datoteke, ko uporabniki prijavijo dokumente ali prekličejo odjavo",
		admin_ms_delete_local_on_add_hover_help: "Ko uporabnik doda dokument v IBM Content Navigator for Microsoft Office, je dokument dodan v repozitorij in lokalna kopija dokumenta ostane odprta, tako da lahko uporabniki takoj odjavijo dokument in izvedejo spremembe.<br /><br />To možnost izberite, če želite, da se po dodajanju dokumenta v repozitorij lokalna kopija dokumenta samodejno zapre in izbriše.",
		admin_ms_delete_local_on_checkin_hover_help: "Ko uporabnik prijavi dokument v IBM Content Navigator for Microsoft Office, je dokument prijavljen v repozitorij in lokalna kopija dokumenta ostane odprta. Tudi po uporabi dejanja preklica odjave ostane lokalna kopija dokumenta odprta. Ko je lokalna kopija odprta, lahko uporabniki takoj znova odjavijo dokument in izvedejo spremembe.<br /><br />To možnost izberite, če želite, da se po prijavi dokumenta ali uporabi dejanja preklica odjave lokalna kopija dokumenta samodejno zapre in izbriše.",
		admin_ms_delete_local_on_save: "Shrani dokument",
		admin_ms_prompt_for_props_on_add: "Pozovi uporabnike, naj podajo vrednosti lastnosti, ko dodajo e-pošto v repozitorij",
		admin_ms_prompt_for_props_on_add_hover_help: "Če ne izberete te možnosti, spletni odjemalec uporabi preslikavo lastnosti za program Outlook, ki je definirana za repozitorij.<br /><br />Če so predloge vnosa povezane z mapo, v katero se doda e-pošta, uporabnik morda ne bo pozvan za nobeno lastnost.",
		admin_ms_delete_email_on_add: "Izbriši e-pošto iz e-poštnega strežnika, ko je dodana v repozitorij",
		admin_ms_send_email_as_link_only: "Prepreči uporabnikom pošiljanje dokumentov kot priloge",
		admin_ms_send_email_as_link_only_hover_help: "Če izberete to možnost, lahko uporabniki dokumente pošiljajo samo kot priloge iz programa Outlook. Ta možnost zagotovi, da si lahko dokumente ogledajo samo uporabniki z ustreznimi pooblastili v repozitoriju.",
		admin_ms_enable_prop_mapping_for_add: "Preslikaj lastnosti za Office v lastnosti repozitorija, ko uporabniki dodajo ali prijavijo dokumente",
		admin_ms_checkout_document_after_add: "Samodejno odjavi dokumente, potem ko so dodani v repozitorij",
		admin_no_default_document_type_filtering: "Privzeto vrni vse vrste dokumentov, ko uporabniki izvajajo iskanja",
		admin_no_default_document_type_filtering_hover_help: "V orodju IBM Content Navigator for Microsoft Office je privzeto vedenje, da uporabniki pri iskanju vidijo samo vrsto dokumenta za trenutno aplikacijo. Če na primer iščejo iz programa Microsoft Word, je privzeto izbrana vrsta dokumenta Word.<br/><br/>Toda če izberete to možnost, se pobrišejo potrditvena polja za vrsto dokumentov, da uporabniki vidijo vse dokumente, ki jih vrne iskanje. Uporabniki lahko prepišejo to nastavitev z izbiro ene ali več vrst dokumentov, preden zaženejo iskanje.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Podajte, ali želite preslikati lastnosti dokumenta, definirane za dokumente Microsoft Office, v lastnosti, definirane v repozitoriju.<br /></br /><b>Pomembno:</b> Če omogočite to funkcijo, morate konfigurirati lastnosti za Office za vsak repozitorij v vašem okolju. Če ne preslikate lastnosti za Office v lastnosti repozitorija, ta funkcija ne bo delovala.<br /><br />Ta nastavitev ne velja za Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "To možnost izberite, če želite zmanjšati število korakov, ki jih morajo izvesti uporabniki pri delu z dokumenti, potem ko so ti dodani v repozitorij.<br /></br /><b>Nasvet:</b> če želite zagotoviti, da bodo uporabniki znova prijavili datoteke v repozitorij, izberite možnost <b>Ob zapiranju aplikacij Office pozovi uporabnike, naj prijavijo dokumente</b>.",
		admin_ms_show_details_recently_used: "Prikaži podrobnosti <b>Nedavno uporabljene</b> postavke",
		admin_ms_show_details_recently_used_hover_help: "Ko si ogledujete seznam nedavno uporabljenih postavk, so podrobnosti postavk privzeto skrite, da je lahko prikazanih več postavk. Ko na seznamu nedavno uporabljenih postavk izberete to možnost so podrobnosti za prvi dokument privzeto prikazane v podoknu s podrobnostmi.",
		admin_ms_show_no_permissions_warning: "Prikaži opozorila, ko uporabniki uredijo lastnosti ali prijavijo dokument, vendar nimajo dovoljenja za ogled vnosne predloge dokumenta",
		admin_ms_show_no_permissions_warning_hover_help: "Če je bil dokument v repozitoriju ustvarjen z vnosno predlogo, vendar uporabnik nima dovoljenja za ogled vnosne predloge dokumenta, se vnosna predloga ne pridobi.<br /><br/>Tako velja naslednje: ko uporabnik uredi lastnosti dokumenta, se lastnosti prikažejo brez uporabe vnosne predloge. In ko uporabnik prijavi dokument, je ta prijavljen brez uporabe vnosne predloge.<br /><br />Privzeto se ta dejanja izvedejo, ne da bi se uporabnika obvestilo, da vnosna predloga ni uporabljena. Opozorilo se zabeleži samo v dnevniško datoteko.<br /><br />To možnost izberite, če želite prikazati obvestila, ki uporabniku takoj sporočijo, da vnosna predloga ni uporabljena.",
		admin_ms_hide_search_actions: "Strni razdelek iskalnega filtra",
		admin_ms_hide_search_actions_hover_help: "Privzeto lahko uporabniki s filtrom dejanj podajo dejanje, uporabnika ali skupino uporabnikov ter izberejo datum ali datumski obseg, v katerem je bilo izvedeno dejanje. Iščete lahko na primer samo dokumente, ki ste jih dodali v preteklem mesecu.<br /><br />Če uporabnikom ne želite dovoliti uporabe filtrov dejanj, uporabite to možnost in skrijte filtre dejanj ter zmanjšajte število polj, ki so prikazana pri določanju kriterijev iskanja.",
		admin_ms_hide_save_document: "Skrij možnost <b>Shrani</b> v traku",
		admin_ms_hide_save_document_hover_help: "Z možnostjo <b>Shrani</b> lahko uporabniki shranijo spremembe dokumenta v repozitorij, ne da bi morali preverjati dokumenta.",
		admin_ms_indicate_managed_email_on_add: "Navedite, ali je bila v repozitorij že dodana elektronska pošta",
		admin_ms_indicate_managed_email_on_add_hover_help: "Če izberete to možnost, bodo uporabniki vedeli, da je v repozitoriju že elektronska pošta, kar zmanjša število dodajanj elektronske pošte v repozitorij.  Ko je ta možnost izbrana, se v programu Microsoft Outlook ustvari nova barvna kategorija, imenovana IBM ECM. Vsa elektronska pošta, dodana v repozitorij, se samodejno doda v kategorijo Upravljano v IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Možnosti dodajanja v skupini Urejanje:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Podajte, katere možnosti <b>Dodajanja</b> so na voljo v skupini <b>Urejanje</b> v traku:<ul><li>Izberite <b>Prikaži vse možnosti dodajanja</b>, da se prikaže gumb Dodajanje in vsa dejanja dodajanja, ki so na voljo v skupini Urejanje.</li><li>Izberite <b>Skrij vse možnosti dodajanja</b>, da uporabnikom preprečite dodajanje dokumentov v repozitorij ali če želite, da uporabniki dodajajo dokumente samo iz timskega prostora.</li><li>Izberite <b>Skrij dejanje Dodaj s predlogo</b>, če želite uveljaviti povezave mape predloge vnosa in preprečiti uporabnikom izbiro druge predloge vnosa.</li><li>Izberite <b>Prikaži samo dejanje Dodaj s predlogo</b>, če želite, da bodo uporabniki morali dodajati dokumente s predlogami vnosov.</li></ul>",
		admin_ms_show_edit_group_add_button: "Prikaži vse možnosti dodajanja (privzeto)",
		admin_ms_hide_edit_group_add_button: "Skrij vse možnosti dodajanja",
		admin_ms_hide_add_with_entry_template: "Skrij dejanje Dodaj s predlogo",
		admin_ms_managed_in_ecm: "Upravljano v IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Če uporabniki prikažejo kategorije v programu Microsoft Outlook, se ta oznaka prikaže za e-pošto, ki je bila dodana v repozitorij IBM Content Manager ali IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Ime kategorije Upravljano v IBM ECM ne sme vsebovati vejice (,) ali podpičja (;).",
		admin_delete_open_docs_after_close: "Samodejno izbriši odprte dokumente, ko uporabniki zaprejo dokumente",
		admin_admin_delete_open_docs_after_close_hover_help: "Ko uporabnik odpre dokument v IBM Content Navigator for Microsoft Office, se dokument prenese v uporabniški imenik dokumenta ali na lokacijo, podano z nastavitvami sledenja datotek za namizje.<br><br>Izberite to možnost za brisanje datotek, ki so odprte, vendar niso odjavljene, ko uporabniki zaprejo dokumente. Če izberete to možnost, lahko:<ul><li>uveljavite upoštevanje pravilnikov IT;</li><li>zagotovite, da uporabniki delajo z najnovejšimi različicami dokumentov.</li><li>zmanjšate velikost prostora na disku, ki se uporablja za shranjevanje dokumentov.</li><ul>",
		admin_ms_custom_command_configuration: "Ukazi po meri:",
		admin_ms_custom_command_configuration_hover_help: "V orodno vrstico IBM Content Navigator for Microsoft Office v aplikacijah Microsoft Office lahko dodate največ štiri ukaze. Ukazi se lahko uporabljajo za odpiranje URL-jev. Dodate lahko na primer ukaz za odpiranje storitve, ki se lahko uporablja za iskanje uporabnikov in skupin.",
		admin_ms_custom_command_dialog_title: "Urejanje ukaza po meri",
		admin_ms_custom_command_dialog_intro_text: "Definirajte ukaz, ki se lahko uporablja za odpiranje URL-ja iz orodne vrstice IBM Content Navigator for Microsoft Office v aplikacijah Microsoft Office.",
		admin_ms_custom_command_id: "Ukaz ${0}",
		admin_ms_custom_command_available_label: "Na voljo",
		admin_ms_custom_command_available_hover_help: "Če je treba URL, ki se uporablja za ukaz, zaradi vzdrževanja odstraniti s spleta, lahko pobrišete potrditveno polje za ukaz, da ni prikazan v programu Microsoft Office.<br/><br/><b>Pomembno:</b> Uporabniki se morajo odjaviti z namizja, da bodo spremembe v IBM Content Navigator for Microsoft Office vidne.",
		admin_ms_custom_command_command_id_label: "ID ukaza",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Oznaka",
		admin_ms_custom_command_label_hover_help: "Podajte oznako za prikaz ukaza v Microsoft Office.",
		admin_ms_custom_command_description_label: "Opis",
		admin_ms_custom_command_description_hover_help: "Podajte opis za prikaz ukaza v Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Podajte popolnoma kvalificiran URL za odpiranje iz programa Microsoft Office. URL je lahko spletna stran ali storitev.",
		admin_ms_custom_command_icon_label: "Ikona",
		admin_ms_custom_command_icon_hover_help: "Podajte ime datoteke ikone za prikaz, na primer CommandIcon.png.<br/><br/><b>Pomembno:</b> Dodati morate datoteko ikone v podimenik vtičnikov namestitvenega imenika IBM Content Navigator for Microsoft Office v posameznem odjemalskem računalniku.<br/><br/>Če datoteke ikone ni v imeniku vtičnikov ali ne podate ikone, se prikaže privzeta ikona customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Oznaka skupine:",
		admin_ms_custom_command_group_name_hover_help: "Podate lahko oznako skupine za prikaz pod prilagojenimi ukazi v traku.<br/><br/>Če oznake ne podate, je skupinska oznaka <b>Ukazi po meri</b>.",
		admin_ms_ribbon_tab_label: "Oznaka zavihka IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Vnesite ime, ki bo prikazano za zavihek IBM Content Navigator for Microsoft Office v traku Microsoft Office. Če ne podate imena, se zavihek imenuje \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Zapri podokno opravil, ko uporabniki odprejo dokumente",
		admin_ms_close_task_pane_on_open_hover_help: "To možnost izberite, če želite povečati prostor, v katerem lahko uporabniki vidijo dokumente v programu Microsoft Office.<br/><br/>Uporabniki zbirke Microsoft Office 2010: če želite zagotoviti, da je podokno opravila zaprto za vse dokumente, omogočite način vmesnika več dokumentov (MDI), tako da kliknete <b>Možnosti</b> &gt; <b>Napredno</b> in odznačite možnost <b>Prikaži vsa okna v opravilni vrstici</b>.",
		admin_ms_open_document_options: "Možnosti odpiranja dokumenta:",
		admin_ms_delete_local_file_options: "Možnosti brisanja lokalne datoteke:",
		admin_ms_add_and_checkin_options: "Možnosti dodajanja in prijave:",
		admin_ms_search_options: "Možnosti iskanja:",
		admin_ms_display_options: "Možnosti prikaza:",
		admin_ms_bidirection_enable_label: "Omogoči podporo za dvosmerno besedilo",
		admin_ms_bidirection_enable_hover_help: "To možnost izberite, če želite uporabnikom omogočiti vnašanje in ogledovanje besedila v izdelku IBM Content Navigator for Microsoft Office v smeri, ki ni od leve proti desni.",
		admin_ms_text_direction_label: "Osnovna smer besedila za vsebino:",
		admin_ms_text_direction_hover_help: "Podajte smer, v kateri se besedilo vnaša v vnosna polja v izdelku IBM Content Navigator for Microsoft Office. Ta nastavitev prav tako nadzoruje način prikaza postavk, kot so npr. imena map ali vrednosti lastnosti.",
		admin_ms_control_threshold_label: "Minimalno število postavk, ki omogočajo pogled naprej:",
		admin_ms_control_threshold_hover_help: "Privzeto je pogled naprej omogočen, ko je število postavk večje ali enako 50, za iskanje ali nastavljanje lastnosti, ki imajo predhodno definirane vrednosti v spustnem seznamu. Minimalno vrednost lahko spremenite.",

		admin_ms_default_email_class: "Razred, ki bo uporabljen pri dodajanju e-pošte",
		admin_ms_default_email_class_hover_help: "Vsa e-pošta, dodana v ta repozitorij iz programa Microsoft Outlook, bo dodana v razred, ki ga podate. Uporabniki ne morejo spremeniti razreda.",
		admin_ms_default_folder_class: "Razred, ki bo uporabljen pri ustvarjanju map",
		admin_ms_default_folder_class_hover_help: "Vsaka mapa, ustvarjena v tem repozitoriju iz aplikacije zbirke Microsoft Office, bo dodana v razred, ki ga podate.  Uporabniki ne morejo spremeniti razreda.",
		admin_ms_default_folder_warn_title: "Razreda ${0} med ustvarjanjem map ne morete uporabiti kot razreda.",
		admin_ms_default_folder_warn_name_prop_invalid: "Lastnost imena razreda ni niz, ime mape pa mora biti niz.<br />Izberite drug razred, ki bo uporabljen pri ustvarjanju map, ali se obrnite na svojega skrbnika za IBM Content Manager, da spremeni lastnost imena razreda v niz.",
		admin_ms_default_folder_warn_req_props: "Razred vsebuje zahtevane lastnosti, ki nimajo vrednosti. Toda uporabniki za zahtevane lastnosti ne morejo navesti vrednosti, ko mape ustvarjajo iz odjemalca IBM Content Navigator za Microsoft Office.<br />Izberite drug razred, ki bo uporabljen pri ustvarjanju map, ali se obrnite na svojega skrbnika za IBM Content Manager, da zahtevane lastnosti nastavi na izbirno oz. da predhodno vnese vrednosti za zahtevane lastnosti.",
		admin_ms_delimiter_for_office_properties: "Ločilo za lastnosti niza z več vrednostmi",
		admin_ms_delimiter_for_office_properties_hover_help: "Podajte znak, ki se bo uporabil kot ločilo za lastnosti niza, ki jih preslikavate v lastnosti niza z več vrednostmi. Privzeto lahko dodelite nabor vrednosti za lastnost niza z več vrednostmi, in sicer tako, da podpičje (;) uporabite kot ločilo, s katerim ločite vrednosti. Če pa ena od vrednosti vsebuje podpičje, te vrednosti niza ne morete dodati, razen če ločilo spremenite v drug znak. Ločilo lahko na primer spremenite v vejico (,)",
		admin_ms_outlookPropertyRemembrance : "Zapomni si nastavitve pri dodajanju sporočil in prilog",
		admin_ms_outlookPropertyRemembrance_hover_help : "Vrednosti, lokacija, izbor razreda in varnost lastnosti, ki so dodeljeni sporočilom in prilogam, so shranjeni in bodo uporabljeni kot privzete nastavitve pri naslednjih dodanih elementih.",

		admin_file_type_name_hover_help: "Lebdeča pomoč za Ime",
		admin_file_type_description_hover_help: "Lebdeča pomoč za Opis",
		admin_file_type_dialog_title: "Uredi filter vrste datotek",
		admin_new_file_type_dialog_title: "Nov filter vrste datotek",
		admin_mobile_feature_dialog_title: "Funkcija",
		admin_mobile_feature_dialog_new_title: "Nova funkcija",
		admin_file_type_instructions: "Ustvarite filter, s katerim lahko uporabniki zožijo seznam rezultatov iskanja. V filter lahko preslikate več tipov MIME.",
		admin_file_type_filter_place_holder: "Tipi MIME filtra",
		admin_new_button_label: "Nov",
		admin_edit_button_label: "Uredi",
		admin_delete_button_label: "Izbriši",
		admin_copy_button_label: "Kopiraj",
		admin_verify_button_label: "Preveri",
		admin_availabe_filters_label: "Razpoložljivi filtri",
		admin_selected_filters_label: "Izbrani filtri",

		admin_mobile_access: "Dostop do mobilne aplikacije:",
		admin_mobile_access_hover_help: "Če želite aplikacijo IBM Content Navigator uporabljati v mobilni napravi, priporočamo, da uporabnikom omogočite dostop do tega namizja iz mobilne aplikacije.<br /><br />Če onemogočite dostop do tega namizja iz mobilne aplikacije, lahko uporabniki še vedno dostopajo do spletnega odjemalca prek brskalnikov mobilne naprave. Vendar spletni odjemalec ni zasnovan za dostop prek mobilnih naprav.",

		admin_mobile_access_allow_label: "Uporabnikom omogoči:",
		admin_mobile_allow_add_photos: "Dodajanje fotografij iz fotoaparata in knjižnice s fotografijami",
		admin_mobile_allow_add_docs: "Dodajanje dokumentov in ustvarjanje map v repozitoriju",
		admin_mobile_allow_open_docs: "Odpiranje dokumentov v drugih aplikacijah",
		admin_mobile_allow_add_docs_hover_help: "Uporabniki lahko ustvarijo mape ali dodajo dokumente iz drugih mobilnih aplikacij, kot je na primer dokument, ki je priložen e-pošti.",
		admin_mobile_allow_open_docs_hover_help: "Uporabniki so pozvani, naj izberejo aplikacijo, s katero si želijo ogledati izbrani dokument. Če je na voljo samo ena aplikacija, se uporabi ta aplikacija.",
		admin_mobile_features: "Funkcije:",
		admin_mobile_features_hover_help: "Podajte, katere funkcije tega namizja so prikazane v mobilni aplikaciji IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nova funkcija",
		admin_mobile_move_up_button_label: "Premakni navzgor",
		admin_mobile_move_down_button_label: "Premakni navzdol",
		admin_desktop_mobile_instructions: "Tukaj je prostor za navodila o mobilnih nastavitvah",
		admin_desktop_max_number_of_docs_to_add: "Največje število dokumentov za dodajanje:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Določite največje število dokumentov, ki jih uporabniki lahko dodajo naenkrat. Največje privzeto število je 50, vendar ga lahko nastavite na največ 300.",
		admin_desktop_max_number_of_docs_to_modify: "Največje število postavk za spreminjanje:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Podajte največje število postavk, ki jih lahko uporabniki naenkrat spremenijo. Največje privzeto število je 50, vendar ga lahko nastavite na največ 300.",
		admin_desktop_max_conversion_size: "Največja količina podatkov za pretvorbe PDF (v MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Omejitev:</b> ta nastavitev ni podprta v IBM Content Manager OnDemand.<br/><br/>Podajte največjo količino podatkov, ki jo je mogoče pretvoriti v PDF. Ta omejitev velja, ko uporabniki prenašajo postavke kot datoteke PDF ali pošiljajo postavke prek e-pošte kot datoteke PDF.<br /><br />Tudi če velikosti posameznega dokumenta ni mogoče določiti, se dokumenti pretvorijo v PDF.<br/><br/>Privzeta omejitev je 200 MB. Če omejitev nastavite na več kot 200 MB, lahko to vpliva na zmogljivost sistema.",
		admin_desktop_timeProperties: "Časovni žig:",
		admin_desktop_time_properties_hover_help: "<b>Samo za uporabnike programske opreme IBM FileNet P8.</b> Ta nastavitev velja za lastnosti po meri in ne velja za sistemske lastnosti. Tako bo na primer lastnost Spremenil še naprej prikazovala časovni del časovnega žiga, če izberete <b>Prikaži samo datumski del časovnega žiga</b>.<br/><br/>Ta nastavitev ne spremeni časovnega žiga v repozitoriju.",
		admin_desktop_disable_time_stamp: "Prikaži celotni časovni žig",
		admin_desktop_enable_time_stamp: "Prikaži samo datumski del časovnega žiga",
		admin_desktop_timezone: "Časovni pas:",
		admin_desktop_timezone_localuser: "Prikaži lokalni časovni pas uporabnika",
		admin_desktop_timezone_alluser: "Prikaži isti časovni pas za vse uporabnike",
		admin_desktop_timezone_hover_help: "Podate lahko, ali uporabniki vidijo časovni žig na podlagi njihovega lokalnega časovnega pasu ali vsi uporabniki vidijo isti časovni žig.<br/><br/>Ta nastavitev ne spremeni časovnega žiga v repozitoriju. Vendar nastavitev, ki jo izberete, določi časovni pas, ki se uporabi pri ustvarjanju časovnega žiga v repozitoriju, ko uporabniki dodajajo ali spreminjajo postavke.",
		admin_desktop_mobile_feature_display_label: "Prikaz",
		admin_desktop_mobile_feature_icon_file_label: "Datoteka ikone",
		admin_mobile_feature_dialog_icon_file_label: "Datoteka ikone:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Ime",
		admin_desktop_mobile_select_feature_label: "Izberi funkcijo",
		admin_desktop_mobile_feature_icon_label: "Ikona funkcije",
		admin_desktop_share_admin_none: "Skrbnik ni nastavljen.",
		admin_desktop_share_admin_edit_label: "Nastavi skrbnika ...",
		admin_browse_icon: "Ikona Prebrskaj",
		admin_search_icon: "Ikona iskanja",
		admin_favorites_icon: "Ikona Priljubljene",
		admin_casesearch_icon: "Ikona Primer",
		admin_datacap_icon: "Ikona Datacap",
		admin_system_defined: "Sistemsko definirano",
		admin_icon_file_placeholder_text: "Lokacija datoteke (tj. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Root",
		admin_folder_default: "Privzeto",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Orodne vrstice",
		admin_menu_context_menus: "Kontekstni meniji",
		admin_menu_office_toolbars: "Ukazi na traku programa Microsoft Office",
		admin_menu_office_menus: "Priročni meniji programa Microsoft Office",

		admin_file_name_label: "Ime datoteke:",
		admin_exportconfiguration_security_label: "Vključi uporabnike in skupine s pooblastili za uporabo tega namizja.",
		admin_exportconfiguration_instruction: "Namizja, vključno s konfiguracijami repozitorijev in vtičnikov v povezavi z izbranimi namizji, lahko izvozite v datoteko, ki jo lahko nato uvozite v drug primerek izdelka IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Izvozi namizje",
		admin_exportconfiguration_button_label: "Izvozi",
		admin_dialog_select_all: "Izberi vse",
		admin_dialog_deselect_all: "Počisti vse",

		admin_importconfiguration_instruction: "Postavke iz izbrane konfiguracijske datoteke se uvozijo v ta sistem. Vendar če v sistemu že obstaja postavka z enakim ID-jem, izberite, ali jo želite ohraniti ali prepisati.",
		admin_importconfiguration_dialog_label: "Uvozi namizje",
		admin_importconfiguration_reason_dialog_label: "Uvozi razloge redakcije",
		admin_importconfiguration_button_label: "Uvozi",
		admin_to_be_imported: "Konfiguracijski ident, ki bo uvožen",
		admin_on_target_system: "Obstoječa postavka v ciljnem sistemu",
		admin_import_short_warning_message: "Naslednje postavke že obstajajo v sistemu. Izberite postavke, ki jih želite zamenjati v tem sistemu:",
		admin_import_warning_message: "Naslednje konfiguracijske postavke imajo enake ID-je kot postavke v ciljnem sistemu. Izberite le tiste postavke, ki jih želite uvoziti in prepisati v ciljnem sistemu.<br /><br />Če ne želite prepisati konfiguracijskega identa, ustvarite kopijo postavke v primerku, iz katerega ste izvozili namizje, mu dodelite drug ID in ga povežite z namizjem. Znova izvozite namizje in ga nato uvozite v ta primerek.",
		admin_choose_file_to_import_label: "Izberite datoteko za uvoz:",
		admin_download_imported_log: "Prenesi poročilo",
		admin_desktop_import_summary: "Povzetek uvoza namizja",
		admin_reason_import_summary: "Povzetek uvoza razlogov redakcije",
		admin_rba_import_summary: "Povzetek uvoza skrbniške vloge",
		admin_import_open_tabs_checking: "Preden lahko uvozite namizja, morate zapreti vse zavihke, razen zavihka <bold>Namizja</bold> v skrbniškem orodju.",
		admin_import_no_conflict: "Uvozijo se te postavke:",
		admin_desktop_invalid: "Neveljavno namizje",
		admin_desktop_warning: "Namizje je bilo shranjeno z opozorili.",
		admin_repos_warning: "Repozitorij je bil shranjen z opozorili.",
		admin_config_type_icon: "Ikona vrste konfiguracijske postavke",

		admin_approval_workflow: "Delovni tok odobritve",
		admin_approval_workflow_hover: "Uporabnikom omogoča zagon vnaprej določenega delovnega toka. Delovni tok odobritve lahko onemogočite, če želite uporabnikom omogočiti zagon delovnega toka odobritve po meri, določenega z naročnino. Delovni tok odobritve je privzeto omogočen.<br><br><b>Pomembno:</b> Če omogočite delovni tok odobritve, morate tudi eno ali obe vnaprej določeni definiciji delovnega toka (ICNParallelDocumentApproval.pep in ICNSequentialDocumentApproval.pep) dodati v repozitorij in prenesti v mehanizem za obdelavo vsebine.",

		admin_cannot_add_desktop_members_error: "Uporabnikov in skupin, ki imajo dostop do tega namizja, ne morete navesti.",
		admin_cannot_add_desktop_members_error_explanation: "Za pridobitev informacij o uporabniku in skupini nimate ustreznih dovoljenj.",
		admin_cannot_add_desktop_members_error_userResponse: "Prijavite se z drugim uporabniškim imenom ali se obrnite na sistemskega skrbnika za IBM Content Manager, da vam dodeli privilegij UserACLOwner, ki ga potrebujete za pridobitev informacij o uporabniku in skupini.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Uporabnikov in skupin ni mogoče izbrati.",
		admin_cannot_select_users_groups_error_explanation: "Za pridobitev informacij o uporabniku in skupini nimate ustreznih dovoljenj.",
		admin_cannot_select_users_groups_error_userResponse: "Prijavite se z drugim uporabniškim imenom ali se obrnite na sistemskega skrbnika za IBM Content Manager, da vam dodeli privilegij UserACLOwner, ki ga potrebujete za pridobitev informacij o uporabniku in skupini.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Odjemalec OAuth2 ni bil najden.",
		oauth_client_not_found_error_explanation: "ID odjemalca OAuth2 ${0} ni bil najden.",
		oauth_client_not_found_error_userResponse: "Obrnite se na svojega skrbnika sistema in mu povejte, da ID odjemalca OAuth2 ni bil najden.",
		oauth_client_not_found_error_adminResponse: "Preglejte konfiguracijo repozitorija in preverite, da vsebuje pravilen ID odjemalca OAuth2.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "identifikator odjemalca",

		oauth_login_failed_error: "Prijava repozitorija ni uspela.",
		oauth_login_failed_error_explanation: "Poskus prijave v repozitorij ${0} ni uspel.",
		oauth_login_failed_error_userResponse: "Preverite, ali sta ID uporabnika in geslo pravilna in se ponovno poskusite prijaviti.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "ID repozitorija",

		oauth_error_return_error: "Med poskusom prijave v ${0} se je pojavila napaka.",
		oauth_error_return_error_explanation: "Poskus preverjanja pristnosti ${0} ni uspel.",
		oauth_error_return_error_userResponse: "Obrnite se na skrbnika sistema z naslednjimi informacijami: poskus preverjanja pristnosti ${0} ni uspel in je vrnil naslednje sporočilo o napaki: <br>${1}<br><b>napaka:</b> ${2}.<br><b>opis:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Dodatne informacije o napaki so na voljo v dnevniških datotekah spletnega aplikacijskega strežnika.  Več informacij o dnevniških datotekah poiščite v temi &quot;Dnevniške datoteke IBM Content Navigator&quot; v središču IBM Knowledge Center. Z informacijami o poskusu preverjanja pristnosti ${0} poskusite popraviti težavo in preverite, ali je OAuth2 omogočen.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Ciljna aplikacija OAuth",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "napaka",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Neprepoznano sporočilo o napaki OAuth.",

		delete_share_permission_error: "Skupna raba ni bila izbrisana.",
		delete_share_permission_error_explanation: "Nimate ustreznih dovoljenj za brisanje skupne rabe.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Te postavke ne morete dati v skupno rabo.",
		class_not_support_share_error_explanation: "Razred ${0} ni bil nastavljen tako, da bi podpiral skupno rabo.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Te postavke ne morete dati v skupno rabo.",
		rbr_not_support_share_error_explanation: "V postavko je bila dodana občutljiva vsebina.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Naprava, v katero se želi uporabnik prijaviti, nima dovoljenj za dostop do uporabniškega računa.",
		box_oauth_error_invalid_request: "Zahtevi manjka zahtevan parameter, vključuje neveljavno vrednost parametra, parameter vključuje več kot enkrat ali je kako drugače nepravilna.",
		box_oauth_error_unsupported_response_type: "Pooblastitveni strežnik ne podpira pridobitve pooblastitvene kode s to metodo.  Počistite vrednost kode param v vaši zahtevi.",
		box_oauth_error_access_denied: "Lastnik vira ali pooblastitvenega strežnika je zavrnil zahtevo.",
		box_oauth_error_temporarily_unavailable: "Hitrost vaše naprave je omejena, hitrost zahtev za pooblastilo morate zmanjšati ali malo počakati.",
		box_oauth_error_unknown: "Neprepoznano sporočilo o napaki storitve Box.",

		admin_default_search_type: "Privzeta možnost iskanja",
		admin_default_search_type_hover: "Podajte, katera možnost je privzeto izbrana v polju <b>Poišči</b> v meniju <b>Možnosti iskanja</b>.",
		admin_default_search_type_documents: "Dokumenti",
		admin_default_search_type_folders: "Mape",
		admin_default_search_type_folders_and_documents: "Dokumenti in mape",

		admin_restricted_search_type: "Omogoči iskanje v",
		admin_restricted_search_type_hover: "Privzeto lahko uporabniki iščejo v dokumentih in mapah. Če želite skriti možnost Išči v in iskanje omejiti samo na dokumente, izberite Dokumenti in razveljavite izbiro Mape.</br>,</br> Če omogočite iskanje v dokumentih in mapah, izberite privzeto možnost za prikaz, ko je odprto podokno za iskanje.",
		admin_restricted_search_type_documents: "Dokumenti",
		admin_restricted_search_type_folders: "Mape",
		admin_restricted_search_type_folders_and_documents: "Dokumenti in mape",

		admin_default_search_version: "Privzeta različica iskanja",
		admin_default_search_version_hover: "Podajte, katera možnost je privzeto izbrana v polju <b>Različica</b> v meniju <b>Možnosti iskanja</b>.",

		admin_all_classes_search: "Išči po vseh razredih",
		admin_all_classes_search_hover: "Podajte, ali uporabniki smejo iskati po vseh razredih in če smejo, kaj naj bo vključeno v iskanje dokumentov.",
		admin_all_classes_search_removed_hover: "Možnosti za iskanje po vseh razredih niso na voljo, ker je parameter context-param allPseudoClassHidden v aplikaciji Navigator web.xml nastavljen na »resnično«.",
		admin_all_classes_search_hide: "Odstrani izbiro za iskanje po vseh razredih",
		admin_all_classes_search_documents_only_documents: "Iskanje dokumentov vključuje samo dokumente, shranjena iskanja in vnosne predloge",
		admin_all_classes_search_documents_non_folders: "Iskanje dokumentov vključuje vse postavke, ki niso mape",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Drevesni pogled:",
		admin_feature_config_tree_view_hoverhelp: "Podajte, ali lahko uporabniki dostopajo do seznama map v repozitoriju prek podokna Brskanje. Če skrijete podokno Brskanje, morajo uporabniki uporabiti seznam vsebine za pomikanje k mapam v repozitoriju.",
		admin_feature_config_selected_repositories_label: "Repozitoriji:",
		admin_feature_config_selected_repositories_hoverhelp: "Izberite repozitorije, do katerih imajo uporabniki dostop v tej funkciji.",
		admin_feature_config_selected_repositories_select_state_hdr: "Izberi repozitorij",
		admin_feature_config_selected_repositories_name_hdr: "Ime repozitorija",
		admin_feature_config_selected_repositories_show_hdr: "Pokaži",
		admin_feature_config_invalid_icon_title: "V funkciji manjkajo nekatere potrebne nastavitve",
		admin_feature_config_view_select_hdr: "Izberi ogled",
		admin_feature_config_view_hdr: "Ogled",
		admin_feature_config_view: "Ogled",
		admin_feature_config_views: "Pogledi:",
		admin_feature_config_views_hoverhelp: "Podajte, kateri uporabniki lahko uveljavijo poglede za seznam vsebine. Pogledi so prikazani v enakem vrstnem redu, kot so navedeni. Prvi izbrani pogled je privzeti pogled za funkcijo.<br><br><b>Pomembno:</b> če omogočite pogled filmskega traku, morate konfigurirati prikazovalnik pretvorb HTML, da omogočite predoglede dokumenta.",

		admin_custom_dialog_name: "Ime:",
		admin_custom_dialog_value: "Vrednost:",
		admin_custom_setting_name_hover: "Vnesite ime nastavitve Daeja ViewONE, ki jo želite dodati v konfiguracijo. Za več informacij o konfiguracijskih nastavitvah glejte dokumentacijo Daeja ViewONE.",
		admin_custom_setting_value_hover: "Vnesite vrednost, ki jo želite uporabiti za konfiguracijsko nastavitev Daeja ViewONE. Za več informacij o veljavnih vrednostih za konfiguracijsko nastavitev glejte dokumentacijo Daeja ViewONE.",

		entry_template_name_required_message: "Polje imena v nastavitvah predloge vnosa je potrebno.",
		entry_template_name_invalid_message: "Polje imena v nastavitvah predloge vnosa ne sme vsebovati naslednjih znakov: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Če so v polju 'Deli z' v nastavitvah predloge vnosa izbrani določeni uporabniki in skupine, morate podati najmanj enega uporabnika ali skupino.",
		entry_template_no_permission_to_save_to_teamspace_message: "Če nimate dovoljenja za dodajanje predlog vnosa v timski prostor (${0}), ki je bil izbran iz 'Shrani v' v nastavitvah predloge vnosa.",
		entry_template_save_in_destination_required_message: "Podati je treba privzeto lokacijo za shranjevanje v razdelku <b>Nastavi lokacijo shranjevanja postavke</b>.",
		entry_template_save_in_destination_must_select_folder: "Če skrijete polje <b>Shrani v</b> in od uporabnikov zahtevate, da dodajo nove postavke v mapo, morate izbrati mapo v polju <b>Privzeta lokacija za shranjevanje</b> v razdelku <b>Nastavi lokacijo shranjevanja postavke</b>.",
		entry_template_what_to_save_required_message: "Izberite najmanj eno možnost za to, kar želite shraniti v možnostih nastavitev.",
		entry_template_custom_workflow_empty_message: "Če izberete <b>Delovni tok po meri ...</b>, morate poiskati in izbrati delovni tok, ki ga želite uporabiti.",

		entry_template_new: "Nova predloga vnosa",
		entry_template_name_hover: "Ime predloge vnosa ne sme vsebovati naslednjih znakov: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Ime predloge vnosa ne sme vsebovati nobenega od naslednjih znakov: * \\ / : ? \" < > |",
		entry_template_description_hover: "Podajte opis, ki bo uporabnikom omogočal razlikovanje med to predlogo vnosa in drugimi predlogami vnosa.",
		entry_tempalte_save_in_hover: "Podajte lokacijo, na katero naj bo shranjena predloga vnosa.<br><br><b>Omejitev:</b> če predlogo vnosa shranite v timski prostor, lahko to predlogo vnosa uporabljate le znotraj timskega prostora.",
		entry_template_inherit_hover: "Če izberete to možnost, bodo varnostne nastavitve nadrejene mape dodane seznamu uporabnikov in skupin, ki souporabljajo predlogo vnosa.",
		entry_template_builder_aria_label: "Graditelj predlog vnosa",
		entry_template_builder_layout_aria_label: "Graditelj lastnosti predlog vnosa",

		entry_template_settings_document: "Definiranje predloge vnosa",
		entry_template_settings_folder: "Nastavitev lokacije za shranjevanje postavk",
		entry_template_settings_folder_intro: "Podajte lokacijo za shranjevanje postavk, dodanih s to predlogo vnosa.",
		entry_template_settings_properties: "Nastavitev lastnosti postavke",
		entry_template_settings_properties_intro: "Za postavke, dodane s to predlogo vnosa, lahko podate privzete ali preddefinirane vrednosti. Poleg tega lahko spremenite postavitev lastnosti, da nadzorujete, katere lastnosti so prikazane, in vrstni red, v katerem so prikazane.",
		entry_template_settings_workflow: "Konfiguriranje delovnega toka za postavko",
		entty_template_settings_workflow_intro: "Podate lahko, ali se ob dodajanju postavk s predlogo vnosa zažene delovni tok.",
		entry_template_settings_security: "Nastavitev zaščite postavke",
		entry_template_settings_security_intro: "Za postavke, dodane s to predlogo vnosa, lahko podate privzeto ali preddefinirano zaščito. Uporabniki z ustreznimi dovoljenji lahko morda naknadno spremenijo zaščito postavke, ko je ta dodana.",
		entry_template_settings_options: "Nastavitev možnosti za postavko",
		entry_template_xt_warning: "Če shranite spremembe te predloge vnosa, bo iz predloge vnosa IBM Workplace XT pretvorjena v predlogo vnosa IBM Content Navigator. IBM Workplace XT ne podpira predlog vnosa IBM Content Navigator.",

		entry_template_properties_edit_layout: "Uredi postavitev ...",
		entry_template_properties_read_only: "Samo za branje",
		entry_template_properties_hidden: "Skrito",

		entry_template_destination_show: "Prikaži polje <b>Shrani v</b>",
		entry_template_destination_show_hover: "Če prikažete polje <b>Shrani v</b>, lahko uporabniki spremenijo lokacijo, na katero se shranjujejo postavke.",
		entry_template_destination_hide: "Skrij polje <b>Shrani v</b>",
		entry_template_destination_hide_hover: "Če skrijete polje <b>Shrani v</b>, uporabniki ne morejo spremeniti lokacije, na katero se shranjujejo postavke.",
		entry_template_folder_save_in_default: "Privzeta lokacija <b>Shrani v</b>:",
		entry_template_folder_save_in_default_hover: "Podajte privzeto lokacijo, kamor se postavke dodajajo s predlogo vnosa.<br><br>Privzeta lokacija, ki jo izberete, v času izvajanja omeji vedenje predloge vnosa:<ul><li>Uporabniki ne morejo izbrati drugega repozitorija.</li><li>Če je privzeta lokacija timski prostor, uporabniki ne morejo izbrati drugega timskega prostora.</li></ul>Če uporabniki to predlogo vnosa povežejo z mapo, lahko preglasijo lokacijo za shranjevanje, konfigurirano za to predlogo vnosa.",
		entry_template_folder_restrict_choice: "Od uporabnikov zahtevaj, da dodajo postavke na privzeto lokacijo ali v podrejeno mapo privzete lokacije",
		entry_template_folder_file_in_required: "Od uporabnikov zahtevaj, da dodajo nove postavke v mapo",
		entry_template_folder_file_in_required_hover: "Če te možnosti ne izberete, lahko uporabniki postavke dodajajo v korensko mapo repozitorija.<br><br><b>Omejitev:</b> Konfiguracija namizja lahko od uporabnikov namizja zahteva, da izberejo mapo.",

		entry_template_document_type_show: "Prikaži polje <b>Kaj želite shraniti</b>",
		entry_template_document_type_show_hover: "Če prikažete polje <b>Kaj želite shraniti</b>, se izbrane postavke prikažejo kot možnosti v tem polju.",
		entry_template_document_type_hide: "Skrij polje <b>Kaj želite shraniti</b>",
		entry_template_document_type_hide_hover: "Če skrijete polje <b>Kaj želite shraniti</b>, se vedno, ko uporabniki dodajajo dokumente s to predlogo vnosa, uporabi izbrana vrsta dokumenta.",
		entry_template_document_type: "Ta predloga vnosa se lahko uporablja za dodajanje naslednjih postavk:",
		entry_template_document_type_hover: "Če prikažete polje <b>Kaj želite shraniti</b>, se izbrane postavke prikažejo kot možnosti v tem polju.<br><br>Če skrijete polje <b>Kaj želite shraniti</b>, se vedno, ko uporabniki dodajajo dokumente s to predlogo vnosa, uporabi izbrana vrsta dokumenta.",

		entry_template_misc: "Dodatne možnosti:",
		entry_template_auto_classify_show: "Samodejno klasificiraj vsebino dokumenta",
		entry_template_auto_classify_show_hover: "FileNet Content Manager ob klasificiranju dokumenta pregleda njegovo vsebino, da zanj določi ustrezen razred in vrednosti lastnosti.<br><br>Obrnite se na skrbnika sistema, če želite ugotoviti, ali je v sistemu Content Platform Engine omogočeno klasificiranje vsebine.<br><br>Če to možnost omogočite, se razred in lastnosti dokumenta lahko spremenijo, ko uporabnik doda dokument v repozitorij.",
		entry_template_allow_duplicate_file_names: "Dovoli dokumente s podvojenimi imeni datotek",
		entry_template_allow_duplicate_file_names_hover: "Dokumente z istim imenom je privzeto mogoče dodati v mapo v sistemu FileNet Content Manager. To možnost lahko počistite, če želite, da ima vsaka datoteka na izbrani lokaciji za shranjevanje unikatno ime.",
		entry_template_allow_compound_documents: "Omogoči, da je ta dokument nadrejenec sestavljenega dokumenta",
		entry_template_version_show: "Prikaži možnosti različice za dodajanje in prijavo",
		entry_template_version_hide: "Skrij možnosti različice za dodajanje in prijavo",
		entry_template_version_to_add_as: "Privzeta možnost različice za dodajanje:",
		entry_template_version_default: "Privzeta možnost različice:",
		entry_template_version_default_checked: "Glavna različica",
		entry_template_version_default_unchecked: "Podrazličica",
		entry_template_version_display: "Različica dokumenta:",
		entry_template_version_display_show: "Pokaži",
		entry_template_version_display_hide: "Skrij",
		entry_template_version_default_add: "Privzeta možnost različice za dodajanje:",

		entry_template_checkin_version_show: "Prikaži možnosti različice za prijavo",
		entry_template_checkin_version_hide: "Skrij možnosti različice za prijavo",

		entry_template_checkin_version_message_no_versions: "Pravilnik o različici za izbrani razred uporabnikom preprečuje prijavo nove različice dokumenta.",
		entry_template_checkin_version_message_always_version: "Pravilnik o različici za izbrani razred uporabnikom preprečuje zamenjavo trenutne različice dokumenta.",

		entry_template_applied: "To predlogo vnosa uporabi, kadar uporabniki:",
		entry_template_applied_add: "dodajajo dokumente (zahtevano)",
		entry_template_applied_add_folder: "ustvarjajo mape (zahtevano)",
		entry_template_applied_checkin: "Prijavi",
		entry_template_applied_properties_group: "si ogledujejo ali urejajo lastnosti:",
		entry_template_applied_properties: "v oknu Lastnosti",
		entry_template_applied_viewer: "v prikazovalniku aplikacijskih programčkov",
		entry_template_applied_docinfo: "v podoknu z informacijami o dokumentu",
		entry_template_applied_no_class_support: "Ta predloga vnosa se lahko uporablja za dodajanje postavk, vendar je ni mogoče uporabljati za prijavo dokumentov ali ogled in urejanje lastnosti. Izbrani razred mora biti spremenjen, tako da podpira te situacije. Če morate v teh situacijah uporabiti predlogo vnosa, se obrnite na skrbnika za uporabo skrbniškega orodja za spreminjanje razreda, tako da lahko shrani ID-je predlog vnosa.",
		entry_template_applied_no_child_component_support: "Izbrani razred ima podrejene komponente, pri čemer je postavitev lastnosti definirana. Postavitve lastnosti ne podpirajo podrejenih komponent. Podrejene komponente ne bodo prikazane uporabniku.",
		entry_template_applied_child_component: "Izbrani razred ima podrejene komponente. Uporabniku bodo prikazane, vendar v tej predlogi vnosa ne morete konfigurirati podrejenih komponent.",

		entry_template_properties_show: "Prikaži razdelek <b>Lastnosti</b>",
		entry_tempalte_properties_show_hover: "Če prikažete razdelek <b>Lastnosti</b>, lahko uporabniki spreminjajo morebitne vrednosti lastnosti, prikazane v predlogi vnosa, ki niso lastnosti, omogočene samo za branje.",
		entry_template_properties_hide: "Skrij razdelek <b>Lastnosti</b>",
		entry_template_properties_hide_hover: "Če skrijete razdelek <b>Lastnosti</b>, uporabniki ne morejo spremeniti nobene vrednosti lastnosti. Predloga vnosa mora definirati vse vrednosti, ki jih želite uporabljati ob dodajanju postavk s to predlogo vnosa.",

		entry_template_security_show: "Prikaži razdelek <b>Zaščita</b>",
		entry_template_security_show_hover: "Če prikažete razdelek <b>Zaščita</b>, lahko uporabniki, ki imajo zadostna dovoljenja, spremenijo zaščito postavke.",
		entry_template_security_hide: "Skrij razdelek <b>Zaščita</b>",
		entry_template_security_hide_hover: "Če skrijete razdelek <b>Zaščita</b>, uporabniki ne morejo spremeniti zaščite postavk. Predloga vnosa mora definirati vse varnostne nastavitve, ki jih želite uporabljati ob dodajanju ali urejanju postavk.",
		entry_template_security_policy: "Varnosti pravilnik:",
		entry_template_security_policy_hover: "Glede na izbrani varnostni pravilnik, ta lahko:<br><ul><li>preglasi dovoljenja, podana v razdelku <b>Nastavitev zaščite postavk</b>;</li><li>dodaja dovoljenjem, podanim v razdelku <b>Nastavitev zaščite postavk</b>.</li></ul>",
		entry_template_security_policy_none: "Izbran ni noben varnostni pravilnik",
		entry_template_security_inherit: "Podeduj varnostne nastavitve od nadrejene mape",
		entry_tempalte_save_in_hover: "Podajte lokacijo, na katero naj bo shranjena predloga vnosa.<br><br><b>Omejitev:</b> če predlogo vnosa shranite v timski prostor, lahko to predlogo vnosa uporabljate le znotraj timskega prostora.",
		entry_template_security_inherit_item_security_hover: "Če izberete to možnost, bodo varnostne nastavitve nadrejene mape dodane varnostnim nastavitvam, ki jih definira ena od naslednjih postavk:<ul><li>razred, podan v razdelku <b>Nastavitev lastnosti postavke,</b></li><li>zaščita po meri, podana v razdelku <b>Nastavitev lastnosti postavke.</b></li></ul>",
		entry_template_security_change: "Preglasi zaščito, ki jo definira izbrani razred",
		entry_template_security_change_hover: "Če izberete to možnost, bodo privzeto prikazane varnostne nastavitve, definirane za razred. Nato lahko spremenite varnostne nastavitve za predlogo vnosa.<br><br>Če prikažete razdelek <b>Zaščita</b>, lahko uporabniki, ki imajo zadostna dovoljenja, spremenijo zaščito postavke.<br><br>Če izberete to možnost, in želite podedovati varnostne nastavitve nadrejene mape, bodo morebitna dovoljenja, ki jih je možno podedovati, dodana podani zaščiti.",
		entry_template_security_default_item_security: "Prepiši privzeto zaščito postavke uporabnika, ki doda postavko",
		entry_template_security_policy_message_override: "Izbran varnostni pravilnik je konfiguriran tako, da preglasi dovoljenja, podana pod Nastavi varnost.",
		entry_template_security_policy_message_add: "Izbran varnostni pravilnik je konfiguriran tako, da doda dovoljenja, podana pod Nastavi varnost.",
		entry_template_security_policy_preserve_true_hover: "Ohrani neposredno dovoljenje",
		entry_template_security_policy_preserve_false_hover: "Ne ohrani neposrednega dovoljenja",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specifične vloge",
		entry_template_security_class_role_search_title: "Iskanje vlog:",
		entry_template_secuirty_class_member_title: "Seznam članov za ${0}",
		entry_template_secuirty_class_folder_only: "Za dovoljenja veljajo samo za to mapo",
		entry_template_secuirty_class_folder_and_immediate_children: "Ta dovoljenja veljajo za to mapo in za tiste neposredne podrejence, ki so konfigurirani tako, podedujejo varnost iz te mape.",
		entry_template_secuirty_class_folder_and_all_children: "Ta dovoljenja veljajo za to mapo in za vse tiste naslednike, ki so konfigurirani tako, podedujejo varnost iz te mape.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Ta dovoljenja veljajo za tiste neposredne podrejence, ki so konfigurirani tako, da podedujejo varnost iz te mape",
		entry_template_secuirty_class_folder_all_children_not_folder: "Ta dovoljenja veljajo za vse naslednike, ki so konfigurirani tako, da podedujejo varnost iz te mape",

		entry_template_class_security_message_no_override: "Zaščita izbranega razreda uporabnikom prepreči preglasitev zaščite.",
		entry_template_class_security_required_privileges: "<b>Pomembno</b>: Ko preglasite varnost izbranega razreda, morajo imeti uporabniki, ki dodajajo postavke z uporabo te predloge vnosa, pooblastili ItemSetACL in UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Delovni tok zaporednega vzorca",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Delovni tok vzporednega vzorca",
		entry_template_workflow_type_existing: "Delovni tok po meri ...",
		entry_template_workflow_launch_prompt: "Vprašaj uporabnike, ali naj se zažene delovni tok",
		entry_template_workflow_launch_auto: "Samodejno zaženi delovni tok",
		entry_template_workflow_modify_launch: "Uporabnikom dovoli, da spremenijo zagonski korak",
		entry_template_workflow_modify_launch_hover: "Izberite to možnost, če želite uporabnikom omogočiti, da spremenijo način zagona delovnega toka.",

		entry_template_optionsButton_title: "Spremeni",
		entry_template_optionsButton_readonly_title: "Ogled povezave",
		entry_template_optionsDialog_title: "Nastavitve povezave mape",
		entry_template_removeButton_title: "Odstrani",
		entry_template_addButton_title: "Dodaj",
		entry_template_selected_entry_templates: "Izbrane predloge vnosa",
		entry_template_docs_added_to_template_destination: "Dokumenti se dodajo cilju, podanem v predlogi vnosa.",
		entry_template_docs_added_to_other_object_store: "Ta predloga vnosa doda postavke v shrambo predmetov ${0}.",
		entry_template_inherited_entry_templates_label: "Želim: ",
		entry_template_inherited_entry_templates: "Podedovati povezave predloge vnosa iz mape: ",
		entry_template_inherited_entry_templates_not: "Ustvariti nove povezave za to mapo",
		entry_template_inherited_folder_path: "Predloge vnosa na seznamu izbranih predlog vnosa so povezane z naslednjo mapo: ${0}. <br> Pot do mape je ${1}.",
		entry_template_folder_associations_title: "Poveži predloge vnosa",
		entry_template_folder_associations_intro: "Ko povežete predlogo vnosa z mapo, morajo uporabniki uporabiti predlogo vnosa za dodajanje postavk v mapo. Če z mapo povežete več predlog vnosa, lahko uporabniki izbirajo, katero predlogo vnosa bodo uporabili.",
		entry_tempalte_folder_associations_entrytemplate: "Predloga vnosa: ",
		entry_template_avaliable_entry_templates: "Razpoložljive predloge vnosa",
		entry_template_fileTypes_intro_title: "Dovoljene vrste datotek:",
		entry_template_fileTypes_intro: "Privzeto se lahko predloga vnosa uporabi za dodajanje vseh vrst dokumentov v repozitorij. Toda če izberete eno ali več vrst datotek, so predloge vnosa na voljo samo, ko uporabniki dodajajo, ki ustrezajo eni od vrst datotek.",
		entry_template_fileTypes: "Vrste datotek",
		entry_template_fileType_error: "Neveljavne vrste datotek so izbrane za eno ali več povezav predloge vnosa. Preden se lahko te povezave predloge vnosa shranijo, morate odstraniti neveljavne vrste datotek.",
		entry_template_fileTypes_any_type_of_file: " Vse vrste datotek",
		entry_template_description_label: "Opis",
		entry_template_ItemInfoPrefix: "Poveži z: ",
		entry_template_TargetObjectStoreName: "Ciljna shramba predmetov",
		entry_template_class: "Razred",
		entry_template_current_folder_as_parent: "Uporabi mapo kot cilj",
		entry_template_view_minetypes: "Ogled tipov MIME",
		entry_template_avaliable_MIME_types: "Razpoložljive vrste datotek",
		entry_template_selected_MIME_types: "Izbrane vrste datotek",
		entry_template_MIME_type_column: "ime kategorije vrste datoteke",
		entry_template_file_type_not_existing: "Odstranite neveljavne vrste datotek.",
		entry_template_MIME_types: "Tipi MIME:",
		entry_template_MIME_types_info_dialog_title: "Tipi MIME za",
		entry_template_destination_label: "Dodaj dokumente v: ",
		entry_template_destination_help: "Podajte, kam v repozitorij se shranijo dokumenti, ko jih uporabniki dodajo v to mapo z uporabo izbrane predloge vnosa.",
		entry_template_radioButton_folder_destination: "Izbrana mapa",
		entry_template_radioButton_template_destination: "Cilj, podan v predlogi vnosa",
		entry_tempalte_teamspace_default: "Privzeta predloga vnosa",
		entry_template_folder_associations_save_new: "Spremenili ste nekatere povezave predlog vnosa. Ali želite zapreti to okno brez shranjevanja sprememb?",
		entry_template_mode_binding_label: "Lastnosti",
		entry_template_columns_className: "Ime razreda",
		entry_template_columns_type: "Vrsta predloge",
		entry_template_columns_workflow: "Ime delovnega toka",
		entry_template_columns_destination: "Cilj",
		entry_template_association_less_than_record: "Število predlog vnosa, ki niso navedene na seznamu izbranih predlog vnosa: ${0}. Nimate dovoljenja, da bi si jih lahko ogledali. Morda so izbrisane. Za več informacij se obrnite na skrbnika sistema.",
		/* Request */

		progress_message_general: "Obdelava ...",
		cancel_message_general: "Dejanje je bilo preklicano.",
		ie8_not_supported_browser: "Brskalnik IE8 ni podprt.",
		progress_message_getDesktop: "Nalaganje namizja ...",
		progress_message_getActions: "Nalaganje dejanj ...",
		progress_message_getViewers: "Nalaganje namizja ...",
		progress_message_logon: "Prijavljanje ...",
		progress_message_logoff: "Odjavljanje ...",
		progress_message_getContentClasses: "Pridobivanje razredov ...",
		progress_message_openContentClass: "Pridobivanje podrobnosti razreda ...",
		progress_message_od_getCabinets: "Pridobivanje predalnikov ...",
		progress_message_getSearchTemplates: "Pridobivanje iskanj ...",
		progress_message_od_getTemplates: "Pridobivanje map ...",
		progress_message_od_openCabinet: "Pridobivanje map ...",
		progress_message_openSearchTemplate: "Odpiranje iskanja ...",
		progress_message_od_openTemplate: "Odpiranje mape ...",

		progress_message_getWorklists: "Pridobivanje delovnih seznamov ...",
		progress_message_getWorkItems: "Pridobivanje delovnih postavk ...",
		progress_message_getNextWorkItems: "Pridobivanje delovnih postavk ...",
		progress_message_getStepParameters: "Pridobivanje informacij o delovni postavki ...",
		progress_message_getStepAttachmentItems: "Pridobivanje informacij o prilogi ...",
		progress_message_getDependentParameters: "Pridobivanje informacij o lastnosti ...",

		progress_message_p8_getProcessApplicationSpaces: "Pridobivanje prostorov aplikacije ...",
		progress_message_p8_getProcessRoles: "Pridobivanje vlog obdelave ...",
		progress_message_p8_getProcessInbaskets: "Pridobivanje vhodnih nabiralnikov ...",
		progress_message_p8_getProcessorInformation: "Pridobivanje informacij o obdelavi ...",
		progress_message_p8_getFilterCriteria: "Pridobivanje filtra vhodnega nabiralnika ...",
		progress_message_p8_getLaunchParameters: "Pridobivanje informacij o delovni postavki ...",
		progress_message_p8_getStepAttachments: "Pridobivanje prilog delovne postavke ...",
		progress_message_p8_getSubscriptions: "Pridobivanje naročnin delovnega toka ...",
		progress_message_p8_getTrackerParameters: "Pridobivanje informacij o delovni postavki ...",
		progress_message_p8_getTrackerHistory: "Pridobivanje zgodovine delovne postavke ...",
		progress_message_p8_getTrackerMilestones: "Pridobivanje mejnikov delovne postavke ...",
		progress_message_p8_completeStep: "Dokončevanje delovne postavke ...",
		progress_message_p8_moveToInbox: "Premikanje postavke v vhodni nabiralnik ...",
		progress_message_p8_returnToSender: "Vračanje delovne postavke ...",
		progress_message_p8_reassign: "Ponovno dodeljevanje delovne postavke ...",
		progress_message_p8_launchWorkflow: "Zaganjanje delovnega toka ...",
		progress_message_p8_getTransferedWorkflows: "Pridobivanje informacij o delovnem toku ...",

		progress_message_cm_getProcesses: "Pridobivanje informacij o delovnem toku ...",
		progress_message_cm_completeStep: "Nadaljevanje delovne postavke ...",
		progress_message_cm_getItemProcessInformation: "Pridobivanje informacij o delovnem toku ...",

		progress_message_search: "Iskanje ...",
		cancel_message_search: "Iskanje je bilo preklicano.",
		progress_message_getContentItems: "Pridobivanje informacij o postavki ...",
		progress_message_openFolder: "Odpiranje mape ...",
		progress_message_addItem: "Ustvarjanje postavke ...",
		progress_message_checkIn: "Prijavljanje postavke ...",
		progress_message_changePassword: "Spreminjanje gesla ...",
		progress_message_getDefaultInstancePermissions: "Pridobivanje privzetih dovoljenj ...",
		progress_message_openItem: "Pridobivanje informacij o postavki ...",
		progress_message_saveItem: "Shranjevanje informacij o postavki ...",
		progress_message_getPermissions: "Pridobivanje dovoljenj ...",
		progress_message_getEntryTemplates: "Pridobivanje predlog vnosa ...",
		progress_message_openEntryTemplate: "Odpiranje predloge vnosa ...",
		progress_message_getFavorites: "Pridobivanje priljubljenih ...",
		progress_message_getFoldersFiledIn: "Pridobivanje map ...",
		progress_message_getDocumentVersions: "Pridobivanje različic ...",
		progress_message_getDependentAttributeInfo: "Pridobivanje informacij o atributu ...",
		progress_message_packageForDownload: "Ustvarjanje paketa za prenos ...",
		progress_message_convertDocument: "Pretvarjanje vsebine ...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Pridobivanje vrste vsebine ...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Dodajanje dokumenta ...",

		progress_message_desktop_reload: "Odjemalec znova nalaga vaše namizje.<br>Morda se boste morali znova prijaviti.",
		progress_message_email: "Pošiljanje e-poštnega sporočila ...",
		cancel_message_email: "E-poštno sporočilo je bilo preklicano.",

		progress_message_p8_getOfficeOnlineTemplates: "Pridobivanje predlog Office ...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Drevo priljubljenih",
		favorites_content_list_label: "Seznam vsebine priljubljenih",
		syncItems_tree_label: "Drevo mojih sinhroniziranih datotek",
		syncItems_content_list_label: "Seznam vsebine mojih sinhroniziranih datotek",
		my_checkouts_content_list_label: "Seznam vsebine mojih odjav",
		browse_tree_label: "Drevo brskanja",
		browse_content_list_label: "Seznam vsebine brskanja",
		repository_selector_label: "Izbirnik repozitorija",
		teamspaces_content_list_label: "Seznam vsebine timskega prostora",
		templates_content_list_label: "Seznam vsebine predlog",
		work_content_list_label: "Seznam vsebine dela",
		work_tree_label: "Drevo dela",
		admin_tree_label: "Drevo skrbništva",
		admin_tabs_label: "Zavihki skrbništva",
		search_tabs_label: "Zavihki za iskanje",
		search_selector_label: "Izbirnik iskanja",
		teamspace_browse_content_list_label: "Seznam vsebine brskanja po timskem prostoru",
		teamspace_search_tabs_label: "Zavihki za iskanje timskega prostora",

		/* Desktop */
		undo_description: "Razveljavi ${0}",
		redo_description: "Znova uveljavi ${0}",

		/* Application Tabs */
		home: "Začetna stran",
		repository: "Repozitorij",
		repository_type: "Vrsta repozitorija:",
		repository_type_header: "Vrsta repozitorija",
		repository_type_any: "Vsi repozitoriji",
		repository_type_contains_label: "Vrsta repozitorija vsebuje",
		document_info: "Informacije o dokumentu",
		team: "Ekipa",
		administration: "Skrbništvo",

		/* Home Page */
		recent_activity: "Nedavna dejavnost",
		repos_and_wrksp: "Repozitoriji in timski prostori",
		workspaces: "Timski prostori",
		repositories: "Repozitoriji",
		templates: "Predloge",
		favorites: "Priljubljene",
		my_checkouts: "Moje odjave",
		mySyncedFiles: "Moje sinhronizirane datoteke",
		links: "Povezave",
		name_label: "Ime",
		description_label: "Opis:",
		type_label: "Tip:",
		type_heading: "Tip",
		type_id_label: "ID tipa",
		server_type_icon: "Ikona tipa strežnika",
		server_type_heading: "Tip strežnika",
		server_type: "Tip strežnika",
		port_heading: "Številka vrat",
		port_label: "Številka vrat:",
		server_name_heading: "Ime strežnika",
		server_label: "Ime strežnika:",
		server_url_label: "URL strežnika:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Povezano:",
		repository_label: "Repozitorij",
		modified_label: "Spremenil:",
		modified_date_label: "Spremenjeno dne:",
		status_label: "Status:",
		last_modified_label: "Zadnji spremenil:",

		modifier: "Spremenil",
		modified_date: "Spremenjeno dne",

		/* Favorites */
		new_favorite_label: "Dodaj med priljubljene",
		edit_favorite_label: "Preimenuj priljubljeno",
		remove_favorite_label: "Odstrani iz priljubljenih",
		missing_alias_message: "Podati morate ime.",
		sync_favorite_enable_hover: "Ta postavka je omogočena za sinhronizacijo.",
		sync_favorite_disable_hover: "Ta postavka se ne sinhronizira.",
		sync_favorite_sync_unavailable_hover: "Sinhronizacija ni na voljo za to vrsto predmeta.",
		sync_enable_label: "Sinhroniziraj to postavko",
		sync_enable_label_hover: "Ta postavka bo sinhronizirana z vašimi napravami.",
		delete_favorite_confirmation_question: "Ali želite odstraniti to postavko iz priljubljenih?",
		alias_label: "Ime:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Izbrana postavka je že v priljubljenih.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Te postavke ni mogoče dodati na vaš seznam priljubljenih.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Shranite lahko samo ${0} priljubljenih.",
		add_favorite_max_reached_response: "Če želite to postavko dodati na svoj seznam priljubljenih, morate izbrisati obstoječe priljubljene, preden lahko dodate to postavko.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Izbranih dokumentov ni mogoče pretvoriti v obliko PDF.",
		download_as_pdf_max_content_error_explanation: "V PDF lahko pretvorite samo ${0} MB podatkov. Vendar izbrani dokumenti presegajo ${0} MB.",
		download_as_pdf_max_content_error_response: "Izberite manj dokumentov ali manjše dokumente in jih znova prenesite kot datoteke PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Izbranih dokumentov ni mogoče pretvoriti v datoteko PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Če želite dokument z več deli pretvoriti v eno samo datoteko PDF, morajo biti vsi deli istega tipa MIME.",
		download_as_pdf_mimetype_check_error_response: "Izberite drug dokument za pretvorbo v PDF.",

		/* Activity Stream */
		show_label: "Pokaži:",
		all_filter: "Vse",
		notifications_filter: "Obvestila",
		workitems_filter: "Delovne postavke",
		documentes_filter: "Dokumenti",
		all_favorites_filter: "Vse priljubljene",
		folders_filter: "Mape",
		searches_filter: "Iskanja",
		teamspaces_filter: "Timski prostori",

		/* Repository */
		all_search_templates: "Vsa iskanja",
		all_od_searches: "Vse iskalne predloge",
		recent_searches: "Nedavna iskanja",
		opened_searches: "Odprta iskanja",

		all_worklists: "Vsi nabiralniki",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Seznam vsakega delovnega seznama",

		/* Teamspace */
		all_workspaces: "Vsi timski prostori",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Seznam vsakega timskega prostora",
		workspace_title: "Timski prostor",
		workspace_icon: "Ikona timskega prostora",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Na voljo",
		workspace_stat_offline: "Ni na voljo",
		workspace_stat_validate: "Zahteva preverjanje veljavnosti",
		workspace_stat_pendingDelete: "Brisanje na čakanju",
		workspace_stat_deleteError: "Brisanje ni uspelo",

		undefined_value: "Ni definirano",
		undefined_reference_value: "Definirana ni nobena referenca.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Več rezultatov je morda na voljo v strežniku.",
		search_all_data: "Išči po vseh podatkih.",
		search_all_teamspaces: "Iskanje v vseh timskih prostorih.",
		teamspace_filter_results: "Prikaz ${0} rezultatov. ",
		displaying_filtered_results: "Prikaz filtriranih rezultatov. ",
		displaying_recent_results: "Prikaz samo timskih prostorov, ki so bili spremenjeni v zadnjih ${0} dneh. Če želite poiskati druge timske prostore, filtrirajte seznam timskih prostorov po imenu ali opisu. ",
		clear_filter: "Čiščenje filtra.",

		/* FolderTreeModel */
		move_item_task: "Premakni postavko",
		copy_item_task: "Kopiraj postavko",
		add_item_task: "Dodaj postavko",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Naslednje mape ni bilo mogoče najti: ${0}. Morda je bila izbrisana ali pa mape iz tega pogleda ni mogoče odpreti. Kliknite povezavo Več iz drevesnega pogleda, da se pomaknete do mape. Če prikaz mape ni mogoč, osvežite pogled seznama vsebine.",
		more_paging_link: "več ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Prekliči",

		/* ErrorDialog */
		error_dialog_title: "Napaka",
		error_dialog_icon_tooltip: "Napaka",
		error_dialog_stack_trace_title: "Sled sklada",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Potrditev",

		close_browser_msg: "Zaprite okno brskalnika.",

		/* MessageDialog */
		message_dialog_title: "Informacije",
		warning_dialog_title: "Opozorilo",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Dobrodošli v ${0}",
		server: "Repozitorij:",
		username: "Uporabniško ime:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Za prijavo v repozitorij je zahtevano uporabniško ime.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Za prijavo v repozitorij je zahtevano geslo",
		password: "Geslo:",
		login: "Prijava",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Seja je potekla. Znova se prijavite.",
		login_repository_connection_expired_message: "Vaša povezava z repozitorijem ${0} je potekla. Znova se prijavite.",
		login_site_connection_expired_message: "Vaša povezava s spletnim mestom je potekla. Znova se prijavite.",
		login_new_server_message: "Vnesite uporabniško ime in geslo za ${0}.",
		login_error_more_information_message: "Več informacij",

		disconnect_box_account_user: "Prekini povezavo z računom Box: ${0}",
		disconnect_box_account: "Prekini povezavo z računom Box",
		disconnect_box_accounts: "Prekini povezavo z računi Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Za dostop do repozitorija Box je potrebna povezava SSL.",
		login_oauth_popup_blocked: "Pojavno okno je bilo blokirano. Morda boste morali onemogočiti pojavna okna v brskalniku, da se boste lahko prijavili.",
		login_oauth_click_here: "Če niste preusmerjeni v 5 sekundah, kliknite tukaj.",
		login_oauth_title: "Prijava",
		login_oauth_grant_intro: "Dovoli preverjanje pristnosti za ${0}.",
		login_pane_oauth_click_here: "Kliknite tukaj, da se prijavite.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Ali se želite odjaviti iz spletnega odjemalca?",
		logout_confirmation_button: "Odjava",

		/* ChangeLocaleDialog */
		change_locale: "Spremeni jezikovne in področne nastavitve",
		change_locale_use_browser_language: "Uporabi jezikovno nastavitev brskalnika (privzeto)",
		change_locale_use_browser_locale: "Uporabi jezikovno nastavitev brskalnika (privzeto)",
		change_locale_description: "Če izbrišete piškotke brskalnika, morate ponastaviti jezikovne in področne nastavitve.",
		change_locale_language_locale: "Jezik aplikacije:",
		change_locale_language_locale_hover: "Ta nastavitev spremeni jezik besedila v spletnem odjemalcu, vendar ne spremeni jezika dokumentov v aplikaciji.<br><br>Privzeta nastavitev uporabi jezik, ki je podan v konfiguracijskih možnostih spletnega brskalnika.",
		change_locale_value_format_locale: "Področne nastavitve aplikacije:",
		change_locale_value_format_locale_hover: "Področne nastavitve določajo obliko zapisa datuma, ure in številk v spletnem odjemalcu.<br><br>Privzeta nastavitev uporabi oblike zapisa, povezane z jezikom, ki je podan v konfiguracijskih možnostih spletnega brskalnika.",
		change_locale_for_office: "Nastavitve dvosmernega besedila:",
		change_locale_bidi_support_flag: "Omogoči dvosmerno podporo",
		change_locale_bidi_support_flag_hover: "Ko je dvosmerna podpora omogočena, lahko uporabnik nastavi smer besedila, ki se uporablja v vhodnih poljih.  Besedilo, vneseno za postavke, kot so na primer mape, bi bilo prikazano v isti smeri, kot je bilo vneseno.",
		change_locale_base_text_direction: "Osnovna smer besedila za vsebino:",
		change_locale_base_text_direction_hover: "Nastavi smer besedila, ki se vnaša v vhodna polja.  S tem se nadzoruje tudi smer prikaza oznak, ki jih je vnesel uporabnik, ko so imena map.",
		change_locale_calendar_type: "Tip koledarja:",
		change_locale_calendar_type_hover: "Izberite tip koledarja, ki se bo uporabljal za sejo uporabnika.",
		change_locale_base_text_direction_default: "Privzeto",
		change_locale_base_text_direction_ltr: "Od leve proti desni",
		change_locale_base_text_direction_rtl: "Od desne proti levi",
		change_locale_base_text_direction_contextual: "Kontekstni",
		change_locale_calendar_type_gregorian: "Gregorijanski",
		change_locale_calendar_type_hijri: "Islamski",
		change_locale_calendar_type_hebrew: "Hebrejščina",
		change_locale_calendar_type_Umm_al_Qura: "Um al kura",

		/* ChangePasswordDialog */
		change_password: "Spremeni geslo",
		change_password_title: "Spremeni geslo",
		change_password_expired_title: "Geslo je poteklo",
		change_password_message: "Vnesite novo geslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Vaše geslo je preteklo. Vnesite novo geslo.",
		change_password_password_rules: "Pravila za geslo",
		change_password_old_password: "Staro geslo",
		change_password_new_password: "Novo geslo",
		change_password_confirm_password: "Potrdite geslo:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Vnesti morate staro geslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Vnesti morate novo geslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Potrditi morate novo geslo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Gesli se morata ujemati.",

		/* GlobalToolbar */
		actions: "Dejanja",
		actions_label: "Dejanja:",
		open_actions_label: "Odpri dejanja:",

		/* About Dialog */
		about_dialog_title: "O programu",
		about_product_name_label: "Ime izdelka: ",
		about_product_version_label: "Različica: ",
		about_product_build_label: "Gradnja: ",
		about_product_license: "Licenčna gradiva - lastnina družbe IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Vse pravice so pridržane. Omejene pravice uporabnikov ameriške vlade. Uporaba, kopiranje ali razkritje so omejeni s terminsko pogodbo GSA ADP z IBM Corporation. IBM in IBM-ov logotip sta registrirani blagovni znamki družbe International Business Machines v Združenih državah Amerike, v drugih državah ali v obojih. Licenca za ta program je izdana v skladu z določbami licenčne pogodbe, ki jo dobite s programom. Licenčno pogodbo najdete v mapi programskega imenika ali v knjižnici, ki je določena kot \"License\" ali \"Non_IBM_License\", ali pa je na voljo v tiskani obliki. Prosimo, da pred uporabo programa natančno preberete to pogodbo. Z uporabo programa se šteje, da soglašate s pogoji v pogodbi. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Ali želite izbrisati izbrano postavko?",
		delete_single_folder_confirmation_question: "Ali želite izbrisati mapo ${0}?",
		delete_multiple_confirmation_question: "Ali želite izbrisati izbrane postavke?<br>Izbranih je ${0} postavk.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Izbriši",
		search_template_delete_confirmation_question: "Ali želite izbrisati iskanje ${0}?",
		search_template_opened_delete_confirmation_question: "Iskanje ${0} je odprto. Če izbrišete iskanje, se bo zaprlo.<br>Ali želite izbrisati to iskanje?",
		delete_multiple_opened_search_template_confirmation_question: "Odprta so naslednja iskanja: ${0}.<br>Če izbrišete iskanja, se bodo zaprla. Ali želite izbrisati ta iskanja?",
		delete_large_number_items_confirmation_question: "Za brisanje ste izbrali ${0} postavk.<br/>Brisanje velikega števila postavk lahko traja nekaj časa.<br/>Ali želite nadaljevati?",
		delete_confirmation_entrytemplate: "Če izbrišete to predlogo vnosa, bo to tako vplivalo na dokumente ali mape, povezane s predlogo vnosa:<ul><li>postavke ne bodo več povezane s predlogo vnosa in uporabniki bodo morda prejeli opozorilo, ko posodobijo postavko,</li><li>vse lastnosti, ki jih je nadzorovala predloga vnosa, kot je ime ali vrstni red lastnosti, ne bodo več veljale za postavke, ki so povezane s predlogo vnosa.</li></ul>Ali želite izbrisati to predlogo vnosa?",
		delete_confirmation_entrytempalte_with_multi_items: "Predloge vnosa je treba izbrisati posamezno. Predloge vnosa so bile odstranjene s seznama postavk za brisanje. Če želite izbrisati predloge vnosa, morate izbrisati vsako predlogo vnosa posebej.",

		/* Create/Apply/Remove Hold */
		hold: "Zadržanje",
		createHold: "Novo zadržanje",
		applyHold: "Uveljavi zadržanje",
		removeHold: "Odstrani zadržanje",
		showHolds_title: "Prikaži zadržanja",
		applyHoldSelectText: "Izberite zadržanja, ki jih želite uveljaviti v izbranih postavkah.",
		availableHolds: "Razpoložljiva zadržanja:",
		removeHoldSelectText: "Izberite zadržanja, ki jih želite odstraniti z izbranih postavk.",
		appliedHolds: "Uveljavljena zadržanja:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Ustvarite novo zadržanje, ki jo želite uveljaviti za izbrane postavkah.",
		holdName: "Ime zadržanja:",
		holdDescription: "Opis:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Podati morate ime za zadržanje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Podano ime zadržanja že obstaja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Ime zadržanja ne sme vsebovati naslednjih znakov: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Vaša seja bo potekla čez toliko minut: ${0}.",
		session_expire: "Seja bo kmalu potekla",
		logoff: "Odjava",
		extend_session: "Podaljšaj sejo",
		admin_custom_settings: "Dodatne nastavitve:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning je logična vrednost, ki kaže, ali je opozorilo, da je seja potekla, omogočeno; privzeta vrednost je \"resnično\". sessionExpireWarningTime je celo število med 2 in 5, ki določa čas opozorila o poteku seje.",
		admin_custom_setting_dialog_title_new: "Nova nastavitev",
		admin_custom_setting_dialog_title_edit: "Urejanje nastavitve",
		admin_custom_setting_dialog_hover_help: "Druge parametre dodajte tako, da podate ime in vrednost parametra. Na primer, \"enableSessionExpireWarning\" in \"resnično\" lahko podate, če želite omogočiti opozorilo o poteku seje.",
		admin_custom_setting_dialog_field_hover_help: "Za informacije o imenih parametrov in vrednostih glejte referenčni priročnik za parametre IBM Navigator.",
		admin_custom_setting_dialog_nameInvalid: "Zahtevana je vrednost. Vrednost ne sme vsebovati praznih mest in ne sme biti podvojena.",
		admin_custom_setting_dialog_bool_valueInvalid: "Zahtevana je vrednost. Vrednost mora biti logična vrednost.",
		admin_custom_setting_dialog_int_valueInvalid: "Zahtevana je vrednost. Vrednost mora biti celo število.",
		/* Add Document Dialog */
		add_document_dialog_title: "Dodaj dokument",
		add_documents_dialog_title: "Dodaj dokumente",
		add_document_general_label: "Splošno",
		add_document_properties_label: "Lastnosti",
		add_document_properties_with_ellipsis_label: "Lastnosti ...",
		add_document_security_label: "Zaščita",
		add_document_location_label: "Shrani v:",
		add_document_type_label: "Kaj želite shraniti?",
		add_document_localfile_label: "Lokalni dokument",
		add_document_metadata_label: "Informacije o dokumentu",
		add_document_external_label: "Povezava do zunanjega dokumenta",
		add_document_web_link_label: "Spletna povezava",
		add_document_saved_content_label: "Uporabi shranjeno datoteko:",
		add_document_saved_content_choice: "Shranjena datoteka",
		add_document_file_name_label: "Ime datoteke:",
		add_document_entry_template_label: "Predloga vnosa:",
		add_document_delete_file_label: "Izbriši lokalno datoteko",
		add_document_delete_file_disabled_label: "Datoteke, ki niso v imeniku za sledenje datotekam, ne bodo izbrisane.",
		add_document_major_version_label: "Glavna različica",
		add_document_major_version_hover: "Nastavi stanje dokumenta na Izdano. Dokument je dodan repozitoriju kot različica 1.0. Če ta možnost ni izbrana, dokument ni pripravljen za izdajo in je dodan kot podrazličica 0.1.",
		add_document_save_document_as_unfiled_label: "Dokumenta ne shrani v mapo",
		add_document_save_document_as_unfiled_hover: "Če izberete to možnost, lahko ta dokument najdete le z iskanjem. Ne morete ga najti z brskanjem.",
		add_document_create_new_version_label: "Ustvari novo različico",
		add_document_replace_existing_version_label: "Zamenjaj obstoječo različico",
		add_document_start_workflow_label: "Zaženi delovni tok",
		add_document_auto_classify_label: "Samodejno razvrsti vsebino",
		add_document_add_label: "Dodaj",
		add_document_cancel_label: "Prekliči",
		add_document_document_type_label: "Razred",
		add_document_context_info: "Vrednosti, ki jih vnesete za lastnosti dokumenta, se lahko uporabijo za poznejše iskanje dokumenta.",
		add_documents_context_info: "Vrednosti, ki jih vnesete za dokumente, je mogoče uporabiti za kasnejše iskanje dokumentov. Če bi za dokument radi vnesli drugačno vrednost lastnosti, jo morate dodati posebej ali urediti lastnosti dokumenta, potem ko jo dodate.",
		add_document_url_label: "URL:",
		add_document_template_description: "Opis predloge:",
		add_document_select_entry_template: "Vnesite ali izberite predlogo vnosa",
		add_document_no_permission_to_associations: "Nimate dovoljenj za uporabo predloge vnosa",
		add_document_no_entry_template_to_use: "Za izbrane datoteke ni mogoče uporabiti nobene predloge vnosa",
		add_document_no_entry_template_itemtype_permission: "V to mapo ne morete dodati postavk. Izbrana mora biti predloga vnosa, vendar nimate dostopa do nobene od predlog vnosa, povezanih s to mapo. Obrnite se na skrbnika sistema in zaprosite za dostop do predlog vnosa, povezanih s to mapo.",
		add_document_appgroup_name_label: "Ime skupine aplikacij:",
		add_document_app_name_label: "Ime aplikacije:",
		create_folder_dialog_title: "Nova mapa",
		create_folder_context_info: "Vrednosti, ki jih vnesete za lastnosti mape, se lahko uporabijo za kasnejše iskanje mape.",
		create_folder_folder_name_label: "Ime mape",
		create_folder_save_folder_as_unfiled_label: "Mape ne shrani v drugo mapo",
		create_folder_save_folder_as_unfiled_hover: "Če izberete to možnost, lahko to mapo najdete le z iskanjem. Ne morete je najti z brskanjem.",
		add_item_create_in_folder: "Ustvari v mapi:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Ime mape ne sme vsebovati naslednjih znakov: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Ime mape ne sme vsebovati nobenega od naslednjih znakov: \\ / in ne sme biti enako . ali ..",
		invalid_box_file_name_message: "Ime datoteke ne sme vsebovati nobenega od naslednjih znakov: \\ / in ne sme biti enako . ali ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Ime datoteke ne sme vsebovati naslednjih znakov: \\ / : * ? \" < > |",
		external_document_placeholder: "Vnesite URL dokumenta",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Barvo je treba vnesti kot 3- oz. 6-mestno šestnajstiško številko, npr. #000 oz. #000000.",
		add_document_unfiled: "${0} nevloženo",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Dodajanje dokumenta s predlogo vnosa",
		add_document_using_template_context_info: "Ko dodate dokument s pomočjo predloge vnosa, so vrednosti, ki jih vnesete za dokument, konsistentne.",
		add_documents_using_template_dialog_title: "Dodaj dokumente z uporabo predloge vnosa",
		add_documents_document_name_is_file_name_hint: "Ime datoteke bo uporabljeno za to lastnost.",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nova mapa s predlogo vnosa",
		create_folder_using_template_context_info: "Ko ustvarite mapo s pomočjo predloge vnosa, so vrednosti, ki jih vnesete za mapo, konsistentne.",

		add_documents_batch_results_dialog_title: "Dokumenti niso dodani v repozitorij",
		add_documents_batch_results_dialog_context_info: "Naslednji dokumenti niso bili dodani v repozitorij. Izberite dokument in kliknite Podrobnosti za več informacij o tem, zakaj dokument ni bil dodan v repozitorij.",
		add_documents_batch_results_dialog_filename_col_hdr: "Ime datoteke",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Sporočilo",
		add_documents_batch_results_status_error: "Napaka",
		add_documents_batch_results_status_cancelled: "Preklicano",
		add_documents_batch_results_status_cancelled_msg: "Dokument ni bil dodan, ker je bila zahteva preklicana.",

		add_documents_batch_status_title: "Dodajanje dokumentov",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Dodajanje datoteke ${0} od ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Napake: ${0}",
		add_documents_batch_status_completing_msg: "Postopek bo ustavljen, ko bo ta dokument dodan.",

		add_documents_status_uploading_msg: "Nalaganje datoteke ${0} od ${1}...",
		add_documents_status_adding_msg: "Dodajanje datoteke ${0} od ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "predloga vnosa je bila konfigurirana v drugi aplikaciji in je konfigurirana, da dokumente zmeraj deklarira kot dokumentarno gradivo. Vendar je ta nastavitev prezrta, saj spletni odjemalec ne podpira deklariranja dokumentov kot dokumentarnega gradiva.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "predloga vnosa je bila konfigurirana v drugi aplikaciji in je konfigurirana tako, da se vi odločite, ali naj ta dokument deklarira kot dokumentarno gradivo. Vendar je ta nastavitev prezrta, saj spletni odjemalec ne podpira deklariranja dokumentov kot dokumentarnega gradiva.",
		no_selection: "&lt;Izberi&gt;",

		batch_results_dialog_details_label: "Podrobnosti",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Vrednost ni veljavna. Vrednost mora biti globalni unikatni identifikator (GUID), na primer {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Vrednost ni veljavna. Vrednost mora biti številka, podana v zapisu s plavajočo vejico, npr. 1,2 oz. 365,.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Vrednost ni veljavna. Vrednost mora biti podana v obliki ${0}, na primer ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Vrednost ni veljavna. Vrednost mora biti podana v obliki decimalne vrednosti, na primer 1,2 oz. 365,.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Vrednost ni veljavna. Vrednost mora biti celo število, na primer 5 ali 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Vrednost ni veljavna. Vrednost lahko vsebuje samo abecedne znake, na primer a-z in A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Vrednost ni veljavna. Vrednost lahko vsebuje samo črkovno-številske znake, na primer a-z, A-Z in 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Vrednost ni veljavna. Vrednost lahko vsebuje samo številske znake, na primer 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Vrednost ni veljavna. Vrednost lahko vsebuje samo naslednje znake: a-z, A-Z, 0-9, [presledek] in `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Vrednost ni veljavna. Vrednost mora biti datum z naslednjo obliko: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Vrednost ni veljavna. Vrednost mora biti čas z naslednjo obliko: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Vrednost ni veljavna. Izberite vrednost s spustnega seznama.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Vrednost ni veljavna.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Vrednost ni veljavna. Vrednost mora imeti naslednjo obliko: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Zahtevana je vrednost.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Vrednost je predolga. Lastnost podpira največjo dolžino ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Vrednost je prekratka. Lastnost podpira najmanjšo dolžino, ki znaša ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Vrednost je izven dovoljenega obsega. Vrednost mora biti številka, podana v zapisu s plavajočo vejico med ${0} in ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Vrednost je izven dovoljenega obsega. Vrednost mora biti decimalna vrednost med ${0} in ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Vrednost je izven dovoljenega obsega. Vrednost mora biti celo število med ${0} in ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Vrednost mora biti datum med ${0} in ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Vrednost je izven dovoljenega obsega. Vrednost mora biti datum med ${0} in ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Vrednost je izven dovoljenega obsega. Vrednost mora biti čas med ${0} in ${1}.",
		property_and: "in",

		property_invalidValueOrRequired: "Naslednja vrednost ni veljavna ali pa je zahtevana: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Lastnosti",
		edit_properties_dialog_info: "Lastnosti te postavke si lahko ogledate in jih uredite. Če imate ustrezna dovoljenja, lahko spremenite tudi zaščito postavke. Sistemskih lastnosti ne morete spremeniti.",
		edit_properties_od_dialog_info: "Lastnosti te postavke si lahko ogledate in jih uredite. Sistemskih lastnosti ne morete spremeniti.",
		system_properties_title: "Sistemske lastnosti",
		custom_properties_title: "Lastnosti",
		/* Folder collaboration tab */
		box_permission_permission: "Dovoljenje",
		box_permission_permissions: "Dovoljenja",
		box_permission_editor: "Urednik",
		box_permission_owner: "Lastnik",
		box_permission_co_owner: "Solastnik",
		box_permission_viewer_uploader: "Nalagalnik prikazovalnika",
		box_permission_previewer_uploader: "Nalagalnik pregledovalnika",
		box_permission_viewer: "Prikazovalnik",
		box_permission_previewer: "Pregledovalnik",
		box_permission_uploader: "Nalagalnik",
		box_permission_add: "Dodaj",
		box_permission_upload: "Naloži",
		box_permission_download: "Prenesi",
		box_permission_preview: "Predogled",
		box_permission_view: "Ogled",
		box_permission_send_links: "Pošlji povezave, ki so na voljo samo za ogled",
		box_permission_create_subfolders: "Ustvari podmape",
		box_permission_create_tasks: "Ustvari opravila",
		box_permission_add_comments: "Dodaj komentarje",
		box_collaboration_invite_placeholder: "Vnesite ime, e-poštni naslov ali skupino, ki jo želite povabiti",
		box_collaboration_invite_placeholder_non_admin: "Vnesite e-poštni naslov, ki ga želite povabiti",
		box_collaboration_invalid_email: "Vnesite veljaven e-poštni naslov",
		box_collaboration_user_already_present: "Ta uporabnik je že sodelavec v mapi",
		box_collaboration_user_name: "Ime",
		box_collaboration_email_address: "E-poštni naslov",
		box_collaboration_date_added: "Datum dodajanja",
		box_collaboration_remove_collaboration: "Odstrani",
		box_collaboration_remove_collaboration_title: "Izbriši",
		box_collaboration_no_collaborators: "Ni sodelavcev",
		box_collaboration_change_owner_title: "Spremeni lastnika postavke",
		box_collaboration_change_owner_prompt: "Če tega sodelavca določite za lastnika mape, boste postali urednik in ne boste več lastnik mape. Vsi sodelavci, ki so bili dodani neposredno v mapo, jo bodo videli v svojih korenskih mapah. Vsi sodelavci, ki so bili dodani na ravni nadrejene mape ali na višji ravni, ne bodo več sodelavci. Ali želite nadaljevati?",
		box_collaboration_remove_self_title: "Odstrani sebe",
		box_collaboration_remove_self_prompt: "Ali ste prepričani, da želite odstraniti sebe kot sodelavca? Ne boste imeli več dostopa do te mape.",
		box_collaboration_user: "Uporabnik",
		box_collaboration_group: "Skupina",
		box_managing_users_not_configured: "Iskanje uporabnikov in skupin ni mogoče, ker aplikacija Box ni pravilno konfigurirana. Če želite uporabiti to funkcijo, se obrnite na skrbnika in ga prosite, da konfigurira aplikacijo Box za upravljanje uporabnikov in skupin.",
		duplicate_value_error: "Vse vrednosti v tej lastnosti morajo biti unikatne.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Morebitne spremembe v naslednjih poljih se uveljavijo za vse izbrane postavke. Če želite vnesti drugačno vrednost lastnosti za določeno postavko ali urediti varnost postavke, morate urediti lastnosti posamezne postavke.",
		multi_edit_properties_class_label: "Razred:",
		multi_edit_properties_items_label: "Imena postavk:",
		multi_edit_properties_properties_label: "Lastnosti:",
		multi_edit_batch_status_title: "Posodabljanje lastnosti",
		multi_edit_batch_status_adding_msg: "Posodabljanje postavke ${0} od ${1} ...",
		multi_edit_batch_status_verifying_msg: "Preverjanje postavke ${0} od ${1} ...",
		multi_edit_batch_status_completing_msg: "Postopek bo ustavljen, ko bo ta postavka posodobljena.",
		multi_edit_batch_status_validation_completing_msg: "Postopek bo ustavljen, ko bo ta postavka preverjena.",
		multi_edit_batch_results_status_error: "Napaka",
		multi_edit_batch_results_status_cancelled: "Preklicano",
		multi_edit_batch_results_status_cancelled_msg: "Postavka ni bila posodobljena, ker je bila zahteva preklicana.",
		multi_edit_batch_results_dialog_title: "Postavke niso posodobljene",
		multi_edit_batch_results_dialog_context_info: "Naslednje postavke niso bile posodobljene. Če želite več informacij o tem, zakaj postavka ni bila posodobljena, izberite ime postavke in kliknite Podrobnosti.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Ime postavke",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Sporočilo",
		multi_edit_batch_status_errors_msg: "Napake: ${0}",
		multi_edit_batch_permission_error_text: "Sprememb v lastnostih ni mogoče shraniti.",
		multi_edit_invalid_value_error: "Ta vrednost je odvisna od druge vrednosti lastnosti in ni veljavna za vse izbrane postavke.",
		multi_edit_batch_permission_error_explanation: "Lastnosti te postavke ne morete spreminjati, ker nimate ustreznih pooblastil.",
		multi_edit_no_modifiable_properties: "Lastnosti izbranih postavk ni mogoče spreminjati. Do tega lahko pride, če postavka vsebuje lastnosti samo za branje ali če se lahko ureja samo ime ali naslov postavke. Ko je izbranih več postavk, ni mogoče spreminjati imena ali naslova postavke.",
		multi_edit_mult_classes_dialog_info: "Izbrane postavke so v različnih repozitorijih ali pripadajo različnim razredom. Urejate lahko le postavke, ki so v istem razredu ali repozitoriju. Izberite podnabor postavk, ki jih želite urediti.",
		multi_edit_class_selector_class_heading: "Razred",
		multi_edit_class_selector_entry_template_heading: "predloga vnosa",
		multi_edit_class_selector_repository_heading: "Repozitorij",
		multi_edit_class_selector_items_heading: "Postavke",
		multi_edit_some_classes_not_displayed: "Nekatere izbrane postavke niso vključene v ta seznam, ker vsebujejo le lastnosti samo za branje ali so v repozitorijih, ki ne podpirajo urejanja lastnosti.",
		multi_edit_properties_invalid_msg: "Nekatere vrednosti lastnosti niso veljavne za vse izbrane postavke.",
		multi_edit_properties_readonly_tooltip_text: "${0}: ta lastnost je samo za branje in je ni mogoče spremeniti.",
		multi_edit_append_checkbox_label: "Pripni",
		multi_edit_append_checkbox_tooltip: "To možnost izberite, če želite obstoječim vrednostim pripeti nove vrednosti lastnosti, ne pa jih zamenjati.",
		multi_edit_properties_invalid_childcomponent_msg: "Nekatere vrednosti v lastnosti ${0} podrejene komponente ${1} so odvisne od drugih lastnosti in niso več veljavne za vaše izbire. Počistite vrednosti v podrejeni komponenti ${1} ali posebej spremenite lastnosti postavk, ki ste jih izbrali.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Izvoz lastnosti",
		export_properties_dialog_info: "Izberite lastnosti, ki jih želite izvoziti, in podajte vrstni red, v katerem bodo prikazane.",
		export_properties_dialog_export_button_label: "Izvozi",
		export_properties_dialog_export_raw_values: "Izvozi neobdelane vrednosti",

		/* Properties */
		filter_clear_tooltip: "Počisti filter",
		properties_new_row: "Nov",
		properties_requiredClass_document_tooltip: "Izberite dokument. Dokument mora pripadati razredu ${0}.",
		properties_requiredClass_folder_tooltip: "Izberite mapo. Mapa mora pripadati razredu ${0}.",
		properties_dataType_tooltip: "Vrsta podatkov: ${0}",
		properties_maxLength_tooltip: "Največja dolžina: ",
		properties_minLength_tooltip: "Najmanjša dolžina: ",
		properties_minValue_tooltip: "Najmanjša vrednost: ",
		properties_maxValue_tooltip: "Največja vrednost: ",
		properties_format_tooltip: "Oblika: ",
		properties_description_tooltip: "Opis: ",

		properties_type_boolean_tooltip: "Logična vrednost",
		properties_type_date_tooltip: "Datum",
		properties_type_time_tooltip: "Čas",
		properties_type_timestamp_tooltip: "Časovna oznaka",
		properties_type_decimal_tooltip: "Decimalna vrednost",
		properties_type_double_tooltip: "Številka, podana v zapisu s plavajočo vejico",
		properties_type_short_tooltip: "Celo število",
		properties_type_integer_tooltip: "Celo število",
		properties_type_long_tooltip: "Celo število",
		properties_type_string_tooltip: "Besedilni niz",
		properties_type_string_alpha_tooltip: "Abecedni niz",
		properties_type_string_alphanum_tooltip: "Črkovno-številski niz",
		properties_type_string_ext_tooltip: "Razširjen črkovno-številčni niz",
		properties_type_string_num_tooltip: "Številski niz",
		properties_type_binary_tooltip: "Dvojiško",
		properties_type_object_tooltip: "predmet",
		properties_type_reference_tooltip: "Ta lastnost se sklicuje na drugo postavko v repozitoriju.",
		properties_type_guid_tooltip: "Globalni unikatni identifikator",
		properties_type_group_tooltip: "Uporabniki in skupine",
		properties_type_user_tooltip: "Uporabniki",
		properties_type_childComponent_tooltip: "Podrejena komponenta",

		properties_childComponent_minCardinalityOnly_tooltip: "Ta lastnost mora imeti vsaj ${0} vrednosti.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Ta lastnost ne sme imeti več kot ${0} vrednosti.",
		properties_childComponent_minMaxCardinality_tooltip: "Ta lastnost mora imeti najmanj ${0} in največ ${1} vrednosti.",
		properties_childComponent_noCardinality_tooltip: "Ta lastnost ima lahko poljubno število vrednosti.",

		properties_type_guid_example_tooltip: ", na primer {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "izberite vrednost s seznama.",
		properties_single_select_choice_tooltip: "Izberite vrednost.",
		properties_multiple_select_typein_tooltip: "Vnesite eno ali več vrednosti.",
		properties_multiple_select_choice_tooltip: "Izberite eno ali več vrednosti.",
		properties_not_selectable_tooltip: "Kategorije ni mogoče izbrati.",
		properties_none: "Brez",
		properties_none_tooltip: "Izberite <i>Brez</i>, da počistite trenutno vrednost te lastnosti.",
		properties_value_empty: "Brez vrednosti",
		properties_value_read_only: "Samo za branje",
		properties_clear_label: "Počisti",
		properties_clear_tooltip: "Če počistite vrednost v tem polju, se počisti vrednost v repozitoriju, ko kliknete <b>Shrani</b>.",
		properties_box_custom_properties: "Lastnosti po meri",
		properties_box_metadata_name_in_use: "To ime je že v uporabi. Vnesite drugo ime za lastnost po meri.",

		properties_templates: "Predloge",
		properties_add_template: "Dodaj predlogo",
		properties_remove_template: "Odstrani",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Prijavi",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Prijavi",
		checkin_cancel_label: "Prekliči",
		checkin_file_name_label: "Ime datoteke",
		checkin_document_status_title: "Prijavi dokument",
		checkin_document_status_uploading_msg: "Nalaganje datoteke ...",
		checkin_document_status_checkingin_msg: "Prijavljanje datoteke ...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Izberite način redakcije",
		viewer_redaction_new_document_confirmation_question: "Ali želite shraniti redakcijo kot nov dokument ali kot lokalno datoteko?",
		viewer_redaction_new_version_confirmation_question: "Ali želite shraniti redakcijo kot novo različico?",
		viewer_redaction_new_version_confirmation_question_never: "Ali želite shraniti redakcijo kot novo vsebino?",		
		viewer_redaction_new_document_button: "Da",
		viewer_redaction_new_document_cancel_button: "Ne",
		viewer_redaction_add_document_confirmation_question: "Ali želite shraniti redakcijo kot nov dokument, novo različico ali kot lokalno datoteko?",
		viewer_redaction_add_document_confirmation_question_version_never: "Ali želite shraniti redakcijo kot nov dokument, novo vsebino ali kot lokalno datoteko?",
		viewer_redaction_add_document_button: "Nov dokument",
		viewer_redaction_add_new_version_button: "Nova različica",
		viewer_redaction_add_new_version_button_version_never: "Nova vsebina",
		viewer_redaction_add_local_file_button: "Lokalna datoteka",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Izberite razlog redakcije",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Predloge vnosa, ki je bila uporabljena za dodajanje tega dokumenta v repozitorij, ni mogoče najti. Dokument bo prijavljen v repozitorij brez uporabe predloge vnosa.",
		property_entry_template_not_retrieved_warning: "Predloge vnosa, ki je bila uporabljena za dodajanje tega dokumenta v repozitorij, ni mogoče najti. Lastnosti dokumenta se prikažejo brez uporabe predloge vnosa.",
		multi_edit_entry_template_not_found_name: "[ni najdeno]",
		multi_edit_entry_template_not_retrieved_warning: "Predloge vnosa, ki je bila uporabljena za dodajanje teh postavk v repozitorij, ni mogoče najti. Lastnostni postavke bodo spremenjene brez uporabe predloge vnosa.",
		checkin_major_version_hover: "Poveča številko različice dokumenta za eno in stanje dokumenta nastavi na Izdano. Če ta možnost ni izbrana, dokument ni pripravljen za izdajo in je prijavljen kot podrazličica.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokumenta ni mogoče prijaviti, ker ni odjavljen.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID uporabnika ali geslo ni veljavno za strežnik.",
		error_bad_userid_password_userResponse: "Preverite, ali ste vnesli pravilen ID uporabnika ali geslo.",
		error_bad_userid_password_adminResponse: "Prikaže se sporočilo o naslednji napaki: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Povezave s spletnim odjemalcem z uporabo naslednjega naslova URL ni mogoče vzpostaviti: ${0}.",
		http_send_error_explanation: "To napako lahko povzroči konfiguracijska napaka v spletnem aplikacijskem strežniku ali napaka aplikacije spletnega odjemalca.",
		http_send_error_userResponse: "Poskusite se ponovno prijaviti. Če težave ni mogoče odpraviti, o njej obvestite skrbnika sistema.",
		http_send_error_adminResponse: "Prikaže se sporočilo o naslednji napaki HTTP: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Povezave s spletnim odjemalcem z uporabo naslednjega naslova URL ni mogoče vzpostaviti: ${0}.",
		http_error_explanation: "Morda morate preveriti pristnost požarnega zidu ali pa se spletni aplikacijski strežnik morda ne izvaja oziroma ga ni mogoče doseči zaradi težav z omrežjem.",
		http_error_userResponse: "Če morate preveriti pristnost požarnega zidu, jo preverite in poskusite znova. Če težave ni mogoče odpraviti, o njej obvestite skrbnika sistema.",
		http_error_adminResponse: "Prikaže se sporočilo o naslednji napaki HTTP: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Povezave s spletnim odjemalcem z uporabo naslednjega naslova URL ni mogoče vzpostaviti: ${0}.",
		http_response_bad_explanation: "To napako lahko povzroči konfiguracijska napaka v spletnem aplikacijskem strežniku ali napaka spletnega odjemalca.",
		http_response_bad_userResponse: "Poskusite se ponovno prijaviti. Če težave ni mogoče odpraviti, o njej obvestite skrbnika sistema.",
		http_response_bad_adminResponse: "Prikaže se sporočilo o naslednji napaki: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Neimenovano",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Aplikacijskega programčka za e-pošto ni mogoče zagnati.",
		email_applet_init_failed_explanation: "Ta težava se lahko pojavi, če vaš e-poštni odjemalec ni pravilno nameščen in konfiguriran ali če podprta različica javanskega izvajalnega okolja (JRE) ni nameščena v delovni postaji.",
		email_applet_init_failed_userResponse: "Da bi odpravili to težavo:<ul><li>poskrbite, da bo vaša e-poštna aplikacija nameščena in v delovni postaji nastavljena kot privzeti e-poštni odjemalec.</li><li>Preverite, ali je podprta različica JRE nameščena v delovni postaji, tako da v ukazni poziv vnesete naslednji ukaz: java -version</li></ul><p>Seznam podprtih različic JRE je vključen v dokumentu <i>Predpogoji za strojno in programsko opremo za IBM Content Navigator</i> na IBM-ovem spletnem mestu podpore za programsko opremo.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Aplikacije za e-pošto ni bilo mogoče zagnati, ker zahtevane datoteke DLL ni mogoče naložiti.",
		email_applet_JNI_LOAD_FAILED_explanation: "Zahtevana datoteka WCEmailAppletJNI.dll se ne more naložiti, ker je morda začasni imenik v delovni postaji poln.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Preverite, ali je v začasnem imeniku dovolj prostora. Nato znova poskusite poslati dokument iz spletnega odjemalca. Datoteka WCEmailAppletJNI.dll se privzeto naloži v začasni imenik, ki je podan v nastavitvah spletnega brskalnika.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Aplikacije za e-pošto ni bilo mogoče zagnati, ker aplikacijski programček za e-pošto ne more ustvariti začasne datoteke.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Začasni imenik v delovni postaji je morda poln.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Preverite, ali je v začasnem imeniku dovolj prostora. Nato znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Aplikacije za e-pošto ni bilo mogoče zagnati, ker aplikacijski programček za e-pošto ne more dostopati do začasnega imenika.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Začasni imenik v delovni postaji je morda poln ali pa morda nimate ustreznega dostopa za pisanje v začasni imenik.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Preverite, ali je v začasnem imeniku dovolj prostora ter ali imate dovoljenja za zapisovanje v začasni imenik. Nato znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na skrbnika sistema.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Aplikacijski programček za e-pošto ne more izbrisati začasne datoteke.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Datoteko morda uporablja druga aplikacija ali pa datoteka v vaši delovni postaji morda ne obstaja.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Če datoteko uporablja druga aplikacija, jo zaprite. Če datoteke ni v vašem lokalnem datotečnem sistemu, iz začasnega imenika v delovni postaji odstranite naslednjo datoteko: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Povezave do dokumenta ni mogoče ustvariti.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Repozitorij je vrnil URL v neveljavni obliki.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Zaprite spletni brskalnik, vključno z vsemi zavihki in sejami, ter se znova prijavite. Znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na IBM-ovo podporo za programsko opremo.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Aplikacijski programček za e-pošto ne more priložiti datoteke e-pošti.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Repozitorij je vrnil URL do dokumenta v neveljavni obliki.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Zaprite spletni brskalnik, vključno z vsemi zavihki in sejami, ter se znova prijavite. Znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na IBM-ovo podporo za programsko opremo.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Priloge ni mogoče izdelati.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Aplikacijski programček za e-pošto ne more prebrati URL-ja do dokumenta.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Zaprite spletni brskalnik, vključno z vsemi zavihki in sejami, ter se znova prijavite. Znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na IBM-ovo podporo za programsko opremo.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokumenta ni bilo mogoče pridobiti iz repozitorija.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Vaša seja se je morda iztekla, repozitorij ali spletni aplikacijski strežnik se morda ne izvajata, ali obstaja napaka pri konfiguraciji spletnega odjemalca.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Prijavite se in znova poskusite poslati dokument po e-pošti. Če težave ni mogoče odpraviti, se obrnite na skrbnika sistema, da preveri dnevnike napak repozitorija.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Če ste spletnega odjemalca konfigurirali za pretvarjanje dokumentov AFP v drug format, kot je PDF, pred pošiljanjem dokumentov kot prilog poskrbite, da je pretvarjanje pravilno konfigurirano.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokumenta ni bilo mogoče pretvoriti v obliko PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Orodje, ki se uporablja za pretvarjanje dokumentov v obliko PDF, ne podpira te vrste datoteke.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Zaprite to stran in poskusite dokument ponovno poslati po e-pošti, brez da bi ga pretvorili v format PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-pošta ni bila ustvarjena.",
		email_applet_MAPI_USER_ABORT_explanation: "Odprite aplikacijo za e-pošto in preverite, ali deluje pravilno. Nato znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na skrbnika sistema, da pregleda dnevnike dogodkov operacijskega sistema.",
		email_applet_MAPI_USER_ABORT_userResponse: "Če ste nameravali zapreti aplikacijo za e-pošto, nadaljnji ukrepi niso potrebni. Če želite poslati e-pošto, se prijavite v aplikacijo za e-pošto in znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-pošte ni mogoče ustvariti.",
		email_applet_MAPI_FAILURE_explanation: "Odjemalec e-pošte morda ni odprt ali pa niste prijavljeni.",
		email_applet_MAPI_FAILURE_userResponse: "Odprite aplikacijo za e-pošto in preverite, ali deluje pravilno. Nato znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na skrbnika sistema, da pregleda dnevnike dogodkov operacijskega sistema.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-pošte ni mogoče ustvariti.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Niste prijavljeni v odjemalca za e-pošto. Odjemalec za e-pošto mora biti odprt, pri čemer morate biti prijavljeni za pošiljanje sporočila iz spletnega odjemalca.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Odprite svoj e-poštni odjemalec in se prijavite. Nato znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-pošte ni mogoče ustvariti, ker ni mogoče ustvariti začasne datoteke v delovni postaji.",
		email_applet_MAPI_DISK_FULL_explanation: "Začasni imenik v delovni postaji je morda poln.",
		email_applet_MAPI_DISK_FULL_userResponse: "Preverite, ali je v začasnem imeniku dovolj prostora. Nato znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-pošte ni mogoče ustvariti, ker ni dovolj sistemskega pomnilnika.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Morda imate odprtih preveč aplikacij.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Zaprite morebitne aplikacije, ki jih ne uporabljate, in znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Dostop MAPI je zavrnjen.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Dostop do aplikacijskega programskega vmesnika za sporočanje (MAPI) morda ni omogočen ali podprt za vašo aplikacijo za e-pošto. MAPI je protokol za sporočanje, ki se uporablja za omogočanje komunikacije med spletnim odjemalcem in aplikacijo za e-pošto.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Obrnite se na skrbnika sistema.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Poskrbite, da bo imela e-poštna aplikacija nastavljen dostop do MAPI in da je pravilno konfigurirana. Če težave ni mogoče odpraviti, se obrnite na IBM-ovo podporo za programsko opremo.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Priloge ali povezave do postavke ni mogoče ustvariti.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Morda imate odprtih preveč sej spletnega brskalnika.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Zaprite vse seje spletnega brskalnika, ki jih ne uporabljate. Nato znova poskusite poslati dokument iz spletnega odjemalca. Če težave ni mogoče odpraviti, se obrnite na skrbnika sistema.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-pošte ni mogoče poslati.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Morda poskušate poslati preveč prilog.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Izberite manj datotek. Nato znova poskusite poslati dokumente iz spletnega odjemalca.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-pošte ni mogoče poslati.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Morda pošiljate e-pošto preveč prejemnikom.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "E-pošto pošljite manj prejemnikom.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Priloge ni mogoče izdelati.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Nekatere zahtevane začasne datoteke se bile mogoče izbrisane, preden je bilo mogoče ustvariti prilogo. Do te napake lahko pride, če predpomnilnik brskalnika počistite pred pošiljanjem e-pošte.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Priloge ni mogoče izdelati.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Nekatere zahtevane začasne datoteke se bile mogoče izbrisane, preden je bilo mogoče ustvariti prilogo. Do te napake lahko pride, če predpomnilnik brskalnika počistite pred pošiljanjem e-pošte.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Aplikacija za e-pošto ne more ustvariti priloge.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-pošte ni mogoče poslati podanemu prejemniku.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Prejemnik morda ne obstaja v imeniku.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Preverite ime prejemnika in znova poskusite poslati dokument.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-pošte ni mogoče poslati podanemu prejemniku.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-poštni naslov morda nima pravilne oblike.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Preverite, ali ste vnesli pravilen e-poštni naslov, in znova poskusite poslati dokument.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-pošte ni mogoče poslati.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-pošta je morda predolga.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Skrajšajte besedilo e-pošte in jo poskusite poslati znova.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-pošte ni mogoče ustvariti.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Odjemalec za e-pošto ni uspel, ko je poskusil ustvariti e-pošto.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Znova zaženite odjemalca za e-pošto in znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-pošta morda ni sestavljena pravilno.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-pošte ni mogoče poslati podanemu prejemniku.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-poštni naslov morda nima pravilne oblike.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Preverite, ali ste vnesli pravilen e-poštni naslov, in znova pošljite dokument.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Odjemalec za e-pošto ne more izvesti zahtevanega dejanja.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Aplikacija za e-pošto je vrnila nepričakovano napako.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Znova poskusite poslati dokument iz spletnega odjemalca.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Ena od lastnosti nima zahtevanega števila vrednosti.",
		error_property_cardinality_explanation: "Nekatere lastnosti imajo najmanjše in največje število vrednosti.",
		error_property_cardinality_userResponse: "Z lebdečo pomočjo ugotovite, katera lastnost zahteva najmanjše število vrednosti. Nato podajte najmanjše število vrednosti in poskusite znova.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Zahtevano je ime dokumenta.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Podajte ime datoteke in poskusite znova.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Vtičnik ${0} vsebuje napake.",
		plugin_error_explanation: "Med ocenjevanjem JavaScripta za vtičnik ${0} je prišlo do napake. Če boste nadaljevali z uporabo spletnega odjemalca, lahko naletite na dodatne napake.",
		plugin_error_userResponse: "Obrnite se na skrbnika sistema.",
		plugin_error_adminResponse: "Obstaja napaka vtičnika, ki jo mora odpraviti ponudnik vtičnika. Priporočljivo je, da odstranite vtičnik iz konfiguracije spletnega odjemalca, dokler se napaka vtičnika ne odpravi.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Predloge vnosa ni mogoče odpreti.",
		open_old_format_entry_template_error_explanation: "Predloga vnosa uporablja starejšo obliko, ki je spletni odjemalec ne podpira.",
		open_old_format_entry_template_error_userResponse: "Prosite skrbnika sistema, da posodobi predlogo vnosa.",
		open_old_format_entry_template_error_adminResponse: "Z motorjem aplikacije ali z aplikacijo Workplace XT Entry Template Designer shranite posodobljeno različico predloge vnosa.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Predloge vnosa ni mogoče odpreti.",
		open_custom_object_entry_template_error_explanation: "Spletni odjemalec ne podpira naslednjih vrst predloge vnosa: predloge vnosa v predmet po meri.",
		open_custom_object_entry_template_error_userResponse: "Odprite drugo predlogo vnosa.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "predmeta e-obrazcev ni mogoče odpreti.",
		open_forms_object_error_explanation: "Spletni odjemalec ne podpira naslednjih vrst predmeta e-obrazcev: predloga obrazca, podatki obrazca, pravilnik dokumenta in pravilnik delovnega toka.",
		open_forms_object_error_userResponse: "Odprite drug dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Predloge vnosa ${0} ne morete uporabiti.",
		entry_template_folder_restricted_error_explanation: "predloga vnosa doda elemente v mapo ${1}, vi pa nimate ustreznih dovoljenj za dodajanje elementov v to mapo.",
		entry_template_folder_restricted_error_userResponse: "Izberite drugo predlogo vnosa ali se obrnite na vašega skrbnika sistema, ki vam dodeli ustrezna dovoljenja za dodajanje elementov v mapo ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Predloge vnosa ni mogoče odpreti.",
		open_records_entry_template_error_explanation: "Spletni odjemalec ne podpira naslednjih vrst predloge vnosa: predloge vnosa, ki so označene kot zapisi.",
		open_records_entry_template_error_userResponse: "Odprite drugo predlogo vnosa.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Delovnega toka ni mogoče odpreti.",
		open_workflow_error_explanation: "Spletni odjemalec ne podpira odpiranja delovnih tokov.",
		open_workflow_error_userResponse: "Odprite drug dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokumenta ni mogoče odpreti.",
		viewer_unable_to_view_error_explanation: "Noben prikazovalnik ni konfiguriran za to vrsto dokumentov ali pa konfigurirani prikazovalnik ni združljiv s sistemom.",
		viewer_unable_to_view_error_userResponse: "Prosite skrbnika sistema, da konfigurira prikazovalnik za to vrsto dokumentov in se prepričajte, da je konfigurirani prikazovalnik združljiv z uporabnikovim sistemom.",
		viewer_unable_to_view_error_adminResponse: "Uporabite skrbniško orodje, da konfigurirate prikazovalnik za to vrsto dokumentov.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Iskanja ni mogoče odpreti.",
		search_cannot_open_error_explanation: "Funkcija iskanja ni konfigurirana za to namizje.",
		search_cannot_open_error_userResponse: "Vprašajte skrbnika sistema, če lahko imate dostop do namizja, ki vključuje funkcijo iskanja ali če se lahko to namizje posodobi tako, da bo vključevalo funkcijo iskanja.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokument ni bil naložen.",
		viewer_document_load_failed_error_explanation: "Prikazovalnik Daeja ViewONE Professional ni mogel odpreti dokumenta.",
		viewer_document_load_failed_error_userResponse: "Za več informacij glejte sporočilo o napaki, ki ga prikazuje prikazovalnik.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokumenta ni mogoče prikazati.",
		viewer_session_expired_explanation: "Vsebine dokumenta ni mogoče pridobiti.",
		viewer_session_expired_userResponse: "Poskusite se znova prijaviti. Če težave ni mogoče odpraviti, se aplikacijski strežnik morda ne izvaja. Prosite skrbnika sistema, da pregleda dnevnike napak IBM Content Navigator ali znova zažene strežnik.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokumenta ni mogoče prikazati.",
		ajaxViewer_getPage_failed_explanation: "Prikazovalnik AJAX je prejel odgovor o napaki, ko je poskušal pridobiti vsebino strani. Aplikacijski strežnik se morda ne izvaja.",
		ajaxViewer_getPage_failed_userResponse: "Zaprite spletni brskalnik in se znova prijavite. Če težave ni mogoče odpraviti, se obrnite na skrbnika sistema, da pregleda datoteke dnevnika spletnega aplikacijskega strežnika ali znova zažene strežnik.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Izvajalno okolje Java (JRE) ni bilo najdeno v delovni postaji.",
		viewer_java_plugin_not_found_explanation: "Bodisi vtičnik ni bil najden bodisi ustrezna različica JRE ni nameščena.",
		viewer_java_plugin_not_found_userResponse: "Preverite, ali je JRE nameščen. V ukazni pozivnik vnesite na primer naslednji ukaz: Java -version. Če JRE ni nameščen oziroma je nameščen na napačni ravni različice, namestite ustrezno različico JRE-ja. Seznam podprtih različic je vključen v dokumentu <i>Predpogoji za strojno in programsko opremo za IBM Content Navigator</i> na IBM-ovem spletnem mestu podpore za programsko opremo.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokumenta ni mogoče prikazati v vašem spletnem brskalniku.",
		viewer_pdf_plugin_not_found_explanation: "Vtičnik, ki se uporablja za prikaz dokumentov PDF v spletnem brskalniku, ni bil najden.",
		viewer_pdf_plugin_not_found_userResponse: "Datoteka PDF se bo prenesla v delovno postajo, namesto da bi se prikazala v oknu prikazovalnika.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Naslednje postavke ni mogoče dodati v repozitorij: ${0}.",
		add_document_single_item_error_explanation: "To težavo lahko povzroči eden od naslednjih vzrokov:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Dodati poskušate dokument, ki je bil premaknjen ali izbrisan.</li>" + "<li>Dodati poskušate dokument, ki je bil preimenovan.</li>" + "<li>Dodati poskušate dokument, ki je pokvarjen.</li>" + "<li>Dodati poskušate dokument, ki je odprt v drugi aplikaciji.</li>" + "<li>V repozitorij poskušate dodati mapo.</li>" + "<li>Za dostop do dokumenta nimate ustreznih dovoljenj v vašem operacijskem sistemu.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Za odpravljanje težave ustrezno ukrepajte:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Če je dokument bil premaknjen ali preimenovan, ga poiščite v vašem datotečnem sistemu in ga poskusite ponovno dodati.</li>" + "<li>Če je dokument odprt v drugi aplikaciji, jo zaprite in ga poskusite ponovno dodati.</li>" + "</ul>" + "<br>V repozitorij ne morete dodajati map.",
		add_document_single_item_error_0: "neuspešna_postavka",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "V repozitorij ni mogoče dodati naslednjih postavk ${0}: ${1}",
		add_document_multiple_items_error_explanation: "Težava z eno od postavk preprečuje dodajanje drugih postavk v repozitorij. To težavo lahko povzroči eden od naslednjih vzrokov:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Dodati poskušate dokument, ki je bil premaknjen ali izbrisan.</li>" + "<li>Dodati poskušate dokument, ki je bil preimenovan.</li>" + "<li>Dodati poskušate dokument, ki je pokvarjen.</li>" + "<li>Dodati poskušate dokument, ki je odprt v drugi aplikaciji.</li>" + "<li>V repozitorij poskušate dodati mapo.</li>" + "<li>Za dostop do dokumenta nimate ustreznih dovoljenj v vašem operacijskem sistemu.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Za odpravljanje težave ustrezno ukrepajte:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Če je dokument bil premaknjen ali preimenovan, ga poiščite v vašem datotečnem sistemu in poskusite ponovno dodati postavke.</li>" + "<li>Če je dokument odprt v drugi aplikaciji, jo zaprite in poskusite ponovno dodati postavke.</li>" + "<li>Če je dokument bil izbrisan ali je pokvarjen, prekličite izbiro postavke in poskusite ponovno dodati preostale postavke.</li>" + "</ul>" + "<br>V repozitorij ne morete dodajati map.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Postavk s te lokacije ni mogoče povleči in spustiti.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "predmeta e-obrazcev ni mogoče odpreti.",
		open_forms_work_object_error_explanation: "Spletni odjemalec ne podpira naslednjih vrst predmeta e-obrazcev: pravilnik delovnega toka.",
		open_forms_work_object_error_userResponse: "Odprite drug dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokumenta ni mogoče odpreti.",
		viewer_privilege_to_view_error_explanation: "Nimate ustreznih pooblastil za ogled dokumenta.",
		viewer_privilege_to_view_error_userResponse: "Obrnite se na lastnika dokumenta ali skrbnika sistema, da vam dodeli ustrezna dovoljenja za ogled dokumenta.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Postavk ni mogoče dodati v repozitorij.",
		add_document_too_many_items_error_explanation: "Hkrati lahko dodate največ ${0} postavk. Poskušate dodati ${1} postavk.",
		add_document_too_many_items_error_userResponse: "Odstranite nekaj postavk s seznama in jih poskusite znova dodati. Obrnete se lahko tudi na skrbnika sistema, da poveča največje število dokumentov, ki jih lahko hkrati dodate na to namizje.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Povezave s spletnim odjemalcem z uporabo naslednjega naslova URL ni mogoče vzpostaviti: ${0}.",
		http_ltpa_expired_explanation: "Ključ LTPA, ki je povezan z vašo sejo brskanja, je potekel.",
		http_ltpa_expired_userResponse: "Znova zaženite vaš spletni brskalnik in se poskusite ponovno prijaviti. Če težave ni mogoče odpraviti, sistemskemu skrbniku javite naslednjo napako: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokumenta ni mogoče dodati v mapo ${0}.",
		dnd_no_privilege_error_explanation: "Dovoljenja za mapo preprečujejo dodajanje katerih koli dokumentov v mapo.",
		dnd_no_privilege_error_userResponse: "Dodajte dokument v drugo mapo.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Postavk ni mogoče spremeniti.",
		modify_document_too_many_items_error_explanation: "Naenkrat lahko spremenite največ ${0} postavk, vendar poskušate spremeniti ${1} postavk.",
		modify_document_too_many_items_error_userResponse: "Izberite manjše število postavk in jih znova poskusite spremeniti. Če želite, se lahko obrnete na skrbnika sistema, ki bo povečal največje število postavk, ki jih je mogoče hkrati spremeniti na tem namizju.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Razreda ${0} ne morete uporabiti.",
		add_document_multiple_unique_values_error_explanation: "Razred ${0} vsebuje eno ali več lastnosti, ki zahtevajo unikatno vrednost za vsak dokument. Ko dodate več dokumentov, vsi dokumenti uporabljajo enake vrednosti.",
		add_document_multiple_unique_values_error_userResponse: "Izberite drug razred ali dodajte dokumente ločeno.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Predloge vnosa ${0} ne morete uporabiti.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Predloga vnosa ${0} zahteva, da dodate dokumente v razred ${1}, vendar razred ${1} vsebuje eno ali več lastnosti, ki zahtevajo unikatno vrednost za vsak dokument. Ko dodate več dokumentov, vsi dokumenti uporabljajo enake vrednosti.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Izberite drugo predlogo vnosa ali dodajte dokumente ločeno.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Predloge vnosa ${0} ne morete uporabiti.",
		entry_template_class_restricted_error_explanation: "Predloga vnosa doda elemente z razredom ${1}, vi pa nimate ustreznih dovoljenj za dodajanje postavk s tem razredom.",
		entry_template_class_restricted_error_userResponse: "Izberite drugo predlogo vnosa ali se obrnite na vašega skrbnika sistema, da vam dodeli ustrezna dovoljenja za dodajanje postavk z razredom ${1}.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Delovne postavke ni mogoče ponovno dodeliti drugemu uporabniku.",
		process_reassign_error_explanation: "To dejanje prepoveduje delovni tok.",
		process_reassign_error_userResponse: "Delovno postavko lahko odprete in v njej dokončate trenutni korak.  Če želite več informacij o tej težavi, se obrnite na lastnika postavke, da preveri, ali je delovno postavko mogoče znova dodeliti.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Naslednjega dejanja po meri ni mogoče naložiti: ${0}.",
		customaction_loadurl_error_explanation: "Dejanje po meri se ne nahaja na dosegljivi lokaciji. Trenutni URL dejanja po meri je ${1}.",
		customaction_loadurl_error_userResponse: "Obrnite se na vašega skrbnika, da dejanje po meri premakne na dosegljivo lokacijo.",
		customaction_loadurl_error_adminResponse: "Datoteka JSP, ki definira dejanje po meri, mora biti posredovana kot del spletne aplikacije eClient oz. spletne aplikacije IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Naslednje funkcije ni mogoče najti: ${0}.",
		feature_invalid_explanation: "Do te težave lahko pride, če funkcija na podanem namizju ni na voljo ali ime funkcije ni pravilno črkovano.",
		feature_invalid_userResponse: "Ko kliknete V redu, boste preusmerjeni na privzeto funkcijo za to namizje. O tej težavi obvestite skrbnika sistema.",
		feature_invalid_adminResponse: "Če bi funkcija morala biti na voljo na namizju, posodobite konfiguracijo namizja v skrbniškem orodju. Če funkcija ne bi smela biti vključena na namizju ali ni pravilno črkovana, se obrnite na razvijalca aplikacije, ki je ustvaril URL do te funkcije, da ga posodobi.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Iskanja ${0} ni mogoče odpreti.",
		search_unsupportedTeamspaceSearch_error_explanation: "Če želite odpreti to iskanje, morate biti v timskem prostoru.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Izberite drugo iskanje.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Naslednje datoteke ni mogoče uvoziti: ${0}.",
		wrong_import_file_type_error_explanation: "Datoteka mora biti datoteka lastnosti.",
		wrong_import_file_type_error_userResponse: "Izberite datoteko lastnosti, ki ste jo izvozili iz skrbniškega orodja.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Repozitorij ${0} ni bil najden na namizju ${1}.",
		browse_repository_not_found_error_explanation: "Repozitorij mora biti na voljo na namizju in omogočen za funkcijo brskanja, ko je podan v parametru URL-ja.",
		browse_repository_not_found_error_userResponse: "Zagotovite, da je ID repozitorija, podan v URL-ju, pravilen, da je bil repozitorij dodan na namizje ${1} in da je funkcija brskanja omogočena za repozitorij.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Repozitorij ${0} ni omogočen za funkcijo brskanja na namizju ${1}.",
		browse_repository_not_enabled_error_explanation: "Repozitorij mora biti omogočen za funkcijo brskanja, ko je podan v parametru URL-ja.",
		browse_repository_not_enabled_error_userResponse: "Omogočite funkcijo brskanja za repozitorij ${0} na namizju ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Iskanja ni mogoče zaključiti, ker povezava vključuje neveljavne kriterije.",
		invalid_xt_stored_search_criteria_error_explanation: "Naslednja vrednost ni veljavna: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Skrbnika sistema prosite za posodobljeno povezavo.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Uredite ustrezen par ime-vrednost v URL-ju. Če ne veste, katere vrednosti so veljavne za lastnost, odprite shranjeno iskanje v FileNet Workplace XT Search Designer, da določite veljavno vrednost.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Hkratnega iskanja v več repozitorijih ni mogoče odpreti.",
		unified_search_invalid_fixed_value_error_explanation: "Hkratno iskanje v več repozitorijih vsebuje neveljavne kriterije. Do te težave pride, če ima kriterij fiksno vrednost, ki se ne ujema z drugimi lastnostmi preslikave. Ta težava se lahko na primer pojavi, če je fiksna vrednost niz, druge lastnosti v preslikavi pa so cela števila.",
		unified_search_invalid_fixed_value_error_userResponse: "Če imate ustrezna dovoljenja za urejanje iskanja, odstranite neveljavne kriterije in znova shranite iskanje. Če nimate ustreznih dovoljenj za urejanje iskanja, se obrnite na lastnika iskanja ali skrbnika sistema, da znova shrani iskanje.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Zahteve ni mogoče dokončati.",
		launch_action_invalid_json_error_explanation: "Podatki, ki so bili posredovani spletnemu odjemalcu, niso veljavni.",
		launch_action_invalid_json_error_userResponse: "Skrbniku sistema povejte, katero aplikacijo ste uporabljali, ko je prišlo do te težave.",
		launch_action_invalid_json_error_adminResponse: "Odjemalska aplikacija ni poslala veljavnega predmeta JSON spletnemu odjemalcu. Za dodatno pomoč se obrnite na IBM-ovo podporo za programsko opremo.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Zahteve ni mogoče dokončati.",
		launch_action_not_found_error_explanation: "Dejanje ${0} ni konfigurirano za nobenega od menijev na namizju ${1}.",
		launch_action_not_found_error_userResponse: "Prosite skrbnika sistema, da konfigurira namizje ${1} tako, da bo uporabljalo meni, ki vsebuje dejanje ${0}, ali vas dodeli namizju, ki vsebuje dejanje ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Zahteve ni mogoče dokončati.",
		launch_action_repository_not_found_error_explanation: "Repozitorij ${0} ni povezan z namizjem ${1}.",
		launch_action_repository_not_found_error_userResponse: "Prosite skrbnika sistema, da poveže repozitorij ${0} z namizjem ${1} ali vas dodeli namizju, ki vsebuje repozitorij ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Timskega prostora ni mogoče odpreti.",
		teamspace_cannot_open_error_explanation: "Za to namizje ni konfigurirana funkcija timskega prostora.",
		teamspace_cannot_open_error_userResponse: "Prosite skrbnika sistema, da vam dodeli dostop do namizja, ki vključuje funkcijo timskega prostora, oz. posodobi to namizje tako, da bo vključevalo to funkcijo.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Pri prijavljanju revidiranega besedila je prišlo do napake.",
		viewer_redaction_checkin_failed_explanation: "Prikazovalnik je med prijavljanjem revidirane vsebine prejel odgovor o napaki.",
		viewer_redaction_checkin_failed_userResponse: "Prosite skrbnika sistema, naj pregleda dnevniške datoteke spletnega aplikacijskega strežnika.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "V ta repozitorij ni mogoče dodajati dokumentov.",
		add_document_odserver_odwek_version_od_error_explanation: "Trenutna različica strežnika IBM Content Manager OnDemand ali ODWEK ni na najnižji zahtevani ravni, da bi podpirala dodajanje dokumentov v repozitorij Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Prosite skrbnika sistema, da preveri, katere različice strežnika Content Manager OnDemand Server in ODWEK podpirajo dodajanje dokumentov v repozitorije Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Postavk ni mogoče dodati v repozitorij.",
		add_document_too_many_items_od_error_explanation: "V repozitorije IBM Content Manager OnDemand lahko naenkrat dodate le eno postavko.",
		add_document_too_many_items_od_error_userResponse: "Odstranite nekaj postavk s seznama in poskusite znova dodati postavke eno po eno.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Postavke ni mogoče dodati v repozitorij.",
		add_document_filesize_empty_od_error_explanation: "V repozitorij IBM Content Manager OnDemand ni mogoče dodajati praznih datotek.",
		add_document_filesize_empty_od_error_userResponse: "Dodajte vsebino v datoteko in poskusite znova dodati datoteko ali pa dodajte drugo postavko.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Hkratnega iskanja v več repozitorijih ni mogoče odpreti.",
		unified_search_repository_not_found_error_explanation: "Hkratno iskanje v več repozitorijih vključuje vsaj en neveljaven repozitorij. Do te težave lahko pride, kadar so repozitoriji, ki so vključeni v iskanje, izbrisani iz aplikacije ali odstranjeni s trenutnega namizja.",
		unified_search_repository_not_found_error_userResponse: "Če imate ustrezna dovoljenja za urejanje iskanja, znova shranite iskanje. Ko shranite iskanje, spletni odjemalec odstrani neveljavne repozitorije iz iskanja. Če nimate ustreznih dovoljenj za urejanje iskanja, se obrnite na lastnika iskanja ali skrbnika sistema, da znova shrani iskanje.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Novega dokumenta ni mogoče ustvariti.",
		edit_document_using_office_online_error: "Dokumenta ni mogoče odpreti.",
		edit_document_using_office_online_error_explanation: "URL strežnika Microsoft Office Online Server ni konfiguriran.",
		edit_document_using_office_online_error_userResponse: "Preden lahko začnete uporabljati zbirko Office Online, mora skrbnik omogočiti strežnik Office Online Server v repozitoriju in določiti URL strežnika Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokumenta ni mogoče odpreti v Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Obrnite se na skrbnika, če želite posodobiti MS Office Online Server Integration.<br><br> Če uporabnik potrebuje dostop do tega dokumenta iz Microsoft Office Online, se pomaknite na stran za urejanje integracij za repozitorij in posodobitev MS Office Online Server Integration, da vključite razred v seznamu razredov za spreminjanje podpore za Office Online. ",		
		browser_not_support_this_viewer: "Konfigurirani pregledovalnik ni združljiv z vašim brskalnikom.",
		browser_not_support_this_viewer_explanation: "Brskalnik ne podpira ${0}.",
		browser_not_support_this_viewer_userResponse: "Za odpiranje dokumenta uporabite drug pregledovalnik. Seznam podprtih brskalnikov se nahaja v dokumentu <i>Strojni in programski predpogoji za IBM Content Navigator</i> na IBM-ovem spletnem mestu za podporo programske opreme.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Podatki o delovnem toku",
		process_information_info_text: "Izbrana postavka se trenutno izvaja v naslednjih delovnih tokovih.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Je enako",
		operator_NOTEQUAL: "Ni enako",
		operator_LIKE: "Podobno",
		operator_STARTSWITH: "Se začne z",
		operator_ENDSWITH: "Se konča z",
		operator_NOTLIKE: "Ni podobno",
		operator_NULL: "Je prazno",
		operator_NOTNULL: "Ni prazno",
		operator_LESS: "Manjše kot",
		operator_LESSOREQUAL: "Manjše kot ali enako",
		operator_GREATER: "Večje kot",
		operator_GREATEROREQUAL: "Večje kot ali enako",
		operator_BETWEEN: "Med",
		operator_NOTBETWEEN: "Ni med",
		operator_IN: "Vključi vse",
		operator_INANY: "Vključi karkoli",
		operator_NOTIN: "Izključi vse",
		operator_CONTAINS: "Vsebuje",

		/* SearchForm widget */
		search_button_tooltip: "Poiščite dokumente, ki se ujemajo z vašimi kriteriji.",
		reset_button_tooltip: "Ponastavi iskanje na privzete vrednosti, ki jih je nastavil skrbnik.",
		clear_button_tooltip: "Odstrani vse vrednosti, ki ste jih vnesli za iskanje.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Izberi iskanje",
		append_to_search: "Pripni v iskanje",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Novo iskanje",
		new_unified_search: "Novo hkratno iskanje v več repozitorijih",
		searh_name_contains: "Ime za iskanje vsebuje",
		keep_search_criteria_expanded: "Pusti kriterije iskanja odprte",
		showing_results: "Prikaz rezultatov za:",
		open_in_new_window: "Odpri v novem oknu",
		open_in_new_tab: "Odpri v novem zavihku",
		close_tab: "Zapri zavihek",
		add_repository: "Dodaj repozitorij",
		edit_repository: "Uredi repozitorij",
		remove_repository: "Odstrani",
		search_scope: "Iskalno območje",
		search_class_template: "Razred",
		object_type_version: "Vrsta predmeta in različica",
		not_applicable: "Ni na voljo",
		unified_search_including_subfolders: " (vključno s podmapami)",
		unified_search_dialog_intro_text: "Izberite repozitorij in iskanje ali razrede, ki jih želite vključiti v iskanje.",
		unified_search_class_or_template: "Razred ali predloga",

		select_object_fieldset_legend: "Kako želite poiskati postavke, ki bi jih priložili:",
		select_object_create_new_search: "Novo iskanje",
		select_object_search_template: "Obstoječe iskanje",

		search_criteria: "Kriteriji iskanja:",
		search_criteria_no_colon: "Kriteriji iskanja",
		search_in_multiple: "Išči v ${0}):",
		search_location_including_subfolders: "${0}, vključno s podmapami",
		search_class: "Razred:",
		search_class_multiple: "Razred (${0}):",
		search_class_including_subclasses: "${0}, vključno s podrazredi",
		search_class_all_pseudo: "Vse",
		search_results: "Rezultati iskanja",
		select_operator: "Izberi operatorja",
		ending_value: "Končna vrednost za lastnost ${0} je:",
		search_options: "Možnosti iskanja:",
		search_version: "Različica:",
		search_released_version: "Izdana različica",
		search_current_version: "Trenutna različica",
		search_all_versions: "Vse različice",
		search_file_type_filter: "Filter vrst datotek:",
		search_one_file_type: "1 vrsta datotek",
		search_many_file_types: "${0} vrst datotek",
		search_action_filter: "Filter dejanj:",
		search_action_filter_hover_help: "Zoži rezultate, da bodo vključevali samo datoteke, za katere so uporabniki uporabili določena dejanja.<br/>Na primer, iščete lahko samo dokumente, ki ste jih dodali 20. septembra 2012.",
		search_action_filter_enabled: "Filter dejanj je omogočen",
		search_enable: "Omogoči",
		search_disable: "Onemogoči",
		search_by: "po",
		search_added: "Dodal",
		search_modified: "Spremenil",
		search_checked_out: "Odjavil",
		search_date_operator_on: "Vključeno",
		search_date_operator_not_on: "Ne ob",
		search_date_operator_before: "Pred",
		search_date_operator_after: "Po",
		search_version_hover_help_p8: "Izdana različica je na voljo vsem uporabnikom. Dokument, ki je trenutna različica, je dokument, ki ga ureja eden ali več uporabnikov.",
		search_version_hover_help_cm: "Trenutna različica je najnovejša različica postavke.",
		search_using: "Išči postavke, ki se ujemajo z:",
		search_property_and_text_criteria: "Tako z vrednostmi lastnosti kot z besedilnimi pogoji",
		search_property_or_text_criteria: "Bodisi z vrednostmi lastnosti bodisi z besedilnimi pogoji",
		search_property_and_text: "S pogoji lastnosti in besedilnimi pogoji",
		search_property_or_text: "Bodisi s pogoji lastnosti bodisi z besedilnimi pogoji",
		search_property_options: "Možnosti lastnosti:",
		search_property_option_match_all: "Vsemi lastnostmi",
		search_property_option_match_any: "Katerimikoli lastnostmi",
		search_property_option_match_all_summary: "Ujemanje z vsemi",
		search_property_option_match_any_summary: "Ujemanje s katerimikoli",
		search_total_count_type_total: "Skupaj",
		search_total_count_type_atleast: "Vsaj",
		search_content_size_filter: "Filter velikosti vsebine:",
		search_content_size_filter_any: "Katera koli velikost vsebine",

		/* Search work options */
		search_work_filter: "Filter delovne postavke:",
		search_work_filter_hover_help: "Zožite rezultate, da vključite samo postavke, ki so v delovnem toku. Rezultate lahko zožite na primer tako, da vključite samo aktivne.<br /><br />Ta možnost ni ustrezna, če želite videti vse različice postavk, ki jih vrne iskanje.",
		search_work_filter_enabled: "Filter delovne postavke je omogočen",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Korak:",
		search_work_filter_owner: "Lastnik:",
		search_work_filter_status_all: "Vse postavke",
		search_work_filter_status_active: "Aktivne postavke",
		search_work_filter_status_suspended: "Začasno ustavljene postavke",
		search_work_filter_process_all: "Vse delovne postavke",
		search_work_filter_step_all: "Vsi koraki",
		search_work_filter_owner_all: "Vsi uporabniki",
		search_work_filter_step_error: "Ime koraka ne obstaja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Iskanja ni mogoče dokončati brez dodatnih informacij. Vnesite vrednost za najmanj en pogoj.",
		search_insufficient_input_box: "Iskanja ni mogoče dokončati brez dodatnih informacij. Vnesite kriterije za iskanje po besedilu ali izberite predlogo metapodatkov.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Iskanja ni mogoče konfigurirati tako, da bi se izvajalo, ko je odprto brez dodatnih informacij. Vnesite vrednost za najmanj en pogoj.",
		search_member_required: "Za skupno rabo tega iskanja s specifičnimi uporabniki in skupinami izberite vsaj enega uporabnika ali skupino, s katero želite souporabljati to iskanje.",
		search_criteria_layout_and: "IN",
		search_criteria_layout_or: "ALI",
		search_prompt_close_without_save: "Ali želite zapreti ne da bi shranili spremembe?",
		search_prompt_close_all_without_save: "Ali želite zapreti vse zavihke brez shranjevanja sprememb?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Ena od naslednjih vrst kriterijev iskanja ni veljavna za ta repozitorij: ${0}. Če želite izvesti iskanje v spletnem odjemalcu, morate odstraniti neveljavne kriterije. Če shranite iskanje, so neveljavni kriteriji odstranjeni. Če ne želite spremeniti iskanja, ga zaprite.",
		search_invalid_repository: "Eden ali več repozitorijev",
		search_invalid_class: "Eden ali več razredov",
		search_invalid_folder: "Ena ali več map",
		search_invalid_file_type: "Ena ali več vrst datotek",
		search_invalid_property: "Ena ali več lastnosti",
		search_invalid_text_search: "Kriteriji za iskanje po besedilu",
		search_invalid_work: "Kriteriji za filter delovne postavke",

		search_operator_pulldown_missing: "Potreben je operator. S spustnega menija izberite operatorja. Če ne vidite operatorjev, se obrnite na skrbnika sistema, da pregleda zavihek <b>Iskanje</b> v skrbniškem orodju in preveri, ali so vsi operatorji skriti. Če gre za hkratno iskanje v več repozitorijih, spustni meni morda ne vsebuje operatorjev, če lastnosti, ki so preslikane druga v drugo, nimajo skupnih operatorjev.",

		/*SearchBuilder */
		open_search_builder: "Novo iskanje",
		document_type: "Razred",
		show_all_properties: "Pokaži vse lastnosti",
		text_search_label: "Poišči postavke z naslednjimi izrazi:",
		text_search_place_holder: "Uporabite kombinacijo izrazov in operatorjev: * ? ali \"besedne zveze z natančnim ujemanjem\"",
		text_search_place_holder_box: "Uporabite kombinacijo izrazov in operatorjev: IN, ALI, NE in \"besedne zveze z natančnim ujemanjem\"",
		text_search_place_holder_cascade_proximity: "Uporabite kombinacijo izrazov in operatorjev: * ali ?",
		text_search_place_holder_common: "Uporabite kombinacijo izrazov in \"besedne zveze z natančnim ujemanjem\"",
		text_search_hover_help_p8: "Zvezdico (*) ali vprašaj (?) uporabite kot nadomestni znak. Za natančne ujemanja uporabite dvojne narekovaje (\"\").",
		text_search_hover_help_p8_only_crs: "Zvezdico (*) ali vprašaj (?) uporabite kot nadomestni znak. Za natančne ujemanja uporabite dvojne narekovaje (\"\"). Kadar podate več izrazov, iskanje v več repozitorijih vrne postavke, ki vsebujejo katerega koli od izrazov.",
		text_search_hover_help_cm: "Zvezdico (*) ali vprašaj (?) uporabite kot nadomestni znak. Za natančne ujemanja uporabite dvojne narekovaje (\"\"). Uporabite znak za minus (-), da naprej postavite izraze, ki bodo izključeni, in znak za plus (+), da naprej postavite izraze, ki bodo vključeni.",
		text_search_hover_help_box: "Če želite, da se rezultati iskanja ujemajo z vsemi izrazi, mednje vstavite IN. Če želite, da se rezultati iskanja ujemajo s katerim koli od izrazov, mednje vstavite ALI. Za natančne ujemanja uporabite dvojne narekovaje (\"\"). Če želite izraz izključiti, predenj vstavite NE.",
		text_search_hover_help_common: "Za natančne ujemanja uporabite dvojne narekovaje (\"\"). Kadar podate več izrazov, iskanje v več repozitorijih vrne postavke, ki vsebujejo vse izraze.",
		text_search_options: "Možnosti besedila:",
		text_search_options_hover_help: "Če uporabljate operatorje, ki niso nadomestni znaki, izberite Napredni operatorji.",
		text_search_option_any: "Katerikoli izraz",
		text_search_option_all: "Vsi izrazi",
		text_search_option_proximity: "V bližini besed:",
		text_search_option_none: "Napredni operatorji",
		text_search_option_authoring: "Iskanje po besedilu je:",
		text_search_option_authoring_hover_help: "Izberite možnost, ki določa način za zagotavljanje kriterijev iskanja po besedilu za uporabnike. Če ne želite vključiti nobenih kriterijev iskanja po besedilu, skrijte možnost. Sicer lahko uporabnikom omogočite urejanje ali zahtevanje kriterijev iskanja po besedilu ali pa jih omogočite samo za branje.",
		text_search_option_hide: "Skrij kriterije",
		text_search_option_hide_hover_help: "Izberite to možnost, če ne želite vključiti nobenega kriterija za iskanje po besedilu v iskanju ali omogočiti drugim uporabnikom, da podajo kriterije za iskanje po besedilu.",
		text_search_option_in: "V oznaki HTML/XML ${0}",
		text_search_option_paragraph: "V istem odstavku",
		text_search_option_sentence: "V istem stavku",
		text_search_option_vql: "Poizvedba VQL",
		text_search_option_none_hover_help: "Uporabite - pred izrazi, ki jih želite izključiti.",
		text_search_option_cascade_proximity_hover_help: "Omeji rezultate iskanja na izraze, ki se pojavijo v obsegu besed, ki ne vključuje točnih besednih zvez.",

		box_search_metadata: "Metapodatki:",
		box_search_select_template: "Izberi predlogo",
		box_search_no_templates: "Na voljo ni nobena predloga",
		box_text_search_options_search_within: "Obseg iskanja:",
		box_text_search_options_search_within_everything: "Vse",
		box_text_search_options_search_within_file_content: "Vsebina dokumenta",
		box_text_search_options_search_within_tags: "Oznake",
		box_text_search_options_limit_to: "Iskanje samo naslednjega:",

		add_property: "Dodaj lastnost",
		edit_template: "Uredi iskanje",
		save_search: "Shrani iskanje",
		search_template_name: "Ime:",
		search_template_desc: "Opis:",
		auto_run: "Zaženi iskanje, ko je odprto",
		show_in_tree: "Pokaži iskanje v strukturi mape",
		show_in_tree_hover_help: "Če je iskanje shranjeno v mapi, se privzeto prikaže samo v seznamu vsebine. Če izberete to možnost, bo iskanje prikazano tudi v drevesu map v pogledu Brskanje,  vendar se iskanje prikaže v drevesu map samo, če shranite iskanje v mapo.",
		share_search_with: "Skupna raba iskanja z:",
		remove_member: "Odstrani ${0}",
		ok_button_label: "V redu",
		save_template: "Shrani",
		save_template_title: "Če pogosto iščete določene postavke, shranite kriterije iskanja.",
		remove_criterion: "Odstrani",
		apply_button_label: "Uveljavi",
		empty_search_results_pane: "Za ogled rezultatov zaženite iskanje.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Celoten repozitorij",

		repository_already_selected: "Repozitorija ${0} ni bilo mogoče dodati v hkratno iskanje v več repozitorijih, ker je že vključen v iskanje. <br/> Repozitorij lahko v hkratno iskanje v več repozitorijih vključite le enkrat. <br/>Izberite drug repozitorij, ki ga želite vključiti v hkratno iskanje v več repozitorijih.",

		repository_limit_reached: "Repozitorija ${0} ni mogoče dodati v hkratno iskanje v več repozitorijih. Največje število repozitorijev, ki jih lahko dodate v iskanje, je: ${1}.",

		nomore_criteria_toappend: "Vse preslikane lastnosti so že vključene v kriterijih iskanja. V kriterije iskanja ni bilo dodanih nobenih lastnosti.",
		nomore_criteria_toappend_regular: "Vse lastnosti so že vključene v kriterije iskanja. V kriterije iskanja ni bilo dodanih nobenih lastnosti.",

		/* OD Save Search dialog */
		reload_label: "Znova naloži",
		od_save_search_help_text: "Vnesite ime za iskanje ali izberite obstoječe iskanje za zamenjavo",
		public_access_label: "Dovoli drugim, da uporabljajo to iskanje",
		od_delete_search_help_text: "Izberite enega ali več iskanj, ki jih želite izbrisati",
		delete_save_searches: "Izbriši shranjena iskanja",

		/* Unified Search */
		unified_search_enable_text_search: "Vključi kriterije za iskanje po besedilu",
		unified_search_text_search_enabled: "Iskanje besedil vključeno",
		unified_search_mapping: "Preslikava",
		unified_search_new_mapping: "Nova preslikava",
		unified_search_mapping_name: "Ime preslikave",
		unified_search_mapping_dialog_instructions: "Izberite lastnosti, ki jih želite preslikati. Nekatere lastnosti se lahko preslikajo v lastnosti z drugačno vrsto podatkov. Preslikate lahko na primer lastnost niza v lastnost celega števila. Ko preslikate lastnost v drugo lastnost, se lastnosti v hkratnem iskanju v več repozitorijih obravnavajo kot ena lastnost.",
		unified_search_filter_available_properties: "Filtriraj razpoložljive lastnosti",
		unified_search_available_properties: "Razpoložljive lastnosti",
		unified_search_mapped_properties: "Preslikane lastnosti",
		unified_search_single_values: "enojne vrednosti",
		unified_search_multiple_values: "več vrednosti",
		unified_search_add_mapping: "Dodaj preslikavo",
		unified_search_warn_remove_repository: "Izbrani repozitorij je uporabljen v kriterijih iskanja.\nČe ga odstranite, bodo izbrisane vse preslikave in kriteriji iskanja, ki vključujejo repozitorij.\n\nAli želite odstraniti repozitorij?",
		unified_search_warn_update_repository_mappings: "Spreminjanje izbire lastnosti za ta repozitorij vpliva na kriterije iskanja.\n\nKriterij iskanja vključuje eno ali več preslikav, ki vključuje eno ali več lastnosti, ki jih boste odstranili. Vse preslikave, ki vključujejo lastnosti, ki jih odstranjujete, morate izbrisati. Kateri koli kriterij iskanja, ki vključuje te preslikave, mora biti izbrisan, da lahko zaženete iskanje.\n\nAli želite posodobiti možnosti repozitorija in izbrisati preslikave in kriterije iskanja?",
		unified_search_warn_update_repository_mappings_reset: "Vključevanje kriterijev za iskanje po besedilu za ta repozitorij vpliva na kriterije iskanja med repozitoriji.\n\nKriteriji za iskanje lastnosti, ki vključujejo preslikavo z lastnostmi za ta repozitorij, morajo biti izbrisani, da se iskanje lahko izvede.\n\nAli želite posodobiti možnosti repozitorija in izbrisati kriterije za iskanje?",
		unified_search_warn_update_repository_text_criteria: "Odstranjevanje kriterijev za iskanje po besedilu za ta repozitorij vpliva na kriterije iskanja med repozitoriji.\n\nKriteriji za iskanje besedil morajo biti izbrisani iz kriterijev iskanja med repozitoriji, da se iskanje lahko izvede.\n\nAli želite posodobiti možnost repozitorija in izbrisati kriterije za iskanje po besedilu?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Odstranjevanje kriterijev za iskanje po besedilu in spreminjanje izbire lastnosti za ta repozitorij vpliva na kriterije iskanja med repozitoriji.\n\nKriteriji za iskanje besedil morajo biti izbrisani iz kriterijev za iskanje med repozitoriji, da je mogoče izvesti iskanje. Kriterij iskanja po lastnostih vključuje eno ali več preslikav, ki vključujeta eno ali več lastnosti, ki jih odstranjujete. Vse preslikave, ki vključujejo lastnosti, ki jih odstranjujete, morate izbrisati. Vsi kriteriji za iskanje lastnosti, ki vključujejo te preslikave, morajo biti izbrisani, da se lahko izvede iskanje.\n\nAli želite posodobiti možnosti repozitorija in izbrisati kriterije za iskanje po besedilu, preslikave in kriterije za iskanje lastnosti?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Izključevanje kriterijev za iskanje po besedilu za ta repozitorij vpliva na kriterije iskanja med repozitoriji.\n\nKriteriji za iskanje lastnosti, ki vključujejo preslikavo z lastnostmi za ta repozitorij, morajo biti izbrisani, da se iskanje lahko izvede. Kriterije za iskanje po besedilu je treba izbrisati iz kriterijev za iskanje med repozitoriji, da se iskanje lahko izvede.\n\nAli želite posodobiti možnosti repozitorija in izbrisati kriterije za iskanje?",
		unified_search_warn_remove_mapping: "Odstranitev te preslikave vpliva na kriterije iskanja.\n\nKriterij iskanja, ki uporablja preslikavo, mora biti izbrisani, da je mogoče izvesti iskanje.\n\nAli želite posodobiti preslikavo in izbrisati kriterije iskanja?",
		unified_search_warn_update_mapping: "Spremembe te preslikave vplivajo na kriterije iskanja.\n\nKriterij iskanja, ki uporablja preslikavo, je treba počistiti, da zagotovite, da iskanje ne bo vključevalo neveljavnih operatorjev ali neveljavnih vrednosti.\n\nAli želite posodobiti preslikavo in počistiti kriterije iskanja?",
		unified_search_warn_update_mapping_not_searchable: "Spremembe te preslikave vplivajo na kriterije iskanja.\n\nKo so preslikane lastnosti vse samo za prikaz, v kriterijih iskanja ne morete uporabiti preslikave. Kriterije iskanja, ki uporabljajo preslikavo, morate izbrisati, če želite izvesti iskanje.\n\nAli želite posodobiti preslikavo in izbrisati kriterije iskanja?",
		unified_search_warn_update_mapping_box_searchable: "Spremembe te preslikave vplivajo na kriterije iskanja.\n\nKriterij iskanja to preslikavo že vključuje več kot enkrat in če lastnost ${0} dodate iz repozitorija ${1}, kriterij iskanja prevečkrat vsebuje lastnost ${0}. Kriterije iskanja, ki uporabljajo preslikavo, morate izbrisati, če želite izvesti iskanje.\n\nAli želite posodobiti preslikavo in izbrisati kriterije iskanja?",
		unified_search_details: "Podrobnosti hkratnega iskanja v več repozitorijih",
		unified_search_fixed_value_property: "Lastnost fiksne vrednosti",
		unified_search_required_property: "Zahtevana lastnost",
		unified_search_display_only_property: "Lastnost samo za prikaz",
		unified_search_missing_required_properities: "Iskanja ni mogoče shraniti ali zagnati.<br/>Naslednje lastnosti so obvezne:${0}Vključite lastnosti v preslikavo in dodajte lastnosti z vrednostmi v kriterije iskanja.",
		unified_search_property_repostory: "${0} (repozitorij: ${1})",
		unified_search_builder_no_mappings: "Iskanja ni mogoče izvesti.<br/>Da lahko iskanje prikaže vaše rezultate, morate ustvariti preslikavo lastnosti in jo vključiti v <b>Prikaz rezultatov</b>.",
		unified_search_builder_insufficient_criteria_to_run: "Iskanja ni mogoče izvesti.<br/>Kriteriji iskanja ne zajemajo kriterijev za iskanje po besedilu ali vrednosti lastnosti za naslednje repozitorije:${0}Za vsak repozitorij, ki je vključen v iskanje, morate vnesti kriterije za iskanje po besedilu ali ustvariti preslikavo lastnosti, jo vključiti v kriterije lastnosti in podati vrednost lastnosti.",
		unified_search_builder_insufficient_criteria_to_save: "Iskanja ni mogoče shraniti.<br/>Iskanje ne zajema kriterijev iskanja za naslednje repozitorije:${0}Za vsak repozitorij, ki je vključen v iskanje, morate izvesti eno od naslednjih možnosti:<ol><li>Ustvarite preslikavo lastnosti in jo vključite v kriterije lastnosti.</li><li>Spremenite repozitorij tako, da bo zajemal kriterije za iskanje po besedilu, nato pa ustvarite preslikavo lastnosti in jo vključite v <b>Prikaz rezultatov</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Iskanja ni mogoče izvesti.<br/>Za vsak repozitorij, ki je vključen v iskanje, morate podati vsaj eno vrednost lastnosti. Podate lahko na primer vrednosti za naslednje lastnosti: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Iskanja ni mogoče izvesti.<br/>Zahtevan je kriterij za iskanje besedil.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Iskanja ni mogoče izvesti.<br/>Za vsak repozitorij, ki je vključen v iskanje, morate podati vsaj eno vrednost lastnosti ali vnesti kriterij za iskanje po besedilu. Podate lahko na primer vrednosti za naslednje lastnosti: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Iskanja ni mogoče izvesti.<br/>Zahtevan je kriterij za iskanje besedil. Za vsak repozitorij, ki je vključen v iskanje, morate podati vsaj eno vrednost lastnosti ali vnesti kriterij za iskanje po besedilu. Podate lahko na primer vrednosti za naslednje lastnosti: ${0}",
		unified_search_invalid_criteria: "Iskanje vključuje neveljavne kriterije, ki preprečujejo izvajanje iskanja.<br/>Neveljavni kriteriji so bili odstranjeni. Vendar je treba pred zagonom iskanja shraniti njegove spremembe. Če ne želite shraniti sprememb, zaprite iskanje.<br/><br/>Naslednje postavke so bile odstranjene ali spremenjene:${0}",
		unified_search_invalid_fixed_values: "Iskanja ni mogoče shraniti ali zagnati.<br/>Naslednji kriteriji iskanja imajo fiksne vrednosti, ki niso veljavne: ${0}Izvedite eno od naslednjih dejanj, da odpravite težavo:<ul><li>Odstranite kriterije iskanja, ki vsebujejo neveljavne vrednosti.</li><li>Uredite preslikave, ki vsebujejo lastnost IBM Content Manager OnDemand s fiksnimi vrednostmi, da odstranite lastnost.</li><li>Uredite preslikave, ki vsebujejo lastnost IBM Content Manager OnDemand s fiksnimi vrednostmi, da se bodo vse lastnosti ujemale. Za več informacij o tem, katere lastnosti se lahko preslikajo, glejte povezavo Več informacij v uvodnem besedilu na vrhu okna za preslikavo lastnosti.</li></ul>",
		unified_search_cannot_add_properties: "V to iskanje ne morete dodati lastnosti.<br/>Vse preslikane lastnosti, ki so na voljo, so že v kriterijih iskanja in vsako lastnost je v iskanje mogoče dodati samo enkrat.",
		unified_search_mapping_not_viewable: "Lastnosti predloge Box ni mogoče prikazati v rezultatih iskanja. Če želite to preslikavo dodati kot stolpec, morate preslikati vsaj eno lastnost, ki ni lastnost predloge Box. Izberete lahko na primer lastnost iz drugega repozitorija.",

		unified_search_returned_more: "Vsaj en repozitorij je presegel maksimalno dovoljeno število rezultatov.",
		unified_search_partial_failure: "V vsaj enem repozitoriju je prišlo do napake.",
		unified_search_partial_failure_and_returned_more: "V vsaj enem repozitoriju je prišlo do napake in vsaj en repozitorij je presegel maksimalno dovoljeno število rezultatov.",
		unified_search_see_analysis: "Oglejte si analizo rezultatov.",
		unified_search_analysis_intro_returned_more: "Za vsak repozitorij, ki presega maksimalno dovoljeno število rezultatov, poskusite natančneje določiti rezultate iskanja, da bo vrnilo manj rezultatov. Lahko pa izvedete iskanje v enem repozitoriju, da vrne več rezultatov, kot je maksimalno dovoljeno za iskanje med repozitoriji.",
		unified_search_analysis_intro_partial_failure: "Preglejte informacije o napaki, ki jih je vrnil repozitorij ali repozitoriji. Če je to ustrezno, odpravite napake in znova zaženite iskanje v več repozitorijih.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Za vsak repozitorij, v katerem je prišlo do napake, poskusite razrešiti težavo in znova izvedite iskanje.<br/><br/>Za vsak repozitorij, ki presega maksimalno dovoljeno število rezultatov, poskusite natančneje določiti rezultate iskanja, da bo vrnilo manj rezultatov. Lahko pa izvedete iskanje v enem repozitoriju, da vrne več rezultatov, kot je maksimalno dovoljeno za iskanje med repozitoriji.",
		unified_search_results_found: "Najdeni rezultati",
		unified_search_maximum_allowed: "Največ dovoljenih",
		unified_search_maximum_exceeded: "Največja dovoljena vrednost je presežena",

		unified_search_mapping_rule_box: "Te lastnosti ni mogoče dodati v preslikavo.<p>Lastnost ${0} iz repozitorija ${1} je že v drugi preslikavi in lastnosti, po katerih je mogoče iskati iz tega repozitorija, je mogoče vključiti v samo eno preslikavo na iskanje.<br/>Izberite drugo lastnost, da jo dodate v preslikavo.</p>",
		unified_search_mapping_rule_repository: "Lastnosti ni mogoče dodati v preslikavo.<br/>Preslikava že vključuje lastnost iz repozitorija ${0}. Preslikava lahko vključuje le eno lastnost iz repozitorija.<br/>Izberite drug repozitorij, iz katerega želite dodati lastnost, ali ustvarite novo preslikavo za izbrano lastnost.",
		unified_search_mapping_rule_data_type: "Lastnosti ni mogoče dodati v preslikavo.<br/>Lastnosti ${0} ni mogoče preslikati v lastnost ${1}. Izberite drugo lastnost za preslikavo ali pa ustvarite novo preslikavo za izbrano lastnost.<br/>Za več informacij o tem, katere lastnosti se lahko preslikajo, glejte povezavo Več informacij v uvodnem besedilu na vrhu tega okna.",
		unified_search_mapping_rule_cardinality: "Lastnosti ni mogoče dodati v preslikavo.<br/>Vse lastnosti v preslikavi morajo podpirati enojne ali večkratne vrednosti. Izbrana lastnost podpira ${0} in lastnosti v preslikavi podpirajo ${1}.<br/>Izberite drugo lastnost, ki jo želite dodati v preslikavo, ali ustvarite novo preslikavo za izbrano lastnost.",
		unified_search_mapping_rule_fixed_value: "Lastnosti ni mogoče dodati v preslikavo.<br/>Preslikava že vključuje lastnost s fiksno vrednostjo. Preslikava lahko vključuje le eno lastnost s fiksno vrednostjo.<br/>Izberite drugo lastnost, ki jo želite dodati v preslikavo, ali ustvarite novo preslikavo za izbrano lastnost.",
		unified_search_mapping_rule_child_component: "Lastnosti ni mogoče dodati v preslikavo.<br/>Lastnosti s podrejeno komponento ni mogoče preslikati v druge lastnosti. Če želite iskati po tej lastnosti, ustvarite novo preslikavo za izbrano lastnost.",
		unified_search_mapping_rule_operator_intersection: "Lastnosti ni mogoče dodati v preslikavo.<br/>Vse lastnosti v preslikavi morajo imeti enega ali več skupnih operatorjev, vendar lastnost ${0} nima nobenih skupnih operatorjev z drugimi lastnostmi v preslikavi.<br/>Če je primerno, izberite drugo lastnost. Če morate vključiti izbrano lastnost, se obrnite na skrbnika sistema, ki bo uredil operatorje, povezane z lastnostjo.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Napredne nastavitve",
		advanced_search_options_intro: "Nastavite napredne možnosti kriterija.",
		advanced_search_options_editable: "Je mogoče urejati",
		advanced_search_options_readonly: "Samo za branje",
		advanced_search_options_required: "Zahtevano",
		advanced_search_options_hidden: "Skrito",
		advanced_search_options_property_editable:"Lastnost je:",
		advanced_search_options_operators:"Operatorji:",
		advanced_search_options_use_all:"Uporabi vse",
		advanced_search_options_use_selected:"Uporabi izbrane",
		advanced_search_options_operators_filtered: "Operatorji filtrirani",
		// Data types in lowercase
		data_type_boolean: "logična vrednost",
		data_type_date: "datum",
		data_type_time: "čas",
		data_type_timestamp: "časovna oznaka",
		data_type_decimal: "decimalna vrednost",
		data_type_double: "številka, podana v zapisu s plavajočo vejico",
		data_type_short: "celo število",
		data_type_integer: "celo število",
		data_type_long: "celo število",
		data_type_string: "besedilni niz",
		data_type_string_alpha: "abecedni niz",
		data_type_string_alphanum: "črkovno-številski niz",
		data_type_string_ext: "razširjen črkovno-številčni niz",
		data_type_string_num: "številski niz",
		data_type_binary: "dvojiško",
		data_type_object: "predmet",
		data_type_guid: "globalni unikatni identifikator",
		data_type_user: "uporabniki",
		data_type_child_component: "podrejena komponenta",

		/* Print Dialog */
		print_title: "Natisni",
		print_message: "Tiskanje: ${0}",
		print_print_button: "Natisni",
		print_clean_margins_button: "Nastavi vse na 0",
		print_type: "Vrsta tiskalnika:",
		print_printer_server_options: "Možnosti za tiskanje v strežniku",
		print_printer_properties: "Lastnosti tiskalnika",
		print_printer_fax_properties: "Lastnosti faksa",
		print_printer_name: "Ime tiskalnika:",
		print_fax_recipient: "Prejemnik",
		print_fax_sender: "Pošiljatelj",
		print_copies: "Kopije:",
		print_local_orientation: "Usmerjenost",
		print_local_orientation_landscape: "Ležeče",
		print_local_orientation_portrait: "Pokončno",
		print_local_margins: "Robovi",
		print_local_margins_top: "Na vrh",
		print_local_margins_bottom: "Spodaj",
		print_local_margins_left: "Levo",
		print_local_margins_right: "Desno",
		print_printer_server: "Strežnik",
		print_printer_local: "Lokalen",
		print_property_class: "Razred:",
		print_property_routing: "Usmerjanje:",
		print_property_pagedef: "Definicija strani:",
		print_property_node: "Vozlišče:",
		print_property_writer: "Pisec:",
		print_property_formdef: "Definicija obrazca:",
		print_property_printerid: "Cilj:",
		print_property_forms: "Obrazci:",
		print_property_faxnotes: "Opombe:",
		print_property_faxcompany: "Podjetje:",
		print_property_faxnumber: "Številka faksa:",
		print_property_faxname: "Ime:",
		print_property_faxsendertelnumber: "Telefonska številka:",
		print_property_faxcoverpage: "Naslovna stran:",
		print_property_faxsubject: "Zadeva:",
		print_saveoptions: "Shrani možnosti tiskanja",
		print_property_bannerpage: "Uporabi stran pasice",
		print_print_with_info_fields: "Natisni s polji informacij",
		print_field_from: "Od",
		print_field_to: "Do",
		print_invalid_value_class: "Veljavni znaki so A-Z ali 0-9",
		print_invalid_value_pagedef: "Veljavni znaki so abecedni ali številski znaki oziroma znaki @, # ali $",
		print_invalid_value_writer: "Veljavni znaki so abecedni ali številski znaki oziroma znaki @, # ali $",
		print_invalid_value_formdef: "Veljavni znaki so abecedni ali številski znaki oziroma znaki @, # ali $",
		print_invalid_value_forms: "Veljavni znaki so abecedni ali številski znaki oziroma znaki @, # ali $",
		print_invalid_value_margin: "Veljavna števila so med ${0} in ${1}",
		print_status_message: "${0} dokumentov je bilo poslanih v tiskalnik ${1}.",

		print_applet_init_error: "Programčka za tiskanje ni mogoče zagnati.",
		print_applet_init_error_explanation: "Ta težava se lahko pojavi zaradi naslednjih razlogov: <br/><br/><ul><li>Izvajalno okolje Java (JRE) ni nameščeno v delovni postaji.</li><li>Vtičnik Java ni omogočen v vašem spletnem brskalniku.</li><li>Različica JRE v vaši delovni postaji ni združljiva z različico IBM Content Navigator.</li><li>Brskalnik se je iztekel med čakanjem, da se bo programček za tiskanje zagnal.</li></ul>",
		print_applet_init_error_userResponse: "Naslednje korake lahko dokončate, da razrešite težavo z JRE:<br/><br/><ol><li>Zagotovite, da je JRE nameščen v vaši delovni postaji.</li><li>Zagotovite, da je vtičnik Java omogočen v vašem spletnem brskalniku.</li><li>Zagotovite, da je različica JRE v vaši delovni postaji združljiva s programom IBM Content Navigator in poskusite znova. Seznam podprtih različic je vključen v dokumentu <i>Predpogoji za strojno in programsko opremo za IBM Content Navigator</i> na IBM-ovem spletnem mestu podpore za programsko opremo.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Naslovna stran",
		daeja_print_selected_documents_title: "Izbrani dokumenti",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Ujemanje z vsemi kriteriji iskanja",
		match_any_criteria: "Ujemanje s katerimkoli kriterijem iskanja",
		include_subfolders_summary: "${0} (vključi podmape)",
		browse_button: "Prebrskaj&hellip;",
		search_for: "Poišči:",
		object_type_documents: "Dokumenti",
		object_type_folders: "Mape",
		object_type_documents_folders: "Dokumenti in mape",
		object_type_web_links: "Spletne povezave",
		object_type_documents_folders_web_links: "Dokumenti, mape in spletne povezave",

		/* SelectSearchFolderDialog */
		search_in: "Išči v:",
		include_subfolders: "Vključi podmape",

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
		locked_item_icon_title: "Zaklenil ${0}",
		checked_out_icon_title: "Odjavil ${0}",
		major_minor_version_icon_title: "Glavna različica s podrazličicami",
		suspended_icon_title: "Delovni tok je začasno ustavljen",
		on_hold_icon_title: "Zadržano",
		has_notes_icon_title: "Ima opombe",
		record_icon_title: "Označen kot zapis",
		compound_document_icon_title: "Sestavljen dokument",
		validateTemplate_icon_title: "Predloga timskega prostora zahteva preverjanje veljavnosti",
		offlineTemplate_icon_title: "Predloga timskega prostora je brez povezave",
		offlineTeamspace_icon_title: "Timski prostor je brez povezave",
		pending_delete_icon_title: "Timski prostor čaka na brisanje",
		delete_error_icon_title: "Timskega prostora ni bilo mogoče izbrisati",
		defaultTemplate_icon_title: "Privzeta predloga timskega prostora",
		teamspace_icon_title: "Timski prostor",
		teamspace_template_icon_title: "Predloga timskega prostora",
		has_bookmark_icon_title: "Ima zaznamek",
		read_only_icon_title: "Samo za branje",
		no_results_were_found: "Najdenih ni bilo nobenih rezultatov.",
		folder_is_empty: "Mapa je prazna.",
		no_checked_out_items: "Nimate nobene odjavljene postavke.",
		inbasket_is_empty: "Vhodni nabiralnik je prazen.",
		worklist_is_empty: "Delovni seznam je prazen.",
		tracker_milestone_completed: "Dokončano",
		stepprocessor_attachments_title: "Vsebina",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Zakleni postavke",
		unlock_items: "Odkleni postavke",
		checkin_item: "Prijavi postavko",

		/* Help */
		learn_more: "Več informacij",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Odpri timski prostor",
		repository_tab_createWorkspace: "Nov timski prostor",
		repository_tab_createWorkspaceTemplate: "Nova predloga timskega prostora",
		repository_tab_DefaultTemplate: "Privzeto",

		/* Cross repository document copy */
		documentCopyTaskDescription: "To opravilo kopira dokumente.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Za izbrano predlogo timskega prostora nimate pooblastil za urejanje.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Ali ste prepričani, da želite odstraniti timski prostor ${0}?<br><br>V repozitoriju ostanejo samo dokumenti, vloženi v drugih mapah v repozitoriju. Dokumenti, vloženi samo v timskem prostoru, bodo izbrisani.",
		teamspaceDecommissionLabel: "Brisanje:",
		teamspaceDecommissionDescription: "Brisanje timskega prostora odstrani ta timski prostor iz strežnika: navedite, kako naj se obravnavajo artefakti timskega prostora.",
		teamspaceDecommissionOptions: "Izbriši možnosti timskega prostora",
		teamspaceDecommissionDeleteAll: "Izbriši vse artefakte timskega prostora",
		teamspaceDecommissionReFileAll: "Ponovno shrani vse artefakte timskega prostora v datoteke",
		teamspaceDecommissionReFileDestination: "Premakni v:",
		teamspaceDecommissionReFileIn: "Shrani v datoteke v",
		teamspaceDecommissionTaskName: "Opravilo brisanja timskega prostora",
		teamspaceDecommissionTaskDescription: "To opravilo izbriše timski prostor iz repozitorija.",
		teamspaceDecommissionDeletionStarted: "Timski prostor je razporejen za brisanje",
		teamspaceDecommissionDeletionConnectionFailed: "Opravila brisanja timskega prostora ni bilo mogoče izvesti, ker povezava z repozitorijem ni uspela. Prepričajte se, da so poverilnice skrbnika repozitorija pravilne.",

		teamspace_edit_properties_notsupported: "Lastnosti timskih prostorov lahko urejate samo iz pogleda Timski prostori.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Timski prostor je brez povezave in ga lahko odprejo samo njegovi lastniki",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Mapa:",
		workspace_validation_ets: "Naslednje predloge vnosa niso na voljo v tem repozitoriju in so bile odstranjene s seznama izbranih predlog vnosa:",
		workspace_validation_classes: "Naslednji razredi niso na voljo v tem repozitoriju in so bili odstranjeni s seznama izbranih razredov:",
		workspace_validation_searches: "Naslednja iskanja niso na voljo v tem repozitoriju in so bila odstranjena s seznama izbranih iskanj:",
		workspace_validation_docs_folders: "Naslednji dokumenti in mape niso na voljo v tem repozitoriju in so bili odstranjeni s seznama vključenih postavk:",
		workspace_change_template_confirmation_question: "Če izberete drugo predlogo, bodo vse vaše spremembe izgubljene. Ali želite nadaljevati?\n",
		workspace_delete_item_confirmation_question: "Ali želite odstraniti postavko ${0}?\n",
		workspace_delete_role_confirmation_question: "Ali želite odstraniti vlogo ${0}?\n",
		workspace_delete_confirmation_question: "Če izbrišete timski prostor, se izbriše le vsebnik timskega prostora. Mape in dokumenti v timskem prostoru ostanejo v repozitoriju ter jih lahko poiščete, tako da zaženete iskanje. Če želite izbrisati vsebino timskega prostora, najprej izbrišite postavke v timskem prostoru in nato še timski prostor.<br><br>Ali želite izbrisati timski prostor ${0}?",
		workspacebuilder_instance_template_name_header: "Ime predloge timskega prostora",
		workspacebuilder_instance_template_description_header: "Opis",

		workspacebuilder_template_tooltip_name: "Ime predloge ne sme vsebovati naslednjih znakov: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Ime timskega prostora ne sme vsebovati naslednjih znakov: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Podajte opis, ki bo uporabnikom omogočal ustrezno izbiro s seznama predlog. Na primer, vključite lahko informacije o namenjenih uporabnikih ali o uporabi predloge.",
		workspacebuilder_instance_tooltip_description: "Podajte opis, ki bo uporabnikom omogočal razlikovanje med tem timskim prostorom in drugimi timskimi prostori.",

		workspacebuilder_template_edit_properties_pane: "Uredi predlogo timskega prostora",
		workspacebuilder_instance_properties_pane: "Definiraj timski prostor",
		workspacebuilder_template_properties_pane: "Definiraj predlogo timskega prostora",

		workspacebuilder_instance_security_pane: "Nastavi zaščito timskega prostora",
		workspacebuilder_template_security_pane: "Nastavi zaščito predloge",

		workspacebuilder_layout_pane: "Izberi postavitev",
		workspacebuilder_search_templates_pane: "Izberi iskanja",
		workspacebuilder_document_folders_pane: "Vključi mape in dokumente",
		workspacebuilder_doctypes_entryTemplates_pane: "Izberi razrede ali predloge vnosa",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Izberi razrede",
		workspacebuilder_security: "Zaščita timskega prostora",

		workspacebuilder_roles_pane: "Izberi vloge",
		workspacebuilder_security: "Zaščita",

		workspacebuilder_properties_templates: "Razpoložljive predloge:",
		workspacebuilder_available_templates: "Razpoložljiva iskanja:",
		workspacebuilder_selected_templates: "Izbrana iskanja:",
		workspacebuilder_templates_name: "Ime iskanja",

		workspacebuilder_available_entryTemplates: "Razpoložljive predloge vnosa",
		workspacebuilder_selected_entryTemplates: "Izbrane predloge vnosa:",

		workspacebuilder_item_classes: "Razpoložljivi razredi:",
		workspacebuilder_item_classes_selected: "Izbrani razredi:",
		workspacebuilder_properties_select_template: "Izberite predlogo, ki jo želite uporabiti za ta timski prostor.",
		workspacebuilder_template_properties: "Definiraj predlogo timskega prostora",
		workspacebuilder_instance_properties: "Definiraj timski prostor",
		workspacebuilder_template_introText: "Podajte skupne komponente, ki jih želite vključiti v vsak timski prostor, ustvarjen iz te predloge s pomočjo izbir v krmarjenju. Ko zaključite, kliknite <b>Dokončaj</b>, da bo predloga na voljo drugim uporabnikom, ki jo lahko uporabijo za ustvarjanje novih timskih prostorov.",
		workspacebuilder_instance_introText: "Ekipe uporabljajo timske prostore za skupno rabo in delo z določenimi nabori dokumentov. Podajte smiselno ime in opis za ta timski prostor, da ga bodo lahko uporabniki ločili od drugih timskih prostorov. Timski prostor lahko prilagodite tako, da vključite dodatna iskanja, razrede ali predloge vnosa, dokumente in mape.",

		workspacebuilder_template_search_template_introText: "Izberite privzeta iskanja, ki jih želite vključiti v vsak timski prostor, ustvarjen iz te predloge. Če ni izbrano nobeno iskanje, uporabnik timskega prostora vidi vsa iskanja, do katerih ima dostop. Uporabniki lahko z ustreznimi dovoljenji souporabljajo in dodajajo iskanja v timski prostor.",
		workspacebuilder_instance_search_template_introText: "Vključite iskanja, ki bodo uporabnikom timskega prostora omogočala bolj učinkovito dokončanje opravil. Če ni vključeno nobeno iskanje, uporabnik timskega prostora vidi vsa iskanja, za katera ima dovoljenja. Uporabniki lahko z ustreznimi dovoljenji dodajajo in souporabljajo iskanja v timskem prostoru.",

		workspacebuilder_template_roles_introText: "Uporabniki timskega prostora so dodeljeni vlogam. Vloge določajo opravila, ki jih lahko uporabniki izvajajo. Kliknite ikone poleg posamezne vloge, da si ogledate dovoljena opravila. Izberite vloge, ki ustrezajo timskemu prostoru.",
		workspacebuilder_template_roles_modify_introText: "Spremenite lahko dovoljenja, povezana s posamezno vlogo v timskem prostoru. O spremembi dovoljenj obvestite člane timskega prostora.",

		workspacebuilder_template_roles_header_name: "Ime vloge",

		workspacebuilder_template_folders_introText: "Izberite privzete dokumente, ki jih želite vključiti v vsak timski prostor, ustvarjen iz te predloge. Dokumente lahko dodajate kot povezave ali kopije. S povezavami pokažite na dokumente, za katere ne želite več kopij, kot so pravilniki ali postopki. Ustvarite kopije dokumentov, ki jih bodo uporabniki spreminjali, kot so predloge in obrazci.",
		workspacebuilder_instance_folders_introText: "Izberite privzete dokumente in mape, ki jih želite vključiti v timski prostor. Dokumente lahko dodajate kot povezave ali kopije. S povezavami pokažite na dokumente, za katere ne želite več kopij, kot so pravilniki ali postopki. Ustvarite kopije dokumentov, ki jih bodo uporabniki spreminjali, kot so predloge in obrazci.",

		workspacebuilder_template_roles_introText: "Podajte vloge, ki bodo vključene v vsak timski prostor, ustvarjen iz te predloge. Ustvarite lahko tudi nove vloge, ki jih lahko uporabite, ko ustvarjate nove predloge timskega prostora.",
		workspacebuilder_instance_users_introText: "V timskem prostoru je vsak uporabnik dodeljen eni ali več vlogam, ki določajo opravila, ki jih uporabnik lahko dokonča. Dodajte uporabnike v timski prostor in jim dodelite vloge.",

		workspacebuilder_instance_navigation_pane_title: "Graditelj timskega prostora",
		workspacebuilder_template_navigation_pane_title: "Graditelj predloge timskega prostora",

		workspacebuilder_roles_roles_nopermissions: "Za vlogo {0} ni izbrano nobeno dovoljenje.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Izbrane vloge:",
		workspacebuilder_roles_available_roles: "Razpoložljive vloge:",
		workspacebuilder_roles_privilege_header: "Dovoljenje",
		workspacebuilder_roles_select_role: "Izberi vlogo",
		workspacebuilder_roles_select_permission: "Izberi dovoljenje",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Vloga z imenom {0} že obstaja. Za to vlogo morate navesti edinstveno ime. ",
		workspacebuilder_roles_edit_dialog_role_name: "Ime vloge:",
		workspacebuilder_roles_edit_dialog_role_description: "Opis vloge",
		workspacebuilder_roles_edit_dialog_title_new: "Nova vloga",
		workspacebuilder_roles_edit_dialog_title_edit: "Urejanje vloge",

		workspacebuilder_roles_privileges_header: "Dovoljenja za vlogo {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dovoljenja za dokumente:",
		workspacebuilder_roles_priv_group_folder: "Dovoljenja za mape:",
		workspacebuilder_roles_priv_group_teamspace: "Dovoljenja za timske prostore:",
		workspacebuilder_roles_priv_group_item: "Dovoljenja za dokumente in mape:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Upravljanje dovoljenj",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Uporabniki s tem dovoljenjem lahko upravljajo dostop do dokumentov in map v timskem prostoru. To dovoljenje omogoča drugim uporabnikom brisanje, urejanje lastnosti, ustvarjanje podmap itd.",

		workspacebuilder_roles_priv_deleteItems: "Izbriši",
		workspacebuilder_roles_plbl_deleteItems: "Uporabniki s tem dovoljenjem lahko brišejo dokumente in mape v timskem prostoru.",

		workspacebuilder_roles_priv_createItems: "Ustvari",
		workspacebuilder_roles_plbl_createItems: "Uporabniki lahko s temi dovoljenji ustvarjajo dokumente in mape v timskem prostoru.",

		workspacebuilder_roles_priv_viewItemProperties: "Ogled lastnosti",
		workspacebuilder_roles_plbl_viewItemProperties: "Uporabniki s tem dovoljenjem si lahko ogledajo lastnosti dokumentov in map v timskem prostoru, kar vključuje sistemske lastnosti.",

		workspacebuilder_roles_priv_modifyItemProperties: "Uredi lastnosti",
		workspacebuilder_roles_plbl_modifyItemProperties: "Uporabniki s tem dovoljenjem lahko urejajo lastnosti dokumentov in map v timskem prostoru.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Upravljanje dovoljenj za mape",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Uporabniki s tem dovoljenjem lahko upravljajo dostop do map v timskem prostoru. To dovoljenje omogoča drugim uporabnikom brisanje map, urejanje lastnosti mape, ustvarjanje podmap itd.",

		workspacebuilder_roles_priv_deleteFolders: "Brisanje mape",
		workspacebuilder_roles_plbl_deleteFolders: "Uporabniki s tem dovoljenjem lahko brišejo mape v timskem prostoru.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Urejanje lastnosti map",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Uporabniki s tem dovoljenjem lahko urejajo lastnosti map v timskem prostoru.",

		workspacebuilder_roles_priv_createSubfolders: "Ustvarjanje podmap",
		workspacebuilder_roles_plbl_createSubfolders: "Uporabniki s tem dovoljenjem lahko ustvarjajo podmape v timskem prostoru.",

		workspacebuilder_roles_priv_fileInFolders: "Dodajanje v mape",
		workspacebuilder_roles_plbl_fileInFolders: "Uporabniki s tem dovoljenjem lahko dokumentom dodajo povezavo iz mape v timskem prostoru.",

		workspacebuilder_roles_priv_viewFolderProperties: "Ogled lastnosti map",
		workspacebuilder_roles_plbl_viewFolderProperties: "Uporabniki s tem dovoljenjem si lahko ogledajo lastnosti map v timskem prostoru, kar vključuje sistemske lastnosti.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Upravljanje dovoljenj za dokumente",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Uporabniki s tem dovoljenjem lahko upravljajo dostop do dokumentov v timskem prostoru. To dovoljenje drugim uporabnikom dovoljuje brisanje dokumentov, urejanje lastnosti dokumenta itd.",

		workspacebuilder_roles_priv_deleteDocuments: "Brisanje dokumentov",
		workspacebuilder_roles_plbl_deleteDocuments: "Uporabniki s tem dovoljenjem lahko brišejo dokumente v timskem prostoru.",

		workspacebuilder_roles_priv_promoteVersions: "Povišanje različic",
		workspacebuilder_roles_plbl_promoteVersions: "Uporabniki s tem dovoljenjem lahko dokumentom v timskem prostoru dodelijo novo številko različice.",

		workspacebuilder_roles_priv_modifyContent: "Urejanje dokumentov",
		workspacebuilder_roles_plbl_modifyContent: "Uporabniki s tem dovoljenjem lahko urejajo vsebino dokumentov v timskem prostoru.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Urejanje lastnosti dokumentov",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Uporabniki s tem dovoljenjem lahko urejajo lastnosti dokumentov v timskem prostoru.",

		workspacebuilder_roles_priv_viewContent: "Ogled dokumentov",
		workspacebuilder_roles_plbl_viewContent: "Uporabniki s tem dovoljenjem si lahko ogledajo dokumente v timskem prostoru.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Ogled lastnosti dokumentov",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Uporabniki s tem dovoljenjem si lahko ogledajo lastnosti dokumentov v timskem prostoru, vključno s sistemskimi lastnostmi.",

		workspacebuilder_roles_priv_addNewSearches: "Dodajanje iskanj",
		workspacebuilder_roles_plbl_addNewSearches: "Uporabniki s tem dovoljenjem lahko dodajajo iskanja v timski prostor. Iskanje privzeto ni na voljo drugim uporabnikom.",

		workspacebuilder_roles_priv_createNewSearches: "Ustvarjanje iskanj",
		workspacebuilder_roles_plbl_createNewSearches: "Uporabniki s tem dovoljenjem lahko ustvarjajo nova iskanja, vendar jih ne morejo shraniti. Če uporabniki nimajo tega dovoljenja, v timski prostor ne morejo dodati dokumentov, ki so že v repozitoriju.",

		workspacebuilder_roles_priv_shareSearches: "Skupna raba iskanj",
		workspacebuilder_roles_plbl_shareSearches: "Uporabniki s tem dovoljenjem lahko souporabljajo iskanja, ki jih ustvarijo z drugimi uporabniki timskega prostora.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Upravljanje razredov ali predlog vnosa",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Uporabniki s tem dovoljenjem lahko dodajajo in odstranjujejo razrede ali predloge vnosa iz timskega prostora.",

		workspacebuilder_roles_priv_addRemoveClasses: "Upravljanje razredov",
		workspacebuilder_roles_plbl_addRemoveClasses: "Uporabniki lahko s tem dovoljenjem dodajo in odstranijo razrede iz timskega prostora.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Upravljanje uporabnikov timskega prostora",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Uporabniki s tem dovoljenjem lahko dodajajo in odstranjujejo uporabnike ter skupine iz timskega prostora. Poleg tega lahko tudi upravljajo, katerim vlogam so dodeljeni uporabniki.",

		workspacebuilder_roles_priv_modifyRoles: "Spreminjanje vlog",
		workspacebuilder_roles_plbl_modifyRoles: "Lastniki s tem dovoljenjem lahko spreminjajo dovoljenja za vloge za timski prostor. To dovoljenje je na voljo le za lastnike.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Izbira uporabnikov",
		workspacebuilder_users_add_users_and_groups_button: "Dodaj uporabnike in skupine ...",
		workspacebuilder_users_users_or_group_header: "Uporabnik in skupina",
		workspacebuilder_users_roles_header: "Vloge",

		workspacebuilder_users_role_header: "Vloga",
		workspacebuilder_users_role_no_permissions: "Ta vloga nima dovoljenj",
		workspacebuilder_users_available_roles_label: "Razpoložljive vloge:",
		workspacebuilder_users_selected_users_and_groups_label: "Izbrani uporabniki in skupine:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Timskega prostora ni mogoče shraniti. Podati morate vsaj enega lastnika za ta timski prostor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Timskega prostora ni mogoče shraniti. Vsem uporabnikom mora biti dodeljena vloga.",
		// end of select users

		workspacebuilder_search_templates: "Izberi iskanja",
		workspacebuilder_search_add: "Dodaj iskanje",
		workspacebuilder_properties_workspaceName: "Ime timskega prostora:",
		workspacebuilder_properties_templateName: "Ime predloge:",
		workspacebuilder_properties_workspaceDescription: "Opis timskega prostora:",
		workspacebuilder_properties_templateDescription: "Opis predloge:",
		workspacebuilder_properties_workspaceTemplate: "Izbrana predloga:",
		workspacebuilder_properties_security: "Skupna raba predloge z:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Premakni iz timskega prostora:",
		moveTeamspaceDocuments_security: "Omogoči skupno rabo dokumenta z:",
		moveTeamspaceDocuments_security_change: "Podajte zaščito po meri za izbrane postavke",
		moveTeamspaceDocuments_item_type_level: "Izbira preglasitve zaščite izbranih postavk ni mogoča, ker je razred izbrane postavke konfiguriran samo za uporabo zaščite na ravni razreda",
		moveTeamspaceDocuments_security_inherit: "Podeduj zaščito iz ciljne mape",
		moveTeamspaceDocuments_file_info_text: "Postavke lahko premikate iz enega timskega prostora v drug timski prostor ali mapo.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Nimate ustreznih dovoljenj za premikanje postavk v izbrano mapo.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Nimate ustreznih dovoljenj za premikanje postavk iz timskega prostora.",
		moveTeamspaceDocuments_move_mixed_items: "Zaščite izbranih postavk ni mogoče preglasiti. Nekaterih postavk ne upravlja timski prostor. Preglasite lahko samo zaščito postavk, ki jih upravlja timski prostor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Podati morate ime za timski prostor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Podati morate ime za predlogo timskega prostora.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Ime timskega prostora ne sme vsebovati naslednjih znakov: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Ime predloge ne sme vsebovati naslednjih znakov: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Povezava do dokumenta",
		workspacebuilder_folders_makeDocCopy: "Kopiraj dokument",
		workspacebuilder_folders_newfolder: "Nova mapa",
		workspacebuilder_folders_local_drive: "Iz lokalnega imenika",
		workspacebuilder_folders_from_repo: "Iz repozitorija",
		workspacebuilder_folders_add_doc: "Dodaj dokument",
		workspacebuilder_folders_grid_name: "Ime",
		workspacebuilder_folders_props: "Lastnosti",
		workspacebuilder_folders_remove: "Odstrani",
		workspacebuilder_folders_delete: "Izbriši",
		workspacebuilder_folders_adddoc_local: "Dodaj dokument iz lokalnega pogona",
		workspacebuilder_folders_adddoc_repo: "Dodaj dokument iz repozitorija",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Podano ime mape že obstaja. Navedite drugo ime mape.",

		workspacebuilder_classes_title: "Izberi razrede ali predloge vnosa",
		workspacebuilder_classes_title_cm: "Izberi razrede",
		workspacebuilder_classes_template_introText: "Podajte, ali bodo timski prostori, ustvarjeni iz te predloge, za dodajanje dokumentov v repozitorij uporabljali razrede ali predloge vnosa. Če ni izbran noben razred, bodo za timske prostore vidni vsi razredi, do katerih imajo dostop.  Uporabnik lahko spremeni seznam razredov ali vnosnih predlog v timskem prostoru, če ima ustrezno dovoljenje.",
		workspacebuilder_classes_template_introText_cm: "Izberite razrede, ki jih lahko uporabniki uporabljajo za dodajanje dokumentov v repozitorij. Če ni izbran noben razred, bodo uporabniki timskih prostorov videli vse razrede, do katerih imajo dostop. Uporabniki lahko spremenijo seznam razredov, v timskem prostoru, če imajo ustrezna dovoljenja.",
		workspacebuilder_classes_instance_introText: "Izberite razrede ali predloge vnosa, ki jih lahko uporabniki uporabljajo za dodajanje dokumentov v repozitorij. Če ni izbran noben razred, bodo uporabniki timskih prostorov videli vse razrede, za katere imajo dovoljenja. Uporabniki lahko spremenijo seznam razredov ali vnosnih predlog v timskem prostoru, če imajo ustrezna dovoljenja.",
		workspacebuilder_classes_instance_introText_cm: "Izberite razrede, ki jih lahko uporabniki uporabljajo za dodajanje dokumentov v repozitorij. Če ni izbran noben razred, bodo uporabniki timskih prostorov videli vse razrede, za katere imajo dovoljenja. Uporabniki lahko spremenijo seznam razredov, v timskem prostoru, če imajo ustrezna dovoljenja.",
		workspacebuilder_classes_selection: "Izberi razrede:",
		workspacebuilder_classes_list: "Razpoložljivi razredi:",
		workspacebuilder_classes_columns_default: "Privzeto",
		workspacebuilder_classes_columns_className: "Ime razreda",
		workspacebuilder_classes_type_classes: "Uporabi razrede za dodajanje dokumentov",
		workspacebuilder_classes_type_classes_tooltip: "Razredi vključujejo povezane lastnosti, da je dokumente mogoče najti za poznejšo uporabo.",
		workspacebuilder_classes_type_entryTemplates: "Uporabi predloge vnosa za dodajanje dokumentov",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Predloge vnosa zagotavljajo, da so informacije, podane za vsak dokument, konsistentne in uporabljajo predhodno definirane vrednosti.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Ime predloge vnosa",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Opis",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "V timski prostor morate dodati vsaj eno predlogo vnosa.",

		workspacebuilder_classes_new: "Nov razred",
		workspacebuilder_classes_add: "Dodaj razred",
		workspacebuilder_entryTemplate_add: "Dodaj predlogo vnosa",
		workspacebuilder_add_list: "Dodaj",
		workspacebuilder_makeDefault_list: "Nastavi za privzeto",
		workspacebuilder_removeDefault_list: "Odstrani privzeto",

		workspacebuilder_roles_title: "Izberi vloge",
		workspacebuilder_roles_title_modify: "Spremeni vloge",

		workspacebuilder_selection_moveup: "Premakni navzgor",
		workspacebuilder_selection_movedown: "Premakni navzdol",
		workspacebuilder_selection_remove: "Odstrani",
		workspacebuilder_selection_add: "Dodaj",
		workspacebuilder_selection_create_new_search: "Novo iskanje ...",
		workspacebuilder_selection_create_new_role: "Nova vloga ...",
		workspacebuilder_selection_make_role_available: "Daj na voljo",
		workspacebuilder_selection_make_role_available_tooltip: "Skupna raba izbrane vloge z drugimi predlogami. Če želite vlogo souporabljati, ji morate dodeliti vsaj eno dovoljenje.",

		workspacebuilder_navigation_next: "Naslednji",
		workspacebuilder_navigation_finish: "Dokončaj",
		workspacebuilder_navigation_validate: "Preveri veljavnost",
		workspacebuilder_navigation_previous: "Prejšnji",
		workspacebuilder_navigation_cancel: "Prekliči",
		workspacebuilder_navigation_customize: "Prilagodi",

		workspacebuilder_search_dialog_title: "Išči",
		workspacebuilder_dialog_close: "Zapri",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Razpoložljivost predloge:",
		workspace_properties_templateState_tooltip: "Predloge ne dajte na voljo, da uporabnikom preprečite ustvarjanje timskih prostorov, ki uporabljajo to predlogo.",
		workspace_properties_dialog_title: "Lastnosti predloge",
		workspace_properties_online_radio_option_label: "Daj na voljo",
		workspace_properties_offline_radio_option_label: "Ne daj na voljo",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Ali želite preklicati brez shranjevanja sprememb?",
		workspacebuilder_cancel_confirmation_button: "Da",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Vse neveljavne postavke bodo odstranjene iz predloge in predloga bo na voljo uporabnikom.  Ali želite preveriti veljavnost te predloge timskega prostora?",
		workspacebuilder_validate_confirmation_button: "Da",
		workspacebuilder_validate_confirmation_title: "Preveri veljavnost",

		/* Entry templates builder */
		entry_templates: "Upravitelj predlog vnosa",
		no_entry_templates_were_found: "Ni predlog vnosa",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Vloge:",

		/* User Group picker widget */
		directory_label: "Imenik:",
		scope_label: "Poišči:",
		name_starts_with_label: "Ime se začne z",
		name_contains_label: "Ime vsebuje",
		display_name_contains_label: "Ime za prikaz vsebuje",
		starts_with_label: "Se začne z:",
		available_label: "Na voljo:",
		available_heading: "Na voljo",
		selected_label: "Izbrano:",
		selected_heading: "Izbrano",
		available_repositories_label: "Razpoložljivi repozitoriji",
		selected_repositories_label: "Izbrani repozitoriji",
		default_repository: "Privzeti repozitorij:",
		default_repository_placeholder: "Izberi repozitorij",
		default_role_placeholder: "Izberi vlogo",
		menu_label_placeholder: "Izberi ali vnesi oznako",
		default_repository_hover: "Podajte repozitorij, ki je privzeto izbran, ko se uporabniki s tega namizja prijavijo v spletnega odjemalca.<br><br><b>Pomembno:</b> preden lahko podate privzeti repozitorij, morate dodati repozitorije na namizje seznama izbranih repozitorijev.",
		default_repository_workflow_hover: "<b>Pomnite:</b> prostore aplikacije lahko konfigurirate samo za repozitorije, konfigurirane za to namizje.",
		remove_label: "Odstrani",
		users_label: "Uporabniki",
		groups_label: "Skupine",
		user_or_group_name_label: "Ime uporabnika ali skupine:",
		user_or_group_name_hover: "Vnesite ime uporabnika ali skupine, ki je veljavno v repozitoriju.  Ime ni preverjeno.",
		user: "Uporabnik",
		group: "Skupina",
		name: "Ime:",
		displayName: "Ime za prikaz",
		display_name: "Ime za prikaz:",
		shortName: "Kratko ime:",
		distinguishedName: "Razločevalno ime:",
		search_tooltip: "Išči",
		add_tooltip: "Dodaj",
		add_selected_tooltip: "Dodaj na izbrani seznam",
		remove_tooltip: "Odstrani",
		remove_selected_tooltip: "Odstrani z izbranega seznama",
		add_to_selected_tooltip: "Dodaj",
		remove_from_selected_tooltip: "Odstrani",
		move_up_selected_tooltip: "Premakni navzgor",
		move_down_selected_tooltip: "Premakni navzdol",
		advanced_search_options_tooltip: "Napredne nastavitve",
		move_right_selected_tooltip: "Premakni v podmeni",
		move_left_selected_tooltip: "Premakni iz podmenija",
		add_separator: "Dodaj ločilo",
		menu_item_label: "Oznaka elementa menija:",
		add_menu_label: "Dodaj podmeni",
		menu_label: "Oznaka podmenija:",
		menu_label_info: "<b>Pomembno:</b> v ta podmeni morate dodati vsaj en element menija, preden lahko shranite ta meni.",
		menu_dropdown_label: "Oznaka gumba spustnega seznama:",
		menu_dropdown_label_info: "<b>Pomembno:</b> V ta gumb spustnega seznama morate dodati vsaj en element menija, preden lahko shranite to orodno vrstico.",
		no_item_found: "Najdenih ni bilo nobenih rezultatov.",
		me: "Jaz",
		anyone: "Kdorkoli",
		specific_users: "Določeni uporabniki",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Iskanje je vrnilo več kot {0} rezultatov. Spremenite kriterije, da omejite iskanje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Rezultati iskanja vsebujejo postavke, ki so že bile izbrane. Te postavke ne bodo prikazane med rezultati iskanja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Vrnjenih je bilo več kot {0} rezultatov. Uporabite filter, da zmanjšate število rezultatov",

		user_already_selected: "Navedeni uporabnik je že izbran.  Navedite drugega uporabnika.",
		group_already_selected: "Navedena skupina je že izbrana.  Navedite drugo skupino.",
		user_cannot_select_self: "Samega sebe ne morete dodati. Navedite drugega uporabnika.",

		/* Select User Group dialog */
		select_user_group_add_label: "Dodaj",
		select_user_group_cancel_label: "Prekliči",
		add_users_groups_label: "Dodaj uporabnike in skupine",
		add_user_group_label: "Dodaj uporabnika in skupino",
		add_users_label: "Dodaj uporabnike",
		add_user_label: "Dodaj uporabnika",
		add_label: "Dodaj:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Naslednji dokumenti vsebujejo neshranjene spremembe pripomb:",
		viewer_confirm_to_proceed: "Ali želite nadaljevati, pri čemer boste izgubili spremembe?",
		viewer_warn_has_changes: "Neshranjene spremembe bodo zavržene.",
		viewer_warn_is_printing: "Tiskanje v teku morda ni dokončano.",
		viewer_warn_confirm_exit: "Ali želite zapreti program?",
		viewer_prompt_save_changes: "Naslednji dokument ima neshranjene spremembe pripomb, ki bodo izgubljene:<br>${0}<br><br>Ali želite shraniti spremembe?",
		viewer_prompt_mergesplit_changes: "Naslednji dokumenti vsebujejo neshranjene spremembe:<br>${0}<br><br>Ali želite nadaljevati, pri čemer boste izgubili spremembe?",
		viewer_prompt_mergesplit_tab_changes: "Naslednji dokument vsebuje neshranjene spremembe:<br>${0}<br><br>Ali želite nadaljevati, pri čemer boste izgubili spremembe?",
		viewer_new_item_name: "Nov dokument",
		viewer_top_frame: "Zgornji okvir:",
		viewer_bottom_frame: "Spodnji okvir:",
		viewer_left_frame: "Levi okvir:",
		viewer_right_frame: "Desni okvir:",
		viewer_viewer_frame: "Okvir prikazovalnika:",
		viewer_properties_frame: "Okvir z lastnostmi:",
		viewer_comment_frame: "Okvir s komentarji:",
		viewer_mergesplit_on: "Ogled",
		viewer_mergesplit_off: "Spajanje in razdelitev",
		viewer_mergesplit_context_menu_move: "Premakni",
		viewer_mergesplit_context_menu_rename: "Preimenuj",
		viewer_mergesplit_context_menu_delete: "Izbriši",
		//move to new window
		viewer_move_to_new_window:"Premakni v novo okno",
		viewer_continue:"Zavrzi spremembe",
		viewer_return_to_original_window:"Vrni se v prvotno okno",
		viewer_switch_window:"Preklopi okno",
		viewer_prompt_lost_changes:"Dokument ${0} je trenutno odprt v drugem oknu. Ta dokument vsebuje neshranjene spremembe.<br><br>Ali želite preklopiti na tisto okno in shraniti spremembe ali zavreči spremembe in ga odpreti v tem oknu?",
		viewer_mergesplit_fallback_info: "Dokončate lahko samo spajanje in razdelitev dokumentov, ki so v istem repozitoriju.",
		viewer_tabbed_layout: "Prikaži kot zavihke",
		viewer_tabbed_layout_highcontrast: "Tabulatorji",
		viewer_split_vertical_layout: "Razdeli podokna na zgornja in spodnja",
		viewer_split_vertical_layout_highcontrast: "Zgornja in spodnja",
		viewer_split_horizontal_layout: "Razdeli podokna na leva in desna",
		viewer_split_horizontal_layout_highcontrast: "Leva in desna",
		viewer_add_vertical_layout: "Nov zavihek na dnu",
		viewer_add_vertical_layout_highcontrast: "Zavihek a dnu",
		viewer_add_horizontal_layout: "Nov zavihek na desni",
		viewer_add_horizontal_layout_highcontrast: "Zavihek na desni",
		viewer_add_horizontal_layout_rtl: "Nov zavihek na levi",
		viewer_add_horizontal_layout_rtl_highcontrast: "Zavihek na levi",
		viewer_split_properties_layout: "Ogled lastnosti",
		viewer_split_comment_layout: "Ogled komentarjev",
		viewer_split_notelog_layout: "Ogled dnevnika opomb",
		viewer_window_title: "Prikazovalnik ${0}",
		viewer_next_hit: "Prikaži naslednji dokument na seznamu",
		viewer_prev_hit: "Prikaži prejšnji dokument na seznamu",
		viewer_confrim_more_search_results: "Rezultati iskanja ne vsebujejo več nobenega dokumenta, ki ga je mogoče prikazati. Ali želite pridobiti več rezultatov iskanja?",
		viewer_confirm_get_next_page: "Seznam rezultatov ne vsebuje več nobenih postavk, ki jih je mogoče prikazati. Ali želite pridobiti več rezultatov iskanja?",
		viewer_confirm_get_next_item: "Seznam rezultatov vsebuje več postavk, ki jih je mogoče prikazati. Ali si želite ogledati naslednjo postavko?",
		viewer_fn_annotation_tooltip: " Ustvaril: ${0},  Ustvarjeno dne: ${1}",
		viewer_box_note_limitation: "Zapiske Box lahko odprete in si jih ogledujete le v ločenem oknu.",
		viewer_click_to_open_box_note: "Če želite odpreti zapisek Box, kliknite tukaj.",
		viewer_box_view_expiring: "Najdaljši čas za ogledovanje dokumenta Box je 60 minut. Vaša trenutna seja bo potekla čez toliko minut: ${0}. Če želite še naprej urejati dokument, ga morate ponovno naložiti. Ali želite ponovno naložiti dokument?",
		viewer_add_dialog_save_as_type: "Shrani kot vrsto:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Navzkrižje odjave",
		viewer_checkout_conflict: "Dokument odjavlja drug uporabnik.",
		viewer_checkout_confirm: "Na voljo je novejša različica dokumenta. Ali želite nadaljevati in odjaviti dokument ali želite ponovno naložiti pregledovalnik z novejšo različico? Če želite znova naložiti ogledovalnik, bodo vse neshranjene spremembe izgubljene.",
		viewer_checkout_continue: "Nadaljuj z odjavo",
		viewer_checkout_reload: "Znova naloži",
		viewer_status_building: "Ustvarjanje dokumenta ...",
		viewer_status_adding: "Dodajanje dokumenta ...",
		viewer_status_checking_in: "Prijavljanje dokumenta ...",

		/* Class Selector Widget */
		include_subclasses_label: "Vključi podrazrede",
		include_subclasses_label2: "Išči tudi v podrazredih",
		include_subclasses_note: "(vključno s podrazredi)",
		available_classes_col_header: "Razpoložljivi razredi",
		single_class_label: "Išči v enem razredu",
		multiple_classes_label: "Išči v več razredih",
		multiple_classes_hover_help: "Izberite to možnost, če želite iskati v več razredih. Razredi so lahko nadrejeni razredi ali podrazredi. Če izberete to možnost, si lahko ogledate le možnosti in vrednosti, ki so skupne izbranim razredom.",
		selected_classes_col_header: "Izbrani razredi",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(vključno s podmapami)",
		favorites_pseudo_node: "\\Priljubljene\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "V repozitoriju izberite mapo, v katero želite dodati dokument.",
		no_permission_add_folder: "Nimate ustreznih dovoljenj za dodajanje map v to mapo.",
		no_permission_add_document: "Nimate ustreznih dovoljenj za dodajanje dokumentov v to mapo.",
		document_already_in_folder: "Dokument je že v tej mapi.",
		cant_move_folder_onto_parent: "Mapa je že v tej mapi.",
		cant_move_folder_onto_self: "Mape ne morete premakniti v samo sebe ali njene podmape.",

		/* Workflow Widgets */
		process_application_space: "Prostor aplikacije za obdelavo",
		process_role: "Vloga obdelave",
		process_inbasket: "Vhodni nabiralnik obdelave",
		process_worklist: "Delovni seznam",
		process_step_processor: "Delovna postavka obdelave",
		process_tracker: "Delovna postavka sledenja",
		process_info_subject: "Zadeva",
		process_info_stepname: "Korak",
		process_info_is_locked: "Zaklenjeno",
		process_info_no_access: "Brez dostopa",
		process_info_received_on: "Prejeto",
		process_info_overdue: "Zapadlo",
		process_info_reminder_sent: "Opomnik poslan",
		process_info_locked_by_user: "Zaklenil",
		process_work_object_number: "Številka delovnega predmeta",
		process_deadline: "Datum zapadlosti:",
		process_launchedby: "Zagnal:",
		process_receivedon: "Prejeto dne:",
		process_step: "Korak:",
		process_properties: "Lastnosti",
		process_attachments: "Priloge",
		process_attachments_select: "Izberi prilogo",
		process_finish_button_label: "Zaustavi sledenje",
		process_tracker_history: "Zgodovina",
		process_tracker_milestones: "Mejniki",
		process_tracker_milestone: "Mejnik",
		process_tracker_milestone_level: "Raven",
		process_tracker_milestones_empty: "Ni mejnikov za prikaz.",
		process_tracker_level_selector_label: "Pokaži ravni mejnika do:",
		process_tracker_map_selector_label: "Filtriraj po preslikavi:",
		process_tracker_message: "Sporočilo",
		process_tracker_datereached: "Dosežen datum",
		process_tracker_stepname: "Korak",
		process_tracker_cycle: "Cikel",
		process_tracker_review_cycle: "Mehanizem pregledovanja",
		process_tracker_participant: "Udeleženec",
		process_tracker_completed: "Dokončano",
		process_tracker_response: "Odziv",
		process_tracker_comments: "Komentarji",
		process_tracker_delete_confirmation: "Ali želite zaustaviti sledenje naslednjega delovnega toka: ${0}?",
		process_tracker_history_allmaps: "Vse preslikave",
		process_tracker_history_workflow: "Delovni tok",
		process_tracker_history_terminate: "Končaj",
		process_tracker_history_malfunction: "Okvara",
		process_filter_label: "Filter",
		process_no_filter_summary: "Uporabljen ni noben filter",
		process_filter_summary: "${0} uporabljenih",
		process_filter_reset_tooltip: "Ponastavitev počisti filter in osveži vhodni nabiralnik.",
		process_attachments_add_folder: "Dodaj mapo",
		process_attachments_add_doc: "Dodaj dokument",
		process_complete_button_label: "Dokončaj",
		process_save_button_label: "Shrani",
		process_launch_button_label: "Zaženi delovni tok",
		process_open_button_label: "Odpri",
		process_movetoinbox_button_label: "Premakni v vhodni nabiralnik",
		process_return_button_label: "Nazaj",
		process_return_to_sender_tooltip: "Delovno postavko vrni v izvorni vhodni nabiralnik",
		process_move_to_inbasket_tooltip: "Delovno postavko premakni v osebni vhodni nabiralnik",
		process_reassign_tooltip: "Delovno postavko znova dodeli drugemu lastniku",
		process_reassign_button_label: "Ponovno dodeli",
		process_preferences_button_label: "Nastavitve",
		process_manageroles_button_label: "Upravljaj vloge",
		process_manageroles_no_members: "Ni članov.",
		process_responses_button_label: "Več odgovorov",
		process_morecustomaction_button_label: "Več dejanj",
		process_show_instructions: "Ogled navodil",
		process_hide_instructions: "Skrij navodila",
		process_remove_attachment: "Odstrani",
		process_close_window: "Delovna postavka je bila obdelana.",
		process_delegate_flag: "Trenutni lastnik mora odobriti delovno postavko, preden jo preusmeri na naslednji korak v delovnem toku.",
		process_paticipant_voting: "Število udeležencev, potrebnih za odobritev glasovanja",
		process_get_next_label: "Pridobi naslednjo delovno postavko",
		process_no_more_items: "V vhodnem nabiralniku ni več postavk za obdelavo.",
		process_workflow_name: "Ime delovnega toka:",
		process_pattern_process_name: "Pregled za ${0}",
		process_instuctions: "Navodila za pregledovalce:",
		process_pattern_deadline: "Datum zapadlosti:",
		process_reviewers: "Pregledovalci:",
		process_approvals_required: "Zahtevana dovoljenja:",
		process_on_reject: "Če je delovna postavka zavrnjena:",
		process_return_to_originator: "Vrni meni",
		process_return_to_previous_reviewer: "Vrni prejšnjemu pregledovalcu",
		process_additional_settings: "Dodatne nastavitve:",
		process_allow_reassign: "Dovoli pregledovalcem, da znova dodelijo ta pregled",
		process_complete_notification: "Obvesti me, ko je pregled dokončan",
		process_workflow_name_hover_help: "Na podlagi imena, ki ga podate za delovno postavko, lahko pregledovalci preprosto razlikujejo med to delovno postavko in drugimi delovnimi postavkami v svojem vhodnem nabiralniku.",
		process_approvals_required_hover_help: "Če delovno postavko hkrati pregleduje več oseb, lahko podate, koliko odobritev je potrebnih za uspešno dokončanje delovne postavke.",
		process_approval_options: "Možnosti odobritve",
		process_all: "Vse",
		process_at_least: "Vsaj",
		process_at_least_by_count: "Vsaj ${0} pregledovalcev",
		process_at_least_by_percentage: "Najmanjše št. pregledovalcev: ${0}%",
		process_comments: "Komentarji:",
		process_review_step_comments_hover_help: "Če zavrnete delovno postavko, morate o tem podati informacije. Na podlagi teh informacij lahko pobudnik delovne postavke ali prejšnji pregledovalec obravnava vaše pomisleke.",
		process_rework_step_comments_hover_help: "Podati morate informacije o tem, kako dojemate komentarje. Če se ne strinjate s komentarji, navedite razloge za svojo odločitev.",
		process_rejection_reason: "Razlogi za zavrnitev:",
		process_summary: "Povzetek",
		process_sequential_review: "Zaporedni pregled",
		process_sequential_review_description: "Delovno postavko bo pregledal vsak pregledovalec po vrstnem redu.",
		process_parallel_review: "Vzporedni pregled",
		process_parallel_review_description: "Delovno postavko bodo hkrati pregledali vsi pregledovalci.",
		process_parallel_approvals_required_error: "Število zahtevanih odobritev je previsoko. Določenih je samo ${0} pregledovalcev.",
		process_parallel_invalid_required_approvals_count: "Vrednost ni veljavna. Vrednost mora biti ${0}.",
		process_subject_prompt: "Vnesite zadevo",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Delovna postavka:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Ogled lastnosti",
		view_permissions_level: "Ogled dovoljenj",
		view_content_level: "Ogled dokumenta",
		link_level: "Povezava",
		modify_properties_level: "Uredi lastnosti",
		modify_content_level: "Uredi dokument",
		minor_version_level: "Uredi podrazličico",
		major_version_level: "Uredi glavno različico",
		create_instance_level: "Ustvari primerek",
		delete_document_level: "Izbriši dokument",
		delete_item_level: "Izbriši postavko",
		modify_document_permissions_level: "Upravljanje dovoljenj",
		modify_folder_permissions_level: "Upravljanje dovoljenj",
		modify_owner_level: "Spremeni lastnika",
		delete_folder_level: "Izbriši mapo",
		file_in_folder_level: "Dodajanje v mape",
		create_subfolder_level: "Ustvarjanje podmap",
		link_item_level: "Dodaj opombe v dokument, Dodaj v mapo", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Samo za dokument: Dodaj opombo v dokument ali odstrani opombo iz dokumenta</li><li>Samo za mapo: Dodaj postavke v mapo ali odstrani postavke iz mape</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Izbriši",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Lastnik",
		/* previously \"Full control\" */
		edit_privilege: "Avtor",
		/* previously \"Edit\" */
		read_only_privilege: "Bralec",
		/* previously \"Read only\" */
		no_access_privilege: "Brez dostopa",
		share_with_label: "Skupna raba z:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Samo jaz",
		public_label: "Vsi",
		members_label: "Določeni uporabniki in skupine",
		select_members_label: "Izberi ...",
		select_user_group_label: "Izberi uporabnike ...",
		select_users_groups_label: "Izberi uporabnike in skupine ...",
		select_user_label: "Izberi uporabnika ...",
		propagation_label: "Razširjanje:",
		access_label: "Dovoljenja:",
		add_permission_add_label: "Dodaj",
		security_policy_label: "Varnosti pravilnik:",
		includes_inherited_access: "Vključuje podedovan dostop",
		customize_access_for_label: "Prilagodi dostop za:",
		customize: "Prilagodi",
		direct: "Ta postavka",
		singleLevelInheritance: "Ena raven",
		infiniteLevelInheritance: "Vse ravni",
		inherited: "Podedovano",
		direct_hover_help: "Varnostne nastavitve veljajo za izbrano postavko",
		singleLevelInheritance_hover_help: "Ta dovoljenja veljajo za to postavko in tiste neposredno podrejene elemente, ki so konfigurirani, da podedujejo varnost po tej postavki.",
		infiniteLevelInheritance_hover_help: "Ta dovoljenja veljajo za to postavko in vse naslednike, ki so konfigurirani, da podedujejo varnost po tej postavki.",
		inherited_hover_help: "Ta dovoljenja se podedujejo po nadrejenem elementu.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Ta dovoljenja za ${0} veljajo za to postavko in tiste neposredno podrejene elemente, ki so konfigurirani, da podedujejo varnost po tej postavki.",
		infiniteLevelInheritance_member_hover_help: "Ta dovoljenja za ${0} veljajo za to postavko in vse naslednike, ki so konfigurirani, da podedujejo varnost po tej postavki.",
		inherited_member_hover_help: "Ta dovoljenja za ${0} se podedujejo po nadrejenem elementu.",
		partial_hover_help: "Uporabnik je spremenil varnostne nastavitve postavke",
		allow: "Dopusti",
		deny: "Zavrni",
		basic: "Osnovno",
		advanced: "Napredno",
		permission_type: "Nastavi dostop za:",
		share_with_hover_help: "Postavko trenutno souporabljajo naslednji uporabniki in skupine.",
		direct_security_policy_hover_help: "Nastavitve pravilnika zaščite vam omogočajo, da spremenite zaščito te postavke.",
		security_policy_hover_help: "Zaščita te postavke je samo za branje, ker vam nastavitve tega pravilnika zaščite preprečujejo, da jo spremenite.",
		security_remove: "Brez dovoljenj",
		pseudo_group_label: "Računi vzdevka",
		marking_hover_help: "Zaščito te postavke nadzoruje nabor oznak, ki lahko vpliva na zaščito postavke.",
		note_label: "Pomembno:",
		marking_text: "Ta postavka je označena kot: ${0}. Postavka ima morda dodatne omejitve zaščite.",
		authenticated_users: "Overjeni uporabniki",
		realm_users: "Uporabniki ${0}",
		denyAll: "Zavrni vse",
		allowAll: "Dovoli vse",
		remove_direct_text: "Ko shranite svoje spremembe, bodo dovoljenja za tega člana odstranjena iz postavke.",
		remove_single_inheritance_text: "Ko shranite svoje spremembe, bodo dovoljenja za tega člana odstranjena iz postavke in <br>tistih podrejenih elementov, ki so konfigurirani, da podedujejo varnost po tej postavki.<p>Ali želite nadaljevati?",
		remove_infinite_inheritance_text: "Ko shranite svoje spremembe, bodo dovoljenja za tega člana odstranjena iz postavke in <br>vseh naslednikov, ki so konfigurirani, da podedujejo varnost po tej postavki.<p>Ali želite nadaljevati?",
		remove_inheritance_text: "Ko shranite svoje spremembe, bodo dovoljenja za tega člana odstranjena iz postavke in <br>vseh naslednikov, ki so konfigurirani, da podedujejo varnost po tej postavki. Ostala bodo samo tista dovoljena, <br>ki jih podeduje ta postavka.<p>Ali želite nadaljevati?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Odstrani ta dovoljenja za ${0}",

		security_proxy_text: "Zaščita te postavke je samo za branje.",
		security_proxy_declared_text: "Zaščita te postavke je samo za branje, ker jo določa varnostni strežnik proxy.",
		security_proxy_hover_help: "Zaščito te postavke nadzoruje zaščita, ki je nastavljena v drugem predmetu v repozitoriju.",
		add_permissions_label: "Dodaj dovoljenja",
		permission_propagation_direct: "Samo ta mapa",
		permission_propagation_onelevel: "Ta mapa in ena raven pod njo",
		permission_propagation_alllevels: "Ta mapa in vse ravni pod njo",
		document_propagation_label: "Nastavi dostop za:",
		document_propagation_FOLDER: "Mapa",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Izvor overjanja:",

		/* Versions Widget */
		object_versions_selector_label: "Različice:",
		object_versions_label: "Različice",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Arhivirane mape",
		folders_filed_in_folder_col_hdr: "Mapa",
		folders_filed_in_path_col_hdr: "Pot",
		folders_filed_in_containment_name_col_hdr: "Ime vsebine",
		folders_filed_in_creator_col_hdr: "Ustvaril",
		folders_filed_in_date_created_col_hdr: "Ustvarjeno dne",

		/* Parent Documents */
		properties_parent_documents_label: "Nadrejeni dokumenti",

		/* Select object dialog */
		select_object_title: "Izberi postavko",
		select_object_breadCrumb_version_prefix: "Različice za: ",
		show_versions_label: "Pokaži različice",
		use_current_version_label: "Uporabi trenutno različico",
		use_released_version_label: "Uporabi izdano različico",

		/* Select content class dialog */
		select_class: "Izberi razred",
		/* Select Search dialog */
		select_search: "Izberi iskanje",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Ogled povezave",
		show_hyperlink_intro: "Povezavo lahko kopirate in prilepite v e-pošto, klepet in spletne strani. Če obstaja več različic postavke, podajte, za katero različico želite ustvariti povezavo.",
		show_hyperlink_intro_no_version_select: "Povezavo lahko kopirate in prilepite v e-pošto, klepet in spletne strani.",
		show_text_label: "Različica:",
		released_button_label: "Izdano",
		current_button_label: "Trenutni",
		select_button_label: "Določena različica",
		show_hyperlink_no_released_version_msg: "Ne obstaja nobena izdana različica tega dokumenta.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Zaženi delovni tok",
		edit_workflow_title: "Lastnosti delovne postavke",
		start_workflow_intro: "Zaženite delovni tok, da obdelate izbrane postavke. Če želite dodeliti delovne postavke določenemu uporabniku, podajte lastnika.",
		edit_workflow_intro: "Urejate lahko lastnosti izbranih delovnih postavk. Če želite ponovno dodeliti delovne postavke drugemu uporabniku, podajte lastnika.",
		workflow_field_label: "Delovni tok:",
		priority_field_label: "Prioriteta:",
		owner_field_label: "Lastnik:",
		start_button_label: "Zaženi",
		save_button_label: "Shrani",
		owner_value_hint: "Vnesite črkovno-številski niz z največ 32 znaki. Niz lahko vsebuje samo presledke ali naslednje znake: a-z, A-Z, 0-9 in ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elementi vsebine",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Vrednost ni veljavna. Vrednost lahko vsebuje samo presledke ali naslednje znake: a-z, A-Z, 0-9 in ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Vnesite vrednost od 1 do 32000, da označite pomembnost te delovne postavke.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Vrednost ni veljavna. Prioriteta mora biti vrednost med 1 in 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Ime delovnega toka ne obstaja.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Začasno ustavi iz delovnega toka",
		suspend_workitems_intro: "Ko začasno ustavite delovno postavko iz delovnega toka, je ni mogoče obdelati, dokler ne nadaljujete.",
		suspend_workitems_options_label: "Začasno ustavi izbrane delovne postavke",
		suspend_until_resume_label: "Dokler ne nadaljujete ročno",
		suspend_until_date_label: "Do",
		suspend_for_duration_label: "Za",
		suspend_for_duration_hours: "ur",
		suspend_for_duration_days: "dni",
		suspend_for_duration_weeks: "tednov",
		suspend_for_duration_months: "mesecev",
		suspend_for_duration_years: "let",
		suspend_button_label: "Začasno ustavi",
		suspend_duration_value_hint: "Za trajanje vnesite vrednost v obsegu od 1 do 99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Vrednost ni veljavna. Vrednost mora biti v obsegu od 1 do 99.",

		/* Remove from workflow */
		remove_workflow_title: "Odstrani iz delovnega toka",
		remove_workflow_confirmation: "Ali želite odstraniti izbrane postavke iz delovnega toka?<br>Izbranih je ${0} postavk.",
		remove_workflow_button_label: "Odstrani",

		/* Unfile dialog */
		unfile_dialog_title: "Odstrani iz mape",
		unfile_dialog_remove_from_folder_label: "Odstrani iz:",
		unfile_dialog_info_text: "Postavke lahko odstranite iz map. Vendar pa z odstranitvijo postavke iz vseh map postavke ne odstranite iz repozitorija. Postavko lahko še vedno pridobite tako, da zaženete iskanje. Na tem seznamu so prikazane samo mape, za katere imate pooblastila za ogled.",
		unfile_dialog_select_all: "Izberi vse",
		unfile_dialog_deselect_all: "Počisti vse",
		unfile_dialog_remove_button_label: "Odstrani",
		unfile_dialog_select_folder_col_hdr: "Izberi mapo",
		unfile_dialog_folder_col_hdr: "Mapa",
		unfile_dialog_path_col_hdr: "Pot",
		unfile_dialog_not_filed_msg: "Ta postavka ni v nobeni mapi.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nimate ustreznih dovoljenj za odstranjevanje te postavke iz katere koli mape, v kateri se nahaja ta postavka.",
		unfile_dialog_folder_not_selectable_tooltip: "Nimate ustreznih dovoljenj za odstranjevanje te postavke iz te mape.",
		unfile_multi_prompt: "Ali želite odstraniti izbrane postavke iz mape ${0}?",
		unfile_large_number_items_confirmation_question: "Izbrali ste ${0} postavk, ki bodo odstranjene iz mape ${1}.<br/>Odstranjevanje velikega števila postavk iz mape lahko traja nekaj časa.<br/>Ali želite nadaljevati?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Odpri",
		move_to_folder_title: "Premakni v mapo",
		move_to_folder_button_caption: "Premakni",
		move_to_folder_label: "Premakni v:",
		add_to_folder_title: "Dodaj v mapo",
		add_to_folder_button_caption: "Dodaj",
		add_to_folder_label: "Dodaj v:",
		copy_to_folder_title: "Kopiraj v mapo",
		copy_to_folder_button_caption: "Kopiraj",
		copy_to_folder_label: "Kopiraj v:",
		copy_to_folder_delete_label: "Ko se kopija dokonča, izbrane postavke izbrišite iz storitve Box.",
		move_from_folder_label: "Premakni iz:",
		move_file_info_text: "Postavke lahko premikate iz ene mape v drugo.",
		move_folder_info_text: "Mape lahko premikate iz ene nadrejene mape v drugo.",
		add_doc_to_folder_info_text: "Postavke lahko dodate v eno ali več map. Če je postavka že v mapi, ostane v tej mapi in se doda v morebitne druge mape, ki jih podate.",
		copy_doc_to_folder_info_text: "Postavke lahko kopirate v mapo.",
		box_copy: "Kopija iz storitve Box",
		box_copy__button_caption: "Kopiraj",
		box_copy_to_info_text: "Izberite repozitorij in mapo, kamor želite kopirati izbrane postavke iz storitve Box.",
		box_copy_from_info_text: "Izberite repozitorij in mapo, kamor želite kopirati izbrane postavke iz storitve Box.",
		box_copy_version_info_text: "Če želite dodati nov dokument, izberite repozitorij in mapo. Če želite sprostiti novo različico, izberite repozitorij in mapo.",
		admin_box_copy: "Kopija iz storitve Box",
		admin_box_copy_hover: "Ta možnost omogoča uporabnikom, da v storitev Box kopirajo dokumente.",

		no_permission_to_copy_version_msg: "Dokumenta iz storitve Box ni mogoče kopirati kot novo različico izbranega dokumenta. Nimate ustreznih dovoljenj za urejanje izbranega dokumenta ali je izbrani dokument rezerviral nekdo drug.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nimate ustreznih dovoljenj za odstranjevanje te postavke iz katere koli mape, v kateri se nahaja ta postavka.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nimate ustreznih dovoljenj za odstranjevanje te postavke iz te mape.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Te postavke ni mogoče premakniti, ker ni vložena v nobeni mapi. Izberite drugo postavko.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Zaženi delovni tok",
		subscriptions_dialog_available_items_label: "Razpoložljive postavke:",
		subscriptions_dialog_info_text: "Podajte, kateri delovni tok želite zagnati.",
		subscriptions_dialog_select_button_label: "V redu",
		subscriptions_dialog_name_col_hdr: "Ime",
		subscriptions_dialog_desc_col_hdr: "Opis",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Upravljaj vloge",
		manageroles_dialog_info_text: "Spremenite lahko seznam uporabnikov za vsako vlogo, ki je povezana s tem prostorom aplikacije za obdelavo.",
		manageroles_dialog_members_label: "Člani",
		manageroles_dialog_roles_label: "Vloge",
		manageroles_dialog_add_button_label: "Dodaj uporabnike in skupine",
		manageroles_dialog_remove_button_label: "Odstrani",
		manageroles_dialog_save_button_label: "Shrani",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "S to postavko ni povezan noben delovni tok.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Možnosti delovnega toka",
		workflow_pref_dialog_info_text: "Podajte dogodke poteka dela, za katere želite prejemati elektronska obvestila. Omogočite lahko tudi, da možnost preusmeri vaše delo drugi osebi, tako da izberete uporabnika, ki ga želite pooblastiti za delo.",

		workflow_pref_general: "Splošno",
		workflow_pref_email_address: "E-poštni naslov",
		workflow_pref_email_address_hover: "Podajte e-poštni naslov, na katerega želite prejemati obvestila delovnega toka.",
		workflow_pref_preferred_locale: "Jezik",
		workflow_pref_preferred_locale_hover: "Podaja jezik, v katerem bodo prikazana e-poštna obvestila.",

		workflow_pref_work_item_notice: "Obvestila delovne postavke",
		workflow_pref_step_new_assignment: "Dodeljena mi je nova delovna postavka",
		workflow_pref_step_new_assignment_hover: "Obvesti me, ko prejmem novo delovno postavko.",
		workflow_pref_step_expired_deadline: "Rok delovne postavke je potekel",
		workflow_pref_step_expired_deadline_hover: "Obvesti me, ko zamudim rok delovne postavke.",
		workflow_pref_step_reminders: "Bliža se rok delovne postavke",
		workflow_pref_step_reminders_hover: "Opomni me, ko se bliža rok delovne postavke.",

		workflow_pref_originator_notice: "Obvestila pobudnika",
		workflow_pref_milestone_reached: "Mejnik je dosežen",
		workflow_pref_milestone_reached_hover: "Obvesti me, ko je dosežen mejnik v delovnem toku, ki sem ga zagnal.",

		workflow_pref_tracker_notice: "Obvestila sledilnika delovnega toka",
		workflow_pref_tracker_new_assignment: "Dodeljena mi je nova postavka sledilnika",
		workflow_pref_tracker_new_assignment_hover: "Obvesti me, ko se zažene delovni tok, ki mu sledim.",
		workflow_pref_tracker_deadline_reminders: "Rok delovnega toka se bliža",
		workflow_pref_tracker_deadline_reminders_hover: "Opomni me, ko se bliža rok delovnega toka.",
		workflow_pref_tracker_deadline_expired: "Rok delovnega toka je potekel",
		workflow_pref_tracker_deadline_expired_hover: "Obvesti me, ko poteče rok delovnega toka.",
		workflow_pref_tracker_exception: "Prišlo je do napake v delovnem toku",
		workflow_pref_tracker_exception_hover: "Obvesti me, ko pride do izjemnega stanja ali napake v delovnem toku.",
		workflow_pref_tracker_expired_deadline: "Rok koraka je presežen",
		workflow_pref_tracker_expired_deadline_hover: "Obvesti me, ko je rok koraka za delovni tok, ki ga sledim, presežen.",
		workflow_pref_tracker_milestone_reached: "Mejnik je dosežen",
		workflow_pref_tracker_milestone_reached_hover: "Obvesti me, ko je dosežen mejnik v delovnem toku, ki mu sledim.",

		workflow_pref_out_notice: "Odsotnost",
		workflow_pref_proxy_user: "Pooblasti za delo",
		workflow_pref_proxy_user_hover: "Uporabite to možnost, če želite svoje delo samodejno preusmeriti k drugemu uporabniku, ko ste na primer odsotni ali na dopustu.",
		workflow_pref_workflow: "Delovni tok",
		workflow_pref_on: "Vključeno",
		workflow_pref_off: "Izključeno",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Zaženi delovni tok",
		transfered_workflows_dialog_info_text: "Izberite delovni tok, ki ga želite zagnati.",
		transfered_workflows_dialog_available_items_label: "Razpoložljive postavke:",
		transfered_workflows_dialog_select_button_label: "Zaženi",
		transfered_workflows_dialog_name_col_hdr: "Ime",
		transfered_workflows_dialog_no_item_found: "Ni bilo najdenih nobenih prenesenih delovnih tokov.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Prenesi delovni tok",
		transfer_workflow_dialog_info_text: "Izberite delovni tok, ki ga želite prenesti v sistem delovnega toka.",
		transfer_workflow_dialog_use: "Uporabi ime tega delovnega toka",
		transfer_workflow_dialog_use_another: "Uporabi ime drugega delovnega toka",
		transfer_workflow_dialog_in_use: "Ime delovnega toka: ",
		transfer_workflow_dialog_transfer_button_label: "Prenesi",
		transfer_workflow_dialog_no_items_found: "Ni bilo najdenih nobenih prenesenih delovnih tokov.",
		transfer_workflow_dialog_use_hover: "Podajte ime trenutnega delovnega toka iz definicije delovnega toka.",
		transfer_workflow_dialog_another_hover: "Podajte drugačno ime delovnega toka ali pa ponovno uporabite obstoječe ime prenesenega delovnega toka.",

		/*Search In control*/
		search_in_title: "Išči v:",
		search_in_teamspaces: "Timski prostori",
		search_in_repositories: "Repozitoriji",
		search_in_thisteamspaces: "Ta timski prostor",

		ajaxViewer_save: "Shrani pripombe",
		ajaxViewer_print: "Predogled tiskanja",
		ajaxViewer_firstPage: "Prva stran",
		ajaxViewer_previousPage: "Prejšnja stran",
		ajaxViewer_nextPage: "Naslednja stran",
		ajaxViewer_lastPage: "Zadnja stran",
		ajaxViewer_unknownPageCount: "1 od ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} od ${1}",
		ajaxViewer_zoomOut: "Pomanjšaj",
		ajaxViewer_zoomIn: "Povečaj",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "Prilagodi širini",
		ajaxViewer_fitHeight: "Prilagodi višini",
		ajaxViewer_fitPage: "Prilagodi strani",
		ajaxViewer_rotate270: "Zavrti za 270 stopinj",
		ajaxViewer_rotate90: "Zavrti za 90 stopinj",
		ajaxViewer_rotate180: "Zavrti za 180 stopinj",
		ajaxViewer_darken: "Potemnitev",
		ajaxViewer_lighten: "Osvetlitev",
		ajaxViewer_lessContrast: "Manj kontrasta",
		ajaxViewer_moreContrast: "Več kontrasta",
		ajaxViewer_invert: "Obrni",
		ajaxViewer_createHighlight: "Senčenje",
		ajaxViewer_createNote: "Dodaj pripombo",
		ajaxViewer_editAnnotation: "Urejanje lastnosti pripombe",
		ajaxViewer_deleteAnnotation: "Izbriši pripombo",
		ajaxViewer_editAnnotationTitle: "Urejanje lastnosti pripombe",
		printableView_print: "Natisni",
		printableView_close: "Zapri",

		search_results_dropdown_button: "Prikaz rezultatov",
		search_results_columns_label: "Prikaz rezultatov iskanja",
		search_results_columns_description: "Izberite lastnosti, ki jih želite prikazati v rezultatih iskanja.",
		search_results_sortby_label: "Razvrsti po:",
		search_results_order_label: "Vrstni red razvrščanja:",
		search_results_accending_label: "Rastoče",
		search_results_descending_label: "Padajoče",
		search_results_available_properties: "Na voljo",
		search_results_selected_properties: "Izbrano",
		search_rank_property: "Rang (samo iskanje besedil)",
		search_name_attribute: "Ime (${0})",
		search_results_summary_enabled_label: "Omogoči povzetke vsebine (samo iskanje besedil)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Iskanja",
		manage_teamspace_classes_tab_title: "Razredi",
		manage_teamspace_entry_templates_tab_title: "Predloge vnosa",
		manage_teamspace_team_tab_title: "Ekipa",
		manage_teamspace_roles_tab_title: "Vloge",
		manage_teamspace_dialog_title: "Spremeni timski prostor",
		manage_teamspace_button_label: "Spremeni timski prostor",
		manage_teamspace_team_pane_heading: "Izberi ekipo",
		manage_teamspace_classes_pane_heading: "Izberi razrede",
		manage_teamspace_entry_templates_pane_heading: "Izberi predloge vnosa",
		manage_teamspace_no_rights_message: "Nimate ustreznih dovoljenj za spreminjanje tega timskega prostora.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Lastnosti timskega prostora",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Podajte lastnosti, ki so prikazane za dokumente in mape na seznamu vsebine, ko uporabniki brskajo po timskem prostoru. Podate lahko tudi vrstni red, v katerem so prikazane lastnosti.",
		teamspace_props_sel_cols_use_default_label: "Za ta repozitorij uporabi nastavitve <b>Prebrskaj</b>",
		teamspace_props_sel_cols_use_default_tooltip: "Uporabite nastavitve, ki so določene na strani Brskaj za ta repozitorij v skrbniškem orodju.",
		teamspace_props_general_tab_label: "Splošno",
		teamspace_props_column_props_tab_label: "Prikazane lastnosti",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Izberite datoteko za uvoz",
		teamspace_import_template_instruction: "Izberete lahko izvozno datoteko predloge timskega prostora, ki jo želite uvoziti.",
		teamspace_import_template_button_label: "Uvozi",
		teamspace_import_template_dialog_label: "Uvozi predlogo timskega prostora",

		/* Annotation Dialog */
		annotationDlg_title: "Pripombe",
		annotationDlg_description: "Izbrani dokument ima naslednje pripombe:",
		annotationDlg_msg_noAnnotations: "Ne obstaja nobena pripomba. Kliknite Dodaj, da ustvarite pripombo.",
		annotationDlg_pageLabel: "Stran: ${pageNum}",
		annotationDlg_accLabel: "DOSTOP: ${accType}",
		annotationDlg_accLabel_public: "Javno",
		annotationDlg_accLabel_private: "Zasebno",
		annotationDlg_accLabel_privateGroup: "Zasebno(${groupName})",
		annotationDlg_copiable: "Je mogoče kopirati v drug strežnik",
		annotationDlg_cannotCopy: "Ni mogoče kopirati v drug strežnik",
		annotationDlg_addButtonLabel: "Dodaj",

		/* Share Dialog */
		is_shared: "V skupni rabi",
		is_share_pending: "Skupna raba v čakanju",
		share_title: "Skupna raba v storitvi Box",
		share_instructions_new: "Pošljite e-pošto, ki vključuje povezavo do datoteke v skupni rabi. Do datoteke lahko dostopa vsak, ki ima povezavo.",
		share_instructions_existing: "Pošljite e-pošto, ki vključuje povezavo do datoteke v skupni rabi. Do datoteke lahko dostopa vsak, ki ima povezavo. Drugi ljudje imajo lahko povezavo, ker je to datoteko kdo že dal v skupno rabo.",
		share_instructions_another_version_shared: "Pošljite e-pošto, ki vključuje povezavo do datoteke v skupni rabi. Do datoteke lahko dostopa vsak, ki ima povezavo. Drugi ljudje imajo lahko povezavo, ker je kdo že dal v skupno rabo drugo različico te datoteke.",
		share_buttonLabel_share: "Skupna raba",
		share_email_addresses: "Pošlji v:",
		share_email_addresses_hover: "Ko je skupna raba končana, se povezava pošlje na te e-poštne naslove. Če ne vnesete ničesar, se povezava pošlje na vaš e-poštni naslov.",
		share_email_addresses_reshare_hover: "Ko je skupna raba končana, se povezava pošlje na te e-poštne naslove. Če ne vnesete ničesar, se e-pošta ne pošlje.",
		share_password: "Nastavi geslo:",
		share_password_placeholder: "Izbirno",
		share_comments: "Sporočilo:",
		share_comments_default: "Svojo datoteko želim dati v skupno rabo s teboj v storitvi Box.",
		share_myEmail: "Pošlji iz:",
		share_expiration: "Nastavi potek povezave:",
		share_expire: "Dostop poteče:",
		share_expire_none: "Nikoli ne poteče",
		share_allowDownload: "Omogoči prenos",
		share_add: "Dodaj",
		share_advanced_instructions: "Prenos, potek in nastavitve gesla veljajo za datoteko v skupni rabi v storitvi Box.",
		share_advanced_existing_instructions: "Prenos, potek in nastavitve gesla veljajo za datoteko v skupni rabi v storitvi Box.",
		share_options_edit_warning: "Pomembno: kakršne koli spremembe teh nastavitev vplivajo na kogar koli, ki ima povezavo, vključno z ljudmi, ki že imajo povezavo.",
		share_link: "Povezava:",
		share_email_addresses_placeholder: "E-poštni naslovi",
		share_email_address_placeholder: "E-poštni naslov",
		share_email_address_invalid: "Vnesite veljaven e-poštni naslov.",
		share_cannot_share_with_self: "Datotek ne morete dati v skupno rabo sami s seboj. Navedite drugega uporabnika.",
		share_selected_version_with_minor_warning_hover: "Različica ${0} dokumenta je v skupni rabi. Izbrali ste različico ${1}.<br><br><b>Opozorilo</b>: če daste različico ${1} v skupno rabo, skupna raba različice ${2} ni mogoča, razen če izbrišete skupno rabo za različico ${1}.",
		share_selected_version_hover: "Različica ${0} dokumenta je v skupni rabi. Izbrali ste različico ${1}.",
		share_selected_version_message: "Pomembno: različica ${0} dokumenta je v skupni rabi. Izbrali ste različico ${1}.",
		share_different_version_message: "Pomembno: izbrali ste različico ${1}, vendar je različica ${0} dokumenta že v skupni rabi.  Za različico ${1} lahko skupno rabo omogočite le, če najprej izbrišete skupno rabo, vendar lahko namesto tega omogočite skupno rabo povezave do različice ${0}.",
		share_version_message: "Pomembno: različica ${0} dokumenta je v skupni rabi. Izberite različico, za katero želite omogočiti skupno rabo.",
		share_version_new: "Dajte v skupno rabo različico ${0}",
		share_version_new_p8_hover: "Če omogočite skupno rabo tega dokumenta, se ustvari povezava le do izbrane različice.<br><br>Če je za dokument že omogočena skupna raba:<ul><li>omogočite lahko skupno rabo za novejšo različico, in povezava bo preusmerjena na novejšo različico.</li><li>Skupno rabo starejše različice lahko omogočite le, če najprej izbrišete skupno rabo.</li></ul>",
		share_version_new_cm_hover: "Če omogočite skupno rabo tega dokumenta, se ustvari povezava le do izbrane različice.<br><br>Če je za dokument že omogočena skupna raba:<ul><li>omogočite lahko skupno rabo za novejšo različico, in povezava bo preusmerjena na novejšo različico.</li><li>Skupno rabe starejše različice ni mogoče omogočiti.</li></ul>",
		share_version_update: "Dajte v skupno rabo različico ${0} (posodobite možnosti skupne rabe).",
		share_version_update_p8_hover: "Če omogočite skupno rabo tega dokumenta, se ohrani povezava le do določene različice.<br><br>Če je za dokument že omogočena skupna raba:<ul><li>omogočite lahko skupno rabo za novejšo različico, in povezava bo preusmerjena na novejšo različico.</li><li>Skupno rabo starejše različice lahko omogočite le, če najprej izbrišete skupno rabo.</li></ul>",
		share_version_update_cm_hover: "Če omogočite skupno rabo tega dokumenta, se ohrani povezava le do določene različice.<br><br>Če je za dokument že omogočena skupna raba:<ul><li>omogočite lahko skupno rabo za novejšo različico, in povezava bo preusmerjena na novejšo različico.</li><li>Skupno rabe starejše različice ni mogoče omogočiti.</li></ul>",
		share_version_change_to_current: "Dajte v skupno rabo različico ${0} (skupno rabo posodobite z izbrano različico).",
		share_version_change_to_current_p8_hover: "Če za ta dokument omogočite skupno rabo, se posodobi le povezava, ki kaže na izbrano različico.<br><br>Če je za dokument že omogočena skupna raba:<ul><li>omogočite lahko skupno rabo za novejšo različico, in povezava bo preusmerjena na novejšo različico.</li><li>Skupno rabo starejše različice lahko omogočite le, če najprej izbrišete skupno rabo.</li></ul>",
		share_version_change_to_current_cm_hover: "Če za ta dokument omogočite skupno rabo, se posodobi le povezava, ki kaže na izbrano različico.<br><br>Če je za dokument že omogočena skupna raba:<ul><li>omogočite lahko skupno rabo za novejšo različico, in povezava bo preusmerjena na novejšo različico.</li><li>Skupno rabe starejše različice ni mogoče omogočiti.</li></ul>",
		share_repository: "Repozitorij za datoteke v skupni rabi",
		share_repository_hover: "Če ne vidite repozitorija storitve Box, ki ga želite uporabiti, lahko dodate nov repozitorij storitve Box na strani Repozitoriji.",
		share_options: "Možnosti skupne rabe",
		unshare_confirm: "Če izbrišete skupno rabo, se vse povezave skupne rabe prekinejo, vključno s povezavami, ki so jih drugi uporabniki poslali pred tem. Vsi drugi uporabniki, ki želijo dati dokument v skupno rabo, morajo izbrati originalen dokument in ga znova dati v skupno rabo.<br><br>Ali ste prepričani, da želite izbrisati skupno rabo?",
		unshare_button: "Izbriši skupno rabo v storitvi Box",
		admin_share: "Storitve skupne rabe v storitvi Box:",
		admin_share_hover: "Uporabnikom omogoča, da dajo v skupno rabo dokument iz katerega koli repozitorija, ki ima omogočeno skupno rabo v storitvi Box. Skupna raba dokumenta vključuje kopiranje datoteke v storitev Box, ustvarjanje povezave in pošiljanje povezave v e-pošti.",
		admin_my_email_modifiable: "Uporabnikom omogoči spreminjanje e-poštnega naslova Pošlji iz",
		admin_my_email_modifiable_hover: "Za skupno rabo v storitvi Box je uporabnikov e-poštni naslov privzeto samo za branje in se ga pridobi iz preslikave uporabnikov in e-poštnih naslovov, ki predstavljajo uporabniške račune Box.<br><br>Izberite to možnost, da uporabnikom omogočite urejanje e-poštnih naslovov ob dodajanju v skupno rabo; veljavnost e-poštnih naslovov se ne preverja.",
		admin_repos_admin_user: "Skrbnik skupne rabe:",
		admin_repos_admin_user_hover: "Nastavite skrbnika skupne rabe, če imate namizje, ki imajo omogočene storitve skupne rabe za Box in ta repozitorij storitve Box izbran kot repozitorij za datoteke v skupni rabi.<br><br>Kliknite Nastavi in se prijavite v storitev Box z veljavnim skrbniškim računom za storitev Box.<br><br>Skrbnik skupne rabe mora biti skrbniški uporabnik storitve Box, ki je konfiguriran, da ima v storitvi Box neomejeno shrambo.",
		admin_repos_admin_user_not_set_warning: "Skrbnik storitve Box ni konfiguriran za izbrani repozitorij.<br><br>Storitve skupne rabe Box so onemogočene, dokler za izbrani repozitorij ne nastavite skrbnika storitve Box ali ne izberete drugega repozitorija storitve Box, kjer je konfiguriran skrbnik storitve Box.<br><br>Skrbnika storitve Box lahko nastavite v razdelku Storitve skupne rabe Box na strani Splošno za repozitorij.",
		admin_share_not_configured_warning: "Preden lahko začnete uporabljati storitve Box v skupni rabi, morate dodati in izbrati repozitorij Box s preverjanjem pristnosti strežnika.",
		/* Office Online Server settings */
		admin_office_online_title: "Konfiguracija zbirke Office Online",
		admin_office_online_server_enable: "Strežnik Office Online Server:",
		admin_office_online_server_enable_hover: "Določite, ali želite uporabnikom z dostopom do tega namizja omogočiti urejanje dokumentov Office s strežnikom Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Dovoli skupinsko urejanje",
		admin_office_online_allow_collaborative_editing_hover: "Dovoli hkratno urejanje istega dokumenta več uporabnikom. Počistite to možnost, če želite omejiti urejanje dokumenta na enega uporabnika.",
		admin_office_online_repository_not_set_warning: "Preden lahko omogočite storitve Office Online, morate storitev omogočiti v repozitoriju in določiti URL strežnika Microsoft Office Online. Kliknite <b>Repozitoriji</b>, izberite repozitorij in nato na zavihku <b>Urejanje integracije</b> storitev omogočite. Kliknite <b>Nastavitve > Splošno</b> in vnesite URL strežnika Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Določite, ali želite pri delu z dokumenti Office uporabiti strežnik Office Online Server.",
		admin_office_online_server_url: "URL strežnika Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Določite URL, prek katerega lahko druge aplikacije komunicirajo s strežnikom Office Online Server. Oblika URL-ja je http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Preverjeno",
	    admin_office_online_server_Failed: "<b>Ni uspelo</b>",

		admin_repcfg_office_online_service_p8_hover: "Če želite repozitorij nastaviti za uporabo strežnika Office Online, dodajte začetno datoteko predloge za vsako aplikacijo Office. Če predloga ni določena, bo uporabljena privzeta predloga.",	
		admin_repcfg_office_online_server_integration: "Integracija strežnika MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Preden lahko omogočite strežnik Office Online Server, morate določiti URL strežnika Microsoft Office Online Server. Kliknite Nastavitve > Splošno in vnesite URL",
		admin_repcfg_office_online_word_template_name: "Privzeta predloga Word",
		admin_repcfg_office_online_excel_template_name: "Privzeta predloga Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Privzeta predloga Powerpoint",
		admin_repcfg_office_online_blank_template_description: "To je privzeta predloga, ki bo uporabljena, če ne dodate svoje predloge.",
		/* Edit Service settings */
		admin_icn_edit_title: "Uredi konfiguracijo",	
	    admin_icn_edit_files_cleanup_interval: "Interval čiščenja začasnih datotek (v dnevih):",
	    admin_icn_edit_files_cleanup_interval_hover: "Nastavite lahko, koliko časa se bodo začasne datoteke hranile v odjemalcu za urejanje ICN.  Privzeti čas je 20 dni. Najdaljši čas je 20 dni. Najkrajši čas je 1 dan.",
	    admin_icn_edit_service_integration: "Integracija storitve urejanja",
	    admin_icn_edit_service_integration_intro: "Storitev urejanja omogoča uporabnikom, da zlahka dodajo ali urejajo datoteke v izvirnih aplikacijah, ki so nameščene v njihovih računalnikih.<br><br><b>Pomembno:</b> če omogočite storitev urejanja, morate shraniti konfiguracijo repozitorija, preden lahko urejate predhodno definirane kategorije.",
		admin_icn_edit_service: "Storitev urejanja:",
		admin_icn_edit_enable_hover: "Če želite uporabiti storitev urejanja, morate:<ul><li>Omogočiti storitev v repozitoriju</li><li>Omogočiti storitev na namizju v okolju</li><li>Namestiti odjemalca IBM Content Navigator Edit na delovnih postajah uporabnikov</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Omogoči",
		admin_icn_edit_disable: "Onemogoči",
		admin_icn_edit_create_new_category: "Nova kategorija",
		admin_icn_edit_delete_category: "Izbriši kategorijo",
		admin_icn_edit_edit_category: "Uredi kategorijo",
		admin_icn_edit_disable_category: "Onemogoči kategorijo",
		admin_icn_edit_enable_category: "Omogoči kategorijo",
		admin_icn_edit_new_category_dialog_title: "Nova kategorija",
		admin_icn_edit_edit_category_dialog_title:"Uredi kategorijo",
		admin_icn_edit_new_category_dialog_instructions: "Kategorija dokumenta vam omogoča, da predloge povežete z določenim tipom MIME za storitev urejanja. Tako lahko na primer povežete nabor predlog z datotekami PDF, tako da lahko uporabniki uveljavijo predloge, ko dodajo ali uredijo datoteke iz odjemalca IBM Content Navigator Edit. <br><br><b>Pomembno:</b> konfiguracije repozitorija morate shraniti, preden lahko dodate predloge v kategorijo, ki jo ustvarjate. ",
		admin_icn_edit_edit_category_dialog_instructions: "Konfiguracijo repozitorija morate shraniti, preden lahko dodate predloge v to kategorijo. ",
		admin_icn_edit_delete_category_dialog_instructions: "Ali želite izbrisati to kategorijo in vse predloge, ki so povezane s kategorijo?<br><br><b>Pomembno:</b> spremembe ne bodo trajne, dokler jih ne shranite v repozitorij. ",
		admin_icn_edit_category_label: "Kategorija: ",
		admin_icn_edit_category_discription_label:"Opis: ",
		admin_icn_edit_template_column_head:"Ime predloge",
		admin_icn_edit_category_duplicate_error_message: "Kategorija s tem ID-jem že obstaja. ",
		admin_icn_edit_word_category_description: "Ta kategorija določa predloge, ki so na voljo za dokumente Microsoft Word v storitvi za urejanje. ",
		admin_icn_edit_excel_category_description: "Ta kategorija določa predloge, ki so na voljo za dokumente Microsoft Excel v storitvi za urejanje. ",
		admin_icn_edit_powerpoint_category_description: "Ta kategorija določa predloge, ki so na voljo za dokumente Microsoft PowerPoint v storitvi za urejanje. ",

		icn_edit_add_template_dialog_title:"Dodaj predlogo ${0}",
		icn_edit_add_template_only_one_file_error: "Izberete lahko le eno datoteko.",
		icn_edit_add_template_file_type_error: "Podati morate veljavno datoteko predloge ${0}.<br><br>Izbrani dokument ima tip MIME ${1}.<br><br>Veljavni tipi MIME: ${2}.",
		icn_edit_change_template_dialog_title: "Urejanje predloge ${0}",
		icn_edit_action_in_new_menu_name:"Dokument ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "z zbirko Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "z aplikacijami namizja",
		icn_edit_new_document_dialog_title: "Nov dokument ${0}",
		icn_edit_new_document_dialog_intro: "Ustvarite nov dokument ${0} in ga dodajte v repozitorij. Dokument bo ustvarjen z izbrano predlogo storitve za urejanje.", 
		icn_edit_select_edit_service_template: "Izberi predlogo",
		icn_edit_edit_service_template: "Predloga storitve urejanja:",
		icn_edit_new_document_category_no_templates_message:"V tej kategoriji ni predlog. Obrnite se na svojega skrbnika, če želite v to kategorijo dodati predloge.",
		icn_edit_installer: "Namestitveni program za urejanje IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Nastavitve razreda in vloge",
		admin_repcfg_classes_and_roles_warning: "Če želite določiti razrede in uporabnike ali uporabniške skupine, ki bodo imele dovoljenje za ustvarjanje, urejanje in uporabo predlog ali ustvarjanje osnutkov dokumentov, ki so združljivi z Office Online Service in storitvijo urejanja.",
		admin_repcfg_classes_and_roles_click_warning: "kliknite tukaj.",
		/* Edit Service settings END */
		share_no_my_email_error: "Pri identifikaciji e-poštnega naslova, ki je zahtevan za skupno rabo dokumenta, je prišlo do težave.",
		share_no_my_email_error_explanation: "Prijavili ste te z ID uporabnika ${0}, vendar ID uporabnika ni preslikan v e-poštni naslov.",
		share_no_my_email_error_userResponse: "Znova se poskusite prijaviti ali se prijavite z drugim ID uporabnika. Če težave ni mogoče odpraviti, o njej obvestite skrbnika sistema.",
		share_no_my_email_error_adminResponse: "ID uporabnika ${0} ni preslikan v noben e-poštni naslov in namizje ${1} uporabnikom ne omogoča urejanja e-poštnega naslova za storitve skupne rabe za Box.<br><br>Poskusite eno od naslednjih rešitev:<br>Zagotovite, da je vtičnik za preslikavo e-pošte registriran.<br>Zagotovite, da datoteka emailMappingPlugin.json vključuje ID uporabnika ${0} in uporabnikov e-poštni naslov ter nato zgradite, konfigurirajte in registrirajte vtičnik za preslikavo e-pošte.<br>Če ne želite uporabiti vtičnik za preslikavo e-pošte ali imenika e-poštnih naslovov FileNet P8, ampak želite namesto tega uporabnikom omogočiti, da vnesejo svoj e-poštni naslov, ko dajo dokument v skupno rabo, lahko spremenite nastavitve namizja za storitve skupne rabe za Box, da uporabnikom omogočite pošiljanje povezave z drugega e-poštnega naslova.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Poznejša različica tega dokumenta je dana v skupno rabo, zato izbranih različic tega dokumenta ne morete dati v skupno rabo.",
		share_later_version_shared_error_explanation: "Zgodnejše različice dokumenta, ki je bil prej že dan v skupno rabo, ne morete dati v skupno rabo.",
		share_later_version_shared_error_userResponse: "Če želite poslati povezavo do poznejše različice dokumenta, morate najprej izbrati poznejšo različico in nato uporabiti dejanje Daj v skupno rabo.<br><br>Če želite dati v skupno rabo izbrano različico dokumenta, morate najprej izbrisati skupno rabo za poznejšo različico dokumenta.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Novo sporočilo",
		email_from: "Od:",
		email_to: "Za:",
		email_cc_link: "Kp",
		email_bcc_link: "Skp",
		email_cc: "Kp:",
		email_bcc: "Skp:",
		email_address_invalid: "Vnesite veljaven e-poštni naslov.",
		email_subject: "Zadeva:",
		email_message: "Sporočilo:",
		email_message_placeholder: "Dodajte sporočilo",
		email_attachments: "Priloge:",
		email_links: "Povezave:",
		email_send: "Pošlji",
		email_dont_send: "Ne pošlji",
		email_subject_reminder: "Opomnik za vnos zadeve",
		email_subject_reminder_confirm: "Ali želite poslati to sporočilo brez zadeve?",
		email_missing_from_error: "Pri prepoznavanju e-poštnega naslova pošiljatelja, ki je zahtevan za pošiljanje e-pošte, je prišlo do težave.",
		email_missing_from_error_explanation: "Prijavili ste te z ID uporabnika ${0}, vendar ID uporabnika ni preslikan v e-poštni naslov.",
		email_missing_from_error_userResponse: "Znova se poskusite prijaviti ali se prijavite z drugim ID uporabnika. Če težave ni mogoče odpraviti, o njej obvestite skrbnika sistema.",
		email_missing_from_error_adminResponse: "ID uporabnika ${0} ni preslikan v noben e-poštni naslov, namizje ${1} pa uporabnikom ne omogoča urejanja e-poštnega naslova pošiljatelja.<br><br>Poskusite eno od naslednjih rešitev:<br>Zagotovite, da je vtičnik za preslikavo e-pošte registriran.<br>Zagotovite, da datoteka emailMappingPlugin.json vključuje ID uporabnika ${0} in uporabnikov e-poštni naslov ter nato zgradite, konfigurirajte in registrirajte vtičnik za preslikavo e-pošte.<br>Če ne želite uporabljati vtičnika za preslikavo e-pošte ali imenika e-poštnih naslovov FileNet P8, ampak želite namesto tega uporabnikom omogočiti vnos lastnega e-poštnega naslov za pošiljanje e-pošte, lahko spremenite e-poštne nastavitve za namizja in uporabnikom omogočite spreminjanje e-poštnega naslova pošiljatelja.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokumenta ni mogoče odpreti.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator se ne more povezati z odjemalcem IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Namestite in zaženite odjemalca IBM Content Navigator Edit na svoji delovni postaji. Nato znova odprite dokument.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokumenta ni mogoče odpreti.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator se ne more povezati z odjemalcem IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Namestite in zaženite odjemalca IBM Content Navigator Edit na svoji delovni postaji. Nato znova odprite dokument.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator nima pravilne konfiguracije za skupno rabo dokumentov.",
		share_not_configured_error_explanation: "Skupna raba Box mora biti pravilno konfigurirana, preden je dokumente mogoče dati v skupno rabo.",
		share_not_configured_error_userResponse: "Obrnite se na skrbnika in ga prosite, da konfigurira skupno rabo Box.",
		share_not_configured_error_adminResponse: "Preden so dokumenti dani v skupno rabo, je treba konfigurirati naslednje postavke:<ul><li>V nastavitvah skrbniškega orodja mora biti omogočen upravitelj opravil.</li><li>V repozitoriju mora biti konfiguriran ID povezave upravitelja opravil.</li><li>V repozitoriju mora biti omogočena skupna raba.</li><li>Za skupno rabo na namizju mora biti izbran repozitorij Box.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Spremembe lastnosti niso bile shranjene za novo različico",
		checkin_cors_save_attributes_error_explanation: "Različica je bila ustvarjena, vendar spremembe lastnosti niso bile shranjene. Dokument je še vedno mogoče rezervirati.",
		checkin_cors_save_attributes_error_userResponse: "Odklenite dokument in posodobite lastnosti s postavko kontekstnega menija Lastnosti.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Spremembe lastnosti niso bile shranjene za novi dokument",
		add_cors_save_attributes_error_explanation: "Dokument je bil ustvarjen, vendar spremembe lastnosti niso bile shranjene.",
		add_cors_save_attributes_error_userResponse: "Posodobite lastnosti s postavko kontekstnega menija Lastnosti.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokumenta ni mogoče odpreti.",		
		edit_document_using_edit_service_error_explanation: "Dokumenta ni mogoče odpreti v storitvi Edit Service.",
		edit_document_using_edit_service_error_userResponse: "Obrnite se na skrbnika, če želite posodobiti Edit Service Integration.<br><br> Če mora uporabnik do tega dokumenta dostopati iz storitve urejanja, obiščite repozitorij na strani za integracijo urejanja in posodobite integracijo storitve urejanja tako, da razred vključite na seznam razredov, ki podpirajo spreminjanje s storitvijo urejanja.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokumenta ni mogoče odpreti.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokument je v uporabi s strani storitve Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Dokument morate shraniti in zapreti v storitvi Office Online Service, preden ga lahko oprete v storitvi urejanja.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Omogoči prenose Cross-Origin Resource Sharing (CORS)",

		/* Email Settings */
		admin_email_settings: "E-poštne nastavitve:",
		admin_email_settings_hover: "Določite vrsto e-poštne storitve, ki naj jo uporabljajo uporabniki. Ko omogočite e-poštno storitev, ki temelji na HTML, lahko uporabnikom omogočite spreminjanje e-poštnega naslova pošiljatelja. Če želite omogočiti e-poštno storitev, ki temelji na Javi, morate imeti brskalnik, ki podpira Javo.",
		admin_email_use_service: "Uporabi e-poštno storitev, ki temelji na HTML",
		admin_email_use_applet: "Uporabi e-poštno storitev, ki temelji na Javi",
		admin_email_can_modify_from: "Uporabnikom omogoči spreminjanje e-poštnega naslova pošiljatelja",
		admin_email_can_modify_from_hover: "E-poštnega naslova pošiljatelja privzeto ni mogoče spreminjati, pridobljen pa je s preslikavo uporabnikov in e-poštnih naslovov, ki predstavljajo uporabniške račune.<br><br>Izberite to možnost, da uporabnikom omogočite urejanje e-poštnih naslovov ob pošiljanju e-pošte; veljavnost e-poštnih naslovov se ne preverja.",
		admin_email_use_from_as_sender: "Uporabi e-poštni naslov pošiljatelja za pošiljatelja e-pošte",
		admin_email_use_from_as_sender_hover: "V uporabnikovi e-pošti je privzeto uporabljen veljaven e-poštni naslov pošiljatelja. Ta e-poštni naslov določa poštna seja CNMailSession v aplikacijskem strežniku. Izberite to možnost, da določite, da je v e-pošti uporabljen uporabnikov e-poštni naslov.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nove pripombe",
		addAnnotationDlg_labelContents: "Vsebina:",
		addAnnotationDlg_labelAccess: "Dostop:",
		addAnnotationDlg_labelPublic: "Javno",
		addAnnotationDlg_labelPrivate: "Zasebno",
		addAnnotationDlg_labelPrivateGroup: "Zasebno za skupino",
		addAnnotationDlg_labelGroup: "Skupina",
		addAnnotationDlg_labelCopiable: "To pripombo je mogoče prekopirati na drug strežnik.",
		addAnnotationDlg_buttonLabel_save: "Shrani",

		/* Skip navigation */
		skipNavigation_title_main: "Preskoči na glavno vsebino",
		skipNavigation_title_menu: "Preskoči na navigacijske gumbe",
		skipNavigation_label_main: "Preskoči na glavno vsebino",
		skipNavigation_label_menu: "Preskoči na navigacijske gumbe",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Upravljanje timskih prostorov",
		manage_teamspace_pane_instance_hdr: "Timski prostori",
		manage_teamspace_pane_template_hdr: "Predloge",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Pomakni se naprej",
		scroll_back: "Pomakni se nazaj",

		breadcrumb_separator_open: "Odpri vozlišče",
		breadcrumb_separator_close: "Zapri vozlišče",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Ni izbranih postavk.",

		/* eds */
		eds_url: "URL zunanje podatkovne storitve:",
		eds_request_timeout: "Časovna omejitev zahteve za storitev (v sekundah):",
		eds_is_required: "Uporabnikom prepreči izvajanje dejanj, ki spremenijo vrednosti lastnosti, ko zunanje podatkovne storitve niso na voljo.",

		/* eforms */
		eform_signing_pane_welcome: "Podpišite obrazec",
		eform_signing_button_label: "Podpis",
		eform_signing_pane_delete: "Izbrišite podpis",
		eform_signing_button_label_delete: "Izbriši",

		xtplugin_server_label: "URL strežnika za IBM FileNet Workplace XT",
		xtplugin_server_hover: "Vnesite URL strežnika, v katerem je razmeščen izdelek IBM FileNet Workplace XT (npr. http://localhost:8080/WorkplaceXT).",

		ecplugin_server_label: "URL strežnika za IBM eClient",
		ecplugin_server_hover: "Vnesite URL strežnika, v katerem je razmeščen izdelek IBM eClient (npr. http://localhost:9080/eClient/s).",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Dejanja za veliko število postavk lahko trajajo dlje. Ali želite nadaljevati?",
		large_number_actions_continue_button: "Nadaljuj",

		large_items_actions_confirmation_question: "Dejanja za velike postavke lahko trajajo dlje. Ali želite nadaljevati?",

		viewer_editproperties_title: "Potrditev",
		viewer_editproperties_title_warning: "Opozorilo",
		viewer_editproperties_save: "Shrani",
		viewer_editproperties_next: "Naslednji",
		viewer_editproperties_reset: "Ponastavi",
		viewer_editproperties_reset_hover: "Morebitni neshranjeni podatki se bodo ponastavili na predhodno shranjene vrednosti",
		viewer_editproperties_saveandgetnext: "Shrani in pridobi naslednjega",
		viewer_editproperties_saveandgetnext_hover: "Samodejno pridobi naslednji dokument, ko shranim spremembe",
		viewer_editproperties_prompt_save_changes: "Spremenili ste lastnosti naslednjih dokumentov<br>${0}<br><br>Ali želite shraniti spremembe?",
		viewer_editproperties_prompt_discard_changes: "Spremenili ste lastnosti naslednjih dokumentov<br>${0}<br><br>Vendar ena ali več lastnosti vsebuje neveljavno vrednost, zato sprememb ni mogoče shraniti. Lahko popravite neveljavne vednosti ali zavržete spremembe.<br>Ali želite popraviti vrednosti, prikazane v podoknu lastnosti?",
		viewer_comments_prompt_discard_changes: "Spremenili ste komentarje. Ali želite shraniti spremembe?",
		viewer_notelogs_prompt_discard_changes: "Spremenili ste dnevnike opomb. Ali želite shraniti spremembe?",
		social_collaborated_version: "Različica: ${0}",
		social_link_label: "Kdo ...",

		// social comments
		comments: "Komentarji",
		comments_add_hint: "Pritisnite tipko Enter, če želite dodati komentarje.",
		comments_hint: "Vnesite komentarje.",
		comments_label: "Pritisnite tipko Enter ali Tab, če želite shraniti komentarje. Pritisnite tipko Esc, če želite preklicati.",
		comments_delete_confirmation: "Ali želite izbrisati izbrani komentar?",
		comments_number: "Komentarji: ${0}",
		comments_save_new: "Spremenili ste komentarje. Ali želite zapreti okno brez shranjevanja sprememb?",

		notelogs: "Dnevniki opomb",
		notelogs_download: "Prenesi",
		notelog_modify: "Shrani spremembe",
		notelog_edit: "Uredi dnevnik opomb",
		notelog_create_newVersion: "Ustvari novo različico dnevnika opomb",
		notelog_add_hint: "Vnesite komentarje in pritisnite tipko Enter, da jih dodate.",
		notelog_hint: "Pritisnite Shift + Enter za vrstični pomik.",
		notelog_add_placeholder: "Pritisnite Enter, da dodate komentar v dnevnik opomb.",
		notelog_save_new: "Spremenili ste dnevnik opomb. Ali želite zapreti okno brez shranjevanja sprememb?",

		// P8 markings related
		cannot_remove_markings: "Nimate dovoljenja za odstranitev vrednosti oznake: {0}",

		// download count
		downloadcount: "Prenosi: {0}",
		downloadcount_single: "1 prenos",
		downloadcount_multiple: "Št. prenosov: {0}",
		downloadcount_none: "Tega ni še nihče prenesel",

		// recommendations
		recommendations: "Oznake Všeč mi je: {0}",
		recommendations_recommend: "Temu dodajte oznako Všeč mi je",
		recommendations_unrecommend: "Temu dodajte oznako Ni mi všeč",
		recommendations_you: "To vam je všeč",
		recommendations_you_and_another: "Vam in še 1 osebi je to všeč",
		recommendations_you_and_others: "Vam in še {0} drugim je to všeč",
		recommendations_another: "To je všeč 1 osebi",
		recommendations_others: "To je všeč {0} osebam",
		recommendations_none: "To ni všeč še nobeni osebi",

		// tags
		tags: "Oznake: ${0}",
		tags_delete: "Izbriši ${0}",
		tags_none: "Ni oznak za prikaz.",
		tags_add: "Dodaj oznake:",
		tags_hint: "Pritisnite tipko Enter, če želite dodati oznake.",
		tags_hover_help: "Podajte oznako ali seznam oznak, ki jih je mogoče uporabiti za iskanje dokumentov z isto oznako. Oznake lahko ločite z vejico (,), podpičjem (;) ali presledkom.",
		tags_hover_help_box: "Podajte oznako ali seznam oznak, ločenih z vejico, ki jih je mogoče uporabiti za iskanje dokumentov z isto oznako.",
		tags_no_access: "Nimate ustreznih dovoljenj za dodajanje oznak.",

		//task scheduler pane
		taskPane_tooltip: "Odpri pogled asinhronih opravil",
		taskPane_tree: "Usmerjevalno drevo podokna opravil",
		taskPane_allTasks: "Vsa opravila",
		taskPane_scheduledTasks: "Opravila po razporedu",
		taskPane_recurringTasks: "Ponavljajoča se opravila",
		taskPane_inProgressTasks: "Opravila v teku",
		taskPane_completedTasks: "Zaključena opravila",
		taskPane_failedTasks: "Neuspešna opravila",
		taskPane_disabledTasks: "Onemogočena opravila",
		taskPane_statusScheduled: "Terminirano",
		taskPane_statusInProgress: "V teku",
		taskPane_statusCompleted: "Dokončano",
		taskPane_statusFailed: "Ni uspelo",
		taskPane_statusPaused: "Začasno ustavljeno",
		taskPane_noItemSelected: "Postavka ni izbrana",
		taskSchedulerPane_scheduleInformation: "Informacije o razporedu",
		taskSchedulerPane_loginInformation: "Informacije o prijavi",
		taskSchedulerPane_startImmediately: "Začni takoj",
		taskSchedulerPane_recurrence: "Ponovitev",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Poročilo o razporedu",
		taskSchedulerPane_nameHoverHelp: "Vnesite ime opravila.",
		taskSchedulerPane_descriptionHoverHelp: "Za opravilo vnesite opis. Opis naj bo v pomoč pri razlikovanju med opravili.",
		taskSchedulerPane_startTimeHoverHelp: "Navedite, kdaj želite zagnati opravilo. Če želite opravilo zagnati zdaj, izberite Začni takoj.",
		taskSchedulerPane_recurrenceHoverHelp: "Za opravilo lahko načrtujete ponavljajoče se izvajanje.",
		taskSchedulerPane_endTimeHoverHelp: "Navedite, kdaj želite zaustaviti izvajanje opravila. Opravilo se izvaja od načrtovanega časa začetka do načrtovanega časa konca.",
		taskSchedulerPane_usernameHoverHelp: "Za ponavljajoča se opravila vnesite uporabniško ime, da storitvi omogočite preverjanje pristnosti ob zagonu opravila.",
		taskSchedulerPane_passwordHoverHelp: "Za ponavljajoča se opravila vnesite geslo navedenega uporabnika, da storitvi omogočite preverjanje pristnosti ob zagonu opravila.",
		taskSchedulerPane_notification: "Obvestilo",
		taskSchedulerPane_emailAddress: "E-poštni naslov",
		taskSchedulerPane_emailAddressHoverHelp: "Vnesite e-poštni naslov, na katerega želite prejemati obvestila o statusu opravila.",
		taskSchedulerPane_intervalHoverHelp: "Določite čas izvajanja ponavljajočega se opravila. Interval lahko nastavite v urah, dnevih, tednih ali mesecih.",
		taskSchedulerPane_scheduledStartTime: "Načrtovani čas začetka",
		taskSchedulerPane_startTime: "Čas začetka",
		taskSchedulerPane_title: "Razpored",
		taskSchedulerPane_runNow: "Zaženi zdaj",
		taskSchedulerPane_runOnce: "Zaženi enkrat",
		taskSchedulerPane_runAtSchedule: "Zaženi v skladu z razporedom",
		taskSchedulerPane_repeats: "Ponavljanje",
		taskSchedulerPane_repeatsEvery: "Ponavljanje v intervalu",
		taskSchedulerPane_hourly: "Enkrat na uro",
		taskSchedulerPane_daily: "Enkrat na dan",
		taskSchedulerPane_weekly: "Enkrat na teden",
		taskSchedulerPane_monthly: "Enkrat na mesec",
		taskSchedulerPane_yearly: "Enkrat na leto",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Datum začetka",
		taskSchedulerPane_after: "Po",
		taskSchedulerPane_ending: "Datum zaključka",
		taskSchedulerPane_times: "čas(s)",
		taskSchedulerPane_days: "dan(dnevi)",
		taskSchedulerPane_hours: "ura(-e) v dnevu",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Konec (v dneh)",
		taskSchedulerPane_never: "Nikoli",
		taskSchedulerPane_categorization: "Kategorizacija",
		taskSchedulerPane_scheduleTask: "Dodaj opravilo v razpored",
		taskInformationPane_details: "Podrobnosti",
		taskInformationPane_errors: "Napake",
		taskInformationPane_taskInstances: "Primerki opravil",
		taskInformationPane_audits: "Beleženja",
		taskInformationPane_results: "Rezultati",
		asyncTasks: "Asinhrona opravila",

		//entry template pane
		search_all_entry_templates: "Iskanje v vseh predlogah vnosa.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Ogled celotnega spletnega mesta",
		mobilesite: "Ogled mobilnega spletnega mesta",
		profile: "Upravljaj profil",
		office_template: "Predloga zbirke Office:",
		select_office_template: "Izberite predlogo zbirke Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Izbranih dokumentov ni mogoče odpreti v prikazovalniku z dejanjem Spajanje in razdelitev.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Prikazovalnik, konfiguriran za dokumente PDF in TIFF, ne podpira dejanja Spajanje in razdelitev.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Prosite svojega skrbnika, da konfigurira takšen prikazovalnik za dokumente PDF in TIFF, ki bo podpiral dejanje Spajanje in razdelitev, kot je prikazovalnik Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Izbranih dokumentov PDF ni mogoče odpreti v prikazovalniku z dejanjem Spajanje in razdelitev.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Prikazovalnik, konfiguriran za dokumente PDF, ne podpira dejanja Spajanje in razdelitev.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Prosite svojega skrbnika, da konfigurira takšen prikazovalnik za dokumente PDF, ki bo podpiral dejanje Spajanje in razdelitev, kot je prikazovalnik Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Izbranih dokumentov TIFF ni mogoče odpreti v prikazovalniku z dejanjem Spajanje in razdelitev.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Prikazovalnik, konfiguriran za dokumente TIFF, ne podpira dejanja Spajanje in razdelitev.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Prosite svojega skrbnika, da konfigurira takšen prikazovalnik za dokumente TIFF, ki bo podpiral dejanje Spajanje in razdelitev, kot je prikazovalnik Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Izbranih dokumentov ni mogoče odpreti v prikazovalniku z dejanjem Spajanje in razdelitev.",
		document_builder_unsupported_documents_error_explanation: "Dejanje Spajanje in razdelitev deluje samo z dokumenti PDF in TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Izberite podprte dokumente in poskusite znova.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Nekateri izbranih dokumentov ni mogoče odpreti v prikazovalniku z dejanjem Spajanje in razdelitev.",
		document_builder_some_unsupported_documents_error_explanation: "Dejanje Spajanje in razdelitev deluje samo z dokumenti PDF in TIFF, odprtimi v istem repozitoriju.",
		document_builder_some_unsupported_documents_error_userResponse: "Podprti dokumenti bodo odprti v prikazovalniku.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Pri sprostitvi spremenjene vsebine je prišlo do napake.",
		document_builder_checkin_failed_explanation: "Prikazovalnik je med prijavljanjem spremenjene vsebine prejel odgovor o napaki.",
		document_builder_checkin_failed_userResponse: "Prosite skrbnika sistema, naj pregleda dnevniške datoteke spletnega aplikacijskega strežnika.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokumenta ni mogoče odpreti.",
		no_viewer_to_view_error_explanation: "Skrbnik sistema je blokiral ogled tega dokumenta. Če morate dostopati do tega dokumenta, ga prenesite.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Vsebine ni bilo mogoče zgraditi.",
		document_build_failed_userResponse: "Prosite skrbnika sistema, naj pregleda dnevniške datoteke pregledovalnika.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokumenta ni bilo mogoče odpreti v načinu za spajanje in razdelitev.",
		document_builder_open_failed_userResponse: "Prosite skrbnika sistema, naj pregleda dnevniške datoteke pregledovalnika.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Sistema ni mogoče preklopiti v način za spajanje in razdelitev.",
		document_builder_switch_failed_userResponse: "Prosite skrbnika sistema, naj pregleda dnevniške datoteke pregledovalnika.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenti",
		print_service_page_setup_tab_title: "Priprava strani",
		print_service_OD_print_tab_title: "Možnosti tiskalnika",
		print_service_status_merging: "Združevanje dokumentov ...",
		print_service_status_converting: "Pretvarjanje dokumentov ...",
		print_service_status_formatting: "Oblikovanje dokumentov za tiskanje ...",
		admin_print_service_maximum_number_to_print: "Največje število dokumentov, ki jih je dovoljeno natisniti:",
		admin_print_service_maximum_size_to_print: "Največja količina podatkov, ki jo je dovoljeno natisniti (v MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Določite največje število dokumentov, ki jih bodo lahko uporabniki natisnili naenkrat. Največje privzeto število je 50, Če tiskanja ne želite omejiti glede na število dokumentov, vrednost te omejitve nastavite na 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Omejitev:</b> ta nastavitev ni podprta v IBM Content Manager OnDemand.<br/><br/>Določite največjo količino podatkov, ki jih je mogoče natisniti s storitvijo tiskanja IBM Daeja ViewONE.<br /><br />Skupna velikost vsakega izbranega dokumenta ne sme presegati te količine.<br/><br/>Privzeta omejitev je 200 MB. Če omejitev nastavite na več kot 200 MB, lahko to vpliva na zmogljivost sistema. Če tiskanja ne želite omejiti glede na velikost dokumenta, vrednost te omejitve nastavite na 0",
		// error printing
		print_service_error_printing: "Med tiskanjem je prišlo do napake.",
		print_service_error_printing_userResponse: "Prosite svojega skrbnika sistema, da pregleda dnevniške datoteke storitve za tiskanje.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Izbrani dokumenti so preveliki za tiskanje",
		print_service_max_content_error_explanation: "Izbrani dokumenti presegajo omejitev ${0} MB podatkov.",
		print_service_max_content_error_userResponse: "Izberite manj dokumentov ali izberite manjše dokumente ter ponovno zaženite tiskanje. Obrnete se lahko tudi na svojega skrbnika sistema in ga prosite, da poveča največjo skupno velikost elementov, ki jih lahko na tem namizju natisnete naenkrat.",
		print_service_max_content_error_0: "največje število elementov",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Elementov ni mogoče natisniti.",
		print_service_max_number_selected_error_explanation: "Naenkrat lahko natisnete do ${0} elementov. Vi poskušate natisniti ${1} elementov.",
		print_service_max_number_selected_error_userResponse: "Izberite manj elementov in jih poskusite znova natisniti. Obrnete se lahko tudi na svojega skrbnika sistema in ga prosite, da poveča največjo število elementov, ki jih lahko na tem namizju natisnete naenkrat.",
		print_service_max_number_selected_error_0: "največje število elementov",
		print_service_max_number_selected_error_1: "število elementov",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


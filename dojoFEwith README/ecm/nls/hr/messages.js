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
		welcome_user: "Dobro došli, ",
		about: "Informacije",
		all: "Sve",
		help: "Pomoć",
		user_session: "Korisnička sesija",
		user_session_for: "Korisnička sesija za ${0}",
		user_session_for_with_container: "Korisnička sesija za ${0} (${1})",
		tools: "Alati",
		login: "Prijava",
		logout: "Odjava",
		search: "Traži",
		saved_searches: "Spremljena pretraživanja",
		content_analytics: "Analiziraj sadržaj",
		reset: "Reset",
		reset_hover: "Svi podaci koji nisu spremljeni u bilo kojoj od kartica, resetirat će se na prethodno spremljene vrijednosti.",
		reset_default: "Očisti sve",
		reset_default_hover: "Briše polje Trenutna oznaka na svim karticama.",
		locale: "Lokalizacija:",
		up: "Gore",
		down: "Dolje",
		restore: "Vrati",
		maximize: "Povećaj",
		values_label: "Vrijednosti",
		value_label: "Vrijednost:",
		path_label: "Staza:",
		new_label: "Nova:",
		back_label: "Natrag",
		clear: "Očisti",
		set: "Postavi...",
		browse: "Pregled",
		work: "Rad",
		connect: "Poveži",
		documents: "Dokumenti",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM i IBM logo su zaštitni znakovi u vlasništvu IBM Corporation i registrirani su u mnogim pravnim nadležnostima u svijetu. Java i svi zaštitni znakovi i logoi bazirani na Javi su zaštitni znakovi ili registrirani zaštitni znakovi u vlasništvu Oraclea i/ili njegovih udruženja. Oracle Outside In Technology je ovdje uključen pod licencom ograničene upotrebe i može se koristiti samo zajedno s ovom aplikacijom. Ovaj program se licencira u skladu s odredbama licencnog ugovora koji dolazi s programom.  Licencni ugovor se nalazi ili u folderu direktorija programa ili u knjižnici s nazivom \"License\" ili \"Non_IBM_License\", ako je primjenjivo, a možete ga dobiti i u tiskanom obliku. Molim, pažljivo pročitajte ovaj ugovor prije upotrebe programa. Upotrebom programa pristajete na ove uvjete. ",
		edit: "Uredi",
		cancel: "Opoziv",
		close: "Zatvori",
		close_all: "Zatvori sve kartice",
		close_others: "Zatvori ostale kartice",
		ok: "OK",
		yes: "Da",
		no: "Ne",
		open: "Otvori",
		refresh: "Osvježi",
		refresh_cabinets: "Osvježi sve ormariće",
		delete_text: "Izbriši",
		export_config: "Eksport konfiguracije",
		description: "Opis",
		true_label: "True",
		false_label: "False",
		error: "Greška",
		error_reference_hover: "Potražite dodatne informacije o ovoj greški na www.ibm.com.",
		url_label: "URL",
		default_label: "Default",
		ibm_label: "IBM",
		light_label: "Svjetlo",
		dark_label: "Tamno",
		save: "Spremi",
		saveAs: "Spremi kao...",
		save_and_close: "Spremi i zatvori",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ništa",
		Name: "Naziv",
		"${NAME}": "Naziv",
		mime_type: "MIME tip",
		mime_type_contains_label: "MIME tip sadrži",
		mime_type_header: "MIME tip",
		mime_type_icon: "Ikona MIME tipa",
		casesearch: "Predmet",
		item: "Stavka",
		no_mime_type: "Ova stavka nema sadržaja.",
		items_selected: "${0} stavki izabrano.",
		requestor: "Zatražio",
		scheduledStartTime: "Raspoređeno vrijeme početka",
		isRecurring: "Vraća se",
		weeks: "Tjedni",
		days: "Dani",
		hours: "Sati",
		endTime: "Vrijeme završetka",
		username: "Ime korisnika",
		password: "Lozinka",
		serverURL: "URL poslužitelja",
		enable: "Omogući",
		disable: "Onemogući",
		finish: "Završetak",
		previous: "Prethodno",
		next: "Sljedeće",
		schedule: "Raspored",
		removeFromThisList: "Ukloni s ove liste",
		status: "Status",
		scheduledEndTime: "Raspoređeno vrijeme završetka",
		type: "Tip",
		mode: "Način",
		startTime: "Vrijeme početka",
		createdBy: "Kreirao",
		nextScheduledTime: "Sljedeće raspoređeno vrijeme",
		id: "ID",
		duration: "Trajanje",
		repeatCycle: "Frekvencija",
		taskTypeName: "Tip zadatka",
		to: "do",
		filter: "Filter:",
		error_message: "Poruka greške",

        file_type: "Tip dokumenta",
        word_template_name: "Naziv Word predloška",
        excel_template_name: "Naziv Excel predloška",
        powerpoint_template_name: "Naziv PowerPoint predloška",
        template_description: "Opis predloška",
        action_add_template: "Dodaj",
        action_change_template: "Uredi",      
        action_edit_template_properties: "Svojstva",
        add_presentation_template: "Dodaj prezentacijski predložak",
    	add_spreadsheet_template: "Dodaj predložak proračunske tablice",
    	add_doc_template: "Dodaj predložak dokumenta",    	
    	file_type_doc_hover: "Morate navesti važeću datoteku predloška za dokument obrade teksta.<br><br>Važeći MIME tipovi: ${0}",
    	file_type_doc_error: "Morate navesti važeću datoteku predloška za dokument obrade teksta.<br><br>Izabrani mime tip dokumenta: ${0}<br><br>Važeći MIME tipovi: ${1}",
    	file_type_presentation_hover: "Morate navesti važeću datoteku predloška prezentacije.<br><br>Važeći MIME tipovi: ${0}",
    	file_type_presentation_error: "Morate navesti važeću datoteku predloška prezentacije.<br><br>Izabrani mime tip dokumenta: ${0}<br><br>Važeći MIME tipovi: ${1}",
    	file_type_spreadsheet_hover: "Morate navesti važeću datoteku predloška proračunske tablice.<br><br>Važeći MIME tipovi: ${0}",
    	file_type_spreadsheet_error: "Morate navesti važeću datoteku predloška proračunske tablice.<br><br>Izabrani mime tip dokumenta: ${0}<br><br>Važeći MIME tipovi: ${1}",
    	office_online_only_one_template_error: "Možete izabrati samo jednu datoteku.",
    	change_presentation_template: "Uredi prezentacijski predložak",
    	change_spreadsheet_template: "Uredi predložak proračunske tablice",
    	change_doc_template: "Uredi predložak dokumenta",
    	change_button: "Uredi",
	    new_document_dialog_doc_title: "Novi dokument",
	    new_document_dialog_presentation_title: "Nova prezentacija",
	    new_document_dialog_spreadsheet_title: "Nova proračunska tablica",
	    new_document_dialog_title_label: "Naslov:",
	    new_document_dialog_title_hover: "Unesite naslov ovog dokumenta.",
	    new_document_dialog_title_missing_message: "Morate navesti naslov.",
	    office_online_save_before_adding_templates_title: "Spremanje promjena u spremište",
	    office_online_save_before_adding_templates_error: "Ne možete dodati Office predloške dok ne spremite promjene koje ste napravili na spremištu. Kliknite <b>Spremi i zatvori</b> i zatim ponovno otvorite spremište i dodajte Office predloške.",
	    copy_to_OOS_dialog_doc_title: "Novi dokument",
	    office_online_checkin_cancelcheckout_message: "Ovaj dokument se uređuje u proizvodu Microsoft Office Online. Dokument ne možete prijaviti ili otkazati njegovu odjavu dok je otvoren u proizvodu Microsoft Office Online.",
	    new_document_classification: "Klasifikacija:",
	    new_document_classification_help: "Resetira klasu, svojstva i nadređeni folder izvornog dokumenta, ako on postoji. Kad dodajete dokument koristeći predložak unosa, automatski će se izabrati predložak unosa izvornog dokumenta (ako on postoji). Svojstva izvornog dokumenta koriste se kao default vrijednosti, ali će se zadržati folder i klasa navedeni u predlošku unosa.",
		new_document_classification_use_source_document: "Koristi izvorni dokument:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} ikona tipa",
		repository_name_and_type: "${0} Naziv i tip",
		select_class_label: "Izbor ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Pogled Detalji",
		detail_view_button: "Detalji",
		magazine_view_button_tooltip: "Pogled na magazin",
		magazine_view_button: "Časopis",
		filmstrip_view_button_tooltip: "Pogled filmske vrpce",
		filmstrip_view_button: "Filmska vrpca",

		magazine_view_show: "Pokaži u pogledu na magazin",
		detail_view_show: "Pokaži u detaljnom pogledu",

		total_count_item: "stavka",
		total_count_items: "stavke",
		total_count_more_items: "Više od ${0} stavki",

		extension_changed: "Ekstenzija datoteke koju ste izabrali ne odgovara onoj od originala.  Izaberite drugu datoteku.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Izabrani preglednik ne podržava sve tipove datoteka. Ako spremite mapiranje ovog preglednika, možete naići na probleme prilikom gledanja dokumenata. Preporuča se da izaberete preglednik koji podržava sve tipove datoteka ako je izabrana opcija Svi tipovi  datoteka.<br><br><b>Savjet:</b> Sljedeći preglednici podržavaju sve tipove datoteka:<ul><li>Preglednik apleta</li><li>AJAX preglednik</li><li>HTML konverzija</li><li>PDF konverzija</li><li>Web pretražitelj</li></ul>",
		file_type_any: "Svi tipovi datoteka",
		file_type_any_hover: "Izaberite ovu opciju ako želite koristiti izabrani preglednik za pregled svih dokumenata, bez obzira na tip datoteke. Ova opcija je podržana u sljedećim preglednicima:<br><br><ul><li>Preglednik apleta</li><li>AJAX preglednik</li><li>HTML konverzija</li><li>PDF konverzija</li><li>Web pretražitelj</li></ul><br><br><b>Zapamtite:</b> Ako želite koristiti određene preglednike većinu vremena, sva mapiranja koja kreirate i koja koriste tu opciju trebaju se pomaknuti na kraj mape vašeg preglednika. ",
		file_type_input: "Novi tip datoteke:",

		mime_type_input: "Novi MIME tip:",
		mime_type_input_invalid: "Novi MIME tip ne smije sadržavati niti jedan od sljedećih znakova: ,",
		mime_type_available: "Raspoloživi MIME tipovi",
		mime_type_selected: "Izabrani MIME tipovi",
		file_type_input: "Novi tip datoteke:",
		file_type_input_invalid: "Novi tip datoteke ne može sadržavati nijedan od sljedećih znakova: ,",
		file_type_available: "Dostupni tipovi datoteka",
		file_type_selected: "Izabrani tipovi datoteka",
		file_type_header: "Tip datoteke",
		viewer: "Preglednik:",
		viewer_viewer: "Preglednik",
		viewer_view: "Pogled",
		viewer_preview: "Pregled",
		viewer_merge_and_split: "Spoji i razdvoji",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Samo pregled",
		preview_only_label: "(pregled)",
		preview_only_hover: "Ovo mapiranje preglednika koristit će se samo kad korisnik klikne <b>Pregled</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Ovo spremište ne podržava pregledavanje. Izaberite drugo spremište.",

		repository_community_teamspace_message: "Drugo spremište je već dodijeljeno kao spremište knjižnica zajednice. Ako želite nastaviti koristiti postojeće spremište kao spremište knjižnica zajednice, izaberite <b>Ne</b> prije nego spremite vaše promjene da biste spriječili zamjenu postojećeg direktorija s ovim spremištem.",

		favorites_empty: "Još nemate favorita.",
		syncItems_empty: "Još nemate sinkroniziranih datoteka,.",

		root_folder_id: "ID osnovnog foldera",
		unified_searches: "Pretraživanja kroz više spremišta:",
		max_results: "Broj rezultata:",
		direct_retrieve_enabled: "Izravni dohvat:",
		itemTypesToDisplay: "Prikaz tipova stavki:",
		allItemTypes: "Svi tipovi stavki",
		include_attr_group_name: "Opisi grupa atributa u prikazanim nazivima atributa:",
		admin_repcfg_include_attr_group_name_hover: "Po defaultu, opis grupe atributa sadržan je u nazivima za atribute grupe atributa. Ovo pomaže korisnicima da vide kojoj grupi atributa pripada atribut prilikom rada s atributima.<br>Na primjer, korisnici mo9gu vidjeti sljedeći naziv za atribut grupe atributa: Postavke dokumenta.Dokument Tip.<br><br>Ako onemogućite ovu opciju, koristi se samo opis atributa za naziv atributa iz grupe atributa.<br>Na primjer, korisnici će vidjeti ovaj naziv: Dokument Tip.<br><br>Bez opisa grupe atributa, korisnici možda neće moći razaznati da li je Dokument Tip samo jednostavni atribut ili atribut grupe atributa.",
		documentItemTypesOnly: "Samo tipovi modela dokumenata",
		object_store: "Simbolički naziv spremišta objekata:",
		object_store_display_name: "Prikazani naziv spremišta objekata:",
		teamspaceUpgradeMsg: "Vaš timski prostor će se ažurirati kad spremite konfiguraciju spremišta. Ako imate više timskih prostora, ažuriranje može potrajati nekoliko minuta.",
		synchUpgradeMsg: "Modul sinkronizacije na ovom spremištu će biti ažuriran kad spremite vašu konfiguraciju spremišta.",
		protocol: "Protokol:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID CMIS spremišta:",
		cmis_url: "URL dokumenta CMIS AtomPub usluge vezivanja:",
		trace_level: "Razina praćenja",
		trace_dir: "Direktorij praćenja",
		temp_dir: "Privremeni direktorij",
		show_document_location: "Pokaži lokaciju dokumenta",
		max_folders: "Maksimalno foldera",
		afp_conversion: "AFP konverzija",
		line_conversion: "Konverzija podataka redova",
		max_hits: "Maksimalno natuknica",
		folder_search_expresssion: "Izraz pretraživanja foldera",
		max_item_types: "Maksimalno tipova stavki",
		max_worklists: "Maksimalno radnih lista",
		update_storage_collection: "Ažuriranje zbirke pohrana",
		include_mime_types_in_search_results: "Uključi MIME tipove u rezultate pretraživanja",
		object_type: "Tip objekta",
		object_type_document: "Dokumenti",
		object_type_folder: "Folderi",
		file_label: "Datoteka:",
		plugin_jarfile_path_label: "Staza JAR datoteke:",
		plugin_classfolder_path_label: "Staza datoteke klase:",
		plugin_classname_label: "Naziv klase:",
		plugin_id_label: "ID plug-ina:",
		class_label: "Klasa",
		configuration: "Konfiguracija",
		connect_repository: "Poveži...",
		server_type: "Tip poslužitelja",
		timeout_in_seconds: "Timeout (u sekundama):",
		default_search_template: "Default pretraživanje",
		search_filtered_properties: "Pretražljiva svojstva",
		property_contains_label: "Svojstvo sadrži",
		class_contains_label: "Klasa sadrži",
		search_filtered_operators: "Operatori pretraživanja",
		default_search_results: "Rezultati pretraživanja",
		data_type: "Tip podataka",
		status_bar: "Statusna traka",
		operators_for: "Operatori za:",
		currentUser: "Trenutni korisnik",
		nameContains: "Naziv sadrži",
		searchFor: "Traži",
		server_autentication: "Provjera ovlaštenja (OAuth 2.0 s JWT)",
		standard_authentication: "Standardna provjera ovlaštenja (3-legged OAuth2.0)",
		developer_authentication: "Provjera ovlaštenja razvojnog programera",
		enterprise_id: "ID poduzeća:",
		public_key_id: "ID javnog ključa:",
		private_key_path: "Staza datoteke privatnih ključeva:",
		server_user_email: "E-mail korisnika poslužitelja",

		filter_builder_tooltip: "Definirajte filter",

		// Launch bar
		launchbar_home: "Otvori početak",
		launchbar_favorites: "Otvori favorite",
		launchbar_browse: "Otvori pogled pregleda",
		launchbar_browse_popup: "Otvori iskočnu listu pregleda",
		launchbar_search: "Otvori pogled pretraživanja",
		launchbar_search_popup: "Otvori iskočnu listu pretraživanja",
		launchbar_teamspaces: "Otvori pogled timskog prostora",
		launchbar_teamspaces_popup: "Otvori iskočnu listu timskog prostora",
		launchbar_work: "Otvori pogled rada",
		launchbar_work_popup: "Otvori iskočnu listu rada",
		launchbar_entry_templates: "Otvori pogled predloška unosa",
		launchbar_entry_templates_popup: "Otvori iskočnu listu predložaka unosa",
		launchbar_admin: "Otvori pogled administracije",

		admin_sync_server: "Usluge sinkronizacije",
		admin_settings: "Postavke",
		admin_interface_text: "Oznake",
		admin_interface_text_desktop: "Desktop:",
		admin_desktops: "Desktop",
		admin_repositories: "Spremišta",
		admin_mobile: "Mobilni uređaj",
		admin_menus: "Izbornici",
		admin_reason_codes: "Razlozi za redakturu",
		admin_plugins: "Plug-inovi",
		admin_plugins_state_enabled: "Plug-in je omogućen",
		admin_plugins_state_disabled: "Plug-in je onemogućen",
		admin_plugins_version: "Verzija:",
		admin_plugins_version_heading: "Verzija",
		admin_plugins_icon: "Plug-in ikona",
		admin_viewer_mapping_icon: "ikona Mapiranja preglednika",
		admin_viewer_defs: "Mape preglednika",
		admin_viewer_dialog_title: "Mapiranje",
		admin_viewer_dialog_new_title: "Novo mapiranje",
		admin_viewer_dialog_instructions: "Mapiranje specificira koji preglednik koristiti za datoteke u spremištu. Možete kreirati višestruka mapiranja da navedete različite preglednike za različite tipove datoteka. Možete koristiti MIME tip ili ekstenziju datoteke za definiranje mapiranja. Mapiranja s ekstenzijama datoteka će se mapirati na nazive dokumenata. Na primjer, mapiranje s tipom datoteke postavljenim na gif će se mapirati na nazive dokumenata koji završavaju s ekstenzijom .gif",
		admin_desktop_viewer_defs: "Mapa preglednika:",
		admin_desktop_viewer_defs_hover: "Mapa preglednika navodi koji preglednik se koristi za otvaranje drugih tipova dokumenata u spremištu.<br><br>Možete kreirati nove mape preglednika u odjeljku administracijskog alata <b>Mape preglednika</b>.",
		admin_desktops_used: "Korišteno u desktopima",
		admin_desktop_additional_settings: "Dodatne postavke:",
		admin_default_desktop: "Postavi za default desktop",
		admin_default_desktop_header: "Default desktop",
		admin_layout_tab_title: "Razmještaj",
		admin_desktop_icon: "Desktop ikona",

		// Themes
		admin_themes: "Teme",
		admin_theme_list_instructions: "Možete kreirati temu da pojednostavite prilagodbu Web klijenta vašoj organizaciji. Možete kreirati više tema ako imate potrebu za upotrebom više različitih boja, fontova ili logotipa za različite desktope u vašoj okolini.<br><br>Nakon što ste kreirali temu, možete ju primijeniti na desktop konfiguriranjem teme na kartici <b>Izgled</b> na desktopu.",
		admin_theme_instructions: "Kreirajte temu za kontrolu boja i fontova koji se prikazuju na Web klijentu. Dodatno, možete koristiti temu za promjenu logotipa, naziva aplikacija i teksta autorskih prava koji se prikazuju na stranici za prijavu i u uvodniku.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nova tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "Želite li izbrisati izabrane teme?\nIzbrisano je ${0} tema.",
		admin_theme_color: "Boja",
		admin_theme_text: "Tekst",
		admin_theme_solid: "Čvrsto",
		admin_theme_gradient: "Stupnjevito",
		admin_theme_box: "Box",
		admin_theme_color_label: "Boja ${0}:",
		admin_theme_name_invalid: "Naziv teme ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "ID teme mora biti jednoznačan i ne možete mijenjati ID nakon što ste spremili temu.<br><br>ID može sadržavati samo alfanumeričke znakove.",
		admin_theme_name_hover: "Naziv ne smije sadržavati sljedeće znakove: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatski",
		admin_theme_logo_url_hover: "Unesite URL logo datoteke. Ako je logo na istom poslužitelju Web aplikacija kao i Web klijent, unesite relativni URL, na primjer: /mycustomizations/banner_logo.png<br><br>Za logo se preporučuje prozirna pozadina.",
		admin_theme_color_palette_title_heading: "Paleta boja",
		admin_theme_color_palette_help_text: "Kreirajte paletu boja za svoju temu pomoću heksadecimalnih vrijednosti ili izbornika boja. Možete dodati boja koliko god želite.",
		admin_theme_color_add_button_label: "Dodaj boju",
		admin_theme_color_remove_button_label: "Ukloni broju",
		admin_theme_global_title_heading: "Elementi kroz cijelu aplikaciju",
		admin_theme_global_font: "Obitelj fonta:",
		admin_theme_global_font_hover: "Izaberite font koji se koristi u Web klijentu. Fontovi su navedeni prema redoslijedu prednosti; sljedeći font na listi se koristi samo ako prethodni font nije instaliran na klijentskom stroju.",
		admin_theme_global_framework_color_label: "Boja frameworka:",
		admin_theme_global_framework_color_hover: "Izaberite boju koja se koristi za sljedeće elemente:<ul><li>Naslovne trake na dijaloškim okvirima</li><li>Boja za isticanje na vrhu izabrane kartice</li><li>Ikone za pogled na listu sadržaja (pogled detalja, pogled časopisa, pogled filmske vrpce)</li></ul><br>Ova boja se ne koristi za odjelitelje između odjeljaka Web klijenta. Ako želite promijeniti boju odjelitelja, morate kreirati plug-in da osigurate prilagođenu CSS datoteku.",
		admin_theme_color_global_toolbar: "Boja globalne trake s alatima:",
		admin_theme_color_global_toolbar_hover: "Ako uključujete globalnu traku s alatima u Web klijenta, izaberite boju trake s alatima.<br><br><b>Savjet:</b> Traka s alatima se prikazuje u uvodniku na vrhu Web klijenta i zato boja trake s alatima treba biti komplementarna boji uvodnika.",
		admin_theme_global_selected_color: "Izabrana boja stavke:",
		admin_theme_global_selected_color_hover: "Izaberite boju koja se koristi nakon izbora stavki u stablu pregleda, stablu pretraživanja i listi sadržaja.<br><br>Iz ove boje se izvodi boja kod lebdenja (boja koja se koristi kad korisnik lebdi iznad stavke).",
		admin_theme_global_link_color: "Boja veze:",
		admin_theme_global_link_color_hover: "Izaberite boju koja se koristi za sve URL-ove u Web klijentu na koje je moguće kliknuti. Na primjer, ova boja se koristi u vezama 'Saznajte više' koje se prikazuju kroz cijeli Web klijent.",
		admin_theme_login_title_heading: "Elementi stranice za prijavu",
		admin_theme_page_background_label: "Boja pozadine stranice za prijavu:",
		admin_theme_login_page_background_hover: "Izaberite boju za prikaz iza okvira za prijavu.",
		admin_theme_login_pane_background_label: "Boja pozadine okvira za prijavu:",
		admin_theme_login_pane_background_hover: "Izaberite boju za prikaz za okvir za prijavu. Ova boja treba biti komplementarna boji pozadine stranice za prijavu.",
		admin_theme_text_color: "Boja teksta:",
		admin_theme_login_pane_text_color_hover: "Izaberite boju za tekst okvira za prijavu. Ova boja se koristi za tekst dobrodošlice i oznake polja. Ova boja treba biti jasna u odnosu na boju pozadine okvira za prijavu.",
		admin_theme_copyright_text: "Tekst autorskog prava:",
		admin_theme_copyright_text_hover: "Navedite treba li prikazati tekst autorskog prava na stranici za prijavu.",
		admin_theme_copyright_selection_IBM: "IBM Autorsko pravo",
		admin_theme_copyright_selection_none: "Nema teksta autorskog prava",
		admin_theme_banner_title_heading: "Elementi uvodnika",
		admin_theme_text_icons_color: "Boja teksta i ikone:",
		admin_theme_icon_color_label: "Boja ikone:",
		admin_theme_shadow_label: "Sjena:",
		admin_theme_banner_text_icons_hover: "Izaberite boju za tekst i ikone u uvodniku. Ova boja treba biti jasna u odnosu na boju pozadine uvodnika.",
		admin_theme_banner_product_name_label: "Naziv proizvoda:",
		admin_theme_banner_product_name_hover: "Kad kreirate desktop, možete navesti prilagođeni naziv koji će se prikazati za aplikaciju. Ako ne navedete prilagođeni naziv, kao naziv proizvoda se koristi IBM Content Navigator. Navedite da li koristiti naziv aplikacije koji je definiran na desktopu ili sliku umjesto naziva.",
		admin_theme_banner_product_name_desktop_defined_label: "Koristi naziv s desktopa",
		admin_theme_banner_product_name_image: "Koristi prilagođeni logo (URL)",
		admin_theme_background_color_label: "Boja pozadine:",
		admin_theme_style_label: "Stil:",
		admin_theme_banner_color_hover: "Izaberite boju za uvodnik na vrhu aplikacije.<br><br><b>Savjet:</b>Osigurajte da je boja teksta uvodnika čitljiva na boji pozadine uvodnika.",
		admin_theme_buttons_title_heading: "Gumbi",
		admin_theme_navigation_title_heading: "Elementi navigacije",
		admin_theme_navigation_icon_selected_label: "Izabrana boja ikone:",
		admin_theme_navigation_background_hover: "Izaberite boju za pozadinu navigacijske trake funkcija.",
		admin_theme_navigation_icon_color_hover: "Izaberite boju za ikone na navigacijskoj traci funkcija. Kad se koristi defaultni izgled na desktopu, ova boja treba činiti kontrast s pozadinom padajućeg izbornika funkcije. Kad se koristi klasični izgled na desktopu, ova boja treba činiti kontrast s pozadinom navigacijske trake funkcije. ",
		admin_theme_navigation_icon_selected_hover: "Izaberite boju za izabrane funkcije na navigacijskoj traci funkcija. Boja treba biti komplementarna boji ikona i boji pozadine navigacijske trake funkcija.<br><br>Kad se koristi klasični izgled na desktopu, ova boja se koristi kao boja lebdećeg prozora navigacijske trake funkcije. ",
		admin_theme_button_background_color_hover: "Izaberite boju za pozadine gumba.",
		admin_theme_button_style_hover: "Izaberite stil gumba.",
		admin_theme_button_text_icon_color_hover: "Izaberite boju za tekst i slike na gumbima.",
		admin_theme_no_logo_label: "Bez logotipa",
		admin_theme_custom_logo_label: "Prilagođeni logo (URL)",
		admin_theme_banner_type: "Stil ispune uvodnika:",
		admin_theme_banner_type_hover: "Navedite da li će uvodnik biti u jednoj boji ili će imati gradijentnu ispunu. Ako specificirate gradijentan uvodnik, boja koju specificirate za boju navodnika je najtamnija boja u uvodniku.<br><br><b>Savjet:</b>Osigurajte da je boja teksta uvodnika čitljiva na boji pozadine uvodnika.",
		admin_theme_icon: "ikona Teme",
		admin_theme_buttons_and_links_title_heading: "Gumbi, polja i poveznice",
		admin_theme_button_style_label: "Stil gumba:",
		admin_theme_theme_style_label: "Stil teme:",
		admin_theme_theme_style_hover: "Izaberite stil na kojem će se bazirati tema. Stil možete promijeniti bilo kad tijekom kreiranja ili uređivanja teme. Kad promijenite stil, postavke teme se resetiraju na defaultne vrijednosti.",
		admin_theme_accent_color_label: "Boja za naglasak:",
		admin_theme_accent_color_hover: "Izaberite boju koja će se koristiti za traku na vrhu dijaloga i za okretač punjenja.",
		admin_theme_global_toolbar_text_color_label: "Boja teksta na globalnoj traci s alatima:",
		admin_theme_global_toolbar_text_color_hover: "Ako stavljate globalnu traku s alatima u web klijent, izaberite boju koja će se koristiti za tekst trake s alatima",
		admin_theme_banner_text_color_hover: "Izaberite boju za tekst uvodnika.",
		admin_theme_banner_icon_color_hover: "Izaberite boju koja će se koristiti za ikone u uvodniku.",
		admin_theme_button_color_label: "Boja:",
		admin_theme_button_color_hover: "Izaberite boju koja se koristi za sljedeće elemente:<ul><li>Naslovne trake na dijaloškim okvirima</li><li>Boja za isticanje na vrhu izabrane kartice</li><li>Ikone za pogled na listu sadržaja (pogled detalja, pogled časopisa, pogled filmske vrpce)</li><li>Gumbi, polja i poveznice</li></ul>Boja korištena kad korisnik lebdi nad gumbom je izvedena iz ove boje. Ova boja se ne koristi za odjelitelje između odjeljaka Web klijenta. Ako želite promijeniti boju odjelitelja, morate kreirati plug-in da osigurate prilagođenu CSS datoteku.",
		admin_theme_theme_style_col_header: "Stil teme",

		admin_syncserver_consistency_checker: "Provjernik konzistentnosti:",
		admin_syncserver_consistency_checker_hover: "Izvedite provjernik konzistentnosti da osigurate da baze podataka usluga sinkronizacije sadrže tekuće informacije o statusu svake stavke koja se nalazi na poslužitelju. Na primjer, izvedite provjernik konzistentnosti nakon prekida rada baze podataka usluga sinkronizacije da dobijete informacije o dokumentima koji su ažurirani u spremištu za vrijeme prekida rada.",
		admin_syncserver_consistency_checker_button: "Izvedi provjernik konzistentnosti",
		admin_syncserver_consistency_checker_started: "Pokrenuto:",
		admin_syncserver_consistency_checker_ended: "Završeno:",
		admin_syncserver_consistency_checker_duration: "Trajanje:",
		admin_syncserver_consistency_checker_items_processed: "Obrađene stavke sinkronizacije:",
		admin_syncserver_consistency_checker_items_processed_success: "Uspješno obrađene stavke sinkronizacije:",
		admin_syncserver_consistency_checker_items_discovered: "Nove otkrivene stavke spremišta:",
		admin_syncserver_consistency_checker_change_updates: "Ukupno ažuriranja:",
		admin_syncserver_consistency_checker_state: "Stanje:",
		admin_syncserver_consistency_checker_state_done: "Gotovo",
		admin_syncserver_consistency_checker_state_running: "U izvođenju",
		admin_syncserver_consistency_checker_user: "Poslao na izvođenje:",
		admin_syncserver_consistency_checker_scheduled: "Raspoređeno:",

		admin_syncserver_dbcleanup: "Čišćenje baze podataka",
		admin_syncserver_dbcleanup_hover: "Izvedite alat za čišćenje baze podataka za uklanjanje bilo kakvih neupotrjebljenih uređaja i stavki koji više nisu sinkronizirani iz baze podataka.",
		admin_syncserver_dbcleanup_button: "Čišćenje baze podataka",
		admin_syncserver_dbcleanup_state_done: "Gotovo",
		admin_syncserver_dbcleanup_state_running: "U izvođenju",
		admin_syncserver_dbcleanup_started: "Pokrenuto:",
		admin_syncserver_dbcleanup_ended: "Završeno:",
		admin_syncserver_dbcleanup_state: "Stanje:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Izbrisana spremišta:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Izbrisane sinkronizirane stavke:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Izbrisani uređaji:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Istekli uređaji:",

		admin_syncserver_publicSyncUrl: "Javni URL usluga sinkronizacije:",
		admin_syncserver_publicSyncUrl_hover: "Navedite URL putem kojeg spremišta mogu komunicirati s IBM Content Navigator uslugama sinkronizacije. Default  format URL-a je http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Postavke klijenta sinkronizacije:",
		admin_syncserver_managed_hover: "Korisnici ne mogu promijeniti ove postavke u IBM Content Navigator klijentu sinkronizacije.",
		admin_syncserver_managed_subfolder: "Razine foldera za sinkronizaciju",
		admin_syncserver_managed_subfolder_hover: "Ako korisnik sinkronizira folder, navedite maksimalan broj foldera koji će se sinkronizirati. Na primjer, ako korisnik navede 3 razine foldera, sinkronizira se izabrani folder i njegove dvije razine podfoldera.<br><br>Osigurajte prilagođenu okolinu, koja podržava količinu sinkronizacijskog prometa kreiranog radi ove postavke.",
		admin_syncserver_managed_subfolder_all: "Svi podfolderi",
		admin_syncserver_managed_subfolder_none: "Bez podfoldera",
		admin_syncserver_managed_subfolder_no_more: "Ograničene razine",
		admin_syncserver_managed_subfolder_levels: "folderi",
		admin_syncserver_managed_schedule: "Raspored sinkronizacije",
		admin_syncserver_managed_schedule_hover: "Osigurajte prilagođenu okolinu, koja podržava količinu sinkronizacijskog prometa kreiranog radi rasporeda sinkronizacije.<br><br>Maksimalan interval iznosi 24 sata ili 1440 minuta.<br><br>Korisnici mogu pregaziti raspored sinkronizacije u klijentu klikom na <b>Sinkroniziraj sad</b>.",
		admin_syncserver_managed_schedule_manual: "Sinkroniziraj ručno",
		admin_syncserver_managed_schedule_continuous: "Sinkroniziraj neprekidno",
		admin_syncserver_managed_schedule_every: "Sinkroniziraj u specificiranom intervalima",
		admin_syncserver_managed_schedule_minutes: "Minute",
		admin_syncserver_managed_schedule_hours: "Sati",

		// redaction codes
		admin_new_reason_code: "Novi razlog za redakturu",		
		admin_reason_code_name_invalid: "Naziv razloga za redakturu ne smije sadržavati sljedeće znakove: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Opis ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Opis ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Naziv ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Opis:",
		admin_reason_code_applications_hover: "Lista Datacap aplikacije koje referenciraju ovaj razlog za redakturu.",
		admin_reason_code_applications: "Datacap aplikacije",
		admin_delete_confirmation_reason_codes: "Da li želite izbrisati izabrane razloge za redakturu?",
		admin_delete_confirmation_reason_code: "Da li želite izbrisati izabrani razlog za redakturu?",
		admin_reason_code_heading: "Razlog za redakturu: <b>${0}</b>",
		admin_reason_code_list_instructions: "Razlozi za redakturu označavaju zašto su osjetljivi podaci zaštićeni od ovog pogleda. Svaki razlog identificira tip osjetljivih podataka koji su skriveni za općenite korisnike.",
		admin_reason_code_instructions: "Možete kreirati razlog za redakturu za svaki tip osjetljivih podataka. Zatim taj razlog možete koristiti u politici redakture za definiranje tko može vidjeti podatke i tko može kreirati ili mijenjati redakture.",
		admin_reason_code_applications_label: "Datacap aplikacije",
		admin_reason_code_repositories: "Spremišta",
		admin_reason_code_repositories_label: "Spremišta",
		admin_reason_code_repositories_hover: "Lista ICN spremišta koja referenciraju ovaj razlog za redakturu.",
		admin_reason_code_repositories_default_value: "Nije postavljeno",
		admin_reason_code_description_label: "Opis",
		admin_reason_code_applications_default_value: "Nije postavljeno",
		admin_redaction_reasons: "Razlozi za redakturu",
		admin_redactions: "Redakture bazirane na ulozi",
		admin_redactions_policies_roles: "Politike i uloge",
		admin_reasons: "Razlozi",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "ID se ne može uređivati.  On se može kopirati na memoriju za isječke",
		// Role based administration
		admin_rba: "Desktop administracija bazirana na ulogama",
		admin_rba_mobile_access_enabled: "Ovaj desktop je omogućen za pokretni pristup.",
		admin_rba_mobile_access_disabled: "Ovaj destop nije omogućen za pokretni pristup.",
		admin_rba_confirm_delete_multiple: "Da li želite obrisati izabrane administracijske uloge?",
		admin_rba_confirm_delete_single: "Da li želite obrisati izabrane administracijske uloge?",
		admin_rba_delete_multi_role_desktop: "Jedna ili više uloga koje ste izabrali dodijeljene su desktopu. Morate ukloniti uloge iz desktopa prije nego ih možete obrisati.",
		admin_rba_delete_single_role_desktop: "Uloga koju ste izabrali dodijeljena je ${0} desktopu. Morate ukloniti ulogu iz desktopa prije nego ju možete brisati.",
		admin_desktop: "Desktop",
		admin_rba_instructions: "Možete kreirati i upravljati ulogama za administraciju desktopa, koje pridružuju povlastice dodijeljene administratorima desktopa.",
		admin_rba_not_used: "${0} nije korišten niti na jednom desktopu.",
		admin_rba_desktops: "<b>${0} se koristi u sljedećim desktopima:</b>",
		admin_rba_new_role: "Nova uloga",
		admin_rba_name_invalid: "Naziv administracijske uloge ne može sadržavati bilo koji od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Opis ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Opis ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Naziv ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Opis: </b> ${0}",
		admin_rba_membership: "Članstvo",
		admin_rba_general_priv: "Opće",
		admin_rba_appearance_priv: "Izgled",
		admin_rba_desktop_config_priv: "Desktop konfiguracija",
		admin_rba_app_name_priv: "Ime aplikacije",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Mapa preglednika",
		admin_rba_merge_split_priv: "Spoji i razdvoji",
		admin_rba_sync_svc_priv: "Usluge sinkronizacije",
		admin_rba_menus_priv: "Izbornici",
		admin_rba_edit_svc_priv: "Usluge uređivanja",
		admin_rba_toolbars_priv: "Trake s alatima",
		admin_rba_ctx_menus_priv: "Kontekstni izbornici",
		admin_rba_office_ribbon_priv: "MS Office naredbe s trake",
		admin_rba_office_menues_priv: "MS Office kontekstni izbornici",
		admin_rba_addl_settings_priv: "Dodatne postavke",
		admin_rba_mobile_priv: "Mobilni uređaj",
		admin_rba_add_doc_dlg_priv: "Dodaj dijalog dokumenta",
		admin_rba_doc_mgmt_priv: "Upravljanje dokumentima",
		admin_rba_def_redaction_priv: "Default opcija uređivanja",
		admin_rba_add_photos_priv: "Dodavanje fotografija iz foto aparata i foto knjižnice",
		admin_rba_time_stamp_priv: "Vremenska oznaka",
		admin_rba_add_docs_folders_priv: "Dodavanje dokumenata i kreiranje foldera u spremištu",
		admin_rba_open_docs_priv: "Otvaranje dokumenata u drugim aplikacijama",
		admin_rba_office_config_priv: "Office konfiguracija",
		admin_rba_tab_label_priv: "IBM ECM oznaka kartice",
		admin_rba_feature_sel_priv: "Izbor komponente",
		admin_rba_general_config_priv: "Opća konfiguracija",
		admin_rba_favorites_priv: "Favoriti",
		admin_rba_add_options_priv: "Opcije dodavanja u grupi Uredi:",
		admin_rba_browse_priv: "Pregled",
		admin_rba_outlook_int_priv: "Outlook integracija",
		admin_rba_search_priv: "Traži",
		admin_rba_layout_priv: "Razmještaj",
		admin_rba_case_priv: "Predmet",
		admin_rba_desktop_feat_priv: "Funkcije desktopa",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Prikazane funkcije",
		admin_rba_branding_priv: "Brendiranje",
		admin_rba_home_priv: "Početak",
		admin_rba_main_color_priv: "Glavna boja",
		admin_rba_sec_color_priv: "Sekundarna boja",
		admin_rba_teamspaces_priv: "Timski prostori",
		admin_rba_rbr_priv: "Redaktura bazirana na ulozi",
		admin_rba_et_mgr_priv: "Upravitelj predložaka unosa",
		admin_rba_policies_roles_priv: "Upravljanje politikama i ulogama",
		admin_rba_work_priv: "Rad",
		admin_rba_reasons_priv: "Šifre razloga",
		admin_rba_tasks_priv: "Asinkroni zadaci",
		admin_rba_auth_priv: "Provjera identiteta",
		admin_rba_all_privs: "Sve povlastice",
		admin_rba_some_privs: "Neke povlastice",
		admin_rba_no_privs: "Bez povlastica",
		admin_add_users_groups_priv: "Dodavanje korisnika i grupa",
		admin_url_features_priv: "Upravljanje URL funkcijama",
		admin_plugin_features_priv: "Upravljanje plugin funkcijama",
		admin_addl_components_priv: "Dodatne komponente",
		admin_global_toolbar_priv: "Globalna traka s alatima",
		admin_status_bar_priv: "Statusna traka",
		admin_refresh_message: "Morate osvježiti svoj pretražitelj za korištenje ažuriranih podataka.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Morate osvježiti pretražitelja za korištenje ažuriranog default desktopa.",
		admin_desktop_refresh_message: "Morate osvježiti svoj pretražitelj za korištenje ažuriranog desktopa.",
		admin_action_open: "Otvori",
		admin_action_edit: "Uredi",
		admin_action_copy: "Kopiraj",
		admin_action_delete: "Izbriši",
		admin_action_copy: "Kopiraj",
		admin_action_new: "Kreiraj novo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Ovaj ID se već koristi. Morate navesti jedinstveni ID.",

		admin_searchable_properties_for: "Pretražljiva svojstva za:",
		admin_repository_new: "Novo spremište",
		admin_desktop_new: "Novi desktop",
		admin_desktop_file_documents: "Korisnici obavezno spremaju nove dokumente i foldere u folder",
		admin_desktop_file_documents_hover: "Izaberite ovu opciju ako želite da korisnici obavezno izaberu folder prilikom dodavanja stavki u spremište. Ako ne izaberete ovu opciju, korisnici mogu dodati dokumente (IBM FileNet P8) ili dokumente i foldere (IBM Content Manager) bez spremanja istih u folder.",
		admin_desktop_show_security_tab: "Pokaži sigurnosne postavke kod akcija dodavanja i prijave",
		admin_desktop_show_security_hover: "<b>Samo za IBM FileNet P8 korisnike.</b>  Izaberite ovu opciju ako želite dozvoliti korisnicima uređivanje sigurnosti dokumenata i foldera prilikom dodavanja ili prijave stavki na ovaj desktop.",
		admin_desktop_configure_security_inheritance: "Dozvoli korisnicima konfiguriranje nasljeđivanja sigurnosti foldera",
		admin_desktop_configure_security_inheritance_hover: "<b>Samo za IBM FileNet P8 korisnike.</b>  Izaberite ovu opciju ako želite da korisnici mogu prilagoditi pravo pristupa stavkama foldera s kontroliranjem nasljeđivanja sigurnosti foldera. Ako izaberete ovu opciju, korisnici mogu specificirati da li korisnici ili grupe mogu naslijediti sigurnost od:<ul><li>foldera</li><li>foldera i njegovih neposrednih podfoldera</li><li>foldera i svih njegovih podfoldera</li></ul>",
		admin_desktop_appearance: "Izgled",
		admin_desktop_appearance_instruction: "Izgled desktopa možete prilagoditi promjenom stranice za prijavu i uvodnika koji su prikazani na desktopu.",
		admin_desktop_layout: "Razmještaj:",
		admin_desktop_layout_hover: "Razmještaj određuje koje se funkcije mogu prikazati na Web klijentu i kako je raspoređen sadržaj Web klijenta.<br><br><b>Savjet:</b> Možete definirati prilagođene izglede kreiranjem plug-inova. Plug-in morate registrirati u administracijskom alatu da biste mogli izabrati  prilagođeni izgled.",
		admin_desktop_layout_default: "Default",
		admin_desktop_layout_custom: "Prilagođeno",
		admin_desktop_enable_workflow_email: "Omogući ovaj desktop za e-mail obavijesti FileNet P8 procesa rada",
		admin_desktop_enable_workflow_email_hover: "Samo za korisnike proizvoda FileNet P8. Izaberite ovu opciju ako želite omogućiti korisnicima otvaranje web klijenta iz URL-ova koji su uključeni u obavijesti e-pošte koje su generirane Process Engineom.<br /><br />Ako ne omogućite ovu opciju za bilo koji desktop, korisnici se ne mogu prijaviti na web klijent iz URL-ova u obavijestima.<br /><br />Ako omogućite ovu opciju na više desktopa i više od jednog desktopa ispuni kriterije koje su navedene u URL-u u obavijesti, web klijent koristi prvi desktop koji zadovoljava kriterij. ",
		admin_desktop_prevent_create_new_search: "Spriječi korisnike da kreiraju pretrage",
		admin_desktop_prevent_create_new_search_hover: "Ova opcija ograničava korisnike na korištenje samo postojećih pretraživanja te da ne kreiraju otvorena pretraživanja koja možda nisu optimizirana.</br></br>Ova postavka ne utječe na timske prostore. Pravo kreiranja pretraživanja u timskom prostoru kontrolira uloga korisnika koju korisnik ima u danom timskom prostoru.",
		admin_desktop_prevent_create_new_unified_search: "Spriječi korisnike u kreiranju pretraživanja kroz više spremišta",
		admin_desktop_prevent_create_new_unified_search_hover: "Ova opcija ograničava korisnike na upotrebu samo postojećih pretraživanja kroz više spremišta i u kreiranju pretraživanja otvorenog kraja koja možda nisu optimizirana.",
		admin_desktop_hide_entry_template_not_found_warning: "Sakrij upozorenje koje se prikazuje kad se pridruženi predložak unosa ne nađe",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Izaberite ovu opciju ako želite sakriti poruku upozorenja koja se prikazuje kad se ne pronađe predložak unosa pridružen stavci prilikom uređivanja svojstava te stavke.",
		admin_desktop_show_class_role_security_selection: "Dozvoli korisnicima konfiguriranje sigurnosti na bazi uloga za predloške unosa",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Samo za IBM FileNet P8 korisnike.</b> Izaberite ovu opcije ako želite da korisnici konfiguriraju predloške za unos u kojima se koristi sigurnost na bazi uloga prilikom postavljanja sigurnosti za dokumente i/ili foldere putem predloška za unos. Ako izaberete ovu opciju, editori predložaka za unos mogu specificirati da li se objekti sigurnosti uloga primjenjuju na definicije predložaka za unos.",
		admin_desktop_show_primary_multi_part: "Otvorite samo primarni dokument u pregledniku",
		admin_desktop_show_primary_multi_part_hover: "<b>Samo za IBM FileNet P8 korisnike.</b> Izaberite ovu opciju ako želite otvoriti samo primarni dokument u pregledniku. Dokumenti mogu imati pridružene višestruke datoteke. Ova opcija će otvoriti samo primarnu datoteku pridruženu ovom dokumentu.",
		admin_desktop_redaction_save_mode: "Default opcija redakture:",
		admin_desktop_redaction_save_mode_hover: "Izbor default načina spremanja u uređivanju s ViewONE Virtualnim preglednikom:</br>* Uvijek pitaj korisnika za izbor: uzrokovat će prikaz dijaloga kod ulaza u način uređivanja s pitanjem da li se korisnik želi prijaviti za novu verziju, kreiranje novog dokumenta ili preuzimanje sadržaja.</br>* Prijavi kao novu verziju: uvijek će se spremati uređeni sadržaj u novu verziju postojećeg dokumenta.</br>* Spremi kao potpuno novi dokument: uvijek će se spremati uređeni sadržaj kao potpuno novi dokument.</br>* Preuzmi i spremi na klijent: uređeni sadržaj će se preuzeti na klijentski sistem.",
		admin_desktop_redaction_save_mode_user_select: "Uvijek pitaj korisnika za izbor",
		admin_desktop_redaction_save_mode_new_version: "Prijavi kao novu verziju",
		admin_desktop_redaction_save_mode_new_document: "Spremi kao potpuno novi dokument",
		admin_desktop_redaction_save_mode_local_content: "Preuzmi i spremi na klijentu",

		admin_desktop_document_add_mode: "Dijalog za dodavanje dokumenta:",
		admin_desktop_document_add_mode_hover: "Odredite koji će se dijalog dodavanja koristiti kod dodavanja dokumenata kreiranih u IBM Content Navigatoru:<ul><li>Novi trajno redigirani dokument</li><li>Novi spojeni i razdvojeni dokument</li><li>Novi Microsoft Office dokument</li><li>Novi dokument usluge uređivanja</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Dodaj dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Dodaj dokument pomoću predloška unosa",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Spoji i razdvoji:",
		admin_desktop_merge_and_split_enable_hover: "Navedite želite li da korisnici koji pristupaju ovom desktopu mogu spojiti i razdvojiti dokumente koristeći podržani preglednik.",

		admin_desktop_merge_and_split_show_checkin: "Traži od korisnika da navedu vrijednosti svojstava kad prijavljuju promjene napravljene na dokumentu.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Ako izaberete ovu opciju, dijalog prijave se prikaže kad korisnik prijavi promjene na dokumentu u načinu Spoji i razdijeli.",

		admin_desktop_available_categories: "Dostupne funkcije",
		admin_desktop_selected_categories: "Izabrane funkcije",

		admin_layout_banner_title: "Uvodnik i stranica za prijavu",
		admin_layout_title: "Razmještaj",

		admin_desktop_application_name: "Naziv aplikacije:",
		admin_desktop_application_name_hover: "Navedite ime aplikacije za prikaz na uvodniku.<br><br>Savjet: Definirajte ime aplikacije za druge jezike na kartici Oznake/Desktop oznake.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Navedite treba li koristiti default IBM Content Navigator temu ili prilagođenu temu za ovaj desktop. Za upotrebu prilagođene teme morate kreirati temu u odjeljku <b>Teme</b> administracijskog alata.",
		admin_desktop_login_logo: "Logo stranice prijave:",
		admin_desktop_login_logo_hover: "Ako želite promijeniti logo koji se prikazuje na stranici prijave, možete navesti URL logo datoteke. Međutim, preporuča se da koristite prilagođenu temu za promjenu logotipa.",
		admin_desktop_login_logo_url_hover: "Unesite URL logo datoteke. Ako je logo na istom poslužitelju Web aplikacija kao i Web klijent, unesite relativni URL, na primjer: /mycustomizations/login_logo.png<br><br>Logo ne smije biti veći od 200 piksela po širini i 150 piksela po visini.<br><br>Za logo se preporučuje prozirna pozadina.",
		admin_desktop_banner_logo: "Logo uvodnika:",
		admin_desktop_banner_logo_hover: "Ako želite promijeniti logo koji se prikazuje na uvodniku, možete navesti URL logo datoteke. Međutim, preporuča se da koristite prilagođenu temu za promjenu logotipa.",
		admin_desktop_banner_logo_url_hover: "Unesite URL logo datoteke. Ako je logo na istom poslužitelju Web aplikacija kao i Web klijent, unesite relativni URL, na primjer: /mycustomizations/banner_logo.png<br><br>Logo ne smije biti veći od 72 piksela po širini i 36 piksela po visini.<br><br>Za logo se preporučuje prozirna pozadina.",
		admin_desktop_banner_background_color: "Boja pozadine uvodnika:",
		admin_desktop_banner_background_color_hover: "Ako želite promijeniti boju pozadine uvodnika, možete navesti prilagođenu boju. Međutim, preporuča se da koristite prilagođenu temu za promjenu boje uvodnika.",
		admin_desktop_banner_background_color_custom_hover: "Navedite boju uvodnika aplikacije kao heksadecimalnu boju.",
		admin_desktop_banner_application_name_color: "Boja teksta u nazivu aplikacije:",
		admin_desktop_banner_application_name_color_hover: "Ako želite promijeniti boju naziva aplikacije, možete navesti prilagođenu boju. Međutim, preporuča se da koristite prilagođenu temu za promjenu boje naziva aplikacije.",
		admin_desktop_banner_application_name_color_custom_hover: "Navedite boju naziva aplikacije kao heksadecimalnu boju.",
		admin_desktop_banner_menu_color: "Boja ikone uvodnika:",
		admin_desktop_banner_menu_color_hover: "Ako promijenite boju pozadine uvodnika, možda ćete trebati promijeniti shemu boja za ikone uvodnika da bi ikone bile vidljivije. Navedite da li se prikazuje svjetlija ili tamnija verzija ikona uvodnika.<br><br>Međutim, preporuča se da koristite prilagođenu temu za promjenu boje ikona.",
		admin_desktop_login_page_content: "Sadržaj stranice prijave:",
		admin_desktop_login_page_content_hover: "Ako želite prikazati dodatne informacije na stranici za prijavu, poput obavijesti o ispadu sistema ili gdje korisnici mogu dobiti pomoć vezano uz korisnička imena i lozinke, možete navesti URL sadržaja koji želite prikazati.",
		admin_desktop_login_page_content_url_hover: "Unesite URL sadržaja stranice za prijavu. Ako se sadržaj nalazi na istom poslužitelju Web aplikacija kao i Web klijent, unesite relativni URL, na primjer: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Pravila lozinke:",
		admin_desktop_password_rules_hover: "Ako želite korisnicima dati smjernice za kreiranje lozinke, poput zabranjenih znakova ili minimalnog broja znakova, možete navesti URL stranice koja sadrži pravila lozinke.",
		admin_desktop_password_rules_url_hover: "Unesite URL sadržaja pravila za lozinke. Ako se sadržaj nalazi na istom poslužitelju Web aplikacija kao i Web klijent, unesite relativni URL, na primjer: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL pomoći za krajnje korisnike:",
		admin_desktop_help_url_hover: "Možete koristiti pomoć koja se otprema zajedno s IBM Content Navigatorom ili možete preusmjeriti korisnike na prilagođeni sadržaj pomoći tako da poduzmete jednu od sljedećih akcija:<br><br><ul><li>Usmjeravanje na prilagođenu pomoć</li><li>Dodavanje pomoći instanci IBM Knowledge Centera, koja se postavlja s IBM Content Navigatorom.</li></ul>",
		admin_desktop_help_url_url_hover: "Unesite URL vašeg prilagođenog sistema pomoći. IBM Content Navigator pridodaje index.jsp?content=/com.ibm.usingeuc.doc/ i naziv datoteke na kraju URL-a koji specificirate.  Da bi veze \"Saznajte više\" radile na sučelju, sistem pomoći mora koristiti iste nazive datoteka kao i integrirana pomoć za krajnjeg korisnika. ",
		admin_desktop_deprecated_appearance_title: "Zastarjele postavke",
		admin_desktop_deprecated_appearance_instructions: "Ako koristite prilagođenu temu, ove postavke će pregaziti prilagođena tema. Trebali biste migrirati te postavke u prilagođenu temu, koja pruža detaljnije stiliziranje nego postavke iz ovog odjeljka. Osim toga, prilagođena tema se može koristiti na više desktopa.",

		admin_desktop_plugins_title: "Omogućavanje ili onemogućavanje plug-inova za ovaj desktop",
		admin_desktop_plugins_enable_all_plugins: "Omogućavanje svih postavljenih plug-inova za upotrebu s ovim desktopom",
		admin_desktop_plugins_select_plugins: "Izaberite postavljene plug-inove za omogućavanje za upotrebu s ovim desktopom",
		admin_desktop_plugins_select_plugin: "Izaberite plug-in",

		admin_desktop_layout_features: "Prikazane funkcije:",
		admin_desktop_layout_features_hover: "Izaberite funkcije za koje želite da korisnici imaju pristup s ovog desktopa. Funkcije se prikazuju po redoslijedu koji su navedene.<br><br>Kad izaberete funkciju, možete prilagoditi neka od ponašanja funkcije u sklopu desktopa, na primjer default spremište koje je izabrano za funkciju.",
		admin_desktop_layout_default_repository: "Default spremište:",
		admin_desktop_layout_default_repository_layout_hover: "Navedite koje je spremište izabrano po defaultu kad korisnici otvore ovu funkciju.",
		admin_desktop_layout_document_thumbnails: "Sličice dokumenata:",
		admin_desktop_layout_document_thumbnails_hover: "Navedite da li se prikazuju sličice za dokumente u panelu Informacije dokumenta.<br><br>Prikaz sličica može usporiti performanse Web klijenta.",
		admin_desktop_layout_show_filmstrip_view: "Pogled filmske vrpce:",
		admin_desktop_layout_show_filmstrip_view_hover: "Navedite treba li dozvoliti korisnicima da prebacuju prikaz liste sadržaja u pogled filmske vrpce.<br><br>Pogled filmske vrpce generira pregled svakog dokumente koji korisnik izabere. Međutim, upotreba pogleda filmske vrpce može usporiti izvedbu Web klijenta. Dodatno, morate konfigurirati HTML preglednik konverzije da vidite pregled dokumenta.",
		admin_enabled: "Omogući",
		admin_disabled: "Onemogući",
		admin_include: "Uključi",
		admin_exclude: "Isključi",
		admin_layout_teamspaces_default_repository: "Timski prostori:",
		admin_layout_entry_templates_default_repository: "Predlošci unosa:",
		admin_layout_other_features_default_repository: "Pretraživanje i pregled:",
		admin_layout_work_default_repository: "Rad:",
		admin_layout_default_feature: "Default funkcija:",
		admin_default_category_placeholder: "Izaberite funkciju",
		admin_layout_default_feature_hover: "Navedite koja funkcija se prikazuje kad se korisnici prijave na ovaj desktop.",
		admin_layout_default_feature_warning: "Mijenjanje defaultne funkcije može utjecati na vrijeme potrebno za učitavanje aplikacije.",
		admin_layout_feature_list_header: "Funkcija",
		admin_layout_show_statusbar: "Traka statusa:",
		admin_layout_show_statusbar_hover: "Navedite treba li prikazati traku statusa na dnu desktopa.<br><br>Ako sakrijete traku statusa, korisnici ne mogu vidjeti informacije o događajima koji nisu vezani za greške, na primjer:<ul><li>Dokument je dodan u spremište.</li><li>Pretraživanje je vratilo 59 dokumenata.</li></ul>",
		admin_layout_show_magazineview: "Pogled na magazin:",
		admin_layout_show_magazineview_hover: "Navedite treba li dozvoliti korisnicima da prebacuju prikaz liste sadržaja u pogledu na magazin.<br><br>Pogled na magazin povećava visinu svakog unosa na listi sadržaja, što smanjuje broj stavki koje se mogu istodobno prikazati na listi sadržaja.",
		admin_layout_show_detailsview: "Pogled detalja:",
		admin_layout_show_detailsview_hover: "Navedite da li dozvoliti korisnicima prebacivanje prikaza liste sadržaja u pogled detalja.<br><br>Pogled detalja maksimizira broj redova koji su vidljivi u listi sadržaja.",
		admin_feature_config_docinfopane_label: "Okvir s informacijama dokumenta:",
		admin_feature_config_docinfopane_hoverhelp: "Navedite mogu li korisnici pristupiti okviru s informacijama dokumenta za ovu funkciju.",
		admin_feature_config_docinfopane_default_label: "Default ponašanje:",
		admin_feature_config_docinfopane_expanded: "Prošireno",
		admin_feature_config_docinfopane_collapsed: "Skupljen",
		admin_feature_config_docinfopane_expand_on_select: "Proširi kad je stavka izabrana",
		admin_layout_features_title: "Funkcije desktopa",
		admin_layout_features_instructions: "Navedite kojim funkcijama korisnici mogu pristupiti iz ovog desktopa.  Dodatno, možete prilagoditi ponašanje svake funkcije koja je uključena u desktop.",
		admin_layout_components_title: "Dodatne desktop komponente",
		admin_layout_components_instructions: "Ako želite racionalnije sučelje ili ako želite poboljšati performanse Web klijenta, onemogućite neke od komponenti desktopa.",
		admin_layout_featureconfig_instructions: "Izaberite funkciju za konfiguriranje",
		admin_layout_featureconfig_no_configuration: "Nema dostupne konfiguracije funkcije.",
		admin_layout_featureconfig_label: "Konfiguracija za funkciju ${0}",
		admin_layout_featureconfig_title: "Konfiguracija funkcije",
		admin_layout_featureconfig_taskManagerURL: "Za upotrebu ove funkcije morate omogućiti i konfigurirati IBM Content Navigator za spajanje na uslugu upravljanja zadacima. Omogućite uslugu upravljanja zadacima u <b>Postavke</b> odjeljku ovog administracijskog alata.",
		admin_feature_config_show_my_checkouts_label: "Okvir Moje odjave:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Okvir Moje odjave omogućuje korisnicima izvođenje pretraživanja na sve stavke koje su odjavili u određenom spremištu. Navedite da li korisnici mogu pristupiti okviru Moje odjave iz funkcije Početak.<br/><br/><b>Ograničenje:</b> Ova funkcija zahtijeva da imate najmanje jedno IBM Content Manager, IBM FileNet P8 ili OASIS CMIS spremište pridruženo ovom desktopu.",

		admin_feature_config_default_repository_icon_text: "Default spremište",
		admin_show: "Pokaži",
		admin_hide: "Sakrij",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Ne možete ukloniti funkciju Administracije na Admin desktopu",
		admin_warning_label: "Upozorenje:",
		admin_layout_show_globaltoolbar: "Globalna traka s alatima:",
		admin_layout_show_globaltoolbar_hover: "Navedite treba li prikazati traku s alatima u uvodniku na vrhu desktopa.<br><br>Globalna traka s alatima uključuje akcije koje omogućuju korisnicima dodavanje dokumenata, foldera i zadržavanja u spremište. Dostupne akcije ovise o spremištu na koje je korisnik povezan.",
		admin_interface_text_name_label: "Tip oznake",

		admin_interface_text_label_description: "Možete prilagoditi tekst koji se prikazuje u određenim područjima Web klijenta. Oznake se prikazuju u svim spremištima i desktopima u vašoj konfiguraciji. Unesite tekst koji želite vidjeti na sučelju u polje Trenutna oznaka.<br><br><b>Važno:</b> Bilo kakve promjene koje napravite na oznakama neće se prikazati u administracijskom alatu.",
		admin_interface_text_label_action: "Oznake akcija",
		admin_interface_text_label_action_description: "Oznake akcija su prikazane na gumbima i izbornicima širom Web klijenta. Možete definirati različite oznake akcija za svaki tip spremišta.",
		admin_interface_text_label_application: "Oznake aplikacija",
		admin_interface_text_label_application_description: "Oznake aplikacija su prikazane širom Web klijenta.",
		admin_interface_text_label_system: "Oznake sistemskih svojstava",
		admin_interface_text_label_system_description: "Sistemska svojstva koja su prikazana se razlikuju po spremištu. Možete prilagoditi oznake koje su prikazane za sistemska svojstva koja su pridružena dokumentima i folderima u vašim spremištima.",
		admin_interface_text_label_desktop: "Oznake desktopa",
		admin_interface_text_label_desktop_description: "Ako ste prilagodili naziv aplikacije na desktopu, možete prilagoditi naziv na drugim jezicima, ali ne na engleskom. Također možete prilagoditi nazive IBM FileNet P8 aplikacijskih prostora na desktopu.",

		admin_interface_text_system_label: "Sistemske oznake",
		admin_interface_text_current_label: "Trenutna oznaka",
		admin_interface_text_default_label_heading: "Default oznaka",
		admin_interface_text_default_label: "Default oznaka:",
		admin_interface_text_displayed_in_label: "Prikazano za",
		admin_interface_text_displayed_in_document_folder: "Dokumenti i folderi",
		admin_interface_text_displayed_in_document: "Dokumenti",
		admin_interface_text_displayed_in_folder: "Folderi",
		admin_interface_text_displayed_in_admin_application_space: "Oznaka prostora za aplikaciju",
		admin_interface_text_displayed_in_desktop: "Oznaka funkcije za prijenosni uređaj",
		admin_interface_text_displayed_in_admin_application_name: "Ime aplikacije",

		admin_new_desktop: "Novi desktop",
		admin_new_repository: "Novo spremište",
		admin_new_menu: "Novi izbornik",
		admin_new_viewer_mapping: "Nova mapa preglednika",
		admin_new_mapping_label: "Novo mapiranje",
		admin_new_icon_mapping: "Novo mapiranje ikone",
		admin_viewer_mapping_list_instructions: "Možete konfigurirati koje preglednike koristi Web klijent za prikaz drugih tipova sadržaja. Mapa preglednika definira koji MIME tipovi su pridruženi svakom pregledniku koji želite koristiti. Možete kreirati više mapa preglednika ako želite koristiti različite preglednike za različite desktope.",
		admin_viewer_mapping_instructions: "Navedite preglednike koje želite koristiti za otvaranje datoteka. Ako želite koristiti prilagođeni preglednik, morate integrirati preglednik kao plug-in prije nego što ga dodate u mapu preglednika.<br><br><b>Važno:</b> Kad korisnik otvara dokument, Web klijent pretražuje listu mapiranja preglednika da bi pronašao prvi preglednik koji može otvoriti dokument, prema operativnom sistemu na kojem korisnik radi i spremištu s kojim je korisnik povezan. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Novi plug-in",
		admin_menu_list_instructions: "Možete kreirati prilagođene trake s alatima i kontekstne izbornike za kontrolu koje akcije su dostupne korisnicima. Ne možete uređivati default izbornike, ali možete kreirati kopije postojećih izbornika za ograničenje akcija koje su dostupne ili za dodavanje prilagođenih akcija koje su definirane u plug-inovima.<br><br>Ako želite kreirati novi tip izbornika, morate definirati izbornik u plug-inu.",
		admin_menu_id_hover: "ID mora biti jednoznačan i ne možete mijenjati ID nakon što spremite izbornik.<br><br>ID može sadržavati samo alfanumeričke znakove i osjetljiv je na veličinu slova.",
		admin_menu_id_disabled_hover: "ID izbornika se ne može mijenjati. Ako želite koristiti drugi ID, morate kreirati novi izbornik.",
		admin_menu_default_instructions: "Ne možete uređivati ovaj izbornik jer je to default izbornik. Ako želite urediti ovaj izbornik, tada morate kreirati njegovu kopiju.",
		admin_menu_toolbar_instructions: "Možete ograničiti akcije koje su dostupne za ovu traku s alatima ili možete dodati prilagođene akcije definirane u plug-inu. Možete i organizirati akcije dodavanjem odjelitelja na traku s alatima.",
		admin_menu_toolbar_custom_instructions: "Ova traka s alatima je definirana plug-inom. Ako želite uređivati ovu traku s alatima, morate ažurirati plug-in ili kreirati kopiju trake s alatima.",
		admin_menu_context_menu_instructions: "Možete ograničiti akcije koje su dostupne za ovaj kontekstni izbornik ili možete dodati prilagođene akcije definirane u plug-inu. Možete i organizirati akcije dodavanjem odjelitelja i podizbornika u kontekstni izbornik.",
		admin_menu_context_menu_custom_instructions: "Ova kontekstni izbornik je definiran plug-inom. Ako želite uređivati ovaj kontekstni izbornik, morate ažurirati plug-in ili kreirati kopiju kontekstnog izbornika.",
		admin_desktop_list_instructions: "Možete kreirati višestruke desktope da pružite drugim korisnicima pristup sadržaju koji trebaju. Na primjer, možete kreirati desktop koji dozvoljava korisnicima samo pretraživanje sadržaja ili desktop koji daje korisnicima pristup do samo jednog spremišta. ",
		admin_plugin_updated: "Konfiguracija izabranog plug-ina je promijenjena. Morate osvježiti svoj pretražitelj da bi vaše promjene imale učinka.",
		admin_repository_ci_heading: "Content Integrator spremište: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager spremište: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager spremište: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand spremište: <b>${0}</b>",
		admin_repository_cmis_heading: "Content Management Interoperability Services (CMIS)spremište: <b>${0}</b>",
		admin_repository_box_heading: "Box spremište: <b>${0}</b>",
		admin_repository_generic_heading: "Spremište: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Želite li izbrisati izabrane desktope?\n${0} desktopa je izabrano.",
		admin_delete_confirmation_menus: "Želite li izbrisati izabrane izbornike?\n${0} izbornika je izabrano.",
		admin_delete_confirmation_repositories: "Želite li izbrisati izabrana spremišta?\n${0} spremišta je izabrano.",
		admin_delete_confirmation_viewer_mappings: "Želite li izbrisati izabrane mape preglednika?${0} mapa je izabrano.",
		admin_delete_confirmation_icon_mappings: "Želite li izbrisati izabrane konfiguracije ikona?\n${0} ikona je izabrano.",
		admin_delete_confirmation_plugins: "Želite li izbrisati izabrane plug-inove?\n${0} plug-inova je izabrano.",
		admin_delete_confirmation: "Želite li izbrisati izabrane stavke?\n${0} stavki je izabrano.",

		admin_viewer_mapping_id_hover: "ID mora biti jednoznačan i ne možete mijenjati ID nakon što spremite mapu preglednika.<br><br>ID može sadržavati samo alfanumeričke znakove i osjetljiv je na veličinu slova.",
		admin_viewer_mapping_id_disabled_hover: "ID izbornika se ne može mijenjati. Ako želite koristiti drugi ID, morate kreirati novu mapu preglednika.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Default desktop se ne može brisati.",

		admin_desktop_heading: "Desktop: <b>${0}</b>",
		admin_menu_toolbar_heading: "Traka s alatima: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Prilagođena traka s alatima: <b>${0}</b>",
		admin_menu_context_menu_heading: "Kontekstni izbornik: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Prilagođeni kontekstni izbornik: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Plug-in može biti ili JAR datoteka ili kompilirana datoteka klase.<br/><br/><b>Važno:</b> IBM Content Navigator poslužitelj Web aplikacija mora moći pristupiti plug-in datoteci na lokalnom sistemu datoteka ili kroz URL.",
		admin_plugin_list_instructions: "Morate koristiti administracijski alat za registraciju plug-ina za Web klijent. Ako plug-in zahtijeva dodatnu konfiguraciju, nakon što ga registrirate, prikazat će se konfiguracijski parametri.<br /><br /><b>Važno:</b> Ako uređujete plug-in koji se poziva u drugom području administracijskog alata, poput izbornika, možete naići na probleme u ponašanju plug-ina. Osim toga, plug-inovi se pozivaju redoslijedom kojim su navedeni. Ako se plug-in treba izvesti prije nekog drugog plug-ina, svakako navedite plug-inove redoslijedom po kojem se moraju izvesti.",
		admin_plugin_cannot_delete: "Izabrani plug-inovi ne mogu se izbrisati jer neki plug-inovi o istima ovise.<br/>Izabrani plug-inovi: ${0}<br/>Zavisni plug-inovi: ${1}",
		admin_plugin_cannot_disable: "Izabrani plug-inovi se ne mogu onemogućiti jer neki plug-inovi o istima ovise.<br/>Izabrani plug-inovi: ${0}<br/>Zavisni plug-inovi: ${1}",
		admin_plugin_cannot_add: "Plug-in se ne može dodati zato što neki plug-inovi o kojima on ovisi nedostaju ili su onemogućeni. Nedostajući ili  onemogućeni plug-inovi: ${0}",
		admin_plugin_cannot_enable: "Izabrani plug-inovi se ne mogu omogućiti zato što neki plug-inovi o kojima oni ovise nedostaju ili su onemogućeni.<br/>Izabrani plug-inovi: ${0}<br/>Nedostajući ili onemogućeni plug-inovi: ${1}",
		admin_plugin_save_order: "Redoslijed spremanja",
		admin_plugin_load: "Učitavanje",
		admin_plugin_load_hover: "Navedite URL plug-ina",
		admin_plugin_file_hover: "Ako je plug-in JAR datoteka na vašem lokalnom sistemu datoteka, vi unosite potpuno kvalificiranu stazu ili URL plug-in datoteke. Ako je plug-in JAR datoteka na udaljenom poslužitelju, morate unijeti URL plug-in datoteke.",
		admin_plugin_classfolderpath_hover: "Kompilirana datoteka klase mora biti na IBM Content Navigator Web aplikacijskom poslužitelju.<br/><br/>Unesite potpuno kvalificiranu stazu foldera gdje se plug-in klase kompiliraju i generiraju.<br/><br/>Staza ne smije sadržavati naziv paketa za plug-in klasu. Na primjer, default staza za primjer plug-in klase na Windowsima je C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Unesite potpuni naziv Java klase unutar datoteke klase koju treba učitati i nazvati kao plug-in klasu.<br/>Na primjer, naziv klase za uzorak plug-ina je com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Plug-in JAR datoteka nije nađena na navedenom URL-u. Osigurajte da se JAR datoteka nalazi na poslužitelju Web aplikacija i ispravan URL i naziv datoteke.",
		admin_plugin_for_repository_not_loaded: "Ne možete urediti ovo spremište. Plug-in koji definira i podržava ovaj tip spremišta nije učitan. Na kartici Plug-inovi uredite plug-in u svrhu provjere da je ispravno konfiguriran i da je učitan.",
		admin_plugin_repository_types: "Tipovi spremišta:",
		admin_plugin_viewers: "Preglednici:",
		admin_plugin_features: "Funkcije:",
		admin_plugin_layouts: "Izgledi:",
		admin_plugin_not_available: "Nije dostupno",
		admin_plugin_config_params: "Konfiguracijski parametri:",
		admin_viewer_def_heading: "Mapa preglednika: <b>${0}</b>",
		admin_users_and_groups: "Korisnici i grupe",
		admin_general: "Opće",
		admin_logging: "Zapisivanje",
		admin_authentication: "Provjera identiteta",		
		admin_rolebase_role: "Uloga:",
		admin_settings_logging_instructions: "Koristite zapisivanje za rješavanje problema s Web klijentom. Vaše zapisivanje možete pročistiti ako znate da se problem pojavljuje unutar specifične Java klase ili za određenog korisnika. Informacije o greškama se upisuju u datoteke dnevnika poslužitelja Web aplikacija.",
		admin_settings_logging_instructions2: "<b>Postavke zapisivanja debuga</b><br />Ako znate da se problem događa na određenom klijentskom host stroju ili korisniku, možete ciljati zapisivanje u dnevnik radi debugiranja za toj stroj ili korisnika. Debug informacije možete hvatati u proizvodnoj okolini bez značajnijeg utjecaja na performanse vašeg sistema.<br /><br /><b>Važno:</b> Ako navedete host stroj klijenta ili korisnika, ova postavka će nadjačati bilo koju drugu postavku zapisivanja. Nakon što ste uhvatili informacije koje su vam potrebne, postavite ovu opciju na <b>Ništa</b> radi nastavka standardnog zapisivanja vaše okoline.",
		admin_settings_export_config_hover: "Eksportirajte trenutne informacije o sistemskoj konfiguraciji u datoteku za korištenje s IBM Support Assistant Data Collectorom. Datoteka se sprema na lokaciju definiranu s Java sistemskim svojstvom user.home.",
		admin_logging_level: "Zapisivanje na razini datoteke:",
		admin_logging_level_hover: "Razine zapisivanja utječu na to koliko informacija se sprema na vaš poslužitelj. Izbor <b>Greška</b> hvata najmanju količinu dnevničkih informacija. Izborom <b>Debug</b> hvata se najviše informacija. <br /><br />Ne navodite <b>Debug</b> u proizvodnoj okolini osim ako vam tako ne savjetuje IBM softverska podrška.",
		admin_logging_level_0: "Nema zapisivanja",
		admin_logging_level_1: "Greška",
		admin_logging_level_2: "Upozorenje",
		admin_logging_level_3: "Informacije",
		admin_logging_level_4: "Debug",
		admin_logging_classes: "Zapisivanje na razini Java klase:",
		admin_logging_classes_hover: "Po defaultu, sve Java klase i paketi su uključeni u dnevnike grešaka poslužitelja Web aplikacija. Međutim, možete navesti koje klase ili pakete želite uključiti ili isključiti iz dnevnika. Možete koristiti dnevnik grešaka poslužitelja Web aplikacija da odredite koje klase treba uključiti ili isključiti.<br><br>Ako vam je poznato da se problem događa u specifičnoj klasi, možete izričito uključiti tu klasu u datoteke dnevnika. Kad uključite klasu u vaše dnevnike grešaka, sve ostale klase se isključuju iz datoteke dnevnika.<br><br>Ako znate da se problem ne pojavljuje u klasi i ako želite smanjiti veličinu datoteke dnevnika, možete isključiti tu klasu iz datoteka dnevnika.",
		admin_logging_classes_include: "Uključi",
		admin_logging_classes_include_all: "Sve klase",
		admin_logging_classes_include_specified: "Određene klase",
		admin_logging_classes_include_specified_msg: "Navedite koje klase se uključuju",
		admin_logging_classes_exclude: "Isključi",
		admin_logging_classes_exclude_none: "Ništa",
		admin_logging_classes_exclude_specified: "Određene klase",
		admin_logging_classes_exclude_specified_msg: "Navedite koje klase se isključuju.",
		admin_logging_debug: "Debug zapisivanje za:",
		admin_logging_debug_hover: "<b>Važno:</b> Pregledajte datoteke dnevnika poslužitelja Web aplikacija prije nego navedete IP adresu ili korisnika host stroja klijenta. Vrijednost koju navedete mora odgovarati vrijednosti koja je prikazana u datoteci dnevnika.",
		admin_logging_debug_none: "Ništa (default)",
		admin_logging_debug_host: "Host strojevi klijenta (IP adrese)",
		admin_logging_debug_host_msg: "Navedite IP adresu jednog ili više klijentskih strojeva za koje želite zapisivati debug informacije. Koristite zarez za odvajanje IP adresa.<br /><br /><b>Važno:</b> Pregledajte datoteke dnevnika poslužitelja Web aplikacija prije nego navedete IP adresu. Vrijednost koju navedete mora odgovarati vrijednosti koja je prikazana u datoteci dnevnika.",
		admin_logging_debug_user: "Korisnici",
		admin_logging_debug_user_msg: "Navedite korisničko ime jednog ili više korisnika za koje želite zapisivati debug informacije. Koristite zarez za odvajanje imena korisnika.<br /><br /><b>Važno:</b> Pregledajte datoteke dnevnika poslužitelja Web aplikacija prije nego navedete korisničko ime. Vrijednost koju navedete mora odgovarati vrijednosti koja je prikazana u datoteci dnevnika.",

		admin_office_settings_logging_instructions: "Koristite zapisivanje za rješavanje problema s IBM Content Navigator for Microsoft Office. Vaše zapisivanje možete pročistiti ako znate da se problem pojavljuje unutar specifične klase ili za određenog korisnika. Informacije o greški su napisane u datotekama dnevnika aplikacije na IBM Content Navigator for Microsoft Office host strojevima klijenta. ",
		admin_office_settings_logging_instructions2: "<b>Postavke zapisivanja debuga</b><br />Ako vam je poznato da se problem pojavljuje za specifični host stroj klijenta ili IBM Content Navigator for Microsoft Office korisnika, možete ciljati vaše zapisivanje debuga na taj stroj ili tog korisnika. Debug informacije možete hvatati u proizvodnoj okolini bez značajnijeg utjecaja na performanse vašeg sistema. <br /><br /><b>Važno:</b> Ako navedete host stroj klijenta ili korisnika, ova postavka će nadjačati bilo koju drugu postavku zapisivanja. Nakon što ste dohvatili informacije koje su vam potrebne, postavite ovu opciju na <b>Ništa</b> radi nastavka sa standardnim zapisivanjem za vašu IBM Content Navigator for Microsoft Office okolinu. ",
		admin_office_logging_debug_hover: "<b>Važno:</b> Pregledajte datoteke dnevnika stroja klijenta prije nego navedete IP adresu ili korisnika host stroja klijenta. Vrijednost koju navedete mora odgovarati vrijednosti koja je prikazana u datoteci dnevnika. ",
		admin_office_logging: "Office zapisivanje",
		admin_office_logging_classes: "Zapisivanje na razini klase:",
		admin_office_logging_classes_hover: "Po defaultu su sve klase i paketi uključeni u IBM Content Navigator for Microsoft Office dnevnike grešaka. Međutim, možete navesti koje klase ili pakete želite uključiti ili isključiti iz dnevnika. Možete koristiti dnevnike stroja klijenta da odredite koje klase treba uključiti ili isključiti.<br /><br />Ako vam je poznato da se problem događa u specifičnoj klasi, možete izričito uključiti tu klasu u datoteke dnevnika. Kad uključite klasu u vaše dnevnike grešaka, sve ostale klase se isključuju iz datoteka dnevnika. <br /><br />Ako znate da se problem ne pojavljuje u klasi i ako želite smanjiti veličinu datoteke dnevnika, možete isključiti tu klasu iz datoteka dnevnika. ",
		admin_office_logging_debug_hover: "<b>Važno:</b> Pregledajte datoteke dnevnika stroja klijenta prije nego navedete IP adresu ili korisnika host stroja klijenta. Vrijednost koju navedete mora odgovarati vrijednosti koja je prikazana u datoteci dnevnika.",
		admin_office_logging_additional_settings: "Dodatne postavke:",
		admin_office_logging_additional_settings_hover: "Navedite dodatne postavke",
		admin_office_logging_file_size: "Veličina datoteke dnevnika",
		admin_office_logging_file_size_hover: "Navedite veličinu na kojoj IBM Content Navigator for Microsoft Office kreira novu datoteku dnevnika. Kad datoteka dnevnika dosegne maksimalnu veličinu, trenutni dnevnik se preimenuje na način da uključuje datum (u formatu YYYYMMdd) i broj povećanja datoteke (na primjer, ICNExcelAddin-20121116-5.log), a zatim se kreira nova datoteka dnevnika. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Pokaži praćenje stoga u dijalozima",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Opcijski možete pokazati informacije o praćenju stoga u dijalozima poruke da se omogući rješavanje problema. Čak i ako ne omogućite ovu opciju, detaljne informacije o praćenju stoga uvijek su uključene u IBM Content Navigator for Microsoft Office dnevnike grešaka. ",

		admin_icon_state_twisty: "Ikone Stanja",
		admin_icon_state_icon: "Ikona Stanje",
		admin_icon_state: "Stanje",
		state_contains_label: "Stanje sadrži",
		admin_icon_state_instructions: "Možete prilagoditi ikone koje su prikazane pored dokumenata, foldera i radnih stavki u vašim spremištima.<br><br><b>Savjet:</b> Možete navesti da li se prikazuju ikone stanja za svako spremište u vašem okruženju.",
		admin_icon_state_dialog_title: "Mapiranje ikona stanja",
		admin_icon_state_dialog_instructions: "Možete mapirati izabrano stanje u preddefiniranu ikonu koja dolazi s Web klijentom ili u prilagođenu ikonu.",

		admin_icon_mapping_twisty: "Ikone MIME tipova",
		admin_icon_mapping_dialog_title: "Mapiranje ikona",
		admin_icon_mapping: "Mapiranje ikona",
		admin_icon_mapping_instructions: "Možete mapirati listu MIME tipova u preddefiniranu ikonu koja dolazi s Web klijentom ili u prilagođenu ikonu.",
		admin_icon_mapping_list_instructions: "Možete prilagoditi ikone koje su prikazane za različite MIME tipove pohranjene u vašem spremištu. Web klijent koristi ikone redoslijedom kojim su navedene. Ako je MIME tip naveden više od jedanput, koristi se prva ikona pridružena MIME tipu.",
		admin_icon_mapping_icon_label: "Koju ikonu želite koristiti?",
		admin_icon_mapping_file_name: "Prilagođena ikona:",
		admin_icon_mapping_file_name_heading: "Prilagođena ikona",
		admin_icon_mapping_file_name_placeholder: "Navedite URL ikone",
		admin_icon_mapping_file_name_hover: "Unesite URL ili ikonu. Ako se ikona nalazi na istom poslužitelju Web aplikacija kao i Web klijent, unesite relativni URL. Na primjer: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Preddefinirana ikona:",
		admin_icon_mapping_class_name_heading: "Preddefinirana ikona",
		admin_icon_mapping_class_name_hover: "Izaberite ikonu koja dolazi s Web klijentom.",
		admin_icon_mapping_class_name_placeholder: "Izaberite ikonu",

		admin_p8_instructions: "Ove informacije dijele sva FileNet Content Manager spremišta koja su konfigurirana za Web klijenta.",
		admin_p8_collaboration_config: "Opcijska FileNet Collaboration Services konfiguracija",
		admin_p8_collaboration_config_instructions: "Ove parametre možete konfigurirati ako želite podesiti FileNet Collaboration Services za vašu IBM FileNet P8 okolinu.",
		admin_p8_use_url_incoming: "Koristite URL na dolaznim zahtjevima u svrhu generiranja URL-a odgovora:",
		admin_p8_use_url_incoming_hover: "U većini FileNet Collaboration Services okolina možete koristiti URL dolaznog zahtjeva u svrhu generiranja URL-a u odgovoru. Izaberite <b>Da</b> osim ako se jedna od sljedećih situacija odnosi na vašu okolinu:<ul><li>Želite forsirati klijentske aplikacije da pristupe FileNet Collaboration Services kroz specifični URL.<li>Postavke vašeg proxy poslužitelja uzrokuju da FileNet Collaboration Services proizvode nevažeće URL-e.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services URL:",
		admin_p8_use_url_incoming_http_hover: "Navedite URL kojim klijentske aplikacije mogu pristupiti do FileNet Collaboration Services u sljedećem obliku http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services HTTPS URL:",
		admin_p8_use_url_incoming_https_hover: "Ako su FileNet Collaboration Services konfigurirane za korištenje SSL-a, navedite HTTPS URL kojim klijentske aplikacije mogu pristupiti do FileNet Collaboration Services u sljedećem obliku https://FNCSserver:port_number",
		admin_p8_hide_email_addresses: "Sakrij e-mail adrese korisnika u odgovorima poslužitelja:",
		admin_p8_hide_email_addresses_hover: "Imate mogućnost skrivanja e-mail adresa korisnika u odgovorima poslužitelja ako je potrebno radi ispunjavanja politika privatnosti. Na primjer, možete sakriti listu e-mail adresa korisnika nakon što poslužitelj vrati listu dokumenata i informacije o korisnicima koji su kreirali ili uredili dokumente.",

		admin_p8_mask_user_ids: "Maskiraj ID-e korisnika u datotekama dnevnika:",
		admin_p8_mask_user_ids_hover: "Možete sakriti imena korisnika u FileNet Collaboration Services datotekama dnevnika ako je potrebno radi ispunjavanja politika privatnosti. Kad omogućite ovu opciju, imena korisnika se zamjenjuju vrijednostima raspršivanja. Ovo vam omogućuje da datoteke dnevnika predate vanjskim poduzećima, kao što je IBM, u svrhu podrške bez kompromitiranja imena vaših korisnika ili slogova aktivnosti.",

		admin_p8_soft_delete: "Premjesti izbrisane datoteke u pregradak za obnavljanje:",
		admin_p8_soft_delete_hover: "Kad korisnik izbriše stavke, premjestite stavke u pregradak za obnavljanje umjesto brisanja stavki iz spremišta. Stavke ostaju u pregratku za obnavljanje sve dok se ne očiste. Ova postavka se zanemaruje ako ciljno spremište ne podržava pregratke za obnavljanje.<br><br><b>Ograničenje:</b> Pregradci za obnavljanje su podržani na IBM FileNet P8 Verziji 5.2 ili kasnijoj i zahtijevaju dodatak Social Collaboration Base Extensions.",

		admin_p8_download: "Content Download HTTP Cache konfiguracija",
		admin_p8_download_instructions: "Ako vaša IBM FileNet Content Manager spremišta sadrže puno velikih datoteka, možete konfigurirati Content Download HTTP Cache (CDHC) da omogućite da FileNet Collaboration Services sigurno preusmjeri zahtjeve za sadržajem za velike datoteke u namjenski Web poslužitelj.<br/><br/>Ova funkcija zahtijeva IBM HTTP Server. Dodatno, morate ažurirati httpd.conf datoteku IBM HTTP Servera.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Navedite želite li omogućiti Content Download HTTP Cache (CDHC) za sva IBM FileNet Content Manager spremišta u vašoj okolini. Možete navesti minimalnu veličinu datoteke kod koje se datoteke stavljaju u predmemoriju.",
		admin_p8_download_cache_folder: "Potpuno kvalificiran direktorij predmemorije:",
		admin_p8_download_cache_folder_hover: "Navedite potpuno kvalificiranu stazu direktorija gdje želite spremiti datoteke iz predmemorije. Direktorij može biti na bilo kojem operativnom sistemu ili uređaju, na primjer na dijeljenom mrežnom direktoriju, sve dok je vidljiv kao sistem datoteka za FileNet Collaboration Services i IBM HTTP Server.",
		admin_p8_download_cache_url: "Zamjenski naziv za lokaciju predmemorije:",
		admin_p8_download_cache_url_hover: "Navedite zamjenski naziv koji se koristi za ukazivanje na direktorij predmemorije iz FileNet Collaboration Services URL-a. Navedite zamjenski naziv u formatu /alias, na primjer, /cdhc.<br/><br/>Kad je /cdhc uključen u URL, aplikacija se preusmjerava na potpuno kvalificiran direktorij predmemorije.",
		admin_p8_download_cache_max_files: "Maksimalni broj datoteka u predmemoriji:",
		admin_p8_download_cache_max_files_hover: "Nakon što se dosegne maksimalni broj datoteka, najstarija datoteka se uklanja iz predmemorije.<br><br>Ako navedete maksimalni broj datoteka za predmemoriju i maksimalnu veličinu predmemorije, najstarija datoteka se uklanja iz predmemorije kad se ispuni donji od dva navedena uvjeta.",
		admin_p8_download_cache_max_size: "Maksimalna veličina predmemorije (u GB):",
		admin_p8_download_cache_max_size_hover: "Nakon što se dosegne maksimalna veličina predmemorije, iz nje se uklanja najstarija datoteka.<br/><br/>Ako navedete maksimalni broj datoteka za predmemoriju i maksimalnu veličinu predmemorije, najstarija datoteka se uklanja iz predmemorije kad se ispuni donji od dva navedena uvjeta.",
		admin_p8_download_cache_cleanup_duration: "Maksimalno trajanje čišćenja (u sekundama):",
		admin_p8_download_cache_cleanup_duration_hover: "Navedite maksimalno vrijeme koliko može trajati operacija čišćenja. Default trajanje je 5 sekundi.<br><br>Sve datoteke koje su predmet brisanja, ali ostanu u predmemoriji nakon operacije čišćenja, bit će uklonjene u trenutku buduće operacije čišćenja.",
		admin_p8_download_cache_cleanup_min: "Minimalni interval između operacija čišćenja predmemorije (u sekundama):",
		admin_p8_download_cache_cleanup_min_hover: "Navedite koliko minimalno vremena treba proteći između operacija čišćenja predmemorije. Default vrijeme je 3,600 sekundi (1 sat).<br><br>Operacije čišćenja predmemorije se izvode samo kad postoji aktivni zahtjev za preuzimanje sadržaja iz predmemorije. Ako zahtjevi dolaze svake minute, operacija čišćenja će se ponavljati svaki sat. Međutim, ako proteknu tri sata između zahtjeva za preuzimanjem, operacija čišćenja se neće pokrenuti sve dok nije primljen sljedeći zahtjev za preuzimanjem.",
		admin_p8_download_cache_min_lifetime: "Minimalno vrijeme u predmemoriji (u sekundama):",
		admin_p8_download_cache_min_lifetime_hover: "Navedite minimalno vremensko trajanje zadržavanja datoteke u predmemoriji prije nego se može ukloniti. Default vrijeme je 3,600 sekundi (1 sat).<br><br>Čak ako predmemorija dosegne maksimalnu veličinu ili sadrži maksimalan broj datoteka, najstarija datoteka u predmemoriji se ne može izbrisati dok ista ne provede u predmemoriji navedenu količinu vremena.",
		admin_p8_download_cache_size_threshold: "Minimalna veličina datoteke u predmemoriji (u KB):",
		admin_p8_download_cache_size_threshold_hover: "Navedite minimalnu veličinu kod koje bi se CDHC trebao koristiti za stavljanje datoteka u predmemoriju. Ako je datoteka manja od navedene veličine, datoteka se preusmjerava kroz poslužitelj Web aplikacija na koji je postavljen FileNet Collaboration Services. Default veličina je 1,000 KB.",
		admin_p8_download_guard_header: "HTTP zaglavlje za nadzor",
		admin_p8_download_guard_header_hover: "Ako klijentska aplikacija ne usmjeri zahtjev kroz IBM HTTP Server, nije moguće preuzimanje predmemoriranog sadržaja. Da spriječite neuspjeh kod preuzimanja, možete navesti da predmemoriranom sadržaju mogu pristupiti samo dolazni zahtjevi sa specifičnim HTTP zaglavljem (koje se dodaje u zahtjeve iz IBM HTTP Servera).<br><br>HTTP zaglavlje je konfigurirano u IBM HTTP Serveru i prisutno na svim dolaznim zahtjevima koji se usmjeravaju kroz IBM HTTP Server. Ako zahtjev nema HTTP zaglavlje, sadržaj se usmjerava kroz poslužitelj Web aplikacija umjesto kroz IBM HTTP poslužitelj.",
		admin_p8_download_generate_config: "Generiraj konfiguraciju",
		admin_p8_download_generate_config_label: "IBM HTTP Server konfiguracija:",
		admin_p8_download_generate_config_label_hover: "Da bi CHDC konfiguracija radila, morate ažurirati httpd.conf datoteku IBM HTTP Servera. Kliknite Generiraj konfiguraciju da generirate izraze koje je potrebno dodati u httpd.conf datoteku.",

		admin_logging_viewone_pro: "ViewONE Profesionalno zapisivanje",
		admin_logging_viewone_virtual: "ViewONE Virtualno zapisivanje:",
		admin_logging_viewone_streamer: "Zapisivanje Document Streaming Server Modula:",
		admin_logging_viewone_streamer_hover: "Opcije zapisivanja Document Streaming Server Modula su primjenjive samo ako omogućite stalni tok podataka za PDF ili TIFF datoteke u <b>Daeja ViewONE</b> odjeljku administracijskog alata.",
		admin_logging_viewone_redaction: "Zapisivanje Permanent Redaction Server Modula:",
		admin_logging_viewone_redaction_hover: "Opcije zapisivanja Permanent Redaction Server Modula su primjenjive samo ako imate pravo upotrebe modula redakture u Daeja ViewONE Profesionalno.",

		admin_daeja_viewonepro: "Profesionalno",
		admin_daeja_viewonepro_stream_pdf_documents: "Stalni tok PDF datoteka:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Ako imate velike PDF dokumente u vašem spremištu, možete omogućiti preglednik za stalni tok sadržaja dokumenata da bi korisnici brže vidjeli dokumente. Međutim, ako stalni tok podataka ne radi u vašoj okolini, možete ga onemogućiti.",
		admin_daeja_viewonepro_stream_tiff_documents: "Stalni tok TIFF datoteka:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Ako imate velike TIFF dokumente u vašem spremištu, možete omogućiti preglednik za stalni tok sadržaja dokumenata da bi korisnici brže vidjeli ove dokumente. Međutim, ako stalni tok podataka ne radi u vašoj okolini, možete ga onemogućiti.",
		admin_daeja_viewonepro_show_file_buttons: "Gumbi datoteka",
		admin_daeja_viewonepro_show_file_menus: "Izbornici datoteka",
		admin_daeja_viewonepro_enable_file_keys: "Aktivirajuće tipke datoteka",
		admin_daeja_viewonepro_file_keys_hover_help: "Navedite želite li da korisnici koriste prečice tipkovnice za rad s datotekama, na primjer, za otvaranje ili spremanje datoteke. Za više informacija o određenim aktivirajućim tipkama pogledajte opis parametra FileKeys u IBM Daeja ViewONE priručniku s uputama za parametre.",
		admin_daeja_viewonepro_show_print_buttons: "Gumbi za ispis",
		admin_daeja_viewonepro_show_print_menus: "Izbornici za ispis",
		admin_daeja_viewonepro_enable_print_keys: "Aktivirajuće tipke ispisa",
		admin_daeja_viewonepro_print_keys_hover_help: "Navedite želite li da korisnici koriste prečice tipkovnice za ispis datoteka, na primjer, za ispis stranice ili dokumenta. Za više informacija o određenim aktivirajućim tipkama pogledajte opis parametra PrintKeys u IBM Daeja ViewONE priručniku s uputama za parametre.",
		admin_daeja_viewonepro_show_invert_buttons: "Obrnuti gumbi",
		admin_daeja_viewonepro_annotation_tooltip: "Default preporuka prilagođene primjedbe:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Unesite tekst koji se prikazuje kad preporuka nije navedena za prilagođenu primjedbu. Tekst može sadržavati zamjenjive tokene. Na primjer, &quot;&lt;kreator&gt; je kreirao ovu primjedbu na &lt;createdateonly&gt;.&quot; Za više informacija o zamjenjivim tokenima pogledajte parametar customAnnotationsToolTip u priručniku za IBM Daeja ViewONE parametre.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Koristi preddefinirani prilagođeni savjet",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Koristi sistemski definirani prilagođeni savjet u donjem tekst okviru",
		admin_daeja_viewonepro_help_url: "URL pomoći:",
		admin_daeja_viewonepro_help_url_hover_help: "Navedite URL Web stranice koja sadrži dokumentaciju pomoći za preglednik. Gumb pomoći na traci s alatima preglednika i akcija izbornika pomoći otvaraju Web stranicu. Ako ne navedete URL, gumb pomoći i akcija izbornika se ne prikazuju.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kontekst resursa oznake slike:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "zadatak",
		admin_daeja_viewonepro_route_docs: "Usmjeri nepodržani sadržaj u pretražitelj:",
		admin_daeja_viewonepro_route_docs_hover_help: "Korisnici mogu gledati nepodržane datoteke slika tako da ih usmjere na pretražitelj, koji otvara odgovarajuću aplikaciju za pregledavanje datoteke. Na primjer, za otvaranje Microsoft Word dokumenta, pretražitelj koristi Microsoft Word preglednik.",
		admin_daeja_viewonepro_scale: "Samoprilagodba slike:",
		admin_daeja_viewonepro_scale_best: "Najbolja prilagodba",
		admin_daeja_viewonepro_scale_ftow: "Prilagodi širini",
		admin_daeja_viewonepro_scale_ftoh: "Prilagodi visini",
		admin_daeja_viewonepro_enable_hotkeys: "Omogući aktivirajuće tipke",
		admin_daeja_viewonepro_show_features: "Pokaži gumbe i izbornike:",
		admin_daeja_custom_settings: "Dodatne postavke:",
		admin_daeja_custom_settings_hover_help: "Možete dodati i druge parametre tako da navedete naziv i vrijednost parametra. Na primjer, možete specificirati &quot;scrollbars&quot; i &quot;true&quot; ako želite da se prikazuju klizne trake kad se veličina slike podešava na veličinu veću od područja prikaza. Za više informacija o parametrima i njihovim vrijednostima, pogledajte IBM Daeja ViewONE priručnik s uputama za parametre.",
		admin_daeja_virtual: "Virtualno",
		admin_daeja_virtual_annotation_tooltip: "Default preporuka prilagođene primjedbe:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Unesite tekst koji se prikazuje kad preporuka nije navedena za prilagođenu primjedbu. Tekst može sadržavati zamjenjive tokene. Na primjer, &quot;&lt;kreator&gt; je kreirao ovu primjedbu na &lt;createdateonly&gt;.&quot; Za više informacija o zamjenjivim tokenima pogledajte parametar customAnnotationsToolTip u priručniku za IBM Daeja ViewONE parametre.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Koristi preddefinirani prilagođeni savjet",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Koristi sistemski definirani prilagođeni savjet u donjem tekst okviru",
		admin_daeja_virtual_image_stamp_resource_context: "Kontekst resursa oznake slike:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "zadatak",
		admin_daeja_virtual_license_path:"Staza datoteka licenci:",
		admin_daeja_virtual_license_path_hover_help:"Navedite potpuno kvalificiranu stazu direktorija koji sadrži datoteke licenci  lic-server-virtual.v1 i lic-server.v1.",
		admin_default_license_path:"Koristite defaultnu stazu datoteka licenci",
		admin_license_path_specified:"Koristi prilagođenu stazu datoteka licenci",

		admin_daeja_streamer: "Poslužitelj",
		admin_daeja_streamer_cache_root: "Direktorij predmemorije",
		admin_daeja_streamer_cache_root_hover_help: "Navedite potpuno kvalificiranu stazu direktorija gdje želite spremiti datoteke iz predmemorije radi bržeg pristupa. Direktorij može biti na bilo kojem operativnom sistemu ili uređaju, poput mrežnog direktorija, sve dok je vidljiv kao sistem datoteka IBM Content Navigatoru i IBM HTTP Serveru. Koristite lokalni direktorij radi boljih performansi",
		admin_daeja_streamer_settings: "Dodatne postavke:",
		admin_daeja_streamer_settings_hover_help: "Možete dodati i druge parametre tako da navedete naziv i vrijednost parametra. Na primjer, možete specificirati “cookieAllowedDomainList”  i zarezom odijeljenu listu host poslužitelja.  Za više informacija o parametrima i njihovim vrijednostima, pogledajte IBM Daeja ViewONE priručnik s uputama za parametre.",

		admin_daeja_redaction: "Stalno uređivanje",
		admin_daeja_redaction_settings: "Postavke:",
		admin_daeja_redaction_settings_hover_help: "Možete dodati i druge parametre tako da navedete naziv i vrijednost parametra. Na primjer, možete specificirati “burnIncrementalAnnotations” i ”true”. Za više informacija o parametrima i njihovim vrijednostima, pogledajte IBM Daeja ViewONE priručnik s uputama za parametre.",

		admin_daeja_setting_dialog_title_new: "Nova postavka",
		admin_daeja_setting_dialog_title_edit: "Uređivanje postavke",
		admin_daeja_setting_dialog_hover_help: "Dodajte druge parametre tako da navedete naziv i vrijednost parametra. Na primjer, možete specificirati “scrollbars” i “true” ako želite da se prikazuju klizne trake kad se veličina slike podešava na veličinu koja je veća od područja prikaza.",
		admin_daeja_setting_dialog_field_hover_help: "Za više informacija o parametrima i njihovim vrijednostima, pogledajte Daeja ViewONE priručnik s uputama za parametre.",

		admin_daeja_logging: "Daeja ViewONE zapisivanje",
		admin_daeja_logging_trace: "Omogući dnevnik praćenja",
		admin_daeja_logging_trace_net: "Omogući dnevnik mreže",
		admin_daeja_logging_trace_annotations: "Omogući dnevnik primjedbi",
		admin_daeja_logging_log_file: "Datoteka dnevnika:",
		admin_daeja_logging_instructions: "Možete koristiti zapisivanje za rješavanje problema s Daeja ViewONE Profesionalno i Daeja ViewONE Virtualno. Ako znate da se problem pojavljuje kod određene funkcije, možete ciljati da se zapisuje ta funkcija.",

		admin_v1pro_logging_trace_hover: "Koristite ove postavke za rješavanje općih problema u pregledniku.<br><br>Informacije dnevnika se zapisuju u Java konzolu na klijentskom stroju. Java konzoli na vašem operativnom sistemu možete pristupiti iz Control Panela (Windows) ili kroz System Preferences (Mac).",
		admin_v1pro_logging_trace_net_hover: "Koristite ovu postavku za rješavanje sljedećih problema:<ul><li>Problemi s povezivanjem poslužitelja</li><li>Problemi s MIME tipovima</li><li>Problemi zbog predugih datoteka</li></ul>Osim toga, možete koristiti dnevnik praćenja mreže da utvrdite gdje se događaju kašnjenja prilikom upotrebe Daeja ViewONE Profesionalno.<br><br>Informacije dnevnika se zapisuju u Java konzolu na klijentskom stroju. Java konzoli na vašem operativnom sistemu možete pristupiti iz Control Panela (Windows) ili kroz System Preferences (Mac).",
		admin_v1pro_logging_trace_annotations_hover: "Koristite ovu postavku za rješavanje problema kod kreiranja, spremanja ili učitavanja primjedbi.<br><br>Informacije dnevnika se zapisuju u Java konzolu na klijentskom stroju. Java konzoli na vašem operativnom sistemu možete pristupiti iz Control Panela (Windows) ili kroz System Preferences (Mac).",

		admin_virtual_logging_trace_hover: "Koristite ove postavke za rješavanje općih problema u pregledniku.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku virtual.log u config poddirektorij instalacijskog direktorija IBM Content Navigatora.",
		admin_virtual_logging_trace_net_hover: "Koristite ovu postavku za rješavanje sljedećih problema:<ul><li>Problemi s povezivanjem poslužitelja</li><li>Problemi s MIME tipovima</li><li>Problemi zbog predugih datoteka</li></ul>Osim toga, možete koristiti dnevnik praćenja mreže da utvrdite gdje se događaju kašnjenja prilikom upotrebe Daeja ViewONE Virtualno.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku virtual.log u config poddirektorij instalacijskog direktorija IBM Content Navigatora.",
		admin_virtual_logging_trace_annotations_hover: "Koristite ovu postavku za rješavanje problema kod kreiranja, spremanja ili učitavanja primjedbi.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku virtual.log u config poddirektorij instalacijskog direktorija IBM Content Navigatora.",
		admin_virtual_logging_log_file_hover: "Ako omogućite zapisivanje za vaš preglednik, morate navesti punu kvalificiranu stazu i ime datoteke dnevnika gdje želite pohraniti zapisane informacije.  Preporuča se da imenujete datoteku dnevnika virtual.log.",

		admin_streamer_logging_trace_hover: "Koristite ovu postavku za rješavanje općih problema s Document Streaming Server Modulom.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku streamer.log, koja se nalazi u config poddirektoriju instalacijskog direktorija IBM Content Navigatora.",
		admin_streamer_logging_trace_net_hover: "Koristite ovu postavku za rješavanje sljedećih problema:<ul><li>Problemi s povezivanjem poslužitelja</li><li>Problemi s određenim MIME tipovima</li><li>Problemi zbog predugih datoteka</li></ul>Osim toga, možete koristiti dnevnik praćenja mreže da utvrdite gdje se događaju kašnjenja prilikom upotrebe Document Streaming Server Modula.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku streamer.log, koja se nalazi u config poddirektoriju instalacijskog direktorija IBM Content Navigatora.",
		admin_streamer_logging_log_file_hover: "Ako omogućite zapisivanje za Document Streaming Server Module, morate navesti punu kvalificiranu stazu i ime datoteke dnevnika u koju želite pohraniti informacije.  Preporuča se da imenujete datoteku dnevnika streamer.log.",

		admin_redaction_logging_trace_hover: "Koristite ovu postavku za rješavanje općih problema s Permanent Redaction Server Module.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku redacttofile.log, koja se nalazi u config poddirektoriju instalacijskog direktorija IBM Content Navigatora.",
		admin_redaction_logging_trace_net_hover: "Koristite ovu postavku za rješavanje sljedećih problema:<ul><li>Problemi s povezivanjem poslužitelja</li><li>Problemi s određenim MIME tipovima</li><li>Problemi zbog predugih datoteka</li></ul>Osim toga, možete koristiti dnevnik praćenja mreže da utvrdite gdje se događaju kašnjenja prilikom upotrebe Permanent Redaction Server Module.<br><br>Po defaultu, informacije dnevnika se zapisuju u datoteku redacttofile.log, koja se nalazi u config poddirektoriju instalacijskog direktorija IBM Content Navigatora.",
		admin_redaction_logging_log_file_hover: "Ako omogućite zapisivanje za Permanent Redaction Server Module, morate navesti punu kvalificiranu stazu i ime datoteke dnevnika u koju želite pohraniti informacije.  Preporuča se da imenujete datoteku dnevnika redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfiguriranje funkcija za preglednike i usluge.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Ako koristite Web klijent za povezivanje s jednim ili više Content Manager OnDemand spremišta, navedite informacije koje OnDemand Web Enablement Kit treba za ispravno funkcioniranje. Te informacije dijele sva Content Manager OnDemand spremišta konfigurirana za Web klijenta.",
		admin_ondemand_language: "Jezik:",
		admin_ondemand_tempdir: "ODWEK privremeni direktorij:",
		admin_ondemand_tracegrp: "ODWEK praćenje",
		admin_ondemand_tracedir: "Direktorij praćenja:",
		admin_ondemand_tracelevel: "Razina praćenja:",
		admin_ondemand_tracelevel_0: "0 - Nema praćenja",
		admin_ondemand_tracelevel_1: "1 - Zapisivanje poruka greške",
		admin_ondemand_tracelevel_2: "2 - Zapisivanje poruka greške i upozorenja",
		admin_ondemand_tracelevel_3: "3 - Zapisivanje poruka greške, upozorenja i informacija",
		admin_ondemand_tracelevel_4: "4 - Hvataju se sve poruke uključujući i praćenje funkcija",
		admin_ondemand_max_trace_filesize: "Maksimalna veličina datoteke praćenja:",
		admin_ondemand_max_trace_filesize_unlimited: "Neograničeno",
		admin_ondemand_max_trace_filesize_limited: "Ograničena (Preporučeno)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Ova vrijednost je izvan raspona. Vrijednost mora biti cijeli broj između 1 i 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF instalacijski direktorij:",
		admin_ondemand_language_hover: "Navedite jezik na kojem ODWEK vraća poruke.",
		admin_ondemand_tempdir_hover: "Unesite direktorij u koji OnDemand Web Enablement Kit pohranjuje privremene datoteke za vrijeme obrade. Morate unijeti potpuno kvalificiranu stazu postojećeg direktorija na poslužitelju Web aplikacija.",
		admin_ondemand_tracedir_hover: "Unesite direktorij u koji želite spremiti ODWEK datoteku praćenja arswww.trace. Morate unijeti potpuno kvalificiranu stazu postojećeg direktorija na poslužitelju Web aplikacija.",
		admin_ondemand_tracelevel_hover: "Navedite razinu informacija vođenja dnevnika koje se zapisuju u arswww.trace datoteku. <b>Zapisivanje poruka greške</b> hvata najmanju količinu informacija za zapisivanje. <b>Hvatanje svih poruka uključujući i praćenje funkcija</b> hvata najviše informacija.<br /><br />Nemojte specificirati <b>Hvatanje svih poruka uključujući praćenje funkcija</b> u proizvodnoj okolini, osim ako vam tako nije savjetovala IBM softverska podrška.",
		admin_ondemand_max_trace_filesize_hover: "Navedite želite li dozvoliti da ODWEK datoteka praćenja neograničeno raste ili želite da Web klijent kreira nove datoteke dnevnika kad takva datoteka dosegne određenu veličinu. Default je dozvoliti da datoteka dnevnika praćenja raste dok se ne zaustavi Web aplikacija na poslužitelju.",
		admin_ondemand_max_trace_unlimited_hover: "Izaberite ovu opciju ako želite da se sve ODWEK informacije praćenja zapisuju u jednu datoteku dnevnika. Ako izaberete ovu opciju, možete dobiti datoteku dnevnika koja je prevelika da bi se mogla otvoriti sa standardnim preglednikom datoteka.",
		admin_ondemand_max_trace_limited_hover: "Izaberite ovu opciju ako želite da se ODWEK informacije praćenja zapisuju u manje datoteke dnevnika. Kad datoteka dnevnika dosegne maksimalnu veličinu, trenutni dnevnik se preimenuje da uključi datum (arswww.trace.YYYYMMDD.HHMMSS) i kreira se nova datoteka dnevnika.",
		admin_ondemand_afp2pdf_installdir_hover: "Ako želite koristiti AFP2PDF Transform pomoćni program za konvertiranje AFP dokumenata u PDF dokumente za pregled i ispis, navedite direktorij gdje je AFP2PDF Transform pomoćni program instaliran na poslužitelju Web aplikacija. Na primjer: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administratori",
		admin_adminusers_heading_text_multi: "Morate navesti koji korisnici imaju administratorske povlastice na Web klijentu. Samo administratori se mogu prijaviti na administrativni desktop.<br /><br /><b> Važno:</b> Korisnički ID-ovi administratora IBM Content Navigatora se moraju podudarati s:<ul><li>Korisničkim ID-ovima koji postoje na vašem poslužitelju Web aplikacija. Korisnički ID-ovi ne moraju biti administratori na poslužitelju Web aplikacija.</li><li>Korisnički ID-ovi koji postoje u default spremištu koje je konfigurirano za svaki desktop koji uključuje komponentu Administracija.</li></ul>",
		admin_adminusers_heading_text_single: "Morate navesti koji korisnici imaju administratorske povlastice na Web klijentu. Samo administratori se mogu prijaviti na administrativni desktop.<br /><br /><b>Važno:</b> Korisnički ID-ovi administratora IBM Content Navigatora se moraju podudarati s korisničkim ID-ovima koji postoje na vašem poslužitelju Web aplikacija. Korisnički ID-ovi ne moraju biti administratori na poslužitelju Web aplikacija.",
		admin_adminusers_newuser: "Novi administrator:",
		admin_adminusers_add: "Dodaj",
		admin_adminusers_remove: "Ukloni",
		admin_adminusers_listheading: "Administratori",
		admin_adminusers_nameInvalid: "Vrijednost ne smije biti duplikat.",

		admin_sync_server_instructions: "<b>Samo za FileNet P8 korisnike:</b> Ako planirate omogućiti usluge sinkroniziranja za jedno ili više spremišta, morate konfigurirati Web klijenta da koristi usluge sinkronizacije. Konfiguraciju usluga sinkronizacije dijele sva spremišta u vašoj okolini.",
		admin_settings_instructions: "Vrijednosti koje navedete na kartici Postavke odnose se na sve desktope u vašoj konfiguraciji.",
		admin_autocomplete: "Automatsko popunjavanje korisničkih imena:",
		admin_autocomplete_hover: "Navedite želite li da Web klijent pohrani korisnička imena u cookieje pretražitelja kako bi omogućio pretražitelju da automatski popuni korisnička imena u Web klijentu za vrijeme prijave.<br><br>Ako omogućite ovu opciju, korisničko ime zadnjeg korisnika koji se prijavio na Web klijenta se sprema u cookie pretražitelja i automatski se prikazuje na stranici prijave kad korisnik otvori Web klijenta.<br><br>Trebate onemogućiti ovu opciju ako se aplikaciji pristupa iz dijeljenih radnih stanica ili ako ste zabrinuti zbog pohranjivanja korisničkih imena u cookiejima pretražitelja.<br /><br />Ova opcija se ne odnosi na mobilne ili prilagođene aplikacije.",
		admin_autocomplete_enable: "Omogući",
		admin_autocomplete_disable: "Onemogući",
		admin_cultural_collation: "Koristite sortiranje prema lokalizacijama:",
		admin_cultural_collation_hover: "Ako omogućite sortiranje prema lokalizacijama, sortiranje se obavlja na poslužitelj u spremišta. To može pogoršati performanse Web klijenta.<br><br>Onemogućavanje sortiranja prema lokalizacijama može poboljšati performanse Web klijenta.",
		admin_cultural_collation_enable: "Omogući",
		admin_cultural_collation_disable: "Onemogući",
		admin_base_ui_style: "Stil teme",
		admin_base_ui_style_hover: "Specificirajte stil defaultne teme koja se koristi u web klijentu. Ovaj stil se koristi samo na desktopima koji koriste <b>Defaultnu</b> temu (specificira se na kartici <b>Izgled</b> u konfiguraciji desktopa).<br/></br><b>Ograničenje:</b> Ako se u konfiguracijama desktopa koriste prilagođene teme, prilagođene teme se baziraju na klasičnom stilu bez obzira koji ste stil izabrali.",
		admin_base_ui_style_classic: "Klasično",
		admin_access_control_access: "Ograniči pristup na određene korisnike i grupe",
		admin_access_control_access_show: "Pokaži podatke kontrole pristupa",
		admin_access_control_access_enable: "Da",
		admin_access_control_access_disable: "Ne",
		admin_mobile_access: "Dozvoli pristup iz mobilnih aplikacija",
		admin_mobile_access_hover: "Po defaultu, korisnici mogu pristupiti Web klijentu iz IBM Content Navigator iOS aplikacije.<br /><br /><b>Važno:</b> Ako spriječite pristup korisnika Web klijentu iz iOS aplikacije, korisnici i dalje mogu pristupiti Web klijentu iz Web pretražitelja na mobilnim uređajima i iz bilo koje prilagođene aplikacije, koja je napisana uz upotrebu IBM Content Navigator API-ja, a radi na mobilnim uređajima.",
		admin_mobile_access_enable: "Da",
		admin_mobile_access_disable: "Ne",
		admin_error: "Informacije poruka greške:",
		admin_error_custom: "Pretraži prilagođeni sadržaj podrške",
		admin_error_default: "Pretraži sadržaj IBM podrške <BDO DIR='LTR'>(</BDO>default<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Navedite gdje želite usmjeriti korisnike za više informacija kad naiđu na poruku greške. Korisnike možete usmjeriti na informacije na IBM portalu podrške ili ih možete preusmjeriti na interni resurs kao što je odjel za pomoć.",
		admin_error_URL: "URL prefiks:",
		admin_error_URL_hover: "Unesite URL resursa prema kojem želite usmjeriti korisnike kad naiđu na grešku, poput odjela za pomoć. Na primjer: http://localhost:port_number. Web klijent pridoda broj poruke na URL.",
		admin_prompt_close_without_save: "Želite li zatvoriti bez spremanja promjena?",
		admin_object_expiration_time: "Interval osvježavanja predmemorije (u minutama):",
		admin_object_expiration_time_hover: "Možete povećati količinu vremena koliko se konfiguracijski objekti, kao desktop, čuvaju u predmemoriji da poboljšate performanse Web klijenta.  Default vrijeme je 10 minuta. Maksimalno vrijeme je 1440 minuta (1 dan).<br /><br />Morate ponovno pokrenuti aplikaciju da bi vaše promjene imale učinka.<br /><br />Ako se IBM Content Navigator postavi u visoko dostupnu klasteriranu okolinu, sve promjene na konfiguracijskim objektima se neće propagirati na čvorove u klasteru dok se predmemorija ne osvježi.",
		admin_temp_file_cleanup_interval: "Interval skeniranja za čišćenje predmemorije preglednika (u satima):",
		admin_temp_file_cleanup_interval_hover: "Rasporedite koliko često će se privremeni direktorij skenirati za pronalaženje i brisanje isteklih privremenih datoteka. Po defaultu se privremeni direktorij skenira svakih šest sati. Možete navesti 6-48 sati.",
		admin_temp_file_expiration_interval: "Istek predmemorije preglednika (u satima):",
		admin_temp_file_expiration_interval_hover: "Navedite vrijeme koliko će privremene datoteke povezane s aktivnostima preglednika ostati u  predmemoriji pretražitelja. Po defaultu te privremene datoteke ističu nakon 24 sata. Možete navesti 12-48 sati.",
		admin_encryption_key_hover: "Ključ funkcija šifriranja Navigatora.",
		admin_encryption_key: "Ključ šifriranja:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Brendiranje",
		admin_mobile_branding_main_color: "Glavna boja",
		admin_mobile_branding_secondary_color: "Sekundarna boja:",
		admin_mobile_device_title: "MaaS360 upravljanje",
		admin_mobile_device_enable_maas360: "Omogući MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Ovdje ide lebdeća pomoć za Omogući MaaS360",
		admin_mobile_device_maas360_developer_id: "ID razvijača MaaS360:",
		admin_mobile_device_maas360_license_key: "MaaS360 licencni ključ:",
		admin_mobile_settings_title: "Postavke",
		admin_mobile_email_address_hover_help: "E-mail adresa se koristi u mobilnim aplikacijama kad korisnik klikne \"Pošalji izvještaj o greškama.\"",
		admin_mobile_email_address: "E-mail adresa:",
		admin_invalid_email_address_message: "E-mail adresa koju ste unijeli nije u ispravnom formatu. Unesite ispravnu adresu i pokušajte ponovno.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Neki podaci nisu važeći.",
		admin_configuration_parameters: "Konfiguracijski parametri",
		admin_configuration_optional_features: "Neobavezne funkcije",
		admin_configuration_optional_features_p8_instructions: "Izaberite funkcije koje želite omogućiti u ovom spremištu.<p><b>Važno:</b> Ako omogućite funkciju koja instalira dodatak u spremište, morate se povezati sa spremištem kao Content Platform Engine ili Content Engine administrator.</p>",
		admin_configuration_optional_features_cm_instructions: "Izaberite funkcije koje želite omogućiti u ovom spremištu.<p><b>Važno:</b> Ove funkcije mijenjaju model podataka u vašem spremištu. Da ih omogućite, morate se povezati sa spremištem kao administrator poslužitelja knjižnice.</p>",
		admin_system_properties: "Sistemska svojstva",
		admin_system_properties_for: "Sistemska svojstva za:",
		admin_available_properties: "Dostupna svojstva",
		admin_displayed_properties: "Prikazana svojstva",
		admin_selected_properties: "Izabrana svojstva",
		admin_selected_filtered_properties: "Skrivena svojstva",
		admin_available_operators: "Prikazani operatori",
		admin_selected_filtered_operators: "Skriveni operatori",
		admin_system_properties_shown: "Pokazana svojstva",
		admin_system_properties_hidden: "Skrivena svojstva",
		admin_available_menu_items: "Dostupne akcije:",
		admin_selected_menu_items: "Izabrane akcije:",
		admin_menu_global: "Primjenjuje se kad nema izabranih stavki:",
		admin_menu_multiple_document: "Primjenjuje se kad je izabrano više stavki:",
		admin_menu_privileges: "Potrebne povlastice:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Tipovi spremišta:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Odjelitelj",
		admin_browse: "Pregled",
		admin_search: "Traži",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redaktura bazirana na ulozi",
		admin_connections_library_enabled: "IBM Connections omogućen",
		admin_office_conf: "Uredi integraciju",
		admin_desktop_conf_label: "Desktop konfiguracija",
		admin_ms_office_conf_label: "Office konfiguracija",
		admin_workflows: "Procesi rada",
		admin_file_types: "Tipovi datoteka",
		admin_file_type_contains_label: "Tip datoteke sadrži",
		admin_name_propepty: "Naziv",
		admin_cm_name_property_default: "Koristi default naziv",
		admin_cm_name_property_default_hover: "Po defaultu, svojstvo ICM hijerarhijskog naziva (ICM$NAME) se koristi kao naziv stavke, ako se definirano svojstvo stavke.  Ako svojstvo ICM hijerarhijskog naziva (ICM$NAME) nije dostupno, prvo svojstvo koje se označava kao \"represents\" se koristi kao naziv stavke.",
		admin_cm_name_property: "Navedi svojstvo naziva stavke",
		admin_cm_name_property_hover: "Navedite koje se svojstvo koristi kao naziv za dokumente i foldere.",
		admin_name_property: "Svojstvo naziva:",
		admin_doc_name_property: "Svojstvo naziva dokumenta:",
		admin_doc_name_property_hover: "Navedite svojstvo koje se koristi kao naziv dokumenta.",
		admin_folder_name_property: "Svojstvo naziva foldera",
		admin_folder_name_property_hover: "Navedite svojstvo koje se koristi kao naziv foldera.",
		admin_all_searches_label: "Broj prikazanih pretraživanja:",
		admin_unlimited: "Nema ograničenja",
		admin_limit: "Ograničenje na",
		admin_repository: "Spremište:",
		admin_application_space: "Aplikacijski prostor",
		admin_available_application_spaces: "Dostupni aplikacijski prostori:",
		admin_selected_application_spaces: "Izabrani aplikacijski prostori:",
		admin_label: "Oznaka",
		admin_repository_box_placeholder: "Izaberite Box spremište",
		admin_repository_placeholder: "Izaberite spremište",
		admin_search_match: "Uparivanje:",
		admin_search_match_all: "Podudaranje sa svim kriterijima pretraživanja",
		admin_search_match_any: "Podudaranje s bilo kojim kriterijem pretraživanja",
		admin_search_match_hover: "Navedite koja se opcija bira po defaultu u izborniku <b>Opcije svojstva</b>.",

		admin_repository_redactions_instructions: "Možete konfigurirati redakture bazirane na ulozi za ovo spremište.",
		admin_repository_redaction_policies_description: "Možete kreirati i upravljati politikama redakture koje pridružuju razloge za redakturu s korisnicima i grupama koje mogu čitati osjetljive podatke i uređivati primjedbe koje štite te osjetljive podatke od gledanja.",
		admin_repository_redaction_roles_instruction: "Možete kreirati ulogu redakture za pridruživanje navedenih korisnika i grupa s mogućnošću  čitanja osjetljivih podataka ili uređivanja primjedbi koje štite osjetljive podatke od gledanja. Uloga za redakturu se mora pridružiti s razlogom za redakturu u politici redakture prije nego što ti korisnici i grupe mogu čitati podatke ili uređivati primjedbe.",
		admin_repository_redaction_reasons_instruction: "Možete konfigurirati razloge za redakturu u vašem spremištu.",
		admin_repository_redaction_policies: "Konfiguracija politike redakture",
		admin_repository_redaction_roles: "Konfiguracija uloga redakture",
		admin_repository_redaction_reasons: "Konfiguracija razloga za redakturu",
		admin_repository_redaction_roles_type: "Tip",
		admin_repository_redaction_roles_type_hover: "Editor može kreirati, mijenjati ili brisati određene tipove redaktura baziranih na ulogama dok preglednik može gledati određene tipove osjetljivih podataka.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Preglednik",
		admin_repository_redaction_roles_membership: "Članstvo",
		admin_repository_redaction_roles_membership_hover: "Izaberite editore za koje želite da imaju ovu ulogu.",
		admin_repository_redaction_roles_user_group_hover: "Potražite korisnike i grupe ili izaberite editore za koje želite da imaju ovu ulogu.",
		admin_repository_redaction_roles_description: "Možete kreirati i upravljati politikama redakture koje pridružuju korisnike i grupe  koji mogu čitati osjetljive podatke i uređivati primjedbe koje štite te osjetljive podatke od gledanja.",
		admin_repository_redaction_new: "Nova uloga redakture",
		admin_repository_redaction_role_avail_editors: "Dostupni editori redakture",
		admin_repository_redaction_role_avail_users: "Dostupni korisnici",
		admin_repository_redaction_role_avail_groups: "Dostupne grupe",
		admin_repository_redaction_role_selected_editors: "Izabrani editori redakture",
		admin_repository_redaction_role_selected_users_groups: "Izabrani korisnici i grupe",
		admin_repository_redaction_role_add_editor: "Novi editori...",
		admin_repository_redaction_role_access_type: "Pristup",
		admin_repository_redaction_role_access_type_access: "Dozvoli",
		admin_repository_redaction_role_access_type_no_access: "Zabrani",
		admin_repository_redaction_role_users: "Korisnici",
		admin_repository_redaction_role_groups: "Grupe",
		admin_repository_redaction_role_editors: "Editori",
		admin_delete_confirmation_redaction_roles: "Da li želite izbrisati izabranu ulogu redakture?",
		admin_repository_edit_redaction_role: "Uloga redakture: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Default pristup",
		// RBA
		desktop_user_group_acl: "Administratori Desktopa",
		desktop_user_group_remove: "Ukloni",
		desktop_rba_membership: "Članstvo:",
		desktop_rba_membership_list_label: "Naziv",
		admin_repository_redaction_policy_hover: "Navedite opis koji će omogućiti da korisnici razlikuju između ove politike i ostalih politika.",
		admin_repository_new_redaction_policy: "Nova politika redakture",
		admin_repository_policy_name: "Ime politike",
		admin_repository_reason_redactions: "Razlozi za redakturu:",
		admin_repository_role_editors: "Editori",
		admin_repository_role_viewers: "Preglednici",
		admin_repository_redaction_policy_instruction: "Možete kreirati politiku redakture za pridruživanje izabranih razloga redakture i s editorima i s preglednicima redakture.",
		admin_repository_redaction_reasons_hover: "Izaberite jedan ili više tipova osjetljivih podataka za koje ne želite da ih većina korisnika može vidjeti, na primjer, osobne informacije, poslovne tajne ili povjerljive i vlasničke informacije vašeg poduzeća.",
		admin_repository_readaction_available_reasons: "Dostupni razlozi",
		admin_repository_readaction_selected_reasons: "Izabrani razlozi",
		admin_repository_readaction_new_reason: "Novi razlog...",
		admin_repository_redeaction_reasons: "Razlozi za redakturu:",
		admin_repository_readaction_editor_permmission: "Editori redakture:",
		admin_repository_redaction_editors_hover: "Izaberite uloge koje mogu kreirati i mijenjati redakturu za izabrane razloge.",
		admin_repository_readaction_new_editor_role: "Nova uloga editora...",
		admin_repository_readaction_available_editors: "Dostupne uloge editora",
		admin_repository_readaction_selected_editors: "Izabrane uloge editora",
		admin_repository_readaction_viewer_permmission: "Preglednici redakture:",
		admin_repository_redaction_viewers_hover: "Izaberite uloge koje mogu gledati osjetljive podatke za izabrane razloge. Redaktura se ne primjenjuje za korisnike i grupe s ovim ulogama.",
		admin_repository_readaction_new_viewer_role: "Nova uloga preglednika...",
		admin_repository_readaction_available_viewers: "Dostupne uloge preglednika",
		admin_repository_readaction_selected_viewers: "Izabrane uloge preglednika",
		admin_repository_reason_redactions_header: "Razlozi za redakturu",
		admin_delete_confirmation_redaction_policy: "Da li želite izbrisati izabranu politiku redakture?",
		admin_role_type_repository: "Spremište",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Predložak",
		admin_role_type_teamspace: "Timski prostor",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Preglednik",
		admin_collaboration_services_instructions: "Ako imate Web aplikaciju IBM Connections i FileNet Collaboration Services, možete konfigurirati timske prostore zajednice i tokove aktivnosti za spremište.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfiguracija knjižnice zajednice",
		admin_collaboration_community_instruction: "Možete konfigurirati jedno spremište u vašoj IBM FileNet P8 domeni za spremanje IBM Connections knjižnica zajednice (koje se nazivaju i timski prostori). Kad korisnik kreira knjižnicu zajednice kroz IBM Connections, ona se sprema u spremište koje je određeno kao spremište knjižnice zajednice.",
		admin_collaboration_community_teamspaces: "Koristite ovo spremište za knjižnice zajednice:",
		admin_collaboration_community_teamspaces_hover: "Za spremanje novih knjižnica zajednice možete koristiti samo jedno spremište u vašoj IBM FileNet P8 domeni. Ako onemogućite ovo spremište i ako imate postojeće spremište, postojeće spremište će biti onemogućeno. Međutim, svaka postojeća knjižnica će ostati u trenutnom spremištu.",
		admin_collaboration_connections_anonymous: "Dozvoli anonimni pristup javnom sadržaju:",
		admin_collaboration_connections_anonymous_hover: "Ako vaš IBM Connections poslužitelj sadrži javne ili moderirane zajednice, možete konfigurirati FileNet Collaboration Services da omogućite korisnicima pretraživanje i preuzimanje sadržaja iz knjižnica tih zajednica, bez potrebe za prethodnom prijavom.<br><br>Korisnici koji pristupaju knjižnicama zajednice anonimno ne mogu kreirati, mijenjati ili brisati sadržaj.<br><br><b>Važno:</b> Morate odrediti IBM FileNet P8 LDAP korisnika kao anonimnog korisnika i konfigurirati tog korisnika s ulogom <b>Anoniman</b> na WebSphere Application Serveru.",
		admin_collaboration_connections_url: "URL za IBM Connections:",
		admin_collaboration_connections_url_hover: "Navedite URL za vaš IBM Connections poslužitelj u formatu http://IBMConnectionsServer:port_number.  Ako je IBM Connections konfiguriran za upotrebu IBM HTTP Servera, broj porta možete izostaviti iz URL-a.<br><br>URL mora biti dohvatljiv IBM Connections korisnicima jer je to veza koju FileNet Collaboration Services koristi za kreiranje veza na stranicama za spuštanje dokumenata u IBM Connections.",
		admin_collaboration_connections_url_http_use: "Koristi URL za IBM Connections",
		admin_collaboration_connections_url_https_use: "Koristi HTTPS URL za IBM Connections",
		admin_collaboration_connections_url_specify: "Navedi URL",
		admin_collaboration_connections_url_https: "HTTPS URL za IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Ako je IBM Connections konfiguriran za upotrebu SSL-a, navedite HTTPS URL za vaš IBM Connections poslužitelj u formatu https://IBMConnectionsServer:port_number.  Ako je IBM Connections konfiguriran za upotrebu IBM HTTP Servera, broj porta možete izostaviti iz URL-a.",

		admin_collaboration_connections_gadget_url: "URL naprave za IBM Connections:",
		admin_collaboration_connections_retrieval_url: "URL dohvata za IBM Connections:",
		admin_collaboration_connections_security: "Administratori zajednice:",
		admin_collaboration_connections_security_hover: "Navedite korisnike i grupe koje mogu administrirati sadržaj u knjižnicama zajednice.<br><br>Globalni administratori mogu kreirati, mijenjati, brisati i osigurati pristup knjižnicama i sadržaju knjižnica zajednice. Kad korisnika navedete kao globalnog administratora, korisniku se daju ClbGlobalAdministrator povlastice u spremištu.<br><br>Globalni administratori pregleda mogu odobriti ili odbaciti sadržaj koji je predmet pregleda u svrhu objave u knjižnici zajednice. Kad korisnika navedete kao globalnog administratora pregleda, korisniku se daju ClbGloablReviewAdministrator povlastice u spremištu.",

		admin_collaboration_connections_admins: "Globalni administratori",
		admin_collaboration_connections_admins_review: "Globalni administratori pregleda",
		admin_collaboration_connections_seedlist: "Indeksiraj sadržaj knjižnice zajednice:",
		admin_collaboration_connections_seedlist_hover: "Navedite želite li da IBM Connections pretraži knjižnice zajednice u ovom spremištu u svrhu kreiranja indeksa pretraživanja. Kreiranje indeksa može utjecati na izvedbu spremišta.<br><br>Ako su u spremištu instalirana proširenja indeksiranja za pretraživanje socijalnih suradnji, ova je opcija omogućena po defaultu. Ako u spremištu nisu instalirana proširenja indeksiranja za pretraživanje socijalnih suradnji, kad omogućite ovu opciju u spremištu se instalira dodatak",
		admin_collaboration_activity_stream: "Konfiguracija događaja protoka aktivnosti",
		admin_collaboration_activity_stream_label: "Guraj informacije o događaju u IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Navedite želite li gurati informacije o događaju kao što su kreiranje dokumenta, odjave, komentari, oznake i dijeljenja, u IBM Connections.<br><br><b>Važno:</b> Guranje obavijesti u IBM Connections može utjecati na izvedbu spremišta.",

		admin_collaboration_activity_stream_instruction: "Ovo spremište možete konfigurirati na način da gura informacije o događaju, kao što su komentari i odobrenja dokumenta, u IBM Connections. Događaji se prikazuju na stranici <b>Trenutna ažuriranja</b> u IBM Connections zajednicama. ",
		admin_collaboration_activity_stream_ignored_ids: "Zanemari informacije o događaju za specifične korisnike u grupe:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Možete zanemariti događaje koji su generirani od strane specifičnog korisnika ili grupa, na primjer od administratora ili sistemskih računa, da smanjite broj obavijesti koje su vidljive korisnicima. Na primjer, ako migrirate sadržaj, možda ćete htjeti navesti da se zanemare događaji koji su generirati od strane računa koji se koristi za migraciju.",
		admin_collaboration_activity_stream_userid: "Ime korisnika IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Navedite sistemski račun koji će Content Platform Engine koristiti za provjeru identiteta i slanje informacija o događajima u IBM Connections. Korisnik mora imati <b>trustedExternalApplication</b> ulogu u Widget Container aplikaciji u IBM Connections.<br><br><b>Savjet:</b> Po defaultu, IBM Connections administrator ima odgovarajuće povlastice. Kao ime korisnika možete koristiti ID administratora",
		admin_collaboration_activity_stream_password: "Lozinka korisnika za IBM Connections:",

		admin_help_url: "URL pomoći za krajnje korisnike:",
		admin_help_url_hover: "<b>Važna napomena:</b> IBM Knowledge Center kojeg instalira korisnik se neće ažurirati počevši od IBM Content Navigator verzije 3.0.0. Kontaktirajte korisničku podršku za više informacija o prilagođenoj pomoći.<br><br>Počevši od IBM Content Navigator verzije 3.0.0, URL za pomoć krajnjim korisnicima se prenosi u IBM Knowledge Center. URL za IBM Knowledge Center je: http://www.ibm.com/support/knowledgecenter.<br><br>Ako želite i dalje koristiti prethodnu verziju korisnički instaliranog IBM Knowledge Centera navedite URL instance korisnički instaliranog IBM Knowledge Centera, kojeg ste postavili s IBM Content Navigator alatom za konfiguraciju i postavljanje. URL mora biti dohvatljiv klijentskim strojevima. URL ima format http://server_name:port_number/kc.<br><br>Naziv poslužitelja i broj porta možete dobiti iz datoteke console.log u KnowledgeCenter/logs poddirektoriju IBM Content Navigator instalacijskog direktorija.",

		admin_help_default: "Koristi default pomoć od IBM-a",
		admin_custom_help: "Koristi prilagođeni sistem pomoći",
		admin_help_kc: "Koristi prilagođenu pomoć u korisnički instaliranom IBM Knowledge Centeru",
		admin_help_kc_hover: "<b>Važna napomena:</b> IBM Knowledge Center kojeg instalira korisnik se neće ažurirati počevši od IBM Content Navigator verzije 3.0.0. Kontaktirajte korisničku podršku za više informacija o prilagođenoj pomoći.<br><br>Ako želite i dalje koristiti prethodnu verziju korisnički instaliranog IBM Knowledge Centera, izaberite ovu opciju za nastavak dodavanja sadržaja u instancu korisnički instaliranog IBM Knowledge Centera kojeg ste prethodno postavili.",
		admin_help_taxonomy: "Kod sistematizacije:",
		admin_help_taxonomy_hover: "Navedite kod sistematizacije za vašu prilagođenu pomoć.<br><br>Kod sistematizacije za IBM Content Navigator je SSEUEX. Ako želite prikazati pomoć pod drugim nazivom proizvoda u korisnički instaliranom IBM Knowledge Centeru, morate dodati jedinstveni kod sistematizacije u datoteku KC_taxonomy.ditamap u direktorij KnowledgeCenter/usr/taxonomy instalacijskog direktorija IBM Content Navigatora.",
		admin_help_context: "Kontekst pomoći",
		admin_help_context_hover: "Navedite kontekst za vašu prilagođenu pomoć.<br><br>Pomoć za IBM Content Navigator nalazi se u direktoriju KnowledgeCenter/usr/content/com.ibm.usingeuc.doc instalacijskog direktorija IBM Content Navigatora. Kontekst default pomoći je com.ibm.usingeuc.doc. Ako želite navesti prilagođenu pomoć, dodajte sadržaj u novi poddirektorij u direktoriju KnowledgeCenter/usr/content/ .",
		admin_help_welcome: "Stranica za spuštanje",
		admin_help_welcome_hover: "Navedite naziv poglavlja koje želite koristiti kao stranicu za spuštanje kad korisnici dohvaćaju pomoć. Morate kreirati datoteku svojstava koja specificira lokaciju stranice za spuštanje i dodati datoteku svojstava direktoriju KnowledgeCenter/usr/conf u instalacijski direktorij IBM Content Navigatora.",

		admin_settings_mimetype_extensions_jsonfile: "JSON datoteka proširenja Mime tipa",
		admin_settings_mimetype_extensions_jsonfile_hover: "Provjerite naziv JSON datoteke i potpunu stazu do te datoteke. Datoteka može biti opća datoteka iz sistema datoteka ili URL koji pokazuje na JSON datoteku.  <br><br>Sadržaj JSON datoteke je matrica za definicije mime tipa. <br><br>Definicija mime tipa uključuje četiri ključa: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Prva dva ključa \"mimeTypes\" i \"extensions\" su obavezna i to mogu biti matrice nizova znakova odijeljenih sa zarezom \",\". Zadnja dva ključa \"fileType\" i \"iconName\" su opcijska. <br><br>Na primjer: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfiguracija upravitelja zadataka",
		admin_taskmanager_service: "Usluga upravitelja zadataka:",
		admin_taskmanager_service_hover: "Navedite želite li koristiti uslugu upravitelja zadataka za kreiranje i izvođenje asinkronih zadataka. <br><br>Ako promijenite ovu postavku, morate ponovno pokrenuti IBM Content Navigator Web aplikaciju da bi promjene imale učinka.",
		admin_taskmanager_url: "URL usluge upravitelja zadataka:",
		admin_taskmanager_url_hover: "Navedite URL putem kojeg ostale aplikacije mogu komunicirati s uslugom upravitelja zadataka. URL ima format http://server_name:port_number/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Direktorij dnevnika upravitelja zadataka:",
		admin_taskmanager_logdirectory_hover: "Po defaultu, datoteke dnevnika usluge upravitelja zadataka se zapisuju u isti direktorij kao i datoteke dnevnika poslužitelja Web aplikacija. <br><br>Ako želite da se informacije dnevnika zapisuju u drugi direktorij na IBM Content Navigator poslužitelju, navedite potpuno kvalificiranu stazu direktorija gdje želite spremiti datoteke dnevnika koje generira komponenta upravitelja zadataka. <br><br>Ako promijenite ovu postavku, morate ponovno pokrenuti IBM Content Navigator Web aplikaciju da bi promjene imale učinka.",
		admin_taskmanager_heartBeatMonitor: "Nadgledanje otkucaja klastera",
		admin_taskmanager_heartBeatMonitor_hover: "Samo za klaster okoline visoke dostupnosti. Ako omogućite ovu opciju, usluga upravitelja zadataka preusmjerava zadatke iz čvorova koji su trenutno u kvaru u čvorove koji rade. <br><br>Ako promijenite ovu postavku, morate ponovno pokrenuti IBM Content Navigator Web aplikaciju da bi promjene imale učinka.",

		admin_syncserver_title: "Konfiguracija poslužitelja sinkronizacije",
		admin_syncserver_enable: "Usluge sinkronizacije",
		admin_syncserver_enable_hover: "Navedite želite li da korisnici koji pristupaju ovom desktopu mogu sinkronizirati svoje stavke na svim svojim radnim stanicama i mobilnim uređajima.<br><br><b>Važno:</b> Da biste koristili ovu funkciju također morate dovršiti sljedeće zadatke:<ul><li>Navedite <b>Javni URL  usluga sinkronizacije</b> u odjeljku <b>Usluge sinkronizacije</b> administracijskog alata.</li><li>Dodajte spremište na kojem su usluge sinkronizacije omogućene na ovom desktopu.</li></ul>Ako onemogućite ovu opciju, ali dodate spremište u kojem su usluge sinkronizacije omogućene na ovom desktopu, postavka na ovom spremištu se zanemaruje.",
		admin_mobileqr_enable: "Pokaži QR kod IBM Navigatora na stranici prijave:",
		admin_mobileqr_enable_hover: "Omogućite ovu opciju ako želite prikazati QR kod za mobilnu aplikaciju IBM Navigatora na stranici prijave web klijenta. <br><br>Kad korisnik skenira QR kod, prikazat će mu se odgovarajuća trgovina aplikacija za njegov uređaj na kojoj može preuzeti mobilnu aplikaciju IBM Navigatora.",

		admin_streamlineservice_enable: "Usluga uređivanja:",
		admin_streamlineservice_enable_hover: "Samo za korisnike proizvoda FileNet P8. Omogućite ovu opciju ako želite da desktop korisnici mogu jednostavno dodavati i uređivati dokumente u lokalnim aplikacijama na njihovim radnim stanicama. <br><br>Da biste mogli koristiti ovu postavku, morate i: <ul><li>Omogućiti uslugu uređivanja na jednom ili više spremišta pridruženih desktopu</li><li>Instalirati klijent IBM Content Navigator Edit na radnim stanicama korisnika</li></ul>",

		admin_repository_general_instructions: "Morate se povezati sa spremištem prije nego konfigurirate parametre, sistemska svojstva i tako dalje.",
		admin_repository_system_instructions: "Navedite koja se sistemska svojstva prikazuju za dokumente i foldere u ovom spremištu.",

		admin_desktop_general_create_instructions: "Desktop određuje što korisnik može vidjeti i učiniti kad se prijavi na Web klijenta. Nakon što kreirate desktop, možete poslati desktop URL korisnicima tako da mu mogu pristupiti.",
		admin_desktop_admin_instructions: "Administracijski desktop dolazi s Web klijentom da omogući administracijskom korisniku postavljanje Web klijenta. Taj desktop ima pristup do svih spremišta konfiguriranih za Web klijent.",
		admin_desktop_repositories_instructions: "Navedite na koja spremišta želite da korisnici imaju pristup s ovog desktopa. Morate konfigurirati vaša spremišta prije nego ih možete dodati desktopu.<br><br><b>Savjet:</b> Prilikom konfiguriranja izgleda desktopa možete ograničiti koja su spremišta dostupna za svaku od funkcija.",
		admin_desktop_menus_instructions: "Navedite do kojih izbornika želite da korisnici imaju pristup s ovog desktopa. Izbornici navode koje su akcije dostupne ovisno o tome što je izabrano u sučelju.<br><br><b>Savjet:</b> Možete prilagoditi sadržaj izbornika u odjeljku <b>Izbornici</b> administracijskog alata ili možete kreirati nove tipove izbornika kreiranjem plug-inova.",

		admin_desktop_no_repositories: "Nema konfiguriranih spremišta.",

		admin_desktop_id_hover: "ID desktopa je uključen u URL Web klijenta i navodi koji se desktop otvara kad se korisnik prijavi na Web klijenta. ID mora biti jednoznačan i ne možete promijeniti ID nakon što spremite desktop.<br><br>ID može sadržavati samo alfanumeričke znakove i osjetljiv je na veličinu slova.",
		admin_desktop_id_disabled_hover: "ID desktopa se ne može promijeniti. Ako želite koristiti drugi ID, morate kreirati novi desktop.",
		admin_desktop_name_hover: "Naziv desktopa ne smije sadržavati sljedeće znakove: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Vaša konfiguracija može sadržavati samo jedan default desktop.",

		admin_repository_id_disabled_hover: "ID spremišta se ne može promijeniti. Ako želite koristiti drugi ID, morate kreirati novo povezivanje spremišta.",
		admin_printService_enable: "Ispiši pomoću IBM Daeja ViewONE usluge ispisa:",
		admin_printService_enable_hover: "Ako omogućite IBM Daeja ViewONE uslugu ispisa, dokumenti se konvertiraju u PDF format i ispis se može dovršiti pomoću bilo kojeg web pretražitelja.<br><br>Ako izaberete onemogućavanje IBM Daeja ViewONE usluge ispisa, bit ćete ograničeni samo na ispis dokumenata u web pregledniku koji podržavaju Java aplete.  Neki web preglednici ne podržavaju java aplete i s toga ne podržavaju aplet ispisa.<br><br>Pogledajte dokumentaciju za podržane preglednike.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Početni direktorij korisnika",
		admin_file_tracking_doc_directory_my_documents: "Direktorij dokumenata korisnika",
		admin_file_tracking_doc_directory_qp: "Kvalificirana staza",
		admin_file_tracking_section_tile: "Konfiguracija praćenja datoteka",
		admin_file_tracking_home_path: "Početna staza",
		admin_file_tracking_my_documents: "Moji dokumenti",
		admin_file_tracking_exact_path: "Potpuno kvalificirana staza:",
		admin_file_tracking_qp: "Kvalificirana staza",
		admin_file_tracking_ev: "Varijabla okoline",
		admin_file_tracking_ev_us: "Prilagođena varijabla okoline ",
		admin_file_tracking_del_local_copy: "Izbriši lokalnu kopiju:",
		admin_file_tracking_yes: "Da",
		admin_file_tracking_no: "Ne",
		admin_file_tracking_del_local_copy_rt_state_editable: "Dozvoli korisnicima da pregaze ovu postavku",
		admin_file_tracking_del_local_copy_rt_state1: "Da",
		admin_file_tracking_del_local_copy_rt_state2: "Ne",
		admin_file_Tracking_label: "Praćenje datoteka:",
		admin_file_Tracking_disable: "Onemogući",
		admin_file_Tracking_enable: "Omogući",
		admin_file_tracking_label_hover_help: "Praćenje datoteka koristi aplet za odjavu i preuzimanje dokumenata u specifični direktorij na strojevima korisnika. Aplet također omogućuje IBM Content Navigatoru pronalaženje dokumenata na strojevima korisnika nakon što korisnici prijave dokumente.",
		admin_file_tracking_doc_directory: "Lokacija pohrane:",
		admin_file_tracking_open_file: "Otvori datoteku automatski",
		admin_file_Tracking_append_qualified_path: "Pridodaj direktorij",
		admin_file_Tracking_append_qualified_path_hover_help: "Direktorij možete pridodati na kraj varijable okoline ako želite spremanje dokumenata u specifični poddirektorij. <br/><br/>Na primjer, možete navesti da se dokumenti preuzimaju u direktorij <i>EnterpriseDocuments</i> u sklopu početnog direktorija korisnika.",
		admin_file_Tracking_append_ev: "Pridodaj varijablu okoline",
		admin_file_Tracking_append_ev_hover_help: "Varijablu okoline možete pridodati ako želite da se dokumenti spreme u dinamički specificirani direktorij, na primjer u korisnički direktorij.<br/><br/>Na primjer, možete navesti da se dokumenti spremaju u poddirektorij <i>user_name</i> na dijeljenom mrežnom direktoriju. ",
		admin_file_tracking_doc_directory_hover_help: "Navedite gdje se dokumenti trebaju spremiti kad se odjave i preuzmu.<br/><br/> <b>Savjet</b>: Ako dokumente želite spremiti u početni direktorij korisnika ili default direktorij dokumenata, izaberite <b>Varijabla okoline</b>, što uključuje predefinirane varijable koje pokazuju na te lokacije.",
		admin_file_tracking_qualified_path_hover_help: "Koristite odgovarajuću strukturu direktorija za svoj Windows ili Mac operativni sistem da navedete direktorij ili mrežni direktorij u koji želite spremati dokumente. <ul><li>Za Windowse, u stazu uključite slovo pogona, na primjer C:\\Enterprise Documents.</li><li>Za dijeljeni mrežni direktorij, unesite stazu u formatu \\\\servername\\directory</li></ul><br/><b>Važno:</b> Za upotrebu ove opcije, struktura direktorija koju navedete mora se moći kreirati na svim klijentskim radnim stanicama u vašoj okolini.",
		admin_file_tracking_environment_variable_path_hover_help: "Koristite odgovarajuće varijable okoline za svoj Windows ili Mac operativni sistem da navedete direktorij ili mrežni direktorij u koji želite spremati dokumente. <br/><br/>Opcija <b>Početni direktorij korisnika</b> sprema dokumente u sljedeći direktorij:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>Opcija <b>Direktorij dokumenata korisnika</b> sprema dokumente u sljedeći direktorij:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Navedite da li se lokalna kopija dokumenta briše kad korisnici dodaju ili prijavljuju dokumente u spremište.<br/><br/>Brisanje lokalne kopije vam omogućuje da:<br/><ul><li>Forsiraj usklađenost s IT politikama</li><li>Osigurajte da korisnici rade sa zadnjim verzijama dokumenata</li></ul><br/><b>Ograničenje:</b> Ova postavka se ne koristi kad korisnici dodaju dokumente putem povlačenja i ispuštanja.<br/><br/>Za IBM Content Navigator for Microsoft Office, morate izabrati <b>Izbriši lokalne datoteke kad korisnici dodaju ili prijavljuju dokument ili opozovu odjavu</b> u odjeljku <b>Office Configuration</b> na desktopu.",
		admin_file_tracking_open_file_hover_help: "Ova postavka nadjačava svaku preferencu rukovanja dokumentom koja je konfigurirana u Web pretražiteljima korisnika. </br></br><b>Ograničenje:</b> Ovu postavku ne koristi IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Pregazi lokalnu kopiju:",
		admin_file_tracking_over_write_file_hover_help: "Navedite treba li pregaziti lokalnu kopiju dokumenta nakon što korisnici odjave dokumente iz spremišta. <br/><br/>Gaženje lokalne kopije vam omogućuje da:<br/><ul><li>Osigurajte da korisnici rade sa zadnjim verzijama dokumenata</li><li>Spriječite da korisnici vide prompt kad postoji lokalna kopija</li></ul> </br></br><b>Ograničenje:</b> Ovu postavku ne koristi IBM Content Navigator for Microsoft Office ako izaberete <b>Dozvoli korisnicima da pregaze ovu postavku</b>.",
		admin_file_tracking_over_write_file_state_editable: "Dozvoli korisnicima da pregaze ovu postavku",
		admin_file_tracking_inline_help: "Praćenje datoteka racionalizira proces prijave i odjave dokumenata u/iz spremišta. Također, omogućuje vam upravljanje načinom spremanja dokumenata na strojevima korisnika. <br/><br/>Dodatno, praćenje dokumenata omogućuje dokumentima praćenje u više IBM Content Navigator komponenti, kao što su Web klijent i IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Prije povezivanja na spremište morate omogućiti Standardnu provjeru ovlaštenja ili provjeru ovlaštenja poslužitelja.",
		admin_box_use_oauth: "Tip provjere ovlaštenja:",
		admin_box_use_oauth_hover: "Izaberite Standardna ili Provjera ovlaštenja poslužitelja u proizvodnoj okolini kad omogućavate pristup do  Box dokumenata iz IBM Content Navigatora. Navedite vrijednosti client_id i OAuth2 client_secret koje se odnose na ovu implementaciju IBM Content Navigatora. Te vrijednosti možete dohvatiti iz Boxa nakon kreiranja Box aplikacije za IBM Content Navigator poslužitelj.<br/><br/>Izaberite provjeru ovlaštenja razvojnog programera u razvojnoj okolini. Razvojni programeri se mogu prijaviti na Box sa svojim računom i mogu generirati  token razvojnog programera koji je važeći 60 minuta. Tokeni razvojnih programera omogućuju prijavu na Box koristeći token razvojnog programera kao lozinku za bilo koji ID korisnika.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Poddomena Box računa poduzeća:",
		admin_box_share: "ID veze upravitelja zadataka:",
		admin_box_share_hover: "Za Box kopiranje ili Box dijeljenje upravitelj zadataka koristi administratorski ID i lozinku za izvođenje pozadinskih zadataka koji mijenjaju spremište.<br/><br/>Kliknite Postavi i prijavite se na Box koristeći važeći Box administratorski račun.<br/><br/>Ako ste konfigurirali desktop izborom ovog Box spremišta kao spremišta za dijeljene datoteke, morate navesti Box administratorskog korisnika koji ima neograničeni prostor u Boxu.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Otvori datoteku automatski",
		file_tracking_runtime_overwrite_hover_help: "Ako ne izaberete ovu opciju, a imate dokument na svom lokalnom sistemu datoteka s istim nazivom, dokument će se odjaviti, ali se neće preuzeti osim ako ne poduzmete jednu od sljedećih akcija:<br/><ul><li> Preuzmete dokument u poddirektorij default direktorija. Ako izaberete poddirektorij, lokaciju dokumenta može pronaći Web aplikacija.</li><li>Preimenujete dokument koji preuzimate. Preimenovanje dokumenta sprječava sukob naziva datoteka.</li></ul>",
		open_file: "Otvori datoteku automatski",
		over_write_file: "Pregazi lokalnu kopiju",
		checkout_and_download_file: "Odjavi i preuzmi dokumente",
		download_to_local_directory: "Preuzmi na :",
		checkout_and_download_button_title: "Odjavi i preuzmi",
		checkout_without_java_confirmation_dialog: "Funkcija praćenja datoteka ne može preuzeti i pratiti datoteku.",
		browse_for_directory: "Pregled",
		selected_documents: "Izabrani dokumenti",

		checkout_without_java_confirmation_text: "Ovaj problem se može dogoditi iz sljedećih razloga:<br/><ul><li>Java Runtime Environment (JRE) nije instaliran na vašoj radnoj stanici.</li><li>Java plug-in nije omogućen u vašem Web pretražitelju.</li><li>Vaš Web pretražitelj ne podržava Javu.</li></ul><br/><br/>Za rješavanje ovog problema poduzmite odgovarajuću akciju:<br/><br/><ul><li>Ako želite nastaviti s preuzimanjem datoteke bez omogućenog praćenja datoteka, kliknite OK.</li><li>Ako želite preuzeti datoteku s omogućenim praćenjem datoteka, opozovite preuzimanje i osigurajte da je JRE instaliran na vašoj radnoj stanici i da je Java plug-in omogućen u vašem Web pretražitelju.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokument je odjavljen i preuzet, ali se ne može otvoriti.",
		runtime_file_tracking_open_error_explanation: "Operativni sistem instaliran na vašoj radnoj stanici ne podržava datoteke ovog tipa.",
		runtime_file_tracking_open_error_userResponse: "Za rješavanje ovog problema poduzmite sljedeće akcije:<br/><br/><ul><li>Ako trebate raditi s dokumentom, otvorite Web klijenta iz druge radne stanice koja ima drugi operativni sistem.</li><li>Ako trebate samo pregledati dokument, desno kliknite dokument u Web klijentu i kliknite Otvori.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokument je odjavljen, ali nije preuzet.",
		runtime_file_tracking_save_file_error_explanation: "Dokument istog naziva postoji na vašem lokalnom sistemu datoteka, ali nije pregažen. ",
		runtime_file_tracking_save_file_error_userResponse: "Ako želite preuzeti datoteku iz spremišta, morate nadjačati lokalnu kopiju dokumenta nakon preuzimanja dokumenta iz spremišta.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokument je odjavljen, ali se ne može preuzeti ili otvoriti.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Dokument istog naziva postoji na vašem lokalnom sistemu datoteka. Međutim, datoteka nije pregažena, što sprječava preuzimanje i otvaranje dokumenta iz spremišta.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Ako želite preuzeti datoteku iz spremišta, morate nadjačati lokalnu kopiju dokumenta nakon preuzimanja dokumenta iz spremišta.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokument se ne može preuzeti.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Varijabla okoline ${0} potrebna za praćenje datoteka nije definirana na ovom klijentskom stroju.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Kako riješiti problem:<br/><br/><ul><li>Dodajte ${0} varijablu okoline varijablama okoline operativnog sistema.</li><li>Odjavite se s Web klijenta i zatvorite vaš Web pretražitelj. Zatim se ponovno prijavite.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Aplet praćenja datoteka ne može preuzeti i pratiti dokument.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Direktorij ${0} potreban za praćenje datoteka nije definiran i se ne može kreirati.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Za rješavanje ovog problema poduzmite odgovarajuću akciju:<br/><br/><ul><li>Kliknite Pregled i izaberite drugi direktorij na klijentskom stroju. Ako izaberete ovu opciju, datoteka se neće pratiti.</li><li>Kontaktirajte sistemskog administratora i zatražite od njega da navede drugi direktorij koji se koristi kod praćenja datoteka. Na primjer, to može biti potrebno ako je naveden direktorij za Windows operativni sistem, a vi koristite Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Ako se ovom desktopu pristupa iz uređaja s drugim operativnim sistemima, možete smanjiti mogućnost problema tako da poduzmete jednu od sljedećih akcija:<br/><br/><ul><li>Koristite varijable okoline da navedete lokaciju pohrane na klijentskim strojevima.</li><li>Kreirajte drugi desktop za korisnike na svakom tipu uređaja. Na primjer, kreirajte desktop za korisnike s Windows operativnim sistemom i desktop za korisnike s Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Vaš zahtjev se ne može obraditi.",
		runtime_file_tracking_generic_error_explanation: "Pojavila se greška u apletu za praćenje datoteka.",
		runtime_file_tracking_generic_error_userResponse: "Kontaktirajte sistemskog administratora za pomoć.",
		runtime_file_tracking_generic_error_adminResponse: "Otvorite Java konzolu i pokušajte vaš zahtjev ponovno poslati na izvođenje. Detalji greške se prikazuju na Java konzoli.<br/><br/>Java konzoli na vašem operativnom sistemu možete pristupiti iz Control Panela (Windows) ili kroz System Preferences (Macintosh).",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Zahtjev se ne može obraditi",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Sljedeće datoteke su dodane u spremište, ali nisu izbrisane na vašem lokalnom sistemu datoteka: ${0}. To se obično događa kad su datoteke otvorene ili ih koristi druga aplikacija. Ako je potrebno, možete ručno izbrisati ove datoteke.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokument se ne može preuzeti.",
		runtime_file_tracking_ioexception_error_explanation: "Dokument se ne može preuzeti.",
		runtime_file_tracking_ioexception_userResponse: "Možda nemate odgovarajuće dozvole za pisanje u sljedeći direktorij: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Osigurajte da imate dozvolu pisanja u navedeni direktorij. Ako nemate dozvolu pisanja u navedeni direktorij, kontaktirajte sistemskog administratora.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Vaš zahtjev se ne može obraditi.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Ova greška se može pojaviti zbog sljedećih razloga:<br/><br/><ul><li>Koristite Safari na Mac OS i Java se izvodi u sigurnom načinu.</li><li>Nemate dozvole čitanja/pisanja za direktorij, koji je naveden u konfiguraciji praćenja datoteka za vaš desktop.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Možete nastaviti koristiti IBM Content Navigator bez praćenja datoteka ili možete dovršiti sljedeće korake da riješite problem:<br/><br/><ol><li>Omogućite Java nesiguran način u Safari.</li><li>Ako dobijete prompt pouzdanosti za IBM Content Navigator Web sjedište, kliknite <b>Pouzdan</b> da učitate stranicu i onda omogućite Java nesiguran način u Safari.</li></ol><br/><br/>Ako je Safari ispravno konfiguriran, dovršite sljedeće korake da riješite problem:<br/><br/><ol><li>Osigurajte da posjedujete dozvole čitanja/pisanja za direktorij, koji je naveden u konfiguraciji praćenja datoteka za vaš desktop.</li><li>Ako nemate dozvole čitanja/pisanja u direktoriju, uredite dozvole za direktorij.</li><li>Ako ne možete urediti dozvole za direktorij, vaš administrator mora promijeniti direktorij koji je konfiguriran za praćenje datoteka ili može vama dati pristup desktopu, koji ima konfiguriran drugi direktorij za praćenje datoteka.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Vaš zahtjev se ne može obraditi.",
		runtime_file_tracking_java__notfound_error_explanation: "Ova greška se obično pojavljuje u sljedećim situacijama:<br/><br/><ul><li>Java Runtime Environment (JRE) nije prisutan ili omogućen na vašoj radnoj stanici.</li><li>JRE verzija na vašoj radnoj stanici nije kompatibilna s IBM Content Navigator verzijom.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Možete nastaviti koristiti IBM Content Navigator bez praćenja datoteka ili možete dovršiti sljedeće korake da riješite JRE problem:<br/><br/><ol><li>Provjerite je li JRE instaliran na vašoj radnoj stanici.</li><li>Provjerite je li JRE verzija na vašoj radnoj stanici kompatibilna s IBM Content Navigatorom. Lista podržanih verzija nalazi se u dokumentu <i>Hardverski i softverski preduvjeti za IBM Content Navigator</i> na sjedištu IBM softverske podrške.</li><li>Provjerite je li JRE omogućen na vašoj radnoj stanici.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Vaš zahtjev se ne može obraditi.",
		runtime_file_tracking_security_error_explanation: "Nemate dozvole čitanja/pisanja za direktorij, koji je naveden u konfiguraciji praćenja datoteka za vaš desktop.",
		runtime_file_tracking_security_error_userResponse: "Možete nastaviti koristiti IBM Content Navigator bez praćenja datoteka ili možete zajedno sa sistemskim administratorom dovršiti sljedeće korake:<ol><li>Osigurajte da posjedujete dozvole čitanja/pisanja za direktorij, koji je naveden u konfiguraciji praćenja datoteka za vaš desktop. </li><li>Ako nemate dozvole čitanja/pisanja u direktoriju, uredite dozvole za direktorij.</li><li>Ako ne možete urediti dozvole za direktorij, vaš administrator mora promijeniti direktorij koji je konfiguriran za praćenje datoteka ili može vama dati pristup desktopu, koji ima konfiguriran drugi direktorij za praćenje datoteka.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Preuzeti su sljedeći dokumenti: ${0}.",

		admin_file_tracking_inline_help: "Praćenje datoteka racionalizira proces dodavanja te prijave i odjave dokumenata u ili iz spremišta. Također, omogućuje vam upravljanje načinom spremanja dokumenata na strojevima korisnika.<br/><br/>Dodatno, praćenje dokumenata omogućuje dokumentima praćenje u više IBM Content Navigator komponenti, kao što su Web klijent i IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "ID izbornika ne može započeti s \"Default\".  \"Default\" je rezervirani prefiks za ID-ove izbornika.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "ID može sadržavati samo alfanumeričke znakove i osjetljiv je na veličinu slova.",
		admin_repository_id_hover: "ID spremišta je uključen u URL-ove Web klijenta, favorite i e-mail veze da odredi na koje se spremište treba prijaviti. ID mora biti jednoznačan i ne možete promijeniti ID nakon što spremite spremište.<br><br>ID može sadržavati samo alfanumeričke znakove i osjetljiv je na veličinu slova.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Naziv ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "ID desktopa ne smije sadržavati razmake ili bilo koji od sljedećih znakova: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Naziv desktopa ne smije sadržavati bilo koji od sljedećih znakova: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Naziv prikaza ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Navedite naziv spremišta za prikaz korisnicima u Web klijentu.<br><br>Naziv ne smije sadržavati sljedeće znakove: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Navedite naziv hosta ili IP adresu Content Manager OnDemand poslužitelja na koji se želite povezati, na primjer, server.id.com.",
		admin_server_p8_name_hover: "Navedite URL Content Engine ili Content Platform Engine poslužitelja. URL je osjetljiv na veličinu slova i ima sljedeći format:<br><br><ul><li>Na WebSphere Application Serveru, iiop://host_name:port_number/FileNet/Engine. Kod osnovnih postavljanja, default broj porta je 2809.</li><li>Na WebLogic Serveru, t3://host_name:port_number/FileNet/Engine. Default broj porta je 7001.</li></ul><br><br>Za konfiguracije visoke dostupnosti za Content Engine i Content Platform Engine koristite URL za visoko dostupni EJB prijenos bez cemp: prefix. ",
		admin_server_p8_protocol_hover: "Specificirajte protokol koji se koristi za komunikaciju s Content Engine.",
		admin_server_cm_name_hover: "Navedite lokalni naziv kataloga u Content Manager bazi podataka ili naziv veze poslužitelja knjižnica. Ovaj naziv je upis specificiran za ICMSERVER varijablu.",
		admin_repository_cmis_hover: "Navedite ID spremišta s kojim se želite povezati.  ID svakog spremišta u vašoj CMIS okolini naveden je u dokumentu AtomPub usluge vezanja.  <br/><br/><b>Savjet:</b>Također možete unijeti zvjezdicu (*) da biste se povezali s prvim ili jedinim spremištem koje je definirano u dokumentu Atompub usluge vezanja.",
		admin_url_cmis_hover: "Format URL-a mijenja se u odnosu na pružatelja usluge. Pogledajte vašu CMIS dokumentaciju ili kontaktirajte administratora CMIS poslužitelja za URL.",
		admin_repcfg_cmis_status_columns_hover: "Navedite stanja za koja želite vidjeti ikone. Ikone stanja se prikazuju pored dokumenata u listi sadržaja.",
		admin_port_hover: "Navedite TCP/IP broj porta koji Content Manager OnDemand poslužitelj sluša. Default vrijednost je 1445.",
		admin_unified_searches_hover: "Specificirajte želite li dati korisnicima mogućnost spremanja pretraživanja kroz više spremišta u ovo spremište.<br/><br/>Ako ne omogućite ovu opciju, korisnici i dalje mogu kreirati pretraživanja kroz više spremišta, koja se izvode na ovom spremištu. Možete spriječiti korisnike u kreiranju pretraživanja kroz više spremišta na razini desktopa.<br/><br/>Ako omogućite pretraživanja kroz više spremišta, IBM Content Navigator kreira model podataka za pretraživanja kroz više spremišta u spremištu.<br/><br/>Za IBM FileNet Content Manager morate se povezati na spremište kao Content Engine administrator prije nego omogućite ovu opciju.",
		admin_unified_searches_cm_hover: "Specificirajte želite li dati korisnicima mogućnost spremanja pretraživanja kroz više spremišta u ovo spremište.<br/><br/>Ako ne omogućite ovu opciju, korisnici i dalje mogu kreirati pretraživanja kroz više spremišta, koja se izvode na ovom spremištu. Možete spriječiti korisnike u kreiranju pretraživanja kroz više spremišta na razini desktopa.<br/><br/>Ako omogućite pretraživanja kroz više spremišta, IBM Content Navigator kreira model podataka za pretraživanja kroz više spremišta u spremištu.",
		admin_max_results_hover: "Navedite da li se ograničava broj rezultata koje vraća pretraživanje. Ako ne ograničite broj rezultata pretraživanja, možete osjetiti probleme s performansama ako pretraživanje vrati velik  broj rezultata.",
		admin_timeout_hover: "Navedite koliko dugo, u sekundama, se može izvoditi pretraživanje u spremištu. Ako pretraživanje ne završi u navedenom vremenu, Web klijent opozove zahtjev. Preporučeni maksimalni timeout je 60 sekunda.",
		admin_object_store_hover: "Navedite spremište objekata s kojim se želite povezati na Content Engine poslužitelju. Iz Content Platform Engine administratorske konzole možete dobiti simbolički naziv.",
		admin_object_store_display_name_hover: "Ako želite koristiti IBM FileNet P8 procese rada potreban je naziv prikaza spremišta objekta. Naziv prikaza spremišta objekta možete dohvatiti iz Content Platform Engine administrativne konzole.",
		admin_all_searches_hover: "Navedite da li se ograničava broj pretraživanja koja se prikazuju pod <b>Sva pretraživanja</b> kad korisnici pretražuju spremište. Ako ne ograničite broj pretraživanja, možete osjetiti probleme u performansama ako spremište sadrži velik broj spremljenih pretraživanja.",

		admin_text_desktop: "Desktop",
		admin_text_repository: "Spremište",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Tema",
		admin_text_menu: "Izbornik",
		admin_text_reason_code: "Razlog za redakturu",
		admin_text_redactions: "Redakture",
		admin_text_viewer_mapping: "Mapiranje preglednika",
		admin_text_mobile_feature: "Mobilna funkcija",
		admin_test_interface_text: "Tekst sučelja",
		admin_text_interface_text_locale: "Lokalizirani tekst sučelja",
		admin_text_icon_status: "Ikona statusa",
		admin_text_icon: "Ikona",
		admin_text_file_type: "Tip datoteke",
		admin_text_viewer: "Preglednik",
		admin_text_desktop_access: "Pristup desktopu",
		admin_text_mapped_properties_for_office: "Mapirana svojstva za Microsoft Office",
		admin_text_desktop_features: "Funkcije desktopa",
		admin_text_unknown: "Nepoznato",
		admin_folder_instruction: "Navedite svojstva koja se prikazuju za dokumente i foldere u listi sadržaja kad korisnici pregledavaju. Možete također navesti redoslijed po kojem se prikazuju svojstva.",
		admin_search_instruction: "Navedite koja se opcije biraju po defaultu kad korisnici kreiraju pretraživanje.",
		admin_repository_office_conf_class_instruction: "Ako imate instaliran IBM Content Navigator za Microsoft Office na strojevima klijenta u vašoj okolini, možete navesti kako se rukuje dokumentima kad se oni dodaju u ovo spremište.",
		admin_repository_office_conf_instruction: "Mapiraj svojstva Microsoft Office dokumenata na svojstva definirana u ovom spremištu.<br/><br/>Kad je omogućeno mapiranje svojstava za desktop kojem je pridruženo ovo spremište, svojstva postavljena za Microsoft Office dokumente koriste se za popunjavanje svojstava u spremištu kad korisnik dodaje dokument iz IBM Content Navigatora za Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mapiranje svojstva",
		admin_repository_office_conf_prop_mapping_title1: "MS Office integracija",
		admin_office_conf_instruction: "Možete kontrolirati kako se IBM Content Navigator integrira s Microsoft Office aplikacijama kad se IBM Content Navigator for Microsoft Office instalira na klijentske strojeve<br /><br /><b>Važno:</b> Ako izaberete <b>Mapiraj Office svojstva…</b>, također morate konfigurirati mapiranje svojstava svakog spremišta koje je pridruženo ovom desktopu. Možete konfigurirati mapiranje svojstava na kartici <b>Office svojstva</b> za svako spremište u vašoj okolini.",
		admin_desktop_workflows_instruction: "<b>Samo za IBM FileNet P8 sisteme:</b> Navedite aplikacijske prostore koji se prikazuju na ovom desktopu. Redoslijed izabranih aplikacijskih prostora određuje redoslijed kojim se prikazuju aplikacijski prostori u Web klijentu.<br><br><b>Savjet:</b> Možete promijeniti prikazani naziv aplikacijskih prostora tako da navedete nove nazive u odjeljku <b>Oznake</b> u administracijskom alatu.",
		admin_search_filtered_properties_instruction: "Navedite svojstva koja korisnici mogu tražiti. Možete sakriti svako svojstvo koje ne želite da korisnici traže.",
		admin_search_filtered_operators_instruction: "Navedite operatore dostupne kad korisnici pretražuju određeni tip podataka, poput datuma ili cijelog broja. Možete sakriti svaki operator koji ne želite da korisnici izaberu.",
		admin_search_default_search_results_instruction: "Navedite svojstva koja su prikazana za dokumente i foldere u rezultatima pretraživanja. Možete sakriti bilo koje svojstvo za koje ne želite da se pojavi u rezultatima pretraživanja.",
		admin_search_default_search_results_p8_cmis_instruction: "Navedite svojstva koja su prikazana za dokumente u rezultatima pretraživanja. Možete sakriti bilo koje svojstvo za koje ne želite da se pojavi u rezultatima.",

		admin_datetimeOp: "Datum vrijeme",
		admin_floatOp: "Broj s pomičnim zarezom",
		admin_integerOp: "Cijeli broj",
		admin_stringOp: "Niz znakova",
		admin_binaryOp: "Binaran",
		admin_objectOp: "Objekt",
		admin_idOp: "ID",
		admin_userOp: "Korisnik",
		admin_booleanOp: "Booleov",

		admin_string: "Niz znakova",
		admin_long: "Long",
		admin_date: "Datum",
		admin_double: "Double",
		admin_object: "Objekt",
		admin_guid: "GUID",
		admin_boolean: "Booleov",

		admin_repcfg_heading: "Možete nadjačati default ponašanje spremišta postavljanjem konfiguracijskih parametara.",
		admin_repcfg_heading_od: "Možete nadjačati default ponašanje spremišta postavljanjem konfiguracijskih parametara.<br /><br /><b>Važno:</b> Da biste koristili Web klijent s Content Manager OnDemand, također morate navesti parametre koji su obuhvaćeni na kartici <b>Content Manager OnDemand</b> pod <b>Postavke</b>, a primjenjuju se na sva Content Manager OnDemand spremišta s kojima se povezujete.",
		admin_repcfg_teamspaces: "Upravljanje timskim prostorima",
		admin_repcfg_enable: "Omogući",
		admin_repcfg_disable: "Onemogući",

		admin_repcfg_deliver_redacted_pdf_files_as: "Uređene PDF datoteke će biti dostavljene kao:",
		admin_repcfg_burn_pdf_to_pdf: "PDF datoteke",
		admin_repcfg_burn_pdf_to_tiff: "TIFF datoteke",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "PDF datoteke koja je uređena primjenom redakture na bazi uloga može se dostaviti klijentima u drugačijem formatu. Kad se mijenja format datoteke, također se mijenja ekstenzija datoteke i MIME tip.<br><br>Na primjer, kad se PDF datoteka dostavi kao TIFF datoteka, ekstenzija datoteke se promijeni u .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Dozvoli korisnicima spajanje i razdvajanje stranica koje sadrže redakturu na bazi uloga",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Izaberite ovu opciju da dozvolite korisnicima spajanje i razdvajanje stranica koje sadrže redakturu na bazi uloga. Korisnici koji nisu editori redakture neće moći uređivati redakturu na bazi uloge i nemaju pravo pristupa osjetljivim podacima koji su pridruženi redakturi na bazi uloge čak i kad je omogućena ova opcija.",
		admin_repcfg_modify_teamspace_roles: "Dozvoli vlasnicima mijenjanje uloga postojećih timskih prostora",
		admin_repcfg_tm_delete_teamspace: "Omogući korisnicima brisanje timskog prostora, uključivo sa sadržajem",
		admin_repcfg_tm_delete_teamspace_id_missing: "Morate navesti korisničko ime administratora spremišta.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Morate navesti lozinku administratora spremišta.",
		admin_repcfg_teamspace_display_Recent: "Pokaži samo nedavno mijenjane timske prostore ",
		admin_repcfg_teamspace_display_Recent_value: "Broj dana od zadnje promjene:",

		admin_repcfg_folder_selector: "Osnovni folder:",
		admin_repcfg_enable_folder_selector: "Omogući",
		admin_repcfg_disable_folder_selector: "Onemogući",
		admin_repcfg_SSO: "Jedna prijava:",
		admin_repcfg_teamspace_template_permission_text: "Dodijeli autore predloška timskog prostora:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Navedite grupe ili korisnike koji mogu kreirati predloške timskih prostora. Korisnicima i grupama se dodjeljuju odgovarajuće sigurnosne postavke za potrebne klase i foldere. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saznajte više</a><br/><br/><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje timskim prostorima.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Navedite grupe ili korisnike koji mogu kreirati predloške timskih prostora. Korisnici se dodaju u odgovarajuće ACL-ove i dobivaju potrebne povlastice. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saznajte više</a><br/><br/><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje timskim prostorima.",
		admin_repcfg_teamspace_permission_text: "Dodijeli uloge timskog prostora:",
		admin_repcfg_teamspace_permission_hover_p8: "Navedite grupe ili korisnike koji mogu kreirati i koristiti timske prostore. Korisnicima se dodjeljuju  odgovarajuće sigurnosne postavke za potrebne klase i foldere. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saznajte više</a><br/><br/><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje timskim prostorima.",
		admin_repcfg_teamspace_permission_hover_cm: "Navedite grupe ili korisnike koji mogu kreirati i koristiti timske prostore. Korisnici se dodaju u odgovarajuće ACL-ove i dobivaju potrebne povlastice. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saznajte više</a><br/><br/><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje timskim prostorima.",
		admin_repcfg_entry_template_permission_text: "Dodijeli uloge predloška unosa:",
		admin_repcfg_entry_template_permission_hover_p8: "Navedite grupe ili korisnike koji mogu kreirati i koristiti predloške unosa. Korisnicima se dodjeljuju  odgovarajuće sigurnosne postavke za klasu dokumenata Predložak unosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saznajte više</a><br/><br/><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje predlošcima unosa.",
		admin_repcfg_entry_template_permission_hover_cm: "Navedite grupe ili korisnike koji mogu kreirati i koristiti predloške unosa. Korisnici se dodaju u odgovarajuće ACL-ove i dobivaju potrebne povlastice. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saznajte više</a><br /><br /><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje predlošcima unosa.",
		admin_repcfg_office_template_permission_text: "Dodijeli uloge predloška:",
		admin_repcfg_office_template_permission_hover_cm: "Navedite grupe ili korisnike koji mogu kreirati, urediti i koristiti predloške proizvoda Microsoft Office Online ili usluge uređivanja. Korisnici se dodaju u odgovarajuće ACL-ove i dobivaju potrebne povlastice.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a><br /><br /><b>Preporuka:</b> Koristite grupe da biste pojednostavili upravljanje predlošcima proizvoda Microsoft Office Online ili usluge uređivanja.",
		admin_repcfg_draft_permission_text: "Dodijeli uloge skica:",
		admin_repcfg_draft_permission_hover_cm: "Navedite grupe ili korisnike koji mogu kreirati skice Microsoft Office Online dokumenata ili dokumenata usluge uređivanja tijekom zajedničkog uređivanja. Korisnici koji trebaju zajednički uređivati dokumente u Microsoft Office Online ili usluzi uređivanja moraju imati odgovarajuće povlastice za kreiranje skica. Korisnici se dodaju u odgovarajuće ACL-ove i dobivaju potrebne povlastice. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a><br /><br /><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje skicama.",
		admin_repcfg_search_permission_text: "Dodijeli uloge za pretraživanje:",
		admin_repcfg_search_permission_hover_p8: "Navedite grupe ili korisnike koji mogu kreirati ili koristiti spremljena pretraživanja i pretraživanja kroz više spremišta. Korisnicima se dodjeljuju odgovarajuće sigurnosne postavke za potrebne klase. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Saznajte više</a><br /><br /><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje pretraživanjima.",
		admin_repcfg_search_permission_hover_cm: "Navedite grupe ili korisnike koji mogu kreirati, uređivati ili koristiti spremljena pretraživanja i pretraživanja kroz više spremišta. Korisnici se dodaju u odgovarajuće ACL-ove i dobivaju potrebne povlastice. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saznajte više</a><br /><br /><b>Preporuka:</b> Koristite grupe da pojednostavite upravljanje pretraživanjima.",
		admin_repcfg_search_permission_title: "Uloge za pretraživanje",
		admin_repcfg_search_permission_intro_text: "Osigurajte da korisnici imaju pristup do desktopa koji podržava njihove uloge. Na primjer, osigurajte da kreatori pretraživanja imaju pristup do desktopa koji im dozvoljava da kreiraju pretraživanja i pretraživanja kroz više spremišta.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administratori predloška timskog prostora koji imaju dozvolu <b>Potpuna kontrola</b> na spremištu (spremištu objekata). Ne možete promijeniti listu administratora predloška timskog prostora kroz administracijski alat. <p>Administratori predloška timskog prostora mogu izbrisati ili izmijeniti predložak timskog prostora. Korisnik koji kreira predložak timskog prostora ne treba ga dijeliti s administratorima predloška timskog prostora.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Kad imenujete korisnika ili grupu za kreatora predloška timskog prostora, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za kreiranje predložaka timskih prostora. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saznajte više</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Korisnici i grupe kojima su dodijeljene povlastice koje nisu iste kao i povlastice Administratora i Autora.<p>Možete premjestiti te korisnike i grupe u ulogu autora predloška timskim prostora tako da ih uklonite iz uloge Ostali i zatim im dodijelite ulogu autora predloška timskog prostora.<p>Možete ponovno pregledati povlastice koje su trenutno dodijeljene ovim korisnicima i grupama koristeći IBM Administrativnu konzolu za Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Administratori timskog prostora koji imaju dozvolu <b>Potpuna kontrola</b> na spremištu (spremištu objekata). Ne možete promijeniti listu administratora timskog prostora kroz administracijski alat.<p>Administratori timskog prostora mogu izbrisati ili izmijeniti bilo koji timski prostor. Korisnik koji kreira timski prostor ne treba ga dijeliti s administratorima timskog prostora.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Kad imenujete korisnika ili grupu za kreatora timskog prostora, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za kreiranje timskih prostora. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saznajte više</a>",
		admin_repcfg_teamspace_user_hover_p8: "Kad imenujete korisnika ili grupu za korisnika timskog prostora, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za korištenje timskih prostora. Međutim, korisnik mora biti član timskog prostora radi pristupa timskom prostoru. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Saznajte više</a><p><b>Savjet:</b> Ako želite da svi korisnici u vašoj okolini mogu vidjeti timske prostore, možete dodati #AUTHENTICATED-USERS pseudo-račun ulozi korisnika timskog prostora.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Korisnici i grupe kojima su dodijeljene povlastice koje nisu iste kao i povlastice Administratora, Autora i Korisnika.<p>Možete premjestiti te korisnike i grupe u preddefinirane uloge tako da ih uklonite iz uloge Ostali i zatim im dodijelite uloge timskog prostora.<p>Možete ponovno pregledati povlastice koje su trenutno dodijeljene ovim korisnicima i grupama koristeći IBM Administrativnu konzolu za Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administratori predloška unosa koji imaju dozvolu <b>Potpuna kontrola</b> na spremištu (spremištu objekata). Ne možete promijeniti listu administratora predloška unosa kroz administracijski alat. <p>Administratori predloška unosa mogu izbrisati ili izmijeniti bilo koji predložak unosa. Korisnik koji kreira predložak unosa ne treba ga dijeliti s administratorima predložaka unosa.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Kad imenujete korisnika ili grupu za kreatora predloška unosa, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za kreiranje predložaka unosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saznajte više</a>",
		admin_repcfg_entry_template_user_hover_p8: "Kad imenujete korisnika ili grupu za korisnika predloška unosa, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za korištenje predložaka unosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saznajte više</a><p><b>Savjet:</b> Ako želite da svi korisnici u vašoj okolini mogu koristiti predloške unosa, možete dodati #AUTHENTICATED-USERS pseudo-račun ulozi korisnika predložaka unosa.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Korisnici i grupe kojima su dodijeljene povlastice koje nisu iste kao i povlastice Administratora, Autora i Korisnika.<p>Možete premjestiti te korisnike i grupe u preddefinirane uloge tako da ih uklonite iz uloge Ostali i zatim im dodijelite uloge predloška unosa.<p>Možete ponovno pregledati povlastice koje su trenutno dodijeljene ovim korisnicima i grupama koristeći IBM Administrativnu konzolu za Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Kad imenujete korisnika ili grupu za kreatora predloška timskog prostora, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za kreiranje predložaka timskih prostora u spremištu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saznajte više</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Kad imenujete korisnika ili grupu za kreatora timskog prostora, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za kreiranje timskih prostora u spremištu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saznajte više</a>",
		admin_repcfg_teamspace_user_hover_cm: "Kad imenujete korisnika ili grupu za korisnika timskog prostora, korisniku ili grupi se dodjeljuju odgovarajuće povlastice na spremištu za korištenje timskih prostora. Međutim, korisnik mora biti član timskog prostora radi pristupa timskom prostoru. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Saznajte više</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Kad imenujete korisnika ili grupu za kreatora predloška unosa, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za kreiranje predložaka unosa u spremištu. <br/><br/>Međutim, sigurnosne postavke za određeni predložak unosa određuju povlastice koje korisnik ili grupa ima na predlošku unosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saznajte više</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Kad imenujete korisnika ili grupu za editora predloška unosa, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za izmjenu predložaka unosa u spremištu. <br/><br/>Međutim, sigurnosne postavke za određeni predložak unosa određuju povlastice koje korisnik ili grupa ima na predlošku unosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saznajte više</a>",
		admin_repcfg_entry_user_hover_cm: "Kad imenujete korisnika ili grupu za korisnika predloška unosa, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za upotrebu predložaka unosa na spremištu. <br/><br/>Međutim, sigurnosne postavke za određeni predložak unosa određuju povlastice koje korisnik ili grupa ima na predlošku unosa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saznajte više</a>",
		admin_repcfg_office_template_creators_hover_cm: "Kad imenujete korisnika ili grupu kao kreatora Microsoft Office Online predloška ili predloška usluge uređivanja, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za kreiranje datoteke predloška u spremištu. <br/><br/>Međutim, sigurnosne postavke određene datoteke predloška određuju povlastice koje korisnik ili grupa ima za predložak. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a>",
		admin_repcfg_office_template_editors_hover_cm: "Kad imenujete korisnika ili grupu kao kreatora Microsoft Office Online predloška ili predloška usluge uređivanja, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za mijenjanje datoteka predložaka u spremištu.  <br/><br/>Međutim, sigurnosne postavke određene datoteke predloška određuju povlastice koje korisnik ili grupa ima za predložak. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a>",
		admin_repcfg_office_template_user_hover_cm: "Kad imenujete korisnika ili grupu kao korisnika Microsoft Office Online predloška ili predloška usluge uređivanja, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za primjenu predloška prilikom kreiranja novog Office Online dokumenta ili dokumenta usluge uređivanja u web klijentu.  <br/><br/>Međutim, sigurnosne postavke određene datoteke predloška određuju povlastice koje korisnik ili grupa ima za predložak.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a>",
		admin_repcfg_draft_creators_hover_cm: "Korisnicima koji trebaju suradnički uređivati dokumente u Microsoft Office Online ili Uredi servisu mora biti pridružena ova uloga. Nemojte tim korisnicima dodijeliti ulogu editora ili korisnika. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a>",
		admin_repcfg_draft_editors_hover_cm: "Korisnici koji trebaju suradnički uređivati dokumente u Microsoft Office Online ili Uredi servisu moraju biti pridruženi na <b>kreator</b> ulogu. Ako korisnik ima dodijeljenu ulogu editora, ne može kreirati skice, koje su potrebne za zajedničko uređivanje.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a>",
		admin_repcfg_draft_user_hover_cm: "Korisnici koji trebaju suradnički uređivati dokumente u Microsoft Office Online ili Uredi servisu moraju biti pridruženi na <b>kreator</b> ulogu. Ako korisnik ima dodijeljenu ulogu korisnika, ne može kreirati skice, koje su potrebne za zajedničko uređivanje.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Saznajte više</a>",		
		admin_repcfg_search_others_hover_p8: "Korisnici i grupe kojima su dodijeljene povlastice koje nisu iste kao i povlastice Administratora, Autora i Korisnika.<p>Možete premjestiti te korisnike i grupe u preddefinirane uloge tako da ih uklonite iz uloge Ostali i zatim im dodijelite uloge pretraživanja.<p>Možete ponovno pregledati povlastice koje su trenutno dodijeljene ovim korisnicima i grupama koristeći IBM Administrativnu konzolu za Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Administratori pretraživanja koji imaju dozvolu <b>Potpuna kontrola</b> na spremištu (spremištu objekata). Ne možete promijeniti listu administratora pretraživanja kroz administracijski alat. <br /><br />Administratori pretraživanja mogu izbrisati ili izmijeniti bilo koje pretraživanje. Korisnik koji kreira pretraživanje ne treba ga dijeliti s administratorima pretraživanja.",
		admin_repcfg_search_creators_hover_p8: "Kad imenujete korisnika ili grupu za kreatora pretraživanja, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za kreiranje pretraživanja. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Saznajte više</a>",
		admin_repcfg_search_user_hover_p8: "Kad imenujete korisnika ili grupu za korisnika pretraživanja, korisniku ili grupi se dodjeljuje odgovarajuća sigurnost na spremištu za korištenje pretraživanja.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Saznajte više</a><br /><br /><b>Savjet:</b> Ako želite da svi korisnici u vašoj okolini mogu koristiti pretraživanja, možete dodati #AUTHENTICATED-USERS pseudo-račun ulozi korisnika pretraživanja.<br/><br />Po defaultu, korisnik pretraživanja može kreirati pretraživanja i pretraživanja kroz više spremišta, ali ih ne može spremiti. Možete spriječiti korisnike pretraživanja da kreiraju pretraživanja na način da koriste desktop na kojem su izabrane sljedeće opcije:<ul><li><b>Spriječi korisnike da kreiraju pretraživanja</b></li><li><b>Spriječi korisnike u kreiranju pretraživanja kroz više spremišta</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Kad imenujete korisnika ili grupu za kreatora pretraživanja, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za kreiranje i spremanje pretraživanja i pretraživanja kroz više spremišta u spremište. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saznajte više</a><br /><br /><b>Važno:</b> Osigurajte da kreatori pretraživanja koriste desktope na kojima su izabrane sljedeće opcije:<ul><li><b>Spriječi korisnike da kreiraju pretraživanja</b></li><li><b>Spriječi korisnike u kreiranju pretraživanja kroz više spremišta</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Kad imenujete korisnika ili grupu za editora pretraživanja, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za izmjenu postojećih pretraživanja i pretraživanja kroz više spremišta. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saznajte više</a><br /><br /><b>Savjet:</b> Po defaultu, editor pretraživanja može kreirati pretraživanja i pretraživanja kroz više spremišta, ali ih ne može spremiti. Možete spriječiti editore pretraživanja da kreiraju pretraživanja na način da koriste desktop na kojem su izabrane sljedeće opcije:<ul><li><b>Spriječi korisnike da kreiraju pretraživanja</b></li><li><b>Spriječi korisnike u kreiranju pretraživanja kroz više spremišta</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Kad imenujete korisnika ili grupu za korisnika pretraživanja, korisniku ili grupi se dodjeljuju odgovarajuće povlastice za otvaranje i izvođenje spremljenih pretraživanja i pretraživanja kroz više spremišta. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Saznajte više</a><br /><br /><b>Savjet:</b> Po defaultu, korisnik pretraživanja može kreirati pretraživanja i pretraživanja kroz više spremišta, ali ih ne može spremiti. Možete spriječiti korisnike pretraživanja da kreiraju pretraživanja na način da koriste desktop na kojem su izabrane sljedeće opcije:<ul><li><b>Spriječi korisnike da kreiraju pretraživanja</b></li><li><b>Spriječi korisnike u kreiranju pretraživanja kroz više spremišta</b></li></ul>",
		admin_repcfg_db_encoding: "Kodiranje znakova za bazu podataka poslužitelja:",
		admin_repcfg_db_encoding_hover: "Default kodiranje znakova za IBM Content Manager bazu podataka je UTF-8.",
		admin_repcfg_db_encoding_specify: "Navedite kodiranje znakova za bazu podataka",
		admin_repcfg_db_encoding_utf8: "UTF-8 kodiranje",
		admin_repcfg_db_encoding_utf8_hover: "Navedite ovu opciju ako koristite UTF-8 kodiranu bazu podataka. IBM Content Navigator će koristiti UTF-8 kodiranje u svrhu provjere dužine nizova znakova za vrijednosti svojstva stavke.",
		admin_repcfg_db_encoding_other: "Ostala kodiranja",
		admin_repcfg_db_encoding_other_hover: "Navedite ovu opciju ako koristite bazu podataka s kodiranjem koje nije UTF-8. IBM Content Navigator će koristiti brojač znakova u svrhu provjere dužine nizova znakova za vrijednosti svojstva stavke.",
		admin_repcfg_language_codes: "Jezične šifre poslužitelja:",
		admin_repcfg_language_codes_avail: "Dostupno",
		admin_repcfg_language_codes_sel: "Izabrano",
		admin_repcfg_pdf_conversion: "MIME tipovi za konvertiranje u PDF dokumente u prilozima:",
		admin_repcfg_pdf_conversion_avail: "Dostupno",
		admin_repcfg_pdf_conversion_sel: "Izabrano",

		admin_repcfg_box_share_enable_classes_label: "Klase koje se mijenjaju radi podrške Box dijeljenja:",
		admin_repcfg_box_share_enable_classes_hover: "Možete promijeniti klasu tako da sprema ID datoteke u Box kad se stavka dijeli.",
		admin_repcfg_box_share_enable_classes_warning: "Važno: Svaka klasa koju navedete će se promijeniti tako da podržava Box dijeljenje. Nakon što ste spremili vaše promjene, one se ne mogu ukloniti iz klasa.<br><br>Morate se povezati sa spremištem kao administrator poslužitelja knjižnice radi izmjene klasa.",
		admin_repcfg_box_share_enable_classes_available: "Dostupne klase",
		admin_repcfg_box_share_enable_classes_selected: "Izabrane klase",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Pohrani ID Box dijeljenja",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Ova klasa je već promijenjena tako da može spremiti ID Box dijeljenja. Ovu opciju ne možete ukloniti.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Promijenite ovu klasu tako da pohranjuje ID datoteke u Boxu kod dijeljenja stavke.",

		admin_repcfg_redaction: "Redakture bazirane na ulogama:",
		admin_repcfg_enable_redaction_hover: "Navedite da li želite koristiti redakture bazirane na ulozi na dokumentima u ovom spremištu.<br/><br/>Redakture bazirane na ulogama se primjenjuju prilikom preuzimanja, ispisa, prikaza dokumenata s preglednikom ili prilikom prikaza u obliku sličice. Koji korisnici mogu vidjeti dokument zavisi o njihovoj ulozi i o primjenjivim politikama redakture.",

		admin_repcfg_redaction_policy_permission_text: "Dodijelite editore politika:",
		admin_repcfg_redaction_policy_editors_hover: "Izaberite korisnike i grupe koji će kreirati, mijenjati i brisati politike i uloge redaktura.",
		admin_repcfg_redaction_policy_editors_select_hover: "Editori politika redaktura mogu kreirati, mijenjati i brisati politike i uloge redaktura.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Administratori politika redaktura mogu dodijeliti editore politika redaktura.<br/><br/>Možete promijeniti listu administratora politika redakture pomoću IBM Administrativne konzole za Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Administratori politika redaktura mogu dodijeliti editore politika redaktura.<br/><br/>Možete promijeniti listu administratora politika redakture pomoću IBM Content Manager klijenta sistemske administracije.",

		admin_repcfg_redaction_permission_text: "Dodijelite editore redaktura:",
		admin_repcfg_redaction_editors_hover: "Izaberite korisnike i grupe koji će kreirati, mijenjati i brisati redakture bazirane na ulozi. Nakon što izaberete korisnike i grupe kao editore, morate ih navesti kao editore u politikama redakture prije nego što oni mogu početi uređivati redakture bazirane na ulogama.",
   		admin_repcfg_redaction_editors_select_hover: "Editori redaktura mogu kreirati, mijenjati i brisati redakture bazirane na ulogama kad su također navedeni kao editori u politikama redaktura.",
   		admin_repcfg_redaction_administrators_hover_p8: "Administratori redaktura mogu dodijeliti editore redaktura.<br/><br/>Možete promijeniti listu administratora redaktura pomoću IBM Administrativne konzole za Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Administratori redaktura mogu dodijeliti editore redaktura.<br/><br/>Možete promijeniti listu administratora redaktura pomoću IBM Content Manager klijenta sistemske administracije.",
		admin_repcfg_entry_template: "Upravljanje predlošcima unosa:",
		admin_repcfg_entry_template_enable_classes_label: "Klase koje se mijenjaju radi podrške predloška unosa",
		admin_repcfg_oos_reference_attribute_label: "Referentni atributi za Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Važno: Svaka klasa koju navedete će se promijeniti na način da podržava predloške unosa. Nakon što ste spremili vaše promjene, one se ne mogu ukloniti iz klasa.<br><br>Klasu možete promijeniti za jednu ili obje od sljedećih svrha:<br><ul><li>Radi spremanja ID-a predloška unosa koji se koristi za dodavanje stavke, tako da se postavke predloška unosa primjenjuju prilikom promjene stavke</li><li>Samo kod hijerarhijskih klasa foldera: Radi podrške pridruživanja folderu predloška unosa</li></ul>Morate se povezati sa spremištem kao administrator poslužitelja knjižnice radi izmjene klasa.",
		admin_repcfg_entry_template_enable_classes_warning: "Važno: Svaka klasa koju navedete će se promijeniti na način da podržava predloške unosa. Nakon što ste spremili vaše promjene, one se ne mogu ukloniti iz klasa.<br><br>Morate se povezati sa spremištem kao administrator poslužitelja knjižnice radi izmjene klasa.",
		admin_repcfg_entry_template_enable_classes_available: "Dostupne klase",
		admin_repcfg_entry_template_enable_classes_selected: "Izabrane klase",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Spremi ID predloška unosa",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Promijenite ovu klasu na način da sprema ID predloška unosa koji se koristi za dodavanje stavke tako da se postavke predloška unosa primjenjuju prilikom promjene stavke.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Spremi pridruživanja foldera",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Promijenite ovu klasu na način da može podržavati pridruživanja foldera predloška unosa. Ova opcija je dostupna samo za hijerarhijske klase foldera.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Ova klasa je već promijenjena na način da može spremiti ID predloška unosa. Ovu opciju ne možete ukloniti.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Ova klasa je već promijenjena na način da može spremiti pridruživanja foldera. Ovu opciju ne možete ukloniti.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Za spremanje pridruživanja foldera mogu se koristiti samo hijerarhijske klase foldera i ne-hijerarhijske klase.",
		admin_repcfg_entry_template_root_folder_association_title: "Predlošci unosa pridruženi osnovnom folderu:",
		admin_repcfg_entry_template_root_folder_association_hover: "Navedite koje predloške unosa želite pridružiti osnovnom folderu u vašem IBM Content Manager spremištu.<br /><br />Ako pridružite predloške unosa osnovnom folderu i korisnici dodaju stavke u hijerarhijski folder, tada će se predložak unosa uvijek koristiti za dodavanje stavki.",
		admin_repcfg_entry_template_root_folder_association_button: "Postavi pridruživanja",
		admin_repcfg_oos_enable_classes_label: "Klase koje se mijenjaju radi podrške proizvoda Office online i usluge uređivanja:",
		admin_repcfg_oos_enable_classes_warning: "Važno: Svaka klasa koju navedete će se promijeniti tako da funkcionira s proizvodom Microsoft Office Online ili uslugom uređivanja. Nakon što spremite promjene, referentni atribut koji se automatski dodaje klasi više nije moguće ukloniti.<br><br>Morate se povezati sa spremištem kao administrator poslužitelja knjižnice radi izmjene klasa.",
		admin_repcfg_oos_enable_classes_available: "Dostupne klase",
		admin_repcfg_oos_enable_classes_selected: "Izabrane klase",
		admin_repcfg_oos_enable_classes_note: "Važno:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Ova klasa nije podržana u proizvodu Microsoft Office Online ili u usluzi uređivanja.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Politika verzija za klasu postavljena je tako da se uvijek koriste verzije, a Microsoft Office Online i usluga uređivanja to ne podržavaju. Izaberite drugu klasu.",
		admin_repcfg_download_recording: "Prati preuzimanja:",
		admin_repcfg_download_recording_hover: "Preuzimanja se prate po defaultu kad je u spremištu instaliran dodatak Social Collaboration Base Extensions. Međutim, onemogućavanje ove opcije može poboljšati performanse spremišta.<br><br>Ako onemogućite ovu opciju, korisnici će vidjeti broj preuzimanja koji je izveden prije nego je opcija onemogućena.",
		admin_repcfg_sync_service: "Usluge sinkronizacije",
		admin_repcfg_download_ignored: "Zanemari preuzimanja za specifične korisnike:",
		admin_repcfg_download_ignored_hover: "Možete zanemariti preuzimanja koja zahtijevaju određeni korisnici, kao što su administratori ili sistemski računi, u svrhu preciznijeg odražavanja broja korisnika koji su preuzeli dokument. Na primjer, ako imate određeni račun koji se koristi za preuzimanje sadržaja u svrhu generiranja mjesečnog izvještaja, možete zanemariti preuzimanja koja zahtijeva taj račun.<br><br><b>Ograničenje:</b> Ne možete navesti grupe.",

		admin_repcfg_add_as_major_version: "Dodaj za glavnu verziju:",
		admin_repcfg_enable_add_as_major_version: "Da",
		admin_repcfg_disable_add_as_major_version: "Ne",
		admin_repcfg_checkin_as_major_version: "Označi kao glavnu verziju:",
		admin_repcfg_enable_checkin_as_major_version: "Da",
		admin_repcfg_disable_checkin_as_major_version: "Ne",
		admin_repcfg_annotation_security: "Sigurnost primjedbi:",
		admin_repcfg_inherit_annotation_security: "Duplicira sigurnost sadržanog dokumenta",
		admin_repcfg_default_annotation_security: "Koristi default sigurnost primjedbe",
		admin_repcfg_connection_point: "Točka povezivanja s procesom rada:",
		admin_repcfg_include_workflow_definition: "Prikaži klasu definicije procesa rada:",
		admin_repcfg_include_form_template: "Prikaži klasu predloška obrasca:",
		admin_repcfg_enable_include_workflow_definition: "Da",
		admin_repcfg_disable_include_workflow_definition: "Ne",

		admin_repcfg_status_columns: "Ikone statusa:",
		admin_repcfg_status_columns_hover: "Navedite stanja za koja želite vidjeti ikone. Ikone stanja se prikazuju pored dokumenata, foldera i radnih stavki na popisu sadržaja.",
		admin_repcfg_status_columns_documents_or_folders: "Prikaži ikonu kad dokumenti ili folderi:",
		admin_repcfg_status_columns_documents: "Prikaži ikonu kad su dokumenti:",
		admin_repcfg_status_columns_documents_checked_out: "Odjavljeni",
		admin_repcfg_status_columns_documents_declared_records: "Deklarirani kao slogovi",
		admin_repcfg_status_columns_documents_minor_versions: "Imaju sporedne verzije",
		admin_repcfg_status_columns_documents_compound_document: "Složeni dokumenti",
		admin_repcfg_status_columns_documents_bookmarks: "Imaju knjiške oznake",
		admin_repcfg_status_columns_documents_hold: "Na čekanju su",
		admin_repcfg_status_columns_documents_notes: "Imaju napomene",
		admin_repcfg_status_columns_work_items: "Prikaži ikonu kad su radne stavke:",
		admin_repcfg_status_columns_work_items_locked: "Zaključane",
		admin_repcfg_status_columns_work_items_checked_out: "Odjavljeni",
		admin_repcfg_status_columns_work_items_deadline: "Imaju krajnji rok",
		admin_repcfg_status_columns_work_items_suspended: "Obrada je odgođena",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF konfiguracijska datoteka:",
		admin_repcfg_transform_xml_file: "Prilagođena datoteka pretvorbe:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Omogući",
		admin_repcfg_disable_ssl: "Onemogući",
		admin_repcfg_keyringdb_file: "Keyring datoteka baze podataka:",
		admin_repcfg_keyringstash_file: "Keyring skrivena datoteka:",
		admin_repcfg_od_sso: "Jedna prijava",
		admin_repcfg_od_enable_sso: "Omogući",
		admin_repcfg_od_disable_sso: "Onemogući",
		admin_repcfg_od_sso_password: "Lozinka",
		admin_repcfg_advanced_label: "Napredno",
		admin_repcfg_custom_properties_label: "Prilagođena svojstva:",
		admin_repcfg_new_button_label: "Novo",
		admin_repcfg_edit_button_label: "Uredi",
		admin_repcfg_delete_button_label: "Izbriši",
		admin_repcfg_custom_head1: "Naziv",
		admin_repcfg_custom_head2: "Vrijednost",
		admin_repcfg_ecpdialog_title_new: "Novo prilagođeno svojstvo",
		admin_repcfg_ecpdialog_title_edit: "Uređivanje prilagođenog svojstva",
		admin_repcfg_ecpdialog_name: "Naziv:",
		admin_repcfg_ecpdialog_value: "Vrijednost:",
		admin_repcfg_ecpdialog_save: "Spremi",
		admin_repcfg_ecpdialog_create: "Kreiranje",
		admin_repcfg_ecpdialog_cancel: "Opoziv",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Ova vrijednost je potrebna. Vrijednost ne smije sadržavati praznine i ne može biti duplikat.",

		admin_repcfg_cmis_use_gzip_encoding: "Koristi GZIP kodiranje",

		admin_repcfg_task_mgr_proxy: "ID veze upravitelja zadataka:",
		admin_repcfg_task_mgr_proxy_hover: "Za Box dijeljenje ili brisanje timskog prostora, upravitelj zadataka koristi ID i lozinku administratora za izvođenje pozadinskih zadataka koji mijenjaju spremište.<br><br>Kliknite Postavi i prijavite se na spremište koristeći važeći ID i lozinku administratorskog korisnika spremišta.",
		admin_task_manager_not_enabled_warning: "Za ovu opciju potreban je servis upravitelja zadataka, ali taj servis nije omogućen.  Servis upravitelja zadataka možete omogućiti za sve desktope na stranici Općenito u postavkama.",
		admin_task_manager_not_enabled_and_user_warning: "Za ovu opciju potreban je servis upravitelja zadataka, ali taj servis nije omogućen. Postavite ID povezivanja upravitelja zadataka na ovoj stranici i zatim na stranici Općenito u postavkama omogućite servis upravitelja zadataka za sve desktope.",
		admin_task_manager_user_id_pw_not_set_warning: "Ova opcija zahtijeva servis upravitelja zadataka i ID i lozinka administratorskog korisnika. Postavite ID povezivanja upravitelja zadataka na ovoj stranici.",
		admin_repcfg_teamspaces_delete_task_id: "Administrator spremišta:",
		admin_repcfg_teamspaces_delete_task_password: "Lozinka:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Morate navesti administratora poslužitelja knjižnica da omogućite usluzi upravitelja zadatka da obriše timski prostor na spremištu.",
		admin_repcfg_teamspaces_delete_task_hover: "Po defaultu, kad korisnik obriše timski prostor, on postaje skriven. Svi folderi i dokumenti u timskom prostoru ostaju u spremištu. <br /> <br />Kad omogućite ovu opciju, samo dokumenti koji su stavljeni u druge foldere spremišta ostaju u spremištu.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Ako imate velik broj timskih prostora u svojoj okolini, može uzeti dosta vremena da bi se prikazali svi timski prostori na kartici <b>Timski prostori</b>. Imate mogućnost izbora ove opcije da smanjite vrijeme trajanja popunjavanja liste.<br /><br />Ako korisnik treba raditi s timskim prostorom koji je izvan raspona koji ste naveli, korisnik može koristiti polje <b>Filter</b> da pronađe timski prostor.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Ako izaberete ovu opciju, korisnici s ulogom vlasnika timskog prostora mogu mijenjati  uloge koje su pridružene timskim prostorima kreiranim prije IBM Content Navigator, verzije 2.0.2.<br /><br />Ova opcija ne utječe na timske prostore koji se kreiraju s IBM Content Navigatorom, verzije 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Navedite želite li da korisnici mogu kreirati timske prostore i predloške timskih prostora u spremištu. <br /><br /><b>Važno:</b> Spremište mora podržavati hijerarhijske foldere. <br /><br />Ako omogućite timske prostore, IBM Content Navigator kreira model podataka timskog prostora u spremištu. Model podataka uključuje ACL objekte, povlastice, skupove povlastica i dva nova tipa stavki.",
		admin_repcfg_folder_selector_hover: "Izaberite folder koji želite koristiti kao osnovni folder kad korisnici pregledavaju dokumente. Ako nemate konfigurirane hijerarhijske foldere u vašem spremištu, ova postavka vam omogućuje podršku pregledavanja putem definiranja osnovnog foldera. Ako pak imate definirane hijerarhijske foldere u svom spremištu, ova postavka nadjačava konfigurirani osnovni folder spremišta.",
		admin_repcfg_cm_use_sso_hover: "Navedite da li je dozvoljena jedna prijava za korisnike s postavljenom povlasticom Povjerljiva prijava. <br /><br /><b>Važno:</b> Jedna prijava mora biti omogućena na Content Manager poslužitelju i WebSphere Application Server mora biti konfiguriran za LTPA da bi ovaj konfiguracijski parametar radio.",
		admin_repcfg_cm_direct_retrieve_hover: "Izravni dohvat je omogućen po defaultu, jer omogućuje da Web klijent brzo dohvati sadržaj iz upravitelja resursa. <br /><br />Možete onemogućiti ovu opciju ako ne želite da klijentska aplikacija izravno pristupa upravitelju resursa ili ako imate vatrozid ili proxy poslužitelj, koji sprječava pristup Web klijenta do upravitelja resursa preko URL-ova. Na primjer, vatrozid može spriječiti korisnike u pregledu dokumenata u aplet pregledniku kad je omogućen izravni dohvat.",
		admin_repcfg_cmItemTypesToDisplay: "Ako želite da korisnici ne vide tipove resursa i tipove stavki na vašem IBM Content Manager poslužitelju, možete prikazati samo tipove modela dokumenata. Tipovi stavki se prikazuju kad korisnici kreiraju pretraživanja, dodaju dokumente i kreiraju foldere.",
		admin_repcfg_cm_language_codes_hover: "Navedite jezike na kojima se vraćaju podaci s Content Manager poslužitelja. Popis raspoloživih jezika kontrolira lista definicija jezika na poslužitelju. <br /><br /><b>Zapamtite:</b> Podaci na Web klijentu se prikazuju na jeziku koji je postavljen u korisnikovom Web pretražitelju.",
		admin_repcfg_cm_pdf_conversion_hover: "Navedite tipove dokumenata koji se konvertiraju u PDF kad korisnik pošalje dokument u više dijelova kao prilog e-pošte. Svi dijelovi se spajaju u jedan PDF dokument.",
		admin_repcfg_use_teamspaces_p8_hover: "Navedite želite li da korisnici mogu kreirati timske prostore i predloške timskih prostora u ovom spremištu. <br /><br />Ako omogućite timske prostore, IBM Content Navigator kreira model podataka timskog prostora u spremištu. Model podataka uključuje predloške svojstava, prilagođene objekte, objekt foldera i nekoliko foldera.",
		admin_repcfg_use_entry_template_p8_hover: "Navedite želite li da korisnici imaju mogućnost kreiranja i upravljanja predlošcima unosa u ovom spremištu iz IBM Content Navigatora. Ako ne omogućite ovu funkciju, korisnici mogu tražiti i koristiti predloške unosa koji se već nalaze u spremištu.<br /><br />Ako omogućite upravljanje predloškom unosa, IBM Content Navigator ažurira model podataka predloška unosa u spremištu. Ažuriranje uključuje nova svojstva. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Saznajte više</a>",
		admin_repcfg_use_entry_template_cm_hover: "Navedite želite li da korisnici imaju mogućnost kreiranja i upravljanja predlošcima unosa u ovom spremištu iz IBM Content Navigatora.<br /><br />Ako omogućite upravljanje predloškom unosa, IBM Content Navigator kreira model podataka predloška unosa u spremištu. Model podataka uključuje novi objekt kontrolne liste pristupa, nova svojstva i novi tip podatka. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Saznajte više</a>",
		admin_repcfg_sync_service_p8_hover: "Navedite želite li da korisnici mogu sinkronizirati svoje favoritne stavke na svim svojim desktopima i mobilnim uređajima.<br><br><b>Važno:</b> Da biste koristili ovu funkciju također morate dovršiti sljedeće zadatke:<br><ul><li>Navedite <b>Javni URL  usluga sinkronizacije</b> u odjeljku <b>Usluge sinkronizacije</b> administracijskog alata.</li><li>Dodajte ovo spremište desktopu na kojem su omogućene usluge sinkronizacije.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Navedite da li se opcija glavna verzija izabere po defaultu kad korisnici dodaju dokumente u spremište. <br /><br />Korisnici imaju opciju brisanja te opcije ako žele dodati dokument kao sporednu verziju.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Navedite da li se opcija glavna verzija izabere po defaultu kad korisnici prijave dokumente u spremište. <br /><br />Korisnici imaju opciju brisanja te opcije ako žele prijaviti dokument kao sporednu verziju.",
		admin_repcfg_p8_annotation_security_hover: "Navedite koji tip sigurnosti se primjenjuje na primjedbe po defaultu. <br /><br />Korisnici imaju opciju promjene sigurnosti za primjedbe.",
		admin_repcfg_p8_connection_point_hover: "Ako želite koristiti IBM FileNet P8 procese rada, izaberite Process Engine točku povezivanja. Točka povezivanja koju izaberete određuje koji procesi rada su dostupni korisnicima koji pristupaju ovom spremištu.",
		admin_repcfg_p8_include_workflow_definition_hover: "Ako prikažete IBM FileNet P8 klasu dokumenata definicija procesa rada na Web klijentu, korisnici mogu tražiti i dodavati definicije procesa rada u spremište.",
		admin_repcfg_p8_include_form_template_hover: "Ako prikažete IBM FileNet P8 klasu dokumenata predložaka obrazaca na Web klijentu, korisnici mogu tražiti i dodavati predloške obrazaca u spremište.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Navedite potpuno kvalificiranu stazu AFP2PDF konfiguracijske datoteke ovog spremišta na poslužitelju Web aplikacija. AFP2PDF Transform je potreban za pregled i ispis AFP podataka.<br /><br /><b>Zapamtite</b> AFP2PDF Transform mora biti instaliran da bi se koristio ovaj parametar.",
		admin_repcfg_od_transform_xml_file_hover: " Ako želite koristiti prilagođenu pretvorbu za konverziju Content Manager OnDemand sadržaja, navedite potpuno kvalificiranu stazu XML datoteke koja se koristi za definiranje pretvorbe. XML datoteka se mora nalaziti na poslužitelju Web aplikacija.",
		admin_repcfg_od_ssl_hover: "Navedite da li se koristi SSL za šifriranje komunikacije između IBM Content Navigator poslužitelja aplikacija i Content Manager OnDemand poslužitelja knjižnice i poslužitelja objekata.<br /><br /><b>Važno:</b> Kad omogućite SSL za Content Manager OnDemand, to ne uključuje komunikaciju između IBM Content Navigator poslužitelja aplikacija, Web poslužitelja ili korisničkih radnih stanica.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Navedite potpuno kvalificiranu stazu keyring datoteke baze podataka za ovo spremište na poslužitelju Web aplikacija. Na primjer, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Keyring datoteka baze podataka sadrži certifikate vašeg pouzdanog korijena. Trebate koristiti jaku zaštitu sistema datoteka da biste spriječili neovlašteni pristup ovoj datoteci.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Navedite potpuno kvalificiranu stazu keyring skrivene datoteke za ovo spremište na poslužitelju Web aplikacija. Na primjer, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Keyring skrivena datoteka sadrži lozinku za keyring datoteku baze podataka. Trebate koristiti jaku zaštitu sistema datoteka da biste spriječili neovlašteni pristup ovoj datoteci.",
		admin_repcfg_od_sso_password_hover: "Navedite lozinku koja se koristi za jednu prijavu na OnDemand poslužitelj.",
		admin_repcfg_od_custom_properties_hover: "ODWEK Java API podržava prilagođena svojstva. Ako želite koristiti neko prilagođeno svojstvo kod povezivanja sa spremištem preko Web klijenta, navedite nazive i vrijednosti prilagođenih svojstava.<br /><br />Za više informacija o podržanim prilagođenim svojstvima, pogledajte ODWEK Java API Javadocs, koji se nalaze u /api poddirektoriju ODWEK instalacijskog direktorija.",
		admin_repcfg_od_custom_properties_name_hover: "Unesite naziv svojstva.",
		admin_repcfg_od_custom_properties_value_hover: "Unesite vrijednost svojstva.",
		admin_repcfg_od_use_sso_hover: "Navedite je li dozvoljena jedna prijava korisnika.<br /><br /><b>Važno:</b> Jednostruka prijava mora biti omogućena na Content Manager OnDemand poslužitelju da bi taj konfiguracijski parametar radio.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Koristite GZIP šifriranje za ovaj CMIS izvor.",
		admin_repcfg_cm_use_part_file_name: "Ime datoteke koje se koristi pri preuzimanju dokumenata:",
		admin_repcfg_cm_use_part_file_name_help: "Navedite kako se određuju imena datoteka kad korisnik preuzima dokumente.",
		admin_repcfg_cm_use_part_file_name_enable: "Koristite ime datoteke",
		admin_repcfg_cm_use_part_file_name_disable: "Koristite ime stavke u spremištu",
		admin_repcfg_add_doc_name: "Default naziv za dodani dokument:",
		admin_repcfg_add_doc_name_hover: "Korisnici mogu promijeniti naziv prije dodavanja dokumenta.",
		admin_repcfg_add_doc_name_empty: "Ništa (prazno)",
		admin_repcfg_add_doc_name_file_name: "Naziv datoteke izabranog dokumenta",

		admin_repcfg_compound_documents: "Funkcije složenog dokumenta:",
		admin_repcfg_compound_documents_hover: "Omogućite P8 funkcije složenog dokumenta, kao što je navigacija.",
		admin_repcfg_cm_action_list_config_enabled: "Lista akcija radne stavke:",
		admin_repcfg_cm_action_list_config_hover: "Kad konfigurirate usmjeravanje dokumenta u klijentu sistemske administracije Content Managera, možete specificirati listu akcija koje korisnik može izvesti na radnoj stavci.<br /><br />Omogućite ovu opciju ako želite koristiti listu akcija iz Content Manager poslužitelja. Ove postavke se koriste u kontekstnom izborniku i u prozoru Uređivanje svojstava  radne stavke.<br /><br /><b>Važno:</b> postavke u listi akcija nadjačavaju prilagođene izbornike koje ste konfigurirali u administracijskom alatu Content Navigatora. Ako lista akcija ne sadrži postavke, korisnik neće moći poduzeti akcije na radnim stavkama.",

		admin_repcfg_box_share: "Box dijeljenje",
		admin_repcfg_box_share_p8_hover: "Omogućite korisnicima dijeljenje dokumenta iz ovog spremišta. Dijeljenje dokumenta uključuje kopiranje datoteke u Box, kreiranje veze i slanje veze u e-pošti.<br /><br />Ako omogućite Box dijeljenje, IBM Content Navigator kreira model podataka Box dijeljenja u spremištu. Da biste instalirali dodatak IBM Content Navigator Box dijeljenja, morate biti povezani sa spremištem kao administrator poslužitelja knjižnica.",

		admin_menu_type_icon: "Ikona Tip izbornika",
		admin_menu_toolbar_hover: "Traka s alatima",
		admin_menu_toolbar_custom_hover: "Prilagođena traka s alatima",
		admin_menu_contextMenu_hover: "Kontekstni izbornik",
		admin_menu_contextMenu_custom_hover: "Prilagođeni kontekstni izbornik",

		admin_menu_contextMenu_custom_empty: "Nijedan prilagođeni kontekstni izbornik nije definiran u konfiguriranim plug-inovima.",
		admin_menu_toolbar_custom_empty: "Nijedna prilagođena traka s alatima nije definirana u konfiguriranim plug-inovima.",

		admin_file_type_category_filters: "Filteri tipa datoteka:",
		admin_file_type_category_filters_hover_help: "Navedite listu tipova datoteka koje korisnici mogu koristiti u sljedećim situacijama:<ul><li>Da suzite listu rezultata prilikom pretraživanja ili pregledavanja u IBM Content Navigator for Microsoft Office<li>Da suzite listu rezultata prilikom traženja IBM FileNet P8 spremišta u Web klijentu<li>Da ograničite tipove datoteka koje korisnici mogu dodati u spremište prilikom korištenja predloška unosa</ul>",
		admin_file_type_only_use_in_et_folder_association: "Pokaži samo u pridruživanjima folderu za predloške unosa",
		admin_office_config_properties_label: "Office svojstva",
		admin_office_config_type_label: "Tip podataka",
		admin_office_config_mapped_property_label: "Svojstva spremišta",
		admin_office_config_properties_hover_help: "Unesite i onda dodajte naziv svakog Microsoft Office svojstva koje želite mapirati u svojstvo spremišta. Tipovi podataka svih svojstava moraju se podudarati",
		admin_office_config_mapped_property_hover_help: "Ako želite mapirati Office svojstva na više od jednog spremišta, morate kreirati novo mapiranje svojstava",
		admin_new_property_mapping_title: "Novo mapiranje svojstva",
		admin_property_mapping_title: "Uređivanje mapiranja svojstva",
		admin_property_mapping_instruction: "Navedite koja Microsoft Office svojstva želite mapirati na svojstvo u spremištu. Tip podataka Office svojstva mora se podudarati s tipom podataka svojstva spremišta. <br /><br />Ako Office dokument ima više od jednog svojstva iz mapiranja, IBM Content Navigator koristi prvo svojstvo na listi za popunjavanje svojstva u spremištu.",
		admin_ms_general_settings: "Opća konfiguracija:",
		admin_ms_delete_local_settings: "Izbriši lokalne datoteke kad korisnici:",
		admin_ms_outlook_options: "Outlook integracija:",
		admin_ms_enable_props_mapping: "Mapiraj Office svojstva na svojstva spremišta kad korisnici:",
		admin_ms_open_doc_when_checkout: "Automatski odjave dokument kad je otvoren",
		admin_ms_open_doc_when_checkout_hover_help: "Izbor ove opcije sprječava korisnika da pregazi datoteku u spremištu sa starijom verzijom iste datoteke.",
		admin_ms_prompt_close_office: "Zatraži od korisnika da prijave dokumente kod zatvaranja Office aplikacija",
		admin_ms_prompt_close_office_hover_help: "Izbor ove opcije sprječava da korisnici zaborave prijaviti svoj rad.",
		admin_ms_add_with_entry_template_only: "Pokaži samo akciju Dodaj s predloškom",
		admin_ms_delete_local_on_add: "Izbriši lokalne datoteke kad korisnici dodaju dokumente",
		admin_ms_delete_local_on_checkin: "Izbriši lokalne datoteke kad korisnici prijave dokumente ili opozovu odjave",
		admin_ms_delete_local_on_add_hover_help: "Kad korisnik dodaje dokument u IBM Content Navigatora for Microsoft Office, dokument se dodaje u spremište, a lokalna kopija dokumenta ostaje otvorena, tako da korisnici mogu odmah odjaviti dokument da naprave promjene.<br /><br />Izaberite ovu opciju za automatsko zatvaranje i brisanje lokalne kopije dokumenta nakon dodavanja dokumenta u spremište.",
		admin_ms_delete_local_on_checkin_hover_help: "Kad korisnik prijavljuje dokument u IBM Content Navigatoru for Microsoft Office, dokument se prijavljuje u spremište i lokalna kopija dokumenta ostaje otvorena. Također, nakon akcije opoziva odjave, lokalna kopija dokumenta ostaje otvorena. S otvorenom lokalnom kopijom, korisnici mogu odmah ponovno odjaviti dokument da bi napravili promjene.<br /><br />Izaberite ovu opciju za automatsko zatvaranje i brisanje lokalne kopije dokumenta nakon prijave dokumenta ili opoziva akcije odjave.",
		admin_ms_delete_local_on_save: "Spremi dokument",
		admin_ms_prompt_for_props_on_add: "Traži korisnike da navedu vrijednosti svojstava kad dodaju e-mailove u spremište",
		admin_ms_prompt_for_props_on_add_hover_help: "Ako ne izaberete ovu opciju, Web klijent koristi mapiranje Outlook svojstva koje je definirano za  spremište.<br /><br />Ako imate pridružene predloške unosa i folder u koji se dodaju e-mailovi, korisnik možda neće dobiti prompt za nijedno svojstvo.",
		admin_ms_delete_email_on_add: "Izbriši e-mail na poslužitelju e-pošte kad se e-mail doda spremištu",
		admin_ms_send_email_as_link_only: "Spriječi korisnike da šalju dokumente kao priloge",
		admin_ms_send_email_as_link_only_hover_help: "Ako izaberete ovu opciju, korisnici mogu samo slati dokumente kao veze iz Outlooka. Ova opcija osigurava da smo korisnici s odgovarajućim povlasticama za spremište mogu vidjeti dokumente.",
		admin_ms_enable_prop_mapping_for_add: "Mapiraj Office svojstva na svojstva spremišta kad korisnici dodaju ili prijave dokumente",
		admin_ms_checkout_document_after_add: "Automatski odjave dokumente nakon što su dodani u spremište",
		admin_no_default_document_type_filtering: "Po defaultu vrati sve tipove dokumenta kad korisnik izvede pretraživanja",
		admin_no_default_document_type_filtering_hover_help: "U IBM Content Navigator for Microsoft Office, default ponašanje je takvo da korisnici prilikom izvođenja pretraživanja vide samo tip dokumenta za trenutnu aplikaciju. Na primjer, po defaultu je izabran Word tip dokumenta kad se pretražuje kroz Microsoft Word.<br/><br/>Međutim, izbor ove opcije briše kontrolne kućice uz tipove dokumenata tako da korisnici vide sve dokumente koji se vraćaju pretraživanjem. Korisnici mogu nadjačati ovu postavku izborom jednog ili više tipova dokumenata prije izvođenja pretraživanja.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Specificirajte da li se mapiraju svojstva dokumenata definirana za Microsoft Office dokumente na svojstva definirana za spremište.<br /></br /><b>Važno:</b> Ako omogućite ovu funkciju, morate konfigurirati Office svojstva za svako spremište u vašoj okolini. Ako ne mapirate Office svojstva na svojstva svog spremišta, ova funkcija neće raditi.<br /><br />Ova postavka se ne odnosi na Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Izaberite ovu opciju da smanjite broj koraka koje korisnici trebaju poduzeti da bi radili s dokumentima nakon što su dokumenti dodani u spremište.<br /></br /><b>Savjet:</b> Kako bi osigurali da korisnici prijave datoteke natrag u spremište, izaberite <b>Zatraži od korisnika da prijave dokumente kod zatvaranja Office aplikacija</b>.",
		admin_ms_show_details_recently_used: "Pokaži detalje <b>Nedavno korištene</b> stavke",
		admin_ms_show_details_recently_used_hover_help: "Po defaultu, kad gledate listu Nedavno korištenih stavaka, detalji za stavke su skriveni  zato da bi se moglo prikazati više stavaka. Kad izaberete ovu opciju, na listi Nedavno korištene stavke se detalji za prvi dokument prikazuju po  defaultu u okviru detalja.",
		admin_ms_show_no_permissions_warning: "Pokaži upozorenje kad korisnici uređuju svojstva ili prijavljuju dokument, a nemaju dozvolu za gledanje predloška unosa dokumenta",
		admin_ms_show_no_permissions_warning_hover_help: "Ako je dokument iz spremišta kreiran pomoću predloška unosa, a korisnik nema dozvolu za gledanje predloška unosa dokumenta, tada se predložak unosa ne dohvaća.<br /><br/>Prema tome, kad korisnik uređuje svojstva dokumenta, svojstva se prikazuju bez predloška unosa. Zatim, kad korisnik prijavljuje dokument, dokument se prijavljuje bez korištenja predloška unosa.<br /><br />Po defaultu, ove akcije se događaju bez informiranja korisnika o tome da se ne koristi predložak unosa. Upozorenje se samo zapisuje u datoteku dnevnika.<br /><br />Izaberite ovu opciju ako želite prikazati upozorenja koja odmah obavještavaju korisnika kad se ne koristi predložak unosa.",
		admin_ms_hide_search_actions: "Skupi odjeljak filtera pretraživanja",
		admin_ms_hide_search_actions_hover_help: "Po defaultu, korisnici mogu primijeniti filter akcije za specificiranje akcije, korisnika ili grupe korisnika i biranje datuma ili vremenskog intervala kad se akcija događa. Na primjer, možete tražiti dokumente koje ste samo vi dodali u  zadnjem mjesecu.<br /><br />Ako ne želite dozvoliti korisnicima da primjenjuju filtere akcija, izaberite ovu opciju da sakrijete filtere akcija i smanjite broj polja koja se prikazuju kad se definira kriterij pretraživanja.",
		admin_ms_hide_save_document: "Sakrij opciju <b>Spremi</b> u traci",
		admin_ms_hide_save_document_hover_help: "Upotrebom opcije <b>Spremi</b>, korisnici mogu spremiti promjene dokumenta u spremište bez prijavljivanja dokumenta.",
		admin_ms_indicate_managed_email_on_add: "Označi da li je e-mail već dodan u spremište",
		admin_ms_indicate_managed_email_on_add_hover_help: "Izbor ove opcije daje korisnicima na znanje da je e-mail već u spremištu, što može smanjiti ponavljanje dodavanja e-maila u spremište.  Kad je izabrana ova opcija, u Microsoft Outlooku se kreira nova kategorija boje s nazivom IBM ECM. Svaki e-mail koji se dodaje u spremište automatski se dodaje u kategoriju Upravljano u IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Opcije dodavanja u grupi Uredi:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Navedite koje opcije <b>Dodavanja</b> su dostupne iz grupe <b>Uredi</b> na traci:<ul><li>Izaberite <b>Prikaži sve opcije dodavanja</b> za prikaz gumba Dodaj i svih akcija dodavanja koje su dostupne iz grupe uređivanja.</li><li>Izaberite <b>Sakrij sve opcije dodavanja</b> da spriječite korisnike u dodavanju dokumenata u spremište ili ako želite da korisnici dodaju dokumente samo iz timskog prostora.</li><li>Izaberite <b>Sakrij akciju dodavanja s predloškom</b> ako želite forsirati pridruživanja foldera predloška unosa i spriječiti korisnike u izboru drukčijeg predloška unosa.</li><li>Izaberite <b>Pokaži samo akciju dodavanja s predloškom</b> ako želite zahtijevati od korisnika dodavanje dokumenata korištenjem predložaka unosa.</li></ul>",
		admin_ms_show_edit_group_add_button: "Pokaži sve opcije dodavanja (default)",
		admin_ms_hide_edit_group_add_button: "Sakrij sve opcije dodavanja",
		admin_ms_hide_add_with_entry_template: "Sakrij akciju dodavanja s predloškom",
		admin_ms_managed_in_ecm: "Upravljano u IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Ako korisnici prikazuju kategorije u Microsoft Outlooku, ova oznaka se prikazuje za e-mail koji je dodan IBM Content Manageru ili IBM FileNet Content Manager spremištu.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Naziv kategorije Upravljano u IBM ECM ne može sadržavati zarez (,) ili točku sa zarezom (;).",
		admin_delete_open_docs_after_close: "Automatski izbriši otvorene dokumente kad korisnici zatvore dokumente",
		admin_admin_delete_open_docs_after_close_hover_help: "Kad korisnik otvori dokument u IBM Content Navigator for Microsoft Office, dokument se preuzima u direktorij dokumenata korisnika ili na lokaciju navedenu u postavkama praćenja datoteka za desktop.<br><br>Izaberite ovu opciju da izbrišete datoteke koje su otvorene, ali nisu odjavljene nakon što su korisnici zatvorili dokumente. Izbor ove opcije omogućuje vam da:<ul><li>Forsiraj usklađenost s IT politikama</li><li>Osigurajte da korisnici rade sa zadnjim verzijama dokumenata</li><li>Smanjite veličinu disk prostora koja se koristi za spremanje dokumenata</li><ul>",
		admin_ms_custom_command_configuration: "Prilagođene naredbe:",
		admin_ms_custom_command_configuration_hover_help: "Možete dodati do četiri naredbe u IBM Content Navigator for Microsoft Office traku s alatima u Microsoft Office aplikacijama. Naredbe se mogu koristiti za otvaranje URL-a. Na primjer, možete dodati naredbu da otvorite uslugu koja se može koristiti za traženje korisnika i grupa.",
		admin_ms_custom_command_dialog_title: "Uredi prilagođenu naredbu",
		admin_ms_custom_command_dialog_intro_text: "Definirajte naredbu koja se može koristiti za otvaranje URL-a iz IBM Content Navigator for Microsoft Office trake s alatima u Microsoft Office aplikacijama.",
		admin_ms_custom_command_id: "Naredba ${0}",
		admin_ms_custom_command_available_label: "Dostupno",
		admin_ms_custom_command_available_hover_help: "Ako URL koji je definiran za naredbu treba biti stavljen offline radi održavanja, možete očistiti kontrolnu kućicu za naredbu tako da se naredba ne prikazuje u Microsoft Officeu.<br/><br/><b>Važno:</b> Korisnici se moraju odjaviti s desktopa da bi promjene bile vidljive u IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID naredbe",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Oznaka",
		admin_ms_custom_command_label_hover_help: "Navedite oznaku za prikaz za naredbu u Microsoft Officeu.",
		admin_ms_custom_command_description_label: "Opis",
		admin_ms_custom_command_description_hover_help: "Navedite opis za prikaz za naredbu u Microsoft Officeu.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Navedite potpuno kvalificirani URL za otvaranje iz Microsoft Office. URL može biti Web stranica ili usluga.",
		admin_ms_custom_command_icon_label: "Ikona",
		admin_ms_custom_command_icon_hover_help: "Navedite naziv datoteke ikone za prikaz, na primjer, CommandIcon.png.<br/><br/><b>Važno:</b> Datoteku ikone morate dodati u poddirektorij Plug-inovi u IBM Content Navigator for Microsoft Office instalacijskom direktoriju na svakom klijentskom stroju.<br/><br/>Ako se datoteka ikone ne nalazi u direktoriju Plug-inovi ili ako niste naveli ikonu, prikazuje se default ikona customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Oznaka grupe:",
		admin_ms_custom_command_group_name_hover_help: "Možete navesti oznaku grupe za prikaz ispod prilagođenih naredbi na traci.<br/><br/>Ako ne navedete oznaku, oznaka grupe bit će <b>Prilagođene naredbe</b>.",
		admin_ms_ribbon_tab_label: "Oznaka kartice IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Unesite naziv koji želite da se prikazuje za karticu IBM Content Navigator for Microsoft Office na traci Microsoft Officea. Ako ne navedete naziv, naziv kartice bit će \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Zatvori okvir zadatka kad korisnik otvori dokumente",
		admin_ms_close_task_pane_on_open_hover_help: "Izaberite ovu opciju ako želite maksimizirati prostor u kojem korisnici mogu vidjeti dokumente u Microsoft Officeu.<br/><br/>Microsoft Office 2010 korisnici: Da osigurate zatvoreni okvir zadataka za sve dokumente, omogućite način sučelja za više dokumenata (MDI) klikom na <b>Opcije</b> &gt; <b>Napredno</b> i brisanjem opcije <b>Prikaži sve prozore u traci zadataka</b>.",
		admin_ms_open_document_options: "Otvori opcije dokumenta:",
		admin_ms_delete_local_file_options: "Izbriši lokalne opcije datoteke:",
		admin_ms_add_and_checkin_options: "Dodaj i prijavi opcije:",
		admin_ms_search_options: "Opcije pretraživanja:",
		admin_ms_display_options: "Prikaži opcije:",
		admin_ms_bidirection_enable_label: "Omogući podršku za dvosmjerni tekst",
		admin_ms_bidirection_enable_hover_help: "Izaberite ovu opciju ako želite omogućiti korisnicima da unose ili pregledavaju IBM Content Navigator for Microsoft Office smjerom različitim od s lijeva na desno.",
		admin_ms_text_direction_label: "Osnovni smjer teksta za sadržaj:",
		admin_ms_text_direction_hover_help: "Navedite smjer kojim se tekst unosi u ulazna polja u IBM Content Navigator for Microsoft Office. Ova postavka također kontrolira kako se prikazuju stavke poput naziva foldera ili vrijednosti svojstava.",
		admin_ms_control_threshold_label: "Minimalni broj stavki za koje se omogućuje pregled unaprijed:",
		admin_ms_control_threshold_hover_help: "Po defaultu se pregled unaprijed omogućuje kad broj stavki dosegne 50 za pretraživanje ili postavljanje svojstava koji imaju unaprijed definirane vrijednosti na padajućoj listi. Možete promijeniti minimalnu vrijednost.",

		admin_ms_default_email_class: "Klasa koju treba koristiti kod dodavanja e-pošte",
		admin_ms_default_email_class_hover_help: "Bilo koja e-pošta dodana u ovo spremište iz Microsoft Outlooka će se dodati klasi koju navedete. Korisnici ne mogu promijeniti klasu.",
		admin_ms_default_folder_class: "Klasa koju treba koristiti kod kreiranja foldera",
		admin_ms_default_folder_class_hover_help: "Bilo koji folder koji je kreiran u ovom spremištu iz Microsoft Office aplikacije će se dodati klasi koju navedete.  Korisnici ne mogu promijeniti klasu.",
		admin_ms_default_folder_warn_title: "Ne možete koristiti klasu ${0} kao klasu koja se koristi kod kreiranja foldera.",
		admin_ms_default_folder_warn_name_prop_invalid: "Svojstvo naziva klase nije niz znakova, a naziv foldera mora biti niz znakova.<br />Izaberite drukčiju klasu koju ćete koristiti kad kreirate foldere ili zajedno s IBM Content Manager administratorom promijenite naziv svojstva klase u niz znakova.",
		admin_ms_default_folder_warn_req_props: "Klasa uključuje obavezna svojstva koja nemaju vrijednosti. Međutim, korisnici ne mogu specificirati vrijednosti obaveznih svojstava kad kreiraju foldere iz IBM Content Navigatora za Microsoft Office.<br />Izaberite drukčiju klasu koju ćete koristiti kad kreirate foldere ili zajedno s IBM Content Manager administratorom promijenite obavezna svojstva u opcijska ili unaprijed napunite obavezna svojstva s nekom vrijednošću.",
		admin_ms_delimiter_for_office_properties: "Graničnik za svojstva niza znakova s više vrijednosti",
		admin_ms_delimiter_for_office_properties_hover_help: "Navedite znak koji će se koristiti kao graničnik za svojstva niza znakova koja se mapiraju na svojstva niza znakova s više vrijednosti. Po defaultu možete dodijeliti skup vrijednosti svojstvu niza znakova s više vrijednosti koristeći točku sa zarezom (;) kao graničnik za odvajanje vrijednosti. Međutim, ako jedna od vrijednosti niza znakova sadrži točku sa zarezom, ne možete dodati tu vrijednost ako ne promijenite graničnik na neki drugi znak. Na primjer, možete staviti zarez (,) kao graničnik",
		admin_ms_outlookPropertyRemembrance : "Zapamtite postavke kad dodajete poruke i priloge",
		admin_ms_outlookPropertyRemembrance_hover_help : "Vrijednosti svojstava, lokacija, izbora klase i sigurnosti koje su dodijeljene porukama i prilozima se pamte i koristit će se kao default postavke u budućim dodavanjima stavaka.",

		admin_file_type_name_hover_help: "Lebdeća pomoć za naziv",
		admin_file_type_description_hover_help: "Lebdeća pomoć za opis",
		admin_file_type_dialog_title: "Uređivanje filtera za tipove datoteka",
		admin_new_file_type_dialog_title: "Novi filter tipa datoteka",
		admin_mobile_feature_dialog_title: "Funkcija",
		admin_mobile_feature_dialog_new_title: "Nova funkcija",
		admin_file_type_instructions: "Kreirajte filter kojeg korisnici mogu koristiti da suze svoju listu rezultata pretraživanja. Možete mapirati višestruke  MIME tipove na filter.",
		admin_file_type_filter_place_holder: "Filtriraj MIME tipove",
		admin_new_button_label: "Novo",
		admin_edit_button_label: "Uredi",
		admin_delete_button_label: "Izbriši",
		admin_copy_button_label: "Kopiraj",
		admin_verify_button_label: "Provjeri",
		admin_availabe_filters_label: "Dostupni filteri",
		admin_selected_filters_label: "Izabrani filteri",

		admin_mobile_access: "Mobilan pristup aplikacijama:",
		admin_mobile_access_hover_help: "Ako želite koristiti IBM Content Navigator iz mobilnog uređaja, preporučuje se da omogućite korisnike za pristup ovom desktopu putem mobilne aplikacije.<br /><br />Ako onemogućite pristup ovom desktopu iz mobilne aplikacije, korisnici i dalje mogu pristupiti Web klijentu iz svojih mobilnih pretražitelja. Međutim, Web klijent nije dizajniran da mu se pristupa putem mobilnih uređaja.",

		admin_mobile_access_allow_label: "Dozvoli korisnicima:",
		admin_mobile_allow_add_photos: "Dodavanje fotografija iz foto aparata i foto knjižnice",
		admin_mobile_allow_add_docs: "Dodavanje dokumenata i kreiranje foldera u spremištu",
		admin_mobile_allow_open_docs: "Otvaranje dokumenata u drugim aplikacijama",
		admin_mobile_allow_add_docs_hover_help: "Korisnici mogu kreirati foldere ili dodati dokumente iz drugih mobilnih aplikacija, kao što je dokument pripojen e-mailu.",
		admin_mobile_allow_open_docs_hover_help: "Od korisnika se traži da izaberu aplikaciju koju će koristiti za gledanje izabranog dokumenta. Ako je dostupna samo jedna aplikacija, tada se ista koristi.",
		admin_mobile_features: "Funkcije:",
		admin_mobile_features_hover_help: "Navedite koje funkcije ovog desktopa se prikazuju u IBM Content Navigator mobilnoj aplikaciji.",
		admin_mobile_new_feature_button_label: "Nova funkcija",
		admin_mobile_move_up_button_label: "Pomakni gore",
		admin_mobile_move_down_button_label: "Pomakni dolje",
		admin_desktop_mobile_instructions: "Upute za mobilne postavke nalaze se ovdje",
		admin_desktop_max_number_of_docs_to_add: "Maksimalni broj dokumenata za dodavanje:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Navedite maksimalan broj dokumenata koje korisnici mogu odjednom dodati. Default maksimum je 50. Međutim, možete postaviti maksimum do 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maksimalni broj stavki za mijenjanje:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Navedite maksimalan broj stavki koje korisnici mogu odjednom promijeniti. Default maksimum je 50. Međutim, možete postaviti maksimum do 300.",
		admin_desktop_max_conversion_size: "Maksimalna količina podataka za PDF konverzije (u MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Ograničenje:</b> Ova postavka nije podržana na IBM Content Manager OnDemand.<br/><br/>Navedite maksimalnu količinu podataka koja se može konvertirati u PDF. Ovo ograničenje se primjenjuje kad korisnici preuzimaju PDF datoteke ili šalju stavke putem e-maila u obliku PDF datoteka.<br /><br />Ako se veličina pojedinog dokumenta ne može utvrditi, dokumenti se i dalje konvertiraju u PDF.<br/><br/>Default ograničenje je 200 MB. Postavljanje ograničenja iznad 200 MB može utjecati na performanse.",
		admin_desktop_timeProperties: "Vremenska oznaka:",
		admin_desktop_time_properties_hover_help: "<b>Samo za IBM FileNet P8 korisnike:</b> Ova postavka se odnosi na prilagođena svojstva i ne odnosi se na sistemska svojstva. Na primjer, svojstvo Promijenio i dalje će prikazivati dio vremenske oznake ako izaberete <b>Prikaži samo datumski dio vremenske oznake</b>.<br/><br/>Ova postavka ne mijenja vremensku oznaku u spremištu.",
		admin_desktop_disable_time_stamp: "Prikaži potpunu vremensku oznaku",
		admin_desktop_enable_time_stamp: "Prikaži samo datumski dio vremenske oznake",
		admin_desktop_timezone: "Vremenska zona:",
		admin_desktop_timezone_localuser: "Prikaži korisnikovu lokalnu vremensku zonu",
		admin_desktop_timezone_alluser: "Prikaži istu vremensku zonu kod svih korisnika",
		admin_desktop_timezone_hover_help: "Možete specificirati da li korisnici vide vremensku zonu koja se temelji na lokalnoj vremenskoj zoni ili svi korisnici vide istu vremensku oznaku.<br/><br/>Ova postavka ne mijenja vremensku oznaku u spremištu. Međutim, izabrana postavka određuje vremensku zonu koja se koristi za kreiranje vremenske oznake u spremištu kad korisnici dodaju ili mijenjaju stavke.",
		admin_desktop_mobile_feature_display_label: "Prikaz",
		admin_desktop_mobile_feature_icon_file_label: "Datoteka ikone",
		admin_mobile_feature_dialog_icon_file_label: "Datoteka ikone:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Naziv",
		admin_desktop_mobile_select_feature_label: "Izbor komponente",
		admin_desktop_mobile_feature_icon_label: "Ikona Komponenta",
		admin_desktop_share_admin_none: "Administrator nije postavljen.",
		admin_desktop_share_admin_edit_label: "Postavi administratora...",
		admin_browse_icon: "Ikona Pregled",
		admin_search_icon: "Ikona Pretraživanje",
		admin_favorites_icon: "Ikona Favoriti",
		admin_casesearch_icon: "Ikona Predmet",
		admin_datacap_icon: "Ikona Datacap",
		admin_system_defined: "Sistemski definirano",
		admin_icon_file_placeholder_text: "Lokacija datoteke (npr. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Korijen",
		admin_folder_default: "Default",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Trake s alatima",
		admin_menu_context_menus: "Kontekstni izbornici",
		admin_menu_office_toolbars: "Naredbe Microsoft Office trake",
		admin_menu_office_menus: "Microsoft Office kontekstni izbornici",

		admin_file_name_label: "Naziv datoteke:",
		admin_exportconfiguration_security_label: "Uključi korisnike i grupe koji su autorizirani da koriste ovaj desktop",
		admin_exportconfiguration_instruction: "Možete eksportirati svoje desktope u datoteke, uključujući konfiguracije spremišta i konfiguracije plug-ina koji su pridruženi izabranim desktopima, koje možete importirati u drugu instancu IBM Content Navigatora.",
		admin_exportconfiguration_dialog_label: "Eksport desktopa",
		admin_exportconfiguration_button_label: "Eksport",
		admin_dialog_select_all: "Izaberi sve",
		admin_dialog_deselect_all: "Očisti sve",

		admin_importconfiguration_instruction: "Stavke u izabranoj konfiguracijskoj datoteci bit će importirane u ovaj sistem. Međutim, ako već postoji stavka s istim ID-om na sistemu, morate odlučiti da li ćete ju zadržati ili pregaziti.",
		admin_importconfiguration_dialog_label: "Import desktopa",
		admin_importconfiguration_reason_dialog_label: "Import razloga za redakturu",
		admin_importconfiguration_button_label: "Import",
		admin_to_be_imported: "Konfiguracijska stavka za import",
		admin_on_target_system: "Postojeća stavka na ciljnom sistemu",
		admin_import_short_warning_message: "Sljedeće stavke već postoje na ovom sistemu. Izaberite stavke koje želite zamijeniti na ovom sistemu:",
		admin_import_warning_message: "Sljedeće konfiguracijske stavke imaju iste ID-ove kao stavke koje postoje na ciljnom sistemu. Izaberite samo one stavke koje želite importirati i nadjačati na ciljnom sistemu.<br /><br />Ako ne želite nadjačati konfiguracijsku stavku, kreirajte kopiju stavke na instanci iz koje ste eksportirali desktop, dajte joj drugi ID i pridružite je desktopu. Ponovno eksportirajte desktop i tada importirajte desktop na ovu instancu.",
		admin_choose_file_to_import_label: "Izaberite datoteku za import:",
		admin_download_imported_log: "Preuzmi izvještaj",
		admin_desktop_import_summary: "Sažetak importa desktopa",
		admin_reason_import_summary: "Sažetak importa razloga za redakturu",
		admin_rba_import_summary: "Sažetak importa uloge administriranja",
		admin_import_open_tabs_checking: "Prije nego možete importirati desktope, u administrativnom alatu morate zatvoriti sve kartice osim kartice <bold>Desktopi</bold>.",
		admin_import_no_conflict: "Importirat će se sljedeće stavke:",
		admin_desktop_invalid: "Pogrešan desktop",
		admin_desktop_warning: "Desktop je spremljen uz upozorenja.",
		admin_repos_warning: "Spremište je spremljeno uz upozorenja.",
		admin_config_type_icon: "Ikona Tip konfiguracijske stavke",

		admin_approval_workflow: "Proces rada odobrenja",
		admin_approval_workflow_hover: "Dozvoljava korisnicima pokretanje preddefiniranog procesa rada odobrenja. Možete onemogućiti proces rada odobrenja tako da korisnici mogu pokrenuti prilagođeni proces rada odobrenja koji je definiran s pretplatom. Po defaultu je proces rada odobrenja omogućen.<br><br><b>Važno:</b> Ako omogućite proces rada odobrenja, morate također osigurati da je jedna ili obje definicije preddefiniranog procesa rada (ICNParallelDocumentApproval.pep i  ICNSequentialDocumentApproval.pep) dodana u spremište i prenesena u Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Ne možete specificirati korisnike i grupe koji imaju pristup ovom desktopu.",
		admin_cannot_add_desktop_members_error_explanation: "Nemate odgovarajuće dozvole za dohvat informacija o korisnicima i grupama.",
		admin_cannot_add_desktop_members_error_userResponse: "Prijavite se s drukčijim korisničkim imenom ili zatražite da vam sistemski administrator za IBM Content Manager dodijeli povlasticu UserACLOwner, koja je potrebna za dohvat informacija o korisnicima i grupama.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Ne možete izabrati korisnike i grupe.",
		admin_cannot_select_users_groups_error_explanation: "Nemate odgovarajuće dozvole za dohvat informacija o korisnicima i grupama.",
		admin_cannot_select_users_groups_error_userResponse: "Prijavite se s drukčijim korisničkim imenom ili zatražite da vam sistemski administrator za IBM Content Manager dodijeli povlasticu UserACLOwner, koja je potrebna za dohvat informacija o korisnicima i grupama.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2 klijent nije pronađen.",
		oauth_client_not_found_error_explanation: "OAuth2 ID klijenta ${0} nije pronađen.",
		oauth_client_not_found_error_userResponse: "Kontaktirajte sistemskog administratora i obavijestite ga da OAuth2 ID klijenta nije pronađen.",
		oauth_client_not_found_error_adminResponse: "Pregledajte konfiguraciju spremišta i provjerite sadrži li odgovarajući OAuth2 ID klijenta.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "client_id",

		oauth_login_failed_error: "Prijava na spremište nije bila uspješna.",
		oauth_login_failed_error_explanation: "Pokušaj prijave na spremište ${0} nije bio uspješan.",
		oauth_login_failed_error_userResponse: "Provjerite id korisnika i lozinku i pokušajte ponovno.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Pojavila se greška kod pokušaja prijave na ${0}.",
		oauth_error_return_error_explanation: "${0} autorizacija nije uspješno izvedena.",
		oauth_error_return_error_userResponse: "Kontaktirajte sistemskog administratora i dostavite mu sljedeće informacije: ${0} autorizacija nije uspješno izvedena i vratila je sljedeću poruku greške: <br>${1}<br><b>greška:</b> ${2}.<br><b>opis:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Dodatne informacije o greški nalaze se u datotekama dnevnika poslužitelja Web aplikacija.  Za više informacija o datotekama dnevnika pogledajte &quot;Datoteke dnevnika IBM Content Navigatora&quot; u IBM Knowledge Centeru. Pokušajte ispraviti problem koristeći informacije o pokušaju ${0} autorizacije i provjerite je li omogućen OAuth2.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth ciljna aplikacija",
		oauth_error_return_error_1: "error_message",
		oauth_error_return_error_2: "greška",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Neprepoznata OAuth poruka greške.",

		delete_share_permission_error: "Dijeljenje nije izbrisano.",
		delete_share_permission_error_explanation: "Nemate odgovarajuće dozvole za brisanje dijeljenja.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Ne možete dijeliti ovu stavku.",
		class_not_support_share_error_explanation: "Klasa ${0} nije postavljena da podržava dijeljenje.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Ne možete dijeliti ovu stavku.",
		rbr_not_support_share_error_explanation: "U stavku je dodan osjetljivi sadržaj.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Uređaj s kojeg se korisnik pokušava prijaviti nije ovlašten za pristupanje računu korisnika.",
		box_oauth_error_invalid_request: "U zahtjevu nedostaje potrebni parametar, zahtjev sadrži nevažeću vrijednost parametra, sadrži parametar naveden više puta ili je na neki drugi način pogrešno formiran.",
		box_oauth_error_unsupported_response_type: "Poslužitelj autorizacije ne podržava dohvaćanje šifre autorizacije koristeći ovu metodu.  Provjerite vrijednost parametra šifre u vašem zahtjevu.",
		box_oauth_error_access_denied: "Vlasnik resursa ili poslužitelj autorizacije je odbacio zahtjev.",
		box_oauth_error_temporarily_unavailable: "Vaš poslužitelj ima ograničenu brzinu, trebate smanjiti broj autorizacijskih zahtjeva ili pričekati.",
		box_oauth_error_unknown: "Neprepoznata Box poruka greške.",

		admin_default_search_type: "Default tip pretraživanja",
		admin_default_search_type_hover: "Navedite koja se opcija bira po defaultu u polju <b>Traži</b> u izborniku <b>Opcije pretraživanja</b>.",
		admin_default_search_type_documents: "Dokumenti",
		admin_default_search_type_folders: "Folderi",
		admin_default_search_type_folders_and_documents: "Dokumenti i folderi",

		admin_restricted_search_type: "Dozvoli pretraživanje na",
		admin_restricted_search_type_hover: "Korisnici po defaultu mogu pretraživati i dokumente i foldere. Ako želite sakriti opciju pretraživanja i ograničiti pretraživanje samo na dokumente, izaberite Dokumenti i poništite oznaku Folderi.</br>,</br> Ako ste omogućili pretraživanje i dokumenata i foldera, izaberite default opciju koja će se prikazati nakon otvaranja okvira pretraživanja.",
		admin_restricted_search_type_documents: "Dokumenti",
		admin_restricted_search_type_folders: "Folderi",
		admin_restricted_search_type_folders_and_documents: "Dokumenti i folderi",

		admin_default_search_version: "Default verzija pretraživanja",
		admin_default_search_version_hover: "Navedite koja se opcija bira po defaultu u polju <b>Verzija</b> u izborniku <b>Opcije pretraživanja</b>.",

		admin_all_classes_search: "Pretražite sve klase",
		admin_all_classes_search_hover: "Specificirajte ako je korisnicima dozvoljeno pretraživati sve klase i ako je tako, što treba biti uključeno u pretraživanje dokumenata.",
		admin_all_classes_search_removed_hover: "Opcije za pretraživanje svih klasa nisu raspoložive zato što je parametar context-param allPseudoClassHidden u web.xml Navigator aplikacije postavljen na true.",
		admin_all_classes_search_hide: "Uklonite izbor za pretraživanje svih klasa",
		admin_all_classes_search_documents_only_documents: "Pretraživanje dokumenata uključuje samo dokumente, spremljena pretraživanja i predloške unosa",
		admin_all_classes_search_documents_non_folders: "Pretraživanje dokumenata uključuje sve stavke koje nisu folderi",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Pogled stabla:",
		admin_feature_config_tree_view_hoverhelp: "Navedite mogu li korisnici pristupiti listi foldera u spremištu kroz okvir Pregled. Ako sakrijete okvir Pregled, korisnici moraju koristiti listu sadržaja za kretanje do foldera u spremištu.",
		admin_feature_config_selected_repositories_label: "Spremišta:",
		admin_feature_config_selected_repositories_hoverhelp: "Izaberite spremišta kojima korisnici mogu pristupiti u ovoj funkciji.",
		admin_feature_config_selected_repositories_select_state_hdr: "Izbor spremišta",
		admin_feature_config_selected_repositories_name_hdr: "Naziv spremišta",
		admin_feature_config_selected_repositories_show_hdr: "Pokaži",
		admin_feature_config_invalid_icon_title: "Funkciji nedostaju neke potrebne postavke",
		admin_feature_config_view_select_hdr: "Izbor pogleda",
		admin_feature_config_view_hdr: "Pogled",
		admin_feature_config_view: "Pogled",
		admin_feature_config_views: "Pogledi:",
		admin_feature_config_views_hoverhelp: "Navedite koje poglede korisnici mogu primijeniti na listu sadržaja. Pogledi se prikazuju po redoslijedu koji su navedeni. Prvi izabrani pogled je default pogled za komponentu.<br><br><b>Važno:</b> Ako omogućite pogled filmske vrpce, morate konfigurirati preglednik HTML konverzije da vidite preglede dokumenata.",

		admin_custom_dialog_name: "Naziv:",
		admin_custom_dialog_value: "Vrijednost:",
		admin_custom_setting_name_hover: "Unesite naziv Daeja ViewONE postavke koju želite dodati u vašu konfiguraciju. Pogledajte Daeja ViewONE dokumentaciju za više informacija o konfiguracijskim postavkama.",
		admin_custom_setting_value_hover: "Unesite vrijednost koju želite koristiti za Daeja ViewONE konfiguracijsku postavku. Pogledajte Daeja ViewONE dokumentaciju za više informacija o važećim vrijednostima konfiguracijskih postavki.",

		entry_template_name_required_message: "Obavezno je polje naziva u postavkama predloška unosa.",
		entry_template_name_invalid_message: "Polje naziva u postavkama predloška unosa ne može sadržavati sljedeće znakove: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Kad su u postavkama predloška unosa izabrani specifični korisnici i grupe u polju Podijeli sa, morate navesti najmanje jednog korisnika ili grupu.",
		entry_template_no_permission_to_save_to_teamspace_message: "Nemate dozvolu za dodavanje predložaka unosa u timski prostor (${0}) koji je izabran iz polja Spremi u, u postavkama predloška unosa.",
		entry_template_save_in_destination_required_message: "Morate specificirati default lokaciju za spremanje u odjeljku <b>Postav lokacije za pohranu</b>.",
		entry_template_save_in_destination_must_select_folder: "Ako sakrijete polje <b>Spremi u</b> i zahtijevate da korisnici dodaju nove stavke u folder, morate izabrati folder u polju <b>Default spremanje na lokaciji</b> u odjeljku <b>Postav lokacije za pohranu stavki</b>.",
		entry_template_what_to_save_required_message: "Izaberite najmanje jedan izbor onoga što želite spremiti na Postav opcija.",
		entry_template_custom_workflow_empty_message: "Ako izaberete <b>Prilagođeni proces rada...</b>, morate tražiti i izabrati proces rada koji želite koristiti.",

		entry_template_new: "Novi predložak unosa",
		entry_template_name_hover: "Naziv predloška unosa ne smije sadržavati sljedeće znakove: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Naziv predloška unosa ne smije sadržavati niti jedan od sljedećih znakova: * \\ / : ? \" < > |",
		entry_template_description_hover: "Navedite opis koji će omogućiti korisnicima da razlikuju ovaj predložak unosa od ostalih predložaka  unosa.",
		entry_tempalte_save_in_hover: "Navedite gdje se sprema predložak unosa.<br><br><b>Ograničenje:</b> Ako spremite predložak unosa u timski prostor, možete koristiti predložak unosa samo unutar timskog prostora.",
		entry_template_inherit_hover: "Ako izaberete ovu opciju, postavke sigurnosti nadređenog foldera se dodaju listi korisnika i grupa s kojima se dijeli predložak unosa.",
		entry_template_builder_aria_label: "Graditelj predloška unosa",
		entry_template_builder_layout_aria_label: "Graditelj svojstava predloška unosa",

		entry_template_settings_document: "Definiraj predložak unosa",
		entry_template_settings_folder: "Postavi lokaciju pohrane stavke",
		entry_template_settings_folder_intro: "Navedite gdje se spremaju stavke dodane pomoću ovog predloška unosa.",
		entry_template_settings_properties: "Postavi svojstva stavke",
		entry_template_settings_properties_intro: "Možete navesti default ili preddefinirane vrijednosti za stavke koje se dodaju pomoću ovog predloška unosa. Osim toga, možete promijeniti izgled svojstava i tako kontrolirati koja se svojstva prikazuju i redoslijed kojim se prikazuju.",
		entry_template_settings_workflow: "Konfiguriraj proces rada za stavku",
		entty_template_settings_workflow_intro: "Možete specificirati da li se proces rada pokreće kad se stavke dodaju putem predloška unosa.",
		entry_template_settings_security: "Postavi sigurnost stavke",
		entry_template_settings_security_intro: "Možete navesti default ili preddefiniranu sigurnost za stavke koje se dodaju pomoću ovog predloška  unosa. Korisnici s odgovarajućim dozvolama možda mogu promijeniti sigurnost stavke nakon njenog dodavanja.",
		entry_template_settings_options: "Postavi opcije za stavku",
		entry_template_xt_warning: "Spremanje promjena u ovaj predložak unosa pretvorit će ga iz IBM Workplace XT predloška unosa u IBM Content Navigator predložak unosa. IBM Workplace XT ne podržava IBM Content Navigator predloške unosa.",

		entry_template_properties_edit_layout: "Uredi izgled...",
		entry_template_properties_read_only: "Samo za čitanje",
		entry_template_properties_hidden: "Skriveno",

		entry_template_destination_show: "Pokaži polje <b>Spremi u</b>",
		entry_template_destination_show_hover: "Ako prikažete polje <b>Spremi u</b>, korisnici mogu promijeniti mjesto spremanja stavki.",
		entry_template_destination_hide: "Sakrij polje <b>Spremi u</b>",
		entry_template_destination_hide_hover: "Ako sakrijete polje <b>Spremi u</b>, korisnici ne mogu promijeniti mjesto spremanja stavki.",
		entry_template_folder_save_in_default: "Default lokacija za <b>Spremi u</b>:",
		entry_template_folder_save_in_default_hover: "Navedite default lokaciju za dodavanje dokumenata putem ovog predloška unosa.<br><br>Default lokacija koju izaberete postavlja ograničenja na runtime ponašanje predloška unosa:<ul><li>Korisnici ne mogu izabrati drukčiji direktorij.</li><li>Ako je default lokacija timski prostor, korisnici ne mogu izabrati drukčiji timski prostor.</li></ul>Međutim, ako korisnici pridruže ovaj predložak unosa drugom folderu, tada korisnici mogu pregaziti memorijsku lokaciju koja je konfigurirana za ovaj predložak unosa.",
		entry_template_folder_restrict_choice: "Korisnici obavezno dodaju stavke na default lokaciju ili podređeni folder default lokacije",
		entry_template_folder_file_in_required: "Korisnici trebaju dodati nove stavke u folder",
		entry_template_folder_file_in_required_hover: "Ako ne izaberete ovu opciju, korisnici mogu dodati dokumente u osnovni folder spremišta.<br><br><b>Ograničenje:</b> Konfiguracija desktopa može zahtijevati od korisnika da izaberu folder.",

		entry_template_document_type_show: "Pokaži polje <b>Što želite spremiti</b>",
		entry_template_document_type_show_hover: "Ako prikažete polje <b>Što želite spremiti</b>, stavke koje izaberete prikazuju se kao opcije u polju <b>Što želite spremiti</b>.",
		entry_template_document_type_hide: "Sakrij polje <b>Što želite spremiti</b>",
		entry_template_document_type_hide_hover: "Ako sakrijete polje <b>Što želite spremiti</b>, tip dokumenta koji izaberete uvijek se koristi kad korisnici dodaju dokumente pomoću ovog predloška unosa.",
		entry_template_document_type: "Ovaj predložak unosa se može koristiti za dodavanje sljedećih stavki:",
		entry_template_document_type_hover: "Ako prikažete polje <b>Što želite spremiti</b>, stavke koje izaberete prikazuju se kao opcije u polju <b>Što želite spremiti</b>.<br><br>Ako sakrijete polje <b>Što želite spremiti</b>, tip dokumenta koji izaberete uvijek se koristi kad korisnici dodaju dokumente pomoću ovog predloška unosa.",

		entry_template_misc: "Dodatne opcije:",
		entry_template_auto_classify_show: "Automatski klasificiraj sadržaj dokumenta",
		entry_template_auto_classify_show_hover: "Kad je dokument klasificiran u FileNet Content Manageru, sadržaj dokumenta se ispituje da bi se utvrdila odgovarajuća klasa i vrijednosti svojstava dokumenta.<br><br>Razgovarajte sa sistemskim administratorom da utvrdite da li je klasifikacija sadržaja omogućena u Content Platform Engine.<br><br>Ako omogućite ovu opciju, klasa i svojstva dokumenta mogu se promijeniti kad korisnik doda dokument u spremište.",
		entry_template_allow_duplicate_file_names: "Dozvoli dokumente s duplim nazivima datoteka",
		entry_template_allow_duplicate_file_names_hover: "Po defaultu, možete dodati dokumente s istim nazivom u folder u FileNet Content Manager. Možete izbrisati ovu opciju ako želite da svaka datoteka ima jedinstveni naziv na izabranoj lokaciji pohrane.",
		entry_template_allow_compound_documents: "Dozvoli ovom dokumentu da je nadređen složenom dokumentu",
		entry_template_version_show: "Pokaži opcije verzija za dodavanje i prijavu",
		entry_template_version_hide: "Sakrij opcije verzija za dodavanje i prijavu",
		entry_template_version_to_add_as: "Default verzija se dodaje kao:",
		entry_template_version_default: "Default opcija verzije:",
		entry_template_version_default_checked: "Glavna verzija",
		entry_template_version_default_unchecked: "Sporedna verzija",
		entry_template_version_display: "Verzija dokumenta:",
		entry_template_version_display_show: "Pokaži",
		entry_template_version_display_hide: "Sakrij",
		entry_template_version_default_add: "Default verzija se dodaje kao:",

		entry_template_checkin_version_show: "Pokaži opcije verzija za prijavu",
		entry_template_checkin_version_hide: "Sakrij opcije verzija za prijavu",

		entry_template_checkin_version_message_no_versions: "Politika verzija izabrane klase sprječava da korisnici prijave novu verziju dokumenta.",
		entry_template_checkin_version_message_always_version: "Politika verzija izabrane klase sprječava da korisnici zamijene trenutnu verziju dokumenta.",

		entry_template_applied: "Koristite ovaj predložak unosa za:",
		entry_template_applied_add: "Dodavanje dokumenata (obavezno)",
		entry_template_applied_add_folder: "Kreiranje foldera (obavezno)",
		entry_template_applied_checkin: "Prijava",
		entry_template_applied_properties_group: "Pregled ili uređivanja svojstava:",
		entry_template_applied_properties: "u prozoru Svojstva",
		entry_template_applied_viewer: "u pregledniku apleta",
		entry_template_applied_docinfo: "u okviru informacija dokumenta",
		entry_template_applied_no_class_support: "Ovaj predložak unosa može se koristiti za dodavanje stavki, ali se ne može koristiti za prijavu dokumenata ili pregled i uređivanje svojstava. Izabrana klasa mora se izmijeniti da bi podržavala ovakve situacije. Ako trebate koristiti predložak unosa u ovakvim situacijama, zatražite da vaš administrator izmijeni klasu pomoći administracijskog alata tako da se mogu pohraniti ID-ovi predložaka unosa.",
		entry_template_applied_no_child_component_support: "Izabrana klasa ima podređene komponente i izgled svojstva je definiran. Izgledi svojstva ne podržavaju podređene komponente. Podređene komponente neće biti prikazane korisniku.",
		entry_template_applied_child_component: "Izabrana klasa ima podređene komponente. One će se prikazati korisniku, ali vi ne možete konfigurirati podređene komponente u ovom predlošku unosa.",

		entry_template_properties_show: "Pokaži odjeljak <b>Svojstva</b>",
		entry_tempalte_properties_show_hover: "Ako prikažete odjeljak <b>Svojstva</b>, korisnici mogu promijeniti bilo koju vrijednost svojstva koja se prikazuje na predlošku unosa ako svojstvo nije samo za čitanje.",
		entry_template_properties_hide: "Sakrij odjeljak <b>Svojstva</b>",
		entry_template_properties_hide_hover: "Ako sakrijete odjeljak <b>Svojstva</b>, korisnici ne mogu mijenjati vrijednosti svojstava. Predložak unosa mora definirati sve vrijednosti koje želite koristiti prilikom dodavanja stavki pomoću ovog predloška unosa.",

		entry_template_security_show: "Pokaži odjeljak <b>Sigurnost</b>",
		entry_template_security_show_hover: "Ako prikažete odjeljak <b>Sigurnost</b>, korisnici s odgovarajućim dozvolama mogu promijeniti sigurnost stavke.",
		entry_template_security_hide: "Sakrij odjeljak <b>Sigurnost</b>",
		entry_template_security_hide_hover: "Ako sakrijete odjeljak <b>Sigurnost</b>, korisnici ne mogu promijeniti sigurnost stavki. Predložak unosa mora definirati sve postavke sigurnosti koje želite koristiti prilikom dodavanja ili uređivanja stavki.",
		entry_template_security_policy: "Politika sigurnosti:",
		entry_template_security_policy_hover: "Ovisno o izabranoj politici sigurnosti, politika sigurnosti može:<br><ul><li>Pregaziti dozvole specificirane pod <b>Postavljanje sigurnosti stavke</b>.</li><li>Dodati dozvole specificiranim dozvolama pod <b>Postavljanje sigurnosti stavke</b>.</li></ul>",
		entry_template_security_policy_none: "Nema izabrane politike sigurnosti",
		entry_template_security_inherit: "Naslijedi postavke sigurnosti nadređenog foldera",
		entry_tempalte_save_in_hover: "Navedite gdje se sprema predložak unosa.<br><br><b>Ograničenje:</b> Ako spremite predložak unosa u timski prostor, možete koristiti predložak unosa samo unutar timskog prostora.",
		entry_template_security_inherit_item_security_hover: "Ako izaberete ovu opciju, postavke sigurnosti nadređenog foldera se dodaju postavkama sigurnosti koje definira jedna od sljedećih stavki:<ul><li>Klasa specificirana u odjeljku <b>Postavljanje svojstava stavki</b></li><li>Prilagođena sigurnost koju ste specificirali u odjeljku <b>Postavljanje sigurnosti stavki</b></li></ul>",
		entry_template_security_change: "Nadjačaj sigurnost definiranu pomoću izabrane klase",
		entry_template_security_change_hover: "Ako izaberete ovu opciju, postavke sigurnosti definirane za klasu se prikazuju po defaultu. Zatim možete promijeniti postavke sigurnosti predloška unosa.<br><br>Ako prikažete odjeljak <b>Sigurnost</b>, korisnici s odgovarajućim dozvolama mogu promijeniti sigurnost stavke.<br><br>Ako izaberete ovu opciju i izaberete nasljeđivanje postavki sigurnosti od nadređenog foldera, sva naslijediva svojstva će se dodati98 sigurnosti koju ste specificirali.",
		entry_template_security_default_item_security: "Nadjačaj default sigurnost stavke korisnika koji dodaje stavku",
		entry_template_security_policy_message_override: "Izabrana politika sigurnosti se konfigurira na način da nadjača dozvole koje su navedene pod opcijom Postav sigurnosti.",
		entry_template_security_policy_message_add: "Izabrana politika sigurnosti se konfigurira na način da dodaje dozvole koje su navedene pod opcijom Postav sigurnosti.",
		entry_template_security_policy_preserve_true_hover: "Čuva izravnu dozvolu",
		entry_template_security_policy_preserve_false_hover: "Ne čuva izravnu dozvolu",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Specifične uloge",
		entry_template_security_class_role_search_title: "Traženje uloga:",
		entry_template_secuirty_class_member_title: "Lista članova za ${0}",
		entry_template_secuirty_class_folder_only: "Ove dozvole se primjenjuju samo na ovaj folder",
		entry_template_secuirty_class_folder_and_immediate_children: "Ove dozvole se primjenjuju na ovaj i neposredno podređene foldere, koji su konfigurirani za nasljeđivanje sigurnosti od ovog foldera.",
		entry_template_secuirty_class_folder_and_all_children: "Ove dozvole se primjenjuju na ovaj folder i na sve potomke koji su konfigurirani za nasljeđivanje sigurnosti od ovog foldera.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Ove dozvole se primjenjuju na neposredno podređene foldere, koji su konfigurirani za nasljeđivanje sigurnosti od ovog foldera.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Ove dozvole se primjenjuju na sve potomke, koji su konfigurirani za nasljeđivanje sigurnosti od ovog foldera.",

		entry_template_class_security_message_no_override: "Sigurnost izabrane klase sprječava korisnike da nadjačaju sigurnost.",
		entry_template_class_security_required_privileges: "<b>Važno</b>: Kad nadjačate sigurnost izabrane klase, korisnici koji dodaju stavke koristeći ovaj predložak stavke moraju imati ItemSetACL i UserACLOwner povlastice.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Sekvencijalni proces rada uzorka",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Paralelni proces rada uzorka",
		entry_template_workflow_type_existing: "Prilagođeni proces rada...",
		entry_template_workflow_launch_prompt: "Pitaj korisnika da li pokrenuti proces rada",
		entry_template_workflow_launch_auto: "Automatski pokreni proces rada",
		entry_template_workflow_modify_launch: "Dozvoli korisnicima promjenu koraka pokretanja",
		entry_template_workflow_modify_launch_hover: "Izaberite ovu opciju ako želite dozvoliti korisnicima da promijene kako se pokreće proces rada.",

		entry_template_optionsButton_title: "Promijeni",
		entry_template_optionsButton_readonly_title: "Pregled pridruživanja",
		entry_template_optionsDialog_title: "Postavke pridruživanja foldera",
		entry_template_removeButton_title: "Ukloni",
		entry_template_addButton_title: "Dodaj",
		entry_template_selected_entry_templates: "Izabrani predlošci unosa",
		entry_template_docs_added_to_template_destination: "Dokumenti se dodaju na odredište navedeno u predlošku unosa.",
		entry_template_docs_added_to_other_object_store: "Ovaj predložak unosa dodaje stavke u ${0} spremište objekata.",
		entry_template_inherited_entry_templates_label: "Želim: ",
		entry_template_inherited_entry_templates: "Naslijediti pridruživanja predloška unosa iz foldera: ",
		entry_template_inherited_entry_templates_not: "Kreirati nova pridruživanja iz ovog foldera",
		entry_template_inherited_folder_path: "Predlošci unosa na listi izabranih predložaka unosa su pridruženi sljedećem folderu: ${0}. <br> Staza za folder je ${1}.",
		entry_template_folder_associations_title: "Pridruženi predlošci unosa",
		entry_template_folder_associations_intro: "Kad predložak unosa pridružite folderu, korisnici moraju koristiti predložak unosa za dodavanje stavki u folder. Ako folderu pridružite više predložaka unosa, korisnici mogu birati koje predloške unosa žele koristiti.",
		entry_tempalte_folder_associations_entrytemplate: "Predložak unosa: ",
		entry_template_avaliable_entry_templates: "Dostupni predlošci unosa",
		entry_template_fileTypes_intro_title: "Dozvoljeni tipovi datoteka:",
		entry_template_fileTypes_intro: "Po defaultu se predložak unosa može koristiti za dodavanje tipa dokumenta u spremište. Međutim, ako izaberete jedan ili više tipova datoteka, predložak unosa je dostupan samo kad korisnici dodaju dokumente koji su podudarni s jednim od navedenih tipova datoteka.",
		entry_template_fileTypes: "Tipovi datoteka",
		entry_template_fileType_error: "Izabrani su nevažeći tipovi datoteka za jedno ili više pridruživanja predlošku unosa. Nevažeće tipove datoteka morate ukloniti prije nego se mogu spremiti ova pridruživanja predlošcima unosa.",
		entry_template_fileTypes_any_type_of_file: " Bilo koji tip datoteke",
		entry_template_description_label: "Opis",
		entry_template_ItemInfoPrefix: "Pridruženo s: ",
		entry_template_TargetObjectStoreName: "Ciljno spremište objekta",
		entry_template_class: "Klasa",
		entry_template_current_folder_as_parent: "Koristi folder kao odredište",
		entry_template_view_minetypes: "Pregled MIME tipova",
		entry_template_avaliable_MIME_types: "Dostupni tipovi datoteka",
		entry_template_selected_MIME_types: "Izabrani tipovi datoteka",
		entry_template_MIME_type_column: "Naziv kategorije tipa datoteke",
		entry_template_file_type_not_existing: "Molimo uklonite nevažeće tipove datoteka.",
		entry_template_MIME_types: "MIME tipovi:",
		entry_template_MIME_types_info_dialog_title: "MIME tipovi za",
		entry_template_destination_label: "Dodaj dokumente u: ",
		entry_template_destination_help: "Navedite gdje se u spremištu spremaju dokumenti kad korisnici dodaju dokumente u ovaj folder koristeći izabrani predložak unosa.",
		entry_template_radioButton_folder_destination: "Izabrani folder",
		entry_template_radioButton_template_destination: "Odredište navedeno u predlošku unosa",
		entry_tempalte_teamspace_default: "Default predložak unosa",
		entry_template_folder_associations_save_new: "Izmijenili ste neka pridruživanja predloška unosa. Želite li zatvoriti ovaj prozor bez spremanja promjena?",
		entry_template_mode_binding_label: "Svojstva",
		entry_template_columns_className: "Naziv klase",
		entry_template_columns_type: "Tip predloška",
		entry_template_columns_workflow: "Naziv procesa rada",
		entry_template_columns_destination: "Odredište",
		entry_template_association_less_than_record: "Postoji ${0} predložaka unosa koji nisu navedeni u Izabrani predlošci unosa. Nemate dozvolu da ih pogledate. Možda su izbrisani. Kontaktirajte sistemskog administratora za više informacija.",
		/* Request */

		progress_message_general: "Radi...",
		cancel_message_general: "Akcija je opozvana.",
		ie8_not_supported_browser: "IE8 nije podržani pretražitelj.",
		progress_message_getDesktop: "Učitavanje desktopa...",
		progress_message_getActions: "Učitavanje akcija...",
		progress_message_getViewers: "Učitavanje desktopa...",
		progress_message_logon: "Prijava...",
		progress_message_logoff: "Odjava...",
		progress_message_getContentClasses: "Dohvat klasa...",
		progress_message_openContentClass: "Dohvat detalja klasa...",
		progress_message_od_getCabinets: "Dohvat kabineta...",
		progress_message_getSearchTemplates: "Dohvat pretraživanja...",
		progress_message_od_getTemplates: "Dohvat foldera...",
		progress_message_od_openCabinet: "Dohvat foldera...",
		progress_message_openSearchTemplate: "Otvaranje pretraživanja...",
		progress_message_od_openTemplate: "Otvaranje foldera...",

		progress_message_getWorklists: "Dohvat radnih listi...",
		progress_message_getWorkItems: "Dohvat radnih stavki...",
		progress_message_getNextWorkItems: "Dohvat radnih stavki...",
		progress_message_getStepParameters: "Dohvat informacija radne stavke...",
		progress_message_getStepAttachmentItems: "Dohvat informacija priloga...",
		progress_message_getDependentParameters: "Dohvat informacija o svojstvima...",

		progress_message_p8_getProcessApplicationSpaces: "Dohvat aplikacijskih prostora...",
		progress_message_p8_getProcessRoles: "Dohvat uloga procesa...",
		progress_message_p8_getProcessInbaskets: "Dohvat dolaznih poruka...",
		progress_message_p8_getProcessorInformation: "Dohvat informacija obrade...",
		progress_message_p8_getFilterCriteria: "Dohvat filtera dolaznih poruka...",
		progress_message_p8_getLaunchParameters: "Dohvat informacija radne stavke...",
		progress_message_p8_getStepAttachments: "Dohvat priloga radne stavke...",
		progress_message_p8_getSubscriptions: "Dohvat pretplata procesa rada...",
		progress_message_p8_getTrackerParameters: "Dohvat informacija radne stavke...",
		progress_message_p8_getTrackerHistory: "Dohvat povijesti radne stavke...",
		progress_message_p8_getTrackerMilestones: "Dohvat ključnih točaka radne stavke...",
		progress_message_p8_completeStep: "Dovršenje radne stavke...",
		progress_message_p8_moveToInbox: "Pomak stavke u dolazne poruke...",
		progress_message_p8_returnToSender: "Povrat radne stavke...",
		progress_message_p8_reassign: "Ponovna dodjela radne stavke...",
		progress_message_p8_launchWorkflow: "Pokretanje procesa rada...",
		progress_message_p8_getTransferedWorkflows: "Dohvat informacija procesa rada...",

		progress_message_cm_getProcesses: "Dohvat informacija procesa rada...",
		progress_message_cm_completeStep: "Nastavljanje radne stavke...",
		progress_message_cm_getItemProcessInformation: "Dohvat informacija procesa rada...",

		progress_message_search: "Traženje...",
		cancel_message_search: "Pretraživanje je opozvano.",
		progress_message_getContentItems: "Dohvat informacija stavki...",
		progress_message_openFolder: "Otvaranje foldera...",
		progress_message_addItem: "Kreiranje stavke...",
		progress_message_checkIn: "Prijava stavke...",
		progress_message_changePassword: "Promjena lozinke...",
		progress_message_getDefaultInstancePermissions: "Dohvat default dozvola...",
		progress_message_openItem: "Dohvat informacija stavki...",
		progress_message_saveItem: "Spremanje informacija o stavci...",
		progress_message_getPermissions: "Dohvat dozvola...",
		progress_message_getEntryTemplates: "Dohvat predložaka unosa...",
		progress_message_openEntryTemplate: "Otvaranje predloška unosa...",
		progress_message_getFavorites: "Dohvat favorita...",
		progress_message_getFoldersFiledIn: "Dohvat foldera...",
		progress_message_getDocumentVersions: "Dohvat verzija...",
		progress_message_getDependentAttributeInfo: "Dohvat informacija atributa...",
		progress_message_packageForDownload: "Pakiranje za preuzimanje...",
		progress_message_convertDocument: "Konverzija sadržaja...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Dohvat tipa sadržaja...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Dodavanje dokumenta...",

		progress_message_desktop_reload: "Klijent ponovno učitava vaš desktop.<br>Možda ćete dobiti prompt za ponovnu prijavu.",
		progress_message_email: "Slanje e-maila...",
		cancel_message_email: "E-mail je opozvan.",

		progress_message_p8_getOfficeOnlineTemplates: "Dohvaćanje Office predložaka...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Stablo favorita",
		favorites_content_list_label: "Lista Favoriti",
		syncItems_tree_label: "Stablo Moje sinkronizirane datoteke",
		syncItems_content_list_label: "Lista Moje sinkronizirane datoteke",
		my_checkouts_content_list_label: "Lista Moje odjave",
		browse_tree_label: "Pregled stabla",
		browse_content_list_label: "Pregled liste sadržaja",
		repository_selector_label: "Izbornik spremišta",
		teamspaces_content_list_label: "Lista Timski prostori",
		templates_content_list_label: "Lista Predlošci",
		work_content_list_label: "Lista Rad",
		work_tree_label: "Stablo rada",
		admin_tree_label: "Stablo administracije",
		admin_tabs_label: "Kartice administracije",
		search_tabs_label: "Kartice pretraživanja",
		search_selector_label: "Izbornik pretraživanja",
		teamspace_browse_content_list_label: "Lista Pregled timskih prostora",
		teamspace_search_tabs_label: "Kartice pretraživanja timskih prostora",

		/* Desktop */
		undo_description: "Poništi ${0}",
		redo_description: "Ponovi ${0}",

		/* Application Tabs */
		home: "Početak",
		repository: "Spremište",
		repository_type: "Tip spremišta:",
		repository_type_header: "Tip spremišta",
		repository_type_any: "Sva spremišta",
		repository_type_contains_label: "Tip spremišta sadrži",
		document_info: "Informacije dokumenta",
		team: "Tim",
		administration: "Administracija",

		/* Home Page */
		recent_activity: "Nedavne aktivnosti",
		repos_and_wrksp: "Spremišta i timski prostori",
		workspaces: "Timski prostori",
		repositories: "Spremišta",
		templates: "Predlošci",
		favorites: "Favoriti",
		my_checkouts: "Moje odjave",
		mySyncedFiles: "Moje sinkronizirane datoteke",
		links: "Veze",
		name_label: "Naziv",
		description_label: "Opis:",
		type_label: "Tip:",
		type_heading: "Tip",
		type_id_label: "ID tipa",
		server_type_icon: "Ikona Tip poslužitelja",
		server_type_heading: "Tip poslužitelja",
		server_type: "Tip poslužitelja",
		port_heading: "Broj porta",
		port_label: "Broj porta:",
		server_name_heading: "Naziv poslužitelja",
		server_label: "Naziv poslužitelja:",
		server_url_label: "URL poslužitelja:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Povezano:",
		repository_label: "Spremište",
		modified_label: "Promijenio:",
		modified_date_label: "Promijenjeno:",
		status_label: "Status:",
		last_modified_label: "Zadnji promijenio:",

		modifier: "Promijenio",
		modified_date: "Promijenjeno",

		/* Favorites */
		new_favorite_label: "Dodaj u favorite",
		edit_favorite_label: "Preimenuj favorit",
		remove_favorite_label: "Ukloni iz favorita",
		missing_alias_message: "Morate navesti naziv.",
		sync_favorite_enable_hover: "Ovaj podatak je omogućen za sinkronizaciju.",
		sync_favorite_disable_hover: "Ovaj podatak se ne sinkronizira.",
		sync_favorite_sync_unavailable_hover: "Sinkronizacija nije dostupna za ovaj tip objekta.",
		sync_enable_label: "Sinkroniziraj ovu stavku",
		sync_enable_label_hover: "Ova stavka će biti sinkronizirana na vaše uređaje.",
		delete_favorite_confirmation_question: "Želite li ukloniti ovu stavku iz vaših favorita?",
		alias_label: "Naziv:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Izabrana stavka je već u vašim favoritima.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Ova stavka se ne može dodati na vašu listu favorita.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Možete spremiti samo ${0} favorita.",
		add_favorite_max_reached_response: "Ako želite dodati ovu stavku na vašu listu favorita, morate izbrisati nekog od postojećih favorita da biste dodali ovu stavku.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Izabrani dokumenti ne mogu se konvertirati u PDF.",
		download_as_pdf_max_content_error_explanation: "Možete konvertirati u PDF samo ${0} MB podataka. Međutim, izabrani dokumenti premašuju ${0} MB.",
		download_as_pdf_max_content_error_response: "Izaberite manji broj dokumenata ili izaberite manje dokumente i ponovno preuzmite dokumente kao PDF datoteke.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Izabrani dokumenti se ne mogu konvertirati u jednu PDF datoteku.",
		download_as_pdf_mimetype_check_error_explanation: "Da bi konvertirali dokument s više dijelova u jednu PDF datoteku, svaki dio mora imati isti MIME tip.",
		download_as_pdf_mimetype_check_error_response: "Izaberite drukčiji dokument za konverziju u PDF.",

		/* Activity Stream */
		show_label: "Pokaži:",
		all_filter: "Sve",
		notifications_filter: "Obavijesti",
		workitems_filter: "Radne stavke",
		documentes_filter: "Dokumenti",
		all_favorites_filter: "Svi favoriti",
		folders_filter: "Folderi",
		searches_filter: "Pretraživanja",
		teamspaces_filter: "Timski prostori",

		/* Repository */
		all_search_templates: "Sva pretraživanja",
		all_od_searches: "Svi predlošci pretraživanja",
		recent_searches: "Nedavna pretraživanja",
		opened_searches: "Otvorena pretraživanja",

		all_worklists: "Svi Inboxi",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Lista svih radnih listi",

		/* Teamspace */
		all_workspaces: "Svi timski prostori",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Lista svih timskih prostora",
		workspace_title: "Timski prostor",
		workspace_icon: "Ikona Timski prostor",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Dostupno",
		workspace_stat_offline: "Nedostupno",
		workspace_stat_validate: "Potrebna provjera",
		workspace_stat_pendingDelete: "Brisanje na čekanju",
		workspace_stat_deleteError: "Neuspješno brisanje",

		undefined_value: "Nije definirano",
		undefined_reference_value: "Nije definirana referenca.",

		/* Filter teamspaces in content list */
		more_results_on_server: "više rezultata je možda dostupno na poslužitelju.",
		search_all_data: "Pretraži sve podatke.",
		search_all_teamspaces: "Pretraži sve timske prostore.",
		teamspace_filter_results: "Pokazuje ${0} rezultata. ",
		displaying_filtered_results: "Pokazuje filtrirane rezultate. ",
		displaying_recent_results: "Prikazuju se samo timski prostori koji su promijenjeni u zadnjih ${0} dana. Da pronađete ostale timske prostore, filtrirajte listu timskih prostora po nazivu ili opisu. ",
		clear_filter: "Očisti filter.",

		/* FolderTreeModel */
		move_item_task: "Premjesti stavku",
		copy_item_task: "Kopiraj stavku",
		add_item_task: "Dodaj stavku",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Sljedeći folder se nije mogao pronaći: ${0}. Možda je izbrisan ili se ne može otvoriti iz ovog pogleda. Kliknite vezu Više u pogledu stabla za odlazak na folder. Ako ne možete vidjeti folder, osvježite pogled liste sadržaja.",
		more_paging_link: "više ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Opoziv",

		/* ErrorDialog */
		error_dialog_title: "Greška",
		error_dialog_icon_tooltip: "Greška",
		error_dialog_stack_trace_title: "Praćenje stoga",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Potvrda",

		close_browser_msg: "Zatvorite prozor pretražitelja.",

		/* MessageDialog */
		message_dialog_title: "Informacije",
		warning_dialog_title: "Upozorenje",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Dobro došli u ${0}",
		server: "Spremište:",
		username: "Ime korisnika:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Potrebno je ime korisnika za prijavu u spremište",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Potrebna je lozinka za prijavu u spremište",
		password: "Lozinka:",
		login: "Prijava",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Vaša sesija je istekla. Prijavite se ponovno.",
		login_repository_connection_expired_message: "Vaša veza na ${0} spremište je istekla. Prijavite se ponovno.",
		login_site_connection_expired_message: "Vaša veza sa sjedištem je istekla. Prijavite se ponovno.",
		login_new_server_message: "Unesite ime korisnika i lozinku za ${0}.",
		login_error_more_information_message: "Više informacija",

		disconnect_box_account_user: "Odspoji Box račun: ${0}",
		disconnect_box_account: "Odspoji Box račun",
		disconnect_box_accounts: "Odspoji Box račune",

		// OAuth2/Box Login
		login_ssl_connection_required: "SSL veza je potrebna za pristup Box spremištu.",
		login_oauth_popup_blocked: "Iskočni prozor je bio blokiran. Možda ćete iskakanja trebati odblokirati u pretražitelju da se možete prijaviti.",
		login_oauth_click_here: "Ako niste preusmjereni za 5 sekundi, kliknite ovdje.",
		login_oauth_title: "Prijava",
		login_oauth_grant_intro: "Dodjela ovlaštenja za ${0}.",
		login_pane_oauth_click_here: "Kliknite ovdje za prijavu.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Želite li se odjaviti s Web klijenta?",
		logout_confirmation_button: "Odjava",

		/* ChangeLocaleDialog */
		change_locale: "Promijeni jezik i postavke lokalizacije",
		change_locale_use_browser_language: "Koristi postavku jezika pretražitelja (Default)",
		change_locale_use_browser_locale: "Koristi postavku jezika pretražitelja (Default)",
		change_locale_description: "Ako izbrišete vaše cookie pretražitelja, morate resetirati vaš jezik i postavke lokalizacije.",
		change_locale_language_locale: "Jezik aplikacije:",
		change_locale_language_locale_hover: "Ova postavka mijenja jezik teksta u Web klijentu, ali ne mijenja jezik dokumenata u aplikaciji.<br><br>Default postavka koristi jezik koji je naveden u opcijama konfiguracije vašeg Web pretražitelja.",
		change_locale_value_format_locale: "Lokalizacija aplikacije:",
		change_locale_value_format_locale_hover: "Lokalizacija određuje format datuma, vremena i brojeva u Web klijentu.<br><br>Default postavka koristi formate koji su pridruženi jeziku koji je naveden u opcijama konfiguracije vašeg Web pretražitelja.",
		change_locale_for_office: "Postavke dvosmjernog teksta:",
		change_locale_bidi_support_flag: "Omogući podršku dvosmjernosti",
		change_locale_bidi_support_flag_hover: "Kad je omogućena podrška dvosmjernosti, korisnik ima mogućnost postavljanja smjera teksta koji se koristi u ulaznim poljima.  Tekst koji je upisan za podatke kao što su na primjer folderi bio bi prikazan u istom smjeru kako je i unijet.",
		change_locale_base_text_direction: "Osnovni smjer teksta za sadržaj:",
		change_locale_base_text_direction_hover: "Postavite smjer teksta koji se upisuje u ulaznim poljima.  Ovo također kontrolira smjer prikaza oznaka koje su upisane od strane korisnika kao što su na primjer nazivi foldera.",
		change_locale_calendar_type: "Tip kalendara:",
		change_locale_calendar_type_hover: "Izaberite tip kalendara koji će biti korišten za korisničku sesiju.",
		change_locale_base_text_direction_default: "Default",
		change_locale_base_text_direction_ltr: "S lijeva na desno",
		change_locale_base_text_direction_rtl: "S desna na lijevo",
		change_locale_base_text_direction_contextual: "Kontekstualno",
		change_locale_calendar_type_gregorian: "gregorijanski",
		change_locale_calendar_type_hijri: "hijri",
		change_locale_calendar_type_hebrew: "hebrejski",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Promjena lozinke",
		change_password_title: "Promjena lozinke",
		change_password_expired_title: "Lozinka istekla",
		change_password_message: "Unesite novu lozinku",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Vaša lozinka je istekla. Unesite novu lozinku",
		change_password_password_rules: "Pravila lozinke",
		change_password_old_password: "Stara lozinka:",
		change_password_new_password: "Nova lozinka:",
		change_password_confirm_password: "Potvrdi lozinku:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Morate unijeti vašu staru lozinku.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Morate unijeti novu lozinku.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Morate potvrditi vašu novu lozinku.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Lozinke se moraju podudarati.",

		/* GlobalToolbar */
		actions: "Akcije",
		actions_label: "Akcije:",
		open_actions_label: "Akcije otvaranja:",

		/* About Dialog */
		about_dialog_title: "Informacije",
		about_product_name_label: "Naziv proizvoda: ",
		about_product_version_label: "Verzija: ",
		about_product_build_label: "Izgradnja: ",
		about_product_license: "Licencirani materijali - Vlasništvo IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Sva prava pridržana. Ograničena prava korisnika Vlade SAD. Upotreba, umnožavanje i objavljivanje je ograničeno s GSA ADP Schedule Ugovorom s IBM Corporation. IBM i IBM logo su registrirani zaštitni znakovi u vlasništvu International Business Machine Corporation u Sjedinjenim Državama, drugim zemljama ili oboje. Ovaj program se licencira u skladu s odredbama licencnog ugovora koji dolazi s programom. Licencni ugovor se nalazi ili u folderu direktorija programa ili u knjižnici s nazivom \"License\" ili \"Non_IBM_License\", ako je primjenjivo, a možete ga  dobiti i u tiskanom obliku. Molim, pažljivo pročitajte ovaj ugovor prije upotrebe programa. Upotrebom programa pristajete na ove uvjete. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Želite li izbrisati izabranu stavku?",
		delete_single_folder_confirmation_question: "Želite li izbrisati ${0} folder?",
		delete_multiple_confirmation_question: "Želite li izbrisati izabrane stavke?<br>${0} stavki je izabrano.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Izbriši",
		search_template_delete_confirmation_question: "Želite li izbrisati ${0} pretraživanje?",
		search_template_opened_delete_confirmation_question: "Pretraživanje ${0} je otvoreno. Ako izbrišete pretraživanje, ono će se zatvoriti.<br>Želite li izbrisati pretraživanje?",
		delete_multiple_opened_search_template_confirmation_question: "Otvorena su sljedeća pretraživanja: ${0}.<br>Ako izbrišete pretraživanja, ona će se zatvoriti. Želite li izbrisati ova pretraživanja?",
		delete_large_number_items_confirmation_question: "Izabrali ste ${0} stavki za brisanje.<br/>Brisanje velikog broja stavki može potrajati.<br/>Želite li nastaviti?",
		delete_confirmation_entrytemplate: "Ako izbrišete ovaj predložak unosa, to će imati sljedeći utjecaj na dokumente ili foldere koji su pridruženi tom predlošku unosa:<ul><li>Stavke više neće biti pridružene predlošku unosa, a korisnici će možda vidjeti upozorenje prilikom ažuriranja stavke.</li><li>Sva svojstva koja je kontrolirao predložak unosa, poput naziva ili redoslijeda svojstava, više se ne primjenjuju na stavke koje su pridružene predlošku unosa.</li></ul>Želite li izbrisati ovaj predložak unosa?",
		delete_confirmation_entrytempalte_with_multi_items: "Predlošci unosa se moraju pojedinačno brisati. Predlošci unosa su uklonjeni iz liste stavki za brisanje. Ako želite izbrisati predloške unosa, morate posebno izbrisati pojedini predložak unosa.",

		/* Create/Apply/Remove Hold */
		hold: "Zadržavanje",
		createHold: "Novo zadržavanje",
		applyHold: "Primijeni zadržavanje",
		removeHold: "Ukloni zadržavanje",
		showHolds_title: "Prikaži zadržavanja",
		applyHoldSelectText: "Izaberite zadržavanja koja želite primijeniti na izabrane stavke.",
		availableHolds: "Dostupna zadržavanja:",
		removeHoldSelectText: "Izaberite zadržavanja koja želite ukloniti iz izabranih stavki.",
		appliedHolds: "Primijenjena zadržavanja:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Kreirajte novo zadržavanje za primjenu na izabranim stavkama.",
		holdName: "Naziv zadržavanja:",
		holdDescription: "Opis:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Morate navesti naziv zadržavanja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Navedeni naziv zadržavanja već postoji.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Naziv zadržavanja ne smije sadržavati niti jedan od sljedećih znakova : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Vaša sesija će isteći za ${0} minuta.",
		session_expire: "Istek sesije",
		logoff: "Odjava",
		extend_session: "Proširi sesiju",
		admin_custom_settings: "Dodatne postavke:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning je Booleova vrijednost koja pokazuje je li omogućeno upozorenje za istek sesije; default vrijednost je true. sessionExpireWarningTime je cijeli broj od 2 do 5 koji određuje vrijeme upozorenja isteka sesije.",
		admin_custom_setting_dialog_title_new: "Nova postavka",
		admin_custom_setting_dialog_title_edit: "Uređivanje postavke",
		admin_custom_setting_dialog_hover_help: "Dodajte druge parametre tako da navedete naziv i vrijednost parametra. Na primjer, možete navesti “enableSessionExpireWarning” i “true” ako želite omogućiti upozorenje isteka sesije.",
		admin_custom_setting_dialog_field_hover_help: "Za više informacija o parametrima i njihovim vrijednostima, pogledajte Priručnik s uputama za parametre IBM Navigatora.",
		admin_custom_setting_dialog_nameInvalid: "Ova vrijednost je potrebna. Vrijednost ne smije sadržavati praznine i ne može biti duplikat.",
		admin_custom_setting_dialog_bool_valueInvalid: "Ova vrijednost je potrebna. Vrijednost mora biti Booleova vrijednost.",
		admin_custom_setting_dialog_int_valueInvalid: "Ova vrijednost je potrebna. Vrijednost mora biti cijeli broj.",
		/* Add Document Dialog */
		add_document_dialog_title: "Dodaj dokument",
		add_documents_dialog_title: "Dodavanje dokumenata",
		add_document_general_label: "Opće",
		add_document_properties_label: "Svojstva",
		add_document_properties_with_ellipsis_label: "Svojstva...",
		add_document_security_label: "Sigurnost",
		add_document_location_label: "Spremi u:",
		add_document_type_label: "Što želite spremiti?",
		add_document_localfile_label: "Lokalni dokument",
		add_document_metadata_label: "Informacije o dokumentu",
		add_document_external_label: "Veza na vanjski dokument",
		add_document_web_link_label: "Web veza",
		add_document_saved_content_label: "Koristi spremljenu datoteku:",
		add_document_saved_content_choice: "Spremljena datoteka",
		add_document_file_name_label: "Naziv datoteke:",
		add_document_entry_template_label: "Predložak unosa:",
		add_document_delete_file_label: "Brisanje lokalne datoteke",
		add_document_delete_file_disabled_label: "Datoteke koje nisu u direktoriju praćenja datoteka se neće izbrisati.",
		add_document_major_version_label: "Glavna verzija",
		add_document_major_version_hover: "Postavlja status dokumenta na Izdano. Dokument se dodaje u spremište kao verzija 1.0. Ako se ne izabere ova opcija, dokument nije spreman za izdavanje i dodaje se kao sporedna verzija 0.1.",
		add_document_save_document_as_unfiled_label: "Ne spremaj dokument u folder",
		add_document_save_document_as_unfiled_hover: "Ako izaberete ovu opciju, dokument možete pronaći samo putem pretraživanja. Do njega ne možete doći pregledavanjem.",
		add_document_create_new_version_label: "Kreiraj novu verziju",
		add_document_replace_existing_version_label: "Zamijeni postojeću verziju",
		add_document_start_workflow_label: "Pokreni proces rada",
		add_document_auto_classify_label: "Automatski klasificiraj sadržaj",
		add_document_add_label: "Dodaj",
		add_document_cancel_label: "Opoziv",
		add_document_document_type_label: "Klasa",
		add_document_context_info: "Vrijednosti koje unesete za svojstva dokumenta se mogu koristiti za kasniji pronalazak dokumenta.",
		add_documents_context_info: "Vrijednosti koje unesete za dokumente mogu se kasnije koristiti za traženje dokumenata. Ako trebate unijeti drukčiju vrijednost svojstva za dokument, morate ju dodati posebno ili urediti svojstva dokumenta nakon što ga dodate.",
		add_document_url_label: "URL:",
		add_document_template_description: "Opis predloška:",
		add_document_select_entry_template: "Unesite ili izaberite predložak unosa",
		add_document_no_permission_to_associations: "Nemate dozvole za korištenje predloška unosa",
		add_document_no_entry_template_to_use: "Ne može se koristiti niti jedan predložak unosa za izabrane datoteke",
		add_document_no_entry_template_itemtype_permission: "Ne možete dodati stavke ovom folderu. Potrebno je izabrati predložak unosa, a vi nemate pristup za predloške unosa koji su pridruženi ovom folderu. Kontaktirajte sistemskog administratora i zatražite od njega da vam dodijeli pristup do predložaka unosa koji su pridruženi ovom folderu.",
		add_document_appgroup_name_label: "Naziv aplikacijske grupe:",
		add_document_app_name_label: "Naziv aplikacije:",
		create_folder_dialog_title: "Novi folder",
		create_folder_context_info: "Vrijednosti koje unesete za svojstva foldera se mogu koristiti za kasniji pronalazak foldera.",
		create_folder_folder_name_label: "Naziv foldera",
		create_folder_save_folder_as_unfiled_label: "Ne spremaj dokument u drugi folder",
		create_folder_save_folder_as_unfiled_hover: "Ako izaberete ovu opciju, folder možete pronaći samo putem pretraživanja. Do njega ne možete doći pregledavanjem.",
		add_item_create_in_folder: "Kreiraj u folderu:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Naziv foldera ne smije sadržavati bilo koji od sljedećih znakova: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Naziv foldera ne smije sadržavati bilo koji od sljedećih znakova: \\ / i ne može biti jednak . ili ..",
		invalid_box_file_name_message: "Naziv datoteke ne smije sadržavati bilo koji od sljedećih znakova: \\ / i ne može biti jednak . ili ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Naziv datoteke ne smije sadržavati bilo koji od sljedećih znakova * \\ / : ? \" < > |",
		external_document_placeholder: "Unesite URL dokumenta",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Boja se mora unijeti kao heksadecimalni broj s 3 ili 6 znamenaka, na primjer, #000 ili #000000.",
		add_document_unfiled: "${0} neevidentirano",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Dodajte dokument koristeći predložak unosa",
		add_document_using_template_context_info: "Kad dodate dokument pomoću predloška unosa, vrijednosti koje unosite u dokument su konzistentne.",
		add_documents_using_template_dialog_title: "Dodavanje dokumenta pomoću predloška unosa",
		add_documents_document_name_is_file_name_hint: "Naziv datoteke koristiti će se za ovo svojstvo",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Novi folder pomoću predloška unosa",
		create_folder_using_template_context_info: "Kad kreirate folder pomoću predloška unosa, vrijednosti koje unesete za folder su konzistentne.",

		add_documents_batch_results_dialog_title: "Dokumenti nisu dodani u spremište",
		add_documents_batch_results_dialog_context_info: "Sljedeći dokumenti nisu dodani u spremište. Izaberite dokument i kliknite Detalji za više informacija o tome zašto dokument nije dodan spremištu.",
		add_documents_batch_results_dialog_filename_col_hdr: "Naziv datoteke",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Poruka",
		add_documents_batch_results_status_error: "Greška",
		add_documents_batch_results_status_cancelled: "Opozvan",
		add_documents_batch_results_status_cancelled_msg: "Dokument nije dodan jer je zahtjev opozvan.",

		add_documents_batch_status_title: "Dodavanje dokumenata",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Dodavanje datoteke ${0} od ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Greške: ${0}",
		add_documents_batch_status_completing_msg: "Proces će se zaustaviti nakon dodavanja ovog dokumenta.",

		add_documents_status_uploading_msg: "Predavanje datoteke ${0} od ${1}...",
		add_documents_status_adding_msg: "Dodavanje datoteke ${0} od ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Predložak unosa je konfiguriran u drugoj aplikaciji tako da uvijek deklarira dokumente kao slogove. Međutim, ova postavka se zanemaruje jer Web klijent ne podržava deklariranje dokumenata kao slogova.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Predložak unosa je konfiguriran u drugoj aplikaciji i konfiguriran je tako da vam omogućuje da odlučite želite li deklarirati ovaj dokument kao slog. Međutim, ova postavka se zanemaruje jer Web klijent ne podržava deklariranje dokumenata kao slogova.",
		no_selection: "&lt;Izbor&gt;",

		batch_results_dialog_details_label: "Detalji",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Vrijednost nije važeća. Vrijednost mora biti globalni jedinstveni identifikator (GUID), na primjer, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Vrijednost nije važeća. Vrijednost mora biti broj s pomičnim zarezom, na primjer 1.2 ili 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Vrijednost nije važeća. Vrijednost mora biti u formatu ${0}, na primjer, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Vrijednost nije važeća. Vrijednost mora biti decimalna, na primjer, 1.2 ili 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Vrijednost nije važeća. Vrijednost mora biti cijeli broj, na primjer 5 ili 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Vrijednost nije važeća. Vrijednost može sadržavati samo abecedne znakove, na primjer a-z i A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Vrijednost nije važeća. Vrijednost može sadržavati samo alfanumeričke znakove, na primjer a-z, A-Z i 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Vrijednost nije važeća. Vrijednost može sadržavati samo numeričke znakove, na primjer 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Vrijednost nije važeća. Vrijednost može sadržavati sljedeće znakove: a-z, A-Z, 0-9, [praznina] i  `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Vrijednost nije važeća. Vrijednost mora biti datum sljedećeg formata: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Vrijednost nije važeća. Vrijednost mora biti vrijeme sljedećeg formata: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Vrijednost nije važeća. Izaberite vrijednost iz padajućeg izbornika.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Vrijednost nije važeća.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Vrijednost nije važeća. Vrijednost mora imati sljedeći format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Ova vrijednost je potrebna.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Vrijednost je preduga. Svojstvo podržava maksimalnu dužinu ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Vrijednost je prekratka. Svojstvo podržava minimalnu dužinu ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Vrijednost je izvan raspona. Vrijednost mora biti broj s pomičnim zarezom između ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Vrijednost je izvan raspona. Vrijednost mora biti decimalna vrijednost između ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Vrijednost je izvan raspona. Vrijednost mora biti cijeli broj između ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Vrijednost mora biti datum između ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Vrijednost je izvan raspona. Vrijednost mora biti datum između ${0} i ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Vrijednost je izvan raspona. Vrijednost mora biti vrijeme između ${0} i ${1}.",
		property_and: "i",

		property_invalidValueOrRequired: "Sljedeća vrijednost je pogrešna ili je obavezna: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Svojstva",
		edit_properties_dialog_info: "Možete gledati ili uređivati svojstva ove stavke. Ako imate odgovarajuće dozvole, možete također promijeniti sigurnost stavke. Međutim, ne možete promijeniti sistemska svojstva.",
		edit_properties_od_dialog_info: "Možete gledati ili uređivati svojstva ove stavke. Međutim, ne možete promijeniti sistemska svojstva.",
		system_properties_title: "Sistemska svojstva",
		custom_properties_title: "Svojstva",
		/* Folder collaboration tab */
		box_permission_permission: "Dozvola",
		box_permission_permissions: "Dozvole",
		box_permission_editor: "Editor",
		box_permission_owner: "Vlasnik",
		box_permission_co_owner: "Suvlasnik",
		box_permission_viewer_uploader: "Učitavač preglednika",
		box_permission_previewer_uploader: "Učitavač pregledavatelja",
		box_permission_viewer: "Preglednik",
		box_permission_previewer: "Pregledavatelj",
		box_permission_uploader: "Učitavač",
		box_permission_add: "Dodaj",
		box_permission_upload: "Predaj",
		box_permission_download: "Preuzmi",
		box_permission_preview: "Pregled",
		box_permission_view: "Pogled",
		box_permission_send_links: "Slanje veza samo za gledanje",
		box_permission_create_subfolders: "Kreiraj podfoldere",
		box_permission_create_tasks: "Kreiraj zadatke",
		box_permission_add_comments: "Dodaj komentare",
		box_collaboration_invite_placeholder: "Unesite ime, e-mail ili grupu za pozivanje",
		box_collaboration_invite_placeholder_non_admin: "Unesite e-mail za poziv",
		box_collaboration_invalid_email: "Unesite važeću e-mail adresu",
		box_collaboration_user_already_present: "Ovaj korisnik je već suradnik na folderu",
		box_collaboration_user_name: "Naziv",
		box_collaboration_email_address: "E-mail adresa",
		box_collaboration_date_added: "Datum dodan",
		box_collaboration_remove_collaboration: "Ukloni",
		box_collaboration_remove_collaboration_title: "Izbriši",
		box_collaboration_no_collaborators: "Nema suradnika",
		box_collaboration_change_owner_title: "Promjena vlasnika stavke",
		box_collaboration_change_owner_prompt: "Čineći ovog suradnika vlasnikom foldera postat ćete Editor i više nećete biti vlasnik foldera. Svi suradnici koji su bili izravno dodani u ovaj folder će to vidjeti u svojim osnovnim folderima. Svi suradnici koji su bili dodani na razini  nadređenog foldera ili iznad, više neće biti suradnici. Želite li nastaviti?",
		box_collaboration_remove_self_title: "Uklanjanje samog sebe",
		box_collaboration_remove_self_prompt: "Da li ste sigurni da želite ukloniti sebe kao suradnika? Više nećete imati pristup do ovog foldera.",
		box_collaboration_user: "Korisnik",
		box_collaboration_group: "Grupa",
		box_managing_users_not_configured: "Ne možete pretraživati korisnike i grupe jer Box aplikacija nije ispravno konfigurirana. Da koristite ovu značajku, kontaktirajte vašeg administratora i zahtijevajte da Box aplikacija bude konfigurirana za upravljanje korisnicima i grupama.",
		duplicate_value_error: "Svaka vrijednost u ovom svojstvu mora biti jedinstvena.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Sve promjene koje napravite na sljedećim poljima se primjenjuju na sve izabrane stavke. Ako trebate unijeti drukčiju vrijednost svojstva za određenu stavku ili urediti sigurnost za stavku, morate urediti svojstva stavke pojedinačno.",
		multi_edit_properties_class_label: "Klasa:",
		multi_edit_properties_items_label: "Nazivi stavki:",
		multi_edit_properties_properties_label: "Svojstva:",
		multi_edit_batch_status_title: "Svojstva ažuriranja",
		multi_edit_batch_status_adding_msg: "Ažuriranje stavke ${0} od ${1}...",
		multi_edit_batch_status_verifying_msg: "Provjera stavke ${0} od ${1}...",
		multi_edit_batch_status_completing_msg: "Proces će se zaustaviti nakon ažuriranja ove stavke.",
		multi_edit_batch_status_validation_completing_msg: "Proces će se zaustaviti nakon provjere ove stavke.",
		multi_edit_batch_results_status_error: "Greška",
		multi_edit_batch_results_status_cancelled: "Opozvan",
		multi_edit_batch_results_status_cancelled_msg: "Stavka nije ažurirana jer je zahtjev opozvan.",
		multi_edit_batch_results_dialog_title: "Stavke nisu ažurirane",
		multi_edit_batch_results_dialog_context_info: "Sljedeće stavke nisu ažurirane. Izaberite naziv stavke i kliknite Detalji za više informacija o tome zašto stavka nije ažurirana.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Naziv stavke",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Poruka",
		multi_edit_batch_status_errors_msg: "Greške: ${0}",
		multi_edit_batch_permission_error_text: "Promjene svojstava se ne mogu spremiti.",
		multi_edit_invalid_value_error: "Vrijednost je ovisna o drugoj vrijednosti svojstva i nije važeća za sve stavke koje ste izabrali.",
		multi_edit_batch_permission_error_explanation: "Ne možete promijeniti svojstva ove stavke jer nemate dovoljne povlastice.",
		multi_edit_no_modifiable_properties: "Svojstva izabranih stavaka se ne mogu mijenjati. To se može dogoditi kad jedna stavka sadrži svojstva samo za čitanje ili kad se može urediti samo naziv ili naslov stavke. Kad je izabrano više stavaka, možete mijenjati naziv i naslov stavaka.",
		multi_edit_mult_classes_dialog_info: "Izabrane stavke su na različitim spremištima ili pripadaju različitim klasama. Možete uređivati samo stavke koje su u istoj klasi ili istom spremištu. Izaberite podskup stavki koje želite urediti.",
		multi_edit_class_selector_class_heading: "Klasa",
		multi_edit_class_selector_entry_template_heading: "Predložak unosa",
		multi_edit_class_selector_repository_heading: "Spremište",
		multi_edit_class_selector_items_heading: "Stavke",
		multi_edit_some_classes_not_displayed: "Neke izabrane stavke nisu uključene u ovu listu jer stavke sadrže samo svojstva koja su samo za čitanje ili zato što su stavke u spremištima koja je podržavaju uređivanje svojstava.",
		multi_edit_properties_invalid_msg: "Neke vrijednosti svojstava nisu važeće za sve izabrane stavke.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Ovo svojstvo je samo za čitanje i ne može se promijeniti.",
		multi_edit_append_checkbox_label: "Pridodaj",
		multi_edit_append_checkbox_tooltip: "Izaberite ovu opciju ako želite pridodati nove vrijednosti svojstava postojećim vrijednostima, a ne zamijeniti ih.",
		multi_edit_properties_invalid_childcomponent_msg: "Neke vrijednosti u ${0} svojstvu ${1} podređene komponente ovise o ostalim svojstvima i više nisu važeće za izbore koje ste napravili. Izbrišite vrijednosti ${1} podređene komponente ili napravite promjene svojstava na pojedinačnim stavkama.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Eksport svojstava",
		export_properties_dialog_info: "Izaberite svojstva koja želite eksportirati i specificirajte redoslijed po kojem će se prikazivati.",
		export_properties_dialog_export_button_label: "Eksport",
		export_properties_dialog_export_raw_values: "Eksport neobrađenih vrijednosti",

		/* Properties */
		filter_clear_tooltip: "Očisti filter",
		properties_new_row: "Novo",
		properties_requiredClass_document_tooltip: "Izaberite dokument. Dokument mora pripadati klasi ${0}.",
		properties_requiredClass_folder_tooltip: "Izaberite folder. Folder mora pripadati klasi ${0}.",
		properties_dataType_tooltip: "Tip podataka: ${0}",
		properties_maxLength_tooltip: "Maksimalna dužina: ",
		properties_minLength_tooltip: "Minimalna dužina: ",
		properties_minValue_tooltip: "Minimalna vrijednost: ",
		properties_maxValue_tooltip: "Maksimalna vrijednost: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Opis: ",

		properties_type_boolean_tooltip: "Booleov",
		properties_type_date_tooltip: "Datum",
		properties_type_time_tooltip: "Vrijeme",
		properties_type_timestamp_tooltip: "Vremenska oznaka",
		properties_type_decimal_tooltip: "Decimalna vrijednost",
		properties_type_double_tooltip: "Broj s pomičnim zarezom",
		properties_type_short_tooltip: "Cijeli broj",
		properties_type_integer_tooltip: "Cijeli broj",
		properties_type_long_tooltip: "Cijeli broj",
		properties_type_string_tooltip: "Tekstualni niz",
		properties_type_string_alpha_tooltip: "Abecedni niz znakova",
		properties_type_string_alphanum_tooltip: "Alfanumerički niz znakova",
		properties_type_string_ext_tooltip: "Prošireni alfanumerički niz znakova",
		properties_type_string_num_tooltip: "Numerički niz znakova",
		properties_type_binary_tooltip: "Binaran",
		properties_type_object_tooltip: "Objekt",
		properties_type_reference_tooltip: "Ovo svojstvo referencira drugu stavku u spremištu.",
		properties_type_guid_tooltip: "Globalni jedinstveni identifikator",
		properties_type_group_tooltip: "Korisnici i grupe",
		properties_type_user_tooltip: "Korisnici",
		properties_type_childComponent_tooltip: "Podređena komponenta",

		properties_childComponent_minCardinalityOnly_tooltip: "Ovo svojstvo mora imati barem ${0} vrijednosti.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Ovo svojstvo može imati do ${0} vrijednosti.",
		properties_childComponent_minMaxCardinality_tooltip: "Ovo svojstvo mora imati barem ${0} vrijednosti i ne više od${1} vrijednosti.",
		properties_childComponent_noCardinality_tooltip: "Ovo svojstvo može imati bilo koji broj vrijednosti.",

		properties_type_guid_example_tooltip: ", na primjer {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Izaberite vrijednost iz liste.",
		properties_single_select_choice_tooltip: "Izaberite vrijednost.",
		properties_multiple_select_typein_tooltip: "Unesite jednu ili više vrijednosti.",
		properties_multiple_select_choice_tooltip: "Izaberite jednu ili više vrijednosti.",
		properties_not_selectable_tooltip: "Kategorija se ne može izabrati.",
		properties_none: "Ništa",
		properties_none_tooltip: "Izaberite <i>Ništa</i> da obrišete trenutnu vrijednost za ovo svojstvo.",
		properties_value_empty: "Nema vrijednosti",
		properties_value_read_only: "Samo za čitanje",
		properties_clear_label: "Očisti",
		properties_clear_tooltip: "Brisanje vrijednosti u ovom polju briše vrijednost u spremištu nakon što kliknete <b>Spremi</b>.",
		properties_box_custom_properties: "Prilagođena svojstva",
		properties_box_metadata_name_in_use: "Naziv se već koristi. Unesite drugi naziv prilagođenog svojstva.",

		properties_templates: "Predlošci",
		properties_add_template: "Dodaj predložak",
		properties_remove_template: "Ukloni",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Prijavi",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Prijavi",
		checkin_cancel_label: "Opoziv",
		checkin_file_name_label: "Naziv datoteke",
		checkin_document_status_title: "Prijava dokumenta",
		checkin_document_status_uploading_msg: "Predavanje datoteke...",
		checkin_document_status_checkingin_msg: "Prijava datoteke...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Izbor načina redakture",
		viewer_redaction_new_document_confirmation_question: "Želite li spremiti redakturu kao novi dokument ili lokalnu datoteku?",
		viewer_redaction_new_version_confirmation_question: "Želite li spremiti redakturu kao novu verziju?",
		viewer_redaction_new_version_confirmation_question_never: "Želite li spremiti redakturu kao novi sadržaj?",		
		viewer_redaction_new_document_button: "Da",
		viewer_redaction_new_document_cancel_button: "Ne",
		viewer_redaction_add_document_confirmation_question: "Želite li spremiti redakturu kao novi dokument, novu verziju ili lokalnu datoteku?",
		viewer_redaction_add_document_confirmation_question_version_never: "Želite li spremiti redakturu kao novi dokument, novi sadržaj ili lokalnu datoteku?",
		viewer_redaction_add_document_button: "Novi dokument",
		viewer_redaction_add_new_version_button: "Nova verzija",
		viewer_redaction_add_new_version_button_version_never: "Novi sadržaj",
		viewer_redaction_add_local_file_button: "Lokalna datoteka",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Izbor razloga za redakturu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Predložak unosa koji je korišten za dodavanje ovog dokumenta spremištu se ne može naći. Dokument će se prijaviti u spremište bez korištenja predloška unosa.",
		property_entry_template_not_retrieved_warning: "Predložak unosa koji je korišten za dodavanje ovog dokumenta spremištu se ne može naći. Svojstva dokumenta bit će prikazana bez korištenja predloška unosa.",
		multi_edit_entry_template_not_found_name: "[Nije nađeno]",
		multi_edit_entry_template_not_retrieved_warning: "Predložak unosa koji je korišten za dodavanje ovih stavaka u spremište se ne može naći. Svojstva stavke će se promijeniti bez korištenja predloška unosa.",
		checkin_major_version_hover: "Povećava broj verzije dokumenta za jedan i postavlja status dokumenta na Izdano. Ako se ne izabere ova opcija, dokument nije spreman za izdavanje i prijavljuje se kao sporedna verzija.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokument se ne može prijaviti jer nije odjavljen.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "ID korisnika ili lozinka nisu važeći za poslužitelj.",
		error_bad_userid_password_userResponse: "Osigurajte da ste ispravno unijeli svoj ID korisnika i lozinku.",
		error_bad_userid_password_adminResponse: "Vraćena je sljedeća greška: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "error_message",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Veza s web klijentom se ne može uspostaviti upotrebom sljedećeg URL-a: ${0}.",
		http_send_error_explanation: "Ovu grešku može uzrokovati problem u konfiguraciji poslužitelja Web aplikacija ili problem u aplikaciji Web klijenta.",
		http_send_error_userResponse: "Pokušajte se ponovno prijaviti. Ako se problem nastavi, izvijestite vašeg sistemskog administratora o grešci.",
		http_send_error_adminResponse: "Vraćena je sljedeća HTTP greška: ${1}.",
		http_send_error_0: "web_client_URL",
		http_send_error_1: "HTTP_error",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Veza s web klijentom se ne može uspostaviti upotrebom sljedećeg URL-a: ${0}.",
		http_error_explanation: "Možda trebate provjeriti identitet na vatrozidu ili poslužitelj Web aplikacija ne radi ili se ne može dosegnuti zbog mrežnih problema.",
		http_error_userResponse: "Ako je potrebno provjeriti identitet na vatrozidu, učinite to i pokušajte se ponovno prijaviti. Ako se problem nastavi, izvijestite vašeg sistemskog administratora o grešci.",
		http_error_adminResponse: "Vraćena je sljedeća HTTP greška: ${1}.",
		http_error_0: "web_client_URL",
		http_error_1: "HTTP_error",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Veza s web klijentom se ne može uspostaviti upotrebom sljedećeg URL-a: ${0}.",
		http_response_bad_explanation: "Ovu grešku može uzrokovati problem u konfiguraciji poslužitelja Web aplikacija ili problem s Web klijentom.",
		http_response_bad_userResponse: "Pokušajte se ponovno prijaviti. Ako se problem nastavi, izvijestite vašeg sistemskog administratora o grešci.",
		http_response_bad_adminResponse: "Vraćena je sljedeća greška: ${1}.",
		http_response_bad_0: "web_client_URL",
		http_response_bad_1: "HTTP_error",
		http_response_bad_number: 2002,

		unititled_document_name: "Bez naslova",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "E-mail aplet se ne može pokrenuti.",
		email_applet_init_failed_explanation: "Ovaj problem se može pojaviti kad e-mail klijent nije ispravno instaliran i konfiguriran ili kad na vašoj radnoj stanici nije instalirana podržana verzija Java Runtime Environmenta (JRE).",
		email_applet_init_failed_userResponse: "Kako riješiti problem:<ul><li>Osigurajte da je vaša e-mail aplikacija instalirana i postavljena kao default e-mail klijent na vašoj radnoj stanici.</li><li>Provjerite je li instalirana podržana verzija JRE-a na vašoj radnoj stanici tako da unesete sljedeću naredbu u prompt za naredbe: java -version</li></ul><p>Lista podržanih verzija JRE-a nalazi se u dokumentu <i>Hardverski i softverski preduvjeti za IBM Content Navigator</i> na sjedištu IBM softverske podrške.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "E-mail aplikacija se ne može pokrenuti jer se potrebna DLL datoteka ne može učitati.",
		email_applet_JNI_LOAD_FAILED_explanation: "Potrebna WCEmailAppletJNI.dll datoteka se ne može učitati jer je privremeni direktorij na vašoj radnoj stanici možda  pun.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Provjerite da privremeni direktorij ima dovoljno prostora. Tada, pokušajte ponovno poslati dokument s Web klijenta. Po defaultu, WCEmailAppletJNI.dll datoteka učitava privremeni direktorij koji je naveden u vašim postavkama Web pretražitelja.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "E-mail aplikacija se ne može pokrenuti jer e-mail aplet ne može kreirati privremenu datoteku.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Privremeni direktorij na vašoj radnoj stanici je možda pun.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Provjerite da privremeni direktorij ima dovoljno prostora. Tada, pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "E-mail aplikacija se ne može pokrenuti jer e-mail aplet ne može pristupiti privremenom direktoriju.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Privremeni direktorij na vašoj radnoj stanici je možda pun ili nemate odgovarajući pristup za pisanje u privremeni direktorij.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Provjerite da privremeni direktorij ima dovoljno prostora i osigurajte da imate pristup za pisanje na privremeni direktorij. Tada, pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte sistemskog administratora.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "E-mail aplet ne može brisati privremenu datoteku.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Druga aplikacija može koristiti datoteku ili datoteka možda ne postoji na vašoj radnoj stanici.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Ako datoteku koristi druga aplikacija, zatvorite aplikaciju. Ako se datoteka nalazi na vašem lokalnom sistemu datoteka, uklonite sljedeću datoteku iz privremenog direktorija na vašoj radnoj stanici: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Veza na dokument se ne može kreirati.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Spremište je vratilo URL u neispravnom formatu.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Zatvorite vaš Web pretražitelj uključujući sve kartice i sesije i ponovno se prijavite. Pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte IBM softversku podršku.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "E-mail aplet ne može pripojiti datoteku e-mailu.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Spremište je vratilo URL na dokument u nevažećem formatu.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Zatvorite vaš Web pretražitelj uključujući sve kartice i sesije i ponovno se prijavite. Pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte IBM softversku podršku.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Prilog se ne može kreirati.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "E-mail aplet ne može pročitati URL do dokumenta.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Zatvorite vaš Web pretražitelj uključujući sve kartice i sesije i ponovno se prijavite. Pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte IBM softversku podršku.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokument se ne može dohvatiti iz spremišta.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Vaša sesija je možda prekoračila vrijeme, spremište ili poslužitelj Web aplikacija možda ne radi ili postoji problem u konfiguraciji Web klijenta.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Prijavite se i ponovno pokušajte poslati dokument e-mailom. Ako se problem nastavi, tražite od sistemskog administratora da provjeri dnevnike grešaka spremišta.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Ako ste konfigurirali Web klijent za konvertiranje AFP dokumenata u drugi format poput PDF-a, prije slanja dokumenata u obliku priloga, provjerite je li konverzija ispravno konfigurirana.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokument se ne može konvertirati u PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Alat koji se koristi za pretvorbu dokumenata u PDF ne podržava tip datoteke.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Zatvorite ovu stranicu i pokušajte e-mailom poslati dokument ponovno bez prethodne pretvorbe u PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "E-mail nije kreiran.",
		email_applet_MAPI_USER_ABORT_explanation: "Otvorite vašu e-mail aplikaciju i uvjerite se da radi ispravno. Tada, pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte sistemskog administratora da pregleda vaše dnevnike događaja operativnog sistema.",
		email_applet_MAPI_USER_ABORT_userResponse: "Ako ste namjeravali zatvoriti e-mail aplikaciju, nisu potrebne daljnje akcije. Za slanje e-maila. prijavite se na vašu e-mail aplikaciju i ponovno pokušajte poslati dokument s Web klijenta.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "E-mail se ne može kreirati.",
		email_applet_MAPI_FAILURE_explanation: "Vaš e-mail klijent možda nije otvoren ili se možda niste prijavili.",
		email_applet_MAPI_FAILURE_userResponse: "Otvorite vašu e-mail aplikaciju i uvjerite se da radi ispravno. Tada, pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte sistemskog administratora da pregleda vaše dnevnike događaja operativnog sistema.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "E-mail se ne može kreirati.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Niste prijavljeni na vaš klijent e-pošte. Vaš klijent e-pošte mora biti otvoren, a vi morate biti prijavljeni da bi poslali poruku iz Web klijenta.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Otvorite e-mail klijenta i prijavite se. Tada, pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "E-mail se ne može kreirati jer se privremena datoteka ne može kreirati na vašoj radnoj stanici.",
		email_applet_MAPI_DISK_FULL_explanation: "Privremeni direktorij na vašoj radnoj stanici je možda pun.",
		email_applet_MAPI_DISK_FULL_userResponse: "Provjerite da privremeni direktorij ima dovoljno prostora. Tada, pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "E-mail se ne može kreirati jer nema dovoljno sistemske memorije.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Možda imate previše otvorenih aplikacija.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Zatvorite nekorištene aplikacije i ponovno pokušajte poslati dokument s Web klijenta.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "MAPI pristup je zabranjen.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Messaging Application Programming Interface (MAPI) pristup možda nije omogućen ili podržan za vašu e-mail aplikaciju. MAPI je protokol za obradu poruka koji se koristi za omogućavanje komunikacije između Web klijenta i vaše e-mail aplikacije.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Kontaktirajte sistemskog administratora.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Osigurajte da je e-mail aplikacija ispravno konfigurirana i ima postavljen MAPI pristup. Ako se problem nastavi, kontaktirajte IBM softversku podršku.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Prilog ili veza na stavku se ne mogu kreirati.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Možda imate otvoreno previše sesija Web pretražitelja.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Zatvorite sve nekorištene sesije Web pretražitelja. Tada, pokušajte ponovno poslati dokument s Web klijenta. Ako se problem nastavi, kontaktirajte sistemskog administratora.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "E-mail se ne može poslati.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Možda pokušavate poslati previše priloga.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Izaberite manje datoteka. Tada pokušajte ponovno poslati dokumente s Web klijenta.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "E-mail se ne može poslati.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Možda šaljete e-mail na previše primatelja.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Pošaljite e-mail na manje primatelja.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Prilog se ne može kreirati.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Neke potrebne privremene datoteke su možda izbrisane prije nego se prilog kreirao. Ova se greška može dogoditi ako se predmemorija pretražitelja obriše prije slanja e-maila.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Prilog se ne može kreirati.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Neke potrebne privremene datoteke su možda izbrisane prije nego se prilog kreirao. Ova se greška može dogoditi ako se predmemorija pretražitelja obriše prije slanja e-maila.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "E-mail aplikacija ne može kreirati prilog.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "E-mail se ne može poslati specificiranom primatelju.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Primatelj možda ne postoji u adresaru.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Provjerite naziv primatelja i ponovno pokušajte poslati dokument.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "E-mail se ne može poslati specificiranom primatelju.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "E-mail adresa je možda pogrešno formatirana.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Provjerite da ste unijeli važeću adresu e-pošte i ponovno pokušajte poslati dokument.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_NO_MESSAGES_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "E-mail se ne može poslati.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "E-mail je možda predug.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Skratite tekst e-maila i ponovno pokušajte poslati e-mail.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "E-mail se ne može kreirati.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Klijent e-pošte možda nije uspio kod pokušaja kreiranja e-maila.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Ponovno pokrenite vaš klijent e-pošte i ponovno pokušajte poslati dokument s Web klijenta.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "E-mail možda nije ispravno složen.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "E-mail se ne može poslati specificiranom primatelju.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "E-mail adresa je možda pogrešno formatirana.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Provjerite da ste unijeli važeću adresu e-pošte i ponovno pošaljite dokument.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "E-mail klijent ne može izvesti zahtijevanu akciju.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "E-mail aplikacija je vratila neočekivanu grešku.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Pokušajte ponovno poslati dokument s Web klijenta.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Jedno od svojstava nema potrebni broj vrijednosti.",
		error_property_cardinality_explanation: "Neka svojstva imaju minimalni i maksimalni broj vrijednosti.",
		error_property_cardinality_userResponse: "Koristite lebdeću pomoć da odredite koje svojstvo zahtijeva minimalan broj vrijednosti. Tada, navedite minimalan broj vrijednosti i pokušajte ponovno.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Potreban je naziv datoteke.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Navedite naziv datoteke i pokušajte ponovno.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "${0} plug-inova sadrži greške.",
		plugin_error_explanation: "Pojavila se greška kod procjene JavaScripta za ${0} plug-in. Ako nastavite koristiti Web klijenta, možete naići na dodatne greške.",
		plugin_error_userResponse: "Kontaktirajte sistemskog administratora.",
		plugin_error_adminResponse: "Postoji problem s plug-inom koji treba riješiti isporučitelj plug-ina. Preporučuje se da uklonite plug-in iz konfiguracije Web klijenta dok se problem s plug-inom ne riješi.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Predložak unosa se ne može otvoriti.",
		open_old_format_entry_template_error_explanation: "Predložak unosa koristi stariji format koji nije podržan na Web klijentu.",
		open_old_format_entry_template_error_userResponse: "Tražite vašeg sistemskog administratora da ažurira predložak unosa.",
		open_old_format_entry_template_error_adminResponse: "Koristite Application Engine ili Workplace XT Entry Template Designer za spremanje ažurirane verzije predloška unosa.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Predložak unosa se ne može otvoriti.",
		open_custom_object_entry_template_error_explanation: "Web klijent ne podržava sljedeći tip predloška unosa: Predložak unosa za prilagođeni objekt.",
		open_custom_object_entry_template_error_userResponse: "Otvorite drukčiji predložak unosa.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Ne može se otvoriti eforms objekt.",
		open_forms_object_error_explanation: "Web klijent ne podržava sljedeće tipove eforms objekata: predložak obrasca, podaci obrasca, politika dokumenta i politika procesa rada.",
		open_forms_object_error_userResponse: "Otvorite drugi dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Ne možete koristiti ${0} predložak unosa.",
		entry_template_folder_restricted_error_explanation: "Predložak unosa dodaje stavke folderu ${1}, a vi nemate odgovarajuće dozvole za dodavanje stavki tom folderu.",
		entry_template_folder_restricted_error_userResponse: "Izaberite drugi predložak unosa ili zatražite da vam vaš sistemski administrator dodijeli odgovarajuće dozvole za dodavanje stavki u folder ${1}.",
		entry_template_folder_restricted_error_0: "entry_template_name",
		entry_template_folder_restricted_error_1: "folder_name",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Predložak unosa se ne može otvoriti.",
		open_records_entry_template_error_explanation: "Web klijent ne podržava sljedeći tip predloška unosa: Predlošci unosa deklaracije sloga.",
		open_records_entry_template_error_userResponse: "Otvorite drukčiji predložak unosa.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Proces rada se ne može otvoriti.",
		open_workflow_error_explanation: "Web klijent ne podržava otvaranje procesa rada.",
		open_workflow_error_userResponse: "Otvorite drugi dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokument se ne može otvoriti.",
		viewer_unable_to_view_error_explanation: "Nema konfiguriranog preglednika za dokumente ovog tipa ili konfigurirani preglednik nije kompatibilan s vašim sistemom.",
		viewer_unable_to_view_error_userResponse: "Zatražite od vašeg sistemskog administratora da konfigurira preglednik za dokumente ovog tipa i  provjerite da li konfigurirani preglednik radi s korisničkim sistemom.",
		viewer_unable_to_view_error_adminResponse: "Koristite administracijski alat za konfiguriranje preglednika za ovaj tip dokumenata.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Pretraživanje se ne može otvoriti",
		search_cannot_open_error_explanation: "Funkcija pretraživanja nije konfigurirana na ovom desktopu.",
		search_cannot_open_error_userResponse: "Pitajte administratora može li vam dati pristup desktopu koji uključuje funkciju pretraživanja ili ažurirati desktop tako da uključuje funkciju pretraživanja.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokument nije učitan.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Profesionalni preglednik nije mogao otvoriti dokument.",
		viewer_document_load_failed_error_userResponse: "Za više detalja pogledajte poruku greške koja se prikazuje u pregledniku.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokument se ne može pogledati.",
		viewer_session_expired_explanation: "Sadržaj dokumenta se ne može dohvatiti.",
		viewer_session_expired_userResponse: "Pokušajte se ponovno prijaviti. Ako se problem nastavi, poslužitelj aplikacija možda ne radi. Zatražite da vaš sistemski  administrator provjeri dnevnike grešaka IBM Content Navigatora ili ponovno pokrene poslužitelj.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokument se ne može pogledati.",
		ajaxViewer_getPage_failed_explanation: "AJAX preglednik je primio dojavu greške prilikom dohvata sadržaja stranice. Poslužitelj aplikacija možda ne radi.",
		ajaxViewer_getPage_failed_userResponse: "Zatvorite vaš Web pretražitelj i ponovno se prijavite. Ako se problem nastavi, zatražite da sistemski administrator pregleda dnevnike grešaka poslužitelja Web aplikacija ili da ponovno pokrene poslužitelj.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) nije nađen na vašoj radnoj stanici.",
		viewer_java_plugin_not_found_explanation: "Ili plug-in nije nađen ili nije instalirana ispravna verzija JRE-a.",
		viewer_java_plugin_not_found_userResponse: "Provjerite je li JRE instaliran. Na primjer, u promptu za naredbe, unesite sljedeću naredbu: Java -verzija. Ako JRE nije instaliran ili je instaliran na krivoj razini, instalirajte odgovarajuću verziju JRE-a. Lista podržanih verzija nalazi se u dokumentu <i>Hardverski i softverski preduvjeti za IBM Content Navigator</i> na sjedištu IBM softverske podrške.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokument se ne može prikazati u vašem Web pretražitelju.",
		viewer_pdf_plugin_not_found_explanation: "Plug-in koji se koristi za prikaz PDF dokumenata u Web pretražitelju nije nađen.",
		viewer_pdf_plugin_not_found_userResponse: "PDF datoteka bit će preuzeta na vašu radnu stanicu umjesto da se prikaže u prozoru preglednika.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Sljedeća stavka se ne može dodati u spremište: ${0}.",
		add_document_single_item_error_explanation: "Ova greška se može dogoditi zbog jednog od sljedećih razloga:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokušavate dodati dokument koji je premješten ili izbrisan.</li>" + "<li>Pokušavate dodati dokument koji je preimenovan.</li>" + "<li>Pokušavate dodati dokument koji je pokvaren.</li>" + "<li>Pokušavate dodati dokument koji je otvoren u drugoj aplikaciji.</li>" + "<li>Pokušavate dodati folder u spremište.</li>" + "<li>Nemate odgovarajuće dozvole na operativnom sistemu za pristup dokumentu.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Poduzmite odgovarajuću akciju da biste riješili problem:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ako je dokument premješten ili preimenovan, pronađite ga na vašem sistemu datoteka i pokušajte ga ponovno dodati.</li>" + "<li>Ako je dokument otvoren u drugoj aplikaciji, zatvorite ga i pokušajte ga ponovno dodati.</li>" + "</ul>" + "<br>Ne možete dodati foldere u spremište.",
		add_document_single_item_error_0: "failed_item",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Sljedećih ${0} stavki se ne može dodati u spremište: ${1}",
		add_document_multiple_items_error_explanation: "Problem kod jedne stavke sprječava dodavanje ostalih stavki u spremište. Ova greška se može dogoditi zbog jednog od sljedećih razloga:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Pokušavate dodati dokument koji je premješten ili izbrisan.</li>" + "<li>Pokušavate dodati dokument koji je preimenovan.</li>" + "<li>Pokušavate dodati dokument koji je pokvaren.</li>" + "<li>Pokušavate dodati dokument koji je otvoren u drugoj aplikaciji.</li>" + "<li>Pokušavate dodati folder u spremište.</li>" + "<li>Nemate odgovarajuće dozvole na operativnom sistemu za pristup dokumentu.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Poduzmite odgovarajuću akciju da biste riješili problem:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Ako je dokument premješten ili preimenovan, pronađite ga na vašem sistemu datoteka i pokušajte ponovno dodati stavke.</li>" + "<li>Ako je dokument otvoren u drugoj aplikaciji, zatvorite ga i pokušajte ga ponovno dodati stavke.</li>" + "<li>Ako je dokument izbrisan ili pokvaren, odznačite stavku i pokušajte ponovno dodati preostale stavke.</li>" + "</ul>" + "<br>Ne možete dodati foldere u spremište.",
		add_document_multiple_items_error_0: "number_of_items",
		add_document_multiple_items_error_1: "failed_items",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Ne možete povlačiti i ispustiti stavke iz ove lokacije.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Ne može se otvoriti eforms objekt.",
		open_forms_work_object_error_explanation: "Web klijent ne podržava sljedeći eforms tip objekta: politika procesa rada.",
		open_forms_work_object_error_userResponse: "Otvorite drugi dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokument se ne može otvoriti.",
		viewer_privilege_to_view_error_explanation: "Nemate odgovarajuće povlastice za gledanje dokumenta.",
		viewer_privilege_to_view_error_userResponse: "Zatražite da vam vlasnik dokumenta ili sistemski administrator dodijeli odgovarajuće dozvole za gledanje  dokumenta.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Stavke se ne mogu dodati u spremište.",
		add_document_too_many_items_error_explanation: "Možete dodati do ${0} stavki od jednom. Pokušavate dodati ${1} stavki.",
		add_document_too_many_items_error_userResponse: "Uklonite neke stavke s liste pa ponovno pokušajte dodati stavke. Također možete kontaktirati svog sistemskog administratora da poveća maksimalan broj dokumenata koje možete dodati odjednom ovom desktopu.",
		add_document_too_many_items_error_0: "maximum_number_of_items",
		add_document_too_many_items_error_1: "number_of_items",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Veza s web klijentom se ne može uspostaviti upotrebom sljedećeg URL-a: ${0}.",
		http_ltpa_expired_explanation: "LTPA ključ pridružen vašoj sesiji pregledavanja je istekao.",
		http_ltpa_expired_userResponse: "Ponovno pokrenite Web pretražitelj i pokušajte se ponovno prijaviti. Ako se problem nastavi, izvijestite sistemskog administratora o sljedećoj greški: ${1}.",
		http_ltpa_expired_0: "web_client_URL",
		http_ltpa_expired_1: "HTTP_error",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokument se ne može dodati u ${0} folder.",
		dnd_no_privilege_error_explanation: "Dozvole za folder sprječavaju dodavanje dokumenata u folder.",
		dnd_no_privilege_error_userResponse: "Dodajte dokument u drugi folder.",
		dnd_no_privilege_error_0: "item_name",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Stavke se ne mogu mijenjati.",
		modify_document_too_many_items_error_explanation: "Možete promijeniti do ${0} stavke(i) odjednom. Vi pokušavate promijeniti ${1} stavki.",
		modify_document_too_many_items_error_userResponse: "Izaberite manje stavki i pokušajte ponovno promijeniti stavke. Također možete kontaktirati svog sistemskog administratora da poveća maksimalan broj stavki koje možete promijeniti odjednom na ovom desktopu.",
		modify_document_too_many_items_error_0: "maximum_number_of_items",
		modify_document_too_many_items_error_1: "number_of_items",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Ne možete koristiti ${0} klasu.",
		add_document_multiple_unique_values_error_explanation: "Klasa ${0} sadrži jedno ili više svojstava koja zahtijevaju jedinstvenu vrijednost za svaki dokument. Kad dodajete više dokumenata, svi dokumenti koriste iste vrijednosti.",
		add_document_multiple_unique_values_error_userResponse: "Izaberite drukčiju klasu ili dodajte dokumente odvojeno.",
		add_document_multiple_unique_values_error_0: "class_display_name",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Ne možete koristiti ${0} predložak unosa.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Predložak unosa ${0} zahtijeva da dodate dokumente u klasu ${1}. Međutim, klasa ${1} sadrži jedno ili više svojstava koja zahtijevaju jedinstvenu vrijednost za svaki dokument. Kad dodajete više dokumenata, svi dokumenti koriste iste vrijednosti.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Izaberite drukčiji predložak unosa ili dodajte dokumente odvojeno.",
		add_document_multiple_unique_values_entry_template_error_0: "entry_template_name",
		add_document_multiple_unique_values_entry_template_error_1: "class_display_name",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Ne možete koristiti ${0} predložak unosa.",
		entry_template_class_restricted_error_explanation: "Predložak unosa dodaje stavke koristeći ${1} klasu i vi ne morate imati odgovarajuće dozvole za dodavanje stavke koristeći ovu klasu.",
		entry_template_class_restricted_error_userResponse: "Izaberite drugačiji predložak unosa ili pitajte vašeg administratora sistema da vam da odgovarajuće dozvole da dodate stavke korištenjem ${1} klase.",
		entry_template_class_restricted_error_0: "entry_template_name",
		entry_template_class_restricted_error_1: "class_display_name",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Radna stavka se ne može ponovno dodijeliti drugom korisniku.",
		process_reassign_error_explanation: "Ovu akciju proces rada ne dozvoljava.",
		process_reassign_error_userResponse: "Možete otvoriti radnu stavku i dovršiti trenutni korak u radnoj stavci.  Za više informacija o ovom problemu, pitajte vlasnika stavke da provjeri da se radna stavka može ponovno dodijeliti.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Sljedeća prilagođena akcija se ne može učitati: ${0}.",
		customaction_loadurl_error_explanation: "Prilagođena akcija nije na dohvatljivoj lokaciji. Trenutni URL prilagođene akcije je ${1}.",
		customaction_loadurl_error_userResponse: "Zatražite da vaš sistemski administrator premjesti prilagođenu akciju na dohvatljivu lokaciju.",
		customaction_loadurl_error_adminResponse: "JSP datoteka koja definira prilagođenu akciju mora se navesti kao dio eClient Web aplikacije ili kao dio IBM Content Navigator Web aplikacije.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Sljedeće funkcije se ne mogu pronaći: ${0}.",
		feature_invalid_explanation: "Do ovoga problema može doći kad funkcija nije dostupna na navedenom desktopu ili je nazivom funkcije krivo napisan.",
		feature_invalid_userResponse: "Kad kliknete OK, preusmjeriti će vas na default funkciju za ovaj desktop. Kontaktirajte sistemskog administratora da javite ovaj problem.",
		feature_invalid_adminResponse: "Ako funkcija treba biti dostupna na desktopu, ažurirajte konfiguraciju desktopa u administrativnom alatu. Ako funkciju ne treba uključiti u desktop ili je netočno napisana, radite s razvijačem aplikacija koji je kreirao URL do ove funkcije da ažurira URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "feature_name",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Pretraživanje ${0} se ne može otvoriti.",
		search_unsupportedTeamspaceSearch_error_explanation: "Morate se nalaziti u timskom prostoru da biste otvorili ovo pretraživanje.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Izaberite drugo pretraživanje.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Sljedeća se datoteka ne može importirati: ${0}.",
		wrong_import_file_type_error_explanation: "Datoteka mora biti datoteka svojstava.",
		wrong_import_file_type_error_userResponse: "Izaberite datoteku svojstava koju ste eksportirali iz administrativnog alata.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Spremište ${0} se ne može naći na ${1} desktopu.",
		browse_repository_not_found_error_explanation: "Spremište mora biti prisutno na desktopu i omogućeno za pregledavanje kad je navedeno u URL parametru.",
		browse_repository_not_found_error_userResponse: "Osigurajte da je ID spremišta naveden u URL-u ispravan, da je spremište dodano u ${1} desktop i da je omogućena funkcija pregledavanja za spremište.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Spremište ${0} nije omogućeno za funkciju pregledavanja na ${1} desktopu.",
		browse_repository_not_enabled_error_explanation: "Spremište mora biti omogućeno za funkciju pregledavanja kad je navedeno u URL parametru.",
		browse_repository_not_enabled_error_userResponse: "Omogući funkciju pregledavanja za ${0} spremište u ${1} desktopu.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Pretraživanje se ne može dovršiti jer veza uključuje pogrešne kriterije.",
		invalid_xt_stored_search_criteria_error_explanation: "Sljedeća vrijednost nije važeća: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Tražite vašeg sistemskog administratora da osigura ažuriranu vezu.",
		invalid_xt_stored_search_criteria_error_adminResponse: "U URL-u uredite odgovarajući par naziv-vrijednost. Ako ne znate koje vrijednosti su važeće za svojstvo, otvorite spremljeno pretraživanje u FileNet Workplace XT dizajneru pretraživanja da odredite važeću vrijednost.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Pretraživanje kroz više spremišta se ne može otvoriti.",
		unified_search_invalid_fixed_value_error_explanation: "Pretraživanje kroz više spremišta uključuje nevažeći kriterij. Ovaj problem se može dogoditi kad kriterij ima fiksnu vrijednost koja nije kompatibilna s ostalim svojstvima u mapiranju. Na primjer, ovaj problem se može dogoditi ako je fiksna vrijednost niz znakova, ali su ostala svojstva u mapiranju cijeli brojevi.",
		unified_search_invalid_fixed_value_error_userResponse: "Ako imate odgovarajuće dozvole za uređivanje pretraživanja, uklonite nevažeći kriterij i ponovno spremite pretraživanje. Ako imate odgovarajuće dozvole za uređivanje pretraživanja, zatražite da vlasnik pretraživanja ili sistemski administrator ponovno spremi pretraživanje.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Vaš zahtjev se ne može dovršiti.",
		launch_action_invalid_json_error_explanation: "Podaci predani Web klijentu nisu ispravni.",
		launch_action_invalid_json_error_userResponse: "Obavijestite svog sistemskog administratora o aplikaciji koju ste koristili kad se dogodio problem.",
		launch_action_invalid_json_error_adminResponse: "Klijentska aplikacija ne šalje važeći JSON objekt Web klijentu. Kontaktirajte IBM softversku podršku za dodatnu pomoć.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Vaš zahtjev se ne može dovršiti.",
		launch_action_not_found_error_explanation: "Akcija ${0} nije konfigurirana za izbornike na ${1} desktopu.",
		launch_action_not_found_error_userResponse: "Zatražite da vaš sistemski administrator konfigurira ${1} desktop za korištenje izbornika s akcijom ${0} ili da vam dodijeli desktop, koji sadrži akciju ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Vaš zahtjev se ne može dovršiti.",
		launch_action_repository_not_found_error_explanation: "Spremište ${0} nije pridruženo desktopu ${1}.",
		launch_action_repository_not_found_error_userResponse: "Zatražite da vaš sistemski administrator pridruži spremište ${0} desktopu ${1} ili da vam dodijeli  desktop, koji sadrži spremište ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Timski prostor se ne može otvoriti.",
		teamspace_cannot_open_error_explanation: "Značajka timskog prostora nije konfigurirana za ovaj desktop.",
		teamspace_cannot_open_error_userResponse: "Zatražite vašeg sistem administratora za dozvolu pristupa desktopu koji sadrži značajku timskog prostora ili ako se ovaj desktop može ažurirati da sadrži značajku timskog prostora.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Pojavila se greška prilikom prijave uređivanog sadržaja.",
		viewer_redaction_checkin_failed_explanation: "Preglednik je primio dojavu greške prilikom prijave uređenog (redigiranog) sadržaja.",
		viewer_redaction_checkin_failed_userResponse: "Zatražite da vaš sistemski administrator pregleda datoteke dnevnika poslužitelja Web aplikacija.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Ne možete dodati dokumente u ovo spremište.",
		add_document_odserver_odwek_version_od_error_explanation: "Trenutna verzija IBM Content Manager OnDemand poslužitelja ili ODWEK nije na  minimalnoj razini koja je potrebna za podršku dodavanja dokumenata u Content Manager OnDemand spremište.",
		add_document_odserver_odwek_version_od_error_userResponse: "Zatražite od vašeg administratora da provjeri koje verzije Content Manager OnDemand poslužitelja i ODWEK su potrebne za podršku dodavanja dokumenata u Content Manager OnDemand spremišta.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Stavke se ne mogu dodati u spremište.",
		add_document_too_many_items_od_error_explanation: "Za IBM Content Manager OnDemand spremišta, možete odjednom dodati samo jednu stavku.",
		add_document_too_many_items_od_error_userResponse: "Uklonite neke od stavaka s vaše liste i pokušajte ih dodati ponovno, jednu po jednu.",
		add_document_too_many_items_od_error_0: "maximum_number_of_items",
		add_document_too_many_items_od_error_1: "number_of_items",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Stavka se ne može dodati u spremište.",
		add_document_filesize_empty_od_error_explanation: "Ne možete dodati prazne datoteke u IBM Content Manager OnDemand spremište.",
		add_document_filesize_empty_od_error_userResponse: "Dodajte sadržaj u datoteku i pokušajte ponovno dodati datoteku ili dodajte neku drugu stavku.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Pretraživanje kroz više spremišta se ne može otvoriti.",
		unified_search_repository_not_found_error_explanation: "Pretraživanje kroz više spremišta uključuje jedno ili više nevažećih spremišta. Ovaj problem se može dogoditi kad se iz aplikacije izbrišu spremišta koja su uključena u pretraživanje ili se uklone s trenutnog desktopa.",
		unified_search_repository_not_found_error_userResponse: "Ako imate odgovarajuće dozvole za uređivanje pretraživanja, ponovno ga spremite. Kad spremite pretraživanje, Web klijent uklanja pogrešna spremišta iz pretraživanja. Ako imate odgovarajuće dozvole za uređivanje pretraživanja, zatražite da vlasnik pretraživanja ili sistemski administrator ponovno spremi pretraživanje.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Novi dokument se ne može kreirati.",
		edit_document_using_office_online_error: "Dokument se ne može otvoriti.",
		edit_document_using_office_online_error_explanation: "URL za Microsoft Office Online Server nije konfiguriran.",
		edit_document_using_office_online_error_userResponse: "Prije upotrebe Officea online, vaš administrator mora omogućiti Office Online Server na spremištu i navesti URL za Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokument se ne može otvoriti u proizvodu Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Zatražite od administratora da ažurira integraciju poslužitelja za MS Office Online.<br><br> Ako korisnik treba pristupiti ovom dokumentu u proizvodu Microsoft Office Online, idite na stranicu Uredi integraciju za spremište i ažurirajte integraciju MS Office Online poslužitelja tako da se klasa nalazi na listi klasa koje se mijenjaju radi podrške proizvoda Office Online. ",		
		browser_not_support_this_viewer: "Konfigurirani preglednik nije kompatibilan s vašim pretražiteljem.",
		browser_not_support_this_viewer_explanation: "${0} nije podržan od strane preglednika.",
		browser_not_support_this_viewer_userResponse: "Upotrijebite drugi preglednik za otvaranje dokumenta. Lista podržanih preglednika uključena je u <i>Hardverski i softverski preduvjeti za IBM Content Navigator</i> dokument na stranici IBM Softverska podrška.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informacije procesa rada",
		process_information_info_text: "Izabrana stavka se trenutno izvodi u sljedećim procesima rada.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Jednako",
		operator_NOTEQUAL: "Nije jednako",
		operator_LIKE: "Kao",
		operator_STARTSWITH: "Počinje s",
		operator_ENDSWITH: "Završava s",
		operator_NOTLIKE: "Nije sličan",
		operator_NULL: "Prazno",
		operator_NOTNULL: "Nije prazno",
		operator_LESS: "Manje od",
		operator_LESSOREQUAL: "Manje od ili jednako",
		operator_GREATER: "Veće od",
		operator_GREATEROREQUAL: "Veće od ili jednako",
		operator_BETWEEN: "Između",
		operator_NOTBETWEEN: "Nije između",
		operator_IN: "Uključi sve",
		operator_INANY: "Uključi bilo koji",
		operator_NOTIN: "Isključi sve",
		operator_CONTAINS: "Sadrži",

		/* SearchForm widget */
		search_button_tooltip: "Potražite dokumente koji se podudaraju s vašim kriterijima.",
		reset_button_tooltip: "Resetira pretraživanje na default vrijednosti koje je postavio vaš administrator.",
		clear_button_tooltip: "Uklanja sve vrijednosti koje ste unijeli za pretraživanje.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Izbor pretraživanja",
		append_to_search: "Pridodaj pretraživanju",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Novo pretraživanje",
		new_unified_search: "Novo pretraživanje kroz više spremišta",
		searh_name_contains: "Traženi naziv sadrži",
		keep_search_criteria_expanded: "Drži kriterije pretraživanja otvorenim",
		showing_results: "Pokazuje rezultate za:",
		open_in_new_window: "Otvori u novom prozoru",
		open_in_new_tab: "Otvori na novoj kartici",
		close_tab: "Zatvori karticu",
		add_repository: "Dodaj spremište",
		edit_repository: "Uredi spremište",
		remove_repository: "Ukloni",
		search_scope: "Opseg pretraživanja",
		search_class_template: "Klasa",
		object_type_version: "Tip i verzija objekta",
		not_applicable: "Nije primjenjivo",
		unified_search_including_subfolders: " (Uključujući podfoldere)",
		unified_search_dialog_intro_text: "Izaberite spremište i pretraživanje ili klase koje želite uključiti u pretraživanje.",
		unified_search_class_or_template: "Klasa ili predložak",

		select_object_fieldset_legend: "Kako želite pronaći stavke koje se priključuju",
		select_object_create_new_search: "Novo pretraživanje",
		select_object_search_template: "Postojeće pretraživanje",

		search_criteria: "Kriteriji pretraživanja:",
		search_criteria_no_colon: "Kriteriji pretraživanja",
		search_in_multiple: "Traži u (${0}):",
		search_location_including_subfolders: "${0} uključujući podfoldere",
		search_class: "Klasa:",
		search_class_multiple: "klasa (${0}):",
		search_class_including_subclasses: "${0} uključujući podklase",
		search_class_all_pseudo: "Sve",
		search_results: "Rezultati pretraživanja",
		select_operator: "Izbor operatora",
		ending_value: "Završna vrijednost za ${0} svojstvo:",
		search_options: "Opcije pretraživanja:",
		search_version: "Verzija:",
		search_released_version: "Izdana verzija",
		search_current_version: "Trenutna verzija",
		search_all_versions: "Sve verzije",
		search_file_type_filter: "Filter tipa datoteka:",
		search_one_file_type: "1 tip datoteka",
		search_many_file_types: "${0} tipova datoteka",
		search_action_filter: "Filter akcije:",
		search_action_filter_hover_help: "Suzite rezultate tako da uključuju samo datoteke na kojima su korisnici poduzeli određenu akciju.<br/>Na primjer, možete tražiti samo dokumente koje ste dodali 20.9.2012.",
		search_action_filter_enabled: "Filter akcije je omogućen",
		search_enable: "Omogući",
		search_disable: "Onemogući",
		search_by: "po",
		search_added: "Dodano",
		search_modified: "Promijenjeno",
		search_checked_out: "Odjavljeno",
		search_date_operator_on: "Na",
		search_date_operator_not_on: "Nije na",
		search_date_operator_before: "Prije",
		search_date_operator_after: "Nakon",
		search_version_hover_help_p8: "Izdana verzija je dostupna svim korisnicima. Dokument koji je trenutna verzija znači da ga jedan ili više korisnika uređuje.",
		search_version_hover_help_cm: "Trenutna verzija je najnovija verzija stavke.",
		search_using: "Traži stavke koje se podudaraju u:",
		search_property_and_text_criteria: "vrijednostima svojstava i tekst kriterijima",
		search_property_or_text_criteria: "ili u vrijednostima svojstava ili u tekst kriterijima",
		search_property_and_text: "kriterijima svojstava i teksta",
		search_property_or_text: "kriterijima svojstva ili teksta",
		search_property_options: "Opcije svojstva:",
		search_property_option_match_all: "Sva svojstva",
		search_property_option_match_any: "Bilo koje svojstvo",
		search_property_option_match_all_summary: "Odgovara sve",
		search_property_option_match_any_summary: "Odgovara bilo što",
		search_total_count_type_total: "Ukupno",
		search_total_count_type_atleast: "Najmanje",
		search_content_size_filter: "Filter za veličinu sadržaja:",
		search_content_size_filter_any: "Sve veličine sadržaja",

		/* Search work options */
		search_work_filter: "Filter radne stavke:",
		search_work_filter_hover_help: "Suzite rezultate na način da uključuju samo stavke koje su u procesu rada. Na primjer, možete suziti rezultate da uključuju radne stavke koje su aktivne.<br /><br />Ova opcija se ne primjenjuje ako želite vidjeti sve verzije stavki koje pretraživanje vraća.",
		search_work_filter_enabled: "Filter radne stavke je omogućen",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Korak:",
		search_work_filter_owner: "Vlasnik:",
		search_work_filter_status_all: "Sve stavke",
		search_work_filter_status_active: "Aktivne stavke",
		search_work_filter_status_suspended: "Odgođene stavke",
		search_work_filter_process_all: "Svi procesi rada",
		search_work_filter_step_all: "Svi koraci",
		search_work_filter_owner_all: "Svi korisnici",
		search_work_filter_step_error: "Naziv koraka ne postoji.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Pretraživanje se ne može dovršiti bez dodatnih informacija. Unesite vrijednost za najmanje jedan uvjet.",
		search_insufficient_input_box: "Pretraživanje se ne može dovršiti bez dodatnih informacija. Unesite kriterij pretraživanja teksta ili izaberite predložak meta podataka.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Pretraživanje se ne može konfigurirati za izvođenje kad je otvoreno, bez dodatnih informacija. Unesite vrijednost za najmanje jedan uvjet.",
		search_member_required: "Da biste dijelili ovo pretraživanje s određenim korisnicima i grupama, izaberite najmanje jednog korisnika ili grupu s kojima ćete ga dijeliti.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Želite li zatvoriti bez spremanja promjena?",
		search_prompt_close_all_without_save: "Želite li zatvoriti sve kartice bez spremanja promjena?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Jedan od sljedećih tipova kriterija pretraživanja nisu važeći za ovo spremište: ${0}. Za izvođenje pretraživanja u Web klijentu, treba ukloniti nevažeće kriterije. Ako spremite pretraživanje, nevažeći kriteriji će se ukloniti. Ako ne želite promijeniti pretragu, zatvorite pretraživanje.",
		search_invalid_repository: "Jedno ili više spremišta",
		search_invalid_class: "Jedna ili više klasa",
		search_invalid_folder: "Jedan ili više foldera",
		search_invalid_file_type: "Jedan ili više tipova datoteka",
		search_invalid_property: "Jedno ili više svojstava",
		search_invalid_text_search: "Kriterij pretraživanja teksta",
		search_invalid_work: "Kriterij filtera radne stavke",

		search_operator_pulldown_missing: "Operator je obavezan. Izaberite operator na padajućem izborniku. Ako ne vidite operatore, zatražite da sistemski administrator provjeri karticu <b>Pretraživanje</b> u administracijskom alatu radi provjere jesu li svi operatori skriveni. Ako je ovo pretraživanje kroz više spremišta, padajući izbornik možda neće sadržavati operatore ako međusobno mapirana svojstva nemaju zajedničke operatore.",

		/*SearchBuilder */
		open_search_builder: "Novo pretraživanje",
		document_type: "Klasa",
		show_all_properties: "Pokaži sva svojstva",
		text_search_label: "Pronađi stavke sa sljedećim pojmovima:",
		text_search_place_holder: "Koristi kombinaciju pojmova i operatora: * ? ili \"izraze točnog podudaranja\"",
		text_search_place_holder_box: "Koristite kombinaciju pojmova i operatora: AND, OR, NOT i \"izraze točnog podudaranja\"",
		text_search_place_holder_cascade_proximity: "Koristite kombinaciju pojmova i operatora: * ili ?",
		text_search_place_holder_common: "Koristite kombinaciju pojmova i \"izraze točnog podudaranja\"",
		text_search_hover_help_p8: "Koristite zvjezdicu (*) ili upitnik (?) kao generički znak. Koristite duple navodnike (\"\") za točna podudaranja.",
		text_search_hover_help_p8_only_crs: "Koristite zvjezdicu (*) ili upitnik (?) kao generički znak. Koristite duple navodnike (\"\") za točna podudaranja. Kad specificirate više pojmova, pretraživanje kroz cijelo spremište vraća stavke koje sadrže bilo koji od pojmova.",
		text_search_hover_help_cm: "Koristite zvjezdicu (*) ili upitnik (?) kao generički znak. Koristite duple navodnike (\"\") za točna podudaranja. Koristite znak minus (-) ispred pojmova koji se isključuju  isključivanje, a znak plus (+) ispred pojmova koji se uključuju.",
		text_search_hover_help_box: "Koristite AND između pojmova ako želite podudaranje svih pojmova. Koristite OR između pojmova ako želite podudaranje kojim od navedenih pojmova. Koristite duple navodnike (\"\") za točna podudaranja. Ispred pojma stavite NOT da ga isključite.",
		text_search_hover_help_common: "Koristite duple navodnike (\"\") za točna podudaranja. Kad specificirate više pojmova, pretraživanje kroz cijelo spremište vraća stavke koje sadrže sve pojmove.",
		text_search_options: "Opcije teksta:",
		text_search_options_hover_help: "Ako koristite bilo kakve operatore osim generičkih znakova, izaberite Napredni operatori.",
		text_search_option_any: "Bilo koji pojam",
		text_search_option_all: "Svi pojmovi",
		text_search_option_proximity: "Unutar blizine riječi:",
		text_search_option_none: "Napredni operatori",
		text_search_option_authoring: "Tekst pretraživanje je:",
		text_search_option_authoring_hover_help: "Izaberite opciju koja određuje kako želite postaviti kriterij pretraživanja teksta dostupan korisnicima. Ako ne želite uključiti bilo koji kriterij pretraživanja teksta, sakrijte opciju. U suprotnom, možete dozvoliti da kriterij pretraživanja teksta bude uređen ili obavezan za korisnike ili ga učiniti korisnicima da bude samo za čitanje.",
		text_search_option_hide: "Sakrij kriterije",
		text_search_option_hide_hover_help: "Izaberite ovu opciju ako ne želite uključiti kriterije pretraživanja teksta u pretraživanju ili pak dozvoliti ostalim korisnicima da navedu kriterije za pretraživanje teksta.",
		text_search_option_in: "U HTML/XML oznaci ${0}",
		text_search_option_paragraph: "U istom odlomku",
		text_search_option_sentence: "U istoj rečenici",
		text_search_option_vql: "VQL upit",
		text_search_option_none_hover_help: "Koristite - ispred uvjeta koji se isključuju",
		text_search_option_cascade_proximity_hover_help: "Ograničava rezultate pretraživanja na pojmove koji se pojavljuju u rasponu riječi, koji ne uključuje točne fraze.",

		box_search_metadata: "Meta podaci:",
		box_search_select_template: "Izbor predloška",
		box_search_no_templates: "Nema dostupnih predložaka",
		box_text_search_options_search_within: "Opseg pretraživanja:",
		box_text_search_options_search_within_everything: "Sve",
		box_text_search_options_search_within_file_content: "Sadržaj dokumenta",
		box_text_search_options_search_within_tags: "Oznake",
		box_text_search_options_limit_to: "Samo pretraži:",

		add_property: "Dodaj svojstvo",
		edit_template: "Uređivanje pretraživanja",
		save_search: "Spremi pretraživanje",
		search_template_name: "Naziv:",
		search_template_desc: "Opis:",
		auto_run: "Izvedi pretraživanje nakon otvaranja",
		show_in_tree: "Pokaži pretraživanje u strukturi foldera",
		show_in_tree_hover_help: "Ako je pretraživanje spremljeno u folderu, prikazuje se samo na listi sadržaja po defaultu. Ako izaberete ovu opciju, ovo pretraživanje se također prikazuje na stablu foldera u pogledu Pretraži.  Međutim, pretraživanje se prikazuje u stablu foldera samo ako spremite pretraživanje u folderu.",
		share_search_with: "Podijeli pretraživanje s:",
		remove_member: "Ukloni ${0}",
		ok_button_label: "OK",
		save_template: "Spremi",
		save_template_title: "Ako trebate često tražiti određene stavke, spremite kriterije pretraživanja.",
		remove_criterion: "Ukloni",
		apply_button_label: "Primijeni",
		empty_search_results_pane: "Izvedite pretraživanje da biste vidjeli rezultate.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Cijelo spremište",

		repository_already_selected: "Spremište ${0} se ne može dodati u pretraživanje kroz više spremišta jer je već uključeno u pretraživanje. <br/> Spremište se može uključiti u pretraživanje kroz više spremišta samo jednom. <br/>Izaberite drugo spremište koje ćete uključiti u pretraživanje kroz više spremišta.",

		repository_limit_reached: "Spremište ${0} se ne može dodati u pretraživanje kroz više spremišta. Možete dodati najviše ${1} spremišta u pretraživanje.",

		nomore_criteria_toappend: "Sva mapirana svojstva su već uključena u kriterije pretraživanja. Svojstva nisu dodana u kriterije pretraživanja.",
		nomore_criteria_toappend_regular: "Sva svojstva su već uključena u kriterije pretraživanja. Svojstva nisu dodana u kriterije pretraživanja.",

		/* OD Save Search dialog */
		reload_label: "Ponovno učitaj",
		od_save_search_help_text: "Upišite naziv pretraživanja ili izaberite postojeće pretraživanje za zamjenu",
		public_access_label: "Dozvoli da drugi koriste ovo pretraživanje",
		od_delete_search_help_text: "Izaberite jedno ili više pretraživanja za brisanje",
		delete_save_searches: "Brisanje spremljenih pretraživanja",

		/* Unified Search */
		unified_search_enable_text_search: "Uključi kriterije pretraživanja teksta",
		unified_search_text_search_enabled: "Uključeno je pretraživanje teksta",
		unified_search_mapping: "Mapiranje",
		unified_search_new_mapping: "Novo mapiranje",
		unified_search_mapping_name: "Naziv mapiranja",
		unified_search_mapping_dialog_instructions: "Izaberite svojstva koja želite mapirati. Neka svojstva se mogu mapirati u svojstva s drukčijim tipom podataka. Na primjer, možete mapirati svojstvo niza znakova u svojstvo cijelog broja. Kad mapirate svojstvo na drugo svojstvo, svojstva se tretiraju kao jedno svojstvo u pretraživanju kroz više spremišta.",
		unified_search_filter_available_properties: "Filtriraj dostupna svojstva",
		unified_search_available_properties: "Dostupna svojstva",
		unified_search_mapped_properties: "Mapirana svojstva",
		unified_search_single_values: "pojedinačne vrijednosti",
		unified_search_multiple_values: "višestruke vrijednosti",
		unified_search_add_mapping: "Dodaj mapiranje",
		unified_search_warn_remove_repository: "Izabrano spremište se koristi u kriteriju pretraživanja.\nAko uklonite spremište, sva mapiranja i kriteriji pretraživanja koji uključuju spremište će se izbrisati.\n\nŽelite li ukloniti spremište?",
		unified_search_warn_update_repository_mappings: "Promjena izbora svojstva za ovo spremište utječe na kriterije pretraživanja.\n\nKriteriji pretraživanja obuhvaćaju mapiranja koja uključuju svojstva koja uklanjate. Mapiranja koja sadrže svojstva koja uklanjate moraju se izbrisati. Kriteriji pretraživanja koji sadrže mapiranja moraju se izbrisati da bi se moglo izvesti pretraživanje.\n\nŽelite li ažurirati opcije spremišta i izbrisati mapiranja i kriterije pretraživanja?",
		unified_search_warn_update_repository_mappings_reset: "Uključivanje kriterija pretraživanja u ovo spremišta utječe na kriterije pretraživanja kroz više spremišta.\n\nSvaki kriterij pretraživanja svojstava, koji uključuje mapiranje sa svojstvima ovog spremišta, mora se isprazniti radi izvođenja ovog pretraživanja.\n\nŽelite li ažurirati opcije spremišta i isprazniti kriterije pretraživanja?",
		unified_search_warn_update_repository_text_criteria: "Uklanjanje kriterija pretraživanja teksta za ovo spremište utječe na kriterije pretraživanja kroz više spremišta.\n\nKriteriji pretraživanja teksta moraju se izbrisati iz kriterija pretraživanja kroz više spremišta da bi se pretraživanje moglo izvesti. \n\nŽelite li ažurirati opciju spremišta i izbrisati kriterije pretraživanja teksta?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Uklanjanje kriterija pretraživanja teksta i promjena izabranih svojstava za ovo spremište utječu na kriterije pretraživanja kroz više spremišta.\n\nKriteriji pretraživanja teksta moraju se izbrisati iz kriterija pretraživanja kroz više spremišta da bi se pretraživanje moglo izvesti. Osim toga, kriteriji pretraživanja svojstva obuhvaćaju mapiranja koja uključuju svojstva koja uklanjate. Mapiranja koja sadrže svojstva koja uklanjate moraju se izbrisati. Kriteriji pretraživanja svojstava koji sadrže ta mapiranja moraju se izbrisati da bi se moglo izvesti pretraživanje.\n\nŽelite li ažurirati opcije spremišta i izbrisati kriterije pretraživanja teksta, mapiranja i kriterije pretraživanja svojstava?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Isključivanje kriterija pretraživanja teksta za ovo spremište utječe na kriterije pretraživanja kroz više spremišta.\n\nSvaki kriterij pretraživanja svojstava, koji uključuje mapiranje sa svojstvima ovog spremišta mora se isprazniti radi izvođenja ovog pretraživanja. Kriteriji pretraživanja teksta možda će se izbrisati iz kriterija pretraživanja kroz spremišta radi izvođenja ovog pretraživanja.\n\nŽelite li ažurirati opcije spremišta i isprazniti kriterije pretraživanja?",
		unified_search_warn_remove_mapping: "Uklanjanje ovog mapiranja utječe na kriterije pretraživanja.\n\nKriteriji pretraživanja koji koriste mapiranje moraju se izbrisati da bi se pretraživanje moglo izvesti.\n\nŽelite li ažurirati mapiranje i izbrisati kriterije pretraživanja?",
		unified_search_warn_update_mapping: "Promjene na ovom mapiranju utječu na kriterije pretraživanja.\n\nKriteriji pretraživanja koji koriste mapiranje moraju se ukloniti tako da ne postoji mogućnost da pretraživanje sadrži nevažeće operatore ili vrijednosti.\n\nŽelite li ažurirati mapiranje i ukloniti kriterije pretraživanja?",
		unified_search_warn_update_mapping_not_searchable: "Promjene na ovom mapiranju utječu na kriterije pretraživanja.\n\nKad su sva mapirana svojstva samo za prikaz, ne možete koristiti mapiranje u kriterijima pretraživanja. Kriteriji pretraživanja koji koriste mapiranja moraju se izbrisati da bi se moglo izvesti pretraživanje.\n\nŽelite li ažurirati mapiranje i izbrisati kriterije pretraživanja?",
		unified_search_warn_update_mapping_box_searchable: "Promjene na ovom mapiranju utječu na kriterije pretraživanja.\n\nKriteriji pretraživanja već sadrže više instanci ovog mapiranja i ako dodate svojstvo ${0} iz spremišta ${1}, kriteriji pretraživanja sadrže svojstvo ${0} prevelik broj puta. Kriteriji pretraživanja koji koriste mapiranja moraju se izbrisati da bi se moglo izvesti pretraživanje.\n\nŽelite li ažurirati mapiranje i izbrisati kriterije pretraživanja?",
		unified_search_details: "Detalji pretraživanja kroz više spremišta",
		unified_search_fixed_value_property: "Svojstvo fiksne vrijednosti",
		unified_search_required_property: "Potrebno svojstvo",
		unified_search_display_only_property: "Svojstvo samo za prikaz",
		unified_search_missing_required_properities: "Pretraživanje se ne može spremiti ili izvesti.<br/>Sljedeća svojstva su obavezna svojstva:${0}Svojstva morate uključiti u mapiranje i dodati svojstva s vrijednostima u kriterije pretraživanja.",
		unified_search_property_repostory: "${0} (Spremište: ${1})",
		unified_search_builder_no_mappings: "Pretraživanje se ne može izvesti.<br/>Morate kreirati mapiranje svojstva i uključiti ga u <b>Prilaz rezultata</b> tako da pretraživanje može prikazati rezultate.",
		unified_search_builder_insufficient_criteria_to_run: "Pretraživanje se ne može izvesti.<br/>Kriteriji pretraživanja ne sadrže kriterije pretraživanja teksta ili vrijednosti svojstava za sljedeća spremišta:${0}Za svako spremište koje je uključeno u pretraživanje, morate ili unijeti kriterije pretraživanja teksta ili kreirati mapiranje svojstava, uključiti ga u kriterije svojstava i specificirati vrijednost svojstva.",
		unified_search_builder_insufficient_criteria_to_save: "Pretraživanje se ne može spremiti.<br/>Pretraživanje ne uključuje kriterije pretraživanja za sljedeća spremišta: ${0}Za svako spremište koje je uključeno u pretraživanje, morate napraviti jednu od sljedećih opcija:<ol><li>Kreirajte mapiranje svojstva i uključite ga u kriterije svojstava.</li><li>Promijenite spremište tako da uključuje kriterije pretraživanja teksta i kreirajte mapiranje svojstva i uključite ga u <b>Prikaz rezultata</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Pretraživanje se ne može izvesti.<br/>Za svako spremište uključeno u pretraživanje morate navesti vrijednost barem jednog svojstva. Na primjer, možete navesti vrijednosti za sljedeća svojstva: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Pretraživanje se ne može izvesti.<br/>Potrebni su kriteriji pretraživanja teksta.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Pretraživanje se ne može izvesti.<br/>Za svako spremište uključeno u pretraživanje morate navesti vrijednost barem jednog svojstva ili upisati kriterije pretraživanja teksta. Na primjer, možete navesti vrijednosti za sljedeća svojstva: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Pretraživanje se ne može izvesti.<br/>Potrebni su kriteriji pretraživanja teksta. Za svako spremište uključeno u pretraživanje morate navesti vrijednost barem jednog svojstva ili upisati kriterije pretraživanja teksta. Na primjer, možete navesti vrijednosti za sljedeća svojstva: ${0}",
		unified_search_invalid_criteria: "Pretraživanje sadrži nevažeće kriterije koji sprječavaju izvođenje pretraživanja.<br/>Nevažeći kriteriji su uklonjeni. Međutim morate spremiti promjene pretraživanja prije nego ga izvedete. Ako ne želite spremiti pretraživanje, zatvorite ga.<br/><br/>Sljedeće stavke su uklonjene ili promijenjene:${0}",
		unified_search_invalid_fixed_values: "Pretraživanje se ne može spremiti ili izvesti.<br/>Sljedeći kriterij pretraživanja ima fiksne vrijednosti koje nisu važeće:${0}Poduzmite jednu od sljedećih akcija da riješite problem:<ul><li>Uklonite kriterij pretraživanja koji sadrži nevažeće vrijednosti</li><li>Uredite mapiranja koja uključuju IBM Content Manager OnDemand svojstvo s fiksnom vrijednošću da uklonite svojstvo.</li><li>Uredite mapiranja koja uključuju IBM Content Manager OnDemand svojstvo s fiksnom vrijednošću da sva svojstva učinite kompatibilnima. Za više informacija o svojstvima koja se mogu mapirati pogledajte vezu Saznajte više u uvodnom tekstu na vrhu prozora za mapiranje svojstava.</li></ul>",
		unified_search_cannot_add_properties: "Ovom pretraživanju ne možete dodati svojstva.<br/>Sva vaša dostupna mapirana svojstva se već nalaze u kriterijima pretraživanja, a svako se svojstvo može dodati pretraživanju samo jednom.",
		unified_search_mapping_not_viewable: "Svojstva Box predloška se ne mogu prikazati u rezultatima pretraživanja. Ako želite dodati ovo mapiranje kao stupac, morate mapirati najmanje jedno svojstvo koje nije svojstvo Box predloška. Na primjer, možete izabrati svojstvo iz drugog spremišta.",

		unified_search_returned_more: "Barem jedno spremište premašuje maksimalan dozvoljeni broj rezultata.",
		unified_search_partial_failure: "Pojavila se greška na najmanje jednom spremištu.",
		unified_search_partial_failure_and_returned_more: "Pojavila se greška na barem jednom spremištu i barem jedno spremište je premašilo maksimalni broj rezultata.",
		unified_search_see_analysis: "Pogledajte analizu rezultata.",
		unified_search_analysis_intro_returned_more: "Za svako spremište koje premašuje maksimalni broj rezultata pokušajte dodatno definirati svoje kriterije pretraživanja da biste dobili manji broj rezultata. Ili možete izvesti pretraživanje jednog spremišta i vratiti više rezultata nego što je dozvoljeno u pretraživanju kroz više spremišta.",
		unified_search_analysis_intro_partial_failure: "Pregledajte informacije o grešci koju je vratilo spremište ili spremišta. Ako je prikladno, riješite greške i ponovno izvedite pretraživanje kroz više spremišta.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Za svako spremište u kojem se dogodila greška pokušajte riješiti problem i ponovno izvedite pretraživanje.<br/><br/>Za svako spremište koje premašuje maksimalni broj rezultata pokušajte dodatno definirati svoje kriterije pretraživanja da biste dobili manji broj rezultata. Ili možete izvesti pretraživanje jednog spremišta i vratiti više rezultata nego što je dozvoljeno u pretraživanju kroz više spremišta.",
		unified_search_results_found: "Rezultati nađeni",
		unified_search_maximum_allowed: "Maksimalno dozvoljeno",
		unified_search_maximum_exceeded: "Maksimum premašen",

		unified_search_mapping_rule_box: "Ovo svojstvo se ne može dodati u mapiranje.<p>Svojstvo ${0} iz spremišta ${1} već je uključeno u drugo mapiranje, a pretraživa svojstva u ovom spremištu mogu se uključiti u samo jedno mapiranje po pretraživanju.<br/>Izaberite drugo svojstvo koje ćete dodati u mapiranje.</p>",
		unified_search_mapping_rule_repository: "Svojstvo se ne može dodati u mapiranje.<br/>Mapiranje već uključuje svojstvo iz ${0} spremišta. Mapiranje može uključivati samo jedno svojstvo iz spremišta.<br/>Izaberite drugo spremište iz kojeg treba dodati svojstvo ili kreirajte novo mapiranje za izabrano svojstvo.",
		unified_search_mapping_rule_data_type: "Svojstvo se ne može dodati u mapiranje.<br/>Svojstvo ${0} se ne može mapirati u svojstvo ${1}. Izaberite drugo svojstvo za mapiranje ili kreirajte novo mapiranje za izabrano svojstvo.<br/>Za više informacija o svojstvima koja se mogu mapirati pogledajte vezu Saznajte više u uvodnom tekstu na vrhu ovog prozora.",
		unified_search_mapping_rule_cardinality: "Svojstvo se ne može dodati u mapiranje.<br/>Sva svojstva u mapiranju moraju podržavati ili pojedinačne ili višestruke vrijednosti. Izabrano svojstvo podržava ${0} i svojstva u mapiranju podržavaju ${1}.<br/>Izaberite drugo svojstvo za dodavanje u mapiranje ili kreirajte novo mapiranje za izabrano svojstvo.",
		unified_search_mapping_rule_fixed_value: "Svojstvo se ne može dodati u mapiranje.<br/>Mapiranje već uključuje svojstvo s fiksnom vrijednosti. Mapiranje može uključivati samo jedno svojstvo s fiksnom vrijednosti.<br/>Izaberite drugo svojstvo za dodavanje u mapiranje ili kreirajte novo mapiranje za izabrano svojstvo.",
		unified_search_mapping_rule_child_component: "Svojstvo se ne može dodati u mapiranje.<br/>Svojstvo s podređenom komponentom se ne može mapirati na druga svojstva. Ako želite moći tražiti po ovom svojstvu, kreirajte novo mapiranje za izabrano svojstvo.",
		unified_search_mapping_rule_operator_intersection: "Svojstvo se ne može dodati u mapiranje.<br/>Sva svojstva u mapiranju moraju imati jedan ili više zajedničkih operatora. Međutim, svojstvo ${0} nema zajedničkih operatora s drugim svojstvima u mapiranju.<br/>Ako je prikladno, izaberite drugo svojstvo. Ako morate uključiti izabrano svojstvo, radite s vašim sistemskim administratorom da uredite operatore koji su pridruženi svojstvu.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Napredne postavke",
		advanced_search_options_intro: "Postavite opcije naprednih kriterija.",
		advanced_search_options_editable: "Za uređivanje",
		advanced_search_options_readonly: "Samo za čitanje",
		advanced_search_options_required: "Obavezno",
		advanced_search_options_hidden: "Skriveno",
		advanced_search_options_property_editable:"Svojstvo je:",
		advanced_search_options_operators:"Operatori:",
		advanced_search_options_use_all:"Koristi sve",
		advanced_search_options_use_selected:"Koristi izabrano",
		advanced_search_options_operators_filtered: "Operatori filtriranja",
		// Data types in lowercase
		data_type_boolean: "booleov",
		data_type_date: "datum",
		data_type_time: "vrijeme",
		data_type_timestamp: "vremenska oznaka",
		data_type_decimal: "decimalna vrijednost",
		data_type_double: "broj s pomičnim zarezom",
		data_type_short: "cijeli broj",
		data_type_integer: "cijeli broj",
		data_type_long: "cijeli broj",
		data_type_string: "tekstualni niz",
		data_type_string_alpha: "abecedni niz znakova",
		data_type_string_alphanum: "alfanumerički niz znakova",
		data_type_string_ext: "prošireni alfanumerički niz znakova",
		data_type_string_num: "numerički niz znakova",
		data_type_binary: "binaran",
		data_type_object: "objekt",
		data_type_guid: "globalni jedinstveni identifikator",
		data_type_user: "korisnici",
		data_type_child_component: "podređena komponenta",

		/* Print Dialog */
		print_title: "Ispis",
		print_message: "Ispis: ${0}",
		print_print_button: "Ispis",
		print_clean_margins_button: "Postavi sve na 0",
		print_type: "Tip pisača:",
		print_printer_server_options: "Opcije ispisa poslužitelja",
		print_printer_properties: "Svojstva pisača",
		print_printer_fax_properties: "Svojstva faksa",
		print_printer_name: "Naziv pisača:",
		print_fax_recipient: "Primatelj",
		print_fax_sender: "Pošiljatelj",
		print_copies: "Kopije:",
		print_local_orientation: "Orijentacija",
		print_local_orientation_landscape: "Pejzaž",
		print_local_orientation_portrait: "Portret",
		print_local_margins: "Margine",
		print_local_margins_top: "Vrh",
		print_local_margins_bottom: "Dno",
		print_local_margins_left: "Lijevo",
		print_local_margins_right: "Desno",
		print_printer_server: "Poslužitelj",
		print_printer_local: "Lokalni",
		print_property_class: "Klasa:",
		print_property_routing: "Usmjeravanje:",
		print_property_pagedef: "PageDef:",
		print_property_node: "Čvor:",
		print_property_writer: "Pisac:",
		print_property_formdef: "FormDef:",
		print_property_printerid: "Odredište:",
		print_property_forms: "Obrasci:",
		print_property_faxnotes: "Napomene:",
		print_property_faxcompany: "Poduzeće:",
		print_property_faxnumber: "Broj faksa:",
		print_property_faxname: "Naziv:",
		print_property_faxsendertelnumber: "Broj telefona:",
		print_property_faxcoverpage: "Naslovnica:",
		print_property_faxsubject: "Predmet:",
		print_saveoptions: "Spremi opcije ispisa",
		print_property_bannerpage: "Koristi uvodnu stranicu",
		print_print_with_info_fields: "Ispis s info poljima",
		print_field_from: "Od",
		print_field_to: "Do",
		print_invalid_value_class: "Važeći znakovi su A-Z ili 0-9",
		print_invalid_value_pagedef: "Važeći znakovi su abecedni ili numerički znakovi ili znakovi @, # ili $",
		print_invalid_value_writer: "Važeći znakovi su abecedni ili numerički znakovi ili znakovi @, # ili $",
		print_invalid_value_formdef: "Važeći znakovi su abecedni ili numerički znakovi ili znakovi @, # ili $",
		print_invalid_value_forms: "Važeći znakovi su abecedni ili numerički znakovi ili znakovi @, # ili $",
		print_invalid_value_margin: "Važeći brojevi su između ${0} i ${1}",
		print_status_message: "${0} dokumenata je poslano na ${1} pisač.",

		print_applet_init_error: "Ne može se pokrenuti aplet ispisa.",
		print_applet_init_error_explanation: "Ovaj problem se može dogoditi iz sljedećih razloga: <br/><br/><ul><li>Java Runtime Environment (JRE) nije instaliran na vašoj radnoj stanici.</li><li>Java plug-in nije omogućen u vašem Web pretražitelju.</li><li>JRE verzija na vašoj radnoj stanici nije kompatibilna s IBM Content Navigator verzijom.</li><li>Pojavio se timeout pretražitelja kod čekanja apleta ispisa.</li></ul>",
		print_applet_init_error_userResponse: "Možete izvesti sljedeće korake da biste riješili JRE problem:<br/><br/><ol><li>Provjerite je li JRE instaliran na vašoj radnoj stanici.</li><li>Provjerite je li omogućen Java plug-in u vašem Web pretražitelju.</li><li>Provjerite je li JRE verzija na vašoj radnoj stanici kompatibilna s IBM Content Navigatorom i pokušajte ponovno. Lista podržanih verzija nalazi se u dokumentu <i>Hardverski i softverski preduvjeti za IBM Content Navigator</i> na sjedištu IBM softverske podrške.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Naslovnica",
		daeja_print_selected_documents_title: "Izabrani dokumenti",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Podudaranje sa svim kriterijima pretraživanja",
		match_any_criteria: "Podudaranje s bilo kojim kriterijem pretraživanja",
		include_subfolders_summary: "${0} (uključi podfoldere)",
		browse_button: "Pregled&hellip;",
		search_for: "Traži:",
		object_type_documents: "Dokumenti",
		object_type_folders: "Folderi",
		object_type_documents_folders: "Dokumenti i folderi",
		object_type_web_links: "Web veze",
		object_type_documents_folders_web_links: "Dokumenti, folderi i Web veze",

		/* SelectSearchFolderDialog */
		search_in: "Traži u:",
		include_subfolders: "Uključi podfoldere",

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
		locked_item_icon_title: "Zaključao ${0}",
		checked_out_icon_title: "Odjavio ${0}",
		major_minor_version_icon_title: "Glavna verzija sa sporednim verzijama",
		suspended_icon_title: "Proces rada je odgođen.",
		on_hold_icon_title: "Na čekanju",
		has_notes_icon_title: "Ima napomene",
		record_icon_title: "Deklariran kao slog",
		compound_document_icon_title: "Složeni dokument",
		validateTemplate_icon_title: "Predložak timskog prostora zahtijeva provjeru",
		offlineTemplate_icon_title: "Predložak timskog prostora je offline",
		offlineTeamspace_icon_title: "Timski prostor je offline",
		pending_delete_icon_title: "Timski prostor čeka brisanje",
		delete_error_icon_title: "Timski prostor se nije mogao izbrisati",
		defaultTemplate_icon_title: "Default  predložak timskog prostora",
		teamspace_icon_title: "Timski prostor",
		teamspace_template_icon_title: "Predložak timskog prostora",
		has_bookmark_icon_title: "Ima knjišku oznaku",
		read_only_icon_title: "Samo za čitanje",
		no_results_were_found: "Nisu nađeni rezultati.",
		folder_is_empty: "Folder je prazan.",
		no_checked_out_items: "Nemate odjavljenih stavki.",
		inbasket_is_empty: "Dolazne poruke su prazne.",
		worklist_is_empty: "Radna lista je prazna.",
		tracker_milestone_completed: "Dovršeno",
		stepprocessor_attachments_title: "Sadržaj",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Zaključaj stavke",
		unlock_items: "Otključaj stavke",
		checkin_item: "Prijavi stavku",

		/* Help */
		learn_more: "Saznajte više",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Otvori timski prostora",
		repository_tab_createWorkspace: "Novi timski prostor",
		repository_tab_createWorkspaceTemplate: "Novi predložak timskog prostora",
		repository_tab_DefaultTemplate: "Default",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Ovaj zadatak kopira dokumente.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Nemate povlastice za uređivanje izabranog predloška timskog prostora.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Da li ste sigurni da želite izbrisati ${0} timski prostor? <br><br>Samo dokument koji je spremljen u druge foldere u spremištu ostaje u spremištu. Bilo koji dokumenti koji su spremljeni samo u timski prostor će biti izbrisani.",
		teamspaceDecommissionLabel: "Izbriši:",
		teamspaceDecommissionDescription: "Brisanje timskog prostora će ukloniti ovaj timski prostor s poslužitelja: Označite način na koji se rukuje proizvodima timskog prostora.",
		teamspaceDecommissionOptions: "Izbriši opcije timskog prostora",
		teamspaceDecommissionDeleteAll: "Izbriši sve proizvode timskog prostora",
		teamspaceDecommissionReFileAll: "Presloži cijeli sadržaj timskog prostora",
		teamspaceDecommissionReFileDestination: "Premjesti u:",
		teamspaceDecommissionReFileIn: "Presloži u",
		teamspaceDecommissionTaskName: "Zadatak brisanja timskog prostora",
		teamspaceDecommissionTaskDescription: "Ovaj zadatak briše timski prostor iz spremišta.",
		teamspaceDecommissionDeletionStarted: "Timski prostor je raspoređen za brisanje",
		teamspaceDecommissionDeletionConnectionFailed: "Zadatak brisanja timskog prostora nije se mogao izvesti jer se nije mogao povezati sa spremištem. Osigurajte ispravne vjerodajnice administratora spremišta.",

		teamspace_edit_properties_notsupported: "Svojstva timskih prostora možete urediti samo u pogledu Timski prostori.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Timski prostor je offline i mogu ga otvoriti samo vlasnici timskog prostora",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Folder:",
		workspace_validation_ets: "Sljedeći predlošci unosa nisu dostupni u ovom spremištu i uklonjeni su iz liste izabranih predložaka unosa:",
		workspace_validation_classes: "Sljedeće klase nisu dostupne u ovom spremištu i uklonjene su iz liste izabranih klasa:",
		workspace_validation_searches: "Sljedeće pretrage nisu dostupne u ovom spremištu i uklonjene su iz liste izabranih pretraga:",
		workspace_validation_docs_folders: "Sljedeći dokumenti i folderi nisu dostupni u ovom spremištu i uklonjeni su iz liste izabranih stavki:",
		workspace_change_template_confirmation_question: "Ako izaberete drugi predložak, sve vaše promjene će se izgubiti. Želite li nastaviti?\n",
		workspace_delete_item_confirmation_question: "Želite li ukloniti stavku ${0}?\n",
		workspace_delete_role_confirmation_question: "Želite li ukloniti ulogu ${0}?\n",
		workspace_delete_confirmation_question: "Ako izbrišete timski prostor, briše se samo spremnik timskog prostora. Folderi i dokumenti u timskom prostoru ostaju u spremištu i možete ih pronaći pretraživanjem. Za brisanje sadržaja timskog prostora, izbrišite prvo stavke u timskom prostoru i tada izbrišite timski prostor.<br><br>Želite li izbrisati ${0} timski prostor?",
		workspacebuilder_instance_template_name_header: "Naziv predloška timskog prostora",
		workspacebuilder_instance_template_description_header: "Opis",

		workspacebuilder_template_tooltip_name: "Naziv predloška ne smije sadržavati bilo koji od sljedećih znakova * \\ / : ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Naziv timskog prostora ne smije sadržavati niti jedan od sljedećih znakova: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Upišite opis koji će omogućiti korisnicima da naprave ispravan izbor iz liste predložaka. Na primjer, možete uključiti informacije kojim je korisnicima namijenjen ili zašto se koristi predložak.",
		workspacebuilder_instance_tooltip_description: "Upišite opis koji će omogućiti korisnicima da razlikuju ovaj timski prostor od drugih timskih prostora.",

		workspacebuilder_template_edit_properties_pane: "Uređivanje predloška timskog prostora",
		workspacebuilder_instance_properties_pane: "Definiranje timskog prostora",
		workspacebuilder_template_properties_pane: "Definiranje predloška timskog prostora",

		workspacebuilder_instance_security_pane: "Postavi sigurnost timskog prostora",
		workspacebuilder_template_security_pane: "Postavi sigurnost predloška",

		workspacebuilder_layout_pane: "Izbor izgleda",
		workspacebuilder_search_templates_pane: "Izbor pretraživanja",
		workspacebuilder_document_folders_pane: "Uključi foldere i dokumente",
		workspacebuilder_doctypes_entryTemplates_pane: "Izbor klasa ili predložaka unosa",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Izbor klasa",
		workspacebuilder_security: "Sigurnost timskog prostora",

		workspacebuilder_roles_pane: "Izbor uloga",
		workspacebuilder_security: "Sigurnost",

		workspacebuilder_properties_templates: "Dostupni predlošci:",
		workspacebuilder_available_templates: "Dostupna pretraživanja:",
		workspacebuilder_selected_templates: "Izabrana pretraživanja:",
		workspacebuilder_templates_name: "Naziv pretraživanja",

		workspacebuilder_available_entryTemplates: "Dostupni predlošci unosa:",
		workspacebuilder_selected_entryTemplates: "Izabrani predlošci unosa:",

		workspacebuilder_item_classes: "Dostupne klase:",
		workspacebuilder_item_classes_selected: "Izabrane klase:",
		workspacebuilder_properties_select_template: "Izaberite predložak koji se koristi za ovaj timski prostor.",
		workspacebuilder_template_properties: "Definiranje predloška timskog prostora",
		workspacebuilder_instance_properties: "Definiranje timskog prostora",
		workspacebuilder_template_introText: "Navedite zajedničke komponente koje želite uključiti u svaki timski prostor koji je kreiran iz ovog predloška korištenjem izbora u navigaciji. Kad ste gotovi, kliknite <b>Završi</b> da bi predložak postao dostupan drugim korisnicima, koji ga mogu koristiti za kreiranje novih timskih prostora.",
		workspacebuilder_instance_introText: "Timovi koriste timske prostore za dijeljenje i rad s određenim skupovima dokumenata. Upišite smisleni naziv i opis za ovaj timski prostor da omogućite korisnicima da razlikuju ovaj timski prostor od drugih timskih prostora. Možete prilagoditi timski prostor uključivanjem dodatnih pretraživanja, klasa ili predložaka unosa, dokumenata i foldera.",

		workspacebuilder_template_search_template_introText: "Navedite default pretraživanja koja želite uključiti u svaki timski prostor koji je kreiran iz ovog predloška. Ako nema izabranih pretraživanja, korisnici timskog prostora vidjet će sva pretraživanja do kojih mogu pristupiti. Uz odgovarajuće dozvole, korisnici mogu dijeliti i dodavati pretraživanja u timski prostor.",
		workspacebuilder_instance_search_template_introText: "Uključite pretraživanja koje će omogućiti korisnicima timskog prostora da efikasnije dovršavaju zadatke. Ako se ne uključe pretraživanja, korisnici timskog prostora vidjet će samo pretraživanja za koja posjeduju dozvolu. Uz odgovarajuće dozvole, korisnici mogu dodavati i dijeliti pretraživanja u timskom prostoru.",

		workspacebuilder_template_roles_introText: "Korisnici timskog prostora su dodijeljeni ulogama. Uloge specificiraju zadatke koje korisnici smiju izvoditi. Kliknite na ikonu pored svake uloge da bi vidjeli dozvoljene zadatke. Izaberite uloge koje su prikladne za timski prostora.",
		workspacebuilder_template_roles_modify_introText: "Možete promijeniti dozvole koje su pridružene svakoj ulozi u ovom timskom prostoru. Trebate obavijestiti članove timskog prostora kad se njihove dozvole promijene.",

		workspacebuilder_template_roles_header_name: "Naziv uloge",

		workspacebuilder_template_folders_introText: "Navedite default dokumente koje želite uključiti u svaki timski prostora koji je kreiran iz ovog predloška. Možete dodati dokumente kao veze ili kopije. Koristite veze da pokažete na dokumente za koje ne želite višestruke kopije, kao politike ili procedure. Kreirajte kopije dokumenata koje će korisnici promijeniti, kao predlošci i obrasci.",
		workspacebuilder_instance_folders_introText: "Navedite default dokumente i foldere koje želite uključiti u timski prostor. Možete dodati dokumente kao veze ili kopije. Koristite veze da pokažete na dokumente za koje ne želite višestruke kopije, kao politike ili procedure. Kreirajte kopije dokumenata koje će korisnici promijeniti, kao predlošci i obrasci.",

		workspacebuilder_template_roles_introText: "Navedite uloge koje će se uključiti u svaki timski prostor koji je kreiran iz ovog predloška. Možete također kreirati nove uloge, koje možete koristiti kad kreirate druge predloške timskog prostora.",
		workspacebuilder_instance_users_introText: "U timskom prostoru, svakom korisniku je dodijeljena jedna ili više uloga koje navode zadatke koje korisnik može dovršiti. Dodajte korisnike timskom prostoru i dodijelite uloge korisnicima.",

		workspacebuilder_instance_navigation_pane_title: "Graditelj timskog prostora",
		workspacebuilder_template_navigation_pane_title: "Graditelj predloška timskog prostora",

		workspacebuilder_roles_roles_nopermissions: "Nema izabranih dozvola za ulogu {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Izabrane uloge:",
		workspacebuilder_roles_available_roles: "Dostupne uloge:",
		workspacebuilder_roles_privilege_header: "Dozvola",
		workspacebuilder_roles_select_role: "Izbor uloge",
		workspacebuilder_roles_select_permission: "Izbor dozvole",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Uloga s nazivom {0} već postoji. Morate navesti jedinstveni naziv uloge. ",
		workspacebuilder_roles_edit_dialog_role_name: "Naziv uloge:",
		workspacebuilder_roles_edit_dialog_role_description: "Opis uloge:",
		workspacebuilder_roles_edit_dialog_title_new: "Nova uloga",
		workspacebuilder_roles_edit_dialog_title_edit: "Uređivanje uloge",

		workspacebuilder_roles_privileges_header: "Dozvole za ulogu {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dozvole dokumenta:",
		workspacebuilder_roles_priv_group_folder: "Dozvole foldera:",
		workspacebuilder_roles_priv_group_teamspace: "Dozvole timskog prostora:",
		workspacebuilder_roles_priv_group_item: "Dozvole za dokumente i foldere:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Upravljanje dozvolama",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Korisnici s ovom dozvolom mogu upravljati pristupom dokumentima i folderima u timskom prostoru. Ova  dozvola uključuje dopuštanje drugim korisnicima da brišu, uređuju svojstva i kreiraju podfoldere itd.",

		workspacebuilder_roles_priv_deleteItems: "Izbriši",
		workspacebuilder_roles_plbl_deleteItems: "Korisnici s ovom dozvolom mogu brisati dokumente i foldere u timskom prostoru.",

		workspacebuilder_roles_priv_createItems: "Kreiranje",
		workspacebuilder_roles_plbl_createItems: "Korisnici s ovom dozvolom mogu kreirati dokumente i foldere u timskom prostoru.",

		workspacebuilder_roles_priv_viewItemProperties: "Pregled svojstava",
		workspacebuilder_roles_plbl_viewItemProperties: "Korisnici s ovom dozvolom mogu gledati svojstva dokumenata i foldera u timskom prostoru, uključujući sistemska svojstva.",

		workspacebuilder_roles_priv_modifyItemProperties: "Uređivanje svojstava",
		workspacebuilder_roles_plbl_modifyItemProperties: "Korisnici s ovom dozvolom mogu uređivati svojstva dokumenata i foldera u timskom prostoru.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Upravljanje dozvolama foldera",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Korisnici s ovom dozvolom mogu upravljati pristupom na foldere u timskom prostoru. Ova dozvola uključuje dozvoljavanje drugim korisnicima da brišu foldere, uređuju svojstva foldera, kreirati podfoldere i tako dalje.",

		workspacebuilder_roles_priv_deleteFolders: "Brisanje foldera",
		workspacebuilder_roles_plbl_deleteFolders: "Korisnici s ovom dozvolom mogu brisati foldere u timskom prostoru.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Uređivanje svojstava foldera",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Korisnici s ovom dozvolom mogu uređivati svojstva foldera u timskom prostoru.",

		workspacebuilder_roles_priv_createSubfolders: "Kreiranje podfoldera",
		workspacebuilder_roles_plbl_createSubfolders: "Korisnici s ovom dozvolom mogu kreirati foldere u timskom prostoru.",

		workspacebuilder_roles_priv_fileInFolders: "Dodavanje u foldere",
		workspacebuilder_roles_plbl_fileInFolders: "Korisnici s ovom dozvolom mogu dodavati vezu iz foldera u timskom prostoru u dokumente.",

		workspacebuilder_roles_priv_viewFolderProperties: "Pregled svojstava foldera",
		workspacebuilder_roles_plbl_viewFolderProperties: "Korisnici s ovom dozvolom mogu gledati svojstva foldera u timskom prostoru, uključujući sistemska svojstva.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Upravljanje dozvolama dokumenta",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Korisnici s ovom dozvolom mogu upravljati pristupom na dokumente u timskom prostoru. Ova dozvola uključuje dopuštanje drugim korisnicima brisanje dokumenata, uređivanje svojstava dokumenata i tako dalje.",

		workspacebuilder_roles_priv_deleteDocuments: "Brisanje dokumenata",
		workspacebuilder_roles_plbl_deleteDocuments: "Korisnici s ovom dozvolom mogu brisati dokumente u timskom prostoru.",

		workspacebuilder_roles_priv_promoteVersions: "Promicanje verzija",
		workspacebuilder_roles_plbl_promoteVersions: "Korisnici s ovom dozvolom mogu dodijeliti novi broj verzije dokumentima u timskom prostoru.",

		workspacebuilder_roles_priv_modifyContent: "Uređivanje dokumenata",
		workspacebuilder_roles_plbl_modifyContent: "Korisnici s ovom dozvolom mogu uređivati sadržaj dokumenata u timskom prostoru.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Uređivanje svojstava dokumenta",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Korisnici s ovom dozvolom mogu uređivati svojstva dokumenata u timskom prostoru.",

		workspacebuilder_roles_priv_viewContent: "Pregled dokumenata",
		workspacebuilder_roles_plbl_viewContent: "Korisnici s ovom dozvolom mogu gledati dokumente u timskom prostoru.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Pregled svojstava dokumenta",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Korisnici s ovom dozvolom mogu gledati svojstva dokumenata u timskom prostoru, uključujući sistemska svojstva.",

		workspacebuilder_roles_priv_addNewSearches: "Dodavanje pretraživanja",
		workspacebuilder_roles_plbl_addNewSearches: "Korisnici s ovom dozvolom mogu dodati pretraživanja u timski prostor. Po defaultu, pretraživanje nije dostupno drugim korisnicima.",

		workspacebuilder_roles_priv_createNewSearches: "Kreiranje pretraživanja",
		workspacebuilder_roles_plbl_createNewSearches: "Korisnici s ovom dozvolom mogu kreirati nova pretraživanja, ali ne mogu spremati pretraživanja. Ako korisnici nemaju ovu dozvolu, oni ne mogu dodati dokumente koji su već u spremištu timskog prostora.",

		workspacebuilder_roles_priv_shareSearches: "Dijeljenje pretraživanja",
		workspacebuilder_roles_plbl_shareSearches: "Korisnici s ovom dozvolom mogu dijeliti pretraživanja koja kreiraju s drugim korisnicima timskog prostora.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Upravljanje klasama ili predlošcima unosa",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Korisnici s ovom dozvolom mogu dodati i ukloniti klase ili predloške unosa iz timskog prostora.",

		workspacebuilder_roles_priv_addRemoveClasses: "Upravljanje klasama",
		workspacebuilder_roles_plbl_addRemoveClasses: "Korisnici s ovom dozvolom mogu dodati i ukloniti klase iz timskog prostora.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Upravljanje korisnicima timskog prostora",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Korisnici s ovom dozvolom mogu dodati i ukloniti korisnike i grupe iz timskog prostora. Dodatno, mogu upravljati dodjelom korisnika ulogama.",

		workspacebuilder_roles_priv_modifyRoles: "Promjena uloga",
		workspacebuilder_roles_plbl_modifyRoles: "Vlasnici s ovom dozvolom mogu promijeniti dozvole uloga za timski prostor. Ova dozvola je dostupna samo za vlasnike.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Izbor korisnika",
		workspacebuilder_users_add_users_and_groups_button: "Dodaj korisnike i grupe...",
		workspacebuilder_users_users_or_group_header: "Korisnik i grupa",
		workspacebuilder_users_roles_header: "Uloge",

		workspacebuilder_users_role_header: "Uloga",
		workspacebuilder_users_role_no_permissions: "Ova uloga nema dozvola",
		workspacebuilder_users_available_roles_label: "Dostupne uloge:",
		workspacebuilder_users_selected_users_and_groups_label: "Izabrani korisnici i grupe",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Timski prostor se ne može spremiti. Morate navesti barem jednog vlasnika za ovaj timski prostora.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Timski prostor se ne može spremiti. Svim korisnicima se mora dodijeliti uloga.",
		// end of select users

		workspacebuilder_search_templates: "Izbor pretraživanja",
		workspacebuilder_search_add: "Dodaj pretraživanje",
		workspacebuilder_properties_workspaceName: "Naziv timskog prostora:",
		workspacebuilder_properties_templateName: "Naziv predloška:",
		workspacebuilder_properties_workspaceDescription: "Opis timskog prostora:",
		workspacebuilder_properties_templateDescription: "Opis predloška:",
		workspacebuilder_properties_workspaceTemplate: "Izabrani predložak:",
		workspacebuilder_properties_security: "Podijeli predložak s:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Premjesti iz timskog prostora:",
		moveTeamspaceDocuments_security: "Podijeli dokument s:",
		moveTeamspaceDocuments_security_change: "Navedite prilagođenu sigurnost za izbrane stavke",
		moveTeamspaceDocuments_item_type_level: "Ne možete izabrati nadjačavanje sigurnosti izabranih stavki jer je klasa izabrane stavke konfigurirana za korištenje samo sigurnosti na razini klase",
		moveTeamspaceDocuments_security_inherit: "Naslijeđena sigurnost iz odredišnog foldera",
		moveTeamspaceDocuments_file_info_text: "Stavke možete premjestiti iz jednog timskog prostora u drugi timski prostor ili folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Nemate odgovarajuće dozvole za premještanje stavki u izabrani folder.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Nemate odgovarajuće dozvole za premještanje stavki iz timskog prostora.",
		moveTeamspaceDocuments_move_mixed_items: "Ne možete nadjačati sigurnosti izabranih stavki. Neke od stavki nisu upravljene od timskog prostora. Možete pregaziti samo sigurnost stavki koje su upravljane od timskog prostora.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Morate navesti naziv timskog prostora.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Morate navesti naziv za predložak timskog prostora.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Naziv timskog prostora ne smije sadržavati niti jedan od sljedećih znakova: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Naziv predloška ne smije sadržavati bilo koji od sljedećih znakova * \\ / : ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Veza na dokument",
		workspacebuilder_folders_makeDocCopy: "Kopiraj dokument",
		workspacebuilder_folders_newfolder: "Novi folder",
		workspacebuilder_folders_local_drive: "Iz lokalnog direktorija",
		workspacebuilder_folders_from_repo: "Iz spremišta",
		workspacebuilder_folders_add_doc: "Dodaj dokument",
		workspacebuilder_folders_grid_name: "Naziv",
		workspacebuilder_folders_props: "Svojstva",
		workspacebuilder_folders_remove: "Ukloni",
		workspacebuilder_folders_delete: "Izbriši",
		workspacebuilder_folders_adddoc_local: "Dodaj dokument s lokalnog pogona",
		workspacebuilder_folders_adddoc_repo: "Dodaj dokument sa spremišta",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Navedeni naziv foldera već postoji. Navedite drukčiji naziv foldera.",

		workspacebuilder_classes_title: "Izbor klasa ili predložaka unosa",
		workspacebuilder_classes_title_cm: "Izbor klasa",
		workspacebuilder_classes_template_introText: "Navedite hoće li timski prostori koji se kreiraju iz ovog predloška koristiti klase ili predloške dokumenata za dodavanje dokumenata spremištu. Ako nema izabranih klasa, timski prostori vidjet će sve klase za koje posjeduju pristup.  Korisnik može mijenjati listu klasa ili predložaka unosa u timskom prostoru ako ima odgovarajuće dozvole.",
		workspacebuilder_classes_template_introText_cm: "Izaberite klase koje korisnici mogu koristiti za dodavanje dokumenata spremištu. Ako nema izabranih klasa, korisnici timskog prostora vidjet će sve klase do kojih mogu pristupiti. Korisnici mogu mijenjati listu klasa u timskom prostoru ako imaju odgovarajuće dozvole.",
		workspacebuilder_classes_instance_introText: "Izaberite klase ili predloške unosa koje korisnici mogu koristiti za dodavanje dokumenata spremištu. Ako nema izabranih klasa, korisnici timskog prostora vidjet će sve klase za koje imaju dozvolu. Korisnici mogu mijenjati listu klasa ili predložaka unosa u timskom prostoru ako imaju odgovarajuće dozvole.",
		workspacebuilder_classes_instance_introText_cm: "Izaberite klase koje korisnici mogu koristiti za dodavanje dokumenata spremištu. Ako nema izabranih klasa, korisnici timskog prostora vidjet će sve klase za koje imaju dozvolu. Korisnici mogu mijenjati listu klasa u timskom prostoru ako imaju odgovarajuće dozvole.",
		workspacebuilder_classes_selection: "Izbor klasa:",
		workspacebuilder_classes_list: "Dostupne klase:",
		workspacebuilder_classes_columns_default: "Default",
		workspacebuilder_classes_columns_className: "Naziv klase",
		workspacebuilder_classes_type_classes: "Koristi klase za dodavanje dokumenata",
		workspacebuilder_classes_type_classes_tooltip: "Klase uključuju pridružena svojstva, tako da se dokumenti mogu pronaći za naknadnu upotrebu.",
		workspacebuilder_classes_type_entryTemplates: "Koristi predloške unosa za dodavanje dokumenata",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Predložak unosa osigurava konzistentnost navedenih informacija u svakom dokumentu i koristi preddefinirane vrijednosti.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Naziv predloška unosa",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Opis",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Morate dodati najmanje jedan predložak unosa timskom prostoru.",

		workspacebuilder_classes_new: "Nova klasa",
		workspacebuilder_classes_add: "Dodaj klasu",
		workspacebuilder_entryTemplate_add: "Dodaj predložak unosa",
		workspacebuilder_add_list: "Dodaj",
		workspacebuilder_makeDefault_list: "Postavi kao default",
		workspacebuilder_removeDefault_list: "Ukloni default",

		workspacebuilder_roles_title: "Izbor uloga",
		workspacebuilder_roles_title_modify: "Promijeni uloge",

		workspacebuilder_selection_moveup: "Pomakni gore",
		workspacebuilder_selection_movedown: "Pomakni dolje",
		workspacebuilder_selection_remove: "Ukloni",
		workspacebuilder_selection_add: "Dodaj",
		workspacebuilder_selection_create_new_search: "Novo pretraživanje...",
		workspacebuilder_selection_create_new_role: "Nova uloga...",
		workspacebuilder_selection_make_role_available: "Učini dostupnim",
		workspacebuilder_selection_make_role_available_tooltip: "Podijeli izabranu ulogu s ostalim predlošcima. Morate dodijeliti najmanje jednu dozvolu ulozi da biste ju mogli dijeliti.",

		workspacebuilder_navigation_next: "Sljedeće",
		workspacebuilder_navigation_finish: "Završetak",
		workspacebuilder_navigation_validate: "Provjeri",
		workspacebuilder_navigation_previous: "Prethodno",
		workspacebuilder_navigation_cancel: "Opoziv",
		workspacebuilder_navigation_customize: "Prilagodi",

		workspacebuilder_search_dialog_title: "Traži",
		workspacebuilder_dialog_close: "Zatvori",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Dostupnost predloška:",
		workspace_properties_templateState_tooltip: "Učinite predložak nedostupnim da spriječite da korisnici kreiraju timske prostore koji koriste ovaj predložak.",
		workspace_properties_dialog_title: "Svojstva predloška",
		workspace_properties_online_radio_option_label: "Učini dostupnim",
		workspace_properties_offline_radio_option_label: "Učini nedostupnim",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Želite li opozvati bez spremanja promjena?",
		workspacebuilder_cancel_confirmation_button: "Da",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Sve nevažeće stavke će se ukloniti iz predloška i predložak je dostupna korisnicima.  Želite li provjeriti valjanost ovog predloška timskog prostora?",
		workspacebuilder_validate_confirmation_button: "Da",
		workspacebuilder_validate_confirmation_title: "Provjeri",

		/* Entry templates builder */
		entry_templates: "Upravitelj predložaka unosa",
		no_entry_templates_were_found: "Ne postoje predlošci unosa",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filter",

		/* Roleselector widget */
		role_selector_name: "Uloge:",

		/* User Group picker widget */
		directory_label: "Direktorij:",
		scope_label: "Traži:",
		name_starts_with_label: "Naziv počinje s",
		name_contains_label: "Naziv sadrži",
		display_name_contains_label: "Naziv prikaza sadrži",
		starts_with_label: "Počinje s:",
		available_label: "Dostupno:",
		available_heading: "Dostupno",
		selected_label: "Izabrano:",
		selected_heading: "Izabrano",
		available_repositories_label: "Raspoloživa spremišta",
		selected_repositories_label: "Izabrana spremišta",
		default_repository: "Default spremište:",
		default_repository_placeholder: "Izaberite spremište",
		default_role_placeholder: "Izaberite ulogu",
		menu_label_placeholder: "Izaberite ili unesite oznaku",
		default_repository_hover: "Navedite spremište koje je izabrano po defaultu kad se korisnici prijave na Web klijent s ovog desktopa.<br><br><b>Važno:</b> Morate dodati spremišta u izabranu listu spremišta desktopa prije nego što navedete default spremište.",
		default_repository_workflow_hover: "<b>Zapamtite:</b> Možete konfigurirati aplikacijske prostore samo za spremišta koja su konfigurirana za ovaj desktop.",
		remove_label: "Ukloni",
		users_label: "Korisnici",
		groups_label: "Grupe",
		user_or_group_name_label: "Ime korisnika ili grupe:",
		user_or_group_name_hover: "Unesite ime korisnika ili grupe koje je važeće u spremištu.  Ime nije provjereno.",
		user: "Korisnik",
		group: "Grupa",
		name: "Naziv:",
		displayName: "Naziv prikaza",
		display_name: "Naziv prikaza:",
		shortName: "Skraćeni naziv:",
		distinguishedName: "Razlikovni naziv:",
		search_tooltip: "Traži",
		add_tooltip: "Dodaj",
		add_selected_tooltip: "Dodaj u listu izabranih",
		remove_tooltip: "Ukloni",
		remove_selected_tooltip: "Ukloni iz liste izabranih",
		add_to_selected_tooltip: "Dodaj",
		remove_from_selected_tooltip: "Ukloni",
		move_up_selected_tooltip: "Pomakni gore",
		move_down_selected_tooltip: "Pomakni dolje",
		advanced_search_options_tooltip: "Napredne postavke",
		move_right_selected_tooltip: "Pomakni se u podizbornik",
		move_left_selected_tooltip: "Pomakni se iz podizbornika",
		add_separator: "Dodaj odjelitelj",
		menu_item_label: "Oznaka stavke izbornika:",
		add_menu_label: "Dodaj podizbornik",
		menu_label: "Oznaka podizbornika:",
		menu_label_info: "<b>Važno:</b> Morate dodati barem jednu stavku izbornika ovom podizborniku prije nego spremite ovaj izbornik.",
		menu_dropdown_label: "Oznaka padajućeg gumba:",
		menu_dropdown_label_info: "<b>Važno:</b> Ovom padajućem gumbu morate dodatni najmanje jednu stavku izbornika prije nego možete spremiti ovu traku s alatima.",
		no_item_found: "Nisu nađeni rezultati.",
		me: "Ja",
		anyone: "Bilo tko",
		specific_users: "Određeni korisnici",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Pretraživanje je vratilo više od {0} rezultata. Promijenite kriterije da suzite pretraživanje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Rezultati pretraživanja sadrže stavke koje su već izabrane. Te stavke se neće prikazati u rezultatima pretraživanja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Vraćeno je više od {0} rezultata. Koristite filter da suzite rezultate",

		user_already_selected: "Navedeni korisnik je već izabran.  Navedite drukčijeg korisnika.",
		group_already_selected: "Navedena grupa je već izabrana.  Navedite drukčiju grupu.",
		user_cannot_select_self: "Ne možete dodati samog sebe. Navedite drukčijeg korisnika.",

		/* Select User Group dialog */
		select_user_group_add_label: "Dodaj",
		select_user_group_cancel_label: "Opoziv",
		add_users_groups_label: "Dodaj korisnike i grupe",
		add_user_group_label: "Dodaj korisnika i grupu",
		add_users_label: "Dodaj korisnike",
		add_user_label: "Dodaj korisnika",
		add_label: "Dodaj:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Sljedeći dokumenti sadrže nespremljene promjene primjedbi:",
		viewer_confirm_to_proceed: "Želite li nastaviti i izgubiti promjene?",
		viewer_warn_has_changes: "Vaše nespremljene promjene će se odbaciti.",
		viewer_warn_is_printing: "Ispis koji je u toku se možda neće dovršiti.",
		viewer_warn_confirm_exit: "Želite li izaći?",
		viewer_prompt_save_changes: "Sljedeći dokument ima nespremljene promjene bilješki koje će biti izgubljene:<br>${0}<br><br>Da li želite spremiti promjene?",
		viewer_prompt_mergesplit_changes: "Sljedeći dokumenti sadrže nespremljene promjene:<br>${0}<br><br>Želite li nastaviti i izgubiti promjene?",
		viewer_prompt_mergesplit_tab_changes: "Sljedeći dokumenti sadrže nespremljene promjene:<br>${0}<br><br>Želite li nastaviti i izgubiti promjene?",
		viewer_new_item_name: "Novi dokument",
		viewer_top_frame: "Okvir na vrhu:",
		viewer_bottom_frame: "Okvir na dnu:",
		viewer_left_frame: "Lijevi okvir:",
		viewer_right_frame: "Desni okvir:",
		viewer_viewer_frame: "Okvir preglednika:",
		viewer_properties_frame: "Okvir svojstava:",
		viewer_comment_frame: "Okvir komentara:",
		viewer_mergesplit_on: "Pogled",
		viewer_mergesplit_off: "Spoji i razdvoji",
		viewer_mergesplit_context_menu_move: "Premjesti",
		viewer_mergesplit_context_menu_rename: "Preimenuj",
		viewer_mergesplit_context_menu_delete: "Izbriši",
		//move to new window
		viewer_move_to_new_window:"Premjesti u novi prozor",
		viewer_continue:"Odbaci promjene",
		viewer_return_to_original_window:"Povratak na početni prozor",
		viewer_switch_window:"Zamijeni prozor",
		viewer_prompt_lost_changes:"Dokument ${0} je trenutno otvoren u drugom prozoru. Taj dokument ima nespremljenih promjena.<br><br>Želite li se prebaciti na taj prozor da spremite promjene ili želite odbaciti promjene i otvoriti dokument u ovom prozoru?",
		viewer_mergesplit_fallback_info: "Akciju Spoji i razdvoji možete izvesti samo na dokumentima koji su u istom spremištu.",
		viewer_tabbed_layout: "Pregled u obliku kartica",
		viewer_tabbed_layout_highcontrast: "Kartice",
		viewer_split_vertical_layout: "Podijeli okvire na gornji i donji",
		viewer_split_vertical_layout_highcontrast: "Gornji i donji",
		viewer_split_horizontal_layout: "Podijeli okvire na lijevi i desni",
		viewer_split_horizontal_layout_highcontrast: "Lijevi i desni",
		viewer_add_vertical_layout: "Nova kartica na dnu",
		viewer_add_vertical_layout_highcontrast: "Donja kartica",
		viewer_add_horizontal_layout: "Nova kartica desno",
		viewer_add_horizontal_layout_highcontrast: "Desna kartica",
		viewer_add_horizontal_layout_rtl: "Nova kartica lijevo",
		viewer_add_horizontal_layout_rtl_highcontrast: "Lijeva kartica",
		viewer_split_properties_layout: "Pregled svojstava",
		viewer_split_comment_layout: "Pregled komentara",
		viewer_split_notelog_layout: "Pregled napomena",
		viewer_window_title: "${0} preglednik",
		viewer_next_hit: "Pogledaj sljedeći dokument u listi",
		viewer_prev_hit: "Pogledaj prethodni dokument u listi",
		viewer_confrim_more_search_results: "Rezultati pretraživanja ne sadrže više dokumenata koji se mogu pogledati. Želite li dohvatiti još rezultata pretraživanja?",
		viewer_confirm_get_next_page: "Lista rezultata ne sadrže više stavki koje se mogu pogledati. Želite li dohvatiti još rezultata pretraživanja?",
		viewer_confirm_get_next_item: "Lista rezultata sadrži još stavki koje se mogu pogledati. Želite li pogledati sljedeću stavku?",
		viewer_fn_annotation_tooltip: " Kreirao: ${0}, Kreirano na: ${1}",
		viewer_box_note_limitation: "Box napomene možete otvoriti i gledati samo u posebnom prozoru.",
		viewer_click_to_open_box_note: "Kliknite ovdje za otvaranje Box napomene.",
		viewer_box_view_expiring: "Maksimalno vrijeme koliko možete gledati vaš Box dokument je 60 minuta. Vaša trenutna sesija će isteći za ${0} minuta. Ako želite nastaviti rad na dokumentu, morate ga sada ponovno učitati. Da li želite ponovno učitati dokument?",
		viewer_add_dialog_save_as_type: "Spremi kao tip:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Sukob odjave",
		viewer_checkout_conflict: "Dokument je odjavio drugi korisnik.",
		viewer_checkout_confirm: "Dostupna je novija verzija dokumenta. Želite li nastaviti odjavljivanje dokumenta ili učitati noviju verziju u preglednik? Ako odaberete ponovno učitavanje u preglednik, nespremljene promjene će biti izgubljene.",
		viewer_checkout_continue: "Nastavi odjavu",
		viewer_checkout_reload: "Ponovno učitaj",
		viewer_status_building: "Izgradnja dokumenta...",
		viewer_status_adding: "Dodavanje dokumenta...",
		viewer_status_checking_in: "Prijava dokumenta...",

		/* Class Selector Widget */
		include_subclasses_label: "Uključi podklase",
		include_subclasses_label2: "Također traži u podklasama",
		include_subclasses_note: "(Uključujući podklase)",
		available_classes_col_header: "Dostupne klase",
		single_class_label: "Traži u jednoj klasi",
		multiple_classes_label: "Traži u više klasa",
		multiple_classes_hover_help: "Izaberite ovu opciju za traženje u više od jedne klase. Klase mogu biti nadređene klase ili podklase. Ako izaberete ovu opciju, vidjet ćete samo svojstva i vrijednosti koje su zajedničke za izabrane klase.",
		selected_classes_col_header: "Izabrane klase",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Uključujući podfoldere)",
		favorites_pseudo_node: "\\Favorites\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Morate izabrati folder u spremištu za dodavanje dokumenta.",
		no_permission_add_folder: "Nemate odgovarajuće dozvole za dodavanje foldera ovom folderu.",
		no_permission_add_document: "Nemate odgovarajuće dozvole za dodavanje dokumenata ovom folderu.",
		document_already_in_folder: "Dokument je već u ovom folderu.",
		cant_move_folder_onto_parent: "Folder je već u ovom folderu.",
		cant_move_folder_onto_self: "Ne možete premjestiti folder u samog sebe ili u njegov podfolder.",

		/* Workflow Widgets */
		process_application_space: "Aplikacijski prostor procesa",
		process_role: "Uloga procesa",
		process_inbasket: "Dolazne poruke procesa",
		process_worklist: "Radna lista",
		process_step_processor: "Radna stavka procesa",
		process_tracker: "Prati radnu stavku",
		process_info_subject: "Tema",
		process_info_stepname: "Korak",
		process_info_is_locked: "Zaključano",
		process_info_no_access: "Nema pristupa",
		process_info_received_on: "Primljeno u",
		process_info_overdue: "Zakašnjelo",
		process_info_reminder_sent: "Podsjetnik poslan",
		process_info_locked_by_user: "Zaključao",
		process_work_object_number: "Broj radnog objekta",
		process_deadline: "Datum dospijeća:",
		process_launchedby: "Pokrenuo:",
		process_receivedon: "Primljeno u:",
		process_step: "Korak:",
		process_properties: "Svojstva",
		process_attachments: "Priloge",
		process_attachments_select: "Izaberi prilog",
		process_finish_button_label: "Zaustavi praćenje",
		process_tracker_history: "Povijest",
		process_tracker_milestones: "Miljokazi",
		process_tracker_milestone: "Miljokaz",
		process_tracker_milestone_level: "Razina",
		process_tracker_milestones_empty: "Nema ključnih točaka za prikaz.",
		process_tracker_level_selector_label: "Pokaži razine ključnih točaka do:",
		process_tracker_map_selector_label: "Filtriraj mapom:",
		process_tracker_message: "Poruka",
		process_tracker_datereached: "Dosegnut datum",
		process_tracker_stepname: "Korak",
		process_tracker_cycle: "Ciklus",
		process_tracker_review_cycle: "Ciklus pregleda",
		process_tracker_participant: "Sudionik",
		process_tracker_completed: "Dovršeno",
		process_tracker_response: "Odgovor",
		process_tracker_comments: "Komentari",
		process_tracker_delete_confirmation: "Želite li prestati pratiti sljedeći proces rada: ${0}?",
		process_tracker_history_allmaps: "Sve mape",
		process_tracker_history_workflow: "Proces rada",
		process_tracker_history_terminate: "Završi",
		process_tracker_history_malfunction: "Nepravilnost u radu",
		process_filter_label: "Filter",
		process_no_filter_summary: "Nisu primijenjeni filteri",
		process_filter_summary: "${0} primijenjeno",
		process_filter_reset_tooltip: "Reset čisti filter i osvježi dolazne poruke.",
		process_attachments_add_folder: "Dodaj folder",
		process_attachments_add_doc: "Dodaj dokument",
		process_complete_button_label: "Dovršeno",
		process_save_button_label: "Spremi",
		process_launch_button_label: "Pokreni proces rada",
		process_open_button_label: "Otvori",
		process_movetoinbox_button_label: "Premjesti u dolazne poruke",
		process_return_button_label: "Vrati",
		process_return_to_sender_tooltip: "Vrati radnu stavku u početne dolazne poruke",
		process_move_to_inbasket_tooltip: "Premjesti radnu stavku u svoje osobne dolazne poruke",
		process_reassign_tooltip: "Ponovno dodijeli radnu stavku drugom vlasniku",
		process_reassign_button_label: "Ponovno dodijeli",
		process_preferences_button_label: "Preference",
		process_manageroles_button_label: "Upravljanje ulogama",
		process_manageroles_no_members: "Nema članova.",
		process_responses_button_label: "Još odgovora",
		process_morecustomaction_button_label: "Više akcija",
		process_show_instructions: "Pregled naredbi",
		process_hide_instructions: "Sakrij naredbe",
		process_remove_attachment: "Ukloni",
		process_close_window: "Radna stavka je obrađena.",
		process_delegate_flag: "Trenutni korisnik treba odobriti radnu stavku prije nego ju usmjeri prema sljedećem koraku procesa rada.",
		process_paticipant_voting: "Potrebni broj sudionika za odobrenje glasanjem:",
		process_get_next_label: "Dohvati sljedeću radnu stavku",
		process_no_more_items: "Nema više stavki u dolaznim porukama za obradu:",
		process_workflow_name: "Naziv procesa rada:",
		process_pattern_process_name: "Pregled za ${0}",
		process_instuctions: "Upute za pregledavatelje:",
		process_pattern_deadline: "Datum dospijeća:",
		process_reviewers: "Pregledavatelji:",
		process_approvals_required: "Potrebna odobrenja:",
		process_on_reject: "Ako je radna stavka odbijena:",
		process_return_to_originator: "Vrati meni",
		process_return_to_previous_reviewer: "Vrati prethodnom pregledavatelju",
		process_additional_settings: "Dodatne postavke:",
		process_allow_reassign: "Dozvoli pregledavateljima da ponovno dodijele ovaj pregled",
		process_complete_notification: "Obavijesti me kad je pregled dovršen",
		process_workflow_name_hover_help: "Naziv koji navedete za radnu stavku treba pojednostavniti razliku između ove radne stavke i drugih radnih stavki za pregledavatelje u njihovim dolaznim porukama.",
		process_approvals_required_hover_help: "Ako radnu stavku istodobno pregledava više osoba, možete navesti koliko odobrenja je potrebno da bi se radna stavka uspješno dovršila.",
		process_approval_options: "Opcije odobrenja",
		process_all: "Sve",
		process_at_least: "Najmanje",
		process_at_least_by_count: "Najmanje ${0} broja pregledavatelja",
		process_at_least_by_percentage: "Najmanje ${0}% pregledavatelja",
		process_comments: "Komentari:",
		process_review_step_comments_hover_help: "Ako odbijete radnu stavku, morate dati informacije zašto ste je odbili. Ove informacije omogućavaju da izvor radne stavke ili prethodni pregledavatelj obrate pažnju na vaše primjedbe.",
		process_rework_step_comments_hover_help: "Morate dati informacije o tome kako ste se pozabavili komentarima. Ako se ne slažete s komentarima, objasnite vašu odluku.",
		process_rejection_reason: "Razlog za odbijanje:",
		process_summary: "Sažetak",
		process_sequential_review: "Sekvencijalni pregled",
		process_sequential_review_description: "Radnu stavku će pregledati svaki pregledavatelj po redu.",
		process_parallel_review: "Paralelni pregled",
		process_parallel_review_description: "Radnu stavku će pregledati svi pregledavatelji istodobno",
		process_parallel_approvals_required_error: "Broj potrebnih odobrenja je previsok. Navedeno se samo ${0} pregledavatelja.",
		process_parallel_invalid_required_approvals_count: "Vrijednost nije važeća. Vrijednost mora biti ${0}.",
		process_subject_prompt: "Unesite predmet",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Radna stavka:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Pregled svojstava",
		view_permissions_level: "Pregled dozvola",
		view_content_level: "Pregled dokumenata",
		link_level: "Veza",
		modify_properties_level: "Uređivanje svojstava",
		modify_content_level: "Uredi dokument",
		minor_version_level: "Uređivanje manje verzije",
		major_version_level: "Uređivanje glavne verzije",
		create_instance_level: "Kreiranje instance",
		delete_document_level: "Brisanje dokumenta",
		delete_item_level: "Brisanje stavke",
		modify_document_permissions_level: "Upravljanje dozvolama",
		modify_folder_permissions_level: "Upravljanje dozvolama",
		modify_owner_level: "Promjena vlasnika",
		delete_folder_level: "Brisanje foldera",
		file_in_folder_level: "Dodavanje u foldere",
		create_subfolder_level: "Kreiranje podfoldera",
		link_item_level: "Obilježi dokument, dodaj u folder", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Samo dokument: Dodaje bilješku u dokument ili ju uklanja iz dokumenta</li><li>Samo folder: Dodaje stavke u folder ili ih uklanja iz foldera</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Izbriši",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Vlasnik",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Čitatelj",
		/* previously \"Read only\" */
		no_access_privilege: "Nema pristupa",
		share_with_label: "Podijeli s:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Samo ja",
		public_label: "Svi",
		members_label: "Određeni korisnici i grupe",
		select_members_label: "Izbor...",
		select_user_group_label: "Izbor korisnika...",
		select_users_groups_label: "Izbor korisnika i grupa...",
		select_user_label: "Izbor korisnika...",
		propagation_label: "Širenje:",
		access_label: "Dozvole:",
		add_permission_add_label: "Dodaj",
		security_policy_label: "Politika sigurnosti:",
		includes_inherited_access: "Uključuje naslijeđeni pristup",
		customize_access_for_label: "Prilagodi pristup za:",
		customize: "Prilagodi",
		direct: "Ova stavka",
		singleLevelInheritance: "Jedna razina",
		infiniteLevelInheritance: "Sve razine",
		inherited: "Naslijeđeno",
		direct_hover_help: "Sigurnosne postavke odnose se na izabranu stavku",
		singleLevelInheritance_hover_help: "Ove dozvole se primjenjuju na ovu stavku i na neposredne podređene koje su konfigurirane za nasljeđivanje sigurnosti iz ove stavke.",
		infiniteLevelInheritance_hover_help: "Ove dozvole se primjenjuju na ovu stavku i na sve potomke koji su konfigurirani za nasljeđivanje sigurnosti iz ove stavke.",
		inherited_hover_help: "Ove dozvole se nasljeđuju od nadređenog.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Ove dozvole za ${0} se primjenjuju na ovu stavku i na neposredne podređene koje su konfigurirane za nasljeđivanje sigurnosti iz ove stavke.",
		infiniteLevelInheritance_member_hover_help: "Ove dozvole za ${0} se primjenjuju na ovu stavku i na sve potomke koji su konfigurirani za nasljeđivanje sigurnosti iz ove stavke.",
		inherited_member_hover_help: "Ove dozvole za ${0} se nasljeđuju iz nadređenog.",
		partial_hover_help: "Postavke sigurnosti stavke promijenio je korisnik",
		allow: "Dozvoli",
		deny: "Zabrani",
		basic: "Osnovno",
		advanced: "Napredno",
		permission_type: "Postavi pristup za:",
		share_with_hover_help: "Stavka se trenutno dijeli sa sljedećim korisnicima i grupama.",
		direct_security_policy_hover_help: "Postavke ove politike sigurnosti dozvoljavaju vam da promijenite sigurnosne postavke za ovu stavku.",
		security_policy_hover_help: "Sigurnosna postavka za ovu stavku dozvoljava samo čitanje, jer postavke politike sigurnosti sprječavaju promjenu sigurnosnih postavki ove stavke.",
		security_remove: "Nema dozvola",
		pseudo_group_label: "Zamjenski računi",
		marking_hover_help: "Sigurnost ove stavke kontrolira skup označavanja, koji može utjecati na sigurnost stavke.",
		note_label: "Važno:",
		marking_text: "Ova stavka je označena kao: ${0}. Stavka možda ima dodatna sigurnosna ograničenja.",
		authenticated_users: "Ovlašteni korisnici",
		realm_users: "${0} korisnika",
		denyAll: "Zabrani sve",
		allowAll: "Dozvoli sve",
		remove_direct_text: "Kad spremite vaše promjene, dozvole ovog člana će se ukloniti iz stavke.",
		remove_single_inheritance_text: "Kad spremite vaše promjene, dozvole ovog člana će se ukloniti iz stavke i iz <br>onih neposrednih podređenih koje su konfigurirane za nasljeđivanje sigurnosti iz stavke.<p>Želite li nastaviti?",
		remove_infinite_inheritance_text: "Kad spremite vaše promjene, dozvole ovog člana će se ukloniti iz stavke i iz <br>svih potomaka koji su konfigurirani za nasljeđivanje sigurnosti iz stavke.<p>Želite li nastaviti?",
		remove_inheritance_text: "Kad spremite vaše promjene, dozvole ovog člana će se ukloniti iz stavke i iz <br>svih potomaka koji su konfigurirani za nasljeđivanje sigurnosti iz stavke. Zadržat će se samo one dozvole <br>koje su naslijeđene iz ove stavke.<p>Želite li nastaviti?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Ukloni ove dozvole za ${0}",

		security_proxy_text: "Sigurnosna postavka za ovu stavku dozvoljava samo čitanje.",
		security_proxy_declared_text: "Sigurnost ove stavke je samo za čitanje jer ju je definirao proxy za sigurnost.",
		security_proxy_hover_help: "Sigurnost ove stavke kontrolira sigurnost postavljena na drugom objektu u spremištu.",
		add_permissions_label: "Dodaj dozvole",
		permission_propagation_direct: "Samo ovaj folder",
		permission_propagation_onelevel: "Ovaj folder i jedna razina ispod",
		permission_propagation_alllevels: "Ovaj folder sve razine ispod",
		document_propagation_label: "Postavi pristup za:",
		document_propagation_FOLDER: "Folder",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Izvor za provjeru identiteta:",

		/* Versions Widget */
		object_versions_selector_label: "Verzije:",
		object_versions_label: "Verzije",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Folderi spremljeni u",
		folders_filed_in_folder_col_hdr: "Folder",
		folders_filed_in_path_col_hdr: "Staza",
		folders_filed_in_containment_name_col_hdr: "Naziv zadržavanja",
		folders_filed_in_creator_col_hdr: "Kreirao",
		folders_filed_in_date_created_col_hdr: "Kreirano",

		/* Parent Documents */
		properties_parent_documents_label: "Nadređeni dokumenti",

		/* Select object dialog */
		select_object_title: "Izbor stavke",
		select_object_breadCrumb_version_prefix: "Verzije za: ",
		show_versions_label: "Pokaži verzije",
		use_current_version_label: "Koristi trenutnu verziju",
		use_released_version_label: "Koristi izdanu verziju",

		/* Select content class dialog */
		select_class: "Izbor klase",
		/* Select Search dialog */
		select_search: "Izbor pretraživanja",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Pregled veze",
		show_hyperlink_intro: "Možete zalijepiti vezu u e-mailove, razgovore i Web stranice. Ako postoji više verzija stavke, navedite za koju verziju želite vezu.",
		show_hyperlink_intro_no_version_select: "Možete zalijepiti vezu u e-mailove, razgovore i Web stranice.",
		show_text_label: "Verzija:",
		released_button_label: "Izdano",
		current_button_label: "Trenutno",
		select_button_label: "Specifična verzija",
		show_hyperlink_no_released_version_msg: "Ne postoji izdana verzija ovog dokumenta.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Pokreni proces rada",
		edit_workflow_title: "Svojstva radne stavke",
		start_workflow_intro: "Pokrenite proces rada za obradu izabranih stavki. Ako želite dodijeliti radne stavke određenom korisniku, navedite vlasnika.",
		edit_workflow_intro: "Možete uređivati svojstva izabrane radne stavke. Ako želite ponovno dodijeliti radnu stavku drugom korisniku, navedite vlasnika.",
		workflow_field_label: "Proces rada:",
		priority_field_label: "Prioritet :",
		owner_field_label: "Vlasnik:",
		start_button_label: "Pokreni",
		save_button_label: "Spremi",
		owner_value_hint: "Unesite alfanumerički niz znakova s maksimumom od 32 znaka. Niz znakova može sadržavati samo praznine ili sljedeće znakove: a-z, A-Z, 0-9 i ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elementi sadržaja",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Vrijednost nije važeća. Vrijednost može sadržavati samo praznine ili sljedeće znakove: a-z, A-Z, 0-9 i ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Unesite vrijednost od 1 do 32000 da označite važnost radne stavke.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Vrijednost nije važeća. Prioritet mora biti vrijednost od 1 do 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Naziv procesa rada ne postoji.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Obustavi iz procesa rada",
		suspend_workitems_intro: "Kad odgodite radnu stavku u procesu rada, radna stavka se ne može obraditi dok se ne nastavi",
		suspend_workitems_options_label: "Obustavite izabrane radne stavke:",
		suspend_until_resume_label: "Do ručnog nastavljanja",
		suspend_until_date_label: "Do",
		suspend_for_duration_label: "Za",
		suspend_for_duration_hours: "Sati",
		suspend_for_duration_days: "Dani",
		suspend_for_duration_weeks: "Tjedni",
		suspend_for_duration_months: "Mjeseci",
		suspend_for_duration_years: "Godine",
		suspend_button_label: "Odgodi",
		suspend_duration_value_hint: "Unesite vrijednost u rasponu 1 - 99 za trajanje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Vrijednost nije važeća. Vrijednost mora biti u rasponu 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Ukloni iz procesa rada",
		remove_workflow_confirmation: "Želite li ukloniti izabrane stavke iz procesa rada?<br>${0} stavki je izabrano.",
		remove_workflow_button_label: "Ukloni",

		/* Unfile dialog */
		unfile_dialog_title: "Ukloni iz foldera",
		unfile_dialog_remove_from_folder_label: "Ukloni iz:",
		unfile_dialog_info_text: "Možete ukloniti stavke iz foldera. Međutim, uklanjanje stavke iz svih foldera ne uklanja stavku iz spremišta. Možete još uvijek dohvatiti stavku izvođenjem pretraživanja. Samo folderi za koje imate povlasticu pregledavanja su prikazani na ovoj listi.",
		unfile_dialog_select_all: "Izaberi sve",
		unfile_dialog_deselect_all: "Očisti sve",
		unfile_dialog_remove_button_label: "Ukloni",
		unfile_dialog_select_folder_col_hdr: "Izbor foldera",
		unfile_dialog_folder_col_hdr: "Folder",
		unfile_dialog_path_col_hdr: "Staza",
		unfile_dialog_not_filed_msg: "Ova stavka nije niti u jednom folderu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nemate odgovarajuće dozvole za uklanjanje ove stavke iz bilo kojeg foldera u kojem je stavka.",
		unfile_dialog_folder_not_selectable_tooltip: "Nemate odgovarajuće dozvole za uklanjanje ove stavke iz ovog foldera.",
		unfile_multi_prompt: "Želite li ukloniti izabrane stavke iz ${0} foldera?",
		unfile_large_number_items_confirmation_question: "Izabrali ste ${0} stavki za uklanjanje iz ${1} foldera.<br/>Uklanjanje velikog broja stavki iz foldera može potrajati.<br/>Želite li nastaviti?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Otvori",
		move_to_folder_title: "Premjesti u folder",
		move_to_folder_button_caption: "Premjesti",
		move_to_folder_label: "Premjesti u:",
		add_to_folder_title: "Dodaj u folder",
		add_to_folder_button_caption: "Dodaj",
		add_to_folder_label: "Dodaj u:",
		copy_to_folder_title: "Kopiraj u folder",
		copy_to_folder_button_caption: "Kopiraj",
		copy_to_folder_label: "Kopiraj u:",
		copy_to_folder_delete_label: "Nakon završetka kopiranja, izbrišite izabrane stavke iz Boxa.",
		move_from_folder_label: "Premjesti iz:",
		move_file_info_text: "Možete premjestiti stavke iz jednog foldera u drugi.",
		move_folder_info_text: "Možete premjestiti foldere iz jednog nadređenog foldera u drugi.",
		add_doc_to_folder_info_text: "Možete dodati stavke jednom ili više foldera. Ako je stavka već u folderu, ostaje u tom folderu i dodaje se svim dodatnim folderima koje navedete.",
		copy_doc_to_folder_info_text: "Možete kopirati stavke u folder.",
		box_copy: "Box kopiranje",
		box_copy__button_caption: "Kopiraj",
		box_copy_to_info_text: "Izaberite spremište i folder u koji želite kopirati izabrane stavke iz Boxa.",
		box_copy_from_info_text: "Izaberite spremište i folder u koji želite kopirati izabrane stavke iz Boxa.",
		box_copy_version_info_text: "Da biste dodali novi dokument, izaberite spremište i folder. Da biste prijavili novu verziju, izaberite spremište i dokument.",
		admin_box_copy: "Box kopiranje",
		admin_box_copy_hover: "Ova opcija omogućuje korisnicima kopiranje dokumenata u Box.",

		no_permission_to_copy_version_msg: "Ne možete kopirati dokument iz Boxa kao novu verziju izabranog dokumenta. Nemate odgovarajuće dozvole za uređivanje izabranog dokumenta ili je netko drugi odjavio izabrani dokument.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nemate odgovarajuće dozvole za uklanjanje ove stavke iz bilo kojeg foldera u kojem je stavka.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nemate odgovarajuće dozvole za uklanjanje ove stavke iz ovog foldera.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Ova se stavka ne može premjestiti jer nije spremljena u ni jedan folder. izaberite drugu stavku.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Pokreni proces rada",
		subscriptions_dialog_available_items_label: "Dostupne stavke:",
		subscriptions_dialog_info_text: "Navedite proces rada koji se pokreće.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Naziv",
		subscriptions_dialog_desc_col_hdr: "Opis",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Upravljanje ulogama",
		manageroles_dialog_info_text: "Možete promijeniti listu korisnika za svaku ulogu koja je pridružena ovom prostoru aplikacije procesa.",
		manageroles_dialog_members_label: "Članovi",
		manageroles_dialog_roles_label: "Uloge",
		manageroles_dialog_add_button_label: "Dodaj korisnike i grupe",
		manageroles_dialog_remove_button_label: "Ukloni",
		manageroles_dialog_save_button_label: "Spremi",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Nema procesa rada pridruženih ovoj stavci.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preference procesa rada",
		workflow_pref_dialog_info_text: "Navedite događaje procesa rada za koje želite primati obavijesti. Također možete omogućiti usmjeravanje vašeg posla drugoj osobi tako da izaberete korisnika kojem delegirate posao.",

		workflow_pref_general: "Opće",
		workflow_pref_email_address: "E-mail adresa",
		workflow_pref_email_address_hover: "Navedite e-mail adresu na koju želite primati obavijesti procesa rada.",
		workflow_pref_preferred_locale: "Jezik",
		workflow_pref_preferred_locale_hover: "Specificira jezik na kojem se prikazuju e-mail obavijesti.",

		workflow_pref_work_item_notice: "Obavijesti o radnim stavkama",
		workflow_pref_step_new_assignment: "Dodijeljena mi je nova radna stavka",
		workflow_pref_step_new_assignment_hover: "Obavijesti me kad primim novu radnu stavku.",
		workflow_pref_step_expired_deadline: "Prošao je krajnji rok radne stavke",
		workflow_pref_step_expired_deadline_hover: "Obavijesti me kad propustim krajnji rok radne stavke",
		workflow_pref_step_reminders: "Bliži se krajnji rok radne stavke",
		workflow_pref_step_reminders_hover: "Podsjeti me kad se bliži krajnji rok radne stavke.",

		workflow_pref_originator_notice: "Obavijesti izvora",
		workflow_pref_milestone_reached: "Dosegnuta je ključna točka",
		workflow_pref_milestone_reached_hover: "Obavijesti me kad se dosegne ključna točka u procesu rada koji sam pokrenuo.",

		workflow_pref_tracker_notice: "Obavijesti tragača procesa rada",
		workflow_pref_tracker_new_assignment: "Dodijeljena mi je nova stavka tragača",
		workflow_pref_tracker_new_assignment_hover: "Obavijesti me kad se pokrene proces rada koji pratim.",
		workflow_pref_tracker_deadline_reminders: "Krajnji rok procesa rada je blizu",
		workflow_pref_tracker_deadline_reminders_hover: "Podsjeti me na proces rada kad se bliži krajnji rok procesa rada.",
		workflow_pref_tracker_deadline_expired: "Prošao je krajnji rok procesa rada",
		workflow_pref_tracker_deadline_expired_hover: "Obavijesti me kad je prošao krajnji rok procesa rada.",
		workflow_pref_tracker_exception: "Pojavila se greška procesa rada",
		workflow_pref_tracker_exception_hover: "Obavijesti me kad se dogodi greška ili izuzetak procesa rada.",
		workflow_pref_tracker_expired_deadline: "Krajnji rok koraka je prošao",
		workflow_pref_tracker_expired_deadline_hover: "Obavijesti me kad je prošao krajnji rok koraka u procesu rada koji pratim.",
		workflow_pref_tracker_milestone_reached: "Dosegnuta je ključna točka",
		workflow_pref_tracker_milestone_reached_hover: "Obavijesti me kad se dosegne ključna točka u procesu rada koji pratim.",

		workflow_pref_out_notice: "Nisam u uredu",
		workflow_pref_proxy_user: "Delegiraj posao",
		workflow_pref_proxy_user_hover: "Koristite ovu opciju za automatsko preusmjeravanje svog posla drugom korisniku, na primjer, kad niste u uredu ili ste na odmoru.",
		workflow_pref_workflow: "Proces rada",
		workflow_pref_on: "Na",
		workflow_pref_off: "Isključeno",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Pokreni proces rada",
		transfered_workflows_dialog_info_text: "Izaberite proces rada za pokretanje",
		transfered_workflows_dialog_available_items_label: "Dostupne stavke:",
		transfered_workflows_dialog_select_button_label: "Pokreni",
		transfered_workflows_dialog_name_col_hdr: "Naziv",
		transfered_workflows_dialog_no_item_found: "Nisu nađeni preneseni procesi rada.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Prijenos procesa rada",
		transfer_workflow_dialog_info_text: "Izaberite proces rada za prijenos u sistem procesa rada.",
		transfer_workflow_dialog_use: "Koristi ovaj naziv procesa rada",
		transfer_workflow_dialog_use_another: "Koristi drugi naziv procesa rada",
		transfer_workflow_dialog_in_use: "Naziv procesa rada je: ",
		transfer_workflow_dialog_transfer_button_label: "Prijenos",
		transfer_workflow_dialog_no_items_found: "Nisu nađeni preneseni procesi rada.",
		transfer_workflow_dialog_use_hover: "Navedite naziv trenutnog procesa rada iz definicije procesa rada.",
		transfer_workflow_dialog_another_hover: "Navedite drukčiji naziv procesa rada ili ponovno koristite postojeći preneseni naziv procesa rada.",

		/*Search In control*/
		search_in_title: "Traži u:",
		search_in_teamspaces: "Timski prostori",
		search_in_repositories: "Spremišta",
		search_in_thisteamspaces: "Ovaj timski prostor",

		ajaxViewer_save: "Spremi primjedbe",
		ajaxViewer_print: "Pregled ispisa",
		ajaxViewer_firstPage: "Prva stranica",
		ajaxViewer_previousPage: "Prethodna stranica",
		ajaxViewer_nextPage: "Sljedeća stranica",
		ajaxViewer_lastPage: "Zadnja stranica",
		ajaxViewer_unknownPageCount: "1 od ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} od ${1}",
		ajaxViewer_zoomOut: "Smanji",
		ajaxViewer_zoomIn: "Povećaj",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Prilagodi širinu",
		ajaxViewer_fitHeight: "Prilagodi visinu",
		ajaxViewer_fitPage: "Prilagodi stranici",
		ajaxViewer_rotate270: "Rotiraj 270 stupnjeva",
		ajaxViewer_rotate90: "Rotiraj 90 stupnjeva",
		ajaxViewer_rotate180: "Rotiraj 180 stupnjeva",
		ajaxViewer_darken: "Potamni",
		ajaxViewer_lighten: "Posvijetli",
		ajaxViewer_lessContrast: "Manje kontrasta",
		ajaxViewer_moreContrast: "Više kontrasta",
		ajaxViewer_invert: "Okreni",
		ajaxViewer_createHighlight: "Istakni",
		ajaxViewer_createNote: "Zabilježi",
		ajaxViewer_editAnnotation: "Uređivanje svojstava primjedbe",
		ajaxViewer_deleteAnnotation: "Izbriši primjedbu",
		ajaxViewer_editAnnotationTitle: "Uređivanje svojstava primjedbe",
		printableView_print: "Ispis",
		printableView_close: "Zatvori",

		search_results_dropdown_button: "Prikaz rezultata",
		search_results_columns_label: "Prikaz rezultata pretraživanja",
		search_results_columns_description: "Izaberite svojstva koja želite da se prikažu u rezultatima pretraživanja.",
		search_results_sortby_label: "Sortiraj po:",
		search_results_order_label: "Redoslijed sortiranja:",
		search_results_accending_label: "Uzlazno",
		search_results_descending_label: "Silazno",
		search_results_available_properties: "Dostupno",
		search_results_selected_properties: "Izabrano",
		search_rank_property: "Rang (Samo pretraživanje teksta)",
		search_name_attribute: "Naziv (${0})",
		search_results_summary_enabled_label: "Omogući sažetke sadržaja (Samo pretraživanje teksta)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Pretraživanja",
		manage_teamspace_classes_tab_title: "Klase",
		manage_teamspace_entry_templates_tab_title: "Predlošci unosa",
		manage_teamspace_team_tab_title: "Tim",
		manage_teamspace_roles_tab_title: "Uloge",
		manage_teamspace_dialog_title: "Promjena timskog prostora",
		manage_teamspace_button_label: "Promjena timskog prostora",
		manage_teamspace_team_pane_heading: "Izbor tima",
		manage_teamspace_classes_pane_heading: "Izbor klasa",
		manage_teamspace_entry_templates_pane_heading: "Izbor predložaka unosa",
		manage_teamspace_no_rights_message: "Nemate odgovarajuće dozvole za promjenu timskog prostora.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Svojstva timskog prostora",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Navedite svojstva koja se prikazuju za dokumente i foldere kad korisnici pregledavaju u timskom prostoru. Možete također navesti redoslijed po kojem se prikazuju svojstva.",
		teamspace_props_sel_cols_use_default_label: "Koristi postavke <b>Pregleda</b> za ovo spremište",
		teamspace_props_sel_cols_use_default_tooltip: "Za ovo spremište koristite postavke navedene na stranici Pregled u administracijskom alatu.",
		teamspace_props_general_tab_label: "Opće",
		teamspace_props_column_props_tab_label: "Prikazana svojstva",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Izaberi datoteku za import",
		teamspace_import_template_instruction: "Možete izabrati eksportnu datoteku predloška timskog prostora za import.",
		teamspace_import_template_button_label: "Import",
		teamspace_import_template_dialog_label: "Import predloška timskog prostora",

		/* Annotation Dialog */
		annotationDlg_title: "Primjedbe",
		annotationDlg_description: "Izabrani dokument ima sljedeće  primjedbe:",
		annotationDlg_msg_noAnnotations: "Ne postoje primjedbe. Kliknite Dodaj da kreirate primjedbu.",
		annotationDlg_pageLabel: "Stranica: ${pageNum}",
		annotationDlg_accLabel: "PRISTUP: ${accType}",
		annotationDlg_accLabel_public: "Javno",
		annotationDlg_accLabel_private: "Privatno",
		annotationDlg_accLabel_privateGroup: "Privatno(${groupName})",
		annotationDlg_copiable: "Može se kopirati na drugi poslužitelj",
		annotationDlg_cannotCopy: "Ne može se kopirati na drugi poslužitelj",
		annotationDlg_addButtonLabel: "Dodaj",

		/* Share Dialog */
		is_shared: "Dijeljeno",
		is_share_pending: "Čeka dijeljenje",
		share_title: "Box dijeljenje",
		share_instructions_new: "Pošaljite e-mail koji sadrži vezu za datoteku koja se dijeli. Datoteci mogu pristupiti sve osobe koje imaju vezu.",
		share_instructions_existing: "Pošaljite e-mail koji sadrži vezu za datoteku koja se dijeli. Datoteci mogu pristupiti sve osobe koje imaju vezu. Druge osobe mogu imati vezu jer je netko već dijelio ovu datoteku.",
		share_instructions_another_version_shared: "Pošaljite e-mail koji sadrži vezu za datoteku koja se dijeli. Datoteci mogu pristupiti sve osobe koje imaju vezu. Druge osobe mogu imati vezu jer je netko već dijelio drugu verziju ove datoteke.",
		share_buttonLabel_share: "Dijeli",
		share_email_addresses: "Pošalji u:",
		share_email_addresses_hover: "Nakon završetka dijeljenja šalje se veza na sljedeće e-mail adrese. Ako ne navedete ništa, veza se šalje na vašu e-mail adresu.",
		share_email_addresses_reshare_hover: "Nakon završetka dijeljenja šalje se veza na sljedeće e-mail adrese. Ako ne navedete ništa, e-mail se neće poslati.",
		share_password: "Postavi lozinku:",
		share_password_placeholder: "Opcijski",
		share_comments: "Poruka:",
		share_comments_default: "Želim podijeliti svoju datoteku s tobom u Boxu.",
		share_myEmail: "Pošalji s:",
		share_expiration: "Postavite istek veze:",
		share_expire: "Pristup istječe:",
		share_expire_none: "Ne istječe",
		share_allowDownload: "Omogući preuzimanje",
		share_add: "Dodaj",
		share_advanced_instructions: "Postavke preuzimanja, isteka i lozinke odnose se na datoteku koja se dijeli u Boxu.",
		share_advanced_existing_instructions: "Postavke preuzimanja, isteka i lozinke odnose se na datoteku koja se dijeli u Boxu.",
		share_options_edit_warning: "Važno: bilo kakve promjene ovih postavki utječu na sve osobe koje imaju vezu, uključujući osobe koje je imaju otprije.",
		share_link: "Veza:",
		share_email_addresses_placeholder: "E-mail adrese",
		share_email_address_placeholder: "E-mail adresa",
		share_email_address_invalid: "Unesite važeću e-mail adresu.",
		share_cannot_share_with_self: "Ne možete podijeliti datoteke sa sobom. Navedite drukčijeg korisnika.",
		share_selected_version_with_minor_warning_hover: "Verzija ${0} dokumenta se dijeli. Izabrali ste verziju ${1}.<br><br><b>Upozorenje</b>: Ako dijelite verziju ${1}, ne može se dijeliti verzija ${2} osim ako izbrišete dijeljenje verzije ${1}.",
		share_selected_version_hover: "Verzija ${0} dokumenta se dijeli. Izabrali ste verziju ${1}.",
		share_selected_version_message: "Važno: dijeli se verzija ${0} dokumenta. Izabrali ste verziju ${1}.",
		share_different_version_message: "Važno: izabrali ste verziju ${1}, ali već se dijeli verzija ${0} dokumenta.  Ne možete dijeliti verziju ${1} dok ne izbrišete dijeljenje, ali možete dijeliti vezu prema verziji ${0}.",
		share_version_message: "Važno: dijeli se verzija ${0} dokumenta. Izaberite koju verziju želite dijeliti.",
		share_version_new: "Dijeljenje verzije ${0}",
		share_version_new_p8_hover: "Dijeljenjem ovog dokumenta kreira se veza prema verziji koja se odnosi samo na izabranu verziju.<br><br>Ako se dokument već dijeli:<ul><li>Možete dijeliti noviju verziju i veza će se preusmjeriti na noviju verziju.</li><li>Ne možete dijeliti stariju verziju dok ne izbrišete dijeljenje.</li></ul>",
		share_version_new_cm_hover: "Dijeljenjem ovog dokumenta kreira se veza prema verziji koja se odnosi samo na izabranu verziju.<br><br>Ako se dokument već dijeli:<ul><li>Možete dijeliti noviju verziju i veza će se preusmjeriti na noviju verziju.</li><li>Ne možete dijeliti stariju verziju.</li></ul>",
		share_version_update: "Dijeljenje verzije ${0} (ažurirajte opcije dijeljenja).",
		share_version_update_p8_hover: "Dijeljenjem ovog dokumenta održavat će se veza samo prema određenoj verziji.<br><br>Ako se dokument već dijeli:<ul><li>Možete dijeliti noviju verziju i veza će se preusmjeriti na noviju verziju.</li><li>Ne možete dijeliti stariju verziju dok ne izbrišete dijeljenje.</li></ul>",
		share_version_update_cm_hover: "Dijeljenjem ovog dokumenta održavat će se veza samo prema određenoj verziji.<br><br>Ako se dokument već dijeli:<ul><li>Možete dijeliti noviju verziju i veza će se preusmjeriti na noviju verziju.</li><li>Ne možete dijeliti stariju verziju.</li></ul>",
		share_version_change_to_current: "Dijeljenje verzije ${0} (ažurirajte dijeljenje na temelju izabrane verzije).",
		share_version_change_to_current_p8_hover: "Dijeljenjem ovog dokumenta veza će se ažurirati tako da pokazuje samo na izabranu verziju.<br><br>Ako se dokument već dijeli:<ul><li>Možete dijeliti noviju verziju i veza će se preusmjeriti na noviju verziju.</li><li>Ne možete dijeliti stariju verziju dok ne izbrišete dijeljenje.</li></ul>",
		share_version_change_to_current_cm_hover: "Dijeljenjem ovog dokumenta veza će se ažurirati tako da pokazuje samo na izabranu verziju.<br><br>Ako se dokument već dijeli:<ul><li>Možete dijeliti noviju verziju i veza će se preusmjeriti na noviju verziju.</li><li>Ne možete dijeliti stariju verziju.</li></ul>",
		share_repository: "Spremište za dijeljene datoteke",
		share_repository_hover: "Ako ne vidite Box spremište koje želite koristiti, možete dodati novo Box spremište na stranicu Spremišta.",
		share_options: "Opcije dijeljenja",
		unshare_confirm: "Kad izbrišete dijeljenje, veze dijeljenja više neće biti ispravne, uključujući veze koje su poslali drugi korisnici. Drugi korisnici koji žele dijeliti dokument moraju izabrati originalni dokument i ponovno ga dijeliti.<br><br>Jeste li sigurni da izbrisati dijeljenje?",
		unshare_button: "Izbriši Box dijeljenje",
		admin_share: "Box usluge dijeljenja:",
		admin_share_hover: "Omogućite korisnicima dijeljenje dokumenta iz bilo kojeg spremišta koje ima omogućeno Box dijeljenje. Dijeljenje dokumenta uključuje kopiranje datoteke u Box, kreiranje veze i slanje veze u e-pošti.",
		admin_my_email_modifiable: "Dozvoli korisnicima promjenu e-mail adrese za Slanje od",
		admin_my_email_modifiable_hover: "Po defaultu je e-mail adresa korisnika dostupna samo za čitanje kod Box dijeljenja i dobiva se pomoću mapiranja korisnika i e-mail adresa koje predstavljaju Box korisničke račune.<br><br>Izaberite ovu opciju da bi dozvolili da korisnici uređuju svoju e-mail adresu kod dijeljenja, međutim ispravnost te e-mail adrese se neće provjeravati.",
		admin_repos_admin_user: "Administrator dijeljenja:",
		admin_repos_admin_user_hover: "Postavite administratora dijeljenja ako imate desktop s omogućenim uslugama Box dijeljenja i ako je to Box spremište izabrano kao spremište dijeljenih datoteka.<br><br>Kliknite Postavi i prijavite se na Box koristeći važeći Box administratorski račun.<br><br>Administrator dijeljenja mora biti Box administrator koji ima konfiguriran neograničeni prostor za pohranu u Boxu.",
		admin_repos_admin_user_not_set_warning: "Za izabrano spremište nije konfiguriran Box administrator.<br><br>Usluge Box dijeljenja bit će onemogućene dok ne postavite Box administratora za izabrano spremište ili dok ne izaberete drugo Box spremište koje ima konfiguriranog Box administratora.<br><br>Box administratora možete postaviti u odjeljku Box usluga dijeljenja na stranici Općenito u spremištu.",
		admin_share_not_configured_warning: "Prije upotrebe usluga Box podjela morate dodati i izabrati Box spremište s provjerom ovlaštenja poslužitelja.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online konfiguracija",
		admin_office_online_server_enable: "Office Online poslužitelj:",
		admin_office_online_server_enable_hover: "Navedite da li želite da korisnici koji pristupaju ovom desktopu mogu uređivati svoje Office dokumente koristeći Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Dozvoli zajedničko uređivanje",
		admin_office_online_allow_collaborative_editing_hover: "Dozvolite da više od jednog korisnika radi na istom dokumentu. Očistite ovu opciju ako želite ograničiti uređivanje dokumenata na samo jednog korisnika.",
		admin_office_online_repository_not_set_warning: "Prije omogućavanja Office Online usluga morate omogućiti usluge na spremištu i  navesti URL za Microsoft Office Online Server. Kliknite <b>Spremišta</b>, izaberite spremište i omogućite uslugu na kartici <b>Uredi integraciju</b>. Kliknite <b>Postavke > Općenito</b> i unesite URL za Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Navedite da li želite koristiti Office Online Server za rad s Office dokumentima.",
		admin_office_online_server_url: "URL Microsoft Office Online Servera",
		admin_office_online_server_url_hover: "Navedite URL s kojim ostale aplikacije mogu komunicirati s Office Online Serverom. URL ima  format http://server_name:port_number/hosting/discovery.",
		admin_office_online_server_Verified: "Provjereno",
	    admin_office_online_server_Failed: "<b>Neuspješno</b>",

		admin_repcfg_office_online_service_p8_hover: "Za inicijalizaciju spremišta za korištenje Office Online Servera, možete dodati početnu datoteku predloška za svaku Office aplikaciju. Ako predložak nije naveden, koristit će se default predložak.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server integracija",
		admin_repcfg_office_online_service_url_not_set_warning: "Prije omogućavanja Office Online Servera morate navesti URL za Microsoft Office Online Server. Kliknite Postavke > Općenito i unesite URL",
		admin_repcfg_office_online_word_template_name: "Default Word predložak",
		admin_repcfg_office_online_excel_template_name: "Default Excel predložak",
		admin_repcfg_office_online_powerpoint_template_name: "Default PowerPoint predložak",
		admin_repcfg_office_online_blank_template_description: "Ovo je default predložak koji se koristi ako ne dodate vlastiti predložak.",
		/* Edit Service settings */
		admin_icn_edit_title: "Uredi konfiguraciju",	
	    admin_icn_edit_files_cleanup_interval: "Interval čišćenja privremenih datoteka (u danima):",
	    admin_icn_edit_files_cleanup_interval_hover: "Možete postaviti period u kojem će se privremene datoteke zadržavati u ICN Edit klijentu. Default vrijeme je 20 dana. Maksimalno vrijeme je 20 dana. Minimalno vrijeme je 1 dan.",
	    admin_icn_edit_service_integration: "Integracija usluge uređivanja",
	    admin_icn_edit_service_integration_intro: "Usluga uređivanja korisnicima omogućuje jednostavno dodavanje ili uređivanje datoteka u lokalnim aplikacijama instaliranim na njihovim računalima.<br><br><b>Važno:</b> Ako omogućite uslugu uređivanja, morate spremiti konfiguraciju spremišta da biste mogli uređivati unaprijed definirane kategorije.",
		admin_icn_edit_service: "Usluga uređivanja:",
		admin_icn_edit_enable_hover: "Da biste mogli koristiti uslugu uređivanja, morate:<ul><li>Omogućiti uslugu za spremište</li><li>Omogućiti uslugu na stolnim računalima u vašoj okolini</li><li>Instalirati klijent IBM Content Navigator Edit na radnim stanicama korisnika</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Omogući",
		admin_icn_edit_disable: "Onemogući",
		admin_icn_edit_create_new_category: "Nova kategorija",
		admin_icn_edit_delete_category: "Izbriši kategoriju",
		admin_icn_edit_edit_category: "Uredi kategoriju",
		admin_icn_edit_disable_category: "Onemogući kategoriju",
		admin_icn_edit_enable_category: "Omogući kategoriju",
		admin_icn_edit_new_category_dialog_title: "Nova kategorija",
		admin_icn_edit_edit_category_dialog_title:"Uredi kategoriju",
		admin_icn_edit_new_category_dialog_instructions: "Kategorija dokumenta omogućuje vam da predlošcima pridružite određene MIME tipove za uslugu uređivanja. Na primjer, možete pridružiti skup predložaka PDF datotekama, tako da korisnici mogu primijeniti predloške kad dodaju ili uređuju datoteke u klijentu IBM Content Navigator Edit. <br><br><b>Važno:</b> Morate spremiti konfiguraciju spremišta da biste mogli dodati predloške kreiranoj kategoriji. ",
		admin_icn_edit_edit_category_dialog_instructions: "Morate spremiti konfiguraciju spremišta da biste mogli dodati predloške ovoj kategoriji. ",
		admin_icn_edit_delete_category_dialog_instructions: "Želite li izbrisati ovu kategoriju i sve predloške pridružene kategoriji?<br><br><b>Važno:</b> Vaše promjene neće biti trajne dok ne spremite promjene u spremištu. ",
		admin_icn_edit_category_label: "Kategorija: ",
		admin_icn_edit_category_discription_label:"Opis: ",
		admin_icn_edit_template_column_head:"Naziv predloška",
		admin_icn_edit_category_duplicate_error_message: "Kategorija s tim ID-om već postoji. ",
		admin_icn_edit_word_category_description: "Ova kategorija definira predloške dostupne za Microsoft Word dokumente u usluzi uređivanja. ",
		admin_icn_edit_excel_category_description: "Ova kategorija definira predloške dostupne za Microsoft Excel dokumente u usluzi uređivanja. ",
		admin_icn_edit_powerpoint_category_description: "Ova kategorija definira predloške dostupne za Microsoft PowerPoint dokumente u usluzi uređivanja. ",

		icn_edit_add_template_dialog_title:"Dodavanje ${0} predloška",
		icn_edit_add_template_only_one_file_error: "Možete izabrati samo jednu datoteku.",
		icn_edit_add_template_file_type_error: "Morate navesti važeću ${0} datoteku predloška.<br><br>MIME tip izabranog dokumenta je ${1}.<br><br>Važeći MIME tipovi: ${2}.",
		icn_edit_change_template_dialog_title: "Uređivanje ${0} predloška",
		icn_edit_action_in_new_menu_name:"${0} dokument",
		icn_edit_action_in_new_menu_submenu_oo_name: "koristeći Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "koristeći desktop aplikacije",
		icn_edit_new_document_dialog_title: "Novi ${0} dokument",
		icn_edit_new_document_dialog_intro: "Kreirajte novi ${0} dokument i dodajte ga u spremište. Dokument će se kreirati s izabranim predloškom uređivanja.", 
		icn_edit_select_edit_service_template: "Izaberite predložak",
		icn_edit_edit_service_template: "Predložak usluge uređivanja:",
		icn_edit_new_document_category_no_templates_message:"Nema predložaka u ovoj kategoriji. Molim, zatražite od administratora da doda predloške u ovu kategoriju.",
		icn_edit_installer: "Instalator IBM Content Navigator usluge uređivanja",
		admin_icn_cm_classes_and_roles_settings: "Postavke klase i uloge",
		admin_repcfg_classes_and_roles_warning: "Za navođenje klasa i korisnika ili grupa korisnika koji imaju dozvolu da kreiraju, urede i koriste predloške ili kreiraju skice dokumenata koji rade s Office Online servisom i Uredi servisom.",
		admin_repcfg_classes_and_roles_click_warning: "kliknite ovdje.",
		/* Edit Service settings END */
		share_no_my_email_error: "Pojavio se problem kod utvrđivanja e-mail adrese potrebne za dijeljenje dokumenta.",
		share_no_my_email_error_explanation: "Prijavili ste se s ID-om korisnika ${0}, ali ID korisnika nema mapiranu e-mail adresu.",
		share_no_my_email_error_userResponse: "Pokušajte se ponovno prijaviti ili upotrijebite drugi ID korisnika za prijavu. Ako se problem nastavi, izvijestite vašeg sistemskog administratora o grešci.",
		share_no_my_email_error_adminResponse: "ID korisnika ${0} nema mapiranu e-mail adresu, a desktop ${1} ne dozvoljava korisnicima uređivanje e-mail adrese za Box usluge dijeljenja.<br><br>Pokušajte primijeniti jedno od sljedećih rješenja:<br>Pobrinite se da je registriran plug-in e-mail mapiranja.<br>Pobrinite se da datoteka emailMappingPlugin.json sadrži ID korisnika ${0} i e-mail adresu korisnika i zatim izgradite, konfigurirajte i registrirajte plug-in e-mail mapiranja.<br>Ako ne želite koristiti plug-in e-mail mapiranja ili direktorij FileNet P8 e-mail adrese, nego želite dozvoliti korisnicima unos vlastite e-mail adrese kad dijele dokument, možete promijeniti desktop postavke Box usluga dijeljenja i omogućiti korisnicima slanje veze s druge e-mail adrese.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Dijeli se novija verzija ovog dokumenta, tako da ne možete dijeliti izabranu verziju.",
		share_later_version_shared_error_explanation: "Ne možete dijeliti stariju verziju dokumenta koji se već dijeli.",
		share_later_version_shared_error_userResponse: "Ako želite poslati vezu prema novijoj verziji dokumenta, prvo morate izabrati noviju verziju, a zatim upotrijebiti akciju Dijeli.<br><br>Ako želite dijeliti izabranu verziju dokumenta, morate izbrisati dijeljenje koje sadrži noviju verziju dokumenta.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nova poruka",
		email_from: "Od:",
		email_to: "Do:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Unesite važeću e-mail adresu.",
		email_subject: "Predmet:",
		email_message: "Poruka:",
		email_message_placeholder: "Dodaj poruku",
		email_attachments: "Prilozi:",
		email_links: "Veze:",
		email_send: "Pošalji",
		email_dont_send: "Nemoj slati",
		email_subject_reminder: "Podsjetnik predmeta",
		email_subject_reminder_confirm: "Da li želite poslati ovu poruku bez predmeta?",
		email_missing_from_error: "Pojavio se problem kod identificiranja e-mail adrese Od koja je potrebna za slanje e-maila.",
		email_missing_from_error_explanation: "Prijavili ste se s ID-om korisnika ${0}, ali ID korisnika nema mapiranu e-mail adresu.",
		email_missing_from_error_userResponse: "Pokušajte se ponovno prijaviti ili upotrijebite drugi ID korisnika za prijavu. Ako se problem nastavi, izvijestite vašeg sistemskog administratora o grešci.",
		email_missing_from_error_adminResponse: "ID korisnika ${0} nije mapiran na e-mail adresu, a desktop ${1} ne dozvoljava da korisnici uređuju e-mail adresu Od.<br><br>Pokušajte primijeniti jedno od sljedećih rješenja:<br>Pobrinite se da je registriran plug-in e-mail mapiranja.<br>Pobrinite se da datoteka emailMappingPlugin.json sadrži ID korisnika ${0} i e-mail adresu korisnika i zatim izgradite, konfigurirajte i registrirajte plug-in e-mail mapiranja.<br>Ako ne želite koristiti plug-in e-mail mapiranja ili direktorij FileNet P8 e-mail adrese, nego želite dozvoliti korisnicima unos vlastite e-mail adrese kad šalju e-mail, možete promijeniti e-mail postavke za desktopove i dozvoliti da korisnici uređuju e-mail adresu Od.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokument se ne može otvoriti.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator se ne može povezati s klijentom IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Instalirajte i pokrenite klijent IBM Content Navigator Edit na vašoj radnoj stanici. Zatim ponovno pokušajte otvoriti dokument.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokument se ne može otvoriti.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator se ne može povezati s klijentom IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Instalirajte i pokrenite klijent IBM Content Navigator Edit na vašoj radnoj stanici. Zatim ponovno pokušajte otvoriti dokument.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator nije ispravno konfiguriran za dijeljenje dokumenata.",
		share_not_configured_error_explanation: "Box funkcija dijeljenja se mora ispravno konfigurirati prije nego što možete dijeliti dokumente.",
		share_not_configured_error_userResponse: "Kontaktirajte vašeg administratora i zatražite da on konfigurira Box funkciju dijeljenja.",
		share_not_configured_error_adminResponse: "Sljedeće stavke se moraju konfigurirati prije dijeljenja dokumenata:<ul><li>Usluga upravitelja zadataka se mora omogućiti u postavkama administracijskog alata.</li><li>ID veze upravitelja zadataka se mora konfigurirati u spremištu.</li><li>Dijeljenje mora biti omogućeno u spremištu.</li><li>Box spremište mora biti izabrano za dijeljenje na desktopu.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Promjene svojstava nisu spremljene za novu verziju",
		checkin_cors_save_attributes_error_explanation: "Verzija je kreirana, ali promjene svojstava nisu spremljene. Dokument se svejedno može odjaviti.",
		checkin_cors_save_attributes_error_userResponse: "Otključajte dokument i ažurirajte svojstva koristeći stavku Svojstva kontekstnog izbornika.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Promjene svojstava nisu spremljene za novi dokument.",
		add_cors_save_attributes_error_explanation: "Dokument je kreiran, ali promjene svojstava nisu spremljene.",
		add_cors_save_attributes_error_userResponse: "Ažurirajte svojstva koristeći stavku Svojstva kontekstnog izbornika.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokument se ne može otvoriti.",		
		edit_document_using_edit_service_error_explanation: "Dokument se ne može otvoriti u usluzi uređivanja.",
		edit_document_using_edit_service_error_userResponse: "Zatražite da administrator ažurira integraciju usluge uređivanja.<br><br> Ako korisnik treba pristupiti tom dokumentu iz Uredi servisa, idite na stranicu Integracija uređivanja za repozitorij i ažurirajte Integraciju uredi servisa da uključi klasu u listi klasa za promjenu podrške Uredi servisa.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokument se ne može otvoriti.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokument koristi Office Online Service.",
		edit_document_is_editing_by_oos_error_userResponse: "Morate spremiti i zatvoriti dokument u Office Online servisu prije nego što ga možete otvoriti u Uredi servisu.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Omogući Cross-Origin Resource Sharing (CORS) predavanja",

		/* Email Settings */
		admin_email_settings: "E-mail postavke:",
		admin_email_settings_hover: "Navedite tip e-mail usluge koju želite da korisnici koriste. Kad omogućite HTML bazirane e-mail usluge, imate opciju dozvoljavanja korisnicima promjenu e-mail adrese Od. Ako želite omogućiti Java bazirane e-mail usluge, morate imati pretražitelj koji podržava Javu.",
		admin_email_use_service: "Koristi HTML bazirane e-mail usluge",
		admin_email_use_applet: "Koristi Java bazirane e-mail usluge",
		admin_email_can_modify_from: "Dozvoli da korisnici mijenjaju e-mail adresu Od",
		admin_email_can_modify_from_hover: "Po defaultu se e-mail adresa Od ne može mijenjati i dobiva se iz mapiranja korisnika i e-mail adresa koje predstavljaju njihove korisničke račune.<br><br>Izaberite ovu opciju da bi dozvolili da korisnici uređuju svoju e-mail adresu kad šalju e-mail, međutim ispravnost te e-mail adrese se neće provjeravati.",
		admin_email_use_from_as_sender: "Koristi e-mail adresu Od kao pošiljatelj e-maila",
		admin_email_use_from_as_sender_hover: "Po defaultu se koristi važeća e-mail adresa Od u korisničkom e-mailu. Ta e-mail adresa je definirana s CNMailSession sesijom na poslužitelju aplikacija. Izaberite ovu opciju da bi naveli da će se koristiti korisnička e-mail adresa.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nove primjedbe",
		addAnnotationDlg_labelContents: "Sadržaj:",
		addAnnotationDlg_labelAccess: "Pristup:",
		addAnnotationDlg_labelPublic: "Javno",
		addAnnotationDlg_labelPrivate: "Privatno",
		addAnnotationDlg_labelPrivateGroup: "Privatno za grupu",
		addAnnotationDlg_labelGroup: "Grupa",
		addAnnotationDlg_labelCopiable: "Ova primjedba se može kopirati na drugi poslužitelj.",
		addAnnotationDlg_buttonLabel_save: "Spremi",

		/* Skip navigation */
		skipNavigation_title_main: "Skoči na glavni sadržaj",
		skipNavigation_title_menu: "Skoči na navigacijske gumbe",
		skipNavigation_label_main: "Skoči na glavni sadržaj",
		skipNavigation_label_menu: "Skoči na navigacijske gumbe",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Upravljaj timskim prostorima",
		manage_teamspace_pane_instance_hdr: "Timski prostori",
		manage_teamspace_pane_template_hdr: "Predlošci",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Klizanje naprijed",
		scroll_back: "Klizanje natrag",

		breadcrumb_separator_open: "Otvori čvor",
		breadcrumb_separator_close: "Zatvori čvor",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nema izabrane stavke.",

		/* eds */
		eds_url: "URL vanjske usluge podataka:",
		eds_request_timeout: "Timeout zahtjeva za uslugu (sekunde):",
		eds_is_required: "Spriječi korisnike u poduzimanju akcija koje mijenjaju vrijednosti svojstava kad EDS nije dostupan",

		/* eforms */
		eform_signing_pane_welcome: "Potpišite obrazac",
		eform_signing_button_label: "Potpiši",
		eform_signing_pane_delete: "Izbriši potpis",
		eform_signing_button_label_delete: "Izbriši",

		xtplugin_server_label: "URL IBM FileNet Workplace XT poslužitelja",
		xtplugin_server_hover: "Unesite URL poslužitelja na kojem je postavljen IBM FileNet Workplace XT, na primjer, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL IBM eClient poslužitelja",
		ecplugin_server_hover: "Unesite URL poslužitelja na kojem je postavljen IBM eClient, na primjer, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Akcije na velikom broju stavki mogu potrajati. Želite li nastaviti?",
		large_number_actions_continue_button: "Nastavak",

		large_items_actions_confirmation_question: "Akcije na velikim stavkama mogu potrajati duže vremena. Želite li nastaviti?",

		viewer_editproperties_title: "Potvrda",
		viewer_editproperties_title_warning: "Upozorenje",
		viewer_editproperties_save: "Spremi",
		viewer_editproperties_next: "Sljedeće",
		viewer_editproperties_reset: "Reset",
		viewer_editproperties_reset_hover: "Svi nespremljeni podaci resetirat će se na prethodno spremljene vrijednosti",
		viewer_editproperties_saveandgetnext: "Spremi pa dohvati sljedeće",
		viewer_editproperties_saveandgetnext_hover: "Automatski dohvati sljedeći dokument nakon spremanja promjena",
		viewer_editproperties_prompt_save_changes: "promijenili ste svojstva sljedećeg dokumenta<br>${0}<br><br>Želite li spremiti promjene?",
		viewer_editproperties_prompt_discard_changes: "promijenili ste svojstva sljedećeg dokumenta<br>${0}<br><br>Međutim, jedan ili više svojstava ima nevažeću vrijednost, tako da se promjene ne mogu spremiti. Možete ili ispravite neispravne vrijednosti ili odbaciti vaše promjene.<br>Želite li ispraviti neispravne vrijednosti prikazane u panelu svojstava?",
		viewer_comments_prompt_discard_changes: "Izmijenili ste komentare. Želite li spremiti promjene?",
		viewer_notelogs_prompt_discard_changes: "Promijenili ste napomene. Želite li spremiti promjene?",
		social_collaborated_version: "Verzija: ${0}",
		social_link_label: "Tko...",

		// social comments
		comments: "Komentari",
		comments_add_hint: "Pritisnite Enter da dodate vaše komentare.",
		comments_hint: "Unesite vaše komentare.",
		comments_label: "Pritisnite Enter ili Tab da spremite vaše komentare. Pritisnite Esc za opoziv.",
		comments_delete_confirmation: "Želite li izbrisati izabrani komentar?",
		comments_number: "Komentari: ${0}",
		comments_save_new: "Izmijenili ste komentare. Želite li zatvoriti prozor bez spremanja promjena?",

		notelogs: "Notelogs",
		notelogs_download: "Preuzmi",
		notelog_modify: "Spremi promjene",
		notelog_edit: "Uredi notelog",
		notelog_create_newVersion: "Kreiraj novu verziju noteloga",
		notelog_add_hint: "Unesite vaše komentare i pritisnite Enter za dodavanje.",
		notelog_hint: "Pritisnite Shift+Enter za pomak na idući red",
		notelog_add_placeholder: "Pritisnite Enter da dodate komentar u dnevnik napomena.",
		notelog_save_new: "Izmijenili ste dnevnik napomena. Želite li zatvoriti prozor bez spremanja promjena?",

		// P8 markings related
		cannot_remove_markings: "Nemate dozvolu za uklanjanje vrijednosti označavanja: {0}",

		// download count
		downloadcount: "Preuzimanja: {0}",
		downloadcount_single: "1 preuzimanje",
		downloadcount_multiple: "{0} preuzimanja",
		downloadcount_none: "Ovo još nitko nije preuzeo",

		// recommendations
		recommendations: "Sviđa mi se: {0}",
		recommendations_recommend: "Označi ovo sa 'sviđa mi se'",
		recommendations_unrecommend: "Označi ovo sa 'ne sviđa mi se'",
		recommendations_you: "Označili ste ovo sa 'sviđa mi se'",
		recommendations_you_and_another: "Vi i još 1 osoba ste označili ovo sa 'sviđa mi se'",
		recommendations_you_and_others: "Vi i {0} osoba ste označili ovo sa 'sviđa mi se'",
		recommendations_another: "1 osobi se ovo sviđa",
		recommendations_others: "{0} osoba se ovo sviđa",
		recommendations_none: "Ovo još nitko nije označio sa 'sviđa mi se'",

		// tags
		tags: "Oznake: ${0}",
		tags_delete: "Izbriši ${0}",
		tags_none: "Nema oznaka za prikaz.",
		tags_add: "Dodaj oznake:",
		tags_hint: "Pritisnite Enter da dodate vaše oznake.",
		tags_hover_help: "Navedite oznaku ili listu oznaka koje se mogu koristiti za traženje dokumenata s istom oznakom. Možete koristiti zarez (,), točku sa zarezom (;) ili razmak za odvajanje oznaka.",
		tags_hover_help_box: "Navedite oznaku ili listu oznaka odijeljenih zarezima, koje se mogu koristiti za traženje dokumenata s istom oznakom.",
		tags_no_access: "Nemate odgovarajuće dozvole za dodavanje oznaka.",

		//task scheduler pane
		taskPane_tooltip: "Otvori Pogled asinkronih zadataka",
		taskPane_tree: "Navigacijsko stablo okvira zadataka",
		taskPane_allTasks: "Svi zadaci",
		taskPane_scheduledTasks: "Raspoređeni zadaci",
		taskPane_recurringTasks: "Ponavljajući zadaci",
		taskPane_inProgressTasks: "Zadaci u toku",
		taskPane_completedTasks: "Dovršeni zadaci",
		taskPane_failedTasks: "Neuspješni zadaci",
		taskPane_disabledTasks: "Onemogućeni zadaci",
		taskPane_statusScheduled: "Raspoređen",
		taskPane_statusInProgress: "U toku",
		taskPane_statusCompleted: "Dovršeno",
		taskPane_statusFailed: "Neuspješno",
		taskPane_statusPaused: "Pauzirano",
		taskPane_noItemSelected: "Nema izabrane stavke",
		taskSchedulerPane_scheduleInformation: "Informacije rasporeda",
		taskSchedulerPane_loginInformation: "Informacije prijave",
		taskSchedulerPane_startImmediately: "Počni odmah",
		taskSchedulerPane_recurrence: "Ponavljanje",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_scheduleReport: "Rasporedi izvještaj",
		taskSchedulerPane_nameHoverHelp: "Unesite naziv zadatka.",
		taskSchedulerPane_descriptionHoverHelp: "Unesite opis zadatka. Opis vam treba pomoći kod razlikovanja zadataka.",
		taskSchedulerPane_startTimeHoverHelp: "Navedite kad želite da se zadatak izvede. Za izvođenje zadatka odmah, izaberite Pokreni odmah.",
		taskSchedulerPane_recurrenceHoverHelp: "Možete rasporediti zadatak da se izvodi s ponavljanjem.",
		taskSchedulerPane_endTimeHoverHelp: "Navedite kad želite da se zaustavi izvođenje zadatka. Zadatak se izvodi od raspoređenog vremena početka do raspoređenog vremena završetka.",
		taskSchedulerPane_usernameHoverHelp: "Za zadatke koji se ponavljaju morate unesti korisničko ime, da biste omogućili provjeru identiteta servisa kad se izvodi zadatak.",
		taskSchedulerPane_passwordHoverHelp: "Za zadatke koji se ponavljaju morate unesti lozinku navedenog korisnika, da biste omogućili provjeru identiteta servisa kad se izvodi zadatak.",
		taskSchedulerPane_notification: "Obavijest",
		taskSchedulerPane_emailAddress: "E-mail adresa",
		taskSchedulerPane_emailAddressHoverHelp: "Unesite e-mail adresu gdje želite primati obavijesti o statusu zadatka.",
		taskSchedulerPane_intervalHoverHelp: "Navedite vremenski period u kojem će se izvoditi ponavljanje zadatka. Možete postaviti interval u satima, danima, tjednima ili mjesecima.",
		taskSchedulerPane_scheduledStartTime: "Raspoređeno vrijeme početka",
		taskSchedulerPane_startTime: "Vrijeme početka",
		taskSchedulerPane_title: "Raspored",
		taskSchedulerPane_runNow: "Izvedi sad",
		taskSchedulerPane_runOnce: "Izvedi jednom",
		taskSchedulerPane_runAtSchedule: "Izvedi po rasporedu",
		taskSchedulerPane_repeats: "Ponavlja se",
		taskSchedulerPane_repeatsEvery: "Ponavlja se svaki",
		taskSchedulerPane_hourly: "sat",
		taskSchedulerPane_daily: "dnevno",
		taskSchedulerPane_weekly: "tjedno",
		taskSchedulerPane_monthly: "mjesečno",
		taskSchedulerPane_yearly: "godišnje",
		taskSchedulerPane_sunday: "N",
		taskSchedulerPane_monday: "P",
		taskSchedulerPane_tuesday: "U",
		taskSchedulerPane_wednesday: "S",
		taskSchedulerPane_thursday: "U",
		taskSchedulerPane_friday: "P",
		taskSchedulerPane_saturday: "N",
		taskSchedulerPane_starting: "Početni datum",
		taskSchedulerPane_after: "Nakon",
		taskSchedulerPane_ending: "Završni datum",
		taskSchedulerPane_times: "vrijeme(s)",
		taskSchedulerPane_days: "dan(a)",
		taskSchedulerPane_hours: "sat(i) u danu",
		taskSchedulerPane_interval: "Interval",
		taskSchedulerPane_endingDays: "Završetak (u danima)",
		taskSchedulerPane_never: "Nikad",
		taskSchedulerPane_categorization: "Kategorizacija",
		taskSchedulerPane_scheduleTask: "Rasporedi zadatak",
		taskInformationPane_details: "Detalji",
		taskInformationPane_errors: "Greške",
		taskInformationPane_taskInstances: "Instance zadatka",
		taskInformationPane_audits: "Revizije",
		taskInformationPane_results: "Rezultati",
		asyncTasks: "Asinkroni zadaci",

		//entry template pane
		search_all_entry_templates: "Pretraži sve predloške unosa.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Pregled potpunog sjedišta",
		mobilesite: "Pregled mobilnog sjedišta",
		profile: "Upravljanje profilom",
		office_template: "Office predložak:",
		select_office_template: "Izaberite Office predložak",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Izabrani dokumenti se ne mogu otvoriti u pregledniku pomoću akcije Spoji i razdvoji.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Preglednik konfiguriran za PDF i TIFF dokumente ne podržava akciju Spoji i razdvoji.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Zatražite od administratora da konfigurira preglednik za PDF i TIFF dokumente koji podržava akciju Spoji i razdvoji, na primjer Daeja ViewONE Virtual viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Izabrani PDF dokumenti se ne mogu otvoriti u pregledniku pomoću akcije Spoji i razdvoji.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Preglednik konfiguriran za PDF dokumente ne podržava akciju Spoji i razdvoji.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Zatražite od administratora da konfigurira preglednik za PDF dokumente koji podržava akciju Spoji i razdvoji, na primjer Daeja ViewONE Virtual viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Izabrani TIFF dokumenti se ne mogu otvoriti u pregledniku pomoću akcije Spoji i razdvoji.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Preglednik konfiguriran za TIFF dokumente ne podržava akciju Spoji i razdvoji.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Zatražite od administratora da konfigurira preglednik za TIFF dokumente koji podržava akciju Spoji i razdvoji, na primjer Daeja ViewONE Virtual viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Izabrani dokumenti se ne mogu otvoriti u pregledniku pomoću akcije Spoji i razdvoji.",
		document_builder_unsupported_documents_error_explanation: "Akcija Spoji i razdvoji funkcionira samo s PDF i TIFF dokumentima.",
		document_builder_unsupported_documents_error_userResponse: "Izaberite podržane dokumente i pokušajte ponovno.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Neki od izabranih dokumenata se ne mogu otvoriti u pregledniku pomoću akcije Spoji i razdvoji.",
		document_builder_some_unsupported_documents_error_explanation: "Akcija Spoji i razdvoji funkcionira samo s PDF i TIFF dokumentima otvorenim iz istog spremišta.",
		document_builder_some_unsupported_documents_error_userResponse: "Podržani dokumenti će se otvoriti u pregledniku.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Pojavila se greška kod prijave promijenjenog sadržaja.",
		document_builder_checkin_failed_explanation: "Preglednik je primio dojavu greške prilikom prijave promijenjenog sadržaja.",
		document_builder_checkin_failed_userResponse: "Zatražite da vaš sistemski administrator pregleda datoteke dnevnika poslužitelja Web aplikacija.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokument se ne može otvoriti.",
		no_viewer_to_view_error_explanation: "Sistemski administrator je blokirao gledanje ovog dokumenta. Ako trebate ovaj dokument, možete ga preuzeti.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Sadržaj se ne može izgraditi.",
		document_build_failed_userResponse: "Zatražite da vaš sistemski administrator pregleda datoteke dnevnika preglednika.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokument se ne može otvoriti u načinu za spajanje i razdvajanje.",
		document_builder_open_failed_userResponse: "Zatražite da vaš sistemski administrator pregleda datoteke dnevnika preglednika.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Sistem se ne može prebaciti na način za spajanje i razdvajanje.",
		document_builder_switch_failed_userResponse: "Zatražite da vaš sistemski administrator pregleda datoteke dnevnika preglednika.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenti",
		print_service_page_setup_tab_title: "Postav stranice",
		print_service_OD_print_tab_title: "Opcije pisača",
		print_service_status_merging: "Spajanje dokumenata...",
		print_service_status_converting: "Pretvaranje dokumenata...",
		print_service_status_formatting: "Formatiranje dokumenata za ispis...",
		admin_print_service_maximum_number_to_print: "Maksimalni broj dokumenata dozvoljenih za ispis:",
		admin_print_service_maximum_size_to_print: "Maksimalno dozvoljena količina podataka za ispis (u MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Navedite maksimalan broj dokumenata koje korisnici mogu odjednom ispisati. Defaultni maksimum je 50. Ako ne želite ograničiti ispis s brojem dokumenata, za ovo ograničenje postavite 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Ograničenje:</b> Ova postavka nije podržana na IBM Content Manager OnDemand.<br/><br/>Navedite maksimalnu količinu podataka koja se može ispisati korištenjem IBM Daeja ViewONE usluge ispisa.<br /><br />Ukupna veličina svakog izabranog dokumenta ne može biti veća od ovog iznosa.<br/><br/>Default ograničenje je 200 MB. Postavljanje ograničenja iznad 200 MB može utjecati na performanse. Ako ne želite ograničiti ispis s veličinom dokumenta, za ovo ograničenje postavite 0",
		// error printing
		print_service_error_printing: "Došlo je do greške za vrijeme ispisa.",
		print_service_error_printing_userResponse: "Zatražite vašeg administratora sistema da pregleda datoteke dnevnika servisa ispisa.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Izabrani dokumenti su preveliki za ispis",
		print_service_max_content_error_explanation: "Izabrani dokumenti premašuju ograničenje od ${0} MB podataka.",
		print_service_max_content_error_userResponse: "Izaberite manji broj dokumenata ili manje dokumente pa ponovno ispišite. Također možete kontaktirati svog sistemskog administratora da poveća maksimalnu ukupnu veličinu stavki koje možete odjednom ispisati na ovom desktopu.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Stavke se ne mogu ispisati.",
		print_service_max_number_selected_error_explanation: "Možete ispisati do ${0} stavki od jednom. Možete pokušati ispisati ${1} stavki. ",
		print_service_max_number_selected_error_userResponse: "Izaberite manje stavki i pokušajte ponovno ispisati stavke. Također možete kontaktirati svog sistemskog administratora da poveća maksimalan broj stavki koje možete odjednom ispisati na ovom desktopu.",
		print_service_max_number_selected_error_0: "maximum_number_of_items",
		print_service_max_number_selected_error_1: "number_of_items",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


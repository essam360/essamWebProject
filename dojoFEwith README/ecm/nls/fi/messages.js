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
		welcome_user: "Tervetuloa, ",
		about: "Tietoja",
		all: "Kaikki",
		help: "Ohje",
		user_session: "Käyttäjän istunto",
		user_session_for: "Käyttäjän istunto kohteessa ${0}",
		user_session_for_with_container: "Käyttäjän istunto kohteessa ${0} (${1})",
		tools: "Työkalut",
		login: "Kirjaudu sisään",
		logout: "Kirjaudu ulos",
		search: "Hae",
		saved_searches: "Tallennetut haut",
		content_analytics: "Analysoi sisältöä",
		reset: "Palauta",
		reset_hover: "Järjestelmä palauttaa aiemmin tallennetut arvot kaikkien välilehtien tallentamattomiin tietoihin.",
		reset_default: "Tyhjennä kaikki",
		reset_default_hover: "Tyhjentää kaikkien välilehtien Nykyinen nimiö -kentän.",
		locale: "Paikallistunnus:",
		up: "Ylös",
		down: "Alas",
		restore: "Palauta",
		maximize: "Suurenna",
		values_label: "Arvot",
		value_label: "Arvo:",
		path_label: "Polku:",
		new_label: "Uusi:",
		back_label: "Takaisin",
		clear: "Tyhjennä",
		set: "Määritä...",
		browse: "Selaa",
		work: "Työ",
		connect: "Muodosta yhteys",
		documents: "Dokumentit:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM ja IBM-logo ovat IBM Corporationin tavaramerkkejä, jotka on rekisteröity useilla hallintoalueilla maailmanlaajuisesti. Java ja kaikki Java-perustaiset tavaramerkit ja logot ovat Oraclen ja sen tytäryhtiöiden tavaramerkkejä tai rekisteröityjä tavaramerkkejä. Tähän sisältyy rajoitettu käyttöoikeus Oracle Outside In Technology -tekniikkaan, ja kyseistä tekniikkaa saa käyttää vain yhdessä tämän sovelluksen kanssa. Tämän Ohjelman käyttöä koskevat sen mukana toimitetun käyttöoikeussopimuksen ehdot.  Tämä käyttöoikeussopimus sijaitsee Ohjelman hakemistokansiossa tai kirjastossa, jonka nimi on License tai Non_IBM_License, tai se on toimitettu painettuna asiakirjana. Lue tämän sopimuksen ehdot huolellisesti, ennen kuin aloitat Ohjelman käytön. Käyttämällä Ohjelmaa sitoudut noudattamaan kyseisiä ehtoja. ",
		edit: "Muokkaa",
		cancel: "Peruuta",
		close: "Sulje",
		close_all: "Sulje kaikki välilehdet",
		close_others: "Sulje muut välilehdet",
		ok: "OK",
		yes: "Kyllä",
		no: "Ei",
		open: "Avaa",
		refresh: "Päivitä",
		refresh_cabinets: "Päivitä kaikki säilöt",
		delete_text: "Poista",
		export_config: "Vie kokoonpano",
		description: "Kuvaus",
		true_label: "Tosi",
		false_label: "Epätosi",
		error: "Virhe",
		error_reference_hover: "Etsi virheen lisätietoja osoitteesta www.ibm.com.",
		url_label: "URL-osoite",
		default_label: "Oletusarvo",
		ibm_label: "IBM",
		light_label: "Vaalea",
		dark_label: "Tumma",
		save: "Tallenna",
		saveAs: "Tallenna nimellä...",
		save_and_close: "Tallenna ja sulje",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ei mitään",
		Name: "Nimi",
		"${NAME}": "Nimi",
		mime_type: "MIME-laji",
		mime_type_contains_label: "MIME-laji sisältää",
		mime_type_header: "MIME-laji",
		mime_type_icon: "MIME-lajin kuvake",
		casesearch: "Asia",
		item: "Objekti",
		no_mime_type: "Tässä objektissa ei ole sisältöä.",
		items_selected: "${0} objektia on valittu.",
		requestor: "Pyynnön esittäjä",
		scheduledStartTime: "Ajoitettu aloitusaika",
		isRecurring: "Toistuva",
		weeks: "viikkoa",
		days: "päivää",
		hours: "tuntia",
		endTime: "Päättymisaika",
		username: "Käyttäjätunnus",
		password: "Salasana",
		serverURL: "Palvelimen URL-osoite",
		enable: "Ota käyttöön",
		disable: "Poista käytöstä",
		finish: "Valmis",
		previous: "Edellinen",
		next: "Seuraava",
		schedule: "Ajoitus",
		removeFromThisList: "Poista tästä luettelosta",
		status: "Tila",
		scheduledEndTime: "Ajoitettu lopetusaika",
		type: "Laji",
		mode: "Tila",
		startTime: "Aloitusaika",
		createdBy: "Tekijä",
		nextScheduledTime: "Seuraava ajoitettu aika",
		id: "Tunnus",
		duration: "Kesto",
		repeatCycle: "Esiintymistiheys",
		taskTypeName: "Tehtävän laji",
		to: "mihin",
		filter: "Suodatus:",
		error_message: "Virhesanoma",

        file_type: "Dokumenttilaji",
        word_template_name: "Word-mallipohjan nimi",
        excel_template_name: "Excel-mallipohjan nimi",
        powerpoint_template_name: "PowerPoint-mallipohjan nimi",
        template_description: "Mallipohjan kuvaus",
        action_add_template: "Lisää",
        action_change_template: "Muokkaa",      
        action_edit_template_properties: "Ominaisuudet",
        add_presentation_template: "Lisää esitysmallipohja",
    	add_spreadsheet_template: "Lisää laskentataulukkomallipohja",
    	add_doc_template: "Lisää dokumenttimallipohja",    	
    	file_type_doc_hover: "Määritä kelvollinen tekstinkäsittelydokumentin mallipohjatiedosto.<br><br>Kelvolliset MIME-lajit: ${0}",
    	file_type_doc_error: "Määritä kelvollinen tekstinkäsittelydokumentin mallipohjatiedosto.<br><br>Valittu dokumentin MIME-laji: ${0}<br><br>Kelvolliset MIME-lajit: ${1}",
    	file_type_presentation_hover: "Määritä kelvollinen esitysmallipohjatiedosto.<br><br>Kelvolliset MIME-lajit: ${0}",
    	file_type_presentation_error: "Määritä kelvollinen esitysmallipohjatiedosto.<br><br>Valittu dokumentin MIME-laji: ${0}<br><br>Kelvolliset MIME-lajit: ${1}",
    	file_type_spreadsheet_hover: "Määritä kelvollinen laskentataulukkomallipohjatiedosto.<br><br>Kelvolliset MIME-lajit: ${0}",
    	file_type_spreadsheet_error: "Määritä kelvollinen laskentataulukkomallipohjatiedosto.<br><br>Valittu dokumentin MIME-laji: ${0}<br><br>Kelvolliset MIME-lajit: ${1}",
    	office_online_only_one_template_error: "Voit valita vain yhden tiedoston.",
    	change_presentation_template: "Muokkaa esitysmallipohjaa",
    	change_spreadsheet_template: "Muokkaa laskentataulukkomallipohjaa",
    	change_doc_template: "Muokkaa dokumenttimallipohjaa",
    	change_button: "Muokkaa",
	    new_document_dialog_doc_title: "Uusi dokumentti",
	    new_document_dialog_presentation_title: "Uusi esitys",
	    new_document_dialog_spreadsheet_title: "Uusi laskentataulukko",
	    new_document_dialog_title_label: "Otsikko:",
	    new_document_dialog_title_hover: "Anna dokumentin otsikko.",
	    new_document_dialog_title_missing_message: "Otsikko on määritettävä.",
	    office_online_save_before_adding_templates_title: "Muutosten tallennus tietovarastoon",
	    office_online_save_before_adding_templates_error: "Et voi lisätä Office-mallipohjia, ennen kuin tallennat tekemäsi muutokset tietovarastoon. Valitse <b>Tallenna ja sulje</b> -vaihtoehto, avaa sitten tietovarasto uudelleen ja lisää Office-mallipohjat.",
	    copy_to_OOS_dialog_doc_title: "Uusi dokumentti",
	    office_online_checkin_cancelcheckout_message: "Dokumentti on muokattavana Microsoft Office Online -palvelussa. Dokumentin kuittaus sisään tai uloskuittauksen peruutus ei onnistu, kun dokumentti on avattuna Microsoft Office Online -palvelussa.",
	    new_document_classification: "Luokittelu:",
	    new_document_classification_help: "Palauttaa lähdedokumentin luokan, ominaisuudet ja mahdollisen pääkansion. Jos lähdedokumentilla on syöttömallipohja, se valitaan automaattisesti, kun dokumentti lisätään syöttömallipohjan perusteella. Lähdedokumentin ominaisuuksia käytetään oletusarvoina, mutta syöttömallipohjassa määritetty kansio ja luokka säilyvät.",
		new_document_classification_use_source_document: "Käytä lähdedokumenttia:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "${0} - lajin kuvake",
		repository_name_and_type: "${0} - nimi ja laji",
		select_class_label: "Valitse ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Tiedot-näkymä",
		detail_view_button: "Tiedot",
		magazine_view_button_tooltip: "Varastonäkymä",
		magazine_view_button: "Varasto",
		filmstrip_view_button_tooltip: "Filminauhanäkymä",
		filmstrip_view_button: "Filminauha",

		magazine_view_show: "Näytä varastonäkymässä",
		detail_view_show: "Näytä Tiedot-näkymässä",

		total_count_item: "objekti",
		total_count_items: "objektia",
		total_count_more_items: "Enemmän kuin ${0} objektia",

		extension_changed: "Valitsemasi tiedoston tunniste ei vastaa alkuperäistä.  Valitse toinen tiedosto.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Valittu katseluohjelma ei tue kaikkia tiedostolajeja. Jos tallennat tämän katseluohjelman vastaavuusmäärityksen, dokumentteja tarkasteltaessa voi ilmetä ongelmia.  On suositeltavaa, että valitset katseluohjelman, joka tukee kaikkia tiedostolajeja, kun Kaikki tiedostolajit -vaihtoehto on valittu.<br><br><b>Vihje:</b> Seuraavat katseluohjelmat tukevat kaikkia tiedostolajeja:<ul><li>Sovelmien katseluohjelma</li><li>Ajax-katseluohjelma</li><li>HTML-muunto</li><li>PDF-muunto</li><li>Web-selain</li></ul>",
		file_type_any: "Kaikki tiedostolajit",
		file_type_any_hover: "Valitse tämä vaihtoehto, jos haluat käyttää valittua katseluohjelmaa kaikkien dokumenttien tarkasteluun tiedostolajista riippumatta. Tämä vaihtoehto on tuettu seuraavissa katseluohjelmissa:<br><br><ul><li>Sovelmien katseluohjelma</li><li>Ajax-katseluohjelma</li><li>HTML-muunto</li><li>PDF-muunto</li><li>Web-selain</li></ul><br><br><b>Huomautus:</b> Jos haluat käyttää tiettyjä katseluohjelmia suurimman osan ajasta, kaikki luomasi tätä vaihtoehtoa käyttävät vastaavuusmääritykset on siirrettävä katseluohjelman vastaavuusmäärityksen loppuun. ",
		file_type_input: "Uusi tiedostolaji:",

		mime_type_input: "Uusi MIME-laji:",
		mime_type_input_invalid: "Uusi MIME-laji ei saa sisältää seuraavia merkkejä: ,",
		mime_type_available: "Käytettävissä olevat MIME-lajit",
		mime_type_selected: "Valitut MIME-lajit",
		file_type_input: "Uusi tiedostolaji:",
		file_type_input_invalid: "Uusi tiedostolaji ei saa sisältää seuraavia merkkejä: ,",
		file_type_available: "Käytettävissä olevat tiedostolajit",
		file_type_selected: "Valitut tiedostolajit",
		file_type_header: "Tiedostolaji",
		viewer: "Katseluohjelma:",
		viewer_viewer: "Katseluohjelma",
		viewer_view: "Näytä",
		viewer_preview: "Esikatselu",
		viewer_merge_and_split: "Yhdistä ja jaa",
		viewer_heading: "${0} – ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Vain esikatselu",
		preview_only_label: "(esikatselu)",
		preview_only_hover: "Tätä katseluohjelman vastaavuusmääritystä  käytetään vain, kun käyttäjä napsauttaa <b>Esikatselu</b>-painiketta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Tietovarasto ei tue selausta. Valitse toinen tietovarasto.",

		repository_community_teamspace_message: "Toinen tietovarasto on jo määritetty yhteisön kirjaston tietovarastoksi. Jos haluat käyttää aiemmin luotua tietovarastoa edelleen yhteisön kirjaston tietovarastona, valitse <b>Ei</b>-vaihtoehto ennen muutosten tallennusta. Tällöin tämä tietovarasto ei korvaa aiemmin luotua tietovarastoa.",

		favorites_empty: "Sinulla ei ole vielä suosikkeja.",
		syncItems_empty: "Sinulla ei ole vielä synkronoituja tiedostoja.",

		root_folder_id: "Pääkansion tunnus",
		unified_searches: "Tietovarastojen väliset haut:",
		max_results: "Tulosten määrä:",
		direct_retrieve_enabled: "Suoranouto:",
		itemTypesToDisplay: "Näytettävät objektilajit:",
		allItemTypes: "Kaikki objektilajit",
		include_attr_group_name: "Määriteryhmien kuvaukset määritteiden näyttönimissä:",
		admin_repcfg_include_attr_group_name_hover: "Oletusarvon mukaan määriteryhmän kuvaus sisältyy määriteryhmien määritenimiin. Näin käyttäjät näkevät, mihin määriteryhmään määriteryhmän määrite kuuluu, kun he käsittelevät määritteitä.<br>Käyttäjät voivat nähdä esimerkiksi seuraavan määriteryhmän määritteen nimen: Document Settings.Document Type.<br><br>Jos poistat tämän asetuksen käytöstä, vain määritteen kuvausta käytetään määriteryhmän määritteen nimenä.<br>Käyttäjät näkevät esimerkiksi seuraavan nimen: Dokumenttilaji.<br><br>Ilman määriteryhmän kuvausta käyttäjät eivät ehkä pysty päättelemään, onko Dokumenttilaji yksinkertainen määrite vai määriteryhmän määrite.",
		documentItemTypesOnly: "Vain dokumenttimallin objektilajit",
		object_store: "Objektisäilön symbolinen nimi:",
		object_store_display_name: "Objektisäilön näyttönimi:",
		teamspaceUpgradeMsg: "Ryhmätyötilat päivittyvät, kun tallennat tietovaraston kokoonpanon. Jos ryhmätyötiloja on useita, päivitys voi kestää useita minuutteja.",
		synchUpgradeMsg: "Tietovaraston synkronointimoduuli päivittyy, kun tallennat tietovaraston kokoonpanon.",
		protocol: "Yhteyskäytäntö:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "CMIS-tietovaraston tunnus:",
		cmis_url: "CMIS AtomPub -sidonnan palveludokumentin URL-osoite:",
		trace_level: "Jäljitystaso",
		trace_dir: "Jäljityshakemisto",
		temp_dir: "Tilapäinen hakemisto",
		show_document_location: "Näytä dokumentin sijainti",
		max_folders: "Kansioiden enimmäismäärä",
		afp_conversion: "AFP-muunto",
		line_conversion: "Rivimuotoisten tietojen muunto",
		max_hits: "Osumien enimmäismäärä",
		folder_search_expresssion: "Kansioiden hakulauseke",
		max_item_types: "Objektilajien enimmäismäärä",
		max_worklists: "Työluetteloiden enimmäismäärä",
		update_storage_collection: "Päivitä tallennuskokoelma",
		include_mime_types_in_search_results: "Sisällytä MIME-lajit hakutuloksiin",
		object_type: "Objektilaji",
		object_type_document: "Dokumentit",
		object_type_folder: "Kansiot",
		file_label: "Tiedosto:",
		plugin_jarfile_path_label: "JAR-tiedoston polku:",
		plugin_classfolder_path_label: "Luokkatiedoston polku:",
		plugin_classname_label: "Luokan nimi:",
		plugin_id_label: "Lisäosan tunnus:",
		class_label: "Luokka",
		configuration: "Kokoonpano",
		connect_repository: "Muodosta yhteys...",
		server_type: "Palvelimen laji",
		timeout_in_seconds: "Aikakatkaisu (sekunteina):",
		default_search_template: "Oletushaku",
		search_filtered_properties: "Haun kohteeksi kelpaavat ominaisuudet",
		property_contains_label: "Ominaisuus sisältää",
		class_contains_label: "Luokka sisältää",
		search_filtered_operators: "Hakuoperaattorit",
		default_search_results: "Haun tulokset",
		data_type: "Tietolaji",
		status_bar: "Tilarivi",
		operators_for: "Operaattorit kohteelle:",
		currentUser: "Nykyinen käyttäjä",
		nameContains: "Nimi sisältää merkit",
		searchFor: "Haettava kohde",
		server_autentication: "Palvelintodennus (OAuth 2.0 -todennus ja JWT)",
		standard_authentication: "Normaalitodennus (kolmiosainen OAuth2.0 -todennus)",
		developer_authentication: "Sovelluskehittäjän todennus",
		enterprise_id: "Yritystunnus:",
		public_key_id: "Julkisen avaimen tunnus:",
		private_key_path: "Yksityisen avaimen tiedostopolku:",
		server_user_email: "Palvelimen käyttäjän sähköpostiosoite",

		filter_builder_tooltip: "Määritä suodatin",

		// Launch bar
		launchbar_home: "Avaa pääsivu",
		launchbar_favorites: "Avaa suosikit",
		launchbar_browse: "Avaa selausnäkymä",
		launchbar_browse_popup: "Avaa avattava Selaa-luettelo",
		launchbar_search: "Avaa hakunäkymä",
		launchbar_search_popup: "Avaa avattava Haku-luettelo",
		launchbar_teamspaces: "Avaa Ryhmätyötilat-näkymä",
		launchbar_teamspaces_popup: "Avaa avattava Ryhmätyötilat-luettelo",
		launchbar_work: "Avaa Työ-näkymä",
		launchbar_work_popup: "Avaa avattava Työ-luettelo",
		launchbar_entry_templates: "Avaa syöttömallipohjien näkymä",
		launchbar_entry_templates_popup: "Avaa syöttömallipohjien avattava luettelo",
		launchbar_admin: "Avaa hallintanäkymä",

		admin_sync_server: "Sync Services",
		admin_settings: "Asetukset",
		admin_interface_text: "Nimiöt",
		admin_interface_text_desktop: "Työpöytä:",
		admin_desktops: "Työpöydät",
		admin_repositories: "Tietovarastot",
		admin_mobile: "Mobiiliversio",
		admin_menus: "Valikot",
		admin_reason_codes: "Luottamuksellisten tietojen poiston syyt",
		admin_plugins: "Lisäosat",
		admin_plugins_state_enabled: "Lisäosa on käytössä",
		admin_plugins_state_disabled: "Lisäosa on poissa käytöstä",
		admin_plugins_version: "Versio:",
		admin_plugins_version_heading: "Versio",
		admin_plugins_icon: "Lisäosan kuvake",
		admin_viewer_mapping_icon: "Katseluohjelman vastaavuusmäärityksen kuvake",
		admin_viewer_defs: "Katseluohjelman vastaavuusmääritykset",
		admin_viewer_dialog_title: "Vastaavuusmääritys",
		admin_viewer_dialog_new_title: "Uusi vastaavuusmääritys",
		admin_viewer_dialog_instructions: "Vastaavuusmääritys määrittää tietovaraston tiedostoissa käytettävän katseluohjelman. Voit määrittää eri katseluohjelmia erilajisille tiedostoille luomalla useita vastaavuusmäärityksiä. Voit määrittää vastaavuusmäärityksen joko MIME-lajin tai tiedoston tunnuksen avulla. Tiedoston tunnusten avulla tehdyt vastaavuusmääritykset määritetään dokumenttien nimien kanssa. Jos esimerkiksi tiedostolajiksi on määritetty gif, vastaavuusmääritys tiedostolajiin tehdään dokumenttien nimiin, jotka loppuvat tiedoston tunnukseen .gif",
		admin_desktop_viewer_defs: "Katseluohjelman vastaavuusmääritys:",
		admin_desktop_viewer_defs_hover: "Katseluohjelman vastaavuusmääritys määrittää tietovaraston erilajisten dokumenttien avauksessa käytettävän katseluohjelman.<br><br>Voit luoda uusia katseluohjelman vastaavuusmäärityksiä hallintatyökalun <b>Katseluohjelman vastaavuusmääritykset</b> -osassa.",
		admin_desktops_used: "Käytetään työpöydissä",
		admin_desktop_additional_settings: "Lisäasetukset:",
		admin_default_desktop: "Määritä oletustyöpöydäksi",
		admin_default_desktop_header: "Oletustyöpöytä",
		admin_layout_tab_title: "Asettelu",
		admin_desktop_icon: "Työpöydän kuvake",

		// Themes
		admin_themes: "Teemat",
		admin_theme_list_instructions: "Luomalla teeman voit helpottaa Web-työasemaohjelman mukautusta organisaatiota varten. Voit luoda useita teemoja, jos haluat käyttää eri värejä, fontteja tai logoja ympäristön eri työpöydillä.<br><br>Teeman luonnin jälkeen voit ottaa teeman käyttöön työpöydällä määrittämällä sen työpöydän <b>Ulkoasu</b>-välilehdessä.",
		admin_theme_instructions: "Luo teema, jotta voit hallita Web-työasemaohjelmassa näytettäviä värejä ja fontteja. Voit lisäksi muuttaa teeman avulla logoa, sovelluksen nimeä ja tekijänoikeustekstiä, jotka näytetään sisäänkirjaussivulla tai mainospalkissa.",
		admin_theme_heading: "Teema: <b>${0}</b>",
		admin_new_theme: "Uusi teema",
		admin_text_theme: "Teema",
		admin_delete_confirmation_themes: "Haluatko poistaa valitut teemat?\n${0} teema(a) on valittuna.",
		admin_theme_color: "Väri",
		admin_theme_text: "Teksti",
		admin_theme_solid: "Tasainen",
		admin_theme_gradient: "Liukuväri",
		admin_theme_box: "Box",
		admin_theme_color_label: "Väri ${0}:",
		admin_theme_name_invalid: "Teeman nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "Teeman tunnuksen on oltava yksilöllinen, eikä tunnusta voi muuttaa teeman tallennuksen jälkeen.<br><br>Tunnus saa sisältää vain aakkosnumeerisia merkkejä.",
		admin_theme_name_hover: "Nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automaattinen",
		admin_theme_logo_url_hover: "Anna logotiedoston URL-osoite. Jos logo on samassa Web-sovelluspalvelimessa kuin Web-työasemaohjelma, anna suhteellinen URL-osoite. Esimerkki: /mycustomizations/banner_logo.png<br><br>On suositeltavaa, että logon tausta on läpinäkyvä.",
		admin_theme_color_palette_title_heading: "Värivalikoima",
		admin_theme_color_palette_help_text: "Luo teeman värivalikoima käyttämällä heksadesimaaliarvoa tai värin valitsinta. Voit lisätä niin monta väriä kuin haluat.",
		admin_theme_color_add_button_label: "Lisää väri",
		admin_theme_color_remove_button_label: "Poista väri",
		admin_theme_global_title_heading: "Sovelluksen laajuiset elementit",
		admin_theme_global_font: "Fonttiperhe:",
		admin_theme_global_font_hover: "Valitse Web-työasemaohjelmassa käytettävä fontti. Fontit luetellaan ensisijaisuusjärjestyksessä: luettelossa seuraavana olevaa fonttia käytetään vain, jos edellistä fonttia ei ole asennettu työasemakoneeseen.",
		admin_theme_global_framework_color_label: "Ympäristön väri:",
		admin_theme_global_framework_color_hover: "Valitse seuraavissa elementeissä käytettävä väri:<ul><li>valintaikkunoiden otsikkorivit</li><li>valitun välilehden yläreunassa oleva korostusväri</li><li>sisältöluettelonäkymien kuvakkeet (Tiedot-näkymä, varastonäkymä ja filminauhanäkymä).</li></ul><br>Tätä väriä ei käytetä Web-työasemaohjelman osien erottimissa. Jos haluat muuttaa erottimien väriä, luo mukautetun CSS-tiedoston sisältävä lisäosa.",
		admin_theme_color_global_toolbar: "Yleisen työkalurivin väri:",
		admin_theme_color_global_toolbar_hover: "Jos lisäät Web-työasemaohjelmaan yleisen työkalurivin, valitse työkalurivin väri.<br><br><b>Vihje:</b> työkalurivi näytetään Web-työasemaohjelman yläosassa olevassa mainospalkissa, joten työkalurivin värin olisi hyvä täydentää mainospalkin väriä.",
		admin_theme_global_selected_color: "Valitun kohteen väri:",
		admin_theme_global_selected_color_hover: "Valitse väri, jota käytetään kohteissa, jotka ovat valittuina selausrakenteessa, hakurakenteessa tai sisältöluettelossa.<br><br>Valintaväri (väri, jota käytetään, kun käyttäjä vie kohdistimen kohteen kohdalle) johdetaan tästä väristä.",
		admin_theme_global_link_color: "Linkin väri:",
		admin_theme_global_link_color_hover: "Valitse Web-työasemaohjelman kaikissa napsautettavissa URL-osoitteissa käytettävä väri. Väriä käytetään esimerkiksi kaikissa Web-työasemaohjelmassa näytettävissä Lisätietoja-linkeissä.",
		admin_theme_login_title_heading: "Sisäänkirjaussivun elementit",
		admin_theme_page_background_label: "Sisäänkirjaussivun taustaväri:",
		admin_theme_login_page_background_hover: "Valitse sisäänkirjausnäytön taustaväri.",
		admin_theme_login_pane_background_label: "Sisäänkirjausnäytön taustaväri:",
		admin_theme_login_pane_background_hover: "Valitse sisäänkirjausnäytön väri. Värin olisi hyvä täydentää sisäänkirjaussivun taustaväriä.",
		admin_theme_text_color: "Tekstin väri:",
		admin_theme_login_pane_text_color_hover: "Valitse sisäänkirjausnäytön tekstin väri. Väriä käytetään esittelytekstissä ja kentän nimiöissä. Värin pitää olla sellainen, että tekstiä on helppo lukea sisäänkirjausnäytön taustaväriä vasten.",
		admin_theme_copyright_text: "Tekijänoikeusteksti:",
		admin_theme_copyright_text_hover: "Määritä, näytetäänkö tekijänoikeusteksti sisäänkirjausnäytössä.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Ei tekijänoikeustekstiä",
		admin_theme_banner_title_heading: "Mainospalkin elementit",
		admin_theme_text_icons_color: "Tekstin ja kuvakkeen väri:",
		admin_theme_icon_color_label: "Kuvakkeen väri:",
		admin_theme_shadow_label: "Varjo:",
		admin_theme_banner_text_icons_hover: "Valitse mainospalkissa olevan tekstin ja kuvakkeiden väri. Värin pitää olla sellainen, että tekstiä on helppo lukea mainospalkin taustaväriä vasten.",
		admin_theme_banner_product_name_label: "Tuotteen nimi:",
		admin_theme_banner_product_name_hover: "Kun luot työpöydän, voit määrittää sovellukselle mukautetun nimen. Jos et määritä mukautettua nimeä, tuotteen nimenä käytetään nimeä IBM Content Navigator. Määritä, käytetäänkö työpöydässä määritettyä sovelluksen nimeä vai käytetäänkö nimen sijasta kuvaa.",
		admin_theme_banner_product_name_desktop_defined_label: "Käytä nimeä työpöydästä",
		admin_theme_banner_product_name_image: "Käytä mukautettua logoa (URL)",
		admin_theme_background_color_label: "Taustaväri:",
		admin_theme_style_label: "Tyyli:",
		admin_theme_banner_color_hover: "Valitse sovelluksen yläosassa olevan mainospalkin väri.<br><br><b>Vihje:</b>Varmista, että mainospalkin tekstin väri on luettavissa mainospalkin taustaa vasten.",
		admin_theme_buttons_title_heading: "Painikkeet",
		admin_theme_navigation_title_heading: "Siirtymiselementit",
		admin_theme_navigation_icon_selected_label: "Valitun kuvakkeen väri:",
		admin_theme_navigation_background_hover: "Valitse ominaisuuden siirtymispalkin taustaväri.",
		admin_theme_navigation_icon_color_hover: "Valitse ominaisuuden siirtymispalkin kuvakkeiden väri. Kun oletusasettelu on käytössä työpöydällä, tämän värin tulisi poiketa ominaisuuden avattavan valikon taustaväristä. Kun perinteinen asettelu on käytössä työpöydällä, tämän värin tulisi poiketa ominaisuuden siirtymispalkin taustaväristä.",
		admin_theme_navigation_icon_selected_hover: "Valitse ominaisuuden siirtymispalkin valitun ominaisuuden väri.  Värin olisi hyvä täydentää kuvakkeiden väriä ja ominaisuuden siirtymispalkin taustaväriä.<br><br>Kun perinteinen asettelu on käytössä työpöydällä, tätä väriä käytetään ominaisuuden siirtymispalkin valintavärinä (näkyy osoitettaessa hiirellä).",
		admin_theme_button_background_color_hover: "Valitse painikkeiden taustaväri.",
		admin_theme_button_style_hover: "Valitse painikkeiden tyyli.",
		admin_theme_button_text_icon_color_hover: "Valitse painikkeiden tekstin ja kuvien väri.",
		admin_theme_no_logo_label: "Ei logoa",
		admin_theme_custom_logo_label: "Mukautettu logo (URL)",
		admin_theme_banner_type: "Mainospalkin täyttötyyli:",
		admin_theme_banner_type_hover: "Määritä mainospalkin väriksi tasainen väri tai liukuväri. Jos määrität liukuvärin mainospalkkiin, mainospalkin väri on tummin väri mainospalkissa.<br><br><b>Vihje:</b>Varmista, että mainospalkin tekstin väri on luettavissa mainospalkin taustaa vasten.",
		admin_theme_icon: "Teeman kuvake",
		admin_theme_buttons_and_links_title_heading: "Painikkeet, kentät ja linkit",
		admin_theme_button_style_label: "Painikkeen tyyli:",
		admin_theme_theme_style_label: "Teeman tyyli:",
		admin_theme_theme_style_hover: "Valitse tyyli, johon teema perustuu. Voit vaihtaa tyylin milloin tahansa, kun luot teeman tai muokkaat sitä. Jos vaihdat tyylin toiseksi, teeman asetukset palautuvat oletusarvoiksi.",
		admin_theme_accent_color_label: "Tehosteväri:",
		admin_theme_accent_color_hover: "Valitse väri, jota käytetään valintaikkunan yläpalkissa ja latauskuvakkeessa.",
		admin_theme_global_toolbar_text_color_label: "Yleisen työkalurivin tekstin väri:",
		admin_theme_global_toolbar_text_color_hover: "Jos lisäät Web-työasemaohjelmaan yleisen työkalurivin, valitse työkalurivin tekstille käytettävä väri.",
		admin_theme_banner_text_color_hover: "Valitse mainospalkissa olevan tekstin väri.",
		admin_theme_banner_icon_color_hover: "Valitse mainospalkissa olevien kuvakkeiden väri.",
		admin_theme_button_color_label: "Väri:",
		admin_theme_button_color_hover: "Valitse seuraavissa elementeissä käytettävä väri:<ul><li>valintaikkunoiden otsikkorivit</li><li>valitun välilehden yläreunassa oleva korostusväri</li><li>sisältöluettelonäkymien kuvakkeet (Tiedot-näkymä, varastonäkymä ja filminauhanäkymä).</li><li>Painikkeet, kentät ja linkit</li></ul>Tästä väristä johdetaan väri, jota käytetään, kun käyttäjä vie kohdistimen painikkeen päälle. Tätä väriä ei käytetä Web-työasemaohjelman osien erottimissa. Jos haluat muuttaa erottimien väriä, luo mukautetun CSS-tiedoston sisältävä lisäosa.",
		admin_theme_theme_style_col_header: "Teeman tyyli",

		admin_syncserver_consistency_checker: "Yhdenmukaisuuden tarkistus:",
		admin_syncserver_consistency_checker_hover: "Aja yhdenmukaisuuden tarkistus ja varmista, että synkronointipalvelujen tietokannassa on nykyiset tiedot kunkin palvelimessa olevan kohteen tilasta. Aja yhdenmukaisuuden tarkistus esimerkiksi Sync Services -palvelun tietokannan käyttökatkoksen jälkeen, jotta saat tietoja tietovarastossa käyttökatkoksen aikana päivitetyistä dokumenteista.",
		admin_syncserver_consistency_checker_button: "Aja yhdenmukaisuuden tarkistus",
		admin_syncserver_consistency_checker_started: "Aloitettu:",
		admin_syncserver_consistency_checker_ended: "Lopetettu:",
		admin_syncserver_consistency_checker_duration: "Kesto:",
		admin_syncserver_consistency_checker_items_processed: "Käsitellyt synkronointikohteet:",
		admin_syncserver_consistency_checker_items_processed_success: "Onnistuneesti käsitellyt synkronointikohteet:",
		admin_syncserver_consistency_checker_items_discovered: "Tunnistetut uudet tietovarastokohteet:",
		admin_syncserver_consistency_checker_change_updates: "Päivitykset yhteensä:",
		admin_syncserver_consistency_checker_state: "Tila:",
		admin_syncserver_consistency_checker_state_done: "Valmis",
		admin_syncserver_consistency_checker_state_running: "Ajossa",
		admin_syncserver_consistency_checker_user: "Lähettäjä:",
		admin_syncserver_consistency_checker_scheduled: "Ajoitettu:",

		admin_syncserver_dbcleanup: "Tietokannan puhdistus",
		admin_syncserver_dbcleanup_hover: "Poista kaikki käyttämättömät laitteet ja objektit, joita ei enää synkronoida tietokannasta, ajamalla tietokannan puhdistustyökalu.",
		admin_syncserver_dbcleanup_button: "Tietokannan puhdistus",
		admin_syncserver_dbcleanup_state_done: "Valmis",
		admin_syncserver_dbcleanup_state_running: "Ajossa",
		admin_syncserver_dbcleanup_started: "Aloitettu:",
		admin_syncserver_dbcleanup_ended: "Lopetettu:",
		admin_syncserver_dbcleanup_state: "Tila:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Poistetut tietovarastot:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Poistettu synkronoitu objekti:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Poistetut laitteet:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Vanhentuneet laitteet:",

		admin_syncserver_publicSyncUrl: "Sync Services -palvelun julkinen URL-osoite:",
		admin_syncserver_publicSyncUrl_hover: "Määritä URL-osoite, jonka avulla tietovarastot voivat viestiä IBM Content Navigator -ohjelman Sync Services -palvelujen kanssa. URL-osoitteen oletusmuoto on http://synkronoinnin_julkinen_URL-osoite:portin_numero/sync/notify.",

		admin_syncserver_managed: "Synkronointityöasemaohjelman asetukset:",
		admin_syncserver_managed_hover: "Käyttäjät eivät voi muuttaa näitä asetuksia IBM Content Navigator Sync -työasemaohjelmassa.",
		admin_syncserver_managed_subfolder: "Synkronoitavat kansiotasot",
		admin_syncserver_managed_subfolder_hover: "Määritä käyttäjän synkronoitavaksi valitseman kansion kanssa synkronoitavien kansioiden enimmäismäärä. Jos käyttäjä määrittää esimerkiksi kolme kansiotasoa, käyttäjän synkronoima kansio ja kaksi alikansiotasoa synkronoidaan.<br><br>Varmista, että ympäristö on mitoitettu siten, että se tukee tällä asetuksella luotavaa synkronointiliikenteen määrää.",
		admin_syncserver_managed_subfolder_all: "Kaikki alikansiot",
		admin_syncserver_managed_subfolder_none: "Ei alikansioita",
		admin_syncserver_managed_subfolder_no_more: "Rajoitetut tasot",
		admin_syncserver_managed_subfolder_levels: "kansiota",
		admin_syncserver_managed_schedule: "Synkronointiaikataulu",
		admin_syncserver_managed_schedule_hover: "Varmista, että ympäristö on mitoitettu siten, että se tukee synkronointiaikataululla luotavaa synkronointiliikenteen määrää.<br><br>Enimmäisväli on 24 tuntia eli 1 440 minuuttia.<br><br>Synkronointiaikataulun voi ohittaa työasemaohjelman <b>Synkronoi nyt</b> -valinnalla.",
		admin_syncserver_managed_schedule_manual: "Synkronoi manuaalisesti",
		admin_syncserver_managed_schedule_continuous: "Synkronoi jatkuvasti",
		admin_syncserver_managed_schedule_every: "Synkronoi määrätyin välein",
		admin_syncserver_managed_schedule_minutes: "minuuttia",
		admin_syncserver_managed_schedule_hours: "tuntia",

		// redaction codes
		admin_new_reason_code: "Uusi luottamuksellisten tietojen poiston syy",		
		admin_reason_code_name_invalid: "Luottamuksellisten tietojen poiston syyn nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Kuvaus ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Kuvaus ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Kuvaus:",
		admin_reason_code_applications_hover: "Niiden Datacap-sovellusten luettelo, jotka viittaavat tähän luottamuksellisten tietojen poiston syyhyn.",
		admin_reason_code_applications: "Datacap-sovellukset",
		admin_delete_confirmation_reason_codes: "Haluatko poistaa valitut luottamuksellisten tietojen poiston syyt?",
		admin_delete_confirmation_reason_code: "Haluatko poistaa valitun luottamuksellisten tietojen poiston syyn?",
		admin_reason_code_heading: "Luottamuksellisten tietojen poiston syy: <b>${0}</b>",
		admin_reason_code_list_instructions: "Luottamuksellisten tietojen poiston syyt osoittavat, miksi arkaluonteisia tietoja suojataan peittämällä ne näytössä. Kukin syy yksilöi yhden arkaluonteisten tietojen lajin, joka on piilotettu tavallisilta käyttäjiltä.",
		admin_reason_code_instructions: "Voit luoda luottamuksellisten tietojen poiston syyn kullekin arkaluonteisten tietojen lajille. Sitten voit käyttää syytä luottamuksellisten tietojen poistokäytännössä määrittämään, kuka voi nähdä tiedot ja kuka voi määrittää tai muokata luottamuksellisten tietojen poistoja.",
		admin_reason_code_applications_label: "Datacap-sovellukset",
		admin_reason_code_repositories: "Tietovarastot",
		admin_reason_code_repositories_label: "Tietovarastot",
		admin_reason_code_repositories_hover: "Niiden ICN-tietovarastojen luettelo, jotka viittaavat tähän luottamuksellisten tietojen poiston syyhyn.",
		admin_reason_code_repositories_default_value: "Ei määritetty",
		admin_reason_code_description_label: "Kuvaus",
		admin_reason_code_applications_default_value: "Ei määritetty",
		admin_redaction_reasons: "Luottamuksellisten tietojen poiston syyt",
		admin_redactions: "Roolipohjaiset luottamuksellisten tietojen poistot",
		admin_redactions_policies_roles: "Käytännöt ja roolit",
		admin_reasons: "Syyt",
		admin_reason_code_id: "Tunnus",
		admin_reason_code_id_hover: "Tunnusta ei voi muokata.  Sen voi kopioida leikepöydälle",
		// Role based administration
		admin_rba: "Roolipohjainen työpöytähallinta",
		admin_rba_mobile_access_enabled: "Tätä työpöytää voi käyttää mobiililaitteella.",
		admin_rba_mobile_access_disabled: "Tätä työpöytää ei voi käyttää mobiililaitteella.",
		admin_rba_confirm_delete_multiple: "Haluatko poistaa valitut hallintaroolit?",
		admin_rba_confirm_delete_single: "Haluatko poistaa valitun hallintaroolin?",
		admin_rba_delete_multi_role_desktop: "Vähintään yksi valituista rooleista on määritetty työpöytään. Roolit on poistettava työpöydistä, ennen kuin roolit voi poistaa.",
		admin_rba_delete_single_role_desktop: "Valitsemasi rooli on määritetty työpöytään ${0}. Rooli on poistettava työpöydästä, ennen kuin voit poistaa roolin.",
		admin_desktop: "Työpöytä",
		admin_rba_instructions: "Voit luoda ja hallita työpöydän hallintarooleja, jotka liittävät työpöydän pääkäyttäjille määritettyinä olevat käyttöoikeudet.",
		admin_rba_not_used: "Rooli ${0} ei ole käytössä yhdessäkään työpöydässä.",
		admin_rba_desktops: "<b>Roolia ${0} käytetään seuraavissa työpöydissä:</b>",
		admin_rba_new_role: "Uusi rooli",
		admin_rba_name_invalid: "Hallintaroolin nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Kuvaus ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Kuvaus ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Kuvaus:</b> ${0}",
		admin_rba_membership: "Jäsenyys",
		admin_rba_general_priv: "Yleiset",
		admin_rba_appearance_priv: "Ulkoasu",
		admin_rba_desktop_config_priv: "Työpöydän kokoonpanon määritys",
		admin_rba_app_name_priv: "Sovelluksen nimi",
		admin_rba_theme_priv: "Teema",
		admin_rba_viewer_map_priv: "Katseluohjelman vastaavuusmääritys",
		admin_rba_merge_split_priv: "Yhdistä ja jaa",
		admin_rba_sync_svc_priv: "Sync Services",
		admin_rba_menus_priv: "Valikot",
		admin_rba_edit_svc_priv: "Edit Services",
		admin_rba_toolbars_priv: "Työkalurivit",
		admin_rba_ctx_menus_priv: "Pikavalikot",
		admin_rba_office_ribbon_priv: "MS Office -valintanauhan komennot",
		admin_rba_office_menues_priv: "MS Office -pikavalikot",
		admin_rba_addl_settings_priv: "Lisäasetukset",
		admin_rba_mobile_priv: "Mobiiliversio",
		admin_rba_add_doc_dlg_priv: "Dokumentin lisäysvalintaikkuna",
		admin_rba_doc_mgmt_priv: "Dokumentinhallinta",
		admin_rba_def_redaction_priv: "Luottamuksellisten tietojen poiston oletusasetus",
		admin_rba_add_photos_priv: "lisätä valokuvia kamerasta ja valokuvakirjastosta",
		admin_rba_time_stamp_priv: "Aikaleima",
		admin_rba_add_docs_folders_priv: "lisätä dokumentteja ja luoda kansioita tietovarastoon",
		admin_rba_open_docs_priv: "avata dokumentteja muissa sovelluksissa.",
		admin_rba_office_config_priv: "Office-kokoonpano",
		admin_rba_tab_label_priv: "IBM ECM -välilehtinimiö",
		admin_rba_feature_sel_priv: "Ominaisuuksien valinta",
		admin_rba_general_config_priv: "Yleinen kokoonpano",
		admin_rba_favorites_priv: "Suosikit",
		admin_rba_add_options_priv: "Lisää asetuksia Muokkaa-ryhmään",
		admin_rba_browse_priv: "Selaa",
		admin_rba_outlook_int_priv: "Outlook-integrointi",
		admin_rba_search_priv: "Hae",
		admin_rba_layout_priv: "Asettelu",
		admin_rba_case_priv: "Asia",
		admin_rba_desktop_feat_priv: "Työpöydän ominaisuudet",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Näkyvissä olevat ominaisuudet",
		admin_rba_branding_priv: "Tuotteistus",
		admin_rba_home_priv: "Pääsivu",
		admin_rba_main_color_priv: "Pääväri",
		admin_rba_sec_color_priv: "Toissijainen väri",
		admin_rba_teamspaces_priv: "Ryhmätyötilat",
		admin_rba_rbr_priv: "Roolipohjainen luottamuksellisten tietojen poisto",
		admin_rba_et_mgr_priv: "Syöttömallin hallinnoija",
		admin_rba_policies_roles_priv: "Hallitse käytäntöjä ja rooleja",
		admin_rba_work_priv: "Työ",
		admin_rba_reasons_priv: "Syykoodit",
		admin_rba_tasks_priv: "Asynkroniset tehtävät",
		admin_rba_auth_priv: "Todennus",
		admin_rba_all_privs: "Kaikki valtuudet",
		admin_rba_some_privs: "Joitakin valtuuksia",
		admin_rba_no_privs: "Ei valtuuksia",
		admin_add_users_groups_priv: "Lisää käyttäjiä ja ryhmiä",
		admin_url_features_priv: "Hallitse URL-ominaisuuksia",
		admin_plugin_features_priv: "Hallitse lisäosien ominaisuuksia",
		admin_addl_components_priv: "Lisäkomponentit",
		admin_global_toolbar_priv: "Yleinen työkalurivi",
		admin_status_bar_priv: "Tilarivi",
		admin_refresh_message: "Voit käyttää päivitettyjä tietoja päivittämällä ensin selaimen näkymän.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Voit käyttää päivitettyä oletustyöpöytää päivittämällä ensin selaimen näkymän.",
		admin_desktop_refresh_message: "Voit käyttää päivitettyä työpöytää päivittämällä ensin selaimen näkymän.",
		admin_action_open: "Avaa",
		admin_action_edit: "Muokkaa",
		admin_action_copy: "Kopioi",
		admin_action_delete: "Poista",
		admin_action_copy: "Kopioi",
		admin_action_new: "Luo uusi",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Tämä tunnus on jo käytössä. Määritä yksilöllinen tunnus.",

		admin_searchable_properties_for: "Haun kohteeksi kelpaavat ominaisuudet kohteelle:",
		admin_repository_new: "Uusi tietovarasto",
		admin_desktop_new: "Uusi työpöytä",
		admin_desktop_file_documents: "Pyydä käyttäjiä tallentamaan uudet dokumentit ja kansiot kansioon",
		admin_desktop_file_documents_hover: "Valitse tämä asetus, jos haluat edellyttää, että käyttäjät valitsevat kansion, kun he lisäävät objekteja tietovarastoon. Jos et valitse tätä vaihtoehtoa, käyttäjät voivat lisätä dokumentteja (IBM FileNet P8) tai dokumentteja ja kansioita (IBM Content Manager) tallentamatta niitä kansioon.",
		admin_desktop_show_security_tab: "Näytä suojausasetukset toiminnoissa lisäyksen ja tarkistuksen aikana",
		admin_desktop_show_security_hover: "<b>Vain IBM FileNet P8 -käyttäjät.</b>  Valitse tämä vaihtoehto, jos haluat, että käyttäjät voivat muokata dokumenttien ja kansioiden suojausta, kun he lisäävät tai kuittaavat sisään objekteja tähän työpöytään.",
		admin_desktop_configure_security_inheritance: "Salli käyttäjien määrittää kansioiden periytyviä suojausasetuksia",
		admin_desktop_configure_security_inheritance_hover: "<b>Vain IBM FileNet P8 -käyttäjät.</b>  Valitse tämä vaihtoehto, jos haluat, että käyttäjät voivat mukauttaa objektien käyttöä kansiossa ohjaamalla kansioiden periytyviä suojausasetuksia. Jos valitset tämän vaihtoehdon, käyttäjät voivat määrittää, voivatko käyttäjät tai ryhmät periä suojausasetuksia seuraavista kohteista:<ul><li>Kansiosta</li><li>Kansiosta ja sen välittömistä alikansioista</li><li>Kansiosta ja kaikista sen alikansiosta</li></ul>",
		admin_desktop_appearance: "Ulkoasu",
		admin_desktop_appearance_instruction: "Voit mukauttaa työpöydän ulkoasua muuttamalla työpöydän sisäänkirjaussivua ja mainospalkkia.",
		admin_desktop_layout: "Asettelu:",
		admin_desktop_layout_hover: "Asettelu määrittää Web-työasemaohjelmassa näkyvät ominaisuudet ja Web-työasemaohjelman sisällön järjestelyn.<br><br><b>Vihje:</b> Voit luoda mukautettuja asetteluja luomalla lisäosia. Lisäosa on rekisteröitävä hallintatyökalussa ennen mukautetun asettelun valintaa.",
		admin_desktop_layout_default: "Oletus",
		admin_desktop_layout_custom: "Mukautettu",
		admin_desktop_enable_workflow_email: "Ota tämä työpöytä käyttöön FileNet P8 -käsittelyreitin sähköposti-ilmoituksessa",
		admin_desktop_enable_workflow_email_hover: "Vain FileNet P8 -käyttäjät. Valitse tämä asetus, jos haluat, että käyttäjät voivat avata Web-työasemaohjelman Process Engine -ohjelman luomiin sähköposti-ilmoituksiin sisältyvistä URL-osoitteista.<br /><br />Jos et ota tätä asetusta käyttöön yhdessäkään työpöydässä, käyttäjät eivät voi kirjautua Web-työasemaohjelmaan ilmoituksissa olevista URL-osoitteista.<br /><br />Jos otat tämän asetuksen käyttöön useissa työpöydissä, ja useampi kuin yksi työpöytä täyttää ilmoituksen URL-osoitteessa määritetyt ehdot, Web-työasemaohjelma käyttää ensimmäistä ehdot täyttävää työpöytää. ",
		admin_desktop_prevent_create_new_search: "Estä käyttäjiä luomasta hakuja",
		admin_desktop_prevent_create_new_search_hover: "Tällä asetuksella voit rajoittaa käyttäjien toimintaa siten, että he voivat käyttää vain aiemmin luotuja hakuja ja etteivät he voi luoda rajattomia hakuja, joita ei ehkä optimoida.</br></br>Tämä asetus ei vaikuta ryhmätyötiloihin. Hakujen luontioikeutta ryhmätyötilassa ohjataan käyttäjälle tietyssä ryhmätyötilassa määritetyn roolin perusteella.",
		admin_desktop_prevent_create_new_unified_search: "Estä käyttäjiä luomasta tietovarastojen välisiä hakuja",
		admin_desktop_prevent_create_new_unified_search_hover: "Tällä asetuksella voit rajoittaa käyttäjien toimintaa siten, että he voivat käyttää vain aiemmin luotuja tietovarastojen välisiä hakuja ja etteivät he voi luoda rajattomia tietovarastojen välisiä hakuja, joita ei ehkä optimoida.",
		admin_desktop_hide_entry_template_not_found_warning: "Piilota varoitus, joka tulee näkyviin, kun liittyvää syöttömallipohjaa ei löydy",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Valitse tämä vaihtoehto, jos haluat piilottaa varoitussanoman, joka näkyy, kun objektin ominaisuuksia muokataan ja objektiin liittyvää syöttömallipohjaa ei löydy.",
		admin_desktop_show_class_role_security_selection: "Salli käyttäjien määrittää roolipohjainen suojaus syöttömallipohjissa",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Vain IBM FileNet P8 -käyttäjät.</b> Valitse tämä vaihtoehto, jos haluat, että käyttäjät määrittävät syöttömallipohjat käyttämään roolipohjaista suojausta, kun dokumenteille tai kansioille asetetaan suojaus käyttämällä syöttömallipohjia. Jos valitset tämän vaihtoehdon, syöttömallipohjan muokkaajat voivat määrittää, käytetäänkö roolin suojausobjekteja syöttömallipohjan määritykseen.",
		admin_desktop_show_primary_multi_part: "Avaa vain ensisijainen dokumentti katseluohjelmassa",
		admin_desktop_show_primary_multi_part_hover: "<b>Vain IBM FileNet P8 -käyttäjät.</b> Valitse tämä vaihtoehto, jos haluat, että vain ensisijainen dokumentti avataan katseluohjelmassa. Dokumenteissa voi olla useita niihin liittyviä tiedostoja. Tämä vaihtoehto avaa vain dokumenttiin liittyvän ensisijaisen tiedoston.",
		admin_desktop_redaction_save_mode: "Luottamuksellisten tietojen poiston oletusasetus:",
		admin_desktop_redaction_save_mode_hover: "Valitse ViewONE Virtual -katseluohjelman oletustallennustila, jota käytetään luottamuksellisten tietojen poiston yhteydessä:</br>* Pyydä aina käyttäjää valitsemaan: valintaikkuna tulee näkyviin siirryttäessä luottamuksellisten tietojen poistotilaan, ja käyttäjä voi valita, kuitataanko sisään uusi versio, luodaanko uusi dokumentti vai ladataanko sisältö.</br>* Kuittaa sisään uutena versiona: sisältö, josta on poistettu luottamukselliset tiedot, tallentuu aina nykyisen dokumentin uudeksi versioksi.</br>* Tallenna täysin uutena dokumenttina: sisältö, josta on poistettu luottamukselliset tiedot, tallentuu täysin uutena dokumenttina.</br>* Lataa ja tallenna työasemaan: sisältö, josta on poistettu luottamukselliset tiedot, tallentuu työasemajärjestelmään.",
		admin_desktop_redaction_save_mode_user_select: "Pyydä aina käyttäjää valitsemaan",
		admin_desktop_redaction_save_mode_new_version: "Kuittaa sisään uutena versiona",
		admin_desktop_redaction_save_mode_new_document: "Tallenna täysin uutena dokumenttina",
		admin_desktop_redaction_save_mode_local_content: "Lataa ja tallenna työasemaan",

		admin_desktop_document_add_mode: "Dokumenttien lisäysvalintaikkuna:",
		admin_desktop_document_add_mode_hover: "Määritä IBM Content Navigator -ohjelmassa luotujen dokumenttien lisäyksessä käytettävä lisäysvalintaikkuna:<ul><li>Uusi dokumentti, josta luottamukselliset tiedot on poistettu pysyvästi</li><li>Uusi yhdistetty ja jaettu dokumentti</li><li>Uusi Microsoft Office -dokumentti</li><li>Uusi Edit Service -dokumentti</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Lisää dokumentti",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Lisää dokumentti syöttömallipohjan avulla",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Yhdistä ja jaa:",
		admin_desktop_merge_and_split_enable_hover: "Määritä, haluatko, että tämän työpöydän käyttäjät voivat yhdistää ja jakaa dokumentteja tuetun katseluohjelman avulla.",

		admin_desktop_merge_and_split_show_checkin: "Kehota käyttäjiä antamaan ominaisuuksien arvot, kun he kuittaavat dokumentin muutokset sisään",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Jos valitset tämän vaihtoehdon, sisäänkuittausvalintaikkuna tulee näkyviin, kun käyttäjät kuittaavat sisään dokumentin muutoksia Yhdistä ja jaa -tilassa.",

		admin_desktop_available_categories: "Käytettävissä olevat ominaisuudet",
		admin_desktop_selected_categories: "Valitut ominaisuudet",

		admin_layout_banner_title: "Mainospalkki- ja sisäänkirjaussivu",
		admin_layout_title: "Asettelu",

		admin_desktop_application_name: "Sovelluksen nimi:",
		admin_desktop_application_name_hover: "Määritä mainospalkissa näkyvä sovelluksen nimi.<br><br>Vihje: Määritä sovelluksen nimi muille kielille Nimiöt/Työpöytänimiöt-välilehdessä.",
		admin_desktop_theme: "Teema:",
		admin_desktop_theme_hover: "Määritä, käytetäänkö työpöydässä IBM Content Navigator -oletusteemaa vai työpöydän mukautettua teemaa. Jos haluat käyttää mukautettua teemaa, luo teema hallintatyökalun <b>Teemat</b>-osassa.",
		admin_desktop_login_logo: "Sisäänkirjaussivun logo:",
		admin_desktop_login_logo_hover: "Jos haluat muuttaa sisäänkirjaussivulla näkyvää logoa, voit määrittää logotiedoston URL-osoitteen.  On kuitenkin suositeltavaa käyttää mukautettua teemaa logon muuttoon.",
		admin_desktop_login_logo_url_hover: "Anna logotiedoston URL-osoite. Jos logo on samassa Web-sovelluspalvelimessa kuin Web-työasemaohjelma, anna suhteellinen URL-osoite. Esimerkki: /mycustomizations/login_logo.png<br><br>Logo saa olla enintään 200 kuvapistettä leveä ja 150 kuvapistettä korkea.<br><br>On suositeltavaa, että logon tausta on läpinäkyvä.",
		admin_desktop_banner_logo: "Mainospalkkilogo:",
		admin_desktop_banner_logo_hover: "Jos haluat muuttaa mainospalkissa näkyvää logoa, voit määrittää logotiedoston URL-osoitteen.  On kuitenkin suositeltavaa käyttää mukautettua teemaa logon muuttoon.",
		admin_desktop_banner_logo_url_hover: "Anna logotiedoston URL-osoite. Jos logo on samassa Web-sovelluspalvelimessa kuin Web-työasemaohjelma, anna suhteellinen URL-osoite. Esimerkki: /mycustomizations/banner_logo.png<br><br>Logo saa olla enintään 72 kuvapistettä leveä ja 36 kuvapistettä korkea.<br><br>On suositeltavaa, että logon tausta on läpinäkyvä.",
		admin_desktop_banner_background_color: "Mainospalkin taustaväri:",
		admin_desktop_banner_background_color_hover: "Jos haluat muuttaa mainospalkin taustaväriä, voit määrittää mukautetun värin.  On kuitenkin suositeltavaa käyttää mukautettua teemaa mainospalkin värin muuttoon.",
		admin_desktop_banner_background_color_custom_hover: "Määritä sovelluksen mainospalkin väri heksadesimaalivärinä.",
		admin_desktop_banner_application_name_color: "Sovelluksen nimen tekstin väri:",
		admin_desktop_banner_application_name_color_hover: "Jos haluat muuttaa sovelluksen nimen väriä, voit määrittää mukautetun värin.  On kuitenkin suositeltavaa käyttää mukautettua teemaa sovelluksen nimen värin muuttoon.",
		admin_desktop_banner_application_name_color_custom_hover: "Määritä sovelluksen nimen väri heksadesimaalivärinä.",
		admin_desktop_banner_menu_color: "Mainospalkin kuvakkeen väri:",
		admin_desktop_banner_menu_color_hover: "Jos muutat mainospalkin taustaväriä, joudut ehkä muuttamaan mainospalkin kuvakkeiden värimallia, jotta kuvakkeet näkyvät paremmin.  Määritä, näytetäänkö mainospalkin kuvakkeiden vaaleat vai tummat versiot.<br><br>On kuitenkin suositeltavaa käyttää mukautettua teemaa kuvakkeiden värin muuttoon.",
		admin_desktop_login_page_content: "Sisäänkirjaussivun sisältö:",
		admin_desktop_login_page_content_hover: "Jos haluat näyttää sisäänkirjaussivulla lisätietoja, kuten tiedotteita järjestelmän käyttökatkoista tai tietoja siitä, mistä käyttäjät voivat saada apua käyttäjätunnuksiin ja salasanoihin liittyvissä ongelmissa, voit määrittää näytettävän sisällön URL-osoitteen.",
		admin_desktop_login_page_content_url_hover: "Anna sisäänkirjaussivun sisällön URL-osoite. Jos sisältö on samassa Web-sovelluspalvelimessa kuin Web-työasemaohjelma, anna suhteellinen URL-osoite. Esimerkki: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Salasanasäännöt:",
		admin_desktop_password_rules_hover: "Jos haluat antaa käyttäjille salasanojen luontiohjeita, kuten tietoja merkkirajoituksista tai merkkien vähimmäismäärästä, voit määrittää salasanasäännöt sisältävän sivun URL-osoitteen.",
		admin_desktop_password_rules_url_hover: "Anna salasanasääntöjen sisällön URL-osoite. Jos sisältö on samassa Web-sovelluspalvelimessa kuin Web-työasemaohjelma, anna suhteellinen URL-osoite. Esimerkki: /mycustomizations/passwords.html",
		admin_desktop_help_url: "Peruskäyttäjän ohjeen URL-osoite:",
		admin_desktop_help_url_hover: "Voit käyttää ohjetta, joka toimitetaan IBM Content Navigator -ohjelman mukana, tai voit ohjata käyttäjät edelleen mukautettuun ohjejärjestelmän sisältöön tekemällä seuraavat toimet:<br><br><ul><li>Ohjaus mukautettuun ohjejärjestelmään</li><li>Ohjeen lisäys IBM Knowledge Center -ilmentymään, joka on otettu käyttöön IBM Content Navigator -ohjelman kanssa.</li></ul>",
		admin_desktop_help_url_url_hover: "Anna mukautetun ohjejärjestelmän URL-osoite. IBM Content Navigator liittää määrittämäsi URL-osoitteen loppuun polun index.jsp?content=/com.ibm.usingeuc.doc/ ja tiedoston nimen.  Ohjejärjestelmässä on oltava käytössä samat tiedostojen nimet kuin sisäisessä peruskäyttäjän ohjeessa, jotta käyttöliittymän \"Lisätietoja\"-linkit toimivat. ",
		admin_desktop_deprecated_appearance_title: "Vanhentuneet asetukset",
		admin_desktop_deprecated_appearance_instructions: "Jos käytät mukautettua teemaa, sen asetukset korvaavat nämä asetukset. Nämä asetukset kannattaa siirtää mukautettuun teemaan, mikä tuo käyttöön tarkemmat tyyliasetukset kuin tässä osassa olevat asetukset. Mukautettua teemaa voi lisäksi käyttää useissa työpöydissä.",

		admin_desktop_plugins_title: "Ota käyttöön tai poista käytöstä tämän työpöydän lisäosia.",
		admin_desktop_plugins_enable_all_plugins: "Ota kaikki käytettävissä olevat lisäosat käyttöön tässä työpöydässä",
		admin_desktop_plugins_select_plugins: "Valitse käytettävissä olevista lisäosista ne, jotka haluat ottaa käyttöön tässä työpöydässä",
		admin_desktop_plugins_select_plugin: "Valitse lisäosa",

		admin_desktop_layout_features: "Näytettävät ominaisuudet:",
		admin_desktop_layout_features_hover: "Valitse ominaisuudet, joita käyttäjät voivat käyttää tästä työpöydästä. Ominaisuudet näytetään luettelon mukaisessa järjestyksessä.<br><br>Kun valitset ominaisuuden, voit mukauttaa ominaisuuden tiettyjä toimintoja työpöydässä, kuten ominaisuudelle valittua oletustietovarastoa.",
		admin_desktop_layout_default_repository: "Oletustietovarasto:",
		admin_desktop_layout_default_repository_layout_hover: "Määritä, mikä tietovarasto on valittuna oletusarvon mukaan, kun käyttäjät avaavat ominaisuuden.",
		admin_desktop_layout_document_thumbnails: "Dokumenttien pienoiskuvat:",
		admin_desktop_layout_document_thumbnails_hover: "Määritä, näytetäänkö dokumenttien pienoiskuvat Dokumentin tiedot -ruudussa.<br><br>Pienoiskuvien näyttö voi hidastaa Web-työasemaohjelman suorituskykyä.",
		admin_desktop_layout_show_filmstrip_view: "Filminauhanäkymä:",
		admin_desktop_layout_show_filmstrip_view_hover: "Määritä, voivatko käyttäjät vaihtaa sisältöluettelonäkymän filminauhanäkymään.<br><br>Filminauhanäkymä luo esikatselun kustakin käyttäjän valitsemasta dokumentista. Filminauhanäkymän käyttö voi kuitenkin hidastaa Web-työasemaohjelman suorituskykyä. Lisäksi on määritettävä HTML-muunnon katseluohjelma, jotta dokumentin esikatselut näkyvät.",
		admin_enabled: "Ota käyttöön",
		admin_disabled: "Poista käytöstä",
		admin_include: "Sisällytys",
		admin_exclude: "Ei sisällytystä",
		admin_layout_teamspaces_default_repository: "Ryhmätyötilat:",
		admin_layout_entry_templates_default_repository: "Syöttömallipohjat:",
		admin_layout_other_features_default_repository: "Hae ja selaa:",
		admin_layout_work_default_repository: "Työ:",
		admin_layout_default_feature: "Oletusominaisuus:",
		admin_default_category_placeholder: "Valitse ominaisuus",
		admin_layout_default_feature_hover: "Määritä, mikä ominaisuus näytetään, kun käyttäjät kirjautuvat sisään tähän työpöytään.",
		admin_layout_default_feature_warning: "Oletusominaisuuden muuttaminen voi vaikuttaa sovelluksen latausaikaan.",
		admin_layout_feature_list_header: "Ominaisuus",
		admin_layout_show_statusbar: "Tilarivi:",
		admin_layout_show_statusbar_hover: "Määritä, näytetäänkö tilarivi työpöydän alareunassa.<br><br>Jos piilotat tilarivin, käyttäjät eivät voi nähdä tietoja esimerkiksi seuraavankaltaisista virheettömistä tapahtumista:<ul><li>dokumentti lisättiin tietovarastoon</li><li>haku palautti 59 dokumenttia.</li></ul>",
		admin_layout_show_magazineview: "Varastonäkymä:",
		admin_layout_show_magazineview_hover: "Määritä, voivatko käyttäjät vaihtaa sisältöluettelonäkymän varastonäkymään.<br><br>Varastonäkymä lisää sisältöluettelon kunkin merkinnän korkeutta, mikä vähentää sisältöluettelossa samanaikaisesti näytettävien kohteiden määrää.",
		admin_layout_show_detailsview: "Tiedot-näkymä:",
		admin_layout_show_detailsview_hover: "Määritä, voivatko käyttäjät vaihtaa sisältöluettelonäkymän Tiedot-näkymään.<br><br>Tiedot-näkymässä näkyy suurin mahdollinen rivimäärä sisältöluettelossa.",
		admin_feature_config_docinfopane_label: "Dokumentin tietoruutu:",
		admin_feature_config_docinfopane_hoverhelp: "Määritä, voivatko käyttäjät käyttää ominaisuuden dokumentin tietoruutua.",
		admin_feature_config_docinfopane_default_label: "Oletustoiminta:",
		admin_feature_config_docinfopane_expanded: "Laajennettu",
		admin_feature_config_docinfopane_collapsed: "Pienennetty",
		admin_feature_config_docinfopane_expand_on_select: "Laajenna, kun kohde on valittuna",
		admin_layout_features_title: "Työpöydän ominaisuudet",
		admin_layout_features_instructions: "Määritä, mitä ominaisuuksia käyttäjät voivat käyttää työpöydästä.   Lisäksi voit mukauttaa kunkin työpöytään sisältyvän ominaisuuden toimintaa.",
		admin_layout_components_title: "Työpöydän lisäkomponentit",
		admin_layout_components_instructions: "Voit poistaa käytöstä joitakin työpöydän komponentteja, jos haluat käyttöösi aiempaa yksinkertaisemman käyttöliittymän tai jos haluat parantaa Web-työasemasovelluksen tehokkuutta.",
		admin_layout_featureconfig_instructions: "Valitse määritettävä ominaisuus",
		admin_layout_featureconfig_no_configuration: "Ominaisuuden kokoonpanoa ei ole käytettävissä.",
		admin_layout_featureconfig_label: "Ominaisuuden ${0} kokoonpano",
		admin_layout_featureconfig_title: "Ominaisuuden kokoonpano",
		admin_layout_featureconfig_taskManagerURL: "minaisuuden käyttö edellyttää IBM Content Navigator -ohjelman määrittämistä niin, että se muodostaa yhteyden tehtävienhallintapalveluun. Ota tehtävienhallintapalvelu käyttöön hallintatyökalun <b>Asetukset</b>-osassa.",
		admin_feature_config_show_my_checkouts_label: "Omat uloskuittaukset -ruutu:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Omat uloskuittaukset -ruudun avulla käyttäjät voivat ajaa haun kaikille objekteille, jotka he ovat kuitanneet ulos tietystä tietovarastosta. Määritä, voivatko käyttäjät käyttää Omat uloskuittaukset -ruutua Pääsivulta.<br/><br/><b>Rajoitus:</b> Tämä ominaisuus edellyttää, että käytössäsi on ainakin yksi IBM Content Manager-, IBM FileNet P8- tai OASIS CMIS -tietovarasto liitettynä tähän työpöytään.",

		admin_feature_config_default_repository_icon_text: "Oletustietovarasto",
		admin_show: "Näytä",
		admin_hide: "Piilota",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Et voi poistaa Hallinta-ominaisuutta hallintatyöpöydästä",
		admin_warning_label: "Varoitus:",
		admin_layout_show_globaltoolbar: "Yleinen työkalurivi:",
		admin_layout_show_globaltoolbar_hover: "Määritä, näytetäänkö työkalurivi työpöydän yläreunassa olevassa mainospalkissa.<br><br>Yleinen työkalurivi sisältää toimintoja, joiden avulla käyttäjät voivat lisätä tietovarastoon dokumentteja, kansioita ja pidätyksiä. Käytettävissä olevat toiminnot vaihtelevat sen tietovaraston mukaan, johon käyttäjä on muodostanut yhteyden.",
		admin_interface_text_name_label: "Nimiön laji",

		admin_interface_text_label_description: "Voit mukauttaa tekstiä, joka näkyy tietyillä Web-työasemaohjelman alueilla. Nimiöt näkyvät kaikissa kokoonpanon tietovarastoissa ja työpöydissä. Kirjoita Nykyinen nimiö -kenttään teksti, jonka haluat nähdä käyttöliittymässä.<br><br><b>Tärkeää:</b> nimiöihin tehdyt muutokset eivät näy hallintatyökalussa.",
		admin_interface_text_label_action: "Toimintonimiöt",
		admin_interface_text_label_action_description: "Toimintonimiöt näkyvät Web-työasemaohjelman painikkeissa ja valikoissa. Voit määrittää omat toimintonimiöt kullekin tietovarastolajille.",
		admin_interface_text_label_application: "Sovellusnimiöt",
		admin_interface_text_label_application_description: "Sovellusnimiöt näkyvät kaikkialla Web-työasemaohjelmassa.",
		admin_interface_text_label_system: "Järjestelmän ominaisuuksien nimiöt",
		admin_interface_text_label_system_description: "Näkyvissä olevat järjestelmän ominaisuudet vaihtelevat tietovaraston mukaan. Voit mukauttaa tietovarastojen dokumentteihin ja kansioihin liitettyjen järjestelmän ominaisuuksien yhteydessä näkyviä nimiöitä.",
		admin_interface_text_label_desktop: "Työpöytänimiöt",
		admin_interface_text_label_desktop_description: "Jos olet mukauttanut sovelluksen nimeä työpöydässä, voit mukauttaa nimeä myös muilla kielillä kuin englannin kielellä. Voit myös mukauttaa työpöydän IBM FileNet P8 -sovellustilojen nimiä.",

		admin_interface_text_system_label: "Järjestelmänimiö",
		admin_interface_text_current_label: "Nykyinen nimiö",
		admin_interface_text_default_label_heading: "Oletusnimiö",
		admin_interface_text_default_label: "Oletusnimiö:",
		admin_interface_text_displayed_in_label: "Näytetään kohteelle",
		admin_interface_text_displayed_in_document_folder: "Dokumentit ja kansiot",
		admin_interface_text_displayed_in_document: "Dokumentit",
		admin_interface_text_displayed_in_folder: "Kansiot",
		admin_interface_text_displayed_in_admin_application_space: "Sovellustilan nimi",
		admin_interface_text_displayed_in_desktop: "Mobiililaitteen ominaisuuden nimi",
		admin_interface_text_displayed_in_admin_application_name: "Sovelluksen nimi",

		admin_new_desktop: "Uusi työpöytä",
		admin_new_repository: "Uusi tietovarasto",
		admin_new_menu: "Uusi valikko",
		admin_new_viewer_mapping: "Uusi katseluohjelman vastaavuusmääritys",
		admin_new_mapping_label: "Uusi vastaavuusmääritys",
		admin_new_icon_mapping: "Uusi kuvakkeen vastaavuusmääritys",
		admin_viewer_mapping_list_instructions: "Voit määrittää, mitä katseluohjelmia Web-työasemaohjelma käyttää erilajisen sisällön näyttämiseen. Katseluohjelman vastaavuusmääritys määrittää kuhunkin käytettävään katseluohjelmaan liitetyt MIME-lajit. Voit luoda useita katseluohjelman vastaavuusmäärityksiä, jos haluat käyttää eri katseluohjelmia eri työpöydissä.",
		admin_viewer_mapping_instructions: "Määritä katseluohjelmat, joita haluat käyttää tiedostojen avauksessa. Jos haluat käyttää mukautettua katseluohjelmaa, se on integroitava lisäosana ennen katseluohjelman lisäystä katseluohjelman vastaavuusmääritykseen.<br><br><b>Tärkeää:</b> Kun käyttäjä avaa dokumentin, web-työasemaohjelma etsii katseluohjelman vastaavuusmääritysten luettelosta ensimmäisen katseluohjelman, joka voi avata dokumentin käyttäjän käyttämässä käyttöjärjestelmässä ja tietovarastossa, johon käyttäjällä on yhteys. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Uusi lisäosa",
		admin_menu_list_instructions: "Voit hallita käyttäjien käytettävissä olevia toimintoja luomalla mukautettuja työkalurivejä ja pikavalikoita. Et voi muokata oletusvalikoita, mutta voit rajoittaa käytettävissä olevia toimintoja tai lisätä mukautettuja, lisäosissa määritettyjä toimintoja luomalla aiemmin luotujen valikoiden kopioita.<br><br>Jos haluat luoda uudenlajisen valikon, se on määritettävä lisäosassa.",
		admin_menu_id_hover: "Tunnuksen on oltava yksilöllinen, eikä sitä voi muuttaa, kun valikko on tallennettu.<br><br>Tunnus saa sisältää vain aakkosnumeerisia merkkejä. Kirjainkoko on tunnuksessa merkitsevä.",
		admin_menu_id_disabled_hover: "Valikkotunnusta ei voi muuttaa. Jos haluat käyttää jotain toista tunnusta, sinun on luotava uusi valikko.",
		admin_menu_default_instructions: "Et voi muokata tätä valikkoa, koska se on oletusvalikko. Jos haluat muokata tätä valikkoa, luo siitä kopio.",
		admin_menu_toolbar_instructions: "Voit rajoittaa tässä työkalurivissä käytettävissä olevia toimintoja tai voit lisätä siihen lisäosassa määritettyjä mukautettuja toimintoja. Voit myös järjestää toiminnot lisäämällä työkaluriviin erottimia.",
		admin_menu_toolbar_custom_instructions: "Tämä työkalurivi on lisäosan määrittämä. Jos haluat muokata tätä työkaluriviä, lisäosa on päivitettävä tai työkalurivistä on luotava kopio.",
		admin_menu_context_menu_instructions: "Voit rajoittaa tässä pikavalikossa käytettävissä olevia toimintoja tai voit lisätä siihen lisäosassa määritettyjä mukautettuja toimintoja. Voit myös järjestää toiminnot lisäämällä pikavalikkoon erottimia ja alivalikoita.",
		admin_menu_context_menu_custom_instructions: "Tämä pikavalikko on lisäosan määrittämä. Jos haluat muokata tätä pikavalikkoa, lisäosa on päivitettävä tai pikavalikosta on luotava kopio.",
		admin_desktop_list_instructions: "Voit määrittää eri käyttäjille heidän tarvitsemansa sisällön käyttöoikeudet luomalla useita työpöytiä. Voit luoda esimerkiksi työpöydän, jossa käyttäjät voivat vain hakea sisältöä, tai työpöydän, jossa käyttäjät voivat käyttää vain yhtä tietovarastoa. ",
		admin_plugin_updated: "Valitun lisäosan kokoonpanoa on muutettu. Selain on päivitettävä, jotta muutokset tulevat voimaan.",
		admin_repository_ci_heading: "Content Integrator -tietovarasto: <b>${0}</b>",
		admin_repository_p8_heading: "FileNet Content Manager -tietovarasto: <b>${0}</b>",
		admin_repository_cm_heading: "Content Manager -tietovarasto: <b>${0}</b>",
		admin_repository_od_heading: "Content Manager OnDemand -tietovarasto: <b>${0}</b>",
		admin_repository_cmis_heading: "CMIS (Content Management Interoperability Services) -tietovarasto: <b>${0}</b>",
		admin_repository_box_heading: "Box-tietovarasto: <b>${0}</b>",
		admin_repository_generic_heading: "Tietovarasto: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Haluatko poistaa valitut työpöydät?\n${0} työpöytä(ä) on valittu.",
		admin_delete_confirmation_menus: "Haluatko poistaa valitut valikot?\n${0} valikko(a) on valittu.",
		admin_delete_confirmation_repositories: "Haluatko poistaa valitut tietovarastot?\n${0} tietovarasto(a) on valittu.",
		admin_delete_confirmation_viewer_mappings: "Haluatko poistaa valitut katseluohjelman kartat?  ${0} kartta(a) on valittuna.",
		admin_delete_confirmation_icon_mappings: "Haluatko poistaa valitut kuvakekokoonpanot?\n${0} kuvakekokoonpano(a) on valittu.",
		admin_delete_confirmation_plugins: "Haluatko poistaa valitut lisäosat?\n${0} lisäosa(a) on valittu.",
		admin_delete_confirmation: "Haluatko poistaa valitut objektit?\n${0} objekti(a) on valittu.",

		admin_viewer_mapping_id_hover: "Tunnuksen on oltava yksilöllinen, eikä sitä voi muuttaa, kun katseluohjelman vastaavuusmääritys on tallennettu.<br><br>Tunnus saa sisältää vain aakkosnumeerisia merkkejä. Kirjainkoko on tunnuksessa merkitsevä.",
		admin_viewer_mapping_id_disabled_hover: "Katseluohjelman vastaavuusmäärityksen tunnusta ei voi muuttaa. Jos haluat käyttää jotain toista tunnusta, sinun on luotava uusi katseluohjelman vastaavuusmääritys.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Oletustyöpöytää ei voi poistaa.",

		admin_desktop_heading: "Työpöytä: <b>${0}</b>",
		admin_menu_toolbar_heading: "Työkalurivi: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Mukautettu työkalurivi: <b>${0}</b>",
		admin_menu_context_menu_heading: "Pikavalikko: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Mukautettu pikavalikko: <b>${0}</b>",
		admin_plugin_heading: "Lisäosa: <b>${0}</b>",
		admin_plugin_instructions: "Lisäosa voi olla JAR-tiedosto tai käännetty luokkatiedosto.<br/><br/><b>Tärkeää:</b> IBM Content Navigator -Web-sovelluspalvelimen on voitava käyttää lisäosatiedostoa paikallisessa tiedostojärjestelmässä tai URL-osoitteen kautta.",
		admin_plugin_list_instructions: "Web-työasemaohjelman lisäosat on rekisteröitävä hallintatyökalun avulla. Jos lisäosa edellyttää lisämääritystä, kokoonpanoparametrit tulevat näkyviin lisäosan rekisteröinnin jälkeen.<br /><br /><b>Tärkeää:</b> jos muokkaat lisäosaa, johon viitataan toisessa hallintatyökalun alueessa, kuten valikossa, lisäosan toiminnassa saattaa ilmetä ongelmia. Lisäksi lisäosien luettelointi edellyttää niiden kutsumista. Jos lisäosa on ajettava ennen toista lisäosaa, varmista, että lisäosat ovat luettelossa siinä järjestyksessä, jossa ne on ajettava.",
		admin_plugin_cannot_delete: "Valittuja lisäosia ei voi poistaa, koska toiset lisäosat tarvitsevat niitä.<br/>Valitut lisäosat: ${0}<br/>Riippuvaiset lisäosat: ${1}",
		admin_plugin_cannot_disable: "Valittuja lisäosia ei voi poistaa käytöstä, koska toiset lisäosat tarvitsevat niitä.<br/>Valitut lisäosat: ${0}<br/>Riippuvaiset lisäosat: ${1}",
		admin_plugin_cannot_add: "Lisäosaa ei voi lisätä, koska jotkin lisäosat, joita se tarvitsee, puuttuvat tai on poistettu käytöstä. Puuttuvat tai käytöstä poistetut lisäosat: ${0}",
		admin_plugin_cannot_enable: "Valittuja lisäosia ei voi ottaa käyttöön, koska jotkin lisäosat, joita ne tarvitsevat, puuttuvat tai on poistettu käytöstä.<br/>Valitut lisäosat: ${0}<br/>Puuttuvat tai käytöstä poistetut lisäosat: ${1}",
		admin_plugin_save_order: "Tallenna järjestys",
		admin_plugin_load: "Lataa",
		admin_plugin_load_hover: "Määritä lisäosan URL-osoite",
		admin_plugin_file_hover: "Jos lisäosan JAR-tiedosto on paikallisessa tiedostojärjestelmässä, voit määrittää lisäosatiedoston tarkennetun polun tai URL-osoitteen. Jos lisäosan JAR-tiedosto on etäpalvelimessa, määritä lisäosatiedoston URL-osoite.",
		admin_plugin_classfolderpath_hover: "Käännetyn luokkatiedoston on oltava IBM Content Navigator -ohjelman Web-sovelluspalvelimessa.<br/><br/>Anna sen kansion tarkennettu polku, jossa lisäosan luokat käännetään ja luodaan.<br/><br/>Polku ei saa sisältää lisäosan luokkapaketin nimeä. Esimerkiksi mallilisäosan luokan oletuspolku Windowsissa on C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Anna ladattavan ja lisäosan luokaksi kutsuttavan, luokkatiedoston sisällä olevan Java-luokan koko nimi.<br/>Mallilisäosan luokkanimi on esimerkiksi com.ibm.ecm.extension.sample.<br/>Mallilisäosa.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Lisäosan JAR-tiedostoa ei löytynyt määritetystä URL-osoitteesta. Varmista, että JAR-tiedosto on Web-sovelluspalvelimessa ja että URL-osoite ja tiedoston nimi on määritetty oikein.",
		admin_plugin_for_repository_not_loaded: "Tietovarastoa ei voi muokata. Lisäosaa, joka määrittää tämän lajin tietovaraston ja tukee sitä, ei ole ladattu. Muokkaa lisäosaa Lisäosat-välilehdessä ja vahvista, että se on määritetty oikein ja ladattu.",
		admin_plugin_repository_types: "Tietovarastolajit:",
		admin_plugin_viewers: "Katseluohjelmat:",
		admin_plugin_features: "Ominaisuudet:",
		admin_plugin_layouts: "Asettelut:",
		admin_plugin_not_available: "Ei käytettävissä",
		admin_plugin_config_params: "Kokoonpanoparametrit:",
		admin_viewer_def_heading: "Katseluohjelman vastaavuusmääritys: <b>${0}</b>",
		admin_users_and_groups: "Käyttäjät ja ryhmät",
		admin_general: "Yleiset",
		admin_logging: "Kirjaus",
		admin_authentication: "Todennus",		
		admin_rolebase_role: "Rooli:",
		admin_settings_logging_instructions: "Voit selvittää Web-työasemaohjelmaan liittyviä ongelmia kirjauksen avulla. Voit tarkentaa kirjausta, jos tiedät, että ongelma esiintyy tietyssä Java-luokassa tai tietyllä käyttäjällä. Virhetiedot kirjoitetaan Web-sovelluspalvelimen virhelokitiedostoihin.",
		admin_settings_logging_instructions2: "<b>Vianmäärityksen kirjausasetukset</b><br />Jos tiedät, että ongelma esiintyy tietyn työasemaohjelman pääkoneessa tai tietyllä käyttäjällä, voit kohdistaa vianmäärityskirjauksen kyseiseen koneeseen tai käyttäjään. Voit tallentaa vianmääritystiedot tuotantoympäristössä vaikuttamatta merkittävästi järjestelmän suorituskykyyn.<br /><br /><b>Tärkeää:</b> Jos määrität työasemaohjelman pääkoneen tai käyttäjän, tämä asetus ohittaa kaikki muut kirjausasetukset. Kun olet tallentanut tarvitsemasi tiedot, jatka käyttöympäristösi vakiokirjausta määrittämällä tämän asetuksen arvoksi <b>Ei mitään</b>.",
		admin_settings_export_config_hover: "Vie nykyisen järjestelmän kokoonpanon tiedot tiedostoon IBM Support Assistant Data Collector -ohjelmassa käytettäväksi. Järjestelmä tallentaa tiedoston sijaintiin, joka on määritetty Java-järjestelmäominaisuudessa user.home.",
		admin_logging_level: "Sovellustason kirjaus:",
		admin_logging_level_hover: "Kirjaustasot vaikuttavat palvelimeen tallennettavien tietojen määrään. <b>Virhe</b>-vaihtoehdon valinta tallentaa vähiten kirjaustietoja. <b>Vianmääritys</b>-vaihtoehdon valinta tallentaa eniten tietoja.<br /><br />Älä määritä <b>Vianmääritys</b>-vaihtoehtoa tuotantoympäristössä, ellei IBM:n ohjelmistotuki pyydä niin tekemään.",
		admin_logging_level_0: "Ei kirjausta",
		admin_logging_level_1: "Virhe",
		admin_logging_level_2: "Varoitus",
		admin_logging_level_3: "Ilmoitus",
		admin_logging_level_4: "Vianmääritys",
		admin_logging_classes: "Java-luokkatason kirjaus:",
		admin_logging_classes_hover: "Oletusarvon mukaan kaikki Java-luokat ja -paketit sisältyvät Web-sovelluspalvelimen virhelokeihin. Voit kuitenkin määrittää kirjaukseen sisällytettävät tai siitä pois jätettävät luokat tai paketit. Voit selvittää sisällytettävät tai pois jätettävät luokat Web-sovelluspalvelimen virhelokien avulla.<br><br>Jos tiedät, että ongelma esiintyy tietyssä luokassa, voit sisällyttää erityisesti kyseisen luokan lokitiedostoihin. Kun sisällytät luokan virhelokeihin, kaikki muut luokat jätetään pois lokitiedostosta.<br><br>Jos tiedät, ettei ongelma esiinny luokassa, ja haluat pienentää lokitiedoston kokoa, voit jättää kyseisen luokan pois lokitiedostoista.",
		admin_logging_classes_include: "Sisällytys",
		admin_logging_classes_include_all: "Kaikki luokat",
		admin_logging_classes_include_specified: "Tietyt luokat",
		admin_logging_classes_include_specified_msg: "Määritä sisällytettävät luokat.",
		admin_logging_classes_exclude: "Ei sisällytystä",
		admin_logging_classes_exclude_none: "Ei mitään",
		admin_logging_classes_exclude_specified: "Tietyt luokat",
		admin_logging_classes_exclude_specified_msg: "Määritä pois jätettävät luokat.",
		admin_logging_debug: "Vianmäärityskirjaus kohteelle:",
		admin_logging_debug_hover: "<b>Tärkeää:</b> Tarkista Web-sovelluspalvelimen lokitiedostot, ennen kuin määrität joko työasemaohjelman pääkoneen IP-osoitteen tai käyttäjän. Määritetyn arvon on vastattava lokitiedostossa näkyvää arvoa.",
		admin_logging_debug_none: "Ei mitään (oletusarvo)",
		admin_logging_debug_host: "Työasemaohjelman pääkoneet (IP-osoitteet)",
		admin_logging_debug_host_msg: "Määritä vähintään yhden sellaisen työasemakoneen IP-osoite, jonka vianmääritystietoja haluat kirjata. Erota IP-osoitteet toisistaan pilkulla.<br /><br /><b>Tärkeää:</b> Tarkista Web-sovelluspalvelimen lokitiedostot, ennen kuin määrität IP-osoitteen. Määritetyn arvon on vastattava lokitiedostossa näkyvää arvoa.",
		admin_logging_debug_user: "Käyttäjät",
		admin_logging_debug_user_msg: "Määritä vähintään yhden sellaisen käyttäjän käyttäjätunnus, jonka vianmääritystietoja haluat kirjata. Erota käyttäjätunnukset toisistaan pilkulla.<br /><br /><b>Tärkeää:</b> Tarkista Web-sovelluspalvelimen lokitiedostot, ennen kuin määrität käyttäjätunnuksen. Määritetyn arvon on vastattava lokitiedostossa näkyvää arvoa.",

		admin_office_settings_logging_instructions: "Voit selvittää IBM Content Navigator for Microsoft Office -ohjelmaan liittyviä ongelmia kirjauksen avulla. Voit tarkentaa kirjausta, jos tiedät, että ongelma esiintyy tietyssä luokassa tai tietyllä käyttäjällä. Virhetiedot kirjoitetaan IBM Content Navigator for Microsoft Office -työasemaohjelman pääkoneiden sovelluslokitiedostoihin. ",
		admin_office_settings_logging_instructions2: "<b>Vianmäärityksen kirjausasetukset</b><br />Jos tiedät, että ongelma esiintyy tietyn työasemaohjelman pääkoneessa tai tietyllä IBM Content Navigator for Microsoft Office -käyttäjällä, voit kohdistaa vianmäärityskirjauksen kyseiseen koneeseen tai käyttäjään. Voit tallentaa vianmääritystiedot tuotantoympäristössä vaikuttamatta merkittävästi järjestelmän suorituskykyyn. <br /><br /><b>Tärkeää:</b> Jos määrität työasemaohjelman pääkoneen tai käyttäjän, tämä asetus ohittaa kaikki muut kirjausasetukset. Kun olet tallentanut tarvitsemasi tiedot, jatka IBM Content Navigator for Microsoft Office -ympäristösi vakiokirjausta määrittämällä tämän asetuksen arvoksi <b>Ei mitään</b>. ",
		admin_office_logging_debug_hover: "<b>Tärkeää:</b> Tarkista työasemakoneen lokitiedostot, ennen kuin määrität joko työasemaohjelman pääkoneen IP-osoitteen tai käyttäjän. Määritetyn arvon on vastattava lokitiedostossa näkyvää arvoa. ",
		admin_office_logging: "Office-ohjelman kirjaus",
		admin_office_logging_classes: "Luokkatason kirjaus:",
		admin_office_logging_classes_hover: "Oletusarvon mukaan kaikki luokat ja paketit sisältyvät IBM Content Navigator for Microsoft Office -ohjelman virhelokeihin. Voit kuitenkin määrittää kirjaukseen sisällytettävät tai siitä pois jätettävät luokat tai paketit. Voit selvittää sisällytettävät tai pois jätettävät luokat työasemaohjelman lokien avulla.<br /><br />Jos tiedät, että ongelma esiintyy tietyssä luokassa, voit sisällyttää erityisesti kyseisen luokan lokitiedostoihin. Kun sisällytät luokan virhelokeihin, kaikki muut luokat jätetään pois lokitiedostoista. <br /><br />Jos tiedät, ettei ongelma esiinny luokassa, ja haluat pienentää lokitiedoston kokoa, voit jättää kyseisen luokan pois lokitiedostoista. ",
		admin_office_logging_debug_hover: "<b>Tärkeää:</b> Tarkista työasemakoneen lokitiedostot, ennen kuin määrität joko työasemaohjelman pääkoneen IP-osoitteen tai käyttäjän. Määritetyn arvon on vastattava lokitiedostossa näkyvää arvoa.",
		admin_office_logging_additional_settings: "Lisäasetukset:",
		admin_office_logging_additional_settings_hover: "Määritä lisäasetukset",
		admin_office_logging_file_size: "Lokitiedoston koko",
		admin_office_logging_file_size_hover: "Määritä IBM Content Navigator for Microsoft Office -ohjelman luoman uuden lokitiedoston koko. Kun lokitiedoston enimmäiskoko saavutetaan, järjestelmä antaa nykyiselle tiedostolle uuden nimen, joka sisältää päivämäärän (muodossa VVVVKKpp) ja tiedoston versionumeron (esimerkiksi ICNExcelAddin-20121116-5.log), ja luo sitten uuden lokitiedoston. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Näytä pinonseuranta valintaikkunoissa",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Voit vaihtoehtoisesti näyttää pinonseurannan tiedot sanomaikkunoissa, jotta ongelman ratkaiseminen helpottuu. Jos et ota tätä asetusta käyttöön, yksityiskohtaiset pinonseurannan tiedot sisältyvät kuitenkin aina IBM Content Navigator for Microsoft Office -ohjelman virhelokeihin. ",

		admin_icon_state_twisty: "Tilakuvakkeet",
		admin_icon_state_icon: "Tilan kuvake",
		admin_icon_state: "Tila",
		state_contains_label: "Tila sisältää",
		admin_icon_state_instructions: "Voit mukauttaa tietovarastojen dokumenttien, kansioiden ja työobjektien vieressä näkyviä kuvakkeita.<br><br><b>Vihje:</b> voit määrittää, näytetäänkö kuvakkeet kullekin käyttöympäristön tietovarastolle.",
		admin_icon_state_dialog_title: "Tilakuvakkeen vastaavuusmääritys",
		admin_icon_state_dialog_instructions: "Voit määrittää valitun tilan vastaavuuden ennalta määritettyyn kuvakkeeseen, joka on toimitettu Web-työasemaohjelman mukana, tai mukautettuun kuvakkeeseen.",

		admin_icon_mapping_twisty: "MIME-lajin kuvakkeet",
		admin_icon_mapping_dialog_title: "Kuvakkeen vastaavuusmääritys",
		admin_icon_mapping: "Kuvakkeen vastaavuusmääritys",
		admin_icon_mapping_instructions: "Voit määrittää MIME-lajien luettelon vastaavuuden ennalta määritettyyn kuvakkeeseen, joka on toimitettu Web-työasemaohjelman mukana, tai mukautettuun kuvakkeeseen.",
		admin_icon_mapping_list_instructions: "Voit mukauttaa tietovarastoosi tallennettujen MIME-lajien kuvakkeita. Web-työasemaohjelma käyttää kuvakkeita niiden esiintymisjärjestyksessä. Jos MIME-laji on lueteltu useammin kuin kerran, järjestelmä käyttää ensimmäistä kuvaketta, joka on liitetty kyseiseen MIME-lajiin.",
		admin_icon_mapping_icon_label: "Mitä kuvaketta haluat käyttää?",
		admin_icon_mapping_file_name: "Mukautettu kuvake:",
		admin_icon_mapping_file_name_heading: "Mukautettu kuvake",
		admin_icon_mapping_file_name_placeholder: "Määritä kuvakkeen URL-osoite",
		admin_icon_mapping_file_name_hover: "Anna kuvakkeen URL-osoite. Jos kuvake on samassa Web-sovelluspalvelimessa kuin Web-työasemaohjelma, anna suhteellinen URL-osoite. Esimerkki: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Ennalta määritetty kuvake:",
		admin_icon_mapping_class_name_heading: "Ennalta määritetty kuvake",
		admin_icon_mapping_class_name_hover: "Valitse Web-työasemaohjelman mukana toimitettu kuvake.",
		admin_icon_mapping_class_name_placeholder: "Valitse kuvake",

		admin_p8_instructions: "Nämä tiedot ovat kaikkien Web-työasemaohjelmaan määritettyjen FileNet Content Manager -ohjelman tietovarastojen yhteisiä.",
		admin_p8_collaboration_config: "Valinnainen FileNet Collaboration Services -kokoonpano",
		admin_p8_collaboration_config_instructions: "Voit määrittää nämä parametrit, jos haluat hienosäätää FileNet Collaboration Services -palveluita IBM FileNet P8 -ympäristöön sopivaksi.",
		admin_p8_use_url_incoming: "Luo vastausten URL-osoitteet saapuvien pyyntöjen URL-osoitteiden avulla:",
		admin_p8_use_url_incoming_hover: "Useimmissa FileNet Collaboration Services -ympäristöissä voit luoda vastauksen URL-osoitteen saapuvan pyynnön URL-osoitteen avulla. Valitse <b>Kyllä</b>, ellei jokin seuraavista tilanteista koske käytössä olevaa ympäristöä:<ul><li>haluat pakottaa työasemasovellukset käyttämään FileNet Collaboration Services -palveluita tietyn URL-osoitteen kautta<li>FileNet Collaboration Services -palvelut luovat virheellisiä URL-osoitteita välityspalvelimen asetusten takia.</ul>",

		admin_p8_use_url_incoming_http: "FileNet Collaboration Services -palvelun URL-osoite:",
		admin_p8_use_url_incoming_http_hover: "Määritä URL-osoite, jonka avulla työasemasovellukset voivat käyttää FileNet Collaboration Services -palveluita. Määritä osoite seuraavassa muodossa: http://FNCSserver:portin_numero.",
		admin_p8_use_url_incoming_https: "FileNet Collaboration Services -palveluiden HTTPS URL -osoite:",
		admin_p8_use_url_incoming_https_hover: "Jos FileNet Collaboration Services on määritetty käyttämään SSL-yhteyttä, määritä HTTPS URL -osoite, jonka avulla työasemasovellukset voivat käyttää FileNet Collaboration Services -palveluita. Määritä osoite seuraavassa muodossa: https://FNCSserver:portin_numero.",
		admin_p8_hide_email_addresses: "Piilota käyttäjän sähköpostiosoitteet palvelimen vastauksissa:",
		admin_p8_hide_email_addresses_hover: "Voit piilottaa käyttäjien sähköpostiosoitteet palvelimen vastauksissa, jos tietosuojakäytäntöjä on noudatettava. Voit esimerkiksi piilottaa käyttäjien sähköpostiosoitteiden luettelon, kun palvelin palauttaa dokumenttiluettelon ja tietoja dokumentit luoneista tai niitä muokanneista käyttäjistä.",

		admin_p8_mask_user_ids: "Määritä peite lokitiedostoissa oleville käyttäjätunnuksille:",
		admin_p8_mask_user_ids_hover: "Voit piilottaa käyttäjätunnukset FileNet Collaboration Services -lokitiedostoissa, jos tietosuojakäytäntöjä on noudatettava. Kun otat tämän asetuksen käyttöön, käyttäjätunnukset korvataan hajautusarvoilla. Näin voit toimittaa lokitiedostoja muille yrityksille, kuten IBM:lle, tukitarkoituksiin vaarantamatta käyttäjien nimiä tai toiminta-asiakirjoja.",

		admin_p8_soft_delete: "Siirrä poistetut tiedostot elvytyslokeroon:",
		admin_p8_soft_delete_hover: "Kun käyttäjät poistavat kohteita, siirrä kohteet elvytyslokeroon niiden tietovarastosta poiston sijasta. Kohteita säilytetään elvytyslokerossa, kunnes ne poistetaan. Tämä asetus ohitetaan, jos elvytyslokerot eivät ole tuettuja kohdetietovarastossa.<br><br><b>Rajoitus:</b> elvytyslokerot ovat tuettuja vain IBM FileNet P8 -versiossa 5.2 tai sitä uudemmassa versiossa ja edellyttävät, että asennettuna on Social Collaboration Base Extensions -lisäosa.",

		admin_p8_download: "Content Download HTTP Cache -kokoonpano:",
		admin_p8_download_instructions: "Jos IBM FileNet Content Manager -tietovarastot sisältävät useita suuria tiedostoja, voit määrittää Content Download HTTP Cache (CDHC) -ominaisuuden, jolloin FileNet Collaboration Services -palvelut voi ohjata suurien tiedostojen sisältöpyynnöt edelleen turvallisesti Web-palvelimeen.<br/><br/>Tämä ominaisuus edellyttää IBM HTTP Server -palvelinta. Lisäksi sinun on päivitettävä IBM HTTP Server -palvelimen httpd.conf-tiedosto.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Määritä, haluatko ottaa Content Download HTTP Cache (CDHC) -ominaisuuden käyttöön kaikissa käyttöympäristön IBM FileNet Content Manager -tietovarastoissa. Voit määrittää vähimmäistiedostokoon, jota käytetään tiedostojen välimuistiin tallennuksessa.",
		admin_p8_download_cache_folder: "Tarkennettu välimuistihakemisto:",
		admin_p8_download_cache_folder_hover: "Määritä sen hakemiston tarkennettu polku, johon haluat tallentaa välimuistiin tallennetut tiedostot. Hakemisto voi olla missä tahansa käyttöjärjestelmässä tai laitteessa, kuten yhteiskäytössä olevassa verkkohakemistossa, kunhan se vain on näkyvissä tiedostojärjestelmänä FileNet Collaboration Services -palveluille ja IBM HTTP Server -palvelimelle.",
		admin_p8_download_cache_url: "Välimuistin sijainnin valenimi:",
		admin_p8_download_cache_url_hover: "Määritä valenimi, jota käytetään välimuistihakemistoon osoituksessa FileNet Collaboration Services -palveluiden URL-osoitteesta. Määritä valenimi seuraavassa muodossa: /valenimi (esimerkiksi /cdhc).<br/><br/>Kun /cdhc sisällytetään URL-osoitteeseen, sovellus ohjataan edelleen tarkennettuun välimuistihakemistoon.",
		admin_p8_download_cache_max_files: "Välimuistiin tallennettujen tiedostojen enimmäismäärä:",
		admin_p8_download_cache_max_files_hover: "Kun tiedostojen enimmäismäärä saavutetaan, vanhin tiedosto poistetaan välimuistista.<br><br>Jos määrität välimuistiin tallennettavien tiedostojen enimmäismäärän ja välimuistin enimmäiskoon, vanhin tiedosto poistetaan välimuistista, kun näistä ehdoista täyttyy se, jolle on määritetty pienempi arvo.",
		admin_p8_download_cache_max_size: "Välimuistin enimmäiskoko (Gt):",
		admin_p8_download_cache_max_size_hover: "Kun välimuistin enimmäiskoko saavutetaan, vanhin tiedosto poistetaan välimuistista.<br/><br/>Jos määrität välimuistiin tallennettavien tiedostojen enimmäismäärän ja välimuistin enimmäiskoon, vanhin tiedosto poistetaan välimuistista, kun näistä ehdoista täyttyy se, jolle on määritetty pienempi arvo.",
		admin_p8_download_cache_cleanup_duration: "Puhdistuksen enimmäiskesto (sekunteina):",
		admin_p8_download_cache_cleanup_duration_hover: "Määritä, miten kauan puhdistus voi kestää. Oletuskesto on viisi sekuntia.<br><br>Kaikki poistettavat tiedostot, jotka jäävät välimuistiin puhdistuksen jälkeen, poistetaan seuraavan puhdistuksen aikana.",
		admin_p8_download_cache_cleanup_min: "Välimuistin puhdistusten vähimmäisväli (sekunteina):",
		admin_p8_download_cache_cleanup_min_hover: "Määritä vähimmäisaikaväli, jonka on kuluttava välimuistin puhdistusten välillä. Oletusaika on 3 600 sekuntia (yksi tunti).<br><br>Välimuistin puhdistukset tapahtuvat vain, kun sisällön lataukseen välimuistista on olemassa aktiivinen pyyntö. Jos pyyntöjä tulee joka minuutti, puhdistus tapahtuu joka tunti. Jos latauspyyntöjen välillä kuluu kuitenkin kolme tuntia, puhdistus tapahtuu vasta, kun seuraava latauspyyntö vastaanotetaan.",
		admin_p8_download_cache_min_lifetime: "Välimuistissa säilytyksen vähimmäisaika (sekunteina):",
		admin_p8_download_cache_min_lifetime_hover: "Määritä vähimmäisaika, jonka ajan tiedostoa säilytetään välimuistissa, ennen kuin se voidaan poistaa. Oletusaika on 3 600 sekuntia (yksi tunti).<br><br>Vaikka välimuisti saavuttaisi enimmäiskoon tai sisältäisi enimmäismäärän tiedostoja, vanhinta välimuistissa olevaa tiedostoa ei voi poistaa, ennen kuin tiedosto on ollut määritetyn ajan välimuistissa.",
		admin_p8_download_cache_size_threshold: "Välimuistiin tallennettavan tiedoston vähimmäiskoko (kt):",
		admin_p8_download_cache_size_threshold_hover: "Määritä enimmäiskoko, jolloin CDHC-ominaisuutta käytetään tiedostojen välimuistiin tallennukseen. Jos tiedosto on pienempi kuin määritetty koko, tiedosto ohjataan sen Web-sovelluspalvelimen kautta, jossa FileNet Collaboration Services on otettu käyttöön. Oletuskoko on 1 000 kt.",
		admin_p8_download_guard_header: "Portinvartioinnin HTTP-saate:",
		admin_p8_download_guard_header_hover: "Jos työasemasovellus ei reititä pyyntöä IBM HTTP Server -palvelimen kautta, välimuistiin tallennettua sisältöä ei voi ladata. Voit estää latausvirheet määrittämällä, että vain tietyn HTTP-saatteen (joka lisätään IBM HTTP Server -palvelimen pyyntöihin) sisältävät saapuvat pyynnöt voivat käyttää välimuistiin tallennettua sisältöä.<br><br>HTTP-saate määritetään IBM HTTP Server -palvelimessa, ja se on kaikissa IBM HTTP Server -palvelimen kautta reititetyissä saapuvissa pyynnöissä. Jos pyynnössä ei ole HTTP-saatetta, sisältö reititetään Web-sovelluspalvelimen kautta IBM HTTP Server -palvelimen sijasta.",
		admin_p8_download_generate_config: "Luo kokoonpano",
		admin_p8_download_generate_config_label: "IBM HTTP Server -kokoonpano",
		admin_p8_download_generate_config_label_hover: "Jotta CHDC-kokoonpano toimii, päivitä IBM HTTP Server -palvelimen httpd.conf-tiedosto. Luo httpd.conf-tiedostoon lisättävät lauseet napsauttamalla Luo kokoonpano -vaihtoehtoa.",

		admin_logging_viewone_pro: "ViewONE Professional -kirjaus:",
		admin_logging_viewone_virtual: "ViewONE Virtual -kirjaus:",
		admin_logging_viewone_streamer: "Document Streaming Server Module -kirjaus:",
		admin_logging_viewone_streamer_hover: "Document Streaming Server Module -kirjausasetukset ovat käytettävissä vain, jos olet ottanut PDF- tai TIFF-tiedostojen tietovirtapalvelun käyttöön hallintatyökalun <b>Daeja ViewONE</b> -osassa.",
		admin_logging_viewone_redaction: "Permanent Redaction Server Module -kirjaus:",
		admin_logging_viewone_redaction_hover: "Permanent Redaction Server Module -kirjausasetukset ovat käytettävissä vain, jos sinulla on oikeus käyttää Daeja ViewONE Professional -ohjelman Redaction-moduulia.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Virtauta PDF-tiedostot:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Jos tietovarastossa on suuria PDF-dokumentteja, voit määrittää katseluohjelman virtauttamaan dokumentin sisällön, jotta käyttäjät voivat tarkastella dokumentteja aiempaa nopeammin. Jos virtauttaminen ei kuitenkaan toimi käyttöympäristössä, voit poistaa sen käytöstä.",
		admin_daeja_viewonepro_stream_tiff_documents: "Virtauta TIFF-tiedostot:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Jos tietovarastossa on suuria TIFF-dokumentteja, voit määrittää katseluohjelman virtauttamaan dokumentin sisällön, jotta käyttäjät voivat tarkastella dokumentteja aiempaa nopeammin. Jos virtauttaminen ei kuitenkaan toimi käyttöympäristössä, voit poistaa sen käytöstä.",
		admin_daeja_viewonepro_show_file_buttons: "Tiedosto-painikkeet",
		admin_daeja_viewonepro_show_file_menus: "Tiedosto-valikot",
		admin_daeja_viewonepro_enable_file_keys: "Tiedosto-pikanäppäimet",
		admin_daeja_viewonepro_file_keys_hover_help: "Määritä, haluatko käyttäjien käyttävän pikanäppäimiä tiedostojen käsittelyyn, kuten tiedoston avaukseen ja tallennukseen. Lisätietoja tietyistä pikanäppäimistä IBM Daeja ViewONE Parameters Reference Manual -oppaan FileKeys-parametrin kuvauksessa.",
		admin_daeja_viewonepro_show_print_buttons: "Tulosta-painikkeet",
		admin_daeja_viewonepro_show_print_menus: "Tulosta-valikot",
		admin_daeja_viewonepro_enable_print_keys: "Tulosta-pikanäppäimet",
		admin_daeja_viewonepro_print_keys_hover_help: "Määritä, haluatko käyttäjien käyttävän pikanäppäimiä tiedostojen tulostukseen, kuten sivun tai dokumentin tulostukseen. Lisätietoja tietyistä pikanäppäimistä IBM Daeja ViewONE Parameters Reference Manual -oppaan PrintKeys-parametrin kuvauksessa.",
		admin_daeja_viewonepro_show_invert_buttons: "Muuta käänteiseksi -painikkeet",
		admin_daeja_viewonepro_annotation_tooltip: "Mukautetun kommentin oletustyökaluvihje:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Kirjoita teksti, joka näytetään, kun työkaluvihjettä ei ole määritetty mukautettua kommenttia varten. Teksti voi sisältää korvattavia sanakkeita. Esimerkki: &quot;&lt;creator&gt; loi huomautuksen &lt;createdateonly&gt;.&quot; Lisätietoja korvattavista sanakkeista on IBM Daeja ViewONE Parameters Reference Manual -oppaan customAnnotationsToolTip-parametrin kuvauksessa.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Käytä ennalta määritettyä mukautettua työkaluvihjettä",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Käytä järjestelmän määrittämää mukautettua työkaluvihjettä, joka näkyy alla olevassa tekstiruudussa",
		admin_daeja_viewonepro_help_url: "Ohjeen URL-osoite:",
		admin_daeja_viewonepro_help_url_hover_help: "Määritä sen Web-sivun URL-osoite, joka sisältää katseluohjelman ohjeet. Voit avata Web-sivun sekä katseluohjelman työkalurivin Ohje-painikkeella että Ohje-valikon vaihtoehdolla. Jos et määritä URL-osoitetta, Ohje-painike ja -valikon vaihtoehto eivät ole näkyvissä.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kuvaleiman resurssin konteksti:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "tehtävä",
		admin_daeja_viewonepro_route_docs: "Reititä ei tuettu sisältö selaimeen:",
		admin_daeja_viewonepro_route_docs_hover_help: "Käyttäjät voivat tarkastella ei tuettuja kuvatiedostoja reitittämällä ne selaimeen, joka avaa tiedoston katseluun tarvittavan sovelluksen. Esimerkiksi Microsoft Word -dokumentin katselua varten selain avaa Microsoft Word -katseluohjelman.",
		admin_daeja_viewonepro_scale: "Sovita kuva automaattisesti:",
		admin_daeja_viewonepro_scale_best: "Parhaiten sopiva",
		admin_daeja_viewonepro_scale_ftow: "Sovita leveyteen",
		admin_daeja_viewonepro_scale_ftoh: "Sovita korkeuteen",
		admin_daeja_viewonepro_enable_hotkeys: "Ota pikanäppäimet käyttöön:",
		admin_daeja_viewonepro_show_features: "Näytä painikkeet ja valikot:",
		admin_daeja_custom_settings: "Lisäasetukset:",
		admin_daeja_custom_settings_hover_help: "Voit lisätä muita parametreja määrittämällä parametrin nimen ja arvon. Voit esimerkiksi määrittää scrollbars-parametrin ja arvon true (tosi), jos haluat, että vierityspalkit näkyvät, kun kuva suurennetaan näyttöaluetta suuremmaksi. Lisätietoja parametrien nimistä ja arvoista on IBM Daeja ViewONE Parameters Reference Manual -oppaassa.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Mukautetun kommentin oletustyökaluvihje:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Kirjoita teksti, joka näytetään, kun työkaluvihjettä ei ole määritetty mukautettua kommenttia varten. Teksti voi sisältää korvattavia sanakkeita. Esimerkki: &quot;&lt;creator&gt; loi huomautuksen &lt;createdateonly&gt;.&quot; Lisätietoja korvattavista sanakkeista on IBM Daeja ViewONE Parameters Reference Manual -oppaan customAnnotationsToolTip-parametrin kuvauksessa.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Käytä ennalta määritettyä mukautettua työkaluvihjettä",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Käytä järjestelmän määrittämää mukautettua työkaluvihjettä, joka näkyy alla olevassa tekstiruudussa",
		admin_daeja_virtual_image_stamp_resource_context: "Kuvaleiman resurssin konteksti:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "tehtävä",
		admin_daeja_virtual_license_path:"Lisenssitiedostojen polku:",
		admin_daeja_virtual_license_path_hover_help:"Määritä sen hakemiston tarkennettu polku, joka sisältää lisenssitiedostot lic-server-virtual.v1 ja lic-server.v1.",
		admin_default_license_path:"Käytä lisenssitiedostojen oletuspolkua",
		admin_license_path_specified:"Käytä lisenssitiedostojen mukautettua polkua",

		admin_daeja_streamer: "Palvelin",
		admin_daeja_streamer_cache_root: "Välimuistin hakemisto:",
		admin_daeja_streamer_cache_root_hover_help: "Määritä sen hakemiston tarkennettu polku, johon haluat tallentaa välimuistiin tallennetut tiedostot, jotta saat ne nopeasti käyttöön. Hakemisto voi olla missä tahansa käyttöjärjestelmässä tai laitteessa, kuten verkkohakemistossa, kunhan se vain on näkyvissä tiedostojärjestelmänä IBM Content Navigator -ohjelmalle ja IBM HTTP Server -palvelimelle. Voit parantaa suorituskykyä käyttämällä paikallista hakemistoa.",
		admin_daeja_streamer_settings: "Lisäasetukset:",
		admin_daeja_streamer_settings_hover_help: "Voit lisätä muita parametreja määrittämällä parametrin nimen ja arvon. Voit esimerkiksi määrittää cookieAllowedDomainList-parametrin ja pilkuin erotellun  isäntäpalvelimien luettelon.  Lisätietoja parametrien nimistä ja arvoista on IBM Daeja ViewONE Parameters Reference Manual -oppaassa.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Asetukset:",
		admin_daeja_redaction_settings_hover_help: "Voit lisätä muita parametreja määrittämällä parametrin nimen ja arvon. Voit esimerkiksi määrittää burnIncrementalAnnotations-parametrin ja arvon true (tosi). Lisätietoja parametrien nimistä ja arvoista on IBM Daeja ViewONE Parameters Reference Manual -oppaassa.",

		admin_daeja_setting_dialog_title_new: "Uusi asetus",
		admin_daeja_setting_dialog_title_edit: "Muokkaa asetusta",
		admin_daeja_setting_dialog_hover_help: "Lisää muita parametreja määrittämällä parametrin nimen ja arvon. Voit esimerkiksi määrittää scrollbars-parametrin ja arvon true (tosi), jos haluat, että vierityspalkit näkyvät, kun kuva suurennetaan näyttöaluetta suuremmaksi.",
		admin_daeja_setting_dialog_field_hover_help: "Lisätietoja parametrien nimistä ja arvoista on IBM Daeja ViewONE Parameters Reference Manual -oppaassa.",

		admin_daeja_logging: "Daeja ViewONE -kirjaus",
		admin_daeja_logging_trace: "Ota jäljityskirjaus käyttöön",
		admin_daeja_logging_trace_net: "Ota verkon kirjaus käyttöön",
		admin_daeja_logging_trace_annotations: "Ota kommenttien kirjaus käyttöön",
		admin_daeja_logging_log_file: "Lokitiedosto:",
		admin_daeja_logging_instructions: "Voit selvittää Daeja ViewONE Professional- ja Daeja ViewONE Virtual -ohjelmiin liittyvät ongelmat kirjauksen avulla. Jos tiedät, että ongelma esiintyy tietyssä ominaisuudessa, voit kohdistaa kirjauksen kyseiseen ominaisuuteen.",

		admin_v1pro_logging_trace_hover: "Käytä tätä asetusta yleisten ongelmien vianmääritykseen katseluohjelmassa.<br><br>Järjestelmä kirjaa tiedot työasemakoneen Java-ohjauspäätteessä. Voit käyttää Java-ohjauspäätettä käyttöjärjestelmän mukaan joko Ohjauspaneelista (Windows) tai Järjestelmäasetuksista (Mac).",
		admin_v1pro_logging_trace_net_hover: "Käytä tätä asetusta seuraavien ongelmien vianmääritykseen:<ul><li>Palvelinyhteyttä koskevat ongelmat</li><li>MIME-lajeja koskevat ongelmat</li><li>Liian pitkiä tiedostoja koskevat ongelmat</li></ul>Lisäksi voit verkon jäljityskirjauksen avulla selvittää, missä ilmenee viiveitä Daeja ViewONE Professional -ohjelmaa käyttäessäsi.<br><br>Järjestelmä kirjaa tiedot työasemakoneen Java-ohjauspäätteessä. Voit käyttää Java-ohjauspäätettä käyttöjärjestelmän mukaan joko Ohjauspaneelista (Windows) tai Järjestelmäasetuksista (Mac).",
		admin_v1pro_logging_trace_annotations_hover: "Tätä asetusta käyttämällä voit määrittää kommenttien luonnissa, tallennuksessa tai latauksessa ilmenevät ongelmat.<br><br>Järjestelmä kirjaa tiedot työasemakoneen Java-ohjauspäätteessä. Voit käyttää Java-ohjauspäätettä käyttöjärjestelmän mukaan joko Ohjauspaneelista (Windows) tai Järjestelmäasetuksista (Mac).",

		admin_virtual_logging_trace_hover: "Käytä tätä asetusta yleisten ongelmien vianmääritykseen katseluohjelmassa.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon virtual.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_virtual_logging_trace_net_hover: "Käytä tätä asetusta seuraavien ongelmien vianmääritykseen:<ul><li>Palvelinyhteyttä koskevat ongelmat</li><li>MIME-lajeja koskevat ongelmat</li><li>Liian pitkiä tiedostoja koskevat ongelmat</li></ul>Lisäksi voit verkon jäljityskirjauksen avulla selvittää, missä ilmenee viiveitä Daeja ViewONE Virtual -ohjelmaa käyttäessäsi.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon virtual.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_virtual_logging_trace_annotations_hover: "Tätä asetusta käyttämällä voit määrittää kommenttien luonnissa, tallennuksessa tai latauksessa ilmenevät ongelmat.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon virtual.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_virtual_logging_log_file_hover: "Jos otat katseluohjelman kirjauksen käyttöön, sinun tulee määrittää sen lokitiedoston tarkennettu polku ja nimi, johon haluat tallentaa kirjaustiedot.  Lokitiedosto kannattaa nimetä muotoon virtual.log.",

		admin_streamer_logging_trace_hover: "Käytä tätä asetusta yleisten ongelmien vianmääritykseen Document Streaming Server Module -moduulissa.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon streamer.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_streamer_logging_trace_net_hover: "Käytä tätä asetusta seuraavien ongelmien vianmääritykseen:<ul><li>Palvelinyhteyttä koskevat ongelmat</li><li>Tiettyjä MIME-lajeja koskevat ongelmat</li><li>Liian pitkiä tiedostoja koskevat ongelmat</li></ul>Lisäksi voit verkon jäljityskirjauksen avulla selvittää, missä ilmenee viiveitä the Document Streaming Server Module -moduulia käyttäessäsi.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon streamer.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_streamer_logging_log_file_hover: "Jos otat Document Streaming Server -moduulin kirjauksen käyttöön, sinun tulee määrittää sen lokitiedoston tarkennettu polku ja nimi, johon haluat tallentaa kirjaustiedot.  Lokitiedosto kannattaa nimetä muotoon streamer.log.",

		admin_redaction_logging_trace_hover: "Käytä tätä asetusta yleisten ongelmien vianmääritykseen Permanent Redaction Server Module -moduulissa.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon redacttofile.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_redaction_logging_trace_net_hover: "Käytä tätä asetusta seuraavien ongelmien vianmääritykseen:<ul><li>Palvelinyhteyttä koskevat ongelmat</li><li>Tiettyjä MIME-lajeja koskevat ongelmat</li><li>Liian pitkiä tiedostoja koskevat ongelmat</li></ul>Lisäksi voit verkon jäljityskirjauksen avulla selvittää, missä ilmenee viiveitä the Permanent Redaction Server Module -moduulia käyttäessäsi.<br><br>Oletusasetuksen mukaan kirjaustiedot kirjoitetaan tiedostoon redacttofile.log, joka on IBM Content Navigator -ohjelman asennushakemiston config-alihakemistossa.",
		admin_redaction_logging_log_file_hover: "Jos otat Permanent Redaction Server -moduulin kirjauksen käyttöön, sinun tulee määrittää sen lokitiedoston tarkennettu polku ja nimi, johon haluat tallentaa kirjaustiedot.  Lokitiedosto kannattaa nimetä muotoon redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Määritä katseluohjelmien ja palveluiden ominaisuudet.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Jos käytät Web-työasemaohjelmaa muodostaessasi yhteyden yhteen tai useampaan Content Manager OnDemand -tietovarastoon, määritä tiedot, joita OnDemand Web Enablement Kit -työkalujen toiminta edellyttää. Nämä tiedot ovat samat kaikille Web-työasemaohjelmaa varten määritetyille Content Manager OnDemand -tietovarastoille.",
		admin_ondemand_language: "Kieli:",
		admin_ondemand_tempdir: "Tilapäinen ODWEK-hakemisto:",
		admin_ondemand_tracegrp: "ODWEK-jäljitys",
		admin_ondemand_tracedir: "Jäljityshakemisto:",
		admin_ondemand_tracelevel: "Jäljitystaso:",
		admin_ondemand_tracelevel_0: "0 - Ei kirjausta",
		admin_ondemand_tracelevel_1: "1 - Virhesanomien kirjaus",
		admin_ondemand_tracelevel_2: "2 - Virhe- ja varoitussanomien kirjaus",
		admin_ondemand_tracelevel_3: "3 - Virhe-, varoitus- ja ilmoitussanomien kirjaus",
		admin_ondemand_tracelevel_4: "4 - Kaikkien sanomien tiedot kerätään, funktioiden jäljitys mukaan lukien",
		admin_ondemand_max_trace_filesize: "Jäljitystiedoston enimmäiskoko:",
		admin_ondemand_max_trace_filesize_unlimited: "Rajoittamaton",
		admin_ondemand_max_trace_filesize_limited: "Rajoitettu (suositus)",
		admin_ondemand_max_trace_filesize_meg: "Mt",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Tämä arvo ei ole sallitulla alueella. Arvon on oltava kokonaisluku 1–1 000 000.",
		admin_ondemand_afp2pdf_installdir: "AFP2PDF-asennushakemisto:",
		admin_ondemand_language_hover: "Määritä kieli, jolla ODWEK palauttaa sanomat.",
		admin_ondemand_tempdir_hover: "Määritä hakemisto, johon OnDemand Web Enablement Kit -työkalut tallentavat tilapäiset tiedostot käsittelyn aikana. Määritä Web-sovelluspalvelimen aiemmin luodun hakemiston tarkennettu polku.",
		admin_ondemand_tracedir_hover: "Määritä hakemisto, johon haluat tallentaa ODWEK-jäljitystiedoston arswww.trace. Määritä Web-sovelluspalvelimen aiemmin luodun hakemiston tarkennettu polku.",
		admin_ondemand_tracelevel_hover: "Määritä tiedostoon arswww.trace kirjoitettavien lokitietojen taso. <b>Virhesanomien kirjaus</b> -tasolla järjestelmä kirjaa vähiten lokitietoja. <b>Kaikkien sanomien tiedot kerätään, funktioiden jäljitys mukaan lukien</b> -tasolla järjestelmä kerää eniten lokitietoja.<br /><br />Älä valitse <b>Kaikkien  sanomien tiedot kerätään, funktioiden jäljitys mukaan lukien</b> -vaihtoehtoa tuotantoympäristössä, ellei IBM:n ohjelmistotuki pyydä tekemään niin.",
		admin_ondemand_max_trace_filesize_hover: "Määritä, haluatko sallia ODWEK-jäljitystiedoston kasvavan rajoittamattomasti vai luoko Web-työasemaohjelma uudet lokitiedostot, kun lokitiedoston koko ylittää tietyn koon. Oletusarvona on sallia jäljitystiedoston kasvu, kunnes Web-sovellus on pysäytetty Web-sovelluspalvelimessa.",
		admin_ondemand_max_trace_unlimited_hover: "Valitse tämä vaihtoehto, jos haluat, että ODWEK-jäljitystiedot kirjoitetaan yhteen lokitiedostoon. Jos valitset tämän vaihtoehdon, tuloksena voi olla lokitiedosto, joka on liian suuri avattavaksi tiedostojen vakiokatseluohjelmassa.",
		admin_ondemand_max_trace_limited_hover: "Valitse tämä vaihtoehto, jos haluat, että ODWEK-jäljitystiedot kirjoitetaan pienempiin lokitiedostoihin. Kun lokitiedoston enimmäiskoko saavutetaan, järjestelmä nimeää nykyisen lokin uudelleen nimellä, joka sisältää päivämäärän (arswww.trace.VVVVKKPP.HHMMSS), ja luo uuden lokitiedoston.",
		admin_ondemand_afp2pdf_installdir_hover: "Jos haluat muuntaa AFP2PDF Transform -apuohjelmalla AFP-dokumentit PDF-dokumenteiksi tarkastelua ja tulostusta varten, määritä Web-sovelluspalvelimen hakemisto, johon AFP2PDF Transform -apuohjelma on asennettu. Esimerkki: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Pääkäyttäjät",
		admin_adminusers_heading_text_multi: "Määritä käyttäjät, joilla on Web-työasemaohjelman pääkäyttäjän valtuudet. Vain pääkäyttäjät voivat kirjautua hallintatyöpöytään.<br /><br /><b>Tärkeää:</b> IBM Content Navigator -pääkäyttäjien käyttäjätunnusten on vastattava<ul><li>Web-sovelluspalvelimessa olevia käyttäjätunnuksia. Käyttäjätunnusten ei tarvitse olla Web-sovelluspalvelimen pääkäyttäjiä.</li><li>käyttäjätunnuksia, jotka ovat kuhunkin Hallinta-ominaisuuden sisältävään työpöytään määritetyssä oletustietovarastossa.</li></ul>",
		admin_adminusers_heading_text_single: "Määritä käyttäjät, joilla on Web-työasemaohjelman pääkäyttäjän valtuudet. Vain pääkäyttäjät voivat kirjautua hallintatyöpöytään.<br /><br /><b>Tärkeää:</b> IBM Content Navigator -pääkäyttäjien käyttäjätunnusten on vastattava Web-sovelluspalvelimessa olevia käyttäjätunnuksia. Käyttäjätunnusten ei tarvitse olla Web-sovelluspalvelimen pääkäyttäjiä.",
		admin_adminusers_newuser: "Uusi pääkäyttäjä:",
		admin_adminusers_add: "Lisää",
		admin_adminusers_remove: "Poista",
		admin_adminusers_listheading: "Pääkäyttäjät",
		admin_adminusers_nameInvalid: "Arvo ei saa olla kaksoiskappale.",

		admin_sync_server_instructions: "<b>Vain IBM FileNet P8 -käyttäjät:</b> Jos aiot ottaa Sync Services -palvelun käyttöön vähintään yhdessä tietovarastossa, Web-työasema on määritettävä käyttämään Sync Services -palvelua. Sync Services -kokoonpano on kaikkien ympäristösi tietovarastojen yhteiskäytössä.",
		admin_settings_instructions: "Asetukset-välilehdessä määritetyt arvot koskevat kaikkia kokoonpanon työpöytiä.",
		admin_autocomplete: "Täytä käyttäjätunnukset automaattisesti:",
		admin_autocomplete_hover: "Määritä, haluatko, että Web-työasemaohjelma tallentaa käyttäjätunnukset selaimen evästeisiin, jotta selain voi automaattisesti täyttää käyttäjätunnukset Web-työasemaohjelmaan sisäänkirjauksen aikana.<br><br>Jos otat tämän asetuksen käyttöön, Web-työasemaohjelmaan viimeksi kirjautuneen käyttäjän käyttäjätunnus tallennetaan selaimen evästeisiin ja tuodaan näkyviin automaattisesti sisäänkirjaussivulla, kun käyttäjä avaa Web-työasemaohjelman.<br><br>Poista tämä asetus käytöstä, jos sovellusta käytetään yhteiskäytössä olevilta työasemilta tai jos et halua tallentaa käyttäjätunnuksia selaimen evästeisiin.<br /><br />Tämä asetus ei koske mobiilisovelluksia tai mukautettuja sovelluksia.",
		admin_autocomplete_enable: "Ota käyttöön",
		admin_autocomplete_disable: "Poista käytöstä",
		admin_cultural_collation: "Käytä paikallistunnuskohtaista lajittelua:",
		admin_cultural_collation_hover: "Jos otat paikallistunnuskohtaisen lajittelun käyttöön, lajittelu tapahtuu tietovarastopalvelimessa. Lajittelu voi heikentää Web-työasemaohjelman suorituskykyä.<br><br>Paikallistunnuskohtaisen lajittelun poisto käytöstä voi parantaa Web-työasemaohjelman suorituskykyä.",
		admin_cultural_collation_enable: "Ota käyttöön",
		admin_cultural_collation_disable: "Poista käytöstä",
		admin_base_ui_style: "Teeman tyyli",
		admin_base_ui_style_hover: "Määritä Web-työasemaohjelmassa käytettävän oletusteeman tyyli. Tyyliä käytetään vain työasemissa, jotka käyttävät <b>Oletus</b>-teemaa (teema on määritetty työaseman kokoonpanon <b>Ulkoasu</b>-välilehdessä).<br/></br><b>Rajoitus:</b> Jos työaseman kokoonpanot käyttävät mukautettuja teemoja, mukautetut teemat perustuvat Perinteinen-tyyliin riippumatta valitsemastasi tyylistä.",
		admin_base_ui_style_classic: "Perinteinen",
		admin_access_control_access: "Rajoita käyttö tiettyihin käyttäjiin ja ryhmiin",
		admin_access_control_access_show: "Näytä käyttöoikeustiedot",
		admin_access_control_access_enable: "Kyllä",
		admin_access_control_access_disable: "Ei",
		admin_mobile_access: "Salli käyttö mobiilisovelluksista",
		admin_mobile_access_hover: "Oletusarvon mukaan käyttäjät voivat käyttää Web-työasemaohjelmaa IBM Content Navigator iOS -sovelluksesta.<br /><br /><b>Tärkeää:</b> jos estät Web-työasemaohjelman käytön iOS-sovelluksesta, käyttäjät voivat edelleen käyttää Web-työasemaohjelmaa mobiililaitteidensa Web-selaimista ja mistä tahansa mukautetusta sovelluksesta, joka on kirjoitettu käyttämällä IBM Content Navigator -ohjelmointirajapintoja ja jotka toimivat mobiililaitteissa.",
		admin_mobile_access_enable: "Kyllä",
		admin_mobile_access_disable: "Ei",
		admin_error: "Virhesanoman tiedot:",
		admin_error_custom: "Hae mukautettua tukisisältöä",
		admin_error_default: "Hae IBM-tukisisältöä <BDO DIR='LTR'>(</BDO>oletus<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Määritä, mistä käyttäjät saavat lisätietoja, kun he saavat virhesanoman.  Voit ohjata käyttäjät IBM:n tukiportaalin tietoihin tai sisäisiin resursseihin, kuten Help Desk -palveluun.",
		admin_error_URL: "URL-osoitteen etuliite:",
		admin_error_URL_hover: "Kirjoita sen resurssin (esimerkiksi Help Desk -palvelun) URL-osoite, johon haluat ohjata käyttäjät, kun he havaitsevat virheen. Esimerkki: http://localhost:portin_numero. Web-työasemaohjelma liittää sanoman numeron URL-osoitteeseen.",
		admin_prompt_close_without_save: "Haluatko sulkea kohteen tallentamatta muutoksia?",
		admin_object_expiration_time: "Välimuistin päivitysväli (minuutteina):",
		admin_object_expiration_time_hover: "Voit parantaa Web-työasemaohjelman suorituskykyä lisäämällä kokoonpano-objektien, kuten työpöytien, säilytysaikaa välimuistissa. Oletusaika on 10 minuuttia. Enimmäisaika on 1 440 minuuttia (yksi päivä).<br /><br />Web-sovellus on aloitettava uudelleen, jotta muutokset tulevat voimaan.<br /><br />Jos IBM Content Navigator on otettu käyttöön jatkuvasti käytössä olevassa ryvästetyssä ympäristössä, yhtään kokoonpano-objektien muutosta ei välitetä rypään solmuihin, ennen kuin välimuisti on päivitetty.",
		admin_temp_file_cleanup_interval: "Katseluohjelman välimuistin puhdistuksen tarkistusväli (tunteina):",
		admin_temp_file_cleanup_interval_hover: "Määritä, miten usein tilapäisestä hakemistosta etsitään vanhentuneita tilapäisiä tiedostoja poistoa varten. Tilapäisen hakemiston oletustarkistusväli on kuusi tuntia. Arvoksi voi määrittää 6 - 48 tuntia.",
		admin_temp_file_expiration_interval: "Katseluohjelman välimuistin vanhentumisväli (tunteina):",
		admin_temp_file_expiration_interval_hover: "Määritä, kuinka pitkään katseluohjelman toimintoihin liittyvät tilapäiset tiedostot säilyvät selaimen välimuistissa. Näiden tilapäisten tiedostojen oletusvanhentumisaika on 24 tuntia. Arvoksi voi määrittää 12 - 48 tuntia.",
		admin_encryption_key_hover: "Navigator-ohjelman salaustoiminnoissa käytettävä avain.",
		admin_encryption_key: "Salausavain:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Tuotteistus",
		admin_mobile_branding_main_color: "Ensisijainen väri:",
		admin_mobile_branding_secondary_color: "Toissijainen väri:",
		admin_mobile_device_title: "MaaS360-hallinta",
		admin_mobile_device_enable_maas360: "MaaS360-käyttöönotto:",
		admin_mobile_device_enable_maas360_hover_help: "MaaS360-käyttöönoton koho-ohje tulee tähän",
		admin_mobile_device_maas360_developer_id: "MaaS360-sovelluskehittäjän tunnus:",
		admin_mobile_device_maas360_license_key: "MaaS360-lisenssiavain:",
		admin_mobile_settings_title: "Asetukset",
		admin_mobile_email_address_hover_help: "Mobiilisovelluksessa käytetään sähköpostiosoitetta, kun käyttäjä napsauttaa Lähetä virheraportti -vaihtoehtoa",
		admin_mobile_email_address: "Sähköpostiosoite:",
		admin_invalid_email_address_message: "Antamasi sähköpostiosoitteen muoto ei ole oikea. Anna oikea osoite ja yritä uudelleen.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Osa tiedoista ei kelpaa.",
		admin_configuration_parameters: "Kokoonpanoparametrit",
		admin_configuration_optional_features: "Valinnaiset toiminnot",
		admin_configuration_optional_features_p8_instructions: "Valitse toiminnot, jotka haluat ottaa käyttöön tässä tietovarastossa.<p><b>Tärkeää:</b> Jos otat käyttöön ominaisuuden, joka asentaa lisäosan tietovarastoon, sinun on muodostettava yhteys tietovarastoon Content Platform Engine- tai Content Engine -pääkäyttäjänä.</p>",
		admin_configuration_optional_features_cm_instructions: "Valitse toiminnot, jotka haluat ottaa käyttöön tässä tietovarastossa.<p><b>Tärkeää:</b> Nämä ominaisuudet muokkaavat tietovaraston tietomallia. Jotta voit ottaa ne käyttöön, sinun on muodostettava yhteys tietovarastoon kirjastopalvelimen pääkäyttäjänä.</p>",
		admin_system_properties: "Järjestelmän ominaisuudet",
		admin_system_properties_for: "Järjestelmän ominaisuudet kohteelle:",
		admin_available_properties: "Käytettävissä olevat ominaisuudet",
		admin_displayed_properties: "Näytettävät ominaisuudet",
		admin_selected_properties: "Valitut ominaisuudet",
		admin_selected_filtered_properties: "Piilotetut ominaisuudet",
		admin_available_operators: "Näytetyt operaattorit",
		admin_selected_filtered_operators: "Piilotetut operaattorit",
		admin_system_properties_shown: "Näkyvät ominaisuudet",
		admin_system_properties_hidden: "Piilotetut ominaisuudet",
		admin_available_menu_items: "Käytettävissä olevat toiminnot:",
		admin_selected_menu_items: "Valitut toiminnot:",
		admin_menu_global: "Käytetään, kun objekteja ei ole valittu:",
		admin_menu_multiple_document: "Käytetään, kun useita objekteja on valittu:",
		admin_menu_privileges: "Pakolliset käyttöoikeudet:",
		admin_menu_plugin: "Lisäosa:",
		admin_menu_repository_types: "Tietovarastolajit:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Erotin",
		admin_browse: "Selaa",
		admin_search: "Hae",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Roolipohjainen luottamuksellisten tietojen poisto",
		admin_connections_library_enabled: "IBM Connections on käytössä",
		admin_office_conf: "Muokkaa integrointia",
		admin_desktop_conf_label: "Työpöydän kokoonpanon määritys",
		admin_ms_office_conf_label: "Office-kokoonpano",
		admin_workflows: "Käsittelyreitit",
		admin_file_types: "Tiedostolajit",
		admin_file_type_contains_label: "Tiedostolaji sisältää",
		admin_name_propepty: "Nimi",
		admin_cm_name_property_default: "Käytä oletusnimeä",
		admin_cm_name_property_default_hover: "Oletusarvon mukaan hierarkkisen ICM-nimen (ICM$NAME) ominaisuutta käytetään objektin nimenä, jos ominaisuus on määritetty objektia varten.  Jos hierarkkisen ICM-nimen (ICM$NAME) ominaisuus ei ole käytettävissä, objektin nimenä käytetään ensimmäistä ominaisuutta, joka on merkitty tunnuksella \"edustaa\".",
		admin_cm_name_property: "Määritä objektin nimiominaisuus",
		admin_cm_name_property_hover: "Määritä, mitä ominaisuutta käytetään dokumenttien ja kansioiden nimenä.",
		admin_name_property: "Nimiominaisuus:",
		admin_doc_name_property: "Dokumentin nimiominaisuus:",
		admin_doc_name_property_hover: "Määritä, mitä ominaisuutta käytetään dokumentin nimenä.",
		admin_folder_name_property: "Kansion nimiominaisuus:",
		admin_folder_name_property_hover: "Määritä, mitä ominaisuutta käytetään kansion nimenä.",
		admin_all_searches_label: "Näytettävien hakujen määrä:",
		admin_unlimited: "Ei rajoitusta",
		admin_limit: "Rajoitus",
		admin_repository: "Tietovarasto:",
		admin_application_space: "Sovellustila",
		admin_available_application_spaces: "Käytettävissä olevat sovellustilat:",
		admin_selected_application_spaces: "Valitut sovellustilat:",
		admin_label: "Nimiö",
		admin_repository_box_placeholder: "Valitse Box-tietovarasto",
		admin_repository_placeholder: "Valitse tietovarasto",
		admin_search_match: "Vastaavuus:",
		admin_search_match_all: "Vastaa kaikkia hakuperusteita",
		admin_search_match_any: "Vastaa mitä tahansa hakuperustetta",
		admin_search_match_hover: "Määritä asetukset, jotka ovat oletusarvon mukaan valittuna <b>Ominaisuusasetukset</b>-valikossa.",

		admin_repository_redactions_instructions: "Voit määrittää roolipohjaisen luottamuksellisten tietojen poiston tälle tietovarastolle.",
		admin_repository_redaction_policies_description: "Voit luoda ja hallita luottamuksellisten tietojen poistokäytäntöjä. Käytännöt liittävät luottamuksellisten tietojen poiston syyt käyttäjiin ja ryhmiin, jotka voivat lukea arkaluonteisia tietoja ja muokata kommentteja, jotka suojaavat kyseisiä arkaluonteisia tietoja näkymässä.",
		admin_repository_redaction_roles_instruction: "Voit luoda luottamuksellisten tietojen poistoroolin liitettäväksi tiettyihin käyttäjiin ja ryhmiin ja määrittää heille arkaluonteisten tietojen lukuoikeudet tai niiden kommenttien muokkausoikeudet, jotka suojaavat arkaluonteisia tietoja näkymässä. Luottamuksellisten tietojen poistorooli on liitettävä luottamuksellisten tietojen poiston syyhyn luottamuksellisten tietojen poistokäytännössä, ennen kuin käyttäjät ja ryhmät voivat lukea tietoja tai muokata kommentteja.",
		admin_repository_redaction_reasons_instruction: "Voit määrittää luottamuksellisten tietojen poiston syyt tälle tietovarastolle.",
		admin_repository_redaction_policies: "Luottamuksellisten tietojen poistokäytännön määritys",
		admin_repository_redaction_roles: "Luottamuksellisten tietojen poistoroolien määritys",
		admin_repository_redaction_reasons: "Luottamuksellisten tietojen poiston syiden määritys",
		admin_repository_redaction_roles_type: "Laji",
		admin_repository_redaction_roles_type_hover: "Muokkaaja voi luoda, muokata tai peruuttaa tietyn lajisia roolipohjaisia luottamuksellisten tietojen poistoja, kun taas tarkastelija voi tarkastella tietyn lajisia arkaluonteisia tietoja.",
		admin_repository_redaction_roles_type_editor: "Muokkaaja",
		admin_repository_redaction_roles_type_viewer: "Tarkastelija",
		admin_repository_redaction_roles_membership: "Jäsenyys",
		admin_repository_redaction_roles_membership_hover: "Valitse muokkaajat, joille haluat määrittää tämän roolin.",
		admin_repository_redaction_roles_user_group_hover: "Hae käyttäjät tai ryhmät tai valitse muokkaajat, joille haluat määrittää tämän roolin.",
		admin_repository_redaction_roles_description: "Voit luoda ja hallita luottamuksellisten tietojen käyttörooleja, jotka liittävät käyttäjät ja ryhmät oikeuteen lukea arkaluonteisia tietoja ja muokata kommentteja, jotka suojaavat arkaluonteisia tietoja näkymässä.",
		admin_repository_redaction_new: "Uusi luottamuksellisten tietojen käyttörooli",
		admin_repository_redaction_role_avail_editors: "Käytettävissä olevat luottamuksellisten tietojen poistojen muokkaajat",
		admin_repository_redaction_role_avail_users: "Käytettävissä olevat käyttäjät",
		admin_repository_redaction_role_avail_groups: "Käytettävissä olevat ryhmät",
		admin_repository_redaction_role_selected_editors: "Valitut luottamuksellisten tietojen poistojen muokkaajat",
		admin_repository_redaction_role_selected_users_groups: "Valitut käyttäjät ja ryhmät",
		admin_repository_redaction_role_add_editor: "Uudet muokkaajat...",
		admin_repository_redaction_role_access_type: "Käyttö",
		admin_repository_redaction_role_access_type_access: "Salli",
		admin_repository_redaction_role_access_type_no_access: "Estä",
		admin_repository_redaction_role_users: "Käyttäjät",
		admin_repository_redaction_role_groups: "Ryhmät",
		admin_repository_redaction_role_editors: "Muokkaajat",
		admin_delete_confirmation_redaction_roles: "Haluatko poistaa valitun luottamuksellisten tietojen käyttöroolin?",
		admin_repository_edit_redaction_role: "Luottamuksellisten tietojen käyttörooli: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Oletuskäyttöoikeudet",
		// RBA
		desktop_user_group_acl: "Työpöydän pääkäyttäjät",
		desktop_user_group_remove: "Poista",
		desktop_rba_membership: "Jäsenyys:",
		desktop_rba_membership_list_label: "Nimi",
		admin_repository_redaction_policy_hover: "Anna kuvaus, jonka avulla käyttäjät erottavat tämän käytännön muista käytännöistä.",
		admin_repository_new_redaction_policy: "Uusi luottamuksellisten tietojen poistokäytäntö",
		admin_repository_policy_name: "Käytännön nimi",
		admin_repository_reason_redactions: "Luottamuksellisten tietojen poiston syyt:",
		admin_repository_role_editors: "Muokkaajat",
		admin_repository_role_viewers: "Katseluohjelmat",
		admin_repository_redaction_policy_instruction: "Voit luoda luottamuksellisten tietojen poistokäytännön ja liittää valitut luottamuksellisten tietojen poiston syyt sekä luottamuksellisten tietojen poistojen muokkaajiin että luottamuksellisten tietojen tarkastelijoihin.",
		admin_repository_redaction_reasons_hover: "Valitse ainakin yksi arkaluonteisten tietojen laji, jota et halua useimpien käyttäjien näkevän, kuten henkilökohtaisesti tunnistettavissa olevat tiedot, liikesalaisuudet tai yrityksen luottamukselliset tai patentteja koskevat tiedot.",
		admin_repository_readaction_available_reasons: "Käytettävissä olevat syyt",
		admin_repository_readaction_selected_reasons: "Valitut syyt",
		admin_repository_readaction_new_reason: "Uusi syy...",
		admin_repository_redeaction_reasons: "Luottamuksellisten tietojen poiston syyt:",
		admin_repository_readaction_editor_permmission: "Luottamuksellisten tietojen poiston muokkaajat:",
		admin_repository_redaction_editors_hover: "Valitse roolit, jotka voivat luoda luottamuksellisten tietojen poistoja ja muokata niitä valituista syistä.",
		admin_repository_readaction_new_editor_role: "Uusi Muokkaaja-rooli...",
		admin_repository_readaction_available_editors: "Käytettävissä olevat Muokkaaja-roolit:",
		admin_repository_readaction_selected_editors: "Valitut Muokkaaja-roolit",
		admin_repository_readaction_viewer_permmission: "Luottamuksellisten tietojen tarkastelijat:",
		admin_repository_redaction_viewers_hover: "Valitse roolit, jotka voivat tarkastella arkaluonteisia tietoja valituista syistä. Luottamuksellisia tietoja ei poisteta niiden käyttäjien ja ryhmien näkyvistä, joilla on nämä roolit.",
		admin_repository_readaction_new_viewer_role: "Uusi Tarkastelija-rooli...",
		admin_repository_readaction_available_viewers: "Käytettävissä olevat Tarkastelija-roolit:",
		admin_repository_readaction_selected_viewers: "Valitut Tarkastelija-roolit",
		admin_repository_reason_redactions_header: "Luottamuksellisten tietojen poiston syyt",
		admin_delete_confirmation_redaction_policy: "Haluatko poistaa valitun luottamuksellisten tietojen poistokäytännön?",
		admin_role_type_repository: "Tietovarasto",
		admin_role_type_administrator: "Pääkäyttäjä",
		admin_role_type_template: "Mallipohja",
		admin_role_type_teamspace: "Ryhmätyötila",
		admin_role_type_author: "Muokkaaja",
		admin_role_type_user: "Tarkastelija",
		admin_collaboration_services_instructions: "Jos käytössäsi on IBM Connections- ja FileNet Collaboration Services -Web-sovellus, voit määrittää tietovaraston yhteisön ryhmätyötilat ja aktiviteettien tietovirrat.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Yhteisön kirjaston kokoonpano",
		admin_collaboration_community_instruction: "Voit määrittää yhden IBM FileNet P8 -verkkoalueen tietovaraston tallentamaan IBM Connections -yhteisön kirjastot (joita kutsutaan myös ryhmätyötiloiksi). Kun käyttäjät luovat yhteisön kirjaston IBM Connections -ohjelman avulla, se tallennetaan yhteisön kirjaston tietovarastoksi määritettyyn tietovarastoon.",
		admin_collaboration_community_teamspaces: "Käytä tätä tietovarastoa yhteisön kirjastoille:",
		admin_collaboration_community_teamspaces_hover: "Voit käyttää ainoastaan yhtä IBM FileNet P8 -verkkoalueen tietovarastoa uusien yhteisön kirjastojen tallennukseen. Jos otat tietovaraston käyttöön ja luotuna on jo tietovarasto, aiemmin luotu tietovarasto poistetaan käytöstä. Kaikki nykyiset kirjastot kuitenkin jäävät nykyiseen tietovarastoon.",
		admin_collaboration_connections_anonymous: "Salli julkisen sisällön anonyymi käyttö:",
		admin_collaboration_connections_anonymous_hover: "Jos IBM Connections -palvelin sisältää julkisia tai valvottuja yhteisöjä, voit määrittää FileNet Collaboration Services -palvelut sallimaan käyttäjien selata ja ladata sisältöä kyseisten yhteisöjen kirjastoista kirjautumatta ensin sisään yhteisöihin.<br><br>Anonyymisti yhteisön kirjastoja käyttävät käyttäjät eivät voi luoda, muokata tai poistaa sisältöä.<br><br><b>Tärkeää:</b> IBM FileNet P8 LDAP -käyttäjä on määritettävä anonyymiksi käyttäjäksi ja kyseiselle käyttäjälle on määritettävä <b>Anonyymi</b>-rooli WebSphere Application Server -palvelimessa.",
		admin_collaboration_connections_url: "IBM Connections -ohjelman URL-osoite:",
		admin_collaboration_connections_url_hover: "Määritä IBM Connections -palvelimen URL-osoite seuraavassa muodossa: http://IBMConnectionsServer:portin_numero.  Jos IBM Connections on määritetty käyttämään IBM HTTP Server -palvelinta, voit jättää portin numeron pois URL-osoitteesta.<br><br>IBM Connections -käyttäjien on voitava käyttää URL-osoitetta, koska se on linkki, jota FileNet Collaboration Services -palvelut käyttää linkkien luontiin dokumentin aloitussivuille IBM Connections -ohjelmassa.",
		admin_collaboration_connections_url_http_use: "Käytä IBM Connections -ohjelman URL-osoitetta",
		admin_collaboration_connections_url_https_use: "Käytä IBM Connections -ohjelman HTTPS URL -osoitetta",
		admin_collaboration_connections_url_specify: "Määritä URL-osoite",
		admin_collaboration_connections_url_https: "IBM Connections -ohjelman HTTPS URL -osoite:",
		admin_collaboration_connections_url_https_hover: "Jos IBM Connections on määritetty käyttämään SSL-yhteyttä, määritä IBM Connections -palvelimen HTTPS URL -osoite seuraavassa muodossa: https://IBMConnectionsServer:portin_numero.  Jos IBM Connections on määritetty käyttämään IBM HTTP Server -palvelinta, voit jättää portin numeron pois URL-osoitteesta.",

		admin_collaboration_connections_gadget_url: "IBM Connections -gadget-komponentin URL-osoite:",
		admin_collaboration_connections_retrieval_url: "IBM Connections -ohjelman noudon URL-osoite:",
		admin_collaboration_connections_security: "Yhteisön pääkäyttäjät:",
		admin_collaboration_connections_security_hover: "Määritä käyttäjät ja ryhmät, jotka voivat hallita yhteisön kirjastojen sisältöä.<br><br>Yleiset pääkäyttäjät voivat luoda, muokata ja poistaa yhteisön kirjastoja ja yhteisön kirjastojen sisältöä ja myöntää käyttöoikeuksia niihin. Kun määrität käyttäjän yleiseksi pääkäyttäjäksi, käyttäjälle annetaan tietovaraston ClbGlobalAdministrator-oikeudet.<br><br>Yleiset pääkäyttäjät, joilla on tarkistusoikeudet, voivat hyväksyä ja hylätä sisällön, jota parhaillaan tarkistetaan yhteisön kirjastossa julkaisua varten. Kun määrität käyttäjän yleiseksi pääkäyttäjäksi, jolla on tarkistusoikeudet, käyttäjälle annetaan tietovaraston ClbGloablReviewAdministrator-oikeudet.",

		admin_collaboration_connections_admins: "Yleiset pääkäyttäjät",
		admin_collaboration_connections_admins_review: "Yleiset pääkäyttäjät, joilla on tarkistusoikeudet",
		admin_collaboration_connections_seedlist: "Indeksoi yhteisön kirjaston sisältö:",
		admin_collaboration_connections_seedlist_hover: "Määritä, luoko IBM Connections hakuindeksin keräämällä tietoja tietovaraston yhteisön kirjastoista. Indeksin luonti voi vaikuttaa tietovaraston suorituskykyyn.<br><br>Jos Social Collaboration Search Indexing Extensions -lisäosa on asennettuna tietovarastossa, asetus on käytössä oletusarvon mukaan. Jos Social Collaboration Search Indexing Extensions -lisäosa ei ole asennettuna tietovarastossa, lisäosa asennetaan tietovarastoon, kun otat asetuksen käyttöön.",
		admin_collaboration_activity_stream: "Aktiviteetin tietovirran tapahtuman kokoonpano",
		admin_collaboration_activity_stream_label: "Siirrä tapahtumatiedot IBM Connections -ohjelmaan:",
		admin_collaboration_activity_stream_label_hover: "Määritä, siirretäänkö tapahtumatiedot, kuten dokumentin luonti, ulos- ja sisäänkuittaukset, huomautukset, tunnisteet ja yhteiskäytöt, IBM Connections -ohjelmaan.<br><br><b>Tärkeää:</b> ilmoitusten siirto IBM Connections -ohjelmaan voi vaikuttaa tietovaraston suorituskykyyn.",

		admin_collaboration_activity_stream_instruction: "Voit määrittää tietovaraston siirtämään tapahtumatiedot, kuten huomautukset ja dokumentin hyväksynnät, IBM Connections -ohjelmaan. Tapahtumat näytetään IBM Connections -yhteisöjen <b>uusimpien päivitysten</b> sivulla. ",
		admin_collaboration_activity_stream_ignored_ids: "Ohita tiettyjen käyttäjien ja ryhmien tapahtumatiedot:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Voit vähentää käyttäjille näytettyjen ilmoitusten määrää ohittamalla tiettyjen käyttäjien tai ryhmien (kuten pääkäyttäjien tai järjestelmätilien) luomia tapahtumia. Jos esimerkiksi haluat siirtää sisältöä, kannattaa määrittää, että siirtoon käytetyn tilin luomat tapahtumat ohitetaan.",
		admin_collaboration_activity_stream_userid: "IBM Connections -käyttäjätunnus:",
		admin_collaboration_activity_stream_userid_hover: "Määritä järjestelmätili, jota Content Platform Engine käyttää todennuksessa ja tapahtumatietojen lähetyksessä IBM Connections -ohjelmaan. Käyttäjällä on oltava <b>trustedExternalApplication</b>-rooli IBM Connections -ohjelman Widget Container -sovelluksessa.<br><br><b>Vihje:</b> Oletusarvon mukaan IBM Connections -ohjelman pääkäyttäjällä on asianmukaiset käyttöoikeudet. Voit käyttää pääkäyttäjän tunnusta käyttäjätunnuksena.",
		admin_collaboration_activity_stream_password: "IBM Connections -salasana:",

		admin_help_url: "Peruskäyttäjän ohjeen URL-osoite:",
		admin_help_url_hover: "<b>Tärkeä huomautus:</b> IBM Knowledge Center Customer Installed -sivustoa ei päivitetä IBM Content Navigator -ohjelman versioon 3.0.0. Saat lisätietoja mukautetun ohjeen käytöstä ottamalla yhteyttä asiakaspalveluun.<br><br>IBM Content Navigator -ohjelman versiossa 3.0.0 peruskäyttäjän ohjeen URL-osoite osoittaa IBM Knowledge Center -sivustoon. IBM Knowledge Center -sivuston osoite on: http://www.ibm.com/support/knowledgecenter.<br><br>Jos haluat käyttää IBM Knowledge Center Customer Installed -sivuston edellistä versiota, määritä sen IBM Knowledge Center Customer Installed -ilmentymän URL-osoite, jonka IBM Content Navigator -ohjelman kokoonpanon määritys- ja käyttöönottotyökalu otti käyttöön. Työasemakoneiden on voitava käyttää URL-osoitetta. URL-osoitteen muoto on http://palvelimen_nimi:portin_numero/kc.<br><br>Voit noutaa palvelimen nimen ja portin numeron IBM Content Navigator -ohjelman asennushakemiston KnowledgeCenter/logs-alihakemiston console.log-tiedostosta.",

		admin_help_default: "Käytä IBM:n toimittamaa oletusohjetta",
		admin_custom_help: "Käytä mukautettua ohjejärjestelmää",
		admin_help_kc: "Käytä mukautettua IBM Knowledge Center Customer Installed -ohjetta",
		admin_help_kc_hover: "<b>Tärkeä huomautus:</b> IBM Knowledge Center Customer Installed -sivustoa ei päivitetä IBM Content Navigator -ohjelman versioon 3.0.0. Saat lisätietoja mukautetun ohjeen käytöstä ottamalla yhteyttä asiakaspalveluun.<br><br>Jos haluat käyttää IBM Knowledge Center Customer Installed -sivuston edellistä versiota, valitse tämä vaihtoehto, jolloin voit lisätä sisältöä IBM Knowledge Center Customer Installed -ilmentymään, joka on otettu aiemmin käyttöön.",
		admin_help_taxonomy: "Luokituskoodi:",
		admin_help_taxonomy_hover: "Määritä mukautetun ohjeen luokituskoodi.<br><br>IBM Content Navigator -ohjelman luokituskoodi on SSEUEX. Jos haluat näyttää ohjeen toisen tuotenimen kohdalla IBM Knowledge Center Customer Installed -versiossa, lisää yksilöllinen luokituskoodi KC_taxonomy.ditamap -tiedostoon IBM Content Navigator -ohjelman asennushakemiston hakemistossa KnowledgeCenter/usr/taxonomy .",
		admin_help_context: "Ohjeen konteksti:",
		admin_help_context_hover: "Määritä mukautetun ohjeen konteksti.<br><br>IBM Content Navigator -ohjelman ohje on IBM Content Navigator -ohjelman asennushakemiston hakemistossa KnowledgeCenter/usr/content/com.ibm.usingeuc.doc. Oletusohjeen konteksti on com.ibm.usingeuc.doc. Jos haluat mukautetun ohjeen käyttöön, lisää sisältö KnowledgeCenter/usr/content/-hakemiston uuteen alihakemistoon.",
		admin_help_welcome: "Aloitussivu:",
		admin_help_welcome_hover: "Määritä sen aiheen nimi, jota haluat käyttää aloitussivuna, kun käyttäjä käyttää ohjetta. Luo ominaisuudet, jotka määrittävät aloitussivun sijainnin, ja lisää ominaisuustiedosto IBM Content Navigator -ohjelman asennushakemiston KnowledgeCenter/usr/conf-hakemistoon.",

		admin_settings_mimetype_extensions_jsonfile: "MIME-lajilaajennusten JSON-tiedosto:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Tarkista JSON-tiedoston nimi ja täydellinen polku. Tiedosto voi olla yleinen tiedosto tiedostojärjestelmästä tai JSON-tiedostoon osoittava URL-osoite.  <br><br>JSON-tiedoston sisältönä on MIME-lajimääritysten matriisi. <br><br>MIME-lajimääritys sisältää neljä avainta: mimeTypes, extensions, fileType ja iconName. Kaksi ensimmäistä avainta, mimeTypes ja extensions, ovat pakollisia, ja ne voivat olla pilkuin (,) eroteltuja merkkijonomatriiseja. Kaksi viimeistä avainta, fileType ja iconName, ovat valinnaisia. <br><br>Esimerkki: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Tehtävienhallinnan kokoonpano",
		admin_taskmanager_service: "Tehtävienhallintapalvelu:",
		admin_taskmanager_service_hover: "Määritä haluatko käyttää tehtävienhallintapalvelua asynkronisten tehtävien luontiin ja ajoon. <br><br>Jos muutat tätä asetusta, IBM Content Navigator -Web-sovellus on aloitettava uudelleen, jotta muutokset tulevat voimaan.",
		admin_taskmanager_url: "Tehtävienhallintapalvelun URL-osoite:",
		admin_taskmanager_url_hover: "Määritä URL-osoite, jonka avulla muut sovellukset voivat viestiä tehtävienhallintapalvelun kanssa. URL-osoitteen muoto on http://palvelimen_nimi:portin_numero/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Tehtävienhallinnan lokitiedostojen hakemisto:",
		admin_taskmanager_logdirectory_hover: "Oletusasetuksen mukaan tehtävienhallintapalvelun lokitiedostot kirjoitetaan samaan hakemistoon kuin Web-sovelluspalvelimen lokitiedostot. <br><br>Jos haluat, että lokitiedot kirjoitetaan toiseen hakemistoon IBM Content Navigator -palvelimessa, määritä sen hakemiston tarkennettu polku, johon haluat tallentaa Task Manager -komponentin luomat lokitiedostot. <br><br>Jos muutat tätä asetusta, IBM Content Navigator -Web-sovellus on aloitettava uudelleen, jotta muutokset tulevat voimaan.",
		admin_taskmanager_heartBeatMonitor: "Rypään sykäysvälien valvonta",
		admin_taskmanager_heartBeatMonitor_hover: "Vain jatkuvasti käytettävissä olevat ryväsympäristöt. Jos otat tämän asetuksen käyttöön, tehtävienhallintapalvelu reitittää tehtävät solmuista, jotka ovat poissa käytöstä, solmuihin, jotka ovat ajossa. <br><br>Jos muutat tätä asetusta, IBM Content Navigator -Web-sovellus on aloitettava uudelleen, jotta muutokset tulevat voimaan.",

		admin_syncserver_title: "Synkronointipalvelimen kokoonpano",
		admin_syncserver_enable: "Sync Services -palvelut:",
		admin_syncserver_enable_hover: "Määritä, haluatko, että tämän työpöydän käyttäjät voivat synkronoida objektinsa työasemien ja mobiililaitteiden kesken.<br><br><b>Tärkeää:</b> Tämän ominaisuuden käyttö edellyttää, että myös seuraavat toimet toteutetaan:<ul><li>Määritä <b>Sync Services -palvelun julkinen URL-osoite</b> hallintatyökalun <b>Sync Services</b> -osassa.</li><li>Lisää tietovarasto, jota varten Sync Services -palvelut on otettu käyttöön tässä työpöydässä.</li></ul>Jos poistat tämän toiminnon käytöstä, mutta lisäät tietovaraston, jota varten Sync Services -palvelu on otettu käyttöön tässä työpöydässä, tietovaraston asetus ohitetaan.",
		admin_mobileqr_enable: "Näytä IBM Navigator -QR-koodi sisäänkirjaussivulla:",
		admin_mobileqr_enable_hover: "Ota asetus käyttöön, jos haluat näyttää IBM Navigator -mobiilisovelluksen QR-koodin Web-työasemaohjelman sisäänkirjaussivulla. <br><br>Kun käyttäjä lukee QR-koodin, hänet ohjataan käytössä olevan laitteen sovelluskauppaan, josta IBM Navigator -mobiilisovelluksen voi ladata.",

		admin_streamlineservice_enable: "Edit Service -palvelu:",
		admin_streamlineservice_enable_hover: "Vain FileNet P8 -käyttäjät. Ota asetus käyttöön, jos haluat, että työpöydän käyttäjät voivat helposti lisätä ja muokata dokumentteja työasemien omilla sovelluksilla. <br><br>Tämän asetuksen käyttö edellyttää lisäksi seuraavaa: <ul><li>Edit Service -palvelu on otettava käyttöön vähintään yhdessä tähän työpöytään liittyvässä tietovarastossa.</li><li>IBM Content Navigator Edit -työasemaohjelma on asennettava käyttäjien työasemiin.</li></ul>",

		admin_repository_general_instructions: "Muodosta yhteys tietovarastoon, ennen kuin määrität parametrit, järjestelmän ominaisuudet ja kansiot.",
		admin_repository_system_instructions: "Määritä, mitkä järjestelmän ominaisuudet näkyvät tämän tietovaraston dokumenttien ja kansioiden yhteydessä.",

		admin_desktop_general_create_instructions: "Työpöydän avulla määritetään, mitä sisältöä käyttäjät näkevät ja miten käyttäjät kirjautuvat Web-työasemaohjelmaan. Kun olet luonut työpöydän, voit lähettää sen URL-osoitteen käyttäjille, jotta he voivat käyttää työpöytää.",
		admin_desktop_admin_instructions: "Web-työasemaohjelmaan sisältyy hallintatyöpöytä, jonka avulla pääkäyttäjät voivat asentaa Web-työasemaohjelman. Tässä työpöydässä on käyttöoikeudet kaikkiin Web-työasemaohjelmassa määritettyihin tietovarastoihin.",
		admin_desktop_repositories_instructions: "Määritä tässä työpöydässä käyttäjien käytettävissä olevat tietovarastot. Tietovarastojen kokoonpanot on määritettävä, ennen kuin ne voidaan lisätä työpöytään.<br><br><b>Vihje:</b> voit rajoittaa sitä, mitkä tietovarastot ovat käytettävissä kullekin ominaisuudelle, kun määrität työpöydän asettelun.",
		admin_desktop_menus_instructions: "Määritä tässä työpöydässä käyttäjien käytettävissä olevat valikot. Valikot määrittävät käytettävissä olevat toiminnot käyttöliittymässä tehtyjen valintojen mukaan.<br><br><b>Vihje:</b> voit mukauttaa valikoiden sisältöä hallintatyökalun <b>Valikot</b>-osassa tai voit luoda uudenlajisia valikoita luomalla lisäosia.",

		admin_desktop_no_repositories: "Määritettyjä tietovarastoja ei ole.",

		admin_desktop_id_hover: "Työpöydän tunnus sisältyy Web-työasemaohjelman URL-osoitteeseen ja määrittää, mikä työpöytä avataan, kun käyttäjä kirjautuu Web-työasemaohjelmaan. Tunnuksen on oltava yksilöllinen, eikä sitä voi muuttaa, kun työpöytä on tallennettu.<br><br>Tunnus saa sisältää vain aakkosnumeerisia merkkejä. Kirjainkoko on tunnuksessa merkitsevä.",
		admin_desktop_id_disabled_hover: "Työpöydän tunnusta ei voi muuttaa. Jos haluat käyttää jotain toista tunnusta, sinun on luotava uusi työpöytä.",
		admin_desktop_name_hover: "Työpöydän nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Kokoonpano saa sisältää vain yhden oletustyöpöydän.",

		admin_repository_id_disabled_hover: "Tietovaraston tunnusta ei voi muuttaa. Jos haluat käyttää jotain toista tunnusta, sinun on luotava uusi tietovarastoyhteys.",
		admin_printService_enable: "Tulosta IBM Daeja ViewONE -tulostuspalvelun avulla:",
		admin_printService_enable_hover: "Jos otat IBM Daeja ViewONE -tulostuspalvelun käyttöön, järjestelmä muuntaa dokumentit PDF-muotoon ja ne voi tulostaa mistä tahansa selaimesta.<br><br>Jos poistat IBM Daeja ViewONE -tulostuspalvelun käytöstä, dokumentteja voi tulostaa vain selaimista, jotka tukevat Java-sovelmia.  Jotkin selaimet eivät tue Java-sovelmia eivätkä siksi tue tulostusta sovelmien avulla.<br><br>Lisätietoja tuetuista selaimista on käyttöohjeissa.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Käyttäjän kotihakemisto",
		admin_file_tracking_doc_directory_my_documents: "Käyttäjän dokumenttihakemisto",
		admin_file_tracking_doc_directory_qp: "Tarkennettu polku",
		admin_file_tracking_section_tile: "Tiedoston jäljityksen kokoonpano",
		admin_file_tracking_home_path: "Kotisivun polku",
		admin_file_tracking_my_documents: "Omat dokumentit",
		admin_file_tracking_exact_path: "Tarkennettu polku:",
		admin_file_tracking_qp: "Tarkennettu polku",
		admin_file_tracking_ev: "Ympäristömuuttuja",
		admin_file_tracking_ev_us: "Mukautettu ympäristömuuttuja ",
		admin_file_tracking_del_local_copy: "Poista paikallinen kopio:",
		admin_file_tracking_yes: "Kyllä",
		admin_file_tracking_no: "Ei",
		admin_file_tracking_del_local_copy_rt_state_editable: "Salli käyttäjien korvata tämä asetus",
		admin_file_tracking_del_local_copy_rt_state1: "Kyllä",
		admin_file_tracking_del_local_copy_rt_state2: "Ei",
		admin_file_Tracking_label: "Tiedoston jäljitys:",
		admin_file_Tracking_disable: "Poista käytöstä",
		admin_file_Tracking_enable: "Ota käyttöön",
		admin_file_tracking_label_hover_help: "Tiedoston jäljitys käyttää sovelmaa dokumenttien uloskuittaukseen ja lataukseen tiettyyn käyttäjien koneiden hakemistoon. Sovelman avulla IBM Content Navigator voi myös etsiä dokumentteja käyttäjien koneista, kun käyttäjät kuittaavat sisään dokumentteja.",
		admin_file_tracking_doc_directory: "Tallennuspaikan sijainti:",
		admin_file_tracking_open_file: "Avaa tiedosto automaattisesti",
		admin_file_Tracking_append_qualified_path: "Liitä hakemisto",
		admin_file_Tracking_append_qualified_path_hover_help: "Voit liittää hakemiston ympäristömuuttujan loppuun, jos haluat, että dokumentit tallennetaan tiettyyn alihakemistoon. <br/><br/>Voit esimerkiksi määrittää, että dokumentit ladataan käyttäjän kotihakemiston <i>EnterpriseDocuments</i>-hakemistoon.",
		admin_file_Tracking_append_ev: "Liitä ympäristömuuttuja",
		admin_file_Tracking_append_ev_hover_help: "Voit liittää ympäristömuuttujan, jos haluat, että dokumentit tallennetaan dynaamisesti määritettyyn hakemistoon, kuten käyttäjän hakemistoon.<br/><br/>Voit esimerkiksi määrittää, että dokumentit tallennetaan yhteiskäyttöön määritetyn verkkohakemiston <i>käyttäjänimi</i>-alihakemistoon. ",
		admin_file_tracking_doc_directory_hover_help: "Määritä, mihin dokumentit tallennetaan, kun ne kuitataan ulos ja ladataan.<br/><br/> <b>Vihje</b>: jos haluat tallentaa dokumentit käyttäjän kotihakemistoon tai oletusdokumenttihakemistoon, valitse <b>ympäristömuuttuja</b>, joka sisältää näihin sijainteihin osoittavat ennalta määritetyt muuttujat.",
		admin_file_tracking_qualified_path_hover_help: "Määritä hakemisto tai verkkohakemisto, johon haluat tallentaa dokumentit, käyttämällä Windows- tai Mac-käyttöjärjestelmän asianmukaista hakemistorakennetta. <ul><li>Jos käytössä on Windows-käyttöjärjestelmä, sisällytä polkuun asemakirjain (esimerkiksi C:\\Enterprise Documents).</li><li>Jos haluat tallentaa dokumentit yhteiskäytössä olevaan verkkohakemistoon, anna polku muodossa \\\\palvelimen_nimi\\hakemisto.</li></ul><br/><b>Tärkeää:</b> Jotta voit käyttää tätä asetusta, määrittämäsi hakemistorakenne on oltava luotavissa kaikkiin työasemiin ympäristössäsi.",
		admin_file_tracking_environment_variable_path_hover_help: "Määritä hakemisto tai verkkohakemisto, johon haluat tallentaa dokumentit, käyttämällä Windows- tai Mac-käyttöjärjestelmän asianmukaisia ympäristömuuttujia. <br/><br/><b>Käyttäjän kotihakemisto</b> -asetus tallentaa dokumentit seuraavaan hakemistoon:<br/><ul><li>Windows: C:\\Käyttäjät\\Käyttäjänimi</li><li>Mac: /Käyttäjät/Käyttäjänimi</li></ul><br/><b>Käyttäjän dokumenttihakemisto</b> -asetus tallentaa dokumentit seuraavaan hakemistoon:<br/><ul><li>Windows: C:\\Käyttäjät\\Käyttäjänimi\\Tiedostot</li><li>Mac: /Käyttäjät/Käyttäjänimi/Tiedostot</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Määritä, poistetaanko dokumentin paikallinen kopio, kun käyttäjät lisäävät dokumentteja tai kuittaavat niitä sisään tietovarastoon.<br/><br/>Kun poistat paikallisen kopion, voit<br/><ul><li>pakottaa yhdenmukaisuuden IT-käytäntöjen kanssa</li><li>varmistaa, että käyttäjät käsittelevät dokumenttien uusimpia versioita</li></ul><br/><b>Rajoitus:</b> Tätä asetusta ei käytetä, kun käyttäjät lisäävät dokumentteja vetämällä ja pudottamalla.<br/><br/>IBM Content Navigator for Microsoft Office -ohjelmassa työpöydän <b>Office-kokoonpano</b>-osassa on valittava vaihtoehto <b>Poista paikalliset tiedostot, kun käyttäjät lisäävät tai kuittaavat sisään dokumentin tai peruuttavat dokumentin uloskuittauksen</b>.",
		admin_file_tracking_open_file_hover_help: "Asetus korvaa kaikki dokumentin käsittelyä koskevat asetukset, jotka on määritetty käyttäjän Web-selaimessa. </br></br><b>Rajoitus:</b> IBM Content Navigator for Microsoft Office ei käytä tätä asetusta.",
		admin_file_tracking_over_write_file: "Korvaa paikallinen kopio:",
		admin_file_tracking_over_write_file_hover_help: "Määritä, korvataanko dokumentin paikallinen kopio, kun käyttäjät kuittaavat dokumentteja ulos tietovarastosta. <br/><br/>Kun korvaat paikallisen kopion, voit<br/><ul><li>varmistaa, että käyttäjät käsittelevät dokumenttien uusimpia versioita</li><li>estää kehotteen näyttämisen käyttäjille, kun saatavana on paikallinen kopio.</li></ul> </br></br><b>Rajoitus:</b> IBM Content Navigator for Microsoft Office ei käytä tätä asetusta jos valitset <b>Salli käyttäjien korvata tämä asetus</b> -vaihtoehdon.",
		admin_file_tracking_over_write_file_state_editable: "Salli käyttäjien korvata tämä asetus",
		admin_file_tracking_inline_help: "Tiedoston jäljitys yksinkertaistaa dokumenttien kuittausta sisään tietovarastoon ja dokumenttien kuittausta ulos tietovarastosta. Sen avulla voidaan myös hallita sitä, miten dokumentit tallennetaan käyttäjien koneisiin. <br/><br/>Lisäksi tiedoston jäljityksen avulla dokumentteja voidaan seurata useissa IBM Content Navigator -ohjelman komponenteissa, kuten Web-työasemaohjelmassa ja IBM Content Navigator for Microsoft Office -ohjelmassa.",

		// Box repository admin...
		admin_box_instructions: "Normaalitodennus tai palvelintodennus on otettava käyttöön, ennen kuin tietovarastoon muodostetaan yhteys.",
		admin_box_use_oauth: "Todennuslaji:",
		admin_box_use_oauth_hover: "Valitse normaalitodennus tai palvelintodennus tuotantoympäristössä, kun olet myöntämässä Box-dokumenttien käyttöoikeuksia IBM Content Navigator -ohjelmasta. Määritä arvot työasemaohjelman_tunnus ja OAuth2-työasemaohjelman_salaisuus, jotka liittyvät IBM Content Navigator -ohjelman tähän käyttöönottoon. Saat arvot Box-palvelusta, kun IBM Content Navigator -palvelinta varten on luotu Box-sovellus.<br/><br/>Valitse kehitysympäristössä Sovelluskehittäjän todennus -vaihtoehto. Sovelluskehittäjät voivat kirjautua Box-palveluun sovelluskehittäjän tilillään ja luoda sovelluskehittäjän tunnuksen, joka on voimassa 60 minuuttia. Näiden tunnusten avulla sovelluskehittäjät voivat kirjautua Box-palveluun käyttämällä tunnusta minkä tahansa käyttäjätunnuksen salasanana.",
		admin_box_oauth_client_id: "työasemaohjelman_tunnus:",
		admin_box_oauth_client_secret: "työasemaohjelman_salaisuus:",
		admin_box_oauth_subdomain: "Box-yritystilin aliverkkoalue:",
		admin_box_share: "Tehtävienhallinnan yhteystunnus:",
		admin_box_share_hover: "Box-kopioinnissa ja Box-yhteiskäytössä tehtävienhallinta käyttää pääkäyttäjän käyttäjätunnusta ja salasanaa ajaessaan tietovaraston sisältöä muokkaavia taustatehtäviä.<br/><br/>Valitse Määritä-vaihtoehto ja kirjaudu Box-palveluun käyttäen kelvollista Box-pääkäyttäjän tiliä.<br/><br/>Jos määrität työpöydän valitsemalla tämän Box-tietovaraston yhteistiedostojen tietovarastoksi, sinun on määritettävä Box-pääkäyttäjä, jolla on rajoittamaton Box-tallennustila.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Avaa tiedosto automaattisesti",
		file_tracking_runtime_overwrite_hover_help: "Jos et valitse tätä asetusta ja dokumentti on tallennettu paikalliseen tiedostojärjestelmään samalla nimellä, dokumentti kuitataan ulos, mutta sitä ei ladata, ellet tee jotakin seuraavista toimista:<br/><ul><li> Lataa dokumentti oletushakemiston alihakemistoon. Jos valitset alihakemiston, Web-sovellus voi jäljittää dokumentin sijainnin.</li><li>Nimeä ladattava dokumentti uudelleen. Dokumentin nimeäminen uudelleen estää nimiristiriidan.</li></ul>",
		open_file: "Avaa tiedosto automaattisesti",
		over_write_file: "Korvaa paikallinen kopio",
		checkout_and_download_file: "Kuittaa ulos ja lataa dokumentteja",
		download_to_local_directory: "Lataa kohteeseen:",
		checkout_and_download_button_title: "Kuittaa ulos ja lataa",
		checkout_without_java_confirmation_dialog: "Tiedoston jäljitystoiminto ei voi ladata ja seurata tiedostoa.",
		browse_for_directory: "Selaa",
		selected_documents: "Valitut dokumentit",

		checkout_without_java_confirmation_text: "Ongelman syynä voi olla jokin seuraavista:<br/><ul><li>Työasemassa ei ole asennettuna Runtime Environment (JRE) -ympäristöä.</li><li>Java-lisäosaa ei ole otettu käyttöön Web-selaimessa.</li><li>Web-selain ei tue Javaa.</li></ul><br/><br/>Voit ratkaista ongelman seuraavasti:<br/><br/><ul><li>Jos haluat jatkaa tiedoston latausta ilman, että tiedoston jäljitys on käytössä, valitse OK.</li><li>Jos haluat ladata tiedoston niin, että tiedoston jäljitys on käytössä, peruuta lataus ja varmista, että JRE on asennettuna työasemassa ja että Java-lisäosa on käytössä Web-selaimessa.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokumentti kuitattiin ulos ja ladattiin, mutta dokumenttia ei voi avata.",
		runtime_file_tracking_open_error_explanation: "Työasemaan asennettu käyttöjärjestelmä ei tue tämänlajisia tiedostoja.",
		runtime_file_tracking_open_error_userResponse: "Voit ratkaista ongelman tekemällä jonkin seuraavista toimista:<br/><br/><ul><li>Jos haluat käsitellä dokumenttia, avaa Web-työasemasovellus työasemassa, jossa on asennettuna eri käyttöjärjestelmä.</li><li>Jos haluat vain tarkastella dokumenttia, napsauta dokumenttia hiiren kakkospainikkeella Web-työasemasovelluksessa ja valitse sitten Avaa.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokumentti kuitattiin ulos, mutta sitä ei ladattu.",
		runtime_file_tracking_save_file_error_explanation: "Paikallisessa tiedostojärjestelmässä on jo samanniminen dokumentti, mutta sitä ei korvattu. ",
		runtime_file_tracking_save_file_error_userResponse: "Jos haluat ladata tiedoston tietovarastosta, korvaa dokumentin paikallinen kopio, kun lataat dokumentin tietovarastosta.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokumentti kuitattiin ulos, mutta sitä ei voi ladata tai avata.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Paikallisessa tiedostojärjestelmässä on jo samanniminen dokumentti. Tiedostoa ei kuitenkaan korvattu, ja se estää tietovarastossa olevan dokumentin latauksen ja avauksen.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Jos haluat ladata tiedoston tietovarastosta, korvaa dokumentin paikallinen kopio, kun lataat dokumentin tietovarastosta.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Dokumenttia ei voi ladata.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Ympäristömuuttujaa ${0}, joka on pakollinen tiedoston seurantaa varten, ei ole määritetty tässä työasemakoneessa.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Ratkaise ongelma seuraavasti:<br/><br/><ul><li>Lisää ympäristömuuttuja ${0} käyttöympäristön ympäristömuuttujiin.</li><li>Kirjaudu ulos Web-työasemaohjelmasta ja sulje Web-selain. Kirjaudu sitten uudelleen sisään.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Tiedoston jäljityssovelma ei voi ladata ja seurata dokumenttia.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Hakemistoa ${0}, joka on pakollinen tiedoston seurantaa varten, ei ole määritetty, eikä sitä voi luoda.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Voit ratkaista ongelman seuraavasti:<br/><br/><ul><li>Napsauta Selaa ja valitse toinen hakemisto työasemakoneessa. Jos valitset tämän vaihtoehdon, tiedostoa ei seurata.</li><li>Ota yhteyttä järjestelmän pääkäyttäjään ja pyydä häntä määrittämään eri hakemisto seurantatiedostoille. Tämä voi olla tarpeen esimerkiksi, jos määritetty hakemisto on tarkoitettu Windows-käyttöjärjestelmälle, mutta käytössä on Mac OS -järjestelmä. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Jos työpöytää käytetään laitteista, joissa on eri käyttöjärjestelmä, voit pienentää ongelmien esiintymisen todennäköisyyttä tekemällä jonkin seuraavista toimista:<br/><br/><ul><li>Määritä tallennussijainti työasemakoneissa ympäristömuuttujien avulla.</li><li>Luo eri työpöydät kunkin laitetyypin käyttäjille. Luo esimerkiksi työpöytä käyttäjille, joiden koneessa on asennettuna Windows-järjestelmä, ja työpöytä käyttäjille, joiden koneessa on asennettuna Mac OS -järjestelmä.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Pyyntöä ei voi käsitellä.",
		runtime_file_tracking_generic_error_explanation: "Tiedoston jäljityssovelmassa on ilmennyt virhe.",
		runtime_file_tracking_generic_error_userResponse: "Ota yhteyttä järjestelmän pääkäyttäjään.",
		runtime_file_tracking_generic_error_adminResponse: "Avaa Java-ohjauspääte ja kokeile lähettää pyyntö uudelleen. Virheen tiedot näytetään Java-ohjauspäätteessä.<br/><br/>Voit käyttää Java-ohjauspäätettä käyttöjärjestelmän mukaan joko Ohjauspaneelista (Windows) tai Järjestelmäasetuksista (Mac).",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Pyyntöä ei voi käsitellä",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Seuraavat tiedostot lisättiin tietovarastoon, mutta niitä ei poistettu paikallisesta tiedostojärjestelmästä ${0}. Näin käy tavallisesti, kun tiedostot ovat avoinna tai toinen sovellus käyttää niitä. Voi tarvittaessa poistaa tiedostot manuaalisesti.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Dokumenttia ei voi ladata.",
		runtime_file_tracking_ioexception_error_explanation: "Dokumenttia ei voi ladata.",
		runtime_file_tracking_ioexception_userResponse: "Käyttöoikeudet eivät ehkä riitä seuraavaan hakemistoon kirjoittamiseen: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Varmista, että sinulla on kirjoitusoikeudet määritettyyn hakemistoon.  Jos sinulla ei ole kirjoitusoikeuksia määritettyyn hakemistoon, ota yhteyttä järjestelmän pääkäyttäjään.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Pyyntöä ei voi käsitellä.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Virheen syynä voi olla jokin seuraavista:<br/><br/><ul><li>Käytät Safari-selainta Mac-käyttöjärjestelmässä, ja Java on ajossa turvallisessa tilassa.</li><li>Sinulla ei ole sen hakemiston luku- ja kirjoitusoikeuksia, joka on määritetty työpöytäsi tiedoston jäljityksen kokoonpanossa.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Voit jatkaa IBM Content Navigator -ohjelman käyttöä ilman tiedoston jäljitystä tai voit ratkaista ongelman seuraavasti:<br/><br/><ol><li>Ota Javan turvaton tila käyttöön Safari-selaimessa.</li><li>Jos järjestelmä kysyy, luotatko IBM Content Navigator -Web-sivustoon, lataa sivu napsauttamalla <b>Luota</b>-vaihtoehtoa ja ota sen jälkeen Javan turvaton tila käyttöön Safari-selaimessa.</li></ol><br/><br/>Jos Safari on määritetty oikein, ratkaise ongelma seuraavasti:<br/><br/><ol><li>Varmista, että sinulla on sen hakemiston luku- ja kirjoitusoikeudet, joka on määritetty työpöytäsi tiedoston jäljityksen kokoonpanossa.</li><li>Jos sinulla ei ole hakemiston luku- ja kirjoitusoikeuksia, muokkaa hakemiston käyttöoikeuksia.</li><li>Jos et voi muokata hakemiston käyttöoikeuksia, pääkäyttäjän on muutettava hakemistoa, joka on määritetty tiedoston jäljitystä varten, tai myönnettävä sinulle käyttöoikeudet työpöytään, johon on määritetty toinen tiedoston jäljityksen hakemisto.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Pyyntöä ei voi käsitellä.",
		runtime_file_tracking_java__notfound_error_explanation: "Ongelma ilmenee yleensä seuraavissa tilanteissa:<br/><br/><ul><li>Työasemassa ei ole asennettuna tai käytettävissä Runtime Environment (JRE) -ympäristöä.</li><li>Työasemasi JRE-versio ei ole yhteensopiva IBM Content Navigator -version kanssa.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Voit jatkaa IBM Content Navigator -ohjelman käyttöä ilman tiedoston jäljitystä tai voit ratkaista JRE-ongelman seuraavasti:<br/><br/><ol><li>Varmista, että Java-lisäosa (JRE) on asennettu työasemaan.</li><li>Varmista, että työasemassa oleva JRE-versio on yhteensopiva IBM Content Navigator -version. Luettelo tuetuista versioista on IBM:n ohjelmistotukisivuston julkaisussa <i>Hardware and software prerequisites for IBM Content Navigator</i>.</li><li>Varmista, että Java-lisäosa (JRE) on otettu käyttöön työasemassa.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Pyyntöä ei voi käsitellä.",
		runtime_file_tracking_security_error_explanation: "Sinulla ei ole sen hakemiston luku- ja kirjoitusoikeuksia, joka on määritetty työpöytäsi tiedoston jäljityksen kokoonpanossa.",
		runtime_file_tracking_security_error_userResponse: "Voit jatkaa IBM Content Navigator -ohjelman käyttöä ilman tiedoston jäljitystä tai voit tehdä yhteistyötä pääkäyttäjän kanssa seuraavasti:<ol><li>Varmista, että sinulla on sen hakemiston luku- ja kirjoitusoikeudet, joka on määritetty työpöytäsi tiedoston jäljityksen kokoonpanossa. </li><li>Jos sinulla ei ole hakemiston luku- ja kirjoitusoikeuksia, muokkaa hakemiston käyttöoikeuksia.</li><li>Jos et voi muokata hakemiston käyttöoikeuksia, pääkäyttäjän on muutettava hakemistoa, joka on määritetty tiedoston jäljitystä varten, tai myönnettävä sinulle käyttöoikeudet työpöytään, johon on määritetty toinen tiedoston jäljityksen hakemisto.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Seuraavat dokumentit ladattiin: ${0}.",

		admin_file_tracking_inline_help: "Tiedoston jäljitys yksinkertaistaa dokumenttien lisäystä tietovarastoon sekä dokumenttien kuittausta sisään tietovarastoon ja niiden kuittausta ulos tietovarastosta. Sen avulla voidaan myös hallita sitä, miten dokumentit tallennetaan käyttäjien koneisiin.<br/><br/>Lisäksi tiedoston jäljityksen avulla dokumentteja voidaan seurata useissa IBM Content Navigator -ohjelman komponenteissa, kuten Web-työasemaohjelmassa ja IBM Content Navigator for Microsoft Office -ohjelmassa.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Valikkotunnus ei saa alkaa etuliitteellä Oletus. Se on valikkotunnusten varattu etuliite.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Tunnus saa sisältää vain aakkosnumeerisia merkkejä. Kirjainkoko on tunnuksessa merkitsevä.",
		admin_repository_id_hover: "Tietovaraston tunnus sisältyy Web-työasemaohjelmien URL-osoitteisiin, suosikkeihin ja sähköpostilinkkeihin, joissa se määrittää, mihin tietovarastoon käyttäjät kirjautuvat. Tunnuksen on oltava yksilöllinen, eikä sitä voi muuttaa tietovaraston tallennuksen jälkeen.<br><br>Tunnus saa sisältää vain aakkosnumeerisia merkkejä. Kirjainkoko on tunnuksessa merkitsevä.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Työpöydän tunnus ei saa sisältää välilyöntejä eikä seuraavia merkkejä: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Työpöydän nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Näyttönimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Määritä tietovaraston nimi, joka on käyttäjien nähtävissä Web-työasemaohjelmassa.<br><br>Nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Määritä sen Content Manager OnDemand -palvelimen koneen nimi tai IP-osoite, johon haluat muodostaa yhteyden. Esimerkki: palvelin.tunnus.com.",
		admin_server_p8_name_hover: "Määritä Content Engine- tai Content Platform Engine -palvelimen URL-osoite.  URL-osoitteessa isojen ja pienten kirjainten ero on merkitsevä, ja osoitteen muoto on seuraava:<br><br><ul><li>WebSphere Application Server -ohjelmassa iiop://koneen_nimi:portin_numero/FileNet/Engine. Peruskäyttöönotoissa portin oletusnumero on 2809.</li><li>WebLogic Server -palvelimessa t3://koneen_nimi:portin_numero/FileNet/Engine. Portin oletusnumero on 7001.</li></ul><br><br>Käytä jatkuvasti käytössä olevissa Content Engine- ja Content Platform Engine -kokoonpanoissa jatkuvasti käytössä olevan EJB-siirron URL-osoitetta ilman cemp:-etuliitettä. ",
		admin_server_p8_protocol_hover: "Määritä viestintään Content Engine -palvelimen kanssa käytettävä yhteyskäytäntö.",
		admin_server_cm_name_hover: "Määritä Content Manager -tietokannan paikallinen luettelonimi tai kirjastopalvelinyhteyden nimi. Kyseinen nimi määritetään ICMSERVER-muuttujaan.",
		admin_repository_cmis_hover: "Määritä sen tietovaraston tunnus, johon haluat muodostaa yhteyden.  AtomPub-sidonnan palveludokumentti sisältää luettelon CMIS-ympäristön tietovaraston tunnuksista.  <br/><br/><b>Vihje:</b> Voit muodostaa yhteyden suoraan ensimmäiseen tai ainoaan AtomPub-sidonnan palveludokumenttiin määritettyyn tietovarastoon kirjoittamalla tähden (*).",
		admin_url_cmis_hover: "URL-osoitteen muoto vaihtelee palvelutoimittajan mukaan. Katso URL-osoite CMIS-ohjeesta tai pyydä osoite CMIS-palvelimen pääkäyttäjältä.",
		admin_repcfg_cmis_status_columns_hover: "Määritä objektien tilat, joiden kuvakkeet haluat tuoda näkyviin. Tilakuvakkeet tulevat näkyviin sisältöluettelon dokumenttien viereen.",
		admin_port_hover: "Määritä sen TCP/IP-portin numero, jota Content Manager OnDemand -palvelin kuuntelee. Oletusarvo on 1445.",
		admin_unified_searches_hover: "Määritä, voivatko käyttäjät tallentaa tietovarastojen välisiä hakuja tähän tietovarastoon.<br/><br/>Jos et ota tätä asetusta käyttöön, käyttäjät voivat silti luoda tietovarastojen välisiä hakuja, joita ajetaan tässä tietovarastossa. Voit estää käyttäjiä luomasta tietovarastojen välisiä hakuja työpöytätasolla.<br/><br/>Jos otat tietovarastojen väliset haut käyttöön, IBM Content Navigator luo tietovarastojen välisen haun tietomallin tietovarastoon.<br/><br/>IBM FileNet Content Manager -ohjelmassa sinun tulee muodostaa yhteys tietovarastoon Content Engine -pääkäyttäjänä, ennen kuin otat tämän asetuksen käyttöön.",
		admin_unified_searches_cm_hover: "Määritä, voivatko käyttäjät tallentaa tietovarastojen välisiä hakuja tähän tietovarastoon.<br/><br/>Jos et ota tätä asetusta käyttöön, käyttäjät voivat silti luoda tietovarastojen välisiä hakuja, joita ajetaan tässä tietovarastossa. Voit estää käyttäjiä luomasta tietovarastojen välisiä hakuja työpöytätasolla.<br/><br/>Jos otat tietovarastojen väliset haut käyttöön, IBM Content Navigator luo tietovarastojen välisen haun tietomallin tietovarastoon.",
		admin_max_results_hover: "Määritä, rajoitetaanko haun palauttamien tulosten määrää. Jos et rajoita hakutulosten määrää, järjestelmässä saattaa ilmetä suorituskykyongelmia, jos haun palauttamien tulosten määrä on suuri.",
		admin_timeout_hover: "Määritä sekunteina, miten kauan järjestelmä ajaa hakua tietovarastossa. Jos haku ei valmistu määritetyn ajan kuluessa, Web-työasemaohjelma peruuttaa pyynnön. Suositeltu aikakatkaisun enimmäisarvo on 60 sekuntia.",
		admin_object_store_hover: "Määritä objektisäilö, johon haluat muodostaa yhteyden Content Engine -palvelimesta.  Saat symbolisen nimen Content Platform Engine -hallintakonsolista.",
		admin_object_store_display_name_hover: "Objektisäilön näyttönimi on pakollinen, jos haluat käyttää IBM FileNet P8 -käsittelyreittejä. Saat objektisäilön näyttönimen Content Platform Engine -hallintakonsolista.",
		admin_all_searches_hover: "Määritä, rajoitetaanko <b>Kaikki haut</b> -kohdassa näkyvien hakujen määrää, kun käyttäjät hakevat tietovarastosta. Jos et rajoita hakujen määrää, järjestelmässä saattaa ilmetä suorituskykyongelmia, jos tietovarastossa on paljon tallennettuja hakuja.",

		admin_text_desktop: "Työpöytä",
		admin_text_repository: "Tietovarasto",
		admin_text_plugin: "Lisäosa",
		admin_text_theme: "Teema",
		admin_text_menu: "Valikko",
		admin_text_reason_code: "Luottamuksellisten tietojen poiston syy",
		admin_text_redactions: "Luottamuksellisten tietojen poistot",
		admin_text_viewer_mapping: "Katseluohjelman vastaavuusmääritys",
		admin_text_mobile_feature: "Mobiiliominaisuus",
		admin_test_interface_text: "Käyttöliittymän teksti",
		admin_text_interface_text_locale: "Lokalisoitu käyttöliittymän teksti",
		admin_text_icon_status: "Tilakuvake",
		admin_text_icon: "Kuvake",
		admin_text_file_type: "Tiedostolaji",
		admin_text_viewer: "Katseluohjelma",
		admin_text_desktop_access: "Työpöytäkäyttö",
		admin_text_mapped_properties_for_office: "Microsoft Officen vastaavuusmääritetyt ominaisuudet",
		admin_text_desktop_features: "Työpöydän ominaisuudet",
		admin_text_unknown: "Tuntematon",
		admin_folder_instruction: "Määritä dokumenttien ja kansioiden ominaisuudet, jotka ovat näkyvissä sisältöluettelossa, kun käyttäjät selaavat sitä. Voit määrittää myös ominaisuuksien näyttöjärjestyksen.",
		admin_search_instruction: "Määritä asetukset, jotka ovat oletusarvon mukaan valittuna, kun käyttäjät luovat haun.",
		admin_repository_office_conf_class_instruction: "Jos ympäristösi työasemakoneisiin on asennettu IBM Content Navigator for Microsoft Office, voit määrittää dokumenttien käsittelytavan, kun niitä lisätään tähän tietovarastoon tai niitä kuitataan ulos tästä tietovarastosta.",
		admin_repository_office_conf_instruction: "Määritä Microsoft Office -dokumentin ominaisuuksien ja tämän tietovaraston ominaisuuksien vastaavuus.<br/><br/>Kun ominaisuuksien vastaavuusmääritys on otettu käyttöön työpöydässä, johon tämä tietovarasto liittyy, järjestelmä käyttää Microsoft Office -dokumenttien ominaisuuksia määrittäessään tietovaraston ominaisuudet, kun käyttäjä lisää dokumentin IBM Content Navigator for Microsoft Office -ohjelmasta.",
		admin_repository_office_conf_prop_mapping_title: "Ominaisuuden vastaavuusmääritys",
		admin_repository_office_conf_prop_mapping_title1: "MS Office -integrointi",
		admin_office_conf_instruction: "Voit määrittää, miten IBM Content Navigator integroituu Microsoft Office -sovelluksiin, kun IBM Content Navigator for Microsoft Office on asennettuna työasemakoneisiin.<br /><br /><b>Tärkeää:</b> Jos valitset <b>Määritä Office-ominaisuudet</b> -vaihtoehdon, määritä myös ominaisuuden vastaavuusmääritys kullekin tähän työpöytään liitetylle tietovarastolle. Voit määrittää ominaisuuksien vastaavuusmääritykset kunkin ympäristössä käytössä olevan tietovaraston <b>Office-ominaisuudet</b>-välilehdessä.",
		admin_desktop_workflows_instruction: "<b>Vain IBM FileNet P8 -järjestelmät:</b> Määritä tässä työpöydässä näkyvät sovellustilat. Valittujen sovellustilojen järjestys määrittää sovellustilojen näyttöjärjestyksen Web-työasemaohjelmassa.<br><br><b>Vihje:</b> voit muuttaa sovellustilojen näyttönimiä määrittämällä uudet nimet hallintatyökalun <b>Nimiöt</b>-osassa.",
		admin_search_filtered_properties_instruction: "Määritä ominaisuudet, joiden perusteella käyttäjät voivat hakea. Voit piilottaa ominaisuudet, joiden perusteella et halua käyttäjien hakevan.",
		admin_search_filtered_operators_instruction: "Määritä operaattorit, jotka ovat käytettävissä, kun käyttäjät hakevat tiettyä tietolajia, kuten päivämäärää tai kokonaislukua. Voit piilottaa operaattorit, joita et halua käyttäjien valitsevan.",
		admin_search_default_search_results_instruction: "Määritä hakutuloksissa näytettävät dokumenttien ja kansioiden ominaisuudet. Voit piilottaa ominaisuudet, joiden et halua näkyvän hakutuloksissa.",
		admin_search_default_search_results_p8_cmis_instruction: "Määritä hakutuloksissa näytettävät dokumenttien ominaisuudet. Voit piilottaa ominaisuudet, joiden et halua näkyvän tuloksissa.",

		admin_datetimeOp: "Päivämäärä ja kellonaika",
		admin_floatOp: "Liukuluku",
		admin_integerOp: "Kokonaisluku",
		admin_stringOp: "Merkkijono",
		admin_binaryOp: "Binaari",
		admin_objectOp: "Objekti",
		admin_idOp: "Tunnus",
		admin_userOp: "Käyttäjä",
		admin_booleanOp: "Totuusarvo",

		admin_string: "Merkkijono",
		admin_long: "Pitkä",
		admin_date: "Päivämäärä",
		admin_double: "Pitkä liukuluku",
		admin_object: "Objekti",
		admin_guid: "GUID",
		admin_boolean: "Totuusarvo",

		admin_repcfg_heading: "Voit ohittaa tämän tietovaraston oletustoiminnan määrittämällä kokoonpanoparametrit.",
		admin_repcfg_heading_od: "Voit ohittaa tämän tietovaraston oletustoiminnan määrittämällä kokoonpanoparametrit.<br /><br /><b>Tärkeää:</b> jos haluat käyttää Web-työasemaohjelmaa Content Manager OnDemand -palvelimessa, määritä myös niiden parametrien arvot, jotka sisältyvät <b>Asetukset</b>-kohdan <b>Content Manager OnDemand</b> -välilehteen. Parametrit koskevat kaikkia Content Manager OnDemand -tietovarastoja, joihin muodostat yhteyden.",
		admin_repcfg_teamspaces: "Ryhmätyötilan hallinta:",
		admin_repcfg_enable: "Ota käyttöön",
		admin_repcfg_disable: "Poista käytöstä",

		admin_repcfg_deliver_redacted_pdf_files_as: "PDF-tiedostot, joista luottamukselliset tiedot on poistettu, toimitetaan muodossa:",
		admin_repcfg_burn_pdf_to_pdf: "PDF-tiedostot",
		admin_repcfg_burn_pdf_to_tiff: "TIFF-tiedostot",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "PDF-tiedosto, josta luottamukselliset tiedot on poistettu roolipohjaisesti, voidaan toimittaa työasemaan toisessa tiedostomuodossa. Kun tiedostomuoto muuttuu, myös tiedoston tunniste ja MIME-laji muuttuvat.<br><br>Esimerkki: kun PDF-tiedosto toimitetaan TIFF-tiedostona, tiedoston tunnisteeksi tulee .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Salli käyttäjien yhdistää ja jakaa sivuja, joissa on roolipohjaisia luottamuksellisten tietojen poistoja",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Valitse tämä asetus, jos haluat antaa käyttäjille mahdollisuuden yhdistää ja jakaa sivuja, joissa on roolipohjaisia luottamuksellisten tietojen poistoja. Käyttäjät, jotka eivät ole luottamuksellisten tietojen poiston muokkaajia, eivät voi muokata rooliin perustuvia luottamuksellisten tietojen poistoja eikä heillä ole poistoihin liittyvien luottamuksellisten tietojen käyttöoikeutta, vaikka tämä asetus on käytössä.",
		admin_repcfg_modify_teamspace_roles: "Salli omistajien muokata aiemmin luotujen ryhmätyötilojen rooleja",
		admin_repcfg_tm_delete_teamspace: "Salli omistajien poistaa ryhmätyötila ja sen sisältö",
		admin_repcfg_tm_delete_teamspace_id_missing: "Tietovaraston pääkäyttäjän käyttäjätunnus on määritettävä.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Tietovaraston pääkäyttäjän salasana on määritettävä.",
		admin_repcfg_teamspace_display_Recent: "Näytä vain äskettäin muokatut ryhmätyötilat ",
		admin_repcfg_teamspace_display_Recent_value: "Päivää edellisestä muokkauksesta:",

		admin_repcfg_folder_selector: "Pääkansio:",
		admin_repcfg_enable_folder_selector: "Ota käyttöön",
		admin_repcfg_disable_folder_selector: "Poista käytöstä",
		admin_repcfg_SSO: "Kertakirjaus:",
		admin_repcfg_teamspace_template_permission_text: "Määritä ryhmätyötilamallipohjan laatijat:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Määritä ryhmät tai käyttäjät, jotka voivat luoda ryhmätyötilamallipohjia. Käyttäjille ja ryhmille annetaan asianmukaiset suojausasetukset tarvittaviin luokkiin ja kansioihin. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Lisätietoja</a><br/><br/><b>Suositus:</b> Voit yksinkertaistaa ryhmätyötilan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Määritä ryhmät tai käyttäjät, jotka voivat luoda ryhmätyötilamallipohjia. Käyttäjät lisätään asianmukaisiin käyttöoikeusluetteloihin ja heille annetaan tarvittavat valtuudet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Lisätietoja</a><br/><br/><b>Suositus:</b> Voit yksinkertaistaa ryhmätyötilan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_teamspace_permission_text: "Määritä ryhmätyötilan roolit:",
		admin_repcfg_teamspace_permission_hover_p8: "Määritä ryhmät tai käyttäjät, jotka voivat luoda ryhmätyötiloja ja käyttää niitä. Käyttäjille annetaan asianmukaiset suojausasetukset tarvittaviin luokkiin ja kansioihin. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Lisätietoja</a><br/><br/><b>Suositus:</b> Voit yksinkertaistaa ryhmätyötilan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_teamspace_permission_hover_cm: "Määritä ryhmät tai käyttäjät, jotka voivat luoda ryhmätyötiloja ja käyttää niitä. Käyttäjät lisätään asianmukaisiin käyttöoikeusluetteloihin ja heille annetaan tarvittavat valtuudet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Lisätietoja</a><br/><br/><b>Suositus:</b> Voit yksinkertaistaa ryhmätyötilan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_entry_template_permission_text: "Määritä syöttömallipohjan roolit:",
		admin_repcfg_entry_template_permission_hover_p8: "Määritä ryhmät tai käyttäjät, jotka voivat luoda syöttömallipohjia ja käyttää niitä. Käyttäjille annetaan asianmukaiset suojausasetukset Syöttömallipohja-dokumenttiluokkaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Lisätietoja</a><br/><br/><b>Suositus:</b> Voit yksinkertaistaa syöttömallipohjan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_entry_template_permission_hover_cm: "Määritä ryhmät tai käyttäjät, jotka voivat luoda syöttömallipohjia ja käyttää niitä. Käyttäjät lisätään asianmukaisiin käyttöoikeusluetteloihin ja heille annetaan tarvittavat valtuudet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Lisätietoja</a><br /><br /><b>Suositus:</b> Voit yksinkertaistaa syöttömallipohjan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_office_template_permission_text: "Määritä mallipohjan roolit:",
		admin_repcfg_office_template_permission_hover_cm: "Määritä ryhmät tai käyttäjät, jotka voivat luoda, muokata ja käyttää Microsoft Office Online- tai Edit Service -mallipohjia. Käyttäjät lisätään asianmukaisiin käyttöoikeusluetteloihin ja heille annetaan tarvittavat valtuudet.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a><br /><br /><b>Suositus:</b> Voit yksinkertaistaa Microsoft Office Online- tai Edit Service -mallipohjan hallintaa käyttämällä ryhmiä.",
		admin_repcfg_draft_permission_text: "Määritä luonnosroolit:",
		admin_repcfg_draft_permission_hover_cm: "Määritä ryhmät tai käyttäjät, jotka voivat luoda luonnoksia Microsoft Office Online- tai Edit Service -dokumenteista ryhmätyömuokkauksen aikana. Kaikilla käyttäjillä, joiden tulee voida muokata dokumentteja ryhmätyönä Microsoft Office Online- tai Edit Service -palvelussa, on oltava riittävät oikeudet luoda luonnoksia. Käyttäjät lisätään asianmukaisiin käyttöoikeusluetteloihin ja heille annetaan tarvittavat valtuudet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a><br /><br /><b>Suositus:</b> Voit yksinkertaistaa luonnosten hallintaa käyttämällä ryhmiä.",
		admin_repcfg_search_permission_text: "Määritä hakuroolit:",
		admin_repcfg_search_permission_hover_p8: "Määritä ryhmät tai käyttäjät, jotka voivat luoda tai käyttää tallennettuja hakuja ja tietovarastojen välisiä hakuja. Käyttäjille annetaan asianmukaiset suojausasetukset tarvittaviin luokkiin. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Lisätietoja</a><br /><br /><b>Suositus:</b> Voit yksinkertaistaa haun hallintaa käyttämällä ryhmiä.",
		admin_repcfg_search_permission_hover_cm: "Määritä ryhmät tai käyttäjät, jotka voivat luoda, muokata tai käyttää tallennettuja hakuja ja tietovarastojen välisiä hakuja. Käyttäjät lisätään asianmukaisiin käyttöoikeusluetteloihin ja heille annetaan tarvittavat valtuudet. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Lisätietoja</a><br /><br /><b>Suositus:</b> Voit yksinkertaistaa haun hallintaa käyttämällä ryhmiä.",
		admin_repcfg_search_permission_title: "Haun roolit",
		admin_repcfg_search_permission_intro_text: "Varmista, että käyttäjillä on käyttöoikeudet työpöytään, joka tukee heidän rooliaan. Varmista esimerkiksi, että haun laatijoilla on käyttöoikeudet työpöytään, jonka avulla he voivat luoda tietovarastojen välisiä hakuja ja muita hakuja.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Ryhmätyötilamallipohjan pääkäyttäjät ovat käyttäjiä, joilla on <b>Täydet hallintaoikeudet</b> tietovarastossa (objektisäilössä). Et voi muuttaa ryhmätyötilamallipohjan pääkäyttäjien luetteloa hallintatyökalusta. <p>Ryhmätyötilamallipohjan pääkäyttäjät voivat muuttaa ryhmätyötilamallipohjia tai poistaa niitä. Käyttäjän, joka luo ryhmätyötilamallipohjan, ei tarvitse määrittää mallipohjaa yhteiskäyttöön ryhmätyötilamallipohjien pääkäyttäjien kanssa.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Kun määrität käyttäjän tai ryhmän ryhmätyötilamallipohjan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon ryhmätyötilamallipohjien luontia varten. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Lisätietoja</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Käyttäjät ja ryhmät, joille määritetään muut käyttöoikeudet kuin pääkäyttäjiin tai laatijoihin liittyvät käyttöoikeudet.<p>Voit siirtää näitä käyttäjiä ja ryhmiä ryhmätyötilamallipohjan laatijoiden rooliin poistamalla heidät Muut-roolista ja määrittämällä heidät sitten ryhmätyötilamallipohjan laatijoiksi.<p>Voit tarkastella näille käyttäjille ja ryhmille määritettynä olevia käyttöoikeuksia IBM Administration Console for Content Engine -ohjelmassa.",
		admin_repcfg_teamspace_administrators_hover_p8: "Ryhmätyötilan pääkäyttäjät ovat käyttäjiä, joilla on <b>Täydet hallintaoikeudet</b> tietovarastossa (objektisäilössä). Et voi muuttaa ryhmätyötilan pääkäyttäjien luetteloa hallintatyökalusta.<p>Ryhmätyötilan pääkäyttäjät voivat muuttaa ryhmätyötiloja tai poistaa niitä. Käyttäjän, joka luo ryhmätyötilan, ei tarvitse määrittää ryhmätyötilaa yhteiskäyttöön ryhmätyötilan pääkäyttäjien kanssa.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Kun määrität käyttäjän tai ryhmän ryhmätyötilan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon ryhmätyötilojen luontia varten. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Lisätietoja</a>",
		admin_repcfg_teamspace_user_hover_p8: "Kun määrität käyttäjän tai ryhmän ryhmätyötilan käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon ryhmätyötilojen käyttöä varten. Käyttäjän on kuitenkin oltava ryhmätyötilan jäsen, jotta hän voi käyttää ryhmätyötilaa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Lisätietoja</a><p><b>Vihje:</b> Jos haluat, että kaikki ympäristösi käyttäjät voivat nähdä ryhmätyötilat, voit lisätä #AUTHENTICATED-USERS-näennäistilin ryhmätyötilan käyttäjän rooliin.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Käyttäjät ja ryhmät, joille määritetään muut käyttöoikeudet kuin pääkäyttäjiin, laatijoihin tai käyttäjiin liittyvät käyttöoikeudet.<p>Voit siirtää näitä käyttäjiä ja ryhmiä ennalta määritettyihin rooleihin poistamalla heidät Muut-roolista ja määrittämällä heille sitten ryhmätyötilan roolit.<p>Voit tarkastella näille käyttäjille ja ryhmille määritettynä olevia käyttöoikeuksia IBM Administration Console for Content Engine -ohjelmassa.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Syöttömallipohjan pääkäyttäjät ovat käyttäjiä, joilla on <b>Täydet hallintaoikeudet</b> tietovarastossa (objektisäilössä). Et voi muuttaa syöttömallipohjan pääkäyttäjien luetteloa hallintatyökalusta. <p>Syöttömallipohjan pääkäyttäjät voivat muuttaa syöttömallipohjia tai poistaa niitä. Käyttäjän, joka luo syöttömallipohjan, ei tarvitse määrittää mallipohjaa yhteiskäyttöön syöttömallipohjien pääkäyttäjien kanssa.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Kun määrität käyttäjän tai ryhmän syöttömallipohjan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon syöttömallipohjien luontia varten. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Lisätietoja</a>",
		admin_repcfg_entry_template_user_hover_p8: "Kun määrität käyttäjän tai ryhmän syöttömallipohjan käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon syöttömallipohjien käyttöä varten. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Lisätietoja</a><p><b>Vihje:</b> Jos haluat, että kaikki ympäristösi käyttäjät voivat käyttää syöttömallipohjia, voit lisätä #AUTHENTICATED-USERS-näennäistilin syöttömallipohjan käyttäjän rooliin.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Käyttäjät ja ryhmät, joille määritetään muut käyttöoikeudet kuin pääkäyttäjiin, laatijoihin tai käyttäjiin liittyvät käyttöoikeudet.<p>Voit siirtää näitä käyttäjiä ja ryhmiä ennalta määritettyihin rooleihin poistamalla heidät Muut-roolista ja määrittämällä heille sitten syöttömallipohjan roolit.<p>Voit tarkastella näille käyttäjille ja ryhmille määritettynä olevia käyttöoikeuksia IBM Administration Console for Content Engine -ohjelmassa.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Kun määrität käyttäjän tai ryhmän ryhmätyötilamallipohjan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet luoda ryhmätyötilamallipohjia tietovarastossa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Lisätietoja</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Kun määrität käyttäjän tai ryhmän ryhmätyötilan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet luoda ryhmätyötiloja tietovarastossa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Lisätietoja</a>",
		admin_repcfg_teamspace_user_hover_cm: "Kun määrität käyttäjän tai ryhmän ryhmätyötilan käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet käyttää ryhmätyötiloja tietovarastossa. Käyttäjän on kuitenkin oltava ryhmätyötilan jäsen, jotta hän voi käyttää ryhmätyötilaa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Lisätietoja</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Kun määrität käyttäjän tai ryhmän syöttömallipohjan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet luoda syöttömallipohjia tietovarastossa. <br/><br/>Tietyn syöttömallipohjan suojausasetukset kuitenkin määrittävät, mitkä oikeudet käyttäjällä tai ryhmällä on syöttömallipohjaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Lisätietoja</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Kun määrität käyttäjän tai ryhmän syöttömallipohjan muokkaajaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet muokata syöttömallipohjia tietovarastossa. <br/><br/>Tietyn syöttömallipohjan suojausasetukset kuitenkin määrittävät, mitkä oikeudet käyttäjällä tai ryhmällä on syöttömallipohjaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Lisätietoja</a>",
		admin_repcfg_entry_user_hover_cm: "Kun määrität käyttäjän tai ryhmän syöttömallipohjan käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet käyttää syöttömallipohjia tietovarastossa. <br/><br/>Tietyn syöttömallipohjan suojausasetukset kuitenkin määrittävät, mitkä oikeudet käyttäjällä tai ryhmällä on syöttömallipohjaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Lisätietoja</a>",
		admin_repcfg_office_template_creators_hover_cm: "Kun määrität käyttäjän tai ryhmän Microsoft Office Online- tai Edit Service -mallipohjan laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet luoda mallipohjatiedostoja tietovarastossa. <br/><br/>Tietyn mallipohjatiedoston suojausasetukset kuitenkin määrittävät, mitkä oikeudet käyttäjällä tai ryhmällä on mallipohjaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a>",
		admin_repcfg_office_template_editors_hover_cm: "Kun määrität käyttäjän tai ryhmän Microsoft Office Online- tai Edit Service -mallipohjan muokkaajaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet muokata mallipohjatiedostoja tietovarastossa.  <br/><br/>Tietyn mallipohjatiedoston suojausasetukset kuitenkin määrittävät, mitkä oikeudet käyttäjällä tai ryhmällä on mallipohjaan. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a>",
		admin_repcfg_office_template_user_hover_cm: "Kun määrität käyttäjän tai ryhmän Microsoft Office Online- tai Edit Service -mallipohjan käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet käyttää mallipohjaa luodessaan uusia Office Online- tai Edit Service -dokumentteja Web-työasemaohjelmassa.  <br/><br/>Tietyn mallipohjatiedoston suojausasetukset kuitenkin määrittävät, mitkä oikeudet käyttäjällä tai ryhmällä on mallipohjaan.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a>",
		admin_repcfg_draft_creators_hover_cm: "Kaikille käyttäjille, joiden tulee voida muokata dokumentteja ryhmätyönä Microsoft Office Online- tai Edit Service -palvelussa, on määritettävä tämä rooli. Älä määritä käyttäjille Muokkaaja- tai Käyttäjä-roolia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a>",
		admin_repcfg_draft_editors_hover_cm: "Kaikille käyttäjille, joiden tulee voida muokata dokumentteja ryhmätyönä Microsoft Office Online- tai Edit Service -palvelussa, on määritettävä <b>Laatija</b>-rooli. Jos käyttäjälle on määritetty Muokkaaja-rooli, hän ei voi luoda luonnoksia, joiden luontia ryhmätyömuokkaus edellyttää.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a>",
		admin_repcfg_draft_user_hover_cm: "Kaikille käyttäjille, joiden tulee voida muokata dokumentteja ryhmätyönä Microsoft Office Online- tai Edit Service -palvelussa, on määritettävä <b>Laatija</b>-rooli. Jos käyttäjälle on määritetty Käyttäjä-rooli, hän ei voi luoda luonnoksia, joiden luontia ryhmätyömuokkaus edellyttää.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Lisätietoja</a>",		
		admin_repcfg_search_others_hover_p8: "Käyttäjät ja ryhmät, joille määritetään muut käyttöoikeudet kuin pääkäyttäjiin, laatijoihin tai käyttäjiin liittyvät käyttöoikeudet.<p>Voit siirtää näitä käyttäjiä ja ryhmiä ennalta määritettyihin rooleihin poistamalla heidät Muut-roolista ja määrittämällä heille sitten hakuroolit.<p>Voit tarkastella näille käyttäjille ja ryhmille määritettynä olevia käyttöoikeuksia IBM Administration Console for Content Engine -ohjelmassa.",		
		admin_repcfg_search_admins_hover_p8: "Haun pääkäyttäjät ovat käyttäjiä, joilla on <b>Täydet hallintaoikeudet</b> tietovarastossa (objektisäilössä). Et voi muuttaa haun pääkäyttäjien luetteloa hallintatyökalusta. <br /><br />Haun pääkäyttäjät voivat muuttaa hakuja tai poistaa niitä. Käyttäjän, joka luo haun, ei tarvitse määrittää hakua yhteiskäyttöön haun pääkäyttäjien kanssa.",
		admin_repcfg_search_creators_hover_p8: "Kun määrität käyttäjän tai ryhmän haun laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon hakujen luontia varten. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Lisätietoja</a>",
		admin_repcfg_search_user_hover_p8: "Kun määrität käyttäjän tai ryhmän haun käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukainen suojausasetus tietovarastoon hakujen käyttöä varten.<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Lisätietoja</a><br /><br /><b>Vihje:</b> Jos haluat, että kaikki ympäristösi käyttäjät voivat käyttää hakuja, voit lisätä #AUTHENTICATED-USERS-näennäistilin haun käyttäjän rooliin.<br/><br />Oletusasetuksen mukaan haun käyttäjät voivat luoda hakuja ja tietovarastojen välisiä hakuja, mutta he eivät voi tallentaa niitä. Voit estää haun käyttäjiä luomasta hakuja antamalla heidän käyttää työpöytää, jossa seuraavat vaihtoehdot ovat valittuina:<ul><li><b>Estä käyttäjiä luomasta hakuja</b></li><li><b>Estä käyttäjiä luomasta tietovarastojen välisiä hakuja</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Kun määrität käyttäjän tai ryhmän haun laatijaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet luoda ja tallentaa hakuja ja tietovarastojen välisiä hakuja tietovarastossa. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Lisätietoja</a><br /><br /><b>Tärkeää:</b> Varmista, että haun laatijat käyttävät työpöytää, jossa seuraavat vaihtoehdot eivät ole valittuina:<ul><li><b>Estä käyttäjiä luomasta hakuja</b></li><li><b>Estä käyttäjiä luomasta tietovarastojen välisiä hakuja</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Kun määrität käyttäjän tai ryhmän haun muokkaajaksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet muokata aiemmin määritettyjä hakuja ja tietovarastojen välisiä hakuja. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Lisätietoja</a><br /><br /><b>Vihje:</b> Oletusasetuksen mukaan haun muokkaaja voi luoda tietovarastojen välisiä hakuja ja muita hakuja, mutta hän ei voi tallentaa niitä. Voit estää haun muokkaajia luomasta hakuja antamalla heidän käyttää työpöytää, jossa seuraavat vaihtoehdot ovat valittuina:<ul><li><b>Estä käyttäjiä luomasta hakuja</b></li><li><b>Estä käyttäjiä luomasta tietovarastojen välisiä hakuja</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Kun määrität käyttäjän tai ryhmän haun käyttäjäksi, käyttäjälle tai ryhmälle annetaan asianmukaiset valtuudet avata ja ajaa tallennettuja hakuja ja tietovarastojen välisiä hakuja. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Lisätietoja</a><br /><br /><b>Vihje:</b> Oletusasetuksen mukaan haun käyttäjä voi luoda tietovarastojen välisiä hakuja ja muita hakuja, mutta hän ei voi tallentaa niitä. Voit estää haun käyttäjiä luomasta hakuja antamalla heidän käyttää työpöytää, jossa seuraavat vaihtoehdot ovat valittuina:<ul><li><b>Estä käyttäjiä luomasta hakuja</b></li><li><b>Estä käyttäjiä luomasta tietovarastojen välisiä hakuja</b></li></ul>",
		admin_repcfg_db_encoding: "Palvelimen tietokannan merkkien koodaus:",
		admin_repcfg_db_encoding_hover: "IBM Content Manager -tietokannan merkkien oletuskoodaus on UTF-8.",
		admin_repcfg_db_encoding_specify: "Määritä tietokannan merkkien koodaus",
		admin_repcfg_db_encoding_utf8: "UTF-8-koodaus",
		admin_repcfg_db_encoding_utf8_hover: "Määritä tämä asetus, jos haluat käyttää UTF-8-koodattua tietokantaa. IBM Content Navigator tarkistaa objektin ominaisuuden arvojen merkkijonojen pituuden UTF-8-koodauksen avulla.",
		admin_repcfg_db_encoding_other: "Muu koodaus",
		admin_repcfg_db_encoding_other_hover: "Määritä tämä asetus, jos haluat käyttää tietokantaa, jonka koodauksessa on käytetty muuta kuin UTF-8-koodausta. IBM Content Navigator tarkistaa objektin ominaisuuden arvojen merkkijonojen pituuden merkkien määrän avulla.",
		admin_repcfg_language_codes: "Palvelimen kielikoodit:",
		admin_repcfg_language_codes_avail: "Käytettävissä",
		admin_repcfg_language_codes_sel: "Valitut",
		admin_repcfg_pdf_conversion: "PDF-dokumenteiksi muunnettavat liitteiden MIME-lajit:",
		admin_repcfg_pdf_conversion_avail: "Käytettävissä",
		admin_repcfg_pdf_conversion_sel: "Valitut",

		admin_repcfg_box_share_enable_classes_label: "Luokat, joita muokataan Box-yhteiskäytön tukea varten:",
		admin_repcfg_box_share_enable_classes_hover: "Voit muokata luokkaa niin, että se tallentaa tiedoston tunnuksen Box-tietovarastoon, kun objekti määritetään yhteiskäyttöön.",
		admin_repcfg_box_share_enable_classes_warning: "Tärkeää: Kaikkia määritettyjä luokkia muokataan niin, että ne tukevat Box-yhteiskäyttöä. Muutosten tallennuksen jälkeen muutoksia ei voi enää poistaa luokista.<br><br>Jotta voit muokata luokkia, sinun on muodostettava yhteys tietovarastoon kirjastopalvelimen pääkäyttäjänä.",
		admin_repcfg_box_share_enable_classes_available: "Käytettävissä olevat luokat",
		admin_repcfg_box_share_enable_classes_selected: "Valitut luokat",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Tallenna Box-yhteiskäytön tunnus",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Luokkaa on jo muokattu niin, että se tallentaa Box-yhteiskäytön tunnuksen. Tätä asetusta ei voi poistaa.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Muokkaa luokkaa niin, että se tallentaa tiedoston tunnuksen Box-tietovarastoon, kun objekti määritetään yhteiskäyttöön.",

		admin_repcfg_redaction: "Roolipohjaiset luottamuksellisten tietojen poistot:",
		admin_repcfg_enable_redaction_hover: "Määritä, haluatko käyttää roolipohjaisia luottamuksellisten tietojen poistoja tämän tietovaraston dokumentteihin.<br/><br/>Roolipohjaisia luottamuksellisten tietojen poistoja käytetään, kun dokumentti ladataan, tulostetaan, hahmonnetaan katseluohjelmassa tai näytetään pienoiskuvana. Mitä käyttäjät näkevät, kun heidän roolinsa ja käytettävissä olevat luottamuksellisten tietojen poistokäytännöt vaikuttavat heidän näkemäänsä dokumenttiin.",

		admin_repcfg_redaction_policy_permission_text: "Määritä käytännön muokkaajat:",
		admin_repcfg_redaction_policy_editors_hover: "Valitse käyttäjät ja ryhmät, jotka laativat, muokkaavat ja poistavat luottamuksellisten tietojen poistokäytäntöjä ja luottamuksellisten tietojen käyttörooleja.",
		admin_repcfg_redaction_policy_editors_select_hover: "Luottamuksellisten tietojen poistokäytäntöjen muokkaajat voivat laatia, muokata ja poistaa käytäntöjä ja luottamuksellisten tietojen käyttörooleja.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Luottamuksellisten tietojen poistokäytäntöjen pääkäyttäjät voivat määrittää käytäntöjen muokkaajat.<br/><br/>Voit muuttaa luottamuksellisten tietojen poistokäytäntöjen pääkäyttäjien luetteloa IBM Administration Console for Content Engine -ohjelmassa.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Luottamuksellisten tietojen poistokäytäntöjen pääkäyttäjät voivat määrittää käytäntöjen muokkaajat.<br/><br/>Voit muuttaa luottamuksellisten tietojen poistokäytäntöjen pääkäyttäjien luetteloa käyttämällä IBM Content Manager -järjestelmän hallintatyöasemaa.",

		admin_repcfg_redaction_permission_text: "Määritä luottamuksellisten tietojen poiston muokkaajat:",
		admin_repcfg_redaction_editors_hover: "Valitse käyttäjät ja ryhmät, jotka laativat, muokkaavat ja poistavat roolipohjaisia luottamuksellisten tietojen poistoja. Kun olet valinnut käyttäjät ja ryhmät muokkaajiksi, sinun on määritettävä heidät muokkaajiksi luottamuksellisten tietojen poistokäytännöissä, ennen kuin he voivat muokata roolipohjaisia luottamuksellisten tietojen poistoja.",
   		admin_repcfg_redaction_editors_select_hover: "Luottamuksellisten tietojen poistojen muokkaajat voivat laatia, muokata ja peruuttaa roolipohjaisia luottamuksellisten tietojen poistoja, jos heidät on määritetty muokkaajiksi myös luottamuksellisten tietojen poistokäytännöissä.",
   		admin_repcfg_redaction_administrators_hover_p8: "Luottamuksellisten tietojen poistojen pääkäyttäjät voivat määrittää luottamuksellisten tietojen poistojen muokkaajat.<br/><br/>Voit muuttaa luottamuksellisten tietojen poistojen pääkäyttäjien luetteloa IBM Administration Console for Content Engine -ohjelmassa.",
   		admin_repcfg_redaction_administrators_hover_cm: "Luottamuksellisten tietojen poistojen pääkäyttäjät voivat määrittää luottamuksellisten tietojen poistojen muokkaajat.<br/><br/>Voit muuttaa luottamuksellisten tietojen poistojen pääkäyttäjien luetteloa käyttämällä IBM Content Manager -järjestelmän hallintatyöasemaa.",
		admin_repcfg_entry_template: "Syöttömallipohjan hallinta:",
		admin_repcfg_entry_template_enable_classes_label: "Luokat, joita muokataan syöttömallipohjien tukea varten:",
		admin_repcfg_oos_reference_attribute_label: "Office Online -palvelun viitemääritteet:",
		admin_repcfg_entry_template_enable_classes_hover: "Tärkeää: Kaikkia määritettyjä luokkia muokataan niin, että ne tukevat syöttömallipohjia. Muutosten tallennuksen jälkeen muutoksia ei voi enää poistaa luokista.<br><br>Voit muokata luokkaa seuraavista syistä:<br><ul><li>Haluat tallentaa kohteen lisäykseen käytetyn syöttömallipohjan tunnuksen, jotta syöttömallipohjan asetuksia käytetään kohdetta muokattaessa.</li><li>Vain hierarkkisen kansion luokat: haluat tukea syöttömallipohjan kansioliitoksia.</li></ul>Jotta voit muokata luokkia, sinun on muodostettava yhteys tietovarastoon kirjastopalvelimen pääkäyttäjänä.",
		admin_repcfg_entry_template_enable_classes_warning: "Tärkeää: Kaikkia määritettyjä luokkia muokataan niin, että ne tukevat syöttömallipohjia. Muutosten tallennuksen jälkeen muutoksia ei voi enää poistaa luokista.<br><br>Jotta voit muokata luokkia, sinun on muodostettava yhteys tietovarastoon kirjastopalvelimen pääkäyttäjänä.",
		admin_repcfg_entry_template_enable_classes_available: "Käytettävissä olevat luokat",
		admin_repcfg_entry_template_enable_classes_selected: "Valitut luokat",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Tallenna syöttömallipohjan tunnus",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Muokkaa luokkaa niin, että se tallentaa kohteen lisäykseen käytetyn syöttömallipohjan tunnuksen, jotta syöttömallipohjan asetuksia käytetään kohdetta muokattaessa.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Tallenna kansioliitokset",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Muokkaa luokkaa, jotta se voi tukea syöttömallipohjan kansioliitoksia. Tämä asetus on käytettävissä vain hierarkkisille kansion luokille.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Luokkaa on jo muokattu niin, että se tallentaa syöttömallipohjan tunnuksen. Tätä asetusta ei voi poistaa.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Luokkaa on jo muokattu niin, että se tallentaa kansioliitokset. Tätä asetusta ei voi poistaa.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Vain hierarkkisten kansion luokkien ja muiden kuin hierarkkisten luokkien avulla voidaan tallentaa kansioliitoksia.",
		admin_repcfg_entry_template_root_folder_association_title: "Pääkansioon liitetyt syöttömallipohjat:",
		admin_repcfg_entry_template_root_folder_association_hover: "Määritä, mitkä syöttömallipohjat haluat liittää IBM Content Manager -tietovaraston päähakemistoon.<br /><br />Jos liität syöttömallipohjia pääkansioon ja käyttäjät lisäävät objekteja hierarkkiseen kansioon, syöttömallipohjaa käytetään aina objektien lisäyksessä.",
		admin_repcfg_entry_template_root_folder_association_button: "Määritä liitokset",
		admin_repcfg_oos_enable_classes_label: "Luokat, joita muokataan Office Online- ja Edit Service -palvelujen tukea varten:",
		admin_repcfg_oos_enable_classes_warning: "Tärkeää: Kaikkia määritettyjä luokkia muokataan niin, että ne tukevat Microsoft Office Online- tai Edit Service -palvelua. Muutosten tallennuksen jälkeen kuhunkin luokkaan automaattisesti lisättyä viitemääritettä ei voi enää poistaa.<br><br>Jotta voit muokata luokkia, sinun on muodostettava yhteys tietovarastoon kirjastopalvelimen pääkäyttäjänä.",
		admin_repcfg_oos_enable_classes_available: "Käytettävissä olevat luokat",
		admin_repcfg_oos_enable_classes_selected: "Valitut luokat",
		admin_repcfg_oos_enable_classes_note: "Tärkeää:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Microsoft Office Online tai Edit Service ei tue tätä luokkaa.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Luokan versiokäytännöksi on määritetty versiointi aina, mitä Microsoft Office Online tai Edit Service ei tue. Valitse toinen luokka.",
		admin_repcfg_download_recording: "Seuraa latauksia:",
		admin_repcfg_download_recording_hover: "Latauksia seurataan oletusarvon mukaan, kun tietovarastossa on asennettuna Social Collaboration Base Extensions -lisäosa. Tämän asetuksen käytöstä poisto voi kuitenkin parantaa tietovaraston suorituskykyä.<br><br>Jos poistat tämän asetuksen käytöstä, käyttäjät näkevät ennen asetuksen käytöstä poistoa tapahtuneiden latausten määrän.",
		admin_repcfg_sync_service: "Sync Services -palvelut:",
		admin_repcfg_download_ignored: "Ohita tiettyjen käyttäjien lataukset:",
		admin_repcfg_download_ignored_hover: "Voit ohittaa tiettyjen käyttäjien (kuten pääkäyttäjien tai järjestelmätilien) pyytämät lataukset, jotta saat selville dokumentin ladanneiden käyttäjien määrän. Jos käytät esimerkiksi tiettyä tiliä sisällön lataukseen kuukausiraportin luontia varten, voit ohittaa toisen tilin pyytämät lataukset.<br><br><b>Rajoitus:</b> ryhmiä ei voi määrittää.",

		admin_repcfg_add_as_major_version: "Lisää pääversiona:",
		admin_repcfg_enable_add_as_major_version: "Kyllä",
		admin_repcfg_disable_add_as_major_version: "Ei",
		admin_repcfg_checkin_as_major_version: "Kuittaa sisään pääversiona:",
		admin_repcfg_enable_checkin_as_major_version: "Kyllä",
		admin_repcfg_disable_checkin_as_major_version: "Ei",
		admin_repcfg_annotation_security: "Kommentin suojaus:",
		admin_repcfg_inherit_annotation_security: "Kahdenna sisältävän dokumentin suojaus",
		admin_repcfg_default_annotation_security: "Käytä kommentin oletussuojausta",
		admin_repcfg_connection_point: "Käsittelyreitin yhteyspiste:",
		admin_repcfg_include_workflow_definition: "Tuo näkyviin käsittelyreitin määritysluokka:",
		admin_repcfg_include_form_template: "Tuo näkyviin lomakemallipohjaluokka:",
		admin_repcfg_enable_include_workflow_definition: "Kyllä",
		admin_repcfg_disable_include_workflow_definition: "Ei",

		admin_repcfg_status_columns: "Tilakuvakkeet:",
		admin_repcfg_status_columns_hover: "Määritä tilat, joiden kuvakkeet haluat nähdä. Tilakuvakkeet näkyvät sisältöluettelon dokumenttien, kansioiden ja työobjektien vieressä.",
		admin_repcfg_status_columns_documents_or_folders: "Näytä kuvake, kun dokumentit tai kansiot:",
		admin_repcfg_status_columns_documents: "Näytä kuvake, kun dokumentit:",
		admin_repcfg_status_columns_documents_checked_out: "Kuitataan ulos",
		admin_repcfg_status_columns_documents_declared_records: "Vahvistetaan asiakirjoiksi",
		admin_repcfg_status_columns_documents_minor_versions: "Sisältävät aliversioita",
		admin_repcfg_status_columns_documents_compound_document: "Ovat yhdistelmädokumentteja",
		admin_repcfg_status_columns_documents_bookmarks: "Sisältävät kirjanmerkkejä",
		admin_repcfg_status_columns_documents_hold: "Ovat pidossa",
		admin_repcfg_status_columns_documents_notes: "Sisältävät huomautuksia",
		admin_repcfg_status_columns_work_items: "Näytä kuvake, kun työobjektit:",
		admin_repcfg_status_columns_work_items_locked: "Ovat lukittuja",
		admin_repcfg_status_columns_work_items_checked_out: "Kuitataan ulos",
		admin_repcfg_status_columns_work_items_deadline: "Sisältävät määräajan",
		admin_repcfg_status_columns_work_items_suspended: "Niiden käsittely on keskeytetty",

		admin_repcfg_afp2pdf_config_file: "AFP2PDF-kokoonpanotiedosto:",
		admin_repcfg_transform_xml_file: "Mukautettu muuntotiedosto:",
		admin_repcfg_ssl: "SSL-suojaus:",
		admin_repcfg_enable_ssl: "Ota käyttöön",
		admin_repcfg_disable_ssl: "Poista käytöstä",
		admin_repcfg_keyringdb_file: "Avainrenkaan tietokantatiedosto:",
		admin_repcfg_keyringstash_file: "Avainrenkaan piilotustiedosto:",
		admin_repcfg_od_sso: "Kertakirjaus",
		admin_repcfg_od_enable_sso: "Ota käyttöön",
		admin_repcfg_od_disable_sso: "Poista käytöstä",
		admin_repcfg_od_sso_password: "Salasana",
		admin_repcfg_advanced_label: "Lisäasetukset",
		admin_repcfg_custom_properties_label: "Mukautetut ominaisuudet:",
		admin_repcfg_new_button_label: "Uusi",
		admin_repcfg_edit_button_label: "Muokkaa",
		admin_repcfg_delete_button_label: "Poista",
		admin_repcfg_custom_head1: "Nimi",
		admin_repcfg_custom_head2: "Arvo",
		admin_repcfg_ecpdialog_title_new: "Uusi mukautettu ominaisuus",
		admin_repcfg_ecpdialog_title_edit: "Muokkaa mukautettua ominaisuutta",
		admin_repcfg_ecpdialog_name: "Nimi:",
		admin_repcfg_ecpdialog_value: "Arvo:",
		admin_repcfg_ecpdialog_save: "Tallenna",
		admin_repcfg_ecpdialog_create: "Luo",
		admin_repcfg_ecpdialog_cancel: "Peruuta",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Arvo on pakollinen. Arvo ei saa sisältää tyhjämerkkejä, eikä se saa olla kaksoiskappale.",

		admin_repcfg_cmis_use_gzip_encoding: "Käytä GZIP-koodausta:",

		admin_repcfg_task_mgr_proxy: "Tehtävienhallinnan yhteystunnus:",
		admin_repcfg_task_mgr_proxy_hover: "Box-yhteiskäytössä ja ryhmätyötilan poistossa tehtävienhallinta käyttää pääkäyttäjän käyttäjätunnusta ja salasanaa ajaessaan tietovaraston sisältöä muokkaavia taustatehtäviä.<br><br>Valitse Määritä-vaihtoehto ja kirjaudu tietovarastoon käyttäen kelvollista tietovaraston pääkäyttäjän käyttäjätunnusta ja salasanaa.",
		admin_task_manager_not_enabled_warning: "Tämä tehtävä edellyttää tehtävienhallintapalvelua, mutta sitä ei ole otettu käyttöön.  Voit ottaa tehtävienhallintapalvelun käyttöön kaikkia työpöytiä varten asetusten Yleiset-sivulla.",
		admin_task_manager_not_enabled_and_user_warning: "Tämä tehtävä edellyttää tehtävienhallintapalvelua, mutta sitä ei ole otettu käyttöön. Määritä tällä sivulla tehtävienhallinnan yhteystunnus. Ota sitten asetusten Yleiset-sivulla käyttöön tehtävienhallintapalvelu kaikkia työpöytiä varten.",
		admin_task_manager_user_id_pw_not_set_warning: "Tämä tehtävä edellyttää tehtävienhallintapalvelua sekä pääkäyttäjän käyttäjätunnusta ja salasanaa. Määritä tällä sivulla tehtävienhallinnan yhteystunnus.",
		admin_repcfg_teamspaces_delete_task_id: "Tietovaraston pääkäyttäjä:",
		admin_repcfg_teamspaces_delete_task_password: "Salasana:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Kirjastopalvelimen pääkäyttäjä on määritettävä, jotta tehtävienhallintapalvelu voi poistaa ryhmätyötilan tietovarastosta.",
		admin_repcfg_teamspaces_delete_task_hover: "Kun käyttäjä poistaa ryhmätyötilan, oletusasetuksen mukaan ryhmätyötila piilotetaan. Ryhmätyötilan kansiot ja dokumentit säilyvät tietovarastossa. <br /> <br />Kun otat tämän asetuksen käyttöön, vain tietovaraston muihin kansioihin arkistoidut dokumentit jäävät tietovarastoon.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Jos ympäristössä on paljon ryhmätyötiloja, voi kestää kauan, ennen kuin kaikki ryhmätyötilat näkyvät <b>Ryhmätyötilat</b>-välilehdessä. Voit valita tämän asetuksen, jos haluat, että luettelo luodaan nopeammin.<br /><br />Jos käyttäjän on työskenneltävä ryhmätyötilassa, joka on määritetyn alueen ulkopuolella, käyttäjä voi etsiä ryhmätyötilan <b>Suodatin</b>-kentän avulla.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Jos valitset tämän asetuksen, käyttäjät, joilla on ryhmätyötilan omistajan rooli, voivat muokata niihin ryhmätyötiloihin liitettyjä rooleja, jotka on luotu ennen IBM Content Navigator -ohjelman versiota 2.0.2.<br /><br />Tämä asetus ei vaikuta ryhmätyötiloihin, jotka on luotu IBM Content Navigator -ohjelman versiolla 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Määritä, voivatko käyttäjät luoda ryhmätyötiloja ja ryhmätyötilamallipohjia tähän tietovarastoon.<br /><br /><b>Tärkeää:</b> tietovaraston on tuettava hierarkkisia kansioita.<br /><br />Jos otat ryhmätyötilat käyttöön, IBM Content Navigator luo ryhmätyötilan tietomallin tietovarastoon. Tietomalli sisältää ACL-objekteja, käyttöoikeuksia, käyttöoikeussarjoja ja kaksi uutta objektilajia.",
		admin_repcfg_folder_selector_hover: "Valitse kansio, jota haluat käyttää pääkansiona, kun käyttäjät etsivät dokumentteja selaamalla. Jos tietovarastoon ei ole määritetty hierarkkisia kansioita, tämän asetuksen avulla voit tukea selaamista määrittämällä pääkansion. Jos tietovarastoon on määritetty hierarkkisia kansioita, tämä asetus ohittaa tietovarastossa määritetyn pääkansion.",
		admin_repcfg_cm_use_sso_hover: "Määritä, voivatko käyttäjät, joille on määritetty luottamuksellinen sisäänkirjautuminen, käyttää kertakirjausta.<br /><br /><b>Tärkeää:</b> Tämän kokoonpanoparametrin toiminta edellyttää, että kertakirjaus on otettu käyttöön Content Manager -palvelimessa ja että WebSphere Application Server on määritetty LTPA-todennusta varten.",
		admin_repcfg_cm_direct_retrieve_hover: "Suoranouto on käytössä oletusarvoisesti, koska sen avulla Web-työasemaohjelma voi noutaa sisältöä nopeasti resurssien hallintaohjelmasta.<br /><br />Voit poistaa tämän asetuksen käytöstä, jos et halua, että Web-työasemaohjelma käyttää resurssien hallintaohjelmaa suoraan tai jos käytössäsi on palomuuri tai välityspalvelin, joka estää Web-työasemaohjelmaa käyttämästä resurssien hallintaohjelmaa URL-osoitteiden kautta. Palomuuri voi estää esimerkiksi käyttäjiä tarkastelemasta dokumentteja sovelmien katseluohjelmassa, kun suoranouto on käytössä.",
		admin_repcfg_cmItemTypesToDisplay: "Jos et halua käyttäjien näkevän resurssien objektilajeja IBM Content Manager -palvelimessa, voit tuoda näkyviin vain dokumenttimallin objektilajit. Järjestelmä tuo objektilajit näkyviin, kun käyttäjät luovat hakuja, lisäävät dokumentteja ja luovat kansioita.",
		admin_repcfg_cm_language_codes_hover: "Määritä kielet, joita käytetään tietojen palautuksessa Content Manager -palvelimesta. Palvelimen kielimääritysten luettelo määrittää käytettävissä olevien kielien luettelon.<br /><br /><b>Huomautus:</b> Web-työasemaohjelman tiedot näkyvät sillä kielellä, joka on määritetty käyttäjän Web-selaimessa.",
		admin_repcfg_cm_pdf_conversion_hover: "Määritä lajit, joiden mukaiset dokumentit ohjelma muuntaa PDF-muotoon käyttäjän lähettäessä moniosaisen dokumentin sähköpostiviestin liitteenä. Kaikki osat yhdistetään yhdeksi PDF-dokumentiksi.",
		admin_repcfg_use_teamspaces_p8_hover: "Määritä, voivatko käyttäjät luoda ryhmätyötiloja ja ryhmätyötilamallipohjia tähän tietovarastoon.<br /><br />Jos otat ryhmätyötilat käyttöön, IBM Content Navigator luo ryhmätyötilan tietomallin tietovarastoon. Tietomalli sisältää ominaisuusmallipohjia, mukautettuja objekteja, kansio-objektin ja useita kansioita.",
		admin_repcfg_use_entry_template_p8_hover: "Määritä, voivatko käyttäjät luoda ja hallita syöttömallipohjia tässä tietovarastossa IBM Content Navigator -ohjelmasta. Jos et ota tätä ominaisuutta käyttöön, käyttäjät voivat hakea ja käyttää jo tietovarastossa olevia syöttömallipohjia.<br /><br />Jos otat syöttömallipohjan hallinnan käyttöön, IBM Content Navigator päivittää tietovaraston syöttömallipohjan tietomallin. Päivitys sisältää uusia ominaisuuksia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Lisätietoja</a>",
		admin_repcfg_use_entry_template_cm_hover: "Määritä, voivatko käyttäjät luoda ja hallita syöttömallipohjia tässä tietovarastossa IBM Content Navigator -ohjelmasta.<br /><br />Jos otat syöttömallipohjan hallinnan käyttöön, IBM Content Navigator luo syöttömallipohjan tietomallin tietovarastoon. Tietomalli sisältää uuden ACL-objektin, uusia ominaisuuksia ja uuden objektilajin. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Lisätietoja</a>",
		admin_repcfg_sync_service_p8_hover: "Määritä, haluatko, että käyttäjät voivat synkronoida suosikkiobjektinsa työasemien ja mobiililaitteiden kesken.<br><br><b>Tärkeää:</b> Tämän ominaisuuden käyttö edellyttää, että myös seuraavat toimet toteutetaan:<br><ul><li>Määritä <b>Sync Services -palvelun julkinen URL-osoite</b> hallintatyökalun <b>Sync Services</b> -osassa.</li><li>Lisää tämä tietovarasto työpöytään, jota varten Sync Services -palvelut on otettu käyttöön.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Määritä, valitaanko pääversioasetus oletusarvoisesti, kun käyttäjät lisäävät dokumentteja tietovarastoon.<br /><br />Käyttäjät voivat poistaa tämän asetuksen käytöstä, jos he haluavat lisätä dokumentin aliversiona.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Määritä, valitaanko pääversioasetus oletusarvoisesti, kun käyttäjät kuittaavat dokumentteja sisään tietovarastoon.<br /><br />Käyttäjät voivat poistaa tämän asetuksen käytöstä, jos he haluavat kuitata dokumentin sisään aliversiona.",
		admin_repcfg_p8_annotation_security_hover: "Määritä kommenteissa oletusarvoisesti käytettävän suojauksen laji.<br /><br />Käyttäjät voivat muuttaa kommenttien suojausta.",
		admin_repcfg_p8_connection_point_hover: "Jos haluat käyttää IBM FileNet P8 -käsittelyreittejä, valitse Process Engine -yhteyspiste. Valitsemasi yhteyspiste määrittää tätä tietovarastoa käyttävien käyttäjien käytettävissä olevat käsittelyreitit.",
		admin_repcfg_p8_include_workflow_definition_hover: "Jos tuot Web-työasemaohjelmaan näkyviin IBM FileNet P8 -käsittelyreitin määrityksen dokumenttiluokan, käyttäjät voivat lisätä käsittelyreitin määrityksiä tietovarastoon ja hakea niitä tietovarastosta.",
		admin_repcfg_p8_include_form_template_hover: "Jos tuot Web-työasemaohjelmaan näkyviin IBM FileNet P8 -lomakemallipohjan dokumenttiluokan, käyttäjät voivat lisätä lomakemallipohjia tietovarastoon tai hakea niitä tietovarastosta.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Määritä tämän tietovaraston AFP2PDF-kokoonpanotiedoston tarkennettu polku Web-sovelluspalvelimessa. AFP-tietojen tarkastelu ja tulostus edellyttävät AFP2PDF Transform -apuohjelmaa.<br /><br /><b>Huomautus:</b> Tämän parametrin käyttö edellyttää, että AFP2PDF Transform -apuohjelma on asennettu.",
		admin_repcfg_od_transform_xml_file_hover: " Jos haluat muuntaa Content Manager OnDemand -sisällön käyttämällä mukautettua muuntoa, määritä muunnon määrityksessä käytettävän XML-tiedoston tarkennettu polku. XML-tiedoston on sijaittava Web-sovelluspalvelimessa.",
		admin_repcfg_od_ssl_hover: "Määritä, käytetäänkö SSL-suojausta IBM Content Navigator -sovelluspalvelimen ja Content Manager OnDemand -kirjastopalvelimen sekä objektipalvelimien välisen tietoliikenteen salauksessa.<br /><br /><b>Tärkeää:</b> kun otat SSL-suojauksen käyttöön Content Manager OnDemand -palvelimessa, se ei koske IBM Content Navigator -sovelluspalvelimen, Web-palvelimen tai käyttäjien työasemien välistä tietoliikennettä.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Määritä avainrenkaan tietokantatiedoston tarkennettu polku tälle tietovarastolle Web-sovelluspalvelimessa. Esimerkki: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Avainrenkaan tietokantatiedosto sisältää luotettavat päävarmenteet. Käytä vahvaa tiedostojärjestelmän suojausta, jos haluat estää tiedoston luvattoman käytön.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Määritä avainrenkaan piilotustiedoston tarkennettu polku tälle tietovarastolle Web-sovelluspalvelimessa. Esimerkki: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Avainrenkaan piilotustiedosto sisältää avainrenkaan tietokantatiedoston salasanan. Käytä vahvaa tiedostojärjestelmän suojausta, jos haluat estää tiedoston luvattoman käytön.",
		admin_repcfg_od_sso_password_hover: "Määritä salasana, jota käytetään OnDemand-palvelimen kertakirjauksessa.",
		admin_repcfg_od_custom_properties_hover: "ODWEK-Java-ohjelmointirajapinta tukee mukautettuja ominaisuuksia. Jos haluat käyttää mukautettuja ominaisuuksia muodostaessasi yhteyden tietovarastoon Web-työasemaohjelman kautta, määritä mukautettujen ominaisuuksien nimet ja arvot.<br /><br />Lisätietoja tuetuista mukautetuista ominaisuuksista on ODWEK-Java-ohjelmointirajapinnan Javadoc-dokumenteissa, jotka sijaitsevat ODWEK-asennushakemiston /api-alihakemistossa.",
		admin_repcfg_od_custom_properties_name_hover: "Anna ominaisuuden nimi.",
		admin_repcfg_od_custom_properties_value_hover: "Anna ominaisuuden arvo.",
		admin_repcfg_od_use_sso_hover: "Määritä, voivatko käyttäjät käyttää kertakirjausta.<br /><br /><b>Tärkeää:</b> Tämän kokoonpanoparametrin toiminta edellyttää, että kertakirjaus on otettu käyttöön Content Manager OnDemand -palvelimessa.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Käytä GZIP-koodausta tässä CMIS-lähteessä.",
		admin_repcfg_cm_use_part_file_name: "Dokumenttien latauksessa käytettävä tiedoston nimi:",
		admin_repcfg_cm_use_part_file_name_help: "Määritä, kuina dokumenttien tiedoston nimet määritetään, kun käyttäjä lataa dokumentteja.",
		admin_repcfg_cm_use_part_file_name_enable: "Käytä tiedoston nimeä",
		admin_repcfg_cm_use_part_file_name_disable: "Käytä tietovarastossa olevan objektin nimeä",
		admin_repcfg_add_doc_name: "Lisätyn dokumentin oletusnimi:",
		admin_repcfg_add_doc_name_hover: "Käyttäjät voivat muuttaa nimeä ennen dokumentin lisäystä.",
		admin_repcfg_add_doc_name_empty: "Ei mitään (tyhjä)",
		admin_repcfg_add_doc_name_file_name: "Valitun dokumentin tiedoston nimi",

		admin_repcfg_compound_documents: "Yhdistelmädokumentin ominaisuudet:",
		admin_repcfg_compound_documents_hover: "Ota käyttöön P8-yhdistelmädokumentin ominaisuudet, kuten siirtyminen.",
		admin_repcfg_cm_action_list_config_enabled: "Työkohteen toimintoluettelo:",
		admin_repcfg_cm_action_list_config_hover: "Kun määrität dokumenttien reitityksen Content Manager -järjestelmän hallintatyöasemassa, voit luetella toiminnot, jotka käyttäjä voi toteuttaa työkohteelle.<br /><br />Ota asetus käyttöön, jos haluat käyttää Content Manager -palvelimen toimintoluetteloa. Näitä asetuksia käytetään työkohteen pikavalikossa ja Muokkaa ominaisuuksia -ikkunassa.<br /><br /><b>Tärkeää:</b> Toimintoluettelon asetukset ohittavat kaikki Content Navigator -hallintatyökalussa määritetyt mukautetut valikot. Jos toimintoluettelossa ei ole asetuksia, käyttäjä ei voi toteuttaa mitään toimintoja työkohteille.",

		admin_repcfg_box_share: "Box-yhteiskäyttö",
		admin_repcfg_box_share_p8_hover: "Antaa käyttäjien määrittää yhteiskäyttöön tässä tietovarastossa olevan dokumentin. Dokumentti määritetään yhteiskäyttöön kopioimalla tiedosto Box-tietovarastoon, luomalla linkki ja lähettämällä se sähköpostitse.<br /><br />Jos Box-yhteiskäyttö otetaan käyttöön, IBM Content Navigator luo tietovarastoon Box-yhteiskäytön tietomallin. Jos halutaan asentaa IBM Content Navigator -ohjelman Box-yhteiskäyttölisäosa, tietovarastoon tulee muodostaa yhteys kirjastopalvelimen pääkäyttäjänä.",

		admin_menu_type_icon: "Valikkolajin kuvake",
		admin_menu_toolbar_hover: "Työkalurivi",
		admin_menu_toolbar_custom_hover: "Mukautettu työkalurivi",
		admin_menu_contextMenu_hover: "Pikavalikko",
		admin_menu_contextMenu_custom_hover: "Mukautettu pikavalikko",

		admin_menu_contextMenu_custom_empty: "Määritetyissä lisäosissa ei ole määritetty mukautettuja pikavalikoita.",
		admin_menu_toolbar_custom_empty: "Määritetyissä lisäosissa ei ole määritetty mukautettuja työkalurivejä.",

		admin_file_type_category_filters: "Tiedostolajin suodattimet:",
		admin_file_type_category_filters_hover_help: "Määritä sellaisten tiedostolajien luettelo, joita käyttäjät voivat käyttää seuraavissa tilanteissa:<ul><li>kun he haluavat vähentää hakutulosten määrää haettaessa sisältöä IBM Content Navigator for Microsoft Office -sovelluksesta<li>kun he haluavat vähentää hakutulosten määrää haettaessa sisältöä Web-työasemaohjelman IBM FileNet P8 -tietovarastosta<li>kun he haluavat rajoittaa tiedostolajeja, joita käyttäjät voivat lisätä tietovarastoon käytettäessä syöttömallipohjaa.</ul>",
		admin_file_type_only_use_in_et_folder_association: "Näytä vain syöttömallipohjan kansioliitokset",
		admin_office_config_properties_label: "Office-ominaisuudet",
		admin_office_config_type_label: "Tietolaji",
		admin_office_config_mapped_property_label: "Tietovarasto-ominaisuus",
		admin_office_config_properties_hover_help: "Kirjoita ja lisää kaikkien sellaisten Microsoft Office -ominaisuuksien nimet, jotka haluat määrittää vastaamaan tietovaraston ominaisuuksia. Kaikkien ominaisuuksien tietolajien on täsmättävä.",
		admin_office_config_mapped_property_hover_help: "Jos haluat määrittää Office-ominaisuudelle vastaavuuksia useaan tietovaraston ominaisuuteen, sinun on luotava uusi ominaisuuden vastaavuusmääritys.",
		admin_new_property_mapping_title: "Uusi ominaisuuden vastaavuusmääritys",
		admin_property_mapping_title: "Muokkaa ominaisuuden vastaavuusmääritystä",
		admin_property_mapping_instruction: "Määritä, mitkä Microsoft Office -ominaisuudet haluat määrittää vastaamaan tietovaraston ominaisuuksia. Office-ominaisuuksien tietolajin on vastattava tietovaraston ominaisuuksien tietolajia. <br /><br />Jos Office-dokumentti sisältää useita vastaavuusmäärityksen ominaisuuksia, IBM Content Navigator täyttää tietovaraston ominaisuuden luettelon ensimmäisen ominaisuuden perusteella.",
		admin_ms_general_settings: "Yleinen kokoonpano:",
		admin_ms_delete_local_settings: "Poista paikalliset tiedostot, kun käyttäjät:",
		admin_ms_outlook_options: "Outlook-integrointi:",
		admin_ms_enable_props_mapping: "Määritä Office-ominaisuudet vastaamaan tietovaraston ominaisuuksia, kun käyttäjät",
		admin_ms_open_doc_when_checkout: "Dokumentin automaattinen uloskuittaus avattaessa",
		admin_ms_open_doc_when_checkout_hover_help: "Kun tämä asetus on valittuna, käyttäjä ei voi korvata tietovaraston tiedostoa sen vanhemmalla versiolla.",
		admin_ms_prompt_close_office: "Pyydä käyttäjiä kuittaamaan dokumentit sisään, kun he sulkevat Office-sovellukset",
		admin_ms_prompt_close_office_hover_help: "Valitsemalla tämän asetuksen voit estää käyttäjiä unohtamasta kuitata töitään sisään.",
		admin_ms_add_with_entry_template_only: "Näytä vain Lisää mallipohjan avulla -toiminto",
		admin_ms_delete_local_on_add: "Poista paikalliset tiedostot, kun käyttäjät lisäävät dokumentteja",
		admin_ms_delete_local_on_checkin: "Poista paikalliset tiedostot, kun käyttäjät kuittaavat sisään dokumentteja tai peruuttavat uloskuittauksen",
		admin_ms_delete_local_on_add_hover_help: "Kun käyttäjä lisää dokumentin IBM Content Navigator for Microsoft Office -ohjelmassa, dokumentti lisätään tietovarastoon ja dokumentin paikallinen kopio jää auki, joten käyttäjät voivat kuitata dokumentin heti ulos ja tehdä muutoksia.<br /><br />Valitsemalla tämän vaihtoehdon voit sulkea ja poistaa dokumentin paikallisen kopion automaattisesti lisättyäsi dokumentin tietovarastoon.",
		admin_ms_delete_local_on_checkin_hover_help: "Kun käyttäjä kuittaa dokumentin sisään IBM Content Navigator for Microsoft Office -ohjelmassa, dokumentti kuitataan sisään tietovarastoon ja dokumentin paikallinen kopio jää auki. Dokumentin paikallinen kopio jää auki myös uloskuittauksen peruutuksen jälkeen. Kun dokumentin paikallinen kopio on auki, käyttäjät voivat kuitata dokumentin heti uudelleen ulos ja tehdä muutoksia.<br /><br />Valitsemalla tämän vaihtoehdon voit sulkea ja poistaa dokumentin paikallisen kopion automaattisesti kuitattuasi dokumentin sisään tai käytettyäsi uloskuittauksen peruutusta.",
		admin_ms_delete_local_on_save: "Tallenna dokumentti",
		admin_ms_prompt_for_props_on_add: "Kehota käyttäjiä antamaan ominaisuuksien arvot, kun he lisäävät sähköpostiviestejä tietovarastoon",
		admin_ms_prompt_for_props_on_add_hover_help: "Jos tätä asetusta ei valita, Web-työasemaohjelma käyttää tietovarastoon määritettyä Outlook-ominaisuuden vastaavuusmääritystä.<br /><br />Jos käytössä on siihen kansioon liitettyjä syöttömallipohjia, johon sähköpostiviestit lisätään, järjestelmä ei ehkä pyydä käyttäjää syöttämään ominaisuuksia.",
		admin_ms_delete_email_on_add: "Poista sähköpostiviesti sähköpostipalvelimesta, kun viesti lisätään tietovarastoon",
		admin_ms_send_email_as_link_only: "Estä käyttäjiä lähettämästä dokumentteja liitteinä",
		admin_ms_send_email_as_link_only_hover_help: "Kun tämä asetus on valittuna, käyttäjät voivat lähettää dokumentteja vain Outlook-linkkeinä. Asetuksen avulla varmistetaan, että vain sellaiset käyttäjät voivat tarkastella dokumentteja, joilla on tarvittavat käyttöoikeudet.",
		admin_ms_enable_prop_mapping_for_add: "Määritä Office-ominaisuudet vastaamaan tietovaraston ominaisuuksia, kun käyttäjät lisäävät tai kuittaavat sisään dokumentteja",
		admin_ms_checkout_document_after_add: "Kuittaa dokumentit automaattisesti ulos sen jälkeen, kun ne on lisätty tietovarastoon",
		admin_no_default_document_type_filtering: "Palauta oletusarvon mukaan kaikki dokumenttilajit, kun käyttäjät tekevät hakuja",
		admin_no_default_document_type_filtering_hover_help: "IBM Content Navigator for Microsoft Office -ohjelmassa oletustoiminta on, että käyttäjät näkevät vain nykyisen sovelluksen dokumenttilajin, kun he tekevät hakuja. Word-dokumentti on esimerkiksi valittuna oletusarvon mukaan, kun käyttäjät tekevät hakuja Microsoft Word -ohjelmasta.<br/><br/>Tämän asetuksen valinta kuitenkin poistaa Dokumenttilajit-valintaruutujen valinnat, jolloin käyttäjät näkevät kaikki haun palauttamat dokumentit. Käyttäjät voivat ohittaa asetuksen valitsemalla vähintään yhden dokumenttilajin ennen haun tekemistä.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Määritä, haluatko määrittää Microsoft Office -dokumentteihin määritetyt ominaisuudet vastaamaan tietovarastoon määritettyjä ominaisuuksia.<br /></br /><b>Tärkeää:</b> Jos otat tämän ominaisuuden käyttöön, määritä käyttöympäristössä kunkin tietovaraston Office-ominaisuudet. Jos et määritä Office-ominaisuuksia vastaamaan tietovaraston ominaisuuksia, ominaisuus ei toimi.<br /><br />Tämä asetus ei ole käytössä Microsoft Outlook -ohjelmassa.",
		admin_ms_checkout_document_after_add_hover_help: "Valitsemalla tämän vaihtoehdon voit vähentää niiden vaiheiden määrää, joita käyttäjän on tehtävä voidakseen työskennellä dokumenttien kanssa sen jälkeen, kun ne on lisätty tietovarastoon.<br /></br /><b>Vihje:</b> Valitsemalla <b>Pyydä käyttäjiä kuittaamaan dokumentit sisään, kun he sulkevat Office-sovellukset</b> -vaihtoehdon, voit varmistaa, että käyttäjät kuittaavat tiedostot takaisin sisään tietovarastoon.",
		admin_ms_show_details_recently_used: "Näytä <b>Äskettäin käytetyt</b> -luettelon objektin tiedot",
		admin_ms_show_details_recently_used_hover_help: "Kun tarkastelet Äskettäin käytetyt -luettelon objekteja, niiden tiedot on oletusarvon mukaan piilotettu, jotta objekteja voi olla enemmän näkyvissä. Kun valitset tämän vaihtoehdon Äskettäin käytetyt -luettelosta, tietoruudussa näkyvät oletusarvon mukaan ensimmäisen dokumentin tiedot.",
		admin_ms_show_no_permissions_warning: "Näytä varoitukset, kun käyttäjät muokkaavat ominaisuuksia tai kuittaavat sisään dokumentin, mutta heillä ei ole dokumentin syöttömallipohjan katseluoikeuksia",
		admin_ms_show_no_permissions_warning_hover_help: "Jos tietovaraston dokumentti on luotu syöttömallipohjan avulla, mutta käyttäjällä ei ole dokumentin syöttömallipohjan katseluoikeuksia, järjestelmä ei nouda syöttömallipohjaa.<br /><br/>Kun käyttäjä muokkaa dokumentin ominaisuuksia, ne tulevat siksi näkyviin syöttömallipohjaa käyttämättä. Ja kun käyttäjä kuittaa dokumentin sisään, järjestelmä kuittaa sen sisään käyttämättä syöttömallipohjaa.<br /><br />Oletusarvon mukaan käyttäjälle ei ilmoiteta, että näissä toiminnoissa ei käytetä syöttömallipohjaa. Vain lokitiedostoon kirjataan varoitus.<br /><br />Valitse tämä vaihtoehto, jos haluat näyttää varoitukset, jotka ilmoittavat heti käyttäjälle, että syöttömallipohjaa ei käytetä.",
		admin_ms_hide_search_actions: "Pienennä hakusuodattimien osa",
		admin_ms_hide_search_actions_hover_help: "Käyttäjät voivat oletusarvon mukaan ottaa toimintosuodattimen käyttöön määrittämällä toiminnon, käyttäjän tai käyttäjäryhmän ja valitsemalla päivämäärän tai päivämääräalueen, jolloin kyseinen toiminto on toteutettu. Voit esimerkiksi hakea vain dokumentteja, jotka olet lisännyt tässä kuussa.<br /><br />Jos et halua käyttäjien käyttävän toimintosuodattimia, piilota toimintosuodattimet valitsemalla tämä vaihtoehto ja vähennä hakuehtoja määritettäessä näkyviä kenttiä.",
		admin_ms_hide_save_document: "Piilota valintanauhan <b>Tallenna</b>-vaihtoehto.",
		admin_ms_hide_save_document_hover_help: "<b>Tallenna</b>-valinnalla käyttäjät voivat tallentaa dokumentin muutokset tietovarastoon kuittaamatta dokumenttia sisään.",
		admin_ms_indicate_managed_email_on_add: "Ilmoita, onko sähköpostiosoite jo lisätty tietovarastoon",
		admin_ms_indicate_managed_email_on_add_hover_help: "Kun valitset tämän asetuksen, käyttäjille ilmoitetaan, että sähköpostiosoite on jo lisätty tietovarastoon. Tämä voi vähentää sähköpostiosoitteen lisäyskertoja.  Kun asetus on valittuna, Microsoft Outlook -ohjelmaan lisätään uusi IBM ECM -väriluokka. Tietovarastoon lisätyt sähköpostiosoitteet lisätään automaattisesti Hallittu IBM ECM -ratkaisussa -luokkaan.",
		admin_ms_edit_group_add_command_configuration: "Lisää asetuksia Muokkaa-ryhmään:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Määritä, mitkä <b>lisäysasetukset</b> ovat käytettävissä valintanauhan <b>Muokkaa</b>-ryhmästä:<ul><li>Valitse <b>Näytä kaikki lisäysasetukset</b>, kun haluat näyttää lisäyspainikkeen ja kaikki Muokkaa-ryhmästä käytettävissä olevat lisäystoiminnot.</li><li>Valitse <b>Piilota kaikki lisäysasetukset</b>, kun haluat estää käyttäjiä lisäämästä dokumentteja tietovarastoon tai kun haluat käyttäjien lisäävän dokumentteja vain ryhmätyötilasta.</li><li>Valitse <b>Piilota Lisää mallipohjan avulla -toiminto</b>, jos haluat pakottaa syöttömallipohjien kansioliitokset ja estää käyttäjiä valitsemasta eri syöttömallipohjaa.</li><li>Valitse <b>Näytä vain Lisää mallipohjan avulla -toiminto</b>, jos haluat, että käyttäjien on lisättävä dokumentteja syöttömallipohjien avulla.</li></ul>",
		admin_ms_show_edit_group_add_button: "Näytä kaikki lisäysasetukset (oletusarvo)",
		admin_ms_hide_edit_group_add_button: "Piilota kaikki lisäysasetukset",
		admin_ms_hide_add_with_entry_template: "Piilota Lisää mallipohjan avulla -toiminto",
		admin_ms_managed_in_ecm: "Hallinnoitu IBM ECM -ratkaisussa",
		admin_ms_managed_in_ecm_hover_help: "Jos käyttäjät näyttävät luokat Microsoft Outlook -ohjelmassa, tämä nimiö näkyy sähköpostiviesteissä, jotka on lisätty IBM Content Manager- tai IBM FileNet Content Manager -tietovarastoon.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Hallinnoitu IBM ECM -ratkaisussa -luokan nimessä ei voi olla pilkkua (,) tai puolipistettä (;).",
		admin_delete_open_docs_after_close: "Poista avoinna olevat dokumentit automaattisesti, kun käyttäjät sulkevat dokumentit",
		admin_admin_delete_open_docs_after_close_hover_help: "Kun käyttäjä avaa dokumentin IBM Content Navigator for Microsoft Office -ohjelmassa, dokumentti ladataan käyttäjän dokumenttihakemistoon tai työpöydän tiedoston jäljityksen asetuksissa määritettyyn sijaintiin.<br><br>Valitse tämä asetus, kun haluat poistaa avoinna olevia tiedostoja, joita ei ole vielä kuitattu ulos, kun käyttäjät sulkevat dokumentteja. Kun valitset tämän asetuksen, voit<ul><li>pakottaa yhdenmukaisuuden IT-käytäntöjen kanssa</li><li>varmistaa, että käyttäjät käsittelevät dokumenttien uusimpia versioita</li><li>vähentää dokumenttien tallennukseen tarvittavaa levytilaa.</li><ul>",
		admin_ms_custom_command_configuration: "Mukautetut komennot:",
		admin_ms_custom_command_configuration_hover_help: "Voit lisätä Microsoft Office -sovellusten IBM Content Navigator for Microsoft Office -työkaluriville enintään neljä komentoa. Komentojen avulla voidaan avata URL-osoitteita. Voit esimerkiksi lisätä käyttäjien ja ryhmien hakupalvelun avauskomennon.",
		admin_ms_custom_command_dialog_title: "Muokkaa mukautettua komentoa",
		admin_ms_custom_command_dialog_intro_text: "Määritä komento, jonka avulla URL-osoite voidaan avata Microsoft Office -sovellusten IBM Content Navigator for Microsoft Office -työkaluriviltä.",
		admin_ms_custom_command_id: "Komento ${0}",
		admin_ms_custom_command_available_label: "Käytettävissä",
		admin_ms_custom_command_available_hover_help: "Jos komennoksi määritetty URL-osoite on siirrettävä offline-tilaan ylläpitoa varten, voit poistaa komennon valintaruudun valinnan, jottei komentoa näytetä Microsoft Office -ohjelmassa.<br/><br/><b>Tärkeää:</b> käyttäjien on kirjauduttava ulos työpöydästä, jotta muutokset näkyvät IBM Content Navigator for Microsoft Office -ohjelmassa.",
		admin_ms_custom_command_command_id_label: "Komennon tunnus",
		admin_ms_custom_command_id_label: "Tunnus",
		admin_ms_custom_command_label_label: "Nimiö",
		admin_ms_custom_command_label_hover_help: "Määritä nimiö, jonka haluat näkyvän Microsoft Office -ohjelman komennossa.",
		admin_ms_custom_command_description_label: "Kuvaus",
		admin_ms_custom_command_description_hover_help: "Määritä kuvaus, jonka haluat näkyvän Microsoft Office -ohjelman komennossa.",
		admin_ms_custom_command_url_label: "URL-osoite",
		admin_ms_custom_command_url_hover_help: "Määritä Microsoft Office -ohjelmasta avattava tarkennettu URL-osoite. URL-osoite voi olla Web-sivu tai -palvelu.",
		admin_ms_custom_command_icon_label: "Kuvake",
		admin_ms_custom_command_icon_hover_help: "Määritä näytettävän kuvakkeen tiedostonimi, esimerkiksi CommandIcon.png.<br/><br/><b>Tärkeää:</b> kuvaketiedosto on lisättävä kunkin työasemakoneen IBM Content Navigator for Microsoft Office -ohjelman asennushakemiston lisäosien alihakemistoon.<br/><br/>Jos kuvaketiedosto ei ole lisäosien alihakemistossa tai jos kuvaketta ei määritetä, järjestelmä näyttää oletuskuvakkeen customButtonIcon_38.gif.",
		admin_ms_custom_command_group_name: "Ryhmänimiö:",
		admin_ms_custom_command_group_name_hover_help: "Voit määrittää ryhmänimiön, jonka haluat näkyvän valintanauhan mukautettujen komentojen alapuolella.<br/><br/>Jos nimiötä ei määritetä, järjestelmä näyttää ryhmänimiön <b>Mukautetut komennot</b>.",
		admin_ms_ribbon_tab_label: "IBM ECM -välilehtinimiö:",
		admin_ms_ribbon_tab_hover_help: "Kirjoita nimi, jonka haluat näkyvän Microsoft Office -valintanauhan IBM Content Navigator for Microsoft Office -välilehdessä. Jos nimeä ei määritetä, välilehden nimi on IBM ECM.",
		admin_ms_close_task_pane_on_open: "Sulje tehtäväruutu, kun käyttäjät avaavat dokumentteja",
		admin_ms_close_task_pane_on_open_hover_help: "Valitse tämä asetus, jos haluat maksimoida tilan, jossa käyttäjät voivat tarkastella dokumentteja Microsoft Office -ohjelmassa.<br/><br/>Microsoft Office 2010 -käyttäjät: Jos haluat varmistaa, että tehtäväruutu suljetaan kaikkien dokumenttien yhteydessä, ota useiden tiedostojen käyttöliittymä (MDI) käyttöön valitsemalla vaihtoehdot <b>Asetukset</b> &gt; <b>Lisäasetukset</b> ja poistamalla <b>Näytä kaikki ikkunat tehtäväpalkissa</b> -valintaruudun valinta.",
		admin_ms_open_document_options: "Dokumentin avausasetukset:",
		admin_ms_delete_local_file_options: "Paikallisen tiedoston poistoasetukset:",
		admin_ms_add_and_checkin_options: "Lisäys- ja sisäänkuittausasetukset:",
		admin_ms_search_options: "Hakuasetukset:",
		admin_ms_display_options: "Näyttöasetukset:",
		admin_ms_bidirection_enable_label: "Ota tekstin kaksisuuntaisuuden tuki käyttöön",
		admin_ms_bidirection_enable_hover_help: "Valitse tämä asetus, jos haluat, että käyttäjät voivat IBM Content Navigator for Microsoft Office -ohjelmassa syöttää tai tarkastella tekstiä, jonka suunta on muu kuin vasemmalta oikealle.",
		admin_ms_text_direction_label: "Sisällön tekstin perussuunta:",
		admin_ms_text_direction_hover_help: "Määritä tekstin syöttösuunta IBM Content Navigator for Microsoft Office -ohjelman syöttökentissä. Tämä asetus ohjaa myös sitä, miten objektit, kuten kansioiden nimet tai ominaisuuksien arvot, näytetään.",
		admin_ms_control_threshold_label: "Objektien vähimmäismäärä ennustavan haun käyttöönotossa:",
		admin_ms_control_threshold_hover_help: "Oletusarvon mukaan ennustava haku tulee käyttöön, kun objektien määrä on vähintään 50. Toiminnolla voi hakea ja määrittää avattavan luettelon avulla ominaisuuksia, joilla on ennalta määritetyt arvot. Vähimmäisarvoa voi muuttaa.",

		admin_ms_default_email_class: "Sähköpostiviestien lisäyksessä käytettävä luokka",
		admin_ms_default_email_class_hover_help: "Kaikki tähän tietovarastoon Microsoft Outlook -ohjelmasta lisättävät sähköpostiviestit lisätään määrittämääsi luokkaan. Käyttäjät eivät voi muuttaa luokkaa.",
		admin_ms_default_folder_class: "Kansioiden luonnissa käytettävä luokka",
		admin_ms_default_folder_class_hover_help: "Kaikki tässä tietovarastossa Microsoft Office -sovelluksesta luotavat kansiot lisätään määrittämääsi luokkaan.  Käyttäjät eivät voi muuttaa luokkaa.",
		admin_ms_default_folder_warn_title: "Luokkaa ${0} ei voi käyttää kansioita luotaessa käytettävänä luokkana.",
		admin_ms_default_folder_warn_name_prop_invalid: "Luokan nimiominaisuus ei ole merkkijono, ja kansion nimen on oltava merkkijono.<br />Valitse jokin toinen luokka kansioita luotaessa käytettäväksi tai pyydä IBM Content Manager -pääkäyttäjää muuttamaan luokan nimiominaisuus merkkijonoksi.",
		admin_ms_default_folder_warn_req_props: "Luokka sisältää pakollisia ominaisuuksia, joille ei ole määritetty arvoja. Käyttäjät eivät kuitenkaan voi määrittää pakollisten ominaisuuksien arvoja luodessaan kansioita IBM Content Navigator for Microsoft Office -ohjelmasta käsin.<br />Valitse jokin toinen luokka kansioita luotaessa käytettäväksi tai pyydä IBM Content Manager -pääkäyttäjää määrittämään pakolliset ominaisuudet valinnaisiksi tai täyttämään pakollisten ominaisuuksien arvot ennalta.",
		admin_ms_delimiter_for_office_properties: "Moniarvoisten merkkijono-ominaisuuksien erotin",
		admin_ms_delimiter_for_office_properties_hover_help: "Määritä niiden merkkijono-ominaisuuksien erotinmerkki, joille määrität moniarvoisiin merkkijono-ominaisuuksiin viittaavan vastaavuuden. Oletusarvon mukaan voit määrittää moniarvoiselle merkkijono-ominaisuudelle arvojoukon käyttämällä arvojen erotinmerkkinä puolipistettä (;). Ota kuitenkin huomioon, että jos jokin merkkijonoarvo sisältää puolipisteen, sitä ei voi lisätä, ellei erotinmerkkiä muuteta. Erotinmerkiksi voi vaihtaa esimerkiksi pilkun (,).",
		admin_ms_outlookPropertyRemembrance : "Muista asetukset lisättäessä sanomia ja liitteitä",
		admin_ms_outlookPropertyRemembrance_hover_help : "Järjestelmä muistaa ominaisuuksien arvot, sijainnin, luokan valinnan ja suojausasetukset, jotka on määritetty sanomiin ja liitteisiin, ja järjestelmä käyttää niitä oletusasetuksina, kun objekteja lisätään myöhemmin.",

		admin_file_type_name_hover_help: "Nimen koho-ohje",
		admin_file_type_description_hover_help: "Kuvauksen koho-ohje",
		admin_file_type_dialog_title: "Tiedostolajisuodattimen muokkaus",
		admin_new_file_type_dialog_title: "Uusi tiedostolajisuodatin",
		admin_mobile_feature_dialog_title: "Ominaisuus",
		admin_mobile_feature_dialog_new_title: "Uusi ominaisuus",
		admin_file_type_instructions: "Luo suodatin, jonka avulla käyttäjät voivat vähentää hakutulosten määrää. Voit määrittää suodattimeen useiden MIME-lajien vastaavuuksia.",
		admin_file_type_filter_place_holder: "Suodatus MIME-lajien mukaan",
		admin_new_button_label: "Uusi",
		admin_edit_button_label: "Muokkaa",
		admin_delete_button_label: "Poista",
		admin_copy_button_label: "Kopioi",
		admin_verify_button_label: "Tarkista",
		admin_availabe_filters_label: "Käytettävissä olevat suodattimet",
		admin_selected_filters_label: "Valitut suodattimet",

		admin_mobile_access: "Sovelluksen käyttö mobiililaitteesta:",
		admin_mobile_access_hover_help: "Jos haluat käyttää IBM Content Navigator -sovellusta mobiililaitteesta, on suositeltavaa sallia käyttäjien käyttää tätä työpöytää mobiilisovelluksesta.<br /><br />Jos estät tämän työpöydän käytön mobiilisovelluksesta, käyttäjät voivat edelleen käyttää Web-työasemaohjelmaa mobiililaitteidensa selaimilla. Web-työasemaohjelmaa ei ole kuitenkaan suunniteltu käytettäväksi mobiililaitteista.",

		admin_mobile_access_allow_label: "Salli käyttäjien:",
		admin_mobile_allow_add_photos: "lisätä valokuvia kamerasta ja valokuvakirjastosta",
		admin_mobile_allow_add_docs: "lisätä dokumentteja ja luoda kansioita tietovarastoon",
		admin_mobile_allow_open_docs: "avata dokumentteja muissa sovelluksissa.",
		admin_mobile_allow_add_docs_hover_help: "Käyttäjät voivat luoda kansioita tai lisätä dokumentteja, kuten sähköpostiviestiin liitettyjä dokumentteja, muista mobiilisovelluksista.",
		admin_mobile_allow_open_docs_hover_help: "Järjestelmä kehottaa käyttäjiä valitsemaan sovelluksen, jota käytetään valitun dokumentin tarkasteluun. Jos käytettävissä on vain yksi sovellus, järjestelmä käyttää sitä.",
		admin_mobile_features: "Ominaisuudet:",
		admin_mobile_features_hover_help: "Määrittää, mitkä työpöydän ominaisuudet ovat näkyvissä IBM Content Navigator -mobiilisovelluksessa.",
		admin_mobile_new_feature_button_label: "Uusi ominaisuus",
		admin_mobile_move_up_button_label: "Siirrä ylös",
		admin_mobile_move_down_button_label: "Siirrä alas",
		admin_desktop_mobile_instructions: "Mobiiliasetusten ohjeiden paikka",
		admin_desktop_max_number_of_docs_to_add: "Lisättävien dokumenttien enimmäismäärä:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Määritä dokumenttien enimmäismäärä, joka voidaan lisätä samalla kertaa. Oletusarvon mukainen enimmäismäärä on 50. Enimmäismääräksi voi kuitenkin määrittää jopa 300.",
		admin_desktop_max_number_of_docs_to_modify: "Muokattavien objektien enimmäismäärä:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Määritä samanaikaisesti muokattavien objektien enimmäismäärä. Oletusarvon mukainen enimmäismäärä on 50. Enimmäismääräksi voi kuitenkin määrittää jopa 300.",
		admin_desktop_max_conversion_size: "Tietojen enimmäismäärä PDF-muunnoissa (megatavuina):",
		admin_desktop_max_conversion_size_hover_help: "<b>Rajoitus:</b> Tämä asetus ei ole tuettu IBM Content Manager OnDemand -ohjelmassa.<br/><br/>Määritä niiden tietojen enimmäismäärä, jotka voi muuntaa PDF-muotoon. Tämä rajoitus on voimassa, kun käyttäjät lataavat objekteja PDF-tiedostoina tai lähettävät objekteja sähköpostitse PDF-tiedostoina.<br /><br />Jos kunkin dokumentin kokoa ei voi määrittää, dokumentit muunnetaan kuitenkin PDF-muotoon.<br/><br/>Oletusraja on 200 megatavua. Jos rajaksi asetetaan yli 200 megatavua, se saattaa vaikuttaa järjestelmän suorituskykyyn.",
		admin_desktop_timeProperties: "Aikaleima:",
		admin_desktop_time_properties_hover_help: "<b>Vain IBM FileNet P8 -käyttäjät:</b> Tämä asetus koskee mukautettuja ominaisuuksia, mutta ei järjestelmän ominaisuuksia. Esimerkiksi Muokkaaja-ominaisuus näyttää edelleen aikaleiman kellonaikaosan, jos valitset <b>Näytä vain aikaleiman päivämääräosa</b>.<br/><br/>Tämä asetus ei muuta aikaleimaa tietovarastossa.",
		admin_desktop_disable_time_stamp: "Näytä koko aikaleima",
		admin_desktop_enable_time_stamp: "Näytä vain aikaleiman päivämääräosa",
		admin_desktop_timezone: "Aikavyöhyke:",
		admin_desktop_timezone_localuser: "Näytä käyttäjän paikallinen aikavyöhyke",
		admin_desktop_timezone_alluser: "Näytä sama aikavyöhyke kaikille käyttäjille",
		admin_desktop_timezone_hover_help: "Voit määrittää, näkevätkö käyttäjät aikaleiman, joka perustuu heidän paikalliseen aikavyöhykkeeseensä, vai näkevätkö kaikki käyttäjät saman aikaleiman.<br/><br/>Tämä asetus ei muuta aikaleimaa tietovarastossa. Valitsemasi asetus määrittää kuitenkin, että aikavyöhykettä käytetään aikaleiman luontiin tietovarastossa, kun käyttäjä lisää tai muokkaa objekteja.",
		admin_desktop_mobile_feature_display_label: "Näytä",
		admin_desktop_mobile_feature_icon_file_label: "Kuvaketiedosto",
		admin_mobile_feature_dialog_icon_file_label: "Kuvaketiedosto:",
		admin_mobile_feature_dialog_url_label: "URL-osoite:",
		admin_desktop_mobile_feature_name_label: "Nimi",
		admin_desktop_mobile_select_feature_label: "Valitse ominaisuus",
		admin_desktop_mobile_feature_icon_label: "Ominaisuuden kuvake",
		admin_desktop_share_admin_none: "Pääkäyttäjää ei ole määritetty.",
		admin_desktop_share_admin_edit_label: "Määritä pääkäyttäjä...",
		admin_browse_icon: "Selaus-kuvake",
		admin_search_icon: "Haku-kuvake",
		admin_favorites_icon: "Suosikit-kuvake",
		admin_casesearch_icon: "Asia-kuvake",
		admin_datacap_icon: "Datacap-kuvake",
		admin_system_defined: "Järjestelmän määrittämä",
		admin_icon_file_placeholder_text: "Tiedoston sijainti (esim. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Pääarvopinta",
		admin_folder_default: "Oletusarvo",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Työkalurivit",
		admin_menu_context_menus: "Pikavalikot",
		admin_menu_office_toolbars: "Microsoft Office -valintanauhan komennot",
		admin_menu_office_menus: "Microsoft Office -pikavalikot",

		admin_file_name_label: "Tiedoston nimi:",
		admin_exportconfiguration_security_label: "Sisällytä käyttäjät ja ryhmät, joilla on tämän työpöydän käyttöoikeudet",
		admin_exportconfiguration_instruction: "Voit viedä työpöydät, myös valittuihin työpöytiin liitetyt tietovarastojen kokoonpanot ja lisäosien kokoonpanot, tiedostoon, jonka voi tuoda toiseen IBM Content Navigator -ohjelman ilmentymään.",
		admin_exportconfiguration_dialog_label: "Vie työpöytä",
		admin_exportconfiguration_button_label: "Vie",
		admin_dialog_select_all: "Valitse kaikki",
		admin_dialog_deselect_all: "Tyhjennä kaikki",

		admin_importconfiguration_instruction: "Valitun kokoonpanotiedoston objektit tuodaan tähän järjestelmään. Jos järjestelmässä on jo kuitenkin objekti, jolla on sama tunnus, päätä, säilytetäänkö objekti vai korvataanko se.",
		admin_importconfiguration_dialog_label: "Tuo työpöytä",
		admin_importconfiguration_reason_dialog_label: "Tuo luottamuksellisten tietojen poiston syyt",
		admin_importconfiguration_button_label: "Tuo",
		admin_to_be_imported: "Tuotava kokoonpano-objekti",
		admin_on_target_system: "Aiemmin luotu kohdejärjestelmän objekti",
		admin_import_short_warning_message: "Seuraavat objektit ovat jo järjestelmässä. Valitse objektit, jotka haluat korvata tässä järjestelmässä:",
		admin_import_warning_message: "Seuraavilla kokoonpano-objekteilla on samat tunnukset kuin kohdejärjestelmän objekteilla. Valitse vain ne objektit, jotka haluat tuoda ja korvata kohdejärjestelmässä.<br /><br />Jos et halua korvata kokoonpano-objektia, luo objektin kopio ilmentymässä, josta työpöytä on viety,  anna kokoonpano-objektille toinen tunnus ja liitä kokoonpano-objekti työpöytään. Vie työpöytä uudelleen ja tuo työpöytä sen jälkeen tähän ilmentymään.",
		admin_choose_file_to_import_label: "Valitse tuotava tiedosto:",
		admin_download_imported_log: "Latausraportti",
		admin_desktop_import_summary: "Työpöytätuonnin tiivistelmä",
		admin_reason_import_summary: "Luottamuksellisten tietojen poiston syyn tuonnin tiivistelmä",
		admin_rba_import_summary: "Hallintaroolin tuonnin tiivistelmä",
		admin_import_open_tabs_checking: "Ennen kuin voit tuoda työpöydät, sulje kaikki muut hallintatyökalun välilehdet <bold>Työpöydät</bold>-välilehteä lukuun ottamatta.",
		admin_import_no_conflict: "Järjestelmä tuo seuraavat objektit:",
		admin_desktop_invalid: "Virheellinen työpöytä",
		admin_desktop_warning: "Työpöytä on tallennettu, mutta varoituksia ilmeni.",
		admin_repos_warning: "Tietovarasto on tallennettu, mutta varoituksia ilmeni.",
		admin_config_type_icon: "Kokoonpano-objektilajin kuvake",

		admin_approval_workflow: "Hyväksymiskäsittelyreitti",
		admin_approval_workflow_hover: "Tämän avulla käyttäjät voivat aloittaa ennalta määritetyn hyväksymiskäsittelyreitin. Voit poistaa hyväksymiskäsittelyreitin käytöstä, jos haluat, että käyttäjät voivat aloittaa mukautetun, tilauksen perusteella määräytyvän hyväksyntäkäsittelyreitin. Oletusarvon mukaan hyväksymiskäsittelyreitti on käytössä.<br><br><b>Tärkeää:</b> Jos otat hyväksymiskäsittelyreitin käyttöön, sinun on lisäksi varmistettava, että toinen ennalta määritetyistä käsittelyreitin määrityksistä (ICNParallelDocumentApproval.pep ja ICNSequentialDocumentApproval.pep) tai molemmat lisätään tietovarastoon ja siirretään Content Process Engine -järjestelmään.",

		admin_cannot_add_desktop_members_error: "Et voi määrittää käyttäjiä ja ryhmiä, joilla on tämän työpöydän käyttöoikeudet.",
		admin_cannot_add_desktop_members_error_explanation: "Sinulla ei ole käyttäjä- ja ryhmätietojen noutoon tarvittavia käyttöoikeuksia.",
		admin_cannot_add_desktop_members_error_userResponse: "Kirjaudu sisään jonakin toisena käyttäjänä tai pyydä IBM Content Manager -järjestelmän pääkäyttäjää myöntämään sinulle UserACLOwner-käyttöoikeudet, joita käyttäjä- ja ryhmätietojen nouto edellyttää.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Et voi valita käyttäjiä ja ryhmiä.",
		admin_cannot_select_users_groups_error_explanation: "Sinulla ei ole käyttäjä- ja ryhmätietojen noutoon tarvittavia käyttöoikeuksia.",
		admin_cannot_select_users_groups_error_userResponse: "Kirjaudu sisään jonakin toisena käyttäjänä tai pyydä IBM Content Manager -järjestelmän pääkäyttäjää myöntämään sinulle UserACLOwner-käyttöoikeudet, joita käyttäjä- ja ryhmätietojen nouto edellyttää.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "OAuth2-työasemaohjelmaa ei löytynyt.",
		oauth_client_not_found_error_explanation: "OAuth2-työasemaohjelman tunnusta ${0} ei löytynyt.",
		oauth_client_not_found_error_userResponse: "Ilmoita järjestelmän pääkäyttäjälle, että OAuth2-työasemaohjelman tunnusta ei löytynyt.",
		oauth_client_not_found_error_adminResponse: "Tarkista tietovaraston kokoonpano ja varmista, että siihen on määritetty oikea OAuth2-työasemaohjelman tunnus.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "työasemaohjelman_tunnus",

		oauth_login_failed_error: "Sisäänkirjaus tietovarastoon epäonnistui.",
		oauth_login_failed_error_explanation: "Yritys kirjautua tietovarastoon ${0} epäonnistui.",
		oauth_login_failed_error_userResponse: "Tarkista, että käyttäjätunnus ja salasana ovat oikeat. Yritä sitten kirjautua uudelleen.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "tietovaraston_tunnus",

		oauth_error_return_error: "On ilmennyt virhe yritettäessä kirjautua kohteeseen ${0}.",
		oauth_error_return_error_explanation: "Todennusyritys kohteeseen ${0} epäonnistui.",
		oauth_error_return_error_userResponse: "Ota yhteys järjestelmän pääkäyttäjään ja anna seuraavat tiedot: todennusyritys kohteeseen ${0} epäonnistui ja palautti seuraavan virhesanoman: <br>${1}<br><b>virhe:</b> ${2}.<br><b>kuvaus:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Lisätietoja virheestä on Web-sovelluspalvelimen lokitiedostoissa.  Lisätietoja lokitiedostoista on IBM Knowledge Center -sivuston ohjeaiheessa IBM Content Navigator log files. Yritä ratkaista ongelma kohteen ${0} todennusyritykseen liittyvien tietojen avulla. Tarkista myös, että OAuth2-todennus on käytössä.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "OAuth-kohdesovellus",
		oauth_error_return_error_1: "virhesanoma",
		oauth_error_return_error_2: "virhe",
		oauth_error_return_error_3: "virheen_kuvaus",

		oauth_error_unknown: "Tuntematon OAuth-virhesanoma.",

		delete_share_permission_error: "Yhteiskäyttökohdetta ei ole poistettu.",
		delete_share_permission_error_explanation: "Sinulla ei ole yhteiskäyttökohteen poistoon tarvittavia käyttöoikeuksia.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Tätä objektia ei voi määrittää yhteiskäyttöön.",
		class_not_support_share_error_explanation: "Luokkaa ${0} ei ole määritetty tukemaan yhteiskäyttöä.",
		class_not_support_share_error_0: "luokan_nimi",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Tätä objektia ei voi määrittää yhteiskäyttöön.",
		rbr_not_support_share_error_explanation: "Objektiin on lisätty arkaluonteista sisältöä.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Laitteella, jolla käyttäjä yrittää kirjautua sisään, ei ole valtuutusta käyttäjän tilin käyttöön.",
		box_oauth_error_invalid_request: "Pyynnöstä puuttuu pakollinen parametri, pyyntö sisältää virheellisen parametrin arvon tai saman parametrin useammin kuin kerran tai pyynnön muoto on muutoin virheellinen.",
		box_oauth_error_unsupported_response_type: "Valtuutuskoodin nouto tämän menetelmän avulla ei ole tuettua valtuutuspalvelimessa.  Tarkista pyynnössä käytetty koodin parametriarvo.",
		box_oauth_error_access_denied: "Resurssin omistaja tai valtuutuspalvelin on hylännyt pyynnön.",
		box_oauth_error_temporarily_unavailable: "Laitteeseesi sovelletaan pyyntöväliin liittyvää rajoitusta. Hidasta valtuutuspyyntöjen tahtia tai odota hetki.",
		box_oauth_error_unknown: "Tuntematon Box-virhesanoma.",

		admin_default_search_type: "Oletushakutapa",
		admin_default_search_type_hover: "Määritä, mikä asetus valitaan oletusasetukseksi <b>Haettava kohde</b> -kentässä <b>Hakuasetukset</b>-valikossa.",
		admin_default_search_type_documents: "Dokumentit",
		admin_default_search_type_folders: "Kansiot",
		admin_default_search_type_folders_and_documents: "Dokumentit ja kansiot",

		admin_restricted_search_type: "Salli haku seuraaviin kohteisiin:",
		admin_restricted_search_type_hover: "Oletusarvon mukaan käyttäjät voivat kohdistaa hakuja sekä dokumentteihin että kansioihin. Jos haluat piilottaa hakukohteen valinnan ja rajoittaa haut vain dokumentteihin, valitse Dokumentit-vaihtoehto ja poista Kansiot-vaihtoehdon valinta.</br></br> Jos haluat sallia haun kohdistamisen sekä dokumentteihin että kansioihin, valitse hakuruudun avaukseen liittyvän näyttötavan oletusasetus.",
		admin_restricted_search_type_documents: "Dokumentit",
		admin_restricted_search_type_folders: "Kansiot",
		admin_restricted_search_type_folders_and_documents: "Dokumentit ja kansiot",

		admin_default_search_version: "Oletushakuversio",
		admin_default_search_version_hover: "Määritä, mikä asetus valitaan oletusasetukseksi <b>Versio</b>-kentässä <b>Hakuasetukset</b>-valikossa.",

		admin_all_classes_search: "Hae kaikista luokista",
		admin_all_classes_search_hover: "Määritä, voivatko käyttäjät hakea kaikista luokista ja jos voivat, mitä tulee sisällyttää dokumenttihakuihin.",
		admin_all_classes_search_removed_hover: "Kaikkien luokkien hakuasetukset eivät ole käytettävissä, koska context-param allPseudoClassHidden -parametrin arvoksi Navigator-sovelluksen web.xml-tiedostossa on asetettu true.",
		admin_all_classes_search_hide: "Poista Hae kaikista luokista -vaihtoehto",
		admin_all_classes_search_documents_only_documents: "Dokumenttihaku sisällyttää vain dokumetit, tallennetut haut ja syöttömallipohjat",
		admin_all_classes_search_documents_non_folders: "Dokumenttihaku sisällyttää kaikki objektit, jotka eivät ole kansioita",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Rakenne-esitys:",
		admin_feature_config_tree_view_hoverhelp: "Määritä, voivatko käyttäjät käyttää tietovarastossa olevien kansioiden luetteloa selausruudun avulla. Jos piilotat selausruudun, käyttäjien on käytettävä sisältöluetteloa tietovaraston kansioihin siirtymiseen.",
		admin_feature_config_selected_repositories_label: "Tietovarastot:",
		admin_feature_config_selected_repositories_hoverhelp: "Valitse tietovarastot, joita käyttäjät voivat käyttää tässä ominaisuudessa.",
		admin_feature_config_selected_repositories_select_state_hdr: "Valitse tietovarasto",
		admin_feature_config_selected_repositories_name_hdr: "Tietovaraston nimi",
		admin_feature_config_selected_repositories_show_hdr: "Näytä",
		admin_feature_config_invalid_icon_title: "Ominaisuudesta puuttuu pakollisia asetuksia",
		admin_feature_config_view_select_hdr: "Valitse näkymä",
		admin_feature_config_view_hdr: "Näytä",
		admin_feature_config_view: "Näytä",
		admin_feature_config_views: "Näkymät:",
		admin_feature_config_views_hoverhelp: "Määritä, mitä näkymiä käyttäjät voivat käyttää sisältöluettelolle. Näkymät näytetään luettelon mukaisessa järjestyksessä. Ensimmäiseksi valittu näkymä on ominaisuuden oletusnäkymä.<br><br><b>Tärkeää:</b> Jos otat filminauhanäkymän käyttöön, dokumentin esikatselu edellyttää, että HTML-muunnon katseluohjelma on määritetty.",

		admin_custom_dialog_name: "Nimi:",
		admin_custom_dialog_value: "Arvo:",
		admin_custom_setting_name_hover: "Kirjoita sen Daeja ViewONE -asetuksen nimi, jonka haluat lisätä kokoonpanoon. Katso lisätietoja kokoonpanoasetuksista Daeja ViewONE -ohjelman käyttöohjeista.",
		admin_custom_setting_value_hover: "Anna arvo, jota haluat käyttää Daeja ViewONE -kokoonpanoasetukseen. Katso lisätietoja kokoonpanoasetuksen kelvollisista arvoista Daeja ViewONE -ohjelman käyttöohjeista.",

		entry_template_name_required_message: "Syöttömallipohjan asetusten Nimi-kenttä on pakollinen.",
		entry_template_name_invalid_message: "Syöttömallipohjan asetusten Nimi-kenttä ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Kun syöttömallipohjan asetusten Määritä yhteiskäyttöön seuraavien kanssa -kenttään valitaan tietyt käyttäjät ja ryhmät, sinun on määritettävä vähintään yksi käyttäjä tai ryhmä.",
		entry_template_no_permission_to_save_to_teamspace_message: "Sinulla ei ole oikeuksia lisätä syöttömallipohjia ryhmätyötilaan (${0}), joka valittiin syöttömallipohjan asetusten Tallenna kohteeseen -kentässä.",
		entry_template_save_in_destination_required_message: "Määritä oletustallennussijainti <b>Määritä kohteen tallennussijainti</b> -osassa.",
		entry_template_save_in_destination_must_select_folder: "Jos piilotat <b>Tallenna kohteeseen</b> -kentän ja edellytät, että käyttäjät lisäävät uudet objektit kansioon, sinun on valittava kansio <b>Oletustallennussijainti</b> -kenttään <b>Määritä kohteen tallennussijainti</b> -osassa.",
		entry_template_what_to_save_required_message: "Valitse vähintään yksi vaihtoehto asetusten määrityksen Mitä haluat tallentaa? -kentässä.",
		entry_template_custom_workflow_empty_message: "Jos valitset <b>Mukautettu käsittelyreitti...</b> -vaihtoehdon, etsi ja valitse käsittelyreitti, jota haluat käyttää.",

		entry_template_new: "Uusi syöttömallipohja",
		entry_template_name_hover: "Syöttömallipohjan nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Syöttömallipohjan nimi ei saa sisältää seuraavia merkkejä: * \\ / : ? \" < > |",
		entry_template_description_hover: "Anna kuvaus, jonka avulla käyttäjät erottavat tämän syöttömallipohjan muista syöttömallipohjista.",
		entry_tempalte_save_in_hover: "Määritä, minne syöttömallipohja tallennetaan.<br><br><b>Rajoitus:</b> Jos tallennat syöttömallipohjan ryhmätyötilaan, voit käyttää sitä vain kyseisessä ryhmätyötilassa.",
		entry_template_inherit_hover: "Jos valitset tämän vaihtoehdon, pääkansion suojausasetukset lisätään niiden käyttäjien ja ryhmien luetteloon, joiden kanssa syöttömallipohja on yhteiskäytössä.",
		entry_template_builder_aria_label: "Syöttömallipohjan luontitoiminto",
		entry_template_builder_layout_aria_label: "Syöttömallipohjan ominaisuuksien luontitoiminto",

		entry_template_settings_document: "Määritä syöttömallipohja",
		entry_template_settings_folder: "Määritä kohteen tallennussijainti",
		entry_template_settings_folder_intro: "Määritä, minne tätä syöttömallipohjaa käyttäen lisätyt objektit tallennetaan.",
		entry_template_settings_properties: "Määritä kohteen ominaisuudet",
		entry_template_settings_properties_intro: "Voit määrittää oletusarvot tai ennalta määritetyt arvot objekteille, jotka lisätään käyttämällä tätä syöttömallipohjaa. Lisäksi voit muuttaa ominaisuuksien asettelua ja ohjata, mitkä ominaisuudet näkyvät ja missä järjestyksessä.",
		entry_template_settings_workflow: "Määritä kohteen käsittelyreitti",
		entty_template_settings_workflow_intro: "Voit myös määrittää, aloitetaanko käsittelyreitti, kun objekteja lisätään syöttömallipohjan avulla.",
		entry_template_settings_security: "Määritä kohteen suojaus",
		entry_template_settings_security_intro: "Voit määrittää oletussuojauksen tai ennalta määritetyn suojauksen objekteille, jotka lisätään käyttämällä tätä syöttömallipohjaa. Käyttäjät, joilla on tarvittavat käyttöoikeudet, voivat ehkä muuttaa objektin suojausta objektin lisäyksen jälkeen.",
		entry_template_settings_options: "Määritä kohteen asetukset",
		entry_template_xt_warning: "Muutosten tallennus tähän syöttömallipohjaan muuntaa sen IBM Workplace XT  -syöttömallipohjasta IBM Navigator -syöttömallipohjaksi. IBM Workplace XT ei tue IBM Navigator -syöttömallipohjia.",

		entry_template_properties_edit_layout: "Muokkaa asettelua...",
		entry_template_properties_read_only: "Vain luku",
		entry_template_properties_hidden: "Piilotettu",

		entry_template_destination_show: "Näytä <b>Tallenna kohteeseen</b> -kenttä",
		entry_template_destination_show_hover: "Jos <b>Tallenna kohteeseen</b> -kenttä on näkyvissä, käyttäjät voivat vaihtaa objektien tallennuspaikkaa.",
		entry_template_destination_hide: "Piilota <b>Tallenna kohteeseen</b> -kenttä",
		entry_template_destination_hide_hover: "Jos piilotat <b>Tallenna kohteeseen</b> -kentän, käyttäjät eivät voi vaihtaa objektien tallennuspaikkaa.",
		entry_template_folder_save_in_default: "<b>Tallenna kohteeseen</b> -oletussijainti:",
		entry_template_folder_save_in_default_hover: "Määritä oletussijainti, johon tätä syöttömallipohjaa käyttäen lisätyt objektit tallennetaan.<br><br>Valitsemasi oletussijainti aiheuttaa rajoituksia syöttömallipohjan ajonaikaiselle toimintatavalle:<ul><li>Käyttäjät eivät voi valita toista tietovarastoa.</li><li>Jos oletussijainti on ryhmätyötila, käyttäjät eivät voi valita toista ryhmätyötilaa.</li></ul>Jos käyttäjät kuitenkin liittävät tämän syöttömallipohjan kansioon, he voivat ohittaa säilytyspaikan, joka tälle syöttömallipohjalle on määritetty.",
		entry_template_folder_restrict_choice: "Edellytä, että käyttäjät lisäävät objekteja oletussijaintiin tai oletussijainnin alikansioon",
		entry_template_folder_file_in_required: "Pyydä käyttäjiä lisäämään uudet objektit kansioon",
		entry_template_folder_file_in_required_hover: "Jos et valitse tätä asetusta, käyttäjät voivat lisätä objekteja tietovaraston pääkansioon.<br><br><b>Rajoitus:</b> Työpöydän kokoonpanon määritys voi edellyttää, että käyttäjät valitsevat kansion.",

		entry_template_document_type_show: "Näytä <b>Mitä haluat tallentaa?</b> -kenttä",
		entry_template_document_type_show_hover: "Jos <b>Mitä haluat tallentaa?</b> -kenttä on näkyvissä, valitsemasi objektit näkyvät vaihtoehtoina <b>Mitä haluat tallentaa?</b> -kentässä.",
		entry_template_document_type_hide: "Piilota <b>Mitä haluat tallentaa?</b> -kenttä",
		entry_template_document_type_hide_hover: "Jos piilotat <b>Mitä haluat tallentaa?</b> -kentän, valitsemasi dokumentin lajia käytetään aina, kun käyttäjät lisäävät dokumentteja tämän syöttömallipohjan avulla.",
		entry_template_document_type: "Tätä syöttömallipohjaa voidaan käyttää seuraavien kohteiden lisäykseen:",
		entry_template_document_type_hover: "Jos <b>Mitä haluat tallentaa?</b> -kenttä on näkyvissä, valitsemasi objektit näkyvät vaihtoehtoina <b>Mitä haluat tallentaa?</b> -kentässä.<br><br>Jos piilotat <b>Mitä haluat tallentaa?</b> -kentän, valitsemasi dokumentin lajia käytetään aina, kun käyttäjät lisäävät dokumentteja tämän syöttömallipohjan avulla.",

		entry_template_misc: "Lisäasetukset:",
		entry_template_auto_classify_show: "Luokittele dokumentin sisältö automaattisesti",
		entry_template_auto_classify_show_hover: "Kun dokumentti luokitellaan FileNet Content Manager -ohjelmassa, dokumentin sisältö tutkitaan ja dokumentin oikea luokka ja ominaisuuden arvot määritetään.<br><br>Selvitä järjestelmän pääkäyttäjältä, onko sisällön luokittelu otettu käyttöön Content Platform Engine -ohjelmassa.<br><br>Jos otat tämän asetuksen käyttöön, dokumentin luokka ja ominaisuudet voivat muuttua, kun käyttäjä lisää dokumentin tietovarastoon.",
		entry_template_allow_duplicate_file_names: "Salli dokumentin nimien kaksoiskappaleet",
		entry_template_allow_duplicate_file_names_hover: "Oletusasetuksen mukaan voit lisätä samannimisiä dokumentteja kansioon FileNet Content Manager -ohjelmassa. Voit poistaa tämän vaihtoehdon valinnan, jos haluat, että jokaisella valitun säilytyspaikan tiedostolla on yksilöllinen nimi.",
		entry_template_allow_compound_documents: "Anna tämän dokumentin olla yhdistelmädokumentin päädokumentti",
		entry_template_version_show: "Näytä lisäyksen ja sisäänkuittauksen versioasetukset",
		entry_template_version_hide: "Piilota lisäyksen ja sisäänkuittauksen versioasetukset",
		entry_template_version_to_add_as: "Lisättävän dokumentin oletusversio:",
		entry_template_version_default: "Oletusversioasetus:",
		entry_template_version_default_checked: "Pääversio",
		entry_template_version_default_unchecked: "Aliversio",
		entry_template_version_display: "Dokumentin versio:",
		entry_template_version_display_show: "Näytä",
		entry_template_version_display_hide: "Piilota",
		entry_template_version_default_add: "Lisättävän dokumentin oletusversio:",

		entry_template_checkin_version_show: "Näytä sisäänkuittauksen versioasetukset",
		entry_template_checkin_version_hide: "Piilota sisäänkuittauksen versioasetukset",

		entry_template_checkin_version_message_no_versions: "Valitun luokan versiokäytäntö estää käyttäjiä kuittaamasta dokumentin uutta versiota sisään.",
		entry_template_checkin_version_message_always_version: "Valitun luokan versiokäytäntö estää käyttäjiä korvaamasta dokumentin nykyistä versiota.",

		entry_template_applied: "Käytä tätä syöttömallipohjaa, kun käyttäjät:",
		entry_template_applied_add: "Lisäävät dokumentteja (pakollinen)",
		entry_template_applied_add_folder: "Luovat kansioita (pakollinen)",
		entry_template_applied_checkin: "Kuittaa sisään",
		entry_template_applied_properties_group: "Tarkastelevat tai muokkaavat ominaisuuksia:",
		entry_template_applied_properties: "Ominaisuudet-ikkunassa",
		entry_template_applied_viewer: "Sovelmien katseluohjelmassa",
		entry_template_applied_docinfo: "Dokumentin tietoruudussa",
		entry_template_applied_no_class_support: "Tätä syöttömallipohjaa voidaan käyttää kohteiden lisäykseen, mutta sen avulla ei voi kuitata dokumentteja sisään tai tarkastella ja muokata ominaisuuksia. Valittua luokkaa on muokattava niin, että se tukee näitä tilanteita. Jos syöttömallipohjaa on käytettävä näissä tilanteissa, pyydä pääkäyttäjää muokkaamaan hallintatyökalun avulla luokkaa niin, että se voi tallentaa syöttömallipohjan tunnukset.",
		entry_template_applied_no_child_component_support: "Valitulla luokalla on aliobjekteja, ja ominaisuuden asettelu on määritetty. Ominaisuuksien asettelut eivät tue aliobjekteja. Aliobjektit eivät tule näkyviin käyttäjälle.",
		entry_template_applied_child_component: "Valitulla luokalla on aliobjekteja. Ne näkyvät käyttäjälle, mutta et voi määrittää aliobjekteja tässä syöttömallipohjassa.",

		entry_template_properties_show: "Näytä <b>Ominaisuudet</b>-osa",
		entry_tempalte_properties_show_hover: "Jos <b>Ominaisuudet</b>-osa on näkyvissä, käyttäjät voivat muokata ominaisuuden arvoja, jotka näkyvät syöttömallipohjassa ja jotka eivät ole vain luku -tilassa olevia ominaisuuksia.",
		entry_template_properties_hide: "Piilota <b>Ominaisuudet</b>-osa",
		entry_template_properties_hide_hover: "Jos piilotat <b>Ominaisuudet</b>-osan, käyttäjät eivät voi muokata ominaisuuden arvoja. Syöttömallipohjassa on määritettävä kaikki arvot, joita haluat käyttää, kun objekteja lisätään käyttämällä tätä syöttömallipohjaa.",

		entry_template_security_show: "Näytä <b>Suojaus</b>-osa",
		entry_template_security_show_hover: "Jos <b>Suojaus</b>-osa on näkyvissä, käyttäjät, joilla on asianmukaiset oikeudet, voivat muokata objektin suojausta.",
		entry_template_security_hide: "Piilota <b>Suojaus</b>-osa",
		entry_template_security_hide_hover: "Jos piilotat <b>Suojaus</b>-osan, käyttäjät eivät voi muokata objektien arvoja. Syöttömallipohjassa on määritettävä suojausasetukset, joita haluat käyttää, kun objekteja lisätään tai muokataan.",
		entry_template_security_policy: "Suojauskäytäntö:",
		entry_template_security_policy_hover: "Valitsemasi suojauskäytäntö voi tehdä jommankumman seuraavista vaihtoehdoista:<br><ul><li>Ohittaa <b>Määritä kohteen suojaus</b> -kohdassa määritetyt käyttöoikeudet.</li><li>Lisätä <b>Määritä kohteen suojaus</b> -kohdassa määritettyihin käyttöoikeuksiin.</li></ul>",
		entry_template_security_policy_none: "Suojauskäytäntöä ei ole valittu",
		entry_template_security_inherit: "Peri suojausasetukset pääkansiosta",
		entry_tempalte_save_in_hover: "Määritä, minne syöttömallipohja tallennetaan.<br><br><b>Rajoitus:</b> Jos tallennat syöttömallipohjan ryhmätyötilaan, voit käyttää sitä vain kyseisessä ryhmätyötilassa.",
		entry_template_security_inherit_item_security_hover: "Jos valitset tämän vaihtoehdon, pääkansion suojausasetukset lisätään suojausasetuksiin, jotka jompikumpi seuraavista objekteista määrittää:<ul><li><b>Määritä kohteen ominaisuudet</b> -osassa määritetty luokka</li><li><b>Määritä kohteen ominaisuudet</b> -osassa määrittämäsi mukautettu suojaus</li></ul>",
		entry_template_security_change: "Ohita valitun luokan määrittämä suojaus",
		entry_template_security_change_hover: "Jos valitset tämän vaihtoehdon, oletusarvon mukaan luokalle määritetyt suojausasetukset ovat näkyvissä. Voit muokata syöttömallipohjan suojausasetuksia.<br><br>Jos <b>Suojaus</b>-osa on näkyvissä, käyttäjät, joilla on asianmukaiset oikeudet, voivat muokata objektin suojausta.<br><br>Jos valitset tämän vaihtoehdon ja suojausasetusten perimisen pääkansiosta, perittävissä olevat asetukset lisätään määrittämääsi suojaukseen.",
		entry_template_security_default_item_security: "Ohita kohteen lisäävän käyttäjän kohteen oletussuojaus",
		entry_template_security_policy_message_override: "Valittu suojauskäytäntö määritetään ohittamaan suojauksen määrityksessä määritetyt käyttöoikeudet.",
		entry_template_security_policy_message_add: "Valittu suojauskäytäntö määritetään lisäämään suojauksen määrityksessä määritetyt käyttöoikeudet.",
		entry_template_security_policy_preserve_true_hover: "Säilyttää suoran käyttöoikeuden",
		entry_template_security_policy_preserve_false_hover: "Älä säilytä suoraa käyttöoikeutta",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Määritetyt roolit",
		entry_template_security_class_role_search_title: "Roolien haku:",
		entry_template_secuirty_class_member_title: "Jäsenluettelo kohteessa ${0}",
		entry_template_secuirty_class_folder_only: "Nämä käyttöoikeudet koskevat vain tätä kansiota",
		entry_template_secuirty_class_folder_and_immediate_children: "Nämä käyttöoikeudet koskevat tätä kansiota ja niitä välittömiä aliobjekteja, jotka määritetään perimään suojaus tältä kansiolta.",
		entry_template_secuirty_class_folder_and_all_children: "Nämä käyttöoikeudet koskevat tätä kansiota ja kaikkia jälkeläisiä, jotka määritetään perimään suojaus tältä kansiolta. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Nämä käyttöoikeudet koskevat niitä välittömiä aliobjekteja, jotka määritetään perimään suojaus tältä kansiolta.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Nämä käyttöoikeudet koskevat kaikkia jälkeläisiä, jotka määritetään perimään suojaus tältä kansiolta.",

		entry_template_class_security_message_no_override: "Valitun luokan suojaus estää käyttäjiä ohittamasta suojausta.",
		entry_template_class_security_required_privileges: "<b>Tärkeää</b>: kun ohitat valitun luokan suojauksen, tämän syöttömallipohjan avulla kohteita lisäävillä käyttäjillä on oltava ItemSetACL- ja UserACLOwner-käyttöoikeudet.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Vaiheittainen kaavan käsittelyreitti",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Rinnakkainen kaavan käsittelyreitti",
		entry_template_workflow_type_existing: "Mukautettu käsittelyreitti...",
		entry_template_workflow_launch_prompt: "Kysy käyttäjiltä, aloitetaanko käsittelyreitti",
		entry_template_workflow_launch_auto: "Aloita käsittelyreitti automaattisesti",
		entry_template_workflow_modify_launch: "Salli käyttäjien muokata aloitusvaihetta",
		entry_template_workflow_modify_launch_hover: "Valitse tämä vaihtoehto, jos haluat antaa käyttäjien muuttaa käsittelyreitin aloitustapaa.",

		entry_template_optionsButton_title: "Muokkaa",
		entry_template_optionsButton_readonly_title: "Näytä liitos",
		entry_template_optionsDialog_title: "Kansioliitoksen asetukset",
		entry_template_removeButton_title: "Poista",
		entry_template_addButton_title: "Lisää",
		entry_template_selected_entry_templates: "Valitut syöttömallit",
		entry_template_docs_added_to_template_destination: "Dokumentit lisätään syöttömallipohjassa määritettyyn kohteeseen.",
		entry_template_docs_added_to_other_object_store: "Tämä syöttömallipohja lisää objektit objektisäilöön ${0}.",
		entry_template_inherited_entry_templates_label: "Haluan seuraavaa: ",
		entry_template_inherited_entry_templates: "Peri syöttömallipohjaliitokset kansiosta: ",
		entry_template_inherited_entry_templates_not: "Luo uudet liitokset tälle kansiolle",
		entry_template_inherited_folder_path: "Valittujen syöttömallipohjien luettelon syöttömallipohjat on liitetty seuraavaan kansioon: ${0}. <br> Kansion polku on ${1}.",
		entry_template_folder_associations_title: "Liitä syöttömallit",
		entry_template_folder_associations_intro: "Kun liität syöttömallipohjan kansioon, käyttäjien on lisättävä kohteita kansioon syöttömallipohjan avulla. Jos kansioon liitetään useita syöttömallipohjia, käyttäjät voivat valita käytettävän syöttömallipohjan.",
		entry_tempalte_folder_associations_entrytemplate: "Syöttömallipohja: ",
		entry_template_avaliable_entry_templates: "Käytettävissä olevat syöttömallipohjat",
		entry_template_fileTypes_intro_title: "Sallitut tiedostolajit:",
		entry_template_fileTypes_intro: "Oletusarvon mukaan syöttömallipohjaa voidaan käyttää minkä tahansa lajin dokumentin lisäykseen tietovarastoon. Jos kuitenkin valitset yhden tai useita tiedostolajeja, syöttömallipohjat ovat käytettävissä vain, kun käyttäjät lisäävät määritettyjä tiedostolajeja vastaavia dokumentteja.",
		entry_template_fileTypes: "Tiedostolajit",
		entry_template_fileType_error: "Vähintään yhdelle syöttömallipohjaliitokselle on valittu virheellisiä tiedostolajeja. Virheelliset tiedostolajit on poistettava, ennen kuin nämä syöttömallipohjaliitokset voidaan tallentaa.",
		entry_template_fileTypes_any_type_of_file: " Mikä tahansa tiedostolaji",
		entry_template_description_label: "Kuvaus",
		entry_template_ItemInfoPrefix: "Liitä seuraavaan: ",
		entry_template_TargetObjectStoreName: "Kohteen objektisäilö",
		entry_template_class: "Luokka",
		entry_template_current_folder_as_parent: "Käytä kansiota kohteena",
		entry_template_view_minetypes: "Näytä MIME-lajit",
		entry_template_avaliable_MIME_types: "Käytettävissä olevat tiedostolajit",
		entry_template_selected_MIME_types: "Valitut tiedostolajit",
		entry_template_MIME_type_column: "tiedostolajin luokan nimi",
		entry_template_file_type_not_existing: "Poista virheelliset tiedostolajit.",
		entry_template_MIME_types: "MIME-lajit:",
		entry_template_MIME_types_info_dialog_title: "MIME-lajit kohteelle",
		entry_template_destination_label: "Lisää dokumentit kohteeseen: ",
		entry_template_destination_help: "Määritä, mihin dokumentit tallennetaan tietovarastossa, kun käyttäjät lisäävät dokumentteja tähän kansioon valitun syöttömallipohjan avulla.",
		entry_template_radioButton_folder_destination: "Valittu kansio",
		entry_template_radioButton_template_destination: "Syöttömallipohjassa määritetty kohde",
		entry_tempalte_teamspace_default: "Oletussyöttömallipohja",
		entry_template_folder_associations_save_new: "Olet muokannut joitakin syöttömallipohjan liitoksia. Haluatko sulkea ikkunan tallentamatta muutoksia?",
		entry_template_mode_binding_label: "Ominaisuudet",
		entry_template_columns_className: "Luokan nimi",
		entry_template_columns_type: "Mallipohjan laji",
		entry_template_columns_workflow: "Käsittelyreitin nimi",
		entry_template_columns_destination: "Kohde",
		entry_template_association_less_than_record: "${0} syöttömallipohjaa puuttuu Valitut syöttömallipohjat -luettelosta. Käyttöoikeutesi eivät riitä niiden katseluun, tai syöttömallipohjat on poistettu. Lisätietoja saat järjestelmän pääkäyttäjältä.",
		/* Request */

		progress_message_general: "Käsittely on meneillään...",
		cancel_message_general: "Toiminto on peruutettu.",
		ie8_not_supported_browser: "IE8-selainta ei tueta.",
		progress_message_getDesktop: "Työpöydän lataus on meneillään...",
		progress_message_getActions: "Toimintojen lataus on meneillään...",
		progress_message_getViewers: "Työpöydän lataus on meneillään...",
		progress_message_logon: "Sisäänkirjaus on meneillään...",
		progress_message_logoff: "Uloskirjaus on meneillään...",
		progress_message_getContentClasses: "Luokkien nouto on meneillään...",
		progress_message_openContentClass: "Luokan tietojen nouto on meneillään...",
		progress_message_od_getCabinets: "Säilöjen nouto on meneillään...",
		progress_message_getSearchTemplates: "Hakujen nouto on meneillään...",
		progress_message_od_getTemplates: "Kansioiden nouto on meneillään...",
		progress_message_od_openCabinet: "Kansioiden nouto on meneillään...",
		progress_message_openSearchTemplate: "Haun avaus on meneillään...",
		progress_message_od_openTemplate: "Kansion avaus on meneillään...",

		progress_message_getWorklists: "Työluetteloiden nouto on meneillään...",
		progress_message_getWorkItems: "Työobjektien nouto on meneillään...",
		progress_message_getNextWorkItems: "Työobjektien nouto on meneillään...",
		progress_message_getStepParameters: "Työobjektin tietojen nouto on meneillään...",
		progress_message_getStepAttachmentItems: "Liitteen tietojen nouto on meneillään...",
		progress_message_getDependentParameters: "Ominaisuuden tietojen nouto on meneillään...",

		progress_message_p8_getProcessApplicationSpaces: "Sovellustilojen nouto on meneillään...",
		progress_message_p8_getProcessRoles: "Prosessin roolien nouto on meneillään...",
		progress_message_p8_getProcessInbaskets: "Saapuneiden lokeroiden nouto on meneillään...",
		progress_message_p8_getProcessorInformation: "Prosessitietojen nouto on meneillään...",
		progress_message_p8_getFilterCriteria: "Saapuneiden lokeroiden suodattimen nouto on meneillään...",
		progress_message_p8_getLaunchParameters: "Työobjektin tietojen nouto on meneillään...",
		progress_message_p8_getStepAttachments: "Työobjektin liitteiden nouto on meneillään...",
		progress_message_p8_getSubscriptions: "Käsittelyreitin tilauksien nouto on meneillään...",
		progress_message_p8_getTrackerParameters: "Työobjektin tietojen nouto on meneillään...",
		progress_message_p8_getTrackerHistory: "Työobjektin historiatietojen nouto on meneillään...",
		progress_message_p8_getTrackerMilestones: "Työobjektin välitavoitteiden nouto on meneillään...",
		progress_message_p8_completeStep: "Työobjektin valmiiksi määritys on meneillään...",
		progress_message_p8_moveToInbox: "Objektin siirto saapuneiden lokeroon on meneillään...",
		progress_message_p8_returnToSender: "Työobjektin palautus on meneillään...",
		progress_message_p8_reassign: "Työobjektin uudelleenmääritys on meneillään...",
		progress_message_p8_launchWorkflow: "Käsittelyreitin aloitus on meneillään...",
		progress_message_p8_getTransferedWorkflows: "Noudetaan käsittelyreitin tietoja...",

		progress_message_cm_getProcesses: "Noudetaan käsittelyreitin tietoja...",
		progress_message_cm_completeStep: "Jatketaan työobjektin käsittelyä...",
		progress_message_cm_getItemProcessInformation: "Noudetaan käsittelyreitin tietoja...",

		progress_message_search: "Haku on meneillään...",
		cancel_message_search: "Haku on peruutettu.",
		progress_message_getContentItems: "Objektin tietojen nouto on meneillään...",
		progress_message_openFolder: "Kansion avaus on meneillään...",
		progress_message_addItem: "Objektin luonti on meneillään...",
		progress_message_checkIn: "Objektin sisäänkuittaus on meneillään...",
		progress_message_changePassword: "Salasanan muutto on meneillään...",
		progress_message_getDefaultInstancePermissions: "Oletuskäyttöoikeuksien nouto on meneillään...",
		progress_message_openItem: "Objektin tietojen nouto on meneillään...",
		progress_message_saveItem: "Objektin tietojen tallennus on meneillään...",
		progress_message_getPermissions: "Käyttöoikeuksien nouto on meneillään...",
		progress_message_getEntryTemplates: "Syöttömallipohjien nouto on meneillään...",
		progress_message_openEntryTemplate: "Syöttömallipohjan avaus on meneillään...",
		progress_message_getFavorites: "Suosikkien nouto on meneillään...",
		progress_message_getFoldersFiledIn: "Kansioiden nouto on meneillään...",
		progress_message_getDocumentVersions: "Versioiden nouto on meneillään...",
		progress_message_getDependentAttributeInfo: "Määritteen tietojen nouto on meneillään...",
		progress_message_packageForDownload: "Paketointi latausta varten on meneillään...",
		progress_message_convertDocument: "Sisällön muunto on meneillään...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Sisältölajin nouto on meneillään...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Dokumentin lisäys on meneillään...",

		progress_message_desktop_reload: "Työasemaohjelma lataa työpöytää uudelleen.<br>Järjestelmä voi pyytää sinua kirjautumaan sisään uudelleen.",
		progress_message_email: "Sähköpostin lähetys on meneillään...",
		cancel_message_email: "Sähköpostiviesti on peruutettu.",

		progress_message_p8_getOfficeOnlineTemplates: "Office-mallipohjien nouto on meneillään...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Suosikit-rakenne",
		favorites_content_list_label: "Suosikkien sisältöluettelo",
		syncItems_tree_label: "Omat synkronoidut tiedostot -rakenne",
		syncItems_content_list_label: "Omat synkronoidut tiedostot -sisältöluettelo",
		my_checkouts_content_list_label: "Omat uloskuittaukset -sisältöluettelo:",
		browse_tree_label: "Selausrakenne",
		browse_content_list_label: "Selauksen sisältöluettelo",
		repository_selector_label: "Tietovarastovalitsin",
		teamspaces_content_list_label: "Ryhmätyötilan sisältöluettelo",
		templates_content_list_label: "Mallipohjien sisältöluettelo",
		work_content_list_label: "Työn sisältöluettelo",
		work_tree_label: "Työ-rakenne",
		admin_tree_label: "Hallinta-rakenne",
		admin_tabs_label: "Hallintavälilehdet",
		search_tabs_label: "Hakuvälilehdet",
		search_selector_label: "Hakuvalitsin",
		teamspace_browse_content_list_label: "Ryhmätyötilan selauksen sisältöluettelo",
		teamspace_search_tabs_label: "Ryhmätyötilan hakuvälilehdet",

		/* Desktop */
		undo_description: "Kumoa: ${0}",
		redo_description: "Tee uudelleen: ${0}",

		/* Application Tabs */
		home: "Pääsivu",
		repository: "Tietovarasto",
		repository_type: "Tietovaraston laji:",
		repository_type_header: "Tietovaraston laji",
		repository_type_any: "Kaikki tietovarastot",
		repository_type_contains_label: "Tietovaraston laji sisältää",
		document_info: "Dokumentin tiedot",
		team: "Työryhmä",
		administration: "Hallinta",

		/* Home Page */
		recent_activity: "Viimeisimmät toiminnot",
		repos_and_wrksp: "Tietovarastot ja ryhmätyötilat",
		workspaces: "Ryhmätyötilat",
		repositories: "Tietovarastot",
		templates: "Mallipohjat",
		favorites: "Suosikit",
		my_checkouts: "Omat uloskuittaukset",
		mySyncedFiles: "Omat synkronoidut tiedostot",
		links: "Linkit",
		name_label: "Nimi",
		description_label: "Kuvaus:",
		type_label: "Laji:",
		type_heading: "Laji",
		type_id_label: "Lajin tunnus",
		server_type_icon: "Palvelinlajin kuvake",
		server_type_heading: "Palvelimen laji",
		server_type: "Palvelimen laji",
		port_heading: "Portin numero",
		port_label: "Portin numero:",
		server_name_heading: "Palvelimen nimi",
		server_label: "Palvelimen nimi:",
		server_url_label: "Palvelimen URL-osoite:",
		id_label: "Tunnus:",
		id_heading: "Tunnus",
		connected_label: "Yhteys muodostettu:",
		repository_label: "Tietovarasto",
		modified_label: "Muokkaaja:",
		modified_date_label: "Muokattu:",
		status_label: "Tila:",
		last_modified_label: "Edellinen muokkaaja:",

		modifier: "Muokkaaja",
		modified_date: "Muokattu",

		/* Favorites */
		new_favorite_label: "Lisää suosikkeihin",
		edit_favorite_label: "Nimeä suosikki uudelleen",
		remove_favorite_label: "Poista suosikeista",
		missing_alias_message: "Nimi on määritettävä.",
		sync_favorite_enable_hover: "Objektin voi synkronoida.",
		sync_favorite_disable_hover: "Objektia ei voi synkronoida.",
		sync_favorite_sync_unavailable_hover: "Synkronointi ei ole käytettävissä tälle objektilajille.",
		sync_enable_label: "Synkronoi objekti",
		sync_enable_label_hover: "Objekti synkronoidaan laitteisiin.",
		delete_favorite_confirmation_question: "Haluatko poistaa tämän objektin suosikeista?",
		alias_label: "Nimi:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Valittu objekti on jo suosikeissa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Objektia ei voi lisätä suosikkiluetteloon.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Voit tallentaa vain ${0} suosikkia.",
		add_favorite_max_reached_response: "Jos haluat lisätä tämän objektin suosikkiluetteloon, sinun on poistettava aiemmin lisätty suosikki, ennen kuin voit lisätä tämän objektin.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Valittuja dokumentteja ei voi muuntaa PDF-muotoon.",
		download_as_pdf_max_content_error_explanation: "Voit muuntaa vain ${0} megatavua tietoja PDF-muotoon. Valittujen dokumenttien koko ylittää ${0} megatavua.",
		download_as_pdf_max_content_error_response: "Valitse vähemmän dokumentteja tai pienempiä dokumentteja ja tallenna dokumentit PDF-tiedostoiksi uudelleen.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Valittuja dokumentteja ei voi muuntaa yksittäiseksi PDF-tiedostoksi.",
		download_as_pdf_mimetype_check_error_explanation: "Voit muuntaa moniosaisen dokumentin yksittäiseksi PDF-tiedostoksi, jos kullakin dokumentin osalla on sama MIME-laji.",
		download_as_pdf_mimetype_check_error_response: "Valitse toinen PDF-tiedostoksi muunnettava dokumentti.",

		/* Activity Stream */
		show_label: "Näytä:",
		all_filter: "Kaikki",
		notifications_filter: "Ilmoitukset",
		workitems_filter: "Työobjektit",
		documentes_filter: "Dokumentit",
		all_favorites_filter: "Kaikki suosikit",
		folders_filter: "Kansiot",
		searches_filter: "Haut",
		teamspaces_filter: "Ryhmätyötilat",

		/* Repository */
		all_search_templates: "Kaikki haut",
		all_od_searches: "Kaikki hakumallipohjat",
		recent_searches: "Viimeisimmät haut",
		opened_searches: "Avatut haut",

		all_worklists: "Kaikki Saapuneet-kansiot",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Kaikki työluettelot sisältävä luettelo",

		/* Teamspace */
		all_workspaces: "Kaikki ryhmätyötilat",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Kaikki ryhmätyötilat sisältävä luettelo",
		workspace_title: "Ryhmätyötila",
		workspace_icon: "Ryhmätyötilan kuvake",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Käytettävissä",
		workspace_stat_offline: "Ei käytettävissä",
		workspace_stat_validate: "Edellyttää tarkistusta",
		workspace_stat_pendingDelete: "Odottaa poistoa",
		workspace_stat_deleteError: "Poisto on epäonnistunut",

		undefined_value: "Ei määritetty",
		undefined_reference_value: "Viittausta ei ole määritetty.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Palvelimessa saattaa olla lisää tuloksia.",
		search_all_data: "Hae kaikista tiedoista.",
		search_all_teamspaces: "Hae kaikista ryhmätyötiloista.",
		teamspace_filter_results: "Näytetään ${0} tulosta. ",
		displaying_filtered_results: "Näytetään suodatetut tulokset. ",
		displaying_recent_results: "Näytetään vain ryhmätyötilat, joita on muokattu edellisen ${0} päivän aikana. Voit etsiä muita ryhmätyötiloja suodattamalla ryhmätyötilojen luettelon nimen tai kuvauksen mukaan. ",
		clear_filter: "Tyhjennä suodatin.",

		/* FolderTreeModel */
		move_item_task: "Siirrä objekti",
		copy_item_task: "Kopioi objekti",
		add_item_task: "Lisää objekti",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Seuraavaa kansiota ei löytynyt: ${0}. Kansio on ehkä poistettu, tai sitä ei voi avata tästä näkymästä. Siirry kansion kohdalle napsauttamalla rakennenäkymän Lisää-linkkiä. Jos kansio ei ole näkyvissä, päivitä sisältöluettelonäkymä.",
		more_paging_link: "lisää ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Tila",
		status_dialog_cancel_label: "Peruuta",

		/* ErrorDialog */
		error_dialog_title: "Virhe",
		error_dialog_icon_tooltip: "Virhe",
		error_dialog_stack_trace_title: "Pinonseuranta",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Vahvistus",

		close_browser_msg: "Sulje selainikkuna.",

		/* MessageDialog */
		message_dialog_title: "Ilmoitus",
		warning_dialog_title: "Varoitus",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Tämä on ${0}",
		server: "Tietovarasto:",
		username: "Käyttäjätunnus:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Sisäänkirjaus tietovarastoon edellyttää käyttäjätunnusta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Sisäänkirjaus tietovarastoon edellyttää salasanaa.",
		password: "Salasana:",
		login: "Kirjaudu sisään",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Istunto on vanhentunut. Kirjaudu sisään uudelleen.",
		login_repository_connection_expired_message: "Yhteys tietovarastoon ${0} on vanhentunut. Kirjaudu sisään uudelleen.",
		login_site_connection_expired_message: "Yhteys sivustoon on vanhentunut. Kirjaudu sisään uudelleen.",
		login_new_server_message: "Anna kohteen ${0} käyttäjätunnus ja salasana.",
		login_error_more_information_message: "Lisätietoja",

		disconnect_box_account_user: "Katkaise Box-tilin yhteys: ${0}",
		disconnect_box_account: "Katkaise Box-tilin yhteys",
		disconnect_box_accounts: "Katkaise Box-tilien yhteys",

		// OAuth2/Box Login
		login_ssl_connection_required: "Box-tietovaraston käyttö edellyttää SSL-yhteyttä.",
		login_oauth_popup_blocked: "Kohoikkuna on estetty. Sinun tulee ehkä vapauttaa kohoikkunoiden käyttö selaimessa, ennen kuin voit kirjautua sisään.",
		login_oauth_click_here: "Jos edelleenohjaus ei toimi 5 sekunnissa, napsauta tätä.",
		login_oauth_title: "Kirjaudu sisään",
		login_oauth_grant_intro: "Todennuksen myöntäminen henkilölle ${0}.",
		login_pane_oauth_click_here: "Kirjaudu sisään napsauttamalla tätä.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Haluatko kirjautua ulos Web-työasemaohjelmasta?",
		logout_confirmation_button: "Kirjaudu ulos",

		/* ChangeLocaleDialog */
		change_locale: "Muuta kieli- ja paikallistunnusasetuksia",
		change_locale_use_browser_language: "Käytä selaimen kieliasetusta (oletusarvo)",
		change_locale_use_browser_locale: "Käytä selaimen kieliasetusta (oletusarvo)",
		change_locale_description: "Jos poistat selaimen evästeet, kieli- ja paikallistunnusasetukset on palautettava.",
		change_locale_language_locale: "Sovelluksen kieli:",
		change_locale_language_locale_hover: "Tämä asetus muuttaa tekstin kieltä Web-työasemaohjelmassa, mutta ei muuta dokumenttien kieltä sovelluksessa.<br><br>Oletusasetus käyttää kieltä, joka on määritetty Web-selaimen kokoonpanoasetuksissa.",
		change_locale_value_format_locale: "Sovelluksen paikallistunnus:",
		change_locale_value_format_locale_hover: "Paikallistunnus määrittää päivämäärien, kellonaikojen ja lukujen esitysmuodon Web-työasemaohjelmassa.<br><br>Oletusasetus käyttää esitysmuotoja, jotka on liitetty Web-selaimen kokoonpanoasetuksissa määritettyyn kieleen.",
		change_locale_for_office: "Tekstin kaksisuuntaisuuden asetukset:",
		change_locale_bidi_support_flag: "Ota kaksisuuntaisuuden tuki käyttöön",
		change_locale_bidi_support_flag_hover: "Kun kaksisuuntaisuuden tuki on käytössä, käyttäjä voi määrittää syötekentässä käytetyn tekstin suunnan.  Kansion kaltaisiin kohteisiin kirjoitettu teksti näytetään samassa suunnassa kuin se on kirjoitettu.",
		change_locale_base_text_direction: "Sisällön tekstin perussuunta:",
		change_locale_base_text_direction_hover: "Määritä syötekenttiin kirjoitettavan tekstin suunta.  Tämä määrittää myös käyttäjän kirjoittamien nimiöiden (kuten kansioiden nimien) näyttösuunnan.",
		change_locale_calendar_type: "Kalenterin laji:",
		change_locale_calendar_type_hover: "Valitse käyttäjäistunnossa käytetyn kalenterin laji.",
		change_locale_base_text_direction_default: "Oletusarvo",
		change_locale_base_text_direction_ltr: "Vasemmalta oikealle",
		change_locale_base_text_direction_rtl: "Oikealta vasemmalle",
		change_locale_base_text_direction_contextual: "Kontekstin mukainen",
		change_locale_calendar_type_gregorian: "Gregoriaaninen",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Heprea",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Vaihda salasana",
		change_password_title: "Vaihda salasana",
		change_password_expired_title: "Salasana on vanhentunut",
		change_password_message: "Kirjoita uusi salasana.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Salasana on vanhentunut. Kirjoita uusi salasana.",
		change_password_password_rules: "Salasanasäännöt",
		change_password_old_password: "Vanha salasana:",
		change_password_new_password: "Uusi salasana:",
		change_password_confirm_password: "Vahvista salasana:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Vanha salasana on annettava.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Uusi salasana on annettava.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Uusi salasana on vahvistettava.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Salasanojen on vastattava toisiaan.",

		/* GlobalToolbar */
		actions: "Toiminnot",
		actions_label: "Toiminnot:",
		open_actions_label: "Avoimet toiminnot:",

		/* About Dialog */
		about_dialog_title: "Tietoja",
		about_product_name_label: "Tuotteen nimi: ",
		about_product_version_label: "Versio: ",
		about_product_build_label: "Koontiversio: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Kaikki oikeudet pidätetään. Yhdysvaltojen valtionhallinnon työntekijöiden rajoitetut käyttöoikeudet. Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corporation. IBM ja IBM-logo ovat International Business Machine Corporationin rekisteröityjä tavaramerkkejä Yhdysvalloissa ja muissa maissa. Tämän Ohjelman käyttöä koskevat sen mukana toimitetun käyttöoikeussopimuksen ehdot. Tämä käyttöoikeussopimus sijaitsee Ohjelman hakemistokansiossa tai kirjastossa, jonka nimi on License tai Non_IBM_License, tai se on toimitettu painettuna asiakirjana. Lue tämän sopimuksen ehdot huolellisesti, ennen kuin aloitat Ohjelman käytön. Käyttämällä Ohjelmaa sitoudut noudattamaan kyseisiä ehtoja. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Haluatko poistaa valitun objektin?",
		delete_single_folder_confirmation_question: "Haluatko poistaa kansion ${0}?",
		delete_multiple_confirmation_question: "Haluatko poistaa valitut objektit?<br>${0} objekti(a) on valittuna.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Poista",
		search_template_delete_confirmation_question: "Haluatko poistaa haun ${0}?",
		search_template_opened_delete_confirmation_question: "Haku ${0} on avattuna. Jos poistat haun, se sulkeutuu.<br>Haluatko poistaa tämän haun?",
		delete_multiple_opened_search_template_confirmation_question: "Seuraavat haut ovat avoinna: ${0}.<br>Jos poistat haut, ne suljetaan. Haluatko poistaa nämä haut?",
		delete_large_number_items_confirmation_question: "Olet valinnut ${0} poistettavaa kohdetta.<br/>Suuren kohdemäärän poistaminen voi kestä pitkään.<br/>Haluatko jatkaa?",
		delete_confirmation_entrytemplate: "Jos poistat tämän syöttömallipohjan, poisto vaikuttaa syöttömallipohjaan liitettyihin dokumentteihin ja kansioihin seuraavasti:<ul><li>Objektit eivät enää ole liitettyinä syöttömallipohjaan, ja käyttäjät voivat nähdä varoituksen, kun he päivittävät niitä.</li><li>Ominaisuudet, joita syöttömallipohja ohjasi, kuten ominaisuuden nimi tai järjestys, eivät enää koske objekteja, jotka on liitetty syöttömallipohjaan.</li></ul>Haluatko poistaa tämän syöttömallipohjan?",
		delete_confirmation_entrytempalte_with_multi_items: "Syöttömallipohjat on poistettava yksittäin. Syöttömallipohjat on poistettu poistettavien objektien luettelosta. Jos haluat poistaa syöttömallipohjat, kukin syöttömallipohja on poistettava erikseen.",

		/* Create/Apply/Remove Hold */
		hold: "Pidätys",
		createHold: "Uusi pidätys",
		applyHold: "Aseta pidätys",
		removeHold: "Poista pidätys",
		showHolds_title: "Näytä pidätykset",
		applyHoldSelectText: "Valitse pidätykset, jotka haluat asettaa valituille objekteille.",
		availableHolds: "Käytettävissä olevat pidätykset:",
		removeHoldSelectText: "Valitse pidätykset, jotka haluat poistaa valituista objekteista.",
		appliedHolds: "Asetetut pidätykset:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Luo uusi pidätys, joka asetetaan valituille objekteille.",
		holdName: "Pidätyksen nimi:",
		holdDescription: "Kuvaus:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Pidätykselle on määritettävä nimi.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Määritetty pidätyksen nimi on jo järjestelmässä.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Pidätyksen nimi ei saa sisältää seuraavia merkkejä: ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Istunto vanhentuu ${0} minuutin kuluttua.",
		session_expire: "Istunto on vanhentumassa",
		logoff: "Kirjaudu ulos",
		extend_session: "Jatka istuntoa",
		admin_custom_settings: "Lisäasetukset:",
		admin_custom_settings_hover_help: "Parametri enableSessionExpireWarning on totuusarvo, joka ilmaisee, onko istunnon vanhentumisvaroitus käytössä. Oletusarvo on true (tosi). Parametri sessionExpireWarningTime on kokonaisluku 2 - 5, joka määrittää istunnon vanhentumisvaroituksen viiveen.",
		admin_custom_setting_dialog_title_new: "Uusi asetus",
		admin_custom_setting_dialog_title_edit: "Muokkaa asetusta",
		admin_custom_setting_dialog_hover_help: "Lisää muita parametreja määrittämällä parametrin nimen ja arvon. Jos haluat ottaa istunnon vanhentumisvaroituksen käyttöön, määritä parametri enableSessionExpireWarning ja arvo true (tosi).",
		admin_custom_setting_dialog_field_hover_help: "Lisätietoja parametrien nimistä ja arvoista on IBM Navigator -ohjelman Parameter Reference Manual -oppaassa.",
		admin_custom_setting_dialog_nameInvalid: "Arvo on pakollinen. Arvo ei saa sisältää tyhjämerkkejä, eikä se saa olla kaksoiskappale.",
		admin_custom_setting_dialog_bool_valueInvalid: "Arvo on pakollinen. Arvon on oltava totuusarvo.",
		admin_custom_setting_dialog_int_valueInvalid: "Arvo on pakollinen. Arvon on oltava kokonaisluku.",
		/* Add Document Dialog */
		add_document_dialog_title: "Lisää dokumentti",
		add_documents_dialog_title: "Dokumenttien lisäys",
		add_document_general_label: "Yleiset",
		add_document_properties_label: "Ominaisuudet",
		add_document_properties_with_ellipsis_label: "Ominaisuudet...",
		add_document_security_label: "Suojaus",
		add_document_location_label: "Tallenna kohteeseen:",
		add_document_type_label: "Mitä haluat tallentaa?",
		add_document_localfile_label: "Paikallinen dokumentti",
		add_document_metadata_label: "Dokumentin tiedot",
		add_document_external_label: "Linkki ulkoiseen dokumenttiin",
		add_document_web_link_label: "Web-linkki",
		add_document_saved_content_label: "Käytä tallennettua tiedostoa:",
		add_document_saved_content_choice: "Tallennettu tiedosto",
		add_document_file_name_label: "Tiedoston nimi:",
		add_document_entry_template_label: "Syöttömallipohja:",
		add_document_delete_file_label: "Poista paikallinen tiedosto",
		add_document_delete_file_disabled_label: "Järjestelmä ei poista tiedostoja, jotka eivät ole tiedoston jäljityksen hakemistossa.",
		add_document_major_version_label: "Pääversio",
		add_document_major_version_hover: "Määrittää dokumentin tilaksi Julkaistu. Dokumentti lisätään tietovarastoon versiona 1.0. Jos asetusta ei valita, dokumentti ei ole valmis julkaistavaksi ja se lisätään aliversiona 0.1.",
		add_document_save_document_as_unfiled_label: "Älä tallenna dokumenttia kansioon",
		add_document_save_document_as_unfiled_hover: "Jos valitset tämän vaihtoehdon, löydät dokumentin vain hakemalla sitä. Et voi etsiä dokumenttia selaamalla.",
		add_document_create_new_version_label: "Luo uusi versio",
		add_document_replace_existing_version_label: "Korvaa aiempi versio",
		add_document_start_workflow_label: "Aloita käsittelyreitti",
		add_document_auto_classify_label: "Luokittele sisältö automaattisesti",
		add_document_add_label: "Lisää",
		add_document_cancel_label: "Peruuta",
		add_document_document_type_label: "Luokka",
		add_document_context_info: "Dokumentti voidaan etsiä myöhemmin sen ominaisuuksiin annettujen arvojen perusteella.",
		add_documents_context_info: "Dokumentit voidaan etsiä myöhemmin niiden ominaisuuksiin annettujen arvojen perusteella. Jos sinun tarvitsee antaa dokumenttiin muista eroava ominaisuuden arvo, se on lisättävä erikseen tai dokumentin ominaisuuksia on muokattava dokumentin lisäyksen jälkeen.",
		add_document_url_label: "URL-osoite:",
		add_document_template_description: "Mallipohjan kuvaus:",
		add_document_select_entry_template: "Anna tai valitse syöttömallipohja",
		add_document_no_permission_to_associations: "Sinulla ei ole syöttömallipohjan käyttöoikeuksia",
		add_document_no_entry_template_to_use: "Valittuihin tiedostoihin ei voi käyttää syöttömallipohjaa",
		add_document_no_entry_template_itemtype_permission: "Et voi lisätä objekteja tähän kansioon. Syöttömallipohja on valittava, eikä sinulla ole tähän kansioon liitettyjen syöttömallipohjien käyttöoikeutta. Ota yhteyttä järjestelmän pääkäyttäjään ja pyydä häntä määrittämään sinulle tähän kansioon liitettyjen syöttömallipohjien käyttöoikeus.",
		add_document_appgroup_name_label: "Sovellusryhmän nimi:",
		add_document_app_name_label: "Sovelluksen nimi:",
		create_folder_dialog_title: "Uusi kansio",
		create_folder_context_info: "Kansio voidaan etsiä myöhemmin sen ominaisuuksiin annettujen arvojen perusteella.",
		create_folder_folder_name_label: "Kansion nimi",
		create_folder_save_folder_as_unfiled_label: "Älä tallenna kansiota toiseen kansioon",
		create_folder_save_folder_as_unfiled_hover: "Jos valitset tämän vaihtoehdon, löydät kansion vain hakemalla sitä. Et voi etsiä kansiota selaamalla.",
		add_item_create_in_folder: "Luo kansioon:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Kansion nimi ei saa sisältää seuraavia merkkejä: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Kansion nimi ei saa sisältää seuraavia merkkejä: \\ / eikä nimenä voi olla piste (.) tai kaksi pistettä (..)",
		invalid_box_file_name_message: "Tiedoston nimi ei saa sisältää seuraavia merkkejä: \\ / eikä nimenä voi olla piste (.) tai kaksi pistettä (..)",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Tiedoston nimi ei saa sisältää seuraavia merkkejä: \\ / : * ? \" < > |",
		external_document_placeholder: "Anna dokumentin URL-osoite.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Väri on annettava kolmi- tai kuusinumeroisena heksadesimaalilukuna. Esimerkki: #000 tai #000000.",
		add_document_unfiled: "${0} on arkistoimaton",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Lisää dokumentti syöttömallipohjan avulla",
		add_document_using_template_context_info: "Kun lisäät dokumentin syöttömallipohjan avulla, dokumenttia varten annetut arvot ovat yhdenmukaiset.",
		add_documents_using_template_dialog_title: "Dokumenttien lisäys syöttömallipohjan avulla",
		add_documents_document_name_is_file_name_hint: "Tiedoston nimeä käytetään tässä ominaisuudessa",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Luo uusi kansio syöttömallipohjan avulla",
		create_folder_using_template_context_info: "Kun luot kansion syöttömallipohjan avulla, kansiota varten annetut arvot ovat yhdenmukaiset.",

		add_documents_batch_results_dialog_title: "Dokumentteja ei ole lisätty tietovarastoon",
		add_documents_batch_results_dialog_context_info: "Seuraavia dokumentteja ei lisätty tietovarastoon. Saat lisätietoja siitä, miksi dokumenttia ei lisätty tietovarastoon, valitsemalla dokumentin ja napsauttamalla Tiedot-vaihtoehtoa.",
		add_documents_batch_results_dialog_filename_col_hdr: "Tiedoston nimi",
		add_documents_batch_results_dialog_status_col_hdr: "Tila",
		add_documents_batch_results_dialog_message_col_hdr: "Sanoma",
		add_documents_batch_results_status_error: "Virhe",
		add_documents_batch_results_status_cancelled: "Peruutettu",
		add_documents_batch_results_status_cancelled_msg: "Dokumenttia ei lisätty, koska pyyntö on peruutettu.",

		add_documents_batch_status_title: "Dokumenttien lisäys on meneillään",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Tiedoston ${0}/${1} lisäys on meneillään...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Virheitä: ${0}",
		add_documents_batch_status_completing_msg: "Prosessi päättyy, kun tämä dokumentti on lisätty.",

		add_documents_status_uploading_msg: "Tiedoston ${0}/${1} lataus on meneillään...",
		add_documents_status_adding_msg: "Tiedoston ${0}/${1} lisäys on meneillään...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Syöttömallipohja on määritetty toisessa sovelluksessa vahvistamaan dokumentit aina asiakirjoiksi. Järjestelmä kuitenkin ohittaa tämän asetuksen, koska dokumenttien vahvistus asiakirjoiksi ei ole tuettu Web-työasemaohjelmassa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Syöttömallipohja on määritetty toisessa sovelluksessa niin, että voit päättää, vahvistetaanko dokumentti asiakirjaksi. Järjestelmä kuitenkin ohittaa tämän asetuksen, koska dokumenttien vahvistus asiakirjoiksi ei ole tuettu Web-työasemaohjelmassa.",
		no_selection: "&lt;Valitse&gt;",

		batch_results_dialog_details_label: "Tiedot",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Arvo ei kelpaa. Arvon on oltava GUID-tunnus. Esimerkki: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Arvo ei kelpaa. Arvon on oltava liukuluku. Esimerkki: 1,2 tai 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Arvo ei kelpaa. Arvon on oltava muodossa ${0}. Esimerkki: ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Arvo ei kelpaa. Arvon on oltava desimaaliluku. Esimerkki: 1,2 tai 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Arvo ei kelpaa. Arvon on oltava kokonaisluku. Esimerkki: 5 tai 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Arvo ei kelpaa. Arvo saa sisältää vain aakkosmerkkejä. Esimerkki: a–z ja A–Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Arvo ei kelpaa. Arvo saa sisältää vain aakkosnumeerisia merkkejä. Esimerkki: a–z, A–Z ja 0–9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Arvo ei kelpaa. Arvo saa sisältää vain numeroita. Esimerkki: 0–9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Arvo ei kelpaa. Arvo saa sisältää vain seuraavia merkkejä: a–z, A–Z, 0–9, [välilyönti] ja merkit `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Arvo ei kelpaa. Arvon on oltava päivämäärä, joka on annettu seuraavassa muodossa: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Arvo ei kelpaa. Arvon on oltava kellonaika, joka on annettu seuraavassa muodossa: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Arvo ei kelpaa. Valitse arvo avattavasta valikosta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Arvo ei kelpaa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Arvo ei kelpaa. Arvo on annettava seuraavassa muodossa: {0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Arvo on pakollinen.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Arvo on liian pitkä. Ominaisuuden arvon enimmäispituus on ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Arvo on liian lyhyt. Ominaisuuden arvon vähimmäispituus on ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Arvo ei ole sallitulla alueella. Arvon on oltava liukuluku ${0}–${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Arvo ei ole sallitulla alueella. Arvon on oltava desimaaliluku ${0}–${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Arvo ei ole sallitulla alueella. Arvon on oltava kokonaisluku ${0}–${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Arvon on oltava päivämäärä ${0}–${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Arvo ei ole sallitulla alueella. Arvon on oltava päivämäärä ${0}–${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Arvo ei ole sallitulla alueella. Arvon on oltava kellonaika ${0} - ${1}.",
		property_and: " -",

		property_invalidValueOrRequired: "Seuraava arvo on virheellinen tai pakollinen: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Ominaisuudet",
		edit_properties_dialog_info: "Voit tarkastella tai muokata tämän kohteen ominaisuuksia. Jos sinulla on asianmukaiset oikeudet, voit myös muokata kohteen suojausta. Et kuitenkaan voi muuttaa järjestelmän ominaisuuksia.",
		edit_properties_od_dialog_info: "Voit tarkastella tai muokata tämän kohteen ominaisuuksia. Et kuitenkaan voi muuttaa järjestelmän ominaisuuksia.",
		system_properties_title: "Järjestelmän ominaisuudet",
		custom_properties_title: "Ominaisuudet",
		/* Folder collaboration tab */
		box_permission_permission: "Käyttöoikeus",
		box_permission_permissions: "Käyttöoikeudet",
		box_permission_editor: "Muokkaaja",
		box_permission_owner: "Omistaja",
		box_permission_co_owner: "Yhteisomistaja",
		box_permission_viewer_uploader: "Tarkastelija-siirtäjä",
		box_permission_previewer_uploader: "Esikatselija-siirtäjä",
		box_permission_viewer: "Tarkastelija",
		box_permission_previewer: "Esikatselija",
		box_permission_uploader: "Siirtäjä",
		box_permission_add: "Lisää",
		box_permission_upload: "Siirrä palvelimeen",
		box_permission_download: "Lataa",
		box_permission_preview: "Esikatselu",
		box_permission_view: "Näytä",
		box_permission_send_links: "Lähetä vain tarkastelun mahdollistavia linkkejä",
		box_permission_create_subfolders: "Luo alikansiot",
		box_permission_create_tasks: "Luo tehtävät",
		box_permission_add_comments: "Lisää kommentit",
		box_collaboration_invite_placeholder: "Anna nimi, sähköpostiosoite tai ryhmä kutsua varten",
		box_collaboration_invite_placeholder_non_admin: "Anna kutsuttavan henkilön sähköpostiosoite",
		box_collaboration_invalid_email: "Anna kelvollinen sähköpostiosoite",
		box_collaboration_user_already_present: "Käyttäjä on jo kansion yhteiskäyttäjä",
		box_collaboration_user_name: "Nimi",
		box_collaboration_email_address: "Sähköpostiosoite",
		box_collaboration_date_added: "Lisäyspäivämäärä",
		box_collaboration_remove_collaboration: "Poista",
		box_collaboration_remove_collaboration_title: "Poista",
		box_collaboration_no_collaborators: "Yhteiskäyttäjiä ei ole",
		box_collaboration_change_owner_title: "Objektin omistajan vaihto",
		box_collaboration_change_owner_prompt: "Jos teet tästä yhteiskäyttäjästä kansion omistajan, sinusta tulee muokkaaja, etkä enää omista kansiota. Yhteiskäyttäjät, jotka on lisätty suoraan tähän kansioon, näkevät sen pääkansioissaan. Yhteiskäyttäjät, jotka on lisätty pääkansiotasolle tai sen yläpuolelle, eivät enää ole yhteiskäyttäjiä. Haluatko jatkaa?",
		box_collaboration_remove_self_title: "Poista itsesi",
		box_collaboration_remove_self_prompt: "Haluatko varmasti poistaa itsesi yhteiskäyttäjistä? Sen jälkeen sinulla ei enää ole tämän kansion käyttöoikeuksia.",
		box_collaboration_user: "Käyttäjä",
		box_collaboration_group: "Ryhmä",
		box_managing_users_not_configured: "Et voi hakea käyttäjiä ja ryhmiä, koska Box-sovellusta ei ole määritetty oikein. Jos haluat käyttää tätä ominaisuutta, ota yhteys pääkäyttäjään ja pyydä häntä määrittämään Box-sovellus käyttäjien ja ryhmien hallintaa varten.",
		duplicate_value_error: "Ominaisuuden kunkin arvon on oltava yksilöllinen.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Kaikkia seuraavissa kentissä tehtyjä muutoksia käytetään kaikissa valituissa objekteissa. Jos tietylle objektille on annettava toinen ominaisuuden arvo tai objektin suojausta on muokattava, muokkaa objektin ominaisuuksia erikseen.",
		multi_edit_properties_class_label: "Luokka:",
		multi_edit_properties_items_label: "Objektien nimet:",
		multi_edit_properties_properties_label: "Ominaisuudet:",
		multi_edit_batch_status_title: "Ominaisuuksien päivitys",
		multi_edit_batch_status_adding_msg: "Objektin ${0}/${1} päivitys on meneillään...",
		multi_edit_batch_status_verifying_msg: "Objektin ${0}/${1} tarkistus on meneillään...",
		multi_edit_batch_status_completing_msg: "Prosessi päättyy, kun tämä objekti on päivitetty.",
		multi_edit_batch_status_validation_completing_msg: "Prosessi päättyy, kun tämä objekti on tarkistettu.",
		multi_edit_batch_results_status_error: "Virhe",
		multi_edit_batch_results_status_cancelled: "Peruutettu",
		multi_edit_batch_results_status_cancelled_msg: "Objektia ei päivitetty, koska pyyntö on peruutettu.",
		multi_edit_batch_results_dialog_title: "Objekteja ei päivitetty",
		multi_edit_batch_results_dialog_context_info: "Seuraavia objekteja ei päivitetty. Saat lisätietoja siitä, miksi objektia ei päivitetty, valitsemalla objektin nimen ja napsauttamalla Tiedot-vaihtoehtoa.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Objektin nimi",
		multi_edit_batch_results_dialog_status_col_hdr: "Tila",
		multi_edit_batch_results_dialog_message_col_hdr: "Sanoma",
		multi_edit_batch_status_errors_msg: "Virheitä: ${0}",
		multi_edit_batch_permission_error_text: "Ominaisuuksiin tehtyjä muutoksia ei voi tallentaa.",
		multi_edit_invalid_value_error: "Tämä arvo on riippuvainen toisen ominaisuuden arvosta, eikä sitä voi käyttää kaikissa valituissa objekteissa.",
		multi_edit_batch_permission_error_explanation: "Et voi muokata tämän objektin ominaisuuksia, koska käyttöoikeutesi eivät riitä.",
		multi_edit_no_modifiable_properties: "Valittujen objektien ominaisuuksia ei voi muokata. Tämä voi ilmetä, kun objekti sisältää ainoastaan vain luku -ominaisuuksia tai kun vain objektin nimi tai otsikko on muokattavissa. Kun olet valinnut useita objekteja, niiden nimiä tai otsikoita ei voi muuttaa.",
		multi_edit_mult_classes_dialog_info: "Valitut objektit ovat eri tietovarastoissa tai kuuluvat eri luokkiin. Voit muokata vain samaan luokkaan tai tietovarastoon kuuluvia objekteja. Valitse muokattavien objektien osajoukko.",
		multi_edit_class_selector_class_heading: "Luokka",
		multi_edit_class_selector_entry_template_heading: "Syöttömallipohja",
		multi_edit_class_selector_repository_heading: "Tietovarasto",
		multi_edit_class_selector_items_heading: "Objektit",
		multi_edit_some_classes_not_displayed: "Osa valituista objekteista ei sisälly tähän luetteloon, koska objektit sisältävät vain luettavia ominaisuuksia tai objektit kuuluvat tietovarastoihin, jotka eivät tue ominaisuuksien muokkausta.",
		multi_edit_properties_invalid_msg: "Osaa ominaisuuksien arvoista ei voi käyttää kaikissa valituissa objekteissa.",
		multi_edit_properties_readonly_tooltip_text: "${0}: tämä ominaisuus on luettava ominaisuus eikä sitä voi muokata.",
		multi_edit_append_checkbox_label: "Liitä",
		multi_edit_append_checkbox_tooltip: "Valitse tämä asetus, jos haluat liittää uuden ominaisuuden arvon aiemmin luotuihin arvoihin niiden korvaamisen sijasta.",
		multi_edit_properties_invalid_childcomponent_msg: "Jotkin alikomponentin ${1} ominaisuuden ${0} arvot ovat riippuvaisia muista ominaisuuksista, eivätkä ne enää ole kelvollisia tekemiesi valintojen kanssa. Tyhjennä alikomponentin ${1} arvot tai tee muutoksia valitsemiisi objekteihin yksittäin.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Viennin ominaisuudet",
		export_properties_dialog_info: "Valitse vietävät ominaisuudet ja määritä järjestys, jossa järjestelmä esittää ominaisuudet.",
		export_properties_dialog_export_button_label: "Vie",
		export_properties_dialog_export_raw_values: "Vie raaka-arvot",

		/* Properties */
		filter_clear_tooltip: "Tyhjennä suodatin.",
		properties_new_row: "Uusi",
		properties_requiredClass_document_tooltip: "Valitse dokumentti. Dokumentin luokan on oltava ${0}.",
		properties_requiredClass_folder_tooltip: "Valitse kansio. Kansion luokan on oltava ${0}.",
		properties_dataType_tooltip: "Tietolaji: ${0}",
		properties_maxLength_tooltip: "Enimmäispituus: ",
		properties_minLength_tooltip: "Vähimmäispituus: ",
		properties_minValue_tooltip: "Vähimmäisarvo: ",
		properties_maxValue_tooltip: "Enimmäisarvo: ",
		properties_format_tooltip: "Muoto: ",
		properties_description_tooltip: "Kuvaus: ",

		properties_type_boolean_tooltip: "Totuusarvo",
		properties_type_date_tooltip: "Päivämäärä",
		properties_type_time_tooltip: "Aika",
		properties_type_timestamp_tooltip: "Aikaleima",
		properties_type_decimal_tooltip: "Kymmenjärjestelmän arvo",
		properties_type_double_tooltip: "Liukuluku",
		properties_type_short_tooltip: "Kokonaisluku",
		properties_type_integer_tooltip: "Kokonaisluku",
		properties_type_long_tooltip: "Kokonaisluku",
		properties_type_string_tooltip: "Tekstimerkkijono",
		properties_type_string_alpha_tooltip: "Aakkosmerkkijono",
		properties_type_string_alphanum_tooltip: "Aakkosnumeerinen merkkijono",
		properties_type_string_ext_tooltip: "Laajennettu aakkosnumeerinen merkkijono",
		properties_type_string_num_tooltip: "Numeromerkkijono",
		properties_type_binary_tooltip: "Binaari",
		properties_type_object_tooltip: "Objekti",
		properties_type_reference_tooltip: "Tämä ominaisuus viittaa toiseen tietovaraston objektiin.",
		properties_type_guid_tooltip: "Globally Unique Identifier -tunnus",
		properties_type_group_tooltip: "Käyttäjät ja ryhmät",
		properties_type_user_tooltip: "Käyttäjät",
		properties_type_childComponent_tooltip: "Alikomponentti",

		properties_childComponent_minCardinalityOnly_tooltip: "Tässä ominaisuudessa on oltava ainakin ${0} arvoa.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Tässä ominaisuudessa saa olla enintään ${0} arvoa.",
		properties_childComponent_minMaxCardinality_tooltip: "Tässä ominaisuudessa on oltava ainakin ${0} arvoa, mutta siinä ei saa olla enempää kuin ${1} arvoa.",
		properties_childComponent_noCardinality_tooltip: "Tämän ominaisuuden arvojen määrää ei ole rajoitettu.",

		properties_type_guid_example_tooltip: "Esimerkki: {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Valitse arvo luettelosta.",
		properties_single_select_choice_tooltip: "Valitse arvo.",
		properties_multiple_select_typein_tooltip: "Anna ainakin yksi arvo.",
		properties_multiple_select_choice_tooltip: "Valitse ainakin yksi arvo.",
		properties_not_selectable_tooltip: "Luokkaa ei voi valita.",
		properties_none: "Ei mitään",
		properties_none_tooltip: "Valitsemalla vaihtoehdon <i>Ei mitään</i> voit tyhjentää tämän ominaisuuden nykyisen arvon.",
		properties_value_empty: "Ei arvoa",
		properties_value_read_only: "Vain luku",
		properties_clear_label: "Tyhjennä",
		properties_clear_tooltip: "Tämän kentän arvon tyhjennys tyhjentää arvon tietovarastossa, kun napsautat <b>Tallenna</b>-painiketta.",
		properties_box_custom_properties: "Mukautetut ominaisuudet",
		properties_box_metadata_name_in_use: "Nimi on jo käytössä. Anna mukautetulle ominaisuudelle toinen nimi.",

		properties_templates: "Mallipohjat",
		properties_add_template: "Lisää mallipohja",
		properties_remove_template: "Poista",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Kuittaa sisään",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Kuittaa sisään",
		checkin_cancel_label: "Peruuta",
		checkin_file_name_label: "Tiedoston nimi",
		checkin_document_status_title: "Kuittaa dokumentti sisään",
		checkin_document_status_uploading_msg: "Tiedoston siirto on meneillään...",
		checkin_document_status_checkingin_msg: "Tiedoston sisäänkuittaus on meneillään...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Valitse luottamuksellisten tietojen poistotila",
		viewer_redaction_new_document_confirmation_question: "Haluatko tallentaa uutena dokumenttina vai paikallisena tiedostona dokumentin, josta luottamuksellisia tietoja on poistettu?",
		viewer_redaction_new_version_confirmation_question: "Haluatko tallentaa uutena versiona dokumentin, josta luottamuksellisia tietoja on poistettu?",
		viewer_redaction_new_version_confirmation_question_never: "Haluatko tallentaa uutena sisältönä dokumentin, josta luottamuksellisia tietoja on poistettu?",		
		viewer_redaction_new_document_button: "Kyllä",
		viewer_redaction_new_document_cancel_button: "Ei",
		viewer_redaction_add_document_confirmation_question: "Haluatko tallentaa uutena dokumenttina, uutena versiona vai paikallisena tiedostona dokumentin, josta luottamuksellisia tietoja on poistettu?",
		viewer_redaction_add_document_confirmation_question_version_never: "Haluatko tallentaa uutena dokumenttina, uutena sisältönä vai paikallisena tiedostona dokumentin, josta luottamuksellisia tietoja on poistettu?",
		viewer_redaction_add_document_button: "Uusi dokumentti",
		viewer_redaction_add_new_version_button: "Uusi versio",
		viewer_redaction_add_new_version_button_version_never: "Uusi sisältö",
		viewer_redaction_add_local_file_button: "Paikallinen tiedosto",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Valitse luottamuksellisten tietojen poiston syy",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Syöttömallipohjaa, jonka avulla tämä dokumentti lisättiin tietovarastoon, ei löydy. Dokumentti kuitataan sisään tietovarastoon käyttämättä syöttömallipohjaa.",
		property_entry_template_not_retrieved_warning: "Syöttömallipohjaa, jonka avulla tämä dokumentti lisättiin tietovarastoon, ei löydy.  Dokumentin ominaisuudet näytetään käyttämättä syöttömallipohjaa.",
		multi_edit_entry_template_not_found_name: "[Ei löytynyt]",
		multi_edit_entry_template_not_retrieved_warning: "Syöttömallipohjaa, jonka avulla nämä objektit lisättiin tietovarastoon, ei löydy. Objektin ominaisuuksia muokataan käyttämättä syöttömallipohjaa.",
		checkin_major_version_hover: "Nostaa dokumentin versionumeroa yhdellä ja määrittää dokumentin tilaksi Julkaistu. Jos asetusta ei valita, dokumentti ei ole valmis julkaistavaksi ja se kuitataan sisään aliversiona.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokumenttia ei voi kuitata sisään, koska sitä ei ole kuitattu ulos.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Palvelimen käyttäjätunnus tai salasana ei kelpaa.",
		error_bad_userid_password_userResponse: "Varmista, että kirjoitit käyttäjätunnuksen ja salasanan oikein.",
		error_bad_userid_password_adminResponse: "Järjestelmä on palauttanut seuraavan virheen: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "virhesanoma",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Yhteyden muodostus Web-työasemaohjelmaan ei onnistu käyttämällä URL-osoitetta ${0}.",
		http_send_error_explanation: "Virheen syynä voi olla Web-sovelluspalvelimen kokoonpanohäiriö tai Web-työasemaohjelman sovellushäiriö.",
		http_send_error_userResponse: "Yritä kirjautua sisään uudelleen. Jos häiriö ei poistu, ilmoita virheestä järjestelmän pääkäyttäjälle.",
		http_send_error_adminResponse: "Järjestelmä on palauttanut seuraavan HTTP-virheen: ${1}.",
		http_send_error_0: "Web-työasemaohjelman_URL-osoite",
		http_send_error_1: "HTTP-virhe",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Yhteyden muodostus Web-työasemaohjelmaan ei onnistu käyttämällä URL-osoitetta ${0}.",
		http_error_explanation: "Sinun on ehkä tehtävä todennus palomuurissa, tai Web-sovelluspalvelin ei ole ajossa tai yhteyden muodostus palvelimeen ei onnistu verkon häiriöiden takia.",
		http_error_userResponse: "Jos sinun on tehtävä todennus palomuurissa, tee todennus ja yritä kirjautua uudelleen sisään. Jos häiriö ei poistu, ilmoita virheestä järjestelmän pääkäyttäjälle.",
		http_error_adminResponse: "Järjestelmä on palauttanut seuraavan HTTP-virheen: ${1}.",
		http_error_0: "Web-työasemaohjelman_URL-osoite",
		http_error_1: "HTTP-virhe",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Yhteyden muodostus Web-työasemaohjelmaan ei onnistu käyttämällä URL-osoitetta ${0}.",
		http_response_bad_explanation: "Virheen syynä voi olla Web-sovelluspalvelimen kokoonpanohäiriö tai Web-työasemaohjelman häiriö.",
		http_response_bad_userResponse: "Yritä kirjautua sisään uudelleen. Jos häiriö ei poistu, ilmoita virheestä järjestelmän pääkäyttäjälle.",
		http_response_bad_adminResponse: "Järjestelmä on palauttanut seuraavan virheen: ${1}.",
		http_response_bad_0: "Web-työasemaohjelman_URL-osoite",
		http_response_bad_1: "HTTP-virhe",
		http_response_bad_number: 2002,

		unititled_document_name: "Nimetön",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Sähköpostisovelman aloitus ei onnistu.",
		email_applet_init_failed_explanation: "Tämä ongelma voi ilmetä, jos sähköpostiohjelmaa ei ole asennettu oikein tai sen kokoonpano on määritetty puutteellisesti tai jos työasemaan ei ole asennettu tuettua Java Runtime Environment (JRE) -käyttöympäristön versiota.",
		email_applet_init_failed_userResponse: "Ratkaise ongelma seuraavasti:<ul><li>Varmista, että sähköpostisovellus on asennettu ja määritetty oletussähköpostiohjelmaksi työasemassa.</li><li>Antamalla seuraavan komennon kehotteessa voit tarkistaa, onko työasemaan asennettu tuettu JRE-versio: java -version</li></ul><p>Luettelo tuetuista JRE-versioista on IBM:n ohjelmistotukisivuston julkaisussa <i>Hardware and software prerequisites for IBM Content Navigator</i>.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Sähköpostisovelluksen aloitus ei onnistunut, koska pakollisen DLL-tiedoston lataus ei onnistu.",
		email_applet_JNI_LOAD_FAILED_explanation: "Pakollisen WCEmailAppletJNI.dll-tiedoston lataus ei onnistu, koska työaseman tilapäinen hakemisto on ehkä täynnä.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Varmista, että tilapäisessä hakemistossa on riittävästi tilaa. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta. Järjestelmä lataa WCEmailAppletJNI.dll-tiedoston oletusarvon mukaan Web-selaimen asetuksissa määritettyyn tilapäiseen hakemistoon.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Sähköpostisovelluksen aloitus ei onnistunut, koska sähköpostisovelma ei voi luoda tilapäistä tiedostoa.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Työaseman tilapäinen hakemisto on ehkä täynnä.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Varmista, että tilapäisessä hakemistossa on riittävästi tilaa. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Sähköpostisovelluksen aloitus ei onnistu, koska sähköpostisovelma ei voi käsitellä tilapäistä hakemistoa.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Työaseman tilapäinen hakemisto on ehkä täynnä, tai sinulla ei ehkä ole kirjoitusoikeuksia tilapäiseen hakemistoon.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Varmista, että tilapäisessä hakemistossa on riittävästi tilaa ja että sinulla on kirjoitusoikeudet tilapäiseen hakemistoon. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, ota yhteys järjestelmän pääkäyttäjään.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Sähköpostisovelma ei voi poistaa tilapäistä tiedostoa.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Tiedosto saattaa olla toisen sovelluksen käytössä tai tiedosto ei ole työasemassasi.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Jos tiedosto on toisen sovelluksen käytössä, sulje sovellus. Jos tiedosto sijaitsee paikallisessa tiedostojärjestelmässä, poista seuraava tiedosto työaseman tilapäishakemistosta: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Dokumenttiin osoittavan linkin luonti ei onnistu.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Tietovarasto on palauttanut URL-osoitteen, jonka muoto on virheellinen.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Sulje kaikki Web-selaimen välilehdet ja istunnot ja kirjaudu uudelleen sisään. Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, ota yhteys IBM:n ohjelmistotukeen.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Sähköpostisovelma ei voi liittää tiedostoa sähköpostiviestiin.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Tietovarasto on palauttanut dokumentin URL-osoitteen virheellisessä muodossa.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Sulje kaikki Web-selaimen välilehdet ja istunnot ja kirjaudu uudelleen sisään. Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, ota yhteys IBM:n ohjelmistotukeen.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Liitettä ei voi luoda.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Sähköpostisovelma ei voi lukea dokumentin URL-osoitetta.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Sulje kaikki Web-selaimen välilehdet ja istunnot ja kirjaudu uudelleen sisään. Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, ota yhteys IBM:n ohjelmistotukeen.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokumentin nouto tietovarastosta ei onnistunut.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Istunto on ehkä aikakatkaistu, tietovarasto tai Web-sovelluspalvelin ei ehkä ole ajossa tai Web-työasemaohjelman kokoonpanossa on ehkä häiriö.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Kirjaudu sisään ja yritä lähettää dokumentti uudelleen sähköpostitse. Jos häiriö toistuu, pyydä pääkäyttäjää tarkistamaan tietovaraston virhelokit.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Jos olet määrittänyt Web-työasemaohjelman muuntamaan AFP-dokumentit toiseen muotoon, kuten PDF-muotoon, varmista, että muunto on määritetty oikein, ennen kuin lähetät dokumentit liitteinä.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Dokumenttia ei voi muuntaa PDF-muotoon.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Dokumenttien muunnossa PDF-muotoon käytetty työkalu ei tue tiedostolajia.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Sulje tämä sivu ja yritä lähettää dokumentti uudelleen sähköpostitse muuntamatta sitä PDF-muotoon.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Sähköpostiviestiä ei luotu.",
		email_applet_MAPI_USER_ABORT_explanation: "Avaa sähköpostisovellus ja varmista, että se toimii oikein. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, pyydä järjestelmän pääkäyttäjää tarkistamaan käyttöjärjestelmän tapahtumalokit.",
		email_applet_MAPI_USER_ABORT_userResponse: "Jos halusit sulkea sähköpostisovelluksen, lisätoimia ei tarvita. Voit lähettää sähköpostin kirjautumalla sisään sähköpostisovellukseen ja lähettämällä dokumentin uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Sähköpostia ei voi luoda.",
		email_applet_MAPI_FAILURE_explanation: "Sähköpostityöasemaohjelma ei ehkä ole auki, tai et ehkä ole kirjautuneena.",
		email_applet_MAPI_FAILURE_userResponse: "Avaa sähköpostisovellus ja varmista, että se toimii oikein. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, pyydä järjestelmän pääkäyttäjää tarkistamaan käyttöjärjestelmän tapahtumalokit.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Sähköpostia ei voi luoda.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Et ole kirjautunut sähköpostityöasemaohjelmaan. Sähköpostityöasemaohjelman on oltava avoinna, ja sinun on oltava kirjautuneena, jotta voit lähettää viestin Web-työasemaohjelmasta.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Avaa sähköpostityöasemaohjelma ja kirjaudu sisään. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Sähköpostiviestin luonti ei onnistu, koska tilapäistä tiedostoa ei voi luoda työasemaan.",
		email_applet_MAPI_DISK_FULL_explanation: "Työaseman tilapäinen hakemisto on ehkä täynnä.",
		email_applet_MAPI_DISK_FULL_userResponse: "Varmista, että tilapäisessä hakemistossa on riittävästi tilaa. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Sähköpostiviestiä ei voi luoda, koska järjestelmän muisti ei riitä.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Avattuna on ehkä liikaa sovelluksia.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Sulje kaikki käyttämättömät sovellukset ja yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Ei MAPI-käyttöoikeutta.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Messaging Application Programming Interface (MAPI) -rajapintaa ei ehkä ole otettu käyttöön tai se ei ehkä ole tuettu sähköpostisovelluksessa. MAPI on sanomayhteyskäytäntö, jonka avulla Web-työasemaohjelman ja sähköpostisovelluksen välinen viestintä toteutetaan.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Ota yhteys järjestelmän pääkäyttäjään.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Varmista, että sähköpostisovelluksen MAPI-kokoonpano on määritetty oikein. Jos häiriö ei poistu, ota yhteys IBM:n ohjelmistotukeen.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Liitteen tai objektiin osoittavan linkin luonti ei onnistu.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Avattuna on ehkä liikaa Web-selaimen istuntoja.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Sulje kaikki käyttämättömät Web-selaimen istunnot. Yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta. Jos häiriö ei poistu, ota yhteys järjestelmän pääkäyttäjään.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Sähköpostia ei voi lähettää.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Lähetettäviä liitteitä on ehkä liikaa.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Valitse vähemmän tiedostoja. Yritä sitten lähettää dokumentit uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Sähköpostia ei voi lähettää.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Yrität ehkä lähettää sähköpostiviestin liian monelle vastaanottajalle.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Pienennä vastaanottajien määrää ja lähetä sähköpostiviesti uudelleen.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Liitettä ei voi luoda.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Osa pakollisista tilapäisistä tiedostoista on ehkä poistettu ennen liitteen luontia. Tämä virhe voi ilmetä, jos selaimen välimuisti tyhjennetään ennen sähköpostiviestin lähetystä.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Liitettä ei voi luoda.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Osa pakollisista tilapäisistä tiedostoista on ehkä poistettu ennen liitteen luontia. Tämä virhe voi ilmetä, jos selaimen välimuisti tyhjennetään ennen sähköpostiviestin lähetystä.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Liitettä ei voi luoda sähköpostisovelluksella.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Sähköpostia ei voi lähettää määritetylle vastaanottajalle.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Osoitekirja ei ehkä sisällä vastaanottajaa.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Tarkista vastaanottajan nimi ja yritä lähettää dokumentti uudelleen.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Sähköpostia ei voi lähettää määritetylle vastaanottajalle.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Sähköpostiosoitteen muoto saattaa olla väärä.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Varmista, että olet antanut kelvollisen sähköpostiosoitteen, ja yritä lähettää dokumentti uudelleen.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Sähköpostia ei voi lähettää.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Sähköpostiviesti saattaa olla liian pitkä.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Lyhennä sähköpostiviestin tekstiä ja yritä lähettää sähköpostiviesti uudelleen.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Sähköpostia ei voi luoda.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Sähköpostityöasemaohjelmassa on saattanut ilmetä häiriö sen yrittäessä luoda sähköpostiviestiä.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Aloita sähköpostityöasemaohjelma uudelleen ja yritä sitten lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Sähköpostia ei ehkä ole muodostettu oikein.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Sähköpostia ei voi lähettää määritetylle vastaanottajalle.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Sähköpostiosoitteen muoto saattaa olla väärä.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Varmista, että olet antanut kelvollisen sähköpostiosoitteen, ja lähetä dokumentti uudelleen.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Sähköpostityöasemaohjelma ei voi toteuttaa pyydettyä toimintoa.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Sähköpostisovellus on palauttanut odottamattoman virheen.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Yritä lähettää dokumentti uudelleen Web-työasemaohjelmasta.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Yhdestä ominaisuudesta puuttuu pakollinen määrä arvoja.",
		error_property_cardinality_explanation: "Joillakin ominaisuuksilla on vähimmäis- ja enimmäismäärä arvoja.",
		error_property_cardinality_userResponse: "Selvitä koho-ohjeen avulla, mikä ominaisuus edellyttää vähimmäismäärää arvoja. Määritä sitten vähimmäismäärä arvoja ja yritä uudelleen.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Tiedoston nimi on pakollinen.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Määritä tiedoston nimi ja yritä uudelleen.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Lisäosa ${0} sisältää virheitä.",
		plugin_error_explanation: "Lisäosan ${0} JavaScript-koodia arvioitaessa on ilmennyt virhe. Jos jatkat Web-työasemaohjelman käyttöä, muita virheitä saattaa ilmetä.",
		plugin_error_userResponse: "Ota yhteys järjestelmän pääkäyttäjään.",
		plugin_error_adminResponse: "Lisäosassa on häiriö, joka lisäosan toimittajan on ratkaistava. On suositeltavaa, että poistat lisäosan Web-työasemaohjelman kokoonpanosta, kunnes lisäosaan liittyvä häiriö on ratkaistu.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Syöttömallipohjaa ei voi avata.",
		open_old_format_entry_template_error_explanation: "Syöttömallipohjassa on käytössä vanha muoto, joka ei ole tuettu Web-työasemaohjelmassa.",
		open_old_format_entry_template_error_userResponse: "Pyydä järjestelmän pääkäyttäjää päivittämään syöttömallipohja.",
		open_old_format_entry_template_error_adminResponse: "Application Engine- tai Workplace XT Entry Template Designer -ohjelman avulla voit tallentaa syöttömallipohjan päivitetyn version.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Syöttömallipohjaa ei voi avata.",
		open_custom_object_entry_template_error_explanation: "Web-työasemaohjelma ei tue seuraavaa syöttömallipohjan lajia: Mukautettu objekti -syöttömallipohjat.",
		open_custom_object_entry_template_error_userResponse: "Avaa jokin toinen syöttömallipohja.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "eForms-objektia ei voi avata.",
		open_forms_object_error_explanation: "Web-työasemaohjelma ei tue seuraavia eForms-objekteja: lomakemallipohja, lomakkeen tiedot, dokumenttikäytäntö ja käsittelyreittikäytäntö.",
		open_forms_object_error_userResponse: "Avaa toinen dokumentti.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Syöttömallipohjaa ${0} ei voi käyttää.",
		entry_template_folder_restricted_error_explanation: "Syöttömallipohja lisää objekteja kansioon ${1}, mutta sinulla ei ole käyttöoikeuksia, joiden perusteella saisit lisätä objekteja kyseiseen kansioon.",
		entry_template_folder_restricted_error_userResponse: "Valitse jokin toinen syöttömallipohja tai pyydä järjestelmän pääkäyttäjältä käyttöoikeudet, joiden perusteella saat lisätä objekteja kansioon ${1}.",
		entry_template_folder_restricted_error_0: "syöttömallipohjan_nimi",
		entry_template_folder_restricted_error_1: "kansion_nimi",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Syöttömallipohjaa ei voi avata.",
		open_records_entry_template_error_explanation: "Web-työasemaohjelma ei tue seuraavaa syöttömallipohjan lajia: Vahvista asiakirjaksi -syöttömallipohjat.",
		open_records_entry_template_error_userResponse: "Avaa jokin toinen syöttömallipohja.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Käsittelyreittiä ei voi avata.",
		open_workflow_error_explanation: "Web-työasemaohjelma ei tue käsittelyreittien avausta.",
		open_workflow_error_userResponse: "Avaa toinen dokumentti.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Dokumenttia ei voi avata.",
		viewer_unable_to_view_error_explanation: "Tämänlajisille dokumenteille ei ole määritetty katseluohjelmaa, tai määritetty katseluohjelma ei ole yhteensopiva järjestelmän kanssa.",
		viewer_unable_to_view_error_userResponse: "Pyydä järjestelmän pääkäyttäjää määrittämään katseluohjelma tämänlajisille dokumenteille ja varmista, että määritetty katseluohjelma soveltuu käyttäjän järjestelmään.",
		viewer_unable_to_view_error_adminResponse: "Määritä hallintatyökalulla katseluohjelma tämänlajiselle dokumentille.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Hakua ei voi avata.",
		search_cannot_open_error_explanation: "Tähän työpöytään ei ole määritetty hakuominaisuutta.",
		search_cannot_open_error_userResponse: "Kysy järjestelmän pääkäyttäjältä, voitko saada hakuominaisuuden sisältävän työpöydän käyttöoikeudet tai voiko tämän työpöydän päivittää siten, että se sisältää hakuominaisuuden.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokumenttia ei ladattu.",
		viewer_document_load_failed_error_explanation: "Daeja ViewONE Professional -katseluohjelma ei voinut avata dokumenttia.",
		viewer_document_load_failed_error_userResponse: "Lisätietoja on katseluohjelmassa näkyvässä virhesanomassa.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Dokumenttia ei voi näyttää.",
		viewer_session_expired_explanation: "Dokumentin sisältöä ei voi noutaa.",
		viewer_session_expired_userResponse: "Yritä kirjautua sisään uudelleen. Jos häiriö ei poistu, sovelluspalvelin ei ehkä ole käynnissä. Pyydä järjestelmän pääkäyttäjää etsimään lisätietoja IBM Content Navigator -virhelokeista tai käynnistämään palvelin uudelleen.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Dokumenttia ei voi näyttää.",
		ajaxViewer_getPage_failed_explanation: "AJAX-katseluohjelma on vastaanottanut virhevastauksen sivun sisältöä noudettaessa. Sovelluspalvelin ei ole ehkä käytössä.",
		ajaxViewer_getPage_failed_userResponse: "Sulje Web-selain ja kirjaudu uudelleen sisään. Jos häiriö ei poistu, pyydä järjestelmän pääkäyttäjää etsimään lisätietoja Web-sovelluspalvelimen lokitiedostoista tai käynnistämään palvelin uudelleen.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) -käyttöympäristöä ei löytynyt työasemasta.",
		viewer_java_plugin_not_found_explanation: "Lisäosaa ei löytynyt, tai asennettu JRE-versio ei ole oikea.",
		viewer_java_plugin_not_found_userResponse: "Tarkista, onko JRE asennettuna työasemassa. Voit esimerkiksi kirjoittaa komentokehotteeseen seuraavan komennon: Java -version. Jos JRE-ympäristöä ei ole asennettu työasemaan tai jos se on asennettu väärällä versiotasolla, asenna työasemaan JRE-ympäristön asianmukainen versio. Luettelo tuetuista versioista on IBM:n ohjelmistotukisivuston julkaisussa <i>Hardware and software prerequisites for IBM Content Navigator</i>.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokumenttia ei voi tuoda näkyviin Web-selaimessa.",
		viewer_pdf_plugin_not_found_explanation: "PDF-dokumenttien näyttämiseen käytettyä lisäosaa ei löytynyt.",
		viewer_pdf_plugin_not_found_userResponse: "Järjestelmä lataa PDF-tiedoston työasemaan eikä näytä sitä katseluohjelman ikkunassa.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Seuraavan objektin lisäys tietovarastoon ei onnistu: ${0}.",
		add_document_single_item_error_explanation: "Virheen syynä voi olla jokin seuraavista:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Lisättävä dokumentti on siirretty tai poistettu.</li>" + "<li>Lisättävä dokumentti on nimetty uudelleen.</li>" + "<li>Lisättävä dokumentti on vioittunut.</li>" + "<li>Lisättävä dokumentti on avattu toisessa sovelluksessa.</li>" + "<li>Tietovarastoon lisättävä kohde on kansio (eikä dokumentti).</li>" + "<li>Käyttöjärjestelmässä voimassa olevat käyttöoikeudet eivät riitä dokumentin käsittelyyn.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Ratkaise ongelma asianmukaisilla toimilla:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Jos dokumentti on siirretty tai nimetty uudelleen, etsi dokumentti tiedostojärjestelmästä ja yritä lisätä se uudelleen.</li>" + "<li>Jos dokumentti on avattuna toisessa sovelluksessa, sulje dokumentti ja yritä lisätä se uudelleen.</li>" + "</ul>" + "<br>Kansioita ei voi lisätä tietovarastoon.",
		add_document_single_item_error_0: "epäonnistunut_objekti",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Seuraavien ${0} objektin lisäys tietovarastoon ei onnistu: ${1}",
		add_document_multiple_items_error_explanation: "Objektien lisäys tietovarastoon ei onnistu, koska ainakin yhdessä objektissa on ilmennyt ongelma. Virheen syynä voi olla jokin seuraavista:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Lisättävä dokumentti on siirretty tai poistettu.</li>" + "<li>Lisättävä dokumentti on nimetty uudelleen.</li>" + "<li>Lisättävä dokumentti on vioittunut.</li>" + "<li>Lisättävä dokumentti on avattu toisessa sovelluksessa.</li>" + "<li>Tietovarastoon lisättävä kohde on kansio (eikä dokumentti).</li>" + "<li>Käyttöjärjestelmässä voimassa olevat käyttöoikeudet eivät riitä dokumentin käsittelyyn.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Ratkaise ongelma asianmukaisilla toimilla:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Jos dokumentti on siirretty tai nimetty uudelleen, etsi dokumentti tiedostojärjestelmästä ja yritä lisätä objektit uudelleen.</li>" + "<li>Jos dokumentti on avattuna toisessa sovelluksessa, sulje se ja yritä lisätä objektit uudelleen.</li>" + "<li>Jos dokumentti on poistettu tai se on vioittunut, poista kyseisen objektin valinta ja yritä lisätä loput objektit uudelleen.</li>" + "</ul>" + "<br>Kansioita ei voi lisätä tietovarastoon.",
		add_document_multiple_items_error_0: "objektien_määrä",
		add_document_multiple_items_error_1: "epäonnistuneet_objektit",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Tässä sijainnissa ei voi vetää ja pudottaa objekteja.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "eForms-objektia ei voi avata.",
		open_forms_work_object_error_explanation: "EForms-objektilaji käsittelyreittikäytäntö ei ole tuettu Web-työasemaohjelmassa.",
		open_forms_work_object_error_userResponse: "Avaa toinen dokumentti.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Dokumenttia ei voi avata.",
		viewer_privilege_to_view_error_explanation: "Käyttöoikeudet eivät riitä dokumentin tarkasteluun.",
		viewer_privilege_to_view_error_userResponse: "Pyydä dokumentin omistajalta tai järjestelmän pääkäyttäjältä dokumentin tarkasteluun tarvittavat käyttöoikeudet.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Objekteja ei voi lisätä tietovarastoon.",
		add_document_too_many_items_error_explanation: "Voit lisätä enintään ${0} objektia kerrallaan. Lisättävien objektien määrä on nyt ${1}.",
		add_document_too_many_items_error_userResponse: "Poista osa objekteista luettelosta ja yritä sitten lisätä objektit uudelleen. Voit myös pyytää järjestelmän pääkäyttäjää lisäämään tähän työpöytään yhdellä kertaa lisättävien dokumenttien enimmäismäärää.",
		add_document_too_many_items_error_0: "objektien_enimmäismäärä",
		add_document_too_many_items_error_1: "objektien_määrä",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Yhteyden muodostus Web-työasemaohjelmaan ei onnistu käyttämällä URL-osoitetta ${0}.",
		http_ltpa_expired_explanation: "Selausistuntoon liitetty LTPA-avain on vanhentunut.",
		http_ltpa_expired_userResponse: "Aloita Web-selain uudelleen ja yritä kirjautua uudelleen sisään. Jos häiriö toistuu, ilmoita seuraavasta virheestä järjestelmän pääkäyttäjälle: ${1}.",
		http_ltpa_expired_0: "Web-työasemaohjelman_URL-osoite",
		http_ltpa_expired_1: "HTTP-virhe",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Dokumenttia ei voi lisätä kansioon ${0}.",
		dnd_no_privilege_error_explanation: "Kansion käyttöoikeudet estävät dokumenttien lisäyksen kansioon.",
		dnd_no_privilege_error_userResponse: "Lisää dokumentti toiseen kansioon.",
		dnd_no_privilege_error_0: "objektin_nimi",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Objekteja ei voi muokata.",
		modify_document_too_many_items_error_explanation: "Voit muokata enintään ${0} objektia kerrallaan. Muokattavien objektien määrä on nyt ${1}.",
		modify_document_too_many_items_error_userResponse: "Valitse vähemmän objekteja ja yritä muokata objekteja uudelleen. Voit myös pyytää järjestelmän pääkäyttäjää lisäämään tässä työpöydässä yhdellä kertaa muokattavien objektien enimmäismäärää.",
		modify_document_too_many_items_error_0: "objektien_enimmäismäärä",
		modify_document_too_many_items_error_1: "objektien_määrä",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Et voi käyttää luokkaa ${0}.",
		add_document_multiple_unique_values_error_explanation: "Luokka ${0} sisältää ainakin yhden ominaisuuden, joka edellyttää yksilöllistä arvoa kussakin dokumentissa. Kun lisäät useita dokumentteja, kaikki dokumentit käyttävät samoja arvoja.",
		add_document_multiple_unique_values_error_userResponse: "Valitse toinen luokka tai lisää dokumentit erikseen.",
		add_document_multiple_unique_values_error_0: "luokan_näyttönimi",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Syöttömallipohjaa ${0} ei voi käyttää.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Syöttömallipohja ${0} edellyttää dokumenttien lisäystä luokkaan ${1}. Luokka ${1} sisältää kuitenkin ainakin yhden ominaisuuden, joka edellyttää yksilöllistä arvoa kussakin dokumentissa. Kun lisäät useita dokumentteja, kaikki dokumentit käyttävät samoja arvoja.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Valitse toinen syöttömallipohja tai lisää dokumentit erikseen.",
		add_document_multiple_unique_values_entry_template_error_0: "syöttömallipohjan_nimi",
		add_document_multiple_unique_values_entry_template_error_1: "luokan_näyttönimi",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Syöttömallipohjaa ${0} ei voi käyttää.",
		entry_template_class_restricted_error_explanation: "Syöttömallipohja lisää objekteja käyttämällä luokkaa ${1}, mutta sinulla ei ole käyttöoikeuksia, joiden perusteella saisit lisätä objekteja käyttämällä tätä luokkaa.",
		entry_template_class_restricted_error_userResponse: "Valitse jokin toinen syöttömallipohja tai pyydä järjestelmän pääkäyttäjältä käyttöoikeudet, joiden perusteella saat lisätä objekteja käyttämällä luokkaa ${1}.",
		entry_template_class_restricted_error_0: "syöttömallipohjan_nimi",
		entry_template_class_restricted_error_1: "luokan_näyttönimi",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Työobjektia ei voi määrittää uudelleen toiselle käyttäjälle.",
		process_reassign_error_explanation: "Käsittelyreitti estää tämän toiminnon.",
		process_reassign_error_userResponse: "Voit avata työobjektin ja tehdä tämän vaiheen loppuun työobjektissa.  Jos haluat lisätietoja tästä ongelmasta, pyydä työobjektin omistajaa tarkistamaan, että työobjektin voi määrittää uudelleen.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Seuraavan mukautetun toiminnon lataus ei onnistu: ${0}.",
		customaction_loadurl_error_explanation: "Mukautetun toiminnon sijainti ei ole käytettävissä. Mukautetun tehtävän nykyinen URL-osoite on ${1}.",
		customaction_loadurl_error_userResponse: "Pyydä pääkäyttäjää siirtämään mukautettu toiminto sijaintiin, joka on käytettävissä.",
		customaction_loadurl_error_adminResponse: "Mukautetun toiminnon määrittävä JSP-tiedosto on toimitettava eClient-Web-sovelluksen tai IBM Content Navigator -Web-sovelluksen mukana.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Seuraavaa ominaisuutta ei löydy: ${0}.",
		feature_invalid_explanation: "Tämä häiriö voi ilmetä, jos ominaisuus ei ole käytettävissä määritetyllä työpöydällä tai jos ominaisuuden nimi on kirjoitettu väärin.",
		feature_invalid_userResponse: "Kun napsautat OK-painiketta, järjestelmä ohjaa sinut edelleen tämän työpöydän oletusominaisuuteen. Voit raportoida tästä ongelmasta ottamalla yhteyden järjestelmän pääkäyttäjään.",
		feature_invalid_adminResponse: "Jos ominaisuus on käytettävissä työpöydällä, päivitä työpöydän kokoonpano hallintatyökalussa. Jos ominaisuus ei sisälly työpöytään tai ominaisuus on kirjoitettu väärin, pyydä tämän ominaisuuden URL-osoitteen luonutta sovelluksen kehittäjää päivittämään URL-osoite.",
		feature_invalid_number: 2066,
		feature_invalid_0: "ominaisuuden_nimi",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Hakua ${0} ei voi avata.",
		search_unsupportedTeamspaceSearch_error_explanation: "Tämän haun avaus edellyttää, että olet ryhmätyötilassa.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Valitse toinen haku.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Seuraavaa tiedostoa ei voi tuoda: ${0}.",
		wrong_import_file_type_error_explanation: "Tiedoston on oltava ominaisuustiedosto.",
		wrong_import_file_type_error_userResponse: "Valitse hallintatyökalusta viemäsi ominaisuustiedosto.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Tietovarastoa ${0} ei löydy työpöydästä ${1}.",
		browse_repository_not_found_error_explanation: "Tietovaraston on oltava työpöydällä, ja tietovarastossa on oltava käytössä selaustoiminto, kun se on määritetty URL-parametrissa.",
		browse_repository_not_found_error_userResponse: "Varmista, että URL-osoitteessa määritetty tietovaraston tunnus on oikein, että tietovarasto on lisätty työpöydälle ${1} ja että tietovarastossa on käytössä selaustoiminto.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Työpöydän ${1} tietovarastossa ${0} ei ole käytössä selaustoimintoa.",
		browse_repository_not_enabled_error_explanation: "Tietovarastossa on oltava käytössä selaustoiminto, kun tietovarasto on määritetty URL-parametrissa.",
		browse_repository_not_enabled_error_userResponse: "Ota selaustoiminto käyttöön työpöydän ${1} tietovarastossa ${0}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Hakua ei voi toteuttaa, koska linkki sisältää virheellisiä ehtoja.",
		invalid_xt_stored_search_criteria_error_explanation: "Seuraava arvo ei kelpaa: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Pyydä järjestelmän pääkäyttäjää toimittamaan päivitetty linkki.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Muokkaa URL-osoitteen asianmukaista nimi-arvo-paria. Jos et tiedä, mitkä arvot ovat kelvollisia ominaisuuden arvoja, selvitä kelvollinen arvo avaamalla tallennettu haku FileNet Workplace XT -hakusuunnittelijassa.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Tietovarastojen välistä hakua ei voi avata.",
		unified_search_invalid_fixed_value_error_explanation: "Tietovarastojen välinen haku sisältää virheellisiä ehtoja. Tämä ongelma voi ilmetä, kun ehdoissa on kiinteä arvo, joka ei ole yhteensopiva muiden vastaavuusmäärityksen ominaisuuksien kanssa. Ongelma voi esimerkiksi ilmetä, jos kiinteä arvo on merkkijono, mutta muut vastaavuusmäärityksen ominaisuudet ovat kokonaislukuja.",
		unified_search_invalid_fixed_value_error_userResponse: "Jos käyttöoikeutesi riittävät haun muokkaukseen, poista virheelliset ehdot ja tallenna haku uudelleen. Jos käyttöoikeutesi eivät riitä haun muokkaukseen, pyydä haun omistajaa tai järjestelmän pääkäyttäjää tallentamaan haku uudelleen.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Pyyntöä ei voi suorittaa.",
		launch_action_invalid_json_error_explanation: "Web-työasemaan välitetyt tiedot eivät kelpaa.",
		launch_action_invalid_json_error_userResponse: "Kerro järjestelmän pääkäyttäjälle, mitä sovellusta käytit ongelman ilmetessä.",
		launch_action_invalid_json_error_adminResponse: "Työasemasovellus ei lähettänyt kelvollista JSON-objektia Web-työasemaan. Ota yhteys IBM:n ohjelmistotukeen.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Pyyntöä ei voi suorittaa.",
		launch_action_not_found_error_explanation: "Toimintoa ${0} ei ole määritetty yhtäkään työpöydän ${1} valikkoa varten.",
		launch_action_not_found_error_userResponse: "Pyydä järjestelmän pääkäyttäjää määrittämään työpöytä ${1} siten, että siinä käytetään valikkoa, joka sisältää toiminnon ${0}, tai määrittämään sinut sellaisen työpöydän käyttäjäksi, joka sisältää toiminnon ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Pyyntöä ei voi suorittaa.",
		launch_action_repository_not_found_error_explanation: "Tietovarastoa ${0} ei ole liitetty työpöytään ${1}.",
		launch_action_repository_not_found_error_userResponse: "Pyydä järjestelmän pääkäyttäjää liittämään tietovarasto ${0} työpöytään ${1} tai määrittämään sinut sellaisen työpöydän käyttäjäksi, joka sisältää tietovaraston ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Ryhmätyötilaa ei voi avata.",
		teamspace_cannot_open_error_explanation: "Tähän työpöytään ei ole määritetty ryhmätyötilaominaisuutta.",
		teamspace_cannot_open_error_userResponse: "Kysy järjestelmän pääkäyttäjältä, voitko saada ryhmätyötilaominaisuuden sisältävän työpöydän käyttöoikeudet tai voiko tämän työpöydän päivittää siten, että se sisältää ryhmätyötilaominaisuuden.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "On ilmennyt virhe kuitattaessa sisään sisältöä, josta tietoja on poistettu.",
		viewer_redaction_checkin_failed_explanation: "Katseluohjelma on vastaanottanut virhevastauksen kuitattaessa sisään sisältöä, josta tietoja on poistettu.",
		viewer_redaction_checkin_failed_userResponse: "Pyydä järjestelmän pääkäyttäjää tarkastamaan Web-sovelluspalvelimen lokitiedostot.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Tähän tietovarastoon ei voi lisätä dokumentteja.",
		add_document_odserver_odwek_version_od_error_explanation: "Content Manager OnDemand -palvelimen tai ODWEK-paketin käytössä oleva versio ei ole sen vähimmäistason mukainen, joka tarvitaan, jotta dokumenttien lisääminen Content Manager OnDemand -tietovarastoon olisi tuettu toiminto.",
		add_document_odserver_odwek_version_od_error_userResponse: "Pyydä pääkäyttäjää tarkistamaan, mitkä Content Manager OnDemand -palvelimen ja ODWEK-paketin versiot tarvitaan, jotta dokumenttien lisääminen Content Manager OnDemand -tietovarastoon on tuettu toiminto.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Objekteja ei voi lisätä tietovarastoon.",
		add_document_too_many_items_od_error_explanation: "IBM Content Manager OnDemand -tietovarastoihin voi lisätä vain yhden objektin kerrallaan.",
		add_document_too_many_items_od_error_userResponse: "Poista osa objekteista luettelosta ja yritä sitten lisätä objektit uudelleen yksi kerrallaan.",
		add_document_too_many_items_od_error_0: "objektien_enimmäismäärä",
		add_document_too_many_items_od_error_1: "objektien_määrä",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Objektia ei voi lisätä tietovarastoon.",
		add_document_filesize_empty_od_error_explanation: "IBM Content Manager OnDemand -tietovarastoon ei voi lisätä tyhjiä tiedostoja.",
		add_document_filesize_empty_od_error_userResponse: "Lisää tiedostoon sisältö ja lisää tiedosto sitten uudelleen. Vaihtoehtoisesti voit lisätä jonkin toisen objektin.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Tietovarastojen välistä hakua ei voi avata.",
		unified_search_repository_not_found_error_explanation: "Tietovarastojen välinen haku sisältää ainakin yhden virheellisen tietovaraston. Tämä häiriö voi ilmetä, kun vähintään yksi hakuun sisällytetty tietovarasto poistetaan sovelluksesta tai nykyiseltä työpöydältä.",
		unified_search_repository_not_found_error_userResponse: "Jos käyttöoikeutesi riittävät haun muokkaukseen, tallenna haku uudelleen. Kun tallennat haun, Web-työasemaohjelma poistaa virheelliset tietovarastot hausta. Jos käyttöoikeutesi eivät riitä haun muokkaukseen, pyydä haun omistajaa tai järjestelmän pääkäyttäjää tallentamaan haku uudelleen.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Uutta dokumenttia ei voi luoda.",
		edit_document_using_office_online_error: "Dokumenttia ei voi avata.",
		edit_document_using_office_online_error_explanation: "Microsoft Office Online Server -palvelimen URL-osoitetta ei ole määritetty.",
		edit_document_using_office_online_error_userResponse: "Ennen kuin voit käyttää Office Online -palvelua, pääkäyttäjän on ensin otettava Office Online Server -palvelin käyttöön tietovarastossa ja määritettävä Microsoft Office Online Server -palvelimen URL-osoite.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Dokumenttia ei voi avata Microsoft Office Online -palvelussa.",
		edit_document_using_office_online_error_userResponse1: "Pyydä pääkäyttäjää päivittämään MS Office Online Server -integraatio.<br><br> Jos käyttäjän on voitava käyttää dokumenttia Microsoft Office Online -palvelusta, siirry tietovaraston Muokkaa integrointia -sivulle ja päivitä MS Office Online Server -integrointi niin, että luokka sisältyy Luokat, joita muokataan Office Online -tukea varten -luetteloon. ",		
		browser_not_support_this_viewer: "Määritetty katseluohjelma ei ole yhteensopiva selaimen kanssa.",
		browser_not_support_this_viewer_explanation: "Selain ei tue katseluohjelmaa ${0}.",
		browser_not_support_this_viewer_userResponse: "Avaa dokumentti toisella katseluohjelmalla. Luettelo tuetuista selaimista on IBM:n ohjelmistotukisivuston julkaisussa <i>Hardware and software prerequisites for IBM Content Navigator</i>.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Käsittelyreitin tiedot",
		process_information_info_text: "Valittu objekti on tällä hetkellä ajossa seuraavissa käsittelyreiteissä.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Yhtä suuri kuin",
		operator_NOTEQUAL: "Eri suuri kuin",
		operator_LIKE: "On kuten",
		operator_STARTSWITH: "Alkaa merkeillä",
		operator_ENDSWITH: "Päättyy merkkeihin",
		operator_NOTLIKE: "Ei ole kuten",
		operator_NULL: "On tyhjä",
		operator_NOTNULL: "Ei ole tyhjä",
		operator_LESS: "Pienempi kuin",
		operator_LESSOREQUAL: "Pienempi tai yhtä suuri kuin",
		operator_GREATER: "Suurempi kuin",
		operator_GREATEROREQUAL: "Suurempi tai yhtä suuri kuin",
		operator_BETWEEN: "Välillä",
		operator_NOTBETWEEN: "Ei välillä",
		operator_IN: "Sisältää kaikki",
		operator_INANY: "Sisältää minkä tahansa",
		operator_NOTIN: "Ei sisällä mitään",
		operator_CONTAINS: "Sisältää",

		/* SearchForm widget */
		search_button_tooltip: "Hakee dokumentteja, jotka vastaavat määritettyjä ehtoja.",
		reset_button_tooltip: "Palauttaa hakuun pääkäyttäjän määrittämät oletusarvot.",
		clear_button_tooltip: "Poistaa hausta kaikki lisäämäsi arvot.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Valitse haku",
		append_to_search: "Liitä hakuun",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Uusi haku",
		new_unified_search: "Uusi tietovarastojen välinen haku",
		searh_name_contains: "Haun nimi sisältää",
		keep_search_criteria_expanded: "Pidä hakuperusteet avoimina",
		showing_results: "Tulokset kohteelle:",
		open_in_new_window: "Avaa uudessa ikkunassa",
		open_in_new_tab: "Avaa uudessa välilehdessä",
		close_tab: "Sulje välilehti",
		add_repository: "Lisää tietovarasto",
		edit_repository: "Muokkaa tietovarastoa",
		remove_repository: "Poista",
		search_scope: "Hakualue",
		search_class_template: "Luokka",
		object_type_version: "Objektilaji ja versio",
		not_applicable: "Ei sovellettavissa",
		unified_search_including_subfolders: " (Sisällyttää alikansiot)",
		unified_search_dialog_intro_text: "Valitse tietovarasto ja haku tai luokat, jotka haluat sisällyttää hakuun.",
		unified_search_class_or_template: "Luokka tai mallipohja",

		select_object_fieldset_legend: "Kuinka haluat etsiä liitettäviä objekteja:",
		select_object_create_new_search: "Uusi haku",
		select_object_search_template: "Aiemmin luotu haku",

		search_criteria: "Hakuperusteet:",
		search_criteria_no_colon: "Hakuperusteet",
		search_in_multiple: "Hae kohteesta (${0}):",
		search_location_including_subfolders: "${0} alikansiot mukaan lukien",
		search_class: "Luokka:",
		search_class_multiple: "Luokka (${0}):",
		search_class_including_subclasses: "${0} aliluokat mukaan lukien",
		search_class_all_pseudo: "Kaikki",
		search_results: "Haun tulokset",
		select_operator: "Valitse operaattori",
		ending_value: "Ominaisuuden ${0} viimeinen arvo on seuraava:",
		search_options: "Hakuasetukset:",
		search_version: "Versio:",
		search_released_version: "Julkaistu versio",
		search_current_version: "Nykyinen versio",
		search_all_versions: "Kaikki versiot",
		search_file_type_filter: "Suodatus tiedoston lajin mukaan:",
		search_one_file_type: "Yksi tiedostolaji",
		search_many_file_types: "${0} tiedostolajia",
		search_action_filter: "Suodatus toiminnon mukaan:",
		search_action_filter_hover_help: "Tarkenna tuloksia niin, että ne sisältävät vain tiedostot, joille käyttäjät ovat toteuttaneet tietyn toiminnon.<br/>Voit hakea esimerkiksi vain dokumentteja, jotka on lisätty 20.9.2012.",
		search_action_filter_enabled: "Suodatus toiminnon mukaan on käytössä",
		search_enable: "Ota käyttöön",
		search_disable: "Poista käytöstä",
		search_by: "peruste",
		search_added: "Lisätty",
		search_modified: "Muokattu",
		search_checked_out: "Kuitattu ulos",
		search_date_operator_on: "Käytössä",
		search_date_operator_not_on: "Ei ajankohtana",
		search_date_operator_before: "Ennen",
		search_date_operator_after: "Voimassa",
		search_version_hover_help_p8: "Julkaistu versio on kaikkien käyttäjien käytettävissä. Dokumentti, joka on nykyinen versio, tarkoittaa sitä, että vähintään yksi käyttäjä muokkaa kyseistä dokumenttia.",
		search_version_hover_help_cm: "Nykyinen versio on objektin uusin versio.",
		search_using: "Hae objektit, jotka vastaavat seuraavia hakuehtoja:",
		search_property_and_text_criteria: "Ominaisuuksien arvot ja tekstimuotoiset hakuehdot",
		search_property_or_text_criteria: "Ominaisuuksien arvot tai tekstimuotoiset hakuehdot",
		search_property_and_text: "Ominaisuus- ja tekstihakuehdot",
		search_property_or_text: "Ominaisuus- tai tekstihakuehdot",
		search_property_options: "Ominaisuusasetukset:",
		search_property_option_match_all: "Kaikki ominaisuudet",
		search_property_option_match_any: "Mikä tahansa ominaisuus",
		search_property_option_match_all_summary: "Vastaa kaikkia",
		search_property_option_match_any_summary: "Vastaa mitä tahansa",
		search_total_count_type_total: "Yhteensä",
		search_total_count_type_atleast: "Vähintään",
		search_content_size_filter: "Sisällön koon suodatin:",
		search_content_size_filter_any: "Mikä tahansa sisällön koko",

		/* Search work options */
		search_work_filter: "Työkohteen suodatin:",
		search_work_filter_hover_help: "Tarkenna tulokset sisältämään vain käsittelyreitissä olevat kohteet. Voit esimerkiksi rajoittaa tulokset sisältämään vain aktiiviset työkohteet.<br /><br />Tätä asetusta ei voi käyttää, jos haluat nähdä haun palauttamien kohteiden kaikki versiot.",
		search_work_filter_enabled: "Työkohteen suodatin on käytössä",
		search_work_filter_status: "Tila:",
		search_work_filter_step: "Vaihe:",
		search_work_filter_owner: "Omistaja:",
		search_work_filter_status_all: "Kaikki kohteet",
		search_work_filter_status_active: "Aktiiviset kohteet",
		search_work_filter_status_suspended: "Lykätyt kohteet",
		search_work_filter_process_all: "Kaikki käsittelyreitit",
		search_work_filter_step_all: "Kaikki vaiheet",
		search_work_filter_owner_all: "Kaikki käyttäjät",
		search_work_filter_step_error: "Vaiheen nimeä ei ole.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Hakua ei voi tehdä ilman lisätietoja. Määritä arvo vähintään yhteen ehtoon.",
		search_insufficient_input_box: "Hakua ei voi tehdä ilman lisätietoja. Anna  tekstihakuperusteet tai valitse metatietojen mallipohja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Hakua ei voi määrittää ajettavaksi, jos se on avattu ilman lisätietoja. Määritä arvo vähintään yhteen ehtoon.",
		search_member_required: "Voit määrittää tämän haun yhteiskäyttöön tiettyjen käyttäjien ja ryhmien kanssa valitsemalla ainakin yhden käyttäjän tai ryhmän, jonka kanssa määrität haun yhteiskäyttöön.",
		search_criteria_layout_and: "JA",
		search_criteria_layout_or: "TAI",
		search_prompt_close_without_save: "Haluatko sulkea kohteen tallentamatta muutoksia?",
		search_prompt_close_all_without_save: "Haluatko sulkea kaikki välilehdet tallentamatta muutoksia?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Jokin seuraavanlajisista hakuperusteista ei kelpaa tässä tietovarastossa: ${0}. Jos haluat ajaa haun Web-työasemaohjelmassa, virheelliset hakuperusteet on poistettava. Jos tallennat haun, virheelliset hakuperusteet poistetaan. Jos et halua muuttaa hakua, sulje haku.",
		search_invalid_repository: "Ainakin yksi tietovarasto",
		search_invalid_class: "Ainakin yksi luokka",
		search_invalid_folder: "Ainakin yksi kansio",
		search_invalid_file_type: "Ainakin yksi tiedostolaji",
		search_invalid_property: "Ainakin yksi ominaisuus",
		search_invalid_text_search: "Tekstihakuperusteet",
		search_invalid_work: "Työkohteen suodatinehdot",

		search_operator_pulldown_missing: "Operaattori on pakollinen. Valitse operaattori avattavasta valikosta. Jos operaattoreita ei ole näkyvissä, pyydä järjestelmän pääkäyttäjää tarkistamaan hallintatyökalun <b>Haku</b>-välilehdestä, onko kaikki operaattorit määritetty piilotetuiksi. Jos haku on tietovarastojen välinen haku, avattava valikko ei ehkä sisällä operaattoreita, jos toisiaan vastaamaan määritettyjen ominaisuuksien välille ei ole määritetty yhteistä operaattoria.",

		/*SearchBuilder */
		open_search_builder: "Uusi haku",
		document_type: "Luokka",
		show_all_properties: "Näytä kaikki ominaisuudet",
		text_search_label: "Etsi objektit, jotka vastaavat seuraavia hakuehtoja:",
		text_search_place_holder: "Voit käyttää hakuehtojen ja seuraavien operaattorien yhdistelmiä: * ? tai \"tarkan vastineen ilmaus\"",
		text_search_place_holder_box: "Voit käyttää hakuehtojen ja seuraavien operaattorien yhdistelmiä:  AND, OR, NOT ja \"tarkan vastineen ilmaus\"",
		text_search_place_holder_cascade_proximity: "Voit käyttää hakuehtojen ja seuraavien operaattorien yhdistelmiä: * tai ?",
		text_search_place_holder_common: "Käytä hakuehtojen ja \"tarkan vastineen ilmausten\" yhdistelmää",
		text_search_hover_help_p8: "Käytä tähteä (*) tai kysymysmerkkiä (?) yleismerkkinä. Käytä kokolainausmerkkejä (\"\") tarkkojen vastineiden hauissa.",
		text_search_hover_help_p8_only_crs: "Käytä tähteä (*) tai kysymysmerkkiä (?) yleismerkkinä. Käytä kokolainausmerkkejä (\"\") tarkkojen vastineiden hauissa. Kun määrität useita hakuehtoja, tietovarastojen välinen haku palauttaa objektit, jotka sisältävät minkä tahansa hakuehdoista.",
		text_search_hover_help_cm: "Käytä tähteä (*) tai kysymysmerkkiä (?) yleismerkkinä. Käytä kokolainausmerkkejä (\"\") tarkkojen vastineiden hauissa. Käytä miinusmerkkiä (-) pois jätettävien hakuehtojen edellä ja plusmerkkiä (+) sisällytettävien hakuehtojen edellä.",
		text_search_hover_help_box: "Jos haluat löytää vastineen kaikille hakuehdoille, käytä AND- operaattoria hakuehtojen välissä. Jos haluat löytää vastineen mille tahansa hakuehdoille, käytä OR-operaattoria. Käytä kokolainausmerkkejä (\"\") tarkkojen vastineiden hauissa. Jos haluat jättää pois hakuehdon, kirjoita sen eteen NOT-operaattori.",
		text_search_hover_help_common: "Käytä kokolainausmerkkejä (\"\") tarkkojen vastineiden hauissa. Kun määrität useita hakuehtoja, tietovarastojen välinen haku palauttaa objektit, jotka sisältävät kaikki hakuehdoista.",
		text_search_options: "Tekstiasetukset:",
		text_search_options_hover_help: "Jos käytät muita operaattoreita kuin yleismerkkejä, valitse Lisäoperaattorit-vaihtoehto.",
		text_search_option_any: "Minkä tahansa hakuehdoista",
		text_search_option_all: "Kaikki hakuehdot",
		text_search_option_proximity: "Seuraavien sanojen läheisyydessä:",
		text_search_option_none: "Lisäoperaattorit",
		text_search_option_authoring: "Tekstihaku on:",
		text_search_option_authoring_hover_help: "Valitse vaihtoehto, joka määrittää, kuinka haluat antaa tekstihakuperusteet käyttäjien käyttöön. Piilota tämä vaihtoehto, jos et halua sisällyttää hakuun tekstihakuperusteita. Muuten voit sallia tekstihakuperusteiden muokkauksen tai pyytämisen tai määrittää tekstihakuperusteet vain luku -tilaan.",
		text_search_option_hide: "Piilota perusteet",
		text_search_option_hide_hover_help: "Valitse tämä vaihtoehto, jos et halua sisällyttää hakuun tekstihakuperusteita tai jos haluat määrittää, että muut käyttäjät voivat määrittää tekstihakuperusteita.",
		text_search_option_in: "HTML-/XML-tunnisteessa ${0}",
		text_search_option_paragraph: "Samassa kappaleessa",
		text_search_option_sentence: "Samassa lauseessa",
		text_search_option_vql: "VQL-kysely",
		text_search_option_none_hover_help: "Käytä merkkiä - pois jätettävien hakuehtojen edellä.",
		text_search_option_cascade_proximity_hover_help: "Rajaa hakutulokset hakuehtoihin, jotka esiintyvät sellaisen sana-alueen sisällä, joka ei sisällä tarkkoja ilmauksia.",

		box_search_metadata: "Metatiedot:",
		box_search_select_template: "Valitse mallipohja",
		box_search_no_templates: "Mallipohjia ei ole käytettävissä",
		box_text_search_options_search_within: "Hakualue:",
		box_text_search_options_search_within_everything: "Kaikki",
		box_text_search_options_search_within_file_content: "Dokumentin sisältö",
		box_text_search_options_search_within_tags: "Tunnisteet",
		box_text_search_options_limit_to: "Hae vain seuraavista:",

		add_property: "Lisää ominaisuus",
		edit_template: "Muokkaa hakua",
		save_search: "Tallenna haku",
		search_template_name: "Nimi:",
		search_template_desc: "Kuvaus:",
		auto_run: "Aja haku avattaessa",
		show_in_tree: "Näytä haku kansiorakenteessa",
		show_in_tree_hover_help: "Jos haku tallennetaan kansioon, haku näkyy oletusarvon mukaan vain sisältöluettelossa. Jos valitset tämän vaihtoehdon, haku näkyy myös selausnäkymän kansiorakenteessa.  Haku näkyy kansiorakenteessa kuitenkin vain, jos haku tallennetaan kansioon.",
		share_search_with: "Määritä haku yhteiskäyttöön seuraavien kanssa:",
		remove_member: "Poista ${0}",
		ok_button_label: "OK",
		save_template: "Tallenna",
		save_template_title: "Jos tiettyjä objekteja on haettava usein, tallenna hakuperusteet.",
		remove_criterion: "Poista",
		apply_button_label: "Käytä",
		empty_search_results_pane: "Voit tarkastella tuloksia ajamalla haun.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Koko tietovarasto",

		repository_already_selected: "Tietovarastoa ${0} ei voi lisätä tietovarastojen väliseen hakuun, koska tietovarasto sisältyy jo hakuun. <br/> Tietovaraston voi sisällyttää tietovarastojen väliseen hakuun vain kerran. <br/>Valitse toinen tietovarastojen väliseen hakuun sisällytettävä tietovarasto.",

		repository_limit_reached: "Tietovarastoa ${0} ei voi lisätä tietovarastojen väliseen hakuun. Hakuun voi lisätä enintään ${1} tietovarastoa.",

		nomore_criteria_toappend: "Kaikki vastaavuusmääritetyt ominaisuudet sisältyvät jo hakuperusteisiin. Hakuperusteisiin ei lisätty ominaisuuksia.",
		nomore_criteria_toappend_regular: "Kaikki ominaisuudet sisältyvät jo hakuperusteisiin. Hakuperusteisiin ei lisätty ominaisuuksia.",

		/* OD Save Search dialog */
		reload_label: "Lataa uudelleen",
		od_save_search_help_text: "Kirjoita haulle nimi tai valitse korvattava aiempi haku.",
		public_access_label: "Muut voivat käyttää tätä hakua",
		od_delete_search_help_text: "Valitse ainakin yksi poistettava haku",
		delete_save_searches: "Poista tallennetut haut",

		/* Unified Search */
		unified_search_enable_text_search: "Sisällytä tekstihakuperusteet",
		unified_search_text_search_enabled: "Tekstihaku käytössä",
		unified_search_mapping: "Vastaavuusmääritys",
		unified_search_new_mapping: "Uusi vastaavuusmääritys",
		unified_search_mapping_name: "Vastaavuusmäärityksen nimi",
		unified_search_mapping_dialog_instructions: "Valitse ominaisuudet, joiden vastaavuuden haluat määrittää. Joidenkin ominaisuuksien vastaavuus voidaan määrittää ominaisuuksiin, joilla on eri tietolaji. Voit esimerkiksi määrittää merkkijono-ominaisuuden vastaavuuden kokonaislukuominaisuuteen. Kun määrität ominaisuuden vastaavuuden toiseen ominaisuuteen, ominaisuuksia käsitellään yhtenä ominaisuutena tietovarastojen välisessä haussa.",
		unified_search_filter_available_properties: "Suodata käytettävissä olevat ominaisuudet",
		unified_search_available_properties: "Käytettävissä olevat ominaisuudet",
		unified_search_mapped_properties: "Vastaavuusmääritetyt ominaisuudet",
		unified_search_single_values: "yksittäiset arvot",
		unified_search_multiple_values: "useita arvoja",
		unified_search_add_mapping: "Lisää vastaavuusmääritys",
		unified_search_warn_remove_repository: "Valittua tietovarastoa käytetään hakuperusteissa.\nJos poistat tietovaraston, kaikki tietovaraston sisältävät vastaavuusmääritykset ja hakuperusteet poistetaan.\n\nHaluatko poistaa tietovaraston?",
		unified_search_warn_update_repository_mappings: "Jos tämän tietovaraston ominaisuusvalikoimaa muutetaan, se vaikuttaa myös hakuperusteisiin.\n\nHakuperusteet sisältävät yhden tai useampia sellaisia vastaavuusmäärityksiä, joihin sisältyy vähintään yksi poistettava ominaisuus. Kaikki poistettavia ominaisuuksia sisältävät vastaavuusmääritykset on poistettava. Kaikki tällaisia vastaavuusmäärityksiä sisältävät hakuperusteet on poistettava, jotta haun toteutus onnistuu.\n\nHaluatko päivittää tietovaraston asetukset ja poistaa vastaavuusmääritykset ja hakuperusteet?",
		unified_search_warn_update_repository_mappings_reset: "Tämän tietovaraston tekstihakuperusteiden lisäys vaikuttaa tietovarastojen välisiin hakuperusteisiin.\n\nKaikki ominaisuuden hakuperusteet, jotka sisältävät vastaavuusmäärityksen tämän tietovaraston ominaisuuksiin, on poistettava, jotta haku voidaan ajaa.\n\nHaluatko päivittää tietovaraston asetukset ja poistaa hakuperusteet?",
		unified_search_warn_update_repository_text_criteria: "Tämän tietovaraston tekstihakuperusteiden poisto vaikuttaa tietovarastojen välisiin hakuperusteisiin.\n\nTekstihakuperusteet on poistettava tietovarastojen välisistä hakuperusteista, jotta haun toteutus onnistuu.\n\nHaluatko päivittää tietovaraston asetukset ja poistaa tekstihakuperusteet?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Tämän tietovaraston tekstihakuperusteiden poisto ja ominaisuusvalikoiman muuttaminen vaikuttavat tietovarastojen välisiin hakuperusteisiin.\n\nTekstihakuperusteet on poistettava tietovarastojen välisistä hakuperusteista, jotta haun toteutus onnistuu. Lisäksi ominaisuushakuperusteet sisältävät yhden tai useampia sellaisia vastaavuusmäärityksiä, joihin sisältyy vähintään yksi poistettava ominaisuus. Kaikki poistettavia ominaisuuksia sisältävät vastaavuusmääritykset on poistettava. Kaikki tällaisia vastaavuusmäärityksiä sisältävät ominaisuushakuperusteet on poistettava, jotta haun toteutus onnistuu.\n\nHaluatko päivittää tietovaraston asetukset ja poistaa tekstihakuperusteet, vastaavuusmääritykset ja ominaisuushakuperusteet?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Tämän tietovaraston tekstihakuperusteiden poisto vaikuttaa tietovarastojen välisiin hakuperusteisiin.\n\nKaikki ominaisuuden hakuperusteet, jotka sisältävät vastaavuusmäärityksen tämän tietovaraston ominaisuuksiin, on poistettava, jotta haku voidaan ajaa. Tekstihakuperusteet voidaan poistaa tietovarastojen välisistä hakuperusteista, jotta haun toteutus onnistuu.\n\nHaluatko päivittää tietovaraston asetukset ja poistaa hakuperusteet?",
		unified_search_warn_remove_mapping: "Tämän vastaavuusmäärityksen poisto vaikuttaa hakuperusteisiin.\n\nVastaavuusmääritystä käyttävät hakuperusteet on poistettava, jotta haun toteutus onnistuu.\n\nHaluatko päivittää vastaavuusmäärityksen ja poistaa hakuperusteet?",
		unified_search_warn_update_mapping: "Tämän vastaavuusmäärityksen muutokset vaikuttavat hakuperusteisiin.\n\nVastaavuusmääritystä käyttävät hakuperusteet on tyhjennettävä, jotta hakuun  ei sisälly virheellisiä operaattoreita tai arvoja.\n\nHaluatko päivittää vastaavuusmäärityksen ja tyhjentää hakuperusteet?",
		unified_search_warn_update_mapping_not_searchable: "Tämän vastaavuusmäärityksen muutokset vaikuttavat hakuperusteisiin.\n\nJos kaikki vastaavuusmääritetyt ominaisuudet ovat vain näyttö -ominaisuuksia, vastaavuusmääritystä ei voi käyttää hakuperusteissa. Vastaavuusmääritystä käyttävät hakuperusteet on poistettava, jotta haun toteutus onnistuu.\n\nHaluatko päivittää vastaavuusmäärityksen ja poistaa hakuperusteet?",
		unified_search_warn_update_mapping_box_searchable: "Tämän vastaavuusmäärityksen muutokset vaikuttavat hakuperusteisiin.\n\nTämä vastaavuusmääritys sisältyy hakuperusteisiin jo useammin kuin kerran. Jos lisäät ominaisuuden ${0} tietovarastosta ${1}, ominaisuus ${0} sisältyy hakuperusteisiin liian monta kertaa. Vastaavuusmääritystä käyttävät hakuperusteet on poistettava, jotta haun toteutus onnistuu.\n\nHaluatko päivittää vastaavuusmäärityksen ja poistaa hakuperusteet?",
		unified_search_details: "Tietovarastojen välisen haun tiedot",
		unified_search_fixed_value_property: "Kiinteän arvon ominaisuus",
		unified_search_required_property: "Pakollinen ominaisuus",
		unified_search_display_only_property: "Vain näyttö -ominaisuus",
		unified_search_missing_required_properities: "Hakua ei voi tallentaa tai ajaa.<br/>Seuraavat ominaisuudet ovat pakollisia ominaisuuksia:${0}Ominaisuudet on sisällytettävä vastaavuusmääritykseen ja arvoja sisältävät ominaisuudet on lisättävä hakuperusteisiin.",
		unified_search_property_repostory: "${0} (Tietovarasto: ${1})",
		unified_search_builder_no_mappings: "Hakua ei voi ajaa.<br/>Ominaisuuden vastaavuusmääritys on luotava, ja se on sisällytettävä <b>Tulosten näyttö</b> -määritykseen, jotta haku voi näyttää tulokset.",
		unified_search_builder_insufficient_criteria_to_run: "Hakua ei voi ajaa.<br/>Hakuperusteissa ei ole tekstihakuperusteita tai ominaisuuksien arvoja seuraavia tietovarastoja varten: ${0} Jokaista hakuun sisältyvää tietovarastoa kohden on annettava tekstihakuperuste tai vaihtoehtoisesti on luotava ominaisuuden vastaavuusmääritys, sisällytettävä se ominaisuusehtoihin ja määritettävä sille ominaisuuden arvo.",
		unified_search_builder_insufficient_criteria_to_save: "Hakua ei voi tallentaa.<br/>Hakuun ei sisälly hakuperusteita seuraavia tietovarastoja varten: ${0} Jokaista hakuun sisältyvää tietovarastoa kohden on tehtävä jokin seuraavista toimista:<ol><li>Ominaisuuden vastaavuusmäärityksen luonti ja sen sisällytys ominaisuusehtoihin.</li><li>Tietovaraston muokkaus niin, että se sisältää tekstihakuperusteita, ja ominaisuuden vastaavuusmäärityksen luonti ja sisällytys <b>Tulosten näyttö</b> -määritykseen.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Hakua ei voi ajaa.<br/>Jokaista hakuun sisältyvää tietovarastoa kohden on määritettävä vähintään yksi ominaisuuden arvo. Voit määrittää arvot esimerkiksi seuraaville ominaisuuksille: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Hakua ei voi ajaa.<br/>Tekstihakuperusteet ovat pakolliset.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Hakua ei voi ajaa.<br/>Jokaista hakuun sisältyvää tietovarastoa kohden on määritettävä vähintään yksi ominaisuuden arvo tai annettava tekstihakuperusteet. Voit määrittää arvot esimerkiksi seuraaville ominaisuuksille: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Hakua ei voi ajaa.<br/>Tekstihakuperusteet ovat pakolliset. Jokaista hakuun sisältyvää tietovarastoa kohden on määritettävä vähintään yksi ominaisuuden arvo tai annettava tekstihakuperusteet. Voit määrittää arvot esimerkiksi seuraaville ominaisuuksille: ${0}",
		unified_search_invalid_criteria: "Haku sisältää virheellisiä perusteita, jotka estävät haun ajon.<br/>Virheelliset perusteet on poistettu. Sinun on kuitenkin tallennettava muutokset hakuun, ennen kuin voit ajaa sen. Jos et halua tallentaa muutoksia, sulje haku.<br/><br/>Seuraavat objektit on poistettu tai niitä on muokattu:${0}",
		unified_search_invalid_fixed_values: "Hakua ei voi tallentaa tai ajaa.<br/>Seuraavilla hakuehdoilla on kiinteät arvot, jotka eivät kelpaa: ${0}. Ratkaise ongelma tekemällä jokin seuraavista toimista:<ul><li>Poista hakuehdot, jotka sisältävä virheellisiä arvoja.</li><li>Poista ominaisuus muokkaamalla vastaavuusmäärityksiä, jotka sisältävät IBM Content Manager OnDemand -ominaisuuden, jolla on kiinteä arvo.</li><li>Tee kaikista ominaisuuksista yhdenmukaisia muokkaamalla vastaavuusmäärityksiä, jotka sisältävät IBM Content Manager OnDemand -ominaisuuden, jolla on kiinteä arvo.  Lisätietoja siitä, minkä ominaisuuksien vastaavuuksia voidaan määrittää, on ominaisuuden vastaavuusmääritysikkunan yläosan johdantotekstin Lisätietoja-linkissä.</li></ul>",
		unified_search_cannot_add_properties: "Tähän hakuun ei voi lisätä ominaisuuksia.<br/>Kaikki käytettävissä olevat vastaavuusmääritetyt ominaisuudet sisältyvät jo hakuperusteisiin. Kunkin ominaisuuden voi lisätä hakuun vain kerran.",
		unified_search_mapping_not_viewable: "Box-mallipohjan ominaisuuksia ei voi näyttää hakutuloksissa. Jos haluat lisätä tämän vastaavuusmäärityksen sarakkeena, sinun on lisättävä ainakin yksi ominaisuus, joka ei ole Box-mallipohjan ominaisuus. Voit valita ominaisuuden esimerkiksi toisesta tietovarastosta.",

		unified_search_returned_more: "Vähintään yksi tietovarasto on palauttanut enemmän tuloksia kuin sallittu enimmäismäärä.",
		unified_search_partial_failure: "Ainakin yhdessä tietovarastossa on ilmennyt virhe.",
		unified_search_partial_failure_and_returned_more: "Ainakin yhdessä tietovarastossa on ilmennyt virhe, ja vähintään yksi tietovarasto on palauttanut enemmän tuloksia kuin sallittu enimmäismäärä.",
		unified_search_see_analysis: "Tarkastele tulosten analyysia.",
		unified_search_analysis_intro_returned_more: "Yritä vähentää tulosten määrää tarkentamalla hakuperusteita niissä tietovarastoissa, jotka palauttivat tuloksia yli sallitun enimmäismäärän. Vaihtoehtoisesti voit ajaa yhteen tietovarastoon kohdistuvan haun, koska siinä tuloksia sallitaan enemmän kuin tietovarastojen välisessä haussa.",
		unified_search_analysis_intro_partial_failure: "Tarkastele tietovarastojen palauttamia virhetietoja. Ratkaise virheet tarvittaessa ja aja tietovarastojen välinen haku uudelleen.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Yritä ratkaista ongelma ja ajaa haku uudelleen kussakin tietovarastossa, jossa ilmeni virhe.<br/><br/>Yritä vähentää tulosten määrää tarkentamalla hakuperusteita niissä tietovarastoissa, jotka palauttivat tuloksia yli sallitun enimmäismäärän. Vaihtoehtoisesti voit ajaa yhteen tietovarastoon kohdistuvan haun, koska siinä tuloksia sallitaan enemmän kuin tietovarastojen välisessä haussa.",
		unified_search_results_found: "Löydetyt tulokset",
		unified_search_maximum_allowed: "Sallittu enimmäismäärä",
		unified_search_maximum_exceeded: "Yläraja on ylittynyt",

		unified_search_mapping_rule_box: "Tätä ominaisuutta ei voi lisätä vastaavuusmääritykseen.<p>Tietovaraston ${1} ominaisuus ${0} sisältyy jo toiseen vastaavuusmääritykseen. Tämän tietovaraston haun kohteeksi kelpaavia ominaisuuksia voi sisällyttää vain yhteen vastaavuusmääritykseen hakua kohden.<br/>Valitse vastaavuusmääritykseen lisättäväksi jokin toinen ominaisuus.</p>",
		unified_search_mapping_rule_repository: "Ominaisuutta ei voi lisätä vastaavuusmääritykseen.<br/>Vastaavuusmääritys sisältää jo tietovaraston ${0} ominaisuuden. Vastaavuusmääritys voi sisältää vain yhden ominaisuuden tietovarastosta.<br/>Valitse toinen tietovarasto, josta ominaisuus lisätään, tai luo uusi vastaavuusmääritys valittua ominaisuutta varten.",
		unified_search_mapping_rule_data_type: "Ominaisuutta ei voi lisätä vastaavuusmääritykseen.<br/>Ominaisuuden ${0} vastaavuutta ei voi määrittää ominaisuuteen ${1}. Valitse toinen ominaisuus, jonka vastaavuuden haluat määrittää, tai luo uusi vastaavuusmääritys valitulle ominaisuudelle.<br/> Lisätietoja siitä, minkä ominaisuuksien vastaavuuksia voidaan määrittää, on tämän ikkunan yläosan johdantotekstin Lisätietoja-linkissä.",
		unified_search_mapping_rule_cardinality: "Ominaisuutta ei voi lisätä vastaavuusmääritykseen.<br/>Vastaavuusmäärityksen kaikkien ominaisuuksien on tuettava joko yksittäisiä arvoja tai useita arvoja. Valittu ominaisuus tukee arvoa ${0}, ja vastaavuusmäärityksen ominaisuudet tukevat arvoa ${1}.<br/>Valitse toinen vastaavuusmääritykseen lisättävä ominaisuus tai luo uusi vastaavuusmääritys valittua ominaisuutta varten.",
		unified_search_mapping_rule_fixed_value: "Ominaisuutta ei voi lisätä vastaavuusmääritykseen.<br/>Vastaavuusmääritys sisältää jo ominaisuuden, jossa on kiinteä arvo. Vastaavuusmääritys voi sisältää vain yhden ominaisuuden, jossa on kiinteä arvo.<br/>Valitse toinen vastaavuusmääritykseen lisättävä ominaisuus tai luo uusi vastaavuusmääritys valittua ominaisuutta varten.",
		unified_search_mapping_rule_child_component: "Ominaisuutta ei voi lisätä vastaavuusmääritykseen.<br/>Alikomponentin sisältävän ominaisuuden vastaavuutta ei voi määrittää muihin ominaisuuksiin. Jos haluat hakea tätä ominaisuutta, luo uusi vastaavuusmääritys valitulle ominaisuudelle.",
		unified_search_mapping_rule_operator_intersection: "Ominaisuutta ei voi lisätä vastaavuusmääritykseen.<br/>Kaikilla vastaavuusmäärityksen ominaisuuksilla on oltava vähintään yksi yhteinen operaattori. Ominaisuudella ${0} ei kuitenkaan ole yhteisiä operaattoreita vastaavuusmäärityksen muiden ominaisuuksien kanssa.<br/>Valitse tarvittaessa toinen ominaisuus. Jos valittu ominaisuus on sisällytettävä, pyydä järjestelmän pääkäyttäjää muokkaamaan ominaisuuteen liittyviä operaattoreita.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Lisäasetukset",
		advanced_search_options_intro: "Määritä hakuperusteen lisäasetukset.",
		advanced_search_options_editable: "Muokattavissa",
		advanced_search_options_readonly: "Vain luku",
		advanced_search_options_required: "Pakollinen",
		advanced_search_options_hidden: "Piilotettu",
		advanced_search_options_property_editable:"Ominaisuus on:",
		advanced_search_options_operators:"Operaattorit:",
		advanced_search_options_use_all:"Käytä kaikkia",
		advanced_search_options_use_selected:"Käytä valittuja",
		advanced_search_options_operators_filtered: "Suodatetut operaattorit",
		// Data types in lowercase
		data_type_boolean: "totuusarvo",
		data_type_date: "päivämäärä",
		data_type_time: "kellonaika",
		data_type_timestamp: "aikaleima",
		data_type_decimal: "desimaaliluku",
		data_type_double: "liukuluku",
		data_type_short: "kokonaisluku",
		data_type_integer: "kokonaisluku",
		data_type_long: "kokonaisluku",
		data_type_string: "tekstimerkkijono",
		data_type_string_alpha: "aakkosmerkkijono",
		data_type_string_alphanum: "aakkosnumeerinen merkkijono",
		data_type_string_ext: "laajennettu aakkosnumeerinen merkkijono",
		data_type_string_num: "numeromerkkijono",
		data_type_binary: "binaarinen",
		data_type_object: "objekti",
		data_type_guid: "GUID-tunnus",
		data_type_user: "käyttäjät",
		data_type_child_component: "alikomponentti",

		/* Print Dialog */
		print_title: "Tulosta",
		print_message: "Tulostaa: ${0}",
		print_print_button: "Tulosta",
		print_clean_margins_button: "Määritä kaikkien arvoksi 0",
		print_type: "Tulostimen laji:",
		print_printer_server_options: "Palvelimen tulostusvalinnat",
		print_printer_properties: "Tulostimen ominaisuudet",
		print_printer_fax_properties: "Faksin ominaisuudet",
		print_printer_name: "Tulostimen nimi:",
		print_fax_recipient: "Vastaanottaja",
		print_fax_sender: "Lähettäjä",
		print_copies: "Kopiot",
		print_local_orientation: "Suunta",
		print_local_orientation_landscape: "Vaaka",
		print_local_orientation_portrait: "Pysty",
		print_local_margins: "Reunukset",
		print_local_margins_top: "Ylä",
		print_local_margins_bottom: "Ala",
		print_local_margins_left: "Vasen",
		print_local_margins_right: "Oikea",
		print_printer_server: "Palvelin",
		print_printer_local: "Paikallinen",
		print_property_class: "Luokka:",
		print_property_routing: "Reititys:",
		print_property_pagedef: "Sivumäär.:",
		print_property_node: "Solmu:",
		print_property_writer: "Kirjoitusohjelma:",
		print_property_formdef: "Lomakemäär.:",
		print_property_printerid: "Kohde:",
		print_property_forms: "Lomakkeet:",
		print_property_faxnotes: "Huomautukset:",
		print_property_faxcompany: "Yritys:",
		print_property_faxnumber: "Faksinumero:",
		print_property_faxname: "Nimi:",
		print_property_faxsendertelnumber: "Puhelinnumero:",
		print_property_faxcoverpage: "Kansilehti:",
		print_property_faxsubject: "Aihe:",
		print_saveoptions: "Tallenna tulostusvalinnat",
		print_property_bannerpage: "Käytä mainospalkkisivua",
		print_print_with_info_fields: "Tulostus yhdessä tietokenttien kanssa",
		print_field_from: "Lähettäjä",
		print_field_to: "Vastaanottaja",
		print_invalid_value_class: "Kelvolliset merkit ovat A–Z tai 0–9",
		print_invalid_value_pagedef: "Kelvollisia merkkejä ovat aakkosmerkit tai numeeriset merkit tai merkit @, # tai $",
		print_invalid_value_writer: "Kelvollisia merkkejä ovat aakkosmerkit tai numeeriset merkit tai merkit @, # tai $",
		print_invalid_value_formdef: "Kelvollisia merkkejä ovat aakkosmerkit tai numeeriset merkit tai merkit @, # tai $",
		print_invalid_value_forms: "Kelvollisia merkkejä ovat aakkosmerkit tai numeeriset merkit tai merkit @, # tai $",
		print_invalid_value_margin: "Kelvolliset numerot ovat ${0}–${1}",
		print_status_message: "${0} dokumenttia on lähetetty tulostimeen ${1}.",

		print_applet_init_error: "Tulostussovelman aloitus ei onnistu.",
		print_applet_init_error_explanation: "Ongelman syynä voi olla jokin seuraavista: <br/><br/><ul><li>Työasemassa ei ole asennettuna Runtime Environment (JRE) -ympäristöä.</li><li>Java-lisäosaa ei ole otettu käyttöön Web-selaimessa.</li><li>Työasemasi JRE-versio ei ole yhteensopiva IBM Content Navigator -version kanssa.</li><li>Selainistunto on päättynyt aikakatkaisuun odottaessaan tulostussovelman aloitusta.</li></ul>",
		print_applet_init_error_userResponse: "Voit ratkaista JRE-ongelman seuraavasti:<br/><br/><ol><li>Varmista, että Java-lisäosa (JRE) on asennettu työasemaan.</li><li>Varmista, että Java-lisäosa on otettu käyttöön Web-selaimessa.</li><li>Varmista, että työasemassa oleva JRE-versio on yhteensopiva IBM Content Navigator -ohjelman kanssa. Yritä sitten uudelleen. Luettelo tuetuista versioista on IBM:n ohjelmistotukisivuston julkaisussa <i>Hardware and software prerequisites for IBM Content Navigator</i>.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Kansilehti",
		daeja_print_selected_documents_title: "Valitut dokumentit",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Vastaa kaikkia hakuperusteita",
		match_any_criteria: "Vastaa mitä tahansa hakuperustetta",
		include_subfolders_summary: "${0} (sisällytä alikansiot)",
		browse_button: "Selaa&hellip;",
		search_for: "Haettava merkkijono:",
		object_type_documents: "Dokumentit",
		object_type_folders: "Kansiot",
		object_type_documents_folders: "Dokumentit ja kansiot",
		object_type_web_links: "Web-linkit",
		object_type_documents_folders_web_links: "Dokumentit, kansiot ja Web-linkit",

		/* SelectSearchFolderDialog */
		search_in: "Hae kohteesta",
		include_subfolders: "Sisällytä alikansiot",

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
		warning_char: "V",

		// used for state icon title in Contentlist
		locked_item_icon_title: "Lukitsija: ${0}",
		checked_out_icon_title: "Uloskuittaaja: ${0}",
		major_minor_version_icon_title: "Pääversio ja aliversiot",
		suspended_icon_title: "Käsittelyreitti on keskeytetty",
		on_hold_icon_title: "Pidossa",
		has_notes_icon_title: "Sisältää huomautuksia",
		record_icon_title: "Vahvistettu asiakirjaksi",
		compound_document_icon_title: "Yhdistelmädokumentti",
		validateTemplate_icon_title: "Ryhmätyötilamallipohja edellyttää tarkistusta",
		offlineTemplate_icon_title: "Ryhmätyötilamallipohja on offline-tilassa",
		offlineTeamspace_icon_title: "Ryhmätyötila on offline-tilassa",
		pending_delete_icon_title: "Ryhmätyötila odottaa poistoa",
		delete_error_icon_title: "Ryhmätyötilan poisto ei onnistunut.",
		defaultTemplate_icon_title: "Oletusryhmätyötilamallipohja",
		teamspace_icon_title: "Ryhmätyötila",
		teamspace_template_icon_title: "Ryhmätyötilamallipohja",
		has_bookmark_icon_title: "Sisältää kirjanmerkin",
		read_only_icon_title: "Vain luku",
		no_results_were_found: "Tuloksia ei löytynyt.",
		folder_is_empty: "Kansio on tyhjä.",
		no_checked_out_items: "Uloskuitattuja objekteja ei ole.",
		inbasket_is_empty: "Saapuneiden lokero on tyhjä.",
		worklist_is_empty: "Työluettelo on tyhjä.",
		tracker_milestone_completed: "Valmis",
		stepprocessor_attachments_title: "Sisältö",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Lukitse objektit",
		unlock_items: "Poista objektien lukitus",
		checkin_item: "Kuittaa objekti sisään",

		/* Help */
		learn_more: "Lisätietoja",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Avaa ryhmätyötila",
		repository_tab_createWorkspace: "Uusi ryhmätyötila",
		repository_tab_createWorkspaceTemplate: "Uusi ryhmätyötilamallipohja",
		repository_tab_DefaultTemplate: "Oletus",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Tämä tehtävä kopioi dokumentteja.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Sinulla ei ole valitsemasi ryhmätyötilamallipohjan muokkausoikeuksia.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Haluatko varmasti poistaa ryhmätyötilan ${0}? <br><br>Vain tietovaraston muihin kansioihin arkistoidut dokumentit jäävät tietovarastoon. Vain ryhmätyötilaan arkistoidut dokumentit poistetaan.",
		teamspaceDecommissionLabel: "Poista:",
		teamspaceDecommissionDescription: "Ryhmätyötilan poisto poistaa ryhmätyötilan palvelimesta: ilmoita, miten ryhmätyötilan artefakteja käsitellään.",
		teamspaceDecommissionOptions: "Ryhmätyötilan poistoasetukset",
		teamspaceDecommissionDeleteAll: "Poista kaikki ryhmätyötilan artefaktit",
		teamspaceDecommissionReFileAll: "Arkistoi uudelleen kaikki ryhmätyötilan artefaktit",
		teamspaceDecommissionReFileDestination: "Siirrä kohteeseen:",
		teamspaceDecommissionReFileIn: "Arkistoi uudelleen kohteeseen",
		teamspaceDecommissionTaskName: "Ryhmätyötilan poistotehtävä",
		teamspaceDecommissionTaskDescription: "Tämä tehtävä poistaa ryhmätyötilan tietovarastosta.",
		teamspaceDecommissionDeletionStarted: "Ryhmätyötila on ajoitettu poistoa varten",
		teamspaceDecommissionDeletionConnectionFailed: "Ryhmätyötilan poistotehtävän ajo ei onnistunut, koska yhteyden muodostus tietovarastoon ei onnistunut. Varmista, että tietovaraston pääkäyttäjän valtuustiedot ovat oikeat.",

		teamspace_edit_properties_notsupported: "Ryhmätyötilojen ominaisuuksia voi muokata vain Ryhmätyötilat-näkymästä.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Ryhmätyötila on offline-tilassa, ja vain ryhmätyötilan omistajat voivat avata sen",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokumentti:",
		workspace_validation_folder: "Kansio:",
		workspace_validation_ets: "Seuraavat syöttömallipohjat eivät ole käytettävissä tässä tietovarastossa ja ne on poistettu valittujen syöttömallipohjien luettelosta:",
		workspace_validation_classes: "Seuraavat luokat eivät ole käytettävissä tässä tietovarastossa ja ne on poistettu valittujen luokkien luettelosta:",
		workspace_validation_searches: "Seuraavat haut eivät ole käytettävissä tässä tietovarastossa ja ne on poistettu valittujen hakujen luettelosta:",
		workspace_validation_docs_folders: "Seuraavat dokumentit ja kansiot eivät ole käytettävissä tässä tietovarastossa ja ne on poistettu sisällytettyjen objektien luettelosta:",
		workspace_change_template_confirmation_question: "Jos valitset toisen mallipohjan, menetät kaikki tekemäsi muutokset. Haluatko jatkaa?\n",
		workspace_delete_item_confirmation_question: "Haluatko poistaa objektin ${0}?\n",
		workspace_delete_role_confirmation_question: "Haluatko poistaa roolin ${0}?\n",
		workspace_delete_confirmation_question: "Jos poistat ryhmätyötilan, vain sen säilö poistetaan. Ryhmätyötilan kansiot ja dokumentit säilyvät tietovarastossa ja löydät ne toteuttamalla haun. Jos haluat poistaa ryhmätyötilan sisällön, poista ensin ryhmätyötilan objektit ja poista sen jälkeen ryhmätyötila.<br><br>Haluatko poistaa ryhmätyötilan ${0}?",
		workspacebuilder_instance_template_name_header: "Ryhmätyötilamallipohjan nimi",
		workspacebuilder_instance_template_description_header: "Kuvaus",

		workspacebuilder_template_tooltip_name: "Mallipohjan nimi ei saa sisältää seuraavia merkkejä: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Ryhmätyötilan nimi ei saa sisältää seuraavia merkkejä: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Anna kuvaus, jonka avulla käyttäjät voivat valita oikean vaihtoehdon mallipohjaluettelosta. Voit esimerkiksi lisätä tietoja siitä, keille käyttäjille tai mihin käyttötarkoitukseen mallipohja on tarkoitettu.",
		workspacebuilder_instance_tooltip_description: "Anna kuvaus, jonka avulla käyttäjät erottavat tämän ryhmätyötilan muista ryhmätyötiloista.",

		workspacebuilder_template_edit_properties_pane: "Muokkaa ryhmätyötilamallipohjaa",
		workspacebuilder_instance_properties_pane: "Määritä ryhmätyötila",
		workspacebuilder_template_properties_pane: "Määritä ryhmätyötilamallipohja",

		workspacebuilder_instance_security_pane: "Määritä ryhmätyötilan suojausasetukset",
		workspacebuilder_template_security_pane: "Määritä mallipohjan suojausasetukset",

		workspacebuilder_layout_pane: "Valitse asettelu",
		workspacebuilder_search_templates_pane: "Valitse haut",
		workspacebuilder_document_folders_pane: "Sisällytä kansiot ja dokumentit",
		workspacebuilder_doctypes_entryTemplates_pane: "Valitse luokat tai syöttömallipohjat",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Valitse luokat",
		workspacebuilder_security: "Ryhmätyötilan suojaus",

		workspacebuilder_roles_pane: "Valitse roolit",
		workspacebuilder_security: "Suojaus",

		workspacebuilder_properties_templates: "Käytettävissä olevat mallipohjat:",
		workspacebuilder_available_templates: "Käytettävissä olevat haut:",
		workspacebuilder_selected_templates: "Valitut haut:",
		workspacebuilder_templates_name: "Haun nimi",

		workspacebuilder_available_entryTemplates: "Käytettävissä olevat syöttömallipohjat:",
		workspacebuilder_selected_entryTemplates: "Valitut syöttömallipohjat:",

		workspacebuilder_item_classes: "Käytettävissä olevat luokat:",
		workspacebuilder_item_classes_selected: "Valitut luokat:",
		workspacebuilder_properties_select_template: "Valitse tässä ryhmätyötilassa käytettävä mallipohja.",
		workspacebuilder_template_properties: "Määritä ryhmätyötilamallipohja",
		workspacebuilder_instance_properties: "Määritä ryhmätyötila",
		workspacebuilder_template_introText: "Määritä jokaiseen sellaiseen ryhmätyötilaan sisällytettävät yleisosat, joka luodaan tämän mallipohjan perusteella käyttämällä siirtymisvalintoja. Kun olet valmis, napsauta <b>Valmis</b>-painiketta, jolloin järjestelmä määrittää mallipohjan muiden käyttäjien käytettäväksi. Tämän jälkeen muut käyttäjät voivat luoda uusia ryhmätyötiloja kyseisen mallipohjan perusteella.",
		workspacebuilder_instance_introText: "Ryhmätyötilojen avulla ryhmät voivat määrittää dokumentteja yhteiskäyttöön ja käsitellä niitä. Kirjoita tälle ryhmätyötilalle kuvaava nimi ja kuvaus, joiden avulla käyttäjät erottavat tämän ryhmätyötilan muista ryhmätyötiloista. Voit mukauttaa ryhmätyötilaa lisäämällä siihen hakuja, luokkia, syöttömallipohjia, dokumentteja ja kansioita.",

		workspacebuilder_template_search_template_introText: "Valitse oletushaut, jotka haluat sisällyttää jokaiseen tästä mallipohjasta luotavaan ryhmätyötilaan. Jos yhtään hakua ei valita, ryhmätyötilan käyttäjät näkevät kaikki haut, joihin heillä on käyttöoikeudet. Käyttäjät voivat määrittää hakuja yhteiskäyttöön ja lisätä niitä ryhmätyötilaan, jos heillä on tarvittavat käyttöoikeudet.",
		workspacebuilder_instance_search_template_introText: "Voit lisätä hakuja, joiden avulla ryhmätyötilan käyttäjät saavat tehtävänsä entistä tehokkaammin valmiiksi. Jos et lisää lainkaan hakuja, ryhmätyötilan käyttäjät näkevät kaikki haut, joihin heillä on käyttöoikeus. Käyttäjät voivat myös lisätä hakuja ja määrittää niitä yhteiskäyttöön ryhmätyötilassa, jos heillä on tarvittavat käyttöoikeudet.",

		workspacebuilder_template_roles_introText: "Ryhmätyötilan käyttäjät määritetään rooleihin. Roolit määrittävät tehtävät, joiden toteutukseen käyttäjillä on käyttöoikeudet. Napsauttamalla roolien viereisiä kuvakkeita voit tarkastella tehtäviä, joita kyseiseen rooliin kuuluva käyttäjä voi toteuttaa. Valitse ryhmätyötilaan sopivat roolit.",
		workspacebuilder_template_roles_modify_introText: "Voit muokata käyttöoikeuksia, jotka on liitetty kuhunkin tämän ryhmätyötilan rooliin. Ilmoita ryhmätyötilan jäsenille, kun heidän käyttöoikeutensa muuttuvat.",

		workspacebuilder_template_roles_header_name: "Roolin nimi",

		workspacebuilder_template_folders_introText: "Valitse oletusdokumentit ja -kansiot, jotka haluat sisällyttää jokaiseen tästä mallipohjasta luotavaan ryhmätyötilaan. Voit lisätä dokumentteja linkkeinä tai kopioina. Linkkien avulla voit lisätä dokumentteja, joista et halua luoda useita kopioita, kuten käytäntöjä tai menetelmiä kuvaavia dokumentteja. Lisää kopioina dokumentit, joita käyttäjät muokkaavat, kuten mallipohjat ja lomakkeet.",
		workspacebuilder_instance_folders_introText: "Valitse ryhmätyötilaan lisättävät oletusdokumentit ja -kansiot. Voit lisätä dokumentteja linkkeinä tai kopioina. Linkkien avulla voit lisätä dokumentteja, joista et halua luoda useita kopioita, kuten käytäntöjä tai menetelmiä kuvaavia dokumentteja. Lisää kopioina dokumentit, joita käyttäjät muokkaavat, kuten mallipohjat ja lomakkeet.",

		workspacebuilder_template_roles_introText: "Määritä roolit, jotka haluat sisällyttää jokaiseen tästä mallipohjasta luotavaan ryhmätyötilaan. Voit myös luoda uusia rooleja, joita voit käyttää, kun luot muita ryhmätyötilamallipohjia.",
		workspacebuilder_instance_users_introText: "Kullekin käyttäjälle määritetään ryhmätyötilassa ainakin yksi rooli, joka määrittää, mitä tehtäviä käyttäjä saa toteuttaa. Lisää käyttäjiä ryhmätyötilaan ja määritä heille roolit.",

		workspacebuilder_instance_navigation_pane_title: "Ryhmätyötilan luontitoiminto",
		workspacebuilder_template_navigation_pane_title: "Ryhmätyötilamallipohjan luontitoiminto",

		workspacebuilder_roles_roles_nopermissions: "Roolille {0} ei ole valittu käyttöoikeuksia.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Valitut roolit:",
		workspacebuilder_roles_available_roles: "Käytettävissä olevat roolit:",
		workspacebuilder_roles_privilege_header: "Käyttöoikeus",
		workspacebuilder_roles_select_role: "Valitse rooli",
		workspacebuilder_roles_select_permission: "Valitse käyttöoikeus",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Rooli {0} on jo järjestelmässä. Määritä roolille yksilöllinen nimi. ",
		workspacebuilder_roles_edit_dialog_role_name: "Roolin nimi:",
		workspacebuilder_roles_edit_dialog_role_description: "Roolin kuvaus:",
		workspacebuilder_roles_edit_dialog_title_new: "Uusi rooli",
		workspacebuilder_roles_edit_dialog_title_edit: "Roolin muokkaus",

		workspacebuilder_roles_privileges_header: "Roolin {0} käyttöoikeudet:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Dokumenttien käyttöoikeudet:",
		workspacebuilder_roles_priv_group_folder: "Kansioiden käyttöoikeudet:",
		workspacebuilder_roles_priv_group_teamspace: "Ryhmätyötilan käyttöoikeudet:",
		workspacebuilder_roles_priv_group_item: "Dokumenttien ja kansioiden käyttöoikeudet:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Käyttöoikeuksien hallinta",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat hallita ryhmätyötilan dokumenttien ja kansioiden käyttöoikeuksia. Käyttäjät voivat sallia muiden käyttäjien esimerkiksi poistaa dokumentteja ja kansioita, muokata niiden ominaisuuksia ja luoda alikansioita.",

		workspacebuilder_roles_priv_deleteItems: "Poista",
		workspacebuilder_roles_plbl_deleteItems: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat poistaa ryhmätyötilan dokumentteja ja kansioita.",

		workspacebuilder_roles_priv_createItems: "Luo",
		workspacebuilder_roles_plbl_createItems: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat luoda ryhmätyötilan dokumentteja ja kansioita.",

		workspacebuilder_roles_priv_viewItemProperties: "Näytä ominaisuudet",
		workspacebuilder_roles_plbl_viewItemProperties: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat tarkastella ryhmätyötilan dokumenttien ja kansioiden ominaisuuksia (myös järjestelmäominaisuuksia).",

		workspacebuilder_roles_priv_modifyItemProperties: "Muokkaa ominaisuuksia",
		workspacebuilder_roles_plbl_modifyItemProperties: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat muokata ryhmätyötilan dokumenttien ja kansioiden ominaisuuksia.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Kansion käyttöoikeuksien hallinta",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat hallita ryhmätyötilan kansioiden käyttöoikeuksia. Käyttäjät voivat sallia muiden käyttäjien esimerkiksi poistaa kansioita, muokata niiden ominaisuuksia ja luoda alikansioita.",

		workspacebuilder_roles_priv_deleteFolders: "Kansioiden poisto",
		workspacebuilder_roles_plbl_deleteFolders: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat poistaa ryhmätyötilan kansioita.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Kansion ominaisuuksien muokkaus",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat muokata ryhmätyötilan kansioiden ominaisuuksia.",

		workspacebuilder_roles_priv_createSubfolders: "Alikansioiden luonti",
		workspacebuilder_roles_plbl_createSubfolders: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat luoda kansioita ryhmätyötilaan.",

		workspacebuilder_roles_priv_fileInFolders: "Lisäys kansioihin",
		workspacebuilder_roles_plbl_fileInFolders: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat lisätä ryhmätyötilan kansioihin dokumentteihin osoittavia linkkejä.",

		workspacebuilder_roles_priv_viewFolderProperties: "Kansion ominaisuuksien tarkastelu",
		workspacebuilder_roles_plbl_viewFolderProperties: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat tarkastella ryhmätyötilan kansioiden ominaisuuksia (myös järjestelmäominaisuuksia).",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Dokumentin käyttöoikeuksien hallinta",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat hallita ryhmätyötilan dokumenttien käyttöoikeuksia. Käyttäjät voivat sallia muiden käyttäjien esimerkiksi poistaa dokumentteja ja muokata niiden ominaisuuksia.",

		workspacebuilder_roles_priv_deleteDocuments: "Dokumenttien poisto",
		workspacebuilder_roles_plbl_deleteDocuments: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat poistaa ryhmätyötilan dokumentteja.",

		workspacebuilder_roles_priv_promoteVersions: "Version korotus",
		workspacebuilder_roles_plbl_promoteVersions: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat määrittää uuden versionumeron ryhmätyötilan dokumenteille.",

		workspacebuilder_roles_priv_modifyContent: "Dokumenttien muokkaus",
		workspacebuilder_roles_plbl_modifyContent: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat muokata ryhmätyötilan dokumenttien sisältöä.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Dokumentin ominaisuuksien muokkaus",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat muokata ryhmätyötilan dokumenttien ominaisuuksia.",

		workspacebuilder_roles_priv_viewContent: "Dokumenttien tarkastelu",
		workspacebuilder_roles_plbl_viewContent: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat tarkastella ryhmätyötilan dokumentteja.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Dokumentin ominaisuuksien tarkastelu",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat tarkastella ryhmätyötilan dokumenttien ominaisuuksia (myös järjestelmäominaisuuksia).",

		workspacebuilder_roles_priv_addNewSearches: "Hakujen lisäys",
		workspacebuilder_roles_plbl_addNewSearches: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat lisätä hakuja ryhmätyötilaan. Haku ei ole oletusarvon mukaan muiden käyttäjien käytettävissä.",

		workspacebuilder_roles_priv_createNewSearches: "Hakujen luonti",
		workspacebuilder_roles_plbl_createNewSearches: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat luoda uusia hakuja, mutta he eivät voi tallentaa niitä. Jos käyttäjillä ei ole näitä käyttöoikeuksia, he eivät voi lisätä ryhmätyötilaan dokumentteja, jotka ovat jo tietovarastossa.",

		workspacebuilder_roles_priv_shareSearches: "Hakujen määritys yhteiskäyttöön",
		workspacebuilder_roles_plbl_shareSearches: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat määrittää luomiaan hakuja yhteiskäyttöön muiden ryhmätyötilan käyttäjien kanssa.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Luokkien tai syöttömallipohjien hallinta",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat lisätä luokkia ja syöttömallipohjia ryhmätyötilaan ja poistaa niitä ryhmätyötilasta.",

		workspacebuilder_roles_priv_addRemoveClasses: "Luokkien hallinta",
		workspacebuilder_roles_plbl_addRemoveClasses: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat lisätä luokkia ryhmätyötilaan ja poistaa niitä ryhmätyötilasta.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Ryhmätyötilan käyttäjien hallinta",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Käyttäjät, joilla on nämä käyttöoikeudet, voivat lisätä käyttäjiä ryhmätyötilaan ja poistaa niitä ryhmätyötilasta.  Lisäksi kyseiset käyttäjät voivat hallita käyttäjille määritettäviä rooleja.",

		workspacebuilder_roles_priv_modifyRoles: "Roolien muokkaus",
		workspacebuilder_roles_plbl_modifyRoles: "Omistajat, joilla on nämä käyttöoikeudet, voivat muokata ryhmätyötilan roolien käyttöoikeuksia. Nämä käyttöoikeudet ovat vain omistajien käytössä.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Valitse käyttäjät",
		workspacebuilder_users_add_users_and_groups_button: "Lisää käyttäjiä ja ryhmiä...",
		workspacebuilder_users_users_or_group_header: "Käyttäjä ja ryhmä",
		workspacebuilder_users_roles_header: "Roolit",

		workspacebuilder_users_role_header: "Rooli",
		workspacebuilder_users_role_no_permissions: "Tällä roolilla ei ole käyttöoikeuksia",
		workspacebuilder_users_available_roles_label: "Käytettävissä olevat roolit:",
		workspacebuilder_users_selected_users_and_groups_label: "Valitut käyttäjät ja ryhmät:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Ryhmätyötilaa ei voi tallentaa. Määritä ryhmätyötilalle ainakin yksi omistaja.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Ryhmätyötilaa ei voi tallentaa. Kaikille käyttäjille on määritettävä rooli.",
		// end of select users

		workspacebuilder_search_templates: "Valitse haut",
		workspacebuilder_search_add: "Lisää haku",
		workspacebuilder_properties_workspaceName: "Ryhmätyötilan nimi:",
		workspacebuilder_properties_templateName: "Mallipohjan nimi:",
		workspacebuilder_properties_workspaceDescription: "Ryhmätyötilan kuvaus:",
		workspacebuilder_properties_templateDescription: "Mallipohjan kuvaus:",
		workspacebuilder_properties_workspaceTemplate: "Valittu mallipohja:",
		workspacebuilder_properties_security: "Määritä mallipohja yhteiskäyttöön seuraavien kanssa:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Siirrä ryhmätyötilasta:",
		moveTeamspaceDocuments_security: "Määritä dokumentti yhteiskäyttöön seuraavien kanssa:",
		moveTeamspaceDocuments_security_change: "Määritä mukautettu suojaus valituille kohteille",
		moveTeamspaceDocuments_item_type_level: "Et voi valita valittujen kohteiden suojauksen ohitusta, koska valitun kohteen luokka on määritetty käyttämään vain luokkatason suojausta",
		moveTeamspaceDocuments_security_inherit: "Peri suojaus kohdekansiosta",
		moveTeamspaceDocuments_file_info_text: "Voit siirtää kohteita ryhmätyötilasta toiseen ryhmätyötilaan tai kansioon.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Sinulla ei ole riittäviä käyttöoikeuksia siirtää kohteita valittuun kansioon.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Sinulla ei ole riittäviä käyttöoikeuksia siirtää kohteita ryhmätyötilasta.",
		moveTeamspaceDocuments_move_mixed_items: "Et voi ohittaa valittujen kohteiden suojausta. Ryhmätyötila ei hallitse kaikkia objekteja. Voit ohittaa vain niiden objektien suojauksen, joita ryhmätyötila hallitsee.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Ryhmätyötilalle on määritettävä nimi.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Ryhmätyötilamallipohjalle on määritettävä nimi.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Ryhmätyötilan nimi ei saa sisältää seuraavia merkkejä: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Mallipohjan nimi ei saa sisältää seuraavia merkkejä: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Linkki dokumenttiin",
		workspacebuilder_folders_makeDocCopy: "Kopioi dokumentti",
		workspacebuilder_folders_newfolder: "Uusi kansio",
		workspacebuilder_folders_local_drive: "Paikallisesta hakemistosta",
		workspacebuilder_folders_from_repo: "Tietovarastosta",
		workspacebuilder_folders_add_doc: "Lisää dokumentti",
		workspacebuilder_folders_grid_name: "Nimi",
		workspacebuilder_folders_props: "Ominaisuudet",
		workspacebuilder_folders_remove: "Poista",
		workspacebuilder_folders_delete: "Poista",
		workspacebuilder_folders_adddoc_local: "Lisää dokumentti paikallisesta asemasta",
		workspacebuilder_folders_adddoc_repo: "Lisää dokumentti tietovarastosta",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Määritetty kansion nimi on jo järjestelmässä. Määritä toinen kansion nimi.",

		workspacebuilder_classes_title: "Valitse luokat tai syöttömallipohjat",
		workspacebuilder_classes_title_cm: "Valitse luokat",
		workspacebuilder_classes_template_introText: "Määritä, lisätäänkö dokumentteja tietovarastoon luokkien vai syöttömallipohjien avulla tämän mallipohjan perusteella luotavissa ryhmätyötiloissa. Jos luokkia ei valita, ryhmätyötilan käyttäjät näkevät kaikki luokat, joihin heillä on käyttöoikeudet. Käyttäjät voivat muokata ryhmätyötilan luokkien tai syöttömallipohjien luetteloa, jos heillä on tarvittavat käyttöoikeudet.",
		workspacebuilder_classes_template_introText_cm: "Valitse luokat, joiden avulla käyttäjät voivat lisätä dokumentteja tietovarastoon. Jos et valitse lainkaan luokkia, ryhmätyötilan käyttäjät näkevät kaikki luokat, joihin heillä on käyttöoikeudet. Käyttäjät voivat muokata ryhmätyötilan luokkaluetteloja, jos heillä on tarvittavat käyttöoikeudet.",
		workspacebuilder_classes_instance_introText: "Valitse luokat tai syöttömallipohjat, joiden avulla käyttäjät voivat lisätä dokumentteja tietovarastoon. Jos et valitse lainkaan luokkia, ryhmätyötilan käyttäjät näkevät kaikki luokat, joihin heillä on käyttöoikeudet. Käyttäjät voivat muokata ryhmätyötilan luokka- tai syöttömallipohjaluetteloja, jos heillä on tarvittavat käyttöoikeudet.",
		workspacebuilder_classes_instance_introText_cm: "Valitse luokat, joiden avulla käyttäjät voivat lisätä dokumentteja tietovarastoon. Jos et valitse lainkaan luokkia, ryhmätyötilan käyttäjät näkevät kaikki luokat, joihin heillä on käyttöoikeudet. Käyttäjät voivat muokata ryhmätyötilan luokkaluetteloja, jos heillä on tarvittavat käyttöoikeudet.",
		workspacebuilder_classes_selection: "Valitse luokat:",
		workspacebuilder_classes_list: "Käytettävissä olevat luokat:",
		workspacebuilder_classes_columns_default: "Oletus",
		workspacebuilder_classes_columns_className: "Luokan nimi",
		workspacebuilder_classes_type_classes: "Lisää dokumentteja luokkien avulla",
		workspacebuilder_classes_type_classes_tooltip: "Luokkiin on liitetty ominaisuuksia, jotta dokumentit löytyvät myöhempää käyttöä varten.",
		workspacebuilder_classes_type_entryTemplates: "Lisää dokumentteja syöttömallipohjien avulla",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Syöttömallipohjien avulla varmistetaan, että kutakin dokumenttia varten määritetyt tiedot ovat yhdenmukaiset ja että niissä käytetään ennalta määritettyjä arvoja.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Syöttömallipohjan nimi",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Kuvaus",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Ryhmätyötilaan on lisättävä vähintään yksi syöttömallipohja.",

		workspacebuilder_classes_new: "Uusi luokka",
		workspacebuilder_classes_add: "Lisää luokka",
		workspacebuilder_entryTemplate_add: "Lisää syöttömallipohja",
		workspacebuilder_add_list: "Lisää",
		workspacebuilder_makeDefault_list: "Määritä oletusarvoksi",
		workspacebuilder_removeDefault_list: "Poista oletusarvo",

		workspacebuilder_roles_title: "Valitse roolit",
		workspacebuilder_roles_title_modify: "Muokkaa rooleja",

		workspacebuilder_selection_moveup: "Siirrä ylös",
		workspacebuilder_selection_movedown: "Siirrä alas",
		workspacebuilder_selection_remove: "Poista",
		workspacebuilder_selection_add: "Lisää",
		workspacebuilder_selection_create_new_search: "Uusi haku...",
		workspacebuilder_selection_create_new_role: "Uusi rooli...",
		workspacebuilder_selection_make_role_available: "Ota käyttöön",
		workspacebuilder_selection_make_role_available_tooltip: "Määrittää valitun roolin yhteiskäyttöön muiden mallipohjien kanssa. Roolin määritys yhteiskäyttöön edellyttää, että siihen on määritetty vähintään yksi käyttöoikeus.",

		workspacebuilder_navigation_next: "Seuraava",
		workspacebuilder_navigation_finish: "Valmis",
		workspacebuilder_navigation_validate: "Tarkista",
		workspacebuilder_navigation_previous: "Edellinen",
		workspacebuilder_navigation_cancel: "Peruuta",
		workspacebuilder_navigation_customize: "Mukauta",

		workspacebuilder_search_dialog_title: "Hae",
		workspacebuilder_dialog_close: "Sulje",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Mallipohjan käytettävyys:",
		workspace_properties_templateState_tooltip: "Poistamalla mallipohjan käytöstä voit estää käyttäjiä luomasta ryhmätyötiloja, jotka perustuvat tähän mallipohjaan.",
		workspace_properties_dialog_title: "Mallipohjan ominaisuudet",
		workspace_properties_online_radio_option_label: "Ota käyttöön",
		workspace_properties_offline_radio_option_label: "Poista käytöstä",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Haluatko peruuttaa tallentamatta muutoksia?",
		workspacebuilder_cancel_confirmation_button: "Kyllä",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Kaikki virheelliset objektit poistetaan mallipohjasta ja mallipohja määritetään käyttäjien käyttöön.  Haluatko tarkistaa tämän ryhmätyötilamallipohjan?",
		workspacebuilder_validate_confirmation_button: "Kyllä",
		workspacebuilder_validate_confirmation_title: "Tarkista",

		/* Entry templates builder */
		entry_templates: "Syöttömallin hallinnoija",
		no_entry_templates_were_found: "Syöttömallipohjia ei ole",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Suodatin",

		/* Roleselector widget */
		role_selector_name: "Roolit:",

		/* User Group picker widget */
		directory_label: "Hakemisto:",
		scope_label: "Haettava merkkijono:",
		name_starts_with_label: "Nimi alkaa merkeillä",
		name_contains_label: "Nimi sisältää merkit",
		display_name_contains_label: "Näyttönimi sisältää",
		starts_with_label: "Alkaa merkeillä:",
		available_label: "Käytettävissä:",
		available_heading: "Käytettävissä",
		selected_label: "Valitut:",
		selected_heading: "Valitut",
		available_repositories_label: "Käytettävissä olevat tietovarastot",
		selected_repositories_label: "Valitut tietovarastot",
		default_repository: "Oletustietovarasto:",
		default_repository_placeholder: "Valitse tietovarasto",
		default_role_placeholder: "Valitse rooli",
		menu_label_placeholder: "Valitse tai kirjoita nimiö",
		default_repository_hover: "Määritä tietovarasto, joka valitaan oletusarvoisesti, kun käyttäjät kirjautuvat Web-työasemaohjelmaan tästä työpöydästä.<br><br><b>Tärkeää:</b> Valittuun tietovarastoluettelon työpöytään on lisättävä tietovarastoja, ennen kuin oletustietovarasto voidaan määrittää.",
		default_repository_workflow_hover: "<b>Huomautus:</b> voit määrittää sovellustilat vain tietovarastoille, jotka on määritetty tätä työpöytää varten.",
		remove_label: "Poista",
		users_label: "Käyttäjät",
		groups_label: "Ryhmät",
		user_or_group_name_label: "Käyttäjän tai ryhmän nimi:",
		user_or_group_name_hover: "Anna sellaisen käyttäjän tai ryhmän nimi, joka on kelvollinen tietovarastossa.  Nimeä ei tarkisteta.",
		user: "Käyttäjä",
		group: "Ryhmä",
		name: "Nimi:",
		displayName: "Näyttönimi",
		display_name: "Näyttönimi:",
		shortName: "Lyhyt nimi:",
		distinguishedName: "Täsmennetty nimi:",
		search_tooltip: "Hae",
		add_tooltip: "Lisää",
		add_selected_tooltip: "Lisää valittujen luetteloon",
		remove_tooltip: "Poista",
		remove_selected_tooltip: "Poista valittujen luettelosta",
		add_to_selected_tooltip: "Lisää",
		remove_from_selected_tooltip: "Poista",
		move_up_selected_tooltip: "Siirrä ylös",
		move_down_selected_tooltip: "Siirrä alas",
		advanced_search_options_tooltip: "Lisäasetukset",
		move_right_selected_tooltip: "Siirrä alivalikkoon",
		move_left_selected_tooltip: "Poista alivalikosta",
		add_separator: "Lisää erotin",
		menu_item_label: "Valikon vaihtoehdon nimiö:",
		add_menu_label: "Lisää alivalikko",
		menu_label: "Alivalikon nimiö:",
		menu_label_info: "<b>Tärkeää:</b> Tähän alivalikkoon on lisättävä vähintään yksi valikon vaihtoehto, ennen kuin valikon voi tallentaa.",
		menu_dropdown_label: "Avattavan painikkeen nimiö:",
		menu_dropdown_label_info: "<b>Tärkeää:</b> avattavaan painikkeeseen on lisättävä vähintään yksi valikon vaihtoehto, ennen kuin työkalurivi voidaan tallentaa.",
		no_item_found: "Tuloksia ei löytynyt.",
		me: "Minä",
		anyone: "Kuka tahansa",
		specific_users: "Määritetyt käyttäjät",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Haku on palauttanut enemmän kuin {0} tulosta. Tarkenna hakua muuttamalla hakuperusteita.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Hakutulokset sisältävät objekteja, jotka on jo valittu. Järjestelmä ei näytä kyseisiä objekteja hakutuloksissa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Järjestelmä on palauttanut enemmän kuin {0} tulosta. Vähennä tulosten määrää suodattamalla tuloksia.",

		user_already_selected: "Määritetty käyttäjä on jo valittuna.  Määritä toinen käyttäjä.",
		group_already_selected: "Määritetty ryhmä on jo valittuna.  Määritä jokin toinen ryhmä.",
		user_cannot_select_self: "Et voi lisätä itseäsi. Määritä toinen käyttäjä.",

		/* Select User Group dialog */
		select_user_group_add_label: "Lisää",
		select_user_group_cancel_label: "Peruuta",
		add_users_groups_label: "Lisää käyttäjiä ja ryhmiä",
		add_user_group_label: "Lisää käyttäjiä ja ryhmiä",
		add_users_label: "Lisää käyttäjiä",
		add_user_label: "Käyttäjän lisäys",
		add_label: "Lisää:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Seuraavissa dokumenteissa on tallentamattomia kommenttien muutoksia:",
		viewer_confirm_to_proceed: "Haluatko jatkaa ja menettää muutokset?",
		viewer_warn_has_changes: "Järjestelmä hylkää tallentamattomat muutokset.",
		viewer_warn_is_printing: "Meneillään oleva tulostus saattaa jäädä kesken.",
		viewer_warn_confirm_exit: "Haluatko lopettaa?",
		viewer_prompt_save_changes: "Seuraavassa dokumentissa on tallentamattomia kommenttien muutoksia, jotka menetetään:<br>${0}<br><br>Haluatko tallentaa muutokset?",
		viewer_prompt_mergesplit_changes: "Seuraavissa dokumenteissa on tallentamattomia muutoksia:<br>${0}<br><br>Haluatko jatkaa ja menettää muutokset?",
		viewer_prompt_mergesplit_tab_changes: "Seuraavassa dokumentissa on tallentamattomia muutoksia:<br>${0}<br><br>Haluatko jatkaa ja menettää muutokset?",
		viewer_new_item_name: "Uusi dokumentti",
		viewer_top_frame: "Yläkehys:",
		viewer_bottom_frame: "Alakehys:",
		viewer_left_frame: "Vasen kehys:",
		viewer_right_frame: "Oikea kehys:",
		viewer_viewer_frame: "Katseluohjelmakehys:",
		viewer_properties_frame: "Ominaisuudet-kehys:",
		viewer_comment_frame: "Kommenttikehys:",
		viewer_mergesplit_on: "Näytä",
		viewer_mergesplit_off: "Yhdistä ja jaa",
		viewer_mergesplit_context_menu_move: "Siirrä",
		viewer_mergesplit_context_menu_rename: "Nimeä uudelleen",
		viewer_mergesplit_context_menu_delete: "Poista",
		//move to new window
		viewer_move_to_new_window:"Siirry uuteen ikkunaan",
		viewer_continue:"Hylkää muutokset",
		viewer_return_to_original_window:"Palaa alkuperäiseen ikkunaan",
		viewer_switch_window:"Vaihda ikkunaa",
		viewer_prompt_lost_changes:"Dokumentti ${0} on auki toisessa ikkunassa. Dokumentissa on tallentamattomia muutoksia.<br><br>Haluatko vaihtaa toiseen ikkunaan ja tallentaa muutokset vai hylätä muutokset ja avata dokumentin tässä ikkunassa?",
		viewer_mergesplit_fallback_info: "Voit toteuttaa Yhdistä ja jaa -toiminnon vain dokumenteille, jotka ovat samassa tietovarastossa.",
		viewer_tabbed_layout: "Näytä välilehtinä",
		viewer_tabbed_layout_highcontrast: "Välilehdet",
		viewer_split_vertical_layout: "Jaa ruutuihin vaakasuunnassa",
		viewer_split_vertical_layout_highcontrast: "Ylä- ja alareuna",
		viewer_split_horizontal_layout: "Jaa ruutuihin pystysuunnassa",
		viewer_split_horizontal_layout_highcontrast: "Vasen ja oikea",
		viewer_add_vertical_layout: "Uusi välilehti alhaalla",
		viewer_add_vertical_layout_highcontrast: "Alavälilehti",
		viewer_add_horizontal_layout: "Uusi välilehti oikealla",
		viewer_add_horizontal_layout_highcontrast: "Oikea välilehti",
		viewer_add_horizontal_layout_rtl: "Uusi välilehti vasemmalla",
		viewer_add_horizontal_layout_rtl_highcontrast: "Vasen välilehti",
		viewer_split_properties_layout: "Näytä ominaisuudet",
		viewer_split_comment_layout: "Näytä kommentit",
		viewer_split_notelog_layout: "Näytä viestiloki",
		viewer_window_title: "${0}-katseluohjelma",
		viewer_next_hit: "Näytä luettelon seuraava dokumentti",
		viewer_prev_hit: "Näytä luettelon edellinen dokumentti",
		viewer_confrim_more_search_results: "Hakutulokset eivät enää sisällä tarkasteltavia dokumentteja. Haluatko noutaa lisää hakutuloksia?",
		viewer_confirm_get_next_page: "Tulosluettelo ei sisällä enempää tarkasteltavia objekteja. Haluatko noutaa lisää hakutuloksia?",
		viewer_confirm_get_next_item: "Tulosluettelo sisältää lisää tarkasteltavia objekteja. Haluatko tarkastella seuraavaa objektia?",
		viewer_fn_annotation_tooltip: " Tekijä: ${0},  luontiaika: ${1}",
		viewer_box_note_limitation: "Voit avata Box-huomautuksia ja tarkastella niitä vain erillisessä ikkunassa.",
		viewer_click_to_open_box_note: "Avaa Box-huomautus napsauttamalla tätä.",
		viewer_box_view_expiring: "Voit tarkastella Box-dokumenttia enintään 60 minuuttia. Nykyinen istunto vanhentuu ${0} minuutin kuluttua. Jos haluat jatkaa dokumentin käsittelyä, se on ladattava uudelleen nyt. Haluatko ladata dokumentin uudelleen?",
		viewer_add_dialog_save_as_type: "Tallennuslaji:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Uloskuittauksen ristiriita",
		viewer_checkout_conflict: "Toinen käyttäjä on kuitannut dokumentin ulos.",
		viewer_checkout_confirm: "Dokumentista on käytettävissä uudempi versio. Haluatko jatkaa dokumentin uloskuittausta vai haluatko ladata uudemman version katseluohjelmaan? Jos valitset katseluohjelman uudelleenlatauksen, tallentamattomat muutokset menetetään.",
		viewer_checkout_continue: "Jatka uloskuittausta",
		viewer_checkout_reload: "Lataa uudelleen",
		viewer_status_building: "Dokumentin kokoaminen on meneillään...",
		viewer_status_adding: "Dokumentin lisäys on meneillään...",
		viewer_status_checking_in: "Dokumentin sisäänkuittaus on meneillään...",

		/* Class Selector Widget */
		include_subclasses_label: "Sisällytä aliluokat",
		include_subclasses_label2: "Hae myös aliluokista",
		include_subclasses_note: "(Sisällyttää aliluokat)",
		available_classes_col_header: "Käytettävissä olevat luokat",
		single_class_label: "Hae yhdestä luokasta",
		multiple_classes_label: "Hae useasta luokasta",
		multiple_classes_hover_help: "Valitse tämä vaihtoehto, jos haluat etsiä useasta luokasta.  Luokat voivat olla pää- tai aliluokkia. Jos valitset tämän asetuksen, näkyviin tulevat vain ominaisuudet ja arvot, jotka ovat yhteisiä valituille luokille.",
		selected_classes_col_header: "Valitut luokat",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(Sisällyttää alikansiot)",
		favorites_pseudo_node: "\\Suosikit\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Sinun on valittava tietovaraston kansio, johon dokumentti lisätään.",
		no_permission_add_folder: "Käyttöoikeudet eivät riitä kansioiden lisäämiseen tähän kansioon.",
		no_permission_add_document: "Käyttöoikeudet eivät riitä dokumenttien lisäämiseen tähän kansioon.",
		document_already_in_folder: "Dokumentti on jo tässä kansiossa.",
		cant_move_folder_onto_parent: "Kansio on jo tässä kansiossa.",
		cant_move_folder_onto_self: "Kansiota ei voi siirtää itsensä tai omien alikansioidensa alle.",

		/* Workflow Widgets */
		process_application_space: "Prosessin sovellustila",
		process_role: "Prosessirooli",
		process_inbasket: "Prosessin saapuneiden lokero",
		process_worklist: "Työluettelo",
		process_step_processor: "Prosessin työobjekti",
		process_tracker: "Työobjektin seuranta",
		process_info_subject: "Aihe",
		process_info_stepname: "Vaihe",
		process_info_is_locked: "Lukittu",
		process_info_no_access: "Ei käyttöoikeutta",
		process_info_received_on: "Vastaanotettu",
		process_info_overdue: "Määräaika umpeutunut",
		process_info_reminder_sent: "Muistutus lähetetty",
		process_info_locked_by_user: "Lukitsija",
		process_work_object_number: "Työobjektin numero",
		process_deadline: "Määräpäivä:",
		process_launchedby: "Aloittaja:",
		process_receivedon: "Vastaanotettu:",
		process_step: "Vaihe:",
		process_properties: "Ominaisuudet",
		process_attachments: "Liitteet",
		process_attachments_select: "Valitse liite",
		process_finish_button_label: "Lopeta seuranta",
		process_tracker_history: "Historia",
		process_tracker_milestones: "Välitavoitteet",
		process_tracker_milestone: "Välitavoite",
		process_tracker_milestone_level: "Taso",
		process_tracker_milestones_empty: "Näytettäviä välitavoitteita ei ole.",
		process_tracker_level_selector_label: "Näytä välitavoitetasot tasoon:",
		process_tracker_map_selector_label: "Suodata vastaavuusmäärityksen perusteella:",
		process_tracker_message: "Sanoma",
		process_tracker_datereached: "Saavutettu päivämäärä",
		process_tracker_stepname: "Vaihe",
		process_tracker_cycle: "Jakso",
		process_tracker_review_cycle: "Tarkistuskierros",
		process_tracker_participant: "Osallistuja",
		process_tracker_completed: "Valmis",
		process_tracker_response: "Vastaus",
		process_tracker_comments: "Huomautukset",
		process_tracker_delete_confirmation: "Haluatko lopettaa seuraavan käsittelyreitin seurannan: ${0}?",
		process_tracker_history_allmaps: "Kaikki vastaavuudet",
		process_tracker_history_workflow: "Käsittelyreitti",
		process_tracker_history_terminate: "Lopeta",
		process_tracker_history_malfunction: "Toimintahäiriö",
		process_filter_label: "Suodatin",
		process_no_filter_summary: "Suodattimia ei ole käytetty",
		process_filter_summary: "Suodatinta ${0} on käytetty",
		process_filter_reset_tooltip: "Palauta tyhjentää suodattimen ja päivittää saapuneiden lokeron.",
		process_attachments_add_folder: "Lisää kansio",
		process_attachments_add_doc: "Lisää dokumentti",
		process_complete_button_label: "Valmis",
		process_save_button_label: "Tallenna",
		process_launch_button_label: "Aloita käsittelyreitti",
		process_open_button_label: "Avaa",
		process_movetoinbox_button_label: "Siirrä saapuneiden lokeroon",
		process_return_button_label: "Palaa",
		process_return_to_sender_tooltip: "Palauta työobjekti saapuneiden lokeroon, josta se on peräisin",
		process_move_to_inbasket_tooltip: "Siirrä työobjekti henkilökohtaiseen saapuneiden lokeroon",
		process_reassign_tooltip: "Määritä työobjekti uudelleen toiselle omistajalle",
		process_reassign_button_label: "Määritä uudelleen",
		process_preferences_button_label: "Oletusasetukset",
		process_manageroles_button_label: "Roolien hallinta",
		process_manageroles_no_members: "Jäseniä ei ole.",
		process_responses_button_label: "Lisää vastauksia",
		process_morecustomaction_button_label: "Lisää toimintoja",
		process_show_instructions: "Näytä ohjeet",
		process_hide_instructions: "Piilota ohjeet",
		process_remove_attachment: "Poista",
		process_close_window: "Työobjekti on käsitelty.",
		process_delegate_flag: "Vaadi nykyistä omistajaa hyväksymään työobjekti ennen sen reititystä käsittelyreitin seuraavaan vaiheeseen.",
		process_paticipant_voting: "Osallistujien määrä, jotta äänestys voidaan hyväksyä:",
		process_get_next_label: "Nouda seuraava työobjekti",
		process_no_more_items: "Saapuneiden lokerossa ei ole enää käsiteltäviä objekteja.",
		process_workflow_name: "Käsittelyreitin nimi:",
		process_pattern_process_name: "Kohteen ${0} tarkistus",
		process_instuctions: "Tarkastajien ohjeet:",
		process_pattern_deadline: "Määräpäivä:",
		process_reviewers: "Tarkastajat:",
		process_approvals_required: "Tarvittavat hyväksynnät:",
		process_on_reject: "Jos työobjekti hylätään:",
		process_return_to_originator: "palauta se minulle",
		process_return_to_previous_reviewer: "palauta se edelliselle tarkastajalle",
		process_additional_settings: "Lisäasetukset:",
		process_allow_reassign: "Salli tarkastajien määrittää tämä tarkistus uudelleen",
		process_complete_notification: "Ilmoita minulle, kun tarkistus on valmis",
		process_workflow_name_hover_help: "Tarkastajien tulisi helposti erottaa tämä työobjekti saapuneiden lokeron muista työobjekteista nimellä, jonka määrität työobjektille.",
		process_approvals_required_hover_help: "Jos usea henkilö tarkistaa työobjektia samanaikaisesti, voit määrittää, kuinka monta hyväksyntää tarvitaan, jotta työobjekti on valmis.",
		process_approval_options: "Hyväksyntäasetukset",
		process_all: "Kaikki",
		process_at_least: "Vähintään",
		process_at_least_by_count: "Vähintään ${0} tarkastajaa",
		process_at_least_by_percentage: "Vähintään ${0} % tarkastajista",
		process_comments: "Huomautukset:",
		process_review_step_comments_hover_help: "Jos hylkäät työobjektin, sinun on määritettävä hylkäyksen syy. Näiden tietojen avulla työobjektin laatija tai edellinen tarkastaja voi ryhtyä korjaustoimenpiteisiin.",
		process_rework_step_comments_hover_help: "Sinun on annettava tiedot siitä, miten vastasit huomautuksiin. Jos olet eri mieltä huomautuksista, perustele päätöksesi.",
		process_rejection_reason: "Hylkäyksen syy:",
		process_summary: "Tiivistelmä",
		process_sequential_review: "Peräkkäinen tarkistus",
		process_sequential_review_description: "Kukin tarkastaja tarkistaa työobjektin järjestyksessä.",
		process_parallel_review: "Rinnakkainen tarkistus",
		process_parallel_review_description: "Kaikki tarkastajat tarkistavat työobjektin samanaikaisesti",
		process_parallel_approvals_required_error: "Tarvittavien hyväksyntöjen määrä on liian suuri. Vain ${0} tarkastajaa on määritetty.",
		process_parallel_invalid_required_approvals_count: "Arvo ei kelpaa. Arvon on oltava ${0}.",
		process_subject_prompt: "Anna aihe",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Työobjekti:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Näytä ominaisuudet",
		view_permissions_level: "Näytä käyttöoikeudet",
		view_content_level: "Näytä dokumentti",
		link_level: "Linkki",
		modify_properties_level: "Muokkaa ominaisuuksia",
		modify_content_level: "Muokkaa dokumenttia",
		minor_version_level: "Muokkaa aliversiota",
		major_version_level: "Muokkaa pääversiota",
		create_instance_level: "Luo ilmentymä",
		delete_document_level: "Poista dokumentti",
		delete_item_level: "Poista kohde",
		modify_document_permissions_level: "Käyttöoikeuksien hallinta",
		modify_folder_permissions_level: "Käyttöoikeuksien hallinta",
		modify_owner_level: "Omistajan muokkaus",
		delete_folder_level: "Kansioiden poisto",
		file_in_folder_level: "Lisäys kansioihin",
		create_subfolder_level: "Alikansioiden luonti",
		link_item_level: "Kommentoi dokumenttia, lisää kansioon", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Vain dokumentti: Lisää huomautus dokumenttiin tai poista huomautus dokumentista</li><li>Vain kansio: Lisää objekteja kansioon tai poista objekteja kansiosta</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Poista",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Omistaja",
		/* previously \"Full control\" */
		edit_privilege: "Tekijä",
		/* previously \"Edit\" */
		read_only_privilege: "Lukija",
		/* previously \"Read only\" */
		no_access_privilege: "Ei käyttöoikeutta",
		share_with_label: "Määritä yhteiskäyttöön seuraavien kanssa:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Vain minä itse",
		public_label: "Kaikki",
		members_label: "Määritetyt käyttäjät ja ryhmät",
		select_members_label: "Valitse...",
		select_user_group_label: "Valitse käyttäjät...",
		select_users_groups_label: "Valitse käyttäjiä ja ryhmiä...",
		select_user_label: "Valitse käyttäjä...",
		propagation_label: "Välitys:",
		access_label: "Käyttöoikeudet:",
		add_permission_add_label: "Lisää",
		security_policy_label: "Suojauskäytäntö:",
		includes_inherited_access: "Sisältää periytyneet käyttöoikeudet",
		customize_access_for_label: "Mukauta seuraavan kohteen käyttöoikeuksia:",
		customize: "Mukauta",
		direct: "Tämä objekti",
		singleLevelInheritance: "Yksi taso",
		infiniteLevelInheritance: "Kaikki tasot",
		inherited: "Periytyneet",
		direct_hover_help: "Suojausasetukset koskevat valittua objektia",
		singleLevelInheritance_hover_help: "Nämä käyttöoikeudet koskevat tätä objektia ja niitä välittömiä aliobjekteja, jotka määritetään perimään suojaus tältä objektilta.",
		infiniteLevelInheritance_hover_help: "Nämä käyttöoikeudet koskevat tätä objektia ja kaikkia jälkeläisiä, jotka määritetään perimään suojaus tältä objektilta.",
		inherited_hover_help: "Nämä käyttöoikeudet on peritty ylätason objektilta.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Nämä käyttöoikeudet (${0}) koskevat tätä objektia ja niitä välittömiä aliobjekteja, jotka määritetään perimään suojaus tältä objektilta.",
		infiniteLevelInheritance_member_hover_help: "Nämä käyttöoikeudet (${0}) koskevat tätä objektia ja kaikkia jälkeläisiä, jotka määritetään perimään suojaus tältä objektilta.",
		inherited_member_hover_help: "Nämä käyttöoikeudet (${0}) on peritty ylätason objektilta.",
		partial_hover_help: "Käyttäjä on muuttanut objektin suojausasetuksia",
		allow: "Salli",
		deny: "Estä",
		basic: "Perusasetukset",
		advanced: "Lisäasetukset",
		permission_type: "Määritä seuraavan kohteen käyttöoikeudet:",
		share_with_hover_help: "Tämä objekti on määritettynä yhteiskäyttöön seuraavien käyttäjien ja ryhmien kanssa.",
		direct_security_policy_hover_help: "Suojauskäytännön asetukset sallivat tämän objektin suojauksen muuton.",
		security_policy_hover_help: "Tämän objektin suojaus on vain luku -tilassa, koska suojauskäytännön asetukset estävät objektin suojauksen muuton.",
		security_remove: "Ei käyttöoikeuksia",
		pseudo_group_label: "Valenimitilit",
		marking_hover_help: "Merkintäjoukko ohjaa tämän objektin suojausmäärityksiä. Tämä voi vaikuttaa objektin suojaukseen.",
		note_label: "Tärkeää:",
		marking_text: "Objektissa on merkintä ${0}. Objektilla saattaa olla lisäsuojausrajoituksia.",
		authenticated_users: "Todennetut käyttäjät",
		realm_users: "${0} käyttäjää",
		denyAll: "Estä kaikki",
		allowAll: "Salli kaikki",
		remove_direct_text: "Kun tallennat muutokset, tämän jäsenen käyttöoikeudet poistetaan objektista.",
		remove_single_inheritance_text: "Kun tallennat muutokset, tämän jäsenen käyttöoikeudet poistetaan objektista ja <br>niistä välittömistä aliobjekteista, jotka määritetään perimään suojaus objektilta.<p>Haluatko jatkaa?",
		remove_infinite_inheritance_text: "Kun tallennat muutokset, tämän jäsenen käyttöoikeudet poistetaan objektista ja <br>kaikista jälkeläisistä, jotka määritetään perimään suojaus objektilta.<p>Haluatko jatkaa?",
		remove_inheritance_text: "Kun tallennat muutokset, tämän jäsenen käyttöoikeudet poistetaan objektista ja <br>kaikista jälkeläisistä, jotka määritetään perimään suojaus objektilta. Vain ne käyttöoikeudet jäävät, jotka<br> tämä objekti on perinyt.<p>Haluatko jatkaa?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Poista käyttöoikeudet (${0})",

		security_proxy_text: "Tämän objektin suojaus on vain luku -tilassa.",
		security_proxy_declared_text: "Tämän objektin suojaus on vain luku -tilassa, koska suojauksen välityspalvelin on määrittänyt suojauksen.",
		security_proxy_hover_help: "Toiseen tietovaraston objektiin määritetyt suojausasetukset ohjaavat tämän objektin suojausasetuksia.",
		add_permissions_label: "Lisää käyttöoikeuksia",
		permission_propagation_direct: "Vain tämä kansio",
		permission_propagation_onelevel: "Tämä kansio ja yksi alempi taso",
		permission_propagation_alllevels: "Tämä kansio ja kaikki sen alla olevat tasot",
		document_propagation_label: "Määritä seuraavan kohteen käyttöoikeudet:",
		document_propagation_FOLDER: "Kansio",
		document_propagation_DOCUMENT: "Dokumentti",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Todennuslähde:",

		/* Versions Widget */
		object_versions_selector_label: "Versiot:",
		object_versions_label: "Versiot",
		object_type_document_label: "Dokumentti:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Kansiot arkistoitu kohteeseen",
		folders_filed_in_folder_col_hdr: "Kansio",
		folders_filed_in_path_col_hdr: "Polku",
		folders_filed_in_containment_name_col_hdr: "Sisällytysnimi",
		folders_filed_in_creator_col_hdr: "Tekijä",
		folders_filed_in_date_created_col_hdr: "Luontiajankohta",

		/* Parent Documents */
		properties_parent_documents_label: "Päädokumentit",

		/* Select object dialog */
		select_object_title: "Valitse kohde",
		select_object_breadCrumb_version_prefix: "Seuraavan kohteen versiot: ",
		show_versions_label: "Näytä versiot",
		use_current_version_label: "Käytä nykyistä versiota",
		use_released_version_label: "Käytä julkaistua versiota",

		/* Select content class dialog */
		select_class: "Valitse luokka",
		/* Select Search dialog */
		select_search: "Valitse haku",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Näytä linkki",
		show_hyperlink_intro: "Voit kopioida ja liittää linkin sähköpostiviesteihin, keskusteluihin ja Web-sivuille. Jos objektista on useita versioita, määritä, mihin versioon haluat luoda linkin.",
		show_hyperlink_intro_no_version_select: "Voit kopioida ja liittää linkin sähköpostiviesteihin, keskusteluihin ja Web-sivuille.",
		show_text_label: "Versio:",
		released_button_label: "Julkaistu",
		current_button_label: "Nykyinen",
		select_button_label: "Tietty versio",
		show_hyperlink_no_released_version_msg: "Dokumentista ei ole julkaistua versiota.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Aloita käsittelyreitti",
		edit_workflow_title: "Työobjektin ominaisuudet",
		start_workflow_intro: "Aloita käsittelyreitti valittujen objektien käsittelyä varten. Jos haluat osoittaa työobjektit tietylle käyttäjälle, määritä omistaja.",
		edit_workflow_intro: "Voit muokata valittujen työobjektien ominaisuuksia. Jos haluat osoittaa työobjektin uudelleen toiselle käyttäjälle, määritä omistaja.",
		workflow_field_label: "Käsittelyreitti:",
		priority_field_label: "Prioriteetti:",
		owner_field_label: "Omistaja:",
		start_button_label: "Aloita",
		save_button_label: "Tallenna",
		owner_value_hint: "Anna aakkosnumeerinen merkkijono, jonka enimmäispituus on 32 merkkiä. Merkkijono saa sisältää vain tyhjämerkkejä ja seuraavia merkkejä: a-z, A-Z, 0-9 ja ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Sisältöelementit",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Arvo ei kelpaa. Arvo saa sisältää vain tyhjämerkkejä ja seuraavia merkkejä: a-z, A-Z, 0-9 ja ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Anna työobjektin tärkeyttä kuvaava arvo 1–32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Arvo ei kelpaa. Prioriteetin arvon on oltava 1 - 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Käsittelyreitin nimeä ei ole.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Keskeytä käsittely käsittelyreitillä",
		suspend_workitems_intro: "Jos keskeytät työobjektin käsittelyn käsittelyreitillä, työobjektia ei voi käsitellä, ennen kuin sen käsittelyä käsittelyreitillä jatketaan.",
		suspend_workitems_options_label: "Keskeytä valittujen työobjektien käsittely:",
		suspend_until_resume_label: "Kunnes käsittelyä jatketaan manuaalisesti",
		suspend_until_date_label: "Kunnes",
		suspend_for_duration_label: "On kulunut",
		suspend_for_duration_hours: "tuntia",
		suspend_for_duration_days: "päivää",
		suspend_for_duration_weeks: "viikkoa",
		suspend_for_duration_months: "kuukautta",
		suspend_for_duration_years: "vuotta",
		suspend_button_label: "Keskeytä",
		suspend_duration_value_hint: "Anna keston arvo 1–99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Arvo ei kelpaa. Arvon on oltava 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Poista käsittelyreitiltä",
		remove_workflow_confirmation: "Haluatko poistaa valitut objektit käsittelyreitistä?<br>${0} objekti(a) on valittuna.",
		remove_workflow_button_label: "Poista",

		/* Unfile dialog */
		unfile_dialog_title: "Poista kansiosta",
		unfile_dialog_remove_from_folder_label: "Poista kohteesta:",
		unfile_dialog_info_text: "Voit poistaa objekteja kansioista. Huomaa kuitenkin, että vaikka objekti poistettaisiin kaikista kansioista, tämä ei poista sitä tietovarastosta. Objekti voidaan tällöinkin noutaa ajamalla haku. Luettelossa näkyvät vain kansiot, joihin sinulla on valtuudet.",
		unfile_dialog_select_all: "Valitse kaikki",
		unfile_dialog_deselect_all: "Tyhjennä kaikki",
		unfile_dialog_remove_button_label: "Poista",
		unfile_dialog_select_folder_col_hdr: "Valitse kansio",
		unfile_dialog_folder_col_hdr: "Kansio",
		unfile_dialog_path_col_hdr: "Polku",
		unfile_dialog_not_filed_msg: "Tämä objekti ei ole missään kansiossa.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Käyttöoikeudet eivät riitä poistamaan tätä objektia mistään kansiosta, jossa objekti sijaitsee.",
		unfile_dialog_folder_not_selectable_tooltip: "Käyttöoikeudet eivät riitä poistamaan objektia tästä kansiosta.",
		unfile_multi_prompt: "Haluatko poistaa valitut objektit kansiosta ${0}?",
		unfile_large_number_items_confirmation_question: "Olet valinnut ${0} kohdetta poistettavaksi kansiosta ${1}.<br/>Suuren kohdemäärän poistaminen voi kestä pitkään.<br/>Haluatko jatkaa?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Avaa",
		move_to_folder_title: "Siirrä kansioon",
		move_to_folder_button_caption: "Siirrä",
		move_to_folder_label: "Siirrä kohteeseen:",
		add_to_folder_title: "Lisää kansioon",
		add_to_folder_button_caption: "Lisää",
		add_to_folder_label: "Lisää kohteeseen:",
		copy_to_folder_title: "Kopioi kansioon",
		copy_to_folder_button_caption: "Kopioi",
		copy_to_folder_label: "Kopioi kohteeseen:",
		copy_to_folder_delete_label: "Kun kopiointi on valmis, poista valitut objektit Box-tietovarastosta.",
		move_from_folder_label: "Siirrä kohteesta:",
		move_file_info_text: "Voit siirtää objekteja kansiosta toiseen.",
		move_folder_info_text: "Voit siirtää kansioita pääkansiosta toiseen.",
		add_doc_to_folder_info_text: "Voit lisätä objekteja yhteen tai useaan kansioon. Jos lisättävä objekti on jo jossain kansiossa, aiemmin lisätty objekti säilyy kyseisessä kansiossa ja järjestelmä lisää objektin muihin määritettyihin kansioihin.",
		copy_doc_to_folder_info_text: "Voit kopioida objektit kansioon.",
		box_copy: "Box-kopiointi",
		box_copy__button_caption: "Kopioi",
		box_copy_to_info_text: "Valitse tietovarasto ja -kansio, josta haluat kopioida valitut Box-objektit.",
		box_copy_from_info_text: "Valitse tietovarasto ja -kansio, josta haluat kopioida valitut Box-objektit.",
		box_copy_version_info_text: "Voit lisätä uuden dokumentin valitsemalla tietovaraston ja kansion. Voit kuitata uuden version sisään valitsemalla tietovaraston ja kansion.",
		admin_box_copy: "Box-kopiointi",
		admin_box_copy_hover: "Tämän vaihtoehdon avulla käyttäjät voivat kopioida dokumentteja Box-tietovarastoon.",

		no_permission_to_copy_version_msg: "Box-tietovarastosta ei voi kopioida dokumenttia valitun dokumentin uutena versiona. Sinulla ei ole valitun dokumentin muokkauksen edellyttämiä käyttöoikeuksia tai joku muu on kuitannut valitun dokumentin ulos.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Käyttöoikeudet eivät riitä poistamaan tätä objektia mistään kansiosta, jossa objekti sijaitsee.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Käyttöoikeudet eivät riitä poistamaan objektia tästä kansiosta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Tätä objektia ei voi siirtää, koska sitä ei ole arkistoitu mihinkään kansioon. Valitse toinen objekti.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Aloita käsittelyreitti",
		subscriptions_dialog_available_items_label: "Käytettävissä olevat objektit:",
		subscriptions_dialog_info_text: "Määritä aloitettava käsittelyreitti.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nimi",
		subscriptions_dialog_desc_col_hdr: "Kuvaus",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Roolien hallinta",
		manageroles_dialog_info_text: "Voit muokata kunkin sellaisen roolin käyttäjäluetteloa, joka on liitetty  tähän prosessin sovellustilaan.",
		manageroles_dialog_members_label: "Jäsenet",
		manageroles_dialog_roles_label: "Roolit",
		manageroles_dialog_add_button_label: "Lisää käyttäjiä ja ryhmiä",
		manageroles_dialog_remove_button_label: "Poista",
		manageroles_dialog_save_button_label: "Tallenna",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Objektiin ei ole liitetty käsittelyreittejä.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Käsittelyreitin asetukset",
		workflow_pref_dialog_info_text: "Määritä käsittelyreitin tapahtumat, joita koskevia sähköposti-ilmoituksia haluat vastaanottaa. Voit myös ottaa käyttöön asetuksen, joka reitittää työsi toiselle henkilölle, valitsemalla käyttäjän, jolle järjestelmä delegoi työt.",

		workflow_pref_general: "Yleiset",
		workflow_pref_email_address: "Sähköpostiosoite",
		workflow_pref_email_address_hover: "Määritä sähköpostiosoite, johon haluat vastaanottaa käsittelyreittiä koskevia ilmoituksia.",
		workflow_pref_preferred_locale: "Kieli",
		workflow_pref_preferred_locale_hover: "Määrittää sähköposti-ilmoitusten kielen.",

		workflow_pref_work_item_notice: "Työobjekti-ilmoitukset",
		workflow_pref_step_new_assignment: "Minulle on osoitettu uusi työobjekti",
		workflow_pref_step_new_assignment_hover: "Ilmoita minulle, kun vastaanotan uuden työobjektin.",
		workflow_pref_step_expired_deadline: "Työobjektin määräaika on umpeutunut",
		workflow_pref_step_expired_deadline_hover: "Ilmoita minulle, kun työobjektini määräaika on umpeutunut.",
		workflow_pref_step_reminders: "Työobjektin määräaika lähestyy",
		workflow_pref_step_reminders_hover: "Muistuta minua työobjektista, kun sen määräaika lähestyy.",

		workflow_pref_originator_notice: "Laatijan ilmoitukset",
		workflow_pref_milestone_reached: "Välitavoite on saavutettu",
		workflow_pref_milestone_reached_hover: "Ilmoita minulle, kun aloittamassani käsittelyreitissä saavutetaan välitavoite.",

		workflow_pref_tracker_notice: "Käsittelyreitin seurantailmoitukset",
		workflow_pref_tracker_new_assignment: "Minulle on osoitettu uusi seurantaobjekti",
		workflow_pref_tracker_new_assignment_hover: "Ilmoita minulle, kun seuraamani käsittelyreitti aloitetaan.",
		workflow_pref_tracker_deadline_reminders: "Käsittelyreitin määräaika lähestyy",
		workflow_pref_tracker_deadline_reminders_hover: "Muistuta minua käsittelyreitistä, kun sen määräaika lähestyy.",
		workflow_pref_tracker_deadline_expired: "Käsittelyreitin määräaika on umpeutunut",
		workflow_pref_tracker_deadline_expired_hover: "Ilmoita minulle, kun käsittelyreitin määräaika on umpeutunut.",
		workflow_pref_tracker_exception: "Käsittelyreitissä on ilmennyt virhe",
		workflow_pref_tracker_exception_hover: "Ilmoita minulle, kun käsittelyreitissä ilmenee poikkeus tai virhe.",
		workflow_pref_tracker_expired_deadline: "Vaiheen määräaika on umpeutunut",
		workflow_pref_tracker_expired_deadline_hover: "Ilmoita minulle, kun seuraamani vaiheen määräaika on umpeutunut.",
		workflow_pref_tracker_milestone_reached: "Välitavoite on saavutettu",
		workflow_pref_tracker_milestone_reached_hover: "Ilmoita minulle, kun seuraamassani käsittelyreitissä saavutetaan välitavoite.",

		workflow_pref_out_notice: "Ei paikalla",
		workflow_pref_proxy_user: "Delegoi työ käyttäjälle",
		workflow_pref_proxy_user_hover: "Tämän asetuksen avulla voit määrittää järjestelmän reitittämään työsi automaattisesti toiselle käyttäjälle silloin, kun olet itse esimerkiksi lomalla tai poissa toimistolta.",
		workflow_pref_workflow: "Käsittelyreitti",
		workflow_pref_on: "Käytössä",
		workflow_pref_off: "Ei käytössä",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Aloita käsittelyreitti",
		transfered_workflows_dialog_info_text: "Valitse aloitettava käsittelyreitti.",
		transfered_workflows_dialog_available_items_label: "Käytettävissä olevat objektit:",
		transfered_workflows_dialog_select_button_label: "Aloita",
		transfered_workflows_dialog_name_col_hdr: "Nimi",
		transfered_workflows_dialog_no_item_found: "Yhtään siirrettyä käsittelyreittiä ei löytynyt.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Siirrä käsittelyreitti",
		transfer_workflow_dialog_info_text: "Valitse käsittelyreittijärjestelmään siirrettävä käsittelyreitti.",
		transfer_workflow_dialog_use: "Käytä tätä käsittelyreitin nimeä",
		transfer_workflow_dialog_use_another: "Käytä toista käsittelyreitin nimeä",
		transfer_workflow_dialog_in_use: "Käsittelyreitin nimi on: ",
		transfer_workflow_dialog_transfer_button_label: "Siirrä",
		transfer_workflow_dialog_no_items_found: "Yhtään siirrettyä käsittelyreittiä ei löytynyt.",
		transfer_workflow_dialog_use_hover: "Määritä nykyinen käsittelyreitin nimi käsittelyreitin määrityksestä.",
		transfer_workflow_dialog_another_hover: "Määritä eri käsittelyreitin nimi tai käytä uudelleen aiemmin luodun siirretyn käsittelyreitin nimeä.",

		/*Search In control*/
		search_in_title: "Hae kohteesta",
		search_in_teamspaces: "Ryhmätyötilat",
		search_in_repositories: "Tietovarastot",
		search_in_thisteamspaces: "Tämä ryhmätyötila",

		ajaxViewer_save: "Tallenna kommentit",
		ajaxViewer_print: "Tulostuksen esikatselu",
		ajaxViewer_firstPage: "Ensimmäinen sivu",
		ajaxViewer_previousPage: "Edellinen sivu",
		ajaxViewer_nextPage: "Seuraava sivu",
		ajaxViewer_lastPage: "Viimeinen sivu",
		ajaxViewer_unknownPageCount: "1/?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0}/${1}",
		ajaxViewer_zoomOut: "Zoomaus kauemmaksi",
		ajaxViewer_zoomIn: "Zoomaus lähemmäksi",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "Sovita leveyteen",
		ajaxViewer_fitHeight: "Sovita korkeuteen",
		ajaxViewer_fitPage: "Sovita sivulle",
		ajaxViewer_rotate270: "Kierrä 270 astetta",
		ajaxViewer_rotate90: "Kierrä 90 astetta",
		ajaxViewer_rotate180: "Kierrä 180 astetta",
		ajaxViewer_darken: "Tummenna",
		ajaxViewer_lighten: "Vaalenna",
		ajaxViewer_lessContrast: "Pienennä kontrastia",
		ajaxViewer_moreContrast: "Suurenna kontrastia",
		ajaxViewer_invert: "Muuta käänteiseksi",
		ajaxViewer_createHighlight: "Korostus",
		ajaxViewer_createNote: "Kommentoi",
		ajaxViewer_editAnnotation: "Muokkaa kommentin ominaisuuksia",
		ajaxViewer_deleteAnnotation: "Poista kommentti",
		ajaxViewer_editAnnotationTitle: "Muokkaa kommentin ominaisuuksia",
		printableView_print: "Tulosta",
		printableView_close: "Sulje",

		search_results_dropdown_button: "Tulosten näyttö",
		search_results_columns_label: "Hae tulosnäytöstä",
		search_results_columns_description: "Valitse ominaisuudet, joiden haluat näkyvän hakutuloksissa.",
		search_results_sortby_label: "Lajitteluperuste:",
		search_results_order_label: "Lajittelujärjestys:",
		search_results_accending_label: "Nouseva",
		search_results_descending_label: "Laskeva",
		search_results_available_properties: "Käytettävissä",
		search_results_selected_properties: "Valitut",
		search_rank_property: "Sijaluku (vain tekstihaut)",
		search_name_attribute: "Nimi (${0})",
		search_results_summary_enabled_label: "Ota sisältöyhteenvedot käyttöön (vain tekstihaku)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Haut",
		manage_teamspace_classes_tab_title: "Luokat",
		manage_teamspace_entry_templates_tab_title: "Syöttömallipohjat",
		manage_teamspace_team_tab_title: "Työryhmä",
		manage_teamspace_roles_tab_title: "Roolit",
		manage_teamspace_dialog_title: "Muokkaa ryhmätyötilaa",
		manage_teamspace_button_label: "Muokkaa ryhmätyötilaa",
		manage_teamspace_team_pane_heading: "Valitse työryhmä",
		manage_teamspace_classes_pane_heading: "Valitse luokat",
		manage_teamspace_entry_templates_pane_heading: "Valitse syöttömallipohjat",
		manage_teamspace_no_rights_message: "Käyttöoikeudet eivät riitä muokkaamaan tätä ryhmätyötilaa.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Ryhmätyötilan ominaisuudet",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Määritä dokumenttien ja kansioiden ominaisuudet, jotka ovat näkyvissä sisältöluettelossa, kun käyttäjät selaavat ryhmätyötilassa. Voit määrittää myös ominaisuuksien näyttöjärjestyksen.",
		teamspace_props_sel_cols_use_default_label: "Käytä tämän tietovaraston <b>Selaa</b>-asetusta",
		teamspace_props_sel_cols_use_default_tooltip: "Käytä hallintatyökalussa tämän tietovaraston selaussivulla määritettyjä asetuksia.",
		teamspace_props_general_tab_label: "Yleiset",
		teamspace_props_column_props_tab_label: "Näytettävät ominaisuudet",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Valitse tuotava tiedosto",
		teamspace_import_template_instruction: "Voit valita ryhmätyötilamallipohjan vientitiedoston tuontia varten.",
		teamspace_import_template_button_label: "Tuo",
		teamspace_import_template_dialog_label: "Tuo ryhmätyötilamallipohja",

		/* Annotation Dialog */
		annotationDlg_title: "Kommentit",
		annotationDlg_description: "Valittu dokumentti sisältää seuraavat kommentit:",
		annotationDlg_msg_noAnnotations: "Kommentteja ei ole. Voit laatia kommentin napsauttamalla Lisää-painiketta.",
		annotationDlg_pageLabel: "Sivu: ${pageNum}",
		annotationDlg_accLabel: "KÄYTTÖ: ${accType}",
		annotationDlg_accLabel_public: "Julkinen",
		annotationDlg_accLabel_private: "Yksityinen",
		annotationDlg_accLabel_privateGroup: "Yksityinen (${groupName})",
		annotationDlg_copiable: "Voidaan kopioida toiseen palvelimeen",
		annotationDlg_cannotCopy: "Ei voida kopioida toiseen palvelimeen",
		annotationDlg_addButtonLabel: "Lisää",

		/* Share Dialog */
		is_shared: "Yhteiskäytössä",
		is_share_pending: "Yhteiskäyttömääritys odotustilassa",
		share_title: "Box-yhteiskäyttö",
		share_instructions_new: "Lähetä sähköpostiviesti, joka sisältää linkin yhteistiedostoon. Kaikki linkin haltijat voivat käyttää tiedostoa.",
		share_instructions_existing: "Lähetä sähköpostiviesti, joka sisältää linkin yhteistiedostoon. Kaikki linkin haltijat voivat käyttää tiedostoa. Linkki voi olla muilla henkilöillä jo ennestään, jos joku muu on aiemmin määrittänyt tiedoston yhteiskäyttöön.",
		share_instructions_another_version_shared: "Lähetä sähköpostiviesti, joka sisältää linkin yhteistiedostoon. Kaikki linkin haltijat voivat käyttää tiedostoa. Linkki voi olla muilla henkilöillä jo entuudestaan, jos joku muu on aiemmin määrittänyt yhteiskäyttöön tiedoston toisen version.",
		share_buttonLabel_share: "Määritä yhteiskäyttöön",
		share_email_addresses: "Vastaanottajat:",
		share_email_addresses_hover: "Kun yhteiskäyttömääritys on valmis, järjestelmä lähettää sähköpostiviestin näihin osoitteisiin. Jos et lisää osoitteita, järjestelmä lähettää linkin omaan sähköpostiosoitteeseesi.",
		share_email_addresses_reshare_hover: "Kun yhteiskäyttömääritys on valmis, järjestelmä lähettää sähköpostiviestin näihin osoitteisiin. Jos et lisää osoitteita, järjestelmä ei lähetä sähköpostiviestiä.",
		share_password: "Määritä salasana:",
		share_password_placeholder: "Valinnainen",
		share_comments: "Viesti:",
		share_comments_default: "Olen määrittänyt Box-tietovarastossa olevan tiedostoni yhteiskäyttöön kanssasi.",
		share_myEmail: "Lähetysosoite:",
		share_expiration: "Määritä linkin vanheneminen:",
		share_expire: "Käyttöoikeus vanhenee:",
		share_expire_none: "Ei vanhene koskaan",
		share_allowDownload: "Salli lataus",
		share_add: "Lisää",
		share_advanced_instructions: "Lataus-, vanhenemis- ja salasana-asetus koskevat Box-tietovarastossa olevaa yhteistiedostoa.",
		share_advanced_existing_instructions: "Lataus-, vanhenemis- ja salasana-asetus koskevat Box-tietovarastossa olevaa yhteistiedostoa.",
		share_options_edit_warning: "Tärkeää: Näihin asetuksiin tehdyt muutokset vaikuttavat kaikkiin linkin haltijoihin, myös niihin henkilöihin, joilla on linkki jo entuudestaan.",
		share_link: "Linkki:",
		share_email_addresses_placeholder: "Sähköpostiosoitteet",
		share_email_address_placeholder: "Sähköpostiosoite",
		share_email_address_invalid: "Anna kelvollinen sähköpostiosoite.",
		share_cannot_share_with_self: "Et voi määrittää tiedostoja yhteiskäyttöön itsesi kanssa. Määritä toinen käyttäjä.",
		share_selected_version_with_minor_warning_hover: "Dokumentin versio ${0} on yhteiskäytössä. Olet valinnut version ${1}.<br><br><b>Varoitus</b>: Jos määrität version ${1} yhteiskäyttöön, kukaan ei voi määrittää versiota ${2} yhteiskäyttöön, ellet poista version ${1} yhteiskäyttömääritystä.",
		share_selected_version_hover: "Dokumentin versio ${0} on yhteiskäytössä. Olet valinnut version ${1}.",
		share_selected_version_message: "Tärkeää: Dokumentin versio ${0} on yhteiskäytössä. Olet valinnut version ${1}.",
		share_different_version_message: "Tärkeää: Olet valinnut version ${1}, muotta dokumentin versio ${0} on jo määritetty yhteiskäyttöön.  Et voi määrittää versiota ${1} yhteiskäyttöön, ellet ensin poista yhteiskäyttömääritystä, mutta voit määrittää linkin versioon ${0} sen asemesta.",
		share_version_message: "Tärkeää: Dokumentin versio ${0} on yhteiskäytössä. Valitse, minkä version haluat määrittää yhteiskäyttöön.",
		share_version_new: "Määritä versio ${0} yhteiskäyttöön",
		share_version_new_p8_hover: "Kun määrität tämän dokumentin yhteiskäyttöön, järjestelmä luo versiolinkin vain valittuu versioon.<br><br>Kun dokumentti on jo määritetty yhteiskäyttöön:<ul><li>Voit määrittää myöhemmän uudemman version yhteiskäyttöön, jolloin linkki osoittaa uudempaan versioon.</li><li>Et voi määrittää vanhempaa versiota yhteiskäyttöön, ellet ensin poista yhteiskäyttömääritystä.</li></ul>",
		share_version_new_cm_hover: "Kun määrität tämän dokumentin yhteiskäyttöön, järjestelmä luo versiolinkin vain valittuu versioon.<br><br>Kun dokumentti on jo määritetty yhteiskäyttöön:<ul><li>Voit määrittää myöhemmän uudemman version yhteiskäyttöön, jolloin linkki osoittaa uudempaan versioon.</li><li>Et voi määrittää vanhempaa versiota yhteiskäyttöön.</li></ul>",
		share_version_update: "Määritä versio ${0} yhteiskäyttöön (päivitä yhteiskäyttöasetukset).",
		share_version_update_p8_hover: "Tämän dokumentin määrittäminen yhteiskäyttöön säilyttää linkin vain tiettyyn versioon.<br><br>Kun dokumentti on jo määritetty yhteiskäyttöön:<ul><li>Voit määrittää myöhemmän uudemman version yhteiskäyttöön, jolloin linkki osoittaa uudempaan versioon.</li><li>Et voi määrittää vanhempaa versiota yhteiskäyttöön, ellet ensin poista yhteiskäyttömääritystä.</li></ul>",
		share_version_update_cm_hover: "Tämän dokumentin määrittäminen yhteiskäyttöön säilyttää linkin vain tiettyyn versioon.<br><br>Kun dokumentti on jo määritetty yhteiskäyttöön:<ul><li>Voit määrittää myöhemmän uudemman version yhteiskäyttöön, jolloin linkki osoittaa uudempaan versioon.</li><li>Et voi määrittää vanhempaa versiota yhteiskäyttöön.</li></ul>",
		share_version_change_to_current: "Määritä versio ${0} yhteiskäyttöön (päivitä yhteiskäyttö valitulla versiolla).",
		share_version_change_to_current_p8_hover: "Tämän dokumentin määritys yhteiskäyttöön päivittää linkin siten, että se osoittaa vain tiettyyn versioon.<br><br>Kun dokumentti on jo määritetty yhteiskäyttöön:<ul><li>Voit määrittää myöhemmän uudemman version yhteiskäyttöön, jolloin linkki osoittaa uudempaan versioon.</li><li>Et voi määrittää vanhempaa versiota yhteiskäyttöön, ellet ensin poista yhteiskäyttömääritystä.</li></ul>",
		share_version_change_to_current_cm_hover: "Tämän dokumentin määritys yhteiskäyttöön päivittää linkin siten, että se osoittaa vain tiettyyn versioon.<br><br>Kun dokumentti on jo määritetty yhteiskäyttöön:<ul><li>Voit määrittää myöhemmän uudemman version yhteiskäyttöön, jolloin linkki osoittaa uudempaan versioon.</li><li>Et voi määrittää vanhempaa versiota yhteiskäyttöön.</li></ul>",
		share_repository: "Yhteistiedostojen tietovarasto",
		share_repository_hover: "Jos haluamaasi Box-tietovarastoa ei näy, voit lisätä Tietovarastot-sivulla uuden Box-tietovaraston.",
		share_options: "Yhteiskäytön asetukset",
		unshare_confirm: "Jos poistat yhteiskäyttökohteen, kaikki yhteiskäyttölinkit muuttuvat toimimattomiksi, myös muiden käyttäjien aiemmin lähettämät linkit. Jos muut käyttäjät haluavat määrittää dokumentin yhteiskäyttöön, heidän on valittava alkuperäinen dokumentti ja määritettävä se yhteiskäyttöön uudelleen.<br><br>Haluatko varmasti poistaa yhteiskäyttökohteen?",
		unshare_button: "Poista Box-yhteiskäyttö",
		admin_share: "Box-yhteiskäyttöpalvelut:",
		admin_share_hover: "Anna kaikkien käyttäjien määrittää yhteiskäyttöön missä tahansa sellaisessa tietovarastossa oleva dokumentti, jossa on otettu käyttöön Box-yhteiskäyttö. Dokumentti määritetään yhteiskäyttöön kopioimalla tiedosto Box-tietovarastoon, luomalla linkki ja lähettämällä se sähköpostitse.",
		admin_my_email_modifiable: "Salli käyttäjien muokata lähettäjän sähköpostiosoitetta",
		admin_my_email_modifiable_hover: "Oletusarvon mukaan käyttäjän sähköpostiosoite on Box-yhteiskäytössä vain luku -muotoinen, ja se on peräisin käyttäjien ja heitä vastaavien sähköpostiosoitteiden luettelosta eli Box-käyttäjätilien tiedoista.<br><br>Valitse tämä vaihtoehto, jos haluat antaa käyttäjille mahdollisuuden muokata sähköpostiosoitettaan yhteiskäyttömäärityksen yhteydessä. Sähköpostiosoitteen kelpoisuutta ei kuitenkaan tarkisteta.",
		admin_repos_admin_user: "Yhteiskäytön pääkäyttäjä:",
		admin_repos_admin_user_hover: "Määritä yhteiskäytön pääkäyttäjä, jos käytössä on työpöytä, jossa on otettu käyttöön Box-yhteiskäyttöpalvelut ja siinä on määritetty tämä Box-tietovarasto yhteistiedostojen tietovarastoksi.<br><br>Valitse Määritä-vaihtoehto ja kirjaudu Box-palveluun käyttäen kelvollista Box-pääkäyttäjän tiliä.<br><br>Yhteiskäytön pääkäyttäjän on oltava Box-pääkäyttäjä, jolle on määritetty rajoittamaton Box-tallennustila.",
		admin_repos_admin_user_not_set_warning: "Valitulle tietovarastolle ei ole määritetty Box-pääkäyttäjää.<br><br>Box-yhteiskäyttöpalvelut ovat poissa käytöstä, kunnes valitulle tietovarastolle määritetään Box-pääkäyttäjä. Vaihtoehtoisesti voidaan valita toinen Box-tietovarasto, jolle on määritetty Box-pääkäyttäjä.<br><br>Box-pääkäyttäjän voi määrittää tietovaraston Yleiset-sivun kohdassa Box-yhteiskäyttöpalvelut.",
		admin_share_not_configured_warning: "Ennen kuin voit käyttää Box-yhteiskäyttöpalveluja, palvelintodennusta käyttävä Box-tietovarasto on ensin lisättävä ja valittava.",
		/* Office Online Server settings */
		admin_office_online_title: "Office Online -kokoonpano",
		admin_office_online_server_enable: "Office Online Server:",
		admin_office_online_server_enable_hover: "Määritä, haluatko, että tämän työpöydän käyttäjät voivat muokata Office-dokumenttejaan Office Online Server -palvelimen avulla.",		
		admin_office_online_allow_collaborative_editing: "Salli ryhmätyömuokkaus",
		admin_office_online_allow_collaborative_editing_hover: "Salli useiden käyttäjien käsitellä samaa dokumenttia. Poista vaihtoehdon valinta, jos haluat rajoittaa dokumentin muokkauksen yhdelle käyttäjälle.",
		admin_office_online_repository_not_set_warning: "Ennen kuin voit ottaa Office Online -palvelun käyttöön, se on otettava ensin käyttöön tietovarastossa ja Microsoft Office Online Server -palvelimen URL-osoite on määritettävä. Valitse <b>Tietovarastot</b>-vaihtoehto, valitse tietovarasto ja ota palvelu käyttöön <b>Muokkaa integrointia</b> -välilehdessä. Valitse vaihtoehdot <b>Asetukset > Yleiset</b> ja anna Microsoft Office Online Server -palvelimen URL-osoite.",
		admin_settings_office_online_server_enable_hover: "Määritä, haluatko käyttää Office Online Server -palvelinta Office-dokumenttien käsittelyyn.",
		admin_office_online_server_url: "Microsoft Office Online Server -palvelimen URL-osoite",
		admin_office_online_server_url_hover: "Määritä URL-osoite, jonka avulla muut sovellukset voivat viestiä  Office Online Server -palvelimen kanssa. URL-osoitteen muoto on http://palvelimen_nimi:portin_numero/hosting/discovery.",
		admin_office_online_server_Verified: "Tarkistettu",
	    admin_office_online_server_Failed: "<b>Epäonnistui</b>",

		admin_repcfg_office_online_service_p8_hover: "Voit alustaa tietovaraston käyttämään Office Online Server -palvelinta lisäämällä alkuperäisen mallipohjatiedoston kutakin Office-sovellusta varten. Jos mallipohjaa ei ole määritetty, käytetään oletusmallipohjaa.",	
		admin_repcfg_office_online_server_integration: "MS Office Online Server -integrointi",
		admin_repcfg_office_online_service_url_not_set_warning: "Ennen kuin voit ottaa Office Online Server -palvelimen käyttöön, Microsoft Office Online Server -palvelimen URL-osoite on määritettävä. Valitse vaihtoehdot Asetukset > Yleiset ja anna URL-osoite.",
		admin_repcfg_office_online_word_template_name: "Word-oletusmallipohja",
		admin_repcfg_office_online_excel_template_name: "Excel-oletusmallipohja",
		admin_repcfg_office_online_powerpoint_template_name: "PowerPoint-oletusmallipohja",
		admin_repcfg_office_online_blank_template_description: "Tämä on oletusmallipohja, jota käytetään, jos et lisää omaa mallipohjaa.",
		/* Edit Service settings */
		admin_icn_edit_title: "Muokkaa kokoonpanoa",	
	    admin_icn_edit_files_cleanup_interval: "Tilapäistiedostojen puhdistusväli (päivää):",
	    admin_icn_edit_files_cleanup_interval_hover: "Voit määrittää ajan, jonka verran ICN Edit -työasemaohjelma säilyttää tilapäistiedostoja. Oletusaika on 20 päivää. Enimmäisaika on 20 päivää ja vähimmäisaika 1 päivä.",
	    admin_icn_edit_service_integration: "Edit Service -integrointi",
	    admin_icn_edit_service_integration_intro: "Edit Service -palvelun avulla käyttäjät voivat helposti lisätä ja muokata tiedostoja tietokoneisiin asennetuilla sovelluksilla.<br><br><b>Tärkeää:</b> Jos otat Edit Service -palvelun käyttöön, tietovaraston kokoonpano on tallennettava, ennen kuin voit muokata ennalta määritettyjä luokkia.",
		admin_icn_edit_service: "Edit Service -palvelu:",
		admin_icn_edit_enable_hover: "Edit Service -palvelun käyttö edellyttää seuraavaa:<ul><li>Palvelu on otettava käyttöön tietovarastossa.</li><li>Palvelu on otettava käyttöön ympäristön työpöydissä.</li><li>IBM Content Navigator Edit -työasemaohjelma on asennettava käyttäjien työasemiin.</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Ota käyttöön",
		admin_icn_edit_disable: "Poista käytöstä",
		admin_icn_edit_create_new_category: "Uusi luokka",
		admin_icn_edit_delete_category: "Poista luokka",
		admin_icn_edit_edit_category: "Muokkaa luokkaa",
		admin_icn_edit_disable_category: "Poista luokka käytöstä",
		admin_icn_edit_enable_category: "Ota luokka käyttöön",
		admin_icn_edit_new_category_dialog_title: "Uusi luokka",
		admin_icn_edit_edit_category_dialog_title:"Muokkaa luokkaa",
		admin_icn_edit_new_category_dialog_instructions: "Dokumenttiluokan avulla voi liittää mallipohjia tiettyihin MIME-lajeihin Edit Service -palvelua varten. Voit esimerkiksi liittää joukon mallipohjia PDF-tiedostoihin, jolloin käyttäjät voivat käyttää mallipohjia lisätessään tai muokatessaan tiedostoja IBM Content Navigator Edit -työasemaohjelmassa. <br><br><b>Tärkeää:</b> Tietovaraston kokoonpano on tallennettava, ennen kuin voit lisätä mallipohjia luomaasi luokkaan. ",
		admin_icn_edit_edit_category_dialog_instructions: "Tietovaraston kokoonpano on tallennettava, ennen kuin voit lisätä mallipohjia tähän luokkaan. ",
		admin_icn_edit_delete_category_dialog_instructions: "Haluatko poistaa tämän luokan ja kaikki siihen liitetyt mallipohjat?<br><br><b>Tärkeää:</b> Muutokset eivät ole pysyviä, ennen kuin tallennat muutokset tietovarastoon. ",
		admin_icn_edit_category_label: "Luokka: ",
		admin_icn_edit_category_discription_label:"Kuvaus: ",
		admin_icn_edit_template_column_head:"Mallipohjan nimi",
		admin_icn_edit_category_duplicate_error_message: "Luokka, jolla on tämä tunnus, on luotu aiemmin. ",
		admin_icn_edit_word_category_description: "Tämä luokka määrittää käytettävissä olevat Microsoft Word -dokumenttien mallipohjat Edit Service -palvelussa. ",
		admin_icn_edit_excel_category_description: "Tämä luokka määrittää käytettävissä olevat Microsoft Excel -dokumenttien mallipohjat Edit Service -palvelussa. ",
		admin_icn_edit_powerpoint_category_description: "Tämä luokka määrittää käytettävissä olevat Microsoft PowerPoint -dokumenttien mallipohjat Edit Service -palvelussa. ",

		icn_edit_add_template_dialog_title:"Lisää mallipohja ${0}",
		icn_edit_add_template_only_one_file_error: "Voit valita vain yhden tiedoston.",
		icn_edit_add_template_file_type_error: "Määritä kelvollinen ${0}-mallipohjatiedosto.<br><br>Valitun dokumentin MIME-laji on ${1}.<br><br>Kelvolliset MIME-lajit: ${2}.",
		icn_edit_change_template_dialog_title: "Muokkaa ${0}-mallipohjaa",
		icn_edit_action_in_new_menu_name:"Dokumentti ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "Office Online -palvelussa",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "työpöytäsovelluksissa",
		icn_edit_new_document_dialog_title: "Uusi dokumentti ${0}",
		icn_edit_new_document_dialog_intro: "Luo uusi dokumentti ${0} ja lisää se tietovarastoon. Dokumentti luodaan käyttämällä valittua Edit Service -mallipohjaa.", 
		icn_edit_select_edit_service_template: "Valitse mallipohja",
		icn_edit_edit_service_template: "Edit Service -mallipohja:",
		icn_edit_new_document_category_no_templates_message:"Tässä luokassa ei ole mallipohjia. Pyydä pääkäyttäjää lisäämään mallipohjia tähän luokkaan.",
		icn_edit_installer: "IBM Content Navigator Edit -ohjelman asennusohjelma",
		admin_icn_cm_classes_and_roles_settings: "Luokka- ja rooliasetukset",
		admin_repcfg_classes_and_roles_warning: "Voit määrittää luokkia ja käyttäjiä tai käyttäjäryhmiä, joilla on mallipohjien luonti-, muokkaus ja käyttöoikeus tai oikeus luoda dokumenttiluonnoksia, jotka toimivat Office Online Service -palvelussa ja Edit Service -palvelussa.",
		admin_repcfg_classes_and_roles_click_warning: "napsauttamalla tätä.",
		/* Edit Service settings END */
		share_no_my_email_error: "Dokumentin yhteiskäyttömäärityksessä pakollisen sähköpostiosoitteen selvityksessä on ilmennyt ongelma.",
		share_no_my_email_error_explanation: "Kirjauduit sisään käyttäjätunnuksella ${0}, mutta sitä vastaavaa sähköpostiosoitetta ei ole määritetty.",
		share_no_my_email_error_userResponse: "Yritä kirjautua sisään uudelleen tai kirjaudu käyttämällä jotakin toista käyttäjätunnusta. Jos häiriö ei poistu, ilmoita virheestä järjestelmän pääkäyttäjälle.",
		share_no_my_email_error_adminResponse: "Käyttäjätunnusta ${0} vastaavaa sähköpostiosoitetta ei ole määritetty, ja työpöytä ${1} ei anna käyttäjien muokata Box-yhteiskäyttöpalveluihin liittyvää sähköpostiosoitetta.<br><br>Kokeile jotakin seuraavista ratkaisuista:<br>Varmista, että sähköpostiosoitteiden vastaavuusmäärityksen lisäosa on rekisteröity.<br>Varmista, että emailMappingPlugin.json-tiedosto sisältää käyttäjätunnuksen ${0} ja käyttäjän sähköpostiosoitteen. Luo sitten sähköpostiosoitteiden vastaavuusmäärityksen lisäosa, määritä sen kokoonpano ja rekisteröi se.<br>Sähköpostiosoitteiden vastaavuusmäärityksen lisäosaa tai FileNet P8 -järjestelmän sähköpostiosoitehakemistoa ei ole pakko käyttää. Jos haluat antaa käyttäjien itse kirjoittaa sähköpostiosoitteensa dokumentin yhteiskäyttömäärityksen yhteydessä, voit muokata työpöydän Box-yhteiskäyttöpalvelujen asetuksia niin, että käyttäjät voivat lähettää linkin jostakin muusta sähköpostiosoitteesta.",
		share_no_my_email_error_0: "käyttäjätunnus",
		share_no_my_email_error_1: "työpöydän_nimi",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Tämän dokumentin myöhempi versio on määritetty yhteiskäyttöön, joten dokumentin valittua versiota ei voi määrittää yhteiskäyttöön.",
		share_later_version_shared_error_explanation: "Yhteiskäyttöön jo aiemmin määritetyn dokumentin aiempaa versiota ei voi määrittää yhteiskäyttöön.",
		share_later_version_shared_error_userResponse: "Jos haluat lähettää linkin dokumentin myöhempään versioon, valitse ensin myöhempi versio ja käytä sitten Määritä yhteiskäyttöön -toimintoa.<br><br>Jos haluat määrittää yhteiskäyttöön dokumentin valitun version, poista ensin dokumentin myöhemmän version yhteiskäyttömääritys.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Uusi sanoma",
		email_from: "Lähettäjä:",
		email_to: "Vastaanottaja:",
		email_cc_link: "Kopio",
		email_bcc_link: "Piilokopio",
		email_cc: "Kopio:",
		email_bcc: "Piilokopio:",
		email_address_invalid: "Anna kelvollinen sähköpostiosoite.",
		email_subject: "Aihe:",
		email_message: "Viesti:",
		email_message_placeholder: "Lisää viesti",
		email_attachments: "Liitteet:",
		email_links: "Linkit:",
		email_send: "Lähetä",
		email_dont_send: "Älä lähetä",
		email_subject_reminder: "Muistutus aiheesta",
		email_subject_reminder_confirm: "Haluatko lähettää tämän sanoman ilman aihetta?",
		email_missing_from_error: "On ilmennyt ongelma selvitettäessä sähköpostin lähetyksessä pakollista lähettäjän sähköpostiosoitetta.",
		email_missing_from_error_explanation: "Kirjauduit sisään käyttäjätunnuksella ${0}, mutta sitä vastaavaa sähköpostiosoitetta ei ole määritetty.",
		email_missing_from_error_userResponse: "Yritä kirjautua sisään uudelleen tai kirjaudu käyttämällä jotakin toista käyttäjätunnusta. Jos häiriö ei poistu, ilmoita virheestä järjestelmän pääkäyttäjälle.",
		email_missing_from_error_adminResponse: "Käyttäjätunnusta ${0} vastaavaa sähköpostiosoitetta ei ole määritetty, ja työpöytä ${1} ei anna käyttäjien muokata lähettäjän sähköpostiosoitetta.<br><br>Kokeile jotakin seuraavista ratkaisuista:<br>Varmista, että sähköpostiosoitteiden vastaavuusmäärityksen lisäosa on rekisteröity.<br>Varmista, että emailMappingPlugin.json-tiedosto sisältää käyttäjätunnuksen ${0} ja käyttäjän sähköpostiosoitteen. Luo sitten sähköpostiosoitteiden vastaavuusmäärityksen lisäosa, määritä sen kokoonpano ja rekisteröi se.<br>Sähköpostiosoitteiden vastaavuusmäärityksen lisäosaa tai FileNet P8 -järjestelmän sähköpostiosoitehakemistoa ei ole pakko käyttää. Jos haluat antaa käyttäjien itse kirjoittaa sähköpostiosoitteensa sähköpostin lähetyksen yhteydessä, voit muokata työpöydän sähköpostiasetuksia niin, että käyttäjät voivat muokata lähettäjän sähköpostiosoitetta.",
		email_missing_from_error_0: "käyttäjätunnus",
		email_missing_from_error_1: "työpöydän_nimi",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Dokumenttia ei voi avata.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator ei voi muodostaa yhteyttä IBM Content Navigator Edit -työasemaohjelmaan.",
		open_edit_document_with_native_application_error_userResponse: "Asenna IBM Content Navigator Edit -työasemaohjelma työasemaan ja aloita ohjelma. Yritä sitten avata dokumentti uudelleen.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Dokumenttia ei voi avata.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator ei voi muodostaa yhteyttä IBM Content Navigator Edit -työasemaohjelmaan.",
		connect_to_the_streamline_service_error_userResponse: "Asenna IBM Content Navigator Edit -työasemaohjelma työasemaan ja aloita ohjelma. Yritä sitten avata dokumentti uudelleen.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator -ohjelmaa ei ole määritetty oikein dokumenttien jakamista varten.",
		share_not_configured_error_explanation: "Box-yhteiskäyttöominaisuus on määritettävä oikein, ennen kuin dokumentteja voi määrittää yhteiskäyttöön,",
		share_not_configured_error_userResponse: "Ota yhteys pääkäyttäjään ja pyydä häntä määrittämään Box-yhteiskäyttöominaisuus.",
		share_not_configured_error_adminResponse: "Seuraavat objektit on määritettävä ennen dokumenttien yhteiskäyttöä:<ul><li>Tehtävienhallintapalvelu on otettava käyttöön hallintatyökalun asetuksissa.</li><li>Tehtävienhallinnan yhteystunnus on määritettävä tietovarastossa.</li><li>Yhteiskäyttö on otettava käyttöön tietovarastossa.</li><li>Box-tietovarasto on valittava yhteiskäyttöä varten työpöydässä.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Uutta versiota varten ei tallennettu ominaisuusmuutoksia",
		checkin_cors_save_attributes_error_explanation: "Versio on luotu, mutta ominaisuusmuutoksia ei ole tallennettu. Dokumentti saattaa olla kuitattuna ulos.",
		checkin_cors_save_attributes_error_userResponse: "Poista dokumentin lukitus ja päivitä ominaisuudet Ominaisuudet-pikavalikon vaihtoehdon avulla.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Uutta dokumenttia varten ei tallennettu ominaisuusmuutoksia",
		add_cors_save_attributes_error_explanation: "Dokumentti on luotu, mutta ominaisuusmuutoksia ei ole tallennettu.",
		add_cors_save_attributes_error_userResponse: "Päivitä ominaisuudet Ominaisuudet-pikavalikon vaihtoehdon avulla.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Dokumenttia ei voi avata.",		
		edit_document_using_edit_service_error_explanation: "Dokumenttia ei voi avata Edit Service -palvelussa.",
		edit_document_using_edit_service_error_userResponse: "Pyydä pääkäyttäjää päivittämään Edit Service -integraatio.<br><br> Jos käyttäjän on voitava käyttää dokumenttia Edit Service -palvelusta, siirry tietovaraston Muokkaa integrointia -sivulle ja päivitä Edit Service -integrointi niin, että luokka sisältyy Luokat, joita muokataan Edit Service -tukea varten -luetteloon.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Dokumenttia ei voi avata.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokumentti on käytössä Office Online Service -palvelussa.",
		edit_document_is_editing_by_oos_error_userResponse: "Dokumentti on tallennettava ja suljettava Office Online Service -palvelussa, ennen kuin sen voi avata Edit Service -palvelussa.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Ota käyttöön CORS (Cross-Origin Resource Sharing) -palvelinsiirrot",

		/* Email Settings */
		admin_email_settings: "Sähköpostiasetukset:",
		admin_email_settings_hover: "Määritä, minkä tyyppistä sähköpostipalvelua haluat käyttäjien käyttävän. Kun otat HTML-perustaisen sähköpostipalvelun käyttöön, voit sallia käyttäjien muokata omaa lähettäjän sähköpostiosoitettaan. Jos haluat ottaa Java-perustaisen sähköpostipalvelun käyttöön, käytössäsi on oltava Javaa tukeva selain.",
		admin_email_use_service: "Käytä HTML-perustaista sähköpostipalvelua",
		admin_email_use_applet: "Käytä Java-perustaista sähköpostipalvelua",
		admin_email_can_modify_from: "Salli käyttäjien muokata lähettäjän sähköpostiosoitetta",
		admin_email_can_modify_from_hover: "Oletusarvon mukaan lähettäjän sähköpostiosoitetta ei voi muokata ja se on peräisin käyttäjien ja heitä vastaavien sähköpostiosoitteiden luettelosta eli käyttäjätilien tiedoista.<br><br>Valitse tämä vaihtoehto, jos haluat antaa käyttäjille mahdollisuuden muokata sähköpostiosoitettaan lähettäessään sähköpostia. Sähköpostiosoitteen kelpoisuutta ei kuitenkaan tarkisteta.",
		admin_email_use_from_as_sender: "Käytä Lähettäjä-kentässä olevaa sähköpostiosoitetta sähköpostin lähettäjänä",
		admin_email_use_from_as_sender_hover: "Oletusarvon mukaan kelvollista Lähettäjä-kentän sähköpostiosoitetta käytetään käyttäjän sähköpostiosoitteena. CNMailSession-sähköposti-istunto määrittää kyseisen sähköpostiosoitteen sovelluspalvelimessa. Valitse tämä vaihtoehto, jos haluat määrittää, että käyttäjän sähköpostiosoitetta on käytettävä sähköpostissa.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Uudet kommentit",
		addAnnotationDlg_labelContents: "Sisältö:",
		addAnnotationDlg_labelAccess: "Käyttö:",
		addAnnotationDlg_labelPublic: "Julkinen",
		addAnnotationDlg_labelPrivate: "Yksityinen",
		addAnnotationDlg_labelPrivateGroup: "Ryhmän yksityinen",
		addAnnotationDlg_labelGroup: "Ryhmä",
		addAnnotationDlg_labelCopiable: "Tämä kommentti voidaan kopioida toiseen palvelimeen.",
		addAnnotationDlg_buttonLabel_save: "Tallenna",

		/* Skip navigation */
		skipNavigation_title_main: "Siirry pääsisältöön",
		skipNavigation_title_menu: "Siirry siirtymispainikkeisiin",
		skipNavigation_label_main: "Siirry pääsisältöön",
		skipNavigation_label_menu: "Siirry siirtymispainikkeisiin",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Ryhmätyötilojen hallinta",
		manage_teamspace_pane_instance_hdr: "Ryhmätyötilat",
		manage_teamspace_pane_template_hdr: "Mallipohjat",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Vieritä eteenpäin",
		scroll_back: "Vieritä taaksepäin",

		breadcrumb_separator_open: "Avaa solmu",
		breadcrumb_separator_close: "Sulje solmu",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Objektia ei ole valittu.",

		/* eds */
		eds_url: "Ulkoisen tietopalvelun URL-osoite:",
		eds_request_timeout: "Palvelupyynnön aikakatkaisu (sekunteina):",
		eds_is_required: "Estä käyttäjiä tekemästä toimia, jotka muuttavat ominaisuuksien arvoja, kun ulkoinen tietopalvelu ei ole käytettävissä",

		/* eforms */
		eform_signing_pane_welcome: "Allekirjoita lomake",
		eform_signing_button_label: "Allekirjoita",
		eform_signing_pane_delete: "Poista allekirjoitus",
		eform_signing_button_label_delete: "Poista",

		xtplugin_server_label: "IBM FileNet Workplace XT -palvelimen URL-osoite",
		xtplugin_server_hover: "Anna sen palvelimen URL-osoite, jossa IBM FileNet Workplace XT on otettu käyttöön, esimerkiksi http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "IBM eClient -palvelimen URL-osoite",
		ecplugin_server_hover: "Anna sen palvelimen URL-osoite, jossa IBM eClient on otettu käyttöön, esimerkiksi http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Suuren kohdemäärän käsittely voi kestä pitkään. Haluatko jatkaa?",
		large_number_actions_continue_button: "Seuraava vaihe",

		large_items_actions_confirmation_question: "Suurten objektien käsittely voi kestää pitkään. Haluatko jatkaa?",

		viewer_editproperties_title: "Vahvistus",
		viewer_editproperties_title_warning: "Varoitus",
		viewer_editproperties_save: "Tallenna",
		viewer_editproperties_next: "Seuraava",
		viewer_editproperties_reset: "Palauta",
		viewer_editproperties_reset_hover: "Järjestelmä palauttaa aiemmin tallennetut arvot tallentamattomiin tietoihin.",
		viewer_editproperties_saveandgetnext: "Tallenna ja nouda seuraava",
		viewer_editproperties_saveandgetnext_hover: "Noutaa seuraavan dokumentin automaattisesti, kun muutokset on tallennettu.",
		viewer_editproperties_prompt_save_changes: "Olet muuttanut seuraavan dokumentin ominaisuuksia<br>${0}<br><br>Tallennetaanko muutokset?",
		viewer_editproperties_prompt_discard_changes: "Olet muuttanut seuraavan dokumentin ominaisuuksia<br>${0}<br><br>Ainakin yhden ominaisuuden arvo on kuitenkin virheellinen, joten muutoksia ei voi tallentaa. Voit joko korjata virheelliset arvot tai hylätä muutokset.<br>Haluatko korjata ominaisuusruudussa näkyvät virheelliset arvot?",
		viewer_comments_prompt_discard_changes: "Olet muokannut huomautuksia. Tallennetaanko muutokset?",
		viewer_notelogs_prompt_discard_changes: "Olet muokannut viestilokeja. Tallennetaanko muutokset?",
		social_collaborated_version: "Versio: ${0}",
		social_link_label: "Kuka...",

		// social comments
		comments: "Huomautukset",
		comments_add_hint: "Lisää huomautukset painamalla Enter-näppäintä.",
		comments_hint: "Kirjoita huomautukset.",
		comments_label: "Tallenna huomautukset painamalla Enter- tai sarkainnäppäintä. Peruuta painamalla Esc-näppäintä.",
		comments_delete_confirmation: "Haluatko poistaa valitun huomautuksen?",
		comments_number: "Huomautukset: ${0}",
		comments_save_new: "Olet muokannut huomautuksia. Haluatko sulkea ikkunan tallentamatta muutoksia?",

		notelogs: "Viestilokit",
		notelogs_download: "Lataa",
		notelog_modify: "Tallenna muutokset",
		notelog_edit: "Muokkaa viestilokia",
		notelog_create_newVersion: "Luo uusi viestilokin versio",
		notelog_add_hint: "Kirjoita huomautuksesi ja lisää ne painamalla Enter-näppäintä.",
		notelog_hint: "Voit lisätä rivinvaihdon painamalla vaihto- ja Enter-näppäintä.",
		notelog_add_placeholder: "Lisää huomautukset viestilokiin painamalla Enter-näppäintä.",
		notelog_save_new: "Olet muokannut viestilokia. Haluatko sulkea ikkunan tallentamatta muutoksia?",

		// P8 markings related
		cannot_remove_markings: "Sinulla ei ole käyttöoikeuksia poistaa merkintäarvoja: {0}",

		// download count
		downloadcount: "Lataukset: {0}",
		downloadcount_single: "Yksi lataus",
		downloadcount_multiple: "{0} latausta",
		downloadcount_none: "Kukaan ei ole vielä ladannut tätä",

		// recommendations
		recommendations: "Pitämiset: {0}",
		recommendations_recommend: "Pidä tästä",
		recommendations_unrecommend: "Älä pidä tästä",
		recommendations_you: "Pidät tästä",
		recommendations_you_and_another: "Sinun lisäksesi yksi muu henkilö pitää tästä",
		recommendations_you_and_others: "Sinun lisäksesi {0} muuta henkilöä pitää tästä",
		recommendations_another: "Yksi henkilö pitää tästä",
		recommendations_others: "{0} henkilöä pitää tästä",
		recommendations_none: "Kukaan ei ole vielä pitänyt tästä",

		// tags
		tags: "Tunnisteet: ${0}",
		tags_delete: "Poista ${0}",
		tags_none: "Näytettäviä tunnisteita ei ole.",
		tags_add: "Lisää tunnisteet:",
		tags_hint: "Lisää tunnisteet painamalla Enter-näppäintä.",
		tags_hover_help: "Määritä tunniste tai luettelo tunnisteita, joita voi käyttää dokumenttien hakuun tunnisteen avulla. Voit erotella tunnisteet pilkuilla (,), puolipisteillä (;) tai välillä ( ).",
		tags_hover_help_box: "Määritä tunniste tai pilkuin eroteltu luettelo tunnisteita, joita voi käyttää dokumenttien hakuun tunnisteen avulla.",
		tags_no_access: "Sinulla ei ole tunnisteiden lisäykseen tarvittavia käyttöoikeuksia.",

		//task scheduler pane
		taskPane_tooltip: "Avaa asynkronisten tehtävien näkymä",
		taskPane_tree: "Tehtäväruudun siirtymisrakenne",
		taskPane_allTasks: "Kaikki tehtävät",
		taskPane_scheduledTasks: "Ajoitetut tehtävät",
		taskPane_recurringTasks: "Toistuvat tehtävät",
		taskPane_inProgressTasks: "Meneillään olevat tehtävät",
		taskPane_completedTasks: "Valmiit tehtävät",
		taskPane_failedTasks: "Epäonnistuneet tehtävät",
		taskPane_disabledTasks: "Käytöstä poistetut tehtävät",
		taskPane_statusScheduled: "Ajoitettu",
		taskPane_statusInProgress: "Käsittelyssä",
		taskPane_statusCompleted: "Valmis",
		taskPane_statusFailed: "Epäonnistui",
		taskPane_statusPaused: "Keskeytetty",
		taskPane_noItemSelected: "Kohdetta ei ole valittu",
		taskSchedulerPane_scheduleInformation: "Ajoitustiedot",
		taskSchedulerPane_loginInformation: "Sisäänkirjaustiedot",
		taskSchedulerPane_startImmediately: "Aloita heti",
		taskSchedulerPane_recurrence: "Toisto",
		taskSchedulerPane_interval: "Väli",
		taskSchedulerPane_scheduleReport: "Aikatauluraportti",
		taskSchedulerPane_nameHoverHelp: "Anna tehtävän nimi.",
		taskSchedulerPane_descriptionHoverHelp: "Anna tehtävän kuvaus. Kuvauksen tulisi auttaa erottamaan tehtävät toisistaan.",
		taskSchedulerPane_startTimeHoverHelp: "Määritä tehtävän ajon aloitusaika. Jos haluat ajaa tehtävän nyt, valitse Aloita heti -vaihtoehto.",
		taskSchedulerPane_recurrenceHoverHelp: "Voit ajoittaa tehtävän ajon toistuvaksi.",
		taskSchedulerPane_endTimeHoverHelp: "Määritä tehtävän ajon päättymisaika. Tehtävää ajetaan ajoitetusta aloitusajasta ajoitettuun päättymisaikaan.",
		taskSchedulerPane_usernameHoverHelp: "Toistuvissa tehtävissä todennuspalvelun käyttöönotto tehtävän ajon aikana edellyttää käyttäjätunnuksen määritystä.",
		taskSchedulerPane_passwordHoverHelp: "Toistuvissa tehtävissä todennuspalvelun käyttöönotto tehtävän ajon aikana edellyttää määritetyn käyttäjän salasanan määritystä.",
		taskSchedulerPane_notification: "Ilmoitus",
		taskSchedulerPane_emailAddress: "Sähköpostiosoite",
		taskSchedulerPane_emailAddressHoverHelp: "Kirjoita sähköpostiosoite, johon haluat vastaanottaa ilmoituksia tehtävän tilasta.",
		taskSchedulerPane_intervalHoverHelp: "Määritä toistuvan tehtävän ajoaika. Voit määrittää välin tunteina, päivinä, viikkoina tai kuukausina.",
		taskSchedulerPane_scheduledStartTime: "Ajoitettu aloitusaika",
		taskSchedulerPane_startTime: "Aloitusaika",
		taskSchedulerPane_title: "Ajoitus",
		taskSchedulerPane_runNow: "Aja heti",
		taskSchedulerPane_runOnce: "Aja kerran",
		taskSchedulerPane_runAtSchedule: "Aja aikataulun mukaan",
		taskSchedulerPane_repeats: "Toistuu",
		taskSchedulerPane_repeatsEvery: "Toistuu joka",
		taskSchedulerPane_hourly: "tunti",
		taskSchedulerPane_daily: "päivä",
		taskSchedulerPane_weekly: "viikko",
		taskSchedulerPane_monthly: "kuukausi",
		taskSchedulerPane_yearly: "vuosi",
		taskSchedulerPane_sunday: "L",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "K",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "P",
		taskSchedulerPane_saturday: "L",
		taskSchedulerPane_starting: "Aloituspäivämäärä",
		taskSchedulerPane_after: "Voimassa",
		taskSchedulerPane_ending: "Lopetuspäivämäärä",
		taskSchedulerPane_times: "kerta(a)",
		taskSchedulerPane_days: "päivä(ä)",
		taskSchedulerPane_hours: "tunti(a) päivässä",
		taskSchedulerPane_interval: "Väli",
		taskSchedulerPane_endingDays: "Lopetus (päivinä)",
		taskSchedulerPane_never: "Ei koskaan",
		taskSchedulerPane_categorization: "Luokittelu",
		taskSchedulerPane_scheduleTask: "Ajoita tehtävä",
		taskInformationPane_details: "Tiedot",
		taskInformationPane_errors: "Virheet",
		taskInformationPane_taskInstances: "Tehtäväilmentymät",
		taskInformationPane_audits: "Tarkastukset",
		taskInformationPane_results: "Tulokset",
		asyncTasks: "Asynkroniset tehtävät",

		//entry template pane
		search_all_entry_templates: "Hae kaikista syöttömallipohjista.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Näytä koko sivusto",
		mobilesite: "Näytä mobiilisivusto",
		profile: "Profiilin hallinta",
		office_template: "Office-mallipohja:",
		select_office_template: "Valitse Office-mallipohja",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Valittuja dokumentteja ei voi avata katseluohjelmassa Yhdistä ja jaa -toiminnon avulla.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "PDF- ja TIFF-dokumenteille määritetty katseluohjelma ei tue Yhdistä ja jaa -toimintoa.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Pyydä pääkäyttäjää määrittämään PDF- ja TIFF-dokumentteja varten katseluohjelma, joka tukee Yhdistä ja jaa -toimintoa. Tällainen on esimerkiksi Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Valittuja PDF-dokumentteja ei voi avata katseluohjelmassa Yhdistä ja jaa -toiminnon avulla.",
		document_builder_pdf_unsupported_viewer_error_explanation: "PDF-dokumenteille määritetty katseluohjelma ei tue Yhdistä ja jaa -toimintoa.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Pyydä pääkäyttäjää määrittämään PDF-dokumentteja varten katseluohjelma, joka tukee Yhdistä ja jaa -toimintoa. Tällainen on esimerkiksi Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Valittuja TIFF-dokumentteja ei voi avata katseluohjelmassa Yhdistä ja jaa -toiminnon avulla.",
		document_builder_tiff_unsupported_viewer_error_explanation: "TIFF-dokumenteille määritetty katseluohjelma ei tue Yhdistä ja jaa -toimintoa.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Pyydä pääkäyttäjää määrittämään TIFF-dokumentteja varten katseluohjelma, joka tukee Yhdistä ja jaa -toimintoa. Tällainen on esimerkiksi Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Valittuja dokumentteja ei voi avata katseluohjelmassa Yhdistä ja jaa -toiminnon avulla.",
		document_builder_unsupported_documents_error_explanation: "Yhdistä ja jaa -toiminto on tarkoitettu ainoastaan PDF- ja TIFF-dokumenteille.",
		document_builder_unsupported_documents_error_userResponse: "Valitse tuettuja dokumentteja ja yritä uudelleen.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Joitakin valittuja dokumentteja ei voi avata katseluohjelmassa Yhdistä ja jaa -toiminnon avulla.",
		document_builder_some_unsupported_documents_error_explanation: "Yhdistä ja jaa -toiminto on tarkoitettu ainoastaan samasta tietovarastosta avatuille PDF- ja TIFF-dokumenteille.",
		document_builder_some_unsupported_documents_error_userResponse: "Tuetut dokumentit avautuvat katseluohjelmaan.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Kuitattaessa sisään muokattua sisältöä on ilmennyt virhe.",
		document_builder_checkin_failed_explanation: "Katseluohjelma on vastaanottanut virhevastauksen kuitattaessa sisään muokattua sisältöä.",
		document_builder_checkin_failed_userResponse: "Pyydä järjestelmän pääkäyttäjää tarkastamaan Web-sovelluspalvelimen lokitiedostot.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Dokumenttia ei voi avata.",
		no_viewer_to_view_error_explanation: "Järjestelmän pääkäyttäjä on estänyt tämän dokumentin tarkastelun. Jos sinun on käsiteltävä dokumenttia, voit ladata sen.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Sisällön muodostus ei onnistunut.",
		document_build_failed_userResponse: "Pyydä järjestelmän pääkäyttäjää tarkastamaan katseluohjelman lokitiedostot.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Dokumentin avaus Yhdistä ja jaa -tilassa ei onnistunut.",
		document_builder_open_failed_userResponse: "Pyydä järjestelmän pääkäyttäjää tarkastamaan katseluohjelman lokitiedostot.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Järjestelmä ei voinut vaihtaa Yhdistä ja jaa -tilaan.",
		document_builder_switch_failed_userResponse: "Pyydä järjestelmän pääkäyttäjää tarkastamaan katseluohjelman lokitiedostot.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumentit",
		print_service_page_setup_tab_title: "Sivun asetukset",
		print_service_OD_print_tab_title: "Tulostimen asetukset",
		print_service_status_merging: "Dokumenttien yhdistäminen on meneillään...",
		print_service_status_converting: "Dokumenttien muunto on meneillään...",
		print_service_status_formatting: "Dokumentin muotoilu tulostusta varten on meneillään...",
		admin_print_service_maximum_number_to_print: "Tulostettavien dokumenttien enimmäismäärä:",
		admin_print_service_maximum_size_to_print: "Tulostettavien tietojen enimmäismäärä (megatavuina):",
		admin_print_service_maximum_number_to_print_hover_help: "Määritä dokumenttien enimmäismäärä, jonka käyttäjät voivat tulostaa samalla kertaa. Oletusarvon mukainen enimmäismäärä on 50. Jos et halua rajoittaa tulostettavien dokumenttien määrää, määritä raja-arvoksi 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Rajoitus:</b> Tämä asetus ei ole tuettu IBM Content Manager OnDemand -ohjelmassa.<br/><br/>Määritä niiden tietojen enimmäismäärä, jotka voi tulostaa  IBM Daeja ViewONE -tulostuspalvelun avulla.<br /><br />Kunkin valitun dokumentin koko ei voi ylittää tätä määrää.<br/><br/>Oletusraja on 200 megatavua. Jos rajaksi asetetaan yli 200 megatavua, se saattaa vaikuttaa järjestelmän suorituskykyyn. Jos et halua rajoittaa tulostettavien dokumenttien kokoa, määritä raja-arvoksi 0",
		// error printing
		print_service_error_printing: "Tulostuksessa on ilmennyt virhe.",
		print_service_error_printing_userResponse: "Pyydä järjestelmän pääkäyttäjää tarkastamaan tulostuspalvelun lokitiedostot.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Valitut dokumentit ovat liian suuria tulostettaviksi",
		print_service_max_content_error_explanation: "Valitut dokumentit ylittävät tietojen ${0} megatavun raja-arvon.",
		print_service_max_content_error_userResponse: "Valitse vähemmän dokumentteja tai pienempiä dokumentteja ja tulosta uudelleen. Voit myös pyytää järjestelmän pääkäyttäjää lisäämään tässä työpöydässä yhdellä kertaa tulostettavien objektien yhteiskoon enimmäismäärää.",
		print_service_max_content_error_0: "objektien_enimmäiskoko",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Objektien tulostus ei onnistu.",
		print_service_max_number_selected_error_explanation: "Voit tulostaa enintään ${0} objektia kerrallaan. Tulostettavien objektien määrä on nyt ${1}.",
		print_service_max_number_selected_error_userResponse: "Valitse vähemmän objekteja ja yritä tulostaa objektit uudelleen. Voit myös pyytää järjestelmän pääkäyttäjää lisäämään tässä työpöydässä yhdellä kertaa tulostettavien objektien enimmäismäärää.",
		print_service_max_number_selected_error_0: "objektien_enimmäismäärä",
		print_service_max_number_selected_error_1: "objektien_määrä",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


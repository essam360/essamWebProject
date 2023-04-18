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
		welcome_user: "Witamy, ",
		about: "Informacje",
		all: "Wszystkie",
		help: "Pomoc",
		user_session: "Sesja użytkownika",
		user_session_for: "Sesja użytkownika dla ${0}",
		user_session_for_with_container: "Sesja użytkownika dla ${0} (${1})",
		tools: "Narzędzia",
		login: "Zaloguj się",
		logout: "Wyloguj",
		search: "Szukaj",
		saved_searches: "Zapisane wyszukiwania",
		content_analytics: "Analizuj treść",
		reset: "Resetuj",
		reset_hover: "Niezapisane dane na wszystkich kartach zostaną przywrócone do poprzednio zapisanych wartości.",
		reset_default: "Wyczyść wszystko",
		reset_default_hover: "Kasuje pole aktualnej etykiety na wszystkich kartach.",
		locale: "Ustawienia narodowe:",
		up: "W górę",
		down: "W dół",
		restore: "Przywróć",
		maximize: "Maksymalizuj",
		values_label: "Wartości",
		value_label: "Wartość:",
		path_label: "Ścieżka:",
		new_label: "Nowe:",
		back_label: "Wstecz",
		clear: "Wyczyść",
		set: "Ustaw...",
		browse: "Przeglądaj",
		work: "Praca",
		connect: "Połącz",
		documents: "Dokumenty:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM i logo IBM są znakami towarowymi IBM Corporation zarejestrowanymi w wielu systemach prawnych na całym świecie. Java oraz wszystkie znaki towarowe i logo dotyczące języka Java są znakami towarowymi lub zastrzeżonymi znakami towarowymi Oracle i/lub przedsiębiorstw afiliowanych. Technologia Oracle Outside In Technology podlega ograniczeniom licencyjnym i może być używana tylko w połączeniu z tą aplikacją. Program ten jest licencjonowany na warunkach umowy licencyjnej dołączonej do Programu.  Taka umowa licencyjna może znajdować się w katalogu Programu lub w bibliotece, w pliku \"License\" lub \"Non_IBM_License\", bądź też może zostać udostępniona w formie wydruku. Przed rozpoczęciem korzystania z Programu należy uważnie zapoznać się z treścią takiej umowy. Korzystanie z Programu oznacza zgodę Użytkownika na warunki zawarte w umowie. ",
		edit: "Edytuj",
		cancel: "Anuluj",
		close: "Zamknij",
		close_all: "Zamknij wszystkie karty",
		close_others: "Zamknij inne karty",
		ok: "OK",
		yes: "Tak",
		no: "Nie",
		open: "Otwórz",
		refresh: "Odśwież",
		refresh_cabinets: "Odśwież wszystkie moduły",
		delete_text: "Usuń",
		export_config: "Konfiguracja eksportu",
		description: "Opis",
		true_label: "Prawda",
		false_label: "Fałsz",
		error: "Błąd",
		error_reference_hover: "Wyszukaj dodatkowe informacje o tym błędzie w serwisie www.ibm.com.",
		url_label: "URL",
		default_label: "Domyślnie",
		ibm_label: "IBM",
		light_label: "Jasne",
		dark_label: "Ciemne",
		save: "Zapisz",
		saveAs: "Zapisz jako...",
		save_and_close: "Zapisz i zamknij",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Brak",
		Name: "Nazwa",
		"${NAME}": "Nazwa",
		mime_type: "Typ MIME",
		mime_type_contains_label: "Typ MIME zawiera",
		mime_type_header: "Typ MIME",
		mime_type_icon: "Ikona typu MIME",
		casesearch: "Sprawa",
		item: "Element",
		no_mime_type: "Ten element nie zawiera treści.",
		items_selected: "Wybrano elementów: ${0}.",
		requestor: "Zażądał(a)",
		scheduledStartTime: "Zaplanowana godzina uruchomienia",
		isRecurring: "Powtarzalne",
		weeks: "tyg.",
		days: "dni",
		hours: "godz.",
		endTime: "Godzina zakończenia",
		username: "Nazwa użytkownika",
		password: "Hasło",
		serverURL: "Adres URL serwera",
		enable: "Włącz",
		disable: "Wyłącz",
		finish: "Zakończ",
		previous: "Wstecz",
		next: "Dalej",
		schedule: "Harmonogram",
		removeFromThisList: "Usuń z tej listy",
		status: "Status",
		scheduledEndTime: "Zaplanowany czas zakończenia",
		type: "Typ",
		mode: "Tryb",
		startTime: "Godzina uruchomienia",
		createdBy: "Utworzone przez",
		nextScheduledTime: "Następny zaplanowany czas",
		id: "Identyfikator",
		duration: "Czas trwania",
		repeatCycle: "Częstotliwość",
		taskTypeName: "Typ zadania",
		to: "do",
		filter: "Filtr:",
		error_message: "Komunikat o błędzie",

        file_type: "Typ dokumentu",
        word_template_name: "Nazwa szablonu Word",
        excel_template_name: "Nazwa szablonu Excel",
        powerpoint_template_name: "Nazwa szablonu PowerPoint",
        template_description: "Opis szablonu",
        action_add_template: "Dodaj",
        action_change_template: "Edytuj",      
        action_edit_template_properties: "Właściwości",
        add_presentation_template: "Dodaj szablon prezentacji",
    	add_spreadsheet_template: "Dodaj szablon arkusza kalkulacyjnego",
    	add_doc_template: "Dodaj szablon dokumentu",    	
    	file_type_doc_hover: "Należy określić poprawny plik szablonu dokumentu procesora tekstu.<br><br>Poprawne typy MIME: ${0}",
    	file_type_doc_error: "Należy określić poprawny plik szablonu dokumentu procesora tekstu.<br><br>Typ MIME wybranego dokumentu: ${0}<br><br>Poprawne typy MIME: ${1}",
    	file_type_presentation_hover: "Należy określić poprawny plik szablonu prezentacji.<br><br>Poprawne typy MIME: ${0}",
    	file_type_presentation_error: "Należy określić poprawny plik szablonu prezentacji.<br><br>Typ MIME wybranego dokumentu: ${0}<br><br>Poprawne typy MIME: ${1}",
    	file_type_spreadsheet_hover: "Należy określić poprawny plik szablonu arkusza kalkulacyjnego.<br><br>Poprawne typy MIME: ${0}",
    	file_type_spreadsheet_error: "Należy określić poprawny plik szablonu arkusza kalkulacyjnego.<br><br>Typ MIME wybranego dokumentu: ${0}<br><br>Poprawne typy MIME: ${1}",
    	office_online_only_one_template_error: "Można wybrać tylko jeden plik.",
    	change_presentation_template: "Edytuj szablon prezentacji",
    	change_spreadsheet_template: "Edytuj szablon arkusza kalkulacyjnego",
    	change_doc_template: "Edytuj szablon dokumentu",
    	change_button: "Edytuj",
	    new_document_dialog_doc_title: "Nowy dokument",
	    new_document_dialog_presentation_title: "Nowa prezentacja",
	    new_document_dialog_spreadsheet_title: "Nowy arkusz kalkulacyjny",
	    new_document_dialog_title_label: "Tytuł:",
	    new_document_dialog_title_hover: "Wprowadź tytuł tego dokumentu.",
	    new_document_dialog_title_missing_message: "Należy podać tytuł.",
	    office_online_save_before_adding_templates_title: "Zapisz zmiany w repozytorium",
	    office_online_save_before_adding_templates_error: "Nie można dodać szablonów pakietu Office przed zapisaniem zmian wprowadzonych w repozytorium. Kliknij przycisk <b>Zapisz i zamknij</b>, a następnie otwórz ponownie repozytorium, aby dodać szablony pakietu Office.",
	    copy_to_OOS_dialog_doc_title: "Nowy dokument",
	    office_online_checkin_cancelcheckout_message: "Ten dokument jest obecnie edytowany w aplikacji Microsoft Office Online. Nie można wprowadzić/zwrócić dokumentu ani anulować pobrania, gdy jest on otwarty w Microsoft Office Online.",
	    new_document_classification: "Klasyfikacja:",
	    new_document_classification_help: "Przywraca klasę, właściwości i folder nadrzędny (o ile istnieje) dokumentu źródłowego. Podczas dodawania dokumentu przy użyciu szablonu wprowadzania automatycznie wybrany zostanie szablon wprowadzania dokumentu źródłowego, o ile będzie istniał. Właściwości dokumentu źródłowego będą używane jako domyślne, ale folder i klasa określone w szablonie wprowadzania zostaną zachowane.",
		new_document_classification_use_source_document: "Użyj dokumentu źródłowego:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Ikona typu ${0}",
		repository_name_and_type: "Nazwa i typ ${0}",
		select_class_label: "Wybierz ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Widok szczegółów",
		detail_view_button: "Szczegóły",
		magazine_view_button_tooltip: "Widok magazynu",
		magazine_view_button: "Magazyn",
		filmstrip_view_button_tooltip: "Widok taśmy filmowej",
		filmstrip_view_button: "Taśma filmowa",

		magazine_view_show: "Pokaż w widoku Magazyn",
		detail_view_show: "Pokaż w widoku Szczegóły",

		total_count_item: "element",
		total_count_items: "elementy",
		total_count_more_items: "Więcej elementów niż ${0}",

		extension_changed: "Rozszerzenie nazwy wybranego pliku nie zgadza się z oryginalnym.  Wybierz inny plik.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "Wybrana przeglądarka nie obsługuje wszystkich typów plików. Po zapisaniu tego odwzorowania przeglądarki mogą wystąpić problemy z wyświetlaniem dokumentów. Zaleca się, aby wybrać przeglądarkę, która po wybraniu opcji wszystkich typów plików, obsługuje wszystkie typy plików.<br><br><b>Wskazówka:</b> Następujące przeglądarki obsługują wszystkie typy plików:<ul><li>Przeglądarka apletów</li><li>Przeglądarka AJAX</li><li>Konwersja do HTML</li><li>Konwersja do PDF</li><li>Przeglądarka WWW</li></ul>",
		file_type_any: "Wszystkie typy plików",
		file_type_any_hover: "Wybierz tę opcję, aby użyć wybranej przeglądarki do wyświetlania wszystkich dokumentów, niezależnie od typu pliku. Ta opcja jest obsługiwana w przypadku następujących przeglądarek:<br><br><ul><li>Przeglądarka apletów</li><li>Przeglądarka AJAX</li><li>Konwersja do HTML</li><li>Konwersja do PDF</li><li>Przeglądarka WWW</li></ul><br><br><b>Pamiętaj:</b> Jeśli przez większość czasu zamierzasz korzystać z konkretnych przeglądarek, wówczas wszelkie tworzone odwzorowania, które korzystają z tej opcji, należy przesunąć na koniec mapy przeglądarek. ",
		file_type_input: "Nowy typ pliku:",

		mime_type_input: "Nowy typ MIME:",
		mime_type_input_invalid: "Nowy typ MIME nie może zawierać żadnego z następujących znaków: ,",
		mime_type_available: "Dostępne typy MIME",
		mime_type_selected: "Wybrane typy MIME",
		file_type_input: "Nowy typ pliku:",
		file_type_input_invalid: "Nowy typ pliku nie może zawierać żadnego z następujących znaków: ,",
		file_type_available: "Dostępne typy plików",
		file_type_selected: "Wybrane typy plików",
		file_type_header: "Typ pliku",
		viewer: "Przeglądarka:",
		viewer_viewer: "Przeglądarka",
		viewer_view: "Wyświetl",
		viewer_preview: "Podgląd",
		viewer_merge_and_split: "Scal i podziel",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Tylko podgląd",
		preview_only_label: "(podgląd)",
		preview_only_hover: "To odwzorowanie przeglądarki będzie używane wyłącznie po kliknięciu przez użytkownika przycisku <b>Podgląd</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "To repozytorium nie obsługuje przeglądania. Wybierz inne repozytorium.",

		repository_community_teamspace_message: "Inne repozytorium jest już wyznaczone jako repozytorium biblioteki społeczności. Jeśli chcesz dalej używać istniejącego repozytorium jako repozytorium biblioteki społeczności, wybierz opcję <b>Nie</b>, a następnie zapisz zmiany, aby zapobiec zastąpieniu istniejącego repozytorium przez to repozytorium.",

		favorites_empty: "Nie masz jeszcze ulubionych.",
		syncItems_empty: "Nie masz jeszcze żadnych zsynchronizowanych plików.",

		root_folder_id: "Id. folderu głównego",
		unified_searches: "Wyszukiwania w różnych repozytoriach:",
		max_results: "Liczba wyników:",
		direct_retrieve_enabled: "Wydobywanie bezpośrednie:",
		itemTypesToDisplay: "Typy elementów do wyświetlenia:",
		allItemTypes: "Wszystkie typy elementów",
		include_attr_group_name: "Opisy grup atrybutów w nazwach wyświetlanych atrybutów:",
		admin_repcfg_include_attr_group_name_hover: "Domyślnie opis grupy atrybutów jest uwzględniony w nazwach należących do niej atrybutów. Dzięki temu użytkownik widzi, do której grupy należy dany atrybut.<br>Na przykład użytkownicy mogą widzieć następującą nazwę atrybutu należącego do grupy: Ustawienia dokumentu.Typ dokumentu.<br><br>Wyłączenie tej opcji spowoduje, że jako nazwa atrybutu używany będzie tylko opis atrybutu.<br>Na przykład użytkownicy będą widzieć nazwę: Typ dokumentu.<br><br>Bez opisu grupy atrybutów użytkownicy mogą nie zorientować się, czy Typ dokumentu jest prostym atrybutem, czy atrybutem należącym do grupy.",
		documentItemTypesOnly: "Tylko typy elementów z modelu dokumentu",
		object_store: "Nazwa symboliczna składnicy obiektów:",
		object_store_display_name: "Nazwa wyświetlana składnicy obiektów:",
		teamspaceUpgradeMsg: "Obszary zespołu zostaną zaktualizowane po zapisaniu konfiguracji repozytorium. Jeśli masz wiele obszarów zespołów, aktualizacja może potrwać kilka minut.",
		synchUpgradeMsg: "Moduł synchronizacji tego repozytorium zostanie zaktualizowany po zapisaniu konfiguracji repozytorium.",
		protocol: "Protokół:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "Id. repozytorium CMIS:",
		cmis_url: "Adres URL dokumentu usługi dowiązania AtomPub CMIS:",
		trace_level: "Poziom śledzenia",
		trace_dir: "Katalog śledzenia",
		temp_dir: "Katalog tymczasowy",
		show_document_location: "Pokaż lokalizację dokumentu",
		max_folders: "Maks. liczba folderów",
		afp_conversion: "Konwersja AFP",
		line_conversion: "Konwersja danych wierszy",
		max_hits: "Maksymalna liczba trafień",
		folder_search_expresssion: "Wyrażenie wyszukiwania w folderze",
		max_item_types: "Maks. liczba typów elementów",
		max_worklists: "Maks. liczba list prac",
		update_storage_collection: "Zaktualizuj kolekcję pamięci masowej",
		include_mime_types_in_search_results: "Dołącz typy MIME do wyników wyszukiwania",
		object_type: "Typ obiektu",
		object_type_document: "Dokumenty",
		object_type_folder: "Foldery",
		file_label: "Plik:",
		plugin_jarfile_path_label: "Ścieżka pliku JAR:",
		plugin_classfolder_path_label: "Ścieżka pliku klasy:",
		plugin_classname_label: "Nazwa klasy:",
		plugin_id_label: "Identyfikator wtyczki:",
		class_label: "Klasa",
		configuration: "Konfiguracja",
		connect_repository: "Połącz...",
		server_type: "Typ serwera",
		timeout_in_seconds: "Limit czasu (w sekundach):",
		default_search_template: "Domyślne wyszukiwanie",
		search_filtered_properties: "Właściwości dostępne do wyszukiwania",
		property_contains_label: "Właściwość zawiera",
		class_contains_label: "Klasa zawiera",
		search_filtered_operators: "Operatory wyszukiwania",
		default_search_results: "Wyniki wyszukiwania",
		data_type: "Typ danych",
		status_bar: "Pasek statusu",
		operators_for: "Operatory dla:",
		currentUser: "Bieżący użytkownik",
		nameContains: "Nazwa zawiera",
		searchFor: "Wyszukaj:",
		server_autentication: "Uwierzytelnianie serwera (OAuth 2.0 z JWT)",
		standard_authentication: "Uwierzytelnianie standardowe (trzyetapowa autoryzacja OAuth2.0)",
		developer_authentication: "Uwierzytelnianie programisty",
		enterprise_id: "Id. przedsiębiorstwa:",
		public_key_id: "Id. klucza publicznego:",
		private_key_path: "Ścieżka do pliku klucza prywatnego:",
		server_user_email: "Adres e-mail użytkownika serwera",

		filter_builder_tooltip: "Zdefiniuj filtr",

		// Launch bar
		launchbar_home: "Otwórz stronę główną",
		launchbar_favorites: "Otwórz Ulubione",
		launchbar_browse: "Otwórz widok przeglądania",
		launchbar_browse_popup: "Otwórz listę podręczną przeglądania",
		launchbar_search: "Otwórz widok wyszukiwania",
		launchbar_search_popup: "Otwórz listę podręczną wyszukiwania",
		launchbar_teamspaces: "Otwórz widok obszarów zespołów",
		launchbar_teamspaces_popup: "Otwórz listę podręczną obszarów zespołów",
		launchbar_work: "Otwórz widok roboczy",
		launchbar_work_popup: "Otwórz listę podręczną pracy",
		launchbar_entry_templates: "Otwórz widok Szablony wprowadzania",
		launchbar_entry_templates_popup: "Otwórz listę podręczną Szablony wprowadzania",
		launchbar_admin: "Otwórz widok administracyjny",

		admin_sync_server: "Usługi synchronizacji",
		admin_settings: "Ustawienia",
		admin_interface_text: "Etykiety",
		admin_interface_text_desktop: "Pulpit:",
		admin_desktops: "Pulpity",
		admin_repositories: "Repozytoria",
		admin_mobile: "Urządzenia przenośne",
		admin_menus: "Menu",
		admin_reason_codes: "Przyczyny utajnienia",
		admin_plugins: "Wtyczki",
		admin_plugins_state_enabled: "Wtyczka jest włączona",
		admin_plugins_state_disabled: "Wtyczka jest wyłączona",
		admin_plugins_version: "Wersja:",
		admin_plugins_version_heading: "Wersja",
		admin_plugins_icon: "Ikona wtyczki",
		admin_viewer_mapping_icon: "Ikona odwzorowania przeglądarki",
		admin_viewer_defs: "Mapy przeglądarek",
		admin_viewer_dialog_title: "Odwzorowanie",
		admin_viewer_dialog_new_title: "Nowe odwzorowanie",
		admin_viewer_dialog_instructions: "Odwzorowanie określa, która przeglądarka będzie używana w celu wyświetlania plików w repozytorium. Istnieje możliwość tworzenia wielu odwzorowań w celu określenia różnych przeglądarek dla różnych typów plików. Aby zdefiniować odwzorowanie, można użyć typu MIME lub rozszerzenia pliku. Odwzorowania z rozszerzeniami plików będą odwzorowane na nazwy dokumentów. Na przykład odwzorowanie z typem pliku ustawionym na gif będzie odwzorowane na nazwy dokumentów, które kończą się rozszerzeniem .gif",
		admin_desktop_viewer_defs: "Mapa przeglądarek:",
		admin_desktop_viewer_defs_hover: "Mapa przeglądarek określa, która przeglądarka będzie używana w celu otwierania różnych typów dokumentów repozytorium.<br><br>Nowe mapy przeglądarek można tworzyć w sekcji <b>Mapy przeglądarek</b> narzędzia administracyjnego.",
		admin_desktops_used: "Używane w pulpitach",
		admin_desktop_additional_settings: "Dodatkowe ustawienia:",
		admin_default_desktop: "Ustaw jako domyślny pulpit",
		admin_default_desktop_header: "Domyślny pulpit",
		admin_layout_tab_title: "Układ",
		admin_desktop_icon: "Ikona pulpitu",

		// Themes
		admin_themes: "Kompozycje",
		admin_theme_list_instructions: "Można utworzyć kompozycję, aby ułatwić dostosowanie klienta WWW dla organizacji. Można utworzyć wiele kompozycji, jeśli konieczne jest użycie różnych kolorów, czcionek lub logo dla różnych pulpitów w środowisku.<br><br>Po utworzeniu kompozycji można ją zastosować dla pulpitu, konfigurując kompozycję na karcie <b>Wygląd</b> pulpitu.",
		admin_theme_instructions: "Utwórz kompozycję w celu kontrolowania kolorów i czcionek, które są wyświetlane w kliencie WWW. Dodatkowo można użyć kompozycji, aby zmienić logo, nazwę aplikacji oraz tekst praw autorskich, który jest wyświetlany w dzienniku na stronie i w banerze.",
		admin_theme_heading: "Kompozycja: <b>${0}</b>",
		admin_new_theme: "Nowa kompozycja",
		admin_text_theme: "Kompozycja",
		admin_delete_confirmation_themes: "Czy chcesz usunąć wybrane kompozycje?\n Wybrano ${0} kompozycji.",
		admin_theme_color: "Kolor",
		admin_theme_text: "Tekst",
		admin_theme_solid: "Pełny",
		admin_theme_gradient: "Gradient",
		admin_theme_box: "Ramka",
		admin_theme_color_label: "Kolor ${0}:",
		admin_theme_name_invalid: "Nazwa kompozycji nie może zawierać następujących znaków: *\\/: ? \" &lt; &gt; |",
		admin_theme_id_hover: "Identyfikator kompozycji musi być unikalny i nie można go zmienić po zapisaniu kompozycji.<br><br>Identyfikator może zawierać tylko znaki alfanumeryczne.",
		admin_theme_name_hover: "Nazwa nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatyczny",
		admin_theme_logo_url_hover: "Wprowadź adres URL pliku logo. Jeśli logo znajduje się na tym samym serwerze aplikacji WWW, co klient WWW, wprowadź względny adres URL, na przykład: /mycustomizations/banner_logo.png<br><br>Zalecane jest, aby logo miało przezroczyste tło.",
		admin_theme_color_palette_title_heading: "Paleta kolorów",
		admin_theme_color_palette_help_text: "Utwórz paletę kolorów dla kompozycji, używając wartości szesnastkowej lub próbnika kolorów. Można dodać tyle kolorów, ile jest wymagane.",
		admin_theme_color_add_button_label: "Dodaj kolor",
		admin_theme_color_remove_button_label: "Usuń kolor",
		admin_theme_global_title_heading: "Elementy używane w całej aplikacji",
		admin_theme_global_font: "Rodzina czcionek:",
		admin_theme_global_font_hover: "Wybierz czcionkę używaną w kliencie WWW. Czcionki są wymienione w kolejności pierwszeństwa - czcionka znajdująca się dalej na liście jest używana tylko wtedy, jeśli poprzednia czcionka nie jest zainstalowana na komputerze klienta.",
		admin_theme_global_framework_color_label: "Kolor środowiska:",
		admin_theme_global_framework_color_hover: "Wybierz kolor używany dla następujących elementów:<ul><li>Paski tytułu w oknach dialogowych</li><li>Kolor podświetlenia u góry wybranej karty</li><li>Ikony widoku listy treści (Widok szczegółów, Widok magazynu, Widok taśmy filmowej)</li></ul><br>Ten kolor nie jest używany dla separatorów między sekcjami klienta WWW. Aby zmienić kolor separatorów, należy utworzyć wtyczkę udostępniającą niestandardowy plik CSS.",
		admin_theme_color_global_toolbar: "Kolor globalnego paska narzędzi:",
		admin_theme_color_global_toolbar_hover: "Jeśli klient WWW zawiera globalny pasek narzędzi, wybierz kolor paska narzędzi.<br><br><b>Wskazówka:</b> Pasek narzędzi jest wyświetlany na banerze w górnej części klienta WWW, więc kolor paska narzędzi powinien być dopasowany do koloru banera.",
		admin_theme_global_selected_color: "Kolor zaznaczonego elementu:",
		admin_theme_global_selected_color_hover: "Wybierz kolor, który ma być używany, gdy elementy są zaznaczone w drzewie przeglądania, drzewie wyszukiwania oraz na liście treści.<br><br>Kolor w dymku (kolor używany po umieszczeniu przez użytkownika wskaźnika myszy nad pozycją) jest pobierany z tego koloru.",
		admin_theme_global_link_color: "Kolor odsyłacza:",
		admin_theme_global_link_color_hover: "Wybierz kolor używany dla wszystkich adresów URL w kliencie WWW, które można kliknąć. Na przykład ten kolor jest używany w odsyłaczach Więcej informacji wyświetlanych w kliencie WWW.",
		admin_theme_login_title_heading: "Elementy strony logowania",
		admin_theme_page_background_label: "Kolor tła strony logowania:",
		admin_theme_login_page_background_hover: "Wybierz kolor wyświetlany za panelem logowania.",
		admin_theme_login_pane_background_label: "Kolor tła panelu logowania:",
		admin_theme_login_pane_background_hover: "Wybierz kolor wyświetlany w panelu logowania. Ten kolor powinien uzupełniać kolor tła strony logowania.",
		admin_theme_text_color: "Kolor tekstu:",
		admin_theme_login_pane_text_color_hover: "Wybierz kolor używany dla tekstu panelu logowania. Ten kolor jest używany jako tekst powitania i etykiet pól. Ten kolor powinien być czytelny na tle koloru tła panelu logowania.",
		admin_theme_copyright_text: "Tekst praw autorskich:",
		admin_theme_copyright_text_hover: "Określ, czy tekst praw autorskich ma być wyświetlany na stronie logowania.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Brak tekstu praw autorskich",
		admin_theme_banner_title_heading: "Elementy baneru",
		admin_theme_text_icons_color: "Kolor tekstu i ikon:",
		admin_theme_icon_color_label: "Kolor ikon:",
		admin_theme_shadow_label: "Cień:",
		admin_theme_banner_text_icons_hover: "Wybierz kolor używany dla tekstu i ikon na banerze. Ten kolor powinien być czytelny względem koloru tła baneru.",
		admin_theme_banner_product_name_label: "Nazwa produktu:",
		admin_theme_banner_product_name_hover: "Podczas tworzenia pulpitu można określić nazwę niestandardową wyświetlaną dla aplikacji. Jeśli nie zostanie podana nazwa niestandardowa, wtedy nazwą produktu będzie IBM Content Navigator. Określ, czy ma być używana nazwa aplikacji, która jest zdefiniowana na pulpicie, czy zamiast nazwy używany ma być obraz.",
		admin_theme_banner_product_name_desktop_defined_label: "Użyj nazwy z pulpitu",
		admin_theme_banner_product_name_image: "Użyj niestandardowego logo (adres URL)",
		admin_theme_background_color_label: "Kolor tła:",
		admin_theme_style_label: "Styl:",
		admin_theme_banner_color_hover: "Wybierz kolor używany dla baneru w górnej części aplikacji.<br><br><b>Wskazówka:</b> Upewnij się, że kolor tekstu na banerze pasuje do koloru tła banera.",
		admin_theme_buttons_title_heading: "Przyciski",
		admin_theme_navigation_title_heading: "Elementy nawigacji",
		admin_theme_navigation_icon_selected_label: "Kolor wybranej ikony:",
		admin_theme_navigation_background_hover: "Wybierz kolor używany dla tła paska nawigacyjnego składników.",
		admin_theme_navigation_icon_color_hover: "Wybierz kolor używany dla ikon na pasku nawigacyjnym składników. W domyślnym układzie pulpitu ten kolor powinien kontrastować z tłem menu rozwijanego składników. W klasycznym układzie pulpitu ten kolor powinien kontrastować z tłem paska nawigacyjnego składników. ",
		admin_theme_navigation_icon_selected_hover: "Wybierz kolor używany dla wybranego składnika na pasku nawigacyjnym składników. Kolor powinien uzupełniać kolor ikon i kolor tła paska nawigacyjnego składników.<br><br>W klasycznym układzie pulpitu ten kolor używany jest po zatrzymaniu wskaźnika nad paskiem nawigacyjnym składników. ",
		admin_theme_button_background_color_hover: "Wybierz kolor używany dla tła przycisków.",
		admin_theme_button_style_hover: "Wybierz styl przycisków.",
		admin_theme_button_text_icon_color_hover: "Wybierz kolor używany dla tekstu i obrazów na przyciskach.",
		admin_theme_no_logo_label: "Brak logo",
		admin_theme_custom_logo_label: "Niestandardowe logo (adres URL)",
		admin_theme_banner_type: "Styl wypełnienia banera:",
		admin_theme_banner_type_hover: "Określ, czy baner powinien mieć wypełnienie pełne, czy gradientowe. W przypadku wyboru wypełnienia gradientowego kolor wskazany jako kolor tła banera będzie najciemniejszym kolorem użytym na banerze.<br><br><b>Wskazówka:</b> Upewnij się, że kolor tekstu na banerze pasuje do koloru tła banera.",
		admin_theme_icon: "Ikona motywu",
		admin_theme_buttons_and_links_title_heading: "Przyciski, pola i odsyłacze",
		admin_theme_button_style_label: "Styl przycisków:",
		admin_theme_theme_style_label: "Styl kompozycji:",
		admin_theme_theme_style_hover: "Wybierz styl, który ma być podstawą dla kompozycji. Podczas tworzenia i edytowania kompozycji możesz w każdej chwili zmienić styl. Po zmianie stylu przywracane są domyślne ustawienia kompozycji.",
		admin_theme_accent_color_label: "Kolor akcentu:",
		admin_theme_accent_color_hover: "Wybierz kolor paska u góry okna dialogowego i jednocześnie kółka sygnalizującego ładowania.",
		admin_theme_global_toolbar_text_color_label: "Kolor tekstu globalnego paska narzędzi:",
		admin_theme_global_toolbar_text_color_hover: "Jeśli klient WWW zawiera globalny pasek narzędzi, wybierz kolor tekstu na pasku narzędzi.",
		admin_theme_banner_text_color_hover: "Wybierz kolor tekstu na banerze.",
		admin_theme_banner_icon_color_hover: "Wybierz kolor ikon na banerze.",
		admin_theme_button_color_label: "Kolor:",
		admin_theme_button_color_hover: "Wybierz kolor używany dla następujących elementów:<ul><li>Paski tytułu w oknach dialogowych</li><li>Kolor podświetlenia u góry wybranej karty</li><li>Ikony widoku listy treści (Widok szczegółów, Widok magazynu, Widok taśmy filmowej)</li><li>Przyciski, pola i odsyłacze</li></ul>Na podstawie tego koloru określany jest kolor używany, gdy użytkownik zatrzyma wskaźnik nad przyciskiem. Ten kolor nie jest używany dla separatorów między sekcjami klienta WWW. Aby zmienić kolor separatorów, należy utworzyć wtyczkę udostępniającą niestandardowy plik CSS.",
		admin_theme_theme_style_col_header: "Styl kompozycji",

		admin_syncserver_consistency_checker: "Program do sprawdzania spójności:",
		admin_syncserver_consistency_checker_hover: "Uruchom program do sprawdzania spójności w celu upewnienia się, że bazy danych usług synchronizacji zawierają aktualne informacje dotyczące statusu każdego z elementów znajdujących się na serwerze. Na przykład uruchom program do sprawdzania spójności po wyłączeniu bazy danych usług synchronizacji w celu uzyskania informacji na temat dokumentów zaktualizowanych w repozytorium w trakcie trwania wyłączenia.",
		admin_syncserver_consistency_checker_button: "Uruchom program do sprawdzania spójności",
		admin_syncserver_consistency_checker_started: "Uruchomiono:",
		admin_syncserver_consistency_checker_ended: "Zakończono:",
		admin_syncserver_consistency_checker_duration: "Czas trwania:",
		admin_syncserver_consistency_checker_items_processed: "Przetworzone elementy synchronizacji:",
		admin_syncserver_consistency_checker_items_processed_success: "Pomyślnie przetworzone elementy synchronizacji:",
		admin_syncserver_consistency_checker_items_discovered: "Wykryte nowe elementy repozytorium:",
		admin_syncserver_consistency_checker_change_updates: "Łącznie aktualizacji:",
		admin_syncserver_consistency_checker_state: "Stan:",
		admin_syncserver_consistency_checker_state_done: "Gotowe",
		admin_syncserver_consistency_checker_state_running: "Uruchomione",
		admin_syncserver_consistency_checker_user: "Wysłane przez:",
		admin_syncserver_consistency_checker_scheduled: "Zaplanowane:",

		admin_syncserver_dbcleanup: "Czyszczenie bazy danych",
		admin_syncserver_dbcleanup_hover: "Uruchom narzędzie do czyszczenia bazy danych w celu usunięcia wszelkich nieużywanych urządzeń i pozycji, które nie są już synchronizowane z poziomu bazy danych.",
		admin_syncserver_dbcleanup_button: "Czyszczenie bazy danych",
		admin_syncserver_dbcleanup_state_done: "Gotowe",
		admin_syncserver_dbcleanup_state_running: "Uruchomione",
		admin_syncserver_dbcleanup_started: "Uruchomiono:",
		admin_syncserver_dbcleanup_ended: "Zakończono:",
		admin_syncserver_dbcleanup_state: "Stan:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Usunięte repozytoria:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Usunięte zsynchronizowane elementy:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Urządzenia usunięte:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Urządzenia, które utraciły ważność:",

		admin_syncserver_publicSyncUrl: "Publiczny adres URL usług synchronizacji:",
		admin_syncserver_publicSyncUrl_hover: "Podaj adres URL, za pośrednictwem którego repozytoria mogą komunikować się z usługami synchronizacji programu IBM Content Navigator. Domyślny format adresu URL to http://publ_adres_URL_synch:numer_portu/sync/notify.",

		admin_syncserver_managed: "Ustawienia klienta synchronizacji:",
		admin_syncserver_managed_hover: "Użytkownicy nie mogą zmienić tych ustawień w kliencie synchronizacji IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Poziomy folderów do zsynchronizowania",
		admin_syncserver_managed_subfolder_hover: "Określ maksymalną liczbę folderów, jaka będzie synchronizowana podczas synchronizacji folderu nadrzędnego. Na przykład, jeśli użytkownik określi 3 poziomy folderów, to zsynchronizowany zostanie folder wybrany do synchronizacji oraz 2 poziomy podfolderów.<br><br>Upewnij się, że środowisko jest przygotowane na obsługę ruchu związanego z synchronizacją takiej liczby folderów.",
		admin_syncserver_managed_subfolder_all: "Wszystkie podfoldery",
		admin_syncserver_managed_subfolder_none: "Bez podfolderów",
		admin_syncserver_managed_subfolder_no_more: "Ograniczone poziomy",
		admin_syncserver_managed_subfolder_levels: "foldery",
		admin_syncserver_managed_schedule: "Harmonogram synchronizacji",
		admin_syncserver_managed_schedule_hover: "Upewnij się, że środowisko jest przygotowane na obsługę ruchu związanego z synchronizacją według zadanego harmonogramu.<br><br>Maksymalny interwał wynosi 24 godziny lub 1440 minut.<br><br>Użytkownik może wymusić synchronizację poza harmonogramem, klikając w kliencie przycisk <b>Synchronizuj teraz</b>.",
		admin_syncserver_managed_schedule_manual: "Synchronizacja ręczna",
		admin_syncserver_managed_schedule_continuous: "Synchronizacja ciągła",
		admin_syncserver_managed_schedule_every: "Synchronizacja w określonych odstępach czasu",
		admin_syncserver_managed_schedule_minutes: "min",
		admin_syncserver_managed_schedule_hours: "godz.",

		// redaction codes
		admin_new_reason_code: "Nowa przyczyna utajnienia",		
		admin_reason_code_name_invalid: "Nazwa przyczyny utajnienia nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "Opis nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "Opis nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Nazwa nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Opis:",
		admin_reason_code_applications_hover: "Lista aplikacji Datacap, które odwołują się do tej przyczyny utajnienia.",
		admin_reason_code_applications: "Aplikacje Datacap",
		admin_delete_confirmation_reason_codes: "Czy chcesz usunąć wybrane przyczyny utajnienia?",
		admin_delete_confirmation_reason_code: "Czy chcesz usunąć wybraną przyczynę utajnienia?",
		admin_reason_code_heading: "Przyczyna utajnienia: <b>${0}</b>",
		admin_reason_code_list_instructions: "Przyczyny utajnienia określają, dlaczego dane objęte szczególną ochroną są zabezpieczone przez ich zasłonięcie. Każda przyczyna określa typ danych objętych szczególną ochroną, które zostały ukryte dla użytkowników ogólnych.",
		admin_reason_code_instructions: "Przyczynę utajnienia można utworzyć dla każdego typu danych objętych szczególną ochroną. Następnie można użyć tej przyczyny w strategii utajnienia do zdefiniowania użytkowników, którzy mogą widzieć te dane i którzy mogą tworzyć lub modyfikować utajnione treści.",
		admin_reason_code_applications_label: "Aplikacje Datacap",
		admin_reason_code_repositories: "Repozytoria",
		admin_reason_code_repositories_label: "Repozytoria",
		admin_reason_code_repositories_hover: "Lista repozytoriów ICN, które odwołują się do tej przyczyny utajnienia.",
		admin_reason_code_repositories_default_value: "Nie ustawiono",
		admin_reason_code_description_label: "Opis",
		admin_reason_code_applications_default_value: "Nie ustawiono",
		admin_redaction_reasons: "Przyczyny utajnienia",
		admin_redactions: "Utajnienie na podstawie roli",
		admin_redactions_policies_roles: "Strategie i role",
		admin_reasons: "Przyczyny",
		admin_reason_code_id: "Identyfikator",
		admin_reason_code_id_hover: "Nie można edytować identyfikatora.  Można go skopiować do schowka",
		// Role based administration
		admin_rba: "Administrowanie pulpitami w oparciu o role",
		admin_rba_mobile_access_enabled: "Ten pulpit jest dostępny z urządzeń mobilnych.",
		admin_rba_mobile_access_disabled: "Ten pulpit nie jest dostępny z urządzeń mobilnych.",
		admin_rba_confirm_delete_multiple: "Czy chcesz usunąć wybrane role administracyjne?",
		admin_rba_confirm_delete_single: "Czy chcesz usunąć wybraną rolę administracyjną?",
		admin_rba_delete_multi_role_desktop: "Co najmniej jedna z wybranych ról jest przypisana do pulpitu. Przed usunięciem ról należy je usunąć z pulpitów.",
		admin_rba_delete_single_role_desktop: "Wybrana rola jest przypisana do pulpitu ${0}. Aby można było usunąć rolę, należy usunąć ją z pulpitu.",
		admin_desktop: "Pulpit",
		admin_rba_instructions: "Można tworzyć role administracyjne pulpitu i zarządzać nimi. Z rolami takimi powiązane są uprawnienia nadane administratorom pulpitu.",
		admin_rba_not_used: "${0} nie jest używana w żadnym pulpicie.",
		admin_rba_desktops: "<b>${0} jest używana w następujących pulpitach:</b>",
		admin_rba_new_role: "Nowa rola",
		admin_rba_name_invalid: "Nazwa roli administracyjnej nie może zawierać żadnego z następujących znaków: * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "Opis nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "Opis nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Nazwa nie może zawierać następujących znaków: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Opis:</b> ${0}",
		admin_rba_membership: "Członkostwo",
		admin_rba_general_priv: "Ogólne",
		admin_rba_appearance_priv: "Wygląd",
		admin_rba_desktop_config_priv: "Konfiguracja pulpitu",
		admin_rba_app_name_priv: "Nazwa aplikacji",
		admin_rba_theme_priv: "Kompozycja",
		admin_rba_viewer_map_priv: "Mapa przeglądarki",
		admin_rba_merge_split_priv: "Scal i podziel",
		admin_rba_sync_svc_priv: "Usługi synchronizacji",
		admin_rba_menus_priv: "Menu",
		admin_rba_edit_svc_priv: "Usługi edycji",
		admin_rba_toolbars_priv: "Paski narzędzi",
		admin_rba_ctx_menus_priv: "Menu kontekstowe",
		admin_rba_office_ribbon_priv: "Komendy na pasku wstążki pakietu MS Office",
		admin_rba_office_menues_priv: "Menu kontekstowe pakietu MS Office",
		admin_rba_addl_settings_priv: "Dodatkowe ustawienia",
		admin_rba_mobile_priv: "Urządzenia przenośne",
		admin_rba_add_doc_dlg_priv: "Okno dialogowe dodawania dokumentów",
		admin_rba_doc_mgmt_priv: "Zarządzanie dokumentami",
		admin_rba_def_redaction_priv: "Domyślna opcja utajniania",
		admin_rba_add_photos_priv: "Dodaj zdjęcia z aparatu fotograficznego i biblioteki zdjęć",
		admin_rba_time_stamp_priv: "Znacznik czasu",
		admin_rba_add_docs_folders_priv: "Dodaj dokumenty i utwórz foldery w repozytorium",
		admin_rba_open_docs_priv: "Otwórz dokumenty w innych aplikacjach",
		admin_rba_office_config_priv: "Konfiguracja pakietu Office",
		admin_rba_tab_label_priv: "Etykieta karty IBM ECM",
		admin_rba_feature_sel_priv: "Wybór składnika",
		admin_rba_general_config_priv: "Konfiguracja ogólna",
		admin_rba_favorites_priv: "Ulubione",
		admin_rba_add_options_priv: "Dodaj opcje do grupy Edytuj",
		admin_rba_browse_priv: "Przeglądaj",
		admin_rba_outlook_int_priv: "Integracja z programem Outlook",
		admin_rba_search_priv: "Szukaj",
		admin_rba_layout_priv: "Układ",
		admin_rba_case_priv: "Sprawa",
		admin_rba_desktop_feat_priv: "Składniki pulpitu",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Wyświetlane składniki",
		admin_rba_branding_priv: "Znakowanie",
		admin_rba_home_priv: "Katalog główny",
		admin_rba_main_color_priv: "Kolor główny",
		admin_rba_sec_color_priv: "Kolor dodatkowy",
		admin_rba_teamspaces_priv: "Obszary zespołu",
		admin_rba_rbr_priv: "Utajnienie na podstawie roli",
		admin_rba_et_mgr_priv: "Menedżer szablonów wprowadzania",
		admin_rba_policies_roles_priv: "Zarządzaj strategiami i rolami",
		admin_rba_work_priv: "Praca",
		admin_rba_reasons_priv: "Kody przyczyn",
		admin_rba_tasks_priv: "Zadania asynchroniczne",
		admin_rba_auth_priv: "Uwierzytelnianie",
		admin_rba_all_privs: "Wszystkie uprawnienia",
		admin_rba_some_privs: "Niektóre uprawnienia",
		admin_rba_no_privs: "Brak uprawnień",
		admin_add_users_groups_priv: "Dodaj użytkowników i grupy",
		admin_url_features_priv: "Zarządzaj składnikami URL",
		admin_plugin_features_priv: "Zarządzaj składnikami wtyczki",
		admin_addl_components_priv: "Dodatkowe komponenty",
		admin_global_toolbar_priv: "Globalny pasek narzędzi",
		admin_status_bar_priv: "Pasek statusu",
		admin_refresh_message: "Aby używać zaktualizowanych danych, należy odświeżyć stronę w przeglądarce.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Aby używać zaktualizowanego pulpitu domyślnego, należy odświeżyć stronę w przeglądarce.",
		admin_desktop_refresh_message: "Aby używać zaktualizowanego pulpitu, należy odświeżyć stronę w przeglądarce.",
		admin_action_open: "Otwórz",
		admin_action_edit: "Edytuj",
		admin_action_copy: "Kopiuj",
		admin_action_delete: "Usuń",
		admin_action_copy: "Kopiuj",
		admin_action_new: "Utwórz nowe",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Ten identyfikator jest już używany. Podaj unikalny identyfikator.",

		admin_searchable_properties_for: "Właściwości dostępne do wyszukiwania dla:",
		admin_repository_new: "Nowe repozytorium",
		admin_desktop_new: "Nowy pulpit",
		admin_desktop_file_documents: "Wymagaj od użytkowników zapisywania nowych dokumentów i folderów w folderze",
		admin_desktop_file_documents_hover: "Wybierz tę opcję, aby wymóc na użytkownikach wybranie folderu podczas dodawania elementów do repozytorium. Jeśli ta opcja nie zostanie wybrana, użytkownicy mogą dodawać dokumenty (IBM FileNet P8) lub dokumenty i foldery (IBM Content Manager) bez umieszczania ich w folderze.",
		admin_desktop_show_security_tab: "Pokazuj ustawienia zabezpieczeń podczas dodawania i wprowadzania",
		admin_desktop_show_security_hover: "<b>Tylko użytkownicy IBM FileNet P8.</b>  Wybierz tę opcję, aby zezwolić użytkownikom na edytowanie zabezpieczeń dokumentów i folderów podczas dodawania lub wprowadzania elementów do tego pulpitu.",
		admin_desktop_configure_security_inheritance: "Zezwól użytkownikom na skonfigurowanie dziedziczenia zabezpieczeń folderów",
		admin_desktop_configure_security_inheritance_hover: "<b>Tylko użytkownicy IBM FileNet P8.</b>  Wybierz tę opcję, jeśli chcesz, aby użytkownicy mieli możliwość dostosowania dostępu do elementów przez sterowanie dziedziczeniem zabezpieczeń folderów. Po wybraniu tej opcji użytkownicy mogą określić, czy użytkownicy lub grupy mogą dziedziczyć zabezpieczenia z:<ul><li>Folderu</li><li>Folderu i jego podfolderów</li><li>Folderu i wszystkich jego podfolderów</li></ul>",
		admin_desktop_appearance: "Wygląd",
		admin_desktop_appearance_instruction: "Można dostosować wygląd pulpitu, zmieniając stronę logowania i baner, które są wyświetlane dla pulpitu.",
		admin_desktop_layout: "Układ:",
		admin_desktop_layout_hover: "Układ określa, które składniki mogą być wyświetlane w kliencie WWW i w jaki sposób rozmieszczona jest zawartość klienta WWW.<br><br><b>Wskazówka:</b> Można zdefiniować niestandardowe układy, tworząc wtyczki. Aby możliwe było wybranie niestandardowego układu, należy zarejestrować wtyczkę w narzędziu administracyjnym.",
		admin_desktop_layout_default: "Domyślnie",
		admin_desktop_layout_custom: "Niestandardowy",
		admin_desktop_enable_workflow_email: "Włącz obsługę powiadomień e-mail z przepływu pracy FileNet P8 na tym pulpicie",
		admin_desktop_enable_workflow_email_hover: "Tylko dla użytkowników FileNet P8. Wybierz tę opcję, aby umożliwić użytkownikom otwieranie klienta WWW z adresów URL zawartych w powiadomieniach wysyłanych pocztą e-mail przez silnik procesów.<br /><br />Jeśli ta opcja nie będzie włączona dla żadnego z pulpitów, użytkownicy nie będą mogli logować się do klienta WWW pod adresami URL przesyłanymi w powiadomieniach.<br /><br />Jeśli ta opcja będzie włączona dla więcej niż jednego pulpitu i więcej niż jeden pulpit będzie spełniał kryteria określone w adresie URL w powiadomieniu, klient WWW użyje pierwszego pulpitu spełniającego kryteria. ",
		admin_desktop_prevent_create_new_search: "Uniemożliwiaj użytkownikom tworzenie wyszukiwań",
		admin_desktop_prevent_create_new_search_hover: "Ta opcja powoduje, że użytkownicy mogą korzystać tylko z istniejących wyszukiwań i nie mogą tworzyć potencjalnie niezoptymalizowanych wyszukiwań otwartych.</br></br>To ustawienie nie wpływa na obszary zespołów. Prawo do tworzenia wyszukiwań w obszarze zespołu zależy od roli, jaką użytkownik ma w tym obszarze.",
		admin_desktop_prevent_create_new_unified_search: "Uniemożliwiaj użytkownikom tworzenie wyszukiwań w różnych repozytoriach",
		admin_desktop_prevent_create_new_unified_search_hover: "Ta opcja umożliwia ograniczenie czynności dostępnych dla użytkowników do stosowania tylko istniejących wyszukiwań w różnych repozytoriach oraz do tworzenia otwartych wyszukiwań w różnych repozytoriach, które mogą nie podlegać optymalizacji.",
		admin_desktop_hide_entry_template_not_found_warning: "Ukryj ostrzeżenie wyświetlane, gdy nie znaleziono powiązanego szablonu wprowadzania",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Wybierz tę opcję, jeśli chcesz ukryć komunikat ostrzeżenia wyświetlany po edycji właściwości elementu, gdy szablon wprowadzania powiązany z elementem nie został znaleziony.",
		admin_desktop_show_class_role_security_selection: "Zezwalaj użytkownikom na konfigurowanie zabezpieczeń opartych na rolach w szablonach wprowadzania",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Tylko użytkownicy IBM FileNet P8.</b> Wybierz tę opcję, jeśli użytkownicy mają mieć możliwość konfigurowania szablonów wprowadzania z zabezpieczeniami opartymi na rolach podczas definiowania zabezpieczeń dokumentów i folderów korzystających z takich szablonów. Wybranie tej opcji spowoduje, że osoby edytujące szablony wprowadzania będą mogli określać, czy obiekty zabezpieczeń ról mają zastosowanie do definicji szablonu.",
		admin_desktop_show_primary_multi_part: "Otwórz w przeglądarce tylko dokument główny",
		admin_desktop_show_primary_multi_part_hover: "<b>Tylko użytkownicy IBM FileNet P8.</b> Wybierz tę opcję, jeśli w przeglądarce ma być otwierany tylko główny plik dokumentu.  Z dokumentem może być skojarzony więcej niż jeden plik. Ta opcja spowoduje, że otwierany będzie tylko główny plik skojarzony z dokumentem.",
		admin_desktop_redaction_save_mode: "Domyślna opcja utajniania:",
		admin_desktop_redaction_save_mode_hover: "Wybierz domyślny tryb zapisywania z utajnianiem dla przeglądarki ViewONE Virtual:</br>* Zawsze pytaj użytkownika: spowoduje, że z chwilą włączenia trybu utajnienia pojawi się okno dialogowe z pytaniem, czy użytkownik chce utworzyć nową wersję, nowy dokument, czy pobrać treść.</br>* Zwróć jako nową wersję: spowoduje, że utajniona treść będzie zawsze zapisywana jako nowa wersja istniejącego dokumentu.</br>* Zapisz jako nowy dokument: spowoduje, że utajniona treść będzie zawsze zapisywana jako zupełnie nowy dokument.</br>* Pobierz i zapisz na kliencie: spowoduje pobranie utajnionej treści na system kliencki.",
		admin_desktop_redaction_save_mode_user_select: "Zawsze pytaj użytkownika",
		admin_desktop_redaction_save_mode_new_version: "Zwróć jako nową wersję",
		admin_desktop_redaction_save_mode_new_document: "Zapisz jako nowy dokument",
		admin_desktop_redaction_save_mode_local_content: "Pobierz i zapisz na kliencie",

		admin_desktop_document_add_mode: "Okno dialogowe dodawania dokumentów:",
		admin_desktop_document_add_mode_hover: "Określ okno dialogowe, które ma być używane przy dodawaniu dokumentów utworzonych przez program IBM Content Navigator:<ul><li>Nowy dokument utajniony na stałe</li><li>Nowy dokument utworzony przez scalenie lub podział</li><li>Nowy dokument Microsoft Office</li><li>Nowy dokument usługi Edit</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Dodaj dokument",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Dodaj dokument, korzystając z szablonu wprowadzania",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Scal i podziel:",
		admin_desktop_merge_and_split_enable_hover: "Określ, czy użytkownicy, którzy uzyskują dostęp do tego pulpitu, mają mieć możliwość scalania i dzielenia dokumentów przy użyciu przeglądarki obsługującej tę funkcję.",

		admin_desktop_merge_and_split_show_checkin: "Zwróć się do użytkowników, aby podczas wprowadzania zmian w dokumencie podawali wartości właściwości.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Wybranie tej opcji spowoduje, że gdy użytkownik będzie wprowadzał/zwracał zmiany w dokumencie w trybie scalania i dzielenia, wyświetlane będzie okno dialogowe wprowadzania/zwracania.",

		admin_desktop_available_categories: "Dostępne składniki",
		admin_desktop_selected_categories: "Wybrane składniki",

		admin_layout_banner_title: "Baner i strona logowania",
		admin_layout_title: "Układ",

		admin_desktop_application_name: "Nazwa aplikacji:",
		admin_desktop_application_name_hover: "Określ nazwę aplikacji wyświetlaną na banerze.<br><br>Wskazówka: Zdefiniuj nazwę aplikacji dla innych języków na karcie Etykiety/Etykiety pulpitu.",
		admin_desktop_theme: "Kompozycja:",
		admin_desktop_theme_hover: "Określ, czy ma być używana domyślna kompozycja IBM Content Navigator, czy kompozycja niestandardowa dla tego pulpitu. Aby użyć kompozycji niestandardowej, należy utworzyć kompozycję w sekcji <b>Kompozycje</b> narzędzia administracyjnego.",
		admin_desktop_login_logo: "Logo strony logowania:",
		admin_desktop_login_logo_hover: "Jeśli zamierzasz zmienić logo wyświetlane na stronie logowania, możesz podać adres URL pliku logo. Zalecane jest jednak użycie kompozycji niestandardowej, aby zmienić logo.",
		admin_desktop_login_logo_url_hover: "Wprowadź adres URL pliku logo. Jeśli logo znajduje się na tym samym serwerze aplikacji WWW, co klient WWW, wprowadź względny adres URL, na przykład: /mycustomizations/login_logo.png<br><br>Wymiary logo nie powinny przekraczać: szerokość - 200 pikseli i wysokość - 150 pikseli.<br><br>Zalecane jest, aby logo miało przezroczyste tło.",
		admin_desktop_banner_logo: "Logo banera:",
		admin_desktop_banner_logo_hover: "Jeśli zamierzasz zmienić logo wyświetlane na banerze, możesz podać adres URL pliku logo. Zalecane jest jednak użycie kompozycji niestandardowej, aby zmienić logo.",
		admin_desktop_banner_logo_url_hover: "Wprowadź adres URL pliku logo. Jeśli logo znajduje się na tym samym serwerze aplikacji WWW, co klient WWW, wprowadź względny adres URL, na przykład: /mycustomizations/banner_logo.png<br><br>Wymiary logo nie powinny przekraczać: szerokość - 72 piksele i wysokość - 36 pikseli.<br><br>Zalecane jest, aby logo miało przezroczyste tło.",
		admin_desktop_banner_background_color: "Kolor tła banera:",
		admin_desktop_banner_background_color_hover: "Jeśli zamierzasz zmienić kolor tła banera, możesz określić kolor niestandardowy. Zalecane jest jednak użycie kompozycji niestandardowej, aby zmienić kolor banera.",
		admin_desktop_banner_background_color_custom_hover: "Określ kolor banera aplikacji jako kolor szesnastkowy.",
		admin_desktop_banner_application_name_color: "Kolor czcionki nazwy aplikacji:",
		admin_desktop_banner_application_name_color_hover: "Jeśli zamierzasz zmienić kolor nazwy aplikacji, możesz określić kolor niestandardowy. Zalecane jest jednak użycie kompozycji niestandardowej, aby zmienić kolor nazwy aplikacji.",
		admin_desktop_banner_application_name_color_custom_hover: "Określ kolor nazwy aplikacji jako kolor szesnastkowy.",
		admin_desktop_banner_menu_color: "Kolor ikon na banerze:",
		admin_desktop_banner_menu_color_hover: "Zmiana koloru tła baneru może spowodować konieczność zmiany schematu kolorystycznego ikon na banerze, tak aby były lepiej widoczne. Wybierz, czy ma być wyświetlana jasna, czy ciemna wersja ikon na banerze.<br><br>Zalecane jest jednak użycie kompozycji niestandardowej, aby zmienić kolor ikon.",
		admin_desktop_login_page_content: "Treść strony logowania:",
		admin_desktop_login_page_content_hover: "Jeśli zamierzasz wyświetlać dodatkowe informacje na stronie logowania, takie jak ogłoszenia o wyłączeniach systemu lub o miejscach, w których użytkownicy mogą uzyskać pomoc dotyczącą haseł i nazw użytkowników, wówczas określ adres URL treści, którą zamierzasz wyświetlać.",
		admin_desktop_login_page_content_url_hover: "Wprowadź adres URL treści strony logowania. Jeśli treść znajduje się na tym samym serwerze aplikacji WWW, co klient WWW, wprowadź względny adres URL, na przykład: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Reguły dotyczące haseł:",
		admin_desktop_password_rules_hover: "Jeśli zamierzasz udostępnić użytkownikom wskazówki dotyczące tworzenia haseł, np. informacje o ograniczonej liczbie znaków lub minimalnej liczbie znaków, możesz podać adres URL strony, która zawiera reguły dotyczące haseł.",
		admin_desktop_password_rules_url_hover: "Wprowadź adres URL treści reguł dotyczących haseł. Jeśli treść znajduje się na tym samym serwerze aplikacji WWW, co klient WWW, wprowadź względny adres URL, na przykład: /mycustomizations/passwords.html",
		admin_desktop_help_url: "Adres URL pomocy dla użytkownika końcowego:",
		admin_desktop_help_url_hover: "Można użyć pomocy dla użytkownika końcowego dostarczanej razem z programem IBM Content Navigator albo kierować użytkowników do niestandardowego systemu pomocy, wykonując jedną z następujących czynności.<br><br><ul><li>Kierując do niestandardowego systemu pomocy</li><li>Dodając pomoc do instancji Centrum wiedzy IBM wdrażanej wraz z programem IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Wprowadź adres URL niestandardowego systemu pomocy. IBM Content Navigator dołącza łańcuch index.jsp?content=/com.ibm.usingeuc.doc/ oraz nazwę pliku do podanego adresu URL.  Aby działały odsyłacze \"Dodatkowe informacje\" w interfejsie, system pomocy musi zawierać pliki o tych samych nazwach, co zintegrowana pomoc dla użytkownika końcowego. ",
		admin_desktop_deprecated_appearance_title: "Nieaktualne ustawienia",
		admin_desktop_deprecated_appearance_instructions: "W przypadku użycia motywu niestandardowego te ustawienia są nadpisywane przez motyw niestandardowy. Należy zmigrować te ustawienia do motywu niestandardowego, który oferuje stylizację bardziej szczegółową niż ustawienia w tej sekcji. Ponadto motyw niestandardowy może być używany na wielu pulpitach.",

		admin_desktop_plugins_title: "Włącz lub wyłącz wtyczki dla tego pulpitu.",
		admin_desktop_plugins_enable_all_plugins: "Włącz wszystkie wdrożone wtyczki, aby można ich było używać na tym pulpicie",
		admin_desktop_plugins_select_plugins: "Wybierz wdrożone wtyczki, które mają być dostępne do użycia na tym pulpicie",
		admin_desktop_plugins_select_plugin: "Wybierz wtyczkę",

		admin_desktop_layout_features: "Wyświetlane elementy:",
		admin_desktop_layout_features_hover: "Wybierz składniki, do których użytkownicy mają mieć dostęp z tego pulpitu. Składniki są wyświetlane w kolejności, w jakiej są wymienione.<br><br>Po wybraniu składnika można dostosować niektóre zachowania składników w ramach pulpitu, takie jak domyślne repozytorium, które jest wybierane dla składnika.",
		admin_desktop_layout_default_repository: "Repozytorium domyślne:",
		admin_desktop_layout_default_repository_layout_hover: "Określ repozytorium wybierane domyślnie, gdy użytkownik otwiera ten składnik.",
		admin_desktop_layout_document_thumbnails: "Miniatury dokumentów:",
		admin_desktop_layout_document_thumbnails_hover: "Określ, czy miniatury dokumentów będą wyświetlane dla dokumentów w panelu informacji o dokumentach.<br><br>Wyświetlanie miniatur może obniżyć wydajność klienta WWW.",
		admin_desktop_layout_show_filmstrip_view: "Widok taśmy filmowej:",
		admin_desktop_layout_show_filmstrip_view_hover: "Określ, czy zezwalać użytkownikom na przełączanie wyświetlania treści do widoku taśmy filmowej.<br><br>Widok taśmy filmowej generuje podgląd każdego dokumentu wybranego przez użytkownika. Użycie widoku taśmy filmowej może jednak obniżyć wydajność klienta WWW. Ponadto należy skonfigurować przeglądarkę konwersji do HTML w celu wyświetlenia podglądu dokumentu.",
		admin_enabled: "Włącz",
		admin_disabled: "Wyłącz",
		admin_include: "Dołącz",
		admin_exclude: "Wyklucz",
		admin_layout_teamspaces_default_repository: "Obszary zespołu:",
		admin_layout_entry_templates_default_repository: "Szablony wprowadzania:",
		admin_layout_other_features_default_repository: "Wyszukiwanie i przeglądanie:",
		admin_layout_work_default_repository: "Praca:",
		admin_layout_default_feature: "Składnik domyślny:",
		admin_default_category_placeholder: "Wybierz składnik",
		admin_layout_default_feature_hover: "Określ składnik, który jest wyświetlany, gdy użytkownicy zalogują się do tego pulpitu.",
		admin_layout_default_feature_warning: "Zmiana składnika domyślnego może wpłynąć na czas ładowania aplikacji.",
		admin_layout_feature_list_header: "Składnik",
		admin_layout_show_statusbar: "Pasek statusu:",
		admin_layout_show_statusbar_hover: "Określ, czy wyświetlany jest pasek statusu w dolnej części pulpitu.<br><br>W przypadku ukrycia paska statusu użytkownicy nie widzą informacji na temat zdarzeń, które nie są błędami, takich jak:<ul><li>Dodano dokument do repozytorium.</li><li>Wyszukiwanie zwróciło 59 dokumentów.</li></ul>",
		admin_layout_show_magazineview: "Widok magazynu:",
		admin_layout_show_magazineview_hover: "Określ, czy zezwalać użytkownikom na przełączanie wyświetlania listy treści na widok magazynu.<br><br>Widok magazynu zwiększa wysokość każdego wpisu na liście treści, co zmniejsza liczbę elementów, które można wyświetlić na liście treści w tym samym czasie.",
		admin_layout_show_detailsview: "Widok szczegółów:",
		admin_layout_show_detailsview_hover: "Określ, czy zezwalać użytkownikom na przełączanie wyświetlania listy treści na widok szczegółów.<br><br>Widok szczegółów maksymalizuje liczbę wierszy widocznych na liście treści.",
		admin_feature_config_docinfopane_label: "Panel informacji o dokumencie:",
		admin_feature_config_docinfopane_hoverhelp: "Określ, czy użytkownicy mogą uzyskać dostęp do panelu informacyjnego dokumentów w tym składniku.",
		admin_feature_config_docinfopane_default_label: "Domyślne zachowanie:",
		admin_feature_config_docinfopane_expanded: "Rozwinięte",
		admin_feature_config_docinfopane_collapsed: "Zwinięte",
		admin_feature_config_docinfopane_expand_on_select: "Rozwiń, gdy element jest wybrany",
		admin_layout_features_title: "Składniki pulpitu",
		admin_layout_features_instructions: "Określ składniki, do których użytkownicy mogą uzyskać dostęp z tego pulpitu.  Dodatkowo można dostosować zachowanie każdego składnika znajdującego się na pulpicie.",
		admin_layout_components_title: "Dodatkowe komponenty pulpitu",
		admin_layout_components_instructions: "Można wyłączyć niektóre komponenty pulpitu, jeśli potrzebny jest uproszczony interfejs lub aby poprawić wydajność klienta WWW.",
		admin_layout_featureconfig_instructions: "Wybierz składnik do skonfigurowania",
		admin_layout_featureconfig_no_configuration: "Konfiguracja składników nie jest dostępna.",
		admin_layout_featureconfig_label: "Konfiguracja dla składnika ${0}",
		admin_layout_featureconfig_title: "Konfiguracja składników",
		admin_layout_featureconfig_taskManagerURL: "Aby użyć tego składnika, należy aktywować i skonfigurować program IBM Content Navigator do połączenia z usługą menedżera zadań. Włącz usługę menedżera zadań w sekcji <b>Ustawienia</b> tego narzędzia administracyjnego.",
		admin_feature_config_show_my_checkouts_label: "Panel Moje pobrania:",
		admin_feature_config_show_my_checkouts_hoverhelp: "Panel Moje pobrania umożliwia użytkownikom uruchomienie wyszukiwania dla wszystkich pozycji, które pobrali oni z konkretnego repozytorium. Określ, czy użytkownicy mogą uzyskać dostęp do panelu Moje pobrania ze składnika Katalog główny.<br/><br/><b>Ograniczenie:</b> Ta funkcja wymaga dysponowania co najmniej jednym repozytorium produktu IBM Content Manager, IBM FileNet P8 lub OASIS CMIS powiązanym z tym pulpitem.",

		admin_feature_config_default_repository_icon_text: "Repozytorium domyślne",
		admin_show: "Pokaż",
		admin_hide: "Ukryj",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Z pulpitu administracyjnego nie można usunąć składnika administrowania",
		admin_warning_label: "Ostrzeżenie:",
		admin_layout_show_globaltoolbar: "Globalny pasek narzędzi:",
		admin_layout_show_globaltoolbar_hover: "Określ, czy ma być wyświetlany pasek narzędzi w banerze w górnej części pulpitu.<br><br>Globalny pasek narzędzi zawiera czynności, które umożliwiają użytkownikowi dodawanie dokumentów, folderów i blokad do repozytorium. Dostępne czynności zależą od repozytorium, do którego użytkownik jest podłączony.",
		admin_interface_text_name_label: "Typ etykiety",

		admin_interface_text_label_description: "Istnieje możliwość dostosowania tekstu wyświetlanego w niektórych obszarach klienta WWW. Etykiety są wyświetlane dla wszystkich repozytoriów i pulpitów w konfiguracji. Wprowadź tekst, który będzie widoczny w interfejsie w polu Bieżąca etykieta.<br><br><b>Ważne:</b> Wszelkie zmiany dotyczące etykiet nie będą widoczne w narzędziu administracyjnym.",
		admin_interface_text_label_action: "Etykiety działań",
		admin_interface_text_label_action_description: "Etykiety działań są widoczne na przyciskach oraz w menu w kliencie WWW. Dla każdego rodzaju repozytorium w systemie można zdefiniować inne etykiety działań.",
		admin_interface_text_label_application: "Etykiety aplikacji",
		admin_interface_text_label_application_description: "Etykiety aplikacji są wyświetlane w całym kliencie WWW.",
		admin_interface_text_label_system: "Etykiety właściwości systemowych",
		admin_interface_text_label_system_description: "Właściwości systemowe, które są wyświetlane, są zależne od repozytorium. Istnieje możliwość dostosowywania etykiet wyświetlanych dla właściwości systemowych, które są powiązane z dokumentami i folderami w repozytoriach.",
		admin_interface_text_label_desktop: "Etykiety pulpitu",
		admin_interface_text_label_desktop_description: "Jeśli w pulpicie dostosowano nazwę aplikacji, wówczas ten tekst można również dostosować w językach innych niż angielski. Możliwe jest także dostosowywanie nazw przestrzeni aplikacji IBM FileNet P8 w pulpicie.",

		admin_interface_text_system_label: "Etykieta systemowa",
		admin_interface_text_current_label: "Aktualna etykieta",
		admin_interface_text_default_label_heading: "Etykieta domyślna",
		admin_interface_text_default_label: "Etykieta domyślna:",
		admin_interface_text_displayed_in_label: "Wyświetlane dla",
		admin_interface_text_displayed_in_document_folder: "Dokumenty i foldery",
		admin_interface_text_displayed_in_document: "Dokumenty",
		admin_interface_text_displayed_in_folder: "Foldery",
		admin_interface_text_displayed_in_admin_application_space: "Etykieta przestrzeni aplikacji",
		admin_interface_text_displayed_in_desktop: "Etykieta składnika dla urządzeń przenośnych",
		admin_interface_text_displayed_in_admin_application_name: "Nazwa aplikacji",

		admin_new_desktop: "Nowy pulpit",
		admin_new_repository: "Nowe repozytorium",
		admin_new_menu: "Nowe menu",
		admin_new_viewer_mapping: "Nowa mapa przeglądarek",
		admin_new_mapping_label: "Nowe odwzorowanie",
		admin_new_icon_mapping: "Nowe odwzorowanie ikony",
		admin_viewer_mapping_list_instructions: "Istnieje możliwość określenia przeglądarek, których klient WWW używa w celu wyświetlania różnych typów treści. Mapa przeglądarek określa, które typy MIME są skojarzone z poszczególnymi przeglądarkami, które mają być używane. Jeśli wymagane jest korzystanie z różnych przeglądarek dla różnych pulpitów, wówczas można utworzyć wiele map przeglądarek.",
		admin_viewer_mapping_instructions: "Określ przeglądarki, z których zamierzasz korzystać w celu otwierania plików. Jeśli zamierzasz korzystać z przeglądarki niestandardowej, wówczas należy zintegrować przeglądarkę jako wtyczkę przed dodaniem jej do mapy przeglądarek.<br><br><b>Ważne:</b> Gdy użytkownik otworzy dokument, klient WWW przeszukuje listę odwzorowań przeglądarki, aby znaleźć pierwszą przeglądarkę, która może otworzyć dokument - odpowiednio do systemu operacyjnego, z którego korzysta użytkownik, i odpowiednio do repozytorium, do którego użytkownik jest podłączony. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nowa wtyczka",
		admin_menu_list_instructions: "W celu kontrolowania czynności dostępnych dla użytkowników można utworzyć niestandardowe paski narzędzi i menu kontekstowe. Użytkownik nie może definiować menu domyślnych, ale może tworzyć kopie istniejących menu w celu ograniczenia dostępnych czynności lub tworzenia niestandardowych czynności zdefiniowanych we wtyczkach.<br><br>Jeśli wymagane jest utworzenie nowego typu menu, należy zdefiniować to menu we wtyczce.",
		admin_menu_id_hover: "Identyfikator musi być unikalny i nie można zmienić identyfikatora po zapisaniu menu.<br><br>Identyfikator może zawierać tylko znaki alfanumeryczne; rozróżniana jest wielkość liter.",
		admin_menu_id_disabled_hover: "Nie można zmieniać identyfikatora menu. Jeśli konieczne jest korzystanie z innego identyfikatora, wówczas należy utworzyć nowe menu.",
		admin_menu_default_instructions: "Nie można edytować tego menu, ponieważ jest to menu domyślne. Aby zmodyfikować to menu, należy utworzyć jego kopię.",
		admin_menu_toolbar_instructions: "Możliwe jest ograniczenie czynności dostępnych dla tego paska narzędzi lub dodanie niestandardowych czynności zdefiniowanych we wtyczce. Można również uporządkować czynności, dodając separatory do paska narzędzi.",
		admin_menu_toolbar_custom_instructions: "Ten pasek narzędzi jest zdefiniowany przez wtyczkę. Jeśli zamierzasz przeprowadzić edycję tego paska narzędzi, wówczas zaktualizuj wtyczkę lub utwórz kopię paska narzędzi.",
		admin_menu_context_menu_instructions: "Możliwe jest ograniczenie czynności dostępnych dla tego menu kontekstowego lub dodanie niestandardowych czynności zdefiniowanych we wtyczce. Można również uporządkować czynności, dodając separatory i podmenu do menu kontekstowego.",
		admin_menu_context_menu_custom_instructions: "To menu kontekstowe jest zdefiniowane przez wtyczkę. Jeśli zamierzasz przeprowadzić edycję tego menu kontekstowego, wówczas zaktualizuj wtyczkę lub utwórz kopię menu kontekstowego.",
		admin_desktop_list_instructions: "Możliwe jest utworzenie wielu pulpitów, aby zapewnić różnym użytkownikom dostęp do treści, których potrzebują. Na przykład: można utworzyć pulpit, który umożliwia użytkownikom wyszukiwanie treści lub pulpit, który zapewnia użytkownikom dostęp do pojedynczego repozytorium. ",
		admin_plugin_updated: "Konfiguracja wybranej wtyczki uległa zmianie. Musisz odświeżyć stronę w przeglądarce, aby zmiany odniosły skutek.",
		admin_repository_ci_heading: "Repozytorium Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Repozytorium FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Repozytorium Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Repozytorium Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Repozytorium Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Repozytorium Box: <b>${0}</b>",
		admin_repository_generic_heading: "Repozytorium: <b>${0}</b>",

		admin_delete_confirmation_desktops: "Czy chcesz usunąć wybrane pulpity?\nWybrana liczba pulpitów: ${0}.",
		admin_delete_confirmation_menus: "Czy chcesz usunąć wybrane menu?\nWybrana liczba menu: ${0}.",
		admin_delete_confirmation_repositories: "Czy chcesz usunąć wybrane repozytoria?\nWybrana liczba repozytoriów: ${0}.",
		admin_delete_confirmation_viewer_mappings: "Czy chcesz usunąć wybrane mapy przeglądarek?  Wybrano map: ${0}.",
		admin_delete_confirmation_icon_mappings: "Czy chcesz usunąć wybrane konfiguracje ikon?\nWybrana liczba konfiguracji ikon: ${0}.",
		admin_delete_confirmation_plugins: "Czy chcesz usunąć wybrane wtyczki?\nWybrana liczba wtyczek: ${0}.",
		admin_delete_confirmation: "Czy chcesz usunąć wybrane pozycje?\nWybrana liczba pozycji: ${0}.",

		admin_viewer_mapping_id_hover: "Identyfikator musi być unikalny i nie można zmienić identyfikatora po zapisaniu mapy przeglądarek.<br><br>Identyfikator może zawierać tylko znaki alfanumeryczne; rozróżniana jest wielkość liter.",
		admin_viewer_mapping_id_disabled_hover: "Nie można zmieniać identyfikatora mapy przeglądarek. Jeśli konieczne jest korzystanie z innego identyfikatora, wówczas należy utworzyć nową mapę przeglądarek.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Nie można usunąć domyślnego pulpitu.",

		admin_desktop_heading: "Pulpit: <b>${0}</b>",
		admin_menu_toolbar_heading: "Pasek narzędzi: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Niestandardowy pasek narzędzi: <b>${0}</b>",
		admin_menu_context_menu_heading: "Menu kontekstowe: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Niestandardowe menu kontekstowe: <b>${0}</b>",
		admin_plugin_heading: "Wtyczka: <b>${0}</b>",
		admin_plugin_instructions: "Wtyczka może być plikiem JAR lub skompilowanym plikiem klasy.<br/><br/><b>Ważne:</b> Serwer aplikacji WWW IBM Content Navigator musi mieć dostęp do pliku wtyczki w lokalnym systemie plików lub za pośrednictwem adresu URL.",
		admin_plugin_list_instructions: "Należy użyć narzędzia administracyjnego w celu zarejestrowania wtyczek dla klienta WWW. Jeśli wtyczka wymaga dodatkowej konfiguracji, parametry konfiguracji zostaną wyświetlone po zarejestrowaniu wtyczki.<br /><br /><b>Ważne:</b> Edycja wtyczki, do której odwołuje się inny obszar narzędzia administracyjnego, np. menu, może spowodować nieprawidłowe działanie wtyczki. Ponadto wtyczki są wywoływane w kolejności, w jakiej są wymienione. Jeśli wtyczka wymaga uruchomienia przed inną wtyczką, upewnij się, że wtyczki są wymienione w kolejności, w jakiej mają zostać uruchomione.",
		admin_plugin_cannot_delete: "Wybranych wtyczek nie można usunąć, ponieważ zależą od nich inne wtyczki.<br/>Wybrane wtyczki: ${0}<br/>Zależne wtyczki: ${1}",
		admin_plugin_cannot_disable: "Wybrane wtyczki nie mogą zostać wyłączone, ponieważ zależą od nich inne wtyczki.<br/>Wybrane wtyczki: ${0}<br/>Zależne wtyczki: ${1}",
		admin_plugin_cannot_add: "Wtyczki nie można dodać, ponieważ niektórych wtyczek, od których jest zależna, brakuje lub są wyłączone. Brakujące lub wyłączone wtyczki: ${0}",
		admin_plugin_cannot_enable: "Wybranych wtyczek nie można włączyć, ponieważ niektórych wtyczek, od których są zależne, brakuje lub są wyłączone.<br/>Wybrane wtyczki: ${0}<br/>Brakujące lub wyłączone wtyczki: ${1}",
		admin_plugin_save_order: "Zapisz kolejność",
		admin_plugin_load: "Ładuj",
		admin_plugin_load_hover: "Określa adres URL wtyczki",
		admin_plugin_file_hover: "Jeśli plik JAR wtyczki znajduje się w lokalnym systemie plików, możliwe jest wprowadzenie pełnej ścieżki lub adresu URL pliku wtyczki. Jeśli plik JAR wtyczki znajduje się na serwerze zdalnym, konieczne jest wprowadzenie adresu URL pliku wtyczki.",
		admin_plugin_classfolderpath_hover: "Skompilowany plik klasy musi znajdować się na serwerze aplikacji WWW produktu IBM Content Navigator.<br/><br/>Wprowadź w pełni kwalifikowaną ścieżkę folderu, w którym kompilowane i generowane są klasy wtyczek.<br/><br/>Ścieżka nie może zawierać nazwy pakietu klasy wtyczki. Na przykład domyślna ścieżka dla przykładowej klasy wtyczki w systemie Windows to C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Wprowadź pełną nazwę klasy Java w pliku klasy, która powinna zostać załadowana i wywołana jako klasa wtyczki.<br/>Na przykład nazwa klasy dla przykładowej wtyczki to com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Pliku JAR wtyczki nie znaleziono pod podanym adresem URL. Upewnij się, że plik JAR znajduje się na serwerze aplikacji WWW oraz że adres URL i nazwa pliku są poprawne.",
		admin_plugin_for_repository_not_loaded: "Nie można edytować tego repozytorium. Wtyczka, która definiuje i obsługuje ten typ repozytorium nie jest załadowana. Na karcie Wtyczki edytuj wtyczkę, aby upewnić się, że jest poprawnie skonfigurowana i załadowana.",
		admin_plugin_repository_types: "Typy repozytoriów:",
		admin_plugin_viewers: "Przeglądarki:",
		admin_plugin_features: "Składniki:",
		admin_plugin_layouts: "Układy:",
		admin_plugin_not_available: "Niedostępne",
		admin_plugin_config_params: "Parametry konfiguracji:",
		admin_viewer_def_heading: "Mapa przeglądarek: <b>${0}</b>",
		admin_users_and_groups: "Użytkownicy i grupy",
		admin_general: "Ogólne",
		admin_logging: "Rejestrowanie",
		admin_authentication: "Uwierzytelnianie",		
		admin_rolebase_role: "Rola:",
		admin_settings_logging_instructions: "Można użyć rejestrowania do rozwiązywania problemów z klientem WWW. Można zawęzić zakres rejestrowania, jeśli wiadomo, że problem występuje w konkretnej klasie Java lub dla konkretnego użytkownika. Informacje o błędach są zapisywane w plikach dzienników błędów serwera aplikacji WWW.",
		admin_settings_logging_instructions2: "<b>Ustawienia rejestrowania debugowania</b><br />Jeśli wiadomo, że problem występuje dla konkretnego komputera hosta klienta lub użytkownika, można ukierunkować rejestrowanie debugowania na ten komputer lub użytkownika. Można przechwycić informacje debugowania w środowisku produkcyjnym bez znacznego wpływu na wydajność systemu.<br /><br /><b>Ważne:</b> Jeśli zostanie określony użytkownik lub komputer hosta klienta, ustawienie to zastępuje wszystkie inne ustawienia rejestrowania. Po przechwyceniu wymaganych informacji należy ustawić tę opcję na wartość <b>Brak</b>, aby wznowić standardowe rejestrowanie dla swojego środowiska.",
		admin_settings_export_config_hover: "Wyeksportuj bieżące informacje o konfiguracji systemu do pliku w celu użycia go w programie IBM Support Assistant Data Collector. Plik jest zapisywany w lokalizacji zdefiniowanej właściwością systemową Java user.home.",
		admin_logging_level: "Rejestrowanie na poziomie aplikacji:",
		admin_logging_level_hover: "Poziomy rejestrowania określają ilość informacji zapisywanych na serwerze. Wybranie opcji <b>Błąd</b> powoduje przechwytywanie najmniejszej ilości informacji do rejestrowania. Wybranie opcji <b>Debuguj</b> powoduje przechwytywanie największej ilości informacji.<br /><br />W środowisku produkcyjnym nie należy wybierać opcji <b>Debuguj</b>, chyba że taka instrukcja zostanie wydana przez dział wsparcia IBM dla oprogramowania.",
		admin_logging_level_0: "Bez rejestrowania",
		admin_logging_level_1: "Błąd",
		admin_logging_level_2: "Ostrzeżenie",
		admin_logging_level_3: "Informacja",
		admin_logging_level_4: "Debuguj",
		admin_logging_classes: "Rejestrowanie na poziomie klasy Java:",
		admin_logging_classes_hover: "Domyślnie wszystkie klasy i pakiety Java znajdują się w dziennikach błędów serwera aplikacji WWW. Można jednak określić, które klasy lub pakiety mają być uwzględnione lub wykluczone z rejestrowania. Można użyć dzienników błędów serwera aplikacji WWW, aby określić, które klasy mają być uwzględnione lub wykluczone.<br><br>Jeśli wiadomo, że problem występuje w konkretnej klasie, można specjalnie uwzględnić tę klasę w plikach dziennika. Jeśli użytkownik uwzględni klasę w dziennikach błędów, wszystkie pozostałe klasy zostaną wykluczone z pliku dziennika.<br><br>Jeśli wiadomo, że problem nie występuje w klasie i użytkownik chce zmniejszyć wielkość pliku dziennika, można wykluczyć klasę z plików dziennika.",
		admin_logging_classes_include: "Dołącz",
		admin_logging_classes_include_all: "Wszystkie klasy",
		admin_logging_classes_include_specified: "Konkretne klasy",
		admin_logging_classes_include_specified_msg: "Określ klasy do dołączenia.",
		admin_logging_classes_exclude: "Wyklucz",
		admin_logging_classes_exclude_none: "Brak",
		admin_logging_classes_exclude_specified: "Konkretne klasy",
		admin_logging_classes_exclude_specified_msg: "Określ klasy do wykluczenia.",
		admin_logging_debug: "Rejestruj do debugowania dla:",
		admin_logging_debug_hover: "<b>Ważne:</b> Przejrzyj pliki dziennika serwera aplikacji WWW przed określeniem adresu IP komputera hosta klienta lub użytkownika. Podana wartość musi być zgodna z wartością, która jest wyświetlana w pliku dziennika.",
		admin_logging_debug_none: "Brak (domyślne)",
		admin_logging_debug_host: "Komputery hosta klienta (adresy IP)",
		admin_logging_debug_host_msg: "Podaj adres IP jednego lub większej liczby komputerów, dla których zamierzasz rejestrować informacje debugowania. Użyj przecinka w celu oddzielenia adresów IP.<br /><br /><b>Ważne:</b> Przejrzyj pliki dziennika serwera aplikacji WWW przed określeniem adresu IP. Podana wartość musi być zgodna z wartością, która jest wyświetlana w pliku dziennika.",
		admin_logging_debug_user: "Użytkownicy",
		admin_logging_debug_user_msg: "Podaj nazwę użytkownika dla jednego lub większej liczby użytkowników, dla których zamierzasz rejestrować informacje debugowania. Użyj przecinka w celu oddzielenia nazw użytkowników.<br /><br /><b>Ważne:</b> Przejrzyj pliki dziennika serwera aplikacji WWW przed określeniem nazwy użytkownika. Podana wartość musi być zgodna z wartością, która jest wyświetlana w pliku dziennika.",

		admin_office_settings_logging_instructions: "Można użyć rejestrowania do rozwiązywania problemów z programem IBM Content Navigator for Microsoft Office. Można zawęzić zakres rejestrowania, jeśli wiadomo, że problem występuje w konkretnej klasie lub dla konkretnego użytkownika. Informacje o błędach są zapisywane do plików dziennika aplikacji na serwerze IBM Content Navigator dla komputerów hosta klienta Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Ustawienia rejestrowania debugowania</b><br />Jeśli wiadomo, że problem występuje dla konkretnego komputera hosta klienta lub użytkownika programu IBM Content Navigator for Microsoft Office, można ukierunkować rejestrowanie debugowania na ten komputer lub użytkownika. Można przechwycić informacje debugowania w środowisku produkcyjnym bez znacznego wpływu na wydajność systemu. <br /><br /><b>Ważne:</b> Jeśli zostanie określony użytkownik lub komputer hosta klienta, ustawienie to zastępuje wszystkie inne ustawienia rejestrowania. Po przechwyceniu wymaganych informacji należy ustawić tę opcję na wartość <b>Brak</b>, aby wznowić standardowe rejestrowanie dla środowiska IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Ważne:</b> Przejrzyj pliki dziennika komputera klienta przed określeniem adresu IP komputera hosta klienta lub użytkownika. Podana wartość musi być zgodna z wartością, która jest wyświetlana w pliku dziennika. ",
		admin_office_logging: "Rejestrowanie produktu Office",
		admin_office_logging_classes: "Rejestrowanie na poziomie klasy:",
		admin_office_logging_classes_hover: "Domyślnie wszystkie klasy i pakiety są uwzględnione w dziennikach błędów programu IBM Content Navigator for Microsoft Office. Można jednak określić, które klasy lub pakiety mają być uwzględnione lub wykluczone z rejestrowania. Można użyć dzienników komputera klienta, aby określić, które klasy mają być uwzględnione lub wykluczone.<br /><br />Jeśli wiadomo, że problem występuje w konkretnej klasie, można specjalnie uwzględnić tę klasę w plikach dziennika. Jeśli użytkownik uwzględni klasę w dziennikach błędów, wszystkie pozostałe klasy zostaną wykluczone z plików dziennika. <br /><br />Jeśli wiadomo, że problem nie występuje w klasie i użytkownik chce zmniejszyć wielkość pliku dziennika, można wykluczyć klasę z plików dziennika. ",
		admin_office_logging_debug_hover: "<b>Ważne:</b> Przejrzyj pliki dziennika komputera klienta przed określeniem adresu IP komputera hosta klienta lub użytkownika. Podana wartość musi być zgodna z wartością, która jest wyświetlana w pliku dziennika.",
		admin_office_logging_additional_settings: "Dodatkowe ustawienia:",
		admin_office_logging_additional_settings_hover: "Określ dodatkowe ustawienia",
		admin_office_logging_file_size: "Wielkość pliku dziennika",
		admin_office_logging_file_size_hover: "Określ wielkość nowego pliku dziennika tworzonego przez program IBM Content Navigator for Microsoft Office. Gdy plik dziennika osiągnie maksymalną wielkość, nazwa bieżącego dziennika zostanie zmieniona w celu uwzględnienia daty (w formacie RRRRMMdd) i kolejnego numeru pliku (na przykład ICNExcelAddin-20121116-5.log) i tworzony jest nowy plik dziennika. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Pokaż stos wywołań w oknach dialogowych",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Opcjonalnie można wyświetlić informacje stosu wywołań w oknach dialogowych komunikatów w celu ułatwienia rozwiązywania problemów. Nawet jeśli ta opcja nie zostanie włączona, szczegółowe informacje stosu wywołań są zawsze uwzględniane w dziennikach błędów programu IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Ikony stanu",
		admin_icon_state_icon: "Ikona stanu",
		admin_icon_state: "Stan",
		state_contains_label: "Stan zawiera",
		admin_icon_state_instructions: "Istnieje możliwość dostosowania ikon wyświetlanych obok dokumentów, folderów i elementów pracy w repozytoriach.<br><br><b>Wskazówka:</b> Istnieje możliwość określenia, czy wymagane jest wyświetlenie ikon stanu dla poszczególnych repozytoriów w konkretnym środowisku.",
		admin_icon_state_dialog_title: "Odwzorowanie ikon stanu",
		admin_icon_state_dialog_instructions: "Wybrany stan można odwzorować na predefiniowaną ikonę, która jest dostępna z klientem WWW lub na ikonę niestandardową.",

		admin_icon_mapping_twisty: "Ikony typów MIME",
		admin_icon_mapping_dialog_title: "Odwzorowania ikon",
		admin_icon_mapping: "Odwzorowania ikon",
		admin_icon_mapping_instructions: "Listę typów MIME można odwzorować na predefiniowaną ikonę, która jest dostępna z klientem WWW, albo na ikonę niestandardową.",
		admin_icon_mapping_list_instructions: "Istnieje możliwość dostosowywania ikon wyświetlanych dla różnych typów MIME, które są przechowywane w repozytorium. Klient WWW korzysta z ikon w kolejności, w jakiej znajdują się na liście. Jeśli typ MIME jest zawarty na liście więcej niż jeden raz, wówczas używana będzie pierwsza ikona skojarzona z typem MIME.",
		admin_icon_mapping_icon_label: "Której ikony chcesz użyć?",
		admin_icon_mapping_file_name: "Ikona niestandardowa:",
		admin_icon_mapping_file_name_heading: "Ikona niestandardowa",
		admin_icon_mapping_file_name_placeholder: "Określ adres URL ikony",
		admin_icon_mapping_file_name_hover: "Wprowadź adres URL ikony. Jeśli ikona znajduje się na tym samym serwerze aplikacji WWW, co klient WWW, wprowadź względny adres URL. na przykład: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Ikona predefiniowana:",
		admin_icon_mapping_class_name_heading: "Ikona predefiniowana",
		admin_icon_mapping_class_name_hover: "Wybierz ikonę, która została udostępniona z klientem WWW.",
		admin_icon_mapping_class_name_placeholder: "Wybierz ikonę",

		admin_p8_instructions: "Te informacje są współużytkowane przez wszystkie repozytoria FileNet Content Manager skonfigurowane dla klienta WWW.",
		admin_p8_collaboration_config: "Opcjonalna konfiguracja produktu FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Aby skonfigurować te parametry, należy dostroić produkt FileNet Collaboration Services dla środowiska IBM FileNet P8.",
		admin_p8_use_url_incoming: "Użyj adresu URL dla żądań przychodzących, aby wygenerować adresy URL odpowiedzi:",
		admin_p8_use_url_incoming_hover: "W większości środowisk FileNet Collaboration Services można użyć adresu URL żądania przychodzącego do wygenerowania adresu URL w odpowiedzi. Wybierz opcję <b>Tak</b>, jeśli jedna z następujących sytuacji dotyczy środowiska:<ul><li>Użytkownik chce wymusić, aby aplikacja klienta uzyskała dostęp do produktu FileNet Collaboration Services za pośrednictwem konkretnego adresu URL.<li>Ustawienia serwera proxy powodują, że produkt FileNet Collaboration Services generuje niepoprawne adresy URL.</ul>",

		admin_p8_use_url_incoming_http: "Adres URL produktu FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Określ adres URL, za pomocą którego aplikacje klienckie mogą uzyskać dostęp do produktu FileNet Collaboration Services w formie http://serwerFNCS:numer_portu.",
		admin_p8_use_url_incoming_https: "Adres URL HTTPS produktu FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Jeśli produkt FileNet Collaboration Services jest skonfigurowany do używania protokołu SSL, podaj adres URL HTTPS, za pomocą którego aplikacje klienckie mogą uzyskać dostęp do produktu FileNet Collaboration Services w formie https://serwerFNCS:numer_portu.",
		admin_p8_hide_email_addresses: "Ukryj adresy e-mail użytkowników w odpowiedzi serwera:",
		admin_p8_hide_email_addresses_hover: "Można ukryć adresy e-mail użytkowników w odpowiedzi serwera, aby zapewnić zgodność ze strategiami prywatności. Można na przykład ukryć listę adresów e-mail użytkowników, gdy serwer zwraca listę dokumentów i informacje na temat użytkowników, którzy tworzyli lub edytowali dokumenty.",

		admin_p8_mask_user_ids: "Maskuj identyfikatory użytkownika w plikach dziennika:",
		admin_p8_mask_user_ids_hover: "Można ukryć nazwy użytkowników w plikach dziennika usług FileNet Collaboration Services, jeśli istnieje potrzeba zachowania zgodności ze strategiami prywatności. Gdy ta opcja zostanie włączona, nazwy użytkowników są zastępowane wartościami mieszającymi. Pozwala to na udostępnienie plików dziennika przedsiębiorstwom zewnętrznym, takim jak IBM, na potrzeby obsługi bez ujawniania nazw użytkowników lub rekordów działań.",

		admin_p8_soft_delete: "Przenieś usunięte pliki do kosza:",
		admin_p8_soft_delete_hover: "Gdy użytkownicy usuwają elementy, przenieś elementy do kosza zamiast usuwać elementy z repozytorium. Elementy pozostają w koszu, dopóki nie zostaną wyczyszczone. To ustawienie jest ignorowane, jeśli repozytorium docelowe nie obsługuje kosza.<br><br><b>Ograniczenie:</b> Kosze są obsługiwane w systemie IBM FileNet P8 w wersji 5.2 lub nowszej i wymagają dodatku Social Collaboration Base Extensions.",

		admin_p8_download: "Konfiguracja usługi Content Download HTTP Cache",
		admin_p8_download_instructions: "Jeśli repozytoria IBM FileNet Content Manager zawierają wiele dużych plików, można skonfigurować usługę Content Download HTTP Cache (CDHC), aby włączyć usługi FileNet Collaboration Services w celu bezpiecznego przekierowanie żądań treści dla dużych plików do dedykowanego serwera WWW.<br/><br/>Ta funkcja wymaga serwera IBM HTTP Server. Dodatkowo należy zaktualizować plik httpd.conf serwera IBM HTTP Server.",
		admin_p8_download_cache: "Content Download HTTP Cache:",
		admin_p8_download_cache_hover: "Określ, czy chcesz włączyć usługę Content Download HTTP Cache (CDHC) dla wszystkich repozytoriów IBM FileNet Content Manager w środowisku. Można określić minimalną wielkość pliku, dla której pliki są buforowane.",
		admin_p8_download_cache_folder: "Pełna ścieżka katalogu pamięci podręcznej:",
		admin_p8_download_cache_folder_hover: "Określ pełną ścieżkę do katalogu, w którym mają być przechowywane zbuforowane pliki. Katalog może znajdować się w dowolnym systemie operacyjnym lub na urządzeniu, takim jak współużytkowany katalog sieciowy, o ile jest on widoczny jako system plików dla usługi FileNet Collaboration Services i serwera IBM HTTP.",
		admin_p8_download_cache_url: "Alias dla położenia pamięci podręcznej:",
		admin_p8_download_cache_url_hover: "Określ alias, który jest używany do wskazania katalogu pamięci podręcznej z adresu URL usług FileNet Collaboration Services. Określ alias w formacie /alias, na przykład: /cdhc.<br/><br/>Gdy w adresie URL zawarty jest alias /cdhc, aplikacja jest przekierowywana do pełnej nazwy katalogu pamięci podręcznej.",
		admin_p8_download_cache_max_files: "Maksymalna liczba buforowanych plików:",
		admin_p8_download_cache_max_files_hover: "Gdy osiągnięta zostanie maksymalna liczba plików, najstarszy plik jest usuwany z pamięci podręcznej.<br><br>Jeśli określono maksymalną liczbę buforowanych plików oraz maksymalną wielkość pamięci podręcznej, najstarszy plik jest usuwany z pamięci podręcznej, gdy spełniony jest przynajmniej jeden z tych dwóch warunków.",
		admin_p8_download_cache_max_size: "Maksymalna wielkość pamięci podręcznej (w GB):",
		admin_p8_download_cache_max_size_hover: "Po osiągnięciu maksymalnego rozmiaru pamięci podręcznej najstarszy plik jest usuwany z pamięci podręcznej.<br/><br/>Jeśli określono maksymalną liczbę buforowanych plików oraz maksymalną wielkość pamięci podręcznej, najstarszy plik jest usuwany z pamięci podręcznej, gdy spełniony jest przynajmniej jeden z tych dwóch warunków.",
		admin_p8_download_cache_cleanup_duration: "Maksymalny czas trwania czyszczenia (w sekundach):",
		admin_p8_download_cache_cleanup_duration_hover: "Określ maksymalny czas trwania operacji czyszczenia. Domyślny czas wynosi 5 sekund.<br><br>Wszystkie pliki, które podlegają usunięciu, ale pozostają w pamięci podręcznej po operacji czyszczenia zostaną usunięte podczas przyszłej operacji czyszczenia.",
		admin_p8_download_cache_cleanup_min: "Minimalny odstęp czasu między operacjami czyszczenia pamięci podręcznej (w sekundach):",
		admin_p8_download_cache_cleanup_min_hover: "Określ minimalny czas, który musi upłynąć między operacjami czyszczenia pamięci podręcznej. Domyślny czas to 3600 sekund (1 godzina).<br><br>Operacje czyszczenia pamięci podręcznej występują tylko wtedy, gdy istnieje aktywne żądanie pobierania treści z pamięci podręcznej. Jeśli żądania są dostarczane co minutę, operacja czyszczenia będzie wykonywana co godzinę. Jeśli jednak między żądaniami pobierania minęły trzy godziny, operacja czyszczenia nie będzie wykonywana aż do odebrania następnego żądania pobierania.",
		admin_p8_download_cache_min_lifetime: "Minimalny czas w pamięci podręcznej (w sekundach):",
		admin_p8_download_cache_min_lifetime_hover: "Określ minimalny czas, przez który plik jest przechowywany w pamięci podręcznej, zanim będzie mógł zostać usunięty. Domyślny czas to 3600 sekund (1 godzina).<br><br>Nie można usunąć najstarszego pliku w pamięci podręcznej, jeśli nie przebywał w pamięci podręcznej przez określoną ilość czasu, nawet jeśli pamięć podręczna osiągnie maksymalną wielkość lub zawiera maksymalną liczbę plików.",
		admin_p8_download_cache_size_threshold: "Minimalna wielkość buforowanego pliku (w KB):",
		admin_p8_download_cache_size_threshold_hover: "Określ minimalną wielkość pliku, który jest buforowany za pomocą usługi CDHC. Jeśli plik jest mniejszy niż określona wielkość, plik jest kierowany za pośrednictwem serwera aplikacji WWW, na którym wdrożono usługi FileNet Collaboration Services. Wielkość domyślna to 1000 KB.",
		admin_p8_download_guard_header: "Nagłówek HTTP zapewniający dostęp:",
		admin_p8_download_guard_header_hover: "Jeśli aplikacja kliencka nie kieruje żądania za pośrednictwem serwera IBM HTTP Server, buforowana treść nie może zostać pobrana. Można określić, że tylko żądania przychodzące z określonym nagłówkiem HTTP (który jest dodawany do żądań z serwera IBM HTTP Server) mogą uzyskać dostęp do buforowanej treści, aby zapobiec nieudanym pobieraniom.<br><br>Nagłówek HTTP jest skonfigurowany na serwerze IBM HTTP Server i jest obecny we wszystkich żądaniach przychodzących, które są kierowane przez serwer IBM HTTP Server. Jeśli żądanie nie zawiera nagłówka HTTP, treść jest kierowana przez serwer aplikacji WWW zamiast przez serwer IBM HTTP Server.",
		admin_p8_download_generate_config: "Generuj konfigurację",
		admin_p8_download_generate_config_label: "Konfiguracja serwera IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Aby konfiguracja CHDC działała, należy zaktualizować plik httpd.conf serwera IBM HTTP Server. Kliknij opcję Generuj konfigurację, aby wygenerować instrukcje, które należy dodać do pliku httpd.conf.",

		admin_logging_viewone_pro: "Rejestrowanie w programie ViewONE Professional:",
		admin_logging_viewone_virtual: "Rejestrowanie w programie ViewONE Virtual:",
		admin_logging_viewone_streamer: "Rejestrowanie w module DSS:",
		admin_logging_viewone_streamer_hover: "Opcje rejestrowania w module DSS (Document Streaming Server) mają zastosowanie wyłącznie w sytuacjach, w których włączono przetwarzanie strumieniowe plików PDF i TIFF w sekcji <b>Daeja ViewONE</b> narzędzia administracyjnego.",
		admin_logging_viewone_redaction: "Rejestrowanie w module PRS",
		admin_logging_viewone_redaction_hover: "Opcje rejestrowania w module PRS (Permanent Redaction Server) mają zastosowanie wyłącznie, jeśli użytkownik jest uprawniony do użycia modułu Redakcja programu Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Strumieniowe przesyłanie plików PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Jeśli repozytorium zawiera duże dokumenty PDF, można skonfigurować przeglądarkę do strumieniowego przesyłania treści dokumentu, aby przyspieszyć wyświetlanie tych dokumentów. Jeśli jednak przesyłanie strumieniowe nie działa w środowisku użytkownika, można je wyłączyć.",
		admin_daeja_viewonepro_stream_tiff_documents: "Strumieniowe przesyłanie plików TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Jeśli repozytorium zawiera duże dokumenty TIFF, można skonfigurować przeglądarkę do strumieniowego przesyłania treści dokumentu, aby przyspieszyć wyświetlanie tych dokumentów. Jeśli jednak przesyłanie strumieniowe nie działa w środowisku użytkownika, można je wyłączyć.",
		admin_daeja_viewonepro_show_file_buttons: "Przyciski Plik",
		admin_daeja_viewonepro_show_file_menus: "Menu Plik",
		admin_daeja_viewonepro_enable_file_keys: "Klawisze skrótu Plik",
		admin_daeja_viewonepro_file_keys_hover_help: "Określ, czy chcesz aby użytkownicy używali skrótów klawiaturowych do pracy z plikami, na przykład do otwierania lub zapisywania plików. Więcej informacji na temat konkretnych skrótów klawiaturowych zawiera opis parametru FileKeys w podręczniku IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_print_buttons: "Przyciski Drukuj",
		admin_daeja_viewonepro_show_print_menus: "Menu Drukuj",
		admin_daeja_viewonepro_enable_print_keys: "Klawisze skrótu Drukuj",
		admin_daeja_viewonepro_print_keys_hover_help: "Określ, czy chcesz aby użytkownicy używali skrótów klawiaturowych do drukowania plików, na przykład do drukowania stron lub całych dokumentów. Więcej informacji na temat konkretnych skrótów klawiaturowych zawiera opis parametru PrintKeys w podręczniku IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_show_invert_buttons: "Przyciski Odwróć",
		admin_daeja_viewonepro_annotation_tooltip: "Domyślna niestandardowa podpowiedź adnotacji:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Wprowadź tekst do wyświetlenia, jeśli nie podano podpowiedzi dla adnotacji niestandardowej. Tekst może obejmować wymienne tokeny. Przykład: &quot;&lt;autor&gt; utworzył tę adnotację w dniu &lt;tylkodatautworzenia&gt;.&quot; Więcej informacji na temat tokenów z możliwością zastępowania zawiera parametr customAnnotationsToolTip w podręczniku IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Użyj predefiniowanej podpowiedzi niestandardowej",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Użyj zdefiniowanej przez system podpowiedzi niestandardowej widocznej w poniższym polu tekstowym",
		admin_daeja_viewonepro_help_url: "Adres URL pomocy:",
		admin_daeja_viewonepro_help_url_hover_help: "Podaj adres URL strony WWW zawierającej dokumentację pomocy dla przeglądarki. Przycisk pomocy na pasku narzędzi przeglądarki oraz czynność w menu pomocy otwierają stronę WWW. W przypadku niepodania adresu URL przycisk pomocy i czynność w menu pomocy nie są wyświetlane.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Kontekst zasobu znacznika obrazu:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "do zrobienia",
		admin_daeja_viewonepro_route_docs: "Przekieruj nieobsługiwaną treść do przeglądarki:",
		admin_daeja_viewonepro_route_docs_hover_help: "Użytkownicy mogą wyświetlać nieobsługiwane pliki obrazów, przekierowują je do przeglądarki, która następnie otwiera odpowiednią aplikację umożliwiającą wyświetlanie pliku. Na przykład do otwierania dokumentu w programie Microsoft Word przeglądarka wykorzystuje funkcję przeglądania programu Microsoft Word.",
		admin_daeja_viewonepro_scale: "Automatycznie dopasuj obraz:",
		admin_daeja_viewonepro_scale_best: "Najlepsze dopasowanie",
		admin_daeja_viewonepro_scale_ftow: "Dopasuj do szerokości",
		admin_daeja_viewonepro_scale_ftoh: "Dopasuj do wysokości",
		admin_daeja_viewonepro_enable_hotkeys: "Włącz klawisze skrótów:",
		admin_daeja_viewonepro_show_features: "Pokaż przyciski i menu:",
		admin_daeja_custom_settings: "Dodatkowe ustawienia:",
		admin_daeja_custom_settings_hover_help: "Możliwe jest dodanie innych parametrów przez określenie nazwy i wartości parametru. Na przykład można wskazać parametr &quot;scrollbars&quot; i wartość &quot;true&quot;, jeśli paski przewijania mają być wyświetlane podczas skalowania obrazu do rozmiaru większego niż obszar wyświetlania. Więcej informacji na temat nazw i wartości parametrów zawiera podręcznik IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Domyślna niestandardowa podpowiedź adnotacji:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Wprowadź tekst do wyświetlenia, jeśli nie podano podpowiedzi dla adnotacji niestandardowej. Tekst może obejmować wymienne tokeny. Przykład: &quot;&lt;autor&gt; utworzył tę adnotację w dniu &lt;tylkodatautworzenia&gt;.&quot; Więcej informacji na temat tokenów z możliwością zastępowania zawiera parametr customAnnotationsToolTip w podręczniku IBM Daeja ViewONE Parameters Reference Manual.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Użyj predefiniowanej podpowiedzi niestandardowej",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Użyj zdefiniowanej przez system podpowiedzi niestandardowej widocznej w poniższym polu tekstowym",
		admin_daeja_virtual_image_stamp_resource_context: "Kontekst zasobu znacznika obrazu:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "do zrobienia",
		admin_daeja_virtual_license_path:"Ścieżka plików licencji:",
		admin_daeja_virtual_license_path_hover_help:"Określ pełną ścieżkę katalogu zawierającego pliki licencji lic-server-virtual.v1 i lic-server.v1.",
		admin_default_license_path:"Użyj domyślnej ścieżki plików licencji",
		admin_license_path_specified:"Użyj niestandardowej ścieżki plików licencji",

		admin_daeja_streamer: "Serwer",
		admin_daeja_streamer_cache_root: "Katalog pamięci podręcznej:",
		admin_daeja_streamer_cache_root_hover_help: "Określ pełną ścieżkę do katalogu, w którym mają być przechowywane zbuforowane pliki w celu przyspieszenia dostępu. Katalog może znajdować się w dowolnym systemie operacyjnym lub na dowolnym urządzeniu, np. w katalogu sieciowym, o ile jest on widoczny jako system plików dla programów IBM Content Navigator i IBM HTTP Server. Użyj katalogu lokalnego w celu poprawy wydajności.",
		admin_daeja_streamer_settings: "Dodatkowe ustawienia:",
		admin_daeja_streamer_settings_hover_help: "Możliwe jest dodanie innych parametrów przez określenie nazwy i wartości parametru. Można na przykład podać właściwość “cookieAllowedDomainList” oraz listę serwerów hostów.  Więcej informacji na temat nazw i wartości parametrów zawiera podręcznik IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Ustawienia:",
		admin_daeja_redaction_settings_hover_help: "Możliwe jest dodanie innych parametrów przez określenie nazwy i wartości parametru. Można na przykład podać właściwość “burnIncrementalAnnotations” oraz wartość “true”. Więcej informacji na temat nazw i wartości parametrów zawiera podręcznik IBM Daeja ViewONE Parameters Reference Manual.",

		admin_daeja_setting_dialog_title_new: "Nowe ustawienie",
		admin_daeja_setting_dialog_title_edit: "Edytuj ustawienie",
		admin_daeja_setting_dialog_hover_help: "Możliwe jest dodanie innych parametrów przez określenie nazwy i wartości parametru. Można na przykład podać wartości “scrollbars” i “true”, aby paski przewijania były widoczne podczas skalowania obrazu do rozmiaru większego niż obszar wyświetlania.",
		admin_daeja_setting_dialog_field_hover_help: "Więcej informacji na temat nazw i wartości parametrów zawiera podręcznik Daeja ViewONE Parameter Reference Manual.",

		admin_daeja_logging: "Rejestrowanie w programie Daeja ViewONE",
		admin_daeja_logging_trace: "Włącz rejestrowanie śledzenia",
		admin_daeja_logging_trace_net: "Włącz rejestrowanie w sieci",
		admin_daeja_logging_trace_annotations: "Włącz rejestrowanie adnotacji",
		admin_daeja_logging_log_file: "Plik dziennika:",
		admin_daeja_logging_instructions: "Rejestrowania można użyć do rozwiązywania problemów z programem Daeja ViewONE Professional i Daeja ViewONE Virtual. Jeśli wiadomo, że problem występuje dla konkretnej funkcji, można ukierunkować rejestrowanie na tę funkcję.",

		admin_v1pro_logging_trace_hover: "Użyj tego ustawienia w celu rozwiązywania ogólnych problemów z przeglądarką.<br><br>Informacje dotyczące rejestrowania są zapisywane w konsoli Java na komputerze klienta. Dostęp do konsoli Java można uzyskać z okna Panelu sterowania (Windows) lub z okna Preferencje systemowe (Mac) dla systemu operacyjnego użytkownika.",
		admin_v1pro_logging_trace_net_hover: "Użyj tego ustawienia w celu rozwiązania poniższych problemów.<ul><li>Problemy dotyczące połączenia z serwerem</li><li>Problemy dotyczące typów MIME</li><li>Problemy dotyczące zbyt długich plików</li></ul>Ponadto możesz użyć informacji dotyczących rejestrowania śledzenia w sieci do określenia, gdzie występują opóźnienia podczas korzystania z produktu Daeja ViewONE Professional.<br><br>Informacje dotyczące rejestrowania są zapisywane w konsoli Java na komputerze klienta. Dostęp do konsoli Java można uzyskać z okna Panelu sterowania (Windows) lub z okna Preferencje systemowe (Mac) dla systemu operacyjnego użytkownika.",
		admin_v1pro_logging_trace_annotations_hover: "Użyj tego ustawienia w celu rozwiązywania problemów z tworzeniem, zapisywaniem i ładowaniem adnotacji.<br><br>Informacje dotyczące rejestrowania są zapisywane w konsoli Java na komputerze klienta. Dostęp do konsoli Java można uzyskać z okna Panelu sterowania (Windows) lub z okna Preferencje systemowe (Mac) dla systemu operacyjnego użytkownika.",

		admin_virtual_logging_trace_hover: "Użyj tego ustawienia w celu rozwiązywania ogólnych problemów z przeglądarką.<br><br>Domyślnie dane rejestrowania są zapisywane w pliku virtual.log w podkatalogu konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Użyj tego ustawienia w celu rozwiązania poniższych problemów.<ul><li>Problemy dotyczące połączenia z serwerem</li><li>Problemy dotyczące typów MIME</li><li>Problemy dotyczące zbyt długich plików</li></ul>Ponadto możesz użyć informacji dotyczących rejestrowania śledzenia w sieci do określenia, gdzie występują opóźnienia podczas korzystania z produktu Daeja ViewONE Virtual.<br><br>Domyślnie dane rejestrowania są zapisywane w pliku virtual.log w podkatalogu konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Użyj tego ustawienia w celu rozwiązywania problemów z tworzeniem, zapisywaniem i ładowaniem adnotacji.<br><br>Domyślnie dane rejestrowania są zapisywane w pliku virtual.log w podkatalogu konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "W przypadku włączenia rejestrowania dla przeglądarki należy określić pełną ścieżkę i nazwę pliku dziennika, w którym mają być zapisywane rejestrowane informacje.  Zaleca się, aby plik ten nosił nazwę virtual.log.",

		admin_streamer_logging_trace_hover: "Użyj tego ustawienia w celu rozwiązywania ogólnych problemów z modułem DSS.<br><br>Domyślnie dane rejestrowania są zapisywane w pliku virtual.log, który jest podkatalogiem konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Użyj tego ustawienia w celu rozwiązania poniższych problemów.<ul><li>Problemy dotyczące połączenia z serwerem</li><li>Problemy dotyczące określonych typów MIME</li><li>Problemy dotyczące zbyt długich plików</li></ul>Ponadto możesz użyć informacji dotyczących rejestrowania śledzenia w sieci do określenia, gdzie występują opóźnienia podczas korzystania z modułu DSS.<br><br>Domyślnie dane rejestrowania są zapisywane w pliku virtual.log, który jest podkatalogiem konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "W przypadku włączenia rejestrowania dla modułu Document Streaming Server, należy określić pełną ścieżkę i nazwę pliku dziennika, w którym mają być zapisywane rejestrowane informacje.  Zaleca się, aby plik ten nosił nazwę streamer.log.",

		admin_redaction_logging_trace_hover: "Użyj tego ustawienia w celu rozwiązywania ogólnych problemów z modułem Permanent Redaction Server.<br><br>Domyślnie dane rejestrowania są zapisywane w pliku redacttofile.log, który znajduje się w podkatalogu konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Użyj tego ustawienia w celu rozwiązania poniższych problemów.<ul><li>Problemy dotyczące połączenia z serwerem</li><li>Problemy dotyczące określonych typów MIME</li><li>Problemy dotyczące zbyt długich plików</li></ul>Ponadto możesz użyć informacji dotyczących rejestrowania śledzenia w sieci do określenia, gdzie występują opóźnienia podczas korzystania z modułu PRS (Permanent Redaction Server).<br><br>Domyślnie dane rejestrowania są zapisywane w pliku redacttofile.log, który znajduje się w podkatalogu konfiguracyjnym katalogu instalacyjnego programu IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "W przypadku włączenia rejestrowania dla modułu Permanent Redaction Server, należy określić pełną ścieżkę i nazwę pliku dziennika, w którym mają być zapisywane rejestrowane informacje.  Zaleca się, aby plik ten nosił nazwę redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Konfigurowanie składników przeglądarek i usług.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Jeśli klient WWW jest wykorzystywany w celu łączenia się z jednym lub większą liczbą repozytoriów Content Manager OnDemand, wówczas należy określić informacje, których wymaga pakiet OnDemand Web Enablement Kit w celu poprawnego działania. Te informacje są współużytkowane przez wszystkie repozytoria Content Manager OnDemand, które są skonfigurowane dla klienta WWW.",
		admin_ondemand_language: "Język:",
		admin_ondemand_tempdir: "Katalog tymczasowy ODWEK:",
		admin_ondemand_tracegrp: "Śledzenie ODWEK",
		admin_ondemand_tracedir: "Katalog śledzenia:",
		admin_ondemand_tracelevel: "Poziom śledzenia:",
		admin_ondemand_tracelevel_0: "0 - Brak rejestrowania",
		admin_ondemand_tracelevel_1: "1 - Rejestrowanie komunikatów o błędach",
		admin_ondemand_tracelevel_2: "2 - Rejestrowanie komunikatów o błędach i ostrzeżeń",
		admin_ondemand_tracelevel_3: "3 - Rejestrowanie komunikatów o błędach, ostrzeżeń i komunikatów informacyjnych",
		admin_ondemand_tracelevel_4: "4 - Przechwytywane są wszystkie komunikaty, w tym komunikaty dotyczące śledzenia funkcji",
		admin_ondemand_max_trace_filesize: "Maksymalny rozmiar pliku śledzenia:",
		admin_ondemand_max_trace_filesize_unlimited: "Bez ograniczeń",
		admin_ondemand_max_trace_filesize_limited: "Ograniczenie (zalecane)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "Podana wartość jest poza zakresem. Wartość musi być liczbą całkowitą z zakresu od 1 do 1 000 000.",
		admin_ondemand_afp2pdf_installdir: "Katalog instalacyjny AFP2PDF:",
		admin_ondemand_language_hover: "Określ język, w którym ODWEK zwraca komunikaty.",
		admin_ondemand_tempdir_hover: "Wprowadź katalog, w którym pakiet OnDemand Web Enablement Kit zapisuje pliki tymczasowe podczas przetwarzania. Należy wprowadzić pełną ścieżkę do katalogu istniejącego na serwerze aplikacji WWW.",
		admin_ondemand_tracedir_hover: "Wprowadź katalog, w którym zamierzasz zapisać plik śledzenia arswww.trace narzędzia ODWEK. Należy wprowadzić pełną ścieżkę do katalogu istniejącego na serwerze aplikacji WWW.",
		admin_ondemand_tracelevel_hover: "Określ poziom rejestrowania informacji zapisywanych w pliku arswww.trace. <b>Rejestrowanie komunikatów o błędach</b> - przechwytuje najmniejszą ilość informacji. <b>Przechwytywane są wszystkie komunikaty, w tym komunikaty dotyczące śledzenia funkcji</b> - przechwytywana jest największa ilość informacji.<br /><br />W środowisku produkcyjnym nie należy wybierać opcji <b>Przechwytywane są wszystkie komunikaty, w tym komunikaty dotyczące śledzenia funkcji</b>, chyba że taka instrukcja zostanie wydana przez dział wsparcia IBM dla oprogramowania.",
		admin_ondemand_max_trace_filesize_hover: "Określ, czy chcesz zezwolić na nieograniczony przyrost objętości pliku śledzenia ODWEK, czy też klient WWW ma tworzyć nowe pliki dzienników po przekroczeniu określonej wielkości. Domyślnie dozwolony jest przyrost objętości pliku śledzenia do momentu zatrzymania aplikacji WWW na serwerze aplikacji WWW.",
		admin_ondemand_max_trace_unlimited_hover: "Wybierz tę opcję, jeśli informacje śledzenia ODWEK mają być zapisywane w pojedynczym pliku dziennika. Jeśli ta opcja zostanie wybrana, wówczas może powstać plik dziennika zbyt duży na otwarcie w standardowej przeglądarce plików.",
		admin_ondemand_max_trace_limited_hover: "Wybierz tę opcję, jeśli informacje śledzenia ODWEK mają być zapisywane w mniejszych plikach dziennika. Gdy plik dziennika osiągnie maksymalny rozmiar, wówczas nazwa bieżącego dziennika zostanie zmieniona w celu uwzględnienia daty (arswww.trace.RRRRMMDD.GGMMSS) i zostanie utworzony nowy plik dziennika.",
		admin_ondemand_afp2pdf_installdir_hover: "Aby użyć programu narzędziowego AFP2PDF Transform w celu przekształcania dokumentów AFP na dokumenty PDF do wyświetlenia i drukowania, określ katalog, w którym zainstalowany jest program narzędziowy AFP2PDF Transform na serwerze aplikacji WWW, np.: C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administratorzy",
		admin_adminusers_heading_text_multi: "Należy określić, którzy użytkownicy mają uprawnienia administracyjne w kliencie WWW. Do pulpitu administracyjnego mogą się logować tylko administratorzy.<br /><br /><b>Ważne:</b> Identyfikatory administratorów IBM Content Navigator muszą być zgodne z:<ul><li>Identyfikatorami użytkowników, które istnieją na serwerze aplikacji WWW. Identyfikatory użytkowników nie muszą być identyfikatorami administratorów na serwerze aplikacji WWW.</li><li>Identyfikatorami użytkowników, które istnieją w repozytorium domyślnym skonfigurowanym dla poszczególnych pulpitów, które zawierają funkcję administrowania.</li></ul>",
		admin_adminusers_heading_text_single: "Należy określić, którzy użytkownicy mają uprawnienia administracyjne w kliencie WWW. Do pulpitu administracyjnego mogą się logować tylko administratorzy.<br /><br /><b>Ważne:</b> Identyfikatory administratorów IBM Content Navigator muszą być zgodne z identyfikatorami użytkowników, które istnieją na serwerze aplikacji WWW. Identyfikatory użytkowników nie muszą być identyfikatorami administratorów na serwerze aplikacji WWW.",
		admin_adminusers_newuser: "Nowy administrator:",
		admin_adminusers_add: "Dodaj",
		admin_adminusers_remove: "Usuń",
		admin_adminusers_listheading: "Administratorzy",
		admin_adminusers_nameInvalid: "Wartość nie może być duplikatem.",

		admin_sync_server_instructions: "<b>Tylko użytkownicy FileNet P8:</b> W przypadku planowania włączenia usług synchronizacji dla jednego lub większej liczby repozytoriów konieczne jest skonfigurowanie klienta WWW w celu użycia usług synchronizacji. Konfiguracja usług synchronizacji jest współużytkowana przez wszystkie repozytoria w środowisku użytkownika.",
		admin_settings_instructions: "Wartości określone na karcie Ustawienia obowiązują dla wszystkich pulpitów w konfiguracji.",
		admin_autocomplete: "Automatycznie wprowadzaj nazwy użytkowników:",
		admin_autocomplete_hover: "Określ, czy klient WWW ma zapisywać nazwy użytkowników w informacjach cookie przeglądarki, aby umożliwić przeglądarce automatyczne wprowadzanie nazw użytkowników w kliencie WWW podczas logowania.<br><br>Jeśli ta opcja zostanie włączona, wówczas nazwa ostatniego użytkownika, który logował się do klienta WWW, będzie zapisywana w informacjach cookie przeglądarki i automatycznie wyświetlana na stronie logowania, gdy użytkownik otworzy klienta WWW.<br><br>Tę opcję należy wyłączyć, jeśli dostęp do aplikacji jest uzyskiwany ze współużytkowanych stacji roboczych lub jeśli istnieją obawy związane z zapisywaniem nazw użytkowników w informacjach cookie przeglądarki.<br /><br />Ta opcja nie ma zastosowania do aplikacji na urządzenia przenośne i aplikacji niestandardowych.",
		admin_autocomplete_enable: "Włącz",
		admin_autocomplete_disable: "Wyłącz",
		admin_cultural_collation: "Użyj sortowania zgodnego z ustawieniami narodowymi:",
		admin_cultural_collation_hover: "W przypadku włączenia sortowania zgodnego z ustawieniami narodowymi sortowanie będzie realizowane na serwerze repozytorium. Może to spowodować zmniejszenie wydajności klienta WWW.<br><br>Wyłączenie sortowania zgodnego z ustawieniami narodowymi może zwiększyć wydajność klienta WWW.",
		admin_cultural_collation_enable: "Włącz",
		admin_cultural_collation_disable: "Wyłącz",
		admin_base_ui_style: "Styl kompozycji",
		admin_base_ui_style_hover: "Określ styl domyślnej kompozycji używanej w kliencie WWW. Ten styl obowiązuje tylko na pulpitach z przypisaną kompozycją <b>Domyślna</b> (na karcie <b>Wygląd</b> konfiguracji pulpitu).<br/></br><b>Ograniczenie:</b> jeśli w konfiguracjach pulpitów użytkownika używane są kompozycje niestandardowe, to bazują one na stylu klasycznym, niezależnie od dokonanego tutaj wyboru.",
		admin_base_ui_style_classic: "Klasyczny",
		admin_access_control_access: "Ogranicz dostęp do określonych użytkowników i grup",
		admin_access_control_access_show: "Pokaż dane kontroli dostępu",
		admin_access_control_access_enable: "Tak",
		admin_access_control_access_disable: "Nie",
		admin_mobile_access: "Zezwalaj na dostęp z aplikacji na urządzeniach przenośnych",
		admin_mobile_access_hover: "Domyślnie użytkownicy mogą uzyskiwać dostęp do klienta WWW z aplikacji IBM Content Navigator dla systemu iOS.<br /><br /><b>Ważne:</b> Jeśli uniemożliwisz użytkownikom dostęp do klienta WWW z aplikacji iOS, użytkownicy nadal będą mogli otwierać klienta WWW z przeglądarek WWW na urządzeniach przenośnych oraz z dowolnych aplikacji niestandardowych napisanych przy użyciu interfejsów API programu IBM Content Navigator i działających na urządzeniach przenośnych.",
		admin_mobile_access_enable: "Tak",
		admin_mobile_access_disable: "Nie",
		admin_error: "Informacje o komunikacie o błędzie:",
		admin_error_custom: "Wyszukaj treść wsparcia niestandardowego",
		admin_error_default: "Wyszukaj treść wsparcia IBM <BDO DIR='LTR'>(</BDO>domyślnie<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Określ, gdzie chcesz skierować użytkowników, aby uzyskali więcej informacji, gdy napotkają komunikat o błędzie. Można skierować użytkowników do informacji w portalu wsparcia IBM lub można skierować użytkowników do zasobu wewnętrznego, takiego jak stanowisko pomocy.",
		admin_error_URL: "Przedrostek URL:",
		admin_error_URL_hover: "Wprowadź adres URL zasobu, do którego zamierzasz kierować użytkowników w przypadku błędu - może to być na przykład stanowisko pomocy. Na przykład: http://localhost:numer_portu. Klient WWW dołącza do adresu URL numer komunikatu.",
		admin_prompt_close_without_save: "Czy chcesz zamknąć bez zapisywania zmian?",
		admin_object_expiration_time: "Częstotliwość odświeżania pamięci podręcznej (w minutach):",
		admin_object_expiration_time_hover: "Możesz zwiększyć ilość czasu przechowywania w pamięci podręcznej obiektów konfiguracji, takich jak pulpity, w celu zwiększenia wydajności klienta WWW. Czas domyślny to 10 minut. Maksymalny czas to 1440 minut (1 dzień).<br /><br />Musisz uruchomić ponownie aplikację WWW, aby zmiany odniosły skutek.<br /><br />W przypadku wdrożenia programu IBM Content Navigator w środowisku klastrowym o wysokiej dostępności żadne zmiany w obiektach konfiguracji nie zostaną rozpropagowane na węzły w klastrze do chwili odświeżenia pamięci podręcznej.",
		admin_temp_file_cleanup_interval: "Interwał przeglądania w celu czyszczenia pamięci podręcznej przeglądarki (w godzinach):",
		admin_temp_file_cleanup_interval_hover: "Określ, jak często katalog tymczasowy będzie przeglądany w celu wyszukania i usunięcia plików tymczasowych, które utraciły ważność. Domyślnie katalog tymczasowy jest przeglądany co sześć godzin. Można określić interwał z przedziału 6–48 godzin.",
		admin_temp_file_expiration_interval: "Okres ważności pamięci podręcznej przeglądarki (w godzinach):",
		admin_temp_file_expiration_interval_hover: "Określ czas, przez jaki pliki tymczasowe związane z działaniami w przeglądarce będą przechowywane w pamięci podręcznej przeglądarki. Domyślnie te pliki tymczasowe tracą ważność po 24 godzinach. Można określić wartość z przedziału 12–48 godzin.",
		admin_encryption_key_hover: "Klucz używany na potrzeby funkcji szyfrowania w programie Navigator.",
		admin_encryption_key: "Klucz szyfrowania:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Znakowanie",
		admin_mobile_branding_main_color: "Kolor główny:",
		admin_mobile_branding_secondary_color: "Kolor dodatkowy:",
		admin_mobile_device_title: "Zarządzanie systemem MaaS360",
		admin_mobile_device_enable_maas360: "Włącz MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "Miejsce na pomoc w dymkach dla Włącz MaaS360",
		admin_mobile_device_maas360_developer_id: "Id. programisty MaaS360:",
		admin_mobile_device_maas360_license_key: "Klucz licencyjny MaaS360:",
		admin_mobile_settings_title: "Ustawienia",
		admin_mobile_email_address_hover_help: "Ten adres e-mail jest używany w aplikacji na urządzenia przenośne, gdy użytkownik kliknie opcję \"Wyślij raport o błędach.\"",
		admin_mobile_email_address: "Adres e-mail:",
		admin_invalid_email_address_message: "Wprowadzony adres e-mail jest niepoprawnie sformatowany. Wprowadź poprawny adres e-mail i spróbuj ponownie.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Niektóre dane są niepoprawne.",
		admin_configuration_parameters: "Parametry konfiguracji",
		admin_configuration_optional_features: "Funkcje opcjonalne:",
		admin_configuration_optional_features_p8_instructions: "Wybierz funkcje, które chcesz włączyć w tym repozytorium.<p><b>Ważne:</b> Po włączeniu funkcji instalującej dodatek w repozytorium konieczne jest nawiązanie połączenia z repozytorium jako administrator produktu Content Platform Engine lub Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Wybierz funkcje, które chcesz włączyć w tym repozytorium.<p><b>Ważne:</b> Te funkcje modyfikują model danych w repozytorium. Do ich włączenia konieczne jest nawiązanie połączenia z repozytorium jako administrator serwera bibliotecznego.</p>",
		admin_system_properties: "Właściwości systemowe",
		admin_system_properties_for: "Właściwości systemowe dla:",
		admin_available_properties: "Dostępne właściwości",
		admin_displayed_properties: "Pokazane właściwości",
		admin_selected_properties: "Wybrane właściwości",
		admin_selected_filtered_properties: "Ukryte właściwości",
		admin_available_operators: "Pokazane operatory",
		admin_selected_filtered_operators: "Ukryte operatory",
		admin_system_properties_shown: "Pokazane właściwości",
		admin_system_properties_hidden: "Ukryte właściwości",
		admin_available_menu_items: "Dostępne działania:",
		admin_selected_menu_items: "Wybrane działania:",
		admin_menu_global: "Obowiązuje, gdy nie wybrano żadnych pozycji:",
		admin_menu_multiple_document: "Obowiązuje, gdy wybrano wiele pozycji:",
		admin_menu_privileges: "Wymagane uprawnienia:",
		admin_menu_plugin: "Wtyczka:",
		admin_menu_repository_types: "Typy repozytoriów:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separator",
		admin_browse: "Przeglądaj",
		admin_search: "Szukaj",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Utajnienie na podstawie roli",
		admin_connections_library_enabled: "Program IBM Connections włączony",
		admin_office_conf: "Edytuj integrację",
		admin_desktop_conf_label: "Konfiguracja pulpitu",
		admin_ms_office_conf_label: "Konfiguracja pakietu Office",
		admin_workflows: "Przepływy pracy",
		admin_file_types: "Typy plików",
		admin_file_type_contains_label: "Typ pliku zawiera",
		admin_name_propepty: "Nazwa",
		admin_cm_name_property_default: "Użyj nazwy domyślnej",
		admin_cm_name_property_default_hover: "Domyślnie, jeśli właściwość jest zdefiniowana dla elementu, jako nazwa elementu używana jest właściwość nazwy hierarchicznej ICM (ICM$NAZWA).  Jeśli właściwość nazwy hierarchicznej ICM (ICM$NAZWA) jest niedostępna, pierwsza właściwość oflagowana jako \"reprezentuje\" jest używana jako nazwa elementu.",
		admin_cm_name_property: "Podaj właściwość nazwy elementu",
		admin_cm_name_property_hover: "Wskaż, która właściwość jest używana jako nazwa dokumentów i folderów.",
		admin_name_property: "Właściwość nazwy:",
		admin_doc_name_property: "Właściwość nazwy dokumentu:",
		admin_doc_name_property_hover: "Określ, która właściwość ma być używana jako nazwa dokumentu.",
		admin_folder_name_property: "Właściwość nazwy folderu:",
		admin_folder_name_property_hover: "Określ, która właściwość ma być używana jako nazwa folderu.",
		admin_all_searches_label: "Liczba wyszukiwań do wyświetlenia:",
		admin_unlimited: "Bez limitu",
		admin_limit: "Ogranicz do",
		admin_repository: "Repozytorium:",
		admin_application_space: "Przestrzeń aplikacji",
		admin_available_application_spaces: "Dostępne przestrzenie aplikacji:",
		admin_selected_application_spaces: "Wybrane przestrzenie aplikacji:",
		admin_label: "Etykieta",
		admin_repository_box_placeholder: "Wybierz repozytorium Box",
		admin_repository_placeholder: "Wybierz repozytorium",
		admin_search_match: "Dopasowanie:",
		admin_search_match_all: "Dopasuj wszystkie kryteria wyszukiwania",
		admin_search_match_any: "Dopasuj dowolne kryteria wyszukiwania",
		admin_search_match_hover: "Wskaż opcję wybraną domyślnie w menu <b>Opcje właściwości</b>.",

		admin_repository_redactions_instructions: "Dla tego repozytorium można skonfigurować utajnienia na podstawie roli.",
		admin_repository_redaction_policies_description: "Możesz tworzyć strategie utajnienia, które wiążą przyczyny utajnienia z użytkownikami i grupami, które mogą odczytywać dane objęte szczególną ochroną i edytować adnotacje, które chronią widok tego typu danych oraz zarządzać tymi strategiami.",
		admin_repository_redaction_roles_instruction: "Możesz utworzyć rolę utajnienia do powiązania z określonymi użytkownikami oraz grupami, które będą miały możliwość odczytywania danych objętych szczególną ochroną lub możliwość edytowania adnotacji, które chronią widok tych danych. Aby użytkownicy i grupy mogły odczytywać dane lub edytować adnotacje, rola utajnienia musi być powiązana z przyczyną utajnienia zawartą w strategii utajnienia.",
		admin_repository_redaction_reasons_instruction: "Możesz skonfigurować przyczyny utajnienia dla tego repozytorium.",
		admin_repository_redaction_policies: "Konfiguracja strategii utajnienia",
		admin_repository_redaction_roles: "Konfiguracja ról utajnienia",
		admin_repository_redaction_reasons: "Konfiguracja przyczyn utajnienia",
		admin_repository_redaction_roles_type: "Typ",
		admin_repository_redaction_roles_type_hover: "Edytor może tworzyć, modyfikować lub usuwać utajnione treści na podstawie ról określonego typu, a recenzent może wyświetlać dane objęte szczególną ochroną określonego typu.",
		admin_repository_redaction_roles_type_editor: "Edytor",
		admin_repository_redaction_roles_type_viewer: "Recenzent",
		admin_repository_redaction_roles_membership: "Członkostwo",
		admin_repository_redaction_roles_membership_hover: "Wybierz edytorów, którzy mają mieć tę rolę.",
		admin_repository_redaction_roles_user_group_hover: "Wyszukaj użytkowników i grupy lub wybierz edytorów, którzy mają mieć tę rolę.",
		admin_repository_redaction_roles_description: "Możesz tworzyć role utajnienia, które wiążą użytkowników i grupy z możliwością odczytywania danych objętych szczególną ochroną i edytowania adnotacji, które chronią widok tego typu danych oraz zarządzać tymi rolami.",
		admin_repository_redaction_new: "Nowa rola utajnienia",
		admin_repository_redaction_role_avail_editors: "Dostępni edytorzy utajnienia",
		admin_repository_redaction_role_avail_users: "Dostępni użytkownicy",
		admin_repository_redaction_role_avail_groups: "Dostępne grupy",
		admin_repository_redaction_role_selected_editors: "Wybrani edytorzy utajnienia",
		admin_repository_redaction_role_selected_users_groups: "Wybrani użytkownicy i grupy",
		admin_repository_redaction_role_add_editor: "Nowi edytorzy...",
		admin_repository_redaction_role_access_type: "Dostęp",
		admin_repository_redaction_role_access_type_access: "Zezwalaj",
		admin_repository_redaction_role_access_type_no_access: "Odmów",
		admin_repository_redaction_role_users: "Użytkownicy",
		admin_repository_redaction_role_groups: "Grupy",
		admin_repository_redaction_role_editors: "Edytorzy",
		admin_delete_confirmation_redaction_roles: "Czy chcesz usunąć wybraną rolę utajnienia?",
		admin_repository_edit_redaction_role: "Rola utajnienia: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Dostęp domyślny",
		// RBA
		desktop_user_group_acl: "Administratorzy pulpitu",
		desktop_user_group_remove: "Usuń",
		desktop_rba_membership: "Członkostwo:",
		desktop_rba_membership_list_label: "Nazwa",
		admin_repository_redaction_policy_hover: "Wprowadź opis, który ułatwi użytkownikom odróżnienie tej strategii od innych.",
		admin_repository_new_redaction_policy: "Nowa strategia utajnienia",
		admin_repository_policy_name: "Nazwa strategii",
		admin_repository_reason_redactions: "Przyczyny utajnienia:",
		admin_repository_role_editors: "Edytorzy",
		admin_repository_role_viewers: "Recenzenci",
		admin_repository_redaction_policy_instruction: "Możesz utworzyć strategię utajnienia do powiązania wybranych przyczyn utajnienia z edytorami i recenzentami utajnionej treści.",
		admin_repository_redaction_reasons_hover: "Wybierz co najmniej jeden typ danych objętych szczególną ochroną, jakie mają nie być widoczne dla większości użytkowników, na przykład dane osobowe, tajemnice handlowe lub informacje poufne lub stanowiące własność firmy.",
		admin_repository_readaction_available_reasons: "Dostępne przyczyny",
		admin_repository_readaction_selected_reasons: "Wybrane przyczyny",
		admin_repository_readaction_new_reason: "Nowa przyczyna...",
		admin_repository_redeaction_reasons: "Przyczyny utajnienia:",
		admin_repository_readaction_editor_permmission: "Edytorzy utajnienia:",
		admin_repository_redaction_editors_hover: "Wybierz role, które mogą tworzyć i modyfikować utajnienie dla wybranych przyczyn.",
		admin_repository_readaction_new_editor_role: "Nowa rola edytora...",
		admin_repository_readaction_available_editors: "Dostępne role edytora",
		admin_repository_readaction_selected_editors: "Wybrane role edytora",
		admin_repository_readaction_viewer_permmission: "Recenzenci utajnienia:",
		admin_repository_redaction_viewers_hover: "Wybierz role, które mogą wyświetlać dane objęte szczególną ochroną dla wybranych przyczyn. Utajnienie nie dotyczy użytkowników i grup z przypisanymi tymi rolami.",
		admin_repository_readaction_new_viewer_role: "Nowa rola recenzenta...",
		admin_repository_readaction_available_viewers: "Dostępne role recenzenta",
		admin_repository_readaction_selected_viewers: "Wybrane role recenzenta",
		admin_repository_reason_redactions_header: "Przyczyny utajnienia",
		admin_delete_confirmation_redaction_policy: "Czy chcesz usunąć wybraną strategię utajnienia?",
		admin_role_type_repository: "Repozytorium",
		admin_role_type_administrator: "Administrator",
		admin_role_type_template: "Szablon",
		admin_role_type_teamspace: "Obszar zespołu",
		admin_role_type_author: "Edytor",
		admin_role_type_user: "Recenzent",
		admin_collaboration_services_instructions: "Jeśli używane są aplikacje IBM Connections i WWW FileNet Collaboration Services, można skonfigurować społecznościowe obszary zespołu i strumienie działań dla repozytorium.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Konfiguracja biblioteki społeczności",
		admin_collaboration_community_instruction: "Można skonfigurować jedno repozytorium w domenie IBM FileNet P8 do przechowywania bibliotek społeczności programu IBM Connections (nazywanych również obszarami zespołu). Gdy użytkownicy tworzą bibliotekę społeczności za pośrednictwem programu IBM Connections, jest ona przechowywana w repozytorium, które zostało wskazane jako biblioteka społeczności repozytorium.",
		admin_collaboration_community_teamspaces: "Użyj tego repozytorium dla bibliotek społeczności:",
		admin_collaboration_community_teamspaces_hover: "Można użyć tylko jednego repozytorium w domenie IBM FileNet P8 do przechowywania nowych bibliotek społeczności. Gdy repozytorium jest włączane i istnieje repozytorium, istniejące repozytorium zostanie wyłączone. Istniejące biblioteki pozostaną jednak w bieżącym repozytorium.",
		admin_collaboration_connections_anonymous: "Zezwalaj na anonimowy dostęp do publicznej treści:",
		admin_collaboration_connections_anonymous_hover: "Jeśli używany serwer IBM Connections zawiera społeczności publiczne lub moderowane, można skonfigurować usługę FileNet Collaboration Services, aby pozwalały użytkownikom na przeglądanie i pobieranie treści z bibliotek w tych społecznościach bez konieczności wcześniejszego logowania.<br><br>Użytkownicy, którzy korzystają z bibliotek społeczności anonimowo nie mogą tworzyć, modyfikować i usuwać treści.<br><br><b>Ważne:</b> Należy wyznaczyć użytkownika IBM FileNet P8 LDAP jako użytkownika anonimowego i skonfigurować tego użytkownika z rolą <b>Użytkownik anonimowy</b> na serwerze WebSphere Application Server.",
		admin_collaboration_connections_url: "Adres URL programu IBM Connections:",
		admin_collaboration_connections_url_hover: "Podaj adres URL serwera IBM Connections w formacie http://SerwerIBMConnections:numer_portu.  Jeśli program IBM Connections jest skonfigurowany do używania serwera IBM HTTP Server, można pominąć numer portu w adresie URL.<br><br>Adres URL musi być dostępny dla użytkowników programu IBM Connections, ponieważ jest to odsyłacz, którego używają usługi FileNet Collaboration Services do tworzenia odsyłaczy do stron docelowych dokumentu w programie IBM Connections.",
		admin_collaboration_connections_url_http_use: "Użyj adresu URL programu IBM Connections",
		admin_collaboration_connections_url_https_use: "Użyj adresu URL programu IBM Connections URL w formacie HTTPS",
		admin_collaboration_connections_url_specify: "Określ adres URL",
		admin_collaboration_connections_url_https: "Adres URL programu IBM Connections URL w formacie HTTPS:",
		admin_collaboration_connections_url_https_hover: "Jeśli program IBM Connections jest skonfigurowany do używania protokołu SSL, podaj adres URL HTTPS serwera IBM Connections w formacie https://SerwerIBMConnections:numer_portu.  Jeśli program IBM Connections jest skonfigurowany do używania serwera IBM HTTP Server, można pominąć numer portu w adresie URL.",

		admin_collaboration_connections_gadget_url: "Adres URL gadżetu IBM Connections:",
		admin_collaboration_connections_retrieval_url: "Adres URL pobierania w programie IBM Connections:",
		admin_collaboration_connections_security: "Administratorzy społeczności:",
		admin_collaboration_connections_security_hover: "Określ użytkowników i grupy, które mogą administrować treściami w bibliotekach społeczności.<br><br>Administratorzy globalni mogą tworzyć, modyfikować, usuwać i zapewniać dostęp do bibliotek społeczności i zawartości bibliotek społeczności. Jeśli użytkownik zostanie określony jako administrator globalny, otrzymuje uprawnienia ClbGlobalAdministrator w repozytorium.<br><br>Globalni administratorzy przeglądu mogą zatwierdzać i odrzucać treści, które są w trakcie przeglądu do publikacji w bibliotece społeczności. Jeśli użytkownik zostanie określony jako globalny administrator przeglądu, otrzymuje uprawnienia ClbGloablReviewAdministrator w repozytorium.",

		admin_collaboration_connections_admins: "Administratorzy globalni",
		admin_collaboration_connections_admins_review: "Globalni administratorzy przeglądu",
		admin_collaboration_connections_seedlist: "Indeksuj zawartość biblioteki społeczności:",
		admin_collaboration_connections_seedlist_hover: "Określ, czy chcesz, aby program IBM Connections przeszukiwał biblioteki społeczności w tym repozytorium w celu utworzenia indeksu wyszukiwania. Tworzenie indeksu może mieć wpływ na wydajność repozytorium.<br><br>Jeśli w repozytorium zainstalowane są rozszerzenia Social Collaboration Search Indexing Extensions, ta opcja jest domyślnie włączona. Jeśli rozszerzenia Social Collaboration Search Indexing Extensions nie są zainstalowane w repozytorium, program dodatkowy jest instalowany w repozytorium po włączeniu tej opcji",
		admin_collaboration_activity_stream: "Konfiguracja zdarzenia dla strumienia czynności",
		admin_collaboration_activity_stream_label: "Przekaż informacje o zdarzeniach do programu IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Określ, czy chcesz przekazywać informacje o zdarzeniach, takich jak tworzenie dokumentów, pobieranie, zwracanie, komentarze, znaczniki i zasoby współużytkowane do programu IBM Connections.<br><br><b>Ważne:</b> Przekazywanie powiadomień do programu IBM Connections może wpłynąć na wydajność repozytorium.",

		admin_collaboration_activity_stream_instruction: "Można skonfigurować repozytorium do przekazywania informacji o zdarzeniach, takich jak komentarze i zatwierdzenia dokumentu do programu IBM Connections. Zdarzenia są wyświetlane na stronie <b>Najnowsze aktualizacje</b> w społecznościach produktu IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignoruj informacje o zdarzeniach dla konkretnych użytkowników i grup:",
		admin_collaboration_activity_stream_ignored_ids_hover: "Można zignorować zdarzenia, które są generowane przez konkretnych użytkowników lub grupy, takich jak administratorzy lub konta systemowe, aby zmniejszyć liczbę powiadomień widocznych dla użytkowników. Jeśli na przykład przeprowadzana jest migracja treści, można określić, że ignorowane są zdarzenia, które są generowane przez konto używane do migracji.",
		admin_collaboration_activity_stream_userid: "Nazwa użytkownika programu IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Określ konto systemowe, którego rozwiązanie Content Platform Engine będzie używać do uwierzytelniania i wysłania informacji o zdarzeniach do programu IBM Connections. Użytkownik musi mieć przypisaną rolę <b>trustedExternalApplication</b> w aplikacji Widget Container w programie IBM Connections.<br><br><b>Wskazówka:</b> Domyślnie administrator programu IBM Connections ma odpowiednie uprawnienia. Można użyć identyfikatora administratora jako nazwy użytkownika",
		admin_collaboration_activity_stream_password: "Hasło użytkownika programu IBM Connections:",

		admin_help_url: "Adres URL pomocy dla użytkownika końcowego:",
		admin_help_url_hover: "<b>Ważna uwaga:</b> Począwszy od wersji 3.0.0 programu IBM Content Navigator Centrum Wiedzy IBM zainstalowane przez klienta nie będzie aktualizowane. Aby uzyskać więcej informacji o korzystaniu z indywidualnie skonfigurowanej pomocy, należy skontaktować się z działem obsługi klienta.<br><br>Począwszy od wersji 3.0.0 programu IBM Content Navigator adres URL pomocy dla użytkownika końcowego prowadzi do Centrum Wiedzy IBM. Adres URL Centrum Wiedzy IBM to: http://www.ibm.com/support/knowledgecenter.<br><br>Aby nadal używać poprzedniej wersji Centrum Wiedzy IBM zainstalowanego przez klienta, podaj adres URL instancji tego Centrum Wiedzy  wdrożonego przez narzędzie IBM Content Navigator Configuration and Deployment Tool. Adres URL musi być dostępny dla klientów. Adres URL ma format http://nazwa_serwera:numer_portu/kc.<br><br>Nazwa serwera i numer portu są dostępne w pliku console.log w podkatalogu KnowledgeCenter/logs katalogu instalacyjnego programu IBM Content Navigator.",

		admin_help_default: "Użyj domyślnej pomocy IBM",
		admin_custom_help: "Użyj niestandardowego systemu pomocy",
		admin_help_kc: "Użyj niestandardowego Centrum Wiedzy zainstalowanego przez klienta",
		admin_help_kc_hover: "<b>Ważna uwaga:</b> Począwszy od wersji 3.0.0 programu IBM Content Navigator Centrum Wiedzy IBM zainstalowane przez klienta nie będzie aktualizowane. Aby uzyskać więcej informacji o korzystaniu z indywidualnie skonfigurowanej pomocy, należy skontaktować się z działem obsługi klienta.<br><br>Jeśli chcesz używać poprzedniej wersji Centrum Wiedzy IBM zainstalowanego przez klienta, wybierz tę opcję, aby nadal dodawać treści do wdrożonej wcześniej instancji tego Centrum Wiedzy.",
		admin_help_taxonomy: "Kod taksonomii:",
		admin_help_taxonomy_hover: "Podaj kod taksonomii dla niestandardowego systemu pomocy.<br><br>Kod taksonomii dla programu IBM Content Navigator to SSEUEX. W celu wyświetlenia pomocy pod inną nazwą produktu w instancji Centrum Wiedzy IBM zainstalowanej przez klienta musisz dodać unikalny kod taksonomii do pliku KC_taxonomy.ditamap w katalogu KnowledgeCenter/usr/taxonomy katalogu instalacyjnego IBM Content Navigator.",
		admin_help_context: "Kontekst pomocy:",
		admin_help_context_hover: "Podaj kontekst dla niestandardowego systemu pomocy.<br><br>Pomoc dla programu IBM Content Navigator znajduje się w katalogu KnowledgeCenter/usr/content/com.ibm.usingeuc.doc w katalogu instalacyjnym programu IBM Content Navigator. Kontekst dla domyślnego systemu pomocy to com.ibm.usingeuc.doc. Aby udostępnić niestandardowy system pomocy, dodaj treść do nowego podkatalogu w katalogu KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Strona powitalna:",
		admin_help_welcome_hover: "Podaj nazwę tematu, który chcesz wykorzystać jako stronę powitalną wyświetlaną użytkownikom uruchamiającym system pomocy. Musisz utworzyć plik właściwości określający położenie strony powitalnej i dodać plik właściwości do katalogu KnowledgeCenter/usr/conf katalogu instalacyjnego IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Plik JSON z rozszerzeniami typów MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Sprawdź nazwę i pełną ścieżkę pliku JSON. Może to być zwykły plik w systemie plików lub adres URL wskazujący na plik JSON.  <br><br>Treść pliku JSON jest tablicą definicji typów MIME. <br><br>Definicja typu MIME zawiera cztery klucze: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Pierwsze dwa klucze, \"mimeTypes\", \"extensions\", są wymagane i mogą być tablicami łańcuchów rozdzielonych znakiem \",\". Ostatnie dwa klucze, \"fileType\", \"iconName\", są opcjonalne. <br><br>Na przykład: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Konfiguracja menedżera zadań",
		admin_taskmanager_service: "Usługa menedżera zadań:",
		admin_taskmanager_service_hover: "Wskaż, czy chcesz użyć usługi menedżera zadań w celu utworzenia i uruchomienia zadań asynchronicznych. <br><br>W przypadku zmiany tego ustawienia musisz zrestartować aplikację WWW IBM Content Navigator, aby zmiany odniosły skutek.",
		admin_taskmanager_url: "Adres URL usługi menedżera zadań:",
		admin_taskmanager_url_hover: "Podaj adres URL, za pośrednictwem którego inne aplikacje mogą komunikować się z usługą menedżera zadań. Adres URL ma format http://nazwa_serwera:numer_portu/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Katalog dziennika menedżera zadań:",
		admin_taskmanager_logdirectory_hover: "Domyślnie pliki dziennika dla usługi menedżera zadań są zapisywane w tym samym katalogu, co pliki dziennika serwera aplikacji WWW. <br><br>Jeśli chcesz, aby dane rejestrowania były zapisywane w innym katalogu na serwerze programu IBM Content Navigator, podaj pełną ścieżkę do katalogu, w którym mają być zapisywane pliki dziennika wygenerowane przez składnik menedżera zadań. <br><br>W przypadku zmiany tego ustawienia musisz zrestartować aplikację WWW IBM Content Navigator, aby zmiany odniosły skutek.",
		admin_taskmanager_heartBeatMonitor: "Monitorowanie pulsu klastra",
		admin_taskmanager_heartBeatMonitor_hover: "Wyłącznie środowiska klastrowe o wysokiej dostępności. W przypadku włączenia tej opcji usługa menedżera zadań przekierowuje zadania z węzłów obecnie nieczynnych do węzłów obecnie działających. <br><br>W przypadku zmiany tego ustawienia musisz zrestartować aplikację WWW IBM Content Navigator, aby zmiany odniosły skutek.",

		admin_syncserver_title: "Konfiguracja serwera synchronizacji",
		admin_syncserver_enable: "Usługi synchronizacji:",
		admin_syncserver_enable_hover: "Określ, czy chcesz, aby użytkownicy uzyskujący dostęp do tego pulpitu mogli synchronizować swoje ulubione elementy na swoich stacjach roboczych i urządzeniach przenośnych.<br><br><b>Ważne:</b> Aby móc używać tego składnika, musisz także wykonać następujące zadania:<ul><li>Podaj <b>Publiczny adres URL usług synchronizacji</b> w sekcji <b>Usługi synchronizacji</b> narzędzia administracyjnego.</li><li>Dodaj repozytorium, dla którego włączono usługi synchronizacji, do tego pulpitu.</li></ul>Po wyłączeniu tej opcji i jednoczesnym dodaniu repozytorium, dla którego włączono usługi synchronizacji, do tego pulpitu, ustawienie dla repozytorium jest ignorowane.",
		admin_mobileqr_enable: "Pokaż kod QR aplikacji IBM Navigator na stronie logowania:",
		admin_mobileqr_enable_hover: "Włącz tę opcję, jeśli na stronie logowania klienta WWW ma być wyświetlany kod QR dla aplikacji mobilnej IBM Navigator <br><br>Zeskanowanie kodu QR powoduje przeniesienie użytkownika do sklepu z aplikacjami właściwego dla używanego urządzenia. Stamtąd użytkownik może pobrać aplikację mobilną IBM Navigator.",

		admin_streamlineservice_enable: "Usługa Edit:",
		admin_streamlineservice_enable_hover: "Tylko dla użytkowników FileNet P8. Włącz tę opcję, jeśli użytkownicy pulpitu mają mieć możliwość łatwego dodawania i edytowania dokumentów z aplikacji rodzimych używanych na komputerach lokalnych. <br><br>Aby użyć tego ustawienia, należy także: <ul><li>Włączyć usługę Edit w jednym lub większej liczbie repozytoriów powiązanych z tym pulpitem</li><li>Zainstalować klienta IBM Content Navigator Edit na stacjach roboczych użytkowników</li></ul>",

		admin_repository_general_instructions: "Przed skonfigurowaniem parametrów, właściwości systemowych, folderów itp. należy nawiązać połączenie z repozytorium.",
		admin_repository_system_instructions: "Określ, które właściwości systemowe są wyświetlane dla domen i folderów w tym repozytorium.",

		admin_desktop_general_create_instructions: "Pulpit określa, co użytkownik widzi i co może zrobić po zalogowaniu się do klienta WWW. Po utworzeniu pulpitu można wysłać adres URL pulpitu do użytkowników, co umożliwi im dostęp do pulpitu.",
		admin_desktop_admin_instructions: "Pulpit administracyjny jest udostępniany z klientem WWW, aby umożliwić użytkownikom administracyjnym konfigurowanie klienta WWW. Ten pulpit ma dostęp do wszystkich repozytoriów skonfigurowanych dla klienta WWW.",
		admin_desktop_repositories_instructions: "Określ repozytoria, do których użytkownicy będą mieli dostęp z tego pulpitu. Repozytoria należy skonfigurować przed dodaniem ich do pulpitu.<br><br><b>Wskazówka:</b> Można ograniczyć to, które repozytoria są dostępne dla każdego składnika podczas konfigurowania układu pulpitu.",
		admin_desktop_menus_instructions: "Określ menu, do których użytkownicy będą mieli dostęp z tego pulpitu. Menu określają dostępne działania w zależności od opcji wybranych w interfejsie.<br><br><b>Wskazówka:</b> Zawartość menu można zmodyfikować w sekcji <b>Menu</b> narzędzia administracyjnego lub można utworzyć nowe typy menu, tworząc wtyczki.",

		admin_desktop_no_repositories: "Brak jest skonfigurowanych repozytoriów.",

		admin_desktop_id_hover: "Identyfikator pulpitu jest zawarty w adresie URL klienta WWW i określa, który pulpit jest otwierany, gdy użytkownik zaloguje się do klienta WWW. Identyfikator musi być unikalny i nie można zmienić identyfikatora po zapisaniu pulpitu.<br><br>Identyfikator może zawierać tylko znaki alfanumeryczne; rozróżniana jest wielkość liter.",
		admin_desktop_id_disabled_hover: "Identyfikatora pulpitu nie można zmienić. Jeśli chcesz użyć innego identyfikatora, musisz utworzyć nowy pulpit.",
		admin_desktop_name_hover: "Nazwa pulpitu nie może zawierać żadnego z następujących znaków: * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Konfiguracja użytkownika może obejmować tylko jeden domyślny pulpit.",

		admin_repository_id_disabled_hover: "Nie można zmieniać identyfikatora repozytorium. Jeśli konieczne jest korzystanie z innego identyfikatora, wówczas należy utworzyć połączenie z nowym repozytorium.",
		admin_printService_enable: "Drukuj za pomocą usługi drukowania IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Jeśli włączysz usługę drukowania IBM Daeja ViewONE, dokumenty będą przekształcane do formatu PDF i możliwe będzie drukowanie z dowolnej przeglądarki WWW.<br><br>Jeśli wyłączysz usługę drukowania IBM Daeja ViewONE, możliwe będzie drukowanie dokumentów tylko z przeglądarek WWW obsługujących aplety Java.  Niektóre przeglądarki WWW nie obsługują apletów Java, a tym samym nie pozwalają na drukowanie za pomocą apletu.<br><br>Listę obsługiwanych przeglądarek zawiera dokumentacja.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Katalog główny użytkownika",
		admin_file_tracking_doc_directory_my_documents: "Katalog dokumentów użytkownika",
		admin_file_tracking_doc_directory_qp: "Kwalifikowana ścieżka",
		admin_file_tracking_section_tile: "Konfiguracja śledzenia plików",
		admin_file_tracking_home_path: "Ścieżka katalogu głównego",
		admin_file_tracking_my_documents: "Moje dokumenty",
		admin_file_tracking_exact_path: "Pełna ścieżka:",
		admin_file_tracking_qp: "Kwalifikowana ścieżka",
		admin_file_tracking_ev: "Zmienna środowiskowa",
		admin_file_tracking_ev_us: "Niestandardowa zmienna środowiskowa ",
		admin_file_tracking_del_local_copy: "Usuń kopię lokalną:",
		admin_file_tracking_yes: "Tak",
		admin_file_tracking_no: "Nie",
		admin_file_tracking_del_local_copy_rt_state_editable: "Zezwól użytkownikom na zastąpienie tego ustawienia",
		admin_file_tracking_del_local_copy_rt_state1: "Tak",
		admin_file_tracking_del_local_copy_rt_state2: "Nie",
		admin_file_Tracking_label: "Śledzenie pliku:",
		admin_file_Tracking_disable: "Wyłącz",
		admin_file_Tracking_enable: "Włącz",
		admin_file_tracking_label_hover_help: "Śledzenie pliku wykorzystuje aplet do pobierania i wczytywania dokumentów do określonego katalogu na komputerach użytkowników. Aplet umożliwia również programowi IBM Content Navigator znalezienie dokumentów na komputerach użytkowników, gdy użytkownicy zwracają dokumenty.",
		admin_file_tracking_doc_directory: "Miejsce przechowywania:",
		admin_file_tracking_open_file: "Otwórz plik automatycznie",
		admin_file_Tracking_append_qualified_path: "Dołącz katalog",
		admin_file_Tracking_append_qualified_path_hover_help: "Można dołączyć katalog na końcu zmiennej środowiskowej, jeśli dokumenty mają zostać zapisane w określonym podkatalogu. <br/><br/>Na przykład można określić, że dokumenty są pobierane do katalogu <i>EnterpriseDocuments</i> w katalogu głównym użytkownika.",
		admin_file_Tracking_append_ev: "Dołącz zmienną środowiskową",
		admin_file_Tracking_append_ev_hover_help: "Można dołączyć zmienną środowiskową, jeśli dokumenty mają być zapisywane w dynamicznie określonym katalogu, takim jak katalog użytkownika.<br/><br/>Na przykład można określić, że dokumenty są przechowywane w podkatalogu <i>nazwa_użytkownika</i> we współużytkowanym katalogu sieciowym. ",
		admin_file_tracking_doc_directory_hover_help: "Określ miejsce, w którym dokumenty mają być zapisywane, gdy są pobierane i wczytywane.<br/><br/> <b>Wskazówka</b>: Aby przechowywać dokumenty w katalogu głównym użytkownika lub domyślnym katalogu dokumentów, wybierz opcję <b>Zmienna środowiskowa</b>, która zawiera predefiniowane zmienne, które wskazują te lokalizacje.",
		admin_file_tracking_qualified_path_hover_help: "Użyj odpowiedniej struktury katalogów dla systemów operacyjnych Windows lub Mac w celu określenia katalogu lub katalogu sieciowego, w którym zamierzasz zapisywać dokumenty. <ul><li>Dla systemu Windows, dołącz literę napędu w ścieżce, np. C:\\Dokumenty korporacyjne.</li><li>W przypadku współużytkowanego katalogu sieciowego wprowadź ścieżkę w formacie\\\\nazwa_serwera\\katalog</li></ul><br/><b>Ważne:</b> Aby możliwe było korzystanie z tej opcji, struktura katalogu musi być możliwa do utworzenia na wszystkich klienckich stacjach roboczych w środowisku użytkownika.",
		admin_file_tracking_environment_variable_path_hover_help: "Użyj odpowiednich zmiennych środowiskowych dla systemów operacyjnych Windows lub Mac w celu określenia katalogu lub katalogu sieciowego, w którym zamierzasz zapisywać dokumenty. <br/><br/>Opcja <b>Katalog osobisty użytkownika</b> zapisuje dokumenty w następującym katalogu:<br/><ul><li>Windows: C:\\Użytkownicy\\nazwa_użytkownika</li><li>Mac: /Użytkownicy/nazwa_użytkownika</li></ul><br/>Opcja <b>Katalog osobisty użytkownika</b> zapisuje dokumenty w następującym katalogu:<br/><ul><li>Windows: C:\\Użytkownicy\\nazwa_użytkownika\\Dokumenty</li><li>Mac: /Użytkownicy/nazwa_użytkownika/Dokumenty</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Określ, czy lokalna kopia dokumentu ma zostać usunięta po dodaniu lub wprowadzeniu dokumentów do repozytorium przez użytkownika.<br/><br/>Usuwanie lokalnej kopii zapewnia następujące korzyści:<br/><ul><li>Wymuszenie zgodności ze strategiami informatycznymi</li><li>Zapewnienie, że użytkownicy pracują z najnowszymi wersjami dokumentów</li></ul><br/><b>Ograniczenie:</b> To ustawienie nie jest używane, gdy użytkownicy dodają dokumenty, przeciągając je i upuszczając.<br/><br/>W przypadku programu IBM Content Navigator for Microsoft Office musisz wybrać opcję <b>Usuń pliki lokalne, gdy użytkownicy dodają lub wprowadzają dokument bądź anulują pobieranie dokumentu</b> w sekcji <b>Konfiguracja pakietu Office</b> na pulpicie.",
		admin_file_tracking_open_file_hover_help: "To ustawienie zastępuje wszystkie preferencje obsługi dokumentów, które są skonfigurowane w przeglądarkach WWW użytkowników. </br></br><b>Ograniczenie:</b> To ustawienie nie jest używane przez program IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Zastąp kopię lokalną:",
		admin_file_tracking_over_write_file_hover_help: "Określ, czy chcesz zastąpić kopię lokalną dokumentu, gdy użytkownik pobiera dokument z repozytorium. <br/><br/>Zastępowanie kopii lokalnej umożliwia:<br/><ul><li>Zapewnienie, że użytkownicy pracują z najnowszymi wersjami dokumentów</li><li>Uniemożliwienie wyświetlenia użytkownikom zapytania, gdy istnieje kopia lokalna</li></ul> </br></br><b>Ograniczenie:</b> To ustawienie nie jest używane przez program IBM Content Navigator for Microsoft Office, jeśli zostanie wybrana opcja <b>Zezwól użytkownikom na zastąpienie tego ustawienia</b>.",
		admin_file_tracking_over_write_file_state_editable: "Zezwól użytkownikom na zastąpienie tego ustawienia",
		admin_file_tracking_inline_help: "Śledzenie plików usprawnia proces pobierania i zwracania dokumentów do repozytorium. Funkcja pozwala również zarządzać sposobem, w jaki dokumenty są przechowywane na komputerach użytkowników. <br/><br/>Ponadto śledzenie plików pozwala na śledzenie dokumentów w wielu komponentach programu IBM Content Navigator, takich jak klient WWW i IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Przed nawiązaniem połączenia z repozytorium należy włączyć uwierzytelnianie standardowe lub serwera.",
		admin_box_use_oauth: "Typ uwierzytelniania:",
		admin_box_use_oauth_hover: "Wybierz uwierzytelnianie standardowe lub serwera w środowisku produkcyjnym, jeśli za pośrednictwem programu IBM Content Navigator zapewniany jest dostęp do dokumentów Box. Określ wartości client_id i OAuth2 client_secret właściwe dla tego wdrożenia programu IBM Content Navigator. Możesz uzyskać te wartości z usługi Box po utworzeniu aplikacji Box dla serwera IBM Content Navigator.<br/><br/>W środowisku programistycznym wybierz uwierzytelnianie programisty. Programiści mogą zalogować się do usługi Box, korzystając ze swojego konta programistycznego i wygenerować znacznik programisty ważny przez 60 minut. Znaczniki takie umożliwiają logowanie się do usługi Box przy użyciu dowolnego identyfikatora użytkownika - znacznik należy wówczas podawać jako hasło.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Poddomena konta korporacyjnego Box:",
		admin_box_share: "Identyfikator połączenia menedżera zadań:",
		admin_box_share_hover: "Przy kopiowaniu lub udostępnianiu z wykorzystaniem usługi Box menedżer zadań uruchamia zadania w tle modyfikujące repozytorium, korzystając z identyfikatora i hasła administratora.<br/><br/>Kliknij opcję Ustaw i zaloguj się do usługi Box przy użyciu poprawnego konta administratora usługi Box.<br/><br/>Jeśli konfigurujesz pulpit, w którym jako repozytorium na pliki udostępnione ma być używane to repozytorium Box, musisz określić administratora usługi Box, który ma w niej nieograniczone miejsce na przechowywanie danych.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Otwórz plik automatycznie",
		file_tracking_runtime_overwrite_hover_help: "Jeśli ta opcja nie zostanie wybrana i w lokalnym systemie plików istnieje już dokument o tej samej nazwie, zostanie on pobrany z repozytorium, lecz nie zostanie zapisany lokalnie, dopóki nie zostanie wykonana jedna z poniższych czynności:<br/><ul><li> Pobierz dokument do podkatalogu katalogu domyślnego. Po wybraniu podkatalogu lokalizację dokumentu można śledzić za pośrednictwem aplikacji WWW.</li><li>Zmień nazwę dokumentu, który jest pobierany. Zmiana nazwy dokumentu zapobiega konfliktowi nazwy pliku.</li></ul>",
		open_file: "Otwórz plik automatycznie",
		over_write_file: "Zastąp kopię lokalną",
		checkout_and_download_file: "Pobierz i ściągnij dokumenty",
		download_to_local_directory: "Pobierz do:",
		checkout_and_download_button_title: "Pobierz i ściągnij",
		checkout_without_java_confirmation_dialog: "Plik nie może zostać pobrany i śledzony przez funkcję śledzenia plików.",
		browse_for_directory: "Przeglądaj",
		selected_documents: "Wybrane dokumenty",

		checkout_without_java_confirmation_text: "Ten problem może wystąpić z następujących przyczyn:<br/><ul><li>Środowisko wykonawcze programów Java (JRE) nie jest zainstalowane na stacji roboczej.</li><li>Wtyczka Java nie jest włączona w przeglądarce WWW.</li><li>Przeglądarka WWW nie obsługuje technologii Java.</li></ul><br/><br/>Aby rozwiązać ten problem, wykonaj odpowiednie czynności:<br/><br/><ul><li>Jeśli wciąż chcesz pobrać plik bez włączonego śledzenia plików, kliknij przycisk OK.</li><li>Aby pobrać plik z włączonym śledzeniem plików, anuluj pobieranie i upewnij się, że środowisko JRE jest zainstalowane na stacji roboczej, a wtyczka Java jest włączona w przeglądarce WWW.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Dokument został pobrany i ściągnięty, ale nie można otworzyć dokumentu.",
		runtime_file_tracking_open_error_explanation: "System operacyjny zainstalowany na stacji roboczej nie obsługuje plików tego typu.",
		runtime_file_tracking_open_error_userResponse: "Aby rozwiązać ten problem, wykonaj jedną z następujących czynności:<br/><br/><ul><li>Aby pracować z dokumentem, otwórz klienta WWW z innej stacji roboczej, która ma inny system operacyjny.</li><li>Jeśli wymagane jest tylko wyświetlenie dokumentu, kliknij prawym przyciskiem myszy dokument w kliencie WWW i kliknij opcję Otwórz.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Dokument został pobrany, ale nie został ściągnięty.",
		runtime_file_tracking_save_file_error_explanation: "Dokument o tej samej nazwie istnieje w lokalnym systemie plików, ale nie został zastąpiony. ",
		runtime_file_tracking_save_file_error_userResponse: "Jeśli chcesz pobrać plik z repozytorium, należy zastąpić lokalną kopię dokumentu podczas pobierania dokumentu z repozytorium.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Dokument został pobrany, ale nie może zostać ściągnięty lub otwarty.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Dokument o tej samej nazwie istnieje w lokalnym systemie plików. Plik nie został jednak nadpisany, co uniemożliwia pobranie i otwarcie dokumentu z repozytorium.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Jeśli chcesz pobrać plik z repozytorium, należy zastąpić lokalną kopię dokumentu podczas pobierania dokumentu z repozytorium.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Nie można ściągnąć dokumentu.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "Zmienna środowiskowa ${0}, która jest wymagana do śledzenia pliku, nie została zdefiniowana na tym komputerze klienckim.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Aby rozwiązać problem:<br/><br/><ul><li>Dodaj zmienną środowiskową ${0} do zmiennych środowiskowych systemu operacyjnego.</li><li>Wyloguj się z klienta WWW i zamknij przeglądarkę. Następnie zaloguj się ponownie.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Dokument nie może zostać pobrany i śledzony przez aplet śledzenia plików.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Katalog ${0}, który jest wymagany do śledzenia plików, nie jest zdefiniowany i nie może zostać utworzony.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Aby rozwiązać ten problem, wykonaj odpowiednie czynności:<br/><br/><ul><li>Kliknij przycisk Przeglądaj i wybierz inny katalog na komputerze klienta. Jeśli zostanie wybrana ta opcja, plik nie będzie śledzony.</li><li>Skontaktuj się z administratorem systemu i poproś o określenie innego katalogu do użycia na potrzeby śledzenia plików. Może to być na przykład konieczne, jeśli określony katalog znajduje się w systemie operacyjnym Windows, ale uruchomiony jest system Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "W przypadku uzyskiwania dostępu do komputera desktop z urządzeń z innymi systemami operacyjnymi istnieje możliwość ograniczenia prawdopodobieństwa wystąpienia problemów w przypadku podjęcia jednej z następujących czynności:<br/><br/><ul><li>Użyj zmiennych środowiskowych do określenia miejsca przechowywania na komputerach klienckich.</li><li>Utwórz różne pulpity dla użytkowników urządzeń każdego typu. Utwórz, na przykład, pulpit dla użytkowników z systemem operacyjnym Windows i pulpit dla użytkowników z systemem Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Nie można przetworzyć żądania.",
		runtime_file_tracking_generic_error_explanation: "Wystąpił błąd w aplecie śledzenia plików.",
		runtime_file_tracking_generic_error_userResponse: "Skontaktuj się z administratorem systemu, aby uzyskać pomoc.",
		runtime_file_tracking_generic_error_adminResponse: "Otwórz konsolę Java i spróbuj ponownie wysłać żądanie. Szczegóły błędu są wyświetlane w konsoli Java.<br/><br/>Dostęp do konsoli Java można uzyskać z okna Panelu sterowania (Windows) lub z okna Preferencje systemowe (Macintosh) dla systemu operacyjnego użytkownika.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Nie można przetworzyć żądania",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Poniższe pliki zostały dodane do repozytorium, lecz nie zostały usunięte z lokalnego systemu plików: ${0}. Zwykle dzieje się tak, gdy pliki są otwarte lub są używane przez inną aplikację. W razie potrzeby można usunąć te pliki ręcznie.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Nie można ściągnąć dokumentu.",
		runtime_file_tracking_ioexception_error_explanation: "Nie można ściągnąć dokumentu.",
		runtime_file_tracking_ioexception_userResponse: "Być może użytkownik nie posiada odpowiednich uprawnień do zapisu w następującym katalogu: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Upewnij się, że masz uprawnienia do zapisu w określonym katalogu. Jeśli użytkownik nie ma uprawnień do zapisu w określonym katalogu, skontaktuj się z administratorem systemu.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Nie można przetworzyć żądania.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Ten błąd może wystąpić z następujących powodów:<br/><br/><ul><li>Używasz przeglądarki Safari w systemie Mac OS i środowisko Java działa w trybie bezpiecznym.</li><li>Nie masz uprawnień do odczytu/zapisu w katalogu określonym w konfiguracji śledzenia plików dla używanego pulpitu.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Możesz dalej używać programu IBM Content Navigator bez śledzenia plików lub wykonać następujące kroki, aby rozwiązać problem:<br/><br/><ol><li>Włącz tryb niezabezpieczony środowiska Java w przeglądarce Safari.</li><li>Jeśli pojawi się pytanie, czy ufać serwisowi WWW IBM Content Navigator, kliknij opcję <b>Ufaj</b>, aby załadować stronę, a następnie włącz tryb niezabezpieczony w Safari.</li></ol><br/><br/>Jeśli przeglądarka Safari jest skonfigurowana prawidłowo, wykonaj następujące kroki, aby rozwiązać problem:<br/><br/><ol><li>Upewnij się, że masz uprawnienia do odczytu/zapisu w katalogu określonym w konfiguracji śledzenia plików dla używanego pulpitu.</li><li>Jeśli nie masz uprawnień do odczytu/zapisu w katalogu, zmodyfikuj uprawnienia do katalogu.</li><li>Jeśli nie możesz zmienić swoich uprawnień do katalogu, administrator musi zmienić katalog skonfigurowany dla śledzenia plików lub udostępnić Ci pulpit z innym skonfigurowanym katalogiem śledzenia plików.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Nie można przetworzyć żądania.",
		runtime_file_tracking_java__notfound_error_explanation: "Ten problem występuje zwykle w następujących sytuacjach:<br/><br/><ul><li>Środowisko Java Runtime Environment (JRE) nie jest zainstalowane lub nie jest włączone na stacji roboczej.</li><li>Wersja środowiska JRE na stacji roboczej jest niekompatybilna z wersją programu IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Możesz dalej używać programu IBM Content Navigator bez śledzenia plików lub wykonać następujące kroki, aby rozwiązać problem ze środowiskiem JRE:<br/><br/><ol><li>Upewnij się, że środowisko JRE jest zainstalowane na stacji roboczej.</li><li>Upewnij się, że wersja środowiska JRE na stacji roboczej jest kompatybilna z programem IBM Content Navigator. Lista obsługiwanych wersji jest zamieszczona w dokumencie <i>Hardware and software prerequisites for IBM Content Navigator</i> (Wymagania sprzętowe i programowe dla produktu IBM Content Navigator) w witrynie działu wsparcia IBM dla oprogramowania.</li><li>Upewnij się, że środowisko JRE jest włączone na stacji roboczej.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Nie można przetworzyć żądania.",
		runtime_file_tracking_security_error_explanation: "Nie masz uprawnień do odczytu/zapisu w katalogu określonym w konfiguracji śledzenia plików dla używanego pulpitu.",
		runtime_file_tracking_security_error_userResponse: "Możesz nadal używać programu IBM Content Navigator bez śledzenia plików lub we współpracy z administratorem systemu wykonać następujące kroki:<ol><li>Upewnij się, że masz uprawnienia do odczytu/zapisu w katalogu określonym w konfiguracji śledzenia plików dla używanego pulpitu. </li><li>Jeśli nie masz uprawnień do odczytu/zapisu w katalogu, zmodyfikuj uprawnienia do katalogu.</li><li>Jeśli nie możesz zmienić swoich uprawnień do katalogu, administrator musi zmienić katalog skonfigurowany dla śledzenia plików lub udostępnić Ci pulpit z innym skonfigurowanym katalogiem śledzenia plików.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Pobrano następujące dokumenty: ${0}.",

		admin_file_tracking_inline_help: "Śledzenie plików usprawnia proces dodawania dokumentów do repozytorium i pobierania ich. Umożliwia ono także zarządzanie sposobem, w jaki dokumenty są przechowywane na komputerach użytkowników.<br/><br/>Ponadto śledzenie plików pozwala na śledzenie dokumentów w wielu komponentach programu IBM Content Navigator, takich jak klient WWW i IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "Identyfikator menu nie może zaczynać się od \"Default\".  \"Default\" to zastrzeżony przedrostek dla identyfikatorów menu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "Identyfikator może zawierać tylko znaki alfanumeryczne; rozróżniana jest wielkość liter.",
		admin_repository_id_hover: "Identyfikator repozytorium jest zawarty w adresach URL klienta WWW, w ulubionych oraz w odsyłaczach e-mail, ponieważ określa repozytorium, do którego użytkownik ma się zalogować. Identyfikator musi być unikalny i nie można zmienić identyfikatora po zapisaniu repozytorium.<br><br>Identyfikator może zawierać tylko znaki alfanumeryczne; rozróżniana jest wielkość liter.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Nazwa nie może zawierać następujących znaków: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "Identyfikator pulpitu nie może zawierać spacji ani żadnego z następujących znaków: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Nazwa pulpitu nie może zawierać żadnego z następujących znaków: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Nazwa wyświetlana nie może zawierać żadnego z następujących znaków: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Określ nazwę repozytorium, która będzie wyświetlana dla użytkowników w kliencie WWW.<br><br>Nazwa nie może zawierać następujących znaków: * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Określ nazwę hosta lub adres IP serwera Content Manager OnDemand, z którym zamierzasz nawiązać połączenie, np. server.id.com.",
		admin_server_p8_name_hover: "Określ adres URL serwera Content Engine lub Content Platform Engine. W adresie rozróżniana jest wielkość liter, a sam adres ma format:<br><br><ul><li>Na serwerze WebSphere Application Server, iiop://nazwa_hosta:numer_portu/FileNet/Engine. W przypadku instalacji podstawowych domyślny numer portu to 2809.</li><li>Na serwerze WebLogic Server, t3://nazwa_hosta:numer_portu/FileNet/Engine. Domyślny numer portu to 7001.</li></ul><br><br>W przypadku wysoce dostępnych konfiguracji serwerów Content Engine i Content Platform Engine, użyj adresu URL wysoce dostępnego transportu EJB bez przedrostka cemp:. ",
		admin_server_p8_protocol_hover: "Określ protokół, który będzie używany w celu komunikowania się z silnikiem treści.",
		admin_server_cm_name_hover: "Określ nazwę katalogu lokalnego bazy danych Content Manager lub nazwę połączenia z serwerem bibliotecznym. Jest to wartość określona dla zmiennej ICMSERVER.",
		admin_repository_cmis_hover: "Określ identyfikator ID repozytorium, z którym zamierzasz nawiązać połączenie.  Identyfikator każdego repozytorium w środowisku CMIS znajduje się w dokumencie usługi powiązania AtomPub.  <br/><br/><b>Wskazówka:</b> Można również wpisać gwiazdkę (*), aby nawiązać połączenie z pierwszym lub jedynym repozytorium zdefiniowanym w dokumencie usługi powiązania AtomPub.",
		admin_url_cmis_hover: "Format adresu URL różni się w zależności od dostawcy usług. Aby uzyskać informacje o adresie URL, należy zapoznać się z dokumentacją CMIS lub skontaktować się z administratorem serwera CMIS.",
		admin_repcfg_cmis_status_columns_hover: "Określ stany elementów, które zamierzasz wyświetlać jako ikony. Ikony stanu są wyświetlane obok dokumentów na liście treści.",
		admin_port_hover: "Określ numer portu TCP/IP, na którym nasłuchuje serwer Content Manager OnDemand. Wartością domyślną jest 1445.",
		admin_unified_searches_hover: "Określ, czy chcesz, aby użytkownicy mogli zapisywać w tym repozytorium wyszukiwania w różnych repozytoriach.<br/><br/>Jeśli ta opcja nie zostanie włączona, użytkownicy mogą nadal tworzyć wyszukiwania w różnych repozytoriach uruchamiane na tym repozytorium. Można zablokować możliwość tworzenia przez użytkowników wyszukiwań w różnych repozytoriach na poziomie komputera lokalnego.<br/><br/>W przypadku dopuszczenia wyszukiwań w różnych repozytoriach program IBM Content Navigator tworzy model danych wyszukiwania w różnych repozytoriach.<br/><br/>W przypadku programu IBM FileNet Content Manager ta opcja będzie aktywna tylko wtedy, gdy połączysz się z repozytorium jako administrator silnika treści.",
		admin_unified_searches_cm_hover: "Określ, czy chcesz, aby użytkownicy mogli zapisywać w tym repozytorium wyszukiwania w różnych repozytoriach.<br/><br/>Jeśli ta opcja nie zostanie włączona, użytkownicy mogą nadal tworzyć wyszukiwania w różnych repozytoriach uruchamiane na tym repozytorium. Można zablokować możliwość tworzenia przez użytkowników wyszukiwań w różnych repozytoriach na poziomie komputera lokalnego.<br/><br/>W przypadku dopuszczenia wyszukiwań w różnych repozytoriach program IBM Content Navigator tworzy model danych wyszukiwania w różnych repozytoriach.",
		admin_max_results_hover: "Określ, czy wymagane jest ograniczenie liczby wyników zwracanych w wyszukiwaniu. Jeśli liczba wyników wyszukiwania nie zostanie ograniczona, wówczas mogą pojawić się problemy z wydajnością, jeśli wyszukiwanie zwróci dużą liczbę wyników.",
		admin_timeout_hover: "Określ w sekundach czas wyszukiwania w repozytorium. Jeśli wyszukiwanie nie zostanie zakończone w określonym czasie, wówczas klient WWW anuluje żądanie. Zalecany limit czasu to 60 sekund.",
		admin_object_store_hover: "Określ składnicę obiektów, z którą ma zostać nawiązane połączenie na serwerze silnika treści. Nazwę symboliczną można uzyskać z konsoli administracyjnej silnika platformy treści.",
		admin_object_store_display_name_hover: "Nazwa wyświetlana składnicy obiektów jest wymagana, jeśli chcesz korzystać z przepływów pracy IBM FileNet P8. Można uzyskać nazwę wyświetlaną składnicy obiektów z konsoli administracyjnej silnika platformy treści.",
		admin_all_searches_hover: "Określ, czy ma być ograniczona liczba wyszukiwań wyświetlanych w obszarze <b>Wszystkie wyszukiwania</b>, gdy użytkownicy przeszukują repozytorium. Jeśli liczba wyszukiwań nie zostanie określona, a repozytorium zawiera dużą liczbę zapisanych wyszukiwań, mogą wystąpić problemy z wydajnością.",

		admin_text_desktop: "Pulpit",
		admin_text_repository: "Repozytorium",
		admin_text_plugin: "Wtyczka",
		admin_text_theme: "Kompozycja",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Przyczyna utajnienia",
		admin_text_redactions: "Utajnienia",
		admin_text_viewer_mapping: "Odwzorowanie przeglądarki",
		admin_text_mobile_feature: "Składnik dla urządzeń przenośnych",
		admin_test_interface_text: "Tekst interfejsu",
		admin_text_interface_text_locale: "Zlokalizowany tekst interfejsu",
		admin_text_icon_status: "Ikona statusu",
		admin_text_icon: "Ikona",
		admin_text_file_type: "Typ pliku",
		admin_text_viewer: "Przeglądarka",
		admin_text_desktop_access: "Dostęp lokalny",
		admin_text_mapped_properties_for_office: "Odwzorowane właściwości dla pakietu Microsoft Office",
		admin_text_desktop_features: "Składniki pulpitu",
		admin_text_unknown: "Nieznane",
		admin_folder_instruction: "Określ właściwości, które będą wyświetlane dla dokumentów i folderów na liście treści, gdy użytkownicy korzystają z funkcji przeglądania. Można również określić kolejność, w jakiej te właściwości będą wyświetlane.",
		admin_search_instruction: "Wskaż, które opcje są zaznaczone domyślnie podczas tworzenia wyszukiwania przez użytkowników.",
		admin_repository_office_conf_class_instruction: "Jeśli program IBM Content Navigator for Microsoft Office zainstalowano na komputerach klienckich w środowisku użytkownika, możesz wskazać sposób postępowania z dokumentami podczas ich dodawania lub wprowadzania do tego repozytorium.",
		admin_repository_office_conf_instruction: "Odwzoruj właściwości dokumentu Microsoft Office na właściwości zdefiniowane w tym repozytorium.<br/><br/>Jeśli dla pulpitu, z którym powiązane jest to repozytorium, włączone jest odwzorowywanie właściwości, a użytkownik doda dokument z produktu IBM Content Navigator for Microsoft Office, wówczas właściwości ustawione w dokumentach Microsoft Office są wykorzystywane do zapełniania właściwości w repozytorium.",
		admin_repository_office_conf_prop_mapping_title: "Odwzorowanie właściwości",
		admin_repository_office_conf_prop_mapping_title1: "Integracja z pakietem MS Office",
		admin_office_conf_instruction: "Użytkownik może decydować, w jaki sposób program IBM Content Navigator jest zintegrowany z aplikacjami Microsoft Office po zainstalowaniu na klientach narzędzia IBM Content Navigator for Microsoft Office.<br /><br /><b>Ważne:</b> W przypadku wyboru opcji <b>Odwzoruj właściwości pakietu Office…</b> konieczne jest także skonfigurowanie odwzorowania właściwości dla każdego repozytorium powiązanego z tym pulpitem lokalnym. Możliwe jest skonfigurowanie odwzorowań właściwości na karcie <b>Właściwości pakietu Office</b> dla każdego repozytorium w środowisku.",
		admin_desktop_workflows_instruction: "<b>Tylko systemy IBM FileNet P8:</b>Określ, które obszary aplikacji będą wyświetlane na tym pulpicie. Kolejność wybranych przestrzeni aplikacji określa kolejność, w jakiej przestrzenie aplikacji będą wyświetlane w kliencie WWW.<br><br><b>Wskazówka:</b> Nazwy wyświetlane przestrzeni aplikacji można zmienić, określając nowe nazwy w sekcji <b>Etykiety</b> narzędzia administracyjnego.",
		admin_search_filtered_properties_instruction: "Określ właściwości, wg których użytkownicy będą przeprowadzać wyszukiwanie. Wszelkie właściwości, które mają być niedostępne podczas wyszukiwania, można ukryć.",
		admin_search_filtered_operators_instruction: "Określ operatory dostępne dla użytkowników podczas wyszukiwania konkretnych typów danych, np. daty lub liczby całkowitej. Operatory, które mają być niedostępne, można ukryć.",
		admin_search_default_search_results_instruction: "Określ właściwości wyświetlane dla dokumentów i folderów w wynikach wyszukiwania. Możesz ukryć wszelkie właściwości, które mają być niewidoczne w wynikach wyszukiwania.",
		admin_search_default_search_results_p8_cmis_instruction: "Określ właściwości wyświetlane dla dokumentów w wynikach wyszukiwania. Możesz ukryć wszelkie właściwości, które mają być niewidoczne w wynikach.",

		admin_datetimeOp: "Data, godzina",
		admin_floatOp: "Liczba zmiennopozycyjna",
		admin_integerOp: "Liczba całkowita",
		admin_stringOp: "Łańcuch",
		admin_binaryOp: "Binarne",
		admin_objectOp: "Obiekt",
		admin_idOp: "Identyfikator",
		admin_userOp: "Użytkownik",
		admin_booleanOp: "Wartość logiczna",

		admin_string: "Łańcuch",
		admin_long: "Długi",
		admin_date: "Data",
		admin_double: "Podwójny",
		admin_object: "Obiekt",
		admin_guid: "GUID",
		admin_boolean: "Wartość logiczna",

		admin_repcfg_heading: "Aby zmienić domyślne zachowanie tego repozytorium, można ustawić odpowiednie parametry konfiguracyjne.",
		admin_repcfg_heading_od: "Aby zmienić domyślne zachowanie tego repozytorium, można ustawić odpowiednie parametry konfiguracyjne.<br /><br /><b>Ważne:</b> W celu korzystania z klienta WWW z programem Content Manager OnDemand należy również określić wartości dla parametrów, które znajdują się na karcie <b>Content Manager OnDemand</b> w obszarze <b>Ustawienia</b> - wartości te obowiązują dla wszystkich repozytoriów Content Manager OnDemand, z którymi użytkownik nawiązuje połączenia.",
		admin_repcfg_teamspaces: "Zarządzanie obszarem zespołu:",
		admin_repcfg_enable: "Włącz",
		admin_repcfg_disable: "Wyłącz",

		admin_repcfg_deliver_redacted_pdf_files_as: "Utajnione pliki PDF będą dostarczane jako:",
		admin_repcfg_burn_pdf_to_pdf: "Pliki PDF",
		admin_repcfg_burn_pdf_to_tiff: "Pliki TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Plik PDF z utajnieniami bazującymi na rolach może być dostarczany do klienta w innym formacie. Zmiana formatu pliku powoduje także zmianę rozszerzenia nazwy pliku i jego typu MIME.<br><br>Na przykład, gdy plik PDF jest dostarczany jako plik TIFF, rozszerzenie nazwy jest zmieniane na .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Umożliwia użytkownikom scalanie i dzielenie stron z utajnieniami bazującymi na rolach",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Wybierz tę opcję, aby umożliwić użytkownikom scalanie i dzielenie stron z utajnieniami bazującymi na rolach. Nawet po włączeniu tej opcji użytkownicy niebędący edytorami utajnienia nie będą mogli edytować utajnień bazujących na rolach i nie będą mieli dostępu do danych wrażliwych związanych z takimi utajnieniami.",
		admin_repcfg_modify_teamspace_roles: "Zezwalaj właścicielom na modyfikowanie ról w istniejących obszarach zespołów",
		admin_repcfg_tm_delete_teamspace: "Umożliwia właścicielom usuwanie obszarów zespołów wraz z zawartością",
		admin_repcfg_tm_delete_teamspace_id_missing: "Musisz podać nazwę użytkownika pełniącego rolę administratora repozytorium.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Musisz podać hasło administratora repozytorium.",
		admin_repcfg_teamspace_display_Recent: "Pokaż tylko ostatnio zmodyfikowane obszary zespołów ",
		admin_repcfg_teamspace_display_Recent_value: "Liczba dni od ostatniej modyfikacji:",

		admin_repcfg_folder_selector: "Folder główny:",
		admin_repcfg_enable_folder_selector: "Włącz",
		admin_repcfg_disable_folder_selector: "Wyłącz",
		admin_repcfg_SSO: "Pojedyncze logowanie:",
		admin_repcfg_teamspace_template_permission_text: "Przypisz twórców szablonu obszaru zespołu:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Wskaż grupy lub użytkowników, którzy mogą tworzyć szablony obszarów zespołów. Użytkownikom i grupom nadawane są odpowiednie ustawienia zabezpieczeń w wymaganych klasach i folderach. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Więcej informacji</a><br/><br/><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania obszarem zespołu.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Wskaż grupy lub użytkowników, którzy mogą tworzyć szablony obszarów zespołów. Użytkownicy są dodawani do odpowiednich list ACL i są im nadawane wymagane uprawnienia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Więcej informacji</a><br/><br/><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania obszarem zespołu.",
		admin_repcfg_teamspace_permission_text: "Przypisz role obszaru zespołu:",
		admin_repcfg_teamspace_permission_hover_p8: "Wskaż grupy lub użytkowników, którzy mogą tworzyć obszary zespołów i korzystać z nich. Użytkownikom są nadawane odpowiednie ustawienia zabezpieczeń w wymaganych klasach i folderach. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Więcej informacji</a><br/><br/><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania obszarem zespołu.",
		admin_repcfg_teamspace_permission_hover_cm: "Wskaż grupy lub użytkowników, którzy mogą tworzyć obszary zespołów i korzystać z nich. Użytkownicy są dodawani do odpowiednich list ACL i są im nadawane wymagane uprawnienia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Więcej informacji</a><br/><br/><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania obszarem zespołu.",
		admin_repcfg_entry_template_permission_text: "Przypisz role szablonów wprowadzania:",
		admin_repcfg_entry_template_permission_hover_p8: "Wskaż grupy lub użytkowników, którzy mogą tworzyć szablony wprowadzania i korzystać z nich. Użytkownikom są nadawane odpowiednie ustawienia zabezpieczeń w klasie dokumentu Szablon wprowadzania. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Więcej informacji</a><br/><br/><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania szablonami wprowadzania.",
		admin_repcfg_entry_template_permission_hover_cm: "Wskaż grupy lub użytkowników, którzy mogą tworzyć szablony wprowadzania i korzystać z nich. Użytkownicy są dodawani do odpowiednich list ACL i są im nadawane wymagane uprawnienia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Więcej informacji</a><br /><br /><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania szablonami wprowadzania.",
		admin_repcfg_office_template_permission_text: "Przypisz role szablonów:",
		admin_repcfg_office_template_permission_hover_cm: "Wskaż grupy lub użytkowników, którzy mogą tworzyć, edytować lub używać szablonów aplikacji Microsoft Office Online lub usługi Edit. Użytkownicy są dodawani do odpowiednich list ACL i są im nadawane wymagane uprawnienia.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a><br /><br /><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania szablonami aplikacji Microsoft Office Online lub usługi Edit.",
		admin_repcfg_draft_permission_text: "Przypisz role związane z wersjami roboczymi:",
		admin_repcfg_draft_permission_hover_cm: "Wskaż grupy lub użytkowników, którzy mogą tworzyć wersje robocze dokumentów aplikacji Microsoft Office Online lub usługi Edit podczas edycji zespołowej. Każdy użytkownik, który ma zespołowo edytować dokumenty w aplikacjach Microsoft Office Online lub w usłudze Edit, musi mieć odpowiednie uprawnienia do tworzenia wersji roboczych. Użytkownicy są dodawani do odpowiednich list ACL i są im nadawane wymagane uprawnienia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a><br /><br /><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania wersjami roboczymi.",
		admin_repcfg_search_permission_text: "Przypisz role wyszukiwania:",
		admin_repcfg_search_permission_hover_p8: "Wskaż grupy lub użytkowników, którzy mogą tworzyć lub używać zapisanych wyszukiwań i wyszukiwań w różnych repozytoriach. Użytkownikom są nadawane odpowiednie ustawienia zabezpieczeń w wymaganych klasach. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Więcej informacji</a><br /><br /><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania wyszukiwaniem.",
		admin_repcfg_search_permission_hover_cm: "Wskaż grupy lub użytkowników, którzy mogą tworzyć, edytować lub używać zapisanych wyszukiwań i wyszukiwań w różnych repozytoriach. Użytkownicy są dodawani do odpowiednich list ACL i są im nadawane wymagane uprawnienia. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Więcej informacji</a><br /><br /><b>Zalecenie:</b> Użyj grup w celu uproszczenia zarządzania wyszukiwaniem.",
		admin_repcfg_search_permission_title: "Role wyszukiwania",
		admin_repcfg_search_permission_intro_text: "Upewnij się, że użytkownicy mają dostęp do pulpitów obsługujących ich role. Na przykład upewnij się, że twórcy wyszukiwań mają dostęp do pulpitów umożliwiających tworzenie wyszukiwań i wyszukiwanie w różnych repozytoriach.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Administratorzy szablonów obszarów zespołów to użytkownicy mający uprawnienia <b>Pełna kontrola</b> w repozytorium (składnicy obiektów). Listy administratorów szablonów obszarów zespołu nie można zmienić za pomocą narzędzia administracyjnego. <p>Administratorzy szablonów obszarów zespołu mogą usuwać lub modyfikować szablony obszarów zespołów. Użytkownik tworzący Szablon obszaru zespołu nie musi udostępniać go administratorom szablonów obszarów zespołów.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów obszarów zespołów, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające tworzenie szablonów obszarów zespołów. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Więcej informacji</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Użytkownicy i grupy z przypisanymi uprawnieniami innymi niż te powiązane z Administratorami i Twórcami.<p>Użytkowników i grupy tego typu można przenieść do roli twórców szablonu obszaru zespołu, usuwając ich z roli innych użytkowników, a następnie przypisując ich jako twórców szablonu obszaru zespołu.<p>Aktualne uprawnienia tych użytkowników i grup można przeglądać, korzystając z programu IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Administratorzy szablonów obszarów zespołów to użytkownicy mający uprawnienia <b>Pełna kontrola</b> w repozytorium (składnicy obiektów). Listy administratorów szablonów obszarów zespołu nie można zmienić za pomocą narzędzia administracyjnego.<p>Administratorzy obszarów zespołu mogą usuwać i modyfikować obszary zespołów. Użytkownik tworzący obszar zespołu nie musi udostępniać go administratorom obszarów zespołów.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą obszarów zespołów, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające tworzenie obszarów zespołów. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Więcej informacji</a>",
		admin_repcfg_teamspace_user_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być użytkownikiem obszaru zespołu, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające korzystanie z obszarów zespołów. Użytkownik musi jednak być członkiem obszaru zespołu, aby miał dostęp do obszaru zespołu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Więcej informacji</a><p><b>Wskazówka:</b> Aby wszyscy użytkownicy w środowisku użytkownika mogli wyświetlać obszary zespołów, można dodać pseudokonto #AUTHENTICATED-USERS do roli użytkownika obszaru zespołu.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Użytkownicy i grupy z przypisanymi uprawnieniami innymi niż powiązane z Administratorami, Twórcami i Użytkownikami.<p>Użytkowników i grupy można przenieść do predefiniowanych ról, usuwając ich z roli innych użytkowników, a następnie przypisując im role obszaru zespołu.<p>Aktualne uprawnienia tych użytkowników i grup można przeglądać, korzystając z programu IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Administratorzy szablonów wprowadzania to użytkownicy mający uprawnienia <b>Pełna kontrola</b> w repozytorium (składnicy obiektów). Listy administratorów szablonów wprowadzania nie można zmienić za pomocą narzędzia administracyjnego. <p>Administratorzy szablonów wprowadzania mogą usuwać lub modyfikować szablony wprowadzania. Użytkownik tworzący szablon wprowadzania nie musi udostępniać go administratorom szablonów wprowadzania.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów wprowadzania, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające tworzenie szablonów wprowadzania. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Więcej informacji</a>",
		admin_repcfg_entry_template_user_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów wprowadzania, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające korzystanie z szablonów wprowadzania. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Więcej informacji</a><p><b>Wskazówka:</b> Aby wszyscy użytkownicy w środowisku użytkownika mogli korzystać z szablonów wprowadzania, można dodać pseudokonto #AUTHENTICATED-USERS do roli użytkownika szablonu wprowadzania.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Użytkownicy i grupy z przypisanymi uprawnieniami innymi niż powiązane z Administratorami, Twórcami i Użytkownikami.<p>Użytkowników i grupy można przenieść do predefiniowanych ról, usuwając ich z roli innych użytkowników, a następnie przypisując im role szablonów wprowadzania.<p>Aktualne uprawnienia tych użytkowników i grup można przeglądać, korzystając z programu IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów obszarów zespołów, temu użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające tworzenie szablonów obszarów zespołów. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Więcej informacji</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów obszarów zespołów, temu użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające tworzenie obszarów zespołów. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Więcej informacji</a>",
		admin_repcfg_teamspace_user_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być użytkownikiem obszarów zespołów, temu użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające korzystanie z obszarów zespołów. Użytkownik musi jednak być członkiem obszaru zespołu, aby miał dostęp do obszaru zespołu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Więcej informacji</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów wprowadzania, temu użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające tworzenie szablonów wprowadzania. <br/><br/>Jednak ustawienia zabezpieczeń dla konkretnego szablonu wprowadzania określają uprawnienia, jakie użytkownik lub grupa ma w tym szablonie wprowadzania. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Więcej informacji</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być edytorem szablonu wprowadzania, temu użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające modyfikowanie szablonów wprowadzania. <br/><br/>Jednak ustawienia zabezpieczeń dla konkretnego szablonu wprowadzania określają uprawnienia, jakie użytkownik lub grupa ma w tym szablonie wprowadzania. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Więcej informacji</a>",
		admin_repcfg_entry_user_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być użytkownikiem szablonu wprowadzania, temu użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające korzystanie z szablonów wprowadzania. <br/><br/>Jednak ustawienia zabezpieczeń dla konkretnego szablonu wprowadzania określają uprawnienia, jakie użytkownik lub grupa ma w tym szablonie wprowadzania. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Więcej informacji</a>",
		admin_repcfg_office_template_creators_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów aplikacji Microsoft Office Online lub usługi Edit, temu użytkownikowi lub grupie nadawane są w repozytorium odpowiednie uprawnienia umożliwiające tworzenie szablonów. <br/><br/>Jednak ustawienia zabezpieczeń dla konkretnego pliku szablonu określają uprawnienia, jakie użytkownik lub grupa ma względem szablonu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a>",
		admin_repcfg_office_template_editors_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą szablonów aplikacji Microsoft Office Online lub usługi Edit, temu użytkownikowi lub grupie nadawane są w repozytorium odpowiednie uprawnienia umożliwiające edycję szablonów.  <br/><br/>Jednak ustawienia zabezpieczeń dla konkretnego pliku szablonu określają uprawnienia, jakie użytkownik lub grupa ma względem szablonu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a>",
		admin_repcfg_office_template_user_hover_cm: "Po wyznaczeniu użytkownika lub grupy użytkowników szablonów aplikacji Microsoft Office Online lub usługi Edit, temu użytkownikowi lub grupie nadawane są odpowiednie uprawnienia umożliwiające zastosowanie szablonu podczas tworzenia nowego dokumentu Office Online lub usługi Edit za pomocą klienta WWW.  <br/><br/>Jednak ustawienia zabezpieczeń dla konkretnego pliku szablonu określają uprawnienia, jakie użytkownik lub grupa ma względem szablonu.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a>",
		admin_repcfg_draft_creators_hover_cm: "Każdy użytkownik, który ma zespołowo edytować dokumenty w aplikacjach Microsoft Office Online lub usłudze Edit, musi mieć przypisaną tę rolę. Nie należy przypisywać użytkowników do roli edytora lub użytkownika. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a>",
		admin_repcfg_draft_editors_hover_cm: "Każdy użytkownik, który ma zespołowo edytować dokumenty w aplikacjach Microsoft Office Online lub usłudze Edit, musi mieć przypisaną rolę <b>twórcy</b>. Jeśli użytkownikowi zostanie przypisana rola edytora, to nie będzie on mógł tworzyć wersji roboczych, co jest niezbędne do edycji zespołowej.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a>",
		admin_repcfg_draft_user_hover_cm: "Każdy użytkownik, który ma zespołowo edytować dokumenty w aplikacjach Microsoft Office Online lub usłudze Edit, musi mieć przypisaną rolę <b>twórcy</b>. Jeśli użytkownikowi zostanie przypisana rola użytkownika, to nie będzie on mógł tworzyć wersji roboczych, co jest niezbędne do edycji zespołowej.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Więcej informacji</a>",		
		admin_repcfg_search_others_hover_p8: "Użytkownicy i grupy z przypisanymi uprawnieniami innymi niż powiązane z Administratorami, Twórcami i Użytkownikami.<p>Użytkowników i grupy można przypisać do predefiniowanych ról, usuwając ich z roli innych użytkowników, a następnie przypisując im role wyszukiwania.<p>Aktualne uprawnienia tych użytkowników i grup można przeglądać, korzystając z programu IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Administratorzy wyszukiwań to użytkownicy mający uprawnienia <b>Pełna kontrola</b> w repozytorium (składnicy obiektów). Listy administratorów wyszukiwań nie można zmienić za pomocą narzędzia administracyjnego. <br /><br />Administratorzy wyszukiwania mogą usuwać lub modyfikować wyszukiwania. Użytkownik tworzący wyszukiwanie nie musi udostępniać go administratorom wyszukiwań.",
		admin_repcfg_search_creators_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą wyszukiwań, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające tworzenie wyszukiwań. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Więcej informacji</a>",
		admin_repcfg_search_user_hover_p8: "Po wyznaczeniu użytkownika lub grupy, która ma być użytkownikiem wyszukiwań, temu użytkownikowi lub grupie są nadawane odpowiednie zabezpieczenia w repozytorium umożliwiające korzystanie z wyszukiwań <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Więcej informacji</a><br /><br /><b>Wskazówka:</b> Aby wszyscy użytkownicy w środowisku użytkownika mogli korzystać z wyszukiwań, można dodać pseudokonto #AUTHENTICATED-USERS do roli użytkownika wyszukiwania.<br/><br />Domyślnie użytkownik wyszukiwania może tworzyć wyszukiwania i wyszukiwania w różnych repozytoriach, ale nie może zapisywać tych wyszukiwań. Można także uniemożliwić użytkownikom tworzenie wyszukiwań, udostępniając im pulpity, dla których zaznaczono następujące opcje:<ul><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań</b></li><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań w różnych repozytoriach</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być twórcą wyszukiwania, użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające tworzenie i zapisywanie wyszukiwań i wyszukiwań w różnych repozytoriach. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Więcej informacji</a><br /><br /><b>Ważne:</b> Należy upewnić się, że twórcy wyszukiwań korzystają z pulpitu, dla którego nie zaznaczono następujących opcji:<ul><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań</b></li><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań w różnych repozytoriach</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być edytorem wyszukiwania, użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające modyfikowanie istniejących wyszukiwań i wyszukiwań w różnych repozytoriach. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Więcej informacji</a><br /><br /><b>Wskazówka:</b> Domyślnie edytor wyszukiwania może tworzyć wyszukiwania i wyszukiwania w różnych repozytoriach, lecz nie może ich zapisywać. Można także uniemożliwić użytkownikom tworzenie wyszukiwań, udostępniając im pulpity, dla których zaznaczono następujące opcje:<ul><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań</b></li><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań w różnych repozytoriach</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Po wyznaczeniu użytkownika lub grupy, która ma być użytkownikiem wyszukiwania, użytkownikowi lub grupie są nadawane odpowiednie uprawnienia w repozytorium umożliwiające otwieranie i uruchamianie zapisanych wyszukiwań i wyszukiwań w różnych repozytoriach. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Więcej informacji</a><br /><br /><b>Wskazówka:</b> Domyślnie użytkownik wyszukiwania może tworzyć wyszukiwania i wyszukiwania w różnych repozytoriach, lecz nie może ich zapisywać. Można także uniemożliwić użytkownikom tworzenie wyszukiwań, udostępniając im pulpity, dla których zaznaczono następujące opcje:<ul><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań</b></li><li><b>Uniemożliwiaj użytkownikom tworzenie wyszukiwań w różnych repozytoriach</b></li></ul>",
		admin_repcfg_db_encoding: "Kodowanie znaków bazy danych serwera:",
		admin_repcfg_db_encoding_hover: "Domyślne kodowanie znaków dla bazy danych programu IBM Content Manager to UTF-8.",
		admin_repcfg_db_encoding_specify: "Określ kodowanie znaków bazy danych",
		admin_repcfg_db_encoding_utf8: "Kodowanie UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Wybierz tę opcję, jeśli chcesz korzystać z kodowania UTF-8 bazy danych. Program IBM Content Navigator będzie używał kodowania UTF-8, aby sprawdzić długość łańcuchów wartości właściwości elementu.",
		admin_repcfg_db_encoding_other: "Inne kodowanie",
		admin_repcfg_db_encoding_other_hover: "Wybierz tę opcję, jeśli używana jest baza danych z kodowaniem innym niż UTF-8. Program IBM Content Navigator użyje licznika znaków, aby sprawdzić długość łańcuchów wartości właściwości elementu.",
		admin_repcfg_language_codes: "Kody języka serwera:",
		admin_repcfg_language_codes_avail: "Dostępne",
		admin_repcfg_language_codes_sel: "Wybrane",
		admin_repcfg_pdf_conversion: "Typy MIME do przekształcenia na dokumenty PDF w załącznikach:",
		admin_repcfg_pdf_conversion_avail: "Dostępne",
		admin_repcfg_pdf_conversion_sel: "Wybrane",

		admin_repcfg_box_share_enable_classes_label: "Klasy do modyfikacji na potrzeby obsługi udostępniania w Box:",
		admin_repcfg_box_share_enable_classes_hover: "Możesz zmodyfikować klasę, aby zapisywała identyfikator pliku udostępnianego w usłudze Box w momencie, gdy jest udostępniany.",
		admin_repcfg_box_share_enable_classes_warning: "Ważne: wszystkie określone klasy zostaną zmodyfikowane w celu obsługi udostępniania w usłudze Box. Po zapisaniu zmian nie można usunąć zmian z klas.<br><br>Aby możliwe było modyfikowanie klas, użytkownik musi mieć połączenie z repozytorium jako administrator serwera bibliotecznego.",
		admin_repcfg_box_share_enable_classes_available: "Dostępne klasy",
		admin_repcfg_box_share_enable_classes_selected: "Wybrane klasy",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Zapisz identyfikator pliku udostępnionego w Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Ta klasa została już zmodyfikowana w celu zapisywania identyfikatora pliku udostępnionego w Box. Nie można usunąć tej opcji.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Zmodyfikuj tę klasę, aby zapisywała identyfikator pliku udostępnianego w usłudze Box w momencie, gdy jest udostępniany.",

		admin_repcfg_redaction: "Utajnienia na podstawie roli:",
		admin_repcfg_enable_redaction_hover: "Określ, czy chcesz korzystać z utajnienia na podstawie roli w dokumentach znajdujących się w tym repozytorium.<br/><br/>Utajnienia na podstawie roli mają zastosowanie, kiedy dokument jest pobierany, drukowany, renderowany przez recenzenta lub wyświetlany jako miniatura. To, co widzą użytkownicy po wyświetlaniu dokumentu, zależy od ich roli i od odpowiednich strategii utajnienia.",

		admin_repcfg_redaction_policy_permission_text: "Przypisz edytorów strategii:",
		admin_repcfg_redaction_policy_editors_hover: "Wybierz użytkowników i grupy z możliwością tworzenia, modyfikowania i usuwania strategii utajnienia oraz ról utajnienia.",
		admin_repcfg_redaction_policy_editors_select_hover: "Edytorzy strategii utajnienia mogą tworzyć, modyfikować i usuwać strategie utajnienia i role utajnienia.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Administratorzy strategii utajnienia mogą przypisywać edytorów strategii utajnienia.<br/><br/>Można zmienić listę administratorów strategii utajnienia, korzystając z programu IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Administratorzy strategii utajnienia mogą przypisywać edytorów strategii utajnienia.<br/><br/>Można zmienić listę administratorów strategii utajnienia, korzystając z klienta administracyjnego systemu IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Przypisz edytorów utajnienia:",
		admin_repcfg_redaction_editors_hover: "Wybierz użytkowników i grupy z możliwością tworzenia, modyfikowania i usuwania utajnień na podstawie ról. Po wybraniu użytkowników i grup jako edytorów należy określić ich jako edytorów w strategiach utajnienia; dopiero wtedy będą mogli edytować utajnienia na podstawie roli.",
   		admin_repcfg_redaction_editors_select_hover: "Edytorzy utajnienia mogą tworzyć, modyfikować i usuwać utajnienia na podstawie roli, jeśli zostali również określeni jako edytorzy w strategiach utajnienia.",
   		admin_repcfg_redaction_administrators_hover_p8: "Administratorzy utajnienia mogą przypisywać edytorów utajnienia.<br/><br/>Można zmienić listę administratorów utajnienia, korzystając z programu IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Administratorzy utajnienia mogą przypisywać edytorów utajnienia.<br/><br/>Można zmienić listę administratorów utajnienia, korzystając z klienta administracyjnego systemu IBM Content Manager.",
		admin_repcfg_entry_template: "Zarządzanie szablonami wprowadzania:",
		admin_repcfg_entry_template_enable_classes_label: "Klasy do modyfikacji na potrzeby obsługi szablonu wprowadzania:",
		admin_repcfg_oos_reference_attribute_label: "Atrybuty referencyjne dla Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Ważne: wszystkie określone klasy zostaną zmodyfikowane w celu obsługi szablonów wprowadzania. Po zapisaniu zmian nie można usunąć zmian z klas.<br><br>Można zmodyfikować klasę w następującym celu:<br><ul><li>Aby zapisać identyfikator szablonu wprowadzania, który został użyty do dodania elementu, tak aby ustawienia szablonu wprowadzania były stosowane, gdy element zostanie zmodyfikowany</li><li>Tylko klasy folderu hierarchicznego: do obsługi powiązań folderu szablonu wprowadzania</li></ul>Aby możliwe było modyfikowanie klas, użytkownik musi mieć połączenie z repozytorium jako administrator serwera bibliotecznego.",
		admin_repcfg_entry_template_enable_classes_warning: "Ważne: wszystkie określone klasy zostaną zmodyfikowane w celu obsługi szablonów wprowadzania. Po zapisaniu zmian nie można usunąć zmian z klas.<br><br>Aby możliwe było modyfikowanie klas, użytkownik musi mieć połączenie z repozytorium jako administrator serwera bibliotecznego.",
		admin_repcfg_entry_template_enable_classes_available: "Dostępne klasy",
		admin_repcfg_entry_template_enable_classes_selected: "Wybrane klasy",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Zapisz identyfikator szablonu wprowadzania",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Zmodyfikuj tę klasę, aby zapisała identyfikator szablonu wprowadzania, który został użyty w celu dodania elementu, tak aby ustawienia szablonu wprowadzania były stosowane, gdy element zostanie zmodyfikowany.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Zapisz powiązania folderu",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Zmodyfikuj tę klasę, aby mogła obsługiwać powiązania folderu szablonu wprowadzania. Ta opcja jest dostępna tylko dla klas folderu hierarchicznego.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Ta klasa została już zmodyfikowana do przechowywania identyfikatora szablonu wprowadzania. Nie można usunąć tej opcji.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Ta klasa została już zmodyfikowana do przechowywania powiązań folderu. Nie można usunąć tej opcji.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Do przechowywania powiązań folderu mogą być używane tylko klasy folderu hierarchicznego lub klasy niehierarchiczne.",
		admin_repcfg_entry_template_root_folder_association_title: "Szablony wprowadzania powiązane z folderem głównym:",
		admin_repcfg_entry_template_root_folder_association_hover: "Określ, które szablony wprowadzania chcesz powiązać z folderem głównym w repozytorium IBM Content Manager.<br /><br />W przypadku powiązania szablonów wprowadzania z folderem głównym, jeśli użytkownicy dodadzą elementy do folderu hierarchicznego, szablon wprowadzania będzie zawsze używany do dodawania elementów.",
		admin_repcfg_entry_template_root_folder_association_button: "Ustaw powiązania",
		admin_repcfg_oos_enable_classes_label: "Klasy do zmodyfikowania w celu obsługi Office Online i usługi Edit:",
		admin_repcfg_oos_enable_classes_warning: "Ważne: wszystkie określone klasy zostaną zmodyfikowane tak, aby działały z aplikacjami Microsoft Office Online lub usługą Edit. Po zapisaniu zmian nie będzie można usunąć atrybutów referencyjnych dodanych automatycznie do wszystkich klas.<br><br>Aby możliwe było modyfikowanie klas, użytkownik musi mieć połączenie z repozytorium jako administrator serwera bibliotecznego.",
		admin_repcfg_oos_enable_classes_available: "Dostępne klasy",
		admin_repcfg_oos_enable_classes_selected: "Wybrane klasy",
		admin_repcfg_oos_enable_classes_note: "Ważne:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Ta klasa nie jest zgodna z aplikacjami Microsoft Office Online lub usługą Edit.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "Strategia wersji dla klasy nakazuje, by zawsze zarządzać jej wersjami, a aplikacje Microsoft Office Online lub usługa Edit nie dają takiej możliwości. Wybierz inną klasę.",
		admin_repcfg_download_recording: "Śledź operacje pobierania:",
		admin_repcfg_download_recording_hover: "Operacje pobierania są śledzone domyślnie, gdy w repozytorium zainstalowany jest dodatek Social Collaboration Base Extensions. Wyłączenie tej opcji może jednak poprawić wydajność repozytorium.<br><br>Jeśli ta opcja jest wyłączona, użytkownicy widzą liczbę pobrań, które wystąpiły przed wyłączeniem opcji.",
		admin_repcfg_sync_service: "Usługi synchronizacji:",
		admin_repcfg_download_ignored: "Ignoruj operacje pobierania konkretnych użytkowników:",
		admin_repcfg_download_ignored_hover: "Można zignorować pobieranie wykonane przez konkretnych użytkowników, takich jak administratorzy lub konta systemowe, aby dokładniej odzwierciedlić liczbę użytkowników, którzy pobrali dokument. Na przykład, jeśli istnieje konto, które jest używane do pobierania treści, aby wygenerować raport miesięczny, można zignorować pobieranie wykonane z tego konta.<br><br><b>Ograniczenie:</b> Nie można określić grup.",

		admin_repcfg_add_as_major_version: "Dodaj jako wersję główną:",
		admin_repcfg_enable_add_as_major_version: "Tak",
		admin_repcfg_disable_add_as_major_version: "Nie",
		admin_repcfg_checkin_as_major_version: "Wprowadź/zwróć jako wersję główną:",
		admin_repcfg_enable_checkin_as_major_version: "Tak",
		admin_repcfg_disable_checkin_as_major_version: "Nie",
		admin_repcfg_annotation_security: "Bezpieczeństwo adnotacji:",
		admin_repcfg_inherit_annotation_security: "Zduplikuj ustawienia zabezpieczeń dokumentu zawierającego",
		admin_repcfg_default_annotation_security: "Użyj domyślnych zabezpieczeń adnotacji",
		admin_repcfg_connection_point: "Punkt połączenia przepływu pracy:",
		admin_repcfg_include_workflow_definition: "Wyświetl klasę definicji przepływu pracy:",
		admin_repcfg_include_form_template: "Wyświetl klasę szablonu formularza",
		admin_repcfg_enable_include_workflow_definition: "Tak",
		admin_repcfg_disable_include_workflow_definition: "Nie",

		admin_repcfg_status_columns: "Ikony stanu:",
		admin_repcfg_status_columns_hover: "Określ stany, dla których zamierzasz wyświetlać ikony. Ikony stanu są wyświetlane obok dokumentów, folderów i elementów pracy na liście treści.",
		admin_repcfg_status_columns_documents_or_folders: "Wyświetl ikonę, gdy dokumenty lub foldery:",
		admin_repcfg_status_columns_documents: "Wyświetl ikonę, gdy dokumenty:",
		admin_repcfg_status_columns_documents_checked_out: "Są pobrane",
		admin_repcfg_status_columns_documents_declared_records: "Są zadeklarowane jako akta",
		admin_repcfg_status_columns_documents_minor_versions: "Zawierają wersje podrzędne",
		admin_repcfg_status_columns_documents_compound_document: "To dokumenty złożone",
		admin_repcfg_status_columns_documents_bookmarks: "Zawierają zakładki",
		admin_repcfg_status_columns_documents_hold: "Są wstrzymane",
		admin_repcfg_status_columns_documents_notes: "Zawierają uwagi",
		admin_repcfg_status_columns_work_items: "Wyświetlaj ikonę, gdy elementy pracy:",
		admin_repcfg_status_columns_work_items_locked: "Są zablokowane",
		admin_repcfg_status_columns_work_items_checked_out: "Są pobrane",
		admin_repcfg_status_columns_work_items_deadline: "Mają termin",
		admin_repcfg_status_columns_work_items_suspended: "Są zawieszone z przetwarzania",

		admin_repcfg_afp2pdf_config_file: "Plik konfiguracyjny AFP2PDF:",
		admin_repcfg_transform_xml_file: "Niestandardowy plik transformacji:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Włącz",
		admin_repcfg_disable_ssl: "Wyłącz",
		admin_repcfg_keyringdb_file: "Plik bazy danych pliku kluczy:",
		admin_repcfg_keyringstash_file: "Plik ukryty pliku kluczy:",
		admin_repcfg_od_sso: "Pojedyncze logowanie",
		admin_repcfg_od_enable_sso: "Włącz",
		admin_repcfg_od_disable_sso: "Wyłącz",
		admin_repcfg_od_sso_password: "Hasło",
		admin_repcfg_advanced_label: "Zaawansowane",
		admin_repcfg_custom_properties_label: "Właściwości definiowane:",
		admin_repcfg_new_button_label: "Nowy",
		admin_repcfg_edit_button_label: "Edytuj",
		admin_repcfg_delete_button_label: "Usuń",
		admin_repcfg_custom_head1: "Nazwa",
		admin_repcfg_custom_head2: "Wartość",
		admin_repcfg_ecpdialog_title_new: "Nowa właściwość niestandardowa",
		admin_repcfg_ecpdialog_title_edit: "Edytuj właściwość niestandardową",
		admin_repcfg_ecpdialog_name: "Nazwa:",
		admin_repcfg_ecpdialog_value: "Wartość:",
		admin_repcfg_ecpdialog_save: "Zapisz",
		admin_repcfg_ecpdialog_create: "Utwórz",
		admin_repcfg_ecpdialog_cancel: "Anuluj",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Ta wartość jest wymagana. Wartość nie może zawierać odstępów i nie może być duplikatem.",

		admin_repcfg_cmis_use_gzip_encoding: "Użyj kodowania GZIP:",

		admin_repcfg_task_mgr_proxy: "Identyfikator połączenia menedżera zadań:",
		admin_repcfg_task_mgr_proxy_hover: "Przy udostępnianiu z wykorzystaniem usługi Box oraz usuwaniu obszaru zespołu menedżer zadań uruchamia zadania w tle modyfikujące repozytorium, korzystając z identyfikatora i hasła administratora.<br><br>Kliknij opcję Ustaw i zaloguj się w repozytorium, używając poprawnego identyfikatora i hasła administratora repozytorium.",
		admin_task_manager_not_enabled_warning: "Ta opcja wymaga usługi menedżera zadań, ale usługa ta jest wyłączona.  Możesz włączyć usługę menedżera zadań dla wszystkich pulpitów na karcie Ogólne ustawień.",
		admin_task_manager_not_enabled_and_user_warning: "Ta opcja wymaga usługi menedżera zadań, ale usługa ta jest wyłączona. Na tej stronie ustaw identyfikator połączenia menedżera zadań, a następnie na stronie Ogólne ustawień włącz usługę menedżera zadań dla wszystkich pulpitów.",
		admin_task_manager_user_id_pw_not_set_warning: "Ta opcja wymaga usługi menedżera zadań oraz podania identyfikatora i hasła administratora. Na tej stronie ustaw identyfikator połączenia menedżera zadań.",
		admin_repcfg_teamspaces_delete_task_id: "Administrator repozytorium",
		admin_repcfg_teamspaces_delete_task_password: "Hasło:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Konieczne jest wskazanie administratora serwera biblioteki, aby możliwe było włączenie usługi menedżera zadań w celu usunięcia obszaru zespołu z repozytorium.",
		admin_repcfg_teamspaces_delete_task_hover: "Domyślnie po usunięciu obszaru zespołu przez użytkownika obszar zespołu jest ukrywany. Wszystkie foldery i dokumenty w obszarze zespołu pozostają w repozytorium. <br /> <br />Po włączeniu tej opcji w repozytorium pozostawać będą tylko dokumenty umieszczone w innych folderach.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "W przypadku dysponowania dużą liczbą obszarów zespołów w środowisku wyświetlenie ich wszystkich na karcie <b>Obszary zespołu</b> może zająć dużo czasu. Tę opcję można wybrać, aby zmniejszyć czas potrzebny do zapełnienia listy.<br /><br />Jeśli użytkownik chce pracować z obszarem zespołu spoza podanego zakresu, użytkownik może użyć pola <b>Filtr</b> w celu znalezienia obszaru zespołu.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Wybranie tej opcji spowoduje, że użytkownicy o roli właściciela obszaru zespołu będą mogli modyfikować role powiązane z obszarami zespołów utworzonymi w wersjach programu IBM Content Navigator wcześniejszych niż 2.0.2.<br /><br />Ta opcja nie wpływa na obszary zespołów utworzone w programie IBM Content Navigator 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Określ, czy użytkownicy mają mieć możliwość tworzenia obszarów zespołów lub szablonu obszarów zespołów w tym repozytorium.<br /><br /><b>Ważne:</b> Repozytorium musi obsługiwać foldery hierarchiczne.<br /><br />Jeśli obszary zespołów zostaną włączone, wówczas IBM Content Navigator utworzy w repozytorium model danych obszaru zespołu. Model danych zawiera obiekty ACL, uprawnienia, zestawy uprawnień oraz dwa nowe typy pozycji.",
		admin_repcfg_folder_selector_hover: "Wybierz folder, który ma być używany jako folder główny przy przeglądaniu w poszukiwaniu dokumentów. Jeśli w repozytorium nie zostały skonfigurowane foldery hierarchiczne, ustawienie to umożliwia ułatwienie użytkownikom przeglądania poprzez zdefiniowanie folderu głównego. Jeśli w repozytorium są skonfigurowane foldery hierarchiczne, to ustawienie przesłoni folder główny skonfigurowany w repozytorium.",
		admin_repcfg_cm_use_sso_hover: "Określ, czy pojedyncze logowanie będzie dostępne dla użytkowników, dla których aktywowano ustawienie logowania zaufanego.<br /><br /><b>Ważne:</b> Logowanie pojedyncze należy włączyć na serwerze Content Manager, a serwer WebSphere Application Server musi być skonfigurowany dla LTPA - tylko wówczas ten parametr będzie działał poprawnie.",
		admin_repcfg_cm_direct_retrieve_hover: "Pobieranie bezpośrednie jest domyślnie włączone, ponieważ umożliwia klientowi WWW szybkie pobranie treści z menedżera zasobów. <br /><br />Tę opcję można wyłączyć, aby aplikacja klienta nie miała bezpośredniego dostępu do menedżera zasobów lub jeśli istnieje firewall lub serwer proxy, który uniemożliwia klientowi WWW dostęp do menedżera zasobów za pomocą adresów URL. Na przykład, firewall może uniemożliwić użytkownikom wyświetlanie dokumentów w przeglądarce w postaci apletu, gdy pobieranie bezpośrednie jest włączone.",
		admin_repcfg_cmItemTypesToDisplay: "Jeśli nie chcesz, aby użytkownicy widzieli typy elementów będących zasobami i elementami na serwerze IBM Content Manager, można wyświetlać tylko typy elementów z modelu dokumentu. Typy elementów są wyświetlane podczas tworzenia wyszukiwań, dodawania dokumentów i tworzenia folderów.",
		admin_repcfg_cm_language_codes_hover: "Określ języki, w których zwracane będą dane z serwera Content Manager. Lista dostępnych języków jest kontrolowana przez listę definicji języków na serwerze.<br /><br /><b>Pamiętaj:</b> Dane w kliencie WWW są wyświetlane w języku ustawionym w przeglądarce WWW użytkownika.",
		admin_repcfg_cm_pdf_conversion_hover: "Określ typy dokumentów, które będą przekształcane na PDF, gdy użytkownik wyśle dokument z wieloma częściami jako załącznik do wiadomości e-mail. Wszystkie części zostaną połączone w jeden dokument PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Określ, czy użytkownicy mają mieć możliwość tworzenia obszarów zespołów lub szablonu obszarów zespołów w tym repozytorium.<br /><br />Jeśli obszary zespołów zostaną włączone, wówczas IBM Content Navigator utworzy w repozytorium model danych obszaru zespołu. Model danych zawiera szablony właściwości, obiekty niestandardowe, obiekt folderu i kilka folderów.",
		admin_repcfg_use_entry_template_p8_hover: "Określ, czy użytkownicy mają mieć możliwość tworzenia i zarządzania szablonami wprowadzania w tym repozytorium z programu IBM Content Navigator. Jeśli ta opcja nie jest włączona, użytkownicy mogą wyszukiwać i używać szablonów wprowadzania, które są już w repozytorium.<br /><br />Jeśli włączono zarządzanie szablonami wprowadzania, program IBM Content Navigator aktualizuje model danych szablonu wprowadzania w repozytorium. Aktualizacja obejmuje nowe właściwości. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Więcej informacji</a>",
		admin_repcfg_use_entry_template_cm_hover: "Określ, czy użytkownicy mają mieć możliwość tworzenia i zarządzania szablonami wprowadzania w tym repozytorium z programu IBM Content Navigator.<br /><br />Jeśli włączono zarządzanie szablonami wprowadzania, program IBM Content Navigator tworzy model danych szablonu wprowadzania w repozytorium. Model danych zawiera nowy obiekt ACL, nowe właściwości i nowy typ elementu. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Więcej informacji</a>",
		admin_repcfg_sync_service_p8_hover: "Określ, czy chcesz, aby użytkownicy mogli synchronizować swoje ulubione elementy na swoich stacjach roboczych i urządzeniach przenośnych.<br><br><b>Ważne:</b> Aby móc używać tego składnika, musisz także wykonać następujące zadania:<br><ul><li>Podaj <b>Publiczny adres URL usług synchronizacji</b> w sekcji <b>Usługi synchronizacji</b> narzędzia administracyjnego.</li><li>Dodaj to repozytorium do pulpitu, dla którego włączono usługi synchronizacji.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Określ, czy opcja wersji głównej będzie wybierana domyślnie, gdy użytkownicy dodają dokumenty do repozytorium.<br /><br />Użytkownicy mogą usunąć zaznaczenie tej opcji, jeśli zamierzają dodać dokument jako wersję podrzędną.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Określ, czy opcja wersji głównej będzie wybierana domyślnie, gdy użytkownicy wprowadzają/zwracają dokumenty do repozytorium.<br /><br />Użytkownicy mogą usunąć zaznaczenie tej opcji, jeśli zamierzają wprowadzić/zwrócić dokument jako wersję podrzędną.",
		admin_repcfg_p8_annotation_security_hover: "Określ typ zabezpieczeń, który będzie stosowany domyślnie względem adnotacji.<br /><br />Użytkownicy mogą zmieniać zabezpieczenia adnotacji.",
		admin_repcfg_p8_connection_point_hover: "Jeśli zamierzasz korzystać z przepływów pracy IBM FileNet P8, wybierz punkt połączenia z silnikiem procesów. Wybrany punkt połączenia określa, które przepływy pracy są dostępne dla użytkowników, którzy uzyskują dostęp do tego repozytorium.",
		admin_repcfg_p8_include_workflow_definition_hover: "W przypadku wyświetlenia klasy dokumentu definicji przepływu pracy IBM FileNet P8 w kliencie WWW użytkownicy mogą wyszukiwać i dodawać definicje przepływu pracy do repozytorium.",
		admin_repcfg_p8_include_form_template_hover: "W przypadku wyświetlenia klasy dokumentu szablonu formularza IBM FileNet P8 w kliencie WWW użytkownicy mogą wyszukiwać oraz dodawać szablony formularzy do repozytorium.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Określ pełną ścieżkę pliku konfiguracyjnego AFP2PDF dla tego repozytorium na serwerze aplikacji WWW. Program AFP2PDF Transform jest wymagany w celu wyświetlania i drukowania danych. <br /><br /><b>Pamiętaj:</b> W celu korzystania z tego parametru należy zainstalować AFP2PDF Transform.",
		admin_repcfg_od_transform_xml_file_hover: " Jeśli zamierzasz użyć niestandardowej transformacji w celu przekształcenia treści convert Content Manager OnDemand, określ pełną ścieżkę pliku XML, który jest używany w celu zdefiniowania transformacji. Plik XML musi znajdować się na serwerze aplikacji WWW.",
		admin_repcfg_od_ssl_hover: "Określ, czy używany będzie protokół SSL w celu szyfrowania komunikacji między serwerem aplikacji IBM Content Navigator a serwerem bibliotecznym Content Manager OnDemand i serwerami obiektów.<br /><br /><b>Ważne:</b> Po włączeniu SSL dla Content Manager OnDemand protokół nie będzie obejmował komunikacji między serwerem aplikacji IBM Content Navigator, serwerem WWW IBM Content Navigator i stacjami roboczymi użytkowników IBM Content Navigator.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Określ pełną ścieżkę pliku bazy danych kluczy dla tego repozytorium na serwerze aplikacji WWW. Na przykład: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Plik bazy danych pliku kluczy zawiera zaufane certyfikaty główne. Aby zapobiec dostępowi bez uprawnień do tego pliku, należy zastosować silną ochronę systemu plików.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Określ pełną ścieżkę pliku ukrytego pliku kluczy dla tego repozytorium na serwerze aplikacji WWW. Na przykład: C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Plik ukryty pliku kluczy zawiera hasło dla pliku bazy danych pliku kluczy. Aby zapobiec dostępowi bez uprawnień do tego pliku, należy zastosować silną ochronę systemu plików.",
		admin_repcfg_od_sso_password_hover: "Określa hasło do użycia na potrzeby pojedynczego logowania na serwerze OnDemand.",
		admin_repcfg_od_custom_properties_hover: "Interfejs API Java ODWEK obsługuje właściwości niestandardowe. Jeśli w przypadku łączenia się z repozytorium za pośrednictwem klienta WWW zamierzasz korzystać z dowolnych właściwości niestandardowych, wówczas określ nazwy i wartości właściwości niestandardowych.<br /><br />Więcej informacji na temat obsługiwanych właściwości niestandardowych zawiera dokumentacja Javadoc interfejsu API Java ODWEK, która znajduje się w podkatalogu /api w katalogu instalacyjnym ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Wprowadź nazwę właściwości.",
		admin_repcfg_od_custom_properties_value_hover: "Wprowadź wartość właściwości.",
		admin_repcfg_od_use_sso_hover: "Określ, czy możliwe będzie pojedyncze logowanie dla użytkowników.<br /><br /><b>Ważne:</b> Aby ten parametr działał, pojedyncze logowanie musi być włączone na serwerze Content Manager OnDemand.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Użyj kodowania GZIP dla tego źródła CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nazwa pliku używana podczas pobierania dokumentów:",
		admin_repcfg_cm_use_part_file_name_help: "Wskaż sposób określania nazw plików dokumentów podczas ich pobierania przez użytkowników.",
		admin_repcfg_cm_use_part_file_name_enable: "Użyj nazwy pliku",
		admin_repcfg_cm_use_part_file_name_disable: "Użyj nazwy elementu w repozytorium",
		admin_repcfg_add_doc_name: "Domyślna nazwa dodawanego dokumentu:",
		admin_repcfg_add_doc_name_hover: "Użytkownik może zmienić nazwę przed dodaniem dokumentu.",
		admin_repcfg_add_doc_name_empty: "Brak (puste)",
		admin_repcfg_add_doc_name_file_name: "Nazwa pliku wybranego dokumentu",

		admin_repcfg_compound_documents: "Składniki dokumentów złożonych:",
		admin_repcfg_compound_documents_hover: "Włącz składniki dokumentów złożonych P8, takie jak nawigacja.",
		admin_repcfg_cm_action_list_config_enabled: "Lista czynności dotyczących elementu pracy:",
		admin_repcfg_cm_action_list_config_hover: "Konfigurując kierowanie dokumentu w kliencie administracji systemem Content Manager, można określić listę czynności, które użytkownik będzie mógł wykonać na elemencie pracy.<br /><br />Włącz tę opcję, jeśli chcesz użyć listy czynności z serwera Content Manager. Ustawienia te używane są w menu kontekstowym i oknie Edytuj właściwości elementu pracy.<br /><br /><b>Ważne:</b> ustawienia określone na liście czynności przesłaniają wszelkie menu zmodyfikowane przez użytkownika za pomocą narzędzia administracyjnego systemu Content Navigator. Jeśli na liście czynności nie ma ustawień, użytkownik nie będzie mógł wykonywać żadnych czynności na elementach pracy.",

		admin_repcfg_box_share: "Udostępnianie w Box",
		admin_repcfg_box_share_p8_hover: "Umożliwia użytkownikom udostępnianie dokumentów z tego repozytorium. Udostępnienie dokumentu polega na skopiowaniu pliku do usługi Box, utworzeniu odsyłacza i wysłaniu odsyłacza w wiadomości e-mail.<br /><br />W przypadku włączenia udostępniania w usłudze Box program IBM Content Navigator tworzy w repozytorium model danych udostępnionych w tej usłudze. Aby zainstalować dodatek udostępniania w Box programu IBM Content Navigator, musisz mieć połączenie z repozytorium jako administrator serwera biblioteki.",

		admin_menu_type_icon: "Ikona typu menu",
		admin_menu_toolbar_hover: "Pasek narzędzi",
		admin_menu_toolbar_custom_hover: "Niestandardowy pasek narzędzi",
		admin_menu_contextMenu_hover: "Menu kontekstowe",
		admin_menu_contextMenu_custom_hover: "Niestandardowe menu kontekstowe",

		admin_menu_contextMenu_custom_empty: "W skonfigurowanych wtyczkach nie zdefiniowano żadnych niestandardowych menu kontekstowych.",
		admin_menu_toolbar_custom_empty: "W skonfigurowanych wtyczkach nie zdefiniowano żadnych niestandardowych pasków narzędzi.",

		admin_file_type_category_filters: "Filtry typów plików:",
		admin_file_type_category_filters_hover_help: "Określ listę typów plików, z których użytkownicy mogą korzystać w następujących sytuacjach:<ul><li>Aby zawęzić listę wyników podczas wyszukiwania lub przeglądania w programie IBM Content Navigator for Microsoft Office<li>Aby zawęzić listę wyników podczas przeszukiwania repozytorium IBM FileNet P8 w kliencie WWW<li>Aby ograniczyć typy plików, które użytkownicy mogą dodawać do repozytorium przy użyciu szablonu wprowadzania</ul>",
		admin_file_type_only_use_in_et_folder_association: "Pokaż tylko w powiązaniach folderu szablonu wprowadzania",
		admin_office_config_properties_label: "Właściwości pakietu Office",
		admin_office_config_type_label: "Typ danych",
		admin_office_config_mapped_property_label: "Właściwość repozytorium",
		admin_office_config_properties_hover_help: "Wprowadź, a następnie dodaj nazwę każdej właściwości pakietu Microsoft Office, jaką zamierzasz odwzorować jako właściwość repozytorium. Typ danych wszystkich właściwości musi być zgodny",
		admin_office_config_mapped_property_hover_help: "W celu odwzorowania właściwości pakietu Office na więcej niż jedną właściwość repozytorium konieczne jest utworzenie nowego odwzorowania właściwości",
		admin_new_property_mapping_title: "Nowe odwzorowanie właściwości",
		admin_property_mapping_title: "Edytuj odwzorowanie właściwości",
		admin_property_mapping_instruction: "Określ właściwości pakietu Microsoft Office, jakie zamierzasz odwzorować na właściwość w repozytorium. Typ danych właściwości pakietu Office musi być zgodny z typem danych właściwości w repozytorium. <br /><br />Jeśli w dokumencie pakietu Office znajduje się więcej niż jedna właściwość z odwzorowania, wówczas do zapełnienia właściwości w repozytorium program IBM Content Navigator użyje pierwszej właściwości z listy.",
		admin_ms_general_settings: "Ogólna konfiguracja:",
		admin_ms_delete_local_settings: "Usuń pliki lokalne, gdy użytkownicy:",
		admin_ms_outlook_options: "Integracja z Outlook:",
		admin_ms_enable_props_mapping: "Odwzoruj właściwości pakietu Office na właściwości repozytorium, jeśli użytkownicy:",
		admin_ms_open_doc_when_checkout: "Automatycznie pobieraj dokument, kiedy jest otwarty",
		admin_ms_open_doc_when_checkout_hover_help: "Wybór tej opcji pozwala użytkownikowi uniknąć nadpisywania pliku w repozytorium starszą wersją pliku.",
		admin_ms_prompt_close_office: "Zachęć użytkowników do wprowadzania dokumentów podczas zamykania aplikacji pakietu Office",
		admin_ms_prompt_close_office_hover_help: "Wybór tej opcji pozwala użytkownikom uniknąć sytuacji, w której zapominają o wprowadzeniu wyników swojej pracy.",
		admin_ms_add_with_entry_template_only: "Pokaż tylko działanie Dodaj z szablonem",
		admin_ms_delete_local_on_add: "Gdy użytkownicy dodadzą dokumenty, usuń pliki lokalne",
		admin_ms_delete_local_on_checkin: "Gdy użytkownicy wprowadzą/zwrócą dokumenty lub anulują pobieranie, usuń pliki lokalne",
		admin_ms_delete_local_on_add_hover_help: "Gdy użytkownik doda dokument w produkcie IBM Content Navigator for Microsoft Office, dokument będzie dodany do repozytorium, a lokalna kopia dokumentu pozostanie otwarta, dzięki czemu użytkownicy będą mogli natychmiast pobrać dokument w celu wprowadzenia zmian.<br /><br />Wybierz tę opcję, aby automatycznie zamykać i usuwać kopię lokalną dokumentu po dodaniu dokumentu do repozytorium.",
		admin_ms_delete_local_on_checkin_hover_help: "Gdy użytkownik wprowadzi/zwróci dokument w produkcie IBM Content Navigator for Microsoft Office, dokument jest zwracany do repozytorium, a jego kopia lokalna pozostaje otwarta. Ponadto po użyciu opcji anulowania pobierania kopia lokalna dokumentu pozostaje otwarta. Gdy kopia lokalna jest otwarta, użytkownicy mogą natychmiast pobrać dokument ponownie w celu wprowadzenia zmian.<br /><br />Wybierz tę opcję, aby automatycznie zamykać i usuwać kopię lokalną dokumentu po wprowadzeniu/zwróceniu dokumentu oraz po użyciu opcji anulowania pobierania.",
		admin_ms_delete_local_on_save: "Zapisz dokument",
		admin_ms_prompt_for_props_on_add: "Zwróć się do użytkowników, aby podczas dodawania wiadomości e-mail do repozytorium, udostępniali wartości właściwości",
		admin_ms_prompt_for_props_on_add_hover_help: "Jeśli ta opcja nie zostanie zaznaczona, klient WWW skorzysta z odwzorowania właściwości programu Outlook, zdefiniowanego dla danego repozytorium.<br /><br />Jeśli istnieją szablony wprowadzania powiązane z folderem, do którego dodawane są wiadomości e-mail, użytkownik może nie zostać poproszony o żadną właściwość.",
		admin_ms_delete_email_on_add: "Usuń wiadomość e-mail z serwera poczty elektronicznej, jeśli wiadomość ta jest dodawana do repozytorium",
		admin_ms_send_email_as_link_only: "Uniemożliwiaj użytkownikom wysyłanie dokumentów w postaci załączników",
		admin_ms_send_email_as_link_only_hover_help: "Po wybraniu tej opcji użytkownicy będą mogli wysyłać dokumenty z programu Outlook jedynie jako łącza. Dzięki tej opcji dokumenty będą mogli wyświetlać jedynie użytkownicy z odpowiednimi uprawnieniami dla repozytorium.",
		admin_ms_enable_prop_mapping_for_add: "Odwzoruj właściwości pakietu Office na właściwości repozytorium, gdy użytkownicy dodadzą lub wprowadzą dokumenty",
		admin_ms_checkout_document_after_add: "Automatycznie pobieraj dokumenty po dodaniu ich do repozytorium",
		admin_no_default_document_type_filtering: "Zwracaj domyślnie wszystkie typy dokumentów, gdy użytkownicy uruchamiają wyszukiwanie",
		admin_no_default_document_type_filtering_hover_help: "W programie IBM Content Navigator for Microsoft Office użytkownicy widzą domyślnie tylko typ dokumentu dla bieżącej aplikacji podczas uruchamiania wyszukiwania. Na przykład typ dokumentu Word jest domyślnie zaznaczony podczas wyszukiwania z programu Microsoft Word.<br/><br/>Wybranie tej opcji powoduje jednak usunięcie zaznaczenia pola wyboru Typy dokumentów, dzięki czemu użytkownicy widzą wszystkie dokumenty zwracane przez wyszukiwanie. Użytkownicy mogą zastąpić to ustawienie, wybierając jeden lub więcej typów dokumentów podczas wyszukiwania.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Określ, czy odwzorować właściwości dokumentu zdefiniowane dla dokumentów Microsoft Office na właściwości zdefiniowane w repozytorium.<br /></br /><b>Ważne:</b> Jeśli ta funkcja zostanie włączona, należy skonfigurować właściwości pakietu Office dla każdego repozytorium w środowisku użytkownika. Jeśli właściwości pakietu Office nie są odwzorowywane na właściwości repozytorium, funkcja ta nie będzie działać.<br /><br />To ustawienie nie ma zastosowania w przypadku programu Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Wybierz tę opcję, aby zmniejszyć liczbę czynności wymaganych do pracy z dokumentami po dodaniu ich do repozytorium.<br /></br /><b>Wskazówka:</b> Aby upewnić się, że użytkownicy wprowadzają/zwracają pliki do repozytorium, wybierz opcję <b>Zachęć użytkowników do wprowadzania dokumentów podczas zamykania aplikacji pakietu Office</b>.",
		admin_ms_show_details_recently_used: "Pokaż szczegóły elementu <b>Ostatnio używane</b>",
		admin_ms_show_details_recently_used_hover_help: "W czasie przeglądania listy elementów ostatnio używanych szczegóły elementów są domyślnie ukryte, tak aby umożliwić wyświetlanie większej liczby elementów. Wybranie tej opcji powoduje, że w liście elementów ostatnio używanych szczegóły są domyślnie wyświetlane dla pierwszego dokumentu w panelu szczegółów.",
		admin_ms_show_no_permissions_warning: "Pokazuj ostrzeżenia, gdy użytkownik przeprowadzi edycję właściwości lub wprowadzi/zwróci dokument, ale nie ma uprawnień do wyświetlania szablonu wprowadzania dokumentu",
		admin_ms_show_no_permissions_warning_hover_help: "Jeśli dokument w repozytorium został utworzony przy użyciu szablonu wprowadzania, ale użytkownik nie ma uprawnień do wyświetlania szablonu wprowadzania dokumentu, wówczas szablon wprowadzania nie jest pobierany.<br /><br/>Dlatego gdy użytkownik edytuje właściwości dokumentu, właściwości są wyświetlane bez użycia szablonu wprowadzania. Natomiast gdy użytkownik wprowadza/zwraca dokument, dokument jest wprowadzany/zwracany bez użycia szablonu wprowadzania.<br /><br />Domyślnie te działania są wykonywane bez informowania użytkownika o tym, że szablon wprowadzania nie jest używany. Ostrzeżenie jest rejestrowane tylko w pliku dziennika.<br /><br />Wybierz tę opcję, jeśli chcesz, aby wyświetlane były ostrzeżenia, które natychmiast informują użytkownika o tym, że szablon wprowadzania nie jest używany.",
		admin_ms_hide_search_actions: "Zwiń sekcję filtrów przeszukiwania",
		admin_ms_hide_search_actions_hover_help: "Domyślnie użytkownicy mogą zastosować filtr czynności, aby określić czynność, użytkownika lub grupę użytkowników, a następnie mogą wybrać datę lub zakres dat, gdy konkretna czynność miała miejsce. Na przykład użytkownik może wyszukać dokumenty, które dodał samodzielnie w ciągu ostatniego miesiąca.<br /><br />Jeśli nie chcesz zezwolić użytkownikom na stosowanie filtrów czynności, wybierz tę opcję, aby ukryć filtry czynności i zmniejszyć liczbę pól wyświetlanych podczas definiowania kryteriów wyszukiwania.",
		admin_ms_hide_save_document: "Ukryj opcję <b>Zapisz</b> na pasku wstążki",
		admin_ms_hide_save_document_hover_help: "Korzystając z opcji <b>Zapisz</b>, użytkownik może zapisać w repozytorium zmiany wprowadzone w dokumentach, nie zwracając tych dokumentów do repozytorium.",
		admin_ms_indicate_managed_email_on_add: "Wskaż, czy e-mail został już dodany do repozytorium",
		admin_ms_indicate_managed_email_on_add_hover_help: "Wybranie tej opcji informuje użytkowników, że e-mail jest już w repozytorium, co może zmniejszyć liczbę razy, gdy e-mail jest dodawany do repozytorium.  Jeśli ta opcja jest wybrana, w programie Microsoft Outlook tworzona jest nowa kategoria kolorów o nazwie IBM ECM. Każdy e-mail, który jest dodawany do repozytorium jest automatycznie dodawany do kategorii Zarządzane w IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Dodaj opcje w grupie Edytuj:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Określ, które opcje <b>Dodaj</b> są dostępne z grupy <b>Edytuj</b> na pasku wstążki:<ul><li>Wybierz opcję <b>Pokaż wszystkie opcje dodawania</b>, aby wyświetlić przycisk Dodaj i wszystkie działania dodawania, które są dostępne z grupy Edytuj.</li><li>Wybierz opcję <b>Ukryj wszystkie opcje dodawania</b>, aby uniemożliwić użytkownikom dodawanie dokumentów do repozytorium lub jeśli użytkownicy mają dodawać dokumenty tylko z obszaru zespołu.</li><li>Wybierz opcję <b>Ukryj działanie Dodaj z szablonem</b>, jeśli chcesz wymusić powiązania folderu szablonu wprowadzania i uniemożliwić użytkownikom wybieranie innego szablonu wprowadzania.</li><li>Wybierz opcję <b>Pokaż tylko działanie Dodaj z szablonem</b>, jeśli chcesz, aby użytkownicy dodawali dokumenty za pomocą szablonów wprowadzania.</li></ul>",
		admin_ms_show_edit_group_add_button: "Pokaż wszystkie opcje dodawania (domyślnie)",
		admin_ms_hide_edit_group_add_button: "Ukryj wszystkie opcje dodawania",
		admin_ms_hide_add_with_entry_template: "Ukryj działanie Dodaj z szablonem",
		admin_ms_managed_in_ecm: "Zarządzane w IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Po wyświetleniu przez użytkowników kategorii w programie Microsoft Outlook ta etykieta jest wyświetlana dla wiadomości e-mail, która została dodana do repozytorium IBM Content Manager lub IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Nazwa kategorii Zarządzane w IBM ECM nie może zawierać przecinka (,) lub średnika (;).",
		admin_delete_open_docs_after_close: "Automatycznie usuń otwarte dokumenty, gdy użytkownicy zamykają dokumenty",
		admin_admin_delete_open_docs_after_close_hover_help: "Gdy użytkownik otworzy dokument w programie IBM Content Navigator for Microsoft Office, dokument zostanie pobrany do katalogu dokumentów użytkownika lub miejsca określonego w ustawieniach śledzenia plików dla pulpitu.<br><br>Wybierz tę opcję, aby usunąć pliki, które są otwarte, ale nie pobrane, gdy użytkownicy zamykają dokumenty. Wybranie tej opcji umożliwia:<ul><li>Wymuszenie zgodności ze strategiami informatycznymi</li><li>Zapewnienie, że użytkownicy pracują z najnowszymi wersjami dokumentów</li><li>Zmniejszenie ilości miejsca na dysku, która jest używana do zapisywania dokumentów</li><ul>",
		admin_ms_custom_command_configuration: "Komendy niestandardowe:",
		admin_ms_custom_command_configuration_hover_help: "Można dodać maksymalnie cztery komendy do paska narzędzi IBM Content Navigator for Microsoft Office w aplikacjach pakietu Microsoft Office. Komendy mogą być używane do otwierania adresów URL. Na przykład można dodać komendę, aby otworzyć usługę, która może być używana do wyszukiwania użytkowników i grup.",
		admin_ms_custom_command_dialog_title: "Edytuj komendę niestandardową",
		admin_ms_custom_command_dialog_intro_text: "Zdefiniuj komendę, którą można użyć do otwierania adresu URL z paska narzędzi IBM Content Navigator for Microsoft Office w aplikacjach pakietu Microsoft Office.",
		admin_ms_custom_command_id: "Komenda ${0}",
		admin_ms_custom_command_available_label: "Dostępne",
		admin_ms_custom_command_available_hover_help: "Jeśli adres URL, który jest zdefiniowany dla komendy musi zostać wyłączony na potrzeby konserwacji, można usunąć zaznaczenie pola wyboru dla komendy, aby komenda nie była wyświetlana w pakiecie Microsoft Office.<br/><br/><b>Ważne:</b> Użytkownicy muszą wylogować się z pulpitu, aby zmiany zostały odzwierciedlone w programie IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "Identyfikator komendy",
		admin_ms_custom_command_id_label: "Identyfikator",
		admin_ms_custom_command_label_label: "Etykieta",
		admin_ms_custom_command_label_hover_help: "Określ wyświetlaną etykietę komendy w pakiecie Microsoft Office.",
		admin_ms_custom_command_description_label: "Opis",
		admin_ms_custom_command_description_hover_help: "Określ opis wyświetlany dla komendy w pakiecie Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Podaj pełny adres URL otwierany z pakietu Microsoft Office. Adresem URL może być strona WWW lub usługa.",
		admin_ms_custom_command_icon_label: "Ikona",
		admin_ms_custom_command_icon_hover_help: "Podaj nazwę pliku wyświetlanej ikony, na przykład IkonaKomendy.png.<br/><br/><b>Ważne:</b> Należy dodać plik ikony podkatalogu wtyczek katalogu instalacyjnego IBM Content Navigator for Microsoft Office na każdym komputerze klienckim.<br/><br/>Jeśli plik ikony nie znajduje się w katalogu wtyczek lub jeśli nie zostanie określona ikona, wyświetlana jest ikona domyślna custombuttonicon_38.gif.",
		admin_ms_custom_command_group_name: "Etykieta grupy:",
		admin_ms_custom_command_group_name_hover_help: "Można określić etykietę grupy wyświetlaną poniżej komend niestandardowych na pasku wstążki.<br/><br/>Jeśli etykieta nie zostanie określona, etykieta grupy to <b>Komendy niestandardowe</b>.",
		admin_ms_ribbon_tab_label: "Etykieta karty IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Wprowadź nazwę, którą chcesz wyświetlić na karcie IBM Content Navigator for Microsoft Office, na pasku wstążki programu Microsoft Office. Jeśli nazwa nie zostanie określona, karta ma nazwę \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Zamknij panel zadań, gdy użytkownicy otwierają dokumenty",
		admin_ms_close_task_pane_on_open_hover_help: "Wybierz tę opcję, aby zmaksymalizować obszar, w którym użytkownicy mogą wyświetlać dokumenty w pakiecie Microsoft Office.<br/><br/>Użytkownicy programu Microsoft Office 2010: Aby upewnić się, że panel zadań jest zamknięty dla wszystkich dokumentów, włącz tryb interfejsu MDI, klikając <b>Opcje</b> &gt; <b>Zaawansowane</b> i usuwając zaznaczenie opcji <b>Pokaż wszystkie okna na pasku zadań</b>.",
		admin_ms_open_document_options: "Opcje otwierania dokumentu:",
		admin_ms_delete_local_file_options: "Opcje usuwania pliku lokalnego:",
		admin_ms_add_and_checkin_options: "Opcje dodawania i zwrotu:",
		admin_ms_search_options: "Opcje wyszukiwania:",
		admin_ms_display_options: "Opcje wyświetlania:",
		admin_ms_bidirection_enable_label: "Włącz obsługę tekstu dwukierunkowego",
		admin_ms_bidirection_enable_hover_help: "Wybierz tę opcję, aby umożliwić użytkownikom wprowadzanie lub wyświetlanie tekstu w programie IBM Content Navigator for Microsoft Office w kierunku innym niż od lewej do prawej.",
		admin_ms_text_direction_label: "Podstawowy kierunek tekstu dla treści:",
		admin_ms_text_direction_hover_help: "Wskaż kierunek, w jakim tekst jest wprowadzany do pól wprowadzania w programie IBM Content Navigator for Microsoft Office. To ustawienie decyduje także o liczbie wyświetlanych elementów, takich jak nazwy folderów czy wartości właściwości.",
		admin_ms_control_threshold_label: "Minimalna liczba elementów, przy których włączany jest podgląd wyprzedzający:",
		admin_ms_control_threshold_hover_help: "Domyślnie podgląd wyprzedzający jest włączony, gdy liczba elementów jest większa lub równa 50. Podgląd taki jest używany przy wyszukiwaniu i ustawianiu właściwości z predefiniowanymi wartościami na liście rozwijanej. Można zmienić wartość minimalną.",

		admin_ms_default_email_class: "Klasa używana do dodawania wiadomości e-mail",
		admin_ms_default_email_class_hover_help: "Wszystkie wiadomości e-mail dodawane do tego repozytorium z programu Microsoft Outlook zostaną dodane do wskazanej przez użytkownika klasy. Użytkownicy nie mogą zmienić klasy.",
		admin_ms_default_folder_class: "Klasa używana do tworzenia folderów",
		admin_ms_default_folder_class_hover_help: "Każdy folder tworzony w tym repozytorium z programu Microsoft Outlook zostanie dodany do wskazanej przez użytkownika klasy.  Użytkownicy nie mogą zmienić klasy.",
		admin_ms_default_folder_warn_title: "Nie można użyć klasy ${0} jako klasy używanej podczas tworzenia folderów.",
		admin_ms_default_folder_warn_name_prop_invalid: "Właściwość name klasy nie jest łańcuchem; nazwa folderu musi być łańcuchem.<br />Wybierz inną klasę, która będzie używana podczas tworzenia folderów, lub we współpracy z administratorem IBM Content Manager zmień właściwość nazwy klasy na łańcuch.",
		admin_ms_default_folder_warn_req_props: "Klasa obejmuje wymagane właściwości, które nie mają wartości. Użytkownicy nie mogą jednak określać wartości dla wymaganych właściwości podczas tworzenia folderów za pośrednictwem programu IBM Content Navigator for Microsoft Office.<br />Wybierz inną klasę, która będzie używana podczas tworzenia folderów, lub we współpracy z administratorem IBM Content Manager ustaw wymagane właściwości jako opcjonalne lub wypełnij je wartościami.",
		admin_ms_delimiter_for_office_properties: "Ogranicznik we właściwościach złożonych z wielu łańcuchów",
		admin_ms_delimiter_for_office_properties_hover_help: "Określ znak, który ma być używany jako ogranicznik we właściwościach łańcuchowych odwzorowanych na właściwości złożone z wielu łańcuchów. Domyślnie do właściwości złożonej z wielu łańcuchów można przypisać zestaw wartości rozdzielonych średnikami (;). Jeśli jednak jeden z łańcuchów zawiera średnik, nie można będzie dodać takiego łańcucha, chyba że w charakterze ogranicznika będzie używany inny znak. Można na przykład zmienić ogranicznik na przecinek (,).",
		admin_ms_outlookPropertyRemembrance : "Zapamiętaj ustawienia podczas dodawania komunikatów i załączników",
		admin_ms_outlookPropertyRemembrance_hover_help : "Wartości właściwości, lokalizacja, klasa i zabezpieczenia przypisane do wiadomości i załączników są zapamiętywane i zostaną użyte jako ustawienia domyślne podczas dodawania pozycji w przyszłości.",

		admin_file_type_name_hover_help: "Pomoc w dymku do opcji Nazwa",
		admin_file_type_description_hover_help: "Pomoc w dymku do opcji Opis",
		admin_file_type_dialog_title: "Edytuj filtr typów plików",
		admin_new_file_type_dialog_title: "Nowy filtr typów plików",
		admin_mobile_feature_dialog_title: "Składnik",
		admin_mobile_feature_dialog_new_title: "Nowy składnik",
		admin_file_type_instructions: "Utwórz filtr umożliwiający użytkownikom zawężenie listy wyników wyszukiwania. W filtrze można odwzorować wiele typów MIME.",
		admin_file_type_filter_place_holder: "Typy MIME filtru",
		admin_new_button_label: "Nowy",
		admin_edit_button_label: "Edytuj",
		admin_delete_button_label: "Usuń",
		admin_copy_button_label: "Kopiuj",
		admin_verify_button_label: "Weryfikuj",
		admin_availabe_filters_label: "Dostępne filtry",
		admin_selected_filters_label: "Wybrane filtry",

		admin_mobile_access: "Dostęp do aplikacji dla urządzeń przenośnych:",
		admin_mobile_access_hover_help: "Jeśli program IBM Content Navigator ma być obsługiwany za pośrednictwem urządzenia przenośnego, zaleca się, aby umożliwić użytkownikom dostęp do tego pulpitu z wykorzystaniem aplikacji dla urządzeń przenośnych.<br /><br />Jeśli dostęp do pulpitu przy użyciu aplikacji dla urządzeń przenośnych nie będzie możliwy, użytkownicy nadal będą mieli możliwość uzyskania dostępu do klienta WWW, korzystając z przeglądarek dla urządzeń przenośnych. Klient WWW nie jest jednak przeznaczony do tego, aby dostęp do niego odbywał się za pomocą urządzeń przenośnych.",

		admin_mobile_access_allow_label: "Zezwól użytkownikom na:",
		admin_mobile_allow_add_photos: "Dodawanie zdjęć z aparatu fotograficznego i biblioteki zdjęć",
		admin_mobile_allow_add_docs: "Dodawanie dokumentów i tworzenie folderów w repozytorium",
		admin_mobile_allow_open_docs: "Otwieranie dokumentów w innych aplikacjach",
		admin_mobile_allow_add_docs_hover_help: "Użytkownicy mogą tworzyć foldery lub dodawać dokumenty z innych aplikacji dla urządzeń przenośnych, takie jak dokumenty stanowiące załącznik do wiadomości e-mail.",
		admin_mobile_allow_open_docs_hover_help: "Użytkownicy otrzymują monit o wybranie aplikacji, która pozwoli wyświetlić wybrany dokument. Jeśli dostępna jest tylko jedna aplikacja, to ona zostanie użyta.",
		admin_mobile_features: "Składniki:",
		admin_mobile_features_hover_help: "Określ, które składniki pulpitu będą wyświetlane w aplikacji dla urządzeń przenośnych IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nowy składnik",
		admin_mobile_move_up_button_label: "Przenieś w górę",
		admin_mobile_move_down_button_label: "Przenieś w dół",
		admin_desktop_mobile_instructions: "Tutaj jest miejsce na instrukcję dotyczącą ustawień urządzeń przenośnych",
		admin_desktop_max_number_of_docs_to_add: "Maksymalna liczba dokumentów możliwych do dodania:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Określ maksymalną liczbę dokumentów, jakie użytkownicy mogą jednorazowo dodać. Domyślna wartość maksymalna to 50 dokumentów. Jednak wartość maksymalną można ustawić nawet na 300.",
		admin_desktop_max_number_of_docs_to_modify: "Maksymalna liczba elementów możliwych do modyfikacji:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Określ maksymalną liczbę elementów, jakie użytkownicy mogą jednorazowo modyfikować. Domyślna wartość maksymalna to 50 dokumentów. Jednak wartość maksymalną można ustawić nawet na 300.",
		admin_desktop_max_conversion_size: "Maksymalna ilość danych na potrzeby konwersji PDF (w MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Ograniczenie:</b> To ustawienie nie jest obsługiwane w programie IBM Content Manager OnDemand.<br/><br/>Określ maksymalną ilość danych, jaka może zostać przekonwertowana do pliku PDF. Ten limit ma zastosowanie, gdy użytkownicy pobierają pozycje jako pliki PDF lub wysyłają pozycje za pośrednictwem poczty e-mail, jako pliki PDF.<br /><br />Dokumenty są nadal konwertowane, nawet jeśli nie można określić wielkości każdego z nich.<br/><br/>Limit domyślny to 200 MB. Ustawienie tego limitu na wartość powyżej 200 MB może mieć wpływ na wydajność systemu.",
		admin_desktop_timeProperties: "Znacznik czasu:",
		admin_desktop_time_properties_hover_help: "<b>Tylko użytkownicy IBM FileNet P8:</b> To ustawienie ma zastosowanie do właściwości niestandardowych i nie ma zastosowania do właściwości systemowych. Na przykład, gdy zostanie wybrana opcja <b>Wyświetl tylko fragment znacznika czasu określający datę</b>, we właściwości Zmodyfikował(a) będzie nadal wyświetlany fragment znacznika czasu określający godzinę.<br/><br/>To ustawienie nie powoduje zmiany znacznika czasu w repozytorium.",
		admin_desktop_disable_time_stamp: "Wyświetl pełny znacznik czasu",
		admin_desktop_enable_time_stamp: "Wyświetl tylko fragment znacznika czasu określający datę",
		admin_desktop_timezone: "Strefa czasowa:",
		admin_desktop_timezone_localuser: "Wyświetl lokalną strefę czasową użytkownika",
		admin_desktop_timezone_alluser: "Wyświetl tę samą strefę czasową dla wszystkich użytkowników",
		admin_desktop_timezone_hover_help: "Możliwe jest określenie widoczności znacznika czasu bazującego na lokalnej strefie czasowej oraz określenie, czy wszyscy użytkownicy widzą ten sam znacznik czasu.<br/><br/>To ustawienie nie powoduje zmiany znacznika czasu w repozytorium. Ustawienie wybrane przez użytkownika określa jednak strefę czasową używaną do utworzenia znacznika czasu w repozytorium po dodaniu lub zmodyfikowaniu przez niego elementu.",
		admin_desktop_mobile_feature_display_label: "Wyświetl",
		admin_desktop_mobile_feature_icon_file_label: "Plik ikony",
		admin_mobile_feature_dialog_icon_file_label: "Plik ikony:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nazwa",
		admin_desktop_mobile_select_feature_label: "Wybierz składnik",
		admin_desktop_mobile_feature_icon_label: "Ikona składnika",
		admin_desktop_share_admin_none: "Nie określono administratora.",
		admin_desktop_share_admin_edit_label: "Ustaw administratora...",
		admin_browse_icon: "Ikona przeglądania",
		admin_search_icon: "Ikona wyszukiwania",
		admin_favorites_icon: "Ikona ulubionych",
		admin_casesearch_icon: "Ikona sprawy",
		admin_datacap_icon: "Ikona Datacap",
		admin_system_defined: "Zdefiniowane przez system",
		admin_icon_file_placeholder_text: "Lokalizacja pliku (np. http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Główny",
		admin_folder_default: "Domyślnie",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Paski narzędzi",
		admin_menu_context_menus: "Menu kontekstowe",
		admin_menu_office_toolbars: "Komendy na pasku wstążki pakietu Microsoft Office",
		admin_menu_office_menus: "Menu kontekstowe pakietu Microsoft Office",

		admin_file_name_label: "Nazwa pliku:",
		admin_exportconfiguration_security_label: "Uwzględnij użytkowników i grupy z uprawnieniami do tego pulpitu",
		admin_exportconfiguration_instruction: "Możesz eksportować pulpity, wraz z konfiguracjami repozytoriów i wtyczek powiązanych z wybranymi pulpitami, do pliku, który będzie można następnie zaimportować do innej instancji programu IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Eksportuj pulpit",
		admin_exportconfiguration_button_label: "Eksportuj",
		admin_dialog_select_all: "Wybierz wszystko",
		admin_dialog_deselect_all: "Wyczyść wszystko",

		admin_importconfiguration_instruction: "Elementy z wybranego pliku konfiguracyjnego zostaną zaimportowane do tego systemu. Jeśli jednak w systemie istnieje już element o tym samym identyfikatorze, musisz zdecydować, czy zachować, czy nadpisać ten element.",
		admin_importconfiguration_dialog_label: "Importuj pulpit",
		admin_importconfiguration_reason_dialog_label: "Importuj przyczyny utajnienia",
		admin_importconfiguration_button_label: "Importuj",
		admin_to_be_imported: "Element konfiguracji do zaimportowania",
		admin_on_target_system: "Istniejący element w systemie docelowym",
		admin_import_short_warning_message: "Następujące elementy już istnieją w tym systemie. Zaznacz elementy, które chcesz zastąpić w tym systemie:",
		admin_import_warning_message: "Poniższe elementy konfiguracji mają te same identyfikatory, co elementy istniejące w systemie docelowym. Wybierz tylko te elementy, które chcesz zaimportować i nadpisać w systemie docelowym.<br /><br />Jeśli nie chcesz nadpisać elementu konfiguracji, utwórz kopię elementu w instancji, z której wyeksportowano pulpit, nadaj jej inny identyfikator i powiąż z pulpitem. Wyeksportuj pulpit ponownie, a następnie zaimportuj pulpit w tej instancji.",
		admin_choose_file_to_import_label: "Wybierz plik do importu:",
		admin_download_imported_log: "Raport dotyczący pobierania",
		admin_desktop_import_summary: "Podsumowanie importu dla pulpitu",
		admin_reason_import_summary: "Podsumowanie przyczyn utajnienia importu",
		admin_rba_import_summary: "Podsumowanie importu ról administracyjnych",
		admin_import_open_tabs_checking: "Przed zaimportowaniem pulpitów należy zamknąć wszystkie inne karty niż karta <bold>Pulpity</bold> w narzędziu administracyjnym.",
		admin_import_no_conflict: "Następujące elementy zostaną zaimportowane:",
		admin_desktop_invalid: "Niepoprawny pulpit",
		admin_desktop_warning: "Pulpit został zapisany, ale wystąpiły ostrzeżenia.",
		admin_repos_warning: "Repozytorium zostało zapisane, ale wystąpiły ostrzeżenia.",
		admin_config_type_icon: "Ikona typu elementu konfiguracji",

		admin_approval_workflow: "Przepływ pracy zatwierdzania",
		admin_approval_workflow_hover: "Umożliwia użytkownikom uruchomienie predefiniowanego przepływu pracy zatwierdzania. Można wyłączyć przepływ pracy zatwierdzania, aby umożliwić użytkownikom uruchamianie niestandardowego przepływu pracy zdefiniowanego przez subskrypcję. Domyślnie przepływ pracy zatwierdzania jest włączony.<br><br><b>Ważne:</b> W wypadku włączenia przepływu pracy zatwierdzania należy także zadbać o to, aby jedna lub obie definicje predefiniowanych przepływów pracy (ICNParallelDocumentApproval.pep i ICNSequentialDocumentApproval.pep) zostały dodane do repozytorium i przeniesione do silnika Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Nie jest możliwe określenie użytkowników ani grup mających dostęp do tego pulpitu.",
		admin_cannot_add_desktop_members_error_explanation: "Nie masz odpowiednich uprawnień do pobierania informacji o użytkowniku i grupie.",
		admin_cannot_add_desktop_members_error_userResponse: "Zaloguj się, używając innej nazwy użytkownika, lub poproś administratora systemu IBM Content Manager o przydzielenie uprawnienia UserACLOwner, które jest wymagane do pobierania informacji o użytkowniku i grupie.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Nie można wybrać użytkowników i grup.",
		admin_cannot_select_users_groups_error_explanation: "Nie masz odpowiednich uprawnień do pobierania informacji o użytkowniku i grupie.",
		admin_cannot_select_users_groups_error_userResponse: "Zaloguj się, używając innej nazwy użytkownika, lub poproś administratora systemu IBM Content Manager o przydzielenie uprawnienia UserACLOwner, które jest wymagane do pobierania informacji o użytkowniku i grupie.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Nie znaleziono klienta OAuth2.",
		oauth_client_not_found_error_explanation: "Nie znaleziono klienta OAuth2 o identyfikatorze ${0}.",
		oauth_client_not_found_error_userResponse: "Skontaktuj się z administratorem i poinformuj go, że nie znaleziono klienta OAuth2 o tym identyfikatorze.",
		oauth_client_not_found_error_adminResponse: "Sprawdź, czy konfiguracja repozytorium obejmuje właściwy identyfikator klienta OAuth2.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "id_klienta",

		oauth_login_failed_error: "Logowanie do repozytorium nie powiodło się.",
		oauth_login_failed_error_explanation: "Próba zalogowania się do repozytorium ${0} nie powiodła się.",
		oauth_login_failed_error_userResponse: "Upewnij się, że identyfikator i hasło są poprawne, po czym spróbuj zalogować się ponownie.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "id_repozytorium",

		oauth_error_return_error: "Wystąpił błąd przy próbie zalogowania się do ${0}.",
		oauth_error_return_error_explanation: "Próba autoryzacji ${0} nie powiodła się.",
		oauth_error_return_error_userResponse: "Skontaktuj się z administratorem systemu, podając mu następujące informacje: próba autoryzacji ${0} nie powiodła się i zwrócony został następujący komunikat o błędzie: <br>${1}<br><b>błąd:</b> ${2}.<br><b>opis:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Dodatkowe informacje na temat błędu są dostępne w plikach dziennika serwera aplikacji WWW.  Więcej informacji na temat plików dziennika zawiera sekcja poświęcona plikom dziennika IBM Content Navigator w Centrum Wiedzy IBM. Korzystając z informacji o próbie autoryzacji ${0}, spróbuj wyeliminować problem. Upewnij się też, że uwierzytelnianie OAuth2 jest włączone.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Aplikacja docelowa OAuth",
		oauth_error_return_error_1: "komunikat_o_błędzie",
		oauth_error_return_error_2: "błąd",
		oauth_error_return_error_3: "opis_błędu",

		oauth_error_unknown: "Nierozpoznany komunikat o błędzie OAuth.",

		delete_share_permission_error: "Udostępnienie nie zostało usunięte.",
		delete_share_permission_error_explanation: "Nie masz uprawnień do usunięcia udostępnienia.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Nie można udostępnić tego elementu.",
		class_not_support_share_error_explanation: "Konfiguracja klasy ${0} nie umożliwia udostępniania.",
		class_not_support_share_error_0: "nazwa_klasy",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Nie można udostępnić tego elementu.",
		rbr_not_support_share_error_explanation: "Do elementu dodano treść objętą szczególną ochroną.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Urządzenie, z którego użytkownik próbuje się zalogować, nie ma autoryzacji dostępu do konta użytkownika.",
		box_oauth_error_invalid_request: "W żądaniu brakuje wymaganego parametru, podano niepoprawną wartość parametru, podano ten sam parametr więcej niż raz lub żądanie zawiera inny błąd.",
		box_oauth_error_unsupported_response_type: "Serwer autoryzacji nie obsługuje tej metody uzyskiwania kodu autoryzacji.  Sprawdź wartość parametru code w żądaniu.",
		box_oauth_error_access_denied: "Właściciel zasobu lub serwer autoryzacji odmówił realizacji żądania.",
		box_oauth_error_temporarily_unavailable: "Urządzenie zostało objęte ograniczeniami ze względu na częstotliwość.",
		box_oauth_error_unknown: "Nierozpoznany komunikat o błędzie usługi Box.",

		admin_default_search_type: "Domyślny typ wyszukiwania",
		admin_default_search_type_hover: "Wskaż opcję wybraną domyślnie w polu <b>Szukaj</b> w menu <b>Opcje wyszukiwania</b>.",
		admin_default_search_type_documents: "Dokumenty",
		admin_default_search_type_folders: "Foldery",
		admin_default_search_type_folders_and_documents: "Dokumenty i foldery",

		admin_restricted_search_type: "Zezwalaj na przeszukiwanie:",
		admin_restricted_search_type_hover: "Domyślnie użytkownicy mogą przeszukiwać zarówno dokumenty, jak i foldery. Jeśli chcesz ukryć opcję przeszukiwania i zezwolić wyłącznie na przeszukiwanie dokumentów, zaznacz opcję Dokumenty, a usuń zaznaczenie opcji Foldery.</br> </br> Jeśli zezwalasz na przeszukiwanie zarówno dokumentów, jak i folderów, wybierz opcję, która ma być domyślnie wyświetlana po otwarciu panelu wyszukiwania.",
		admin_restricted_search_type_documents: "Dokumenty",
		admin_restricted_search_type_folders: "Foldery",
		admin_restricted_search_type_folders_and_documents: "Dokumenty i foldery",

		admin_default_search_version: "Domyślna wersja wyszukiwania",
		admin_default_search_version_hover: "Wskaż opcję wybraną domyślnie w polu <b>Wersja</b> w menu <b>Opcje wyszukiwania</b>.",

		admin_all_classes_search: "Wyszukaj we wszystkich klasach",
		admin_all_classes_search_hover: "Określ, czy użytkownicy mają uprawnienia do wyszukiwania we wszystkich klasach, a jeśli tak, to co należy uwzględnić przy wyszukiwaniu dokumentów.",
		admin_all_classes_search_removed_hover: "Opcja wyszukiwania we wszystkich klasach jest niedostępna, ponieważ parametr context-param allPseudoClassHidden w pliku web.xml aplikacji Navigator jest ustawiony na true.",
		admin_all_classes_search_hide: "Usuń wybór, aby wyszukać we wszystkich klasach",
		admin_all_classes_search_documents_only_documents: "W wyszukiwaniu dokumentów uwzględniane są tylko dokumenty, zapisane wyszukiwania i szablony wprowadzania",
		admin_all_classes_search_documents_non_folders: "W wyszukiwaniu dokumentów uwzględniane są wszelkie elementy niebędące folderami",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Widok drzewa:",
		admin_feature_config_tree_view_hoverhelp: "Określ, czy użytkownicy mogą uzyskać dostęp do listy folderów w repozytorium za pośrednictwem panelu Przeglądaj. W przypadku ukrycia panelu Przeglądaj, użytkownicy muszą używać listy treści, aby przejść do folderów w repozytorium.",
		admin_feature_config_selected_repositories_label: "Repozytoria:",
		admin_feature_config_selected_repositories_hoverhelp: "Wybierz repozytoria, do których użytkownicy mogą uzyskać dostęp w tym składniku.",
		admin_feature_config_selected_repositories_select_state_hdr: "Wybierz repozytorium",
		admin_feature_config_selected_repositories_name_hdr: "Nazwa repozytorium",
		admin_feature_config_selected_repositories_show_hdr: "Pokaż",
		admin_feature_config_invalid_icon_title: "Składnikowi brakuje niektórych wymaganych ustawień",
		admin_feature_config_view_select_hdr: "Wybierz widok",
		admin_feature_config_view_hdr: "Widok",
		admin_feature_config_view: "Widok",
		admin_feature_config_views: "Widoki:",
		admin_feature_config_views_hoverhelp: "Wskaż widoki, które użytkownicy mogą zastosować do listy treści. Widoki są wyświetlane w kolejności, w jakiej są wymienione. Pierwszy wybrany widok to widok domyślny funkcji.<br><br><b>Ważne:</b> Po włączeniu widoku Taśma filmowa należy skonfigurować przeglądarkę konwersji do HTML w celu wyświetlenia podglądu dokumentu.",

		admin_custom_dialog_name: "Nazwa:",
		admin_custom_dialog_value: "Wartość:",
		admin_custom_setting_name_hover: "Wprowadź nazwę ustawienia Daeja ViewONE, które zamierzasz dodać do konfiguracji. Więcej informacji na temat ustawień konfiguracji zawiera dokumentacja programu Daeja ViewONE.",
		admin_custom_setting_value_hover: "Wprowadź wartość, która ma być używana dla ustawienia konfiguracji Daeja ViewONE. Więcej informacji na temat poprawnych wartości dla ustawienia konfiguracji zawiera dokumentacja programu Daeja ViewONE.",

		entry_template_name_required_message: "Wymagane jest pole nazwy w ustawieniach szablonu wprowadzania.",
		entry_template_name_invalid_message: "Pole nazwy w ustawieniach szablonu wprowadzania nie może zawierać następujących znaków: * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Jeśli wybrano konkretnych użytkowników i grupy w polu Udostępniaj w ustawieniach szablonu wprowadzania, należy określić co najmniej jednego użytkownika lub grupę.",
		entry_template_no_permission_to_save_to_teamspace_message: "Nie masz uprawnień do dodawania szablonów wprowadzania do obszaru zespołu (${0}), który został wybrany w opcji Zapisz w ustawieniach szablonu wprowadzania.",
		entry_template_save_in_destination_required_message: "Konieczne jest podanie domyślnej lokalizacji zapisu w sekcji <b>Ustaw miejsce przechowywania elementu</b>.",
		entry_template_save_in_destination_must_select_folder: "Jeśli pole <b>Zapisz w</b> zostanie ukryte, zaś użytkownicy będą musieli dodać nowe elementy do folderu, konieczne będzie wybranie folderu w polu <b>Domyślne położenie Zapisz w</b> w sekcji <b>Ustaw miejsce przechowywania elementu</b>.",
		entry_template_what_to_save_required_message: "Wybierz co najmniej jedną pozycję opcji Co chcesz zapisać? w ustawieniach Ustaw opcje.",
		entry_template_custom_workflow_empty_message: "Po wybraniu opcji <b>Niestandardowy przepływ pracy...</b> musisz wyszukać i wybrać przepływ pracy, którego chcesz użyć.",

		entry_template_new: "Nowy szablon wprowadzania",
		entry_template_name_hover: "Nazwa szablonu wprowadzania nie może zawierać następujących znaków: * \\ / : ? \" < > |",
		entry_template_name_invalid: "Nazwa szablonu wprowadzania nie może zawierać żadnego z następujących znaków: * \\ / : ? \" < > |",
		entry_template_description_hover: "Wprowadź opis, który ułatwi użytkownikom odróżnienie tego szablonu wprowadzania od innych.",
		entry_tempalte_save_in_hover: "Określ, gdzie szablon wprowadzania ma zostać zapisany.<br><br><b>Ograniczenie:</b> Po zapisaniu szablonu wprowadzania w obszarze zespołu można użyć szablonu wprowadzania wyłącznie w obszarze zespołu.",
		entry_template_inherit_hover: "Po wybraniu tej opcji ustawienia bezpieczeństwa dla folderu nadrzędnego są dodawane do listy użytkowników i grup, którym ten szablon wprowadzania jest udostępniany.",
		entry_template_builder_aria_label: "Program budujący szablony wprowadzania",
		entry_template_builder_layout_aria_label: "Program budujący właściwości szablonów wprowadzania",

		entry_template_settings_document: "Zdefiniuj szablon wprowadzania",
		entry_template_settings_folder: "Ustaw miejsce przechowywania elementu",
		entry_template_settings_folder_intro: "Wskaż położenie, w którym zapisywane są elementy dodawane za pomocą tego szablonu wprowadzania.",
		entry_template_settings_properties: "Ustaw właściwości elementu",
		entry_template_settings_properties_intro: "Możesz wskazać wartości domyślne lub predefiniowane dla elementów dodawanych za pomocą tego szablonu wprowadzania. Ponadto możesz zmienić układ właściwości decydujący o wyświetlaniu konkretnych właściwości, a także kolejność, w jakiej są one wyświetlane.",
		entry_template_settings_workflow: "Skonfiguruj przepływ pracy dla elementu",
		entty_template_settings_workflow_intro: "Możesz określić, czy przepływ pracy został uruchomiony podczas dodawania elementów za pomocą tego szablonu wprowadzania.",
		entry_template_settings_security: "Ustaw zabezpieczenia elementu",
		entry_template_settings_security_intro: "Możesz określić domyślne lub predefiniowane zabezpieczenia dla elementów dodawanych za pomocą tego szablonu wprowadzania. Użytkownicy o odpowiednich uprawnieniach mogą mieć możliwość zmiany zabezpieczeń elementów po ich dodaniu.",
		entry_template_settings_options: "Ustaw opcje dla elementu",
		entry_template_xt_warning: "Zapisanie zmian w tym szablonie wprowadzania spowoduje przekształcenie go z szablonu wprowadzania IBM Workplace XT na szablon wprowadzania IBM Content Navigator. Aplikacja IBM Workplace XT nie obsługuje szablonów wprowadzania programu IBM Content Navigator.",

		entry_template_properties_edit_layout: "Edytuj układ...",
		entry_template_properties_read_only: "Tylko do odczytu",
		entry_template_properties_hidden: "Ukryte",

		entry_template_destination_show: "Pokaż pole <b>Zapisz w</b>",
		entry_template_destination_show_hover: "Po wyświetleniu pola <b>Zapisz w</b> użytkownicy mogą zmieniać miejsce zapisywania elementów.",
		entry_template_destination_hide: "Ukryj pole <b>Zapisz w</b>",
		entry_template_destination_hide_hover: "Po ukryciu pola <b>Zapisz w</b> użytkownicy nie mogą zmieniać miejsca zapisywania elementów.",
		entry_template_folder_save_in_default: "Domyślne położenie <b>Zapisz w</b>:",
		entry_template_folder_save_in_default_hover: "Określ domyślną lokalizację dodawania elementów, korzystając z tego szablonu wprowadzania.<br><br>Domyślnie wybrana lokalizacja nakłada ograniczenia na działanie szablonu wprowadzania:<ul><li>Użytkownicy nie mogą wybrać innego repozytorium.</li><li>Jeśli położeniem domyślnym jest obszar zespołu, wówczas użytkownicy nie mogą wybrać innego obszaru zespołu.</li></ul>Jeśli jednak użytkownicy powiążą ten szablon wprowadzania z folderem, mają oni możliwość zignorowania miejsca przechowywania skonfigurowanego dla tego szablonu wprowadzania.",
		entry_template_folder_restrict_choice: "Wymagaj od użytkowników dodania elementów do lokalizacji domyślnej lub folderu podrzędnego lokalizacji domyślnej",
		entry_template_folder_file_in_required: "Wymagaj od użytkowników dodania nowych elementów do folderu",
		entry_template_folder_file_in_required_hover: "Jeśli ta opcja nie zostanie wybrana, użytkownicy będą nadal mogli dodawać elementy do folderu głównego repozytorium.<br><br><b>Ograniczenie:</b> Konfiguracja pulpitu może wymagać od użytkowników wyboru folderu.",

		entry_template_document_type_show: "Pokaż pole <b>Co chcesz zapisać</b>",
		entry_template_document_type_show_hover: "W przypadku wyświetlenia pola <b>Co chcesz zapisać</b> elementy wybrane przez użytkownika są wyświetlane jako opcje w polu <b>Co chcesz zapisać</b>.",
		entry_template_document_type_hide: "Ukryj pole <b>Co chcesz zapisać</b>",
		entry_template_document_type_hide_hover: "Po ukryciu pola <b>Co chcesz zapisać</b> typ dokumentu jest używany zawsze podczas dodawania przez użytkownika dokumentów przy użyciu tego szablonu wprowadzania.",
		entry_template_document_type: "Ten szablon wprowadzania może być używany do dodawania następujących elementów:",
		entry_template_document_type_hover: "W przypadku wyświetlenia pola <b>Co chcesz zapisać</b> elementy wybrane przez użytkownika są wyświetlane jako opcje w polu <b>Co chcesz zapisać</b>.<br><br>Po ukryciu pola <b>Co chcesz zapisać</b> typ dokumentu jest używany zawsze podczas dodawania przez użytkownika dokumentów przy użyciu tego szablonu wprowadzania.",

		entry_template_misc: "Dodatkowe opcje:",
		entry_template_auto_classify_show: "Automatycznie klasyfikuj treść dokumentu",
		entry_template_auto_classify_show_hover: "W przypadku sklasyfikowania dokumentu w programie FileNet Content Manager treść tego dokumentu jest analizowana w celu określenia odpowiednich wartości klasy i właściwości dla tego dokumentu.<br><br>Skonsultuj się z administratorem systemu w celu określenia, czy włączono klasyfikację treści w produkcie Content Platform Engine.<br><br>W przypadku włączenia tej opcji klasa i właściwości dokumentu mogą ulec zmianie, gdy użytkownik doda dokument do repozytorium.",
		entry_template_allow_duplicate_file_names: "Zezwalaj na dokumenty ze zduplikowanymi nazwami plików",
		entry_template_allow_duplicate_file_names_hover: "Domyślnie można dodać dokumenty o tej samej nazwie do folderu w programie FileNet Content Manager. Możesz wyzerować tę opcję, jeśli chcesz, aby każdy plik w wybranym miejscu przechowywania miał unikalną nazwę.",
		entry_template_allow_compound_documents: "Zezwól, aby ten dokument stał się dokumentem nadrzędnym dokumentu składowego.",
		entry_template_version_show: "Pokaż opcje wersji dla dodawania i wprowadzania",
		entry_template_version_hide: "Ukryj opcje wersji dla dodawania i wprowadzania",
		entry_template_version_to_add_as: "Domyślna wersja do dodania jako:",
		entry_template_version_default: "Domyślna opcja wersji:",
		entry_template_version_default_checked: "Wersja główna",
		entry_template_version_default_unchecked: "Wersja podrzędna",
		entry_template_version_display: "Wersja dokumentu:",
		entry_template_version_display_show: "Pokaż",
		entry_template_version_display_hide: "Ukryj",
		entry_template_version_default_add: "Domyślna wersja do dodania jako:",

		entry_template_checkin_version_show: "Pokaż opcje wersji dla wprowadzenia",
		entry_template_checkin_version_hide: "Ukryj opcje wersji dla wprowadzenia",

		entry_template_checkin_version_message_no_versions: "Strategia wersji wybranej klasy uniemożliwia użytkownikom wprowadzanie nowej wersji dokumentu.",
		entry_template_checkin_version_message_always_version: "Strategia wersji wybranej klasy uniemożliwia użytkownikom zastąpienie bieżącej wersji dokumentu.",

		entry_template_applied: "Użyj tego szablonu wprowadzania, gdy użytkownicy:",
		entry_template_applied_add: "Dodają dokumenty (wymagane)",
		entry_template_applied_add_folder: "Tworzą foldery (wymagane)",
		entry_template_applied_checkin: "Wprowadź",
		entry_template_applied_properties_group: "Wyświetlają lub edytują właściwości:",
		entry_template_applied_properties: "W oknie Właściwości",
		entry_template_applied_viewer: "W przeglądarce apletów",
		entry_template_applied_docinfo: "W panelu informacji o dokumencie",
		entry_template_applied_no_class_support: "Ten szablon wprowadzania może być używany do dodawania elementów, lecz nie można go używać do wprowadzania dokumentów do repozytorium ani do wyświetlania czy edytowania właściwości. Obsługa tych sytuacji wymaga modyfikacji wybranej klasy. Jeśli sytuacje te wymagają użycia szablonu wprowadzania, należy poprosić administratora o użycie narzędzia administracyjnego do zmodyfikowania go tak, aby możliwe było zapisywanie identyfikatorów szablonów wprowadzania.",
		entry_template_applied_no_child_component_support: "Wybrana klasa ma komponenty podrzędne i zdefiniowany jest układ właściwości. Układy właściwości nie obsługują komponentów podrzędnych. Komponenty podrzędne nie będą wyświetlane dla użytkownika.",
		entry_template_applied_child_component: "Wybrana klasa ma komponenty podrzędne. Będą wyświetlane dla użytkownika, ale nie można skonfigurować komponentów podrzędnych w tym szablonie wprowadzania.",

		entry_template_properties_show: "Pokaż sekcję <b>Właściwości</b>",
		entry_tempalte_properties_show_hover: "Po wyświetleniu sekcji <b>Właściwości</b> użytkownicy mogą modyfikować wartości właściwości wyświetlane w szablonie wprowadzania, o ile nie są one właściwościami tylko do odczytu.",
		entry_template_properties_hide: "Ukryj sekcję <b>Właściwości</b>",
		entry_template_properties_hide_hover: "Po ukryciu sekcji <b>Właściwości</b> użytkownicy nie mogą modyfikować żadnych wartości właściwości. Szablon wprowadzania musi definiować wszystkie wartości, które mają być używane podczas dodawania elementów przez dodanie tego szablonu wprowadzania.",

		entry_template_security_show: "Pokaż sekcję <b>Zabezpieczenia</b>",
		entry_template_security_show_hover: "Po wyświetleniu sekcji <b>Zabezpieczenia</b> użytkownicy, którzy mają odpowiednie uprawnienia, mogą modyfikować zabezpieczenia tego elementu.",
		entry_template_security_hide: "Ukryj sekcję <b>Zabezpieczenia</b>",
		entry_template_security_hide_hover: "Po ukryciu sekcji <b>Zabezpieczenia</b> użytkownicy nie mogą modyfikować zabezpieczeń elementów. Szablon wprowadzania musi definiować wszystkie ustawienia zabezpieczeń, które mają być używane podczas dodawania lub edytowania tych elementów.",
		entry_template_security_policy: "Strategia bezpieczeństwa:",
		entry_template_security_policy_hover: "W zależności od wybranej strategii bezpieczeństwa umożliwia ona:<br><ul><li>Zastępowanie uprawnień podanych w sekcji <b>Ustaw zabezpieczenia elementu</b>.</li><li>Dodawanie uprawnień podanych w sekcji <b>Ustaw zabezpieczenia elementu</b>.</li></ul>",
		entry_template_security_policy_none: "Nie wybrano strategii bezpieczeństwa",
		entry_template_security_inherit: "Odziedzicz ustawienia bezpieczeństwa z folderu nadrzędnego",
		entry_tempalte_save_in_hover: "Określ, gdzie szablon wprowadzania ma zostać zapisany.<br><br><b>Ograniczenie:</b> Po zapisaniu szablonu wprowadzania w obszarze zespołu można użyć szablonu wprowadzania wyłącznie w obszarze zespołu.",
		entry_template_security_inherit_item_security_hover: "Po wybraniu tej opcji ustawienia bezpieczeństwa dla folderu nadrzędnego są dodawane do ustawień bezpieczeństwa definiowanych przez jeden z następujących elementów:<ul><li>klasę określoną w sekcji <b>Ustaw właściwości elementu</b></li><li>zabezpieczenie niestandardowe określone w sekcji <b>Ustaw zabezpieczenia elementu</b></li></ul>",
		entry_template_security_change: "Nadpisz zabezpieczenia definiowane przez wybraną klasę",
		entry_template_security_change_hover: "Po wybraniu tej opcji domyślnie wyświetlane są ustawienia zabezpieczeń zdefiniowane dla tej klasy. Następnie możliwe jest modyfikowanie ustawień zabezpieczeń dla szablonu wprowadzania.<br><br>Po wyświetleniu sekcji <b>Zabezpieczenia</b> użytkownicy, którzy mają odpowiednie uprawnienia, mogą modyfikować zabezpieczenia tego elementu.<br><br>Po wybraniu tej opcji i ustawieniu dziedziczenia ustawień bezpieczeństwa z folderu nadrzędnego wszelkie dziedziczone uprawnienia są dodawane do zdefiniowanych zabezpieczeń.",
		entry_template_security_default_item_security: "Nadpisz domyślne zabezpieczenia elementu użytkownika, który dodaje element",
		entry_template_security_policy_message_override: "Wybrana strategia bezpieczeństwa jest skonfigurowana tak, aby uprawnienia określone w sekcji Ustaw zabezpieczenia były nadpisywane.",
		entry_template_security_policy_message_add: "Wybrana strategia bezpieczeństwa jest skonfigurowana tak, aby uprawnienia określone w sekcji Ustaw zabezpieczenia były dodawane.",
		entry_template_security_policy_preserve_true_hover: "Zachowuje uprawnienia bezpośrednie",
		entry_template_security_policy_preserve_false_hover: "Nie zachowuje uprawnień bezpośrednich",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Określone role",
		entry_template_security_class_role_search_title: "Szukaj ról:",
		entry_template_secuirty_class_member_title: "Lista członków ${0}",
		entry_template_secuirty_class_folder_only: "Te uprawnienia mają zastosowanie tylko do tego folderu",
		entry_template_secuirty_class_folder_and_immediate_children: "Te uprawnienia mają zastosowanie do tego folderu oraz bezpośrednich folderów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.",
		entry_template_secuirty_class_folder_and_all_children: "Te uprawnienia mają zastosowanie do tego folderu oraz wszystkich folderów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Te uprawnienia mają zastosowanie do bezpośrednich folderów podrzędnych, które skonfigurowano tak, aby dziedziczyły zabezpieczenia tego folderu.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Te uprawnienia mają zastosowanie do wszystkich folderów podrzędnych, które skonfigurowano tak, aby dziedziczyły zabezpieczenia tego folderu.",

		entry_template_class_security_message_no_override: "Zabezpieczenia wybranej klasy uniemożliwiają użytkownikom nadpisywanie zabezpieczeń.",
		entry_template_class_security_required_privileges: "<b>Ważne</b>: Podczas nadpisywania zabezpieczeń wybranej klasy użytkownicy, którzy dodają elementy za pomocą szablonu, muszą mieć uprawnienia ItemSetACL i UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Przepływ pracy wzorca sekwencyjnego",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Przepływ pracy wzorca równoległego",
		entry_template_workflow_type_existing: "Niestandardowy przepływ pracy...",
		entry_template_workflow_launch_prompt: "Pytaj użytkowników, czy uruchomić przepływ pracy",
		entry_template_workflow_launch_auto: "Automatycznie uruchom przepływ pracy",
		entry_template_workflow_modify_launch: "Zezwól użytkownikom na modyfikowanie kroku uruchamiania",
		entry_template_workflow_modify_launch_hover: "Wybierz tę opcję, aby umożliwić użytkownikom zmianę sposobu uruchamiania przepływu pracy.",

		entry_template_optionsButton_title: "Modyfikuj",
		entry_template_optionsButton_readonly_title: "Wyświetl powiązanie",
		entry_template_optionsDialog_title: "Ustawienia powiązania folderu",
		entry_template_removeButton_title: "Usuń",
		entry_template_addButton_title: "Dodaj",
		entry_template_selected_entry_templates: "Wybrane szablony wprowadzania",
		entry_template_docs_added_to_template_destination: "Dokumenty są dodawane do miejsca docelowego określonego w szablonie wprowadzania.",
		entry_template_docs_added_to_other_object_store: "Ten szablon wprowadzania umożliwia dodanie elementów do składnicy obiektów ${0}.",
		entry_template_inherited_entry_templates_label: "Chcę: ",
		entry_template_inherited_entry_templates: "Dziedziczyć powiązania szablonu wprowadzania z folderu: ",
		entry_template_inherited_entry_templates_not: "Utworzyć nowe powiązania dla tego folderu",
		entry_template_inherited_folder_path: "Szablony na liście wybranych szablonów wprowadzania są powiązane z następującym folderem: ${0}. <br> Ścieżka do tego folderu jest następująca: ${1}.",
		entry_template_folder_associations_title: "Powiąż szablony wprowadzania",
		entry_template_folder_associations_intro: "W przypadku utworzenia powiązania szablonu wprowadzania z folderem w celu dodania elementów do tego folderu użytkownicy muszą użyć szablonu wprowadzania. Jeśli z folderem powiązanych jest wiele szablonów wprowadzania, użytkownicy mogą wybrać szablon, jakiego zamierzają użyć.",
		entry_tempalte_folder_associations_entrytemplate: "Szablon wprowadzania: ",
		entry_template_avaliable_entry_templates: "Dostępne szablony wprowadzania",
		entry_template_fileTypes_intro_title: "Dozwolone typy plików:",
		entry_template_fileTypes_intro: "Domyślnie szablon wprowadzania może być używany do dodawania do repozytorium dowolnego typu dokumentów. Jeśli jednak użytkownik wybierze co najmniej jeden typ pliku, szablony wprowadzania będą dostępne tylko podczas dodawania dokumentów, które odpowiadają jednemu z wybranych typów plików.",
		entry_template_fileTypes: "Typy plików",
		entry_template_fileType_error: "Dla co najmniej jednego powiązania szablonu wprowadzania wybrano niepoprawne typy plików. Aby zapisanie powiązań szablonu wprowadzania było możliwe, konieczne jest usunięcie niepoprawnych typów plików.",
		entry_template_fileTypes_any_type_of_file: " Dowolny typ pliku",
		entry_template_description_label: "Opis",
		entry_template_ItemInfoPrefix: "Powiąż z: ",
		entry_template_TargetObjectStoreName: "Docelowa składnica obiektów",
		entry_template_class: "Klasa",
		entry_template_current_folder_as_parent: "Użyj folderu jako miejsca docelowego",
		entry_template_view_minetypes: "Wyświetl typy MIME",
		entry_template_avaliable_MIME_types: "Dostępne typy plików",
		entry_template_selected_MIME_types: "Wybrane typy plików",
		entry_template_MIME_type_column: "Nazwa kategorii typu pliku",
		entry_template_file_type_not_existing: "Usuń niepoprawne typy plików",
		entry_template_MIME_types: "Typy MIME:",
		entry_template_MIME_types_info_dialog_title: "Typy MIME dla",
		entry_template_destination_label: "Dodaj dokumenty do: ",
		entry_template_destination_help: "Określ miejsce zapisywania dokumentów w repozytorium, jeśli dokumenty będą przez użytkowników dodawane do tego folderu za pomocą wybranego szablonu wprowadzania.",
		entry_template_radioButton_folder_destination: "Wybrany folder",
		entry_template_radioButton_template_destination: "Miejsce docelowe określone w szablonie wprowadzania",
		entry_tempalte_teamspace_default: "Domyślny szablon wprowadzania",
		entry_template_folder_associations_save_new: "Zmodyfikowano pewne powiązania szablonu wprowadzania. Czy chcesz zamknąć to okno bez zapisywania zmian?",
		entry_template_mode_binding_label: "Właściwości",
		entry_template_columns_className: "Nazwa klasy",
		entry_template_columns_type: "Typ szablonu",
		entry_template_columns_workflow: "Nazwa przepływu pracy",
		entry_template_columns_destination: "Miejsce docelowe",
		entry_template_association_less_than_record: "Szablony w liczbie ${0} nie znajdują się na liście Wybrane szablony wprowadzania. Nie masz uprawnień do wyświetlania ich lub zostały one usunięte. Skontaktuj się z administratorem systemu, aby uzyskać więcej informacji.",
		/* Request */

		progress_message_general: "Działanie...",
		cancel_message_general: "Działanie zostało anulowane.",
		ie8_not_supported_browser: "Przeglądarka IE8 nie jest obsługiwana.",
		progress_message_getDesktop: "Ładowanie pulpitu...",
		progress_message_getActions: "Ładowanie działań...",
		progress_message_getViewers: "Ładowanie pulpitu...",
		progress_message_logon: "Logowanie...",
		progress_message_logoff: "Wylogowywanie...",
		progress_message_getContentClasses: "Wczytywanie klas...",
		progress_message_openContentClass: "Wczytywanie szczegółów klas...",
		progress_message_od_getCabinets: "Wczytywanie szafek...",
		progress_message_getSearchTemplates: "Wczytywanie wyszukiwań...",
		progress_message_od_getTemplates: "Wczytywanie folderów...",
		progress_message_od_openCabinet: "Wczytywanie folderów...",
		progress_message_openSearchTemplate: "Otwieranie wyszukiwania...",
		progress_message_od_openTemplate: "Otwieranie folderu...",

		progress_message_getWorklists: "Wczytywanie list prac...",
		progress_message_getWorkItems: "Wczytywanie elementów pracy...",
		progress_message_getNextWorkItems: "Wczytywanie elementów pracy...",
		progress_message_getStepParameters: "Wczytywanie informacji o elemencie pracy...",
		progress_message_getStepAttachmentItems: "Wczytywanie informacji o załączniku...",
		progress_message_getDependentParameters: "Wczytywanie informacji o właściwościach...",

		progress_message_p8_getProcessApplicationSpaces: "Wczytywanie przestrzeni aplikacji...",
		progress_message_p8_getProcessRoles: "Wczytywanie ról procesów...",
		progress_message_p8_getProcessInbaskets: "Wczytywanie koszyków zadań...",
		progress_message_p8_getProcessorInformation: "Wczytywanie informacji o procesie...",
		progress_message_p8_getFilterCriteria: "Wczytywanie filtru koszyka zadań...",
		progress_message_p8_getLaunchParameters: "Wczytywanie informacji o elemencie pracy...",
		progress_message_p8_getStepAttachments: "Wczytywanie załączników elementu pracy...",
		progress_message_p8_getSubscriptions: "Wczytywanie subskrypcji przepływu pracy...",
		progress_message_p8_getTrackerParameters: "Wczytywanie informacji o elemencie pracy...",
		progress_message_p8_getTrackerHistory: "Wczytywanie historii elementu pracy...",
		progress_message_p8_getTrackerMilestones: "Wczytywanie kamieni milowych elementu pracy...",
		progress_message_p8_completeStep: "Kończenie elementu pracy...",
		progress_message_p8_moveToInbox: "Przesuwanie elementu do koszyka zadań...",
		progress_message_p8_returnToSender: "Zwracanie elementu pracy...",
		progress_message_p8_reassign: "Ponowne przypisywanie elementu pracy...",
		progress_message_p8_launchWorkflow: "Uruchamianie przepływu pracy...",
		progress_message_p8_getTransferedWorkflows: "Pobieranie informacji o przepływie pracy...",

		progress_message_cm_getProcesses: "Pobieranie informacji o przepływie pracy...",
		progress_message_cm_completeStep: "Kontynuowanie dla elementu pracy...",
		progress_message_cm_getItemProcessInformation: "Pobieranie informacji o przepływie pracy...",

		progress_message_search: "Wyszukiwanie...",
		cancel_message_search: "Wyszukiwanie zostało anulowane.",
		progress_message_getContentItems: "Wczytywanie informacji o elemencie...",
		progress_message_openFolder: "Otwieranie folderu...",
		progress_message_addItem: "Tworzenie elementu...",
		progress_message_checkIn: "Wprowadzanie/zwracanie elementu...",
		progress_message_changePassword: "Zmienianie hasła...",
		progress_message_getDefaultInstancePermissions: "Wczytywanie uprawnień domyślnych...",
		progress_message_openItem: "Wczytywanie informacji o elemencie...",
		progress_message_saveItem: "Zapisywanie informacji o elemencie...",
		progress_message_getPermissions: "Wczytywanie uprawnień...",
		progress_message_getEntryTemplates: "Wczytywanie szablonów wprowadzania...",
		progress_message_openEntryTemplate: "Otwieranie szablonu wprowadzania...",
		progress_message_getFavorites: "Wczytywanie ulubionych...",
		progress_message_getFoldersFiledIn: "Wczytywanie folderów...",
		progress_message_getDocumentVersions: "Wczytywanie wersji...",
		progress_message_getDependentAttributeInfo: "Wczytywanie informacji o atrybutach...",
		progress_message_packageForDownload: "Pakowanie do pobrania...",
		progress_message_convertDocument: "Przekształcanie treści...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Wczytywanie typu treści...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Dodawanie dokumentu...",

		progress_message_desktop_reload: "Klient ponownie ładuje pulpit.<br>Może pojawić się monit o ponowne zalogowanie.",
		progress_message_email: "Wysyłanie wiadomości e-mail...",
		cancel_message_email: "Anulowano wysyłanie wiadomości e-mail.",

		progress_message_p8_getOfficeOnlineTemplates: "Wczytywanie szablonów Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Drzewo Ulubione",
		favorites_content_list_label: "Lista treści Ulubione",
		syncItems_tree_label: "Drzewo moich zsynchronizowanych plików",
		syncItems_content_list_label: "Lista treści moich zsynchronizowanych plików",
		my_checkouts_content_list_label: "Lista treści Moje pobrania",
		browse_tree_label: "Przeglądaj drzewo",
		browse_content_list_label: "Przeglądaj listę treści",
		repository_selector_label: "Selektor repozytorium",
		teamspaces_content_list_label: "Lista treści obszaru zespołu",
		templates_content_list_label: "Lista treści szablonów",
		work_content_list_label: "Lista treści Praca",
		work_tree_label: "Drzewo Praca",
		admin_tree_label: "Drzewo Administracja",
		admin_tabs_label: "Karty Administracja",
		search_tabs_label: "Wyszukaj karty",
		search_selector_label: "Wyszukaj selektor",
		teamspace_browse_content_list_label: "Lista treści przeglądania obszaru zespołu",
		teamspace_search_tabs_label: "Karty Wyszukaj obszar zespołu",

		/* Desktop */
		undo_description: "Cofnij ${0}",
		redo_description: "Ponów ${0}",

		/* Application Tabs */
		home: "Katalog główny",
		repository: "Repozytorium",
		repository_type: "Typ repozytorium:",
		repository_type_header: "Typ repozytorium",
		repository_type_any: "Wszystkie repozytoria",
		repository_type_contains_label: "Typ repozytorium zawiera",
		document_info: "Informacje o dokumencie",
		team: "Zespół",
		administration: "Administracja",

		/* Home Page */
		recent_activity: "Niedawne działania",
		repos_and_wrksp: "Repozytoria i obszary zespołu",
		workspaces: "Obszary zespołu",
		repositories: "Repozytoria",
		templates: "Szablony",
		favorites: "Ulubione",
		my_checkouts: "Moje pobrania",
		mySyncedFiles: "Moje zsynchronizowane pliki",
		links: "Odsyłacze",
		name_label: "Nazwa",
		description_label: "Opis:",
		type_label: "Typ:",
		type_heading: "Typ",
		type_id_label: "Id. typu",
		server_type_icon: "Ikona typu serwera",
		server_type_heading: "Typ serwera",
		server_type: "Typ serwera",
		port_heading: "Numer portu",
		port_label: "Nr portu:",
		server_name_heading: "Nazwa serwera",
		server_label: "Nazwa serwera:",
		server_url_label: "Adres URL serwera:",
		id_label: "ID:",
		id_heading: "Identyfikator",
		connected_label: "Połączone:",
		repository_label: "Repozytorium",
		modified_label: "Zmodyfikowane przez:",
		modified_date_label: "Data modyfikacji:",
		status_label: "Status:",
		last_modified_label: "Ostatnio zmodyfikowane przez:",

		modifier: "Zmodyfikowane przez",
		modified_date: "Data modyfikacji",

		/* Favorites */
		new_favorite_label: "Dodaj do ulubionych",
		edit_favorite_label: "Zmień nazwę ulubionych",
		remove_favorite_label: "Usuń z ulubionych",
		missing_alias_message: "Należy określić nazwę.",
		sync_favorite_enable_hover: "Dla tego elementu aktywowano możliwość synchronizacji.",
		sync_favorite_disable_hover: "Ten element nie podlega synchronizacji.",
		sync_favorite_sync_unavailable_hover: "Dla tego typu obiektu synchronizacja nie jest dostępna.",
		sync_enable_label: "Przeprowadź synchronizację tego elementu",
		sync_enable_label_hover: "Ten element zostanie zsynchronizowany z urządzeniami.",
		delete_favorite_confirmation_question: "Czy chcesz usunąć ten element z ulubionych?",
		alias_label: "Nazwa:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "Wybrany element znajduje się już w ulubionych.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Tego elementu nie można dodać do listy ulubionych.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Można zapisać tylko ${0} ulubionych.",
		add_favorite_max_reached_response: "Aby dodać ten element do listy ulubionych, konieczne jest usunięcie istniejącej pozycji ulubionych, zanim będzie możliwe dodanie tej pozycji.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Wybranych dokumentów nie można przekształcić na PDF.",
		download_as_pdf_max_content_error_explanation: "Do formatu PDF można przekształcić tylko ${0} MB danych. Rozmiar wybranych dokumentów przekracza jednak ${0} MB.",
		download_as_pdf_max_content_error_response: "Należy wybrać mniejszą liczbę dokumentów lub wybrać mniejsze dokumenty, a następnie pobrać je ponownie jako pliki PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Wybranych dokumentów nie można przekształcić w jeden plik PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Aby można było przekształcić wieloczęściowy dokument w jeden plik PDF, wszystkie części muszą mieć identyczny typ MIME.",
		download_as_pdf_mimetype_check_error_response: "Wybierz inny dokument do przekształcenia do formatu PDF.",

		/* Activity Stream */
		show_label: "Pokaż:",
		all_filter: "Wszystkie",
		notifications_filter: "Powiadomienia",
		workitems_filter: "Elementy pracy",
		documentes_filter: "Dokumenty",
		all_favorites_filter: "Wszystkie ulubione",
		folders_filter: "Foldery",
		searches_filter: "Wyszukiwania",
		teamspaces_filter: "Obszary zespołu",

		/* Repository */
		all_search_templates: "Wszystkie wyszukiwania",
		all_od_searches: "Wszystkie szablony wyszukiwania",
		recent_searches: "Niedawne wyszukiwania",
		opened_searches: "Otwarte wyszukiwania",

		all_worklists: "Wszystkie skrzynki odbiorcze",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Lista wszystkich list prac",

		/* Teamspace */
		all_workspaces: "Wszystkie obszary zespołu",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Lista wszystkich obszarów zespołu",
		workspace_title: "Obszar zespołu",
		workspace_icon: "Ikona obszaru zespołu",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Dostępne",
		workspace_stat_offline: "Niedostępne",
		workspace_stat_validate: "Wymaga sprawdzenia poprawności",
		workspace_stat_pendingDelete: "Oczekiwanie na usunięcie",
		workspace_stat_deleteError: "Usuwanie nie powiodło się",

		undefined_value: "Niezdefiniowane",
		undefined_reference_value: "Nie zdefiniowano odwołania.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Na serwerze może być dostępna większa liczba wyników.",
		search_all_data: "Wyszukaj wszystkie dane.",
		search_all_teamspaces: "Wyszukaj we wszystkich obszarach zespołów.",
		teamspace_filter_results: "Wyświetlanie wyników w liczbie: ${0}. ",
		displaying_filtered_results: "Wyświetlanie odfiltrowanych wyników. ",
		displaying_recent_results: "Wyświetlanie tylko obszarów zespołu, które zostały zmodyfikowane w ciągu ostatnich ${0} dni. Aby wyszukać inne obszary zespołu, listę obszarów należy filtrować wg nazwy lub opisu. ",
		clear_filter: "Wyczyść filtr.",

		/* FolderTreeModel */
		move_item_task: "Przenieś element",
		copy_item_task: "Skopiuj element",
		add_item_task: "Dodaj element",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Nie można znaleźć następującego folderu: ${0}. Możliwe, że został on usunięty lub że folderu nie można otworzyć z tego widoku. Kliknij odsyłacz Więcej z widoku drzewa, aby przejść do folderu. Jeśli nie można wyświetlić folderu, odśwież widok listy zawartości.",
		more_paging_link: "więcej ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Status",
		status_dialog_cancel_label: "Anuluj",

		/* ErrorDialog */
		error_dialog_title: "Błąd",
		error_dialog_icon_tooltip: "Błąd",
		error_dialog_stack_trace_title: "Stos wywołań",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Potwierdzenie",

		close_browser_msg: "Zamknij okno przeglądarki.",

		/* MessageDialog */
		message_dialog_title: "Informacja",
		warning_dialog_title: "Ostrzeżenie",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Witamy w ${0}",
		server: "Repozytorium:",
		username: "Nazwa użytkownika:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Nazwa użytkownika jest wymagana w celu zalogowania się w repozytorium.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Hasło jest wymagane w celu zalogowania się w repozytorium.",
		password: "Hasło:",
		login: "Zaloguj się",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Sesja wygasła. Zaloguj się ponownie.",
		login_repository_connection_expired_message: "Połączenie z repozytorium ${0} wygasło. Zaloguj się ponownie.",
		login_site_connection_expired_message: "Połączenie z serwerem wygasło. Zaloguj się ponownie.",
		login_new_server_message: "Wprowadź nazwę użytkownika i hasło dla ${0}.",
		login_error_more_information_message: "Więcej informacji",

		disconnect_box_account_user: "Odłącz konto Box: ${0}",
		disconnect_box_account: "Odłącz konto Box",
		disconnect_box_accounts: "Odłącz konta Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "W celu uzyskania dostępu do repozytorium Box wymagane jest połączenie SSL.",
		login_oauth_popup_blocked: "Okno wyskakujące zostało zablokowane. Możliwe, że aby się zalogować, musisz wyłączyć blokowanie takich okien w przeglądarce.",
		login_oauth_click_here: "Jeśli przekierowanie nie nastąpi w ciągu 5 sekund, kliknij tutaj.",
		login_oauth_title: "Zaloguj się",
		login_oauth_grant_intro: "Uwierzytelnij ${0}.",
		login_pane_oauth_click_here: "Kliknij tutaj, aby się zalogować.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Czy chcesz się wylogować z klienta WWW?",
		logout_confirmation_button: "Wyloguj",

		/* ChangeLocaleDialog */
		change_locale: "Zmień język i ustawienia narodowe",
		change_locale_use_browser_language: "Użyj ustawienia języka przeglądarki (ustawienie domyślne)",
		change_locale_use_browser_locale: "Użyj ustawienia języka przeglądarki (ustawienie domyślne)",
		change_locale_description: "W przypadku usunięcia informacji cookie z przeglądarki konieczne jest zresetowanie języka i ustawień narodowych.",
		change_locale_language_locale: "Język aplikacji:",
		change_locale_language_locale_hover: "To ustawienie powoduje zmianę języka tekstu w kliencie WWW lecz nie zmienia języka dokumentów w aplikacji.<br><br>Domyślne ustawienie korzysta z języka określonego w opcjach konfiguracji przeglądarki WWW.",
		change_locale_value_format_locale: "Ustawienia narodowe aplikacji:",
		change_locale_value_format_locale_hover: "Ustawienia narodowe określają format dat, godzin i liczb w kliencie WWW.<br><br>Domyślne ustawienie korzysta z formatów powiązanych z językiem określonym w opcjach konfiguracji przeglądarki WWW.",
		change_locale_for_office: "Ustawienia tekstu dwukierunkowego:",
		change_locale_bidi_support_flag: "Włącz obsługę tekstu dwukierunkowego",
		change_locale_bidi_support_flag_hover: "Jeśli obsługa dwukierunkowa jest włączona, użytkownik może ustawić kierunek tekstu wpisywanego w polach wejściowych.  Tekst wprowadzany w elementach, takich jak na przykład foldery, będzie wyświetlany w takim samym kierunku, w jakim został wprowadzony.",
		change_locale_base_text_direction: "Podstawowy kierunek tekstu dla treści:",
		change_locale_base_text_direction_hover: "Ustawienie kierunku tekstu wpisywanego w polach wejściowych.  Możliwe jest również sterowanie kierunkiem wyświetlania w etykietach wprowadzonych przez użytkownika, takich jak nazwy folderów.",
		change_locale_calendar_type: "Typ kalendarza:",
		change_locale_calendar_type_hover: "Wybierz typ kalendarza, jaki będzie stosowany dla sesji użytkownika.",
		change_locale_base_text_direction_default: "Domyślnie",
		change_locale_base_text_direction_ltr: "Od lewej do prawej",
		change_locale_base_text_direction_rtl: "Od prawej do lewej",
		change_locale_base_text_direction_contextual: "Kontekstowo",
		change_locale_calendar_type_gregorian: "Gregoriański",
		change_locale_calendar_type_hijri: "Muzułmański",
		change_locale_calendar_type_hebrew: "Hebrajski",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Zmień hasło",
		change_password_title: "Zmień hasło",
		change_password_expired_title: "Hasło utraciło ważność",
		change_password_message: "Wprowadź nowe hasło.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Hasło utraciło ważność. Wprowadź nowe hasło.",
		change_password_password_rules: "Reguły dot. hasła",
		change_password_old_password: "Stare hasło:",
		change_password_new_password: "Nowe hasło:",
		change_password_confirm_password: "Potwierdź hasło:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Należy wprowadzić stare hasło.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Należy wprowadzić nowe hasło.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Należy potwierdzić nowe hasło.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Hasła muszą być zgodne.",

		/* GlobalToolbar */
		actions: "Działania",
		actions_label: "Działania:",
		open_actions_label: "Otwarte działania:",

		/* About Dialog */
		about_dialog_title: "Informacje",
		about_product_name_label: "Nazwa produktu: ",
		about_product_version_label: "Wersja: ",
		about_product_build_label: "Kompilacja: ",
		about_product_license: "Licensed Materials - Property of IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Wszelkie prawa zastrzeżone. Użytkowników z instytucji rządowych USA obowiązują warunki umowy GSA ADP Schedule Contract z IBM Corporation. IBM i logo IBM są zastrzeżonymi znakami towarowymi firmy International Business Machine Corporation w Stanach Zjednoczonych i w innych krajach. Program ten jest licencjonowany na warunkach umowy licencyjnej dołączonej do Programu. Taka umowa licencyjna może znajdować się w katalogu Programu lub w bibliotece, w pliku \"License\" lub \"Non_IBM_License\", bądź też może zostać udostępniona w formie wydruku. Przed rozpoczęciem korzystania z Programu należy uważnie zapoznać się z treścią takiej umowy. Korzystanie z Programu oznacza zgodę Użytkownika na warunki zawarte w umowie. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Czy chcesz usunąć wybrany element?",
		delete_single_folder_confirmation_question: "Czy chcesz usunąć folder ${0}?",
		delete_multiple_confirmation_question: "Czy chcesz usunąć wybrane elementy?<br>Wybrana ilość elementów: ${0}.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Usuń",
		search_template_delete_confirmation_question: "Czy chcesz usunąć wyszukiwanie ${0}?",
		search_template_opened_delete_confirmation_question: "Wyszukiwanie ${0} jest otwarte. Jeśli usuniesz wyszukiwanie, zostanie ono zamknięte.<br>Czy chcesz usunąć to wyszukiwanie?",
		delete_multiple_opened_search_template_confirmation_question: "Otwarte są następujące wyszukiwania: ${0}.<br>Usunięcie wyszukiwań spowoduje ich zamknięcie. Czy chcesz usunąć te wyszukiwania?",
		delete_large_number_items_confirmation_question: "Wybrano ${0} elementów do usunięcia.<br/>Usuwanie dużej liczby elementów może być czasochłonne.<br/>Czy chcesz kontynuować?",
		delete_confirmation_entrytemplate: "Usunięcie tego szablonu wprowadzania będzie miało następujący wpływ na dokumenty lub foldery powiązane z szablonem wprowadzania:<ul><li>Elementy te nie będą już powiązane z szablonem wprowadzania, a użytkownicy będą mogli zobaczyć ostrzeżenie w chwili próby aktualizacji elementu.</li><li>Wszelkie właściwości, które wcześniej kontrolowano za pośrednictwem szablonu wprowadzania, takie jak nazwa czy kolejność właściwości, nie będą już mieć zastosowania do pozycji powiązanych z tym szablonem wprowadzania.</li></ul>Czy chcesz usunąć ten szablon wprowadzania?",
		delete_confirmation_entrytempalte_with_multi_items: "Szablony wprowadzania wymagają usunięcia indywidualnie. Szablony wprowadzania zostały usunięte z listy elementów do usunięcia. Aby usunąć szablony wprowadzania, musisz usunąć każdy z szablonów wprowadzania z osobna.",

		/* Create/Apply/Remove Hold */
		hold: "Blokada",
		createHold: "Nowa blokada",
		applyHold: "Zastosuj blokadę",
		removeHold: "Usuń blokadę",
		showHolds_title: "Pokaż blokady",
		applyHoldSelectText: "Wybierz blokady, które zamierzasz zastosować względem wybranych elementów.",
		availableHolds: "Dostępne blokady:",
		removeHoldSelectText: "Wybierz blokady, które zamierzasz usunąć z wybranych elementów.",
		appliedHolds: "Zastosowane blokady:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Utwórz nową blokadę, która zostanie zastosowana względem wybranych elementów.",
		holdName: "Nazwa blokady:",
		holdDescription: "Opis:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Należy określić nazwę dla blokady.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Określona nazwa blokady już istnieje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Nazwa blokady nie może zawierać żadnego z następujących znaków : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Sesja wygaśnie za ${0} min.",
		session_expire: "Wygasanie sesji",
		logoff: "Wyloguj",
		extend_session: "Wydłuż sesję",
		admin_custom_settings: "Dodatkowe ustawienia:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning to wartość logiczna określająca, czy ostrzeganie o wygaśnięciu sesji jest włączone. Wartość domyślna to true. sessionExpireWarningTime jest liczbą całkowitą z przedziału od 2 do 5, która określa czas pojawienia się ostrzeżenie o wygaśnięciu sesji.",
		admin_custom_setting_dialog_title_new: "Nowe ustawienie",
		admin_custom_setting_dialog_title_edit: "Edytuj ustawienie",
		admin_custom_setting_dialog_hover_help: "Możliwe jest dodanie innych parametrów przez określenie nazwy i wartości parametru. Na przykład można określić „enableSessionExpireWarning” i „true”, aby włączyć ostrzeganie o wygaśnięciu sesji.",
		admin_custom_setting_dialog_field_hover_help: "Więcej informacji na temat nazw i wartości parametrów zawiera podręcznik IBM Navigator Parameter Reference Manual.",
		admin_custom_setting_dialog_nameInvalid: "Ta wartość jest wymagana. Wartość nie może zawierać odstępów i nie może być duplikatem.",
		admin_custom_setting_dialog_bool_valueInvalid: "Ta wartość jest wymagana. Wymagana jest wartość logiczna.",
		admin_custom_setting_dialog_int_valueInvalid: "Ta wartość jest wymagana. Wymagana jest liczba całkowita.",
		/* Add Document Dialog */
		add_document_dialog_title: "Dodaj dokument",
		add_documents_dialog_title: "Dodaj dokumenty",
		add_document_general_label: "Ogólne",
		add_document_properties_label: "Właściwości",
		add_document_properties_with_ellipsis_label: "Właściwości...",
		add_document_security_label: "Zabezpieczenia",
		add_document_location_label: "Zapisz w:",
		add_document_type_label: "Co chcesz zapisać?",
		add_document_localfile_label: "Dokument lokalny",
		add_document_metadata_label: "Informacje o dokumencie",
		add_document_external_label: "Odsyłacz do dokumentu zewnętrznego",
		add_document_web_link_label: "Odsyłacz WWW",
		add_document_saved_content_label: "Użyj zapisanego pliku:",
		add_document_saved_content_choice: "Zapisany plik",
		add_document_file_name_label: "Nazwa pliku:",
		add_document_entry_template_label: "Szablon wprowadzania:",
		add_document_delete_file_label: "Usuń plik lokalny",
		add_document_delete_file_disabled_label: "Pliki, które nie znajdują się w katalogu śledzenia pliku, nie zostaną usunięte.",
		add_document_major_version_label: "Wersja główna",
		add_document_major_version_hover: "Ustawia dla dokumentu status Wydane. Dokument jest dodawany do repozytorium jako wersja 1.0. Jeśli opcja nie jest wybrana, wówczas dokument nie jest gotowy do wydania i zostanie dodany jako wersja podrzędna 0.1.",
		add_document_save_document_as_unfiled_label: "Nie zapisuj dokumentu w folderze",
		add_document_save_document_as_unfiled_hover: "Jeśli ta opcja zostanie wybrana, wówczas dokument można będzie znaleźć tylko poprzez wyszukiwanie. Nie będzie można do niego dotrzeć poprzez przeszukiwanie.",
		add_document_create_new_version_label: "Utwórz nową wersję",
		add_document_replace_existing_version_label: "Zastąp istniejącą wersję",
		add_document_start_workflow_label: "Uruchom przepływ pracy",
		add_document_auto_classify_label: "Automatycznie klasyfikuj treść",
		add_document_add_label: "Dodaj",
		add_document_cancel_label: "Anuluj",
		add_document_document_type_label: "Klasa",
		add_document_context_info: "Wartości wprowadzone dla właściwości dokumentu można wykorzystać później w celu znalezienia dokumentu.",
		add_documents_context_info: "Wartości wprowadzone dla dokumentów można wykorzystać później w celu znalezienia dokumentu. Aby wprowadzić inną wartość właściwości dla dokumentu, należy dodać ją osobno lub dokonać edycji właściwości dokumentu po jego dodaniu.",
		add_document_url_label: "URL:",
		add_document_template_description: "Opis szablonu:",
		add_document_select_entry_template: "Wprowadź lub wybierz szablon wprowadzania",
		add_document_no_permission_to_associations: "Nie masz uprawnień do używania szablonu wprowadzania",
		add_document_no_entry_template_to_use: "Dla wybranych plików nie można użyć żadnego szablonu wprowadzania",
		add_document_no_entry_template_itemtype_permission: "Nie możesz dodać elementów do tego folderu. Szablon wprowadzania wymaga wybrania, lecz nie masz dostępu do żadnego z szablonów wprowadzania powiązanych z tym folderem. Skontaktuj się z administratorem systemu i poproś o nadanie dostępu do szablonów wprowadzania powiązanych z tym folderem.",
		add_document_appgroup_name_label: "Nazwa grupy aplikacji:",
		add_document_app_name_label: "Nazwa aplikacji:",
		create_folder_dialog_title: "Nowy folder",
		create_folder_context_info: "Wartości wprowadzone dla właściwości folderu można wykorzystać później w celu znalezienia folderu.",
		create_folder_folder_name_label: "Nazwa folderu",
		create_folder_save_folder_as_unfiled_label: "Nie zapisuj folderu w innym folderze",
		create_folder_save_folder_as_unfiled_hover: "Jeśli ta opcja zostanie wybrana, wówczas folder można będzie znaleźć tylko poprzez wyszukiwanie. Nie będzie można do niego dotrzeć poprzez przeszukiwanie.",
		add_item_create_in_folder: "Utwórz w folderze:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Nazwa folderu nie może zawierać żadnego z następujących znaków: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Nazwa folderu nie może zawierać żadnego z następujących znaków \\ / ani nie może być równa . ani ..",
		invalid_box_file_name_message: "Nazwa pliku nie może zawierać żadnego z następujących znaków \\ / ani nie może być równa . ani ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Nazwa pliku nie może zawierać żadnego z następujących znaków: \\ / : * ? \" < > |",
		external_document_placeholder: "Wprowadź URL dokumentu",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "Kolor należy wprowadzić jako 3- lub 6-cyfrową liczbę szesnastkową, np. #000 lub #000000.",
		add_document_unfiled: "Usunięte z folderu: ${0}",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Dodaj dokument za pomocą szablonu wprowadzania",
		add_document_using_template_context_info: "Jeśli dokument jest dodawany za pomocą szablonu wprowadzania, wówczas wartości wprowadzane dla dokumentu są spójne.",
		add_documents_using_template_dialog_title: "Dodaj dokumenty za pomocą szablonu wprowadzania",
		add_documents_document_name_is_file_name_hint: "Dla tej właściwości zostanie użyta nazwa pliku",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nowy folder za pomocą szablonu wprowadzania",
		create_folder_using_template_context_info: "Jeśli folder jest tworzony za pomocą szablonu wprowadzania, wówczas wartości wprowadzane dla folderu są spójne.",

		add_documents_batch_results_dialog_title: "Dokumenty nie zostały dodane do repozytorium",
		add_documents_batch_results_dialog_context_info: "Następujące dokumenty nie zostały dodane do repozytorium. Wybierz dokument i kliknij opcję Szczegóły, aby wyświetlić więcej informacji na temat tego, dlaczego dokument nie został dodany do repozytorium.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nazwa pliku",
		add_documents_batch_results_dialog_status_col_hdr: "Status",
		add_documents_batch_results_dialog_message_col_hdr: "Komunikat",
		add_documents_batch_results_status_error: "Błąd",
		add_documents_batch_results_status_cancelled: "Anulowane",
		add_documents_batch_results_status_cancelled_msg: "Dokument nie został dodany, ponieważ żądanie zostało anulowane.",

		add_documents_batch_status_title: "Dodawanie dokumentów",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Dodawanie pliku ${0} z ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Błędy: ${0}",
		add_documents_batch_status_completing_msg: "Proces zostanie zatrzymany po dodaniu tego dokumentu.",

		add_documents_status_uploading_msg: "Wysyłanie pliku ${0} z ${1}...",
		add_documents_status_adding_msg: "Dodawanie pliku ${0} z ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Szablon wprowadzania został skonfigurowany w innej aplikacji i jest skonfigurowany w taki sposób, że zawsze deklaruje dokumenty jako akta. Jednak to ustawienie jest ignorowane, ponieważ klient WWW nie obsługuje deklarowania dokumentów jako akt.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Konfiguracja szablonu wprowadzania została dokonana w innej aplikacji i umożliwia podjęcie decyzji na temat tego, czy ten dokument zostanie zadeklarowany jako akta. Jednak to ustawienie jest ignorowane, ponieważ klient WWW nie obsługuje deklarowania dokumentów jako akt.",
		no_selection: "&lt;Wybierz&gt;",

		batch_results_dialog_details_label: "Szczegóły",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "Ta wartość jest niepoprawna. Ta wartość musi być identyfikatorem GUID, na przykład {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "Ta wartość jest niepoprawna. Wartość musi być liczbą zmiennopozycyjną, na przykład 1,2 lub 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "Ta wartość jest niepoprawna. Wartość musi mieć format ${0}, na przykład ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "Ta wartość jest niepoprawna. Wartość musi być wartością dziesiętną, na przykład 1,2 lub 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "Ta wartość jest niepoprawna. Wartość musi być liczbą całkowitą, na przykład 5 lub 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "Ta wartość jest niepoprawna. Wartość może zawierać tylko znaki alfabetu, np. a-z i A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "Ta wartość jest niepoprawna. Wartość może zawierać tylko znaki alfanumeryczne, np. a-z, A-Z i 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "Ta wartość jest niepoprawna. Wartość może zawierać tylko cyfry, np. 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "Ta wartość jest niepoprawna. Wartość może zawierać tylko następujące znaki: a-z, A-Z, 0-9, [spacja], oraz `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "Ta wartość jest niepoprawna. Wartość musi być datą w następującym formacie: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "Ta wartość jest niepoprawna. Wartość musi być godziną w następującym formacie: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "Ta wartość jest niepoprawna. Wybierz wartość z menu rozwijanego.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "Ta wartość jest niepoprawna.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "Ta wartość jest niepoprawna. Wartość musi mieć następujący format: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Ta wartość jest wymagana.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "Wartość jest zbyt długa. Maksymalna długość obsługiwana przez właściwość to ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "Wartość jest zbyt krótka. Właściwość obsługuje minimalną długość, która wynosi ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "Podana wartość jest spoza zakresu. Wartość musi być liczbą zmiennopozycyjną z zakresu od ${0} do ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "Podana wartość jest spoza zakresu. Wartość musi być liczbą dziesiętną z zakresu od ${0} do ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "Podana wartość jest spoza zakresu. Wartość musi być liczbą całkowitą z zakresu od ${0} do ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Wartość musi być datą z zakresu od ${0} do ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "Podana wartość jest spoza zakresu. Wartość musi być datą z zakresu od ${0} do ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "Podana wartość jest spoza zakresu. Wartość musi być czasem z zakresu od ${0} do ${1}.",
		property_and: "i",

		property_invalidValueOrRequired: "Następująca wartość jest niepoprawna lub jest wymagana: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Właściwości",
		edit_properties_dialog_info: "Istnieje możliwość wyświetlania oraz edycji właściwości tego elementu. Jeśli posiadasz odpowiednie uprawnienia, wówczas możesz również zmodyfikować zabezpieczenia tego elementu. Jednak nie możesz zmienić właściwości systemowych.",
		edit_properties_od_dialog_info: "Istnieje możliwość wyświetlania oraz edycji właściwości tego elementu. Jednak nie ma możliwości zmiany właściwości systemowych.",
		system_properties_title: "Właściwości systemowe",
		custom_properties_title: "Właściwości",
		/* Folder collaboration tab */
		box_permission_permission: "Uprawnienie",
		box_permission_permissions: "Uprawnienia",
		box_permission_editor: "Edytor",
		box_permission_owner: "Właściciel",
		box_permission_co_owner: "Współwłaściciel",
		box_permission_viewer_uploader: "Przeglądanie i wysyłanie",
		box_permission_previewer_uploader: "Podgląd i wysyłanie",
		box_permission_viewer: "Przeglądanie",
		box_permission_previewer: "Podgląd",
		box_permission_uploader: "Wysyłanie",
		box_permission_add: "Dodaj",
		box_permission_upload: "Przesyłanie",
		box_permission_download: "Pobieranie",
		box_permission_preview: "Podgląd",
		box_permission_view: "Wyświetlanie",
		box_permission_send_links: "Wysyłanie odsyłaczy tylko do wyświetlania",
		box_permission_create_subfolders: "Tworzenie podfolderów",
		box_permission_create_tasks: "Tworzenie zadań",
		box_permission_add_comments: "Dodawanie komentarzy",
		box_collaboration_invite_placeholder: "Wprowadź nazwę, adres e-mail lub grupę do zaproszenia",
		box_collaboration_invite_placeholder_non_admin: "Wprowadź adres e-mail dla zaproszenia",
		box_collaboration_invalid_email: "Wprowadź poprawny adres e-mail",
		box_collaboration_user_already_present: "Ten użytkownik jest już współpracownikiem korzystającym z tego folderu",
		box_collaboration_user_name: "Nazwa",
		box_collaboration_email_address: "Adres e-mail",
		box_collaboration_date_added: "Data dodania",
		box_collaboration_remove_collaboration: "Usuń",
		box_collaboration_remove_collaboration_title: "Usuń",
		box_collaboration_no_collaborators: "Brak współpracowników",
		box_collaboration_change_owner_title: "Zmień właściciela pozycji",
		box_collaboration_change_owner_prompt: "Ustawienie tego współpracownika jako właściciela folderu spowoduje, że staniesz się edytorem i nie będziesz już właścicielem folderu. Współpracownicy, którzy zostali dodani bezpośrednio do tego folderu, będą go wdzieli na liście folderów głównych. Współpracownicy, którzy zostali dodani na poziomie folderu głównego lub wyższym, nie będą już współpracownikami. Czy chcesz kontynuować?",
		box_collaboration_remove_self_title: "Usuń siebie",
		box_collaboration_remove_self_prompt: "Czy na pewno chcesz usunąć siebie jako współpracownika? Nie będziesz już mieć dostępu do tego folderu.",
		box_collaboration_user: "Użytkownik",
		box_collaboration_group: "Grupa",
		box_managing_users_not_configured: "Nie możesz szukać użytkowników i grup, ponieważ aplikacja Box nie jest prawidłowo skonfigurowana. Aby korzystać z tej funkcji, zwróć się do administratora, aby skonfigurował aplikację Box w sposób umożliwiający zarządzanie użytkownikami i grupami.",
		duplicate_value_error: "Każda wartość w tej właściwości musi być unikalna.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Wszelkie zmiany wprowadzane w poniższych polach mają zastosowanie do wszystkich wybranych elementów. Jeśli niezbędne jest wprowadzenie innej wartości właściwości dla określonego elementu lub edycja zabezpieczenia dla elementu, konieczne jest dokonanie edycji właściwości każdego z elementów z osobna.",
		multi_edit_properties_class_label: "Klasa:",
		multi_edit_properties_items_label: "Nazwy elementów:",
		multi_edit_properties_properties_label: "Właściwości:",
		multi_edit_batch_status_title: "Aktualizowanie właściwości",
		multi_edit_batch_status_adding_msg: "Aktualizacja elementu ${0} z ${1}...",
		multi_edit_batch_status_verifying_msg: "Sprawdzanie poprawności elementu ${0} z ${1}...",
		multi_edit_batch_status_completing_msg: "Proces zostanie zatrzymany po zaktualizowaniu tego elementu.",
		multi_edit_batch_status_validation_completing_msg: "Proces zostanie zatrzymany po sprawdzeniu poprawności tego elementu.",
		multi_edit_batch_results_status_error: "Błąd",
		multi_edit_batch_results_status_cancelled: "Anulowane",
		multi_edit_batch_results_status_cancelled_msg: "Element nie został zaktualizowany, ponieważ żądanie zostało anulowane.",
		multi_edit_batch_results_dialog_title: "Elementy nieuwzględnione",
		multi_edit_batch_results_dialog_context_info: "Następujące elementy nie zostały zaktualizowane. Wybierz nazwę elementu i kliknij opcję Szczegóły, aby wyświetlić więcej informacji na temat tego, dlaczego dokument nie został zaktualizowany.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nazwa elementu",
		multi_edit_batch_results_dialog_status_col_hdr: "Status",
		multi_edit_batch_results_dialog_message_col_hdr: "Komunikat",
		multi_edit_batch_status_errors_msg: "Błędy: ${0}",
		multi_edit_batch_permission_error_text: "Nie można zapisać zaktualizowanych właściwości.",
		multi_edit_invalid_value_error: "Ta wartość jest zależna od wartości innej właściwości i nie jest poprawna dla wszystkich wybranych elementów.",
		multi_edit_batch_permission_error_explanation: "Nie możesz modyfikować właściwości tego elementu, ponieważ nie masz wystarczających uprawnień.",
		multi_edit_no_modifiable_properties: "Nie można zmodyfikować właściwości wybranych elementów. Sytuacja taka może wystąpić, gdy element zawiera właściwości tylko do odczytu lub gdy tylko nazwa lub tytuł elementu podlega edycji. Gdy zaznaczony jest więcej niż jeden element, nie można modyfikować nazw ani tytułów elementów.",
		multi_edit_mult_classes_dialog_info: "Wybrane elementy znajdują się w różnych repozytoriach lub należą do różnych klas. Możesz edytować tylko elementy należące do tej samej klasy lub tego samego repozytorium. Wybierz podzbiór elementów, które zamierzasz edytować.",
		multi_edit_class_selector_class_heading: "Klasa",
		multi_edit_class_selector_entry_template_heading: "Szablon wprowadzania",
		multi_edit_class_selector_repository_heading: "Repozytorium",
		multi_edit_class_selector_items_heading: "Elementy",
		multi_edit_some_classes_not_displayed: "Niektóre z wybranych elementów nie są uwzględniane na liście elementów, ponieważ elementy te zawierają właściwości tylko do odczytu lub ponieważ elementy te należą do repozytoriów nieobsługujących właściwości edycji.",
		multi_edit_properties_invalid_msg: "Niektóre z wartości właściwości są niepoprawne dla wszystkich wybranych elementów.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Ta właściwość ma atrybut tylko do odczytu i nie można jej zmodyfikować.",
		multi_edit_append_checkbox_label: "Dołącz",
		multi_edit_append_checkbox_tooltip: "Wybierz tę opcję, aby dołączyć nowe wartości właściwości do istniejących wartości, bez zastępowania ich.",
		multi_edit_properties_invalid_childcomponent_msg: "Niektóre wartości we właściwości ${0} składnika podrzędnego ${1} zależą od innych właściwości i przestają mieć zastosowanie po wybraniu przez użytkownika określonych opcji. Wyczyść wartości składnika podrzędnego ${1} lub dokonaj zmian we właściwościach poszczególnych elementów.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Eksportuj właściwości",
		export_properties_dialog_info: "Wybierz właściwości, jakie chcesz wyeksportować i określ kolejność, w jakiej będą wyświetlane.",
		export_properties_dialog_export_button_label: "Eksportuj",
		export_properties_dialog_export_raw_values: "Eksportuj wartości nieprzetworzone",

		/* Properties */
		filter_clear_tooltip: "Wyczyść filtr",
		properties_new_row: "Nowy",
		properties_requiredClass_document_tooltip: "Wybierz dokument. Dokument musi należeć do klasy ${0}.",
		properties_requiredClass_folder_tooltip: "Wybierz folder. Folder musi należeć do klasy ${0}.",
		properties_dataType_tooltip: "Typ danych: ${0}",
		properties_maxLength_tooltip: "Maksymalna długość: ",
		properties_minLength_tooltip: "Minimalna długość: ",
		properties_minValue_tooltip: "Minimalna wartość: ",
		properties_maxValue_tooltip: "Maksymalna wartość: ",
		properties_format_tooltip: "Format: ",
		properties_description_tooltip: "Opis: ",

		properties_type_boolean_tooltip: "Wartość logiczna",
		properties_type_date_tooltip: "Data",
		properties_type_time_tooltip: "Godzina",
		properties_type_timestamp_tooltip: "Znacznik czasu",
		properties_type_decimal_tooltip: "Wartość dziesiętna",
		properties_type_double_tooltip: "Liczba zmiennopozycyjna",
		properties_type_short_tooltip: "Liczba całkowita",
		properties_type_integer_tooltip: "Liczba całkowita",
		properties_type_long_tooltip: "Liczba całkowita",
		properties_type_string_tooltip: "Łańcuch tekstowy",
		properties_type_string_alpha_tooltip: "Łańcuch alfabetyczny",
		properties_type_string_alphanum_tooltip: "Łańcuch alfanumeryczny",
		properties_type_string_ext_tooltip: "Rozszerzony łańcuch alfanumeryczny",
		properties_type_string_num_tooltip: "Łańcuch liczbowy",
		properties_type_binary_tooltip: "Binarne",
		properties_type_object_tooltip: "Obiekt",
		properties_type_reference_tooltip: "Ta właściwość odwołuje się do innego elementu w repozytorium.",
		properties_type_guid_tooltip: "Identyfikator unikalny globalnie",
		properties_type_group_tooltip: "Użytkownicy i grupy",
		properties_type_user_tooltip: "Użytkownicy",
		properties_type_childComponent_tooltip: "Komponent podrzędny",

		properties_childComponent_minCardinalityOnly_tooltip: "Ta właściwość musi zawierać co najmniej ${0} wartości.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Ta właściwość może zawierać nie więcej niż ${0} wartości.",
		properties_childComponent_minMaxCardinality_tooltip: "Ta właściwość musi zawierać co najmniej ${0} wartości i nie więcej niż ${1} wartości.",
		properties_childComponent_noCardinality_tooltip: "Ta właściwość może zawierać dowolną liczbę wartości.",

		properties_type_guid_example_tooltip: ", na przykład {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Wybierz wartość z listy.",
		properties_single_select_choice_tooltip: "Wybierz wartość.",
		properties_multiple_select_typein_tooltip: "Wprowadź jedną lub więcej wartości.",
		properties_multiple_select_choice_tooltip: "Wybierz jedną lub więcej wartości.",
		properties_not_selectable_tooltip: "Nie można wybrać kategorii.",
		properties_none: "Brak",
		properties_none_tooltip: "Wybierz opcję <i>Brak</i>, aby usunąć aktualną wartość dla tej właściwości.",
		properties_value_empty: "Brak wartości",
		properties_value_read_only: "Tylko do odczytu",
		properties_clear_label: "Wyczyść",
		properties_clear_tooltip: "Skasowanie wartości w tym polu powoduje skasowanie wartości w repozytorium po kliknięciu opcji <b>Zapisz</b>.",
		properties_box_custom_properties: "Właściwości definiowane",
		properties_box_metadata_name_in_use: "Ta nazwa jest już używana. Wprowadź inną nazwę właściwości niestandardowej.",

		properties_templates: "Szablony",
		properties_add_template: "Dodaj szablon",
		properties_remove_template: "Usuń",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Wprowadź/zwróć",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Wprowadź/zwróć",
		checkin_cancel_label: "Anuluj",
		checkin_file_name_label: "Nazwa pliku",
		checkin_document_status_title: "Wprowadź/zwróć dokument",
		checkin_document_status_uploading_msg: "Wysyłanie pliku...",
		checkin_document_status_checkingin_msg: "Wprowadzanie/zwracanie pliku...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Wybierz tryb utajnienia",
		viewer_redaction_new_document_confirmation_question: "Czy chcesz zapisać utajnioną treść jako nowy dokument czy plik lokalny?",
		viewer_redaction_new_version_confirmation_question: "Czy chcesz zapisać utajnioną treść jako nową wersję?",
		viewer_redaction_new_version_confirmation_question_never: "Czy chcesz zapisać utajnioną treść jako nową treść?",		
		viewer_redaction_new_document_button: "Tak",
		viewer_redaction_new_document_cancel_button: "Nie",
		viewer_redaction_add_document_confirmation_question: "Czy chcesz zapisać utajnioną treść jako nowy dokument, nową wersję, czy plik lokalny?",
		viewer_redaction_add_document_confirmation_question_version_never: "Czy chcesz zapisać utajnioną treść jako nowy dokument, nową treść, czy plik lokalny?",
		viewer_redaction_add_document_button: "Nowy dokument",
		viewer_redaction_add_new_version_button: "Nowa wersja",
		viewer_redaction_add_new_version_button_version_never: "Nowa treść",
		viewer_redaction_add_local_file_button: "Plik lokalny",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Wybierz przyczynę utajnienia.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Nie można znaleźć szablonu wprowadzania, jaki został użyty w celu dodania tego dokumentu do repozytorium. Dokument zostanie wprowadzony do repozytorium bez zastosowania szablonu wprowadzania.",
		property_entry_template_not_retrieved_warning: "Nie można znaleźć szablonu wprowadzania, jaki został użyty w celu dodania tego dokumentu do repozytorium. Właściwości dokumentu zostaną wyświetlone bez zastosowania szablonu wprowadzania.",
		multi_edit_entry_template_not_found_name: "[Nie znaleziono]",
		multi_edit_entry_template_not_retrieved_warning: "Nie można znaleźć szablonu wprowadzania, który został użyty w celu dodania tych elementów do repozytorium. Właściwości elementu zostaną zmodyfikowane bez zastosowania szablonu wprowadzania.",
		checkin_major_version_hover: "Zwiększa numer wersji dokumentu o jeden i ustawia dla dokumentu status Wydane. Jeśli ta opcja nie jest wybrana, wówczas oznacza to, że dokument nie jest jeszcze gotowy do wydania i został wprowadzony/zwrócony jako wersja podrzędna.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Dokumentu nie można zwrócić, ponieważ nie jest on pobrany.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "Identyfikator lub hasło użytkownika jest niepoprawne dla serwera.",
		error_bad_userid_password_userResponse: "Upewnij się, że identyfikator i hasło użytkownika zostały wprowadzone poprawnie.",
		error_bad_userid_password_adminResponse: "Zwrócony został następujący błąd: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "komunikat_o_błędzie",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Nie można nawiązać połączenia z klientem WWW za pomocą adresu URL: ${0}.",
		http_send_error_explanation: "Przyczyną tego błędu może być problem z konfiguracją na serwerze aplikacji WWW lub problem z aplikacją klienta WWW.",
		http_send_error_userResponse: "Spróbuj zalogować się ponownie. Jeśli problem nie ustąpi, zgłoś go administratorowi systemu.",
		http_send_error_adminResponse: "Zwrócony został następujący błąd HTTP: ${1}.",
		http_send_error_0: "URL_klienta_WWW",
		http_send_error_1: "błąd_HTTP",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Nie można nawiązać połączenia z klientem WWW za pomocą adresu URL: ${0}.",
		http_error_explanation: "Możliwe, że konieczne będzie uwierzytelnienie na firewallu lub serwer aplikacji WWW nie działa albo nie można uzyskać do niego dostępu z powodu problemów z siecią.",
		http_error_userResponse: "Jeśli konieczne jest uwierzytelnienie w zaporze, dokonaj uwierzytelnienia i spróbuj zalogować się ponownie. Jeśli problem nie ustąpi, zgłoś go administratorowi systemu.",
		http_error_adminResponse: "Zwrócony został następujący błąd HTTP: ${1}.",
		http_error_0: "URL_klienta_WWW",
		http_error_1: "błąd_HTTP",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Nie można nawiązać połączenia z klientem WWW za pomocą adresu URL: ${0}.",
		http_response_bad_explanation: "Przyczyną tego błędu może być problem z konfiguracją na serwerze aplikacji WWW lub problem z klientem WWW.",
		http_response_bad_userResponse: "Spróbuj zalogować się ponownie. Jeśli problem nie ustąpi, zgłoś go administratorowi systemu.",
		http_response_bad_adminResponse: "Zwrócony został następujący błąd: ${1}.",
		http_response_bad_0: "URL_klienta_WWW",
		http_response_bad_1: "błąd_HTTP",
		http_response_bad_number: 2002,

		unititled_document_name: "Bez tytułu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "Nie można uruchomić apletu e-mail.",
		email_applet_init_failed_explanation: "Ten problem może występować, gdy klient poczty elektronicznej nie jest prawidłowo zainstalowany i skonfigurowany, lub jeśli obsługiwana wersja środowiska Java Runtime Environment (JRE) nie jest zainstalowana w stacji roboczej użytkownika.",
		email_applet_init_failed_userResponse: "Aby rozwiązać problem:<ul><li>Upewnij się, że aplikacja do obsługi poczty e-mail jest zainstalowana i skonfigurowana jako domyślny klient poczty elektronicznej na stacji roboczej.</li><li>Sprawdź, czy obsługiwana wersja środowiska JRE jest zainstalowana na stacji roboczej, wprowadzając następującą komendę w wierszu komend: java -version</li></ul><p>Lista obsługiwanych wersji środowiska JRE jest zamieszczona w dokumencie <i>Hardware and software prerequisites for IBM Content Navigator</i> (Wymagania sprzętowe i programowe dla produktu IBM Content Navigator) w witrynie działu wsparcia IBM dla oprogramowania.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "Nie można uruchomić aplikacji poczty elektronicznej, ponieważ nie można załadować wymaganego pliku DLL.",
		email_applet_JNI_LOAD_FAILED_explanation: "Nie można załadować wymaganego pliku WCEmailAppletJNI.dll - prawdopodobnie katalog tymczasowy na stacji roboczej jest pełny.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Upewnij się, że w katalogu tymczasowym dostępna jest wystarczająca ilość miejsca. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW. Domyślnie plik WCEmailAppletJNI.dll jest ładowany do katalogu tymczasowego, który został określony w ustawieniach przeglądarki WWW.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "Nie można uruchomić aplikacji poczty elektronicznej, ponieważ aplet e-mail nie może utworzyć pliku tymczasowego.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Możliwe, że katalog tymczasowy na stacji roboczej jest pełny.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Upewnij się, że w katalogu tymczasowym dostępna jest wystarczająca ilość miejsca. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "Nie można uruchomić aplikacji poczty elektronicznej, ponieważ aplet e-mail nie może uzyskać dostępu do katalogu tymczasowego.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Możliwe, że katalog tymczasowy na stacji roboczej jest pełny lub nie masz odpowiednich uprawnień do zapisywania w katalogu tymczasowym.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Upewnij się, że katalog tymczasowy zawiera wystarczającą ilość wolnego miejsca oraz że masz uprawnienia do zapisu w katalogu tymczasowym. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW. Jeśli problem nie ustąpi, skontaktuj się z administratorem systemu.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "Aplet e-mail nie może usunąć pliku tymczasowego.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Możliwe, że z pliku korzysta inna aplikacja lub plik nie istnieje na stacji roboczej.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Jeśli plik jest używany przez inną aplikację, zamknij ją. Jeśli plik znajduje się w lokalnym systemie plików, usuń następujący plik z katalogu tymczasowego na Twojej stacji roboczej: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Nie można utworzyć dowiązania do dokumentu.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Repozytorium zwróciło adres URL w niepoprawnym formacie.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Zamknij przeglądarkę WWW, w tym również wszystkie karty i sesje, a następnie zaloguj się ponownie. Spróbuj ponownie wysłać dokument z klienta WWW. Jeśli problem będzie się powtarzał, skontaktuj się z działem wsparcia IBM dla oprogramowania.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "Aplet e-mail nie może dołączyć tego pliku do wiadomości e-mail.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Repozytorium zwróciło adres URL do dokumentu w niepoprawnym formacie.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Zamknij przeglądarkę WWW, w tym również wszystkie karty i sesje, a następnie zaloguj się ponownie. Spróbuj ponownie wysłać dokument z klienta WWW. Jeśli problem będzie się powtarzał, skontaktuj się z działem wsparcia IBM dla oprogramowania.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Nie można było utworzyć załącznika.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "Aplet e-mail nie może odczytać adresu URL do tego dokumentu.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Zamknij przeglądarkę WWW, w tym również wszystkie karty i sesje, a następnie zaloguj się ponownie. Spróbuj ponownie wysłać dokument z klienta WWW. Jeśli problem będzie się powtarzał, skontaktuj się z działem wsparcia IBM dla oprogramowania.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Dokument nie zostanie pobrany z repozytorium.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Możliwe, że sesja wygasła lub nie działa repozytorium albo serwer aplikacji WWW. Możliwe również, że pojawił się problem z konfiguracją aplikacji WWW.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Zaloguj się i spróbuj ponownie wysłać dokument pocztą elektroniczną. Jeśli problem będzie się powtarzał, poproś administratora systemu o sprawdzenie dzienników błędów repozytorium.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Jeśli skonfigurowano klienta WWW w celu przekształcania dokumentów AFP na inny format, taki jak PDF, wówczas przed wysłaniem dokumentów jako załączników upewnij się, że przekształcenie jest poprawnie skonfigurowane.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Nie można przekształcić dokumentu do formatu PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "Narzędzie używane w celu przekształcania dokumentów do formatu PDF nie obsługuje typu pliku.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Zamknij tę stronę i ponów próbę wysłania dokumentu za pomocą poczty elektronicznej bez przekształcania go do formatu PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "Wiadomość e-mail nie została utworzona.",
		email_applet_MAPI_USER_ABORT_explanation: "Otwórz aplikację pocztową i upewnij się, że działa prawidłowo. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW. Jeśli problem nie ustąpi, zwróć się do administratora systemu o przejrzenie dzienników zdarzeń systemu operacyjnego.",
		email_applet_MAPI_USER_ABORT_userResponse: "Jeśli zamierzasz zamknąć aplikację do obsługi poczty elektronicznej, wówczas nie będą wymagane dalsze czynności. Aby wysłać wiadomość e-mail, zaloguj się do aplikacji do obsługi poczty elektronicznej i ponów próbę wysłania dokument z klienta WWW.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Nie można utworzyć wiadomości e-mail.",
		email_applet_MAPI_FAILURE_explanation: "Możliwe, że klient e-mail nie jest otwarty lub użytkownik nie jest zalogowany na kliencie.",
		email_applet_MAPI_FAILURE_userResponse: "Otwórz aplikację pocztową i upewnij się, że działa prawidłowo. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW. Jeśli problem nie ustąpi, zwróć się do administratora systemu o przejrzenie dzienników zdarzeń systemu operacyjnego.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Nie można utworzyć wiadomości e-mail.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Użytkownik nie jest zalogowany do klienta e-mail. W celu wysłania wiadomości z klienta WWW należy otworzyć klienta e-mail, a użytkownik musi być zalogowany.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Otwórz klienta poczty elektronicznej i zaloguj się. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "Nie można utworzyć wiadomości e-mail, ponieważ na stacji roboczej nie można utworzyć pliku tymczasowego.",
		email_applet_MAPI_DISK_FULL_explanation: "Możliwe, że katalog tymczasowy na stacji roboczej jest pełny.",
		email_applet_MAPI_DISK_FULL_userResponse: "Upewnij się, że w katalogu tymczasowym dostępna jest wystarczająca ilość miejsca. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Nie można utworzyć wiadomości e-mail z powodu niewystarczającej ilości pamięci systemowej.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Być może zbyt wiele aplikacji jest otwartych.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Zamknij nieużywane aplikacje, a następnie ponów próbę wysłania dokumentu z klienta WWW.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Odmowa dostępu do interfejsu MAPI.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Możliwe, że interfejs MAPI (Messaging Application Programming Interface) nie jest włączony lub nie jest obsługiwany dla aplikacji obsługującej pocztę elektroniczną. MAPI to protokół poczty elektronicznej używany na potrzeby komunikacji między klientem WWW a aplikacją do obsługi poczty elektronicznej.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Skontaktuj się z administratorem systemu.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Upewnij się, że w aplikacji do obsługi poczty elektronicznej poprawnie skonfigurowano dostęp do interfejsu MAPI. Jeśli problem będzie się powtarzał, skontaktuj się z działem wsparcia IBM dla oprogramowania.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Nie można utworzyć załącznika lub dowiązania do elementu.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Możliwe, że otwarto zbyt wiele sesji przeglądarki WWW.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Zamknij nieużywane sesje przeglądarki WWW. Następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW. Jeśli problem się powtarza, skontaktuj się z administratorem systemu.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Nie można wysłać tej wiadomości e-mail.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Być może próbujesz wysłać zbyt wiele załączników.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Wybierz mniejszą liczbę plików. Następnie podejmij ponowną próbę wysłania dokumentów z klienta WWW.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Nie można wysłać tej wiadomości e-mail.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Możliwe, że próbujesz wysłać wiadomość e-mail do zbyt wielu adresatów.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Wyślij wiadomość e-mail do mniejszej liczby adresatów.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Nie można było utworzyć załącznika.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Możliwe, że przed utworzeniem załącznika usunięto niektóre wymagane pliki tymczasowe. Ten błąd może się pojawić, gdy pamięć podręczna przeglądarki zostanie skasowana przed wysłaniem wiadomości e-mail.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Nie można było utworzyć załącznika.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Możliwe, że przed utworzeniem załącznika usunięto niektóre wymagane pliki tymczasowe. Ten błąd może się pojawić, gdy pamięć podręczna przeglądarki zostanie skasowana przed wysłaniem wiadomości e-mail.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "Aplikacja do obsługi poczty elektronicznej nie może utworzyć załącznika.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "Nie można wysłać wiadomości e-mail do wskazanego adresata.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Możliwe, że adresat nie istnieje w książce adresowej.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Sprawdź nazwę adresata i ponownie spróbuj wysłać dokument.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "Nie można wysłać wiadomości e-mail do wskazanego adresata.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Możliwe, że adres e-mail jest niepoprawnie sformatowany.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Upewnij się, że wprowadzono poprawny adres e-mail, a następnie ponownie spróbuj wysłać dokument.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_NO_MESSAGES_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Nie można wysłać tej wiadomości e-mail.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Możliwe, że wiadomość e-mail jest za długa.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Skróć tekst wiadomości e-mail i ponownie spróbuj wysłać wiadomość e-mail.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Nie można utworzyć wiadomości e-mail.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Możliwe, że wystąpiła awaria klienta e-mail podczas próby utworzenia wiadomości.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Zrestartuj klienta e-mail, a następnie podejmij ponowną próbę wysłania dokumentu z klienta WWW.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Możliwe, że ta wiadomość e-mail jest niepoprawnie skomponowana.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "Nie można wysłać wiadomości e-mail do wskazanego adresata.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Możliwe, że adres e-mail jest niepoprawnie sformatowany.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Upewnij się, że wprowadzono poprawny adres e-mail, a następnie ponownie wyślij dokument.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Klient e-mail nie może wykonać żądanej operacji.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "Aplikacja do obsługi poczty elektronicznej zwróciła nieoczekiwany błąd.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Spróbuj ponownie wysłać dokument z klienta WWW.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "Jedna z właściwości nie zawiera wymaganej liczby wartości.",
		error_property_cardinality_explanation: "Niektóre właściwości mają minimalne i maksymalne liczby wartości.",
		error_property_cardinality_userResponse: "Użyj pomocy w dymku, aby określić, która właściwość wymaga minimalnej liczby wartości. Następnie określ minimalną liczbę wartości i ponów próbę.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Wymagane jest podanie nazwy pliku.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Określ nazwę pliku i ponów próbę.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Wtyczka ${0} zawiera błędy.",
		plugin_error_explanation: "Wystąpił błąd podczas oceny kodu JavaScript dla wtyczki ${0}. Jeśli nadal będziesz korzystać z tego klienta WWW, wówczas mogą pojawić się dodatkowe błędy.",
		plugin_error_userResponse: "Skontaktuj się z administratorem systemu.",
		plugin_error_adminResponse: "Wystąpił problem z wtyczką, który musi zostać rozwiązany przez jej dostawcę. Zalecane jest usunięcie wtyczki z konfiguracji klienta WWW do czasu rozwiązania problemu z wtyczką.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Nie można otworzyć szablonu wprowadzania.",
		open_old_format_entry_template_error_explanation: "Szablon wprowadzania korzysta ze starszego formatu, który nie jest obsługiwany w kliencie WWW.",
		open_old_format_entry_template_error_userResponse: "Poproś administratora systemu o zaktualizowanie szablonu wprowadzania.",
		open_old_format_entry_template_error_adminResponse: "Użyj projektanta szablonu wprowadzania silnika aplikacji lub Workplace XT, aby zapisać zaktualizowaną wersję szablonu wprowadzania.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Nie można otworzyć szablonu wprowadzania.",
		open_custom_object_entry_template_error_explanation: "Klient WWW nie obsługuje następującego typu szablonów wprowadzania: niestandardowe szablony wprowadzania obiektów.",
		open_custom_object_entry_template_error_userResponse: "Otwórz inny szablon wprowadzania.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Nie można otworzyć obiektu eforms.",
		open_forms_object_error_explanation: "Klient WWW nie obsługuje następujących typów obiektów eforms: szablon formularza, dane formularza, strategia dokumentu i strategia przepływu pracy.",
		open_forms_object_error_userResponse: "Otwórz inny dokument.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Nie można użyć szablonu wprowadzania ${0}.",
		entry_template_folder_restricted_error_explanation: "Szablon wprowadzania dodaje elementy do folderu ${1}, ale nie masz wystarczających uprawnień do dodawania elementów do tego folderu.",
		entry_template_folder_restricted_error_userResponse: "Wybierz inny szablon wprowadzania lub poproś administratora systemu o nadanie odpowiednich uprawnień w celu dodawania elementów do folderu ${1}.",
		entry_template_folder_restricted_error_0: "nazwa_szablonu_wprowadzania",
		entry_template_folder_restricted_error_1: "nazwa_folderu",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Nie można otworzyć szablonu wprowadzania.",
		open_records_entry_template_error_explanation: "Klient WWW nie obsługuje następującego typu szablonów wprowadzania: szablony wprowadzania Zadeklaruj jako akta.",
		open_records_entry_template_error_userResponse: "Otwórz inny szablon wprowadzania.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Nie można otworzyć przepływu pracy.",
		open_workflow_error_explanation: "Klient WWW nie obsługuje otwierania przepływów pracy.",
		open_workflow_error_userResponse: "Otwórz inny dokument.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Nie można otworzyć dokumentu.",
		viewer_unable_to_view_error_explanation: "Dla dokumentów tego typu nie skonfigurowano przeglądarki lub skonfigurowana przeglądarka jest niezgodna z tym systemem.",
		viewer_unable_to_view_error_userResponse: "Poproś administratora systemu o skonfigurowanie przeglądarki dla dokumentów tego typu i upewnienie się, że skonfigurowana przeglądarka będzie działała z systemem użytkownika.",
		viewer_unable_to_view_error_adminResponse: "Użyj narzędzia administracyjnego, aby skonfigurować przeglądarkę dla dokumentów tego typu.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Nie można otworzyć wyszukiwania.",
		search_cannot_open_error_explanation: "Funkcja wyszukiwania nie jest skonfigurowana dla tego pulpitu.",
		search_cannot_open_error_userResponse: "Spytaj administratora systemu, czy możesz uzyskać dostęp do pulpitu, który zawiera funkcję wyszukiwania, lub czy możliwe jest zaktualizowanie tego pulpitu w taki sposób, aby zawierał funkcję wyszukiwania.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Dokument nie został załadowany.",
		viewer_document_load_failed_error_explanation: "Nie powiodło się otwarcie dokumentu w przeglądarce Daeja ViewONE Professional.",
		viewer_document_load_failed_error_userResponse: "Więcej informacji zawiera komunikat o błędzie wyświetlany w przeglądarce.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Nie można wyświetlić tego dokumentu.",
		viewer_session_expired_explanation: "Nie można wydobyć treści dokumentu.",
		viewer_session_expired_userResponse: "Ponów próbę zalogowania się. Jeśli problem nie ustępuje, może to oznaczać wyłączenie serwera aplikacji. Poproś administratora systemu, aby sprawdził dzienniki błędów programu IBM Content Navigator lub zrestartował serwer.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Nie można wyświetlić tego dokumentu.",
		ajaxViewer_getPage_failed_explanation: "Przeglądarka AJAX otrzymała odpowiedź dot. błędu podczas odczytywania treści strony. Możliwe, że serwer aplikacji nie jest uruchomiony.",
		ajaxViewer_getPage_failed_userResponse: "Zamknij przeglądarkę WWW i zaloguj się ponownie. Jeśli problem będzie się powtarzał, poproś administratora systemu o sprawdzenie dzienników błędów serwera aplikacji WWW lub zrestartowanie serwera.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Na tej stacji roboczej nie znaleziono środowiska JRE (Java Runtime Environment).",
		viewer_java_plugin_not_found_explanation: "Nie znaleziono wtyczki lub nie zainstalowano poprawnej wersji środowiska JRE.",
		viewer_java_plugin_not_found_userResponse: "Sprawdź, czy zainstalowano środowisko JRE. W wierszu komend wprowadź na przykład następującą komendę: Java -version. Jeśli środowisko JRE nie jest zainstalowane lub jest zainstalowane w niepoprawnej wersji, zainstaluj odpowiednią wersję JRE. Lista obsługiwanych wersji jest zamieszczona w dokumencie <i>Hardware and software prerequisites for IBM Content Navigator</i> (Wymagania sprzętowe i programowe dla produktu IBM Content Navigator) w witrynie działu wsparcia IBM dla oprogramowania.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Dokumentu nie można wyświetlić w używanej przeglądarce WWW.",
		viewer_pdf_plugin_not_found_explanation: "Nie znaleziono wtyczki służącej do wyświetlania dokumentów PDF w przeglądarce WWW.",
		viewer_pdf_plugin_not_found_userResponse: "Plik w formacie PDF zostanie pobrany do komputera lokalnego, a nie wyświetlony w oknie przeglądarki.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "Dodanie następującego elementu do repozytorium nie jest możliwe: ${0}.",
		add_document_single_item_error_explanation: "Ten błąd może wystąpić z jednej z poniższych przyczyn:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Użytkownik podejmuje próbę dodania dokumentu, który został przeniesiony lub usunięty.</li>" + "<li>Podejmujesz próbę dodania dokumentu, którego nazwę zmieniono.</li>" + "<li>Podejmujesz próbę dodania dokumentu, który jest uszkodzony.</li>" + "<li>Podejmujesz próbę dodania dokumentu, który jest już otwarty w innej aplikacji.</li>" + "<li>Podejmujesz próbę dodania folderu do repozytorium.</li>" + "<li>Nie masz wymaganych uprawnień w systemie operacyjnym do uzyskania dostępu do dokumentu.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Podejmij odpowiednie działania, aby rozwiązać problem:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Jeśli dokument przeniesiono lub zmieniono jego nazwę, znajdź ten dokument w systemie plików i spróbuj dodać go ponownie.</li>" + "<li>Jeśli dokument jest otwarty w innej aplikacji, zamknij ją i spróbuj dodać go ponownie.</li>" + "</ul>" + "<br>Nie możesz dodać folderów do repozytorium.",
		add_document_single_item_error_0: "element_z_niepowodzeniem",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Następujących elementów: ${0} nie można dodać do repozytorium: ${1}",
		add_document_multiple_items_error_explanation: "Problem z jednym z elementów uniemożliwia dodanie elementów do repozytorium. Ten błąd może wystąpić z jednej z poniższych przyczyn:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Użytkownik podejmuje próbę dodania dokumentu, który został przeniesiony lub usunięty.</li>" + "<li>Podejmujesz próbę dodania dokumentu, którego nazwę zmieniono.</li>" + "<li>Podejmujesz próbę dodania dokumentu, który jest uszkodzony.</li>" + "<li>Podejmujesz próbę dodania dokumentu, który jest już otwarty w innej aplikacji.</li>" + "<li>Podejmujesz próbę dodania folderu do repozytorium.</li>" + "<li>Nie masz wymaganych uprawnień w systemie operacyjnym do uzyskania dostępu do dokumentu.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Podejmij odpowiednie działania, aby rozwiązać problem:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Jeśli dokument przeniesiono lub zmieniono jego nazwę, znajdź ten dokument w systemie plików i spróbuj dodać elementy ponownie.</li>" + "<li>Jeśli dokument jest otwarty w innej aplikacji, zamknij ją i spróbuj dodać elementy ponownie.</li>" + "<li>Jeśli dokument został usunięty lub jeśli jest on uszkodzony, usuń zaznaczenie elementu i spróbuj dodać ponownie pozostałe elementy.</li>" + "</ul>" + "<br>Nie możesz dodać folderów do repozytorium.",
		add_document_multiple_items_error_0: "liczba_elementów",
		add_document_multiple_items_error_1: "elementy_z_niepowodzeniem",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Nie można przeciągać elementów z tego miejsca.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Nie można otworzyć obiektu eforms.",
		open_forms_work_object_error_explanation: "Klient WWW nie obsługuje następującego typu formularzy eForm: strategia przepływu pracy.",
		open_forms_work_object_error_userResponse: "Otwórz inny dokument.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Nie można otworzyć dokumentu.",
		viewer_privilege_to_view_error_explanation: "Nie masz uprawnień wymaganych do wyświetlania tego dokumentu.",
		viewer_privilege_to_view_error_userResponse: "Zwróć się do właściciela dokumentu lub administratora systemu o nadanie odpowiednich uprawnień do wyświetlania dokumentu.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Nie można dodać elementów do repozytorium.",
		add_document_too_many_items_error_explanation: "Jednorazowo można dodać maksymalnie ${0} elementów. Podejmujesz próbę dodania ${1} elementów.",
		add_document_too_many_items_error_userResponse: "Usuń część elementów z listy i spróbuj dodać je ponownie. Możesz również zwrócić się do administratora systemu, aby zwiększył maksymalną liczbę dokumentów, jakie można jednorazowo dodać do pulpitu.",
		add_document_too_many_items_error_0: "maksymalna_liczba_elementów",
		add_document_too_many_items_error_1: "liczba_elementów",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Nie można nawiązać połączenia z klientem WWW za pomocą adresu URL: ${0}.",
		http_ltpa_expired_explanation: "Klucz LTPA powiązany z sesją przeglądania użytkownika utracił ważność.",
		http_ltpa_expired_userResponse: "Uruchom ponownie przeglądarkę WWW i spróbuj zalogować się ponownie. Jeśli problem nie ustąpi, zgłoś następujący błąd administratorowi systemu: ${1}.",
		http_ltpa_expired_0: "URL_klienta_WWW",
		http_ltpa_expired_1: "błąd_HTTP",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Nie można dodać dokumentu do folderu ${0}.",
		dnd_no_privilege_error_explanation: "Uprawnienia zdefiniowane względem folderu wykluczają dodawanie do niego jakichkolwiek dokumentów.",
		dnd_no_privilege_error_userResponse: "Dodaj dokument do innego folderu.",
		dnd_no_privilege_error_0: "nazwa_elementu",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Elementów nie można zmodyfikować.",
		modify_document_too_many_items_error_explanation: "Jednorazowo można zmodyfikować maksymalnie ${0} elementy/-ów. Próbujesz zmodyfikować elementy w liczbie: ${1}.",
		modify_document_too_many_items_error_userResponse: "Wybierz mniejszą liczbę elementów i ponów próbę ich modyfikacji. Możesz również zwrócić się do administratora systemu, aby zwiększył maksymalną liczbę elementów, jakie można jednorazowo modyfikować za pośrednictwem pulpitu.",
		modify_document_too_many_items_error_0: "maksymalna_liczba_elementów",
		modify_document_too_many_items_error_1: "liczba_elementów",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Nie możesz użyć klasy ${0}.",
		add_document_multiple_unique_values_error_explanation: "Klasa ${0} zawiera jedną lub więcej właściwości wymagających unikalnej wartości dla każdego dokumentu. Po dodaniu wielu dokumentów wszystkie z nich używają tej samej wartości.",
		add_document_multiple_unique_values_error_userResponse: "Wybierz inną klasę lub spróbuj dodać dokumenty osobno.",
		add_document_multiple_unique_values_error_0: "nazwa_wyświetlana_klasy",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Nie można użyć szablonu wprowadzania ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Szablon wprowadzania ${0} wymaga od użytkownika dodania dokumentów do klasy ${1}. Klasa ${1} zawiera jednak jedną lub więcej właściwości wymagających unikalnej wartości dla każdego dokumentu. Po dodaniu wielu dokumentów wszystkie z nich używają tej samej wartości.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Wybierz inny szablon wprowadzania lub dodaj dokumenty osobno.",
		add_document_multiple_unique_values_entry_template_error_0: "nazwa_szablonu_wprowadzania",
		add_document_multiple_unique_values_entry_template_error_1: "nazwa_wyświetlana_klasy",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Nie można użyć szablonu wprowadzania ${0}.",
		entry_template_class_restricted_error_explanation: "Szablon wprowadzania dodaje elementy przy użyciu klasy ${1}, ale nie masz wystarczających uprawnień do dodawania elementów przy użyciu tej klasy.",
		entry_template_class_restricted_error_userResponse: "Wybierz inny szablon wprowadzania lub poproś administratora systemu o nadanie odpowiednich uprawnień do dodawania elementów przy użyciu klasy ${1}.",
		entry_template_class_restricted_error_0: "nazwa_szablonu_wprowadzania",
		entry_template_class_restricted_error_1: "nazwa_wyświetlana_klasy",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "Nie można ponownie przypisać elementu pracy innemu użytkownikowi.",
		process_reassign_error_explanation: "Ta czynność jest zabroniona przez przepływ pracy.",
		process_reassign_error_userResponse: "Można otworzyć element pracy i zakończyć aktualny krok w elemencie pracy.  Więcej informacji na temat tego problemu można uzyskać, zwracając się do właściciela elementu z prośbą o weryfikację, czy możliwe jest ponowne przypisanie elementu pracy.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "Nie można załadować następującej czynności niestandardowej: ${0}.",
		customaction_loadurl_error_explanation: "Czynność niestandardowa nie znajduje się w dostępnej lokalizacji. Bieżący adres URL czynności niestandardowej to ${1}.",
		customaction_loadurl_error_userResponse: "Poproś administratora o przeniesienie czynności niestandardowej do lokalizacji, która jest dostępna.",
		customaction_loadurl_error_adminResponse: "Plik JSP definiujący czynność niestandardową musi zostać udostępniony jako część aplikacji WWW eClient lub aplikacji WWW IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "Nie można znaleźć następującej funkcji: ${0}.",
		feature_invalid_explanation: "Ten problem może się pojawić, jeśli funkcja jest niedostępna dla wskazanego pulpitu lub w nazwie funkcji występuje błąd literowy.",
		feature_invalid_userResponse: "Po kliknięciu opcji OK użytkownik zostanie przekierowany do funkcji domyślnej dla tego pulpitu. Skontaktuj się z administratorem systemu, aby zgłosić ten problem.",
		feature_invalid_adminResponse: "W przypadku konieczności udostępnienia funkcji na pulpicie należy dokonać aktualizacji konfiguracji w narzędziu administracyjnym. Jeśli ta właściwość nie powinna zostać uwzględniona na pulpicie lub w jej nazwie popełniono błąd literowy, we współpracy z programistą aplikacji, który utworzył adres URL do tej funkcji, dokonaj jego aktualizacji.",
		feature_invalid_number: 2066,
		feature_invalid_0: "nazwa_składnika",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Nie można otworzyć wyszukiwania ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "W celu otwarcia tego wyszukiwania należy przejść do obszaru zespołu.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Wybierz inne wyszukiwanie.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Nie można zaimportować następującego pliku: ${0}.",
		wrong_import_file_type_error_explanation: "Plik musi być plikiem właściwości.",
		wrong_import_file_type_error_userResponse: "Wybierz plik właściwości wyeksportowany z narzędzia administracyjnego.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Nie można znaleźć repozytorium ${0} na pulpicie ${1}.",
		browse_repository_not_found_error_explanation: "Jeśli w parametrze URL określono repozytorium, musi ono być dostępne na pulpicie i musi być możliwe użycie funkcji przeglądania.",
		browse_repository_not_found_error_userResponse: "Upewnij się, czy identyfikator repozytorium określony w adresie URL jest poprawny, czy repozytorium zostało dodane do pulpitu ${1} oraz czy dla tego repozytorium została aktywowana funkcja przeglądania.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Dla repozytorium ${0} nie aktywowano funkcji przeglądania w pulpicie ${1}.",
		browse_repository_not_enabled_error_explanation: "Jeśli w parametrze URL określono repozytorium, musi być możliwe użycie w nim funkcji przeglądania.",
		browse_repository_not_enabled_error_userResponse: "Włącz funkcję przeglądania dla repozytorium ${0} w pulpicie ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "Nie można zrealizować wyszukiwania, ponieważ odsyłacz zawiera niepoprawne kryteria wyszukiwania.",
		invalid_xt_stored_search_criteria_error_explanation: "Następująca wartość jest niepoprawna: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Zwróć się do administratora systemu o udostępnienie zaktualizowanego odsyłacza.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Przeprowadź edycję odpowiedniej pary nazwa-wartość w adresie URL. Jeśli nie wiesz, które wartości są poprawne dla właściwości, otwórz zapisane wyszukiwanie za pomocą projektanta wyszukiwania FileNet Workplace XT, aby ustalić poprawną wartość.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Nie można otworzyć wyszukiwania w różnych repozytoriach.",
		unified_search_invalid_fixed_value_error_explanation: "Wyszukiwanie w różnych repozytoriach zawiera niepoprawne kryteria. Ten problem może wystąpić, jeśli kryterium ma stałą wartość, która nie jest kompatybilna z innymi właściwościami w odwzorowaniu. Na przykład problem ten może wystąpić, jeśli wartość stała jest łańcuchem, ale pozostałe właściwości w odwzorowaniu są liczbami całkowitymi.",
		unified_search_invalid_fixed_value_error_userResponse: "Jeśli masz odpowiednie uprawnienia do edytowania wyszukiwania, usuń niepoprawne kryteria i zapisz wyszukiwanie ponownie. Jeśli nie masz odpowiednich uprawnień do edycji wyszukiwania, poproś właściciela wyszukiwania lub administratora systemu o ponowne zapisanie wyszukiwania.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Nie można ukończyć żądania.",
		launch_action_invalid_json_error_explanation: "Dane przekazane do klienta WWW są niepoprawne.",
		launch_action_invalid_json_error_userResponse: "Przekaż administratorowi systemu informacje na temat aplikacji używanej w czasie, gdy wystąpił problem.",
		launch_action_invalid_json_error_adminResponse: "Aplikacja kliencka nie wysłała do klienta WWW poprawnego obiektu JSON. W celu uzyskania dodatkowego wsparcia skontaktuj się z działem wsparcia IBM dla oprogramowania.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Nie można ukończyć żądania.",
		launch_action_not_found_error_explanation: "Czynność ${0} nie została skonfigurowana dla żadnego menu z pulpitu ${1}.",
		launch_action_not_found_error_userResponse: "Zwróć się do administratora systemu z prośbą o skonfigurowanie pulpitu ${1} w sposób umożliwiający korzystanie z menu zawierającego czynność ${0} lub o przypisanie do pulpitu, który zawiera czynność ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Nie można ukończyć żądania.",
		launch_action_repository_not_found_error_explanation: "Repozytorium ${0} nie zostało powiązane z pulpitem ${1}.",
		launch_action_repository_not_found_error_userResponse: "Zwróć się do administratora systemu z prośbą o utworzenie powiązania repozytorium ${0} z pulpitem ${1} lub o przypisanie pulpitu zawierającego repozytorium ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Nie można otworzyć obszaru zespołu.",
		teamspace_cannot_open_error_explanation: "Funkcja obszaru zespołu nie jest skonfigurowana dla tego pulpitu.",
		teamspace_cannot_open_error_userResponse: "Spytaj administratora systemu, czy możesz uzyskać dostęp do pulpitu, który zawiera funkcję obszaru zespołu, lub czy możliwe jest zaktualizowanie tego pulpitu w taki sposób, aby zawierał funkcję obszaru zespołu.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Wystąpił błąd podczas wprowadzania/zwracania utajnionej treści.",
		viewer_redaction_checkin_failed_explanation: "Przeglądarka otrzymała odpowiedź na błąd podczas wprowadzania/zwracania utajnionej treści.",
		viewer_redaction_checkin_failed_userResponse: "Poproś administratora systemu o przejrzenie plików dziennika serwera aplikacji WWW.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Nie można dodać dokumentów do tego repozytorium.",
		add_document_odserver_odwek_version_od_error_explanation: "Bieżąca wersja serwera IBM Content Manager OnDemand lub komponentu ODWEK jest niewystarczająca do obsługi operacji dodawania dokumentów do repozytorium programu Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Poproś administratora o sprawdzenie, które wersje serwera Content Manager OnDemand i komponentu ODWEK są wymagane do dodawania dokumentów do repozytoriów serwera Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Nie można dodać elementów do repozytorium.",
		add_document_too_many_items_od_error_explanation: "Do repozytoriów IBM Content Manager OnDemand elementy można dodawać tylko pojedynczo.",
		add_document_too_many_items_od_error_userResponse: "Usuń część elementów z listy i spróbuj dodać elementy ponownie, po jednym.",
		add_document_too_many_items_od_error_0: "maksymalna_liczba_elementów",
		add_document_too_many_items_od_error_1: "liczba_elementów",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "Elementu nie można dodać do repozytorium.",
		add_document_filesize_empty_od_error_explanation: "Nie można dodawać pustych plików do repozytorium IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Dodaj treść do pliku i spróbuj dodać plik ponownie albo dodaj inny element.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Nie można otworzyć wyszukiwania w różnych repozytoriach.",
		unified_search_repository_not_found_error_explanation: "W wyszukiwaniu w różnych repozytoriach uwzględnione jest co najmniej jedno niepoprawne repozytorium. Ten problem może wystąpić, gdy repozytoria uwzględnione w wyszukiwaniu zostaną usunięte z aplikacji lub z bieżącego pulpitu.",
		unified_search_repository_not_found_error_userResponse: "Jeśli masz odpowiednie uprawnienia do edytowania wyszukiwania, wówczas zapisz ponownie wyszukiwanie. Po zapisaniu wyszukiwania klient WWW usunie niepoprawne repozytoria z wyszukiwania. Jeśli nie masz odpowiednich uprawnień do edycji wyszukiwania, poproś właściciela wyszukiwania lub administratora systemu o ponowne zapisanie wyszukiwania.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Nie można utworzyć nowego dokumentu.",
		edit_document_using_office_online_error: "Nie można otworzyć dokumentu.",
		edit_document_using_office_online_error_explanation: "Nie skonfigurowano adresu URL serwera Microsoft Office Online Server.",
		edit_document_using_office_online_error_userResponse: "Przed użyciem pakietu Office Online administrator musi najpierw aktywować serwer Office Online Server w repozytorium i określić adres URL serwera Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Tego dokumentu nie można otworzyć w aplikacjach Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Zwróć się do administratora systemu z prośbą o zmodyfikowanie ustawień integracji z serwerem MS Office Online Server.<br><br> Jeśli użytkownik musi mieć dostęp do tego dokumentu z aplikacji Microsoft Office Online, przejdź na stronę Edytuj integrację dla repozytorium i zmodyfikuj integrację z serwerem MS Office Online Server w taki sposób, by na liście klas zawierała klasę przeznaczoną do zmodyfikowania na potrzeby współpracy z Office Online. ",		
		browser_not_support_this_viewer: "Skonfigurowana przeglądarka nie jest kompatybilna z Twoją przeglądarką WWW.",
		browser_not_support_this_viewer_explanation: "Przeglądarka WWW nie obsługuje przeglądarki ${0}.",
		browser_not_support_this_viewer_userResponse: "Do otwarcia tego dokumentu użyj innej przeglądarki. Lista obsługiwanych przeglądarek WWW znajduje się w dokumencie <i>Sprzętowe i programowe wymagania wstępne produktu IBM Content Navigator</i> w serwisie Wsparcia IBM dla Oprogramowania.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informacje o przepływie pracy",
		process_information_info_text: "Wybrany element jest obecnie uruchomiony w następujących przepływach pracy.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Równe",
		operator_NOTEQUAL: "Różne",
		operator_LIKE: "Podobne",
		operator_STARTSWITH: "Rozpoczyna się od",
		operator_ENDSWITH: "Kończy się na",
		operator_NOTLIKE: "Nie podobne",
		operator_NULL: "Puste",
		operator_NOTNULL: "Nie jest puste",
		operator_LESS: "Mniejsze",
		operator_LESSOREQUAL: "Mniejsze lub równe",
		operator_GREATER: "Większe",
		operator_GREATEROREQUAL: "Większe lub równe",
		operator_BETWEEN: "W zakresie",
		operator_NOTBETWEEN: "Poza zakresem",
		operator_IN: "Uwzględnij wszystkie",
		operator_INANY: "Uwzględnij dowolne",
		operator_NOTIN: "Wyklucz wszystkie",
		operator_CONTAINS: "Zawiera",

		/* SearchForm widget */
		search_button_tooltip: "Wyszukaj dokumenty zgodne z kryteriami.",
		reset_button_tooltip: "Resetuje wyszukiwanie do wartości domyślnych ustawionych przez administratora.",
		clear_button_tooltip: "Usuwa wszystkie wartości wprowadzone dla wyszukiwania.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Wybierz wyszukiwanie",
		append_to_search: "Dopisz do wyszukiwania",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nowe wyszukiwanie",
		new_unified_search: "Nowe wyszukiwanie w różnych repozytoriach",
		searh_name_contains: "Wyszukiwana nazwa zawiera",
		keep_search_criteria_expanded: "Pozostaw otwarte kryteria wyszukiwania",
		showing_results: "Wyświetlanie wyników dla:",
		open_in_new_window: "Otwórz w nowym oknie",
		open_in_new_tab: "Otwórz w nowej karcie",
		close_tab: "Zamknij kartę",
		add_repository: "Dodaj repozytorium",
		edit_repository: "Edytuj repozytorium",
		remove_repository: "Usuń",
		search_scope: "Zasięg wyszukiwania",
		search_class_template: "Klasa",
		object_type_version: "Typ i wersja obiektu",
		not_applicable: "Nie dotyczy",
		unified_search_including_subfolders: " (Wraz z podfolderami)",
		unified_search_dialog_intro_text: "Wybierz repozytorium i wyszukiwanie lub klasy, które mają zostać uwzględnione w wyszukiwaniu.",
		unified_search_class_or_template: "Klasa lub szablon",

		select_object_fieldset_legend: "W jaki sposób chcesz znaleźć elementy do załączenia:",
		select_object_create_new_search: "Nowe wyszukiwanie",
		select_object_search_template: "Istniejące wyszukiwania",

		search_criteria: "Kryteria wyszukiwania:",
		search_criteria_no_colon: "Kryteria wyszukiwania",
		search_in_multiple: "Wyszukaj w (${0}):",
		search_location_including_subfolders: "${0} wraz z podfolderami",
		search_class: "Klasa:",
		search_class_multiple: "Klasa (${0}):",
		search_class_including_subclasses: "${0} wraz z podklasami",
		search_class_all_pseudo: "Wszystkie",
		search_results: "Wyniki wyszukiwania",
		select_operator: "Wybierz operator",
		ending_value: "Wartością końcową dla właściwości ${0} jest:",
		search_options: "Opcje wyszukiwania:",
		search_version: "Wersja:",
		search_released_version: "Wydana wersja",
		search_current_version: "Bieżąca wersja",
		search_all_versions: "Wszystkie wersje",
		search_file_type_filter: "Filtr typu pliku:",
		search_one_file_type: "1 typ pliku",
		search_many_file_types: "typów plików: ${0}",
		search_action_filter: "Filtr czynności:",
		search_action_filter_hover_help: "Zawęź wyniki, aby uwzględnić tylko pliki, dla których użytkownicy podjęli konkretne działania.<br/>Możesz na przykład wyszukać tylko dokumenty dodane dnia 20 września 2012 r.",
		search_action_filter_enabled: "Filtr czynności został dodany",
		search_enable: "Włącz",
		search_disable: "Wyłącz",
		search_by: "przez",
		search_added: "Dodany",
		search_modified: "Zmodyfikowany",
		search_checked_out: "Pobrany",
		search_date_operator_on: "Wł.",
		search_date_operator_not_on: "Nie w dniu",
		search_date_operator_before: "Przed",
		search_date_operator_after: "Po",
		search_version_hover_help_p8: "Wydana wersja jest dostępna dla wszystkich użytkowników. Dokument będący bieżącą wersją jest edytowany przez co najmniej jednego użytkownika.",
		search_version_hover_help_cm: "Bieżąca wersja jest ostatnią wersją elementu.",
		search_using: "Wyszukaj elementy zgodne z kryteriami:",
		search_property_and_text_criteria: "Zarówno wartości właściwości, jak i kryteria tekstu",
		search_property_or_text_criteria: "Albo wartości właściwości albo kryteria tekstu",
		search_property_and_text: "Zarówno kryteria właściwości, jak i tekstu",
		search_property_or_text: "Albo kryteria właściwości, albo tekstu",
		search_property_options: "Opcje właściwości:",
		search_property_option_match_all: "Wszystkie właściwości",
		search_property_option_match_any: "Dowolne z właściwości",
		search_property_option_match_all_summary: "Dopasuj wszystkie",
		search_property_option_match_any_summary: "Dopasuj dowolne",
		search_total_count_type_total: "Suma",
		search_total_count_type_atleast: "Co najmniej",
		search_content_size_filter: "Filtr rozmiaru treści:",
		search_content_size_filter_any: "Dowolny rozmiar treści",

		/* Search work options */
		search_work_filter: "Filtr elementów pracy:",
		search_work_filter_hover_help: "Zawęź wyniki, aby uwzględnić tylko elementy z przepływu pracy. Na przykład można zawęzić wyniki, aby uwzględnić tylko elementy pracy, które są aktywne.<br /><br />Ta opcja nie ma zastosowania, jeśli chcesz wyświetlić wszystkie wersje elementów zwracanych przez wyszukiwanie.",
		search_work_filter_enabled: "Filtr elementów pracy jest włączony",
		search_work_filter_status: "Status:",
		search_work_filter_step: "Krok:",
		search_work_filter_owner: "Właściciel:",
		search_work_filter_status_all: "Wszystkie elementy",
		search_work_filter_status_active: "Elementy aktywne",
		search_work_filter_status_suspended: "Elementy zawieszone",
		search_work_filter_process_all: "Wszystkie przepływy pracy",
		search_work_filter_step_all: "Wszystkie kroki",
		search_work_filter_owner_all: "Wszyscy użytkownicy",
		search_work_filter_step_error: "Krok o tej nazwie nie istnieje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "Wyszukiwania nie można zakończyć bez dodatkowych informacji. Wprowadź wartość dla co najmniej jednego warunku.",
		search_insufficient_input_box: "Wyszukiwania nie można zakończyć bez dodatkowych informacji. Wprowadź kryteria wyszukiwania tekstowego lub wybierz szablon metadanych.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "Wyszukiwania nie można skonfigurować w taki sposób, aby było uruchamiane, gdy jest otwarte bez dodatkowych informacji. Wprowadź wartość dla co najmniej jednego warunku.",
		search_member_required: "Aby udostępnić to wyszukiwanie konkretnym użytkownikom lub grupom, wybierz co najmniej jednego użytkownika lub grupę, którym to wyszukanie ma zostać udostępnione.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Czy chcesz zamknąć bez zapisywania zmian?",
		search_prompt_close_all_without_save: "Czy chcesz zamknąć wszystkie karty bez zapisywania zmian?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Jeden z następujących typów kryteriów wyszukiwania jest niepoprawny dla tego repozytorium: ${0}. W celu uruchomienia wyszukiwania w kliencie WWW konieczne jest usunięcie niepoprawnych kryteriów. W przypadku zapisania wyszukiwania niepoprawne kryteria zostaną usunięte. Jeśli nie zamierzasz zmieniać wyszukiwania, zamknij je.",
		search_invalid_repository: "Jedno lub więcej repozytoriów",
		search_invalid_class: "Jedna lub więcej klas",
		search_invalid_folder: "Jeden lub więcej folderów",
		search_invalid_file_type: "Jeden lub więcej typów plików",
		search_invalid_property: "Jedna lub więcej właściwości",
		search_invalid_text_search: "Kryteria wyszukiwania tekstowego",
		search_invalid_work: "Kryteria filtru elementów pracy",

		search_operator_pulldown_missing: "Wymagany jest operator. Wybierz operator z menu rozwijanego. Jeśli nie widzisz żadnych operatorów, poproś administratora systemu o sprawdzenie, czy na karcie <b>Szukaj</b> w narzędziu administracyjnym wszystkie operatory nie są ukryte. W przypadku wyszukiwania w wielu repozytoriach menu rozwijane może nie zawierać żadnego operatora, jeśli między odwzorowanymi właściwościami nie skonfigurowano wspólnego operatora.",

		/*SearchBuilder */
		open_search_builder: "Nowe wyszukiwanie",
		document_type: "Klasa",
		show_all_properties: "Pokaż wszystkie właściwości",
		text_search_label: "Znajdź elementy z następującymi terminami:",
		text_search_place_holder: "Użyj kombinacji terminów i operatorów: * ? lub \"fraz dokładnie dopasowywanych\"",
		text_search_place_holder_box: "Użyj kombinacji terminów i operatorów: AND, OR, NOT oraz \"fraz dokładnie dopasowywanych\"",
		text_search_place_holder_cascade_proximity: "Użyj kombinacji terminów i operatorów: * lub ?",
		text_search_place_holder_common: "Użyj kombinacji terminów i \"fraz dokładnie dopasowywanych\"",
		text_search_hover_help_p8: "Użyj gwiazdki (*) lub znaku zapytania (?) jako znaku wieloznacznego. W celu uzyskania dokładnej zgodności użyj cudzysłowów podwójnych (\"\").",
		text_search_hover_help_p8_only_crs: "Użyj gwiazdki (*) lub znaku zapytania (?) jako znaku wieloznacznego. W celu uzyskania dokładnej zgodności użyj cudzysłowów podwójnych (\"\"). W wypadku określenia więcej niż jednego terminu wyszukiwanie w wielu repozytoriach zwraca elementy zawierające dowolny z tych terminów.",
		text_search_hover_help_cm: "Użyj gwiazdki (*) lub znaku zapytania (?) jako znaku wieloznacznego. W celu uzyskania dokładnej zgodności użyj cudzysłowów podwójnych (\"\"). Terminy do wykluczenia poprzedź znakiem (-), a terminy do uwzględnienia poprzedź znakiem plus (+).",
		text_search_hover_help_box: "Użyj AND między terminami, aby uzyskać dopasowanie wszystkich terminów. Użyj OR między terminami, aby uzyskać dopasowanie dowolnych terminów. W celu uzyskania dokładnej zgodności użyj cudzysłowów podwójnych (\"\"). W celu wykluczenia terminu poprzedź go operatorem NOT.",
		text_search_hover_help_common: "W celu uzyskania dokładnej zgodności użyj cudzysłowów podwójnych (\"\"). W wypadku określenia więcej niż jednego terminu wyszukiwanie w wielu repozytoriach zwraca elementy zawierające wszystkie określone terminy.",
		text_search_options: "Opcje tekstu:",
		text_search_options_hover_help: "Jeśli zamierzasz zastosować dowolne operatory inne niż znaki wieloznaczne, wybierz opcję Operatory zaawansowane.",
		text_search_option_any: "Dowolne z terminów",
		text_search_option_all: "Wszystkie terminy",
		text_search_option_proximity: "W sąsiedztwie słów:",
		text_search_option_none: "Operatory zaawansowane",
		text_search_option_authoring: "Wyszukiwanie tekstowe:",
		text_search_option_authoring_hover_help: "Wybierz opcję określającą sposób udostępniania użytkownikom kryteriów wyszukiwania tekstowego. Jeśli nie chcesz uwzględniać żadnych kryteriów wyszukiwania, ukryj opcję. W przeciwnym razie możesz zezwolić na edytowanie kryteriów wyszukiwania lub na wymaganie ich przez użytkowników bądź spowodować, że będą dostępne dla użytkowników wyłącznie do odczytu.",
		text_search_option_hide: "Ukryj kryteria",
		text_search_option_hide_hover_help: "Wybierz tę opcję, jeśli w wyszukiwaniu nie zamierzasz uwzględniać żadnych kryteriów wyszukiwania tekstowego i nie zamierzasz zezwalać innym użytkownikom na określanie kryteriów wyszukiwania tekstowego.",
		text_search_option_in: "W znaczniku HTML/XML ${0}",
		text_search_option_paragraph: "W tym samym akapicie",
		text_search_option_sentence: "W tym samym zdaniu",
		text_search_option_vql: "Zapytanie VQL",
		text_search_option_none_hover_help: "Użyj - w celu poprzedzenia terminów do wykluczenia.",
		text_search_option_cascade_proximity_hover_help: "Ogranicza wyniki wyszukiwania do terminów, które pojawiają się w zasięgu słów, które nie zawierają dokładnych fraz.",

		box_search_metadata: "Metadane:",
		box_search_select_template: "Wybierz szablon",
		box_search_no_templates: "Żaden szablon nie jest dostępny",
		box_text_search_options_search_within: "Zasięg wyszukiwania:",
		box_text_search_options_search_within_everything: "Wszystko",
		box_text_search_options_search_within_file_content: "Treść dokumentu",
		box_text_search_options_search_within_tags: "Znaczniki",
		box_text_search_options_limit_to: "Tylko wyszukiwanie:",

		add_property: "Dodaj właściwość",
		edit_template: "Edytuj wyszukiwanie",
		save_search: "Zapisz wyszukiwanie",
		search_template_name: "Nazwa:",
		search_template_desc: "Opis:",
		auto_run: "Uruchom wyszukiwanie, gdy jest otwarte",
		show_in_tree: "Pokaż wyszukiwanie w strukturze folderu",
		show_in_tree_hover_help: "Jeśli wyszukiwanie jest zapisane w folderze, to domyślnie jest wyświetlane tylko na liście treści. Wybranie tej opcji spowoduje, że wyszukiwanie będzie wyświetlane także w drzewie folderów w widoku przeglądania.  Jednak wyszukiwanie będzie widoczne w drzewie przeglądania, jedynie po zapisaniu go w folderze.",
		share_search_with: "Udostępnij wyszukiwanie:",
		remove_member: "Usuń ${0}",
		ok_button_label: "OK",
		save_template: "Zapisz",
		save_template_title: "Jeśli często szukasz konkretnych elementów, zapisz kryteria wyszukiwania.",
		remove_criterion: "Usuń",
		apply_button_label: "Zastosuj",
		empty_search_results_pane: "Uruchom wyszukiwanie, aby zobaczyć wyniki.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Całe repozytorium",

		repository_already_selected: "Repozytorium ${0} nie można dodać do wyszukiwania w różnych repozytoriach, ponieważ jest ono już uwzględnione w wyszukiwaniu. <br/> Repozytorium może zostać uwzględnione tylko raz w danym wyszukiwaniu w różnych repozytoriach. <br/>Wybierz inne repozytorium do uwzględnienia w wyszukiwaniu.",

		repository_limit_reached: "Repozytorium ${0} nie można dodać do wyszukiwania w wielu repozytoriach. Maksymalna liczba repozytoriów, które można dodać do wyszukiwania to ${1}.",

		nomore_criteria_toappend: "Wszystkie odwzorowane właściwości są już uwzględnione w kryteriach wyszukiwania. Do kryteriów wyszukiwania nie zostały dodane żadne właściwości.",
		nomore_criteria_toappend_regular: "Wszystkie właściwości zostały już uwzględnione w kryteriach wyszukiwania. Do kryteriów wyszukiwania nie zostały dodane żadne właściwości.",

		/* OD Save Search dialog */
		reload_label: "Przeładuj",
		od_save_search_help_text: "Wpisz nazwę wyszukiwania lub wybierz istniejące wyszukiwanie do zastąpienia",
		public_access_label: "Pozwól innym na używanie tego wyszukiwania",
		od_delete_search_help_text: "Wybierz jedno lub większą liczbę wyszukiwań do usunięcia",
		delete_save_searches: "Usuń zapisane wyszukiwania",

		/* Unified Search */
		unified_search_enable_text_search: "Uwzględnij kryteria wyszukiwania tekstowego",
		unified_search_text_search_enabled: "Uwzględnione wyszukiwanie tekstowe",
		unified_search_mapping: "Odwzorowanie",
		unified_search_new_mapping: "Nowe odwzorowanie",
		unified_search_mapping_name: "Nazwa odwzorowania",
		unified_search_mapping_dialog_instructions: "Wybierz właściwości, jakie zamierzasz odwzorować. Niektóre właściwości mogą być odwzorowane na właściwości z innym typem danych. Na przykład można odwzorować właściwość łańcuchową na właściwość, która jest liczbą całkowitą. W przypadku odwzorowywania właściwości na inną właściwość właściwości są traktowane jako jedna właściwość w wyszukiwaniu w różnych repozytoriach.",
		unified_search_filter_available_properties: "Filtruj dostępne właściwości",
		unified_search_available_properties: "Dostępne właściwości",
		unified_search_mapped_properties: "Odwzorowywane właściwości",
		unified_search_single_values: "pojedyncze wartości",
		unified_search_multiple_values: "wiele wartości",
		unified_search_add_mapping: "Dodaj odwzorowanie",
		unified_search_warn_remove_repository: "Wybrane repozytorium jest używane w kryteriach wyszukiwania.\nW przypadku usunięcia repozytorium odwzorowania i kryteria wyszukiwania uwzględniające to repozytorium zostaną usunięte.\n\nCzy chcesz usunąć repozytorium?",
		unified_search_warn_update_repository_mappings: "Zmiana wyboru właściwości dla tego repozytorium wpływa na kryteria wyszukiwania.\n\nKryteria wyszukiwania obejmują co najmniej jedno odwzorowanie zawierające co najmniej jedną z usuwanych właściwości. Wszelkie odwzorowania zawierające usuwane właściwości należy usunąć. Wszelkie kryteria wyszukiwania, które zawierają te odwzorowania, należy usunąć. Bez tego uruchomienie wyszukiwania nie będzie możliwe.\n\nCzy chcesz zmienić opcje repozytorium i usunąć odwzorowania oraz kryteria wyszukiwania?",
		unified_search_warn_update_repository_mappings_reset: "Uwzględnienie kryteriów wyszukiwania tekstowego dla tego repozytorium wpływa na kryteria wyszukiwania w różnych repozytoriach.\n\nAby można było przeprowadzić wyszukiwanie, należy usunąć wszelkie kryteria wyszukiwania właściwości zawierające odwzorowanie z właściwościami dla tego repozytorium.\n\nCzy chcesz zmienić opcje repozytorium i usunąć kryteria wyszukiwania?",
		unified_search_warn_update_repository_text_criteria: "Usunięcie kryteriów wyszukiwania tekstowego dla tego repozytorium wpływa na kryteria wyszukiwania w różnych repozytoriach.\n\nKryteria wyszukiwania tekstowego należy usunąć z kryteriów wyszukiwania w różnych repozytoriach. Bez tego uruchomienie wyszukiwania nie będzie możliwe.\n\nCzy chcesz zmienić opcję repozytorium i usunąć kryterium wyszukiwania tekstowego?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Usunięcie kryteriów wyszukiwania tekstowego i zmiana wyboru właściwości dla tego repozytorium wpływa na kryteria wyszukiwania w różnych repozytoriach.\n\nKryteria wyszukiwania tekstowego należy usunąć z kryteriów wyszukiwania w różnych repozytoriach. Bez tego uruchomienie wyszukiwania nie będzie możliwe. Ponadto kryteria wyszukiwania właściwości obejmują co najmniej jedno odwzorowanie zawierające co najmniej jedną z usuwanych właściwości. Wszelkie odwzorowania zawierające usuwane właściwości należy usunąć. Wszelkie kryteria wyszukiwania właściwości, które zawierają te odwzorowania, należy usunąć. Bez tego uruchomienie wyszukiwania nie będzie możliwe.\n\nCzy chcesz zmienić opcje repozytorium i usunąć kryteria wyszukiwania tekstowego, odwzorowania oraz kryteria wyszukiwania właściwości?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Wykluczenie kryteriów wyszukiwania tekstowego dla tego repozytorium wpływa na kryteria wyszukiwania w różnych repozytoriach.\n\nAby można było przeprowadzić wyszukiwanie, należy usunąć wszelkie kryteria wyszukiwania właściwości zawierające odwzorowanie z właściwościami dla tego repozytorium. Możliwe, że kryteria wyszukiwania tekstowego usunięto z kryteriów wyszukiwania w wielu repozytoriach, aby umożliwić przeprowadzenie wyszukiwania.\n\nCzy chcesz zmienić opcje repozytorium i usunąć kryteria wyszukiwania?",
		unified_search_warn_remove_mapping: "Usunięcie tego odwzorowania wpływa na kryteria wyszukiwania.\n\nKryteria wyszukiwania używające tego odwzorowania należy usunąć. Bez tego nie będzie możliwe uruchomienie wyszukiwania.\n\nCzy chcesz zmodyfikować odwzorowanie i usunąć kryteria wyszukiwania?",
		unified_search_warn_update_mapping: "Zmiany tego odwzorowania wpływają na kryteria wyszukiwania.\n\nKryteria wyszukiwania używające tego odwzorowania należy skasować, aby wyszukiwanie nie zawierało niepoprawnych operatorów lub wartości.\n\nCzy chcesz zmodyfikować odwzorowanie i wyczyścić kryteria wyszukiwania?",
		unified_search_warn_update_mapping_not_searchable: "Zmiany tego odwzorowania wpływają na kryteria wyszukiwania.\n\nGdy wszystkie odwzorowane właściwości są przeznaczone tylko do wyświetlania, nie można użyć odwzorowania w kryterium wyszukiwania. Kryteria wyszukiwania, które używają tego odwzorowania, należy usunąć. Bez tego uruchomienie wyszukiwania nie będzie możliwe.\n\nCzy chcesz zmienić odwzorowanie i usunąć kryteria wyszukiwania?",
		unified_search_warn_update_mapping_box_searchable: "Zmiany tego odwzorowania wpływają na kryteria wyszukiwania.\n\nKryteria wyszukiwania zawierają już to odwzorowanie wymienione więcej niż raz, a jeśli dodasz właściwość ${0} z repozytorium ${1}, kryteria wyszukiwania będą zawierać zbyt wiele odwołań do właściwości ${0}. Kryteria wyszukiwania, które używają tego odwzorowania, należy usunąć. Bez tego uruchomienie wyszukiwania nie będzie możliwe.\n\nCzy chcesz zmienić odwzorowanie i usunąć kryteria wyszukiwania?",
		unified_search_details: "Szczegóły wyszukiwania w różnych repozytoriach",
		unified_search_fixed_value_property: "Właściwość o stałej wartości",
		unified_search_required_property: "Wymagana właściwość",
		unified_search_display_only_property: "Właściwość tylko do wyświetlania",
		unified_search_missing_required_properities: "Wyszukiwania nie można zapisać ani uruchomić.<br/>Następujące właściwości są wymagane:${0}Musisz uwzględnić te właściwości w odwzorowaniu i dodać właściwości z wartościami do kryteriów wyszukiwania.",
		unified_search_property_repostory: "${0} (Repozytorium: ${1})",
		unified_search_builder_no_mappings: "Nie można uruchomić wyszukiwania.<br/>Należy utworzyć odwzorowanie właściwości i uwzględnić je na <b>Ekranie wyników</b>, aby wyniki były wyświetlane.",
		unified_search_builder_insufficient_criteria_to_run: "Nie można uruchomić wyszukiwania.<br/>Kryteria wyszukiwania nie uwzględniają kryteriów wyszukiwania tekstowego lub wartości właściwości dla następujących repozytoriów:${0}Dla każdego repozytorium uwzględnionego w wyszukiwaniu należy wprowadzić kryterium wyszukiwania tekstowego albo utworzyć odwzorowanie właściwości, uwzględnić je w kryterium właściwości i określić wartość właściwości.",
		unified_search_builder_insufficient_criteria_to_save: "Nie można zapisać wyszukiwania.<br/>Wyszukiwanie nie zawiera kryteriów dla następujących repozytoriów:${0}Dla każdego repozytorium uwzględnionego w wyszukiwaniu należy zastosować jedną z opcji:<ol><li>Utworzyć odwzorowanie właściwości i uwzględnić je w kryterium właściwości.</li><li>Zmodyfikować repozytorium tak, by uwzględniało kryteria wyszukiwania tekstowego, utworzyć odwzorowanie właściwości i uwzględnić je na <b>Ekranie wyników</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Nie można uruchomić wyszukiwania.<br/>Dla każdego repozytorium uwzględnionego w wyszukiwaniu należy określić co najmniej jedną wartość właściwości. Można na przykład określić wartości następujących właściwości: ${0}",
		unified_search_runtime_insufficient_criteria_text: "Nie można uruchomić wyszukiwania.<br/>Wymagane są kryteria wyszukiwania tekstowego.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Nie można uruchomić wyszukiwania.<br/>Dla każdego repozytorium uwzględnionego w wyszukiwaniu należy określić co najmniej jedną wartość właściwości lub wprowadzić kryteria wyszukiwania tekstowego. Można na przykład określić wartości następujących właściwości: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Nie można uruchomić wyszukiwania.<br/>Wymagane są kryteria wyszukiwania tekstowego. Dla każdego repozytorium uwzględnionego w wyszukiwaniu należy określić co najmniej jedną wartość właściwości lub wprowadzić kryteria wyszukiwania tekstowego. Można na przykład określić wartości następujących właściwości: ${0}",
		unified_search_invalid_criteria: "Wyszukiwanie zawiera niepoprawne kryteria uniemożliwiające uruchomienie go.<br/>Niepoprawne kryteria zostały usunięte. Należy jednak zapisać zmiany, zanim będzie możliwe uruchomienie wyszukiwania. Jeśli nie chcesz zapisywać zmian, zamknij wyszukiwanie.<br/><br/>Następujące elementy zostały usunięte lub zmodyfikowane:${0}",
		unified_search_invalid_fixed_values: "Wyszukiwania nie można zapisać ani uruchomić.<br/>Następujące kryteria wyszukiwania mają wartości stałe, które nie są poprawne: ${0} Aby rozwiązać problem, wykonaj jedną z następujących czynności:<ul><li>Usuń kryteria wyszukiwania, które zawierają niepoprawne wartości.</li><li>Przeprowadź edycję odwzorowań, które zawierają właściwość programu IBM Content Manager OnDemand ze stałą wartością, tak aby usunąć właściwość.</li><li>Przeprowadź edycję odwzorowań, które zawierają właściwość programu IBM Content Manager OnDemand ze stałą wartością, tak aby wszystkie właściwości były zgodne. Dodatkowe informacje na temat właściwości, jakie mogą być odwzorowywane, można uzyskać, korzystając z odsyłacza Więcej informacji w tekście wprowadzenia w górnej części okna Odwzorowanie właściwości.</li></ul>",
		unified_search_cannot_add_properties: "Nie można dodać właściwości do tego wyszukiwania.<br/>Wszystkie dostępne odwzorowane właściwości są już uwzględnione w kryteriach wyszukiwania, a każdą właściwość można dodać do wyszukiwania tylko raz.",
		unified_search_mapping_not_viewable: "Właściwości szablonu Box nie mogą być wyświetlane w wynikach wyszukiwania. Aby dodać to mapowanie jako kolumnę, należy odwzorować co najmniej jedną właściwość, która nie jest właściwością szablonu Box. Można na przykład wybrać właściwość z innego repozytorium.",

		unified_search_returned_more: "Z co najmniej jednego repozytorium zwróconych zostało więcej wyników, niż jest to dozwolone.",
		unified_search_partial_failure: "W co najmniej jednym repozytorium wystąpił błąd.",
		unified_search_partial_failure_and_returned_more: "W co najmniej jednym repozytorium wystąpił błąd i z co najmniej jednego repozytorium zwróconych zostało więcej wyników, niż jest to dozwolone.",
		unified_search_see_analysis: "Zobacz analizę wyników.",
		unified_search_analysis_intro_returned_more: "Dla każdego repozytorium, z którego zwrócono zbyt wiele wyników, spróbuj zawęzić kryteria wyszukiwania, tak by ograniczyć liczbę wyników. Możesz także przeprowadzić wyszukiwanie w jednym repozytorium, aby uzyskać więcej wyników niż jest to dozwolone przy wyszukiwaniu w wielu repozytoriach.",
		unified_search_analysis_intro_partial_failure: "Przejrzyj informacje o błędach zwrócone przez repozytorium lub repozytoria. Jeśli ma to zastosowanie, rozwiąż występujące błędy i uruchom ponownie wyszukiwanie w różnych repozytoriach.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Dla każdego repozytorium, w którym wystąpił błąd, spróbuj rozwiązać problem i ponownie uruchomić wyszukiwania.<br/><br/>Dla każdego repozytorium, z którego zwrócono zbyt wiele wyników, spróbuj zawęzić kryteria wyszukiwania, tak by ograniczyć liczbę wyników. Możesz także przeprowadzić wyszukiwanie w jednym repozytorium, aby uzyskać więcej wyników niż jest to dozwolone przy wyszukiwaniu w wielu repozytoriach.",
		unified_search_results_found: "Znalezione wyniki",
		unified_search_maximum_allowed: "Dozwolone maksimum",
		unified_search_maximum_exceeded: "Przekroczono maksimum",

		unified_search_mapping_rule_box: "Nie można dodać właściwości do odwzorowania.<p>Właściwość ${0} z repozytorium ${1} jest już obecna w innym odwzorowaniu, a właściwości z tego repozytorium podlegające wyszukiwaniu mogą być obecne tylko w jednym odwzorowaniu w danym wyszukiwaniu.<br/>Wybierz inną właściwość, aby dodać ją do odwzorowania.</p>",
		unified_search_mapping_rule_repository: "Nie można dodać właściwości do odwzorowania.<br/>Odwzorowanie obejmuje już właściwość z repozytorium ${0}. Odwzorowanie może obejmować tylko jedną właściwość z repozytorium.<br/>Wybierz inne repozytorium, z którego ma zostać dodana właściwość, lub utwórz nowe odwzorowanie dla wybranej właściwości.",
		unified_search_mapping_rule_data_type: "Nie można dodać właściwości do odwzorowania.<br/>Właściwość ${0} nie może zostać odwzorowana na właściwość ${1}. Wybierz inną właściwość do odwzorowania lub utwórz nowe odwzorowanie dla wybranej właściwości.<br/>Dodatkowe informacje na temat właściwości, jakie mogą być odwzorowywane, można uzyskać, korzystając z odsyłacza Więcej informacji w tekście wprowadzenia w górnej części tego okna.",
		unified_search_mapping_rule_cardinality: "Nie można dodać właściwości do odwzorowania.<br/>Wszystkie właściwości w odwzorowaniu muszą obsługiwać jedną lub więcej wartości. Wybrana właściwość obsługuje ${0}, zaś właściwości w odwzorowaniu obsługują ${1}.<br/>Wybierz inną właściwość do dodania do odwzorowania lub utwórz nowe odwzorowanie dla wybranej właściwości.",
		unified_search_mapping_rule_fixed_value: "Nie można dodać właściwości do odwzorowania.<br/>Odwzorowanie obejmuje już właściwość o stałej wartości. Odwzorowanie może obejmować tylko jedną właściwość o stałej wartości.<br/>Wybierz inną właściwość do dodania do odwzorowania lub utwórz nowe odwzorowanie dla wybranej właściwości.",
		unified_search_mapping_rule_child_component: "Nie można dodać właściwości do odwzorowania.<br/>Właściwości z komponentem podrzędnym nie można odwzorować na inne właściwości. Aby możliwe było wyszukiwanie w tej właściwości, utwórz nowe odwzorowanie dla wybranej właściwości.",
		unified_search_mapping_rule_operator_intersection: "Nie można dodać właściwości do odwzorowania.<br/>Wszystkie właściwości w odwzorowaniu muszą mieć jeden lub więcej wspólnych operatorów. Właściwość ${0} nie zawiera jednak żadnych operatorów wspólnych z innymi właściwościami odwzorowania.<br/>Wybierz inną właściwość, o ile ma ona zastosowanie. Jeśli musisz uwzględnić wybraną właściwość, dokonaj we współpracy z administratorem systemu edycji operatorów powiązanych z właściwością.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Ustawienia zaawansowane",
		advanced_search_options_intro: "Ustaw zaawansowane opcje kryteriów.",
		advanced_search_options_editable: "Dostępne do edycji",
		advanced_search_options_readonly: "Tylko do odczytu",
		advanced_search_options_required: "Wymagane",
		advanced_search_options_hidden: "Ukryte",
		advanced_search_options_property_editable:"Właściwość to:",
		advanced_search_options_operators:"Operatory:",
		advanced_search_options_use_all:"Użyj wszystkich",
		advanced_search_options_use_selected:"Użyj wybranych",
		advanced_search_options_operators_filtered: "Odfiltrowano operatorów",
		// Data types in lowercase
		data_type_boolean: "boolowskie",
		data_type_date: "data",
		data_type_time: "godzina",
		data_type_timestamp: "znacznik czasu",
		data_type_decimal: "wartość dziesiętna",
		data_type_double: "liczba zmiennopozycyjna",
		data_type_short: "liczba całkowita",
		data_type_integer: "liczba całkowita",
		data_type_long: "liczba całkowita",
		data_type_string: "łańcuch tekstowy",
		data_type_string_alpha: "łańcuch alfabetyczny",
		data_type_string_alphanum: "łańcuch alfanumeryczny",
		data_type_string_ext: "rozszerzony łańcuch alfanumeryczny",
		data_type_string_num: "łańcuch liczbowy",
		data_type_binary: "binarne",
		data_type_object: "obiekt",
		data_type_guid: "identyfikator unikalny globalnie",
		data_type_user: "użytkownicy",
		data_type_child_component: "komponent podrzędny",

		/* Print Dialog */
		print_title: "Drukuj",
		print_message: "Drukowanie: ${0}",
		print_print_button: "Drukuj",
		print_clean_margins_button: "Ustaw wszystkie na 0",
		print_type: "Typ drukarki:",
		print_printer_server_options: "Opcje serwera drukowania",
		print_printer_properties: "Właściwości drukarki",
		print_printer_fax_properties: "Właściwości faksu",
		print_printer_name: "Nazwa drukarki:",
		print_fax_recipient: "Odbiorca",
		print_fax_sender: "Nadawca",
		print_copies: "Kopie:",
		print_local_orientation: "Orientacja",
		print_local_orientation_landscape: "Wydruk poziomy",
		print_local_orientation_portrait: "Wydruk pionowy",
		print_local_margins: "Marginesy",
		print_local_margins_top: "Góra",
		print_local_margins_bottom: "Dół",
		print_local_margins_left: "Lewo",
		print_local_margins_right: "Prawo",
		print_printer_server: "Serwer",
		print_printer_local: "Lokalnie",
		print_property_class: "Klasa:",
		print_property_routing: "Routing:",
		print_property_pagedef: "Def.strony:",
		print_property_node: "Węzeł:",
		print_property_writer: "Program piszący:",
		print_property_formdef: "Def.form.:",
		print_property_printerid: "Cel:",
		print_property_forms: "Formularze:",
		print_property_faxnotes: "Uwagi:",
		print_property_faxcompany: "Firma:",
		print_property_faxnumber: "Nr faksu:",
		print_property_faxname: "Nazwa:",
		print_property_faxsendertelnumber: "Nr telefonu:",
		print_property_faxcoverpage: "Strona tytułowa:",
		print_property_faxsubject: "Temat:",
		print_saveoptions: "Zapisz opcje drukowania",
		print_property_bannerpage: "Użyj strony baneru",
		print_print_with_info_fields: "Drukuj wraz z polami informacyjnymi",
		print_field_from: "Od",
		print_field_to: "Do",
		print_invalid_value_class: "Poprawne znaki: A-Z lub 0-9",
		print_invalid_value_pagedef: "Poprawne znaki to znaki alfabetu, znaki liczbowe lub znaki @, #, $",
		print_invalid_value_writer: "Poprawne znaki to znaki alfabetu, znaki liczbowe lub znaki @, #, $",
		print_invalid_value_formdef: "Poprawne znaki to znaki alfabetu, znaki liczbowe lub znaki @, #, $",
		print_invalid_value_forms: "Poprawne znaki to znaki alfabetu, znaki liczbowe lub znaki @, #, $",
		print_invalid_value_margin: "Poprawne znaki należą do zakresu od ${0} do ${1}",
		print_status_message: "Dokumenty w liczbie ${0} przesłane do drukarki ${1}.",

		print_applet_init_error: "Nie można uruchomić apletu drukowania.",
		print_applet_init_error_explanation: "Ten problem może wystąpić z następujących przyczyn: <br/><br/><ul><li>Środowisko wykonawcze programów Java (JRE) nie jest zainstalowane na stacji roboczej.</li><li>Wtyczka Java nie jest włączona w przeglądarce WWW.</li><li>Wersja środowiska JRE na stacji roboczej jest niekompatybilna z wersją programu IBM Content Navigator.</li><li>W przeglądarce został przekroczony limit czasu oczekiwania na uruchomienie apletu drukowania.</li></ul>",
		print_applet_init_error_userResponse: "Możesz wykonać następujące kroki, aby rozwiązać problem ze środowiskiem JRE:<br/><br/><ol><li>Upewnij się, że środowisko JRE jest zainstalowane na stacji roboczej.</li><li>Upewnij się, że wtyczka Java jest włączona w przeglądarce WWW.</li><li>Upewnij się, że wersja środowiska JRE na stacji roboczej jest kompatybilna z programem IBM Content Navigator, i spróbuj ponownie. Lista obsługiwanych wersji jest zamieszczona w dokumencie <i>Hardware and software prerequisites for IBM Content Navigator</i> (Wymagania sprzętowe i programowe dla produktu IBM Content Navigator) w witrynie działu wsparcia IBM dla oprogramowania.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Strona tytułowa",
		daeja_print_selected_documents_title: "Wybrane dokumenty",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Dopasuj wszystkie kryteria wyszukiwania",
		match_any_criteria: "Dopasuj dowolne kryteria wyszukiwania",
		include_subfolders_summary: "${0} (uwzględnij podfoldery)",
		browse_button: "Przeglądaj&hellip;",
		search_for: "Wyszukaj:",
		object_type_documents: "Dokumenty",
		object_type_folders: "Foldery",
		object_type_documents_folders: "Dokumenty i foldery",
		object_type_web_links: "Odsyłacze WWW",
		object_type_documents_folders_web_links: "Dokumenty, foldery i odsyłacze WWW",

		/* SelectSearchFolderDialog */
		search_in: "Szukaj w:",
		include_subfolders: "Uwzględnij podfoldery",

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
		locked_item_icon_title: "Zablokowane przez ${0}",
		checked_out_icon_title: "Pobrane przez ${0}",
		major_minor_version_icon_title: "Wersja główna z wersjami podrzędnymi",
		suspended_icon_title: "Przepływ pracy jest zawieszony",
		on_hold_icon_title: "Wstrzymane",
		has_notes_icon_title: "Zawiera uwagi",
		record_icon_title: "Zadeklarowane jako akta",
		compound_document_icon_title: "Dokument złożony",
		validateTemplate_icon_title: "Szablon obszaru zespołu wymaga sprawdzenia poprawności",
		offlineTemplate_icon_title: "Szablon obszaru zespołu jest nieaktywny",
		offlineTeamspace_icon_title: "Obszar zespołu jest nieaktywny",
		pending_delete_icon_title: "Obszar zespołu oczekuje na usunięcie",
		delete_error_icon_title: "Nie można usunąć obszaru zespołu",
		defaultTemplate_icon_title: "Domyślny szablon obszaru zespołu",
		teamspace_icon_title: "Obszar zespołu",
		teamspace_template_icon_title: "Szablon obszaru zespołu",
		has_bookmark_icon_title: "Ma zakładkę",
		read_only_icon_title: "Tylko do odczytu",
		no_results_were_found: "Nie znaleziono wyników.",
		folder_is_empty: "Folder jest pusty.",
		no_checked_out_items: "Nie masz pobranych elementów.",
		inbasket_is_empty: "Koszyk zadań jest pusty.",
		worklist_is_empty: "Lista prac jest pusta.",
		tracker_milestone_completed: "Zakończone",
		stepprocessor_attachments_title: "Zawartość",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Zablokuj elementy",
		unlock_items: "Odblokuj elementy",
		checkin_item: "Wprowadź/zwróć element",

		/* Help */
		learn_more: "Więcej informacji",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Otwórz obszar zespołu",
		repository_tab_createWorkspace: "Nowy obszar zespołu",
		repository_tab_createWorkspaceTemplate: "Nowy szablon obszaru zespołu",
		repository_tab_DefaultTemplate: "Domyślnie",

		/* Cross repository document copy */
		documentCopyTaskDescription: "To zadanie kopiuje dokumenty.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Nie masz uprawnień do edycji wybranego szablonu obszaru zespołu.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Czy na pewno chcesz usunąć obszar zespołu ${0}? <br><br>W repozytorium pozostaną tylko dokumenty umieszczone w innych folderach repozytorium. Wszelkie dokumenty umieszczone tylko w obszarze zespołu zostaną usunięte.",
		teamspaceDecommissionLabel: "Usuń:",
		teamspaceDecommissionDescription: "Usunięcie tego obszaru zespołu spowoduje jego usunięcie z serwera: określ sposób postępowania z artefaktami obszaru zespołu.",
		teamspaceDecommissionOptions: "Opcje usuwania obszaru zespołu",
		teamspaceDecommissionDeleteAll: "Usuń wszystkie artefakty obszaru zespołu",
		teamspaceDecommissionReFileAll: "Umieść ponownie w folderze wszystkie artefakty obszaru zespołu",
		teamspaceDecommissionReFileDestination: "Przenieś do:",
		teamspaceDecommissionReFileIn: "Umieść ponownie w",
		teamspaceDecommissionTaskName: "Zadanie usuwania obszaru zespołu",
		teamspaceDecommissionTaskDescription: "To zadanie usuwa obszar zespołu z repozytorium.",
		teamspaceDecommissionDeletionStarted: "Zaplanowano usunięcie tego obszaru zespołu.",
		teamspaceDecommissionDeletionConnectionFailed: "Zadanie usunięcia obszaru zespołu nie mogło zostać uruchomione, ponieważ nie było możliwe nawiązanie połączenia z repozytorium. Upewnij się, że dane uwierzytelniające administratora repozytorium są poprawne.",

		teamspace_edit_properties_notsupported: "Właściwości obszarów zespołów można edytować wyłącznie z poziomu widoku Obszary zespołu.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "Obszar zespołu jest w trybie bez połączenia i może zostać otwarty tylko przez właścicieli obszaru zespołu.",

		/* Teamspace Builder widget */
		workspace_validation_document: "Dokument:",
		workspace_validation_folder: "Folder:",
		workspace_validation_ets: "Następujące szablony wprowadzania są niedostępne w tym repozytorium i zostały usunięte z listy wybranych szablonów wprowadzania:",
		workspace_validation_classes: "Następujące klasy są niedostępne w tym repozytorium i zostały usunięte z listy wybranych klas:",
		workspace_validation_searches: "Następujące wyszukiwania nie są dostępne w tym repozytorium i zostały usunięte z listy wybranych wyszukiwań:",
		workspace_validation_docs_folders: "Poniższe dokumenty i foldery są niedostępne w tym repozytorium i zostały usunięte z listy uwzględnionych elementów:",
		workspace_change_template_confirmation_question: "W przypadku wybrania innego szablonu wszystkie zmiany zostaną utracone. Czy kontynuować?\n",
		workspace_delete_item_confirmation_question: "Czy chcesz usunąć pozycję ${0}?\n",
		workspace_delete_role_confirmation_question: "Czy chcesz usunąć rolę ${0}?\n",
		workspace_delete_confirmation_question: "W przypadku usunięcia obszaru zespołu usuwany jest tylko kontener obszaru zespołu. Foldery i dokumenty w obszarze zespołu pozostają w repozytorium i można je znaleźć, uruchamiając wyszukiwanie. W celu usunięcia treści obszaru zespołu najpierw usuń elementy w obszarze zespołu, a następnie usuń obszar zespołu.<br><br>Czy chcesz usunąć obszar zespołu ${0}?",
		workspacebuilder_instance_template_name_header: "Nazwa szablonu obszaru zespołu",
		workspacebuilder_instance_template_description_header: "Opis",

		workspacebuilder_template_tooltip_name: "Nazwa szablonu nie może zawierać żadnego z następujących znaków: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Nazwa obszaru zespołu nie może zawierać żadnego z następujących znaków: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Wprowadź opis, dzięki któremu użytkownicy dokonają poprawnego wyboru z listy szablonów. Na przykład: można uwzględnić informacje na temat wyznaczonych użytkowników lub zastosowania szablonu.",
		workspacebuilder_instance_tooltip_description: "Wprowadź opis, który ułatwi użytkownikom odróżnienie tego obszaru zespołu od innych obszarów zespołu.",

		workspacebuilder_template_edit_properties_pane: "Edytuj szablon obszaru zespołu",
		workspacebuilder_instance_properties_pane: "Zdefiniuj obszar zespołu",
		workspacebuilder_template_properties_pane: "Zdefiniuj szablon obszaru zespołu",

		workspacebuilder_instance_security_pane: "Ustaw zabezpieczenia obszaru zespołu",
		workspacebuilder_template_security_pane: "Ustaw zabezpieczenia szablonu",

		workspacebuilder_layout_pane: "Wybierz układ",
		workspacebuilder_search_templates_pane: "Wybierz wyszukiwania",
		workspacebuilder_document_folders_pane: "Uwzględnij foldery i dokumenty",
		workspacebuilder_doctypes_entryTemplates_pane: "Wybierz klasy lub szablony wprowadzania",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Wybierz klasy",
		workspacebuilder_security: "Zabezpieczenia obszaru zespołu",

		workspacebuilder_roles_pane: "Wybierz role",
		workspacebuilder_security: "Zabezpieczenia",

		workspacebuilder_properties_templates: "Dostępne szablony:",
		workspacebuilder_available_templates: "Dostępne wyszukiwania:",
		workspacebuilder_selected_templates: "Wybrane wyszukiwania:",
		workspacebuilder_templates_name: "Nazwa wyszukiwania",

		workspacebuilder_available_entryTemplates: "Dostępne szablony wprowadzania:",
		workspacebuilder_selected_entryTemplates: "Wybrane szablony wprowadzania:",

		workspacebuilder_item_classes: "Dostępne klasy:",
		workspacebuilder_item_classes_selected: "Wybrane klasy:",
		workspacebuilder_properties_select_template: "Wybierz szablon do użycia dla tego obszaru zespołu.",
		workspacebuilder_template_properties: "Zdefiniuj szablon obszaru zespołu",
		workspacebuilder_instance_properties: "Zdefiniuj obszar zespołu",
		workspacebuilder_template_introText: "Określ komponenty wspólne, które zamierzasz dołączyć do każdego obszaru zespołu utworzonego na podstawie tego szablonu, za pomocą opcji dostępnych w nawigacji. Po zakończeniu kliknij przycisk <b>Zakończ</b>, aby udostępnić szablon innym użytkownikom, którzy mogą go wykorzystać w celu tworzenia nowych obszarów zespołów.",
		workspacebuilder_instance_introText: "Zespoły korzystają z obszarów zespołów w celu udostępniania i pracy z konkretnymi zestawami dokumentów. Wprowadź charakterystyczną nazwę i opis dla tego obszaru zespołu, aby umożliwić użytkownikom odróżnienie go od innych obszarów zespołu. Obszar zespołu można skonfigurować, dołączając dodatkowe wyszukiwania, klasy oraz szablony wprowadzania, dokumenty i foldery.",

		workspacebuilder_template_search_template_introText: "Wybierz domyślne wyszukiwania, które mają być uwzględnione we wszystkich obszarach zespołów tworzonych na podstawie tego szablonu. Jeśli nie zostaną wybrane żadne wyszukiwania, użytkownik obszaru będzie widział wszystkie wyszukiwania, do których ma dostęp. Mając odpowiednie uprawnienia, użytkownicy mogą udostępniać i dodawać wyszukiwania do obszaru zespołu.",
		workspacebuilder_instance_search_template_introText: "Dołącz wyszukiwania, dzięki którym użytkownicy obszarów zespołu będą mogli wykonywać zadania z większą wydajnością. Jeśli żadne wyszukiwania nie zostaną wybrane, wówczas dla użytkowników obszaru zespołu będą widoczne wszystkie wyszukiwania, do których mają dostęp. Użytkownicy również mogą dodawać i udostępniać wyszukiwania w obszarze zespołu, pod warunkiem że mają odpowiednie uprawnienia.",

		workspacebuilder_template_roles_introText: "Użytkownicy obszaru zespołu są przypisani do ról. Role określają zadania, które mogą wykonywać użytkownicy. Aby wyświetlić te zadania, klikaj ikony obok poszczególnych ról. Wybierz role odpowiednie dla obszaru zespołu.",
		workspacebuilder_template_roles_modify_introText: "Możesz zmodyfikować uprawnienia powiązane z każdą z ról z tego obszaru zespołu. Należy powiadomić członków obszaru zespołu o zmianie ich uprawnień.",

		workspacebuilder_template_roles_header_name: "Nazwa roli",

		workspacebuilder_template_folders_introText: "Wybierz domyślne dokumenty i foldery do dołączenia do każdego obszaru zespołu, który zostanie utworzony z tego szablonu. Dokumenty można dodawać jako dowiązania lub jako kopie. Użyj dowiązań, aby wskazać na dokumenty, których nie zamierzasz kopiować - dotyczy to na przykład strategii i procedur. Utwórz kopie dokumentów, które użytkownicy będą modyfikować, np. szablony i formularze.",
		workspacebuilder_instance_folders_introText: "Wybierz domyślne dokumenty i foldery do uwzględnienia w obszarze zespołu. Dokumenty można dodawać jako dowiązania lub jako kopie. Użyj dowiązań, aby wskazać na dokumenty, których nie zamierzasz kopiować - dotyczy to na przykład strategii i procedur. Utwórz kopie dokumentów, które użytkownicy będą modyfikować, np. szablony i formularze.",

		workspacebuilder_template_roles_introText: "Określ role, które mają być uwzględniane w każdym obszarze zespołu tworzonym na podstawie tego szablonu. Możesz również utworzyć nowe role, które mogą być następnie używane do tworzenia innych szablonów obszarów zespołów.",
		workspacebuilder_instance_users_introText: "W obszarze zespołu każdy użytkownik jest przypisany do jednej lub większej liczby ról, które określają zadania, jakie może wykonywać użytkownik. Dodaj użytkowników do obszaru zespołu i przypisz role każdemu użytkownikowi.",

		workspacebuilder_instance_navigation_pane_title: "Program budujący obszary zespołu",
		workspacebuilder_template_navigation_pane_title: "Program budujący szablon obszaru zespołu",

		workspacebuilder_roles_roles_nopermissions: "Nie wybrano uprawnień dla roli {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Wybrane role:",
		workspacebuilder_roles_available_roles: "Dostępne role:",
		workspacebuilder_roles_privilege_header: "Uprawnienie",
		workspacebuilder_roles_select_role: "Wybierz rolę",
		workspacebuilder_roles_select_permission: "Wybierz uprawnienie",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Rola o nazwie {0} już istnieje. Należy określić unikalną nazwę dla roli. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nazwa roli:",
		workspacebuilder_roles_edit_dialog_role_description: "Opis roli:",
		workspacebuilder_roles_edit_dialog_title_new: "Nowa rola",
		workspacebuilder_roles_edit_dialog_title_edit: "Edytuj rolę",

		workspacebuilder_roles_privileges_header: "Uprawnienia dla roli {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Uprawnienia dot. dokumentu:",
		workspacebuilder_roles_priv_group_folder: "Uprawnienia dot. folderu:",
		workspacebuilder_roles_priv_group_teamspace: "Uprawnienia dot. obszaru zespołu:",
		workspacebuilder_roles_priv_group_item: "Uprawnienia dot. dokumentu i folderu:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Zarządzanie uprawnieniami",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Użytkownicy posiadający to uprawnienie mogą zarządzać dostępem do dokumentów i folderów w obszarze zespołu. To uprawnienie obejmuje zezwalanie innym użytkownikom na usuwanie, edytowanie właściwości folderów, tworzenie podfolderów itp.",

		workspacebuilder_roles_priv_deleteItems: "Usuń",
		workspacebuilder_roles_plbl_deleteItems: "Użytkownicy posiadający to uprawnienie mogą usuwać dokumenty i foldery w obszarze zespołu.",

		workspacebuilder_roles_priv_createItems: "Utwórz",
		workspacebuilder_roles_plbl_createItems: "Użytkownicy posiadający to uprawnienie mogą tworzyć dokumenty i foldery w obszarze zespołu.",

		workspacebuilder_roles_priv_viewItemProperties: "Wyświetlanie właściwości",
		workspacebuilder_roles_plbl_viewItemProperties: "Użytkownicy posiadający to uprawnienie mogą wyświetlać właściwości dokumentów i folderów w obszarze zespołu, co obejmuje również właściwości systemowe.",

		workspacebuilder_roles_priv_modifyItemProperties: "Edytowanie właściwości",
		workspacebuilder_roles_plbl_modifyItemProperties: "Użytkownicy posiadający to uprawnienie mogą edytować właściwości dokumentów i folderów w obszarze zespołu.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Zarządzanie uprawnieniami dot. folderu",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Użytkownicy posiadający to uprawnienie mogą zarządzać dostępem do folderów w obszarze zespołu. To uprawnienie obejmuje zezwalanie innym użytkownikom na usuwanie folderów, edytowanie właściwości folderów, tworzenie podfolderów itp.",

		workspacebuilder_roles_priv_deleteFolders: "Usuwanie folderów",
		workspacebuilder_roles_plbl_deleteFolders: "Użytkownicy posiadający to uprawnienie mogą usuwać foldery w obszarze zespołu.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Edytowanie właściwości folderu",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Użytkownicy posiadający to uprawnienie mogą edytować właściwości folderów w obszarze zespołu.",

		workspacebuilder_roles_priv_createSubfolders: "Tworzenie podfolderów",
		workspacebuilder_roles_plbl_createSubfolders: "Użytkownicy posiadający to uprawnienie mogą tworzyć foldery w obszarze zespołu.",

		workspacebuilder_roles_priv_fileInFolders: "Dodawanie do folderów",
		workspacebuilder_roles_plbl_fileInFolders: "Użytkownicy posiadający to uprawnienie mogą dodawać dowiązania z folderów w obszarze zespołu do dokumentów.",

		workspacebuilder_roles_priv_viewFolderProperties: "Wyświetlanie właściwości folderów",
		workspacebuilder_roles_plbl_viewFolderProperties: "Użytkownicy posiadający to uprawnienie mogą wyświetlać właściwości folderów w obszarze zespołu, co obejmuje również właściwości systemowe.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Zarządzanie uprawnieniami dot. dokumentów",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Użytkownicy posiadający to uprawnienie mogą zarządzać dostępem do dokumentów w obszarze zespołu. To uprawnienie obejmuje zezwalanie innym użytkownikom na usuwanie dokumentów, edytowanie właściwości dokumentów itp.",

		workspacebuilder_roles_priv_deleteDocuments: "Usuwanie dokumentów",
		workspacebuilder_roles_plbl_deleteDocuments: "Użytkownicy posiadający to uprawnienie mogą usuwać dokumenty w obszarze zespołu.",

		workspacebuilder_roles_priv_promoteVersions: "Awansowanie wersji",
		workspacebuilder_roles_plbl_promoteVersions: "Użytkownicy posiadający to uprawnienie mogą przypisywać nowe numery wersji do dokumentów w obszarze zespołu.",

		workspacebuilder_roles_priv_modifyContent: "Edytowanie dokumentów",
		workspacebuilder_roles_plbl_modifyContent: "Użytkownicy posiadający to uprawnienie mogą edytować treść dokumentów w obszarze zespołu.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Edytowanie właściwości dokumentów",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Użytkownicy posiadający to uprawnienie mogą edytować właściwości dokumentów w obszarze zespołu.",

		workspacebuilder_roles_priv_viewContent: "Wyświetlanie dokumentów",
		workspacebuilder_roles_plbl_viewContent: "Użytkownicy posiadający to uprawnienie mogą wyświetlać dokumenty w obszarze zespołu.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Wyświetlanie właściwości dokumentów",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Użytkownicy posiadający to uprawnienie mogą wyświetlać właściwości dokumentów w obszarze zespołu, co obejmuje również właściwości systemowe.",

		workspacebuilder_roles_priv_addNewSearches: "Dodawanie wyszukiwań",
		workspacebuilder_roles_plbl_addNewSearches: "Użytkownicy posiadający to uprawnienie mogą dodawać wyszukiwania w obszarze zespołu. Domyślnie wyszukiwanie nie jest dostępne dla innych użytkowników.",

		workspacebuilder_roles_priv_createNewSearches: "Utwórz wyszukiwania",
		workspacebuilder_roles_plbl_createNewSearches: "Użytkownicy posiadający to uprawnienie mogą tworzyć nowe wyszukiwania, lecz nie mogą zapisywać wyszukiwań. Jeśli użytkownicy nie posiadają tego uprawnienia, nie mogą oni dodać dokumentów znajdujących się już w repozytorium do obszaru zespołu.",

		workspacebuilder_roles_priv_shareSearches: "Udostępnianie wyszukiwań",
		workspacebuilder_roles_plbl_shareSearches: "Użytkownicy posiadający to uprawnienie mogą udostępniać wyszukiwania innym użytkownikom obszaru zespołu.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Zarządzanie klasami lub szablonami wprowadzania",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Użytkownicy posiadający to uprawnienie mogą dodawać i usuwać klasy oraz szablony wyszukiwania w obszarze zespołu.",

		workspacebuilder_roles_priv_addRemoveClasses: "Zarządzaj klasami",
		workspacebuilder_roles_plbl_addRemoveClasses: "Użytkownicy posiadający to uprawnienie mogą dodawać i usuwać klasy z obszarów zespołów.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Zarządzanie użytkownikami obszaru zespołu",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Użytkownicy posiadający to uprawnienie mogą dodawać i usuwać użytkowników oraz grupy z obszaru zespołu. Ponadto mogą zarządzać rolami, do których użytkownicy są przypisywani.",

		workspacebuilder_roles_priv_modifyRoles: "Modyfikuj role",
		workspacebuilder_roles_plbl_modifyRoles: "Właściciele posiadający to uprawnienie mogą modyfikować uprawnienia ról dla obszaru zespołu. To uprawnienie jest dostępne tylko dla właścicieli.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Wybierz użytkowników",
		workspacebuilder_users_add_users_and_groups_button: "Dodaj użytkowników i grupy...",
		workspacebuilder_users_users_or_group_header: "Użytkownik i grupa",
		workspacebuilder_users_roles_header: "Role",

		workspacebuilder_users_role_header: "Rola",
		workspacebuilder_users_role_no_permissions: "Ta rola nie ma uprawnień",
		workspacebuilder_users_available_roles_label: "Dostępne role:",
		workspacebuilder_users_selected_users_and_groups_label: "Wybrani użytkownicy i grupy:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Nie można zapisać obszaru zespołu. Należy określić co najmniej jednego właściciela dla tego obszaru zespołu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Nie można zapisać obszaru zespołu. Wszystkim użytkownikom należy przypisać rolę.",
		// end of select users

		workspacebuilder_search_templates: "Wybierz wyszukiwania",
		workspacebuilder_search_add: "Dodaj wyszukiwanie",
		workspacebuilder_properties_workspaceName: "Nazwa obszaru zespołu:",
		workspacebuilder_properties_templateName: "Nazwa szablonu:",
		workspacebuilder_properties_workspaceDescription: "Opis obszaru zespołu:",
		workspacebuilder_properties_templateDescription: "Opis szablonu:",
		workspacebuilder_properties_workspaceTemplate: "Wybrany szablon:",
		workspacebuilder_properties_security: "Udostępnij szablon:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Przenieś z obszaru zespołu:",
		moveTeamspaceDocuments_security: "Udostępnij dokument:",
		moveTeamspaceDocuments_security_change: "Określ zabezpieczenia niestandardowe dla wybranych elementów",
		moveTeamspaceDocuments_item_type_level: "Nie można wybrać opcji nadpisania zabezpieczeń wybranych elementów, ponieważ konfiguracja klasy wybranego elementu umożliwia korzystanie z zabezpieczeń tylko na poziomie klasy.",
		moveTeamspaceDocuments_security_inherit: "Odziedzicz zabezpieczenia z folderu docelowego",
		moveTeamspaceDocuments_file_info_text: "Elementy można przenosić z jednego obszaru zespołu do innego lub do folderu.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Nie masz odpowiednich uprawnień do przenoszenia elementów do wybranego folderu.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Nie masz odpowiednich uprawnień do przenoszenia elementów z obszaru zespołu.",
		moveTeamspaceDocuments_move_mixed_items: "Nie można nadpisać zabezpieczeń wybranych elementów. Niektóre elementy nie są zarządzane przez obszar zespołu. Możesz przesłonić tylko zabezpieczenia elementów zarządzanych przez obszar zespołu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Należy określić nazwę dla obszaru zespołu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Należy określić nazwę dla szablonu obszaru zespołu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Nazwa obszaru zespołu nie może zawierać żadnego z następujących znaków: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Nazwa szablonu nie może zawierać żadnego z następujących znaków: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Odsyłacz do dokumentu",
		workspacebuilder_folders_makeDocCopy: "Kopiuj dokument",
		workspacebuilder_folders_newfolder: "Nowy folder",
		workspacebuilder_folders_local_drive: "Z katalogu lokalnego",
		workspacebuilder_folders_from_repo: "Z repozytorium",
		workspacebuilder_folders_add_doc: "Dodaj dokument",
		workspacebuilder_folders_grid_name: "Nazwa",
		workspacebuilder_folders_props: "Właściwości",
		workspacebuilder_folders_remove: "Usuń",
		workspacebuilder_folders_delete: "Usuń",
		workspacebuilder_folders_adddoc_local: "Dodaj dokument z napędu lokalnego",
		workspacebuilder_folders_adddoc_repo: "Dodaj dokument z repozytorium",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Określona nazwa folderu już istnieje. Określ inną nazwę folderu.",

		workspacebuilder_classes_title: "Wybierz klasy lub szablony wprowadzania",
		workspacebuilder_classes_title_cm: "Wybierz klasy",
		workspacebuilder_classes_template_introText: "Określ, czy obszary zespołów utworzone z tego szablonu będą korzystać z klas lub szablonów wprowadzania w celu dodawania dokumentów do repozytorium. Jeśli nie zostaną wybrane żadne klasy, w obszarach zespołów będą widoczne wszystkie dostępne klasy. Użytkownik może zmodyfikować listę klas lub szablonów wprowadzania w obszarze zespołu, o ile ma odpowiednie uprawnienia.",
		workspacebuilder_classes_template_introText_cm: "Wybierz klasy, z których mogą korzystać użytkownicy w celu dodawania dokumentów do repozytorium. Jeśli żadne klasy nie zostaną wybrane, dla użytkowników obszaru zespołu będą widoczne wszystkie klasy, do których mają dostęp. Użytkownicy posiadający odpowiednie uprawnienia mogą zmodyfikować listę klas w obszarze zespołu.",
		workspacebuilder_classes_instance_introText: "Wybierz klasy lub szablony wprowadzania, z których mogą korzystać użytkownicy w celu dodawania dokumentów do repozytorium. Jeśli żadne klasy nie zostaną wybrane, wówczas dla użytkowników obszaru zespołu będą widoczne wszystkie klasy, do których mają dostęp. Użytkownicy posiadający odpowiednie uprawnienia mogą zmodyfikować listę klas lub szablonów wprowadzania w obszarze zespołu.",
		workspacebuilder_classes_instance_introText_cm: "Wybierz klasy, z których mogą korzystać użytkownicy w celu dodawania dokumentów do repozytorium. Jeśli żadne klasy nie zostaną wybrane, wówczas dla użytkowników obszaru zespołu będą widoczne wszystkie klasy, do których mają dostęp. Użytkownicy posiadający odpowiednie uprawnienia mogą zmodyfikować listę klas w obszarze zespołu.",
		workspacebuilder_classes_selection: "Wybierz klasy:",
		workspacebuilder_classes_list: "Dostępne klasy:",
		workspacebuilder_classes_columns_default: "Domyślnie",
		workspacebuilder_classes_columns_className: "Nazwa klasy",
		workspacebuilder_classes_type_classes: "Użyj klas w celu dodawania dokumentów",
		workspacebuilder_classes_type_classes_tooltip: "Z klasami powiązane są właściwości umożliwiające zlokalizowanie dokumentów do wykorzystania w przyszłości.",
		workspacebuilder_classes_type_entryTemplates: "Użyj szablonów wprowadzania w celu dodawania dokumentów",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Dzięki szablonom wprowadzania informacje podawane w odniesieniu do każdego dokumentu są spójne i zawierają predefiniowane wartości.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nazwa szablonu wprowadzania",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Opis",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Do obszaru zespołu należy dodać co najmniej jeden szablon wprowadzania.",

		workspacebuilder_classes_new: "Nowa klasa",
		workspacebuilder_classes_add: "Dodaj klasę",
		workspacebuilder_entryTemplate_add: "Dodaj szablon wprowadzania",
		workspacebuilder_add_list: "Dodaj",
		workspacebuilder_makeDefault_list: "Ustaw jako domyślne",
		workspacebuilder_removeDefault_list: "Usuń domyślne",

		workspacebuilder_roles_title: "Wybierz role",
		workspacebuilder_roles_title_modify: "Modyfikuj role",

		workspacebuilder_selection_moveup: "Przenieś w górę",
		workspacebuilder_selection_movedown: "Przenieś w dół",
		workspacebuilder_selection_remove: "Usuń",
		workspacebuilder_selection_add: "Dodaj",
		workspacebuilder_selection_create_new_search: "Nowe wyszukiwanie...",
		workspacebuilder_selection_create_new_role: "Nowa rola...",
		workspacebuilder_selection_make_role_available: "Ustaw jako dostępne",
		workspacebuilder_selection_make_role_available_tooltip: "Powoduje współużytkowanie wybranej roli z innymi szablonami. Aby można było współużytkować rolę, należy przypisać co najmniej jedno uprawnienie.",

		workspacebuilder_navigation_next: "Dalej",
		workspacebuilder_navigation_finish: "Zakończ",
		workspacebuilder_navigation_validate: "Sprawdź poprawność",
		workspacebuilder_navigation_previous: "Wstecz",
		workspacebuilder_navigation_cancel: "Anuluj",
		workspacebuilder_navigation_customize: "Dostosuj",

		workspacebuilder_search_dialog_title: "Szukaj",
		workspacebuilder_dialog_close: "Zamknij",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Dostępność szablonu:",
		workspace_properties_templateState_tooltip: "Ustaw szablon jako niedostępny, aby uniemożliwić użytkownikom tworzenie obszarów zespołu, które korzystają z tego szablonu.",
		workspace_properties_dialog_title: "Właściwości szablonu",
		workspace_properties_online_radio_option_label: "Ustaw jako dostępne",
		workspace_properties_offline_radio_option_label: "Ustaw jako niedostępne",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Czy chcesz anulować bez zapisywania zmian?",
		workspacebuilder_cancel_confirmation_button: "Tak",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Wszelkie niepoprawne elementy zostaną usunięte z szablonu, zaś szablon zostanie udostępniony użytkownikom.  Czy chcesz sprawdzić poprawność tego szablonu obszaru zespołu?",
		workspacebuilder_validate_confirmation_button: "Tak",
		workspacebuilder_validate_confirmation_title: "Sprawdź poprawność",

		/* Entry templates builder */
		entry_templates: "Menedżer szablonów wprowadzania",
		no_entry_templates_were_found: "Brak szablonów wprowadzania",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtr",

		/* Roleselector widget */
		role_selector_name: "Role:",

		/* User Group picker widget */
		directory_label: "Katalog:",
		scope_label: "Wyszukaj:",
		name_starts_with_label: "Nazwa zaczyna się od:",
		name_contains_label: "Nazwa zawiera",
		display_name_contains_label: "Nazwa wyświetlana zawiera",
		starts_with_label: "Zaczyna się od:",
		available_label: "Dostępne:",
		available_heading: "Dostępne",
		selected_label: "Wybrane:",
		selected_heading: "Wybrane",
		available_repositories_label: "Dostępne repozytoria",
		selected_repositories_label: "Wybrane repozytoria",
		default_repository: "Repozytorium domyślne:",
		default_repository_placeholder: "Wybierz repozytorium",
		default_role_placeholder: "Wybierz rolę",
		menu_label_placeholder: "Wybierz lub wprowadź etykietę",
		default_repository_hover: "Określ repozytorium wybierane domyślnie, gdy użytkownicy logują się do klienta WWW z tego pulpitu.<br><br><b>Ważne:</b> Przed określeniem repozytorium domyślnego należy dodać repozytoria do listy wybranych repozytoriów.",
		default_repository_workflow_hover: "<b>Pamiętaj:</b> Przestrzenie aplikacji można skonfigurować tylko dla repozytoriów, które są skonfigurowane dla tego pulpitu.",
		remove_label: "Usuń",
		users_label: "Użytkownicy",
		groups_label: "Grupy",
		user_or_group_name_label: "Nazwa użytkownika lub grupy:",
		user_or_group_name_hover: "Wprowadź poprawną w repozytorium nazwę użytkownika lub grupy.  Poprawność nazwy nie jest sprawdzana.",
		user: "Użytkownik",
		group: "Grupa",
		name: "Nazwa:",
		displayName: "Nazwa wyświetlana",
		display_name: "Nazwa wyświetlana:",
		shortName: "Nazwa skrócona:",
		distinguishedName: "Nazwa wyróżniająca:",
		search_tooltip: "Szukaj",
		add_tooltip: "Dodaj",
		add_selected_tooltip: "Dodaj do wybranej listy",
		remove_tooltip: "Usuń",
		remove_selected_tooltip: "Usuń z wybranej listy",
		add_to_selected_tooltip: "Dodaj",
		remove_from_selected_tooltip: "Usuń",
		move_up_selected_tooltip: "Przenieś w górę",
		move_down_selected_tooltip: "Przenieś w dół",
		advanced_search_options_tooltip: "Ustawienia zaawansowane",
		move_right_selected_tooltip: "Przesuń do podmenu",
		move_left_selected_tooltip: "Przesuń z podmenu",
		add_separator: "Dodaj separator",
		menu_item_label: "Etykieta pozycji menu:",
		add_menu_label: "Dodaj podmenu",
		menu_label: "Etykieta podmenu:",
		menu_label_info: "<b>Ważne:</b> Przed zapisaniem tego menu należy dodać co najmniej jedną pozycję menu do tego podmenu.",
		menu_dropdown_label: "Etykieta przycisku rozwijanego:",
		menu_dropdown_label_info: "<b>Ważne:</b> Przed zapisaniem paska narzędzi do tego przycisku rozwijanego należy dodać co najmniej jedną pozycję menu.",
		no_item_found: "Nie znaleziono wyników.",
		me: "Ja",
		anyone: "Ktokolwiek",
		specific_users: "Konkretni użytkownicy",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "Wyszukiwanie zwróciło liczbę wyników przekraczającą {0}. Zmień kryteria, aby zawęzić wyszukiwanie.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Wyniki wyszukiwania zawierają pozycje, które zostały już wybrane. Pozycje te nie będą wyświetlane w wynikach wyszukiwania.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Zwrócono więcej niż {0} wyników. Użyj filtru w celu zawężenia wyników",

		user_already_selected: "Określony użytkownik jest już wybrany.  Wskaż innego użytkownika.",
		group_already_selected: "Określona grupa jest już wybrana.  Wskaż inną grupę.",
		user_cannot_select_self: "Nie można dodać siebie. Wskaż innego użytkownika.",

		/* Select User Group dialog */
		select_user_group_add_label: "Dodaj",
		select_user_group_cancel_label: "Anuluj",
		add_users_groups_label: "Dodaj użytkowników i grupy",
		add_user_group_label: "Dodaj użytkownika i grupę",
		add_users_label: "Dodaj użytkowników",
		add_user_label: "Dodaj użytkownika",
		add_label: "Dodaj:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Następujące dokumenty zawierają niezapisane zmiany adnotacji:",
		viewer_confirm_to_proceed: "Czy chcesz kontynuować, tracąc zmiany?",
		viewer_warn_has_changes: "Niezapisane zmiany zostaną odrzucone.",
		viewer_warn_is_printing: "Możliwe, że trwające drukowanie nie zostanie zakończone.",
		viewer_warn_confirm_exit: "Czy chcesz wyjść?",
		viewer_prompt_save_changes: "Następujący dokument zawiera niezapisane zmiany adnotacji, które zostaną utracone:<br>${0}<br><br>Czy chcesz zapisać zmiany?",
		viewer_prompt_mergesplit_changes: "Następujące dokumenty zawierają niezapisane zmiany:<br>${0}<br><br>Czy chcesz kontynuować, tracąc zmiany?",
		viewer_prompt_mergesplit_tab_changes: "Następujący dokument zawiera niezapisane zmiany:<br>${0}<br><br>Czy chcesz kontynuować, tracąc zmiany?",
		viewer_new_item_name: "Nowy dokument",
		viewer_top_frame: "Ramka górna:",
		viewer_bottom_frame: "Ramka dolna:",
		viewer_left_frame: "Lewa ramka:",
		viewer_right_frame: "Prawa ramka:",
		viewer_viewer_frame: "Ramka przeglądarki:",
		viewer_properties_frame: "Ramka właściwości:",
		viewer_comment_frame: "Ramka komentarzy:",
		viewer_mergesplit_on: "Wyświetl",
		viewer_mergesplit_off: "Scal i podziel",
		viewer_mergesplit_context_menu_move: "Przenieś",
		viewer_mergesplit_context_menu_rename: "Zmień nazwę",
		viewer_mergesplit_context_menu_delete: "Usuń",
		//move to new window
		viewer_move_to_new_window:"Przenieś do nowego okna",
		viewer_continue:"Odrzuć zmiany",
		viewer_return_to_original_window:"Wróć do okna początkowego",
		viewer_switch_window:"Przełącz na drugie okno",
		viewer_prompt_lost_changes:"Dokument ${0} jest teraz otwarty w innym oknie. Zawiera tam niezapisane zmiany.<br><br>Czy chcesz przełączyć się na tamto okno i zapisać zmiany, czy odrzucić zmiany i otworzyć dokument w bieżącym oknie?",
		viewer_mergesplit_fallback_info: "Operację scalania i dzielenia można wykonywać tylko na dokumentach będących w tym samym repozytorium.",
		viewer_tabbed_layout: "Wyświetl jako karty",
		viewer_tabbed_layout_highcontrast: "Karty",
		viewer_split_vertical_layout: "Podziel na panel górny i dolny",
		viewer_split_vertical_layout_highcontrast: "Góra i dół",
		viewer_split_horizontal_layout: "Podziel na panel lewy i prawy",
		viewer_split_horizontal_layout_highcontrast: "Prawa i lewa strona",
		viewer_add_vertical_layout: "Nowa karta na dole",
		viewer_add_vertical_layout_highcontrast: "Dolna karta",
		viewer_add_horizontal_layout: "Nowa karta po prawej",
		viewer_add_horizontal_layout_highcontrast: "Prawa karta",
		viewer_add_horizontal_layout_rtl: "Nowa karta po lewej",
		viewer_add_horizontal_layout_rtl_highcontrast: "Lewa karta",
		viewer_split_properties_layout: "Wyświetl właściwości",
		viewer_split_comment_layout: "Wyświetl komentarze",
		viewer_split_notelog_layout: "Wyświetl dziennik uwag",
		viewer_window_title: "Przeglądarka ${0}",
		viewer_next_hit: "Wyświetl następny dokument z listy",
		viewer_prev_hit: "Wyświetl poprzedni dokument z listy",
		viewer_confrim_more_search_results: "Wyniki wyszukiwania nie zawierają już więcej dokumentów do wyświetlenia.  Czy chcesz pobrać więcej wyników wyszukiwania?",
		viewer_confirm_get_next_page: "Lista wyników nie zawiera już więcej elementów do wyświetlenia.  Czy chcesz pobrać więcej wyników wyszukiwania?",
		viewer_confirm_get_next_item: "Lista wyników zawiera więcej elementów do wyświetlenia. Czy chcesz wyświetlić następny element?",
		viewer_fn_annotation_tooltip: " Utworzone przez: ${0},  Utworzono dnia: ${1}",
		viewer_box_note_limitation: "Box Note można otwierać i wyświetlać tylko w osobnym oknie.",
		viewer_click_to_open_box_note: "Kliknij tutaj, aby otworzyć Box Note.",
		viewer_box_view_expiring: "Maksymalny czas wyświetlania dokumentu Box wynosi 60 minut. Twoja bieżąca sesja wygaśnie za ${0} min. Aby kontynuować pracę z dokumentem, należy go teraz ponownie załadować. Czy chcesz załadować dokument ponownie?",
		viewer_add_dialog_save_as_type: "Zapisz jako typ:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Konflikt pobierania",
		viewer_checkout_conflict: "Dokument został pobrany przez innego użytkownika.",
		viewer_checkout_confirm: "Dostępna jest nowsza wersja tego dokumentu. Czy chcesz kontynuować i pobrać dokument, czy chcesz załadować ponownie przeglądarkę z nowszą wersją? Ponowne załadowanie przeglądarki spowoduje utratę niezapisanych zmian.",
		viewer_checkout_continue: "Kontynuuj i pobierz",
		viewer_checkout_reload: "Przeładuj",
		viewer_status_building: "Tworzenie dokumentu...",
		viewer_status_adding: "Dodawanie dokumentu...",
		viewer_status_checking_in: "Wprowadzanie/zwracanie dokumentu...",

		/* Class Selector Widget */
		include_subclasses_label: "Uwzględnij podklasy",
		include_subclasses_label2: "Szukaj również w podklasach",
		include_subclasses_note: "(Wraz z podklasami)",
		available_classes_col_header: "Dostępne klasy",
		single_class_label: "Szukaj w pojedynczej klasie",
		multiple_classes_label: "Szukaj w wielu klasach",
		multiple_classes_hover_help: "Wybierz tę opcję, aby wyszukiwać w więcej niż jednej klasie. Mogą to być klasy macierzyste lub podklasy. Jeśli ta opcja zostanie wybrana, wyświetlone będą tylko te właściwości i wartości, które są wspólne dla wybranych klas.",
		selected_classes_col_header: "Wybrane klasy",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(wraz z podfolderami)",
		favorites_pseudo_node: "\\Ulubione\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "W repozytorium należy wybrać folder, do którego dokument zostanie dodany.",
		no_permission_add_folder: "Nie masz uprawnień wymaganych do dodawania folderów do tego folderu.",
		no_permission_add_document: "Nie masz uprawnień wymaganych w celu dodawania dokumentów do tego folderu.",
		document_already_in_folder: "Ten dokument znajduje się już w tym folderze.",
		cant_move_folder_onto_parent: "Ten folder znajduje się już w tym folderze.",
		cant_move_folder_onto_self: "Nie można przenieść folderu do jego samego ani do jego podfolderów.",

		/* Workflow Widgets */
		process_application_space: "Przestrzeń aplikacji procesu",
		process_role: "Rola procesu",
		process_inbasket: "Koszyk zadań procesu",
		process_worklist: "Lista prac",
		process_step_processor: "Element pracy procesu",
		process_tracker: "Śledź element pracy",
		process_info_subject: "Temat",
		process_info_stepname: "Krok",
		process_info_is_locked: "Zablokowane",
		process_info_no_access: "Brak dostępu",
		process_info_received_on: "Odebrano dnia/o godzinie",
		process_info_overdue: "Po terminie",
		process_info_reminder_sent: "Wysłano przypomnienie",
		process_info_locked_by_user: "Zablokowane przez",
		process_work_object_number: "Numer obiektu roboczego",
		process_deadline: "Termin:",
		process_launchedby: "Termin uruchomienia:",
		process_receivedon: "Termin otrzymania:",
		process_step: "Krok:",
		process_properties: "Właściwości",
		process_attachments: "Załączniki",
		process_attachments_select: "Wybierz załącznik",
		process_finish_button_label: "Zatrzymaj śledzenie",
		process_tracker_history: "Historia",
		process_tracker_milestones: "Kamienie milowe",
		process_tracker_milestone: "Kamień milowy",
		process_tracker_milestone_level: "Poziom",
		process_tracker_milestones_empty: "Brak jest kamieni milowych do wyświetlenia.",
		process_tracker_level_selector_label: "Pokaż poziomy kamieni milowych aż do:",
		process_tracker_map_selector_label: "Filtruj wg mapy:",
		process_tracker_message: "Komunikat",
		process_tracker_datereached: "Osiągnięta data",
		process_tracker_stepname: "Krok",
		process_tracker_cycle: "Cykl",
		process_tracker_review_cycle: "Cykl recenzji",
		process_tracker_participant: "Uczestnik",
		process_tracker_completed: "Zakończone",
		process_tracker_response: "Odpowiedź",
		process_tracker_comments: "Komentarze",
		process_tracker_delete_confirmation: "Czy chcesz zatrzymać śledzenie następującego przepływu pracy: ${0}?",
		process_tracker_history_allmaps: "Wszystkie mapy",
		process_tracker_history_workflow: "Przepływ pracy",
		process_tracker_history_terminate: "Zakończ",
		process_tracker_history_malfunction: "Usterka",
		process_filter_label: "Filtr",
		process_no_filter_summary: "Nie zastosowano filtrów",
		process_filter_summary: "Zastosowano ${0}",
		process_filter_reset_tooltip: "Reset kasuje filtr i odświeża koszyk zadań.",
		process_attachments_add_folder: "Dodaj folder",
		process_attachments_add_doc: "Dodaj dokument",
		process_complete_button_label: "Zakończ",
		process_save_button_label: "Zapisz",
		process_launch_button_label: "Uruchom przepływ pracy",
		process_open_button_label: "Otwórz",
		process_movetoinbox_button_label: "Przenieś do koszyka zadań",
		process_return_button_label: "Wróć",
		process_return_to_sender_tooltip: "Zwróć element pracy do źródłowego koszyka zadań",
		process_move_to_inbasket_tooltip: "Przenieś element pracy do Twojego osobistego koszyka zadań",
		process_reassign_tooltip: "Ponownie przypisz element pracy do innego właściciela",
		process_reassign_button_label: "Przypisz ponownie",
		process_preferences_button_label: "Preferencje",
		process_manageroles_button_label: "Zarządzaj rolami",
		process_manageroles_no_members: "Brak jest elementów.",
		process_responses_button_label: "Więcej odpowiedzi",
		process_morecustomaction_button_label: "Więcej działań",
		process_show_instructions: "Wyświetl instrukcje",
		process_hide_instructions: "Ukryj instrukcje",
		process_remove_attachment: "Usuń",
		process_close_window: "Element pracy został przetworzony.",
		process_delegate_flag: "Wymagaj zatwierdzenia elementu pracy przez bieżącego właściciela przed skierowaniem go do następnego kroku w przepływie pracy.",
		process_paticipant_voting: "Liczba uczestników wymaganych do zatwierdzenia głosowania:",
		process_get_next_label: "Pobierz następny element pracy",
		process_no_more_items: "W koszyku zadań nie ma już elementów do przetworzenia.",
		process_workflow_name: "Nazwa przepływu pracy:",
		process_pattern_process_name: "Recenzja dla ${0}",
		process_instuctions: "Instrukcje dla recenzentów:",
		process_pattern_deadline: "Termin:",
		process_reviewers: "Recenzenci:",
		process_approvals_required: "Wymagane zatwierdzenia:",
		process_on_reject: "Jeśli element pracy został odrzucony:",
		process_return_to_originator: "Zwróć do mnie",
		process_return_to_previous_reviewer: "Zwróć do poprzedniego recenzenta",
		process_additional_settings: "Dodatkowe ustawienia:",
		process_allow_reassign: "Zezwalaj recenzentom na ponowne przypisanie tej recenzji",
		process_complete_notification: "Powiadom mnie o zakończeniu recenzji",
		process_workflow_name_hover_help: "Wskazana przez użytkownika nazwa elementu pracy powinna ułatwić recenzentom rozróżnienie między tym elementem pracy a innymi elementami pracy w ich koszyku zadań.",
		process_approvals_required_hover_help: "Jeśli element pracy jest recenzowany przez wiele osób jednocześnie, możliwe jest określenie liczby zatwierdzeń potrzebnych do pomyślnego ukończenia elementu pracy.",
		process_approval_options: "Opcje zatwierdzania",
		process_all: "Wszystkie",
		process_at_least: "Co najmniej",
		process_at_least_by_count: "Co najmniej ${0}-krotność liczby recenzentów",
		process_at_least_by_percentage: "Co najmniej ${0}% recenzentów",
		process_comments: "Komentarze:",
		process_review_step_comments_hover_help: "W przypadku odrzucenia elementu pracy konieczne jest podanie informacji o przyczynie odrzucenia. Ta informacja umożliwia twórcy elementu pracy lub poprzedniemu recenzentowi zareagowanie na uwagi bieżącego użytkownika.",
		process_rework_step_comments_hover_help: "Musisz podać informacje dotyczące sposobu adresowania komentarzy. W przypadku braku zgody na komentarze należy podać uzasadnienie swojej decyzji.",
		process_rejection_reason: "Przyczyna odrzucenia:",
		process_summary: "Podsumowanie",
		process_sequential_review: "Recenzja sekwencyjna",
		process_sequential_review_description: "Element pracy zostanie zrecenzowany przez każdego recenzenta kolejno",
		process_parallel_review: "Recenzja równoległa",
		process_parallel_review_description: "Element pracy zostanie zrecenzowany przez wszystkich recenzentów jednocześnie",
		process_parallel_approvals_required_error: "Liczba wymaganych zatwierdzeń jest zbyt wysoka. Określono tylko ${0} recenzentów.",
		process_parallel_invalid_required_approvals_count: "Ta wartość jest niepoprawna. Wartość musi być ${0}.",
		process_subject_prompt: "Wprowadź temat",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Element pracy:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Wyświetlanie właściwości",
		view_permissions_level: "Wyświetlanie uprawnień",
		view_content_level: "Wyświetlanie dokumentu",
		link_level: "Odsyłacz",
		modify_properties_level: "Edytowanie właściwości",
		modify_content_level: "Edytowanie dokumentu",
		minor_version_level: "Edytowanie wersji podrzędnej",
		major_version_level: "Edytowanie wersji głównej",
		create_instance_level: "Tworzenie instancji",
		delete_document_level: "Usuwanie dokumentu",
		delete_item_level: "Usuwanie elementu",
		modify_document_permissions_level: "Zarządzanie uprawnieniami",
		modify_folder_permissions_level: "Zarządzanie uprawnieniami",
		modify_owner_level: "Modyfikowanie właściciela",
		delete_folder_level: "Usuwanie folderu",
		file_in_folder_level: "Dodawanie do folderów",
		create_subfolder_level: "Tworzenie podfolderów",
		link_item_level: "Adnotuj dokument, Dodaj do folderu", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Dotyczy tylko dokumentów: Dodaj adnotację do dokumentu lub usuń adnotację z dokumentu</li><li>Dotyczy tylko folderów: Dodaj elementy do folderu lub usuń elementy z folderu</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Usuń",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Właściciel",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Czytelnik",
		/* previously \"Read only\" */
		no_access_privilege: "Brak dostępu",
		share_with_label: "Udostępniaj:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Tylko mnie",
		public_label: "Wszystkim",
		members_label: "Konkretnym użytkownikom i grupom",
		select_members_label: "Wybierz...",
		select_user_group_label: "Wybierz użytkowników...",
		select_users_groups_label: "Wybierz użytkowników i grupy...",
		select_user_label: "Wybierz użytkownika...",
		propagation_label: "Propagacja:",
		access_label: "Uprawnienia:",
		add_permission_add_label: "Dodaj",
		security_policy_label: "Strategia bezpieczeństwa:",
		includes_inherited_access: "Zawiera dostęp dziedziczony",
		customize_access_for_label: "Dostosuj dostęp dla:",
		customize: "Dostosuj",
		direct: "Ten element",
		singleLevelInheritance: "Jeden poziom",
		infiniteLevelInheritance: "Wszystkie poziomy",
		inherited: "Dziedziczone",
		direct_hover_help: "Wybrany element podlega ustawieniom zabezpieczeń",
		singleLevelInheritance_hover_help: "Te uprawnienia mają zastosowanie w przypadku tego elementu oraz bezpośrednich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.",
		infiniteLevelInheritance_hover_help: "Te uprawnienia mają zastosowanie w przypadku tego elementu oraz wszystkich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.",
		inherited_hover_help: "Te uprawnienia są dziedziczone z obiektu nadrzędnego.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Te uprawnienia dla ${0} mają zastosowanie w przypadku tego elementu oraz bezpośrednich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.",
		infiniteLevelInheritance_member_hover_help: "Te uprawnienia dla ${0} mają zastosowanie w przypadku tego elementu oraz wszystkich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.",
		inherited_member_hover_help: "Te uprawnienia dla ${0} są dziedziczone z obiektu nadrzędnego.",
		partial_hover_help: "Ustawienia zabezpieczeń elementu zostały zmienione przez użytkownika",
		allow: "Zezwalaj",
		deny: "Odmów",
		basic: "Podstawowe",
		advanced: "Zaawansowane",
		permission_type: "Ustaw dostęp dla:",
		share_with_hover_help: "Ten element jest aktualnie współużytkowany przez następujących użytkowników i następujące grupy.",
		direct_security_policy_hover_help: "Ustawienia tej strategii bezpieczeństwa umożliwiają zmianę zabezpieczeń tego elementu.",
		security_policy_hover_help: "Zabezpieczenia tego elementu są dostępne tylko do odczytu, ponieważ ustawienia tej strategii bezpieczeństwa uniemożliwiają zmianę zabezpieczeń tego elementu.",
		security_remove: "Brak uprawnień",
		pseudo_group_label: "Konta alias",
		marking_hover_help: "Bezpieczeństwo tego elementu jest kontrolowane przez zestaw oznakowań, które mogą wpływać na bezpieczeństwo tego elementu.",
		note_label: "Ważne:",
		marking_text: "Ten element jest oznaczony jako: ${0}. Dla elementu mogą istnieć dodatkowe ograniczenia ze względu na bezpieczeństwo.",
		authenticated_users: "Użytkownicy uwierzytelnieni",
		realm_users: "Użytkownicy ${0}",
		denyAll: "Odmów wszystkim",
		allowAll: "Zezwól na wszystkie",
		remove_direct_text: "Zapisanie zmian spowoduje, że uprawnienia tego użytkownika zostaną usunięte z tego elementu.",
		remove_single_inheritance_text: "Zapisanie zmian spowoduje, że uprawnienia tego użytkownika zostaną usunięte z tego elementu oraz z <br>bezpośrednich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły zabezpieczenia tego elementu.<p>Czy chcesz kontynuować?",
		remove_infinite_inheritance_text: "Zapisanie zmian spowoduje, że uprawnienia tego użytkownika zostaną usunięte z tego elementu oraz z <br>wszystkich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia.<p>Czy chcesz kontynuować?",
		remove_inheritance_text: "Zapisanie zmian spowoduje, że uprawnienia tego użytkownika zostaną usunięte z tego elementu oraz z <br>wszystkich elementów podrzędnych, które skonfigurowano tak, aby dziedziczyły jego zabezpieczenia. Pozostaną tylko te uprawnienia, które <br>są dziedziczone przez ten element.<p>Czy chcesz kontynuować?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Usuń te uprawnienia dla ${0}",

		security_proxy_text: "Zabezpieczenia tego elementu są dostępne tylko do odczytu.",
		security_proxy_declared_text: "Zabezpieczenie tego elementu ma atrybut tylko do odczytu, ponieważ jest ono zdefiniowane przez serwer proxy.",
		security_proxy_hover_help: "Bezpieczeństwo tego elementu jest kontrolowane przez zabezpieczenia ustawione przez inny obiekt w repozytorium.",
		add_permissions_label: "Dodaj uprawnienia",
		permission_propagation_direct: "Tylko ten folder",
		permission_propagation_onelevel: "Ten folder i jeden poziom poniżej",
		permission_propagation_alllevels: "Ten folder i wszystkie poziomy poniżej",
		document_propagation_label: "Ustaw dostęp dla:",
		document_propagation_FOLDER: "Folder",
		document_propagation_DOCUMENT: "Dokument",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Źródło uwierzytelniania:",

		/* Versions Widget */
		object_versions_selector_label: "Wersje:",
		object_versions_label: "Wersje",
		object_type_document_label: "Dokument:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Foldery zawierające",
		folders_filed_in_folder_col_hdr: "Folder",
		folders_filed_in_path_col_hdr: "Ścieżka",
		folders_filed_in_containment_name_col_hdr: "Nazwa zawierania",
		folders_filed_in_creator_col_hdr: "Utworzono przez",
		folders_filed_in_date_created_col_hdr: "Utworzono dnia/o godzinie",

		/* Parent Documents */
		properties_parent_documents_label: "Dokumenty nadrzędne",

		/* Select object dialog */
		select_object_title: "Wybierz element",
		select_object_breadCrumb_version_prefix: "Wersje dla: ",
		show_versions_label: "Pokaż wersje",
		use_current_version_label: "Użyj aktualnej wersji",
		use_released_version_label: "Użyj wydanej wersji",

		/* Select content class dialog */
		select_class: "Wybierz klasę",
		/* Select Search dialog */
		select_search: "Wybierz wyszukiwanie",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Wyświetl odsyłacz",
		show_hyperlink_intro: "Odsyłacz można kopiować i wklejać do wiadomości e-mail, rozmów sieciowych i stron WWW. Jeśli istnieje wiele wersji elementu, wówczas należy określić wersję, na którą będzie wskazywał odsyłacz.",
		show_hyperlink_intro_no_version_select: "Odsyłacz można kopiować i wklejać do wiadomości e-mail, rozmów sieciowych i stron WWW.",
		show_text_label: "Wersja:",
		released_button_label: "Wydane",
		current_button_label: "Bieżące",
		select_button_label: "Konkretna wersja",
		show_hyperlink_no_released_version_msg: "Nie istnieje żadna wydana wersja tego dokumentu.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Uruchom przepływ pracy",
		edit_workflow_title: "Właściwości elementu pracy",
		start_workflow_intro: "Uruchom przepływ pracy, aby przetworzyć wybrane elementy. Jeśli zamierzasz przypisać elementy pracy do konkretnego użytkownika, określ właściciela.",
		edit_workflow_intro: "Istnieje możliwość edytowania właściwości wybranych elementów pracy. Jeśli zamierzasz przypisać element pracy innemu użytkownikowi, wówczas określ właściciela.",
		workflow_field_label: "Przepływ pracy:",
		priority_field_label: "Priorytet:",
		owner_field_label: "Właściciel:",
		start_button_label: "Uruchom",
		save_button_label: "Zapisz",
		owner_value_hint: "Wprowadź łańcuch alfanumeryczny złożony z maksymalnie 32 znaków. Łańcuch może zawierać tylko spacje lub następujące znaki: a-z, A-Z, 0-9 oraz ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elementy treści",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "Ta wartość jest niepoprawna. Wartość może zawierać tylko spacje lub następujące znaki: a-z, A-Z, 0-9 oraz ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Wprowadź wartość od 1 do 32000, aby wskazać ważność elementu pracy.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "Ta wartość jest niepoprawna. Priorytet musi być wartością z zakresu od 1 do 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Przepływ pracy o tej nazwie nie istnieje.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Zawieś z przepływu pracy",
		suspend_workitems_intro: "Zawieszenie elementu pracy z przepływu pracy uniemożliwia przetwarzanie tego elementu pracy aż do jego wznowienia",
		suspend_workitems_options_label: "Zawieś wybrane elementy pracy:",
		suspend_until_resume_label: "Do czasu ręcznego wznowienia",
		suspend_until_date_label: "Do czasu",
		suspend_for_duration_label: "Przez",
		suspend_for_duration_hours: "godz.",
		suspend_for_duration_days: "dni",
		suspend_for_duration_weeks: "tyg.",
		suspend_for_duration_months: "mies.",
		suspend_for_duration_years: "lat(a)",
		suspend_button_label: "Zawieś",
		suspend_duration_value_hint: "Wprowadź czas trwania jako wartość z zakresu 1 - 99.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "Ta wartość jest niepoprawna. Wartość musi być z zakresu 1 - 99.",

		/* Remove from workflow */
		remove_workflow_title: "Usuń z przepływu pracy",
		remove_workflow_confirmation: "Czy chcesz usunąć wybrane elementy z przepływu pracy?<br>Wybrana ilość elementów: ${0}.",
		remove_workflow_button_label: "Usuń",

		/* Unfile dialog */
		unfile_dialog_title: "Usuń z folderu",
		unfile_dialog_remove_from_folder_label: "Usuń z:",
		unfile_dialog_info_text: "Możesz usunąć elementy z folderów. Usunięcie elementu ze wszystkich folderów nie powoduje jednak usunięcia go z repozytorium. Nadal możliwe jest pobranie elementu przez uruchomienie wyszukiwania. Na tej liście wyświetlane są tylko folderu, do których użytkownika ma uprawnienia.",
		unfile_dialog_select_all: "Wybierz wszystko",
		unfile_dialog_deselect_all: "Wyczyść wszystko",
		unfile_dialog_remove_button_label: "Usuń",
		unfile_dialog_select_folder_col_hdr: "Wybierz folder",
		unfile_dialog_folder_col_hdr: "Folder",
		unfile_dialog_path_col_hdr: "Ścieżka",
		unfile_dialog_not_filed_msg: "Ten element nie znajduje się w żadnym z folderów.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Nie masz uprawnień wymaganych do usunięcia tego elementu z żadnego z folderów, w których ten element się znajduje.",
		unfile_dialog_folder_not_selectable_tooltip: "Nie masz uprawnień wymaganych do usunięcia tego elementu z tego folderu.",
		unfile_multi_prompt: "Czy chcesz usunąć wybrane elementy z folderu ${0}?",
		unfile_large_number_items_confirmation_question: "Wybrano ${0} elementów do usunięcia z folderu ${1}.<br/>Usuwanie dużej liczby elementów z folderu może być czasochłonne.<br/>Czy chcesz kontynuować?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Otwórz",
		move_to_folder_title: "Przenieś do folderu",
		move_to_folder_button_caption: "Przenieś",
		move_to_folder_label: "Przenieś do:",
		add_to_folder_title: "Dodaj do folderu",
		add_to_folder_button_caption: "Dodaj",
		add_to_folder_label: "Dodaj do:",
		copy_to_folder_title: "Kopiuj do folderu",
		copy_to_folder_button_caption: "Kopiuj",
		copy_to_folder_label: "Kopiuj do:",
		copy_to_folder_delete_label: "Po zakończeniu kopiowania usuń wybrane elementy z repozytorium Box.",
		move_from_folder_label: "Przenieś z:",
		move_file_info_text: "Elementy można przenosić z jednego folderu do innego.",
		move_folder_info_text: "Foldery można przenosić z jednego folderu nadrzędnego do innego.",
		add_doc_to_folder_info_text: "Elementy można dodać do jednego lub większej liczby folderów. Jeśli element znajduje się już w folderze, wówczas pozostaje w nim i jest dodawany do dowolnych folderów dodatkowych określonych przez użytkownika.",
		copy_doc_to_folder_info_text: "Możesz skopiować elementy do folderu.",
		box_copy: "Kopiowanie do/z Box",
		box_copy__button_caption: "Kopiuj",
		box_copy_to_info_text: "Wybierz repozytorium i folder, do którego chcesz skopiować zaznaczone elementy z usługi Box.",
		box_copy_from_info_text: "Wybierz repozytorium i folder, do którego chcesz skopiować zaznaczone elementy z usługi Box.",
		box_copy_version_info_text: "Aby dodać nowy dokument, wybierz repozytorium i folder. Aby wprowadzić nową wersję, wybierz repozytorium i dokument.",
		admin_box_copy: "Kopiowanie do Box",
		admin_box_copy_hover: "Ta opcja umożliwia użytkownikom kopiowanie dokumentów do usługi Box.",

		no_permission_to_copy_version_msg: "Nie można skopiować dokumentu z repozytorium Box jako nowej wersji wybranego dokumentu. Nie masz uprawnień do edycji wybranego dokumentu lub wybrany dokument został pobrany przez innego użytkownika.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Nie masz uprawnień wymaganych do usunięcia tego elementu z żadnego z folderów, w których ten element się znajduje.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Nie masz uprawnień wymaganych do usunięcia tego elementu z tego folderu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Tego elementu nie można przenieść, ponieważ nie jest on umieszczony w folderze. Wybierz inny element.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Uruchom przepływ pracy",
		subscriptions_dialog_available_items_label: "Dostępne elementy:",
		subscriptions_dialog_info_text: "Określ przepływ pracy, który chcesz uruchomić.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nazwa",
		subscriptions_dialog_desc_col_hdr: "Opis",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Zarządzaj rolami",
		manageroles_dialog_info_text: "Możesz zmodyfikować listę użytkowników dla każdej roli, powiązaną z tym obszarem aplikacji procesu.",
		manageroles_dialog_members_label: "Członkowie",
		manageroles_dialog_roles_label: "Role",
		manageroles_dialog_add_button_label: "Dodaj użytkowników i grupy",
		manageroles_dialog_remove_button_label: "Usuń",
		manageroles_dialog_save_button_label: "Zapisz",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Z tym elementem nie są powiązane żadne przepływy pracy.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferencje przepływu pracy",
		workflow_pref_dialog_info_text: "Określ zdarzenia przepływu pracy, dla których chcesz otrzymywać powiadomienia e-mail. Włączenie tej opcji umożliwia również skierowanie własnej pracy do innej osoby; w tym celu należy wybrać użytkownika, do którego praca zostanie delegowana.",

		workflow_pref_general: "Ogólne",
		workflow_pref_email_address: "Adres e-mail",
		workflow_pref_email_address_hover: "Określ adres e-mail, na który chcesz otrzymywać powiadomienia o przepływie pracy.",
		workflow_pref_preferred_locale: "Język",
		workflow_pref_preferred_locale_hover: "Określa język, w którym wyświetlane są powiadomienia wiadomości e-mail.",

		workflow_pref_work_item_notice: "Powiadomienia o elemencie pracy",
		workflow_pref_step_new_assignment: "Przypisano mi nowy element pracy",
		workflow_pref_step_new_assignment_hover: "Powiadom mnie, jeśli otrzymam nowy element pracy.",
		workflow_pref_step_expired_deadline: "Upłynął termin elementu pracy",
		workflow_pref_step_expired_deadline_hover: "Powiadom mnie, jeśli przeoczę termin elementu pracy.",
		workflow_pref_step_reminders: "Zbliża się termin elementu pracy",
		workflow_pref_step_reminders_hover: "Przypomnij mi o elemencie pracy, jeśli jego termin będzie się zbliżał.",

		workflow_pref_originator_notice: "Powiadomienia nadawcy",
		workflow_pref_milestone_reached: "Osiągnięto kamień milowy",
		workflow_pref_milestone_reached_hover: "Powiadom mnie, jeśli w uruchomionym przepływie pracy zostanie osiągnięty kamień milowy.",

		workflow_pref_tracker_notice: "Powiadomienia narzędzia śledzącego przepływ pracy",
		workflow_pref_tracker_new_assignment: "Przypisano mi nowy element narzędzia śledzącego",
		workflow_pref_tracker_new_assignment_hover: "Powiadom mnie, jeśli śledzony przeze mnie element pracy zostanie uruchomiony.",
		workflow_pref_tracker_deadline_reminders: "Zbliża się termin przepływu pracy",
		workflow_pref_tracker_deadline_reminders_hover: "Przypomnij mi o przepływie pracy, jeśli jego termin będzie się zbliżał.",
		workflow_pref_tracker_deadline_expired: "Upłynął termin przepływu pracy",
		workflow_pref_tracker_deadline_expired_hover: "Powiadom mnie, jeśli termin przepływu pracy zostanie przekroczony.",
		workflow_pref_tracker_exception: "Wystąpił błąd przepływu pracy",
		workflow_pref_tracker_exception_hover: "Powiadom mnie, jeśli wystąpi wyjątek lub błąd przepływu pracy.",
		workflow_pref_tracker_expired_deadline: "Upłynął termin kroku",
		workflow_pref_tracker_expired_deadline_hover: "Powiadom mnie, jeśli zostanie przekroczony termin kroku, który śledzę.",
		workflow_pref_tracker_milestone_reached: "Osiągnięto kamień milowy",
		workflow_pref_tracker_milestone_reached_hover: "Powiadom mnie, jeśli w śledzonym przepływie pracy zostanie osiągnięty kamień milowy.",

		workflow_pref_out_notice: "Nieobecny",
		workflow_pref_proxy_user: "Deleguj pracę do",
		workflow_pref_proxy_user_hover: "Użyj tej opcji w celu automatycznego skierowania pracy do innego użytkownika, na przykład jeśli jesteś poza biurem lub na wakacjach.",
		workflow_pref_workflow: "Przepływ pracy",
		workflow_pref_on: "Wł.",
		workflow_pref_off: "Wył.",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Uruchom przepływ pracy",
		transfered_workflows_dialog_info_text: "Wybierz przepływ pracy do uruchomienia.",
		transfered_workflows_dialog_available_items_label: "Dostępne elementy:",
		transfered_workflows_dialog_select_button_label: "Uruchom",
		transfered_workflows_dialog_name_col_hdr: "Nazwa",
		transfered_workflows_dialog_no_item_found: "Nie znaleziono żadnych przesłanych przepływów pracy.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Prześlij przepływ pracy",
		transfer_workflow_dialog_info_text: "Wybierz przepływ pracy do przesłania do systemu przepływu pracy.",
		transfer_workflow_dialog_use: "Użyj tej nazwy przepływu pracy",
		transfer_workflow_dialog_use_another: "Użyj innej nazwy przepływu pracy",
		transfer_workflow_dialog_in_use: "Nazwa przepływu pracy to: ",
		transfer_workflow_dialog_transfer_button_label: "Prześlij",
		transfer_workflow_dialog_no_items_found: "Nie znaleziono żadnych przesłanych przepływów pracy.",
		transfer_workflow_dialog_use_hover: "Określ nazwę bieżącego przepływu pracy na podstawie definicji przepływu pracy.",
		transfer_workflow_dialog_another_hover: "Określ inną nazwę przepływu pracy lub ponownie użyj istniejącej nazwy przesłanego przepływu pracy.",

		/*Search In control*/
		search_in_title: "Szukaj w:",
		search_in_teamspaces: "Obszary zespołu",
		search_in_repositories: "Repozytoria",
		search_in_thisteamspaces: "Ten obszar zespołu",

		ajaxViewer_save: "Zapisz adnotacje",
		ajaxViewer_print: "Podgląd wydruku",
		ajaxViewer_firstPage: "Pierwsza strona",
		ajaxViewer_previousPage: "Poprzednia strona",
		ajaxViewer_nextPage: "Następna strona",
		ajaxViewer_lastPage: "Ostatnia strona",
		ajaxViewer_unknownPageCount: "1 z ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} z ${1}",
		ajaxViewer_zoomOut: "Pomniejsz",
		ajaxViewer_zoomIn: "Powiększ",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Dopasuj do szerokości",
		ajaxViewer_fitHeight: "Dopasuj do wysokości",
		ajaxViewer_fitPage: "Dopasuj stronę",
		ajaxViewer_rotate270: "Obróć o 270 stopni",
		ajaxViewer_rotate90: "Obróć o 90 stopni",
		ajaxViewer_rotate180: "Obróć o 180 stopni",
		ajaxViewer_darken: "Przyciemnij",
		ajaxViewer_lighten: "Rozjaśnij",
		ajaxViewer_lessContrast: "Mniejszy kontrast",
		ajaxViewer_moreContrast: "Większy kontrast",
		ajaxViewer_invert: "Odwróć",
		ajaxViewer_createHighlight: "Podświetl",
		ajaxViewer_createNote: "Adnotacja",
		ajaxViewer_editAnnotation: "Edytowanie właściwości adnotacji",
		ajaxViewer_deleteAnnotation: "Usuń adnotację",
		ajaxViewer_editAnnotationTitle: "Edytowanie właściwości adnotacji",
		printableView_print: "Drukuj",
		printableView_close: "Zamknij",

		search_results_dropdown_button: "Ekran wyników",
		search_results_columns_label: "Ekran wyników wyszukiwania",
		search_results_columns_description: "Wybierz właściwości do wyświetlenia w wynikach wyszukiwania.",
		search_results_sortby_label: "Sortuj wg:",
		search_results_order_label: "Porządek sortowania",
		search_results_accending_label: "Rosnąco",
		search_results_descending_label: "Malejąco",
		search_results_available_properties: "Dostępne",
		search_results_selected_properties: "Wybrane",
		search_rank_property: "Ocena (tylko wyszukiwanie tekstowe)",
		search_name_attribute: "Nazwa (${0})",
		search_results_summary_enabled_label: "Włącz podsumowania treści (tylko wyszukiwanie tekstowe)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Wyszukiwania",
		manage_teamspace_classes_tab_title: "Klasy",
		manage_teamspace_entry_templates_tab_title: "Szablony wprowadzania",
		manage_teamspace_team_tab_title: "Zespół",
		manage_teamspace_roles_tab_title: "Role",
		manage_teamspace_dialog_title: "Modyfikuj obszar zespołu",
		manage_teamspace_button_label: "Modyfikuj obszar zespołu",
		manage_teamspace_team_pane_heading: "Wybierz zespół",
		manage_teamspace_classes_pane_heading: "Wybierz klasy",
		manage_teamspace_entry_templates_pane_heading: "Wybierz szablony wprowadzania",
		manage_teamspace_no_rights_message: "Nie masz uprawnień wymaganych do modyfikowania tego obszaru zespołu.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Właściwości obszaru zespołu",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Określ właściwości, które będą wyświetlane dla dokumentów i folderów na liście treści, gdy użytkownicy korzystają z funkcji przeglądania w obszarze zespołu. Można również określić kolejność, w jakiej te właściwości będą wyświetlane.",
		teamspace_props_sel_cols_use_default_label: "Użyj ustawień <b>Przeglądaj</b> dla tego repozytorium",
		teamspace_props_sel_cols_use_default_tooltip: "Użyj ustawień określonych na stronie Przeglądaj dla tego repozytorium w narzędziu administracyjnym.",
		teamspace_props_general_tab_label: "Ogólne",
		teamspace_props_column_props_tab_label: "Pokazane właściwości",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Wybierz plik do importu",
		teamspace_import_template_instruction: "Można wybrać plik eksportu szablonu obszaru zespołu do zaimportowania.",
		teamspace_import_template_button_label: "Importuj",
		teamspace_import_template_dialog_label: "Importuj szablon obszaru zespołu",

		/* Annotation Dialog */
		annotationDlg_title: "Adnotacje",
		annotationDlg_description: "Wybrany dokument zawiera następujące adnotacje:",
		annotationDlg_msg_noAnnotations: "Nie istnieją żadne adnotacje. Kliknij przycisk Dodaj, aby utworzyć adnotację.",
		annotationDlg_pageLabel: "Strona: ${pageNum}",
		annotationDlg_accLabel: "DOSTĘP: ${accType}",
		annotationDlg_accLabel_public: "Publiczne",
		annotationDlg_accLabel_private: "Prywatne",
		annotationDlg_accLabel_privateGroup: "Prywatne(${groupName})",
		annotationDlg_copiable: "Można skopiować na inny serwer",
		annotationDlg_cannotCopy: "Nie można skopiować na inny serwer",
		annotationDlg_addButtonLabel: "Dodaj",

		/* Share Dialog */
		is_shared: "Udostępnione",
		is_share_pending: "Udostępnianie w toku",
		share_title: "Udostępnianie w Box",
		share_instructions_new: "Wyślij wiadomość e-mail zawierającą odsyłacz do udostępnionego pliku. Każda osoba dysponująca tym odsyłaczem będzie mogła uzyskać dostęp do pliku.",
		share_instructions_existing: "Wyślij wiadomość e-mail zawierającą odsyłacz do udostępnionego pliku. Każda osoba dysponująca tym odsyłaczem będzie mogła uzyskać dostęp do pliku. Inne osoby mogą mieć ten odsyłacz, ponieważ ktoś już udostępnił ten plik.",
		share_instructions_another_version_shared: "Wyślij wiadomość e-mail zawierającą odsyłacz do udostępnionego pliku. Każda osoba dysponująca tym odsyłaczem będzie mogła uzyskać dostęp do pliku. Inne osoby mogą mieć ten odsyłacz, ponieważ ktoś już udostępnił inną wersję tego pliku.",
		share_buttonLabel_share: "Udostępnij",
		share_email_addresses: "Wyślij do:",
		share_email_addresses_hover: "Po udostępnieniu pliku odsyłacz zostanie wysłany na następujące adresy e-mail. Jeśli nie wprowadzisz żadnego adresu, odsyłacz zostanie wysłany na Twój adres e-mail.",
		share_email_addresses_reshare_hover: "Po udostępnieniu pliku odsyłacz zostanie wysłany na następujące adresy e-mail. Jeśli nie wprowadzisz żadnego adresu, wiadomość nie zostanie wysłana.",
		share_password: "Ustaw hasło:",
		share_password_placeholder: "Opcjonalne",
		share_comments: "Wiadomość:",
		share_comments_default: "Chcę Ci udostępnić plik w usłudze Box.",
		share_myEmail: "Wyślij z adresu:",
		share_expiration: "Ustaw termin ważności odsyłacza:",
		share_expire: "Wygaśnięcie dostępu:",
		share_expire_none: "Nigdy nie wygasa",
		share_allowDownload: "Zezwalaj na pobieranie",
		share_add: "Dodaj",
		share_advanced_instructions: "Ustawienia pobierania, wygasania i hasła dotyczą pliku udostępnionego w usłudze Box.",
		share_advanced_existing_instructions: "Ustawienia pobierania, wygasania i hasła dotyczą pliku udostępnionego w usłudze Box.",
		share_options_edit_warning: "Ważne: wszelkie zmiany tych ustawień będą miały wpływ na korzystanie z odsyłacza do pliku, także przez osoby które uzyskały odsyłacz już wcześniej.",
		share_link: "Odsyłacz:",
		share_email_addresses_placeholder: "Adresy e-mail",
		share_email_address_placeholder: "Adres e-mail",
		share_email_address_invalid: "Wprowadź poprawny adres e-mail.",
		share_cannot_share_with_self: "Nie można udostępnić plików samemu sobie. Wskaż innego użytkownika.",
		share_selected_version_with_minor_warning_hover: "Wersja ${0} dokumentu jest udostępniona. Wybrano wersję ${1}.<br><br><b>Ostrzeżenie</b>: Jeśli udostępnisz wersję ${1}, to nikt nie będzie mógł udostępnić wersji${2}, dopóki nie usuniesz udostępnienia wersji ${1}.",
		share_selected_version_hover: "Wersja ${0} dokumentu jest udostępniona. Wybrano wersję ${1}.",
		share_selected_version_message: "Ważne: Wersja ${0} dokumentu jest udostępniona. Wybrano wersję ${1}.",
		share_different_version_message: "Ważne: Wybrano wersję ${1}, ale wersja ${0} dokumentu jest już udostępniona.  Nie można udostępnić wersji ${1}, zanim udostępnienie nie zostanie usunięte, można jednak udostępnić odsyłacz do wersji${0}.",
		share_version_message: "Ważne: Wersja ${0} dokumentu jest udostępniona. Wybierz wersję, którą chcesz udostępnić.",
		share_version_new: "Udostępnij wersję ${0}",
		share_version_new_p8_hover: "Udostępnienie tego dokumentu spowoduje utworzenie odsyłacza kierującego tylko do wybranej wersji.<br><br>Gdy dokument jest już udostępniony:<ul><li>Można udostępnić późniejszą wersję, a odsyłacz będzie przekierowywał do późniejszej wersji.</li><li>Nie można udostępnić wcześniejszej wersji, dopóki nie zostanie usunięte udostępnienie.</li></ul>",
		share_version_new_cm_hover: "Udostępnienie tego dokumentu spowoduje utworzenie odsyłacza kierującego tylko do wybranej wersji.<br><br>Gdy dokument jest już udostępniony:<ul><li>Można udostępnić późniejszą wersję, a odsyłacz będzie przekierowywał do późniejszej wersji.</li><li>Nie można udostępnić wcześniejszej wersji.</li></ul>",
		share_version_update: "Udostępnij wersję ${0} (zaktualizuj opcje udostępniania).",
		share_version_update_p8_hover: "Udostępnienie tego dokumentu spowoduje utrzymywanie odsyłacza tylko do tej konkretnej wersji.<br><br>Gdy dokument jest już udostępniony:<ul><li>Można udostępnić późniejszą wersję, a odsyłacz będzie przekierowywał do późniejszej wersji.</li><li>Nie można udostępnić wcześniejszej wersji, dopóki nie zostanie usunięte udostępnienie.</li></ul>",
		share_version_update_cm_hover: "Udostępnienie tego dokumentu spowoduje utrzymywanie odsyłacza tylko do tej konkretnej wersji.<br><br>Gdy dokument jest już udostępniony:<ul><li>Można udostępnić późniejszą wersję, a odsyłacz będzie przekierowywał do późniejszej wersji.</li><li>Nie można udostępnić wcześniejszej wersji.</li></ul>",
		share_version_change_to_current: "Udostępnij wersję ${0} (zaktualizuj udostępnienie tak, by dotyczyło wybranej wersji).",
		share_version_change_to_current_p8_hover: "Udostępnienie tego dokumentu powoduje aktualizację odsyłacza tak, by wskazywał na wybraną wersję.<br><br>Gdy dokument jest już udostępniony:<ul><li>Można udostępnić późniejszą wersję, a odsyłacz będzie przekierowywał do późniejszej wersji.</li><li>Nie można udostępnić wcześniejszej wersji, dopóki nie zostanie usunięte udostępnienie.</li></ul>",
		share_version_change_to_current_cm_hover: "Udostępnienie tego dokumentu powoduje aktualizację odsyłacza tak, by wskazywał na wybraną wersję.<br><br>Gdy dokument jest już udostępniony:<ul><li>Można udostępnić późniejszą wersję, a odsyłacz będzie przekierowywał do późniejszej wersji.</li><li>Nie można udostępnić wcześniejszej wersji.</li></ul>",
		share_repository: "Repozytorium na udostępniane pliki",
		share_repository_hover: "Jeśli nie widzisz repozytorium Box, którego chcesz używać, możesz dodać nowe repozytorium Box na stronie Repozytoria.",
		share_options: "Opcje udostępniania",
		unshare_confirm: "Usunięcie udostępnienia spowoduje, że wszystkie odsyłacze do dokumentu staną się niepoprawne, w tym także odsyłacze wysłane wcześniej przez innych użytkowników. Inni użytkownicy, którzy chcą udostępnić dokument, będą musieli wybrać oryginalny dokument i ponownie go udostępnić.<br><br>Czy na pewno chcesz usunąć udostępnienie?",
		unshare_button: "Usuń udostępnienie w Box",
		admin_share: "Usługi udostępniania w Box:",
		admin_share_hover: "Zezwalaj użytkownikom na udostępnianie dokumentów z każdego repozytorium, w którym włączone jest udostępnianie w Box. Udostępnienie dokumentu polega na skopiowaniu pliku do usługi Box, utworzeniu odsyłacza i wysłaniu odsyłacza w wiadomości e-mail.",
		admin_my_email_modifiable: "Zezwól użytkownikom na modyfikowanie opcji Wyślij z adresu e-mail",
		admin_my_email_modifiable_hover: "Domyślnie adres e-mail użytkownika jest przeznaczony tylko do odczytu i uzyskiwany na podstawie odwzorowania użytkowników i adresów e-mail reprezentujących konta użytkowników w usłudze Box.<br><br>Zaznacz tę opcję, aby podczas udostępniania użytkownicy mogli edytować swoje adresy e-mail. Poprawność edytowanych adresów nie będzie jednak weryfikowana.",
		admin_repos_admin_user: "Administrator udostępniania:",
		admin_repos_admin_user_hover: "Określ administratora udostępniania, jeśli masz pulpit z włączonymi usługami udostępniania w Box, a to repozytorium Box jest wybrane jako przeznaczone na udostępnione pliki.<br><br>Kliknij opcję Ustaw i zaloguj się do usługi Box przy użyciu poprawnego konta administratora usługi Box.<br><br>Administratorem udostępniania musi być użytkownik-administrator usługi Box z nieograniczonym miejscem na przechowywanie danych w tej usłudze.",
		admin_repos_admin_user_not_set_warning: "Dla wybranego repozytorium nie skonfigurowano administratora usługi Box.<br><br>Usługi udostępniania w Box będą wyłączone do czasu określenia administratora usługi Box dla wybranego repozytorium lub wybrania innego repozytorium Box, w którym jest skonfigurowany administrator usługi Box.<br><br>Możesz określić administratora usługi Box w sekcji Usługi udostępniania w Box na stronie Ogólne repozytorium.",
		admin_share_not_configured_warning: "Przed użyciem usług udostępniania w Box najpierw należy dodać i wybrać repozytorium Box z uwierzytelnianiem serwera.",
		/* Office Online Server settings */
		admin_office_online_title: "Konfiguracja usługi Office Online",
		admin_office_online_server_enable: "Serwer Office Online Server:",
		admin_office_online_server_enable_hover: "Określ, czy użytkownicy, którzy uzyskują dostęp do tego pulpitu, mają mieć możliwość edytowania swoich dokumentów pakietu Office za pośrednictwem serwera Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Zezwalaj na edycję zespołową",
		admin_office_online_allow_collaborative_editing_hover: "Zezwalaj, aby więcej niż jeden użytkownik pracował nad tym samym dokumentem. Usuń zaznaczenie tej opcji, aby ograniczyć edytowanie dokumentów do jednego użytkownika.",
		admin_office_online_repository_not_set_warning: "Przed aktywowaniem usługi Office Online należy aktywować usługę w repozytorium i określić adres URL serwera Microsoft Office Online Server. Kliknij opcję <b>Repozytoria</b>, wybierz repozytorium, a następnie kliknij zakładkę <b>Edytuj integrację</b> i aktywuj usługę. Kliknij opcję <b>Ustawienia > Ogólne</b> i wprowadź adres URL serwera Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Określ, czy chcesz korzystać z serwera Office Online Server do pracy z dokumentami pakietu Office.",
		admin_office_online_server_url: "Adres URL serwera Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Podaj adres URL, za pośrednictwem którego inne aplikacje mogą komunikować się z serwerem Office Online Server. Adres URL ma format http://nazwa_serwera:numer_portu/hosting/discovery.",
		admin_office_online_server_Verified: "Zweryfikowano",
	    admin_office_online_server_Failed: "<b>Nie powiodło się</b>",

		admin_repcfg_office_online_service_p8_hover: "Aby zainicjować w repozytorium korzystanie z serwera Office Online Server, można dodać plik szablonu początkowego dla każdej aplikacji Office. Jeśli szablon nie zostanie określony, użyty zostanie szablon domyślny.",	
		admin_repcfg_office_online_server_integration: "Integracja z serwerem MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Przed aktywowaniem serwera Office Online Server konieczne jest określenie adresu URL serwera Microsoft Office Online Server. Kliknij kolejno Ustawienia > Ogólne i wprowadź adres URL",
		admin_repcfg_office_online_word_template_name: "Domyślny szablon Word",
		admin_repcfg_office_online_excel_template_name: "Domyślny szablon Excel",
		admin_repcfg_office_online_powerpoint_template_name: "Domyślny szablon PowerPoint",
		admin_repcfg_office_online_blank_template_description: "Jest to szablon domyślny, jaki jest używany, jeśli użytkownik nie doda własnego szablonu.",
		/* Edit Service settings */
		admin_icn_edit_title: "Edytuj konfigurację",	
	    admin_icn_edit_files_cleanup_interval: "Co ile dni usuwać pliki tymczasowe:",
	    admin_icn_edit_files_cleanup_interval_hover: "Można określić czas, przez jaki pliki tymczasowe będą przechowywane w kliencie ICN Edit. Domyślny czas to 20 dni. Maksymalny czas to 20 dni. Minimalny czas to 1 dzień.",
	    admin_icn_edit_service_integration: "Integracja z usługą Edit",
	    admin_icn_edit_service_integration_intro: "Usługa Edit umożliwia użytkownikom łatwe dodawanie lub edytowanie plików w rodzimych aplikacjach zainstalowanych na ich komputerach.<br><br><b>Ważne:</b> w przypadku włączenia usługi Edit edycja predefiniowanych kategorii będzie możliwa dopiero po zapisaniu konfiguracji repozytorium.",
		admin_icn_edit_service: "Usługa Edit:",
		admin_icn_edit_enable_hover: "Aby używać usługi Edit, należy:<ul><li>Włączyć tę usługę w repozytorium</li><li>Włączyć tę usługę na pulpitach w środowisku użytkownika</li><li>Zainstalować klienta IBM Content Navigator Edit na stacjach roboczych użytkowników</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Włącz",
		admin_icn_edit_disable: "Wyłącz",
		admin_icn_edit_create_new_category: "Nowa kategoria",
		admin_icn_edit_delete_category: "Usuń kategorię",
		admin_icn_edit_edit_category: "Edytuj kategorię",
		admin_icn_edit_disable_category: "Wyłącz kategorię",
		admin_icn_edit_enable_category: "Włącz kategorię",
		admin_icn_edit_new_category_dialog_title: "Nowa kategoria",
		admin_icn_edit_edit_category_dialog_title:"Edytuj kategorię",
		admin_icn_edit_new_category_dialog_instructions: "Kategoria dokumentów umożliwia kojarzenie szablonów z określonymi typami MIME na potrzeby usługi Edit. Na przykład można skojarzyć zestaw szablonów z plikami PDF, aby użytkownicy mogli stosować szablony podczas dodawania lub edytowania plików za pomocą klienta IBM Content Navigator Edit. <br><br><b>Ważne:</b> aby możliwe było dodawanie szablonów do utworzonej kategorii, należy zapisać konfigurację repozytorium. ",
		admin_icn_edit_edit_category_dialog_instructions: "Aby możliwe było dodawanie szablonów do tej kategorii, należy zapisać konfigurację repozytorium. ",
		admin_icn_edit_delete_category_dialog_instructions: "Czy chcesz usunąć tę kategorię i wszelkie skojarzone z nią szablony?<br><br><b>Ważne:</b> zmiany zostaną utrwalone dopiero po zapisaniu zmian w repozytorium. ",
		admin_icn_edit_category_label: "Kategoria: ",
		admin_icn_edit_category_discription_label:"Opis: ",
		admin_icn_edit_template_column_head:"Nazwa szablonu",
		admin_icn_edit_category_duplicate_error_message: "Kategoria o tym identyfikatorze już istnieje. ",
		admin_icn_edit_word_category_description: "Ta kategoria definiuje dostępne szablony dokumentów Microsoft Word w usłudze Edit. ",
		admin_icn_edit_excel_category_description: "Ta kategoria definiuje dostępne szablony dokumentów Microsoft Excel w usłudze Edit. ",
		admin_icn_edit_powerpoint_category_description: "Ta kategoria definiuje dostępne szablony dokumentów Microsoft PowerPoint w usłudze Edit. ",

		icn_edit_add_template_dialog_title:"Dodaj szablon ${0}",
		icn_edit_add_template_only_one_file_error: "Można wybrać tylko jeden plik.",
		icn_edit_add_template_file_type_error: "Należy określić poprawny plik szablonu ${0}.<br><br>Typ MIME wybranego dokumentu: ${1}<br><br>Poprawne typy MIME: ${2}.",
		icn_edit_change_template_dialog_title: "Edytuj szablon ${0}",
		icn_edit_action_in_new_menu_name:"Dokument ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "w Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "w aplikacjach lokalnych",
		icn_edit_new_document_dialog_title: "Nowy dokument ${0}",
		icn_edit_new_document_dialog_intro: "Utwórz nowy dokument ${0} i dodaj go do repozytorium. Dokument zostanie utworzony z użyciem wybranego szablonu usługi Edit.", 
		icn_edit_select_edit_service_template: "Wybierz szablon",
		icn_edit_edit_service_template: "Szablon usługi Edit:",
		icn_edit_new_document_category_no_templates_message:"W tej kategorii nie ma szablonów. Skontaktuj się z administratorem, aby dodać szablony do tej kategorii.",
		icn_edit_installer: "Program instalacyjny IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Ustawienia klas i ról",
		admin_repcfg_classes_and_roles_warning: "Służy do określania klas i użytkowników lub grup użytkowników, którzy mogą tworzyć i edytować szablony dokumentów obsługiwanych przez aplikacje Office Online i usługę Edit oraz korzystać z tych szablonów.",
		admin_repcfg_classes_and_roles_click_warning: "kliknij tutaj.",
		/* Edit Service settings END */
		share_no_my_email_error: "Wystąpił problem z identyfikacją adresu e-mail potrzebnego do udostępnienia dokumentu.",
		share_no_my_email_error_explanation: "Do zalogowania się użyto identyfikatora ${0}, ale ten identyfikator użytkownika nie jest odwzorowany na adres e-mail.",
		share_no_my_email_error_userResponse: "Spróbuj zalogować się ponownie, podając inny identyfikator użytkownika. Jeśli problem nie ustąpi, zgłoś go administratorowi systemu.",
		share_no_my_email_error_adminResponse: "Identyfikator użytkownika ${0} nie jest odwzorowany na adres e-mail, a pulpit ${1} nie zezwala użytkownikom na edytowanie adresów e-mail używanych do udostępniania w usłudze Box.<br><br>Spróbuj zastosować jedno z następujących rozwiązań:<br>Upewnij się, że wytyczna odwzorowywania adresów e-mail jest zarejestrowana.<br>Upewnij się, że plik emailMappingPlugin.json zawiera identyfikator użytkownika ${0} i adres e-mail użytkownika, a następnie zbuduj, skonfiguruj i zarejestruj wtyczkę odwzorowywania adresów e-mail.<br>Jeśli nie chcesz używać wtyczki odwzorowywania adresów e-mail ani katalogu adresów e-mail systemu FileNet P8, ale chcesz zezwolić użytkownikom na samodzielne wprowadzanie swoich adresów e-mail podczas udostępniania dokumentów, możesz zmodyfikować ustawienia usług udostępniania w Box dla pulpitu, tak aby dopuszczały wysyłanie odsyłacza spod adresu e-mail innego niż odwzorowany.",
		share_no_my_email_error_0: "id_użytkownika",
		share_no_my_email_error_1: "nazwa_pulpitu",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Udostępniona jest późniejsza wersja tego dokumentu, dlatego nie możesz udostępnić wybranej wersji.",
		share_later_version_shared_error_explanation: "Nie możesz udostępnić wersji dokumentu wcześniejszej niż wersja już udostępniona.",
		share_later_version_shared_error_userResponse: "Aby wysłać odsyłacz do późniejszej wersji dokumentu, najpierw wybierz tę późniejszą wersję, a następnie użyj czynności Udostępnij.<br><br>Aby udostępnić wybraną wersję dokumentu, musisz usunąć udostępnienie późniejszej wersji.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nowa wiadomość",
		email_from: "Od:",
		email_to: "Do:",
		email_cc_link: "DW",
		email_bcc_link: "UDW",
		email_cc: "DW:",
		email_bcc: "UDW:",
		email_address_invalid: "Wprowadź poprawny adres e-mail.",
		email_subject: "Temat:",
		email_message: "Wiadomość:",
		email_message_placeholder: "Dodaj wiadomość",
		email_attachments: "Załączniki:",
		email_links: "Odsyłacze:",
		email_send: "Wyślij",
		email_dont_send: "Nie wysyłaj",
		email_subject_reminder: "Przypomnienie o temacie",
		email_subject_reminder_confirm: "Czy chcesz wysłać tę wiadomość bez dodania tematu?",
		email_missing_from_error: "Wystąpił problem z identyfikacją adresu e-mail nadawcy potrzebnego do wysłania wiadomości.",
		email_missing_from_error_explanation: "Do zalogowania się użyto identyfikatora ${0}, ale ten identyfikator użytkownika nie jest odwzorowany na adres e-mail.",
		email_missing_from_error_userResponse: "Spróbuj zalogować się ponownie, podając inny identyfikator użytkownika. Jeśli problem nie ustąpi, zgłoś go administratorowi systemu.",
		email_missing_from_error_adminResponse: "Identyfikator użytkownika ${0} nie jest odwzorowany na adres e-mail, a pulpit ${1} nie zezwala użytkownikowi na edytowanie adresu e-mail nadawcy.<br><br>Spróbuj zastosować jedno z następujących rozwiązań:<br>Upewnij się, że wytyczna odwzorowywania adresów e-mail jest zarejestrowana.<br>Upewnij się, że plik emailMappingPlugin.json zawiera identyfikator użytkownika ${0} i adres e-mail użytkownika, a następnie zbuduj, skonfiguruj i zarejestruj wtyczkę odwzorowywania adresów e-mail.<br>Jeśli nie chcesz używać wtyczki odwzorowywania adresów e-mail ani katalogu adresów e-mail systemu FileNet P8, ale chcesz zezwolić użytkownikom na samodzielne wprowadzanie swoich adresów e-mail podczas wysyłania wiadomości e-mail, możesz zmodyfikować ustawienia wiadomości e-mail dla pulpitów tak, aby dopuszczały modyfikowanie adresu e-mail nadawcy.",
		email_missing_from_error_0: "id_użytkownika",
		email_missing_from_error_1: "nazwa_pulpitu",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Nie można otworzyć dokumentu.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator nie może połączyć się z klientem IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Zainstaluj i uruchom klienta IBM Content Navigator Edit na stacji roboczej. Następnie ponownie spróbuj otworzyć dokument.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Nie można otworzyć dokumentu.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator nie może połączyć się z klientem IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Zainstaluj i uruchom klienta IBM Content Navigator Edit na stacji roboczej. Następnie ponownie spróbuj otworzyć dokument.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator nie jest poprawnie skonfigurowany dla udostępniania dokumentów.",
		share_not_configured_error_explanation: "Przed udostępnieniem dokumentów należy poprawnie skonfigurować funkcję udostępniania Box.",
		share_not_configured_error_userResponse: "Skontaktuj się z administratorem i zwróć się z prośbą o skonfigurowanie funkcji udostępniania Box.",
		share_not_configured_error_adminResponse: "Następujące elementy muszą zostać skonfigurowane przed rozpoczęciem udostępniania dokumentów:<ul><li>Konieczne jest aktywowanie usługi menedżera zadań w usługach narzędzia administracyjnego.</li><li>Id. połączenia menedżera zadań musi być skonfigurowany w repozytorium.</li><li>W repozytorium musi być aktywowana funkcja udostępniania.</li><li>Repozytorium Box musi być wybrane dla udostępniania na pulpicie.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Zmiany właściwości nie zostały zapisane dla nowej wersji",
		checkin_cors_save_attributes_error_explanation: "Wersja została utworzona, ale zmiany właściwości nie zostały zapisane. Możliwe, że dokument nadal jest pobrany.",
		checkin_cors_save_attributes_error_userResponse: "Odblokuj dokument i zaktualizuj właściwości, korzystając z opcji Właściwości w menu kontekstowym.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Zmiany właściwości nie zostały zapisane dla nowego dokumentu",
		add_cors_save_attributes_error_explanation: "Dokument został utworzony, ale zmiany właściwości nie zostały zapisane.",
		add_cors_save_attributes_error_userResponse: "Zaktualizuj właściwości, korzystając z opcji Właściwości w menu kontekstowym.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Nie można otworzyć dokumentu.",		
		edit_document_using_edit_service_error_explanation: "Nie można otworzyć dokumentu w usłudze Edit.",
		edit_document_using_edit_service_error_userResponse: "Poproś administratora o zaktualizowanie integracji z usługą Edit.<br><br> Jeśli użytkownik ma mieć dostęp do tego dokumentu z usługi Edit, przejdź w repozytorium na stronę Integracja z usługą Edit i zaktualizuj usługę Edit tak, by na liście klas zawierała klasę przeznaczoną do zmodyfikowania na potrzeby współpracy z usługą Edit.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Nie można otworzyć dokumentu.",		
		edit_document_is_editing_by_oos_error_explanation: "Dokument jest używany przez usługę Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Aby móc otworzyć dokument w usłudze Edit, należy zapisać i zamknąć go w usłudze Office Online.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Włącz przesyłanie z wykorzystaniem współużytkowania zasobów między domenami (CORS)",

		/* Email Settings */
		admin_email_settings: "Ustawienia wiadomości e-mail:",
		admin_email_settings_hover: "Określ typ obsługi poczty e-mail, z którego mają korzystać użytkownicy. Wybierając obsługę wiadomości e-mail w formacie HTML, masz możliwość pozwolenia użytkownikom na modyfikowanie adresu nadawcy. Jeśli chcesz włączyć obsługę wiadomości e-mail w języku Java, musisz posiadać przeglądarkę, która obsługuje ten format.",
		admin_email_use_service: "Użyj obsługi wiadomości e-mail w formacie HTML",
		admin_email_use_applet: "Użyj obsługi wiadomości e-mail w języku Java",
		admin_email_can_modify_from: "Zezwól użytkownikom na modyfikowanie adresu e-mail nadawcy",
		admin_email_can_modify_from_hover: "Domyślnie adresu e-mail nie można modyfikować i jest on uzyskiwany na podstawie odwzorowania użytkowników i adresów e-mail reprezentujących konta użytkowników.<br><br>Zaznacz tę opcję, aby podczas wysyłania wiadomości użytkownicy mogli edytować swoje adresy e-mail. Poprawność edytowanych adresów nie będzie jednak weryfikowana.",
		admin_email_use_from_as_sender: "Użyj adresów e-mail nadawcy jako nadawców wiadomości.",
		admin_email_use_from_as_sender_hover: "Domyślnie adres e-mail nadawcy jest używany jako adres e-mail użytkownika. Ten adres e-mail jest definiowany przez sesję poczty CNMailSession na serwerze aplikacji. Zaznacz tę opcję, aby w wiadomości był wykorzystywany adres e-mail użytkownika.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nowe adnotacje",
		addAnnotationDlg_labelContents: "Spis treści:",
		addAnnotationDlg_labelAccess: "Dostęp:",
		addAnnotationDlg_labelPublic: "Publiczne",
		addAnnotationDlg_labelPrivate: "Prywatne",
		addAnnotationDlg_labelPrivateGroup: "Prywatne dla grupy",
		addAnnotationDlg_labelGroup: "Grupa",
		addAnnotationDlg_labelCopiable: "Tę adnotację można skopiować na inny serwer.",
		addAnnotationDlg_buttonLabel_save: "Zapisz",

		/* Skip navigation */
		skipNavigation_title_main: "Powrót do spisu treści",
		skipNavigation_title_menu: "Przejdź do przycisków nawigacji",
		skipNavigation_label_main: "Powrót do spisu treści",
		skipNavigation_label_menu: "Przejdź do przycisków nawigacji",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Zarządzaj obszarami zespołu",
		manage_teamspace_pane_instance_hdr: "Obszary zespołu",
		manage_teamspace_pane_template_hdr: "Szablony",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Przewijaj do przodu",
		scroll_back: "Przewijaj do tyłu",

		breadcrumb_separator_open: "Otwórz węzeł",
		breadcrumb_separator_close: "Zamknij węzeł",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Nie wybrano żądanego elementu.",

		/* eds */
		eds_url: "Adres URL zewnętrznej usługi danych:",
		eds_request_timeout: "Limit czasu dla zgłoszenia serwisowego (w sekundach):",
		eds_is_required: "Zablokuj możliwość podejmowania przez użytkownika działań powodujących zmianę wartości właściwości w przypadku niedostępności zewnętrznej usługi danych.",

		/* eforms */
		eform_signing_pane_welcome: "Podpisz formularz",
		eform_signing_button_label: "Podpisz",
		eform_signing_pane_delete: "Usuń podpis",
		eform_signing_button_label_delete: "Usuń",

		xtplugin_server_label: "Adres URL serwera IBM FileNet Workplace XT",
		xtplugin_server_hover: "Wprowadź adres URL serwera, na którym wdrożony jest program IBM FileNet Workplace XT, na przykład http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "Adres URL serwera IBM eClient",
		ecplugin_server_hover: "Wprowadź adres URL serwera, na którym wdrożony jest program IBM eClient, na przykład http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Czynności dotyczące dużej liczby elementów mogą być czasochłonne. Czy chcesz kontynuować?",
		large_number_actions_continue_button: "Kontynuuj",

		large_items_actions_confirmation_question: "Czynności dotyczące obszernych elementów mogą być czasochłonne. Czy chcesz kontynuować?",

		viewer_editproperties_title: "Potwierdzenie",
		viewer_editproperties_title_warning: "Ostrzeżenie",
		viewer_editproperties_save: "Zapisz",
		viewer_editproperties_next: "Dalej",
		viewer_editproperties_reset: "Resetuj",
		viewer_editproperties_reset_hover: "Niezapisane dane zostaną przywrócone do poprzednio zapisanych wartości.",
		viewer_editproperties_saveandgetnext: "Zapisz i pobierz następne",
		viewer_editproperties_saveandgetnext_hover: "Po zapisaniu zmian automatycznie pobierz następny dokument",
		viewer_editproperties_prompt_save_changes: "Wprowadzono zmiany we właściwościach następującego dokumentu:<br>${0}<br><br>Czy chcesz zapisać zmiany?",
		viewer_editproperties_prompt_discard_changes: "Wprowadzono zmiany we właściwościach następującego dokumentu:<br>${0}<br><br>Jednak co najmniej jedna z właściwości ma niepoprawną wartość, zatem zapisanie zmian nie jest możliwe. Możesz skorygować niepoprawne wartości lub odrzucić zmiany.<br>Czy chcesz skorygować niepoprawne wartości widoczne w panelu właściwości?",
		viewer_comments_prompt_discard_changes: "Komentarze zostały zmodyfikowane. Czy chcesz zapisać zmiany?",
		viewer_notelogs_prompt_discard_changes: "Dzienniki uwag zostały zmodyfikowane. Czy chcesz zapisać zmiany?",
		social_collaborated_version: "Wersja: ${0}",
		social_link_label: "Kto...",

		// social comments
		comments: "Komentarze",
		comments_add_hint: "Naciśnij klawisz Enter, aby dodać komentarze.",
		comments_hint: "Wprowadź komentarze.",
		comments_label: "Naciśnij klawisz Enter lub Tab, aby zapisać komentarze. Naciśnij klawisz Esc, aby anulować.",
		comments_delete_confirmation: "Czy chcesz usunąć wybrany komentarz?",
		comments_number: "Komentarze: ${0}",
		comments_save_new: "Komentarze zostały zmodyfikowane. Czy chcesz zamknąć to okno bez zapisywania zmian?",

		notelogs: "Dzienniki uwag",
		notelogs_download: "Pobierz",
		notelog_modify: "Zapisz zmiany",
		notelog_edit: "Edytuj dziennik uwag",
		notelog_create_newVersion: "Utwórz nową wersję dziennika uwag",
		notelog_add_hint: "Wprowadź komentarz i naciśnij klawisz Enter, aby dodać.",
		notelog_hint: "Naciśnij Shift+Enter, aby przejść do następnego wiersza",
		notelog_add_placeholder: "Naciśnij klawisz Enter, aby dodać komentarze do dziennika uwag.",
		notelog_save_new: "Dziennik uwag został zmodyfikowany. Czy chcesz zamknąć to okno bez zapisywania zmian?",

		// P8 markings related
		cannot_remove_markings: "Nie masz uprawnień do usuwania wartości oznakowania: {0}.",

		// download count
		downloadcount: "Operacje pobierania: {0}",
		downloadcount_single: "1 operacja pobierania",
		downloadcount_multiple: "Liczba operacji pobierania: {0}",
		downloadcount_none: "Jeszcze nikt nie przeprowadził operacji pobierania.",

		// recommendations
		recommendations: "Rekomendacje Lubię to: {0}",
		recommendations_recommend: "Lubię to",
		recommendations_unrecommend: "Nie lubię tego",
		recommendations_you: "Ty to lubisz",
		recommendations_you_and_another: "Ty i 1 inna osoba lubicie to",
		recommendations_you_and_others: "Lubisz to Ty i {0} innych osób/inne osoby",
		recommendations_another: "1 osoba lubi to",
		recommendations_others: "Liczba osób, które to lubią: {0}",
		recommendations_none: "Nikt jeszcze tego nie polubił",

		// tags
		tags: "Znaczniki: ${0}",
		tags_delete: "Usuń ${0}",
		tags_none: "Brak jest znaczników do wyświetlenia.",
		tags_add: "Dodaj znaczniki:",
		tags_hint: "Naciśnij klawisz Enter, aby dodać znaczniki.",
		tags_hover_help: "Określ znacznik lub listę znaczników, które mogą być używane w celu wyszukiwania dokumentów zawierających taki sam znacznik. Znaczniki można rozdzielić przecinkiem (,), średnikiem (;) lub spacją.",
		tags_hover_help_box: "Określ znacznik lub rozdzielaną przecinkami listę znaczników, które mogą być używane w celu wyszukiwania dokumentów zawierających taki sam znacznik.",
		tags_no_access: "Nie masz odpowiednich uprawnień do dodawania znaczników.",

		//task scheduler pane
		taskPane_tooltip: "Otwórz widok Zadania asynchroniczne",
		taskPane_tree: "Drzewo nawigacji panelu zadań",
		taskPane_allTasks: "Wszystkie zadania",
		taskPane_scheduledTasks: "Zadania zaplanowane",
		taskPane_recurringTasks: "Zadania cykliczne",
		taskPane_inProgressTasks: "Zadania w toku",
		taskPane_completedTasks: "Zadania zakończone",
		taskPane_failedTasks: "Zadania zakończone niepowodzeniem",
		taskPane_disabledTasks: "Zadania wyłączone",
		taskPane_statusScheduled: "Zaplanowane",
		taskPane_statusInProgress: "W toku",
		taskPane_statusCompleted: "Zakończone",
		taskPane_statusFailed: "Nie powiodło się",
		taskPane_statusPaused: "Wstrzymane",
		taskPane_noItemSelected: "Nie wybrano żadnego elementu",
		taskSchedulerPane_scheduleInformation: "Informacje o harmonogramie",
		taskSchedulerPane_loginInformation: "Informacje dotyczące logowania",
		taskSchedulerPane_startImmediately: "Uruchom niezwłocznie",
		taskSchedulerPane_recurrence: "Okresowość",
		taskSchedulerPane_interval: "Odstęp",
		taskSchedulerPane_scheduleReport: "Raport dotyczący harmonogramu",
		taskSchedulerPane_nameHoverHelp: "Wprowadź nazwę zadania.",
		taskSchedulerPane_descriptionHoverHelp: "Wprowadź opis dla zadania. Opis powinien pomóc w rozróżnieniu zadań.",
		taskSchedulerPane_startTimeHoverHelp: "Określ, kiedy zadanie ma zostać uruchomione. Aby uruchomić zadanie od razu, wybierz opcję Uruchom niezwłocznie.",
		taskSchedulerPane_recurrenceHoverHelp: "Można zaplanować cykliczne uruchamianie zadania.",
		taskSchedulerPane_endTimeHoverHelp: "Określ, kiedy zadanie ma zostać zatrzymane. Zadanie jest uruchamiane w okresie od zaplanowanej godziny uruchomienia do zaplanowanej godziny zakończenia.",
		taskSchedulerPane_usernameHoverHelp: "W przypadku zadań cyklicznych należy wprowadzić nazwę użytkownika, aby usługa mogła uwierzytelnić się po uruchomieniu zadania.",
		taskSchedulerPane_passwordHoverHelp: "W przypadku zadań cyklicznych należy wprowadzić hasło określonego użytkownika, aby usługa mogła uwierzytelnić się po uruchomieniu zadania.",
		taskSchedulerPane_notification: "Powiadomienie",
		taskSchedulerPane_emailAddress: "Adres e-mail",
		taskSchedulerPane_emailAddressHoverHelp: "Wprowadź adres e-mail, na który chcesz otrzymywać powiadomienia o statusie zadania.",
		taskSchedulerPane_intervalHoverHelp: "Określ, jak długo zadanie cykliczne ma działać. Możesz ustawić odstęp czasu w godzinach, dniach, tygodniach lub miesiącach.",
		taskSchedulerPane_scheduledStartTime: "Zaplanowana godzina uruchomienia",
		taskSchedulerPane_startTime: "Godzina uruchomienia",
		taskSchedulerPane_title: "Harmonogram",
		taskSchedulerPane_runNow: "Uruchom teraz",
		taskSchedulerPane_runOnce: "Uruchom tylko raz",
		taskSchedulerPane_runAtSchedule: "Uruchom wg harmonogramu",
		taskSchedulerPane_repeats: "Powtórzenia",
		taskSchedulerPane_repeatsEvery: "Powtarzanie co",
		taskSchedulerPane_hourly: "Godzinowe",
		taskSchedulerPane_daily: "Dzienne",
		taskSchedulerPane_weekly: "Tygodniowe",
		taskSchedulerPane_monthly: "Miesięczne",
		taskSchedulerPane_yearly: "Roczne",
		taskSchedulerPane_sunday: "N",
		taskSchedulerPane_monday: "P",
		taskSchedulerPane_tuesday: "W",
		taskSchedulerPane_wednesday: "Ś",
		taskSchedulerPane_thursday: "C",
		taskSchedulerPane_friday: "P",
		taskSchedulerPane_saturday: "N",
		taskSchedulerPane_starting: "Data rozpoczęcia",
		taskSchedulerPane_after: "Po",
		taskSchedulerPane_ending: "Data zakończenia",
		taskSchedulerPane_times: "liczba powtórzeń",
		taskSchedulerPane_days: "dzień(dni)",
		taskSchedulerPane_hours: "godz. w ciągu dnia",
		taskSchedulerPane_interval: "Odstęp",
		taskSchedulerPane_endingDays: "Kończenie (w dniach)",
		taskSchedulerPane_never: "Nigdy",
		taskSchedulerPane_categorization: "Kategoryzacja",
		taskSchedulerPane_scheduleTask: "Zaplanuj zadanie",
		taskInformationPane_details: "Szczegóły",
		taskInformationPane_errors: "Błędy",
		taskInformationPane_taskInstances: "Instancje zadania",
		taskInformationPane_audits: "Kontrole",
		taskInformationPane_results: "Wyniki",
		asyncTasks: "Zadania asynchroniczne",

		//entry template pane
		search_all_entry_templates: "Wyszukaj wszystkie szablony wprowadzania.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Zobacz cały serwis",
		mobilesite: "Zobacz serwis mobilny",
		profile: "Zarządzaj profilem",
		office_template: "Szablon pakietu Office:",
		select_office_template: "Wybierz szablon pakietu Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Wybranych dokumentów nie można otworzyć w przeglądarce przy użyciu czynności scalania i dzielenia.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "Przeglądarka wybrana dla plików PDF i TIFF nie obsługuje czynności scalania i dzielenia.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Zwróć się do administratora o wybranie dla plików PDF i TIFF przeglądarki, która obsługuje czynność scalania i dzielenia, np. Daeja ViewONE Virtual Viewer.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Wybranych dokumentów PDF nie można otworzyć w przeglądarce przy użyciu czynności scalania i dzielenia.",
		document_builder_pdf_unsupported_viewer_error_explanation: "Przeglądarka wybrana dla plików PDF nie obsługuje czynności scalania i dzielenia.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Zwróć się do administratora o wybranie dla plików PDF przeglądarki, która obsługuje czynność scalania i dzielenia, np. Daeja ViewONE Virtual Viewer.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Wybranych dokumentów TIFF nie można otworzyć w przeglądarce przy użyciu czynności scalania i dzielenia.",
		document_builder_tiff_unsupported_viewer_error_explanation: "Przeglądarka wybrana dla plików TIFF nie obsługuje czynności scalania i dzielenia.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Zwróć się do administratora o wybranie dla plików TIFF przeglądarki, która obsługuje czynność scalania i dzielenia, np. Daeja ViewONE Virtual Viewer.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Wybranych dokumentów nie można otworzyć w przeglądarce przy użyciu czynności scalania i dzielenia.",
		document_builder_unsupported_documents_error_explanation: "Czynność scalania i dzielenia działa tylko z dokumentami PDF i TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Wybierz obsługiwane dokumenty i spróbuj ponownie.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Niektórych z wybranych dokumentów nie można otworzyć w przeglądarce przy użyciu czynności scalania i dzielenia.",
		document_builder_some_unsupported_documents_error_explanation: "Czynność scalania i dzielenia działa tylko z dokumentami PDF i TIFF otwartymi z tego samego repozytorium.",
		document_builder_some_unsupported_documents_error_userResponse: "Obsługiwane dokumenty zostaną otwarte w przeglądarce.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Wystąpił błąd podczas wprowadzania/zwracania zmodyfikowanej treści.",
		document_builder_checkin_failed_explanation: "Przeglądarka otrzymała informację o błędzie podczas wprowadzania/zwracania zmodyfikowanej treści.",
		document_builder_checkin_failed_userResponse: "Poproś administratora systemu o przejrzenie plików dziennika serwera aplikacji WWW.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Nie można otworzyć dokumentu.",
		no_viewer_to_view_error_explanation: "Administrator systemu zablokował wyświetlanie tego dokumentu. Jeśli musisz uzyskać dostęp do tego dokumentu, możesz go pobrać.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Nie można zbudować treści.",
		document_build_failed_userResponse: "Poproś administratora systemu o przejrzenie plików dziennika przeglądarki.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Nie można otworzyć dokumentu w trybie Scal i podziel.",
		document_builder_open_failed_userResponse: "Poproś administratora systemu o przejrzenie plików dziennika przeglądarki.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Nie udało się przełączyć systemu do trybu Scal i podziel.",
		document_builder_switch_failed_userResponse: "Poproś administratora systemu o przejrzenie plików dziennika przeglądarki.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Dokumenty",
		print_service_page_setup_tab_title: "Ustawienia strony",
		print_service_OD_print_tab_title: "Opcje drukarki",
		print_service_status_merging: "Scalanie dokumentów...",
		print_service_status_converting: "Przekształcanie dokumentów...",
		print_service_status_formatting: "Formatowanie dokumentu do drukowania...",
		admin_print_service_maximum_number_to_print: "Maksymalna liczba drukowanych dokumentów:",
		admin_print_service_maximum_size_to_print: "Maksymalna objętość drukowanych danych (w MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Określ maksymalną liczbę dokumentów, jakie użytkownicy mogą jednorazowo wydrukować. Domyślna wartość maksymalna to 50 dokumentów. Jeśli nie chcesz ograniczać liczby drukowanych dokumentów, ustaw ten limit na 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Ograniczenie:</b> To ustawienie nie jest obsługiwane w programie IBM Content Manager OnDemand.<br/><br/>Określ maksymalną ilość danych, jaką można wydrukować za pomocą usługi drukowania IBM Daeja ViewONE.<br /><br />Całkowita wielkość każdego wybranego dokumentu nie może przekraczać tej wartości.<br/><br/>Limit domyślny to 200 MB. Ustawienie tego limitu na wartość powyżej 200 MB może mieć wpływ na wydajność systemu. Jeśli nie chcesz ograniczać wielkości drukowanych dokumentów, ustaw ten limit na 0",
		// error printing
		print_service_error_printing: "Podczas drukowania wystąpił błąd.",
		print_service_error_printing_userResponse: "Poproś administratora systemu o przejrzenie plików dziennika usługi drukowania.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Wybrany dokument jest za duży, by można go było wydrukować",
		print_service_max_content_error_explanation: "Wybrany dokument przekracza limit wielkości ${0} MB.",
		print_service_max_content_error_userResponse: "Wybierz mniej dokumentów lub mniejsze dokumenty i ponownie podejmij próbę drukowania. Możesz również zwrócić się do administratora systemu, aby zwiększył maksymalną wielkość elementów, jakie można jednorazowo drukować z tego pulpitu.",
		print_service_max_content_error_0: "maksymalna_wielkość_elementów",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Nie można wydrukować elementów.",
		print_service_max_number_selected_error_explanation: "Maksymalna liczba elementów, jakie można wydrukować jednorazowo: ${0}. Liczba elementów, które próbujesz wydrukować: ${1}.",
		print_service_max_number_selected_error_userResponse: "Wybierz mniejszą liczbę elementów i ponów próbę drukowania. Możesz również zwrócić się do administratora systemu, aby zwiększył maksymalną liczbę elementów, jakie można jednorazowo drukować z tego pulpitu.",
		print_service_max_number_selected_error_0: "maksymalna_liczba_elementów",
		print_service_max_number_selected_error_1: "liczba_elementów",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


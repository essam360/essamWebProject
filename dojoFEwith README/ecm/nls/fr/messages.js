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
		welcome_user: "Bienvenue, ",
		about: "A propos de",
		all: "Tout",
		help: "Aide",
		user_session: "Session utilisateur",
		user_session_for: "Session utilisateur pour ${0}",
		user_session_for_with_container: "Session utilisateur pour ${0} (${1})",
		tools: "Outils",
		login: "Se connecter",
		logout: "Se déconnecter",
		search: "Rechercher",
		saved_searches: "Recherches enregistrées",
		content_analytics: "Analyser contenu",
		reset: "Réinitialiser",
		reset_hover: "Les données non sauvegardées dans tous les onglets seront réinitialisées à leurs valeurs précédemment sauvegardées.",
		reset_default: "Effacer tout",
		reset_default_hover: "Efface la zone de libellé en cours dans tous les onglets.",
		locale: "Paramètres régionaux :",
		up: "Haut",
		down: "Bas",
		restore: "Restaurer",
		maximize: "Agrandir",
		values_label: "Valeurs",
		value_label: "Valeur :",
		path_label: "Chemin :",
		new_label: "Nouveau :",
		back_label: "Précédent",
		clear: "Effacer",
		set: "Définir...",
		browse: "Parcourir",
		work: "Travail",
		connect: "Se connecter",
		documents: "Documents :",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM et le logo IBM sont des marques d'IBM Corporation dans de nombreux pays. Java ainsi que tous les logos et toutes les marques incluant Java sont des marques d'Oracle et/ou de ses filiales. Le produit Oracle Outside In Technology inclus est soumis à une licence qui restreint son utilisation à la présente application. Le présent Logiciel est soumis aux dispositions du contrat de licence inclus dans le Logiciel.  Ce contrat de licence se trouve dans un dossier du programme ou dans la bibliothèque sous le nom \"License\" ou \"Non_IBM_License\", si applicable, ou est fourni dans sa version imprimée. Veuillez lire ce contrat attentivement avant d'utiliser le programme. En utilisant le programme, vous acceptez ces termes. ",
		edit: "Editer",
		cancel: "Annuler",
		close: "Fermer",
		close_all: "Fermer tous les onglets",
		close_others: "Fermer les autres onglets",
		ok: "OK",
		yes: "Oui",
		no: "Non",
		open: "Ouvrir",
		refresh: "Actualiser",
		refresh_cabinets: "Actualiser toutes les armoires",
		delete_text: "Supprimer",
		export_config: "Exporter la configuration",
		description: "Description",
		true_label: "True",
		false_label: "False",
		error: "Erreur",
		error_reference_hover: "Pour plus d'informations sur cette erreur, faites des recherches sur le site www.ibm.com.",
		url_label: "URL",
		default_label: "Par défaut",
		ibm_label: "IBM",
		light_label: "Clair",
		dark_label: "Foncé",
		save: "Sauvegarder",
		saveAs: "Sauvegarder sous...",
		save_and_close: "Sauvegarder et fermer",
		append_colon: "${0} : ",
		append_comma: "${0}, ",
		none: "Aucun",
		Name: "Nom",
		"${NAME}": "Nom",
		mime_type: "Type MIME",
		mime_type_contains_label: "Le type MIME contient",
		mime_type_header: "Type MIME",
		mime_type_icon: "Icône de type MIME",
		casesearch: "Cas",
		item: "Article",
		no_mime_type: "Cet élément ne contient pas de contenu.",
		items_selected: "${0} éléments sélectionnés.",
		requestor: "Demandé par",
		scheduledStartTime: "Heure de début planifiée",
		isRecurring: "Est récurrent",
		weeks: "Semaines",
		days: "Jours",
		hours: "Heures",
		endTime: "Heure de fin",
		username: "Nom d'utilisateur",
		password: "Mot de passe",
		serverURL: "URL du serveur",
		enable: "Activer",
		disable: "Désactiver",
		finish: "Terminer",
		previous: "Précédent",
		next: "Suivant",
		schedule: "Programmation",
		removeFromThisList: "Supprimer de cette liste",
		status: "Statut",
		scheduledEndTime: "Heure de fin planifiée",
		type: "Type",
		mode: "Mode",
		startTime: "Heure de début",
		createdBy: "Créé par",
		nextScheduledTime: "Prochaine heure planifiée",
		id: "ID",
		duration: "Durée",
		repeatCycle: "Fréquence",
		taskTypeName: "Type de tâche",
		to: "à",
		filter: "Filtrer :",
		error_message: "Message d'erreur",

        file_type: "Type de document",
        word_template_name: "Nom du modèle Word",
        excel_template_name: "Nom du modèle Excel",
        powerpoint_template_name: "Nom du modèle PowerPoint",
        template_description: "Description du modèle",
        action_add_template: "Ajouter",
        action_change_template: "Editer",      
        action_edit_template_properties: "Propriétés",
        add_presentation_template: "Ajouter un modèle de présentation",
    	add_spreadsheet_template: "Ajouter un modèle de feuille de calcul",
    	add_doc_template: "Ajouter un modèle de document",    	
    	file_type_doc_hover: "Vous devez indiquer un fichier modèle de document de traitement de texte valide.<br><br>Types MIME valides : ${0}",
    	file_type_doc_error: "Vous devez indiquer un fichier modèle de document de traitement de texte valide.<br><br>Type MIME de document sélectionné : ${0}<br><br>Types MIME valides : ${1}",
    	file_type_presentation_hover: "Vous devez indiquer un fichier modèle de présentation valide.<br><br>Types MIME valides : ${0}",
    	file_type_presentation_error: "Vous devez indiquer un fichier modèle de présentation valide.<br><br>Type MIME de document sélectionné : ${0}<br><br>Types MIME valides : ${1}",
    	file_type_spreadsheet_hover: "Vous devez indiquer un fichier modèle de feuille de calcul valide.<br><br>Types MIME valides : ${0}",
    	file_type_spreadsheet_error: "Vous devez indiquer un fichier modèle de feuille de calcul valide.<br><br>Type MIME de document sélectionné : ${0}<br><br>Types MIME valides : ${1}",
    	office_online_only_one_template_error: "Vous ne pouvez sélectionner qu'un seul fichier.",
    	change_presentation_template: "Editer le modèle de présentation",
    	change_spreadsheet_template: "Editer le modèle de feuille de calcul",
    	change_doc_template: "Editer le modèle de document",
    	change_button: "Editer",
	    new_document_dialog_doc_title: "Nouveau document",
	    new_document_dialog_presentation_title: "Nouvelle présentation",
	    new_document_dialog_spreadsheet_title: "Nouvelle feuille de calcul",
	    new_document_dialog_title_label: "Titre :",
	    new_document_dialog_title_hover: "Entrez un titre pour ce document.",
	    new_document_dialog_title_missing_message: "Vous devez indiquer un titre.",
	    office_online_save_before_adding_templates_title: "Sauvegarde des modifications dans le référentiel",
	    office_online_save_before_adding_templates_error: "Vous ne pouvez pas ajouter de modèles Office tant que vous n'avez pas sauvegardé les modifications que vous avez apportées au référentiel. Cliquez sur <b>Sauvegarder et fermer</b>, puis rouvrez le référentiel pour ajouter les modèles Office.",
	    copy_to_OOS_dialog_doc_title: "Nouveau document",
	    office_online_checkin_cancelcheckout_message: "Ce document est en cours d'édition dans Microsoft Office Online. Vous ne pouvez le restituer ni annuler sa réservation tant qu'il est ouvert dans Microsoft Office Online.",
	    new_document_classification: "Classification :",
	    new_document_classification_help: "Réinitialise la classe, les propriétés et le dossier parent (s'il existe) du document source. Lors de l'ajout d'un document utilisant un modèle d'entrée, s'il existe un modèle d'entrée pour le document source, il est sélectionné automatiquement. Les propriétés du document source sont utilisées comme valeurs par défaut, mais le dossier et la classe spécifiés dans le modèle d'entrée sont préservés.",
		new_document_classification_use_source_document: "Utiliser le document source :",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Icône de type de ${0}",
		repository_name_and_type: "Type et nom de ${0}",
		select_class_label: "Sélectionner une ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Vue de détail",
		detail_view_button: "Détails",
		magazine_view_button_tooltip: "Vue synthétique",
		magazine_view_button: "Synthèse",
		filmstrip_view_button_tooltip: "Vue Pellicule",
		filmstrip_view_button: "Pellicule",

		magazine_view_show: "Afficher dans la vue Synthèse",
		detail_view_show: "Afficher dans la vue Détails",

		total_count_item: "élément",
		total_count_items: "éléments",
		total_count_more_items: "Plus de ${0} éléments",

		extension_changed: "L'extension du fichier que vous avez sélectionné ne correspond pas à celle du fichier d'origine.  Sélectionnez un autre fichier.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "L'afficheur sélectionné ne prend pas en charge tous les types de fichier. Si vous sauvegardez ce mappage d'afficheur, vous risquez de rencontrer des problèmes lors de l'affichage des documents. Il est recommandé de sélectionner un afficheur prenant en charge tous les types de fichier si l'option Tous les types de fichier est sélectionnée.<br><br><b>Astuce :</b> les afficheurs suivants prennent en charge tous les types de fichier :<ul><li>Applet Viewer</li><li>Afficheur AJAX</li><li>Conversion HTML</li><li>Conversion PDF</li><li>Navigateur Web</li></ul>",
		file_type_any: "Tous les types de fichier",
		file_type_any_hover: "Sélectionnez cette option si vous souhaitez utiliser l'afficheur sélectionné pour afficher tous les documents, quel que soit le type de fichier. Cette option est prise en charge pour les afficheurs suivants :<br><br><ul><li>Applet Viewer</li><li>Afficheur AJAX</li><li>Conversion HTML</li><li>Conversion PDF</li><li>Navigateur Web</li></ul><br><br><b>Rappel :</b> si vous souhaitez utiliser des afficheurs spécifiques le plus souvent, tous les mappages que vous créez et qui utilisent cette option doivent être déplacés à la fin de votre mappe d'afficheur. ",
		file_type_input: "Nouveau type de fichier :",

		mime_type_input: "Nouveau type MIME :",
		mime_type_input_invalid: "Le nouveau type MIME ne doit pas contenir l'un des caractères suivants : ,",
		mime_type_available: "Types MIME disponibles",
		mime_type_selected: "Types MIME sélectionnés",
		file_type_input: "Nouveau type de fichier :",
		file_type_input_invalid: "Le nouveau type de fichier ne doit pas contenir l'un des caractères suivants : ,",
		file_type_available: "Types de fichier disponibles",
		file_type_selected: "Types de fichier sélectionnés",
		file_type_header: "Type de fichier",
		viewer: "Afficheur :",
		viewer_viewer: "Afficheur",
		viewer_view: "Afficher",
		viewer_preview: "Aperçu",
		viewer_merge_and_split: "Fusionner et séparer",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Aperçu uniquement",
		preview_only_label: "(aperçu)",
		preview_only_hover: "Ce mappage d'afficheur ne sera utilisé que lorsqu'un utilisateur clique sur <b>Aperçu</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Ce référentiel ne prend pas en charge la navigation. Sélectionnez un autre référentiel.",

		repository_community_teamspace_message: "Un autre référentiel est déjà défini comme le référentiel des bibliothèques communautaires. Si vous souhaitez continuer à utiliser le référentiel existant en tant que référentiel de bibliothèques communautaires, sélectionnez <b>Non</b> avant de sauvegarder vos modifications afin d'éviter que le référentiel existant ne soit remplacé par ce référentiel.",

		favorites_empty: "Vous n'avez actuellement aucun favori.",
		syncItems_empty: "Vous n'avez actuellement aucun fichier synchronisé.",

		root_folder_id: "ID du dossier racine",
		unified_searches: "Recherches croisées dans les référentiels :",
		max_results: "Nombre de résultats :",
		direct_retrieve_enabled: "Extraction directe :",
		itemTypesToDisplay: "Types d'élément à afficher:",
		allItemTypes: "Tous les types d'élément",
		include_attr_group_name: "Attribuer des descriptions de groupe dans les noms d'affichage d'attribut :",
		admin_repcfg_include_attr_group_name_hover: "Par défaut, la description du groupe d'attributs est comprise dans les noms pour les attributs de groupe d'attributs. Ceci permet aux utilisateurs de voir à quel groupe d'attributs un attribut de groupe d'attributs appartient lorsqu'ils utilisent des attributs.<br>Par exemple, les utilisateurs peuvent voir le nom suivant pour un attribut de groupe d'attributs : Document Settings.Document Type.<br><br>Si vous désactivez cette option, seule la description d'attribut est utilisée pour le nom d'attribut du groupe d'attributs.<br>Par exemple, les utilisateurs verront ce nom : Type de document.<br><br>Sans la description du groupe d'attributs, les utilisateurs peuvent ne pas savoir si le Type de document est l'attribut simple ou un attribut de groupe d'attributs.",
		documentItemTypesOnly: "Types d'élément de modèle de document uniquement",
		object_store: "Nom symbolique de la librairie :",
		object_store_display_name: "Nom d'affichage de la librairie :",
		teamspaceUpgradeMsg: "Vos espaces d'équipe seront mis à jour lorsque vous enregistrez la configuration de votre référentiel. Si vous possédez plusieurs espaces d'équipe, la mise à jour peut durer plusieurs minutes.",
		synchUpgradeMsg: "Le module de synchronisation sur ce référentiel sera mis à jour lors de l'enregistrement de votre configuration de référentiel.",
		protocol: "Protocole :",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID référentiel CMIS :",
		cmis_url: "URL du document de service de liaison CMIS AtomPub",
		trace_level: "Niveau de trace",
		trace_dir: "Répertoire de trace",
		temp_dir: "Répertoire temporaire",
		show_document_location: "Afficher l'emplacement du document",
		max_folders: "Nombre maximum de dossiers",
		afp_conversion: "Conversion en AFP",
		line_conversion: "Conversion de données en mode ligne",
		max_hits: "Nombre maximum de résultats",
		folder_search_expresssion: "Expression de recherche de dossier",
		max_item_types: "Nombre maximum de types d'élément",
		max_worklists: "Nombre maximum de listes de travail",
		update_storage_collection: "Mettre à jour la collection de stockage",
		include_mime_types_in_search_results: "Inclure les types MIME dans les résultats de recherche",
		object_type: "Type d'objet",
		object_type_document: "Documents",
		object_type_folder: "Dossiers",
		file_label: "Fichier :",
		plugin_jarfile_path_label: "Chemin d'accès au fichier JAR :",
		plugin_classfolder_path_label: "Chemin d'accès au fichier classe :",
		plugin_classname_label: "Nom de classe :",
		plugin_id_label: "ID du plug-in :",
		class_label: "Classe",
		configuration: "Configuration",
		connect_repository: "Se connecter...",
		server_type: "Type de serveur",
		timeout_in_seconds: "Délai d'attente (en secondes) :",
		default_search_template: "Recherche par défaut",
		search_filtered_properties: "Propriétés pouvant être recherchées",
		property_contains_label: "La propriété contient",
		class_contains_label: "La classe contient",
		search_filtered_operators: "Opérateurs de recherche",
		default_search_results: "Résultats de la recherche",
		data_type: "Type de données",
		status_bar: "Barre d'état",
		operators_for: "Opérateurs pour :",
		currentUser: "Utilisateur en cours",
		nameContains: "Le nom contient",
		searchFor: "Rechercher",
		server_autentication: "Authentification de serveur (OAuth 2.0 avec JWT)",
		standard_authentication: "Authentification standard (OAuth2.0 à trois acteurs)",
		developer_authentication: "Authentification de développeur",
		enterprise_id: "ID entreprise :",
		public_key_id: "ID clé publique :",
		private_key_path: "Chemin d'accès au fichier de clé privée :",
		server_user_email: "E-mail de l'utilisateur du serveur",

		filter_builder_tooltip: "Définir un filtre",

		// Launch bar
		launchbar_home: "Ouvrir l'accueil",
		launchbar_favorites: "Ouvrir les favoris",
		launchbar_browse: "Ouvrir la vue Parcourir",
		launchbar_browse_popup: "Ouvrir la liste en incrustation Parcourir",
		launchbar_search: "Ouvrir la vue Rechercher",
		launchbar_search_popup: "Ouvrir la liste en incrustation Rechercher",
		launchbar_teamspaces: "Ouvrir la vue Espaces d'équipe",
		launchbar_teamspaces_popup: "Ouvrir la liste en incrustation Espaces d'équipe",
		launchbar_work: "Ouvrir la vue Travail",
		launchbar_work_popup: "Ouvrir la liste en incrustation Travail",
		launchbar_entry_templates: "Ouvrir la vue Modèles d'entrée",
		launchbar_entry_templates_popup: "Ouvrir la liste en incrustation Modèles d'entrée",
		launchbar_admin: "Ouvrir la vue Administration",

		admin_sync_server: "Services de synchronisation",
		admin_settings: "Paramètres",
		admin_interface_text: "Libellés",
		admin_interface_text_desktop: "Bureau :",
		admin_desktops: "Bureaux",
		admin_repositories: "Référentiels",
		admin_mobile: "Mobile",
		admin_menus: "Menus",
		admin_reason_codes: "Motifs d'occultation",
		admin_plugins: "Plug-in",
		admin_plugins_state_enabled: "Le plug-in est activé",
		admin_plugins_state_disabled: "Le plug-in est désactivé",
		admin_plugins_version: "Version :",
		admin_plugins_version_heading: "Version",
		admin_plugins_icon: "Icône de plug-in",
		admin_viewer_mapping_icon: "Icône de mappage d'afficheur",
		admin_viewer_defs: "Mappes d'afficheur",
		admin_viewer_dialog_title: "Mappage",
		admin_viewer_dialog_new_title: "Nouveau mappage",
		admin_viewer_dialog_instructions: "Un mappage spécifie quel afficheur utiliser pour les fichiers dans un référentiel. Vous pouvez créer plusieurs mappages pour spécifier différents afficheurs pour différents types de fichiers. Vous pouvez utiliser un type MIME ou une extension de fichier pour définir un mappage. Les mappages avec des extensions de fichier seront mappés à des noms de document. Par exemple, un mappage avec le type de fichier gif sera mappé à des noms de document qui se terminent par l'extension .gif",
		admin_desktop_viewer_defs: "Mappe d'afficheur :",
		admin_desktop_viewer_defs_hover: "La mappe d'afficheur indique quel afficheur est utilisé pour ouvrir différents types de documents sur le référentiel.<br><br>Vous pouvez créer de nouvelles mappes d'afficheur dans la section <b>Mappes d'afficheur</b> de l'outil d'administration.",
		admin_desktops_used: "Utilisé dans les bureaux",
		admin_desktop_additional_settings: "Paramètres supplémentaires :",
		admin_default_desktop: "Définir en tant que bureau par défaut",
		admin_default_desktop_header: "Bureau par défaut",
		admin_layout_tab_title: "Présentation",
		admin_desktop_icon: "Icône de bureau",

		// Themes
		admin_themes: "Thèmes",
		admin_theme_list_instructions: "Vous pouvez créer un thème pour personnaliser plus facilement le client Web pour votre organisation. Vous pouvez créer plusieurs thèmes si vous avez besoin d'utiliser des couleurs, polices ou logos différents pour différents bureaux dans votre environnement.<br><br>Une fois que vous avez créé un thème, vous pouvez l'appliquer à un bureau en configurant le thème sur l'onglet <b>Apparence</b> du bureau.",
		admin_theme_instructions: "Créez un thème pour contrôler les couleurs et polices qui s'affichent sur le client Web. En outre, vous pouvez utiliser le thème pour modifier le logo, le nom de l'application et le texte de copyright qui s'affichent sur la page de connexion et dans la bannière.",
		admin_theme_heading: "Thème : <b>${0}</b>",
		admin_new_theme: "Nouveau thème",
		admin_text_theme: "Thème",
		admin_delete_confirmation_themes: "Souhaitez-vous supprimer les thèmes sélectionnés ?\n${0} thèmes sont sélectionnés.",
		admin_theme_color: "Couleur",
		admin_theme_text: "Texte",
		admin_theme_solid: "Plein",
		admin_theme_gradient: "Dégradé",
		admin_theme_box: "Box",
		admin_theme_color_label: "Couleur ${0} :",
		admin_theme_name_invalid: "Le nom du thème ne peut pas contenir l'un des caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_theme_id_hover: "L'ID de thème doit être unique et vous ne pouvez pas le modifier après avoir sauvegardé le thème.<br><br>L'ID peut contenir uniquement des caractères alphanumériques.",
		admin_theme_name_hover: "Le nom ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automatique",
		admin_theme_logo_url_hover: "Entrez l'URL du fichier du logo. Si le logo se trouve sur le même serveur d'applications web que le client web, entrez une URL relative. Par exemple : /mycustomizations/banner_logo.png<br><br>Il est recommandé d'afficher le logo sur un arrière-plan transparent.",
		admin_theme_color_palette_title_heading: "Palette de couleurs",
		admin_theme_color_palette_help_text: "Créez la palette de couleurs pour votre thème, à l'aide de la valeur hexadécimale du sélecteur de couleur. Vous pouvez ajouter autant de couleurs que vous le souhaitez.",
		admin_theme_color_add_button_label: "Ajouter couleur",
		admin_theme_color_remove_button_label: "Supprimer couleur",
		admin_theme_global_title_heading: "Eléments au niveau de l'application",
		admin_theme_global_font: "Famille de polices :",
		admin_theme_global_font_hover: "Sélectionnez la police à utiliser dans le client Web. Les polices sont répertoriées par ordre de priorité ; la police suivante de la liste est utilisée uniquement si la police précédente n'est pas installée sur la machine client.",
		admin_theme_global_framework_color_label: "Couleur de cadre :",
		admin_theme_global_framework_color_hover: "Sélectionnez la couleur à utiliser pour les éléments suivants :<ul><li>Barres de titre sur les boîtes de dialogue</li><li>Couleur de mise en surbrillance en haut de l'onglet sélectionné</li><li>Icônes de la vue de liste de contenu (vue Détails, vue Synthétique, vue Pellicule)</li></ul><br>Cette couleur n'est pas utilisée pour les séparateurs entre les sections du client Web. Si vous souhaitez modifier la couleur des séparateurs, vous devez créer un plug-in pour fournir un fichier CSS personnalisé.",
		admin_theme_color_global_toolbar: "Couleur de la barre d'outils globale :",
		admin_theme_color_global_toolbar_hover: "Si vous incluez la barre d'outils globale dans le client Web, sélectionnez la couleur de la barre d'outils.<br><br><b>Astuce :</b> la barre d'outils s'affiche dans la bannière en haut du client Web, de sorte que la couleur de la barre d'outils doit compléter la couleur de la bannière.",
		admin_theme_global_selected_color: "Couleur d'élément sélectionné :",
		admin_theme_global_selected_color_hover: "Sélectionnez la couleur à utiliser lorsque des éléments sont sélectionnés dans l'arborescence de navigation, l'arborescence de recherche et la liste de contenu.<br><br>La couleur d'infobulle (couleur utilisée lorsqu'un utilisateur passe sur un élément) dérive de cette couleur.",
		admin_theme_global_link_color: "Couleur de lien :",
		admin_theme_global_link_color_hover: "Sélectionnez la couleur à utiliser pour toutes les adresses URL cliquables dans le client Web. Par exemple, cette couleur est utilisée dans les liens En savoir plus qui s'affichent dans le client Web.",
		admin_theme_login_title_heading: "Eléments de la page de connexion",
		admin_theme_page_background_label: "Couleur d'arrière-plan de la page de connexion :",
		admin_theme_login_page_background_hover: "Sélectionnez la couleur à afficher derrière le panneau de connexion.",
		admin_theme_login_pane_background_label: "Couleur d'arrière-plan du panneau de connexion :",
		admin_theme_login_pane_background_hover: "Sélectionnez une couleur à afficher pour le panneau de connexion. Cette couleur doit compléter la couleur d'arrière-plan de la page de connexion.",
		admin_theme_text_color: "Couleur de texte :",
		admin_theme_login_pane_text_color_hover: "Sélectionnez une couleur à utiliser pour le texte du panneau de connexion. Cette couleur est utilisée pour le texte de bienvenue et les libellés de zones. Cette couleur doit être lisible par rapport à la couleur d'arrière-plan du panneau de connexion.",
		admin_theme_copyright_text: "Texte de copyright :",
		admin_theme_copyright_text_hover: "Indiquez si vous souhaitez afficher le texte de copyright sur la page de connexion.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Pas de texte de copyright",
		admin_theme_banner_title_heading: "Eléments de la bannière",
		admin_theme_text_icons_color: "Couleur du texte et de l'icône :",
		admin_theme_icon_color_label: "Couleur de l'icône :",
		admin_theme_shadow_label: "Ombre :",
		admin_theme_banner_text_icons_hover: "Sélectionnez une couleur à utiliser pour le texte et les icônes dans la bannière. Cette couleur doit être lisible sur la couleur d'arrière-plan de la bannière.",
		admin_theme_banner_product_name_label: "Nom de produit :",
		admin_theme_banner_product_name_hover: "Lorsque vous créez un bureau, vous pouvez indiquer un nom personnalisé à afficher pour l'application. Si vous ne spécifiez pas de nom personnalisé, IBM Content Navigator est utilisé en tant que nom du produit. Indiquez si vous souhaitez utiliser le nom d'application défini sur le bureau ou une image à la place d'un nom.",
		admin_theme_banner_product_name_desktop_defined_label: "Utiliser un nom du bureau",
		admin_theme_banner_product_name_image: "Utiliser le logo personnalisé (URL)",
		admin_theme_background_color_label: "Couleur d'arrière-plan :",
		admin_theme_style_label: "Style :",
		admin_theme_banner_color_hover: "Sélectionnez une couleur à utiliser pour la bannière en haut de l'application.<br><br><b>Astuce :</b> Assurez-vous que la couleur du texte ressort suffisamment par rapport à la couleur d'arrière-plan de la bannière.",
		admin_theme_buttons_title_heading: "Boutons",
		admin_theme_navigation_title_heading: "Eléments de navigation",
		admin_theme_navigation_icon_selected_label: "Couleur d'icône sélectionnée :",
		admin_theme_navigation_background_hover: "Sélectionnez une couleur à utiliser pour l'arrière-plan de la barre des fonctions.",
		admin_theme_navigation_icon_color_hover: "Sélectionnez une couleur à utiliser pour les icônes de la barre des fonctions. Avec la disposition par défaut sur un bureau, cette couleur doit contraster avec l'arrière-plan du menu déroulant de fonction. Avec la disposition classique, elle doit contraster avec l'arrière-plan de la barre des fonctions.",
		admin_theme_navigation_icon_selected_hover: "Sélectionnez une couleur à utiliser pour la fonction sélectionnée dans la barre des fonctions. Elle doit compléter la couleur des icônes et la couleur d'arrière-plan de la barre des fonctions.<br><br>Avec la disposition classique sur un bureau, cette couleur est utilisée comme couleur de survol dans la barre des fonctions.",
		admin_theme_button_background_color_hover: "Sélectionnez une couleur à utiliser pour les arrière-plans de bouton.",
		admin_theme_button_style_hover: "Sélectionnez un style de bouton.",
		admin_theme_button_text_icon_color_hover: "Sélectionnez une couleur à utiliser pour le texte et les images sur les boutons.",
		admin_theme_no_logo_label: "Aucun logo",
		admin_theme_custom_logo_label: "Logo personnalisé (URL)",
		admin_theme_banner_type: "Style de remplissage de la bannière :",
		admin_theme_banner_type_hover: "Indiquez si l'effet de remplissage de la bannière est une couleur pleine ou un dégradé. Si vous optez pour un dégradé, la couleur de bannière que vous choisissez correspondra à la couleur la plus foncée.<br><br><b>Astuce :</b> Assurez-vous que la couleur du texte ressort suffisamment par rapport à la couleur d'arrière-plan de la bannière.",
		admin_theme_icon: "Icône de thème",
		admin_theme_buttons_and_links_title_heading: "Boutons, zones et liens",
		admin_theme_button_style_label: "Style de bouton :",
		admin_theme_theme_style_label: "Style de thème :",
		admin_theme_theme_style_hover: "Sélectionnez le style sur lequel baser le thème. Vous pouvez modifier le système à tout moment lors de la création ou de la modification d'un thème. Lors du changement de style, les valeurs par défaut des paramètres de thème sont rétablies.",
		admin_theme_accent_color_label: "Couleur accent :",
		admin_theme_accent_color_hover: "Sélectionnez la couleur à utiliser pour la barre située dans la partie supérieure d'une boîte de dialogue et pour l'indicateur de chargement.",
		admin_theme_global_toolbar_text_color_label: "Couleur de texte de la barre d'outils globale :",
		admin_theme_global_toolbar_text_color_hover: "Si vous incluez la barre d'outils globale dans le client Web, sélectionnez la couleur à utiliser pour le texte dans la barre d'outils.",
		admin_theme_banner_text_color_hover: "Sélectionnez la couleur à utiliser pour le texte dans la bannière.",
		admin_theme_banner_icon_color_hover: "Sélectionnez la couleur à utiliser pour les icônes dans la bannière.",
		admin_theme_button_color_label: "Couleur :",
		admin_theme_button_color_hover: "Sélectionnez la couleur à utiliser pour les éléments suivants :<ul><li>Barres de titre sur les boîtes de dialogue</li><li>Couleur de mise en surbrillance en haut de l'onglet sélectionné</li><li>Icônes de la vue de liste de contenu (vue Détails, vue Synthétique, vue Pellicule)</li><li>Boutons, zones et liens</li></ul>La couleur utilisée lorsqu'un utilisateur survole un bouton dérive de cette couleur. Cette couleur n'est pas utilisée pour les séparateurs entre les sections du client Web. Si vous souhaitez modifier la couleur des séparateurs, vous devez créer un plug-in pour fournir un fichier CSS personnalisé.",
		admin_theme_theme_style_col_header: "Style du thème",

		admin_syncserver_consistency_checker: "Vérificateur de cohérence :",
		admin_syncserver_consistency_checker_hover: "Exécutez le vérificateur de cohérence pour vous assurer que les bases de données du service de synchronisation contiennent des informations à jour sur le statut de chaque élément du serveur. Par exemple, vous pouvez exécuter le vérificateur de cohérence après une indisponibilité de la base de données des services de synchronisation pour obtenir des informations sur les documents qui ont été mis à jour sur le référentiel lors de l'indisponibilité.",
		admin_syncserver_consistency_checker_button: "Exécuter le vérificateur de cohérence",
		admin_syncserver_consistency_checker_started: "Démarré :",
		admin_syncserver_consistency_checker_ended: "Terminé :",
		admin_syncserver_consistency_checker_duration: "Durée :",
		admin_syncserver_consistency_checker_items_processed: "Eléments de synchronisation traités :",
		admin_syncserver_consistency_checker_items_processed_success: "Eléments de synchronisation traités correctement :",
		admin_syncserver_consistency_checker_items_discovered: "Nouveaux éléments de référentiel découverts :",
		admin_syncserver_consistency_checker_change_updates: "Total de mises à jour :",
		admin_syncserver_consistency_checker_state: "Etat :",
		admin_syncserver_consistency_checker_state_done: "Terminer",
		admin_syncserver_consistency_checker_state_running: "En cours d'exécution",
		admin_syncserver_consistency_checker_user: "Envoyé par :",
		admin_syncserver_consistency_checker_scheduled: "Planifié :",

		admin_syncserver_dbcleanup: "Nettoyage de la base de données",
		admin_syncserver_dbcleanup_hover: "Exécutez l'outil de nettoyage pour supprimer tous les éléments et périphériques inutilisés qui ne sont plus synchronisés à partir de la base de données.",
		admin_syncserver_dbcleanup_button: "Nettoyage de la base de données",
		admin_syncserver_dbcleanup_state_done: "Terminer",
		admin_syncserver_dbcleanup_state_running: "En cours d'exécution",
		admin_syncserver_dbcleanup_started: "Démarré :",
		admin_syncserver_dbcleanup_ended: "Terminé :",
		admin_syncserver_dbcleanup_state: "Etat :",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Référentiels supprimés :",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Elément synchronisé supprimé :",
		admin_syncserver_dbcleanup_devicedeleted_count: "Périphériques supprimés :",
		admin_syncserver_dbcleanup_deviceexpired_count: "Périphériques expirés :",

		admin_syncserver_publicSyncUrl: "URL publique des services de synchronisation :",
		admin_syncserver_publicSyncUrl_hover: "Indiquez l'adresse URL par le biais de laquelle les référentiels communiquent avec les services de synchronisation d'IBM Content Navigator. Le format par défaut de cette adresse URL est http://URL_publique_sync:numéro_port/sync/notify.",

		admin_syncserver_managed: "Paramètres du client de synchronisation :",
		admin_syncserver_managed_hover: "Les utilisateurs ne peuvent pas modifier ces paramètres dans le client de synchronisation d'IBM Content Navigator.",
		admin_syncserver_managed_subfolder: "Niveaux de dossier à synchroniser",
		admin_syncserver_managed_subfolder_hover: "Si un utilisateur synchronise un dossier, indiquez le nombre maximum de dossiers qui seront synchronisés. Par exemple, si un utilisateur indique 3 niveaux de dossier, le dossier que l'utilisateur synchronise et les 2 niveaux de sous-dossiers sont synchronisés.<br><br>Vérifiez que votre environnement est suffisamment développé pour prendre en charge le volume de trafic de synchronisation créé par ce paramètre.",
		admin_syncserver_managed_subfolder_all: "Tous les sous-dossiers",
		admin_syncserver_managed_subfolder_none: "Aucun sous-dossier",
		admin_syncserver_managed_subfolder_no_more: "Niveaux limités",
		admin_syncserver_managed_subfolder_levels: "dossiers",
		admin_syncserver_managed_schedule: "Planning de synchronisation",
		admin_syncserver_managed_schedule_hover: "Vérifiez que votre environnement est suffisamment développé pour prendre en charge le volume de trafic de synchronisation créé par le planning de synchronisation.<br><br>L'intervalle maximum est de 24 heures ou 1440 minutes.<br><br>Les utilisateurs peuvent remplacer le planning de synchronisation en cliquant sur <b>Synchroniser maintenant</b> dans le client.",
		admin_syncserver_managed_schedule_manual: "Synchronisation manuellement",
		admin_syncserver_managed_schedule_continuous: "Synchronisation en continu",
		admin_syncserver_managed_schedule_every: "Synchronisation à un intervalle spécifié",
		admin_syncserver_managed_schedule_minutes: "Minutes",
		admin_syncserver_managed_schedule_hours: "Heures",

		// redaction codes
		admin_new_reason_code: "Nouveau motif d'occultation",		
		admin_reason_code_name_invalid: "Le nom du motif d'occultation ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "La description ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "La description ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "Le nom ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description: "Description :",
		admin_reason_code_applications_hover: "Liste des applications Datacap faisant référence à ce motif d'occultation.",
		admin_reason_code_applications: "Applications Datacap",
		admin_delete_confirmation_reason_codes: "Voulez-vous supprimer les motifs d'occultation sélectionnés ?",
		admin_delete_confirmation_reason_code: "Voulez-vous supprimer le motif d'occultation sélectionné ?",
		admin_reason_code_heading: "Motifs d'occultation : <b>${0}</b>",
		admin_reason_code_list_instructions: "Les motifs d'occultation indiquent pourquoi les données sensibles sont masquées à des fins de protection. Ils indiquent chacun un type de données sensibles qui sont masquées pour les utilisateurs généraux.",
		admin_reason_code_instructions: "Vous pouvez créer un motif d'occultation pour chaque type de données sensibles. Le motif peut ensuite être utilisé dans une règle d'occultation pour définir qui peut voir ces données et qui peut créer ou modifier des occultations.",
		admin_reason_code_applications_label: "Applications Datacap",
		admin_reason_code_repositories: "Référentiels",
		admin_reason_code_repositories_label: "Référentiels",
		admin_reason_code_repositories_hover: "Liste des référentiels ICN référençant ce motif d'occultation.",
		admin_reason_code_repositories_default_value: "Non défini",
		admin_reason_code_description_label: "Description",
		admin_reason_code_applications_default_value: "Non défini",
		admin_redaction_reasons: "Motifs d'occultation",
		admin_redactions: "Occultations basées sur les rôles",
		admin_redactions_policies_roles: "Règles et rôles",
		admin_reasons: "Motifs",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "Impossible d'éditer l'ID.  Ce dernier peut être copié dans le presse-papiers",
		// Role based administration
		admin_rba: "Administration de bureau basée sur le rôle",
		admin_rba_mobile_access_enabled: "Ce bureau est activé pour l'accès mobile.",
		admin_rba_mobile_access_disabled: "Ce bureau n'est pas activé pour l'accès mobile.",
		admin_rba_confirm_delete_multiple: "Voulez-vous supprimer les rôles d'administration sélectionnés ?",
		admin_rba_confirm_delete_single: "Voulez-vous supprimer le rôle d'administration sélectionné ?",
		admin_rba_delete_multi_role_desktop: "Un ou plusieurs des rôles que vous avez sélectionnés sont affectés à un bureau. Vous devez les retirer des bureaux pour pouvoir les supprimer.",
		admin_rba_delete_single_role_desktop: "Le rôle que vous avez sélectionné est affecté au bureau ${0}. Vous devez l'en retirer pour pouvoir le supprimer.",
		admin_desktop: "Bureau",
		admin_rba_instructions: "Vous pouvez créer et gérer des rôles d'administration de bureau, qui associent des privilèges accordés aux administrateurs de bureau.",
		admin_rba_not_used: "${0} n'est utilisé dans aucun bureau.",
		admin_rba_desktops: "<b>${0} est utilisé dans les bureaux suivants :</b>",
		admin_rba_new_role: "Nouveau rôle",
		admin_rba_name_invalid: "Le nom du rôle d'administration ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "La description ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "La description ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "Le nom ne peut pas contenir les caractères suivants : * \\ / : ? \" &lt; &gt; |",
		admin_rba_description: "<b>Description :</b> ${0}",
		admin_rba_membership: "Appartenance",
		admin_rba_general_priv: "Général",
		admin_rba_appearance_priv: "Apparence",
		admin_rba_desktop_config_priv: "Configuration du bureau",
		admin_rba_app_name_priv: "Nom d'application",
		admin_rba_theme_priv: "Thème",
		admin_rba_viewer_map_priv: "Mappe d'afficheur",
		admin_rba_merge_split_priv: "Fusionner et séparer",
		admin_rba_sync_svc_priv: "Services de synchronisation",
		admin_rba_menus_priv: "Menus",
		admin_rba_edit_svc_priv: "Services d'édition",
		admin_rba_toolbars_priv: "Barres d'outils",
		admin_rba_ctx_menus_priv: "Menus contextuels",
		admin_rba_office_ribbon_priv: "Commandes de la barre du ruban MS Office",
		admin_rba_office_menues_priv: "Menus contextuels de MS Office",
		admin_rba_addl_settings_priv: "Autres paramètres",
		admin_rba_mobile_priv: "Mobile",
		admin_rba_add_doc_dlg_priv: "Boîte de dialogue d'ajout de document",
		admin_rba_doc_mgmt_priv: "Gestion de document",
		admin_rba_def_redaction_priv: "Option d'occultation par défaut",
		admin_rba_add_photos_priv: "Ajouter des photos de l'appareil photo et de la bibliothèque de photos",
		admin_rba_time_stamp_priv: "Horodatage",
		admin_rba_add_docs_folders_priv: "Ajouter des documents et créer des dossiers dans le référentiel",
		admin_rba_open_docs_priv: "Ouvrir des documents dans d'autres applications",
		admin_rba_office_config_priv: "Configuration Office",
		admin_rba_tab_label_priv: "Libellé de l'onglet IBM ECM",
		admin_rba_feature_sel_priv: "Sélection de fonction",
		admin_rba_general_config_priv: "Configuration générale",
		admin_rba_favorites_priv: "Favoris",
		admin_rba_add_options_priv: "Ajouter des options dans le groupe Editer",
		admin_rba_browse_priv: "Parcourir",
		admin_rba_outlook_int_priv: "Intégration d'Outlook",
		admin_rba_search_priv: "Rechercher",
		admin_rba_layout_priv: "Présentation",
		admin_rba_case_priv: "Cas",
		admin_rba_desktop_feat_priv: "Fonctions de bureau",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Fonctions affichées",
		admin_rba_branding_priv: "Marque",
		admin_rba_home_priv: "Accueil",
		admin_rba_main_color_priv: "Couleur principale",
		admin_rba_sec_color_priv: "Couleur secondaire",
		admin_rba_teamspaces_priv: "Espaces d'équipe",
		admin_rba_rbr_priv: "Occultation basée sur les rôles",
		admin_rba_et_mgr_priv: "Gestionnaire de modèle d'entrée",
		admin_rba_policies_roles_priv: "Gérer les règles et les rôles",
		admin_rba_work_priv: "Travail",
		admin_rba_reasons_priv: "Codes raison",
		admin_rba_tasks_priv: "Tâches asynchrones",
		admin_rba_auth_priv: "Authentification",
		admin_rba_all_privs: "Tous les privilèges",
		admin_rba_some_privs: "Certains privilèges",
		admin_rba_no_privs: "Aucun privilège",
		admin_add_users_groups_priv: "Ajouter des utilisateurs et des groupes",
		admin_url_features_priv: "Gérer les fonctions d'URL",
		admin_plugin_features_priv: "Gérer les fonctions de plug-in",
		admin_addl_components_priv: "Composants supplémentaires",
		admin_global_toolbar_priv: "Barre d'outils globale",
		admin_status_bar_priv: "Barre d'état",
		admin_refresh_message: "Vous devez actualiser votre navigateur pour utiliser les données mises à jour.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Vous devez actualiser votre navigateur pour utiliser le bureau par défaut mis à jour.",
		admin_desktop_refresh_message: "Vous devez actualiser votre navigateur pour utiliser le bureau mis à jour.",
		admin_action_open: "Ouvrir",
		admin_action_edit: "Editer",
		admin_action_copy: "Copier",
		admin_action_delete: "Supprimer",
		admin_action_copy: "Copier",
		admin_action_new: "Créer",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Cet ID est déjà utilisé. Vous devez spécifier un ID unique.",

		admin_searchable_properties_for: "Propriétés pouvant être recherchées pour :",
		admin_repository_new: "Nouveau référentiel",
		admin_desktop_new: "Nouveau bureau",
		admin_desktop_file_documents: "Les utilisateurs doivent sauvegarder leurs nouveaux documents et dossiers dans un dossier.",
		admin_desktop_file_documents_hover: "Sélectionnez cette option si vous voulez obliger les utilisateurs à sélectionner un dossier lorsqu'ils ajoutent des éléments au référentiel. Dans le cas contraire, les utilisateurs peuvent ajouter des documents (IBM FileNet P8) ou des documents et des dossiers (IBM Content Manager) sans avoir besoin de les classer dans un dossier.",
		admin_desktop_show_security_tab: "Afficher les paramètres de sécurité pendant les actions d'ajout et de restitution",
		admin_desktop_show_security_hover: "<b>Utilisateurs IBM FileNet P8 uniquement :</b>  Sélectionnez cette option si vous souhaitez autoriser les utilisateurs à éditer la sécurité des documents et dossiers lors de l'ajout ou la restitution d'éléments à ce bureau.",
		admin_desktop_configure_security_inheritance: "Autoriser les utilisateurs à configurer l'héritage de sécurité des dossiers",
		admin_desktop_configure_security_inheritance_hover: "<b>Utilisateurs IBM FileNet P8 uniquement :</b>  Sélectionnez cette option si vous souhaitez que les utilisateurs puissent personnaliser l'accès aux éléments d'un dossier en contrôlant l'héritage de sécurité des dossiers. Si vous sélectionnez cette option, les utilisateurs peuvent indiquer si des utilisateurs ou groupes peuvent hériter la sécurité :<ul><li>d'un dossier</li><li>d'un dossier et de ses sous-dossiers immédiats</li><li>d'un dossier et de tous ses sous-dossiers</li></ul>",
		admin_desktop_appearance: "Apparence",
		admin_desktop_appearance_instruction: "Vous pouvez personnaliser l'apparence du bureau en modifiant la page de connexion et la bannière qui s'affichent pour le bureau.",
		admin_desktop_layout: "Agencement :",
		admin_desktop_layout_hover: "L'agencement indique quelles fonctions peuvent s'afficher dans le client Web et la manière dont les contenus du client Web sont disposés.<br><br><b>Astuce :</b> vous pouvez définir des dispositions personnalisées en créant des plug-in. Vous devez enregistrer le plug-in dans l'outil d'administration avant de pouvoir sélectionner une disposition personnalisée.",
		admin_desktop_layout_default: "Par défaut",
		admin_desktop_layout_custom: "Personnalisé",
		admin_desktop_enable_workflow_email: "Activer les notifications par e-mail de flux de travaux FileNet P8 pour ce bureau",
		admin_desktop_enable_workflow_email_hover: "Utilisateurs de FileNet P8 uniquement. Sélectionnez cette option si vous souhaitez autoriser les utilisateurs d'ouvrir le client Web à partir des URL incluses dans les notifications par e-mail générées par Process Engine.<br /><br />Si vous n'activez cette option sur aucun bureau, les utilisateurs ne peuvent pas se connecter au client Web à partir des URL des notifications.<br /><br />Si vous activez cette option sur plusieurs bureaux et que plusieurs bureaux remplissent les critères spécifiés dans l'URL de la notification, le client Web utilise le premier bureau qui remplit les critères. ",
		admin_desktop_prevent_create_new_search: "Empêcher les utilisateurs de créer des recherches",
		admin_desktop_prevent_create_new_search_hover: "Cette option restreint les utilisateurs à n'utiliser que les recherches existantes et les empêche de créer des recherches ouvertes qui risquent de ne pas être optimisées. </br></br>Ce paramètre n'impacte pas les espaces d'équipe. Le droit de créer des recherches dans un espace d'équipe est contrôlé par le rôle qu'un utilisateur possède sur un espace d'équipe donné.",
		admin_desktop_prevent_create_new_unified_search: "Empêcher les utilisateurs de créer des recherches croisées dans les référentiels",
		admin_desktop_prevent_create_new_unified_search_hover: "Cette option restreint les utilisateurs à n'utiliser que les recherches croisées dans les référentiels existantes et les empêche de créer des recherches croisées dans les référentiels ouvertes qui risquent de ne pas être optimisées.",
		admin_desktop_hide_entry_template_not_found_warning: "Masquer l'avertissement affiché lorsque le modèle d'entrée associé est introuvable",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Sélectionnez cette option si vous souhaitez masquer le message d'avertissement affiché lorsque les propriétés de l'élément sont éditées et que le modèle d'entrée associé à cet élément est introuvable.",
		admin_desktop_show_class_role_security_selection: "Autoriser les utilisateurs à configurer la sécurité basée sur les rôles dans les modèles d'entrée",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Utilisateurs IBM FileNet P8 uniquement :</b> Sélectionnez cette option si vous voulez que les utilisateurs configurent les modèles d'entrée pour utiliser la sécurité basée sur les rôles lors de la définition de la sécurité sur les documents et/ou les dossiers avec les modèles d'entrée. Si vous sélectionnez cette option, les éditeurs des modèles d'entrée peuvent spécifier si les objets de sécurité de rôle doivent être appliqués à une définition de modèle d'entrée.",
		admin_desktop_show_primary_multi_part: "N'ouvrir que le document principal dans l'afficheur",
		admin_desktop_show_primary_multi_part_hover: "<b>Utilisateurs IBM FileNet P8 uniquement :</b> Sélectionnez cette option si vous voulez n'ouvrir que le fichier de document principal dans l'afficheur. Les documents peuvent avoir plusieurs fichiers associés. Cette option permet de n'ouvrir que le fichier principal.",
		admin_desktop_redaction_save_mode: "Option d'occultation par défaut :",
		admin_desktop_redaction_save_mode_hover: "Sélectionnez le mode de sauvegarde de l'occultation dans l'afficheur ViewONE Virtual par défaut : <br>* Toujours demander à l'utilisateur de choisir : une boîte de dialogue s'ouvre lors du passage en mode d'occultation, dans laquelle l'utilisateur indique s'il souhaite procéder à la restitution en tant que nouvelle version, créer un document ou télécharger un contenu.</br>* Restituer en tant que nouvelle version : sauvegarde systématiquement le contenu occulté dans une nouvelle version du document existant.</br>* Sauvegarder en tant que document complètement nouveau : sauvegarde systématiquement le contenu occulté en tant que document complètement nouveau.</br>* Télécharger et sauvegarder sur le client : télécharge le contenu occulté sur le système client.",
		admin_desktop_redaction_save_mode_user_select: "Toujours demander à l'utilisateur de choisir",
		admin_desktop_redaction_save_mode_new_version: "Restituer en tant que nouvelle version",
		admin_desktop_redaction_save_mode_new_document: "Sauvegarder en tant que document complètement nouveau",
		admin_desktop_redaction_save_mode_local_content: "Télécharger et sauvegarder sur le client",

		admin_desktop_document_add_mode: "Boîte de dialogue d'ajout de document :",
		admin_desktop_document_add_mode_hover: "Spécifiez la boîte de dialogue d'ajout à utiliser lorsque vous ajoutez des documents ayant été créés par IBM Content Navigator :<ul><li>Nouveau document avec du contenu occulté en permanence</li><li>Nouveau document fusionné et séparé</li><li>Nouveau document Microsoft Office</li><li>Nouveau document de service d'édition</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Ajouter un document",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Ajouter un document à l'aide d'un modèle d'entrée",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Fusionner et séparer :",
		admin_desktop_merge_and_split_enable_hover: "Indiquez si vous souhaitez que les utilisateurs qui ont accès à ce bureau puissent fusionner et séparer les documents au moyen d'un afficheur prévoyant cette possibilité.",

		admin_desktop_merge_and_split_show_checkin: "Demander aux utilisateurs de fournir les valeurs des propriétés lorsqu'ils intègrent des changements apportés à un document.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Si vous sélectionnez cette option, la boîte de dialogue de restitution s'affiche lorsque les utilisateurs intègrent des modifications apportées à un document en mode Fusionner et séparer.",

		admin_desktop_available_categories: "Fonctions disponibles",
		admin_desktop_selected_categories: "Fonctions sélectionnées",

		admin_layout_banner_title: "Bannière et page de connexion",
		admin_layout_title: "Présentation",

		admin_desktop_application_name: "Nom d'application :",
		admin_desktop_application_name_hover: "Indiquez le nom de l'application à afficher dans la bannière.<br><br>Astuce : définissez le nom de l'application pour d'autres langues dans l'onglet Libellés / Libellés de bureau.",
		admin_desktop_theme: "Thème :",
		admin_desktop_theme_hover: "Indiquez si vous souhaitez utiliser le thème d'IBM Content Navigator par défaut ou un thème personnalisé pour ce bureau. Pour utiliser un thème personnalisé, vous devez créer un thème dans la section <b>Thèmes</b> de l'outil d'administration.",
		admin_desktop_login_logo: "Logo de la page de connexion :",
		admin_desktop_login_logo_hover: "Si vous souhaitez modifier le logo figurant sur la page de connexion, veuillez indiquer l'adresse URL du fichier de logo. Toutefois, il est recommandé d'utiliser un thème personnalisé pour modifier le logo.",
		admin_desktop_login_logo_url_hover: "Entrez l'URL du fichier du logo. Si le logo se trouve sur le même serveur d'applications web que le client web, entrez une URL relative. Par exemple : /mycustomizations/login_logo.png<br><br>Les dimensions maximum du logo sont 200 pixels en largeur pour 150 pixels en hauteur.<br><br>Il est recommandé d'afficher le logo sur un arrière-plan transparent.",
		admin_desktop_banner_logo: "Logo de la bannière :",
		admin_desktop_banner_logo_hover: "Si vous souhaitez modifier le logo figurant sur la bannière, veuillez indiquer l'adresse URL d'un fichier de logo. Toutefois, il est recommandé d'utiliser un thème personnalisé pour modifier le logo.",
		admin_desktop_banner_logo_url_hover: "Entrez l'URL du fichier du logo. Si le logo se trouve sur le même serveur d'applications web que le client web, entrez une URL relative. Par exemple : /mycustomizations/banner_logo.png<br><br>Les dimensions maximum du logo sont 72 pixels en largeur pour 36 pixels en hauteur.<br><br>Il est recommandé d'afficher le logo sur un arrière-plan transparent.",
		admin_desktop_banner_background_color: "Couleur d'arrière-plan de la bannière :",
		admin_desktop_banner_background_color_hover: "Si vous souhaitez modifier la couleur d'arrière-plan de la bannière, vous pouvez définir la couleur de votre choix. Toutefois, il est recommandé d'utiliser un thème personnalisé pour modifier la couleur de la bannière.",
		admin_desktop_banner_background_color_custom_hover: "Spécifiez la couleur de la bannière d'application en tant que couleur hexadécimale.",
		admin_desktop_banner_application_name_color: "Couleur de texte du nom de l'application :",
		admin_desktop_banner_application_name_color_hover: "Si vous souhaitez modifier la couleur du nom de l'application, vous pouvez définir la couleur de votre choix. Toutefois, il est recommandé d'utiliser un thème personnalisé pour modifier la couleur du nom de l'application.",
		admin_desktop_banner_application_name_color_custom_hover: "Spécifiez la couleur du nom d'application en tant que couleur hexadécimale.",
		admin_desktop_banner_menu_color: "Couleur d'icône de la bannière :",
		admin_desktop_banner_menu_color_hover: "Si vous modifiez la couleur d'arrière-plan de la bannière, vous risquez de devoir modifier le schéma de couleurs des icônes dans la bannière pour les rendre plus visibles. Choisissez entre le schéma de couleurs clair ou obscur pour les icônes de la bannière.<br><br>Toutefois, il est recommandé d'utiliser un thème personnalisé pour modifier la couleur des icônes.",
		admin_desktop_login_page_content: "Contenu de la page de connexion :",
		admin_desktop_login_page_content_hover: "Si vous souhaitez ajouter des informations supplémentaires sur la page de connexion, comme des annonces sur les indisponibilités de système ou des rubriques d'aide sur les noms d'utilisateur et mots de passe, vous pouvez indiquer l'adresse URL du contenu correspondant.",
		admin_desktop_login_page_content_url_hover: "Entrez l'URL du contenu de la page de connexion. Si le contenu se trouve sur le même serveur d'applications web que le client web, entrez une URL relative. Par exemple : /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Règles de mot de passe :",
		admin_desktop_password_rules_hover: "Si vous souhaitez imposer aux utilisateurs des règles de création de mot de passe, comme des caractères interdits ou un nombre de caractères minimum, vous pouvez indiquer l'URL de la page contenant les règles de mot de passe.",
		admin_desktop_password_rules_url_hover: "Entrez l'URL du contenu des règles de mot de passe. Si le contenu se trouve sur le même serveur d'applications web que le client web, entrez une URL relative. Par exemple : /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL d'aide d'utilisateur final :",
		admin_desktop_help_url_hover: "Vous pouvez utiliser l'aide qui accompagne IBM Content Navigator, ou vous pouvez rediriger les utilisateurs vers le contenu d'aide personnalisé en effectuant l'une des actions suivantes :<br><br><ul><li>Diriger les utilisateurs vers un système d'aide personnalisé</li><li>Ajouter l'aide à l'instance d'IBM Knowledge Center qui est déployée avec IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Entrez l'adresse URL de votre système d'aide personnalisée. IBM Content Navigator ajoute index.jsp?content=/com.ibm.usingeuc.doc/ et un nom de fichier à l'URL que vous spécifiez.  Pour les liens \"En savoir plus\" de l'interface de travail, le système d'aide doit utiliser les mêmes noms de fichier que l'aide d'utilisateur final intégrée. ",
		admin_desktop_deprecated_appearance_title: "Paramètres obsolètes",
		admin_desktop_deprecated_appearance_instructions: "Si vous utilisez un thème personnalisé, ces paramètres sont remplacés par celui-ci. Vous devez migrer ces paramètres vers un thème personnalisé, qui offre une mise en style plus détaillée que les paramètres de cette section. De plus, un thème personnalisé peut être utilisé par plusieurs bureaux.",

		admin_desktop_plugins_title: "Activez ou désactivez des plug-in pour ce bureau.",
		admin_desktop_plugins_enable_all_plugins: "Activer tous les plug-in déployés en vue de leur utilisation avec ce bureau",
		admin_desktop_plugins_select_plugins: "Sélectionner les plug-in déployés à activer en vue de leur utilisation avec ce bureau",
		admin_desktop_plugins_select_plugin: "Sélectionner un plug-in",

		admin_desktop_layout_features: "Fonctions affichées :",
		admin_desktop_layout_features_hover: "Sélectionnez les fonctions auxquelles vous souhaitez que les utilisateurs aient accès à partir de ce bureau. Les fonctions sont affichées dans l'ordre dans l'ordre dans lequel elles sont répertoriées.<br><br>Lorsque vous sélectionnez une fonction, vous pouvez personnaliser certains comportements de la fonction sur le bureau, tels que le référentiel par défaut qui est sélectionné pour la fonction.",
		admin_desktop_layout_default_repository: "Référentiel par défaut :",
		admin_desktop_layout_default_repository_layout_hover: "Indiquez quel référentiel est sélectionné par défaut lorsque les utilisateurs ouvrent cette fonction.",
		admin_desktop_layout_document_thumbnails: "Miniatures de documents :",
		admin_desktop_layout_document_thumbnails_hover: "Indiquez si vous souhaitez afficher des miniatures de documents dans la sous-fenêtre Informations sur le document.<br><br>L'affichage des miniatures peut diminuer les performances du client Web.",
		admin_desktop_layout_show_filmstrip_view: "Vue Pellicule :",
		admin_desktop_layout_show_filmstrip_view_hover: "Indique si vous souhaitez autoriser les utilisateurs à afficher leur liste de contenu dans une vue pellicule.<br><br>La vue Pellicule génère un aperçu de chaque document sélectionné par un utilisateur. Cependant, l'utilisation de la vue Pellicule peut ralentir les performances du client Web. En outre, vous devez configurer l'afficheur de conversion HTML pour afficher les aperçus de document.",
		admin_enabled: "Activer",
		admin_disabled: "Désactiver",
		admin_include: "Inclure",
		admin_exclude: "Exclure",
		admin_layout_teamspaces_default_repository: "Espaces d'équipe :",
		admin_layout_entry_templates_default_repository: "Modèles d'entrée :",
		admin_layout_other_features_default_repository: "Rechercher et parcourir :",
		admin_layout_work_default_repository: "Travail :",
		admin_layout_default_feature: "Fonction par défaut :",
		admin_default_category_placeholder: "Sélectionner une fonction",
		admin_layout_default_feature_hover: "Indiquez quelle fonction est affichée quand les utilisateurs se connectent à ce bureau.",
		admin_layout_default_feature_warning: "Le fait de modifier la fonction par défaut peut affecter le temps nécessaire au chargement de l'application.",
		admin_layout_feature_list_header: "Fonction",
		admin_layout_show_statusbar: "Barre d'état :",
		admin_layout_show_statusbar_hover: "Indiquez si vous souhaitez afficher la barre d'état en bas du bureau.<br><br>Si vous masquez la barre d'état, les utilisateurs ne peuvent pas voir les informations relatives à des événements qui ne sont pas des erreurs, par exemple :<ul><li>Le document a été ajouté au référentiel.</li><li>La recherche a renvoyé 59 documents.</li></ul>",
		admin_layout_show_magazineview: "Vue Magazine :",
		admin_layout_show_magazineview_hover: "Indiquez si vous souhaitez autoriser les utilisateurs à basculer l'affichage de leur liste de contenu dans une vue synthétique.<br><br>La vue synthétique augmente la hauteur de chaque entrée dans la liste de contenu, ce qui réduit le nombre d'éléments pouvant être affichés dans la liste de contenu simultanément.",
		admin_layout_show_detailsview: "Vue Détails :",
		admin_layout_show_detailsview_hover: "Indiquez si vous souhaitez autoriser les utilisateurs à afficher leur liste de contenu dans une vue de détails.<br><br>La vue Détails optimise le nombre de lignes visibles dans la liste de contenu.",
		admin_feature_config_docinfopane_label: "Volet d'informations du document :",
		admin_feature_config_docinfopane_hoverhelp: "Indiquez si les utilisateurs peuvent accéder au volet d'informations du document dans cette fonction.",
		admin_feature_config_docinfopane_default_label: "Comportement par défaut :",
		admin_feature_config_docinfopane_expanded: "Développé",
		admin_feature_config_docinfopane_collapsed: "Réduit",
		admin_feature_config_docinfopane_expand_on_select: "Développer quand l'élément est sélectionné",
		admin_layout_features_title: "Fonctions de bureau",
		admin_layout_features_instructions: "Indiquez à quelles fonctions les utilisateurs peuvent accéder à partir de ce bureau.  En outre, vous pouvez personnaliser le comportement de chaque fonction qui est incluse sur le bureau.",
		admin_layout_components_title: "Composants de bureau supplémentaires",
		admin_layout_components_instructions: "Vous pouvez désactiver certains des composants du bureau si vous souhaitez une interface plus rationalisée ou si vous souhaitez améliorer les performances du client Web.",
		admin_layout_featureconfig_instructions: "Sélectionnez une fonction à configurer",
		admin_layout_featureconfig_no_configuration: "Aucune configuration de fonction n'est disponible",
		admin_layout_featureconfig_label: "Configuration pour la fonction ${0}",
		admin_layout_featureconfig_title: "Configuration de fonction",
		admin_layout_featureconfig_taskManagerURL: "Pour utiliser cette fonction, vous devez activer et configurer IBM Content Navigator pour la connexion au service du gestionnaire de tâches. Activez ce dernier dans la section <b>Paramètres</b> de cet outil d'administration.",
		admin_feature_config_show_my_checkouts_label: "Panneau Mes réservations :",
		admin_feature_config_show_my_checkouts_hoverhelp: "Le panneau Mes réservations permet aux utilisateurs d'exécuter une recherche sur l'ensemble des éléments ayant été réservés sur un référentiel spécifique. Indiquez si les utilisateurs peuvent accéder au panneau Mes réservations à partir de la fonction Accueil.<br/><br/><b>Restriction :</b> Cette fonction nécessite que vous disposiez au moins d'un référentiel IBM Content Manager, IBM FileNet P8 ou OASIS CMIS associé au bureau.",

		admin_feature_config_default_repository_icon_text: "Référentiel par défaut",
		admin_show: "Afficher",
		admin_hide: "Masquer",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "Vous ne pouvez pas supprimer de fonctions Administration sur le bureau Administrateur",
		admin_warning_label: "Avertissement :",
		admin_layout_show_globaltoolbar: "Barre d'outils globale :",
		admin_layout_show_globaltoolbar_hover: "Indiquez si vous souhaitez afficher la barre d'outils dans la bannière en haut du bureau.<br><br>La barre d'outils globale inclut des actions qui permettent aux utilisateurs d'ajouter des documents, des dossiers et des mises en attente dans le référentiel. Les actions disponibles dépendent du référentiel auquel l'utilisateur est connecté.",
		admin_interface_text_name_label: "Type de libellé",

		admin_interface_text_label_description: "Vous pouvez personnaliser le texte qui s'affiche dans certaines zones du client Web. Les libellés s'affichent pour tous les référentiels et bureaux de votre configuration. Entrez dans la zone Libellé en cours le texte que vous souhaitez voir dans l'interface.<br><br><b>Important :</b> tous les changements que vous apportez aux libellés ne s'afficheront pas dans l'outil d'administration.",
		admin_interface_text_label_action: "Libellés d'action",
		admin_interface_text_label_action_description: "Les libellés d'action s'affichent sur les boutons et les menus du client Web. Vous pouvez définir différents libellés d'action pour chaque type de référentiel.",
		admin_interface_text_label_application: "Libellés d'application",
		admin_interface_text_label_application_description: "Les libellés d'application s'affichent dans le client Web.",
		admin_interface_text_label_system: "Libellés de propriété système",
		admin_interface_text_label_system_description: "Les propriétés système qui s'affichent varient selon le référentiel. Vous pouvez personnaliser les libellés qui s'affichent pour les propriétés système associées aux documents et dossiers de vos référentiels.",
		admin_interface_text_label_desktop: "Libellés de bureau",
		admin_interface_text_label_desktop_description: "Si vous avez personnalisé le nom de l'application sur un bureau, vous pouvez personnaliser ce nom dans d'autres langues que l'anglais. Vous pouvez également personnaliser les noms des espaces d'application IBM FileNet P8 sur un bureau.",

		admin_interface_text_system_label: "Libellé du système",
		admin_interface_text_current_label: "Libellé en cours",
		admin_interface_text_default_label_heading: "Libellés par défaut",
		admin_interface_text_default_label: "Libellé par défaut :",
		admin_interface_text_displayed_in_label: "Affiché pour",
		admin_interface_text_displayed_in_document_folder: "Documents et dossiers",
		admin_interface_text_displayed_in_document: "Documents",
		admin_interface_text_displayed_in_folder: "Dossiers",
		admin_interface_text_displayed_in_admin_application_space: "Etiquette d'espace d'application",
		admin_interface_text_displayed_in_desktop: "Etiquette de fonctionnalité pour mobile",
		admin_interface_text_displayed_in_admin_application_name: "Nom de l'application",

		admin_new_desktop: "Nouveau bureau",
		admin_new_repository: "Nouveau référentiel",
		admin_new_menu: "Nouveau menu",
		admin_new_viewer_mapping: "Nouvelle mappe d'afficheur",
		admin_new_mapping_label: "Nouveau mappage",
		admin_new_icon_mapping: "Nouveau mappage d'icône",
		admin_viewer_mapping_list_instructions: "Vous pouvez configurer quels afficheurs le client Web utilise pour afficher différents types de contenus. Une mappe d'afficheur définit quels types MIME sont associés à chaque afficheur que vous souhaitez utiliser. Vous pouvez créer plusieurs mappes d'afficheur si vous souhaitez utiliser différents afficheurs pour différents bureaux.",
		admin_viewer_mapping_instructions: "Indiquez les afficheurs que vous souhaitez utiliser pour ouvrir les fichiers. Si vous souhaitez utiliser un afficheur personnalisé, vous devez intégrer l'afficheur en tant que plug-in avant de pouvoir l'ajouter à la mappe d'afficheur.<br><br><b>Important :</b> lorsqu'un utilisateur ouvre un document, le client Web recherche dans la liste des mappes d'afficheur le premier afficheur qui peut ouvrir le document en fonction du système d'exploitation exécuté par l'utilisateur et du référentiel auquel est connecté l'utilisateur. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Nouveau plug-in",
		admin_menu_list_instructions: "Vous pouvez créer des barres d'outils et des menus contextuels personnalisés pour contrôler quelles actions sont disponibles pour les utilisateurs. Vous ne pouvez pas éditer les menus par défaut, mais vous pouvez créer des copies de menus existants pour limiter les actions disponibles ou pour ajouter des actions personnalisées définies dans des plug-in.<br><br>Si vous souhaitez créer un nouveau type de menu, vous devez définir le menu dans un plug-in.",
		admin_menu_id_hover: "L'ID doit être unique et vous ne pouvez pas le modifier après avoir sauvegardé le menu.<br><br>L'ID peut contenir uniquement des caractères alphanumériques et est sensible à la casse.",
		admin_menu_id_disabled_hover: "L'ID du menu ne peut pas être modifié. Si vous souhaitez utiliser un ID différent, vous devez créer un nouveau menu.",
		admin_menu_default_instructions: "Vous ne pouvez pas modifier ce menu car il s'agit d'un menu par défaut. Si vous voulez modifier ce menu, vous devez créer une copie du menu.",
		admin_menu_toolbar_instructions: "Vous pouvez restreindre les actions disponibles pour cette barre d'outils ou vous pouvez ajouter des actions personnalisées qui sont définies dans un plug-in. Vous pouvez également organiser les actions en ajoutant des séparateurs à la barre d'outils.",
		admin_menu_toolbar_custom_instructions: "Cette barre d'outils est définie par un plug-in. Si vous souhaitez éditer cette barre d'outils, vous devez mettre à jour le plug-in ou créer une copie de la barre d'outils.",
		admin_menu_context_menu_instructions: "Vous pouvez restreindre les actions disponibles pour ce menu contextuel ou vous pouvez ajouter des actions personnalisées qui sont définies dans un plug-in. Vous pouvez également organiser les actions en ajoutant des séparateurs et des sous-menus dans le menu contextuel.",
		admin_menu_context_menu_custom_instructions: "Ce menu contextuel est défini par un plug-in. Si vous souhaitez éditer ce menu contextuel, vous devez mettre à jour le plug-in ou créer une copie du menu contextuel.",
		admin_desktop_list_instructions: "Vous pouvez créer plusieurs bureaux pour donner à différents utilisateurs l'accès au contenu dont ils ont besoin. Par exemple, vous pouvez créer un bureau qui permet uniquement aux utilisateurs de rechercher du contenu ou un bureau qui permet aux utilisateurs d'accéder à un référentiel unique. ",
		admin_plugin_updated: "La configuration du plug-in sélectionné a été modifiée. Vous devez actualiser votre navigateur pour que les modifications prennent effet.",
		admin_repository_ci_heading: "Référentiel Content Integrator : <b>${0}</b>",
		admin_repository_p8_heading: "Référentiel FileNet Content Manager : <b>${0}</b>",
		admin_repository_cm_heading: "Référentiel Content Manager : <b>${0}</b>",
		admin_repository_od_heading: "Référentiel Content Manager OnDemand : <b>${0}</b>",
		admin_repository_cmis_heading: "Référentiel Content Management Interoperability Services (CMIS) : <b>${0}</b>",
		admin_repository_box_heading: "Référentiel Box : <b>${0}</b>",
		admin_repository_generic_heading: "Référentiel : <b>${0}</b>",

		admin_delete_confirmation_desktops: "Souhaitez-vous supprimer les bureaux sélectionnés ?\n${0} bureaux sont sélectionnés.",
		admin_delete_confirmation_menus: "Souhaitez-vous supprimer les menus sélectionnés ?\n${0} menus sont sélectionnés.",
		admin_delete_confirmation_repositories: "Souhaitez-vous supprimer les référentiels sélectionnés ?\n${0} référentiels sont sélectionnés.",
		admin_delete_confirmation_viewer_mappings: "Souhaitez-vous supprimer les mappes d'afficheur sélectionnées ?  ${0} mappes sont sélectionnées.",
		admin_delete_confirmation_icon_mappings: "Souhaitez-vous supprimer les configurations d'icône sélectionnées ?\n${0} configurations d'icône sont sélectionnées.",
		admin_delete_confirmation_plugins: "Souhaitez-vous supprimer les plug-in sélectionnés ?\n${0} plug-in sont sélectionnés.",
		admin_delete_confirmation: "Souhaitez-vous supprimer les éléments sélectionnés ?\n${0} éléments sont sélectionnés.",

		admin_viewer_mapping_id_hover: "L'ID doit être unique, et vous ne pouvez pas modifier l'ID après avoir sauvegardé la mappe d'afficheur.<br><br>L'ID peut contenir uniquement des caractères alphanumériques et est sensible à la casse.",
		admin_viewer_mapping_id_disabled_hover: "L'ID de la mappe d'afficheur ne peut pas être modifié. Si vous souhaitez utiliser un ID différent, vous devez créer une nouvelle mappe d'afficheur.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "Impossible de supprimer le bureau par défaut.",

		admin_desktop_heading: "Bureau : <b>${0}</b>",
		admin_menu_toolbar_heading: "Barre d'outils : <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Barre d'outils personnalisée : <b>${0}</b>",
		admin_menu_context_menu_heading: "Menu contextuel : <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Menu contextuel personnalisé : <b>${0}</b>",
		admin_plugin_heading: "Plug-in : <b>${0}</b>",
		admin_plugin_instructions: "Un plug-in peut être un fichier JAR ou un fichier classe compilé.<br/><br/><b>Important :</b> le serveur d'applications Web IBM Content Navigator doit être en mesure d'accéder au fichier du plug-in dans le système de fichiers local ou par une adresse URL.",
		admin_plugin_list_instructions: "Vous devez utiliser l'outil d'administration pour enregistrer les plug-in pour le client Web. Lorsqu'un plug-in nécessite une configuration supplémentaire, les paramètres de configuration s'affichent une fois que vous avez enregistré le plug-in.<br /><br /><b>Important :</b> si vous modifiez un plug-in référencé dans une zone de l'outil d'administration, telle qu'un menu, vous pouvez rencontrer des problèmes avec le comportement du plug-in. En outre, les plug-in sont appelés dans l'ordre dans lequel ils sont répertoriés. Si un plug-in doit être exécuté avant un autre, vérifiez que les plug-in sont répertoriés dans l'ordre dans lequel vous voulez les exécuter.",
		admin_plugin_cannot_delete: "Les plug-in sélectionnés ne peuvent pas être supprimés, car d'autres plug-in en dépendent.<br/>Plug-in sélectionnés : ${0}<br/>Plug-in dépendants : ${1}",
		admin_plugin_cannot_disable: "Les plug-in sélectionnés ne peuvent pas être désactivés, car d'autres plug-in en dépendent.<br/>Plug-in sélectionnés : ${0}<br/>Plug-in dépendants : ${1}",
		admin_plugin_cannot_add: "Le plug-in ne peut pas être ajouté car certains plug-in dont il dépend manquent ou sont désactivés. Plug-in manquants ou désactivés : ${0}",
		admin_plugin_cannot_enable: "Les plug-in sélectionnés ne peuvent pas être activés car certains plug-in dont ils dépendent manquent ou sont désactivés.<br/>Plug-in sélectionnés : ${0}<br/>Plug-in manquants ou désactivés : ${1}",
		admin_plugin_save_order: "Ordre de sauvegarde",
		admin_plugin_load: "Charger",
		admin_plugin_load_hover: "Spécifiez l'URL du plug-in",
		admin_plugin_file_hover: "Si le fichier JAR du plug-in se trouve dans votre système de fichiers local, vous pouvez entrer le chemin d'accès complet ou l'adresse URL du fichier du plug-in. Si le fichier JAR du plug-in se trouve dans un serveur distant, vous devez entrer l'adresse URL du fichier du plug-in.",
		admin_plugin_classfolderpath_hover: "Le fichier classe compilé doit se trouver sur le serveur d'applications Web IBM Content Navigator.<br/><br/>Entrez le chemin d'accès complet du dossier dans lequel les classes du plug-in sont compilées et générées.<br/><br/>Le chemin d'accès ne doit pas contenir le nom du package de la classe du plug-in. Par exemple, le chemin par défaut de l'exemple de classe de plug-in sous Windows est C:\\Program Files (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Entrez le nom complet de la classe Java dans le fichier classe qui doit être chargé et appelé en tant que classe de plug-in.<br/>Par exemple, le nom de classe pour l'exemple de plug-in est com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "Le fichier JAR du plug-in est introuvable à l'URL spécifiée. Vérifiez que le fichier JAR se trouve sur le serveur d'applications Web et que l'URL et le nom de fichier sont corrects.",
		admin_plugin_for_repository_not_loaded: "Vous ne pouvez pas modifier ce référentiel. Le plug-in qui définit et prend en charge ce type de référentiel n'est pas chargé. Dans l'onglet Plug-in, éditez le plug-in pour vérifier qu'il est configuré correctement et qu'il est chargé.",
		admin_plugin_repository_types: "Types de référentiel :",
		admin_plugin_viewers: "Afficheurs :",
		admin_plugin_features: "Fonctions :",
		admin_plugin_layouts: "Agencements :",
		admin_plugin_not_available: "Non disponible",
		admin_plugin_config_params: "Paramètres de configuration :",
		admin_viewer_def_heading: "Mappe d'afficheur : <b>${0}</b>",
		admin_users_and_groups: "Utilisateurs et groupes",
		admin_general: "Général",
		admin_logging: "Consignation",
		admin_authentication: "Authentification",		
		admin_rolebase_role: "Rôle :",
		admin_settings_logging_instructions: "Vous pouvez utiliser la journalisation pour identifier et résoudre les problèmes du client Web. Vous pouvez affiner votre journalisation si vous savez qu'un problème peut se produire avec une classe Java spécifique ou pour un utilisateur particulier. Les informations sur l'erreur sont consignées dans vos fichiers journaux d'erreur du serveur d'applications Web.",
		admin_settings_logging_instructions2: "<b>Paramètres de journalisation de débogage</b><br />Si vous savez qu'un problème survient pour une machine d'hôte client ou un utilisateur spécifique, vous pouvez cibler la journalisation de débogage sur cette machine ou cet utilisateur. Vous pouvez capturer des informations de débogage dans un environnement de production sans impact significatif sur les performances de votre système.<br /><br /><b>Important :</b> Si vous indiquez une machine d'hôte client ou un utilisateur, ce paramètre remplace tous les autres paramètres de journalisation. Une fois que vous avez capturé les informations dont vous avez besoin, définissez cette option sur <b>Aucun</b> pour reprendre la journalisation standard pour votre environnement.",
		admin_settings_export_config_hover: "Exporter les informations de configuration système en cours dans un fichier pour une utilisation avec IBM Support Assistant Data Collector. Le fichier est sauvegardé à l'emplacement qui est défini par la propriété système Java user.home.",
		admin_logging_level: "Journalisation de niveau d'application :",
		admin_logging_level_hover: "Les niveaux de journalisation affectent le nombre d'informations consignées sur votre serveur. Sélectionnez <b>Erreur</b> pour capturer la quantité minimale d'informations de journalisation. Sélectionnez <b>Débogage</b> pour capturer la plupart des informations.<br /><br />Ne spécifiez pas <b>Débogage</b> dans un environnement de production, sauf si vous êtes invité à le faire par le service de support logiciel IBM.",
		admin_logging_level_0: "Pas de journalisation",
		admin_logging_level_1: "Erreur",
		admin_logging_level_2: "Avertissement",
		admin_logging_level_3: "Informations",
		admin_logging_level_4: "Débogage",
		admin_logging_classes: "Journalisation de niveau de classe Java",
		admin_logging_classes_hover: "Par défaut, tous les packages et classes Java sont compris dans les journaux d'erreurs du serveur d'applications Web. Cependant, vous pouvez spécifier les classes ou modules à inclure ou exclure de la journalisation. Vous pouvez utiliser les journaux d'erreurs du serveur d'applications Web pour déterminer les classes à inclure ou exclure.<br><br>Si vous savez qu'un problème se produit dans une classe spécifique, vous pouvez inclure cette classe dans les fichiers journaux. Lorsque vous incluez une classe dans vos journaux d'erreur, toutes les autres classes sont exclues du fichier journal.<br><br>Si vous savez qu'un incident ne se produit pas dans une classe et que vous souhaitez réduire la taille du fichier journal, vous pouvez exclure cette classe des fichiers journaux.",
		admin_logging_classes_include: "Inclure",
		admin_logging_classes_include_all: "Toutes les classes",
		admin_logging_classes_include_specified: "Classes spécifiques",
		admin_logging_classes_include_specified_msg: "Indiquez les classes à inclure.",
		admin_logging_classes_exclude: "Exclure",
		admin_logging_classes_exclude_none: "Aucun",
		admin_logging_classes_exclude_specified: "Classes spécifiques",
		admin_logging_classes_exclude_specified_msg: "Indiquez les classes à exclure.",
		admin_logging_debug: "Journalisation de débogage pour :",
		admin_logging_debug_hover: "<b>Important :</b> consultez les fichiers journaux du serveur d'applications Web avant de spécifier un utilisateur ou une adresse IP de la machine hôte client. La valeur que vous indiquez doit correspondre à la valeur qui s'affiche dans le fichier journal.",
		admin_logging_debug_none: "Aucun (par défaut)",
		admin_logging_debug_host: "Machines hôte client (adresses IP)",
		admin_logging_debug_host_msg: "Indiquez l'adresse IP d'une ou plusieurs machines client pour lesquelles vous souhaitez consigner les informations de débogage. Séparez les adresses IP par une virgule.<br /><br /><b>Important :</b> Consultez les fichiers journaux du serveur d'applications avant de spécifier une adresse IP. La valeur que vous indiquez doit correspondre à la valeur qui s'affiche dans le fichier journal.",
		admin_logging_debug_user: "Utilisateurs",
		admin_logging_debug_user_msg: "Indiquez le nom d'un ou plusieurs utilisateurs pour lesquels vous souhaitez consigner les informations de débogage. Séparez les noms d'utilisateur par une virgule.<br /><br /><b>Important :</b> Consultez les fichiers journaux du serveur d'applications avant de spécifier un nom d'utilisateur. La valeur que vous indiquez doit correspondre à la valeur qui s'affiche dans le fichier journal.",

		admin_office_settings_logging_instructions: "Vous pouvez utiliser la journalisation pour identifier et résoudre les problèmes avec IBM Content Navigator for Microsoft Office. Vous pouvez affiner votre journalisation si vous savez qu'un problème peut se produire avec une classe spécifique ou pour un utilisateur particulier. Les fichiers journaux de l'application contiennent des informations d'erreur sur les machines hôte client IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Paramètres de journalisation de débogage</b><br />Si vous savez qu'un problème survient pour une machine d'hôte client ou un utilisateur IBM Content Navigator for Microsoft Office spécifique, vous pouvez cibler la journalisation de débogage sur cette machine ou cet utilisateur. Vous pouvez capturer des informations de débogage dans un environnement de production sans impact significatif sur les performances de votre système. <br /><br /><b>Important :</b> Si vous indiquez une machine d'hôte client ou un utilisateur, ce paramètre remplace tous les autres paramètres de journalisation. Une fois que vous avez capturé les informations dont vous avez besoin, définissez cette option sur <b>Aucun</b> pour reprendre la journalisation standard pour votre environnement IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Important :</b> consultez les fichiers journaux de la machine client avant de spécifier un utilisateur ou une adresse IP de la machine hôte client. La valeur que vous indiquez doit correspondre à la valeur qui s'affiche dans le fichier journal. ",
		admin_office_logging: "Journalisation de bureau",
		admin_office_logging_classes: "Journalisation de niveau de classe :",
		admin_office_logging_classes_hover: "Par défaut, tous les packages et classes sont inclus dans les journaux d'erreurs IBM Content Navigator for Microsoft Office. Cependant, vous pouvez spécifier les classes ou modules à inclure ou exclure de la journalisation. Vous pouvez utiliser les journaux de la machine client pour déterminer les classes à inclure ou exclure.<br /><br />Si vous savez qu'un problème se produit dans une classe spécifique, vous pouvez inclure cette classe dans les fichiers journaux. Lorsque vous incluez une classe dans vos journaux d'erreur, toutes les autres classes sont exclues des fichiers journaux. <br /><br />Si vous savez qu'un incident ne se produit pas dans une classe et que vous souhaitez réduire la taille du fichier journal, vous pouvez exclure cette classe des fichiers journaux. ",
		admin_office_logging_debug_hover: "<b>Important :</b> consultez les fichiers journaux de la machine client avant de spécifier un utilisateur ou une adresse IP de la machine hôte client. La valeur que vous indiquez doit correspondre à la valeur qui s'affiche dans le fichier journal.",
		admin_office_logging_additional_settings: "Paramètres supplémentaires :",
		admin_office_logging_additional_settings_hover: "Indiquez les paramètres supplémentaires",
		admin_office_logging_file_size: "Taille du fichier journal",
		admin_office_logging_file_size_hover: "Indiquez la taille à laquelle IBM Content Navigator for Microsoft Office crée un nouveau fichier journal. Lorsqu'un fichier journal atteint la taille maximale, le journal en cours est renommé afin d'inclure la date (au format AAAAMMjj) et un numéro d'incrémentation de fichier (par exemple, ICNExcelAddin-20121116-5.log) et un nouveau fichier journal est créé. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Afficher la trace de pile sur les boîtes de dialogue",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Vous pouvez également afficher des informations de trace de pile dans des boîtes de dialogue de messages pour faciliter la résolution des incidents. Même si vous n'activez pas cette option, les informations de trace de pile détaillées sont toujours incluses dans les journaux des erreurs IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Icônes d'état",
		admin_icon_state_icon: "Icône d'état",
		admin_icon_state: "Etat",
		state_contains_label: "L'état contient",
		admin_icon_state_instructions: "Vous pouvez personnaliser les icônes qui s'affichent en regard des documents, dossiers et éléments de travail sur vos référentiels.<br><br><b>Astuce :</b> vous pouvez choisir d'afficher les icônes d'état pour chaque référentiel dans votre environnement.",
		admin_icon_state_dialog_title: "Mappage d'icône d'état",
		admin_icon_state_dialog_instructions: "Vous pouvez mapper l'état sélectionné vers une icône prédéfinie fournie par le client Web, ou vers une icône personnalisée.",

		admin_icon_mapping_twisty: "Icônes de type MIME",
		admin_icon_mapping_dialog_title: "Mappage d'icône",
		admin_icon_mapping: "Mappage d'icône",
		admin_icon_mapping_instructions: "Vous pouvez mapper une liste de types MIME vers une icône prédéfinie fournie par le client Web, ou vers une icône personnalisée.",
		admin_icon_mapping_list_instructions: "Vous pouvez personnaliser les icônes qui s'affichent pour les différents types MIME stockés sur votre référentiel. Le client Web utilise les icônes dans l'ordre dans lequel elles sont répertoriées. Si un type MIME est répertorié plusieurs fois, la première icône associée à ce type MIME est utilisée.",
		admin_icon_mapping_icon_label: "Quelle icône souhaitez-vous utiliser ?",
		admin_icon_mapping_file_name: "Icône personnalisée :",
		admin_icon_mapping_file_name_heading: "Icône personnalisée",
		admin_icon_mapping_file_name_placeholder: "Spécifiez l'URL de l'icône",
		admin_icon_mapping_file_name_hover: "Entrez l'URL de l'icône. Si l'icône se trouve sur le même serveur d'applications web que le client web, entrez une URL relative. Par exemple : /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Icône prédéfinie :",
		admin_icon_mapping_class_name_heading: "Icône prédéfinie",
		admin_icon_mapping_class_name_hover: "Sélectionnez une icône fournie avec le client Web.",
		admin_icon_mapping_class_name_placeholder: "Sélectionnez une icône",

		admin_p8_instructions: "Ces informations sont partagées par tous les référentiels FileNet Content Manager qui sont configurés pour le client Web.",
		admin_p8_collaboration_config: "Configuration facultative de FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Vous pouvez configurer ces paramètres si vous souhaitez optimiser FileNet Collaboration Services pour votre environnement IBM FileNet P8.",
		admin_p8_use_url_incoming: "Utilisez l'URL des demandes entrantes pour générer les URL de réponse :",
		admin_p8_use_url_incoming_hover: "Dans la plupart des environnements FileNet Collaboration Services, vous pouvez utiliser l'URL d'une requête entrante pour générer l'URL dans une réponse. Sélectionnez <b>Oui</b>, sauf si l'une des situations suivantes s'applique à votre environnement :<ul><li>Vous souhaitez forcer les applications client à accéder à FileNet Collaboration Services via une URL spécifique.<li>Vos paramètres de serveur proxy poussent FileNet Collaboration Services à générer des URL non valides.</ul>",

		admin_p8_use_url_incoming_http: "URL FileNet Collaboration Services :",
		admin_p8_use_url_incoming_http_hover: "Indiquez l'adresse URL grâce à laquelle les applications client peuvent accéder à FileNet Collaboration Services avec le format http://serveur_FNCS:numéro_port.",
		admin_p8_use_url_incoming_https: "URL HTTPS FileNet Collaboration Services :",
		admin_p8_use_url_incoming_https_hover: "Si FileNet Collaboration Services est configuré pour utiliser le SSL, indiquez l'URL HTTPS grâce à laquelle les applications client peuvent accéder à FileNet Collaboration Services sous la forme https://serveur_FNCS:numéro_port",
		admin_p8_hide_email_addresses: "Masquer les adresses e-mail de l'utilisateur dans les réponses du serveur :",
		admin_p8_hide_email_addresses_hover: "Vous pouvez masquer les adresses e-mail des utilisateurs dans les réponses du serveur si vous devez respecter les règles de confidentialité. Par exemple, vous pouvez masquer la liste des utilisateurs des adresses e-mail lorsque le serveur renvoie une liste des documents et des informations sur les utilisateurs ayant créé ou modifié les documents.",

		admin_p8_mask_user_ids: "Masquer les ID utilisateur dans les fichiers journaux :",
		admin_p8_mask_user_ids_hover: "Vous pouvez masquer les noms d'utilisateur dans les fichiers journaux FileNet Collaboration Services si vous devez respecter les règles de confidentialité. Lorsque vous activez cette option, les noms d'utilisateur sont remplacés par des valeurs hachées. Cela vous permet de fournir les fichiers journaux pour les entreprises externes, telles qu'IBM, à des fins de support, sans compromettre le nom de vos utilisateurs ou les enregistrements d'activité.",

		admin_p8_soft_delete: "Déplacer les fichiers supprimés dans la corbeille de récupération :",
		admin_p8_soft_delete_hover: "Lorsque des utilisateurs suppriment des éléments, déplacez les éléments dans une corbeille de récupération au lieu de les supprimer du référentiel. Les éléments restent dans la corbeille de récupération jusqu'à ce qu'ils soient purgés. Ce paramètre est ignoré si le référentiel cible ne prend pas en charge les corbeilles de récupération.<br><br><b>Restriction :</b> les corbeilles de récupération sont prises en charge sur IBM FileNet P8 version 5.2 ou ultérieures et nécessitent le module complémentaire Social Collaboration Base Extensions.",

		admin_p8_download: "Configuration de Content Download HTTP Cache",
		admin_p8_download_instructions: "Si vos référentiels IBM FileNet Content Manager contiennent de nombreux fichiers volumineux, vous pouvez configurer Content Download HTTP Cache (CDHC) pour activer FileNet Collaboration Services afin de rediriger les requêtes de contenu pour les fichiers volumineux vers un serveur Web dédié de manière sécurisée.<br/><br/>Cette fonction requiert IBM HTTP Server. De plus, vous devez mettre à jour le fichier IBM HTTP Server httpd.conf.",
		admin_p8_download_cache: "Content Download HTTP Cache :",
		admin_p8_download_cache_hover: "Indiquez si vous souhaitez activer Content Download HTTP Cache (CDHC) pour tous les référentiels IBM FileNet Content Manager dans votre environnement. Vous pouvez indiquer une taille de fichier minimale à laquelle des fichiers sont mis en cache.",
		admin_p8_download_cache_folder: "Répertoire cache complet :",
		admin_p8_download_cache_folder_hover: "Indiquez le chemin d'accès complet du répertoire dans lequel vous souhaitez stocker les fichiers en cache. Le répertoire peut se trouver sur tout système d'exploitation ou périphérique, tel qu'un répertoire de réseau partagé, à condition qu'il soit visible en tant que système de fichiers pour FileNet Collaboration Services et IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias pour l'emplacement de cache :",
		admin_p8_download_cache_url_hover: "Indiquez l'alias utilisé pour pointer vers le répertoire cache à partir de l'URL FileNet Collaboration Services. Indiquez l'alias avec le format/alias, par exemple /cdhc.<br/><br/>Lorsque /cdhc est inclus dans une adresse URL, l'application est redirigée vers le répertoire cache complet.",
		admin_p8_download_cache_max_files: "Nombre maximum de fichiers cache :",
		admin_p8_download_cache_max_files_hover: "Lorsque le nombre de fichiers maximum est atteint, le fichier le plus ancien est supprimé du cache.<br><br>Si vous indiquez le nombre maximum de fichiers à mettre en cache et la taille maximale du cache, le fichier le plus ancien est supprimé du cache lorsque la plus basse des deux conditions est respectée.",
		admin_p8_download_cache_max_size: "Taille du cache maximum (en Go) :",
		admin_p8_download_cache_max_size_hover: "Lorsque la taille maximum de cache est atteinte, le fichier le plus ancien est supprimé du cache.<br/><br/>Si vous indiquez le nombre maximum de fichiers à mettre en cache et la taille maximale du cache, le fichier le plus ancien est supprimé du cache lorsque la plus basse des deux conditions est respectée.",
		admin_p8_download_cache_cleanup_duration: "Durée de nettoyage maximale (en secondes) :",
		admin_p8_download_cache_cleanup_duration_hover: "Indiquez la quantité maximale de temps que l'opération de nettoyage peut prendre. La durée par défaut est de 5 secondes.<br><br>Tous les fichiers qui sont soumis à la suppression, mais qui restent dans la mémoire cache après l'opération de nettoyage seront supprimés lors d'une opération de nettoyage future.",
		admin_p8_download_cache_cleanup_min: "Intervalle minimal entre les opérations de nettoyage du cache (en secondes) :",
		admin_p8_download_cache_cleanup_min_hover: "Indique la quantité minimale de temps qui doit s'écouler entre les opérations de nettoyage du cache. La durée par défaut est de 3 600 secondes (1 heure).<br><br>Les opérations de nettoyage du cache se produisent uniquement en cas de demande active de téléchargement du contenu du cache. Si les requêtes arrivent chaque minute, l'opération de nettoyage aura lieu toutes les heures. Toutefois, si trois heures s'écoulent entre les demandes de téléchargement, l'opération de nettoyage n'aura pas lieu avant la réception de la prochaine demande de téléchargement.",
		admin_p8_download_cache_min_lifetime: "Durée minimale dans le cache (en secondes) :",
		admin_p8_download_cache_min_lifetime_hover: "Indiquez la durée minimale pendant laquelle un fichier est conservé dans le cache avant d'être supprimé. La durée par défaut est de 3 600 secondes (1 heure).<br><br>Même si la mémoire cache atteint sa taille maximale ou contient le nombre de fichiers maximal, le plus ancien fichier de la mémoire cache ne peut être supprimé avant l'expiration de sa durée de conservation spécifiée en mémoire cache.",
		admin_p8_download_cache_size_threshold: "Taille de fichier minimum à mettre en cache (en Ko) :",
		admin_p8_download_cache_size_threshold_hover: "Indiquez la taille minimale à laquelle CDHC doit être utilisé pour mettre des fichiers en cache. Si un fichier est inférieur à la taille indiquée, il est dirigé vers le serveur d'applications Web sur lequel FileNet Collaboration Services est déployé. La taille par défaut est de 1 000 Ko.",
		admin_p8_download_guard_header: "En-tête HTTP pour intermédiaires :",
		admin_p8_download_guard_header_hover: "Si une application client n'achemine pas une requête via IBM HTTP Server, le contenu en cache ne peut pas être téléchargé. Vous pouvez déterminer que seules les requêtes entrantes avec un en-tête HTTP spécifique (ajouté aux requêtes à partir d'IBM HTTP Server) peut accéder au contenu en cache pour éviter les pannes de téléchargement.<br><br>L'en-tête HTTP est configuré dans IBM HTTP Server et est présent sur toutes les requêtes entrantes qui sont acheminées via IBM HTTP Server. Si une requête ne possède pas l'en-tête HTTP, le contenu est acheminé via le serveur d'applications Web au lieu du serveur IBM HTTP.",
		admin_p8_download_generate_config: "Générer la configuration",
		admin_p8_download_generate_config_label: "Configuration IBM HTTP Server :",
		admin_p8_download_generate_config_label_hover: "Pour que la configuration CHDC fonctionne, vous devez mettre à jour le fichier httpd.conf d'IBM HTTP Server. Cliquez sur Générer la configuration pour générer les instructions qui doivent être ajoutées au fichier httpd.conf.",

		admin_logging_viewone_pro: "Journalisation ViewONE Professional :",
		admin_logging_viewone_virtual: "Journalisation ViewONE Virtual :",
		admin_logging_viewone_streamer: "Journalisation de Document Streaming Server Module :",
		admin_logging_viewone_streamer_hover: "Les options de journalisation de Document Streaming Server Module sont applicables uniquement si vous avez activé la diffusion en flux sur les fichiers PDF ou TIFF dans la section <b>Daeja ViewONE</b> de l'outil d'administration.",
		admin_logging_viewone_redaction: "Journalisation de Permanent Redaction Server Module :",
		admin_logging_viewone_redaction_hover: "Les options de journalisation de Permanent Redaction Server Module sont applicables uniquement si vous êtes autorisé à utiliser le module Redaction de Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professionnel",
		admin_daeja_viewonepro_stream_pdf_documents: "Fichiers PDF en flux :",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Si vous avez des documents PDF volumineux dans votre référentiel, vous pouvez activer l'afficheur de façon à ce qu'il diffuse en flux le contenu du document pour que les utilisateurs puissent afficher plus rapidement ces documents. Cependant, si la diffusion en flux ne fonctionne pas dans votre environnement, vous pouvez la désactiver.",
		admin_daeja_viewonepro_stream_tiff_documents: "Fichiers TIFF en flux :",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Si vous avez des documents TIFF volumineux dans votre référentiel, vous pouvez activer l'afficheur de façon à ce qu'il diffuse en flux le contenu du document pour que les utilisateurs puissent afficher plus rapidement ces documents. Cependant, si la diffusion en flux ne fonctionne pas dans votre environnement, vous pouvez la désactiver.",
		admin_daeja_viewonepro_show_file_buttons: "Boutons Fichier",
		admin_daeja_viewonepro_show_file_menus: "Menus Fichier",
		admin_daeja_viewonepro_enable_file_keys: "Touches de raccourci Fichier",
		admin_daeja_viewonepro_file_keys_hover_help: "Indiquez si vous souhaitez que les utilisateurs utilisent des touches de raccourci pour travailler avec des fichiers, par exemple pour ouvrir ou sauvegarder un fichier. Pour plus d'informations sur les raccourcis spécifiques, consultez la description du paramètre FileKeys dans le manuel de référence des paramètres d'IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Boutons Imprimer",
		admin_daeja_viewonepro_show_print_menus: "Menus Imprimer",
		admin_daeja_viewonepro_enable_print_keys: "Touches de raccourci Imprimer",
		admin_daeja_viewonepro_print_keys_hover_help: "Indiquez si vous souhaitez que les utilisateurs utilisent des touches de raccourci pour imprimer des fichiers, par exemple pour imprimer une page ou un document. Pour plus d'informations sur les touches de raccourci spécifiques, consultez la description du paramètre PrintKeys dans le manuel de référence des paramètres d'IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Boutons Inverser",
		admin_daeja_viewonepro_annotation_tooltip: "Infobulle d'annotation personnalisée par défaut :",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Entrez le texte à afficher lorsqu'aucune infobulle n'est spécifiée pour une annotation personnalisée. Le texte peut inclure des jetons remplaçables. Par exemple, &quot;&lt;creator&gt; a créé cette annotation le &lt;createdateonly&gt;.&quot; Pour plus d'informations sur les jetons remplaçables, voir le paramètre customAnnotationsToolTip dans le manuel de référence des paramètres d'IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Utiliser une infobulle personnalisée prédéfinie",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Utilisez une infobulle personnalisée définie par le système dans la zone de texte ci-dessous",
		admin_daeja_viewonepro_help_url: "URL de l'aide :",
		admin_daeja_viewonepro_help_url_hover_help: "Indiquez l'URL de la page Web qui contient la documentation d'aide de l'afficheur. Le bouton d'aide sur la barre d'outils de l'afficheur et l'action du menu d'aide ouvrent la page Web. Si vous n'indiquez pas d'URL, le bouton d'aide et l'action de menu ne sont pas affichés.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Contexte de ressources de tampon d'image",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_viewonepro_route_docs: "Diriger le contenu non pris en charge vers le navigateur :",
		admin_daeja_viewonepro_route_docs_hover_help: "Les utilisateurs peuvent visualiser des fichiers image non pris en charge en les dirigeant vers le navigateur qui ouvre l'application appropriée pour afficher le fichier. Par exemple, pour ouvrir un document Microsoft Word, le navigateur utilise le traitement de texte Microsoft Word.",
		admin_daeja_viewonepro_scale: "Ajuster automatiquement l'image :",
		admin_daeja_viewonepro_scale_best: "Ajustement optimal",
		admin_daeja_viewonepro_scale_ftow: "Ajuster à la largeur",
		admin_daeja_viewonepro_scale_ftoh: "Ajuster à la hauteur",
		admin_daeja_viewonepro_enable_hotkeys: "Activer les touches de raccourci :",
		admin_daeja_viewonepro_show_features: "Boutons et menus Afficher :",
		admin_daeja_custom_settings: "Paramètres supplémentaires :",
		admin_daeja_custom_settings_hover_help: "Vous pouvez ajouter d'autres paramètres en spécifiant le nom et la valeur du paramètre. Par exemple, vous pouvez spécifier &quot;scrollbars&quot; et &quot;true&quot; si vous souhaitez afficher des barres de défilement lorsque l'image est dimensionnée sur une taille supérieure à la zone d'affichage. Pour plus d'informations sur les noms et les valeurs des paramètres, consultez le manuel de référence des paramètres d'IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtuel",
		admin_daeja_virtual_annotation_tooltip: "Infobulle d'annotation personnalisée par défaut :",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Entrez le texte à afficher lorsqu'aucune infobulle n'est spécifiée pour une annotation personnalisée. Le texte peut inclure des jetons remplaçables. Par exemple, &quot;&lt;creator&gt; a créé cette annotation le &lt;createdateonly&gt;.&quot; Pour plus d'informations sur les jetons remplaçables, voir le paramètre customAnnotationsToolTip dans le manuel de référence des paramètres d'IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Utiliser une infobulle personnalisée prédéfinie",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Utilisez une infobulle personnalisée définie par le système dans la zone de texte ci-dessous",
		admin_daeja_virtual_image_stamp_resource_context: "Contexte de ressources de tampon d'image",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "todo",
		admin_daeja_virtual_license_path:"Chemin des fichiers de licence :",
		admin_daeja_virtual_license_path_hover_help:"Indiquez le chemin complet du répertoire contenant les fichiers de licence lic-server-virtual.v1 et lic-server.v1.",
		admin_default_license_path:"Utiliser le chemin des fichiers de licence par défaut",
		admin_license_path_specified:"Utiliser le chemin des fichiers de licence personnalisé",

		admin_daeja_streamer: "Serveur",
		admin_daeja_streamer_cache_root: "Répertoire de mémoire cache :",
		admin_daeja_streamer_cache_root_hover_help: "Indiquez le chemin complet du répertoire dans lequel vous voulez stocker les fichiers mis en cache pour un accès plus rapide. Ce répertoire peut se trouver sur n'importe quel système d'exploitation ou périphérique, tel qu'un répertoire réseau, s'il est visible en tant que système de fichiers pour IBM Content Navigator et IBM HTTP Server. Utilisez un répertoire local pour améliorer les performances.",
		admin_daeja_streamer_settings: "Paramètres supplémentaires :",
		admin_daeja_streamer_settings_hover_help: "Vous pouvez ajouter d'autres paramètres en spécifiant le nom et la valeur du paramètre. Par exemple, vous pouvez indiquer “cookieAllowedDomainList” ainsi qu'une liste séparée par des virgules de serveurs hôte.  Pour plus d'informations sur les noms et les valeurs des paramètres, consultez le manuel de référence des paramètres d'IBM Daeja ViewONE.",

		admin_daeja_redaction: "Module Permanent Redaction",
		admin_daeja_redaction_settings: "Paramètres :",
		admin_daeja_redaction_settings_hover_help: "Vous pouvez ajouter d'autres paramètres en spécifiant le nom et la valeur du paramètre. Par exemple, vous pouvez indiquer “burnIncrementalAnnotations” et ”true”. Pour plus d'informations sur les noms et les valeurs des paramètres, consultez le manuel de référence des paramètres d'IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Nouveau paramètre",
		admin_daeja_setting_dialog_title_edit: "Editer un paramètre",
		admin_daeja_setting_dialog_hover_help: "Ajoutez d'autres paramètres en indiquant leur nom et leur valeur. Par exemple, vous pouvez spécifier “scrollbars” et “true” si vous souhaitez afficher des barres de défilement lorsque l'image est dimensionnée sur une taille supérieure à la zone d'affichage.",
		admin_daeja_setting_dialog_field_hover_help: "Pour plus d'informations sur les noms et les valeurs des paramètres, consultez le manuel de référence des paramètres de Daeja ViewONE.",

		admin_daeja_logging: "Journalisation Daeja ViewONE",
		admin_daeja_logging_trace: "Activer la journalisation de trace",
		admin_daeja_logging_trace_net: "Activer la journalisation de réseau",
		admin_daeja_logging_trace_annotations: "Activer la journalisation des annotations",
		admin_daeja_logging_log_file: "Fichier journal :",
		admin_daeja_logging_instructions: "Vous pouvez utiliser la journalisation pour identifier et résoudre les problèmes liés à Daeja ViewONE Professional et Daeja ViewONE Virtual. Si vous savez qu'un problème se produit dans une fonction spécifique, vous pouvez cibler la journalisation sur cette fonction.",

		admin_v1pro_logging_trace_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes généraux liés à l'afficheur.<br><br>Les informations de journalisation sont consignées dans la console Java de la machine client. Vous pouvez accéder à cette console à partir du Panneau de configuration (Windows) ou des Préférences système (Mac) selon votre système d'exploitation.",
		admin_v1pro_logging_trace_net_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes suivants :<ul><li>Problèmes liés à votre connexion serveur</li><li>Problèmes liés aux types MIME</li><li>Problèmes liés aux fichiers trop longs</li></ul>De plus, vous pouvez vous servir de la journalisation de trace réseau pour identifier les retards liés à l'utilisation de Daeja ViewONE Professional.<br><br>Les informations de journalisation sont consignées dans la console Java de la machine client. Vous pouvez accéder à cette console à partir du Panneau de configuration (Windows) ou des Préférences système (Mac) selon votre système d'exploitation.",
		admin_v1pro_logging_trace_annotations_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes de création, d'enregistrement ou de chargement des annotations.<br><br>Les informations de journalisation sont consignées dans la console Java de la machine client. Vous pouvez accéder à cette console à partir du Panneau de configuration (Windows) ou des Préférences système (Mac) selon votre système d'exploitation.",

		admin_virtual_logging_trace_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes généraux liés à l'afficheur.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier virtual.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes suivants :<ul><li>Problèmes liés à votre connexion serveur</li><li>Problèmes liés aux types MIME</li><li>Problèmes liés aux fichiers trop longs</li></ul>De plus, vous pouvez vous servir de la journalisation de trace réseau pour identifier les retards liés à l'utilisation de Daeja ViewONE Virtual.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier virtual.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes de création, d'enregistrement ou de chargement des annotations.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier virtual.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Si vous activez la journalisation pour l'afficheur, vous devez spécifier le chemin d'accès complet au fichier journal dans lequel vous voulez stocker les informations de journalisation.  Il est recommandé de nommer le journal virtual.log.",

		admin_streamer_logging_trace_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes liés à Document Streaming Server Module.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier streamer.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes suivants :<ul><li>Problèmes liés à votre connexion serveur</li><li>Problèmes liés à des types MIME spécifiques</li><li>Problèmes liés aux fichiers trop longs</li></ul>De plus, vous pouvez vous servir de la journalisation de trace réseau pour identifier les retards liés à l'utilisation de Document Streaming Server Module.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier streamer.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Si vous activez la journalisation pour  Document Streaming Server Module, vous devez spécifier le chemin d'accès complet au fichier journal dans lequel vous voulez stocker les informations de journalisation.  Il est recommandé de nommer le fichier journal streamer.log.",

		admin_redaction_logging_trace_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes généraux liés à Permanent Redaction Server Module.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier redacttofile.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Utilisez ce paramètre pour identifier et résoudre les problèmes suivants :<ul><li>Problèmes liés à votre connexion serveur</li><li>Problèmes liés à des types MIME spécifiques</li><li>Problèmes liés aux fichiers trop longs</li></ul>De plus, vous pouvez vous servir de la journalisation de trace réseau pour identifier les retards liés à l'utilisation de Permanent Redaction Server Module.<br><br>Par défaut, les informations de journalisation sont consignées dans le fichier redacttofile.log, qui se trouve dans le sous-répertoire config du répertoire d'installation IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Si vous activez la journalisation pour  Permanent Redaction Server Module, vous devez spécifier le chemin d'accès complet au fichier journal dans lequel vous voulez stocker les informations de journalisation.  Il est recommandé de nommer le fichier journal redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configurez les fonctions de vos afficheurs et services.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Si vous utilisez le client Web pour vous connecter à un ou plusieurs référentiels Content Manager OnDemand, vous devez spécifier les informations nécessaires au bon fonctionnement du OnDemand Web Enablement Kit. Ces informations sont partagées par tous les référentiels Content Manager OnDemand qui sont configurés pour le client Web.",
		admin_ondemand_language: "Langue :",
		admin_ondemand_tempdir: "Répertoire temporaire ODWEK :",
		admin_ondemand_tracegrp: "Traçage ODWEK",
		admin_ondemand_tracedir: "Répertoire de trace :",
		admin_ondemand_tracelevel: "Niveau de trace :",
		admin_ondemand_tracelevel_0: "0 - Pas de journalisation",
		admin_ondemand_tracelevel_1: "1 - Journalisation des messages d'erreur",
		admin_ondemand_tracelevel_2: "2 - Journalisation des messages d'erreur et d'avertissement",
		admin_ondemand_tracelevel_3: "3 - Journalisation des messages d'erreur, d'avertissement et d'information",
		admin_ondemand_tracelevel_4: "4 - Tous les messages sont journalisés, même ceux de la fonction de trace",
		admin_ondemand_max_trace_filesize: "Taille maximum du fichier de trace :",
		admin_ondemand_max_trace_filesize_unlimited: "Illimité",
		admin_ondemand_max_trace_filesize_limited: "Limité (recommandé)",
		admin_ondemand_max_trace_filesize_meg: "Mo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "La valeur est hors plage. Elle doit être un entier entre 1 et 1 000 000.",
		admin_ondemand_afp2pdf_installdir: "Répertoire d'installation AFP2PDF :",
		admin_ondemand_language_hover: "Spécifiez la langue dans laquelle ODWEK renvoie des messages.",
		admin_ondemand_tempdir_hover: "Entrez le répertoire dans lequel le kit OnDemand Web Enablement Kit stocke des fichiers temporaires au cours du traitement. Vous devez entrer le chemin complet d'un répertoire existant sur le serveur d'applications Web.",
		admin_ondemand_tracedir_hover: "Entrez le répertoire dans lequel vous souhaitez stocker le fichier de trace ODWEK arswww.trace. Vous devez entrer le chemin complet d'un répertoire existant sur le serveur d'applications Web.",
		admin_ondemand_tracelevel_hover: "Spécifiez le niveau des données de journalisation écrites dans le fichier de trace arswww.trace. La <b>consignation des messages d'erreur</b> capture la quantité minimale d'informations de journalisation. <b>Tous les messages sont capturés, y compris la trace de fonction</b> capture le plus grand nombre d'informations.<br /><br />N'indiquez pas <b>Tous les messages sont capturés, y compris la trace de fonction</b> dans un environnement de production, sauf si IBM Software Support vous le demande.",
		admin_ondemand_max_trace_filesize_hover: "Indiquez si vous souhaitez que la taille du fichier de trace ODWEK augmente de manière illimitée ou si vous souhaitez que le client Web crée de nouveaux fichiers journaux lorsque le fichier journal atteint une certaine taille. La valeur par défaut consiste à autoriser l'augmentation de la taille du fichier journal de trace jusqu'à ce que l'application Web soit arrêtée sur le serveur d'applications Web.",
		admin_ondemand_max_trace_unlimited_hover: "Sélectionnez cette option si vous souhaitez que les informations de trace ODWEK soient écrites dans un seul fichier journal. Si vous sélectionnez cette option, le fichier journal obtenu sera peut-être trop grand pour être ouvert avec un afficheur de fichier standard.",
		admin_ondemand_max_trace_limited_hover: "Sélectionnez cette option si vous souhaitez que les informations de trace ODWEK soient écrites dans des fichiers journaux plus petits. Lorsqu'un fichier journal atteint la taille maximale, le journal actuel est renommé de façon à inclure la date (arswww.trace.YYYYMMDD.HHMMSS) et un nouveau fichier journal est créé.",
		admin_ondemand_afp2pdf_installdir_hover: "Si vous souhaitez utiliser l'utilitaire AFP2PDF Transform pour convertir des documents AFP en PDF à des fins d'affichage et d'impression, indiquez le répertoire du serveur d'applications Web où est installé l'utilitaire. Par exemple : C:\\Program Files\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administrateurs",
		admin_adminusers_heading_text_multi: "Vous devez indiquer quels utilisateurs possèdent des privilèges d'administration dans le client Web. Seuls les administrateurs peuvent se connecter au bureau d'administration.<br /><br /><b>Important :</b> les ID utilisateur des administrateurs IBM Content Navigator doivent correspondre :<ul><li>aux ID utilisateur qui existent sur votre serveur d'applications Web. Les ID utilisateur ne doivent pas forcément être des administrateurs sur le serveur d'applications Web.</li><li>aux ID utilisateur qui existent sur le référentiel par défaut configuré pour chaque bureau qui comprend une fonction Administration.</li></ul>",
		admin_adminusers_heading_text_single: "Vous devez indiquer quels utilisateurs possèdent des privilèges d'administration dans le client Web. Seuls les administrateurs peuvent se connecter au bureau d'administration.<br /><br /><b>Important :</b> les ID utilisateur des administrateurs IBM Content Navigator doivent correspondre aux ID utilisateur qui existent sur votre serveur d'applications Web. Les ID utilisateur ne doivent pas forcément être des administrateurs sur le serveur d'applications Web.",
		admin_adminusers_newuser: "Nouvel administrateur :",
		admin_adminusers_add: "Ajouter",
		admin_adminusers_remove: "Retirer",
		admin_adminusers_listheading: "Administrateurs",
		admin_adminusers_nameInvalid: "Cette valeur ne doit pas être un doublon.",

		admin_sync_server_instructions: "<b>Utilisateurs FileNet P8 uniquement :</b> Si vous envisagez d'activer les services de synchronisation pour un ou plusieurs référentiels, vous devez configurer le client Web pour qu'il utilise les services de synchronisation. La configuration des services de synchronisation est partagée par tous les référentiels de votre environnement.",
		admin_settings_instructions: "Les valeurs que vous spécifiez dans l'onglet Paramètres s'appliquent à tous les bureaux de votre configuration.",
		admin_autocomplete: "Remplir automatiquement les noms d'utilisateur :",
		admin_autocomplete_hover: "Indiquez si vous souhaitez que le client Web stocke les noms d'utilisateur dans des cookies de navigateur, afin de permettre au navigateur de remplir automatiquement les noms d'utilisateur dans le client Web au cours de la connexion.<br><br>Si vous activez cette option, le nom d'utilisateur du dernier utilisateur s'étant connecté au client Web est stocké dans les cookies du navigateur et s'affiche automatiquement sur la page Connexion lorsqu'un utilisateur ouvre le client Web.<br><br>Il est conseillé de désactiver cette option si l'application est accessible depuis des postes de travail partagés, ou si vous ne souhaitez pas que des noms d'utilisateur soient stockés dans les cookies du navigateur.<br /><br />Cette option ne s'applique pas aux applications mobiles ou personnalisées.",
		admin_autocomplete_enable: "Activer",
		admin_autocomplete_disable: "Désactiver",
		admin_cultural_collation: "Utiliser le tri spécifique à l'environnement local :",
		admin_cultural_collation_hover: "Si vous activez le tri spécifique à l'environnement local, le tri s'effectue sur le serveur de référentiel. Ceci peut diminuer les performances du client Web.<br><br>La désactivation du tri spécifique à l'environnement local peut améliorer les performances du client Web.",
		admin_cultural_collation_enable: "Activer",
		admin_cultural_collation_disable: "Désactiver",
		admin_base_ui_style: "Style du thème",
		admin_base_ui_style_hover: "Spécifiez le style du thème par défaut utilisé dans le client web. Ce style n'est utilisé que sur les bureaux qui utilisent le thème <b>Par défaut</b> (spécifié sous l'onglet <b>Apparence</b> dans la configuration du bureau).<br/></br><b>Restriction :</b> Si vos configurations de bureau utilisent des thèmes personnalisés, ces derniers seront basés sur le style Classic, quel que soit le style choisi ici.",
		admin_base_ui_style_classic: "Classic",
		admin_access_control_access: "Limiter l'accès à des groupes et des utilisateurs spécifiques",
		admin_access_control_access_show: "Afficher les données de contrôle d'accès",
		admin_access_control_access_enable: "Oui",
		admin_access_control_access_disable: "Non",
		admin_mobile_access: "Autoriser l'accès depuis des applications mobiles",
		admin_mobile_access_hover: "Par défaut, les utilisateurs peuvent accéder au client Web à partir de l'application IBM Content Navigator iOS.<br /><br /><b>Important :</b> Si vous empêchez les utilisateurs d'accéder au client Web à partir de l'application iOS, ils peuvent toujours y accéder à partir des navigateurs Web de leurs périphériques mobiles et depuis toute autre application personnalisée écrite à l'aide des API IBM Content Navigator et fonctionnant sur les périphériques mobiles.",
		admin_mobile_access_enable: "Oui",
		admin_mobile_access_disable: "Non",
		admin_error: "Informations sur le message d'erreur :",
		admin_error_custom: "Recherche de contenu de support personnalisé",
		admin_error_default: "Recherche de contenu IBM Support <BDO DIR='LTR'>(</BDO>par défaut<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Indiquez où vous souhaitez diriger les utilisateurs pour qu'ils trouvent plus d'informations lorsqu'ils rencontrent un message d'erreur. Vous pouvez diriger les utilisateurs vers des informations sur le portail de support IBM, ou vers une ressource interne, comme un centre d'assistance.",
		admin_error_URL: "Préfixe d'URL :",
		admin_error_URL_hover: "Entrez l'URL de la ressource vers laquelle vous souhaitez diriger les utilisateurs lorsqu'ils rencontrent une erreur, comme un bureau d'aide. Par exemple : http://localhost:numéro_port. Le client Web ajoute le numéro du message à l'URL.",
		admin_prompt_close_without_save: "Voulez-vous fermer sans sauvegarder vos modifications ?",
		admin_object_expiration_time: "Intervalle d'actualisation du cache (en minutes) :",
		admin_object_expiration_time_hover: "Vous pouvez augmenter la durée pendant laquelle les objets de configuration, tels que les bureaux, sont conservés dans le cache afin d'améliorer les performances du client Web. La durée par défaut est 10 minutes. La durée maximale est 1440 minutes (1 jour).<br /><br />Vous devez redémarrer l'application Web pour que vos changements prennent effet.<br /><br />Si IBM Content Navigator est déployé dans un environnement de cluster à haute disponibilité, aucun changement apporté aux objets de configuration n'est propagé aux noeuds du cluster tant que le cache n'est pas actualisé.",
		admin_temp_file_cleanup_interval: "Intervalle d'analyse pour effacer le cache de l'afficheur (en heures) :",
		admin_temp_file_cleanup_interval_hover: "Planifiez la fréquence d'analyse du répertoire temporaire pour rechercher et supprimer les fichiers temporaires arrivés à expiration. Par défaut, le répertoire temporaire est analysé toutes les six heures. Vous pouvez spécifier une valeur comprise entre 6 et 48 heures.",
		admin_temp_file_expiration_interval: "Expiration du cache de l'afficheur (en heures) :",
		admin_temp_file_expiration_interval_hover: "Spécifiez la durée pendant laquelle les fichiers temporaires liés aux activités dans l'afficheur sont conservés dans le cache du navigateur. Par défaut, ces fichiers temporaires arrivent à expiration au bout de 24 heures. Vous pouvez spécifier une valeur comprise entre 12 et 48 heures.",
		admin_encryption_key_hover: "Clé utilisée pour les fonctions de chiffrement Navigator.",
		admin_encryption_key: "Clé de chiffrement :",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Marque",
		admin_mobile_branding_main_color: "Couleur principale :",
		admin_mobile_branding_secondary_color: "Couleur secondaire :",
		admin_mobile_device_title: "Gestion de MaaS360",
		admin_mobile_device_enable_maas360: "Activer MaaS360 :",
		admin_mobile_device_enable_maas360_hover_help: "Aide contextuelle d'Activer MaaS360",
		admin_mobile_device_maas360_developer_id: "ID développeur MaaS360 :",
		admin_mobile_device_maas360_license_key: "Clé de licence MaaS360 :",
		admin_mobile_settings_title: "Paramètres",
		admin_mobile_email_address_hover_help: "L'adresse e-mail est utilisée dans l'application mobile lorsqu'un utilisateur clique sur \"Envoyer un rapport d'erreur.\"",
		admin_mobile_email_address: "Adresse e-mail :",
		admin_invalid_email_address_message: "Le format de l'adresse e-mail que vous avez entrée n'est pas correct. Entrez l'adresse correcte, puis recommencez.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Certaines données ne sont pas valides.",
		admin_configuration_parameters: "Paramètres de configuration",
		admin_configuration_optional_features: "Fonctions facultatives",
		admin_configuration_optional_features_p8_instructions: "Sélectionnez les fonctions à activer sur ce référentiel.<p><b>Important :</b> Si vous activez une fonction qui installe un module complémentaire sur le référentiel, vous devez être connecté au référentiel en tant qu'administrateur Content Platform Engine ou Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Sélectionnez les fonctions à activer sur ce référentiel.<p><b>Important :</b> Ces fonctions modifient le modèle de données sur votre référentiel. Pour les activer, vous devez être connecté au référentiel en tant qu'administrateur de serveur de bibliothèque.</p>",
		admin_system_properties: "Propriétés système",
		admin_system_properties_for: "Propriétés système pour :",
		admin_available_properties: "Propriétés disponibles",
		admin_displayed_properties: "Propriétés affichées",
		admin_selected_properties: "Propriétés sélectionnées",
		admin_selected_filtered_properties: "Propriétés masquées",
		admin_available_operators: "Opérateurs affichés",
		admin_selected_filtered_operators: "Opérateurs masqués",
		admin_system_properties_shown: "Propriétés affichées",
		admin_system_properties_hidden: "Propriétés masquées",
		admin_available_menu_items: "Actions disponibles :",
		admin_selected_menu_items: "Actions sélectionnées :",
		admin_menu_global: "S'applique lorsqu'aucun élément n'est sélectionné :",
		admin_menu_multiple_document: "S'applique lorsque plusieurs éléments sont sélectionnés :",
		admin_menu_privileges: "Privilèges requis :",
		admin_menu_plugin: "Plug-in :",
		admin_menu_repository_types: "Types de référentiel :",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Séparateur",
		admin_browse: "Parcourir",
		admin_search: "Rechercher",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Occultation basée sur les rôles",
		admin_connections_library_enabled: "IBM Connections activé",
		admin_office_conf: "Intégration d'édition",
		admin_desktop_conf_label: "Configuration du bureau",
		admin_ms_office_conf_label: "Configuration Office",
		admin_workflows: "Flux de travaux",
		admin_file_types: "Types de fichier",
		admin_file_type_contains_label: "Le type de fichier contient",
		admin_name_propepty: "Nom",
		admin_cm_name_property_default: "Utiliser le nom par défaut",
		admin_cm_name_property_default_hover: "Par défaut, la propriété nom hiérarchique d'ICM (ICM$NAME) est utilisée comme nom d'élément si elle est définie pour l'élément.  Si la propriété nom hiérarchique d'ICM (ICM$NAME) n'est pas disponible, la première propriété marquée comme \"represents\" est utilisée comme nom d'élément.",
		admin_cm_name_property: "Indiquer la propriété du nom de l'élément",
		admin_cm_name_property_hover: "Indique la propriété utilisée comme nom pour les documents et les dossiers.",
		admin_name_property: "Propriété du nom :",
		admin_doc_name_property: "Propriété du nom de document :",
		admin_doc_name_property_hover: "Indique quelle propriété est utilisée comme nom de document.",
		admin_folder_name_property: "Propriété du nom de dossier :",
		admin_folder_name_property_hover: "Indique quelle propriété est utilisée comme nom de dossier.",
		admin_all_searches_label: "Nombre de recherches à afficher :",
		admin_unlimited: "Aucune limite",
		admin_limit: "Se limiter à",
		admin_repository: "Référentiel :",
		admin_application_space: "Espace d'application",
		admin_available_application_spaces: "Espaces d'application disponibles :",
		admin_selected_application_spaces: "Espaces d'application sélectionnés :",
		admin_label: "Libellé",
		admin_repository_box_placeholder: "Sélectionner un référentiel Box",
		admin_repository_placeholder: "Sélectionner un référentiel",
		admin_search_match: "Correspondance :",
		admin_search_match_all: "Respecter tous les critères de recherche",
		admin_search_match_any: "Respecter l'un des critères de recherche",
		admin_search_match_hover: "Indiquez quelle option est sélectionnée par défaut dans le menu <b>Options de propriété</b>.",

		admin_repository_redactions_instructions: "Vous pouvez configurer des occultations basées sur les rôles pour ce référentiel.",
		admin_repository_redaction_policies_description: "Vous pouvez créer et gérer des règles d'occultation qui associent des motifs d'occultation à des utilisateurs et des groupes qui peuvent lire les données sensibles et éditer les annotations qui masquent ces données.",
		admin_repository_redaction_roles_instruction: "Vous pouvez créer un rôle d'occultation pour associer les utilisateurs et les groupes spécifiés à la capacité de lire les données sensibles ou d'éditer les annotations qui masquent ces dernières à des fins de protection. Ce rôle doit être associé à un motif d'occultation dans une règle d'occultation pour que ces utilisateurs et ces groupes puissent lire les données ou éditer les annotations.",
		admin_repository_redaction_reasons_instruction: "Vous pouvez configurer les motifs d'occultation pour votre référentiel.",
		admin_repository_redaction_policies: "Configuration des règles d'occultation",
		admin_repository_redaction_roles: "Configuration des rôles d'occultation",
		admin_repository_redaction_reasons: "Configuration des motifs d'occultation",
		admin_repository_redaction_roles_type: "Type",
		admin_repository_redaction_roles_type_hover: "Un éditeur peut créer, modifier ou supprimer des types spécifiques d'occultations basées sur les rôles tandis qu'afficheur peut visualiser des types spécifiques de données sensibles.",
		admin_repository_redaction_roles_type_editor: "Editeur",
		admin_repository_redaction_roles_type_viewer: "Afficheur",
		admin_repository_redaction_roles_membership: "Appartenance",
		admin_repository_redaction_roles_membership_hover: "Sélectionnez les éditeurs auxquels vous souhaitez attribuer ce rôle.",
		admin_repository_redaction_roles_user_group_hover: "Recherchez les utilisateurs et les groupes ou sélectionnez les éditeurs auxquels vous souhaitez attribuer ce rôle.",
		admin_repository_redaction_roles_description: "Vous pouvez créer et gérer des rôles d'occultation qui associent des utilisateurs et des groupes à la capacité de lire les données sensibles et d'éditer les annotations qui masquent les données sensibles à des fins de protection.",
		admin_repository_redaction_new: "Nouveau rôle d'occultation",
		admin_repository_redaction_role_avail_editors: "Editeurs d'occultation disponibles",
		admin_repository_redaction_role_avail_users: "Utilisateurs disponibles",
		admin_repository_redaction_role_avail_groups: "Groupes disponibles",
		admin_repository_redaction_role_selected_editors: "Editeurs d'occultation sélectionnés",
		admin_repository_redaction_role_selected_users_groups: "Utilisateurs et groupes sélectionnés",
		admin_repository_redaction_role_add_editor: "Nouveau éditeurs...",
		admin_repository_redaction_role_access_type: "Accès",
		admin_repository_redaction_role_access_type_access: "Autoriser",
		admin_repository_redaction_role_access_type_no_access: "Refuser",
		admin_repository_redaction_role_users: "Utilisateurs",
		admin_repository_redaction_role_groups: "Groupes",
		admin_repository_redaction_role_editors: "Editeurs",
		admin_delete_confirmation_redaction_roles: "Voulez-vous supprimer le rôle d'occultation sélectionné ?",
		admin_repository_edit_redaction_role: "Rôle d'occultation : <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Accès par défaut",
		// RBA
		desktop_user_group_acl: "Administrateurs de bureau",
		desktop_user_group_remove: "Retirer",
		desktop_rba_membership: "Appartenance :",
		desktop_rba_membership_list_label: "Nom",
		admin_repository_redaction_policy_hover: "Entrez une description qui permettra aux utilisateurs de faire la distinction entre cette règle et les autres règles.",
		admin_repository_new_redaction_policy: "Nouvelle règle d'occultation",
		admin_repository_policy_name: "Nom de règle",
		admin_repository_reason_redactions: "Motifs d'occultation :",
		admin_repository_role_editors: "Editeurs",
		admin_repository_role_viewers: "Afficheurs",
		admin_repository_redaction_policy_instruction: "Vous pouvez créer une règle d'occultation pour associer les motifs d'occultation sélectionnés à des éditeurs et afficheurs d'occultation.",
		admin_repository_redaction_reasons_hover: "Sélectionnez un ou plusieurs types de données sensibles auxquelles vous ne souhaitez pas que la plupart des utilisateurs aient accès, comme par exemple les informations personnelles identifiables, les secrets commerciaux ou les informations confidentielles ou propriétaire de votre société.",
		admin_repository_readaction_available_reasons: "Motifs disponibles",
		admin_repository_readaction_selected_reasons: "Motifs sélectionnés",
		admin_repository_readaction_new_reason: "Nouveau motif...",
		admin_repository_redeaction_reasons: "Motifs d'occultation :",
		admin_repository_readaction_editor_permmission: "Editeurs d'occultation :",
		admin_repository_redaction_editors_hover: "Sélectionnez les rôles pouvant créer et modifier l'occultation pour les motifs sélectionnés.",
		admin_repository_readaction_new_editor_role: "Nouveau rôle éditeur...",
		admin_repository_readaction_available_editors: "Rôles éditeur disponibles",
		admin_repository_readaction_selected_editors: "Rôles éditeur sélectionnés",
		admin_repository_readaction_viewer_permmission: "Afficheurs d'occultation :",
		admin_repository_redaction_viewers_hover: "Sélectionnez les rôles pouvant afficher les données sensibles pour les motifs sélectionnés. Le contenu n'est pas occulté pour les utilisateurs et les groupes ayant ces rôles.",
		admin_repository_readaction_new_viewer_role: "Nouveau rôle afficheur...",
		admin_repository_readaction_available_viewers: "Rôles afficheur disponibles",
		admin_repository_readaction_selected_viewers: "Rôles afficheur sélectionnés",
		admin_repository_reason_redactions_header: "Motifs d'occultation",
		admin_delete_confirmation_redaction_policy: "Voulez-vous supprimer la règle d'occultation sélectionnée ?",
		admin_role_type_repository: "Référentiel",
		admin_role_type_administrator: "Administrateur",
		admin_role_type_template: "Modèle",
		admin_role_type_teamspace: "Espace d'équipe",
		admin_role_type_author: "Editeur",
		admin_role_type_user: "Afficheur",
		admin_collaboration_services_instructions: "Si vous avez IBM Connections et une application Web FileNet Collaboration Services, vous pouvez configurer des espaces d'équipe de communauté et des flux d'activités pour le référentiel.",
		admin_collaboration_services: "FileNet Collaboration Services :",
		admin_collaboration_community: "Configuration des bibliothèques de communauté",
		admin_collaboration_community_instruction: "Vous pouvez configurer un référentiel dans votre domaine IBM FileNet P8 pour stocker les bibliothèques de communauté IBM Connections (également appelées espaces d'équipe). Lorsque des utilisateurs créent une bibliothèque communautaire via IBM Connections, elle est stockée sur le référentiel désigné comme référentiel de bibliothèques communautaires.",
		admin_collaboration_community_teamspaces: "Utilisez ce référentiel pour les bibliothèques de communauté :",
		admin_collaboration_community_teamspaces_hover: "Vous pouvez utiliser uniquement un référentiel dans votre domaine IBM FileNet P8 pour stocker de nouvelles bibliothèques de communauté. Si vous activez ce référentiel et si vous avez un référentiel existant, le référentiel existant sera désactivé. Cependant, toutes les bibliothèques existantes resteront sur le référentiel en cours.",
		admin_collaboration_connections_anonymous: "Autorisez l'accès anonyme au contenu public :",
		admin_collaboration_connections_anonymous_hover: "Si votre serveur IBM Connections contient les communautés publique ou modérée, vous pouvez configurer FileNet Collaboration Services pour permettre aux utilisateurs de parcourir et de télécharger du contenu à partir des bibliothèques dans ces communautés sans avoir à se connecter d'abord.<br><br>Les utilisateurs qui accèdent à des bibliothèques de communauté anonymes ne peuvent pas créer, modifier ou supprimer le contenu.<br><br><b>Important :</b> Vous devez désigner un utilisateur LDAP IBM FileNet P8 en tant qu'utilisateur anonyme et configurer cet utilisateur avec le rôle <b>Anonyme</b> dans WebSphere Application Server.",
		admin_collaboration_connections_url: "URL IBM Connections :",
		admin_collaboration_connections_url_hover: "Indiquez l'adresse URL de votre serveur IBM Connections au format http://serveur_IBMConnections:numéro_port.  Si IBM Connections est configuré pour utiliser IBM HTTP Server, vous pouvez ne pas indiquer le numéro de port de l'adresse URL.<br><br>L'adresse URL doit être accessible pour les utilisateurs IBM Connections car il s'agit du lien que FileNet Collaboration Services utilise pour créer des liens vers les pages d'arrivée de document dans IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilisez l'adresse URL d'IBM Connections",
		admin_collaboration_connections_url_https_use: "Utilisez l'adresse URL HTTPS d'IBM Connections",
		admin_collaboration_connections_url_specify: "Indiquez l'adresse URL",
		admin_collaboration_connections_url_https: "Adresse URL HTTPS IBM Connections :",
		admin_collaboration_connections_url_https_hover: "Si IBM Connections est configuré pour utiliser le SSL, indiquez l'adresse URL HTTPS sur votre serveur IBM Connections avec le format https://serveur_IBMConnections:numéro_port.  Si IBM Connections est configuré pour utiliser IBM HTTP Server, vous pouvez ne pas indiquer le numéro de port de l'adresse URL.",

		admin_collaboration_connections_gadget_url: "Adresse URL d'objet IBM Connections :",
		admin_collaboration_connections_retrieval_url: "Adresse URL de récupération IBM Connections :",
		admin_collaboration_connections_security: "Administrateurs de communauté :",
		admin_collaboration_connections_security_hover: "Indiquez les utilisateurs et groupes qui peuvent administrer du contenu dans les bibliothèques de communauté.<br><br>Les administrateurs globaux peuvent créer, modifier, supprimer et fournir un accès aux bibliothèques de communauté et au contenu de bibliothèques communautaires. Lorsque vous indiquez un utilisateur en tant qu'administrateur global, l'utilisateur reçoit des privilèges ClbGlobalAdministrator dans le référentiel.<br><br>Les administrateurs de révision globale peuvent approuver et rejeter du contenu en cours de révision pour publication dans une bibliothèque de communauté. Lorsque vous indiquez un utilisateur en tant qu'administrateur de révision global, l'utilisateur reçoit les privilèges ClbGloablReviewAdministrator dans le référentiel.",

		admin_collaboration_connections_admins: "Administrateurs globaux",
		admin_collaboration_connections_admins_review: "Administrateurs de révision globale",
		admin_collaboration_connections_seedlist: "Indexez le contenu de bibliothèque de communauté :",
		admin_collaboration_connections_seedlist_hover: "Indiquez si vous souhaitez qu'IBM Connections explore les bibliothèques de communauté dans ce référentiel pour créer un index de recherche. La création d'un index peut affecter les performances du référentiel.<br><br>Si les extensions d'index de recherche de collaboration sociale sont installées sur le référentiel, cette option est activée par défaut. Si les extensions d'index de recherche de collaboration sociale ne sont pas installées sur le référentiel, le module complémentaire est installé sur le référentiel lorsque vous activez cette option.",
		admin_collaboration_activity_stream: "Configuration d'événement de flux d'activité",
		admin_collaboration_activity_stream_label: "Envoyez les informations liées à un événement à IBM Connections :",
		admin_collaboration_activity_stream_label_hover: "Indiquez si vous souhaitez envoyer des informations d'événement, telles que la création de document, les réservations, les restitutions, les commentaires, les balises et les partages, à IBM Connections.<br><br><b>Important :</b> l'envoi de notifications à IBM Connections peut affecter les performances du référentiel.",

		admin_collaboration_activity_stream_instruction: "Vous pouvez configurer ce référentiel pour envoyer des informations sur les événements, telles que les approbations de commentaires et de documents, à IBM Connections. Les événements sont affichés sur la page <b>Mises à jour récentes</b> dans les communautés IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Ignorer les informations d'événement pour des utilisateurs et des groupes spécifiques :",
		admin_collaboration_activity_stream_ignored_ids_hover: "Vous pouvez ignorer les événements qui sont générés par des utilisateurs ou des groupes spécifiques, tels que les administrateurs ou les comptes système, afin de réduire le nombre de notifications que les utilisateurs voient. Par exemple, si vous effectuez une migration de contenu, vous pouvez spécifier que les événements qui sont générés par le compte et utilisés pour la migration sont ignorés.",
		admin_collaboration_activity_stream_userid: "Nom d'utilisateur IBM Connections :",
		admin_collaboration_activity_stream_userid_hover: "Indiquez le compte système que Content Platform Engine utilisera pour s'authentifier et envoyer des informations sur les événements à IBM Connections. L'utilisateur doit se trouver dans le rôle <b>trustedExternalApplication</b> dans l'application Widget Container dans IBM Connections.<br><br><b>Astuce :</b> Par défaut, l'administrateur IBM Connections dispose des privilèges appropriés. Vous pouvez utiliser l'ID administrateur en tant que nom d'utilisateur",
		admin_collaboration_activity_stream_password: "Mot de passe d'utilisateur IBM Connections :",

		admin_help_url: "URL d'aide d'utilisateur final :",
		admin_help_url_hover: "<b>Remarque importante :</b> IBM Knowledge Center Customer Installed ne sera pas mis à jour à partir d'IBM Content Navigator, version 3.0.0. Contactez le centre de support pour plus d'informations sur l'utilisation de l'aide personnalisée.<br><br>A partir d'IBM Content Navigator, version 3.0.0, l'URL de l'aide pour l'utilisateur final est transférée à l'IBM Knowledge Center. L'URL de l'IBM Knowledge Center est : http://www.ibm.com/support/knowledgecenter.<br><br>Pour continuer à utiliser une version précédente d'IBM Knowledge Center Customer Installed, indiquez l'URL de l'instance d'IBM Knowledge Center Customer Installed déployée par l'outil de configuration et de déploiement IBM Content Navigator. Cette URL doit être accessible pour les machines client. L'URL est au format http://nom_serveur:numéro_port/kc.<br><br>Vous pouvez obtenir le nom du serveur et le numéro de port à partir du fichier console.log dans le sous-répertoire KnowledgeCenter/logs du répertoire d'installation d'IBM Content Navigator.",

		admin_help_default: "Utilisez l'aide par défaut fournie par IBM",
		admin_custom_help: "Utilisez un système d'aide personnalisé",
		admin_help_kc: "Utiliser l'aide personnalisée dans IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Remarque importante :</b> IBM Knowledge Center Customer Installed ne sera pas mis à jour à partir d'IBM Content Navigator, version 3.0.0. Contactez le centre de support pour plus d'informations sur l'utilisation de l'aide personnalisée.<br><br>Pour continuer à utiliser une version précédente d'IBM Knowledge Center Customer Installed, sélectionnez cette option pour continuer à ajouter du contenu à l'instance d'IBM Knowledge Center Customer Installed que vous avez précédemment déployée.",
		admin_help_taxonomy: "Code de taxonomie :",
		admin_help_taxonomy_hover: "Indiquez le code de taxonomie de votre aide personnalisée.<br><br>Le code de taxonomie d'IBM Content Navigator est SSEUEX. Si vous souhaitez afficher votre aide sous un nom de produit différent dans IBM Knowledge Center Customer Installed, vous devez ajouter un code de taxonomie unique dans le fichier KC_taxonomy.ditamap dans le répertoire KnowledgeCenter/usr/taxonomy du répertoire d'installation d'IBM Content Navigator.",
		admin_help_context: "Contexte de l'aide :",
		admin_help_context_hover: "Indiquez le contexte de votre aide personnalisée.<br><br>L'aide d'IBM Content Navigator se trouve dans le répertoire KnowledgeCenter/usr/content/com.ibm.usingeuc.doc du répertoire d'installation d'IBM Content Navigator. Le contexte de l'aide par défaut est com.ibm.usingeuc.doc. Si vous souhaitez fournir une aide personnalisée, ajoutez le contenu dans un nouveau sous-répertoire dans le répertoire KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Page de connexion :",
		admin_help_welcome_hover: "Spécifiez le nom de la rubrique que vous souhaitez utiliser comme page de connexion lorsque des utilisateurs accèdent à l'aide. Vous devez créer un fichier de propriétés qui indique l'emplacement de la page de connexion et ajouter ce fichier de propriétés au répertoire KnowledgeCenter/usr/conf du répertoire d'installation d'IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Fichier JSON d'extensions de types Mime :",
		admin_settings_mimetype_extensions_jsonfile_hover: "Vérifiez le nom du fichier JSON et son chemin complet. Il peut s'agir d'un fichier standard du système de fichiers ou d'une URL pointant sur le fichier JSON.  <br><br>Le contenu du fichier JSON est un tableau de définitions de types Mime. <br><br>Une définition de type Mime inclut quatre clés : \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Les deux premières clés, \"mimeTypes\" et \"extensions\", sont obligatoires. Il peut s'agir de tableaux de chaînes séparées par des \",\". Les deux dernières clés, \"fileType\" et \"iconName\", sont optionnelles. <br><br>Par exemple : <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuration du gestionnaire de tâches",
		admin_taskmanager_service: "Service du gestionnaire de tâches :",
		admin_taskmanager_service_hover: "Indiquez si vous voulez utiliser le service du gestionnaire de tâches pour créer et exécuter des tâches asynchrones. <br><br>Si vous modifiez ce paramètre, vous devez redémarrer l'application Web IBM Content Navigator pour que les modifications prennent effet.",
		admin_taskmanager_url: "Adresse URL du service de gestionnaire de tâches :",
		admin_taskmanager_url_hover: "Indiquez l'adresse URL par le biais de laquelle les autres applications communiquent avec le service du gestionnaire de tâches. Le format de l'adresse est le suivant : http://nom_serveur:numéro_port/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Répertoire de journal du gestionnaire de tâches :",
		admin_taskmanager_logdirectory_hover: "Par défaut, les fichiers journaux du service de gestionnaire de tâches sont consignés dans le même répertoire que celui des fichiers journaux de l'application Web. <br><br>Si vous préférez les consigner dans un répertoire différent sur le serveur IBM Content Navigator, entrez le chemin d'accès complet au répertoire dans lequel stocker les fichiers journaux générés par le composant du gestionnaire de tâches. <br><br>Si vous modifiez ce paramètre, vous devez redémarrer l'application Web IBM Content Navigator pour que les modifications prennent effet.",
		admin_taskmanager_heartBeatMonitor: "Surveillance des pulsations de cluster",
		admin_taskmanager_heartBeatMonitor_hover: "Option réservée aux environnements de cluster à haute disponibilité. Si vous l'activez, le service du gestionnaire de tâches réachemine les tâches des noeuds désactivés vers ceux en cours d'exécution. <br><br>Si vous modifiez ce paramètre, vous devez redémarrer l'application Web IBM Content Navigator pour que les modifications prennent effet.",

		admin_syncserver_title: "Configuration du serveur de synchronisation",
		admin_syncserver_enable: "Services de synchronisation :",
		admin_syncserver_enable_hover: "Indiquez si vous souhaitez que les utilisateurs qui ont accès à ce bureau puissent synchroniser leurs éléments sur l'ensemble de leurs postes de travail et périphériques mobiles.<br><br><b>Important :</b> Pour utiliser cette fonction, vous devez également effectuer les tâches suivantes :<ul><li>Spécifiez l'<b>URL publique de services de synchronisation</b> dans la section <b>Services de synchronisation</b> de l'outil d'administration.</li><li>Ajoutez un référentiel pour lequel les services de synchronisation sont activés pour ce bureau.</li></ul>Si vous désactivez cette option mais que vous ajoutez un référentiel pour lequel les services de synchronisation sont activés pour ce bureau, le paramètre sur le référentiel est ignoré.",
		admin_mobileqr_enable: "Afficher le code QR d'IBM Navigator sur la page de connexion :",
		admin_mobileqr_enable_hover: "Sélectionnez cette option si vous voulez que le code QR de l'application mobile IBM Navigator soit affiché sur la page de connexion du client web.<br><br>En scannant ce code, l'utilisateur accédera à l'app store correspondant à son type d'appareil, d'où il pourra télécharger l'application mobile IBM Navigator.",

		admin_streamlineservice_enable: "Service d'édition :",
		admin_streamlineservice_enable_hover: "Utilisateurs de FileNet P8 uniquement. Sélectionnez cette option si vous voulez que les utilisateurs du bureau puissent facilement ajouter et éditer des documents à partir des applications natives installées sur leur poste de travail. <br><br>Pour utiliser cette fonction, vous devez aussi : <ul><li>Activer le service d'édition sur un ou plusieurs référentiels associés à ce bureau</li><li>Installer le client IBM Content Navigator Edit sur les postes de travail des utilisateurs</li></ul>",

		admin_repository_general_instructions: "Vous devez vous connecter au référentiel avant de pouvoir configurer les paramètres, les propriétés système, les dossiers, etc.",
		admin_repository_system_instructions: "Indiquez quelles propriétés système s'affichent pour les documents et dossiers sur ce référentiel.",

		admin_desktop_general_create_instructions: "Un bureau détermine ce que l'utilisateur peut voir et faire lorsqu'il se connecte au client Web. Après avoir créé un bureau, vous pouvez envoyer l'URL du bureau aux utilisateurs pour qu'ils puissent accéder au bureau.",
		admin_desktop_admin_instructions: "Le bureau d'administration est doté d'un client Web pouvant être configuré par les administrateurs. Ce bureau dispose d'un accès à tous les répertoires configurés pour le client Web.",
		admin_desktop_repositories_instructions: "Indiquez les référentiels auxquels vous souhaitez que les utilisateurs aient accès à partir de ce bureau. Vous devez configurer vos référentiels avant de pouvoir les ajouter au bureau.<br><br><b>Astuce :</b> vous pouvez limiter les référentiels qui sont disponibles pour chaque fonction lorsque vous configurez l'agencement du bureau.",
		admin_desktop_menus_instructions: "Indiquez les menus auxquels vous souhaitez que les utilisateurs aient accès à partir de ce bureau. Les menus indiquent quelles actions sont disponibles selon l'élément sélectionné dans l'interface.<br><br><b>Astuce :</b> vous pouvez personnaliser le contenu des menus dans la section <b>Menus</b> de l'outil d'administration, ou créer de nouveaux types de menus en créant des plug-in.",

		admin_desktop_no_repositories: "Aucun référentiel n'est configuré.",

		admin_desktop_id_hover: "L'ID du bureau est inclus dans l'URL du client Web et indique quel bureau est ouvert lorsqu'un utilisateur se connecte au client Web. L'ID doit être unique et vous ne pouvez pas modifier l'ID après avoir sauvegardé le bureau.<br><br>L'ID peut contenir uniquement des caractères alphanumériques et est sensible à la casse.",
		admin_desktop_id_disabled_hover: "L'ID du bureau ne peut pas être modifié. Si vous souhaitez utiliser un ID différent, vous devez créer un nouveau bureau.",
		admin_desktop_name_hover: "Le nom du bureau ne doit pas contenir les caractères suivants : * \\ / : ? \" < > |",
		admin_desktop_default_hover: "Votre configuration ne peut contenir qu'un seul bureau par défaut.",

		admin_repository_id_disabled_hover: "L'ID du référentiel ne peut pas être modifié. Si vous souhaitez utiliser un ID différent, vous devez créer un nouveau référentiel.",
		admin_printService_enable: "Imprimer à l'aide du service d'impression IBM Daeja ViewONE :",
		admin_printService_enable_hover: "Si vous choisissez d'activer le service d'impression IBM Daeja ViewONE, les documents sont convertis au format PDF et l'impression peut être réalisée à l'aide de n'importe quel navigateur Web.<br><br>Si vous choisissez de désactiver le service d'impression IBM Daeja ViewONE, vous ne pouvez imprimer des documents que dans les navigateurs web prenant en charge les applets Java.  Certains navigateurs web ne les prennent pas en charge et, par conséquent, ne permettent pas l'impression d'applet.<br><br>Voir la documentation des navigateurs supportés.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Répertoire de base d'utilisateur",
		admin_file_tracking_doc_directory_my_documents: "Répertoire de document utilisateur",
		admin_file_tracking_doc_directory_qp: "Chemin qualifié",
		admin_file_tracking_section_tile: "Configuration de suivi des fichiers",
		admin_file_tracking_home_path: "Chemin d'accueil",
		admin_file_tracking_my_documents: "Mes documents",
		admin_file_tracking_exact_path: "Chemin d'accès complet :",
		admin_file_tracking_qp: "Chemin qualifié",
		admin_file_tracking_ev: "Variable d'environnement",
		admin_file_tracking_ev_us: "Variable d'environnement personnalisé ",
		admin_file_tracking_del_local_copy: "Supprimer la copie locale :",
		admin_file_tracking_yes: "Oui",
		admin_file_tracking_no: "Non",
		admin_file_tracking_del_local_copy_rt_state_editable: "Autoriser les utilisateurs à redéfinir ce paramètre",
		admin_file_tracking_del_local_copy_rt_state1: "Oui",
		admin_file_tracking_del_local_copy_rt_state2: "Non",
		admin_file_Tracking_label: "Suivi des fichiers :",
		admin_file_Tracking_disable: "Désactiver",
		admin_file_Tracking_enable: "Activer",
		admin_file_tracking_label_hover_help: "Le suivi des fichiers utilise une applet afin de réserver et de télécharger des documents vers un répertoire spécifique sur les machines des utilisateurs. L'applet permet également à IBM Content Navigator de rechercher des documents sur les machines des utilisateurs lorsque les utilisateurs restituent des documents.",
		admin_file_tracking_doc_directory: "Emplacement de stockage :",
		admin_file_tracking_open_file: "Ouvrir le fichier automatiquement",
		admin_file_Tracking_append_qualified_path: "Ajouter un répertoire",
		admin_file_Tracking_append_qualified_path_hover_help: "Vous pouvez ajouter un répertoire à la fin de la variable d'environnement si vous souhaitez que des documents soient enregistrés dans un sous-répertoire spécifique. <br/><br/>Par exemple, vous pouvez indiquer que des documents sont téléchargés dans un répertoire <i>EnterpriseDocuments</i> dans le répertoire d'accueil de l'utilisateur.",
		admin_file_Tracking_append_ev: "Ajouter une variable d'environnement",
		admin_file_Tracking_append_ev_hover_help: "Vous pouvez ajouter une variable d'environnement si vous préférez que les documents soient sauvegardés dans un répertoire spécifié dynamiquement, tel qu'un répertoire utilisateur.<br/><br/>Par exemple, vous pouvez indiquer que les documents sont stockés dans un sous-répertoire <i>nom_utilisateur</i> dans un répertoire de réseau partagé. ",
		admin_file_tracking_doc_directory_hover_help: "Indiquez l'emplacement dans lequel les documents sont stockés lorsqu'ils sont réservés et téléchargés.<br/><br/> <b>Astuce</b> : si vous souhaitez stocker des documents dans le répertoire de base d'un utilisateur ou un répertoire de document par défaut, sélectionnez <b>Variable d'environnement</b>, qui inclut des variables prédéfinies qui pointent vers ces emplacements.",
		admin_file_tracking_qualified_path_hover_help: "Utilisez la structure de répertoires appropriée pour votre système d'exploitation Windows ou Mac pour spécifier le répertoire ou le répertoire réseau dans lequel vous souhaitez stocker les documents. <ul><li>Pour Windows, ajoutez un identificateur d'unité dans le chemin, par exemple C:\\Enterprise Documents.</li><li>Pour un répertoire réseau partagé, entrez le chemin au format \\\\nomserveur\\répertoire</li></ul><br/><b>Important :</b> Pour utiliser cette option, la structure de répertoires que vous avez spécifiée doit pouvoir être créée sur tous les postes de travail client de votre environnement.",
		admin_file_tracking_environment_variable_path_hover_help: "Utilisez les variables d'environnement appropriées pour votre système d'exploitation Windows ou Mac pour spécifier le répertoire ou le répertoire réseau dans lequel vous souhaitez stocker les documents. <br/><br/>L'option <b>User Home Directory</b> stocke des documents dans le répertoire suivant :<br/><ul><li>Windows : C:\\Users\\Nom_utilisateur</li><li>Mac : /Users/Nom_utilisateur</li></ul><br/>L'option <b>User Document Directory</b> enregistre les documents dans le répertoire suivant :<br/><ul><li>Windows : C:\\Users\\Nom_utilisateur\\Documents</li><li>Mac : /Users/Nom_utilisateur/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Indiquez si la copie locale d'un document est supprimée lorsque des utilisateurs ajoutent ou restituent des documents dans le référentiel.<br/><br/>La suppression de la copie locale vous permet d'effectuer les actions suivantes :<br/><ul><li>Imposer la conformité avec des règles informatiques</li><li>Vérifier que les utilisateurs emploient la dernière version des documents</li></ul><br/><b>Restriction :</b> Ce paramètre n'est pas utilisé lorsque les utilisateurs ajoutent des documents par le biais d'une opération de glisser-déposer.<br/><br/>Sous IBM Content Navigator for Microsoft Office, vous devez sélectionner l'option permettant de <b>supprimer les fichiers locaux lorsque les utilisateurs ajoutent ou restituent un document ou annulent une réservation</b> dans la section relative à la <b>configuration Office</b> du bureau.",
		admin_file_tracking_open_file_hover_help: "Ce paramètre remplace les préférences de gestion de document qui sont configurées dans les navigateurs Web des utilisateurs. </br></br><b>Restriction :</b> Ce paramètre n'est pas utilisé par IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Remplacer la copie locale :",
		admin_file_tracking_over_write_file_hover_help: "Indique s'il faut écraser la copie locale d'un document lorsque des utilisateurs réservent les documents du référentiel. <br/><br/>Le remplacement de la copie locale vous permet d'effectuer les actions suivantes :<br/><ul><li>Vérifier que les utilisateurs emploient la dernière version des documents</li><li>Eviter que les utilisateurs ne voient une invite lorsqu'une copie locale existe</li></ul> </br></br><b>Restriction :</b> Ce paramètre n'est pas utilisé par IBM Content Navigator for Microsoft Office si vous cochez <b>Autoriser les utilisateurs à redéfinir ce paramètre</b>.",
		admin_file_tracking_over_write_file_state_editable: "Autoriser les utilisateurs à redéfinir ce paramètre",
		admin_file_tracking_inline_help: "Le suivi des fichiers rationalise le processus de réservation et de restitution des documents dans le référentiel. Il vous permet également de gérer la manière dont les documents sont stockés sur les machines des utilisateurs. <br/><br/>En outre, le suivi des fichiers permet d'effectuer le suivi des documents dans plusieurs composants IBM Content Navigator, tels que le client Web et IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Vous devez activer l'authentification standard ou l'authentification de serveur avant de vous connecter au référentiel.",
		admin_box_use_oauth: "Type d'authentification :",
		admin_box_use_oauth_hover: "Sélectionnez l'authentification standard ou l'authentification de serveur dans un environnement de production lorsque vous octroyez l'accès aux documents Box à partir d'IBM Content Navigator. Spécifiez les valeurs id_client et secret_client OAuth2 qui sont associées à ce déploiement d'IBM Content Navigator. Vous pouvez vous procurer ces valeurs à partir de l'application Box après avoir créé cette dernière pour votre serveur IBM Content Navigator.<br/><br/>Sélectionnez Authentification de développeur dans un environnement de développement. Les développeurs peuvent se connecter à l'application Box en utilisant leur compte de développeur et générer un jeton de développeur valide pendant 60 minutes. Les développeurs peuvent utiliser ces jetons comme mot de passe avec n'importe quel ID utilisateur pour se connecter à l'application Box.",
		admin_box_oauth_client_id: "id_client :",
		admin_box_oauth_client_secret: "secret_client :",
		admin_box_oauth_subdomain: "Sous-domaine de compte d'entreprise Box :",
		admin_box_share: "ID de connexion du gestionnaire de tâches :",
		admin_box_share_hover: "Pour la copie dans Box ou le partage dans Box, le gestionnaire de tâches utilise un ID administrateur et un mot de passe pour exécuter des tâches en arrière-plan qui modifient le référentiel.<br/><br/>Cliquez sur Définir et connectez-vous à Box en utilisant un compte administrateur Box valide.<br/><br/>Si vous configurez un bureau en sélectionnant ce référentiel Box en tant que référentiel pour les fichiers partagés, vous devez spécifier un administrateur Box qui bénéficie d'un stockage illimité dans Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Ouvrir le fichier automatiquement",
		file_tracking_runtime_overwrite_hover_help: "Si vous ne sélectionnez pas cette option et que vous possédez un document portant le même nom sur votre système de fichiers local, le document sera réservé mais pas téléchargé, sauf si vous effectuez l'une des actions suivantes :<br/><ul><li> Téléchargez le document dans un sous-répertoire du répertoire par défaut. Si vous sélectionnez un sous-répertoire, l'emplacement du document peut être contrôlé par l'application Web.</li><li>Renommez le document que vous téléchargez. Renommez le document pour éviter un conflit de noms de fichier.</li></ul>",
		open_file: "Ouvrir le fichier automatiquement",
		over_write_file: "Ecraser la copie locale",
		checkout_and_download_file: "Réserver et télécharger des documents",
		download_to_local_directory: "Télécharger vers :",
		checkout_and_download_button_title: "Réserver et télécharger",
		checkout_without_java_confirmation_dialog: "Le fichier ne peut pas être téléchargé ni suivi par la fonction de suivi des fichiers.",
		browse_for_directory: "Parcourir",
		selected_documents: "Documents sélectionnés",

		checkout_without_java_confirmation_text: "Les causes possibles de ce problème sont les suivantes :<br/><ul><li>Java Runtime Environment (JRE) n'est pas installé sur votre poste de travail.</li><li>Le plug-in Java n'est pas activé dans votre navigateur Web.</li><li>Votre navigateur Web ne prend pas en charge Java.</li></ul><br/><br/>Pour résoudre ce problème, effectuez l'action appropriée :<br/><br/><ul><li>Si vous souhaitez continuer à télécharger le fichier sans que le fichier de suivi ne soit activé, cliquez sur OK.</li><li>Si vous souhaitez télécharger le fichier avec le fichier de suivi activé, annulez le téléchargement et vérifiez que l'environnement JRE est installé sur votre poste de travail, et que le plug-in Java est activé dans votre navigateur Web.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "Le document a été réservé, mais son ouverture est impossible.",
		runtime_file_tracking_open_error_explanation: "Le système d'exploitation installé sur votre poste de travail ne prend pas en charge les fichiers de ce type.",
		runtime_file_tracking_open_error_userResponse: "Pour résoudre ce problème, effectuez l'une des actions suivantes :<br/><br/><ul><li>Si vous devez travailler avec le document, ouvrez le client Web à partir d'un autre poste de travail disposant d'un système d'exploitation différent.</li><li>Si vous devez seulement visualiser le document, cliquez avec le bouton droit de la souris sur le document dans le client Web et cliquez sur Ouvrir.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "Le document a été réservé, mais n'a pas été téléchargé.",
		runtime_file_tracking_save_file_error_explanation: "Un document portant le même nom existe sur votre système de fichiers local, mais il n'a pas été remplacé. ",
		runtime_file_tracking_save_file_error_userResponse: "Si vous souhaitez télécharger le fichier à partir du référentiel, vous devez remplacer la copie locale du document lorsque vous téléchargez le document dans le référentiel.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "Le document a été réservé, mais il ne peut pas être téléchargé ou ouvert.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Un document portant le même nom existe sur votre système de fichiers local. Toutefois, le fichier n'a pas été remplacé, ce qui empêche le téléchargement et l'ouverture du document sur le référentiel.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Si vous souhaitez télécharger le fichier à partir du référentiel, vous devez remplacer la copie locale du document lorsque vous téléchargez le document dans le référentiel.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "Impossible de télécharger le document.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "La variable d'environnement ${0}, qui est requise pour le suivi des fichiers, n'est pas définie sur cette machine client.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Pour corriger l'erreur :<br/><br/><ul><li>Ajoutez la variable d'environnement ${0} aux variables d'environnement du système d'exploitation.</li><li>Déconnectez-vous du client Web et fermez votre navigateur Web. Puis, reconnectez-vous.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "Le document ne peut pas être téléchargé et suivi par l'applet de suivi de fichiers.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "Le répertoire ${0}, qui est requis pour le suivi des fichiers, n'est pas défini et ne peut pas être créé.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Pour résoudre ce problème, effectuez l'action appropriée :<br/><br/><ul><li>Cliquez sur Parcourir et sélectionnez un autre répertoire sur la machine client. Si vous sélectionnez cette option, le fichier ne sera pas suivi.</li><li>Contactez votre administrateur système et demandez-lui d'indiquer un répertoire différent à utiliser pour le suivi des fichiers. Par exemple, cela peut être nécessaire si le répertoire indiqué est destiné à un système d'exploitation Windows, mais que vous exécutez un système d'exploitation Mac. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Si ce bureau est accessible depuis des périphériques avec différents systèmes d'exploitation, vous pouvez réduire le risque de problèmes en exécutant l'une des actions suivantes :<br/><br/><ul><li>Utilisez des variables d'environnement pour indiquer l'emplacement de stockage sur les machines client.</li><li>Créez des bureaux différents pour les utilisateurs de chaque type d'unité. Par exemple, créez un bureau pour les utilisateurs possédant un système d'exploitation Windows et un bureau pour les utilisateurs utilisant un système d'exploitation Mac.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "Votre demande ne peut pas être traitée.",
		runtime_file_tracking_generic_error_explanation: "Une erreur s'est produite dans l'applet de suivi des fichiers.",
		runtime_file_tracking_generic_error_userResponse: "Contactez votre administrateur système pour obtenir de l'aide.",
		runtime_file_tracking_generic_error_adminResponse: "Ouvrez la console Java et tentez de soumettre à nouveau votre demande. Les détails de l'erreur s'affichent dans la console Java.<br/><br/>Vous pouvez accéder à cette console à partir du Panneau de configuration (Windows) ou des Préférences système (Macintosh) selon votre système d'exploitation.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "Votre demande ne peut pas être traitée.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Les fichiers suivants ont été ajoutés au référentiel, mais n'ont pas été supprimés du système de fichiers local : ${0}. Ce problème se produit généralement lorsque les fichiers sont ouverts ou en cours d'utilisation par une autre application. Si nécessaire, vous pouvez supprimer manuellement les fichiers.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "Impossible de télécharger le document.",
		runtime_file_tracking_ioexception_error_explanation: "Impossible de télécharger le document.",
		runtime_file_tracking_ioexception_userResponse: "Vous ne disposez peut-être pas des droits appropriés pour écrire dans le répertoire suivant : ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Vérifiez que vous disposez de droits d'écriture dans le répertoire spécifié. Si vous ne disposez pas des droits d'écriture dans le répertoire indiqué, contactez votre administrateur système.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "Votre demande ne peut pas être traitée.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Cette erreur peut se produire pour les raisons suivantes :<br/><br/><ul><li>Vous utilisez Safari sur Mac OS et Java s'exécute en mode sans échec.</li><li>Vous ne possédez pas de droits de lecture/écriture pour le répertoire spécifié dans la configuration du suivi des fichiers pour votre bureau.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Vous pouvez continuer à utiliser IBM Content Navigator sans suivi des fichiers, ou vous pouvez suivre les étapes suivantes pour résoudre le problème :<br/><br/><ol><li>Activez le mode non sécurisé de Java dans Safari.</li><li>S'il vous est demandé si vous souhaitez faire confiance au site Web IBM Content Navigator, cliquez sur <b>Faire confiance</b> pour charger la page et activez le mode non sécurité de Java dans Safari.</li></ol><br/><br/>Si Safari est configuré correctement, procédez comme suit pour résoudre le problème :<br/><br/><ol><li>Vérifiez que vous possédez des droits de lecture/écriture pour le répertoire spécifié dans la configuration du suivi des fichiers pour votre bureau.</li><li>Si vous n'avez pas de droits de lecture/écriture sur le répertoire, modifiez ces droits.</li><li>Si vous ne pouvez pas éditer vos droits sur le référentiel, votre administrateur doit modifier le répertoire configuré pour le suivi de fichier ou vous donner accès à un bureau sur lequel un répertoire de suivi de fichier différent est configuré.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "Votre demande ne peut pas être traitée.",
		runtime_file_tracking_java__notfound_error_explanation: "Cette erreur se produit généralement dans les situations suivantes :<br/><br/><ul><li>L'environnement JRE (Java Runtime Environment) n'est ni présent ni activé sur votre poste de travail.</li><li>La version JRE sur votre poste de travail n'est pas compatible avec la version d'IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Vous pouvez continuer à utiliser IBM Content Navigator sans suivi des fichiers, ou vous pouvez suivre les étapes suivantes pour résoudre le problème avec JRE :<br/><br/><ol><li>Vérifiez que JRE est installé sur votre poste de travail.</li><li>Assurez-vous que la version de JRE sur votre poste de travail est compatible avec IBM Content Navigator. Une liste des versions de JRE prises en charge figure dans le document <i>Prérequis matériels et logiciels pour IBM Content Navigator</i> sur le site de support logiciel IBM.</li><li>Vérifiez que JRE est activé sur votre poste de travail.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "Votre demande ne peut pas être traitée.",
		runtime_file_tracking_security_error_explanation: "Vous ne possédez pas de droits de lecture/écriture pour le répertoire spécifié dans la configuration du suivi des fichiers pour votre bureau.",
		runtime_file_tracking_security_error_userResponse: "Vous pouvez continuer à utiliser IBM Content Navigator sans suivi des fichiers, ou vous pouvez utiliser votre administrateur système pour effectuer les étapes suivantes :<ol><li>Vérifiez que vous possédez des droits de lecture/écriture pour le répertoire spécifié dans la configuration du suivi des fichiers pour votre bureau. </li><li>Si vous n'avez pas de droits de lecture/écriture sur le répertoire, modifiez ces droits.</li><li>Si vous ne pouvez pas éditer vos droits sur le référentiel, votre administrateur doit modifier le répertoire configuré pour le suivi de fichier ou vous donner accès à un bureau sur lequel un répertoire de suivi de fichier différent est configuré.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Les documents suivants ont été téléchargés : ${0}.",

		admin_file_tracking_inline_help: "Le suivi des fichiers rationalise le processus d'ajout et de réservation et de restitution des documents dans le référentiel. Il vous permet également de gérer la manière dont les documents sont stockés sur les machines des utilisateurs.<br/><br/>En outre, le suivi des fichiers permet d'effectuer le suivi des documents dans plusieurs composants IBM Content Navigator, tels que le client Web et IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "L'ID du menu ne peut pas commencer par \"Default\".  \"Default\" est un préfixe réservé aux ID de menu.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "L'ID peut contenir uniquement des caractères alphanumériques et est sensible à la casse.",
		admin_repository_id_hover: "L'ID du référentiel est inclus dans les URL du client Web, les favoris et les liens d'e-mail pour indiquer à quel référentiel se connecter. L'ID doit être unique, et vous ne pouvez pas modifier l'ID après avoir sauvegardé le référentiel.<br><br>L'ID peut contenir uniquement des caractères alphanumériques et est sensible à la casse.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "Le nom ne peut pas contenir les caractères suivants : * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "L'ID de bureau ne peut pas contenir d'espaces ou les caractères suivants : * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "Le nom du bureau ne peut pas contenir les caractères suivants : * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "Le nom d'affichage ne peut pas contenir les caractères suivants : * \\ / : ? \" < > |",
		admin_repository_name_hover: "Indiquez le nom de référentiel à afficher pour les utilisateurs dans le client Web.<br><br>Le nom ne peut pas contenir les caractères suivants : * \\ / : ? \" < > |",
		admin_server_od_name_hover: "Indiquez le nom d'hôte ou l'adresse IP du serveur Content Manager OnDemand auquel vous souhaitez vous connecter, par exemple : server.id.com.",
		admin_server_p8_name_hover: "Indiquez l'URL du serveur Content Engine ou Content Platform Engine. L'URL est sensible à la casse et se présente sous la forme suivante :<br><br><ul><li>Sur WebSphere Application Server, iiop://nom_hôte:numéro_port/FileNet/Engine. Sur les déploiements de base, le numéro de port par défaut est 2809.</li><li>Sur WebLogic Server, t3://nom_hôte:numéro_port/FileNet/Engine. Le numéro de port par défaut est 7001.</li></ul><br><br>Pour les configurations à haute disponibilité de Content Engine et Content Platform Engine, utilisez l'URL de transport EJB à haute disponibilité sans le préfixe cemp:. ",
		admin_server_p8_protocol_hover: "Spécifiez le protocole à utiliser pour communiquer avec Content Engine.",
		admin_server_cm_name_hover: "Indiquez le nom de catalogue local de la base de données Content Manager ou du nom de connexion du serveur de la bibliothèque. Il s'agit de la valeur indiquée pour la variable ICMSERVER.",
		admin_repository_cmis_hover: "Indiquez l'ID du référentiel auquel vous souhaitez vous connecter.  Les ID des différents référentiels de votre environnement de système d'information de gestion de la capacité sont répertoriés dans le document de service de liaison AtomPub.  <br/><br/><b>Astuce :</b>Vous pouvez également entrer un astérisque (*) pour vous connecter au premier référentiel ou à l'unique référentiel défini dans le document de service de liaison Atompub.",
		admin_url_cmis_hover: "Le format de l'adresse URL varie selon le fournisseur de services. Consultez la documentation relative à votre système d'information de gestion de la capacité (CMIS) ou contactez l'administrateur de serveur CMIS pour connaître l'adresse URL appropriée.",
		admin_repcfg_cmis_status_columns_hover: "Indiquez les états d'élément pour lesquels vous souhaitez afficher des icônes. Les icônes d'état s'affichent en regard des documents de la liste de contenu.",
		admin_port_hover: "Indiquez le numéro de port TCP/IP écouté par le serveur Content Manager OnDemand. La valeur par défaut est 1445.",
		admin_unified_searches_hover: "Indiquez si vous souhaitez que les utilisateurs puissent sauvegarder ou non des recherches croisées dans les référentiels dans ce référentiel.<br/><br/>Si vous n'activez pas cette option, les utilisateurs pourront toujours créer des recherches croisées dans les référentiels qui se lancent dans ce référentiel. Vous pouvez empêcher les utilisateurs de créer des recherches croisées dans les référentiels au niveau du bureau.<br/><br/>Si vous activez les recherches croisées dans les référentiels, IBM Content Navigator crée le modèle de données de recherche croisée dans le référentiel.<br/><br/>Pour IBM FileNet Content Manager, vous devez vous connecter au référentiel en tant qu'administrateur Content Engine avant d'activer cette option.",
		admin_unified_searches_cm_hover: "Indiquez si vous souhaitez que les utilisateurs puissent sauvegarder ou non des recherches croisées dans les référentiels dans ce référentiel.<br/><br/>Si vous n'activez pas cette option, les utilisateurs pourront toujours créer des recherches croisées dans les référentiels qui se lancent dans ce référentiel. Vous pouvez empêcher les utilisateurs de créer des recherches croisées dans les référentiels au niveau du bureau.<br/><br/>Si vous activez les recherches croisées dans les référentiels, IBM Content Navigator crée le modèle de données de recherche croisée dans le référentiel.",
		admin_max_results_hover: "Indiquez si vous souhaitez limiter le nombre de résultats renvoyés par une recherche. Si vous ne limitez pas le nombre de résultats de recherche, vous pouvez rencontrer des problèmes de performances si une recherche renvoie un grand nombre de résultats.",
		admin_timeout_hover: "Indiquez combien de temps, en secondes, une recherche peut s'exécuter sur le référentiel. Si la recherche ne se termine pas sous le délai indiqué, le client Web annule la requête. Le délai d'attente maximum recommandé est de 60 secondes.",
		admin_object_store_hover: "Indiquez le conteneur d'objets auquel vous souhaitez vous connecter sur le serveur Content Engine. Vous pouvez obtenir le nom symbolique à partir de la console d'administration Content Platform Engine.",
		admin_object_store_display_name_hover: "Le nom d'affichage du conteneur d'objets est obligatoire si vous souhaitez utiliser les flux de travail IBM FileNet P8. Vous pouvez obtenir le nom d'affichage du conteneur d'objets dans la console d'administration Content Platform Engine.",
		admin_all_searches_hover: "Indiquez s'il faut limiter le nombre de recherches affichées dans <b>Toutes les recherches</b> lorsque les utilisateurs effectuent une recherche dans le référentiel. Si vous ne limitez pas le nombre de recherchez, vous pouvez rencontrer des problèmes de performances si le référentiel comprend un grand nombre de recherches sauvegardées.",

		admin_text_desktop: "Bureau",
		admin_text_repository: "Référentiel",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Thème",
		admin_text_menu: "Menu",
		admin_text_reason_code: "Motif d'occultation",
		admin_text_redactions: "Occultations",
		admin_text_viewer_mapping: "Mappage de l'afficheur",
		admin_text_mobile_feature: "Fonction mobile",
		admin_test_interface_text: "Texte d'interface",
		admin_text_interface_text_locale: "Texte d'interface localisée",
		admin_text_icon_status: "Icône de statut",
		admin_text_icon: "Icône",
		admin_text_file_type: "Type de fichier",
		admin_text_viewer: "Afficheur",
		admin_text_desktop_access: "Accès au bureau",
		admin_text_mapped_properties_for_office: "Propriétés mappées pour Microsoft Office",
		admin_text_desktop_features: "Fonctions de bureau",
		admin_text_unknown: "Inconnu",
		admin_folder_instruction: "Spécifiez les propriétés affichées pour les documents et dossiers de la liste de contenu lors de la navigation des utilisateurs. Vous pouvez également spécifier l'ordre dans lequel les propriétés s'affichent.",
		admin_search_instruction: "Indiquez les options sélectionnées par défaut lorsque les utilisateurs créent une recherche.",
		admin_repository_office_conf_class_instruction: "Si IBM Content Navigator for Microsoft Office est installé sur les machines client de votre environnement, vous pouvez indiquer la façon dont les documents sont traités lors de leur ajout ou de leur restitution dans ce référentiel.",
		admin_repository_office_conf_instruction: "Mappez les propriétés du document Microsoft Office aux propriétés définies dans le référentiel.<br/><br/>Lorsque le mappage de propriété est activé pour un bureau auquel est associé ce référentiel, les propriétés définies sur les documents Microsoft Office sont utilisées pour renseigner les propriétés du référentiel lorsque l'utilisateur ajoute un document provenant d'IBM Content Navigator for Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Mappage de propriété",
		admin_repository_office_conf_prop_mapping_title1: "Intégration à MS Office",
		admin_office_conf_instruction: "Vous pouvez contrôler la façon dont IBM Content Navigator s'intègre aux applications Microsoft Office lorsqu'IBM Content Navigator for Microsoft Office est installé sur les machines client.<br /><br /><b>Important :</b> si vous sélectionnez <b>Mapper les propriétés Office…</b>, vous devez également configurer le mappage des propriétés de chaque référentiel associé à ce bureau. Vous pouvez configurer les mappages de propriété sous l'onglet <b>Propriétés Office</b> pour chaque référentiel de votre environnement.",
		admin_desktop_workflows_instruction: "<b>Systèmes IBM FileNet P8 uniquement :</b> Indiquez les espaces d'application qui s'affichent sur ce bureau. L'ordre des espaces d'application sélectionnés détermine l'ordre dans lequel les espaces d'application s'affichent sur le client Web.<br><br><b>Astuce :</b> Vous pouvez modifier le nom d'affichage des espaces d'application en spécifiant de nouveaux noms dans la section <b>Libellés</b> de l'outil d'administration.",
		admin_search_filtered_properties_instruction: "Spécifiez les propriétés que les utilisateurs peuvent rechercher. Vous pouvez masquer les propriétés que vous ne souhaitez pas que les utilisateurs recherchent.",
		admin_search_filtered_operators_instruction: "Spécifiez les opérateurs disponibles lorsque les utilisateurs recherchent un type de données particulier, comme une date ou un entier. Vous pouvez masquer les opérateurs que vous ne souhaitez pas que les utilisateurs sélectionnent.",
		admin_search_default_search_results_instruction: "Indiquez les propriétés des documents et des dossiers à afficher dans les résultats de recherche. Vous pouvez masquer les propriétés que vous ne souhaitez pas voir apparaître.",
		admin_search_default_search_results_p8_cmis_instruction: "Indiquez les propriétés des documents à afficher dans les résultats de recherche. Vous pouvez masquer les propriétés que vous ne souhaitez pas voir apparaître.",

		admin_datetimeOp: "Date et heure",
		admin_floatOp: "Nombre en virgule flottante",
		admin_integerOp: "Entier",
		admin_stringOp: "Chaîne",
		admin_binaryOp: "Binaire",
		admin_objectOp: "Objet",
		admin_idOp: "ID",
		admin_userOp: "Utilisateur",
		admin_booleanOp: "Booléen",

		admin_string: "Chaîne",
		admin_long: "Longue",
		admin_date: "Date",
		admin_double: "Double",
		admin_object: "Objet",
		admin_guid: "GUID",
		admin_boolean: "Booléen",

		admin_repcfg_heading: "Vous pouvez remplacer le comportement par défaut de ce référentiel en définissant les paramètres de configuration.",
		admin_repcfg_heading_od: "Vous pouvez remplacer le comportement par défaut de ce référentiel en définissant les paramètres de configuration.<br /><br /><b>Important :</b> pour utiliser le client Web avec Content Manager OnDemand, vous devez également indiquer les valeurs des paramètres figurant sous l'onglet <b>Content Manager OnDemand</b> de la section <b>Paramètres</b>, qui s'appliquent à tous les référentiels Content Manager OnDemand auxquels vous vous connectez.",
		admin_repcfg_teamspaces: "Gestion de l'espace d'équipe :",
		admin_repcfg_enable: "Activer",
		admin_repcfg_disable: "Désactiver",

		admin_repcfg_deliver_redacted_pdf_files_as: "Les fichiers PDF avec des occultations seront distribués sous forme de :",
		admin_repcfg_burn_pdf_to_pdf: "Fichiers PDF",
		admin_repcfg_burn_pdf_to_tiff: "Fichiers TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "Un fichier PDF dont le contenu est occulté avec des occultations basées sur des rôles peut être distribué au client dans un autre format de fichier. Si le format de fichier est modifié, l'extension de fichier et le type MIME le sont également.<br><br>Par exemple, si un fichier PDF est distribué sous forme de fichier TIFF, son extension devient .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Autoriser les utilisateurs à fusionner et séparer les pages qui ont des occultations basées sur les rôles",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Sélectionnez cette option pour autoriser les utilisateurs à fusionner et séparer les pages qui ont des occultations basées sur les rôles. Les utilisateurs qui ne sont pas des éditeurs d'occultation ne pourront pas éditer les occultations basées sur les rôles et n'auront pas accès aux données sensibles qui leur sont associées, même si cette option est cochée.",
		admin_repcfg_modify_teamspace_roles: "Autoriser les propriétaires à modifier les rôles des espaces d'équipe existants",
		admin_repcfg_tm_delete_teamspace: "Autoriser les propriétaires à supprimer l'espace d'équipe, y compris le contenu",
		admin_repcfg_tm_delete_teamspace_id_missing: "Vous devez spécifier le nom d'utilisateur de l'administrateur de référentiel.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Vous devez spécifier le mot de passe de l'administrateur de référentiel.",
		admin_repcfg_teamspace_display_Recent: "Afficher uniquement les espaces d'équipe récemment modifiés ",
		admin_repcfg_teamspace_display_Recent_value: "Jours depuis la dernière modification :",

		admin_repcfg_folder_selector: "Dossier principal :",
		admin_repcfg_enable_folder_selector: "Activer",
		admin_repcfg_disable_folder_selector: "Désactiver",
		admin_repcfg_SSO: "Connexion unique :",
		admin_repcfg_teamspace_template_permission_text: "Affecter des créateurs de modèle d'espace d'équipe :",
		admin_repcfg_teamspace_template_permission_hover_p8: "Indiquez les groupes ou les utilisateurs autorisés à créer des modèles d'espace de travail. Les utilisateurs et les groupes reçoivent les paramètres de sécurité appropriés sur les classes et les dossiers requis. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>En savoir plus</a><br/><br/><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion de l'espace d'équipe.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Indiquez les groupes ou les utilisateurs autorisés à créer des modèles d'espace de travail. Les utilisateurs sont ajoutés aux listes de contrôle d'accès (ACL) appropriées et reçoivent les privilèges correspondants. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>En savoir plus</a><br/><br/><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion de l'espace d'équipe.",
		admin_repcfg_teamspace_permission_text: "Affecter des rôles d'espace d'équipe :",
		admin_repcfg_teamspace_permission_hover_p8: "Indiquez les groupes ou les utilisateurs autorisés à créer et utiliser des espaces d'équipe. Les utilisateurs reçoivent les paramètres de sécurité appropriés aux classes et dossiers requis. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>En savoir plus</a><br/><br/><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion de l'espace d'équipe.",
		admin_repcfg_teamspace_permission_hover_cm: "Indiquez les groupes ou les utilisateurs autorisés à créer et utiliser des espaces d'équipe. Les utilisateurs sont ajoutés aux listes de contrôle d'accès (ACL) appropriées et reçoivent les privilèges correspondants. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>En savoir plus</a><br/><br/><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion de l'espace d'équipe.",
		admin_repcfg_entry_template_permission_text: "Affecter des rôles de modèle d'entrée :",
		admin_repcfg_entry_template_permission_hover_p8: "Indiquez les groupes ou les utilisateurs autorisés à créer et utiliser des modèles d'entrée. Les utilisateurs reçoivent les paramètres de sécurité appropriés à la classe de document Modèle d'entrée. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>En savoir plus</a><br/><br/><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion des modèles d'entrée.",
		admin_repcfg_entry_template_permission_hover_cm: "Indiquez les groupes ou les utilisateurs autorisés à créer et utiliser des modèles d'entrée. Les utilisateurs sont ajoutés aux listes de contrôle d'accès (ACL) appropriées et reçoivent les privilèges correspondants. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>En savoir plus</a><br /><br /><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion des modèles d'entrée.",
		admin_repcfg_office_template_permission_text: "Affecter des rôles de modèle :",
		admin_repcfg_office_template_permission_hover_cm: "Indiquez les groupes ou les utilisateurs autorisés à créer, éditer et utiliser des modèles de service d'édition ou Microsoft Office Online. Les utilisateurs sont ajoutés aux listes de contrôle d'accès (ACL) appropriées et reçoivent les privilèges correspondants.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a><br /><br /><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion des modèles de service d'édition ou Microsoft Office Online.",
		admin_repcfg_draft_permission_text: "Affecter des rôles de gestion des brouillons :",
		admin_repcfg_draft_permission_hover_cm: "Indiquez les groupes ou les utilisateurs autorisés à créer des brouillons de documents de service d'édition ou Microsoft Office Online pendant l'édition collaborative. Tout utilisateur ayant besoin d'éditer collaborativement des documents dans Microsoft Office Online ou le service d'édition doit avoir les privilèges nécessaires pour créer des brouillons. Les utilisateurs sont ajoutés aux listes de contrôle d'accès (ACL) appropriées et reçoivent les privilèges correspondants. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a><br /><br /><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion des brouillons.",
		admin_repcfg_search_permission_text: "Affecter des rôles de recherche :",
		admin_repcfg_search_permission_hover_p8: "Indiquez les groupes ou les utilisateurs autorisés à créer ou utiliser des recherches sauvegardées et des recherches inter-répertoires. Les utilisateurs reçoivent les paramètres de sécurité appropriés aux classes requises. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>En savoir plus</a><br /><br /><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion des recherches.",
		admin_repcfg_search_permission_hover_cm: "Indiquez les groupes ou les utilisateurs autorisés à créer, éditer ou utiliser des recherches sauvegardées ou des recherches inter-répertoires. Les utilisateurs sont ajoutés aux listes de contrôle d'accès (ACL) appropriées et reçoivent les privilèges correspondants. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>En savoir plus</a><br /><br /><b>Recommandation :</b> Utilisez des groupes pour simplifier la gestion des recherches.",
		admin_repcfg_search_permission_title: "Rôles de recherche",
		admin_repcfg_search_permission_intro_text: "Assurez-vous que les utilisateurs ont accès à un bureau compatible avec leur rôle. Par exemple, veillez à ce que le créateur d'une recherche puisse accéder à un bureau lui permettant de créer des recherches et des recherches inter-répertoires.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Les administrateurs de modèles d'espace d'équipe sont des utilisateurs qui disposent d'un <b>contrôle total</b> sur le référentiel (conteneur d'objets). Vous ne pouvez pas modifier la liste des administrateurs de modèles d'espace d'équipe à partir de l'outil d'administration. <p>Les administrateurs de modèles d'espace d'équipe peuvent supprimer ou modifier tous les modèles d'espace d'équipe. L'auteur d'un modèle d'espace d'équipe n'a pas besoin de partager le modèle avec les administrateurs de modèles d'espace d'équipe.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme créateur d'un modèle d'espace d'équipe, il reçoit les paramètres de sécurité appropriés au référentiel pour créer les modèles d'espace d'équipe. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>En savoir plus</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Utilisateurs et groupes disposant de privilèges autres que les privilèges qui sont associés aux administrateurs et aux créateurs.<p>Vous pouvez déplacer ces utilisateurs et ces groupes dans le rôle de créateurs de modèle d'espace d'équipe en les retirant du rôle Autres, puis en les affectant en tant que créateurs de modèle d'espace d'équipe.<p>Vous pouvez prendre connaissance des privilèges accordés à ces utilisateurs et à ces groupes dans IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Les administrateurs d'espace d'équipe sont des utilisateurs qui disposent d'un <b>contrôle total</b> sur le référentiel (conteneur d'objets). Vous ne pouvez pas modifier la liste des administrateurs d'espace d'équipe à partir de l'outil d'administration.<p>Les administrateurs d'espace d'équipe peuvent supprimer ou modifier tous les espaces d'équipe. L'auteur d'un espace d'équipe n'a pas besoin de partager l'espace d'équipe avec les administrateurs d'espace d'équipe.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme créateur d'espace d'équipe, il reçoit les paramètres de sécurité appropriés au référentiel pour créer des espaces d'équipe. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>En savoir plus</a>",
		admin_repcfg_teamspace_user_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur d'espace d'équipe, il reçoit les paramètres de sécurité appropriés au référentiel pour utiliser des espaces d'équipe. Toutefois, un utilisateur doit être membre d'un espace d'équipe pour pouvoir y accéder. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>En savoir plus</a><p><b>Astuce :</b> Si vous voulez que tous les utilisateurs de votre environnement puissent voir les espaces d'équipe, vous pouvez ajouter le pseudo-compte #AUTHENTICATED-USERS au rôle utilisateur de l'espace d'équipe.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Utilisateurs et groupes disposant de privilèges autres que les privilèges qui sont associés aux administrateurs, aux créateurs et aux utilisateurs.<p>Vous pouvez déplacer ces utilisateurs et ces groupes dans des rôles prédéfinis en les retirant du rôle Autres, puis en leur affectant des rôles d'espace d'équipe.<p>Vous pouvez prendre connaissance des privilèges accordés à ces utilisateurs et à ces groupes dans IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Les administrateurs de modèles d'entrée sont des utilisateurs qui disposent d'un <b>contrôle total</b> sur le référentiel (conteneur d'objets). Vous ne pouvez pas modifier la liste des administrateurs de modèles d'entrée à partir de l'outil d'administration. <p>Les administrateurs de modèles d'entrée peuvent supprimer ou modifier tous les modèles d'entrée. L'auteur d'un modèle d'entrée n'a pas besoin de partager le modèle d'entrée avec les administrateurs de modèles d'entrée.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme créateur de modèle d'entrée, il reçoit les paramètres de sécurité appropriés sur le référentiel pour créer les modèles d'entrée. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>En savoir plus</a>",
		admin_repcfg_entry_template_user_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur de modèle d'entrée, il reçoit les paramètres de sécurité appropriés sur le référentiel pour utiliser les modèles d'entrée. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>En savoir plus</a><p><b>Astuce :</b> Si vous voulez que tous les utilisateurs de votre environnement puissent utiliser les modèles d'entrée, vous pouvez ajouter le pseudo-compte #AUTHENTICATED-USERS au rôle utilisateur du modèle d'entrée.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Utilisateurs et groupes disposant de privilèges autres que les privilèges qui sont associés aux administrateurs, aux créateurs et aux utilisateurs.<p>Vous pouvez déplacer ces utilisateurs et ces groupes dans des rôles prédéfinis en les retirant du rôle Autres, puis en leur affectant des rôles de modèle d'entrée.<p>Vous pouvez prendre connaissance des privilèges accordés à ces utilisateurs et à ces groupes dans IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme créateur de modèle d'espace d'équipe, il reçoit les droits appropriés pour créer des modèles d'espace d'équipe sur le référentiel. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>En savoir plus</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme créateur d'espace d'équipe, il reçoit les droits appropriés pour créer les espaces d'équipe sur le référentiel. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>En savoir plus</a>",
		admin_repcfg_teamspace_user_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur d'espace d'équipe, il reçoit les droits appropriés pour utiliser les espaces d'équipe sur le référentiel. Toutefois, un utilisateur doit être membre d'un espace d'équipe pour pouvoir y accéder. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>En savoir plus</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme créateur de modèle d'entrée, il reçoit les droits appropriés pour créer des modèles d'entrée sur le référentiel. <br/><br/>Toutefois, les paramètres de sécurité associés à un modèle d'entrée spécifique déterminent les droits dont dispose l'utilisateur ou le groupe sur le modèle d'entrée. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>En savoir plus</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme éditeur de modèle d'entrée, il reçoit les droits appropriés pour modifier les modèles d'entrée sur le référentiel. <br/><br/>Toutefois, les paramètres de sécurité associés à un modèle d'entrée spécifique déterminent les droits dont dispose l'utilisateur ou le groupe sur le modèle d'entrée. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>En savoir plus</a>",
		admin_repcfg_entry_user_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur du modèle d'entrée, il reçoit les droits appropriés pour utiliser les modèles d'entrée sur le référentiel. <br/><br/>Toutefois, les paramètres de sécurité associés à un modèle d'entrée spécifique déterminent les droits dont dispose l'utilisateur ou le groupe sur le modèle d'entrée. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>En savoir plus</a>",
		admin_repcfg_office_template_creators_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme créateur de modèles de service d'édition ou Microsoft Office Online, il reçoit les droits appropriés pour créer des fichiers de modèle sur le référentiel. <br/><br/>Toutefois, les paramètres de sécurité associés à un fichier de modèle spécifique déterminent les droits dont dispose l'utilisateur ou le groupe sur ce modèle. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a>",
		admin_repcfg_office_template_editors_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme éditeur de modèles de service d'édition ou Microsoft Office Online, il reçoit les droits appropriés pour modifier des fichiers de modèle sur le référentiel.  <br/><br/>Toutefois, les paramètres de sécurité associés à un fichier de modèle spécifique déterminent les droits dont dispose l'utilisateur ou le groupe sur ce modèle. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a>",
		admin_repcfg_office_template_user_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur de modèles de service d'édition ou Microsoft Office Online, il reçoit les privilèges appropriés pour appliquer un modèle lorsqu'il crée un nouveau document de service d'édition ou Office Online à partir du client Web.  <br/><br/>Toutefois, les paramètres de sécurité associés à un fichier de modèle spécifique déterminent les droits dont dispose l'utilisateur ou le groupe sur ce modèle.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a>",
		admin_repcfg_draft_creators_hover_cm: "Tout utilisateur ayant besoin d'éditer collaborativement des documents dans Microsoft Office Online ou le service d'édition doit recevoir ce rôle. N'affectez pas les utilisateurs aux rôles Editeur ou Utilisateur. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a>",
		admin_repcfg_draft_editors_hover_cm: "Tout utilisateur ayant besoin d'éditer collaborativement des documents dans le service d'édition ou Microsoft Office Online doit recevoir le rôle <b>Créateur</b>. Si un utilisateur reçoit le rôle Editeur, il ne peut pas créer de brouillons, lesquels sont nécessaires à l'édition collaborative.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a>",
		admin_repcfg_draft_user_hover_cm: "Tout utilisateur ayant besoin d'éditer collaborativement des documents dans le service d'édition ou Microsoft Office Online doit recevoir le rôle <b>Créateur</b>. Si un utilisateur reçoit le rôle Utilisateur, il ne peut pas créer de brouillons, lesquels sont nécessaires à l'édition collaborative.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>En savoir plus</a>",		
		admin_repcfg_search_others_hover_p8: "Utilisateurs et groupes disposant de privilèges autres que les privilèges qui sont associés aux administrateurs, aux créateurs et aux utilisateurs.<p>Vous pouvez déplacer ces utilisateurs et ces groupes dans des rôles prédéfinis en les retirant du rôle Autres, puis en leur affectant des rôles de recherche.<p>Vous pouvez prendre connaissance des privilèges accordés à ces utilisateurs et à ces groupes dans IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Les administrateurs de recherche sont des utilisateurs qui disposent d'un <b>contrôle total</b> sur le référentiel (conteneur d'objets). Vous ne pouvez pas modifier la liste des administrateurs de recherche à partir de l'outil d'administration. <br /><br />Les administrateurs de recherche peuvent supprimer ou modifier toutes les recherches. L'auteur d'une recherche n'a pas besoin de partager la recherche avec les administrateurs de recherche.",
		admin_repcfg_search_creators_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme créateur de recherche, il reçoit les paramètres de sécurité appropriés pour créer des recherches sur le référentiel. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>En savoir plus</a>",
		admin_repcfg_search_user_hover_p8: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur de recherche, il reçoit les paramètres de sécurité appropriés pour utiliser les recherches sur le référentiel.<a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>En savoir plus</a><br /><br /><b>Astuce :</b> Si vous voulez que tous les utilisateurs de votre environnement puissent utiliser les recherches, vous pouvez ajouter le pseudo-compte #AUTHENTICATED-USERS au rôle d'utilisateur de recherche.<br/><br />Par défaut, un utilisateur de recherche peut créer des recherches et des recherches inter-répertoires, mais il ne peut pas les sauvegarder. Vous pouvez empêcher les utilisateurs de créer des recherches en les obligeant à utiliser un bureau sur lequel les options suivantes sont sélectionnées :<ul><li><b>Empêcher les utilisateurs de créer des recherches</b></li><li><b>Empêcher les utilisateurs de créer des recherches croisées dans les référentiels</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme créateur de recherche, il reçoit les droits appropriés pour créer et sauvegarder des recherches et des recherches inter-répertoires sur le référentiel. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>En savoir plus</a><br /><br /><b>Important :</b> Assurez-vous que les créateurs de recherche utilisent un bureau sur lequel les options suivantes ne sont pas sélectionnées :<ul><li><b>Empêcher les utilisateurs de créer des recherches</b></li><li><b>Empêcher les utilisateurs de créer des recherches croisées dans les référentiels</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme éditeur de recherche, il reçoit les droits appropriés pour modifier les recherches existantes et les recherches inter-répertoires. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>En savoir plus</a><br /><br /><b>Astuce :</b> Par défaut, un éditeur de recherche peut créer des recherches et des recherches inter-répertoires, mais il ne peut pas les sauvegarder. Vous pouvez empêcher les éditeurs de recherche de créer des recherches en les obligeant à utiliser un bureau sur lequel les options suivantes sont sélectionnées :<ul><li><b>Empêcher les utilisateurs de créer des recherches</b></li><li><b>Empêcher les utilisateurs de créer des recherches croisées dans les référentiels</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Lorsque vous désignez un utilisateur ou un groupe comme utilisateur de recherche, il reçoit les droits appropriés pour ouvrir et exécuter les recherches sauvegardées et les recherches inter-répertoires. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>En savoir plus</a><br /><br /><b>Astuce :</b> Par défaut, un utilisateur de recherche peut créer des recherches et des recherches inter-répertoires, mais il ne peut pas les sauvegarder. Vous pouvez empêcher les utilisateurs de créer des recherches en les obligeant à utiliser un bureau sur lequel les options suivantes sont sélectionnées :<ul><li><b>Empêcher les utilisateurs de créer des recherches</b></li><li><b>Empêcher les utilisateurs de créer des recherches croisées dans les référentiels</b></li></ul>",
		admin_repcfg_db_encoding: "Codage de caractères de la base de données du serveur :",
		admin_repcfg_db_encoding_hover: "Le codage de caractères par défaut pour une base de données IBM Content Manager est UTF-8.",
		admin_repcfg_db_encoding_specify: "Indiquez le codage de caractères de la base de données",
		admin_repcfg_db_encoding_utf8: "Codage UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Indiquez cette option si vous utilisez une base de données codée UTF-8. IBM Content Navigator va utiliser le codage UTF-8 afin de vérifier la longueur des chaînes de valeur de la propriété d'élément.",
		admin_repcfg_db_encoding_other: "Autre codage",
		admin_repcfg_db_encoding_other_hover: "Indiquez cette option si vous utilisez une base de données avec un codage qui n'est pas UTF-8. IBM Content Navigator utilisera le nombre de caractères pour vérifier la longueur des chaînes de valeur de la propriété d'élément.",
		admin_repcfg_language_codes: "Codes de langue de serveur :",
		admin_repcfg_language_codes_avail: "Disponible",
		admin_repcfg_language_codes_sel: "Sélectionné",
		admin_repcfg_pdf_conversion: "Types MIME à convertir en documents PDF en pièces jointes :",
		admin_repcfg_pdf_conversion_avail: "Disponible",
		admin_repcfg_pdf_conversion_sel: "Sélectionné",

		admin_repcfg_box_share_enable_classes_label: "Classes à modifier pour la prise en charge du partage dans Box :",
		admin_repcfg_box_share_enable_classes_hover: "Vous pouvez modifier cette classe pour stocker l'ID du fichier dans Box lorsque l'élément est partagé.",
		admin_repcfg_box_share_enable_classes_warning: "Important : toutes les classes que vous indiquez seront modifiées pour prendre en charge le partage dans Box. Une fois vos modifications enregistrées, celles-ci ne peuvent pas être supprimées des classes.<br><br>Vous devez être connecté au référentiel en tant qu'administrateur de serveur de bibliothèque pour pouvoir modifier les classes.",
		admin_repcfg_box_share_enable_classes_available: "Classes disponibles",
		admin_repcfg_box_share_enable_classes_selected: "Classes sélectionnées",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Stocker l'ID de partage dans Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Cette classe a déjà été modifiée pour stocker l'ID de partage dans Box. Vous ne pouvez pas supprimer cette option.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modifiez cette classe afin qu'elle stocke l'ID du fichier dans Box lorsque l'élément est partagé.",

		admin_repcfg_redaction: "Occultations basées sur les rôles :",
		admin_repcfg_enable_redaction_hover: "Indiquez si vous souhaitez procéder à des occultations basées sur les rôles dans les documents de ce référentiel.<br/><br/>Les occultations basées sur les rôles sont appliquées lorsqu'un document est téléchargé, imprimé, rendu par un afficheur ou affiché sous forme de miniature. Le contenu que voient les utilisateurs lorsqu'ils affichent le document dépend de leur rôle et des règles d'occultation applicables.",

		admin_repcfg_redaction_policy_permission_text: "Affecter des éditeurs de règles :",
		admin_repcfg_redaction_policy_editors_hover: "Sélectionner les utilisateurs et les groupes qui pourront créer, modifier et supprimer des règles et rôles d'occultation.",
		admin_repcfg_redaction_policy_editors_select_hover: "Les éditeurs de règles d'occultation peuvent créer, modifier et supprimer des règles et rôles d'occultation.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Les administrateurs de règles d'occultation peuvent affecter des éditeurs de règles d'occultation.<br/><br/>Vous pouvez modifier la liste des administrateurs de règles d'occultation à l'aide d'IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Les administrateurs de règles d'occultation peuvent affecter des éditeurs de règles d'occultation.<br/><br/>Vous pouvez modifier la liste des administrateurs de règles d'occultation à l'aide du client d'administration système IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Affecter des éditeurs d'occultation :",
		admin_repcfg_redaction_editors_hover: "Sélectionnez les utilisateurs et les groupes qui pourront créer, modifier et supprimer des occultations basées sur les rôles. Après avoir sélectionné des utilisateurs et des groupes en tant qu'éditeurs, vous devez les définir en tant que tels dans les règles d'occultation pour qu'ils puissent éditer des occultations basées sur les rôles.",
   		admin_repcfg_redaction_editors_select_hover: "Les éditeurs d'occultation peuvent créer, modifier et supprimer des occultations basées sur les rôles lorsqu'ils sont également définis en tant qu'éditeurs dans les règles d'occultation.",
   		admin_repcfg_redaction_administrators_hover_p8: "Les administrateurs d'occultation peuvent affecter des éditeurs d'occultation.<br/><br/>Vous pouvez modifier la liste des administrateurs d'occultation à l'aide d'IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Les administrateurs d'occultation peuvent affecter des éditeurs d'occultation.<br/><br/>Vous pouvez modifier la liste des administrateurs d'occultation à l'aide du client d'administration système IBM Content Manager.",
		admin_repcfg_entry_template: "Gestion du modèle d'entrée :",
		admin_repcfg_entry_template_enable_classes_label: "Classes à modifier pour la prise en charge des modèles d'entrée :",
		admin_repcfg_oos_reference_attribute_label: "Attributs de référence pour Office Online :",
		admin_repcfg_entry_template_enable_classes_hover: "Important : toutes les classes que vous indiquez seront modifiées pour prendre en charge les modèles d'entrée. Une fois vos modifications enregistrées, celles-ci ne peuvent pas être supprimées des classes.<br><br>Vous pouvez modifier la classe pour l'un des objectifs suivants ou les deux :<br><ul><li>Pour stocker l'ID du modèle d'entrée qui a été utilisé pour ajouter un élément afin que les paramètres du modèle d'entrée soient appliqués lorsque l'élément est modifié</li><li>Classes de dossier hiérarchique uniquement : pour prendre en charge les associations de dossier de modèle d'entrée</li></ul>Vous devez être connecté au référentiel en tant qu'administrateur de serveur de bibliothèque pour pouvoir modifier les classes.",
		admin_repcfg_entry_template_enable_classes_warning: "Important : toutes les classes que vous indiquez seront modifiées pour prendre en charge les modèles d'entrée. Une fois vos modifications enregistrées, celles-ci ne peuvent pas être supprimées des classes.<br><br>Vous devez être connecté au référentiel en tant qu'administrateur de serveur de bibliothèque pour pouvoir modifier les classes.",
		admin_repcfg_entry_template_enable_classes_available: "Classes disponibles",
		admin_repcfg_entry_template_enable_classes_selected: "Classes sélectionnées",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "ID de modèle d'entrée de stockage",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modifiez cette classe afin qu'elle stocke l'ID du modèle d'entrée qui a été utilisé pour ajouter un élément afin que les paramètres du modèle d'entrée soient appliqués lorsque l'élément est modifié.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Association de dossier de stockage",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modifiez cette classe afin qu'elle puisse prendre en charge les associations de dossier de modèle d'entrée. Cette option n'est disponible que pour les classes de dossier hiérarchiques.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Cette classe a déjà été modifiée pour stocker l'ID de modèle d'entrée. Vous ne pouvez pas supprimer cette option.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Cette classe a déjà été modifiée afin de stocker des associations de dossier. Vous ne pouvez pas supprimer cette option.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Seules les classes de dossier hiérarchique et les classes non hiérarchiques peuvent être utilisées pour stocker des associations de dossier.",
		admin_repcfg_entry_template_root_folder_association_title: "Modèles d'entrée associés au dossier racine :",
		admin_repcfg_entry_template_root_folder_association_hover: "Indiquez les modèles d'entrée à associer au dossier racine sur votre référentiel IBM Content Manager.<br /><br />Si vous associez des modèles d'entrée au dossier racine et que des utilisateurs ajoutent des éléments à un dossier hiérarchique, un modèle d'entrée sera toujours utilisé pour ajouter des éléments.",
		admin_repcfg_entry_template_root_folder_association_button: "Définir les associations",
		admin_repcfg_oos_enable_classes_label: "Classes à modifier pour le support d'Office Online ou de service d'édition :",
		admin_repcfg_oos_enable_classes_warning: "Important : toutes les classes que vous indiquez seront modifiées pour fonctionner avec Microsoft Office Online ou le service d'édition. Une fois vos changements sauvegardés, l'attribut de référence ajouté automatiquement à chaque classe ne pourra plus être retiré.<br><br>Vous devez être connecté au référentiel en tant qu'administrateur de serveur de bibliothèque pour pouvoir modifier les classes.",
		admin_repcfg_oos_enable_classes_available: "Classes disponibles",
		admin_repcfg_oos_enable_classes_selected: "Classes sélectionnées",
		admin_repcfg_oos_enable_classes_note: "Important :",
		admin_repcfg_oos_enable_classes_selected_not_support: "Cette classe n'est pas utilisable avec Microsoft Office Online ou le service d'édition.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "La politique de gestion des versions de la classe est Toujours versionner, ce que Microsoft Office Online ou le service d'édition n'accepte pas. Sélectionnez une autre classe.",
		admin_repcfg_download_recording: "Suivi des téléchargements :",
		admin_repcfg_download_recording_hover: "Les téléchargements sont suivis par défaut lorsque le module complémentaire Extensions de base pour la collaboration sociale est installé sur le référentiel. Cependant, la désactivation de cette option peut améliorer les performances du référentiel.<br><br>Si vous désactivez cette option, les utilisateurs verront le nombre de téléchargements qui se sont produits avant que l'option ne soit désactivée.",
		admin_repcfg_sync_service: "Services de synchronisation :",
		admin_repcfg_download_ignored: "Ignorer les téléchargements pour des utilisateurs spécifiques :",
		admin_repcfg_download_ignored_hover: "Vous pouvez ignorer les téléchargements demandés par des utilisateurs spécifiques, tels que les administrateurs ou les comptes système, afin de refléter plus précisément le nombre d'utilisateurs qui ont téléchargé un document. Par exemple, si vous avez un compte spécifique qui est utilisé pour télécharger du contenu pour générer un rapport mensuel, vous pouvez ignorer les téléchargements qui sont demandés par ce compte.<br><br><b>Restriction :</b> vous ne pouvez pas spécifier de groupes.",

		admin_repcfg_add_as_major_version: "Ajouter en tant que version principale :",
		admin_repcfg_enable_add_as_major_version: "Oui",
		admin_repcfg_disable_add_as_major_version: "Non",
		admin_repcfg_checkin_as_major_version: "Restituer en tant que version principale :",
		admin_repcfg_enable_checkin_as_major_version: "Oui",
		admin_repcfg_disable_checkin_as_major_version: "Non",
		admin_repcfg_annotation_security: "Sécurité des annotations :",
		admin_repcfg_inherit_annotation_security: "Dupliquer la sécurité du document",
		admin_repcfg_default_annotation_security: "Utiliser la sécurité des annotations par défaut",
		admin_repcfg_connection_point: "Point de connexion des flux de travaux :",
		admin_repcfg_include_workflow_definition: "Afficher la classe de définition des flux de travaux :",
		admin_repcfg_include_form_template: "Afficher la classe de modèle de formulaire :",
		admin_repcfg_enable_include_workflow_definition: "Oui",
		admin_repcfg_disable_include_workflow_definition: "Non",

		admin_repcfg_status_columns: "Icônes d'état :",
		admin_repcfg_status_columns_hover: "Indiquez les états pour lesquels vous souhaitez afficher des icônes. Les icônes d'état s'affichent en regard des documents, des dossiers et des éléments de travail de la liste de contenu.",
		admin_repcfg_status_columns_documents_or_folders: "Afficher une icône lorsque les documents ou dossiers :",
		admin_repcfg_status_columns_documents: "Afficher une icône lorsque les documents :",
		admin_repcfg_status_columns_documents_checked_out: "sont réservés",
		admin_repcfg_status_columns_documents_declared_records: "sont déclarés en tant qu'enregistrements",
		admin_repcfg_status_columns_documents_minor_versions: "ont des versions secondaires",
		admin_repcfg_status_columns_documents_compound_document: "Sont des documents composés",
		admin_repcfg_status_columns_documents_bookmarks: "ont des signets",
		admin_repcfg_status_columns_documents_hold: "sont en attente",
		admin_repcfg_status_columns_documents_notes: "ont des notes",
		admin_repcfg_status_columns_work_items: "Afficher une icône lorsque des éléments de travail :",
		admin_repcfg_status_columns_work_items_locked: "sont verrouillés",
		admin_repcfg_status_columns_work_items_checked_out: "sont réservés",
		admin_repcfg_status_columns_work_items_deadline: "ont une échéance",
		admin_repcfg_status_columns_work_items_suspended: "ont un traitement suspendu",

		admin_repcfg_afp2pdf_config_file: "Fichier de configuration AFP2PDF :",
		admin_repcfg_transform_xml_file: "Fichier de transformation personnalisée :",
		admin_repcfg_ssl: "SSL :",
		admin_repcfg_enable_ssl: "Activer",
		admin_repcfg_disable_ssl: "Désactiver",
		admin_repcfg_keyringdb_file: "Fichier de base de données de jeux de clés :",
		admin_repcfg_keyringstash_file: "Fichier de dissimulation de jeux de clés :",
		admin_repcfg_od_sso: "Connexion unique",
		admin_repcfg_od_enable_sso: "Activer",
		admin_repcfg_od_disable_sso: "Désactiver",
		admin_repcfg_od_sso_password: "Mot de passe",
		admin_repcfg_advanced_label: "Avancé",
		admin_repcfg_custom_properties_label: "Propriétés personnalisées :",
		admin_repcfg_new_button_label: "Nouveau",
		admin_repcfg_edit_button_label: "Editer",
		admin_repcfg_delete_button_label: "Supprimer",
		admin_repcfg_custom_head1: "Nom",
		admin_repcfg_custom_head2: "Valeur",
		admin_repcfg_ecpdialog_title_new: "Nouvelle propriété personnalisée",
		admin_repcfg_ecpdialog_title_edit: "Editer la propriété personnalisée",
		admin_repcfg_ecpdialog_name: "Nom :",
		admin_repcfg_ecpdialog_value: "Valeur :",
		admin_repcfg_ecpdialog_save: "Sauvegarder",
		admin_repcfg_ecpdialog_create: "Créer",
		admin_repcfg_ecpdialog_cancel: "Annuler",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Cette valeur est requise. La valeur ne peut pas contenir d'espaces et ne peut pas être un doublon.",

		admin_repcfg_cmis_use_gzip_encoding: "Utiliser le codage GZIP :",

		admin_repcfg_task_mgr_proxy: "ID de connexion du gestionnaire de tâches :",
		admin_repcfg_task_mgr_proxy_hover: "Pour le partage dans Box ou la suppression de l'espace d'équipe, le gestionnaire de tâches utilise un ID administrateur et un mot de passe afin d'exécuter des tâches en arrière-plan qui modifient le référentiel.<br><br>Cliquez sur Définir et connectez-vous au référentiel à l'aide d'un ID administrateur et d'un mot de passe de référentiel valides.",
		admin_task_manager_not_enabled_warning: "Le service du gestionnaire de tâches est requis pour cette option, mais il n'est pas activé.  Vous pouvez l'activer pour tous les bureaux sur la page Général dans Paramètres.",
		admin_task_manager_not_enabled_and_user_warning: "Le service du gestionnaire de tâches est requis pour cette option, mais il n'est pas activé. Sur cette page, définissez l'ID de connexion du gestionnaire de tâches, puis, sur la page Général dans Paramètres, activez le service de gestionnaire de tâches pour tous les bureaux.",
		admin_task_manager_user_id_pw_not_set_warning: "Le service du gestionnaire de tâches, ainsi qu'un ID administrateur et un mot de passe sont requis pour cette option. Sur cette page, définissez l'ID de connexion du gestionnaire de tâches.",
		admin_repcfg_teamspaces_delete_task_id: "Administrateur du référentiel :",
		admin_repcfg_teamspaces_delete_task_password: "Mot de passe :",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Vous devez indiquer un administrateur de serveur de bibliothèque pour permettre au service de gestionnaire de tâches de supprimer un espace d'équipe dans le référentiel.",
		admin_repcfg_teamspaces_delete_task_hover: "Par défaut, lorsqu'un utilisateur supprime un espace d'équipe, ce dernier est masqué. Tous les dossiers et les documents de l'espace d'équipe sont conservés sur le référentiel. <br /> <br />Lorsque vous activez cette option, seuls les documents figurant dans d'autres dossiers du référentiel sont conservés dans le référentiel.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Si vous disposez d'un grand nombre d'espaces d'équipe dans votre environnement, l'affichage de tous les espaces d'équipe dans l'onglet <b>Espaces d'équipe</b> peut prendre du temps. Vous pouvez sélectionner cette option pour réduire la quantité de temps nécessaire pour remplir la liste.<br /><br />Si un utilisateur doit travailler avec un espace d'équipe en dehors de la plage spécifiée, l'utilisateur peut utiliser la zone <b>Filtrer</b> pour trouver l'espace d'équipe.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Si vous sélectionnez cette option, les utilisateurs disposant du rôle de propriétaire sur un espace d'équipe peuvent modifier les rôles associés aux espaces d'équipe antérieurs à IBM Content Navigator, Version 2.0.2.<br /><br />Cette option ne concerne pas les espaces d'équipe créés avec IBM Content Navigator, Version 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Indiquez si vous souhaitez que les utilisateurs puissent créer des espaces d'équipe et des modèles d'espace d'équipe sur ce référentiel.<br /><br /><b>Important :</b> Le référentiel doit prendre en charge les dossiers hiérarchiques.<br /><br />Si vous activez les espaces d'équipe, IBM Content Navigator crée le modèle de données d'espace d'équipe sur le référentiel. Le modèle de données inclut des objets ACL, des privilèges, des ensembles de privilèges, et deux nouveaux types d'élément.",
		admin_repcfg_folder_selector_hover: "Sélectionnez le dossier que vous souhaitez utiliser comme dossier principal lorsque des utilisateurs recherchent des documents. Si votre référentiel ne comporte pas de dossiers hiérarchisés, ce paramètre vous permet de prendre en charge la recherche en définissant un dossier principal. Si des dossiers hiérarchisés sont configurés dans votre référentiel, ce paramètre redéfinit le dossier principal configuré dans votre référentiel.",
		admin_repcfg_cm_use_sso_hover: "Indiquez si vous souhaitez autoriser la connexion unique pour les utilisateurs dont le droit Trusted Logon (Connexion sécurisée) est défini. <br /><br /><b>Important :</b> la connexion unique doit être activée sur le serveur Content Manager et WebSphere Application Server doit être configuré pour LTPA pour que ce paramètre de configuration fonctionne.",
		admin_repcfg_cm_direct_retrieve_hover: "La récupération directe est activée par défaut car elle permet au client Web de récupérer rapidement le contenu à partir du gestionnaire de ressources. <br /><br />Vous pouvez désactiver cette option si vous ne voulez pas que l'application client accède directement au gestionnaire de ressources ou si vous possédez un pare-feu ou serveur proxy qui empêche le client Web d'accéder au gestionnaire de ressources via les URL. Par exemple, un pare-feu peut empêcher les utilisateurs d'afficher les documents dans l'afficheur d'applet lorsque la récupération directe est activée.",
		admin_repcfg_cmItemTypesToDisplay: "Si vous ne souhaitez pas que les utilisateurs voient les types d'élément Ressource et les types d'élément Elément sur votre serveur IBM Content Manager, vous pouvez afficher uniquement les types d'élément de modèle de document. Les types d'élément sont affichés lorsque les utilisateurs créent des recherches, ajoutent des documents et créent des dossiers.",
		admin_repcfg_cm_language_codes_hover: "Indiquez les langues dans lesquelles vous souhaitez que les données renvoyées à partir du serveur Content Manager. La liste des langues disponibles est contrôlée par la liste des définitions de langue sur le serveur.<br /><br /><b>Rappel :</b> les données dans le client Web s'affichent dans la langue définie dans le navigateur Web de l'utilisateur.",
		admin_repcfg_cm_pdf_conversion_hover: "Indiquez les types de documents à convertir en PDF lorsqu'un utilisateur envoie un document avec plusieurs parties en tant que pièce jointe d'e-mail. Toutes les parties sont réunies dans un seul document PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Indiquez si vous souhaitez que les utilisateurs puissent créer des espaces d'équipe et des modèles d'espace d'équipe sur ce référentiel.<br /><br />Si vous activez les espaces d'équipe, IBM Content Navigator crée le modèle de données d'espace d'équipe sur le référentiel. Le modèle de données comprend les modèles de propriété, les objets personnalisés, un objet de dossier et plusieurs dossiers.",
		admin_repcfg_use_entry_template_p8_hover: "Indiquez si vous souhaitez que les utilisateurs soient en mesure de créer et gérer des modèles d'entrée sur ce référentiel à partir d'IBM Content Navigator. Si vous n'activez pas cette fonction, les utilisateurs peuvent rechercher et utiliser des modèles d'entrée qui sont déjà sur le référentiel.<br /><br />Si vous activez la gestion de modèle d'entrée, IBM Content Navigator met à jour le modèle de données du modèle d'entrée sur le référentiel. La mise à jour inclut de nouvelles propriétés. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>En savoir plus</a>",
		admin_repcfg_use_entry_template_cm_hover: "Indiquez si vous souhaitez que les utilisateurs soient en mesure de créer et gérer des modèles d'entrée sur ce référentiel à partir d'IBM Content Navigator.<br /><br />Si vous activez la gestion du modèle d'entrée, IBM Content Navigator crée le modèle de données du modèle d'entrée sur le référentiel. Le modèle de données comprend un nouvel objet ACL, de nouvelles propriétés et un nouveau type d'élément. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>En savoir plus</a>",
		admin_repcfg_sync_service_p8_hover: "Indiquez si vous voulez que les utilisateurs puissent synchroniser leurs éléments favoris sur plusieurs postes de travail et périphériques mobiles.<br><br><b>Important :</b> Pour utiliser cette fonction, vous devez également effectuer les tâches suivantes :<br><ul><li>Spécifiez l'<b>URL publique de services de synchronisation</b> dans la section <b>Services de synchronisation</b> de l'outil d'administration.</li><li>Ajouter ce référentiel à un bureau pour lequel les services de synchronisation sont activés.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Indiquez si l'option de version principale est indiquée par défaut lorsque les utilisateurs ajoutent des documents dans le référentiel.<br /><br />Les utilisateurs peuvent effacer cette option s'ils souhaitent ajouter le document en tant que version mineure.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Indiquez si l'option de version principale est sélectionnée par défaut lorsque des utilisateurs restituent des documents dans le référentiel.<br /><br />Les utilisateurs ont la possibilité d'effacer cette option s'ils souhaitent restituer le document en tant que version secondaire.",
		admin_repcfg_p8_annotation_security_hover: "Indiquez quel type de sécurité appliquer aux annotations par défaut.<br /><br />Les utilisateurs peuvent changer la sécurité des annotations.",
		admin_repcfg_p8_connection_point_hover: "Si vous souhaitez utiliser les flux de travaux IBM FileNet P8, sélectionnez un point de connexion Process Engine. Le point de connexion que vous sélectionnez détermine quels flux de travaux sont disponibles pour les utilisateurs qui ont accès à ce référentiel.",
		admin_repcfg_p8_include_workflow_definition_hover: "Si vous affichez la classe de document de la définition de flux de travaux d'IBM FileNet P8 dans le client Web, les utilisateurs peuvent rechercher et ajouter des définitions de flux de travaux au référentiel.",
		admin_repcfg_p8_include_form_template_hover: "Si vous affichez la classe de document de modèle de formulaire d'IBM FileNet P8 dans le client Web, les utilisateurs peuvent rechercher et ajouter des modèles de formulaire au référentiel.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Indiquez le chemin complet du fichier de configuration AFP2PDF pour ce référentiel sur le serveur d'applications Web. L'utilitaire AFP2PDF Transform est requis pour afficher et imprimer des données AFP. <br /><br /><b>Rappel :</b> L'utilitaire AFP2PDF Transform doit être installé pour utiliser ce paramètre.",
		admin_repcfg_od_transform_xml_file_hover: " Si vous souhaitez utiliser une transformation personnalisée pour convertir du contenu Content Manager OnDemand, indiquez le chemin complet du fichier XML utilisé pour définir la transformation. Le fichier XML doit se trouver sur le serveur d'applications Web.",
		admin_repcfg_od_ssl_hover: "Indiquez si vous souhaitez utiliser SSL pour chiffrer les communications entre le serveur d'applications IBM Content Navigator et le serveur de bibliothèque Content Manager OnDemand et les serveurs d'objets.<br /><br /><b>Important:</b> Lorsque vous activez SSL for Content Manager OnDemand, il n'inclut pas les communications entre le serveur d'applications IBM Content Navigator et le serveur Web, ou les postes de travail des utilisateurs.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Indiquez le chemin complet du fichier de base de données de jeux de clés pour ce référentiel sur le serveur d'applications Web. Par exemple, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />Le fichier de base de données de jeux de clés contient vos certificats racines dignes de confiance. Vous devez utiliser une protection de système de fichiers efficace pour empêcher tout accès non autorisé à ce fichier.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Indiquez le chemin complet du fichier de dissimulation de jeux de clés pour ce référentiel sur le serveur d'applications Web. Par exemple, C:\\Program Files\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />Le fichier de dissimulation de jeux de clés contient le mot de passe pour le fichier de base de données de jeux de clés. Vous devez utiliser une protection de système de fichiers efficace pour empêcher tout accès non autorisé à ce fichier.",
		admin_repcfg_od_sso_password_hover: "Indiquez le mot de passe à utiliser pour la connexion unique avec le serveur OnDemand.",
		admin_repcfg_od_custom_properties_hover: "L'API ODWEK Java prend en charge les propriétés personnalisées. Si vous souhaitez utiliser des propriétés personnalisées lors de la connexion au référentiel via le client Web, spécifiez les noms et les valeurs des propriétés personnalisées.<br /><br />Pour plus d'informations sur les propriétés personnalisées prises en charge, consultez les Javadocs de l'API Java ODWEK, qui se trouvent dans le sous-répertoire /api du répertoire d'installation ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Entrez le nom de la propriété.",
		admin_repcfg_od_custom_properties_value_hover: "Entrez la valeur de propriété.",
		admin_repcfg_od_use_sso_hover: "Indiquez si vous souhaitez autoriser la connexion unique des utilisateurs.<br /><br /><b>Important :</b> La connexion unique doit être activée sur le serveur Content Manager OnDemand pour que ce paramètre de configuration fonctionne.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Utilisez le codage GZIP pour cette source CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nom de fichier à utiliser lors du téléchargement des documents :",
		admin_repcfg_cm_use_part_file_name_help: "Spécifiez la façon dont les noms de fichier de documents sont déterminés lorsque les utilisateurs téléchargent les documents.",
		admin_repcfg_cm_use_part_file_name_enable: "Utiliser le nom du fichier",
		admin_repcfg_cm_use_part_file_name_disable: "Utiliser le nom de l'élément dans le référentiel",
		admin_repcfg_add_doc_name: "Nom par défaut d'un document ajouté :",
		admin_repcfg_add_doc_name_hover: "Les utilisateurs peuvent modifier le nom avant d'ajouter le document.",
		admin_repcfg_add_doc_name_empty: "Aucun (vide)",
		admin_repcfg_add_doc_name_file_name: "Nom de fichier du document sélectionné",

		admin_repcfg_compound_documents: "Fonctions de document composite :",
		admin_repcfg_compound_documents_hover: "Activez les fonctions des documents composites P8, telles que la navigation.",
		admin_repcfg_cm_action_list_config_enabled: "Liste d'actions sur l'élément de travail :",
		admin_repcfg_cm_action_list_config_hover: "Lorsque vous configurez le routage des documents dans le client d'administration du système Content Manager, vous pouvez spécifier la liste des actions qu'un utilisateur est autorisé à entreprendre sur un élément de travail.<br /><br />Sélectionnez cette option si vous souhaitez utiliser la liste d'actions du serveur Content Manager. Ces actions seront utilisées dans le menu contextuel et dans la fenêtre Editer les propriétés de l'élément de travail.<br /><br /><b>Important :</b> Les actions dans la Liste d'actions se substituent aux menus personnalisés que vous configurez dans l'outil d'administration de Content Navigator. S'il n'y a aucune entrée dans la Liste d'actions, l'utilisateur ne pourra entreprendre aucune action sur les éléments de travail.",

		admin_repcfg_box_share: "Partage dans Box",
		admin_repcfg_box_share_p8_hover: "Permet aux utilisateurs de partager un document provenant de ce référentiel. Le partage d'un document inclut la copie du fichier dans Box, la création d'un lien et l'envoi de ce dernier par e-mail.<br /><br />Si vous activez le partage dans Box, IBM Content Navigator crée le modèle de données de partage dans Box dans le référentiel. Pour installer le module complémentaire de partage dans Box d'IBM Content Navigator, vous devez être connecté au référentiel en tant qu'administrateur de serveur de bibliothèque.",

		admin_menu_type_icon: "Icône de type de menu",
		admin_menu_toolbar_hover: "Barre d'outils",
		admin_menu_toolbar_custom_hover: "Barre d'outils personnalisée",
		admin_menu_contextMenu_hover: "Menu contextuel",
		admin_menu_contextMenu_custom_hover: "Menu contextuel personnalisé",

		admin_menu_contextMenu_custom_empty: "Aucun menu contextuel personnalisé n'est défini dans les plug-in configurés.",
		admin_menu_toolbar_custom_empty: "Aucune barre d'outils personnalisée n'est définie dans les plug-in configurés.",

		admin_file_type_category_filters: "Filtres de type de fichier :",
		admin_file_type_category_filters_hover_help: "Indiquez la liste des types de fichiers que les utilisateurs peuvent utiliser dans les situations suivantes :<ul><li>Pour limiter la liste de résultats lors de la recherche ou de la navigation dans IBM Content Navigator for Microsoft Office<li>Pour limiter la liste de résultats lors de la recherche d'un référentiel IBM FileNet P8 dans le client Web<li>Pour limiter les types de fichiers que les utilisateurs peuvent ajouter au référentiel lors de l'utilisation d'un modèle d'entrée</ul>",
		admin_file_type_only_use_in_et_folder_association: "Afficher uniquement dans les associations de dossier de modèle d'entrée",
		admin_office_config_properties_label: "Propriétés Office",
		admin_office_config_type_label: "Type de données",
		admin_office_config_mapped_property_label: "Propriété du référentiel",
		admin_office_config_properties_hover_help: "Entrez, puis ajoutez le nom de chaque propriété Microsoft Office que vous souhaitez mapper à une propriété de référentiel. Le type de données des différentes propriétés doit être identique.",
		admin_office_config_mapped_property_hover_help: "Si vous souhaitez mapper les propriétés Office à plusieurs propriétés de référentiel, vous devez créer un mappage de propriété.",
		admin_new_property_mapping_title: "Nouveau mappage de propriété",
		admin_property_mapping_title: "Editer le mappage de propriété",
		admin_property_mapping_instruction: "Indiquez les propriétés Microsoft Office que vous souhaitez mapper à une propriété du référentiel. Le type de données des propriétés Office doit correspondre à celui de la propriété du référentiel. <br /><br />Si un document Office dispose de plusieurs propriétés issues du mappage, IBM Content Navigator utilise la première propriété de la liste pour renseigner la propriété du référentiel.",
		admin_ms_general_settings: "Configuration générale :",
		admin_ms_delete_local_settings: "Supprimer les fichiers locaux lorsque les utilisateurs souhaitent :",
		admin_ms_outlook_options: "Intégration d'Outlook :",
		admin_ms_enable_props_mapping: "Mapper les propriétés Office aux propriétés du référentiel lorsque les utilisateurs exécutent les tâches suivantes :",
		admin_ms_open_doc_when_checkout: "Réserver automatiquement un document lorsqu'il est ouvert",
		admin_ms_open_doc_when_checkout_hover_help: "Cette option empêche l'utilisateur de remplacer le fichier par une version plus ancienne dans le référentiel.",
		admin_ms_prompt_close_office: "Inviter les utilisateurs à restituer les documents lorsqu'ils ferment des applications Office",
		admin_ms_prompt_close_office_hover_help: "Cette option permet aux utilisateurs de ne pas oublier de restituer leurs travaux.",
		admin_ms_add_with_entry_template_only: "Afficher uniquement l'action Ajouter avec un modèle",
		admin_ms_delete_local_on_add: "Supprimer les fichiers locaux lorsque les utilisateurs ajoutent des documents",
		admin_ms_delete_local_on_checkin: "Supprimer les fichiers locaux lorsque les utilisateurs restituent des documents ou annulent la réservation",
		admin_ms_delete_local_on_add_hover_help: "Lorsqu'un utilisateur ajoute un document dans IBM Content Navigator for Microsoft Office, ce document est ajouté au référentiel et la copie locale du document reste ouverte afin que les utilisateurs puissent immédiatement réserver le document pour y apporter des modifications.<br /><br />Sélectionnez cette option pour fermer et supprimer automatiquement la copie locale du document après avoir ajouté le document au référentiel.",
		admin_ms_delete_local_on_checkin_hover_help: "Lorsqu'un utilisateur restitue un document dans IBM Content Navigator for Microsoft Office, ce document est restitué dans le référentiel et la copie locale du document reste ouverte. En outre, une fois que l'action d'annulation de la réservation a été utilisée, la copie locale du document reste ouverte. La copie locale étant ouverte, les utilisateurs peuvent immédiatement réserver à nouveau le document pour y apporter des modifications.<br /><br />Sélectionnez cette option pour fermer et supprimer automatiquement la copie locale du document après avoir restitué un document ou utilisé l'action d'annulation de la réservation.",
		admin_ms_delete_local_on_save: "Sauvegarder un document",
		admin_ms_prompt_for_props_on_add: "Inviter les utilisateurs à indiquer des valeurs de propriété lorsqu'ils ajoutent des e-mails au référentiel",
		admin_ms_prompt_for_props_on_add_hover_help: "Si vous ne sélectionnez pas cette option, le client Web applique le mappage de propriétés Outlook défini pour le référentiel.<br /><br />Si vous disposez de modèles d'entrée associés au dossier dans lequel les e-mails ont été ajoutés, l'utilisateur risque de ne pas être invité à indiquer les valeurs.",
		admin_ms_delete_email_on_add: "Supprimer l'e-mail du serveur lorsqu'il est ajouté au référentiel",
		admin_ms_send_email_as_link_only: "Empêcher les utilisateurs d'envoyer des documents sous forme de pièces jointes",
		admin_ms_send_email_as_link_only_hover_help: "Si vous sélectionnez cette option, les utilisateurs peuvent envoyer leurs documents uniquement sous forme de liens dans Outlook. Ainsi, seuls les utilisateurs disposant des privilèges appropriés concernant le référentiel peuvent consulter les documents.",
		admin_ms_enable_prop_mapping_for_add: "Mapper les propriétés Office aux propriétés du référentiel lorsque les utilisateurs ajoutent ou restituent des documents",
		admin_ms_checkout_document_after_add: "Réserver automatiquement les documents une fois qu'ils ont été ajoutés au référentiel",
		admin_no_default_document_type_filtering: "Renvoyer tous les types de document par défaut lorsque les utilisateurs exécutent des recherches",
		admin_no_default_document_type_filtering_hover_help: "Dans IBM Content Navigator for Microsoft Office, le comportement par défaut est que les utilisateurs voient uniquement le type de document pour l'application en cours lorsqu'ils exécutent des recherches. Par exemple, le type de document Word est sélectionné par défaut lorsqu'ils effectuent une recherche depuis Microsoft Word.<br/><br/>Cependant, la sélection de cette option efface les cases Document types afin que les utilisateurs puissent voir tous les documents qui sont renvoyés par une recherche. Les utilisateurs peuvent remplacer ce paramètre en sélectionnant un ou plusieurs types de document avant d'exécuter une recherche.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Indiquez si les propriétés définies pour les documents Microsoft Office doivent être mappées aux propriétés définies dans le référentiel.<br /></br /><b>Important :</b> si vous activez cette fonction, vous devez configurer les propriétés Office pour chaque référentiel dans votre environnement. Si vous ne mappez pas les propriétés Office aux propriétés de votre référentiel, cette fonction échouera.<br /><br />Ce paramètre ne s'applique pas à Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Sélectionnez cette option pour réduire le nombre d'étapes que les utilisateurs doivent effectuer pour utiliser des documents une fois que ces derniers ont été ajoutés au référentiel.<br /></br /><b>Astuce :</b> Pour vous assurer que les utilisateurs restituent les fichiers dans le référentiel, sélectionnez <b>Inviter les utilisateurs à restituer les documents lorsqu'ils ferment des applications Office</b>.",
		admin_ms_show_details_recently_used: "Afficher les détails de l'élément <b>Récemment utilisé</b>",
		admin_ms_show_details_recently_used_hover_help: "Par défaut, lorsque vous affichez la liste d'éléments Récemment utilisés, les détails des éléments sont masqués pour permettre l'affichage d'un plus grand nombre d'éléments. Lorsque vous sélectionnez cette option, dans la liste d'éléments Récemment utilisés, les détails sont affichés pour le premier document dans la sous-fenêtre des détails par défaut.",
		admin_ms_show_no_permissions_warning: "Afficher des avertissements lorsque des utilisateurs éditent des propriétés ou restituent un document, mais qu'ils n'ont pas le droit d'afficher le modèle d'entrée de ce document",
		admin_ms_show_no_permissions_warning_hover_help: "Si un document du référentiel a été créé à l'aide d'un modèle d'entrée, mais que l'utilisateur n'est pas autorisé à afficher le modèle d'entrée de ce document, le modèle d'entrée n'est pas extrait.<br /><br/>Par conséquent, lorsque l'utilisateur édite les propriétés du document, ces dernières sont affichées sans utiliser le modèle d'entrée. Et, lorsque l'utilisateur restitue le document, ce dernier est restitué sans utiliser le modèle d'entrée.<br /><br />Par défaut, ces actions sont effectuées sans informer l'utilisateur que le modèle d'entrée n'est pas utilisé. Seul un avertissement est consigné dans le fichier journal.<br /><br />Sélectionnez cette option si vous souhaitez afficher des avertissements qui informent immédiatement l'utilisateur lorsque le modèle d'entrée n'est pas utilisé.",
		admin_ms_hide_search_actions: "Réduire la section des filtres de recherche",
		admin_ms_hide_search_actions_hover_help: "Par défaut, les utilisateurs peuvent appliquer un filtre d'action pour spécifier une action, un utilisateur ou un groupe d'utilisateurs et sélectionner une date ou une plage de dates pour l'action. Par exemple, vous pouvez rechercher uniquement les documents que vous avez ajoutés au cours du mois dernier.<br /><br />Si vous ne souhaitez pas autoriser les utilisateurs à appliquer des filtres d'actions, sélectionnez cette option pour les masquer et réduire le nombre de zones affichées lors de la définition des critères de recherche.",
		admin_ms_hide_save_document: "Masquer l'option <b>Sauvegarder</b> de la barre du ruban",
		admin_ms_hide_save_document_hover_help: "L'option <b>Sauvegarder</b> permet aux utilisateurs de sauvegarder des modifications de document dans le référentiel sans importer le document.",
		admin_ms_indicate_managed_email_on_add: "Indique si un e-mail a déjà été ajouté au référentiel",
		admin_ms_indicate_managed_email_on_add_hover_help: "La sélection de cette option permet aux utilisateurs de savoir qu'un e-mail est déjà dans le référentiel, ce qui permet de réduire le nombre de fois qu'un e-mail est ajouté au référentiel.  Lorsque cette option est sélectionnée, une catégorie de nouvelle couleur appelée IBM ECM est créée dans Microsoft Outlook. Tout e-mail qui est ajouté au référentiel est automatiquement ajouté à la catégorie Géré dans IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Ajoutez des options dans le groupe Editer :",
		admin_ms_edit_group_add_command_configuration_hover_help: "Indiquez quelles options <b>Ajouter</b> sont disponibles dans le groupe <b>Editer</b> dans la barre du ruban :<ul><li>Sélectionnez <b>Afficher toutes les options d'ajout</b> pour afficher le bouton Ajouter et toutes les actions Ajouter qui sont disponibles dans le groupe Editer.</li><li>Sélectionnez <b>Masquer toutes les options d'ajout</b> pour empêcher les utilisateurs d'ajouter des documents dans le référentiel ou si vous souhaitez que les utilisateurs ajoutent des documents uniquement à partir d'un espace d'équipe.</li><li>Sélectionnez <b>Masquer l'action Ajouter avec un modèle</b> si vous souhaitez appliquer des associations de dossier de modèle d'entrée et empêcher les utilisateurs de sélectionner un autre modèle d'entrée.</li><li>Sélectionnez <b>Afficher uniquement l'action Ajouter avec un modèle</b> si vous souhaitez obliger les utilisateurs à ajouter des documents en utilisant des modèles d'entrée.</li></ul>",
		admin_ms_show_edit_group_add_button: "Afficher toutes les options d'ajout (par défaut)",
		admin_ms_hide_edit_group_add_button: "Masquer tous les options d'ajout",
		admin_ms_hide_add_with_entry_template: "Masquer l'action Ajouter avec un modèle",
		admin_ms_managed_in_ecm: "Géré dans IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Si les utilisateurs affichent les catégories dans Microsoft Outlook, ce libellé s'affiche pour les e-mails ayant été ajoutés à un référentiel IBM Content Manager ou IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "Le nom de catégorie Géré dans IBM ECM ne peut pas contenir de virgule (,) ou de point-virgule (;).",
		admin_delete_open_docs_after_close: "Supprimer automatiquement les documents ouverts lorsque les utilisateurs ferment les documents",
		admin_admin_delete_open_docs_after_close_hover_help: "Lorsqu'un utilisateur ouvre un document dans IBM Content Navigator for Microsoft Office, le document est téléchargé dans le répertoire de document de l'utilisateur ou à l'emplacement spécifié par les paramètres de suivi de fichiers pour le bureau.<br><br>Sélectionnez cette option pour supprimer les fichiers qui sont ouverts mais non réservés lorsque les utilisateurs ferment les documents. La sélection de cette option vous permet d'effectuer les actions suivantes :<ul><li>Imposer la conformité avec des règles informatiques</li><li>Vérifier que les utilisateurs emploient la dernière version des documents</li><li>Réduire la quantité d'espace disque utilisée pour stocker des documents</li><ul>",
		admin_ms_custom_command_configuration: "Commandes personnalisées :",
		admin_ms_custom_command_configuration_hover_help: "Vous pouvez ajouter jusqu'à quatre commandes à la barre d'outils IBM Content Navigator for Microsoft Office dans des applications Microsoft Office. Les commandes peuvent être utilisées pour ouvrir des URL. Par exemple, vous pouvez ajouter une commande pour ouvrir un service qui peut être utilisé pour rechercher des utilisateurs et des groupes.",
		admin_ms_custom_command_dialog_title: "Editer une commande personnalisée",
		admin_ms_custom_command_dialog_intro_text: "Définissez une commande qui peut être utilisée pour ouvrir une adresse URL à partir de la barre d'outils IBM Content Navigator for Microsoft Office dans des applications Microsoft Office.",
		admin_ms_custom_command_id: "Commande ${0}",
		admin_ms_custom_command_available_label: "Disponible",
		admin_ms_custom_command_available_hover_help: "Si l'URL qui a été définie pour une commande doit être mise hors ligne pour la maintenance, vous pouvez effacer la case à cocher pour la commande, afin qu'elle ne soit pas affichée dans Microsoft Office.<br/><br/><b>Important :</b> les utilisateurs doivent se déconnecter du bureau pour que les modifications soient reflétées dans IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID de la commande",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Libellé",
		admin_ms_custom_command_label_hover_help: "Indiquez le libellé à afficher pour la commande dans Microsoft Office.",
		admin_ms_custom_command_description_label: "Description",
		admin_ms_custom_command_description_hover_help: "Indiquez la description à afficher pour la commande dans Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Indiquez l'URL complète à ouvrir à partir de Microsoft Office. L'URL peut être une page Web ou un service.",
		admin_ms_custom_command_icon_label: "Icône",
		admin_ms_custom_command_icon_hover_help: "Indiquez le nom du fichier de l'icône à afficher, par exemple, CommandIcon.png.<br/><br/><b>Important :</b> vous devez ajouter le fichier d'icône du sous-répertoire Plugins du répertoire d'installation IBM Content Navigator for Microsoft Office sur chaque machine client.<br/><br/>Si le fichier d'icône n'est pas dans le répertoire Plugins, ou si vous ne spécifiez pas d'icône, l'icône par défaut, customButtonIcon_38.gif, s'affiche.",
		admin_ms_custom_command_group_name: "Libellé du groupe :",
		admin_ms_custom_command_group_name_hover_help: "Vous pouvez indiquer un libellé de groupe à afficher sous les commandes personnalisées de la barre du ruban.<br/><br/>Si vous ne définissez pas de libellé, le libellé du groupe est <b>Custom Commands</b>.",
		admin_ms_ribbon_tab_label: "Libellé de l'onglet IBM ECM :",
		admin_ms_ribbon_tab_hover_help: "Entrez le nom que vous souhaitez afficher pour l'onglet IBM Content Navigator for Microsoft Office dans la barre du ruban Microsoft Office. Si vous n'indiquez aucun nom, l'onglet est nommé \“IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Fermer le panneau de tâche lorsque des utilisateurs ouvrent des documents",
		admin_ms_close_task_pane_on_open_hover_help: "Sélectionnez cette option si vous souhaitez optimiser l'espace dans lequel les utilisateurs peuvent voir des documents dans Microsoft Office.<br/><br/>Utilisateurs Microsoft Office 2010 : Pour vous assurer que le panneau de tâche est fermé pour tous les documents, activez le mode multiple document interface (MDI) en cliquant sur <b>Options</b> &gt; <b>Avancé</b> et en décochant la case <b>Afficher toutes les fenêtres dans la barre des tâches</b>.",
		admin_ms_open_document_options: "Options d'ouverture du document :",
		admin_ms_delete_local_file_options: "Options de suppression de fichier local :",
		admin_ms_add_and_checkin_options: "Options d'ajout et de restitution :",
		admin_ms_search_options: "Options de recherche :",
		admin_ms_display_options: "Options d'affichage :",
		admin_ms_bidirection_enable_label: "Activer la prise en charge du texte bidirectionnel",
		admin_ms_bidirection_enable_hover_help: "Sélectionnez cette option si vous souhaitez permettre aux utilisateurs d'entrer ou d'afficher du texte dans IBM Content Navigator for Microsoft Office dans une autre direction que de gauche à droite.",
		admin_ms_text_direction_label: "Direction de base du texte du contenu :",
		admin_ms_text_direction_hover_help: "Indiquez la direction dans laquelle le texte est entré dans les zones d'entrée d'IBM Content Navigator for Microsoft Office. Ce paramètre contrôle également la manière dont les éléments, tels que les noms de dossier ou les valeurs de propriété, sont affichés.",
		admin_ms_control_threshold_label: "Nombre minimal d'éléments pour l'activation de la recherche prospective :",
		admin_ms_control_threshold_hover_help: "Par défaut, la recherche prospective est activée lorsque le nombre d'éléments est supérieur ou égal à 50, afin de rechercher ou de définir des propriétés comportant des valeurs prédéfinies dans une liste déroulante. Vous pouvez modifier la valeur minimale.",

		admin_ms_default_email_class: "Classe à utiliser lors de l'ajout d'un e-mail",
		admin_ms_default_email_class_hover_help: "Tout e-mail ajouté au référentiel depuis Microsoft Outlook sera ajouté à la classe que vous indiquez. Les utilisateurs ne peuvent pas modifier cette classe.",
		admin_ms_default_folder_class: "Classe à utiliser lors de la création de dossiers",
		admin_ms_default_folder_class_hover_help: "Tout dossier créé dans ce référentiel depuis une application Microsoft Office sera ajouté à la classe que vous indiquez.  Les utilisateurs ne peuvent pas modifier cette classe.",
		admin_ms_default_folder_warn_title: "Vous ne pouvez pas utiliser la classe ${0} en tant que classe à utiliser lors de la création de dossiers.",
		admin_ms_default_folder_warn_name_prop_invalid: "La propriété du nom de la classe n'est pas une chaîne, et le nom du dossier doit être une chaîne.<br />Sélectionnez une autre classe à utiliser lors de la création de dossiers ou consultez votre administrateur IBM Content Manager pour changer la propriété du nom de la classe en chaîne.",
		admin_ms_default_folder_warn_req_props: "La classe comprend des propriétés obligatoires sans valeur. Cependant, les utilisateurs ne peuvent pas spécifier de valeurs pour les propriétés obligatoires lorsqu'ils créent des dossiers dans IBM Content Navigator for Microsoft Office.<br />Sélectionnez une autre classe à utiliser lors de la création de dossiers ou consultez votre administrateur IBM Content Manager pour rendre optionnelles les propriétés obligatoires ou pour les préremplir avec une valeur.",
		admin_ms_delimiter_for_office_properties: "Délimiteur pour les propriétés de chaîne à valeurs multiples",
		admin_ms_delimiter_for_office_properties_hover_help: "Indiquez le caractère à utiliser comme délimiteur pour les propriétés de chaîne que vous mappez vers des propriétés de chaîne à valeurs multiples. Par défaut, vous pouvez affecter un ensemble de valeurs à une propriété de chaîne à valeurs multiples en utilisant un point-virgule (;) comme délimiteur pour séparer les valeurs. Toutefois, si l'une des valeurs de chaîne comprend un point-virgule, n'ajoutez pas cette valeur de chaîne comme délimiteur à moins que le délimiteur n'ait été remplacé par un autre caractère. Vous pouvez par exemple définir la virgule (,) comme délimiteur",
		admin_ms_outlookPropertyRemembrance : "Mémoriser les paramètres lors de l'ajout de messages et de pièces jointes",
		admin_ms_outlookPropertyRemembrance_hover_help : "Les valeurs de propriété, l'emplacement, la sélection des classes et la sécurité affectés aux messages et aux pièces jointes sont conservés en mémoire et seront utilisés comme paramètres par défaut lors de l'ajout d'éléments futurs.",

		admin_file_type_name_hover_help: "Infobulle du nom",
		admin_file_type_description_hover_help: "Infobulle de la description",
		admin_file_type_dialog_title: "Editer le filtre de type de fichier",
		admin_new_file_type_dialog_title: "Nouveau filtre de type de fichier",
		admin_mobile_feature_dialog_title: "Fonction",
		admin_mobile_feature_dialog_new_title: "Nouvelle fonction",
		admin_file_type_instructions: "Créez un filtre applicable par les utilisateurs pour affiner la liste des résultats de leur recherche. Vous pouvez mapper plusieurs types MIME au filtre.",
		admin_file_type_filter_place_holder: "Types MIME de filtre",
		admin_new_button_label: "Nouveau",
		admin_edit_button_label: "Editer",
		admin_delete_button_label: "Supprimer",
		admin_copy_button_label: "Copier",
		admin_verify_button_label: "Vérifier",
		admin_availabe_filters_label: "Filtres disponibles",
		admin_selected_filters_label: "Filtres sélectionnés",

		admin_mobile_access: "Accès aux applications mobiles :",
		admin_mobile_access_hover_help: "Si vous souhaitez utiliser IBM Content Navigator à partir d'un périphérique mobile, nous vous recommandons d'autoriser les utilisateurs à accéder à ce bureau à partir de l'application mobile.<br /><br />Si vous désactivez l'accès à ce bureau à partir de l'application mobile, les utilisateurs ont tout de même la possibilité d'accéder au client Web à partir de leurs navigateurs mobiles. Toutefois, le client Web n'est pas conçu pour un accès à partir de périphériques mobiles.",

		admin_mobile_access_allow_label: "Permettre aux utilisateurs d'effectuer les actions suivantes :",
		admin_mobile_allow_add_photos: "Ajouter des photos de l'appareil photo et de la bibliothèque de photos",
		admin_mobile_allow_add_docs: "Ajouter des documents et créer des dossiers dans le référentiel",
		admin_mobile_allow_open_docs: "Ouvrir des documents dans d'autres applications",
		admin_mobile_allow_add_docs_hover_help: "Les utilisateurs peuvent créer des dossiers ou ajouter des documents à partir d'autres applications mobiles, par exemple un document en pièce jointe d'un e-mail.",
		admin_mobile_allow_open_docs_hover_help: "Les utilisateurs sont invités à sélectionner l'application à utiliser pour consulter le document sélectionné. Si une seule application est disponible, c'est elle qui est utilisée.",
		admin_mobile_features: "Fonctions :",
		admin_mobile_features_hover_help: "Indiquez les fonctions de ce bureau qui sont affichées dans l'application mobile IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nouvelle fonction",
		admin_mobile_move_up_button_label: "Déplacer vers le haut",
		admin_mobile_move_down_button_label: "Déplacer vers le bas",
		admin_desktop_mobile_instructions: "L'instruction des paramètres mobiles est déplacée à l'emplacement souhaité",
		admin_desktop_max_number_of_docs_to_add: "Nombre maximum de documents à ajouter :",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Spécifiez le nombre maximum de documents que les utilisateurs peuvent ajouter simultanément. La valeur maximum par défaut est 50. Toutefois, vous pouvez définir cette valeur sur 300.",
		admin_desktop_max_number_of_docs_to_modify: "Nombre maximum d'éléments à modifier :",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Indiquez le nombre maximal d'éléments que les utilisateurs peuvent modifier simultanément. La valeur maximum par défaut est 50. Toutefois, vous pouvez définir cette valeur sur 300.",
		admin_desktop_max_conversion_size: "Quantité maximale de données pour les conversions PDF (en Mo) :",
		admin_desktop_max_conversion_size_hover_help: "<b>Restriction :</b> Ce paramètre n'est pas pris en charge sur IBM Content Manager OnDemand.<br/><br/>Indiquez la quantité maximale de données pouvant être converties au format PDF. Cette limite s'applique lorsque les utilisateurs téléchargent des éléments en tant que fichiers PDF ou envoient des éléments via e-mail en tant que fichiers PDF.<br /><br />Si la taille de chaque document ne peut pas être déterminée, les documents sont tout de même convertis au format PDF.<br/><br/>La limite par défaut est 200 Mo. La définition de cette limite sur une valeur supérieure à 200 Mo peut avoir des conséquences sur les performances système.",
		admin_desktop_timeProperties: "Horodatage :",
		admin_desktop_time_properties_hover_help: "<b>Utilisateurs IBM FileNet P8 uniquement :</b> Ce paramètre s'applique aux propriétés personnalisées, mais pas aux propriétés système. Par exemple, la propriété Modifié par continue à afficher la portion heure de l'horodatage si vous sélectionnez <b>Afficher uniquement la portion heure de l'horodatage</b>.<br/><br/>Ce paramètre ne modifie pas l'horodatage dans le référentiel.",
		admin_desktop_disable_time_stamp: "Afficher l'horodatage dans son intégralité",
		admin_desktop_enable_time_stamp: "Afficher uniquement la portion heure de l'horodatage",
		admin_desktop_timezone: "Fuseau horaire :",
		admin_desktop_timezone_localuser: "Afficher le fuseau horaire de l'utilisateur",
		admin_desktop_timezone_alluser: "Afficher le même fuseau horaire pour tous les utilisateurs",
		admin_desktop_timezone_hover_help: "Vous pouvez choisir d'afficher l'horodatage basé sur le fuseau horaire local ou d'afficher le même horodatage pour tous les utilisateurs.<br/><br/>Ce paramètre ne modifie pas l'horodatage dans le référentiel. Toutefois, le paramètre sélectionné détermine le fuseau horaire utilisé pour créer l'horodatage dans le référentiel lorsque les utilisateurs ajoutent ou modifient des éléments.",
		admin_desktop_mobile_feature_display_label: "Affichage",
		admin_desktop_mobile_feature_icon_file_label: "Fichier d'icône",
		admin_mobile_feature_dialog_icon_file_label: "Fichier d'icône :",
		admin_mobile_feature_dialog_url_label: "URL :",
		admin_desktop_mobile_feature_name_label: "Nom",
		admin_desktop_mobile_select_feature_label: "Sélectionner une fonction",
		admin_desktop_mobile_feature_icon_label: "Icône de fonction",
		admin_desktop_share_admin_none: "Administrateur non défini.",
		admin_desktop_share_admin_edit_label: "Définition de l'administrateur...",
		admin_browse_icon: "Rechercher une icône",
		admin_search_icon: "Icône de recherche",
		admin_favorites_icon: "Icône des favoris",
		admin_casesearch_icon: "Icône cas",
		admin_datacap_icon: "Icône Datacap",
		admin_system_defined: "Défini par le système",
		admin_icon_file_placeholder_text: "Emplacement du fichier (http://icons.com/image.bmp, par exemple)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Racine",
		admin_folder_default: "Par défaut",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Barres d'outils",
		admin_menu_context_menus: "Menus contextuels",
		admin_menu_office_toolbars: "Commandes de la barre du ruban Microsoft Office",
		admin_menu_office_menus: "Menus contextuels de Microsoft Office",

		admin_file_name_label: "Nom de fichier :",
		admin_exportconfiguration_security_label: "Inclure les utilisateurs et les groupes autorisés à utiliser ce bureau",
		admin_exportconfiguration_instruction: "Vous pouvez exporter vos bureaux, y compris les configurations de référentiel et les configurations de plug-in associées aux bureaux sélectionnés, vers un fichier que vous pouvez importer vers une autre instance d'IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exporter le bureau",
		admin_exportconfiguration_button_label: "Exporter",
		admin_dialog_select_all: "Sélectionner tout",
		admin_dialog_deselect_all: "Effacer tout",

		admin_importconfiguration_instruction: "Les éléments du fichier de configuration sélectionné seront importés dans ce système. Cependant, si un élément portant le même ID existe déjà sur le système, vous devez décider si vous souhaitez conserver ou écraser l'élément.",
		admin_importconfiguration_dialog_label: "Importer un bureau",
		admin_importconfiguration_reason_dialog_label: "Importer des motifs d'occultation",
		admin_importconfiguration_button_label: "Importer",
		admin_to_be_imported: "Elément de configuration à importer",
		admin_on_target_system: "Elément existant dans le système cible",
		admin_import_short_warning_message: "Les éléments suivants existent déjà sur ce système. Sélectionnez les éléments que vous souhaitez remplacer sur ce système :",
		admin_import_warning_message: "Les éléments de configuration suivants disposent des mêmes ID que ceux qui existent dans le système cible. Ne sélectionnez que les éléments que vous souhaitez importer écraser dans le système cible.<br /><br />Si vous ne souhaitez pas écraser un élément de configuration, créez-en une copie dans l'instance depuis laquelle vous avez exporté le bureau, attribuez-lui un autre ID, puis associez-le au bureau. Ré-exportez le bureau puis importez-le dans cette instance.",
		admin_choose_file_to_import_label: "Choisissez le fichier à importer :",
		admin_download_imported_log: "Télécharger le rapport",
		admin_desktop_import_summary: "Récapitulatif d'importation de bureau",
		admin_reason_import_summary: "Récapitulatif d'importation des motifs d'occultation",
		admin_rba_import_summary: "Récapitulatif d'importation de rôle d'administration",
		admin_import_open_tabs_checking: "Avant d'importer des bureaux, vous devez fermer tous les onglets à l'exception de l'onglet <bold>Bureaux</bold> dans l'outil d'administration.",
		admin_import_no_conflict: "Les éléments suivants seront importés :",
		admin_desktop_invalid: "Bureau non valide",
		admin_desktop_warning: "Le bureau a été sauvegardé avec des avertissements.",
		admin_repos_warning: "Le référentiel a été sauvegardé avec des avertissements.",
		admin_config_type_icon: "Icône de type d'élément de configuration",

		admin_approval_workflow: "Flux de travaux d'approbation",
		admin_approval_workflow_hover: "Permet aux utilisateurs de lancer un flux de travaux d'approbation prédéfini. Vous pouvez désactiver un flux de travaux d'approbation afin de permettre aux utilisateurs de lancer un flux de travaux d'approbation personnalisé qui est défini par une souscription. Par défaut, le flux de travaux d'approbation est activé.<br><br><b>Important :</b> si vous activez un flux de travaux d'approbation, vous devez vous assurer que l'une des définitions de flux de travaux prédéfinies ou les deux (ICNParallelDocumentApproval.pep et ICNSequentialDocumentApproval.pep) sont ajoutées au référentiel et transférées à Content Process Engine.",

		admin_cannot_add_desktop_members_error: "Vous ne pouvez pas spécifier les utilisateurs et groupes ayant accès à ce bureau.",
		admin_cannot_add_desktop_members_error_explanation: "Vous ne disposez pas des droits appropriés pour extraire les informations relatives aux utilisateurs et aux groupes.",
		admin_cannot_add_desktop_members_error_userResponse: "Connectez-vous sous un autre nom d'utilisateur ou demandez à votre administrateur système IBM Content Manager de vous accorder le privilège UserACLOwner, qui est obligatoire pour extraire les informations concernant les utilisateurs et les groupes.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "Vous ne pouvez pas sélectionner des utilisateurs et des groupes.",
		admin_cannot_select_users_groups_error_explanation: "Vous ne disposez pas des droits appropriés pour extraire les informations relatives aux utilisateurs et aux groupes.",
		admin_cannot_select_users_groups_error_userResponse: "Connectez-vous sous un autre nom d'utilisateur ou demandez à votre administrateur système IBM Content Manager de vous accorder le privilège UserACLOwner, qui est obligatoire pour extraire les informations concernant les utilisateurs et les groupes.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "Le client OAuth2 est introuvable",
		oauth_client_not_found_error_explanation: "L'ID ${0} client OAuth2 est introuvable.",
		oauth_client_not_found_error_userResponse: "Contactez votre administrateur système pour l'informer que l'ID client OAuth2 est introuvable.",
		oauth_client_not_found_error_adminResponse: "Examinez la configuration du référentiel et vérifiez qu'elle contient l'ID client OAuth2 correct.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "id_client",

		oauth_login_failed_error: "La connexion au référentiel a échoué.",
		oauth_login_failed_error_explanation: "Une tentative de connexion au référentiel ${0} a échoué.",
		oauth_login_failed_error_userResponse: "Vérifiez que l'ID utilisateur et le mot de passe sont corrects et essayez à nouveau de vous connecter.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "id_référentiel",

		oauth_error_return_error: "Une erreur s'est produite lors de la tentative de connexion à ${0}.",
		oauth_error_return_error_explanation: "La tentative d'autorisation ${0} a échoué.",
		oauth_error_return_error_userResponse: "Contactez votre administrateur système et fournissez-lui les informations suivantes : La tentative d'autorisation ${0} a échoué et a renvoyé le message d'erreur suivant : <br>${1}<br><b>erreur :</b> ${2}.<br><b>description :</b> ${3}.",
		oauth_error_return_error_adminResponse: "D'autres informations sur l'erreur se trouvent dans les fichiers journaux de serveur d'applications Web.  Pour plus d'informations sur les fichiers journaux, consultez la rubrique &quot;Fichiers journaux d'IBM Content Navigator&quot; dans IBM Knowledge Center. En utilisant les informations relatives à la tentative d'autorisation ${0}, essayez de résoudre le problème et vérifiez si OAuth2 est activé.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Application cible OAuth",
		oauth_error_return_error_1: "message_erreur",
		oauth_error_return_error_2: "erreur",
		oauth_error_return_error_3: "description_erreur",

		oauth_error_unknown: "Message d'erreur OAuth non reconnu.",

		delete_share_permission_error: "Le partage n'a pas été supprimé.",
		delete_share_permission_error_explanation: "Vous ne disposez pas des droits appropriés pour supprimer le partage.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "Vous ne pouvez pas partager cet élément.",
		class_not_support_share_error_explanation: "La classe ${0} n'a pas été configurée pour prendre en charge le partage.",
		class_not_support_share_error_0: "nom_classe",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "Vous ne pouvez pas partager cet élément.",
		rbr_not_support_share_error_explanation: "Du contenu sensible a été ajouté dans l'article.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "Le périphérique à partir duquel l'utilisateur tente de se connecter n'est pas autorisé à accéder au compte de l'utilisateur.",
		box_oauth_error_invalid_request: "La demande ne contient pas un paramètre obligatoire ou contient une valeur de paramètre non valide, ou encore plusieurs occurrences d'un même paramètre, ou son format est incorrect.",
		box_oauth_error_unsupported_response_type: "Le serveur d'autorisation ne prend pas en charge l'obtention d'un code d'autorisation à l'aide de cette méthode.  Vérifiez la valeur du paramètre de code dans votre demande.",
		box_oauth_error_access_denied: "Le propriétaire de la ressource ou le serveur d'autorisation a refusé la demande.",
		box_oauth_error_temporarily_unavailable: "Le débit est actuellement limité pour votre périphérique. Vous devez soit réduire le débit de vos demandes d'autorisation soit patienter un peu.",
		box_oauth_error_unknown: "Message d'erreur Box non reconnu.",

		admin_default_search_type: "Type de recherche par défaut",
		admin_default_search_type_hover: "Indiquez l'option sélectionnée par défaut dans la zone <b>Rechercher</b> du menu <b>Options de recherche</b>.",
		admin_default_search_type_documents: "Documents",
		admin_default_search_type_folders: "Dossiers",
		admin_default_search_type_folders_and_documents: "Documents et dossiers",

		admin_restricted_search_type: "Autoriser la recherche dans",
		admin_restricted_search_type_hover: "Par défaut, les utilisateurs peuvent effectuer des recherches à la fois dans les documents et les dossiers. Pour masquer l'option de recherche et restreindre les recherches aux seuls documents, sélectionnez Documents et désélectionnez Dossiers.</br>,</br> Si vous autorisez les recherches à la fois dans les documents et les dossiers, sélectionnez l'option par défaut qui s'affichera à l'ouverture du panneau de recherche.",
		admin_restricted_search_type_documents: "Documents",
		admin_restricted_search_type_folders: "Dossiers",
		admin_restricted_search_type_folders_and_documents: "Documents et dossiers",

		admin_default_search_version: "Version de recherche par défaut",
		admin_default_search_version_hover: "Indiquez l'option sélectionnée par défaut dans la zone <b>Version</b> du menu <b>Options de recherche</b>.",

		admin_all_classes_search: "Rechercher dans toutes les classes",
		admin_all_classes_search_hover: "Indiquez si les utilisateurs sont autorisés à effectuer la recherche dans toutes les classes et dans ce cas, spécifiez les éléments à inclure dans les recherches de document.",
		admin_all_classes_search_removed_hover: "Les options de recherche dans toutes les classes ne sont pas disponibles car le paramètre context-param allPseudoClassHidden dans le fichier web.xml de l'application Navigator n'a pas la valeur true.",
		admin_all_classes_search_hide: "Supprimer l'option pour effectuer la recherche dans toutes les classes",
		admin_all_classes_search_documents_only_documents: "Une recherche de documents comprend uniquement des documents, des recherches sauvegardées et des modèles d'entrée",
		admin_all_classes_search_documents_non_folders: "Une recherche de documents comprend tous les éléments qui ne sont pas des dossiers",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Arborescence :",
		admin_feature_config_tree_view_hoverhelp: "Indiquez si les utilisateurs peuvent accéder à la liste des dossiers dans le référentiel via le panneau d'exploration. Si vous masquez le panneau d'exploration, les utilisateurs doivent utiliser la liste de contenu pour accéder aux dossiers dans le référentiel.",
		admin_feature_config_selected_repositories_label: "Référentiels :",
		admin_feature_config_selected_repositories_hoverhelp: "Sélectionnez les référentiels auxquels les utilisateurs peuvent accéder dans cette fonction.",
		admin_feature_config_selected_repositories_select_state_hdr: "Sélectionner un référentiel",
		admin_feature_config_selected_repositories_name_hdr: "Nom de référentiel",
		admin_feature_config_selected_repositories_show_hdr: "Afficher",
		admin_feature_config_invalid_icon_title: "Il manque des paramètres obligatoires dans la fonction",
		admin_feature_config_view_select_hdr: "Sélectionner une vue",
		admin_feature_config_view_hdr: "Afficher",
		admin_feature_config_view: "Afficher",
		admin_feature_config_views: "Vues :",
		admin_feature_config_views_hoverhelp: "Indiquez les vues que les utilisateurs peuvent appliquer à la liste de contenus. Les vues sont affichées dans l'ordre dans lequel elles sont répertoriées. La première vue sélectionnée est la vue par défaut de la fonction.<br><br><b>Important :</b> si vous activez la vue Filmstrip, vous devez configurer l'afficheur de conversion HTML pour afficher les aperçus de document.",

		admin_custom_dialog_name: "Nom :",
		admin_custom_dialog_value: "Valeur :",
		admin_custom_setting_name_hover: "Entrez le nom du paramètre Daeja ViewONE à ajouter à votre configuration. Pour plus d'informations sur les paramètres de configuration, voir la documentation Daeja ViewONE.",
		admin_custom_setting_value_hover: "Entrez la valeur à utiliser pour le paramètre de configuration Daeja ViewONE. Pour plus d'informations sur les valeurs valides pour le paramètre de configuration, voir la documentation Daeja ViewONE.",

		entry_template_name_required_message: "La zone de nom des paramètres de modèle d'entrée est obligatoire.",
		entry_template_name_invalid_message: "La zone de nom des paramètres de modèle d'entrée ne doit pas contenir l'un des caractères suivants : * \\ / : ? \" < > |.",
		entry_template_save_in_member_empty_message: "Lorsque des utilisateurs et des groupes spécifiques sont sélectionnés pour le Partage avec la zone des paramètres de modèle d'entrée, vous devez indiquer au moins un utilisateur ou un groupe.",
		entry_template_no_permission_to_save_to_teamspace_message: "Vous n'êtes pas autorisé à ajouter des modèles d'entrée à l'espace d'équipe (${0}) qui a été sélectionné à partir de la fonction Sauvegarder dans dans les paramètres de modèle d'entrée.",
		entry_template_save_in_destination_required_message: "Vous devez spécifier un emplacement de sauvegarde par défaut dans la section <b>Définir l'emplacement de stockage des éléments</b>.",
		entry_template_save_in_destination_must_select_folder: "Si vous masquez la zone <b>Sauvegarder dans</b> et que vous avez besoin que les utilisateurs ajoutent de nouveaux éléments à un dossier, sélectionnez le dossier dans la zone <b>Emplacement de sauvegarde par défaut</b> de la section <b>Définir l'emplacement de stockage des éléments</b>.",
		entry_template_what_to_save_required_message: "Sélectionnez au moins un choix pour l'élément que vous souhaitez sauvegarder dans Set Options.",
		entry_template_custom_workflow_empty_message: "Si vous sélectionnez <b>Flux de travaux personnalisé...</b>, vous devez rechercher et sélectionner le flux de travaux que vous souhaitez utiliser.",

		entry_template_new: "Nouveau modèle d'entrée",
		entry_template_name_hover: "Le nom du modèle d'entrée ne doit pas contenir l'un des caractères suivants : * \\ / : ? \" < > |",
		entry_template_name_invalid: "Le nom du modèle d'entrée ne peut pas contenir les caractères suivants : * \\ / : ? \" < > |",
		entry_template_description_hover: "Entrez une description qui permettra aux utilisateurs de faire la distinction entre ce modèle d'entrée et les autres modèles d'entrée.",
		entry_tempalte_save_in_hover: "Indiquez l'emplacement où sauvegarder le modèle d'entrée.<br><br><b>Restriction :</b> Si vous sauvegardez le modèle d'entrée dans un espace d'équipe, vous ne pouvez utiliser le modèle d'entrée qu'au sein de l'espace d'équipe.",
		entry_template_inherit_hover: "Si vous sélectionnez cette option, les paramètres de sécurité du dossier parent sont ajoutés à la liste des utilisateurs et des groupes parmi lesquels le modèle d'entrée est partagé.",
		entry_template_builder_aria_label: "Générateur de modèle d'entrée",
		entry_template_builder_layout_aria_label: "Générateur de propriétés du modèle d'entrée",

		entry_template_settings_document: "Définir le modèle d'entrée",
		entry_template_settings_folder: "Définir l'emplacement de stockage des éléments",
		entry_template_settings_folder_intro: "Indiquez l'emplacement de stockage des éléments qui sont ajoutés à l'aide de ce modèle d'entrée.",
		entry_template_settings_properties: "Définir les propriétés d'élément",
		entry_template_settings_properties_intro: "Vous pouvez indiquer les valeurs par défaut ou prédéfinies pour les éléments qui sont ajoutés à l'aide de ce modèle d'entrée. En outre, vous pouvez modifier la disposition des propriétés pour contrôler quelles propriétés sont affichées et l'ordre dans lequel elles sont affichées.",
		entry_template_settings_workflow: "Configurer un flux de travaux pour l'élément",
		entty_template_settings_workflow_intro: "Vous pouvez indiquer si un flux de travaux est lancé lorsque les éléments sont ajoutés à l'aide du modèle d'entrée.",
		entry_template_settings_security: "Définir la sécurité des éléments",
		entry_template_settings_security_intro: "Vous pouvez indiquer la sécurité par défaut ou prédéfinie pour les éléments qui sont ajoutés à l'aide de ce modèle d'entrée. Les utilisateurs dotés des droits appropriés peuvent être en mesure de modifier la sécurité de l'élément une fois qu'il a été ajouté.",
		entry_template_settings_options: "Définir les options pour l'élément",
		entry_template_xt_warning: "Sauvegarder les modifications à ce modèle d'entrée le convertira d'un modèle d'entrée IBM Workplace XT en un modèle d'entrée IBM Content Navigator. IBM Workplace XT ne prend pas en charge les modèles d'entrée IBM Content Navigator.",

		entry_template_properties_edit_layout: "Editer la présentation...",
		entry_template_properties_read_only: "En lecture seule",
		entry_template_properties_hidden: "Masquée",

		entry_template_destination_show: "Afficher la zone <b>Sauvegarder dans</b>",
		entry_template_destination_show_hover: "Si vous affichez la zone <b>Sauvegarder dans</b>, les utilisateurs peuvent modifier l'emplacement de stockage des éléments.",
		entry_template_destination_hide: "Masquer la zone <b>Sauvegarder dans</b>",
		entry_template_destination_hide_hover: "Si vous masquez la zone <b>Sauvegarder dans</b>, les utilisateurs ne peuvent pas modifier l'emplacement de stockage des éléments.",
		entry_template_folder_save_in_default: "Emplacement <b>Sauvegarder dans</b> par défaut :",
		entry_template_folder_save_in_default_hover: "Indiquez l'emplacement par défaut dans lequel les éléments sont ajoutés à l'aide de ce modèle d'entrée.<br><br>L'emplacement par défaut que vous sélectionnez impose des restrictions sur le comportement d'exécution du modèle d'entrée :<ul><li>Les utilisateurs ne peuvent pas sélectionner un autre référentiel.</li><li>Si l'emplacement par défaut est un espace d'équipe, les utilisateurs ne peuvent pas sélectionner un autre espace d'équipe.</li></ul>Toutefois, si les utilisateurs associent ce modèle d'entrée à un dossier, ils peuvent remplacer l'emplacement de stockage qui est configuré pour ce modèle d'entrée.",
		entry_template_folder_restrict_choice: "Nécessite que les utilisateurs ajoutent les éléments à l'emplacement par défaut ou à un dossier enfant de l'emplacement par défaut",
		entry_template_folder_file_in_required: "Demander aux utilisateurs d'ajouter de nouveaux éléments à un dossier",
		entry_template_folder_file_in_required_hover: "Si vous ne sélectionnez pas cette option, les utilisateurs peuvent ajouter des éléments au dossier racine du référentiel.<br><br><b>Restriction :</b> La configuration du bureau peut nécessiter que les utilisateurs sélectionnent un dossier.",

		entry_template_document_type_show: "Afficher la zone <b>Que voulez-vous sauvegarder</b>",
		entry_template_document_type_show_hover: "Si vous affichez la zone <b>Que voulez-vous sauvegarder</b>, les éléments que vous sélectionnez s'affichent sous forme d'options dans la zone <b>Que voulez-vous sauvegarder</b>.",
		entry_template_document_type_hide: "Masquer la zone <b>Que voulez-vous sauvegarder</b>",
		entry_template_document_type_hide_hover: "Si vous masquez la zone <b>Que voulez-vous sauvegarder</b>, le type de document que vous sélectionnez est toujours utilisé lorsque les utilisateurs ajoutent des documents à l'aide de ce modèle d'entrée.",
		entry_template_document_type: "Ce modèle d'entrée peut être utilisé pour ajouter les éléments suivants :",
		entry_template_document_type_hover: "Si vous affichez la zone <b>Que voulez-vous sauvegarder</b>, les éléments que vous sélectionnez s'affichent sous forme d'options dans la zone <b>Que voulez-vous sauvegarder</b>.<br><br>Si vous masquez la zone <b>Que voulez-vous sauvegarder</b>, le type de document que vous sélectionnez est toujours utilisé lorsque les utilisateurs ajoutent des documents à l'aide de ce modèle d'entrée.",

		entry_template_misc: "Options supplémentaires :",
		entry_template_auto_classify_show: "Classer automatiquement le contenu du document",
		entry_template_auto_classify_show_hover: "Lorsqu'un document est classé sur FileNet Content Manager, son contenu est examiné afin de déterminer la classe et les valeurs de propriété appropriées pour le document.<br><br>Contactez votre administrateur système pour déterminer si la classification de contenu est activée sur Content Platform Engine.<br><br>Si vous activez cette option, la classe et les propriétés du document pourraient être modifiées lorsqu'un utilisateur ajoute le document au référentiel.",
		entry_template_allow_duplicate_file_names: "Autoriser les documents avec des noms de fichier en double",
		entry_template_allow_duplicate_file_names_hover: "Par défaut, vous pouvez ajouter des documents de même nom dans un dossier de FileNet Content Manager. Vous pouvez désélectionner cette option si vous souhaitez que chaque fichier dans l'emplacement de stockage sélectionné ait un nom unique.",
		entry_template_allow_compound_documents: "Autoriser ce document à être le parent d'un document composite",
		entry_template_version_show: "Afficher les options de version pour l'ajout et la restitution",
		entry_template_version_hide: "Masquer les options de version pour l'ajout et la restitution",
		entry_template_version_to_add_as: "Version par défaut à ajouter en tant que :",
		entry_template_version_default: "Option de version par défaut :",
		entry_template_version_default_checked: "Version principale",
		entry_template_version_default_unchecked: "Version secondaire",
		entry_template_version_display: "Version du document :",
		entry_template_version_display_show: "Afficher",
		entry_template_version_display_hide: "Masquer",
		entry_template_version_default_add: "Version par défaut à ajouter en tant que :",

		entry_template_checkin_version_show: "Afficher les options de version pour la restitution",
		entry_template_checkin_version_hide: "Masquer les options de version pour la restitution",

		entry_template_checkin_version_message_no_versions: "La règle de version de la classe sélectionnée empêche les utilisateurs de restituer une nouvelle version du document.",
		entry_template_checkin_version_message_always_version: "La règle de version de la classe sélectionnée empêche les utilisateurs de remplacer la version en cours du document.",

		entry_template_applied: "Utilisez ce modèle d'entrée lorsque les utilisateurs :",
		entry_template_applied_add: "Ajouter des documents (obligatoire)",
		entry_template_applied_add_folder: "Créer des dossiers (obligatoire)",
		entry_template_applied_checkin: "Restituer",
		entry_template_applied_properties_group: "Afficher ou modifier des propriétés",
		entry_template_applied_properties: "Dans la fenêtre Propriétés",
		entry_template_applied_viewer: "Dans l'afficheur d'applet",
		entry_template_applied_docinfo: "Dans le panneau d'informations du document",
		entry_template_applied_no_class_support: "Ce modèle d'entrée peut être utilisé pour ajouter des éléments, mais pas pour restituer des documents ni pour afficher ou modifier des propriétés. La classe sélectionnée doit être modifiée de manière à prendre en charge ces situations. Si vous avez besoin d'utiliser le modèle d'entrée dans ces situations, demandez à votre administrateur d'utiliser l'outil d'administration pour modifier la classe de manière à pouvoir stocker les ID de modèle d'entrée.",
		entry_template_applied_no_child_component_support: "La classe sélectionnée compte des composants enfant et une présentation de propriété est définie. Les présentations de propriété ne prennent pas en charge les composants enfant. Les composants enfant ne seront pas affichés à l'utilisateur.",
		entry_template_applied_child_component: "La classe sélectionnée comporter des composants enfant. Ils seront affichés à l'utilisateur, mais vous ne pourrez pas configurer les composants enfant dans ce modèle d'entrée.",

		entry_template_properties_show: "Afficher la section <b>Propriétés</b>",
		entry_tempalte_properties_show_hover: "Si vous affichez la section <b>Propriétés</b>, les utilisateurs peuvent modifier toutes les valeurs de propriété qui sont affichées dans le modèle d'entrée et qui ne sont pas des propriétés en lecture seule.",
		entry_template_properties_hide: "Masquer la section <b>Propriétés</b>",
		entry_template_properties_hide_hover: "Si vous masquez la section <b>Propriétés</b>, les utilisateurs ne peuvent pas modifier les valeurs de propriété. Le modèle d'entrée doit définir toutes les valeurs que vous souhaitez utiliser lorsque les éléments sont ajoutés à l'aide de ce modèle d'entrée.",

		entry_template_security_show: "Afficher la section <b>Sécurité</b>",
		entry_template_security_show_hover: "Si vous affichez la section <b>Sécurité</b>, les utilisateurs qui disposent des droits appropriés peuvent modifier la sécurité de l'élément.",
		entry_template_security_hide: "Masquer la section <b>Sécurité</b>",
		entry_template_security_hide_hover: "Si vous masquez la section <b>Sécurité</b>, les utilisateurs ne peuvent pas masquer la sécurité des éléments. Le modèle d'entrée doit définir tous les paramètres de sécurité que vous souhaitez utiliser lorsque les éléments sont ajoutés ou modifiés.",
		entry_template_security_policy: "Politique de sécurité :",
		entry_template_security_policy_hover: "Selon la politique de sécurité que vous sélectionnez, la politique de sécurité peut :<br><ul><li>Remplacer les droits qui sont spécifiés dans <b>Définir la sécurité des éléments</b>.</li><li>Ajouter un droit aux droits qui sont spécifiés dans <b>Définir la sécurité des éléments</b>.</li></ul>",
		entry_template_security_policy_none: "Pas de politique de sécurité sélectionnée",
		entry_template_security_inherit: "Hériter les paramètres de sécurité du dossier parent",
		entry_tempalte_save_in_hover: "Indiquez l'emplacement où sauvegarder le modèle d'entrée.<br><br><b>Restriction :</b> Si vous sauvegardez le modèle d'entrée dans un espace d'équipe, vous ne pouvez utiliser le modèle d'entrée qu'au sein de l'espace d'équipe.",
		entry_template_security_inherit_item_security_hover: "Si vous sélectionnez cette option, les paramètres de sécurité du dossier parent sont ajoutés aux paramètres de sécurité définis par l'un des éléments suivants :<ul><li>La classe qui est spécifiée dans la section <b>Définir les propriétés d'élément</b></li><li>La sécurité personnalisée que vous avez spécifié dans la section <b>Définir la sécurité des éléments</b></li></ul>",
		entry_template_security_change: "Remplacer la sécurité définie par la classe sélectionnée",
		entry_template_security_change_hover: "Si vous sélectionnez cette option, les paramètres de sécurité définis pour la classe sont affichés par défaut. Vous pouvez ensuite modifier les paramètres de sécurité du modèle d'entrée.<br><br>Si vous affichez la section <b>Sécurité</b>, les utilisateurs qui disposent des droits appropriés peuvent modifier la sécurité de l'élément.<br><br>Si vous sélectionnez cette option et choisissez d'hériter les paramètres de sécurité du dossier parent, tout droit héritable sera ajouté à la sécurité que vous indiquez.",
		entry_template_security_default_item_security: "Remplacer la sécurité de l'élément par défaut de l'utilisateur qui ajoute l'élément",
		entry_template_security_policy_message_override: "La politique de sécurité sélectionnée est configurée pour remplacer les autorisations qui sont spécifiées sous Set Security.",
		entry_template_security_policy_message_add: "La politique de sécurité sélectionnée est configurée pour être ajoutée aux autorisations qui sont spécifiées sous Set Security.",
		entry_template_security_policy_preserve_true_hover: "Conserve l'autorisation directe",
		entry_template_security_policy_preserve_false_hover: "Ne pas conserver l'autorisation directe",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Rôles spécifiques",
		entry_template_security_class_role_search_title: "Rechercher des rôles :",
		entry_template_secuirty_class_member_title: "Liste des membres de ${0}",
		entry_template_secuirty_class_folder_only: "Ces droits s'appliquent uniquement à ce dossier",
		entry_template_secuirty_class_folder_and_immediate_children: "Ces droits s'appliquent à ce dossier et à ses enfants immédiats configurés pour hériter de sa sécurité.",
		entry_template_secuirty_class_folder_and_all_children: "Ces droits s'appliquent à ce dossier et à tous ses descendants configurés pour hériter de sa sécurité. ",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Ces droits s'appliquent aux enfants immédiats de ce dossier configurés pour hériter de sa sécurité",
		entry_template_secuirty_class_folder_all_children_not_folder: "Ces droits s'appliquent à tous les descendants de ce dossier configurés pour hériter de sa sécurité",

		entry_template_class_security_message_no_override: "La sécurité de la classe sélectionnée empêche les utilisateurs de remplacer la sécurité.",
		entry_template_class_security_required_privileges: "<b>Important</b> : lorsque vous remplacez la sécurité de la classe sélectionnée, les utilisateurs qui ajoutent des éléments grâce à ce modèle d'entrée doivent disposer des privilèges ItemSetACL et UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Flux de travaux à motif séquentiel",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Flux de travaux à motif parallèle",
		entry_template_workflow_type_existing: "Flux de travaux personnalisé...",
		entry_template_workflow_launch_prompt: "Demander aux utilisateurs si le flux de travaux doit être lancé",
		entry_template_workflow_launch_auto: "Lancer automatiquement le flux de travaux",
		entry_template_workflow_modify_launch: "Autoriser les utilisateurs à modifier l'étape de lancement",
		entry_template_workflow_modify_launch_hover: "Sélectionnez cette option si vous souhaitez autoriser les utilisateurs à modifier la manière dont le flux de travaux est lancé.",

		entry_template_optionsButton_title: "Modifier",
		entry_template_optionsButton_readonly_title: "Afficher l'association",
		entry_template_optionsDialog_title: "Paramètres d'association du dossier",
		entry_template_removeButton_title: "Retirer",
		entry_template_addButton_title: "Ajouter",
		entry_template_selected_entry_templates: "Modèles d'entrée sélectionnés",
		entry_template_docs_added_to_template_destination: "Les documents sont ajoutés à la destination spécifiée dans le modèle d'entrée.",
		entry_template_docs_added_to_other_object_store: "Ce modèle d'entrée ajoute des éléments au conteneur d'objets ${0}.",
		entry_template_inherited_entry_templates_label: "Vous souhaitez : ",
		entry_template_inherited_entry_templates: "Hériter des associations de modèle d'entrée à partir du dossier : ",
		entry_template_inherited_entry_templates_not: "Créer de nouvelles associations pour ce dossier",
		entry_template_inherited_folder_path: "Les modèles d'entrée de la liste des modèles d'entrée sélectionnés sont associés au dossier suivant : ${0}. <br> Le chemin du dossier est ${1}.",
		entry_template_folder_associations_title: "Associer des modèles d'entrée",
		entry_template_folder_associations_intro: "Lorsque vous associez un modèle d'entrée à un dossier, les utilisateurs doivent utiliser le modèle d'entrée pour ajouter des éléments au dossier. Si vous associez plusieurs modèles d'entrée à un dossier, les utilisateurs peuvent sélectionner le modèle d'entrée à utiliser.",
		entry_tempalte_folder_associations_entrytemplate: "Modèle d'entrée : ",
		entry_template_avaliable_entry_templates: "Modèles d'entrée disponibles",
		entry_template_fileTypes_intro_title: "Types de fichiers autorisés :",
		entry_template_fileTypes_intro: "Par défaut, un modèle d'entrée peut être utilisé pour ajouter tout type de document au référentiel. Toutefois, si vous sélectionnez un ou plusieurs types de fichier, les modèles d'entrée sont disponibles uniquement lorsque les utilisateurs ajoutent des documents qui correspondent à l'un des types de fichier spécifiés.",
		entry_template_fileTypes: "Types de fichier",
		entry_template_fileType_error: "Les types de fichier non valides sont sélectionnés pour une ou plusieurs associations de modèle d'entrée. Vous devez supprimer les types de fichier non valides pour que ces associations de modèle d'entrée puissent être sauvegardés.",
		entry_template_fileTypes_any_type_of_file: " Tout type de fichier",
		entry_template_description_label: "Description",
		entry_template_ItemInfoPrefix: "Associer à : ",
		entry_template_TargetObjectStoreName: "Librairie cible",
		entry_template_class: "Classe",
		entry_template_current_folder_as_parent: "Utiliser le dossier en destination",
		entry_template_view_minetypes: "Afficher les types MIME",
		entry_template_avaliable_MIME_types: "Types de fichier disponibles",
		entry_template_selected_MIME_types: "Types de fichier sélectionnés",
		entry_template_MIME_type_column: "Nom de catégorie de type de fichier",
		entry_template_file_type_not_existing: "Veuillez supprimer les types de fichier non valides.",
		entry_template_MIME_types: "Types MIME :",
		entry_template_MIME_types_info_dialog_title: "Les types MIME pour",
		entry_template_destination_label: "Ajouter les documents à: ",
		entry_template_destination_help: "Indiquez l'emplacement auquel les documents sont stockés sur le référentiel lorsque des utilisateurs ajoutent des documents à ce dossier en utilisant le modèle d'entrée sélectionné.",
		entry_template_radioButton_folder_destination: "Dossier sélectionné",
		entry_template_radioButton_template_destination: "Destination spécifiée dans le modèle d'entrée",
		entry_tempalte_teamspace_default: "Modèle d'entrée par défaut",
		entry_template_folder_associations_save_new: "Vous avez modifié certaines associations de modèle d'entrée. Voulez-vous fermer la fenêtre sans sauvegarder vos modifications ?",
		entry_template_mode_binding_label: "Propriétés",
		entry_template_columns_className: "Nom de classe",
		entry_template_columns_type: "Type de modèle",
		entry_template_columns_workflow: "Nom du flux de travaux",
		entry_template_columns_destination: "Destination",
		entry_template_association_less_than_record: "${0} modèles de données ne sont pas répertoriés dans les modèles d'entrée sélectionnés. Vous ne possédez pas le droit de les afficher. Ils peuvent également être supprimés. Contactez votre administrateur système pour obtenir plus d'informations.",
		/* Request */

		progress_message_general: "En cours...",
		cancel_message_general: "L'action a été annulée.",
		ie8_not_supported_browser: "Le navigateur IE8 n'est pas pris en charge.",
		progress_message_getDesktop: "Chargement du bureau...",
		progress_message_getActions: "Chargement des actions...",
		progress_message_getViewers: "Chargement du bureau...",
		progress_message_logon: "Connexion en cours...",
		progress_message_logoff: "Déconnexion...",
		progress_message_getContentClasses: "Récupération de classes...",
		progress_message_openContentClass: "Récupération de détails de classes...",
		progress_message_od_getCabinets: "Récupération d'armoires...",
		progress_message_getSearchTemplates: "Récupération de recherches...",
		progress_message_od_getTemplates: "Récupération de dossiers...",
		progress_message_od_openCabinet: "Récupération de dossiers...",
		progress_message_openSearchTemplate: "Ouverture de la recherche...",
		progress_message_od_openTemplate: "Ouverture du dossier...",

		progress_message_getWorklists: "Récupération des listes de travail...",
		progress_message_getWorkItems: "Récupération des éléments de travail...",
		progress_message_getNextWorkItems: "Récupération des éléments de travail...",
		progress_message_getStepParameters: "Récupération des informations d'élément de travail...",
		progress_message_getStepAttachmentItems: "Récupération des informations de pièce jointe...",
		progress_message_getDependentParameters: "Récupération des informations de propriété...",

		progress_message_p8_getProcessApplicationSpaces: "Récupération des espaces d'application...",
		progress_message_p8_getProcessRoles: "Récupération des rôles de processus...",
		progress_message_p8_getProcessInbaskets: "Récupération des boîtes de réception...",
		progress_message_p8_getProcessorInformation: "Récupération des informations de processus...",
		progress_message_p8_getFilterCriteria: "Récupération du filtre de la boîte de réception...",
		progress_message_p8_getLaunchParameters: "Récupération des informations d'élément de travail...",
		progress_message_p8_getStepAttachments: "Récupération des pièces jointes d'élément de travail...",
		progress_message_p8_getSubscriptions: "Récupération des souscriptions de flux de travaux...",
		progress_message_p8_getTrackerParameters: "Récupération des informations d'élément de travail...",
		progress_message_p8_getTrackerHistory: "Récupération de l'historique des éléments de travail...",
		progress_message_p8_getTrackerMilestones: "Récupération des jalons d'élément de travail...",
		progress_message_p8_completeStep: "Achèvement de l'élément de travail...",
		progress_message_p8_moveToInbox: "Déplacement de l'élément dans la boîte de réception...",
		progress_message_p8_returnToSender: "Renvoi de l'élément de travail...",
		progress_message_p8_reassign: "Réaffectation de l'élément de travail...",
		progress_message_p8_launchWorkflow: "Lancement du flux de travaux...",
		progress_message_p8_getTransferedWorkflows: "Extraction des informations de flux de travaux...",

		progress_message_cm_getProcesses: "Extraction des informations de flux de travaux...",
		progress_message_cm_completeStep: "Continuation de l'élément de travail...",
		progress_message_cm_getItemProcessInformation: "Extraction des informations de flux de travaux...",

		progress_message_search: "Recherche...",
		cancel_message_search: "La recherche a été annulée.",
		progress_message_getContentItems: "Récupération des informations d'élément...",
		progress_message_openFolder: "Ouverture du dossier...",
		progress_message_addItem: "Création de l'élément...",
		progress_message_checkIn: "Restitution de l'élément...",
		progress_message_changePassword: "Modification du mot de passe...",
		progress_message_getDefaultInstancePermissions: "Récupération des droits par défaut...",
		progress_message_openItem: "Récupération des informations d'élément...",
		progress_message_saveItem: "Sauvegarde des informations d'élément...",
		progress_message_getPermissions: "Récupération des droits...",
		progress_message_getEntryTemplates: "Récupération des modèles d'entrée...",
		progress_message_openEntryTemplate: "Ouverture du modèle d'entrée...",
		progress_message_getFavorites: "Récupération des favoris...",
		progress_message_getFoldersFiledIn: "Récupération de dossiers...",
		progress_message_getDocumentVersions: "Récupération de versions...",
		progress_message_getDependentAttributeInfo: "Récupération d'informations d'attribut...",
		progress_message_packageForDownload: "Conditionnement pour téléchargement...",
		progress_message_convertDocument: "Conversion du contenu...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Récupération du type de contenu...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Ajout du document...",

		progress_message_desktop_reload: "Le client recharge votre bureau.<br>Vous serez peut-être invité à vous reconnecter.",
		progress_message_email: "Envoi de l'e-mail...",
		cancel_message_email: "L'e-mail a été annulé.",

		progress_message_p8_getOfficeOnlineTemplates: "Extraction des modèles Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Arborescence des favoris",
		favorites_content_list_label: "Liste de contenus des favoris",
		syncItems_tree_label: "Arborescence Mes fichiers synchronisés",
		syncItems_content_list_label: "Liste de contenu Mes fichiers synchronisés",
		my_checkouts_content_list_label: "Liste de contenu Mes réservations",
		browse_tree_label: "Arborescence de parcours",
		browse_content_list_label: "Liste de contenus de parcours",
		repository_selector_label: "Sélecteur de référentiel",
		teamspaces_content_list_label: "Liste de contenus d'espaces d'équipe",
		templates_content_list_label: "Liste de contenus de modèles",
		work_content_list_label: "Liste de contenus de travaux",
		work_tree_label: "Arborescence des travaux",
		admin_tree_label: "Arborescence d'administration",
		admin_tabs_label: "Onglets d'administration",
		search_tabs_label: "Onglets de recherche",
		search_selector_label: "Sélecteur de recherche",
		teamspace_browse_content_list_label: "Liste de contenus de parcours d'espaces d'équipe",
		teamspace_search_tabs_label: "Onglets de recherche d'espaces d'équipe",

		/* Desktop */
		undo_description: "Annuler ${0}",
		redo_description: "Rétablir ${0}",

		/* Application Tabs */
		home: "Accueil",
		repository: "Référentiel",
		repository_type: "Type de référentiel :",
		repository_type_header: "Type de référentiel",
		repository_type_any: "Tous les référentiels",
		repository_type_contains_label: "Le type de référentiel contient",
		document_info: "Informations sur le document",
		team: "Equipe",
		administration: "Administration",

		/* Home Page */
		recent_activity: "Activité récente",
		repos_and_wrksp: "Référentiels et espaces d'équipe",
		workspaces: "Espaces d'équipe",
		repositories: "Référentiels",
		templates: "Modèles",
		favorites: "Favoris",
		my_checkouts: "Mes réservations",
		mySyncedFiles: "Mes fichiers synchronisés",
		links: "Liens",
		name_label: "Nom",
		description_label: "Description :",
		type_label: "Type :",
		type_heading: "Type",
		type_id_label: "ID de type",
		server_type_icon: "Icône de type de serveur",
		server_type_heading: "Type de serveur",
		server_type: "Type de serveur",
		port_heading: "Numéro de port",
		port_label: "Numéro de port :",
		server_name_heading: "Nom de serveur",
		server_label: "Nom du serveur :",
		server_url_label: "URL du serveur :",
		id_label: "ID :",
		id_heading: "ID",
		connected_label: "Connecté :",
		repository_label: "Référentiel",
		modified_label: "Modifié par :",
		modified_date_label: "Modifié le :",
		status_label: "Statut :",
		last_modified_label: "Dernière modification effectuée par :",

		modifier: "Modifié par",
		modified_date: "Modifié le",

		/* Favorites */
		new_favorite_label: "Ajouter aux favoris",
		edit_favorite_label: "Renommer un favori",
		remove_favorite_label: "Retirer des favoris",
		missing_alias_message: "Vous devez indiquer un nom.",
		sync_favorite_enable_hover: "Cet élément est activé pour la synchronisation.",
		sync_favorite_disable_hover: "Cet article n'est pas en cours de synchronisation.",
		sync_favorite_sync_unavailable_hover: "La synchronisation n'est pas disponible pour ce type d'objet.",
		sync_enable_label: "Synchroniser cet élément",
		sync_enable_label_hover: "Cet élément sera synchronisé sur vos périphériques.",
		delete_favorite_confirmation_question: "Voulez-vous supprimer cet élément de vos favoris ?",
		alias_label: "Nom :",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "L'élément sélectionné se trouve déjà dans vos favoris.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Cet élément ne peut pas être ajouté à votre liste de favoris.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Vous pouvez stocker uniquement ${0} favoris.",
		add_favorite_max_reached_response: "Si vous souhaitez ajouter cet élément à votre liste de favoris, vous devez auparavant supprimer un favori existant.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Les documents sélectionnés ne peuvent pas être convertis au format PDF.",
		download_as_pdf_max_content_error_explanation: "Vous ne pouvez pas convertir plus de ${0} Mo de données au format PDF. Toutefois, les documents sélectionnés dépassent ${0} Mo.",
		download_as_pdf_max_content_error_response: "Sélectionnez moins de documents ou sélectionnez des documents de plus petite taille, puis téléchargez-les à nouveau en tant que fichiers PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Les documents sélectionnés ne peuvent pas être convertis en un seul fichier PDF.",
		download_as_pdf_mimetype_check_error_explanation: "Pour convertir un document formés de plusieurs éléments en un fichier PDF unique, chaque élément doit être du même type MIME.",
		download_as_pdf_mimetype_check_error_response: "Sélectionnez un autre document à convertir au format PDF.",

		/* Activity Stream */
		show_label: "Afficher :",
		all_filter: "Tout",
		notifications_filter: "Notifications",
		workitems_filter: "Eléments de travail",
		documentes_filter: "Documents",
		all_favorites_filter: "Tous les favoris",
		folders_filter: "Dossiers",
		searches_filter: "Recherches",
		teamspaces_filter: "Espaces d'équipe",

		/* Repository */
		all_search_templates: "Toutes les recherches",
		all_od_searches: "Tous les modèles de recherche",
		recent_searches: "Recherches récentes",
		opened_searches: "Recherches ouvertes",

		all_worklists: "Toutes les boîtes de réception",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Liste de toutes les listes de travaux",

		/* Teamspace */
		all_workspaces: "Tous les espaces d'équipe",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Liste de tous les espaces d'équipe",
		workspace_title: "Espace d'équipe",
		workspace_icon: "Icône d'espace d'équipe",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponible",
		workspace_stat_offline: "Non disponible",
		workspace_stat_validate: "Nécessite une validation",
		workspace_stat_pendingDelete: "Suppression en attente",
		workspace_stat_deleteError: "Echec de la suppression",

		undefined_value: "Non défini",
		undefined_reference_value: "Aucune référence n'est définie.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Il est possible que davantage de résultats soient disponibles sur le serveur.",
		search_all_data: "Rechercher dans toutes les données.",
		search_all_teamspaces: "Rechercher dans tous les espaces d'équipe.",
		teamspace_filter_results: "Affichage de ${0} résultats. ",
		displaying_filtered_results: "Affichage des résultats filtrés. ",
		displaying_recent_results: "Afficher uniquement les espaces d'équipe qui ont été modifiés au cours des ${0} derniers jours. Pour rechercher d'autres espaces d'équipe, filtrez la liste des espaces d'équipe par le nom ou la description. ",
		clear_filter: "Effacer le filtre.",

		/* FolderTreeModel */
		move_item_task: "Déplacer l'élément",
		copy_item_task: "Copier l'élément",
		add_item_task: "Ajouter l'élément",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "Le dossier suivant est introuvable : ${0}. Il a peut-être été supprimé, ou le dossier ne peut pas être ouvert à partir de cette vue. Cliquez sur le lien Plus à partir de la vue de l'arborescence pour accéder au dossier. Si vous ne pouvez pas afficher le dossier, actualisez la vue de liste de contenu.",
		more_paging_link: "plus ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Statut",
		status_dialog_cancel_label: "Annuler",

		/* ErrorDialog */
		error_dialog_title: "Erreur",
		error_dialog_icon_tooltip: "Erreur",
		error_dialog_stack_trace_title: "Trace de pile",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Confirmation",

		close_browser_msg: "Fermez la fenêtre du navigateur.",

		/* MessageDialog */
		message_dialog_title: "Informations",
		warning_dialog_title: "Avertissement",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Bienvenue dans ${0}",
		server: "Référentiel :",
		username: "Nom d'utilisateur :",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Un nom d'utilisateur est requis pour la connexion au référentiel.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Un mot de passe est requis pour la connexion au référentiel.",
		password: "Mot de passe :",
		login: "Se connecter",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Votre session a expiré. Reconnectez-vous.",
		login_repository_connection_expired_message: "Votre connexion au référentiel ${0} est arrivée à expiration. Reconnectez-vous.",
		login_site_connection_expired_message: "Votre connexion au site est arrivée à expiration. Reconnectez-vous.",
		login_new_server_message: "Entrez un nom d'utilisateur et un mot de passe pour ${0}.",
		login_error_more_information_message: "Plus d'informations",

		disconnect_box_account_user: "Déconnecter le compte Box : ${0}",
		disconnect_box_account: "Déconnecter un compte Box",
		disconnect_box_accounts: "Déconnecter des comptes Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Une connexion SSL est requise pour l'accès au référentiel Box.",
		login_oauth_popup_blocked: "La fenêtre en incrustation a été bloquée. Pour vous connecter, il vous faudra peut-être débloquer les fenêtres en incrustation dans votre navigateur.",
		login_oauth_click_here: "Si vous n'êtes pas redirigé dans les 5 secondes, cliquez ici.",
		login_oauth_title: "Se connecter",
		login_oauth_grant_intro: "Octroyer authentification pour ${0}.",
		login_pane_oauth_click_here: "Cliquez ici pour vous connecter.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "Voulez-vous vous déconnecter du client Web ?",
		logout_confirmation_button: "Se déconnecter",

		/* ChangeLocaleDialog */
		change_locale: "Modifier la langue et les paramètres régionaux",
		change_locale_use_browser_language: "Utiliser les paramètres linguistiques du navigateur (par défaut)",
		change_locale_use_browser_locale: "Utiliser les paramètres linguistiques du navigateur (par défaut)",
		change_locale_description: "Si vous supprimez les cookies du navigateur, vous devrez réinitialiser vos paramètres linguistiques et régionaux.",
		change_locale_language_locale: "Langage de l'application :",
		change_locale_language_locale_hover: "Ce paramètre modifie la langue du texte du client Web, mais pas celle des documents dans l'application.<br><br>Le paramètre par défaut utilise la langue indiquée dans les options de configuration de votre navigateur Web.",
		change_locale_value_format_locale: "Paramètres régionaux de l'application :",
		change_locale_value_format_locale_hover: "Les paramètres régionaux déterminent le format des dates, des heures et des nombres dans le client Web.<br><br>Le paramètre par défaut utilise les formats associés à la langue indiquée dans les options de configuration de votre navigateur Web.",
		change_locale_for_office: "Paramètres de texte bidirectionnel :",
		change_locale_bidi_support_flag: "Activer le support bidirectionnel",
		change_locale_bidi_support_flag_hover: "Lorsque le support bidirectionnel est activé, l'utilisateur peut définir la direction du texte utilisé dans les zones d'entrée.  Le texte entré pour des éléments tels que les dossiers, par exemple, serait affiché dans la même direction que celle avec laquelle il a été entré.",
		change_locale_base_text_direction: "Direction de base du texte du contenu :",
		change_locale_base_text_direction_hover: "Définissez le sens du texte en entrée dans les zones de saisie.  Ceci contrôle également la direction d'affichage des libellés qui ont été entrés par l'utilisateur, tels que les noms de dossier.",
		change_locale_calendar_type: "Type de calendrier :",
		change_locale_calendar_type_hover: "Sélectionnez le type de calendrier qui sera utilisé pour la session utilisateur.",
		change_locale_base_text_direction_default: "Par défaut",
		change_locale_base_text_direction_ltr: "De gauche à droite",
		change_locale_base_text_direction_rtl: "De droite à gauche",
		change_locale_base_text_direction_contextual: "Contextuel",
		change_locale_calendar_type_gregorian: "Grégorien",
		change_locale_calendar_type_hijri: "Hégirien",
		change_locale_calendar_type_hebrew: "Hébreu",
		change_locale_calendar_type_Umm_al_Qura: "Oumm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Modifier le mot de passe",
		change_password_title: "Modifier le mot de passe",
		change_password_expired_title: "Mot de passe arrivé à expiration",
		change_password_message: "Entrez un nouveau mot de passe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "Votre mot de passe est arrivé à expiration. Entrez un nouveau mot de passe.",
		change_password_password_rules: "Règles d'administration de mot de passe",
		change_password_old_password: "Ancien mot de passe :",
		change_password_new_password: "Nouveau mot de passe :",
		change_password_confirm_password: "Confirmer le mot de passe :",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Vous devez entrer votre ancien mot de passe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Vous devez entrer un nouveau mot de passe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Vous devez confirmer votre nouveau mot de passe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Les mots de passe doivent correspondre.",

		/* GlobalToolbar */
		actions: "Actions",
		actions_label: "Actions :",
		open_actions_label: "Actions d'ouverture :",

		/* About Dialog */
		about_dialog_title: "A propos de",
		about_product_name_label: "Nom de produit: ",
		about_product_version_label: "Version : ",
		about_product_build_label: "Génération : ",
		about_product_license: "Eléments sous licence - Propriété d'IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Tous droits réservés. Droits restreints du gouvernement des Etats-Unis. L'utilisation, la reproduction ou la publication sont soumises à des restrictions définies dans l'accord « GSA ADP Schedule Contract » avec IBM Corporation. IBM et le logo IBM sont des marques d'International Business Machine Corporation aux Etats-Unis et/ou dans certains autres pays. Le présent Logiciel est soumis aux dispositions du contrat de licence inclus dans le Logiciel. Ce contrat de licence se trouve dans un dossier du programme ou dans la bibliothèque sous le nom \"License\" ou \"Non_IBM_License\", si applicable, ou est fourni dans sa version imprimée. Veuillez lire ce contrat attentivement avant d'utiliser le programme. En utilisant le programme, vous acceptez ces termes. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "Voulez-vous supprimer l'élément sélectionné ?",
		delete_single_folder_confirmation_question: "Voulez-vous supprimer le dossier ${0} ?",
		delete_multiple_confirmation_question: "Voulez-vous supprimer les éléments sélectionnés ?<br>${0} éléments sont sélectionnés.",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Supprimer",
		search_template_delete_confirmation_question: "Voulez-vous supprimer la recherche ${0} ?",
		search_template_opened_delete_confirmation_question: "La recherche ${0} est ouverte. Si vous supprimez la recherche, elle se fermera.<br>Voulez-vous supprimer cette recherche ?",
		delete_multiple_opened_search_template_confirmation_question: "Les recherches suivantes sont ouvertes : ${0}.<br>Si vous supprimez les recherches, elles se fermeront. Voulez-vous supprimer ces recherches ?",
		delete_large_number_items_confirmation_question: "Vous avez sélectionné ${0} éléments à supprimer.<br/>La suppression d'un nombre important d'éléments peut prendre du temps.<br/>Voulez-vous continuer ?",
		delete_confirmation_entrytemplate: "La suppression de ce modèle d'entrée aura les conséquences suivantes sur les documents ou les dossiers qui sont associés au modèle d'entrée :<ul><li>Les éléments ne seront plus associés au modèle d'entrée et les utilisateurs risquent de voir s'afficher un avertissement lors de la mise à jour d'un élément.</li><li>Toutes les propriétés contrôlées par le modèle d'entrée, notamment le nom ou l'ordre des propriétés, ne s'appliqueront plus aux éléments associés au modèle d'entrée.</li></ul>Voulez-vous supprimer ce modèle d'entrée ?",
		delete_confirmation_entrytempalte_with_multi_items: "Les modèles d'entrée doivent être supprimés individuellement. Les modèles d'entrée ont été supprimés de la liste des éléments à supprimer. Pour supprimer les modèles d'entrée, vous devez supprimer chaque modèle d'entrée séparément.",

		/* Create/Apply/Remove Hold */
		hold: "Mise en attente",
		createHold: "Nouvelle mise en attente",
		applyHold: "Appliquer la mise en attente",
		removeHold: "Supprimer la mise en attente",
		showHolds_title: "Afficher les mises en attente",
		applyHoldSelectText: "Sélectionnez les mises en attente à appliquer aux éléments sélectionnés.",
		availableHolds: "Mises en attente disponibles :",
		removeHoldSelectText: "Sélectionnez les mises en attente que vous souhaitez supprimer des éléments sélectionnés.",
		appliedHolds: "Mises en attente appliquées :",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Créez une nouvelle mise en attente à appliquer aux éléments sélectionnés.",
		holdName: "Nom de la mise en attente :",
		holdDescription: "Description :",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Vous devez indiquer un nom pour la mise en attente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "Le nom de mise en attente spécifié existe déjà.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Un nom de mise en attente ne doit pas contenir l'un des caractères suivants : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Votre session arrivera à expiration dans ${0} minutes.",
		session_expire: "La session arrive à expiration",
		logoff: "Déconnexion",
		extend_session: "Etendre la session",
		admin_custom_settings: "Paramètres supplémentaires :",
		admin_custom_settings_hover_help: "enableSessionExpireWarning est un booléen indiquant si l'avertissement d'expiration de session est activé. Sa valeur par défaut est true. sessionExpireWarningTime est un entier compris entre 2 et 5 indiquant le temps d'avertissement d'expiration de session.",
		admin_custom_setting_dialog_title_new: "Nouveau paramètre",
		admin_custom_setting_dialog_title_edit: "Editer un paramètre",
		admin_custom_setting_dialog_hover_help: "Ajoutez d'autres paramètres en indiquant leur nom et leur valeur. Par exemple, vous pouvez spécifier “enableSessionExpireWarning” et “true” si vous voulez activer l'avertissement d'expiration de session.",
		admin_custom_setting_dialog_field_hover_help: "Pour plus d'informations sur les noms et les valeurs des paramètres, consultez le manuel de référence des paramètres d'IBM navigator.",
		admin_custom_setting_dialog_nameInvalid: "Cette valeur est requise. La valeur ne peut pas contenir d'espaces et ne peut pas être un doublon.",
		admin_custom_setting_dialog_bool_valueInvalid: "Cette valeur est requise. La valeur doit être un booléen.",
		admin_custom_setting_dialog_int_valueInvalid: "Cette valeur est requise. La valeur doit être un entier.",
		/* Add Document Dialog */
		add_document_dialog_title: "Ajouter un document",
		add_documents_dialog_title: "Ajouter des documents",
		add_document_general_label: "Général",
		add_document_properties_label: "Propriétés",
		add_document_properties_with_ellipsis_label: "Propriétés...",
		add_document_security_label: "Sécurité",
		add_document_location_label: "Sauvegarder dans :",
		add_document_type_label: "Que voulez-vous sauvegarder ?",
		add_document_localfile_label: "Document local",
		add_document_metadata_label: "Informations sur un document",
		add_document_external_label: "Lien vers un document externe",
		add_document_web_link_label: "Lien Web",
		add_document_saved_content_label: "Utiliser le fichier sauvegardé :",
		add_document_saved_content_choice: "Fichier sauvegardé",
		add_document_file_name_label: "Nom de fichier :",
		add_document_entry_template_label: "Modèle d'entrée :",
		add_document_delete_file_label: "Supprimer le fichier local",
		add_document_delete_file_disabled_label: "Les fichiers qui ne figurent pas dans le répertoire de suivi des fichiers ne seront pas supprimés.",
		add_document_major_version_label: "Version principale",
		add_document_major_version_hover: "Définit le statut du document sur Publié. Le document est ajouté au référentiel sous la version 1.0. Si l'option n'est pas sélectionnée, le document n'est pas prêt à être publié et est ajouté en tant que version secondaire 0.1.",
		add_document_save_document_as_unfiled_label: "Ne pas sauvegarder le document dans un dossier",
		add_document_save_document_as_unfiled_hover: "Si vous sélectionnez cette option, vous devrez lancer une recherche pour trouver ce document. Vous ne pourrez pas le localiser en parcourant l'arborescence.",
		add_document_create_new_version_label: "Créer une nouvelle version",
		add_document_replace_existing_version_label: "Remplacer une version existante",
		add_document_start_workflow_label: "Lancer le flux de travaux",
		add_document_auto_classify_label: "Classer automatiquement le contenu",
		add_document_add_label: "Ajouter",
		add_document_cancel_label: "Annuler",
		add_document_document_type_label: "Classe",
		add_document_context_info: "Les valeurs que vous entrez pour les propriétés du document peuvent être utilisées pour trouver le document ultérieurement.",
		add_documents_context_info: "Les valeurs que vous entrez pour les documents peuvent être utilisées pour trouver les documents ultérieurement. Si vous devez entrer une valeur de propriété différente pour un document, vous devez l'ajouter séparément ou éditer les propriétés du document après l'avoir ajoutée.",
		add_document_url_label: "URL :",
		add_document_template_description: "Description du modèle :",
		add_document_select_entry_template: "Entrez ou sélectionnez un modèle d'entrée",
		add_document_no_permission_to_associations: "Vous ne disposez pas des autorisations permettant de créer un modèle d'entrée",
		add_document_no_entry_template_to_use: "Aucun modèle d'entrée ne peut être utilisé pour les fichiers sélectionnés",
		add_document_no_entry_template_itemtype_permission: "Vous ne pouvez pas ajouter d'éléments à ce dossier. Un modèle d'entrée doit être sélectionné et vous n'avez accès à aucun modèle d'entrée associé à ce dossier. Contactez votre administrateur et demandez-lui de vous accorder l'accès aux modèles d'entrée associés à ce dossier.",
		add_document_appgroup_name_label: "Nom de groupe d'applications :",
		add_document_app_name_label: "Nom d'application :",
		create_folder_dialog_title: "Nouveau dossier",
		create_folder_context_info: "Les valeurs que vous entrez pour les propriétés du dossier peuvent être utilisées pour trouver le dossier ultérieurement.",
		create_folder_folder_name_label: "Nom du dossier",
		create_folder_save_folder_as_unfiled_label: "Ne pas sauvegarder le dossier dans un autre dossier",
		create_folder_save_folder_as_unfiled_hover: "Si vous sélectionnez cette option, vous devrez lancer une recherche pour trouver ce dossier. Vous ne pourrez pas le localiser en parcourant l'arborescence.",
		add_item_create_in_folder: "Créer dans le dossier :",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Un nom de dossier ne peut pas contenir les caractères suivants : \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Un nom de dossier ne peut pas contenir les caractères \\ / et ne peut pas correspondre à . ou ..",
		invalid_box_file_name_message: "Un nom de fichier ne peut pas contenir les caractères \\ / et ne peut pas correspondre à . ou ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Un nom de fichier ne peut pas contenir les caractères suivants : \\ / : * ? \" < > |",
		external_document_placeholder: "Entrez l'URL du document.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "La couleur doit être entrée sous la forme d'un nombre hexadécimal à 3 ou 6 chiffres, par exemple #000 ou #000000.",
		add_document_unfiled: "${0} déclassé",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Ajouter un document à l'aide d'un modèle d'entrée",
		add_document_using_template_context_info: "Lorsque vous ajoutez un document à l'aide d'un modèle d'entrée, les valeurs que vous entrez pour le document sont cohérentes.",
		add_documents_using_template_dialog_title: "Ajouter des documents à l'aide d'un modèle d'entrée",
		add_documents_document_name_is_file_name_hint: "Le nom de fichier sera utilisé pour cette propriété",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nouveau dossier en utilisant un modèle d'entrée",
		create_folder_using_template_context_info: "Lorsque vous créez un dossier à l'aide d'un modèle d'entrée, les valeurs que vous entrez pour le dossier sont cohérentes.",

		add_documents_batch_results_dialog_title: "Documents non ajoutés au référentiel",
		add_documents_batch_results_dialog_context_info: "Les documents suivants n'ont pas été ajoutés au référentiel. Sélectionnez un document et cliquez sur Détails pour obtenir plus d'informations sur la raison pour laquelle le document n'a pas été ajouté au référentiel.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nom du fichier",
		add_documents_batch_results_dialog_status_col_hdr: "Statut",
		add_documents_batch_results_dialog_message_col_hdr: "Message",
		add_documents_batch_results_status_error: "Erreur",
		add_documents_batch_results_status_cancelled: "Annulé(e)",
		add_documents_batch_results_status_cancelled_msg: "Le document n'a pas été ajouté car la requête a été annulée.",

		add_documents_batch_status_title: "Ajout de documents",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Ajout du fichier ${0} sur ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Erreurs : ${0}",
		add_documents_batch_status_completing_msg: "Le processus sera interrompu une fois ce document ajouté.",

		add_documents_status_uploading_msg: "Téléchargement du fichier ${0} sur ${1}...",
		add_documents_status_adding_msg: "Ajout du fichier ${0} sur ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "Le modèle d'entrée a été configuré dans une autre application et est configuré pour toujours déclarer des documents en tant qu'enregistrements. Cependant, ce paramètre est ignoré car le client Web ne prend pas en charge la déclaration des documents en tant qu'enregistrements.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "Le modèle d'entrée a été configuré dans une autre application et est configuré de façon à vous laisser décider si vous devez déclarer ce document en tant qu'enregistrement. Cependant, ce paramètre est ignoré car le client Web ne prend pas en charge la déclaration des documents en tant qu'enregistrements.",
		no_selection: "&lt;Sélectionner&gt;",

		batch_results_dialog_details_label: "Détails",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "La valeur n'est pas valide. Il doit s'agir d'un identificateur global unique, par exemple : {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "La valeur n'est pas valide. Il doit s'agir d'un nombre en virgule flottante, par exemple : 1,2 ou 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "La valeur n'est pas valide. Il doit s'agir d'une valeur au format ${0}, par exemple, ${1}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "La valeur n'est pas valide. Elle doit être une valeur décimale, par exemple, 1,2 ou 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "La valeur n'est pas valide. Elle doit être un entier, par exemple, 5 ou 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "La valeur n'est pas valide. La valeur ne peut contenir que des caractères alphabétiques, par exemple a-z et A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "La valeur n'est pas valide. La valeur ne peut contenir que des caractères alphanumériques, par exemple : a-z, A-Z et 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "La valeur n'est pas valide. La valeur ne peut contenir que des caractères numériques, par exemple : 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "La valeur n'est pas valide. La valeur ne peut contenir que les caractères suivants : a-z, A-Z, 0-9, [espace], et `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "La valeur n'est pas valide. Il doit s'agir d'une date au format suivant : ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "La valeur n'est pas valide. Il doit s'agir d'une heure au format suivant : ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "La valeur n'est pas valide. Sélectionnez une valeur dans le menu déroulant.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "La valeur n'est pas valide.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "La valeur n'est pas valide. La valeur doit posséder le format suivant : {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Cette valeur est requise.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "La valeur est trop longue. La longueur maximale prise en charge par la propriété est ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "La valeur est trop courte. La propriété prend en charge une longueur minimale de ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "La valeur est hors plage. Il doit s'agir d'un nombre en virgule flottante compris entre ${0} et ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "La valeur est hors plage. Il doit s'agir d'une valeur décimale comprise entre ${0} et ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "La valeur est hors plage. La valeur doit être un entier compris entre ${0} et ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "Il doit s'agir d'une date entre ${0} et ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "La valeur est hors plage. Il doit s'agir d'une date entre ${0} et ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "La valeur est hors plage. Il doit s'agir d'une heure comprise entre ${0} et ${1}.",
		property_and: "et",

		property_invalidValueOrRequired: "La valeur suivante n'est pas valide ou est obligatoire : ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Propriétés",
		edit_properties_dialog_info: "Vous pouvez voir ou éditer les propriétés de cet élément. Vous pouvez aussi modifier sa sécurité si vous avez les autorisations appropriées. En revanche, vous ne pouvez pas changer ses propriétés système.",
		edit_properties_od_dialog_info: "Vous pouvez voir ou éditer les propriétés de cet élément. En revanche, vous ne pouvez pas changer ses propriétés système.",
		system_properties_title: "Propriétés système",
		custom_properties_title: "Propriétés",
		/* Folder collaboration tab */
		box_permission_permission: "Droits",
		box_permission_permissions: "Droits d'accès",
		box_permission_editor: "Editeur",
		box_permission_owner: "Propriétaire",
		box_permission_co_owner: "Co-propriétaire",
		box_permission_viewer_uploader: "Programme de téléchargement de l'afficheur",
		box_permission_previewer_uploader: "Programme de téléchargement du prévisualiseur",
		box_permission_viewer: "Afficheur",
		box_permission_previewer: "Prévisualiseur",
		box_permission_uploader: "Programme de téléchargement",
		box_permission_add: "Ajouter",
		box_permission_upload: "Envoyer par téléchargement",
		box_permission_download: "Télécharger",
		box_permission_preview: "Prévisualiser",
		box_permission_view: "Afficher",
		box_permission_send_links: "Envoyer des liens en lecture seule",
		box_permission_create_subfolders: "Créer des sous-dossiers",
		box_permission_create_tasks: "Créer des tâches",
		box_permission_add_comments: "Ajouter des commentaires",
		box_collaboration_invite_placeholder: "Entrez un nom, un e-mail ou un groupe à inviter",
		box_collaboration_invite_placeholder_non_admin: "Entrez une adresse électronique à inviter",
		box_collaboration_invalid_email: "Entrez une adresse électronique valide",
		box_collaboration_user_already_present: "Cet utilisateur est déjà un collaborateur sur le dossier",
		box_collaboration_user_name: "Nom",
		box_collaboration_email_address: "Adresse électronique",
		box_collaboration_date_added: "Date d'ajout",
		box_collaboration_remove_collaboration: "Retirer",
		box_collaboration_remove_collaboration_title: "Supprimer",
		box_collaboration_no_collaborators: "Il n'y a pas de collaborateurs",
		box_collaboration_change_owner_title: "Changement du propriétaire de l'élément",
		box_collaboration_change_owner_prompt: "En spécifiant ce collaborateur comme propriétaire du dossier, vous devenez un éditeur et ne possédez plus ce dossier. Les collaborateurs ajoutés directement à ce dossier le verront dans leurs dossiers racine. Les collaborateurs ajoutés au niveau du dossier parent ou au dessus ne seront plus collaborateurs. Voulez-vous continuer ?",
		box_collaboration_remove_self_title: "Se retirer",
		box_collaboration_remove_self_prompt: "Voulez-vous vraiment vous retirer de la liste des collaborateurs ? Vous n'aurez plus accès à ce dossier.",
		box_collaboration_user: "Utilisateur",
		box_collaboration_group: "Groupe",
		box_managing_users_not_configured: "Vous ne pouvez pas rechercher d'utilisateurs et de groupes car l'application Box n'est pas configurée correctement. Pour utiliser cette fonctionnalité, demandez à votre administrateur de configurer l'application Box pour la gestion des utilisateurs et des groupes.",
		duplicate_value_error: "Chaque valeur dans cette propriété doit être unique.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Les changements que vous apportez dans les zones suivantes s'appliquent à tous les éléments sélectionnés. Si vous devez entrer une valeur de propriété différente pour un élément particulier ou éditer la sécurité d'un élément, vous devrez éditer les propriétés de l'élément seul.",
		multi_edit_properties_class_label: "Classe :",
		multi_edit_properties_items_label: "Nom des éléments :",
		multi_edit_properties_properties_label: "Propriétés :",
		multi_edit_batch_status_title: "Mise à jour des propriétés",
		multi_edit_batch_status_adding_msg: "Mise à jour de l'élément ${0} sur ${1}...",
		multi_edit_batch_status_verifying_msg: "Vérification de l'élément ${0} sur ${1}...",
		multi_edit_batch_status_completing_msg: "Le processus s'arrête après la mise à jour de cet élément.",
		multi_edit_batch_status_validation_completing_msg: "Le processus s'arrête après la vérification de cet élément.",
		multi_edit_batch_results_status_error: "Erreur",
		multi_edit_batch_results_status_cancelled: "Annulé(e)",
		multi_edit_batch_results_status_cancelled_msg: "Cet élément n'a pas été mis à jour car la demande a été annulée.",
		multi_edit_batch_results_dialog_title: "Eléments non mis à jour",
		multi_edit_batch_results_dialog_context_info: "Les éléments suivants n'ont pas été mis à jour. Sélectionnez un nom d'élément puis cliquez sur Détails pour plus d'informations sur la raison pour laquelle l'élément n'a pas été mis à jour.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nom de l'élément",
		multi_edit_batch_results_dialog_status_col_hdr: "Statut",
		multi_edit_batch_results_dialog_message_col_hdr: "Message",
		multi_edit_batch_status_errors_msg: "Erreurs : ${0}",
		multi_edit_batch_permission_error_text: "Les modifications apportées aux propriétés ne peuvent pas être sauvegardées.",
		multi_edit_invalid_value_error: "Cette valeur dépend d'une autre valeur de propriété. Elle n'est pas valide pour tous les éléments que vous avez sélectionnés.",
		multi_edit_batch_permission_error_explanation: "Vous ne pouvez pas modifier les propriétés de cet élément car vous ne disposez pas des privilèges suffisants.",
		multi_edit_no_modifiable_properties: "Les propriétés des éléments sélectionnés ne peuvent être modifiées. Cela peut se produire lorsqu'un élément inclut uniquement des propriétés en lecture seule ou lorsque seul le nom ou le titre de l'élément est modifiable. Lorsque plusieurs éléments sont sélectionnés, vous ne pouvez pas modifier le nom ou le titre des éléments.",
		multi_edit_mult_classes_dialog_info: "Les éléments sélectionnez se trouvent dans différents référentiels ou appartiennent à différentes classes. Vous ne pouvez éditer que les éléments qui se trouvent dans une même classe ou dans un même référentiel. Sélectionnez le sous-ensemble d'éléments que vous souhaitez éditer.",
		multi_edit_class_selector_class_heading: "Classe",
		multi_edit_class_selector_entry_template_heading: "Modèle d'entrée",
		multi_edit_class_selector_repository_heading: "Référentiel",
		multi_edit_class_selector_items_heading: "Eléments",
		multi_edit_some_classes_not_displayed: "Certains éléments sélectionnés ne sont pas inclus dans cette liste car ils ne comportent que des propriétés en lecture seule ou ils se trouvent dans des référentiels qui ne prennent pas en charge l'édition de propriétés.",
		multi_edit_properties_invalid_msg: "Certaines valeurs de propriété ne sont pas valides pour tous les éléments sélectionnés.",
		multi_edit_properties_readonly_tooltip_text: "${0} : cette propriété est en lecture seule et ne peut pas être modifiée.",
		multi_edit_append_checkbox_label: "Ajouter",
		multi_edit_append_checkbox_tooltip: "Sélectionnez cette option si vous souhaitez ajouter de nouvelles valeurs de propriété aux valeurs existantes au lieu de les remplacer.",
		multi_edit_properties_invalid_childcomponent_msg: "Certaines valeurs de la propriété ${0} du composant enfant ${1} dépendent d'autres propriétés et ne sont plus valides avec les sélections que vous avez effectuées. Effacez les valeurs dans le composant enfant ${1} ou modifiez les propriétés de chaque élément sélectionné.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exporter les propriétés",
		export_properties_dialog_info: "Sélectionnez les propriétés à exporter et indiquez l'ordre dans lequel elles seront affichées.",
		export_properties_dialog_export_button_label: "Exporter",
		export_properties_dialog_export_raw_values: "Exporter les valeurs brutes",

		/* Properties */
		filter_clear_tooltip: "Effacer le filtre",
		properties_new_row: "Nouveau",
		properties_requiredClass_document_tooltip: "Sélectionnez un document. Celui-ci doit appartenir à la classe ${0}.",
		properties_requiredClass_folder_tooltip: "Sélectionnez un dossier. Celui-ci doit appartenir à la classe ${0}.",
		properties_dataType_tooltip: "Type de données : ${0}",
		properties_maxLength_tooltip: "Longueur maximale : ",
		properties_minLength_tooltip: "Longueur minimum : ",
		properties_minValue_tooltip: "Valeur minimale : ",
		properties_maxValue_tooltip: "Valeur maximale : ",
		properties_format_tooltip: "Format : ",
		properties_description_tooltip: "Description : ",

		properties_type_boolean_tooltip: "Booléen",
		properties_type_date_tooltip: "Date",
		properties_type_time_tooltip: "Heure",
		properties_type_timestamp_tooltip: "Horodatage",
		properties_type_decimal_tooltip: "Valeur décimale",
		properties_type_double_tooltip: "Nombre en virgule flottante",
		properties_type_short_tooltip: "Entier",
		properties_type_integer_tooltip: "Entier",
		properties_type_long_tooltip: "Entier",
		properties_type_string_tooltip: "Chaîne de texte",
		properties_type_string_alpha_tooltip: "Chaîne alphabétique",
		properties_type_string_alphanum_tooltip: "Chaîne alphanumérique",
		properties_type_string_ext_tooltip: "Chaîne alphanumérique étendue",
		properties_type_string_num_tooltip: "Chaîne numérique",
		properties_type_binary_tooltip: "Binaire",
		properties_type_object_tooltip: "Objet",
		properties_type_reference_tooltip: "Cette propriété référence un autre élément dans le référentiel.",
		properties_type_guid_tooltip: "Identificateur global unique",
		properties_type_group_tooltip: "Utilisateurs et groupes",
		properties_type_user_tooltip: "Utilisateurs",
		properties_type_childComponent_tooltip: "Composant enfant",

		properties_childComponent_minCardinalityOnly_tooltip: "Cette propriété doit avoir au moins ${0} valeurs.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Cette propriété peut avoir un maximum de ${0} valeurs.",
		properties_childComponent_minMaxCardinality_tooltip: "Cette propriété doit avoir au moins ${0} valeur et au maximum ${1} valeurs.",
		properties_childComponent_noCardinality_tooltip: "Cette propriété peut avoir n'importe quel nombre de valeurs.",

		properties_type_guid_example_tooltip: ", par exemple {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Sélectionnez une valeur dans la liste.",
		properties_single_select_choice_tooltip: "Sélectionnez une valeur.",
		properties_multiple_select_typein_tooltip: "Entrez une ou plusieurs valeurs.",
		properties_multiple_select_choice_tooltip: "Sélectionnez une ou plusieurs valeurs.",
		properties_not_selectable_tooltip: "Impossible de sélectionner la catégorie.",
		properties_none: "Aucun",
		properties_none_tooltip: "Sélectionnez <i>Aucun</i> pour effacer la valeur actuelle pour cette propriété.",
		properties_value_empty: "Aucune valeur",
		properties_value_read_only: "En lecture seule",
		properties_clear_label: "Effacer",
		properties_clear_tooltip: "L'effacement de la valeur de cette zone efface la valeur dans le référentiel lorsque vous cliquez sur <b>Sauvegarder</b>.",
		properties_box_custom_properties: "Propriétés personnalisées",
		properties_box_metadata_name_in_use: "Ce nom est déjà utilisé. Entrez un autre nom pour la propriété personnalisée.",

		properties_templates: "Modèles",
		properties_add_template: "Ajouter un modèle",
		properties_remove_template: "Retirer",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Restituer",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Restituer",
		checkin_cancel_label: "Annuler",
		checkin_file_name_label: "Nom du fichier",
		checkin_document_status_title: "Restituer le document",
		checkin_document_status_uploading_msg: "Fichier en cours de téléchargement...",
		checkin_document_status_checkingin_msg: "Restitution du fichier...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Sélection du mode d'occultation",
		viewer_redaction_new_document_confirmation_question: "Voulez-vous enregistrer le document occulté comme nouveau document ou fichier local ?",
		viewer_redaction_new_version_confirmation_question: "Voulez-vous enregistrer le document occulté comme nouvelle version ?",
		viewer_redaction_new_version_confirmation_question_never: "Voulez-vous enregistrer le document occulté comme nouveau contenu ?",		
		viewer_redaction_new_document_button: "Oui",
		viewer_redaction_new_document_cancel_button: "Non",
		viewer_redaction_add_document_confirmation_question: "Voulez-vous enregistrer le document occulté comme nouveau document, nouvelle version ou fichier local ?",
		viewer_redaction_add_document_confirmation_question_version_never: "Voulez-vous enregistrer le document occulté comme nouveau document, nouveau contenu ou fichier local ?",
		viewer_redaction_add_document_button: "Nouveau document",
		viewer_redaction_add_new_version_button: "Nouvelle version",
		viewer_redaction_add_new_version_button_version_never: "Nouveau contenu",
		viewer_redaction_add_local_file_button: "Fichier local",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Sélection du motif d'occultation",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "Le modèle d'entrée qui a été utilisé pour ajouter ce document au référentiel est introuvable. Le document sera restitué dans le référentiel sans utiliser le modèle d'entrée.",
		property_entry_template_not_retrieved_warning: "Le modèle d'entrée qui a été utilisé pour ajouter ce document au référentiel est introuvable. Les propriétés du document seront affichées sans utiliser le modèle d'entrée.",
		multi_edit_entry_template_not_found_name: "[Introuvable]",
		multi_edit_entry_template_not_retrieved_warning: "Le modèle d'entrée qui a été utilisé pour ajouter ces éléments au référentiel est introuvable. Les propriétés d'élément seront modifiées sans utiliser le modèle d'entrée.",
		checkin_major_version_hover: "Incrémente le numéro de version du document de un et définit le statut du document sur Publié. Si l'option n'est pas sélectionnée, le document n'est pas prêt à être publié et est restitué en tant que version secondaire.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "Le document ne peut pas être restitué, car il n'est pas réservé.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "L'ID utilisateur ou le mot de passe n'est pas valide pour le serveur.",
		error_bad_userid_password_userResponse: "Vérifiez que vous avez entré correctement votre ID utilisateur et votre mot de passe.",
		error_bad_userid_password_adminResponse: "L'erreur suivante a été renvoyée : ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "message_erreur",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "Impossible d'établir une connexion au client Web à l'aide de l'URL suivante : ${0}.",
		http_send_error_explanation: "Cette erreur peut être causée par un problème de configuration sur le serveur d'applications Web ou par un problème avec l'application de client Web.",
		http_send_error_userResponse: "Essayez de vous connecter de nouveau. Si le problème persiste, contactez votre administrateur système.",
		http_send_error_adminResponse: "L'erreur HTTP suivante a été renvoyée : ${1}.",
		http_send_error_0: "URL_client_Web",
		http_send_error_1: "erreur_HTTP",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "Impossible d'établir une connexion au client Web à l'aide de l'URL suivante : ${0}.",
		http_error_explanation: "Vous devrez peut-être vous authentifier sur un pare-feu, ou le serveur d'applications Web n'est peut-être pas en cours d'exécution ou ne peut pas être atteint en raison de problèmes réseau.",
		http_error_userResponse: "Si vous devez vous authentifier sur un pare-feu, authentifiez-vous et tentez de vous connecter de nouveau. Si le problème persiste, contactez votre administrateur système.",
		http_error_adminResponse: "L'erreur HTTP suivante a été renvoyée : ${1}.",
		http_error_0: "URL_client_Web",
		http_error_1: "erreur_HTTP",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "Impossible d'établir une connexion au client Web à l'aide de l'URL suivante : ${0}.",
		http_response_bad_explanation: "Cette erreur peut être causée par un problème de configuration sur le serveur d'applications Web ou par un problème avec le client Web.",
		http_response_bad_userResponse: "Essayez de vous connecter de nouveau. Si le problème persiste, contactez votre administrateur système.",
		http_response_bad_adminResponse: "L'erreur suivante a été renvoyée : ${1}.",
		http_response_bad_0: "URL_client_Web",
		http_response_bad_1: "erreur_HTTP",
		http_response_bad_number: 2002,

		unititled_document_name: "Sans titre",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "L'applet d'e-mail ne peut pas être démarrée.",
		email_applet_init_failed_explanation: "Ce problème peut survenir lorsque votre client de messagerie n'est pas correctement installé et configuré ou lorsqu'une version prise en charge de Java Runtime Environment (JRE) n'est pas installée sur votre poste de travail.",
		email_applet_init_failed_userResponse: "Pour corriger l'erreur :<ul><li>Vérifiez que votre application d'e-mail est installée et est configurée comme client de messagerie par défaut sur votre poste de travail.</li><li>Vérifiez qu'une version prise en charge de JRE est installée sur votre poste de travail en entrant la commande suivante à une invite de commande : java -version</li></ul><p>Une liste des versions de JRE prises en charge figure dans le document <i>Prérequis matériels et logiciels pour IBM Content Navigator</i> sur le site de support logiciel IBM.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "L'application d'e-mail n'a pas pu démarrer car un fichier DLL requis n'a pas pu être chargé.",
		email_applet_JNI_LOAD_FAILED_explanation: "Le fichier WCEmailAppletJNI.dll requis ne peut pas être chargé car le répertoire temporaire sur votre poste de travail est peut-être plein.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Vérifiez que le répertoire temporaire comprend assez d'espace. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web. Par défaut, le fichier WCEmailAppletJNI.dll se charge dans le répertoire temporaire spécifié dans les paramètres de votre navigateur Web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "L'application d'e-mail n'a pas pu démarrer car l'applet d'e-mail ne peut pas créer de fichier temporaire.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Le répertoire temporaire sur votre poste de travail est peut-être plein.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Vérifiez que le répertoire temporaire comprend assez d'espace. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "L'application d'e-mail ne peut pas démarrer car l'applet d'e-mail ne peut pas accéder au répertoire temporaire.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Le répertoire temporaire de votre poste de travail est peut-être plein, ou vous n'avez peut-être pas les droits d'écriture appropriés dans le répertoire temporaire.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Vérifiez que le répertoire temporaire comprend assez d'espace et que vous disposez des droits d'écriture dans le répertoire temporaire. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web. Si le problème persiste, prenez contact avec l'administrateur système.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "L'applet d'e-mail ne peut pas supprimer un fichier temporaire.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Une autre application peut utiliser le fichier ou le fichier peut ne pas exister sur votre poste de travail.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Si le fichier est utilisé par une autre application, fermez l'application. Si le fichier se trouve sur votre système de fichiers local, supprimez le fichier suivant du répertoire temporaire sur votre poste de travail : ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "Le lien vers le document ne peut pas être créé.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "Le référentiel a renvoyé l'URL dans un format non valide.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Fermez votre navigateur Web, dont tous les onglets et sessions, puis reconnectez-vous. Tentez à nouveau d'envoyer le document depuis le client Web. Si le problème persiste, contactez le service de support logiciel IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "L'applet d'e-mail ne peut pas associer le fichier à un e-mail.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "Le référentiel a renvoyé l'URL au document sous un format non valide.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Fermez votre navigateur Web, dont tous les onglets et sessions, puis reconnectez-vous. Tentez à nouveau d'envoyer le document depuis le client Web. Si le problème persiste, contactez le service de support logiciel IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "Impossible de créer la pièce jointe.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "L'applet d'e-mail ne peut pas lire l'URL vers le document.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Fermez votre navigateur Web, dont tous les onglets et sessions, puis reconnectez-vous. Tentez à nouveau d'envoyer le document depuis le client Web. Si le problème persiste, contactez le service de support logiciel IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "Le document n'a pas pu être récupéré depuis le référentiel.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Votre session a peut-être dépassé le délai d'attente, le référentiel ou le serveur d'applications Web n'est peut-être pas en cours d'exécution ou la configuration du client Web présente un problème.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Connectez-vous et réessayez d'envoyer le document par e-mail. Si le problème persiste, demandez à votre administrateur système de vérifier les journaux des erreurs du référentiel.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Si vous avez configuré le client Web pour convertir des documents AFP vers un autre format (PDF, par exemple), vérifiez que la conversion est correctement configurée avant d'envoyer les documents en pièces jointes.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "Le document n'a pas pu être converti en PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "L'outil utilisé pour transformer des documents en PDF ne prend pas en charge le type de fichier.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Fermez cette page et essayez d'envoyer à nouveau le document par e-mail sans le convertir en PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "L'e-mail n'a pas été créé.",
		email_applet_MAPI_USER_ABORT_explanation: "Ouvrez votre application de messagerie et vérifiez qu'elle fonctionne correctement. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web. Si le problème persiste, prenez contact avec votre administrateur système pour vérifier les journaux d'événements du système d'exploitation.",
		email_applet_MAPI_USER_ABORT_userResponse: "Si vous envisagez de fermer l'application de messagerie, aucune action supplémentaire n'est requise. Pour envoyer l'e-mail, connectez-vous à votre application de messagerie et essayez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "Impossible de créer l'e-mail.",
		email_applet_MAPI_FAILURE_explanation: "Votre client de messagerie n'est peut-être pas ouvert ou vous n'êtes peut-être pas connecté.",
		email_applet_MAPI_FAILURE_userResponse: "Ouvrez votre application de messagerie et vérifiez qu'elle fonctionne correctement. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web. Si le problème persiste, prenez contact avec votre administrateur système pour vérifier les journaux d'événements du système d'exploitation.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "Impossible de créer l'e-mail.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "Vous n'êtes pas connecté à votre client de messagerie. Vous devez ouvrir votre client de messagerie et vous y connecter pour envoyer un message depuis le client Web.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Ouvrez votre client de messagerie et ouvrez une session. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "L'e-mail ne peut pas être créé car le fichier temporaire ne peut pas être créé sur votre poste de travail.",
		email_applet_MAPI_DISK_FULL_explanation: "Le répertoire temporaire sur votre poste de travail est peut-être plein.",
		email_applet_MAPI_DISK_FULL_userResponse: "Vérifiez que le répertoire temporaire comprend assez d'espace. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "Impossible de créer l'e-mail car la mémoire système est insuffisante.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Le nombre d'applications ouvertes peut être trop important.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Fermez toutes les applications non utilisées, puis essayez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Accès MAPI refusé.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "L'accès à l'interface de programme d'application de messagerie (MAPI) peut ne pas être activé ou pris en charge pour votre application d'e-mail. MAPI est le protocole de messagerie utilisé pour activer la communication entre le client Web et votre application d'e-mail.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Contactez l'administrateur système.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Vérifiez que l'application de messagerie dispose d'un accès à MAPI et qu'il est correctement configuré. Si l'incident persiste, contactez le service de support logiciel IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "Impossible de créer la pièce jointe ou le lien vers l'élément.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Le nombre de sessions de navigation ouvertes peut être trop important.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Fermez les sessions de navigateur Web non utilisées. Ensuite, essayez à nouveau d'envoyer le document depuis le client Web. Si l'incident se produit de nouveau, contactez l'administrateur système.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "Impossible d'envoyer l'e-mail.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Vous essayez peut-être d'envoyer trop de pièces jointes.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Sélectionnez moins de fichiers. Ensuite, essayez à nouveau d'envoyer les documents depuis le client Web.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "Impossible d'envoyer l'e-mail.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Le nombre de destinataires de cet e-mail est peut-être trop important.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Réduisez le nombre de destinataires dans l'e-mail.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "Impossible de créer la pièce jointe.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Certains des fichiers temporaires requis ont peut-être été supprimés avant la création de la pièce jointe. Cette erreur peut se produire si le cache du navigateur est effacé avant l'envoi de l'e-mail.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "Impossible de créer la pièce jointe.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Certains des fichiers temporaires requis ont peut-être été supprimés avant la création de la pièce jointe. Cette erreur peut se produire si le cache du navigateur est effacé avant l'envoi de l'e-mail.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "La pièce jointe ne peut pas être créée par l'application de messagerie.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "L'e-mail ne peut pas être envoyé au destinataire indiqué.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Le destinataire peut ne pas exister dans le carnet d'adresses.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Vérifiez le nom du destinataire et essayez à nouveau d'envoyer le document.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "L'e-mail ne peut pas être envoyé au destinataire indiqué.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "L'adresse e-mail est peut-être incorrectement mise en forme.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Vérifiez d'avoir entré une adresse e-mail valide et essayez à nouveau d'envoyer le document.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_NO_MESSAGES_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "Impossible d'envoyer l'e-mail.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "L'e-mail est peut-être trop long.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Réduisez le texte de l'e-mail et essayez à nouveau d'envoyer ce message.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "Impossible de créer l'e-mail.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Le client de messagerie peut s'être interrompu lorsqu'il tentait de créer l'e-mail.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Redémarrez votre client de messagerie et essayez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "L'e-mail n'est peut-être pas composé correctement.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "L'e-mail ne peut pas être envoyé au destinataire indiqué.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "L'adresse e-mail est peut-être incorrectement mise en forme.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Vérifiez d'avoir entré une adresse e-mail valide et envoyez le document à nouveau.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "Le client de messagerie ne peut pas effectuer l'action demandée.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "L'application d'e-mail a renvoyé une erreur inattendue.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Tentez à nouveau d'envoyer le document depuis le client Web.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "L'une des propriétés n'a pas le nombre de valeurs requis.",
		error_property_cardinality_explanation: "Certaines propriétés ont un nombre de valeurs minimum et maximum.",
		error_property_cardinality_userResponse: "Utilisez l'infobulle pour déterminer quelle propriété nécessite un nombre minimum de valeurs. Ensuite, indiquez le nombre minimum de valeurs et réessayez.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Un nom de fichier est obligatoire.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Spécifiez un nom de fichier et réessayez.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "Le plug-in ${0} contient des erreurs.",
		plugin_error_explanation: "Une erreur s'est produite lors de l'évaluation du JavaScript pour le plug-in ${0}. Si vous continuez d'utiliser le client Web, vous risquez de rencontrer d'autres erreurs.",
		plugin_error_userResponse: "Contactez l'administrateur système.",
		plugin_error_adminResponse: "Le plug-in rencontre un problème qui doit être résolu par le fournisseur du plug-in. Il est recommandé de supprimer le plug-in de votre configuration de client Web jusqu'à ce que le problème soit résolu.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "Impossible d'ouvrir le modèle d'entrée.",
		open_old_format_entry_template_error_explanation: "Le modèle d'entrée utilise un format antérieur qui n'est pas pris en charge dans le client Web.",
		open_old_format_entry_template_error_userResponse: "Demandez à votre administrateur système de mettre à jour le modèle d'entrée.",
		open_old_format_entry_template_error_adminResponse: "Utilisez le moteur d'applications ou le concepteur de modèle d'entrée Workplace XT pour sauvegarder une version mise à jour du modèle d'entrée.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "Impossible d'ouvrir le modèle d'entrée.",
		open_custom_object_entry_template_error_explanation: "Le client Web ne prend pas en charge le type de modèle d'entrée suivant : modèles d'entrée Objet personnalisé.",
		open_custom_object_entry_template_error_userResponse: "Ouvrez un autre modèle d'entrée.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "Impossible d'ouvrir l'objet eForms.",
		open_forms_object_error_explanation: "Le client Web ne prend pas en charge les types d'objets eForms suivants : modèle de formulaire, données de formulaire, règles de document et règles de flux de travaux.",
		open_forms_object_error_userResponse: "Ouvrez un autre document.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "Vous ne pouvez pas utiliser le modèle d'entrée ${0}.",
		entry_template_folder_restricted_error_explanation: "Le modèle d'entrée ajoute des éléments au dossier ${1} et vous n'avez pas les droits appropriés pour ajouter des éléments à ce dossier.",
		entry_template_folder_restricted_error_userResponse: "Sélectionnez un modèle d'entrée différent ou demandez à votre administrateur système de vous donner les droits appropriés pour ajouter des éléments au dossier ${1}.",
		entry_template_folder_restricted_error_0: "nom_modèle_entrée",
		entry_template_folder_restricted_error_1: "nom_dossier",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "Impossible d'ouvrir le modèle d'entrée.",
		open_records_entry_template_error_explanation: "Le client Web ne prend pas en charge le type de modèle d'entrée suivant : modèles d'entrée Déclarer en tant qu'enregistrement.",
		open_records_entry_template_error_userResponse: "Ouvrez un autre modèle d'entrée.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "Impossible d'ouvrir le flux de travaux.",
		open_workflow_error_explanation: "Le client Web ne prend pas en charge l'ouverture des flux de travaux.",
		open_workflow_error_userResponse: "Ouvrez un autre document.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "Impossible d'ouvrir le document.",
		viewer_unable_to_view_error_explanation: "Aucun afficheur n'est configuré pour les documents de ce type ou l'afficheur configuré n'est pas compatible avec votre système.",
		viewer_unable_to_view_error_userResponse: "Demandez à votre administrateur système de configurer un afficheur pour les documents de ce type et vérifiez que l'afficheur configuré fonctionne avec le système de l'utilisateur.",
		viewer_unable_to_view_error_adminResponse: "Utilisez l'outil d'administration pour configurer un afficheur adapté à ce type de document.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "Impossible d'ouvrir la recherche.",
		search_cannot_open_error_explanation: "La fonction de recherche n'est pas configurée pour ce bureau.",
		search_cannot_open_error_userResponse: "Demandez à votre administrateur système de vous donner accès à un bureau équipé de cette fonction de recherche ou de mettre à jour votre bureau avec cette fonction.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "Impossible de charger le document.",
		viewer_document_load_failed_error_explanation: "L'afficheur Daeja ViewONE Professional n'a pas réussi à ouvrir le document.",
		viewer_document_load_failed_error_userResponse: "Pour plus d'informations, voir le message d'erreur présenté dans l'afficheur.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "Le document n'est pas affichable.",
		viewer_session_expired_explanation: "Impossible d'extraire le contenu du document.",
		viewer_session_expired_userResponse: "Essayez de vous connecter à nouveau. Si le problème persiste, le serveur d'applications ne fonctionne peut-être pas. Demandez à votre administrateur système de consulter les journaux des erreurs d'IBM Content Navigator ou redémarrez le serveur.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "Le document n'est pas affichable.",
		ajaxViewer_getPage_failed_explanation: "L'afficheur AJAX a reçu une erreur en réponse lors de l'extraction du contenu de la page. Le serveur d'applications ne fonctionne peut-être pas.",
		ajaxViewer_getPage_failed_userResponse: "Fermez votre navigateur Web, puis reconnectez-vous. Si le problème persiste, demandez à votre administrateur de consulter les journaux des erreurs du serveur d'applications Web ou redémarrez le serveur.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "Java Runtime Environment (JRE) n'est pas disponible sur votre poste de travail.",
		viewer_java_plugin_not_found_explanation: "Le plug-in n'a pas été trouvé, ou la version correcte de JRE n'est pas installée.",
		viewer_java_plugin_not_found_userResponse: "Vérifiez si JRE est installé. Par exemple, à partir d'une invite de commande, entrez la commande suivante : Java -version. Si JRE n'est pas installé ou si la mauvaise version est installée, installez la bonne version de JRE. Une liste des versions de JRE prises en charge figure dans le document <i>Prérequis matériels et logiciels pour IBM Content Navigator</i> sur le site de support logiciel IBM.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "Le document ne peut pas être affiché dans votre navigateur Web.",
		viewer_pdf_plugin_not_found_explanation: "Le plug-in utilisé pour afficher des documents PDF dans le navigateur Web est introuvable.",
		viewer_pdf_plugin_not_found_userResponse: "Le fichier PDF sera téléchargé sur votre poste de travail au lieu d'être affiché dans la fenêtre d'afficheur.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "L'élément suivant ne peut pas être ajouté au référentiel: ${0}.",
		add_document_single_item_error_explanation: "Cette erreur peut se produire pour l'une des raisons suivantes :" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Vous tentez d'ajouter un document qui a été déplacé ou supprimé.</li>" + "<li>Vous tentez d'ajouter un document qui a été renommé.</li>" + "<li>Vous tentez d'ajouter un document qui est endommagé.</li>" + "<li>Vous tentez d'ajouter un document qui est ouvert dans une autre application.</li>" + "<li>Vous tentez d'ajouter un dossier au référentiel.</li>" + "<li>Vous ne disposez pas des droits appropriés sur le système d'exploitation pour accéder au document.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Effectuez l'action appropriée pour résoudre l'incident :" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si le document a été déplacé ou renommé, recherchez le document sur votre système de fichiers et essayez de l'ajouter à nouveau.</li>" + "<li>Si le document est ouvert dans une autre application, fermez-le et essayez de l'ajouter à nouveau.</li>" + "</ul>" + "<br>Vous ne pouvez pas ajouter des dossiers au référentiel.",
		add_document_single_item_error_0: "éléments_ayant_échoué",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Les éléments suivants ${0} ne peuvent pas être ajoutés au référentiel : ${1}",
		add_document_multiple_items_error_explanation: "Un problème avec l'un des éléments empêche tous les éléments d'être ajoutés au référentiel. Cette erreur peut se produire pour l'une des raisons suivantes :" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Vous tentez d'ajouter un document qui a été déplacé ou supprimé.</li>" + "<li>Vous tentez d'ajouter un document qui a été renommé.</li>" + "<li>Vous tentez d'ajouter un document qui est endommagé.</li>" + "<li>Vous tentez d'ajouter un document qui est ouvert dans une autre application.</li>" + "<li>Vous tentez d'ajouter un dossier au référentiel.</li>" + "<li>Vous ne disposez pas des droits appropriés sur le système d'exploitation pour accéder au document.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Effectuez l'action appropriée pour résoudre l'incident :" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si un document a été déplacé ou renommé, recherchez le document sur votre système de fichiers et essayez à nouveau d'ajouter les éléments.</li>" + "<li>Si le document est ouvert dans une autre application, fermez-le et essayez à nouveau d'ajouter les éléments.</li>" + "<li>Si un document a été supprimé ou est endommagé, désélectionnez l'élément et essayez à nouveau d'ajouter les éléments restants.</li>" + "</ul>" + "<br>Vous ne pouvez pas ajouter des dossiers au référentiel.",
		add_document_multiple_items_error_0: "nombre_d'éléments",
		add_document_multiple_items_error_1: "éléments_ayant_échoué",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "Vous ne pouvez pas glisser et déposer des éléments depuis cet endroit",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "Impossible d'ouvrir l'objet eForms.",
		open_forms_work_object_error_explanation: "Le client Web ne prend pas en charge le type d'objet eForms suivant : règles de flux de travaux.",
		open_forms_work_object_error_userResponse: "Ouvrez un autre document.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "Impossible d'ouvrir le document.",
		viewer_privilege_to_view_error_explanation: "Vous n'êtes pas autorisé à consulter le document.",
		viewer_privilege_to_view_error_userResponse: "Demandez au propriétaire du document ou à votre administrateur système de vous accorder les droits appropriés pour consulter le document.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Impossible d'ajouter les éléments au référentiel.",
		add_document_too_many_items_error_explanation: "Vous pouvez ajouter jusqu'à ${0} éléments simultanément. Or, vous tentez d'ajouter ${1} éléments.",
		add_document_too_many_items_error_userResponse: "Supprimez certains éléments de votre liste et faites une nouvelle tentative. Vous pouvez également contacter votre administrateur système pour augmenter le nombre maximum de documents à ajouter en une fois à ce bureau.",
		add_document_too_many_items_error_0: "nombre_maximum_d'éléments",
		add_document_too_many_items_error_1: "nombre_d'éléments",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "Impossible d'établir une connexion au client Web à l'aide de l'URL suivante : ${0}.",
		http_ltpa_expired_explanation: "La clé LTPA associée à votre session de navigation a expiré.",
		http_ltpa_expired_userResponse: "Redémarrez votre navigateur Web et tentez de vous reconnecter. Si le problème persiste, signalez l'erreur suivante à votre administrateur système : ${1}.",
		http_ltpa_expired_0: "URL_client_Web",
		http_ltpa_expired_1: "erreur_HTTP",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "Le document ne peut pas être ajouté au dossier ${0}.",
		dnd_no_privilege_error_explanation: "Les droits associés au dossier empêchent l'ajout de documents à ce dossier.",
		dnd_no_privilege_error_userResponse: "Ajoutez le document à un autre dossier.",
		dnd_no_privilege_error_0: "nom_élément",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "Les éléments ne peuvent pas être modifiés.",
		modify_document_too_many_items_error_explanation: "Vous pouvez modifier jusqu'à ${0} éléments à la fois. Vous tentez de modifier ${1} éléments.",
		modify_document_too_many_items_error_userResponse: "Sélectionnez moins d'éléments et tentez de les modifier à nouveau. Vous pouvez également contacter votre administrateur système pour augmenter le nombre maximum d'éléments que vous pouvez modifier à partir de ce bureau.",
		modify_document_too_many_items_error_0: "nombre_maximum_d'éléments",
		modify_document_too_many_items_error_1: "nombre_d'éléments",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "Vous ne pouvez pas utiliser la classe ${0}.",
		add_document_multiple_unique_values_error_explanation: "La classe ${0} contient une ou plusieurs propriétés nécessitant une valeur unique pour chaque document. Lorsque vous ajoutez plusieurs documents, tous les documents utilisent les mêmes valeurs.",
		add_document_multiple_unique_values_error_userResponse: "Sélectionnez une classe différente ou ajoutez les documents séparément.",
		add_document_multiple_unique_values_error_0: "nom_affichage_classe",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "Vous ne pouvez pas utiliser le modèle d'entrée ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "Le modèle d'entrée ${0} nécessite d'ajouter des documents à la classe ${1}. Toutefois, la classe ${1} contient une ou plusieurs propriétés nécessitant une valeur unique pour chaque document. Lorsque vous ajoutez plusieurs documents, tous les documents utilisent les mêmes valeurs.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Sélectionnez un modèle d'entrée différent ou ajoutez les documents séparément.",
		add_document_multiple_unique_values_entry_template_error_0: "nom_modèle_entrée",
		add_document_multiple_unique_values_entry_template_error_1: "nom_affichage_classe",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "Vous ne pouvez pas utiliser le modèle d'entrée ${0}.",
		entry_template_class_restricted_error_explanation: "Le modèle d'entrée ajoute des éléments à l'aide de la classe ${1} et vous n'avez pas les droits appropriés pour ajouter des éléments à l'aide de cette classe.",
		entry_template_class_restricted_error_userResponse: "Sélectionnez un modèle d'entrée différent ou demandez à votre administrateur système de vous donner les droits appropriés pour ajouter des éléments à l'aide de la classe ${1}.",
		entry_template_class_restricted_error_0: "nom_modèle_entrée",
		entry_template_class_restricted_error_1: "nom_affichage_classe",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "L'élément de travail ne peut pas être réaffecté à un autre utilisateur.",
		process_reassign_error_explanation: "Cette action est interdite par le flux de travaux.",
		process_reassign_error_userResponse: "Vous pouvez ouvrir l'élément de travail et effectuer l'étape en cours dans l'élément de travail.  Pour plus d'informations sur ce problème, demandez au propriétaire de l'élément de vérifier que l'élément de travail peut être réaffecté.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "L'action personnalisée suivante ne peut pas être chargée : ${0}.",
		customaction_loadurl_error_explanation: "L'emplacement de l'action personnalisée n'est pas accessible. L'adresse URL actuelle de l'action personnalisée est ${1}.",
		customaction_loadurl_error_userResponse: "Demandez à votre administrateur de déplacer l'action personnalisée vers un emplacement accessible.",
		customaction_loadurl_error_adminResponse: "Le fichier JSP qui définit l'action personnalisée doit faire partie de l'application Web eClient ou de l'application Web IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "La fonction suivante est introuvable : ${0}.",
		feature_invalid_explanation: "Ce problème peut se produire si la fonction n'est pas disponible sur le bureau spécifié ou que le nom de la fonction est incorrectement orthographié.",
		feature_invalid_userResponse: "Lorsque vous cliquez sur OK, vous êtes redirigé vers la fonction par défaut de ce bureau. Contactez votre administrateur système pour rapporter ce problème.",
		feature_invalid_adminResponse: "Si la fonction doit être disponible sur le bureau, mettez à jour la configuration du bureau dans l'outil d'administration. Si la fonction ne doit pas être incluse sur le bureau ou est incorrectement orthographiée, travaillez avec le développeur de l'application qui a créé l'URL vers cette fonction pour mettre à jour l'URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "nom_fonction",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "Impossible d'ouvrir la recherche ${0}.",
		search_unsupportedTeamspaceSearch_error_explanation: "Vous devez être dans un espace d'équipe pour ouvrir cette recherche.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Sélectionnez une recherche différente.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "Le fichier suivant ne peut pas être importé : ${0}.",
		wrong_import_file_type_error_explanation: "Le fichier doit être un fichier de propriétés.",
		wrong_import_file_type_error_userResponse: "Sélectionnez le fichier de propriétés exporté depuis l'outil d'administration.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "Le référentiel ${0} est introuvable sur le bureau ${1}.",
		browse_repository_not_found_error_explanation: "Le référentiel doit être présent sur le bureau et activé pour la fonction Parcourir lorsqu'il est spécifié dans un paramètre d'URL.",
		browse_repository_not_found_error_userResponse: "Vérifiez que l'ID référentiel indiqué dans l'URL est correct, que le référentiel a été ajouté au bureau ${1} et que la fonction Parcourir est activée pour le référentiel.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "Le référentiel ${0} n'est pas activé pour la fonction de navigation sur le bureau ${1}.",
		browse_repository_not_enabled_error_explanation: "Le référentiel doit être activé pour la fonction Parcourir lorsqu'il est spécifié dans un paramètre d'URL.",
		browse_repository_not_enabled_error_userResponse: "Activez la fonction de navigation pour le référentiel ${0} sur le bureau ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "La recherche ne peut pas être exécutée car le lien inclut des critères non valides.",
		invalid_xt_stored_search_criteria_error_explanation: "La valeur suivante n'est pas valide : ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Demandez à votre administrateur système de fournir un lien mis à jour.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Editez la paire nom-valeur appropriée dans l'URL. Si vous ne connaissez pas les valeurs qui sont valides pour la propriété, ouvrez la recherche enregistrée dans le concepteur de recherche FileNet Workplace XT pour déterminer une valeur valide.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "Impossible d'ouvrir la recherche croisée dans les référentiels.",
		unified_search_invalid_fixed_value_error_explanation: "La recherche croisée dans les référentiels inclut des critères non valides. Ce problème peut se produire lorsqu'un critère possède une valeur fixe qui n'est pas compatible avec les autres propriétés dans un mappage. Par exemple, ce problème peut se produire si la valeur fixe est une chaîne mais si les autres propriétés dans le mappage sont des entiers.",
		unified_search_invalid_fixed_value_error_userResponse: "Si vous disposez des droits nécessaires pour modifier la recherche, supprimez les critères non valides et sauvegardez de nouveau la recherche. Si vous ne possédez pas les droits appropriés pour modifier la recherche, demandez au propriétaire de la recherche ou à votre administrateur système de sauvegarder de nouveau la recherche.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "Votre demande ne peut pas être traitée.",
		launch_action_invalid_json_error_explanation: "Les données qui ont été transmises au client Web ne sont pas valides.",
		launch_action_invalid_json_error_userResponse: "Indiquez à votre administrateur l'application que vous utilisiez lorsque ce problème s'est produit.",
		launch_action_invalid_json_error_adminResponse: "L'application client n'a pas envoyé d'objet JSON valide au client Web. Contactez le service de support logiciel IBM pour plus d'assistance.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "Votre demande ne peut pas être traitée.",
		launch_action_not_found_error_explanation: "L'action ${0} n'est configurée pour aucun menu sur le bureau ${1}.",
		launch_action_not_found_error_userResponse: "Demandez à votre administrateur système de configurer le bureau ${1} pour utiliser un menu qui contient l'action ${0} ou de vous attribuer un bureau comprenant l'action ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "Votre demande ne peut pas être traitée.",
		launch_action_repository_not_found_error_explanation: "Le référentiel ${0} n'est pas associé au bureau ${1}.",
		launch_action_repository_not_found_error_userResponse: "Demandez à votre administrateur système d'associer le référentiel ${0} au bureau ${1} ou de vous attribuer un bureau comprenant le référentiel ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "Impossible d'ouvrir l'espace d'équipe.",
		teamspace_cannot_open_error_explanation: "La fonction d'espace d'équipe n'est pas configurée pour ce bureau.",
		teamspace_cannot_open_error_userResponse: "Demandez à votre administrateur système si vous pouvez accéder à un bureau incluant la fonction d'espace d'équipe ou si ce bureau peut être mis à jour pour inclure la fonction d'espace d'équipe.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Une erreur s'est produite lors de la restitution du contenu occulté.",
		viewer_redaction_checkin_failed_explanation: "L'afficheur a reçu une réponse avec erreur lors de la restitution du contenu occulté.",
		viewer_redaction_checkin_failed_userResponse: "Demandez à votre administrateur système de consulter les fichiers journaux de serveur d'applications Web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "Vous ne pouvez pas ajouter de document à ce référentiel.",
		add_document_odserver_odwek_version_od_error_explanation: "La version actuelle du serveur IBM Content Manager OnDemand ou d'ODWEK ne correspond pas au niveau minimal requis pour la prise en charge de l'ajout de documents à un référentiel Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Demandez à votre administrateur de vérifier quelles sont les versions du serveur Content Manager OnDemand et d'ODWEK qui sont requises pour la prise en charge de l'ajout de documents à des référentiels Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Impossible d'ajouter les éléments au référentiel.",
		add_document_too_many_items_od_error_explanation: "Pour les référentiels IBM Content Manager OnDemand, vous ne pouvez ajouter qu'un élément à la fois.",
		add_document_too_many_items_od_error_userResponse: "Retirez des éléments de votre liste et essayez d'ajouter les éléments individuellement.",
		add_document_too_many_items_od_error_0: "nombre_maximum_d'éléments",
		add_document_too_many_items_od_error_1: "nombre_d'éléments",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "L'élément ne peut pas être ajouté au référentiel.",
		add_document_filesize_empty_od_error_explanation: "Vous ne pouvez pas ajouter de fichier vide à un référentiel IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Ajoutez un contenu au fichier et essayez à nouveau d'ajouter le fichier ou ajoutez un autre élément.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "Impossible d'ouvrir la recherche croisée dans les référentiels.",
		unified_search_repository_not_found_error_explanation: "La recherche croisée dans les référentiels comprend un ou plusieurs référentiels non valides. Ce problème peut se produire lorsque les référentiels inclus dans la recherche sont supprimés de l'application ou du bureau en cours.",
		unified_search_repository_not_found_error_userResponse: "Si vous disposez des droits nécessaires pour modifier la recherche, sauvegardez-la de nouveau. Lorsque vous sauvegardez la recherche, le client Web supprime les référentiels non valides de celle-ci. Si vous ne possédez pas les droits appropriés pour modifier la recherche, demandez au propriétaire de la recherche ou à votre administrateur système de sauvegarder de nouveau la recherche.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "Impossible de créer un document.",
		edit_document_using_office_online_error: "Impossible d'ouvrir le document.",
		edit_document_using_office_online_error_explanation: "L'URL de Microsoft Office Online Server n'est pas configurée.",
		edit_document_using_office_online_error_userResponse: "Pour que vous puissiez utiliser Office Online, votre administrateur doit au préalable activer Office Online Server sur un référentiel et spécifier l'URL de Microsoft Office Online Server.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "Le document ne peut pas être ouvert dans Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Demandez à votre administrateur de mettre à jour l'intégration avec MS Office Online Server.<br><br> Si l'utilisateur doit pouvoir accéder à ce document depuis Microsoft Office Online, allez à la page Intégration d'édition du référentiel et mettez à jour l'intégration avec MS Office Online Server de manière à inclure la classe dans la liste des classes à modifier pour le support d'Office Online. ",		
		browser_not_support_this_viewer: "L'afficheur configuré n'est pas compatible avec votre navigateur.",
		browser_not_support_this_viewer_explanation: "Le ${0} n'est pas pris en charge par le navigateur.",
		browser_not_support_this_viewer_userResponse: "Utilisez un autre afficheur pour ouvrir le document. La liste des navigateurs pris en charge figure dans le document <i>Prérequis matériels et logiciels pour IBM Content Navigator</i> sur le site de support logiciel IBM.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Informations de flux de travaux",
		process_information_info_text: "L'élément sélectionné est en cours d'exécution sur les flux de travaux suivants.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Est égal à",
		operator_NOTEQUAL: "Différent de",
		operator_LIKE: "Similaire à",
		operator_STARTSWITH: "Commence par",
		operator_ENDSWITH: "Se termine par",
		operator_NOTLIKE: "Ne correspond pas à",
		operator_NULL: "Est vide",
		operator_NOTNULL: "N'est pas vide",
		operator_LESS: "Est inférieur à",
		operator_LESSOREQUAL: "Est inférieur ou égal à",
		operator_GREATER: "Est supérieur à",
		operator_GREATEROREQUAL: "Est supérieur ou égal à",
		operator_BETWEEN: "Compris entre",
		operator_NOTBETWEEN: "Non compris entre",
		operator_IN: "Inclure tout",
		operator_INANY: "Inclure tous",
		operator_NOTIN: "Exclure tous",
		operator_CONTAINS: "Contient",

		/* SearchForm widget */
		search_button_tooltip: "Recherche les documents qui correspondent à vos critères.",
		reset_button_tooltip: "Réinitialise la recherche sur les valeurs par défaut définies par votre administrateur.",
		clear_button_tooltip: "Supprime toutes les valeurs que vous avez entrées pour la recherche.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Sélectionner la recherche",
		append_to_search: "Ajouter à la recherche",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nouvelle recherche",
		new_unified_search: "Nouvelle recherche croisée dans les référentiels",
		searh_name_contains: "Le nom de recherche contient",
		keep_search_criteria_expanded: "Garder les critères de recherche ouverts",
		showing_results: "Affichage des résultats pour :",
		open_in_new_window: "Ouvrir dans une nouvelle fenêtre",
		open_in_new_tab: "Ouvrir dans un nouvel onglet",
		close_tab: "Fermer l'onglet",
		add_repository: "Ajouter un référentiel",
		edit_repository: "Editer un référentiel",
		remove_repository: "Retirer",
		search_scope: "Etendue de la recherche",
		search_class_template: "Classe",
		object_type_version: "Type et version de l'objet",
		not_applicable: "Non applicable",
		unified_search_including_subfolders: " (sous-dossiers inclus)",
		unified_search_dialog_intro_text: "Sélectionnez le référentiel et la recherche ou les classes que vous voulez inclure à la recherche.",
		unified_search_class_or_template: "Classe ou modèle",

		select_object_fieldset_legend: "Comment souhaitez-vous rechercher les éléments à joindre :",
		select_object_create_new_search: "Nouvelle recherche",
		select_object_search_template: "Recherche existante",

		search_criteria: "Critères de recherche :",
		search_criteria_no_colon: "Critères de recherche",
		search_in_multiple: "Rechercher dans (${0}) :",
		search_location_including_subfolders: "${0} y compris les sous-dossiers",
		search_class: "Classe :",
		search_class_multiple: "Classe (${0}) :",
		search_class_including_subclasses: "${0} y compris les sous-classes",
		search_class_all_pseudo: "Tout",
		search_results: "Résultats de la recherche",
		select_operator: "Sélectionner un opérateur",
		ending_value: "La valeur de fin pour la propriété ${0} est :",
		search_options: "Options de recherche :",
		search_version: "Version :",
		search_released_version: "Version publiée",
		search_current_version: "Version actuelle",
		search_all_versions: "Toutes les versions",
		search_file_type_filter: "Filtre de type de fichier :",
		search_one_file_type: "1 type de fichier",
		search_many_file_types: "${0} types de fichier",
		search_action_filter: "Filtre d'action :",
		search_action_filter_hover_help: "Affiner les résultats pour inclure uniquement les fichiers sur lesquels les utilisateurs ont effectué une action spécifique.<br/>Par exemple, vous pouvez rechercher uniquement les documents que vous avez ajoutés le 20 septembre 2012.",
		search_action_filter_enabled: "Le filtre d'action est activé",
		search_enable: "Activer",
		search_disable: "Désactiver",
		search_by: "par",
		search_added: "Ajouté",
		search_modified: "Modifié",
		search_checked_out: "Réservé",
		search_date_operator_on: "Activé",
		search_date_operator_not_on: "Pas le",
		search_date_operator_before: "Avant le",
		search_date_operator_after: "Après",
		search_version_hover_help_p8: "Une version publiée est disponible pour tous les utilisateurs. Un document dont la version est en cours signifie qu'un ou plusieurs utilisateur(s) modifient le document.",
		search_version_hover_help_cm: "Une version en cours est la dernière version de l'élément.",
		search_using: "Rechercher les éléments qui correspondent :",
		search_property_and_text_criteria: "A la fois aux valeurs de propriété et aux critères de texte",
		search_property_or_text_criteria: "Soit aux valeurs de propriété, soit aux critères de texte",
		search_property_and_text: "A la fois aux critères de propriété et de texte",
		search_property_or_text: "Soit aux critères de propriété, soit aux critères de texte",
		search_property_options: "Options de propriété :",
		search_property_option_match_all: "Toutes les propriétés",
		search_property_option_match_any: "Une des propriétés",
		search_property_option_match_all_summary: "Correspondance globale",
		search_property_option_match_any_summary: "Correspondance partielle",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Minimum",
		search_content_size_filter: "Filtre de taille de contenu :",
		search_content_size_filter_any: "Toute taille de contenu",

		/* Search work options */
		search_work_filter: "Filtre d'élément de travail :",
		search_work_filter_hover_help: "Affinez les résultats pour inclure uniquement les éléments qui se trouvent dans un flux de travaux. Par exemple, vous pouvez affiner les résultats pour inclure uniquement les éléments de travail qui sont actifs.<br /><br />Cette option ne s'applique pas si vous souhaitez afficher toutes les versions des éléments qui sont renvoyés par la recherche.",
		search_work_filter_enabled: "Le filtre d'élément de travail est activé",
		search_work_filter_status: "Statut :",
		search_work_filter_step: "Etape :",
		search_work_filter_owner: "Propriétaire :",
		search_work_filter_status_all: "Tous les éléments",
		search_work_filter_status_active: "Eléments actifs",
		search_work_filter_status_suspended: "Eléments en suspens",
		search_work_filter_process_all: "Tous les flux de travaux",
		search_work_filter_step_all: "Toutes les étapes",
		search_work_filter_owner_all: "Tous les utilisateurs",
		search_work_filter_step_error: "Le nom de l'étape n'existe pas.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "La recherche ne peut pas aboutir sans informations supplémentaires. Entrez une valeur pour au moins une condition.",
		search_insufficient_input_box: "La recherche ne peut pas aboutir sans informations supplémentaires. Entrez les critères de recherche de texte ou sélectionnez un modèle de métadonnées.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "La recherche ne peut pas être configurée pour s'exécuter à l'ouverture sans informations supplémentaires. Entrez une valeur pour au moins une condition.",
		search_member_required: "Si vous souhaitez partager cette recherche avec des utilisateurs et des groupes particuliers, vous devez sélectionner au moins un utilisateur ou un groupe.",
		search_criteria_layout_and: "AND",
		search_criteria_layout_or: "OR",
		search_prompt_close_without_save: "Voulez-vous fermer sans sauvegarder vos modifications ?",
		search_prompt_close_all_without_save: "Voulez-vous fermer tous les onglets sans sauvegarder vos modifications ?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "L'un des types de critère de recherche suivants n'est pas valide pour ce référentiel : ${0}. Pour exécuter la recherche dans le client Web, les critères non valides doivent être supprimés. Si vous sauvegardez la recherche, les critères non valides seront supprimés. Si vous ne voulez pas modifier la recherche, fermez la recherche.",
		search_invalid_repository: "Un ou plusieurs référentiels",
		search_invalid_class: "Une ou plusieurs classes",
		search_invalid_folder: "Un ou plusieurs dossiers",
		search_invalid_file_type: "Un ou plusieurs types de fichier",
		search_invalid_property: "Une ou plusieurs propriétés",
		search_invalid_text_search: "Critères de recherche de texte",
		search_invalid_work: "Critères de filtrage d'élément de travail",

		search_operator_pulldown_missing: "Vous devez indiquer un opérateur. Sélectionnez un opérateur dans le menu déroulant. Si vous ne voyez aucun opérateur, demandez à votre administrateur système de contrôler l'onglet <b>Recherche</b> de l'outil d'administration pour voir si tous les opérateurs sont masqués. Dans le cas d'une recherche inter-référentiels, il se peut que le menu déroulant ne contienne aucun opérateur si les propriétés mappées entre elles n'ont aucun opérateur en commun.",

		/*SearchBuilder */
		open_search_builder: "Nouvelle recherche",
		document_type: "Classe",
		show_all_properties: "Afficher toutes les propriétés",
		text_search_label: "Trouver des éléments avec les termes suivants :",
		text_search_place_holder: "Utilisez une combinaison de termes et d'opérateurs : * ? ou des \"expressions offrant une correspondance exacte\"",
		text_search_place_holder_box: "Utilisez une combinaison de termes et d'opérateurs : AND, OR, NOT et des \"expressions offrant une correspondance exacte\"",
		text_search_place_holder_cascade_proximity: "Utilisez une combinaison de termes et d'opérateurs : * ou ?",
		text_search_place_holder_common: "Utilisez une combinaison de termes et des \"expressions offrant une correspondance exacte\"",
		text_search_hover_help_p8: "Utilisez l'astérisque (*) ou le point d'interrogation (?) comme caractère générique. Utilisez les guillemets doubles (\"\") pour rechercher des correspondances exactes.",
		text_search_hover_help_p8_only_crs: "Utilisez l'astérisque (*) ou le point d'interrogation (?) comme caractère générique. Utilisez les guillemets doubles (\"\") pour rechercher des correspondances exactes. Lorsque vous spécifiez plusieurs termes, une recherche inter-référentiel renvoie les éléments qui contiennent l'un de ces termes.",
		text_search_hover_help_cm: "Utilisez l'astérisque (*) ou le point d'interrogation (?) comme caractère générique. Utilisez les guillemets doubles (\"\") pour rechercher des correspondances exactes. Placez le signe moins (-) avant les termes à exclure et le signe plus (+) avant les termes à inclure.",
		text_search_hover_help_box: "Utilisez AND entre les termes pour rechercher tous les termes. Utilisez OR entre les termes pour rechercher l'un des termes. Utilisez les guillemets doubles (\"\") pour rechercher des correspondances exactes. Précédez un terme de NOT pour l'exclure.",
		text_search_hover_help_common: "Utilisez les guillemets doubles (\"\") pour rechercher des correspondances exactes. Lorsque vous spécifiez plusieurs termes, une recherche inter-référentiel renvoie les éléments qui contiennent tous ces termes.",
		text_search_options: "Options de texte :",
		text_search_options_hover_help: "Si vous utilisez des opérateurs autres que les caractères génériques, sélectionnez Opérateurs avancés.",
		text_search_option_any: "L'un des termes",
		text_search_option_all: "Tous les termes",
		text_search_option_proximity: "A proximité des mots :",
		text_search_option_none: "Opérateurs avancés",
		text_search_option_authoring: "La recherche de texte est :",
		text_search_option_authoring_hover_help: "Choisissez une option qui détermine la manière dont vous souhaitez mettre les critères de recherche de texte à disposition des utilisateurs. Si vous ne souhaitez pas inclure de critères de recherche de texte dans la recherche, masquez cette option. Sinon, vous pouvez autoriser les critères de recherche de texte à être édités ou requis par les utilisateurs ou laisser ces critères en lecture seule.",
		text_search_option_hide: "Masquer les critères",
		text_search_option_hide_hover_help: "Sélectionnez cette option pour n'inclure aucun critère de recherche de texte et ne pas autoriser les autres utilisateurs à en spécifier.",
		text_search_option_in: "Dans la balise HTML/XML ${0}",
		text_search_option_paragraph: "Dans le même paragraphe",
		text_search_option_sentence: "Dans la même phrase",
		text_search_option_vql: "Requête VQL",
		text_search_option_none_hover_help: "Insérez - avant les termes à exclure.",
		text_search_option_cascade_proximity_hover_help: "Limite les résultats de recherche aux termes figurant dans un ensemble de mots n'incluant pas de phrase exacte.",

		box_search_metadata: "Métadonnées :",
		box_search_select_template: "Sélectionner un modèle",
		box_search_no_templates: "Aucun modèle n'est disponible",
		box_text_search_options_search_within: "Etendue de la recherche :",
		box_text_search_options_search_within_everything: "Tout",
		box_text_search_options_search_within_file_content: "Contenu du document",
		box_text_search_options_search_within_tags: "Balises",
		box_text_search_options_limit_to: "Limiter la recherche à :",

		add_property: "Ajouter une propriété",
		edit_template: "Editer la recherche",
		save_search: "Sauvegarder la recherche",
		search_template_name: "Nom :",
		search_template_desc: "Description :",
		auto_run: "Exécuter la recherche à l'ouverture",
		show_in_tree: "Afficher la recherche dans l'arborescence.",
		show_in_tree_hover_help: "Si une recherche est enregistrée dans un dossier, elle s'affiche uniquement dans la liste de contenu par défaut. Si vous sélectionnez cette option, la recherche est également affichée dans la vue Parcourir de l'arborescence du dossier.  La recherche s'affiche toutefois dans l’arborescence du dossier uniquement si vous l'enregistrez dans un dossier.",
		share_search_with: "Partager la recherche avec :",
		remove_member: "Retirer ${0}",
		ok_button_label: "OK",
		save_template: "Sauvegarder",
		save_template_title: "Si vous devez rechercher fréquemment des éléments spécifiques, sauvegardez vos critères de recherche.",
		remove_criterion: "Retirer",
		apply_button_label: "Appliquer",
		empty_search_results_pane: "Effectuez une recherche pour obtenir des résultats.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Référentiel entier",

		repository_already_selected: "Le référentiel ${0} ne peut pas être ajouté à la recherche croisée dans les référentiels car il est déjà inclus à la recherche. <br/> Un référentiel ne peut être inclus qu'une fois à la recherche croisée dans les référentiels. <br/>Sélectionnez un référentiel différent à inclure à la recherche croisée dans les référentiels.",

		repository_limit_reached: "Le référentiel ${0} ne peut pas être ajouté à la recherche inter-référentiels. Vous pouvez ajouter un maximum de ${1} référentiels à la recherche.",

		nomore_criteria_toappend: "Toutes les propriétés mappées font déjà partie des critères de recherche. Aucune propriété n'a été ajoutée aux critères de recherche.",
		nomore_criteria_toappend_regular: "Toutes les propriétés font déjà partie des critères de recherche. Aucune propriété n'a été ajoutée aux critères de recherche.",

		/* OD Save Search dialog */
		reload_label: "Recharger",
		od_save_search_help_text: "Entrez un nom pour la recherche ou sélectionnez une recherche existante à remplacer",
		public_access_label: "Permettre à d'autres utilisateurs d'utiliser cette recherche",
		od_delete_search_help_text: "Sélectionnez une ou plusieurs recherches à supprimer",
		delete_save_searches: "Supprimez les recherches sauvegardées",

		/* Unified Search */
		unified_search_enable_text_search: "Inclure les critères de recherche de texte",
		unified_search_text_search_enabled: "Recherche de texte incluse",
		unified_search_mapping: "Mappage",
		unified_search_new_mapping: "Nouveau mappage",
		unified_search_mapping_name: "Nom du mappage",
		unified_search_mapping_dialog_instructions: "Sélectionnez les propriétés que vous souhaitez mapper. Certaines propriétés peuvent être mappées aux propriétés avec un type de données différent. Par exemple, vous pouvez mapper une propriété de chaîne à une propriété de type entier. Lorsque vous mappez une propriété avec une autre, chaque propriété est traitée comme une propriété unique dans la recherche croisée dans les référentiels.",
		unified_search_filter_available_properties: "Filtrer les propriétés disponibles",
		unified_search_available_properties: "Propriétés disponibles",
		unified_search_mapped_properties: "Propriétés mappées",
		unified_search_single_values: "Valeurs uniques",
		unified_search_multiple_values: "valeurs multiples",
		unified_search_add_mapping: "Ajouter un mappage",
		unified_search_warn_remove_repository: "Le référentiel sélectionné est utilisé dans les critères de recherche. \nSi vous supprimez le référentiel, les mappages et critères de recherche qui incluent le référentiel seront supprimés. \n\nVoulez-vous supprimer le référentiel ?",
		unified_search_warn_update_repository_mappings: "La modification de la sélection de propriété pour ce référentiel affecte les critères de recherche.\n\nLes critères de recherche incluent un ou plusieurs mappages qui comportent une ou plusieurs propriétés que vous supprimez. Les mappages qui incluent des propriétés en cours de suppression doivent être supprimés. Les critères de recherche qui incluent ces mappages doivent être supprimés afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour les options de référentiel et supprimer les mappages et les critères de recherche ?",
		unified_search_warn_update_repository_mappings_reset: "L'inclusion des critères de recherche de texte pour ce référentiel affecte les critères de recherche inter-référentiel.\n\nLes critères de recherche de propriétés qui incluent un mappage avec des propriétés pour ce référentiel doivent être effacés afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour les options du référentiel et effacer les critères de recherche ?",
		unified_search_warn_update_repository_text_criteria: "La suppression des critères de recherche de texte pour ce référentiel affecte les critères de recherche croisée dans les référentiels.\n\nLes critères de recherche de texte doivent être supprimés des critères de recherche croisée dans les référentiels afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour l'option de référentiel et supprimer les critères de recherche de texte ?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "La suppression des critères de recherche de texte et la modification de la sélection de propriété pour ce référentiel affecte les critères de recherche croisée dans les référentiels.\n\nLes critères de recherche de texte doivent être supprimés des critères de recherche croisée dans les référentiels afin d'effectuer la recherche. De plus, les critères de recherche de propriétés incluent un ou ou plusieurs mappages qui comportent une ou plusieurs propriétés que vous supprimez. Les mappages qui incluent des propriétés en cours de suppression doivent être supprimés. Les critères de recherche de propriétés qui incluent ces mappages doivent être supprimés afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour les options de référentiel et supprimer les critères de recherche de texte, les mappages et les critères de recherche de propriétés ?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "L'exclusion des critères de recherche de texte pour ce référentiel affecte les critères de recherche inter-référentiel.\n\nLes critères de recherche de propriétés qui incluent un mappage avec des propriétés pour ce référentiel doivent être effacés afin d'effectuer la recherche. Il faudra peut-être supprimer les critères de recherche de texte des critères de recherche inter-référentiel afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour les options du référentiel et effacer les critères de recherche ?",
		unified_search_warn_remove_mapping: "La suppression des mappages affecte les critères de recherche.\n\nLes critères de recherche qui utilisent le mappage doivent être supprimés afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour les mappages et supprimer les critères de recherche ?",
		unified_search_warn_update_mapping: "Les modifications apportées à ce mappage affectent les critères de recherche.\n\nLes critères de recherche qui utilisent le mappage doivent être effacés afin de s'assurer que la recherche n'inclut pas d'opérateurs ou de valeurs non valides.\n\nVoulez-vous mettre à jour le mappage et effacer les critères de recherche ?",
		unified_search_warn_update_mapping_not_searchable: "Les modifications apportées à ce mappage affectent les critères de recherche.\n\nLorsque les propriétés mappées sont définies à des fins d'affichage uniquement, n'utilisez pas le mappage dans les critères de recherche. Les critères de recherche qui utilisent le mappage doivent être supprimés afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour le mappage et supprimer les critères de recherche ?",
		unified_search_warn_update_mapping_box_searchable: "Les modifications apportées à ce mappage affectent les critères de recherche.\n\nLes critères de recherche incluent déjà plusieurs fois ce mappage et si vous ajoutez la propriété ${0} provenant du référentiel ${1}, les critères de recherche incluent la propriété ${0} un trop grand nombre de fois. Les critères de recherche qui utilisent le mappage doivent être supprimés afin d'effectuer la recherche.\n\nVoulez-vous mettre à jour le mappage et supprimer les critères de recherche ?",
		unified_search_details: "Détails de la recherche croisée dans les référentiels",
		unified_search_fixed_value_property: "Propriété de valeur fixe",
		unified_search_required_property: "Propriété requise",
		unified_search_display_only_property: "Propriété pour affichage uniquement",
		unified_search_missing_required_properities: "La recherche ne peut pas être sauvegardée ou exécutée.<br/>Les propriétés suivantes sont obligatoires :${0} vous devez les inclure à un mappage et ajouter les propriétés et les valeurs aux critères de recherche.",
		unified_search_property_repostory: "${0} (Référentiel : ${1})",
		unified_search_builder_no_mappings: "Impossible d'exécuter la recherche.<br/>Vous devez créer un mappage de propriétés et l'inclure dans <b>Affichage des résultats</b> afin que la recherche puisse afficher vos résultats.",
		unified_search_builder_insufficient_criteria_to_run: "Impossible d'exécuter la recherche.<br/>Le critère de recherche n'inclut pas le critère de recherche de texte ou les valeurs de propriété pour les référentiels suivants :${0}Pour chaque référentiel inclus dans la recherche, vous devez entrer le critère de recherche de texte ou créer un mappage de propriétés, l'inclure dans les critères de propriétés et spécifier une valeur de propriété.",
		unified_search_builder_insufficient_criteria_to_save: "Impossible de sauvegarder la recherche.<br/>La recherche n'inclut pas le critère de recherche pour les référentiels suivants :${0}Pour chaque référentiel inclus dans la recherche, vous devez utiliser l'une des options suivantes :<ol><li>Créez un mappage de propriétés et incluez-le dans les critères de propriétés.</li><li>Modifiez le référentiel pour qu'il inclue le critère de recherche de texte et créez un mappage de propriétés et incluez-le dans <b>Affichage des résultats</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "Impossible d'exécuter la recherche.<br/>Pour chaque référentiel inclus dans la recherche, spécifiez au moins une valeur de propriété. Par exemple, vous pouvez spécifier des valeurs pour les propriétés suivantes : ${0}",
		unified_search_runtime_insufficient_criteria_text: "Impossible d'exécuter la recherche.<br/>Les critères de recherche de texte sont requis.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "Impossible d'exécuter la recherche.<br/>Pour chaque référentiel inclus dans la recherche, spécifiez au moins une valeur de propriété ou entrez les critères de recherche de texte. Par exemple, vous pouvez spécifier des valeurs pour les propriétés suivantes : ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "Impossible d'exécuter la recherche.<br/>Les critères de recherche de texte sont requis. Pour chaque référentiel inclus dans la recherche, spécifiez au moins une valeur de propriété ou entrez les critères de recherche de texte. Par exemple, vous pouvez spécifier des valeurs pour les propriétés suivantes : ${0}",
		unified_search_invalid_criteria: "La recherche contient des critères non valides empêchant l'exécution de celle-ci.<br/>Les critères non valides ont été supprimés. Cependant, vous devez sauvegarder les changements apportés à la recherche avant de pouvoir lancer celle-ci. Si vous ne souhaitez pas sauvegarder les changements, fermez la recherche.<br/><br/>Les éléments suivants ont été supprimés ou modifiés :${0}",
		unified_search_invalid_fixed_values: "La recherche ne peut pas être sauvegardée ou exécutée.<br/>Les critères de recherche suivants sont des valeurs fixes qui ne sont pas valides :${0}Effectuez l'une des actions suivantes pour résoudre le problème :<ul><li>Supprimez les critères de recherche qui contiennent des valeurs non valides</li><li>Editez les mappages qui comprennent la propriété IBM Content Manager OnDemand avec la valeur fixe pour supprimer la propriété.</li><li>Editez les mappages qui comprennent la propriété IBM Content Manager OnDemand avec la valeur fixe pour rendre toutes les propriétés compatibles. Pour plus d'informations sur les propriétés qui peuvent être mappées, voir le Lien En savoir plus dans le texte d'introduction de la partie supérieure de la fenêtre de mappage des propriétés.</li></ul>",
		unified_search_cannot_add_properties: "Vous ne pouvez pas ajouter des propriétés à cette recherche.<br/>Toutes les propriétés mappées disponibles figurent déjà dans les critères de recherche et elles ne peuvent être ajoutées à la recherche qu'une seule fois.",
		unified_search_mapping_not_viewable: "Les propriétés de modèle Box ne peuvent pas être affichées dans les résultats de la recherche. Si vous souhaitez ajouter ce mappage comme colonne, vous devez mapper au moins une propriété qui ne correspond pas à une propriété de modèle Box. Par exemple, vous pouvez sélectionner une propriété d'un autre référentiel.",

		unified_search_returned_more: "Au moins un référentiel a renvoyé un nombre de résultats supérieur au maximum autorisé.",
		unified_search_partial_failure: "Une erreur s'est produite sur au moins un référentiel.",
		unified_search_partial_failure_and_returned_more: "Une erreur s'est produite dans au moins un référentiel et au moins un référentiel a renvoyé un nombre de résultats supérieur au maximum autorisé.",
		unified_search_see_analysis: "Voir l'analyse des résultats.",
		unified_search_analysis_intro_returned_more: "Pour chaque référentiel ayant renvoyé un nombre de résultats supérieur au maximum autorisé, essayez d'affiner les critères de recherche afin de réduire le nombre de résultats. Vous pouvez également effectuer une recherche sur un seul référentiel afin de renvoyer plus de résultats que le nombre maximal autorisé pour une recherche croisée dans plusieurs référentiels.",
		unified_search_analysis_intro_partial_failure: "Examinez les informations d'erreur renvoyées par le ou les référentiels. Le cas échéant, corrigez les erreurs et exécutez de nouveau la recherche inter-répertoires.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Pour chaque référentiel où une erreur s'est produite, essayez de résoudre le problème et relancez la recherche.<br/><br/>Pour chaque référentiel ayant renvoyé un nombre de résultats supérieur au maximum autorisé, essayez d'affiner les critères de recherche afin de réduire le nombre de résultats. Vous pouvez également effectuer une recherche sur un seul référentiel afin de renvoyer plus de résultats que le nombre maximal autorisé pour une recherche croisée dans plusieurs référentiels.",
		unified_search_results_found: "Résultats trouvés",
		unified_search_maximum_allowed: "Maximum autorisé",
		unified_search_maximum_exceeded: "Maximum dépassé",

		unified_search_mapping_rule_box: "Cette propriété ne peut pas être ajoutée au mappage.<p>La propriété ${0} provenant du référentiel ${1} figure déjà dans un autre mappage et les propriétés pouvant être recherchées provenant de ce référentiel ne peuvent être incluses que dans un seul mappage par recherche.<br/>Sélectionnez une propriété différente à ajouter au mappage.</p>",
		unified_search_mapping_rule_repository: "La propriété ne peut pas être ajoutée au mappage.<br/>Le mappage inclut déjà une propriété à partir du référentiel ${0}. Un mappage peut inclure uniquement une propriété à partir d'un référentiel.<br/>Sélectionnez un référentiel différent à partir duquel ajouter une propriété ou créez un mappage pour la propriété sélectionnée.",
		unified_search_mapping_rule_data_type: "La propriété ne peut pas être ajoutée au mappage.<br/>Une propriété ${0} ne peut pas être mappée dans une propriété ${1}. Sélectionnez une propriété différente à mapper ou créez un nouveau mappage pour la propriété sélectionnée.<br/>Pour plus d'informations sur les propriétés qui peuvent être mappées, voir le Lien En savoir plus dans le texte d'introduction de la partie supérieure de cette fenêtre.",
		unified_search_mapping_rule_cardinality: "La propriété ne peut pas être ajoutée au mappage.<br/>Toutes les propriétés prennent en charge des valeurs uniques ou multiples. La propriété sélectionnée prend en charge ${0} et les propriétés du mappage prennent en charge ${1}.<br/>Sélectionnez une propriété différente à ajouter au mappage ou créez un mappage pour la propriété sélectionnée.",
		unified_search_mapping_rule_fixed_value: "La propriété ne peut pas être ajoutée au mappage.<br/>Le mappage inclut déjà une propriété possédant une valeur fixe. Un mappage ne peut contenir qu'une propriété avec une valeur fixe.<br/>Sélectionnez une propriété différente à ajouter au mappage ou créez un mappage pour la propriété sélectionnée.",
		unified_search_mapping_rule_child_component: "La propriété ne peut pas être ajoutée au mappage.<br/>Une propriété possédant un composant enfant ne peut pas être mappée avec d'autres propriétés. Pour rechercher cette propriété, créez un mappage pour la propriété sélectionnée.",
		unified_search_mapping_rule_operator_intersection: "La propriété ne peut pas être ajoutée au mappage.<br/>Toutes les propriétés du mappage doivent posséder un ou plusieurs opérateurs en commun. Toutefois, la propriété ${0} ne contient pas d'opérateurs en commun avec les autres propriétés du mappage.<br/>Le cas échéant, sélectionnez une propriété différente. Si vous devez inclure la propriété sélectionnée, travaillez avec votre administrateur système pour éditer les opérateurs associés à la propriété.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Paramètres avancés",
		advanced_search_options_intro: "Définissez les options avancées des critères.",
		advanced_search_options_editable: "Modifiable",
		advanced_search_options_readonly: "En lecture seule",
		advanced_search_options_required: "Obligatoire",
		advanced_search_options_hidden: "Masquée",
		advanced_search_options_property_editable:"La propriété est :",
		advanced_search_options_operators:"Opérateurs :",
		advanced_search_options_use_all:"Tout utiliser",
		advanced_search_options_use_selected:"Utiliser la sélection",
		advanced_search_options_operators_filtered: "Opérateurs filtrés",
		// Data types in lowercase
		data_type_boolean: "booléen",
		data_type_date: "date",
		data_type_time: "heure",
		data_type_timestamp: "horodatage",
		data_type_decimal: "valeur décimale",
		data_type_double: "nombre en virgule flottante",
		data_type_short: "entier",
		data_type_integer: "entier",
		data_type_long: "entier",
		data_type_string: "chaîne de texte",
		data_type_string_alpha: "chaîne alphabétique",
		data_type_string_alphanum: "chaîne alphanumérique",
		data_type_string_ext: "chaîne alphanumérique étendue",
		data_type_string_num: "Chaîne numérique",
		data_type_binary: "binaire",
		data_type_object: "objet",
		data_type_guid: "identificateur global unique",
		data_type_user: "utilisateurs",
		data_type_child_component: "composant enfant",

		/* Print Dialog */
		print_title: "Imprimer",
		print_message: "Impression : ${0}",
		print_print_button: "Imprimer",
		print_clean_margins_button: "Tout définir sur 0",
		print_type: "Type d'imprimante :",
		print_printer_server_options: "Options d'impression du serveur",
		print_printer_properties: "Propriétés de l'imprimante",
		print_printer_fax_properties: "Propriétés du fax",
		print_printer_name: "Nom de l'imprimante :",
		print_fax_recipient: "Destinataire",
		print_fax_sender: "Expéditeur",
		print_copies: "Copies :",
		print_local_orientation: "Orientation",
		print_local_orientation_landscape: "Paysage",
		print_local_orientation_portrait: "Portrait",
		print_local_margins: "Marges",
		print_local_margins_top: "Haut",
		print_local_margins_bottom: "Bas",
		print_local_margins_left: "Gauche",
		print_local_margins_right: "Droite",
		print_printer_server: "Serveur",
		print_printer_local: "Local",
		print_property_class: "Classe :",
		print_property_routing: "Routage :",
		print_property_pagedef: "DéfPage :",
		print_property_node: "Noeud :",
		print_property_writer: "Editeur d'imprimante :",
		print_property_formdef: "Définition de format :",
		print_property_printerid: "Dest :",
		print_property_forms: "Formulaires :",
		print_property_faxnotes: "Notes :",
		print_property_faxcompany: "Société :",
		print_property_faxnumber: "Numéro de fax :",
		print_property_faxname: "Nom :",
		print_property_faxsendertelnumber: "Numéro de téléphone :",
		print_property_faxcoverpage: "Page de garde :",
		print_property_faxsubject: "Objet :",
		print_saveoptions: "Sauvegarder les options d'impression",
		print_property_bannerpage: "Utiliser la page de garde",
		print_print_with_info_fields: "Imprimer avec les zones d'information",
		print_field_from: "De",
		print_field_to: "A",
		print_invalid_value_class: "Les caractères valides sont A-Z ou 0-9",
		print_invalid_value_pagedef: "Les caractères valides sont des caractères alphabétiques ou numériques, ou les caractères @, #, ou $",
		print_invalid_value_writer: "Les caractères valides sont des caractères alphabétiques ou numériques, ou les caractères @, #, ou $",
		print_invalid_value_formdef: "Les caractères valides sont des caractères alphabétiques ou numériques, ou les caractères @, #, ou $",
		print_invalid_value_forms: "Les caractères valides sont des caractères alphabétiques ou numériques, ou les caractères @, #, ou $",
		print_invalid_value_margin: "Les nombres valides sont compris entre ${0} et ${1}",
		print_status_message: "${0} documents ont été envoyés à l'imprimante ${1}.",

		print_applet_init_error: "L'applet d'impression ne peut pas être démarrée.",
		print_applet_init_error_explanation: "Les causes possibles de ce problème sont les suivantes : <br/><br/><ul><li>Java Runtime Environment (JRE) n'est pas installé sur votre poste de travail.</li><li>Le plug-in Java n'est pas activé dans votre navigateur Web.</li><li>La version JRE sur votre poste de travail n'est pas compatible avec la version d'IBM Content Navigator.</li><li>Le navigateur a expiré lors de l'attente du démarrage de l'applet d'impression.</li></ul>",
		print_applet_init_error_userResponse: "Pour résoudre le problème lié à l'environnement JRE, procédez comme suit :<br/><br/><ol><li>Vérifiez que JRE est installé sur votre poste de travail.</li><li>Vérifiez que le plug-in Java est activé dans votre navigateur Web.</li><li>Assurez-vous que la version de JRE sur votre poste de travail est compatible avec IBM Content Navigator et réessayez. Une liste des versions de JRE prises en charge figure dans le document <i>Prérequis matériels et logiciels pour IBM Content Navigator</i> sur le site de support logiciel IBM.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Page de garde",
		daeja_print_selected_documents_title: "Documents sélectionnés",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Respecter tous les critères de recherche",
		match_any_criteria: "Respecter l'un des critères de recherche",
		include_subfolders_summary: "${0} (inclure les sous-dossiers)",
		browse_button: "Parcourir&hellip;",
		search_for: "Rechercher :",
		object_type_documents: "Documents",
		object_type_folders: "Dossiers",
		object_type_documents_folders: "Documents et dossiers",
		object_type_web_links: "Liens Web",
		object_type_documents_folders_web_links: "Documents, dossiers et liens Web",

		/* SelectSearchFolderDialog */
		search_in: "Rechercher dans :",
		include_subfolders: "Inclure les sous-dossiers",

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
		locked_item_icon_title: "Verrouillé par ${0}",
		checked_out_icon_title: "Réservé par ${0}",
		major_minor_version_icon_title: "Version principale avec des versions secondaires",
		suspended_icon_title: "Le flux de travaux est suspendu",
		on_hold_icon_title: "En attente",
		has_notes_icon_title: "Contient des notes",
		record_icon_title: "Déclaré en tant qu'enregistrement",
		compound_document_icon_title: "Document composite",
		validateTemplate_icon_title: "Le modèle d'espace d'équipe nécessite une validation",
		offlineTemplate_icon_title: "Le modèle d'espace d'équipe est hors ligne",
		offlineTeamspace_icon_title: "L'espace d'équipe est hors ligne",
		pending_delete_icon_title: "L'espace d'équipe est en attente de suppression.",
		delete_error_icon_title: "L'espace d'équipe n'a pas pu être supprimé.",
		defaultTemplate_icon_title: "Modèle d'espace d'équipe par défaut",
		teamspace_icon_title: "Espace d'équipe",
		teamspace_template_icon_title: "Modèle d'espace d'équipe",
		has_bookmark_icon_title: "Possède un signet",
		read_only_icon_title: "En lecture seule",
		no_results_were_found: "Aucun résultat n'a été trouvé.",
		folder_is_empty: "Le dossier est vide.",
		no_checked_out_items: "Aucun élément réservé.",
		inbasket_is_empty: "La boîte de réception est vide.",
		worklist_is_empty: "La liste de travaux est vide.",
		tracker_milestone_completed: "Terminé",
		stepprocessor_attachments_title: "Table des matières",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Verrouiller les éléments",
		unlock_items: "Déverrouiller les éléments",
		checkin_item: "Restituer l'élément",

		/* Help */
		learn_more: "En savoir plus",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Ouvrir l'espace d'équipe",
		repository_tab_createWorkspace: "Nouvel espace d'équipe",
		repository_tab_createWorkspaceTemplate: "Nouveau modèle d'espace d'équipe",
		repository_tab_DefaultTemplate: "Par défaut",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Cette tâche copie des documents.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "Vous n'avez pas de droits d'édition pour le modèle d'espace d'équipe sélectionné.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "Voulez-vous vraiment supprimer l'espace d'équipe ${0} ? <br><br>Seuls les document figurant dans d'autres dossiers du référentiel sont conservés dans le référentiel. Tous les documents qui ne figurent que dans l'espace d'équipe seront supprimés.",
		teamspaceDecommissionLabel: "Suppression :",
		teamspaceDecommissionDescription: "La suppression de l'espace va supprimer cet espace d'équipe du serveur : indiquez la façon dont les artefacts d'équipe sont gérés.",
		teamspaceDecommissionOptions: "Options de suppression de l'espace d'équipe",
		teamspaceDecommissionDeleteAll: "Supprimer tous les artefacts de l'espace d'équipe",
		teamspaceDecommissionReFileAll: "Reclasser tous les artefacts d'espace d'équipe",
		teamspaceDecommissionReFileDestination: "Déplacer vers :",
		teamspaceDecommissionReFileIn: "Reclasser dans",
		teamspaceDecommissionTaskName: "Tâche de suppression d'espace d'équipe",
		teamspaceDecommissionTaskDescription: "Cette tâche supprime un espace d'équipe à partir du référentiel.",
		teamspaceDecommissionDeletionStarted: "L'espace d'équipe a été planifié pour la suppression",
		teamspaceDecommissionDeletionConnectionFailed: "Impossible d'exécuter la tâche de suppression d'un espace d'équipe, car la connexion au référentiel a échoué. Assurez-vous que les données d'identification de l'administrateur de référentiel sont correctes.",

		teamspace_edit_properties_notsupported: "Vous ne pouvez modifier les propriétés des espaces d'équipe qu'à partir de la vue Espaces d'équipe.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "L'équipe est hors ligne et peut uniquement être ouvert par les propriétaires de l'espace d'équipe",

		/* Teamspace Builder widget */
		workspace_validation_document: "Document :",
		workspace_validation_folder: "Dossier :",
		workspace_validation_ets: "Les modèles d'entrée suivants ne sont pas disponibles dans ce référentiel et ont été supprimés de la liste des modèles d'entrée sélectionnés :",
		workspace_validation_classes: "Les classes suivantes ne sont pas disponibles dans ce référentiel et ont été supprimées de la liste des classes sélectionnées :",
		workspace_validation_searches: "Les recherches suivantes ne sont pas disponibles dans ce référentiel et ont été supprimées de la liste des recherches sélectionnées :",
		workspace_validation_docs_folders: "Les documents et dossiers suivants ne sont pas disponibles dans ce référentiel et ont été supprimés de la liste des éléments inclus :",
		workspace_change_template_confirmation_question: "Si vous sélectionnez un autre modèle, tous vos changements seront perdus. Voulez-vous continuer ? \n",
		workspace_delete_item_confirmation_question: "Voulez-vous supprimer l'élément ${0} ?\n",
		workspace_delete_role_confirmation_question: "Voulez-vous supprimer le rôle ${0} ?\n",
		workspace_delete_confirmation_question: "Si vous supprimez un espace d'équipe, seul le conteneur d'espace d'équipe est supprimé. Les dossiers et documents de l'espace d'équipe restent sur le référentiel et vous pouvez les repérer via une recherche. Pour supprimer le contenu de l'espace d'équipe, supprimez d'abord les éléments dans l'espace d'équipe, puis supprimez l'espace d'équipe.<br><br>Voulez-vous supprimer l'espace d'équipe ${0} ?",
		workspacebuilder_instance_template_name_header: "Nom du modèle d'espace d'équipe",
		workspacebuilder_instance_template_description_header: "Description",

		workspacebuilder_template_tooltip_name: "Le nom de modèle ne peut pas contenir les caractères suivants : \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "Le nom d'espace d'équipe ne peut pas contenir les caractères suivants : \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Entrez une description qui permettra aux utilisateurs de faire leur choix correctement dans la liste des modèles. Par exemple, vous pouvez inclure des informations sur les utilisateurs ou l'utilisation visés du modèle.",
		workspacebuilder_instance_tooltip_description: "Entrez une description qui permettra aux utilisateurs de faire la distinction entre cet espace d'équipe et les autres.",

		workspacebuilder_template_edit_properties_pane: "Editer le modèle d'espace d'équipe",
		workspacebuilder_instance_properties_pane: "Définir l'espace d'équipe",
		workspacebuilder_template_properties_pane: "Définir le modèle d'espace d'équipe",

		workspacebuilder_instance_security_pane: "Définir la sécurité d'espace d'équipe",
		workspacebuilder_template_security_pane: "Définir la sécurité du modèle",

		workspacebuilder_layout_pane: "Sélectionner la présentation",
		workspacebuilder_search_templates_pane: "Sélectionner des recherches",
		workspacebuilder_document_folders_pane: "Inclure des dossiers et documents",
		workspacebuilder_doctypes_entryTemplates_pane: "Sélectionner des classes ou des modèles d'entrée",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Sélectionner des classes",
		workspacebuilder_security: "Sécurité de l'espace d'équipe",

		workspacebuilder_roles_pane: "Sélectionner des rôles",
		workspacebuilder_security: "Sécurité",

		workspacebuilder_properties_templates: "Modèles disponibles :",
		workspacebuilder_available_templates: "Recherches disponibles :",
		workspacebuilder_selected_templates: "Recherches sélectionnées :",
		workspacebuilder_templates_name: "Nom de la recherche",

		workspacebuilder_available_entryTemplates: "Modèles d'entrée disponibles",
		workspacebuilder_selected_entryTemplates: "Modèles d'entrée sélectionnés :",

		workspacebuilder_item_classes: "Classes disponibles :",
		workspacebuilder_item_classes_selected: "Classes sélectionnées :",
		workspacebuilder_properties_select_template: "Sélectionnez un modèle à utiliser pour cet espace d'équipe.",
		workspacebuilder_template_properties: "Définir le modèle d'espace d'équipe",
		workspacebuilder_instance_properties: "Définir l'espace d'équipe",
		workspacebuilder_template_introText: "Indiquez les composants communs que vous souhaitez inclure dans chaque espace d'équipe créé à partir de ce modèle en utilisant les sélections dans la navigation. Ensuite, cliquez sur <b>Terminer</b> pour rendre le modèle disponible pour les autres utilisateurs, qui pourront l'utiliser pour créer de nouveaux espaces d'équipe.",
		workspacebuilder_instance_introText: "Les équipes utilisent des espaces d'équipe pour partager des ensembles de documents spécifiques et les utiliser. Indiquez un nom et une description utiles pour cet espace d'équipe, afin de permettre aux utilisateurs de faire la distinction entre cet espace d'équipe et les autres. Vous pouvez personnaliser l'espace d'équipe en ajoutant des recherches, classes ou modèles d'entrée supplémentaires, ou des modèles d'entrée, des documents et des dossiers.",

		workspacebuilder_template_search_template_introText: "Sélectionnez les recherches par défaut que vous souhaitez inclure dans chaque espace d'équipe créé à partir de ce modèle. Si aucune recherche n'est sélectionnée, les utilisateurs d'espace d'équipe verront toutes les recherches auxquelles ils ont accès. Avec les droits appropriés, les utilisateurs peuvent partager et ajouter des recherches dans l'espace d'équipe.",
		workspacebuilder_instance_search_template_introText: "Incluez des recherches qui permettront aux utilisateurs d'espace d'équipe de terminer les tâches plus efficacement. Si aucune recherche n'est incluse, les utilisateurs d'espace d'équipe peuvent consulter toutes les recherches pour lesquelles ils disposent de droits. Les utilisateurs peuvent également ajouter et partager des recherches dans l'espace d'équipe avec les droits appropriés.",

		workspacebuilder_template_roles_introText: "Les utilisateurs d'espace d'équipe sont affectés à des rôles. Les rôles spécifient les tâches que les utilisateurs sont autorisés à exécuter. Cliquez sur les icônes près de chaque rôle pour voir les tâches autorisées. Choisissez les rôles qui sont appropriés pour l'espace d'équipe.",
		workspacebuilder_template_roles_modify_introText: "Vous pouvez modifier les droits associés à chaque rôle dans cet espace d'équipe. Informez les membres de l'espace d'équipe lorsque leurs autorisations changent.",

		workspacebuilder_template_roles_header_name: "Nom du rôle",

		workspacebuilder_template_folders_introText: "Sélectionnez les documents et dossiers par défaut à inclure dans chaque espace d'équipe créé à partir de ce modèle. Vous pouvez ajouter des documents en tant que liens ou copies. Utilisez les liens pour désigner les documents pour lesquels vous ne souhaitez pas de copies multiples, tels que les règles ou les procédures. Créez des copies de documents que les utilisateurs vont modifier, telles que les modèles et les formulaires.",
		workspacebuilder_instance_folders_introText: "Sélectionnez les documents et dossiers par défaut à inclure à l'espace d'équipe. Vous pouvez ajouter des documents en tant que liens ou copies. Utilisez les liens pour désigner les documents pour lesquels vous ne souhaitez pas de copies multiples, tels que les règles ou les procédures. Créez des copies de documents que les utilisateurs vont modifier, telles que les modèles et les formulaires.",

		workspacebuilder_template_roles_introText: "Spécifiez les rôles qui seront inclus à chaque espace d'équipe créé à partir de ce modèle. Vous pouvez également créer des rôles, que vous pouvez utiliser lorsque vous créez d'autres modèles d'espace d'équipe.",
		workspacebuilder_instance_users_introText: "Dans un espace d'équipe, chaque utilisateur est affecté à un ou plusieurs rôles qui spécifient les tâches qu'il peut accomplir. Ajoutez des utilisateurs à l'espace d'équipe et affectez des rôles aux utilisateurs.",

		workspacebuilder_instance_navigation_pane_title: "Générateur d'espace d'équipe",
		workspacebuilder_template_navigation_pane_title: "Générateur de modèle d'espace d'équipe",

		workspacebuilder_roles_roles_nopermissions: "Aucun droit n'est sélectionné pour le rôle {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Rôles sélectionnés :",
		workspacebuilder_roles_available_roles: "Rôles disponibles :",
		workspacebuilder_roles_privilege_header: "Droits",
		workspacebuilder_roles_select_role: "Sélectionner un rôle",
		workspacebuilder_roles_select_permission: "Sélectionner un droit",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Un rôle appelé {0} existe déjà. Vous devez spécifier un nom unique pour le rôle. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nom du rôle :",
		workspacebuilder_roles_edit_dialog_role_description: "Description du rôle :",
		workspacebuilder_roles_edit_dialog_title_new: "Nouveau rôle",
		workspacebuilder_roles_edit_dialog_title_edit: "Editer le rôle",

		workspacebuilder_roles_privileges_header: "Droits pour le rôle {0} :",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Droits pour le document :",
		workspacebuilder_roles_priv_group_folder: "Droits du dossier :",
		workspacebuilder_roles_priv_group_teamspace: "Droits de l'espace d'équipe :",
		workspacebuilder_roles_priv_group_item: "Droits du document et du dossier :",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Gérer les droits",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Les utilisateurs ayant ce droit peuvent gérer l'accès aux documents et aux dossiers de l'espace d'équipe. Ce droit comprend l'autorisation pour d'autres utilisateurs de supprimer, d'éditer des propriétés, de créer des sous-dossiers, etc.",

		workspacebuilder_roles_priv_deleteItems: "Supprimer",
		workspacebuilder_roles_plbl_deleteItems: "Les utilisateurs ayant ce droit peuvent supprimer des documents et des dossiers dans l'espace d'équipe.",

		workspacebuilder_roles_priv_createItems: "Créer",
		workspacebuilder_roles_plbl_createItems: "Les utilisateurs ayant ce droit peuvent créer des documents et des dossiers dans l'espace d'équipe.",

		workspacebuilder_roles_priv_viewItemProperties: "Afficher les propriétés",
		workspacebuilder_roles_plbl_viewItemProperties: "Les utilisateurs ayant ce droit peuvent afficher les propriétés des documents et des dossiers dans l'espace d'équipe, y compris les propriétés système.",

		workspacebuilder_roles_priv_modifyItemProperties: "Editer les propriétés",
		workspacebuilder_roles_plbl_modifyItemProperties: "Les utilisateurs ayant ce droit peuvent éditer les propriétés des documents et des dossiers dans l'espace d'équipe.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gérer les droits du dossier",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Les utilisateurs ayant ce droit peuvent gérer l'accès aux dossiers dans l'espace d'équipe. Ce droit comprend l'autorisation pour d'autres utilisateurs de supprimer des dossiers, d'éditer des propriétés du dossier, de créer des sous-dossiers, etc.",

		workspacebuilder_roles_priv_deleteFolders: "Supprimer des dossiers",
		workspacebuilder_roles_plbl_deleteFolders: "Les utilisateurs ayant ce droit peuvent supprimer des dossiers dans l'espace d'équipe.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Editer les propriétés du dossier",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Les utilisateurs ayant ce droit peuvent éditer les propriétés des dossiers dans l'espace d'équipe.",

		workspacebuilder_roles_priv_createSubfolders: "Créer des sous-dossiers",
		workspacebuilder_roles_plbl_createSubfolders: "Les utilisateurs ayant ce droit peuvent créer des dossiers dans l'espace d'équipe.",

		workspacebuilder_roles_priv_fileInFolders: "Ajouter aux dossiers",
		workspacebuilder_roles_plbl_fileInFolders: "Les utilisateurs ayant ce droit peuvent ajouter un lien vers les documents depuis les dossiers de l'espace d'équipe.",

		workspacebuilder_roles_priv_viewFolderProperties: "Afficher les propriétés du dossier",
		workspacebuilder_roles_plbl_viewFolderProperties: "Les utilisateurs ayant ce droit peuvent afficher les propriétés des dossiers dans l'espace d'équipe, y compris les propriétés système.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gérer les droits du document",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Les utilisateurs ayant ce droit peuvent gérer l'accès aux documents dans l'espace d'équipe. Ce droit comprend l'autorisation pour d'autres utilisateurs de supprimer des documents, d'éditer des propriétés de document, etc.",

		workspacebuilder_roles_priv_deleteDocuments: "Supprimer des documents",
		workspacebuilder_roles_plbl_deleteDocuments: "Les utilisateurs ayant ce droit peuvent supprimer des documents dans l'espace d'équipe.",

		workspacebuilder_roles_priv_promoteVersions: "Promouvoir les versions",
		workspacebuilder_roles_plbl_promoteVersions: "Les utilisateurs ayant ce droit peuvent affecter un nouveau numéro de version à des documents dans l'espace d'équipe.",

		workspacebuilder_roles_priv_modifyContent: "Editer des documents",
		workspacebuilder_roles_plbl_modifyContent: "Les utilisateurs ayant ce droit peuvent éditer le contenu de documents dans l'espace d'équipe.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Editer les propriétés de document",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Les utilisateurs ayant ce droit peuvent éditer les propriétés des documents dans l'espace d'équipe.",

		workspacebuilder_roles_priv_viewContent: "Afficher des documents",
		workspacebuilder_roles_plbl_viewContent: "Les utilisateurs ayant ce droit peuvent afficher des documents dans l'espace d'équipe.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Afficher les propriétés du document",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Les utilisateurs ayant ce droit peuvent afficher les propriétés des documents dans l'espace d'équipe, y compris les propriétés système.",

		workspacebuilder_roles_priv_addNewSearches: "Ajouter des recherches",
		workspacebuilder_roles_plbl_addNewSearches: "Les utilisateurs ayant ce droit peuvent ajouter des recherches à l'espace d'équipe. Par défaut, la recherche n'est pas disponible pour les autres utilisateurs.",

		workspacebuilder_roles_priv_createNewSearches: "Créer des recherches",
		workspacebuilder_roles_plbl_createNewSearches: "Les utilisateurs possédant cette autorisation peuvent créer de nouvelles recherches, mais ne peuvent pas sauvegarder les recherches. Si les utilisateurs ne disposent pas de cette autorisation, ils ne peuvent pas ajouter de documents déjà présents sur le référentiel à l'espace d'équipe.",

		workspacebuilder_roles_priv_shareSearches: "Partager des recherches",
		workspacebuilder_roles_plbl_shareSearches: "Les utilisateurs ayant ce droit peuvent partager des recherches qu'ils créent avec d'autres utilisateurs de l'espace d'équipe.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gérer des classes ou des modèles d'entrée",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Les utilisateurs ayant ce droit peuvent ajouter et supprimer des classes ou des modèles d'entrée depuis l'espace d'équipe.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gérer les classes",
		workspacebuilder_roles_plbl_addRemoveClasses: "Les utilisateurs ayant ce droit peuvent ajouter et supprimer des classes depuis l'espace d'équipe.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gérer les utilisateurs de l'espace d'équipe",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Les utilisateurs ayant ce droit peuvent ajouter et supprimer des utilisateurs et des groupes depuis l'espace d'équipe. En outre, ils peuvent gérer à quels rôles les utilisateurs sont affectés.",

		workspacebuilder_roles_priv_modifyRoles: "Modifier les rôles",
		workspacebuilder_roles_plbl_modifyRoles: "Les utilisateurs possédant cette autorisation peuvent modifier les autorisations de rôle pour l'espace d'équipe. Cette autorisation est disponible uniquement pour les propriétaires.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Sélection des utilisateurs",
		workspacebuilder_users_add_users_and_groups_button: "Ajout d'utilisateurs et de groupes...",
		workspacebuilder_users_users_or_group_header: "Utilisateur et groupe",
		workspacebuilder_users_roles_header: "Rôles",

		workspacebuilder_users_role_header: "Rôle",
		workspacebuilder_users_role_no_permissions: "Ce rôle n'a pas de droits",
		workspacebuilder_users_available_roles_label: "Rôles disponibles :",
		workspacebuilder_users_selected_users_and_groups_label: "Utilisateurs et groupes sélectionnés :",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "Impossible de sauvegarder l'espace d'équipe. Vous devez indiquer au moins un propriétaire pour cet espace d'équipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "Impossible de sauvegarder l'espace d'équipe. Tous les utilisateurs doivent posséder un rôle.",
		// end of select users

		workspacebuilder_search_templates: "Sélectionner des recherches",
		workspacebuilder_search_add: "Ajouter une recherche",
		workspacebuilder_properties_workspaceName: "Nom de l'espace d'équipe :",
		workspacebuilder_properties_templateName: "Nom du modèle :",
		workspacebuilder_properties_workspaceDescription: "Description de l'espace d'équipe :",
		workspacebuilder_properties_templateDescription: "Description du modèle :",
		workspacebuilder_properties_workspaceTemplate: "Modèle sélectionné :",
		workspacebuilder_properties_security: "Partager le modèle avec :",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Déplacer de l'espace d'équipe :",
		moveTeamspaceDocuments_security: "Partager le document avec :",
		moveTeamspaceDocuments_security_change: "Indiquez la sécurité personnalisée pour les éléments sélectionnés",
		moveTeamspaceDocuments_item_type_level: "Vous ne pouvez pas sélectionner Remplacer la sécurité des éléments sélectionnés car la classe de l'élément sélectionné est configurée pour utiliser uniquement la sécurité de niveau de classe",
		moveTeamspaceDocuments_security_inherit: "Hériter de la sécurité du dossier de destination",
		moveTeamspaceDocuments_file_info_text: "Vous pouvez déplacer les éléments d'un espace d'équipe vers un autre espace d'équipe ou un dossier.",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "Vous ne disposez pas des droits appropriés pour déplacer les éléments dans le dossier sélectionné.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "Vous ne disposez pas des droits appropriés pour déplacer les éléments à partir de l'espace d'équipe.",
		moveTeamspaceDocuments_move_mixed_items: "Vous ne pouvez pas remplacer la sécurité des éléments sélectionnés. Certains éléments ne sont pas gérés par l'espace d'équipe. Vous ne pouvez remplacer que la sécurité des éléments gérés par l'espace d'équipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Vous devez spécifier un nom pour l'espace d'équipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Vous devez spécifier un nom pour le modèle d'espace d'équipe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "Le nom d'espace d'équipe ne peut pas contenir les caractères suivants : \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "Le nom de modèle ne peut pas contenir les caractères suivants : \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Lien vers le document",
		workspacebuilder_folders_makeDocCopy: "Copier le document",
		workspacebuilder_folders_newfolder: "Nouveau dossier",
		workspacebuilder_folders_local_drive: "A partir du répertoire local",
		workspacebuilder_folders_from_repo: "A partir du référentiel",
		workspacebuilder_folders_add_doc: "Ajouter un document",
		workspacebuilder_folders_grid_name: "Nom",
		workspacebuilder_folders_props: "Propriétés",
		workspacebuilder_folders_remove: "Retirer",
		workspacebuilder_folders_delete: "Supprimer",
		workspacebuilder_folders_adddoc_local: "Ajouter un document à partir de l'unité locale",
		workspacebuilder_folders_adddoc_repo: "Ajouter un document à partir du référentiel",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "Le nom de dossier spécifié existe déjà. Spécifiez un autre nom de dossier.",

		workspacebuilder_classes_title: "Sélectionner des classes ou des modèles d'entrée",
		workspacebuilder_classes_title_cm: "Sélectionner des classes",
		workspacebuilder_classes_template_introText: "Indiquez si les espaces d'équipe qui sont créés à partir de ce modèle utiliseront des classes ou des modèles d'entrée pour ajouter des documents au référentiel. Si aucune classe n'est sélectionnée, les utilisateurs d'espaces d'équipe verront toutes les classes auxquelles ils ont accès.  Les utilisateurs peuvent modifier la liste des classes ou les modèles d'entrée dans l'espace d'équipe s'ils ont les droits appropriés.",
		workspacebuilder_classes_template_introText_cm: "Sélectionnez les classes que les utilisateurs peuvent utiliser pour ajouter des documents au référentiel. Si aucune classe n'est sélectionnée, les utilisateurs d'espaces d'équipe verront toutes les classes auxquelles ils ont accès. Les utilisateurs peuvent modifier la liste des classes dans l'espace d'équipe s'ils ont les droits appropriés.",
		workspacebuilder_classes_instance_introText: "Sélectionnez les classes ou modèles d'entrée que les utilisateurs peuvent utiliser pour ajouter des documents au référentiel. Si aucune classe n'est sélectionnée, les utilisateurs d'espace d'équipe verront toutes les classes auxquelles sur lesquelles ils disposent de droits. Les utilisateurs peuvent modifier la liste des classes ou les modèles d'entrée dans l'espace d'équipe s'ils ont les droits appropriés.",
		workspacebuilder_classes_instance_introText_cm: "Sélectionnez les classes que les utilisateurs peuvent utiliser pour ajouter des documents au référentiel. Si aucune classe n'est sélectionnée, les utilisateurs d'espace d'équipe verront toutes les classes auxquelles sur lesquelles ils disposent de droits. Les utilisateurs peuvent modifier la liste des classes dans l'espace d'équipe s'ils ont les droits appropriés.",
		workspacebuilder_classes_selection: "Sélectionner des classes :",
		workspacebuilder_classes_list: "Classes disponibles :",
		workspacebuilder_classes_columns_default: "Par défaut",
		workspacebuilder_classes_columns_className: "Nom de classe",
		workspacebuilder_classes_type_classes: "Utilisez des classes pour ajouter des documents",
		workspacebuilder_classes_type_classes_tooltip: "Les classes incluent les propriétés associées afin que les documents puissent être localisés pour une utilisation ultérieure.",
		workspacebuilder_classes_type_entryTemplates: "Utilisez des modèles d'entrée pour ajouter des documents",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Les modèles d'entrée garantissent que les informations fournies pour chaque document sont cohérentes et utilisent des valeurs prédéfinies.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nom du modèle d'entrée",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Description",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Vous devez ajouter au moins un modèle d'entrée à l'espace d'équipe.",

		workspacebuilder_classes_new: "Nouvelle classe",
		workspacebuilder_classes_add: "Ajouter une classe",
		workspacebuilder_entryTemplate_add: "Ajouter un modèle d'entrée",
		workspacebuilder_add_list: "Ajouter",
		workspacebuilder_makeDefault_list: "Utiliser par défaut",
		workspacebuilder_removeDefault_list: "Retirer par défaut",

		workspacebuilder_roles_title: "Sélectionner des rôles",
		workspacebuilder_roles_title_modify: "Modifier les rôles",

		workspacebuilder_selection_moveup: "Déplacer vers le haut",
		workspacebuilder_selection_movedown: "Déplacer vers le bas",
		workspacebuilder_selection_remove: "Retirer",
		workspacebuilder_selection_add: "Ajouter",
		workspacebuilder_selection_create_new_search: "Nouvelle recherche...",
		workspacebuilder_selection_create_new_role: "Nouveau rôle...",
		workspacebuilder_selection_make_role_available: "Rendre disponible",
		workspacebuilder_selection_make_role_available_tooltip: "Partage le rôle sélectionné avec d'autres modèles. Vous devez attribuer au moins un droit au rôle pour le partager.",

		workspacebuilder_navigation_next: "Suivant",
		workspacebuilder_navigation_finish: "Terminer",
		workspacebuilder_navigation_validate: "Valider",
		workspacebuilder_navigation_previous: "Précédent",
		workspacebuilder_navigation_cancel: "Annuler",
		workspacebuilder_navigation_customize: "Personnalisation",

		workspacebuilder_search_dialog_title: "Rechercher",
		workspacebuilder_dialog_close: "Fermer",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilité de modèle :",
		workspace_properties_templateState_tooltip: "Rendez le modèle indisponible pour empêcher les utilisateurs de créer des espaces d'équipe utilisant ce modèle.",
		workspace_properties_dialog_title: "Propriétés du modèle",
		workspace_properties_online_radio_option_label: "Rendre disponible",
		workspace_properties_offline_radio_option_label: "Rendre non disponible",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "Souhaitez-vous annuler sans sauvegarder vos changements ?",
		workspacebuilder_cancel_confirmation_button: "Oui",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Les éléments non valides seront supprimés du modèle et le modèle est mis à la disposition des utilisateurs.  Voulez-vous valider ce modèle d'espace d'équipe ?",
		workspacebuilder_validate_confirmation_button: "Oui",
		workspacebuilder_validate_confirmation_title: "Valider",

		/* Entry templates builder */
		entry_templates: "Gestionnaire de modèle d'entrée",
		no_entry_templates_were_found: "Il n'existe pas de modèle d'entrée",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtrer",

		/* Roleselector widget */
		role_selector_name: "Rôles :",

		/* User Group picker widget */
		directory_label: "Répertoire :",
		scope_label: "Rechercher :",
		name_starts_with_label: "Le nom commence par",
		name_contains_label: "Le nom contient",
		display_name_contains_label: "Le nom d'affichage contient",
		starts_with_label: "Commence par :",
		available_label: "Disponible :",
		available_heading: "Disponible",
		selected_label: "Sélectionné :",
		selected_heading: "Sélectionné",
		available_repositories_label: "Référentiels disponibles",
		selected_repositories_label: "Référentiels sélectionnés",
		default_repository: "Référentiel par défaut :",
		default_repository_placeholder: "Sélectionner un référentiel",
		default_role_placeholder: "Sélectionner un rôle",
		menu_label_placeholder: "Sélectionner ou entrer un libellé",
		default_repository_hover: "Indiquez le référentiel sélectionné par défaut lorsque les utilisateurs se connectent au client Web à partir de ce bureau.<br><br><b>Important :</b> vous devez ajouter des référentiels au bureau de liste Référentiel sélectionné avant de pouvoir spécifier le référentiel par défaut.",
		default_repository_workflow_hover: "<b>Rappel :</b> vous pouvez configurer les espaces d'application uniquement pour les référentiels configurés pour ce bureau.",
		remove_label: "Retirer",
		users_label: "Utilisateurs",
		groups_label: "Groupes",
		user_or_group_name_label: "Nom d'utilisateur ou de groupe :",
		user_or_group_name_hover: "Entrez un nom d'utilisateur ou de groupe valide dans le référentiel.  Le nom n'est pas validé.",
		user: "Utilisateur",
		group: "Groupe",
		name: "Nom :",
		displayName: "Nom d'affichage",
		display_name: "Nom d'affichage :",
		shortName: "Nom abrégé :",
		distinguishedName: "Nom distinctif :",
		search_tooltip: "Rechercher",
		add_tooltip: "Ajouter",
		add_selected_tooltip: "Ajouter à la liste sélectionnée",
		remove_tooltip: "Retirer",
		remove_selected_tooltip: "Retirer de la liste sélectionnée",
		add_to_selected_tooltip: "Ajouter",
		remove_from_selected_tooltip: "Retirer",
		move_up_selected_tooltip: "Déplacer vers le haut",
		move_down_selected_tooltip: "Déplacer vers le bas",
		advanced_search_options_tooltip: "Paramètres avancés",
		move_right_selected_tooltip: "Déplacer dans un sous-menu",
		move_left_selected_tooltip: "Enlever du sous-menu",
		add_separator: "Ajouter un séparateur",
		menu_item_label: "Libellé d'élément de menu :",
		add_menu_label: "Ajouter un sous-menu",
		menu_label: "Libellé du sous-menu :",
		menu_label_info: "<b>Important :</b> vous devez ajouter au moins un élément de menu à ce sous-menu avant de pouvoir le sauvegarder.",
		menu_dropdown_label: "Libellé du bouton de liste déroulante :",
		menu_dropdown_label_info: "<b>Important :</b> vous devez ajouter au moins un élément de menu à ce bouton de menu déroulant avant de pouvoir sauvegarder cette barre d'outils.",
		no_item_found: "Aucun résultat n'a été trouvé.",
		me: "Moi-même",
		anyone: "Tout utilisateur",
		specific_users: "Des utilisateurs spécifiques",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "La recherche a renvoyé plus de {0} résultats. Modifiez vos critères pour affiner votre recherche.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Les résultats de la recherche contiennent des éléments déjà sélectionnés. Ces éléments ne seront pas affichés dans les résultats de la recherche.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Plus de {0} résultats ont été renvoyés. Utilisez le filtre pour affiner les résultats",

		user_already_selected: "L'utilisateur spécifié est déjà sélectionné.  Spécifiez un autre utilisateur.",
		group_already_selected: "Le groupe spécifié est déjà sélectionné.  Spécifiez un autre groupe.",
		user_cannot_select_self: "Vous ne pouvez pas vous ajouter vous-même. Spécifiez un autre utilisateur.",

		/* Select User Group dialog */
		select_user_group_add_label: "Ajouter",
		select_user_group_cancel_label: "Annuler",
		add_users_groups_label: "Ajouter des utilisateurs et des groupes",
		add_user_group_label: "Ajout d'un utilisateur et d'un groupe",
		add_users_label: "Ajout d'utilisateurs",
		add_user_label: "Ajout d'un utilisateur",
		add_label: "Ajoutez :",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Les documents suivants comportent des changements d'annotation non sauvegardés :",
		viewer_confirm_to_proceed: "Voulez-vous continuer, sachant que vous perdrez ces changements ?",
		viewer_warn_has_changes: "Vos changements non sauvegardés seront supprimés.",
		viewer_warn_is_printing: "L'impression en cours risque de ne pas s'achever.",
		viewer_warn_confirm_exit: "Voulez-vous quitter ?",
		viewer_prompt_save_changes: "Le document suivant comporte des changements d'annotation non sauvegardés qui seront perdus :<br>${0}<br><br>Voulez-vous sauvegarder les modifications ?",
		viewer_prompt_mergesplit_changes: "Les documents suivants comportent des changements non sauvegardés :<br>${0}<br><br>Voulez-vous continuer, sachant que vous perdrez ces changements ?",
		viewer_prompt_mergesplit_tab_changes: "Le document suivant comporte des changements non sauvegardés :<br>${0}<br><br>Voulez-vous continuer, sachant que vous perdrez ces changements ?",
		viewer_new_item_name: "Nouveau document",
		viewer_top_frame: "Cadre haut :",
		viewer_bottom_frame: "Cadre bas :",
		viewer_left_frame: "Cadre gauche :",
		viewer_right_frame: "Cadre droit :",
		viewer_viewer_frame: "Cadre d'afficheur :",
		viewer_properties_frame: "Cadre des propriétés :",
		viewer_comment_frame: "Cadre des commentaires :",
		viewer_mergesplit_on: "Afficher",
		viewer_mergesplit_off: "Fusionner et séparer",
		viewer_mergesplit_context_menu_move: "Déplacer",
		viewer_mergesplit_context_menu_rename: "Renommer",
		viewer_mergesplit_context_menu_delete: "Supprimer",
		//move to new window
		viewer_move_to_new_window:"Déplacer vers une nouvelle fenêtre",
		viewer_continue:"Annuler les modifications",
		viewer_return_to_original_window:"Revenir à la fenêtre d'origine",
		viewer_switch_window:"Changer de fenêtre",
		viewer_prompt_lost_changes:"Le document ${0} est actuellement ouvert dans une autre fenêtre. Certaines modifications de ce document n'ont pas été enregistrées.<br><br>Voulez-vous basculer sur cette autre fenêtre pour enregistrer les modifications ou voulez-vous annuler les modifications et l'ouvrir dans cette fenêtre ?",
		viewer_mergesplit_fallback_info: "L'action Fusionner et séparer ne peut être exécutée que sur des documents figurant dans le même référentiel.",
		viewer_tabbed_layout: "Afficher en tant qu'onglets",
		viewer_tabbed_layout_highcontrast: "Onglets",
		viewer_split_vertical_layout: "Volets divisés en haut et en bas",
		viewer_split_vertical_layout_highcontrast: "Haut et bas",
		viewer_split_horizontal_layout: "Volets divisés à gauche et à droite",
		viewer_split_horizontal_layout_highcontrast: "Gauche et droite",
		viewer_add_vertical_layout: "Nouvel onglet en bas",
		viewer_add_vertical_layout_highcontrast: "Onglet du bas",
		viewer_add_horizontal_layout: "Nouvel onglet à droite",
		viewer_add_horizontal_layout_highcontrast: "Onglet de droite",
		viewer_add_horizontal_layout_rtl: "Nouvel onglet à gauche",
		viewer_add_horizontal_layout_rtl_highcontrast: "Onglet de gauche",
		viewer_split_properties_layout: "Afficher les propriétés",
		viewer_split_comment_layout: "Afficher les commentaires",
		viewer_split_notelog_layout: "Afficher le journal de notes",
		viewer_window_title: "Afficheur ${0}",
		viewer_next_hit: "Afficher le document suivant dans la liste",
		viewer_prev_hit: "Afficher le document précédent dans la liste",
		viewer_confrim_more_search_results: "Les résultats de la recherche contiennent des documents qui ne sont plus visibles. Souhaitez-vous récupérer davantage de résultats de recherche ?",
		viewer_confirm_get_next_page: "La liste des résultats contient des éléments qui ne sont plus visibles. Souhaitez-vous récupérer davantage de résultats de recherche ?",
		viewer_confirm_get_next_item: "La liste des résultats contient d'autres éléments visibles. Souhaitez-vous afficher l'élément suivant ?",
		viewer_fn_annotation_tooltip: " Créé par : ${0},  Créé le : ${1}",
		viewer_box_note_limitation: "Vous ne pouvez ouvrir et afficher des notes Box que dans une fenêtre distincte.",
		viewer_click_to_open_box_note: "Cliquez ici pour ouvrir la note Box.",
		viewer_box_view_expiring: "Le délai maximal pendant lequel vous pouvez afficher votre document Box est de 60 minutes. Votre session actuelle arrivera à expiration dans ${0} minutes. Si vous souhaitez continuer à travailler sur le document, vous devez le recharger maintenant. Voulez-vous recharger le document ?",
		viewer_add_dialog_save_as_type: "Sauvegarder comme type :",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflit de réservation",
		viewer_checkout_conflict: "Le document est réservé par un autre utilisateur.",
		viewer_checkout_confirm: "Une version plus récente de ce document est disponible. Voulez-vous continuer avec la réservation du document ou souhaitez-vous au contraire recharger l'afficheur avec la version plus récente ? Si vous optez pour cette dernière solution, les changements non sauvegardés seront perdus.",
		viewer_checkout_continue: "Continuer avec la réservation",
		viewer_checkout_reload: "Recharger",
		viewer_status_building: "Génération du document...",
		viewer_status_adding: "Ajout du document...",
		viewer_status_checking_in: "Restitution du document...",

		/* Class Selector Widget */
		include_subclasses_label: "Inclure les sous-classes",
		include_subclasses_label2: "Rechercher également dans les sous-classes",
		include_subclasses_note: "(sous-classes incluses)",
		available_classes_col_header: "Classes disponibles",
		single_class_label: "Rechercher dans une classe unique",
		multiple_classes_label: "Rechercher dans plusieurs classes",
		multiple_classes_hover_help: "Sélectionnez cette option pour effectuer une recherche dans plusieurs classes. Il peut s'agir de classes parent ou de sous-classes. Si vous sélectionnez cette option, vous visualiserez uniquement les propriétés et les valeurs communes aux classes sélectionnées.",
		selected_classes_col_header: "Classes sélectionnées",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp;(sous-dossiers inclus)",
		favorites_pseudo_node: "\\Favoris\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Vous devez sélectionner un dossier dans le référentiel auquel ajouter le document.",
		no_permission_add_folder: "Vous n'avez pas les droits appropriés pour ajouter des dossiers dans ce dossier.",
		no_permission_add_document: "Vous n'avez pas les droits appropriés pour ajouter des documents dans ce dossier.",
		document_already_in_folder: "Le document se trouve déjà dans ce dossier.",
		cant_move_folder_onto_parent: "Le dossier se trouve déjà dans ce dossier.",
		cant_move_folder_onto_self: "Vous ne pouvez pas déplacer un dossier dans lui-même ou dans ses sous-dossiers.",

		/* Workflow Widgets */
		process_application_space: "Traiter l'application de processus",
		process_role: "Traiter le rôle",
		process_inbasket: "Traiter la boîte de réception",
		process_worklist: "Liste des travaux",
		process_step_processor: "Traiter l'élément de travail",
		process_tracker: "Suivre l'élément de travail",
		process_info_subject: "Objet",
		process_info_stepname: "Etape",
		process_info_is_locked: "Verrouillé",
		process_info_no_access: "Pas d'accès",
		process_info_received_on: "Reçu le",
		process_info_overdue: "En retard",
		process_info_reminder_sent: "Rappel envoyé",
		process_info_locked_by_user: "Verrouillé par",
		process_work_object_number: "Numéro de l'objet de travail",
		process_deadline: "Date d'échéance :",
		process_launchedby: "Démarré par :",
		process_receivedon: "Reçu le :",
		process_step: "Etape :",
		process_properties: "Propriétés",
		process_attachments: "Pièces jointes",
		process_attachments_select: "Sélectionner une pièce jointe",
		process_finish_button_label: "Arrêter le suivi",
		process_tracker_history: "Historique",
		process_tracker_milestones: "Jalons",
		process_tracker_milestone: "Jalon",
		process_tracker_milestone_level: "Niveau",
		process_tracker_milestones_empty: "Aucun jalon à afficher.",
		process_tracker_level_selector_label: "Afficher les niveaux de jalon jusqu'à :",
		process_tracker_map_selector_label: "Filtrer par mappe :",
		process_tracker_message: "Message",
		process_tracker_datereached: "Date atteinte",
		process_tracker_stepname: "Etape",
		process_tracker_cycle: "Cycle",
		process_tracker_review_cycle: "Cycle de révision",
		process_tracker_participant: "Participant",
		process_tracker_completed: "Terminé",
		process_tracker_response: "Réponse",
		process_tracker_comments: "Commentaires",
		process_tracker_delete_confirmation: "Souhaitez-vous arrêter le suivi du flux de travaux suivant: ${0} ?",
		process_tracker_history_allmaps: "Toutes les mappes",
		process_tracker_history_workflow: "Flux de travaux",
		process_tracker_history_terminate: "Arrêter",
		process_tracker_history_malfunction: "Dysfonctionnement",
		process_filter_label: "Filtrer",
		process_no_filter_summary: "Aucun filtre appliqué",
		process_filter_summary: "${0} appliqué(s)",
		process_filter_reset_tooltip: "Réinitialiser efface le filtre et actualise la boîte de réception.",
		process_attachments_add_folder: "Ajouter un dossier",
		process_attachments_add_doc: "Ajouter un document",
		process_complete_button_label: "Terminer",
		process_save_button_label: "Sauvegarder",
		process_launch_button_label: "Lancer le flux de travaux",
		process_open_button_label: "Ouvrir",
		process_movetoinbox_button_label: "Déplacer dans la boîte de réception",
		process_return_button_label: "Retour",
		process_return_to_sender_tooltip: "Renvoyer l'élément de travail dans la boîte de réception d'origine",
		process_move_to_inbasket_tooltip: "Déplacer l'élément de travail dans votre boîte de réception personnelle",
		process_reassign_tooltip: "Réaffecter l'élément de travail à un autre propriétaire",
		process_reassign_button_label: "Réaffecter",
		process_preferences_button_label: "Préférences",
		process_manageroles_button_label: "Gérer les rôles",
		process_manageroles_no_members: "Il n'y a aucun membre.",
		process_responses_button_label: "Réponses supplémentaires",
		process_morecustomaction_button_label: "Plus d'actions",
		process_show_instructions: "Afficher les instructions",
		process_hide_instructions: "Masquer les instructions",
		process_remove_attachment: "Retirer",
		process_close_window: "L'élément de travail a été traité.",
		process_delegate_flag: "Nécessite que le propriétaire actuel valide l'élément de travail avant de le transférer à l'étape suivante du flux de travaux.",
		process_paticipant_voting: "Nombre de participants devant approuver le vote :",
		process_get_next_label: "Obtenir l'élément de travail suivant",
		process_no_more_items: "Il n'y a plus d'éléments à traiter dans la boîte de réception.",
		process_workflow_name: "Nom du flux de travaux :",
		process_pattern_process_name: "Révision de ${0}",
		process_instuctions: "Instructions pour les réviseurs :",
		process_pattern_deadline: "Date d'échéance :",
		process_reviewers: "Réviseurs :",
		process_approvals_required: "Approbations nécessaires :",
		process_on_reject: "Si l'élément de travail est rejeté :",
		process_return_to_originator: "Me le renvoyer",
		process_return_to_previous_reviewer: "Renvoyer aux réviseurs précédents",
		process_additional_settings: "Paramètres supplémentaires :",
		process_allow_reassign: "Autoriser les réviseurs à réaffecter cette révision",
		process_complete_notification: "M'informer de la fin de la révision",
		process_workflow_name_hover_help: "Le nom que vous spécifiez pour l'élément de travail doit permettre aux réviseurs de le distinguer des autres éléments de travail dans la boîte de réception.",
		process_approvals_required_hover_help: "Si l'élément de travail est révisé par plusieurs personnes consécutivement, vous pouvez spécifier le nombre d'approbations nécessaires pour garantir le traitement correct de l'élément de travail.",
		process_approval_options: "Options d'approbation",
		process_all: "Tout",
		process_at_least: "Minimum",
		process_at_least_by_count: "Au moins ${0} réviseurs",
		process_at_least_by_percentage: "Au moins ${0} % de réviseurs",
		process_comments: "Commentaires :",
		process_review_step_comments_hover_help: "Si vous rejetez l'élément de travail, vous devez fournir des informations sur le motif du rejet. Ces informations permettent à l'émetteur de l'élément de travail ou au réviseur précédent de résoudre vos problèmes.",
		process_rework_step_comments_hover_help: "Vous devez fournir des informations sur la façon dont vous avez répondu aux commentaires. Si vous n'êtes pas d'accord avec les commentaires, justifiez-vous.",
		process_rejection_reason: "Motif du rejet :",
		process_summary: "Récapitulatif",
		process_sequential_review: "Révision séquentielle",
		process_sequential_review_description: "L'élément de travail sera révisé par chaque réviseur dans l'ordre.",
		process_parallel_review: "Révision parallèle",
		process_parallel_review_description: "L'élément de travail sera révisé par tous les réviseurs en même temps.",
		process_parallel_approvals_required_error: "Le nombre d'approbations demandées est trop élevé. Seulement ${0} réviseurs sont spécifiés.",
		process_parallel_invalid_required_approvals_count: "La valeur n'est pas valide. Il doit s'agir de la valeur ${0}.",
		process_subject_prompt: "Entrez l'Objet",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Elément de travail :",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Afficher les propriétés",
		view_permissions_level: "Afficher les droits",
		view_content_level: "Afficher le document",
		link_level: "Lier",
		modify_properties_level: "Editer les propriétés",
		modify_content_level: "Editer le document",
		minor_version_level: "Editer la version secondaire",
		major_version_level: "Editer la version principale",
		create_instance_level: "Créer une instance",
		delete_document_level: "Supprimer le document",
		delete_item_level: "Supprimer l'élément",
		modify_document_permissions_level: "Gérer les droits",
		modify_folder_permissions_level: "Gérer les droits",
		modify_owner_level: "Modifier le propriétaire",
		delete_folder_level: "Supprimer le dossier",
		file_in_folder_level: "Ajouter aux dossiers",
		create_subfolder_level: "Créer des sous-dossiers",
		link_item_level: "Annoter un document, ajouter au dossier", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Document seulement : ajouter une annotation au document ou retirer une annotation du document</li><li>Dossier seulement : ajouter des éléments au dossier ou retirer des éléments du dossier</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Supprimer",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Propriétaire",
		/* previously \"Full control\" */
		edit_privilege: "Auteur",
		/* previously \"Edit\" */
		read_only_privilege: "Lecteur",
		/* previously \"Read only\" */
		no_access_privilege: "Pas d'accès",
		share_with_label: "Partager avec :",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Moi uniquement",
		public_label: "Tous",
		members_label: "Groupes et utilisateurs spécifiques",
		select_members_label: "Sélectionner...",
		select_user_group_label: "Sélection utilisateurs...",
		select_users_groups_label: "Sélectionner des utilisateurs et des groupes...",
		select_user_label: "Sélectionner un utilisateur...",
		propagation_label: "Propagation :",
		access_label: "Droits :",
		add_permission_add_label: "Ajouter",
		security_policy_label: "Politique de sécurité :",
		includes_inherited_access: "Inclut l'accès hérité",
		customize_access_for_label: "Personnaliser l'accès pour :",
		customize: "Personnalisation",
		direct: "Cet élément",
		singleLevelInheritance: "Un niveau",
		infiniteLevelInheritance: "Tous les niveaux",
		inherited: "Hérité",
		direct_hover_help: "Les paramètres de sécurité s'appliquent à l'élément sélectionné",
		singleLevelInheritance_hover_help: "Ces droits s'appliquent à cet élément et aux enfants immédiats configurés pour hériter de la sécurité de cet élément.",
		infiniteLevelInheritance_hover_help: "Ces droits s'appliquent à cet élément et à tous les descendants configurés pour hériter de la sécurité de cet élément.",
		inherited_hover_help: "Ces droits sont hérités du parent.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Ces droits pour ${0} s'appliquent à cet élément et aux enfants immédiats configurés pour hériter de la sécurité de cet élément.",
		infiniteLevelInheritance_member_hover_help: "Ces droits pour ${0} s'appliquent à cet élément et à tous les descendants configurés pour hériter de la sécurité de cet élément.",
		inherited_member_hover_help: "Ces droits pour ${0} sont hérités du parent.",
		partial_hover_help: "Un utilisateur a modifié les paramètres de sécurité des éléments",
		allow: "Autoriser",
		deny: "Refuser",
		basic: "Basique",
		advanced: "Avancé",
		permission_type: "Définir l'accès pour :",
		share_with_hover_help: "L'élément est actuellement partagé avec les utilisateurs et groupes suivants.",
		direct_security_policy_hover_help: "Les paramètres de cette règle de sécurité permettent de modifier la sécurité relative à cet élément.",
		security_policy_hover_help: "Les paramètres de sécurité de cet élément sont en lecture seule pour éviter toute modification de la sécurité de cet élément.",
		security_remove: "Aucune autorisation",
		pseudo_group_label: "Comptes alias",
		marking_hover_help: "La sécurité de cet élément est contrôlée par un jeu de marquage, qui peut affecter la sécurité de l'élément.",
		note_label: "Important :",
		marking_text: "Cet élément est marqué comme : ${0}. L'élément peut avoir des restrictions de sécurité supplémentaires.",
		authenticated_users: "Utilisateurs authentifiés",
		realm_users: "${0} utilisateurs",
		denyAll: "Refuser tout",
		allowAll: "Autoriser tout",
		remove_direct_text: "Si vous sauvegardez vos modifications, les droits pour ce membre seront retirés de l'élément.",
		remove_single_inheritance_text: "Si vous sauvegardez vos modifications, les droits pour ce membre seront retirés de l'élément et des <br>enfants immédiats qui sont configurés pour hériter de la sécurité de l'élément.<p>Voulez-vous continuer ?",
		remove_infinite_inheritance_text: "Si vous sauvegardez vos modifications, les droits pour ce membre seront retirés de l'élément et des <br>tous les descendants qui sont configurés pour hériter de la sécurité de l'élément.<p>Voulez-vous continuer ?",
		remove_inheritance_text: "Si vous sauvegardez vos modifications, les droits pour ce membre seront retirés de l'élément et des <br>tous les descendants qui sont configurés pour hériter de la sécurité de l'élément. Seuls les droits qui <br>sont hérités par cet élément seront conservés.<p>Voulez-vous continuer ?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Retirer ces droits pour ${0}",

		security_proxy_text: "La sécurité de cet élément est en lecture seule.",
		security_proxy_declared_text: "La sécurité de cet élément est en lecture seule car elle a été définie par un proxy de sécurité.",
		security_proxy_hover_help: "La sécurité de cet élément est contrôlée par la sécurité définie sur un autre objet dans le référentiel.",
		add_permissions_label: "Ajouter des droits",
		permission_propagation_direct: "Ce dossier uniquement",
		permission_propagation_onelevel: "Ce dossier et un niveau en-dessous",
		permission_propagation_alllevels: "Ce dossier et tous les niveaux ci-dessous",
		document_propagation_label: "Définir l'accès pour :",
		document_propagation_FOLDER: "Dossier",
		document_propagation_DOCUMENT: "Document",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Source de l'authentification :",

		/* Versions Widget */
		object_versions_selector_label: "Versions :",
		object_versions_label: "Versions",
		object_type_document_label: "Document :",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Dossiers classés dans",
		folders_filed_in_folder_col_hdr: "Dossier",
		folders_filed_in_path_col_hdr: "Chemin",
		folders_filed_in_containment_name_col_hdr: "Nom du fichier de référence",
		folders_filed_in_creator_col_hdr: "Créé par",
		folders_filed_in_date_created_col_hdr: "Créé le",

		/* Parent Documents */
		properties_parent_documents_label: "Documents parents",

		/* Select object dialog */
		select_object_title: "Sélectionner un élément",
		select_object_breadCrumb_version_prefix: "Versions pour : ",
		show_versions_label: "Afficher les versions",
		use_current_version_label: "Utiliser la version en cours",
		use_released_version_label: "Utiliser la version d'édition",

		/* Select content class dialog */
		select_class: "Sélectionner une classe",
		/* Select Search dialog */
		select_search: "Sélectionner la recherche",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Afficher le lien",
		show_hyperlink_intro: "Vous pouvez copier et coller le lien dans des e-mails, des chats et des pages Web. S'il existe plusieurs versions de l'élément, indiquez le lien à associer.",
		show_hyperlink_intro_no_version_select: "Vous pouvez copier et coller le lien dans des e-mails, des chats et des pages Web.",
		show_text_label: "Version :",
		released_button_label: "Publié",
		current_button_label: "Actuel",
		select_button_label: "Version spécifique",
		show_hyperlink_no_released_version_msg: "Il n'existe pas de version mise à jour de ce document.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Lancer le flux de travaux",
		edit_workflow_title: "Propriétés d'élément de travail",
		start_workflow_intro: "Lancez un flux de travaux pour traiter les éléments sélectionnés. Si vous souhaitez affecter les éléments de travail à un utilisateur spécifique, indiquez un propriétaire.",
		edit_workflow_intro: "Vous pouvez éditer les propriétés des éléments de travail sélectionnés. Si vous souhaitez réaffecter l'élément de travail à un autre utilisateur, spécifiez un propriétaire.",
		workflow_field_label: "Flux de travail :",
		priority_field_label: "Priorité :",
		owner_field_label: "Propriétaire :",
		start_button_label: "Démarrer",
		save_button_label: "Sauvegarder",
		owner_value_hint: "Entrez une chaîne alphanumérique comprenant un maximum de 32 caractères. La chaîne ne peut contenir que des espaces ou les caractères suivants : a-z, A-Z, 0-9 et ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Eléments de contenu",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "La valeur n'est pas valide. La valeur ne peut contenir que des espaces ou les caractères suivants : a-z, A-Z, 0-9, et ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Entrez une valeur de 1 à 32000 pour indiquer l'importance de l'élément de travail.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "La valeur n'est pas valide. La priorité doit être une valeur entre 1 et 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "Le nom de flux de travaux n'existe pas.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Interrompre dans le flux de travaux",
		suspend_workitems_intro: "Lorsque vous interrompez un élément de travail dans le flux de travaux, cet élément ne peut pas être traité avant d'être repris.",
		suspend_workitems_options_label: "Interrompre les éléments de travail sélectionnés :",
		suspend_until_resume_label: "Jusqu'à la reprise manuelle",
		suspend_until_date_label: "Jusqu'à",
		suspend_for_duration_label: "Pendant",
		suspend_for_duration_hours: "Heures",
		suspend_for_duration_days: "Jours",
		suspend_for_duration_weeks: "Semaines",
		suspend_for_duration_months: "Mois",
		suspend_for_duration_years: "Années",
		suspend_button_label: "Interrompre",
		suspend_duration_value_hint: "Entrez une valeur comprise entre 1 et 99 pour indiquer la durée.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "La valeur n'est pas valide. Il doit s'agir d'une valeur comprise entre 1 et 99.",

		/* Remove from workflow */
		remove_workflow_title: "Retirer du flux de travaux",
		remove_workflow_confirmation: "Voulez-vous retirer les éléments sélectionnés du flux de travaux ?<br>${0} éléments sont sélectionnés.",
		remove_workflow_button_label: "Retirer",

		/* Unfile dialog */
		unfile_dialog_title: "Retirer du dossier",
		unfile_dialog_remove_from_folder_label: "Retirer de :",
		unfile_dialog_info_text: "Vous pouvez supprimer les éléments des dossiers. Toutefois, la suppression d'un élément de tous les dossiers ne supprime pas cet élément du référentiel. Vous pouvez toujours récupérer l'élément en effectuant une recherche. Seuls les dossiers sur lesquels vous disposez d'un droit d'affichage sont répertoriés dans cette liste.",
		unfile_dialog_select_all: "Sélectionner tout",
		unfile_dialog_deselect_all: "Effacer tout",
		unfile_dialog_remove_button_label: "Retirer",
		unfile_dialog_select_folder_col_hdr: "Sélectionnez un dossier",
		unfile_dialog_folder_col_hdr: "Dossier",
		unfile_dialog_path_col_hdr: "Chemin",
		unfile_dialog_not_filed_msg: "Cet élément ne se trouve dans aucun dossier.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "Vous n'avez pas les droits appropriés pour supprimer cet élément de l'un des dossiers où il se trouve.",
		unfile_dialog_folder_not_selectable_tooltip: "Vous n'avez pas les droits appropriés pour supprimer cet élément de ce dossier.",
		unfile_multi_prompt: "Voulez-vous retirer les éléments sélectionnés du dossier ${0} ?",
		unfile_large_number_items_confirmation_question: "Vous avez sélectionné ${0} éléments à supprimer du dossier ${1}.<br/>La suppression d'un nombre important d'éléments peut prendre du temps.<br/>Voulez-vous continuer ?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Ouvrir",
		move_to_folder_title: "Déplacer vers le dossier",
		move_to_folder_button_caption: "Déplacer",
		move_to_folder_label: "Déplacer vers :",
		add_to_folder_title: "Ajouter au dossier",
		add_to_folder_button_caption: "Ajouter",
		add_to_folder_label: "Ajouter à :",
		copy_to_folder_title: "Copier dans le dossier",
		copy_to_folder_button_caption: "Copier",
		copy_to_folder_label: "Copier vers :",
		copy_to_folder_delete_label: "Une fois la copie terminée, supprimez les éléments sélectionnés dans Box.",
		move_from_folder_label: "Déplacer de :",
		move_file_info_text: "Vous pouvez déplacer des éléments d'un dossier à l'autre.",
		move_folder_info_text: "Vous pouvez déplacer des dossiers d'un dossier parent à l'autre.",
		add_doc_to_folder_info_text: "Vous pouvez ajouter des éléments à un ou plusieurs dossiers. Si un élément se trouve déjà dans un dossier, il reste dans ce dossier et est ajouté aux autres dossiers que vous spécifiez.",
		copy_doc_to_folder_info_text: "Vous pouvez copier des éléments dans un dossier.",
		box_copy: "Copie dans Box",
		box_copy__button_caption: "Copier",
		box_copy_to_info_text: "Sélectionnez le référentiel et le dossier dans lesquels vous voulez copier les éléments sélectionnés dans Box.",
		box_copy_from_info_text: "Sélectionnez le référentiel et le dossier dans lesquels vous voulez copier les éléments sélectionnés dans Box.",
		box_copy_version_info_text: "Pour ajouter un nouveau document, sélectionnez le référentiel et le dossier. Pour restituer une nouvelle version, sélectionnez le référentiel et le document.",
		admin_box_copy: "Copie dans Box",
		admin_box_copy_hover: "Cette option permet aux utilisateurs de copier des documents dans Box.",

		no_permission_to_copy_version_msg: "Vous ne pouvez pas copier le document à partir de Box en tant que nouvelle version du document sélectionné. Vous ne disposez pas des droits nécessaires pour éditer le document sélectionné ou le document sélectionné est réservé par quelqu'un d'autre.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "Vous n'avez pas les droits appropriés pour supprimer cet élément de l'un des dossiers où il se trouve.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "Vous n'avez pas les droits appropriés pour supprimer cet élément de ce dossier.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Cet élément ne peut pas être déplacé car il n'est classé dans aucun dossier. Choisissez un autre élément.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Lancer le flux de travaux",
		subscriptions_dialog_available_items_label: "Eléments disponibles :",
		subscriptions_dialog_info_text: "Indiquez le flux de travaux à lancer.",
		subscriptions_dialog_select_button_label: "OK",
		subscriptions_dialog_name_col_hdr: "Nom",
		subscriptions_dialog_desc_col_hdr: "Description",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gérer les rôles",
		manageroles_dialog_info_text: "Vous pouvez modifier la liste des utilisateurs pour chaque rôle associé à cet espace d'application de processus.",
		manageroles_dialog_members_label: "Membres",
		manageroles_dialog_roles_label: "Rôles",
		manageroles_dialog_add_button_label: "Ajouter des utilisateurs et des groupes",
		manageroles_dialog_remove_button_label: "Retirer",
		manageroles_dialog_save_button_label: "Sauvegarder",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "Aucun flux de travaux n'est associé à cet élément.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Préférences de flux de travaux",
		workflow_pref_dialog_info_text: "Indiquez les événements de flux de travaux pour lesquels vous souhaitez recevoir des notifications par e-mail. Vous pouvez également activer l'option permettant d'acheminer votre travail vers une autre personne en sélectionnant l'utilisateur auquel vous souhaitez déléguer votre travail.",

		workflow_pref_general: "Général",
		workflow_pref_email_address: "Adresse e-mail",
		workflow_pref_email_address_hover: "Indiquez l'adresse e-mail à laquelle vous souhaitez recevoir les notifications de flux de travaux.",
		workflow_pref_preferred_locale: "Langue",
		workflow_pref_preferred_locale_hover: "Indique la langue dans laquelle les notifications par e-mail sont affichées.",

		workflow_pref_work_item_notice: "Notifications d'élément de travail",
		workflow_pref_step_new_assignment: "Lorsqu'un nouvel élément de travail m'est affecté",
		workflow_pref_step_new_assignment_hover: "M'envoyer une notification lorsque je reçois un nouvel élément de travail.",
		workflow_pref_step_expired_deadline: "Lorsque l'échéance de l'élément de travail a été dépassée",
		workflow_pref_step_expired_deadline_hover: "M'envoyer une notification lorsque je dépasse une échéance d'élément de travail.",
		workflow_pref_step_reminders: "A l'approche de l'échéance de l'élément de travail",
		workflow_pref_step_reminders_hover: "M'envoyer un rappel lorsque l'élément de travail arrive à échéance.",

		workflow_pref_originator_notice: "Notifications d'émetteur",
		workflow_pref_milestone_reached: "Lorsqu'un jalon est atteint",
		workflow_pref_milestone_reached_hover: "M'envoyer une notification lorsqu'un jalon d'un flux de travaux que j'ai démarré est atteint.",

		workflow_pref_tracker_notice: "Notifications de dispositif de suivi de flux de travaux",
		workflow_pref_tracker_new_assignment: "Lorsqu'un nouvel élément de dispositif de suivi m'est affecté",
		workflow_pref_tracker_new_assignment_hover: "M'envoyer une notification lorsqu'un flux de travaux dont j'assure le suivi est lancé.",
		workflow_pref_tracker_deadline_reminders: "A l'approche de l'échéance du flux de travaux",
		workflow_pref_tracker_deadline_reminders_hover: "M'envoyer un rappel lorsque le flux de travaux arrive à échéance.",
		workflow_pref_tracker_deadline_expired: "Lorsque l'échéance du flux de travaux a été dépassée",
		workflow_pref_tracker_deadline_expired_hover: "M'envoyer une notification lorsqu'une échéance de flux de travaux a été dépassée.",
		workflow_pref_tracker_exception: "Lorsqu'une erreur de flux de travaux s'est produite",
		workflow_pref_tracker_exception_hover: "M'envoyer une notification lorsqu'une erreur ou une exception de flux de travaux se produit.",
		workflow_pref_tracker_expired_deadline: "L'échéance du flux de travaux a été dépassée",
		workflow_pref_tracker_expired_deadline_hover: "M'envoyer une notification lorsque l'échéance d'un flux de travaux dont j'assure le suivi est dépassée.",
		workflow_pref_tracker_milestone_reached: "Lorsqu'un jalon est atteint",
		workflow_pref_tracker_milestone_reached_hover: "M'envoyer une notification lorsqu'un jalon d'un flux de travaux dont j'assure le suivi est atteint.",

		workflow_pref_out_notice: "Absent du bureau",
		workflow_pref_proxy_user: "Déléguer le travail à",
		workflow_pref_proxy_user_hover: "Cette option permet d'acheminer automatiquement votre travail vers un autre utilisateur, par exemple, lorsque vous êtes absent de votre bureau ou que vous êtes en déplacement.",
		workflow_pref_workflow: "Flux de travaux",
		workflow_pref_on: "Activé",
		workflow_pref_off: "Désactivé",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Lancer le flux de travaux",
		transfered_workflows_dialog_info_text: "Sélectionner un flux de travaux à lancer.",
		transfered_workflows_dialog_available_items_label: "Eléments disponibles :",
		transfered_workflows_dialog_select_button_label: "Lancer",
		transfered_workflows_dialog_name_col_hdr: "Nom",
		transfered_workflows_dialog_no_item_found: "Aucun flux de travaux transféré n'a été trouvé.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transférer un flux de travaux",
		transfer_workflow_dialog_info_text: "Sélectionnez un flux de travaux à transférer dans le système de flux de travaux.",
		transfer_workflow_dialog_use: "Utiliser ce nom de flux de travaux",
		transfer_workflow_dialog_use_another: "Utiliser un autre nom de flux de travaux",
		transfer_workflow_dialog_in_use: "Le nom du flux de travaux est le suivant : ",
		transfer_workflow_dialog_transfer_button_label: "Transférer",
		transfer_workflow_dialog_no_items_found: "Aucun flux de travaux transféré n'a été trouvé.",
		transfer_workflow_dialog_use_hover: "Indiquez le nom du flux de travaux dans la définition de flux de travaux.",
		transfer_workflow_dialog_another_hover: "Indiquez un nom de flux de travaux différent ou réutilisez un nom de flux de travaux transféré existant.",

		/*Search In control*/
		search_in_title: "Rechercher dans :",
		search_in_teamspaces: "Espaces d'équipe",
		search_in_repositories: "Référentiels",
		search_in_thisteamspaces: "Cet espace d'équipe",

		ajaxViewer_save: "Sauvegarder les annotations",
		ajaxViewer_print: "Aperçu avant impression",
		ajaxViewer_firstPage: "Première page",
		ajaxViewer_previousPage: "Page précédente",
		ajaxViewer_nextPage: "Page suivante",
		ajaxViewer_lastPage: "Dernière page",
		ajaxViewer_unknownPageCount: "1 sur ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} sur ${1}",
		ajaxViewer_zoomOut: "Zoom arrière",
		ajaxViewer_zoomIn: "Zoom avant",
		ajaxViewer_25percent: "25 %",
		ajaxViewer_50percent: "50 %",
		ajaxViewer_75percent: "75 %",
		ajaxViewer_100percent: "100 %",
		ajaxViewer_150percent: "150 %",
		ajaxViewer_200percent: "200 %",
		ajaxViewer_300percent: "300 %",
		ajaxViewer_400percent: "400 %",
		ajaxViewer_fitWidth: "Adapter la largeur",
		ajaxViewer_fitHeight: "Adapter la hauteur",
		ajaxViewer_fitPage: "Adapter la page",
		ajaxViewer_rotate270: "Rotation à 270°",
		ajaxViewer_rotate90: "Rotation à 90°",
		ajaxViewer_rotate180: "Rotation à 180°",
		ajaxViewer_darken: "Assombrir",
		ajaxViewer_lighten: "Eclaircir",
		ajaxViewer_lessContrast: "Moins de contraste",
		ajaxViewer_moreContrast: "Plus de contraste",
		ajaxViewer_invert: "Inverser",
		ajaxViewer_createHighlight: "Mettre en évidence",
		ajaxViewer_createNote: "Annoter",
		ajaxViewer_editAnnotation: "Editer les propriétés d'annotation",
		ajaxViewer_deleteAnnotation: "Supprimer l'annotation",
		ajaxViewer_editAnnotationTitle: "Editer les propriétés d'annotation",
		printableView_print: "Imprimer",
		printableView_close: "Fermer",

		search_results_dropdown_button: "Affichage des résultats",
		search_results_columns_label: "Affichage des résultats de recherche",
		search_results_columns_description: "Sélectionnez les propriétés que vous souhaitez afficher dans les résultats de la recherche.",
		search_results_sortby_label: "Trier par :",
		search_results_order_label: "Ordre de tri :",
		search_results_accending_label: "Croissant",
		search_results_descending_label: "Décroissant",
		search_results_available_properties: "Disponible",
		search_results_selected_properties: "Sélectionné",
		search_rank_property: "Rang (recherche de texte uniquement)",
		search_name_attribute: "Nom (${0})",
		search_results_summary_enabled_label: "Activer les résumés du contenu (recherche de texte uniquement)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Recherches",
		manage_teamspace_classes_tab_title: "Classes",
		manage_teamspace_entry_templates_tab_title: "Modèles d'entrée",
		manage_teamspace_team_tab_title: "Equipe",
		manage_teamspace_roles_tab_title: "Rôles",
		manage_teamspace_dialog_title: "Modifier l'espace d'équipe",
		manage_teamspace_button_label: "Modifier l'espace d'équipe",
		manage_teamspace_team_pane_heading: "Sélectionner une équipe",
		manage_teamspace_classes_pane_heading: "Sélectionner des classes",
		manage_teamspace_entry_templates_pane_heading: "Sélectionner des modèles d'entrée",
		manage_teamspace_no_rights_message: "Vous n'êtes pas autorisé à modifier cet espace d'équipe.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Propriétés de l'espace d'équipe",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Indiquez les propriétés qui s'affichent pour les documents et dossiers dans la liste de contenu lorsque les utilisateurs naviguent dans l'espace d'équipe. Vous pouvez également spécifier l'ordre dans lequel les propriétés s'affichent.",
		teamspace_props_sel_cols_use_default_label: "Utilisez les paramètres <b>Parcourir</b> pour ce référentiel",
		teamspace_props_sel_cols_use_default_tooltip: "Utilisez les paramètres spécifiés pour ce référentiel sur la page Parcourir de l'outil d'administration.",
		teamspace_props_general_tab_label: "Général",
		teamspace_props_column_props_tab_label: "Propriétés affichées",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Choisir le fichier à importer",
		teamspace_import_template_instruction: "Vous pouvez sélectionner un fichier d'exportation de modèle d'espace d'équipe à importer.",
		teamspace_import_template_button_label: "Importer",
		teamspace_import_template_dialog_label: "Importer le modèle d'espace d'équipe",

		/* Annotation Dialog */
		annotationDlg_title: "Annotations",
		annotationDlg_description: "Le document sélectionné possède les annotations suivantes :",
		annotationDlg_msg_noAnnotations: "Aucune annotation n'existe. Cliquez sur Ajouter pour créer une annotation.",
		annotationDlg_pageLabel: "Page : ${pageNum}",
		annotationDlg_accLabel: "ACCES : ${accType}",
		annotationDlg_accLabel_public: "Public",
		annotationDlg_accLabel_private: "Privé",
		annotationDlg_accLabel_privateGroup: "Privé(${groupName})",
		annotationDlg_copiable: "Peut être copié sur un autre serveur",
		annotationDlg_cannotCopy: "Ne peut pas être copié sur un autre serveur",
		annotationDlg_addButtonLabel: "Ajouter",

		/* Share Dialog */
		is_shared: "Partagé",
		is_share_pending: "En attente de partage",
		share_title: "Partage dans Box",
		share_instructions_new: "Envoyez un e-mail contenant un lien pour le fichier partagé. Toute personne disposant de ce lien peut accéder à ce fichier.",
		share_instructions_existing: "Envoyez un e-mail contenant un lien pour le fichier partagé. Toute personne disposant de ce lien peut accéder à ce fichier. Il se peut que d'autres personnes disposent du lien car ce fichier a déjà été partagé par quelqu'un.",
		share_instructions_another_version_shared: "Envoyez un e-mail contenant le lien pour le fichier partagé. Toute personne disposant de ce lien peut accéder à ce fichier. Il se peut que d'autres personnes disposent du lien car une autre version de ce fichier a déjà été partagée par quelqu'un.",
		share_buttonLabel_share: "Partager",
		share_email_addresses: "Envoyer à :",
		share_email_addresses_hover: "Une fois le partage terminé, un lien est envoyé à ces adresses e-mail. Si vous n'indiquez pas d'adresse, le lien est envoyé à votre propre adresse e-mail.",
		share_email_addresses_reshare_hover: "Une fois le partage terminé, un lien est envoyé à ces adresses e-mail. Si vous n'indiquez pas d'adresse, aucun e-mail n'est envoyé.",
		share_password: "Définir le mot de passe :",
		share_password_placeholder: "Facultatif",
		share_comments: "Message :",
		share_comments_default: "Je souhaiterais partager mon fichier avec vous dans Box.",
		share_myEmail: "Envoyer à partir de :",
		share_expiration: "Définir l'expiration du lien :",
		share_expire: "L'accès expire :",
		share_expire_none: "Jamais",
		share_allowDownload: "Autoriser le téléchargement",
		share_add: "Ajouter",
		share_advanced_instructions: "Les paramètres de téléchargement, d'expiration et de mot de passe s'appliquent au fichier partagé dans Box.",
		share_advanced_existing_instructions: "Les paramètres de téléchargement, d'expiration et de mot de passe s'appliquent au fichier partagé dans Box.",
		share_options_edit_warning: "Important : toute modification apportée à ces paramètres affecte toute personne détenteur du lien, y compris celles qui en disposent déjà.",
		share_link: "Lien :",
		share_email_addresses_placeholder: "Adresses e-mail",
		share_email_address_placeholder: "Adresse e-mail",
		share_email_address_invalid: "Entrez une adresse e-mail valide.",
		share_cannot_share_with_self: "Vous ne pouvez pas partager de fichiers avec vous-même. Spécifiez un autre utilisateur.",
		share_selected_version_with_minor_warning_hover: "La version ${0} du document est partagée. Vous avez sélectionné la version ${1}.<br><br><b>Avertissement</b> : si vous partagez la version ${1}, personne ne peut partager la version ${2} à moins de supprimer le partage de la version ${1}.",
		share_selected_version_hover: "La version ${0} du document est partagée. Vous avez sélectionné la version ${1}.",
		share_selected_version_message: "Important : la version ${0} du document est partagée. Vous avez sélectionné la version ${1}.",
		share_different_version_message: "Important : vous avez sélectionné la version ${1}, mais la version ${0} du document est déjà partagée.  Vous ne pouvez pas partager la version ${1} à moins de supprimer d'abord le partage, mais vous pouvez partager le lien vers la version ${0} à la place.",
		share_version_message: "Important : la version ${0} du document est partagée. Sélectionnez la version que vous souhaitez partager.",
		share_version_new: "Partager la version ${0}",
		share_version_new_p8_hover: "Le partage de ce document crée un lien spécifique vers la version sélectionnée uniquement.<br><br>Lorsqu'un document est déjà partagé :<ul><li>Vous pouvez partager une version ultérieure et le lien redirige vers la version ultérieure.</li><li>Vous ne pouvez pas partager une version antérieure à moins d'avoir d'abord supprimé le partage.</li></ul>",
		share_version_new_cm_hover: "Le partage de ce document crée un lien spécifique vers la version sélectionnée uniquement.<br><br>Lorsqu'un document est déjà partagé :<ul><li>Vous pouvez partager une version ultérieure et le lien redirige vers la version ultérieure.</li><li>Vous ne pouvez pas partager une version antérieure.</li></ul>",
		share_version_update: "Partager la version ${0} (mettre à jour les options de partage).",
		share_version_update_p8_hover: "Le partage de ce document conserve le lien vers cette version spécifique uniquement.<br><br>Lorsqu'un document est déjà partagé :<ul><li>Vous pouvez partager une version ultérieure et le lien redirige vers la version ultérieure.</li><li>Vous ne pouvez pas partager une version antérieure à moins d'avoir d'abord supprimé le partage.</li></ul>",
		share_version_update_cm_hover: "Le partage de ce document conserve le lien vers cette version spécifique uniquement.<br><br>Lorsqu'un document est déjà partagé :<ul><li>Vous pouvez partager une version ultérieure et le lien redirige vers la version ultérieure.</li><li>Vous ne pouvez pas partager une version antérieure.</li></ul>",
		share_version_change_to_current: "Partager la version ${0} (mettre à jour le partage avec la version sélectionnée).",
		share_version_change_to_current_p8_hover: "Le partage de ce document met à jour le lien de sorte qu'il pointe vers la version sélectionnée uniquement.<br><br>Lorsqu'un document est déjà partagé :<ul><li>Vous pouvez partager une version ultérieure et le lien redirige vers la version ultérieure.</li><li>Vous ne pouvez pas partager une version antérieure à moins d'avoir d'abord supprimé le partage.</li></ul>",
		share_version_change_to_current_cm_hover: "Le partage de ce document met à jour le lien de sorte qu'il pointe vers la version sélectionnée uniquement.<br><br>Lorsqu'un document est déjà partagé :<ul><li>Vous pouvez partager une version ultérieure et le lien redirige vers la version ultérieure.</li><li>Vous ne pouvez pas partager une version antérieure.</li></ul>",
		share_repository: "Référentiel pour les fichiers partagés",
		share_repository_hover: "Si le référentiel Box que vous voulez utiliser n'est pas visible, vous pouvez ajouter un nouveau référentiel Box sur la page Référentiels.",
		share_options: "Options de partage",
		unshare_confirm: "Si vous supprimez le partage, tous les liens de partage sont rompus, y compris les liens de partage envoyés précédemment par d'autres utilisateurs. Les autres utilisateurs qui souhaitent partager le document doivent sélectionner le document original et le partager à nouveau.<br><br>Voulez-vous vraiment supprimer le partage ?",
		unshare_button: "Supprimer le partage dans Box",
		admin_share: "Services de partage dans Box :",
		admin_share_hover: "Permet aux utilisateurs de partager un document qui provient de n'importe quel référentiel pour lequel le partage dans Box est activé. Le partage d'un document inclut la copie du fichier dans Box, la création d'un lien et l'envoi de ce dernier par e-mail.",
		admin_my_email_modifiable: "Autoriser les utilisateurs à modifier l'adresse e-mail d'expédition",
		admin_my_email_modifiable_hover: "Par défaut, pour Partage dans Box, l'adresse e-mail de l'utilisateur est en lecture seule et elle est obtenue par le biais d'un mappage d'utilisateurs et d'adresses e-mail qui représentent le compte utilisateur Box.<br><br>Sélectionnez cette option pour autoriser les utilisateurs à éditer leur adresse e-mail lorsqu'ils partagent ; toutefois, la validité de l'adresse e-mail n'est pas vérifiée.",
		admin_repos_admin_user: "Administrateur du partage :",
		admin_repos_admin_user_hover: "Définissez l'administrateur du partage si vous disposez d'un bureau pour lequel les services de partage dans Box sont activés et si ce référentiel Box est sélectionné en tant que référentiel pour les fichiers partagés.<br><br>Cliquez sur Définir et connectez-vous à Box en utilisant un compte administrateur Box valide.<br><br>L'administrateur du partage doit être un administrateur Box configuré pour bénéficier d'un stockage illimité dans Box.",
		admin_repos_admin_user_not_set_warning: "L'administrateur de Box n'est pas configuré pour le référentiel sélectionné.<br><br>Les services de partage dans Box sont désactivés tant que vous n'avez pas défini l'administrateur de Box pour le référentiel sélectionné, ou que vous n'avez pas sélectionné un autre référentiel Box pour lequel cet administrateur de Box est configuré.<br><br>Vous pouvez définir l'administrateur de Box dans la section Services de partage dans Box sur la page Général pour le référentiel.",
		admin_share_not_configured_warning: "Pour pouvoir utiliser les services de partage dans Box, vous devez au préalable ajouter et sélectionner un référentiel Box avec l'authentification de serveur.",
		/* Office Online Server settings */
		admin_office_online_title: "Configuration d'Office Online",
		admin_office_online_server_enable: "Office Online Server :",
		admin_office_online_server_enable_hover: "Indiquez si vous souhaitez que les utilisateurs qui ont accès à ce bureau puissent éditer leurs documents Office à l'aide d'Office Online Server.",		
		admin_office_online_allow_collaborative_editing: "Autoriser l'édition collaborative",
		admin_office_online_allow_collaborative_editing_hover: "Autorisez plusieurs utilisateurs à travailler sur un même document. Désélectionnez cette option si vous souhaitez restreindre l'édition des documents à un utilisateur.",
		admin_office_online_repository_not_set_warning: "Pour que vous puissiez activer le service Office Online, vous devez au préalable activer le service sur un référentiel et spécifier l'URL de Microsoft Office Online Server. Cliquez sur <b>Référentiels</b>, sélectionnez un référentiel, puis, dans l'onglet <b>Intégration d'édition</b>, activez le service. Cliquez sur <b>Paramètres > Général</b> et entrez l'URL de Microsoft Office Online Server.",
		admin_settings_office_online_server_enable_hover: "Indiquez si vous souhaitez utiliser Office Online Server pour utiliser des documents Office.",
		admin_office_online_server_url: "URL de Microsoft Office Online Server",
		admin_office_online_server_url_hover: "Indiquez l'adresse URL par le biais de laquelle les autres applications communiquent avec Office Online Server. L'URL est au format http://nom_serveur:numéro_port/hosting/discovery.",
		admin_office_online_server_Verified: "Vérifié",
	    admin_office_online_server_Failed: "<b>Echec</b>",

		admin_repcfg_office_online_service_p8_hover: "Pour initialiser le référentiel afin qu'il utilise Office Online Server, vous pouvez ajouter le fichier de modèle initial de chaque application Office. Si un modèle n'est pas spécifié, le modèle par défaut est utilisé.",	
		admin_repcfg_office_online_server_integration: "Intégration avec MS Office Online Server",
		admin_repcfg_office_online_service_url_not_set_warning: "Pour que vous puissiez activer Office Online Server, vous devez au préalable spécifier l'URL de Microsoft Office Online Server. Cliquez sur Paramètres > Général et entrez l'URL",
		admin_repcfg_office_online_word_template_name: "Modèle Word par défaut",
		admin_repcfg_office_online_excel_template_name: "Modèle Excel par défaut",
		admin_repcfg_office_online_powerpoint_template_name: "Modèle PowerPoint par défaut",
		admin_repcfg_office_online_blank_template_description: "Il s'agit du modèle par défaut utilisé si vous n'ajoutez pas le vôtre.",
		/* Edit Service settings */
		admin_icn_edit_title: "Editer la configuration",	
	    admin_icn_edit_files_cleanup_interval: "Intervalle de suppression des fichiers temporaires (en jours) :",
	    admin_icn_edit_files_cleanup_interval_hover: "Vous pouvez fixer la durée pendant laquelle les fichiers temporaires sont conservés dans le client ICN Edit. La durée par défaut est de 20 jours. La durée maximum est de 20 jours et la durée minimum, de 1 jour.",
	    admin_icn_edit_service_integration: "Intégration du service d'édition",
	    admin_icn_edit_service_integration_intro: "Le service d'édition permet aux utilisateurs d'éditer facilement ou d'ajouter des fichiers dans les applications natives installées sur leur ordinateur.<br><br><b>Important :</b> Si vous activez le service d'édition, vous devez sauvegarder votre configuration de référentiel avant de pouvoir éditer les catégories prédéfinies.",
		admin_icn_edit_service: "Service d'édition :",
		admin_icn_edit_enable_hover: "Pour utiliser le service d'édition, vous devez :<ul><li>Activer le service sur le référentiel</li><li>Activer le service sur les bureaux dans votre environnement</li><li>Installer le client IBM Content Navigator Edit sur les postes de travail des utilisateurs</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Activer",
		admin_icn_edit_disable: "Désactiver",
		admin_icn_edit_create_new_category: "Nouvelle catégorie",
		admin_icn_edit_delete_category: "Supprimer une catégorie",
		admin_icn_edit_edit_category: "Editer une catégorie",
		admin_icn_edit_disable_category: "Désactiver une catégorie",
		admin_icn_edit_enable_category: "Activer une catégorie",
		admin_icn_edit_new_category_dialog_title: "Nouvelle catégorie",
		admin_icn_edit_edit_category_dialog_title:"Editer une catégorie",
		admin_icn_edit_new_category_dialog_instructions: "Une catégorie de documents vous permet d'associer des modèles à des types MIME spécifiques pour le service d'édition. Par exemple, vous pouvez associer un ensemble de modèles aux fichiers PDF afin que les utilisateurs puissent les appliquer lorsqu'ils ajoutent ou éditent des fichiers dans le client IBM Content Navigator Edit. <br><br><b>Important :</b> Vous devez sauvegarder votre configuration de référentiel avant de pouvoir ajouter des modèles à la catégorie que vous créez. ",
		admin_icn_edit_edit_category_dialog_instructions: "Vous devez sauvegarder votre configuration de référentiel avant de pouvoir ajouter des modèles à cette catégorie. ",
		admin_icn_edit_delete_category_dialog_instructions: "Voulez-vous supprimer cette catégorie ainsi que les modèles qui lui sont associés ?<br><br><b>Important :</b> Vos changements ne seront définitifs que lorsqu'ils auront été sauvegardés dans le référentiel. ",
		admin_icn_edit_category_label: "Catégorie : ",
		admin_icn_edit_category_discription_label:"Description : ",
		admin_icn_edit_template_column_head:"Nom de modèle",
		admin_icn_edit_category_duplicate_error_message: "Une catégorie avec cet ID existe déjà. ",
		admin_icn_edit_word_category_description: "Cette catégorie définit les modèles disponibles pour les documents Microsoft Word dans le service d'édition. ",
		admin_icn_edit_excel_category_description: "Cette catégorie définit les modèles disponibles pour les documents Microsoft Excel dans le service d'édition. ",
		admin_icn_edit_powerpoint_category_description: "Cette catégorie définit les modèles disponibles pour les documents Microsoft PowerPoint dans le service d'édition. ",

		icn_edit_add_template_dialog_title:"Ajouter un modèle ${0}",
		icn_edit_add_template_only_one_file_error: "Vous ne pouvez sélectionner qu'un seul fichier.",
		icn_edit_add_template_file_type_error: "Vous devez indiquer un fichier modèle ${0} valide.<br><br>Le document sélectionné a le type MIME ${1}.<br><br>Types MIME valides : ${2}.",
		icn_edit_change_template_dialog_title: "Editer un modèle ${0}",
		icn_edit_action_in_new_menu_name:"Document ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "avec Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "avec les applications de bureau",
		icn_edit_new_document_dialog_title: "Nouveau document ${0}",
		icn_edit_new_document_dialog_intro: "Créez un nouveau document ${0} et ajoutez-le au référentiel. Le document sera créé avec le modèle de service d'édition sélectionné.", 
		icn_edit_select_edit_service_template: "Sélectionner un modèle",
		icn_edit_edit_service_template: "Modèle de service d'édition :",
		icn_edit_new_document_category_no_templates_message:"Il n'y a aucun modèle dans cette catégorie. Contactez votre administrateur pour qu'il en ajoute.",
		icn_edit_installer: "Programme d'installation d'IBM Content Navigator Edit",
		admin_icn_cm_classes_and_roles_settings: "Paramètres de classes et de rôles",
		admin_repcfg_classes_and_roles_warning: "Pour spécifier les classes et les utilisateurs ou groupes d'utilisateurs autorisés à créer, éditer et utiliser des modèles ou à créer des brouillons de documents fonctionnant avec le service Office Online et le service d'édition.",
		admin_repcfg_classes_and_roles_click_warning: "cliquez ici.",
		/* Edit Service settings END */
		share_no_my_email_error: "Un problème d'identification de l'adresse e-mail requise pour partager le document s'est produit.",
		share_no_my_email_error_explanation: "Vous vous êtes connecté avec l'ID utilisateur ${0}, mais ce dernier n'est pas mappé vers une adresse e-mail.",
		share_no_my_email_error_userResponse: "Essayez de vous connecter à nouveau ou réessayez en utilisant un ID utilisateur différent. Si le problème persiste, contactez votre administrateur système.",
		share_no_my_email_error_adminResponse: "L'ID utilisateur ${0} n'est pas mappé vers une adresse e-mail et le bureau ${1} n'autorise pas les utilisateurs à modifier l'adresse e-mail pour les services de partage dans Box.<br><br>Essayez l'une des solutions suivantes :<br>Vérifiez que le plug-in Mappage d'e-mail est enregistré.<br>Assurez-vous que le fichier emailMappingPlugin.json inclut l'ID utilisateur ${0} et l'adresse e-mail de l'utilisateur, puis générez, configurez et enregistrez le plug-in Mappage d'e-mail.<br>Si vous ne souhaitez pas utiliser le plug-in Mappage d'e-mail ni le répertoire d'adresses e-mail FileNet P8 mais plutôt permettre aux utilisateurs d'entrer leur propre adresse e-mail lorsqu'ils partagent un document, vous pouvez modifier les paramètres de bureau pour les services de partage dans Box afin d'autoriser les utilisateurs à envoyer le lien à partir d'une autre adresse e-mail.",
		share_no_my_email_error_0: "id_utilisateur",
		share_no_my_email_error_1: "nom_bureau",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Une version plus récente de ce document est partagée ; vous ne pouvez donc pas partager la version sélectionnée de ce document.",
		share_later_version_shared_error_explanation: "Vous ne pouvez pas partager une version plus ancienne d'un document qui a été partagé précédemment.",
		share_later_version_shared_error_userResponse: "Pour envoyer le lien vers la version la plus récente du document, vous devez au préalable sélectionner cette version et utiliser ensuite l'action Partager.<br><br>Pour partager la version sélectionnée du document, vous devez au préalable supprimer le partage pour la version la plus récente du document.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Nouveau message",
		email_from: "De :",
		email_to: "A :",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc :",
		email_bcc: "Bcc :",
		email_address_invalid: "Entrez une adresse e-mail valide.",
		email_subject: "Objet :",
		email_message: "Message :",
		email_message_placeholder: "Ajouter un message",
		email_attachments: "Pièces jointes :",
		email_links: "Liens :",
		email_send: "Envoyer",
		email_dont_send: "Ne pas envoyer",
		email_subject_reminder: "Rappel de l'objet",
		email_subject_reminder_confirm: "Voulez-vous envoyer ce message sans objet ?",
		email_missing_from_error: "Un problème est survenu lors de l'identification de l'adresse e-mail d'expédition requise pour envoyer l'e-mail.",
		email_missing_from_error_explanation: "Vous vous êtes connecté avec l'ID utilisateur ${0}, mais ce dernier n'est pas mappé vers une adresse e-mail.",
		email_missing_from_error_userResponse: "Essayez de vous connecter à nouveau ou réessayez en utilisant un ID utilisateur différent. Si le problème persiste, contactez votre administrateur système.",
		email_missing_from_error_adminResponse: "L'ID utilisateur ${0} n'est pas mappé à une adresse e-mail et le bureau ${1} n'autorise pas les utilisateurs à modifier l'adresse e-mail d'expédition.<br><br>Essayez l'une des solutions suivantes :<br>Vérifiez que le plug-in Mappage d'e-mail est enregistré.<br>Assurez-vous que le fichier emailMappingPlugin.json inclut l'ID utilisateur ${0} et l'adresse e-mail de l'utilisateur, puis générez, configurez et enregistrez le plug-in Mappage d'e-mail.<br>Si vous ne voulez pas utiliser le plug-in Mappage d'e-mail ni le répertoire d'adresses e-mail FileNet P8 mais plutôt permettre aux utilisateurs d'entrer leur propre adresse e-mail lorsqu'ils envoient un e-mail, vous pouvez modifier les paramètres d'e-mail pour les bureaux afin d'autoriser les utilisateurs à modifier l'adresse e-mail d'expédition.",
		email_missing_from_error_0: "id_utilisateur",
		email_missing_from_error_1: "nom_bureau",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "Impossible d'ouvrir le document.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator ne parvient pas à se connecter au client IBM Content Navigator Edit.",
		open_edit_document_with_native_application_error_userResponse: "Installez et démarrez le client IBM Content Navigator Edit sur votre poste de travail. Essayez ensuite d'ouvrir le document.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "Impossible d'ouvrir le document.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator ne parvient pas à se connecter au client IBM Content Navigator Edit.",
		connect_to_the_streamline_service_error_userResponse: "Installez et démarrez le client IBM Content Navigator Edit sur votre poste de travail. Essayez ensuite d'ouvrir le document.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator n'est pas configuré correctement pour le partage de documents.",
		share_not_configured_error_explanation: "La fonction de partage de Box doit être correctement configurée pour que vous puissiez partager des documents.",
		share_not_configured_error_userResponse: "Contactez l'administrateur pour lui demander de configurer la fonction de partage de Box.",
		share_not_configured_error_adminResponse: "Les éléments suivants doivent être configurés avant le partage de documents :<ul><li>Le service du gestionnaire de tâches doit être activé dans les paramètres de l'outil d'administration.</li><li>L'ID connexion du gestionnaire de tâches doit être configuré dans le référentiel.</li><li>Le partage doit être activé dans le référentiel.</li><li>Un référentiel Box doit être sélectionné pour le partage dans le bureau.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Les changements de propriété n'ont pas été sauvegardés pour la nouvelle version",
		checkin_cors_save_attributes_error_explanation: "La version a été créée, mais les changements de propriété n'ont pas été sauvegardés. Le document est peut-être encore réservé.",
		checkin_cors_save_attributes_error_userResponse: "Déverrouillez le document et mettez à jour ses propriétés en utilisant l'option de menu contextuel Propriétés.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Les changements de propriété n'ont pas été sauvegardés pour le nouveau document",
		add_cors_save_attributes_error_explanation: "Le document a été créé, mais les changements de propriété n'ont pas été sauvegardés.",
		add_cors_save_attributes_error_userResponse: "Mettez à jour les propriétés en utilisant l'option de menu contextuel Propriétés.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "Impossible d'ouvrir le document.",		
		edit_document_using_edit_service_error_explanation: "Impossible d'ouvrir le document dans le service d'édition.",
		edit_document_using_edit_service_error_userResponse: "Demandez à votre administrateur de mettre à jour l'intégration du service d'édition.<br><br> Si l'utilisateur doit pouvoir accéder à ce document à partir du service d'édition, allez à la page Intégration d'édition du référentiel et mettez à jour l'intégration du service d'édition de manière à inclure la classe dans la liste des classes à modifier pour le support de service d'édition.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "Impossible d'ouvrir le document.",		
		edit_document_is_editing_by_oos_error_explanation: "Le document est en cours d'utilisation par le service Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Vous devez enregistrer et fermer le document dans le service Office Online pour pouvoir l'ouvrir dans le service d'édition.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Activer les téléchargements CORS (Cross-Origin Resource Sharing)",

		/* Email Settings */
		admin_email_settings: "Paramètres d'e-mail :",
		admin_email_settings_hover: "Spécifiez le type de service de messagerie électronique dont les utilisateurs doivent se servir. Lorsque vous activez le service de messagerie électronique reposant sur HTML, vous pouvez autoriser les utilisateurs à modifier leur adresse e-mail d'expédition. Si vous voulez activer le service de messagerie électronique reposant sur Java, vous devez disposer d'un navigateur prenant en charge Java.",
		admin_email_use_service: "Utiliser le service de messagerie électronique reposant sur HTML",
		admin_email_use_applet: "Utiliser le service de messagerie électronique reposant sur Java",
		admin_email_can_modify_from: "Autoriser les utilisateurs à modifier l'adresse e-mail d'expédition",
		admin_email_can_modify_from_hover: "Par défaut, l'adresse e-mail d'expédition ne peut pas être modifiée et est obtenue à partir d'un mappage d'utilisateurs et d'adresses e-mail qui représentent des comptes utilisateur.<br><br>Sélectionnez cette option pour autoriser les utilisateurs à éditer leur adresse e-mail lorsqu'ils envoient un e-mail ; toutefois, la validité de l'adresse e-mail n'est pas vérifiée.",
		admin_email_use_from_as_sender: "Utiliser l'adresse e-mail d'expédition comme émetteur de l'e-mail",
		admin_email_use_from_as_sender_hover: "Par défaut, une adresse e-mail d'expédition valide est utilisée dans l'e-mail d'un utilisateur. Elle est définie par la session de messagerie CNMailSession sur le serveur d'applications. Sélectionnez cette option pour spécifier que l'adresse e-mail de l'utilisateur doit être utilisée dans l'e-mail.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nouvelles annotations",
		addAnnotationDlg_labelContents: "Contenu :",
		addAnnotationDlg_labelAccess: "Accès :",
		addAnnotationDlg_labelPublic: "Public",
		addAnnotationDlg_labelPrivate: "Privé",
		addAnnotationDlg_labelPrivateGroup: "Privé pour groupe",
		addAnnotationDlg_labelGroup: "Groupe",
		addAnnotationDlg_labelCopiable: "Cette annotation peut être copiée sur un autre serveur.",
		addAnnotationDlg_buttonLabel_save: "Sauvegarder",

		/* Skip navigation */
		skipNavigation_title_main: "Atteindre directement le contenu principal",
		skipNavigation_title_menu: "Passer aux boutons de navigation",
		skipNavigation_label_main: "Atteindre directement le contenu principal",
		skipNavigation_label_menu: "Passer aux boutons de navigation",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gérer les espaces d'équipe",
		manage_teamspace_pane_instance_hdr: "Espaces d'équipe",
		manage_teamspace_pane_template_hdr: "Modèles",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Faire défiler en avant",
		scroll_back: "Faire défiler en arrière",

		breadcrumb_separator_open: "Ouvrir le noeud",
		breadcrumb_separator_close: "Fermer le noeud",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "Aucun élément n'est sélectionné.",

		/* eds */
		eds_url: "URL de service de données externes :",
		eds_request_timeout: "Délai de demande de service (secondes) :",
		eds_is_required: "Empêcher les utilisateurs d'effectuer des actions modifiant la valeur des propriétés lorsque le service de données externes n'est pas disponible",

		/* eforms */
		eform_signing_pane_welcome: "Signer le formulaire",
		eform_signing_button_label: "Signer",
		eform_signing_pane_delete: "Supprimer la signature",
		eform_signing_button_label_delete: "Supprimer",

		xtplugin_server_label: "URL de serveur IBM FileNet Workplace XT",
		xtplugin_server_hover: "Entrez l'URL du serveur sur lequel IBM FileNet Workplace XT est déployé, par exemple, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL de serveur IBM eClient",
		ecplugin_server_hover: "Entrez l'URL du serveur sur lequel IBM eClient est déployé, par exemple, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Le traitement d'un nombre important d'éléments peut prendre du temps. Voulez-vous continuer ?",
		large_number_actions_continue_button: "Continuer",

		large_items_actions_confirmation_question: "Le traitement d'éléments volumineux peut prendre du temps. Voulez-vous continuer ?",

		viewer_editproperties_title: "Confirmation",
		viewer_editproperties_title_warning: "Avertissement",
		viewer_editproperties_save: "Sauvegarder",
		viewer_editproperties_next: "Suivant",
		viewer_editproperties_reset: "Réinitialiser",
		viewer_editproperties_reset_hover: "Toutes les données non sauvegardées seront réinitialisées sur les dernières valeurs sauvegardées",
		viewer_editproperties_saveandgetnext: "Sauvegarder puis accéder au suivant",
		viewer_editproperties_saveandgetnext_hover: "Accédez automatiquement au document suivant après que vous avez sauvegardé vos changements",
		viewer_editproperties_prompt_save_changes: "Vous avez changé les propriétés du document suivant<br>${0}<br><br>Voulez-vous sauvegarder vos modifications ?",
		viewer_editproperties_prompt_discard_changes: "Vous avez changé les propriétés du document suivant<br>${0}<br><br>Toutefois, une ou plusieurs propriétés ont une valeur non valide et les modifications ne peuvent pas être enregistrées. Vous pouvez corriger les valeurs non valides ou annuler vos modifications.<br>Voulez-vous corriger les valeurs non valides affichées dans la sous-fenêtre des propriétés ?",
		viewer_comments_prompt_discard_changes: "Vous avez modifié les commentaires. Voulez-vous sauvegarder vos modifications ?",
		viewer_notelogs_prompt_discard_changes: "Vous avez modifié les journaux de notes. Voulez-vous sauvegarder vos modifications ?",
		social_collaborated_version: "Version : ${0}",
		social_link_label: "Qui...",

		// social comments
		comments: "Commentaires",
		comments_add_hint: "Appuyez sur Entrée pour ajouter vos commentaires.",
		comments_hint: "Entrez vos commentaires.",
		comments_label: "Appuyez sur Entrée ou sur la touche de tabulation pour sauvegarder vos commentaires. Appuyez sur la touche Echap pour annuler.",
		comments_delete_confirmation: "Voulez-vous supprimer le commentaire sélectionné ?",
		comments_number: "Commentaires : ${0}",
		comments_save_new: "Vous avez modifié les commentaires. Voulez-vous fermer la fenêtre sans sauvegarder vos modifications ?",

		notelogs: "Journaux de notes",
		notelogs_download: "Télécharger",
		notelog_modify: "Sauvegarder les modifications",
		notelog_edit: "Editer le journal de notes",
		notelog_create_newVersion: "Créer une nouvelle version de journal de notes",
		notelog_add_hint: "Entrez vos commentaires et appuyez sur Entrée pour procéder à l'ajout.",
		notelog_hint: "Appuyez sur Maj+Entrée pour insérer un saut de ligne",
		notelog_add_placeholder: "Appuyez sur Entrée pour ajouter un commentaire à un journal de notes.",
		notelog_save_new: "Vous avez modifié le journal de notes. Voulez-vous fermer la fenêtre sans sauvegarder vos modifications ?",

		// P8 markings related
		cannot_remove_markings: "Vous n'êtes pas autorisé à supprimer la ou les valeurs de marquage : {0}",

		// download count
		downloadcount: "Téléchargements : {0}",
		downloadcount_single: "1 téléchargement",
		downloadcount_multiple: "{0} téléchargement",
		downloadcount_none: "Personne n'a encore téléchargé cet élément",

		// recommendations
		recommendations: "Recommandations : {0}",
		recommendations_recommend: "Recommander cet élément",
		recommendations_unrecommend: "Ne plus recommander cet élément",
		recommendations_you: "Vous recommandez cet élément",
		recommendations_you_and_another: "Vous et 1 autre personne recommandez cet élément",
		recommendations_you_and_others: "Vous et {0} autres personnes recommandez cet élément",
		recommendations_another: "1 autre personne recommande cet élément",
		recommendations_others: "{0} personnes recommandent cet élément",
		recommendations_none: "Personne n'a encore recommandé cet élément",

		// tags
		tags: "Balises : ${0}",
		tags_delete: "Supprimer ${0}",
		tags_none: "Il n'y a aucune balise à afficher.",
		tags_add: "Ajouter des balises :",
		tags_hint: "Appuyez sur Entrée pour ajouter vos balises.",
		tags_hover_help: "Spécifiez une balise ou une liste de balises pouvant être utilisées pour rechercher des documents possédant la même balise. Vous pouvez utiliser une virgule (,), un point-virgule (;) ou un espace pour séparer les balises.",
		tags_hover_help_box: "Spécifiez une balise ou une liste de balises séparées par des virgules pouvant être utilisées pour rechercher des documents possédant la même balise.",
		tags_no_access: "Vous ne disposez pas des droits suffisants pour ajouter des balises.",

		//task scheduler pane
		taskPane_tooltip: "Ouvrir la vue des tâches asynchrones",
		taskPane_tree: "Arborescence de navigation du panneau de tâche",
		taskPane_allTasks: "Toutes les tâches",
		taskPane_scheduledTasks: "Tâches planifiées",
		taskPane_recurringTasks: "Tâches récurrentes",
		taskPane_inProgressTasks: "Tâches en cours",
		taskPane_completedTasks: "Tâches terminées",
		taskPane_failedTasks: "Tâches ayant échoué",
		taskPane_disabledTasks: "Tâches désactivées",
		taskPane_statusScheduled: "Planifié",
		taskPane_statusInProgress: "En cours",
		taskPane_statusCompleted: "Terminé",
		taskPane_statusFailed: "Echec",
		taskPane_statusPaused: "En pause",
		taskPane_noItemSelected: "Aucun élément sélectionné",
		taskSchedulerPane_scheduleInformation: "Informations de planification",
		taskSchedulerPane_loginInformation: "Informations de connexion",
		taskSchedulerPane_startImmediately: "Démarrer immédiatement",
		taskSchedulerPane_recurrence: "Récurrence",
		taskSchedulerPane_interval: "Intervalle",
		taskSchedulerPane_scheduleReport: "Rapport de planification",
		taskSchedulerPane_nameHoverHelp: "Entrez le nom de la tâche.",
		taskSchedulerPane_descriptionHoverHelp: "Entrez une description pour la tâche. La description doit vous aider à faire la distinction entre les tâches.",
		taskSchedulerPane_startTimeHoverHelp: "Spécifiez le moment d'exécution de la tâche. Pour exécuter la tâche maintenant, sélectionnez Démarrer immédiatement.",
		taskSchedulerPane_recurrenceHoverHelp: "Vous pouvez programmer l'exécution récurrente de la tâche.",
		taskSchedulerPane_endTimeHoverHelp: "Spécifiez le moment de l'arrêt d'exécution de la tâche. La tâche est exécutée de l'heure de début planifiée à l'heure de fin planifiée.",
		taskSchedulerPane_usernameHoverHelp: "Pour les tâches récurrentes, vous devez entrer un nom d'utilisateur pour autoriser l'authentification du service lors de l'exécution de la tâche.",
		taskSchedulerPane_passwordHoverHelp: "Pour les tâches récurrentes, vous devez entrer le mot de passe de l'utilisateur spécifié pour autoriser l'authentification du service lors de l'exécution de la tâche.",
		taskSchedulerPane_notification: "Notification",
		taskSchedulerPane_emailAddress: "Adresse e-mail",
		taskSchedulerPane_emailAddressHoverHelp: "Entrez l'adresse e-mail à laquelle vous souhaitez recevoir des notifications sur l'état de la tâche.",
		taskSchedulerPane_intervalHoverHelp: "Spécifiez la durée sur laquelle la tâche récurrente doit s'exécuter. Vous pouvez définir l'intervalle en heures, jours, semaines ou mois.",
		taskSchedulerPane_scheduledStartTime: "Heure de début planifiée",
		taskSchedulerPane_startTime: "Heure de début",
		taskSchedulerPane_title: "Programmation",
		taskSchedulerPane_runNow: "Exécuter maintenant",
		taskSchedulerPane_runOnce: "Exécuter une fois",
		taskSchedulerPane_runAtSchedule: "Exécuter sur un calendrier",
		taskSchedulerPane_repeats: "Répétitions",
		taskSchedulerPane_repeatsEvery: "Fréquence de répétition",
		taskSchedulerPane_hourly: "Toutes les heures",
		taskSchedulerPane_daily: "Une fois par jour",
		taskSchedulerPane_weekly: "Une fois par semaine",
		taskSchedulerPane_monthly: "Une fois par mois",
		taskSchedulerPane_yearly: "Tous les ans",
		taskSchedulerPane_sunday: "S",
		taskSchedulerPane_monday: "M",
		taskSchedulerPane_tuesday: "T",
		taskSchedulerPane_wednesday: "W",
		taskSchedulerPane_thursday: "T",
		taskSchedulerPane_friday: "F",
		taskSchedulerPane_saturday: "S",
		taskSchedulerPane_starting: "Date de début",
		taskSchedulerPane_after: "Après",
		taskSchedulerPane_ending: "Date de fin",
		taskSchedulerPane_times: "heure(s)",
		taskSchedulerPane_days: "jour(s)",
		taskSchedulerPane_hours: "heure(s) dans la journée",
		taskSchedulerPane_interval: "Intervalle",
		taskSchedulerPane_endingDays: "Fin (en jours)",
		taskSchedulerPane_never: "Jamais",
		taskSchedulerPane_categorization: "Catégorisation",
		taskSchedulerPane_scheduleTask: "Planification d'une tâche",
		taskInformationPane_details: "Détails",
		taskInformationPane_errors: "Erreurs",
		taskInformationPane_taskInstances: "Instances de tâche",
		taskInformationPane_audits: "Audits",
		taskInformationPane_results: "Résultats",
		asyncTasks: "Tâches asynchrones",

		//entry template pane
		search_all_entry_templates: "Rechercher dans tous les modèles d'entrée.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Afficher le site complet",
		mobilesite: "Afficher le site pour mobile",
		profile: "Gérer le profil",
		office_template: "Modèle Office :",
		select_office_template: "Sélectionnez un modèle Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Les documents sélectionnés ne peuvent pas être ouverts dans l'afficheur avec l'action Fusionner et partager.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "L'afficheur configuré pour les documents PDF et TIFF ne prend pas en charge l'action Fusionner et partager.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Demandez à votre administrateur de configurer, pour les documents PDF et TIFF, un afficheur admettant l'action Fusionner et partager, tel que Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Les documents PDF sélectionnés ne peuvent pas être ouverts dans l'afficheur avec l'action Fusionner et partager.",
		document_builder_pdf_unsupported_viewer_error_explanation: "L'afficheur configuré pour les documents PDF ne prend pas en charge l'action Fusionner et partager.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Demandez à votre administrateur de configurer, pour les documents PDF, un afficheur admettant l'action Fusionner et partager, tel que Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Les documents TIFF sélectionnés ne peuvent pas être ouverts dans l'afficheur avec l'action Fusionner et partager.",
		document_builder_tiff_unsupported_viewer_error_explanation: "L'afficheur configuré pour les documents TIFF ne prend pas en charge l'action Fusionner et partager.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Demandez à votre administrateur de configurer, pour les documents TIFF, un afficheur admettant l'action Fusionner et partager, tel que Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Les documents sélectionnés ne peuvent pas être ouverts dans l'afficheur avec l'action Fusionner et partager.",
		document_builder_unsupported_documents_error_explanation: "L'action Fusionner et partager fonctionne seulement avec les documents PDF et TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Sélectionnez des documents pris en charge et recommencez.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Certains des documents sélectionnés ne peuvent pas être ouverts dans l'afficheur avec l'action Fusionner et partager.",
		document_builder_some_unsupported_documents_error_explanation: "L'action Fusionner et partager fonctionne seulement avec les documents PDF et TIFF ouverts à partir du même référentiel.",
		document_builder_some_unsupported_documents_error_userResponse: "Les documents pris en charge seront ouverts dans l'afficheur.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Une erreur s'est produite lors de la restitution du contenu modifié.",
		document_builder_checkin_failed_explanation: "L'afficheur a reçu une réponse avec erreur lors de la restitution du contenu modifié.",
		document_builder_checkin_failed_userResponse: "Demandez à votre administrateur système de consulter les fichiers journaux de serveur d'applications Web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "Impossible d'ouvrir le document.",
		no_viewer_to_view_error_explanation: "L'administrateur système a bloqué la consultation de ce document. Si vous avez besoin d'accéder à ce document, vous pouvez le télécharger.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "Le contenu n'a pas pu être créé.",
		document_build_failed_userResponse: "Demandez à votre administrateur système d'examiner les fichiers journaux de l'afficheur.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "Le document n'a pas pu être ouvert en mode Fusionner et séparer.",
		document_builder_open_failed_userResponse: "Demandez à votre administrateur système d'examiner les fichiers journaux de l'afficheur.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "Le système n'a pas pu basculer en mode Fusionner et séparer.",
		document_builder_switch_failed_userResponse: "Demandez à votre administrateur système d'examiner les fichiers journaux de l'afficheur.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documents",
		print_service_page_setup_tab_title: "Configuration de la page",
		print_service_OD_print_tab_title: "Options d'impression",
		print_service_status_merging: "Fusion des documents...",
		print_service_status_converting: "Conversion des documents...",
		print_service_status_formatting: "Mise en forme du document pour l'impression...",
		admin_print_service_maximum_number_to_print: "Nombre maximum de documents autorisé pour l'impression :",
		admin_print_service_maximum_size_to_print: "Quantité maximum de données autorisée pour l'impression (en Mo) :",
		admin_print_service_maximum_number_to_print_hover_help: "Spécifiez le nombre maximum de documents que les utilisateurs peuvent imprimer en même temps. Le maximum par défaut est de 50. Si vous ne voulez pas limiter l'impression à un nombre de documents, fixez cette limite à 0",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Restriction :</b> Ce paramètre n'est pas pris en charge sur IBM Content Manager OnDemand.<br/><br/>Indiquez la quantité maximale de données pouvant être imprimée avec le service d'impression IBM Daeja ViewONE.<br /><br />La taille totale des documents sélectionnés ne pourra pas dépasser cette limite.<br/><br/>La limite par défaut est de 200 Mo. Une valeur supérieure à 200 Mo peut avoir des conséquences sur les performances du système. Si vous ne voulez pas limiter l'impression à une quantité de données, fixez cette limite à 0",
		// error printing
		print_service_error_printing: "Une erreur s'est produite au cours de l'impression.",
		print_service_error_printing_userResponse: "Demandez à votre administrateur système de regarder les fichiers journaux du service d'impression.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Les documents sélectionnés représentent un volume trop important pour être imprimé",
		print_service_max_content_error_explanation: "Les documents sélectionnés dépassent la limite de ${0} Mo de données.",
		print_service_max_content_error_userResponse: "Sélectionnez moins de documents ou des documents plus petits et relancez l'impression. Vous pouvez également demander à votre administrateur système d'augmenter la taille totale maximum imprimable d'un coup depuis votre bureau.",
		print_service_max_content_error_0: "maximum_size_of_items",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "Ces éléments ne peuvent pas être imprimés.",
		print_service_max_number_selected_error_explanation: "Vous ne pouvez pas imprimer plus de ${0} éléments à la fois et vous essayez d'en imprimer ${1}.",
		print_service_max_number_selected_error_userResponse: "Sélectionnez moins d'éléments et relancez l'impression. Vous pouvez également demander à votre administrateur système d'augmenter le nombre maximum d'éléments imprimables d'un coup depuis votre bureau.",
		print_service_max_number_selected_error_0: "nombre_maximum_d'éléments",
		print_service_max_number_selected_error_1: "nombre_d'éléments",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});


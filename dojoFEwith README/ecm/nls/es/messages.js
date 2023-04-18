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
		welcome_user: "Bienvenida, ",
		about: "Acerca de",
		all: "Todo",
		help: "Ayuda",
		user_session: "Sesión de usuario",
		user_session_for: "Sesión de usuario de ${0}",
		user_session_for_with_container: "Sesión de usuario de ${0} (${1})",
		tools: "Herramientas",
		login: "Iniciar sesión",
		logout: "Finalizar sesión",
		search: "Buscar",
		saved_searches: "Búsquedas guardadas",
		content_analytics: "Analizar contenido",
		reset: "Restablecer",
		reset_hover: "Todos los datos no guardados en todos los separadores se restablecerán a los valores previamente guardados.",
		reset_default: "Borrar todo",
		reset_default_hover: "Borra el campo Etiqueta actual en todos los separadores.",
		locale: "Entorno local:",
		up: "Arriba",
		down: "Abajo",
		restore: "Restaurar",
		maximize: "Maximizar",
		values_label: "Valores",
		value_label: "Valor:",
		path_label: "Ruta:",
		new_label: "Nuevo:",
		back_label: "Atrás",
		clear: "Borrar",
		set: "Definir...",
		browse: "Examinar",
		work: "Trabajo",
		connect: "Conectar",
		documents: "Documentos:",
		copyright: "(c) Copyright 2012, 2016 IBM Corp. IBM y el logotipo de IBM son marcas registradas de IBM Corporation en muchas jurisdicciones de todo el mundo. Java y todas las marcas registradas y logotipos basados en Java son marcas comerciales de Oracle y/o sus filiales. La tecnología Oracle Outside In Technology incluida en este producto está sujeta a una licencia de uso restringido y sólo se puede utilizar junto con esta aplicación. La licencia de este Programa se concede sometida a los términos del acuerdo de licencia que se suministra con el Programa.  Este acuerdo de licencia puede encontrarse en una carpeta de directorio del programa o en una biblioteca identificada como \"License\" o \"Non_IBM_License\", si procede, o bien se puede ofrecer como un acuerdo de licencia impreso. Lea detenidamente este acuerdo antes de utilizar el programa. La utilización de este programa implica la aceptación de los términos. ",
		edit: "Editar",
		cancel: "Cancelar",
		close: "Cerrar",
		close_all: "Cerrar todos los separadores",
		close_others: "Cerrar otras pestañas",
		ok: "Aceptar",
		yes: "Sí",
		no: "No",
		open: "Abrir",
		refresh: "Renovar",
		refresh_cabinets: "Renovar todos los archivos .cab",
		delete_text: "Suprimir",
		export_config: "Exportar configuración",
		description: "Descripción",
		true_label: "Verdadero",
		false_label: "Falso",
		error: "Error",
		error_reference_hover: "Busque en www.ibm.com para obtener más información sobre este error.",
		url_label: "URL",
		default_label: "Predeterminado",
		ibm_label: "IBM",
		light_label: "Claro",
		dark_label: "Oscuro",
		save: "Guardar",
		saveAs: "Guardar como...",
		save_and_close: "Guardar y cerrar",
		append_colon: "${0}: ",
		append_comma: "${0}, ",
		none: "Ninguno",
		Name: "Nombre",
		"${NAME}": "Nombre",
		mime_type: "Tipo MIME",
		mime_type_contains_label: "El tipo MIME contiene",
		mime_type_header: "Tipo MIME",
		mime_type_icon: "Icono de tipo MIME",
		casesearch: "Caso",
		item: "Elemento",
		no_mime_type: "Este elemento no contiene contenido.",
		items_selected: "Se ha(n) seleccionado ${0} elemento(s).",
		requestor: "Solicitada por",
		scheduledStartTime: "Hora de inicio planificada",
		isRecurring: "Es recurrente",
		weeks: "Semanas",
		days: "Días",
		hours: "Horas",
		endTime: "Hora de finalización",
		username: "Nombre de usuario",
		password: "Contraseña",
		serverURL: "URL de servidor",
		enable: "Habilitar",
		disable: "Inhabilitar",
		finish: "Finalizar",
		previous: "Anterior",
		next: "Siguiente",
		schedule: "Planificar",
		removeFromThisList: "Eliminar de esta lista",
		status: "Estado",
		scheduledEndTime: "Hora de finalización planificada",
		type: "Tipo",
		mode: "Modalidad",
		startTime: "Hora de inicio",
		createdBy: "Creado por",
		nextScheduledTime: "Siguiente hora planificada",
		id: "ID",
		duration: "Duración",
		repeatCycle: "Frecuencia",
		taskTypeName: "Tipo de tarea",
		to: "a",
		filter: "Filtrar:",
		error_message: "Mensaje de error",

        file_type: "Tipo de documento",
        word_template_name: "Nombre de plantilla de Word",
        excel_template_name: "Nombre de plantilla de Excel",
        powerpoint_template_name: "Nombre de plantilla de PowerPoint",
        template_description: "Descripción de plantilla",
        action_add_template: "Añadir",
        action_change_template: "Editar",      
        action_edit_template_properties: "Propiedades",
        add_presentation_template: "Añadir plantilla de presentación",
    	add_spreadsheet_template: "Añadir plantilla de hoja de cálculo",
    	add_doc_template: "Añadir plantilla de documento",    	
    	file_type_doc_hover: "Debe especificar un archivo válido de plantilla de documento para tratamiento de texto.<br><br>Tipos MIME válidos: ${0}",
    	file_type_doc_error: "Debe especificar un archivo válido de plantilla de documento para tratamiento de texto.<br><br>Tipo MIME del documento seleccionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	file_type_presentation_hover: "Debe especificar un archivo válido de plantilla de presentación.<br><br>Tipos MIME válidos: ${0}",
    	file_type_presentation_error: "Debe especificar un archivo válido de plantilla de presentación.<br><br>Tipo MIME del documento seleccionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	file_type_spreadsheet_hover: "Debe especificar un archivo válido de plantilla de hoja de cálculo.<br><br>Tipos MIME válidos: ${0}",
    	file_type_spreadsheet_error: "Debe especificar un archivo válido de plantilla de hoja de cálculo.<br><br>Tipo MIME del documento seleccionado: ${0}<br><br>Tipos MIME válidos: ${1}",
    	office_online_only_one_template_error: "Solo puede seleccionar un archivo.",
    	change_presentation_template: "Editar plantilla de presentación",
    	change_spreadsheet_template: "Editar plantilla de hoja de cálculo",
    	change_doc_template: "Editar plantilla de documento",
    	change_button: "Editar",
	    new_document_dialog_doc_title: "Nuevo documento",
	    new_document_dialog_presentation_title: "Nueva presentación",
	    new_document_dialog_spreadsheet_title: "Nueva hoja de cálculo",
	    new_document_dialog_title_label: "Título:",
	    new_document_dialog_title_hover: "Especifique un título para este documento.",
	    new_document_dialog_title_missing_message: "Debe especificar un título.",
	    office_online_save_before_adding_templates_title: "Guardar cambios en el repositorio",
	    office_online_save_before_adding_templates_error: "No puede añadir plantillas de Office hasta que guarde los cambios que ha realizado en el repositorio. Pulse <b>Guardar y cerrar</b> y después vuelva a abrir el repositorio para añadir las plantillas de Office.",
	    copy_to_OOS_dialog_doc_title: "Nuevo documento",
	    office_online_checkin_cancelcheckout_message: "Este documento se está editando en Microsoft Office Online. No se puede incorporar el documento ni cancelar la extracción mientras esté abierto en Microsoft Office Online.",
	    new_document_classification: "Clasificación:",
	    new_document_classification_help: "Restablece la clase, las propiedades y la carpeta padre, si existe, del documento de origen. Al añadir un documento utilizando una plantilla de entrada, se selecciona automáticamente la plantilla de entrada del documento de origen, si existe. Las propiedades del documento de origen se utilizarán como valores predeterminados, pero la carpeta y la clase especificadas en la plantilla de entrada se conservarán.",
		new_document_classification_use_source_document: "Utilice el documento de origen:",

		/* Note to translators: ${0} is replaced by ecm.messages.repository or ecm.messages.class_label as indicated by the resource key */
		repository_type_icon: "Icono de tipo ${0}",
		repository_name_and_type: "Nombre y tipo de ${0}",
		select_class_label: "Seleccionar ${0}",

		// View toggle buttons
		detail_view_button_tooltip: "Vista de detalles",
		detail_view_button: "Detalles",
		magazine_view_button_tooltip: "Vista de revista",
		magazine_view_button: "Revista",
		filmstrip_view_button_tooltip: "Vista Tira de imágenes",
		filmstrip_view_button: "Tira de imágenes",

		magazine_view_show: "Mostrar en vista de revista",
		detail_view_show: "Mostrar en vista de detalles",

		total_count_item: "elemento",
		total_count_items: "elementos",
		total_count_more_items: "Más de ${0} elementos",

		extension_changed: "La extensión del archivo seleccionado no coincide con la del original.  Seleccione un archivo diferente.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		file_type_any_selected_message: "El visor seleccionado no da soporte a todos los tipos de archivo. Si guarda esta correlación de visor, es posible que encuentre problemas al visualizar documentos. Se recomienda que seleccione un visor que dé soporte a todos los tipos de archivo cuando esté seleccionada la opción Todos los tipos de archivo.<br><br><b>Sugerencia:</b> los siguientes visores admiten todos los tipos de archivo:<ul><li>Visor de applets</li><li>Visor de AJAX</li><li>Conversión de HTML</li><li>Conversión de PDF</li><li>Navegador web</li></ul>",
		file_type_any: "Todos los tipos de archivo",
		file_type_any_hover: "Seleccione esta opción si desea utilizar el visor seleccionado para visualizar todos los documentos, independientemente del tipo de archivo. Esta opción se soporta para los siguientes visores:<br><br><ul><li>Visor de applets</li><li>Visor de AJAX</li><li>Conversión de HTML</li><li>Conversión de PDF</li><li>Navegador web</li></ul><br><br><b>Recuerde:</b> si desea utilizar visores específicos la mayor parte del tiempo, todas las correlaciones que cree que utilicen esta opción deberán moverse al final de su correlación de visor. ",
		file_type_input: "Tipo de archivo nuevo:",

		mime_type_input: "Tipo MIME nuevo:",
		mime_type_input_invalid: "El nuevo tipo MIME no puede contener ninguno de los siguientes caracteres: ,",
		mime_type_available: "Tipos MIME disponibles",
		mime_type_selected: "Tipos MIME seleccionados",
		file_type_input: "Tipo de archivo nuevo:",
		file_type_input_invalid: "El nuevo tipo de archivo no puede contener ninguno de los siguientes caracteres: ,",
		file_type_available: "Tipos de archivos disponibles",
		file_type_selected: "Tipos de archivos seleccionados",
		file_type_header: "Tipo de archivo",
		viewer: "Visor:",
		viewer_viewer: "Visor",
		viewer_view: "Ver",
		viewer_preview: "Vista previa",
		viewer_merge_and_split: "Fusionar y dividir",
		viewer_heading: "${0} - ${1}",
		colon: ":",

		// Created by: TBD
		preview_only: "Sólo vista previa",
		preview_only_label: "(vista previa)",
		preview_only_hover: "Esta correlación de visor se utilizará solo cuando un usuario pulse <b>Vista previa</b>.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Not clear where or why this would occur
		repository_non_foldering_message: "Este repositorio no admite la navegación. Seleccione otro repositorio.",

		repository_community_teamspace_message: "Ya se ha designado otro repositorio como repositorio de la biblioteca de la comunidad. Si desea seguir utilizando el repositorio existente como repositorio de la biblioteca de la comunidad, seleccione <b>No</b> antes de guardar los cambios para impedir que el repositorio existente sea sustituido por este repositorio.",

		favorites_empty: "Aún no tiene favoritos.",
		syncItems_empty: "Aún no tiene archivos sincronizados.",

		root_folder_id: "ID de carpeta raíz",
		unified_searches: "Búsquedas entre repositorios:",
		max_results: "Número de resultados:",
		direct_retrieve_enabled: "Recuperación directa:",
		itemTypesToDisplay: "Tipos de elementos que visualizar:",
		allItemTypes: "Todos los tipos de elementos",
		include_attr_group_name: "Descripciones de grupos de atributos en los nombres de visualización de los atributos:",
		admin_repcfg_include_attr_group_name_hover: "de forma predeterminada, la descripción del grupo de atributos se incluye en los nombres correspondientes a los atributos del grupo de atributos. Esto sirve para que los usuarios vean el grupo de atributos al que pertenece el atributo del grupo de atributos cuando trabajan con atributos.<br>Por ejemplo, los usuarios podrían ver el nombre siguiente en el caso de un atributo de un grupo de atributos: Configuración del documento. Tipo de documento.<br><br>Si se inhabilita esta opción, para el nombre del atributo del grupo de atributos solo se utiliza la descripción del atributo.<br>Por ejemplo, los usuarios verán este nombre: tipo de documento.<br><br>Sin la descripción del grupo de atributos, es posible que los usuarios no sean capaces de saber si Tipo de documento es el atributo simple o un grupo de atributos.",
		documentItemTypesOnly: "Solo tipos de elementos del modelo de documento",
		object_store: "Nombre simbólico de almacén de objetos:",
		object_store_display_name: "Nombre de visualización de almacén de objetos:",
		teamspaceUpgradeMsg: "Sus espacios de equipo se actualizarán cuando guarde la configuración del repositorio. Si cuenta con muchos espacios de equipo, la actualización puede tardar varios minutos.",
		synchUpgradeMsg: "El módulo de sincronización de este repositorio se actualizará cuando guarde la configuración del repositorio.",
		protocol: "Protocolo:",
		protocol_wsi: "WSI",
		protocol_ejb: "EJB",
		cmis_repository_ID: "ID de repositorio CMIS:",
		cmis_url: "URL de documento de servicio de enlace CMIS AtomPub:",
		trace_level: "Nivel de rastreo",
		trace_dir: "Directorio de rastreo",
		temp_dir: "Directorio temporal",
		show_document_location: "Mostrar ubicación de documento",
		max_folders: "Carpetas máximas",
		afp_conversion: "Conversión de AFP",
		line_conversion: "Conversión de datos de línea",
		max_hits: "Coincidencias máximas",
		folder_search_expresssion: "Expresión de búsqueda de carpeta",
		max_item_types: "Tipos de elemento máximos",
		max_worklists: "Listas de trabajo máximas",
		update_storage_collection: "Actualizar colección de almacenamiento",
		include_mime_types_in_search_results: "Incluir tipos MIME en resultados de búsqueda",
		object_type: "Tipo de objeto",
		object_type_document: "Documentos",
		object_type_folder: "Carpetas",
		file_label: "Archivo:",
		plugin_jarfile_path_label: "Vía de acceso de archivo JAR:",
		plugin_classfolder_path_label: "Vía de acceso del archivo de clases:",
		plugin_classname_label: "Nombre de clase:",
		plugin_id_label: "ID de plug-in:",
		class_label: "Clase",
		configuration: "Configuración",
		connect_repository: "Conectar...",
		server_type: "Tipo de servidor",
		timeout_in_seconds: "Tiempo de espera (en segundos):",
		default_search_template: "Búsqueda predeterminada",
		search_filtered_properties: "Propiedades buscables",
		property_contains_label: "La propiedad contiene",
		class_contains_label: "La clase contiene",
		search_filtered_operators: "Operadores de búsqueda",
		default_search_results: "Resultados de búsqueda",
		data_type: "Tipo de datos",
		status_bar: "Barra de estado",
		operators_for: "Operadores para:",
		currentUser: "Usuario actual",
		nameContains: "El nombre contiene",
		searchFor: "Buscar",
		server_autentication: "Autenticación de servidor (OAuth 2.0 con JWT)",
		standard_authentication: "Autenticación estándar (3-legged OAuth2.0)",
		developer_authentication: "Autenticación de desarrollador",
		enterprise_id: "ID de empresa:",
		public_key_id: "ID de clave pública:",
		private_key_path: "Vía de acceso del archivo de claves privadas:",
		server_user_email: "Correo electrónico de usuario del servidor",

		filter_builder_tooltip: "Definir filtro",

		// Launch bar
		launchbar_home: "Abrir Inicio",
		launchbar_favorites: "Abrir favoritos",
		launchbar_browse: "Abrir vista de navegador",
		launchbar_browse_popup: "Abrir lista emergente de navegador",
		launchbar_search: "Abrir vista de búsqueda",
		launchbar_search_popup: "Abrir lista emergente de búsqueda",
		launchbar_teamspaces: "Abrir vista de espacios de equipo",
		launchbar_teamspaces_popup: "Abrir lista emergente de espacios de equipo",
		launchbar_work: "Abrir vista de trabajo",
		launchbar_work_popup: "Abrir lista emergente de trabajo",
		launchbar_entry_templates: "Vista Abrir plantillas de entrada",
		launchbar_entry_templates_popup: "Lista desplegable Abrir plantillas de entrada",
		launchbar_admin: "Abrir vista de administración",

		admin_sync_server: "Servicios de sincronización",
		admin_settings: "Valores",
		admin_interface_text: "Etiquetas",
		admin_interface_text_desktop: "Escritorio",
		admin_desktops: "Escritorios",
		admin_repositories: "Repositorios",
		admin_mobile: "Móviles",
		admin_menus: "Menús",
		admin_reason_codes: "Razones de redacción",
		admin_plugins: "Plug-ins",
		admin_plugins_state_enabled: "El plug-in está habilitado",
		admin_plugins_state_disabled: "El plug-in está inhabilitado",
		admin_plugins_version: "Versión:",
		admin_plugins_version_heading: "Versión",
		admin_plugins_icon: "Icono del plug-in",
		admin_viewer_mapping_icon: "Icono de correlaciones del visor",
		admin_viewer_defs: "Correlaciones de visor",
		admin_viewer_dialog_title: "Correlación",
		admin_viewer_dialog_new_title: "Nueva correlación",
		admin_viewer_dialog_instructions: "Una correlación especifica qué visor se utilizará para los archivos de un repositorio. Puede crear varias correlaciones para especificar distintos visores para distintos tipos de archivos. Puede utilizar un tipo MIME o bien una extensión de archivo para definir una correlación. Las correlaciones con extensiones de archivo se correlacionarán a nombres de documento. Por ejemplo, una correlación con el tipo de archivo establecido en gif se correlacionará a los nombres de documento que terminen con la extensión .gif",
		admin_desktop_viewer_defs: "Correlación de visor:",
		admin_desktop_viewer_defs_hover: "La correlación de visor especifica qué visor se utiliza para abrir diferentes tipos de documentos en el repositorio.<br><br>Puede crear nuevas correlaciones de visor en la sección <b>Correlaciones de visor</b> de la herramienta de administración.",
		admin_desktops_used: "Utilizados en escritorios",
		admin_desktop_additional_settings: "Valores adicionales:",
		admin_default_desktop: "Establecer como escritorio predeterminado",
		admin_default_desktop_header: "Escritorio predeterminado",
		admin_layout_tab_title: "Diseño",
		admin_desktop_icon: "Icono de escritorio",

		// Themes
		admin_themes: "Temas",
		admin_theme_list_instructions: "Puede crear un tema para facilitar la personalización del cliente web para su organización. Puede crear varios temas si necesita utilizar distintos colores, fuentes o logotipos para los diferentes escritorios del entorno.<br><br>Después de crear un tema, puede aplicarlo a un escritorio configurando el tema en el separador <b>Apariencia</b> del escritorio.",
		admin_theme_instructions: "Cree un tema para controlar los colores y fuentes que se visualizan en el cliente web. También puede utilizar el tema para cambiar el logotipo, el nombre de aplicación y el texto de copyright que se muestra en la página de inicio de sesión y en el banner.",
		admin_theme_heading: "Tema: <b>${0}</b>",
		admin_new_theme: "Nuevo tema",
		admin_text_theme: "Tema",
		admin_delete_confirmation_themes: "¿Desea suprimir los temas seleccionados?\nSe han seleccionado ${0} temas.",
		admin_theme_color: "Color",
		admin_theme_text: "Texto",
		admin_theme_solid: "Sólido",
		admin_theme_gradient: "Degradado",
		admin_theme_box: "Box",
		admin_theme_color_label: "Color ${0}:",
		admin_theme_name_invalid: "El nombre del tema no puede contener ninguno de los siguientes caracteres: *\\/: ? \" &lt; &gt; |",
		admin_theme_id_hover: "El ID del tema debe ser exclusivo y no puede cambiar el ID después de guardar el tema.<br><br>El ID sólo puede contener caracteres alfanuméricos.",
		admin_theme_name_hover: "El nombre no puede contener los siguientes caracteres: *\\/: ? \" &lt; &gt; |",
		admin_theme_automatic_label: "Automático",
		admin_theme_logo_url_hover: "Especifique el URL del archivo de logotipo. Si el logotipo se encuentra en el mismo servidor de aplicaciones web que el cliente web, especifique un URL relativo, por ejemplo: /mycustomizations/banner_logo.png<br><br>Es recomendable que el logotipo tenga un fondo transparente.",
		admin_theme_color_palette_title_heading: "Paleta de colores",
		admin_theme_color_palette_help_text: "Cree la paleta de colores para el tema utilizando el valor hexadecimal o el selector de colores. Puede añadir tantos colores como desee.",
		admin_theme_color_add_button_label: "Añadir color",
		admin_theme_color_remove_button_label: "Eliminar color",
		admin_theme_global_title_heading: "Elementos del ámbito de la aplicación",
		admin_theme_global_font: "Familia de fuentes:",
		admin_theme_global_font_hover: "Seleccione la fuente que se utilizará en el cliente web. Las fuentes se muestran en orden de precedencia; la siguiente fuente de la lista sólo se utiliza si la fuente anterior no está instalada en la máquina cliente.",
		admin_theme_global_framework_color_label: "Color de la estructura:",
		admin_theme_global_framework_color_hover: "Seleccione el color que desea utilizar para los siguientes elementos:<ul><li>Barras de título de recuadros de diálogo</li><li>El color de resaltado de la parte superior de la pestaña seleccionada</li><li>Los iconos de la vista de lista de contenido (vista Detalles, vista Revista, vista Tira de imágenes)</li></ul><br>Este color no se utiliza para los separadores entre secciones del cliente web. Si desea cambiar el color de los separadores, debe crear un plug-in para suministrar un archivo CSS personalizado.",
		admin_theme_color_global_toolbar: "Color de la barra de herramientas global:",
		admin_theme_color_global_toolbar_hover: "Si incluye la barra de herramientas global en el cliente web, seleccione el color de la barra de herramientas.<br><br><b>Consejo:</b> La barra de herramientas se muestra en banner en la parte superior del cliente web, por lo que el color de la barra de herramientas debe complementar el color del banner.",
		admin_theme_global_selected_color: "Color del elemento seleccionado:",
		admin_theme_global_selected_color_hover: "Seleccione el color que desea utilizar cuando se seleccionan elementos en el árbol Examinar, el árbol de búsqueda y la lista de contenido.<br><br>El color contextual (el color utilizado cuando un usuario pasa el puntero del ratón sobre un elemento) se obtiene a partir de este color.",
		admin_theme_global_link_color: "Color de enlace:",
		admin_theme_global_link_color_hover: "Seleccione el color que desea utilizar para todos los URL que se pueden pulsar en el cliente web. Por ejemplo, este color se utiliza en los enlaces Más información del cliente web.",
		admin_theme_login_title_heading: "Elementos de la página de inicio de sesión",
		admin_theme_page_background_label: "Color de fondo de la página de inicio de sesión:",
		admin_theme_login_page_background_hover: "Seleccione el color que desea visualizar detrás del panel de inicio de sesión.",
		admin_theme_login_pane_background_label: "Color de fondo del panel de inicio de sesión:",
		admin_theme_login_pane_background_hover: "Seleccione el color que desea visualizar para el panel de inicio de sesión. Este color debe complementar el color de fondo de la página de inicio de sesión.",
		admin_theme_text_color: "Color del texto:",
		admin_theme_login_pane_text_color_hover: "Seleccione el color que desea utilizar para el texto del panel de inicio de sesión. Este color se utiliza para el texto de bienvenida y las etiquetas de los campos. Este color debe resultar legible sobre el color de fondo del panel de inicio de sesión.",
		admin_theme_copyright_text: "Texto de copyright:",
		admin_theme_copyright_text_hover: "Especifique si quiere mostrar texto de copyright en la página de inicio de sesión.",
		admin_theme_copyright_selection_IBM: "IBM Copyright",
		admin_theme_copyright_selection_none: "Sin texto de copyright",
		admin_theme_banner_title_heading: "Elementos del banner",
		admin_theme_text_icons_color: "Color del texto y de los iconos",
		admin_theme_icon_color_label: "Color del icono:",
		admin_theme_shadow_label: "Sombra:",
		admin_theme_banner_text_icons_hover: "Seleccione el color que desea utilizar para el texto y los iconos del banner. Este color debe resultar legible sobre el color de fondo del banner.",
		admin_theme_banner_product_name_label: "Nombre del producto:",
		admin_theme_banner_product_name_hover: "Cuando cree un escritorio, puede especificar un nombre personalizado para la aplicación. Si no especifica un nombre personalizado, se utiliza IBM Content Navigator como nombre del producto. Especifique si se debe utilizar el nombre de aplicación definido en el escritorio o una imagen en lugar de un nombre.",
		admin_theme_banner_product_name_desktop_defined_label: "Utilizar nombre de escritorio",
		admin_theme_banner_product_name_image: "Utilizar logotipo personalizado (URL)",
		admin_theme_background_color_label: "Color de fondo:",
		admin_theme_style_label: "Estilo:",
		admin_theme_banner_color_hover: "Seleccione el color que desea utilizar para el banner en la parte superior de la aplicación.<br><br><b>Consejo:</b> Asegúrese de que el color del texto del banner sea legible en el color de fondo del banner.",
		admin_theme_buttons_title_heading: "Botones",
		admin_theme_navigation_title_heading: "Elementos de navegación",
		admin_theme_navigation_icon_selected_label: "Color del icono seleccionado:",
		admin_theme_navigation_background_hover: "Seleccione el color que desea utilizar para el fondo de la barra de navegación de características.",
		admin_theme_navigation_icon_color_hover: "Seleccione el color que desea utilizar para los iconos de la barra de navegación de características. Si se utiliza el diseño predeterminado en un escritorio, este color debería contrastar con el color de fondo del menú desplegable de características. Si se utiliza el diseño clásico en un escritorio, este color debería contrastar con el color de fondo de la barra de navegación de características.",
		admin_theme_navigation_icon_selected_hover: "Seleccione el color que desea utilizar para la característica seleccionada de la barra de navegación de características. El color debe complementar el color de los iconos y el color de fondo de la barra de navegación de características.<br><br>Si se utiliza el diseño clásico en un escritorio, este color se utiliza como color contextual en la barra de navegación de características.",
		admin_theme_button_background_color_hover: "Seleccione el color que desea utilizar para el fondo de los botones",
		admin_theme_button_style_hover: "Seleccione un estilo de botón.",
		admin_theme_button_text_icon_color_hover: "Seleccione el color que desea utilizar para el texto y las imágenes de los botones:",
		admin_theme_no_logo_label: "Sin logotipo",
		admin_theme_custom_logo_label: "Logotipo personalizado (URL)",
		admin_theme_banner_type: "Estilo de relleno del banner:",
		admin_theme_banner_type_hover: "Especifique si el mensaje del banner debe ser un color sólido o un gradiente de color. Si especifica un banner con gradiente, el color que especifique para el color del banner será el color más oscuro del banner.<br><br><b>Consejo:</b> Asegúrese de que el color del texto del banner sea legible en el color de fondo del banner.",
		admin_theme_icon: "Icono de tema",
		admin_theme_buttons_and_links_title_heading: "Botones, campos y enlaces",
		admin_theme_button_style_label: "Estilo de los botones:",
		admin_theme_theme_style_label: "Estilo del tema:",
		admin_theme_theme_style_hover: "Seleccione el estilo en el que desea basar el tema. Puede cambiar el estilo en cualquier momento al crear o editar un tema. Cuando cambie de un estilo a otro, la configuración del tema se restablecerá a los valores predeterminados.",
		admin_theme_accent_color_label: "Color del acento:",
		admin_theme_accent_color_hover: "Seleccione el color que desea utilizar para la barra situada en la parte superior de un diálogo y para el selector cíclico de carga.",
		admin_theme_global_toolbar_text_color_label: "Color del texto de la barra de herramientas global:",
		admin_theme_global_toolbar_text_color_hover: "Si incluye la barra de herramientas global en el cliente web, seleccione el color para el texto de la barra de herramientas.",
		admin_theme_banner_text_color_hover: "Seleccione el color que desea utilizar para el texto del banner.",
		admin_theme_banner_icon_color_hover: "Seleccione el color que desea utilizar para los iconos del banner.",
		admin_theme_button_color_label: "Color:",
		admin_theme_button_color_hover: "Seleccione el color que desea utilizar para los siguientes elementos:<ul><li>Barras de título de recuadros de diálogo</li><li>El color de resaltado de la parte superior de la pestaña seleccionada</li><li>Los iconos de la vista de lista de contenido (vista Detalles, vista Revista, vista Tira de imágenes)</li><li>Botones, campos y enlaces</li></ul>El color que se utiliza cuando un usuario pasa el cursor por encima de un botón se deriva de este color. Este color no se utiliza para los separadores entre secciones del cliente web. Si desea cambiar el color de los separadores, debe crear un plug-in para suministrar un archivo CSS personalizado.",
		admin_theme_theme_style_col_header: "Estilo del tema",

		admin_syncserver_consistency_checker: "Comprobador de coherencia:",
		admin_syncserver_consistency_checker_hover: "Ejecute el comprobador de coherencia para asegurarse de que las bases de datos del servicio de sincronización tienen información actualizada sobre el estado de cada elemento que se encuentra en el servidor. Por ejemplo, ejecute el comprobador de coherencia después de una interrupción del servicio de la base de datos de los servicios de sincronización para obtener información sobre los documentos que se han actualizado en el repositorio durante la interrupción de servicio.",
		admin_syncserver_consistency_checker_button: "Ejecutar comprobador de coherencia",
		admin_syncserver_consistency_checker_started: "Iniciado:",
		admin_syncserver_consistency_checker_ended: "Finalizado:",
		admin_syncserver_consistency_checker_duration: "Duración:",
		admin_syncserver_consistency_checker_items_processed: "Elementos de sincronización procesados:",
		admin_syncserver_consistency_checker_items_processed_success: "Elementos de sincronización procesados correctamente:",
		admin_syncserver_consistency_checker_items_discovered: "Nuevos elementos de repositorio descubiertos:",
		admin_syncserver_consistency_checker_change_updates: "Número total de actualizaciones:",
		admin_syncserver_consistency_checker_state: "Estado:",
		admin_syncserver_consistency_checker_state_done: "Terminado",
		admin_syncserver_consistency_checker_state_running: "En ejecución",
		admin_syncserver_consistency_checker_user: "Enviado por:",
		admin_syncserver_consistency_checker_scheduled: "Planificado:",

		admin_syncserver_dbcleanup: "Limpieza de base de datos",
		admin_syncserver_dbcleanup_hover: "Ejecute la herramienta de limpieza de base de datos para eliminar los dispositivos y elementos no utilizados que ya no se sincronizan desde la base de datos.",
		admin_syncserver_dbcleanup_button: "Limpieza de base de datos",
		admin_syncserver_dbcleanup_state_done: "Terminado",
		admin_syncserver_dbcleanup_state_running: "En ejecución",
		admin_syncserver_dbcleanup_started: "Iniciado:",
		admin_syncserver_dbcleanup_ended: "Finalizado:",
		admin_syncserver_dbcleanup_state: "Estado:",
		admin_syncserver_dbcleanup_repositorydeleted_count: "Repositorios suprimidos:",
		admin_syncserver_dbcleanup_syncItemdeleted_count: "Elemento sincronizado eliminado:",
		admin_syncserver_dbcleanup_devicedeleted_count: "Dispositivos suprimidos:",
		admin_syncserver_dbcleanup_deviceexpired_count: "Dispositivos caducados:",

		admin_syncserver_publicSyncUrl: "URL público de los servicios de sincronización:",
		admin_syncserver_publicSyncUrl_hover: "Especifique el URL mediante el cual los repositorios se pueden comunicar con los servicios de sincronización de IBM Content Navigator. El formato predeterminado del URL es http://sync_public_URL:port_number/sync/notify.",

		admin_syncserver_managed: "Valores del cliente de sincronización:",
		admin_syncserver_managed_hover: "Los usuarios no pueden cambiar estos valores en el cliente IBM Content Navigator Sync.",
		admin_syncserver_managed_subfolder: "Niveles de carpeta para sincronizar",
		admin_syncserver_managed_subfolder_hover: "Si un usuario sincroniza una carpeta, especifique el número máximo de carpetas que se sincronizarán. Por ejemplo, si un usuario especifica 3 niveles de carpeta, se sincronizan la carpeta que el usuario sincroniza y 2 niveles de subcarpetas.<br><br>Asegúrese de que el entorno esté adaptado para dar soporte a la cantidad de tráfico sincronizado creado por este valor.",
		admin_syncserver_managed_subfolder_all: "Todas las subcarpetas",
		admin_syncserver_managed_subfolder_none: "Ninguna subcarpeta",
		admin_syncserver_managed_subfolder_no_more: "Niveles limitados",
		admin_syncserver_managed_subfolder_levels: "carpetas",
		admin_syncserver_managed_schedule: "Planificación de sincronización",
		admin_syncserver_managed_schedule_hover: "Asegúrese de que el entorno esté adaptado para dar soporte a la cantidad de tráfico sincronizado creado por la planificación de sincronización.<br><br>El intervalo máximo es de 24 horas o 1440 minutos.<br><br>Los usuarios pueden sustituir la planificación de sincronización pulsando <b>Sincronizar ahora</b> en el cliente.",
		admin_syncserver_managed_schedule_manual: "Sincronizar manualmente",
		admin_syncserver_managed_schedule_continuous: "Sincronizar de manera continuada",
		admin_syncserver_managed_schedule_every: "Sincronizar a intervalos especificados",
		admin_syncserver_managed_schedule_minutes: "Minutos",
		admin_syncserver_managed_schedule_hours: "Horas",

		// redaction codes
		admin_new_reason_code: "Nueva razón de redacción",		
		admin_reason_code_name_invalid: "El nombre de razón de redacción no puede contener ninguno de los caracteres siguientes: * \\ / : ? \" &lt; &gt; |",		
		admin_reason_code_description_invalid: "La descripción no puede contener ninguno de los caracteres siguientes: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_description_hover: "La descripción no puede contener ninguno de los caracteres siguientes: * \\ / : ? \" &lt; &gt; |",
		admin_reason_code_name_hover: "El nombre del tema no puede contener ninguno de los siguientes caracteres: *\\/: ? \" &lt; &gt; |",
		admin_reason_code_description: "Descripción:",
		admin_reason_code_applications_hover: "Lista de aplicaciones Datacap que hacen referencia a esta razón de redacción.",
		admin_reason_code_applications: "Aplicaciones Datacap",
		admin_delete_confirmation_reason_codes: "¿Desea suprimir las razones de redacción seleccionadas?",
		admin_delete_confirmation_reason_code: "¿Desea suprimir la razón de redacción seleccionada?",
		admin_reason_code_heading: "Razón de redacción: <b>${0}</b>",
		admin_reason_code_list_instructions: "Las razones de redacción indican por qué se protegen datos confidenciales ocultándolos de la vista. Cada razón identifica un tipo de datos confidenciales que se ocultan de los usuarios generales.",
		admin_reason_code_instructions: "Puede crear una razón de redacción para cada tipo de datos confidenciales. A continuación, puede utilizar esa razón en una política de redacción para definir quién puede ver esos datos y quién puede crear o modificar redacciones.",
		admin_reason_code_applications_label: "Aplicaciones Datacap",
		admin_reason_code_repositories: "Repositorios",
		admin_reason_code_repositories_label: "Repositorios",
		admin_reason_code_repositories_hover: "Lista de repositorios ICN que hacen referencia a esta razón de redacción.",
		admin_reason_code_repositories_default_value: "Sin determinar",
		admin_reason_code_description_label: "Descripción",
		admin_reason_code_applications_default_value: "Sin determinar",
		admin_redaction_reasons: "Razones de redacción",
		admin_redactions: "Redacciones basadas en rol",
		admin_redactions_policies_roles: "Políticas y roles",
		admin_reasons: "Razones",
		admin_reason_code_id: "ID",
		admin_reason_code_id_hover: "El ID no se puede editar.  Se puede copiar en el portapapeles.",
		// Role based administration
		admin_rba: "Administración de escritorio basada en rol",
		admin_rba_mobile_access_enabled: "Este escritorio está habilitado para acceso móvil.",
		admin_rba_mobile_access_disabled: "Este escritorio no está habilitado para acceso móvil.",
		admin_rba_confirm_delete_multiple: "¿Desea suprimir los roles de administración seleccionados?",
		admin_rba_confirm_delete_single: "¿Desea suprimir el rol de administración seleccionado?",
		admin_rba_delete_multi_role_desktop: "Uno o varios de los roles que ha seleccionado están asignados a un escritorio. Debe eliminar los roles de los escritorios para poder suprimirlos.",
		admin_rba_delete_single_role_desktop: "El rol que ha seleccionado está asignado al escritorio ${0}. Debe eliminar el rol del escritorio para poder suprimirlo.",
		admin_desktop: "Escritorio",
		admin_rba_instructions: "Puede crear y gestionar roles de administración de escritorio, que asocian privilegios otorgados a los administradores de escritorio.",
		admin_rba_not_used: "${0} no se utiliza en ningún escritorio.",
		admin_rba_desktops: "<b>${0} se utiliza en los siguientes escritorios:</b>",
		admin_rba_new_role: "Rol nuevo",
		admin_rba_name_invalid: "El nombre del rol de administración no puede contener ninguno de los caracteres siguientes: *\\/: ? \" &lt; &gt; |",		
		admin_rba_description_invalid: "La descripción no puede contener ninguno de los caracteres siguientes: * \\ / : ? \" &lt; &gt; |",
		admin_rba_description_hover: "La descripción no puede contener ninguno de los caracteres siguientes: * \\ / : ? \" &lt; &gt; |",
		admin_rba_name_hover: "El nombre del tema no puede contener ninguno de los siguientes caracteres: *\\/: ? \" &lt; &gt; |",
		admin_rba_description: "<b>Descripción:</b> ${0}",
		admin_rba_membership: "Pertenencia",
		admin_rba_general_priv: "General",
		admin_rba_appearance_priv: "Apariencia",
		admin_rba_desktop_config_priv: "Configuración de escritorio",
		admin_rba_app_name_priv: "Nombre de aplicación",
		admin_rba_theme_priv: "Tema",
		admin_rba_viewer_map_priv: "Correlación de visor",
		admin_rba_merge_split_priv: "Fusionar y dividir",
		admin_rba_sync_svc_priv: "Servicios de sincronización",
		admin_rba_menus_priv: "Menús",
		admin_rba_edit_svc_priv: "Servicios de edición",
		admin_rba_toolbars_priv: "Barras de herramientas",
		admin_rba_ctx_menus_priv: "Menús contextuales",
		admin_rba_office_ribbon_priv: "Mandatos de la barra de cinta de MS Office",
		admin_rba_office_menues_priv: "Menús contextuales de MS Office",
		admin_rba_addl_settings_priv: "Valores adicionales",
		admin_rba_mobile_priv: "Móviles",
		admin_rba_add_doc_dlg_priv: "Dialogo Añadir documento",
		admin_rba_doc_mgmt_priv: "Gestión de documentos",
		admin_rba_def_redaction_priv: "Opción de redacción predeterminada",
		admin_rba_add_photos_priv: "Añadir fotos desde la cámara y la biblioteca de fotos",
		admin_rba_time_stamp_priv: "Indicación de fecha y hora",
		admin_rba_add_docs_folders_priv: "Añadir documentos y crear carpetas en el repositorio",
		admin_rba_open_docs_priv: "Abrir documentos en otras aplicaciones",
		admin_rba_office_config_priv: "Configuración de Office",
		admin_rba_tab_label_priv: "Etiqueta de separador de IBM ECM",
		admin_rba_feature_sel_priv: "Selección de características",
		admin_rba_general_config_priv: "Configuración general",
		admin_rba_favorites_priv: "Favoritos",
		admin_rba_add_options_priv: "Añadir opciones en el grupo Editar",
		admin_rba_browse_priv: "Examinar",
		admin_rba_outlook_int_priv: "Integración de Outlook",
		admin_rba_search_priv: "Buscar",
		admin_rba_layout_priv: "Diseño",
		admin_rba_case_priv: "Caso",
		admin_rba_desktop_feat_priv: "Características de escritorio",
		admin_rba_datacap_priv: "Datacap",
		admin_rba_displayed_feat_priv: "Características visualizadas",
		admin_rba_branding_priv: "Creación de marcas",
		admin_rba_home_priv: "Particular",
		admin_rba_main_color_priv: "Color principal",
		admin_rba_sec_color_priv: "Clor secundario",
		admin_rba_teamspaces_priv: "Espacios de equipo",
		admin_rba_rbr_priv: "Redacción basada en rol",
		admin_rba_et_mgr_priv: "Gestor de plantillas de entrada",
		admin_rba_policies_roles_priv: "Gestionar políticas y roles",
		admin_rba_work_priv: "Trabajo",
		admin_rba_reasons_priv: "Códigos de razón",
		admin_rba_tasks_priv: "Tareas asíncronas",
		admin_rba_auth_priv: "Autenticación",
		admin_rba_all_privs: "Todos los privilegios",
		admin_rba_some_privs: "Algunos privilegios",
		admin_rba_no_privs: "Ningún privilegio",
		admin_add_users_groups_priv: "Añadir usuarios y grupos",
		admin_url_features_priv: "Gestionar características de URL",
		admin_plugin_features_priv: "Gestionar características de plug-in",
		admin_addl_components_priv: "Componentes adicionales",
		admin_global_toolbar_priv: "Barra de herramientas global",
		admin_status_bar_priv: "Barra de estado",
		admin_refresh_message: "Debe renovar el navegador para utilizar los datos actualizados.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		admin_default_desktop_refresh_message: "Debe renovar el navegador para utilizar el escritorio predeterminado actualizado.",
		admin_desktop_refresh_message: "Debe renovar el navegador para utilizar el escritorio actualizado.",
		admin_action_open: "Abrir",
		admin_action_edit: "Editar",
		admin_action_copy: "Copiar",
		admin_action_delete: "Suprimir",
		admin_action_copy: "Copiar",
		admin_action_new: "Crear nuevo",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments: changing the key would be helpful to make it obvious this is a message.
		admin_id_in_use: "Este ID ya está en uso. Debe especificar un ID exclusivo.",

		admin_searchable_properties_for: "Propiedades que se pueden buscar para:",
		admin_repository_new: "Repositorio nuevo",
		admin_desktop_new: "Escritorio nuevo",
		admin_desktop_file_documents: "Es necesario que los usuarios guarden los nuevos documentos y carpetas en una carpeta",
		admin_desktop_file_documents_hover: "Seleccione esta opción si desea que sea necesario que los usuarios seleccionen una carpeta al añadir elementos al repositorio. Si no selecciona esta opción, los usuarios pueden añadir documentos (IBM FileNet P8) o documentos y carpetas (IBM Content Manager) sin archivarlos en una carpeta.",
		admin_desktop_show_security_tab: "Mostrar valores de seguridad durante la adición e incorporación de acciones",
		admin_desktop_show_security_hover: "<b>Solo usuarios de IBM FileNet P8.</b>  Seleccione esta opción si desea permitir que los usuarios editen la seguridad de los documentos y carpetas al añadir o incorporar elementos en este escritorio.",
		admin_desktop_configure_security_inheritance: "Permitir a los usuarios configurar la herencia de seguridad de carpetas",
		admin_desktop_configure_security_inheritance_hover: "<b>Solo usuarios de IBM FileNet P8.</b>  Seleccione esta opción si desea que los usuarios sean capaces de personalizar el acceso a los elementos en una carpeta controlando la herencia de seguridad de las carpetas. Si selecciona esta opción, los usuarios pueden especificar si los usuarios o grupos pueden heredar la seguridad de:<ul><li>Una carpeta</li><li>Una carpeta y sus subcarpetas inmediatas</li><li>Una carpeta y todas sus subcarpetas</li></ul>",
		admin_desktop_appearance: "Apariencia",
		admin_desktop_appearance_instruction: "Puede personalizar el aspecto del escritorio cambiando la página de inicio de sesión y el banner que se muestran para el escritorio.",
		admin_desktop_layout: "Diseño:",
		admin_desktop_layout_hover: "Este diseño especifica qué características se pueden visualizar en el cliente web y cómo se organizan los contenidos del cliente web.<br><br><b>Consejo:</b> Puede definir diseños personalizados creando plug-ins. Debe registrar el plug-in en la herramienta de administración antes de poder seleccionar un diseño personalizado.",
		admin_desktop_layout_default: "Predeterminado",
		admin_desktop_layout_custom: "Personalizado",
		admin_desktop_enable_workflow_email: "Habilite este escritorio para notificaciones de correo electrónico de flujo de trabajo para FileNet P8",
		admin_desktop_enable_workflow_email_hover: "Solo usuarios de FileNet P8. Seleccione esta opción si desea permitir que los usuarios abran el cliente web desde los URL incluidos en las notificaciones de correo electrónico generadas por Process Engine.<br /><br />Si no habilita esta opción para ningún escritorio, los usuarios no pueden iniciar la sesión en el cliente web desde los URL de las notificaciones.<br /><br />Si habilita esta opción en varios escritorios y más de un escritorio cumple los criterios especificados en el URL de la notificación, el cliente web utiliza el primer escritorio que cumple los criterios. ",
		admin_desktop_prevent_create_new_search: "Impedir que los usuarios creen búsquedas",
		admin_desktop_prevent_create_new_search_hover: "Esta opción limita a los usuarios a utilizar únicamente búsquedas existentes e impide que creen búsquedas de final abierto que no se puedan optimizar.</br></br>Este valor no influye en los espacios de equipo. El derecho a crear búsquedas en un espacio de equipo lo controla el rol que un usuario posee en un espacio de equipo determinado.",
		admin_desktop_prevent_create_new_unified_search: "Impedir que los usuarios creen búsquedas entre repositorios",
		admin_desktop_prevent_create_new_unified_search_hover: "Esta opción limita a los usuarios a utilizar únicamente las búsquedas entre repositorios existentes e impide que creen búsquedas entre repositorios de final abierto que no se puedan optimizar.",
		admin_desktop_hide_entry_template_not_found_warning: "Ocultar el aviso que aparece cuando la plantilla de entrada asociada no se ha encontrado",
		admin_desktop_hide_entry_template_not_found_warning_hover: "Seleccione esta opción si desea ocultar el mensaje de aviso que se visualiza cuando se editan las propiedades de elemento y no se encuentra la plantilla de entrada asociada con el elemento.",
		admin_desktop_show_class_role_security_selection: "Permitir a los usuarios configurar la seguridad basada en roles en las plantillas de entrada.",
		admin_desktop_show_class_role_security_selection_hover:	"<b>Solo usuarios de IBM FileNet P8.</b> Seleccione esta opción si desea que los usuarios configuren las plantillas de entrada de forma que se utilice seguridad basada en roles al establecer la seguridad de los documentos y/o carpetas que utilizan plantillas de entrada. Si selecciona esta opción, los editores de plantillas de entrada pueden especificar si se aplican objetos de seguridad basada en roles a una definición de plantilla de entrada.",
		admin_desktop_show_primary_multi_part: "Abrir solo el documento principal en el visor",
		admin_desktop_show_primary_multi_part_hover: "<b>Solo usuarios de IBM FileNet P8.</b> Seleccione esta opción si desea que solo se abra el archivo principal del documento en el visor. Los documentos pueden tener varios archivos asociados. Con esta opción sólo se abrirá el archivo principal asociado al documento.",
		admin_desktop_redaction_save_mode: "Opción de redacción predeterminada:",
		admin_desktop_redaction_save_mode_hover: "Seleccione la modalidad guardar redacción predeterminada del visor ViewONE Virtual:</br>* Pedir siempre al usuario que elija: Hará que el cuadro de diálogo se muestre al entrar en la modalidad de redacción para preguntar al usuario si quiere incorporar como una nueva versión, crear un nuevo documento o descargar contenido.</br>* Incorporar como una nueva versión: Siempre guardará el contenido redactado en una nueva versión del documento existente.</br>* Guardar como un documento completamente nuevo: Siempre guardará el contenido redactado como un documento completamente nuevo.</br>* Descargar y guardar en el cliente: Descargará el contenido redactado en el sistema del cliente.",
		admin_desktop_redaction_save_mode_user_select: "Pedir siempre al usuario que elija",
		admin_desktop_redaction_save_mode_new_version: "Incorporar como una nueva versión",
		admin_desktop_redaction_save_mode_new_document: "Guardar como un documento totalmente nuevo",
		admin_desktop_redaction_save_mode_local_content: "Descargar y guardar en el cliente",

		admin_desktop_document_add_mode: "Diálogo de adición de documento:",
		admin_desktop_document_add_mode_hover: "Especifique el diálogo de adición que se debe utilizar cuando se añadan documentos creados por IBM Content Navigator:<ul><li>Nuevo documento redactado de forma permanente</li><li>Nuevo documento Fusionar y dividir</li><li>Nuevo documento de Microsoft Office</li><li>Nuevo documento de servicio de edición</li></ul>",

		/* Note to translators: This should be a copy of the value for "action.Import.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_standard: "Añadir documento",
		/* Note to translators: This should be a copy of the value for "action.ImportUsingTemplate.label" from ServicesMessages.properties */
		admin_desktop_document_add_mode_entry_template: "Añadir documento utilizando plantilla de entrada",
		/* Note to translators: This should be a copy of the value for "action.MergeSplit.label" from ServicesMessages.properties */
		admin_desktop_merge_and_split_enable: "Fusionar y dividir:",
		admin_desktop_merge_and_split_enable_hover: "Especifique si desea que los usuarios con acceso a este escritorio puedan fusionar y dividir documentos utilizando un visor de soporte.",

		admin_desktop_merge_and_split_show_checkin: "Solicitar a los usuarios que proporcionen valores de propiedad cuando incorporen cambios en un documento.",
		admin_desktop_merge_and_split_show_checkin_hover_help: "Si selecciona esta opción, se mostrará el diálogo de incorporación cuando los usuarios incorporen cambios en un documento en modo Fusionar y dividir.",

		admin_desktop_available_categories: "Características disponibles",
		admin_desktop_selected_categories: "Características seleccionadas",

		admin_layout_banner_title: "Banner y página de inicio de sesión",
		admin_layout_title: "Diseño",

		admin_desktop_application_name: "Nombre de aplicación:",
		admin_desktop_application_name_hover: "Especifique el nombre de aplicación que debe visualizarse en el banner.<br><br>Sugerencia: Defina el nombre de aplicación para otros idiomas en la pestaña Etiquetas / Etiquetas de escritorio.",
		admin_desktop_theme: "Tema:",
		admin_desktop_theme_hover: "Especifique si se debe utilizar el tema predeterminado de IBM Content Navigator o un tema personalizado para este escritorio. Para utilizar un tema personalizado, debe crear un tema en la sección <b>Temas</b> de la herramienta de administración.",
		admin_desktop_login_logo: "Logotipo de la página de inicio de sesión:",
		admin_desktop_login_logo_hover: "Si desea cambiar el logotipo que se visualiza en la página de inicio de sesión, puede especificar el URL de un archivo de logotipo. Sin embargo, se recomienda utilizar un tema personalizado para cambiar el logotipo.",
		admin_desktop_login_logo_url_hover: "Especifique el URL del archivo de logotipo. Si el logotipo se encuentra en el mismo servidor de aplicaciones web que el cliente web, especifique un URL relativo, por ejemplo: /mycustomizations/login_logo.png<br><br>El logotipo no debería superar los 200 píxeles de ancho y los 150 píxeles de alto.<br><br>Es recomendable que el logotipo tenga un fondo transparente.",
		admin_desktop_banner_logo: "Logotipo del banner:",
		admin_desktop_banner_logo_hover: "Si desea cambiar el logotipo que se visualiza en el banner, puede especificar el URL de un archivo de logotipo. Sin embargo, se recomienda utilizar un tema personalizado para cambiar el logotipo.",
		admin_desktop_banner_logo_url_hover: "Especifique el URL del archivo de logotipo. Si el logotipo se encuentra en el mismo servidor de aplicaciones web que el cliente web, especifique un URL relativo, por ejemplo: /mycustomizations/banner_logo.png<br><br>El logotipo no debería superar los 72 píxeles de ancho y los 36 píxeles de alto.<br><br>Es recomendable que el logotipo tenga un fondo transparente.",
		admin_desktop_banner_background_color: "Color de fondo del banner:",
		admin_desktop_banner_background_color_hover: "Si desea cambiar el color de fondo del banner, puede especificar un color personalizado. Sin embargo, se recomienda utilizar un tema personalizado para cambiar el color del banner.",
		admin_desktop_banner_background_color_custom_hover: "Especifique el color del banner de aplicación como un color hexadecimal.",
		admin_desktop_banner_application_name_color: "Color del texto del nombre de aplicación:",
		admin_desktop_banner_application_name_color_hover: "Si desea cambiar el color del nombre de aplicación, puede especificar un color personalizado. Sin embargo, se recomienda utilizar un tema personalizado para cambiar el color del nombre de la aplicación.",
		admin_desktop_banner_application_name_color_custom_hover: "Especifique el color del nombre de aplicación como un color hexadecimal.",
		admin_desktop_banner_menu_color: "Color del icono del banner:",
		admin_desktop_banner_menu_color_hover: "Si cambia el color de fondo del banner, es posible que tenga que cambiar el esquema de color de los iconos del banner para que sean más visibles. Especifique si muestra la versión clara o la versión oscura de los iconos del banner.<br><br>Sin embargo, se recomienda utilizar un tema personalizado para cambiar el color de los iconos.",
		admin_desktop_login_page_content: "Contenido de la página de inicio de sesión:",
		admin_desktop_login_page_content_hover: "Si desea visualiza información adicional en la página de inicio de sesión, como anuncios sobre paradas del sistema o en qué lugar los usuarios pueden obtener ayuda acerca de nombres de usuario y contraseñas, puede especificar el URL del contenido que desea visualizar.",
		admin_desktop_login_page_content_url_hover: "Especifique el URL del contenido de la página de inicio de sesión. Si el contenido se encuentra en el mismo servidor de aplicaciones web que el cliente web, especifique un URL relativo, por ejemplo: /mycustomizations/login_notices.html",
		admin_desktop_password_rules: "Reglas aplicables a contraseñas:",
		admin_desktop_password_rules_hover: "Si desea facilitar a los usuarios directrices para crear contraseñas como, por ejemplo, caracteres restringidos o el número mínimo de caracteres, puede especificar el URL de una página que contenga sus reglas para contraseñas.",
		admin_desktop_password_rules_url_hover: "Especifique el URL del contenido de reglas de contraseña. Si el contenido se encuentra en el mismo servidor de aplicaciones web que el cliente web, especifique un URL relativo, por ejemplo: /mycustomizations/passwords.html",
		admin_desktop_help_url: "URL de ayuda de usuario final:",
		admin_desktop_help_url_hover: "Puede utilizar la ayuda que se envía con IBM Content Navigator o puede redirigir a los usuarios a contenido de ayuda personalizado realizando una de las siguientes acciones:<br><br><ul><li>Dirigir a un sistema de ayuda personalizado</li><li>Añadir ayuda a una instancia de IBM Knowledge Center, que se despliega con IBM Content Navigator.</li></ul>",
		admin_desktop_help_url_url_hover: "Escriba el URL del sistema de ayuda personalizado. IBM Content Navigator añade index.jsp?content=/com.ibm.usingeuc.doc/ y un nombre de archivo al final del URL que especifique.  Para que funcionen los enlaces \"Más información\" en la interfaz, el sistema de ayuda debe utilizar los mismos nombres de archivo que la ayuda de usuario final integrada. ",
		admin_desktop_deprecated_appearance_title: "Valores en desuso",
		admin_desktop_deprecated_appearance_instructions: "Si utiliza un tema personalizado, estos valores serán sustituidos por el tema personalizado. Debe migrar estos valores a un tema personalizado, que proporciona un estilo más detallado que los valores de esta sección. Además, varios escritorios pueden utilizar un tema personalizado.",

		admin_desktop_plugins_title: "Habilite o inhabilite los plug-ins para este escritorio.",
		admin_desktop_plugins_enable_all_plugins: "Habilitar todos los plug-ins desplegados para utilizarlos en este escritorio",
		admin_desktop_plugins_select_plugins: "Seleccionar los plug-ins desplegados que utilizar en este escritorio",
		admin_desktop_plugins_select_plugin: "Seleccionar plug-in",

		admin_desktop_layout_features: "Características visualizadas:",
		admin_desktop_layout_features_hover: "Seleccione las características a las que pueden acceder los usuarios desde este escritorio. Las características se muestran en el orden en el que se listan.<br><br>Cuando seleccione una característica, puede personalizar algunos de los comportamientos de la característica en el escritorio, como por ejemplo el repositorio predeterminado que se ha seleccionado para la característica.",
		admin_desktop_layout_default_repository: "Repositorio predeterminado:",
		admin_desktop_layout_default_repository_layout_hover: "Especifique el repositorio que está seleccionado de forma predeterminada cuando los usuarios abren esta característica.",
		admin_desktop_layout_document_thumbnails: "Miniaturas de documento:",
		admin_desktop_layout_document_thumbnails_hover: "Especifique si se deben visualizar miniaturas de documentos en el panel Información de documento.<br><br>La visualización de miniaturas puede ralentizar el rendimiento del cliente web.",
		admin_desktop_layout_show_filmstrip_view: "Vista Tira de imágenes:",
		admin_desktop_layout_show_filmstrip_view_hover: "Especifique si permite que los usuarios pasen de la vista de lista de contenido a la vista de tira de imágenes.<br><br>La vista de tira de imágenes genera una vista previa de cada documento que selecciona el usuario. Sin embargo, el uso de la vista de tira de imágenes puede ralentizar el rendimiento del cliente web. Además, debe configurar el visor de conversión HTML para ver vistas previas de documentos.",
		admin_enabled: "Habilitar",
		admin_disabled: "Inhabilitar",
		admin_include: "Incluir",
		admin_exclude: "Excluir",
		admin_layout_teamspaces_default_repository: "Espacios de equipo:",
		admin_layout_entry_templates_default_repository: "Plantillas de entrada:",
		admin_layout_other_features_default_repository: "Buscar y examinar",
		admin_layout_work_default_repository: "Trabajo:",
		admin_layout_default_feature: "Característica predeterminada:",
		admin_default_category_placeholder: "Seleccionar una característica",
		admin_layout_default_feature_hover: "Especifique la característica que se debe mostrar cuando los usuarios inicien sesión en este escritorio.",
		admin_layout_default_feature_warning: "Si se cambia la característica predeterminada, puede afectar al tiempo necesario para cargar la aplicación.",
		admin_layout_feature_list_header: "Característica",
		admin_layout_show_statusbar: "Barra de estado:",
		admin_layout_show_statusbar_hover: "Especifique si quiere mostrar la barra de estado en la parte inferior del escritorio.<br><br>Si oculta la barra de estado, los usuarios no pueden ver información sobre sucesos que no sean de error, como por ejemplo:<ul><li>El documento se ha añadido al repositorio.</li><li>La búsqueda ha devuelto 59 documentos.</li></ul>",
		admin_layout_show_magazineview: "Vista Revista",
		admin_layout_show_magazineview_hover: "Especifique si permite que los usuarios pasen de la vista de lista de contenido a la vista de revista.<br><br>El vista de revista aumenta la altura de cada entrada en la lista de contenido, lo que reduce el número de elementos que se pueden visualizar simultáneamente en la lista de contenido.",
		admin_layout_show_detailsview: "Vista Detalles:",
		admin_layout_show_detailsview_hover: "Especifique si desea permitir que los usuarios pasen de la pantalla de lista de contenido a la vista de detalles.<br><br>La vista de detalles maximiza el número de filas visibles en la lista de contenido.",
		admin_feature_config_docinfopane_label: "Panel de información sobre el documento:",
		admin_feature_config_docinfopane_hoverhelp: "Especifique si los usuarios pueden acceder al panel de información del documento en esta característica.",
		admin_feature_config_docinfopane_default_label: "Comportamiento predeterminado:",
		admin_feature_config_docinfopane_expanded: "Expandido",
		admin_feature_config_docinfopane_collapsed: "Contraído",
		admin_feature_config_docinfopane_expand_on_select: "Expandir cuando se selecciona el elemento",
		admin_layout_features_title: "Características de escritorio",
		admin_layout_features_instructions: "Especifique las características a las que pueden acceder los usuarios desde este escritorio.  Además, puede personalizar el comportamiento de cada característica que se incluye en el escritorio.",
		admin_layout_components_title: "Componentes de escritorio adicionales",
		admin_layout_components_instructions: "Puede inhabilitar algunos de los componentes del escritorio si desea una interfaz más ágil o si desea mejorar el rendimiento del cliente web.",
		admin_layout_featureconfig_instructions: "Seleccione la característica que desea configurar",
		admin_layout_featureconfig_no_configuration: "No hay ninguna configuración de característica disponible.",
		admin_layout_featureconfig_label: "Configuración para la característica ${0}",
		admin_layout_featureconfig_title: "Configuración de característica",
		admin_layout_featureconfig_taskManagerURL: "Para utilizar esta característica, debe habilitar y configurar IBM Content Navigator de modo que conecte con el servicio del gestor de tareas. Habilite el servicio del gestor de tareas en la sección <b>Valores</b> de esta herramienta de administración",
		admin_feature_config_show_my_checkouts_label: "Panel Mis extracciones:",
		admin_feature_config_show_my_checkouts_hoverhelp: "El panel Mis extracciones permite a los usuarios ejecutar una búsqueda de todos los elementos que han extraído en un repositorio específico. Especifica si los usuarios pueden acceder al panel Mis extracciones desde la característica Inicio.<br/><br/><b>Restricción:</b> Esta característica requiere que tenga al menos un repositorio de IBM Content Manager, IBM FileNet P8 u OASIS CMIS asociado con este escritorio.",

		admin_feature_config_default_repository_icon_text: "Repositorio predeterminado",
		admin_show: "Mostrar",
		admin_hide: "Ocultar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: I don't think this message is used.
		admin_can_not_remove_admin: "No puede eliminar la característica Administración del Escritorio del administrador",
		admin_warning_label: "Advertencia:",
		admin_layout_show_globaltoolbar: "Barra de herramientas global:",
		admin_layout_show_globaltoolbar_hover: "Especifique si se debe mostrar la barra de estado en el banner en la parte superior del escritorio.<br><br>La barra de herramientas global incluye acciones que permiten a los usuarios añadir documentos, carpetas o retenciones al repositorio. Las acciones disponibles dependen del repositorio al que está conectado el usuario.",
		admin_interface_text_name_label: "Tipo etiqueta",

		admin_interface_text_label_description: "Puede personalizar el texto que se visualiza en determinadas áreas del cliente web. Las etiquetas se visualizan para todos los repositorios y escritorios en su configuración. Especifique el texto que desea ver en la interfaz en el campo Etiqueta actual.<br><br><b>Importante:</b> todos los cambios que realice en las etiquetas no se visualizarán en la herramienta de administración.",
		admin_interface_text_label_action: "Etiquetas de acción",
		admin_interface_text_label_action_description: "Las etiquetas de acción se visualizan en botones y en menús de todo el cliente web. Puede definir distintas etiquetas de acción para cada tipo de repositorio.",
		admin_interface_text_label_application: "Etiquetas de aplicación",
		admin_interface_text_label_application_description: "Las etiquetas de aplicación se visualizan por todo el cliente web.",
		admin_interface_text_label_system: "Etiquetas de propiedad del sistema",
		admin_interface_text_label_system_description: "Las propiedades del sistema que se visualizan varían en función del repositorio. Puede personalizar las etiquetas que se visualizan para las propiedades del sistema que están asociadas con los documentos y carpetas en los repositorios.",
		admin_interface_text_label_desktop: "Etiquetas de escritorio",
		admin_interface_text_label_desktop_description: "Si ha personalizado el nombre de la aplicación en un escritorio, puede personalizar el nombre en otros idiomas que no sean el inglés. También puede personalizar los nombres de los espacios de aplicación de IBM FileNet P8 en un escritorio.",

		admin_interface_text_system_label: "Etiqueta de sistema",
		admin_interface_text_current_label: "Etiqueta actual",
		admin_interface_text_default_label_heading: "Etiqueta predeterminada",
		admin_interface_text_default_label: "Etiqueta predeterminada:",
		admin_interface_text_displayed_in_label: "Se visualiza para",
		admin_interface_text_displayed_in_document_folder: "Documentos y carpetas",
		admin_interface_text_displayed_in_document: "Documentos",
		admin_interface_text_displayed_in_folder: "Carpetas",
		admin_interface_text_displayed_in_admin_application_space: "Etiqueta de espacio de aplicación",
		admin_interface_text_displayed_in_desktop: "Etiqueta de característica para dispositivo móvil",
		admin_interface_text_displayed_in_admin_application_name: "Nombre de aplicación",

		admin_new_desktop: "Escritorio nuevo",
		admin_new_repository: "Repositorio nuevo",
		admin_new_menu: "Menú nuevo",
		admin_new_viewer_mapping: "Correlación de visor nueva",
		admin_new_mapping_label: "Nueva correlación",
		admin_new_icon_mapping: "Correlación de icono nueva",
		admin_viewer_mapping_list_instructions: "Puede configurar qué visores utiliza el cliente web para visualizar diferentes tipos de contenido. Una correlación de visor define qué tipos MIME están asociados con cada visor que desea utilizar. Puede crear varias correlaciones de visor si desea utilizar distintos visores para distintos escritorios.",
		admin_viewer_mapping_instructions: "Especifique los visores que desea utilizar para abrir archivos. Si desea utilizar un visor personalizado, debe integrar el visor como un plug-in antes de poder añadirlo a la correlación de visor.<br><br><b>Importante:</b> cuando un usuario abre un documento, el cliente web busca en la lista de correlaciones de visor para encontrar el primer visor que puede abrir el documento según el sistema operativo que el usuario está ejecutando y el repositorio al que está conectado. <br/>",
		admin_viewer_mapping_hover: "",
		admin_new_plugin: "Plug-in nuevo",
		admin_menu_list_instructions: "Puede crear barras de herramientas y menús contextuales personalizados para controlar qué acciones están disponibles para los usuarios. No puede editar los menús predeterminados, pero puede crear copias de menús existentes para restringir las acciones que están disponibles o para añadir acciones personalizadas que están definidas en plug-ins.<br><br>Si desea crear un nuevo tipo de menú, debe definir el menú en un plug-in.",
		admin_menu_id_hover: "El ID debe ser exclusivo y no se puede cambiar después de guardar el menú.<br><br>El ID solo puede contener caracteres alfanuméricos y distingue entre mayúsculas y minúsculas.",
		admin_menu_id_disabled_hover: "El ID de menú no se puede cambiar. Si desea utilizar un ID diferente, debe crear un menú nuevo.",
		admin_menu_default_instructions: "No puede editar este menú porque se trata de un menú predeterminado. Si desea editar este menú, debe crear una copia del menú.",
		admin_menu_toolbar_instructions: "Puede restringir las acciones que están disponibles para esta barra de herramientas o puede añadir acciones personalizadas que se definen en un plug-in. También puede organizar las acciones añadiendo separadores a la barra de herramientas.",
		admin_menu_toolbar_custom_instructions: "Esta barra de herramientas se define mediante un plug-in. Si desea editar esta barra de herramientas, debe actualizar el plug-in o crear una copia de la barra de herramientas.",
		admin_menu_context_menu_instructions: "Puede restringir las acciones disponibles para este menú contextual o puede añadir acciones personalizadas que se hayan definido en un plug-in. También puede organizar las acciones añadiendo separadores o submenús al menú contextual.",
		admin_menu_context_menu_custom_instructions: "Este menú contextual se define mediante un plug-in. Si desea editar este menú contextual, debe actualizar el plug-in o crear una copia del menú contextual.",
		admin_desktop_list_instructions: "Puede crear varios escritorios para proporcionar a distintos usuarios acceso al contenido que necesiten. Por ejemplo, puede crear un escritorio que sólo permite a los usuarios buscar contenido o un escritorio que proporcione a los usuarios acceso a un único repositorio. ",
		admin_plugin_updated: "Se ha cambiado la configuración del plug-in seleccionado. Debe renovar el navegador para que se apliquen los cambios.",
		admin_repository_ci_heading: "Repositorio de Content Integrator: <b>${0}</b>",
		admin_repository_p8_heading: "Repositorio de FileNet Content Manager: <b>${0}</b>",
		admin_repository_cm_heading: "Repositorio de Content Manager: <b>${0}</b>",
		admin_repository_od_heading: "Repositorio de Content Manager OnDemand: <b>${0}</b>",
		admin_repository_cmis_heading: "Repositorio de Content Management Interoperability Services (CMIS): <b>${0}</b>",
		admin_repository_box_heading: "Repositorio de Box: <b>${0}</b>",
		admin_repository_generic_heading: "Repositorio: <b>${0}</b>",

		admin_delete_confirmation_desktops: "¿Desea suprimir los escritorios seleccionados?\nSe han seleccionado ${0} escritorios.",
		admin_delete_confirmation_menus: "¿Desea suprimir los menús seleccionados?\nSe han seleccionado ${0} menús.",
		admin_delete_confirmation_repositories: "¿Desea suprimir los repositorios seleccionados?\nSe han seleccionado ${0} repositorios.",
		admin_delete_confirmation_viewer_mappings: "¿Desea suprimir las correlaciones del visor seleccionadas?  Se han seleccionado ${0} correlaciones.",
		admin_delete_confirmation_icon_mappings: "¿Desea suprimir las configuraciones de icono seleccionadas?\nSe han seleccionado ${0} configuraciones de icono.",
		admin_delete_confirmation_plugins: "¿Desea suprimir los complementos seleccionados?\nSe han seleccionado ${0} complementos.",
		admin_delete_confirmation: "¿Desea suprimir los elementos seleccionados?\nSe han seleccionado ${0} elementos.",

		admin_viewer_mapping_id_hover: "El identificador debe ser exclusivo y no puede cambiarse después de guardar la correlación de visor.<br><br>El ID solo puede contener caracteres alfanuméricos y distingue entre mayúsculas y minúsculas.",
		admin_viewer_mapping_id_disabled_hover: "No se puede cambiar el ID de correlación de visor. Si desea utilizar un ID diferente, debe crear una nueva correlación de visor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Is this displayed as a message or as hover help?
		admin_delete_default_desktop: "No se puede suprimir el escritorio predeterminado.",

		admin_desktop_heading: "Escritorio: <b>${0}</b>",
		admin_menu_toolbar_heading: "Barra de herramientas: <b>${0}</b>",
		admin_menu_toolbar_custom_heading: "Barra de herramientas personalizada: <b>${0}</b>",
		admin_menu_context_menu_heading: "Menú contextual: <b>${0}</b>",
		admin_menu_context_menu_custom_heading: "Menú contextual personalizado: <b>${0}</b>",
		admin_plugin_heading: "Plug-in: <b>${0}</b>",
		admin_plugin_instructions: "Un plug-in puede ser un archivo JAR o un archivo de clases compiladas.<br/><br/><b>Importante:</b> El servidor de aplicaciones web IBM Content Navigator debe poder acceder al archivo de plug-in en el sistema local o a través de un URL.",
		admin_plugin_list_instructions: "Debe utilizar la herramienta de administración para registrar los plug-ins para el cliente web. Si un plug-in requiere configuración adicional, los parámetros de configuración se visualizan después de registrar el plug-in.<br /><br /><b>Importante:</b> Si edita un plug-in al que se hace referencia en otra área de las herramientas de administración, como por ejemplo un menú, es posible que se encuentre problemas con el comportamiento del plug-in. Además, los plug-ins se invocan en el orden en que aparecen en la lista. Si es necesario ejecutar un plug-in antes de otro plug-in, asegúrese de que los plug-ins aparezcan en el orden en el que se deben ejecutar.",
		admin_plugin_cannot_delete: "Los plug-ins seleccionados no se puede suprimir porque algunos plug-ins dependen de ellos.<br/>Plug-ins seleccionados: ${0}<br/>Plug-ins dependientes: ${1}",
		admin_plugin_cannot_disable: "Los plug-ins seleccionados no se pueden inhabilitar porque algunos plug-ins dependen de ellos.<br/>Plug-ins seleccionados: ${0}<br/>Plug-ins dependientes: ${1}",
		admin_plugin_cannot_add: "El plug-in no se ha podido añadir porque faltan algunos de los plug-ins de los que depende o se han inhabilitado. Plug-ins que faltan o están inhabilitados: ${0}",
		admin_plugin_cannot_enable: "Los plug-ins seleccionados no se pueden habilitar porque faltan algunos de los plug-ins de los que dependen o se han inhabilitado.<br/>Plug-ins seleccionados: ${0}<br/>Plug-ins que faltan o están inhabilitados: ${1}",
		admin_plugin_save_order: "Guardar orden",
		admin_plugin_load: "Cargar",
		admin_plugin_load_hover: "Especifique el URL del plug-in",
		admin_plugin_file_hover: "Si el archivo JAR del plug-in está en el sistema de archivos local, puede entrar la vía de acceso completa o el URL del archivo del plug-in. Si el archivo JAR del plug-in está en un servidor remoto, debe entrar el URL del archivo del plug-in.",
		admin_plugin_classfolderpath_hover: "El archivo de clases compiladas debe estar en el servidor de aplicaciones web de IBM Content Navigator.<br/><br/>Escriba la vía de acceso completa de la carpeta donde se compilan y generan las clases del plug-in.<br/><br/>La vía de acceso no debe contener el nombre del paquete de la clase del plug-in. Por ejemplo, la vía de acceso predeterminada de la clase del plug-in de ejemplo en Windows es C:\\Archivos de programa (x86)\\IBM\\ECMClient\\bin.",
		admin_plugin_classfoldername_hover: "Escriba el nombre completo de la clase Java dentro del archivo de clases que se debe cargar e invocar como la clase del plug-in.<br/>Por ejemplo, el nombre de clase para el plug-in de ejemplo es com.ibm.ecm.extension.sample.<br/>SamplePlugin.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Verify that this is sufficient information for the user to resolve the problem.
		admin_plugin_file_not_found: "El archivo JAR del plug-in no se ha encontrado en el URL especificado. Asegúrese de que el archivo JAR se encuentre en el servidor de aplicaciones web y de que el URL y el nombre de archivo sean correctos.",
		admin_plugin_for_repository_not_loaded: "Este repositorio no se puede editar. El plug-in que define y da soporte a este tipo de repositorio no se ha cargado. En el separador Plug-ins, edite el plug-in para verificar que esté configurado correctamente y que se haya cargado.",
		admin_plugin_repository_types: "Tipos de repositorio:",
		admin_plugin_viewers: "Visores:",
		admin_plugin_features: "Características:",
		admin_plugin_layouts: "Diseños:",
		admin_plugin_not_available: "No disponibles",
		admin_plugin_config_params: "Parámetros de configuración:",
		admin_viewer_def_heading: "Correlación de visor: <b>${0}</b>",
		admin_users_and_groups: "Usuarios y grupos",
		admin_general: "General",
		admin_logging: "Registro",
		admin_authentication: "Autenticación",		
		admin_rolebase_role: "Rol:",
		admin_settings_logging_instructions: "Puede utilizar el registro para resolver problemas con el cliente web. Puede definir el registro con mayor precisión si sabe que se produce un problema en una clase Java específica o con un determinado usuario. La información de error se graba en los archivos de registro de errores del servidor de aplicaciones web.",
		admin_settings_logging_instructions2: "<b>Valores del registro de depuración</b><br />Si sabe que se produce un problema con una máquina host de cliente específica o un usuario específico, puede dirigir el registro de depuración hacia esa máquina o ese usuario. Puede capturar información de depuración en un entorno de producción sin afectar significativamente al rendimiento del sistema.<br /><br /><b>Importante:</b> si se especifica una máquina host de cliente o un usuario, este valor sustituye a cualquier otro valor de registro. Tras capturar la información que necesite, defina esta opción como <b>Ninguno</b> para reanudar el registro estándar para su entorno.",
		admin_settings_export_config_hover: "Exporte la información actual de configuración del sistema a un archivo para su uso con el IBM Support Assistant Data Collector. El archivo se guarda en la ubicación que define la propiedad del sistema Java user.home.",
		admin_logging_level: "Registro a nivel de aplicación",
		admin_logging_level_hover: "Los niveles de registro afectan a la cantidad de información que se almacena en el servidor. Si se selecciona <b>Error</b>, se captura la menor cantidad de información de registro. Si se selecciona <b>Depuración</b> se captura la mayor cantidad de información.<br /><br />No especifique <b>Depuración</b> en un entorno de producción a menos que se lo indique el servicio de soporte técnico de software de IBM.",
		admin_logging_level_0: "No se ha anotado nada",
		admin_logging_level_1: "Error",
		admin_logging_level_2: "Aviso",
		admin_logging_level_3: "Información",
		admin_logging_level_4: "Depuración",
		admin_logging_classes: "Registro de nivel de clase Java:",
		admin_logging_classes_hover: "De forma predeterminada, todas las clases Java y paquetes se incluyen en los registros de errores del servidor de aplicaciones web. Sin embargo, puede especificar las clases Java o paquetes que se deben incluir en su registro o excluir de este. Puede utilizar los registros de errores del servidor de aplicaciones web para determinar qué clases incluir o excluir.<br><br>Si sabe que se produce un problema en una clase específica, puede incluir específicamente dicha clase en los archivos de registro. Cuando se incluye una clase en los registros de errores, todas las demás clases se excluyen del archivo de registro.<br><br>Si sabe que no se produce un problema en una clase y desea reducir el tamaño del archivo de registro, puede excluir esa clase de los archivos de registro.",
		admin_logging_classes_include: "Incluir",
		admin_logging_classes_include_all: "Todas las clases",
		admin_logging_classes_include_specified: "Clases específicas",
		admin_logging_classes_include_specified_msg: "Especifique qué clases deben incluirse.",
		admin_logging_classes_exclude: "Excluir",
		admin_logging_classes_exclude_none: "Ninguno",
		admin_logging_classes_exclude_specified: "Clases específicas",
		admin_logging_classes_exclude_specified_msg: "Especifique qué clases deben excluirse.",
		admin_logging_debug: "Registro de depuración para:",
		admin_logging_debug_hover: "<b>Importante:</b> revise los archivos de registro del servidor de aplicaciones web antes de especificar un usuario o dirección IP de máquina host cliente. El valor que proporcione debe coincidir con el valor que se visualiza en el archivo de registro.",
		admin_logging_debug_none: "Ninguno (valor predeterminado)",
		admin_logging_debug_host: "Máquinas host de cliente (direcciones IP)",
		admin_logging_debug_host_msg: "Especifique la dirección IP de una o más máquinas cliente para las que desee registrar información de depuración. Utilice una coma para separar las direcciones IP.<br /><br /><b>Importante:</b> revise los archivos de registro del servidor de aplicaciones web antes de especificar una dirección IP. El valor que proporcione debe coincidir con el valor que se visualiza en el archivo de registro.",
		admin_logging_debug_user: "Usuarios",
		admin_logging_debug_user_msg: "Especifique el nombre de usuario de uno o más usuarios para los que desee registrar información de depuración. Utilice una coma para separar los nombres de usuario.<br /><br /><b>Importante:</b> revise los archivos de registro del servidor de aplicaciones web antes de especificar un nombre de usuario. El valor que proporcione debe coincidir con el valor que se visualiza en el archivo de registro.",

		admin_office_settings_logging_instructions: "Puede utilizar el registro para resolver problemas de IBM Content Navigator for Microsoft Office. Puede definir el registro con mayor precisión si sabe que se produce un problema en una clase específica o con un determinado usuario. Se graba información de error en los archivos de registro de la aplicación en las máquinas host del cliente IBM Content Navigator for Microsoft Office. ",
		admin_office_settings_logging_instructions2: "<b>Valores del registro de depuración</b><br />Si sabe que se produce un problema con una máquina host de cliente específica o un usuario específico de IBM Content Navigator for Microsoft Office, puede dirigir el registro de depuración hacia esa máquina o ese usuario. Puede capturar información de depuración en un entorno de producción sin afectar significativamente al rendimiento del sistema. <br /><br /><b>Importante:</b> si se especifica una máquina host de cliente o un usuario, este valor sustituye a cualquier otro valor de registro. Tras capturar la información que necesite, defina esta opción como <b>Ninguno</b> para reanudar el registro estándar para su entorno IBM Content Navigator for Microsoft Office. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> revise los archivos de registro de la máquina cliente antes de especificar un usuario o dirección IP de máquina host cliente. El valor que proporcione debe coincidir con el valor que se visualiza en el archivo de registro. ",
		admin_office_logging: "Registro de Office",
		admin_office_logging_classes: "Registro a nivel de clase",
		admin_office_logging_classes_hover: "De forma predeterminada, todas las clases y paquetes se incluyen en los registros de errores de IBM Content Navigator for Microsoft Office. Sin embargo, puede especificar las clases Java o paquetes que se deben incluir en su registro o excluir de este. Puede utilizar los registros de la máquina cliente para determinar qué clases se deben incluir o excluir.<br /><br />Si sabe que se produce un problema en una clase específica, puede incluir específicamente dicha clase en los archivos de registro. Cuando se incluye una clase en los registros de errores, todas las demás clases se excluyen de los archivos de registro. <br /><br />Si sabe que no se produce un problema en una clase y desea reducir el tamaño del archivo de registro, puede excluir esa clase de los archivos de registro. ",
		admin_office_logging_debug_hover: "<b>Importante:</b> revise los archivos de registro de la máquina cliente antes de especificar un usuario o dirección IP de máquina host cliente. El valor que proporcione debe coincidir con el valor que se visualiza en el archivo de registro.",
		admin_office_logging_additional_settings: "Valores adicionales:",
		admin_office_logging_additional_settings_hover: "Especifique los valores adicionales",
		admin_office_logging_file_size: "Tamaño del archivo de registro",
		admin_office_logging_file_size_hover: "Especifique el tamaño al que IBM Content Navigator for Microsoft Office crea un nuevo archivo de registro. Cuando un archivo de registro alcanza el tamaño máximo, se cambia el nombre del registro actual para incluir la fecha (con el formato AAAAMMDD) y un número de incremento del archivo (por ejemplo, ICNExcelAddin-20121116-5.log) y se crea un nuevo archivo de registro. ",
		admin_office_logging_show_stacktrace_on_dialogs: "Mostrar el rastreo de pila en diálogos",
		admin_office_logging_show_stacktrace_on_dialogs_hover: "Si lo desea puede mostrar información de rastreo de pila en diálogos de mensajes para facilitar la resolución de problemas. Aunque no habilite esta opción, la información de rastreo detallada siempre se incluye en los registros de errores de IBM Content Navigator for Microsoft Office. ",

		admin_icon_state_twisty: "Iconos de estado",
		admin_icon_state_icon: "Icono de estado",
		admin_icon_state: "Estado",
		state_contains_label: "El estado contiene",
		admin_icon_state_instructions: "Puede personalizar los iconos que se visualizan al lado de los documentos, carpetas y elementos de trabajo en sus repositorios.<br><br><b>Sugerencia:</b> puede especificar si visualizar iconos de estado para cada repositorio en su entorno.",
		admin_icon_state_dialog_title: "Correlación de icono de estado",
		admin_icon_state_dialog_instructions: "Puede correlacionar el estado seleccionado en un icono predefinido que se suministra con el cliente web o para un icono personalizado.",

		admin_icon_mapping_twisty: "Iconos de tipo MIME",
		admin_icon_mapping_dialog_title: "Correlación de icono",
		admin_icon_mapping: "Correlación de icono",
		admin_icon_mapping_instructions: "Puede correlacionar una lista de tipos MIME en un icono predefinido que se suministra con el cliente web o en un icono personalizado.",
		admin_icon_mapping_list_instructions: "Puede personalizar los iconos que se visualizan para los distintos tipos MIME almacenados en el repositorio. El cliente web utiliza los iconos en el orden en el que se listan. Si un tipo MIME se lista más de una vez, se utilizará el primer icono asociado a este tipo MIME.",
		admin_icon_mapping_icon_label: "¿Qué icono desea utilizar?",
		admin_icon_mapping_file_name: "Icono personalizado:",
		admin_icon_mapping_file_name_heading: "Icono personalizado",
		admin_icon_mapping_file_name_placeholder: "Especifique el URL del icono",
		admin_icon_mapping_file_name_hover: "Especifique el URL del icono. Si el icono está en el mismo servidor de aplicaciones web que el cliente web, especifique un URL relativo. Por ejemplo: /mycustomizations/icon.png",
		admin_icon_mapping_class_name: "Icono predefinido:",
		admin_icon_mapping_class_name_heading: "Icono predefinido",
		admin_icon_mapping_class_name_hover: "Seleccione un icono que se haya proporcionado con el cliente web.",
		admin_icon_mapping_class_name_placeholder: "Seleccione un icono",

		admin_p8_instructions: "Todos los repositorios de FileNet Content Manager configurados para el cliente web comparten esta información.",
		admin_p8_collaboration_config: "Configuración opcional de FileNet Collaboration Services",
		admin_p8_collaboration_config_instructions: "Puede configurar estos parámetros si desea ajustar FileNet Collaboration Services para adaptarlo a su entorno IBM FileNet P8.",
		admin_p8_use_url_incoming: "Utilice el URL en las solicitudes entrantes para generar URL de respuesta:",
		admin_p8_use_url_incoming_hover: "En la mayoría de los entornos FileNet Collaboration Services, puede utilizar el URL de una solicitud entrante para generar el URL en una respuesta. Seleccione <b>Sí</b> a menos que se aplique una de las situaciones siguientes a su entorno:<ul><li>Desea forzar que las aplicaciones cliente accedan a FileNet Collaboration Services a través de un determinado URL.<li>Los valores del servidor proxy hacen que FileNet Collaboration Services genere URL no válidos.</ul>",

		admin_p8_use_url_incoming_http: "URL de FileNet Collaboration Services:",
		admin_p8_use_url_incoming_http_hover: "Especifique el URL a través del cual las aplicaciones cliente pueden acceder a FileNet Collaboration Services con el formato http://FNCSserver:port_number.",
		admin_p8_use_url_incoming_https: "URL HTTPS de FileNet Collaboration Services:",
		admin_p8_use_url_incoming_https_hover: "Si FileNeet Collaboration Services está configurado para utilizar SSL, especifique el URL HTTPS a través del cual las aplicaciones cliente pueden acceder a FileNet Collaboration Services con el formato https://FNCSserver:port_number.",
		admin_p8_hide_email_addresses: "Ocultar direcciones de correo electrónico de usuarios en respuestas del servidor:",
		admin_p8_hide_email_addresses_hover: "Puede ocultar las direcciones de correo electrónico de los usuarios en las respuestas del servidor si necesita cumplir con políticas de privacidad. Por ejemplo, puede ocultar la lista de direcciones de correo electrónico de usuarios cuando el servidor devuelve una lista de documentos e información sobre los usuarios que han creado o editado los documentos.",

		admin_p8_mask_user_ids: "Enmascarar ID de usuario en los archivos de registro:",
		admin_p8_mask_user_ids_hover: "Puede ocultar los nombres de usuario en los archivos de registro de FileNet Collaboration Services si necesita cumplir con políticas de privacidad. Si habilita esta opción, los nombres de usuario se sustituyen por valores ocultos. Esto le permite proporcionar archivos de registro a empresas externas, como por ejemplo IBM, para obtener soporte sin desvelar nombres de usuario ni registros de actividades.",

		admin_p8_soft_delete: "Mover archivos suprimidos a la bandeja de recuperación:",
		admin_p8_soft_delete_hover: "Cuando los usuarios suprimen elementos, nueva dichos elementos a una bandeja de recuperación en lugar de suprimirlos del repositorio. Los elementos permanecen en la bandeja de recuperación hasta que se depuran. Este valor se pasa por alto si el repositorio de destino no da soporte a bandejas de recuperación.<br><br><b>Restricción:</b> las bandejas de recuperación reciben soporte en IBM FileNet P8 Versión 5.2 o posteriores y requiere que complemento Social Collaboration Base Extensions.",

		admin_p8_download: "Configuración de memoria caché HTTP de descarga de contenido",
		admin_p8_download_instructions: "Si los repositorios de IBM FileNet Content Manager contienen muchos archivos grandes, puede configurar la memoria caché HTTP de descarga de contenido (CDHC) para permitir que FileNet Collaboration Services redirija de forma segura las solicitudes de contenido de archivos grandes a un servidor web dedicado.<br/><br/>Esta característica requiere IBM HTTP Server. Además, debe actualizar el archivo de IBM HTTP Server httpd.conf.",
		admin_p8_download_cache: "Memoria caché HTTP de descarga de contenido:",
		admin_p8_download_cache_hover: "Especifique si desea habilitar la memoria caché HTTP de descarga de contenido (CDHC) para todos los repositorios de IBM FileNet Content Manager del entorno. Puede especificar un tamaño mínimo para que los archivos se guarden en memoria caché.",
		admin_p8_download_cache_folder: "Directorio completo de memoria caché:",
		admin_p8_download_cache_folder_hover: "Especifique la vía de acceso completa del directorio en el que desea guardar los archivos colocados en memoria caché. El directorio puede estar en cualquier sistema operativo o dispositivo, como por ejemplo un directorio de red compartido, siempre que sea visible como sistema de archivos en FileNet Collaboration Servicios e IBM HTTP Server.",
		admin_p8_download_cache_url: "Alias de la ubicación de la memoria caché:",
		admin_p8_download_cache_url_hover: "Especifique el alias que se utiliza para apuntar al directorio de memoria caché desde el URL de FileNet Collaboration Services. Especifique el alias con el formato /alias, por ejemplo /cdhc.<br/><br/>Si /cdhc se incluye en un URL, la aplicación se redirige al directorio completo de memoria caché.",
		admin_p8_download_cache_max_files: "Número máximo de archivos en memoria caché:",
		admin_p8_download_cache_max_files_hover: "Cuando se alcanza el número máximo de archivos, el archivo más antiguo se elimina de la memoria caché.<br><br>Si especifica el número máximo de archivos en memoria caché y el tamaño máximo de la memoria caché, el archivo más antiguo se elimina de la memoria caché cuando se cumple la inferior de las dos condiciones.",
		admin_p8_download_cache_max_size: "Tamaño máximo de memoria caché (en GB):",
		admin_p8_download_cache_max_size_hover: "Cuando se alcanza el tamaño máximo de memoria caché, el archivo más antiguo se elimina de la memoria caché.<br/><br/>Si especifica el número máximo de archivos en memoria caché y el tamaño máximo de la memoria caché, el archivo más antiguo se elimina de la memoria caché cuando se cumple la inferior de las dos condiciones.",
		admin_p8_download_cache_cleanup_duration: "Duración máxima de limpieza (en segundos):",
		admin_p8_download_cache_cleanup_duration_hover: "Especifique el intervalo máximo de tiempo que puede durar la operación de limpieza. La duración predeterminada es de 5 segundos.<br><br>Cualquier archivo que esté sujeto a supresión pero que permanezca en la memoria caché después de la operación de limpieza se eliminará durante una futura operación de limpieza.",
		admin_p8_download_cache_cleanup_min: "Intervalo mínimo entre operaciones de limpieza de memoria caché (en segundos):",
		admin_p8_download_cache_cleanup_min_hover: "Especifique el intervalo mínimo de tiempo que debe transcurrir entre operaciones de limpieza de memoria caché. El intervalo predeterminado es 3.600 segundos (1 hora).<br><br>Las operaciones de limpieza de memoria caché sólo se producen cuando hay una solicitud activa de descarga de contenido de la memoria caché. Si se reciben solicitudes cada minuto, la operación de limpieza se ejecutará cada hora. Sin embargo, si pasan tres horas entre solicitudes de descarga, la operación de limpieza no se producirá hasta que se reciba la próxima solicitud de descarga.",
		admin_p8_download_cache_min_lifetime: "Tiempo mínimo en memoria caché (en segundos):",
		admin_p8_download_cache_min_lifetime_hover: "Especifique el intervalo mínimo de tiempo que un archivo se conserva en la memoria caché antes de que se pueden eliminar. El intervalo predeterminado es 3.600 segundos (1 hora).<br><br>Incluso si la memoria caché alcanza el tamaño máximo o contiene el número máximo de archivos, el archivo más antiguo de la memoria caché no se puede suprimir hasta que el archivo haya permanecido en la memoria caché durante el período de tiempo especificado.",
		admin_p8_download_cache_size_threshold: "Tamaño mínimo de archivo que almacenar en memoria caché (en KB):",
		admin_p8_download_cache_size_threshold_hover: "Especifique el tamaño mínimo al que debe utilizarse CDHC para colocar archivos en memoria caché. Si un archivo es menor que el tamaño especificado, el archivo se direcciona mediante el servidor de aplicaciones web en el que se ha desplegado FileNet Collaboration Services. El tamaño predeterminado es 1.000 KB.",
		admin_p8_download_guard_header: "Cabecera HTTP para vigilancia (gatekeeping):",
		admin_p8_download_guard_header_hover: "Si una aplicación cliente no direcciona una solicitud a través de IBM HTTP Server, el contenido en memoria caché no se puede descargar. Puede especificar que sólo las solicitudes entrantes con una determinada cabecera HTTP (que se añade a las solicitudes procedentes de IBM HTTP Server) pueden acceder al contenido de la memoria caché para impedir anomalías de descarga.<br><br>La cabecera HTTP se configura en IBM HTTP Server y está presente en todas las solicitudes entrantes que se direccionan a través de IBM HTTP Server. Si una solicitud no tiene la cabecera HTTP, el contenido se direcciona a través del servidor de aplicaciones web en lugar de IBM HTTP Server.",
		admin_p8_download_generate_config: "Generar configuración",
		admin_p8_download_generate_config_label: "Configuración de IBM HTTP Server:",
		admin_p8_download_generate_config_label_hover: "Para que la configuración de CHDC funcione, debe actualizar el archivo de IBM HTTP Server httpd.conf. Pulse Generar configuración para generar las sentencias que se deben añadir al archivo httpd.conf.",

		admin_logging_viewone_pro: "Registro de ViewONE Professional:",
		admin_logging_viewone_virtual: "Registro de ViewONE Virtual:",
		admin_logging_viewone_streamer: "Registro de Document Streaming Server Module:",
		admin_logging_viewone_streamer_hover: "Las opciones de registro de Document Streaming Server Module son aplicables solo si ha habilitado la modalidad continua para archivos PDF o TIFF en la sección <b>Daeja ViewONE</b> de la herramienta administrativa.",
		admin_logging_viewone_redaction: "Registro de Permanent Redaction Server Module:",
		admin_logging_viewone_redaction_hover: "Las opciones de registro de Permanent Redaction Server Module son aplicables solo si tiene autorización para utilizar el módulo de redacción de Daeja ViewONE Professional.",

		admin_daeja_viewonepro: "Professional",
		admin_daeja_viewonepro_stream_pdf_documents: "Crear corriente de archivos PDF:",
		admin_daeja_viewonepro_stream_pdf_hover_help: "Si tiene documentos PDF de gran tamaño en el repositorio, puede habilitar el visor para crear una corriente de contenido de documentos de forma continua a fin de agilizar la visualización de dichos documentos por parte de los usuarios. Sin embargo, si la corriente no funciona en su entorno, puede inhabilitarla.",
		admin_daeja_viewonepro_stream_tiff_documents: "Crear corriente de archivos TIFF:",
		admin_daeja_viewonepro_stream_tiff_hover_help: "Si tiene documentos TIFF de gran tamaño en el repositorio, puede habilitar el visor para crear una corriente de contenido de documentos de forma continua a fin de agilizar la visualización de dichos documentos por parte de los usuarios. Sin embargo, si la corriente no funciona en su entorno, puede inhabilitarla.",
		admin_daeja_viewonepro_show_file_buttons: "Botones de archivo",
		admin_daeja_viewonepro_show_file_menus: "Menús de archivo",
		admin_daeja_viewonepro_enable_file_keys: "Teclas de acceso rápido de archivo",
		admin_daeja_viewonepro_file_keys_hover_help: "Especifique si desea que los usuarios utilicen accesos directos de teclado para trabajar con archivos, por ejemplo, para abrir o guardar un archivo. Para obtener más información sobre teclas de acceso rápido específicas, consulte la descripción del parámetro FileKeys en el manual de consulta de parámetros de IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_print_buttons: "Botones de impresión",
		admin_daeja_viewonepro_show_print_menus: "Menús de impresión",
		admin_daeja_viewonepro_enable_print_keys: "Teclas de acceso rápido de impresión",
		admin_daeja_viewonepro_print_keys_hover_help: "Especifique si desea que los usuarios utilicen accesos directos de teclado para imprimir archivos, por ejemplo, imprimir página o imprimir documento. Para obtener más información sobre teclas de acceso rápido específicas, consulte la descripción del parámetro PrintKeys en el manual de consulta de parámetros de IBM Daeja ViewONE.",
		admin_daeja_viewonepro_show_invert_buttons: "Revertir botones",
		admin_daeja_viewonepro_annotation_tooltip: "Ayuda contextual predeterminada de anotación personalizada:",
		admin_daeja_viewonepro_annotation_tooltip_hover_help: "Escriba el texto que se mostrará cuando no se especifique ninguna ayuda contextual para una anotación personalizada. El texto puede incluir elementos sustituibles. Por ejemplo, &quot;&lt;creator&gt; ha creado esta anotación en &lt;createdateonly&gt;.&quot; Para obtener más información sobre los elementos sustituibles, consulte el parámetro customAnnotationsToolTip en el manual de consulta de parámetros de IBM Daeja ViewONE.",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined: "Utilizar ayuda contextual personalizada predefinida",
		admin_daeja_viewonepro_annotation_tooltip_pre_defined_hover_help: "Utilizar ayuda contextual personalizada definida por el sistema que se muestra en el cuadro de texto de debajo",
		admin_daeja_viewonepro_help_url: "URL de la ayuda:",
		admin_daeja_viewonepro_help_url_hover_help: "Especifique el URL de la página web que contiene documentación de ayuda para el visor. El botón de ayuda de la barra de herramientas del visor y la acción del menú de ayuda abren la página web. Si no especifica un URL, no se mostrará el botón de ayuda ni la acción del menú.",
		admin_daeja_viewonepro_image_stamp_resource_context: "Contexto de recurso de indicación de imagen:",
		admin_daeja_viewonepro_image_stamp_resource_context_hover_help: "pendiente",
		admin_daeja_viewonepro_route_docs: "Direccionar contenido no soportado al navegador:",
		admin_daeja_viewonepro_route_docs_hover_help: "Los usuarios pueden ver archivos de imagen no soportados dirigiéndolos al navegador, que abre la aplicación adecuada para visualizar el archivo. Por ejemplo, para abrir un documento de Microsoft Word, el navegador utiliza el visor de Microsoft Word.",
		admin_daeja_viewonepro_scale: "Autoajustar imagen:",
		admin_daeja_viewonepro_scale_best: "Mejor ajuste",
		admin_daeja_viewonepro_scale_ftow: "Ajustar al ancho",
		admin_daeja_viewonepro_scale_ftoh: "Ajustar a altura",
		admin_daeja_viewonepro_enable_hotkeys: "Habilitar teclas de acceso rápido:",
		admin_daeja_viewonepro_show_features: "Mostrar botones y menús:",
		admin_daeja_custom_settings: "Valores adicionales:",
		admin_daeja_custom_settings_hover_help: "Puede añadir otros parámetros especificando el nombre del parámetro y el valor. Por ejemplo, puede especificar &quot;scrollbars&quot; y &quot;true&quot; si quiere que se muestren las barras de desplazamiento cuando la imagen se escala a un tamaño mayor que el área de visualización. Para obtener más información sobre los nombres y valores de los parámetros, vea el manual de consulta de parámetros de IBM Daeja ViewONE.",
		admin_daeja_virtual: "Virtual",
		admin_daeja_virtual_annotation_tooltip: "Ayuda contextual predeterminada de anotación personalizada:",
		admin_daeja_virtual_annotation_tooltip_hover_help: "Escriba el texto que se mostrará cuando no se especifique ninguna ayuda contextual para una anotación personalizada. El texto puede incluir elementos sustituibles. Por ejemplo, &quot;&lt;creator&gt; ha creado esta anotación en &lt;createdateonly&gt;.&quot; Para obtener más información sobre los elementos sustituibles, consulte el parámetro customAnnotationsToolTip en el manual de consulta de parámetros de IBM Daeja ViewONE.",
		admin_daeja_virtual_annotation_tooltip_pre_defined: "Utilizar ayuda contextual personalizada predefinida",
		admin_daeja_virtual_annotation_tooltip_pre_defined_hover_help: "Utilizar ayuda contextual personalizada definida por el sistema que se muestra en el cuadro de texto de debajo",
		admin_daeja_virtual_image_stamp_resource_context: "Contexto de recurso de indicación de imagen:",
		admin_daeja_virtual_image_stamp_resource_context_hover_help: "pendiente",
		admin_daeja_virtual_license_path:"Vía de acceso de archivos de licencia:",
		admin_daeja_virtual_license_path_hover_help:"Especifique la vía de acceso completa del directorio que contiene los archivos de licencia lic-server-virtual.v1 y lic-server.v1.",
		admin_default_license_path:"Utilizar la vía de acceso de archivos de licencia predeterminada",
		admin_license_path_specified:"Utilizar la vía de acceso de archivos de licencia personalizada",

		admin_daeja_streamer: "Servidor",
		admin_daeja_streamer_cache_root: "Directorio de memoria caché:",
		admin_daeja_streamer_cache_root_hover_help: "Especifique la vía de acceso completa del directorio en el que desea guardar los archivos colocados en memoria caché para un acceso más rápido. El directorio puede estar en cualquier sistema operativo o dispositivo, como un directorio de red, si es visible como sistema de archivos en IBM Content Navigator e IBM HTTP Server. Utilice un directorio local para mejorar el rendimiento.",
		admin_daeja_streamer_settings: "Valores adicionales:",
		admin_daeja_streamer_settings_hover_help: "Puede añadir otros parámetros especificando el nombre del parámetro y el valor. Por ejemplo, puede especificar “cookieAllowedDomainList” y una lista separada por comas de servidores de host.  Para obtener más información sobre los nombres y valores de los parámetros, vea el manual de consulta de parámetros de IBM Daeja ViewONE.",

		admin_daeja_redaction: "Permanent Redaction",
		admin_daeja_redaction_settings: "Valores:",
		admin_daeja_redaction_settings_hover_help: "Puede añadir otros parámetros especificando el nombre del parámetro y el valor. Por ejemplo, puede especificar “burnIncrementalAnnotations” y ”true”. Para obtener más información sobre los nombres y valores de los parámetros, vea el manual de consulta de parámetros de IBM Daeja ViewONE.",

		admin_daeja_setting_dialog_title_new: "Nuevo valor",
		admin_daeja_setting_dialog_title_edit: "Editar valor",
		admin_daeja_setting_dialog_hover_help: "Añada otros parámetros especificando el nombre del parámetro y el valor. Por ejemplo, puede especificar “scrollbars” y “true” si quiere que se muestren las barras de desplazamiento cuando la imagen se escala a un tamaño mayor que el área de visualización.",
		admin_daeja_setting_dialog_field_hover_help: "Para obtener más información sobre los nombres y valores de los parámetros,vea el manual de consulta de parámetros Daeja ViewONE.",

		admin_daeja_logging: "Registro de Daeja ViewONE",
		admin_daeja_logging_trace: "Habilitar registro de rastreo",
		admin_daeja_logging_trace_net: "Habilitar el registro de red",
		admin_daeja_logging_trace_annotations: "Habilitar registro de anotaciones",
		admin_daeja_logging_log_file: "Archivo de registro:",
		admin_daeja_logging_instructions: "Puede utilizar el registro para solucionar problemas de Daeja ViewONE Professional y Daeja ViewONE Virtual. Si sabe que se produce un problema para una característica específica, puede restringir el registro a dicha característica.",

		admin_v1pro_logging_trace_hover: "Utilice este valor para resolver problemas generales del visor.<br><br>La información de registro se graba en la consola Java de la máquina cliente. Puede acceder a la consola Java desde el Panel de control (Windows) o Preferencias del sistema (Mac) del sistema operativo.",
		admin_v1pro_logging_trace_net_hover: "Utilice este valor para resolver los problemas siguientes:<ul><li>Problemas de la conexión del servidor</li><li>Problemas de los tipos MIME</li><li>Problemas de longitud excesiva de los archivos</li></ul>Además, puede utilizar el registro de rastreo de la red para determinar dónde se producen los retardos cuando se utiliza Daeja ViewONE Professional.<br><br>La información de registro se graba en la consola Java de la máquina cliente. Puede acceder a la consola Java desde el Panel de control (Windows) o Preferencias del sistema (Mac) del sistema operativo.",
		admin_v1pro_logging_trace_annotations_hover: "Utilice este valor para solucionar los problemas al crear, guardar o cargar anotaciones.<br><br>La información de registro se graba en la consola Java de la máquina cliente. Puede acceder a la consola Java desde el Panel de control (Windows) o Preferencias del sistema (Mac) del sistema operativo.",

		admin_virtual_logging_trace_hover: "Utilice este valor para resolver problemas generales del visor.<br><br>De forma predeterminada, la información de registro se graba en el archivo virtual.log en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_virtual_logging_trace_net_hover: "Utilice este valor para resolver los problemas siguientes:<ul><li>Problemas de la conexión del servidor</li><li>Problemas de los tipos MIME</li><li>Problemas de longitud excesiva de los archivos</li></ul>Además, puede utilizar el registro de rastreo de la red para determinar dónde se producen los retardos cuando se utiliza Daeja ViewONE Virtual.<br><br>De forma predeterminada, la información de registro se graba en el archivo virtual.log en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_virtual_logging_trace_annotations_hover: "Utilice este valor para solucionar los problemas al crear, guardar o cargar anotaciones.<br><br>De forma predeterminada, la información de registro se graba en el archivo virtual.log en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_virtual_logging_log_file_hover: "Si ha habilita la información de registro para el visor, debe especificar el nombre y la vía de acceso completos del archivo de registro donde desea almacenar la información de registro.  Se recomienda que denomine el archivo de registro de la siguiente manera: virtual.log.",

		admin_streamer_logging_trace_hover: "Utilice este valor para resolver problemas generales de Document Streaming Server Module.<br><br>De forma predeterminada, la información de registro se graba en el archivo streamer.log, en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_streamer_logging_trace_net_hover: "Utilice este valor para resolver los problemas siguientes:<ul><li>Problemas de la conexión del servidor</li><li>Problemas de tipos MIME específicos</li><li>Problemas de longitud excesiva de los archivos</li></ul>Además, puede utilizar el registro de rastreo de la red para determinar dónde se producen los retardos cuando se utiliza Document Streaming Server Module.<br><br>De forma predeterminada, la información de registro se graba en el archivo streamer.log, en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_streamer_logging_log_file_hover: "Si ha habilita la información de registro para el Document Streaming Server Module, debe especificar el nombre y la vía de acceso completos del archivo de registro donde desea almacenar la información de registro.  Se recomienda que denomine el archivo de registro de la siguiente manera: streamer.log.",

		admin_redaction_logging_trace_hover: "Utilice este valor para resolver problemas generales de Permanent Redaction Server Module.<br><br>De forma predeterminada, la información de registro se graba en el archivo redacttofile.log, en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_redaction_logging_trace_net_hover: "Utilice este valor para resolver los problemas siguientes:<ul><li>Problemas de la conexión del servidor</li><li>Problemas de tipos MIME específicos</li><li>Problemas de longitud excesiva de los archivos</li></ul>Además, puede utilizar el registro de rastreo de la red para determinar dónde se producen los retardos cuando se utiliza Permanent Redaction Server Module.<br><br>De forma predeterminada, la información de registro se graba en el archivo redacttofile.log, en el subdirectorio config del directorio de instalación de IBM Content Navigator.",
		admin_redaction_logging_log_file_hover: "Si ha habilita la información de registro para el Permanent Redaction Server Module, debe especificar el nombre y la vía de acceso completos del archivo de registro donde desea almacenar la información de registro.  Se recomienda que denomine el archivo de registro de la siguiente manera: redacttofile.log.",

		admin_daeja: "Daeja ViewONE",
		admin_daeja_instructions: "Configure características para los visores y servicios.",

		admin_ondemand: "Content Manager OnDemand",
		admin_ondemand_heading_text: "Si utiliza el cliente web para conectarse a uno o más repositorios de Content Manager OnDemand, debe especificar la información que requiere OnDemand Web Enablement Kit para que funcione correctamente. Todos los repositorios de Content Manager OnDemand configurados para el cliente web comparten esta información.",
		admin_ondemand_language: "Idioma:",
		admin_ondemand_tempdir: "Directorio temporal de ODWEK (OnDemand Web Enablement Kit):",
		admin_ondemand_tracegrp: "Rastreo ODWEK (OnDemand Web Enablement Kit)",
		admin_ondemand_tracedir: "Directorio de rastreo:",
		admin_ondemand_tracelevel: "Nivel de rastreo:",
		admin_ondemand_tracelevel_0: "0 - Sin registro",
		admin_ondemand_tracelevel_1: "1 - Registro de mensaje de error",
		admin_ondemand_tracelevel_2: "2 - Registro de mensaje de aviso y de error",
		admin_ondemand_tracelevel_3: "3 - Registro de mensaje informativo, de aviso y de error",
		admin_ondemand_tracelevel_4: "4 - Se capturan todos los mensajes, incluido el rastreo de función",
		admin_ondemand_max_trace_filesize: "Tamaño máximo de archivo de rastreo:",
		admin_ondemand_max_trace_filesize_unlimited: "Ilimitado",
		admin_ondemand_max_trace_filesize_limited: "Limitado (recomendado)",
		admin_ondemand_max_trace_filesize_meg: "MB",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_ondemand_max_trace_range_msg: "El valor está fuera de rango. El valor debe ser un entero entre 1 y 1.000.000.",
		admin_ondemand_afp2pdf_installdir: "Directorio de instalación de AFP2PDF:",
		admin_ondemand_language_hover: "Especifique el idioma en el que OnDemand Web Enablement Kit (ODWEK) debe devolver mensajes.",
		admin_ondemand_tempdir_hover: "Especifique el directorio en el que OnDemand Web Enablement Kit almacena archivos temporales durante el proceso. Debe especificar la vía de acceso completa de un directorio existente en el servidor de aplicaciones web.",
		admin_ondemand_tracedir_hover: "Escriba el directorio en el que desea almacenar el archivo de rastreo ODWEK arswww.trace. Debe especificar la vía de acceso completa de un directorio existente en el servidor de aplicaciones web.",
		admin_ondemand_tracelevel_hover: "Especifique el nivel de información de registro que se graba en el archivo arswww.trace. <b>Registro de mensaje de error</b> captura la menor cantidad de información de registro. <b>Se capturan todos los mensajes, incluido el rastreo de función</b> captura la máxima información.<br /><br />No especifique <b>Se capturan todos los mensajes, incluido el rastreo de función</b> en un entorno de producción a menos que se así se lo indique el servicio de soporte técnico de software de IBM.",
		admin_ondemand_max_trace_filesize_hover: "Especifique si desea permitir que el archivo de rastreo ODWEK crezca hasta un tamaño ilimitado o si desea que el cliente web cree nuevos archivos de registro cuando el archivo de registro alcance un tamaño determinado. El valor predeterminado es permitir que el archivo de registro de rastreo crezca hasta que la aplicación web se haya detenido en el servidor de aplicaciones web.",
		admin_ondemand_max_trace_unlimited_hover: "Seleccione esta opción si desea que la información de rastreo de ODWEK se grabe en un único archivo de registro. Si selecciona esta opción, es posible que tenga un archivo de registro que sea demasiado grande para abrirlo con un visor de archivos estándar.",
		admin_ondemand_max_trace_limited_hover: "Seleccione esta opción si desea que toda la información de rastreo de ODWEK se escriba en archivo de registro de menor tamaño. Cuando un archivo de registro alcanza el tamaño máximo, el registro actual se renombra para incluir la fecha (arswww.trace.YYYYMMDD.HHMMSS) y se crea un nuevo archivo de registro.",
		admin_ondemand_afp2pdf_installdir_hover: "Si desea utilizar el programa de utilidad AFP2PDF Transform para convertir documentos AFP en documentos PDF para visualizarlos e imprimirlos, especifique el directorio en el que se ha instalado el programa de utilidad AFP2PDF Transform en el servidor web de aplicaciones. Por ejemplo: C:\\Archivos de programa\\IBM\\AFP2web\\afp2pdf.",

		admin_adminusers: "Administradores",
		admin_adminusers_heading_text_multi: "Debe especificar qué usuarios tienen privilegios administrativos en el cliente web. Sólo los administradores pueden iniciar la sesión en el escritorio de administración.<br /><br /><b>Importante:</b> El ID de usuario de los administradores de IBM Content Navigator debe coincidir con:<ul><li>Los ID de usuario que existen en el servidor de aplicaciones web. No es necesario que los ID de usuario sean administradores en el servidor de aplicaciones web.</li><li>Los ID de usuario que existen en el repositorio predeterminado que está configurado para cada escritorio que incluye la característica Administración.</li></ul>",
		admin_adminusers_heading_text_single: "Debe especificar qué usuarios tienen privilegios administrativos en el cliente web. Sólo los administradores pueden iniciar la sesión en el escritorio de administración.<br /><br /><b>Importante:</b> Los ID de usuario de los administradores de IBM Content Navigator deben coincidir con los ID de usuario que existen en el servidor de aplicaciones web. No es necesario que los ID de usuario sean administradores en el servidor de aplicaciones web.",
		admin_adminusers_newuser: "Administrador nuevo:",
		admin_adminusers_add: "Añadir",
		admin_adminusers_remove: "Eliminar",
		admin_adminusers_listheading: "Administradores",
		admin_adminusers_nameInvalid: "El valor no puede ser un duplicado.",

		admin_sync_server_instructions: "<b>Solo usuarios de FileNet P8</b> Si tiene previsto habilitar los servicios de sincronización para uno o más repositorios, debe configurar el cliente web para utilizar los servicios de sincronización. La configuración del servicio de sincronización se comparte en todos los repositorios de su entorno.",
		admin_settings_instructions: "Los valores que especifique en el separador Valores se aplicarán a todos los escritorios de la configuración.",
		admin_autocomplete: "Llenar automáticamente nombres de usuario:",
		admin_autocomplete_hover: "Especifique si desea que el cliente web almacene nombres de usuario en cookies del navegador para habilitar el llenado automático de nombres de usuario en el cliente web durante el inicio de sesión.<br><br>Si habilita esta opción, el nombre de usuario del último usuario que inicie la sesión en el cliente web se almacenará en las cookies del navegador y se visualizará automáticamente en la página Inicio de sesión cuando un usuario abra el cliente web.<br><br>Debería inhabilitar esta opción si se accede a esta aplicación desde estaciones de trabajo compartidas o si le preocupa el hecho de almacenar nombres de usuario en cookies del navegador.<br /><br />Esta opción no se aplica a aplicaciones móviles o personalizadas.",
		admin_autocomplete_enable: "Habilitar",
		admin_autocomplete_disable: "Inhabilitar",
		admin_cultural_collation: "Utilizar ordenación específica de entorno local:",
		admin_cultural_collation_hover: "Si habilita la ordenación específica de entorno local, dicha ordenación se realizará en el servidor del repositorio. Ello puede reducir el rendimiento del cliente web.<br><br>La inhabilitación de la ordenación específica del entorno local puede mejorar el rendimiento del cliente web.",
		admin_cultural_collation_enable: "Habilitar",
		admin_cultural_collation_disable: "Inhabilitar",
		admin_base_ui_style: "Estilo de tema",
		admin_base_ui_style_hover: "Especifique el estilo del tema predeterminado que se utilizará en el cliente web. Este estilo se utiliza únicamente en los escritorios que utilicen el tema <b>Predeterminado</b> (especificado en la pestaña <b>Apariencia</b> de la configuración de escritorio).<br/></br><b>Restricción:</b> si las configuraciones de escritorio utilizan temas personalizados, esos temas se basan en el estilo clásico, independientemente del estilo que seleccione.",
		admin_base_ui_style_classic: "Clásico",
		admin_access_control_access: "Limitar el acceso a usuarios y grupos específicos",
		admin_access_control_access_show: "Mostrar datos de control de acceso",
		admin_access_control_access_enable: "Sí",
		admin_access_control_access_disable: "No",
		admin_mobile_access: "Permitir acceso desde aplicaciones móviles",
		admin_mobile_access_hover: "De forma predeterminada, los usuarios puedan acceder al cliente web de la aplicación iOS de IBM Content Navigator.<br /><br /><b>Importante:</b> si impide a los usuarios acceder al cliente web desde la aplicación iOS, los usuarios aún podrán acceder a él desde los navegadores web de los dispositivos móviles y desde cualquier aplicación personalizada escrita utilizando las API de IBM Content Navigator y que funcionen en los dispositivos móviles.",
		admin_mobile_access_enable: "Sí",
		admin_mobile_access_disable: "No",
		admin_error: "Información del mensaje de error:",
		admin_error_custom: "Buscar contenido de soporte personalizado",
		admin_error_default: "Buscar contenido de soporte de IBM <BDO DIR='LTR'>(</BDO>valor predeterminado<BDO DIR='LTR'>)</BDO>",
		admin_error_hover: "Especifique dónde deben dirigirse los usuarios para obtener más información cuando se encuentren con un mensaje de error. Puede dirigir a los usuarios a información sobre el IBM Support Portal o puede dirigirlos a un recurso interno, como por ejemplo un centro de ayuda.",
		admin_error_URL: "Prefijo de URL:",
		admin_error_URL_hover: "Especifique el URL del recurso (como un servicio de asistencia técnica) al que desea dirigir a los usuarios cuando se encuentren con un error. Por ejemplo: http://localhost:port_number. El cliente web añade el número del mensaje al URL.",
		admin_prompt_close_without_save: "¿Desea cerrar sin guardar los cambios?",
		admin_object_expiration_time: "Intervalo de renovación de memoria caché (en minutos):",
		admin_object_expiration_time_hover: "Puede aumentar la cantidad de tiempo que se conservan los objetos de configuración, tales como escritorios, en la memoria caché para mejorar el rendimiento del cliente web. El período de tiempo predeterminado es de 10 minutos. El período de tiempo máximo es de 1440 minutos (1 día).<br /><br />Debe reiniciar la aplicación web para que los cambios entren en vigor.<br /><br />Si se ha desplegado IBM Content Navigator en un entorno en clúster de alta disponibilidad, los cambios que se realicen en los objetos de configuración no se propagarán a los nodos del clúster hasta que se renueve la memoria caché.",
		admin_temp_file_cleanup_interval: "Intervalo de exploración para la limpieza de la memoria caché del visor (en horas):",
		admin_temp_file_cleanup_interval_hover: "Planifique con qué frecuencia se explorará el directorio temporal para buscar y suprimir archivos temporales caducados. De forma predeterminada, el directorio temporal se explora cada 6 horas. Puede especificarse un periodo de 6 a 48 horas.",
		admin_temp_file_expiration_interval: "Hacer caducar la memoria caché del visor (en horas):",
		admin_temp_file_expiration_interval_hover: "Especifique la cantidad de tiempo que los archivos temporales relacionados con las actividades del visor permanecerán en la memoria caché del navegador. De forma predeterminada, estos archivos temporales caducan a las 24 horas. Puede especificarse un periodo de 12 a 48 horas.",
		admin_encryption_key_hover: "Clave utilizada para las funciones de cifrado de Navigator.",
		admin_encryption_key: "Clave de cifrado:",
		// Added since ICN 2.0.3.5
		admin_mobile_branding_title: "Creación de marcas",
		admin_mobile_branding_main_color: "Color principal:",
		admin_mobile_branding_secondary_color: "Color secundario:",
		admin_mobile_device_title: "Gestión de MaaS360",
		admin_mobile_device_enable_maas360: "Habilitar MaaS360:",
		admin_mobile_device_enable_maas360_hover_help: "La ayuda contextual Habilitar MaaS360 va aquí",
		admin_mobile_device_maas360_developer_id: "ID de desarrollador de MaaS360:",
		admin_mobile_device_maas360_license_key: "Clave de licencia de MaaS360:",
		admin_mobile_settings_title: "Valores",
		admin_mobile_email_address_hover_help: "La dirección de correo electrónico se utiliza en la aplicación móvil cuando un usuario pulsa \"Enviar informe de error.\"",
		admin_mobile_email_address: "Dirección de correo electrónico:",
		admin_invalid_email_address_message: "La dirección de correo electrónico que ha especificado no está en el formato correcto. Especifique la dirección correcta e inténtelo de nuevo.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What is not valid? Where is this shown? Is this used?
		admin_prompt_something_not_valid: "Algunos de los datos no son válidos.",
		admin_configuration_parameters: "Parámetros de configuración",
		admin_configuration_optional_features: "Características opcionales",
		admin_configuration_optional_features_p8_instructions: "Seleccione las características que desea habilitar en este repositorio.<p><b>Importante:</b> si habilita una característica que instala un complemento en el repositorio, debe estar conectado al repositorio como administrador de Content Platform Engine o Content Engine.</p>",
		admin_configuration_optional_features_cm_instructions: "Seleccione las características que desea habilitar en este repositorio.<p><b>Importante:</b> estas características modifican el modelo de datos en el repositorio. Para habilitarlas, debe estar conectado al repositorio como administrador del servidor de bibliotecas.</p>",
		admin_system_properties: "Propiedades del sistema",
		admin_system_properties_for: "Propiedades del sistema para:",
		admin_available_properties: "Propiedades disponibles",
		admin_displayed_properties: "Propiedades visualizadas",
		admin_selected_properties: "Propiedades seleccionadas",
		admin_selected_filtered_properties: "Propiedades ocultas",
		admin_available_operators: "Operadores visualizados",
		admin_selected_filtered_operators: "Operadores ocultos",
		admin_system_properties_shown: "Propiedades mostradas",
		admin_system_properties_hidden: "Propiedades ocultas",
		admin_available_menu_items: "Acciones disponibles:",
		admin_selected_menu_items: "Acciones seleccionadas:",
		admin_menu_global: "Se aplica cuando no se seleccionan elementos:",
		admin_menu_multiple_document: "Se aplica cuando se seleccionan varios elementos:",
		admin_menu_privileges: "Privilegios necesarios:",
		admin_menu_plugin: "Plug-in:",
		admin_menu_repository_types: "Tipos de repositorio:",
		admin_menu_separator: "---------------",
		admin_menu_separator_label: "Separador",
		admin_browse: "Examinar",
		admin_search: "Buscar",
		admin_collaboration: "IBM Connections",
		admin_role_based_redaction: "Redacción basada en rol",
		admin_connections_library_enabled: "IBM Connections habilitado",
		admin_office_conf: "Editar integración",
		admin_desktop_conf_label: "Configuración de escritorio",
		admin_ms_office_conf_label: "Configuración de Office",
		admin_workflows: "Flujos de trabajo",
		admin_file_types: "Tipos de archivo",
		admin_file_type_contains_label: "El tipo de archivo contiene",
		admin_name_propepty: "Nombre",
		admin_cm_name_property_default: "Utilizar nombre predeterminado",
		admin_cm_name_property_default_hover: "De forma predeterminada, se utilizada la propiedad de nombre jerárquico de ICM (ICM$NAME) como el nombre de elemento, si se ha definido la propiedad para el elemento.  Si la propiedad de nombre jerárquico de ICM (ICM$NAME) no está disponible, se utiliza la primera propiedad etiquetada con \"represents\" como el nombre de elemento.",
		admin_cm_name_property: "Especificar propiedad de nombre de elemento",
		admin_cm_name_property_hover: "Especificar qué propiedad se utiliza como el nombre de documentos y carpetas.",
		admin_name_property: "Propiedad de nombre:",
		admin_doc_name_property: "Propiedad de nombre de documento:",
		admin_doc_name_property_hover: "Especificar qué propiedad se utiliza como nombre de documento.",
		admin_folder_name_property: "Propiedad de nombre de carpeta:",
		admin_folder_name_property_hover: "Especificar qué propiedad se utiliza como nombre de carpeta.",
		admin_all_searches_label: "Número de búsquedas que mostrar:",
		admin_unlimited: "Sin límites",
		admin_limit: "Limitar a",
		admin_repository: "Repositorio:",
		admin_application_space: "Espacio de aplicación",
		admin_available_application_spaces: "Espacios de aplicación disponibles:",
		admin_selected_application_spaces: "Espacios de aplicación seleccionados:",
		admin_label: "Etiqueta",
		admin_repository_box_placeholder: "Seleccionar un repositorio de Box",
		admin_repository_placeholder: "Seleccionar un repositorio",
		admin_search_match: "Coincidencia:",
		admin_search_match_all: "Coincidir con todos los criterios de búsqueda",
		admin_search_match_any: "Coincidir con algunos de los criterios de búsqueda",
		admin_search_match_hover: "Especifique la opción que se selecciona de forma predeterminada en el menú <b>Opciones de propiedad</b>.",

		admin_repository_redactions_instructions: "Puede configurar redacciones basadas en rol para este repositorio.",
		admin_repository_redaction_policies_description: "Puede crear y gestionar políticas de redacción, que asocian las razones de redacción con los usuarios y grupos que pueden leer datos confidenciales y pueden editar anotaciones que protegen esos datos confidenciales de la vista.",
		admin_repository_redaction_roles_instruction: "Puede crear un rol de redacción para asociar los usuarios y grupos especificados con la capacidad de leer datos confidenciales o la capacidad de editar anotaciones que protegen los datos confidenciales de la vista. El rol de redacción debe asociarse con una razón de redacción en una política de redacción antes de que esos usuarios y grupos puedan leer los datos o editar las anotaciones.",
		admin_repository_redaction_reasons_instruction: "Puede configurar razones de redacción para el repositorio.",
		admin_repository_redaction_policies: "Configuración de política de redacción",
		admin_repository_redaction_roles: "Configuración de roles de redacción",
		admin_repository_redaction_reasons: "Configuración de razones de redacción",
		admin_repository_redaction_roles_type: "Tipo",
		admin_repository_redaction_roles_type_hover: "Un editor puede crear, modificar o suprimir tipos específicos de redacciones basadas en rol mientras un visor puede ver tipos específicos de datos confidenciales.",
		admin_repository_redaction_roles_type_editor: "Editor",
		admin_repository_redaction_roles_type_viewer: "Visor",
		admin_repository_redaction_roles_membership: "Pertenencia",
		admin_repository_redaction_roles_membership_hover: "Seleccione los editores que desea que tengan este rol.",
		admin_repository_redaction_roles_user_group_hover: "Busque los usuarios y grupos, o seleccione los editores, que desea que tengan este rol.",
		admin_repository_redaction_roles_description: "Puede crear y gestionar roles de redacción, que asocian usuarios y grupos con la capacidad de leer datos confidenciales y editar anotaciones que protegen esos datos confidenciales de la vista.",
		admin_repository_redaction_new: "Nuevo rol de redacción",
		admin_repository_redaction_role_avail_editors: "Editores de redacción disponibles",
		admin_repository_redaction_role_avail_users: "Usuarios disponibles",
		admin_repository_redaction_role_avail_groups: "Grupos disponibles",
		admin_repository_redaction_role_selected_editors: "Editores de redacción seleccionados",
		admin_repository_redaction_role_selected_users_groups: "Usuarios y grupos seleccionados",
		admin_repository_redaction_role_add_editor: "Nuevos editores...",
		admin_repository_redaction_role_access_type: "Acceso",
		admin_repository_redaction_role_access_type_access: "Permitir",
		admin_repository_redaction_role_access_type_no_access: "Denegar",
		admin_repository_redaction_role_users: "Usuarios",
		admin_repository_redaction_role_groups: "Grupos",
		admin_repository_redaction_role_editors: "Editores",
		admin_delete_confirmation_redaction_roles: "¿Desea suprimir el rol de redacción seleccionado?",
		admin_repository_edit_redaction_role: "Rol de redacción: <b>${0}</b>",
		admin_repository_redaction_role_add_as: "Acceso predeterminado",
		// RBA
		desktop_user_group_acl: "Administradores de escritorio",
		desktop_user_group_remove: "Eliminar",
		desktop_rba_membership: "Pertenencia:",
		desktop_rba_membership_list_label: "Nombre",
		admin_repository_redaction_policy_hover: "Proporcione una descripción que permita a los usuarios distinguir entre esta política y las otras políticas.",
		admin_repository_new_redaction_policy: "Nueva política de redacción",
		admin_repository_policy_name: "Nombre de política",
		admin_repository_reason_redactions: "Razones de redacción:",
		admin_repository_role_editors: "Editores",
		admin_repository_role_viewers: "Visores",
		admin_repository_redaction_policy_instruction: "Puede crear una política de redacción para asociar las razones de redacción seleccionadas con los editores de redacción y los visores de redacción.",
		admin_repository_redaction_reasons_hover: "Seleccione uno o varios tipos de datos confidenciales que no desea que puedan ver la mayoría de usuarios, por ejemplo, información de identificación personal, secretos comerciales o información que es confidencial o de propiedad de la empresa.",
		admin_repository_readaction_available_reasons: "Razones disponibles",
		admin_repository_readaction_selected_reasons: "Razones seleccionadas",
		admin_repository_readaction_new_reason: "Nueva razón...",
		admin_repository_redeaction_reasons: "Razones de redacción:",
		admin_repository_readaction_editor_permmission: "Editores de redacción:",
		admin_repository_redaction_editors_hover: "Seleccione los roles que pueden crear y modificar la redacción para las razones seleccionadas.",
		admin_repository_readaction_new_editor_role: "Nuevo rol de editor...",
		admin_repository_readaction_available_editors: "Roles de editor disponibles",
		admin_repository_readaction_selected_editors: "Roles de editor seleccionados",
		admin_repository_readaction_viewer_permmission: "Visores de redacción:",
		admin_repository_redaction_viewers_hover: "Seleccione los roles que pueden ver los datos confidenciales para las razones seleccionadas. La redacción no se aplica para usuarios y grupos con estos roles.",
		admin_repository_readaction_new_viewer_role: "Nuevo rol de visor...",
		admin_repository_readaction_available_viewers: "Roles de visor disponibles",
		admin_repository_readaction_selected_viewers: "Roles de visor seleccionados",
		admin_repository_reason_redactions_header: "Razones de redacción",
		admin_delete_confirmation_redaction_policy: "¿Desea suprimir la política de redacción seleccionada?",
		admin_role_type_repository: "Repositorio",
		admin_role_type_administrator: "Administrador",
		admin_role_type_template: "Plantilla",
		admin_role_type_teamspace: "Espacio de equipo",
		admin_role_type_author: "Editor",
		admin_role_type_user: "Visor",
		admin_collaboration_services_instructions: "Si tiene IBM Connections y una aplicación web de FileNet Collaboration Services, puede configurar espacios de trabajo de la comunidad y corrientes de actividades para el repositorio.",
		admin_collaboration_services: "FileNet Collaboration Services:",
		admin_collaboration_community: "Configuración de la biblioteca de la comunidad",
		admin_collaboration_community_instruction: "Puede configurar un repositorio en su dominio de IBM FileNet P8 para almacenar bibliotecas de la comunidad de IBM Connections (también denominadas espacios de equipo). Cuando los usuarios crean una biblioteca de la comunidad mediante IBM Connections, se guarda en el repositorio que designado como repositorio de la biblioteca de la comunidad.",
		admin_collaboration_community_teamspaces: "Utilice este repositorio para las bibliotecas de la comunidad:",
		admin_collaboration_community_teamspaces_hover: "Sólo puede utilizar un repositorio en su dominio de IBM dominio FileNet P8 para aguardar nuevas bibliotecas de la comunidad. Si habilita este repositorio y tiene un repositorio existente, el repositorio existente se inhabilitará. Sin embargo, cualquier biblioteca existente permanecerá en el repositorio actual.",
		admin_collaboration_connections_anonymous: "Permitir acceso anónimo a contenido público:",
		admin_collaboration_connections_anonymous_hover: "Si el servidor de IBM Connections contiene comunidades públicas o moderadas, puede configurar FileNet Collaboration Services para permitir que los usuarios puedan examinar y descargar contenido de las bibliotecas de dichas comunidades sin tener que iniciar primero una sesión.<br><br>Los usuarios que accedan a las bibliotecas de la comunidad de forma anónima no pueden crear, modificar ni suprimir contenido.<br><br><b>Importante:</b> debe designar un usuario de LDAP de IBM FileNet P8 como usuario anónimo y configurar dicho usuario con el rol <b>Anónimo</b> en WebSphere Application Server.",
		admin_collaboration_connections_url: "URL de IBM Connections:",
		admin_collaboration_connections_url_hover: "Especifique el URL del servidor de IBM Connections con el formato http://IBMConnectionsServer:port_number.  Si IBM Connections está configurado para utilizar IBM HTTP Server, puede omitir el número de puerto del URL.<br><br>Los usuarios de IBM Connections deben poder acceder al URL, ya que este es el enlace que utiliza FileNet Collaboration Services para crear enlaces a páginas de entrada de documentos en IBM Connections.",
		admin_collaboration_connections_url_http_use: "Utilizar el URL de IBM Connections",
		admin_collaboration_connections_url_https_use: "Utilizar el URL HTTPS de IBM Connections",
		admin_collaboration_connections_url_specify: "Especificar el URL",
		admin_collaboration_connections_url_https: "URL HTTPS de IBM Connections:",
		admin_collaboration_connections_url_https_hover: "Si IBM Connections está configurado para utilizar SSL, especifique el URL HTTPS del servidor de IBM Connections con el formato https://IBMConnectionsServer:port_number.  Si IBM Connections está configurado para utilizar IBM HTTP Server, puede omitir el número de puerto del URL.",

		admin_collaboration_connections_gadget_url: "URL de gadgets de IBM Connections",
		admin_collaboration_connections_retrieval_url: "URL de recuperación de IBM Connections:",
		admin_collaboration_connections_security: "Administradores de la comunidad:",
		admin_collaboration_connections_security_hover: "Especifique los usuarios y grupos que pueden administrar el contenido de las bibliotecas de la comunidad.<br><br>Los administradores globales pueden crear, modificar, suprimir y proporcionan acceso a las bibliotecas de la comunidad y al contenido de las bibliotecas de la comunidad. Cuando especifica un usuario como administrador global, se asigna al usuario privilegios ClbGlobalAdministrator en el repositorio.<br><br>Los administradores de revisión global pueden aprobar y rechazar el contenido que está bajo revisión para su publicación en una biblioteca de la comunidad. Cuando especifica un usuario como administrador de revisión global, se asigna al usuario privilegios ClbGloablReviewAdministrator en el repositorio.",

		admin_collaboration_connections_admins: "Administradores globales",
		admin_collaboration_connections_admins_review: "Administradores de revisión global",
		admin_collaboration_connections_seedlist: "Indexar el contenido de la biblioteca de la comunidad:",
		admin_collaboration_connections_seedlist_hover: "Especifique si desea que IBM Connections rastree las bibliotecas de la comunidad en este repositorio para crear un índice de búsqueda. La creación de un índice puede afectar al rendimiento del repositorio.<br><br>Si se han instalado Social Collaboration Search Indexing Extensions en este repositorio, esta opción está habilitada de forma predeterminada. Si no se han instalado Social Collaboration Search Indexing Extensions en este repositorio, el complemento se instala en el repositorio cuando se habilita esta opción.",
		admin_collaboration_activity_stream: "Configuración de sucesos de corriente de actividades",
		admin_collaboration_activity_stream_label: "Transmitir la información de sucesos a IBM Connections:",
		admin_collaboration_activity_stream_label_hover: "Especifique si desea transmitir información de sucesos, como por ejemplo la creación de documentos, extracciones, incorporaciones, comentarios, etiquetas y comparticiones, a IBM Connections.<br><br><b>Importante:</b> la transmisión de notificaciones a IBM Connections puede afectar al rendimiento del repositorio.",

		admin_collaboration_activity_stream_instruction: "Puede configurar este repositorio para transmitir información de sucesos, como por ejemplo comentarios y aprobaciones de documento, a IBM Connections. Los sucesos se muestran en la página <b>Actualizaciones recientes</b> de las comunidades de IBM Connections. ",
		admin_collaboration_activity_stream_ignored_ids: "Pasar por alto información de sucesos para determinados usuarios y grupos",
		admin_collaboration_activity_stream_ignored_ids_hover: "Puede pasar por alto los sucesos generados por determinados usuarios o grupos, como por ejemplo administradores o cuentas del sistema, para reducir el número de notificaciones que ven los usuarios. Por ejemplo, si está migrando contenido, es posible que desee especificar que se pasen por alto los sucesos generados por la cuenta que se utiliza para la migración.",
		admin_collaboration_activity_stream_userid: "Nombre de usuario de IBM Connections:",
		admin_collaboration_activity_stream_userid_hover: "Especifique la cuenta del sistema que utilizará Content Platform Engine para autenticar y enviar información de sucesos a IBM Connections. El usuario debe estar en el rol <b>trustedExternalApplication</b> en la aplicación Widget Container de IBM Connections.<br><br><b>Consejo:</b> de forma predeterminada, el administrador de IBM Connections tiene los privilegios adecuados. Puede utilizar el ID de administrador como el nombre de usuario",
		admin_collaboration_activity_stream_password: "Contraseña del usuario de IBM Connections:",

		admin_help_url: "URL de ayuda de usuario final:",
		admin_help_url_hover: "<b>Nota importante:</b> IBM Knowledge Center Customer Installed no se actualizará como IBM Content Navigator Version 3.0.0. Contacte con el servicio al cliente para más información sobre la utilización de la ayuda personalizada.<br><br>Como IBM Content Navigator Version 3.0.0, el URL para la ayuda del usuario final apunta a IBM Knowledge Center. El URL para IBM Knowledge Center es: http://www.ibm.com/support/knowledgecenter.<br><br>Si desea continuar utilizando una versión anterior de IBM Knowledge Center Customer Installed, especifique el URL de la instancia de IBM Knowledge Center Customer Installed que se desplegó con la Herramienta de configuración y despliegue de IBM Content Navigator. El URL debe ser accesible a máquinas cliente. El URL tiene el formato http://server_name:port_number/kc.<br><br>Puede obtener el nombre de servidor y el número de puerto del archivo console.log en el subdirectorio KnowledgeCenter/logs del directorio de instalación de IBM Content Navigator.",

		admin_help_default: "Utilice la ayuda predeterminada proporcionada por IBM",
		admin_custom_help: "Utilice un sistema de ayuda personalizado",
		admin_help_kc: "Utilice la ayuda personalizada de IBM Knowledge Center Customer Installed",
		admin_help_kc_hover: "<b>Nota importante:</b> IBM Knowledge Center Customer Installed no se actualizará como IBM Content Navigator Version 3.0.0. Contacte con el servicio al cliente para más información sobre la utilización de la ayuda personalizada.<br><br>Si desea continuar utilizando una versión anterior de IBM Knowledge Center Customer Installed, seleccione esta opción para continuar añadiendo contenido a la instancia de IBM Knowledge Center Customer Installed que se desplegó previamente.",
		admin_help_taxonomy: "Código de taxonomía:",
		admin_help_taxonomy_hover: "Especifique el código de taxonomía para la ayuda personalizada.<br><br>El código de taxonomía para IBM Content Navigator es SSEUEX. Si quiere mostrar la ayuda bajo un nombre de producto diferente en IBM Knowledge Center Customer Installed, debe añadir un código de taxonomía exclusivo al archivo KC_taxonomy.ditamap en el directorio KnowledgeCenter/usr/taxonomy del directorio de instalación de IBM Content Navigator.",
		admin_help_context: "Contexto de la ayuda:",
		admin_help_context_hover: "Especifique el contexto para la ayuda personalizada.<br><br>La ayuda para IBM Content Navigator está en el directorio KnowledgeCenter/usr/content/com.ibm.usingeuc.doc del directorio de instalación de IBM Content Navigator. El contexto de la ayuda predeterminada es com.ibm.usingeuc.doc. Si quiere proporcionar ayuda personalizada, añada el contenido a un nuevo subdirectorio en el directorio KnowledgeCenter/usr/content/.",
		admin_help_welcome: "Página de destino:",
		admin_help_welcome_hover: "Especifique el nombre del tema que desea utilizar como página de destino cuando los usuarios acceden a la ayuda. Debe crear un archivo de propiedades que especifica la ubicación de la página de destino y añade el archivo de propiedades al directorio de KnowledgeCenter/usr/conf del directorio de instalación de IBM Content Navigator.",

		admin_settings_mimetype_extensions_jsonfile: "Archivo JSON de extensiones de tipo MIME:",
		admin_settings_mimetype_extensions_jsonfile_hover: "Verifique el nombre del archivo JSON y su vía de acceso completa. El archivo puede ser general del sistema de archivos o un URL que apunte al archivo JSON.  <br><br>El contenido del archivo JSON es una matriz de definiciones de tipo MIME. <br><br>Una definición de tipo MIME contiene cuatro claves: \"mimeTypes\", \"extensions\", \"fileType\", \"iconName\". Las dos primeras claves, \"mimeTypes\" y \"extensions\", son obligatorias y pueden ser matrices de series separadas por\",\". Las dos últimas claves, \"fileType\" e \"iconName\", son opcionales. <br><br>Por ejemplo: <br>[{<br>\"mimeTypes\": \"application/demo,application/demotext\", <br>\"extensions\": \"demo,demotext\", <br>\"fileType\": \"file.type.text.document\",<br>\"iconName\": \"icon.mime.msword\"<br>}]",
		admin_taskmanager_title: "Configuración del Gestor de tareas",
		admin_taskmanager_service: "Servicio del gestor de tareas:",
		admin_taskmanager_service_hover: "Especifique si desea utilizar el gestor de gestor de tareas para crear y ejecutar tareas asíncronas. <br><br>Si cambia este valor, debe reiniciar la aplicación web de IBM Content Navigator para que se apliquen los cambios.",
		admin_taskmanager_url: "URL del servicio del gestor de tareas:",
		admin_taskmanager_url_hover: "Especifique el URL mediante el cual las otras aplicaciones pueden comunicarse con el gestor del gestor de tareas. El URL tiene el formato http://nombre_servidor:número_puerto/taskManagerWeb/api/v1.",
		admin_taskmanager_logdirectory: "Directorio de registro del gestor de tareas:",
		admin_taskmanager_logdirectory_hover: "De forma predeterminada, los archivos de registro del servicio del gestor de tareas se graban en el mismo directorio que los archivos de registro del servidor de aplicaciones web. <br><br>Si desea que la información de registro se grabe en un directorio distinto del servidor de IBM Content Navigator, especifique la vía de acceso completa del directorio donde desee almacenar los archivos de registro generados por el componente del gestor de tareas. <br><br>Si cambia este valor, debe reiniciar la aplicación web de IBM Content Navigator para que se apliquen los cambios.",
		admin_taskmanager_heartBeatMonitor: "Supervisión de pulsación de clúster",
		admin_taskmanager_heartBeatMonitor_hover: "Solo entornos de clúster con alta disponibilidad. Si habilita esta opción, el servicio del gestor de tareas redirecciona las tareas de los nodos que están inactivos en ese momento a los nodos que se están ejecutando. <br><br>Si cambia este valor, debe reiniciar la aplicación web de IBM Content Navigator para que se apliquen los cambios.",

		admin_syncserver_title: "Configuración del servidor de sincronización",
		admin_syncserver_enable: "Servicios de sincronización:",
		admin_syncserver_enable_hover: "Especifique si desea que los usuarios con acceso a este escritorio puedan sincronizar sus elementos entre sus estaciones de trabajo y dispositivos móviles.<br><br><b>Importante:</b> para utilizar esta característica también debe completar las siguientes tareas:<ul><li>Especifique el <b>URL público de los servicios de sincronización</b> en la sección <b>Servicios de sincronización</b> de la herramienta de administración.</li><li>Añada un repositorio para el cual se habiliten los servicios de sincronización en este escritorio.</li></ul>Si inhabilita esta opción, pero añade un repositorio para el cual se habilitan los servicios de sincronización en este escritorio, el valor de este repositorio se ignora.",
		admin_mobileqr_enable: "Mostrar código QR de IBM Navigator en la página de inicio de sesión:",
		admin_mobileqr_enable_hover: "Habilite esta opción si desea visualizar el código QR de la aplicación móvil de IBM Navigator en la página de inicio de sesión del cliente web.<br><br>Cuando un usuario escanee el código QR, se le direccionará a la tienda de aplicaciones que corresponda a su dispositivo desde donde podrá descargar la aplicación móvil de IBM Navigator.",

		admin_streamlineservice_enable: "Servicio de edición:",
		admin_streamlineservice_enable_hover: "Solo usuarios de FileNet P8. Habilite esta opción si desea que los usuarios de escritorio puedan añadir y editar fácilmente documentos de aplicaciones nativas en sus estaciones de trabajo. <br><br>Para utilizar este parámetro, también debe realizar las siguientes acciones: <ul><li>Habilitar el servicio de edición en uno o varios repositorios asociados con el escritorio</li><li>Instalar el cliente de edición de IBM Content Navigator en las estaciones de trabajo de los usuarios</li></ul>",

		admin_repository_general_instructions: "Debe conectarse con el repositorio antes de configurar parámetros, propiedades del sistema, carpetas, etc.",
		admin_repository_system_instructions: "Especifique qué propiedades del sistema deben visualizarse para los documentos y carpetas en este repositorio.",

		admin_desktop_general_create_instructions: "Un escritorio determina lo que el usuario puede ver y hacer cuando inicia sesión en el cliente web. Después de crear un escritorio, puede enviar el URL del escritorio a usuarios de forma que puedan acceder a dicho escritorio.",
		admin_desktop_admin_instructions: "Se suministra un Escritorio de administración con el cliente web para permitir que los usuarios administrativos configuren el cliente web. Este escritorio puede acceder a todos los repositorios que están configurados para el cliente web.",
		admin_desktop_repositories_instructions: "Especifique a qué repositorios desea que los usuarios tengan acceso desde este escritorio. Debe configurar los repositorios antes de poder añadirlos al escritorio.<br><br><b>Consejo:</b> puede limitar los repositorios que están disponibles para cada característica al configurar el diseño de escritorio.",
		admin_desktop_menus_instructions: "Especifique a qué menús desea que los usuarios tengan acceso desde este escritorio. Los menús especifican qué acciones están disponibles en función de lo que se haya seleccionado en la interfaz.<br><br><b>Sugerencia:</b> puede personalizar el contenido del menú en la sección <b>Menús</b> de la herramienta de administración o puede crear nuevos tipos de menú creando plug-ins.",

		admin_desktop_no_repositories: "No hay ningún repositorio configurado.",

		admin_desktop_id_hover: "El ID del escritorio se incluye en el URL del cliente web y especifica qué escritorio se abre cuando un usuario inicia sesión en el cliente web. El ID debe ser exclusivo y no se puede cambiar después de guardar el escritorio.<br><br>El ID solo puede contener caracteres alfanuméricos y distingue entre mayúsculas y minúsculas.",
		admin_desktop_id_disabled_hover: "El ID de escritorio no se puede cambiar. Si desea utilizar un ID diferente, debe crear un escritorio nuevo.",
		admin_desktop_name_hover: "El nombre de escritorio no puede contener los siguientes caracteres: *\\/: ? \" < > |",
		admin_desktop_default_hover: "La configuración sólo puede contener un escritorio predeterminado.",

		admin_repository_id_disabled_hover: "El ID de repositorio no se puede cambiar. Si desea utilizar un ID diferente, debe crear una nueva conexión de repositorio.",
		admin_printService_enable: "Imprimir utilizando el servicio de impresión de IBM Daeja ViewONE:",
		admin_printService_enable_hover: "Si decide habilitar el servicio de impresión de IBM Daeja ViewONE, los documentos se convertirán a formato PDF y la impresión se podrá completar utilizando cualquier explorador web.<br><br>Si decide inhabilitar el servicio de impresión de IBM Daeja ViewONE, solo podrá imprimir documentos en exploradores web que soporten applets de Java.  Algunos exploradores web no soportan applets de Java y, por lo tanto, no soportan la impresión desde applet.<br><br>Consulte la documentación para saber los navegadores soportados.",
		//file tracking configuration
		admin_file_tracking_doc_directory_home_path: "Directorio de inicio del usuario",
		admin_file_tracking_doc_directory_my_documents: "Directorio de documentos del usuario",
		admin_file_tracking_doc_directory_qp: "Vía de acceso calificada",
		admin_file_tracking_section_tile: "Configuración de seguimiento de archivos",
		admin_file_tracking_home_path: "Vía de acceso de inicio",
		admin_file_tracking_my_documents: "Mis documentos",
		admin_file_tracking_exact_path: "Vía de acceso completa:",
		admin_file_tracking_qp: "Vía de acceso calificada",
		admin_file_tracking_ev: "Variables de entorno",
		admin_file_tracking_ev_us: "Variable de entorno personalizada ",
		admin_file_tracking_del_local_copy: "Suprimir copia local:",
		admin_file_tracking_yes: "Sí",
		admin_file_tracking_no: "No",
		admin_file_tracking_del_local_copy_rt_state_editable: "Permitir que los usuarios sustituyan este valor",
		admin_file_tracking_del_local_copy_rt_state1: "Sí",
		admin_file_tracking_del_local_copy_rt_state2: "No",
		admin_file_Tracking_label: "Seguimiento de archivos:",
		admin_file_Tracking_disable: "Inhabilitar",
		admin_file_Tracking_enable: "Habilitar",
		admin_file_tracking_label_hover_help: "La función de seguimiento de archivos utiliza un applet para extraer y descargar documentos en un directorio específico de las máquinas de los usuarios. El applet también permite que IBM Content Navigator busque documentos en máquinas de usuarios cuando estos incorporan documentos.",
		admin_file_tracking_doc_directory: "Ubicación de almacenamiento:",
		admin_file_tracking_open_file: "Abra archivo automáticamente",
		admin_file_Tracking_append_qualified_path: "Agregar directorio",
		admin_file_Tracking_append_qualified_path_hover_help: "Puede agregar un directorio al final de la variable de entorno si desea que los documentos se guarden en un subdirectorio específico. <br/><br/>Por ejemplo, puede especificar que los documentos se descargan en un directorio <i>EnterpriseDocuments</i> del directorio de inicio del usuario.",
		admin_file_Tracking_append_ev: "Agregar variable de entorno",
		admin_file_Tracking_append_ev_hover_help: "Puede agregar una variable de entorno si desea que los documentos se guarden en un directorio especificado de forma dinámica, como por ejemplo un directorio de usuario.<br/><br/>Por ejemplo, puede especificar que los documentos se almacenan en un subdirectorio <i>user_name</i> de un directorio de red compartido. ",
		admin_file_tracking_doc_directory_hover_help: "Especifique dónde se deben almacenar los documentos cuando se hayan extraído y descargado.<br/><br/> <b>Consejo</b>: si desea almacenar documentos en un directorio de inicio del usuario o en el directorio de documentos predeterminado, seleccione <b>Variable de entorno</b>, que incluye variables predefinidas que apuntan a esas ubicaciones.",
		admin_file_tracking_qualified_path_hover_help: "Utilice la estructura de directorios adecuada para su sistema operativo Windows o Mac para especificar el directorio o directorio de red en el que desea almacenar los documentos. <ul><li>Para Windows, incluya una letra de unidad en la vía de acceso, como por ejemplo C:\\Enterprise Documents.</li><li>Para en un directorio de red compartido, especifique la vía de acceso con el formato \\\\nombre_servidor\directorio</li></ul><br/><b>Importante:</b> Para utilizar esta opción, la estructura de directorios que especifique se debe poder crear en todas las estaciones de trabajo del cliente en su entorno.",
		admin_file_tracking_environment_variable_path_hover_help: "Utilice las variables de entorno adecuadas para su sistema operativo Windows o Mac para especificar el directorio o directorio de red en el que desea almacenar los documentos. <br/><br/>La opción <b>Directorio de inicio del usuario</b> almacena los documentos en el directorio siguiente:<br/><ul><li>Windows: C:\\Users\\User_name</li><li>Mac: /Users/User_name</li></ul><br/>La opción <b>Directorio de documentos del usuario</b> almacena los documentos en el directorio siguiente:<br/><ul><li>Windows: C:\\Users\\User_name\\Documents</li><li>Mac: /Users/User_name/Documents</li></ul>",
		admin_file_tracking_delete_local_copy_hover_help: "Especifique si la copia local de un documento se suprime cuando los usuarios añaden o incorporan documentos en el repositorio.<br/><br/>La supresión de la copia local le permite:<br/><ul><li>Imponer la conformidad con políticas de IT</li><li>Asegurarse de que los usuarios trabajan con las versiones más recientes de los documentos</li></ul><br/><b>Restricción:</b> Este valor no se utiliza cuando los usuarios añaden documentos arrastrándolos y soltándolos.<br/><br/>Para IBM Content Navigator for Microsoft Office, debe seleccionar <b>Suprimir los archivos locales cuando los usuarios añadan o incorporen un documento o cancelen una extracción</b> en la sección <b>Configuración de Office</b> del escritorio.",
		admin_file_tracking_open_file_hover_help: "Este valor sustituye cualquier preferencia de manejo de documento configurada en los navegadores web del usuario. </br></br><b>Restricción:</b> Este valor no lo utiliza IBM Content Navigator for Microsoft Office.",
		admin_file_tracking_over_write_file: "Sobrescribir copia local:",
		admin_file_tracking_over_write_file_hover_help: "Especifique si desea sobrescribir la copia local de un documento cuando los usuarios extraen documentos del repositorio. <br/><br/>El hecho de sobrescribir la copia local le permite:<br/><ul><li>Asegurarse de que los usuarios trabajan con las versiones más recientes de los documentos</li><li>Impedir que los usuarios vean una solicitud cuando existe una copia local</li></ul> </br></br><b>Restricción:</b> este valor no lo utiliza IBM Content Navigator for Microsoft Office si selecciona <b>Permitir que los usuarios sustituyan este valor</b>.",
		admin_file_tracking_over_write_file_state_editable: "Permitir que los usuarios sustituyan este valor",
		admin_file_tracking_inline_help: "El seguimiento de archivos agiliza el proceso de extracción de documentos del repositorio. También le permite gestionar la forma en que se almacenan los documentos en las máquinas de usuario. <br/><br/>Además, el seguimiento de archivos permite realizar un seguimiento en varios componentes de IBM Content Navigator, como por ejemplo el cliente web e IBM Content Navigator for Microsoft Office.",

		// Box repository admin...
		admin_box_instructions: "Debe habilitar la autenticación estándar o de servidor antes de conectarse al repositorio.",
		admin_box_use_oauth: "Tipo de autenticación:",
		admin_box_use_oauth_hover: "Selección la autenticación estándar o de servidor en un entorno de producción cuando proporcione acceso a documentos de Box desde IBM Content Navigator. Especifique los valores client_id y OAuth2 client_secret asociados con este despliegue de IBM Content Navigator. Puede obtener estos valores en BOX tras crear la aplicación Box para su servidor IBM Content Navigator.<br/><br/>Seleccione la autenticación de desarrollador en un entorno de desarrollo. Los desarrolladores pueden iniciar sesión en Box utilizando su cuenta de desarrollador y generar un elemento de desarrollador válido durante 60 minutos. Los elementos de desarrollador permiten a los desarrolladores iniciar sesión en Box utilizando el mismo como contraseña para cualquier ID de usuario.",
		admin_box_oauth_client_id: "client_id:",
		admin_box_oauth_client_secret: "client_secret:",
		admin_box_oauth_subdomain: "Subdominio de cuenta empresarial de Box:",
		admin_box_share: "ID de conexión del gestor de tareas:",
		admin_box_share_hover: "Para la copia de Box o compartición de Box, el administrador de tareas utiliza un ID de usuario administrador y contraseña para ejecutar las tareas en segundo plano que modifican en repositorio.<br/><br/>Haga clic en Definir e inicie sesión en Box utilizando una cuenta de administrador de Box válida.<br/><br/>Si configura un escritorio seleccionando este repositorio de Box como repositorio para los archivos compartidos, debe especificar el usuario administrador de Box con almacenamiento ilimitado en Box.",

		//File Tracking Runtime
		file_tracking_runtime_open_file_hover_help: "Abra archivo automáticamente",
		file_tracking_runtime_overwrite_hover_help: "Si no selecciona esta opción y tiene un documento en el sistema de archivos local con el mismo nombre, el documento se extraerá pero no se descargará, a menos que realice una de las acciones siguientes:<br/><ul><li> Descargue el documento en un subdirectorio del directorio predeterminado. Si selecciona un subdirectorio, la aplicación web puede realizar un seguimiento de la ubicación del documento.</li><li>Cambiar el nombre del documento que está descargando. Cambiar el nombre de un documento evita un conflicto de nombres de archivo.</li></ul>",
		open_file: "Abra archivo automáticamente",
		over_write_file: "Sobrescribir copia local",
		checkout_and_download_file: "Extraer y descargar documentos",
		download_to_local_directory: "Descargar en:",
		checkout_and_download_button_title: "Extraer y descargar",
		checkout_without_java_confirmation_dialog: "La característica de seguimiento de archivos no puede descargar y hacer el seguimiento del archivo.",
		browse_for_directory: "Examinar",
		selected_documents: "Documentos seleccionados",

		checkout_without_java_confirmation_text: "Este problema se puede producir por las razones siguientes:<br/><ul><li>El entorno Java Runtime Environment (JRE) no está instalado en la estación de trabajo.</li><li>El plug-in Java no está habilitado en su navegador web.</li><li>Su navegador web no da soporte a Java.</li></ul><br/><br/>Para resolver este problema, lleve a cabo la acción apropiada:<br/><br/><ul><li>Si desea continuar con la descarga del archivo sin el seguimiento de archivos habilitado, pulse Aceptar.</li><li>Si desea descargar el archivo con el seguimiento de archivos habilitado, cancele la descarga y asegúrese de que JRE esté instalado en la estación de trabajo y de que el plug-in Java esté habilitado en su navegador web.</li></ul>",

		//ERROR_OPEN_FAILED
		runtime_file_tracking_open_error: "El documento se ha extraído y descargado, pero no se puede abrir.",
		runtime_file_tracking_open_error_explanation: "El sistema operativo que está instalado en la estación de trabajo no da soporte a archivos de este tipo.",
		runtime_file_tracking_open_error_userResponse: "Para resolver el problema, realice una de las acciones siguientes:<br/><br/><ul><li>Si necesita trabajar con el documento, abra el cliente web desde una estación de trabajo que tenga otro sistema operativo.</li><li>Si sólo necesita ver el documento, pulse con el botón derecho del ratón sobre el documento en el cliente web y pulse Abrir.</li></ul>",
		runtime_file_tracking_open_error_number: 2092,

		//ERROR_SAVE_FILE_FAILED
		runtime_file_tracking_save_file_error: "El documento se ha extraído pero no se ha descargado.",
		runtime_file_tracking_save_file_error_explanation: "Existe un documento con el mismo nombre en el sistema de archivos local, pero no se ha sobrescrito. ",
		runtime_file_tracking_save_file_error_userResponse: "Si desea descargar el archivo del repositorio, debe sobrescribir la copia local del documento cuando descargue el documento desde el repositorio.",
		runtime_file_tracking_save_file_error_number: 2093,

		//ERROR_SAVE_FILE_FAILED_AFTER_CHECKOUT
		runtime_file_tracking_save_file_after_checkout_error: "El documento se ha extraído, pero no se puede descargar o abrir.",
		runtime_file_tracking_save_file_after_checkout_error_explanation: "Existe un documento con el mismo nombre en el sistema de archivos local. Sin embargo, el archivo no se ha sobrescrito, lo que impide que el documento del repositorio se descargue y se abra.",
		runtime_file_tracking_save_file_after_checkout_error_userResponse: "Si desea descargar el archivo del repositorio, debe sobrescribir la copia local del documento cuando descargue el documento desde el repositorio.",
		runtime_file_tracking_save_file_after_checkout_error_number: 2094,

		//ERROR_ENVIRONMENT_VARIABLE_PATH_NOT_FOUND
		runtime_file_tracking_ev_file_path_not_found_error: "No se puede descargar el documento.",
		runtime_file_tracking_ev_file_path_not_found_error_explanation: "La variable de entorno ${0}, necesaria para realizar el seguimiento del archivo, no está definida en esta máquina cliente.",
		runtime_file_tracking_ev_file_path_not_found_error_userResponse: "Para resolver el problema:<br/><br/><ul><li>Añada la variable de entorno ${0} a las variables de entorno del sistema operativo.</li><li>Finalice la sesión del cliente web y cierre el navegador web. Luego vuelva a iniciar la sesión.</li></ul>",
		runtime_file_tracking_ev_file_path_not_found_error_number: 2095,

		//ERROR_EXACT_PATH_NOT_FOUND
		runtime_file_tracking_exact_file_path_not_found_error: "El applet de seguimiento de archivos no puede descargar y hacer el seguimiento del documento.  ",
		runtime_file_tracking_exact_file_path_not_found_error_explanation: "El directorio ${0}, necesario para realizar el seguimiento del archivo, no está definido y no se puede crear.",
		runtime_file_tracking_exact_file_path_not_found_error_userResponse: "Para resolver este problema, lleve a cabo la acción apropiada:<br/><br/><ul><li>Pulse Examinar y seleccione otro directorio de la máquina cliente. Si selecciona esta opción, no se realizará el seguimiento del archivo.</li><li>Póngase en contacto con el administrador del sistema y solicítele que especifique otro directorio para realizar el seguimiento de archivos. Por ejemplo, esto podría resultar necesario si el directorio especificado es para un sistema operativo Windows pero esté trabajando con Mac OS. </li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_adminResponse: "Si dispositivos con diferentes sistemas operativos acceden a este escritorio, puede reducir la probabilidad de que se produzcan problemas con una de las acciones siguientes:<br/><br/><ul><li>Utilice variables de entorno para especificar la ubicación del almacenamiento en las máquinas cliente.</li><li>Crear escritorios diferentes para los usuarios de cada tipo de dispositivo. Por ejemplo, cree un escritorio para los usuarios con un sistema operativo Windows y otro para los usuarios con Mac OS.</li></ul>",
		runtime_file_tracking_exact_file_path_not_found_error_number: 2096,

		//file tracker generic error
		runtime_file_tracking_generic_error: "No se puede procesar la solicitud.",
		runtime_file_tracking_generic_error_explanation: "Se ha producido un error en el applet de seguimiento.",
		runtime_file_tracking_generic_error_userResponse: "Póngase en contacto con el administrador del sistema para obtener ayuda.",
		runtime_file_tracking_generic_error_adminResponse: "Abra la consola Java e intente enviar de nuevo la solicitud. Los detalles del error se muestran en la consola Java.<br/><br/>Puede acceder a la consola Java desde el Panel de control (Windows) o Preferencias del sistema (Macintosh) del sistema operativo.",
		runtime_file_tracking_generic_error_number: 2097,

		runtime_file_tracking_cannot_delete_file_error: "No se puede procesar la solicitud.",
		runtime_file_tracking_cannot_delete_file_error_explanation: "Los archivos siguientes se han añadido al repositorio pero no se han suprimido del sistema de archivos local: ${0}. Esto normalmente se produce cuando los archivos están abiertos o los está utilizando otra aplicación. Si es necesario, puede suprimir manualmente los archivos.",
		runtime_file_tracking_cannot_delete_file_error_number: 2098,

		runtime_file_tracking_ioexception_error: "No se puede descargar el documento.",
		runtime_file_tracking_ioexception_error_explanation: "No se puede descargar el documento.",
		runtime_file_tracking_ioexception_userResponse: "Es posible que no disponga de los permisos adecuados para escribir en el siguiente directorio: ${0}.",
		runtime_file_tracking_ioexception_adminResponse: "Asegúrese de tener permisos de escritura sobre el directorio especificado. Si no tiene permisos de escritura sobre el directorio especificado, póngase en contacto con el administrador del sistema.",
		runtime_file_tracking_ioexception_number: 2099,

		runtime_file_tracking_safari_safe_mode_error: "No se puede procesar la solicitud.",
		runtime_file_tracking_safari_safe_mode_error_explanation: "Este error se puede producir por los motivos siguientes:<br/><br/><ul><li>Se está utilizando Safari en Mac OS y Java se está ejecutando en modo a prueba de fallos.</li><li>No cuenta con permisos de lectura y escritura para el directorio que está especificado en la configuración del rastreo de archivos correspondiente a su escritorio.</li></ul>",
		runtime_file_tracking_safari_safe_mode_error_userResponse: "Puede continuar utilizando IBM Content Navigator sin el rastreo de archivos o puede completar los pasos siguientes para resolver el problema:<br/><br/><ol><li>Habilite el modo no seguro de Java en Safari.</li><li>Si se le pregunta si confía en el sitio web de IBM Content Navigator, pulse <b>Confiar</b> para cargar la página y luego habilite el modo no seguro de Java en Safari.</li></ol><br/><br/>Si Safari está configurado de forma correcta, complete los pasos siguientes para resolver el problema:<br/><br/><ol><li>Asegúrese de que cuenta con permisos de lectura y escritura para el directorio que está especificado en la configuración del rastreo de archivos correspondiente a su escritorio.</li><li>Si no cuenta con permisos de lectura y escritura para el directorio, edite los permisos en el directorio.</li><li>Si no puede editar sus permisos en el directorio, su administrador debe modificar el directorio que esté configurado para rastreo de archivos o brindarle acceso a un escritorio que tenga configurado un directorio de rastreo de archivos distinto.</li></ol>",
		runtime_file_tracking_safari_safe_mode_error_number: 2100,

		runtime_file_tracking_java__notfound_error: "No se puede procesar la solicitud.",
		runtime_file_tracking_java__notfound_error_explanation: "Este error o problema generalmente se produce en las situaciones siguientes:<br/><br/><ul><li>Java Runtime Environment (JRE) no está presente o habilitado en su estación de trabajo.</li><li>La versión de la JRE en la estación de trabajo no es compatible con la versión de IBM Content Navigator.</li></ul>",
		runtime_file_tracking_java__notfound_error_userResponse: "Puede continuar utilizando IBM Content Navigator sin el rastreo de archivos o puede completar los pasos siguientes para resolver el problema relacionado con JRE:<br/><br/><ol><li>Compruebe que JRE esté instalado en su estación de trabajo.</li><li>Asegúrese de que la versión de JRE de su estación de trabajo sea compatible con IBM Content Navigator. Se incluye una lista de versiones soportadas en el documento <i>Requisitos previos de hardware y software para IBM Content Navigator</i> en sitio de IBM Software Support.</li><li>Compruebe que JRE esté habilitado en su estación de trabajo.</li></ol>",
		runtime_file_tracking_java__notfound_error_number: 2101,

		runtime_file_tracking_security_error: "No se puede procesar la solicitud.",
		runtime_file_tracking_security_error_explanation: "No cuenta con permisos de lectura y escritura para el directorio que está especificado en la configuración del rastreo de archivos correspondiente a su escritorio.",
		runtime_file_tracking_security_error_userResponse: "Puede continuar utilizando IBM Content Navigator sin el rastreo de archivos o puede colaborar con el administrador del sistema para completar los pasos siguientes:<ol><li>Asegúrese de que cuenta con permisos de lectura y escritura para el directorio que está especificado en la configuración del rastreo de archivos correspondiente a su escritorio. </li><li>Si no cuenta con permisos de lectura y escritura para el directorio, edite los permisos en el directorio.</li><li>Si no puede editar sus permisos en el directorio, su administrador debe modificar el directorio que esté configurado para rastreo de archivos o brindarle acceso a un escritorio que tenga configurado un directorio de rastreo de archivos distinto.</li></ol>",
		runtime_file_tracking_security_error_number: 2102,

		file_tracking_successfully_downloaded_document: "Se han descargado los siguientes documentos: ${0}.",

		admin_file_tracking_inline_help: "El seguimiento de archivos agiliza el proceso de adición, extracción e incorporación de documentos en el repositorio. También le permite gestionar la forma en que se almacenan los documentos en las máquinas de los usuarios.<br/><br/>Además, el seguimiento de archivos permite realizar un seguimiento en varios componentes de IBM Content Navigator, como por ejemplo el cliente web e IBM Content Navigator for Microsoft Office.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_id_invalid_starts_with_default: "El ID de menú no puede empezar con\"Default\".  \"Default\" es un prefijo reservado para los ID de menú.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why is the information about the ID being case sensitive important. Is the ID ever entered? Can that piece of information be removed from the message?
		admin_id_invalid: "El ID solo puede contener caracteres alfanuméricos y distingue entre mayúsculas y minúsculas.",
		admin_repository_id_hover: "El ID de repositorio se incluye en los URL de clientes web, favoritos y enlaces de correo electrónico para especificar en qué repositorio iniciar sesión. El ID debe ser exclusivo y no se puede cambiar después de guardar el repositorio.<br><br>El ID solo puede contener caracteres alfanuméricos y distingue entre mayúsculas y minúsculas.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_name_invalid: "El nombre del tema no puede contener ninguno de los siguientes caracteres: *\\/: ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_id_invalid: "El ID de escritorio no puede contener espacios ni ninguno de los siguientes caracteres: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_desktop_name_invalid: "El nombre de escritorio no puede contener ninguno de los siguientes caracteres: * \\ / : ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		admin_display_name_invalid: "El nombre de visualización no puede contener ninguno de los siguientes caracteres: * \\ / : ? \" < > |",
		admin_repository_name_hover: "Especifique el nombre de repositorio que los usuarios deben visualizar en el cliente web.<br><br>El nombre no puede contener los siguientes caracteres: *\\/: ? \" < > |",
		admin_server_od_name_hover: "Especifique el nombre de host o la dirección IP del servidor de Content Manager OnDemand con el que desea establecer la conexión, por ejemplo, server.id.com.",
		admin_server_p8_name_hover: "Especifique el URL del servidor de Content Engine o de Content Platform Engine. El URL distingue entre mayúsculas y minúsculas y tiene el siguiente formato:<br><br><ul><li>En WebSphere Application Server, iiop://nombre_host:número_puerto/FileNet/Engine. En despliegues base, el número de puerto predeterminado es 2809.</li><li>En WebLogic Server, t3://nombre_host:número_puerto/FileNet/Engine. El número de puerto predeterminado es 7001.</li></ul><br><br>Para configuraciones de alta disponibilidad de Content Engine y Content Platform Engine, utilice el URL de transporte de EJB de alta disponibilidad sin el prefijo cemp:. ",
		admin_server_p8_protocol_hover: "Especifique el protocolo que desea utilizar para comunicarse con Content Engine.",
		admin_server_cm_name_hover: "Especifique el nombre de catálogo local de la base de datos de Content Manager o el nombre de conexión del servidor de bibliotecas. Este nombre es el valor especificado en la variable ICMSERVER.",
		admin_repository_cmis_hover: "Especifique el ID del repositorio al que quiere conectarse.  El ID de todos los repositorios de su entorno CMIS se indica en el documento de servicio de enlace de AtomPub.  <br/><br/><b>Sugerencia:</b> también puede especificar un asterisco (*) para conectar con el primer o único repositorio que esté definido en el documento de servicio de enlace de Atompub.",
		admin_url_cmis_hover: "El formato del URL varía según el proveedor de servicios. Consulte la documentación de CMIS o póngase en contacto con el administrador de servidor CMIS para conocer el URL.",
		admin_repcfg_cmis_status_columns_hover: "Especifique los estados de los elementos para los que desea ver iconos. Los iconos de estado se visualizan al lado de documentos en la lista de contenidos.",
		admin_port_hover: "Especifique el número de puerto TCP/IP al que escucha el servidor Content Manager OnDemand. El valor predeterminado es 1445.",
		admin_unified_searches_hover: "Especifique si desea que los usuarios puedan guardar las búsquedas entre repositorios en este repositorio.<br/><br/>Si no habilita esta opción, los usuarios podrán seguir creando búsquedas entre repositorios que se ejecuten en este repositorio. Puede impedir que los usuarios creen búsquedas entre repositorios en el nivel de escritorio.<br/><br/>Si habilita las búsquedas entre repositorios, IBM Content Navigator crea en el repositorio el modelo de datos de búsqueda entre repositorios.<br/><br/>Para IBM FileNet Content Manager, debe conectarse al repositorio como administrador de Content Engine para poder habilitar esta opción.",
		admin_unified_searches_cm_hover: "Especifique si desea que los usuarios puedan guardar las búsquedas entre repositorios en este repositorio.<br/><br/>Si no habilita esta opción, los usuarios podrán seguir creando búsquedas entre repositorios que se ejecuten en este repositorio. Puede impedir que los usuarios creen búsquedas entre repositorios en el nivel de escritorio.<br/><br/>Si habilita las búsquedas entre repositorios, IBM Content Navigator crea en el repositorio el modelo de datos de búsqueda entre repositorios.",
		admin_max_results_hover: "Especifique si desea limitar el número de resultados devueltos por una búsqueda. Si no limita el número de resultados de búsqueda, es posible que experimente problemas de rendimiento si una búsqueda devuelve un gran número de resultados.",
		admin_timeout_hover: "Especifique cuánto tiempo, en segundos, puede ejecutarse una búsqueda en el repositorio. Si la búsqueda no se completa en el tiempo especificado, el cliente web cancela la solicitud. El tiempo de espera máximo recomendado es de 60 segundos.",
		admin_object_store_hover: "Especifique el almacén de objetos al que desea conectar con el servidor de Content Engine. Puede obtener el nombre simbólico de la consola administrativa de Content Platform Engine.",
		admin_object_store_display_name_hover: "El nombre de visualización del almacén de objetos resulta necesario si se desea utilizar flujos de trabajo de IBM FileNet P8. Puede obtener el nombre de visualización del almacén de objetos de la consola administrativa de Content Platform Engine.",
		admin_all_searches_hover: "Especifique si desea limitar el número de búsquedas que se muestran bajo <b>Todas las búsquedas</b> cuando los usuarios están buscando en el repositorio. Si no limita el número de búsquedas, es posible que experimente problemas de rendimiento si el repositorio incluye un gran número de búsquedas guardadas.",

		admin_text_desktop: "Escritorio",
		admin_text_repository: "Repositorio",
		admin_text_plugin: "Plug-in",
		admin_text_theme: "Tema",
		admin_text_menu: "Menú",
		admin_text_reason_code: "Razón de redacción",
		admin_text_redactions: "Redacciones",
		admin_text_viewer_mapping: "Visor de correlaciones",
		admin_text_mobile_feature: "Característica móvil",
		admin_test_interface_text: "Texto de interfaz",
		admin_text_interface_text_locale: "Texto de interfaz localizado",
		admin_text_icon_status: "Icono de estado",
		admin_text_icon: "Icono",
		admin_text_file_type: "Tipo de archivo",
		admin_text_viewer: "Visor",
		admin_text_desktop_access: "Acceso a escritorio",
		admin_text_mapped_properties_for_office: "Propiedades correlacionadas para Microsoft Office",
		admin_text_desktop_features: "Características de escritorio",
		admin_text_unknown: "Desconocido",
		admin_folder_instruction: "Especifique las propiedades que deben visualizarse para documentos y carpetas en la lista de contenidos cuando los usuarios estén navegando. También puede especificar el orden de visualización de las propiedades.",
		admin_search_instruction: "Especifique qué opciones se seleccionan de forma predeterminada cuando los usuarios crean una búsqueda.",
		admin_repository_office_conf_class_instruction: "Si tiene instalado IBM Content Navigator para Microsoft Office en las máquinas de cliente de su entorno, puede especificar cómo se manejan los documentos cuando se añaden o incorporan a este repositorio.",
		admin_repository_office_conf_instruction: "Correlacione las propiedades del documento de Microsoft Office con las propiedades definidas en este repositorio.<br/><br/>Cuando la correlación de propiedades está habilitada para el escritorio al que está asociado este repositorio, las propiedades que se establecen en los documentos de Microsoft Office se utilizan para rellenar las propiedades en el repositorio cuando el usuario añade un documento de IBM Content Navigator para Microsoft Office.",
		admin_repository_office_conf_prop_mapping_title: "Correlación de propiedades",
		admin_repository_office_conf_prop_mapping_title1: "Integración de MS Office",
		admin_office_conf_instruction: "Puede controlar el modo en el que IBM Content Navigator se integra con las aplicaciones de Microsoft Office cuando IBM Content Navigator for Microsoft Office está instalado.<br /><br /><b>Importante:</b> Si selecciona <b>Correlacionar propiedades de Office</b>, también debe configurar la correlación de propiedades para cada repositorio asociado a este escritorio. Puede configurar las correlaciones de propiedades en el separador <b>Propiedades de Office</b> de cada repositorio que haya en su entorno.",
		admin_desktop_workflows_instruction: "<b>Solo sistemas IBM FileNet P8:</b> especifique qué espacios de aplicaciones se visualizan en este escritorio. El orden de los espacios de aplicación seleccionado determina el orden de visualización de los espacios de aplicación en el cliente web.<br><br><b>Sugerencia:</b> puede cambiar el nombre de visualización de los espacios de aplicación especificando nombres nuevos en la sección <b>Etiquetas</b> de la herramienta de administración.",
		admin_search_filtered_properties_instruction: "Especifique las propiedades por las que pueden buscar los usuarios. Puede ocultar las propiedades por las que no desea que busquen los usuarios.",
		admin_search_filtered_operators_instruction: "Especifique los operadores que están disponibles cuando los usuarios buscan en un tipo de datos determinado, por ejemplo, una fecha o un entero. Puede ocultar las operadores que no desea que seleccionen los usuarios.",
		admin_search_default_search_results_instruction: "Especifique las propiedades que se visualizarán para los documentos y carpetas en los resultados de la búsqueda. Puede ocultar las propiedades que no desea que aparezcan en los resultados de la búsqueda.",
		admin_search_default_search_results_p8_cmis_instruction: "Especifique las propiedades que se visualizarán para los documentos en los resultados de la búsqueda. Puede ocultar las propiedades que no desea que aparezcan en los resultados.",

		admin_datetimeOp: "Fecha Hora",
		admin_floatOp: "Número de coma flotante",
		admin_integerOp: "Entero",
		admin_stringOp: "Serie",
		admin_binaryOp: "Binario",
		admin_objectOp: "Objeto",
		admin_idOp: "ID",
		admin_userOp: "Usuario",
		admin_booleanOp: "Booleano",

		admin_string: "Serie",
		admin_long: "Larga",
		admin_date: "Fecha",
		admin_double: "Doble",
		admin_object: "Objeto",
		admin_guid: "GUID",
		admin_boolean: "Booleano",

		admin_repcfg_heading: "Puede sustituir el comportamiento predeterminado de este repositorio estableciendo los parámetros de configuración.",
		admin_repcfg_heading_od: "Puede sustituir el comportamiento predeterminado de este repositorio estableciendo los parámetros de configuración.<br /><br /><b>Importante:</b> para utilizar el cliente web con Content Manager OnDemand, también debe especificar valores para los parámetros que se incluyen en el separador <b>Content Manager OnDemand</b> bajo <b>Valores</b>, que se aplican a todos los repositorios de Content Manager OnDemand a los que se conecta.",
		admin_repcfg_teamspaces: "Gestión de espacio de equipo:",
		admin_repcfg_enable: "Habilitar",
		admin_repcfg_disable: "Inhabilitar",

		admin_repcfg_deliver_redacted_pdf_files_as: "Los archivos PDF redactados se entregarán como:",
		admin_repcfg_burn_pdf_to_pdf: "Archivos PDF",
		admin_repcfg_burn_pdf_to_tiff: "Archivos TIFF",
		admin_repcfg_deliver_redacted_pdf_files_as_hover: "No se puede entregar al cliente un archivo PDF redactado mediante la aplicación de redacciones basadas en rol en un formato de archivo distinto. Cuando cambia el formato de archivo, la extensión del archivo y el tipo MIME también cambian.<br><br>Por ejemplo, cuando se entrega un archivo PDF como archivo TIFF, la extensión del archivo cambia a .tiff.",
		admin_repcfg_redaction_allow_merge_and_split: "Permitir a los usuarios fusionar y dividir páginas que tienen redacciones basadas en roles",
		admin_repcfg_redaction_allow_merge_and_split_hover: "Seleccione esta opción para permitir a los usuarios fusionar y dividir páginas que tienen redacciones basadas en roles. Los usuarios que no sean editores de redacción no podrán editar redacciones basadas en rol ni tendrán acceso a los datos confidenciales asociados con tales redacciones, incluso aunque esta opción esté habilitada.",
		admin_repcfg_modify_teamspace_roles: "Permitir que los propietarios modifiquen los roles en los espacios de equipo existentes",
		admin_repcfg_tm_delete_teamspace: "Permitir que los propietarios supriman espacio de equipo, incluido contenido",
		admin_repcfg_tm_delete_teamspace_id_missing: "Debe especificar el nombre de usuario de un administrador de repositorio.",
		admin_repcfg_tm_delete_teamspace_pwd_missing: "Debe especificar la contraseña del administrador de repositorio.",
		admin_repcfg_teamspace_display_Recent: "Mostrar sólo espacios de equipo modificados recientemente ",
		admin_repcfg_teamspace_display_Recent_value: "Días desde la última modificación:",

		admin_repcfg_folder_selector: "Carpeta raíz:",
		admin_repcfg_enable_folder_selector: "Habilitar",
		admin_repcfg_disable_folder_selector: "Inhabilitar",
		admin_repcfg_SSO: "Inicio de sesión único:",
		admin_repcfg_teamspace_template_permission_text: "Asignar creadores de plantilla de espacio de equipo:",
		admin_repcfg_teamspace_template_permission_hover_p8: "Especifique los grupos o usuarios que pueden crear plantillas de espacio de equipo. Se proporciona a los usuarios y grupos los valores de seguridad adecuados en las clases y carpetas necesarias. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Más información</a><br/><br/><b>Recomendación:</b> utilice grupos para simplificar la gestión de espacio de equipo.",
		admin_repcfg_teamspace_template_permission_hover_cm: "Especifique los grupos o usuarios que pueden crear plantillas de espacio de equipo. Los usuarios se añaden a las ACL adecuadas y se les proporcionan los privilegios necesarios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Más información</a><br/><br/><b>Recomendación:</b> utilice grupos para simplificar la gestión de espacio de equipo.",
		admin_repcfg_teamspace_permission_text: "Asignar roles de espacio de equipo:",
		admin_repcfg_teamspace_permission_hover_p8: "Especifique los grupos o usuarios que pueden crear espacios de equipo y utilizar espacios de equipo. Se proporciona a los usuarios los valores de seguridad adecuados en las clases y carpetas necesarias. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Más información</a><br/><br/><b>Recomendación:</b> utilice grupos para simplificar la gestión de espacio de equipo.",
		admin_repcfg_teamspace_permission_hover_cm: "Especifique los grupos o usuarios que pueden crear espacios de equipo y utilizar espacios de equipo. Los usuarios se añaden a las ACL adecuadas y se les proporcionan los privilegios necesarios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Más información</a><br/><br/><b>Recomendación:</b> utilice grupos para simplificar la gestión de espacio de equipo.",
		admin_repcfg_entry_template_permission_text: "Asignar roles de plantilla de entrada:",
		admin_repcfg_entry_template_permission_hover_p8: "Especifique los grupos o usuarios que pueden crear plantillas de entrada y utilizar plantillas de entrada. Se proporciona a los usuarios los valores de seguridad adecuados en la clase de documento de plantilla de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Más información</a><br/><br/><b>Recomendación:</b> utilice grupos para simplificar la gestión de plantillas de entrada.",
		admin_repcfg_entry_template_permission_hover_cm: "Especifique los grupos o usuarios que pueden crear plantillas de entrada y utilizar plantillas de entrada. Los usuarios se añaden a las ACL adecuadas y se les proporcionan los privilegios necesarios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Más información</a><br /><br /><b>Recomendación:</b> utilice grupos para simplificar la gestión de plantillas de entrada.",
		admin_repcfg_office_template_permission_text: "Asignar roles de plantilla:",
		admin_repcfg_office_template_permission_hover_cm: "Especifique los grupos o usuarios que pueden crear, editar y utilizar las plantillas de Microsoft Office Online o del Servicio de edición. Los usuarios se añaden a las ACL adecuadas y se les proporcionan los privilegios necesarios.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a><br /><br /><b>Recomendación:</b> utilice grupos para simplificar la gestión de plantillas de Microsoft Office Online o del Servicio de edición.",
		admin_repcfg_draft_permission_text: "Asignar roles de borrador:",
		admin_repcfg_draft_permission_hover_cm: "Especifique los grupos o usuarios que pueden crear borradores de documentos de Microsoft Office Online o del Servicio de edición durante la edición colaborativa. Todos los usuarios que necesiten editar de forma colaborativa documentos en Microsoft Office Online o en el Servicio de edición deben tener los privilegios adecuados para crear borradores. Los usuarios se añaden a las ACL adecuadas y se les proporcionan los privilegios necesarios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a><br /><br /><b>Recomendación:</b> utilice grupos para simplificar la gestión de borradores.",
		admin_repcfg_search_permission_text: "Asignar roles de búsqueda:",
		admin_repcfg_search_permission_hover_p8: "Especifique los grupos o usuarios que pueden crear o utilizar búsquedas guardadas y búsquedas entre repositorios. Se proporciona a los usuarios los valores de seguridad adecuados en las clases necesarias. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Más información</a><br /><br /><b>Recomendación:</b> utilice grupos para simplificar la gestión de búsqueda.",
		admin_repcfg_search_permission_hover_cm: "Especifique los grupos o usuarios que pueden crear, editar o utilizar búsquedas guardadas y búsquedas entre repositorios. Los usuarios se añaden a las ACL adecuadas y se les proporcionan los privilegios necesarios. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Más información</a><br /><br /><b>Recomendación:</b> utilice grupos para simplificar la gestión de búsqueda.",
		admin_repcfg_search_permission_title: "Roles de búsqueda",
		admin_repcfg_search_permission_intro_text: "Asegúrese de que los usuarios tienen acceso a un escritorio que da soporte a su rol. Por ejemplo, asegúrese de que los creadores de búsquedas tienen acceso a un escritorio que les permite crear búsquedas y búsquedas entre repositorios.",
		admin_repcfg_teamspace_template_administrators_hover_p8: "Los administradores de plantillas de espacio de equipo son usuarios que tienen permisos <b>Control completo</b> en el repositorio (almacén de objetos). No puede cambiar la lista de administradores de plantillas de espacio de equipo desde la herramienta de administración. <p>Los administradores de plantillas de espacio de equipo pueden suprimir o modificar cualquier plantilla de espacio de equipo. El usuario que crea una plantilla de espacio de equipo no necesita compartir la plantilla con los administradores de plantillas de espacio de equipo.</p>",
		admin_repcfg_teamspace_template_creators_hover_p8: "Al designar un usuario o grupo como creador de plantilla de espacio de equipo, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para crear plantillas de espacio de equipo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Más información</a>",
		admin_repcfg_teamspace_template_others_hover_p8: "Los usuarios y grupos con privilegios asignados distintos a los privilegios asociados con Administradores y Creadores.<p>Puede mover estos usuarios y grupos al rol de creadores de plantillas de espacio de equipo eliminándolos del rol Otros y después asignándolos como creadores de plantillas de espacios de equipo.<p>Puede revisar los privilegios que se conceden actualmente a los usuarios y grupos utilizando IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_administrators_hover_p8: "Los administradores de espacio de equipo son usuarios que tienen permisos <b>Control completo</b> en el repositorio (almacén de objetos). No puede cambiar la lista de administradores de espacio de equipo desde la herramienta de administración.<p>Los administradores de espacio de equipo pueden suprimir o modificar cualquier espacio de equipo. El usuario que crea un espacio de equipo no necesita compartir el espacio de equipo con los administradores de espacio de equipo.</p>",
		admin_repcfg_teamspace_creators_hover_p8: "Al designar un usuario o grupo como creador de espacio de equipo, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para crear espacios de equipo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Más información</a>",
		admin_repcfg_teamspace_user_hover_p8: "Al designar un usuario o grupo como usuario de espacio de equipo, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para crear espacios de equipo. Sin embargo, un usuario debe ser miembro de un espacio de equipo para acceder al espacio de equipo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco097.htm'>Más información</a><p><b>Consejo:</b> si desea que todos los usuarios de su entorno puedan ver espacios de equipo, puede añadir la pseudocuenta #AUTHENTICATED-USERS al rol de usuario de espacio de equipo.</p>",
		admin_repcfg_teamspace_others_hover_p8: "Los usuarios y grupos con privilegios asignados distintos a los privilegios asociados con Administradores, Creadores y Usuarios.<p>Puede mover estos usuarios y grupos a los roles predefinidos eliminándolos del rol Otros y después asignándoles roles de espacio de equipo.<p>Puede revisar los privilegios que se conceden actualmente a los usuarios y grupos utilizando IBM Administration Console for Content Engine.",		
		admin_repcfg_entry_template_administrators_hover_p8: "Los administradores de plantillas de entrada son usuarios que tienen permisos <b>Control completo</b> en el repositorio (almacén de objetos). No puede cambiar la lista de administradores de plantillas de entrada desde la herramienta de administración. <p>Los administradores de plantillas de entrada pueden suprimir o modificar cualquier plantilla de entrada. El usuario que crea una plantilla de entrada no necesita compartir la plantilla de entrada con los administradores de plantillas de entrada.</p>",
		admin_repcfg_entry_template_creators_hover_p8: "Al designar un usuario o grupo como creador de plantilla de entrada, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para crear plantillas de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Más información</a>",
		admin_repcfg_entry_template_user_hover_p8: "Al designar un usuario o grupo como usuario de plantilla de entrada, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para utilizar plantillas de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Más información</a><p><b>Consejo:</b> si desea que todos los usuarios de su entorno puedan utilizar espacios de entrada, puede añadir la pseudocuenta #AUTHENTICATED-USERS al rol de usuario de plantilla de entrada.</p>",
		admin_repcfg_entry_template_others_hover_p8: "Los usuarios y grupos con privilegios asignados distintos a los privilegios asociados con Administradores, Creadores y Usuarios.<p>Puede mover estos usuarios y grupos a los roles predefinidos eliminándolos del rol Otros y después asignándoles roles de plantilla de entrada.<p>Puede revisar los privilegios que se conceden actualmente a los usuarios y grupos utilizando IBM Administration Console for Content Engine.",
		admin_repcfg_teamspace_template_creators_hover_cm: "Al designar un usuario o grupo como creador de plantilla de espacio de equipo, se proporciona al usuario o grupo los privilegios adecuados para crear plantillas de espacio de equipo en el repositorio. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Más información</a>",
		admin_repcfg_teamspace_creators_hover_cm: "Al designar un usuario o grupo como creador de espacio de equipo, se proporciona al usuario o grupo los privilegios adecuados para crear espacios de equipo en el repositorio. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Más información</a>",
		admin_repcfg_teamspace_user_hover_cm: "Al designar un usuario o grupo como usuario de espacio de equipo, se proporciona al usuario o grupo los privilegios adecuados para utilizar espacios de equipo en el repositorio. Sin embargo, un usuario debe ser miembro de un espacio de equipo para acceder al espacio de equipo. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco103.htm'>Más información</a>",
		admin_repcfg_entry_template_creators_hover_cm: "Al designar un usuario o grupo como creador de plantillas de entrada, se proporciona al usuario o grupo los privilegios adecuados para crear plantillas de entrada en el repositorio. <br/><br/>Sin embargo, los valores de seguridad para una entrada específica determinan los privilegios que tiene el usuario o el grupo en la plantilla de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Más información</a>",
		admin_repcfg_entry_template_editors_hover_cm: "Al designar un usuario o grupo como editor de plantillas de entrada, se proporciona al usuario o grupo los privilegios adecuados para modificar plantillas de entrada en el repositorio. <br/><br/>Sin embargo, los valores de seguridad para una entrada específica determinan los privilegios que tiene el usuario o el grupo en la plantilla de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Más información</a>",
		admin_repcfg_entry_user_hover_cm: "Al designar un usuario o grupo como usuario de plantillas de entrada, se proporciona al usuario o grupo los privilegios adecuados para crear plantillas de entrada en el repositorio. <br/><br/>Sin embargo, los valores de seguridad para una entrada específica determinan los privilegios que tiene el usuario o el grupo en la plantilla de entrada. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Más información</a>",
		admin_repcfg_office_template_creators_hover_cm: "Al designar un usuario o grupo como creador de plantillas de Microsoft Office Online o del Servicio de edición, se proporciona al usuario o grupo los privilegios adecuados para crear archivos de plantilla en el repositorio. <br/><br/>Sin embargo, los valores de seguridad para un archivo de plantilla específico determinan los privilegios que tiene el usuario o el grupo en la plantilla. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a>",
		admin_repcfg_office_template_editors_hover_cm: "Al designar un usuario o grupo como editor de plantillas de Microsoft Office Online o del Servicio de edición, se proporciona al usuario o grupo los privilegios adecuados para modificar archivos de plantilla en el repositorio.  <br/><br/>Sin embargo, los valores de seguridad para un archivo de plantilla específico determinan los privilegios que tiene el usuario o el grupo en la plantilla. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a>",
		admin_repcfg_office_template_user_hover_cm: "Al designar un usuario o grupo como usuario de plantillas de Microsoft Office Online o del Servicio de edición, se proporciona al usuario o grupo los privilegios adecuados para aplicar una plantilla al crear un documento de Office Online o del Servicio de edición desde el cliente web.  <br/><br/>Sin embargo, los valores de seguridad para un archivo de plantilla específico determinan los privilegios que tiene el usuario o el grupo en la plantilla.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a>",
		admin_repcfg_draft_creators_hover_cm: "Todos los usuarios que necesiten editar de forma colaborativa documentos en Microsoft Office Online o en el Servicio de edición deben tener asignado este rol. No asigne a usuarios el rol de editor ni de usuario. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a>",
		admin_repcfg_draft_editors_hover_cm: "Todos los usuarios que necesiten editar de forma colaborativa documentos en Microsoft Office Online o en el Servicio de edición deben tener asignado el rol de <b>creador</b>. Si un usuario tiene asignado el rol de editor, no podrá crear borradores, que son necesarios para la edición colaborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a>",
		admin_repcfg_draft_user_hover_cm: "Todos los usuarios que necesiten editar de forma colaborativa documentos en Microsoft Office Online o en el Servicio de edición deben tener asignado el rol de <b>creador</b>. Si un usuario tiene asignado el rol de usuario, no podrá crear borradores, que son necesarios para la edición colaborativa.  <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco155.htm'>Más información</a>",		
		admin_repcfg_search_others_hover_p8: "Los usuarios y grupos con privilegios asignados distintos a los privilegios asociados con Administradores, Creadores y Usuarios.<p>Puede mover estos usuarios y grupos a los roles predefinidos eliminándolos del rol Otros y después asignándoles roles de búsqueda.<p>Puede revisar los privilegios que se conceden actualmente a los usuarios y grupos utilizando IBM Administration Console for Content Engine.",		
		admin_repcfg_search_admins_hover_p8: "Los administradores de búsqueda son usuarios que tienen permisos <b>Control completo</b> en el repositorio (almacén de objetos). No puede cambiar la lista de administradores de búsqueda desde la herramienta de administración. <br /><br />Los administradores de búsqueda pueden suprimir o modificar cualquier búsqueda. El usuario que crea una búsqueda no necesita compartir la búsqueda con los administradores de búsqueda.",
		admin_repcfg_search_creators_hover_p8: "Al designar un usuario o grupo como creador de búsqueda, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para crear búsquedas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Más información</a>",
		admin_repcfg_search_user_hover_p8: "Al designar un usuario o grupo como usuario de búsqueda, se proporciona al usuario o grupo la seguridad adecuada en el repositorio para utilizar búsquedas <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco102.htm'>Más información</a>.<br /><br /><b>Consejo:</b> si desea que todos los usuarios de su entorno puedan utilizar búsquedas, puede añadir la pseudocuenta #AUTHENTICATED-USERS al rol de usuario de búsqueda.<br/><br />De forma predeterminada, una usuario de búsqueda puede crear búsquedas y búsquedas entre repositorios pero no puede guardar las búsquedas. Puede impedir que los usuarios de búsqueda creen búsquedas haciendo que utilicen un escritorio para el que se han seleccionado las opciones siguientes:<ul><li><b>Impedir que los usuarios creen búsquedas</b></li><li><b>Impedir que los usuarios creen búsquedas entre repositorios</b></li></ul>",
		admin_repcfg_search_creators_hover_cm: "Al designar un usuario o grupo como creador de búsqueda, se proporciona al usuario o grupo los privilegios adecuados para crear y guardar búsquedas y búsquedas entre repositorios en el repositorio. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Más información</a><br /><br /><b>Importante:</b> asegúrese de que los creadores de búsqueda utilicen un escritorio para el que no se hayan seleccionado las opciones siguientes:<ul><li><b>Impedir que los usuarios creen búsquedas</b></li><li><b>Impedir que los usuarios creen búsquedas entre repositorios</b></li></ul>",
		admin_repcfg_search_editors_hover_cm: "Al designar un usuario o grupo como editor de búsqueda, se proporciona al usuario o grupo los privilegios adecuados para modificar búsquedas y búsquedas entre repositorios existentes. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Más información</a><br /><br /><b>Consejo:</b> de forma predeterminada, un editor de búsqueda puede crear búsquedas y búsquedas entre repositorios pero no puede guardar las búsquedas. Puede impedir que los editores de búsqueda creen búsquedas haciendo que utilicen un escritorio para el que se han seleccionado las opciones siguientes:<ul><li><b>Impedir que los usuarios creen búsquedas</b></li><li><b>Impedir que los usuarios creen búsquedas entre repositorios</b></li></ul>",
		admin_repcfg_search_user_hover_cm: "Al designar un usuario o grupo como usuario de búsqueda, se proporciona al usuario o grupo los privilegios adecuados para abrir y ejecutar búsquedas y búsquedas entre repositorios guardadas. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco105.htm'>Más información</a><br /><br /><b>Consejo:</b> de forma predeterminada, un usuario de búsqueda puede crear búsquedas y búsquedas entre repositorios pero no puede guardar las búsquedas. Puede impedir que los usuarios de búsqueda creen búsquedas haciendo que utilicen un escritorio para el que se han seleccionado las opciones siguientes:<ul><li><b>Impedir que los usuarios creen búsquedas</b></li><li><b>Impedir que los usuarios creen búsquedas entre repositorios</b></li></ul>",
		admin_repcfg_db_encoding: "Codificación de caracteres de la base de datos del servidor:",
		admin_repcfg_db_encoding_hover: "La codificación de caracteres predeterminada de un base de datos de IBM Content Manager es UTF-8.",
		admin_repcfg_db_encoding_specify: "Especifique la codificación de caracteres de la base de datos",
		admin_repcfg_db_encoding_utf8: "Codificación UTF-8",
		admin_repcfg_db_encoding_utf8_hover: "Especifique esta opción si utiliza una base de datos con codificación UTF-8. IBM Content Navigator utilizará la codificación UTF-8 para comprobar la longitud de las series de los valores de propiedades de elementos.",
		admin_repcfg_db_encoding_other: "Otra codificación",
		admin_repcfg_db_encoding_other_hover: "Especifique esta opción si utiliza una base de datos con una codificación que no sea UTF-8. IBM Content Navigator utilizará el recuento de caracteres para comprobar la longitud de las series de los valores de propiedades de elementos.",
		admin_repcfg_language_codes: "Códigos de idioma de servidor:",
		admin_repcfg_language_codes_avail: "Disponible",
		admin_repcfg_language_codes_sel: "Seleccionado",
		admin_repcfg_pdf_conversion: "Tipos MIME que deben convertirse en documentos PDF en archivos adjuntos:",
		admin_repcfg_pdf_conversion_avail: "Disponible",
		admin_repcfg_pdf_conversion_sel: "Seleccionado",

		admin_repcfg_box_share_enable_classes_label: "Clases que se deben modificar para dar soporte a la compartición de Box:",
		admin_repcfg_box_share_enable_classes_hover: "Puede modificar la clase de modo que almacene el ID del archivo en Box cuando se comparta el elemento.",
		admin_repcfg_box_share_enable_classes_warning: "Importante: las clases que especifique se modificarán para dar soporte a la compartición de Box. Después de guardar los cambios, estos no se pueden eliminar de las clases.<br><br>Para modificar clases debe estar conectado al repositorio como administrador del servidor de bibliotecas.",
		admin_repcfg_box_share_enable_classes_available: "Clases disponibles",
		admin_repcfg_box_share_enable_classes_selected: "Clases seleccionadas",
		admin_repcfg_box_share_enable_classes_tracking_col_label: "Almacenar ID de compartición de Box",
		admin_repcfg_box_share_enable_classes_tracking_enabled_title: "Esta clase ya se ha modificado para almacenar el ID de compartición de Box. No puede eliminar esta opción.",
		admin_repcfg_box_share_enable_classes_tracking_hover: "Modifique esta clase de modo que almacene el ID del archivo en Box cuando se comparta el elemento.",

		admin_repcfg_redaction: "Redacciones basadas en rol:",
		admin_repcfg_enable_redaction_hover: "Especifique si desea utilizar redacciones basadas en rol en los documentos de este repositorio.<br/><br/>Las redacciones basadas en rol se aplican cuando un visor descarga, imprime o representa un documento o un documento se visualiza como una miniatura. Lo que ven los usuarios cuando ven el documento depende del rol y de las políticas de redacción aplicables.",

		admin_repcfg_redaction_policy_permission_text: "Asignar editores de políticas:",
		admin_repcfg_redaction_policy_editors_hover: "Seleccione los usuarios y grupos que crearán, modificarán y suprimirán políticas de redacción y roles de redacción.",
		admin_repcfg_redaction_policy_editors_select_hover: "Los editores de políticas de redacción pueden crear, modificar y suprimir políticas de redacción y roles de redacción.",
		admin_repcfg_redaction_policy_administrators_hover_p8: "Los administradores de políticas de redacción pueden asignar editores de políticas de redacción.<br/><br/>Puede cambiar la lista de administradores de políticas de redacción utilizando IBM Administration Console for Content Engine.",
		admin_repcfg_redaction_policy_administrators_hover_cm: "Los administradores de políticas de redacción pueden asignar editores de políticas de redacción.<br/><br/>Puede cambiar la lista de administradores de políticas de redacción utilizando el cliente de administración de sistema de IBM Content Manager.",

		admin_repcfg_redaction_permission_text: "Asignar editores de redacción:",
		admin_repcfg_redaction_editors_hover: "Seleccione los usuarios y grupos que crearán, modificarán y suprimirán redacciones basadas en roles. Después de seleccionar usuarios y grupos como editores, debe especificarlos como editores en las políticas de redacción antes de que puedan editar redacciones basadas en rol.",
   		admin_repcfg_redaction_editors_select_hover: "Los editores de redacción pueden crear, modificar y suprimir redacciones basadas en roles cuando también se especifican como editores en las políticas de redacción.",
   		admin_repcfg_redaction_administrators_hover_p8: "Los administradores de redacción pueden asignar editores de redacción.<br/><br/>Puede cambiar la lista de administradores de redacción utilizando IBM Administration Console for Content Engine.",
   		admin_repcfg_redaction_administrators_hover_cm: "Los administradores de redacción pueden asignar editores de redacción.<br/><br/>Puede cambiar la lista de administradores de redacción utilizando el cliente de administración de sistema de IBM Content Manager.",
		admin_repcfg_entry_template: "Gestión de plantillas de entrada:",
		admin_repcfg_entry_template_enable_classes_label: "Clases que se deben modificar para dar soporte a plantillas de entrada:",
		admin_repcfg_oos_reference_attribute_label: "Atributos de referencia para Office Online:",
		admin_repcfg_entry_template_enable_classes_hover: "Importante: las clases que especifique se modificarán para dar soporte a plantillas de entrada. Después de guardar los cambios, estos no se pueden eliminar de las clases.<br><br>Puede modificar la clase para uno o ambos de los siguientes propósitos:<br><ul><li>Para almacenar el ID de la plantilla de entrada que se ha utilizado para añadir un elemento de modo que se apliquen los valores de la plantilla de entrada cuando se modifique el elemento.</li><li>Sólo clases de carpetas jerárquicas: para dar soporte a asociaciones de carpetas de plantillas de entrada</li></ul>Para modificar clases debe estar conectado al repositorio como administrador del servidor de bibliotecas.",
		admin_repcfg_entry_template_enable_classes_warning: "Importante: las clases que especifique se modificarán para dar soporte a plantillas de entrada. Después de guardar los cambios, estos no se pueden eliminar de las clases.<br><br>Para modificar clases debe estar conectado al repositorio como administrador del servidor de bibliotecas.",
		admin_repcfg_entry_template_enable_classes_available: "Clases disponibles",
		admin_repcfg_entry_template_enable_classes_selected: "Clases seleccionadas",
		admin_repcfg_entry_template_enable_classes_tracking_col_label: "Almacenar ID de plantilla de entrada",
		admin_repcfg_entry_template_enable_classes_tracking_hover: "Modifique esta clase de modo que almacene el ID de la plantilla de entrada que se ha utilizado para añadir un elemento para que se apliquen los valores de la plantilla de entrada cuando se modifique el elemento.",
		admin_repcfg_entry_template_enable_classes_folder_associations_col_label: "Almacenar asociaciones de carpetas",
		admin_repcfg_entry_template_enable_classes_folder_associations_hover: "Modifique esta clase de modo que puede dar soporte a las asociaciones de carpetas de plantillas de entrada. Esta opción sólo está disponible para las clases de carpetas jerárquicas.",
		admin_repcfg_entry_template_enable_classes_tracking_enabled_title: "Esta clase ya se ha modificado para almacenar el ID de plantilla de entrada. No puede eliminar esta opción.",
		admin_repcfg_entry_template_enable_classes_folder_associations_enabled_title: "Esta clase ya se ha modificado para almacenar asociaciones de carpetas. No puede eliminar esta opción.",
		admin_repcfg_entry_template_enable_classes_folder_associations_unsupported_title: "Sólo se pueden utilizar clases de carpetas jerárquicas y clases no jerárquicas para almacenar asociaciones de carpetas.",
		admin_repcfg_entry_template_root_folder_association_title: "Plantillas de entrada asociadas a esta carpeta raíz:",
		admin_repcfg_entry_template_root_folder_association_hover: "Especifique qué carpetas de entrada desea asociar a la carpeta raíz de su repositorio de IBM Content Manager.<br /><br />Si asocia plantillas de entrada a la carpeta raíz y los usuarios añaden elementos a una carpeta jerárquica, siempre se utilizará una plantilla de entrada para añadir elementos.",
		admin_repcfg_entry_template_root_folder_association_button: "Establecer asociaciones",
		admin_repcfg_oos_enable_classes_label: "Clases que se deben modificar para dar soporte a Office Online o al Servicio de edición:",
		admin_repcfg_oos_enable_classes_warning: "Importante: las clases que especifique se modificarán para poder trabajar con Microsoft Office Online o con el Servicio de edición. Una vez guardados los cambios, el atributo de referencia que se añade automáticamente a cada clase no se podrá eliminar.<br><br>Para modificar clases debe estar conectado al repositorio como administrador del servidor de bibliotecas.",
		admin_repcfg_oos_enable_classes_available: "Clases disponibles",
		admin_repcfg_oos_enable_classes_selected: "Clases seleccionadas",
		admin_repcfg_oos_enable_classes_note: "Importante:",
		admin_repcfg_oos_enable_classes_selected_not_support: "Esta clase no se soporta con Microsoft Office Online o con el Servicio de edición.",
		admin_repcfg_oos_enable_classes_selected_not_support1: "La política de versión para esta clase está establecida en 'versión siempre', que no está soportada por Microsoft Office Online ni por el Servicio de edición. Seleccione otra clase.",
		admin_repcfg_download_recording: "Hacer un seguimiento de descargas:",
		admin_repcfg_download_recording_hover: "De forma predeterminada se hace un seguimiento de las descargas cuando el complemento Social Collaboration Base Extensions se instala en el repositorio. Sin embargo, la inhabilitación de esta opción puede mejorar el rendimiento del repositorio.<br><br>Si inhabilita esta opción, los usuarios verán un recuento de las descargas que se han producido antes de que se inhabilitara la opción.",
		admin_repcfg_sync_service: "Servicios de sincronización:",
		admin_repcfg_download_ignored: "Pasar por alto descargas para usuarios específicos:",
		admin_repcfg_download_ignored_hover: "Puede pasar por alto las descargas solicitadas por usuarios específicos, como por ejemplo administradores o cuentas del sistema, para reflejar de forma precisa el número de los usuarios que han descargado un documento. Por ejemplo, si tiene una cuenta específica que se utiliza para descargar a fin de generar un informe mensual, puede pasar por alto las descargas solicitadas por dicha cuenta.<br><br><b>Restricción:</b> no puede especificar grupos.",

		admin_repcfg_add_as_major_version: "Añadir como versión principal:",
		admin_repcfg_enable_add_as_major_version: "Sí",
		admin_repcfg_disable_add_as_major_version: "No",
		admin_repcfg_checkin_as_major_version: "Incorporar como una versión principal:",
		admin_repcfg_enable_checkin_as_major_version: "Sí",
		admin_repcfg_disable_checkin_as_major_version: "No",
		admin_repcfg_annotation_security: "Seguridad de anotación:",
		admin_repcfg_inherit_annotation_security: "Duplicar la seguridad del documento contenedor",
		admin_repcfg_default_annotation_security: "Utilizar la seguridad de anotación predeterminada",
		admin_repcfg_connection_point: "Punto de conexión de flujo de trabajo:",
		admin_repcfg_include_workflow_definition: "Visualizar clase de definición de flujo de trabajo:",
		admin_repcfg_include_form_template: "Visualizar clase de plantilla de formulario:",
		admin_repcfg_enable_include_workflow_definition: "Sí",
		admin_repcfg_disable_include_workflow_definition: "No",

		admin_repcfg_status_columns: "Iconos de estado:",
		admin_repcfg_status_columns_hover: "Especifique los estados para los que desea ver iconos. Los iconos de estado se visualizan junto a documentos, carpetas y elementos de trabajo de la lista de contenido.",
		admin_repcfg_status_columns_documents_or_folders: "Visualizar un icono cuando los documentos o carpetas:",
		admin_repcfg_status_columns_documents: "Visualizar un icono cuando los documentos:",
		admin_repcfg_status_columns_documents_checked_out: "Se extraen",
		admin_repcfg_status_columns_documents_declared_records: "Se declaran como registros",
		admin_repcfg_status_columns_documents_minor_versions: "Tienen una versión menor",
		admin_repcfg_status_columns_documents_compound_document: "Son documentos compuestos",
		admin_repcfg_status_columns_documents_bookmarks: "Tienen marcadores",
		admin_repcfg_status_columns_documents_hold: "Están en espera",
		admin_repcfg_status_columns_documents_notes: "Tienen notas",
		admin_repcfg_status_columns_work_items: "Visualizar un icono cuando los elementos de trabajo:",
		admin_repcfg_status_columns_work_items_locked: "Están bloqueados",
		admin_repcfg_status_columns_work_items_checked_out: "Se extraen",
		admin_repcfg_status_columns_work_items_deadline: "Tienen una fecha límite",
		admin_repcfg_status_columns_work_items_suspended: "Están suspendidos del proceso",

		admin_repcfg_afp2pdf_config_file: "Archivo de configuración de AFP2PDF:",
		admin_repcfg_transform_xml_file: "Archivo de Transform personalizado:",
		admin_repcfg_ssl: "SSL:",
		admin_repcfg_enable_ssl: "Habilitar",
		admin_repcfg_disable_ssl: "Inhabilitar",
		admin_repcfg_keyringdb_file: "Archivo de base de datos de conjunto de claves:",
		admin_repcfg_keyringstash_file: "Archivo de ocultación de conjunto de claves:",
		admin_repcfg_od_sso: "Inicio de sesión exclusivo",
		admin_repcfg_od_enable_sso: "Habilitar",
		admin_repcfg_od_disable_sso: "Inhabilitar",
		admin_repcfg_od_sso_password: "Contraseña",
		admin_repcfg_advanced_label: "Avanzado",
		admin_repcfg_custom_properties_label: "Propiedades personalizadas:",
		admin_repcfg_new_button_label: "Nuevo",
		admin_repcfg_edit_button_label: "Editar",
		admin_repcfg_delete_button_label: "Suprimir",
		admin_repcfg_custom_head1: "Nombre",
		admin_repcfg_custom_head2: "Valor",
		admin_repcfg_ecpdialog_title_new: "Nueva propiedad personalizada",
		admin_repcfg_ecpdialog_title_edit: "Editar propiedad personalizada",
		admin_repcfg_ecpdialog_name: "Nombre:",
		admin_repcfg_ecpdialog_value: "Valor:",
		admin_repcfg_ecpdialog_save: "Guardar",
		admin_repcfg_ecpdialog_create: "Crear",
		admin_repcfg_ecpdialog_cancel: "Cancelar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: This message is not clear. The value cannot be a duplicate of what? What does it mean that the value cannot contain blanks? Cannot contain spaces? Cannot be blank?
		admin_repcfg_ecpdialog_nameInvalid: "Este valor es necesario. El valor no puede contener espacios en blanco y no puede ser un duplicado.",

		admin_repcfg_cmis_use_gzip_encoding: "Utilizar codificación GZIP:",

		admin_repcfg_task_mgr_proxy: "ID de conexión del gestor de tareas:",
		admin_repcfg_task_mgr_proxy_hover: "Para la compartición de Box o la supresión de espacios de equipo, el administrador de tareas utiliza un ID y una contraseña de usuario administrador para ejecutar las tareas en segundo plano que modifican el repositorio.<br><br>Haga clic en Definir e inicie sesión en el repositorio utilizando un ID de usuario administrador de repositorio y contraseña válidos.",
		admin_task_manager_not_enabled_warning: "Esta opción requiere el servicio del administrador de tareas, pero el servicio del administrador de tareas no está habilitado.  Puede habilitar el servicio del administrador de tareas para todos los escritorios de la página General de Parámetros.",
		admin_task_manager_not_enabled_and_user_warning: "Esta opción requiere el servicio del administrador de tareas, pero el servicio del administrador de tareas no está habilitado. En esta página, defina el ID de conexión del administrador de tareas y en la página General de Parámetros habilite el servicio del administrador de tareas para todos los escritorios.",
		admin_task_manager_user_id_pw_not_set_warning: "Esta opción requiere el servicio del administrador de tareas y un ID de usuario administrador y contraseña. En esta página, defina el ID de conexión del administrador de tareas.",
		admin_repcfg_teamspaces_delete_task_id: "Administrador de repositorio:",
		admin_repcfg_teamspaces_delete_task_password: "Contraseña:",
		admin_repcfg_teamspaces_delete_task_Id_hover: "Debe especificar un administrador del servidor de bibliotecas para permitir que el servicio de gestor de tareas suprima un espacio de equipo en el repositorio.",
		admin_repcfg_teamspaces_delete_task_hover: "De forma predeterminada, cuando un usuario suprime un espacio de equipo, el espacio de equipo se oculta. Todas las carpetas y documentos del espacio de equipo permanecen en el repositorio. <br /> <br />Cuando habilita esta opción, sólo permanecen en el repositorio los documentos añadidos a otras carpetas.",
		admin_repcfg_display_recent_teamspaces_p8_hover: "Si tiene un gran número de espacios de equipo en el entorno, es posible que requiera bastante tiempo para que se muestren los espacios de equipo en el separador <b>Espacios de equipo</b>. Puede seleccionar esta opción para reducir el periodo de tiempo que se tarda en llenar la lista.<br /><br />Si un usuario necesita trabajar con un espacio de equipo que está fuera del rango especificado, el usuario puede utilizar el separador <b>Filtrar</b> para buscar el espacio de equipo.",
		admin_repcfg_use_teamspaces_owner_role_cm_hover: "Si selecciona esta opción, los usuarios con el rol de propietario en un espacio de equipo pueden modificar los roles asociados a los espacios de equipo creados antes de IBM Content Navigator, Versión 2.0.2.<br /><br />Esta opción no afecta a los espacios de equipo creados con IBM Content Navigator, Versión 2.0.2.",
		admin_repcfg_use_teamspaces_cm_hover: "Especifique si desea que los usuarios puedan crear espacios de equipo y plantillas de espacio de equipo en este repositorio.<br /><br /><b>Importante:</b> el repositorio debe ser soportar carpetas jerárquicas.<br /><br />Si habilita los espacios de equipo, IBM Content Navigator crea el modelo de datos de espacio de equipo en el repositorio. El modelo de datos incluye objetos ACL, privilegios, conjuntos de privilegios y dos nuevos tipos de elemento.",
		admin_repcfg_folder_selector_hover: "Seleccione la carpeta que desea utilizar como la carpeta raíz cuando los usuarios examinen los documentos. Si no tiene carpetas jerárquicas configuradas en el repositorio, este valor le permite habilitar examinar definiendo una carpeta raíz. Si tiene carpetas jerárquicas configuradas en el repositorio, este valor altera temporalmente la carpeta raíz configurada en el repositorio.",
		admin_repcfg_cm_use_sso_hover: "Especifique si desea permitir el inicio de sesión único para los usuarios con el conjunto de privilegios de inicio de sesión de confianza.<br /><br /><b>Importante:</b> el inicio de sesión único debe estar habilitar en el servidor Content Manager, y WebSphere Application Server debe estar configurado para LTPA para que este parámetro de configuración funcione.",
		admin_repcfg_cm_direct_retrieve_hover: "La recuperación directa está habilitada de forma predeterminada porque permite al cliente web recuperar rápidamente contenido del gestor de recursos. <br /><br />Puede inhabilitar esta opción si no desea que la aplicación cliente acceda al gestor de recursos directamente o si tiene un cortafuegos o servidor proxy que impide que el cliente web acceda al gestor de recursos mediante los URL. Por ejemplo, un cortafuegos puede impedir que los usuarios visualicen documentos en el visor de applets cuando la recuperación directa está habilitada.",
		admin_repcfg_cmItemTypesToDisplay: "Si no desea que los usuarios vean los tipos de elementos de recursos en el servidor de IBM Content Manager, puede visualizar solo los tipos de elementos del modelo de documentos. Los tipos de elementos se visualizan cuando los usuarios crean búsquedas, añaden documentos y crean carpetas.",
		admin_repcfg_cm_language_codes_hover: "Especifique los idiomas en el que se devolverán los datos del servidor Content Manager. La lista de idiomas disponibles se controla mediante la lista de definiciones de idioma del servidor.<br /><br /><b>Recuerde:</b> los datos en el cliente web se visualizan en el idioma definido en el navegador web del usuario.",
		admin_repcfg_cm_pdf_conversion_hover: "Especifique los tipos de documentos que se deben convertir a PDF cuando un usuario envíe un documento con varias partes como archivo adjunto de correo electrónico. Todas las partes se combinan en un único documento PDF.",
		admin_repcfg_use_teamspaces_p8_hover: "Especifique si desea que los usuarios puedan crear espacios de equipo y plantillas de espacio de equipo en este repositorio.<br /><br />Si habilita los espacios de equipo, IBM Content Navigator crea el modelo de datos de espacio de equipo en el repositorio. El modelo de datos incluye plantillas de propiedad, objetos personalizados, un objeto de carpeta y varias carpetas.",
		admin_repcfg_use_entry_template_p8_hover: "Especifique si desea que los usuarios puedan crear y gestionar plantillas de entrada en este repositorio desde IBM Contente Navigator. Si no habilita esta característica, los usuarios pueden buscar y utilizar plantillas de entrada que ya se encuentran en el repositorio.<br /><br />Si habilita la gestión de plantillas de entrada, IBM Content Navigator actualiza el modelo de datos de la plantilla de entrada en el repositorio. La actualización incluye nuevas propiedades. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco098.htm'>Más información</a>",
		admin_repcfg_use_entry_template_cm_hover: "Especifique si desea que los usuarios puedan crear y gestionar plantillas de entrada en este repositorio desde IBM Contente Navigator.<br /><br />Si habilita la gestión de plantillas de entrada, IBM Content Navigator crea el modelo de datos de la plantilla de entrada en el repositorio. El modelo de datos incluye un nuevo objeto ACL, nuevas propiedades y un nuevo tipo de elemento. <a target='new' href='http://www.ibm.com/support/knowledgecenter/SSEUEX_2.0.3/com.ibm.installingeuc.doc/eucco104.htm'>Más información</a>",
		admin_repcfg_sync_service_p8_hover: "Especifique si desea que los usuarios puedan sincronizar sus elementos favoritos entre sus estaciones de trabajo y dispositivos móviles.<br><br><b>Importante:</b> para utilizar esta característica también debe completar las siguientes tareas:<br><ul><li>Especifique el <b>URL público de los servicios de sincronización</b> en la sección <b>Servicios de sincronización</b> de la herramienta de administración.</li><li>Añada este repositorio a un escritorio para el cual se habiliten los servicios de sincronización.</li></ul>",
		admin_repcfg_p8_add_as_major_version_hover: "Especifique si la opción de versión principal se selecciona de forma predeterminada cuando los usuarios añaden documentos al repositorio.<br /><br />Los usuarios tienen la opción de deseleccionar esta opción si desean añadir el documento como una versión menor.",
		admin_repcfg_p8_checkin_as_major_version_hover: "Especifique si la opción de versión principal se selecciona de forma predeterminada cuando los usuarios incorporan documentos al repositorio.<br /><br />Los usuarios tienen la opción de deseleccionar esta opción si desean incorporar el documento como una versión menor.",
		admin_repcfg_p8_annotation_security_hover: "Especifique qué tipo de seguridad desea aplicar de forma predeterminada en las anotaciones.<br /><br />Los usuarios tienen la opción de cambiar la seguridad de las anotaciones.",
		admin_repcfg_p8_connection_point_hover: "Si desea utilizar flujos de trabajo de IBM FileNet P8, seleccione un punto de conexión de Process Engine. El punto de conexión que se selecciona determina los flujos de trabajo que estarán disponibles para los usuarios que accedan a este repositorio.",
		admin_repcfg_p8_include_workflow_definition_hover: "Si visualiza la clase de documento de definición de flujo de trabajo IBM FileNet P8 en el cliente web, los usuarios pueden buscar y añadir definiciones de flujo de trabajo al repositorio.",
		admin_repcfg_p8_include_form_template_hover: "Si visualiza la clase de documento de plantilla de formulario IBM FileNet P8 en el cliente web, los usuarios pueden buscar y añadir plantillas de formulario al repositorio.",
		admin_repcfg_od_afp2pdf_config_file_hover: "Especifique la vía de acceso completa del archivo de configuración AFP2PDF para este repositorio en el servidor de aplicaciones web. Se requiere AFP2PDF Transform para ver e imprimir datos AFP.<br /><br /><b>Recuerde:</b> para utilizar este parámetro AFP2PDF Transform debe estar instalado.",
		admin_repcfg_od_transform_xml_file_hover: " Si desea utilizar una transformación personalizada para convertir contenido de Content Manager OnDemand, especifique la vía de acceso completa del archivo XML que se utiliza para definir la transformación. El archivo XML debe estar ubicado en el servidor de aplicaciones web.",
		admin_repcfg_od_ssl_hover: "Especifique si se utilizará SSL para cifrar las comunicaciones entre el servidor de aplicaciones IBM Content Navigator y el servidor de biblioteca Content Manager OnDemand y los servidores de objetos.<br /><br /><b>Importante:</b> Cuando habilita SSL para Content Manager OnDemand, no incluye la comunicación entre el servidor de aplicaciones IBM Content Navigator, el servidor web o las estaciones de trabajo de los usuarios.",
		admin_repcfg_od_ssl_keyringdb_file_hover: "Especifique la vía de acceso completa del archivo de base de datos de conjunto de claves para este repositorio en el servidor de aplicaciones web. Por ejemplo, C:\\Archivos de programa\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.kdb.<br /><br />El archivo de base de datos de conjunto de claves contiene los certificados raíz de confianza. Debe utilizar una protección segura del sistema de archivos para impedir el acceso sin autorización a este archivo.",
		admin_repcfg_od_ssl_keyringstash_file_hover: "Especifique la vía de acceso completa del archivo de ocultación de conjunto de claves para este repositorio en el servidor de aplicaciones web. Por ejemplo, C:\\Archivos de programa\\IBM\\OnDemand Web Enablement Kit\\config\\ondemand.sth.<br /><br />El archivo de ocultación de conjunto de claves contiene la contraseña para el archivo de base de datos de conjunto de claves. Debe utilizar una protección segura del sistema de archivos para impedir el acceso sin autorización a este archivo.",
		admin_repcfg_od_sso_password_hover: "Especifique la contraseña que debe utilizarse para el inicio de sesión único en el servidor OnDemand.",
		admin_repcfg_od_custom_properties_hover: "La API Java ODWEK da soporte a propiedades personalizadas. Si desea utilizar propiedades personalizadas al conectarse al repositorio mediante el cliente web, especifique los nombres y valores de las propiedades personalizadas.<br /><br />Para obtener más información sobre las propiedades personalizadas soportadas, consulte los Javadocs de la API Java ODWEK, que se encuentran en el directorio /api del directorio de instalación de ODWEK.",
		admin_repcfg_od_custom_properties_name_hover: "Introduzca el nombre de propiedad.",
		admin_repcfg_od_custom_properties_value_hover: "Especifique el valor de la propiedad.",
		admin_repcfg_od_use_sso_hover: "Especifique si se permite el inicio de sesión único de usuarios.<br /><br /><b>Importante:</b> El inicio de sesión único debe estar habilitado en el servidor de Content Manager OnDemand a fin de que funcione este parámetro de configuración.",
		admin_repcfg_cmis_use_gzip_encoding_hover: "Utilice la codificación GZIP para este origen de CMIS.",
		admin_repcfg_cm_use_part_file_name: "Nombre de archivo que se utilizará al descargar documentos:",
		admin_repcfg_cm_use_part_file_name_help: "Especifique cómo se determinan los nombres de archivos de documentos cuando los usuarios descargan documentos.",
		admin_repcfg_cm_use_part_file_name_enable: "Utilizar el nombre de archivo",
		admin_repcfg_cm_use_part_file_name_disable: "Utilizar el nombre del elemento del repositorio.",
		admin_repcfg_add_doc_name: "Nombre predeterminado para un documento añadido:",
		admin_repcfg_add_doc_name_hover: "Los usuarios pueden cambiar el nombre antes de añadir el documento.",
		admin_repcfg_add_doc_name_empty: "Ninguno (en blanco)",
		admin_repcfg_add_doc_name_file_name: "El nombre de archivo del documento seleccionado",

		admin_repcfg_compound_documents: "Características de documentos compuestos:",
		admin_repcfg_compound_documents_hover: "Habilite las características de documentos compuestos P8, como por ejemplo la navegación.",
		admin_repcfg_cm_action_list_config_enabled: "Lista de acciones de elementos de trabajo:",
		admin_repcfg_cm_action_list_config_hover: "Cuando configure el direccionamiento de documentos en el cliente de administración del sistema de Content Manager, puede especificar una lista de acciones que un usuario puede realizar con un elemento de trabajo.<br /><br />Habilite esta opción si desea utilizar la lista de acciones desde el servidor de Content Manager. Estos valores se utilizan en el menú contextual y en la ventana Editar propiedades correspondiente al elemento de trabajo.<br /><br /><b>Importante:</b> los valores de la lista de acciones sustituyen los menús personalizados que configure en la herramienta de administración de Content Navigator. Si no hay valores en la lista de acciones, el usuario no podrá realizar acción alguna con los elementos de trabajo.",

		admin_repcfg_box_share: "Compartición de Box",
		admin_repcfg_box_share_p8_hover: "Permite a los usuarios compartir un documento desde este repositorio. Compartir un documento incluye la copia del archivo en Box, la creación de un enlace y el envío del enlace por correo electrónico.<br /><br />Si habilita la compartición de Box, IBM Content Navigator crea el modelo de datos de compartición de Box en el repositorio. Para instalar el complemento de compartición de Box en IBM Content Navigator, debe conectarse al repositorio como administrador de servidor de bibliotecas.",

		admin_menu_type_icon: "Icono de tipo de menú",
		admin_menu_toolbar_hover: "Barra de herramientas",
		admin_menu_toolbar_custom_hover: "Barra de herramientas personalizada",
		admin_menu_contextMenu_hover: "Menú contextual",
		admin_menu_contextMenu_custom_hover: "Menú contextual personalizado",

		admin_menu_contextMenu_custom_empty: "No se han definido menús contextuales personalizados en los plug-ins configurados.",
		admin_menu_toolbar_custom_empty: "No se han definido barras de herramientas personalizadas en los plug-ins configurados.",

		admin_file_type_category_filters: "Filtros de tipo de archivo:",
		admin_file_type_category_filters_hover_help: "Especifique la lista de tipos de archivo que pueden utilizar los usuarios en las situaciones siguientes:<ul><li>Para acotar la lista de resultados cuando se busca o examina en Content Navigator IBM for Microsoft Office<li>Para acotar la lista de resultados cuando se busca en un repositorio de IBM FileNet P8 en el cliente web<li>Para restringir los tipos de archivos que los usuarios pueden añadir al repositorio cuando se utiliza una plantilla de entrada</ul>",
		admin_file_type_only_use_in_et_folder_association: "Mostrar sólo en asociaciones de carpetas de plantillas de entrada",
		admin_office_config_properties_label: "Propiedades de Office",
		admin_office_config_type_label: "Tipo de datos",
		admin_office_config_mapped_property_label: "Propiedad de repositorio",
		admin_office_config_properties_hover_help: "Escriba y luego añada el nombre de cada propiedad de Microsoft Office que desee correlacionar con una propiedad de repositorio. El tipo de datos de todas las propiedades debe coincidir.",
		admin_office_config_mapped_property_hover_help: "Si desea correlacionar las propiedades de Office con más de una propiedad de repositorio, debe crear una nueva correlación de propiedades.",
		admin_new_property_mapping_title: "Nueva correlación de propiedades",
		admin_property_mapping_title: "Editar correlación de propiedades",
		admin_property_mapping_instruction: "Especifique qué propiedades de Microsoft Office desea correlacionar con una propiedad del repositorio. El tipo de datos de las propiedades de Office debe coincidir con el tipo de datos de la propiedad del repositorio. <br /><br />Si un documento de Office tiene más de una propiedad de la correlación, IBM Content Navigator utiliza la primera propiedad de la lista para llenar la propiedad en el repositorio.",
		admin_ms_general_settings: "Configuración general:",
		admin_ms_delete_local_settings: "Suprimir archivos locales cuando los usuarios:",
		admin_ms_outlook_options: "Integración con Outlook:",
		admin_ms_enable_props_mapping: "Correlacionar propiedades de Office con propiedades del repositorio cuando los usuarios:",
		admin_ms_open_doc_when_checkout: "Extraer automáticamente un documento cuando se abra",
		admin_ms_open_doc_when_checkout_hover_help: "Seleccionar esta opción impide que los usuarios sobrescriban el archivo del repositorio por una versión más antigua de dicho archivo.",
		admin_ms_prompt_close_office: "Solicitar a los usuarios que incorporen los documentos cuando cierren las aplicaciones Office",
		admin_ms_prompt_close_office_hover_help: "Seleccionar esta opción impide que los usuarios olviden incorporar su trabajo.",
		admin_ms_add_with_entry_template_only: "Mostrar sólo la acción Añadir con plantilla",
		admin_ms_delete_local_on_add: "Suprimir archivos locales cuando los usuarios añaden documentos",
		admin_ms_delete_local_on_checkin: "Suprimir archivos locales cuando los usuarios incorporan documentos o cancelan extracción",
		admin_ms_delete_local_on_add_hover_help: "Cuando un usuario añade un documento en IBM Content Navigator para Microsoft Office, el documento se añade al repositorio y la copia local del documento permanece abierta para que los usuarios puedan extraer inmediatamente el documento para hacer cambios.<br /><br />Seleccione esta opción para cerrar y suprimir automáticamente la copia local del documento después de añadir el documento al repositorio.",
		admin_ms_delete_local_on_checkin_hover_help: "Cuando un usuario incorpora un documento en IBM Content Navigator para Microsoft Office, el documento se incorpora en el repositorio y la copia local del documento permanece abierta. Además, después de utilizar la acción Cancelar extracción, la copia local del documento permanece abierta. Con la copia local abierta, los usuarios pueden extraer el documento inmediatamente de nuevo para hacer cambios.<br /><br />Seleccione esta opción para cerrar y suprimir automáticamente la copia local del documento después de incorporar un documento, o de utilizar la acción Cancelar extracción.",
		admin_ms_delete_local_on_save: "Guardar un documento",
		admin_ms_prompt_for_props_on_add: "Solicitar a los usuarios que proporcionen valores de propiedad cuando añadan correos electrónicos al repositorio",
		admin_ms_prompt_for_props_on_add_hover_help: "Si no se selecciona esta opción, el cliente web utiliza la correlación de propiedades de Outlook que se haya definido para el repositorio.<br /><br />Si tiene plantillas de entrada asociadas con la carpeta a la que se añaden los correos electrónicos, puede que al usuario no se le soliciten propiedades.",
		admin_ms_delete_email_on_add: "Suprimir el correo electrónico del servidor de correo electrónico cuando ese correo electrónico se añada al repositorio",
		admin_ms_send_email_as_link_only: "Impedir que los usuarios envíen documentos como archivos adjuntos",
		admin_ms_send_email_as_link_only_hover_help: "Si se selecciona esta opción, los usuarios solo pueden enviar documentos como enlaces desde Outlook. Esta opción asegura que solo los usuarios que cuenten con los privilegios adecuados en el repositorio puedan ver los documentos.",
		admin_ms_enable_prop_mapping_for_add: "Correlacionar propiedades de Office con propiedades del repositorio cuando los usuarios añadan o incorporen documentos",
		admin_ms_checkout_document_after_add: "Extraer los documentos automáticamente una vez se han añadido al repositorio",
		admin_no_default_document_type_filtering: "Devolver todos los tipos de documentos de forma predeterminada cuando los usuarios ejecutan búsquedas",
		admin_no_default_document_type_filtering_hover_help: "En IBM Content Navigator for Microsoft Office, el comportamiento predeterminado es que los usuarios sólo ven el tipo de documento para la aplicación actual cuando ejecutan búsquedas. Por ejemplo, el tipo de documento Word está seleccionado de forma predeterminada cuando se realizan búsquedas desde Microsoft Word.<br/><br/>Sin embargo, al seleccionar esta opción se borra el recuadro de selección Tipos de documento de modo que los usuarios ven todos los documentos que devuelve una búsqueda. Los usuarios pueden sustituir este valor seleccionando uno o varios tipos de documentos antes de ejecutar búsquedas.",
		admin_ms_enable_prop_mapping_for_add_hover_help: "Especificar si correlacionar las propiedades del documento definidas para documentos de Microsoft Office con propiedades definidas en el repositorio.<br /></br /><b>Importante:</b> si se habilita esta característica, es necesario configurar las propiedades de Office para cada repositorio del entorno. Si no correlaciona propiedades de Office con propiedades de su repositorio, esta característica no funcionará.<br /><br />Este valor no se aplica a Microsoft Outlook.",
		admin_ms_checkout_document_after_add_hover_help: "Seleccione esta opción para reducir el número de pasos que debe dar un usuario para trabajar con documentos después de que los documentos se añaden al repositorio.<br /></br /><b>Sugerencia:</b> para asegurarse de que los usuarios incorporan de nuevo los archivos al repositorio, seleccione <b>Solicitar a los usuarios incorporar documentos cuando cierran aplicaciones Office</b>.",
		admin_ms_show_details_recently_used: "Mostrar detalles del Elemento <b>utilizado recientemente</b>",
		admin_ms_show_details_recently_used_hover_help: "De forma predeterminada, cuando visualiza la lista de los Elementos utilizados recientemente, los detalles de los elementos se ocultan para poder mostrar más elementos. Cuando selecciona esta opción, en la lista de los Elementos utilizados recientemente, se muestran los detalles del primer documento en el panel de detalles de forma predeterminada.",
		admin_ms_show_no_permissions_warning: "Muestre avisos cuando los usuarios editan propiedades o incorporen un documento peor no tienen permiso para ver la plantilla de entrada del documento",
		admin_ms_show_no_permissions_warning_hover_help: "Si se ha creado un documento en el repositorio utilizando una plantilla de entrada, pero el usuario no tiene permiso para ver la plantilla de entrada del documento, la plantilla de entrada no se recupera.<br /><br/>Así, cuando el usuario edita las propiedades del documento, éstas se visualizan sin utilizar la plantilla de entrada. Y, cuando el usuario incorpora el documento, éste se incorpora sin utilizar la plantilla de entrada.<br /><br />De forma predeterminada, estas acciones tienen lugar sin informar al usuario de que la plantilla de entrada no se está utilizando. Únicamente, se registra un aviso en el archivo de registro.<br /><br />Seleccione esta opción si desea visualizar avisos que informan inmediatamente al usuario cuando la plantilla de entrada no se está utilizando.",
		admin_ms_hide_search_actions: "Contraer sección de filtros de búsqueda",
		admin_ms_hide_search_actions_hover_help: "De forma predeterminada, los usuarios pueden aplicar un filtro de acción para especificar una acción, un usuario o grupo de usuarios y seleccionar una fecha o rango de fechas en que se ha producido la acción. Por ejemplo, puede buscar sólo documentos que ha añadido durante el último mes.<br /><br />Si no desea permitir a los usuarios aplicar filtros de acción, seleccione esta opción para ocultar los filtros de acción y reducir el número de campos que se visualizan al definir los criterios de búsqueda.",
		admin_ms_hide_save_document: "Oculte la opción <b>Guardar</b> en la barra de cinta",
		admin_ms_hide_save_document_hover_help: "Utilizando la opción <b>Guardar</b>, los usuarios pueden guardar cambios de documento en el repositorio sin incorporar el documento.",
		admin_ms_indicate_managed_email_on_add: "Indique si ya se ha añadido un correo electrónico al repositorio",
		admin_ms_indicate_managed_email_on_add_hover_help: "Si se selecciona esta opción, los usuarios podrán saber que ya hay un correo electrónico en el repositorio, lo que puede reducir el número de veces que se añade un correo electrónico al repositorio.  Cuando esta opción está seleccionada, se crea una nueva categoría de color denominada IBM ECM en Microsoft Outlook. Cualquier correo electrónico que se añade al repositorio se añade automáticamente a Gestionados en la categoría IBM ECM.",
		admin_ms_edit_group_add_command_configuration: "Añadir opciones en el grupo Editar:",
		admin_ms_edit_group_add_command_configuration_hover_help: "Especifique las opciones <b>Añadir</b> que están disponibles desde el grupo <b>Editar</b> de la barra de banda:<ul><li>Seleccione <b>Mostrar todas las opciones Añadir</b> para mostrar el botón Añadir y todas las acciones Añadir que están disponibles en el grupo Editar.</li><li>Seleccione <b>Ocultar todas las opciones Añadir</b> para impedir que los usuarios añadan documentos al repositorio o si desea que los usuarios sólo añadan documentos desde dentro de un espacio de equipo.</li><li>Seleccione <b>Ocultar la acción Añadir con plantilla</b> si desea imponer asociaciones de carpetas de plantillas de entrada y evitar que los usuarios seleccionen otra plantilla de entrada.</li><li>Seleccione <b>Mostrar sólo la acción Añadir con plantilla</b> si desea obligar a los usuarios a que añadan documentos utilizando plantillas de entrada.</li></ul>",
		admin_ms_show_edit_group_add_button: "Mostrar todas las opciones Añadir (valor predeterminado)",
		admin_ms_hide_edit_group_add_button: "Ocultar todas las opciones Añadir",
		admin_ms_hide_add_with_entry_template: "Ocultar la acción Añadir con plantilla",
		admin_ms_managed_in_ecm: "Gestionado en IBM ECM",
		admin_ms_managed_in_ecm_hover_help: "Si los usuarios visualizan categorías en Microsoft Outlook, esta etiqueta se muestra para el correo electrónico que se ha añadido a un repositorio de IBM Content Manager o IBM FileNet Content Manager.",
		admin_ms_managed_in_ibm_ecm_input_invalid: "El nombre de la categoría Gestionado en IBM ECM no puede contener una coma (,) ni un punto y coma (;).",
		admin_delete_open_docs_after_close: "Suprimir automáticamente los documentos abiertos cuando los usuarios cierran los documentos",
		admin_admin_delete_open_docs_after_close_hover_help: "Cuando un usuario abre un documento en IBM Content Navigator for Microsoft Office, el documento se descarga en el directorio de documentos del usuario o en la ubicación especificada por los valores de seguimiento de archivos del escritorio.<br><br>Seleccione esta opción para suprimir los archivos que están abiertos pero que no se han extraído cuando los usuarios cierran los documentos. El hecho de seleccionar esta opción le permite:<ul><li>Imponer la conformidad con políticas de IT</li><li>Asegurarse de que los usuarios trabajan con las versiones más recientes de los documentos</li><li>Reducir la cantidad de espacio de disco que se utiliza para almacenar documentos</li><ul>",
		admin_ms_custom_command_configuration: "Mandatos personalizados:",
		admin_ms_custom_command_configuration_hover_help: "Puede añadir hasta cuatro mandatos a la barra de herramientas de IBM Content Navigator for Microsoft Office en las aplicaciones de Microsoft Office. Los mandatos se pueden utilizar para abrir URL. Por ejemplo, puede añadir un mandato para abrir un servicio que se puede utilizar para buscar usuarios y grupos.",
		admin_ms_custom_command_dialog_title: "Mandato personalizado Editar",
		admin_ms_custom_command_dialog_intro_text: "Defina un mandato que se pueda utilizar para abrir un URL desde la barra de herramientas de IBM Content Navigator for Microsoft Office en las aplicaciones de Microsoft Office.",
		admin_ms_custom_command_id: "Mandato ${0}",
		admin_ms_custom_command_available_label: "Disponible",
		admin_ms_custom_command_available_hover_help: "Si el URL que definido para un mandato debe colocarse fuera de línea para su mantenimiento, puede eliminar la marca del recuadro de selección para el mandato de forma que el mandato no se visualice en Microsoft Office.<br/><br/><b>Importante:</b> los usuarios deben finalizar la sesión del escritorio para que los cambios queden reflejados en IBM Content Navigator for Microsoft Office.",
		admin_ms_custom_command_command_id_label: "ID de mandato",
		admin_ms_custom_command_id_label: "ID",
		admin_ms_custom_command_label_label: "Etiqueta",
		admin_ms_custom_command_label_hover_help: "Especifique la etiqueta que se mostrará para el mandato en Microsoft Office.",
		admin_ms_custom_command_description_label: "Descripción",
		admin_ms_custom_command_description_hover_help: "Especifique la descripción que se mostrará para el mandato en Microsoft Office.",
		admin_ms_custom_command_url_label: "URL",
		admin_ms_custom_command_url_hover_help: "Especifique el URL completo para abrir de Microsoft Office. El URL puede ser una página web o un servicio.",
		admin_ms_custom_command_icon_label: "Icono",
		admin_ms_custom_command_icon_hover_help: "Especifique el nombre de archivo del icono para visualizar, por ejemplo, CommandIcon.png.<br/><br/><b>Importante:</b> debe añadir el archivo del icono al subdirectorio Plugins del directorio de instalación de IBM Content Navigator for Microsoft Office en cada máquina cliente.<br/><br/>Si el archivo de icono no está en el directorio Plugins, o si no especifica ningún icono, se muestra el icono predeterminado, customButtonIcon_38.gif-",
		admin_ms_custom_command_group_name: "Etiqueta de grupo:",
		admin_ms_custom_command_group_name_hover_help: "Puede especificar una etiqueta de grupo que se mostrará bajo los mandatos personalizados en la barra de banda.<br/><br/>Si no especifica ninguna etiqueta, la etiqueta del grupo es <b>Mandatos personalizados</b>.",
		admin_ms_ribbon_tab_label: "Etiqueta de separador de IBM ECM:",
		admin_ms_ribbon_tab_hover_help: "Especifique el nombre que desea visualizar para el separador Content Navigator IBM for Microsoft Office en la barra de banda de Microsoft Office. Si no especifica un nombre, el separador se denomina “IBM ECM\".",
		admin_ms_close_task_pane_on_open: "Cerrar el panel de tareas cuando los usuarios abran documentos",
		admin_ms_close_task_pane_on_open_hover_help: "Seleccione esta opción si desea maximizar el espacio en el que los usuarios pueden ver los documentos en Microsoft Office.<br/><br/>Usuarios de Microsoft Office 2010: para asegurarse de que el panel de tareas esté cerrado para todos los documentos, habilite la modalidad de interfaz de varios documentos (MDI) pulsando <b>Opciones</b> &gt; <b>Avanzadas</b> y quitando la marca de la opción <b>Mostrar todas las ventanas en la barra de tareas</b>.",
		admin_ms_open_document_options: "Opciones de Abrir documento:",
		admin_ms_delete_local_file_options: "Opciones de Suprimir archivo local:",
		admin_ms_add_and_checkin_options: "Opciones de adición e incorporación:",
		admin_ms_search_options: "Opciones de búsqueda:",
		admin_ms_display_options: "Opciones de visualización:",
		admin_ms_bidirection_enable_label: "Habilitar soporte para texto bidireccional",
		admin_ms_bidirection_enable_hover_help: "Seleccione esta opción si desea permitir que los usuarios escriban o visualicen texto en IBM Content Navigator for Microsoft Office en una dirección que no sea de izquierda a derecha.",
		admin_ms_text_direction_label: "Dirección de texto base para contenido:",
		admin_ms_text_direction_hover_help: "Especifique la dirección en la que se escribe el texto en los campos de entrada en IBM Content Navigator for Microsoft Office. Este valor también controla cómo se visualizan elementos, como los nombres de carpeta o los valores de propiedad.",
		admin_ms_control_threshold_label: "Número mínimo de elementos para habilitar la anticipación:",
		admin_ms_control_threshold_hover_help: "De manera predeterminada, la anticipación se habilita cuando el número de elementos es superior o igual a 50, para buscar o definir propiedades con valores predefinidos en una lista desplegable. Puede cambiar el valor mínimo.",

		admin_ms_default_email_class: "Clase que se va a utilizar al añadir correo electrónico",
		admin_ms_default_email_class_hover_help: "Cualquier correo electrónico que se añada a este repositorio desde Microsoft Outlook se añadirá a la clase que especifique. Los usuarios no pueden cambiar la clase.",
		admin_ms_default_folder_class: "Clase que se va a utilizar al crear carpetas",
		admin_ms_default_folder_class_hover_help: "Cualquier carpeta que se cree en este repositorio desde una aplicación de Microsoft Office se añadirá a la clase que especifique.  Los usuarios no pueden cambiar la clase.",
		admin_ms_default_folder_warn_title: "No puede utilizar la clase ${0} como la clase para crear carpetas.",
		admin_ms_default_folder_warn_name_prop_invalid: "La propiedad de nombre de la clase no es una cadena y el nombre de la carpeta debe ser una cadena.<br />Seleccione una clase diferente cuando cree carpetas o consulte al administrador de IBM Content Manager para cambiar el nombre de la clase por una cadena.",
		admin_ms_default_folder_warn_req_props: "La clase incluye propiedades necesarias que no tienen valores. Sin embargo, los usuarios no pueden especificar los valores para las propiedades necesarias cuando crean carpetas desde IBM Content Navigator para Microsoft Office.<br />Seleccione una clase diferente cuando cree carpetas o consulte al administrador de IBM Content Manager para que las propiedades necesarias sean opcionales o para rellenar previamente las propiedades necesarias con un valor.",
		admin_ms_delimiter_for_office_properties: "Delimitador para propiedades de serie de valores múltiples",
		admin_ms_delimiter_for_office_properties_hover_help: "Especifique un carácter para utilizarlo como delimitador para propiedades de serie que correlacione con propiedades de serie de valor múltiple. De manera predeterminada, puede asignar un conjunto de valores a una propiedad de serie de valor múltiple utilizando punto y coma (;) como delimitador para separar los valores. No obstante, si uno de sus valores de serie incluye un punto y coma, no podrá añadir ese valor de serie a menos que se cambie el delimitador por un carácter diferente. Por ejemplo, puede cambiar el delimitador por una coma (,)",
		admin_ms_outlookPropertyRemembrance : "Recordar los parámetros al añadir mensajes y archivos adjuntos",
		admin_ms_outlookPropertyRemembrance_hover_help : "Los valores de propiedad, ubicación, selección de clase y seguridad que están asignados a los mensajes y archivos adjuntos se recuerdan y se utilizarán como parámetros predeterminados cuando se añadan futuros elementos.",

		admin_file_type_name_hover_help: "Ayuda contextual de nombre",
		admin_file_type_description_hover_help: "Ayuda contextual de descripción",
		admin_file_type_dialog_title: "Editar filtro de tipo de archivo",
		admin_new_file_type_dialog_title: "Nuevo filtro de tipo de archivo",
		admin_mobile_feature_dialog_title: "Característica",
		admin_mobile_feature_dialog_new_title: "Nueva característica",
		admin_file_type_instructions: "Cree un filtro que los usuarios puedan utilizar para reducir la lista de resultados de búsqueda. Puede correlacionar varios tipos MIME al filtro.",
		admin_file_type_filter_place_holder: "Filtrar tipos MIME",
		admin_new_button_label: "Nuevo",
		admin_edit_button_label: "Editar",
		admin_delete_button_label: "Suprimir",
		admin_copy_button_label: "Copiar",
		admin_verify_button_label: "Verificar",
		admin_availabe_filters_label: "Filtros disponibles",
		admin_selected_filters_label: "Filtros seleccionados",

		admin_mobile_access: "Acceso de aplicación móvil:",
		admin_mobile_access_hover_help: "Si desea utilizar IBM Content Navigator desde un dispositivo móvil, se recomienda permitir a los usuarios acceder a este escritorio desde la aplicación móvil.<br /><br />Si inhabilita el acceso a este escritorio desde la aplicación móvil, los usuarios aún pueden acceder al cliente web desde los navegadores móviles. Sin embargo, el cliente web no se ha diseñado para que se acceda a él desde dispositivos móviles.",

		admin_mobile_access_allow_label: "Permitir a los usuarios:",
		admin_mobile_allow_add_photos: "Añadir fotos desde la cámara y la biblioteca de fotos",
		admin_mobile_allow_add_docs: "Añadir documentos y crear carpetas en el repositorio",
		admin_mobile_allow_open_docs: "Abrir documentos en otras aplicaciones",
		admin_mobile_allow_add_docs_hover_help: "Los usuarios pueden crear carpetas o añadir documentos desde otras aplicaciones móviles, como un documento que esté adjunto a un correo electrónico.",
		admin_mobile_allow_open_docs_hover_help: "Se solicita a los usuarios que seleccionen la aplicación que utilizar para ver el documento seleccionado. Si solo hay disponible una aplicación, se utiliza dicha aplicación.",
		admin_mobile_features: "Características:",
		admin_mobile_features_hover_help: "Especifique qué características de este escritorio se visualizan en la aplicación móvil de IBM Content Navigator.",
		admin_mobile_new_feature_button_label: "Nueva característica",
		admin_mobile_move_up_button_label: "Subir",
		admin_mobile_move_down_button_label: "Bajar",
		admin_desktop_mobile_instructions: "Aquí va la instrucción sobre valores móviles",
		admin_desktop_max_number_of_docs_to_add: "Número máximo de documentos que se pueden añadir:",
		admin_desktop_max_number_of_docs_to_add_hover_help: "Especifique el número máximo de documentos que los usuarios pueden añadir de una sola vez. El máximo predeterminado es de 50. Sin embargo, puede definir el máximo hasta 300.",
		admin_desktop_max_number_of_docs_to_modify: "Número máximo de elementos que se pueden modificar:",
		admin_desktop_max_number_of_docs_to_modify_hover_help: "Especifique el número máximo de elementos que los usuarios pueden modificar de una sola vez. El máximo predeterminado es de 50. Sin embargo, puede definir el máximo hasta 300.",
		admin_desktop_max_conversion_size: "Cantidad máxima de datos para las conversiones de PDF (en MB):",
		admin_desktop_max_conversion_size_hover_help: "<b>Restricción:</b> este valor no está soportado en IBM Content Manager OnDemand.<br/><br/>Especifique la cantidad máxima de datos que se puede convertir a PDF. Este límite se aplica cuando los usuarios descargan elementos como archivos PDF o envían elementos a través de correo electrónico como archivos PDF.<br /><br />Si no se puede determinar el tamaño de cada documento, aún así los documentos se convierten a PDF.<br/><br/>El límite predeterminado es 200 MB. Si se establece el límite por encima de 200 MB, esto podría afectar al rendimiento del sistema.",
		admin_desktop_timeProperties: "Indicación de fecha y hora:",
		admin_desktop_time_properties_hover_help: "<b>Solo usuarios de IBM FileNet P8:</b> este valor se aplica a las propiedades personalizadas y no se aplica a las propiedades del sistema. Por ejemplo, la propiedad Modificado por aún mostrará la parte de la hora de la indicación de fecha y hora si se selecciona <b>Mostrar solo la parte de la fecha de la indicación de fecha y hora</b>.<br/><br/>Este valor no cambia la indicación de fecha y hora en el repositorio.",
		admin_desktop_disable_time_stamp: "Mostrar la indicación de fecha y hora completa",
		admin_desktop_enable_time_stamp: "Visualizar solo la parte de la fecha de la indicación de fecha y hora",
		admin_desktop_timezone: "Huso horario:",
		admin_desktop_timezone_localuser: "Mostrar el huso horario local del usuario",
		admin_desktop_timezone_alluser: "Mostrar el mismo huso horario para todos los usuarios",
		admin_desktop_timezone_hover_help: "Puede especificar si los usuarios ven una indicación de fecha y hora basada en el huso horario local o si todos los usuarios ven la misma indicación de fecha y hora.<br/><br/>Este valor no cambia la indicación de fecha y hora en el repositorio. Sin embargo, el valor que selecciona determina el huso horario que se utiliza para crear la indicación de fecha y hora en el repositorio cuando los usuarios añaden o modifican elementos.",
		admin_desktop_mobile_feature_display_label: "Mostrar",
		admin_desktop_mobile_feature_icon_file_label: "Archivo de icono",
		admin_mobile_feature_dialog_icon_file_label: "Archivo de icono:",
		admin_mobile_feature_dialog_url_label: "URL:",
		admin_desktop_mobile_feature_name_label: "Nombre",
		admin_desktop_mobile_select_feature_label: "Seleccionar característica",
		admin_desktop_mobile_feature_icon_label: "Icono de característica",
		admin_desktop_share_admin_none: "Administrador no definido.",
		admin_desktop_share_admin_edit_label: "Definir administrador...",
		admin_browse_icon: "Icono Examinar",
		admin_search_icon: "Icono Buscar",
		admin_favorites_icon: "Icono favoritos",
		admin_casesearch_icon: "Icono de caso",
		admin_datacap_icon: "Icono Datacap",
		admin_system_defined: "Definido por el sistema",
		admin_icon_file_placeholder_text: "Ubicación de archivo (por ejemplo, http://icons.com/image.bmp)",
		admin_url_placeholder_text: "http://",
		admin_folder_root: "Raíz",
		admin_folder_default: "Predeterminado",
		// Admin strings for the global toolbars and context menus
		//
		admin_menu_toolbars: "Barras de herramientas",
		admin_menu_context_menus: "Menús contextuales",
		admin_menu_office_toolbars: "Mandatos de la barra de cinta de Microsoft Office",
		admin_menu_office_menus: "Menús contextuales de Microsoft Office",

		admin_file_name_label: "Nombre de archivo:",
		admin_exportconfiguration_security_label: "Incluir usuarios y grupos con autorización para utilizar este escritorio",
		admin_exportconfiguration_instruction: "Puede exportar los escritorios, incluidas las configuraciones del repositorio y las configuraciones de plug-ins que estén asociadas a los escritorios seleccionados, a un archivo que puede importar a otra instancia de IBM Content Navigator.",
		admin_exportconfiguration_dialog_label: "Exportar escritorio",
		admin_exportconfiguration_button_label: "Exportar",
		admin_dialog_select_all: "Seleccionar todo",
		admin_dialog_deselect_all: "Borrar todo",

		admin_importconfiguration_instruction: "Los elementos del archivo de configuración seleccionado se importarán a este sistema. Sin embargo, si ya existe un elemento con el mismo ID en el sistema, debe decidir si conserva o sobrescribe el elemento.",
		admin_importconfiguration_dialog_label: "Importar escritorio",
		admin_importconfiguration_reason_dialog_label: "Importar razones de redacción",
		admin_importconfiguration_button_label: "Importar",
		admin_to_be_imported: "Elemento de configuración para importar",
		admin_on_target_system: "Elemento existente en el sistema de destino",
		admin_import_short_warning_message: "Los siguientes elementos ya existen en este sistema. Seleccione los elementos que desea sustituir en este sistema:",
		admin_import_warning_message: "Los siguientes elementos de configuración tienen los mismos ID que los elementos que existen en el sistema de destino. Seleccione solo aquellos elementos que desee importar y sobrescribir en el sistema de destino.<br /><br />Si no desea sobrescribir un elemento de configuración, cree una copia del elemento en la instancia desde la que ha exportado el escritorio, asígnele un ID diferente y asócielo al escritorio. Vuelva a exportar el escritorio y, a continuación, importe el escritorio en esta instancia.",
		admin_choose_file_to_import_label: "Elegir archivo para importar:",
		admin_download_imported_log: "Descargar informe",
		admin_desktop_import_summary: "Resumen de importación del escritorio",
		admin_reason_import_summary: "Resumen de importación de la razón de redacción",
		admin_rba_import_summary: "Resumen de importación de roles de administración",
		admin_import_open_tabs_checking: "Para poder importar escritorios, debe cerrar todas las pestañas excepto la pestaña <bold>Escritorios</bold> en la herramienta de administración.",
		admin_import_no_conflict: "Se importarán los elementos siguientes:",
		admin_desktop_invalid: "Escritorio no válido",
		admin_desktop_warning: "El escritorio se ha guardado con avisos.",
		admin_repos_warning: "El repositorio se ha guardado con avisos.",
		admin_config_type_icon: "Icono de tipo de elemento de configuración",

		admin_approval_workflow: "Flujo de trabajo de aprobación",
		admin_approval_workflow_hover: "Permite a los usuarios iniciar un flujo de trabajo de aprobación predefinido. El flujo de trabajo de aprobación se puede inhabilitar para permitir a los usuario iniciar un flujo de trabajo de aprobación personalizado que se defina mediante una suscripción. De forma predeterminada, el flujo de trabajo de aprobación está habilitado.<br><br><b>Importante:</b> Si se habilita el flujo de trabajo de aprobación, también debe asegurarse de que una o ambas definiciones de flujo de trabajo predefinidas (ICNParallelDocumentApproval.pep y ICNSequentialDocumentApproval.pep) se hayan añadido al repositorio y se hayan transferido al Content Process Engine.",

		admin_cannot_add_desktop_members_error: "No puede especificar los usuarios y grupos de usuarios que tienen acceso a este escritorio.",
		admin_cannot_add_desktop_members_error_explanation: "No dispone de los permisos adecuados para recuperar información de usuarios y grupos.",
		admin_cannot_add_desktop_members_error_userResponse: "Inicie sesión con un nombre de usuario diferente o solicite al administrador del sistema IBM Content Manager que le conceda el privilegio UserACLOwner, el cual es necesario para recuperar información de usuarios y grupos.",
		admin_cannot_add_desktop_members_error_number: 2079,

		admin_cannot_select_users_groups_error: "No puede seleccionar usuarios y grupos.",
		admin_cannot_select_users_groups_error_explanation: "No dispone de los permisos adecuados para recuperar información de usuarios y grupos.",
		admin_cannot_select_users_groups_error_userResponse: "Inicie sesión con un nombre de usuario diferente o solicite al administrador del sistema IBM Content Manager que le conceda el privilegio UserACLOwner, el cual es necesario para recuperar información de usuarios y grupos.",
		admin_cannot_select_users_groups_error_number: 2080,

		oauth_client_not_found_error: "No se ha encontrado el cliente OAuth2.",
		oauth_client_not_found_error_explanation: "El ID de cliente OAuth2 ${0} no se ha encontrado.",
		oauth_client_not_found_error_userResponse: "Póngase en contacto con el administrador de su sistema y hágale saber que no se ha encontrado el ID de cliente OAuth2.",
		oauth_client_not_found_error_adminResponse: "Revise la configuración del repositorio y compruebe si contiene el ID de cliente OAuth2 correcto.",
		oauth_client_not_found_error_number: 2081,
		oauth_client_not_found_error_0: "id_cliente",

		oauth_login_failed_error: "Error en el inicio de sesión del repositorio.",
		oauth_login_failed_error_explanation: "Se ha producido un error al intentar iniciar sesión en el repositorio ${0}.",
		oauth_login_failed_error_userResponse: "Compruebe si el id de usuario y la contraseña especificados son correctos e intente iniciar sesión de nuevo.",
		oauth_login_failed_error_number: 2082,
		oauth_login_failed_error_0: "repository_id",

		oauth_error_return_error: "Se ha producido un error al intentar iniciar sesión en ${0}.",
		oauth_error_return_error_explanation: "El intento de autorización ${0} ha fallado.",
		oauth_error_return_error_userResponse: "Póngase en contacto con el administrador del sistema con la siguiente información: El intento de autorización ${0} ha fallado y se la devuelto el siguiente mensaje de error: <br>${1}<br><b>error:</b> ${2}.<br><b>descripción:</b> ${3}.",
		oauth_error_return_error_adminResponse: "Encontrará más información sobre el error en los archivos de registro del servidor de aplicaciones web.  Para obtener más información sobre los archivos de registro, consulte &quot;Archivos de registro de IBM Content Navigator&quot; en IBM Knowledge Center. Utilizando la información sobre el intento de autorización ${0}, intente solucionar el problema y compruebe si OAuth2 está habilitado.",
		oauth_error_return_error_number: 2083,
		oauth_error_return_error_0: "Aplicación de destino OAuth",
		oauth_error_return_error_1: "mensaje_error",
		oauth_error_return_error_2: "error",
		oauth_error_return_error_3: "error_description",

		oauth_error_unknown: "Mensaje de error de OAuth no reconocido.",

		delete_share_permission_error: "La compartición no se ha suprimido.",
		delete_share_permission_error_explanation: "No dispone de los permisos adecuados para suprimir la compartición.",
		delete_share_permission_error_number: 2084,

		class_not_support_share_error: "No puede compartir este elemento.",
		class_not_support_share_error_explanation: "La clase ${0} no se ha definido para soportar la compartición.",
		class_not_support_share_error_0: "class_name",
		class_not_support_share_error_number: 2086,
		rbr_not_support_share_error: "No puede compartir este elemento.",
		rbr_not_support_share_error_explanation: "Se ha añadido contenido sensible al elemento.",
		rbr_not_support_share_error_number: 2085,

		box_oauth_error_server_error: "El dispositivo desde el que el usuario intenta iniciar sesión no tiene autorización para acceder a la cuenta de usuario.",
		box_oauth_error_invalid_request: "La solicitud no dispone del parámetro necesario, incluye un valor de parámetro no válido, incluye el mismo parámetro más de una vez o no está bien formado.",
		box_oauth_error_unsupported_response_type: "El servidor de autorización no tiene soporte para la obtención de un código de autorización mediante este método.  Compruebe el valor del parámetro de código de su solicitud.",
		box_oauth_error_access_denied: "El propietario de recurso o servidor de autorización ha denegado la solicitud.",
		box_oauth_error_temporarily_unavailable: "Su dispositivo se está viendo limitado, debe disminuir el índice de solicitudes de autorización o esperar un poco.",
		box_oauth_error_unknown: "Mensaje de error de Box no reconocido.",

		admin_default_search_type: "Tipo de búsqueda predeterminada",
		admin_default_search_type_hover: "Especifique la opción que se selecciona de forma predeterminada en el campo <b>Buscar</b> del menú <b>Opciones de búsqueda</b>.",
		admin_default_search_type_documents: "Documentos",
		admin_default_search_type_folders: "Carpetas",
		admin_default_search_type_folders_and_documents: "Documentos y carpetas",

		admin_restricted_search_type: "Permitir búsqueda",
		admin_restricted_search_type_hover: "De forma predeterminada, los usuarios pueden realizar búsquedas tanto en documentos como en carpetas. Si desea ocultar la opción Buscar en y limitar las búsquedas únicamente a los documentos, seleccione Documentos y elimine la selección de Carpetas.</br>,</br> Si permite la búsqueda tanto en documentos como en carpetas, seleccione la opción predeterminada para visualizar cuándo se abre el panel de búsqueda.",
		admin_restricted_search_type_documents: "Documentos",
		admin_restricted_search_type_folders: "Carpetas",
		admin_restricted_search_type_folders_and_documents: "Documentos y carpetas",

		admin_default_search_version: "Versión de búsqueda predeterminada",
		admin_default_search_version_hover: "Especifique la opción que se selecciona de forma predeterminada en el campo <b>Versión</b> del menú <b>Opciones de búsqueda</b>.",

		admin_all_classes_search: "Buscar en todas las clases",
		admin_all_classes_search_hover: "Especifique si se permite a los usuarios buscar en todas las clases, y en caso afirmativo, qué debe incluirse en las búsquedas de documentos.",
		admin_all_classes_search_removed_hover: "Las opciones para buscar en todas las clases no están disponibles porque el parámetro context-param allPseudoClassHidden en la aplicación Navigator web.xml está establecido en verdadero.",
		admin_all_classes_search_hide: "Elimine la opción para buscar en todas las clases",
		admin_all_classes_search_documents_only_documents: "Una búsqueda de documentos incluye sólo documentos, búsquedas guardadas y plantillas de entrada",
		admin_all_classes_search_documents_non_folders: "Una búsqueda de documentos incluye los elementos que no son carpetas",

		// Admin feature configuration:
		admin_feature_config_tree_view_label: "Vista de árbol:",
		admin_feature_config_tree_view_hoverhelp: "Especifique si los usuarios pueden acceder a la lista de carpetas del repositorio mediante el panel Examinar. Si oculta el panel Examinar, los usuarios deben utilizar la lista de contenido para navegar a las carpetas del repositorio.",
		admin_feature_config_selected_repositories_label: "Repositorios:",
		admin_feature_config_selected_repositories_hoverhelp: "Seleccione los repositorios a los que los usuarios pueden acceder en esta característica",
		admin_feature_config_selected_repositories_select_state_hdr: "Seleccionar repositorio",
		admin_feature_config_selected_repositories_name_hdr: "Nombre de repositorio",
		admin_feature_config_selected_repositories_show_hdr: "Mostrar",
		admin_feature_config_invalid_icon_title: "A la característica le faltan algunos valores obligatorios",
		admin_feature_config_view_select_hdr: "Seleccionar vista",
		admin_feature_config_view_hdr: "Ver",
		admin_feature_config_view: "Ver",
		admin_feature_config_views: "Vistas:",
		admin_feature_config_views_hoverhelp: "Especifique qué vistas puede aplicar a la lista de contenido. Las vistas se muestran en el orden en el que se listan. La primera vista seleccionada es la vista predeterminada para la característica.<br><br><b>Importante:</b> si habilita la vista Tira de imágenes, debe configurar el visor de conversión HTML para ver vistas previas de documentos.",

		admin_custom_dialog_name: "Nombre:",
		admin_custom_dialog_value: "Valor:",
		admin_custom_setting_name_hover: "Especifique el nombre del valor de Daeja ViewONE que desea añadir a la configuración. Consulte la documentación de Daeja ViewONE para obtener más información sobre los valores de configuración.",
		admin_custom_setting_value_hover: "Especifique el valor que desee utilizar para el valor de configuración de Daeja ViewONE. Consulte la documentación de Daeja ViewONE para obtener más información sobre los valores válidos para el valor de configuración.",

		entry_template_name_required_message: "El campo de nombre es obligatorio en los valores de plantilla de entrada.",
		entry_template_name_invalid_message: "El campo de nombre de Valores de plantilla de entrada no puede contener los siguientes caracteres: *\\/: ? \" < > |.",
		entry_template_save_in_member_empty_message: "Cuando se seleccionan usuarios y grupos específicos para el campo Compartir con en Valores de plantilla de entrada, se debe especificar al menos un usuario o grupo.",
		entry_template_no_permission_to_save_to_teamspace_message: "No tiene permiso para añadir plantillas de entrada al espacio de equipo (${0}), que se ha seleccionado en la opción Guardar en de Valores de plantilla de entrada.",
		entry_template_save_in_destination_required_message: "Debe especificar una ubicación donde guardar predeterminada en la sección <b>Establecer la ubicación del almacenamiento del elemento</b>.",
		entry_template_save_in_destination_must_select_folder: "Si oculta el campo <b>Guardar en</b> y requiere que los usuarios añadan elementos nuevos a una carpeta, debe seleccionar una carpeta en el campo <b>Ubicación para guardar predeterminada</b> en la sección <b>Establecer la ubicación del almacenamiento del elemento</b>.",
		entry_template_what_to_save_required_message: "Seleccione al menos una opción correspondiente a lo que desea guardar en Establecer opciones.",
		entry_template_custom_workflow_empty_message: "Si selecciona <b>Flujo de trabajo personalizado...</b>, debe buscar y seleccionar el flujo de trabajo que desee utilizar.",

		entry_template_new: "Nueva plantilla de entrada",
		entry_template_name_hover: "El nombre de la plantilla de entrada no puede contener los siguientes caracteres: *\\/: ? \" < > |",
		entry_template_name_invalid: "El nombre de la plantilla de entrada no puede contener ninguno de los siguientes caracteres: *\\/: ? \" < > |",
		entry_template_description_hover: "Proporcione una descripción que permita a los usuarios distinguir entre esta plantilla de entrada y las otras plantillas de entrada.",
		entry_tempalte_save_in_hover: "Especifique dónde guardar la plantilla de entrada.<br><br><b>Restricción:</b> si guarda la plantilla de entrada en un espacio de equipo, solo puede utilizar la plantilla de entrada en el espacio de equipo.",
		entry_template_inherit_hover: "Si selecciona esta opción, a configuración de seguridad para la carpeta padre se añade a la lista de usuarios y grupos con quienes se comparte la plantilla de entrada.",
		entry_template_builder_aria_label: "Programa de creación de plantillas de entrada",
		entry_template_builder_layout_aria_label: "Programa de creación de propiedades de plantillas de entrada",

		entry_template_settings_document: "Definir la plantilla de entrada",
		entry_template_settings_folder: "Establecer la ubicación del almacenamiento del elemento",
		entry_template_settings_folder_intro: "Especifique dónde se almacenan los elementos que se han añadido utilizando esta plantilla de entrada.",
		entry_template_settings_properties: "Establecer las propiedades del elemento",
		entry_template_settings_properties_intro: "Puede especificar valores predeterminados o predefinidos para los elementos que se han añadido utilizando esta plantilla de entrada. Además, puede cambiar el diseño de las propiedades para controlar qué propiedades se visualizan y en qué orden.",
		entry_template_settings_workflow: "Configurar un flujo de trabajo para el elemento",
		entty_template_settings_workflow_intro: "Puede especificar si un flujo de trabajo se inicia cuando se añaden elementos mediante la plantilla de entrada.",
		entry_template_settings_security: "Establecer la seguridad del elemento",
		entry_template_settings_security_intro: "Puede especificar seguridad predeterminada o predefinida para los elementos que se han añadido utilizando esta plantilla de entrada. Los usuarios con los permisos adecuados pueden cambiar la seguridad del elemento una vez añadido.",
		entry_template_settings_options: "Establecer opciones para el elemento",
		entry_template_xt_warning: "Si se guardan los cambios en esta plantilla de entrada, pasará de ser una plantilla de entrada de Workplace XT en una plantilla de entrada de Navigator. IBM Workplace XT no da soporte a plantillas de entrada de IBM Content Navigator.",

		entry_template_properties_edit_layout: "Editar diseño...",
		entry_template_properties_read_only: "Sólo lectura",
		entry_template_properties_hidden: "Oculto",

		entry_template_destination_show: "Mostrar el campo <b>Guardar en</b>",
		entry_template_destination_show_hover: "Si muestra el campo <b>Guardar en</b>, los usuarios pueden cambiar el lugar donde se almacenan los elementos.",
		entry_template_destination_hide: "Ocultar el campo <b>Guardar en</b>",
		entry_template_destination_hide_hover: "Si oculta el campo <b>Guardar en</b>, los usuarios no pueden cambiar el lugar donde se almacenan los elementos.",
		entry_template_folder_save_in_default: "Ubicación predeterminada de <b>Guardar en</b>",
		entry_template_folder_save_in_default_hover: "Especifique la ubicación predeterminada donde se añaden los elementos utilizando esta plantilla de entrada.<br><br>La ubicación predeterminada que seleccione impone restricciones en el comportamiento de tiempo de ejecución de la plantilla de entrada:<ul><li>Los usuarios no pueden seleccionar un repositorio diferente.</li><li>Si la ubicación predeterminada es un espacio de equipo, los usuarios no pueden seleccionar un espacio de equipo diferente</li></ul>Sin embargo, si los usuarios asocian esta plantilla de entrada con una carpeta, pueden sustituir la ubicación de almacenamiento que está configurada para esta plantilla de entrada.",
		entry_template_folder_restrict_choice: "Requerir que los usuarios añadan elementos a la ubicación predeterminada o en una carpeta hijo de la ubicación predeterminada",
		entry_template_folder_file_in_required: "Requerir que los usuarios añadan nuevos elementos a una carpeta",
		entry_template_folder_file_in_required_hover: "Si no selecciona esta opción, los usuarios pueden añadir elementos a la carpeta raíz del repositorio.<br><br><b>Restricción:</b> es posible que la configuración del escritorio requiera que los usuarios seleccionen una carpeta.",

		entry_template_document_type_show: "Mostrar el campo <b>¿Qué desea guardar?</b>",
		entry_template_document_type_show_hover: "Si muestra el campo <b>¿Qué desea guardar?</b>, los elementos que seleccione se muestran como opciones en el campo <b>¿Qué desea guardar?</b>.",
		entry_template_document_type_hide: "Ocultar el campo <b>¿Qué desea guardar?</b>",
		entry_template_document_type_hide_hover: "Si oculta el campo<b>¿Qué desea guardar?</b>, siempre se utiliza el tipo de documento que seleccione cuando los usuarios añaden documentos utilizando esta plantilla de entrada.",
		entry_template_document_type: "Esta plantilla de entrada se puede utilizar para añadir los elementos siguientes:",
		entry_template_document_type_hover: "Si muestra el campo <b>¿Qué desea guardar?</b>, los elementos que seleccione se muestran como opciones en el campo <b>¿Qué desea guardar?</b>.<br><br>Si oculta el campo<b>¿Qué desea guardar?</b>, siempre se utiliza el tipo de documento que seleccione cuando los usuarios añaden documentos utilizando esta plantilla de entrada.",

		entry_template_misc: "Opciones adicionales:",
		entry_template_auto_classify_show: "Clasificar automáticamente el contenido del documento",
		entry_template_auto_classify_show_hover: "Cuando un documento se clasifica en FileNet Content Manager, el contenido de la carpeta se examina para determinar la clase y los valores de propiedad adecuados para el documento.<br><br>Hable con su administrador del sistema para determinar si la clasificación de contenido está habilitada en Content Platform Engine.<br><br>Si habilita esta opción, es posible que la clase y las propiedades del documento cambien cuando un usuario añade el documento al repositorio.",
		entry_template_allow_duplicate_file_names: "Permitir documentos con nombres de archivo duplicados",
		entry_template_allow_duplicate_file_names_hover: "De forma predeterminada, puede añadir documentos con el mismo nombre a una carpeta en FileNet Content Manager. Puede borrar esta opción si quiere que los archivos de la ubicación de almacenamiento seleccionada tengan un nombre exclusivo.",
		entry_template_allow_compound_documents: "Permitir que este documento sea el padre de un documento compuesto",
		entry_template_version_show: "Mostrar opciones de versión para añadir e incorporar",
		entry_template_version_hide: "Ocultar opciones de versión para añadir e incorporar",
		entry_template_version_to_add_as: "Versión predeterminada para añadir como:",
		entry_template_version_default: "Opción de versión predeterminada:",
		entry_template_version_default_checked: "Versión principal",
		entry_template_version_default_unchecked: "Versión menor",
		entry_template_version_display: "Versión de documento:",
		entry_template_version_display_show: "Mostrar",
		entry_template_version_display_hide: "Ocultar",
		entry_template_version_default_add: "Versión predeterminada para añadir como:",

		entry_template_checkin_version_show: "Mostrar opciones de versión para incorporar",
		entry_template_checkin_version_hide: "Ocultar opciones de versión para incorporar",

		entry_template_checkin_version_message_no_versions: "La política de versión de la clase seleccionada impide a los usuarios incorporar una versión nueva del documento.",
		entry_template_checkin_version_message_always_version: "La política de versión de la clase seleccionada impide a los usuarios sustituir la versión actual del documento.",

		entry_template_applied: "Utilice esta plantilla de entrada cuando los usuarios van a:",
		entry_template_applied_add: "Añadir documentos (obligatorio)",
		entry_template_applied_add_folder: "Crear carpetas (obligatorio)",
		entry_template_applied_checkin: "Incorporar",
		entry_template_applied_properties_group: "Ver o editar propiedades:",
		entry_template_applied_properties: "La ventana de propiedades",
		entry_template_applied_viewer: "El visor de applets",
		entry_template_applied_docinfo: "El panel de información de documento",
		entry_template_applied_no_class_support: "Esta plantilla de entrada se puede utilizar para añadir elementos, pero no se puede utilizar para incorporar documentos o visualizar y editar propiedades. Se debe modificar la clase seleccionada para dar soporte a estas situaciones. Si necesita utilizar la plantilla de entrada en estas situaciones, solicite al administrador que utilice la herramienta de administración para modificar la clase de forma que pueda almacenar los ID de plantilla de entrada.",
		entry_template_applied_no_child_component_support: "La clase seleccionada tiene componentes hijo y se ha definido un diseño de propiedad. Los diseños de propiedad no admiten componentes hijo. El usuario no visualizará los componentes hijo.",
		entry_template_applied_child_component: "La clase seleccionada tiene componentes hijo. El usuario los visualizará, pero no podrá configurar los componentes hijo en esta plantilla de entrada.",

		entry_template_properties_show: "Mostrar la sección <b>Propiedades</b>",
		entry_tempalte_properties_show_hover: "Si muestra la sección <b>Propiedades</b>, los usuarios podrán modificar cualquier valor de propiedad que se muestre en la plantilla de entrada y que no sean propiedades de solo lectura.",
		entry_template_properties_hide: "Ocultar la sección <b>Propiedades</b>",
		entry_template_properties_hide_hover: "Si oculta la sección <b>Propiedades</b>, los usuarios no pueden modificar ningún valor de propiedad. La plantilla de entrada debe definir todos los valores que desea utilizar cuando se añaden elementos utilizando esta plantilla de entrada.",

		entry_template_security_show: "Mostrar la sección <b>Seguridad</b>",
		entry_template_security_show_hover: "Si muestra la sección <b>Seguridad</b>, los usuarios que tengan los permisos adecuados podrán modificar la seguridad del elemento.",
		entry_template_security_hide: "Ocultar la sección <b>Seguridad</b>",
		entry_template_security_hide_hover: "Si oculta la sección <b>Seguridad</b>, los usuarios no podrán modificar la seguridad de los elementos. La plantilla de entrada debe definir todos los valores de seguridad que quiere utilizar cuando los elementos se añaden o editan.",
		entry_template_security_policy: "Política de seguridad:",
		entry_template_security_policy_hover: "En función de la política de seguridad que seleccione, la política de seguridad puede:<br><ul><li>Sustituir los permisos especificados en <b>Establecer la seguridad del elemento</b>.</li><li>Añadir los permisos especificados en <b>Establecer la seguridad del elemento</b>.</li></ul>",
		entry_template_security_policy_none: "No se ha seleccionado ninguna política de seguridad",
		entry_template_security_inherit: "Heredar la configuración de seguridad de la carpeta padre",
		entry_tempalte_save_in_hover: "Especifique dónde guardar la plantilla de entrada.<br><br><b>Restricción:</b> si guarda la plantilla de entrada en un espacio de equipo, solo puede utilizar la plantilla de entrada en el espacio de equipo.",
		entry_template_security_inherit_item_security_hover: "Si selecciona esta opción, a configuración de seguridad para la carpeta padre se añade a la configuración de seguridad definida por uno de los siguientes elementos:<ul><li>La clase que se especifica en la sección <b>Establecer las propiedades del elemento</b></li><li>La seguridad personalizada que ha especificado en la sección <b>Establecer la seguridad del elemento</b></li></ul>",
		entry_template_security_change: "Sustituir la seguridad definida por la clase seleccionada",
		entry_template_security_change_hover: "Si selecciona esta opción, la configuración de seguridad definida para la clase se muestra de forma predeterminada. Posteriormente, podrá modificar la configuración de seguridad para la plantilla de entrada.<br><br>Si muestra la sección <b>Seguridad</b>, los usuarios que tengan los permisos adecuados podrán modificar la seguridad del elemento.<br><br>Si selecciona esta opción y elige heredar los valores de seguridad de la carpeta padre, cualquier permiso heredable se añade a la seguridad que especifique.",
		entry_template_security_default_item_security: "Sustituir la seguridad de elemento predeterminada del usuario que añade el elemento",
		entry_template_security_policy_message_override: "La política de seguridad seleccionada está configurada para sustituir los permisos especificados en Establecer seguridad.",
		entry_template_security_policy_message_add: "La política de seguridad seleccionada está configurada para añadir a los permisos especificados en Establecer seguridad.",
		entry_template_security_policy_preserve_true_hover: "Conserva permiso directo",
		entry_template_security_policy_preserve_false_hover: "No conserva permiso directo",
		// used for state icon title in Contentlist when in high contrast & the icon doesn't display - 1 character only
		entry_template_security_policy_preserve_true_char: "&theta;",
		entry_template_security_policy_preserve_false_char: "&otimes;",
		// class based role security CE 5.5
		entry_template_security_class_role_piker_title: "Roles específicos",
		entry_template_security_class_role_search_title: "Buscar roles:",
		entry_template_secuirty_class_member_title: "Lista de miembros de ${0}",
		entry_template_secuirty_class_folder_only: "Estos permisos se aplican únicamente a esta carpeta",
		entry_template_secuirty_class_folder_and_immediate_children: "Estos permisos se aplican a esta carpeta y sus hijas inmediatas que estén configuradas para heredar la seguridad de la misma.",
		entry_template_secuirty_class_folder_and_all_children: "Estos permisos se aplican a esta carpeta y a todos los descendientes que estén configurados para heredar la seguridad de esta carpeta.",
		entry_template_secuirty_class_folder_Immediate_children_not_folder:	"Estos permisos se aplican a los hijos inmediatos que estén configurados para heredar la seguridad de esta carpeta.",
		entry_template_secuirty_class_folder_all_children_not_folder: "Estos permisos se aplican a todos los descendientes que estén configurados para heredar la seguridad de esta carpeta.",

		entry_template_class_security_message_no_override: "La seguridad de la clase seleccionada impide a los usuarios sustituir la seguridad.",
		entry_template_class_security_required_privileges: "<b>Importante</b>: cuando sustituya la seguridad de la clase seleccionada, los usuarios que añadan elementos utilizando esta plantilla de entrada deben tener los privilegios ItemSetACL y UserACLOwner.",

		entry_template_workflow_type_ICNSequentialDocumentApproval: "Flujo de trabajo de patrón secuencial",
		entry_template_workflow_type_ICNParallelDocumentApproval: "Flujo de trabajo de patrón paralelo",
		entry_template_workflow_type_existing: "Flujo de trabajo personalizado...",
		entry_template_workflow_launch_prompt: "Preguntar a los usuarios si desean iniciar el flujo de trabajo",
		entry_template_workflow_launch_auto: "Iniciar el flujo de trabajo automáticamente",
		entry_template_workflow_modify_launch: "Permitir a los usuarios modificar el paso de inicio",
		entry_template_workflow_modify_launch_hover: "Seleccione esta opción si desea permitir que los usuarios cambien el modo de iniciar el flujo de trabajo.",

		entry_template_optionsButton_title: "Modificar",
		entry_template_optionsButton_readonly_title: "Ver asociación",
		entry_template_optionsDialog_title: "Valores de asociación de carpetas",
		entry_template_removeButton_title: "Eliminar",
		entry_template_addButton_title: "Añadir",
		entry_template_selected_entry_templates: "Plantillas de entrada seleccionadas",
		entry_template_docs_added_to_template_destination: "Los documentos se añaden al destino especificado en la plantilla de entrada.",
		entry_template_docs_added_to_other_object_store: "Esta plantilla de entrada añade elementos al almacén de objetos ${0}.",
		entry_template_inherited_entry_templates_label: "Deseo: ",
		entry_template_inherited_entry_templates: "Heredar asociaciones de plantillas de entrada de la carpeta: ",
		entry_template_inherited_entry_templates_not: "Crear nuevas asociaciones para esta carpeta",
		entry_template_inherited_folder_path: "Las plantillas de entradas de la lista de plantillas de entrada seleccionadas están asociados con la siguiente carpeta: ${0}. <br> La vía de acceso a la carpeta es ${1}.",
		entry_template_folder_associations_title: "Asociar plantillas de entrada",
		entry_template_folder_associations_intro: "Cuando se asocia una plantilla de entrada con una carpeta, los usuarios deben utilizar la plantilla de entrada para añadir elementos a la carpeta. Si asocia varias plantillas de entrada con una carpeta, los usuarios pueden seleccionar qué plantilla de entrada desean utilizar.",
		entry_tempalte_folder_associations_entrytemplate: "Plantilla de entrada: ",
		entry_template_avaliable_entry_templates: "Plantillas de entrada disponibles",
		entry_template_fileTypes_intro_title: "Tipos de archivos permitidos:",
		entry_template_fileTypes_intro: "De forma predeterminada, se puede utilizar una plantilla de entrada para añadir cualquier tipo de documento al repositorio. Sin embargo, si selecciona uno o varios tipos de archivo, las plantillas de entrada sólo están disponibles cuando los usuarios añaden documentos que coinciden con uno de los tipos de archivo especificados.",
		entry_template_fileTypes: "Tipos de archivo",
		entry_template_fileType_error: "Se han seleccionado tipos de archivo no válidos para una o varias asociaciones de plantillas de entrada. Debe eliminar los tipos de archivo no válidos para poder guardar estas asociaciones de plantillas de entrada.",
		entry_template_fileTypes_any_type_of_file: " Cualquier tipo de archivo",
		entry_template_description_label: "Descripción",
		entry_template_ItemInfoPrefix: "Asociar con: ",
		entry_template_TargetObjectStoreName: "Almacén de objetos de destino",
		entry_template_class: "Clase",
		entry_template_current_folder_as_parent: "Utilizar carpeta como destino",
		entry_template_view_minetypes: "Ver tipos MIME",
		entry_template_avaliable_MIME_types: "Tipos de archivos disponibles",
		entry_template_selected_MIME_types: "Tipos de archivos seleccionados",
		entry_template_MIME_type_column: "nombre de categoría de tipo de archivo",
		entry_template_file_type_not_existing: "Elimine los tipos de archivo que no sean válidos.",
		entry_template_MIME_types: "Tipos MIME:",
		entry_template_MIME_types_info_dialog_title: "Los tipos MIME para",
		entry_template_destination_label: "Añadir documentos a: ",
		entry_template_destination_help: "Especifique dónde se almacenan los documentos en el repositorio cuando los usuarios añaden documentos a esta carpeta utilizando la plantilla de entrada seleccionada.",
		entry_template_radioButton_folder_destination: "Carpeta seleccionada",
		entry_template_radioButton_template_destination: "Destino especificado en la plantilla de entrada",
		entry_tempalte_teamspace_default: "Plantilla de entrada predeterminada",
		entry_template_folder_associations_save_new: "Ha modificado algunas asociaciones de plantilla de entrada. ¿Desea cerrar esta ventana sin guardar los cambios?",
		entry_template_mode_binding_label: "Propiedades",
		entry_template_columns_className: "Nombre de clase",
		entry_template_columns_type: "Tipo de plantilla",
		entry_template_columns_workflow: "Nombre de flujo de trabajo",
		entry_template_columns_destination: "Destino",
		entry_template_association_less_than_record: "Existen ${0} plantillas de entrada no listadas en Plantillas de entrada seleccionadas. No tiene permiso para visualizarlas. O bien se han suprimido. Póngase en contacto con el administrador del sistema para obtener más información.",
		/* Request */

		progress_message_general: "En curso...",
		cancel_message_general: "La acción se ha cancelado.",
		ie8_not_supported_browser: "IE8 no es un navegador soportado.",
		progress_message_getDesktop: "Cargando escritorio...",
		progress_message_getActions: "Cargando acciones...",
		progress_message_getViewers: "Cargando escritorio...",
		progress_message_logon: "Iniciando la sesión...",
		progress_message_logoff: "Finalizando la sesión...",
		progress_message_getContentClasses: "Recuperando clases...",
		progress_message_openContentClass: "Recuperando detalles de clase...",
		progress_message_od_getCabinets: "Recuperando archivos .CAB...",
		progress_message_getSearchTemplates: "Recuperando búsquedas...",
		progress_message_od_getTemplates: "Recuperando carpetas...",
		progress_message_od_openCabinet: "Recuperando carpetas...",
		progress_message_openSearchTemplate: "Abriendo búsqueda...",
		progress_message_od_openTemplate: "Abriendo carpeta...",

		progress_message_getWorklists: "Recuperando listas de trabajo...",
		progress_message_getWorkItems: "Recuperando elementos de trabajo...",
		progress_message_getNextWorkItems: "Recuperando elementos de trabajo...",
		progress_message_getStepParameters: "Recuperando información de elemento de trabajo...",
		progress_message_getStepAttachmentItems: "Recuperando información de archivo adjunto...",
		progress_message_getDependentParameters: "Recuperando información de propiedad...",

		progress_message_p8_getProcessApplicationSpaces: "Recuperando espacios de aplicación...",
		progress_message_p8_getProcessRoles: "Recuperando roles de proceso...",
		progress_message_p8_getProcessInbaskets: "Recuperando bandejas de entrada...",
		progress_message_p8_getProcessorInformation: "Recuperando información de proceso...",
		progress_message_p8_getFilterCriteria: "Recuperando filtro de bandeja de entrada...",
		progress_message_p8_getLaunchParameters: "Recuperando información de elemento de trabajo...",
		progress_message_p8_getStepAttachments: "Recuperando archivos adjuntos de elemento de trabajo...",
		progress_message_p8_getSubscriptions: "Recuperando subscripciones a flujo de trabajo...",
		progress_message_p8_getTrackerParameters: "Recuperando información de elemento de trabajo...",
		progress_message_p8_getTrackerHistory: "Recuperando historial de elemento de trabajo...",
		progress_message_p8_getTrackerMilestones: "Recuperando objetivos de elemento de trabajo...",
		progress_message_p8_completeStep: "Completando elemento de trabajo...",
		progress_message_p8_moveToInbox: "Moviendo elemento a bandeja de entrada...",
		progress_message_p8_returnToSender: "Devolviendo elemento de trabajo...",
		progress_message_p8_reassign: "Reasignando elemento de trabajo...",
		progress_message_p8_launchWorkflow: "Iniciando flujo de trabajo...",
		progress_message_p8_getTransferedWorkflows: "Recuperando información del flujo de trabajo...",

		progress_message_cm_getProcesses: "Recuperando información del flujo de trabajo...",
		progress_message_cm_completeStep: "Continuando elemento de trabajo...",
		progress_message_cm_getItemProcessInformation: "Recuperando información del flujo de trabajo...",

		progress_message_search: "Buscando...",
		cancel_message_search: "La búsqueda se ha cancelado.",
		progress_message_getContentItems: "Recuperando información de elemento...",
		progress_message_openFolder: "Abriendo carpeta...",
		progress_message_addItem: "Creando elemento...",
		progress_message_checkIn: "Incorporando elemento...",
		progress_message_changePassword: "Cambiando contraseña...",
		progress_message_getDefaultInstancePermissions: "Recuperando permisos predeterminados...",
		progress_message_openItem: "Recuperando información de elemento...",
		progress_message_saveItem: "Guardando información de elemento...",
		progress_message_getPermissions: "Recuperando permisos...",
		progress_message_getEntryTemplates: "Recuperando plantillas de entrada...",
		progress_message_openEntryTemplate: "Abriendo plantilla de entrada...",
		progress_message_getFavorites: "Recuperando favoritos...",
		progress_message_getFoldersFiledIn: "Recuperando carpetas...",
		progress_message_getDocumentVersions: "Recuperando versiones...",
		progress_message_getDependentAttributeInfo: "Recuperando información de atributo...",
		progress_message_packageForDownload: "Empaquetando para descarga...",
		progress_message_convertDocument: "Convirtiendo contenido...",

		progress_message_SharePointPlugin_SharePointGetDefaultContentType: "Recuperando tipo de contenido...",
		progress_message_SharePointPlugin_SharePointAddDocument: "Añadiendo documento...",

		progress_message_desktop_reload: "El cliente está volviendo a cargar su escritorio.<br>Es posible que se le vuelva a pedir que inicie sesión.",
		progress_message_email: "Enviando correo electrónico...",
		cancel_message_email: "El correo electrónico se ha cancelado.",

		progress_message_p8_getOfficeOnlineTemplates: "Recuperando plantillas de Office...",
		/* Region labels spoken by JAWS */
		favorites_tree_label: "Árbol de favoritos",
		favorites_content_list_label: "Lista de contenido de Favoritos",
		syncItems_tree_label: "Mi árbol de archivos sincronizados",
		syncItems_content_list_label: "Mi lista de contenido de los archivos sincronizados",
		my_checkouts_content_list_label: "Mi lista de contenido Mis extracciones",
		browse_tree_label: "Árbol Examinar",
		browse_content_list_label: "Examinar lista de contenido",
		repository_selector_label: "Selector de repositorio",
		teamspaces_content_list_label: "Lista de contenido del espacio de equipo",
		templates_content_list_label: "Lista de contenido de plantillas",
		work_content_list_label: "Lista de contenido de trabajo",
		work_tree_label: "Árbol de trabajo",
		admin_tree_label: "Árbol de administración",
		admin_tabs_label: "Separadores de administración",
		search_tabs_label: "Separadores de búsqueda",
		search_selector_label: "Selector de búsqueda",
		teamspace_browse_content_list_label: "Lista de contenido de examinar espacio de equipo",
		teamspace_search_tabs_label: "Separadores de búsqueda de espacio de equipo",

		/* Desktop */
		undo_description: "Deshacer ${0}",
		redo_description: "Rehacer ${0}",

		/* Application Tabs */
		home: "Particular",
		repository: "Repositorio",
		repository_type: "Tipo de repositorio:",
		repository_type_header: "Tipo de repositorio",
		repository_type_any: "Todos los repositorios",
		repository_type_contains_label: "El tipo de repositorio contiene",
		document_info: "Información de documento",
		team: "Equipo",
		administration: "Administración",

		/* Home Page */
		recent_activity: "Actividad reciente",
		repos_and_wrksp: "Repositorios y espacios de equipo",
		workspaces: "Espacios de equipo",
		repositories: "Repositorios",
		templates: "Plantillas",
		favorites: "Favoritos",
		my_checkouts: "Mis extracciones",
		mySyncedFiles: "Mis archivos sincronizados",
		links: "Enlaces",
		name_label: "Nombre",
		description_label: "Descripción:",
		type_label: "Tipo:",
		type_heading: "Tipo",
		type_id_label: "ID de tipo",
		server_type_icon: "Icono de tipo de servidor",
		server_type_heading: "Tipo de servidor",
		server_type: "Tipo de servidor",
		port_heading: "Número de puerto",
		port_label: "Número de puerto:",
		server_name_heading: "Nombre del servidor",
		server_label: "Nombre del servidor",
		server_url_label: "URL del servidor:",
		id_label: "ID:",
		id_heading: "ID",
		connected_label: "Conectado:",
		repository_label: "Repositorio",
		modified_label: "Modificado por:",
		modified_date_label: "Modificado el:",
		status_label: "Estado:",
		last_modified_label: "Última modificación por:",

		modifier: "Modificado por",
		modified_date: "Modificado el",

		/* Favorites */
		new_favorite_label: "Añadir a favoritos",
		edit_favorite_label: "Cambiar nombre de favorito",
		remove_favorite_label: "Eliminar de favoritos",
		missing_alias_message: "Debe especificar un nombre.",
		sync_favorite_enable_hover: "Este elemento está habilitado para la sincronización.",
		sync_favorite_disable_hover: "Este elemento no se está sincronizando.",
		sync_favorite_sync_unavailable_hover: "La sincronización no está disponible para este tipo de objeto.",
		sync_enable_label: "Sincronizar este elemento",
		sync_enable_label_hover: "Este elemento se sincronizará con los dispositivos.",
		delete_favorite_confirmation_question: "¿Desea eliminar este elemento de los favoritos?",
		alias_label: "Nombre:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_favorite_duplicate_error: "El elemento seleccionado ya está en los favoritos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Why can't the item be added to the list of favorites? Is this message used?
		add_favorite_error: "Este elemento no se puede añadir a la lista de favoritos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		add_favorite_max_reached: "Solo puede almacenar ${0} favoritos.",
		add_favorite_max_reached_response: "Si desea añadir este elemento a su lista de favoritos, debe suprimir un favorito ya existente para poder añadir este elemento.",

		/* PDF Conversion */
		download_as_pdf_max_content_error: "Los documentos seleccionados no se pueden convertir a PDF.",
		download_as_pdf_max_content_error_explanation: "Puede convertir solo ${0} MB de datos a PDF. No obstante, los documentos seleccionados sobrepasan los ${0} MB.",
		download_as_pdf_max_content_error_response: "Seleccione menos documentos o documentos más pequeños y vuelva a descargar los documentos como archivos PDF.",

		/* PDF Conversion */
		download_as_pdf_mimetype_check_error: "Los documentos seleccionados no se pueden convertir a un único archivo PDF:",
		download_as_pdf_mimetype_check_error_explanation: "Para convertir un documento con múltiples partes en un único archivo PDF, cada parte debe tener el mismo tipo MIME.",
		download_as_pdf_mimetype_check_error_response: "Seleccione un documento distinto para convertir a PDF.",

		/* Activity Stream */
		show_label: "Mostrar:",
		all_filter: "Todo",
		notifications_filter: "Notificaciones",
		workitems_filter: "Elementos de trabajo",
		documentes_filter: "Documentos",
		all_favorites_filter: "Todos los favoritos",
		folders_filter: "Carpetas",
		searches_filter: "Búsquedas",
		teamspaces_filter: "Espacios de equipo",

		/* Repository */
		all_search_templates: "Todas las búsquedas",
		all_od_searches: "Todas las plantillas de búsqueda",
		recent_searches: "Búsquedas recientes",
		opened_searches: "Búsquedas abiertas",

		all_worklists: "Todas las bandejas de entrada",
		/* Remove the description. This is unnecessary.  */
		all_worklists_description: "Una lista de cada lista de trabajo",

		/* Teamspace */
		all_workspaces: "Todos los espacios de equipo",
		/* Remove the description. This is unnecessary.  */
		all_workspaces_description: "Una lista de cada espacio de equipo",
		workspace_title: "Espacio de equipo",
		workspace_icon: "Icono de espacio de equipo",

		/* these labels appear in the templates list magazine view description text*/
		workspace_stat_online: "Disponible",
		workspace_stat_offline: "No disponible",
		workspace_stat_validate: "Requiere validación",
		workspace_stat_pendingDelete: "Supresión pendiente",
		workspace_stat_deleteError: "Ha fallado la supresión",

		undefined_value: "Sin definir",
		undefined_reference_value: "No se ha definido ninguna referencia.",

		/* Filter teamspaces in content list */
		more_results_on_server: "Es posible que haya más resultados disponibles en el servidor.",
		search_all_data: "Buscar todos los datos.",
		search_all_teamspaces: "Buscar todos los espacios de equipo.",
		teamspace_filter_results: "Mostrando ${0} resultados. ",
		displaying_filtered_results: "Mostrando resultados filtrados. ",
		displaying_recent_results: "Mostrando sólo los espacios de equipo que se han modificado en los últimos ${0} días. Para buscar otros espacios de equipo, filtre la lista de espacios de equipo por el nombre o la descripción. ",
		clear_filter: "Borrar filtro.",

		/* FolderTreeModel */
		move_item_task: "Mover elemento",
		copy_item_task: "Copiar elemento",
		add_item_task: "Añadir elemento",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: What does it mean that the folder cannot be opened from a view? How would going to the tree view resolve the problem.
		folderTree_missing_folder_error: "La siguiente carpeta no se ha podido encontrar: ${0}. Puede que haya sido eliminada, o la carpeta no se puede abrir desde esta vista. Pulse en el enlace Más desde la vista de árbol para navegar a la carpeta. Si no puede ver la carpeta, renueve la vista de lista de contenido.",
		more_paging_link: "más ▼",

		/* StatusDialog */
		/* Can we delete the title and just have the action that is being completed? */
		status_dialog_title: "Estado",
		status_dialog_cancel_label: "Cancelar",

		/* ErrorDialog */
		error_dialog_title: "Error",
		error_dialog_icon_tooltip: "Error",
		error_dialog_stack_trace_title: "Seguimiento de la pila",

		/* ConfirmationDialog */
		confirmation_icon_tooltip: "Confirmación",

		close_browser_msg: "Cierre la ventana del navegador.",

		/* MessageDialog */
		message_dialog_title: "Información",
		warning_dialog_title: "Aviso",

		/* LoginPane and LoginDialog */
		login_pane_welcome: "Bienvenido a ${0}",
		server: "Repositorio:",
		username: "Nombre de usuario:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_username_message: "Se necesita un nombre de usuario para iniciar la sesión en el repositorio.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		missing_password_message: "Se necesita una contraseña para iniciar la sesión en el repositorio",
		password: "Contraseña:",
		login: "Iniciar sesión",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		login_session_expired_message: "Su sesión ha caducado. Vuelva a iniciar sesión.",
		login_repository_connection_expired_message: "Su conexión con el repositorio ${0} ha caducado. Vuelva a iniciar sesión.",
		login_site_connection_expired_message: "La conexión al sitio ha caducado. Vuelva a iniciar sesión.",
		login_new_server_message: "Introduzca un nombre de usuario y una contraseña para ${0}",
		login_error_more_information_message: "Más información",

		disconnect_box_account_user: "Desconectar cuenta Box: ${0}",
		disconnect_box_account: "Desconectar cuenta Box",
		disconnect_box_accounts: "Desconectar cuentas Box",

		// OAuth2/Box Login
		login_ssl_connection_required: "Se necesita una conexión SSL para el acceso de repositorio de Box.",
		login_oauth_popup_blocked: "La ventana emergente estaba bloqueada. Quizá debe desbloquear las ventanas emergentes en su navegador para iniciar sesión.",
		login_oauth_click_here: "Si no se le redirige en 5 segundos, pulse aquí.",
		login_oauth_title: "Iniciar sesión",
		login_oauth_grant_intro: "Otorgar autenticación para ${0}.",
		login_pane_oauth_click_here: "Pulse aquí para iniciar sesión.",

		/* Logout ConfirmationDialog */
		logout_confirmation_question: "¿Desea finalizar la sesión del cliente web?",
		logout_confirmation_button: "Finalizar sesión",

		/* ChangeLocaleDialog */
		change_locale: "Cambiar valores de idioma y entorno local",
		change_locale_use_browser_language: "Utilizar valor de idioma del navegador (Valor predeterminado)",
		change_locale_use_browser_locale: "Utilizar valor de idioma del navegador (Valor predeterminado)",
		change_locale_description: "Si suprime las cookies del navegador, debe restaurar los valores de idioma y de entorno local.",
		change_locale_language_locale: "Idioma de la aplicación:",
		change_locale_language_locale_hover: "Este valor cambia el idioma del texto del cliente web pero no cambia el idioma de los documentos de la aplicación.<br><br>El valor predeterminado utiliza el idioma especificado en las opciones de configuración del navegador web.",
		change_locale_value_format_locale: "Entorno local de la aplicación:",
		change_locale_value_format_locale_hover: "El entorno local determina el formato de fecha, hora y números del cliente web.<br><br>El valor predeterminado utiliza los formatos asociados al idioma especificado en las opciones de configuración del navegador web.",
		change_locale_for_office: "Parámetros de texto bidireccional:",
		change_locale_bidi_support_flag: "Habilitar soporte bidireccional",
		change_locale_bidi_support_flag_hover: "Cuando el soporte bidireccional está habilitado, el usuario puede establecer la dirección del texto que se utiliza en los campos de entrada.  El texto introducido para elementos tales como carpetas, por ejemplo, se mostraría en la dirección que se ha introducido.",
		change_locale_base_text_direction: "Dirección de texto base para contenido:",
		change_locale_base_text_direction_hover: "Establezca la dirección del texto que se introduce en los campos de entrada.  Esto también controla la dirección de visualización de las etiquetas introducidas por el usuario, como por ejemplo nombres de carpeta.",
		change_locale_calendar_type: "Tipo de calendario:",
		change_locale_calendar_type_hover: "Seleccione el tipo de calendario que se utilizará para la sesión de usuario.",
		change_locale_base_text_direction_default: "Predeterminado",
		change_locale_base_text_direction_ltr: "De izquierda a derecha",
		change_locale_base_text_direction_rtl: "De derecha a izquierda",
		change_locale_base_text_direction_contextual: "Contextual",
		change_locale_calendar_type_gregorian: "Gregoriano",
		change_locale_calendar_type_hijri: "Hijri",
		change_locale_calendar_type_hebrew: "Hebreo",
		change_locale_calendar_type_Umm_al_Qura: "Umm al-Qura",

		/* ChangePasswordDialog */
		change_password: "Cambiar contraseña",
		change_password_title: "Cambiar contraseña",
		change_password_expired_title: "Contraseña caducada",
		change_password_message: "Introduzca una contraseña nueva.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is there anything additional that the user has to do? Are they prompted for a new password in context when this message appears?
		change_password_expired_message: "La contraseña ha caducado. Introduzca una contraseña nueva.",
		change_password_password_rules: "Reglas de contraseña",
		change_password_old_password: "Contraseña antigua",
		change_password_new_password: "Contraseña nueva:",
		change_password_confirm_password: "Confirmar contraseña:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_old_password_required: "Debe introducir su contraseña antigua.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_password_required: "Debe introducir una contraseña nueva.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_confirm_password_required: "Debe confirmar la contraseña nueva.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		change_password_new_confirm_password_match: "Las contraseñas deben coincidir.",

		/* GlobalToolbar */
		actions: "Acciones",
		actions_label: "Acciones:",
		open_actions_label: "Abrir acciones:",

		/* About Dialog */
		about_dialog_title: "Acerca de",
		about_product_name_label: "Nombre de producto: ",
		about_product_version_label: "Versión: ",
		about_product_build_label: "Compilar: ",
		about_product_license: "Materiales bajo licencia - Propiedad de IBM Corp. &copy; Copyright IBM Corp. 2012, 2016. Reservados todos los derechos. Derechos restringidos para los usuarios del Gobierno de EE.UU. El uso, la duplicación o la divulgación están restringidos por el contrato GSA ADP Schedule Contract con IBM Corp. IBM y el logotipo de IBM son marcas registradas de International Business Machine Corporation en Estados Unidos o en otros países. La licencia de este Programa se concede sometida a los términos del acuerdo de licencia que se suministra con el Programa. Este acuerdo de licencia puede encontrarse en una carpeta de directorio del programa o en una biblioteca identificada como \"License\" o \"Non_IBM_License\", si procede, o bien se puede ofrecer como un acuerdo de licencia impreso. Lea detenidamente este acuerdo antes de utilizar el programa. La utilización de este programa implica la aceptación de los términos. ",

		/* Delete ConfirmationDialog */
		delete_single_confirmation_question: "¿Desea suprimir el elemento seleccionado?",
		delete_single_folder_confirmation_question: "¿Desea suprimir la carpeta ${0}?",
		delete_multiple_confirmation_question: "¿Desea suprimir los elementos seleccionados?<br>Se ha(n) seleccionado ${0} elemento(s).",
// START NON-TRANSLATABLE
		// Use this improved message in the next translation cycle.
		// delete_version_single_confirmation_question: "Do you want to delete the selected version of the item?",
		// Use this improved message in the next translation cycle.
		// delete_version_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>{0} versions of the item are selected.",
		delete_version_opened_item_single_confirmation_question: "Do you want to delete the selected version of the item?<br>The selected version is open in the ${0} window.<br>If you delete that version the ${0} window will close.",
		delete_version_opened_item_multiple_confirmation_question: "Do you want to delete the selected versions of the item?<br>${0} versions of the item are selected. One of the versions is open in the ${1} window.<br>If you delete that version the ${1} window will close.",
// END NON-TRANSLATABLE
		delete_confirmation_button: "Suprimir",
		search_template_delete_confirmation_question: "¿Desea suprimir la búsqueda ${0}?",
		search_template_opened_delete_confirmation_question: "La búsqueda de ${0} está abierta. Si suprime la búsqueda, esta se cerrará.<br>¿Desea suprimir esta búsqueda?",
		delete_multiple_opened_search_template_confirmation_question: "Las siguientes búsquedas están abiertas: ${0}.<br>Si suprime las búsquedas, estas se cerrarán. ¿Desea suprimir estas búsquedas?",
		delete_large_number_items_confirmation_question: "Ha seleccionado ${0} elemento(s) para suprimir.<br/>Si suprime una gran cantidad de elementos la operación podría tardar mucho tiempo.<br/>¿Desea continuar?",
		delete_confirmation_entrytemplate: "Si suprime esta plantilla de entrada, tendrá el impacto siguiente en los documentos o carpetas asociados con la plantilla de entrada:<ul><li>Los elementos dejarán de estar asociados con la plantilla de entrada, y es posible que los usuarios vean un aviso al actualizar un elemento.</li><li>Las propiedades controladas anteriormente por la plantilla de entrada, como por ejemplo el nombre o el orden de las propiedades, dejarán de aplicarse a los elementos asociados con la plantilla de entrada.</li></ul>¿Desea suprimir esta plantilla de entrada?",
		delete_confirmation_entrytempalte_with_multi_items: "Las plantillas de entrada se deben suprimir individualmente. Las plantillas de entrada se han eliminado de la lista de elementos para suprimir. Si desea suprimir las plantillas de entrada, debe suprimir cada plantilla de entrada individualmente.",

		/* Create/Apply/Remove Hold */
		hold: "Retención",
		createHold: "Retención nueva",
		applyHold: "Aplicar retención",
		removeHold: "Suprimir retención",
		showHolds_title: "Mostrar retenciones",
		applyHoldSelectText: "Seleccione las retenciones que desea aplicar a los elementos seleccionados.",
		availableHolds: "Retenciones disponibles:",
		removeHoldSelectText: "Seleccione las retenciones que desea eliminar de los elementos seleccionados.",
		appliedHolds: "Retenciones aplicadas:",
		/* Delete the following string unless there is more useful information that you can apply */
		createHoldSelectText: "Cree una retención nueva para aplicarla a los elementos seleccionados.",
		holdName: "Nombre de retención:",
		holdDescription: "Descripción:",
		/* Are there any restrictions for the name? Special characters? Length? */

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameRequired: "Debe especificar un nombre para la retención.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		holdNameAlreadyExist: "El nombre de retención especificado ya existe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is the colon part of the list of restricted characters?
		invalidHoldName: "Un nombre de retención no puede contener ninguno de los siguientes caracteres : ' % [ ] \" \\ ,",
		/*Session expire warning dialog*/
		session_expire_warning: "Su sesión caducará dentro de ${0} minutos.",
		session_expire: "La sesión va a caducar",
		logoff: "Cerrar sesión",
		extend_session: "Ampliar sesión",
		admin_custom_settings: "Valores adicionales:",
		admin_custom_settings_hover_help: "enableSessionExpireWarning es un valor booleano que indica si se ha habilitado la advertencia de caducidad de sesión, el valor predeterminado es true. sessionExpireWarningTime es un entero entre 2 y 5 para especificar el tiempo de advertencia de caducidad de sesión.",
		admin_custom_setting_dialog_title_new: "Nuevo valor",
		admin_custom_setting_dialog_title_edit: "Editar valor",
		admin_custom_setting_dialog_hover_help: "Añada otros parámetros especificando el nombre del parámetro y el valor. Por ejemplo, puede especificar “enableSessionExpireWarning” y “true” si desea habilitar la advertencia de caducidad de sesión.",
		admin_custom_setting_dialog_field_hover_help: "Para obtener más información sobre los nombres y valores de los parámetros, consulte el manual de referencia de parámetros de IBM Navigator.",
		admin_custom_setting_dialog_nameInvalid: "Este valor es necesario. El valor no puede contener espacios en blanco y no puede ser un duplicado.",
		admin_custom_setting_dialog_bool_valueInvalid: "Este valor es necesario. El valor debe ser un valor booleano.",
		admin_custom_setting_dialog_int_valueInvalid: "Este valor es necesario. El valor debe ser un entero.",
		/* Add Document Dialog */
		add_document_dialog_title: "Añadir documento",
		add_documents_dialog_title: "Añadir documentos",
		add_document_general_label: "General",
		add_document_properties_label: "Propiedades",
		add_document_properties_with_ellipsis_label: "Propiedades...",
		add_document_security_label: "Seguridad",
		add_document_location_label: "Guardar en:",
		add_document_type_label: "¿Qué desea guardar?",
		add_document_localfile_label: "Documento local",
		add_document_metadata_label: "Información sobre un documento",
		add_document_external_label: "Enlace a un documento externo",
		add_document_web_link_label: "Enlace web",
		add_document_saved_content_label: "Utilizar archivo guardado:",
		add_document_saved_content_choice: "Archivo guardado",
		add_document_file_name_label: "Nombre de archivo:",
		add_document_entry_template_label: "Plantilla de entrada:",
		add_document_delete_file_label: "Suprimir archivo local",
		add_document_delete_file_disabled_label: "Los archivos que no están en el directorio de rastreo de archivos no se suprimirán.",
		add_document_major_version_label: "Versión principal",
		add_document_major_version_hover: "Establece el estado del documento en Publicado. El documento se añade al repositorio como versión 1.0. Si no se selecciona la opción, el documento no está listo para su publicación y se añade como versión menor 0.1.",
		add_document_save_document_as_unfiled_label: "No guardar el documento en una carpeta",
		add_document_save_document_as_unfiled_hover: "Si selecciona esta opción, puede encontrar este documento solo mediante una búsqueda. No puede examinar para encontrarla.",
		add_document_create_new_version_label: "Crear nueva versión",
		add_document_replace_existing_version_label: "Sustituir versión existente",
		add_document_start_workflow_label: "Iniciar flujo de trabajo",
		add_document_auto_classify_label: "Clasificar el contenido automáticamente",
		add_document_add_label: "Añadir",
		add_document_cancel_label: "Cancelar",
		add_document_document_type_label: "Clase",
		add_document_context_info: "Los valores que introduzca para las propiedades del documento se pueden utilizar para buscar el documento posteriormente.",
		add_documents_context_info: "Los valores que especifique para los documentos se pueden utilizar para buscar el documento posteriormente. Si tiene que especificar un valor de propiedad diferente para un documento, debe añadirlo por separado o editar las propiedades del documento después de agregarlo.",
		add_document_url_label: "URL:",
		add_document_template_description: "Descripción de plantilla:",
		add_document_select_entry_template: "Introduzca o seleccione una plantilla de entrada",
		add_document_no_permission_to_associations: "No tiene permisos para utilizar una plantilla de entrada",
		add_document_no_entry_template_to_use: "No se puede utilizar ninguna plantilla de entrada para los archivos seleccionados",
		add_document_no_entry_template_itemtype_permission: "No puede añadir elementos a esta carpeta. Debe seleccionarse una plantilla de entrada y no tendrá acceso a ninguna de las plantillas de entrada asociadas con esta carpeta. Póngase en contacto con el administrador del sistema y solicítele que le otorgue acceso a las plantillas de entrada asociadas a esta carpeta.",
		add_document_appgroup_name_label: "Nombre del grupo de aplicaciones:",
		add_document_app_name_label: "Nombre de la aplicación:",
		create_folder_dialog_title: "Nueva carpeta",
		create_folder_context_info: "Los valores que introduzca para las propiedades de carpeta se pueden utilizar para buscar la carpeta posteriormente.",
		create_folder_folder_name_label: "Nombre de carpeta",
		create_folder_save_folder_as_unfiled_label: "No guarde la carpeta en otra carpeta",
		create_folder_save_folder_as_unfiled_hover: "Si selecciona esta opción, puede encontrar esta carpeta solo mediante una búsqueda. No puede examinar para encontrarla.",
		add_item_create_in_folder: "Crear en carpeta:",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_folder_name_message: "Un nombre de carpeta no puede contener los caracteres siguientes: \\ / : * ? \" < > |",

		invalid_box_folder_name_message: "Un nombre de carpeta no puede contener ninguno de los siguientes caracteres: \\ / y no puede ser igual . o ..",
		invalid_box_file_name_message: "Un nombre de archivo no puede contener ninguno de los siguientes caracteres: \\ / y no puede ser igual . o ..",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_file_name_message: "Un nombre de archivo no puede contener los siguientes caracteres: \\ / : * ? \" < > |",
		external_document_placeholder: "Introduzca el URL del documento",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		invalid_color_message: "El color debe especificarse como un número hexadecimal de 3 o 6 dígitos; por ejemplo, #000 o #000000.",
		add_document_unfiled: "${0} sin archivar",

		/* Add Document Using Template Dialog */
		/* Note to translators: \"Add Document Using Entry Template\" should be interpreted as \"use an entry template to specify how the document is saved to the repository when you add a new document to the repository.\" */
		add_document_using_template_dialog_title: "Añadir documento utilizando plantilla de entrada",
		add_document_using_template_context_info: "Cuando se añade un documento utilizando una plantilla de entrada, los valores que se introducen para el documento son coherentes.",
		add_documents_using_template_dialog_title: "Añadir documentos utilizando una plantilla de entrada",
		add_documents_document_name_is_file_name_hint: "El nombre de archivo se utilizará para esta propiedad.",
		/* Note to translators: \"New Folder Using Entry Template\" should be interpreted as \"use an entry template to specify how the folder is saved to the repository when you create a new folder\" */
		create_folder_using_template_dialog_title: "Nueva carpeta utilizando plantilla de entrada",
		create_folder_using_template_context_info: "Cuando se crea una carpeta utilizando una plantilla de entrada, los valores que se introducen para la carpeta son coherentes.",

		add_documents_batch_results_dialog_title: "Documentos no añadidos al repositorio",
		add_documents_batch_results_dialog_context_info: "Los siguientes documentos no se han añadido al repositorio. Seleccione un documento y pulse en Detalles para obtener más información sobre por qué el documento no se ha añadido al repositorio.",
		add_documents_batch_results_dialog_filename_col_hdr: "Nombre de archivo",
		add_documents_batch_results_dialog_status_col_hdr: "Estado",
		add_documents_batch_results_dialog_message_col_hdr: "Mensaje",
		add_documents_batch_results_status_error: "Error",
		add_documents_batch_results_status_cancelled: "Cancelado",
		add_documents_batch_results_status_cancelled_msg: "El documento no se ha añadido porque la solicitud se ha cancelado.",

		add_documents_batch_status_title: "Añadiendo documentos",
		// "Adding file ${0} of ${1}..." <- "Adding file 2 of 7..."
		add_documents_batch_status_adding_msg: "Añadiendo archivo ${0} de ${1}...",
		// "Errors: ${0}"  <- "Errors: 3"
		add_documents_batch_status_errors_msg: "Errores: ${0}",
		add_documents_batch_status_completing_msg: "El proceso se detendrá cuando se haya añadido este documento.",

		add_documents_status_uploading_msg: "Cargando archivo ${0} de ${1}...",
		add_documents_status_adding_msg: "Añadiendo archivo ${0} de ${1}...",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_always_declare_template_warning: "La plantilla de entrada se ha configurado en otra aplicación y está configurada para declarar siempre documentos como registros. Sin embargo, este valor se ignora porque el cliente web no soporta la declaración de documentos como registros.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		add_document_using_optional_declare_template_info: "La plantilla de entrada se ha configurado en otra aplicación y está configurada para permitirle decidir si declarar este documento como un registro. Sin embargo, este valor se ignora porque el cliente web no soporta la declaración de documentos como registros.",
		no_selection: "&lt;Seleccionar&gt;",

		batch_results_dialog_details_label: "Detalles",

		/* Invalid Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_GUI_invalid: "El valor no es válido. El valor debe ser un identificador exclusivo global (GUID); por ejemplo, {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_invalid: "El valor no es válido. El valor debe ser un número de coma flotante; por ejemplo, 1,2 o 365.",
		/* The format is shown in ${0} because as nnnn.nn where n = property_number_character */
		property_number_character: "n",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_format_invalid: "El valor no es válido. El valor debe tener el formato ${0}; por ejemplo, ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_invalid: "El valor no es válido. El valor debe ser un valor decimal; por ejemplo, 1,2 o 365.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_invalid: "El valor no es válido. El valor debe ser un entero, por ejemplo, 5 o 1349.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alpha_invalid: "El valor no es válido. El valor solo puede contener caracteres alfabéticos; por ejemplo, a-z y A-Z.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_alphanum_invalid: "El valor no es válido. El valor solo puede contener caracteres alfanuméricos; por ejemplo, a-z, A-Z y 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_num_invalid: "El valor no es válido. El valor solo puede contener caracteres numéricos; por ejemplo, 0-9.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_ext_invalid: "El valor no es válido. El valor solo puede contener los siguientes caracteres: a-z, A-Z, 0-9, [espacio] y `.,:;?\"/-_&amp;+%*=<>()|!$#^@.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_invalid: "El valor no es válido. El valor debe ser una fecha con el siguiente formato: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_invalid: "El valor no es válido. El valor debe ser una hora con el siguiente formato: ${0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_pulldown_invalid: "El valor no es válido. Seleccione un valor del menú desplegable.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: When is this used? What makes the value invalid?
		property_invalid: "El valor no es válido.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_invalid_with_format: "El valor no es válido. El valor debe tener el siguiente formato: {0}",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_missingMessage: "Este valor es necesario.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooLong: "El valor es demasiado largo. La propiedad da soporte a una longitud máxima de ${0}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_tooShort: "El valor es demasiado corto. La propiedad soporta una longitud mínima de ${0}.",

		/* Out of Range Property */
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_double_range: "El valor está fuera del rango. El valor debe ser un número de coma flotante entre ${0} y ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_decimal_range: "El valor está fuera del rango. El valor debe ser un valor decimal entre ${0} y ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_integer_range: "El valor está fuera del rango. El valor debe ser un entero entre ${0} y ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this hover help or a duplicate (sort of) of the next validation message?
		property_date_range_only: "El valor debe ser una fecha entre ${0} y ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_date_range: "El valor está fuera del rango. El valor debe ser una fecha entre ${0} y ${1}.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		property_time_range: "El valor está fuera del rango. El valor debe ser una hora entre ${0} y ${1}.",
		property_and: "y",

		property_invalidValueOrRequired: "El valor siguiente no es válido o es necesario: ${0}.",

		/* Edit Document Dialog */
		edit_properties_dialog_title: "Propiedades",
		edit_properties_dialog_info: "Puede ver o editar las propiedades de este elemento. Si tiene los permisos adecuados, puede modificar también la seguridad del elemento. Sin embargo, no puede cambiar las propiedades del sistema.",
		edit_properties_od_dialog_info: "Puede ver o editar las propiedades de este elemento. Sin embargo, no puede cambiar las propiedades del sistema.",
		system_properties_title: "Propiedades del sistema",
		custom_properties_title: "Propiedades",
		/* Folder collaboration tab */
		box_permission_permission: "Permiso",
		box_permission_permissions: "Permisos",
		box_permission_editor: "Editor",
		box_permission_owner: "Propietario",
		box_permission_co_owner: "Copropietario",
		box_permission_viewer_uploader: "Cargador de visor",
		box_permission_previewer_uploader: "Cargador de visor de vista previa",
		box_permission_viewer: "Visor",
		box_permission_previewer: "Visor de vista previa",
		box_permission_uploader: "Cargador",
		box_permission_add: "Añadir",
		box_permission_upload: "Cargar",
		box_permission_download: "Descargar",
		box_permission_preview: "Vista previa",
		box_permission_view: "Ver",
		box_permission_send_links: "Enviar enlaces de solo visualización",
		box_permission_create_subfolders: "Crear subcarpetas",
		box_permission_create_tasks: "Crear tareas",
		box_permission_add_comments: "Añadir comentarios",
		box_collaboration_invite_placeholder: "Introduzca un nombre, correo electrónico o grupo a los que invitar",
		box_collaboration_invite_placeholder_non_admin: "Especifique un correo electrónico para invitar",
		box_collaboration_invalid_email: "Especifique una dirección de correo electrónico válida",
		box_collaboration_user_already_present: "Este usuario ya es un colaborador de la carpeta",
		box_collaboration_user_name: "Nombre",
		box_collaboration_email_address: "Dirección de correo electrónico",
		box_collaboration_date_added: "Fecha de adición",
		box_collaboration_remove_collaboration: "Eliminar",
		box_collaboration_remove_collaboration_title: "Suprimir",
		box_collaboration_no_collaborators: "No hay ningún colaborador",
		box_collaboration_change_owner_title: "Cambiar propietario del elemento",
		box_collaboration_change_owner_prompt: "Al hacer que este colaborador sea el propietario de la carpeta, usted pasará a ser un editor y dejará de ser el propietario de la carpeta. Los colaboradores que se hayan añadido directamente a esta carpeta la verán en sus carpetas raíz. Los colaboradores que se hayan añadido en el nivel de carpeta padre o superior dejarán de ser colaboradores. ¿Desea continuar?",
		box_collaboration_remove_self_title: "Eliminarme",
		box_collaboration_remove_self_prompt: "¿Está seguro de que desea eliminarse como colaborador? Dejará de tener acceso a esta carpeta.",
		box_collaboration_user: "Usuario",
		box_collaboration_group: "Grupo",
		box_managing_users_not_configured: "No puede buscar usuarios y grupos porque la aplicación Box no se ha configurado correctamente. Para utilizar esta función, póngase en contacto con el administrador y solicite que la aplicación Box se configure para gestionar usuarios y grupos.",
		duplicate_value_error: "Cada valor de esta propiedad debe ser exclusivo.",

		/* Multi Select Edit Properties Dialog */
		multi_edit_properties_dialog_info: "Los cambios que realice en los campos siguientes se aplicarán a todos los elementos seleccionados. Si tiene que especificar un valor de propiedad diferente para un elemento concreto o editar la seguridad de un elemento, debe editar las propiedades del documento individualmente.",
		multi_edit_properties_class_label: "Clase:",
		multi_edit_properties_items_label: "Nombres de elemento:",
		multi_edit_properties_properties_label: "Propiedades:",
		multi_edit_batch_status_title: "Actualizando propiedades",
		multi_edit_batch_status_adding_msg: "Actualizando elemento ${0} de ${1}...",
		multi_edit_batch_status_verifying_msg: "Verificando elemento ${0} de ${1}...",
		multi_edit_batch_status_completing_msg: "El proceso se detendrá cuando se haya actualizado este elemento.",
		multi_edit_batch_status_validation_completing_msg: "El proceso se detendrá cuando se haya verificado este elemento.",
		multi_edit_batch_results_status_error: "Error",
		multi_edit_batch_results_status_cancelled: "Cancelado",
		multi_edit_batch_results_status_cancelled_msg: "El elemento no se ha actualizado porque la solicitud se ha cancelado.",
		multi_edit_batch_results_dialog_title: "Elementos no actualizados",
		multi_edit_batch_results_dialog_context_info: "Los siguientes elementos no se han actualizado. Seleccione un nombre de elemento y pulse Detalles para obtener más información sobre el motivo por el que no se ha actualizado el elemento.",
		multi_edit_batch_results_dialog_itemname_col_hdr: "Nombre de elemento",
		multi_edit_batch_results_dialog_status_col_hdr: "Estado",
		multi_edit_batch_results_dialog_message_col_hdr: "Mensaje",
		multi_edit_batch_status_errors_msg: "Errores: ${0}",
		multi_edit_batch_permission_error_text: "No se pueden guardar los cambios en las propiedades.",
		multi_edit_invalid_value_error: "Este valor depende de otro valor de propiedad y no es válido para todos los elementos que ha seleccionado.",
		multi_edit_batch_permission_error_explanation: "No puede modificar las propiedades de este elemento ya que no tiene privilegios suficientes.",
		multi_edit_no_modifiable_properties: "Las propiedades de los elementos seleccionados no se pueden modificar. Esto puede suceder si un elemento incluye propiedades de solo lectura o si solo se puede modificar el nombre o el título del elemento. Si se seleccionan varios elementos, no puede modificar el título ni el nombre de los elementos.",
		multi_edit_mult_classes_dialog_info: "Los elementos seleccionados están en repositorios diferentes o pertenecen a clases diferentes. Solo puede editar los elementos de la misma clase o que están en el mismo repositorio. Seleccione le subconjunto de elementos que desee editar.",
		multi_edit_class_selector_class_heading: "Clase",
		multi_edit_class_selector_entry_template_heading: "Plantilla de entrada",
		multi_edit_class_selector_repository_heading: "Repositorio",
		multi_edit_class_selector_items_heading: "Elementos",
		multi_edit_some_classes_not_displayed: "Algunos de los elementos seleccionados no se incluyen en esta lista debido a que los elementos contienen propiedades de solo lectura o a que los elementos están en repositorios que no soportan la edición de las propiedades.",
		multi_edit_properties_invalid_msg: "Algunos de los valores de propiedades no son válidos para todos los elementos seleccionados.",
		multi_edit_properties_readonly_tooltip_text: "${0}: Esta propiedad es de solo lectura y no se puede modificar.",
		multi_edit_append_checkbox_label: "Agregar",
		multi_edit_append_checkbox_tooltip: "Seleccione esta opción si desea agregar los valores de propiedad nuevos a los valores existentes, en lugar de sustituirlos.",
		multi_edit_properties_invalid_childcomponent_msg: "Algunos valores de la propiedad ${0} del componente hijo ${1} dependen de otras propiedades y ya no son válidos con las selecciones que ha realizado. Deseleccione los valores del componente hijo ${1} o realice cambios en la propiedad en los elementos que ha seleccionado individualmente.",

		/* Export Properties Dialog */
		export_properties_dialog_title: "Exportar propiedades",
		export_properties_dialog_info: "Seleccione las propiedades que desea exportar y especifique el orden en el que se visualizarán.",
		export_properties_dialog_export_button_label: "Exportar",
		export_properties_dialog_export_raw_values: "Exportar valores en bruto",

		/* Properties */
		filter_clear_tooltip: "Borrar el filtro",
		properties_new_row: "Nuevo",
		properties_requiredClass_document_tooltip: "Seleccione un documento. El documento debe pertenecer a la clase ${0}.",
		properties_requiredClass_folder_tooltip: "Seleccione una carpeta. El documento debe pertenecer a la carpeta ${0}.",
		properties_dataType_tooltip: "Tipo de datos: ${0}",
		properties_maxLength_tooltip: "Longitud máxima: ",
		properties_minLength_tooltip: "Longitud mínima: ",
		properties_minValue_tooltip: "Valor mínimo: ",
		properties_maxValue_tooltip: "Valor máximo: ",
		properties_format_tooltip: "Formato: ",
		properties_description_tooltip: "Descripción: ",

		properties_type_boolean_tooltip: "Booleano",
		properties_type_date_tooltip: "Fecha",
		properties_type_time_tooltip: "Hora",
		properties_type_timestamp_tooltip: "Indicación de fecha y hora",
		properties_type_decimal_tooltip: "Valor decimal",
		properties_type_double_tooltip: "Número de coma flotante",
		properties_type_short_tooltip: "Entero",
		properties_type_integer_tooltip: "Entero",
		properties_type_long_tooltip: "Entero",
		properties_type_string_tooltip: "Serie de texto",
		properties_type_string_alpha_tooltip: "Serie alfabética",
		properties_type_string_alphanum_tooltip: "Serie alfanumérica",
		properties_type_string_ext_tooltip: "Serie alfanumérica ampliada",
		properties_type_string_num_tooltip: "Serie numérica",
		properties_type_binary_tooltip: "Binario",
		properties_type_object_tooltip: "Objeto",
		properties_type_reference_tooltip: "Esta propiedad hace referencia a otro elemento del repositorio.",
		properties_type_guid_tooltip: "Identificador exclusivo global",
		properties_type_group_tooltip: "Usuarios y grupos",
		properties_type_user_tooltip: "Usuarios",
		properties_type_childComponent_tooltip: "componente hijo",

		properties_childComponent_minCardinalityOnly_tooltip: "Esta propiedad debe tener ${0} valores como mínimo.",
		properties_childComponent_maxCardinalityOnly_tooltip: "Esta propiedad no puede tener más de ${0} valores.",
		properties_childComponent_minMaxCardinality_tooltip: "Esta propiedad debe tener un mínimo de ${0} valores y no más de ${1} valores.",
		properties_childComponent_noCardinality_tooltip: "Esta propiedad puede tener cualquier número de valores.",

		properties_type_guid_example_tooltip: ", por ejemplo {F8DF248A-D0F8-4FEC-B086-1F52DA81A5EF}",
		properties_single_select_tooltip: "Seleccione un valor de la lista.",
		properties_single_select_choice_tooltip: "Seleccione un valor.",
		properties_multiple_select_typein_tooltip: "Introduzca uno o varios valores.",
		properties_multiple_select_choice_tooltip: "Seleccione uno o varios valores.",
		properties_not_selectable_tooltip: "No se puede seleccionar la categoría.",
		properties_none: "Ninguno",
		properties_none_tooltip: "Seleccione <i>Ninguno</i> para borrar el valor actual de esta propiedad.",
		properties_value_empty: "Sin valor",
		properties_value_read_only: "Sólo lectura",
		properties_clear_label: "Borrar",
		properties_clear_tooltip: "Si se borra el valor de este campo, se borrará el valor en el repositorio después de que haya pulsado <b>Guardar</b>.",
		properties_box_custom_properties: "Propiedades personalizadas",
		properties_box_metadata_name_in_use: "Este nombre ya se está utilizando. Especifique otro nombre para la propiedad personalizada.",

		properties_templates: "Plantillas",
		properties_add_template: "Añadir plantilla",
		properties_remove_template: "Eliminar",
		/* Checkin Document Dialog */
		checkin_dialog_title: "Incorporar",
		// Check in is self-evident - not much to say here that requires an intro message.
		// ID recommends not displaying an intro message for the check in dialog.
		// checkin_context_info: "Upload your changes to the repository and unlock the document.",
		checkin_checkin_label: "Incorporar",
		checkin_cancel_label: "Cancelar",
		checkin_file_name_label: "Nombre de archivo",
		checkin_document_status_title: "Registrar documento",
		checkin_document_status_uploading_msg: "Cargando archivo...",
		checkin_document_status_checkingin_msg: "Incorporando archivo...",
		launch_action_window_title: "IBM Content Navigator",

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:		
		viewer_redaction_save_mode_title: "Seleccionar modo de redacción",
		viewer_redaction_new_document_confirmation_question: "¿Desea guardar la redacción como un documento nuevo o como un archivo local?",
		viewer_redaction_new_version_confirmation_question: "¿Desea guardar la redacción como una versión nueva?",
		viewer_redaction_new_version_confirmation_question_never: "¿Desea guardar la redacción como un contenido nuevo?",		
		viewer_redaction_new_document_button: "Sí",
		viewer_redaction_new_document_cancel_button: "No",
		viewer_redaction_add_document_confirmation_question: "¿Desea guardar la redacción como un documento nuevo, como una versión nueva o como un archivo local?",
		viewer_redaction_add_document_confirmation_question_version_never: "¿Desea guardar la redacción como un documento nuevo, como un contenido nuevo o como un archivo local?",
		viewer_redaction_add_document_button: "Nuevo documento",
		viewer_redaction_add_new_version_button: "Nueva versión",
		viewer_redaction_add_new_version_button_version_never: "Nuevo contenido",
		viewer_redaction_add_local_file_button: "Archivo local",
		// Created by:  James Iuliano
		// Reviewed by:  TBD
		// Score:
		// Comments:
		viewer_select_redaction_reason_dialog_title: "Seleccionar razón de redacción",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why do we want to allow them to check it in if the ET is missing? What are the repercussions?
		checkin_entry_template_not_retrieved_warning: "La plantilla de entrada que se ha utilizado para añadir este documento al repositorio no se puede encontrar. El documento se incorporará al repositorio sin utilizar la plantilla de entrada.",
		property_entry_template_not_retrieved_warning: "La plantilla de entrada que se ha utilizado para añadir este documento al repositorio no se puede encontrar. Las propiedades del documento se mostrarán sin utilizar la plantilla de entrada.",
		multi_edit_entry_template_not_found_name: "[No encontrado]",
		multi_edit_entry_template_not_retrieved_warning: "No se encuentra la plantilla de entrada que se ha utilizado para añadir estos elementos al repositorio. Las propiedades del elemento se modificarán sin utilizar la plantilla de entrada.",
		checkin_major_version_hover: "Incrementa el número de versión de documento en uno y establece el estado de documento en Publicado. Si la opción no está seleccionada, el documento no está listo para su publicación y se incorpora como una versión menor.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		checkin_not_checked_out: "No se puede incorporar el documento porque no se ha extraído.",

		// This is a duplicate of the server error message 1005, needed at the client when the server cannot be accessed.
		// This client version also uses adminResponse to display the failed login response text.
		//    error.bad.userid.password.id=1005
		//    error.bad.userid.password=The user ID or password is not valid for the server.
		//    error.bad.userid.password.userResponse=Ensure that you entered your user ID and password correctly.
		//
		error_bad_userid_password: "El ID de usuario o la contraseña no son válidos para el servidor.",
		error_bad_userid_password_userResponse: "Asegúrese de haber introducido el ID de usuario y la ID de usuario correctamente.",
		error_bad_userid_password_adminResponse: "Se ha devuelto el siguiente error: ${0}.",
		error_bad_userid_password_number: 1005,
		error_bad_userid_password_0: "mensaje_error",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem?
		http_send_error: "No puede establecerse una conexión con el cliente web mediante el URL siguiente: ${0}.",
		http_send_error_explanation: "Este error puede venir causado por un problema de configuración en el servidor de aplicaciones web o por un problema con la aplicación del cliente web.",
		http_send_error_userResponse: "Intente volver a iniciar la sesión. Si el problema persiste, informe de este error al administrador del sistema.",
		http_send_error_adminResponse: "Se ha devuelto el siguiente error HTTP: ${1}.",
		http_send_error_0: "URL_cliente_web",
		http_send_error_1: "error_HTTP",
		http_send_error_number: 2000,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Do we have specific examples of what could be causing this problem? Is the issue around the firewall accurate?
		http_error: "No puede establecerse una conexión con el cliente web mediante el URL siguiente: ${0}.",
		http_error_explanation: "Es posible que necesite autenticarse ante un cortafuegos, o es posible que el servidor de aplicaciones web no esté en ejecución o que no se pueda acceder al mismo debido a problemas de red.",
		http_error_userResponse: "Si necesita autenticarse ante un cortafuegos, hágalo e intente volver a iniciar la sesión. Si el problema persiste, informe de este error al administrador del sistema.",
		http_error_adminResponse: "Se ha devuelto el siguiente error HTTP: ${1}.",
		http_error_0: "URL_cliente_web",
		http_error_1: "error_HTTP",
		http_error_number: 2001,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: How is this any different than error #2000?
		http_response_bad: "No puede establecerse una conexión con el cliente web mediante el URL siguiente: ${0}.",
		http_response_bad_explanation: "Este error puede venir causado por un problema de configuración en el servidor de aplicaciones web o por un problema con el cliente web.",
		http_response_bad_userResponse: "Intente volver a iniciar la sesión. Si el problema persiste, informe de este error al administrador del sistema.",
		http_response_bad_adminResponse: "Se ha devuelto el siguiente error: ${1}.",
		http_response_bad_0: "URL_cliente_web",
		http_response_bad_1: "error_HTTP",
		http_response_bad_number: 2002,

		unititled_document_name: "Sin título",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_init_failed: "El applet de correo electrónico no se puede iniciar.",
		email_applet_init_failed_explanation: "Este problema puede producirse cuando el cliente de correo electrónico no está correctamente instalado y configurado o si no hay instalada una versión soportada de Java Runtime Environment (JRE) en la estación de trabajo.",
		email_applet_init_failed_userResponse: "Para resolver el problema:<ul><li>Asegúrese de que su aplicación de correo electrónico se ha instalado y se ha configurado como el cliente de correo predeterminado en la estación de trabajo.</li><li>Compruebe que hay una versión soportada de JRE instalada en la estación de trabajo especificando el siguiente mandato en un indicador de mandatos: java-version.</li></ul><p>Se puede encontrar una lista de las versiones soportadas de JRE en el documento <i>Requisitos previos de hardware y software para IBM Content Navigator</i> en el sitio de IBM Software Support.</p>",
		email_applet_init_failed_number: 2003,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_JNI_LOAD_FAILED: "La aplicación de correo electrónico no se ha podido iniciar debido a que no se ha podido cargar un archivo DLL necesario.",
		email_applet_JNI_LOAD_FAILED_explanation: "El archivo WCEmailAppletJNI.dll necesario no se ha podido cargar porque es posible que el directorio temporal esté lleno en la estación de trabajo.",
		email_applet_JNI_LOAD_FAILED_userResponse: "Asegúrese de que el directorio temporal tiene suficiente espacio. A continuación, intente volver a enviar el documento desde el cliente web. De forma predeterminada, el archivo WCEmailAppletJNI.dll se carga en el directorio temporal que se especifica en los valores del navegador web.",
		email_applet_JNI_LOAD_FAILED_number: 2004,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_CREATED: "La aplicación de correo electrónico no se ha podido iniciar debido a que el applet de correo electrónico no puede crear un archivo temporal.",
		email_applet_TEMP_FILE_NOT_CREATED_explanation: "Es posible que el directorio temporal esté lleno en la estación de trabajo.",
		email_applet_TEMP_FILE_NOT_CREATED_userReponse: "Asegúrese de que el directorio temporal tiene suficiente espacio. A continuación, intente volver a enviar el documento desde el cliente web.",
		email_applet_TEMP_FILE_NOT_CREATED_number: 2005,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_WRITE_FAILED: "La aplicación de correo electrónico no se ha podido iniciar porque el applet de correo electrónico no puede acceder al directorio temporal.",
		email_applet_TEMP_FILE_WRITE_FAILED_explanation: "Es posible que el directorio temporal de la estación de trabajo esté lleno, o es posible que no disponga del acceso apropiado para escribir en el directorio temporal.",
		email_applet_TEMP_FILE_WRITE_FAILED_userResponse: "Asegúrese de que el directorio temporal tiene suficiente espacio y de que tiene permisos de grabación para el directorio temporal. A continuación, intente volver a enviar el documento desde el cliente web. Si el problema persiste, póngase en contacto con el administrador del sistema.",
		email_applet_TEMP_FILE_WRITE_FAILED_number: 2006,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_TEMP_FILE_NOT_DELETED: "El applet de correo electrónico no puede suprimir un archivo temporal.",
		email_applet_TEMP_FILE_NOT_DELETED_explanation: "Puede que otra aplicación esté utilizando el archivo o que ya no exista en la estación de trabajo.",
		email_applet_TEMP_FILE_NOT_DELETED_userResponse: "Si el archivo lo utiliza otra aplicación, cierre dicha aplicación. Si el archivo está en el sistema de archivos local, elimine el siguiente archivo del directorio temporal de la estación de trabajo: ${0}.",
		email_applet_TEMP_FILE_NOT_DELETED_number: 2007,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_MALFORMED_ATTACHMENT_URL: "No se puede crear el enlace con el documento.",
		email_applet_MALFORMED_ATTACHMENT_URL_explanation: "El repositorio ha devuelto el URL en un formato no válido.",
		email_applet_MALFORMED_ATTACHMENT_URL_userResponse: "Cierre el navegador web, incluidas todas las pestañas y las sesiones, y vuelva a iniciar sesión. Intente volver a enviar el documento desde el cliente web. Si este problema continúa, póngase en contacto con el soporte de software de IBM.",
		email_applet_MALFORMED_ATTACHMENT_URL_number: 2008,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_CANNOT_OPEN: "El applet de correo electrónico no puede adjuntar el archivo a un correo electrónico.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_explanation: "El repositorio ha devuelto un URL al documento con un formato no válido.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_userResponse: "Cierre el navegador web, incluidas todas las pestañas y las sesiones, y vuelva a iniciar sesión. Intente volver a enviar el documento desde el cliente web. Si este problema continúa, póngase en contacto con el soporte de software de IBM.",
		email_applet_ATTACHMENT_URL_CANNOT_OPEN_number: 2009,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Closing the web browser proves the problem is reproducable.
		email_applet_ATTACHMENT_URL_READ_FAILED: "No se ha podido crear el archivo adjunto.",
		email_applet_ATTACHMENT_URL_READ_FAILED_explanation: "El applet de correo electrónico no puede leer el URL para el documento.",
		email_applet_ATTACHMENT_URL_READ_FAILED_userResponse: "Cierre el navegador web, incluidas todas las pestañas y las sesiones, y vuelva a iniciar sesión. Intente volver a enviar el documento desde el cliente web. Si este problema continúa, póngase en contacto con el soporte de software de IBM.",
		email_applet_ATTACHMENT_URL_READ_FAILED_number: 2010,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_RETRIEVE_DOC_FAILED: "No se ha podido recuperar el documento desde el repositorio.",
		email_applet_RETRIEVE_DOC_FAILED_explanation: "Es posible que la sesión haya excedido el tiempo de espera, que el repositorio o el servidor de aplicaciones web no esté en ejecución o que haya un problema con la configuración del cliente web.",
		email_applet_RETRIEVE_DOC_FAILED_userResponse: "Inicie sesión e intente volver a enviar el documento por correo electrónico. Si el problema continúa, solicite al administrador del sistema que revise los registros de errores del repositorio.",
		email_applet_RETRIEVE_DOC_FAILED_adminResponse: "Si ha configurado el cliente web para convertir documentos AFP en otro formato, como PDF, antes de enviar los documentos como archivos adjuntos, asegúrese de que la conversión esté bien configurada.",
		email_applet_RETRIEVE_DOC_FAILED_number: 2011,

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments:
		email_applet_CONVERT_DOC_FAILED: "El documento no se ha podido convertir a PDF.",
		email_applet_CONVERT_DOC_FAILED_explanation: "La herramienta utilizada para transformar documentos a PDF no soporta al tipo de archivo.",
		email_applet_CONVERT_DOC_FAILED_userResponse: "Cierre esta página e intente de nuevo enviar el documento por correo electrónico sin convertirlo a PDF.",
		email_applet_CONVERT_DOC_FAILED_number: 2072,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_USER_ABORT: "No se ha creado el correo electrónico.",
		email_applet_MAPI_USER_ABORT_explanation: "Abra su aplicación de correo electrónico y asegúrese de que está funcionando correctamente. A continuación, intente volver a enviar el documento desde el cliente web. Si el problema continúa, póngase en contacto con el administrador del sistema para que revise los registros de sucesos del sistema operativo.",
		email_applet_MAPI_USER_ABORT_userResponse: "Si desea cerrar la aplicación de correo electrónico, no es necesario que realice ninguna otra acción. Para enviar el correo electrónico, inicie sesión en la aplicación de correo electrónico e intente volver a enviar el documento desde el cliente web.",
		email_applet_MAPI_USER_ABORT_number: 2012,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_FAILURE: "El correo electrónico no se puede crear.",
		email_applet_MAPI_FAILURE_explanation: "Es posible que el cliente de correo electrónico no esté abierto o que no haya iniciado la sesión.",
		email_applet_MAPI_FAILURE_userResponse: "Abra su aplicación de correo electrónico y asegúrese de que está funcionando correctamente. A continuación, intente volver a enviar el documento desde el cliente web. Si el problema continúa, póngase en contacto con el administrador del sistema para que revise los registros de sucesos del sistema operativo.",
		email_applet_MAPI_FAILURE_number: 2013,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_LOGON_FAILURE: "El correo electrónico no se puede crear.",
		email_applet_MAPI_LOGON_FAILURE_explanation: "No ha iniciado la sesión en el cliente de correo electrónico. El cliente de correo electrónico debe estar abierto y se debe haber iniciado la sesión para poder enviar un mensaje desde el cliente web.",
		email_applet_MAPI_LOGON_FAILURE_userResponse: "Abra el cliente de correo electrónico e inicie sesión. A continuación, intente volver a enviar el documento desde el cliente web.",
		email_applet_MAPI_LOGON_FAILURE_number: 2014,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_DISK_FULL: "El correo electrónico no se ha podido crear debido a que el archivo temporal no se puede crear en la estación de trabajo.",
		email_applet_MAPI_DISK_FULL_explanation: "Es posible que el directorio temporal esté lleno en la estación de trabajo.",
		email_applet_MAPI_DISK_FULL_userResponse: "Asegúrese de que el directorio temporal tiene suficiente espacio. A continuación, intente volver a enviar el documento desde el cliente web.",
		email_applet_MAPI_DISK_FULL_number: 2015,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INSUFFICIENT_MEMORY: "El correo electrónico no se puede crear porque no hay suficiente memoria del sistema.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_explanation: "Puede que tenga demasiadas aplicaciones abiertas.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_userResponse: "Cierre las aplicaciones que no esté utilizando y, a continuación, intente enviar de nuevo el documento desde el cliente web.",
		email_applet_MAPI_INSUFFICIENT_MEMORY_number: 2016,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ACCESS_DENIED: "Se ha denegado el acceso MAPI.",
		email_applet_MAPI_ACCESS_DENIED_explanation: "Es posible que el acceso Messaging Application Programming Interface (MAPI) no esté habilitado o no esté soportado para su aplicación de correo electrónico. MAPI es el protocolo de mensajería que se utiliza para habilitar la comunicación entre el cliente web y la aplicación de correo electrónico.",
		email_applet_MAPI_ACCESS_DENIED_userResponse: "Póngase en contacto con el administrador del sistema.",
		email_applet_MAPI_ACCESS_DENIED_adminResponse: "Asegúrese de que la aplicación de correo electrónico tenga el acceso MAPI configurado y que la configuración sea correcta. Si el problema continúa, póngase en contacto con el soporte de software de IBM.",
		email_applet_MAPI_ACCESS_DENIED_number: 2017,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_SESSIONS: "El archivo adjunto o el enlace al elemento no se han podido crear.",
		email_applet_MAPI_TOO_MANY_SESSIONS_explanation: "Es posible que tenga demasiadas sesiones del navegador web abiertas.",
		email_applet_MAPI_TOO_MANY_SESSIONS_userResponse: "Cierre todas las sesiones de navegador web que no esté utilizando. A continuación, intente volver a enviar el documento desde el cliente web. Si el problema persiste, póngase en contacto con el administrador del sistema.",
		email_applet_MAPI_TOO_MANY_SESSIONS_number: 2018,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		// What is the maximum number of files? or is this related to file size? If file size, too big for what? Temp directory?
		email_applet_MAPI_TOO_MANY_FILES: "No se puede enviar el correo electrónico.",
		email_applet_MAPI_TOO_MANY_FILES_explanation: "Es posible que esté intentando enviar demasiados archivos adjuntos.",
		email_applet_MAPI_TOO_MANY_FILES_userResponse: "Seleccione menos archivos. A continuación, intente volver a enviar el documento desde el cliente web.",
		email_applet_MAPI_TOO_MANY_FILES_number: 2019,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TOO_MANY_RECIPIENTS: "No se puede enviar el correo electrónico.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_explanation: "Puede que envíe el correo electrónico a demasiados destinatarios.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_userResponse: "Envíe el correo electrónico a menos destinatarios.",
		email_applet_MAPI_TOO_MANY_RECIPIENTS_number: 2020,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_NOT_FOUND: "No se ha podido crear el archivo adjunto.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_explanation: "Es posible que se hayan suprimido algunos archivos temporales necesarios antes de que se pudiera crear el archivo adjunto. Este error se puede producir si se ha limpiado la memoria caché del navegador antes de enviar el correo electrónico.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_ATTACHMENT_NOT_FOUND_number: 2021,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE: "No se ha podido crear el archivo adjunto.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_explanation: "Es posible que se hayan suprimido algunos archivos temporales necesarios antes de que se pudiera crear el archivo adjunto. Este error se puede producir si se ha limpiado la memoria caché del navegador antes de enviar el correo electrónico.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_ATTACHMENT_OPEN_FAILURE_number: 2022,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can we display the error that is returned by the email application?
		// If we don't display the error, where can the admin find information about where the error occurred? Local log? dependent on the email client? e.g. event logs?
		// Need to give admin info about how to determine the cause or location of the problem.
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE: "La aplicación de correo electrónico no ha podido crear el archivo adjunto.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_ATTACHMENT_WRITE_FAILURE_number: 2023,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_UNKNOWN_RECIPIENT: "El correo electrónico no se puede enviar al destinatario especificado.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_explanation: "Puede que el destinatario no exista en la libreta de direcciones.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_userResponse: "Compruebe el nombre del destinatario e intente enviar el documento de nuevo.",
		email_applet_MAPI_UNKNOWN_RECIPIENT_number: 2024,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_BAD_RECIPTYPE: "El correo electrónico no se puede enviar al destinatario especificado.",
		email_applet_MAPI_BAD_RECIPTYPE_explanation: "Puede que la dirección de correo electrónico tenga un formato incorrecto.",
		email_applet_MAPI_BAD_RECIPTYPE_userResponse: "Asegúrese de haber introducido una dirección de correo electrónico válida e intente enviar el documento de nuevo.",
		email_applet_MAPI_BAD_RECIPTYPE_number: 2025,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NO_MESSAGES: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_NO_MESSAGES_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_NO_MESSAGES_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_NO_MESSAGES_number: 2026,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_MESSAGE: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_INVALID_MESSAGE_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_INVALID_MESSAGE_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_INVALID_MESSAGE_number: 2027,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_TEXT_TOO_LARGE: "No se puede enviar el correo electrónico.",
		email_applet_MAPI_TEXT_TOO_LARGE_explanation: "Puede que el correo electrónico sea demasiado largo.",
		email_applet_MAPI_TEXT_TOO_LARGE_userResponse: "Reduzca el texto del correo electrónico e intente volver a enviarlo.",
		email_applet_MAPI_TEXT_TOO_LARGE_nnumber: 2028,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_SESSION: "El correo electrónico no se puede crear.",
		email_applet_MAPI_INVALID_SESSION_explanation: "Es posible que el cliente de correo electrónico haya fallado al intentar crear el correo electrónico.",
		email_applet_MAPI_INVALID_SESSION_userResponse: "Reinicie el cliente de correo electrónico e intente enviar de nuevo el documento desde el cliente web.",
		email_applet_MAPI_INVALID_SESSION_number: 2029,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_TYPE_NOT_SUPPORTED: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_TYPE_NOT_SUPPORTED_number: 2030,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_AMBIGUOUS_RECIPIENT: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_AMBIGUOUS_RECIPIENT_number: 2031,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_MESSAGE_IN_USE: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_MESSAGE_IN_USE_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_MESSAGE_IN_USE_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_MESSAGE_IN_USE_number: 2032,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NETWORK_FAILURE: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_NETWORK_FAILURE_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_NETWORK_FAILURE_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_NETWORK_FAILURE_number: 2033,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_INVALID_EDITFIELDS: "Puede que el correo electrónico no se haya compuesto correctamente.",
		email_applet_MAPI_INVALID_EDITFIELDS_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_INVALID_EDITFIELDS_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_INVALID_EDITFIELDS_number: 2034,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		email_applet_MAPI_INVALID_RECIPS: "El correo electrónico no se puede enviar al destinatario especificado.",
		email_applet_MAPI_INVALID_RECIPS_explanation: "Puede que la dirección de correo electrónico tenga un formato incorrecto.",
		email_applet_MAPI_INVALID_RECIPS_userResponse: "Asegúrese de que ha especificado una dirección de correo electrónico válida y vuelva a enviar el documento.",
		email_applet_MAPI_INVALID_RECIPS_number: 2035,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: Can this error occur for IBM Content Navigator users? Or is this outside the scope of IBM Content Navigator?
		email_applet_MAPI_NOT_SUPPORTED: "El cliente de correo electrónico no puede realizar la acción solicitada.",
		email_applet_MAPI_NOT_SUPPORTED_explanation: "La aplicación de correo electrónico ha devuelto un error inesperado.",
		email_applet_MAPI_NOT_SUPPORTED_userResponse: "Intente enviar el documento de nuevo desde el cliente web.",
		email_applet_MAPI_NOT_SUPPORTED_number: 2036,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		error_property_cardinality: "A una de las propiedades le falta el número de valores necesario.",
		error_property_cardinality_explanation: "Algunas propiedades tienen un número mínimo y máximo de valores.",
		error_property_cardinality_userResponse: "Utilice la ayuda contextual para determinar qué propiedad requiere un número mínimo de valores. A continuación, especifique el número mínimo de valores e inténtelo de nuevo.",
		error_property_cardinality_number: 2037,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Why is this an error rather than in-line validation?
		error_property_filename: "Se necesita un nombre de archivo.",
		error_property_filename_explanation: "",
		error_property_filename_userResponse: "Especifique un nombre de archivo e inténtelo de nuevo.",
		error_property_filename_number: 2038,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		plugin_error: "El plug-in ${0} contiene errores.",
		plugin_error_explanation: "Se ha producido un error al evaluar el JavaScript para el plug-in ${0}. Si continúa utilizando el cliente web, podría encontrarse errores adicionales.",
		plugin_error_userResponse: "Póngase en contacto con el administrador del sistema.",
		plugin_error_adminResponse: "Existe un problema del plug-in que el proveedor del plug-in debe solucionar. Se recomienda que elimine el plug-in de la configuración de cliente web hasta que se haya resuelto el problema del plug-in.",
		plugin_error_number: 2039,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_old_format_entry_template_error: "No se puede abrir la plantilla de entrada.",
		open_old_format_entry_template_error_explanation: "La plantilla de entrada utiliza un formato anterior que no se soporta en el cliente web.",
		open_old_format_entry_template_error_userResponse: "Solicite al administrador del sistema que actualice la plantilla de entrada.",
		open_old_format_entry_template_error_adminResponse: "Utilice Application Engine o el Diseñador de plantilla de entrada de Workplace XT para guardar una versión actualizada de la plantilla de entrada.",
		open_old_format_entry_template_error_number: 2040,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_custom_object_entry_template_error: "No se puede abrir la plantilla de entrada.",
		open_custom_object_entry_template_error_explanation: "El cliente web no admite el siguiente tipo de plantilla de entrada: plantillas de entrada de objeto personalizado.",
		open_custom_object_entry_template_error_userResponse: "Abra una plantilla de entrada diferente.",
		open_custom_object_entry_template_error_number: 2041,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_forms_object_error: "El objeto eforms no se puede abrir.",
		open_forms_object_error_explanation: "El cliente web no admite los siguientes tipos de objeto eforms: plantilla de formulario, datos de formulario, política de documento y política de flujo de trabajo.",
		open_forms_object_error_userResponse: "Abra un documento diferente.",
		open_forms_object_error_number: 2042,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		entry_template_folder_restricted_error: "No puede utilizar la plantilla de entrada ${0}.",
		entry_template_folder_restricted_error_explanation: "La plantilla de entrada añade elementos a la carpeta ${1} y no dispone de los permisos apropiados para añadir elementos a dicha carpeta.",
		entry_template_folder_restricted_error_userResponse: "Seleccione una plantilla de entrada diferente o solicite al administrador del sistema que le otorgue los permisos apropiados para añadir elementos a la carpeta ${1}.",
		entry_template_folder_restricted_error_0: "nombre_plantilla_entrada",
		entry_template_folder_restricted_error_1: "nombre_carpeta",
		entry_template_folder_restricted_error_number: 2043,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_records_entry_template_error: "No se puede abrir la plantilla de entrada.",
		open_records_entry_template_error_explanation: "El cliente web no soporta el siguiente tipo de plantilla de entrada: declarar como plantillas de entrada de registro.",
		open_records_entry_template_error_userResponse: "Abra una plantilla de entrada diferente.",
		open_records_entry_template_error_number: 2044,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		open_workflow_error: "El flujo de trabajo no se puede abrir.",
		open_workflow_error_explanation: "El cliente web no admite la apertura de flujos de trabajo.",
		open_workflow_error_userResponse: "Abra un documento diferente.",
		open_workflow_error_number: 2045,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_unable_to_view_error: "El documento no se puede abrir.",
		viewer_unable_to_view_error_explanation: "No se ha configurado ningún visor para documentos de este tipo o el visor configurado no es compatible con su sistema.",
		viewer_unable_to_view_error_userResponse: "Pida a su administrador del sistema que configure un visor para documentos de este tipo y asegúrese de que el visor configurado funcione con el sistema del usuario.",
		viewer_unable_to_view_error_adminResponse: "Utilice la herramienta de administración para configurar un visor para este tipo de documento.",
		viewer_unable_to_view_error_number: 2046,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_cannot_open_error: "La búsqueda no se puede abrir.",
		search_cannot_open_error_explanation: "La característica de búsqueda no está configurada para este escritorio.",
		search_cannot_open_error_userResponse: "Pregunte al administrador del sistema si puede acceder a un escritorio que incluya una característica de búsqueda o si dicho escritorio se puede actualizar para incluir la característica de búsqueda.",
		search_cannot_open_error_number: 2047,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		viewer_document_load_failed_error: "El documento no se ha cargado.",
		viewer_document_load_failed_error_explanation: "El visor Daeja ViewONE Professional no ha podido abrir el documento.",
		viewer_document_load_failed_error_userResponse: "Para obtener más información, vea el mensaje de error que se muestra en el visor.",
		viewer_document_load_failed_error_number: 2048,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_session_expired: "El documento no se puede visualizar.",
		viewer_session_expired_explanation: "El contenido de documento no se puede recuperar.",
		viewer_session_expired_userResponse: "Intente volver a iniciar sesión. Si el problema continúa, es posible que el servidor de aplicaciones no esté en ejecución. Solicite al administrador del sistema que revise los registros de errores de IBM Content Navigator o reinicie el servidor.",
		viewer_session_expired_number: 2049,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		ajaxViewer_getPage_failed: "El documento no se puede visualizar.",
		ajaxViewer_getPage_failed_explanation: "El visor AJAX Viewer ha recibido una respuesta de error al recuperar el contenido de la página. Es posible que el servidor de aplicaciones no esté en ejecución.",
		ajaxViewer_getPage_failed_userResponse: "Cierre el navegador web y vuelva a iniciar sesión. Si el problema continúa, solicite al administrador del sistema que revise los archivos de registro del servidor de aplicaciones web o que reinicie el servidor.",
		ajaxViewer_getPage_failed_number: 2050,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		viewer_java_plugin_not_found: "No se ha encontrado Java Runtime Environment (JRE) en la estación de trabajo.",
		viewer_java_plugin_not_found_explanation: "No se ha encontrado el complemento o no está instalada la versión correcta de JRE.",
		viewer_java_plugin_not_found_userResponse: "Compruebe que JRE está instalado. Por ejemplo, en un indicador de mandatos, escriba el siguiente mandato: Java -version. Si el JRE no está instalado o está instalado con un nivel de versión incorrecto, instale la versión adecuada del JRE. Se incluye una lista de versiones soportadas en el documento <i>Requisitos previos de hardware y software para IBM Content Navigator</i> en sitio de IBM Software Support.",
		viewer_java_plugin_not_found_number: 2051,

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments:
		viewer_pdf_plugin_not_found: "El documento no se puede visualizar en el navegador web.",
		viewer_pdf_plugin_not_found_explanation: "No se ha encontrado el plug-in que se utiliza para visualizar los documentos en PDF en el navegador web.",
		viewer_pdf_plugin_not_found_userResponse: "En lugar de visualizarlo en una ventana del visor se descargará el archivo PDF en su estación de trabajo.",
		viewer_pdf_plugin_not_found_number: 2052,

		/* Add Document error messages*/
		add_document_single_item_error: "El siguiente elemento no se puede añadir al repositorio: ${0}.",
		add_document_single_item_error_explanation: "Este error se puede producir por una de las siguientes razones:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Está intentando añadir un documento que se ha movido o se ha suprimido.</li>" + "<li>Está intentando añadir un documento que se ha renombrado.</li>" + "<li>Está intentando añadir un documento que está dañado.</li>" + "<li>Está intentando añadir un documento que está abierto en otra aplicación.</li>" + "<li>Está intentando añadir una carpeta al repositorio.</li>" + "<li>No tiene los permisos adecuados en el sistema operativo para acceder al documento.</li>" + "</ul>",
		add_document_single_item_error_userResponse: "Tome las medidas adecuadas para resolver el problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si el documento se ha movido o si se ha cambiado su nombre, busque el documento en el sistema de archivos e intente volver a añadirlo.</li>" + "<li>Si el documento está abierto en otra aplicación, ciérrelo e intente volver a agregarlo.</li>" + "</ul>" + "<br>No puede añadir carpetas al repositorio.",
		add_document_single_item_error_0: "elemento_fallido",
		add_document_single_item_error_number: 2053,

		add_document_multiple_items_error: "Los ${0} siguientes elementos no se pueden añadir al repositorio: ${1}.",
		add_document_multiple_items_error_explanation: "Un problema en uno de los elementos impide que se añada ningún elemento al repositorio. Este error se puede producir por una de las siguientes razones:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Está intentando añadir un documento que se ha movido o se ha suprimido.</li>" + "<li>Está intentando añadir un documento que se ha renombrado.</li>" + "<li>Está intentando añadir un documento que está dañado.</li>" + "<li>Está intentando añadir un documento que está abierto en otra aplicación.</li>" + "<li>Está intentando añadir una carpeta al repositorio.</li>" + "<li>No tiene los permisos adecuados en el sistema operativo para acceder al documento.</li>" + "</ul>",
		add_document_multiple_items_error_userResponse: "Tome las medidas adecuadas para resolver el problema:" + "<ul style='margin-bottom:0px;margin-top:0px;'>" + "<li>Si un documento se ha movido o si se ha cambiado su nombre, busque el documento en el sistema de archivos e intente volver a añadir los elementos.</li>" + "<li>Si hay un documento abierto en otra aplicación, ciérrelo e intente añadir los elementos de nuevo.</li>" + "<li>Si un documento se ha eliminado o está dañado, anule la selección del elemento e intente volver a añadir los elementos restantes.</li>" + "</ul>" + "<br>No puede añadir carpetas al repositorio.",
		add_document_multiple_items_error_0: "número_de_elementos",
		add_document_multiple_items_error_1: "elementos_fallidos",
		add_document_multiple_items_error_number: 2054,

		add_drag_and_drop_no_files: "No puede arrastrar y soltar elementos desde esta ubicación.",

		// Created by: TBD
		// Reviewed by:
		// Score: Pass
		// Comments:
		open_forms_work_object_error: "El objeto eforms no se puede abrir.",
		open_forms_work_object_error_explanation: "El cliente web no soporta el siguiente tipo de objeto de eForm: política de flujo de trabajo.",
		open_forms_work_object_error_userResponse: "Abra un documento diferente.",
		open_forms_work_object_error_number: 2055,

		viewer_privilege_to_view_error: "El documento no se puede abrir.",
		viewer_privilege_to_view_error_explanation: "No tiene los privilegios adecuados para ver el documento.",
		viewer_privilege_to_view_error_userResponse: "Solicite al propietario del documento o al administrador del sistema que le otorgue los permisos adecuados para ver el documento.",
		viewer_privilege_to_view_error_number: 2056,

		add_document_too_many_items_error: "Los elementos no se pueden añadir al repositorio.",
		add_document_too_many_items_error_explanation: "Puede añadir hasta ${0} elementos a la vez. Está intentando añadir ${1} elementos.",
		add_document_too_many_items_error_userResponse: "Elimine algunos de los de la lista e intente volver a añadir los elementos. También puede ponerse en contacto con su administrador del sistema para aumentar el número máximo de documentos que puede añadir a la vez a este escritorio.",
		add_document_too_many_items_error_0: "número_máximo_de_elementos",
		add_document_too_many_items_error_1: "número_de_elementos",
		add_document_too_many_items_error_number: 2057,

		http_ltpa_expired: "No puede establecerse una conexión con el cliente web mediante el URL siguiente: ${0}.",
		http_ltpa_expired_explanation: "La clave LTPA asociado a su sesión de navegación ha caducado.",
		http_ltpa_expired_userResponse: "Reinicie el navegador web e intente volver a iniciar la sesión. Si el problema persiste, informe del error siguiente al administrador del sistema:${1}.",
		http_ltpa_expired_0: "URL_cliente_web",
		http_ltpa_expired_1: "error_HTTP",
		http_ltpa_expired_number: 2058,

		dnd_no_privilege_error: "El documento no se puede añadir a la carpeta ${0}.",
		dnd_no_privilege_error_explanation: "Los permisos de la carpeta impiden que se añadan documentos a la misma.",
		dnd_no_privilege_error_userResponse: "Añada el documento a otra carpeta.",
		dnd_no_privilege_error_0: "nombre_elemento",
		dnd_no_privilege_error_number: 2059,

		modify_document_too_many_items_error: "No se pueden modificar los elementos.",
		modify_document_too_many_items_error_explanation: "Puede modificar un máximo de ${0} elementos cada vez. Está intentando modificar ${1} elementos.",
		modify_document_too_many_items_error_userResponse: "Seleccione menos elementos e intente volver a modificar los elementos. También puede ponerse en contacto con el administrador del sistema para aumentar el número máximo de elementos que se pueden modificar al mismo tiempo en este escritorio.",
		modify_document_too_many_items_error_0: "número_máximo_de_elementos",
		modify_document_too_many_items_error_1: "número_de_elementos",
		modify_document_too_many_items_error_number: 2060,

		add_document_multiple_unique_values_error: "No puede utilizar la clase ${0}.",
		add_document_multiple_unique_values_error_explanation: "La clase ${0} contiene una o varias propiedades que requieren un valor exclusivo para cada documento. Cuando añade varios documentos, todos los documentos utilizan los mismos valores.",
		add_document_multiple_unique_values_error_userResponse: "Seleccione una clase diferente o añada los documentos por separado.",
		add_document_multiple_unique_values_error_0: "nombre_visualización_clase",
		add_document_multiple_unique_values_error_number: 2061,

		add_document_multiple_unique_values_entry_template_error: "No puede utilizar la plantilla de entrada ${0}.",
		add_document_multiple_unique_values_entry_template_error_explanation: "La plantilla de entrada ${0} requiere que añada los documentos a la clase ${1}. Sin embargo, la clase ${1} contiene una o varias propiedades que requieren un valor exclusivo para cada documento. Cuando añade varios documentos, todos los documentos utilizan los mismos valores.",
		add_document_multiple_unique_values_entry_template_error_userResponse: "Seleccione una plantilla de entrada diferente o añada los documentos por separado.",
		add_document_multiple_unique_values_entry_template_error_0: "nombre_plantilla_entrada",
		add_document_multiple_unique_values_entry_template_error_1: "nombre_visualización_clase",
		add_document_multiple_unique_values_entry_template_error_number: 2062,

		entry_template_class_restricted_error: "No puede utilizar la plantilla de entrada ${0}.",
		entry_template_class_restricted_error_explanation: "La plantilla de entrada añade elementos utilizando la case ${1} y no dispone de los permisos apropiados para añadir elementos utilizando la clase.",
		entry_template_class_restricted_error_userResponse: "Seleccione una plantilla de entrada diferente o solicite al administrador del sistema que le otorgue los permisos apropiados para añadir elementos utilizando la clase ${1}.",
		entry_template_class_restricted_error_0: "nombre_plantilla_entrada",
		entry_template_class_restricted_error_1: "nombre_visualización_clase",
		entry_template_class_restricted_error_number: 2063,

		process_reassign_error: "El elemento de trabajo no se puede volver a asignar a otro usuario.",
		process_reassign_error_explanation: "El flujo de trabajo prohíbe esta acción.",
		process_reassign_error_userResponse: "Puede abrir el elemento de trabajo y completar el paso actual en el elemento de trabajo.  Para obtener más información acerca de este problema, pida al propietario del elemento que verifique si el elemento de trabajo se puede volver a asignar.",
		process_reassign_error_number: 2064,

		customaction_loadurl_error: "No se puede cargar la siguiente acción personalizada: ${0}.",
		customaction_loadurl_error_explanation: "La acción personalizada no está en una ubicación accesible. El URL actual de la acción personalizada es ${1}.",
		customaction_loadurl_error_userResponse: "Solicite al administrador que traslade la acción personalizada a una ubicación accesible.",
		customaction_loadurl_error_adminResponse: "El archivo JSP que define la acción personalizada se debe proporcionar como parte de la aplicación web eClient o la aplicación web IBM Content Navigator.",
		customaction_loadurl_error_number: 2065,

		// URL Addressability of feature
		feature_invalid: "No se puede importar la característica siguiente: ${0}.",
		feature_invalid_explanation: "Este problema se puede producir si la característica no está disponible en el escritorio especificado o si el nombre de la característica se ha escrito incorrectamente.",
		feature_invalid_userResponse: "Cuando pulsa Aceptar, se le redirigirá a la característica predeterminada de este escritorio. Póngase en contacto con el administrador del sistema para informarle acerca del problema.",
		feature_invalid_adminResponse: "Si la característica debe estar disponible en el escritorio, actualice la configuración del escritorio en la herramienta de administración. Si la característica no debe estar incluida en el escritorio o se ha escrito incorrectamente, solicite ayuda al desarrollador de aplicaciones que ha creado el URL de esta característica para que actualice el URL.",
		feature_invalid_number: 2066,
		feature_invalid_0: "nombre_característica",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Pass
		// Comments:
		search_unsupportedTeamspaceSearch_error: "La búsqueda ${0} no se puede abrir.",
		search_unsupportedTeamspaceSearch_error_explanation: "Debe encontrarse en un espacio de equipo para abrir esta búsqueda.",
		search_unsupportedTeamspaceSearch_error_userResponse: "Seleccione una búsqueda diferente.",
		search_unsupportedTeamspaceSearch_error_number: 2067,

		wrong_import_file_type_error: "No se puede importar el archivo siguiente: ${0}.",
		wrong_import_file_type_error_explanation: "El archivo debe ser un archivo de propiedades.",
		wrong_import_file_type_error_userResponse: "Seleccione el archivo de propiedades que ha exportado desde la herramienta de administración.",
		wrong_import_file_type_error_number: 2068,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_found_error: "No se ha encontrado el repositorio ${0} en el escritorio ${1}.",
		browse_repository_not_found_error_explanation: "El repositorio debe encontrarse en el escritorio y estar habilitado para la función de examen cuando se especifica en un parámetro URL.",
		browse_repository_not_found_error_userResponse: "Asegúrese de que el ID de repositorio especificado en el URL sea correcto, que el repositorio se haya añadido al escritorio ${1} y que la característica de examen esté habilitada para el repositorio.",
		browse_repository_not_found_error_number: 2069,

		// Created by: JonE
		// Reviewed by: 
		// Score: 
		// Comments:
		browse_repository_not_enabled_error: "El repositorio ${0} no está habilitado para la característica de búsqueda en el escritorio ${1}.",
		browse_repository_not_enabled_error_explanation: "El repositorio debe estar habilitado para la función de examen cuando se especifica en un parámetro URL.",
		browse_repository_not_enabled_error_userResponse: "Habilite la función de examen para el repositorio ${0} en el escritorio ${1}.",
		browse_repository_not_enabled_error_number: 2070,

		// Created by: Gabriel
		// Reviewed by: Julia B., 02.27.2014
		// Score: Pass
		// Comments:
		invalid_xt_stored_search_criteria_error: "La búsqueda no se ha podido completar porque el enlace incluye criterios no válidos.",
		invalid_xt_stored_search_criteria_error_explanation: "El siguiente valor no es válido: ${0}.",
		invalid_xt_stored_search_criteria_error_userResponse: "Solicite al administrador del sistema que proporcione un enlace actualizado.",
		invalid_xt_stored_search_criteria_error_adminResponse: "Edite el par nombre-valor adecuado en el URL. Si no sabe cuáles son los valores válidos para la propiedad, abra la búsqueda almacenada en el diseñador de búsqueda de FileNet Workplace XT para determinar un valor válido.",
		invalid_xt_stored_search_criteria_error_number: 2071,

		// Created by: Gabriel
		// Reviewed by:
		// Score:
		// Comments:
		unified_search_invalid_fixed_value_error: "La búsqueda entre repositorios no se puede abrir.",
		unified_search_invalid_fixed_value_error_explanation: "La búsqueda entre repositorios incluye criterios no válidos. Este problema se puede producir cuando un criterio tiene un valor fijo que no es compatible con las otras propiedades de una correlación. Por ejemplo, este problema puede producirse si el valor fijo es una serie, pero las otras propiedades de la correlación son enteros.",
		unified_search_invalid_fixed_value_error_userResponse: "Si dispone de los permisos adecuados para editar la búsqueda, elimine los criterios no válidos y vuelva a guardar la búsqueda. Si no dispone de los permisos adecuados para editar la búsqueda, pida al propietario de la búsqueda o al administrador del sistema que guarden la búsqueda de nuevo.",
		unified_search_invalid_fixed_value_error_number: 2073,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_invalid_json_error: "La solicitud no se ha podido completar.",
		launch_action_invalid_json_error_explanation: "Los datos que se han pasado al cliente web no son válidos.",
		launch_action_invalid_json_error_userResponse: "Indique al administrador del sistema qué aplicación estaba utilizando cuando se produjo este problema.",
		launch_action_invalid_json_error_adminResponse: "La aplicación cliente no ha enviado un objeto JSON válido al cliente web. Póngase en contacto con IBM Software Support para obtener ayuda adicional.",
		launch_action_invalid_json_error_number: 2074,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_not_found_error: "La solicitud no se ha podido completar.",
		launch_action_not_found_error_explanation: "La acción ${0} no está configurada para ningún menú del escritorio ${1}.",
		launch_action_not_found_error_userResponse: "Solicite al administrador del sistema que configure el escritorio ${1} para que utilice un menú que contenga la acción ${0} o que le asigne un escritorio que incluya la acción ${0}.",
		launch_action_not_found_error_number: 2075,

		// Created by: Jon Elslip
		// Reviewed by:
		// Score:
		// Comments:
		launch_action_repository_not_found_error: "La solicitud no se ha podido completar.",
		launch_action_repository_not_found_error_explanation: "El repositorio ${0} no está asociado al escritorio ${1}.",
		launch_action_repository_not_found_error_userResponse: "Solicite al administrador del sistema que asocie el repositorio ${0} con el escritorio ${1} o que le asigne un escritorio que incluya el repositorio ${0}.",
		launch_action_repository_not_found_error_number: 2076,

		teamspace_cannot_open_error: "El espacio de equipo no se puede abrir.",
		teamspace_cannot_open_error_explanation: "La característica de espacio de equipo no está configurada para este escritorio.",
		teamspace_cannot_open_error_userResponse: "Pregunte al administrador del sistema si puede acceder a un escritorio que incluya una característica de espacio de equipo o si dicho escritorio se puede actualizar para incluir la característica de espacio de equipo.",
		teamspace_cannot_open_error_number: 2077,

		// Created by: Ku Chang
		// Reviewed by: TBD
		// Score: 
		// Comments:
		viewer_redaction_checkin_failed: "Se ha producido un error al incorporar el contenido redactado.",
		viewer_redaction_checkin_failed_explanation: "El visor ha recibido una respuesta de error al incorporar el contenido redactado.",
		viewer_redaction_checkin_failed_userResponse: "Pida al administrador del sistema que revise los archivos de registro del servidor de aplicaciones web.",
		viewer_redaction_checkin_failed_number: 2078,

		// Created by: JUN LIU
		// Reviewed by: TBD
		// Score: 
		// Comments: For CMOD
		add_document_odserver_odwek_version_od_error: "No puede añadir documentos a este repositorio.",
		add_document_odserver_odwek_version_od_error_explanation: "La versión actual de IBM Content Manager OnDemand Server o de ODWEK no está al nivel mínimo requerido para que se admita añadir documentos a un repositorio de Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_userResponse: "Pida su administrador que compruebe qué versiones de Content Manager OnDemand Server y ODWEK son necesarias para admitir el añadido de documentos a repositorios de Content Manager OnDemand.",
		add_document_odserver_odwek_version_od_error_number: 2090,

		add_document_too_many_items_od_error: "Los elementos no se pueden añadir al repositorio.",
		add_document_too_many_items_od_error_explanation: "En el caso de repositorios de IBM Content Manager OnDemand, solo es posible añadir los elementos de uno en uno.",
		add_document_too_many_items_od_error_userResponse: "Elimine algunos elementos de su lista e intente volver a añadir los elementos de uno en uno.",
		add_document_too_many_items_od_error_0: "número_máximo_de_elementos",
		add_document_too_many_items_od_error_1: "número_de_elementos",
		add_document_too_many_items_od_error_number: 2091,

		add_document_filesize_empty_od_error: "El elemento no se puede añadir al repositorio.",
		add_document_filesize_empty_od_error_explanation: "No se puede añadir archivos vacíos a un repositorio de IBM Content Manager OnDemand.",
		add_document_filesize_empty_od_error_userResponse: "Añada contenido al archivo e intente volver a añadir dicho archivo, o añada un elemento diferente.",
		add_document_filesize_empty_od_error_number: 2105,
		// This message exists in both here and ServicesMessages.properties
		unified_search_repository_not_found_error: "La búsqueda entre repositorios no se puede abrir.",
		unified_search_repository_not_found_error_explanation: "La búsqueda entre repositorios incluye uno o varios repositorios no válidos. Este problema se puede producir cuando los repositorios incluidos en la búsqueda se han suprimido de la aplicación o eliminado del escritorio actual.",
		unified_search_repository_not_found_error_userResponse: "Si dispone de los permisos adecuados para editar la búsqueda, guarde la búsqueda de nuevo. Cuando se guarda la búsqueda, el cliente web elimina los repositorios no válidos de la búsqueda. Si no dispone de los permisos adecuados para editar la búsqueda, pida al propietario de la búsqueda o al administrador del sistema que guarden la búsqueda de nuevo.",
		unified_search_repository_not_found_error_number: 1614,

		// This message exists in both here and ServicesMessages.properties - This needs to be review by ID
		// Office online has error 2650, 2651 and 2652 (2650 and 2651 are in ServicesMessages.js)
		new_document_using_office_online_error: "El documento no se puede crear.",
		edit_document_using_office_online_error: "El documento no se puede abrir.",
		edit_document_using_office_online_error_explanation: "El URL del servidor de Microsoft Office Online no está configurado.",
		edit_document_using_office_online_error_userResponse: "Para poder utilizar Office Online, el administrador debe habilitar en primer lugar el servidor de Office Online en un repositorio y especificar el URL del servidor de Microsoft Office Online.",		
		edit_document_using_office_online__error_number: 2652,
		edit_document_using_office_online_error_explanation1: "El documento no se puede abrir en Microsoft Office Online.",
		edit_document_using_office_online_error_userResponse1: "Solicite al administrador que actualice la integración del servidor de MS Office Online.<br><br> Si el usuario necesita acceder a este documento desde Microsoft Office Online, vaya a la página Editar integración del repositorio y actualice la integración del servidor de MS Office Online para incluir la clase en la lista de clases que se deben modificar para su compatibilidad con Office Online. ",		
		browser_not_support_this_viewer: "El visor configurado no es compatible con su explorador.",
		browser_not_support_this_viewer_explanation: "${0} no está soportado en el navegador.",
		browser_not_support_this_viewer_userResponse: "Utilice otro visor para abrir el documento. Encontrará una lista de exploradores soportados en el documento <i>Requisitos previos de hardware y software para IBM Content Navigator</i> en el sitio de soporte de IBM Software.",
		browser_not_support_this_viewer_number: 2653,
		// -----------------------------------------------------------------------------------------
		// End of error messages, add new messages above here and pick up the next error number.
		// -----------------------------------------------------------------------------------------

		//Process information dialog title
		process_information_title: "Información de flujo de trabajo",
		process_information_info_text: "El elemento seleccionado se está ejecutando actualmente en los siguientes flujos de trabajo.",

		/* SearchTemplate, SearchCriteria models */
		operator_EQUAL: "Igual",
		operator_NOTEQUAL: "No es igual",
		operator_LIKE: "Similar",
		operator_STARTSWITH: "Empieza por",
		operator_ENDSWITH: "Finaliza con",
		operator_NOTLIKE: "No es similar",
		operator_NULL: "Está vacío",
		operator_NOTNULL: "No está vacío",
		operator_LESS: "Menos que",
		operator_LESSOREQUAL: "Menos que o igual",
		operator_GREATER: "Mayor que",
		operator_GREATEROREQUAL: "Mayor que o igual",
		operator_BETWEEN: "Entre",
		operator_NOTBETWEEN: "No entre",
		operator_IN: "Incluir todo",
		operator_INANY: "Incluir cualquiera",
		operator_NOTIN: "Excluir todo",
		operator_CONTAINS: "Contiene",

		/* SearchForm widget */
		search_button_tooltip: "Buscar documentos que coincidan con los criterios.",
		reset_button_tooltip: "Restablece la búsqueda a los valores predeterminados establecidos por el administrador.",
		clear_button_tooltip: "Elimina todos los valores introducidos para la búsqueda.",

		/*SearchTab widget */
		/*Is this being used? We don't see this in the UI:*/
		select_search: "Seleccionar búsqueda",
		append_to_search: "Anexo que debe buscarse",

		/*What we want to see here is a variable that increments with each new tab opened per session, similar to MS Office projects, the fall back would be to use Untitled Search. */
		new_search: "Nueva búsqueda",
		new_unified_search: "Nueva búsqueda entre repositorios",
		searh_name_contains: "El nombre de búsqueda contiene",
		keep_search_criteria_expanded: "Mantener abiertos los criterios de búsqueda",
		showing_results: "Se están mostrando resultados para:",
		open_in_new_window: "Abrir en una ventana nueva",
		open_in_new_tab: "Abrir en pestaña nueva",
		close_tab: "Cerrar separador",
		add_repository: "Añadir repositorio",
		edit_repository: "Editar repositorio",
		remove_repository: "Eliminar",
		search_scope: "Ámbito de búsqueda",
		search_class_template: "Clase",
		object_type_version: "Tipo y versión de objeto",
		not_applicable: "No aplicable",
		unified_search_including_subfolders: " (Incluye subcarpetas)",
		unified_search_dialog_intro_text: "Seleccione el repositorio y la búsqueda o las clases que desea incluir en la búsqueda.",
		unified_search_class_or_template: "Clase o plantilla",

		select_object_fieldset_legend: "¿Cómo desea encontrar los elementos para adjuntar?",
		select_object_create_new_search: "Nueva búsqueda",
		select_object_search_template: "Búsqueda existente",

		search_criteria: "Criterios de búsqueda",
		search_criteria_no_colon: "Criterios de búsqueda",
		search_in_multiple: "Buscar en (${0}):",
		search_location_including_subfolders: "${0} incluidas subcarpetas",
		search_class: "Clase:",
		search_class_multiple: "Clase (${0}):",
		search_class_including_subclasses: "${0} incluidas subclases",
		search_class_all_pseudo: "Todo",
		search_results: "Resultados de búsqueda",
		select_operator: "Seleccionar un operador",
		ending_value: "El valor final de la propiedad ${0} es:",
		search_options: "Opciones de búsqueda:",
		search_version: "Versión:",
		search_released_version: "Versión de release",
		search_current_version: "Versión actual",
		search_all_versions: "Todas las versiones",
		search_file_type_filter: "Filtro de tipo de archivo:",
		search_one_file_type: "1 tipo de archivo",
		search_many_file_types: "${0} tipos de archivo",
		search_action_filter: "Filtro de acción:",
		search_action_filter_hover_help: "Restrinja los resultados para incluir solo los archivos en los que los usuarios hayan realizado una acción específica.<br/>Por ejemplo, puede buscar solo los documentos que se hayan añadido el 20 de septiembre de 2012.",
		search_action_filter_enabled: "El filtro de acción está habilitado.",
		search_enable: "Habilitar",
		search_disable: "Inhabilitar",
		search_by: "por",
		search_added: "Añadido",
		search_modified: "Modificado",
		search_checked_out: "Extraído",
		search_date_operator_on: "Activar",
		search_date_operator_not_on: "No el",
		search_date_operator_before: "Antes de",
		search_date_operator_after: "Después de",
		search_version_hover_help_p8: "Existe una versión de release disponible para todos los usuarios. Un documento de tipo Versión actual significa que uno o más usuarios están editando ese documento.",
		search_version_hover_help_cm: "Una versión actual es la última versión del elemento.",
		search_using: "Buscar elementos que coincidan:",
		search_property_and_text_criteria: "Tanto los valores de propiedades como los criterios de texto",
		search_property_or_text_criteria: "O los valores de propiedad o los criterios de texto",
		search_property_and_text: "Tanto la propiedad como los criterios de texto",
		search_property_or_text: "O la propiedad o los criterios de texto",
		search_property_options: "Opciones de propiedad:",
		search_property_option_match_all: "Todas las propiedades",
		search_property_option_match_any: "Alguna de las propiedades",
		search_property_option_match_all_summary: "Coincidencia total",
		search_property_option_match_any_summary: "Coincidir con cualquiera",
		search_total_count_type_total: "Total",
		search_total_count_type_atleast: "Al menos",
		search_content_size_filter: "Filtro de tamaño del contenido",
		search_content_size_filter_any: "Cualquier tamaño de contenido",

		/* Search work options */
		search_work_filter: "Filtro de elementos de trabajo:",
		search_work_filter_hover_help: "Acota los resultados para incluir únicamente los elementos que están en un flujo de trabajo. Por ejemplo, puede acotar los resultados para incluir sólo los elementos de trabajo que están activos.<br /><br />Esta opción no se aplica si desea ver todas las versiones de los elementos que devuelve la búsqueda.",
		search_work_filter_enabled: "El filtro de elementos de búsqueda está habilitado",
		search_work_filter_status: "Estado:",
		search_work_filter_step: "Paso:",
		search_work_filter_owner: "Propietario:",
		search_work_filter_status_all: "Todos los elementos",
		search_work_filter_status_active: "Elementos activos",
		search_work_filter_status_suspended: "Elementos suspendidos",
		search_work_filter_process_all: "Todos los flujos de trabajo",
		search_work_filter_step_all: "Todos los pasos",
		search_work_filter_owner_all: "Todos los usuarios.",
		search_work_filter_step_error: "El nombre del paso no existe.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input: "La búsqueda no se puede completar sin información adicional. Especifique un valor para al menos una condición.",
		search_insufficient_input_box: "La búsqueda no se puede completar sin información adicional. Especifique los criterios de búsqueda de texto o seleccione una plantilla de metadatos.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		search_insufficient_input_to_auto_run: "La búsqueda no se puede configurar para ejecutarse al abrirse sin información adicional. Especifique un valor para al menos una condición.",
		search_member_required: "Para compartir esta búsqueda con los usuarios y grupos especificados, seleccione al menos un usuario o grupo con el que compartir esta búsqueda.",
		search_criteria_layout_and: "Y",
		search_criteria_layout_or: "O",
		search_prompt_close_without_save: "¿Desea cerrar sin guardar los cambios?",
		search_prompt_close_all_without_save: "¿Desea cerrar todos los separadores sin guardar los cambios?",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Needs review by the editor.
		// Changed and provided by Julia B. from user story 29335, 04.12.2013
		search_auto_resolved_warning: "Uno de los siguientes tipos de criterio de búsqueda no es válido en este repositorio: ${0}. Para ejecutar la búsqueda en el cliente web, se debe eliminar el criterio no válido. Si guarda la búsqueda, se eliminará el criterio no válido. Si no desea cambiar la búsqueda, cierre la búsqueda.",
		search_invalid_repository: "Uno o varios repositorios",
		search_invalid_class: "Una o varias clases",
		search_invalid_folder: "Una o varias carpetas",
		search_invalid_file_type: "Uno o varios tipos de archivos",
		search_invalid_property: "Una o varias propiedades",
		search_invalid_text_search: "Criterio de búsqueda de texto",
		search_invalid_work: "Criterios de filtro de elementos de trabajo",

		search_operator_pulldown_missing: "Se requiere un operador. Seleccione un operador en el menú desplegable. Si no ve ningún operador, solicite al administrador del sistema que seleccione el separador <b>Buscar</b> en la herramienta de administración para ver si todos los operadores están ocultos. Si se trata de una búsqueda entre repositorios, puede que el menú desplegable no contenga ningún operador si las propiedades que están correlacionadas entre sí no tienen operadores comunes.",

		/*SearchBuilder */
		open_search_builder: "Nueva búsqueda",
		document_type: "Clase",
		show_all_properties: "Mostrar todas las propiedades",
		text_search_label: "Buscar elementos con los siguientes términos:",
		text_search_place_holder: "Utilice una combinación de términos y operadores: * ? o \"frases de coincidencia exacta\"",
		text_search_place_holder_box: "Utilice una combinación de términos y operadores: AND, OR, NOT, y \"frases de coincidencia exacta\"",
		text_search_place_holder_cascade_proximity: "Utilice una combinación de términos y operadores: * o ?",
		text_search_place_holder_common: "Utilice una combinación de términos y \"frases de coincidencia exacta\"",
		text_search_hover_help_p8: "Utilice el asterisco (*) o el signo de interrogación (?) como carácter comodín. Utilice comillas dobles (\"\") para coincidencias exactas.",
		text_search_hover_help_p8_only_crs: "Utilice el asterisco (*) o el signo de interrogación (?) como carácter comodín. Utilice comillas dobles (\"\") para coincidencias exactas. Cuando se especifican varios términos, la búsqueda en varios repositorios devuelve elementos que contienen cualquiera de los términos.",
		text_search_hover_help_cm: "Utilice el asterisco (*) o el signo de interrogación (?) como carácter comodín. Utilice comillas dobles (\"\") para coincidencias exactas. Utilice el signo menos (-) antes de los términos que deben excluirse y el signo (+) antes de los términos que deben incluirse.",
		text_search_hover_help_box: "Utilice AND entre términos para que coincida con todos los términos. Utilice OR entre términos para que coincida con alguno de los términos. Utilice comillas dobles (\"\") para coincidencias exactas. Preceda un término con NOT para excluirlo.",
		text_search_hover_help_common: "Utilice comillas dobles (\"\") para coincidencias exactas. Cuando se especifican varios términos, la búsqueda en varios repositorios devuelve elementos que contienen todos los términos.",
		text_search_options: "Opciones de texto:",
		text_search_options_hover_help: "Si utiliza operadores que no son caracteres comodín, seleccione Operadores avanzados.",
		text_search_option_any: "Cualquiera de estos términos",
		text_search_option_all: "Todos los términos",
		text_search_option_proximity: "En proximidad con las palabras:",
		text_search_option_none: "Operadores avanzados",
		text_search_option_authoring: "La búsqueda de texto es:",
		text_search_option_authoring_hover_help: "Seleccione una opción que determine cómo desea que se pongan a disposición de los usuarios los criterios de búsqueda de texto. Si no desea incluir ningún criterio de búsqueda en la búsqueda, oculte la opción. En caso contrario, puede permitir que los criterios de búsqueda de texto se editen o sean necesarios para los usuarios, o bien que sean de solo lectura.",
		text_search_option_hide: "Ocultar criterios",
		text_search_option_hide_hover_help: "Seleccione esta opción si no desea incluir ningún criterio de búsqueda de texto en la búsqueda o para permitir que otros usuarios especifiquen criterios de búsqueda de texto.",
		text_search_option_in: "En la etiqueta HTML/XML ${0}",
		text_search_option_paragraph: "En el mismo párrafo",
		text_search_option_sentence: "En la misma oración",
		text_search_option_vql: "Consulta VQL",
		text_search_option_none_hover_help: "Utilizar - para preceder los términos que deben excluirse.",
		text_search_option_cascade_proximity_hover_help: "Restringe los resultados de búsqueda a aquellos términos que aparecen en un rango de palabras que no incluyen frases exactas.",

		box_search_metadata: "Metadatos:",
		box_search_select_template: "Seleccionar plantilla",
		box_search_no_templates: "No hay plantillas disponibles",
		box_text_search_options_search_within: "Ámbito de búsqueda:",
		box_text_search_options_search_within_everything: "Todo",
		box_text_search_options_search_within_file_content: "Contenido de documento",
		box_text_search_options_search_within_tags: "Etiquetas",
		box_text_search_options_limit_to: "Sólo búsqueda:",

		add_property: "Añadir propiedad",
		edit_template: "Editar búsqueda",
		save_search: "Guardar búsqueda",
		search_template_name: "Nombre:",
		search_template_desc: "Descripción:",
		auto_run: "Ejecutar la búsqueda cuando se abra",
		show_in_tree: "Mostrar la búsqueda en la estructura de carpetas",
		show_in_tree_hover_help: "Si se guarda una búsqueda en una carpeta, sólo se muestra en la lista de contenido de forma predeterminada. Si selecciona esta opción, la búsqueda se mostrará también en el árbol de carpetas de la vista Examinar.  No obstante, la búsqueda se muestra en el árbol de carpetas únicamente si guarda la búsqueda en una carpeta.",
		share_search_with: "Compartir búsqueda con:",
		remove_member: "Eliminar ${0}",
		ok_button_label: "Aceptar",
		save_template: "Guardar",
		save_template_title: "Si necesita buscar elementos específicos con frecuencia, guarde los criterios de búsqueda.",
		remove_criterion: "Eliminar",
		apply_button_label: "Aplicar",
		empty_search_results_pane: "Ejecute una búsqueda para ver resultados.",

		/*Search_in control   */
		folder_tree_repository_root_name: "Todos el repositorio",

		repository_already_selected: "No se puede añadir el repositorio ${0} a la búsqueda entre repositorios porque ya está incluido en la búsqueda. <br/> Un repositorio solo se puede incluir en la búsqueda entre repositorios una sola vez. <br/>Seleccione un repositorio diferente para incluirlo en la búsqueda entre repositorios.",

		repository_limit_reached: "El repositorio ${0} no se puede añadir a la búsqueda entre repositorios. Puede añadir un máximo de ${1} repositorios a la búsqueda.",

		nomore_criteria_toappend: "Todas las propiedades correlacionadas ya están incluidas en el criterio de búsqueda. No se han añadido propiedades al criterio de búsqueda.",
		nomore_criteria_toappend_regular: "Todas las propiedades ya están incluidas en el criterio de búsqueda. No se han añadido propiedades al criterio de búsqueda.",

		/* OD Save Search dialog */
		reload_label: "Volver a cargar",
		od_save_search_help_text: "Escriba un nombre para la búsqueda o seleccione una búsqueda existente que deba sustituirse",
		public_access_label: "Permitir que otros utilicen esta búsqueda",
		od_delete_search_help_text: "Seleccionar una o varias búsquedas que deban suprimirse",
		delete_save_searches: "Suprimir búsquedas guardadas",

		/* Unified Search */
		unified_search_enable_text_search: "Incluir criterios de búsqueda de texto",
		unified_search_text_search_enabled: "Búsqueda de texto incluida",
		unified_search_mapping: "Correlación",
		unified_search_new_mapping: "Nueva correlación",
		unified_search_mapping_name: "Nombre de correlación",
		unified_search_mapping_dialog_instructions: "Seleccione las propiedades que desea correlacionar. Algunas propiedades se pueden correlacionar con propiedades con un tipo de datos diferente. Por ejemplo, puede correlacionar una propiedad de serie con una propiedad de entero. Cuando correlaciona una propiedad con otra, las propiedades se tratan como una sola propiedad en la búsqueda entre repositorios.",
		unified_search_filter_available_properties: "Filtrar propiedades disponibles",
		unified_search_available_properties: "Propiedades disponibles",
		unified_search_mapped_properties: "Propiedades correlacionadas",
		unified_search_single_values: "valores individuales",
		unified_search_multiple_values: "valores múltiples",
		unified_search_add_mapping: "Añadir correlación",
		unified_search_warn_remove_repository: "El repositorio seleccionado se utiliza en el criterio de búsqueda.\nSi elimina el repositorio, se suprimirán las correlaciones y el criterio de búsqueda que incluyan el repositorio.\n\n¿Desea eliminar el repositorio?",
		unified_search_warn_update_repository_mappings: "Cambiar la selección de propiedades para este repositorio afecta a los criterios de búsqueda.\n\nLos criterios de búsqueda incluyen una o varias correlaciones que incluyen una o varias propiedades que está eliminando. Se deben suprimir todas las correlaciones que incluyen propiedades que esté eliminando. Para ejecutar la búsqueda, todos los criterios de búsqueda que incluyan estas correlaciones se deben suprimir.\n\n¿Desea actualizar las opciones del repositorio y suprimir las correlaciones y criterios de búsqueda?",
		unified_search_warn_update_repository_mappings_reset: "Incluir criterios de búsqueda de texto para este repositorio afecta a los criterios de búsqueda en varios repositorios.\n\nLos criterios de búsqueda de propiedad que incluyen una correlación con propiedades para este repositorio deben borrarse para ejecutar la búsqueda.\n\n¿Desea actualizar las opciones del repositorio y borrar los criterios de búsqueda?",
		unified_search_warn_update_repository_text_criteria: "Eliminar los criterios de búsqueda de texto de este repositorio afecta a los criterios de búsqueda en varios repositorios.\n\nLos criterios de búsqueda de texto se deben eliminar de los criterios de búsqueda en varios repositorios para ejecutar la búsqueda.\n\n¿Desea actualizar las opciones del repositorio y suprimir los criterios de búsqueda de texto?",
		unified_search_warn_update_repository_text_criteria_and_mappings: "Eliminar los criterios de búsqueda de texto y cambiar la selección de propiedades de este repositorio afecta a los criterios de búsqueda en varios repositorios.\n\nLos criterios de búsqueda de texto se deben eliminar de los criterios de búsqueda en varios repositorios para ejecutar la búsqueda. Además, los criterios de búsqueda de propiedades incluyen una o varias correlaciones que incluyen una o varias propiedades que está eliminando. Se deben suprimir todas las correlaciones que incluyen propiedades que esté eliminando. Para ejecutar la búsqueda, todos los criterios de búsqueda de propiedades que incluyan estas correlaciones se deben suprimir.\n\n¿Desea actualizar las opciones del repositorio y suprimir los criterios de búsqueda de texto, las correlaciones y los criterios de búsqueda de propiedades?",
		unified_search_warn_update_repository_text_criteria_and_mappings_reset: "Excluir criterios de búsqueda de texto para este repositorio afecta a los criterios de búsqueda en varios repositorios.\n\nLos criterios de búsqueda de propiedad que incluyen una correlación con propiedades para este repositorio deben borrarse para ejecutar la búsqueda. Los criterios de búsqueda de texto pueden suprimirse de los criterios de búsqueda en varios repositorios para ejecutar la búsqueda.\n\n¿Desea actualizar las opciones de repositorio y borrar los criterios de búsqueda?",
		unified_search_warn_remove_mapping: "Eliminar esta correlación afecta a los criterios de búsqueda.\n\nLos criterios de búsqueda que utilizan la correlación se deben eliminar para ejecutar la búsqueda.\n\n¿Desea actualizar la correlación y suprimir los criterios de búsqueda?",
		unified_search_warn_update_mapping: "Realizar cambios en esta correlación afecta a los criterios de búsqueda.\n\nLos criterios de búsqueda que utilizan la correlación se deben borrar para asegurarse de que la búsqueda no incluya operadores o valores no válidos.\n\n¿Desea actualizar la correlación y borrar los criterios de búsqueda?",
		unified_search_warn_update_mapping_not_searchable: "Realizar cambios en esta correlación afecta a los criterios de búsqueda.\n\nCuando las propiedades correlacionadas son únicamente de visualización, no puede utilizar la correlación en los criterios de búsqueda. Para ejecutar la búsqueda, todos los criterios de búsqueda que utilicen la correlación se deben eliminar.\n\n¿Desea actualizar la correlación y suprimir los criterios de búsqueda?",
		unified_search_warn_update_mapping_box_searchable: "Realizar cambios en esta correlación afecta a los criterios de búsqueda.\n\nLos criterios de búsqueda ya incluyen esta correlación más de una vez, y si añade la propiedad ${0} del repositorio ${1}, los criterios de búsqueda incluirán también la propiedad ${0} demasiadas veces. Para ejecutar la búsqueda, todos los criterios de búsqueda que utilicen la correlación se deben eliminar.\n\n¿Desea actualizar la correlación y suprimir los criterios de búsqueda?",
		unified_search_details: "Detalles de la búsqueda entre repositorios",
		unified_search_fixed_value_property: "Propiedad de valor fijo",
		unified_search_required_property: "Propiedad obligatoria",
		unified_search_display_only_property: "Propiedad de sólo visualización",
		unified_search_missing_required_properities: "La búsqueda no se puede guardar o ejecutar.<br/>Las siguientes propiedades son necesarias: ${0}. Debe incluir las propiedades siguientes en una correlación y añadir las propiedades con valores al criterio de búsqueda.",
		unified_search_property_repostory: "${0} (Repositorio: ${1})",
		unified_search_builder_no_mappings: "La búsqueda no se puede ejecutar.<br/>Debe crear una correlación de propiedades e incluirla en la <b>Visualización de resultados</b> para que la búsqueda pueda mostrar sus resultados.",
		unified_search_builder_insufficient_criteria_to_run: "La búsqueda no se puede ejecutar.<br/>Los criterios de búsqueda no incluyen criterios de búsqueda de texto o valores de propiedad para los repositorios siguientes:${0}Para cada repositorio incluido en la búsqueda, debe introducir criterios de búsqueda o crear una correlación de propiedad, incluirla en los criterios de propiedad y especificar un valor de propiedad.",
		unified_search_builder_insufficient_criteria_to_save: "La búsqueda no se puede guardar.<br/>Los criterios de búsqueda no incluyen criterios de búsqueda para los repositorios siguientes:${0}Para cada repositorio incluido en la búsqueda, debe llevar a cabo una de las opciones siguientes:<ol><li>Crear una correlación de propiedad e incluirla en los criterios de propiedad.</li><li>Modificar el repositorio para incluir criterios de búsqueda de texto, crear una correlación de propiedades e incluirla en la <b>Visualización de resultados</b>.</li></ol>",
		unified_search_runtime_insufficient_criteria_property: "La búsqueda no se puede ejecutar.<br/>Para cada repositorio incluido en la búsqueda, debe especificar al menos un valor de propiedad. Por ejemplo, puede especificar valores para las siguientes propiedades: ${0}",
		unified_search_runtime_insufficient_criteria_text: "La búsqueda no se puede ejecutar.<br/>Se necesitan criterios de búsqueda de texto.",
		unified_search_runtime_insufficient_criteria_text_or_properties: "La búsqueda no se puede ejecutar.<br/>Para cada repositorio incluido en la búsqueda, debe especificar al menos un valor de propiedad o introducir un criterio de búsqueda de texto. Por ejemplo, puede especificar valores para las siguientes propiedades: ${0}",
		unified_search_runtime_insufficient_criteria_text_and_properties: "La búsqueda no se puede ejecutar.<br/>Se necesitan criterios de búsqueda de texto. Para cada repositorio incluido en la búsqueda, debe especificar al menos un valor de propiedad o introducir un criterio de búsqueda de texto. Por ejemplo, puede especificar valores para las siguientes propiedades: ${0}",
		unified_search_invalid_criteria: "La búsqueda contiene un criterio no válido que impide que se ejecute la búsqueda.<br/>Se ha eliminado el criterio no válido. Sin embargo, debe guardar los cambios realizados en la búsqueda antes de poder ejecutar la búsqueda. Si no desea guardar los cambios, cierre la búsqueda.<br/><br/>No se han suprimido o modificado los siguientes elementos: ${0}",
		unified_search_invalid_fixed_values: "La búsqueda no se puede guardar o ejecutar.<br/>Los siguientes criterios de búsqueda tienen valores fijos que no son válidos: ${0}Lleve a cabo una de las acciones siguientes para resolver el problema:<ul><li>Elimine los criterios de búsqueda que contienen valores no válidos</li><li>Edite las correlaciones que incluyan la propiedad IBM Content Manager OnDemand con el valor fijo para eliminar la propiedad.</li><li>Edite las correlaciones que incluyan la propiedad IBM Content Manager OnDemand con el valor fijo para que todas las propiedades sean compatibles. Para obtener más información sobre las propiedades que se pueden correlacionar, consulte el enlace Más información del texto introductorio de la parte superior de la ventana de correlación de propiedades.</li></ul>",
		unified_search_cannot_add_properties: "No se pueden añadir propiedades a esta búsqueda.<br/>Todas las propiedades correlacionadas disponibles están ya en los criterios de búsqueda y cada propiedad se puede añadir a la búsqueda una sola vez.",
		unified_search_mapping_not_viewable: "Las propiedades de la plantilla de Box no se mostrarán en los resultados de búsqueda. Si desea añadir esta correlación como columna, correlacione al menos una propiedad que no sea una propiedad de plantilla de Box. Por ejemplo, puede seleccionar una propiedad desde otro repositorio.",

		unified_search_returned_more: "Al menos un repositorio ha superado los resultados máximos permitidos.",
		unified_search_partial_failure: "Se ha producido un error en al menos un repositorio.",
		unified_search_partial_failure_and_returned_more: "Se ha producido un error en al menos un repositorio y al menos un repositorio ha superado el máximo de resultados permitido.",
		unified_search_see_analysis: "Consulte el análisis de los resultados.",
		unified_search_analysis_intro_returned_more: "Para cada repositorio que haya superado el máximo de resultados permitido, intente refinar los criterios de búsqueda para que se devuelvan menos resultados. También puede ejecutar una sola búsqueda de repositorio para que se devuelvan más resultados que el máximo permitido para una búsqueda en varios repositorios.",
		unified_search_analysis_intro_partial_failure: "Revise la información del error que ha devuelto el repositorio o repositorios. Si corresponde, resuelva los errores y ejecute de nuevo la búsqueda entre repositorios.",
		unified_search_analysis_intro_partial_failure_and_returned_more: "Para cada repositorio en el que se haya producido un error, intente resolver el problema y ejecute la búsqueda de nuevo.<br/><br/>Para cada repositorio que haya superado el máximo de resultados permitido, intente refinar los criterios de búsqueda para que se devuelvan menos resultados. También puede ejecutar una sola búsqueda de repositorio para que se devuelvan más resultados que el máximo permitido para una búsqueda en varios repositorios.",
		unified_search_results_found: "Resultados encontrados",
		unified_search_maximum_allowed: "Máximo permitido",
		unified_search_maximum_exceeded: "Máximo superado",

		unified_search_mapping_rule_box: "Esta propiedad no se puede añadir a la correlación.<p>La propiedad ${0} del repositorio ${1} ya está en otra correlación y las propiedades buscables de este repositorio sólo se pueden incluir en una correlación por búsqueda.<br/>Seleccione una propiedad diferente para añadir a la correlación.</p>",
		unified_search_mapping_rule_repository: "No se puede añadir la propiedad a la correlación.<br/>La correlación ya incluye una propiedad del repositorio ${0}. Una correlación solo puede incluir una propiedad de un repositorio.<br/>Seleccione un repositorio diferente desde el que añadir una propiedad o cree una nueva correlación para la propiedad seleccionada.",
		unified_search_mapping_rule_data_type: "No se puede añadir la propiedad a la correlación.<br/>Una propiedad ${0} no se puede correlacionar con una propiedad ${1}. Seleccione otra propiedad que correlacionar o cree una nueva correlación para la propiedad seleccionada.<br/>Para obtener más información sobre las propiedades que se pueden correlacionar, consulte el enlace Más información del texto introductorio de la parte superior de la ventana.",
		unified_search_mapping_rule_cardinality: "No se puede añadir la propiedad a la correlación.<br/>Todas las propiedades de la correlación deben dar soporte a valores individuales o valores múltiples. La propiedad seleccionada es una propiedad ${0} y las propiedades de la correlación dan soporte a ${1}.<br/>Seleccione una propiedad diferente para añadirla a la correlación o cree una nueva correlación para la propiedad seleccionada.",
		unified_search_mapping_rule_fixed_value: "No se puede añadir la propiedad a la correlación.<br/>La correlación ya incluye una propiedad con un valor fijo. Una correlación solo puede incluir una propiedad con un valor fijo.<br/>Seleccione una propiedad diferente para añadirla a la correlación o cree una nueva correlación para la propiedad seleccionada.",
		unified_search_mapping_rule_child_component: "No se puede añadir la propiedad a la correlación.<br/>Una propiedad con un componente hijo no se puede correlacionar con otras propiedades. Si desea realizar búsquedas en esta propiedad, cree una nueva correlación para la propiedad seleccionada.",
		unified_search_mapping_rule_operator_intersection: "No se puede añadir la propiedad a la correlación.<br/>Todas las propiedades de la correlación deben tener uno o varios operadores en común. Sin embargo, la propiedad ${0} no tiene operadores en común con las otras propiedades de la correlación.<br/>Si resulta adecuado, seleccione una propiedad diferente. Si debe incluir la propiedad seleccionada, con la ayuda del administrador del sistema edite los operadores asociados a la propiedad.",

		// Created by: Calvin
		// Reviewed by: 
		// Score: 
		// Comments: 
		advanced_search_options_title: "Valores avanzados",
		advanced_search_options_intro: "Establezca opciones de criterios avanzados.",
		advanced_search_options_editable: "Modificable",
		advanced_search_options_readonly: "Sólo lectura",
		advanced_search_options_required: "Obligatorio",
		advanced_search_options_hidden: "Oculto",
		advanced_search_options_property_editable:"La propiedad es:",
		advanced_search_options_operators:"Operadores:",
		advanced_search_options_use_all:"Utilizar todos",
		advanced_search_options_use_selected:"Utilizar seleccionados",
		advanced_search_options_operators_filtered: "Operadores filtrados",
		// Data types in lowercase
		data_type_boolean: "booleano",
		data_type_date: "fecha",
		data_type_time: "hora",
		data_type_timestamp: "indicación de fecha y hora",
		data_type_decimal: "valor decimal",
		data_type_double: "número de coma flotante",
		data_type_short: "entero",
		data_type_integer: "entero",
		data_type_long: "entero",
		data_type_string: "serie de texto",
		data_type_string_alpha: "serie alfabética",
		data_type_string_alphanum: "serie alfanumérica",
		data_type_string_ext: "serie alfanumérica ampliada",
		data_type_string_num: "serie numérica",
		data_type_binary: "binario",
		data_type_object: "objeto",
		data_type_guid: "identificador global exclusivo",
		data_type_user: "usuarios",
		data_type_child_component: "componente hijo",

		/* Print Dialog */
		print_title: "Imprimir",
		print_message: "Imprimiendo: ${0}",
		print_print_button: "Imprimir",
		print_clean_margins_button: "Establecer todo en 0",
		print_type: "Tipo de impresora:",
		print_printer_server_options: "Opciones de impresión de servidor",
		print_printer_properties: "Propiedades de la impresora",
		print_printer_fax_properties: "Propiedades de fax",
		print_printer_name: "Nombre de Impresora:",
		print_fax_recipient: "Destinatario",
		print_fax_sender: "Remitente",
		print_copies: "Copias:",
		print_local_orientation: "Orientación",
		print_local_orientation_landscape: "Horizontal",
		print_local_orientation_portrait: "Vertical",
		print_local_margins: "Márgenes",
		print_local_margins_top: "Arriba",
		print_local_margins_bottom: "Abajo",
		print_local_margins_left: "Izquierda",
		print_local_margins_right: "Derecha",
		print_printer_server: "Servidor",
		print_printer_local: "Local",
		print_property_class: "Clase:",
		print_property_routing: "Direccionamiento:",
		print_property_pagedef: "DefPágina:",
		print_property_node: "Nodo:",
		print_property_writer: "Grabador:",
		print_property_formdef: "DefFormulario:",
		print_property_printerid: "Destino:",
		print_property_forms: "Formularios:",
		print_property_faxnotes: "Notas:",
		print_property_faxcompany: "Compañía:",
		print_property_faxnumber: "Número de fax:",
		print_property_faxname: "Nombre:",
		print_property_faxsendertelnumber: "Número de teléfono:",
		print_property_faxcoverpage: "Portada:",
		print_property_faxsubject: "Asunto:",
		print_saveoptions: "Guardar opciones de impresión",
		print_property_bannerpage: "Utilizar página de banner",
		print_print_with_info_fields: "Imprimir con Campos de información",
		print_field_from: "De",
		print_field_to: "Para",
		print_invalid_value_class: "Los caracteres válidos son A-Z o 0-9",
		print_invalid_value_pagedef: "Los caracteres válidos son caracteres alfabéticos o numéricos, o los caracteres @, # o $",
		print_invalid_value_writer: "Los caracteres válidos son caracteres alfabéticos o numéricos, o los caracteres @, # o $",
		print_invalid_value_formdef: "Los caracteres válidos son caracteres alfabéticos o numéricos, o los caracteres @, # o $",
		print_invalid_value_forms: "Los caracteres válidos son caracteres alfabéticos o numéricos, o los caracteres @, # o $",
		print_invalid_value_margin: "Los números válidos quedan entre el ${0} y el ${1}",
		print_status_message: "Se han enviado ${0} documentos a la impresora ${1}.",

		print_applet_init_error: "El applet de impresión no se puede iniciar.",
		print_applet_init_error_explanation: "Este problema se puede producir por las razones siguientes: <br/><br/><ul><li>El entorno Java Runtime Environment (JRE) no está instalado en la estación de trabajo.</li><li>El plug-in Java no está habilitado en su navegador web.</li><li>La versión de la JRE en la estación de trabajo no es compatible con la versión de IBM Content Navigator.</li><li>El navegador ha superado el tiempo de espera permitido para que se inicie el applet de impresión.</li></ul>",
		print_applet_init_error_userResponse: "Puede completar los pasos siguientes para resolver el problema con JRE:<br/><br/><ol><li>Compruebe que JRE esté instalado en su estación de trabajo.</li><li>Asegúrese de que el complemento de Java está habilitado en su navegador.</li><li>Asegúrese de que la versión de JRE de su estación de trabajo sea compatible con IBM Content Navigator e inténtelo de nuevo. Se incluye una lista de versiones soportadas en el documento <i>Requisitos previos de hardware y software para IBM Content Navigator</i> en sitio de IBM Software Support.</li></ol>",
		print_applet_init_error_number: 2085,
		/* Daeja print dialog */
		daeja_print_cover_page: "Portada",
		daeja_print_selected_documents_title: "Documentos seleccionados",

		/* change the caps to em for emphasis*/
		match_all_criteria: "Coincidir con todos los criterios de búsqueda",
		match_any_criteria: "Coincidir con algunos de los criterios de búsqueda",
		include_subfolders_summary: "${0} (incluir subcarpetas)",
		browse_button: "Examinar&hellip;",
		search_for: "Buscar:",
		object_type_documents: "Documentos",
		object_type_folders: "Carpetas",
		object_type_documents_folders: "Documentos y carpetas",
		object_type_web_links: "Enlaces web",
		object_type_documents_folders_web_links: "Documentos, carpetas y enlaces web",

		/* SelectSearchFolderDialog */
		search_in: "Buscar en:",
		include_subfolders: "Incluir subcarpetas",

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
		locked_item_icon_title: "Bloqueado por ${0}",
		checked_out_icon_title: "Extraído por ${0}",
		major_minor_version_icon_title: "Versión principal con versiones menores",
		suspended_icon_title: "El flujo de trabajo está suspendido",
		on_hold_icon_title: "En retención",
		has_notes_icon_title: "Tiene notas",
		record_icon_title: "Declarado como registro",
		compound_document_icon_title: "Documento compuesto",
		validateTemplate_icon_title: "La plantilla de espacio de equipo requiere validación",
		offlineTemplate_icon_title: "La plantilla de espacio de equipo está fuera de línea",
		offlineTeamspace_icon_title: "El espacio de equipo está fuera de línea",
		pending_delete_icon_title: "El espacio de equipo está pendiente de supresión",
		delete_error_icon_title: "El espacio de trabajo no se ha podido suprimir",
		defaultTemplate_icon_title: "Plantilla de espacio de equipo predeterminada",
		teamspace_icon_title: "Espacio de equipo",
		teamspace_template_icon_title: "Plantilla de espacio de equipo",
		has_bookmark_icon_title: "Tiene un marcador",
		read_only_icon_title: "Sólo lectura",
		no_results_were_found: "No se han encontrado resultados.",
		folder_is_empty: "La carpeta está vacía.",
		no_checked_out_items: "No tiene elementos extraídos.",
		inbasket_is_empty: "La bandeja de entrada está vacía.",
		worklist_is_empty: "La lista de trabajo está vacía.",
		tracker_milestone_completed: "Completado",
		stepprocessor_attachments_title: "Contenido",
		/*How are the following strings used? Are they used?*/

		/* ContentList context menu actions */
		lock_items: "Bloquear elementos",
		unlock_items: "Desbloquear elementos",
		checkin_item: "Incorporar elemento",

		/* Help */
		learn_more: "Más información",
		/* Layout repo menu items */
		repository_tab_openWorkspace: "Abrir espacio de equipo",
		repository_tab_createWorkspace: "Nuevo espacio de equipo",
		repository_tab_createWorkspaceTemplate: "Nueva plantilla de espacio de equipo",
		repository_tab_DefaultTemplate: "Predeterminado",

		/* Cross repository document copy */
		documentCopyTaskDescription: "Esta tarea copia documentos.",

		/* Teamspace privilege */

		teamspace_template_permissions_edit: "No tiene privilegios de edición para la plantilla de espacio de equipo seleccionada.",

		/* teamspace decommission */
		teamspaceDecommissionConfirmation: "¿Está seguro de que desea suprimir el espacio de equipo ${0}? <br><br>Sólo permanecen en el repositorio los documentos archivados en otras carpetas del repositorio. Los documentos que sólo se hayan archivado en el espacio de equipo se suprimirán.",
		teamspaceDecommissionLabel: "Suprimir:",
		teamspaceDecommissionDescription: "Si se suprime el espacio de equipo se eliminará este espacio de equipo del servidor: indique cómo se deben gestionar los artefactos del espacio de equipo.",
		teamspaceDecommissionOptions: "Suprimir opciones de espacio de equipo",
		teamspaceDecommissionDeleteAll: "Suprimir todos los artefactos del espacio de equipo",
		teamspaceDecommissionReFileAll: "Volver a archivar todos los artefactos del espacio de equipo",
		teamspaceDecommissionReFileDestination: "Mover a:",
		teamspaceDecommissionReFileIn: "Volver a archivar en",
		teamspaceDecommissionTaskName: "Tarea de supresión de espacio de equipo",
		teamspaceDecommissionTaskDescription: "Esta tarea suprime un espacio de equipo del repositorio.",
		teamspaceDecommissionDeletionStarted: "Se ha planificado la supresión del espacio de equipo",
		teamspaceDecommissionDeletionConnectionFailed: "La tarea de suprimir un espacio de trabajo no se ha podido ejecutar porque no se ha podido conectar con el repositorio. Asegúrese de que las credenciales del administrador de repositorio sean correctas.",

		teamspace_edit_properties_notsupported: "Puede editar las propiedades de los espacios de equipo desde la vista Espacios de equipo.",

		/* teamspace offline */
		offlineTeamspace_open_msg: "El espacio de equipo está fuera de línea y sólo lo pueden abrir los propietarios del espacio de equipo",

		/* Teamspace Builder widget */
		workspace_validation_document: "Documento:",
		workspace_validation_folder: "Carpeta:",
		workspace_validation_ets: "Las siguientes plantillas de entrada no están disponibles en este repositorio y se han eliminado de la lista de plantillas de entrada seleccionadas:",
		workspace_validation_classes: "Las siguientes clases no están disponibles en este repositorio y se han eliminado de la lista de clases seleccionadas:",
		workspace_validation_searches: "Las siguientes búsquedas no están disponibles en este repositorio y se han eliminado de la lista de búsquedas seleccionadas:",
		workspace_validation_docs_folders: "Los siguientes documentos y carpetas no están disponibles en este repositorio y se han eliminado de la lista de elementos incluidos:",
		workspace_change_template_confirmation_question: "Si selecciona una plantilla diferente, se perderán todos los cambios. ¿Desea continuar?\n",
		workspace_delete_item_confirmation_question: "¿Desea eliminar el elemento ${0}?\n",
		workspace_delete_role_confirmation_question: "¿Desea eliminar el rol ${0}?\n",
		workspace_delete_confirmation_question: "Si suprime un espacio de equipo, solo se suprime el contenedor del espacio de equipo. Las carpetas y documentos del espacio de equipo permanecen en el repositorio y puede encontrarlos realizando una búsqueda. Para suprimir el contenido del espacio de equipo, en primer lugar, suprima los elementos del espacio de equipo y luego suprima el espacio de equipo.<br><br>¿Desea suprimir el espacio de equipo ${0}?",
		workspacebuilder_instance_template_name_header: "Nombre de plantilla de espacio de equipo",
		workspacebuilder_instance_template_description_header: "Descripción",

		workspacebuilder_template_tooltip_name: "El nombre de la plantilla no puede contener los caracteres siguientes: \\ / : * ? \" < > |",
		workspacebuilder_instance_tooltip_name: "El nombre del espacio de trabajo no puede contener los caracteres siguientes: \\ / : * ? \" < > |",

		workspacebuilder_template_tooltip_description: "Proporcione una descripción que permita a los usuarios efectuar una selección correcta a partir de la lista de plantillas. Por ejemplo, puede incluir información sobre los usuarios previstos o el uso de la plantilla.",
		workspacebuilder_instance_tooltip_description: "Proporcione una descripción que permita a los usuarios distinguir entre este espacio de equipo y los otros espacios de equipo.",

		workspacebuilder_template_edit_properties_pane: "Editar plantilla de espacio de equipo",
		workspacebuilder_instance_properties_pane: "Definir espacio de equipo",
		workspacebuilder_template_properties_pane: "Definir plantilla de espacio de equipo",

		workspacebuilder_instance_security_pane: "Establecer seguridad de espacio de equipo",
		workspacebuilder_template_security_pane: "Establecer seguridad de plantilla",

		workspacebuilder_layout_pane: "Seleccionar diseño",
		workspacebuilder_search_templates_pane: "Seleccionar búsquedas",
		workspacebuilder_document_folders_pane: "Incluir carpetas y documentos",
		workspacebuilder_doctypes_entryTemplates_pane: "Seleccionar clases o plantillas de entrada",
		workspacebuilder_doctypes_entryTemplates_pane_cm: "Seleccionar clases",
		workspacebuilder_security: "Seguridad de espacio de equipo",

		workspacebuilder_roles_pane: "Seleccionar roles",
		workspacebuilder_security: "Seguridad",

		workspacebuilder_properties_templates: "Plantillas disponibles",
		workspacebuilder_available_templates: "Búsquedas disponibles",
		workspacebuilder_selected_templates: "Búsquedas seleccionadas:",
		workspacebuilder_templates_name: "Nombre de búsqueda",

		workspacebuilder_available_entryTemplates: "Plantillas de entrada disponibles:",
		workspacebuilder_selected_entryTemplates: "Plantillas de entrada seleccionadas:",

		workspacebuilder_item_classes: "Clases disponibles:",
		workspacebuilder_item_classes_selected: "Clases seleccionadas:",
		workspacebuilder_properties_select_template: "Seleccionar una plantilla para utilizarla para este espacio de equipo.",
		workspacebuilder_template_properties: "Definir plantilla de espacio de equipo",
		workspacebuilder_instance_properties: "Definir espacio de equipo",
		workspacebuilder_template_introText: "Especifique los componentes comunes que desee incluir en cada espacio de equipo que se cree a partir de esta plantilla utilizando las selecciones en la navegación. Cuando haya terminado, pulse <b>Finalizar</b> para que la plantilla esté disponible a otros usuarios, que pueden utilizarla para crear nuevos espacios de equipo.",
		workspacebuilder_instance_introText: "Los equipos utilizan espacios de equipo para compartir conjuntos específicos de documentos y trabajar con ellos. Proporcione un nombre significativo y una descripción para este espacio de equipo para permitir a los usuarios distinguir este espacio de equipo de otros espacios de equipo. Puede personalizar el espacio de equipo incluyendo búsquedas, clases o plantillas de entrada, documentos, y carpetas adicionales.",

		workspacebuilder_template_search_template_introText: "Seleccione las búsquedas predeterminadas que desea incluir en cada espacio de equipo que se cree a partir de esta plantilla. Cuando no se selecciona ninguna búsqueda, los usuarios del espacio de equipo verán todas las búsquedas a las que tengan acceso. Con los permisos adecuados, los usuarios pueden compartir y añadir búsquedas en el espacio de equipo.",
		workspacebuilder_instance_search_template_introText: "Incluya búsquedas que permitan a los usuarios del espacio de equipo completar las tareas de forma más eficiente. Cuando no se incluye ninguna búsqueda, los usuarios del espacio de equipo verán todas las búsquedas para las que tienen permiso. Los usuarios también pueden añadir y compartir búsquedas en el espacio de equipo con los permisos adecuados.",

		workspacebuilder_template_roles_introText: "Los usuarios de espacio de equipo se asignan a roles. Los roles especifican las tareas que se permite realizar a los usuarios. Pulse los iconos que hay junto a cada rol para ver las tareas permitidas. Elija los roles que sean adecuados para el espacio de equipo.",
		workspacebuilder_template_roles_modify_introText: "Puede modificar los permisos asociados a cada rol de este espacio de equipo. Debe notificar a los miembros del espacio de equipo cuando cambien sus permisos.",

		workspacebuilder_template_roles_header_name: "Nombre de rol",

		workspacebuilder_template_folders_introText: "Seleccione los documentos predeterminados que desea incluir en cada espacio de equipo que se cree a partir de esta plantilla. Puede añadir documentos como enlaces o copias. Utilice enlaces para apuntar a documentos de los que no desea tener varias copias, como políticas o procedimientos. Cree copias de los documentos que modificarán los usuarios, como por ejemplo las plantillas y los formularios.",
		workspacebuilder_instance_folders_introText: "Seleccione los documentos y carpetas predeterminados que se incluirán en el espacio de equipo. Puede añadir documentos como enlaces o copias. Utilice enlaces para apuntar a documentos de los que no desea tener varias copias, como políticas o procedimientos. Cree copias de los documentos que modificarán los usuarios, como por ejemplo las plantillas y los formularios.",

		workspacebuilder_template_roles_introText: "Especifique los roles que se incluirán en cada espacio de equipo creado a partir de esta plantilla. También puede crear roles nuevos que podrá utilizar cuando cree otras plantillas de espacio de equipo.",
		workspacebuilder_instance_users_introText: "En un espacio de equipo, cada usuario se asigna a uno o más roles que especifican las tareas que el usuario puede completar. Añada usuarios al espacio de equipo y asigne roles a los usuarios.",

		workspacebuilder_instance_navigation_pane_title: "Programa de creación de espacios de equipo",
		workspacebuilder_template_navigation_pane_title: "Programa de creación de plantillas de espacio de equipo",

		workspacebuilder_roles_roles_nopermissions: "No se han seleccionado permisos para el rol {0}.",
		// strings on the roles tab
		workspacebuilder_roles_selected_roles: "Roles seleccionados",
		workspacebuilder_roles_available_roles: "Roles disponibles",
		workspacebuilder_roles_privilege_header: "Permiso",
		workspacebuilder_roles_select_role: "Seleccionar rol",
		workspacebuilder_roles_select_permission: "Seleccionar permiso",

		// add or edit role dialog
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_roles_role_name_exists: "Ya existe un rol con el nombre {0}. Debe especificar un nombre exclusivo para el rol. ",
		workspacebuilder_roles_edit_dialog_role_name: "Nombre de rol:",
		workspacebuilder_roles_edit_dialog_role_description: "Descripción de rol:",
		workspacebuilder_roles_edit_dialog_title_new: "Rol nuevo",
		workspacebuilder_roles_edit_dialog_title_edit: "Editar rol",

		workspacebuilder_roles_privileges_header: "Permisos para el rol {0}:",

		// labels of privilege groups
		workspacebuilder_roles_priv_group_document: "Permisos de documento",
		workspacebuilder_roles_priv_group_folder: "Permisos de carpeta",
		workspacebuilder_roles_priv_group_teamspace: "Permisos de espacio de equipo:",
		workspacebuilder_roles_priv_group_item: "Permisos de documento y carpeta:",

		// labels and tooltips for priviliges
		workspacebuilder_roles_priv_modifyItemPermissions: "Gestionar permisos",
		workspacebuilder_roles_plbl_modifyItemPermissions: "Los usuarios con este permiso pueden gestionar el acceso a los documentos y las carpetas de este espacio de equipo. Este permiso incluye permitir que otros usuarios puedan suprimir, editar propiedades, crear subcarpetas, etc.",

		workspacebuilder_roles_priv_deleteItems: "Suprimir",
		workspacebuilder_roles_plbl_deleteItems: "Los usuarios con este permiso pueden suprimir documentos y carpetas de este espacio de equipo.",

		workspacebuilder_roles_priv_createItems: "Crear",
		workspacebuilder_roles_plbl_createItems: "Los usuarios con este permiso pueden crear documentos y carpetas de este espacio de equipo.",

		workspacebuilder_roles_priv_viewItemProperties: "Visualizar propiedades",
		workspacebuilder_roles_plbl_viewItemProperties: "Los usuarios con este permiso pueden visualizar las propiedades de carpetas y documentos del espacio de equipo, que incluye las propiedades del sistema.",

		workspacebuilder_roles_priv_modifyItemProperties: "Editar propiedades",
		workspacebuilder_roles_plbl_modifyItemProperties: "Los usuarios con este permiso pueden editar las propiedades de los documentos y carpetas del espacio de equipo.",

		workspacebuilder_roles_priv_modifyFolderPermissions: "Gestionar permisos de carpeta",
		workspacebuilder_roles_plbl_modifyFolderPermissions: "Los usuarios con este permiso pueden gestionar el acceso a las carpetas de este espacio de equipo. Este permiso incluye permitir que otros usuarios puedan suprimir carpetas, editar propiedades de carpetas, crear subcarpetas, etc.",

		workspacebuilder_roles_priv_deleteFolders: "Suprimir carpetas",
		workspacebuilder_roles_plbl_deleteFolders: "Los usuarios con este permiso pueden suprimir carpetas en el espacio de equipo.",

		workspacebuilder_roles_priv_modifyFolderProperties: "Editar propiedades de carpeta",
		workspacebuilder_roles_plbl_modifyFolderProperties: "Los usuarios con este permiso pueden editar las propiedades de carpetas en el espacio de equipo.",

		workspacebuilder_roles_priv_createSubfolders: "Crear subcarpetas",
		workspacebuilder_roles_plbl_createSubfolders: "Los usuarios con este permiso pueden crear carpetas en el espacio de equipo.",

		workspacebuilder_roles_priv_fileInFolders: "Añadir a carpetas",
		workspacebuilder_roles_plbl_fileInFolders: "Los usuarios con este permiso pueden añadir un enlace de carpetas a documentos en el espacio de equipo.",

		workspacebuilder_roles_priv_viewFolderProperties: "Visualizar propiedades de carpeta",
		workspacebuilder_roles_plbl_viewFolderProperties: "Los usuarios con este permiso pueden visualizar las propiedades de carpetas en el espacio de equipo, que incluye las propiedades del sistema.",

		workspacebuilder_roles_priv_modifyDocumentPermissions: "Gestionar permisos de documento",
		workspacebuilder_roles_plbl_modifyDocumentPermissions: "Los usuarios con este permiso pueden gestionar el acceso a los documentos de este espacio de equipo. Este permiso incluye permitir que otros usuarios puedan suprimir documentos, editar propiedades de documentos, etc.",

		workspacebuilder_roles_priv_deleteDocuments: "Suprimir documentos",
		workspacebuilder_roles_plbl_deleteDocuments: "Los usuarios con este permiso pueden suprimir documentos en el espacio de equipo.",

		workspacebuilder_roles_priv_promoteVersions: "Promover versiones",
		workspacebuilder_roles_plbl_promoteVersions: "Los usuarios con este permiso pueden asignar un nuevo número de versión a documentos en el espacio de equipo.",

		workspacebuilder_roles_priv_modifyContent: "Editar documentos",
		workspacebuilder_roles_plbl_modifyContent: "Los usuarios con este permiso pueden editar el contenido de documentos en el espacio de equipo.",

		workspacebuilder_roles_priv_modifyDocumentProperties: "Editar propiedades de documento",
		workspacebuilder_roles_plbl_modifyDocumentProperties: "Los usuarios con este permiso pueden editar las propiedades de documentos en el espacio de equipo.",

		workspacebuilder_roles_priv_viewContent: "Visualizar documentos",
		workspacebuilder_roles_plbl_viewContent: "Los usuarios con este permiso pueden visualizar documentos en el espacio de equipo.",

		workspacebuilder_roles_priv_viewDocumentProperties: "Visualizar propiedades de documento",
		workspacebuilder_roles_plbl_viewDocumentProperties: "Los usuarios con este permiso pueden visualizar las propiedades de los documentos en el espacio de equipo, incluyendo las propiedades del sistema.",

		workspacebuilder_roles_priv_addNewSearches: "Añadir búsquedas",
		workspacebuilder_roles_plbl_addNewSearches: "Los usuarios con este permiso pueden añadir búsquedas al espacio de equipo. De forma predeterminada, la búsqueda no está disponible a otros usuarios.",

		workspacebuilder_roles_priv_createNewSearches: "Crear búsquedas",
		workspacebuilder_roles_plbl_createNewSearches: "Los usuarios con este permiso pueden crear búsquedas pero no pueden guardar búsquedas. Si los usuarios no tienen este permiso, no pueden añadir al espacio de equipo los documentos que ya estén en el repositorio.",

		workspacebuilder_roles_priv_shareSearches: "Compartir búsquedas",
		workspacebuilder_roles_plbl_shareSearches: "Los usuarios con este permiso pueden compartir búsquedas que han creado con otros usuarios del espacio de equipo.",

		workspacebuilder_roles_priv_addRemoveClassesOrEntryTemplates: "Gestionar clases o plantillas de entrada",
		workspacebuilder_roles_plbl_addRemoveClassesOrEntryTemplates: "Los usuarios con este permiso pueden añadir o eliminar clases o plantillas de entrada del espacio de equipo.",

		workspacebuilder_roles_priv_addRemoveClasses: "Gestionar clases",
		workspacebuilder_roles_plbl_addRemoveClasses: "Los usuarios con este permiso pueden añadir y eliminar clases del espacio de equipo.",

		workspacebuilder_roles_priv_addRemoveRoleParticipants: "Gestionar usuarios de espacio de equipo",
		workspacebuilder_roles_plbl_addRemoveRoleParticipants: "Los usuarios con este permiso pueden añadir y eliminar usuarios y grupos del espacio de equipo. Además, pueden gestionar a qué roles se asignan los usuarios.",

		workspacebuilder_roles_priv_modifyRoles: "Modificar roles",
		workspacebuilder_roles_plbl_modifyRoles: "Los propietarios con este permiso pueden modificar los permisos de roles para el espacio de equipo. Este permiso solo está disponible para los propietarios.",

		// end of labels of privileges

		// teamspace builder - select users
		workspacebuilder_users_pane: "Seleccionar usuarios",
		workspacebuilder_users_add_users_and_groups_button: "Añadir usuarios y grupos...",
		workspacebuilder_users_users_or_group_header: "Usuario y grupo",
		workspacebuilder_users_roles_header: "Roles",

		workspacebuilder_users_role_header: "Rol",
		workspacebuilder_users_role_no_permissions: "Este rol no tiene permisos",
		workspacebuilder_users_available_roles_label: "Roles disponibles",
		workspacebuilder_users_selected_users_and_groups_label: "Usuarios y grupos seleccionados:",

		// occurs when trying to create a teamspace while no user/group is marked as an owner
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_users_no_owner_error: "No se puede guardar el espacio de equipo. Debe especificar al menos un propietario para este espacio de equipo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		// occurs when trying to create a teamspace and some users are not assigned a role
		workspacebuilder_users_no_role_error: "No se puede guardar el espacio de equipo. Debe asignarse un rol a todos los usuarios.",
		// end of select users

		workspacebuilder_search_templates: "Seleccionar búsquedas",
		workspacebuilder_search_add: "Añadir búsqueda",
		workspacebuilder_properties_workspaceName: "Nombre de espacio de equipo",
		workspacebuilder_properties_templateName: "Nombre de plantilla:",
		workspacebuilder_properties_workspaceDescription: "Descripción de espacio de equipo:",
		workspacebuilder_properties_templateDescription: "Descripción de plantilla:",
		workspacebuilder_properties_workspaceTemplate: "Plantilla seleccionada:",
		workspacebuilder_properties_security: "Compartir plantilla con:",

		// Move from teamspace Dialog
		moveTeamspaceDocuments_from_folder_label: "Mover del espacio de equipo:",
		moveTeamspaceDocuments_security: "Compartir documento con:",
		moveTeamspaceDocuments_security_change: "Especifique una seguridad personalizados para los elementos seleccionados",
		moveTeamspaceDocuments_item_type_level: "No puede seleccione Sustituir la seguridad de los elementos seleccionados porque la clase del elemento seleccionado está configurado para utilizar únicamente seguridad de nivel de clase",
		moveTeamspaceDocuments_security_inherit: "Heredar seguridad de carpeta de destino",
		moveTeamspaceDocuments_file_info_text: "Puede mover elementos de un espacio de equipo a otro espacio de equipo o carpeta",
		moveTeamspaceDocuments_move_no_permission_to_move_to_target: "No tiene los permisos adecuados para mover los elementos a la carpeta seleccionada.",
		moveTeamspaceDocuments_move_no_permission_to_move_document: "No tiene los permisos adecuados para mover los elementos desde el espacio de equipo.",
		moveTeamspaceDocuments_move_mixed_items: "No se puede alterar la seguridad de los elementos seleccionados. Algunos de los elementos no están gestionados por el espacio de equipo. Puede alterar la seguridad de los elementos que gestiona el espacio de equipo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing: "Debe especificar un nombre para el espacio de equipo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_missing_template: "Debe especificar un nombre para la plantilla del espacio de equipo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid: "El nombre del espacio de trabajo no puede contener los caracteres siguientes: \\ / : * ? \" < > |",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		workspacebuilder_name_invalid_template: "El nombre de la plantilla no puede contener los caracteres siguientes: \\ / : * ? \" < > |",

		workspacebuilder_folders_makeDocLink: "Enlazar con documento",
		workspacebuilder_folders_makeDocCopy: "Copiar documento",
		workspacebuilder_folders_newfolder: "Nueva carpeta",
		workspacebuilder_folders_local_drive: "Del directorio local",
		workspacebuilder_folders_from_repo: "Del repositorio",
		workspacebuilder_folders_add_doc: "Añadir documento",
		workspacebuilder_folders_grid_name: "Nombre",
		workspacebuilder_folders_props: "Propiedades",
		workspacebuilder_folders_remove: "Eliminar",
		workspacebuilder_folders_delete: "Suprimir",
		workspacebuilder_folders_adddoc_local: "Añadir documento desde unidad local",
		workspacebuilder_folders_adddoc_repo: "Añadir documento desde repositorio",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_folders_createfolder_dup: "El nombre de carpeta especificado ya existe. Especifique otro nombre de carpeta.",

		workspacebuilder_classes_title: "Seleccionar clases o plantillas de entrada",
		workspacebuilder_classes_title_cm: "Seleccionar clases",
		workspacebuilder_classes_template_introText: "Especifique si los espacios de equipo que se creen a partir de esta plantilla utilizarán clases o plantillas de entrada para añadir documentos al repositorio. Si no se selecciona ninguna clase, los espacios de equipo verán todas las clases a las cuales tengan acceso.  El usuario puede modificar la lista de clases o las plantillas de entrada del espacio de equipo si tiene el permiso adecuado.",
		workspacebuilder_classes_template_introText_cm: "Seleccione las clases que pueden utilizar los usuarios para añadir documentos al repositorio. Si no se selecciona ninguna clase, los usuarios del espacio de equipo verán todas las clases a las cuales tienen acceso. Los usuarios pueden modificar la lista de clases del espacio de equipo si tienen los permisos adecuados.",
		workspacebuilder_classes_instance_introText: "Seleccione las clases o plantillas de entrada que pueden utilizar los usuarios para añadir documentos al repositorio. Cuando no se selecciona ninguna clase, los usuarios del espacio de equipo verán todas las clases para las cuales tienen permisos. Los usuarios pueden modificar la lista de clases o las plantillas de entrada del espacio de equipo si tienen los permisos adecuados.",
		workspacebuilder_classes_instance_introText_cm: "Seleccione las clases que pueden utilizar los usuarios para añadir documentos al repositorio. Cuando no se selecciona ninguna clase, los usuarios del espacio de equipo verán todas las clases para las cuales tienen permisos. Los usuarios pueden modificar la lista de clases del espacio de equipo si tienen los permisos adecuados.",
		workspacebuilder_classes_selection: "Seleccionar clases:",
		workspacebuilder_classes_list: "Clases disponibles:",
		workspacebuilder_classes_columns_default: "Predeterminado",
		workspacebuilder_classes_columns_className: "Nombre de clase",
		workspacebuilder_classes_type_classes: "Utilizar clases para añadir documentos",
		workspacebuilder_classes_type_classes_tooltip: "Las clases incluyen propiedades asociadas para que se puedan ubicar los documentos para un uso posterior.",
		workspacebuilder_classes_type_entryTemplates: "Utilizar plantillas de entrada para añadir documentos",
		workspacebuilder_classes_type_entryTemplates_tooltip: "Las plantillas de entrada aseguran que la información proporcionada para cada documento es coherente y utiliza valores predefinidos.",
		workspacebuilder_classes_type_entryTemplates_columnName: "Nombre de plantilla de entrada",
		workspacebuilder_classes_type_entryTemplates_columnDescription: "Descripción",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an inline validation message or as an error?
		workspacebuilder_classes_entryTemplates_error: "Debe añadir al menos una plantilla de entrada al espacio de equipo.",

		workspacebuilder_classes_new: "Clase nueva",
		workspacebuilder_classes_add: "Añadir clase",
		workspacebuilder_entryTemplate_add: "Añadir plantilla de entrada",
		workspacebuilder_add_list: "Añadir",
		workspacebuilder_makeDefault_list: "Hacer predeterminado",
		workspacebuilder_removeDefault_list: "Eliminar predeterminado",

		workspacebuilder_roles_title: "Seleccionar roles",
		workspacebuilder_roles_title_modify: "Modificar roles",

		workspacebuilder_selection_moveup: "Subir",
		workspacebuilder_selection_movedown: "Bajar",
		workspacebuilder_selection_remove: "Eliminar",
		workspacebuilder_selection_add: "Añadir",
		workspacebuilder_selection_create_new_search: "Búsqueda nueva...",
		workspacebuilder_selection_create_new_role: "Rol nuevo...",
		workspacebuilder_selection_make_role_available: "Establecer como disponible",
		workspacebuilder_selection_make_role_available_tooltip: "Comparte el rol seleccionado con otras plantillas. Para poder compartir el ro, debe asignarle como mínimo un permiso.",

		workspacebuilder_navigation_next: "Siguiente",
		workspacebuilder_navigation_finish: "Finalizar",
		workspacebuilder_navigation_validate: "Validar",
		workspacebuilder_navigation_previous: "Anterior",
		workspacebuilder_navigation_cancel: "Cancelar",
		workspacebuilder_navigation_customize: "Personalizar",

		workspacebuilder_search_dialog_title: "Buscar",
		workspacebuilder_dialog_close: "Cerrar",

		/* Teamspace Props Dialog */
		workspace_properties_templateState: "Disponibilidad de plantilla:",
		workspace_properties_templateState_tooltip: "Establezca la plantilla como no disponible para evitar que los usuarios creen espacios de equipo que utilicen esta plantilla.",
		workspace_properties_dialog_title: "Propiedades de plantilla",
		workspace_properties_online_radio_option_label: "Establecer como disponible",
		workspace_properties_offline_radio_option_label: "Establecer como no disponible",

		/* Logout ConfirmationDialog */
		workspacebuilder_cancel_confirmation_question: "¿Desea cancelar sin guardar los cambios?",
		workspacebuilder_cancel_confirmation_button: "Sí",

		/* Validate teamspace template ConfirmationDialog */
		workspacebuilder_validate_confirmation_question: "Los elementos no válidos se eliminarán de la plantilla y la plantilla estará disponible para los usuarios.  ¿Desea validar esta plantilla de espacio de equipo?",
		workspacebuilder_validate_confirmation_button: "Sí",
		workspacebuilder_validate_confirmation_title: "Validar",

		/* Entry templates builder */
		entry_templates: "Gestor de plantillas de entrada",
		no_entry_templates_were_found: "No hay ninguna plantilla de entrada",

		/* MultiColumnList widget */
		multicolumn_list_filter_text: "Filtro",

		/* Roleselector widget */
		role_selector_name: "Roles:",

		/* User Group picker widget */
		directory_label: "Directorio:",
		scope_label: "Buscar:",
		name_starts_with_label: "El nombre empieza por",
		name_contains_label: "El nombre contiene",
		display_name_contains_label: "El nombre de visualización contiene",
		starts_with_label: "Comienza por:",
		available_label: "Disponible:",
		available_heading: "Disponible",
		selected_label: "Seleccionado:",
		selected_heading: "Seleccionado",
		available_repositories_label: "Repositorios disponibles",
		selected_repositories_label: "Repositorios seleccionados",
		default_repository: "Repositorio predeterminado:",
		default_repository_placeholder: "Seleccionar un repositorio",
		default_role_placeholder: "Seleccionar un rol",
		menu_label_placeholder: "Seleccionar o introducir una etiqueta",
		default_repository_hover: "Especifique el repositorio que se selecciona de forma predeterminada cuando los usuarios inician la sesión en el cliente web desde este escritorio.<br><br><b>Importante:</b> debe añadir repositorios al escritorio de la lista de repositorios seleccionados antes de especificar el repositorio predeterminado.",
		default_repository_workflow_hover: "<b>Recuerde:</b> sólo puede configurar los espacios de aplicación para los repositorios que estén configurados para este escritorio.",
		remove_label: "Eliminar",
		users_label: "Usuarios",
		groups_label: "Grupos",
		user_or_group_name_label: "Nombre de usuario o grupo:",
		user_or_group_name_hover: "Especifique el nombre de un usuario o grupo válido en el repositorio.  El nombre no se valida.",
		user: "Usuario",
		group: "Grupo",
		name: "Nombre:",
		displayName: "Visualizar nombre",
		display_name: "Nombre de visualización:",
		shortName: "Nombre abreviado",
		distinguishedName: "Nombre distinguido",
		search_tooltip: "Buscar",
		add_tooltip: "Añadir",
		add_selected_tooltip: "Añadir a lista seleccionada",
		remove_tooltip: "Eliminar",
		remove_selected_tooltip: "Eliminar de la lista seleccionada",
		add_to_selected_tooltip: "Añadir",
		remove_from_selected_tooltip: "Eliminar",
		move_up_selected_tooltip: "Mover hacia arriba",
		move_down_selected_tooltip: "Mover hacia abajo",
		advanced_search_options_tooltip: "Valores avanzados",
		move_right_selected_tooltip: "Mover al submenú",
		move_left_selected_tooltip: "Mover fuera del submenú",
		add_separator: "Añadir separador",
		menu_item_label: "Etiqueta de elemento de menú",
		add_menu_label: "Agregar submenú",
		menu_label: "Etiqueta de submenú",
		menu_label_info: "<b>Importante:</b> debe añadir como mínimo un elemento de menú a este submenú antes de poder guardar este menú.",
		menu_dropdown_label: "Etiqueta de botón desplegable:",
		menu_dropdown_label_info: "<b>Importante:</b> debe añadir como mínimo un elemento de menú a este botón desplegable para poder guardar esta barra de herramientas.",
		no_item_found: "No se han encontrado resultados.",
		me: "Mí",
		anyone: "Cualquiera",
		specific_users: "Usuarios específicos",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_items: "La búsqueda ha devuelto más de {0} resultados. Cambie los criterios para restringir la búsqueda.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		fitered_items: "Los resultados de la búsqueda contienen elemento que ya se han seleccionado. Dichos elementos no se mostrarán en los resultados de búsqueda.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this displayed as an informational message?
		more_filtered_items: "Se han devuelto más de {0} resultados. Utilice el filtro para restringir los resultados.",

		user_already_selected: "El usuario especificado ya está seleccionado.  Especifique un usuario diferente.",
		group_already_selected: "El grupo especificado ya está seleccionado.  Especifique un grupo diferente.",
		user_cannot_select_self: "No se puede añadir a sí mismo. Especifique un usuario diferente.",

		/* Select User Group dialog */
		select_user_group_add_label: "Añadir",
		select_user_group_cancel_label: "Cancelar",
		add_users_groups_label: "Añadir usuarios y grupos",
		add_user_group_label: "Añadir usuario y grupo",
		add_users_label: "Añadir usuarios",
		add_user_label: "Añadir usuario",
		add_label: "Añadir:",

		/* ContentViewer dijit */
		viewer_files_have_annotation_changes: "Los siguientes documentos tienen cambios de anotación sin guardar:",
		viewer_confirm_to_proceed: "¿Desea continuar y perder los cambios?",
		viewer_warn_has_changes: "Los cambios no guardados se descartarán.",
		viewer_warn_is_printing: "Podría ser que no se completara la impresión que está en curso.",
		viewer_warn_confirm_exit: "¿Desea salir?",
		viewer_prompt_save_changes: "El siguiente documento tiene cambios de anotación sin guardar que se perderán:<br>${0}<br><br>¿Desea guardar los cambios?",
		viewer_prompt_mergesplit_changes: "Los siguientes documentos tienen cambios sin guardar:<br>${0}<br><br>¿Desea continuar y perder los cambios?",
		viewer_prompt_mergesplit_tab_changes: "El siguiente documento tiene cambios sin guardar:<br>${0}<br><br>¿Desea continuar y perder los cambios?",
		viewer_new_item_name: "Nuevo documento",
		viewer_top_frame: "Trama superior:",
		viewer_bottom_frame: "Trama inferior:",
		viewer_left_frame: "Trama izquierda:",
		viewer_right_frame: "Trama derecha:",
		viewer_viewer_frame: "Trama del visor:",
		viewer_properties_frame: "Trama de propiedades:",
		viewer_comment_frame: "Trama de comentarios:",
		viewer_mergesplit_on: "Ver",
		viewer_mergesplit_off: "Fusionar y dividir",
		viewer_mergesplit_context_menu_move: "Mover",
		viewer_mergesplit_context_menu_rename: "Cambiar nombre",
		viewer_mergesplit_context_menu_delete: "Suprimir",
		//move to new window
		viewer_move_to_new_window:"Mover a ventana nueva",
		viewer_continue:"Descartar cambios",
		viewer_return_to_original_window:"Volver a la ventana original",
		viewer_switch_window:"Conmutar ventana",
		viewer_prompt_lost_changes:"El documento ${0} está abierto en otra ventana en estos momentos. El documento tiene cambios sin guardar.<br><br>¿Desea conmutar a la ventana en cuestión para guardar los cambios, o prefiere descartarlos y abrir el documento en la ventana actual?",
		viewer_mergesplit_fallback_info: "Solo se puede completar la acción Fusionar y dividir en documentos del mismo repositorio.",
		viewer_tabbed_layout: "Visualizar como separadores",
		viewer_tabbed_layout_highcontrast: "Separadores",
		viewer_split_vertical_layout: "Dividir los paneles superior e inferior",
		viewer_split_vertical_layout_highcontrast: "Superior e inferior",
		viewer_split_horizontal_layout: "Dividir los paneles izquierdo y derecho",
		viewer_split_horizontal_layout_highcontrast: "Izquierda y derecha",
		viewer_add_vertical_layout: "Nueva pestaña en la parte inferior",
		viewer_add_vertical_layout_highcontrast: "Pestaña inferior",
		viewer_add_horizontal_layout: "Nueva pestaña en la parte derecha",
		viewer_add_horizontal_layout_highcontrast: "Pestaña derecha",
		viewer_add_horizontal_layout_rtl: "Nueva pestaña en la parte izquierda",
		viewer_add_horizontal_layout_rtl_highcontrast: "Pestaña izquierda",
		viewer_split_properties_layout: "Ver propiedades",
		viewer_split_comment_layout: "Ver comentarios",
		viewer_split_notelog_layout: "Ver el registro de notas",
		viewer_window_title: "${0} Visor",
		viewer_next_hit: "Visualizar el siguiente documento en la lista",
		viewer_prev_hit: "Visualizar el documento anterior en la lista",
		viewer_confrim_more_search_results: "Los resultados de la búsqueda no contienen más documentos visualizables.  ¿Desea recuperar más resultados de la búsqueda?",
		viewer_confirm_get_next_page: "La lista de resultados no contiene más elementos visualizables.  ¿Desea recuperar más resultados de la búsqueda?",
		viewer_confirm_get_next_item: "La lista de resultados contiene más elementos visualizables.  ¿Desea visualizar el siguiente elemento?",
		viewer_fn_annotation_tooltip: " Creado por: ${0}, Creado el: ${1}",
		viewer_box_note_limitation: "Solo puede abrir y ver las notas de Box en una ventana independiente.",
		viewer_click_to_open_box_note: "Pulse aquí para abrir la nota de Box.",
		viewer_box_view_expiring: "El plazo máximo de tiempo que puede ver el documento de Box es de 60 minutos. Su sesión actual caducará dentro de ${0} minutos. Si desea continuar trabajando con el documento, debe volver a cargarlo ahora. ¿Desea volver a cargar el documento?",
		viewer_add_dialog_save_as_type: "Guardar como tipo:",
		viewer_add_dialog_save_as_pdf: "PDF",
		viewer_add_dialog_save_as_tiff: "TIFF",
		viewer_checkout_conflict_title: "Conflicto de extracción",
		viewer_checkout_conflict: "El documento ha sido extraído por otro usuario.",
		viewer_checkout_confirm: "Existe una versión más nueva de este documento. ¿Desea continuar la extracción o prefiere volver a cargar el visor con la versión más nueva? Si elige volver a cargar el visor, los cambios no guardados se perderán.",
		viewer_checkout_continue: "Continuar la extracción",
		viewer_checkout_reload: "Volver a cargar",
		viewer_status_building: "Creando documento...",
		viewer_status_adding: "Añadiendo documento...",
		viewer_status_checking_in: "Incorporando documento ...",

		/* Class Selector Widget */
		include_subclasses_label: "Incluir subclases",
		include_subclasses_label2: "Buscar también en subclases",
		include_subclasses_note: "(Incluye subclases)",
		available_classes_col_header: "Clases disponibles",
		single_class_label: "Buscar en una sola clase",
		multiple_classes_label: "Buscar en varias clases",
		multiple_classes_hover_help: "Seleccione esta opción para buscar en más de una clase. Las clases pueden ser clases padre o subclases. Si se selecciona esta opción, solo verá las propiedades y los valores que sean comunes a las clases seleccionadas.",
		selected_classes_col_header: "Clases seleccionadas",

		/* Folder Selector Widget */
		selected_root: "\\${0}",
		selected_root_folder: "\\${0}\\${1}",
		selected_root_folder_ellipsis: "\\${0}\\...\\${1}",
		selection_including_subfolders: "&nbsp; (Incluye subcarpetas)",
		favorites_pseudo_node: "\\Favoritos\\",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Are these messages or hover text?
		cant_add_doc_to_root: "Debe seleccionar una carpeta del repositorio a la que añadir el documento.",
		no_permission_add_folder: "No dispone de los permisos adecuados para añadir carpetas a esta carpeta.",
		no_permission_add_document: "No dispone de los permisos adecuados para añadir documentos a esta carpeta.",
		document_already_in_folder: "El documento ya está en esta carpeta.",
		cant_move_folder_onto_parent: "La carpeta ya está en esta carpeta.",
		cant_move_folder_onto_self: "No puede mover una carpeta dentro de sí misma o a sus subcarpetas.",

		/* Workflow Widgets */
		process_application_space: "Procesar espacio de aplicación",
		process_role: "Procesar rol",
		process_inbasket: "Procesar bandeja de entrada",
		process_worklist: "Lista de trabajo",
		process_step_processor: "Procesar elemento de trabajo",
		process_tracker: "Realizar seguimiento de elemento de trabajo",
		process_info_subject: "Asunto",
		process_info_stepname: "Paso",
		process_info_is_locked: "Bloqueado",
		process_info_no_access: "Sin acceso",
		process_info_received_on: "Recibido el",
		process_info_overdue: "Vencido",
		process_info_reminder_sent: "Recordatorio enviado",
		process_info_locked_by_user: "Bloqueado por",
		process_work_object_number: "Número de objeto de trabajo",
		process_deadline: "Fecha de vencimiento",
		process_launchedby: "Iniciado por:",
		process_receivedon: "Recibido el:",
		process_step: "Paso:",
		process_properties: "Propiedades",
		process_attachments: "Archivos adjuntos",
		process_attachments_select: "Seleccionar un adjunto",
		process_finish_button_label: "Detener seguimiento",
		process_tracker_history: "Historial",
		process_tracker_milestones: "Objetivos",
		process_tracker_milestone: "Objetivo",
		process_tracker_milestone_level: "Nivel",
		process_tracker_milestones_empty: "No hay objetivos para visualizar.",
		process_tracker_level_selector_label: "Mostrar niveles de objetivo hasta:",
		process_tracker_map_selector_label: "Filtrar por correlación:",
		process_tracker_message: "Mensaje",
		process_tracker_datereached: "Fecha alcanzada",
		process_tracker_stepname: "Paso",
		process_tracker_cycle: "Ciclo",
		process_tracker_review_cycle: "Revisar ciclo",
		process_tracker_participant: "Participante",
		process_tracker_completed: "Completado",
		process_tracker_response: "Respuesta",
		process_tracker_comments: "Comentarios",
		process_tracker_delete_confirmation: "¿Desea detener el seguimiento del siguiente flujo de trabajo: ${0}?",
		process_tracker_history_allmaps: "Todas las correlaciones",
		process_tracker_history_workflow: "Flujo de trabajo",
		process_tracker_history_terminate: "Terminar",
		process_tracker_history_malfunction: "Funcionamiento incorrecto",
		process_filter_label: "Filtro",
		process_no_filter_summary: "No se han aplicado filtros",
		process_filter_summary: "${0} aplicados",
		process_filter_reset_tooltip: "El restablecimiento borra el filtro y renueva la bandeja de entrada.",
		process_attachments_add_folder: "Añadir carpeta",
		process_attachments_add_doc: "Añadir documento",
		process_complete_button_label: "Completar",
		process_save_button_label: "Guardar",
		process_launch_button_label: "Iniciar flujo de trabajo",
		process_open_button_label: "Abrir",
		process_movetoinbox_button_label: "Mover a bandeja de entrada",
		process_return_button_label: "Volver",
		process_return_to_sender_tooltip: "Devolver el elemento de trabajo a la bandeja de entrada originaria",
		process_move_to_inbasket_tooltip: "Mover el elemento de trabajo a la bandeja de entrada personal",
		process_reassign_tooltip: "Volver a asignar el elemento de trabajo a otro propietario",
		process_reassign_button_label: "Reasignar",
		process_preferences_button_label: "Preferencias",
		process_manageroles_button_label: "Gestionar roles",
		process_manageroles_no_members: "No hay miembros.",
		process_responses_button_label: "Más respuestas",
		process_morecustomaction_button_label: "Más acciones",
		process_show_instructions: "Ver instrucciones",
		process_hide_instructions: "Ocultar instrucciones",
		process_remove_attachment: "Eliminar",
		process_close_window: "El elemento de trabajo se ha procesado.",
		process_delegate_flag: "Requiere que el propietario actual apruebe el elemento de trabajo antes de dirigirlo al paso siguiente del flujo de trabajo.",
		process_paticipant_voting: "Número de participantes necesario para la aprobación por votos:",
		process_get_next_label: "Obtener siguiente elemento de trabajo",
		process_no_more_items: "No hay más elementos en la bandeja de entrada para procesar.",
		process_workflow_name: "Nombre de flujo de trabajo:",
		process_pattern_process_name: "Revisión de ${0}",
		process_instuctions: "Instrucciones para los revisores:",
		process_pattern_deadline: "Fecha de vencimiento",
		process_reviewers: "Revisores:",
		process_approvals_required: "Aprobaciones necesarias:",
		process_on_reject: "Si el elemento de trabajo se rechaza:",
		process_return_to_originator: "Devolvérmelo",
		process_return_to_previous_reviewer: "Devolver al revisor anterior",
		process_additional_settings: "Valores adicionales:",
		process_allow_reassign: "Permitir que los revisores reasignen esta revisión",
		process_complete_notification: "Notificarme cuando se complete la revisión",
		process_workflow_name_hover_help: "El nombre que especifica para el elemento de trabajo debe permitir que los revisores distingan entre este elemento de trabajo y los otros elementos de trabajo de su bandeja de entrada.",
		process_approvals_required_hover_help: "Si el elemento de trabajo lo revisan varias personas al mismo tiempo, puede especificar cuántos aprobadores se necesitan para que el elemento de trabajo se complete correctamente.",
		process_approval_options: "Opciones de aprobación",
		process_all: "Todo",
		process_at_least: "Al menos",
		process_at_least_by_count: "Al menos un número de ${0} revisores",
		process_at_least_by_percentage: "Al menos el ${0}% de los revisores",
		process_comments: "Comentarios:",
		process_review_step_comments_hover_help: "Si rechaza el elemento de trabajo, debe proporcionar información acerca de por qué lo ha rechazado. Esta información permite que el originador del elemento de trabajo o el revisor anterior resuelvan sus comentarios.",
		process_rework_step_comments_hover_help: "Debe proporcionar información acerca de cómo ha resuelto los comentarios. Si no está de acuerdo con los comentarios, indique los motivos de su decisión.",
		process_rejection_reason: "Razón del rechazo:",
		process_summary: "Resumen",
		process_sequential_review: "Revisión secuencial",
		process_sequential_review_description: "El elemento de trabajo lo revisará cada revisor por orden.",
		process_parallel_review: "Revisión paralela",
		process_parallel_review_description: "El elemento de trabajo lo revisarán todos los revisores al mismo tiempo.",
		process_parallel_approvals_required_error: "El número de aprobaciones necesarias es demasiado elevado. Solo se especifican ${0} revisores.",
		process_parallel_invalid_required_approvals_count: "El valor no es válido. El valor debe ser ${0}.",
		process_subject_prompt: "Especifique el asunto",

		/*Added Messages for CM8 Step Processor*/
		process_workitem: "Elemento de trabajo:",

		/* Security Widget */
		/* _level entries are the permission names */
		view_properties_level: "Visualizar propiedades",
		view_permissions_level: "Ver permisos",
		view_content_level: "Visualizar documento",
		link_level: "Enlazar",
		modify_properties_level: "Editar propiedades",
		modify_content_level: "Editar documento",
		minor_version_level: "Editar versión menor",
		major_version_level: "Editar versión principal",
		create_instance_level: "Crear instancia",
		delete_document_level: "Suprimir documento",
		delete_item_level: "Suprimir elemento",
		modify_document_permissions_level: "Gestionar permisos",
		modify_folder_permissions_level: "Gestionar permisos",
		modify_owner_level: "Modificar propietario",
		delete_folder_level: "Suprimir carpeta",
		file_in_folder_level: "Añadir a carpetas",
		create_subfolder_level: "Crear subcarpetas",
		link_item_level: "Anotar documento, Añadir a carpeta", /* Use in inheritance permission pane. Apply to both document and folder */
		link_item_level_hover_help: "<ul><li>Solo para documentos: Añada una anotación al documento o elimina una anotación del documento</li><li>Solo para carpetas: Añada elementos a la carpeta o elimine elementos de la carpeta</li></ul>", /* Use in inheritance permission pane. Apply to both document and folder */
		delete_level: "Suprimir",	/* Use in inheritance permission pane. Apply to both document and folder */		
		full_control_privilege: "Propietario",
		/* previously \"Full control\" */
		edit_privilege: "Autor",
		/* previously \"Edit\" */
		read_only_privilege: "Lector",
		/* previously \"Read only\" */
		no_access_privilege: "Sin acceso",
		share_with_label: "Compartir con:",
		/* Used only in CM8 to allow the user to select the default ACL configuration of the item type */
		private_label: "Sólo yo",
		public_label: "Todo el mundo",
		members_label: "Usuarios y grupos específicos",
		select_members_label: "Seleccionar...",
		select_user_group_label: "Seleccionar usuarios...",
		select_users_groups_label: "Seleccionar usuarios y grupos...",
		select_user_label: "Seleccionar usuario...",
		propagation_label: "Propagación:",
		access_label: "Permisos:",
		add_permission_add_label: "Añadir",
		security_policy_label: "Política de seguridad:",
		includes_inherited_access: "Incluye acceso heredado",
		customize_access_for_label: "Personalizar acceso de:",
		customize: "Personalizar",
		direct: "Este elemento",
		singleLevelInheritance: "Un nivel",
		infiniteLevelInheritance: "Todos los niveles",
		inherited: "Heredado",
		direct_hover_help: "Los valores de seguridad se aplican al elemento seleccionado",
		singleLevelInheritance_hover_help: "Estos permisos se aplican a este elemento y a los hijos inmediatos que están configurados para heredar seguridad de este elemento.",
		infiniteLevelInheritance_hover_help: "Estos permisos se aplican a este elemento y a todos los descendientes que están configurados para heredar seguridad de este elemento.",
		inherited_hover_help: "Estos permisos se heredan del padre.",
		// The parameter ${0} in the next three messages is a user or group name.
		singleLevelInheritance_member_hover_help: "Los permisos de ${0} se aplican a este elemento y a los hijos inmediatos que están configurados para heredar seguridad de este elemento.",
		infiniteLevelInheritance_member_hover_help: "Los permisos de ${0} se aplican a este elemento y a todos los descendientes que están configurados para heredar seguridad de este elemento.",
		inherited_member_hover_help: "Los permisos de ${0} se heredan del padre.",
		partial_hover_help: "Un usuario ha cambiado los valores de seguridad del elemento",
		allow: "Permitir",
		deny: "Denegar",
		basic: "Básico",
		advanced: "Avanzado",
		permission_type: "Establecer acceso para:",
		share_with_hover_help: "El elemento actualmente está compartido con los siguientes usuarios y grupos.",
		direct_security_policy_hover_help: "Los valores de esta política de seguridad permiten cambiar la seguridad de este elemento.",
		security_policy_hover_help: "La seguridad de este elemento es de sólo lectura porque los valores de la política de seguridad impiden cambiar la seguridad de dicho elemento.",
		security_remove: "Sin permisos",
		pseudo_group_label: "Cuentas de alias",
		marking_hover_help: "La seguridad de este elemento está controlada por un conjunto de marcado, que puede afectar a la seguridad del elemento.",
		note_label: "Importante:",
		marking_text: "Este elemento está marcado como: ${0}. Es posible que el elemento tenga restricciones de seguridad adicionales.",
		authenticated_users: "Usuarios autenticados",
		realm_users: "${0} usuarios",
		denyAll: "Denegar todo",
		allowAll: "Mostrar todo",
		remove_direct_text: "Cuando se guardan los cambios, los permisos de este miembro se eliminan del elemento.",
		remove_single_inheritance_text: "Cuando se guardan los cambios, los permisos de este miembro se eliminan del elemento y de <br>los hijos inmediatos que están configurados para heredar seguridad del elemento.<p>¿Desea continuar?",
		remove_infinite_inheritance_text: "Cuando se guardan los cambios, los permisos de este miembro se eliminan del elemento y de <br>todos los descendientes que están configurados para heredar seguridad del elemento.<p>¿Desea continuar?",
		remove_inheritance_text: "Cuando se guardan los cambios, los permisos de este miembro se eliminan del elemento y de <br>todos los descendientes que están configurados para heredar seguridad del elemento. Solo se conservarán los permisos que <br>herede este elemento.<p>¿Desea continuar?",
		// The parameter ${0} in the remove_member message is a user or group name.
		remove_member: "Elimine los permisos de ${0}",

		security_proxy_text: "La seguridad de este elemento es de sólo lectura.",
		security_proxy_declared_text: "La seguridad de este elemento es de sólo lectura porque la ha definido un proxy de seguridad.",
		security_proxy_hover_help: "La seguridad de este elemento está controlada por la seguridad que se ha establecido en otro objeto del repositorio.",
		add_permissions_label: "Añadir permisos",
		permission_propagation_direct: "Sólo esta carpeta",
		permission_propagation_onelevel: "Esta carpeta y un nivel por debajo",
		permission_propagation_alllevels: "Esta carpeta y todos los niveles por debajo",
		document_propagation_label: "Establecer acceso para:",
		document_propagation_FOLDER: "Carpeta",
		document_propagation_DOCUMENT: "Documento",

		/* Tooltip info, indicates if this item is the authentication source for a desktop cfg - displayed with a value of Yes or No. */
		is_authentication_source: "Origen de autenticación:",

		/* Versions Widget */
		object_versions_selector_label: "Versiones:",
		object_versions_label: "Versiones",
		object_type_document_label: "Documento:",

		/* Folders Filed In */
		properties_folders_filed_in_label: "Carpetas archivadas en",
		folders_filed_in_folder_col_hdr: "Carpeta",
		folders_filed_in_path_col_hdr: "Vía de acceso",
		folders_filed_in_containment_name_col_hdr: "Nombre de contención",
		folders_filed_in_creator_col_hdr: "Creado por",
		folders_filed_in_date_created_col_hdr: "Creado el",

		/* Parent Documents */
		properties_parent_documents_label: "Documentos padres",

		/* Select object dialog */
		select_object_title: "Seleccionar elemento",
		select_object_breadCrumb_version_prefix: "Versiones para: ",
		show_versions_label: "Mostrar versiones",
		use_current_version_label: "Utilizar versión actual",
		use_released_version_label: "Utilizar versión liberada",

		/* Select content class dialog */
		select_class: "Seleccionar clase",
		/* Select Search dialog */
		select_search: "Seleccionar búsqueda",

		/* Show hyperlink dialog */
		show_hyperlink_title: "Ver enlace",
		show_hyperlink_intro: "Puede copiar y pegar el enlace en correos electrónicos, conversaciones y páginas web. Si existen varias versiones del elemento, especifique con qué versión desea realizar el enlace.",
		show_hyperlink_intro_no_version_select: "Puede copiar y pegar el enlace en correos electrónicos, chats y páginas web.",
		show_text_label: "Versión:",
		released_button_label: "Publicado",
		current_button_label: "Actual",
		select_button_label: "Versión específica",
		show_hyperlink_no_released_version_msg: "No existe ninguna versión publicada de este documento.",

		/* Start on workflow / Work Item Properties dialog */
		start_workflow_title: "Iniciar flujo de trabajo",
		edit_workflow_title: "Propiedades del elemento de trabajo",
		start_workflow_intro: "Inicie un flujo de trabajo para procesar los elementos seleccionados. Si desea asignar los elementos de trabajo a un usuario específico, especifique un propietario.",
		edit_workflow_intro: "Puede editar las propiedades de los elementos de trabajo seleccionados. Si desea reasignar el elemento de trabajo a otro usuario, especifique un propietario.",
		workflow_field_label: "Flujo de trabajo:",
		priority_field_label: "Prioridad:",
		owner_field_label: "Propietario:",
		start_button_label: "Iniciar",
		save_button_label: "Guardar",
		owner_value_hint: "Escriba una serie alfanumérica con un máximo de 32 caracteres. La cadena puede contener solo espacios o los siguientes caracteres: a-z, A-Z, 0-9 y ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",

		properties_content_elements_label: "Elementos de contenido",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		owner_value_error: "El valor no es válido. El valor puede contener solo espacios o los siguientes caracteres: a-z, A-Z, 0-9 y ` . , : ; ? \\ \" / - _ &amp; + % * = < > ( ) | ! $ # ^ @",
		priority_value_hint: "Introduzca un valor del 1 al 32000 para indicar la importancia del elemento de trabajo.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		priority_value_error: "El valor no es válido. La prioridad debe tener un valor del 1 al 32000.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Fail
		// Comments: What should the user do? Select rather than type?
		workflow_value_error: "El nombre de flujo de trabajo no existe.",

		/* Suspend work items in workflow */
		suspend_workitems_title: "Suspender de flujo de trabajo",
		suspend_workitems_intro: "Cuando se suspende un elemento de trabajo del flujo de trabajo, el elemento de trabajo no se puede procesar hasta que se vuelve a reanudar",
		suspend_workitems_options_label: "Suspender los elementos de trabajo seleccionados:",
		suspend_until_resume_label: "Hasta que se reanuda manualmente",
		suspend_until_date_label: "Hasta",
		suspend_for_duration_label: "Durante",
		suspend_for_duration_hours: "Horas",
		suspend_for_duration_days: "Días",
		suspend_for_duration_weeks: "Semanas",
		suspend_for_duration_months: "Meses",
		suspend_for_duration_years: "Años",
		suspend_button_label: "Suspender",
		suspend_duration_value_hint: "Introduzca un valor que quede dentro del rango del 1 al 99 para la duración.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: Edit
		// Comments:
		suspend_duration_value_error: "El valor no es válido. El valor debe estar en el rango del 1 al 99.",

		/* Remove from workflow */
		remove_workflow_title: "Eliminar de flujo de trabajo",
		remove_workflow_confirmation: "¿Desea eliminar los elementos seleccionados del flujo de trabajo?<br>Se ha(n) seleccionado ${0} elemento(s).",
		remove_workflow_button_label: "Eliminar",

		/* Unfile dialog */
		unfile_dialog_title: "Eliminar de carpeta",
		unfile_dialog_remove_from_folder_label: "Eliminar de:",
		unfile_dialog_info_text: "Puede eliminar elementos de carpetas. Sin embargo, al eliminar un elemento de todas las carpetas este no se elimina del repositorio. Todavía puede recuperar el elemento si ejecuta una búsqueda. En esta lista solo se muestran las carpetas para las que tiene privilegios de vista.",
		unfile_dialog_select_all: "Seleccionar todo",
		unfile_dialog_deselect_all: "Borrar todo",
		unfile_dialog_remove_button_label: "Eliminar",
		unfile_dialog_select_folder_col_hdr: "Seleccionar carpeta",
		unfile_dialog_folder_col_hdr: "Carpeta",
		unfile_dialog_path_col_hdr: "Vía de acceso",
		unfile_dialog_not_filed_msg: "Este elemento no se encuentra en ninguna carpeta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		unfile_dialog_no_rights_to_unfile_msg: "No dispone de los permisos adecuados para eliminar este elemento de ninguna de las carpetas en las que está este elemento.",
		unfile_dialog_folder_not_selectable_tooltip: "No dispone de los permisos adecuados para eliminar este elemento de esta carpeta.",
		unfile_multi_prompt: "¿Desea eliminar los elementos seleccionados de la carpeta ${0} ?",
		unfile_large_number_items_confirmation_question: "Ha seleccionado ${0} elemento(s) que se eliminarán de la carpeta ${1}.<br/>Si suprime una gran cantidad de elementos de la carpeta, el proceso podría tardar mucho tiempo.<br/>¿Desea continuar?",

		/*Move/Add to folder dialog*/
		open_folder_button_caption: "Abrir",
		move_to_folder_title: "Mover a carpeta",
		move_to_folder_button_caption: "Mover",
		move_to_folder_label: "Mover a:",
		add_to_folder_title: "Añadir a carpeta",
		add_to_folder_button_caption: "Añadir",
		add_to_folder_label: "Añadir a:",
		copy_to_folder_title: "Copiar en carpeta",
		copy_to_folder_button_caption: "Copiar",
		copy_to_folder_label: "Copiar en:",
		copy_to_folder_delete_label: "Cuando se complete la copia, suprima los elementos seleccionados de Box.",
		move_from_folder_label: "Mover de:",
		move_file_info_text: "Puede mover elementos de una carpeta a otra.",
		move_folder_info_text: "Puede mover carpetas de una carpeta padre a otra.",
		add_doc_to_folder_info_text: "Puede añadir elementos a una o varias carpetas. Si un elemento ya está en una carpeta, permanecerá en dicha carpeta y se añadirá a todas las carpetas adicionales que especifique.",
		copy_doc_to_folder_info_text: "Puede copiar elementos en una carpeta.",
		box_copy: "Copia de Box",
		box_copy__button_caption: "Copiar",
		box_copy_to_info_text: "Seleccione el repositorio y la carpeta en los que desea copiar los elementos seleccionados en Box.",
		box_copy_from_info_text: "Seleccione el repositorio y la carpeta en los que desea copiar los elementos seleccionados en Box.",
		box_copy_version_info_text: "Para añadir un documento nuevo, seleccione el repositorio y la carpeta. Para incorporar una versión nueva, seleccione el repositorio y el documento.",
		admin_box_copy: "Copia de Box",
		admin_box_copy_hover: "Esta opción permite a los usuarios copiar documentos a Box.",

		no_permission_to_copy_version_msg: "No puede copiar el documento desde Box como una versión nueva del documento seleccionado. O no tiene los permisos adecuados para editar el documento seleccionado o el documento seleccionado ha sido extraído por otra persona.",
		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_all_msg: "No dispone de los permisos adecuados para eliminar este elemento de ninguna de las carpetas en las que está este elemento.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		no_permission_to_move_single_msg: "No dispone de los permisos adecuados para eliminar este elemento de esta carpeta.",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments:
		move_folder_not_filed_msg: "Este elemento no se puede mover porque no está archivado en ninguna carpeta. Elija otro elemento.",

		/* Workflow Subscriptions dialog */
		subscriptions_dialog_title: "Iniciar flujo de trabajo",
		subscriptions_dialog_available_items_label: "Elementos disponibles:",
		subscriptions_dialog_info_text: "Especifique qué flujo de trabajo desea iniciar.",
		subscriptions_dialog_select_button_label: "Aceptar",
		subscriptions_dialog_name_col_hdr: "Nombre",
		subscriptions_dialog_desc_col_hdr: "Descripción",

		/* Manage Process Roles dialog */
		manageroles_dialog_title: "Gestionar roles",
		manageroles_dialog_info_text: "Puede modificar la lista de usuarios para cada rol asociado a este espacio de aplicación de proceso.",
		manageroles_dialog_members_label: "Miembros",
		manageroles_dialog_roles_label: "Roles",
		manageroles_dialog_add_button_label: "Añadir usuarios y grupos",
		manageroles_dialog_remove_button_label: "Eliminar",
		manageroles_dialog_save_button_label: "Guardar",

		// Created by: TBD
		// Reviewed by: Julia B., 08.27.2012
		// Score: QA
		// Comments: Is this a message or is this displayed as informational text somewhere in the UI?
		subscriptions_dialog_no_subs_msg: "No hay flujos de trabajo asociados con este elemento.",

		/* Workflow User Preferences Dialog */
		workflow_pref_dialog_title: "Preferencias de flujo de trabajo",
		workflow_pref_dialog_info_text: "Especifique los sucesos de flujo de trabajo para los que quiera notificaciones por correo electrónico. También puede habilitar la opción de dirigir su trabajo a otra persona mediante la selección de un usuario al que delegar el trabajo.",

		workflow_pref_general: "General",
		workflow_pref_email_address: "Dirección de correo electrónico",
		workflow_pref_email_address_hover: "Especifique la dirección de correo electrónico en la que desea recibir notificaciones por correo electrónico.",
		workflow_pref_preferred_locale: "Idioma",
		workflow_pref_preferred_locale_hover: "Especifica el idioma en el que se muestran las notificaciones por correo electrónico.",

		workflow_pref_work_item_notice: "Notificaciones de elemento de trabajo",
		workflow_pref_step_new_assignment: "Se me ha asignado un nuevo elemento de trabajo",
		workflow_pref_step_new_assignment_hover: "Avisarme cuando reciba un nuevo elemento de trabajo.",
		workflow_pref_step_expired_deadline: "Fecha límite de elemento de trabajo superada",
		workflow_pref_step_expired_deadline_hover: "Avisarme cuando olvide la fecha límite de un elemento de trabajo.",
		workflow_pref_step_reminders: "Cerca de fecha límite de un elemento de trabajo",
		workflow_pref_step_reminders_hover: "Recordarme que se acerca la fecha límite de un elemento de trabajo.",

		workflow_pref_originator_notice: "Notificaciones de originador",
		workflow_pref_milestone_reached: "Se ha alcanzado un objetivo",
		workflow_pref_milestone_reached_hover: "Avisarme cuando se alcance un objetivo en un flujo de trabajo que yo haya iniciado.",

		workflow_pref_tracker_notice: "Notificaciones de rastreador de flujo de trabajo",
		workflow_pref_tracker_new_assignment: "Se me ha asignado un nuevo elemento de rastreador",
		workflow_pref_tracker_new_assignment_hover: "Notificarme cuando se inicie un flujo de trabajo que estoy rastreando.",
		workflow_pref_tracker_deadline_reminders: "Fecha límite de flujo de trabajo cercana",
		workflow_pref_tracker_deadline_reminders_hover: "Recordarme que se acerca la fecha límite de un flujo de trabajo.",
		workflow_pref_tracker_deadline_expired: "Fecha límite de flujo de trabajo superada",
		workflow_pref_tracker_deadline_expired_hover: "Avisarme cuando se haya superado la fecha límite de un flujo de trabajo.",
		workflow_pref_tracker_exception: "Error de flujo de trabajo",
		workflow_pref_tracker_exception_hover: "Avisarme cuando se produzca una excepción o un error en un flujo de trabajo.",
		workflow_pref_tracker_expired_deadline: "Fecha límite de paso superada",
		workflow_pref_tracker_expired_deadline_hover: "Avisarme cuando se haya superado la fecha límite de un paso que esté rastreando.",
		workflow_pref_tracker_milestone_reached: "Se ha alcanzado un objetivo",
		workflow_pref_tracker_milestone_reached_hover: "Avisarme cuando se alcance un objetivo en un flujo de trabajo que yo haya rastreado.",

		workflow_pref_out_notice: "Fuera de la oficina",
		workflow_pref_proxy_user: "Delegar trabajo a",
		workflow_pref_proxy_user_hover: "Utilice esta opción para dirigir automáticamente su trabajo a otro usuario; por ejemplo, cuando no esté en la oficina o esté de vacaciones.",
		workflow_pref_workflow: "Flujo de trabajo",
		workflow_pref_on: "Activar",
		workflow_pref_off: "Desactivar",

		/* Launch from Transfered Workflows dialog */
		transfered_workflows_dialog_title: "Iniciar flujo de trabajo",
		transfered_workflows_dialog_info_text: "Seleccione un flujo de trabajo para iniciar.",
		transfered_workflows_dialog_available_items_label: "Elementos disponibles:",
		transfered_workflows_dialog_select_button_label: "Iniciar",
		transfered_workflows_dialog_name_col_hdr: "Nombre",
		transfered_workflows_dialog_no_item_found: "No se han encontrado flujos de trabajo transferidos.",

		/* Transfer Workflow Definition dialog */
		transfer_workflow_dialog_title: "Transferir flujo de trabajo",
		transfer_workflow_dialog_info_text: "Seleccione un flujo de trabajo para transferirlo al sistema de flujos de trabajo.",
		transfer_workflow_dialog_use: "Utilizar este nombre de flujo de trabajo",
		transfer_workflow_dialog_use_another: "Utilizar otro nombre de flujo de trabajo",
		transfer_workflow_dialog_in_use: "El nombre del flujo de trabajo es: ",
		transfer_workflow_dialog_transfer_button_label: "Transferir",
		transfer_workflow_dialog_no_items_found: "No se han encontrado flujos de trabajo transferidos.",
		transfer_workflow_dialog_use_hover: "Especifique el nombre del flujo de trabajo actual de la definición de flujo de trabajo.",
		transfer_workflow_dialog_another_hover: "Especifique otro nombre de flujo de trabajo o vuelva a utilizar un nombre de flujo de trabajo transferido existente.",

		/*Search In control*/
		search_in_title: "Buscar en:",
		search_in_teamspaces: "Espacios de equipo",
		search_in_repositories: "Repositorios",
		search_in_thisteamspaces: "Este espacio de equipo",

		ajaxViewer_save: "Guardar anotaciones",
		ajaxViewer_print: "Vista previa de impresión",
		ajaxViewer_firstPage: "Primera página",
		ajaxViewer_previousPage: "Página anterior",
		ajaxViewer_nextPage: "Página siguiente",
		ajaxViewer_lastPage: "Última página",
		ajaxViewer_unknownPageCount: "¿1 de ?",
		/* Note to translators. In the nOfm message below,
		   leave the "N" and "M" as the ascii N and M. These will
		   be used to insert the actual page and page count
		   by javascript. */
		ajaxViewer_nOfm: "${0} de ${1}",
		ajaxViewer_zoomOut: "Alejar",
		ajaxViewer_zoomIn: "Acercar",
		ajaxViewer_25percent: "25%",
		ajaxViewer_50percent: "50%",
		ajaxViewer_75percent: "75%",
		ajaxViewer_100percent: "100%",
		ajaxViewer_150percent: "150%",
		ajaxViewer_200percent: "200%",
		ajaxViewer_300percent: "300%",
		ajaxViewer_400percent: "400%",
		ajaxViewer_fitWidth: "Ajustar ancho",
		ajaxViewer_fitHeight: "Ajustar altura",
		ajaxViewer_fitPage: "Ajustar página",
		ajaxViewer_rotate270: "Rotar 270 grados",
		ajaxViewer_rotate90: "Rotar 90 grados",
		ajaxViewer_rotate180: "Rotar 180 grados",
		ajaxViewer_darken: "Oscurecer",
		ajaxViewer_lighten: "Aclarar",
		ajaxViewer_lessContrast: "Menos contraste",
		ajaxViewer_moreContrast: "Más contraste",
		ajaxViewer_invert: "Invertir",
		ajaxViewer_createHighlight: "Resaltar",
		ajaxViewer_createNote: "Anotar",
		ajaxViewer_editAnnotation: "Editar propiedad de anotación",
		ajaxViewer_deleteAnnotation: "Suprimir anotación",
		ajaxViewer_editAnnotationTitle: "Editar propiedad de anotación",
		printableView_print: "Imprimir",
		printableView_close: "Cerrar",

		search_results_dropdown_button: "Visualización de resultados",
		search_results_columns_label: "Visualización de resultados de búsqueda",
		search_results_columns_description: "Seleccione las propiedades que desea que se visualicen en los resultados de búsqueda.",
		search_results_sortby_label: "Ordenar por:",
		search_results_order_label: "Orden de clasificación:",
		search_results_accending_label: "Ascendente",
		search_results_descending_label: "Descendente",
		search_results_available_properties: "Disponible",
		search_results_selected_properties: "Seleccionado",
		search_rank_property: "Rango (sólo búsqueda de texto)",
		search_name_attribute: "Nombre (${0})",
		search_results_summary_enabled_label: "Habilitar resúmenes de contenido (sólo búsqueda de texto)",

		/* manage teamspace dialog */
		manage_teamspace_search_tab_title: "Búsquedas",
		manage_teamspace_classes_tab_title: "Clases",
		manage_teamspace_entry_templates_tab_title: "Plantillas de entrada",
		manage_teamspace_team_tab_title: "Equipo",
		manage_teamspace_roles_tab_title: "Roles",
		manage_teamspace_dialog_title: "Modificar espacio de equipo",
		manage_teamspace_button_label: "Modificar espacio de equipo",
		manage_teamspace_team_pane_heading: "Seleccionar equipo",
		manage_teamspace_classes_pane_heading: "Seleccionar clases",
		manage_teamspace_entry_templates_pane_heading: "Seleccionar plantillas de entrada",
		manage_teamspace_no_rights_message: "No dispone de los permisos adecuados para modificar este espacio de equipo.",

		/* teamspace props dialog */
		teamspace_props_dialog_title: "Propiedades de espacio de equipo",
		// heading displayed in select columns pane:
		teamspace_props_sel_cols_hdr: "Especifique las propiedades que deben visualizarse para documentos y carpetas en la lista de contenidos cuando los usuarios naveguen en el espacio de equipo. También puede especificar el orden de visualización de las propiedades.",
		teamspace_props_sel_cols_use_default_label: "Utilice los valores de <b>Examinar</b> para este repositorio",
		teamspace_props_sel_cols_use_default_tooltip: "Utilice los valores que se especifican en la página Examinar para este repositorio en la herramienta de administración.",
		teamspace_props_general_tab_label: "General",
		teamspace_props_column_props_tab_label: "Propiedades visualizadas",

		/* teamspace import / export dialog */
		teamspace_choose_file_to_import_label: "Elegir archivo para importar",
		teamspace_import_template_instruction: "Puede seleccionar un archivo de exportación de plantilla de espacio de equipo e importarlo.",
		teamspace_import_template_button_label: "Importar",
		teamspace_import_template_dialog_label: "Importar plantilla de espacio de equipo",

		/* Annotation Dialog */
		annotationDlg_title: "Anotaciones",
		annotationDlg_description: "El documento seleccionado tiene las anotaciones siguientes:",
		annotationDlg_msg_noAnnotations: "No existen anotaciones. Pulse Añadir para crear una anotación.",
		annotationDlg_pageLabel: "Página: ${pageNum}",
		annotationDlg_accLabel: "ACCESO: ${accType}",
		annotationDlg_accLabel_public: "Público",
		annotationDlg_accLabel_private: "Privado",
		annotationDlg_accLabel_privateGroup: "Privado(${groupName})",
		annotationDlg_copiable: "Se puede copiar en otro servidor",
		annotationDlg_cannotCopy: "No se puede copiar en otro servidor",
		annotationDlg_addButtonLabel: "Añadir",

		/* Share Dialog */
		is_shared: "Compartido",
		is_share_pending: "Compartición pendiente",
		share_title: "Compartición de Box",
		share_instructions_new: "Envíe un correo electrónico que incluya un enlace al archivo compartido. Cualquier que disponga del enlace podrá acceder al documento.",
		share_instructions_existing: "Envíe un correo electrónico que incluya un enlace al archivo compartido. Cualquier que disponga del enlace podrá acceder al documento. Otras personas pueden disponer del enlace porque alguien ya haya compartido este archivo.",
		share_instructions_another_version_shared: "Envíe un correo electrónico que incluya un enlace al archivo compartido. Cualquier que disponga del enlace podrá acceder al documento. Otras personas pueden disponer del enlace porque alguien ya haya compartido otra versión de este archivo.",
		share_buttonLabel_share: "Compartir",
		share_email_addresses: "Enviar a:",
		share_email_addresses_hover: "Cuando se completa la compartición, se envía el enlace a estas direcciones de correo electrónico. Si no introduce nada, el enlace se enviará a su propia dirección de correo electrónico.",
		share_email_addresses_reshare_hover: "Cuando se completa la compartición, se envía el enlace a estas direcciones de correo electrónico. Si no introduce nada, no se enviará ningún correo electrónico.",
		share_password: "Definir contraseña:",
		share_password_placeholder: "Opcional",
		share_comments: "Mensaje:",
		share_comments_default: "Me gustaría compartir mi archivo con usted en Box.",
		share_myEmail: "Enviar desde:",
		share_expiration: "Definir caducidad del enlace:",
		share_expire: "El acceso caduca:",
		share_expire_none: "Nunca caduca",
		share_allowDownload: "Permitir la descarga",
		share_add: "Añadir",
		share_advanced_instructions: "Los parámetros de descarga, caducidad y contraseña se aplican al archivo compartido en Box.",
		share_advanced_existing_instructions: "Los parámetros de descarga, caducidad y contraseña se aplican al archivo compartido en Box.",
		share_options_edit_warning: "Importante: Cualquier cambio realizado en estos parámetros afectará a todos los que dispongan del enlace, incluyendo las personas que ya poseen en mismo.",
		share_link: "Enlace:",
		share_email_addresses_placeholder: "Direcciones de correo electrónico",
		share_email_address_placeholder: "Dirección de correo electrónico",
		share_email_address_invalid: "Especifique una dirección de correo electrónico válida.",
		share_cannot_share_with_self: "No puede compartir archivos con usted mismo. Especifique un usuario diferente.",
		share_selected_version_with_minor_warning_hover: "Se ha compartido la versión ${0} del documento. La versión seleccionada es ${1}.<br><br><b>Aviso</b>: Si comparte la versión ${1}, nadie podrá compartir la versión ${2} a menos que suprima la compartición de la versión ${1}.",
		share_selected_version_hover: "Se ha compartido la versión ${0} del documento. La versión seleccionada es ${1}.",
		share_selected_version_message: "Importante: Se ha compartido la versión ${0} del documento. La versión seleccionada es ${1}.",
		share_different_version_message: "Importante: Ha seleccionado la versión ${1}, pero ya se ha compartido la versión ${0} del documento.  No puede compartir la versión ${1} a menos que antes suprima la compartición, pero también puede compartir el enlace a la versión ${0}.",
		share_version_message: "Importante: Se ha compartido la versión ${0} del documento. Seleccione la versión que desea compartir.",
		share_version_new: "Compartir versión ${0}",
		share_version_new_p8_hover: "Si comparte este documento se creará un enlace específico únicamente para la versión seleccionada.<br><br>Cuando ya se ha compartido un documento:<ul><li>Puede compartir una versión posterior y el enlace le redirigirá a la versión posterior.</li><li>No puede compartir una versión anterior a menos que antes suprima la compartición.</li></ul>",
		share_version_new_cm_hover: "Si comparte este documento se creará un enlace específico únicamente para la versión seleccionada.<br><br>Cuando ya se ha compartido un documento:<ul><li>Puede compartir una versión posterior y el enlace le redirigirá a la versión posterior.</li><li>No puede compartir una versión anterior.</li></ul>",
		share_version_update: "Compartir versión ${0} (Actualizar las opciones de compartición)",
		share_version_update_p8_hover: "Si comparte este documento sólo se mantendrá el enlace a la versión específica.<br><br>Cuando ya se ha compartido un documento:<ul><li>Puede compartir una versión posterior y el enlace le redirigirá a la versión posterior.</li><li>No puede compartir una versión anterior a menos que antes suprima la compartición.</li></ul>",
		share_version_update_cm_hover: "Si comparte este documento sólo se mantendrá el enlace a la versión específica.<br><br>Cuando ya se ha compartido un documento:<ul><li>Puede compartir una versión posterior y el enlace le redirigirá a la versión posterior.</li><li>No puede compartir una versión anterior.</li></ul>",
		share_version_change_to_current: "Compartir versión ${0} (Actualizar la compartición con la versión seleccionada.)",
		share_version_change_to_current_p8_hover: "Si comparte este documento se actualizará el enlace para que dirija sólo a la versión seleccionada.<br><br>Cuando ya se ha compartido un documento:<ul><li>Puede compartir una versión posterior y el enlace le redirigirá a la versión posterior.</li><li>No puede compartir una versión anterior a menos que antes suprima la compartición.</li></ul>",
		share_version_change_to_current_cm_hover: "Si comparte este documento se actualizará el enlace para que dirija sólo a la versión seleccionada.<br><br>Cuando ya se ha compartido un documento:<ul><li>Puede compartir una versión posterior y el enlace le redirigirá a la versión posterior.</li><li>No puede compartir una versión anterior.</li></ul>",
		share_repository: "Repositorio para archivos compartidos",
		share_repository_hover: "Si no ve el repositorio de Box que desea utilizar, puede añadir un nuevo repositorio de Box en la página Repositorios.",
		share_options: "Opciones de compartición",
		unshare_confirm: "Si suprime la compartición, todos los enlaces compartidos se rompen, incluyendo los enlaces compartidos previamente enviados por otros usuarios. Cualquier otro usuario que desee compartir un documento debe seleccionar el documento original y compartirlo de nuevo.<br><br>¿Está seguro de que desea suprimir la compartición?",
		unshare_button: "Suprimir compartición de Box",
		admin_share: "Servicios de compartición de Box:",
		admin_share_hover: "Permite a los usuarios compartir un documento desde cualquier repositorio en el que esté habilitada la compartición de Box. Compartir un documento incluye la copia del archivo en Box, la creación de un enlace y el envío del enlace por correo electrónico.",
		admin_my_email_modifiable: "Permitir a los usuarios modificar la dirección de Enviar desde correo electrónico",
		admin_my_email_modifiable_hover: "De manera predeterminada, para la compartición de Box, la dirección de correo electrónico del usuario es de sólo lectura y se obtiene a partir de una correlación de usuarios y direcciones de correo electrónico que representan las cuentas de usuario de Box.<br><br>Seleccione esta opción para permitir a los usuarios editar su dirección de correo electrónico al realizar la compartición; sin embargo, la validez de la dirección de correo electrónico no está verificada.",
		admin_repos_admin_user: "Administrador de compartición:",
		admin_repos_admin_user_hover: "Defina el administrador de compartición si dispone de un escritorio con servicios de compartición de Box habilitados y este repositorio de Box seleccionado como repositorio para los archivos compartidos.<br><br>Haga clic en Definir e inicie sesión en Box utilizando una cuenta de administrador de Box válida.<br><br>El administrador de compartición debe ser un usuario administrador de Box configurado para disponer de almacenamiento ilimitado en Box.",
		admin_repos_admin_user_not_set_warning: "El administrador de Box no se ha configurado para el repositorio seleccionado.<br><br>Los servicios de compartición de Box no están habilitados hasta que defina el administrador de Box para el repositorio seleccionado o seleccione otro repositorio de Box en el que se haya configurado el administrador de Box.<br><br>Puede definir el administrador de Box en la sección de servicios de compartición de Box de la Página General del repositorio.",
		admin_share_not_configured_warning: "Para poder utilizar los servicios compartidos de Box, primero debe añadir y seleccionar un repositorio de Box con autenticación de servidor.",
		/* Office Online Server settings */
		admin_office_online_title: "Configuración de Office Online:",
		admin_office_online_server_enable: "Servidor de Office Online:",
		admin_office_online_server_enable_hover: "Especifique si desea que los usuarios con acceso a este escritorio puedan editar sus documentos de Office utilizando el servidor de Office Online.",		
		admin_office_online_allow_collaborative_editing: "Permitir edición colaborativa",
		admin_office_online_allow_collaborative_editing_hover: "Permite que varios usuarios trabajen en el mismo documento. Desmarque la opción si desea restringir la edición de documentos a un solo usuario.",
		admin_office_online_repository_not_set_warning: "Para poder utilizar el servicio Office Online, debe habilitar en primer lugar el servicio en un repositorio y especificar el URL del servidor de Microsoft Office Online. Pulse <b>Repositorios</b>, seleccione un repositorio y, a continuación, habilite el servicio en la pestaña <b>Editar integración</b>. Pulse <b>Configuración > General</b> e indique el URL del servidor de Microsoft Office Online.",
		admin_settings_office_online_server_enable_hover: "Especifique si desea utilizar el servidor de Office Online para trabajar en documentos de Office.",
		admin_office_online_server_url: "URL de servidor de Microsoft Office Online",
		admin_office_online_server_url_hover: "Especifique el URL mediante el cual las otras aplicaciones pueden comunicarse con el servidor de Office Online. El URL tiene el formato http://nombre_servidor:número_puerto/hosting/discovery.",
		admin_office_online_server_Verified: "Verificado",
	    admin_office_online_server_Failed: "<b>Error</b>",

		admin_repcfg_office_online_service_p8_hover: "Para inicializar el repositorio para utilizar el servidor de Office Online, puede añadir el archivo de plantilla inicial para cada aplicación Office. Si no se especifica una plantilla, se utilizará la predeterminada.",	
		admin_repcfg_office_online_server_integration: "Integración del servidor de MS Office Online",
		admin_repcfg_office_online_service_url_not_set_warning: "Para poder utilizar el servidor de Office Online, debe especificar en primer lugar el URL del servidor de Microsoft Office Online. Pulse Configuración > General y especifique el URL",
		admin_repcfg_office_online_word_template_name: "Plantilla de Word predeterminada",
		admin_repcfg_office_online_excel_template_name: "Plantilla de Excel predeterminada",
		admin_repcfg_office_online_powerpoint_template_name: "Plantilla de PowerPoint predeterminada",
		admin_repcfg_office_online_blank_template_description: "Es la plantilla predeterminada que se utilizará si no añade su propia plantilla.",
		/* Edit Service settings */
		admin_icn_edit_title: "Editar configuración",	
	    admin_icn_edit_files_cleanup_interval: "Intervalo de limpieza de archivos temporales (en días):",
	    admin_icn_edit_files_cleanup_interval_hover: "Puede definir el tiempo durante el cual se conservarán los archivos temporales en el cliente de edición de ICN. El tiempo predeterminado es de 20 días. El tiempo máximo es de 20 días. El tiempo mínimo es de 1 día.",
	    admin_icn_edit_service_integration: "Integración de servicio de edición",
	    admin_icn_edit_service_integration_intro: "El servicio de edición permite a los usuarios añadir o editar fácilmente archivos en las aplicaciones nativas instaladas en sus ordenadores.<br><br><b>Importante:</b> si habilita el servicio de edición, debe grabar la configuración del repositorio para poder editar las categorías predefinidas.",
		admin_icn_edit_service: "Servicio de edición:",
		admin_icn_edit_enable_hover: "Para utilizar el servicio de edición, debe realizar las siguientes acciones:<ul><li>Habilitar el servicio en el repositorio</li><li>Habilitar el servicio en los escritorios de su entorno</li><li>Instalar el cliente de edición de IBM Content Navigator en las estaciones de trabajo de los usuarios</li></ul> ",
		admin_icn_edit_disable_hover: "",
		admin_icn_edit_enable: "Habilitar",
		admin_icn_edit_disable: "Inhabilitar",
		admin_icn_edit_create_new_category: "Nueva categoría",
		admin_icn_edit_delete_category: "Suprimir categoría",
		admin_icn_edit_edit_category: "Editar categoría",
		admin_icn_edit_disable_category: "Inhabilitar categoría",
		admin_icn_edit_enable_category: "Habilitar categoría",
		admin_icn_edit_new_category_dialog_title: "Nueva categoría",
		admin_icn_edit_edit_category_dialog_title:"Editar categoría",
		admin_icn_edit_new_category_dialog_instructions: "Las categorías de documento permiten asociar plantillas con tipos MIME específicos para el servicio de edición. Por ejemplo, puede asociar un conjunto de plantillas con archivos PDF de modo que los usuarios puedan aplicar plantillas al añadir o editar archivos desde el cliente de edición de IBM Content Navigator. <br><br><b>Importante:</b> debe guardar la configuración del repositorio para poder añadir plantillas a la categoría que ha creado. ",
		admin_icn_edit_edit_category_dialog_instructions: "Debe guardar la configuración del repositorio para poder añadir plantillas a esta categoría. ",
		admin_icn_edit_delete_category_dialog_instructions: "¿Desea suprimir esta categoría y las plantillas que tiene asociadas?<br><br><b>Importante:</b> los cambios no serán permanentes hasta que guarde los cambios del repositorio. ",
		admin_icn_edit_category_label: "Categoría: ",
		admin_icn_edit_category_discription_label:"Descripción: ",
		admin_icn_edit_template_column_head:"Nombre de plantilla",
		admin_icn_edit_category_duplicate_error_message: "Ya existe una categoría con este ID. ",
		admin_icn_edit_word_category_description: "Esta categoría define las plantillas disponibles para documentos de Microsoft Word en el servicio de edición. ",
		admin_icn_edit_excel_category_description: "Esta categoría define las plantillas disponibles para documentos de Microsoft Excel en el servicio de edición. ",
		admin_icn_edit_powerpoint_category_description: "Esta categoría define las plantillas disponibles para documentos de Microsoft PowerPoint en el servicio de edición. ",

		icn_edit_add_template_dialog_title:"Añadir una plantilla de ${0}",
		icn_edit_add_template_only_one_file_error: "Solo puede seleccionar un archivo.",
		icn_edit_add_template_file_type_error: "Especifique un archivo de plantilla de ${0} válido.<br><br>El documento seleccionado tiene el tipo MIME ${1}.<br><br>Tipos MIME válidos: ${2}.",
		icn_edit_change_template_dialog_title: "Editar plantilla de ${0}",
		icn_edit_action_in_new_menu_name:"Documento ${0}",
		icn_edit_action_in_new_menu_submenu_oo_name: "con Office Online",
		icn_edit_action_in_new_menu_submenu_edit_service_name: "con aplicaciones de escritorio",
		icn_edit_new_document_dialog_title: "Nuevo documento ${0}",
		icn_edit_new_document_dialog_intro: "Cree un nuevo documento ${0} y añádalo al repositorio. El documento se creará con la plantilla de servicio de edición seleccionada.", 
		icn_edit_select_edit_service_template: "Seleccionar una plantilla",
		icn_edit_edit_service_template: "Plantilla de servicio de edición:",
		icn_edit_new_document_category_no_templates_message:"No hay plantillas en esta categoría. Póngase en contacto con el administrador para añadir plantillas a esta categoría.",
		icn_edit_installer: "Instalador del Servicio de edición de IBM Content Navigator",
		admin_icn_cm_classes_and_roles_settings: "Valores de clase y rol",
		admin_repcfg_classes_and_roles_warning: "Para especificar clases y usuarios o grupos de usuarios que tienen permiso para crear, editar y utilizar plantillas o crear borradores o documentos que funcionen con el servicio Office Online y el Servicio de edición.",
		admin_repcfg_classes_and_roles_click_warning: "pulse aquí.",
		/* Edit Service settings END */
		share_no_my_email_error: "Se ha producido un error al identificar la dirección de correo electrónico necesaria para compartir el documento.",
		share_no_my_email_error_explanation: "Ha iniciado sesión con el ID de usuario ${0}, pero el ID de usuario no está correlacionado con una dirección de correo electrónico.",
		share_no_my_email_error_userResponse: "Intente iniciar sesión de nuevo o utilice un ID de usuario diferente. Si el problema persiste, informe de este error al administrador del sistema.",
		share_no_my_email_error_adminResponse: "El ID de usuario ${0} no está correlacionado con una dirección de correo electrónico y el escritorio ${1} no permite a los usuarios editar la dirección de correo electrónico para los servicios de compartición de Box.<br><br>Intente una de las siguientes soluciones:<br>Asegúrese de que el complemento de correlación de correo electrónico está registrado.<br>Asegúrese de que el archivo emailMappingPlugin.json incluye el ID de usuario ${0} y la dirección de correo electrónico y a continuación compile, configure y registre el complemento de correlación de correo electrónico.<br>Si no desea utilizar el complemento de correo electrónico o el directorio de direcciones de correo electrónico FileNet P8, sino que desea permitir a los usuarios introducir su propia dirección de correo electrónico al compartir un documento, puede modificar los parámetros del escritorio para los servicios de compartición de Box para que los usuarios puedan enviar el enlace desde otra dirección de correo electrónico.",
		share_no_my_email_error_0: "user_id",
		share_no_my_email_error_1: "desktop_name",
		share_no_my_email_error_number: 2103,

		share_later_version_shared_error: "Se ha compartido una versión posterior de este documento por lo que no puede compartir la versión seleccionada de este documento.",
		share_later_version_shared_error_explanation: "No puede compartir una versión anterior de un documento previamente compartido.",
		share_later_version_shared_error_userResponse: "Para enviar el enlace a la versión posterior del documento, antes debe seleccionar la versión posterior y a continuación utilizar la acción Compartir.<br><br>Para enviar el enlace a la versión seleccionada del documento, antes debe suprimir la compartición de la versión posterior del documento.",
		share_later_version_shared_error_number: 2104,
		/* Email Dialog */
		email_new_message: "Mensaje nuevo",
		email_from: "De:",
		email_to: "A:",
		email_cc_link: "Cc",
		email_bcc_link: "Bcc",
		email_cc: "Cc:",
		email_bcc: "Bcc:",
		email_address_invalid: "Especifique una dirección de correo electrónico válida.",
		email_subject: "Asunto:",
		email_message: "Mensaje:",
		email_message_placeholder: "Añadir un mensaje",
		email_attachments: "Archivos adjuntos:",
		email_links: "Enlaces:",
		email_send: "Enviar",
		email_dont_send: "No enviar",
		email_subject_reminder: "Recordatorio de asunto",
		email_subject_reminder_confirm: "¿Desea enviar este mensaje sin asunto?",
		email_missing_from_error: "Se ha producido un problema al identificar la dirección de correo electrónico necesaria para enviar el correo electrónico.",
		email_missing_from_error_explanation: "Ha iniciado sesión con el ID de usuario ${0}, pero el ID de usuario no está correlacionado con una dirección de correo electrónico.",
		email_missing_from_error_userResponse: "Intente iniciar sesión de nuevo o utilice un ID de usuario diferente. Si el problema persiste, informe de este error al administrador del sistema.",
		email_missing_from_error_adminResponse: "El ID de usuario ${0} no está correlacionado con una dirección de correo electrónico y el escritorio ${1} no permite a los usuarios editar la dirección de correo electrónico Desde.<br><br>Intente una de las siguientes soluciones:<br>Asegúrese de que el complemento de correlación de correo electrónico está registrado.<br>Asegúrese de que el archivo emailMappingPlugin.json incluye el ID de usuario ${0} y la dirección de correo electrónico y a continuación compile, configure y registre el complemento de correlación de correo electrónico.<br>Si no desea utilizar el plug-in de correlación de correo electrónico o el directorio de direcciones de correo electrónico FileNet P8, sino que desea permitir a los usuarios introducir su propia dirección de correo electrónico al enviar un mensaje de correo electrónico, puede modificar los parámetros del correo electrónico del escritorio para permitir que los usuarios puedan modificar la dirección de correo electrónico.",
		email_missing_from_error_0: "user_id",
		email_missing_from_error_1: "desktop_name",
		email_missing_from_error_number: 2106,
		open_edit_document_with_native_application_error: "El documento no se puede abrir.",
		open_edit_document_with_native_application_error_explanation: "IBM Content Navigator no se puede conectar con el cliente de edición de IBM Content Navigator.",
		open_edit_document_with_native_application_error_userResponse: "Instale e inicie el cliente de edición de IBM Content Navigator en su estación de trabajo. A continuación, intente abrir de nuevo el documento.",
		open_edit_document_with_native_application_error_number: 2107,
		connect_to_the_streamline_service_error: "El documento no se puede abrir.",
		connect_to_the_streamline_service_error_explanation: "IBM Content Navigator no se puede conectar con el cliente de edición de IBM Content Navigator.",
		connect_to_the_streamline_service_error_userResponse: "Instale e inicie el cliente de edición de IBM Content Navigator en su estación de trabajo. A continuación, intente abrir de nuevo el documento.",
		connect_to_the_streamline_service_error_number: 2108,
		share_not_configured_error: "IBM Content Navigator no se ha configurado correctamente para compartir documentos.",
		share_not_configured_error_explanation: "La función de compartición de Box debe estar configurada correctamente para poder compartir documentos.",
		share_not_configured_error_userResponse: "Póngase en contacto con el administrador y solicite la configuración de la función de compartición de Box.",
		share_not_configured_error_adminResponse: "Los siguientes elementos deben estar configurados para poder compartir documentos:<ul><li>El servicio del gestor de tareas debe estar habilitado en los valores de la herramienta de administración.</li><li>El ID de conexión del gestor de tareas debe estar configurado en el repositorio.</li><li>El uso compartido debe estar habilitado en el repositorio.</li><li>Un repositorio de Box debe estar seleccionado para compartir en el escritorio.</li></ul>",
		share_not_configured_error_number: 2109,
		checkin_cors_save_attributes_error: "Los cambios de propiedad no se han guardado para la nueva versión",
		checkin_cors_save_attributes_error_explanation: "Se ha creado la versión, pero no se han guardado los cambios de propiedad . El documento se puede extraer de todos modos.",
		checkin_cors_save_attributes_error_userResponse: "Desbloquee el documento y actualice las propiedades utilizando el elemento de menú de contexto de propiedades.",
		checkin_cors_save_attributes_error_number: 2110,
		add_cors_save_attributes_error: "Los cambios de propiedad no se han guardado para el nuevo documento",
		add_cors_save_attributes_error_explanation: "Se ha creado el documento, pero no se han guardado los cambios de propiedad",
		add_cors_save_attributes_error_userResponse: "Actualice las propiedades utilizando el elemento de menú contextual de propiedades.",
		add_cors_save_attributes_error_number: 2111,
		edit_document_using_edit_service_error: "El documento no se puede abrir.",		
		edit_document_using_edit_service_error_explanation: "No se puede abrir el documento en el Servicio de edición.",
		edit_document_using_edit_service_error_userResponse: "Solicite al administrador que actualice la integración del Servicio de edición.<br><br> Si el usuario necesita acceder a este documento desde el Servicio de edición, vaya a la página Editar integración del repositorio y actualice el Servicio de edición para incluir la clase en la lista de clases que se deben modificar para dar soporte al Servicio de edición.",		
		edit_document_using_edit_service_error_number: 2112,
		edit_document_is_editing_by_oos_error: "El documento no se puede abrir.",		
		edit_document_is_editing_by_oos_error_explanation: "El documento está siendo utilizado por el servicio Office Online.",
		edit_document_is_editing_by_oos_error_userResponse: "Debe guardar y cerrar el documento en el servicio Office Online para poder abrirlo en el Servicio de edición.",		
		edit_document_is_editing_by_oos_error_number: 2113,
		admin_enable_cors: "Habilite las cargas CORS (uso compartido de recursos de diversos orígenes)",

		/* Email Settings */
		admin_email_settings: "Parámetros de correo electrónico:",
		admin_email_settings_hover: "Especifique el tipo de servicio de correo electrónico que desee que utilicen los usuarios. Al habilitar el servicio de correo electrónico basado en HTML, puede permitir que los usuarios modifiquen su dirección de correo electrónico Desde. Si desea habilitar el servicio de correo electrónico basado en Java, debe tener un explorador que soporte Java.",
		admin_email_use_service: "Utilice el servicio de correo electrónico basado en HTML",
		admin_email_use_applet: "Utilice el servicio de correo electrónico basado en Java",
		admin_email_can_modify_from: "Permitir a los usuarios modificar la dirección de correo electrónico Desde.",
		admin_email_can_modify_from_hover: "De forma predeterminada, la dirección de correo electrónico desde no se puede modificar y se obtiene de una correlación de usuarios y direcciones de correo electrónico que representan cuentas de usuario.<br><br>Seleccione esta opción para permitir a los usuarios editar su dirección de correo electrónico al enviar un mensaje de correo electrónico; sin embargo, la validez de la dirección de correo electrónico no está verificada.",
		admin_email_use_from_as_sender: "Utilice la dirección de correo electrónico Desde como el emisor del mensaje de correo electrónico",
		admin_email_use_from_as_sender_hover: "De forma predeterminada, se utiliza una dirección de correo electrónico Desde en mensajes de correo electrónico del usuario. La dirección de correo electrónico se define mediante la sesión de correo CNMailSession en el servidor de aplicaciones. Seleccione esta opción para especificar que se utilizará la dirección de correo electrónico del usuario en el mensaje de correo electrónico.",

		/* New Annotation Dialog */
		addAnnotationDlg_title: "Nuevas anotaciones",
		addAnnotationDlg_labelContents: "Contenido:",
		addAnnotationDlg_labelAccess: "Acceso:",
		addAnnotationDlg_labelPublic: "Público",
		addAnnotationDlg_labelPrivate: "Privado",
		addAnnotationDlg_labelPrivateGroup: "Privado para grupo",
		addAnnotationDlg_labelGroup: "Grupo",
		addAnnotationDlg_labelCopiable: "Esta anotación se puede copiar en otro servidor.",
		addAnnotationDlg_buttonLabel_save: "Guardar",

		/* Skip navigation */
		skipNavigation_title_main: "Saltar al contenido principal",
		skipNavigation_title_menu: "Saltar a botones de navegación",
		skipNavigation_label_main: "Saltar al contenido principal",
		skipNavigation_label_menu: "Saltar a botones de navegación",

		/* Manage teamspace pane */
		manage_teamspace_pane_title: "Gestionar espacios de equipo",
		manage_teamspace_pane_instance_hdr: "Espacios de equipo",
		manage_teamspace_pane_template_hdr: "Plantillas",

		/* Horizontal Pane for breadcrumb scrolling */
		scroll_forward: "Desplazar hacia adelante",
		scroll_back: "Desplazar hacia atrás",

		breadcrumb_separator_open: "Abrir nodo",
		breadcrumb_separator_close: "Cerrar nodo",

		/* DropDownLink */
		drop_down_link_summary: "${0}, ${1}",

		/* Properties display pane */
		no_item_selected: "No se ha seleccionado ningún elemento.",

		/* eds */
		eds_url: "URL de servicio de datos externos:",
		eds_request_timeout: "Tiempo de espera de solicitud de servicio (segundos):",
		eds_is_required: "Impedir que los usuarios realicen acciones que cambien los valores de propiedades cuando EDS no está disponible",

		/* eforms */
		eform_signing_pane_welcome: "Firmar el formulario",
		eform_signing_button_label: "Firmar",
		eform_signing_pane_delete: "Suprimir la firma",
		eform_signing_button_label_delete: "Suprimir",

		xtplugin_server_label: "URL del servidor de IBM FileNet Workplace XT",
		xtplugin_server_hover: "Escriba el URL del servidor donde se ha desplegado IBM FileNet Workplace XT , por ejemplo, http://localhost:8080/WorkplaceXT.",

		ecplugin_server_label: "URL del servidor de IBM eClient",
		ecplugin_server_hover: "Escriba el URL del servidor donde se ha desplegado IBM eClient, por ejemplo, http://localhost:9080/eClient/s.",

		/* Large number of items action confirmation */
		large_number_actions_confirmation_question: "Realizar acciones en una gran cantidad de elementos puede tardar mucho tiempo. ¿Desea continuar?",
		large_number_actions_continue_button: "Continuar",

		large_items_actions_confirmation_question: "Realizar acciones en elementos grandes puede tardar mucho tiempo. ¿Desea continuar?",

		viewer_editproperties_title: "Confirmación",
		viewer_editproperties_title_warning: "Aviso",
		viewer_editproperties_save: "Guardar",
		viewer_editproperties_next: "Siguiente",
		viewer_editproperties_reset: "Restablecer",
		viewer_editproperties_reset_hover: "Todos los datos no guardados se restablecerán a los valores previamente guardados.",
		viewer_editproperties_saveandgetnext: "Guardar y luego obtener siguiente",
		viewer_editproperties_saveandgetnext_hover: "Obtener el siguiente documento automáticamente después de guardar mis cambios.",
		viewer_editproperties_prompt_save_changes: "Ha cambiado las propiedades del siguiente documento<br>${0}<br><br>¿Desea guardar los cambios?",
		viewer_editproperties_prompt_discard_changes: "Ha cambiado las propiedades del siguiente documento<br>${0}<br><br>No obstante, una o más propiedades tienen un valor no válido, por lo que no se pueden guardar los cambios. Puede corregir los valores no válidos o descartar los cambios.<br>¿Desea corregir los valores no válidos mostrados en el panel de propiedades?",
		viewer_comments_prompt_discard_changes: "Ha modificado los comentarios. ¿Desea guardar los cambios?",
		viewer_notelogs_prompt_discard_changes: "Ha modificado los registros de notas. ¿Desea guardar los cambios?",
		social_collaborated_version: "Versión: ${0}",
		social_link_label: "Quien...",

		// social comments
		comments: "Comentarios",
		comments_add_hint: "Pulse Intro para añadir los comentarios.",
		comments_hint: "Escriba sus comentarios.",
		comments_label: "Pulse Intro o la tecla de tabulación para guardar los comentarios. Pulse Esc para cancelar.",
		comments_delete_confirmation: "¿Desea suprimir el comentario seleccionado?",
		comments_number: "Comentarios: ${0}",
		comments_save_new: "Ha modificado los comentarios. ¿Desea cerrar la ventana sin guardar los cambios?",

		notelogs: "Registros de notas",
		notelogs_download: "Descargar",
		notelog_modify: "Guardar cambios",
		notelog_edit: "Editar registro de notas",
		notelog_create_newVersion: "Crear una versión nueva del registro de notas",
		notelog_add_hint: "Escriba sus comentarios y pulse Intro para añadirlos.",
		notelog_hint: "Pulse Mayús + Intro para salto de línea.",
		notelog_add_placeholder: "Pulse Intro para añadir los comentarios al registro de notas.",
		notelog_save_new: "Ha modificado el registro de notas. ¿Desea cerrar la ventana sin guardar los cambios?",

		// P8 markings related
		cannot_remove_markings: "No tiene permiso para eliminar los valores de marca: {0}",

		// download count
		downloadcount: "Descargas: {0}",
		downloadcount_single: "1 descarga",
		downloadcount_multiple: "{0} descargas",
		downloadcount_none: "Nadie ha descargado esto todavía",

		// recommendations
		recommendations: "Me gusta: {0}",
		recommendations_recommend: "Me gusta esto",
		recommendations_unrecommend: "Me disgusta esto",
		recommendations_you: "Le gusta esto",
		recommendations_you_and_another: "A usted y a otra persona les gusta esto",
		recommendations_you_and_others: "A usted y {0} personas más les gusta esto",
		recommendations_another: "A 1 persona le gusta esto",
		recommendations_others: "A {0} personas les gusta esto",
		recommendations_none: "A nadie le gusta esto todavía",

		// tags
		tags: "Etiquetas: ${0}",
		tags_delete: "Suprimir ${0}",
		tags_none: "No hay etiquetas que mostrar.",
		tags_add: "Añadir etiquetas:",
		tags_hint: "Pulse Intro para añadir las etiquetas.",
		tags_hover_help: "Especifique una etiqueta o una lista de etiquetas que se puede utilizar para buscar documentos con la misma etiqueta. Puede utilizar una coma (,), un punto y coma (;), o un espacio para separar las etiquetas.",
		tags_hover_help_box: "Especifique una etiqueta o lista de etiquetas separada por comas que se puede utilizar para buscar documentos con la misma etiqueta.",
		tags_no_access: "No tiene los permisos adecuados para añadir etiquetas.",

		//task scheduler pane
		taskPane_tooltip: "Abrir la vista Tareas asíncronas",
		taskPane_tree: "Árbol de navegación del panel de tareas",
		taskPane_allTasks: "Todas las tareas",
		taskPane_scheduledTasks: "Tareas planificadas",
		taskPane_recurringTasks: "Tareas recurrentes",
		taskPane_inProgressTasks: "Tareas en curso",
		taskPane_completedTasks: "Tareas completadas",
		taskPane_failedTasks: "Tareas con error",
		taskPane_disabledTasks: "Tareas inhabilitadas",
		taskPane_statusScheduled: "Planificado",
		taskPane_statusInProgress: "En curso",
		taskPane_statusCompleted: "Completado",
		taskPane_statusFailed: "Error",
		taskPane_statusPaused: "En pausa",
		taskPane_noItemSelected: "No se ha seleccionado ningún elemento",
		taskSchedulerPane_scheduleInformation: "Información de planificación",
		taskSchedulerPane_loginInformation: "Información de inicio de sesión",
		taskSchedulerPane_startImmediately: "Iniciar inmediatamente",
		taskSchedulerPane_recurrence: "Recurrencia",
		taskSchedulerPane_interval: "Intervalo",
		taskSchedulerPane_scheduleReport: "Planificar informe",
		taskSchedulerPane_nameHoverHelp: "Especifique el nombre de la tarea.",
		taskSchedulerPane_descriptionHoverHelp: "Escriba una descripción para la tarea. La descripción debería ayudar a distinguir entre tareas.",
		taskSchedulerPane_startTimeHoverHelp: "Especifique cuándo desea que se ejecute la tarea. Para ejecutar ahora la tarea, seleccione Iniciar inmediatamente.",
		taskSchedulerPane_recurrenceHoverHelp: "Puede planificar la tarea para que se ejecute de forma recurrente.",
		taskSchedulerPane_endTimeHoverHelp: "Especifique cuándo desea que se detenga la ejecución de la tarea. La tarea se ejecuta desde la hora de inicio planificada hasta la hora de finalización planificada.",
		taskSchedulerPane_usernameHoverHelp: "Para las tareas recurrentes, debe especificar un nombre de usuario para que el servicio lo autentique cuando se ejecuta la tarea.",
		taskSchedulerPane_passwordHoverHelp: "Para las tareas recurrentes, debe especificar la contraseña del usuario especificado para que el servicio la autentique cuando se ejecuta la tarea.",
		taskSchedulerPane_notification: "Notificación",
		taskSchedulerPane_emailAddress: "Dirección de correo electrónico",
		taskSchedulerPane_emailAddressHoverHelp: "Escriba la dirección de correo electrónico en la que recibir notificaciones acerca del estado de la tarea.",
		taskSchedulerPane_intervalHoverHelp: "Especifique el período de tiempo en que se ejecutará la tarea recurrente. Puede establecer el intervalo en horas, días, semanas o meses.",
		taskSchedulerPane_scheduledStartTime: "Hora de inicio planificada",
		taskSchedulerPane_startTime: "Hora de inicio",
		taskSchedulerPane_title: "Planificar",
		taskSchedulerPane_runNow: "Ejecutar ahora",
		taskSchedulerPane_runOnce: "Ejecutar una vez",
		taskSchedulerPane_runAtSchedule: "Ejecutar en una planificación",
		taskSchedulerPane_repeats: "Repeticiones",
		taskSchedulerPane_repeatsEvery: "Repetir cada",
		taskSchedulerPane_hourly: "Cada hora",
		taskSchedulerPane_daily: "Cada día",
		taskSchedulerPane_weekly: "Cada semana",
		taskSchedulerPane_monthly: "Cada mes",
		taskSchedulerPane_yearly: "Cada año",
		taskSchedulerPane_sunday: "Sá",
		taskSchedulerPane_monday: "Lu",
		taskSchedulerPane_tuesday: "Ju",
		taskSchedulerPane_wednesday: "Mi",
		taskSchedulerPane_thursday: "Ju",
		taskSchedulerPane_friday: "Vi",
		taskSchedulerPane_saturday: "Sá",
		taskSchedulerPane_starting: "Fecha inicial",
		taskSchedulerPane_after: "Después de",
		taskSchedulerPane_ending: "Fecha final",
		taskSchedulerPane_times: "veces",
		taskSchedulerPane_days: "día(s)",
		taskSchedulerPane_hours: "hora(s) en el día",
		taskSchedulerPane_interval: "Intervalo",
		taskSchedulerPane_endingDays: "Finalización (en días)",
		taskSchedulerPane_never: "Nunca",
		taskSchedulerPane_categorization: "Categorización",
		taskSchedulerPane_scheduleTask: "Tarea de planificación",
		taskInformationPane_details: "Detalles",
		taskInformationPane_errors: "Errores",
		taskInformationPane_taskInstances: "Instancias de tarea",
		taskInformationPane_audits: "Auditorías",
		taskInformationPane_results: "Resultados",
		asyncTasks: "Tareas asíncronas",

		//entry template pane
		search_all_entry_templates: "Buscar todas las plantillas de entrada.",

		//global actions currently used in the context of the INOC and Share plugins
		fullsite: "Ver el sitio completo",
		mobilesite: "Ver el sitio para dispositivos móviles",
		profile: "Gestionar perfil",
		office_template: "Plantilla de Office:",
		select_office_template: "Seleccionar una plantilla de Office",
		// Merge and Split action
		document_builder_pdf_and_tiff_unsupported_viewer_error: "Los documentos seleccionados no se pueden abrir en el visor con la acción Fusionar y dividir.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_explanation: "El visor configurado para los documentos PDF y TIFF no soporta la acción Fusionar y dividir.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_userResponse: "Pida al administrador que configure un visor para documentos PDF i TIFF que soporte la acción Fusionar y dividir, como el visor Daeja ViewONE Virtual.",
		document_builder_pdf_and_tiff_unsupported_viewer_error_number: 3000,		

		document_builder_pdf_unsupported_viewer_error: "Los documentos PDF seleccionados no se pueden abrir en el visor con la acción Fusionar y dividir.",
		document_builder_pdf_unsupported_viewer_error_explanation: "El visor configurado para los documentos PDF no soporta la acción Fusionar y dividir.",
		document_builder_pdf_unsupported_viewer_error_userResponse: "Pida al administrador que configure un visor para documentos PDF que soporte la acción Fusionar y dividir, como el visor Daeja ViewONE Virtual.",
		document_builder_pdf_unsupported_viewer_error_number: 3001,		

		document_builder_tiff_unsupported_viewer_error: "Los documentos TIFF seleccionados no se pueden abrir en el visor con la acción Fusionar y dividir.",
		document_builder_tiff_unsupported_viewer_error_explanation: "El visor configurado para los documentos TIFF no soporta la acción Fusionar y dividir.",
		document_builder_tiff_unsupported_viewer_error_userResponse: "Pida al administrador que configure un visor para documentos TIFF que soporte la acción Fusionar y dividir, como el visor Daeja ViewONE Virtual.",
		document_builder_tiff_unsupported_viewer_error_number: 3002,		

		document_builder_unsupported_documents_error: "Los documentos seleccionados no se pueden abrir en el visor con la acción Fusionar y dividir.",
		document_builder_unsupported_documents_error_explanation: "La acción Fusionar y dividir solo funciona con documentos PDF y TIFF.",
		document_builder_unsupported_documents_error_userResponse: "Seleccione los documentos soportados y vuelva a intentarlo.",
		document_builder_unsupported_documents_error_number: 3003,		
		document_builder_some_unsupported_documents_error: "Algunos de los documentos seleccionados no se pueden abrir en el visor con la acción Fusionar y dividir.",
		document_builder_some_unsupported_documents_error_explanation: "La acción Fusionar y dividir solo funciona con documentos PDF y TIFF abiertos desde el mismo repositorio.",
		document_builder_some_unsupported_documents_error_userResponse: "Los documentos soportados se abrirán en el visor.",
		document_builder_some_unsupported_documents_error_number: 3004,		

		// This message is based on the message for viewer_redaction_checkin_... above (message number 2078)
		document_builder_checkin_failed: "Se ha producido un error al incorporar el contenido modificado.",
		document_builder_checkin_failed_explanation: "El visor ha recibido una respuesta de error al incorporar el contenido modificado.",
		document_builder_checkin_failed_userResponse: "Pida al administrador del sistema que revise los archivos de registro del servidor de aplicaciones web.",
		document_builder_checkin_failed_number: 3005,
		// This message is based on the message for viewer_unable_to_view_... above (message number 2046)
		no_viewer_to_view_error: "El documento no se puede abrir.",
		no_viewer_to_view_error_explanation: "El administrador del sistema ha bloqueado la visualización de este documento. Si tiene que acceder a este documento, puede descargarlo.",
		no_viewer_to_view_error_number: 3006,

		document_build_failed: "No se ha podido compilar el contenido.",
		document_build_failed_userResponse: "Pida al administrador del sistema que revise los archivos de registro del visor.",
		document_build_failed_number: 3007,

		document_builder_open_failed: "No se ha podido abrir el documento en modo Fusionar y dividir.",
		document_builder_open_failed_userResponse: "Pida al administrador del sistema que revise los archivos de registro del visor.",
		document_builder_open_failed_number: 3008,		

		document_builder_switch_failed: "El sistema no ha podido conmutar al modo Fusionar y dividir.",
		document_builder_switch_failed_userResponse: "Pida al administrador del sistema que revise los archivos de registro del visor.",
		document_builder_switch_failed_number: 3009,		
		// print service
		print_service_document_options_tab_title: "Documentos",
		print_service_page_setup_tab_title: "Configuración de página",
		print_service_OD_print_tab_title: "Opciones de impresora",
		print_service_status_merging: "Fusionando documentos...",
		print_service_status_converting: "Convirtiendo documentos...",
		print_service_status_formatting: "Formateando el documento para impresión...",
		admin_print_service_maximum_number_to_print: "Número máximo de documentos que se pueden imprimir:",
		admin_print_service_maximum_size_to_print: "Cantidad máxima de datos que se pueden imprimir (en MB):",
		admin_print_service_maximum_number_to_print_hover_help: "Especifique el número máximo de documentos que los usuarios pueden imprimir de una sola vez. El máximo predeterminado es de 50. Si no desea limitar la impresión por número de documentos, establezca el valor 0 para este límite",
		admin_print_service_maximum_size_to_print_hover_help:  "<b>Restricción:</b> este valor no está soportado en IBM Content Manager OnDemand.<br/><br/>Especifique la cantidad máxima de datos que se pueden imprimir utilizando el servicio de impresión IBM Daeja ViewONE.<br /><br />El tamaño total de cada documento seleccionado no puede exceder esta cantidad.<br/><br/>El límite predeterminado es 200 MB. Si se establece el límite por encima de 200 MB, esto podría afectar al rendimiento del sistema. Si no desea limitar la impresión por tamaño de documento, establezca el valor 0 para este límite",
		// error printing
		print_service_error_printing: "Se ha producido un error durante la impresión.",
		print_service_error_printing_userResponse: "Pida al administrador del sistema que revise los archivos de registro del servicio de impresión.",
		print_service_error_printing_number: 3100,

		// print too large error
		print_service_max_content_error: "Los documentos seleccionados son demasiado grande para poder imprimirlos",
		print_service_max_content_error_explanation: "Los documentos seleccionados exceden el límite de ${0} MB de datos",
		print_service_max_content_error_userResponse: "Seleccione menos documentos o documentos más pequeños y vuelva a imprimir. También puede ponerse en contacto con el administrador del sistema para aumentar el tamaño máximo total de los elementos que se pueden imprimir de una vez en este escritorio.",
		print_service_max_content_error_0: "tamaño_máximo_de_elementos",
		print_service_max_content_error_number: 3101,

		// print too many selected error
		print_service_max_number_selected_error: "No se pueden imprimir los elementos. ",
		print_service_max_number_selected_error_explanation: "Puede imprimir hasta ${0} elementos a la vez. Está intentando imprimir ${1} elementos.",
		print_service_max_number_selected_error_userResponse: "Seleccione menos elementos e intente volver a imprimir los elementos. También puede ponerse en contacto con el administrador del sistema para aumentar el número máximo de elementos que se pueden imprimir de una vez en este escritorio.",
		print_service_max_number_selected_error_0: "número_máximo_de_elementos",
		print_service_max_number_selected_error_1: "número_de_elementos",
		print_service_max_number_selected_error_number: 3102,
		/*do not remove this line*/nop: null
});

